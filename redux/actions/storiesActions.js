import {
  GET_USER_STORIES,
  GET_FAVORITE_STORIES,
  GET_USER_LOCATIONS,
  GET_STORY,
  GET_CHAPTERS,
  ADD_STORY,
  ADD_CHAPTER,
  EDIT_CHAPTER,
  GET_CHAPTER,
  EDIT_STORY,
  DISPATCH_ERROR,
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
      if (doc.exists) {
        dispatch({
          type: GET_STORY,
          storyExists: true,
          payload: { ...doc.data(), id: doc.id },
        });
      } else {
        dispatch({
          type: DISPATCH_ERROR,
          storyExists: false,
        });
      }
    })
    .catch((err) => console.log(err));
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
              loading: false,
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
              loading: false,
            },
          });
        }, 1000);
      })
      .catch((err) => {
        message.error(err.message);
      });
  }
};

export const editStory = (data, storyId) => (dispatch) => {
  dispatch({ type: EDIT_STORY, payload: { loadingStory: true } });
  const imageName = data.title.toLowerCase().split(" ").join("_");

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
        return db
          .collection("stories")
          .doc(storyId)
          .update({
            ...data,
            banner: url,
          });
      })
      .then(() => {
        message.success("Story added successfully");
        dispatch({
          type: EDIT_STORY,
          payload: {
            message: "Story edited successfully",
          },
        });
      })
      .catch((err) => {
        message.error(err.message);
      });
  } else {
    db.collection("stories")
      .doc(storyId)
      .update({
        ...data,
      })
      .then(() => {
        message.success("Story added successfully");
        dispatch({
          type: EDIT_STORY,
          payload: {
            message: "Story edited successfully",
          },
        });
      })
      .catch((err) => {
        message.error(err.message);
      });
  }
};

export const addChapter = (data) => (dispatch) => {
  dispatch({ type: ADD_CHAPTER, payload: { loading: true } });
  db.collection("chapters")
    .add({
      ...data,
      authorId: auth.currentUser.uid,
      commentsCount: 0,
      note: 0,
      voters: [],
      votesCount: 0,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    })
    .then((res) => {
      db.collection("stories")
        .doc(data.storyId)
        .get()
        .then((doc) => {
          const characters = doc.data().secondaryCharacters;
          const main = doc.data().mainCharacters;
          db.collection("stories")
            .doc(data.storyId)
            .update({
              secondaryCharacters: [
                ...new Set([
                  ...characters,
                  ...data.characters.filter((c) => !main.includes(c)),
                ]),
              ],
            })
            .then(() => {
              dispatch({
                type: ADD_CHAPTER,
                payload: {
                  message: "Chapter added successfully",
                  chapId: res.id,
                  loading: false,
                },
              });
            });
        });
    });
  // .then((res) => {
  //   dispatch({
  //     type: ADD_CHAPTER,
  //     payload: {
  //       message: "Chapter added successfully",
  //       chapId: res.id,
  //     },
  //   });
  // })
  // .catch((err) =>
  //   dispatch({
  //     type: ADD_CHAPTER,
  //     payload: { message: err.message, chapId: "" },
  //   })
  // );
};

export const getChapter = (storyId, id) => (dispatch) => {
  db.collection("stories")
    .doc(storyId)
    .get()
    .then((doc) => {
      if (doc.exists) {
        db.collection("chapters")
          .doc(id)
          .get()
          .then((doc) => {
            if (doc.exists) {
              dispatch({
                type: GET_CHAPTER,
                payload: {
                  chapter: { ...doc.data(), id: doc.id },
                  chapterExists: true,
                },
              });
            } else {
              dispatch({
                type: GET_CHAPTER,
                payload: { chapterExists: false },
              });
            }
          });
      } else {
        dispatch({
          type: GET_CHAPTER,
          payload: { chapterExists: false },
        });
      }
    });
};

export const editChapter = (data, storyId, chapid) => (dispatch) => {
  dispatch({ type: EDIT_CHAPTER, payload: { loading: true } });
  db.collection("chapters")
    .doc(chapid)
    .update({ ...data })
    .then(() => {
      db.collection("stories")
        .doc(storyId)
        .get()
        .then((doc) => {
          const characters = doc.data().secondaryCharacters;
          const main = doc.data().mainCharacters;
          db.collection("stories")
            .doc(storyId)
            .update({
              secondaryCharacters: data.characters
                ? [
                    ...new Set([
                      ...characters,
                      ...data.characters.filter((c) => !main.includes(c)),
                    ]),
                  ]
                : characters,
            })
            .then(() => {
              dispatch({
                type: EDIT_CHAPTER,
                payload: {
                  message: "Chapter edited successfully",
                  loading: false,
                },
              });
            });
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

export const getUserLocations = () => (dispatch) => {
  db.collection("locations")
    .where("authorId", "==", auth.currentUser.uid)
    .get()
    .then((docs) => {
      let locations = [];
      docs.forEach((doc) => {
        locations = [...locations, { id: doc.id, ...doc.data() }];
      });
      dispatch({
        type: GET_USER_LOCATIONS,
        payload: locations,
      });
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
