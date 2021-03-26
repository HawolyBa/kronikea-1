webpackHotUpdate_N_E("pages/character/[id]/edit",{

/***/ "./redux/actions/charactersActions.js":
/*!********************************************!*\
  !*** ./redux/actions/charactersActions.js ***!
  \********************************************/
/*! exports provided: getCharacter, addCharacter, editCharacter, deleteCharacter, getUserCharacters, getFavoriteCharacters, getCharactersInStory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCharacter", function() { return getCharacter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCharacter", function() { return addCharacter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editCharacter", function() { return editCharacter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteCharacter", function() { return deleteCharacter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserCharacters", function() { return getUserCharacters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFavoriteCharacters", function() { return getFavoriteCharacters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCharactersInStory", function() { return getCharactersInStory; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/constants */ "./utils/constants.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _fbConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fbConfig */ "./redux/fbConfig.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.esm.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var getCharacter = function getCharacter(id) {
  return function (dispatch) {
    _fbConfig__WEBPACK_IMPORTED_MODULE_4__["db"].collection("characters").doc(id).get().then(function (doc) {
      if (doc.exists) {
        dispatch({
          type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].GET_CHARACTER,
          payload: {
            character: _objectSpread(_objectSpread({}, doc.data()), {}, {
              id: doc.id
            }),
            charaExists: true,
            loading: false
          }
        });
      } else {
        dispatch({
          type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].GET_CHARACTER,
          payload: {
            charaExists: false,
            loading: false
          }
        });
      }
    });
  };
};
var addCharacter = function addCharacter(data) {
  return function (dispatch) {
    dispatch({
      type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].ADD_CHARACTER,
      payload: {
        loading: true
      }
    });
    var charaId = "";
    _fbConfig__WEBPACK_IMPORTED_MODULE_4__["db"].collection("characters").add(_objectSpread(_objectSpread({}, data), {}, {
      image: typeof data.image === "string" ? data.image : "",
      createdAt: firebase_app__WEBPACK_IMPORTED_MODULE_5__["default"].firestore.FieldValue.serverTimestamp(),
      likesCount: 0,
      likes: [],
      dislikes: []
    })).then(function (res) {
      charaId = res.id;
      var imageName = "".concat(res.id, "_").concat(data.firstname.toLowerCase()).concat(data.lastname && "_").concat(data.lastname && data.lastname.toLowerCase());

      if (typeof data.image === "object") {
        _fbConfig__WEBPACK_IMPORTED_MODULE_4__["storage"].ref("".concat(_fbConfig__WEBPACK_IMPORTED_MODULE_4__["auth"].currentUser.uid, "/").concat(imageName)).put(data.image).then(function () {
          return _fbConfig__WEBPACK_IMPORTED_MODULE_4__["storage"].ref(_fbConfig__WEBPACK_IMPORTED_MODULE_4__["auth"].currentUser.uid).child(imageName).getDownloadURL();
        }).then(function (url) {
          return _fbConfig__WEBPACK_IMPORTED_MODULE_4__["db"].collection("characters").doc(charaId).update({
            image: url
          });
        }).then(function () {
          antd__WEBPACK_IMPORTED_MODULE_3__["message"].success("Character added successfully");
          dispatch({
            type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].ADD_CHARACTER,
            payload: {
              message: "Character added successfully",
              characterId: charaId,
              loading: false
            }
          });
        });
      } else {
        antd__WEBPACK_IMPORTED_MODULE_3__["message"].success("Character added successfully");
        dispatch({
          type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].ADD_CHARACTER,
          payload: {
            message: "Character added successfully",
            characterId: charaId,
            loading: false
          }
        });
      }
    })["catch"](function (err) {
      antd__WEBPACK_IMPORTED_MODULE_3__["message"].error(err.message);
    });
  };
};
var editCharacter = function editCharacter(data, id) {
  return function (dispatch) {
    dispatch({
      type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].EDIT_CHARACTER,
      payload: {
        loadingCharacter: true
      }
    });
    var imageName = "".concat(id, "_").concat(data.firstname.toLowerCase()).concat(data.lastname && "_").concat(data.lastname && data.lastname.toLowerCase());

    if (data.image && typeof data.image === "object") {
      _fbConfig__WEBPACK_IMPORTED_MODULE_4__["storage"].ref("".concat(_fbConfig__WEBPACK_IMPORTED_MODULE_4__["auth"].currentUser.uid, "/").concat(imageName)).put(data.image).then(function () {
        return _fbConfig__WEBPACK_IMPORTED_MODULE_4__["storage"].ref(_fbConfig__WEBPACK_IMPORTED_MODULE_4__["auth"].currentUser.uid).child(imageName).getDownloadURL();
      }).then(function (url) {
        return _fbConfig__WEBPACK_IMPORTED_MODULE_4__["db"].collection("characters").doc(id).update(_objectSpread(_objectSpread({}, data), {}, {
          image: url,
          relativesArr: data.relatives.map(function (c) {
            return c.character_id;
          })
        }));
      }).then(function () {
        dispatch({
          type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].EDIT_CHARACTER,
          payload: {
            message: "Character edited successfully",
            loadingCharacter: false
          }
        });
      })["catch"](function (err) {
        antd__WEBPACK_IMPORTED_MODULE_3__["message"].error(err.message);
      });
    } else {
      _fbConfig__WEBPACK_IMPORTED_MODULE_4__["db"].collection("characters").doc(id).update(_objectSpread(_objectSpread({}, data), {}, {
        relativesArr: data.relatives.map(function (c) {
          return c.character_id;
        })
      })).then(function () {
        dispatch({
          type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].EDIT_CHARACTER,
          payload: {
            message: "Character edited successfully",
            loadingCharacter: false
          }
        });
      })["catch"](function (err) {
        antd__WEBPACK_IMPORTED_MODULE_3__["message"].error(err.message);
      });
    }
  };
};
var deleteCharacter = function deleteCharacter(id, firstname, lastname) {
  return function (dispatch) {
    dispatch({
      type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].DELETE_CHARACTER,
      payload: {
        loading: true
      }
    });
    var imageName = "".concat(id, "_").concat(firstname.toLowerCase()).concat(lastname && "_").concat(lastname && lastname.toLowerCase());
    var batch = _fbConfig__WEBPACK_IMPORTED_MODULE_4__["db"].batch();
    _fbConfig__WEBPACK_IMPORTED_MODULE_4__["db"].collection("characters").doc(id)["delete"]().then(function () {
      return _fbConfig__WEBPACK_IMPORTED_MODULE_4__["storage"].ref("".concat(_fbConfig__WEBPACK_IMPORTED_MODULE_4__["auth"].currentUser.uid, "/").concat(imageName))["delete"]();
    }).then(function () {
      _fbConfig__WEBPACK_IMPORTED_MODULE_4__["db"].collection("chapters").where("characters", "array-contains", id).get().then(function (docs) {
        docs.forEach(function (doc) {
          batch.update(_fbConfig__WEBPACK_IMPORTED_MODULE_4__["db"].collection("chapters").doc(doc.id), {
            characters: doc.data().characters.filter(function (c) {
              return c !== id;
            })
          });
        });
      }).then(function () {
        _fbConfig__WEBPACK_IMPORTED_MODULE_4__["db"].collection("stories").where("secondaryArr", "array-contains", id).get().then(function (stories) {
          stories.forEach(function (story) {
            batch.update(_fbConfig__WEBPACK_IMPORTED_MODULE_4__["db"].collection("stories").doc(story.id), {
              mainCharacters: story.data().mainCharacters.filter(function (c) {
                return c !== id;
              }),
              secondaryArr: story.data().secondaryArr.filter(function (c) {
                return c !== id;
              }),
              secondaryCharacters: story.data().secondaryCharacters.filter(function (c) {
                return c.id !== id;
              })
            });
          });
        }).then(function () {
          _fbConfig__WEBPACK_IMPORTED_MODULE_4__["db"].collection("characters").where("relativesArr", "array-contains", id).get().then(function (characters) {
            characters.forEach(function (_char) {
              batch.update(_fbConfig__WEBPACK_IMPORTED_MODULE_4__["db"].collection("characters").doc(_char.id), {
                relativesArr: _char.data().relativesArr.filter(function (c) {
                  return c !== id;
                }),
                relatives: _char.data().relatives.filter(function (c) {
                  return c.character_id !== id;
                })
              });
            });
          }).then(function () {
            _fbConfig__WEBPACK_IMPORTED_MODULE_4__["db"].collection("charactersLikes").where("characterId", "==", id).get().then(function (likes) {
              likes.forEach(function (like) {
                batch["delete"](like.id);
              });
              batch.commit().then(function () {
                dispatch({
                  type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].DELETE_CHARACTER,
                  payload: {
                    message: "Character deleted successfully",
                    loading: false,
                    deleted: true,
                    charaExists: false
                  }
                });
              });
            });
          });
        });
      });
    });
  };
};
var getUserCharacters = function getUserCharacters(userId) {
  return function (dispatch) {
    _fbConfig__WEBPACK_IMPORTED_MODULE_4__["db"].collection("characters").where("authorId", "==", userId).get().then(function (docs) {
      var items = [];
      docs.forEach(function (doc) {
        items = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(items), [_objectSpread({
          id: doc.id
        }, doc.data())]);
      });
      return items;
    }).then(function (items) {
      dispatch({
        type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].GET_USER_CHARACTERS,
        payload: items
      });
    });
  };
};
var getFavoriteCharacters = function getFavoriteCharacters() {
  return function (dispatch) {
    _fbConfig__WEBPACK_IMPORTED_MODULE_4__["db"].collection("charactersLikes").where("senderId", "==", _fbConfig__WEBPACK_IMPORTED_MODULE_4__["auth"].currentUser.uid).get().then(function (docs) {
      var favArr = [];
      docs.forEach(function (doc) {
        favArr = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(favArr), [doc.data().characterId]);
      });
      return favArr;
    }).then(function (users) {
      var result = users.map(function (user) {
        return _fbConfig__WEBPACK_IMPORTED_MODULE_4__["db"].collection("characters").doc(user).get();
      });
      Promise.all(result).then(function (res) {
        var favUsers = [];
        res.forEach(function (doc) {
          return favUsers = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(favUsers), [_objectSpread({
            id: doc.id
          }, doc.data())]);
        });
        dispatch({
          type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].GET_FAVORITE_CHARACTERS,
          payload: favUsers
        });
      });
    });
  };
};
var getCharactersInStory = function getCharactersInStory(id) {
  return function (dispatch) {
    _fbConfig__WEBPACK_IMPORTED_MODULE_4__["db"].collection("stories").doc(id).onSnapshot(function (doc) {
      dispatch({
        type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].GET_STORY_CHARACTERS,
        payload: {
          secondaryCharacters: doc.data().secondaryCharacters,
          mainArr: doc.data().mainCharacters
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvYWN0aW9ucy9jaGFyYWN0ZXJzQWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJnZXRDaGFyYWN0ZXIiLCJpZCIsImRpc3BhdGNoIiwiZGIiLCJjb2xsZWN0aW9uIiwiZG9jIiwiZ2V0IiwidGhlbiIsImV4aXN0cyIsInR5cGUiLCJ0eXBlcyIsIkdFVF9DSEFSQUNURVIiLCJwYXlsb2FkIiwiY2hhcmFjdGVyIiwiZGF0YSIsImNoYXJhRXhpc3RzIiwibG9hZGluZyIsImFkZENoYXJhY3RlciIsIkFERF9DSEFSQUNURVIiLCJjaGFyYUlkIiwiYWRkIiwiaW1hZ2UiLCJjcmVhdGVkQXQiLCJmaXJlYmFzZSIsImZpcmVzdG9yZSIsIkZpZWxkVmFsdWUiLCJzZXJ2ZXJUaW1lc3RhbXAiLCJsaWtlc0NvdW50IiwibGlrZXMiLCJkaXNsaWtlcyIsInJlcyIsImltYWdlTmFtZSIsImZpcnN0bmFtZSIsInRvTG93ZXJDYXNlIiwibGFzdG5hbWUiLCJzdG9yYWdlIiwicmVmIiwiYXV0aCIsImN1cnJlbnRVc2VyIiwidWlkIiwicHV0IiwiY2hpbGQiLCJnZXREb3dubG9hZFVSTCIsInVybCIsInVwZGF0ZSIsIm1lc3NhZ2UiLCJzdWNjZXNzIiwiY2hhcmFjdGVySWQiLCJlcnIiLCJlcnJvciIsImVkaXRDaGFyYWN0ZXIiLCJFRElUX0NIQVJBQ1RFUiIsImxvYWRpbmdDaGFyYWN0ZXIiLCJyZWxhdGl2ZXNBcnIiLCJyZWxhdGl2ZXMiLCJtYXAiLCJjIiwiY2hhcmFjdGVyX2lkIiwiZGVsZXRlQ2hhcmFjdGVyIiwiREVMRVRFX0NIQVJBQ1RFUiIsImJhdGNoIiwid2hlcmUiLCJkb2NzIiwiZm9yRWFjaCIsImNoYXJhY3RlcnMiLCJmaWx0ZXIiLCJzdG9yaWVzIiwic3RvcnkiLCJtYWluQ2hhcmFjdGVycyIsInNlY29uZGFyeUFyciIsInNlY29uZGFyeUNoYXJhY3RlcnMiLCJjaGFyIiwibGlrZSIsImNvbW1pdCIsImRlbGV0ZWQiLCJnZXRVc2VyQ2hhcmFjdGVycyIsInVzZXJJZCIsIml0ZW1zIiwiR0VUX1VTRVJfQ0hBUkFDVEVSUyIsImdldEZhdm9yaXRlQ2hhcmFjdGVycyIsImZhdkFyciIsInVzZXJzIiwicmVzdWx0IiwidXNlciIsIlByb21pc2UiLCJhbGwiLCJmYXZVc2VycyIsIkdFVF9GQVZPUklURV9DSEFSQUNURVJTIiwiZ2V0Q2hhcmFjdGVyc0luU3RvcnkiLCJvblNuYXBzaG90IiwiR0VUX1NUT1JZX0NIQVJBQ1RFUlMiLCJtYWluQXJyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxFQUFEO0FBQUEsU0FBUSxVQUFDQyxRQUFELEVBQWM7QUFDaERDLGdEQUFFLENBQUNDLFVBQUgsQ0FBYyxZQUFkLEVBQ0dDLEdBREgsQ0FDT0osRUFEUCxFQUVHSyxHQUZILEdBR0dDLElBSEgsQ0FHUSxVQUFDRixHQUFELEVBQVM7QUFDYixVQUFJQSxHQUFHLENBQUNHLE1BQVIsRUFBZ0I7QUFDZE4sZ0JBQVEsQ0FBQztBQUNQTyxjQUFJLEVBQUVDLHNEQUFLLENBQUNDLGFBREw7QUFFUEMsaUJBQU8sRUFBRTtBQUNQQyxxQkFBUyxrQ0FBT1IsR0FBRyxDQUFDUyxJQUFKLEVBQVA7QUFBbUJiLGdCQUFFLEVBQUVJLEdBQUcsQ0FBQ0o7QUFBM0IsY0FERjtBQUVQYyx1QkFBVyxFQUFFLElBRk47QUFHUEMsbUJBQU8sRUFBRTtBQUhGO0FBRkYsU0FBRCxDQUFSO0FBUUQsT0FURCxNQVNPO0FBQ0xkLGdCQUFRLENBQUM7QUFDUE8sY0FBSSxFQUFFQyxzREFBSyxDQUFDQyxhQURMO0FBRVBDLGlCQUFPLEVBQUU7QUFDUEcsdUJBQVcsRUFBRSxLQUROO0FBRVBDLG1CQUFPLEVBQUU7QUFGRjtBQUZGLFNBQUQsQ0FBUjtBQU9EO0FBQ0YsS0F0Qkg7QUF1QkQsR0F4QjJCO0FBQUEsQ0FBckI7QUEwQkEsSUFBTUMs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LEdBQVd3RCxtQkFEekI7QUFFUHFCLGlCQUFPLEVBQUV0RixHQUFHLENBQUNTLElBQUosR0FBV3NEO0FBRmI7QUFGRixPQUFELENBQVI7QUFPRCxLQVZIO0FBV0QsR0FabUM7QUFBQSxDQUE3QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jaGFyYWN0ZXIvW2lkXS9lZGl0LjI4ZTQ0ZGRjMzM2MGYzNzgwNmJlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0eXBlcyB9IGZyb20gXCIuLi8uLi91dGlscy9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgbWVzc2FnZSB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IGRiLCBhdXRoLCBzdG9yYWdlIH0gZnJvbSBcIi4uL2ZiQ29uZmlnXCI7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q2hhcmFjdGVyID0gKGlkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkYi5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc1wiKVxyXG4gICAgLmRvYyhpZClcclxuICAgIC5nZXQoKVxyXG4gICAgLnRoZW4oKGRvYykgPT4ge1xyXG4gICAgICBpZiAoZG9jLmV4aXN0cykge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IHR5cGVzLkdFVF9DSEFSQUNURVIsXHJcbiAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgIGNoYXJhY3RlcjogeyAuLi5kb2MuZGF0YSgpLCBpZDogZG9jLmlkIH0sXHJcbiAgICAgICAgICAgIGNoYXJhRXhpc3RzOiB0cnVlLFxyXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogdHlwZXMuR0VUX0NIQVJBQ1RFUixcclxuICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgY2hhcmFFeGlzdHM6IGZhbHNlLFxyXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZENoYXJhY3RlciA9IChkYXRhKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkaXNwYXRjaCh7IHR5cGU6IHR5cGVzLkFERF9DSEFSQUNURVIsIHBheWxvYWQ6IHsgbG9hZGluZzogdHJ1ZSB9IH0pO1xyXG5cclxuICBsZXQgY2hhcmFJZCA9IFwiXCI7XHJcbiAgZGIuY29sbGVjdGlvbihcImNoYXJhY3RlcnNcIilcclxuICAgIC5hZGQoe1xyXG4gICAgICAuLi5kYXRhLFxyXG4gICAgICBpbWFnZTogdHlwZW9mIGRhdGEuaW1hZ2UgPT09IFwic3RyaW5nXCIgPyBkYXRhLmltYWdlIDogXCJcIixcclxuICAgICAgY3JlYXRlZEF0OiBmaXJlYmFzZS5maXJlc3RvcmUuRmllbGRWYWx1ZS5zZXJ2ZXJUaW1lc3RhbXAoKSxcclxuICAgICAgbGlrZXNDb3VudDogMCxcclxuICAgICAgbGlrZXM6IFtdLFxyXG4gICAgICBkaXNsaWtlczogW10sXHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBjaGFyYUlkID0gcmVzLmlkO1xyXG4gICAgICBjb25zdCBpbWFnZU5hbWUgPSBgJHtyZXMuaWR9JHtcIl9cIn0ke2RhdGEuZmlyc3RuYW1lLnRvTG93ZXJDYXNlKCl9JHtcclxuICAgICAgICBkYXRhLmxhc3RuYW1lICYmIFwiX1wiXHJcbiAgICAgIH0ke2RhdGEubGFzdG5hbWUgJiYgZGF0YS5sYXN0bmFtZS50b0xvd2VyQ2FzZSgpfWA7XHJcblxyXG4gICAgICBpZiAodHlwZW9mIGRhdGEuaW1hZ2UgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICBzdG9yYWdlXHJcbiAgICAgICAgICAucmVmKGAke2F1dGguY3VycmVudFVzZXIudWlkfS8ke2ltYWdlTmFtZX1gKVxyXG4gICAgICAgICAgLnB1dChkYXRhLmltYWdlKVxyXG4gICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gc3RvcmFnZVxyXG4gICAgICAgICAgICAgIC5yZWYoYXV0aC5jdXJyZW50VXNlci51aWQpXHJcbiAgICAgICAgICAgICAgLmNoaWxkKGltYWdlTmFtZSlcclxuICAgICAgICAgICAgICAuZ2V0RG93bmxvYWRVUkwoKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbigodXJsKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBkYlxyXG4gICAgICAgICAgICAgIC5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc1wiKVxyXG4gICAgICAgICAgICAgIC5kb2MoY2hhcmFJZClcclxuICAgICAgICAgICAgICAudXBkYXRlKHsgaW1hZ2U6IHVybCB9KTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhcIkNoYXJhY3RlciBhZGRlZCBzdWNjZXNzZnVsbHlcIik7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICB0eXBlOiB0eXBlcy5BRERfQ0hBUkFDVEVSLFxyXG4gICAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiQ2hhcmFjdGVyIGFkZGVkIHN1Y2Nlc3NmdWxseVwiLFxyXG4gICAgICAgICAgICAgICAgY2hhcmFjdGVySWQ6IGNoYXJhSWQsXHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhcIkNoYXJhY3RlciBhZGRlZCBzdWNjZXNzZnVsbHlcIik7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogdHlwZXMuQUREX0NIQVJBQ1RFUixcclxuICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJDaGFyYWN0ZXIgYWRkZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICAgIGNoYXJhY3RlcklkOiBjaGFyYUlkLFxyXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBtZXNzYWdlLmVycm9yKGVyci5tZXNzYWdlKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGVkaXRDaGFyYWN0ZXIgPSAoZGF0YSwgaWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRpc3BhdGNoKHsgdHlwZTogdHlwZXMuRURJVF9DSEFSQUNURVIsIHBheWxvYWQ6IHsgbG9hZGluZ0NoYXJhY3RlcjogdHJ1ZSB9IH0pO1xyXG5cclxuICBjb25zdCBpbWFnZU5hbWUgPSBgJHtpZH0ke1wiX1wifSR7ZGF0YS5maXJzdG5hbWUudG9Mb3dlckNhc2UoKX0ke1xyXG4gICAgZGF0YS5sYXN0bmFtZSAmJiBcIl9cIlxyXG4gIH0ke2RhdGEubGFzdG5hbWUgJiYgZGF0YS5sYXN0bmFtZS50b0xvd2VyQ2FzZSgpfWA7XHJcblxyXG4gIGlmIChkYXRhLmltYWdlICYmIHR5cGVvZiBkYXRhLmltYWdlID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICBzdG9yYWdlXHJcbiAgICAgIC5yZWYoYCR7YXV0aC5jdXJyZW50VXNlci51aWR9LyR7aW1hZ2VOYW1lfWApXHJcbiAgICAgIC5wdXQoZGF0YS5pbWFnZSlcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBzdG9yYWdlXHJcbiAgICAgICAgICAucmVmKGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gICAgICAgICAgLmNoaWxkKGltYWdlTmFtZSlcclxuICAgICAgICAgIC5nZXREb3dubG9hZFVSTCgpO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigodXJsKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGRiXHJcbiAgICAgICAgICAuY29sbGVjdGlvbihcImNoYXJhY3RlcnNcIilcclxuICAgICAgICAgIC5kb2MoaWQpXHJcbiAgICAgICAgICAudXBkYXRlKHtcclxuICAgICAgICAgICAgLi4uZGF0YSxcclxuICAgICAgICAgICAgaW1hZ2U6IHVybCxcclxuICAgICAgICAgICAgcmVsYXRpdmVzQXJyOiBkYXRhLnJlbGF0aXZlcy5tYXAoKGMpID0+IGMuY2hhcmFjdGVyX2lkKSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogdHlwZXMuRURJVF9DSEFSQUNURVIsXHJcbiAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiQ2hhcmFjdGVyIGVkaXRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgICAgbG9hZGluZ0NoYXJhY3RlcjogZmFsc2UsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoZXJyLm1lc3NhZ2UpO1xyXG4gICAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgZGIuY29sbGVjdGlvbihcImNoYXJhY3RlcnNcIilcclxuICAgICAgLmRvYyhpZClcclxuICAgICAgLnVwZGF0ZSh7XHJcbiAgICAgICAgLi4uZGF0YSxcclxuICAgICAgICByZWxhdGl2ZXNBcnI6IGRhdGEucmVsYXRpdmVzLm1hcCgoYykgPT4gYy5jaGFyYWN0ZXJfaWQpLFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogdHlwZXMuRURJVF9DSEFSQUNURVIsXHJcbiAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiQ2hhcmFjdGVyIGVkaXRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgICAgbG9hZGluZ0NoYXJhY3RlcjogZmFsc2UsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoZXJyLm1lc3NhZ2UpO1xyXG4gICAgICB9KTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlQ2hhcmFjdGVyID0gKGlkLCBmaXJzdG5hbWUsIGxhc3RuYW1lKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkaXNwYXRjaCh7IHR5cGU6IHR5cGVzLkRFTEVURV9DSEFSQUNURVIsIHBheWxvYWQ6IHsgbG9hZGluZzogdHJ1ZSB9IH0pO1xyXG4gIGNvbnN0IGltYWdlTmFtZSA9IGAke2lkfSR7XCJfXCJ9JHtmaXJzdG5hbWUudG9Mb3dlckNhc2UoKX0ke2xhc3RuYW1lICYmIFwiX1wifSR7XHJcbiAgICBsYXN0bmFtZSAmJiBsYXN0bmFtZS50b0xvd2VyQ2FzZSgpXHJcbiAgfWA7XHJcbiAgY29uc3QgYmF0Y2ggPSBkYi5iYXRjaCgpO1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzXCIpXHJcbiAgICAuZG9jKGlkKVxyXG4gICAgLmRlbGV0ZSgpXHJcbiAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgIHJldHVybiBzdG9yYWdlLnJlZihgJHthdXRoLmN1cnJlbnRVc2VyLnVpZH0vJHtpbWFnZU5hbWV9YCkuZGVsZXRlKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICBkYi5jb2xsZWN0aW9uKFwiY2hhcHRlcnNcIilcclxuICAgICAgICAud2hlcmUoXCJjaGFyYWN0ZXJzXCIsIFwiYXJyYXktY29udGFpbnNcIiwgaWQpXHJcbiAgICAgICAgLmdldCgpXHJcbiAgICAgICAgLnRoZW4oKGRvY3MpID0+IHtcclxuICAgICAgICAgIGRvY3MuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICAgICAgICAgIGJhdGNoLnVwZGF0ZShkYi5jb2xsZWN0aW9uKFwiY2hhcHRlcnNcIikuZG9jKGRvYy5pZCksIHtcclxuICAgICAgICAgICAgICBjaGFyYWN0ZXJzOiBkb2MuZGF0YSgpLmNoYXJhY3RlcnMuZmlsdGVyKChjKSA9PiBjICE9PSBpZCksXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKVxyXG4gICAgICAgICAgICAud2hlcmUoXCJzZWNvbmRhcnlBcnJcIiwgXCJhcnJheS1jb250YWluc1wiLCBpZClcclxuICAgICAgICAgICAgLmdldCgpXHJcbiAgICAgICAgICAgIC50aGVuKChzdG9yaWVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgc3Rvcmllcy5mb3JFYWNoKChzdG9yeSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYmF0Y2gudXBkYXRlKGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpLmRvYyhzdG9yeS5pZCksIHtcclxuICAgICAgICAgICAgICAgICAgbWFpbkNoYXJhY3RlcnM6IHN0b3J5XHJcbiAgICAgICAgICAgICAgICAgICAgLmRhdGEoKVxyXG4gICAgICAgICAgICAgICAgICAgIC5tYWluQ2hhcmFjdGVycy5maWx0ZXIoKGMpID0+IGMgIT09IGlkKSxcclxuICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5QXJyOiBzdG9yeVxyXG4gICAgICAgICAgICAgICAgICAgIC5kYXRhKClcclxuICAgICAgICAgICAgICAgICAgICAuc2Vjb25kYXJ5QXJyLmZpbHRlcigoYykgPT4gYyAhPT0gaWQpLFxyXG4gICAgICAgICAgICAgICAgICBzZWNvbmRhcnlDaGFyYWN0ZXJzOiBzdG9yeVxyXG4gICAgICAgICAgICAgICAgICAgIC5kYXRhKClcclxuICAgICAgICAgICAgICAgICAgICAuc2Vjb25kYXJ5Q2hhcmFjdGVycy5maWx0ZXIoKGMpID0+IGMuaWQgIT09IGlkKSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgZGIuY29sbGVjdGlvbihcImNoYXJhY3RlcnNcIilcclxuICAgICAgICAgICAgICAgIC53aGVyZShcInJlbGF0aXZlc0FyclwiLCBcImFycmF5LWNvbnRhaW5zXCIsIGlkKVxyXG4gICAgICAgICAgICAgICAgLmdldCgpXHJcbiAgICAgICAgICAgICAgICAudGhlbigoY2hhcmFjdGVycykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBjaGFyYWN0ZXJzLmZvckVhY2goKGNoYXIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBiYXRjaC51cGRhdGUoZGIuY29sbGVjdGlvbihcImNoYXJhY3RlcnNcIikuZG9jKGNoYXIuaWQpLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZWxhdGl2ZXNBcnI6IGNoYXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmRhdGEoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVsYXRpdmVzQXJyLmZpbHRlcigoYykgPT4gYyAhPT0gaWQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgcmVsYXRpdmVzOiBjaGFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5kYXRhKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbGF0aXZlcy5maWx0ZXIoKGMpID0+IGMuY2hhcmFjdGVyX2lkICE9PSBpZCksXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgZGIuY29sbGVjdGlvbihcImNoYXJhY3RlcnNMaWtlc1wiKVxyXG4gICAgICAgICAgICAgICAgICAgIC53aGVyZShcImNoYXJhY3RlcklkXCIsIFwiPT1cIiwgaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgLmdldCgpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKGxpa2VzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBsaWtlcy5mb3JFYWNoKChsaWtlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhdGNoLmRlbGV0ZShsaWtlLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgYmF0Y2guY29tbWl0KCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiB0eXBlcy5ERUxFVEVfQ0hBUkFDVEVSLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiQ2hhcmFjdGVyIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFyYUV4aXN0czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFVzZXJDaGFyYWN0ZXJzID0gKHVzZXJJZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGIuY29sbGVjdGlvbihcImNoYXJhY3RlcnNcIilcclxuICAgIC53aGVyZShcImF1dGhvcklkXCIsIFwiPT1cIiwgdXNlcklkKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigoZG9jcykgPT4ge1xyXG4gICAgICBsZXQgaXRlbXMgPSBbXTtcclxuICAgICAgZG9jcy5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgICAgICBpdGVtcyA9IFsuLi5pdGVtcywgeyBpZDogZG9jLmlkLCAuLi5kb2MuZGF0YSgpIH1dO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGl0ZW1zO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChpdGVtcykgPT4ge1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IHR5cGVzLkdFVF9VU0VSX0NIQVJBQ1RFUlMsIHBheWxvYWQ6IGl0ZW1zIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0RmF2b3JpdGVDaGFyYWN0ZXJzID0gKCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGIuY29sbGVjdGlvbihcImNoYXJhY3RlcnNMaWtlc1wiKVxyXG4gICAgLndoZXJlKFwic2VuZGVySWRcIiwgXCI9PVwiLCBhdXRoLmN1cnJlbnRVc2VyLnVpZClcclxuICAgIC5nZXQoKVxyXG4gICAgLnRoZW4oKGRvY3MpID0+IHtcclxuICAgICAgbGV0IGZhdkFyciA9IFtdO1xyXG4gICAgICBkb2NzLmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgICAgIGZhdkFyciA9IFsuLi5mYXZBcnIsIGRvYy5kYXRhKCkuY2hhcmFjdGVySWRdO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGZhdkFycjtcclxuICAgIH0pXHJcbiAgICAudGhlbigodXNlcnMpID0+IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gdXNlcnMubWFwKCh1c2VyKSA9PlxyXG4gICAgICAgIGRiLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzXCIpLmRvYyh1c2VyKS5nZXQoKVxyXG4gICAgICApO1xyXG4gICAgICBQcm9taXNlLmFsbChyZXN1bHQpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGxldCBmYXZVc2VycyA9IFtdO1xyXG4gICAgICAgIHJlcy5mb3JFYWNoKFxyXG4gICAgICAgICAgKGRvYykgPT4gKGZhdlVzZXJzID0gWy4uLmZhdlVzZXJzLCB7IGlkOiBkb2MuaWQsIC4uLmRvYy5kYXRhKCkgfV0pXHJcbiAgICAgICAgKTtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiB0eXBlcy5HRVRfRkFWT1JJVEVfQ0hBUkFDVEVSUyxcclxuICAgICAgICAgIHBheWxvYWQ6IGZhdlVzZXJzLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldENoYXJhY3RlcnNJblN0b3J5ID0gKGlkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKVxyXG4gICAgLmRvYyhpZClcclxuICAgIC5vblNuYXBzaG90KChkb2MpID0+IHtcclxuICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IHR5cGVzLkdFVF9TVE9SWV9DSEFSQUNURVJTLFxyXG4gICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgIHNlY29uZGFyeUNoYXJhY3RlcnM6IGRvYy5kYXRhKCkuc2Vjb25kYXJ5Q2hhcmFjdGVycyxcclxuICAgICAgICAgIG1haW5BcnI6IGRvYy5kYXRhKCkubWFpbkNoYXJhY3RlcnMsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==