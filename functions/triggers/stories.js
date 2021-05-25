const { db, admin } = require("../utils/admin");
const { arr_diff } = require("../utils/validators");
const { CATEGORIES } = require("../utils/helpers");

exports.storyCreated = (snapshot) => {
  const batch = db.batch();
  const categories = snapshot.data().categories;
  const catQueries = [];
  categories.forEach((cat) => {
    const catId = CATEGORIES.find((c) => c.value === cat).id;
    catQueries.push(db.collection("categories").doc(catId).get());
  });

  return Promise.all(catQueries)
    .then((res) => {
      res.forEach((cat) => {
        batch.update(db.collection("categories").doc(cat.id), {
          storiesCount: cat.data().storiesCount + 1,
        });
      });
      return batch.commit();
    })
    .catch((err) => console.log(err));
};

exports.storyDeleted = (snapshot) => {
  const batch = db.batch();
  const categories = snapshot.data().categories;
  const catQueries = [];
  categories.forEach((cat) => {
    const catId = CATEGORIES.find((c) => c.value === cat).id;
    catQueries.push(db.collection("categories").doc(catId).get());
  });

  return db
    .collection("storiesLikes")
    .where("storyId", "==", snapshot.id)
    .get()
    .then((data) => {
      data.forEach((doc) => {
        batch.delete(db.doc(`storiesLikes/${doc.id}`));
      });
      return db
        .collection("chapters")
        .where("storyId", "==", snapshot.id)
        .get();
    })
    .then((data) => {
      data.forEach((doc) => {
        batch.delete(db.doc(`chapters/${doc.id}`));
      });
      return db
        .collection("locations")
        .where("storyId", "==", snapshot.id)
        .get();
    })
    .then((data) => {
      data.forEach((doc) => {
        batch.delete(db.doc(`locations/${doc.id}`));
      });
      return Promise.all(catQueries);
    })
    .then((res) => {
      res.forEach((cat) => {
        batch.update(db.collection("categories").doc(cat.id), {
          storiesCount: cat.data().storiesCount - 1,
        });
      });
      return batch.commit();
    })
    .catch((err) => console.log(err));
};

exports.storyUpdated = (change) => {
  const batch = db.batch();
  let oldCats = change.before.data().categories;
  let newCats = change.after.data().categories;
  if (
    change.before.data().title !== change.after.data().title ||
    oldCats !== newCats
  ) {
    oldCats = oldCats.filter(
      (cat) => !change.after.data().categories.includes(cat)
    );
    newCats = newCats.filter(
      (cat) => !change.before.data().categories.includes(cat)
    );
    const oldCatQueries = oldCats.map((cat) => {
      const catId = CATEGORIES.find((c) => c.value === cat).id;
      return db.collection("categories").doc(catId).get();
    });
    const newCatQueries = newCats.map((cat) => {
      const catId = CATEGORIES.find((c) => c.value === cat).id;
      return db.collection("categories").doc(catId).get();
    });

    return db
      .collection("locations")
      .where("storyId", "==", change.after.id)
      .get()
      .then((docs) => {
        docs.forEach((doc) => {
          batch.update(db.collection("locations").doc(doc.id), {
            storyTitle: change.after.data().title,
            lastUpdated: admin.firestore.FieldValue.serverTimestamp(),
          });
        });
        return Promise.all(oldCatQueries);
      })
      .then((res) => {
        res.forEach((cat) => {
          batch.update(db.collection("categories").doc(cat.id), {
            storiesCount: cat.data().storiesCount - 1,
          });
        });
        return Promise.all(newCatQueries);
      })
      .then((res) => {
        res.forEach((cat) => {
          batch.update(db.collection("categories").doc(cat.id), {
            storiesCount: cat.data().storiesCount + 1,
          });
        });
        return batch.commit();
      });
  }
};

exports.chapterCreated = (snapshot) => {
  let storyTitle = "";
  let visibility;
  if (snapshot.data().status) {
    return db
      .doc(`/stories/${snapshot.data().storyId}`)
      .get()
      .then((doc) => {
        if (doc.exists) {
          storyTitle = doc.data().title;
          visibility = doc.data().public;
          const main = doc.data().mainCharacters;
          let secondaryCharacters = [...doc.data().secondaryArr];
          let charInChapter = snapshot
            .data()
            .characters.filter((c) => !main.includes(c));
          let newArr = [];
          charInChapter.forEach((char) => {
            const index = secondaryCharacters.findIndex((c) => c.id === char);
            if (index !== -1) {
              newArr.push({
                id: secondaryCharacters[index].id,
                times: secondaryCharacters[index].times++,
              });
            } else {
              newArr.push({ id: char, times: 1 });
            }
          });
          newArr = snapshot.data().status === true ? newArr : [];
          db.doc(`/stories/${snapshot.data().storyId}`).update({
            chaptersCount: doc.data().chaptersCount + 1,
            secondaryCharacters: newArr,
            secondaryArr: newArr.map((c) => c.id),
            lastUpdated: admin.firestore.FieldValue.serverTimestamp(),
          });
          return db
            .collection("storiesLikes")
            .where("storyId", "==", doc.id)
            .get();
        }
      })
      .then((storyLikes) => {
        if (visibility) {
          storyLikes.forEach((like) => {
            db.collection("notifications").add({
              read: false,
              type: "newChapter",
              recipient: like.data().senderId,
              createdAt: admin.firestore.FieldValue.serverTimestamp(),
              message: `A new chapter has been posted for story ${storyTitle}`,
              storyId: snapshot.data().storyId,
              chapterId: snapshot.id,
            });
          });
        }
      })
      .catch((err) => console.log(err));
  }
};

exports.chapterUpdated = (change) => {
  if (change.after.data().characters !== change.before.data().characters) {
    return db
      .doc(`/stories/${change.after.data().storyId}`)
      .get()
      .then((doc) => {
        if (doc.exists) {
          const originArr = change.before
            .data()
            .characters.filter((c) => !doc.data().mainCharacters.includes(c));
          let secondaryCharactersArr = [...doc.data().secondaryCharacters];
          let charInChapter = change.after
            .data()
            .characters.filter((c) => !doc.data().mainCharacters.includes(c));
          let newArr = arr_diff(originArr, charInChapter);

          newArr.forEach((char) => {
            const index = secondaryCharactersArr.findIndex(
              (c) => c.id === char
            );
            // Vérifier si rajouté ou retiré
            if (!originArr.includes(char)) {
              // Char n'existe pas
              if (index === -1) {
                secondaryCharactersArr.push({ id: char, times: 1 });
              } else {
                // char existe donc on ajoute time 1
                secondaryCharactersArr[index].times =
                  secondaryCharactersArr[index].times + 1;
              }
            } else {
              // char retiré donc on enlève time 1
              secondaryCharactersArr[index].times =
                secondaryCharactersArr[index].times - 1;
            }
          });

          secondaryCharactersArr = secondaryCharactersArr.filter(
            (c) => c.times > 0
          );

          secondaryCharactersArr =
            change.after.data().status === true ? secondaryCharactersArr : [];

          return db.doc(`/stories/${change.after.data().storyId}`).update({
            secondaryCharacters: secondaryCharactersArr,
            lastUpdated: admin.firestore.FieldValue.serverTimestamp(),
            secondaryArr: secondaryCharactersArr.map((c) => c.id),
          });
        }
      });
  }
};

exports.chapterDeleted = (snapshot) => {
  const batch = db.batch();
  let charactersFromChapter;
  let charactersFromStory;

  return db
    .collection("comments")
    .where("chapterId", "==", snapshot.id)
    .get()
    .then((comments) => {
      comments.forEach((comm) => batch.delete(db.doc(`/comments/${comm.id}`)));
      return db
        .collection("notifications")
        .where("chapterId", "==", snapshot.id)
        .get();
    })
    .then((notif) => {
      notif.forEach((n) => batch.delete(db.doc(`/comments/${n.id}`)));
      return db.collection("stories").doc(snapshot.data().storyId).get();
    })
    .then((story) => {
      charactersFromChapter = snapshot.data().characters;
      charactersFromStory = story.data().secondaryCharacters;
      let newArr = charactersFromStory
        .map((c) => {
          if (charactersFromChapter.includes(c.id)) {
            return { ...c, times: c.times - 1 };
          } else {
            return c;
          }
        })
        .filter((c) => c.times > 0);
      batch.update(db.collection("stories").doc(snapshot.data().storyId), {
        chaptersCount: story.data().chaptersCount - 1,
        secondaryCharacters: newArr,
        secondaryArr: newArr.map((c) => c.id),
      });
      return batch.commit();
    })
    .catch((err) => console.log(err));
};
