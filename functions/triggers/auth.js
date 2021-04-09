const { db, admin } = require("../utils/admin");

exports.onDeleteUser = (snapshot) => {
  const batch = db.batch();

  return db
    .collection("stories")
    .where("authorId", "==", snapshot.id)
    .get()
    .then((data) => {
      data.forEach((doc) => batch.delete(db.doc(`/stories/${doc.id}`)));
      return db
        .collection("characters")
        .where("authorId", "==", snapshot.id)
        .get();
    })
    .then((data) => {
      data.forEach((doc) => batch.delete(db.doc(`/characters/${doc.id}`)));
      return db
        .collection("usersLikes")
        .where("recipient", "==", snapshot.id)
        .get();
    })
    .then((data) => {
      data.forEach((doc) => batch.delete(db.doc(`/usersLikes/${doc.id}`)));
      return db
        .collection("usersLikes")
        .where("sender", "==", snapshot.id)
        .get();
    })
    .then((data) => {
      data.forEach((doc) => batch.delete(db.doc(`/usersLikes/${doc.id}`)));
      return db
        .collection("notifications")
        .where("recipient", "==", snapshot.id)
        .get();
    })
    .then((data) => {
      data.forEach((doc) => batch.delete(db.doc(`/notifications/${doc.id}`)));
      return db.collection("comments").where("userId", "==", snapshot.id).get();
    })
    .then((data) => {
      data.forEach((doc) =>
        batch.update(db.doc(`/comments/${doc.id}`), { userDeleted: true })
      );
      return db
        .collection("notifications")
        .where("sender", "==", snapshot.id)
        .get();
    })
    .then((data) => {
      data.forEach((doc) => batch.delete(db.doc(`/notifications/${doc.id}`)));
      return admin.storage().bucket().deleteFiles({ prefix: snapshot.id });
    })
    .then(() => batch.commit())
    .catch((err) => console.log(err));
};

exports.userUpdated = (change) => {
  const batch = db.batch();
  const newInfo = {
    userImage: change.after.data().image,
    authorName: change.after.data().username,
  };

  if (
    change.before.data().username !== change.after.data().username ||
    change.before.data().image !== change.after.data().image
  ) {
    return db
      .collection("stories")
      .where("authorId", "==", change.after.id)
      .get()
      .then((docs) => {
        docs.forEach((doc) => {
          batch.update(db.collection("stories").doc(doc.id), newInfo);
        });
        return db
          .collection("chapters")
          .where("authorId", "==", change.after.id)
          .get();
      })
      .then((chapters) => {
        chapters.forEach((doc) => {
          batch.update(db.collection("chapters").doc(doc.id), newInfo);
        });
        return db
          .collection("characters")
          .where("authorId", "==", change.after.id)
          .get();
      })
      .then((characters) => {
        characters.forEach((doc) => {
          batch.update(db.collection("characters").doc(doc.id), newInfo);
        });
        return db
          .collection("comments")
          .where("userId", "==", change.after.id)
          .get();
      })
      .then((comments) => {
        comments.forEach((doc) => {
          batch.update(db.collection("comments").doc(doc.id), {
            username: change.after.data().username,
            userImage: change.after.data().image,
          });
        });
        return batch.commit();
      })
      .catch((err) => console.log(err));
  }
};
