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
                      "public": doc.data()["public"]
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
var submitComment = function submitComment(info, chapid) {
  return function (dispatch) {
    if (!_fbConfig__WEBPACK_IMPORTED_MODULE_3__["auth"].currentUser.emailVerified) return antd__WEBPACK_IMPORTED_MODULE_5__["message"].error("You need to verify your email first");
    if (!info.content) return antd__WEBPACK_IMPORTED_MODULE_5__["message"].error("Content must not be empty");
    _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("comments").add(_objectSpread(_objectSpread({}, info), {}, {
      createdAt: firebase_app__WEBPACK_IMPORTED_MODULE_4__["default"].firestore.FieldValue.serverTimestamp()
    })).then(function () {
      antd__WEBPACK_IMPORTED_MODULE_5__["message"].success("Comment posted successfully");
      _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("chapters").doc(chapid).get().then(function (chap) {
        _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("chapters").doc(chapid).update({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvYWN0aW9ucy9zdG9yaWVzQWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJnZXRTdG9yeSIsImlkIiwiZGlzcGF0Y2giLCJkYiIsImNvbGxlY3Rpb24iLCJkb2MiLCJnZXQiLCJ0aGVuIiwiZXhpc3RzIiwibWFpbiIsImRhdGEiLCJtYWluQ2hhcmFjdGVycyIsInNlY29uZGFyeSIsInNlY29uZGFyeUNoYXJhY3RlcnMiLCJtYWluQXJyIiwic2Vjb25kYXJ5QXJyIiwibWFpblF1ZXJ5IiwibWFwIiwiYyIsInNlY29uZGFyeVF1ZXJ5IiwibWFpblJlcyIsIlByb21pc2UiLCJhbGwiLCJzZWNvbmRhcnlSZXMiLCJyZXN1bHQiLCJmb3JFYWNoIiwiZG9jdSIsInR5cGUiLCJ0eXBlcyIsIkdFVF9TVE9SWSIsInN0b3J5RXhpc3RzIiwicGF5bG9hZCIsIkRJU1BBVENIX0VSUk9SIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImFkZFN0b3J5IiwiQUREX1NUT1JZIiwibG9hZGluZyIsImltYWdlTmFtZSIsInRpdGxlIiwidG9Mb3dlckNhc2UiLCJzcGxpdCIsImpvaW4iLCJiYW5uZXIiLCJzdG9yYWdlIiwicmVmIiwiYXV0aCIsImN1cnJlbnRVc2VyIiwidWlkIiwicHV0IiwiY2hpbGQiLCJnZXREb3dubG9hZFVSTCIsInVybCIsImFkZCIsImF1dGhvcklkIiwiYXV0aG9yTmFtZSIsIm9uZVNob3QiLCJjcmVhdGVkQXQiLCJmaXJlYmFzZSIsImZpcmVzdG9yZSIsIkZpZWxkVmFsdWUiLCJzZXJ2ZXJUaW1lc3RhbXAiLCJsaWtlc0NvdW50IiwiY2hhcHRlcnNDb3VudCIsImZlYXR1cmVkIiwibm90ZSIsInJlcyIsIm1lc3NhZ2UiLCJzdWNjZXNzIiwic2V0VGltZW91dCIsIlJvdXRlciIsInB1c2giLCJzdG9yeUlkIiwiZXJyb3IiLCJlZGl0U3RvcnkiLCJFRElUX1NUT1JZIiwibG9hZGluZ1N0b3J5IiwidXBkYXRlIiwid2hlcmUiLCJkb2NzIiwibG9jYXRpb25RdWVyeSIsInN0b3J5VGl0bGUiLCJnZXRVc2VyU3RvcmllcyIsIml0ZW1zIiwiR0VUX1VTRVJfU1RPUklFUyIsImdldEZhdm9yaXRlU3RvcmllcyIsImZhdkFyciIsInVzZXJzIiwidXNlciIsImZhdlVzZXJzIiwiR0VUX0ZBVk9SSVRFX1NUT1JJRVMiLCJpc1N0b3J5RmF2b3JpdGUiLCJvblNuYXBzaG90Iiwic25hcHNob3QiLCJhbnN3ZXIiLCJJU19TVE9SWV9GQVZPUklURSIsImxvYWRpbmdGYXYiLCJhZGRTdG9yeVRvRmF2b3JpdGUiLCJ1c2VybmFtZSIsImVtYWlsVmVyaWZpZWQiLCJzZW5kZXIiLCJzZW5kZXJJZCIsInJlbW92ZVN0b3J5RnJvbUZhdm9yaXRlIiwiZ2V0U3RvcnlDaGFyYWN0ZXJzIiwiYWRkQ2hhcHRlciIsIkFERF9DSEFQVEVSIiwiY29tbWVudHNDb3VudCIsInZvdGVycyIsInZvdGVzQ291bnQiLCJjaGFwSWQiLCJlZGl0Q2hhcHRlciIsImNoYXBpZCIsIkVESVRfQ0hBUFRFUiIsImRlbGV0ZUNoYXB0ZXIiLCJERUxFVEVfQ0hBUFRFUiIsImxvYWRpbmdDaGFwdGVyIiwiY2hhcmFjdGVyc0Zyb21DaGFwdGVyIiwiY2hhcmFjdGVycyIsInN0b3J5IiwiY2hhcmFjdGVyc0Zyb21TdG9yeSIsIm5ld0FyciIsImluY2x1ZGVzIiwidGltZXMiLCJmaWx0ZXIiLCJnZXRDaGFwdGVyIiwiY2hhcCIsImxvY2F0aW9ucyIsImNoYXJhUXVlcnkiLCJsb2NRdWVyeSIsImNoYXJhY3RlcnNJbkNoYXBlciIsImxvY2F0aW9uc0luQ2hhcGVyIiwiY2hhciIsImxvYyIsImwiLCJHRVRfQ0hBUFRFUiIsImNoYXB0ZXIiLCJjaGFwdGVyRXhpc3RzIiwiZ2V0Q2hhcHRlcnMiLCJvcmRlckJ5IiwiYXJyIiwibnVtYmVyIiwiR0VUX0NIQVBURVJTIiwiYWRkTG9jYXRpb24iLCJBRERfTE9DQVRJT04iLCJsb2FkaW5nTG9jIiwibmFtZSIsImltYWdlIiwibG9jSWQiLCJlZGl0TG9jYXRpb24iLCJnZXRMb2NhdGlvbiIsIkdFVF9MT0NBVElPTiIsImxvY2F0aW9uRXhpc3RzIiwiZ2V0VXNlckxvY2F0aW9ucyIsIkdFVF9VU0VSX0xPQ0FUSU9OUyIsImdldFN0b3J5TG9jYXRpb25zIiwiR0VUX1NUT1JZX0xPQ0FUSU9OUyIsImdldENvbW1lbnRzIiwic25hcCIsImNvbW1lbnRzIiwiY29tbWVudCIsInF1ZXJpZXMiLCJjb21tIiwidXNlcklkIiwidXNlckltYWdlIiwiZmluZCIsImQiLCJHRVRfQ09NTUVOVFMiLCJsb2FkaW5nQ29tbWVudHMiLCJzdWJtaXRDb21tZW50IiwiaW5mbyIsImNvbnRlbnQiLCJkZWxldGVDb21tZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtDQUdBOztBQUVPLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEVBQUQ7QUFBQSxTQUFRLFVBQUNDLFFBQUQsRUFBYztBQUM1Q0MsZ0RBQUUsQ0FBQ0MsVUFBSCxDQUFjLFNBQWQsRUFDR0MsR0FESCxDQUNPSixFQURQLEVBRUdLLEdBRkgsR0FHR0MsSUFISCxDQUdRLFVBQUNGLEdBQUQsRUFBUztBQUNiLFVBQUlBLEdBQUcsQ0FBQ0csTUFBUixFQUFnQjtBQUNkLFlBQU1DLElBQUksR0FBR0osR0FBRyxDQUFDSyxJQUFKLEdBQVdDLGNBQXhCO0FBQ0EsWUFBTUMsU0FBUyxHQUFHUCxHQUFHLENBQUNLLElBQUosR0FBV0csbUJBQTdCO0FBQ0EsWUFBSUMsT0FBTyxHQUFHLEVBQWQ7QUFDQSxZQUFJQyxZQUFZLEdBQUcsRUFBbkI7QUFDQSxZQUFNQyxTQUFTLEdBQUdQLElBQUksQ0FBQ1EsR0FBTCxDQUFTLFVBQUNDLENBQUQ7QUFBQSxpQkFDekJmLDRDQUFFLENBQUNDLFVBQUgsQ0FBYyxZQUFkLEVBQTRCQyxHQUE1QixDQUFnQ2EsQ0FBaEMsRUFBbUNaLEdBQW5DLEVBRHlCO0FBQUEsU0FB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O0FBQUU2QixxQkFBYSxFQUFFbUIsSUFBSSxDQUFDcEgsSUFBTCxHQUFZaUcsYUFBWixHQUE0QjtBQUE3QyxPQUZWLEVBR0dwRyxJQUhILENBR1EsWUFBTTtBQUNWSixvREFBRSxDQUFDQyxVQUFILENBQWMsVUFBZCxFQUEwQkMsR0FBMUIsQ0FBOEJKLEVBQTlCO0FBQ0QsT0FMSDtBQU1ELEtBVkg7QUFXRCxHQVo0QjtBQUFBLENBQXRCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3N0b3J5L1tpZF0vY2hhcHRlci9bY2hhcGlkXS43ODUyY2QwNTljMzdlMGYzNzk5MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdHlwZXMgfSBmcm9tIFwiLi4vLi4vdXRpbHMvY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IGRiLCBhdXRoLCBzdG9yYWdlIH0gZnJvbSBcIi4uL2ZiQ29uZmlnXCI7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcbmltcG9ydCB7IG1lc3NhZ2UgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuLy8gU1RPUklFU1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0b3J5ID0gKGlkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKVxyXG4gICAgLmRvYyhpZClcclxuICAgIC5nZXQoKVxyXG4gICAgLnRoZW4oKGRvYykgPT4ge1xyXG4gICAgICBpZiAoZG9jLmV4aXN0cykge1xyXG4gICAgICAgIGNvbnN0IG1haW4gPSBkb2MuZGF0YSgpLm1haW5DaGFyYWN0ZXJzO1xyXG4gICAgICAgIGNvbnN0IHNlY29uZGFyeSA9IGRvYy5kYXRhKCkuc2Vjb25kYXJ5Q2hhcmFjdGVycztcclxuICAgICAgICBsZXQgbWFpbkFyciA9IFtdO1xyXG4gICAgICAgIGxldCBzZWNvbmRhcnlBcnIgPSBbXTtcclxuICAgICAgICBjb25zdCBtYWluUXVlcnkgPSBtYWluLm1hcCgoYykgPT5cclxuICAgICAgICAgIGRiLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzXCIpLmRvYyhjKS5nZXQoKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3Qgc2Vjb25kYXJ5UXVlcnkgPSBzZWNvbmRhcnkubWFwKChjKSA9PlxyXG4gICAgICAgICAgZGIuY29sbGVjdGlvbihcImNoYXJhY3RlcnNcIikuZG9jKGMuaWQpLmdldCgpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBtYWluUmVzID0gUHJvbWlzZS5hbGwobWFpblF1ZXJ5KTtcclxuICAgICAgICBjb25zdCBzZWNvbmRhcnlSZXMgPSBQcm9taXNlLmFsbChzZWNvbmRhcnlRdWVyeSk7XHJcbiAgICAgICAgUHJvbWlzZS5hbGwoW21haW5SZXMsIHNlY29uZGFyeVJlc10pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgcmVzdWx0WzBdLmZvckVhY2goKGRvY3UpID0+IHtcclxuICAgICAgICAgICAgbWFpbkFyciA9IFsuLi5tYWluQXJyLCB7IC4uLmRvY3UuZGF0YSgpLCBpZDogZG9jdS5pZCB9XTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgcmVzdWx0WzFdLmZvckVhY2goKGRvY3UpID0+IHtcclxuICAgICAgICAgICAgc2Vjb25kYXJ5QXJyID0gWy4uLnNlY29uZGFyeUFyciwgeyAuLi5kb2N1LmRhdGEoKSwgaWQ6IGRvY3UuaWQgfV07XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogdHlwZXMuR0VUX1NUT1JZLFxyXG4gICAgICAgICAgICBzdG9yeUV4aXN0czogdHJ1ZSxcclxuICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgIC4uLmRvYy5kYXRhKCksXHJcbiAgICAgICAgICAgICAgaWQ6IGRvYy5pZCxcclxuICAgICAgICAgICAgICBzZWNvbmRhcnlDaGFyYWN0ZXJzOiBzZWNvbmRhcnlBcnIsXHJcbiAgICAgICAgICAgICAgbWFpbkNoYXJhY3RlcnM6IG1haW5BcnIsXHJcbiAgICAgICAgICAgICAgbWFpbkFycjogZG9jLmRhdGEoKS5tYWluQ2hhcmFjdGVycyxcclxuICAgICAgICAgICAgICBzZWNvbmRhcnlBcnI6IGRvYy5kYXRhKCkuc2Vjb25kYXJ5Q2hhcmFjdGVycyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IHR5cGVzLkRJU1BBVENIX0VSUk9SLFxyXG4gICAgICAgICAgc3RvcnlFeGlzdHM6IGZhbHNlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFN0b3J5ID0gKGRhdGEpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRpc3BhdGNoKHsgdHlwZTogdHlwZXMuQUREX1NUT1JZLCBwYXlsb2FkOiB7IGxvYWRpbmc6IHRydWUgfSB9KTtcclxuICBjb25zdCBpbWFnZU5hbWUgPSBkYXRhLnRpdGxlLnRvTG93ZXJDYXNlKCkuc3BsaXQoXCIgXCIpLmpvaW4oXCJfXCIpO1xyXG4gIGlmICh0eXBlb2YgZGF0YS5iYW5uZXIgPT09IFwib2JqZWN0XCIpIHtcclxuICAgIHN0b3JhZ2VcclxuICAgICAgLnJlZihgJHthdXRoLmN1cnJlbnRVc2VyLnVpZH0vJHtpbWFnZU5hbWV9YClcclxuICAgICAgLnB1dChkYXRhLmJhbm5lcilcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBzdG9yYWdlXHJcbiAgICAgICAgICAucmVmKGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gICAgICAgICAgLmNoaWxkKGltYWdlTmFtZSlcclxuICAgICAgICAgIC5nZXREb3dubG9hZFVSTCgpO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigodXJsKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpLmFkZCh7XHJcbiAgICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgICAgYXV0aG9ySWQ6IGF1dGguY3VycmVudFVzZXIudWlkLFxyXG4gICAgICAgICAgYXV0aG9yTmFtZTogZGF0YS5hdXRob3JOYW1lLFxyXG4gICAgICAgICAgb25lU2hvdDogZmFsc2UsXHJcbiAgICAgICAgICBiYW5uZXI6IHVybCxcclxuICAgICAgICAgIGNyZWF0ZWRBdDogZmlyZWJhc2UuZmlyZXN0b3JlLkZpZWxkVmFsdWUuc2VydmVyVGltZXN0YW1wKCksXHJcbiAgICAgICAgICBsaWtlc0NvdW50OiAwLFxyXG4gICAgICAgICAgY2hhcHRlcnNDb3VudDogMCxcclxuICAgICAgICAgIHNlY29uZGFyeUNoYXJhY3RlcnM6IFtdLFxyXG4gICAgICAgICAgZmVhdHVyZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgbm90ZTogMCxcclxuICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhcIlN0b3J5IGFkZGVkIHN1Y2Nlc3NmdWxseVwiKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIFJvdXRlci5wdXNoKGAvc3RvcnkvJHtyZXMuaWR9YCk7XHJcbiAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IHR5cGVzLkFERF9TVE9SWSxcclxuICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgIG1lc3NhZ2U6IFwiU3RvcnkgYWRkZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICAgICAgc3RvcnlJZDogcmVzLmlkLFxyXG4gICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihlcnIubWVzc2FnZSk7XHJcbiAgICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKVxyXG4gICAgICAuYWRkKHtcclxuICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgIGF1dGhvcklkOiBhdXRoLmN1cnJlbnRVc2VyLnVpZCxcclxuICAgICAgICBhdXRob3JOYW1lOiBkYXRhLmF1dGhvck5hbWUsXHJcbiAgICAgICAgb25lU2hvdDogZmFsc2UsXHJcbiAgICAgICAgY3JlYXRlZEF0OiBmaXJlYmFzZS5maXJlc3RvcmUuRmllbGRWYWx1ZS5zZXJ2ZXJUaW1lc3RhbXAoKSxcclxuICAgICAgICBsaWtlc0NvdW50OiAwLFxyXG4gICAgICAgIGNoYXB0ZXJzQ291bnQ6IDAsXHJcbiAgICAgICAgZmVhdHVyZWQ6IGZhbHNlLFxyXG4gICAgICAgIHNlY29uZGFyeUNoYXJhY3RlcnM6IFtdLFxyXG4gICAgICAgIG5vdGU6IDAsXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoXCJTdG9yeSBhZGRlZCBzdWNjZXNzZnVsbHlcIik7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBSb3V0ZXIucHVzaChgL3N0b3J5LyR7cmVzLmlkfWApO1xyXG4gICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiB0eXBlcy5BRERfU1RPUlksXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICBtZXNzYWdlOiBcIlN0b3J5IGFkZGVkIHN1Y2Nlc3NmdWxseVwiLFxyXG4gICAgICAgICAgICAgIHN0b3J5SWQ6IHJlcy5pZCxcclxuICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoZXJyLm1lc3NhZ2UpO1xyXG4gICAgICB9KTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZWRpdFN0b3J5ID0gKGRhdGEsIHN0b3J5SWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRpc3BhdGNoKHsgdHlwZTogdHlwZXMuRURJVF9TVE9SWSwgcGF5bG9hZDogeyBsb2FkaW5nU3Rvcnk6IHRydWUgfSB9KTtcclxuICBjb25zdCBpbWFnZU5hbWUgPSBkYXRhLnRpdGxlLnRvTG93ZXJDYXNlKCkuc3BsaXQoXCIgXCIpLmpvaW4oXCJfXCIpO1xyXG5cclxuICBpZiAodHlwZW9mIGRhdGEuYmFubmVyID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICBzdG9yYWdlXHJcbiAgICAgIC5yZWYoYCR7YXV0aC5jdXJyZW50VXNlci51aWR9LyR7aW1hZ2VOYW1lfWApXHJcbiAgICAgIC5wdXQoZGF0YS5iYW5uZXIpXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICByZXR1cm4gc3RvcmFnZVxyXG4gICAgICAgICAgLnJlZihhdXRoLmN1cnJlbnRVc2VyLnVpZClcclxuICAgICAgICAgIC5jaGlsZChpbWFnZU5hbWUpXHJcbiAgICAgICAgICAuZ2V0RG93bmxvYWRVUkwoKTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKHVybCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBkYlxyXG4gICAgICAgICAgLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpXHJcbiAgICAgICAgICAuZG9jKHN0b3J5SWQpXHJcbiAgICAgICAgICAudXBkYXRlKHtcclxuICAgICAgICAgICAgLi4uZGF0YSxcclxuICAgICAgICAgICAgYmFubmVyOiB1cmwsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIGRiLmNvbGxlY3Rpb24oXCJsb2NhdGlvbnNcIilcclxuICAgICAgICAgIC53aGVyZShcInN0b3J5SWRcIiwgXCI9PVwiLCBzdG9yeUlkKVxyXG4gICAgICAgICAgLmdldCgpXHJcbiAgICAgICAgICAudGhlbigoZG9jcykgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbG9jYXRpb25RdWVyeSA9IFtdO1xyXG4gICAgICAgICAgICBkb2NzLmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgICAgICAgICAgIGxvY2F0aW9uUXVlcnkgPSBbXHJcbiAgICAgICAgICAgICAgICAuLi5sb2NhdGlvblF1ZXJ5LFxyXG4gICAgICAgICAgICAgICAgZGJcclxuICAgICAgICAgICAgICAgICAgLmNvbGxlY3Rpb24oXCJsb2NhdGlvbnNcIilcclxuICAgICAgICAgICAgICAgICAgLmRvYyhkb2MuaWQpXHJcbiAgICAgICAgICAgICAgICAgIC51cGRhdGUoeyBzdG9yeVRpdGxlOiBkYXRhLnRpdGxlIH0pLFxyXG4gICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBQcm9taXNlLmFsbChsb2NhdGlvblF1ZXJ5KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoXCJTdG9yeSBhZGRlZCBzdWNjZXNzZnVsbHlcIik7XHJcbiAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogdHlwZXMuRURJVF9TVE9SWSxcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJTdG9yeSBlZGl0ZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoZXJyLm1lc3NhZ2UpO1xyXG4gICAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgZGIuY29sbGVjdGlvbihcInN0b3JpZXNcIilcclxuICAgICAgLmRvYyhzdG9yeUlkKVxyXG4gICAgICAudXBkYXRlKHtcclxuICAgICAgICAuLi5kYXRhLFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgZGIuY29sbGVjdGlvbihcImxvY2F0aW9uc1wiKVxyXG4gICAgICAgICAgLndoZXJlKFwic3RvcnlJZFwiLCBcIj09XCIsIHN0b3J5SWQpXHJcbiAgICAgICAgICAuZ2V0KClcclxuICAgICAgICAgIC50aGVuKChkb2NzKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBsb2NhdGlvblF1ZXJ5ID0gW107XHJcbiAgICAgICAgICAgIGRvY3MuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICAgICAgICAgICAgbG9jYXRpb25RdWVyeSA9IFtcclxuICAgICAgICAgICAgICAgIC4uLmxvY2F0aW9uUXVlcnksXHJcbiAgICAgICAgICAgICAgICBkYlxyXG4gICAgICAgICAgICAgICAgICAuY29sbGVjdGlvbihcImxvY2F0aW9uc1wiKVxyXG4gICAgICAgICAgICAgICAgICAuZG9jKGRvYy5pZClcclxuICAgICAgICAgICAgICAgICAgLnVwZGF0ZSh7IHN0b3J5VGl0bGU6IGRhdGEudGl0bGUgfSksXHJcbiAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFByb21pc2UuYWxsKGxvY2F0aW9uUXVlcnkpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhcIlN0b3J5IGFkZGVkIHN1Y2Nlc3NmdWxseVwiKTtcclxuICAgICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiB0eXBlcy5FRElUX1NUT1JZLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIlN0b3J5IGVkaXRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihlcnIubWVzc2FnZSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyU3RvcmllcyA9ICgpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpXHJcbiAgICAud2hlcmUoXCJhdXRob3JJZFwiLCBcIj09XCIsIGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigoZG9jcykgPT4ge1xyXG4gICAgICBsZXQgaXRlbXMgPSBbXTtcclxuICAgICAgZG9jcy5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgICAgICBpdGVtcyA9IFsuLi5pdGVtcywgeyBpZDogZG9jLmlkLCAuLi5kb2MuZGF0YSgpIH1dO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGl0ZW1zO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChpdGVtcykgPT4ge1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IHR5cGVzLkdFVF9VU0VSX1NUT1JJRVMsIHBheWxvYWQ6IGl0ZW1zIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0RmF2b3JpdGVTdG9yaWVzID0gKCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGIuY29sbGVjdGlvbihcInN0b3JpZXNMaWtlc1wiKVxyXG4gICAgLndoZXJlKFwic2VuZGVySWRcIiwgXCI9PVwiLCBhdXRoLmN1cnJlbnRVc2VyLnVpZClcclxuICAgIC5nZXQoKVxyXG4gICAgLnRoZW4oKGRvY3MpID0+IHtcclxuICAgICAgbGV0IGZhdkFyciA9IFtdO1xyXG4gICAgICBkb2NzLmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgICAgIGZhdkFyciA9IFsuLi5mYXZBcnIsIGRvYy5kYXRhKCkuc3RvcnlJZF07XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gZmF2QXJyO1xyXG4gICAgfSlcclxuICAgIC50aGVuKCh1c2VycykgPT4ge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSB1c2Vycy5tYXAoKHVzZXIpID0+XHJcbiAgICAgICAgZGIuY29sbGVjdGlvbihcInN0b3JpZXNcIikuZG9jKHVzZXIpLmdldCgpXHJcbiAgICAgICk7XHJcbiAgICAgIFByb21pc2UuYWxsKHJlc3VsdCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgbGV0IGZhdlVzZXJzID0gW107XHJcbiAgICAgICAgcmVzLmZvckVhY2goXHJcbiAgICAgICAgICAoZG9jKSA9PiAoZmF2VXNlcnMgPSBbLi4uZmF2VXNlcnMsIHsgaWQ6IGRvYy5pZCwgLi4uZG9jLmRhdGEoKSB9XSlcclxuICAgICAgICApO1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IHR5cGVzLkdFVF9GQVZPUklURV9TVE9SSUVTLFxyXG4gICAgICAgICAgcGF5bG9hZDogZmF2VXNlcnMsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgaXNTdG9yeUZhdm9yaXRlID0gKHN0b3J5SWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGlmIChhdXRoLmN1cnJlbnRVc2VyKSB7XHJcbiAgICBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc0xpa2VzXCIpXHJcbiAgICAgIC53aGVyZShcInNlbmRlcklkXCIsIFwiPT1cIiwgYXV0aC5jdXJyZW50VXNlci51aWQpXHJcbiAgICAgIC53aGVyZShcInN0b3J5SWRcIiwgXCI9PVwiLCBzdG9yeUlkKVxyXG4gICAgICAub25TbmFwc2hvdCgoc25hcHNob3QpID0+IHtcclxuICAgICAgICBjb25zdCBhbnN3ZXIgPSBzbmFwc2hvdC5kb2NzWzBdID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgIHJldHVybiBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiB0eXBlcy5JU19TVE9SWV9GQVZPUklURSxcclxuICAgICAgICAgIHBheWxvYWQ6IGFuc3dlcixcclxuICAgICAgICAgIGxvYWRpbmdGYXY6IGZhbHNlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYWRkU3RvcnlUb0Zhdm9yaXRlID0gKGlkLCB1c2VybmFtZSwgc3RvcnlUaXRsZSkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgLy8gaWYgKGlzRmF2b3JpdGUpIHJldHVybiBtZXNzYWdlLndhcm5pbmcoXCJZb3UndmUgYWxyZWFkeSBsaWtlZCB0aGlzIHN0b3J5XCIpO1xyXG4gIGlmICghYXV0aC5jdXJyZW50VXNlcilcclxuICAgIHJldHVybiBtZXNzYWdlLmVycm9yKFwiWW91IG5lZWQgdG8gYmUgbG9nZ2VkIGluIHRvIGxpa2UgYSBzdG9yeVwiKTtcclxuICBpZiAoIWF1dGguY3VycmVudFVzZXIuZW1haWxWZXJpZmllZClcclxuICAgIHJldHVybiBtZXNzYWdlLmVycm9yKFwiWW91IG5lZWQgdG8gdmVyaWZ5IHlvdXIgZW1haWwgZmlyc3RcIik7XHJcblxyXG4gIGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzTGlrZXNcIilcclxuICAgIC5hZGQoe1xyXG4gICAgICBzZW5kZXI6IHVzZXJuYW1lLFxyXG4gICAgICBzZW5kZXJJZDogYXV0aC5jdXJyZW50VXNlci51aWQsXHJcbiAgICAgIHN0b3J5SWQ6IGlkLFxyXG4gICAgICBjcmVhdGVkQXQ6IGZpcmViYXNlLmZpcmVzdG9yZS5GaWVsZFZhbHVlLnNlcnZlclRpbWVzdGFtcCgpLFxyXG4gICAgfSlcclxuICAgIC50aGVuKCgpID0+IG1lc3NhZ2Uuc3VjY2VzcyhgJHtzdG9yeVRpdGxlfSBhZGRlZCB0byB5b3VyIGZhdm9yaXRlc2ApKVxyXG4gICAgLmNhdGNoKChlcnIpID0+IG1lc3NhZ2UuZXJyb3IoXCJUaGVyZSBoYXMgYmVlbiBhIHByb2JsZW1cIikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZVN0b3J5RnJvbUZhdm9yaXRlID0gKGlkLCBzdG9yeVRpdGxlKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc0xpa2VzXCIpXHJcbiAgICAud2hlcmUoXCJzdG9yeUlkXCIsIFwiPT1cIiwgaWQpXHJcbiAgICAud2hlcmUoXCJzZW5kZXJJZFwiLCBcIj09XCIsIGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGIuY29sbGVjdGlvbihcInN0b3JpZXNMaWtlc1wiKS5kb2MoZGF0YS5kb2NzWzBdLmlkKS5kZWxldGUoKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoKSA9PiBtZXNzYWdlLnN1Y2Nlc3MoYCR7c3RvcnlUaXRsZX0gcmVtb3ZlZCBmcm9tIHlvdXIgZmF2b3JpdGVzYCkpXHJcbiAgICAuY2F0Y2goKGVycikgPT4gbWVzc2FnZS5lcnJvcihcIlRoZXJlIGhhcyBiZWVuIGEgcHJvYmxlbVwiKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RvcnlDaGFyYWN0ZXJzID0gKCkgPT4gKGRpc3BhdGNoKSA9PiB7fTtcclxuXHJcbi8vIENIQVBURVJzXHJcblxyXG5leHBvcnQgY29uc3QgYWRkQ2hhcHRlciA9IChkYXRhLCBzZWNvbmRhcnlDaGFyYWN0ZXJzKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkaXNwYXRjaCh7IHR5cGU6IHR5cGVzLkFERF9DSEFQVEVSLCBwYXlsb2FkOiB7IGxvYWRpbmc6IHRydWUgfSB9KTtcclxuICBkYi5jb2xsZWN0aW9uKFwiY2hhcHRlcnNcIilcclxuICAgIC5hZGQoe1xyXG4gICAgICAuLi5kYXRhLFxyXG4gICAgICBhdXRob3JJZDogYXV0aC5jdXJyZW50VXNlci51aWQsXHJcbiAgICAgIGNvbW1lbnRzQ291bnQ6IDAsXHJcbiAgICAgIG5vdGU6IDAsXHJcbiAgICAgIHZvdGVyczogW10sXHJcbiAgICAgIHZvdGVzQ291bnQ6IDAsXHJcbiAgICAgIGNyZWF0ZWRBdDogZmlyZWJhc2UuZmlyZXN0b3JlLkZpZWxkVmFsdWUuc2VydmVyVGltZXN0YW1wKCksXHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKVxyXG4gICAgICAgIC5kb2MoZGF0YS5zdG9yeUlkKVxyXG4gICAgICAgIC5nZXQoKVxyXG4gICAgICAgIC50aGVuKChkb2MpID0+IHtcclxuICAgICAgICAgIGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpXHJcbiAgICAgICAgICAgIC5kb2MoZGF0YS5zdG9yeUlkKVxyXG4gICAgICAgICAgICAudXBkYXRlKHtcclxuICAgICAgICAgICAgICBzZWNvbmRhcnlDaGFyYWN0ZXJzLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogdHlwZXMuQUREX0NIQVBURVIsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiQ2hhcHRlciBhZGRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgICAgICAgICAgY2hhcElkOiByZXMuaWQsXHJcbiAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAvLyAudGhlbigocmVzKSA9PiB7XHJcbiAgLy8gICBkaXNwYXRjaCh7XHJcbiAgLy8gICAgIHR5cGU6IHR5cGVzLkFERF9DSEFQVEVSLFxyXG4gIC8vICAgICBwYXlsb2FkOiB7XHJcbiAgLy8gICAgICAgbWVzc2FnZTogXCJDaGFwdGVyIGFkZGVkIHN1Y2Nlc3NmdWxseVwiLFxyXG4gIC8vICAgICAgIGNoYXBJZDogcmVzLmlkLFxyXG4gIC8vICAgICB9LFxyXG4gIC8vICAgfSk7XHJcbiAgLy8gfSlcclxuICAvLyAuY2F0Y2goKGVycikgPT5cclxuICAvLyAgIGRpc3BhdGNoKHtcclxuICAvLyAgICAgdHlwZTogdHlwZXMuQUREX0NIQVBURVIsXHJcbiAgLy8gICAgIHBheWxvYWQ6IHsgbWVzc2FnZTogZXJyLm1lc3NhZ2UsIGNoYXBJZDogXCJcIiB9LFxyXG4gIC8vICAgfSlcclxuICAvLyApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGVkaXRDaGFwdGVyID0gKGRhdGEsIHN0b3J5SWQsIGNoYXBpZCwgc2Vjb25kYXJ5Q2hhcmFjdGVycykgPT4gKFxyXG4gIGRpc3BhdGNoXHJcbikgPT4ge1xyXG4gIGRpc3BhdGNoKHsgdHlwZTogdHlwZXMuRURJVF9DSEFQVEVSLCBwYXlsb2FkOiB7IGxvYWRpbmc6IHRydWUgfSB9KTtcclxuICBkYi5jb2xsZWN0aW9uKFwiY2hhcHRlcnNcIilcclxuICAgIC5kb2MoY2hhcGlkKVxyXG4gICAgLnVwZGF0ZSh7IC4uLmRhdGEgfSlcclxuICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgZGIuY29sbGVjdGlvbihcInN0b3JpZXNcIilcclxuICAgICAgICAuZG9jKHN0b3J5SWQpXHJcbiAgICAgICAgLmdldCgpXHJcbiAgICAgICAgLnRoZW4oKGRvYykgPT4ge1xyXG4gICAgICAgICAgZGIuY29sbGVjdGlvbihcInN0b3JpZXNcIilcclxuICAgICAgICAgICAgLmRvYyhzdG9yeUlkKVxyXG4gICAgICAgICAgICAudXBkYXRlKHtcclxuICAgICAgICAgICAgICBzZWNvbmRhcnlDaGFyYWN0ZXJzLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogdHlwZXMuRURJVF9DSEFQVEVSLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkNoYXB0ZXIgZWRpdGVkIHN1Y2Nlc3NmdWxseVwiLFxyXG4gICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlQ2hhcHRlciA9IChpZCwgc3RvcnlJZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGlzcGF0Y2goeyB0eXBlOiB0eXBlcy5ERUxFVEVfQ0hBUFRFUiwgcGF5bG9hZDogeyBsb2FkaW5nQ2hhcHRlcjogdHJ1ZSB9IH0pO1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJjaGFwdGVyc1wiKVxyXG4gICAgLmRvYyhpZClcclxuICAgIC5nZXQoKVxyXG4gICAgLnRoZW4oKGRvYykgPT4ge1xyXG4gICAgICBjb25zdCBjaGFyYWN0ZXJzRnJvbUNoYXB0ZXIgPSBkb2MuZGF0YSgpLmNoYXJhY3RlcnM7XHJcbiAgICAgIGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpXHJcbiAgICAgICAgLmRvYyhzdG9yeUlkKVxyXG4gICAgICAgIC5nZXQoKVxyXG4gICAgICAgIC50aGVuKChzdG9yeSkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgY2hhcmFjdGVyc0Zyb21TdG9yeSA9IHN0b3J5LmRhdGEoKS5zZWNvbmRhcnlDaGFyYWN0ZXJzO1xyXG4gICAgICAgICAgbGV0IG5ld0FyciA9IGNoYXJhY3RlcnNGcm9tU3RvcnkubWFwKChjKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjaGFyYWN0ZXJzRnJvbUNoYXB0ZXIuaW5jbHVkZXMoYy5pZCkpIHtcclxuICAgICAgICAgICAgICByZXR1cm4geyAuLi5jLCB0aW1lczogYy50aW1lcyAtIDEgfTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICByZXR1cm4gYztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBuZXdBcnIgPSBuZXdBcnIuZmlsdGVyKChjKSA9PiBjLnRpbWVzID4gMCk7XHJcbiAgICAgICAgICBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKVxyXG4gICAgICAgICAgICAuZG9jKHN0b3J5SWQpXHJcbiAgICAgICAgICAgIC51cGRhdGUoeyBzZWNvbmRhcnlDaGFyYWN0ZXJzOiBuZXdBcnIgfSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGRiLmNvbGxlY3Rpb24oXCJjaGFwdGVyc1wiKVxyXG4gICAgICAgICAgICAgICAgLmRvYyhpZClcclxuICAgICAgICAgICAgICAgIC5kZWxldGUoKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogdHlwZXMuREVMRVRFX0NIQVBURVIsXHJcbiAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJDaGFwdGVyIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nQ2hhcHRlcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDaGFwdGVyID0gKHN0b3J5SWQsIGlkLCB0eXBlKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKVxyXG4gICAgLmRvYyhzdG9yeUlkKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigoZG9jKSA9PiB7XHJcbiAgICAgIGlmIChkb2MuZXhpc3RzKSB7XHJcbiAgICAgICAgZGIuY29sbGVjdGlvbihcImNoYXB0ZXJzXCIpXHJcbiAgICAgICAgICAuZG9jKGlkKVxyXG4gICAgICAgICAgLmdldCgpXHJcbiAgICAgICAgICAudGhlbigoY2hhcCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY2hhcC5leGlzdHMpIHtcclxuICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gXCJzaG93XCIpIHtcclxuICAgICAgICAgICAgICAgIGxldCBjaGFyYWN0ZXJzID0gW107XHJcbiAgICAgICAgICAgICAgICBsZXQgbG9jYXRpb25zID0gW107XHJcbiAgICAgICAgICAgICAgICBsZXQgY2hhcmFRdWVyeSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgbGV0IGxvY1F1ZXJ5ID0gW107XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjaGFyYWN0ZXJzSW5DaGFwZXIgPSBjaGFwLmRhdGEoKS5jaGFyYWN0ZXJzO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYXRpb25zSW5DaGFwZXIgPSBjaGFwLmRhdGEoKS5sb2NhdGlvbnM7XHJcbiAgICAgICAgICAgICAgICBjaGFyYWN0ZXJzSW5DaGFwZXIuZm9yRWFjaCgoY2hhcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBjaGFyYVF1ZXJ5LnB1c2goZGIuY29sbGVjdGlvbihcImNoYXJhY3RlcnNcIikuZG9jKGNoYXIpLmdldCgpKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgbG9jYXRpb25zSW5DaGFwZXIuZm9yRWFjaCgobG9jKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGxvY1F1ZXJ5LnB1c2goZGIuY29sbGVjdGlvbihcImxvY2F0aW9uc1wiKS5kb2MobG9jKS5nZXQoKSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGNoYXJhUXVlcnkgPSBQcm9taXNlLmFsbChjaGFyYVF1ZXJ5KTtcclxuICAgICAgICAgICAgICAgIGxvY1F1ZXJ5ID0gUHJvbWlzZS5hbGwobG9jUXVlcnkpO1xyXG4gICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwoW2NoYXJhUXVlcnksIGxvY1F1ZXJ5XSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHJlc1swXS5mb3JFYWNoKChjKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hhcmFjdGVycy5wdXNoKHsgLi4uYy5kYXRhKCksIGlkOiBjLmlkIH0pO1xyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgcmVzWzFdLmZvckVhY2goKGwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbnMucHVzaCh7IC4uLmwuZGF0YSgpLCBpZDogbC5pZCB9KTtcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiB0eXBlcy5HRVRfQ0hBUFRFUixcclxuICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjaGFwdGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLmNoYXAuZGF0YSgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogY2hhcC5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFyYWN0ZXJzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwdWJsaWM6IGRvYy5kYXRhKCkucHVibGljLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgIGNoYXB0ZXJFeGlzdHM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgICB0eXBlOiB0eXBlcy5HRVRfQ0hBUFRFUixcclxuICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoYXB0ZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIC4uLmNoYXAuZGF0YSgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ6IGNoYXAuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICBwdWJsaWM6IGRvYy5kYXRhKCkucHVibGljLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgY2hhcHRlckV4aXN0czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiB0eXBlcy5HRVRfQ0hBUFRFUixcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHsgY2hhcHRlckV4aXN0czogZmFsc2UgfSxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogdHlwZXMuR0VUX0NIQVBURVIsXHJcbiAgICAgICAgICBwYXlsb2FkOiB7IGNoYXB0ZXJFeGlzdHM6IGZhbHNlIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldENoYXB0ZXJzID0gKGlkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkYi5jb2xsZWN0aW9uKFwiY2hhcHRlcnNcIilcclxuICAgIC53aGVyZShcInN0b3J5SWRcIiwgXCI9PVwiLCBpZClcclxuICAgIC5vcmRlckJ5KFwibnVtYmVyXCIsIFwiYXNjXCIpXHJcbiAgICAub25TbmFwc2hvdCgoZG9jcykgPT4ge1xyXG4gICAgICBsZXQgYXJyID0gW107XHJcbiAgICAgIGRvY3MuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICAgICAgYXJyLnB1c2goe1xyXG4gICAgICAgICAgYXV0aG9ySWQ6IGRvYy5kYXRhKCkuYXV0aG9ySWQsXHJcbiAgICAgICAgICBpZDogZG9jLmlkLFxyXG4gICAgICAgICAgY3JlYXRlZEF0OiBkb2MuZGF0YSgpLmNyZWF0ZWRBdCxcclxuICAgICAgICAgIG51bWJlcjogZG9jLmRhdGEoKS5udW1iZXIsXHJcbiAgICAgICAgICB0aXRsZTogZG9jLmRhdGEoKS50aXRsZSxcclxuICAgICAgICAgIGNvbW1lbnRzQ291bnQ6IGRvYy5kYXRhKCkuY29tbWVudHNDb3VudCxcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiB0eXBlcy5HRVRfQ0hBUFRFUlMsXHJcbiAgICAgICAgcGF5bG9hZDogYXJyLFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuLy8gTE9DQVRJT05TXHJcblxyXG5leHBvcnQgY29uc3QgYWRkTG9jYXRpb24gPSAoZGF0YSkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgY29uc29sZS5sb2coXCJjb3Vjb3VcIik7XHJcbiAgZGlzcGF0Y2goeyB0eXBlOiB0eXBlcy5BRERfTE9DQVRJT04sIHBheWxvYWQ6IHsgbG9hZGluZ0xvYzogdHJ1ZSB9IH0pO1xyXG5cclxuICBjb25zdCBpbWFnZU5hbWUgPSBkYXRhLm5hbWUudG9Mb3dlckNhc2UoKS5zcGxpdChcIiBcIikuam9pbihcIl9cIik7XHJcblxyXG4gIGlmICh0eXBlb2YgZGF0YS5pbWFnZSA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgc3RvcmFnZVxyXG4gICAgICAucmVmKGAke2F1dGguY3VycmVudFVzZXIudWlkfS8ke2ltYWdlTmFtZX1gKVxyXG4gICAgICAucHV0KGRhdGEuaW1hZ2UpXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICByZXR1cm4gc3RvcmFnZVxyXG4gICAgICAgICAgLnJlZihhdXRoLmN1cnJlbnRVc2VyLnVpZClcclxuICAgICAgICAgIC5jaGlsZChpbWFnZU5hbWUpXHJcbiAgICAgICAgICAuZ2V0RG93bmxvYWRVUkwoKTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKHVybCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBkYi5jb2xsZWN0aW9uKFwibG9jYXRpb25zXCIpLmFkZCh7XHJcbiAgICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgICAgaW1hZ2U6IHVybCxcclxuICAgICAgICAgIGNyZWF0ZWRBdDogZmlyZWJhc2UuZmlyZXN0b3JlLkZpZWxkVmFsdWUuc2VydmVyVGltZXN0YW1wKCksXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXMpID0+XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogdHlwZXMuQUREX0xPQ0FUSU9OLFxyXG4gICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkxvY2F0aW9uIGFkZGVkIHN1Y2Nlc3NmdWxseVwiLFxyXG4gICAgICAgICAgICBsb2NJZDogcmVzLmlkLFxyXG4gICAgICAgICAgICBsb2FkaW5nTG9jOiBmYWxzZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSlcclxuICAgICAgKVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoZXJyLm1lc3NhZ2UpO1xyXG4gICAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgZGIuY29sbGVjdGlvbihcImxvY2F0aW9uc1wiKVxyXG4gICAgICAuYWRkKHtcclxuICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgIGNyZWF0ZWRBdDogZmlyZWJhc2UuZmlyZXN0b3JlLkZpZWxkVmFsdWUuc2VydmVyVGltZXN0YW1wKCksXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXMpID0+XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogdHlwZXMuQUREX0xPQ0FUSU9OLFxyXG4gICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkxvY2F0aW9uIGFkZGVkIHN1Y2Nlc3NmdWxseVwiLFxyXG4gICAgICAgICAgICBsb2NJZDogcmVzLmlkLFxyXG4gICAgICAgICAgICBsb2FkaW5nTG9jOiBmYWxzZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSlcclxuICAgICAgKVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoZXJyLm1lc3NhZ2UpO1xyXG4gICAgICB9KTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZWRpdExvY2F0aW9uID0gKGRhdGEpID0+IChkaXNwYXRjaCkgPT4ge307XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0TG9jYXRpb24gPSAoaWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJsb2NhdGlvbnNcIilcclxuICAgIC5kb2MoaWQpXHJcbiAgICAuZ2V0KClcclxuICAgIC50aGVuKChkb2MpID0+IHtcclxuICAgICAgaWYgKGRvYy5leGlzdHMpIHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiB0eXBlcy5HRVRfTE9DQVRJT04sXHJcbiAgICAgICAgICBwYXlsb2FkOiB7IC4uLmRvYy5kYXRhKCksIGlkOiBkb2MuaWQgfSxcclxuICAgICAgICAgIGxvY2F0aW9uRXhpc3RzOiB0cnVlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IHR5cGVzLkdFVF9MT0NBVElPTixcclxuICAgICAgICAgIGxvY2F0aW9uRXhpc3RzOiBmYWxzZSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VXNlckxvY2F0aW9ucyA9ICgpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJsb2NhdGlvbnNcIilcclxuICAgIC53aGVyZShcImF1dGhvcklkXCIsIFwiPT1cIiwgYXV0aC5jdXJyZW50VXNlci51aWQpXHJcbiAgICAuZ2V0KClcclxuICAgIC50aGVuKChkb2NzKSA9PiB7XHJcbiAgICAgIGxldCBsb2NhdGlvbnMgPSBbXTtcclxuICAgICAgZG9jcy5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgICAgICBsb2NhdGlvbnMgPSBbLi4ubG9jYXRpb25zLCB7IGlkOiBkb2MuaWQsIC4uLmRvYy5kYXRhKCkgfV07XHJcbiAgICAgIH0pO1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogdHlwZXMuR0VUX1VTRVJfTE9DQVRJT05TLFxyXG4gICAgICAgIHBheWxvYWQ6IGxvY2F0aW9ucyxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdG9yeUxvY2F0aW9ucyA9IChzdG9yeUlkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkYi5jb2xsZWN0aW9uKFwibG9jYXRpb25zXCIpXHJcbiAgICAud2hlcmUoXCJzdG9yeUlkXCIsIFwiPT1cIiwgc3RvcnlJZClcclxuICAgIC5nZXQoKVxyXG4gICAgLnRoZW4oKGRvY3MpID0+IHtcclxuICAgICAgY29uc3QgbG9jYXRpb25zID0gZG9jcy5kb2NzLm1hcCgoZG9jKSA9PiAoeyAuLi5kb2MuZGF0YSgpLCBpZDogZG9jLmlkIH0pKTtcclxuICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IHR5cGVzLkdFVF9TVE9SWV9MT0NBVElPTlMsXHJcbiAgICAgICAgcGF5bG9hZDogbG9jYXRpb25zLFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuLy8gQ09NTUVOVFNcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDb21tZW50cyA9IChpZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGIuY29sbGVjdGlvbihcImNvbW1lbnRzXCIpXHJcbiAgICAud2hlcmUoXCJjaGFwdGVySWRcIiwgXCI9PVwiLCBpZClcclxuICAgIC5vcmRlckJ5KFwiY3JlYXRlZEF0XCIsIFwiZGVzY1wiKVxyXG4gICAgLm9uU25hcHNob3QoKHNuYXApID0+IHtcclxuICAgICAgbGV0IGNvbW1lbnRzID0gc25hcC5kb2NzLm1hcCgoY29tbWVudCkgPT4gKHtcclxuICAgICAgICAuLi5jb21tZW50LmRhdGEoKSxcclxuICAgICAgICBpZDogY29tbWVudC5pZCxcclxuICAgICAgfSkpO1xyXG4gICAgICBsZXQgcXVlcmllcyA9IFtdO1xyXG4gICAgICBjb21tZW50cy5mb3JFYWNoKChjb21tKSA9PiB7XHJcbiAgICAgICAgcXVlcmllcy5wdXNoKGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKS5kb2MoY29tbS51c2VySWQpLmdldCgpKTtcclxuICAgICAgfSk7XHJcbiAgICAgIFByb21pc2UuYWxsKHF1ZXJpZXMpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGNvbW1lbnRzID0gY29tbWVudHMubWFwKChjb21tKSA9PiAoe1xyXG4gICAgICAgICAgLi4uY29tbSxcclxuICAgICAgICAgIHVzZXJJbWFnZTogcmVzLmZpbmQoKGQpID0+IGQuaWQgPT09IGNvbW0udXNlcklkKS5kYXRhKCkuaW1hZ2UsXHJcbiAgICAgICAgfSkpO1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IHR5cGVzLkdFVF9DT01NRU5UUyxcclxuICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgbG9hZGluZ0NvbW1lbnRzOiBmYWxzZSxcclxuICAgICAgICAgICAgY29tbWVudHMsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHN1Ym1pdENvbW1lbnQgPSAoaW5mbywgY2hhcGlkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBpZiAoIWF1dGguY3VycmVudFVzZXIuZW1haWxWZXJpZmllZClcclxuICAgIHJldHVybiBtZXNzYWdlLmVycm9yKFwiWW91IG5lZWQgdG8gdmVyaWZ5IHlvdXIgZW1haWwgZmlyc3RcIik7XHJcbiAgaWYgKCFpbmZvLmNvbnRlbnQpIHJldHVybiBtZXNzYWdlLmVycm9yKFwiQ29udGVudCBtdXN0IG5vdCBiZSBlbXB0eVwiKTtcclxuXHJcbiAgZGIuY29sbGVjdGlvbihcImNvbW1lbnRzXCIpXHJcbiAgICAuYWRkKHtcclxuICAgICAgLi4uaW5mbyxcclxuICAgICAgY3JlYXRlZEF0OiBmaXJlYmFzZS5maXJlc3RvcmUuRmllbGRWYWx1ZS5zZXJ2ZXJUaW1lc3RhbXAoKSxcclxuICAgIH0pXHJcbiAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhcIkNvbW1lbnQgcG9zdGVkIHN1Y2Nlc3NmdWxseVwiKTtcclxuICAgICAgZGIuY29sbGVjdGlvbihcImNoYXB0ZXJzXCIpXHJcbiAgICAgICAgLmRvYyhjaGFwaWQpXHJcbiAgICAgICAgLmdldCgpXHJcbiAgICAgICAgLnRoZW4oKGNoYXApID0+IHtcclxuICAgICAgICAgIGRiLmNvbGxlY3Rpb24oXCJjaGFwdGVyc1wiKVxyXG4gICAgICAgICAgICAuZG9jKGNoYXBpZClcclxuICAgICAgICAgICAgLnVwZGF0ZSh7IGNvbW1lbnRzQ291bnQ6IGNoYXAuZGF0YSgpLmNvbW1lbnRzQ291bnQgKyAxIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiBtZXNzYWdlLmVycm9yKGVyci5tZXNzYWdlKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlQ29tbWVudCA9IChpZCwgY2hhcGlkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkYi5jb2xsZWN0aW9uKFwiY2hhcHRlcnNcIilcclxuICAgIC5kb2MoY2hhcGlkKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigoY2hhcCkgPT4ge1xyXG4gICAgICBkYi5jb2xsZWN0aW9uKFwiY2hhcHRlcnNcIilcclxuICAgICAgICAuZG9jKGNoYXBpZClcclxuICAgICAgICAudXBkYXRlKHsgY29tbWVudHNDb3VudDogY2hhcC5kYXRhKCkuY29tbWVudHNDb3VudCAtIDEgfSlcclxuICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICBkYi5jb2xsZWN0aW9uKFwiY29tbWVudHNcIikuZG9jKGlkKS5kZWxldGUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9