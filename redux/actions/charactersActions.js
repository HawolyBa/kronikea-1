import {
  GET_USER_CHARACTERS,
  GET_FAVORITE_CHARACTERS,
} from "../../utils/constants";
import { db, auth } from "../fbConfig";

export const getUserCharacters = () => (dispatch) => {
  db.collection("characters")
    .where("authorId", "==", auth.currentUser.uid)
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
