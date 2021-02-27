import {
  GET_USER_STORIES,
  GET_FAVORITE_STORIES,
  GET_STORY,
  GET_CHAPTERS,
} from "../../utils/constants";
import { db, auth } from "../fbConfig";

export const getStory = (id) => (dispatch) => {
  db.collection("stories")
    .doc(id)
    .get()
    .then((doc) => {
      dispatch({
        type: GET_STORY,
        payload: { ...doc.data(), id: doc.id },
      });
    });
};

export const getChapters = (id) => (dispatch) => {
  db.collection("chapters")
    .where("storyId", "==", id)
    .orderBy("number", "asc")
    .onSnapshot((docs) => {
      let arr = [];
      docs.forEach((doc) => {
        arr.push({
          authorId: doc.data().authorId,
          id: doc.id,
          createdAt: doc.data().createdAt,
          number: doc.data().number,
          title: doc.data().title,
          commentsCount: doc.data().commentsCount,
        });
      });
      dispatch({
        type: GET_CHAPTERS,
        payload: arr,
      });
    });
};

export const getStoryCharacters = (id) => (dispatch) => {};

export const getUserStories = () => (dispatch) => {
  db.collection("stories")
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
      dispatch({ type: GET_USER_STORIES, payload: items });
    });
};

export const getFavoriteStories = () => (dispatch) => {
  db.collection("storiesLikes")
    .where("senderId", "==", auth.currentUser.uid)
    .get()
    .then((docs) => {
      let favArr = [];
      docs.forEach((doc) => {
        favArr = [...favArr, doc.data().storyId];
      });
      return favArr;
    })
    .then((users) => {
      const result = users.map((user) =>
        db.collection("stories").doc(user).get()
      );
      Promise.all(result).then((res) => {
        let favUsers = [];
        res.forEach(
          (doc) => (favUsers = [...favUsers, { id: doc.id, ...doc.data() }])
        );
        dispatch({
          type: GET_FAVORITE_STORIES,
          payload: favUsers,
        });
      });
    });
};
