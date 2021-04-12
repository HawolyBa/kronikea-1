import { types } from "../../utils/constants";
import { db, auth, storage } from "../fbConfig";
import firebase from "firebase/app";
import { message } from "antd";

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
  let storyId = "";

  db.collection("stories")
    .add({
      ...data,
      authorId: auth.currentUser.uid,
      authorName: data.authorName,
      oneShot: false,
      banner: typeof data.banner === "string" ? data.banner : "",
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      likesCount: 0,
      chaptersCount: 0,
      secondaryCharacters: [],
      secondaryArr: [],
      featured: false,
      note: 0,
      chaptersCount: 0,
      commentsCount: 0,
      lastUpdated: firebase.firestore.FieldValue.serverTimestamp(),
    })
    .then((res) => {
      storyId = res.id;
      if (typeof data.banner === "object") {
        const imageName = `${res.id}_${data.title
          .toLowerCase()
          .split(" ")
          .join("_")}`;
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
              .update({ banner: url });
          })
          .then(() => {
            dispatch({
              type: types.ADD_STORY,
              payload: {
                message: "Story added successfully",
                storyId: storyId,
                loading: false,
              },
            });
          });
      } else {
        dispatch({
          type: types.ADD_STORY,
          payload: {
            message: "Story added successfully",
            storyId: storyId,
            loading: false,
          },
        });
      }
    })
    .catch((err) => {
      message.error(err.message);
    });
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
            lastUpdated: firebase.firestore.FieldValue.serverTimestamp(),
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
        lastUpdated: firebase.firestore.FieldValue.serverTimestamp(),
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

export const deleteStory = (id) => (dispatch) => {
  dispatch({ type: types.DELETE_STORY, payload: { loading: true } });
  db.collection("stories")
    .doc(id)
    .delete()
    .then(() => {
      dispatch({
        type: types.DELETE_STORY,
        payload: {
          message: "Story deleted successfully",
          loading: true,
          deleted: true,
        },
      });
    });
};

export const getUserStories = (id, type) => (dispatch) => {
  const userId = id ? id : auth.currentUser.uid;
  db.collection("stories")
    .where("authorId", "==", userId)
    .orderBy("createdAt", "desc")
    .get()
    .then((docs) => {
      let items = [];
      docs.forEach((doc) => {
        items = [...items, { id: doc.id, ...doc.data() }].filter((s) =>
          id ? s.public : s
        );
      });
      return items;
    })
    .then((items) => {
      dispatch({ type: types.GET_USER_STORIES, payload: items });
    });
};

export const getFavoriteStories = (id) => (dispatch) => {
  const userId = id ? id : auth.currentUser.uid;
  db.collection("storiesLikes")
    .where("senderId", "==", userId)
    .orderBy("createdAt", "desc")
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
  } else {
    return dispatch({
      type: types.IS_STORY_FAVORITE,
      payload: false,
      loadingFav: false,
    });
  }
};

export const addStoryToFavorite = (id, username, storyTitle, authorId) => (
  dispatch
) => {
  // if (isFavorite) return message.warning("You've already liked this story");
  if (!auth.currentUser)
    return message.error("You need to be logged in to like a story");
  if (!auth.currentUser.emailVerified)
    return message.error("You need to verify your email first");

  return db
    .collection("storiesLikes")
    .add({
      sender: username,
      senderId: auth.currentUser.uid,
      storyId: id,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    })
    .then(() => message.success(`${storyTitle} added to your favorites`))
    .catch((err) => message.error(err.message));
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

export const getHomeStories = () => (dispatch) => {
  let result = [];
  db.collection("stories")
    .where("public", "==", true)
    .orderBy("likesCount", "desc")
    .limit(4)
    .get()
    .then((docs) => {
      docs.forEach((doc) => result.push({ id: doc.id, ...doc.data() }));
      dispatch({
        type: types.GET_HOME_STORIES,
        payload: result,
      });
    });
};

export const getFeaturedStories = () => (dispatch) => {
  db.collection("stories")
    .where("public", "==", true)
    .where("featured", "==", true)
    .limit(10)
    .get()
    .then((docs) => {
      let result = [];
      docs.forEach((doc) => result.push({ id: doc.id, ...doc.data() }));
      dispatch({
        type: types.GET_FEATURED_STORIES,
        payload: result,
        loading: false,
      });
    });
};

export const getStoriesByLetter = (letter, alphabet) => (dispatch) => {
  dispatch({ type: types.GET_STORIES_FROM_SEARCH, loading: true });

  const end = alphabet.findIndex((a) => a === letter);
  db.collection("stories")
    .where("public", "==", true)
    .orderBy("title", "asc")
    .startAt(letter.toUpperCase())
    .endAt(letter === "z" ? "Z" : alphabet[end + 1].toUpperCase())
    .get()
    .then((docs) => {
      let result = [];
      docs.forEach((doc) => result.push({ ...doc.data(), id: doc.id }));
      dispatch({
        type: types.GET_STORIES_FROM_SEARCH,
        loading: false,
        payload: result,
      });
    });
};
// CHAPTERs

export const addChapter = (data) => (dispatch) => {
  dispatch({ type: types.ADD_CHAPTER, payload: { loading: true } });

  db.collection("chapters")
    .where("storyId", "==", data.storyId)
    .get()
    .then((docs) => {
      let numberUsed = [];
      docs.forEach((chapter) => {
        numberUsed.push(chapter.data().number);
      });
      if (numberUsed.includes(data.number)) {
        dispatch({ type: types.ADD_CHAPTER, payload: { loading: false } });
        message.error(`You already have a chapter numbered: ${data.number}`);
      } else {
        return db
          .collection("chapters")
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
            dispatch({
              type: types.ADD_CHAPTER,
              payload: {
                message: "Chapter added successfully",
                chapId: res.id,
                loading: false,
              },
            });
          });
      }
    });
};

export const editChapter = (data, chapid) => (dispatch) => {
  dispatch({ type: types.EDIT_CHAPTER, payload: { loading: true } });
  db.collection("chapters")
    .doc(chapid)
    .update({ ...data })
    .then(() => {
      dispatch({
        type: types.EDIT_CHAPTER,
        payload: {
          message: "Chapter edited successfully",
          loading: false,
        },
      });
    });
};

export const deleteChapter = (id, storyId) => (dispatch) => {
  dispatch({ type: types.DELETE_CHAPTER, payload: { loadingChapter: true } });
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
    })
    .catch((err) => console.log(err));
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
                const chapNumber = chap.data().number;

                const prevChap = db
                  .collection("chapters")
                  .where("storyId", "==", storyId)
                  .where("number", "==", chapNumber - 1)
                  .get();
                const nextChap = db
                  .collection("chapters")
                  .where("storyId", "==", storyId)
                  .where("number", "==", chapNumber + 1)
                  .get();

                charactersInChaper.forEach((char) => {
                  charaQuery.push(db.collection("characters").doc(char).get());
                });
                locationsInChaper.forEach((loc) => {
                  locQuery.push(db.collection("locations").doc(loc).get());
                });
                charaQuery = Promise.all(charaQuery);
                locQuery = Promise.all(locQuery);
                Promise.all([charaQuery, locQuery, prevChap, nextChap]).then(
                  (res) => {
                    let prev = res[2].docs[0] ? res[2].docs[0].id : null;
                    let next = res[3].docs[0] ? res[3].docs[0].id : null;
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
                          prev,
                          next,
                          locations,
                          characters,
                          public: doc.data().public,
                          storyTitle: doc.data().title,
                        },
                        chapterExists: true,
                      },
                    });
                  }
                );
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
          status: doc.data().status,
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
  dispatch({ type: types.ADD_LOCATION, payload: { loadingLoc: true } });
  let locId = "";

  db.collection("locations")
    .add({
      ...data,
      image: typeof data.image === "string" ? data.image : "",
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    })
    .then((res) => {
      locId = res.id;
      if (typeof data.image === "object") {
        const imageName = `${locId}_${data.name
          .toLowerCase()
          .split(" ")
          .join("_")}`;
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
            return db.collection("locations").doc(locId).update({ image: url });
          })
          .then(() => {
            dispatch({
              type: types.ADD_LOCATION,
              payload: {
                message: "Location added successfully",
                locId: res.id,
                loadingLoc: false,
              },
            });
          });
      } else {
        dispatch({
          type: types.ADD_LOCATION,
          payload: {
            message: "Location added successfully",
            locId: res.id,
            loadingLoc: false,
          },
        });
      }
    })
    .catch((err) => {
      message.error(err.message);
    });
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

export const deleteLocation = (id, name) => (dispatch) => {
  dispatch({ type: types.DELETE_CHAPTER, payload: { loading: true } });
  const batch = db.batch();
  const imageName = `${id}_${name.toLowerCase().split(" ").join("_")}`;

  batch.delete(db.collection("locations").doc(id));
  db.collection("chapters")
    .where("locations", "array-contains", id)
    .get()
    .then((res) => {
      res.forEach((chap) =>
        batch.update(db.collection("chapters").doc(chap.id), {
          locations: chap.data().locations.filter((c) => c !== id),
        })
      );

      storage
        .ref(`${auth.currentUser.uid}/${imageName}`)
        .delete()
        .then(() => {
          batch.commit().then(() => {
            dispatch({
              type: types.DELETE_CHAPTER,
              payload: {
                loading: false,
                message: "Location deleted successfully",
                deleted: true,
              },
            });
          });
        })
        .catch((err) => {
          console.log(err);
          batch.commit().then(() => {
            dispatch({
              type: types.DELETE_CHAPTER,
              payload: {
                loading: false,
                message: "Location deleted successfully",
                deleted: true,
              },
            });
          });
        });
    })
    .catch((err) => console.log(err));
};

export const getUserLocations = (id) => (dispatch) => {
  const userId = id ? id : auth.currentUser.uid;
  db.collection("locations")
    .where("authorId", "==", userId)
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
          //userImage: res.find((d) => d.id === comm.userId).data().image,
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
      userDeleted: false,
      suspended: false,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    })
    .then(() => message.success("Comment posted successfully"))
    .catch((err) => message.error(err.message));
};

export const deleteComment = (id) => (dispatch) => {
  db.collection("comments").doc(id).delete();
};

// ARCHIVES

export const getStoriesFromSearch = (search) => (dispatch) => {
  let result = [];
  db.collection("stories")
    .where("public", "==", true)
    .get()
    .then((data) => {
      data.forEach((doc) => {
        const title = doc.data().title.toLowerCase().split(" ");
        const authorName = doc.data().authorName.toLowerCase().split(" ");
        const searchTerm = search.split("-");
        const isIncluded = searchTerm.every((word) => title.includes(word));
        const orIncluded = searchTerm.some(
          (word) => doc.data().title.toLowerCase().indexOf(word) !== -1
        );
        const authorIncluded = searchTerm.every((word) =>
          authorName.includes(word)
        );
        const orAuthorIncluded = searchTerm.some(
          (word) => doc.data().authorName.toLowerCase().indexOf(word) !== -1
        );
        if (isIncluded || orIncluded || authorIncluded || orAuthorIncluded) {
          result.push({ ...doc.data(), id: doc.id });
        }
      });
      return result;
    })
    .then(() => {
      dispatch({
        type: types.GET_STORIES_FROM_SEARCH,
        payload: result,
        loading: false,
      });
    });
};
