webpackHotUpdate_N_E("pages/character/new",{

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
            batch.commit().then(function () {
              dispatch({
                type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].DELETE_CHARACTER,
                payload: {
                  message: "Character deleted successfully",
                  loading: false,
                  deleted: true,
                  charExists: false
                }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvYWN0aW9ucy9jaGFyYWN0ZXJzQWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJnZXRDaGFyYWN0ZXIiLCJpZCIsImRpc3BhdGNoIiwiZGIiLCJjb2xsZWN0aW9uIiwiZG9jIiwiZ2V0IiwidGhlbiIsImV4aXN0cyIsInR5cGUiLCJ0eXBlcyIsIkdFVF9DSEFSQUNURVIiLCJwYXlsb2FkIiwiY2hhcmFjdGVyIiwiZGF0YSIsImNoYXJhRXhpc3RzIiwibG9hZGluZyIsImFkZENoYXJhY3RlciIsIkFERF9DSEFSQUNURVIiLCJjaGFyYUlkIiwiYWRkIiwiaW1hZ2UiLCJjcmVhdGVkQXQiLCJmaXJlYmFzZSIsImZpcmVzdG9yZSIsIkZpZWxkVmFsdWUiLCJzZXJ2ZXJUaW1lc3RhbXAiLCJsaWtlc0NvdW50IiwibGlrZXMiLCJkaXNsaWtlcyIsInJlcyIsImltYWdlTmFtZSIsImZpcnN0bmFtZSIsInRvTG93ZXJDYXNlIiwibGFzdG5hbWUiLCJzdG9yYWdlIiwicmVmIiwiYXV0aCIsImN1cnJlbnRVc2VyIiwidWlkIiwicHV0IiwiY2hpbGQiLCJnZXREb3dubG9hZFVSTCIsInVybCIsInVwZGF0ZSIsIm1lc3NhZ2UiLCJzdWNjZXNzIiwiY2hhcmFjdGVySWQiLCJlcnIiLCJlcnJvciIsImVkaXRDaGFyYWN0ZXIiLCJFRElUX0NIQVJBQ1RFUiIsImxvYWRpbmdDaGFyYWN0ZXIiLCJyZWxhdGl2ZXNBcnIiLCJyZWxhdGl2ZXMiLCJtYXAiLCJjIiwiY2hhcmFjdGVyX2lkIiwiZGVsZXRlQ2hhcmFjdGVyIiwiREVMRVRFX0NIQVJBQ1RFUiIsImJhdGNoIiwid2hlcmUiLCJkb2NzIiwiZm9yRWFjaCIsImNoYXJhY3RlcnMiLCJmaWx0ZXIiLCJzdG9yaWVzIiwic3RvcnkiLCJtYWluQ2hhcmFjdGVycyIsInNlY29uZGFyeUFyciIsInNlY29uZGFyeUNoYXJhY3RlcnMiLCJjaGFyIiwiY29tbWl0IiwiZGVsZXRlZCIsImNoYXJFeGlzdHMiLCJnZXRVc2VyQ2hhcmFjdGVycyIsInVzZXJJZCIsIml0ZW1zIiwiR0VUX1VTRVJfQ0hBUkFDVEVSUyIsImdldEZhdm9yaXRlQ2hhcmFjdGVycyIsImZhdkFyciIsInVzZXJzIiwicmVzdWx0IiwidXNlciIsIlByb21pc2UiLCJhbGwiLCJmYXZVc2VycyIsIkdFVF9GQVZPUklURV9DSEFSQUNURVJTIiwiZ2V0Q2hhcmFjdGVyc0luU3RvcnkiLCJvblNuYXBzaG90IiwiR0VUX1NUT1JZX0NIQVJBQ1RFUlMiLCJtYWluQXJyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxFQUFEO0FBQUEsU0FBUSxVQUFDQyxRQUFELEVBQWM7QUFDaERDLGdEQUFFLENBQUNDLFVBQUgsQ0FBYyxZQUFkLEVBQ0dDLEdBREgsQ0FDT0osRUFEUCxFQUVHSyxHQUZILEdBR0dDLElBSEgsQ0FHUSxVQUFDRixHQUFELEVBQVM7QUFDYixVQUFJQSxHQUFHLENBQUNHLE1BQVIsRUFBZ0I7QUFDZE4sZ0JBQVEsQ0FBQztBQUNQTyxjQUFJLEVBQUVDLHNEQUFLLENBQUNDLGFBREw7QUFFUEMsaUJBQU8sRUFBRTtBQUNQQyxxQkFBUyxrQ0FBT1IsR0FBRyxDQUFDUyxJQUFKLEVBQVA7QUFBbUJiLGdCQUFFLEVBQUVJLEdBQUcsQ0FBQ0o7QUFBM0IsY0FERjtBQUVQYyx1QkFBVyxFQUFFLElBRk47QUFHUEMsbUJBQU8sRUFBRTtBQUhGO0FBRkYsU0FBRCxDQUFSO0FBUUQsT0FURCxNQVNPO0FBQ0xkLGdCQUFRLENBQUM7QUFDUE8sY0FBSSxFQUFFQyxzREFBSyxDQUFDQyxhQURMO0FBRVBDLGlCQUFPLEVBQUU7QUFDUEcsdUJBQVcsRUFBRSxLQUROO0FBRVBDLG1CQUFPLEVBQUU7QUFGRjtBQUZGLFNBQUQsQ0FBUjtBQU9EO0FBQ0YsS0F0Qkg7QUF1QkQsR0F4QjJCO0FBQUEsQ0FBckI7QUEwQkEs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QUFSLENBQVlILE1BQVosRUFBb0IzRSxJQUFwQixDQUF5QixVQUFDdUIsR0FBRCxFQUFTO0FBQ2hDLFlBQUl3RCxRQUFRLEdBQUcsRUFBZjtBQUNBeEQsV0FBRyxDQUFDaUMsT0FBSixDQUNFLFVBQUMxRCxHQUFEO0FBQUEsaUJBQVVpRixRQUFRLDBHQUFPQSxRQUFQO0FBQW1CckYsY0FBRSxFQUFFSSxHQUFHLENBQUNKO0FBQTNCLGFBQWtDSSxHQUFHLENBQUNTLElBQUosRUFBbEMsR0FBbEI7QUFBQSxTQURGO0FBR0FaLGdCQUFRLENBQUM7QUFDUE8sY0FBSSxFQUFFQyxzREFBSyxDQUFDNkUsdUJBREw7QUFFUDNFLGlCQUFPLEVBQUUwRTtBQUZGLFNBQUQsQ0FBUjtBQUlELE9BVEQ7QUFVRCxLQXhCSDtBQXlCRCxHQTFCb0M7QUFBQSxDQUE5QjtBQTRCQSxJQUFNRSxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLENBQUN2RixFQUFEO0FBQUEsU0FBUSxVQUFDQyxRQUFELEVBQWM7QUFDeERDLGdEQUFFLENBQUNDLFVBQUgsQ0FBYyxTQUFkLEVBQ0dDLEdBREgsQ0FDT0osRUFEUCxFQUVHd0YsVUFGSCxDQUVjLFVBQUNwRixHQUFELEVBQVM7QUFDbkJILGNBQVEsQ0FBQztBQUNQTyxZQUFJLEVBQUVDLHNEQUFLLENBQUNnRixvQkFETDtBQUVQOUUsZUFBTyxFQUFFO0FBQ1AwRCw2QkFBbUIsRUFBRWpFLEdBQUcsQ0FBQ1MsSUFBSixHQUFXd0QsbUJBRHpCO0FBRVBxQixpQkFBTyxFQUFFdEYsR0FBRyxDQUFDUyxJQUFKLEdBQVdzRDtBQUZiO0FBRkYsT0FBRCxDQUFSO0FBT0QsS0FWSDtBQVdELEdBWm1DO0FBQUEsQ0FBN0IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2hhcmFjdGVyL25ldy5kNjk0NDNmZDhhZDE4YWY3NzhkYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdHlwZXMgfSBmcm9tIFwiLi4vLi4vdXRpbHMvY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IG1lc3NhZ2UgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyBkYiwgYXV0aCwgc3RvcmFnZSB9IGZyb20gXCIuLi9mYkNvbmZpZ1wiO1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlL2FwcFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldENoYXJhY3RlciA9IChpZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGIuY29sbGVjdGlvbihcImNoYXJhY3RlcnNcIilcclxuICAgIC5kb2MoaWQpXHJcbiAgICAuZ2V0KClcclxuICAgIC50aGVuKChkb2MpID0+IHtcclxuICAgICAgaWYgKGRvYy5leGlzdHMpIHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiB0eXBlcy5HRVRfQ0hBUkFDVEVSLFxyXG4gICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICBjaGFyYWN0ZXI6IHsgLi4uZG9jLmRhdGEoKSwgaWQ6IGRvYy5pZCB9LFxyXG4gICAgICAgICAgICBjaGFyYUV4aXN0czogdHJ1ZSxcclxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IHR5cGVzLkdFVF9DSEFSQUNURVIsXHJcbiAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgIGNoYXJhRXhpc3RzOiBmYWxzZSxcclxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRDaGFyYWN0ZXIgPSAoZGF0YSkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGlzcGF0Y2goeyB0eXBlOiB0eXBlcy5BRERfQ0hBUkFDVEVSLCBwYXlsb2FkOiB7IGxvYWRpbmc6IHRydWUgfSB9KTtcclxuXHJcbiAgbGV0IGNoYXJhSWQgPSBcIlwiO1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzXCIpXHJcbiAgICAuYWRkKHtcclxuICAgICAgLi4uZGF0YSxcclxuICAgICAgaW1hZ2U6IHR5cGVvZiBkYXRhLmltYWdlID09PSBcInN0cmluZ1wiID8gZGF0YS5pbWFnZSA6IFwiXCIsXHJcbiAgICAgIGNyZWF0ZWRBdDogZmlyZWJhc2UuZmlyZXN0b3JlLkZpZWxkVmFsdWUuc2VydmVyVGltZXN0YW1wKCksXHJcbiAgICAgIGxpa2VzQ291bnQ6IDAsXHJcbiAgICAgIGxpa2VzOiBbXSxcclxuICAgICAgZGlzbGlrZXM6IFtdLFxyXG4gICAgfSlcclxuICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgY2hhcmFJZCA9IHJlcy5pZDtcclxuICAgICAgY29uc3QgaW1hZ2VOYW1lID0gYCR7cmVzLmlkfSR7XCJfXCJ9JHtkYXRhLmZpcnN0bmFtZS50b0xvd2VyQ2FzZSgpfSR7XHJcbiAgICAgICAgZGF0YS5sYXN0bmFtZSAmJiBcIl9cIlxyXG4gICAgICB9JHtkYXRhLmxhc3RuYW1lICYmIGRhdGEubGFzdG5hbWUudG9Mb3dlckNhc2UoKX1gO1xyXG5cclxuICAgICAgaWYgKHR5cGVvZiBkYXRhLmltYWdlID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgc3RvcmFnZVxyXG4gICAgICAgICAgLnJlZihgJHthdXRoLmN1cnJlbnRVc2VyLnVpZH0vJHtpbWFnZU5hbWV9YClcclxuICAgICAgICAgIC5wdXQoZGF0YS5pbWFnZSlcclxuICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHN0b3JhZ2VcclxuICAgICAgICAgICAgICAucmVmKGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gICAgICAgICAgICAgIC5jaGlsZChpbWFnZU5hbWUpXHJcbiAgICAgICAgICAgICAgLmdldERvd25sb2FkVVJMKCk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4oKHVybCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gZGJcclxuICAgICAgICAgICAgICAuY29sbGVjdGlvbihcImNoYXJhY3RlcnNcIilcclxuICAgICAgICAgICAgICAuZG9jKGNoYXJhSWQpXHJcbiAgICAgICAgICAgICAgLnVwZGF0ZSh7IGltYWdlOiB1cmwgfSk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoXCJDaGFyYWN0ZXIgYWRkZWQgc3VjY2Vzc2Z1bGx5XCIpO1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgdHlwZTogdHlwZXMuQUREX0NIQVJBQ1RFUixcclxuICAgICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkNoYXJhY3RlciBhZGRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgICAgICAgIGNoYXJhY3RlcklkOiBjaGFyYUlkLFxyXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoXCJDaGFyYWN0ZXIgYWRkZWQgc3VjY2Vzc2Z1bGx5XCIpO1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IHR5cGVzLkFERF9DSEFSQUNURVIsXHJcbiAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiQ2hhcmFjdGVyIGFkZGVkIHN1Y2Nlc3NmdWxseVwiLFxyXG4gICAgICAgICAgICBjaGFyYWN0ZXJJZDogY2hhcmFJZCxcclxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgbWVzc2FnZS5lcnJvcihlcnIubWVzc2FnZSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBlZGl0Q2hhcmFjdGVyID0gKGRhdGEsIGlkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkaXNwYXRjaCh7IHR5cGU6IHR5cGVzLkVESVRfQ0hBUkFDVEVSLCBwYXlsb2FkOiB7IGxvYWRpbmdDaGFyYWN0ZXI6IHRydWUgfSB9KTtcclxuXHJcbiAgY29uc3QgaW1hZ2VOYW1lID0gYCR7aWR9JHtcIl9cIn0ke2RhdGEuZmlyc3RuYW1lLnRvTG93ZXJDYXNlKCl9JHtcclxuICAgIGRhdGEubGFzdG5hbWUgJiYgXCJfXCJcclxuICB9JHtkYXRhLmxhc3RuYW1lICYmIGRhdGEubGFzdG5hbWUudG9Mb3dlckNhc2UoKX1gO1xyXG5cclxuICBpZiAoZGF0YS5pbWFnZSAmJiB0eXBlb2YgZGF0YS5pbWFnZSA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgc3RvcmFnZVxyXG4gICAgICAucmVmKGAke2F1dGguY3VycmVudFVzZXIudWlkfS8ke2ltYWdlTmFtZX1gKVxyXG4gICAgICAucHV0KGRhdGEuaW1hZ2UpXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICByZXR1cm4gc3RvcmFnZVxyXG4gICAgICAgICAgLnJlZihhdXRoLmN1cnJlbnRVc2VyLnVpZClcclxuICAgICAgICAgIC5jaGlsZChpbWFnZU5hbWUpXHJcbiAgICAgICAgICAuZ2V0RG93bmxvYWRVUkwoKTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKHVybCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBkYlxyXG4gICAgICAgICAgLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzXCIpXHJcbiAgICAgICAgICAuZG9jKGlkKVxyXG4gICAgICAgICAgLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgIC4uLmRhdGEsXHJcbiAgICAgICAgICAgIGltYWdlOiB1cmwsXHJcbiAgICAgICAgICAgIHJlbGF0aXZlc0FycjogZGF0YS5yZWxhdGl2ZXMubWFwKChjKSA9PiBjLmNoYXJhY3Rlcl9pZCksXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IHR5cGVzLkVESVRfQ0hBUkFDVEVSLFxyXG4gICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkNoYXJhY3RlciBlZGl0ZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICAgIGxvYWRpbmdDaGFyYWN0ZXI6IGZhbHNlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBtZXNzYWdlLmVycm9yKGVyci5tZXNzYWdlKTtcclxuICAgICAgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGRiLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzXCIpXHJcbiAgICAgIC5kb2MoaWQpXHJcbiAgICAgIC51cGRhdGUoe1xyXG4gICAgICAgIC4uLmRhdGEsXHJcbiAgICAgICAgcmVsYXRpdmVzQXJyOiBkYXRhLnJlbGF0aXZlcy5tYXAoKGMpID0+IGMuY2hhcmFjdGVyX2lkKSxcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IHR5cGVzLkVESVRfQ0hBUkFDVEVSLFxyXG4gICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkNoYXJhY3RlciBlZGl0ZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICAgIGxvYWRpbmdDaGFyYWN0ZXI6IGZhbHNlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBtZXNzYWdlLmVycm9yKGVyci5tZXNzYWdlKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlbGV0ZUNoYXJhY3RlciA9IChpZCwgZmlyc3RuYW1lLCBsYXN0bmFtZSkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGlzcGF0Y2goeyB0eXBlOiB0eXBlcy5ERUxFVEVfQ0hBUkFDVEVSLCBwYXlsb2FkOiB7IGxvYWRpbmc6IHRydWUgfSB9KTtcclxuICBjb25zdCBpbWFnZU5hbWUgPSBgJHtpZH0ke1wiX1wifSR7Zmlyc3RuYW1lLnRvTG93ZXJDYXNlKCl9JHtsYXN0bmFtZSAmJiBcIl9cIn0ke1xyXG4gICAgbGFzdG5hbWUgJiYgbGFzdG5hbWUudG9Mb3dlckNhc2UoKVxyXG4gIH1gO1xyXG4gIGNvbnN0IGJhdGNoID0gZGIuYmF0Y2goKTtcclxuICBkYi5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc1wiKVxyXG4gICAgLmRvYyhpZClcclxuICAgIC5kZWxldGUoKVxyXG4gICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICByZXR1cm4gc3RvcmFnZS5yZWYoYCR7YXV0aC5jdXJyZW50VXNlci51aWR9LyR7aW1hZ2VOYW1lfWApLmRlbGV0ZSgpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgZGIuY29sbGVjdGlvbihcImNoYXB0ZXJzXCIpXHJcbiAgICAgICAgLndoZXJlKFwiY2hhcmFjdGVyc1wiLCBcImFycmF5LWNvbnRhaW5zXCIsIGlkKVxyXG4gICAgICAgIC5nZXQoKVxyXG4gICAgICAgIC50aGVuKChkb2NzKSA9PiB7XHJcbiAgICAgICAgICBkb2NzLmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgICAgICAgICBiYXRjaC51cGRhdGUoZGIuY29sbGVjdGlvbihcImNoYXB0ZXJzXCIpLmRvYyhkb2MuaWQpLCB7XHJcbiAgICAgICAgICAgICAgY2hhcmFjdGVyczogZG9jLmRhdGEoKS5jaGFyYWN0ZXJzLmZpbHRlcigoYykgPT4gYyAhPT0gaWQpLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgZGIuY29sbGVjdGlvbihcInN0b3JpZXNcIilcclxuICAgICAgICAgICAgLndoZXJlKFwic2Vjb25kYXJ5QXJyXCIsIFwiYXJyYXktY29udGFpbnNcIiwgaWQpXHJcbiAgICAgICAgICAgIC5nZXQoKVxyXG4gICAgICAgICAgICAudGhlbigoc3RvcmllcykgPT4ge1xyXG4gICAgICAgICAgICAgIHN0b3JpZXMuZm9yRWFjaCgoc3RvcnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGJhdGNoLnVwZGF0ZShkYi5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKS5kb2Moc3RvcnkuaWQpLCB7XHJcbiAgICAgICAgICAgICAgICAgIG1haW5DaGFyYWN0ZXJzOiBzdG9yeVxyXG4gICAgICAgICAgICAgICAgICAgIC5kYXRhKClcclxuICAgICAgICAgICAgICAgICAgICAubWFpbkNoYXJhY3RlcnMuZmlsdGVyKChjKSA9PiBjICE9PSBpZCksXHJcbiAgICAgICAgICAgICAgICAgIHNlY29uZGFyeUFycjogc3RvcnlcclxuICAgICAgICAgICAgICAgICAgICAuZGF0YSgpXHJcbiAgICAgICAgICAgICAgICAgICAgLnNlY29uZGFyeUFyci5maWx0ZXIoKGMpID0+IGMgIT09IGlkKSxcclxuICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5Q2hhcmFjdGVyczogc3RvcnlcclxuICAgICAgICAgICAgICAgICAgICAuZGF0YSgpXHJcbiAgICAgICAgICAgICAgICAgICAgLnNlY29uZGFyeUNoYXJhY3RlcnMuZmlsdGVyKChjKSA9PiBjLmlkICE9PSBpZCksXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGRiLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzXCIpXHJcbiAgICAgICAgICAgICAgICAud2hlcmUoXCJyZWxhdGl2ZXNBcnJcIiwgXCJhcnJheS1jb250YWluc1wiLCBpZClcclxuICAgICAgICAgICAgICAgIC5nZXQoKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKGNoYXJhY3RlcnMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgY2hhcmFjdGVycy5mb3JFYWNoKChjaGFyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmF0Y2gudXBkYXRlKGRiLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzXCIpLmRvYyhjaGFyLmlkKSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmVsYXRpdmVzQXJyOiBjaGFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5kYXRhKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbGF0aXZlc0Fyci5maWx0ZXIoKGMpID0+IGMgIT09IGlkKSxcclxuICAgICAgICAgICAgICAgICAgICAgIHJlbGF0aXZlczogY2hhclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZGF0YSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZWxhdGl2ZXMuZmlsdGVyKChjKSA9PiBjLmNoYXJhY3Rlcl9pZCAhPT0gaWQpLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgIGJhdGNoLmNvbW1pdCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHR5cGVzLkRFTEVURV9DSEFSQUNURVIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiQ2hhcmFjdGVyIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFyRXhpc3RzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VXNlckNoYXJhY3RlcnMgPSAodXNlcklkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkYi5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc1wiKVxyXG4gICAgLndoZXJlKFwiYXV0aG9ySWRcIiwgXCI9PVwiLCB1c2VySWQpXHJcbiAgICAuZ2V0KClcclxuICAgIC50aGVuKChkb2NzKSA9PiB7XHJcbiAgICAgIGxldCBpdGVtcyA9IFtdO1xyXG4gICAgICBkb2NzLmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgICAgIGl0ZW1zID0gWy4uLml0ZW1zLCB7IGlkOiBkb2MuaWQsIC4uLmRvYy5kYXRhKCkgfV07XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gaXRlbXM7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGl0ZW1zKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogdHlwZXMuR0VUX1VTRVJfQ0hBUkFDVEVSUywgcGF5bG9hZDogaXRlbXMgfSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRGYXZvcml0ZUNoYXJhY3RlcnMgPSAoKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkYi5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc0xpa2VzXCIpXHJcbiAgICAud2hlcmUoXCJzZW5kZXJJZFwiLCBcIj09XCIsIGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigoZG9jcykgPT4ge1xyXG4gICAgICBsZXQgZmF2QXJyID0gW107XHJcbiAgICAgIGRvY3MuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICAgICAgZmF2QXJyID0gWy4uLmZhdkFyciwgZG9jLmRhdGEoKS5jaGFyYWN0ZXJJZF07XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gZmF2QXJyO1xyXG4gICAgfSlcclxuICAgIC50aGVuKCh1c2VycykgPT4ge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSB1c2Vycy5tYXAoKHVzZXIpID0+XHJcbiAgICAgICAgZGIuY29sbGVjdGlvbihcImNoYXJhY3RlcnNcIikuZG9jKHVzZXIpLmdldCgpXHJcbiAgICAgICk7XHJcbiAgICAgIFByb21pc2UuYWxsKHJlc3VsdCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgbGV0IGZhdlVzZXJzID0gW107XHJcbiAgICAgICAgcmVzLmZvckVhY2goXHJcbiAgICAgICAgICAoZG9jKSA9PiAoZmF2VXNlcnMgPSBbLi4uZmF2VXNlcnMsIHsgaWQ6IGRvYy5pZCwgLi4uZG9jLmRhdGEoKSB9XSlcclxuICAgICAgICApO1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IHR5cGVzLkdFVF9GQVZPUklURV9DSEFSQUNURVJTLFxyXG4gICAgICAgICAgcGF5bG9hZDogZmF2VXNlcnMsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q2hhcmFjdGVyc0luU3RvcnkgPSAoaWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpXHJcbiAgICAuZG9jKGlkKVxyXG4gICAgLm9uU25hcHNob3QoKGRvYykgPT4ge1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogdHlwZXMuR0VUX1NUT1JZX0NIQVJBQ1RFUlMsXHJcbiAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgc2Vjb25kYXJ5Q2hhcmFjdGVyczogZG9jLmRhdGEoKS5zZWNvbmRhcnlDaGFyYWN0ZXJzLFxyXG4gICAgICAgICAgbWFpbkFycjogZG9jLmRhdGEoKS5tYWluQ2hhcmFjdGVycyxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9