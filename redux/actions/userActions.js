import { db, auth, storage } from "../fbConfig";
import { types } from "../../utils/constants";
import firebase from "firebase/app";
import { message } from "antd";

export const log_in = (email, password) => (dispatch) => {
  console.log(email, password);
  auth.signInWithEmailAndPassword(email, password);
};

export const getProfile = (id) => (dispatch) => {
  db.collection("users")
    .doc(id ? id : auth.currentUser.uid)
    .onSnapshot((doc) => {
      return dispatch({
        type: types.GET_PROFILE,
        payload: { id: doc.id, ...doc.data() },
      });
    });
};

export const getFavoriteAuthors = (id) => (dispatch) => {
  let addedOn;
  const userId = id ? id : auth.currentUser.uid;
  db.collection("usersLikes")
    .where("senderId", "==", userId)
    .get()
    .then((docs) => {
      let favArr = [];
      docs.forEach((doc) => {
        addedOn = doc.data().createdAt;
        favArr = [...favArr, doc.data().recipient];
      });
      return favArr;
    })
    .then((users) => {
      const result = users.map((user) =>
        db.collection("users").doc(user).get()
      );
      Promise.all(result).then((res) => {
        let favUsers = [];
        res.forEach(
          (doc) =>
            (favUsers = [...favUsers, { addedOn, id: doc.id, ...doc.data() }])
        );
        dispatch({
          type: types.GET_FAVORITE_AUTHORS,
          payload: favUsers,
        });
      });
    });
};

export const getFollowers = (id) => (dispatch) => {
  let addedOn;
  const userId = id ? id : auth.currentUser.uid;
  db.collection("usersLikes")
    .where("recipient", "==", userId)
    .get()
    .then((docs) => {
      let favArr = [];
      docs.forEach((doc) => {
        addedOn = doc.data().createdAt;
        favArr = [...favArr, doc.data().senderId];
      });
      return favArr;
    })
    .then((users) => {
      const result = users.map((user) =>
        db.collection("users").doc(user).get()
      );
      Promise.all(result).then((res) => {
        let favUsers = [];
        res.forEach(
          (doc) =>
            (favUsers = [...favUsers, { addedOn, id: doc.id, ...doc.data() }])
        );
        dispatch({
          type: types.GET_FOLLOWERS,
          payload: favUsers,
        });
      });
    });
};

export const getIsFollowing = (userId) => (dispatch) => {
  if (auth.currentUser) {
    db.collection("usersLikes")
      .where("recipient", "==", userId)
      .where("senderId", "==", auth.currentUser.uid)
      .onSnapshot((snapshot) => {
        const answer = snapshot.docs.length > 0 ? true : false;
        return dispatch({ type: types.IS_FOLLOWING, payload: answer });
      });
  }
};

export const followUser = (id, isFavorite, newFollower) => (dispatch) => {
  if (isFavorite) return message.warning("You are already following this user");
  if (!auth.currentUser)
    return message.error("You need to be logged in to follow users");
  if (!auth.currentUser.emailVerified)
    return message.error("You need to verify your email first");

  db.collection("usersLikes")
    .add({
      sender: newFollower.username,
      senderId: newFollower.uid,
      recipient: id,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    })
    .then(() => message.success("You are now following this user"))
    .catch((err) => message.error("There has been a problem"));
};

export const unfollowUser = (id, isFavorite) => (dispatch) => {
  if (!isFavorite)
    return message.warning("You are not following this user yet");

  db.collection("usersLikes")
    .where("recipient", "==", id)
    .where("senderId", "==", auth.currentUser.uid)
    .get()
    .then((data) => {
      return db.collection("usersLikes").doc(data.docs[0].id).delete();
    })
    .then(() => message.success("User successfully unfollowed"))
    .catch((err) => message.error("There has been a problem"));
};

export const changeProfile = (data, setOpen, username, userImage) => (
  dispatch
) => {
  const { newPassword, actualPassword, ...newInfo } = data;
  const imageName = `${auth.currentUser.uid}_${newInfo.username}`;

  // STORIES, CHAPTERS, CHARACTERS & COMMENTS QUERIES
  const userStoriesQuery = db
    .collection("stories")
    .where("authorId", "==", auth.currentUser.uid)
    .get();
  const userChaptersQuery = db
    .collection("chapters")
    .where("authorId", "==", auth.currentUser.uid)
    .get();
  const userCharactersQuery = db
    .collection("characters")
    .where("authorId", "==", auth.currentUser.uid)
    .get();
  const userCommentsQuery = db
    .collection("comments")
    .where("userId", "==", auth.currentUser.uid)
    .get();

  // FUNCTION TO ACTUALLY UPDATE ALL AFFECTED FILES
  const batchUpdateAll = async (queries, url) => {
    await Promise.all(queries).then((res) => {
      res[0].forEach((story) => {
        db.collection("stories")
          .doc(story.id)
          .update({
            userImage: url ? url : newInfo.image,
            authorName: data.username,
          });
      });
      res[1].forEach((chap) => {
        db.collection("chapters")
          .doc(chap.id)
          .update({
            userImage: url ? url : newInfo.image,
            authorName: data.username,
          });
      });
      res[2].forEach((char) => {
        db.collection("characters")
          .doc(char.id)
          .update({
            userImage: url ? url : newInfo.image,
            authorName: data.username,
          });
      });
      res[3].forEach((comm) => {
        db.collection("comments")
          .doc(comm.id)
          .update({
            userImage: url ? url : newInfo.image,
            authorName: data.username,
          });
      });
    });
  };

  if (newPassword) {
    auth.currentUser
      .reauthenticateWithCredential(
        firebase.auth.EmailAuthProvider.credential(
          auth.currentUser.email,
          actualPassword
        )
      )
      .then(() => {
        return auth.currentUser.updatePassword(newPassword);
      })
      .then(async () => {
        if (typeof newInfo.image === "object") {
          storage
            .ref(`${auth.currentUser.uid}/${imageName}`)
            .put(newInfo.image)
            .then(() => {
              return storage
                .ref(`${auth.currentUser.uid}/${imageName}`)
                .getDownloadURL();
            })
            .then(async (url) => {
              return db
                .collection("users")
                .doc(auth.currentUser.uid)
                .update({
                  ...newInfo,
                  image: url,
                })
                .then(() => {
                  return batchUpdateAll(
                    [
                      userStoriesQuery,
                      userChaptersQuery,
                      userCharactersQuery,
                      userCommentsQuery,
                    ],
                    url
                  );
                })
                .then(() => {
                  setOpen(false);
                  message.success("Profile updated successfully");
                });
            });
        } else {
          return db
            .collection("users")
            .doc(auth.currentUser.uid)
            .update({
              ...newInfo,
            })
            .then(() => {
              return batchUpdateAll([
                userStoriesQuery,
                userChaptersQuery,
                userCharactersQuery,
                userCommentsQuery,
              ]);
            })
            .then(() => {
              setOpen(false);
              message.success("Profile updated successfully");
            });
        }
      })
      .catch((err) => message.error(err.message));
  } else {
    if (typeof newInfo.image === "object") {
      storage
        .ref(`${auth.currentUser.uid}/${imageName}`)
        .put(newInfo.image)
        .then(() => {
          return storage
            .ref(`${auth.currentUser.uid}/${imageName}`)
            .getDownloadURL();
        })
        .then(async (url) => {
          return db
            .collection("users")
            .doc(auth.currentUser.uid)
            .update({
              ...newInfo,
              image: url,
            })
            .then(() => {
              return batchUpdateAll(
                [
                  userStoriesQuery,
                  userChaptersQuery,
                  userCharactersQuery,
                  userCommentsQuery,
                ],
                url
              );
            });
        })
        .then(() => {
          setOpen(false);
          message.success("Profile updated successfully");
        });
    } else {
      console.log("mdp pas changé et image pas changé");
      db.collection("users")
        .doc(auth.currentUser.uid)
        .update({
          ...newInfo,
        })
        .then(() => {
          return batchUpdateAll([
            userStoriesQuery,
            userChaptersQuery,
            userCharactersQuery,
            userCommentsQuery,
          ]);
        })
        .then(() => {
          setOpen(false);
          message.success("Profile updated successfully");
        });
    }
  }
};
