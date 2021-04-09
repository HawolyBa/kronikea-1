const { db } = require("../utils/admin");
const { arr_diff } = require("../utils/validators");

exports.storyDeleted = (snapshot) => {
  const batch = db.batch();

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
      return batch.commit();
    })
    .catch((err) => console.log(err));
};

exports.storyUpdated = (change) => {
  if (change.before.data().title !== change.after.data().title) {
    return db
      .collection("locations")
      .where("storyId", "==", change.after.id)
      .get()
      .then((docs) => {
        docs.forEach((doc) => {
          db.collection("locations")
            .doc(doc.id)
            .update({ storyTitle: change.after.data().title });
        });
      });
  }
};

exports.chapterCreated = (snapshot) => {
  return db
    .doc(`/stories/${snapshot.data().storyId}`)
    .get()
    .then((doc) => {
      if (doc.exists) {
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
        return db.doc(`/stories/${snapshot.data().storyId}`).update({
          chaptersCount: doc.data().chaptersCount + 1,
          secondaryCharacters: newArr,
          secondaryArr: newArr.map((c) => c.id),
        });
      }
    })
    .catch((err) => console.log(err));
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
