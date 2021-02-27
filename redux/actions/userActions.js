import { db, auth } from "../fbConfig";

import {
  GET_PROFILE,
  GET_FAVORITE_AUTHORS,
  GET_FOLLOWERS,
} from "../../utils/constants";

export const log_in = (email, password) => (dispatch) => {
  console.log(email, password);
  auth.signInWithEmailAndPassword(email, password);
};

export const getProfile = () => (dispatch) => {
  db.collection("users")
    .doc(auth.currentUser.uid)
    .onSnapshot((doc) => {
      return dispatch({
        type: GET_PROFILE,
        payload: { id: doc.id, ...doc.data() },
      });
    });
};

export const getFavoriteAuthors = () => (dispatch) => {
  db.collection("usersLikes")
    .where("senderId", "==", auth.currentUser.uid)
    .get()
    .then((docs) => {
      let favArr = [];
      docs.forEach((doc) => {
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
          (doc) => (favUsers = [...favUsers, { id: doc.id, ...doc.data() }])
        );
        dispatch({
          type: GET_FAVORITE_AUTHORS,
          payload: favUsers,
        });
      });
    });
};

export const getFollowers = () => (dispatch) => {
  db.collection("usersLikes")
    .where("recipient", "==", auth.currentUser.uid)
    .get()
    .then((docs) => {
      let favArr = [];
      docs.forEach((doc) => {
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
          (doc) => (favUsers = [...favUsers, { id: doc.id, ...doc.data() }])
        );
        dispatch({
          type: GET_FOLLOWERS,
          payload: favUsers,
        });
      });
    });
};
