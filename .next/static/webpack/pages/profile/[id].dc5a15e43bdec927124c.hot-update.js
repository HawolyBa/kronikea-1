webpackHotUpdate_N_E("pages/profile/[id]",{

/***/ "./redux/actions/storiesActions.js":
/*!*****************************************!*\
  !*** ./redux/actions/storiesActions.js ***!
  \*****************************************/
/*! exports provided: getStory, addStory, editStory, deleteStory, getUserStories, getFavoriteStories, isStoryFavorite, addStoryToFavorite, removeStoryFromFavorite, getStoryCharacters, addChapter, editChapter, deleteChapter, getChapter, getChapters, addLocation, editLocation, getLocation, deleteLocation, getUserLocations, getStoryLocations, getComments, submitComment, deleteComment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStory", function() { return getStory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addStory", function() { return addStory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editStory", function() { return editStory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteStory", function() { return deleteStory; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteLocation", function() { return deleteLocation; });
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
              mainArr: doc.data().mainCharacters
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
    var _objectSpread2;

    dispatch({
      type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].ADD_STORY,
      payload: {
        loading: true
      }
    });
    var storyId = "";
    _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("stories").add(_objectSpread(_objectSpread({}, data), {}, (_objectSpread2 = {
      authorId: _fbConfig__WEBPACK_IMPORTED_MODULE_3__["auth"].currentUser.uid,
      authorName: data.authorName,
      oneShot: false,
      banner: typeof data.banner === "string" ? data.banner : "",
      createdAt: firebase_app__WEBPACK_IMPORTED_MODULE_4__["default"].firestore.FieldValue.serverTimestamp(),
      likesCount: 0,
      chaptersCount: 0,
      secondaryCharacters: [],
      secondaryArr: [],
      featured: false,
      note: 0
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread2, "chaptersCount", 0), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread2, "commentsCount", 0), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread2, "lastUpdated", firebase_app__WEBPACK_IMPORTED_MODULE_4__["default"].firestore.FieldValue.serverTimestamp()), _objectSpread2))).then(function (res) {
      storyId = res.id;

      if (typeof data.banner === "object") {
        var imageName = "".concat(res.id, "_").concat(data.title.toLowerCase().split(" ").join("_"));
        _fbConfig__WEBPACK_IMPORTED_MODULE_3__["storage"].ref("".concat(_fbConfig__WEBPACK_IMPORTED_MODULE_3__["auth"].currentUser.uid, "/").concat(imageName)).put(data.banner).then(function () {
          return _fbConfig__WEBPACK_IMPORTED_MODULE_3__["storage"].ref(_fbConfig__WEBPACK_IMPORTED_MODULE_3__["auth"].currentUser.uid).child(imageName).getDownloadURL();
        }).then(function (url) {
          return _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("stories").doc(storyId).update({
            banner: url
          });
        }).then(function () {
          dispatch({
            type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].ADD_STORY,
            payload: {
              message: "Story added successfully",
              storyId: storyId,
              loading: false
            }
          });
        });
      } else {
        dispatch({
          type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].ADD_STORY,
          payload: {
            message: "Story added successfully",
            storyId: storyId,
            loading: false
          }
        });
      }
    })["catch"](function (err) {
      antd__WEBPACK_IMPORTED_MODULE_5__["message"].error(err.message);
    });
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
          banner: url,
          lastUpdated: firebase_app__WEBPACK_IMPORTED_MODULE_4__["default"].firestore.FieldValue.serverTimestamp()
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
      _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("stories").doc(storyId).update(_objectSpread(_objectSpread({}, data), {}, {
        lastUpdated: firebase_app__WEBPACK_IMPORTED_MODULE_4__["default"].firestore.FieldValue.serverTimestamp()
      })).then(function () {
        _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("locations").where("storyId", "==", storyId).get().then(function (docs) {
          var locationQuery = [];
          docs.forEach(function (doc) {
            locationQuery = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(locationQuery), [_fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("locations").doc(doc.id).update({
              storyTitle: data.title
            })]);
          });
          Promise.all(locationQuery).then(function () {
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
var deleteStory = function deleteStory(id) {
  return function (dispatch) {
    dispatch({
      type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].DELETE_STORY,
      payload: {
        loading: true
      }
    });
    var batch = _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].batch();
    batch["delete"](_fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("stories").doc(id));
    var chaptersToDelete = _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("chapters").where("storyId", "==", id).get();
    var likesToDelete = _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("storiesLikes").where("storyId", "==", id).get();
    var locationsToDelete = _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("locations").where("storyId", "==", id).get();
    Promise.all([chaptersToDelete, likesToDelete, locationsToDelete]).then(function (res) {
      res[0].forEach(function (chap) {
        batch["delete"](_fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("chapters").doc(chap.id));
      });
      res[1].forEach(function (like) {
        batch["delete"](_fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("storiesLikes").doc(like.id));
      });
      res[2].forEach(function (loc) {
        batch["delete"](_fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("locations").doc(loc.id));
      });
      batch.commit().then(function () {
        dispatch({
          type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].DELETE_STORY,
          payload: {
            message: "Story deleted successfully",
            loading: true,
            deleted: true
          }
        });
      });
    });
  };
};
var getUserStories = function getUserStories(id, type) {
  return function (dispatch) {
    var userId = id ? id : _fbConfig__WEBPACK_IMPORTED_MODULE_3__["auth"].currentUser.uid;
    _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("stories").where("authorId", "==", userId).orderBy("createdAt", "desc").get().then(function (docs) {
      var items = [];
      docs.forEach(function (doc) {
        items = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(items), [_objectSpread({
          id: doc.id
        }, doc.data())]).filter(function (s) {
          return id ? s["public"] : s;
        });
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
var getFavoriteStories = function getFavoriteStories(id) {
  return function (dispatch) {
    var userId = id ? id : _fbConfig__WEBPACK_IMPORTED_MODULE_3__["auth"].currentUser.uid;
    _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("storiesLikes").where("senderId", "==", userId).orderBy("createdAt", "desc").get().then(function (docs) {
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
    var chapId = "";
    dispatch({
      type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].ADD_CHAPTER,
      payload: {
        loading: true
      }
    });
    return _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("chapters").add(_objectSpread(_objectSpread({}, data), {}, {
      authorId: _fbConfig__WEBPACK_IMPORTED_MODULE_3__["auth"].currentUser.uid,
      commentsCount: 0,
      note: 0,
      voters: [],
      votesCount: 0,
      createdAt: firebase_app__WEBPACK_IMPORTED_MODULE_4__["default"].firestore.FieldValue.serverTimestamp()
    })).then(function (res) {
      chapId = res.id;
      _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("stories").doc(data.storyId).get().then(function (story) {
        _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("stories").doc(data.storyId).update({
          chaptersCount: story.data().chaptersCount + 1,
          secondaryCharacters: secondaryCharacters,
          secondaryArr: secondaryCharacters.map(function (c) {
            return c.id;
          })
        }).then(function () {
          dispatch({
            type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].ADD_CHAPTER,
            payload: {
              message: "Chapter added successfully",
              chapId: chapId,
              loading: false
            }
          });
        });
      });
    });
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
          secondaryCharacters: secondaryCharacters,
          secondaryArr: secondaryCharacters.map(function (c) {
            return c.id;
          })
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
    var batch = _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].batch();
    var commentsToDelete = _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("comments").where("chapterId", "==", id).get();
    var chapter = _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("chapters").doc(id).get();
    var story = _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("stories").doc(storyId).get();
    Promise.all([chapter, story, commentsToDelete]).then(function (res) {
      var charactersFromChapter = res[0].data().characters;
      var charactersFromStory = res[1].data().secondaryCharacters;
      var newArr = charactersFromStory.map(function (c) {
        if (charactersFromChapter.includes(c.id)) {
          return _objectSpread(_objectSpread({}, c), {}, {
            times: c.times - 1
          });
        } else {
          return c;
        }
      }).filter(function (c) {
        return c.times > 0;
      });
      batch.update(_fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("stories").doc(storyId), {
        chaptersCount: res[1].data().chaptersCount - 1,
        secondaryCharacters: newArr,
        secondaryArr: newArr.map(function (c) {
          return c.id;
        })
      });
      res[2].forEach(function (comm) {
        return batch["delete"](_fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("comments").doc(comm.id));
      });
      batch["delete"](_fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("chapters").doc(id));
      batch.commit().then(function () {
        dispatch({
          type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].DELETE_CHAPTER,
          payload: {
            message: "Chapter deleted successfully",
            loadingChapter: false
          }
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
    dispatch({
      type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].ADD_LOCATION,
      payload: {
        loadingLoc: true
      }
    });
    var locId = "";
    _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("locations").add(_objectSpread(_objectSpread({}, data), {}, {
      image: typeof data.image === "string" ? data.image : "",
      createdAt: firebase_app__WEBPACK_IMPORTED_MODULE_4__["default"].firestore.FieldValue.serverTimestamp()
    })).then(function (res) {
      locId = res.id;

      if (typeof data.image === "object") {
        var imageName = "".concat(locId, "_").concat(data.name.toLowerCase().split(" ").join("_"));
        _fbConfig__WEBPACK_IMPORTED_MODULE_3__["storage"].ref("".concat(_fbConfig__WEBPACK_IMPORTED_MODULE_3__["auth"].currentUser.uid, "/").concat(imageName)).put(data.image).then(function () {
          return _fbConfig__WEBPACK_IMPORTED_MODULE_3__["storage"].ref(_fbConfig__WEBPACK_IMPORTED_MODULE_3__["auth"].currentUser.uid).child(imageName).getDownloadURL();
        }).then(function (url) {
          return _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("locations").doc(locId).update({
            image: url
          });
        }).then(function () {
          dispatch({
            type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].ADD_LOCATION,
            payload: {
              message: "Location added successfully",
              locId: res.id,
              loadingLoc: false
            }
          });
        });
      } else {
        dispatch({
          type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].ADD_LOCATION,
          payload: {
            message: "Location added successfully",
            locId: res.id,
            loadingLoc: false
          }
        });
      }
    })["catch"](function (err) {
      antd__WEBPACK_IMPORTED_MODULE_5__["message"].error(err.message);
    });
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
var deleteLocation = function deleteLocation(id, name) {
  return function (dispatch) {
    dispatch({
      type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].DELETE_CHAPTER,
      payload: {
        loading: true
      }
    });
    var batch = _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].batch();
    var imageName = "".concat(id, "_").concat(name.toLowerCase().split(" ").join("_"));
    batch["delete"](_fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("locations").doc(id));
    _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("chapters").where("locations", "array-contains", id).get().then(function (res) {
      res.forEach(function (chap) {
        return batch.update(_fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("chapters").doc(chap.id), {
          locations: chap.data().locations.filter(function (c) {
            return c !== id;
          })
        });
      });
      _fbConfig__WEBPACK_IMPORTED_MODULE_3__["storage"].ref("".concat(_fbConfig__WEBPACK_IMPORTED_MODULE_3__["auth"].currentUser.uid, "/").concat(imageName))["delete"]().then(function () {
        batch.commit().then(function () {
          dispatch({
            type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].DELETE_CHAPTER,
            payload: {
              loading: false,
              message: "Location deleted successfully",
              deleted: true
            }
          });
        });
      })["catch"](function (err) {
        console.log(err);
        batch.commit().then(function () {
          dispatch({
            type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].DELETE_CHAPTER,
            payload: {
              loading: false,
              message: "Location deleted successfully",
              deleted: true
            }
          });
        });
      });
    })["catch"](function (err) {
      return console.log(err);
    });
  };
};
var getUserLocations = function getUserLocations(id) {
  return function (dispatch) {
    var userId = id ? id : _fbConfig__WEBPACK_IMPORTED_MODULE_3__["auth"].currentUser.uid;
    _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("locations").where("authorId", "==", userId).get().then(function (docs) {
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
    var batch = _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].batch();
    var story = _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("stories").doc(info.storyId).get();
    var chapter = _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("chapters").doc(info.chapterId).get();
    Promise.all([story, chapter]).then(function (res) {
      batch.update(_fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("stories").doc(info.storyId), {
        commentsCount: res[0].data().commentsCount + 1
      });
      batch.update(_fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("chapters").doc(info.chapterId), {
        commentsCount: res[1].data().commentsCount + 1
      });
      batch.commit().then(function () {
        _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("comments").add(_objectSpread(_objectSpread({}, info), {}, {
          createdAt: firebase_app__WEBPACK_IMPORTED_MODULE_4__["default"].firestore.FieldValue.serverTimestamp()
        })).then(function () {
          return antd__WEBPACK_IMPORTED_MODULE_5__["message"].success("Comment posted successfully");
        });
      });
    })["catch"](function (err) {
      return antd__WEBPACK_IMPORTED_MODULE_5__["message"].error(err.message);
    });
  };
};
var deleteComment = function deleteComment(id, chapid, storyId) {
  return function (dispatch) {
    var batch = _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].batch();
    var story = _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("stories").doc(storyId).get();
    var chapter = _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("chapters").doc(chapid).get();
    Promise.all([story, chapter]).then(function (res) {
      batch.update(_fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("stories").doc(storyId), {
        commentsCount: res[0].data().commentsCount - 1
      });
      batch.update(_fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("chapters").doc(chapid), {
        commentsCount: res[1].data().commentsCount - 1
      });
      batch.commit().then(function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvYWN0aW9ucy9zdG9yaWVzQWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJnZXRTdG9yeSIsImlkIiwiZGlzcGF0Y2giLCJkYiIsImNvbGxlY3Rpb24iLCJkb2MiLCJnZXQiLCJ0aGVuIiwiZXhpc3RzIiwibWFpbiIsImRhdGEiLCJtYWluQ2hhcmFjdGVycyIsInNlY29uZGFyeSIsInNlY29uZGFyeUNoYXJhY3RlcnMiLCJtYWluQXJyIiwic2Vjb25kYXJ5QXJyIiwibWFpblF1ZXJ5IiwibWFwIiwiYyIsInNlY29uZGFyeVF1ZXJ5IiwibWFpblJlcyIsIlByb21pc2UiLCJhbGwiLCJzZWNvbmRhcnlSZXMiLCJyZXN1bHQiLCJmb3JFYWNoIiwiZG9jdSIsInR5cGUiLCJ0eXBlcyIsIkdFVF9TVE9SWSIsInN0b3J5RXhpc3RzIiwicGF5bG9hZCIsIkRJU1BBVENIX0VSUk9SIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImFkZFN0b3J5IiwiQUREX1NUT1JZIiwibG9hZGluZyIsInN0b3J5SWQiLCJhZGQiLCJhdXRob3JJZCIsImF1dGgiLCJjdXJyZW50VXNlciIsInVpZCIsImF1dGhvck5hbWUiLCJvbmVTaG90IiwiYmFubmVyIiwiY3JlYXRlZEF0IiwiZmlyZWJhc2UiLCJmaXJlc3RvcmUiLCJGaWVsZFZhbHVlIiwic2VydmVyVGltZXN0YW1wIiwibGlrZXNDb3VudCIsImNoYXB0ZXJzQ291bnQiLCJmZWF0dXJlZCIsIm5vdGUiLCJyZXMiLCJpbWFnZU5hbWUiLCJ0aXRsZSIsInRvTG93ZXJDYXNlIiwic3BsaXQiLCJqb2luIiwic3RvcmFnZSIsInJlZiIsInB1dCIsImNoaWxkIiwiZ2V0RG93bmxvYWRVUkwiLCJ1cmwiLCJ1cGRhdGUiLCJtZXNzYWdlIiwiZXJyb3IiLCJlZGl0U3RvcnkiLCJFRElUX1NUT1JZIiwibG9hZGluZ1N0b3J5IiwibGFzdFVwZGF0ZWQiLCJ3aGVyZSIsImRvY3MiLCJsb2NhdGlvblF1ZXJ5Iiwic3RvcnlUaXRsZSIsImRlbGV0ZVN0b3J5IiwiREVMRVRFX1NUT1JZIiwiYmF0Y2giLCJjaGFwdGVyc1RvRGVsZXRlIiwibGlrZXNUb0RlbGV0ZSIsImxvY2F0aW9uc1RvRGVsZXRlIiwiY2hhcCIsImxpa2UiLCJsb2MiLCJjb21taXQiLCJkZWxldGVkIiwiZ2V0VXNlclN0b3JpZXMiLCJ1c2VySWQiLCJvcmRlckJ5IiwiaXRlbXMiLCJmaWx0ZXIiLCJzIiwiR0VUX1VTRVJfU1RPUklFUyIsImdldEZhdm9yaXRlU3RvcmllcyIsImZhdkFyciIsInVzZXJzIiwidXNlciIsImZhdlVzZXJzIiwiR0VUX0ZBVk9SSVRFX1NUT1JJRVMiLCJpc1N0b3J5RmF2b3JpdGUiLCJvblNuYXBzaG90Iiwic25hcHNob3QiLCJhbnN3ZXIiLCJJU19TVE9SWV9GQVZPUklURSIsImxvYWRpbmdGYXYiLCJhZGRTdG9yeVRvRmF2b3JpdGUiLCJ1c2VybmFtZSIsImVtYWlsVmVyaWZpZWQiLCJzZW5kZXIiLCJzZW5kZXJJZCIsInN1Y2Nlc3MiLCJyZW1vdmVTdG9yeUZyb21GYXZvcml0ZSIsImdldFN0b3J5Q2hhcmFjdGVycyIsImFkZENoYXB0ZXIiLCJjaGFwSWQiLCJBRERfQ0hBUFRFUiIsImNvbW1lbnRzQ291bnQiLCJ2b3RlcnMiLCJ2b3Rlc0NvdW50Iiwic3RvcnkiLCJlZGl0Q2hhcHRlciIsImNoYXBpZCIsIkVESVRfQ0hBUFRFUiIsImRlbGV0ZUNoYXB0ZXIiLCJERUxFVEVfQ0hBUFRFUiIsImxvYWRpbmdDaGFwdGVyIiwiY29tbWVudHNUb0RlbGV0ZSIsImNoYXB0ZXIiLCJjaGFyYWN0ZXJzRnJvbUNoYXB0ZXIiLCJjaGFyYWN0ZXJzIiwiY2hhcmFjdGVyc0Zyb21TdG9yeSIsIm5ld0FyciIsImluY2x1ZGVzIiwidGltZXMiLCJjb21tIiwiZ2V0Q2hhcHRlciIsImxvY2F0aW9ucyIsImNoYXJhUXVlcnkiLCJsb2NRdWVyeSIsImNoYXJhY3RlcnNJbkNoYXBlciIsImxvY2F0aW9uc0luQ2hhcGVyIiwiY2hhciIsInB1c2giLCJsIiwiR0VUX0NIQVBURVIiLCJjaGFwdGVyRXhpc3RzIiwiZ2V0Q2hhcHRlcnMiLCJhcnIiLCJudW1iZXIiLCJHRVRfQ0hBUFRFUlMiLCJhZGRMb2NhdGlvbiIsIkFERF9MT0NBVElPTiIsImxvYWRpbmdMb2MiLCJsb2NJZCIsImltYWdlIiwibmFtZSIsImVkaXRMb2NhdGlvbiIsImdldExvY2F0aW9uIiwiR0VUX0xPQ0FUSU9OIiwibG9jYXRpb25FeGlzdHMiLCJkZWxldGVMb2NhdGlvbiIsImdldFVzZXJMb2NhdGlvbnMiLCJHRVRfVVNFUl9MT0NBVElPTlMiLCJnZXRTdG9yeUxvY2F0aW9ucyIsIkdFVF9TVE9SWV9MT0NBVElPTlMiLCJnZXRDb21tZW50cyIsInNuYXAiLCJjb21tZW50cyIsImNvbW1lbnQiLCJxdWVyaWVzIiwidXNlckltYWdlIiwiZmluZCIsImQiLCJHRVRfQ09NTUVOVFMiLCJsb2FkaW5nQ29tbWVudHMiLCJzdWJtaXRDb21tZW50IiwiaW5mbyIsImNvbnRlbnQiLCJjaGFwdGVySWQiLCJkZWxldGVDb21tZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Q0FHQTs7QUFFTyxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxFQUFEO0FBQUEsU0FBUSxVQUFDQyxRQUFELEVBQWM7QUFDNUNDLGdEQUFFLENBQUNDLFVBQUgsQ0FBYyxTQUFkLEVBQ0dDLEdBREgsQ0FDT0osRUFEUCxFQUVHSyxHQUZILEdBR0dDLElBSEgsQ0FHUSxVQUFDRixHQUFELEVBQVM7QUFDYixVQUFJQSxHQUFHLENBQUNHLE1BQVIsRUFBZ0I7QUFDZCxZQUFNQyxJQUFJLEdBQUdKLEdBQUcsQ0FBQ0ssSUFBSixHQUFXQyxjQUF4QjtBQUNBLFlBQU1DLFNBQVMsR0FBR1AsR0FBRyxDQUFDSyxJQUFKLEdBQVdHLG1CQUE3QjtBQUNBLFlBQUlDLE9BQU8sR0FBRyxFQUFkO0FBQ0EsWUFBSUMsWUFBWSxH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QixDQUE4QkosRUFBOUI7QUFDRCxPQUZEO0FBR0QsS0FWRDtBQVdELEdBaEI0QjtBQUFBLENBQXRCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUvW2lkXS5kYzVhMTVlNDNiZGVjOTI3MTI0Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdHlwZXMgfSBmcm9tIFwiLi4vLi4vdXRpbHMvY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IGRiLCBhdXRoLCBzdG9yYWdlIH0gZnJvbSBcIi4uL2ZiQ29uZmlnXCI7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcbmltcG9ydCB7IG1lc3NhZ2UgfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuLy8gU1RPUklFU1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0b3J5ID0gKGlkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKVxyXG4gICAgLmRvYyhpZClcclxuICAgIC5nZXQoKVxyXG4gICAgLnRoZW4oKGRvYykgPT4ge1xyXG4gICAgICBpZiAoZG9jLmV4aXN0cykge1xyXG4gICAgICAgIGNvbnN0IG1haW4gPSBkb2MuZGF0YSgpLm1haW5DaGFyYWN0ZXJzO1xyXG4gICAgICAgIGNvbnN0IHNlY29uZGFyeSA9IGRvYy5kYXRhKCkuc2Vjb25kYXJ5Q2hhcmFjdGVycztcclxuICAgICAgICBsZXQgbWFpbkFyciA9IFtdO1xyXG4gICAgICAgIGxldCBzZWNvbmRhcnlBcnIgPSBbXTtcclxuICAgICAgICBjb25zdCBtYWluUXVlcnkgPSBtYWluLm1hcCgoYykgPT5cclxuICAgICAgICAgIGRiLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzXCIpLmRvYyhjKS5nZXQoKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3Qgc2Vjb25kYXJ5UXVlcnkgPSBzZWNvbmRhcnkubWFwKChjKSA9PlxyXG4gICAgICAgICAgZGIuY29sbGVjdGlvbihcImNoYXJhY3RlcnNcIikuZG9jKGMuaWQpLmdldCgpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBtYWluUmVzID0gUHJvbWlzZS5hbGwobWFpblF1ZXJ5KTtcclxuICAgICAgICBjb25zdCBzZWNvbmRhcnlSZXMgPSBQcm9taXNlLmFsbChzZWNvbmRhcnlRdWVyeSk7XHJcbiAgICAgICAgUHJvbWlzZS5hbGwoW21haW5SZXMsIHNlY29uZGFyeVJlc10pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgcmVzdWx0WzBdLmZvckVhY2goKGRvY3UpID0+IHtcclxuICAgICAgICAgICAgbWFpbkFyciA9IFsuLi5tYWluQXJyLCB7IC4uLmRvY3UuZGF0YSgpLCBpZDogZG9jdS5pZCB9XTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgcmVzdWx0WzFdLmZvckVhY2goKGRvY3UpID0+IHtcclxuICAgICAgICAgICAgc2Vjb25kYXJ5QXJyID0gWy4uLnNlY29uZGFyeUFyciwgeyAuLi5kb2N1LmRhdGEoKSwgaWQ6IGRvY3UuaWQgfV07XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogdHlwZXMuR0VUX1NUT1JZLFxyXG4gICAgICAgICAgICBzdG9yeUV4aXN0czogdHJ1ZSxcclxuICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgIC4uLmRvYy5kYXRhKCksXHJcbiAgICAgICAgICAgICAgaWQ6IGRvYy5pZCxcclxuICAgICAgICAgICAgICBzZWNvbmRhcnlDaGFyYWN0ZXJzOiBzZWNvbmRhcnlBcnIsXHJcbiAgICAgICAgICAgICAgbWFpbkNoYXJhY3RlcnM6IG1haW5BcnIsXHJcbiAgICAgICAgICAgICAgbWFpbkFycjogZG9jLmRhdGEoKS5tYWluQ2hhcmFjdGVycyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IHR5cGVzLkRJU1BBVENIX0VSUk9SLFxyXG4gICAgICAgICAgc3RvcnlFeGlzdHM6IGZhbHNlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFN0b3J5ID0gKGRhdGEpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRpc3BhdGNoKHsgdHlwZTogdHlwZXMuQUREX1NUT1JZLCBwYXlsb2FkOiB7IGxvYWRpbmc6IHRydWUgfSB9KTtcclxuICBsZXQgc3RvcnlJZCA9IFwiXCI7XHJcblxyXG4gIGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpXHJcbiAgICAuYWRkKHtcclxuICAgICAgLi4uZGF0YSxcclxuICAgICAgYXV0aG9ySWQ6IGF1dGguY3VycmVudFVzZXIudWlkLFxyXG4gICAgICBhdXRob3JOYW1lOiBkYXRhLmF1dGhvck5hbWUsXHJcbiAgICAgIG9uZVNob3Q6IGZhbHNlLFxyXG4gICAgICBiYW5uZXI6IHR5cGVvZiBkYXRhLmJhbm5lciA9PT0gXCJzdHJpbmdcIiA/IGRhdGEuYmFubmVyIDogXCJcIixcclxuICAgICAgY3JlYXRlZEF0OiBmaXJlYmFzZS5maXJlc3RvcmUuRmllbGRWYWx1ZS5zZXJ2ZXJUaW1lc3RhbXAoKSxcclxuICAgICAgbGlrZXNDb3VudDogMCxcclxuICAgICAgY2hhcHRlcnNDb3VudDogMCxcclxuICAgICAgc2Vjb25kYXJ5Q2hhcmFjdGVyczogW10sXHJcbiAgICAgIHNlY29uZGFyeUFycjogW10sXHJcbiAgICAgIGZlYXR1cmVkOiBmYWxzZSxcclxuICAgICAgbm90ZTogMCxcclxuICAgICAgY2hhcHRlcnNDb3VudDogMCxcclxuICAgICAgY29tbWVudHNDb3VudDogMCxcclxuICAgICAgbGFzdFVwZGF0ZWQ6IGZpcmViYXNlLmZpcmVzdG9yZS5GaWVsZFZhbHVlLnNlcnZlclRpbWVzdGFtcCgpLFxyXG4gICAgfSlcclxuICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgc3RvcnlJZCA9IHJlcy5pZDtcclxuICAgICAgaWYgKHR5cGVvZiBkYXRhLmJhbm5lciA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgIGNvbnN0IGltYWdlTmFtZSA9IGAke3Jlcy5pZH1fJHtkYXRhLnRpdGxlXHJcbiAgICAgICAgICAudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgICAgLnNwbGl0KFwiIFwiKVxyXG4gICAgICAgICAgLmpvaW4oXCJfXCIpfWA7XHJcbiAgICAgICAgc3RvcmFnZVxyXG4gICAgICAgICAgLnJlZihgJHthdXRoLmN1cnJlbnRVc2VyLnVpZH0vJHtpbWFnZU5hbWV9YClcclxuICAgICAgICAgIC5wdXQoZGF0YS5iYW5uZXIpXHJcbiAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdG9yYWdlXHJcbiAgICAgICAgICAgICAgLnJlZihhdXRoLmN1cnJlbnRVc2VyLnVpZClcclxuICAgICAgICAgICAgICAuY2hpbGQoaW1hZ2VOYW1lKVxyXG4gICAgICAgICAgICAgIC5nZXREb3dubG9hZFVSTCgpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKCh1cmwpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGRiXHJcbiAgICAgICAgICAgICAgLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpXHJcbiAgICAgICAgICAgICAgLmRvYyhzdG9yeUlkKVxyXG4gICAgICAgICAgICAgIC51cGRhdGUoeyBiYW5uZXI6IHVybCB9KTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICB0eXBlOiB0eXBlcy5BRERfU1RPUlksXHJcbiAgICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJTdG9yeSBhZGRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgICAgICAgIHN0b3J5SWQ6IHN0b3J5SWQsXHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IHR5cGVzLkFERF9TVE9SWSxcclxuICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJTdG9yeSBhZGRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgICAgc3RvcnlJZDogc3RvcnlJZCxcclxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgbWVzc2FnZS5lcnJvcihlcnIubWVzc2FnZSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBlZGl0U3RvcnkgPSAoZGF0YSwgc3RvcnlJZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGlzcGF0Y2goeyB0eXBlOiB0eXBlcy5FRElUX1NUT1JZLCBwYXlsb2FkOiB7IGxvYWRpbmdTdG9yeTogdHJ1ZSB9IH0pO1xyXG4gIGNvbnN0IGltYWdlTmFtZSA9IGRhdGEudGl0bGUudG9Mb3dlckNhc2UoKS5zcGxpdChcIiBcIikuam9pbihcIl9cIik7XHJcblxyXG4gIGlmICh0eXBlb2YgZGF0YS5iYW5uZXIgPT09IFwib2JqZWN0XCIpIHtcclxuICAgIHN0b3JhZ2VcclxuICAgICAgLnJlZihgJHthdXRoLmN1cnJlbnRVc2VyLnVpZH0vJHtpbWFnZU5hbWV9YClcclxuICAgICAgLnB1dChkYXRhLmJhbm5lcilcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBzdG9yYWdlXHJcbiAgICAgICAgICAucmVmKGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gICAgICAgICAgLmNoaWxkKGltYWdlTmFtZSlcclxuICAgICAgICAgIC5nZXREb3dubG9hZFVSTCgpO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigodXJsKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGRiXHJcbiAgICAgICAgICAuY29sbGVjdGlvbihcInN0b3JpZXNcIilcclxuICAgICAgICAgIC5kb2Moc3RvcnlJZClcclxuICAgICAgICAgIC51cGRhdGUoe1xyXG4gICAgICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgICAgICBiYW5uZXI6IHVybCxcclxuICAgICAgICAgICAgbGFzdFVwZGF0ZWQ6IGZpcmViYXNlLmZpcmVzdG9yZS5GaWVsZFZhbHVlLnNlcnZlclRpbWVzdGFtcCgpLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICBkYi5jb2xsZWN0aW9uKFwibG9jYXRpb25zXCIpXHJcbiAgICAgICAgICAud2hlcmUoXCJzdG9yeUlkXCIsIFwiPT1cIiwgc3RvcnlJZClcclxuICAgICAgICAgIC5nZXQoKVxyXG4gICAgICAgICAgLnRoZW4oKGRvY3MpID0+IHtcclxuICAgICAgICAgICAgbGV0IGxvY2F0aW9uUXVlcnkgPSBbXTtcclxuICAgICAgICAgICAgZG9jcy5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgICAgICAgICAgICBsb2NhdGlvblF1ZXJ5ID0gW1xyXG4gICAgICAgICAgICAgICAgLi4ubG9jYXRpb25RdWVyeSxcclxuICAgICAgICAgICAgICAgIGRiXHJcbiAgICAgICAgICAgICAgICAgIC5jb2xsZWN0aW9uKFwibG9jYXRpb25zXCIpXHJcbiAgICAgICAgICAgICAgICAgIC5kb2MoZG9jLmlkKVxyXG4gICAgICAgICAgICAgICAgICAudXBkYXRlKHsgc3RvcnlUaXRsZTogZGF0YS50aXRsZSB9KSxcclxuICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgUHJvbWlzZS5hbGwobG9jYXRpb25RdWVyeSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogdHlwZXMuRURJVF9TVE9SWSxcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJTdG9yeSBlZGl0ZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoZXJyLm1lc3NhZ2UpO1xyXG4gICAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgZGIuY29sbGVjdGlvbihcInN0b3JpZXNcIilcclxuICAgICAgLmRvYyhzdG9yeUlkKVxyXG4gICAgICAudXBkYXRlKHtcclxuICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgIGxhc3RVcGRhdGVkOiBmaXJlYmFzZS5maXJlc3RvcmUuRmllbGRWYWx1ZS5zZXJ2ZXJUaW1lc3RhbXAoKSxcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIGRiLmNvbGxlY3Rpb24oXCJsb2NhdGlvbnNcIilcclxuICAgICAgICAgIC53aGVyZShcInN0b3J5SWRcIiwgXCI9PVwiLCBzdG9yeUlkKVxyXG4gICAgICAgICAgLmdldCgpXHJcbiAgICAgICAgICAudGhlbigoZG9jcykgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbG9jYXRpb25RdWVyeSA9IFtdO1xyXG4gICAgICAgICAgICBkb2NzLmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgICAgICAgICAgIGxvY2F0aW9uUXVlcnkgPSBbXHJcbiAgICAgICAgICAgICAgICAuLi5sb2NhdGlvblF1ZXJ5LFxyXG4gICAgICAgICAgICAgICAgZGJcclxuICAgICAgICAgICAgICAgICAgLmNvbGxlY3Rpb24oXCJsb2NhdGlvbnNcIilcclxuICAgICAgICAgICAgICAgICAgLmRvYyhkb2MuaWQpXHJcbiAgICAgICAgICAgICAgICAgIC51cGRhdGUoeyBzdG9yeVRpdGxlOiBkYXRhLnRpdGxlIH0pLFxyXG4gICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBQcm9taXNlLmFsbChsb2NhdGlvblF1ZXJ5KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiB0eXBlcy5FRElUX1NUT1JZLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIlN0b3J5IGVkaXRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihlcnIubWVzc2FnZSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkZWxldGVTdG9yeSA9IChpZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGlzcGF0Y2goeyB0eXBlOiB0eXBlcy5ERUxFVEVfU1RPUlksIHBheWxvYWQ6IHsgbG9hZGluZzogdHJ1ZSB9IH0pO1xyXG4gIGNvbnN0IGJhdGNoID0gZGIuYmF0Y2goKTtcclxuICBiYXRjaC5kZWxldGUoZGIuY29sbGVjdGlvbihcInN0b3JpZXNcIikuZG9jKGlkKSk7XHJcbiAgY29uc3QgY2hhcHRlcnNUb0RlbGV0ZSA9IGRiXHJcbiAgICAuY29sbGVjdGlvbihcImNoYXB0ZXJzXCIpXHJcbiAgICAud2hlcmUoXCJzdG9yeUlkXCIsIFwiPT1cIiwgaWQpXHJcbiAgICAuZ2V0KCk7XHJcbiAgY29uc3QgbGlrZXNUb0RlbGV0ZSA9IGRiXHJcbiAgICAuY29sbGVjdGlvbihcInN0b3JpZXNMaWtlc1wiKVxyXG4gICAgLndoZXJlKFwic3RvcnlJZFwiLCBcIj09XCIsIGlkKVxyXG4gICAgLmdldCgpO1xyXG4gIGNvbnN0IGxvY2F0aW9uc1RvRGVsZXRlID0gZGJcclxuICAgIC5jb2xsZWN0aW9uKFwibG9jYXRpb25zXCIpXHJcbiAgICAud2hlcmUoXCJzdG9yeUlkXCIsIFwiPT1cIiwgaWQpXHJcbiAgICAuZ2V0KCk7XHJcbiAgUHJvbWlzZS5hbGwoW2NoYXB0ZXJzVG9EZWxldGUsIGxpa2VzVG9EZWxldGUsIGxvY2F0aW9uc1RvRGVsZXRlXSkudGhlbihcclxuICAgIChyZXMpID0+IHtcclxuICAgICAgcmVzWzBdLmZvckVhY2goKGNoYXApID0+IHtcclxuICAgICAgICBiYXRjaC5kZWxldGUoZGIuY29sbGVjdGlvbihcImNoYXB0ZXJzXCIpLmRvYyhjaGFwLmlkKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXNbMV0uZm9yRWFjaCgobGlrZSkgPT4ge1xyXG4gICAgICAgIGJhdGNoLmRlbGV0ZShkYi5jb2xsZWN0aW9uKFwic3Rvcmllc0xpa2VzXCIpLmRvYyhsaWtlLmlkKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXNbMl0uZm9yRWFjaCgobG9jKSA9PiB7XHJcbiAgICAgICAgYmF0Y2guZGVsZXRlKGRiLmNvbGxlY3Rpb24oXCJsb2NhdGlvbnNcIikuZG9jKGxvYy5pZCkpO1xyXG4gICAgICB9KTtcclxuICAgICAgYmF0Y2guY29tbWl0KCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogdHlwZXMuREVMRVRFX1NUT1JZLFxyXG4gICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIlN0b3J5IGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICAgIGxvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgIGRlbGV0ZWQ6IHRydWUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFVzZXJTdG9yaWVzID0gKGlkLCB0eXBlKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBjb25zdCB1c2VySWQgPSBpZCA/IGlkIDogYXV0aC5jdXJyZW50VXNlci51aWQ7XHJcbiAgZGIuY29sbGVjdGlvbihcInN0b3JpZXNcIilcclxuICAgIC53aGVyZShcImF1dGhvcklkXCIsIFwiPT1cIiwgdXNlcklkKVxyXG4gICAgLm9yZGVyQnkoXCJjcmVhdGVkQXRcIiwgXCJkZXNjXCIpXHJcbiAgICAuZ2V0KClcclxuICAgIC50aGVuKChkb2NzKSA9PiB7XHJcbiAgICAgIGxldCBpdGVtcyA9IFtdO1xyXG4gICAgICBkb2NzLmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgICAgIGl0ZW1zID0gWy4uLml0ZW1zLCB7IGlkOiBkb2MuaWQsIC4uLmRvYy5kYXRhKCkgfV0uZmlsdGVyKChzKSA9PlxyXG4gICAgICAgICAgaWQgPyBzLnB1YmxpYyA6IHNcclxuICAgICAgICApO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGl0ZW1zO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChpdGVtcykgPT4ge1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IHR5cGVzLkdFVF9VU0VSX1NUT1JJRVMsIHBheWxvYWQ6IGl0ZW1zIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0RmF2b3JpdGVTdG9yaWVzID0gKGlkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBjb25zdCB1c2VySWQgPSBpZCA/IGlkIDogYXV0aC5jdXJyZW50VXNlci51aWQ7XHJcbiAgZGIuY29sbGVjdGlvbihcInN0b3JpZXNMaWtlc1wiKVxyXG4gICAgLndoZXJlKFwic2VuZGVySWRcIiwgXCI9PVwiLCB1c2VySWQpXHJcbiAgICAub3JkZXJCeShcImNyZWF0ZWRBdFwiLCBcImRlc2NcIilcclxuICAgIC5nZXQoKVxyXG4gICAgLnRoZW4oKGRvY3MpID0+IHtcclxuICAgICAgbGV0IGZhdkFyciA9IFtdO1xyXG4gICAgICBkb2NzLmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgICAgIGZhdkFyciA9IFsuLi5mYXZBcnIsIGRvYy5kYXRhKCkuc3RvcnlJZF07XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gZmF2QXJyO1xyXG4gICAgfSlcclxuICAgIC50aGVuKCh1c2VycykgPT4ge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSB1c2Vycy5tYXAoKHVzZXIpID0+XHJcbiAgICAgICAgZGIuY29sbGVjdGlvbihcInN0b3JpZXNcIikuZG9jKHVzZXIpLmdldCgpXHJcbiAgICAgICk7XHJcbiAgICAgIFByb21pc2UuYWxsKHJlc3VsdCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgbGV0IGZhdlVzZXJzID0gW107XHJcbiAgICAgICAgcmVzLmZvckVhY2goXHJcbiAgICAgICAgICAoZG9jKSA9PiAoZmF2VXNlcnMgPSBbLi4uZmF2VXNlcnMsIHsgaWQ6IGRvYy5pZCwgLi4uZG9jLmRhdGEoKSB9XSlcclxuICAgICAgICApO1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IHR5cGVzLkdFVF9GQVZPUklURV9TVE9SSUVTLFxyXG4gICAgICAgICAgcGF5bG9hZDogZmF2VXNlcnMsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgaXNTdG9yeUZhdm9yaXRlID0gKHN0b3J5SWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGlmIChhdXRoLmN1cnJlbnRVc2VyKSB7XHJcbiAgICBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc0xpa2VzXCIpXHJcbiAgICAgIC53aGVyZShcInNlbmRlcklkXCIsIFwiPT1cIiwgYXV0aC5jdXJyZW50VXNlci51aWQpXHJcbiAgICAgIC53aGVyZShcInN0b3J5SWRcIiwgXCI9PVwiLCBzdG9yeUlkKVxyXG4gICAgICAub25TbmFwc2hvdCgoc25hcHNob3QpID0+IHtcclxuICAgICAgICBjb25zdCBhbnN3ZXIgPSBzbmFwc2hvdC5kb2NzWzBdID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgIHJldHVybiBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiB0eXBlcy5JU19TVE9SWV9GQVZPUklURSxcclxuICAgICAgICAgIHBheWxvYWQ6IGFuc3dlcixcclxuICAgICAgICAgIGxvYWRpbmdGYXY6IGZhbHNlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYWRkU3RvcnlUb0Zhdm9yaXRlID0gKGlkLCB1c2VybmFtZSwgc3RvcnlUaXRsZSkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgLy8gaWYgKGlzRmF2b3JpdGUpIHJldHVybiBtZXNzYWdlLndhcm5pbmcoXCJZb3UndmUgYWxyZWFkeSBsaWtlZCB0aGlzIHN0b3J5XCIpO1xyXG4gIGlmICghYXV0aC5jdXJyZW50VXNlcilcclxuICAgIHJldHVybiBtZXNzYWdlLmVycm9yKFwiWW91IG5lZWQgdG8gYmUgbG9nZ2VkIGluIHRvIGxpa2UgYSBzdG9yeVwiKTtcclxuICBpZiAoIWF1dGguY3VycmVudFVzZXIuZW1haWxWZXJpZmllZClcclxuICAgIHJldHVybiBtZXNzYWdlLmVycm9yKFwiWW91IG5lZWQgdG8gdmVyaWZ5IHlvdXIgZW1haWwgZmlyc3RcIik7XHJcblxyXG4gIGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzTGlrZXNcIilcclxuICAgIC5hZGQoe1xyXG4gICAgICBzZW5kZXI6IHVzZXJuYW1lLFxyXG4gICAgICBzZW5kZXJJZDogYXV0aC5jdXJyZW50VXNlci51aWQsXHJcbiAgICAgIHN0b3J5SWQ6IGlkLFxyXG4gICAgICBjcmVhdGVkQXQ6IGZpcmViYXNlLmZpcmVzdG9yZS5GaWVsZFZhbHVlLnNlcnZlclRpbWVzdGFtcCgpLFxyXG4gICAgfSlcclxuICAgIC50aGVuKCgpID0+IG1lc3NhZ2Uuc3VjY2VzcyhgJHtzdG9yeVRpdGxlfSBhZGRlZCB0byB5b3VyIGZhdm9yaXRlc2ApKVxyXG4gICAgLmNhdGNoKChlcnIpID0+IG1lc3NhZ2UuZXJyb3IoXCJUaGVyZSBoYXMgYmVlbiBhIHByb2JsZW1cIikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZVN0b3J5RnJvbUZhdm9yaXRlID0gKGlkLCBzdG9yeVRpdGxlKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc0xpa2VzXCIpXHJcbiAgICAud2hlcmUoXCJzdG9yeUlkXCIsIFwiPT1cIiwgaWQpXHJcbiAgICAud2hlcmUoXCJzZW5kZXJJZFwiLCBcIj09XCIsIGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGIuY29sbGVjdGlvbihcInN0b3JpZXNMaWtlc1wiKS5kb2MoZGF0YS5kb2NzWzBdLmlkKS5kZWxldGUoKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoKSA9PiBtZXNzYWdlLnN1Y2Nlc3MoYCR7c3RvcnlUaXRsZX0gcmVtb3ZlZCBmcm9tIHlvdXIgZmF2b3JpdGVzYCkpXHJcbiAgICAuY2F0Y2goKGVycikgPT4gbWVzc2FnZS5lcnJvcihcIlRoZXJlIGhhcyBiZWVuIGEgcHJvYmxlbVwiKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RvcnlDaGFyYWN0ZXJzID0gKCkgPT4gKGRpc3BhdGNoKSA9PiB7fTtcclxuXHJcbi8vIENIQVBURVJzXHJcblxyXG5leHBvcnQgY29uc3QgYWRkQ2hhcHRlciA9IChkYXRhLCBzZWNvbmRhcnlDaGFyYWN0ZXJzKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBsZXQgY2hhcElkID0gXCJcIjtcclxuICBkaXNwYXRjaCh7IHR5cGU6IHR5cGVzLkFERF9DSEFQVEVSLCBwYXlsb2FkOiB7IGxvYWRpbmc6IHRydWUgfSB9KTtcclxuXHJcbiAgcmV0dXJuIGRiXHJcbiAgICAuY29sbGVjdGlvbihcImNoYXB0ZXJzXCIpXHJcbiAgICAuYWRkKHtcclxuICAgICAgLi4uZGF0YSxcclxuICAgICAgYXV0aG9ySWQ6IGF1dGguY3VycmVudFVzZXIudWlkLFxyXG4gICAgICBjb21tZW50c0NvdW50OiAwLFxyXG4gICAgICBub3RlOiAwLFxyXG4gICAgICB2b3RlcnM6IFtdLFxyXG4gICAgICB2b3Rlc0NvdW50OiAwLFxyXG4gICAgICBjcmVhdGVkQXQ6IGZpcmViYXNlLmZpcmVzdG9yZS5GaWVsZFZhbHVlLnNlcnZlclRpbWVzdGFtcCgpLFxyXG4gICAgfSlcclxuICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgY2hhcElkID0gcmVzLmlkO1xyXG4gICAgICBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKVxyXG4gICAgICAgIC5kb2MoZGF0YS5zdG9yeUlkKVxyXG4gICAgICAgIC5nZXQoKVxyXG4gICAgICAgIC50aGVuKChzdG9yeSkgPT4ge1xyXG4gICAgICAgICAgZGIuY29sbGVjdGlvbihcInN0b3JpZXNcIilcclxuICAgICAgICAgICAgLmRvYyhkYXRhLnN0b3J5SWQpXHJcbiAgICAgICAgICAgIC51cGRhdGUoe1xyXG4gICAgICAgICAgICAgIGNoYXB0ZXJzQ291bnQ6IHN0b3J5LmRhdGEoKS5jaGFwdGVyc0NvdW50ICsgMSxcclxuICAgICAgICAgICAgICBzZWNvbmRhcnlDaGFyYWN0ZXJzOiBzZWNvbmRhcnlDaGFyYWN0ZXJzLFxyXG4gICAgICAgICAgICAgIHNlY29uZGFyeUFycjogc2Vjb25kYXJ5Q2hhcmFjdGVycy5tYXAoKGMpID0+IGMuaWQpLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogdHlwZXMuQUREX0NIQVBURVIsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiQ2hhcHRlciBhZGRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgICAgICAgICAgY2hhcElkOiBjaGFwSWQsXHJcbiAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBlZGl0Q2hhcHRlciA9IChkYXRhLCBzdG9yeUlkLCBjaGFwaWQsIHNlY29uZGFyeUNoYXJhY3RlcnMpID0+IChcclxuICBkaXNwYXRjaFxyXG4pID0+IHtcclxuICBkaXNwYXRjaCh7IHR5cGU6IHR5cGVzLkVESVRfQ0hBUFRFUiwgcGF5bG9hZDogeyBsb2FkaW5nOiB0cnVlIH0gfSk7XHJcbiAgZGIuY29sbGVjdGlvbihcImNoYXB0ZXJzXCIpXHJcbiAgICAuZG9jKGNoYXBpZClcclxuICAgIC51cGRhdGUoeyAuLi5kYXRhIH0pXHJcbiAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgIGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpXHJcbiAgICAgICAgLmRvYyhzdG9yeUlkKVxyXG4gICAgICAgIC5nZXQoKVxyXG4gICAgICAgIC50aGVuKChkb2MpID0+IHtcclxuICAgICAgICAgIGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpXHJcbiAgICAgICAgICAgIC5kb2Moc3RvcnlJZClcclxuICAgICAgICAgICAgLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgc2Vjb25kYXJ5Q2hhcmFjdGVycyxcclxuICAgICAgICAgICAgICBzZWNvbmRhcnlBcnI6IHNlY29uZGFyeUNoYXJhY3RlcnMubWFwKChjKSA9PiBjLmlkKSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IHR5cGVzLkVESVRfQ0hBUFRFUixcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJDaGFwdGVyIGVkaXRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlbGV0ZUNoYXB0ZXIgPSAoaWQsIHN0b3J5SWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRpc3BhdGNoKHsgdHlwZTogdHlwZXMuREVMRVRFX0NIQVBURVIsIHBheWxvYWQ6IHsgbG9hZGluZ0NoYXB0ZXI6IHRydWUgfSB9KTtcclxuICBjb25zdCBiYXRjaCA9IGRiLmJhdGNoKCk7XHJcblxyXG4gIGNvbnN0IGNvbW1lbnRzVG9EZWxldGUgPSBkYlxyXG4gICAgLmNvbGxlY3Rpb24oXCJjb21tZW50c1wiKVxyXG4gICAgLndoZXJlKFwiY2hhcHRlcklkXCIsIFwiPT1cIiwgaWQpXHJcbiAgICAuZ2V0KCk7XHJcbiAgY29uc3QgY2hhcHRlciA9IGRiLmNvbGxlY3Rpb24oXCJjaGFwdGVyc1wiKS5kb2MoaWQpLmdldCgpO1xyXG4gIGNvbnN0IHN0b3J5ID0gZGIuY29sbGVjdGlvbihcInN0b3JpZXNcIikuZG9jKHN0b3J5SWQpLmdldCgpO1xyXG5cclxuICBQcm9taXNlLmFsbChbY2hhcHRlciwgc3RvcnksIGNvbW1lbnRzVG9EZWxldGVdKS50aGVuKChyZXMpID0+IHtcclxuICAgIGNvbnN0IGNoYXJhY3RlcnNGcm9tQ2hhcHRlciA9IHJlc1swXS5kYXRhKCkuY2hhcmFjdGVycztcclxuICAgIGNvbnN0IGNoYXJhY3RlcnNGcm9tU3RvcnkgPSByZXNbMV0uZGF0YSgpLnNlY29uZGFyeUNoYXJhY3RlcnM7XHJcbiAgICBsZXQgbmV3QXJyID0gY2hhcmFjdGVyc0Zyb21TdG9yeVxyXG4gICAgICAubWFwKChjKSA9PiB7XHJcbiAgICAgICAgaWYgKGNoYXJhY3RlcnNGcm9tQ2hhcHRlci5pbmNsdWRlcyhjLmlkKSkge1xyXG4gICAgICAgICAgcmV0dXJuIHsgLi4uYywgdGltZXM6IGMudGltZXMgLSAxIH07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiBjO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmZpbHRlcigoYykgPT4gYy50aW1lcyA+IDApO1xyXG4gICAgYmF0Y2gudXBkYXRlKGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpLmRvYyhzdG9yeUlkKSwge1xyXG4gICAgICBjaGFwdGVyc0NvdW50OiByZXNbMV0uZGF0YSgpLmNoYXB0ZXJzQ291bnQgLSAxLFxyXG4gICAgICBzZWNvbmRhcnlDaGFyYWN0ZXJzOiBuZXdBcnIsXHJcbiAgICAgIHNlY29uZGFyeUFycjogbmV3QXJyLm1hcCgoYykgPT4gYy5pZCksXHJcbiAgICB9KTtcclxuICAgIHJlc1syXS5mb3JFYWNoKChjb21tKSA9PlxyXG4gICAgICBiYXRjaC5kZWxldGUoZGIuY29sbGVjdGlvbihcImNvbW1lbnRzXCIpLmRvYyhjb21tLmlkKSlcclxuICAgICk7XHJcbiAgICBiYXRjaC5kZWxldGUoZGIuY29sbGVjdGlvbihcImNoYXB0ZXJzXCIpLmRvYyhpZCkpO1xyXG4gICAgYmF0Y2guY29tbWl0KCkudGhlbigoKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiB0eXBlcy5ERUxFVEVfQ0hBUFRFUixcclxuICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICBtZXNzYWdlOiBcIkNoYXB0ZXIgZGVsZXRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgIGxvYWRpbmdDaGFwdGVyOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldENoYXB0ZXIgPSAoc3RvcnlJZCwgaWQsIHR5cGUpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpXHJcbiAgICAuZG9jKHN0b3J5SWQpXHJcbiAgICAuZ2V0KClcclxuICAgIC50aGVuKChkb2MpID0+IHtcclxuICAgICAgaWYgKGRvYy5leGlzdHMpIHtcclxuICAgICAgICBkYi5jb2xsZWN0aW9uKFwiY2hhcHRlcnNcIilcclxuICAgICAgICAgIC5kb2MoaWQpXHJcbiAgICAgICAgICAuZ2V0KClcclxuICAgICAgICAgIC50aGVuKChjaGFwKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjaGFwLmV4aXN0cykge1xyXG4gICAgICAgICAgICAgIGlmICh0eXBlID09PSBcInNob3dcIikge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNoYXJhY3RlcnMgPSBbXTtcclxuICAgICAgICAgICAgICAgIGxldCBsb2NhdGlvbnMgPSBbXTtcclxuICAgICAgICAgICAgICAgIGxldCBjaGFyYVF1ZXJ5ID0gW107XHJcbiAgICAgICAgICAgICAgICBsZXQgbG9jUXVlcnkgPSBbXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNoYXJhY3RlcnNJbkNoYXBlciA9IGNoYXAuZGF0YSgpLmNoYXJhY3RlcnM7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhdGlvbnNJbkNoYXBlciA9IGNoYXAuZGF0YSgpLmxvY2F0aW9ucztcclxuICAgICAgICAgICAgICAgIGNoYXJhY3RlcnNJbkNoYXBlci5mb3JFYWNoKChjaGFyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNoYXJhUXVlcnkucHVzaChkYi5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc1wiKS5kb2MoY2hhcikuZ2V0KCkpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbnNJbkNoYXBlci5mb3JFYWNoKChsb2MpID0+IHtcclxuICAgICAgICAgICAgICAgICAgbG9jUXVlcnkucHVzaChkYi5jb2xsZWN0aW9uKFwibG9jYXRpb25zXCIpLmRvYyhsb2MpLmdldCgpKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgY2hhcmFRdWVyeSA9IFByb21pc2UuYWxsKGNoYXJhUXVlcnkpO1xyXG4gICAgICAgICAgICAgICAgbG9jUXVlcnkgPSBQcm9taXNlLmFsbChsb2NRdWVyeSk7XHJcbiAgICAgICAgICAgICAgICBQcm9taXNlLmFsbChbY2hhcmFRdWVyeSwgbG9jUXVlcnldKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgcmVzWzBdLmZvckVhY2goKGMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjaGFyYWN0ZXJzLnB1c2goeyAuLi5jLmRhdGEoKSwgaWQ6IGMuaWQgfSk7XHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICByZXNbMV0uZm9yRWFjaCgobCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9ucy5wdXNoKHsgLi4ubC5kYXRhKCksIGlkOiBsLmlkIH0pO1xyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IHR5cGVzLkdFVF9DSEFQVEVSLFxyXG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGNoYXB0ZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uY2hhcC5kYXRhKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBjaGFwLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJhY3RlcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1YmxpYzogZG9jLmRhdGEoKS5wdWJsaWMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3J5VGl0bGU6IGRvYy5kYXRhKCkudGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgY2hhcHRlckV4aXN0czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU6IHR5cGVzLkdFVF9DSEFQVEVSLFxyXG4gICAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hhcHRlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgLi4uY2hhcC5kYXRhKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZDogY2hhcC5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgIHB1YmxpYzogZG9jLmRhdGEoKS5wdWJsaWMsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBjaGFwdGVyRXhpc3RzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IHR5cGVzLkdFVF9DSEFQVEVSLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogeyBjaGFwdGVyRXhpc3RzOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiB0eXBlcy5HRVRfQ0hBUFRFUixcclxuICAgICAgICAgIHBheWxvYWQ6IHsgY2hhcHRlckV4aXN0czogZmFsc2UgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q2hhcHRlcnMgPSAoaWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJjaGFwdGVyc1wiKVxyXG4gICAgLndoZXJlKFwic3RvcnlJZFwiLCBcIj09XCIsIGlkKVxyXG4gICAgLm9yZGVyQnkoXCJudW1iZXJcIiwgXCJhc2NcIilcclxuICAgIC5vblNuYXBzaG90KChkb2NzKSA9PiB7XHJcbiAgICAgIGxldCBhcnIgPSBbXTtcclxuICAgICAgZG9jcy5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgICAgICBhcnIucHVzaCh7XHJcbiAgICAgICAgICBhdXRob3JJZDogZG9jLmRhdGEoKS5hdXRob3JJZCxcclxuICAgICAgICAgIGlkOiBkb2MuaWQsXHJcbiAgICAgICAgICBjcmVhdGVkQXQ6IGRvYy5kYXRhKCkuY3JlYXRlZEF0LFxyXG4gICAgICAgICAgbnVtYmVyOiBkb2MuZGF0YSgpLm51bWJlcixcclxuICAgICAgICAgIHRpdGxlOiBkb2MuZGF0YSgpLnRpdGxlLFxyXG4gICAgICAgICAgY29tbWVudHNDb3VudDogZG9jLmRhdGEoKS5jb21tZW50c0NvdW50LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IHR5cGVzLkdFVF9DSEFQVEVSUyxcclxuICAgICAgICBwYXlsb2FkOiBhcnIsXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG4vLyBMT0NBVElPTlNcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRMb2NhdGlvbiA9IChkYXRhKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkaXNwYXRjaCh7IHR5cGU6IHR5cGVzLkFERF9MT0NBVElPTiwgcGF5bG9hZDogeyBsb2FkaW5nTG9jOiB0cnVlIH0gfSk7XHJcbiAgbGV0IGxvY0lkID0gXCJcIjtcclxuXHJcbiAgZGIuY29sbGVjdGlvbihcImxvY2F0aW9uc1wiKVxyXG4gICAgLmFkZCh7XHJcbiAgICAgIC4uLmRhdGEsXHJcbiAgICAgIGltYWdlOiB0eXBlb2YgZGF0YS5pbWFnZSA9PT0gXCJzdHJpbmdcIiA/IGRhdGEuaW1hZ2UgOiBcIlwiLFxyXG4gICAgICBjcmVhdGVkQXQ6IGZpcmViYXNlLmZpcmVzdG9yZS5GaWVsZFZhbHVlLnNlcnZlclRpbWVzdGFtcCgpLFxyXG4gICAgfSlcclxuICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgbG9jSWQgPSByZXMuaWQ7XHJcbiAgICAgIGlmICh0eXBlb2YgZGF0YS5pbWFnZSA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgIGNvbnN0IGltYWdlTmFtZSA9IGAke2xvY0lkfV8ke2RhdGEubmFtZVxyXG4gICAgICAgICAgLnRvTG93ZXJDYXNlKClcclxuICAgICAgICAgIC5zcGxpdChcIiBcIilcclxuICAgICAgICAgIC5qb2luKFwiX1wiKX1gO1xyXG4gICAgICAgIHN0b3JhZ2VcclxuICAgICAgICAgIC5yZWYoYCR7YXV0aC5jdXJyZW50VXNlci51aWR9LyR7aW1hZ2VOYW1lfWApXHJcbiAgICAgICAgICAucHV0KGRhdGEuaW1hZ2UpXHJcbiAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdG9yYWdlXHJcbiAgICAgICAgICAgICAgLnJlZihhdXRoLmN1cnJlbnRVc2VyLnVpZClcclxuICAgICAgICAgICAgICAuY2hpbGQoaW1hZ2VOYW1lKVxyXG4gICAgICAgICAgICAgIC5nZXREb3dubG9hZFVSTCgpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKCh1cmwpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGRiLmNvbGxlY3Rpb24oXCJsb2NhdGlvbnNcIikuZG9jKGxvY0lkKS51cGRhdGUoeyBpbWFnZTogdXJsIH0pO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgIHR5cGU6IHR5cGVzLkFERF9MT0NBVElPTixcclxuICAgICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkxvY2F0aW9uIGFkZGVkIHN1Y2Nlc3NmdWxseVwiLFxyXG4gICAgICAgICAgICAgICAgbG9jSWQ6IHJlcy5pZCxcclxuICAgICAgICAgICAgICAgIGxvYWRpbmdMb2M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogdHlwZXMuQUREX0xPQ0FUSU9OLFxyXG4gICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkxvY2F0aW9uIGFkZGVkIHN1Y2Nlc3NmdWxseVwiLFxyXG4gICAgICAgICAgICBsb2NJZDogcmVzLmlkLFxyXG4gICAgICAgICAgICBsb2FkaW5nTG9jOiBmYWxzZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBtZXNzYWdlLmVycm9yKGVyci5tZXNzYWdlKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGVkaXRMb2NhdGlvbiA9IChkYXRhKSA9PiAoZGlzcGF0Y2gpID0+IHt9O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldExvY2F0aW9uID0gKGlkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkYi5jb2xsZWN0aW9uKFwibG9jYXRpb25zXCIpXHJcbiAgICAuZG9jKGlkKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigoZG9jKSA9PiB7XHJcbiAgICAgIGlmIChkb2MuZXhpc3RzKSB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogdHlwZXMuR0VUX0xPQ0FUSU9OLFxyXG4gICAgICAgICAgcGF5bG9hZDogeyAuLi5kb2MuZGF0YSgpLCBpZDogZG9jLmlkIH0sXHJcbiAgICAgICAgICBsb2NhdGlvbkV4aXN0czogdHJ1ZSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiB0eXBlcy5HRVRfTE9DQVRJT04sXHJcbiAgICAgICAgICBsb2NhdGlvbkV4aXN0czogZmFsc2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlbGV0ZUxvY2F0aW9uID0gKGlkLCBuYW1lKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkaXNwYXRjaCh7IHR5cGU6IHR5cGVzLkRFTEVURV9DSEFQVEVSLCBwYXlsb2FkOiB7IGxvYWRpbmc6IHRydWUgfSB9KTtcclxuICBjb25zdCBiYXRjaCA9IGRiLmJhdGNoKCk7XHJcbiAgY29uc3QgaW1hZ2VOYW1lID0gYCR7aWR9XyR7bmFtZS50b0xvd2VyQ2FzZSgpLnNwbGl0KFwiIFwiKS5qb2luKFwiX1wiKX1gO1xyXG5cclxuICBiYXRjaC5kZWxldGUoZGIuY29sbGVjdGlvbihcImxvY2F0aW9uc1wiKS5kb2MoaWQpKTtcclxuICBkYi5jb2xsZWN0aW9uKFwiY2hhcHRlcnNcIilcclxuICAgIC53aGVyZShcImxvY2F0aW9uc1wiLCBcImFycmF5LWNvbnRhaW5zXCIsIGlkKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIHJlcy5mb3JFYWNoKChjaGFwKSA9PlxyXG4gICAgICAgIGJhdGNoLnVwZGF0ZShkYi5jb2xsZWN0aW9uKFwiY2hhcHRlcnNcIikuZG9jKGNoYXAuaWQpLCB7XHJcbiAgICAgICAgICBsb2NhdGlvbnM6IGNoYXAuZGF0YSgpLmxvY2F0aW9ucy5maWx0ZXIoKGMpID0+IGMgIT09IGlkKSxcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG5cclxuICAgICAgc3RvcmFnZVxyXG4gICAgICAgIC5yZWYoYCR7YXV0aC5jdXJyZW50VXNlci51aWR9LyR7aW1hZ2VOYW1lfWApXHJcbiAgICAgICAgLmRlbGV0ZSgpXHJcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgYmF0Y2guY29tbWl0KCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICB0eXBlOiB0eXBlcy5ERUxFVEVfQ0hBUFRFUixcclxuICAgICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiTG9jYXRpb24gZGVsZXRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgICAgICAgIGRlbGV0ZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgYmF0Y2guY29tbWl0KCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICB0eXBlOiB0eXBlcy5ERUxFVEVfQ0hBUFRFUixcclxuICAgICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiTG9jYXRpb24gZGVsZXRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgICAgICAgIGRlbGV0ZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VXNlckxvY2F0aW9ucyA9IChpZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgY29uc3QgdXNlcklkID0gaWQgPyBpZCA6IGF1dGguY3VycmVudFVzZXIudWlkO1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJsb2NhdGlvbnNcIilcclxuICAgIC53aGVyZShcImF1dGhvcklkXCIsIFwiPT1cIiwgdXNlcklkKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigoZG9jcykgPT4ge1xyXG4gICAgICBsZXQgbG9jYXRpb25zID0gW107XHJcbiAgICAgIGRvY3MuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICAgICAgbG9jYXRpb25zID0gWy4uLmxvY2F0aW9ucywgeyBpZDogZG9jLmlkLCAuLi5kb2MuZGF0YSgpIH1dO1xyXG4gICAgICB9KTtcclxuICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IHR5cGVzLkdFVF9VU0VSX0xPQ0FUSU9OUyxcclxuICAgICAgICBwYXlsb2FkOiBsb2NhdGlvbnMsXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RvcnlMb2NhdGlvbnMgPSAoc3RvcnlJZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGIuY29sbGVjdGlvbihcImxvY2F0aW9uc1wiKVxyXG4gICAgLndoZXJlKFwic3RvcnlJZFwiLCBcIj09XCIsIHN0b3J5SWQpXHJcbiAgICAuZ2V0KClcclxuICAgIC50aGVuKChkb2NzKSA9PiB7XHJcbiAgICAgIGNvbnN0IGxvY2F0aW9ucyA9IGRvY3MuZG9jcy5tYXAoKGRvYykgPT4gKHsgLi4uZG9jLmRhdGEoKSwgaWQ6IGRvYy5pZCB9KSk7XHJcbiAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiB0eXBlcy5HRVRfU1RPUllfTE9DQVRJT05TLFxyXG4gICAgICAgIHBheWxvYWQ6IGxvY2F0aW9ucyxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbi8vIENPTU1FTlRTXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q29tbWVudHMgPSAoaWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJjb21tZW50c1wiKVxyXG4gICAgLndoZXJlKFwiY2hhcHRlcklkXCIsIFwiPT1cIiwgaWQpXHJcbiAgICAub3JkZXJCeShcImNyZWF0ZWRBdFwiLCBcImRlc2NcIilcclxuICAgIC5vblNuYXBzaG90KChzbmFwKSA9PiB7XHJcbiAgICAgIGxldCBjb21tZW50cyA9IHNuYXAuZG9jcy5tYXAoKGNvbW1lbnQpID0+ICh7XHJcbiAgICAgICAgLi4uY29tbWVudC5kYXRhKCksXHJcbiAgICAgICAgaWQ6IGNvbW1lbnQuaWQsXHJcbiAgICAgIH0pKTtcclxuICAgICAgbGV0IHF1ZXJpZXMgPSBbXTtcclxuICAgICAgY29tbWVudHMuZm9yRWFjaCgoY29tbSkgPT4ge1xyXG4gICAgICAgIHF1ZXJpZXMucHVzaChkYi5jb2xsZWN0aW9uKFwidXNlcnNcIikuZG9jKGNvbW0udXNlcklkKS5nZXQoKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBQcm9taXNlLmFsbChxdWVyaWVzKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBjb21tZW50cyA9IGNvbW1lbnRzLm1hcCgoY29tbSkgPT4gKHtcclxuICAgICAgICAgIC4uLmNvbW0sXHJcbiAgICAgICAgICB1c2VySW1hZ2U6IHJlcy5maW5kKChkKSA9PiBkLmlkID09PSBjb21tLnVzZXJJZCkuZGF0YSgpLmltYWdlLFxyXG4gICAgICAgIH0pKTtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiB0eXBlcy5HRVRfQ09NTUVOVFMsXHJcbiAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgIGxvYWRpbmdDb21tZW50czogZmFsc2UsXHJcbiAgICAgICAgICAgIGNvbW1lbnRzLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzdWJtaXRDb21tZW50ID0gKGluZm8pID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGlmICghYXV0aC5jdXJyZW50VXNlci5lbWFpbFZlcmlmaWVkKVxyXG4gICAgcmV0dXJuIG1lc3NhZ2UuZXJyb3IoXCJZb3UgbmVlZCB0byB2ZXJpZnkgeW91ciBlbWFpbCBmaXJzdFwiKTtcclxuICBpZiAoIWluZm8uY29udGVudCkgcmV0dXJuIG1lc3NhZ2UuZXJyb3IoXCJDb250ZW50IG11c3Qgbm90IGJlIGVtcHR5XCIpO1xyXG5cclxuICBjb25zdCBiYXRjaCA9IGRiLmJhdGNoKCk7XHJcbiAgY29uc3Qgc3RvcnkgPSBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKS5kb2MoaW5mby5zdG9yeUlkKS5nZXQoKTtcclxuICBjb25zdCBjaGFwdGVyID0gZGIuY29sbGVjdGlvbihcImNoYXB0ZXJzXCIpLmRvYyhpbmZvLmNoYXB0ZXJJZCkuZ2V0KCk7XHJcblxyXG4gIFByb21pc2UuYWxsKFtzdG9yeSwgY2hhcHRlcl0pXHJcbiAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIGJhdGNoLnVwZGF0ZShkYi5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKS5kb2MoaW5mby5zdG9yeUlkKSwge1xyXG4gICAgICAgIGNvbW1lbnRzQ291bnQ6IHJlc1swXS5kYXRhKCkuY29tbWVudHNDb3VudCArIDEsXHJcbiAgICAgIH0pO1xyXG4gICAgICBiYXRjaC51cGRhdGUoZGIuY29sbGVjdGlvbihcImNoYXB0ZXJzXCIpLmRvYyhpbmZvLmNoYXB0ZXJJZCksIHtcclxuICAgICAgICBjb21tZW50c0NvdW50OiByZXNbMV0uZGF0YSgpLmNvbW1lbnRzQ291bnQgKyAxLFxyXG4gICAgICB9KTtcclxuICAgICAgYmF0Y2guY29tbWl0KCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgZGIuY29sbGVjdGlvbihcImNvbW1lbnRzXCIpXHJcbiAgICAgICAgICAuYWRkKHtcclxuICAgICAgICAgICAgLi4uaW5mbyxcclxuICAgICAgICAgICAgY3JlYXRlZEF0OiBmaXJlYmFzZS5maXJlc3RvcmUuRmllbGRWYWx1ZS5zZXJ2ZXJUaW1lc3RhbXAoKSxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbigoKSA9PiBtZXNzYWdlLnN1Y2Nlc3MoXCJDb21tZW50IHBvc3RlZCBzdWNjZXNzZnVsbHlcIikpO1xyXG4gICAgICB9KTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4gbWVzc2FnZS5lcnJvcihlcnIubWVzc2FnZSkpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlbGV0ZUNvbW1lbnQgPSAoaWQsIGNoYXBpZCwgc3RvcnlJZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgY29uc3QgYmF0Y2ggPSBkYi5iYXRjaCgpO1xyXG4gIGNvbnN0IHN0b3J5ID0gZGIuY29sbGVjdGlvbihcInN0b3JpZXNcIikuZG9jKHN0b3J5SWQpLmdldCgpO1xyXG4gIGNvbnN0IGNoYXB0ZXIgPSBkYi5jb2xsZWN0aW9uKFwiY2hhcHRlcnNcIikuZG9jKGNoYXBpZCkuZ2V0KCk7XHJcblxyXG4gIFByb21pc2UuYWxsKFtzdG9yeSwgY2hhcHRlcl0pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgYmF0Y2gudXBkYXRlKGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpLmRvYyhzdG9yeUlkKSwge1xyXG4gICAgICBjb21tZW50c0NvdW50OiByZXNbMF0uZGF0YSgpLmNvbW1lbnRzQ291bnQgLSAxLFxyXG4gICAgfSk7XHJcbiAgICBiYXRjaC51cGRhdGUoZGIuY29sbGVjdGlvbihcImNoYXB0ZXJzXCIpLmRvYyhjaGFwaWQpLCB7XHJcbiAgICAgIGNvbW1lbnRzQ291bnQ6IHJlc1sxXS5kYXRhKCkuY29tbWVudHNDb3VudCAtIDEsXHJcbiAgICB9KTtcclxuICAgIGJhdGNoLmNvbW1pdCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICBkYi5jb2xsZWN0aW9uKFwiY29tbWVudHNcIikuZG9jKGlkKS5kZWxldGUoKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9