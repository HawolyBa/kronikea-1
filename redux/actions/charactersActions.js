import { types } from "../../utils/constants";
import { message } from "antd";
import { db, auth, storage } from "../fbConfig";
import firebase from "firebase/app";

export const getCharacter = (id) => (dispatch) => {
  db.collection("characters")
    .doc(id)
    .get()
    .then((doc) => {
      if (doc.exists) {
        dispatch({
          type: types.GET_CHARACTER,
          payload: {
            character: { ...doc.data(), id: doc.id },
            charaExists: true,
            loading: false,
          },
        });
      } else {
        dispatch({
          type: types.GET_CHARACTER,
          payload: {
            charaExists: false,
            loading: false,
          },
        });
      }
    });
};

export const addCharacter = (data) => (dispatch) => {
  dispatch({ type: types.ADD_CHARACTER, payload: { loading: true } });

  let charaId = "";
  db.collection("characters")
    .add({
      ...data,
      image: typeof data.image === "string" ? data.image : "",
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      likesCount: 0,
      likes: [],
      dislikes: [],
    })
    .then((res) => {
      charaId = res.id;
      const imageName = `${res.id}${"_"}${data.firstname.toLowerCase()}${
        data.lastname && "_"
      }${data.lastname && data.lastname.toLowerCase()}`;

      if (typeof data.image === "object") {
        storage
          .ref(`${auth.currentUser.uid}/${imageName}`)
          .put(data.image)
          .then(() => {
            return storage
              .ref(auth.currentUser.uid)
              .child(imageName)
              .getDownloadURL();
          })
          .then((url) => {
            return db
              .collection("characters")
              .doc(charaId)
              .update({ image: url });
          })
          .then(() => {
            message.success("Character added successfully");
            dispatch({
              type: types.ADD_CHARACTER,
              payload: {
                message: "Character added successfully",
                characterId: charaId,
                loading: false,
              },
            });
          });
      } else {
        message.success("Character added successfully");
        dispatch({
          type: types.ADD_CHARACTER,
          payload: {
            message: "Character added successfully",
            characterId: charaId,
            loading: false,
          },
        });
      }
    })
    .catch((err) => {
      message.error(err.message);
    });
};

export const editCharacter = (data, id) => (dispatch) => {
  dispatch({ type: types.EDIT_CHARACTER, payload: { loadingCharacter: true } });

  const imageName = `${id}${"_"}${data.firstname.toLowerCase()}${
    data.lastname && "_"
  }${data.lastname && data.lastname.toLowerCase()}`;

  if (data.image && typeof data.image === "object") {
    storage
      .ref(`${auth.currentUser.uid}/${imageName}`)
      .put(data.image)
      .then(() => {
        return storage
          .ref(auth.currentUser.uid)
          .child(imageName)
          .getDownloadURL();
      })
      .then((url) => {
        return db
          .collection("characters")
          .doc(id)
          .update({
            ...data,
            image: url,
            relativesArr: data.relatives.map((c) => c.character_id),
          });
      })
      .then(() => {
        dispatch({
          type: types.EDIT_CHARACTER,
          payload: {
            message: "Character edited successfully",
            loadingCharacter: false,
          },
        });
      })
      .catch((err) => {
        message.error(err.message);
      });
  } else {
    db.collection("characters")
      .doc(id)
      .update({
        ...data,
        relativesArr: data.relatives.map((c) => c.character_id),
      })
      .then(() => {
        dispatch({
          type: types.EDIT_CHARACTER,
          payload: {
            message: "Character edited successfully",
            loadingCharacter: false,
          },
        });
      })
      .catch((err) => {
        message.error(err.message);
      });
  }
};

export const deleteCharacter = (id, firstname, lastname) => (dispatch) => {
  dispatch({ type: types.DELETE_CHARACTER, payload: { loading: true } });
  const imageName = `${id}${"_"}${firstname.toLowerCase()}${lastname && "_"}${
    lastname && lastname.toLowerCase()
  }`;
  const batch = db.batch();
  db.collection("characters")
    .doc(id)
    .delete()
    .then(() => {
      if (storage.ref(`${auth.currentUser.uid}/${imageName}`)) {
        return storage.ref(`${auth.currentUser.uid}/${imageName}`).delete();
      }
    })
    .then(() => {
      db.collection("chapters")
        .where("characters", "array-contains", id)
        .get()
        .then((docs) => {
          docs.forEach((doc) => {
            batch.update(db.collection("chapters").doc(doc.id), {
              characters: doc.data().characters.filter((c) => c !== id),
            });
          });
        })
        .then(() => {
          db.collection("stories")
            .where("secondaryArr", "array-contains", id)
            .get()
            .then((stories) => {
              stories.forEach((story) => {
                batch.update(db.collection("stories").doc(story.id), {
                  mainCharacters: story
                    .data()
                    .mainCharacters.filter((c) => c !== id),
                  secondaryArr: story
                    .data()
                    .secondaryArr.filter((c) => c !== id),
                  secondaryCharacters: story
                    .data()
                    .secondaryCharacters.filter((c) => c.id !== id),
                });
              });
            })
            .then(() => {
              db.collection("characters")
                .where("relativesArr", "array-contains", id)
                .get()
                .then((characters) => {
                  characters.forEach((char) => {
                    batch.update(db.collection("characters").doc(char.id), {
                      relativesArr: char
                        .data()
                        .relativesArr.filter((c) => c !== id),
                      relatives: char
                        .data()
                        .relatives.filter((c) => c.character_id !== id),
                    });
                  });
                })
                .then(() => {
                  db.collection("charactersLikes")
                    .where("characterId", "==", id)
                    .get()
                    .then((likes) => {
                      likes.forEach((like) => {
                        batch.delete(
                          db.collection("charactersLikes").doc(like.id)
                        );
                      });
                      batch.commit().then(() => {
                        dispatch({
                          type: types.DELETE_CHARACTER,
                          payload: {
                            message: "Character deleted successfully",
                            loading: false,
                            deleted: true,
                            charaExists: false,
                          },
                        });
                      });
                    });
                });
            });
        });
    });
};

export const getUserCharacters = (userId) => (dispatch) => {
  db.collection("characters")
    .where("authorId", "==", userId)
    .get()
    .then((docs) => {
      let items = [];
      docs.forEach((doc) => {
        items = [...items, { id: doc.id, ...doc.data() }];
      });
      return items;
    })
    .then((items) => {
      dispatch({ type: types.GET_USER_CHARACTERS, payload: items });
    });
};

export const getFavoriteCharacters = () => (dispatch) => {
  db.collection("charactersLikes")
    .where("senderId", "==", auth.currentUser.uid)
    .get()
    .then((docs) => {
      let favArr = [];
      docs.forEach((doc) => {
        favArr = [...favArr, doc.data().characterId];
      });
      return favArr;
    })
    .then((users) => {
      const result = users.map((user) =>
        db.collection("characters").doc(user).get()
      );
      Promise.all(result).then((res) => {
        let favUsers = [];
        res.forEach(
          (doc) => (favUsers = [...favUsers, { id: doc.id, ...doc.data() }])
        );
        dispatch({
          type: types.GET_FAVORITE_CHARACTERS,
          payload: favUsers,
        });
      });
    });
};

export const getCharactersInStory = (id) => (dispatch) => {
  db.collection("stories")
    .doc(id)
    .onSnapshot((doc) => {
      dispatch({
        type: types.GET_STORY_CHARACTERS,
        payload: {
          secondaryCharacters: doc.data().secondaryCharacters,
          mainArr: doc.data().mainCharacters,
        },
      });
    });
};
