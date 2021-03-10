import {
  GET_USER_STORIES,
  GET_FAVORITE_STORIES,
  GET_STORY,
  GET_CHAPTERS,
  ADD_STORY,
} from "../../utils/constants";
import { db, auth, storage } from "../fbConfig";
import firebase from "firebase/app";
import { message } from "antd";
import Router from "next/router";

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

export const addStory = (data) => (dispatch) => {
  dispatch({ type: ADD_STORY, payload: { loading: true } });
  const imageName = data.title.toLowerCase().split(" ").join("_");
  console.log(data);
  if (typeof data.banner === "object") {
    storage
      .ref(`${auth.currentUser.uid}/${imageName}`)
      .put(data.banner)
      .then(() => {
        return storage
          .ref(auth.currentUser.uid)
          .child(imageName)
          .getDownloadURL();
      })
      .then((url) => {
        return db.collection("stories").add({
          ...data,
          authorId: auth.currentUser.uid,
          authorName: data.authorName,
          oneShot: false,
          banner: url,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          likesCount: 0,
          chaptersCount: 0,
          locationsCount: 0,
          secondaryCharacters: [],
          featured: false,
          note: 0,
        });
      })
      .then((res) => {
        message.success("Story added successfully");
        setTimeout(() => {
          Router.push(`/story/${res.id}`);
          dispatch({
            type: ADD_STORY,
            payload: {
              message: "Story added successfully",
              storyId: res.id,
            },
          });
        }, 1000);
      })
      .catch((err) => {
        message.error(err.message);
      });
  } else {
    db.collection("stories")
      .add({
        ...data,
        authorId: auth.currentUser.uid,
        authorName: data.authorName,
        oneShot: false,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        likesCount: 0,
        chaptersCount: 0,
        locationsCount: 0,
        featured: false,
        secondaryCharacters: [],
        note: 0,
      })
      .then((res) => {
        message.success("Story added successfully");
        setTimeout(() => {
          Router.push(`/story/${res.id}`);
          dispatch({
            type: ADD_STORY,
            payload: {
              message: "Story added successfully",
              storyId: res.id,
            },
          });
        }, 1000);
      })
      .catch((err) => {
        message.error(err.message);
      });
  }
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
