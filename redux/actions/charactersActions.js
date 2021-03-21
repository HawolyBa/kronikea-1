import {
  GET_USER_CHARACTERS,
  GET_FAVORITE_CHARACTERS,
  ADD_CHARACTER,
  EDIT_CHARACTER,
  GET_CHARACTER,
} from "../../utils/constants";
import { message } from "antd";
import { db, auth } from "../fbConfig";
import firebase from "firebase/app";

export const getCharacter = (id) => (dispatch) => {
  db.collection("characters")
    .doc(id)
    .get()
    .then((doc) => {
      if (doc.exists) {
        dispatch({
          type: GET_CHARACTER,
          payload: {
            character: { ...doc.data(), id: doc.id },
            charaExists: true,
            loading: false,
          },
        });
      } else {
        dispatch({
          type: GET_CHARACTER,
          payload: {
            charaExists: false,
            loading: false,
          },
        });
      }
    });
};

export const addCharacter = (data) => (dispatch) => {
  dispatch({ type: ADD_CHARACTER, payload: { loading: true } });
  const imageName = `${data.firstname.toLowerCase()}${data.lastname && "_"}${
    data.lastname && data.lastname.toLowerCase()
  }`;
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
        return db.collection("characters").add({
          ...data,
          image: url,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          likesCount: 0,
          likes: [],
          dislikes: [],
        });
      })
      .then((res) => {
        message.success("Character added successfully");
        dispatch({
          type: ADD_CHARACTER,
          payload: {
            message: "Character added successfully",
            characterId: res.id,
            loading: false,
          },
        });
      })
      .catch((err) => {
        message.error(err.message);
      });
  } else {
    db.collection("characters")
      .add({
        ...data,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        likesCount: 0,
        likes: [],
        dislikes: [],
      })
      .then((res) => {
        message.success("Character added successfully");
        dispatch({
          type: ADD_CHARACTER,
          payload: {
            message: "Character added successfully",
            characterId: res.id,
            loading: false,
          },
        });
      })
      .catch((err) => {
        message.error(err.message);
      });
  }
};

export const editCharacter = (data, id) => (dispatch) => {
  dispatch({ type: EDIT_CHARACTER, payload: { loadingCharacter: true } });
  const imageName = `${data.firstname.toLowerCase()}${data.lastname && "_"}${
    data.lastname && data.lastname.toLowerCase()
  }`;
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
          });
      })
      .then(() => {
        dispatch({
          type: EDIT_CHARACTER,
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
      })
      .then(() => {
        dispatch({
          type: EDIT_CHARACTER,
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
      dispatch({ type: GET_USER_CHARACTERS, payload: items });
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
          type: GET_FAVORITE_CHARACTERS,
          payload: favUsers,
        });
      });
    });
};
