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
var submitComment = function submitComment(info) {
  return function (dispatch) {
    if (!_fbConfig__WEBPACK_IMPORTED_MODULE_3__["auth"].currentUser.emailVerified) return antd__WEBPACK_IMPORTED_MODULE_5__["message"].error("You need to verify your email first");
    if (!info.content) return antd__WEBPACK_IMPORTED_MODULE_5__["message"].error("Content must not be empty");
    _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("comments").add(_objectSpread(_objectSpread({}, info), {}, {
      createdAt: firebase_app__WEBPACK_IMPORTED_MODULE_4__["default"].firestore.FieldValue.serverTimestamp()
    })).then(function () {
      return antd__WEBPACK_IMPORTED_MODULE_5__["message"].success("Comment posted successfully");
    })["catch"](function (err) {
      return antd__WEBPACK_IMPORTED_MODULE_5__["message"].error(err.message);
    });
  };
};
var deleteComment = function deleteComment(id) {
  return function (dispatch) {};
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvYWN0aW9ucy9zdG9yaWVzQWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJnZXRTdG9yeSIsImlkIiwiZGlzcGF0Y2giLCJkYiIsImNvbGxlY3Rpb24iLCJkb2MiLCJnZXQiLCJ0aGVuIiwiZXhpc3RzIiwibWFpbiIsImRhdGEiLCJtYWluQ2hhcmFjdGVycyIsInNlY29uZGFyeSIsInNlY29uZGFyeUNoYXJhY3RlcnMiLCJtYWluQXJyIiwic2Vjb25kYXJ5QXJyIiwibWFpblF1ZXJ5IiwibWFwIiwiYyIsInNlY29uZGFyeVF1ZXJ5IiwibWFpblJlcyIsIlByb21pc2UiLCJhbGwiLCJzZWNvbmRhcnlSZXMiLCJyZXN1bHQiLCJmb3JFYWNoIiwiZG9jdSIsInR5cGUiLCJ0eXBlcyIsIkdFVF9TVE9SWSIsInN0b3J5RXhpc3RzIiwicGF5bG9hZCIsIkRJU1BBVENIX0VSUk9SIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImFkZFN0b3J5IiwiQUREX1NUT1JZIiwibG9hZGluZyIsImltYWdlTmFtZSIsInRpdGxlIiwidG9Mb3dlckNhc2UiLCJzcGxpdCIsImpvaW4iLCJiYW5uZXIiLCJzdG9yYWdlIiwicmVmIiwiYXV0aCIsImN1cnJlbnRVc2VyIiwidWlkIiwicHV0IiwiY2hpbGQiLCJnZXREb3dubG9hZFVSTCIsInVybCIsImFkZCIsImF1dGhvcklkIiwiYXV0aG9yTmFtZSIsIm9uZVNob3QiLCJjcmVhdGVkQXQiLCJmaXJlYmFzZSIsImZpcmVzdG9yZSIsIkZpZWxkVmFsdWUiLCJzZXJ2ZXJUaW1lc3RhbXAiLCJsaWtlc0NvdW50IiwiY2hhcHRlcnNDb3VudCIsImZlYXR1cmVkIiwibm90ZSIsInJlcyIsIm1lc3NhZ2UiLCJzdWNjZXNzIiwic2V0VGltZW91dCIsIlJvdXRlciIsInB1c2giLCJzdG9yeUlkIiwiZXJyb3IiLCJlZGl0U3RvcnkiLCJFRElUX1NUT1JZIiwibG9hZGluZ1N0b3J5IiwidXBkYXRlIiwid2hlcmUiLCJkb2NzIiwibG9jYXRpb25RdWVyeSIsInN0b3J5VGl0bGUiLCJnZXRVc2VyU3RvcmllcyIsIml0ZW1zIiwiR0VUX1VTRVJfU1RPUklFUyIsImdldEZhdm9yaXRlU3RvcmllcyIsImZhdkFyciIsInVzZXJzIiwidXNlciIsImZhdlVzZXJzIiwiR0VUX0ZBVk9SSVRFX1NUT1JJRVMiLCJpc1N0b3J5RmF2b3JpdGUiLCJvblNuYXBzaG90Iiwic25hcHNob3QiLCJhbnN3ZXIiLCJJU19TVE9SWV9GQVZPUklURSIsImxvYWRpbmdGYXYiLCJhZGRTdG9yeVRvRmF2b3JpdGUiLCJ1c2VybmFtZSIsImVtYWlsVmVyaWZpZWQiLCJzZW5kZXIiLCJzZW5kZXJJZCIsInJlbW92ZVN0b3J5RnJvbUZhdm9yaXRlIiwiZ2V0U3RvcnlDaGFyYWN0ZXJzIiwiYWRkQ2hhcHRlciIsIkFERF9DSEFQVEVSIiwiY29tbWVudHNDb3VudCIsInZvdGVycyIsInZvdGVzQ291bnQiLCJjaGFwSWQiLCJlZGl0Q2hhcHRlciIsImNoYXBpZCIsIkVESVRfQ0hBUFRFUiIsImRlbGV0ZUNoYXB0ZXIiLCJERUxFVEVfQ0hBUFRFUiIsImxvYWRpbmdDaGFwdGVyIiwiY2hhcmFjdGVyc0Zyb21DaGFwdGVyIiwiY2hhcmFjdGVycyIsInN0b3J5IiwiY2hhcmFjdGVyc0Zyb21TdG9yeSIsIm5ld0FyciIsImluY2x1ZGVzIiwidGltZXMiLCJmaWx0ZXIiLCJnZXRDaGFwdGVyIiwiY2hhcCIsImxvY2F0aW9ucyIsImNoYXJhUXVlcnkiLCJsb2NRdWVyeSIsImNoYXJhY3RlcnNJbkNoYXBlciIsImxvY2F0aW9uc0luQ2hhcGVyIiwiY2hhciIsImxvYyIsImwiLCJHRVRfQ0hBUFRFUiIsImNoYXB0ZXIiLCJjaGFwdGVyRXhpc3RzIiwiZ2V0Q2hhcHRlcnMiLCJvcmRlckJ5IiwiYXJyIiwibnVtYmVyIiwiR0VUX0NIQVBURVJTIiwiYWRkTG9jYXRpb24iLCJBRERfTE9DQVRJT04iLCJsb2FkaW5nTG9jIiwibmFtZSIsImltYWdlIiwibG9jSWQiLCJlZGl0TG9jYXRpb24iLCJnZXRMb2NhdGlvbiIsIkdFVF9MT0NBVElPTiIsImxvY2F0aW9uRXhpc3RzIiwiZ2V0VXNlckxvY2F0aW9ucyIsIkdFVF9VU0VSX0xPQ0FUSU9OUyIsImdldFN0b3J5TG9jYXRpb25zIiwiR0VUX1NUT1JZX0xPQ0FUSU9OUyIsImdldENvbW1lbnRzIiwic25hcCIsImNvbW1lbnRzIiwiY29tbWVudCIsInF1ZXJpZXMiLCJjb21tIiwidXNlcklkIiwidXNlckltYWdlIiwiZmluZCIsImQiLCJHRVRfQ09NTUVOVFMiLCJsb2FkaW5nQ29tbWVudHMiLCJzdWJtaXRDb21tZW50IiwiaW5mbyIsImNvbnRlbnQiLCJkZWxldGVDb21tZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtDQUdBOztBQUVPLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEVBQUQ7QUFBQSxTQUFRLFVBQUNDLFFBQUQsRUFBYztBQUM1Q0MsZ0RBQUUsQ0FBQ0MsVUFBSCxDQUFjLFNBQWQsRUFDR0MsR0FESCxDQUNPSixFQURQLEVBRUdLLEdBRkgsR0FHR0MsSUFISCxDQUdRLFVBQUNGLEdBQUQsRUFBUztBQUNiLFVBQUlBLEdBQUcsQ0FBQ0csTUFBUixFQUFnQjtBQUNkLFlBQU1DLElBQUksR0FBR0osR0FBRyxDQUFDSyxJQUFKLEdBQVdDLGNBQXhCO0FBQ0EsWUFBTUMsU0FBUyxHQUFHUCxHQUFHLENBQUNLLElBQUosR0FBV0csbUJBQTdCO0FBQ0EsWUFBSUMsT0FBTyxHQUFHLEVBQWQ7QUFDQSxZQUFJQyxZQUFZLEdBQUcsRUFBbkI7QUFDQSxZQUFNQyxTQUFTLEdBQUdQLElBQUksQ0FBQ1EsR0FBTCxDQUFTLFVBQUNDLENBQUQ7QUFBQSxpQkFDekJmLDRDQUFFLENBQUNDLFVBQUgsQ0FBYyxZQUFkLEVBQTRCQyxHQUE1QixDQUFnQ2EsQ0FBaEMsRUFBbUNaLEdBQW5DLEVBRHlCO0FBQUEsU0FB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Z0csSUFBSSxDQUFDQyxPQUFWLEVBQW1CLE9BQU92Ryw0Q0FBTyxDQUFDTSxLQUFSLENBQWMsMkJBQWQsQ0FBUDtBQUVuQnZFLGdEQUFFLENBQUNDLFVBQUgsQ0FBYyxVQUFkLEVBQ0drRCxHQURILGlDQUVPb0gsSUFGUDtBQUdJaEgsZUFBUyxFQUFFQyxvREFBUSxDQUFDQyxTQUFULENBQW1CQyxVQUFuQixDQUE4QkMsZUFBOUI7QUFIZixRQUtHdkQsSUFMSCxDQUtRO0FBQUEsYUFBTTZELDRDQUFPLENBQUNDLE9BQVIsQ0FBZ0IsNkJBQWhCLENBQU47QUFBQSxLQUxSLFdBTVMsVUFBQ3BDLEdBQUQ7QUFBQSxhQUFTbUMsNENBQU8sQ0FBQ00sS0FBUixDQUFjekMsR0FBRyxDQUFDbUMsT0FBbEIsQ0FBVDtBQUFBLEtBTlQ7QUFPRCxHQVo0QjtBQUFBLENBQXRCO0FBY0EsSUFBTXdHLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQzNLLEVBQUQ7QUFBQSxTQUFRLFVBQUNDLFFBQUQsRUFBYyxDQUFFLENBQXhCO0FBQUEsQ0FBdEIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3RvcnkvW2lkXS9jaGFwdGVyL1tjaGFwaWRdLjdmN2ZkYjU3MTFhYjg4MTFlYWRhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0eXBlcyB9IGZyb20gXCIuLi8uLi91dGlscy9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgZGIsIGF1dGgsIHN0b3JhZ2UgfSBmcm9tIFwiLi4vZmJDb25maWdcIjtcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcclxuaW1wb3J0IHsgbWVzc2FnZSB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG4vLyBTVE9SSUVTXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RvcnkgPSAoaWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpXHJcbiAgICAuZG9jKGlkKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigoZG9jKSA9PiB7XHJcbiAgICAgIGlmIChkb2MuZXhpc3RzKSB7XHJcbiAgICAgICAgY29uc3QgbWFpbiA9IGRvYy5kYXRhKCkubWFpbkNoYXJhY3RlcnM7XHJcbiAgICAgICAgY29uc3Qgc2Vjb25kYXJ5ID0gZG9jLmRhdGEoKS5zZWNvbmRhcnlDaGFyYWN0ZXJzO1xyXG4gICAgICAgIGxldCBtYWluQXJyID0gW107XHJcbiAgICAgICAgbGV0IHNlY29uZGFyeUFyciA9IFtdO1xyXG4gICAgICAgIGNvbnN0IG1haW5RdWVyeSA9IG1haW4ubWFwKChjKSA9PlxyXG4gICAgICAgICAgZGIuY29sbGVjdGlvbihcImNoYXJhY3RlcnNcIikuZG9jKGMpLmdldCgpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBzZWNvbmRhcnlRdWVyeSA9IHNlY29uZGFyeS5tYXAoKGMpID0+XHJcbiAgICAgICAgICBkYi5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc1wiKS5kb2MoYy5pZCkuZ2V0KClcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IG1haW5SZXMgPSBQcm9taXNlLmFsbChtYWluUXVlcnkpO1xyXG4gICAgICAgIGNvbnN0IHNlY29uZGFyeVJlcyA9IFByb21pc2UuYWxsKHNlY29uZGFyeVF1ZXJ5KTtcclxuICAgICAgICBQcm9taXNlLmFsbChbbWFpblJlcywgc2Vjb25kYXJ5UmVzXSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICByZXN1bHRbMF0uZm9yRWFjaCgoZG9jdSkgPT4ge1xyXG4gICAgICAgICAgICBtYWluQXJyID0gWy4uLm1haW5BcnIsIHsgLi4uZG9jdS5kYXRhKCksIGlkOiBkb2N1LmlkIH1dO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICByZXN1bHRbMV0uZm9yRWFjaCgoZG9jdSkgPT4ge1xyXG4gICAgICAgICAgICBzZWNvbmRhcnlBcnIgPSBbLi4uc2Vjb25kYXJ5QXJyLCB7IC4uLmRvY3UuZGF0YSgpLCBpZDogZG9jdS5pZCB9XTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiB0eXBlcy5HRVRfU1RPUlksXHJcbiAgICAgICAgICAgIHN0b3J5RXhpc3RzOiB0cnVlLFxyXG4gICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgLi4uZG9jLmRhdGEoKSxcclxuICAgICAgICAgICAgICBpZDogZG9jLmlkLFxyXG4gICAgICAgICAgICAgIHNlY29uZGFyeUNoYXJhY3RlcnM6IHNlY29uZGFyeUFycixcclxuICAgICAgICAgICAgICBtYWluQ2hhcmFjdGVyczogbWFpbkFycixcclxuICAgICAgICAgICAgICBtYWluQXJyOiBkb2MuZGF0YSgpLm1haW5DaGFyYWN0ZXJzLFxyXG4gICAgICAgICAgICAgIHNlY29uZGFyeUFycjogZG9jLmRhdGEoKS5zZWNvbmRhcnlDaGFyYWN0ZXJzLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogdHlwZXMuRElTUEFUQ0hfRVJST1IsXHJcbiAgICAgICAgICBzdG9yeUV4aXN0czogZmFsc2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYWRkU3RvcnkgPSAoZGF0YSkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGlzcGF0Y2goeyB0eXBlOiB0eXBlcy5BRERfU1RPUlksIHBheWxvYWQ6IHsgbG9hZGluZzogdHJ1ZSB9IH0pO1xyXG4gIGNvbnN0IGltYWdlTmFtZSA9IGRhdGEudGl0bGUudG9Mb3dlckNhc2UoKS5zcGxpdChcIiBcIikuam9pbihcIl9cIik7XHJcbiAgaWYgKHR5cGVvZiBkYXRhLmJhbm5lciA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgc3RvcmFnZVxyXG4gICAgICAucmVmKGAke2F1dGguY3VycmVudFVzZXIudWlkfS8ke2ltYWdlTmFtZX1gKVxyXG4gICAgICAucHV0KGRhdGEuYmFubmVyKVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHN0b3JhZ2VcclxuICAgICAgICAgIC5yZWYoYXV0aC5jdXJyZW50VXNlci51aWQpXHJcbiAgICAgICAgICAuY2hpbGQoaW1hZ2VOYW1lKVxyXG4gICAgICAgICAgLmdldERvd25sb2FkVVJMKCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKCh1cmwpID0+IHtcclxuICAgICAgICByZXR1cm4gZGIuY29sbGVjdGlvbihcInN0b3JpZXNcIikuYWRkKHtcclxuICAgICAgICAgIC4uLmRhdGEsXHJcbiAgICAgICAgICBhdXRob3JJZDogYXV0aC5jdXJyZW50VXNlci51aWQsXHJcbiAgICAgICAgICBhdXRob3JOYW1lOiBkYXRhLmF1dGhvck5hbWUsXHJcbiAgICAgICAgICBvbmVTaG90OiBmYWxzZSxcclxuICAgICAgICAgIGJhbm5lcjogdXJsLFxyXG4gICAgICAgICAgY3JlYXRlZEF0OiBmaXJlYmFzZS5maXJlc3RvcmUuRmllbGRWYWx1ZS5zZXJ2ZXJUaW1lc3RhbXAoKSxcclxuICAgICAgICAgIGxpa2VzQ291bnQ6IDAsXHJcbiAgICAgICAgICBjaGFwdGVyc0NvdW50OiAwLFxyXG4gICAgICAgICAgc2Vjb25kYXJ5Q2hhcmFjdGVyczogW10sXHJcbiAgICAgICAgICBmZWF0dXJlZDogZmFsc2UsXHJcbiAgICAgICAgICBub3RlOiAwLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgbWVzc2FnZS5zdWNjZXNzKFwiU3RvcnkgYWRkZWQgc3VjY2Vzc2Z1bGx5XCIpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgUm91dGVyLnB1c2goYC9zdG9yeS8ke3Jlcy5pZH1gKTtcclxuICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogdHlwZXMuQUREX1NUT1JZLFxyXG4gICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgbWVzc2FnZTogXCJTdG9yeSBhZGRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgICAgICBzdG9yeUlkOiByZXMuaWQsXHJcbiAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBtZXNzYWdlLmVycm9yKGVyci5tZXNzYWdlKTtcclxuICAgICAgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpXHJcbiAgICAgIC5hZGQoe1xyXG4gICAgICAgIC4uLmRhdGEsXHJcbiAgICAgICAgYXV0aG9ySWQ6IGF1dGguY3VycmVudFVzZXIudWlkLFxyXG4gICAgICAgIGF1dGhvck5hbWU6IGRhdGEuYXV0aG9yTmFtZSxcclxuICAgICAgICBvbmVTaG90OiBmYWxzZSxcclxuICAgICAgICBjcmVhdGVkQXQ6IGZpcmViYXNlLmZpcmVzdG9yZS5GaWVsZFZhbHVlLnNlcnZlclRpbWVzdGFtcCgpLFxyXG4gICAgICAgIGxpa2VzQ291bnQ6IDAsXHJcbiAgICAgICAgY2hhcHRlcnNDb3VudDogMCxcclxuICAgICAgICBmZWF0dXJlZDogZmFsc2UsXHJcbiAgICAgICAgc2Vjb25kYXJ5Q2hhcmFjdGVyczogW10sXHJcbiAgICAgICAgbm90ZTogMCxcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhcIlN0b3J5IGFkZGVkIHN1Y2Nlc3NmdWxseVwiKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIFJvdXRlci5wdXNoKGAvc3RvcnkvJHtyZXMuaWR9YCk7XHJcbiAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IHR5cGVzLkFERF9TVE9SWSxcclxuICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgIG1lc3NhZ2U6IFwiU3RvcnkgYWRkZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICAgICAgc3RvcnlJZDogcmVzLmlkLFxyXG4gICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihlcnIubWVzc2FnZSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBlZGl0U3RvcnkgPSAoZGF0YSwgc3RvcnlJZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGlzcGF0Y2goeyB0eXBlOiB0eXBlcy5FRElUX1NUT1JZLCBwYXlsb2FkOiB7IGxvYWRpbmdTdG9yeTogdHJ1ZSB9IH0pO1xyXG4gIGNvbnN0IGltYWdlTmFtZSA9IGRhdGEudGl0bGUudG9Mb3dlckNhc2UoKS5zcGxpdChcIiBcIikuam9pbihcIl9cIik7XHJcblxyXG4gIGlmICh0eXBlb2YgZGF0YS5iYW5uZXIgPT09IFwib2JqZWN0XCIpIHtcclxuICAgIHN0b3JhZ2VcclxuICAgICAgLnJlZihgJHthdXRoLmN1cnJlbnRVc2VyLnVpZH0vJHtpbWFnZU5hbWV9YClcclxuICAgICAgLnB1dChkYXRhLmJhbm5lcilcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBzdG9yYWdlXHJcbiAgICAgICAgICAucmVmKGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gICAgICAgICAgLmNoaWxkKGltYWdlTmFtZSlcclxuICAgICAgICAgIC5nZXREb3dubG9hZFVSTCgpO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigodXJsKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGRiXHJcbiAgICAgICAgICAuY29sbGVjdGlvbihcInN0b3JpZXNcIilcclxuICAgICAgICAgIC5kb2Moc3RvcnlJZClcclxuICAgICAgICAgIC51cGRhdGUoe1xyXG4gICAgICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgICAgICBiYW5uZXI6IHVybCxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgZGIuY29sbGVjdGlvbihcImxvY2F0aW9uc1wiKVxyXG4gICAgICAgICAgLndoZXJlKFwic3RvcnlJZFwiLCBcIj09XCIsIHN0b3J5SWQpXHJcbiAgICAgICAgICAuZ2V0KClcclxuICAgICAgICAgIC50aGVuKChkb2NzKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBsb2NhdGlvblF1ZXJ5ID0gW107XHJcbiAgICAgICAgICAgIGRvY3MuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICAgICAgICAgICAgbG9jYXRpb25RdWVyeSA9IFtcclxuICAgICAgICAgICAgICAgIC4uLmxvY2F0aW9uUXVlcnksXHJcbiAgICAgICAgICAgICAgICBkYlxyXG4gICAgICAgICAgICAgICAgICAuY29sbGVjdGlvbihcImxvY2F0aW9uc1wiKVxyXG4gICAgICAgICAgICAgICAgICAuZG9jKGRvYy5pZClcclxuICAgICAgICAgICAgICAgICAgLnVwZGF0ZSh7IHN0b3J5VGl0bGU6IGRhdGEudGl0bGUgfSksXHJcbiAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFByb21pc2UuYWxsKGxvY2F0aW9uUXVlcnkpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhcIlN0b3J5IGFkZGVkIHN1Y2Nlc3NmdWxseVwiKTtcclxuICAgICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiB0eXBlcy5FRElUX1NUT1JZLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIlN0b3J5IGVkaXRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihlcnIubWVzc2FnZSk7XHJcbiAgICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKVxyXG4gICAgICAuZG9jKHN0b3J5SWQpXHJcbiAgICAgIC51cGRhdGUoe1xyXG4gICAgICAgIC4uLmRhdGEsXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICBkYi5jb2xsZWN0aW9uKFwibG9jYXRpb25zXCIpXHJcbiAgICAgICAgICAud2hlcmUoXCJzdG9yeUlkXCIsIFwiPT1cIiwgc3RvcnlJZClcclxuICAgICAgICAgIC5nZXQoKVxyXG4gICAgICAgICAgLnRoZW4oKGRvY3MpID0+IHtcclxuICAgICAgICAgICAgbGV0IGxvY2F0aW9uUXVlcnkgPSBbXTtcclxuICAgICAgICAgICAgZG9jcy5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgICAgICAgICAgICBsb2NhdGlvblF1ZXJ5ID0gW1xyXG4gICAgICAgICAgICAgICAgLi4ubG9jYXRpb25RdWVyeSxcclxuICAgICAgICAgICAgICAgIGRiXHJcbiAgICAgICAgICAgICAgICAgIC5jb2xsZWN0aW9uKFwibG9jYXRpb25zXCIpXHJcbiAgICAgICAgICAgICAgICAgIC5kb2MoZG9jLmlkKVxyXG4gICAgICAgICAgICAgICAgICAudXBkYXRlKHsgc3RvcnlUaXRsZTogZGF0YS50aXRsZSB9KSxcclxuICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgUHJvbWlzZS5hbGwobG9jYXRpb25RdWVyeSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgbWVzc2FnZS5zdWNjZXNzKFwiU3RvcnkgYWRkZWQgc3VjY2Vzc2Z1bGx5XCIpO1xyXG4gICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IHR5cGVzLkVESVRfU1RPUlksXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiU3RvcnkgZWRpdGVkIHN1Y2Nlc3NmdWxseVwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBtZXNzYWdlLmVycm9yKGVyci5tZXNzYWdlKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFVzZXJTdG9yaWVzID0gKCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGIuY29sbGVjdGlvbihcInN0b3JpZXNcIilcclxuICAgIC53aGVyZShcImF1dGhvcklkXCIsIFwiPT1cIiwgYXV0aC5jdXJyZW50VXNlci51aWQpXHJcbiAgICAuZ2V0KClcclxuICAgIC50aGVuKChkb2NzKSA9PiB7XHJcbiAgICAgIGxldCBpdGVtcyA9IFtdO1xyXG4gICAgICBkb2NzLmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgICAgIGl0ZW1zID0gWy4uLml0ZW1zLCB7IGlkOiBkb2MuaWQsIC4uLmRvYy5kYXRhKCkgfV07XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gaXRlbXM7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGl0ZW1zKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogdHlwZXMuR0VUX1VTRVJfU1RPUklFUywgcGF5bG9hZDogaXRlbXMgfSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRGYXZvcml0ZVN0b3JpZXMgPSAoKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc0xpa2VzXCIpXHJcbiAgICAud2hlcmUoXCJzZW5kZXJJZFwiLCBcIj09XCIsIGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigoZG9jcykgPT4ge1xyXG4gICAgICBsZXQgZmF2QXJyID0gW107XHJcbiAgICAgIGRvY3MuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICAgICAgZmF2QXJyID0gWy4uLmZhdkFyciwgZG9jLmRhdGEoKS5zdG9yeUlkXTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBmYXZBcnI7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKHVzZXJzKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHVzZXJzLm1hcCgodXNlcikgPT5cclxuICAgICAgICBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKS5kb2ModXNlcikuZ2V0KClcclxuICAgICAgKTtcclxuICAgICAgUHJvbWlzZS5hbGwocmVzdWx0KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBsZXQgZmF2VXNlcnMgPSBbXTtcclxuICAgICAgICByZXMuZm9yRWFjaChcclxuICAgICAgICAgIChkb2MpID0+IChmYXZVc2VycyA9IFsuLi5mYXZVc2VycywgeyBpZDogZG9jLmlkLCAuLi5kb2MuZGF0YSgpIH1dKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogdHlwZXMuR0VUX0ZBVk9SSVRFX1NUT1JJRVMsXHJcbiAgICAgICAgICBwYXlsb2FkOiBmYXZVc2VycyxcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBpc1N0b3J5RmF2b3JpdGUgPSAoc3RvcnlJZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgaWYgKGF1dGguY3VycmVudFVzZXIpIHtcclxuICAgIGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzTGlrZXNcIilcclxuICAgICAgLndoZXJlKFwic2VuZGVySWRcIiwgXCI9PVwiLCBhdXRoLmN1cnJlbnRVc2VyLnVpZClcclxuICAgICAgLndoZXJlKFwic3RvcnlJZFwiLCBcIj09XCIsIHN0b3J5SWQpXHJcbiAgICAgIC5vblNuYXBzaG90KChzbmFwc2hvdCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFuc3dlciA9IHNuYXBzaG90LmRvY3NbMF0gPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IHR5cGVzLklTX1NUT1JZX0ZBVk9SSVRFLFxyXG4gICAgICAgICAgcGF5bG9hZDogYW5zd2VyLFxyXG4gICAgICAgICAgbG9hZGluZ0ZhdjogZmFsc2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRTdG9yeVRvRmF2b3JpdGUgPSAoaWQsIHVzZXJuYW1lLCBzdG9yeVRpdGxlKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICAvLyBpZiAoaXNGYXZvcml0ZSkgcmV0dXJuIG1lc3NhZ2Uud2FybmluZyhcIllvdSd2ZSBhbHJlYWR5IGxpa2VkIHRoaXMgc3RvcnlcIik7XHJcbiAgaWYgKCFhdXRoLmN1cnJlbnRVc2VyKVxyXG4gICAgcmV0dXJuIG1lc3NhZ2UuZXJyb3IoXCJZb3UgbmVlZCB0byBiZSBsb2dnZWQgaW4gdG8gbGlrZSBhIHN0b3J5XCIpO1xyXG4gIGlmICghYXV0aC5jdXJyZW50VXNlci5lbWFpbFZlcmlmaWVkKVxyXG4gICAgcmV0dXJuIG1lc3NhZ2UuZXJyb3IoXCJZb3UgbmVlZCB0byB2ZXJpZnkgeW91ciBlbWFpbCBmaXJzdFwiKTtcclxuXHJcbiAgZGIuY29sbGVjdGlvbihcInN0b3JpZXNMaWtlc1wiKVxyXG4gICAgLmFkZCh7XHJcbiAgICAgIHNlbmRlcjogdXNlcm5hbWUsXHJcbiAgICAgIHNlbmRlcklkOiBhdXRoLmN1cnJlbnRVc2VyLnVpZCxcclxuICAgICAgc3RvcnlJZDogaWQsXHJcbiAgICAgIGNyZWF0ZWRBdDogZmlyZWJhc2UuZmlyZXN0b3JlLkZpZWxkVmFsdWUuc2VydmVyVGltZXN0YW1wKCksXHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKCkgPT4gbWVzc2FnZS5zdWNjZXNzKGAke3N0b3J5VGl0bGV9IGFkZGVkIHRvIHlvdXIgZmF2b3JpdGVzYCkpXHJcbiAgICAuY2F0Y2goKGVycikgPT4gbWVzc2FnZS5lcnJvcihcIlRoZXJlIGhhcyBiZWVuIGEgcHJvYmxlbVwiKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlU3RvcnlGcm9tRmF2b3JpdGUgPSAoaWQsIHN0b3J5VGl0bGUpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzTGlrZXNcIilcclxuICAgIC53aGVyZShcInN0b3J5SWRcIiwgXCI9PVwiLCBpZClcclxuICAgIC53aGVyZShcInNlbmRlcklkXCIsIFwiPT1cIiwgYXV0aC5jdXJyZW50VXNlci51aWQpXHJcbiAgICAuZ2V0KClcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc0xpa2VzXCIpLmRvYyhkYXRhLmRvY3NbMF0uaWQpLmRlbGV0ZSgpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKCgpID0+IG1lc3NhZ2Uuc3VjY2VzcyhgJHtzdG9yeVRpdGxlfSByZW1vdmVkIGZyb20geW91ciBmYXZvcml0ZXNgKSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiBtZXNzYWdlLmVycm9yKFwiVGhlcmUgaGFzIGJlZW4gYSBwcm9ibGVtXCIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdG9yeUNoYXJhY3RlcnMgPSAoKSA9PiAoZGlzcGF0Y2gpID0+IHt9O1xyXG5cclxuLy8gQ0hBUFRFUnNcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRDaGFwdGVyID0gKGRhdGEsIHNlY29uZGFyeUNoYXJhY3RlcnMpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRpc3BhdGNoKHsgdHlwZTogdHlwZXMuQUREX0NIQVBURVIsIHBheWxvYWQ6IHsgbG9hZGluZzogdHJ1ZSB9IH0pO1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJjaGFwdGVyc1wiKVxyXG4gICAgLmFkZCh7XHJcbiAgICAgIC4uLmRhdGEsXHJcbiAgICAgIGF1dGhvcklkOiBhdXRoLmN1cnJlbnRVc2VyLnVpZCxcclxuICAgICAgY29tbWVudHNDb3VudDogMCxcclxuICAgICAgbm90ZTogMCxcclxuICAgICAgdm90ZXJzOiBbXSxcclxuICAgICAgdm90ZXNDb3VudDogMCxcclxuICAgICAgY3JlYXRlZEF0OiBmaXJlYmFzZS5maXJlc3RvcmUuRmllbGRWYWx1ZS5zZXJ2ZXJUaW1lc3RhbXAoKSxcclxuICAgIH0pXHJcbiAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpXHJcbiAgICAgICAgLmRvYyhkYXRhLnN0b3J5SWQpXHJcbiAgICAgICAgLmdldCgpXHJcbiAgICAgICAgLnRoZW4oKGRvYykgPT4ge1xyXG4gICAgICAgICAgZGIuY29sbGVjdGlvbihcInN0b3JpZXNcIilcclxuICAgICAgICAgICAgLmRvYyhkYXRhLnN0b3J5SWQpXHJcbiAgICAgICAgICAgIC51cGRhdGUoe1xyXG4gICAgICAgICAgICAgIHNlY29uZGFyeUNoYXJhY3RlcnMsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiB0eXBlcy5BRERfQ0hBUFRFUixcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJDaGFwdGVyIGFkZGVkIHN1Y2Nlc3NmdWxseVwiLFxyXG4gICAgICAgICAgICAgICAgICBjaGFwSWQ6IHJlcy5pZCxcclxuICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gIC8vIC50aGVuKChyZXMpID0+IHtcclxuICAvLyAgIGRpc3BhdGNoKHtcclxuICAvLyAgICAgdHlwZTogdHlwZXMuQUREX0NIQVBURVIsXHJcbiAgLy8gICAgIHBheWxvYWQ6IHtcclxuICAvLyAgICAgICBtZXNzYWdlOiBcIkNoYXB0ZXIgYWRkZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgLy8gICAgICAgY2hhcElkOiByZXMuaWQsXHJcbiAgLy8gICAgIH0sXHJcbiAgLy8gICB9KTtcclxuICAvLyB9KVxyXG4gIC8vIC5jYXRjaCgoZXJyKSA9PlxyXG4gIC8vICAgZGlzcGF0Y2goe1xyXG4gIC8vICAgICB0eXBlOiB0eXBlcy5BRERfQ0hBUFRFUixcclxuICAvLyAgICAgcGF5bG9hZDogeyBtZXNzYWdlOiBlcnIubWVzc2FnZSwgY2hhcElkOiBcIlwiIH0sXHJcbiAgLy8gICB9KVxyXG4gIC8vICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZWRpdENoYXB0ZXIgPSAoZGF0YSwgc3RvcnlJZCwgY2hhcGlkLCBzZWNvbmRhcnlDaGFyYWN0ZXJzKSA9PiAoXHJcbiAgZGlzcGF0Y2hcclxuKSA9PiB7XHJcbiAgZGlzcGF0Y2goeyB0eXBlOiB0eXBlcy5FRElUX0NIQVBURVIsIHBheWxvYWQ6IHsgbG9hZGluZzogdHJ1ZSB9IH0pO1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJjaGFwdGVyc1wiKVxyXG4gICAgLmRvYyhjaGFwaWQpXHJcbiAgICAudXBkYXRlKHsgLi4uZGF0YSB9KVxyXG4gICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKVxyXG4gICAgICAgIC5kb2Moc3RvcnlJZClcclxuICAgICAgICAuZ2V0KClcclxuICAgICAgICAudGhlbigoZG9jKSA9PiB7XHJcbiAgICAgICAgICBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKVxyXG4gICAgICAgICAgICAuZG9jKHN0b3J5SWQpXHJcbiAgICAgICAgICAgIC51cGRhdGUoe1xyXG4gICAgICAgICAgICAgIHNlY29uZGFyeUNoYXJhY3RlcnMsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiB0eXBlcy5FRElUX0NIQVBURVIsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiQ2hhcHRlciBlZGl0ZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkZWxldGVDaGFwdGVyID0gKGlkLCBzdG9yeUlkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkaXNwYXRjaCh7IHR5cGU6IHR5cGVzLkRFTEVURV9DSEFQVEVSLCBwYXlsb2FkOiB7IGxvYWRpbmdDaGFwdGVyOiB0cnVlIH0gfSk7XHJcbiAgZGIuY29sbGVjdGlvbihcImNoYXB0ZXJzXCIpXHJcbiAgICAuZG9jKGlkKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigoZG9jKSA9PiB7XHJcbiAgICAgIGNvbnN0IGNoYXJhY3RlcnNGcm9tQ2hhcHRlciA9IGRvYy5kYXRhKCkuY2hhcmFjdGVycztcclxuICAgICAgZGIuY29sbGVjdGlvbihcInN0b3JpZXNcIilcclxuICAgICAgICAuZG9jKHN0b3J5SWQpXHJcbiAgICAgICAgLmdldCgpXHJcbiAgICAgICAgLnRoZW4oKHN0b3J5KSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBjaGFyYWN0ZXJzRnJvbVN0b3J5ID0gc3RvcnkuZGF0YSgpLnNlY29uZGFyeUNoYXJhY3RlcnM7XHJcbiAgICAgICAgICBsZXQgbmV3QXJyID0gY2hhcmFjdGVyc0Zyb21TdG9yeS5tYXAoKGMpID0+IHtcclxuICAgICAgICAgICAgaWYgKGNoYXJhY3RlcnNGcm9tQ2hhcHRlci5pbmNsdWRlcyhjLmlkKSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiB7IC4uLmMsIHRpbWVzOiBjLnRpbWVzIC0gMSB9O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHJldHVybiBjO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIG5ld0FyciA9IG5ld0Fyci5maWx0ZXIoKGMpID0+IGMudGltZXMgPiAwKTtcclxuICAgICAgICAgIGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpXHJcbiAgICAgICAgICAgIC5kb2Moc3RvcnlJZClcclxuICAgICAgICAgICAgLnVwZGF0ZSh7IHNlY29uZGFyeUNoYXJhY3RlcnM6IG5ld0FyciB9KVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgZGIuY29sbGVjdGlvbihcImNoYXB0ZXJzXCIpXHJcbiAgICAgICAgICAgICAgICAuZG9jKGlkKVxyXG4gICAgICAgICAgICAgICAgLmRlbGV0ZSgpXHJcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiB0eXBlcy5ERUxFVEVfQ0hBUFRFUixcclxuICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkNoYXB0ZXIgZGVsZXRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmdDaGFwdGVyOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldENoYXB0ZXIgPSAoc3RvcnlJZCwgaWQsIHR5cGUpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpXHJcbiAgICAuZG9jKHN0b3J5SWQpXHJcbiAgICAuZ2V0KClcclxuICAgIC50aGVuKChkb2MpID0+IHtcclxuICAgICAgaWYgKGRvYy5leGlzdHMpIHtcclxuICAgICAgICBkYi5jb2xsZWN0aW9uKFwiY2hhcHRlcnNcIilcclxuICAgICAgICAgIC5kb2MoaWQpXHJcbiAgICAgICAgICAuZ2V0KClcclxuICAgICAgICAgIC50aGVuKChjaGFwKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjaGFwLmV4aXN0cykge1xyXG4gICAgICAgICAgICAgIGlmICh0eXBlID09PSBcInNob3dcIikge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNoYXJhY3RlcnMgPSBbXTtcclxuICAgICAgICAgICAgICAgIGxldCBsb2NhdGlvbnMgPSBbXTtcclxuICAgICAgICAgICAgICAgIGxldCBjaGFyYVF1ZXJ5ID0gW107XHJcbiAgICAgICAgICAgICAgICBsZXQgbG9jUXVlcnkgPSBbXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNoYXJhY3RlcnNJbkNoYXBlciA9IGNoYXAuZGF0YSgpLmNoYXJhY3RlcnM7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhdGlvbnNJbkNoYXBlciA9IGNoYXAuZGF0YSgpLmxvY2F0aW9ucztcclxuICAgICAgICAgICAgICAgIGNoYXJhY3RlcnNJbkNoYXBlci5mb3JFYWNoKChjaGFyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNoYXJhUXVlcnkucHVzaChkYi5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc1wiKS5kb2MoY2hhcikuZ2V0KCkpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbnNJbkNoYXBlci5mb3JFYWNoKChsb2MpID0+IHtcclxuICAgICAgICAgICAgICAgICAgbG9jUXVlcnkucHVzaChkYi5jb2xsZWN0aW9uKFwibG9jYXRpb25zXCIpLmRvYyhsb2MpLmdldCgpKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgY2hhcmFRdWVyeSA9IFByb21pc2UuYWxsKGNoYXJhUXVlcnkpO1xyXG4gICAgICAgICAgICAgICAgbG9jUXVlcnkgPSBQcm9taXNlLmFsbChsb2NRdWVyeSk7XHJcbiAgICAgICAgICAgICAgICBQcm9taXNlLmFsbChbY2hhcmFRdWVyeSwgbG9jUXVlcnldKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgcmVzWzBdLmZvckVhY2goKGMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjaGFyYWN0ZXJzLnB1c2goeyAuLi5jLmRhdGEoKSwgaWQ6IGMuaWQgfSk7XHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICByZXNbMV0uZm9yRWFjaCgobCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9ucy5wdXNoKHsgLi4ubC5kYXRhKCksIGlkOiBsLmlkIH0pO1xyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IHR5cGVzLkdFVF9DSEFQVEVSLFxyXG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGNoYXB0ZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uY2hhcC5kYXRhKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBjaGFwLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJhY3RlcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1YmxpYzogZG9jLmRhdGEoKS5wdWJsaWMsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgY2hhcHRlckV4aXN0czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU6IHR5cGVzLkdFVF9DSEFQVEVSLFxyXG4gICAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hhcHRlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgLi4uY2hhcC5kYXRhKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZDogY2hhcC5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgIHB1YmxpYzogZG9jLmRhdGEoKS5wdWJsaWMsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBjaGFwdGVyRXhpc3RzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IHR5cGVzLkdFVF9DSEFQVEVSLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogeyBjaGFwdGVyRXhpc3RzOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiB0eXBlcy5HRVRfQ0hBUFRFUixcclxuICAgICAgICAgIHBheWxvYWQ6IHsgY2hhcHRlckV4aXN0czogZmFsc2UgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q2hhcHRlcnMgPSAoaWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJjaGFwdGVyc1wiKVxyXG4gICAgLndoZXJlKFwic3RvcnlJZFwiLCBcIj09XCIsIGlkKVxyXG4gICAgLm9yZGVyQnkoXCJudW1iZXJcIiwgXCJhc2NcIilcclxuICAgIC5vblNuYXBzaG90KChkb2NzKSA9PiB7XHJcbiAgICAgIGxldCBhcnIgPSBbXTtcclxuICAgICAgZG9jcy5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgICAgICBhcnIucHVzaCh7XHJcbiAgICAgICAgICBhdXRob3JJZDogZG9jLmRhdGEoKS5hdXRob3JJZCxcclxuICAgICAgICAgIGlkOiBkb2MuaWQsXHJcbiAgICAgICAgICBjcmVhdGVkQXQ6IGRvYy5kYXRhKCkuY3JlYXRlZEF0LFxyXG4gICAgICAgICAgbnVtYmVyOiBkb2MuZGF0YSgpLm51bWJlcixcclxuICAgICAgICAgIHRpdGxlOiBkb2MuZGF0YSgpLnRpdGxlLFxyXG4gICAgICAgICAgY29tbWVudHNDb3VudDogZG9jLmRhdGEoKS5jb21tZW50c0NvdW50LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IHR5cGVzLkdFVF9DSEFQVEVSUyxcclxuICAgICAgICBwYXlsb2FkOiBhcnIsXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG4vLyBMT0NBVElPTlNcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRMb2NhdGlvbiA9IChkYXRhKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBjb25zb2xlLmxvZyhcImNvdWNvdVwiKTtcclxuICBkaXNwYXRjaCh7IHR5cGU6IHR5cGVzLkFERF9MT0NBVElPTiwgcGF5bG9hZDogeyBsb2FkaW5nTG9jOiB0cnVlIH0gfSk7XHJcblxyXG4gIGNvbnN0IGltYWdlTmFtZSA9IGRhdGEubmFtZS50b0xvd2VyQ2FzZSgpLnNwbGl0KFwiIFwiKS5qb2luKFwiX1wiKTtcclxuXHJcbiAgaWYgKHR5cGVvZiBkYXRhLmltYWdlID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICBzdG9yYWdlXHJcbiAgICAgIC5yZWYoYCR7YXV0aC5jdXJyZW50VXNlci51aWR9LyR7aW1hZ2VOYW1lfWApXHJcbiAgICAgIC5wdXQoZGF0YS5pbWFnZSlcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBzdG9yYWdlXHJcbiAgICAgICAgICAucmVmKGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gICAgICAgICAgLmNoaWxkKGltYWdlTmFtZSlcclxuICAgICAgICAgIC5nZXREb3dubG9hZFVSTCgpO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigodXJsKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGRiLmNvbGxlY3Rpb24oXCJsb2NhdGlvbnNcIikuYWRkKHtcclxuICAgICAgICAgIC4uLmRhdGEsXHJcbiAgICAgICAgICBpbWFnZTogdXJsLFxyXG4gICAgICAgICAgY3JlYXRlZEF0OiBmaXJlYmFzZS5maXJlc3RvcmUuRmllbGRWYWx1ZS5zZXJ2ZXJUaW1lc3RhbXAoKSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKHJlcykgPT5cclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiB0eXBlcy5BRERfTE9DQVRJT04sXHJcbiAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiTG9jYXRpb24gYWRkZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICAgIGxvY0lkOiByZXMuaWQsXHJcbiAgICAgICAgICAgIGxvYWRpbmdMb2M6IGZhbHNlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KVxyXG4gICAgICApXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihlcnIubWVzc2FnZSk7XHJcbiAgICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBkYi5jb2xsZWN0aW9uKFwibG9jYXRpb25zXCIpXHJcbiAgICAgIC5hZGQoe1xyXG4gICAgICAgIC4uLmRhdGEsXHJcbiAgICAgICAgY3JlYXRlZEF0OiBmaXJlYmFzZS5maXJlc3RvcmUuRmllbGRWYWx1ZS5zZXJ2ZXJUaW1lc3RhbXAoKSxcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKHJlcykgPT5cclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiB0eXBlcy5BRERfTE9DQVRJT04sXHJcbiAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiTG9jYXRpb24gYWRkZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICAgIGxvY0lkOiByZXMuaWQsXHJcbiAgICAgICAgICAgIGxvYWRpbmdMb2M6IGZhbHNlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KVxyXG4gICAgICApXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihlcnIubWVzc2FnZSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBlZGl0TG9jYXRpb24gPSAoZGF0YSkgPT4gKGRpc3BhdGNoKSA9PiB7fTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRMb2NhdGlvbiA9IChpZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGIuY29sbGVjdGlvbihcImxvY2F0aW9uc1wiKVxyXG4gICAgLmRvYyhpZClcclxuICAgIC5nZXQoKVxyXG4gICAgLnRoZW4oKGRvYykgPT4ge1xyXG4gICAgICBpZiAoZG9jLmV4aXN0cykge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IHR5cGVzLkdFVF9MT0NBVElPTixcclxuICAgICAgICAgIHBheWxvYWQ6IHsgLi4uZG9jLmRhdGEoKSwgaWQ6IGRvYy5pZCB9LFxyXG4gICAgICAgICAgbG9jYXRpb25FeGlzdHM6IHRydWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogdHlwZXMuR0VUX0xPQ0FUSU9OLFxyXG4gICAgICAgICAgbG9jYXRpb25FeGlzdHM6IGZhbHNlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyTG9jYXRpb25zID0gKCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGIuY29sbGVjdGlvbihcImxvY2F0aW9uc1wiKVxyXG4gICAgLndoZXJlKFwiYXV0aG9ySWRcIiwgXCI9PVwiLCBhdXRoLmN1cnJlbnRVc2VyLnVpZClcclxuICAgIC5nZXQoKVxyXG4gICAgLnRoZW4oKGRvY3MpID0+IHtcclxuICAgICAgbGV0IGxvY2F0aW9ucyA9IFtdO1xyXG4gICAgICBkb2NzLmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgICAgIGxvY2F0aW9ucyA9IFsuLi5sb2NhdGlvbnMsIHsgaWQ6IGRvYy5pZCwgLi4uZG9jLmRhdGEoKSB9XTtcclxuICAgICAgfSk7XHJcbiAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiB0eXBlcy5HRVRfVVNFUl9MT0NBVElPTlMsXHJcbiAgICAgICAgcGF5bG9hZDogbG9jYXRpb25zLFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0b3J5TG9jYXRpb25zID0gKHN0b3J5SWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJsb2NhdGlvbnNcIilcclxuICAgIC53aGVyZShcInN0b3J5SWRcIiwgXCI9PVwiLCBzdG9yeUlkKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigoZG9jcykgPT4ge1xyXG4gICAgICBjb25zdCBsb2NhdGlvbnMgPSBkb2NzLmRvY3MubWFwKChkb2MpID0+ICh7IC4uLmRvYy5kYXRhKCksIGlkOiBkb2MuaWQgfSkpO1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogdHlwZXMuR0VUX1NUT1JZX0xPQ0FUSU9OUyxcclxuICAgICAgICBwYXlsb2FkOiBsb2NhdGlvbnMsXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG4vLyBDT01NRU5UU1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldENvbW1lbnRzID0gKGlkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkYi5jb2xsZWN0aW9uKFwiY29tbWVudHNcIilcclxuICAgIC53aGVyZShcImNoYXB0ZXJJZFwiLCBcIj09XCIsIGlkKVxyXG4gICAgLm9yZGVyQnkoXCJjcmVhdGVkQXRcIiwgXCJkZXNjXCIpXHJcbiAgICAub25TbmFwc2hvdCgoc25hcCkgPT4ge1xyXG4gICAgICBsZXQgY29tbWVudHMgPSBzbmFwLmRvY3MubWFwKChjb21tZW50KSA9PiAoe1xyXG4gICAgICAgIC4uLmNvbW1lbnQuZGF0YSgpLFxyXG4gICAgICAgIGlkOiBjb21tZW50LmlkLFxyXG4gICAgICB9KSk7XHJcbiAgICAgIGxldCBxdWVyaWVzID0gW107XHJcbiAgICAgIGNvbW1lbnRzLmZvckVhY2goKGNvbW0pID0+IHtcclxuICAgICAgICBxdWVyaWVzLnB1c2goZGIuY29sbGVjdGlvbihcInVzZXJzXCIpLmRvYyhjb21tLnVzZXJJZCkuZ2V0KCkpO1xyXG4gICAgICB9KTtcclxuICAgICAgUHJvbWlzZS5hbGwocXVlcmllcykudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgY29tbWVudHMgPSBjb21tZW50cy5tYXAoKGNvbW0pID0+ICh7XHJcbiAgICAgICAgICAuLi5jb21tLFxyXG4gICAgICAgICAgdXNlckltYWdlOiByZXMuZmluZCgoZCkgPT4gZC5pZCA9PT0gY29tbS51c2VySWQpLmRhdGEoKS5pbWFnZSxcclxuICAgICAgICB9KSk7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogdHlwZXMuR0VUX0NPTU1FTlRTLFxyXG4gICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICBsb2FkaW5nQ29tbWVudHM6IGZhbHNlLFxyXG4gICAgICAgICAgICBjb21tZW50cyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc3VibWl0Q29tbWVudCA9IChpbmZvKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBpZiAoIWF1dGguY3VycmVudFVzZXIuZW1haWxWZXJpZmllZClcclxuICAgIHJldHVybiBtZXNzYWdlLmVycm9yKFwiWW91IG5lZWQgdG8gdmVyaWZ5IHlvdXIgZW1haWwgZmlyc3RcIik7XHJcbiAgaWYgKCFpbmZvLmNvbnRlbnQpIHJldHVybiBtZXNzYWdlLmVycm9yKFwiQ29udGVudCBtdXN0IG5vdCBiZSBlbXB0eVwiKTtcclxuXHJcbiAgZGIuY29sbGVjdGlvbihcImNvbW1lbnRzXCIpXHJcbiAgICAuYWRkKHtcclxuICAgICAgLi4uaW5mbyxcclxuICAgICAgY3JlYXRlZEF0OiBmaXJlYmFzZS5maXJlc3RvcmUuRmllbGRWYWx1ZS5zZXJ2ZXJUaW1lc3RhbXAoKSxcclxuICAgIH0pXHJcbiAgICAudGhlbigoKSA9PiBtZXNzYWdlLnN1Y2Nlc3MoXCJDb21tZW50IHBvc3RlZCBzdWNjZXNzZnVsbHlcIikpXHJcbiAgICAuY2F0Y2goKGVycikgPT4gbWVzc2FnZS5lcnJvcihlcnIubWVzc2FnZSkpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlbGV0ZUNvbW1lbnQgPSAoaWQpID0+IChkaXNwYXRjaCkgPT4ge307XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=