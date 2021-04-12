import { types } from "../../utils/constants";
import { message } from "antd";
import { db, auth, storage } from "../fbConfig";
import firebase from "firebase/app";

export const getCharacter = (id, type) => (dispatch) => {
  let relArr = [];
  let storyArr = [];
  db.collection("characters")
    .doc(id)
    .get()
    .then((doc) => {
      if (doc.exists) {
        if (type === "show") {
          const relatives = doc.data().relativesArr;
          let relQueries = [];
          relatives.forEach((rel) => {
            relQueries.push(db.collection("characters").doc(rel).get());
          });
          Promise.all(relQueries).then((res) => {
            res.forEach((char) =>
              relArr.push({
                ...char.data(),
                id: char.id,
                relation: doc
                  .data()
                  .relatives.find((c) => c.character_id === char.id).relation,
              })
            );

            const mainQuery = db
              .collection("stories")
              .where("mainCharacters", "array-contains", id)
              .get();

            const secondaryQuery = db
              .collection("stories")
              .where("secondaryArr", "array-contains", id)
              .get();

            Promise.all([mainQuery, secondaryQuery]).then((result) => {
              const allStory = result[0].docs.concat(result[1].docs);
              allStory.forEach((story) => {
                storyArr.push({
                  id: story.id,
                  title: story.data().title,
                  authorId: story.data().authorId,
                  banner: story.data().banner,
                });
              });
              dispatch({
                type: types.GET_CHARACTER,
                payload: {
                  character: {
                    ...doc.data(),
                    id: doc.id,
                    relatives: relArr.filter(
                      (r) =>
                        (auth.currentUser && auth.currentUser.uid) ===
                          r.authorId || r.public
                    ),
                    stories: storyArr.filter(
                      (r) =>
                        (auth.currentUser && auth.currentUser.uid) ===
                          r.authorId || r.public
                    ),
                  },
                  charaExists: true,
                  loading: false,
                },
              });
            });
          });
        } else {
          dispatch({
            type: types.GET_CHARACTER,
            payload: {
              character: { ...doc.data(), id: doc.id },
              charaExists: true,
              loading: false,
            },
          });
        }
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
  //const batch = db.batch();
  db.collection("characters")
    .doc(id)
    .delete()
    .then(() => {
      if (storage.ref(`${auth.currentUser.uid}/${imageName}`)) {
        return storage
          .ref(`${auth.currentUser.uid}/${imageName}`)
          .delete()
          .then(() => {
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
      }
    });
};

export const getUserCharacters = (id) => (dispatch) => {
  const userId = id ? id : auth.currentUser.uid;
  db.collection("characters")
    .where("authorId", "==", userId)
    .get()
    .then((docs) => {
      let items = [];
      docs.forEach((doc) => {
        items = [...items, { id: doc.id, ...doc.data() }].filter((c) =>
          id ? c.public : c
        );
      });
      return items;
    })
    .then((items) => {
      dispatch({ type: types.GET_USER_CHARACTERS, payload: items });
    });
};

export const getFavoriteCharacters = (id) => (dispatch) => {
  const userId = id ? id : auth.currentUser.uid;
  db.collection("charactersLikes")
    .where("senderId", "==", userId)
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

export const isCharacterFavorite = (charId) => (dispatch) => {
  if (auth.currentUser) {
    db.collection("charactersLikes")
      .where("senderId", "==", auth.currentUser.uid)
      .where("characterId", "==", charId)
      .onSnapshot((snapshot) => {
        const answer = snapshot.docs[0] ? true : false;
        return dispatch({
          type: types.IS_CHARACTER_FAVORITE,
          payload: answer,
          loadingFav: false,
        });
      });
  }
};

export const addCharacterToFavorite = (
  id,
  username,
  characterName,
  authorId
) => (dispatch) => {
  // if (isFavorite) return message.warning("You've already liked this story");
  if (!auth.currentUser)
    return message.error("You need to be logged in to like a character");
  if (!auth.currentUser.emailVerified)
    return message.error("You need to verify your email first");

  db.collection("charactersLikes")
    .add({
      sender: username,
      senderId: auth.currentUser.uid,
      characterId: id,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    })
    .then(() => message.success(`${characterName} added to your favorites`))
    .catch((err) => message.error("There has been a problem"));
};

export const removeCharacterFromFavorite = (id, characterName) => (
  dispatch
) => {
  db.collection("charactersLikes")
    .where("characterId", "==", id)
    .where("senderId", "==", auth.currentUser.uid)
    .get()
    .then((data) => {
      return db.collection("charactersLikes").doc(data.docs[0].id).delete();
    })
    .then(() => message.success(`${characterName} removed from your favorites`))
    .catch((err) => message.error("There has been a problem"));
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

export const submitCharaterFeedback = (info, userComment) => (dispatch) => {
  const { characterName, ...allInfo } = info;
  if (!auth.currentUser.emailVerified)
    return message.error("You need to verify your email first");
  if (!info.content) return message.error("Content must not be empty");
  if (userComment) return message.error("You have already sent feedback");

  db.collection("comments")
    .add({
      ...info,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    })
    .then(() => {
      dispatch({
        type: types.SUBMIT_COMMENT,
        message: "Comment posted successfully",
      });
    })
    .catch((err) => message.error(err.message));
};

export const getCharacterComments = (id) => (dispatch) => {
  let comments = [];
  db.collection("comments")
    .where("characterId", "==", id)
    .orderBy("createdAt", "asc")
    .get()
    .then((comm) => {
      let userQueries = [];
      comm.forEach((c) => comments.push({ ...c.data(), id: c.id }));
      comments.forEach((comment) => {
        userQueries.push(db.collection("users").doc(comment.userId).get());
      });

      Promise.all(userQueries).then((res) => {
        comments = comments.map((c) => ({
          ...c,
          userImage: res.find((d) => d.id === c.userId).data().image,
        }));
        const userComment = auth.currentUser
          ? comments.find((c) => c.userId === auth.currentUser.uid)
          : null;
        comments = auth.currentUser
          ? comments.filter((c) => c.userId !== auth.currentUser.uid)
          : comments;
        dispatch({
          type: types.GET_COMMENTS,
          payload: {
            comments,
            userComment,
            loadingComments: false,
          },
        });
      });
    });
};

export const deleteCharacterComment = (id) => (dispatch) => {
  db.collection("comments")
    .doc(id)
    .delete()
    .then(() => {
      dispatch({
        type: types.SUBMIT_COMMENT,
        message: "Comment deleted successfully",
      });
    });
};

export const rateComment = (commentId, type) => (dispatch) => {
  dispatch({ type: types.RATE_COMMENT, rated: true });
  if (!auth.currentUser)
    return message.error("You need to be logged in to rate a comment");
  db.collection("comments")
    .doc(commentId)
    .get()
    .then((doc) => {
      const isLiked = doc.data().likedBy.includes(auth.currentUser.uid);
      const isDisliked = doc.data().dislikedBy.includes(auth.currentUser.uid);
      if ((type === "like" && isLiked) || (type === "dislike" && isDisliked)) {
        return;
      }
      if (type === "like") {
        db.collection("comments")
          .doc(commentId)
          .update({
            dislikedBy: isDisliked
              ? doc.data().dislikedBy.filter((d) => d !== auth.currentUser.uid)
              : doc.data().dislikedBy,
            likedBy: [...doc.data().likedBy, auth.currentUser.uid],
          })
          .then(() => {
            dispatch({ type: types.SUBMIT_COMMENT, message: "Voilou" });
          });
      } else if (type === "dislike") {
        db.collection("comments")
          .doc(commentId)
          .update({
            likedBy: isLiked
              ? doc.data().likedBy.filter((d) => d !== auth.currentUser.uid)
              : doc.data().likedBy,
            dislikedBy: [...doc.data().dislikedBy, auth.currentUser.uid],
          })
          .then(() => {
            dispatch({ type: types.RATE_COMMENT, rated: false });
          });
      }
    });
};

export const getCharactersFromSearch = (search) => (dispatch) => {
  let result = [];
  dispatch({ type: types.GET_CHARACTERS_FROM_SEARCH, loading: true });
  db.collection("characters")
    .where("public", "==", true)
    .get()
    .then((docs) => {
      docs.forEach((doc) => {
        const firstname = doc.data().firstname.toLowerCase();
        const lastname = doc.data().lastname.toLowerCase();
        const authorName = doc.data().authorName.toLowerCase().split(" ");
        const searchTerm = search.split("-");

        const firstnameIncluded = searchTerm.some(
          (word) => firstname.indexOf(word) !== -1
        );
        const lastnameIncluded = searchTerm.some(
          (word) => lastname.indexOf(word) !== -1
        );
        const authorIncluded = searchTerm.every((word) =>
          authorName.includes(word)
        );
        const orAuthorIncluded = searchTerm.some(
          (word) => doc.data().authorName.toLowerCase().indexOf(word) !== -1
        );
        if (
          firstnameIncluded ||
          lastnameIncluded ||
          authorIncluded ||
          orAuthorIncluded
        ) {
          result.push({ ...doc.data(), id: doc.id });
        }
        return result;
      });
    })
    .then(() => {
      dispatch({
        type: types.GET_CHARACTERS_FROM_SEARCH,
        payload: result,
        loading: false,
      });
    })
    .catch((err) => message.error(err.message));
};

export const getPopularCharacters = () => (dispatch) => {
  db.collection("characters")
    .where("public", "==", true)
    .orderBy("likesCount", "desc")
    .limit(12)
    .get()
    .then((docs) => {
      let res = [];
      docs.forEach((doc) => {
        res = [...res, { ...doc.data(), id: doc.id }];
      });
      dispatch({
        type: types.GET_POPULAR_CHARACTERS,
        payload: res,
      });
    });
};
