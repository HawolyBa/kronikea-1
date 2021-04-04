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
    console.log(id);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvYWN0aW9ucy9zdG9yaWVzQWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJnZXRTdG9yeSIsImlkIiwiZGlzcGF0Y2giLCJkYiIsImNvbGxlY3Rpb24iLCJkb2MiLCJnZXQiLCJ0aGVuIiwiZXhpc3RzIiwibWFpbiIsImRhdGEiLCJtYWluQ2hhcmFjdGVycyIsInNlY29uZGFyeSIsInNlY29uZGFyeUNoYXJhY3RlcnMiLCJtYWluQXJyIiwic2Vjb25kYXJ5QXJyIiwibWFpblF1ZXJ5IiwibWFwIiwiYyIsInNlY29uZGFyeVF1ZXJ5IiwibWFpblJlcyIsIlByb21pc2UiLCJhbGwiLCJzZWNvbmRhcnlSZXMiLCJyZXN1bHQiLCJmb3JFYWNoIiwiZG9jdSIsInR5cGUiLCJ0eXBlcyIsIkdFVF9TVE9SWSIsInN0b3J5RXhpc3RzIiwicGF5bG9hZCIsIkRJU1BBVENIX0VSUk9SIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImFkZFN0b3J5IiwiQUREX1NUT1JZIiwibG9hZGluZyIsInN0b3J5SWQiLCJhZGQiLCJhdXRob3JJZCIsImF1dGgiLCJjdXJyZW50VXNlciIsInVpZCIsImF1dGhvck5hbWUiLCJvbmVTaG90IiwiYmFubmVyIiwiY3JlYXRlZEF0IiwiZmlyZWJhc2UiLCJmaXJlc3RvcmUiLCJGaWVsZFZhbHVlIiwic2VydmVyVGltZXN0YW1wIiwibGlrZXNDb3VudCIsImNoYXB0ZXJzQ291bnQiLCJmZWF0dXJlZCIsIm5vdGUiLCJyZXMiLCJpbWFnZU5hbWUiLCJ0aXRsZSIsInRvTG93ZXJDYXNlIiwic3BsaXQiLCJqb2luIiwic3RvcmFnZSIsInJlZiIsInB1dCIsImNoaWxkIiwiZ2V0RG93bmxvYWRVUkwiLCJ1cmwiLCJ1cGRhdGUiLCJtZXNzYWdlIiwiZXJyb3IiLCJlZGl0U3RvcnkiLCJFRElUX1NUT1JZIiwibG9hZGluZ1N0b3J5IiwibGFzdFVwZGF0ZWQiLCJ3aGVyZSIsImRvY3MiLCJsb2NhdGlvblF1ZXJ5Iiwic3RvcnlUaXRsZSIsImRlbGV0ZVN0b3J5IiwiREVMRVRFX1NUT1JZIiwiYmF0Y2giLCJjaGFwdGVyc1RvRGVsZXRlIiwibGlrZXNUb0RlbGV0ZSIsImxvY2F0aW9uc1RvRGVsZXRlIiwiY2hhcCIsImxpa2UiLCJsb2MiLCJjb21taXQiLCJkZWxldGVkIiwiZ2V0VXNlclN0b3JpZXMiLCJ1c2VySWQiLCJvcmRlckJ5IiwiaXRlbXMiLCJmaWx0ZXIiLCJzIiwiR0VUX1VTRVJfU1RPUklFUyIsImdldEZhdm9yaXRlU3RvcmllcyIsImZhdkFyciIsInVzZXJzIiwidXNlciIsImZhdlVzZXJzIiwiR0VUX0ZBVk9SSVRFX1NUT1JJRVMiLCJpc1N0b3J5RmF2b3JpdGUiLCJvblNuYXBzaG90Iiwic25hcHNob3QiLCJhbnN3ZXIiLCJJU19TVE9SWV9GQVZPUklURSIsImxvYWRpbmdGYXYiLCJhZGRTdG9yeVRvRmF2b3JpdGUiLCJ1c2VybmFtZSIsImVtYWlsVmVyaWZpZWQiLCJzZW5kZXIiLCJzZW5kZXJJZCIsInN1Y2Nlc3MiLCJyZW1vdmVTdG9yeUZyb21GYXZvcml0ZSIsImdldFN0b3J5Q2hhcmFjdGVycyIsImFkZENoYXB0ZXIiLCJjaGFwSWQiLCJBRERfQ0hBUFRFUiIsImNvbW1lbnRzQ291bnQiLCJ2b3RlcnMiLCJ2b3Rlc0NvdW50Iiwic3RvcnkiLCJlZGl0Q2hhcHRlciIsImNoYXBpZCIsIkVESVRfQ0hBUFRFUiIsImRlbGV0ZUNoYXB0ZXIiLCJERUxFVEVfQ0hBUFRFUiIsImxvYWRpbmdDaGFwdGVyIiwiY29tbWVudHNUb0RlbGV0ZSIsImNoYXB0ZXIiLCJjaGFyYWN0ZXJzRnJvbUNoYXB0ZXIiLCJjaGFyYWN0ZXJzIiwiY2hhcmFjdGVyc0Zyb21TdG9yeSIsIm5ld0FyciIsImluY2x1ZGVzIiwidGltZXMiLCJjb21tIiwiZ2V0Q2hhcHRlciIsImxvY2F0aW9ucyIsImNoYXJhUXVlcnkiLCJsb2NRdWVyeSIsImNoYXJhY3RlcnNJbkNoYXBlciIsImxvY2F0aW9uc0luQ2hhcGVyIiwiY2hhciIsInB1c2giLCJsIiwiR0VUX0NIQVBURVIiLCJjaGFwdGVyRXhpc3RzIiwiZ2V0Q2hhcHRlcnMiLCJhcnIiLCJudW1iZXIiLCJHRVRfQ0hBUFRFUlMiLCJhZGRMb2NhdGlvbiIsIkFERF9MT0NBVElPTiIsImxvYWRpbmdMb2MiLCJsb2NJZCIsImltYWdlIiwibmFtZSIsImVkaXRMb2NhdGlvbiIsImdldExvY2F0aW9uIiwiR0VUX0xPQ0FUSU9OIiwibG9jYXRpb25FeGlzdHMiLCJkZWxldGVMb2NhdGlvbiIsImdldFVzZXJMb2NhdGlvbnMiLCJHRVRfVVNFUl9MT0NBVElPTlMiLCJnZXRTdG9yeUxvY2F0aW9ucyIsIkdFVF9TVE9SWV9MT0NBVElPTlMiLCJnZXRDb21tZW50cyIsInNuYXAiLCJjb21tZW50cyIsImNvbW1lbnQiLCJxdWVyaWVzIiwidXNlckltYWdlIiwiZmluZCIsImQiLCJHRVRfQ09NTUVOVFMiLCJsb2FkaW5nQ29tbWVudHMiLCJzdWJtaXRDb21tZW50IiwiaW5mbyIsImNvbnRlbnQiLCJjaGFwdGVySWQiLCJkZWxldGVDb21tZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Q0FHQTs7QUFFTyxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxFQUFEO0FBQUEsU0FBUSxVQUFDQyxRQUFELEVBQWM7QUFDNUNDLGdEQUFFLENBQUNDLFVBQUgsQ0FBYyxTQUFkLEVBQ0dDLEdBREgsQ0FDT0osRUFEUCxFQUVHSyxHQUZILEdBR0dDLElBSEgsQ0FHUSxVQUFDRixHQUFELEVBQVM7QUFDYixVQUFJQSxHQUFHLENBQUNHLE1BQVIsRUFBZ0I7QUFDZCxZQUFNQyxJQUFJLEdBQUdKLEdBQUcsQ0FBQ0ssSUFBSixHQUFXQyxjQUF4QjtBQUNBLFlBQU1DLFNBQVMsR0FBR1AsR0FBRyxDQUFDSyxJQUFKLEdBQVdHLG1CQUE3QjtBQUNBLFlBQUlDLE9BQU8sR0FBRyxFQUFkO0FBQ0EsWUFBSUMsWUFBWSxH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LENBQUNDLFVBQUgsQ0FBYyxVQUFkLEVBQTBCQyxHQUExQixDQUE4QkosRUFBOUI7QUFDRCxPQUZEO0FBR0QsS0FWRDtBQVdELEdBaEI0QjtBQUFBLENBQXRCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUvW2lkXS44ZmVlN2QxNDkwODI2M2VmMjg4Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdHlwZXMgfSBmcm9tIFwiLi4vLi4vdXRpbHMvY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IGRiLCBhdXRoLCBzdG9yYWdlIH0gZnJvbSBcIi4uL2ZiQ29uZmlnXCI7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcbmltcG9ydCB7IG1lc3NhZ2UgfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuLy8gU1RPUklFU1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0b3J5ID0gKGlkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKVxyXG4gICAgLmRvYyhpZClcclxuICAgIC5nZXQoKVxyXG4gICAgLnRoZW4oKGRvYykgPT4ge1xyXG4gICAgICBpZiAoZG9jLmV4aXN0cykge1xyXG4gICAgICAgIGNvbnN0IG1haW4gPSBkb2MuZGF0YSgpLm1haW5DaGFyYWN0ZXJzO1xyXG4gICAgICAgIGNvbnN0IHNlY29uZGFyeSA9IGRvYy5kYXRhKCkuc2Vjb25kYXJ5Q2hhcmFjdGVycztcclxuICAgICAgICBsZXQgbWFpbkFyciA9IFtdO1xyXG4gICAgICAgIGxldCBzZWNvbmRhcnlBcnIgPSBbXTtcclxuICAgICAgICBjb25zdCBtYWluUXVlcnkgPSBtYWluLm1hcCgoYykgPT5cclxuICAgICAgICAgIGRiLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzXCIpLmRvYyhjKS5nZXQoKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3Qgc2Vjb25kYXJ5UXVlcnkgPSBzZWNvbmRhcnkubWFwKChjKSA9PlxyXG4gICAgICAgICAgZGIuY29sbGVjdGlvbihcImNoYXJhY3RlcnNcIikuZG9jKGMuaWQpLmdldCgpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBtYWluUmVzID0gUHJvbWlzZS5hbGwobWFpblF1ZXJ5KTtcclxuICAgICAgICBjb25zdCBzZWNvbmRhcnlSZXMgPSBQcm9taXNlLmFsbChzZWNvbmRhcnlRdWVyeSk7XHJcbiAgICAgICAgUHJvbWlzZS5hbGwoW21haW5SZXMsIHNlY29uZGFyeVJlc10pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgcmVzdWx0WzBdLmZvckVhY2goKGRvY3UpID0+IHtcclxuICAgICAgICAgICAgbWFpbkFyciA9IFsuLi5tYWluQXJyLCB7IC4uLmRvY3UuZGF0YSgpLCBpZDogZG9jdS5pZCB9XTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgcmVzdWx0WzFdLmZvckVhY2goKGRvY3UpID0+IHtcclxuICAgICAgICAgICAgc2Vjb25kYXJ5QXJyID0gWy4uLnNlY29uZGFyeUFyciwgeyAuLi5kb2N1LmRhdGEoKSwgaWQ6IGRvY3UuaWQgfV07XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogdHlwZXMuR0VUX1NUT1JZLFxyXG4gICAgICAgICAgICBzdG9yeUV4aXN0czogdHJ1ZSxcclxuICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgIC4uLmRvYy5kYXRhKCksXHJcbiAgICAgICAgICAgICAgaWQ6IGRvYy5pZCxcclxuICAgICAgICAgICAgICBzZWNvbmRhcnlDaGFyYWN0ZXJzOiBzZWNvbmRhcnlBcnIsXHJcbiAgICAgICAgICAgICAgbWFpbkNoYXJhY3RlcnM6IG1haW5BcnIsXHJcbiAgICAgICAgICAgICAgbWFpbkFycjogZG9jLmRhdGEoKS5tYWluQ2hhcmFjdGVycyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IHR5cGVzLkRJU1BBVENIX0VSUk9SLFxyXG4gICAgICAgICAgc3RvcnlFeGlzdHM6IGZhbHNlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFN0b3J5ID0gKGRhdGEpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRpc3BhdGNoKHsgdHlwZTogdHlwZXMuQUREX1NUT1JZLCBwYXlsb2FkOiB7IGxvYWRpbmc6IHRydWUgfSB9KTtcclxuICBsZXQgc3RvcnlJZCA9IFwiXCI7XHJcblxyXG4gIGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpXHJcbiAgICAuYWRkKHtcclxuICAgICAgLi4uZGF0YSxcclxuICAgICAgYXV0aG9ySWQ6IGF1dGguY3VycmVudFVzZXIudWlkLFxyXG4gICAgICBhdXRob3JOYW1lOiBkYXRhLmF1dGhvck5hbWUsXHJcbiAgICAgIG9uZVNob3Q6IGZhbHNlLFxyXG4gICAgICBiYW5uZXI6IHR5cGVvZiBkYXRhLmJhbm5lciA9PT0gXCJzdHJpbmdcIiA/IGRhdGEuYmFubmVyIDogXCJcIixcclxuICAgICAgY3JlYXRlZEF0OiBmaXJlYmFzZS5maXJlc3RvcmUuRmllbGRWYWx1ZS5zZXJ2ZXJUaW1lc3RhbXAoKSxcclxuICAgICAgbGlrZXNDb3VudDogMCxcclxuICAgICAgY2hhcHRlcnNDb3VudDogMCxcclxuICAgICAgc2Vjb25kYXJ5Q2hhcmFjdGVyczogW10sXHJcbiAgICAgIHNlY29uZGFyeUFycjogW10sXHJcbiAgICAgIGZlYXR1cmVkOiBmYWxzZSxcclxuICAgICAgbm90ZTogMCxcclxuICAgICAgY2hhcHRlcnNDb3VudDogMCxcclxuICAgICAgY29tbWVudHNDb3VudDogMCxcclxuICAgICAgbGFzdFVwZGF0ZWQ6IGZpcmViYXNlLmZpcmVzdG9yZS5GaWVsZFZhbHVlLnNlcnZlclRpbWVzdGFtcCgpLFxyXG4gICAgfSlcclxuICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgc3RvcnlJZCA9IHJlcy5pZDtcclxuICAgICAgaWYgKHR5cGVvZiBkYXRhLmJhbm5lciA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgIGNvbnN0IGltYWdlTmFtZSA9IGAke3Jlcy5pZH1fJHtkYXRhLnRpdGxlXHJcbiAgICAgICAgICAudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgICAgLnNwbGl0KFwiIFwiKVxyXG4gICAgICAgICAgLmpvaW4oXCJfXCIpfWA7XHJcbiAgICAgICAgc3RvcmFnZVxyXG4gICAgICAgICAgLnJlZihgJHthdXRoLmN1cnJlbnRVc2VyLnVpZH0vJHtpbWFnZU5hbWV9YClcclxuICAgICAgICAgIC5wdXQoZGF0YS5iYW5uZXIpXHJcbiAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdG9yYWdlXHJcbiAgICAgICAgICAgICAgLnJlZihhdXRoLmN1cnJlbnRVc2VyLnVpZClcclxuICAgICAgICAgICAgICAuY2hpbGQoaW1hZ2VOYW1lKVxyXG4gICAgICAgICAgICAgIC5nZXREb3dubG9hZFVSTCgpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKCh1cmwpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGRiXHJcbiAgICAgICAgICAgICAgLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpXHJcbiAgICAgICAgICAgICAgLmRvYyhzdG9yeUlkKVxyXG4gICAgICAgICAgICAgIC51cGRhdGUoeyBiYW5uZXI6IHVybCB9KTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICB0eXBlOiB0eXBlcy5BRERfU1RPUlksXHJcbiAgICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJTdG9yeSBhZGRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgICAgICAgIHN0b3J5SWQ6IHN0b3J5SWQsXHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IHR5cGVzLkFERF9TVE9SWSxcclxuICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJTdG9yeSBhZGRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgICAgc3RvcnlJZDogc3RvcnlJZCxcclxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgbWVzc2FnZS5lcnJvcihlcnIubWVzc2FnZSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBlZGl0U3RvcnkgPSAoZGF0YSwgc3RvcnlJZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGlzcGF0Y2goeyB0eXBlOiB0eXBlcy5FRElUX1NUT1JZLCBwYXlsb2FkOiB7IGxvYWRpbmdTdG9yeTogdHJ1ZSB9IH0pO1xyXG4gIGNvbnN0IGltYWdlTmFtZSA9IGRhdGEudGl0bGUudG9Mb3dlckNhc2UoKS5zcGxpdChcIiBcIikuam9pbihcIl9cIik7XHJcblxyXG4gIGlmICh0eXBlb2YgZGF0YS5iYW5uZXIgPT09IFwib2JqZWN0XCIpIHtcclxuICAgIHN0b3JhZ2VcclxuICAgICAgLnJlZihgJHthdXRoLmN1cnJlbnRVc2VyLnVpZH0vJHtpbWFnZU5hbWV9YClcclxuICAgICAgLnB1dChkYXRhLmJhbm5lcilcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBzdG9yYWdlXHJcbiAgICAgICAgICAucmVmKGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gICAgICAgICAgLmNoaWxkKGltYWdlTmFtZSlcclxuICAgICAgICAgIC5nZXREb3dubG9hZFVSTCgpO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigodXJsKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGRiXHJcbiAgICAgICAgICAuY29sbGVjdGlvbihcInN0b3JpZXNcIilcclxuICAgICAgICAgIC5kb2Moc3RvcnlJZClcclxuICAgICAgICAgIC51cGRhdGUoe1xyXG4gICAgICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgICAgICBiYW5uZXI6IHVybCxcclxuICAgICAgICAgICAgbGFzdFVwZGF0ZWQ6IGZpcmViYXNlLmZpcmVzdG9yZS5GaWVsZFZhbHVlLnNlcnZlclRpbWVzdGFtcCgpLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICBkYi5jb2xsZWN0aW9uKFwibG9jYXRpb25zXCIpXHJcbiAgICAgICAgICAud2hlcmUoXCJzdG9yeUlkXCIsIFwiPT1cIiwgc3RvcnlJZClcclxuICAgICAgICAgIC5nZXQoKVxyXG4gICAgICAgICAgLnRoZW4oKGRvY3MpID0+IHtcclxuICAgICAgICAgICAgbGV0IGxvY2F0aW9uUXVlcnkgPSBbXTtcclxuICAgICAgICAgICAgZG9jcy5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgICAgICAgICAgICBsb2NhdGlvblF1ZXJ5ID0gW1xyXG4gICAgICAgICAgICAgICAgLi4ubG9jYXRpb25RdWVyeSxcclxuICAgICAgICAgICAgICAgIGRiXHJcbiAgICAgICAgICAgICAgICAgIC5jb2xsZWN0aW9uKFwibG9jYXRpb25zXCIpXHJcbiAgICAgICAgICAgICAgICAgIC5kb2MoZG9jLmlkKVxyXG4gICAgICAgICAgICAgICAgICAudXBkYXRlKHsgc3RvcnlUaXRsZTogZGF0YS50aXRsZSB9KSxcclxuICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgUHJvbWlzZS5hbGwobG9jYXRpb25RdWVyeSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogdHlwZXMuRURJVF9TVE9SWSxcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJTdG9yeSBlZGl0ZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoZXJyLm1lc3NhZ2UpO1xyXG4gICAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgZGIuY29sbGVjdGlvbihcInN0b3JpZXNcIilcclxuICAgICAgLmRvYyhzdG9yeUlkKVxyXG4gICAgICAudXBkYXRlKHtcclxuICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgIGxhc3RVcGRhdGVkOiBmaXJlYmFzZS5maXJlc3RvcmUuRmllbGRWYWx1ZS5zZXJ2ZXJUaW1lc3RhbXAoKSxcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIGRiLmNvbGxlY3Rpb24oXCJsb2NhdGlvbnNcIilcclxuICAgICAgICAgIC53aGVyZShcInN0b3J5SWRcIiwgXCI9PVwiLCBzdG9yeUlkKVxyXG4gICAgICAgICAgLmdldCgpXHJcbiAgICAgICAgICAudGhlbigoZG9jcykgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbG9jYXRpb25RdWVyeSA9IFtdO1xyXG4gICAgICAgICAgICBkb2NzLmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgICAgICAgICAgIGxvY2F0aW9uUXVlcnkgPSBbXHJcbiAgICAgICAgICAgICAgICAuLi5sb2NhdGlvblF1ZXJ5LFxyXG4gICAgICAgICAgICAgICAgZGJcclxuICAgICAgICAgICAgICAgICAgLmNvbGxlY3Rpb24oXCJsb2NhdGlvbnNcIilcclxuICAgICAgICAgICAgICAgICAgLmRvYyhkb2MuaWQpXHJcbiAgICAgICAgICAgICAgICAgIC51cGRhdGUoeyBzdG9yeVRpdGxlOiBkYXRhLnRpdGxlIH0pLFxyXG4gICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBQcm9taXNlLmFsbChsb2NhdGlvblF1ZXJ5KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiB0eXBlcy5FRElUX1NUT1JZLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIlN0b3J5IGVkaXRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihlcnIubWVzc2FnZSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkZWxldGVTdG9yeSA9IChpZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGlzcGF0Y2goeyB0eXBlOiB0eXBlcy5ERUxFVEVfU1RPUlksIHBheWxvYWQ6IHsgbG9hZGluZzogdHJ1ZSB9IH0pO1xyXG4gIGNvbnN0IGJhdGNoID0gZGIuYmF0Y2goKTtcclxuICBiYXRjaC5kZWxldGUoZGIuY29sbGVjdGlvbihcInN0b3JpZXNcIikuZG9jKGlkKSk7XHJcbiAgY29uc3QgY2hhcHRlcnNUb0RlbGV0ZSA9IGRiXHJcbiAgICAuY29sbGVjdGlvbihcImNoYXB0ZXJzXCIpXHJcbiAgICAud2hlcmUoXCJzdG9yeUlkXCIsIFwiPT1cIiwgaWQpXHJcbiAgICAuZ2V0KCk7XHJcbiAgY29uc3QgbGlrZXNUb0RlbGV0ZSA9IGRiXHJcbiAgICAuY29sbGVjdGlvbihcInN0b3JpZXNMaWtlc1wiKVxyXG4gICAgLndoZXJlKFwic3RvcnlJZFwiLCBcIj09XCIsIGlkKVxyXG4gICAgLmdldCgpO1xyXG4gIGNvbnN0IGxvY2F0aW9uc1RvRGVsZXRlID0gZGJcclxuICAgIC5jb2xsZWN0aW9uKFwibG9jYXRpb25zXCIpXHJcbiAgICAud2hlcmUoXCJzdG9yeUlkXCIsIFwiPT1cIiwgaWQpXHJcbiAgICAuZ2V0KCk7XHJcbiAgUHJvbWlzZS5hbGwoW2NoYXB0ZXJzVG9EZWxldGUsIGxpa2VzVG9EZWxldGUsIGxvY2F0aW9uc1RvRGVsZXRlXSkudGhlbihcclxuICAgIChyZXMpID0+IHtcclxuICAgICAgcmVzWzBdLmZvckVhY2goKGNoYXApID0+IHtcclxuICAgICAgICBiYXRjaC5kZWxldGUoZGIuY29sbGVjdGlvbihcImNoYXB0ZXJzXCIpLmRvYyhjaGFwLmlkKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXNbMV0uZm9yRWFjaCgobGlrZSkgPT4ge1xyXG4gICAgICAgIGJhdGNoLmRlbGV0ZShkYi5jb2xsZWN0aW9uKFwic3Rvcmllc0xpa2VzXCIpLmRvYyhsaWtlLmlkKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXNbMl0uZm9yRWFjaCgobG9jKSA9PiB7XHJcbiAgICAgICAgYmF0Y2guZGVsZXRlKGRiLmNvbGxlY3Rpb24oXCJsb2NhdGlvbnNcIikuZG9jKGxvYy5pZCkpO1xyXG4gICAgICB9KTtcclxuICAgICAgYmF0Y2guY29tbWl0KCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogdHlwZXMuREVMRVRFX1NUT1JZLFxyXG4gICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIlN0b3J5IGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICAgIGxvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgIGRlbGV0ZWQ6IHRydWUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFVzZXJTdG9yaWVzID0gKGlkLCB0eXBlKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBjb25zdCB1c2VySWQgPSBpZCA/IGlkIDogYXV0aC5jdXJyZW50VXNlci51aWQ7XHJcbiAgY29uc29sZS5sb2coaWQpO1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpXHJcbiAgICAud2hlcmUoXCJhdXRob3JJZFwiLCBcIj09XCIsIHVzZXJJZClcclxuICAgIC5vcmRlckJ5KFwiY3JlYXRlZEF0XCIsIFwiZGVzY1wiKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigoZG9jcykgPT4ge1xyXG4gICAgICBsZXQgaXRlbXMgPSBbXTtcclxuICAgICAgZG9jcy5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgICAgICBpdGVtcyA9IFsuLi5pdGVtcywgeyBpZDogZG9jLmlkLCAuLi5kb2MuZGF0YSgpIH1dLmZpbHRlcigocykgPT5cclxuICAgICAgICAgIGlkID8gcy5wdWJsaWMgOiBzXHJcbiAgICAgICAgKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBpdGVtcztcclxuICAgIH0pXHJcbiAgICAudGhlbigoaXRlbXMpID0+IHtcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiB0eXBlcy5HRVRfVVNFUl9TVE9SSUVTLCBwYXlsb2FkOiBpdGVtcyB9KTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEZhdm9yaXRlU3RvcmllcyA9IChpZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgY29uc3QgdXNlcklkID0gaWQgPyBpZCA6IGF1dGguY3VycmVudFVzZXIudWlkO1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzTGlrZXNcIilcclxuICAgIC53aGVyZShcInNlbmRlcklkXCIsIFwiPT1cIiwgdXNlcklkKVxyXG4gICAgLm9yZGVyQnkoXCJjcmVhdGVkQXRcIiwgXCJkZXNjXCIpXHJcbiAgICAuZ2V0KClcclxuICAgIC50aGVuKChkb2NzKSA9PiB7XHJcbiAgICAgIGxldCBmYXZBcnIgPSBbXTtcclxuICAgICAgZG9jcy5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgICAgICBmYXZBcnIgPSBbLi4uZmF2QXJyLCBkb2MuZGF0YSgpLnN0b3J5SWRdO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGZhdkFycjtcclxuICAgIH0pXHJcbiAgICAudGhlbigodXNlcnMpID0+IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gdXNlcnMubWFwKCh1c2VyKSA9PlxyXG4gICAgICAgIGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpLmRvYyh1c2VyKS5nZXQoKVxyXG4gICAgICApO1xyXG4gICAgICBQcm9taXNlLmFsbChyZXN1bHQpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGxldCBmYXZVc2VycyA9IFtdO1xyXG4gICAgICAgIHJlcy5mb3JFYWNoKFxyXG4gICAgICAgICAgKGRvYykgPT4gKGZhdlVzZXJzID0gWy4uLmZhdlVzZXJzLCB7IGlkOiBkb2MuaWQsIC4uLmRvYy5kYXRhKCkgfV0pXHJcbiAgICAgICAgKTtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiB0eXBlcy5HRVRfRkFWT1JJVEVfU1RPUklFUyxcclxuICAgICAgICAgIHBheWxvYWQ6IGZhdlVzZXJzLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGlzU3RvcnlGYXZvcml0ZSA9IChzdG9yeUlkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBpZiAoYXV0aC5jdXJyZW50VXNlcikge1xyXG4gICAgZGIuY29sbGVjdGlvbihcInN0b3JpZXNMaWtlc1wiKVxyXG4gICAgICAud2hlcmUoXCJzZW5kZXJJZFwiLCBcIj09XCIsIGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gICAgICAud2hlcmUoXCJzdG9yeUlkXCIsIFwiPT1cIiwgc3RvcnlJZClcclxuICAgICAgLm9uU25hcHNob3QoKHNuYXBzaG90KSA9PiB7XHJcbiAgICAgICAgY29uc3QgYW5zd2VyID0gc25hcHNob3QuZG9jc1swXSA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICByZXR1cm4gZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogdHlwZXMuSVNfU1RPUllfRkFWT1JJVEUsXHJcbiAgICAgICAgICBwYXlsb2FkOiBhbnN3ZXIsXHJcbiAgICAgICAgICBsb2FkaW5nRmF2OiBmYWxzZSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFN0b3J5VG9GYXZvcml0ZSA9IChpZCwgdXNlcm5hbWUsIHN0b3J5VGl0bGUpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIC8vIGlmIChpc0Zhdm9yaXRlKSByZXR1cm4gbWVzc2FnZS53YXJuaW5nKFwiWW91J3ZlIGFscmVhZHkgbGlrZWQgdGhpcyBzdG9yeVwiKTtcclxuICBpZiAoIWF1dGguY3VycmVudFVzZXIpXHJcbiAgICByZXR1cm4gbWVzc2FnZS5lcnJvcihcIllvdSBuZWVkIHRvIGJlIGxvZ2dlZCBpbiB0byBsaWtlIGEgc3RvcnlcIik7XHJcbiAgaWYgKCFhdXRoLmN1cnJlbnRVc2VyLmVtYWlsVmVyaWZpZWQpXHJcbiAgICByZXR1cm4gbWVzc2FnZS5lcnJvcihcIllvdSBuZWVkIHRvIHZlcmlmeSB5b3VyIGVtYWlsIGZpcnN0XCIpO1xyXG5cclxuICBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc0xpa2VzXCIpXHJcbiAgICAuYWRkKHtcclxuICAgICAgc2VuZGVyOiB1c2VybmFtZSxcclxuICAgICAgc2VuZGVySWQ6IGF1dGguY3VycmVudFVzZXIudWlkLFxyXG4gICAgICBzdG9yeUlkOiBpZCxcclxuICAgICAgY3JlYXRlZEF0OiBmaXJlYmFzZS5maXJlc3RvcmUuRmllbGRWYWx1ZS5zZXJ2ZXJUaW1lc3RhbXAoKSxcclxuICAgIH0pXHJcbiAgICAudGhlbigoKSA9PiBtZXNzYWdlLnN1Y2Nlc3MoYCR7c3RvcnlUaXRsZX0gYWRkZWQgdG8geW91ciBmYXZvcml0ZXNgKSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiBtZXNzYWdlLmVycm9yKFwiVGhlcmUgaGFzIGJlZW4gYSBwcm9ibGVtXCIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCByZW1vdmVTdG9yeUZyb21GYXZvcml0ZSA9IChpZCwgc3RvcnlUaXRsZSkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGIuY29sbGVjdGlvbihcInN0b3JpZXNMaWtlc1wiKVxyXG4gICAgLndoZXJlKFwic3RvcnlJZFwiLCBcIj09XCIsIGlkKVxyXG4gICAgLndoZXJlKFwic2VuZGVySWRcIiwgXCI9PVwiLCBhdXRoLmN1cnJlbnRVc2VyLnVpZClcclxuICAgIC5nZXQoKVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzTGlrZXNcIikuZG9jKGRhdGEuZG9jc1swXS5pZCkuZGVsZXRlKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKCkgPT4gbWVzc2FnZS5zdWNjZXNzKGAke3N0b3J5VGl0bGV9IHJlbW92ZWQgZnJvbSB5b3VyIGZhdm9yaXRlc2ApKVxyXG4gICAgLmNhdGNoKChlcnIpID0+IG1lc3NhZ2UuZXJyb3IoXCJUaGVyZSBoYXMgYmVlbiBhIHByb2JsZW1cIikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0b3J5Q2hhcmFjdGVycyA9ICgpID0+IChkaXNwYXRjaCkgPT4ge307XHJcblxyXG4vLyBDSEFQVEVSc1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZENoYXB0ZXIgPSAoZGF0YSwgc2Vjb25kYXJ5Q2hhcmFjdGVycykgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgbGV0IGNoYXBJZCA9IFwiXCI7XHJcbiAgZGlzcGF0Y2goeyB0eXBlOiB0eXBlcy5BRERfQ0hBUFRFUiwgcGF5bG9hZDogeyBsb2FkaW5nOiB0cnVlIH0gfSk7XHJcblxyXG4gIHJldHVybiBkYlxyXG4gICAgLmNvbGxlY3Rpb24oXCJjaGFwdGVyc1wiKVxyXG4gICAgLmFkZCh7XHJcbiAgICAgIC4uLmRhdGEsXHJcbiAgICAgIGF1dGhvcklkOiBhdXRoLmN1cnJlbnRVc2VyLnVpZCxcclxuICAgICAgY29tbWVudHNDb3VudDogMCxcclxuICAgICAgbm90ZTogMCxcclxuICAgICAgdm90ZXJzOiBbXSxcclxuICAgICAgdm90ZXNDb3VudDogMCxcclxuICAgICAgY3JlYXRlZEF0OiBmaXJlYmFzZS5maXJlc3RvcmUuRmllbGRWYWx1ZS5zZXJ2ZXJUaW1lc3RhbXAoKSxcclxuICAgIH0pXHJcbiAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIGNoYXBJZCA9IHJlcy5pZDtcclxuICAgICAgZGIuY29sbGVjdGlvbihcInN0b3JpZXNcIilcclxuICAgICAgICAuZG9jKGRhdGEuc3RvcnlJZClcclxuICAgICAgICAuZ2V0KClcclxuICAgICAgICAudGhlbigoc3RvcnkpID0+IHtcclxuICAgICAgICAgIGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpXHJcbiAgICAgICAgICAgIC5kb2MoZGF0YS5zdG9yeUlkKVxyXG4gICAgICAgICAgICAudXBkYXRlKHtcclxuICAgICAgICAgICAgICBjaGFwdGVyc0NvdW50OiBzdG9yeS5kYXRhKCkuY2hhcHRlcnNDb3VudCArIDEsXHJcbiAgICAgICAgICAgICAgc2Vjb25kYXJ5Q2hhcmFjdGVyczogc2Vjb25kYXJ5Q2hhcmFjdGVycyxcclxuICAgICAgICAgICAgICBzZWNvbmRhcnlBcnI6IHNlY29uZGFyeUNoYXJhY3RlcnMubWFwKChjKSA9PiBjLmlkKSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IHR5cGVzLkFERF9DSEFQVEVSLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkNoYXB0ZXIgYWRkZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICAgICAgICAgIGNoYXBJZDogY2hhcElkLFxyXG4gICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZWRpdENoYXB0ZXIgPSAoZGF0YSwgc3RvcnlJZCwgY2hhcGlkLCBzZWNvbmRhcnlDaGFyYWN0ZXJzKSA9PiAoXHJcbiAgZGlzcGF0Y2hcclxuKSA9PiB7XHJcbiAgZGlzcGF0Y2goeyB0eXBlOiB0eXBlcy5FRElUX0NIQVBURVIsIHBheWxvYWQ6IHsgbG9hZGluZzogdHJ1ZSB9IH0pO1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJjaGFwdGVyc1wiKVxyXG4gICAgLmRvYyhjaGFwaWQpXHJcbiAgICAudXBkYXRlKHsgLi4uZGF0YSB9KVxyXG4gICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKVxyXG4gICAgICAgIC5kb2Moc3RvcnlJZClcclxuICAgICAgICAuZ2V0KClcclxuICAgICAgICAudGhlbigoZG9jKSA9PiB7XHJcbiAgICAgICAgICBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKVxyXG4gICAgICAgICAgICAuZG9jKHN0b3J5SWQpXHJcbiAgICAgICAgICAgIC51cGRhdGUoe1xyXG4gICAgICAgICAgICAgIHNlY29uZGFyeUNoYXJhY3RlcnMsXHJcbiAgICAgICAgICAgICAgc2Vjb25kYXJ5QXJyOiBzZWNvbmRhcnlDaGFyYWN0ZXJzLm1hcCgoYykgPT4gYy5pZCksXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiB0eXBlcy5FRElUX0NIQVBURVIsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiQ2hhcHRlciBlZGl0ZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkZWxldGVDaGFwdGVyID0gKGlkLCBzdG9yeUlkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkaXNwYXRjaCh7IHR5cGU6IHR5cGVzLkRFTEVURV9DSEFQVEVSLCBwYXlsb2FkOiB7IGxvYWRpbmdDaGFwdGVyOiB0cnVlIH0gfSk7XHJcbiAgY29uc3QgYmF0Y2ggPSBkYi5iYXRjaCgpO1xyXG5cclxuICBjb25zdCBjb21tZW50c1RvRGVsZXRlID0gZGJcclxuICAgIC5jb2xsZWN0aW9uKFwiY29tbWVudHNcIilcclxuICAgIC53aGVyZShcImNoYXB0ZXJJZFwiLCBcIj09XCIsIGlkKVxyXG4gICAgLmdldCgpO1xyXG4gIGNvbnN0IGNoYXB0ZXIgPSBkYi5jb2xsZWN0aW9uKFwiY2hhcHRlcnNcIikuZG9jKGlkKS5nZXQoKTtcclxuICBjb25zdCBzdG9yeSA9IGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpLmRvYyhzdG9yeUlkKS5nZXQoKTtcclxuXHJcbiAgUHJvbWlzZS5hbGwoW2NoYXB0ZXIsIHN0b3J5LCBjb21tZW50c1RvRGVsZXRlXSkudGhlbigocmVzKSA9PiB7XHJcbiAgICBjb25zdCBjaGFyYWN0ZXJzRnJvbUNoYXB0ZXIgPSByZXNbMF0uZGF0YSgpLmNoYXJhY3RlcnM7XHJcbiAgICBjb25zdCBjaGFyYWN0ZXJzRnJvbVN0b3J5ID0gcmVzWzFdLmRhdGEoKS5zZWNvbmRhcnlDaGFyYWN0ZXJzO1xyXG4gICAgbGV0IG5ld0FyciA9IGNoYXJhY3RlcnNGcm9tU3RvcnlcclxuICAgICAgLm1hcCgoYykgPT4ge1xyXG4gICAgICAgIGlmIChjaGFyYWN0ZXJzRnJvbUNoYXB0ZXIuaW5jbHVkZXMoYy5pZCkpIHtcclxuICAgICAgICAgIHJldHVybiB7IC4uLmMsIHRpbWVzOiBjLnRpbWVzIC0gMSB9O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gYztcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5maWx0ZXIoKGMpID0+IGMudGltZXMgPiAwKTtcclxuICAgIGJhdGNoLnVwZGF0ZShkYi5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKS5kb2Moc3RvcnlJZCksIHtcclxuICAgICAgY2hhcHRlcnNDb3VudDogcmVzWzFdLmRhdGEoKS5jaGFwdGVyc0NvdW50IC0gMSxcclxuICAgICAgc2Vjb25kYXJ5Q2hhcmFjdGVyczogbmV3QXJyLFxyXG4gICAgICBzZWNvbmRhcnlBcnI6IG5ld0Fyci5tYXAoKGMpID0+IGMuaWQpLFxyXG4gICAgfSk7XHJcbiAgICByZXNbMl0uZm9yRWFjaCgoY29tbSkgPT5cclxuICAgICAgYmF0Y2guZGVsZXRlKGRiLmNvbGxlY3Rpb24oXCJjb21tZW50c1wiKS5kb2MoY29tbS5pZCkpXHJcbiAgICApO1xyXG4gICAgYmF0Y2guZGVsZXRlKGRiLmNvbGxlY3Rpb24oXCJjaGFwdGVyc1wiKS5kb2MoaWQpKTtcclxuICAgIGJhdGNoLmNvbW1pdCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogdHlwZXMuREVMRVRFX0NIQVBURVIsXHJcbiAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgbWVzc2FnZTogXCJDaGFwdGVyIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICBsb2FkaW5nQ2hhcHRlcjogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDaGFwdGVyID0gKHN0b3J5SWQsIGlkLCB0eXBlKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKVxyXG4gICAgLmRvYyhzdG9yeUlkKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigoZG9jKSA9PiB7XHJcbiAgICAgIGlmIChkb2MuZXhpc3RzKSB7XHJcbiAgICAgICAgZGIuY29sbGVjdGlvbihcImNoYXB0ZXJzXCIpXHJcbiAgICAgICAgICAuZG9jKGlkKVxyXG4gICAgICAgICAgLmdldCgpXHJcbiAgICAgICAgICAudGhlbigoY2hhcCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY2hhcC5leGlzdHMpIHtcclxuICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gXCJzaG93XCIpIHtcclxuICAgICAgICAgICAgICAgIGxldCBjaGFyYWN0ZXJzID0gW107XHJcbiAgICAgICAgICAgICAgICBsZXQgbG9jYXRpb25zID0gW107XHJcbiAgICAgICAgICAgICAgICBsZXQgY2hhcmFRdWVyeSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgbGV0IGxvY1F1ZXJ5ID0gW107XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjaGFyYWN0ZXJzSW5DaGFwZXIgPSBjaGFwLmRhdGEoKS5jaGFyYWN0ZXJzO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYXRpb25zSW5DaGFwZXIgPSBjaGFwLmRhdGEoKS5sb2NhdGlvbnM7XHJcbiAgICAgICAgICAgICAgICBjaGFyYWN0ZXJzSW5DaGFwZXIuZm9yRWFjaCgoY2hhcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBjaGFyYVF1ZXJ5LnB1c2goZGIuY29sbGVjdGlvbihcImNoYXJhY3RlcnNcIikuZG9jKGNoYXIpLmdldCgpKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgbG9jYXRpb25zSW5DaGFwZXIuZm9yRWFjaCgobG9jKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGxvY1F1ZXJ5LnB1c2goZGIuY29sbGVjdGlvbihcImxvY2F0aW9uc1wiKS5kb2MobG9jKS5nZXQoKSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGNoYXJhUXVlcnkgPSBQcm9taXNlLmFsbChjaGFyYVF1ZXJ5KTtcclxuICAgICAgICAgICAgICAgIGxvY1F1ZXJ5ID0gUHJvbWlzZS5hbGwobG9jUXVlcnkpO1xyXG4gICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwoW2NoYXJhUXVlcnksIGxvY1F1ZXJ5XSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHJlc1swXS5mb3JFYWNoKChjKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hhcmFjdGVycy5wdXNoKHsgLi4uYy5kYXRhKCksIGlkOiBjLmlkIH0pO1xyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgcmVzWzFdLmZvckVhY2goKGwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbnMucHVzaCh7IC4uLmwuZGF0YSgpLCBpZDogbC5pZCB9KTtcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiB0eXBlcy5HRVRfQ0hBUFRFUixcclxuICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjaGFwdGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLmNoYXAuZGF0YSgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogY2hhcC5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFyYWN0ZXJzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwdWJsaWM6IGRvYy5kYXRhKCkucHVibGljLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yeVRpdGxlOiBkb2MuZGF0YSgpLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgIGNoYXB0ZXJFeGlzdHM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgICB0eXBlOiB0eXBlcy5HRVRfQ0hBUFRFUixcclxuICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoYXB0ZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIC4uLmNoYXAuZGF0YSgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ6IGNoYXAuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICBwdWJsaWM6IGRvYy5kYXRhKCkucHVibGljLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgY2hhcHRlckV4aXN0czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiB0eXBlcy5HRVRfQ0hBUFRFUixcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHsgY2hhcHRlckV4aXN0czogZmFsc2UgfSxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogdHlwZXMuR0VUX0NIQVBURVIsXHJcbiAgICAgICAgICBwYXlsb2FkOiB7IGNoYXB0ZXJFeGlzdHM6IGZhbHNlIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldENoYXB0ZXJzID0gKGlkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkYi5jb2xsZWN0aW9uKFwiY2hhcHRlcnNcIilcclxuICAgIC53aGVyZShcInN0b3J5SWRcIiwgXCI9PVwiLCBpZClcclxuICAgIC5vcmRlckJ5KFwibnVtYmVyXCIsIFwiYXNjXCIpXHJcbiAgICAub25TbmFwc2hvdCgoZG9jcykgPT4ge1xyXG4gICAgICBsZXQgYXJyID0gW107XHJcbiAgICAgIGRvY3MuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICAgICAgYXJyLnB1c2goe1xyXG4gICAgICAgICAgYXV0aG9ySWQ6IGRvYy5kYXRhKCkuYXV0aG9ySWQsXHJcbiAgICAgICAgICBpZDogZG9jLmlkLFxyXG4gICAgICAgICAgY3JlYXRlZEF0OiBkb2MuZGF0YSgpLmNyZWF0ZWRBdCxcclxuICAgICAgICAgIG51bWJlcjogZG9jLmRhdGEoKS5udW1iZXIsXHJcbiAgICAgICAgICB0aXRsZTogZG9jLmRhdGEoKS50aXRsZSxcclxuICAgICAgICAgIGNvbW1lbnRzQ291bnQ6IGRvYy5kYXRhKCkuY29tbWVudHNDb3VudCxcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiB0eXBlcy5HRVRfQ0hBUFRFUlMsXHJcbiAgICAgICAgcGF5bG9hZDogYXJyLFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuLy8gTE9DQVRJT05TXHJcblxyXG5leHBvcnQgY29uc3QgYWRkTG9jYXRpb24gPSAoZGF0YSkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGlzcGF0Y2goeyB0eXBlOiB0eXBlcy5BRERfTE9DQVRJT04sIHBheWxvYWQ6IHsgbG9hZGluZ0xvYzogdHJ1ZSB9IH0pO1xyXG4gIGxldCBsb2NJZCA9IFwiXCI7XHJcblxyXG4gIGRiLmNvbGxlY3Rpb24oXCJsb2NhdGlvbnNcIilcclxuICAgIC5hZGQoe1xyXG4gICAgICAuLi5kYXRhLFxyXG4gICAgICBpbWFnZTogdHlwZW9mIGRhdGEuaW1hZ2UgPT09IFwic3RyaW5nXCIgPyBkYXRhLmltYWdlIDogXCJcIixcclxuICAgICAgY3JlYXRlZEF0OiBmaXJlYmFzZS5maXJlc3RvcmUuRmllbGRWYWx1ZS5zZXJ2ZXJUaW1lc3RhbXAoKSxcclxuICAgIH0pXHJcbiAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIGxvY0lkID0gcmVzLmlkO1xyXG4gICAgICBpZiAodHlwZW9mIGRhdGEuaW1hZ2UgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICBjb25zdCBpbWFnZU5hbWUgPSBgJHtsb2NJZH1fJHtkYXRhLm5hbWVcclxuICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgICAuc3BsaXQoXCIgXCIpXHJcbiAgICAgICAgICAuam9pbihcIl9cIil9YDtcclxuICAgICAgICBzdG9yYWdlXHJcbiAgICAgICAgICAucmVmKGAke2F1dGguY3VycmVudFVzZXIudWlkfS8ke2ltYWdlTmFtZX1gKVxyXG4gICAgICAgICAgLnB1dChkYXRhLmltYWdlKVxyXG4gICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gc3RvcmFnZVxyXG4gICAgICAgICAgICAgIC5yZWYoYXV0aC5jdXJyZW50VXNlci51aWQpXHJcbiAgICAgICAgICAgICAgLmNoaWxkKGltYWdlTmFtZSlcclxuICAgICAgICAgICAgICAuZ2V0RG93bmxvYWRVUkwoKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbigodXJsKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBkYi5jb2xsZWN0aW9uKFwibG9jYXRpb25zXCIpLmRvYyhsb2NJZCkudXBkYXRlKHsgaW1hZ2U6IHVybCB9KTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICB0eXBlOiB0eXBlcy5BRERfTE9DQVRJT04sXHJcbiAgICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJMb2NhdGlvbiBhZGRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgICAgICAgIGxvY0lkOiByZXMuaWQsXHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nTG9jOiBmYWxzZSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IHR5cGVzLkFERF9MT0NBVElPTixcclxuICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJMb2NhdGlvbiBhZGRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgICAgbG9jSWQ6IHJlcy5pZCxcclxuICAgICAgICAgICAgbG9hZGluZ0xvYzogZmFsc2UsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgbWVzc2FnZS5lcnJvcihlcnIubWVzc2FnZSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBlZGl0TG9jYXRpb24gPSAoZGF0YSkgPT4gKGRpc3BhdGNoKSA9PiB7fTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRMb2NhdGlvbiA9IChpZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGIuY29sbGVjdGlvbihcImxvY2F0aW9uc1wiKVxyXG4gICAgLmRvYyhpZClcclxuICAgIC5nZXQoKVxyXG4gICAgLnRoZW4oKGRvYykgPT4ge1xyXG4gICAgICBpZiAoZG9jLmV4aXN0cykge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IHR5cGVzLkdFVF9MT0NBVElPTixcclxuICAgICAgICAgIHBheWxvYWQ6IHsgLi4uZG9jLmRhdGEoKSwgaWQ6IGRvYy5pZCB9LFxyXG4gICAgICAgICAgbG9jYXRpb25FeGlzdHM6IHRydWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogdHlwZXMuR0VUX0xPQ0FUSU9OLFxyXG4gICAgICAgICAgbG9jYXRpb25FeGlzdHM6IGZhbHNlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkZWxldGVMb2NhdGlvbiA9IChpZCwgbmFtZSkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGlzcGF0Y2goeyB0eXBlOiB0eXBlcy5ERUxFVEVfQ0hBUFRFUiwgcGF5bG9hZDogeyBsb2FkaW5nOiB0cnVlIH0gfSk7XHJcbiAgY29uc3QgYmF0Y2ggPSBkYi5iYXRjaCgpO1xyXG4gIGNvbnN0IGltYWdlTmFtZSA9IGAke2lkfV8ke25hbWUudG9Mb3dlckNhc2UoKS5zcGxpdChcIiBcIikuam9pbihcIl9cIil9YDtcclxuXHJcbiAgYmF0Y2guZGVsZXRlKGRiLmNvbGxlY3Rpb24oXCJsb2NhdGlvbnNcIikuZG9jKGlkKSk7XHJcbiAgZGIuY29sbGVjdGlvbihcImNoYXB0ZXJzXCIpXHJcbiAgICAud2hlcmUoXCJsb2NhdGlvbnNcIiwgXCJhcnJheS1jb250YWluc1wiLCBpZClcclxuICAgIC5nZXQoKVxyXG4gICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICByZXMuZm9yRWFjaCgoY2hhcCkgPT5cclxuICAgICAgICBiYXRjaC51cGRhdGUoZGIuY29sbGVjdGlvbihcImNoYXB0ZXJzXCIpLmRvYyhjaGFwLmlkKSwge1xyXG4gICAgICAgICAgbG9jYXRpb25zOiBjaGFwLmRhdGEoKS5sb2NhdGlvbnMuZmlsdGVyKChjKSA9PiBjICE9PSBpZCksXHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuXHJcbiAgICAgIHN0b3JhZ2VcclxuICAgICAgICAucmVmKGAke2F1dGguY3VycmVudFVzZXIudWlkfS8ke2ltYWdlTmFtZX1gKVxyXG4gICAgICAgIC5kZWxldGUoKVxyXG4gICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgIGJhdGNoLmNvbW1pdCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgdHlwZTogdHlwZXMuREVMRVRFX0NIQVBURVIsXHJcbiAgICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkxvY2F0aW9uIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICAgICAgICBkZWxldGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgIGJhdGNoLmNvbW1pdCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgdHlwZTogdHlwZXMuREVMRVRFX0NIQVBURVIsXHJcbiAgICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkxvY2F0aW9uIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICAgICAgICBkZWxldGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFVzZXJMb2NhdGlvbnMgPSAoaWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGNvbnN0IHVzZXJJZCA9IGlkID8gaWQgOiBhdXRoLmN1cnJlbnRVc2VyLnVpZDtcclxuICBkYi5jb2xsZWN0aW9uKFwibG9jYXRpb25zXCIpXHJcbiAgICAud2hlcmUoXCJhdXRob3JJZFwiLCBcIj09XCIsIHVzZXJJZClcclxuICAgIC5nZXQoKVxyXG4gICAgLnRoZW4oKGRvY3MpID0+IHtcclxuICAgICAgbGV0IGxvY2F0aW9ucyA9IFtdO1xyXG4gICAgICBkb2NzLmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgICAgIGxvY2F0aW9ucyA9IFsuLi5sb2NhdGlvbnMsIHsgaWQ6IGRvYy5pZCwgLi4uZG9jLmRhdGEoKSB9XTtcclxuICAgICAgfSk7XHJcbiAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiB0eXBlcy5HRVRfVVNFUl9MT0NBVElPTlMsXHJcbiAgICAgICAgcGF5bG9hZDogbG9jYXRpb25zLFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0b3J5TG9jYXRpb25zID0gKHN0b3J5SWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJsb2NhdGlvbnNcIilcclxuICAgIC53aGVyZShcInN0b3J5SWRcIiwgXCI9PVwiLCBzdG9yeUlkKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigoZG9jcykgPT4ge1xyXG4gICAgICBjb25zdCBsb2NhdGlvbnMgPSBkb2NzLmRvY3MubWFwKChkb2MpID0+ICh7IC4uLmRvYy5kYXRhKCksIGlkOiBkb2MuaWQgfSkpO1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogdHlwZXMuR0VUX1NUT1JZX0xPQ0FUSU9OUyxcclxuICAgICAgICBwYXlsb2FkOiBsb2NhdGlvbnMsXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG4vLyBDT01NRU5UU1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldENvbW1lbnRzID0gKGlkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkYi5jb2xsZWN0aW9uKFwiY29tbWVudHNcIilcclxuICAgIC53aGVyZShcImNoYXB0ZXJJZFwiLCBcIj09XCIsIGlkKVxyXG4gICAgLm9yZGVyQnkoXCJjcmVhdGVkQXRcIiwgXCJkZXNjXCIpXHJcbiAgICAub25TbmFwc2hvdCgoc25hcCkgPT4ge1xyXG4gICAgICBsZXQgY29tbWVudHMgPSBzbmFwLmRvY3MubWFwKChjb21tZW50KSA9PiAoe1xyXG4gICAgICAgIC4uLmNvbW1lbnQuZGF0YSgpLFxyXG4gICAgICAgIGlkOiBjb21tZW50LmlkLFxyXG4gICAgICB9KSk7XHJcbiAgICAgIGxldCBxdWVyaWVzID0gW107XHJcbiAgICAgIGNvbW1lbnRzLmZvckVhY2goKGNvbW0pID0+IHtcclxuICAgICAgICBxdWVyaWVzLnB1c2goZGIuY29sbGVjdGlvbihcInVzZXJzXCIpLmRvYyhjb21tLnVzZXJJZCkuZ2V0KCkpO1xyXG4gICAgICB9KTtcclxuICAgICAgUHJvbWlzZS5hbGwocXVlcmllcykudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgY29tbWVudHMgPSBjb21tZW50cy5tYXAoKGNvbW0pID0+ICh7XHJcbiAgICAgICAgICAuLi5jb21tLFxyXG4gICAgICAgICAgdXNlckltYWdlOiByZXMuZmluZCgoZCkgPT4gZC5pZCA9PT0gY29tbS51c2VySWQpLmRhdGEoKS5pbWFnZSxcclxuICAgICAgICB9KSk7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogdHlwZXMuR0VUX0NPTU1FTlRTLFxyXG4gICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICBsb2FkaW5nQ29tbWVudHM6IGZhbHNlLFxyXG4gICAgICAgICAgICBjb21tZW50cyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc3VibWl0Q29tbWVudCA9IChpbmZvKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBpZiAoIWF1dGguY3VycmVudFVzZXIuZW1haWxWZXJpZmllZClcclxuICAgIHJldHVybiBtZXNzYWdlLmVycm9yKFwiWW91IG5lZWQgdG8gdmVyaWZ5IHlvdXIgZW1haWwgZmlyc3RcIik7XHJcbiAgaWYgKCFpbmZvLmNvbnRlbnQpIHJldHVybiBtZXNzYWdlLmVycm9yKFwiQ29udGVudCBtdXN0IG5vdCBiZSBlbXB0eVwiKTtcclxuXHJcbiAgY29uc3QgYmF0Y2ggPSBkYi5iYXRjaCgpO1xyXG4gIGNvbnN0IHN0b3J5ID0gZGIuY29sbGVjdGlvbihcInN0b3JpZXNcIikuZG9jKGluZm8uc3RvcnlJZCkuZ2V0KCk7XHJcbiAgY29uc3QgY2hhcHRlciA9IGRiLmNvbGxlY3Rpb24oXCJjaGFwdGVyc1wiKS5kb2MoaW5mby5jaGFwdGVySWQpLmdldCgpO1xyXG5cclxuICBQcm9taXNlLmFsbChbc3RvcnksIGNoYXB0ZXJdKVxyXG4gICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBiYXRjaC51cGRhdGUoZGIuY29sbGVjdGlvbihcInN0b3JpZXNcIikuZG9jKGluZm8uc3RvcnlJZCksIHtcclxuICAgICAgICBjb21tZW50c0NvdW50OiByZXNbMF0uZGF0YSgpLmNvbW1lbnRzQ291bnQgKyAxLFxyXG4gICAgICB9KTtcclxuICAgICAgYmF0Y2gudXBkYXRlKGRiLmNvbGxlY3Rpb24oXCJjaGFwdGVyc1wiKS5kb2MoaW5mby5jaGFwdGVySWQpLCB7XHJcbiAgICAgICAgY29tbWVudHNDb3VudDogcmVzWzFdLmRhdGEoKS5jb21tZW50c0NvdW50ICsgMSxcclxuICAgICAgfSk7XHJcbiAgICAgIGJhdGNoLmNvbW1pdCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIGRiLmNvbGxlY3Rpb24oXCJjb21tZW50c1wiKVxyXG4gICAgICAgICAgLmFkZCh7XHJcbiAgICAgICAgICAgIC4uLmluZm8sXHJcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogZmlyZWJhc2UuZmlyZXN0b3JlLkZpZWxkVmFsdWUuc2VydmVyVGltZXN0YW1wKCksXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4oKCkgPT4gbWVzc2FnZS5zdWNjZXNzKFwiQ29tbWVudCBwb3N0ZWQgc3VjY2Vzc2Z1bGx5XCIpKTtcclxuICAgICAgfSk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IG1lc3NhZ2UuZXJyb3IoZXJyLm1lc3NhZ2UpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkZWxldGVDb21tZW50ID0gKGlkLCBjaGFwaWQsIHN0b3J5SWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGNvbnN0IGJhdGNoID0gZGIuYmF0Y2goKTtcclxuICBjb25zdCBzdG9yeSA9IGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpLmRvYyhzdG9yeUlkKS5nZXQoKTtcclxuICBjb25zdCBjaGFwdGVyID0gZGIuY29sbGVjdGlvbihcImNoYXB0ZXJzXCIpLmRvYyhjaGFwaWQpLmdldCgpO1xyXG5cclxuICBQcm9taXNlLmFsbChbc3RvcnksIGNoYXB0ZXJdKS50aGVuKChyZXMpID0+IHtcclxuICAgIGJhdGNoLnVwZGF0ZShkYi5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKS5kb2Moc3RvcnlJZCksIHtcclxuICAgICAgY29tbWVudHNDb3VudDogcmVzWzBdLmRhdGEoKS5jb21tZW50c0NvdW50IC0gMSxcclxuICAgIH0pO1xyXG4gICAgYmF0Y2gudXBkYXRlKGRiLmNvbGxlY3Rpb24oXCJjaGFwdGVyc1wiKS5kb2MoY2hhcGlkKSwge1xyXG4gICAgICBjb21tZW50c0NvdW50OiByZXNbMV0uZGF0YSgpLmNvbW1lbnRzQ291bnQgLSAxLFxyXG4gICAgfSk7XHJcbiAgICBiYXRjaC5jb21taXQoKS50aGVuKCgpID0+IHtcclxuICAgICAgZGIuY29sbGVjdGlvbihcImNvbW1lbnRzXCIpLmRvYyhpZCkuZGVsZXRlKCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==