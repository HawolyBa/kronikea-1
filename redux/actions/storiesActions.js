import { types } from "../../utils/constants";
import { db, auth, storage } from "../fbConfig";
import firebase from "firebase/app";
import { message } from "antd";
import Router from "next/router";

// STORIES

export const getStory = (id) => (dispatch) => {
  db.collection("stories")
    .doc(id)
    .get()
    .then((doc) => {
      if (doc.exists) {
        const main = doc.data().mainCharacters;
        const secondary = doc.data().secondaryCharacters;
        let mainArr = [];
        let secondaryArr = [];
        const mainQuery = main.map((c) =>
          db.collection("characters").doc(c).get()
        );
        const secondaryQuery = secondary.map((c) =>
          db.collection("characters").doc(c.id).get()
        );
        const mainRes = Promise.all(mainQuery);
        const secondaryRes = Promise.all(secondaryQuery);
        Promise.all([mainRes, secondaryRes]).then((result) => {
          result[0].forEach((docu) => {
            mainArr = [...mainArr, { ...docu.data(), id: docu.id }];
          });
          result[1].forEach((docu) => {
            secondaryArr = [...secondaryArr, { ...docu.data(), id: docu.id }];
          });
          dispatch({
            type: types.GET_STORY,
            storyExists: true,
            payload: {
              ...doc.data(),
              id: doc.id,
              secondaryCharacters: secondaryArr,
              mainCharacters: mainArr,
              mainArr: doc.data().mainCharacters,
              secondaryArr: doc.data().secondaryCharacters,
            },
          });
        });
      } else {
        dispatch({
          type: types.DISPATCH_ERROR,
          storyExists: false,
        });
      }
    })
    .catch((err) => console.log(err));
};

export const addStory = (data) => (dispatch) => {
  dispatch({ type: types.ADD_STORY, payload: { loading: true } });
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
        return db.collection("stories").add({
          ...data,
          authorId: auth.currentUser.uid,
          authorName: data.authorName,
          oneShot: false,
          banner: url,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          likesCount: 0,
          chaptersCount: 0,
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
            type: types.ADD_STORY,
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
        featured: false,
        secondaryCharacters: [],
        note: 0,
      })
      .then((res) => {
        message.success("Story added successfully");
        setTimeout(() => {
          Router.push(`/story/${res.id}`);
          dispatch({
            type: types.ADD_STORY,
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
  dispatch({ type: types.EDIT_STORY, payload: { loadingStory: true } });
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
        db.collection("locations")
          .where("storyId", "==", storyId)
          .get()
          .then((docs) => {
            let locationQuery = [];
            docs.forEach((doc) => {
              locationQuery = [
                ...locationQuery,
                db
                  .collection("locations")
                  .doc(doc.id)
                  .update({ storyTitle: data.title }),
              ];
            });
            Promise.all(locationQuery).then(() => {
              message.success("Story added successfully");
              dispatch({
                type: types.EDIT_STORY,
                payload: {
                  message: "Story edited successfully",
                },
              });
            });
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
        db.collection("locations")
          .where("storyId", "==", storyId)
          .get()
          .then((docs) => {
            let locationQuery = [];
            docs.forEach((doc) => {
              locationQuery = [
                ...locationQuery,
                db
                  .collection("locations")
                  .doc(doc.id)
                  .update({ storyTitle: data.title }),
              ];
            });
            Promise.all(locationQuery).then(() => {
              message.success("Story added successfully");
              dispatch({
                type: types.EDIT_STORY,
                payload: {
                  message: "Story edited successfully",
                },
              });
            });
          });
      })
      .catch((err) => {
        message.error(err.message);
      });
  }
};

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
      dispatch({ type: types.GET_USER_STORIES, payload: items });
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
          type: types.GET_FAVORITE_STORIES,
          payload: favUsers,
        });
      });
    });
};

export const isStoryFavorite = (storyId) => (dispatch) => {
  if (auth.currentUser) {
    db.collection("storiesLikes")
      .where("senderId", "==", auth.currentUser.uid)
      .where("storyId", "==", storyId)
      .onSnapshot((snapshot) => {
        const answer = snapshot.docs[0] ? true : false;
        return dispatch({
          type: types.IS_STORY_FAVORITE,
          payload: answer,
          loadingFav: false,
        });
      });
  }
};

export const addStoryToFavorite = (id, username, storyTitle) => (dispatch) => {
  // if (isFavorite) return message.warning("You've already liked this story");
  if (!auth.currentUser)
    return message.error("You need to be logged in to like a story");
  if (!auth.currentUser.emailVerified)
    return message.error("You need to verify your email first");

  db.collection("storiesLikes")
    .add({
      sender: username,
      senderId: auth.currentUser.uid,
      storyId: id,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    })
    .then(() => message.success(`${storyTitle} added to your favorites`))
    .catch((err) => message.error("There has been a problem"));
};

export const removeStoryFromFavorite = (id, storyTitle) => (dispatch) => {
  db.collection("storiesLikes")
    .where("storyId", "==", id)
    .where("senderId", "==", auth.currentUser.uid)
    .get()
    .then((data) => {
      return db.collection("storiesLikes").doc(data.docs[0].id).delete();
    })
    .then(() => message.success(`${storyTitle} removed from your favorites`))
    .catch((err) => message.error("There has been a problem"));
};

export const getStoryCharacters = () => (dispatch) => {};

// CHAPTERs

export const addChapter = (data, secondaryCharacters) => (dispatch) => {
  dispatch({ type: types.ADD_CHAPTER, payload: { loading: true } });
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
          db.collection("stories")
            .doc(data.storyId)
            .update({
              secondaryCharacters,
            })
            .then(() => {
              dispatch({
                type: types.ADD_CHAPTER,
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
  //     type: types.ADD_CHAPTER,
  //     payload: {
  //       message: "Chapter added successfully",
  //       chapId: res.id,
  //     },
  //   });
  // })
  // .catch((err) =>
  //   dispatch({
  //     type: types.ADD_CHAPTER,
  //     payload: { message: err.message, chapId: "" },
  //   })
  // );
};

export const editChapter = (data, storyId, chapid, secondaryCharacters) => (
  dispatch
) => {
  dispatch({ type: types.EDIT_CHAPTER, payload: { loading: true } });
  db.collection("chapters")
    .doc(chapid)
    .update({ ...data })
    .then(() => {
      db.collection("stories")
        .doc(storyId)
        .get()
        .then((doc) => {
          db.collection("stories")
            .doc(storyId)
            .update({
              secondaryCharacters,
            })
            .then(() => {
              dispatch({
                type: types.EDIT_CHAPTER,
                payload: {
                  message: "Chapter edited successfully",
                  loading: false,
                },
              });
            });
        });
    });
};

export const deleteChapter = (id, storyId) => (dispatch) => {
  dispatch({ type: types.DELETE_CHAPTER, payload: { loadingChapter: true } });
  db.collection("chapters")
    .doc(id)
    .get()
    .then((doc) => {
      const charactersFromChapter = doc.data().characters;
      db.collection("stories")
        .doc(storyId)
        .get()
        .then((story) => {
          const charactersFromStory = story.data().secondaryCharacters;
          let newArr = charactersFromStory.map((c) => {
            if (charactersFromChapter.includes(c.id)) {
              return { ...c, times: c.times - 1 };
            } else {
              return c;
            }
          });
          newArr = newArr.filter((c) => c.times > 0);
          db.collection("stories")
            .doc(storyId)
            .update({ secondaryCharacters: newArr })
            .then(() => {
              db.collection("chapters")
                .doc(id)
                .delete()
                .then(() => {
                  dispatch({
                    type: types.DELETE_CHAPTER,
                    payload: {
                      message: "Chapter deleted successfully",
                      loadingChapter: false,
                    },
                  });
                });
            });
        });
    });
};

export const getChapter = (storyId, id, type) => (dispatch) => {
  db.collection("stories")
    .doc(storyId)
    .get()
    .then((doc) => {
      if (doc.exists) {
        db.collection("chapters")
          .doc(id)
          .get()
          .then((chap) => {
            if (chap.exists) {
              if (type === "show") {
                let characters = [];
                let locations = [];
                let charaQuery = [];
                let locQuery = [];
                const charactersInChaper = chap.data().characters;
                const locationsInChaper = chap.data().locations;
                charactersInChaper.forEach((char) => {
                  charaQuery.push(db.collection("characters").doc(char).get());
                });
                locationsInChaper.forEach((loc) => {
                  locQuery.push(db.collection("locations").doc(loc).get());
                });
                charaQuery = Promise.all(charaQuery);
                locQuery = Promise.all(locQuery);
                Promise.all([charaQuery, locQuery]).then((res) => {
                  res[0].forEach((c) => {
                    characters.push({ ...c.data(), id: c.id });
                  });
                  res[1].forEach((l) => {
                    locations.push({ ...l.data(), id: l.id });
                  });
                  dispatch({
                    type: types.GET_CHAPTER,
                    payload: {
                      chapter: {
                        ...chap.data(),
                        id: chap.id,
                        locations,
                        characters,
                        public: doc.data().public,
                        storyTitle: doc.data().title,
                      },
                      chapterExists: true,
                    },
                  });
                });
              } else {
                dispatch({
                  type: types.GET_CHAPTER,
                  payload: {
                    chapter: {
                      ...chap.data(),
                      id: chap.id,
                      public: doc.data().public,
                    },
                    chapterExists: true,
                  },
                });
              }
            } else {
              dispatch({
                type: types.GET_CHAPTER,
                payload: { chapterExists: false },
              });
            }
          });
      } else {
        dispatch({
          type: types.GET_CHAPTER,
          payload: { chapterExists: false },
        });
      }
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
        type: types.GET_CHAPTERS,
        payload: arr,
      });
    });
};

// LOCATIONS

export const addLocation = (data) => (dispatch) => {
  console.log("coucou");
  dispatch({ type: types.ADD_LOCATION, payload: { loadingLoc: true } });

  const imageName = data.name.toLowerCase().split(" ").join("_");

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
        return db.collection("locations").add({
          ...data,
          image: url,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        });
      })
      .then((res) =>
        dispatch({
          type: types.ADD_LOCATION,
          payload: {
            message: "Location added successfully",
            locId: res.id,
            loadingLoc: false,
          },
        })
      )
      .catch((err) => {
        message.error(err.message);
      });
  } else {
    db.collection("locations")
      .add({
        ...data,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then((res) =>
        dispatch({
          type: types.ADD_LOCATION,
          payload: {
            message: "Location added successfully",
            locId: res.id,
            loadingLoc: false,
          },
        })
      )
      .catch((err) => {
        message.error(err.message);
      });
  }
};

export const editLocation = (data) => (dispatch) => {};

export const getLocation = (id) => (dispatch) => {
  db.collection("locations")
    .doc(id)
    .get()
    .then((doc) => {
      if (doc.exists) {
        dispatch({
          type: types.GET_LOCATION,
          payload: { ...doc.data(), id: doc.id },
          locationExists: true,
        });
      } else {
        dispatch({
          type: types.GET_LOCATION,
          locationExists: false,
        });
      }
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
        type: types.GET_USER_LOCATIONS,
        payload: locations,
      });
    });
};

export const getStoryLocations = (storyId) => (dispatch) => {
  db.collection("locations")
    .where("storyId", "==", storyId)
    .get()
    .then((docs) => {
      const locations = docs.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      dispatch({
        type: types.GET_STORY_LOCATIONS,
        payload: locations,
      });
    });
};

// COMMENTS

export const getComments = (id) => (dispatch) => {
  db.collection("comments")
    .where("chapterId", "==", id)
    .orderBy("createdAt", "desc")
    .onSnapshot((snap) => {
      let comments = snap.docs.map((comment) => ({
        ...comment.data(),
        id: comment.id,
      }));
      let queries = [];
      comments.forEach((comm) => {
        queries.push(db.collection("users").doc(comm.userId).get());
      });
      Promise.all(queries).then((res) => {
        comments = comments.map((comm) => ({
          ...comm,
          userImage: res.find((d) => d.id === comm.userId).data().image,
        }));
        dispatch({
          type: types.GET_COMMENTS,
          payload: {
            loadingComments: false,
            comments,
          },
        });
      });
    });
};

export const submitComment = (info) => (dispatch) => {
  if (!auth.currentUser.emailVerified)
    return message.error("You need to verify your email first");
  if (!info.content) return message.error("Content must not be empty");

  db.collection("comments")
    .add({
      ...info,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    })
    .then(() => {
      message.success("Comment posted successfully");
      db.collection("chapters")
        .doc(info.chapterId)
        .get()
        .then((chap) => {
          db.collection("chapters")
            .doc(info.chapterId)
            .update({ commentsCount: chap.data().commentsCount + 1 });
        });
    })
    .catch((err) => message.error(err.message));
};

export const deleteComment = (id, chapid) => (dispatch) => {
  db.collection("chapters")
    .doc(chapid)
    .get()
    .then((chap) => {
      db.collection("chapters")
        .doc(chapid)
        .update({ commentsCount: chap.data().commentsCount - 1 })
        .then(() => {
          db.collection("comments").doc(id).delete();
        });
    });
};
