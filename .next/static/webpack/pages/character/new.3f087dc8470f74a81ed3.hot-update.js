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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);



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
    _fbConfig__WEBPACK_IMPORTED_MODULE_4__["db"].collection("characters").add(_objectSpread(_objectSpread({}, data), {}, {
      createdAt: firebase_app__WEBPACK_IMPORTED_MODULE_5__["default"].firestore.FieldValue.serverTimestamp(),
      likesCount: 0,
      likes: [],
      dislikes: []
    })).then(function (res) {
      var imageName = "".concat(res.id, "_").concat(data.firstname.toLowerCase()).concat(data.lastname && "_").concat(data.lastname && data.lastname.toLowerCase());

      if (typeof data.image === "object") {
        _fbConfig__WEBPACK_IMPORTED_MODULE_4__["storage"].ref("".concat(_fbConfig__WEBPACK_IMPORTED_MODULE_4__["auth"].currentUser.uid, "/").concat(imageName)).put(data.image).then(function () {
          return _fbConfig__WEBPACK_IMPORTED_MODULE_4__["storage"].ref(_fbConfig__WEBPACK_IMPORTED_MODULE_4__["auth"].currentUser.uid).child(imageName).getDownloadURL();
        }).then(function (url) {
          return _fbConfig__WEBPACK_IMPORTED_MODULE_4__["db"].collection("characters").doc(res.id).update({
            image: url
          });
        }).then(function () {
          antd__WEBPACK_IMPORTED_MODULE_3__["message"].success("Character added successfully");
          dispatch({
            type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].ADD_CHARACTER,
            payload: {
              message: "Character added successfully",
              characterId: res.id,
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
            characterId: res.id,
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
    var imageName = "".concat(data.firstname.toLowerCase()).concat(data.lastname && "_").concat(data.lastname && data.lastname.toLowerCase());

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
                  deleted: true
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvYWN0aW9ucy9jaGFyYWN0ZXJzQWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJnZXRDaGFyYWN0ZXIiLCJpZCIsImRpc3BhdGNoIiwiZGIiLCJjb2xsZWN0aW9uIiwiZG9jIiwiZ2V0IiwidGhlbiIsImV4aXN0cyIsInR5cGUiLCJ0eXBlcyIsIkdFVF9DSEFSQUNURVIiLCJwYXlsb2FkIiwiY2hhcmFjdGVyIiwiZGF0YSIsImNoYXJhRXhpc3RzIiwibG9hZGluZyIsImFkZENoYXJhY3RlciIsIkFERF9DSEFSQUNURVIiLCJhZGQiLCJjcmVhdGVkQXQiLCJmaXJlYmFzZSIsImZpcmVzdG9yZSIsIkZpZWxkVmFsdWUiLCJzZXJ2ZXJUaW1lc3RhbXAiLCJsaWtlc0NvdW50IiwibGlrZXMiLCJkaXNsaWtlcyIsInJlcyIsImltYWdlTmFtZSIsImZpcnN0bmFtZSIsInRvTG93ZXJDYXNlIiwibGFzdG5hbWUiLCJpbWFnZSIsInN0b3JhZ2UiLCJyZWYiLCJhdXRoIiwiY3VycmVudFVzZXIiLCJ1aWQiLCJwdXQiLCJjaGlsZCIsImdldERvd25sb2FkVVJMIiwidXJsIiwidXBkYXRlIiwibWVzc2FnZSIsInN1Y2Nlc3MiLCJjaGFyYWN0ZXJJZCIsImVyciIsImVycm9yIiwiZWRpdENoYXJhY3RlciIsIkVESVRfQ0hBUkFDVEVSIiwibG9hZGluZ0NoYXJhY3RlciIsInJlbGF0aXZlc0FyciIsInJlbGF0aXZlcyIsIm1hcCIsImMiLCJjaGFyYWN0ZXJfaWQiLCJkZWxldGVDaGFyYWN0ZXIiLCJERUxFVEVfQ0hBUkFDVEVSIiwiYmF0Y2giLCJ3aGVyZSIsImRvY3MiLCJmb3JFYWNoIiwiY2hhcmFjdGVycyIsImZpbHRlciIsInN0b3JpZXMiLCJzdG9yeSIsIm1haW5DaGFyYWN0ZXJzIiwic2Vjb25kYXJ5QXJyIiwic2Vjb25kYXJ5Q2hhcmFjdGVycyIsImNoYXIiLCJjb21taXQiLCJkZWxldGVkIiwiZ2V0VXNlckNoYXJhY3RlcnMiLCJ1c2VySWQiLCJpdGVtcyIsIkdFVF9VU0VSX0NIQVJBQ1RFUlMiLCJnZXRGYXZvcml0ZUNoYXJhY3RlcnMiLCJmYXZBcnIiLCJ1c2VycyIsInJlc3VsdCIsInVzZXIiLCJQcm9taXNlIiwiYWxsIiwiZmF2VXNlcnMiLCJHRVRfRkFWT1JJVEVfQ0hBUkFDVEVSUyIsImdldENoYXJhY3RlcnNJblN0b3J5Iiwib25TbmFwc2hvdCIsIkdFVF9TVE9SWV9DSEFSQUNURVJTIiwibWFpbkFyciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEVBQUQ7QUFBQSxTQUFRLFVBQUNDLFFBQUQsRUFBYztBQUNoREMsZ0RBQUUsQ0FBQ0MsVUFBSCxDQUFjLFlBQWQsRUFDR0MsR0FESCxDQUNPSixFQURQLEVBRUdLLEdBRkgsR0FHR0MsSUFISCxDQUdRLFVBQUNGLEdBQUQsRUFBUztBQUNiLFVBQUlBLEdBQUcsQ0FBQ0csTUFBUixFQUFnQjtBQUNkTixnQkFBUSxDQUFDO0FBQ1BPLGNBQUksRUFBRUMsc0RBQUssQ0FBQ0MsYUFETDtBQUVQQyxpQkFBTyxFQUFFO0FBQ1BDLHFCQUFTLGtDQUFPUixHQUFHLENBQUNTLElBQUosRUFBUDtBQUFtQmIsZ0JBQUUsRUFBRUksR0FBRyxDQUFDSjtBQUEzQixjQURGO0FBRVBjLHVCQUFXLEVBQUUsSUFGTjtBQUdQQyxtQkFBTyxFQUFFO0FBSEY7QUFGRixTQUFELENBQVI7QUFRRCxPQVRELE1BU087QUFDTGQsZ0JBQVEsQ0FBQztBQUNQTyxjQUFJLEVBQUVDLHNEQUFLLENBQUNDLGFBREw7QUFFUEMsaUJBQU8sRUFBRTtBQUNQRyx1QkFBVyxFQUFFLEtBRE47QUFFUEMsbUJBQU8sRUFBRTtBQUZGO0FBRkYsU0FBRCxDQUFSO0FBT0Q7QUFDRixLQXRCSDtBQXVCRCxHQXhCMkI7QUFBQSxDQUFyQjtBQTBCQSxJQUFNQyxZQUFZLEdBQUcs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QUVJLEdBQUcsQ0FBQ0o7QUFBM0IsYUFBa0NJLEdBQUcsQ0FBQ1MsSUFBSixFQUFsQyxHQUFsQjtBQUFBLFNBREY7QUFHQVosZ0JBQVEsQ0FBQztBQUNQTyxjQUFJLEVBQUVDLHNEQUFLLENBQUMyRSx1QkFETDtBQUVQekUsaUJBQU8sRUFBRXdFO0FBRkYsU0FBRCxDQUFSO0FBSUQsT0FURDtBQVVELEtBeEJIO0FBeUJELEdBMUJvQztBQUFBLENBQTlCO0FBNEJBLElBQU1FLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsQ0FBQ3JGLEVBQUQ7QUFBQSxTQUFRLFVBQUNDLFFBQUQsRUFBYztBQUN4REMsZ0RBQUUsQ0FBQ0MsVUFBSCxDQUFjLFNBQWQsRUFDR0MsR0FESCxDQUNPSixFQURQLEVBRUdzRixVQUZILENBRWMsVUFBQ2xGLEdBQUQsRUFBUztBQUNuQkgsY0FBUSxDQUFDO0FBQ1BPLFlBQUksRUFBRUMsc0RBQUssQ0FBQzhFLG9CQURMO0FBRVA1RSxlQUFPLEVBQUU7QUFDUHlELDZCQUFtQixFQUFFaEUsR0FBRyxDQUFDUyxJQUFKLEdBQVd1RCxtQkFEekI7QUFFUG9CLGlCQUFPLEVBQUVwRixHQUFHLENBQUNTLElBQUosR0FBV3FEO0FBRmI7QUFGRixPQUFELENBQVI7QUFPRCxLQVZIO0FBV0QsR0FabUM7QUFBQSxDQUE3QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jaGFyYWN0ZXIvbmV3LjNmMDg3ZGM4NDcwZjc0YTgxZWQzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0eXBlcyB9IGZyb20gXCIuLi8uLi91dGlscy9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgbWVzc2FnZSB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IGRiLCBhdXRoLCBzdG9yYWdlIH0gZnJvbSBcIi4uL2ZiQ29uZmlnXCI7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldENoYXJhY3RlciA9IChpZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGIuY29sbGVjdGlvbihcImNoYXJhY3RlcnNcIilcclxuICAgIC5kb2MoaWQpXHJcbiAgICAuZ2V0KClcclxuICAgIC50aGVuKChkb2MpID0+IHtcclxuICAgICAgaWYgKGRvYy5leGlzdHMpIHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiB0eXBlcy5HRVRfQ0hBUkFDVEVSLFxyXG4gICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICBjaGFyYWN0ZXI6IHsgLi4uZG9jLmRhdGEoKSwgaWQ6IGRvYy5pZCB9LFxyXG4gICAgICAgICAgICBjaGFyYUV4aXN0czogdHJ1ZSxcclxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IHR5cGVzLkdFVF9DSEFSQUNURVIsXHJcbiAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgIGNoYXJhRXhpc3RzOiBmYWxzZSxcclxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRDaGFyYWN0ZXIgPSAoZGF0YSkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGlzcGF0Y2goeyB0eXBlOiB0eXBlcy5BRERfQ0hBUkFDVEVSLCBwYXlsb2FkOiB7IGxvYWRpbmc6IHRydWUgfSB9KTtcclxuXHJcbiAgZGIuY29sbGVjdGlvbihcImNoYXJhY3RlcnNcIilcclxuICAgIC5hZGQoe1xyXG4gICAgICAuLi5kYXRhLFxyXG4gICAgICBjcmVhdGVkQXQ6IGZpcmViYXNlLmZpcmVzdG9yZS5GaWVsZFZhbHVlLnNlcnZlclRpbWVzdGFtcCgpLFxyXG4gICAgICBsaWtlc0NvdW50OiAwLFxyXG4gICAgICBsaWtlczogW10sXHJcbiAgICAgIGRpc2xpa2VzOiBbXSxcclxuICAgIH0pXHJcbiAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIGNvbnN0IGltYWdlTmFtZSA9IGAke3Jlcy5pZH0ke1wiX1wifSR7ZGF0YS5maXJzdG5hbWUudG9Mb3dlckNhc2UoKX0ke1xyXG4gICAgICAgIGRhdGEubGFzdG5hbWUgJiYgXCJfXCJcclxuICAgICAgfSR7ZGF0YS5sYXN0bmFtZSAmJiBkYXRhLmxhc3RuYW1lLnRvTG93ZXJDYXNlKCl9YDtcclxuICAgICAgaWYgKHR5cGVvZiBkYXRhLmltYWdlID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgc3RvcmFnZVxyXG4gICAgICAgICAgLnJlZihgJHthdXRoLmN1cnJlbnRVc2VyLnVpZH0vJHtpbWFnZU5hbWV9YClcclxuICAgICAgICAgIC5wdXQoZGF0YS5pbWFnZSlcclxuICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHN0b3JhZ2VcclxuICAgICAgICAgICAgICAucmVmKGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gICAgICAgICAgICAgIC5jaGlsZChpbWFnZU5hbWUpXHJcbiAgICAgICAgICAgICAgLmdldERvd25sb2FkVVJMKCk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4oKHVybCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gZGJcclxuICAgICAgICAgICAgICAuY29sbGVjdGlvbihcImNoYXJhY3RlcnNcIilcclxuICAgICAgICAgICAgICAuZG9jKHJlcy5pZClcclxuICAgICAgICAgICAgICAudXBkYXRlKHsgaW1hZ2U6IHVybCB9KTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhcIkNoYXJhY3RlciBhZGRlZCBzdWNjZXNzZnVsbHlcIik7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICB0eXBlOiB0eXBlcy5BRERfQ0hBUkFDVEVSLFxyXG4gICAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiQ2hhcmFjdGVyIGFkZGVkIHN1Y2Nlc3NmdWxseVwiLFxyXG4gICAgICAgICAgICAgICAgY2hhcmFjdGVySWQ6IHJlcy5pZCxcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWVzc2FnZS5zdWNjZXNzKFwiQ2hhcmFjdGVyIGFkZGVkIHN1Y2Nlc3NmdWxseVwiKTtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiB0eXBlcy5BRERfQ0hBUkFDVEVSLFxyXG4gICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkNoYXJhY3RlciBhZGRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgICAgY2hhcmFjdGVySWQ6IHJlcy5pZCxcclxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgbWVzc2FnZS5lcnJvcihlcnIubWVzc2FnZSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBlZGl0Q2hhcmFjdGVyID0gKGRhdGEsIGlkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkaXNwYXRjaCh7IHR5cGU6IHR5cGVzLkVESVRfQ0hBUkFDVEVSLCBwYXlsb2FkOiB7IGxvYWRpbmdDaGFyYWN0ZXI6IHRydWUgfSB9KTtcclxuICBjb25zdCBpbWFnZU5hbWUgPSBgJHtkYXRhLmZpcnN0bmFtZS50b0xvd2VyQ2FzZSgpfSR7ZGF0YS5sYXN0bmFtZSAmJiBcIl9cIn0ke1xyXG4gICAgZGF0YS5sYXN0bmFtZSAmJiBkYXRhLmxhc3RuYW1lLnRvTG93ZXJDYXNlKClcclxuICB9YDtcclxuICBpZiAoZGF0YS5pbWFnZSAmJiB0eXBlb2YgZGF0YS5pbWFnZSA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgc3RvcmFnZVxyXG4gICAgICAucmVmKGAke2F1dGguY3VycmVudFVzZXIudWlkfS8ke2ltYWdlTmFtZX1gKVxyXG4gICAgICAucHV0KGRhdGEuaW1hZ2UpXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICByZXR1cm4gc3RvcmFnZVxyXG4gICAgICAgICAgLnJlZihhdXRoLmN1cnJlbnRVc2VyLnVpZClcclxuICAgICAgICAgIC5jaGlsZChpbWFnZU5hbWUpXHJcbiAgICAgICAgICAuZ2V0RG93bmxvYWRVUkwoKTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKHVybCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBkYlxyXG4gICAgICAgICAgLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzXCIpXHJcbiAgICAgICAgICAuZG9jKGlkKVxyXG4gICAgICAgICAgLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgIC4uLmRhdGEsXHJcbiAgICAgICAgICAgIGltYWdlOiB1cmwsXHJcbiAgICAgICAgICAgIHJlbGF0aXZlc0FycjogZGF0YS5yZWxhdGl2ZXMubWFwKChjKSA9PiBjLmNoYXJhY3Rlcl9pZCksXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IHR5cGVzLkVESVRfQ0hBUkFDVEVSLFxyXG4gICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkNoYXJhY3RlciBlZGl0ZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICAgIGxvYWRpbmdDaGFyYWN0ZXI6IGZhbHNlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBtZXNzYWdlLmVycm9yKGVyci5tZXNzYWdlKTtcclxuICAgICAgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGRiLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzXCIpXHJcbiAgICAgIC5kb2MoaWQpXHJcbiAgICAgIC51cGRhdGUoe1xyXG4gICAgICAgIC4uLmRhdGEsXHJcbiAgICAgICAgcmVsYXRpdmVzQXJyOiBkYXRhLnJlbGF0aXZlcy5tYXAoKGMpID0+IGMuY2hhcmFjdGVyX2lkKSxcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IHR5cGVzLkVESVRfQ0hBUkFDVEVSLFxyXG4gICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkNoYXJhY3RlciBlZGl0ZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICAgIGxvYWRpbmdDaGFyYWN0ZXI6IGZhbHNlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBtZXNzYWdlLmVycm9yKGVyci5tZXNzYWdlKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlbGV0ZUNoYXJhY3RlciA9IChpZCwgZmlyc3RuYW1lLCBsYXN0bmFtZSkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGlzcGF0Y2goeyB0eXBlOiB0eXBlcy5ERUxFVEVfQ0hBUkFDVEVSLCBwYXlsb2FkOiB7IGxvYWRpbmc6IHRydWUgfSB9KTtcclxuICBjb25zdCBpbWFnZU5hbWUgPSBgJHtpZH0ke1wiX1wifSR7Zmlyc3RuYW1lLnRvTG93ZXJDYXNlKCl9JHtsYXN0bmFtZSAmJiBcIl9cIn0ke1xyXG4gICAgbGFzdG5hbWUgJiYgbGFzdG5hbWUudG9Mb3dlckNhc2UoKVxyXG4gIH1gO1xyXG4gIGNvbnN0IGJhdGNoID0gZGIuYmF0Y2goKTtcclxuICBkYi5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc1wiKVxyXG4gICAgLmRvYyhpZClcclxuICAgIC5kZWxldGUoKVxyXG4gICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICByZXR1cm4gc3RvcmFnZS5yZWYoYCR7YXV0aC5jdXJyZW50VXNlci51aWR9LyR7aW1hZ2VOYW1lfWApLmRlbGV0ZSgpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgZGIuY29sbGVjdGlvbihcImNoYXB0ZXJzXCIpXHJcbiAgICAgICAgLndoZXJlKFwiY2hhcmFjdGVyc1wiLCBcImFycmF5LWNvbnRhaW5zXCIsIGlkKVxyXG4gICAgICAgIC5nZXQoKVxyXG4gICAgICAgIC50aGVuKChkb2NzKSA9PiB7XHJcbiAgICAgICAgICBkb2NzLmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgICAgICAgICBiYXRjaC51cGRhdGUoZGIuY29sbGVjdGlvbihcImNoYXB0ZXJzXCIpLmRvYyhkb2MuaWQpLCB7XHJcbiAgICAgICAgICAgICAgY2hhcmFjdGVyczogZG9jLmRhdGEoKS5jaGFyYWN0ZXJzLmZpbHRlcigoYykgPT4gYyAhPT0gaWQpLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgZGIuY29sbGVjdGlvbihcInN0b3JpZXNcIilcclxuICAgICAgICAgICAgLndoZXJlKFwic2Vjb25kYXJ5QXJyXCIsIFwiYXJyYXktY29udGFpbnNcIiwgaWQpXHJcbiAgICAgICAgICAgIC5nZXQoKVxyXG4gICAgICAgICAgICAudGhlbigoc3RvcmllcykgPT4ge1xyXG4gICAgICAgICAgICAgIHN0b3JpZXMuZm9yRWFjaCgoc3RvcnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGJhdGNoLnVwZGF0ZShkYi5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKS5kb2Moc3RvcnkuaWQpLCB7XHJcbiAgICAgICAgICAgICAgICAgIG1haW5DaGFyYWN0ZXJzOiBzdG9yeVxyXG4gICAgICAgICAgICAgICAgICAgIC5kYXRhKClcclxuICAgICAgICAgICAgICAgICAgICAubWFpbkNoYXJhY3RlcnMuZmlsdGVyKChjKSA9PiBjICE9PSBpZCksXHJcbiAgICAgICAgICAgICAgICAgIHNlY29uZGFyeUFycjogc3RvcnlcclxuICAgICAgICAgICAgICAgICAgICAuZGF0YSgpXHJcbiAgICAgICAgICAgICAgICAgICAgLnNlY29uZGFyeUFyci5maWx0ZXIoKGMpID0+IGMgIT09IGlkKSxcclxuICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5Q2hhcmFjdGVyczogc3RvcnlcclxuICAgICAgICAgICAgICAgICAgICAuZGF0YSgpXHJcbiAgICAgICAgICAgICAgICAgICAgLnNlY29uZGFyeUNoYXJhY3RlcnMuZmlsdGVyKChjKSA9PiBjLmlkICE9PSBpZCksXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGRiLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzXCIpXHJcbiAgICAgICAgICAgICAgICAud2hlcmUoXCJyZWxhdGl2ZXNBcnJcIiwgXCJhcnJheS1jb250YWluc1wiLCBpZClcclxuICAgICAgICAgICAgICAgIC5nZXQoKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKGNoYXJhY3RlcnMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgY2hhcmFjdGVycy5mb3JFYWNoKChjaGFyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmF0Y2gudXBkYXRlKGRiLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzXCIpLmRvYyhjaGFyLmlkKSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmVsYXRpdmVzQXJyOiBjaGFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5kYXRhKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbGF0aXZlc0Fyci5maWx0ZXIoKGMpID0+IGMgIT09IGlkKSxcclxuICAgICAgICAgICAgICAgICAgICAgIHJlbGF0aXZlczogY2hhclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZGF0YSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZWxhdGl2ZXMuZmlsdGVyKChjKSA9PiBjLmNoYXJhY3Rlcl9pZCAhPT0gaWQpLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgIGJhdGNoLmNvbW1pdCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHR5cGVzLkRFTEVURV9DSEFSQUNURVIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiQ2hhcmFjdGVyIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyQ2hhcmFjdGVycyA9ICh1c2VySWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzXCIpXHJcbiAgICAud2hlcmUoXCJhdXRob3JJZFwiLCBcIj09XCIsIHVzZXJJZClcclxuICAgIC5nZXQoKVxyXG4gICAgLnRoZW4oKGRvY3MpID0+IHtcclxuICAgICAgbGV0IGl0ZW1zID0gW107XHJcbiAgICAgIGRvY3MuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICAgICAgaXRlbXMgPSBbLi4uaXRlbXMsIHsgaWQ6IGRvYy5pZCwgLi4uZG9jLmRhdGEoKSB9XTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBpdGVtcztcclxuICAgIH0pXHJcbiAgICAudGhlbigoaXRlbXMpID0+IHtcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiB0eXBlcy5HRVRfVVNFUl9DSEFSQUNURVJTLCBwYXlsb2FkOiBpdGVtcyB9KTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEZhdm9yaXRlQ2hhcmFjdGVycyA9ICgpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzTGlrZXNcIilcclxuICAgIC53aGVyZShcInNlbmRlcklkXCIsIFwiPT1cIiwgYXV0aC5jdXJyZW50VXNlci51aWQpXHJcbiAgICAuZ2V0KClcclxuICAgIC50aGVuKChkb2NzKSA9PiB7XHJcbiAgICAgIGxldCBmYXZBcnIgPSBbXTtcclxuICAgICAgZG9jcy5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgICAgICBmYXZBcnIgPSBbLi4uZmF2QXJyLCBkb2MuZGF0YSgpLmNoYXJhY3RlcklkXTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBmYXZBcnI7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKHVzZXJzKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHVzZXJzLm1hcCgodXNlcikgPT5cclxuICAgICAgICBkYi5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc1wiKS5kb2ModXNlcikuZ2V0KClcclxuICAgICAgKTtcclxuICAgICAgUHJvbWlzZS5hbGwocmVzdWx0KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBsZXQgZmF2VXNlcnMgPSBbXTtcclxuICAgICAgICByZXMuZm9yRWFjaChcclxuICAgICAgICAgIChkb2MpID0+IChmYXZVc2VycyA9IFsuLi5mYXZVc2VycywgeyBpZDogZG9jLmlkLCAuLi5kb2MuZGF0YSgpIH1dKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogdHlwZXMuR0VUX0ZBVk9SSVRFX0NIQVJBQ1RFUlMsXHJcbiAgICAgICAgICBwYXlsb2FkOiBmYXZVc2VycyxcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDaGFyYWN0ZXJzSW5TdG9yeSA9IChpZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGIuY29sbGVjdGlvbihcInN0b3JpZXNcIilcclxuICAgIC5kb2MoaWQpXHJcbiAgICAub25TbmFwc2hvdCgoZG9jKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiB0eXBlcy5HRVRfU1RPUllfQ0hBUkFDVEVSUyxcclxuICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICBzZWNvbmRhcnlDaGFyYWN0ZXJzOiBkb2MuZGF0YSgpLnNlY29uZGFyeUNoYXJhY3RlcnMsXHJcbiAgICAgICAgICBtYWluQXJyOiBkb2MuZGF0YSgpLm1haW5DaGFyYWN0ZXJzLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=