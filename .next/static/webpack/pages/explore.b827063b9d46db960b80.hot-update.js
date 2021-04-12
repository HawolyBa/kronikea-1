webpackHotUpdate_N_E("pages/explore",{

/***/ "./redux/actions/storiesActions.js":
/*!*****************************************!*\
  !*** ./redux/actions/storiesActions.js ***!
  \*****************************************/
/*! exports provided: getStory, addStory, editStory, deleteStory, getUserStories, getFavoriteStories, isStoryFavorite, addStoryToFavorite, removeStoryFromFavorite, getStoryCharacters, getHomeStories, getFeaturedStories, getStoriesByLetter, addChapter, editChapter, deleteChapter, getChapter, getChapters, addLocation, editLocation, getLocation, deleteLocation, getUserLocations, getStoryLocations, getComments, submitComment, deleteComment, getStoriesFromSearch */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHomeStories", function() { return getHomeStories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFeaturedStories", function() { return getFeaturedStories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStoriesByLetter", function() { return getStoriesByLetter; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStoriesFromSearch", function() { return getStoriesFromSearch; });
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
    _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("stories").doc(id)["delete"]().then(function () {
      dispatch({
        type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].DELETE_STORY,
        payload: {
          message: "Story deleted successfully",
          loading: true,
          deleted: true
        }
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
    } else {
      return dispatch({
        type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].IS_STORY_FAVORITE,
        payload: false,
        loadingFav: false
      });
    }
  };
};
var addStoryToFavorite = function addStoryToFavorite(id, username, storyTitle, authorId) {
  return function (dispatch) {
    // if (isFavorite) return message.warning("You've already liked this story");
    if (!_fbConfig__WEBPACK_IMPORTED_MODULE_3__["auth"].currentUser) return antd__WEBPACK_IMPORTED_MODULE_5__["message"].error("You need to be logged in to like a story");
    if (!_fbConfig__WEBPACK_IMPORTED_MODULE_3__["auth"].currentUser.emailVerified) return antd__WEBPACK_IMPORTED_MODULE_5__["message"].error("You need to verify your email first");
    return _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("storiesLikes").add({
      sender: username,
      senderId: _fbConfig__WEBPACK_IMPORTED_MODULE_3__["auth"].currentUser.uid,
      storyId: id,
      createdAt: firebase_app__WEBPACK_IMPORTED_MODULE_4__["default"].firestore.FieldValue.serverTimestamp()
    }).then(function () {
      return antd__WEBPACK_IMPORTED_MODULE_5__["message"].success("".concat(storyTitle, " added to your favorites"));
    })["catch"](function (err) {
      return antd__WEBPACK_IMPORTED_MODULE_5__["message"].error(err.message);
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
};
var getHomeStories = function getHomeStories() {
  return function (dispatch) {
    var result = [];
    _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("stories").where("public", "==", true).orderBy("likesCount", "desc").limit(4).get().then(function (docs) {
      docs.forEach(function (doc) {
        return result.push(_objectSpread({
          id: doc.id
        }, doc.data()));
      });
      dispatch({
        type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].GET_HOME_STORIES,
        payload: result
      });
    });
  };
};
var getFeaturedStories = function getFeaturedStories() {
  return function (dispatch) {
    _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("stories").where("public", "==", true).where("featured", "==", true).limit(10).get().then(function (docs) {
      var result = [];
      docs.forEach(function (doc) {
        return result.push(_objectSpread({
          id: doc.id
        }, doc.data()));
      });
      dispatch({
        type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].GET_FEATURED_STORIES,
        payload: result,
        loading: false
      });
    });
  };
};
var getStoriesByLetter = function getStoriesByLetter(letter, alphabet) {
  return function (dispatch) {
    dispatch({
      type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].GET_STORIES_FROM_SEARCH,
      loading: true
    });
    var end = alphabet.findIndex(function (a) {
      return a === letter;
    });
    _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("stories").where("public", "==", true).orderBy("title", "asc").startAt(letter.toUpperCase()).endAt(letter === "z" ? "Z" : alphabet[end + 1].toUpperCase()).get().then(function (docs) {
      var result = [];
      docs.forEach(function (doc) {
        return result.push(_objectSpread(_objectSpread({}, doc.data()), {}, {
          id: doc.id
        }));
      });
      dispatch({
        type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].GET_STORIES_FROM_SEARCH,
        loading: false,
        payload: result
      });
    });
  };
}; // CHAPTERs

var addChapter = function addChapter(data) {
  return function (dispatch) {
    dispatch({
      type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].ADD_CHAPTER,
      payload: {
        loading: true
      }
    });
    _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("chapters").where("storyId", "==", data.storyId).get().then(function (docs) {
      var numberUsed = [];
      docs.forEach(function (chapter) {
        numberUsed.push(chapter.data().number);
      });

      if (numberUsed.includes(data.number)) {
        dispatch({
          type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].ADD_CHAPTER,
          payload: {
            loading: false
          }
        });
        antd__WEBPACK_IMPORTED_MODULE_5__["message"].error("You already have a chapter numbered: ".concat(data.number));
      } else {
        return _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("chapters").add(_objectSpread(_objectSpread({}, data), {}, {
          authorId: _fbConfig__WEBPACK_IMPORTED_MODULE_3__["auth"].currentUser.uid,
          commentsCount: 0,
          note: 0,
          voters: [],
          votesCount: 0,
          createdAt: firebase_app__WEBPACK_IMPORTED_MODULE_4__["default"].firestore.FieldValue.serverTimestamp()
        })).then(function (res) {
          dispatch({
            type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].ADD_CHAPTER,
            payload: {
              message: "Chapter added successfully",
              chapId: res.id,
              loading: false
            }
          });
        });
      }
    });
  };
};
var editChapter = function editChapter(data, chapid) {
  return function (dispatch) {
    dispatch({
      type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].EDIT_CHAPTER,
      payload: {
        loading: true
      }
    });
    _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("chapters").doc(chapid).update(_objectSpread({}, data)).then(function () {
      dispatch({
        type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].EDIT_CHAPTER,
        payload: {
          message: "Chapter edited successfully",
          loading: false
        }
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
    _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("chapters").doc(id)["delete"]().then(function () {
      dispatch({
        type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].DELETE_CHAPTER,
        payload: {
          message: "Chapter deleted successfully",
          loadingChapter: false
        }
      });
    })["catch"](function (err) {
      return console.log(err);
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
              var chapNumber = chap.data().number;
              var prevChap = _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("chapters").where("storyId", "==", storyId).where("number", "==", chapNumber - 1).get();
              var nextChap = _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("chapters").where("storyId", "==", storyId).where("number", "==", chapNumber + 1).get();
              charactersInChaper.forEach(function (_char) {
                charaQuery.push(_fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("characters").doc(_char).get());
              });
              locationsInChaper.forEach(function (loc) {
                locQuery.push(_fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("locations").doc(loc).get());
              });
              charaQuery = Promise.all(charaQuery);
              locQuery = Promise.all(locQuery);
              Promise.all([charaQuery, locQuery, prevChap, nextChap]).then(function (res) {
                var prev = res[2].docs[0] ? res[2].docs[0].id : null;
                var next = res[3].docs[0] ? res[3].docs[0].id : null;
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
                      prev: prev,
                      next: next,
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
          commentsCount: doc.data().commentsCount,
          status: doc.data().status
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
          return _objectSpread({}, comm);
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
      userDeleted: false,
      suspended: false,
      createdAt: firebase_app__WEBPACK_IMPORTED_MODULE_4__["default"].firestore.FieldValue.serverTimestamp()
    })).then(function () {
      return antd__WEBPACK_IMPORTED_MODULE_5__["message"].success("Comment posted successfully");
    })["catch"](function (err) {
      return antd__WEBPACK_IMPORTED_MODULE_5__["message"].error(err.message);
    });
  };
};
var deleteComment = function deleteComment(id) {
  return function (dispatch) {
    _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("comments").doc(id)["delete"]();
  };
}; // ARCHIVES

var getStoriesFromSearch = function getStoriesFromSearch(search) {
  return function (dispatch) {
    var result = [];
    _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("stories").where("public", "==", true).get().then(function (data) {
      data.forEach(function (doc) {
        var title = doc.data().title.toLowerCase().split(" ");
        var authorName = doc.data().authorName.toLowerCase().split(" ");
        var searchTerm = search.split("-");
        var isIncluded = searchTerm.every(function (word) {
          return title.includes(word);
        });
        var orIncluded = searchTerm.some(function (word) {
          return doc.data().title.toLowerCase().indexOf(word) !== -1;
        });
        var authorIncluded = searchTerm.every(function (word) {
          return authorName.includes(word);
        });
        var orAuthorIncluded = searchTerm.some(function (word) {
          return doc.data().authorName.toLowerCase().indexOf(word) !== -1;
        });

        if (isIncluded || orIncluded || authorIncluded || orAuthorIncluded) {
          result.push(_objectSpread(_objectSpread({}, doc.data()), {}, {
            id: doc.id
          }));
        }
      });
      return result;
    }).then(function () {
      dispatch({
        type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].GET_STORIES_FROM_SEARCH,
        payload: result,
        loading: false
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvYWN0aW9ucy9zdG9yaWVzQWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJnZXRTdG9yeSIsImlkIiwiZGlzcGF0Y2giLCJkYiIsImNvbGxlY3Rpb24iLCJkb2MiLCJnZXQiLCJ0aGVuIiwiZXhpc3RzIiwibWFpbiIsImRhdGEiLCJtYWluQ2hhcmFjdGVycyIsInNlY29uZGFyeSIsInNlY29uZGFyeUNoYXJhY3RlcnMiLCJtYWluQXJyIiwic2Vjb25kYXJ5QXJyIiwibWFpblF1ZXJ5IiwibWFwIiwiYyIsInNlY29uZGFyeVF1ZXJ5IiwibWFpblJlcyIsIlByb21pc2UiLCJhbGwiLCJzZWNvbmRhcnlSZXMiLCJyZXN1bHQiLCJmb3JFYWNoIiwiZG9jdSIsInR5cGUiLCJ0eXBlcyIsIkdFVF9TVE9SWSIsInN0b3J5RXhpc3RzIiwicGF5bG9hZCIsIkRJU1BBVENIX0VSUk9SIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImFkZFN0b3J5IiwiQUREX1NUT1JZIiwibG9hZGluZyIsInN0b3J5SWQiLCJhZGQiLCJhdXRob3JJZCIsImF1dGgiLCJjdXJyZW50VXNlciIsInVpZCIsImF1dGhvck5hbWUiLCJvbmVTaG90IiwiYmFubmVyIiwiY3JlYXRlZEF0IiwiZmlyZWJhc2UiLCJmaXJlc3RvcmUiLCJGaWVsZFZhbHVlIiwic2VydmVyVGltZXN0YW1wIiwibGlrZXNDb3VudCIsImNoYXB0ZXJzQ291bnQiLCJmZWF0dXJlZCIsIm5vdGUiLCJyZXMiLCJpbWFnZU5hbWUiLCJ0aXRsZSIsInRvTG93ZXJDYXNlIiwic3BsaXQiLCJqb2luIiwic3RvcmFnZSIsInJlZiIsInB1dCIsImNoaWxkIiwiZ2V0RG93bmxvYWRVUkwiLCJ1cmwiLCJ1cGRhdGUiLCJtZXNzYWdlIiwiZXJyb3IiLCJlZGl0U3RvcnkiLCJFRElUX1NUT1JZIiwibG9hZGluZ1N0b3J5IiwibGFzdFVwZGF0ZWQiLCJ3aGVyZSIsImRvY3MiLCJsb2NhdGlvblF1ZXJ5Iiwic3RvcnlUaXRsZSIsImRlbGV0ZVN0b3J5IiwiREVMRVRFX1NUT1JZIiwiZGVsZXRlZCIsImdldFVzZXJTdG9yaWVzIiwidXNlcklkIiwib3JkZXJCeSIsIml0ZW1zIiwiZmlsdGVyIiwicyIsIkdFVF9VU0VSX1NUT1JJRVMiLCJnZXRGYXZvcml0ZVN0b3JpZXMiLCJmYXZBcnIiLCJ1c2VycyIsInVzZXIiLCJmYXZVc2VycyIsIkdFVF9GQVZPUklURV9TVE9SSUVTIiwiaXNTdG9yeUZhdm9yaXRlIiwib25TbmFwc2hvdCIsInNuYXBzaG90IiwiYW5zd2VyIiwiSVNfU1RPUllfRkFWT1JJVEUiLCJsb2FkaW5nRmF2IiwiYWRkU3RvcnlUb0Zhdm9yaXRlIiwidXNlcm5hbWUiLCJlbWFpbFZlcmlmaWVkIiwic2VuZGVyIiwic2VuZGVySWQiLCJzdWNjZXNzIiwicmVtb3ZlU3RvcnlGcm9tRmF2b3JpdGUiLCJnZXRTdG9yeUNoYXJhY3RlcnMiLCJnZXRIb21lU3RvcmllcyIsImxpbWl0IiwicHVzaCIsIkdFVF9IT01FX1NUT1JJRVMiLCJnZXRGZWF0dXJlZFN0b3JpZXMiLCJHRVRfRkVBVFVSRURfU1RPUklFUyIsImdldFN0b3JpZXNCeUxldHRlciIsImxldHRlciIsImFscGhhYmV0IiwiR0VUX1NUT1JJRVNfRlJPTV9TRUFSQ0giLCJlbmQiLCJmaW5kSW5kZXgiLCJhIiwic3RhcnRBdCIsInRvVXBwZXJDYXNlIiwiZW5kQXQiLCJhZGRDaGFwdGVyIiwiQUREX0NIQVBURVIiLCJudW1iZXJVc2VkIiwiY2hhcHRlciIsIm51bWJlciIsImluY2x1ZGVzIiwiY29tbWVudHNDb3VudCIsInZvdGVycyIsInZvdGVzQ291bnQiLCJjaGFwSWQiLCJlZGl0Q2hhcHRlciIsImNoYXBpZCIsIkVESVRfQ0hBUFRFUiIsImRlbGV0ZUNoYXB0ZXIiLCJERUxFVEVfQ0hBUFRFUiIsImxvYWRpbmdDaGFwdGVyIiwiZ2V0Q2hhcHRlciIsImNoYXAiLCJjaGFyYWN0ZXJzIiwibG9jYXRpb25zIiwiY2hhcmFRdWVyeSIsImxvY1F1ZXJ5IiwiY2hhcmFjdGVyc0luQ2hhcGVyIiwibG9jYXRpb25zSW5DaGFwZXIiLCJjaGFwTnVtYmVyIiwicHJldkNoYXAiLCJuZXh0Q2hhcCIsImNoYXIiLCJsb2MiLCJwcmV2IiwibmV4dCIsImwiLCJHRVRfQ0hBUFRFUiIsImNoYXB0ZXJFeGlzdHMiLCJnZXRDaGFwdGVycyIsImFyciIsInN0YXR1cyIsIkdFVF9DSEFQVEVSUyIsImFkZExvY2F0aW9uIiwiQUREX0xPQ0FUSU9OIiwibG9hZGluZ0xvYyIsImxvY0lkIiwiaW1hZ2UiLCJuYW1lIiwiZWRpdExvY2F0aW9uIiwiZ2V0TG9jYXRpb24iLCJHRVRfTE9DQVRJT04iLCJsb2NhdGlvbkV4aXN0cyIsImRlbGV0ZUxvY2F0aW9uIiwiYmF0Y2giLCJjb21taXQiLCJnZXRVc2VyTG9jYXRpb25zIiwiR0VUX1VTRVJfTE9DQVRJT05TIiwiZ2V0U3RvcnlMb2NhdGlvbnMiLCJHRVRfU1RPUllfTE9DQVRJT05TIiwiZ2V0Q29tbWVudHMiLCJzbmFwIiwiY29tbWVudHMiLCJjb21tZW50IiwicXVlcmllcyIsImNvbW0iLCJHRVRfQ09NTUVOVFMiLCJsb2FkaW5nQ29tbWVudHMiLCJzdWJtaXRDb21tZW50IiwiaW5mbyIsImNvbnRlbnQiLCJ1c2VyRGVsZXRlZCIsInN1c3BlbmRlZCIsImRlbGV0ZUNvbW1lbnQiLCJnZXRTdG9yaWVzRnJvbVNlYXJjaCIsInNlYXJjaCIsInNlYXJjaFRlcm0iLCJpc0luY2x1ZGVkIiwiZXZlcnkiLCJ3b3JkIiwib3JJbmNsdWRlZCIsInNvbWUiLCJpbmRleE9mIiwiYXV0aG9ySW5jbHVkZWQiLCJvckF1dGhvckluY2x1ZGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0NBR0E7O0FBRU8sSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsRUFBRDtBQUFBLFNBQVEsVUFBQ0MsUUFBRCxFQUFjO0FBQzVDQyxnREFBRSxDQUFDQyxVQUFILENBQWMsU0FBZCxFQUNHQyxHQURILENBQ09KLEVBRFAsRUFFR0ssR0FGSCxHQUdHQyxJQUhILENBR1EsVUFBQ0YsR0FBRCxFQUFTO0FBQ2IsVUFBSUEsR0FBRyxDQUFDRyxNQUFSLEVBQWdCO0FBQ2QsWUFBTUMsSUFBSSxHQUFHSixHQUFHLENBQUNLLElBQUosR0FBV0MsY0FBeEI7QUFDQSxZQUFNQyxTQUFTLEdBQUdQLEdBQUcsQ0FBQ0ssSUFBSixHQUFXRyxtQkFBN0I7QUFDQSxZQUFJQyxPQUFPLEdBQUcsRUFBZDtBQUNBLFlBQUlDLFlBQVksR0FBRyxFQUFuQjtBQUNBLFlBQU1DLFNBQVMsR0FBR1AsSUFBSSxDQUFDUSxHQUFMLENBQVMsVUFBQ0MsQ0FBRDtBQUFBLGlCQUN6QmYsNENBQUUsQ0FBQ0MsVUFBSCxDQUFjLFlBQWQsRUFBNEJDLEdBQTVCLENBQWdDYSxDQUFoQyxFQUFtQ1osR0FBbkMsRUFEeUI7QUFBQSxTQUFULENBQWxCO0FBR0EsWUFBTWEsY0FBYyxHQUFHUCxTQUFTLENBQUNLLEdBQVYsQ0FBYyxVQUFDQyxDQUFEO0FBQUEsaUJBQ25DZiw0Q0FBRSxDQUFDQyxVQUFILENBQWMsWUFBZCxFQUE0QkMsR0FBNUIsQ0FBZ0NhLENBQUMsQ0FBQ2pCLEVBQWxDLEVBQXNDSyxHQUF0QyxFQURtQztBQUFBLFNBQWQsQ0FBdkI7QUFHQSxZQUFNYyxPQUFPLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTixTQUFaLENBQWhCO0FBQ0EsWUFBTU8sWUFBWSxHQUFHRixPQUFPLENBQUNDLEdBQVIsQ0FBWUgsY0FBWixDQUFyQjtBQUNBRSxlQUFPLENBQUNDLEdBQVIsQ0FBWSxDQUFDRixPQUFELEVBQVVHLFlBQVYsQ0FBWixFQUFxQ2hCLElBQXJDLENBQTBDLFVBQUNpQixNQUFELEVBQVk7QUFDcERBLGdCQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVDLE9BQVYsQ0FBa0IsVUFBQ0MsSUFBRCxFQUFVO0FBQzFCWixtQkFBTywwR0FBT0EsT0FBUCxvQ0FBcUJZLElBQUksQ0FBQ2hCLElBQUwsRUFBckI7QUFBa0NULGdCQUFFLEVBQUV5QixJQUFJLENBQUN6QjtBQUEzQyxnQkFBUDtBQUNELFdBRkQ7QUFHQXVCLGdCQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVDLE9BQVYsQ0FBa0IsVUFBQ0MsSUFBRCxFQUFVO0FBQzFCWCx3QkFBWSwwR0FBT0EsWUFBUCxvQ0FBMEJXLElBQUksQ0FBQ2hCLElBQUwsRUFBMUI7QUFBdUNULGdCQUFFLEVBQUV5QixJQUFJLENBQUN6QjtBQUFoRCxnQkFBWjtBQUNELFdBRkQ7QUFHQUMsa0JBQVEsQ0FBQztBQUNQeUIsZ0JBQUksRUFBRUMsc0RBQUssQ0FBQ0MsU0FETDtBQUVQQyx1QkFBVyxFQUFFLElBRk47QUFHUEMsbUJBQU8sa0NBQ0YxQixHQUFHLENBQUNLLElBQUosRUFERTtBQUVMVCxnQkFBRSxFQUFFSSxHQUFHLENBQUNKLEVBRkg7QUFHTFksaUNBQW1CLEVBQUVFLFlBSGhCO0FBSUxKLDRCQUFjLEVBQUVHLE9BSlg7QUFLTEEscUJBQU8sRUFBRVQsR0FBRyxDQUFDSyxJQUFKLEdBQVdDO0FBTGY7QUFIQSxXQUFELENBQVI7QUFXRCxTQWxCRDtBQW1CRCxPQWhDRCxNQWdDTztBQUNMVCxnQkFBUSxDQUFDO0FBQ1B5QixjQUFJLEVBQUVDLHNEQUFLLENBQUNJLGNBREw7QUFFUEYscUJBQVcsRUFBRTtBQUZOLFNBQUQsQ0FBUjtBQUlEO0FBQ0YsS0ExQ0gsV0EyQ1MsVUFBQ0csR0FBRDtBQUFBLGFBQVNDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaLENBQVQ7QUFBQSxLQTNDVDtBQTRDRCxHQTdDdUI7QUFBQSxDQUFqQjtBQStDQSxJQUFNRyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDMUIsSUFBRDtBQUFBLFNBQVUsVUFBQ1IsUUFBRCxFQUFjO0FBQUE7O0FBQzlDQSxZQUFRLENBQUM7QUFBRXlCLFVBQUksRUFBRUMsc0RBQUssQ0FBQ1MsU0FBZDtBQUF5Qk4sYUFBTyxFQUFFO0FBQUVPLGVBQU8sRUFBRTtBQUFYO0FBQWxDLEtBQUQsQ0FBUjtBQUNBLFFBQUlDLE9BQU8sR0FBRyxFQUFkO0FBRUFwQyxnREFBRSxDQUFDQyxVQUFILENBQWMsU0FBZCxFQUNHb0MsR0FESCxpQ0FFTzlCLElBRlA7QUFHSStCLGNBQVEsRUFBRUMsOENBQUksQ0FBQ0MsV0FBTCxDQUFpQkMsR0FIL0I7QUFJSUMsZ0JBQVUsRUFBRW5DLElBQUksQ0FBQ21DLFVBSnJCO0FBS0lDLGFBQU8sRUFBRSxLQUxiO0FBTUlDLFlBQU0sRUFBRSxPQUFPckMsSUFBSSxDQUFDcUMsTUFBWixLQUF1QixRQUF2QixHQUFrQ3JDLElBQUksQ0FBQ3FDLE1BQXZDLEdBQWdELEVBTjVEO0FBT0lDLGVBQVMsRUFBRUMsb0RBQVEsQ0FBQ0MsU0FBVCxDQUFtQkMsVUFBbkIsQ0FBOEJDLGVBQTlCLEVBUGY7QUFRSUMsZ0JBQVUsRUFBRSxDQVJoQjtBQVNJQyxtQkFBYSxFQUFFLENBVG5CO0FBVUl6Qyx5QkFBbUIsRUFBRSxFQVZ6QjtBQVdJRSxrQkFBWSxFQUFFLEVBWGxCO0FBWUl3QyxjQUFRLEVBQUUsS0FaZDtBQWFJQyxVQUFJLEVBQUU7QUFiVixrSUFjbUIsQ0FkbkIsOEhBZW1CLENBZm5CLDRIQWdCaUJQLG9EQUFRLENBQUNDLFNBQVQsQ0FBbUJDLFVBQW5CLENBQThCQyxlQUE5QixFQWhCakIscUJBa0JHN0MsSUFsQkgsQ0FrQlEsVUFBQ2tELEdBQUQsRUFBUztBQUNibEIsYUFBTyxHQUFHa0IsR0FBRyxDQUFDeEQsRUFBZDs7QUFDQSxVQUFJLE9BQU9TLElBQUksQ0FBQ3FDLE1BQVosS0FBdUIsUUFBM0IsRUFBcUM7QUFDbkMsWUFBTVcsU0FBUyxhQUFNRCxHQUFHLENBQUN4RCxFQUFWLGNBQWdCUyxJQUFJLENBQUNpRCxLQUFMLENBQzVCQyxXQUQ0QixHQUU1QkMsS0FGNEIsQ0FFdEIsR0FGc0IsRUFHNUJDLElBSDRCLENBR3ZCLEdBSHVCLENBQWhCLENBQWY7QUFJQUMseURBQU8sQ0FDSkMsR0FESCxXQUNVdEIsOENBQUksQ0FBQ0MsV0FBTCxDQUFpQkMsR0FEM0IsY0FDa0NjLFNBRGxDLEdBRUdPLEdBRkgsQ0FFT3ZELElBQUksQ0FBQ3FDLE1BRlosRUFHR3hDLElBSEgsQ0FHUSxZQUFNO0FBQ1YsaUJBQU93RCxpREFBTyxDQUNYQyxHQURJLENBQ0F0Qiw4Q0FBSSxDQUFDQyxXQUFMLENBQWlCQyxHQURqQixFQUVKc0IsS0FGSSxDQUVFUixTQUZGLEVBR0pTLGNBSEksRUFBUDtBQUlELFNBUkgsRUFTRzVELElBVEgsQ0FTUSxVQUFDNkQsR0FBRCxFQUFTO0FBQ2IsaUJBQU9qRSw0Q0FBRSxDQUNOQyxVQURJLENBQ08sU0FEUCxFQUVKQyxHQUZJLENBRUFrQyxPQUZBLEVBR0o4QixNQUhJLENBR0c7QUFBRXRCLGtCQUFNLEVBQUVxQjtBQUFWLFdBSEgsQ0FBUDtBQUlELFNBZEgsRUFlRzdELElBZkgsQ0FlUSxZQUFNO0FBQ1ZMLGtCQUFRLENBQUM7QUFDUHlCLGdCQUFJLEVBQUVDLHNEQUFLLENBQUNTLFNBREw7QUFFUE4sbUJBQU8sRUFBRTtBQUNQdUMscUJBQU8sRUFBRSwwQkFERjtBQUVQL0IscUJBQU8sRUFBRUEsT0FGRjtBQUdQRCxxQkFBTyxFQUFFO0FBSEY7QUFGRixXQUFELENBQVI7QUFRRCxTQXhCSDtBQXlCRCxPQTlCRCxNQThCTztBQUNMcEMsZ0JBQVEsQ0FBQztBQUNQeUIsY0FBSSxFQUFFQyxzREFBSyxDQUFDUyxTQURMO0FBRVBOLGlCQUFPLEVBQUU7QUFDUHVDLG1CQUFPLEVBQUUsMEJBREY7QUFFUC9CLG1CQUFPLEVBQUVBLE9BRkY7QUFHUEQsbUJBQU8sRUFBRTtBQUhGO0FBRkYsU0FBRCxDQUFSO0FBUUQ7QUFDRixLQTVESCxXQTZEUyxVQUFDTCxHQUFELEVBQVM7QUFDZHFDLGtEQUFPLENBQUNDLEtBQVIsQ0FBY3RDLEdBQUcsQ0FBQ3FDLE9BQWxCO0FBQ0QsS0EvREg7QUFnRUQsR0FwRXVCO0FBQUEsQ0FBakI7QUFzRUEsSUFBTUUsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQzlELElBQUQsRUFBTzZCLE9BQVA7QUFBQSxTQUFtQixVQUFDckMsUUFBRCxFQUFjO0FBQ3hEQSxZQUFRLENBQUM7QUFBRXlCLFVBQUksRUFBRUMsc0RBQUssQ0FBQzZDLFVBQWQ7QUFBMEIxQyxhQUFPLEVBQUU7QUFBRTJDLG9CQUFZLEVBQUU7QUFBaEI7QUFBbkMsS0FBRCxDQUFSO0FBQ0EsUUFBTWhCLFNBQVMsR0FBR2hELElBQUksQ0FBQ2lELEtBQUwsQ0FBV0MsV0FBWCxHQUF5QkMsS0FBekIsQ0FBK0IsR0FBL0IsRUFBb0NDLElBQXBDLENBQXlDLEdBQXpDLENBQWxCOztBQUVBLFFBQUksT0FBT3BELElBQUksQ0FBQ3FDLE1BQVosS0FBdUIsUUFBM0IsRUFBcUM7QUFDbkNnQix1REFBTyxDQUNKQyxHQURILFdBQ1V0Qiw4Q0FBSSxDQUFDQyxXQUFMLENBQWlCQyxHQUQzQixjQUNrQ2MsU0FEbEMsR0FFR08sR0FGSCxDQUVPdkQsSUFBSSxDQUFDcUMsTUFGWixFQUdHeEMsSUFISCxDQUdRLFlBQU07QUFDVixlQUFPd0QsaURBQU8sQ0FDWEMsR0FESSxDQUNBdEIsOENBQUksQ0FBQ0MsV0FBTCxDQUFpQkMsR0FEakIsRUFFSnNCLEtBRkksQ0FFRVIsU0FGRixFQUdKUyxjQUhJLEVBQVA7QUFJRCxPQVJILEVBU0c1RCxJQVRILENBU1EsVUFBQzZELEdBQUQsRUFBUztBQUNiLGVBQU9qRSw0Q0FBRSxDQUNOQyxVQURJLENBQ08sU0FEUCxFQUVKQyxHQUZJLENBRUFrQyxPQUZBLEVBR0o4QixNQUhJLGlDQUlBM0QsSUFKQTtBQUtIcUMsZ0JBQU0sRUFBRXFCLEdBTEw7QUFNSE8scUJBQVcsRUFBRTFCLG9EQUFRLENBQUNDLFNBQVQsQ0FBbUJDLFVBQW5CLENBQThCQyxlQUE5QjtBQU5WLFdBQVA7QUFRRCxPQWxCSCxFQW1CRzdDLElBbkJILENBbUJRLFlBQU07QUFDVkosb0RBQUUsQ0FBQ0MsVUFBSCxDQUFjLFdBQWQsRUFDR3dFLEtBREgsQ0FDUyxTQURULEVBQ29CLElBRHBCLEVBQzBCckMsT0FEMUIsRUFFR2pDLEdBRkgsR0FHR0MsSUFISCxDQUdRLFVBQUNzRSxJQUFELEVBQVU7QUFDZCxjQUFJQyxhQUFhLEdBQUcsRUFBcEI7QUFDQUQsY0FBSSxDQUFDcEQsT0FBTCxDQUFhLFVBQUNwQixHQUFELEVBQVM7QUFDcEJ5RSx5QkFBYSwwR0FDUkEsYUFEUSxJQUVYM0UsNENBQUUsQ0FDQ0MsVUFESCxDQUNjLFdBRGQsRUFFR0MsR0FGSCxDQUVPQSxHQUFHLENBQUNKLEVBRlgsRUFHR29FLE1BSEgsQ0FHVTtBQUFFVSx3QkFBVSxFQUFFckUsSUFBSSxDQUFDaUQ7QUFBbkIsYUFIVixDQUZXLEVBQWI7QUFPRCxXQVJEO0FBU0F0QyxpQkFBTyxDQUFDQyxHQUFSLENBQVl3RCxhQUFaLEVBQTJCdkUsSUFBM0IsQ0FBZ0MsWUFBTTtBQUNwQ0wsb0JBQVEsQ0FBQztBQUNQeUIsa0JBQUksRUFBRUMsc0RBQUssQ0FBQzZDLFVBREw7QUFFUDFDLHFCQUFPLEVBQUU7QUFDUHVDLHVCQUFPLEVBQUU7QUFERjtBQUZGLGFBQUQsQ0FBUjtBQU1ELFdBUEQ7QUFRRCxTQXRCSDtBQXVCRCxPQTNDSCxXQTRDUyxVQUFDckMsR0FBRCxFQUFTO0FBQ2RxQyxvREFBTyxDQUFDQyxLQUFSLENBQWN0QyxHQUFHLENBQUNxQyxPQUFsQjtBQUNELE9BOUNIO0FBK0NELEtBaERELE1BZ0RPO0FBQ0xuRSxrREFBRSxDQUFDQyxVQUFILENBQWMsU0FBZCxFQUNHQyxHQURILENBQ09rQyxPQURQLEVBRUc4QixNQUZILGlDQUdPM0QsSUFIUDtBQUlJaUUsbUJBQVcsRUFBRTFCLG9EQUFRLENBQUNDLFNBQVQsQ0FBbUJDLFVBQW5CLENBQThCQyxlQUE5QjtBQUpqQixVQU1HN0MsSUFOSCxDQU1RLFlBQU07QUFDVkosb0RBQUUsQ0FBQ0MsVUFBSCxDQUFjLFdBQWQsRUFDR3dFLEtBREgsQ0FDUyxTQURULEVBQ29CLElBRHBCLEVBQzBCckMsT0FEMUIsRUFFR2pDLEdBRkgsR0FHR0MsSUFISCxDQUdRLFVBQUNzRSxJQUFELEVBQVU7QUFDZCxjQUFJQyxhQUFhLEdBQUcsRUFBcEI7QUFDQUQsY0FBSSxDQUFDcEQsT0FBTCxDQUFhLFVBQUNwQixHQUFELEVBQVM7QUFDcEJ5RSx5QkFBYSwwR0FDUkEsYUFEUSxJQUVYM0UsNENBQUUsQ0FDQ0MsVUFESCxDQUNjLFdBRGQsRUFFR0MsR0FGSCxDQUVPQSxHQUFHLENBQUNKLEVBRlgsRUFHR29FLE1BSEgsQ0FHVTtBQUFFVSx3QkFBVSxFQUFFckUsSUFBSSxDQUFDaUQ7QUFBbkIsYUFIVixDQUZXLEVBQWI7QUFPRCxXQVJEO0FBU0F0QyxpQkFBTyxDQUFDQyxHQUFSLENBQVl3RCxhQUFaLEVBQTJCdkUsSUFBM0IsQ0FBZ0MsWUFBTTtBQUNwQ0wsb0JBQVEsQ0FBQztBQUNQeUIsa0JBQUksRUFBRUMsc0RBQUssQ0FBQzZDLFVBREw7QUFFUDFDLHFCQUFPLEVBQUU7QUFDUHVDLHVCQUFPLEVBQUU7QUFERjtBQUZGLGFBQUQsQ0FBUjtBQU1ELFdBUEQ7QUFRRCxTQXRCSDtBQXVCRCxPQTlCSCxXQStCUyxVQUFDckMsR0FBRCxFQUFTO0FBQ2RxQyxvREFBTyxDQUFDQyxLQUFSLENBQWN0QyxHQUFHLENBQUNxQyxPQUFsQjtBQUNELE9BakNIO0FBa0NEO0FBQ0YsR0F4RndCO0FBQUEsQ0FBbEI7QUEwRkEsSUFBTVUsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQy9FLEVBQUQ7QUFBQSxTQUFRLFVBQUNDLFFBQUQsRUFBYztBQUMvQ0EsWUFBUSxDQUFDO0FBQUV5QixVQUFJLEVBQUVDLHNEQUFLLENBQUNxRCxZQUFkO0FBQTRCbEQsYUFBTyxFQUFFO0FBQUVPLGVBQU8sRUFBRTtBQUFYO0FBQXJDLEtBQUQsQ0FBUjtBQUNBbkMsZ0RBQUUsQ0FBQ0MsVUFBSCxDQUFjLFNBQWQsRUFDR0MsR0FESCxDQUNPSixFQURQLGNBR0dNLElBSEgsQ0FHUSxZQUFNO0FBQ1ZMLGNBQVEsQ0FBQztBQUNQeUIsWUFBSSxFQUFFQyxzREFBSyxDQUFDcUQsWUFETDtBQUVQbEQsZUFBTyxFQUFFO0FBQ1B1QyxpQkFBTyxFQUFFLDRCQURGO0FBRVBoQyxpQkFBTyxFQUFFLElBRkY7QUFHUDRDLGlCQUFPLEVBQUU7QUFIRjtBQUZGLE9BQUQsQ0FBUjtBQVFELEtBWkg7QUFhRCxHQWYwQjtBQUFBLENBQXBCO0FBaUJBLElBQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ2xGLEVBQUQsRUFBSzBCLElBQUw7QUFBQSxTQUFjLFVBQUN6QixRQUFELEVBQWM7QUFDeEQsUUFBTWtGLE1BQU0sR0FBR25GLEVBQUUsR0FBR0EsRUFBSCxHQUFReUMsOENBQUksQ0FBQ0MsV0FBTCxDQUFpQkMsR0FBMUM7QUFDQXpDLGdEQUFFLENBQUNDLFVBQUgsQ0FBYyxTQUFkLEVBQ0d3RSxLQURILENBQ1MsVUFEVCxFQUNxQixJQURyQixFQUMyQlEsTUFEM0IsRUFFR0MsT0FGSCxDQUVXLFdBRlgsRUFFd0IsTUFGeEIsRUFHRy9FLEdBSEgsR0FJR0MsSUFKSCxDQUlRLFVBQUNzRSxJQUFELEVBQVU7QUFDZCxVQUFJUyxLQUFLLEdBQUcsRUFBWjtBQUNBVCxVQUFJLENBQUNwRCxPQUFMLENBQWEsVUFBQ3BCLEdBQUQsRUFBUztBQUNwQmlGLGFBQUssR0FBRyx1R0FBSUEsS0FBSjtBQUFhckYsWUFBRSxFQUFFSSxHQUFHLENBQUNKO0FBQXJCLFdBQTRCSSxHQUFHLENBQUNLLElBQUosRUFBNUIsSUFBMEM2RSxNQUExQyxDQUFpRCxVQUFDQyxDQUFEO0FBQUEsaUJBQ3ZEdkYsRUFBRSxHQUFHdUYsQ0FBQyxVQUFKLEdBQWNBLENBRHVDO0FBQUEsU0FBakQsQ0FBUjtBQUdELE9BSkQ7QUFLQSxhQUFPRixLQUFQO0FBQ0QsS0FaSCxFQWFHL0UsSUFiSCxDQWFRLFVBQUMrRSxLQUFELEVBQVc7QUFDZnBGLGNBQVEsQ0FBQztBQUFFeUIsWUFBSSxFQUFFQyxzREFBSyxDQUFDNkQsZ0JBQWQ7QUFBZ0MxRCxlQUFPLEVBQUV1RDtBQUF6QyxPQUFELENBQVI7QUFDRCxLQWZIO0FBZ0JELEdBbEI2QjtBQUFBLENBQXZCO0FBb0JBLElBQU1JLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ3pGLEVBQUQ7QUFBQSxTQUFRLFVBQUNDLFFBQUQsRUFBYztBQUN0RCxRQUFNa0YsTUFBTSxHQUFHbkYsRUFBRSxHQUFHQSxFQUFILEdBQVF5Qyw4Q0FBSSxDQUFDQyxXQUFMLENBQWlCQyxHQUExQztBQUNBekMsZ0RBQUUsQ0FBQ0MsVUFBSCxDQUFjLGNBQWQsRUFDR3dFLEtBREgsQ0FDUyxVQURULEVBQ3FCLElBRHJCLEVBQzJCUSxNQUQzQixFQUVHQyxPQUZILENBRVcsV0FGWCxFQUV3QixNQUZ4QixFQUdHL0UsR0FISCxHQUlHQyxJQUpILENBSVEsVUFBQ3NFLElBQUQsRUFBVTtBQUNkLFVBQUljLE1BQU0sR0FBRyxFQUFiO0FBQ0FkLFVBQUksQ0FBQ3BELE9BQUwsQ0FBYSxVQUFDcEIsR0FBRCxFQUFTO0FBQ3BCc0YsY0FBTSwwR0FBT0EsTUFBUCxJQUFldEYsR0FBRyxDQUFDSyxJQUFKLEdBQVc2QixPQUExQixFQUFOO0FBQ0QsT0FGRDtBQUdBLGFBQU9vRCxNQUFQO0FBQ0QsS0FWSCxFQVdHcEYsSUFYSCxDQVdRLFVBQUNxRixLQUFELEVBQVc7QUFDZixVQUFNcEUsTUFBTSxHQUFHb0UsS0FBSyxDQUFDM0UsR0FBTixDQUFVLFVBQUM0RSxJQUFEO0FBQUEsZUFDdkIxRiw0Q0FBRSxDQUFDQyxVQUFILENBQWMsU0FBZCxFQUF5QkMsR0FBekIsQ0FBNkJ3RixJQUE3QixFQUFtQ3ZGLEdBQW5DLEVBRHVCO0FBQUEsT0FBVixDQUFmO0FBR0FlLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRSxNQUFaLEVBQW9CakIsSUFBcEIsQ0FBeUIsVUFBQ2tELEdBQUQsRUFBUztBQUNoQyxZQUFJcUMsUUFBUSxHQUFHLEVBQWY7QUFDQXJDLFdBQUcsQ0FBQ2hDLE9BQUosQ0FDRSxVQUFDcEIsR0FBRDtBQUFBLGlCQUFVeUYsUUFBUSwwR0FBT0EsUUFBUDtBQUFtQjdGLGNBQUUsRUFBRUksR0FBRyxDQUFDSjtBQUEzQixhQUFrQ0ksR0FBRyxDQUFDSyxJQUFKLEVBQWxDLEdBQWxCO0FBQUEsU0FERjtBQUdBUixnQkFBUSxDQUFDO0FBQ1B5QixjQUFJLEVBQUVDLHNEQUFLLENBQUNtRSxvQkFETDtBQUVQaEUsaUJBQU8sRUFBRStEO0FBRkYsU0FBRCxDQUFSO0FBSUQsT0FURDtBQVVELEtBekJIO0FBMEJELEdBNUJpQztBQUFBLENBQTNCO0FBOEJBLElBQU1FLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ3pELE9BQUQ7QUFBQSxTQUFhLFVBQUNyQyxRQUFELEVBQWM7QUFDeEQsUUFBSXdDLDhDQUFJLENBQUNDLFdBQVQsRUFBc0I7QUFDcEJ4QyxrREFBRSxDQUFDQyxVQUFILENBQWMsY0FBZCxFQUNHd0UsS0FESCxDQUNTLFVBRFQsRUFDcUIsSUFEckIsRUFDMkJsQyw4Q0FBSSxDQUFDQyxXQUFMLENBQWlCQyxHQUQ1QyxFQUVHZ0MsS0FGSCxDQUVTLFNBRlQsRUFFb0IsSUFGcEIsRUFFMEJyQyxPQUYxQixFQUdHMEQsVUFISCxDQUdjLFVBQUNDLFFBQUQsRUFBYztBQUN4QixZQUFNQyxNQUFNLEdBQUdELFFBQVEsQ0FBQ3JCLElBQVQsQ0FBYyxDQUFkLElBQW1CLElBQW5CLEdBQTBCLEtBQXpDO0FBQ0EsZUFBTzNFLFFBQVEsQ0FBQztBQUNkeUIsY0FBSSxFQUFFQyxzREFBSyxDQUFDd0UsaUJBREU7QUFFZHJFLGlCQUFPLEVBQUVvRSxNQUZLO0FBR2RFLG9CQUFVLEVBQUU7QUFIRSxTQUFELENBQWY7QUFLRCxPQVZIO0FBV0QsS0FaRCxNQVlPO0FBQ0wsYUFBT25HLFFBQVEsQ0FBQztBQUNkeUIsWUFBSSxFQUFFQyxzREFBSyxDQUFDd0UsaUJBREU7QUFFZHJFLGVBQU8sRUFBRSxLQUZLO0FBR2RzRSxrQkFBVSxFQUFFO0FBSEUsT0FBRCxDQUFmO0FBS0Q7QUFDRixHQXBCOEI7QUFBQSxDQUF4QjtBQXNCQSxJQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNyRyxFQUFELEVBQUtzRyxRQUFMLEVBQWV4QixVQUFmLEVBQTJCdEMsUUFBM0I7QUFBQSxTQUF3QyxVQUN4RXZDLFFBRHdFLEVBRXJFO0FBQ0g7QUFDQSxRQUFJLENBQUN3Qyw4Q0FBSSxDQUFDQyxXQUFWLEVBQ0UsT0FBTzJCLDRDQUFPLENBQUNDLEtBQVIsQ0FBYywwQ0FBZCxDQUFQO0FBQ0YsUUFBSSxDQUFDN0IsOENBQUksQ0FBQ0MsV0FBTCxDQUFpQjZELGFBQXRCLEVBQ0UsT0FBT2xDLDRDQUFPLENBQUNDLEtBQVIsQ0FBYyxxQ0FBZCxDQUFQO0FBRUYsV0FBT3BFLDRDQUFFLENBQ05DLFVBREksQ0FDTyxjQURQLEVBRUpvQyxHQUZJLENBRUE7QUFDSGlFLFlBQU0sRUFBRUYsUUFETDtBQUVIRyxjQUFRLEVBQUVoRSw4Q0FBSSxDQUFDQyxXQUFMLENBQWlCQyxHQUZ4QjtBQUdITCxhQUFPLEVBQUV0QyxFQUhOO0FBSUgrQyxlQUFTLEVBQUVDLG9EQUFRLENBQUNDLFNBQVQsQ0FBbUJDLFVBQW5CLENBQThCQyxlQUE5QjtBQUpSLEtBRkEsRUFRSjdDLElBUkksQ0FRQztBQUFBLGFBQU0rRCw0Q0FBTyxDQUFDcUMsT0FBUixXQUFtQjVCLFVBQW5CLDhCQUFOO0FBQUEsS0FSRCxXQVNFLFVBQUM5QyxHQUFEO0FBQUEsYUFBU3FDLDRDQUFPLENBQUNDLEtBQVIsQ0FBY3RDLEdBQUcsQ0FBQ3FDLE9BQWxCLENBQVQ7QUFBQSxLQVRGLENBQVA7QUFVRCxHQW5CaUM7QUFBQSxDQUEzQjtBQXFCQSxJQUFNc0MsdUJBQXVCLEdBQUcsU0FBMUJBLHVCQUEwQixDQUFDM0csRUFBRCxFQUFLOEUsVUFBTDtBQUFBLFNBQW9CLFVBQUM3RSxRQUFELEVBQWM7QUFDdkVDLGdEQUFFLENBQUNDLFVBQUgsQ0FBYyxjQUFkLEVBQ0d3RSxLQURILENBQ1MsU0FEVCxFQUNvQixJQURwQixFQUMwQjNFLEVBRDFCLEVBRUcyRSxLQUZILENBRVMsVUFGVCxFQUVxQixJQUZyQixFQUUyQmxDLDhDQUFJLENBQUNDLFdBQUwsQ0FBaUJDLEdBRjVDLEVBR0d0QyxHQUhILEdBSUdDLElBSkgsQ0FJUSxVQUFDRyxJQUFELEVBQVU7QUFDZCxhQUFPUCw0Q0FBRSxDQUFDQyxVQUFILENBQWMsY0FBZCxFQUE4QkMsR0FBOUIsQ0FBa0NLLElBQUksQ0FBQ21FLElBQUwsQ0FBVSxDQUFWLEVBQWE1RSxFQUEvQyxhQUFQO0FBQ0QsS0FOSCxFQU9HTSxJQVBILENBT1E7QUFBQSxhQUFNK0QsNENBQU8sQ0FBQ3FDLE9BQVIsV0FBbUI1QixVQUFuQixrQ0FBTjtBQUFBLEtBUFIsV0FRUyxVQUFDOUMsR0FBRDtBQUFBLGFBQVNxQyw0Q0FBTyxDQUFDQyxLQUFSLENBQWMsMEJBQWQsQ0FBVDtBQUFBLEtBUlQ7QUFTRCxHQVZzQztBQUFBLENBQWhDO0FBWUEsSUFBTXNDLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUI7QUFBQSxTQUFNLFVBQUMzRyxRQUFELEVBQWMsQ0FBRSxDQUF0QjtBQUFBLENBQTNCO0FBRUEsSUFBTTRHLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUI7QUFBQSxTQUFNLFVBQUM1RyxRQUFELEVBQWM7QUFDaEQsUUFBSXNCLE1BQU0sR0FBRyxFQUFiO0FBQ0FyQixnREFBRSxDQUFDQyxVQUFILENBQWMsU0FBZCxFQUNHd0UsS0FESCxDQUNTLFFBRFQsRUFDbUIsSUFEbkIsRUFDeUIsSUFEekIsRUFFR1MsT0FGSCxDQUVXLFlBRlgsRUFFeUIsTUFGekIsRUFHRzBCLEtBSEgsQ0FHUyxDQUhULEVBSUd6RyxHQUpILEdBS0dDLElBTEgsQ0FLUSxVQUFDc0UsSUFBRCxFQUFVO0FBQ2RBLFVBQUksQ0FBQ3BELE9BQUwsQ0FBYSxVQUFDcEIsR0FBRDtBQUFBLGVBQVNtQixNQUFNLENBQUN3RixJQUFQO0FBQWMvRyxZQUFFLEVBQUVJLEdBQUcsQ0FBQ0o7QUFBdEIsV0FBNkJJLEdBQUcsQ0FBQ0ssSUFBSixFQUE3QixFQUFUO0FBQUEsT0FBYjtBQUNBUixjQUFRLENBQUM7QUFDUHlCLFlBQUksRUFBRUMsc0RBQUssQ0FBQ3FGLGdCQURMO0FBRVBsRixlQUFPLEVBQUVQO0FBRkYsT0FBRCxDQUFSO0FBSUQsS0FYSDtBQVlELEdBZDZCO0FBQUEsQ0FBdkI7QUFnQkEsSUFBTTBGLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUI7QUFBQSxTQUFNLFVBQUNoSCxRQUFELEVBQWM7QUFDcERDLGdEQUFFLENBQUNDLFVBQUgsQ0FBYyxTQUFkLEVBQ0d3RSxLQURILENBQ1MsUUFEVCxFQUNtQixJQURuQixFQUN5QixJQUR6QixFQUVHQSxLQUZILENBRVMsVUFGVCxFQUVxQixJQUZyQixFQUUyQixJQUYzQixFQUdHbUMsS0FISCxDQUdTLEVBSFQsRUFJR3pHLEdBSkgsR0FLR0MsSUFMSCxDQUtRLFVBQUNzRSxJQUFELEVBQVU7QUFDZCxVQUFJckQsTUFBTSxHQUFHLEVBQWI7QUFDQXFELFVBQUksQ0FBQ3BELE9BQUwsQ0FBYSxVQUFDcEIsR0FBRDtBQUFBLGVBQVNtQixNQUFNLENBQUN3RixJQUFQO0FBQWMvRyxZQUFFLEVBQUVJLEdBQUcsQ0FBQ0o7QUFBdEIsV0FBNkJJLEdBQUcsQ0FBQ0ssSUFBSixFQUE3QixFQUFUO0FBQUEsT0FBYjtBQUNBUixjQUFRLENBQUM7QUFDUHlCLFlBQUksRUFBRUMsc0RBQUssQ0FBQ3VGLG9CQURMO0FBRVBwRixlQUFPLEVBQUVQLE1BRkY7QUFHUGMsZUFBTyxFQUFFO0FBSEYsT0FBRCxDQUFSO0FBS0QsS0FiSDtBQWNELEdBZmlDO0FBQUEsQ0FBM0I7QUFpQkEsSUFBTThFLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsTUFBRCxFQUFTQyxRQUFUO0FBQUEsU0FBc0IsVUFBQ3BILFFBQUQsRUFBYztBQUNwRUEsWUFBUSxDQUFDO0FBQUV5QixVQUFJLEVBQUVDLHNEQUFLLENBQUMyRix1QkFBZDtBQUF1Q2pGLGFBQU8sRUFBRTtBQUFoRCxLQUFELENBQVI7QUFFQSxRQUFNa0YsR0FBRyxHQUFHRixRQUFRLENBQUNHLFNBQVQsQ0FBbUIsVUFBQ0MsQ0FBRDtBQUFBLGFBQU9BLENBQUMsS0FBS0wsTUFBYjtBQUFBLEtBQW5CLENBQVo7QUFDQWxILGdEQUFFLENBQUNDLFVBQUgsQ0FBYyxTQUFkLEVBQ0d3RSxLQURILENBQ1MsUUFEVCxFQUNtQixJQURuQixFQUN5QixJQUR6QixFQUVHUyxPQUZILENBRVcsT0FGWCxFQUVvQixLQUZwQixFQUdHc0MsT0FISCxDQUdXTixNQUFNLENBQUNPLFdBQVAsRUFIWCxFQUlHQyxLQUpILENBSVNSLE1BQU0sS0FBSyxHQUFYLEdBQWlCLEdBQWpCLEdBQXVCQyxRQUFRLENBQUNFLEdBQUcsR0FBRyxDQUFQLENBQVIsQ0FBa0JJLFdBQWxCLEVBSmhDLEVBS0d0SCxHQUxILEdBTUdDLElBTkgsQ0FNUSxVQUFDc0UsSUFBRCxFQUFVO0FBQ2QsVUFBSXJELE1BQU0sR0FBRyxFQUFiO0FBQ0FxRCxVQUFJLENBQUNwRCxPQUFMLENBQWEsVUFBQ3BCLEdBQUQ7QUFBQSxlQUFTbUIsTUFBTSxDQUFDd0YsSUFBUCxpQ0FBaUIzRyxHQUFHLENBQUNLLElBQUosRUFBakI7QUFBNkJULFlBQUUsRUFBRUksR0FBRyxDQUFDSjtBQUFyQyxXQUFUO0FBQUEsT0FBYjtBQUNBQyxjQUFRLENBQUM7QUFDUHlCLFlBQUksRUFBRUMsc0RBQUssQ0FBQzJGLHVCQURMO0FBRVBqRixlQUFPLEVBQUUsS0FGRjtBQUdQUCxlQUFPLEVBQUVQO0FBSEYsT0FBRCxDQUFSO0FBS0QsS0FkSDtBQWVELEdBbkJpQztBQUFBLENBQTNCLEMsQ0FvQlA7O0FBRU8sSUFBTXNHLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNwSCxJQUFEO0FBQUEsU0FBVSxVQUFDUixRQUFELEVBQWM7QUFDaERBLFlBQVEsQ0FBQztBQUFFeUIsVUFBSSxFQUFFQyxzREFBSyxDQUFDbUcsV0FBZDtBQUEyQmhHLGFBQU8sRUFBRTtBQUFFTyxlQUFPLEVBQUU7QUFBWDtBQUFwQyxLQUFELENBQVI7QUFFQW5DLGdEQUFFLENBQUNDLFVBQUgsQ0FBYyxVQUFkLEVBQ0d3RSxLQURILENBQ1MsU0FEVCxFQUNvQixJQURwQixFQUMwQmxFLElBQUksQ0FBQzZCLE9BRC9CLEVBRUdqQyxHQUZILEdBR0dDLElBSEgsQ0FHUSxVQUFDc0UsSUFBRCxFQUFVO0FBQ2QsVUFBSW1ELFVBQVUsR0FBRyxFQUFqQjtBQUNBbkQsVUFBSSxDQUFDcEQsT0FBTCxDQUFhLFVBQUN3RyxPQUFELEVBQWE7QUFDeEJELGtCQUFVLENBQUNoQixJQUFYLENBQWdCaUIsT0FBTyxDQUFDdkgsSUFBUixHQUFld0gsTUFBL0I7QUFDRCxPQUZEOztBQUdBLFVBQUlGLFVBQVUsQ0FBQ0csUUFBWCxDQUFvQnpILElBQUksQ0FBQ3dILE1BQXpCLENBQUosRUFBc0M7QUFDcENoSSxnQkFBUSxDQUFDO0FBQUV5QixjQUFJLEVBQUVDLHNEQUFLLENBQUNtRyxXQUFkO0FBQTJCaEcsaUJBQU8sRUFBRTtBQUFFTyxtQkFBTyxFQUFFO0FBQVg7QUFBcEMsU0FBRCxDQUFSO0FBQ0FnQyxvREFBTyxDQUFDQyxLQUFSLGdEQUFzRDdELElBQUksQ0FBQ3dILE1BQTNEO0FBQ0QsT0FIRCxNQUdPO0FBQ0wsZUFBTy9ILDRDQUFFLENBQ05DLFVBREksQ0FDTyxVQURQLEVBRUpvQyxHQUZJLGlDQUdBOUIsSUFIQTtBQUlIK0Isa0JBQVEsRUFBRUMsOENBQUksQ0FBQ0MsV0FBTCxDQUFpQkMsR0FKeEI7QUFLSHdGLHVCQUFhLEVBQUUsQ0FMWjtBQU1INUUsY0FBSSxFQUFFLENBTkg7QUFPSDZFLGdCQUFNLEVBQUUsRUFQTDtBQVFIQyxvQkFBVSxFQUFFLENBUlQ7QUFTSHRGLG1CQUFTLEVBQUVDLG9EQUFRLENBQUNDLFNBQVQsQ0FBbUJDLFVBQW5CLENBQThCQyxlQUE5QjtBQVRSLFlBV0o3QyxJQVhJLENBV0MsVUFBQ2tELEdBQUQsRUFBUztBQUNidkQsa0JBQVEsQ0FBQztBQUNQeUIsZ0JBQUksRUFBRUMsc0RBQUssQ0FBQ21HLFdBREw7QUFFUGhHLG1CQUFPLEVBQUU7QUFDUHVDLHFCQUFPLEVBQUUsNEJBREY7QUFFUGlFLG9CQUFNLEVBQUU5RSxHQUFHLENBQUN4RCxFQUZMO0FBR1BxQyxxQkFBTyxFQUFFO0FBSEY7QUFGRixXQUFELENBQVI7QUFRRCxTQXBCSSxDQUFQO0FBcUJEO0FBQ0YsS0FsQ0g7QUFtQ0QsR0F0Q3lCO0FBQUEsQ0FBbkI7QUF3Q0EsSUFBTWtHLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUM5SCxJQUFELEVBQU8rSCxNQUFQO0FBQUEsU0FBa0IsVUFBQ3ZJLFFBQUQsRUFBYztBQUN6REEsWUFBUSxDQUFDO0FBQUV5QixVQUFJLEVBQUVDLHNEQUFLLENBQUM4RyxZQUFkO0FBQTRCM0csYUFBTyxFQUFFO0FBQUVPLGVBQU8sRUFBRTtBQUFYO0FBQXJDLEtBQUQsQ0FBUjtBQUNBbkMsZ0RBQUUsQ0FBQ0MsVUFBSCxDQUFjLFVBQWQsRUFDR0MsR0FESCxDQUNPb0ksTUFEUCxFQUVHcEUsTUFGSCxtQkFFZTNELElBRmYsR0FHR0gsSUFISCxDQUdRLFlBQU07QUFDVkwsY0FBUSxDQUFDO0FBQ1B5QixZQUFJLEVBQUVDLHNEQUFLLENBQUM4RyxZQURMO0FBRVAzRyxlQUFPLEVBQUU7QUFDUHVDLGlCQUFPLEVBQUUsNkJBREY7QUFFUGhDLGlCQUFPLEVBQUU7QUFGRjtBQUZGLE9BQUQsQ0FBUjtBQU9ELEtBWEg7QUFZRCxHQWQwQjtBQUFBLENBQXBCO0FBZ0JBLElBQU1xRyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUMxSSxFQUFELEVBQUtzQyxPQUFMO0FBQUEsU0FBaUIsVUFBQ3JDLFFBQUQsRUFBYztBQUMxREEsWUFBUSxDQUFDO0FBQUV5QixVQUFJLEVBQUVDLHNEQUFLLENBQUNnSCxjQUFkO0FBQThCN0csYUFBTyxFQUFFO0FBQUU4RyxzQkFBYyxFQUFFO0FBQWxCO0FBQXZDLEtBQUQsQ0FBUjtBQUNBMUksZ0RBQUUsQ0FBQ0MsVUFBSCxDQUFjLFVBQWQsRUFDR0MsR0FESCxDQUNPSixFQURQLGNBR0dNLElBSEgsQ0FHUSxZQUFNO0FBQ1ZMLGNBQVEsQ0FBQztBQUNQeUIsWUFBSSxFQUFFQyxzREFBSyxDQUFDZ0gsY0FETDtBQUVQN0csZUFBTyxFQUFFO0FBQ1B1QyxpQkFBTyxFQUFFLDhCQURGO0FBRVB1RSx3QkFBYyxFQUFFO0FBRlQ7QUFGRixPQUFELENBQVI7QUFPRCxLQVhILFdBWVMsVUFBQzVHLEdBQUQ7QUFBQSxhQUFTQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWixDQUFUO0FBQUEsS0FaVDtBQWFELEdBZjRCO0FBQUEsQ0FBdEI7QUFpQkEsSUFBTTZHLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUN2RyxPQUFELEVBQVV0QyxFQUFWLEVBQWMwQixJQUFkO0FBQUEsU0FBdUIsVUFBQ3pCLFFBQUQsRUFBYztBQUM3REMsZ0RBQUUsQ0FBQ0MsVUFBSCxDQUFjLFNBQWQsRUFDR0MsR0FESCxDQUNPa0MsT0FEUCxFQUVHakMsR0FGSCxHQUdHQyxJQUhILENBR1EsVUFBQ0YsR0FBRCxFQUFTO0FBQ2IsVUFBSUEsR0FBRyxDQUFDRyxNQUFSLEVBQWdCO0FBQ2RMLG9EQUFFLENBQUNDLFVBQUgsQ0FBYyxVQUFkLEVBQ0dDLEdBREgsQ0FDT0osRUFEUCxFQUVHSyxHQUZILEdBR0dDLElBSEgsQ0FHUSxVQUFDd0ksSUFBRCxFQUFVO0FBQ2QsY0FBSUEsSUFBSSxDQUFDdkksTUFBVCxFQUFpQjtBQUNmLGdCQUFJbUIsSUFBSSxLQUFLLE1BQWIsRUFBcUI7QUFDbkIsa0JBQUlxSCxVQUFVLEdBQUcsRUFBakI7QUFDQSxrQkFBSUMsU0FBUyxHQUFHLEVBQWhCO0FBQ0Esa0JBQUlDLFVBQVUsR0FBRyxFQUFqQjtBQUNBLGtCQUFJQyxRQUFRLEdBQUcsRUFBZjtBQUNBLGtCQUFNQyxrQkFBa0IsR0FBR0wsSUFBSSxDQUFDckksSUFBTCxHQUFZc0ksVUFBdkM7QUFDQSxrQkFBTUssaUJBQWlCLEdBQUdOLElBQUksQ0FBQ3JJLElBQUwsR0FBWXVJLFNBQXRDO0FBQ0Esa0JBQU1LLFVBQVUsR0FBR1AsSUFBSSxDQUFDckksSUFBTCxHQUFZd0gsTUFBL0I7QUFFQSxrQkFBTXFCLFFBQVEsR0FBR3BKLDRDQUFFLENBQ2hCQyxVQURjLENBQ0gsVUFERyxFQUVkd0UsS0FGYyxDQUVSLFNBRlEsRUFFRyxJQUZILEVBRVNyQyxPQUZULEVBR2RxQyxLQUhjLENBR1IsUUFIUSxFQUdFLElBSEYsRUFHUTBFLFVBQVUsR0FBRyxDQUhyQixFQUlkaEosR0FKYyxFQUFqQjtBQUtBLGtCQUFNa0osUUFBUSxHQUFHckosNENBQUUsQ0FDaEJDLFVBRGMsQ0FDSCxVQURHLEVBRWR3RSxLQUZjLENBRVIsU0FGUSxFQUVHLElBRkgsRUFFU3JDLE9BRlQsRUFHZHFDLEtBSGMsQ0FHUixRQUhRLEVBR0UsSUFIRixFQUdRMEUsVUFBVSxHQUFHLENBSHJCLEVBSWRoSixHQUpjLEVBQWpCO0FBTUE4SSxnQ0FBa0IsQ0FBQzNILE9BQW5CLENBQTJCLFVBQUNnSSxLQUFELEVBQVU7QUFDbkNQLDBCQUFVLENBQUNsQyxJQUFYLENBQWdCN0csNENBQUUsQ0FBQ0MsVUFBSCxDQUFjLFlBQWQsRUFBNEJDLEdBQTVCLENBQWdDb0osS0FBaEMsRUFBc0NuSixHQUF0QyxFQUFoQjtBQUNELGVBRkQ7QUFHQStJLCtCQUFpQixDQUFDNUgsT0FBbEIsQ0FBMEIsVUFBQ2lJLEdBQUQsRUFBUztBQUNqQ1Asd0JBQVEsQ0FBQ25DLElBQVQsQ0FBYzdHLDRDQUFFLENBQUNDLFVBQUgsQ0FBYyxXQUFkLEVBQTJCQyxHQUEzQixDQUErQnFKLEdBQS9CLEVBQW9DcEosR0FBcEMsRUFBZDtBQUNELGVBRkQ7QUFHQTRJLHdCQUFVLEdBQUc3SCxPQUFPLENBQUNDLEdBQVIsQ0FBWTRILFVBQVosQ0FBYjtBQUNBQyxzQkFBUSxHQUFHOUgsT0FBTyxDQUFDQyxHQUFSLENBQVk2SCxRQUFaLENBQVg7QUFDQTlILHFCQUFPLENBQUNDLEdBQVIsQ0FBWSxDQUFDNEgsVUFBRCxFQUFhQyxRQUFiLEVBQXVCSSxRQUF2QixFQUFpQ0MsUUFBakMsQ0FBWixFQUF3RGpKLElBQXhELENBQ0UsVUFBQ2tELEdBQUQsRUFBUztBQUNQLG9CQUFJa0csSUFBSSxHQUFHbEcsR0FBRyxDQUFDLENBQUQsQ0FBSCxDQUFPb0IsSUFBUCxDQUFZLENBQVosSUFBaUJwQixHQUFHLENBQUMsQ0FBRCxDQUFILENBQU9vQixJQUFQLENBQVksQ0FBWixFQUFlNUUsRUFBaEMsR0FBcUMsSUFBaEQ7QUFDQSxvQkFBSTJKLElBQUksR0FBR25HLEdBQUcsQ0FBQyxDQUFELENBQUgsQ0FBT29CLElBQVAsQ0FBWSxDQUFaLElBQWlCcEIsR0FBRyxDQUFDLENBQUQsQ0FBSCxDQUFPb0IsSUFBUCxDQUFZLENBQVosRUFBZTVFLEVBQWhDLEdBQXFDLElBQWhEO0FBQ0F3RCxtQkFBRyxDQUFDLENBQUQsQ0FBSCxDQUFPaEMsT0FBUCxDQUFlLFVBQUNQLENBQUQsRUFBTztBQUNwQjhILDRCQUFVLENBQUNoQyxJQUFYLGlDQUFxQjlGLENBQUMsQ0FBQ1IsSUFBRixFQUFyQjtBQUErQlQsc0JBQUUsRUFBRWlCLENBQUMsQ0FBQ2pCO0FBQXJDO0FBQ0QsaUJBRkQ7QUFHQXdELG1CQUFHLENBQUMsQ0FBRCxDQUFILENBQU9oQyxPQUFQLENBQWUsVUFBQ29JLENBQUQsRUFBTztBQUNwQlosMkJBQVMsQ0FBQ2pDLElBQVYsaUNBQW9CNkMsQ0FBQyxDQUFDbkosSUFBRixFQUFwQjtBQUE4QlQsc0JBQUUsRUFBRTRKLENBQUMsQ0FBQzVKO0FBQXBDO0FBQ0QsaUJBRkQ7QUFHQUMsd0JBQVEsQ0FBQztBQUNQeUIsc0JBQUksRUFBRUMsc0RBQUssQ0FBQ2tJLFdBREw7QUFFUC9ILHlCQUFPLEVBQUU7QUFDUGtHLDJCQUFPLGtDQUNGYyxJQUFJLENBQUNySSxJQUFMLEVBREU7QUFFTFQsd0JBQUUsRUFBRThJLElBQUksQ0FBQzlJLEVBRko7QUFHTDBKLDBCQUFJLEVBQUpBLElBSEs7QUFJTEMsMEJBQUksRUFBSkEsSUFKSztBQUtMWCwrQkFBUyxFQUFUQSxTQUxLO0FBTUxELGdDQUFVLEVBQVZBLFVBTks7QUFPTCxnQ0FBUTNJLEdBQUcsQ0FBQ0ssSUFBSixZQVBIO0FBUUxxRSxnQ0FBVSxFQUFFMUUsR0FBRyxDQUFDSyxJQUFKLEdBQVdpRDtBQVJsQixzQkFEQTtBQVdQb0csaUNBQWEsRUFBRTtBQVhSO0FBRkYsaUJBQUQsQ0FBUjtBQWdCRCxlQTFCSDtBQTRCRCxhQXhERCxNQXdETztBQUNMN0osc0JBQVEsQ0FBQztBQUNQeUIsb0JBQUksRUFBRUMsc0RBQUssQ0FBQ2tJLFdBREw7QUFFUC9ILHVCQUFPLEVBQUU7QUFDUGtHLHlCQUFPLGtDQUNGYyxJQUFJLENBQUNySSxJQUFMLEVBREU7QUFFTFQsc0JBQUUsRUFBRThJLElBQUksQ0FBQzlJLEVBRko7QUFHTCw4QkFBUUksR0FBRyxDQUFDSyxJQUFKO0FBSEgsb0JBREE7QUFNUHFKLCtCQUFhLEVBQUU7QUFOUjtBQUZGLGVBQUQsQ0FBUjtBQVdEO0FBQ0YsV0F0RUQsTUFzRU87QUFDTDdKLG9CQUFRLENBQUM7QUFDUHlCLGtCQUFJLEVBQUVDLHNEQUFLLENBQUNrSSxXQURMO0FBRVAvSCxxQkFBTyxFQUFFO0FBQUVnSSw2QkFBYSxFQUFFO0FBQWpCO0FBRkYsYUFBRCxDQUFSO0FBSUQ7QUFDRixTQWhGSDtBQWlGRCxPQWxGRCxNQWtGTztBQUNMN0osZ0JBQVEsQ0FBQztBQUNQeUIsY0FBSSxFQUFFQyxzREFBSyxDQUFDa0ksV0FETDtBQUVQL0gsaUJBQU8sRUFBRTtBQUFFZ0kseUJBQWEsRUFBRTtBQUFqQjtBQUZGLFNBQUQsQ0FBUjtBQUlEO0FBQ0YsS0E1Rkg7QUE2RkQsR0E5RnlCO0FBQUEsQ0FBbkI7QUFnR0EsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQy9KLEVBQUQ7QUFBQSxTQUFRLFVBQUNDLFFBQUQsRUFBYztBQUMvQ0MsZ0RBQUUsQ0FBQ0MsVUFBSCxDQUFjLFVBQWQsRUFDR3dFLEtBREgsQ0FDUyxTQURULEVBQ29CLElBRHBCLEVBQzBCM0UsRUFEMUIsRUFFR29GLE9BRkgsQ0FFVyxRQUZYLEVBRXFCLEtBRnJCLEVBR0dZLFVBSEgsQ0FHYyxVQUFDcEIsSUFBRCxFQUFVO0FBQ3BCLFVBQUlvRixHQUFHLEdBQUcsRUFBVjtBQUNBcEYsVUFBSSxDQUFDcEQsT0FBTCxDQUFhLFVBQUNwQixHQUFELEVBQVM7QUFDcEI0SixXQUFHLENBQUNqRCxJQUFKLENBQVM7QUFDUHZFLGtCQUFRLEVBQUVwQyxHQUFHLENBQUNLLElBQUosR0FBVytCLFFBRGQ7QUFFUHhDLFlBQUUsRUFBRUksR0FBRyxDQUFDSixFQUZEO0FBR1ArQyxtQkFBUyxFQUFFM0MsR0FBRyxDQUFDSyxJQUFKLEdBQVdzQyxTQUhmO0FBSVBrRixnQkFBTSxFQUFFN0gsR0FBRyxDQUFDSyxJQUFKLEdBQVd3SCxNQUpaO0FBS1B2RSxlQUFLLEVBQUV0RCxHQUFHLENBQUNLLElBQUosR0FBV2lELEtBTFg7QUFNUHlFLHVCQUFhLEVBQUUvSCxHQUFHLENBQUNLLElBQUosR0FBVzBILGFBTm5CO0FBT1A4QixnQkFBTSxFQUFFN0osR0FBRyxDQUFDSyxJQUFKLEdBQVd3SjtBQVBaLFNBQVQ7QUFTRCxPQVZEO0FBV0FoSyxjQUFRLENBQUM7QUFDUHlCLFlBQUksRUFBRUMsc0RBQUssQ0FBQ3VJLFlBREw7QUFFUHBJLGVBQU8sRUFBRWtJO0FBRkYsT0FBRCxDQUFSO0FBSUQsS0FwQkg7QUFxQkQsR0F0QjBCO0FBQUEsQ0FBcEIsQyxDQXdCUDs7QUFFTyxJQUFNRyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDMUosSUFBRDtBQUFBLFNBQVUsVUFBQ1IsUUFBRCxFQUFjO0FBQ2pEQSxZQUFRLENBQUM7QUFBRXlCLFVBQUksRUFBRUMsc0RBQUssQ0FBQ3lJLFlBQWQ7QUFBNEJ0SSxhQUFPLEVBQUU7QUFBRXVJLGtCQUFVLEVBQUU7QUFBZDtBQUFyQyxLQUFELENBQVI7QUFDQSxRQUFJQyxLQUFLLEdBQUcsRUFBWjtBQUVBcEssZ0RBQUUsQ0FBQ0MsVUFBSCxDQUFjLFdBQWQsRUFDR29DLEdBREgsaUNBRU85QixJQUZQO0FBR0k4SixXQUFLLEVBQUUsT0FBTzlKLElBQUksQ0FBQzhKLEtBQVosS0FBc0IsUUFBdEIsR0FBaUM5SixJQUFJLENBQUM4SixLQUF0QyxHQUE4QyxFQUh6RDtBQUlJeEgsZUFBUyxFQUFFQyxvREFBUSxDQUFDQyxTQUFULENBQW1CQyxVQUFuQixDQUE4QkMsZUFBOUI7QUFKZixRQU1HN0MsSUFOSCxDQU1RLFVBQUNrRCxHQUFELEVBQVM7QUFDYjhHLFdBQUssR0FBRzlHLEdBQUcsQ0FBQ3hELEVBQVo7O0FBQ0EsVUFBSSxPQUFPUyxJQUFJLENBQUM4SixLQUFaLEtBQXNCLFFBQTFCLEVBQW9DO0FBQ2xDLFlBQU05RyxTQUFTLGFBQU02RyxLQUFOLGNBQWU3SixJQUFJLENBQUMrSixJQUFMLENBQzNCN0csV0FEMkIsR0FFM0JDLEtBRjJCLENBRXJCLEdBRnFCLEVBRzNCQyxJQUgyQixDQUd0QixHQUhzQixDQUFmLENBQWY7QUFJQUMseURBQU8sQ0FDSkMsR0FESCxXQUNVdEIsOENBQUksQ0FBQ0MsV0FBTCxDQUFpQkMsR0FEM0IsY0FDa0NjLFNBRGxDLEdBRUdPLEdBRkgsQ0FFT3ZELElBQUksQ0FBQzhKLEtBRlosRUFHR2pLLElBSEgsQ0FHUSxZQUFNO0FBQ1YsaUJBQU93RCxpREFBTyxDQUNYQyxHQURJLENBQ0F0Qiw4Q0FBSSxDQUFDQyxXQUFMLENBQWlCQyxHQURqQixFQUVKc0IsS0FGSSxDQUVFUixTQUZGLEVBR0pTLGNBSEksRUFBUDtBQUlELFNBUkgsRUFTRzVELElBVEgsQ0FTUSxVQUFDNkQsR0FBRCxFQUFTO0FBQ2IsaUJBQU9qRSw0Q0FBRSxDQUFDQyxVQUFILENBQWMsV0FBZCxFQUEyQkMsR0FBM0IsQ0FBK0JrSyxLQUEvQixFQUFzQ2xHLE1BQXRDLENBQTZDO0FBQUVtRyxpQkFBSyxFQUFFcEc7QUFBVCxXQUE3QyxDQUFQO0FBQ0QsU0FYSCxFQVlHN0QsSUFaSCxDQVlRLFlBQU07QUFDVkwsa0JBQVEsQ0FBQztBQUNQeUIsZ0JBQUksRUFBRUMsc0RBQUssQ0FBQ3lJLFlBREw7QUFFUHRJLG1CQUFPLEVBQUU7QUFDUHVDLHFCQUFPLEVBQUUsNkJBREY7QUFFUGlHLG1CQUFLLEVBQUU5RyxHQUFHLENBQUN4RCxFQUZKO0FBR1BxSyx3QkFBVSxFQUFFO0FBSEw7QUFGRixXQUFELENBQVI7QUFRRCxTQXJCSDtBQXNCRCxPQTNCRCxNQTJCTztBQUNMcEssZ0JBQVEsQ0FBQztBQUNQeUIsY0FBSSxFQUFFQyxzREFBSyxDQUFDeUksWUFETDtBQUVQdEksaUJBQU8sRUFBRTtBQUNQdUMsbUJBQU8sRUFBRSw2QkFERjtBQUVQaUcsaUJBQUssRUFBRTlHLEdBQUcsQ0FBQ3hELEVBRko7QUFHUHFLLHNCQUFVLEVBQUU7QUFITDtBQUZGLFNBQUQsQ0FBUjtBQVFEO0FBQ0YsS0E3Q0gsV0E4Q1MsVUFBQ3JJLEdBQUQsRUFBUztBQUNkcUMsa0RBQU8sQ0FBQ0MsS0FBUixDQUFjdEMsR0FBRyxDQUFDcUMsT0FBbEI7QUFDRCxLQWhESDtBQWlERCxHQXJEMEI7QUFBQSxDQUFwQjtBQXVEQSxJQUFNb0csWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ2hLLElBQUQ7QUFBQSxTQUFVLFVBQUNSLFFBQUQsRUFBYyxDQUFFLENBQTFCO0FBQUEsQ0FBckI7QUFFQSxJQUFNeUssV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQzFLLEVBQUQ7QUFBQSxTQUFRLFVBQUNDLFFBQUQsRUFBYztBQUMvQ0MsZ0RBQUUsQ0FBQ0MsVUFBSCxDQUFjLFdBQWQsRUFDR0MsR0FESCxDQUNPSixFQURQLEVBRUdLLEdBRkgsR0FHR0MsSUFISCxDQUdRLFVBQUNGLEdBQUQsRUFBUztBQUNiLFVBQUlBLEdBQUcsQ0FBQ0csTUFBUixFQUFnQjtBQUNkTixnQkFBUSxDQUFDO0FBQ1B5QixjQUFJLEVBQUVDLHNEQUFLLENBQUNnSixZQURMO0FBRVA3SSxpQkFBTyxrQ0FBTzFCLEdBQUcsQ0FBQ0ssSUFBSixFQUFQO0FBQW1CVCxjQUFFLEVBQUVJLEdBQUcsQ0FBQ0o7QUFBM0IsWUFGQTtBQUdQNEssd0JBQWMsRUFBRTtBQUhULFNBQUQsQ0FBUjtBQUtELE9BTkQsTUFNTztBQUNMM0ssZ0JBQVEsQ0FBQztBQUNQeUIsY0FBSSxFQUFFQyxzREFBSyxDQUFDZ0osWUFETDtBQUVQQyx3QkFBYyxFQUFFO0FBRlQsU0FBRCxDQUFSO0FBSUQ7QUFDRixLQWhCSDtBQWlCRCxHQWxCMEI7QUFBQSxDQUFwQjtBQW9CQSxJQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUM3SyxFQUFELEVBQUt3SyxJQUFMO0FBQUEsU0FBYyxVQUFDdkssUUFBRCxFQUFjO0FBQ3hEQSxZQUFRLENBQUM7QUFBRXlCLFVBQUksRUFBRUMsc0RBQUssQ0FBQ2dILGNBQWQ7QUFBOEI3RyxhQUFPLEVBQUU7QUFBRU8sZUFBTyxFQUFFO0FBQVg7QUFBdkMsS0FBRCxDQUFSO0FBQ0EsUUFBTXlJLEtBQUssR0FBRzVLLDRDQUFFLENBQUM0SyxLQUFILEVBQWQ7QUFDQSxRQUFNckgsU0FBUyxhQUFNekQsRUFBTixjQUFZd0ssSUFBSSxDQUFDN0csV0FBTCxHQUFtQkMsS0FBbkIsQ0FBeUIsR0FBekIsRUFBOEJDLElBQTlCLENBQW1DLEdBQW5DLENBQVosQ0FBZjtBQUVBaUgsU0FBSyxVQUFMLENBQWE1Syw0Q0FBRSxDQUFDQyxVQUFILENBQWMsV0FBZCxFQUEyQkMsR0FBM0IsQ0FBK0JKLEVBQS9CLENBQWI7QUFDQUUsZ0RBQUUsQ0FBQ0MsVUFBSCxDQUFjLFVBQWQsRUFDR3dFLEtBREgsQ0FDUyxXQURULEVBQ3NCLGdCQUR0QixFQUN3QzNFLEVBRHhDLEVBRUdLLEdBRkgsR0FHR0MsSUFISCxDQUdRLFVBQUNrRCxHQUFELEVBQVM7QUFDYkEsU0FBRyxDQUFDaEMsT0FBSixDQUFZLFVBQUNzSCxJQUFEO0FBQUEsZUFDVmdDLEtBQUssQ0FBQzFHLE1BQU4sQ0FBYWxFLDRDQUFFLENBQUNDLFVBQUgsQ0FBYyxVQUFkLEVBQTBCQyxHQUExQixDQUE4QjBJLElBQUksQ0FBQzlJLEVBQW5DLENBQWIsRUFBcUQ7QUFDbkRnSixtQkFBUyxFQUFFRixJQUFJLENBQUNySSxJQUFMLEdBQVl1SSxTQUFaLENBQXNCMUQsTUFBdEIsQ0FBNkIsVUFBQ3JFLENBQUQ7QUFBQSxtQkFBT0EsQ0FBQyxLQUFLakIsRUFBYjtBQUFBLFdBQTdCO0FBRHdDLFNBQXJELENBRFU7QUFBQSxPQUFaO0FBTUE4RCx1REFBTyxDQUNKQyxHQURILFdBQ1V0Qiw4Q0FBSSxDQUFDQyxXQUFMLENBQWlCQyxHQUQzQixjQUNrQ2MsU0FEbEMsZUFHR25ELElBSEgsQ0FHUSxZQUFNO0FBQ1Z3SyxhQUFLLENBQUNDLE1BQU4sR0FBZXpLLElBQWYsQ0FBb0IsWUFBTTtBQUN4Qkwsa0JBQVEsQ0FBQztBQUNQeUIsZ0JBQUksRUFBRUMsc0RBQUssQ0FBQ2dILGNBREw7QUFFUDdHLG1CQUFPLEVBQUU7QUFDUE8scUJBQU8sRUFBRSxLQURGO0FBRVBnQyxxQkFBTyxFQUFFLCtCQUZGO0FBR1BZLHFCQUFPLEVBQUU7QUFIRjtBQUZGLFdBQUQsQ0FBUjtBQVFELFNBVEQ7QUFVRCxPQWRILFdBZVMsVUFBQ2pELEdBQUQsRUFBUztBQUNkQyxlQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQUNBOEksYUFBSyxDQUFDQyxNQUFOLEdBQWV6SyxJQUFmLENBQW9CLFlBQU07QUFDeEJMLGtCQUFRLENBQUM7QUFDUHlCLGdCQUFJLEVBQUVDLHNEQUFLLENBQUNnSCxjQURMO0FBRVA3RyxtQkFBTyxFQUFFO0FBQ1BPLHFCQUFPLEVBQUUsS0FERjtBQUVQZ0MscUJBQU8sRUFBRSwrQkFGRjtBQUdQWSxxQkFBTyxFQUFFO0FBSEY7QUFGRixXQUFELENBQVI7QUFRRCxTQVREO0FBVUQsT0EzQkg7QUE0QkQsS0F0Q0gsV0F1Q1MsVUFBQ2pELEdBQUQ7QUFBQSxhQUFTQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWixDQUFUO0FBQUEsS0F2Q1Q7QUF3Q0QsR0E5QzZCO0FBQUEsQ0FBdkI7QUFnREEsSUFBTWdKLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ2hMLEVBQUQ7QUFBQSxTQUFRLFVBQUNDLFFBQUQsRUFBYztBQUNwRCxRQUFNa0YsTUFBTSxHQUFHbkYsRUFBRSxHQUFHQSxFQUFILEdBQVF5Qyw4Q0FBSSxDQUFDQyxXQUFMLENBQWlCQyxHQUExQztBQUNBekMsZ0RBQUUsQ0FBQ0MsVUFBSCxDQUFjLFdBQWQsRUFDR3dFLEtBREgsQ0FDUyxVQURULEVBQ3FCLElBRHJCLEVBQzJCUSxNQUQzQixFQUVHOUUsR0FGSCxHQUdHQyxJQUhILENBR1EsVUFBQ3NFLElBQUQsRUFBVTtBQUNkLFVBQUlvRSxTQUFTLEdBQUcsRUFBaEI7QUFDQXBFLFVBQUksQ0FBQ3BELE9BQUwsQ0FBYSxVQUFDcEIsR0FBRCxFQUFTO0FBQ3BCNEksaUJBQVMsMEdBQU9BLFNBQVA7QUFBb0JoSixZQUFFLEVBQUVJLEdBQUcsQ0FBQ0o7QUFBNUIsV0FBbUNJLEdBQUcsQ0FBQ0ssSUFBSixFQUFuQyxHQUFUO0FBQ0QsT0FGRDtBQUdBUixjQUFRLENBQUM7QUFDUHlCLFlBQUksRUFBRUMsc0RBQUssQ0FBQ3NKLGtCQURMO0FBRVBuSixlQUFPLEVBQUVrSDtBQUZGLE9BQUQsQ0FBUjtBQUlELEtBWkg7QUFhRCxHQWYrQjtBQUFBLENBQXpCO0FBaUJBLElBQU1rQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUM1SSxPQUFEO0FBQUEsU0FBYSxVQUFDckMsUUFBRCxFQUFjO0FBQzFEQyxnREFBRSxDQUFDQyxVQUFILENBQWMsV0FBZCxFQUNHd0UsS0FESCxDQUNTLFNBRFQsRUFDb0IsSUFEcEIsRUFDMEJyQyxPQUQxQixFQUVHakMsR0FGSCxHQUdHQyxJQUhILENBR1EsVUFBQ3NFLElBQUQsRUFBVTtBQUNkLFVBQU1vRSxTQUFTLEdBQUdwRSxJQUFJLENBQUNBLElBQUwsQ0FBVTVELEdBQVYsQ0FBYyxVQUFDWixHQUFEO0FBQUEsK0NBQWVBLEdBQUcsQ0FBQ0ssSUFBSixFQUFmO0FBQTJCVCxZQUFFLEVBQUVJLEdBQUcsQ0FBQ0o7QUFBbkM7QUFBQSxPQUFkLENBQWxCO0FBQ0FDLGNBQVEsQ0FBQztBQUNQeUIsWUFBSSxFQUFFQyxzREFBSyxDQUFDd0osbUJBREw7QUFFUHJKLGVBQU8sRUFBRWtIO0FBRkYsT0FBRCxDQUFSO0FBSUQsS0FUSDtBQVVELEdBWGdDO0FBQUEsQ0FBMUIsQyxDQWFQOztBQUVPLElBQU1vQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDcEwsRUFBRDtBQUFBLFNBQVEsVUFBQ0MsUUFBRCxFQUFjO0FBQy9DQyxnREFBRSxDQUFDQyxVQUFILENBQWMsVUFBZCxFQUNHd0UsS0FESCxDQUNTLFdBRFQsRUFDc0IsSUFEdEIsRUFDNEIzRSxFQUQ1QixFQUVHb0YsT0FGSCxDQUVXLFdBRlgsRUFFd0IsTUFGeEIsRUFHR1ksVUFISCxDQUdjLFVBQUNxRixJQUFELEVBQVU7QUFDcEIsVUFBSUMsUUFBUSxHQUFHRCxJQUFJLENBQUN6RyxJQUFMLENBQVU1RCxHQUFWLENBQWMsVUFBQ3VLLE9BQUQ7QUFBQSwrQ0FDeEJBLE9BQU8sQ0FBQzlLLElBQVIsRUFEd0I7QUFFM0JULFlBQUUsRUFBRXVMLE9BQU8sQ0FBQ3ZMO0FBRmU7QUFBQSxPQUFkLENBQWY7QUFJQSxVQUFJd0wsT0FBTyxHQUFHLEVBQWQ7QUFDQUYsY0FBUSxDQUFDOUosT0FBVCxDQUFpQixVQUFDaUssSUFBRCxFQUFVO0FBQ3pCRCxlQUFPLENBQUN6RSxJQUFSLENBQWE3Ryw0Q0FBRSxDQUFDQyxVQUFILENBQWMsT0FBZCxFQUF1QkMsR0FBdkIsQ0FBMkJxTCxJQUFJLENBQUN0RyxNQUFoQyxFQUF3QzlFLEdBQXhDLEVBQWI7QUFDRCxPQUZEO0FBR0FlLGFBQU8sQ0FBQ0MsR0FBUixDQUFZbUssT0FBWixFQUFxQmxMLElBQXJCLENBQTBCLFVBQUNrRCxHQUFELEVBQVM7QUFDakM4SCxnQkFBUSxHQUFHQSxRQUFRLENBQUN0SyxHQUFULENBQWEsVUFBQ3lLLElBQUQ7QUFBQSxtQ0FDbkJBLElBRG1CO0FBQUEsU0FBYixDQUFYO0FBSUF4TCxnQkFBUSxDQUFDO0FBQ1B5QixjQUFJLEVBQUVDLHNEQUFLLENBQUMrSixZQURMO0FBRVA1SixpQkFBTyxFQUFFO0FBQ1A2SiwyQkFBZSxFQUFFLEtBRFY7QUFFUEwsb0JBQVEsRUFBUkE7QUFGTztBQUZGLFNBQUQsQ0FBUjtBQU9ELE9BWkQ7QUFhRCxLQXpCSDtBQTBCRCxHQTNCMEI7QUFBQSxDQUFwQjtBQTZCQSxJQUFNTSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLElBQUQ7QUFBQSxTQUFVLFVBQUM1TCxRQUFELEVBQWM7QUFDbkQsUUFBSSxDQUFDd0MsOENBQUksQ0FBQ0MsV0FBTCxDQUFpQjZELGFBQXRCLEVBQ0UsT0FBT2xDLDRDQUFPLENBQUNDLEtBQVIsQ0FBYyxxQ0FBZCxDQUFQO0FBQ0YsUUFBSSxDQUFDdUgsSUFBSSxDQUFDQyxPQUFWLEVBQW1CLE9BQU96SCw0Q0FBTyxDQUFDQyxLQUFSLENBQWMsMkJBQWQsQ0FBUDtBQUVuQnBFLGdEQUFFLENBQUNDLFVBQUgsQ0FBYyxVQUFkLEVBQ0dvQyxHQURILGlDQUVPc0osSUFGUDtBQUdJRSxpQkFBVyxFQUFFLEtBSGpCO0FBSUlDLGVBQVMsRUFBRSxLQUpmO0FBS0lqSixlQUFTLEVBQUVDLG9EQUFRLENBQUNDLFNBQVQsQ0FBbUJDLFVBQW5CLENBQThCQyxlQUE5QjtBQUxmLFFBT0c3QyxJQVBILENBT1E7QUFBQSxhQUFNK0QsNENBQU8sQ0FBQ3FDLE9BQVIsQ0FBZ0IsNkJBQWhCLENBQU47QUFBQSxLQVBSLFdBUVMsVUFBQzFFLEdBQUQ7QUFBQSxhQUFTcUMsNENBQU8sQ0FBQ0MsS0FBUixDQUFjdEMsR0FBRyxDQUFDcUMsT0FBbEIsQ0FBVDtBQUFBLEtBUlQ7QUFTRCxHQWQ0QjtBQUFBLENBQXRCO0FBZ0JBLElBQU00SCxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNqTSxFQUFEO0FBQUEsU0FBUSxVQUFDQyxRQUFELEVBQWM7QUFDakRDLGdEQUFFLENBQUNDLFVBQUgsQ0FBYyxVQUFkLEVBQTBCQyxHQUExQixDQUE4QkosRUFBOUI7QUFDRCxHQUY0QjtBQUFBLENBQXRCLEMsQ0FJUDs7QUFFTyxJQUFNa00sb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixDQUFDQyxNQUFEO0FBQUEsU0FBWSxVQUFDbE0sUUFBRCxFQUFjO0FBQzVELFFBQUlzQixNQUFNLEdBQUcsRUFBYjtBQUNBckIsZ0RBQUUsQ0FBQ0MsVUFBSCxDQUFjLFNBQWQsRUFDR3dFLEtBREgsQ0FDUyxRQURULEVBQ21CLElBRG5CLEVBQ3lCLElBRHpCLEVBRUd0RSxHQUZILEdBR0dDLElBSEgsQ0FHUSxVQUFDRyxJQUFELEVBQVU7QUFDZEEsVUFBSSxDQUFDZSxPQUFMLENBQWEsVUFBQ3BCLEdBQUQsRUFBUztBQUNwQixZQUFNc0QsS0FBSyxHQUFHdEQsR0FBRyxDQUFDSyxJQUFKLEdBQVdpRCxLQUFYLENBQWlCQyxXQUFqQixHQUErQkMsS0FBL0IsQ0FBcUMsR0FBckMsQ0FBZDtBQUNBLFlBQU1oQixVQUFVLEdBQUd4QyxHQUFHLENBQUNLLElBQUosR0FBV21DLFVBQVgsQ0FBc0JlLFdBQXRCLEdBQW9DQyxLQUFwQyxDQUEwQyxHQUExQyxDQUFuQjtBQUNBLFlBQU13SSxVQUFVLEdBQUdELE1BQU0sQ0FBQ3ZJLEtBQVAsQ0FBYSxHQUFiLENBQW5CO0FBQ0EsWUFBTXlJLFVBQVUsR0FBR0QsVUFBVSxDQUFDRSxLQUFYLENBQWlCLFVBQUNDLElBQUQ7QUFBQSxpQkFBVTdJLEtBQUssQ0FBQ3dFLFFBQU4sQ0FBZXFFLElBQWYsQ0FBVjtBQUFBLFNBQWpCLENBQW5CO0FBQ0EsWUFBTUMsVUFBVSxHQUFHSixVQUFVLENBQUNLLElBQVgsQ0FDakIsVUFBQ0YsSUFBRDtBQUFBLGlCQUFVbk0sR0FBRyxDQUFDSyxJQUFKLEdBQVdpRCxLQUFYLENBQWlCQyxXQUFqQixHQUErQitJLE9BQS9CLENBQXVDSCxJQUF2QyxNQUFpRCxDQUFDLENBQTVEO0FBQUEsU0FEaUIsQ0FBbkI7QUFHQSxZQUFNSSxjQUFjLEdBQUdQLFVBQVUsQ0FBQ0UsS0FBWCxDQUFpQixVQUFDQyxJQUFEO0FBQUEsaUJBQ3RDM0osVUFBVSxDQUFDc0YsUUFBWCxDQUFvQnFFLElBQXBCLENBRHNDO0FBQUEsU0FBakIsQ0FBdkI7QUFHQSxZQUFNSyxnQkFBZ0IsR0FBR1IsVUFBVSxDQUFDSyxJQUFYLENBQ3ZCLFVBQUNGLElBQUQ7QUFBQSxpQkFBVW5NLEdBQUcsQ0FBQ0ssSUFBSixHQUFXbUMsVUFBWCxDQUFzQmUsV0FBdEIsR0FBb0MrSSxPQUFwQyxDQUE0Q0gsSUFBNUMsTUFBc0QsQ0FBQyxDQUFqRTtBQUFBLFNBRHVCLENBQXpCOztBQUdBLFlBQUlGLFVBQVUsSUFBSUcsVUFBZCxJQUE0QkcsY0FBNUIsSUFBOENDLGdCQUFsRCxFQUFvRTtBQUNsRXJMLGdCQUFNLENBQUN3RixJQUFQLGlDQUFpQjNHLEdBQUcsQ0FBQ0ssSUFBSixFQUFqQjtBQUE2QlQsY0FBRSxFQUFFSSxHQUFHLENBQUNKO0FBQXJDO0FBQ0Q7QUFDRixPQWpCRDtBQWtCQSxhQUFPdUIsTUFBUDtBQUNELEtBdkJILEVBd0JHakIsSUF4QkgsQ0F3QlEsWUFBTTtBQUNWTCxjQUFRLENBQUM7QUFDUHlCLFlBQUksRUFBRUMsc0RBQUssQ0FBQzJGLHVCQURMO0FBRVB4RixlQUFPLEVBQUVQLE1BRkY7QUFHUGMsZUFBTyxFQUFFO0FBSEYsT0FBRCxDQUFSO0FBS0QsS0E5Qkg7QUErQkQsR0FqQ21DO0FBQUEsQ0FBN0IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZXhwbG9yZS5iODI3MDYzYjlkNDZkYjk2MGI4MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdHlwZXMgfSBmcm9tIFwiLi4vLi4vdXRpbHMvY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IGRiLCBhdXRoLCBzdG9yYWdlIH0gZnJvbSBcIi4uL2ZiQ29uZmlnXCI7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcbmltcG9ydCB7IG1lc3NhZ2UgfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuLy8gU1RPUklFU1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0b3J5ID0gKGlkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKVxyXG4gICAgLmRvYyhpZClcclxuICAgIC5nZXQoKVxyXG4gICAgLnRoZW4oKGRvYykgPT4ge1xyXG4gICAgICBpZiAoZG9jLmV4aXN0cykge1xyXG4gICAgICAgIGNvbnN0IG1haW4gPSBkb2MuZGF0YSgpLm1haW5DaGFyYWN0ZXJzO1xyXG4gICAgICAgIGNvbnN0IHNlY29uZGFyeSA9IGRvYy5kYXRhKCkuc2Vjb25kYXJ5Q2hhcmFjdGVycztcclxuICAgICAgICBsZXQgbWFpbkFyciA9IFtdO1xyXG4gICAgICAgIGxldCBzZWNvbmRhcnlBcnIgPSBbXTtcclxuICAgICAgICBjb25zdCBtYWluUXVlcnkgPSBtYWluLm1hcCgoYykgPT5cclxuICAgICAgICAgIGRiLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzXCIpLmRvYyhjKS5nZXQoKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3Qgc2Vjb25kYXJ5UXVlcnkgPSBzZWNvbmRhcnkubWFwKChjKSA9PlxyXG4gICAgICAgICAgZGIuY29sbGVjdGlvbihcImNoYXJhY3RlcnNcIikuZG9jKGMuaWQpLmdldCgpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBtYWluUmVzID0gUHJvbWlzZS5hbGwobWFpblF1ZXJ5KTtcclxuICAgICAgICBjb25zdCBzZWNvbmRhcnlSZXMgPSBQcm9taXNlLmFsbChzZWNvbmRhcnlRdWVyeSk7XHJcbiAgICAgICAgUHJvbWlzZS5hbGwoW21haW5SZXMsIHNlY29uZGFyeVJlc10pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgcmVzdWx0WzBdLmZvckVhY2goKGRvY3UpID0+IHtcclxuICAgICAgICAgICAgbWFpbkFyciA9IFsuLi5tYWluQXJyLCB7IC4uLmRvY3UuZGF0YSgpLCBpZDogZG9jdS5pZCB9XTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgcmVzdWx0WzFdLmZvckVhY2goKGRvY3UpID0+IHtcclxuICAgICAgICAgICAgc2Vjb25kYXJ5QXJyID0gWy4uLnNlY29uZGFyeUFyciwgeyAuLi5kb2N1LmRhdGEoKSwgaWQ6IGRvY3UuaWQgfV07XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogdHlwZXMuR0VUX1NUT1JZLFxyXG4gICAgICAgICAgICBzdG9yeUV4aXN0czogdHJ1ZSxcclxuICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgIC4uLmRvYy5kYXRhKCksXHJcbiAgICAgICAgICAgICAgaWQ6IGRvYy5pZCxcclxuICAgICAgICAgICAgICBzZWNvbmRhcnlDaGFyYWN0ZXJzOiBzZWNvbmRhcnlBcnIsXHJcbiAgICAgICAgICAgICAgbWFpbkNoYXJhY3RlcnM6IG1haW5BcnIsXHJcbiAgICAgICAgICAgICAgbWFpbkFycjogZG9jLmRhdGEoKS5tYWluQ2hhcmFjdGVycyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IHR5cGVzLkRJU1BBVENIX0VSUk9SLFxyXG4gICAgICAgICAgc3RvcnlFeGlzdHM6IGZhbHNlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFN0b3J5ID0gKGRhdGEpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRpc3BhdGNoKHsgdHlwZTogdHlwZXMuQUREX1NUT1JZLCBwYXlsb2FkOiB7IGxvYWRpbmc6IHRydWUgfSB9KTtcclxuICBsZXQgc3RvcnlJZCA9IFwiXCI7XHJcblxyXG4gIGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpXHJcbiAgICAuYWRkKHtcclxuICAgICAgLi4uZGF0YSxcclxuICAgICAgYXV0aG9ySWQ6IGF1dGguY3VycmVudFVzZXIudWlkLFxyXG4gICAgICBhdXRob3JOYW1lOiBkYXRhLmF1dGhvck5hbWUsXHJcbiAgICAgIG9uZVNob3Q6IGZhbHNlLFxyXG4gICAgICBiYW5uZXI6IHR5cGVvZiBkYXRhLmJhbm5lciA9PT0gXCJzdHJpbmdcIiA/IGRhdGEuYmFubmVyIDogXCJcIixcclxuICAgICAgY3JlYXRlZEF0OiBmaXJlYmFzZS5maXJlc3RvcmUuRmllbGRWYWx1ZS5zZXJ2ZXJUaW1lc3RhbXAoKSxcclxuICAgICAgbGlrZXNDb3VudDogMCxcclxuICAgICAgY2hhcHRlcnNDb3VudDogMCxcclxuICAgICAgc2Vjb25kYXJ5Q2hhcmFjdGVyczogW10sXHJcbiAgICAgIHNlY29uZGFyeUFycjogW10sXHJcbiAgICAgIGZlYXR1cmVkOiBmYWxzZSxcclxuICAgICAgbm90ZTogMCxcclxuICAgICAgY2hhcHRlcnNDb3VudDogMCxcclxuICAgICAgY29tbWVudHNDb3VudDogMCxcclxuICAgICAgbGFzdFVwZGF0ZWQ6IGZpcmViYXNlLmZpcmVzdG9yZS5GaWVsZFZhbHVlLnNlcnZlclRpbWVzdGFtcCgpLFxyXG4gICAgfSlcclxuICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgc3RvcnlJZCA9IHJlcy5pZDtcclxuICAgICAgaWYgKHR5cGVvZiBkYXRhLmJhbm5lciA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgIGNvbnN0IGltYWdlTmFtZSA9IGAke3Jlcy5pZH1fJHtkYXRhLnRpdGxlXHJcbiAgICAgICAgICAudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgICAgLnNwbGl0KFwiIFwiKVxyXG4gICAgICAgICAgLmpvaW4oXCJfXCIpfWA7XHJcbiAgICAgICAgc3RvcmFnZVxyXG4gICAgICAgICAgLnJlZihgJHthdXRoLmN1cnJlbnRVc2VyLnVpZH0vJHtpbWFnZU5hbWV9YClcclxuICAgICAgICAgIC5wdXQoZGF0YS5iYW5uZXIpXHJcbiAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdG9yYWdlXHJcbiAgICAgICAgICAgICAgLnJlZihhdXRoLmN1cnJlbnRVc2VyLnVpZClcclxuICAgICAgICAgICAgICAuY2hpbGQoaW1hZ2VOYW1lKVxyXG4gICAgICAgICAgICAgIC5nZXREb3dubG9hZFVSTCgpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKCh1cmwpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGRiXHJcbiAgICAgICAgICAgICAgLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpXHJcbiAgICAgICAgICAgICAgLmRvYyhzdG9yeUlkKVxyXG4gICAgICAgICAgICAgIC51cGRhdGUoeyBiYW5uZXI6IHVybCB9KTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICB0eXBlOiB0eXBlcy5BRERfU1RPUlksXHJcbiAgICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJTdG9yeSBhZGRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgICAgICAgIHN0b3J5SWQ6IHN0b3J5SWQsXHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IHR5cGVzLkFERF9TVE9SWSxcclxuICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJTdG9yeSBhZGRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgICAgc3RvcnlJZDogc3RvcnlJZCxcclxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgbWVzc2FnZS5lcnJvcihlcnIubWVzc2FnZSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBlZGl0U3RvcnkgPSAoZGF0YSwgc3RvcnlJZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGlzcGF0Y2goeyB0eXBlOiB0eXBlcy5FRElUX1NUT1JZLCBwYXlsb2FkOiB7IGxvYWRpbmdTdG9yeTogdHJ1ZSB9IH0pO1xyXG4gIGNvbnN0IGltYWdlTmFtZSA9IGRhdGEudGl0bGUudG9Mb3dlckNhc2UoKS5zcGxpdChcIiBcIikuam9pbihcIl9cIik7XHJcblxyXG4gIGlmICh0eXBlb2YgZGF0YS5iYW5uZXIgPT09IFwib2JqZWN0XCIpIHtcclxuICAgIHN0b3JhZ2VcclxuICAgICAgLnJlZihgJHthdXRoLmN1cnJlbnRVc2VyLnVpZH0vJHtpbWFnZU5hbWV9YClcclxuICAgICAgLnB1dChkYXRhLmJhbm5lcilcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBzdG9yYWdlXHJcbiAgICAgICAgICAucmVmKGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gICAgICAgICAgLmNoaWxkKGltYWdlTmFtZSlcclxuICAgICAgICAgIC5nZXREb3dubG9hZFVSTCgpO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigodXJsKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGRiXHJcbiAgICAgICAgICAuY29sbGVjdGlvbihcInN0b3JpZXNcIilcclxuICAgICAgICAgIC5kb2Moc3RvcnlJZClcclxuICAgICAgICAgIC51cGRhdGUoe1xyXG4gICAgICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgICAgICBiYW5uZXI6IHVybCxcclxuICAgICAgICAgICAgbGFzdFVwZGF0ZWQ6IGZpcmViYXNlLmZpcmVzdG9yZS5GaWVsZFZhbHVlLnNlcnZlclRpbWVzdGFtcCgpLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICBkYi5jb2xsZWN0aW9uKFwibG9jYXRpb25zXCIpXHJcbiAgICAgICAgICAud2hlcmUoXCJzdG9yeUlkXCIsIFwiPT1cIiwgc3RvcnlJZClcclxuICAgICAgICAgIC5nZXQoKVxyXG4gICAgICAgICAgLnRoZW4oKGRvY3MpID0+IHtcclxuICAgICAgICAgICAgbGV0IGxvY2F0aW9uUXVlcnkgPSBbXTtcclxuICAgICAgICAgICAgZG9jcy5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgICAgICAgICAgICBsb2NhdGlvblF1ZXJ5ID0gW1xyXG4gICAgICAgICAgICAgICAgLi4ubG9jYXRpb25RdWVyeSxcclxuICAgICAgICAgICAgICAgIGRiXHJcbiAgICAgICAgICAgICAgICAgIC5jb2xsZWN0aW9uKFwibG9jYXRpb25zXCIpXHJcbiAgICAgICAgICAgICAgICAgIC5kb2MoZG9jLmlkKVxyXG4gICAgICAgICAgICAgICAgICAudXBkYXRlKHsgc3RvcnlUaXRsZTogZGF0YS50aXRsZSB9KSxcclxuICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgUHJvbWlzZS5hbGwobG9jYXRpb25RdWVyeSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogdHlwZXMuRURJVF9TVE9SWSxcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJTdG9yeSBlZGl0ZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoZXJyLm1lc3NhZ2UpO1xyXG4gICAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgZGIuY29sbGVjdGlvbihcInN0b3JpZXNcIilcclxuICAgICAgLmRvYyhzdG9yeUlkKVxyXG4gICAgICAudXBkYXRlKHtcclxuICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgIGxhc3RVcGRhdGVkOiBmaXJlYmFzZS5maXJlc3RvcmUuRmllbGRWYWx1ZS5zZXJ2ZXJUaW1lc3RhbXAoKSxcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIGRiLmNvbGxlY3Rpb24oXCJsb2NhdGlvbnNcIilcclxuICAgICAgICAgIC53aGVyZShcInN0b3J5SWRcIiwgXCI9PVwiLCBzdG9yeUlkKVxyXG4gICAgICAgICAgLmdldCgpXHJcbiAgICAgICAgICAudGhlbigoZG9jcykgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbG9jYXRpb25RdWVyeSA9IFtdO1xyXG4gICAgICAgICAgICBkb2NzLmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgICAgICAgICAgIGxvY2F0aW9uUXVlcnkgPSBbXHJcbiAgICAgICAgICAgICAgICAuLi5sb2NhdGlvblF1ZXJ5LFxyXG4gICAgICAgICAgICAgICAgZGJcclxuICAgICAgICAgICAgICAgICAgLmNvbGxlY3Rpb24oXCJsb2NhdGlvbnNcIilcclxuICAgICAgICAgICAgICAgICAgLmRvYyhkb2MuaWQpXHJcbiAgICAgICAgICAgICAgICAgIC51cGRhdGUoeyBzdG9yeVRpdGxlOiBkYXRhLnRpdGxlIH0pLFxyXG4gICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBQcm9taXNlLmFsbChsb2NhdGlvblF1ZXJ5KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiB0eXBlcy5FRElUX1NUT1JZLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIlN0b3J5IGVkaXRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihlcnIubWVzc2FnZSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkZWxldGVTdG9yeSA9IChpZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGlzcGF0Y2goeyB0eXBlOiB0eXBlcy5ERUxFVEVfU1RPUlksIHBheWxvYWQ6IHsgbG9hZGluZzogdHJ1ZSB9IH0pO1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpXHJcbiAgICAuZG9jKGlkKVxyXG4gICAgLmRlbGV0ZSgpXHJcbiAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiB0eXBlcy5ERUxFVEVfU1RPUlksXHJcbiAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgbWVzc2FnZTogXCJTdG9yeSBkZWxldGVkIHN1Y2Nlc3NmdWxseVwiLFxyXG4gICAgICAgICAgbG9hZGluZzogdHJ1ZSxcclxuICAgICAgICAgIGRlbGV0ZWQ6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyU3RvcmllcyA9IChpZCwgdHlwZSkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgY29uc3QgdXNlcklkID0gaWQgPyBpZCA6IGF1dGguY3VycmVudFVzZXIudWlkO1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpXHJcbiAgICAud2hlcmUoXCJhdXRob3JJZFwiLCBcIj09XCIsIHVzZXJJZClcclxuICAgIC5vcmRlckJ5KFwiY3JlYXRlZEF0XCIsIFwiZGVzY1wiKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigoZG9jcykgPT4ge1xyXG4gICAgICBsZXQgaXRlbXMgPSBbXTtcclxuICAgICAgZG9jcy5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgICAgICBpdGVtcyA9IFsuLi5pdGVtcywgeyBpZDogZG9jLmlkLCAuLi5kb2MuZGF0YSgpIH1dLmZpbHRlcigocykgPT5cclxuICAgICAgICAgIGlkID8gcy5wdWJsaWMgOiBzXHJcbiAgICAgICAgKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBpdGVtcztcclxuICAgIH0pXHJcbiAgICAudGhlbigoaXRlbXMpID0+IHtcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiB0eXBlcy5HRVRfVVNFUl9TVE9SSUVTLCBwYXlsb2FkOiBpdGVtcyB9KTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEZhdm9yaXRlU3RvcmllcyA9IChpZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgY29uc3QgdXNlcklkID0gaWQgPyBpZCA6IGF1dGguY3VycmVudFVzZXIudWlkO1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzTGlrZXNcIilcclxuICAgIC53aGVyZShcInNlbmRlcklkXCIsIFwiPT1cIiwgdXNlcklkKVxyXG4gICAgLm9yZGVyQnkoXCJjcmVhdGVkQXRcIiwgXCJkZXNjXCIpXHJcbiAgICAuZ2V0KClcclxuICAgIC50aGVuKChkb2NzKSA9PiB7XHJcbiAgICAgIGxldCBmYXZBcnIgPSBbXTtcclxuICAgICAgZG9jcy5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgICAgICBmYXZBcnIgPSBbLi4uZmF2QXJyLCBkb2MuZGF0YSgpLnN0b3J5SWRdO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGZhdkFycjtcclxuICAgIH0pXHJcbiAgICAudGhlbigodXNlcnMpID0+IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gdXNlcnMubWFwKCh1c2VyKSA9PlxyXG4gICAgICAgIGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpLmRvYyh1c2VyKS5nZXQoKVxyXG4gICAgICApO1xyXG4gICAgICBQcm9taXNlLmFsbChyZXN1bHQpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGxldCBmYXZVc2VycyA9IFtdO1xyXG4gICAgICAgIHJlcy5mb3JFYWNoKFxyXG4gICAgICAgICAgKGRvYykgPT4gKGZhdlVzZXJzID0gWy4uLmZhdlVzZXJzLCB7IGlkOiBkb2MuaWQsIC4uLmRvYy5kYXRhKCkgfV0pXHJcbiAgICAgICAgKTtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiB0eXBlcy5HRVRfRkFWT1JJVEVfU1RPUklFUyxcclxuICAgICAgICAgIHBheWxvYWQ6IGZhdlVzZXJzLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGlzU3RvcnlGYXZvcml0ZSA9IChzdG9yeUlkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBpZiAoYXV0aC5jdXJyZW50VXNlcikge1xyXG4gICAgZGIuY29sbGVjdGlvbihcInN0b3JpZXNMaWtlc1wiKVxyXG4gICAgICAud2hlcmUoXCJzZW5kZXJJZFwiLCBcIj09XCIsIGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gICAgICAud2hlcmUoXCJzdG9yeUlkXCIsIFwiPT1cIiwgc3RvcnlJZClcclxuICAgICAgLm9uU25hcHNob3QoKHNuYXBzaG90KSA9PiB7XHJcbiAgICAgICAgY29uc3QgYW5zd2VyID0gc25hcHNob3QuZG9jc1swXSA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICByZXR1cm4gZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogdHlwZXMuSVNfU1RPUllfRkFWT1JJVEUsXHJcbiAgICAgICAgICBwYXlsb2FkOiBhbnN3ZXIsXHJcbiAgICAgICAgICBsb2FkaW5nRmF2OiBmYWxzZSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IHR5cGVzLklTX1NUT1JZX0ZBVk9SSVRFLFxyXG4gICAgICBwYXlsb2FkOiBmYWxzZSxcclxuICAgICAgbG9hZGluZ0ZhdjogZmFsc2UsXHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYWRkU3RvcnlUb0Zhdm9yaXRlID0gKGlkLCB1c2VybmFtZSwgc3RvcnlUaXRsZSwgYXV0aG9ySWQpID0+IChcclxuICBkaXNwYXRjaFxyXG4pID0+IHtcclxuICAvLyBpZiAoaXNGYXZvcml0ZSkgcmV0dXJuIG1lc3NhZ2Uud2FybmluZyhcIllvdSd2ZSBhbHJlYWR5IGxpa2VkIHRoaXMgc3RvcnlcIik7XHJcbiAgaWYgKCFhdXRoLmN1cnJlbnRVc2VyKVxyXG4gICAgcmV0dXJuIG1lc3NhZ2UuZXJyb3IoXCJZb3UgbmVlZCB0byBiZSBsb2dnZWQgaW4gdG8gbGlrZSBhIHN0b3J5XCIpO1xyXG4gIGlmICghYXV0aC5jdXJyZW50VXNlci5lbWFpbFZlcmlmaWVkKVxyXG4gICAgcmV0dXJuIG1lc3NhZ2UuZXJyb3IoXCJZb3UgbmVlZCB0byB2ZXJpZnkgeW91ciBlbWFpbCBmaXJzdFwiKTtcclxuXHJcbiAgcmV0dXJuIGRiXHJcbiAgICAuY29sbGVjdGlvbihcInN0b3JpZXNMaWtlc1wiKVxyXG4gICAgLmFkZCh7XHJcbiAgICAgIHNlbmRlcjogdXNlcm5hbWUsXHJcbiAgICAgIHNlbmRlcklkOiBhdXRoLmN1cnJlbnRVc2VyLnVpZCxcclxuICAgICAgc3RvcnlJZDogaWQsXHJcbiAgICAgIGNyZWF0ZWRBdDogZmlyZWJhc2UuZmlyZXN0b3JlLkZpZWxkVmFsdWUuc2VydmVyVGltZXN0YW1wKCksXHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKCkgPT4gbWVzc2FnZS5zdWNjZXNzKGAke3N0b3J5VGl0bGV9IGFkZGVkIHRvIHlvdXIgZmF2b3JpdGVzYCkpXHJcbiAgICAuY2F0Y2goKGVycikgPT4gbWVzc2FnZS5lcnJvcihlcnIubWVzc2FnZSkpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZVN0b3J5RnJvbUZhdm9yaXRlID0gKGlkLCBzdG9yeVRpdGxlKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc0xpa2VzXCIpXHJcbiAgICAud2hlcmUoXCJzdG9yeUlkXCIsIFwiPT1cIiwgaWQpXHJcbiAgICAud2hlcmUoXCJzZW5kZXJJZFwiLCBcIj09XCIsIGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGIuY29sbGVjdGlvbihcInN0b3JpZXNMaWtlc1wiKS5kb2MoZGF0YS5kb2NzWzBdLmlkKS5kZWxldGUoKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoKSA9PiBtZXNzYWdlLnN1Y2Nlc3MoYCR7c3RvcnlUaXRsZX0gcmVtb3ZlZCBmcm9tIHlvdXIgZmF2b3JpdGVzYCkpXHJcbiAgICAuY2F0Y2goKGVycikgPT4gbWVzc2FnZS5lcnJvcihcIlRoZXJlIGhhcyBiZWVuIGEgcHJvYmxlbVwiKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RvcnlDaGFyYWN0ZXJzID0gKCkgPT4gKGRpc3BhdGNoKSA9PiB7fTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRIb21lU3RvcmllcyA9ICgpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGxldCByZXN1bHQgPSBbXTtcclxuICBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKVxyXG4gICAgLndoZXJlKFwicHVibGljXCIsIFwiPT1cIiwgdHJ1ZSlcclxuICAgIC5vcmRlckJ5KFwibGlrZXNDb3VudFwiLCBcImRlc2NcIilcclxuICAgIC5saW1pdCg0KVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigoZG9jcykgPT4ge1xyXG4gICAgICBkb2NzLmZvckVhY2goKGRvYykgPT4gcmVzdWx0LnB1c2goeyBpZDogZG9jLmlkLCAuLi5kb2MuZGF0YSgpIH0pKTtcclxuICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IHR5cGVzLkdFVF9IT01FX1NUT1JJRVMsXHJcbiAgICAgICAgcGF5bG9hZDogcmVzdWx0LFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEZlYXR1cmVkU3RvcmllcyA9ICgpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpXHJcbiAgICAud2hlcmUoXCJwdWJsaWNcIiwgXCI9PVwiLCB0cnVlKVxyXG4gICAgLndoZXJlKFwiZmVhdHVyZWRcIiwgXCI9PVwiLCB0cnVlKVxyXG4gICAgLmxpbWl0KDEwKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigoZG9jcykgPT4ge1xyXG4gICAgICBsZXQgcmVzdWx0ID0gW107XHJcbiAgICAgIGRvY3MuZm9yRWFjaCgoZG9jKSA9PiByZXN1bHQucHVzaCh7IGlkOiBkb2MuaWQsIC4uLmRvYy5kYXRhKCkgfSkpO1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogdHlwZXMuR0VUX0ZFQVRVUkVEX1NUT1JJRVMsXHJcbiAgICAgICAgcGF5bG9hZDogcmVzdWx0LFxyXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0b3JpZXNCeUxldHRlciA9IChsZXR0ZXIsIGFscGhhYmV0KSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkaXNwYXRjaCh7IHR5cGU6IHR5cGVzLkdFVF9TVE9SSUVTX0ZST01fU0VBUkNILCBsb2FkaW5nOiB0cnVlIH0pO1xyXG5cclxuICBjb25zdCBlbmQgPSBhbHBoYWJldC5maW5kSW5kZXgoKGEpID0+IGEgPT09IGxldHRlcik7XHJcbiAgZGIuY29sbGVjdGlvbihcInN0b3JpZXNcIilcclxuICAgIC53aGVyZShcInB1YmxpY1wiLCBcIj09XCIsIHRydWUpXHJcbiAgICAub3JkZXJCeShcInRpdGxlXCIsIFwiYXNjXCIpXHJcbiAgICAuc3RhcnRBdChsZXR0ZXIudG9VcHBlckNhc2UoKSlcclxuICAgIC5lbmRBdChsZXR0ZXIgPT09IFwielwiID8gXCJaXCIgOiBhbHBoYWJldFtlbmQgKyAxXS50b1VwcGVyQ2FzZSgpKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigoZG9jcykgPT4ge1xyXG4gICAgICBsZXQgcmVzdWx0ID0gW107XHJcbiAgICAgIGRvY3MuZm9yRWFjaCgoZG9jKSA9PiByZXN1bHQucHVzaCh7IC4uLmRvYy5kYXRhKCksIGlkOiBkb2MuaWQgfSkpO1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogdHlwZXMuR0VUX1NUT1JJRVNfRlJPTV9TRUFSQ0gsXHJcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgcGF5bG9hZDogcmVzdWx0LFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG4vLyBDSEFQVEVSc1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZENoYXB0ZXIgPSAoZGF0YSkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGlzcGF0Y2goeyB0eXBlOiB0eXBlcy5BRERfQ0hBUFRFUiwgcGF5bG9hZDogeyBsb2FkaW5nOiB0cnVlIH0gfSk7XHJcblxyXG4gIGRiLmNvbGxlY3Rpb24oXCJjaGFwdGVyc1wiKVxyXG4gICAgLndoZXJlKFwic3RvcnlJZFwiLCBcIj09XCIsIGRhdGEuc3RvcnlJZClcclxuICAgIC5nZXQoKVxyXG4gICAgLnRoZW4oKGRvY3MpID0+IHtcclxuICAgICAgbGV0IG51bWJlclVzZWQgPSBbXTtcclxuICAgICAgZG9jcy5mb3JFYWNoKChjaGFwdGVyKSA9PiB7XHJcbiAgICAgICAgbnVtYmVyVXNlZC5wdXNoKGNoYXB0ZXIuZGF0YSgpLm51bWJlcik7XHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAobnVtYmVyVXNlZC5pbmNsdWRlcyhkYXRhLm51bWJlcikpIHtcclxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IHR5cGVzLkFERF9DSEFQVEVSLCBwYXlsb2FkOiB7IGxvYWRpbmc6IGZhbHNlIH0gfSk7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihgWW91IGFscmVhZHkgaGF2ZSBhIGNoYXB0ZXIgbnVtYmVyZWQ6ICR7ZGF0YS5udW1iZXJ9YCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGRiXHJcbiAgICAgICAgICAuY29sbGVjdGlvbihcImNoYXB0ZXJzXCIpXHJcbiAgICAgICAgICAuYWRkKHtcclxuICAgICAgICAgICAgLi4uZGF0YSxcclxuICAgICAgICAgICAgYXV0aG9ySWQ6IGF1dGguY3VycmVudFVzZXIudWlkLFxyXG4gICAgICAgICAgICBjb21tZW50c0NvdW50OiAwLFxyXG4gICAgICAgICAgICBub3RlOiAwLFxyXG4gICAgICAgICAgICB2b3RlcnM6IFtdLFxyXG4gICAgICAgICAgICB2b3Rlc0NvdW50OiAwLFxyXG4gICAgICAgICAgICBjcmVhdGVkQXQ6IGZpcmViYXNlLmZpcmVzdG9yZS5GaWVsZFZhbHVlLnNlcnZlclRpbWVzdGFtcCgpLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgIHR5cGU6IHR5cGVzLkFERF9DSEFQVEVSLFxyXG4gICAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiQ2hhcHRlciBhZGRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgICAgICAgIGNoYXBJZDogcmVzLmlkLFxyXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZWRpdENoYXB0ZXIgPSAoZGF0YSwgY2hhcGlkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkaXNwYXRjaCh7IHR5cGU6IHR5cGVzLkVESVRfQ0hBUFRFUiwgcGF5bG9hZDogeyBsb2FkaW5nOiB0cnVlIH0gfSk7XHJcbiAgZGIuY29sbGVjdGlvbihcImNoYXB0ZXJzXCIpXHJcbiAgICAuZG9jKGNoYXBpZClcclxuICAgIC51cGRhdGUoeyAuLi5kYXRhIH0pXHJcbiAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiB0eXBlcy5FRElUX0NIQVBURVIsXHJcbiAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgbWVzc2FnZTogXCJDaGFwdGVyIGVkaXRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlQ2hhcHRlciA9IChpZCwgc3RvcnlJZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGlzcGF0Y2goeyB0eXBlOiB0eXBlcy5ERUxFVEVfQ0hBUFRFUiwgcGF5bG9hZDogeyBsb2FkaW5nQ2hhcHRlcjogdHJ1ZSB9IH0pO1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJjaGFwdGVyc1wiKVxyXG4gICAgLmRvYyhpZClcclxuICAgIC5kZWxldGUoKVxyXG4gICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogdHlwZXMuREVMRVRFX0NIQVBURVIsXHJcbiAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgbWVzc2FnZTogXCJDaGFwdGVyIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICBsb2FkaW5nQ2hhcHRlcjogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldENoYXB0ZXIgPSAoc3RvcnlJZCwgaWQsIHR5cGUpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpXHJcbiAgICAuZG9jKHN0b3J5SWQpXHJcbiAgICAuZ2V0KClcclxuICAgIC50aGVuKChkb2MpID0+IHtcclxuICAgICAgaWYgKGRvYy5leGlzdHMpIHtcclxuICAgICAgICBkYi5jb2xsZWN0aW9uKFwiY2hhcHRlcnNcIilcclxuICAgICAgICAgIC5kb2MoaWQpXHJcbiAgICAgICAgICAuZ2V0KClcclxuICAgICAgICAgIC50aGVuKChjaGFwKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjaGFwLmV4aXN0cykge1xyXG4gICAgICAgICAgICAgIGlmICh0eXBlID09PSBcInNob3dcIikge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNoYXJhY3RlcnMgPSBbXTtcclxuICAgICAgICAgICAgICAgIGxldCBsb2NhdGlvbnMgPSBbXTtcclxuICAgICAgICAgICAgICAgIGxldCBjaGFyYVF1ZXJ5ID0gW107XHJcbiAgICAgICAgICAgICAgICBsZXQgbG9jUXVlcnkgPSBbXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNoYXJhY3RlcnNJbkNoYXBlciA9IGNoYXAuZGF0YSgpLmNoYXJhY3RlcnM7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhdGlvbnNJbkNoYXBlciA9IGNoYXAuZGF0YSgpLmxvY2F0aW9ucztcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNoYXBOdW1iZXIgPSBjaGFwLmRhdGEoKS5udW1iZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJldkNoYXAgPSBkYlxyXG4gICAgICAgICAgICAgICAgICAuY29sbGVjdGlvbihcImNoYXB0ZXJzXCIpXHJcbiAgICAgICAgICAgICAgICAgIC53aGVyZShcInN0b3J5SWRcIiwgXCI9PVwiLCBzdG9yeUlkKVxyXG4gICAgICAgICAgICAgICAgICAud2hlcmUoXCJudW1iZXJcIiwgXCI9PVwiLCBjaGFwTnVtYmVyIC0gMSlcclxuICAgICAgICAgICAgICAgICAgLmdldCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV4dENoYXAgPSBkYlxyXG4gICAgICAgICAgICAgICAgICAuY29sbGVjdGlvbihcImNoYXB0ZXJzXCIpXHJcbiAgICAgICAgICAgICAgICAgIC53aGVyZShcInN0b3J5SWRcIiwgXCI9PVwiLCBzdG9yeUlkKVxyXG4gICAgICAgICAgICAgICAgICAud2hlcmUoXCJudW1iZXJcIiwgXCI9PVwiLCBjaGFwTnVtYmVyICsgMSlcclxuICAgICAgICAgICAgICAgICAgLmdldCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNoYXJhY3RlcnNJbkNoYXBlci5mb3JFYWNoKChjaGFyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNoYXJhUXVlcnkucHVzaChkYi5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc1wiKS5kb2MoY2hhcikuZ2V0KCkpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbnNJbkNoYXBlci5mb3JFYWNoKChsb2MpID0+IHtcclxuICAgICAgICAgICAgICAgICAgbG9jUXVlcnkucHVzaChkYi5jb2xsZWN0aW9uKFwibG9jYXRpb25zXCIpLmRvYyhsb2MpLmdldCgpKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgY2hhcmFRdWVyeSA9IFByb21pc2UuYWxsKGNoYXJhUXVlcnkpO1xyXG4gICAgICAgICAgICAgICAgbG9jUXVlcnkgPSBQcm9taXNlLmFsbChsb2NRdWVyeSk7XHJcbiAgICAgICAgICAgICAgICBQcm9taXNlLmFsbChbY2hhcmFRdWVyeSwgbG9jUXVlcnksIHByZXZDaGFwLCBuZXh0Q2hhcF0pLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAgIChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcHJldiA9IHJlc1syXS5kb2NzWzBdID8gcmVzWzJdLmRvY3NbMF0uaWQgOiBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXh0ID0gcmVzWzNdLmRvY3NbMF0gPyByZXNbM10uZG9jc1swXS5pZCA6IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzWzBdLmZvckVhY2goKGMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGNoYXJhY3RlcnMucHVzaCh7IC4uLmMuZGF0YSgpLCBpZDogYy5pZCB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICByZXNbMV0uZm9yRWFjaCgobCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25zLnB1c2goeyAuLi5sLmRhdGEoKSwgaWQ6IGwuaWQgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogdHlwZXMuR0VUX0NIQVBURVIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYXB0ZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5jaGFwLmRhdGEoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogY2hhcC5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5leHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJhY3RlcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHVibGljOiBkb2MuZGF0YSgpLnB1YmxpYyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9yeVRpdGxlOiBkb2MuZGF0YSgpLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFwdGVyRXhpc3RzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgICB0eXBlOiB0eXBlcy5HRVRfQ0hBUFRFUixcclxuICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoYXB0ZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIC4uLmNoYXAuZGF0YSgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ6IGNoYXAuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICBwdWJsaWM6IGRvYy5kYXRhKCkucHVibGljLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgY2hhcHRlckV4aXN0czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiB0eXBlcy5HRVRfQ0hBUFRFUixcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHsgY2hhcHRlckV4aXN0czogZmFsc2UgfSxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogdHlwZXMuR0VUX0NIQVBURVIsXHJcbiAgICAgICAgICBwYXlsb2FkOiB7IGNoYXB0ZXJFeGlzdHM6IGZhbHNlIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldENoYXB0ZXJzID0gKGlkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkYi5jb2xsZWN0aW9uKFwiY2hhcHRlcnNcIilcclxuICAgIC53aGVyZShcInN0b3J5SWRcIiwgXCI9PVwiLCBpZClcclxuICAgIC5vcmRlckJ5KFwibnVtYmVyXCIsIFwiYXNjXCIpXHJcbiAgICAub25TbmFwc2hvdCgoZG9jcykgPT4ge1xyXG4gICAgICBsZXQgYXJyID0gW107XHJcbiAgICAgIGRvY3MuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICAgICAgYXJyLnB1c2goe1xyXG4gICAgICAgICAgYXV0aG9ySWQ6IGRvYy5kYXRhKCkuYXV0aG9ySWQsXHJcbiAgICAgICAgICBpZDogZG9jLmlkLFxyXG4gICAgICAgICAgY3JlYXRlZEF0OiBkb2MuZGF0YSgpLmNyZWF0ZWRBdCxcclxuICAgICAgICAgIG51bWJlcjogZG9jLmRhdGEoKS5udW1iZXIsXHJcbiAgICAgICAgICB0aXRsZTogZG9jLmRhdGEoKS50aXRsZSxcclxuICAgICAgICAgIGNvbW1lbnRzQ291bnQ6IGRvYy5kYXRhKCkuY29tbWVudHNDb3VudCxcclxuICAgICAgICAgIHN0YXR1czogZG9jLmRhdGEoKS5zdGF0dXMsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogdHlwZXMuR0VUX0NIQVBURVJTLFxyXG4gICAgICAgIHBheWxvYWQ6IGFycixcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbi8vIExPQ0FUSU9OU1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZExvY2F0aW9uID0gKGRhdGEpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRpc3BhdGNoKHsgdHlwZTogdHlwZXMuQUREX0xPQ0FUSU9OLCBwYXlsb2FkOiB7IGxvYWRpbmdMb2M6IHRydWUgfSB9KTtcclxuICBsZXQgbG9jSWQgPSBcIlwiO1xyXG5cclxuICBkYi5jb2xsZWN0aW9uKFwibG9jYXRpb25zXCIpXHJcbiAgICAuYWRkKHtcclxuICAgICAgLi4uZGF0YSxcclxuICAgICAgaW1hZ2U6IHR5cGVvZiBkYXRhLmltYWdlID09PSBcInN0cmluZ1wiID8gZGF0YS5pbWFnZSA6IFwiXCIsXHJcbiAgICAgIGNyZWF0ZWRBdDogZmlyZWJhc2UuZmlyZXN0b3JlLkZpZWxkVmFsdWUuc2VydmVyVGltZXN0YW1wKCksXHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBsb2NJZCA9IHJlcy5pZDtcclxuICAgICAgaWYgKHR5cGVvZiBkYXRhLmltYWdlID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgY29uc3QgaW1hZ2VOYW1lID0gYCR7bG9jSWR9XyR7ZGF0YS5uYW1lXHJcbiAgICAgICAgICAudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgICAgLnNwbGl0KFwiIFwiKVxyXG4gICAgICAgICAgLmpvaW4oXCJfXCIpfWA7XHJcbiAgICAgICAgc3RvcmFnZVxyXG4gICAgICAgICAgLnJlZihgJHthdXRoLmN1cnJlbnRVc2VyLnVpZH0vJHtpbWFnZU5hbWV9YClcclxuICAgICAgICAgIC5wdXQoZGF0YS5pbWFnZSlcclxuICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHN0b3JhZ2VcclxuICAgICAgICAgICAgICAucmVmKGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gICAgICAgICAgICAgIC5jaGlsZChpbWFnZU5hbWUpXHJcbiAgICAgICAgICAgICAgLmdldERvd25sb2FkVVJMKCk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4oKHVybCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gZGIuY29sbGVjdGlvbihcImxvY2F0aW9uc1wiKS5kb2MobG9jSWQpLnVwZGF0ZSh7IGltYWdlOiB1cmwgfSk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgdHlwZTogdHlwZXMuQUREX0xPQ0FUSU9OLFxyXG4gICAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiTG9jYXRpb24gYWRkZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICAgICAgICBsb2NJZDogcmVzLmlkLFxyXG4gICAgICAgICAgICAgICAgbG9hZGluZ0xvYzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiB0eXBlcy5BRERfTE9DQVRJT04sXHJcbiAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiTG9jYXRpb24gYWRkZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICAgIGxvY0lkOiByZXMuaWQsXHJcbiAgICAgICAgICAgIGxvYWRpbmdMb2M6IGZhbHNlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIG1lc3NhZ2UuZXJyb3IoZXJyLm1lc3NhZ2UpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZWRpdExvY2F0aW9uID0gKGRhdGEpID0+IChkaXNwYXRjaCkgPT4ge307XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0TG9jYXRpb24gPSAoaWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJsb2NhdGlvbnNcIilcclxuICAgIC5kb2MoaWQpXHJcbiAgICAuZ2V0KClcclxuICAgIC50aGVuKChkb2MpID0+IHtcclxuICAgICAgaWYgKGRvYy5leGlzdHMpIHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiB0eXBlcy5HRVRfTE9DQVRJT04sXHJcbiAgICAgICAgICBwYXlsb2FkOiB7IC4uLmRvYy5kYXRhKCksIGlkOiBkb2MuaWQgfSxcclxuICAgICAgICAgIGxvY2F0aW9uRXhpc3RzOiB0cnVlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IHR5cGVzLkdFVF9MT0NBVElPTixcclxuICAgICAgICAgIGxvY2F0aW9uRXhpc3RzOiBmYWxzZSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlTG9jYXRpb24gPSAoaWQsIG5hbWUpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRpc3BhdGNoKHsgdHlwZTogdHlwZXMuREVMRVRFX0NIQVBURVIsIHBheWxvYWQ6IHsgbG9hZGluZzogdHJ1ZSB9IH0pO1xyXG4gIGNvbnN0IGJhdGNoID0gZGIuYmF0Y2goKTtcclxuICBjb25zdCBpbWFnZU5hbWUgPSBgJHtpZH1fJHtuYW1lLnRvTG93ZXJDYXNlKCkuc3BsaXQoXCIgXCIpLmpvaW4oXCJfXCIpfWA7XHJcblxyXG4gIGJhdGNoLmRlbGV0ZShkYi5jb2xsZWN0aW9uKFwibG9jYXRpb25zXCIpLmRvYyhpZCkpO1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJjaGFwdGVyc1wiKVxyXG4gICAgLndoZXJlKFwibG9jYXRpb25zXCIsIFwiYXJyYXktY29udGFpbnNcIiwgaWQpXHJcbiAgICAuZ2V0KClcclxuICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgcmVzLmZvckVhY2goKGNoYXApID0+XHJcbiAgICAgICAgYmF0Y2gudXBkYXRlKGRiLmNvbGxlY3Rpb24oXCJjaGFwdGVyc1wiKS5kb2MoY2hhcC5pZCksIHtcclxuICAgICAgICAgIGxvY2F0aW9uczogY2hhcC5kYXRhKCkubG9jYXRpb25zLmZpbHRlcigoYykgPT4gYyAhPT0gaWQpLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBzdG9yYWdlXHJcbiAgICAgICAgLnJlZihgJHthdXRoLmN1cnJlbnRVc2VyLnVpZH0vJHtpbWFnZU5hbWV9YClcclxuICAgICAgICAuZGVsZXRlKClcclxuICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICBiYXRjaC5jb21taXQoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgIHR5cGU6IHR5cGVzLkRFTEVURV9DSEFQVEVSLFxyXG4gICAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJMb2NhdGlvbiBkZWxldGVkIHN1Y2Nlc3NmdWxseVwiLFxyXG4gICAgICAgICAgICAgICAgZGVsZXRlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICBiYXRjaC5jb21taXQoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgIHR5cGU6IHR5cGVzLkRFTEVURV9DSEFQVEVSLFxyXG4gICAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJMb2NhdGlvbiBkZWxldGVkIHN1Y2Nlc3NmdWxseVwiLFxyXG4gICAgICAgICAgICAgICAgZGVsZXRlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyTG9jYXRpb25zID0gKGlkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBjb25zdCB1c2VySWQgPSBpZCA/IGlkIDogYXV0aC5jdXJyZW50VXNlci51aWQ7XHJcbiAgZGIuY29sbGVjdGlvbihcImxvY2F0aW9uc1wiKVxyXG4gICAgLndoZXJlKFwiYXV0aG9ySWRcIiwgXCI9PVwiLCB1c2VySWQpXHJcbiAgICAuZ2V0KClcclxuICAgIC50aGVuKChkb2NzKSA9PiB7XHJcbiAgICAgIGxldCBsb2NhdGlvbnMgPSBbXTtcclxuICAgICAgZG9jcy5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgICAgICBsb2NhdGlvbnMgPSBbLi4ubG9jYXRpb25zLCB7IGlkOiBkb2MuaWQsIC4uLmRvYy5kYXRhKCkgfV07XHJcbiAgICAgIH0pO1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogdHlwZXMuR0VUX1VTRVJfTE9DQVRJT05TLFxyXG4gICAgICAgIHBheWxvYWQ6IGxvY2F0aW9ucyxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdG9yeUxvY2F0aW9ucyA9IChzdG9yeUlkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkYi5jb2xsZWN0aW9uKFwibG9jYXRpb25zXCIpXHJcbiAgICAud2hlcmUoXCJzdG9yeUlkXCIsIFwiPT1cIiwgc3RvcnlJZClcclxuICAgIC5nZXQoKVxyXG4gICAgLnRoZW4oKGRvY3MpID0+IHtcclxuICAgICAgY29uc3QgbG9jYXRpb25zID0gZG9jcy5kb2NzLm1hcCgoZG9jKSA9PiAoeyAuLi5kb2MuZGF0YSgpLCBpZDogZG9jLmlkIH0pKTtcclxuICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IHR5cGVzLkdFVF9TVE9SWV9MT0NBVElPTlMsXHJcbiAgICAgICAgcGF5bG9hZDogbG9jYXRpb25zLFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuLy8gQ09NTUVOVFNcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDb21tZW50cyA9IChpZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGIuY29sbGVjdGlvbihcImNvbW1lbnRzXCIpXHJcbiAgICAud2hlcmUoXCJjaGFwdGVySWRcIiwgXCI9PVwiLCBpZClcclxuICAgIC5vcmRlckJ5KFwiY3JlYXRlZEF0XCIsIFwiZGVzY1wiKVxyXG4gICAgLm9uU25hcHNob3QoKHNuYXApID0+IHtcclxuICAgICAgbGV0IGNvbW1lbnRzID0gc25hcC5kb2NzLm1hcCgoY29tbWVudCkgPT4gKHtcclxuICAgICAgICAuLi5jb21tZW50LmRhdGEoKSxcclxuICAgICAgICBpZDogY29tbWVudC5pZCxcclxuICAgICAgfSkpO1xyXG4gICAgICBsZXQgcXVlcmllcyA9IFtdO1xyXG4gICAgICBjb21tZW50cy5mb3JFYWNoKChjb21tKSA9PiB7XHJcbiAgICAgICAgcXVlcmllcy5wdXNoKGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKS5kb2MoY29tbS51c2VySWQpLmdldCgpKTtcclxuICAgICAgfSk7XHJcbiAgICAgIFByb21pc2UuYWxsKHF1ZXJpZXMpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGNvbW1lbnRzID0gY29tbWVudHMubWFwKChjb21tKSA9PiAoe1xyXG4gICAgICAgICAgLi4uY29tbSxcclxuICAgICAgICAgIC8vdXNlckltYWdlOiByZXMuZmluZCgoZCkgPT4gZC5pZCA9PT0gY29tbS51c2VySWQpLmRhdGEoKS5pbWFnZSxcclxuICAgICAgICB9KSk7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogdHlwZXMuR0VUX0NPTU1FTlRTLFxyXG4gICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICBsb2FkaW5nQ29tbWVudHM6IGZhbHNlLFxyXG4gICAgICAgICAgICBjb21tZW50cyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc3VibWl0Q29tbWVudCA9IChpbmZvKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBpZiAoIWF1dGguY3VycmVudFVzZXIuZW1haWxWZXJpZmllZClcclxuICAgIHJldHVybiBtZXNzYWdlLmVycm9yKFwiWW91IG5lZWQgdG8gdmVyaWZ5IHlvdXIgZW1haWwgZmlyc3RcIik7XHJcbiAgaWYgKCFpbmZvLmNvbnRlbnQpIHJldHVybiBtZXNzYWdlLmVycm9yKFwiQ29udGVudCBtdXN0IG5vdCBiZSBlbXB0eVwiKTtcclxuXHJcbiAgZGIuY29sbGVjdGlvbihcImNvbW1lbnRzXCIpXHJcbiAgICAuYWRkKHtcclxuICAgICAgLi4uaW5mbyxcclxuICAgICAgdXNlckRlbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICBzdXNwZW5kZWQ6IGZhbHNlLFxyXG4gICAgICBjcmVhdGVkQXQ6IGZpcmViYXNlLmZpcmVzdG9yZS5GaWVsZFZhbHVlLnNlcnZlclRpbWVzdGFtcCgpLFxyXG4gICAgfSlcclxuICAgIC50aGVuKCgpID0+IG1lc3NhZ2Uuc3VjY2VzcyhcIkNvbW1lbnQgcG9zdGVkIHN1Y2Nlc3NmdWxseVwiKSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiBtZXNzYWdlLmVycm9yKGVyci5tZXNzYWdlKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlQ29tbWVudCA9IChpZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGIuY29sbGVjdGlvbihcImNvbW1lbnRzXCIpLmRvYyhpZCkuZGVsZXRlKCk7XHJcbn07XHJcblxyXG4vLyBBUkNISVZFU1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0b3JpZXNGcm9tU2VhcmNoID0gKHNlYXJjaCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgbGV0IHJlc3VsdCA9IFtdO1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpXHJcbiAgICAud2hlcmUoXCJwdWJsaWNcIiwgXCI9PVwiLCB0cnVlKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICBkYXRhLmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jLmRhdGEoKS50aXRsZS50b0xvd2VyQ2FzZSgpLnNwbGl0KFwiIFwiKTtcclxuICAgICAgICBjb25zdCBhdXRob3JOYW1lID0gZG9jLmRhdGEoKS5hdXRob3JOYW1lLnRvTG93ZXJDYXNlKCkuc3BsaXQoXCIgXCIpO1xyXG4gICAgICAgIGNvbnN0IHNlYXJjaFRlcm0gPSBzZWFyY2guc3BsaXQoXCItXCIpO1xyXG4gICAgICAgIGNvbnN0IGlzSW5jbHVkZWQgPSBzZWFyY2hUZXJtLmV2ZXJ5KCh3b3JkKSA9PiB0aXRsZS5pbmNsdWRlcyh3b3JkKSk7XHJcbiAgICAgICAgY29uc3Qgb3JJbmNsdWRlZCA9IHNlYXJjaFRlcm0uc29tZShcclxuICAgICAgICAgICh3b3JkKSA9PiBkb2MuZGF0YSgpLnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih3b3JkKSAhPT0gLTFcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IGF1dGhvckluY2x1ZGVkID0gc2VhcmNoVGVybS5ldmVyeSgod29yZCkgPT5cclxuICAgICAgICAgIGF1dGhvck5hbWUuaW5jbHVkZXMod29yZClcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IG9yQXV0aG9ySW5jbHVkZWQgPSBzZWFyY2hUZXJtLnNvbWUoXHJcbiAgICAgICAgICAod29yZCkgPT4gZG9jLmRhdGEoKS5hdXRob3JOYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih3b3JkKSAhPT0gLTFcclxuICAgICAgICApO1xyXG4gICAgICAgIGlmIChpc0luY2x1ZGVkIHx8IG9ySW5jbHVkZWQgfHwgYXV0aG9ySW5jbHVkZWQgfHwgb3JBdXRob3JJbmNsdWRlZCkge1xyXG4gICAgICAgICAgcmVzdWx0LnB1c2goeyAuLi5kb2MuZGF0YSgpLCBpZDogZG9jLmlkIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogdHlwZXMuR0VUX1NUT1JJRVNfRlJPTV9TRUFSQ0gsXHJcbiAgICAgICAgcGF5bG9hZDogcmVzdWx0LFxyXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9