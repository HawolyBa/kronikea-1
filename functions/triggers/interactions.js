const { db, admin } = require("../utils/admin");

exports.storyLiked = (snapshot) => {
  const batch = db.batch();
  return db
    .collection("stories")
    .doc(snapshot.data().storyId)
    .get()
    .then((doc) => {
      if (doc.exists) {
        batch.update(db.collection("stories").doc(snapshot.data().storyId), {
          likesCount: doc.data().likesCount + 1,
        });
        if (doc.data().authorId !== snapshot.data().senderId) {
          batch.set(
            db
              .collection("notifications")
              .doc(`${snapshot.data().senderId}${snapshot.data().storyId}`),
            {
              type: "storyLike",
              read: false,
              recipient: doc.data().authorId,
              sender: snapshot.data().senderId,
              storyId: snapshot.data().storyId,
              createdAt: admin.firestore.FieldValue.serverTimestamp(),
              message: `${snapshot.data().sender} liked your story ${
                doc.data().title
              }`,
            }
          );
        }
        return batch.commit();
      }
    });
};

exports.storyUnliked = (snapshot) => {
  return db
    .collection("stories")
    .doc(snapshot.data().storyId)
    .get()
    .then((doc) => {
      if (doc.exists) {
        return db
          .collection("stories")
          .doc(snapshot.data().storyId)
          .update({
            likesCount: doc.data().likesCount - 1,
          });
      }
    });
};

exports.characterLiked = (snapshot) => {
  const batch = db.batch();
  return db
    .collection("characters")
    .doc(snapshot.data().characterId)
    .get()
    .then((doc) => {
      if (doc.exists) {
        batch.update(
          db.collection("characters").doc(snapshot.data().characterId),
          {
            likesCount: doc.data().likesCount + 1,
          }
        );
        if (doc.data().authorId !== snapshot.data().senderId) {
          batch.set(
            db
              .collection("notifications")
              .doc(`${snapshot.data().senderId}${snapshot.data().characterId}`),
            {
              type: "characterLike",
              read: false,
              recipient: doc.data().authorId,
              sender: snapshot.data().senderId,
              characterId: snapshot.data().characterId,
              createdAt: admin.firestore.FieldValue.serverTimestamp(),
              message: `${snapshot.data().sender} liked your character ${
                doc.data().firstname
              } ${doc.data().lastname ? doc.data().lastname : ""}`,
            }
          );
        }
        return batch.commit();
      }
    });
};

exports.characterUnliked = (snapshot) => {
  return db
    .collection("characters")
    .doc(snapshot.data().characterId)
    .get()
    .then((doc) => {
      if (doc.exists) {
        return db
          .collection("characters")
          .doc(snapshot.data().characterId)
          .update({
            likesCount: doc.data().likesCount - 1,
          });
      }
    });
};

exports.userFollowed = (snapshot) => {
  const batch = db.batch();
  return db
    .collection("users")
    .doc(snapshot.data().recipient)
    .get()
    .then((doc) => {
      if (doc.exists) {
        batch.update(db.collection("users").doc(snapshot.data().recipient), {
          likesCount: doc.data().likesCount + 1,
        });
        batch.set(
          db
            .collection("notifications")
            .doc(`${snapshot.data().senderId}${snapshot.data().recipient}`),
          {
            type: "follow",
            read: false,
            recipient: doc.id,
            sender: snapshot.data().senderId,
            createdAt: admin.firestore.FieldValue.serverTimestamp(),
            message: `${snapshot.data().sender} started following you`,
          }
        );
        return batch.commit();
      }
    });
};

exports.userUnfollowed = (snapshot) => {
  return db
    .collection("users")
    .doc(snapshot.data().recipient)
    .get()
    .then((doc) => {
      if (doc.exists) {
        return db
          .collection("users")
          .doc(snapshot.data().recipient)
          .update({
            likesCount: doc.data().likesCount - 1,
          });
      }
    });
};

exports.commentPosted = (snapshot) => {
  const batch = db.batch();

  if (snapshot.data().storyId) {
    return db
      .collection("users")
      .doc(snapshot.data().authorId)
      .get()
      .then((doc) => {
        if (
          doc.exists &&
          !snapshot.data().answer &&
          snapshot.data().userId !== snapshot.data().authorId
        ) {
          db.collection("notifications").add({
            read: false,
            type: "comment",
            createdAt: admin.firestore.FieldValue.serverTimestamp(),
            recipient: doc.id,
            sender: snapshot.data().userId,
            chapterId: snapshot.data().chapterId,
            storyId: snapshot.data().storyId,
            message: `${
              snapshot.data().username
            } posted a commented on your story ${snapshot.data().title}`,
          });
          return;
        } else if (snapshot.data().answer) {
          return db.collection("users").doc(snapshot.data().answeredToId).get();
        }
      })
      .then((user) => {
        if (user && user.exists && user.id !== snapshot.data().userId) {
          db.collection("notifications").add({
            read: false,
            type: "comment",
            createdAt: admin.firestore.FieldValue.serverTimestamp(),
            recipient: user.id,
            sender: snapshot.data().userId,
            chapterId: snapshot.data().chapterId,
            storyId: snapshot.data().storyId,
            message: `${
              snapshot.data().username
            } posted a response to your comment on story ${
              snapshot.data().title
            }`,
          });
        }
        return db.collection("stories").doc(snapshot.data().storyId).get();
      })
      .then((story) => {
        batch.update(db.collection("stories").doc(snapshot.data().storyId), {
          commentsCount: story.data().commentsCount + 1,
        });
        return db.collection("chapters").doc(snapshot.data().chapterId).get();
      })
      .then((chapter) => {
        batch.update(db.collection("chapters").doc(snapshot.data().chapterId), {
          commentsCount: chapter.data().commentsCount + 1,
        });
        return batch.commit();
      })
      .catch((err) => console.log(err));
  } else if (snapshot.data().characterId) {
    return db
      .collection("users")
      .doc(snapshot.data().authorId)
      .get()
      .then((doc) => {
        if (doc.exists && doc.id !== snapshot.data().userId) {
          return db
            .collection("notifications")
            .doc(`${snapshot.data().userId}${snapshot.data().characterId}`)
            .set({
              type: "characterComment",
              read: false,
              recipient: doc.id,
              sender: snapshot.data().userId,
              characterId: snapshot.data().characterId,
              createdAt: admin.firestore.FieldValue.serverTimestamp(),
              message: `${
                snapshot.data().username
              } left a feedback on your character ${
                snapshot.data().characterName
              }`,
            });
        }
      });
  }
};

exports.commentDeleted = (snapshot) => {
  const batch = db.batch();
  if (snapshot.data().storyId) {
    return db
      .collection("stories")
      .doc(snapshot.data().storyId)
      .get()
      .then((doc) => {
        if (doc.exists) {
          batch.update(db.collection("stories").doc(snapshot.data().storyId), {
            commentsCount: doc.data().commentsCount - 1,
          });
        }
        return db.collection("chapters").doc(snapshot.data().chapterId).get();
      })
      .then((chap) => {
        if (chap.exists) {
          batch.update(
            db.collection("chapters").doc(snapshot.data().chapterId),
            {
              commentsCount: doc.data().commentsCount - 1,
            }
          );
        }
        return batch.commit();
      });
  }
};

exports.storyRated = (snapshot) => {
  return db
    .collection("stars")
    .where("storyId", "==", snapshot.data().storyId)
    .get()
    .then((docs) => {
      const allNotes = docs.docs.map((doc) => doc.data().value);
      const note = allNotes.reduce(function (avg, value, _, { length }) {
        return avg + value / length;
      }, 0);

      return db
        .collection("stories")
        .doc(snapshot.data().storyId)
        .update({ note, votersCount: allNotes.length });
    })
    .catch((err) => console.log(err));
};

exports.rateUpdate = (change) => {
  return db
    .collection("stars")
    .where("storyId", "==", change.after.data().storyId)
    .get()
    .then((docs) => {
      let allNotes = [];
      docs.forEach((doc) => {
        if (doc.id !== change.before.data().storyId)
          allNotes.push(doc.data().value);
      });
      allNotes = [...allNotes, change.after.data().value];
      const note = allNotes.reduce(function (avg, value, _, { length }) {
        return avg + value / length;
      }, 0);

      return db
        .collection("stories")
        .doc(change.after.data().storyId)
        .update({ note, votersCount: allNotes.length });
    })
    .catch((err) => console.log(err));
};
