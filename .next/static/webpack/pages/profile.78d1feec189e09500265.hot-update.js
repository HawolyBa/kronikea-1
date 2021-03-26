webpackHotUpdate_N_E("pages/profile",{

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
      if (_fbConfig__WEBPACK_IMPORTED_MODULE_4__["storage"].ref("".concat(_fbConfig__WEBPACK_IMPORTED_MODULE_4__["auth"].currentUser.uid, "/").concat(imageName))) {
        return _fbConfig__WEBPACK_IMPORTED_MODULE_4__["storage"].ref("".concat(_fbConfig__WEBPACK_IMPORTED_MODULE_4__["auth"].currentUser.uid, "/").concat(imageName))["delete"]();
      }
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
                batch["delete"](_fbConfig__WEBPACK_IMPORTED_MODULE_4__["db"].collection("charactersLikes").doc(like.id));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvYWN0aW9ucy9jaGFyYWN0ZXJzQWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJnZXRDaGFyYWN0ZXIiLCJpZCIsImRpc3BhdGNoIiwiZGIiLCJjb2xsZWN0aW9uIiwiZG9jIiwiZ2V0IiwidGhlbiIsImV4aXN0cyIsInR5cGUiLCJ0eXBlcyIsIkdFVF9DSEFSQUNURVIiLCJwYXlsb2FkIiwiY2hhcmFjdGVyIiwiZGF0YSIsImNoYXJhRXhpc3RzIiwibG9hZGluZyIsImFkZENoYXJhY3RlciIsIkFERF9DSEFSQUNURVIiLCJjaGFyYUlkIiwiYWRkIiwiaW1hZ2UiLCJjcmVhdGVkQXQiLCJmaXJlYmFzZSIsImZpcmVzdG9yZSIsIkZpZWxkVmFsdWUiLCJzZXJ2ZXJUaW1lc3RhbXAiLCJsaWtlc0NvdW50IiwibGlrZXMiLCJkaXNsaWtlcyIsInJlcyIsImltYWdlTmFtZSIsImZpcnN0bmFtZSIsInRvTG93ZXJDYXNlIiwibGFzdG5hbWUiLCJzdG9yYWdlIiwicmVmIiwiYXV0aCIsImN1cnJlbnRVc2VyIiwidWlkIiwicHV0IiwiY2hpbGQiLCJnZXREb3dubG9hZFVSTCIsInVybCIsInVwZGF0ZSIsIm1lc3NhZ2UiLCJzdWNjZXNzIiwiY2hhcmFjdGVySWQiLCJlcnIiLCJlcnJvciIsImVkaXRDaGFyYWN0ZXIiLCJFRElUX0NIQVJBQ1RFUiIsImxvYWRpbmdDaGFyYWN0ZXIiLCJyZWxhdGl2ZXNBcnIiLCJyZWxhdGl2ZXMiLCJtYXAiLCJjIiwiY2hhcmFjdGVyX2lkIiwiZGVsZXRlQ2hhcmFjdGVyIiwiREVMRVRFX0NIQVJBQ1RFUiIsImJhdGNoIiwid2hlcmUiLCJkb2NzIiwiZm9yRWFjaCIsImNoYXJhY3RlcnMiLCJmaWx0ZXIiLCJzdG9yaWVzIiwic3RvcnkiLCJtYWluQ2hhcmFjdGVycyIsInNlY29uZGFyeUFyciIsInNlY29uZGFyeUNoYXJhY3RlcnMiLCJjaGFyIiwibGlrZSIsImNvbW1pdCIsImRlbGV0ZWQiLCJnZXRVc2VyQ2hhcmFjdGVycyIsInVzZXJJZCIsIml0ZW1zIiwiR0VUX1VTRVJfQ0hBUkFDVEVSUyIsImdldEZhdm9yaXRlQ2hhcmFjdGVycyIsImZhdkFyciIsInVzZXJzIiwicmVzdWx0IiwidXNlciIsIlByb21pc2UiLCJhbGwiLCJmYXZVc2VycyIsIkdFVF9GQVZPUklURV9DSEFSQUNURVJTIiwiZ2V0Q2hhcmFjdGVyc0luU3RvcnkiLCJvblNuYXBzaG90IiwiR0VUX1NUT1JZX0NIQVJBQ1RFUlMiLCJtYWluQXJyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxFQUFEO0FBQUEsU0FBUSxVQUFDQyxRQUFELEVBQWM7QUFDaERDLGdEQUFFLENBQUNDLFVBQUgsQ0FBYyxZQUFkLEVBQ0dDLEdBREgsQ0FDT0osRUFEUCxFQUVHSyxHQUZILEdBR0dDLElBSEgsQ0FHUSxVQUFDRixHQUFELEVBQVM7QUFDYixVQUFJQSxHQUFHLENBQUNHLE1BQVIsRUFBZ0I7QUFDZE4sZ0JBQVEsQ0FBQztBQUNQTyxjQUFJLEVBQUVDLHNEQUFLLENBQUNDLGFBREw7QUFFUEMsaUJBQU8sRUFBRTtBQUNQQyxxQkFBUyxrQ0FBT1IsR0FBRyxDQUFDUyxJQUFKLEVBQVA7QUFBbUJiLGdCQUFFLEVBQUVJLEdBQUcsQ0FBQ0o7QUFBM0IsY0FERjtBQUVQYyx1QkFBVyxFQUFFLElBRk47QUFHUEMsbUJBQU8sRUFBRTtBQUhGO0FBRkYsU0FBRCxDQUFSO0FBUUQsT0FURCxNQVNPO0FBQ0xkLGdCQUFRLENBQUM7QUFDUE8sY0FBSSxFQUFFQyxzREFBSyxDQUFDQyxhQURMO0FBRVBDLGlCQUFPLEVBQUU7QUFDUEcsdUJBQVcsRUFBRSxLQUROO0FBRVBDLG1CQUFPLEVBQUU7QUFGRjtBQUZGLFNBQUQsQ0FBUjtBQU9EO0FBQ0YsS0F0Qkg7QUF1QkQsR0F4QjJCO0FBQUEsQ0FBckI7QUEwQkEsSUFBTUMs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Q09KLEVBRFAsRUFFR3dGLFVBRkgsQ0FFYyxVQUFDcEYsR0FBRCxFQUFTO0FBQ25CSCxjQUFRLENBQUM7QUFDUE8sWUFBSSxFQUFFQyxzREFBSyxDQUFDZ0Ysb0JBREw7QUFFUDlFLGVBQU8sRUFBRTtBQUNQMEQsNkJBQW1CLEVBQUVqRSxHQUFHLENBQUNTLElBQUosR0FBV3dELG1CQUR6QjtBQUVQcUIsaUJBQU8sRUFBRXRGLEdBQUcsQ0FBQ1MsSUFBSixHQUFXc0Q7QUFGYjtBQUZGLE9BQUQsQ0FBUjtBQU9ELEtBVkg7QUFXRCxHQVptQztBQUFBLENBQTdCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUuNzhkMWZlZWMxODllMDk1MDAyNjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHR5cGVzIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBtZXNzYWdlIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgZGIsIGF1dGgsIHN0b3JhZ2UgfSBmcm9tIFwiLi4vZmJDb25maWdcIjtcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDaGFyYWN0ZXIgPSAoaWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzXCIpXHJcbiAgICAuZG9jKGlkKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigoZG9jKSA9PiB7XHJcbiAgICAgIGlmIChkb2MuZXhpc3RzKSB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogdHlwZXMuR0VUX0NIQVJBQ1RFUixcclxuICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgY2hhcmFjdGVyOiB7IC4uLmRvYy5kYXRhKCksIGlkOiBkb2MuaWQgfSxcclxuICAgICAgICAgICAgY2hhcmFFeGlzdHM6IHRydWUsXHJcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiB0eXBlcy5HRVRfQ0hBUkFDVEVSLFxyXG4gICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICBjaGFyYUV4aXN0czogZmFsc2UsXHJcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYWRkQ2hhcmFjdGVyID0gKGRhdGEpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRpc3BhdGNoKHsgdHlwZTogdHlwZXMuQUREX0NIQVJBQ1RFUiwgcGF5bG9hZDogeyBsb2FkaW5nOiB0cnVlIH0gfSk7XHJcblxyXG4gIGxldCBjaGFyYUlkID0gXCJcIjtcclxuICBkYi5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc1wiKVxyXG4gICAgLmFkZCh7XHJcbiAgICAgIC4uLmRhdGEsXHJcbiAgICAgIGltYWdlOiB0eXBlb2YgZGF0YS5pbWFnZSA9PT0gXCJzdHJpbmdcIiA/IGRhdGEuaW1hZ2UgOiBcIlwiLFxyXG4gICAgICBjcmVhdGVkQXQ6IGZpcmViYXNlLmZpcmVzdG9yZS5GaWVsZFZhbHVlLnNlcnZlclRpbWVzdGFtcCgpLFxyXG4gICAgICBsaWtlc0NvdW50OiAwLFxyXG4gICAgICBsaWtlczogW10sXHJcbiAgICAgIGRpc2xpa2VzOiBbXSxcclxuICAgIH0pXHJcbiAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIGNoYXJhSWQgPSByZXMuaWQ7XHJcbiAgICAgIGNvbnN0IGltYWdlTmFtZSA9IGAke3Jlcy5pZH0ke1wiX1wifSR7ZGF0YS5maXJzdG5hbWUudG9Mb3dlckNhc2UoKX0ke1xyXG4gICAgICAgIGRhdGEubGFzdG5hbWUgJiYgXCJfXCJcclxuICAgICAgfSR7ZGF0YS5sYXN0bmFtZSAmJiBkYXRhLmxhc3RuYW1lLnRvTG93ZXJDYXNlKCl9YDtcclxuXHJcbiAgICAgIGlmICh0eXBlb2YgZGF0YS5pbWFnZSA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgIHN0b3JhZ2VcclxuICAgICAgICAgIC5yZWYoYCR7YXV0aC5jdXJyZW50VXNlci51aWR9LyR7aW1hZ2VOYW1lfWApXHJcbiAgICAgICAgICAucHV0KGRhdGEuaW1hZ2UpXHJcbiAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdG9yYWdlXHJcbiAgICAgICAgICAgICAgLnJlZihhdXRoLmN1cnJlbnRVc2VyLnVpZClcclxuICAgICAgICAgICAgICAuY2hpbGQoaW1hZ2VOYW1lKVxyXG4gICAgICAgICAgICAgIC5nZXREb3dubG9hZFVSTCgpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKCh1cmwpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGRiXHJcbiAgICAgICAgICAgICAgLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzXCIpXHJcbiAgICAgICAgICAgICAgLmRvYyhjaGFyYUlkKVxyXG4gICAgICAgICAgICAgIC51cGRhdGUoeyBpbWFnZTogdXJsIH0pO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgbWVzc2FnZS5zdWNjZXNzKFwiQ2hhcmFjdGVyIGFkZGVkIHN1Y2Nlc3NmdWxseVwiKTtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgIHR5cGU6IHR5cGVzLkFERF9DSEFSQUNURVIsXHJcbiAgICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJDaGFyYWN0ZXIgYWRkZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICAgICAgICBjaGFyYWN0ZXJJZDogY2hhcmFJZCxcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWVzc2FnZS5zdWNjZXNzKFwiQ2hhcmFjdGVyIGFkZGVkIHN1Y2Nlc3NmdWxseVwiKTtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiB0eXBlcy5BRERfQ0hBUkFDVEVSLFxyXG4gICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkNoYXJhY3RlciBhZGRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgICAgY2hhcmFjdGVySWQ6IGNoYXJhSWQsXHJcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIG1lc3NhZ2UuZXJyb3IoZXJyLm1lc3NhZ2UpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZWRpdENoYXJhY3RlciA9IChkYXRhLCBpZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGlzcGF0Y2goeyB0eXBlOiB0eXBlcy5FRElUX0NIQVJBQ1RFUiwgcGF5bG9hZDogeyBsb2FkaW5nQ2hhcmFjdGVyOiB0cnVlIH0gfSk7XHJcblxyXG4gIGNvbnN0IGltYWdlTmFtZSA9IGAke2lkfSR7XCJfXCJ9JHtkYXRhLmZpcnN0bmFtZS50b0xvd2VyQ2FzZSgpfSR7XHJcbiAgICBkYXRhLmxhc3RuYW1lICYmIFwiX1wiXHJcbiAgfSR7ZGF0YS5sYXN0bmFtZSAmJiBkYXRhLmxhc3RuYW1lLnRvTG93ZXJDYXNlKCl9YDtcclxuXHJcbiAgaWYgKGRhdGEuaW1hZ2UgJiYgdHlwZW9mIGRhdGEuaW1hZ2UgPT09IFwib2JqZWN0XCIpIHtcclxuICAgIHN0b3JhZ2VcclxuICAgICAgLnJlZihgJHthdXRoLmN1cnJlbnRVc2VyLnVpZH0vJHtpbWFnZU5hbWV9YClcclxuICAgICAgLnB1dChkYXRhLmltYWdlKVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHN0b3JhZ2VcclxuICAgICAgICAgIC5yZWYoYXV0aC5jdXJyZW50VXNlci51aWQpXHJcbiAgICAgICAgICAuY2hpbGQoaW1hZ2VOYW1lKVxyXG4gICAgICAgICAgLmdldERvd25sb2FkVVJMKCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKCh1cmwpID0+IHtcclxuICAgICAgICByZXR1cm4gZGJcclxuICAgICAgICAgIC5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc1wiKVxyXG4gICAgICAgICAgLmRvYyhpZClcclxuICAgICAgICAgIC51cGRhdGUoe1xyXG4gICAgICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgICAgICBpbWFnZTogdXJsLFxyXG4gICAgICAgICAgICByZWxhdGl2ZXNBcnI6IGRhdGEucmVsYXRpdmVzLm1hcCgoYykgPT4gYy5jaGFyYWN0ZXJfaWQpLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiB0eXBlcy5FRElUX0NIQVJBQ1RFUixcclxuICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJDaGFyYWN0ZXIgZWRpdGVkIHN1Y2Nlc3NmdWxseVwiLFxyXG4gICAgICAgICAgICBsb2FkaW5nQ2hhcmFjdGVyOiBmYWxzZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihlcnIubWVzc2FnZSk7XHJcbiAgICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBkYi5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc1wiKVxyXG4gICAgICAuZG9jKGlkKVxyXG4gICAgICAudXBkYXRlKHtcclxuICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgIHJlbGF0aXZlc0FycjogZGF0YS5yZWxhdGl2ZXMubWFwKChjKSA9PiBjLmNoYXJhY3Rlcl9pZCksXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiB0eXBlcy5FRElUX0NIQVJBQ1RFUixcclxuICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJDaGFyYWN0ZXIgZWRpdGVkIHN1Y2Nlc3NmdWxseVwiLFxyXG4gICAgICAgICAgICBsb2FkaW5nQ2hhcmFjdGVyOiBmYWxzZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihlcnIubWVzc2FnZSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkZWxldGVDaGFyYWN0ZXIgPSAoaWQsIGZpcnN0bmFtZSwgbGFzdG5hbWUpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRpc3BhdGNoKHsgdHlwZTogdHlwZXMuREVMRVRFX0NIQVJBQ1RFUiwgcGF5bG9hZDogeyBsb2FkaW5nOiB0cnVlIH0gfSk7XHJcbiAgY29uc3QgaW1hZ2VOYW1lID0gYCR7aWR9JHtcIl9cIn0ke2ZpcnN0bmFtZS50b0xvd2VyQ2FzZSgpfSR7bGFzdG5hbWUgJiYgXCJfXCJ9JHtcclxuICAgIGxhc3RuYW1lICYmIGxhc3RuYW1lLnRvTG93ZXJDYXNlKClcclxuICB9YDtcclxuICBjb25zdCBiYXRjaCA9IGRiLmJhdGNoKCk7XHJcbiAgZGIuY29sbGVjdGlvbihcImNoYXJhY3RlcnNcIilcclxuICAgIC5kb2MoaWQpXHJcbiAgICAuZGVsZXRlKClcclxuICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgaWYgKHN0b3JhZ2UucmVmKGAke2F1dGguY3VycmVudFVzZXIudWlkfS8ke2ltYWdlTmFtZX1gKSkge1xyXG4gICAgICAgIHJldHVybiBzdG9yYWdlLnJlZihgJHthdXRoLmN1cnJlbnRVc2VyLnVpZH0vJHtpbWFnZU5hbWV9YCkuZGVsZXRlKCk7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgIGRiLmNvbGxlY3Rpb24oXCJjaGFwdGVyc1wiKVxyXG4gICAgICAgIC53aGVyZShcImNoYXJhY3RlcnNcIiwgXCJhcnJheS1jb250YWluc1wiLCBpZClcclxuICAgICAgICAuZ2V0KClcclxuICAgICAgICAudGhlbigoZG9jcykgPT4ge1xyXG4gICAgICAgICAgZG9jcy5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgICAgICAgICAgYmF0Y2gudXBkYXRlKGRiLmNvbGxlY3Rpb24oXCJjaGFwdGVyc1wiKS5kb2MoZG9jLmlkKSwge1xyXG4gICAgICAgICAgICAgIGNoYXJhY3RlcnM6IGRvYy5kYXRhKCkuY2hhcmFjdGVycy5maWx0ZXIoKGMpID0+IGMgIT09IGlkKSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgIGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpXHJcbiAgICAgICAgICAgIC53aGVyZShcInNlY29uZGFyeUFyclwiLCBcImFycmF5LWNvbnRhaW5zXCIsIGlkKVxyXG4gICAgICAgICAgICAuZ2V0KClcclxuICAgICAgICAgICAgLnRoZW4oKHN0b3JpZXMpID0+IHtcclxuICAgICAgICAgICAgICBzdG9yaWVzLmZvckVhY2goKHN0b3J5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBiYXRjaC51cGRhdGUoZGIuY29sbGVjdGlvbihcInN0b3JpZXNcIikuZG9jKHN0b3J5LmlkKSwge1xyXG4gICAgICAgICAgICAgICAgICBtYWluQ2hhcmFjdGVyczogc3RvcnlcclxuICAgICAgICAgICAgICAgICAgICAuZGF0YSgpXHJcbiAgICAgICAgICAgICAgICAgICAgLm1haW5DaGFyYWN0ZXJzLmZpbHRlcigoYykgPT4gYyAhPT0gaWQpLFxyXG4gICAgICAgICAgICAgICAgICBzZWNvbmRhcnlBcnI6IHN0b3J5XHJcbiAgICAgICAgICAgICAgICAgICAgLmRhdGEoKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zZWNvbmRhcnlBcnIuZmlsdGVyKChjKSA9PiBjICE9PSBpZCksXHJcbiAgICAgICAgICAgICAgICAgIHNlY29uZGFyeUNoYXJhY3RlcnM6IHN0b3J5XHJcbiAgICAgICAgICAgICAgICAgICAgLmRhdGEoKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zZWNvbmRhcnlDaGFyYWN0ZXJzLmZpbHRlcigoYykgPT4gYy5pZCAhPT0gaWQpLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICBkYi5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc1wiKVxyXG4gICAgICAgICAgICAgICAgLndoZXJlKFwicmVsYXRpdmVzQXJyXCIsIFwiYXJyYXktY29udGFpbnNcIiwgaWQpXHJcbiAgICAgICAgICAgICAgICAuZ2V0KClcclxuICAgICAgICAgICAgICAgIC50aGVuKChjaGFyYWN0ZXJzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNoYXJhY3RlcnMuZm9yRWFjaCgoY2hhcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhdGNoLnVwZGF0ZShkYi5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc1wiKS5kb2MoY2hhci5pZCksIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHJlbGF0aXZlc0FycjogY2hhclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZGF0YSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZWxhdGl2ZXNBcnIuZmlsdGVyKChjKSA9PiBjICE9PSBpZCksXHJcbiAgICAgICAgICAgICAgICAgICAgICByZWxhdGl2ZXM6IGNoYXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmRhdGEoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVsYXRpdmVzLmZpbHRlcigoYykgPT4gYy5jaGFyYWN0ZXJfaWQgIT09IGlkKSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBkYi5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc0xpa2VzXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgLndoZXJlKFwiY2hhcmFjdGVySWRcIiwgXCI9PVwiLCBpZClcclxuICAgICAgICAgICAgICAgICAgICAuZ2V0KClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigobGlrZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGxpa2VzLmZvckVhY2goKGxpa2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmF0Y2guZGVsZXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRiLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzTGlrZXNcIikuZG9jKGxpa2UuaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgIGJhdGNoLmNvbW1pdCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogdHlwZXMuREVMRVRFX0NIQVJBQ1RFUixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkNoYXJhY3RlciBkZWxldGVkIHN1Y2Nlc3NmdWxseVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhcmFFeGlzdHM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyQ2hhcmFjdGVycyA9ICh1c2VySWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzXCIpXHJcbiAgICAud2hlcmUoXCJhdXRob3JJZFwiLCBcIj09XCIsIHVzZXJJZClcclxuICAgIC5nZXQoKVxyXG4gICAgLnRoZW4oKGRvY3MpID0+IHtcclxuICAgICAgbGV0IGl0ZW1zID0gW107XHJcbiAgICAgIGRvY3MuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICAgICAgaXRlbXMgPSBbLi4uaXRlbXMsIHsgaWQ6IGRvYy5pZCwgLi4uZG9jLmRhdGEoKSB9XTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBpdGVtcztcclxuICAgIH0pXHJcbiAgICAudGhlbigoaXRlbXMpID0+IHtcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiB0eXBlcy5HRVRfVVNFUl9DSEFSQUNURVJTLCBwYXlsb2FkOiBpdGVtcyB9KTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEZhdm9yaXRlQ2hhcmFjdGVycyA9ICgpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzTGlrZXNcIilcclxuICAgIC53aGVyZShcInNlbmRlcklkXCIsIFwiPT1cIiwgYXV0aC5jdXJyZW50VXNlci51aWQpXHJcbiAgICAuZ2V0KClcclxuICAgIC50aGVuKChkb2NzKSA9PiB7XHJcbiAgICAgIGxldCBmYXZBcnIgPSBbXTtcclxuICAgICAgZG9jcy5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgICAgICBmYXZBcnIgPSBbLi4uZmF2QXJyLCBkb2MuZGF0YSgpLmNoYXJhY3RlcklkXTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBmYXZBcnI7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKHVzZXJzKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHVzZXJzLm1hcCgodXNlcikgPT5cclxuICAgICAgICBkYi5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc1wiKS5kb2ModXNlcikuZ2V0KClcclxuICAgICAgKTtcclxuICAgICAgUHJvbWlzZS5hbGwocmVzdWx0KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBsZXQgZmF2VXNlcnMgPSBbXTtcclxuICAgICAgICByZXMuZm9yRWFjaChcclxuICAgICAgICAgIChkb2MpID0+IChmYXZVc2VycyA9IFsuLi5mYXZVc2VycywgeyBpZDogZG9jLmlkLCAuLi5kb2MuZGF0YSgpIH1dKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogdHlwZXMuR0VUX0ZBVk9SSVRFX0NIQVJBQ1RFUlMsXHJcbiAgICAgICAgICBwYXlsb2FkOiBmYXZVc2VycyxcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDaGFyYWN0ZXJzSW5TdG9yeSA9IChpZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGIuY29sbGVjdGlvbihcInN0b3JpZXNcIilcclxuICAgIC5kb2MoaWQpXHJcbiAgICAub25TbmFwc2hvdCgoZG9jKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiB0eXBlcy5HRVRfU1RPUllfQ0hBUkFDVEVSUyxcclxuICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICBzZWNvbmRhcnlDaGFyYWN0ZXJzOiBkb2MuZGF0YSgpLnNlY29uZGFyeUNoYXJhY3RlcnMsXHJcbiAgICAgICAgICBtYWluQXJyOiBkb2MuZGF0YSgpLm1haW5DaGFyYWN0ZXJzLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=