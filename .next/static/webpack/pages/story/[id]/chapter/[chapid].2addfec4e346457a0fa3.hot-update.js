webpackHotUpdate_N_E("pages/story/[id]/chapter/[chapid]",{

/***/ "./redux/actions/storiesActions.js":
/*!*****************************************!*\
  !*** ./redux/actions/storiesActions.js ***!
  \*****************************************/
/*! exports provided: getStory, addStory, editStory, getUserStories, getFavoriteStories, isStoryFavorite, addStoryToFavorite, removeStoryFromFavorite, getStoryCharacters, addChapter, editChapter, deleteChapter, getChapter, getChapters, addLocation, editLocation, getLocation, getUserLocations, getStoryLocations, getComments, submitComment, deleteComment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStory", function() { return getStory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addStory", function() { return addStory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editStory", function() { return editStory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserStories", function() { return getUserStories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFavoriteStories", function() { return getFavoriteStories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isStoryFavorite", function() { return isStoryFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addStoryToFavorite", function() { return addStoryToFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeStoryFromFavorite", function() { return removeStoryFromFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStoryCharacters", function() { return getStoryCharacters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addChapter", function() { return addChapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editChapter", function() { return editChapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteChapter", function() { return deleteChapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChapter", function() { return getChapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChapters", function() { return getChapters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addLocation", function() { return addLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editLocation", function() { return editLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocation", function() { return getLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserLocations", function() { return getUserLocations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStoryLocations", function() { return getStoryLocations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getComments", function() { return getComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submitComment", function() { return submitComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteComment", function() { return deleteComment; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/constants */ "./utils/constants.js");
/* harmony import */ var _fbConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fbConfig */ "./redux/fbConfig.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.esm.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





 // STORIES

var getStory = function getStory(id) {
  return function (dispatch) {
    _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("stories").doc(id).get().then(function (doc) {
      if (doc.exists) {
        var main = doc.data().mainCharacters;
        var secondary = doc.data().secondaryCharacters;
        var mainArr = [];
        var secondaryArr = [];
        var mainQuery = main.map(function (c) {
          return _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("characters").doc(c).get();
        });
        var secondaryQuery = secondary.map(function (c) {
          return _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("characters").doc(c.id).get();
        });
        var mainRes = Promise.all(mainQuery);
        var secondaryRes = Promise.all(secondaryQuery);
        Promise.all([mainRes, secondaryRes]).then(function (result) {
          result[0].forEach(function (docu) {
            mainArr = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(mainArr), [_objectSpread(_objectSpread({}, docu.data()), {}, {
              id: docu.id
            })]);
          });
          result[1].forEach(function (docu) {
            secondaryArr = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(secondaryArr), [_objectSpread(_objectSpread({}, docu.data()), {}, {
              id: docu.id
            })]);
          });
          dispatch({
            type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].GET_STORY,
            storyExists: true,
            payload: _objectSpread(_objectSpread({}, doc.data()), {}, {
              id: doc.id,
              secondaryCharacters: secondaryArr,
              mainCharacters: mainArr,
              mainArr: doc.data().mainCharacters,
              secondaryArr: doc.data().secondaryCharacters
            })
          });
        });
      } else {
        dispatch({
          type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].DISPATCH_ERROR,
          storyExists: false
        });
      }
    })["catch"](function (err) {
      return console.log(err);
    });
  };
};
var addStory = function addStory(data) {
  return function (dispatch) {
    dispatch({
      type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].ADD_STORY,
      payload: {
        loading: true
      }
    });
    var imageName = data.title.toLowerCase().split(" ").join("_");

    if (typeof data.banner === "object") {
      _fbConfig__WEBPACK_IMPORTED_MODULE_3__["storage"].ref("".concat(_fbConfig__WEBPACK_IMPORTED_MODULE_3__["auth"].currentUser.uid, "/").concat(imageName)).put(data.banner).then(function () {
        return _fbConfig__WEBPACK_IMPORTED_MODULE_3__["storage"].ref(_fbConfig__WEBPACK_IMPORTED_MODULE_3__["auth"].currentUser.uid).child(imageName).getDownloadURL();
      }).then(function (url) {
        return _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("stories").add(_objectSpread(_objectSpread({}, data), {}, {
          authorId: _fbConfig__WEBPACK_IMPORTED_MODULE_3__["auth"].currentUser.uid,
          authorName: data.authorName,
          oneShot: false,
          banner: url,
          createdAt: firebase_app__WEBPACK_IMPORTED_MODULE_4__["default"].firestore.FieldValue.serverTimestamp(),
          likesCount: 0,
          chaptersCount: 0,
          secondaryCharacters: [],
          featured: false,
          note: 0
        }));
      }).then(function (res) {
        antd__WEBPACK_IMPORTED_MODULE_5__["message"].success("Story added successfully");
        setTimeout(function () {
          next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push("/story/".concat(res.id));
          dispatch({
            type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].ADD_STORY,
            payload: {
              message: "Story added successfully",
              storyId: res.id,
              loading: false
            }
          });
        }, 1000);
      })["catch"](function (err) {
        antd__WEBPACK_IMPORTED_MODULE_5__["message"].error(err.message);
      });
    } else {
      _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("stories").add(_objectSpread(_objectSpread({}, data), {}, {
        authorId: _fbConfig__WEBPACK_IMPORTED_MODULE_3__["auth"].currentUser.uid,
        authorName: data.authorName,
        oneShot: false,
        createdAt: firebase_app__WEBPACK_IMPORTED_MODULE_4__["default"].firestore.FieldValue.serverTimestamp(),
        likesCount: 0,
        chaptersCount: 0,
        featured: false,
        secondaryCharacters: [],
        note: 0
      })).then(function (res) {
        antd__WEBPACK_IMPORTED_MODULE_5__["message"].success("Story added successfully");
        setTimeout(function () {
          next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push("/story/".concat(res.id));
          dispatch({
            type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].ADD_STORY,
            payload: {
              message: "Story added successfully",
              storyId: res.id,
              loading: false
            }
          });
        }, 1000);
      })["catch"](function (err) {
        antd__WEBPACK_IMPORTED_MODULE_5__["message"].error(err.message);
      });
    }
  };
};
var editStory = function editStory(data, storyId) {
  return function (dispatch) {
    dispatch({
      type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].EDIT_STORY,
      payload: {
        loadingStory: true
      }
    });
    var imageName = data.title.toLowerCase().split(" ").join("_");

    if (typeof data.banner === "object") {
      _fbConfig__WEBPACK_IMPORTED_MODULE_3__["storage"].ref("".concat(_fbConfig__WEBPACK_IMPORTED_MODULE_3__["auth"].currentUser.uid, "/").concat(imageName)).put(data.banner).then(function () {
        return _fbConfig__WEBPACK_IMPORTED_MODULE_3__["storage"].ref(_fbConfig__WEBPACK_IMPORTED_MODULE_3__["auth"].currentUser.uid).child(imageName).getDownloadURL();
      }).then(function (url) {
        return _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("stories").doc(storyId).update(_objectSpread(_objectSpread({}, data), {}, {
          banner: url
        }));
      }).then(function () {
        _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("locations").where("storyId", "==", storyId).get().then(function (docs) {
          var locationQuery = [];
          docs.forEach(function (doc) {
            locationQuery = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(locationQuery), [_fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("locations").doc(doc.id).update({
              storyTitle: data.title
            })]);
          });
          Promise.all(locationQuery).then(function () {
            antd__WEBPACK_IMPORTED_MODULE_5__["message"].success("Story added successfully");
            dispatch({
              type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].EDIT_STORY,
              payload: {
                message: "Story edited successfully"
              }
            });
          });
        });
      })["catch"](function (err) {
        antd__WEBPACK_IMPORTED_MODULE_5__["message"].error(err.message);
      });
    } else {
      _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("stories").doc(storyId).update(_objectSpread({}, data)).then(function () {
        _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("locations").where("storyId", "==", storyId).get().then(function (docs) {
          var locationQuery = [];
          docs.forEach(function (doc) {
            locationQuery = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(locationQuery), [_fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("locations").doc(doc.id).update({
              storyTitle: data.title
            })]);
          });
          Promise.all(locationQuery).then(function () {
            antd__WEBPACK_IMPORTED_MODULE_5__["message"].success("Story added successfully");
            dispatch({
              type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].EDIT_STORY,
              payload: {
                message: "Story edited successfully"
              }
            });
          });
        });
      })["catch"](function (err) {
        antd__WEBPACK_IMPORTED_MODULE_5__["message"].error(err.message);
      });
    }
  };
};
var getUserStories = function getUserStories() {
  return function (dispatch) {
    _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("stories").where("authorId", "==", _fbConfig__WEBPACK_IMPORTED_MODULE_3__["auth"].currentUser.uid).get().then(function (docs) {
      var items = [];
      docs.forEach(function (doc) {
        items = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(items), [_objectSpread({
          id: doc.id
        }, doc.data())]);
      });
      return items;
    }).then(function (items) {
      dispatch({
        type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].GET_USER_STORIES,
        payload: items
      });
    });
  };
};
var getFavoriteStories = function getFavoriteStories() {
  return function (dispatch) {
    _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("storiesLikes").where("senderId", "==", _fbConfig__WEBPACK_IMPORTED_MODULE_3__["auth"].currentUser.uid).get().then(function (docs) {
      var favArr = [];
      docs.forEach(function (doc) {
        favArr = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(favArr), [doc.data().storyId]);
      });
      return favArr;
    }).then(function (users) {
      var result = users.map(function (user) {
        return _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("stories").doc(user).get();
      });
      Promise.all(result).then(function (res) {
        var favUsers = [];
        res.forEach(function (doc) {
          return favUsers = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(favUsers), [_objectSpread({
            id: doc.id
          }, doc.data())]);
        });
        dispatch({
          type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].GET_FAVORITE_STORIES,
          payload: favUsers
        });
      });
    });
  };
};
var isStoryFavorite = function isStoryFavorite(storyId) {
  return function (dispatch) {
    if (_fbConfig__WEBPACK_IMPORTED_MODULE_3__["auth"].currentUser) {
      _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("storiesLikes").where("senderId", "==", _fbConfig__WEBPACK_IMPORTED_MODULE_3__["auth"].currentUser.uid).where("storyId", "==", storyId).onSnapshot(function (snapshot) {
        var answer = snapshot.docs[0] ? true : false;
        return dispatch({
          type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].IS_STORY_FAVORITE,
          payload: answer,
          loadingFav: false
        });
      });
    }
  };
};
var addStoryToFavorite = function addStoryToFavorite(id, username, storyTitle) {
  return function (dispatch) {
    // if (isFavorite) return message.warning("You've already liked this story");
    if (!_fbConfig__WEBPACK_IMPORTED_MODULE_3__["auth"].currentUser) return antd__WEBPACK_IMPORTED_MODULE_5__["message"].error("You need to be logged in to like a story");
    if (!_fbConfig__WEBPACK_IMPORTED_MODULE_3__["auth"].currentUser.emailVerified) return antd__WEBPACK_IMPORTED_MODULE_5__["message"].error("You need to verify your email first");
    _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("storiesLikes").add({
      sender: username,
      senderId: _fbConfig__WEBPACK_IMPORTED_MODULE_3__["auth"].currentUser.uid,
      storyId: id,
      createdAt: firebase_app__WEBPACK_IMPORTED_MODULE_4__["default"].firestore.FieldValue.serverTimestamp()
    }).then(function () {
      return antd__WEBPACK_IMPORTED_MODULE_5__["message"].success("".concat(storyTitle, " added to your favorites"));
    })["catch"](function (err) {
      return antd__WEBPACK_IMPORTED_MODULE_5__["message"].error("There has been a problem");
    });
  };
};
var removeStoryFromFavorite = function removeStoryFromFavorite(id, storyTitle) {
  return function (dispatch) {
    _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("storiesLikes").where("storyId", "==", id).where("senderId", "==", _fbConfig__WEBPACK_IMPORTED_MODULE_3__["auth"].currentUser.uid).get().then(function (data) {
      return _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("storiesLikes").doc(data.docs[0].id)["delete"]();
    }).then(function () {
      return antd__WEBPACK_IMPORTED_MODULE_5__["message"].success("".concat(storyTitle, " removed from your favorites"));
    })["catch"](function (err) {
      return antd__WEBPACK_IMPORTED_MODULE_5__["message"].error("There has been a problem");
    });
  };
};
var getStoryCharacters = function getStoryCharacters() {
  return function (dispatch) {};
}; // CHAPTERs

var addChapter = function addChapter(data, secondaryCharacters) {
  return function (dispatch) {
    dispatch({
      type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].ADD_CHAPTER,
      payload: {
        loading: true
      }
    });
    _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("chapters").add(_objectSpread(_objectSpread({}, data), {}, {
      authorId: _fbConfig__WEBPACK_IMPORTED_MODULE_3__["auth"].currentUser.uid,
      commentsCount: 0,
      note: 0,
      voters: [],
      votesCount: 0,
      createdAt: firebase_app__WEBPACK_IMPORTED_MODULE_4__["default"].firestore.FieldValue.serverTimestamp()
    })).then(function (res) {
      _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("stories").doc(data.storyId).get().then(function (doc) {
        _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("stories").doc(data.storyId).update({
          secondaryCharacters: secondaryCharacters
        }).then(function () {
          dispatch({
            type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].ADD_CHAPTER,
            payload: {
              message: "Chapter added successfully",
              chapId: res.id,
              loading: false
            }
          });
        });
      });
    }); // .then((res) => {
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
};
var editChapter = function editChapter(data, storyId, chapid, secondaryCharacters) {
  return function (dispatch) {
    dispatch({
      type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].EDIT_CHAPTER,
      payload: {
        loading: true
      }
    });
    _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("chapters").doc(chapid).update(_objectSpread({}, data)).then(function () {
      _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("stories").doc(storyId).get().then(function (doc) {
        _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("stories").doc(storyId).update({
          secondaryCharacters: secondaryCharacters
        }).then(function () {
          dispatch({
            type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].EDIT_CHAPTER,
            payload: {
              message: "Chapter edited successfully",
              loading: false
            }
          });
        });
      });
    });
  };
};
var deleteChapter = function deleteChapter(id, storyId) {
  return function (dispatch) {
    dispatch({
      type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].DELETE_CHAPTER,
      payload: {
        loadingChapter: true
      }
    });
    _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("chapters").doc(id).get().then(function (doc) {
      var charactersFromChapter = doc.data().characters;
      _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("stories").doc(storyId).get().then(function (story) {
        var charactersFromStory = story.data().secondaryCharacters;
        var newArr = charactersFromStory.map(function (c) {
          if (charactersFromChapter.includes(c.id)) {
            return _objectSpread(_objectSpread({}, c), {}, {
              times: c.times - 1
            });
          } else {
            return c;
          }
        });
        newArr = newArr.filter(function (c) {
          return c.times > 0;
        });
        _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("stories").doc(storyId).update({
          secondaryCharacters: newArr
        }).then(function () {
          _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("chapters").doc(id)["delete"]().then(function () {
            dispatch({
              type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].DELETE_CHAPTER,
              payload: {
                message: "Chapter deleted successfully",
                loadingChapter: false
              }
            });
          });
        });
      });
    });
  };
};
var getChapter = function getChapter(storyId, id, type) {
  return function (dispatch) {
    _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("stories").doc(storyId).get().then(function (doc) {
      if (doc.exists) {
        _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("chapters").doc(id).get().then(function (chap) {
          if (chap.exists) {
            if (type === "show") {
              var characters = [];
              var locations = [];
              var charaQuery = [];
              var locQuery = [];
              var charactersInChaper = chap.data().characters;
              var locationsInChaper = chap.data().locations;
              charactersInChaper.forEach(function (_char) {
                charaQuery.push(_fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("characters").doc(_char).get());
              });
              locationsInChaper.forEach(function (loc) {
                locQuery.push(_fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("locations").doc(loc).get());
              });
              charaQuery = Promise.all(charaQuery);
              locQuery = Promise.all(locQuery);
              Promise.all([charaQuery, locQuery]).then(function (res) {
                res[0].forEach(function (c) {
                  characters.push(_objectSpread(_objectSpread({}, c.data()), {}, {
                    id: c.id
                  }));
                });
                res[1].forEach(function (l) {
                  locations.push(_objectSpread(_objectSpread({}, l.data()), {}, {
                    id: l.id
                  }));
                });
                dispatch({
                  type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].GET_CHAPTER,
                  payload: {
                    chapter: _objectSpread(_objectSpread({}, chap.data()), {}, {
                      id: chap.id,
                      locations: locations,
                      characters: characters,
                      "public": doc.data()["public"],
                      storyTitle: doc.data().title
                    }),
                    chapterExists: true
                  }
                });
              });
            } else {
              dispatch({
                type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].GET_CHAPTER,
                payload: {
                  chapter: _objectSpread(_objectSpread({}, chap.data()), {}, {
                    id: chap.id,
                    "public": doc.data()["public"]
                  }),
                  chapterExists: true
                }
              });
            }
          } else {
            dispatch({
              type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].GET_CHAPTER,
              payload: {
                chapterExists: false
              }
            });
          }
        });
      } else {
        dispatch({
          type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].GET_CHAPTER,
          payload: {
            chapterExists: false
          }
        });
      }
    });
  };
};
var getChapters = function getChapters(id) {
  return function (dispatch) {
    _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("chapters").where("storyId", "==", id).orderBy("number", "asc").onSnapshot(function (docs) {
      var arr = [];
      docs.forEach(function (doc) {
        arr.push({
          authorId: doc.data().authorId,
          id: doc.id,
          createdAt: doc.data().createdAt,
          number: doc.data().number,
          title: doc.data().title,
          commentsCount: doc.data().commentsCount
        });
      });
      dispatch({
        type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].GET_CHAPTERS,
        payload: arr
      });
    });
  };
}; // LOCATIONS

var addLocation = function addLocation(data) {
  return function (dispatch) {
    console.log("coucou");
    dispatch({
      type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].ADD_LOCATION,
      payload: {
        loadingLoc: true
      }
    });
    var imageName = data.name.toLowerCase().split(" ").join("_");

    if (typeof data.image === "object") {
      _fbConfig__WEBPACK_IMPORTED_MODULE_3__["storage"].ref("".concat(_fbConfig__WEBPACK_IMPORTED_MODULE_3__["auth"].currentUser.uid, "/").concat(imageName)).put(data.image).then(function () {
        return _fbConfig__WEBPACK_IMPORTED_MODULE_3__["storage"].ref(_fbConfig__WEBPACK_IMPORTED_MODULE_3__["auth"].currentUser.uid).child(imageName).getDownloadURL();
      }).then(function (url) {
        return _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("locations").add(_objectSpread(_objectSpread({}, data), {}, {
          image: url,
          createdAt: firebase_app__WEBPACK_IMPORTED_MODULE_4__["default"].firestore.FieldValue.serverTimestamp()
        }));
      }).then(function (res) {
        return dispatch({
          type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].ADD_LOCATION,
          payload: {
            message: "Location added successfully",
            locId: res.id,
            loadingLoc: false
          }
        });
      })["catch"](function (err) {
        antd__WEBPACK_IMPORTED_MODULE_5__["message"].error(err.message);
      });
    } else {
      _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("locations").add(_objectSpread(_objectSpread({}, data), {}, {
        createdAt: firebase_app__WEBPACK_IMPORTED_MODULE_4__["default"].firestore.FieldValue.serverTimestamp()
      })).then(function (res) {
        return dispatch({
          type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].ADD_LOCATION,
          payload: {
            message: "Location added successfully",
            locId: res.id,
            loadingLoc: false
          }
        });
      })["catch"](function (err) {
        antd__WEBPACK_IMPORTED_MODULE_5__["message"].error(err.message);
      });
    }
  };
};
var editLocation = function editLocation(data) {
  return function (dispatch) {};
};
var getLocation = function getLocation(id) {
  return function (dispatch) {
    _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("locations").doc(id).get().then(function (doc) {
      if (doc.exists) {
        dispatch({
          type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].GET_LOCATION,
          payload: _objectSpread(_objectSpread({}, doc.data()), {}, {
            id: doc.id
          }),
          locationExists: true
        });
      } else {
        dispatch({
          type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].GET_LOCATION,
          locationExists: false
        });
      }
    });
  };
};
var getUserLocations = function getUserLocations() {
  return function (dispatch) {
    _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("locations").where("authorId", "==", _fbConfig__WEBPACK_IMPORTED_MODULE_3__["auth"].currentUser.uid).get().then(function (docs) {
      var locations = [];
      docs.forEach(function (doc) {
        locations = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(locations), [_objectSpread({
          id: doc.id
        }, doc.data())]);
      });
      dispatch({
        type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].GET_USER_LOCATIONS,
        payload: locations
      });
    });
  };
};
var getStoryLocations = function getStoryLocations(storyId) {
  return function (dispatch) {
    _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("locations").where("storyId", "==", storyId).get().then(function (docs) {
      var locations = docs.docs.map(function (doc) {
        return _objectSpread(_objectSpread({}, doc.data()), {}, {
          id: doc.id
        });
      });
      dispatch({
        type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].GET_STORY_LOCATIONS,
        payload: locations
      });
    });
  };
}; // COMMENTS

var getComments = function getComments(id) {
  return function (dispatch) {
    _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("comments").where("chapterId", "==", id).orderBy("createdAt", "desc").onSnapshot(function (snap) {
      var comments = snap.docs.map(function (comment) {
        return _objectSpread(_objectSpread({}, comment.data()), {}, {
          id: comment.id
        });
      });
      var queries = [];
      comments.forEach(function (comm) {
        queries.push(_fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("users").doc(comm.userId).get());
      });
      Promise.all(queries).then(function (res) {
        comments = comments.map(function (comm) {
          return _objectSpread(_objectSpread({}, comm), {}, {
            userImage: res.find(function (d) {
              return d.id === comm.userId;
            }).data().image
          });
        });
        dispatch({
          type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].GET_COMMENTS,
          payload: {
            loadingComments: false,
            comments: comments
          }
        });
      });
    });
  };
};
var submitComment = function submitComment(info) {
  return function (dispatch) {
    if (!_fbConfig__WEBPACK_IMPORTED_MODULE_3__["auth"].currentUser.emailVerified) return antd__WEBPACK_IMPORTED_MODULE_5__["message"].error("You need to verify your email first");
    if (!info.content) return antd__WEBPACK_IMPORTED_MODULE_5__["message"].error("Content must not be empty");
    _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("comments").add(_objectSpread(_objectSpread({}, info), {}, {
      createdAt: firebase_app__WEBPACK_IMPORTED_MODULE_4__["default"].firestore.FieldValue.serverTimestamp()
    })).then(function () {
      antd__WEBPACK_IMPORTED_MODULE_5__["message"].success("Comment posted successfully");
      _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("chapters").doc(info.chapterId).get().then(function (chap) {
        _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("chapters").doc(info.chapterId).update({
          commentsCount: chap.data().commentsCount + 1
        });
      });
    })["catch"](function (err) {
      return antd__WEBPACK_IMPORTED_MODULE_5__["message"].error(err.message);
    });
  };
};
var deleteComment = function deleteComment(id, chapid) {
  return function (dispatch) {
    _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("chapters").doc(chapid).get().then(function (chap) {
      _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("chapters").doc(chapid).update({
        commentsCount: chap.data().commentsCount - 1
      }).then(function () {
        _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("comments").doc(id)["delete"]();
      });
    });
  };
};

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvYWN0aW9ucy9zdG9yaWVzQWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJnZXRTdG9yeSIsImlkIiwiZGlzcGF0Y2giLCJkYiIsImNvbGxlY3Rpb24iLCJkb2MiLCJnZXQiLCJ0aGVuIiwiZXhpc3RzIiwibWFpbiIsImRhdGEiLCJtYWluQ2hhcmFjdGVycyIsInNlY29uZGFyeSIsInNlY29uZGFyeUNoYXJhY3RlcnMiLCJtYWluQXJyIiwic2Vjb25kYXJ5QXJyIiwibWFpblF1ZXJ5IiwibWFwIiwiYyIsInNlY29uZGFyeVF1ZXJ5IiwibWFpblJlcyIsIlByb21pc2UiLCJhbGwiLCJzZWNvbmRhcnlSZXMiLCJyZXN1bHQiLCJmb3JFYWNoIiwiZG9jdSIsInR5cGUiLCJ0eXBlcyIsIkdFVF9TVE9SWSIsInN0b3J5RXhpc3RzIiwicGF5bG9hZCIsIkRJU1BBVENIX0VSUk9SIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImFkZFN0b3J5IiwiQUREX1NUT1JZIiwibG9hZGluZyIsImltYWdlTmFtZSIsInRpdGxlIiwidG9Mb3dlckNhc2UiLCJzcGxpdCIsImpvaW4iLCJiYW5uZXIiLCJzdG9yYWdlIiwicmVmIiwiYXV0aCIsImN1cnJlbnRVc2VyIiwidWlkIiwicHV0IiwiY2hpbGQiLCJnZXREb3dubG9hZFVSTCIsInVybCIsImFkZCIsImF1dGhvcklkIiwiYXV0aG9yTmFtZSIsIm9uZVNob3QiLCJjcmVhdGVkQXQiLCJmaXJlYmFzZSIsImZpcmVzdG9yZSIsIkZpZWxkVmFsdWUiLCJzZXJ2ZXJUaW1lc3RhbXAiLCJsaWtlc0NvdW50IiwiY2hhcHRlcnNDb3VudCIsImZlYXR1cmVkIiwibm90ZSIsInJlcyIsIm1lc3NhZ2UiLCJzdWNjZXNzIiwic2V0VGltZW91dCIsIlJvdXRlciIsInB1c2giLCJzdG9yeUlkIiwiZXJyb3IiLCJlZGl0U3RvcnkiLCJFRElUX1NUT1JZIiwibG9hZGluZ1N0b3J5IiwidXBkYXRlIiwid2hlcmUiLCJkb2NzIiwibG9jYXRpb25RdWVyeSIsInN0b3J5VGl0bGUiLCJnZXRVc2VyU3RvcmllcyIsIml0ZW1zIiwiR0VUX1VTRVJfU1RPUklFUyIsImdldEZhdm9yaXRlU3RvcmllcyIsImZhdkFyciIsInVzZXJzIiwidXNlciIsImZhdlVzZXJzIiwiR0VUX0ZBVk9SSVRFX1NUT1JJRVMiLCJpc1N0b3J5RmF2b3JpdGUiLCJvblNuYXBzaG90Iiwic25hcHNob3QiLCJhbnN3ZXIiLCJJU19TVE9SWV9GQVZPUklURSIsImxvYWRpbmdGYXYiLCJhZGRTdG9yeVRvRmF2b3JpdGUiLCJ1c2VybmFtZSIsImVtYWlsVmVyaWZpZWQiLCJzZW5kZXIiLCJzZW5kZXJJZCIsInJlbW92ZVN0b3J5RnJvbUZhdm9yaXRlIiwiZ2V0U3RvcnlDaGFyYWN0ZXJzIiwiYWRkQ2hhcHRlciIsIkFERF9DSEFQVEVSIiwiY29tbWVudHNDb3VudCIsInZvdGVycyIsInZvdGVzQ291bnQiLCJjaGFwSWQiLCJlZGl0Q2hhcHRlciIsImNoYXBpZCIsIkVESVRfQ0hBUFRFUiIsImRlbGV0ZUNoYXB0ZXIiLCJERUxFVEVfQ0hBUFRFUiIsImxvYWRpbmdDaGFwdGVyIiwiY2hhcmFjdGVyc0Zyb21DaGFwdGVyIiwiY2hhcmFjdGVycyIsInN0b3J5IiwiY2hhcmFjdGVyc0Zyb21TdG9yeSIsIm5ld0FyciIsImluY2x1ZGVzIiwidGltZXMiLCJmaWx0ZXIiLCJnZXRDaGFwdGVyIiwiY2hhcCIsImxvY2F0aW9ucyIsImNoYXJhUXVlcnkiLCJsb2NRdWVyeSIsImNoYXJhY3RlcnNJbkNoYXBlciIsImxvY2F0aW9uc0luQ2hhcGVyIiwiY2hhciIsImxvYyIsImwiLCJHRVRfQ0hBUFRFUiIsImNoYXB0ZXIiLCJjaGFwdGVyRXhpc3RzIiwiZ2V0Q2hhcHRlcnMiLCJvcmRlckJ5IiwiYXJyIiwibnVtYmVyIiwiR0VUX0NIQVBURVJTIiwiYWRkTG9jYXRpb24iLCJBRERfTE9DQVRJT04iLCJsb2FkaW5nTG9jIiwibmFtZSIsImltYWdlIiwibG9jSWQiLCJlZGl0TG9jYXRpb24iLCJnZXRMb2NhdGlvbiIsIkdFVF9MT0NBVElPTiIsImxvY2F0aW9uRXhpc3RzIiwiZ2V0VXNlckxvY2F0aW9ucyIsIkdFVF9VU0VSX0xPQ0FUSU9OUyIsImdldFN0b3J5TG9jYXRpb25zIiwiR0VUX1NUT1JZX0xPQ0FUSU9OUyIsImdldENvbW1lbnRzIiwic25hcCIsImNvbW1lbnRzIiwiY29tbWVudCIsInF1ZXJpZXMiLCJjb21tIiwidXNlcklkIiwidXNlckltYWdlIiwiZmluZCIsImQiLCJHRVRfQ09NTUVOVFMiLCJsb2FkaW5nQ29tbWVudHMiLCJzdWJtaXRDb21tZW50IiwiaW5mbyIsImNvbnRlbnQiLCJjaGFwdGVySWQiLCJkZWxldGVDb21tZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtDQUdBOztBQUVPLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEVBQUQ7QUFBQSxTQUFRLFVBQUNDLFFBQUQsRUFBYztBQUM1Q0MsZ0RBQUUsQ0FBQ0MsVUFBSCxDQUFjLFNBQWQsRUFDR0MsR0FESCxDQUNPSixFQURQLEVBRUdLLEdBRkgsR0FHR0MsSUFISCxDQUdRLFVBQUNGLEdBQUQsRUFBUztBQUNiLFVBQUlBLEdBQUcsQ0FBQ0csTUFBUixFQUFnQjtBQUNkLFlBQU1DLElBQUksR0FBR0osR0FBRyxDQUFDSyxJQUFKLEdBQVdDLGNBQXhCO0FBQ0EsWUFBTUMsU0FBUyxHQUFHUCxHQUFHLENBQUNLLElBQUosR0FBV0csbUJBQTdCO0FBQ0EsWUFBSUMsT0FBTyxHQUFHLEVBQWQ7QUFDQSxZQUFJQyxZQUFZLEdBQUcsRUFBbkI7QUFDQSxZQUFNQyxTQUFTLEdBQUdQLElBQUksQ0FBQ1EsR0FBTCxDQUFTLFVBQUNDLENBQUQ7QUFBQSxpQkFDekJmLDRDQUFFLENBQUNDLFVBQUgsQ0FBYyxZQUFkLEVBQTRCQyxHQUE1QixDQUFnQ2EsQ0FBaEMsRUFBbUNaLEdBQW5DLEVB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ZDNILGtEQUFFLENBQUNDLFVBQUgsQ0FBYyxVQUFkLEVBQ0dDLEdBREgsQ0FDTzJHLE1BRFAsRUFFR2xDLE1BRkgsQ0FFVTtBQUFFNkIscUJBQWEsRUFBRW1CLElBQUksQ0FBQ3BILElBQUwsR0FBWWlHLGFBQVosR0FBNEI7QUFBN0MsT0FGVixFQUdHcEcsSUFISCxDQUdRLFlBQU07QUFDVkosb0RBQUUsQ0FBQ0MsVUFBSCxDQUFjLFVBQWQsRUFBMEJDLEdBQTFCLENBQThCSixFQUE5QjtBQUNELE9BTEg7QUFNRCxLQVZIO0FBV0QsR0FaNEI7QUFBQSxDQUF0QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zdG9yeS9baWRdL2NoYXB0ZXIvW2NoYXBpZF0uMmFkZGZlYzRlMzQ2NDU3YTBmYTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHR5cGVzIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBkYiwgYXV0aCwgc3RvcmFnZSB9IGZyb20gXCIuLi9mYkNvbmZpZ1wiO1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlL2FwcFwiO1xyXG5pbXBvcnQgeyBtZXNzYWdlIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbi8vIFNUT1JJRVNcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdG9yeSA9IChpZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGIuY29sbGVjdGlvbihcInN0b3JpZXNcIilcclxuICAgIC5kb2MoaWQpXHJcbiAgICAuZ2V0KClcclxuICAgIC50aGVuKChkb2MpID0+IHtcclxuICAgICAgaWYgKGRvYy5leGlzdHMpIHtcclxuICAgICAgICBjb25zdCBtYWluID0gZG9jLmRhdGEoKS5tYWluQ2hhcmFjdGVycztcclxuICAgICAgICBjb25zdCBzZWNvbmRhcnkgPSBkb2MuZGF0YSgpLnNlY29uZGFyeUNoYXJhY3RlcnM7XHJcbiAgICAgICAgbGV0IG1haW5BcnIgPSBbXTtcclxuICAgICAgICBsZXQgc2Vjb25kYXJ5QXJyID0gW107XHJcbiAgICAgICAgY29uc3QgbWFpblF1ZXJ5ID0gbWFpbi5tYXAoKGMpID0+XHJcbiAgICAgICAgICBkYi5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc1wiKS5kb2MoYykuZ2V0KClcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IHNlY29uZGFyeVF1ZXJ5ID0gc2Vjb25kYXJ5Lm1hcCgoYykgPT5cclxuICAgICAgICAgIGRiLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzXCIpLmRvYyhjLmlkKS5nZXQoKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgbWFpblJlcyA9IFByb21pc2UuYWxsKG1haW5RdWVyeSk7XHJcbiAgICAgICAgY29uc3Qgc2Vjb25kYXJ5UmVzID0gUHJvbWlzZS5hbGwoc2Vjb25kYXJ5UXVlcnkpO1xyXG4gICAgICAgIFByb21pc2UuYWxsKFttYWluUmVzLCBzZWNvbmRhcnlSZXNdKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgIHJlc3VsdFswXS5mb3JFYWNoKChkb2N1KSA9PiB7XHJcbiAgICAgICAgICAgIG1haW5BcnIgPSBbLi4ubWFpbkFyciwgeyAuLi5kb2N1LmRhdGEoKSwgaWQ6IGRvY3UuaWQgfV07XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHJlc3VsdFsxXS5mb3JFYWNoKChkb2N1KSA9PiB7XHJcbiAgICAgICAgICAgIHNlY29uZGFyeUFyciA9IFsuLi5zZWNvbmRhcnlBcnIsIHsgLi4uZG9jdS5kYXRhKCksIGlkOiBkb2N1LmlkIH1dO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IHR5cGVzLkdFVF9TVE9SWSxcclxuICAgICAgICAgICAgc3RvcnlFeGlzdHM6IHRydWUsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAuLi5kb2MuZGF0YSgpLFxyXG4gICAgICAgICAgICAgIGlkOiBkb2MuaWQsXHJcbiAgICAgICAgICAgICAgc2Vjb25kYXJ5Q2hhcmFjdGVyczogc2Vjb25kYXJ5QXJyLFxyXG4gICAgICAgICAgICAgIG1haW5DaGFyYWN0ZXJzOiBtYWluQXJyLFxyXG4gICAgICAgICAgICAgIG1haW5BcnI6IGRvYy5kYXRhKCkubWFpbkNoYXJhY3RlcnMsXHJcbiAgICAgICAgICAgICAgc2Vjb25kYXJ5QXJyOiBkb2MuZGF0YSgpLnNlY29uZGFyeUNoYXJhY3RlcnMsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiB0eXBlcy5ESVNQQVRDSF9FUlJPUixcclxuICAgICAgICAgIHN0b3J5RXhpc3RzOiBmYWxzZSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRTdG9yeSA9IChkYXRhKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkaXNwYXRjaCh7IHR5cGU6IHR5cGVzLkFERF9TVE9SWSwgcGF5bG9hZDogeyBsb2FkaW5nOiB0cnVlIH0gfSk7XHJcbiAgY29uc3QgaW1hZ2VOYW1lID0gZGF0YS50aXRsZS50b0xvd2VyQ2FzZSgpLnNwbGl0KFwiIFwiKS5qb2luKFwiX1wiKTtcclxuICBpZiAodHlwZW9mIGRhdGEuYmFubmVyID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICBzdG9yYWdlXHJcbiAgICAgIC5yZWYoYCR7YXV0aC5jdXJyZW50VXNlci51aWR9LyR7aW1hZ2VOYW1lfWApXHJcbiAgICAgIC5wdXQoZGF0YS5iYW5uZXIpXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICByZXR1cm4gc3RvcmFnZVxyXG4gICAgICAgICAgLnJlZihhdXRoLmN1cnJlbnRVc2VyLnVpZClcclxuICAgICAgICAgIC5jaGlsZChpbWFnZU5hbWUpXHJcbiAgICAgICAgICAuZ2V0RG93bmxvYWRVUkwoKTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKHVybCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKS5hZGQoe1xyXG4gICAgICAgICAgLi4uZGF0YSxcclxuICAgICAgICAgIGF1dGhvcklkOiBhdXRoLmN1cnJlbnRVc2VyLnVpZCxcclxuICAgICAgICAgIGF1dGhvck5hbWU6IGRhdGEuYXV0aG9yTmFtZSxcclxuICAgICAgICAgIG9uZVNob3Q6IGZhbHNlLFxyXG4gICAgICAgICAgYmFubmVyOiB1cmwsXHJcbiAgICAgICAgICBjcmVhdGVkQXQ6IGZpcmViYXNlLmZpcmVzdG9yZS5GaWVsZFZhbHVlLnNlcnZlclRpbWVzdGFtcCgpLFxyXG4gICAgICAgICAgbGlrZXNDb3VudDogMCxcclxuICAgICAgICAgIGNoYXB0ZXJzQ291bnQ6IDAsXHJcbiAgICAgICAgICBzZWNvbmRhcnlDaGFyYWN0ZXJzOiBbXSxcclxuICAgICAgICAgIGZlYXR1cmVkOiBmYWxzZSxcclxuICAgICAgICAgIG5vdGU6IDAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoXCJTdG9yeSBhZGRlZCBzdWNjZXNzZnVsbHlcIik7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBSb3V0ZXIucHVzaChgL3N0b3J5LyR7cmVzLmlkfWApO1xyXG4gICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiB0eXBlcy5BRERfU1RPUlksXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICBtZXNzYWdlOiBcIlN0b3J5IGFkZGVkIHN1Y2Nlc3NmdWxseVwiLFxyXG4gICAgICAgICAgICAgIHN0b3J5SWQ6IHJlcy5pZCxcclxuICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoZXJyLm1lc3NhZ2UpO1xyXG4gICAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgZGIuY29sbGVjdGlvbihcInN0b3JpZXNcIilcclxuICAgICAgLmFkZCh7XHJcbiAgICAgICAgLi4uZGF0YSxcclxuICAgICAgICBhdXRob3JJZDogYXV0aC5jdXJyZW50VXNlci51aWQsXHJcbiAgICAgICAgYXV0aG9yTmFtZTogZGF0YS5hdXRob3JOYW1lLFxyXG4gICAgICAgIG9uZVNob3Q6IGZhbHNlLFxyXG4gICAgICAgIGNyZWF0ZWRBdDogZmlyZWJhc2UuZmlyZXN0b3JlLkZpZWxkVmFsdWUuc2VydmVyVGltZXN0YW1wKCksXHJcbiAgICAgICAgbGlrZXNDb3VudDogMCxcclxuICAgICAgICBjaGFwdGVyc0NvdW50OiAwLFxyXG4gICAgICAgIGZlYXR1cmVkOiBmYWxzZSxcclxuICAgICAgICBzZWNvbmRhcnlDaGFyYWN0ZXJzOiBbXSxcclxuICAgICAgICBub3RlOiAwLFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgbWVzc2FnZS5zdWNjZXNzKFwiU3RvcnkgYWRkZWQgc3VjY2Vzc2Z1bGx5XCIpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgUm91dGVyLnB1c2goYC9zdG9yeS8ke3Jlcy5pZH1gKTtcclxuICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogdHlwZXMuQUREX1NUT1JZLFxyXG4gICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgbWVzc2FnZTogXCJTdG9yeSBhZGRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgICAgICBzdG9yeUlkOiByZXMuaWQsXHJcbiAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBtZXNzYWdlLmVycm9yKGVyci5tZXNzYWdlKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGVkaXRTdG9yeSA9IChkYXRhLCBzdG9yeUlkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkaXNwYXRjaCh7IHR5cGU6IHR5cGVzLkVESVRfU1RPUlksIHBheWxvYWQ6IHsgbG9hZGluZ1N0b3J5OiB0cnVlIH0gfSk7XHJcbiAgY29uc3QgaW1hZ2VOYW1lID0gZGF0YS50aXRsZS50b0xvd2VyQ2FzZSgpLnNwbGl0KFwiIFwiKS5qb2luKFwiX1wiKTtcclxuXHJcbiAgaWYgKHR5cGVvZiBkYXRhLmJhbm5lciA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgc3RvcmFnZVxyXG4gICAgICAucmVmKGAke2F1dGguY3VycmVudFVzZXIudWlkfS8ke2ltYWdlTmFtZX1gKVxyXG4gICAgICAucHV0KGRhdGEuYmFubmVyKVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHN0b3JhZ2VcclxuICAgICAgICAgIC5yZWYoYXV0aC5jdXJyZW50VXNlci51aWQpXHJcbiAgICAgICAgICAuY2hpbGQoaW1hZ2VOYW1lKVxyXG4gICAgICAgICAgLmdldERvd25sb2FkVVJMKCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKCh1cmwpID0+IHtcclxuICAgICAgICByZXR1cm4gZGJcclxuICAgICAgICAgIC5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKVxyXG4gICAgICAgICAgLmRvYyhzdG9yeUlkKVxyXG4gICAgICAgICAgLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgIC4uLmRhdGEsXHJcbiAgICAgICAgICAgIGJhbm5lcjogdXJsLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICBkYi5jb2xsZWN0aW9uKFwibG9jYXRpb25zXCIpXHJcbiAgICAgICAgICAud2hlcmUoXCJzdG9yeUlkXCIsIFwiPT1cIiwgc3RvcnlJZClcclxuICAgICAgICAgIC5nZXQoKVxyXG4gICAgICAgICAgLnRoZW4oKGRvY3MpID0+IHtcclxuICAgICAgICAgICAgbGV0IGxvY2F0aW9uUXVlcnkgPSBbXTtcclxuICAgICAgICAgICAgZG9jcy5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgICAgICAgICAgICBsb2NhdGlvblF1ZXJ5ID0gW1xyXG4gICAgICAgICAgICAgICAgLi4ubG9jYXRpb25RdWVyeSxcclxuICAgICAgICAgICAgICAgIGRiXHJcbiAgICAgICAgICAgICAgICAgIC5jb2xsZWN0aW9uKFwibG9jYXRpb25zXCIpXHJcbiAgICAgICAgICAgICAgICAgIC5kb2MoZG9jLmlkKVxyXG4gICAgICAgICAgICAgICAgICAudXBkYXRlKHsgc3RvcnlUaXRsZTogZGF0YS50aXRsZSB9KSxcclxuICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgUHJvbWlzZS5hbGwobG9jYXRpb25RdWVyeSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgbWVzc2FnZS5zdWNjZXNzKFwiU3RvcnkgYWRkZWQgc3VjY2Vzc2Z1bGx5XCIpO1xyXG4gICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IHR5cGVzLkVESVRfU1RPUlksXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiU3RvcnkgZWRpdGVkIHN1Y2Nlc3NmdWxseVwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBtZXNzYWdlLmVycm9yKGVyci5tZXNzYWdlKTtcclxuICAgICAgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpXHJcbiAgICAgIC5kb2Moc3RvcnlJZClcclxuICAgICAgLnVwZGF0ZSh7XHJcbiAgICAgICAgLi4uZGF0YSxcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIGRiLmNvbGxlY3Rpb24oXCJsb2NhdGlvbnNcIilcclxuICAgICAgICAgIC53aGVyZShcInN0b3J5SWRcIiwgXCI9PVwiLCBzdG9yeUlkKVxyXG4gICAgICAgICAgLmdldCgpXHJcbiAgICAgICAgICAudGhlbigoZG9jcykgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbG9jYXRpb25RdWVyeSA9IFtdO1xyXG4gICAgICAgICAgICBkb2NzLmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgICAgICAgICAgIGxvY2F0aW9uUXVlcnkgPSBbXHJcbiAgICAgICAgICAgICAgICAuLi5sb2NhdGlvblF1ZXJ5LFxyXG4gICAgICAgICAgICAgICAgZGJcclxuICAgICAgICAgICAgICAgICAgLmNvbGxlY3Rpb24oXCJsb2NhdGlvbnNcIilcclxuICAgICAgICAgICAgICAgICAgLmRvYyhkb2MuaWQpXHJcbiAgICAgICAgICAgICAgICAgIC51cGRhdGUoeyBzdG9yeVRpdGxlOiBkYXRhLnRpdGxlIH0pLFxyXG4gICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBQcm9taXNlLmFsbChsb2NhdGlvblF1ZXJ5KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoXCJTdG9yeSBhZGRlZCBzdWNjZXNzZnVsbHlcIik7XHJcbiAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogdHlwZXMuRURJVF9TVE9SWSxcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJTdG9yeSBlZGl0ZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoZXJyLm1lc3NhZ2UpO1xyXG4gICAgICB9KTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VXNlclN0b3JpZXMgPSAoKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKVxyXG4gICAgLndoZXJlKFwiYXV0aG9ySWRcIiwgXCI9PVwiLCBhdXRoLmN1cnJlbnRVc2VyLnVpZClcclxuICAgIC5nZXQoKVxyXG4gICAgLnRoZW4oKGRvY3MpID0+IHtcclxuICAgICAgbGV0IGl0ZW1zID0gW107XHJcbiAgICAgIGRvY3MuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICAgICAgaXRlbXMgPSBbLi4uaXRlbXMsIHsgaWQ6IGRvYy5pZCwgLi4uZG9jLmRhdGEoKSB9XTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBpdGVtcztcclxuICAgIH0pXHJcbiAgICAudGhlbigoaXRlbXMpID0+IHtcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiB0eXBlcy5HRVRfVVNFUl9TVE9SSUVTLCBwYXlsb2FkOiBpdGVtcyB9KTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEZhdm9yaXRlU3RvcmllcyA9ICgpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzTGlrZXNcIilcclxuICAgIC53aGVyZShcInNlbmRlcklkXCIsIFwiPT1cIiwgYXV0aC5jdXJyZW50VXNlci51aWQpXHJcbiAgICAuZ2V0KClcclxuICAgIC50aGVuKChkb2NzKSA9PiB7XHJcbiAgICAgIGxldCBmYXZBcnIgPSBbXTtcclxuICAgICAgZG9jcy5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgICAgICBmYXZBcnIgPSBbLi4uZmF2QXJyLCBkb2MuZGF0YSgpLnN0b3J5SWRdO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGZhdkFycjtcclxuICAgIH0pXHJcbiAgICAudGhlbigodXNlcnMpID0+IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gdXNlcnMubWFwKCh1c2VyKSA9PlxyXG4gICAgICAgIGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpLmRvYyh1c2VyKS5nZXQoKVxyXG4gICAgICApO1xyXG4gICAgICBQcm9taXNlLmFsbChyZXN1bHQpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGxldCBmYXZVc2VycyA9IFtdO1xyXG4gICAgICAgIHJlcy5mb3JFYWNoKFxyXG4gICAgICAgICAgKGRvYykgPT4gKGZhdlVzZXJzID0gWy4uLmZhdlVzZXJzLCB7IGlkOiBkb2MuaWQsIC4uLmRvYy5kYXRhKCkgfV0pXHJcbiAgICAgICAgKTtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiB0eXBlcy5HRVRfRkFWT1JJVEVfU1RPUklFUyxcclxuICAgICAgICAgIHBheWxvYWQ6IGZhdlVzZXJzLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGlzU3RvcnlGYXZvcml0ZSA9IChzdG9yeUlkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBpZiAoYXV0aC5jdXJyZW50VXNlcikge1xyXG4gICAgZGIuY29sbGVjdGlvbihcInN0b3JpZXNMaWtlc1wiKVxyXG4gICAgICAud2hlcmUoXCJzZW5kZXJJZFwiLCBcIj09XCIsIGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gICAgICAud2hlcmUoXCJzdG9yeUlkXCIsIFwiPT1cIiwgc3RvcnlJZClcclxuICAgICAgLm9uU25hcHNob3QoKHNuYXBzaG90KSA9PiB7XHJcbiAgICAgICAgY29uc3QgYW5zd2VyID0gc25hcHNob3QuZG9jc1swXSA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICByZXR1cm4gZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogdHlwZXMuSVNfU1RPUllfRkFWT1JJVEUsXHJcbiAgICAgICAgICBwYXlsb2FkOiBhbnN3ZXIsXHJcbiAgICAgICAgICBsb2FkaW5nRmF2OiBmYWxzZSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFN0b3J5VG9GYXZvcml0ZSA9IChpZCwgdXNlcm5hbWUsIHN0b3J5VGl0bGUpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIC8vIGlmIChpc0Zhdm9yaXRlKSByZXR1cm4gbWVzc2FnZS53YXJuaW5nKFwiWW91J3ZlIGFscmVhZHkgbGlrZWQgdGhpcyBzdG9yeVwiKTtcclxuICBpZiAoIWF1dGguY3VycmVudFVzZXIpXHJcbiAgICByZXR1cm4gbWVzc2FnZS5lcnJvcihcIllvdSBuZWVkIHRvIGJlIGxvZ2dlZCBpbiB0byBsaWtlIGEgc3RvcnlcIik7XHJcbiAgaWYgKCFhdXRoLmN1cnJlbnRVc2VyLmVtYWlsVmVyaWZpZWQpXHJcbiAgICByZXR1cm4gbWVzc2FnZS5lcnJvcihcIllvdSBuZWVkIHRvIHZlcmlmeSB5b3VyIGVtYWlsIGZpcnN0XCIpO1xyXG5cclxuICBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc0xpa2VzXCIpXHJcbiAgICAuYWRkKHtcclxuICAgICAgc2VuZGVyOiB1c2VybmFtZSxcclxuICAgICAgc2VuZGVySWQ6IGF1dGguY3VycmVudFVzZXIudWlkLFxyXG4gICAgICBzdG9yeUlkOiBpZCxcclxuICAgICAgY3JlYXRlZEF0OiBmaXJlYmFzZS5maXJlc3RvcmUuRmllbGRWYWx1ZS5zZXJ2ZXJUaW1lc3RhbXAoKSxcclxuICAgIH0pXHJcbiAgICAudGhlbigoKSA9PiBtZXNzYWdlLnN1Y2Nlc3MoYCR7c3RvcnlUaXRsZX0gYWRkZWQgdG8geW91ciBmYXZvcml0ZXNgKSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiBtZXNzYWdlLmVycm9yKFwiVGhlcmUgaGFzIGJlZW4gYSBwcm9ibGVtXCIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCByZW1vdmVTdG9yeUZyb21GYXZvcml0ZSA9IChpZCwgc3RvcnlUaXRsZSkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGIuY29sbGVjdGlvbihcInN0b3JpZXNMaWtlc1wiKVxyXG4gICAgLndoZXJlKFwic3RvcnlJZFwiLCBcIj09XCIsIGlkKVxyXG4gICAgLndoZXJlKFwic2VuZGVySWRcIiwgXCI9PVwiLCBhdXRoLmN1cnJlbnRVc2VyLnVpZClcclxuICAgIC5nZXQoKVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzTGlrZXNcIikuZG9jKGRhdGEuZG9jc1swXS5pZCkuZGVsZXRlKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKCkgPT4gbWVzc2FnZS5zdWNjZXNzKGAke3N0b3J5VGl0bGV9IHJlbW92ZWQgZnJvbSB5b3VyIGZhdm9yaXRlc2ApKVxyXG4gICAgLmNhdGNoKChlcnIpID0+IG1lc3NhZ2UuZXJyb3IoXCJUaGVyZSBoYXMgYmVlbiBhIHByb2JsZW1cIikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0b3J5Q2hhcmFjdGVycyA9ICgpID0+IChkaXNwYXRjaCkgPT4ge307XHJcblxyXG4vLyBDSEFQVEVSc1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZENoYXB0ZXIgPSAoZGF0YSwgc2Vjb25kYXJ5Q2hhcmFjdGVycykgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGlzcGF0Y2goeyB0eXBlOiB0eXBlcy5BRERfQ0hBUFRFUiwgcGF5bG9hZDogeyBsb2FkaW5nOiB0cnVlIH0gfSk7XHJcbiAgZGIuY29sbGVjdGlvbihcImNoYXB0ZXJzXCIpXHJcbiAgICAuYWRkKHtcclxuICAgICAgLi4uZGF0YSxcclxuICAgICAgYXV0aG9ySWQ6IGF1dGguY3VycmVudFVzZXIudWlkLFxyXG4gICAgICBjb21tZW50c0NvdW50OiAwLFxyXG4gICAgICBub3RlOiAwLFxyXG4gICAgICB2b3RlcnM6IFtdLFxyXG4gICAgICB2b3Rlc0NvdW50OiAwLFxyXG4gICAgICBjcmVhdGVkQXQ6IGZpcmViYXNlLmZpcmVzdG9yZS5GaWVsZFZhbHVlLnNlcnZlclRpbWVzdGFtcCgpLFxyXG4gICAgfSlcclxuICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgZGIuY29sbGVjdGlvbihcInN0b3JpZXNcIilcclxuICAgICAgICAuZG9jKGRhdGEuc3RvcnlJZClcclxuICAgICAgICAuZ2V0KClcclxuICAgICAgICAudGhlbigoZG9jKSA9PiB7XHJcbiAgICAgICAgICBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKVxyXG4gICAgICAgICAgICAuZG9jKGRhdGEuc3RvcnlJZClcclxuICAgICAgICAgICAgLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgc2Vjb25kYXJ5Q2hhcmFjdGVycyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IHR5cGVzLkFERF9DSEFQVEVSLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkNoYXB0ZXIgYWRkZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICAgICAgICAgIGNoYXBJZDogcmVzLmlkLFxyXG4gICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgLy8gLnRoZW4oKHJlcykgPT4ge1xyXG4gIC8vICAgZGlzcGF0Y2goe1xyXG4gIC8vICAgICB0eXBlOiB0eXBlcy5BRERfQ0hBUFRFUixcclxuICAvLyAgICAgcGF5bG9hZDoge1xyXG4gIC8vICAgICAgIG1lc3NhZ2U6IFwiQ2hhcHRlciBhZGRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAvLyAgICAgICBjaGFwSWQ6IHJlcy5pZCxcclxuICAvLyAgICAgfSxcclxuICAvLyAgIH0pO1xyXG4gIC8vIH0pXHJcbiAgLy8gLmNhdGNoKChlcnIpID0+XHJcbiAgLy8gICBkaXNwYXRjaCh7XHJcbiAgLy8gICAgIHR5cGU6IHR5cGVzLkFERF9DSEFQVEVSLFxyXG4gIC8vICAgICBwYXlsb2FkOiB7IG1lc3NhZ2U6IGVyci5tZXNzYWdlLCBjaGFwSWQ6IFwiXCIgfSxcclxuICAvLyAgIH0pXHJcbiAgLy8gKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBlZGl0Q2hhcHRlciA9IChkYXRhLCBzdG9yeUlkLCBjaGFwaWQsIHNlY29uZGFyeUNoYXJhY3RlcnMpID0+IChcclxuICBkaXNwYXRjaFxyXG4pID0+IHtcclxuICBkaXNwYXRjaCh7IHR5cGU6IHR5cGVzLkVESVRfQ0hBUFRFUiwgcGF5bG9hZDogeyBsb2FkaW5nOiB0cnVlIH0gfSk7XHJcbiAgZGIuY29sbGVjdGlvbihcImNoYXB0ZXJzXCIpXHJcbiAgICAuZG9jKGNoYXBpZClcclxuICAgIC51cGRhdGUoeyAuLi5kYXRhIH0pXHJcbiAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgIGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpXHJcbiAgICAgICAgLmRvYyhzdG9yeUlkKVxyXG4gICAgICAgIC5nZXQoKVxyXG4gICAgICAgIC50aGVuKChkb2MpID0+IHtcclxuICAgICAgICAgIGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpXHJcbiAgICAgICAgICAgIC5kb2Moc3RvcnlJZClcclxuICAgICAgICAgICAgLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgc2Vjb25kYXJ5Q2hhcmFjdGVycyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IHR5cGVzLkVESVRfQ0hBUFRFUixcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJDaGFwdGVyIGVkaXRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlbGV0ZUNoYXB0ZXIgPSAoaWQsIHN0b3J5SWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRpc3BhdGNoKHsgdHlwZTogdHlwZXMuREVMRVRFX0NIQVBURVIsIHBheWxvYWQ6IHsgbG9hZGluZ0NoYXB0ZXI6IHRydWUgfSB9KTtcclxuICBkYi5jb2xsZWN0aW9uKFwiY2hhcHRlcnNcIilcclxuICAgIC5kb2MoaWQpXHJcbiAgICAuZ2V0KClcclxuICAgIC50aGVuKChkb2MpID0+IHtcclxuICAgICAgY29uc3QgY2hhcmFjdGVyc0Zyb21DaGFwdGVyID0gZG9jLmRhdGEoKS5jaGFyYWN0ZXJzO1xyXG4gICAgICBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKVxyXG4gICAgICAgIC5kb2Moc3RvcnlJZClcclxuICAgICAgICAuZ2V0KClcclxuICAgICAgICAudGhlbigoc3RvcnkpID0+IHtcclxuICAgICAgICAgIGNvbnN0IGNoYXJhY3RlcnNGcm9tU3RvcnkgPSBzdG9yeS5kYXRhKCkuc2Vjb25kYXJ5Q2hhcmFjdGVycztcclxuICAgICAgICAgIGxldCBuZXdBcnIgPSBjaGFyYWN0ZXJzRnJvbVN0b3J5Lm1hcCgoYykgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY2hhcmFjdGVyc0Zyb21DaGFwdGVyLmluY2x1ZGVzKGMuaWQpKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHsgLi4uYywgdGltZXM6IGMudGltZXMgLSAxIH07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgbmV3QXJyID0gbmV3QXJyLmZpbHRlcigoYykgPT4gYy50aW1lcyA+IDApO1xyXG4gICAgICAgICAgZGIuY29sbGVjdGlvbihcInN0b3JpZXNcIilcclxuICAgICAgICAgICAgLmRvYyhzdG9yeUlkKVxyXG4gICAgICAgICAgICAudXBkYXRlKHsgc2Vjb25kYXJ5Q2hhcmFjdGVyczogbmV3QXJyIH0pXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICBkYi5jb2xsZWN0aW9uKFwiY2hhcHRlcnNcIilcclxuICAgICAgICAgICAgICAgIC5kb2MoaWQpXHJcbiAgICAgICAgICAgICAgICAuZGVsZXRlKClcclxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IHR5cGVzLkRFTEVURV9DSEFQVEVSLFxyXG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiQ2hhcHRlciBkZWxldGVkIHN1Y2Nlc3NmdWxseVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgbG9hZGluZ0NoYXB0ZXI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q2hhcHRlciA9IChzdG9yeUlkLCBpZCwgdHlwZSkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGIuY29sbGVjdGlvbihcInN0b3JpZXNcIilcclxuICAgIC5kb2Moc3RvcnlJZClcclxuICAgIC5nZXQoKVxyXG4gICAgLnRoZW4oKGRvYykgPT4ge1xyXG4gICAgICBpZiAoZG9jLmV4aXN0cykge1xyXG4gICAgICAgIGRiLmNvbGxlY3Rpb24oXCJjaGFwdGVyc1wiKVxyXG4gICAgICAgICAgLmRvYyhpZClcclxuICAgICAgICAgIC5nZXQoKVxyXG4gICAgICAgICAgLnRoZW4oKGNoYXApID0+IHtcclxuICAgICAgICAgICAgaWYgKGNoYXAuZXhpc3RzKSB7XHJcbiAgICAgICAgICAgICAgaWYgKHR5cGUgPT09IFwic2hvd1wiKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2hhcmFjdGVycyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgbGV0IGxvY2F0aW9ucyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNoYXJhUXVlcnkgPSBbXTtcclxuICAgICAgICAgICAgICAgIGxldCBsb2NRdWVyeSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2hhcmFjdGVyc0luQ2hhcGVyID0gY2hhcC5kYXRhKCkuY2hhcmFjdGVycztcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2F0aW9uc0luQ2hhcGVyID0gY2hhcC5kYXRhKCkubG9jYXRpb25zO1xyXG4gICAgICAgICAgICAgICAgY2hhcmFjdGVyc0luQ2hhcGVyLmZvckVhY2goKGNoYXIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgY2hhcmFRdWVyeS5wdXNoKGRiLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzXCIpLmRvYyhjaGFyKS5nZXQoKSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uc0luQ2hhcGVyLmZvckVhY2goKGxvYykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBsb2NRdWVyeS5wdXNoKGRiLmNvbGxlY3Rpb24oXCJsb2NhdGlvbnNcIikuZG9jKGxvYykuZ2V0KCkpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBjaGFyYVF1ZXJ5ID0gUHJvbWlzZS5hbGwoY2hhcmFRdWVyeSk7XHJcbiAgICAgICAgICAgICAgICBsb2NRdWVyeSA9IFByb21pc2UuYWxsKGxvY1F1ZXJ5KTtcclxuICAgICAgICAgICAgICAgIFByb21pc2UuYWxsKFtjaGFyYVF1ZXJ5LCBsb2NRdWVyeV0pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICByZXNbMF0uZm9yRWFjaCgoYykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoYXJhY3RlcnMucHVzaCh7IC4uLmMuZGF0YSgpLCBpZDogYy5pZCB9KTtcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgIHJlc1sxXS5mb3JFYWNoKChsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25zLnB1c2goeyAuLi5sLmRhdGEoKSwgaWQ6IGwuaWQgfSk7XHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogdHlwZXMuR0VUX0NIQVBURVIsXHJcbiAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2hhcHRlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5jaGFwLmRhdGEoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGNoYXAuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9ucyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhcmFjdGVycyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHVibGljOiBkb2MuZGF0YSgpLnB1YmxpYyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcnlUaXRsZTogZG9jLmRhdGEoKS50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBjaGFwdGVyRXhpc3RzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgICAgdHlwZTogdHlwZXMuR0VUX0NIQVBURVIsXHJcbiAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBjaGFwdGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAuLi5jaGFwLmRhdGEoKSxcclxuICAgICAgICAgICAgICAgICAgICAgIGlkOiBjaGFwLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgcHVibGljOiBkb2MuZGF0YSgpLnB1YmxpYyxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGNoYXB0ZXJFeGlzdHM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogdHlwZXMuR0VUX0NIQVBURVIsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiB7IGNoYXB0ZXJFeGlzdHM6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IHR5cGVzLkdFVF9DSEFQVEVSLFxyXG4gICAgICAgICAgcGF5bG9hZDogeyBjaGFwdGVyRXhpc3RzOiBmYWxzZSB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDaGFwdGVycyA9IChpZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGIuY29sbGVjdGlvbihcImNoYXB0ZXJzXCIpXHJcbiAgICAud2hlcmUoXCJzdG9yeUlkXCIsIFwiPT1cIiwgaWQpXHJcbiAgICAub3JkZXJCeShcIm51bWJlclwiLCBcImFzY1wiKVxyXG4gICAgLm9uU25hcHNob3QoKGRvY3MpID0+IHtcclxuICAgICAgbGV0IGFyciA9IFtdO1xyXG4gICAgICBkb2NzLmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgICAgIGFyci5wdXNoKHtcclxuICAgICAgICAgIGF1dGhvcklkOiBkb2MuZGF0YSgpLmF1dGhvcklkLFxyXG4gICAgICAgICAgaWQ6IGRvYy5pZCxcclxuICAgICAgICAgIGNyZWF0ZWRBdDogZG9jLmRhdGEoKS5jcmVhdGVkQXQsXHJcbiAgICAgICAgICBudW1iZXI6IGRvYy5kYXRhKCkubnVtYmVyLFxyXG4gICAgICAgICAgdGl0bGU6IGRvYy5kYXRhKCkudGl0bGUsXHJcbiAgICAgICAgICBjb21tZW50c0NvdW50OiBkb2MuZGF0YSgpLmNvbW1lbnRzQ291bnQsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogdHlwZXMuR0VUX0NIQVBURVJTLFxyXG4gICAgICAgIHBheWxvYWQ6IGFycixcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbi8vIExPQ0FUSU9OU1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZExvY2F0aW9uID0gKGRhdGEpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKFwiY291Y291XCIpO1xyXG4gIGRpc3BhdGNoKHsgdHlwZTogdHlwZXMuQUREX0xPQ0FUSU9OLCBwYXlsb2FkOiB7IGxvYWRpbmdMb2M6IHRydWUgfSB9KTtcclxuXHJcbiAgY29uc3QgaW1hZ2VOYW1lID0gZGF0YS5uYW1lLnRvTG93ZXJDYXNlKCkuc3BsaXQoXCIgXCIpLmpvaW4oXCJfXCIpO1xyXG5cclxuICBpZiAodHlwZW9mIGRhdGEuaW1hZ2UgPT09IFwib2JqZWN0XCIpIHtcclxuICAgIHN0b3JhZ2VcclxuICAgICAgLnJlZihgJHthdXRoLmN1cnJlbnRVc2VyLnVpZH0vJHtpbWFnZU5hbWV9YClcclxuICAgICAgLnB1dChkYXRhLmltYWdlKVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHN0b3JhZ2VcclxuICAgICAgICAgIC5yZWYoYXV0aC5jdXJyZW50VXNlci51aWQpXHJcbiAgICAgICAgICAuY2hpbGQoaW1hZ2VOYW1lKVxyXG4gICAgICAgICAgLmdldERvd25sb2FkVVJMKCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKCh1cmwpID0+IHtcclxuICAgICAgICByZXR1cm4gZGIuY29sbGVjdGlvbihcImxvY2F0aW9uc1wiKS5hZGQoe1xyXG4gICAgICAgICAgLi4uZGF0YSxcclxuICAgICAgICAgIGltYWdlOiB1cmwsXHJcbiAgICAgICAgICBjcmVhdGVkQXQ6IGZpcmViYXNlLmZpcmVzdG9yZS5GaWVsZFZhbHVlLnNlcnZlclRpbWVzdGFtcCgpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigocmVzKSA9PlxyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IHR5cGVzLkFERF9MT0NBVElPTixcclxuICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJMb2NhdGlvbiBhZGRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgICAgbG9jSWQ6IHJlcy5pZCxcclxuICAgICAgICAgICAgbG9hZGluZ0xvYzogZmFsc2UsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pXHJcbiAgICAgIClcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBtZXNzYWdlLmVycm9yKGVyci5tZXNzYWdlKTtcclxuICAgICAgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGRiLmNvbGxlY3Rpb24oXCJsb2NhdGlvbnNcIilcclxuICAgICAgLmFkZCh7XHJcbiAgICAgICAgLi4uZGF0YSxcclxuICAgICAgICBjcmVhdGVkQXQ6IGZpcmViYXNlLmZpcmVzdG9yZS5GaWVsZFZhbHVlLnNlcnZlclRpbWVzdGFtcCgpLFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigocmVzKSA9PlxyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IHR5cGVzLkFERF9MT0NBVElPTixcclxuICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJMb2NhdGlvbiBhZGRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgICAgbG9jSWQ6IHJlcy5pZCxcclxuICAgICAgICAgICAgbG9hZGluZ0xvYzogZmFsc2UsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pXHJcbiAgICAgIClcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBtZXNzYWdlLmVycm9yKGVyci5tZXNzYWdlKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGVkaXRMb2NhdGlvbiA9IChkYXRhKSA9PiAoZGlzcGF0Y2gpID0+IHt9O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldExvY2F0aW9uID0gKGlkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkYi5jb2xsZWN0aW9uKFwibG9jYXRpb25zXCIpXHJcbiAgICAuZG9jKGlkKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigoZG9jKSA9PiB7XHJcbiAgICAgIGlmIChkb2MuZXhpc3RzKSB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogdHlwZXMuR0VUX0xPQ0FUSU9OLFxyXG4gICAgICAgICAgcGF5bG9hZDogeyAuLi5kb2MuZGF0YSgpLCBpZDogZG9jLmlkIH0sXHJcbiAgICAgICAgICBsb2NhdGlvbkV4aXN0czogdHJ1ZSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiB0eXBlcy5HRVRfTE9DQVRJT04sXHJcbiAgICAgICAgICBsb2NhdGlvbkV4aXN0czogZmFsc2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFVzZXJMb2NhdGlvbnMgPSAoKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkYi5jb2xsZWN0aW9uKFwibG9jYXRpb25zXCIpXHJcbiAgICAud2hlcmUoXCJhdXRob3JJZFwiLCBcIj09XCIsIGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigoZG9jcykgPT4ge1xyXG4gICAgICBsZXQgbG9jYXRpb25zID0gW107XHJcbiAgICAgIGRvY3MuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICAgICAgbG9jYXRpb25zID0gWy4uLmxvY2F0aW9ucywgeyBpZDogZG9jLmlkLCAuLi5kb2MuZGF0YSgpIH1dO1xyXG4gICAgICB9KTtcclxuICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IHR5cGVzLkdFVF9VU0VSX0xPQ0FUSU9OUyxcclxuICAgICAgICBwYXlsb2FkOiBsb2NhdGlvbnMsXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RvcnlMb2NhdGlvbnMgPSAoc3RvcnlJZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGIuY29sbGVjdGlvbihcImxvY2F0aW9uc1wiKVxyXG4gICAgLndoZXJlKFwic3RvcnlJZFwiLCBcIj09XCIsIHN0b3J5SWQpXHJcbiAgICAuZ2V0KClcclxuICAgIC50aGVuKChkb2NzKSA9PiB7XHJcbiAgICAgIGNvbnN0IGxvY2F0aW9ucyA9IGRvY3MuZG9jcy5tYXAoKGRvYykgPT4gKHsgLi4uZG9jLmRhdGEoKSwgaWQ6IGRvYy5pZCB9KSk7XHJcbiAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiB0eXBlcy5HRVRfU1RPUllfTE9DQVRJT05TLFxyXG4gICAgICAgIHBheWxvYWQ6IGxvY2F0aW9ucyxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbi8vIENPTU1FTlRTXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q29tbWVudHMgPSAoaWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJjb21tZW50c1wiKVxyXG4gICAgLndoZXJlKFwiY2hhcHRlcklkXCIsIFwiPT1cIiwgaWQpXHJcbiAgICAub3JkZXJCeShcImNyZWF0ZWRBdFwiLCBcImRlc2NcIilcclxuICAgIC5vblNuYXBzaG90KChzbmFwKSA9PiB7XHJcbiAgICAgIGxldCBjb21tZW50cyA9IHNuYXAuZG9jcy5tYXAoKGNvbW1lbnQpID0+ICh7XHJcbiAgICAgICAgLi4uY29tbWVudC5kYXRhKCksXHJcbiAgICAgICAgaWQ6IGNvbW1lbnQuaWQsXHJcbiAgICAgIH0pKTtcclxuICAgICAgbGV0IHF1ZXJpZXMgPSBbXTtcclxuICAgICAgY29tbWVudHMuZm9yRWFjaCgoY29tbSkgPT4ge1xyXG4gICAgICAgIHF1ZXJpZXMucHVzaChkYi5jb2xsZWN0aW9uKFwidXNlcnNcIikuZG9jKGNvbW0udXNlcklkKS5nZXQoKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBQcm9taXNlLmFsbChxdWVyaWVzKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBjb21tZW50cyA9IGNvbW1lbnRzLm1hcCgoY29tbSkgPT4gKHtcclxuICAgICAgICAgIC4uLmNvbW0sXHJcbiAgICAgICAgICB1c2VySW1hZ2U6IHJlcy5maW5kKChkKSA9PiBkLmlkID09PSBjb21tLnVzZXJJZCkuZGF0YSgpLmltYWdlLFxyXG4gICAgICAgIH0pKTtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiB0eXBlcy5HRVRfQ09NTUVOVFMsXHJcbiAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgIGxvYWRpbmdDb21tZW50czogZmFsc2UsXHJcbiAgICAgICAgICAgIGNvbW1lbnRzLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzdWJtaXRDb21tZW50ID0gKGluZm8pID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGlmICghYXV0aC5jdXJyZW50VXNlci5lbWFpbFZlcmlmaWVkKVxyXG4gICAgcmV0dXJuIG1lc3NhZ2UuZXJyb3IoXCJZb3UgbmVlZCB0byB2ZXJpZnkgeW91ciBlbWFpbCBmaXJzdFwiKTtcclxuICBpZiAoIWluZm8uY29udGVudCkgcmV0dXJuIG1lc3NhZ2UuZXJyb3IoXCJDb250ZW50IG11c3Qgbm90IGJlIGVtcHR5XCIpO1xyXG5cclxuICBkYi5jb2xsZWN0aW9uKFwiY29tbWVudHNcIilcclxuICAgIC5hZGQoe1xyXG4gICAgICAuLi5pbmZvLFxyXG4gICAgICBjcmVhdGVkQXQ6IGZpcmViYXNlLmZpcmVzdG9yZS5GaWVsZFZhbHVlLnNlcnZlclRpbWVzdGFtcCgpLFxyXG4gICAgfSlcclxuICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgbWVzc2FnZS5zdWNjZXNzKFwiQ29tbWVudCBwb3N0ZWQgc3VjY2Vzc2Z1bGx5XCIpO1xyXG4gICAgICBkYi5jb2xsZWN0aW9uKFwiY2hhcHRlcnNcIilcclxuICAgICAgICAuZG9jKGluZm8uY2hhcHRlcklkKVxyXG4gICAgICAgIC5nZXQoKVxyXG4gICAgICAgIC50aGVuKChjaGFwKSA9PiB7XHJcbiAgICAgICAgICBkYi5jb2xsZWN0aW9uKFwiY2hhcHRlcnNcIilcclxuICAgICAgICAgICAgLmRvYyhpbmZvLmNoYXB0ZXJJZClcclxuICAgICAgICAgICAgLnVwZGF0ZSh7IGNvbW1lbnRzQ291bnQ6IGNoYXAuZGF0YSgpLmNvbW1lbnRzQ291bnQgKyAxIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiBtZXNzYWdlLmVycm9yKGVyci5tZXNzYWdlKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlQ29tbWVudCA9IChpZCwgY2hhcGlkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkYi5jb2xsZWN0aW9uKFwiY2hhcHRlcnNcIilcclxuICAgIC5kb2MoY2hhcGlkKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigoY2hhcCkgPT4ge1xyXG4gICAgICBkYi5jb2xsZWN0aW9uKFwiY2hhcHRlcnNcIilcclxuICAgICAgICAuZG9jKGNoYXBpZClcclxuICAgICAgICAudXBkYXRlKHsgY29tbWVudHNDb3VudDogY2hhcC5kYXRhKCkuY29tbWVudHNDb3VudCAtIDEgfSlcclxuICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICBkYi5jb2xsZWN0aW9uKFwiY29tbWVudHNcIikuZG9jKGlkKS5kZWxldGUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9