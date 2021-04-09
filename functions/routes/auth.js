const { db } = require("../utils/admin");
const firebase = require("firebase");
const config = require("../utils/config");
firebase.initializeApp(config);

exports.deleteAccount = (req, res) => {
  const document = db.doc(`/users/${req.params.username}`);

  firebase
    .auth()
    .currentUser.delete()
    .then(() => {
      return document.get();
    })
    .then((doc) => {
      if (!doc.exists) return res.status(404).json({ error: "User not found" });
      if (doc.data().username !== req.user.username) {
        return res.status(403).json({ error: "Unauthorized" });
      } else {
        return document.delete();
      }
    })
    .then(() => res.json({ message: "User successfully deleted" }))
    .catch((err) => {
      console.error(err);
      return res.status(500).json({ error: err.code });
    });
};
