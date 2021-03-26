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
    var imageName = "".concat(firstname.toLowerCase()).concat(lastname && "_").concat(lastname && lastname.toLowerCase());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvYWN0aW9ucy9jaGFyYWN0ZXJzQWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJnZXRDaGFyYWN0ZXIiLCJpZCIsImRpc3BhdGNoIiwiZGIiLCJjb2xsZWN0aW9uIiwiZG9jIiwiZ2V0IiwidGhlbiIsImV4aXN0cyIsInR5cGUiLCJ0eXBlcyIsIkdFVF9DSEFSQUNURVIiLCJwYXlsb2FkIiwiY2hhcmFjdGVyIiwiZGF0YSIsImNoYXJhRXhpc3RzIiwibG9hZGluZyIsImFkZENoYXJhY3RlciIsIkFERF9DSEFSQUNURVIiLCJhZGQiLCJjcmVhdGVkQXQiLCJmaXJlYmFzZSIsImZpcmVzdG9yZSIsIkZpZWxkVmFsdWUiLCJzZXJ2ZXJUaW1lc3RhbXAiLCJsaWtlc0NvdW50IiwibGlrZXMiLCJkaXNsaWtlcyIsInJlcyIsImltYWdlTmFtZSIsImZpcnN0bmFtZSIsInRvTG93ZXJDYXNlIiwibGFzdG5hbWUiLCJpbWFnZSIsInN0b3JhZ2UiLCJyZWYiLCJhdXRoIiwiY3VycmVudFVzZXIiLCJ1aWQiLCJwdXQiLCJjaGlsZCIsImdldERvd25sb2FkVVJMIiwidXJsIiwidXBkYXRlIiwibWVzc2FnZSIsInN1Y2Nlc3MiLCJjaGFyYWN0ZXJJZCIsImVyciIsImVycm9yIiwiZWRpdENoYXJhY3RlciIsIkVESVRfQ0hBUkFDVEVSIiwibG9hZGluZ0NoYXJhY3RlciIsInJlbGF0aXZlc0FyciIsInJlbGF0aXZlcyIsIm1hcCIsImMiLCJjaGFyYWN0ZXJfaWQiLCJkZWxldGVDaGFyYWN0ZXIiLCJERUxFVEVfQ0hBUkFDVEVSIiwiYmF0Y2giLCJ3aGVyZSIsImRvY3MiLCJmb3JFYWNoIiwiY2hhcmFjdGVycyIsImZpbHRlciIsInN0b3JpZXMiLCJzdG9yeSIsIm1haW5DaGFyYWN0ZXJzIiwic2Vjb25kYXJ5QXJyIiwic2Vjb25kYXJ5Q2hhcmFjdGVycyIsImNoYXIiLCJjb21taXQiLCJkZWxldGVkIiwiZ2V0VXNlckNoYXJhY3RlcnMiLCJ1c2VySWQiLCJpdGVtcyIsIkdFVF9VU0VSX0NIQVJBQ1RFUlMiLCJnZXRGYXZvcml0ZUNoYXJhY3RlcnMiLCJmYXZBcnIiLCJ1c2VycyIsInJlc3VsdCIsInVzZXIiLCJQcm9taXNlIiwiYWxsIiwiZmF2VXNlcnMiLCJHRVRfRkFWT1JJVEVfQ0hBUkFDVEVSUyIsImdldENoYXJhY3RlcnNJblN0b3J5Iiwib25TbmFwc2hvdCIsIkdFVF9TVE9SWV9DSEFSQUNURVJTIiwibWFpbkFyciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEVBQUQ7QUFBQSxTQUFRLFVBQUNDLFFBQUQsRUFBYztBQUNoREMsZ0RBQUUsQ0FBQ0MsVUFBSCxDQUFjLFlBQWQsRUFDR0MsR0FESCxDQUNPSixFQURQLEVBRUdLLEdBRkgsR0FHR0MsSUFISCxDQUdRLFVBQUNGLEdBQUQsRUFBUztBQUNiLFVBQUlBLEdBQUcsQ0FBQ0csTUFBUixFQUFnQjtBQUNkTixnQkFBUSxDQUFDO0FBQ1BPLGNBQUksRUFBRUMsc0RBQUssQ0FBQ0MsYUFETDtBQUVQQyxpQkFBTyxFQUFFO0FBQ1BDLHFCQUFTLGtDQUFPUixHQUFHLENBQUNTLElBQUosRUFBUDtBQUFtQmIsZ0JBQUUsRUFBRUksR0FBRyxDQUFDSjtBQUEzQixjQURGO0FBRVBjLHVCQUFXLEVBQUUsSUFGTjtBQUdQQyxtQkFBTyxFQUFFO0FBSEY7QUFGRixTQUFELENBQVI7QUFRRCxPQVRELE1BU087QUFDTGQsZ0JBQVEsQ0FBQztBQUNQTyxjQUFJLEVBQUVDLHNEQUFLLENBQUNDLGFBREw7QUFFUEMsaUJBQU8sRUFBRTtBQUNQRyx1QkFBVyxFQUFFLEtBRE47QUFFUEMsbUJBQU8sRUFBRTtBQUZGO0FBRkYsU0FBRCxDQUFSO0FBT0Q7QUFDRixLQXRCSDtBQXVCRCxHQXhCMkI7QUFBQSxDQUFyQjtBQTBCQSxJQUFNQyxZQUFZLEdBQUcs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Q0ksR0FBRyxDQUFDUyxJQUFKLEVBQWxDLEdBQWxCO0FBQUEsU0FERjtBQUdBWixnQkFBUSxDQUFDO0FBQ1BPLGNBQUksRUFBRUMsc0RBQUssQ0FBQzJFLHVCQURMO0FBRVB6RSxpQkFBTyxFQUFFd0U7QUFGRixTQUFELENBQVI7QUFJRCxPQVREO0FBVUQsS0F4Qkg7QUF5QkQsR0ExQm9DO0FBQUEsQ0FBOUI7QUE0QkEsSUFBTUUsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixDQUFDckYsRUFBRDtBQUFBLFNBQVEsVUFBQ0MsUUFBRCxFQUFjO0FBQ3hEQyxnREFBRSxDQUFDQyxVQUFILENBQWMsU0FBZCxFQUNHQyxHQURILENBQ09KLEVBRFAsRUFFR3NGLFVBRkgsQ0FFYyxVQUFDbEYsR0FBRCxFQUFTO0FBQ25CSCxjQUFRLENBQUM7QUFDUE8sWUFBSSxFQUFFQyxzREFBSyxDQUFDOEUsb0JBREw7QUFFUDVFLGVBQU8sRUFBRTtBQUNQeUQsNkJBQW1CLEVBQUVoRSxHQUFHLENBQUNTLElBQUosR0FBV3VELG1CQUR6QjtBQUVQb0IsaUJBQU8sRUFBRXBGLEdBQUcsQ0FBQ1MsSUFBSixHQUFXcUQ7QUFGYjtBQUZGLE9BQUQsQ0FBUjtBQU9ELEtBVkg7QUFXRCxHQVptQztBQUFBLENBQTdCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NoYXJhY3Rlci9uZXcuZjExYzAwNmE0Njk3MGE3NWFjZWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHR5cGVzIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBtZXNzYWdlIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgZGIsIGF1dGgsIHN0b3JhZ2UgfSBmcm9tIFwiLi4vZmJDb25maWdcIjtcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q2hhcmFjdGVyID0gKGlkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkYi5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc1wiKVxyXG4gICAgLmRvYyhpZClcclxuICAgIC5nZXQoKVxyXG4gICAgLnRoZW4oKGRvYykgPT4ge1xyXG4gICAgICBpZiAoZG9jLmV4aXN0cykge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IHR5cGVzLkdFVF9DSEFSQUNURVIsXHJcbiAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgIGNoYXJhY3RlcjogeyAuLi5kb2MuZGF0YSgpLCBpZDogZG9jLmlkIH0sXHJcbiAgICAgICAgICAgIGNoYXJhRXhpc3RzOiB0cnVlLFxyXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogdHlwZXMuR0VUX0NIQVJBQ1RFUixcclxuICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgY2hhcmFFeGlzdHM6IGZhbHNlLFxyXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZENoYXJhY3RlciA9IChkYXRhKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkaXNwYXRjaCh7IHR5cGU6IHR5cGVzLkFERF9DSEFSQUNURVIsIHBheWxvYWQ6IHsgbG9hZGluZzogdHJ1ZSB9IH0pO1xyXG5cclxuICBkYi5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc1wiKVxyXG4gICAgLmFkZCh7XHJcbiAgICAgIC4uLmRhdGEsXHJcbiAgICAgIGNyZWF0ZWRBdDogZmlyZWJhc2UuZmlyZXN0b3JlLkZpZWxkVmFsdWUuc2VydmVyVGltZXN0YW1wKCksXHJcbiAgICAgIGxpa2VzQ291bnQ6IDAsXHJcbiAgICAgIGxpa2VzOiBbXSxcclxuICAgICAgZGlzbGlrZXM6IFtdLFxyXG4gICAgfSlcclxuICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgY29uc3QgaW1hZ2VOYW1lID0gYCR7cmVzLmlkfSR7XCJfXCJ9JHtkYXRhLmZpcnN0bmFtZS50b0xvd2VyQ2FzZSgpfSR7XHJcbiAgICAgICAgZGF0YS5sYXN0bmFtZSAmJiBcIl9cIlxyXG4gICAgICB9JHtkYXRhLmxhc3RuYW1lICYmIGRhdGEubGFzdG5hbWUudG9Mb3dlckNhc2UoKX1gO1xyXG4gICAgICBpZiAodHlwZW9mIGRhdGEuaW1hZ2UgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICBzdG9yYWdlXHJcbiAgICAgICAgICAucmVmKGAke2F1dGguY3VycmVudFVzZXIudWlkfS8ke2ltYWdlTmFtZX1gKVxyXG4gICAgICAgICAgLnB1dChkYXRhLmltYWdlKVxyXG4gICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gc3RvcmFnZVxyXG4gICAgICAgICAgICAgIC5yZWYoYXV0aC5jdXJyZW50VXNlci51aWQpXHJcbiAgICAgICAgICAgICAgLmNoaWxkKGltYWdlTmFtZSlcclxuICAgICAgICAgICAgICAuZ2V0RG93bmxvYWRVUkwoKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbigodXJsKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBkYlxyXG4gICAgICAgICAgICAgIC5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc1wiKVxyXG4gICAgICAgICAgICAgIC5kb2MocmVzLmlkKVxyXG4gICAgICAgICAgICAgIC51cGRhdGUoeyBpbWFnZTogdXJsIH0pO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgbWVzc2FnZS5zdWNjZXNzKFwiQ2hhcmFjdGVyIGFkZGVkIHN1Y2Nlc3NmdWxseVwiKTtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgIHR5cGU6IHR5cGVzLkFERF9DSEFSQUNURVIsXHJcbiAgICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJDaGFyYWN0ZXIgYWRkZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICAgICAgICBjaGFyYWN0ZXJJZDogcmVzLmlkLFxyXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoXCJDaGFyYWN0ZXIgYWRkZWQgc3VjY2Vzc2Z1bGx5XCIpO1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IHR5cGVzLkFERF9DSEFSQUNURVIsXHJcbiAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiQ2hhcmFjdGVyIGFkZGVkIHN1Y2Nlc3NmdWxseVwiLFxyXG4gICAgICAgICAgICBjaGFyYWN0ZXJJZDogcmVzLmlkLFxyXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBtZXNzYWdlLmVycm9yKGVyci5tZXNzYWdlKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGVkaXRDaGFyYWN0ZXIgPSAoZGF0YSwgaWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRpc3BhdGNoKHsgdHlwZTogdHlwZXMuRURJVF9DSEFSQUNURVIsIHBheWxvYWQ6IHsgbG9hZGluZ0NoYXJhY3RlcjogdHJ1ZSB9IH0pO1xyXG4gIGNvbnN0IGltYWdlTmFtZSA9IGAke2RhdGEuZmlyc3RuYW1lLnRvTG93ZXJDYXNlKCl9JHtkYXRhLmxhc3RuYW1lICYmIFwiX1wifSR7XHJcbiAgICBkYXRhLmxhc3RuYW1lICYmIGRhdGEubGFzdG5hbWUudG9Mb3dlckNhc2UoKVxyXG4gIH1gO1xyXG4gIGlmIChkYXRhLmltYWdlICYmIHR5cGVvZiBkYXRhLmltYWdlID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICBzdG9yYWdlXHJcbiAgICAgIC5yZWYoYCR7YXV0aC5jdXJyZW50VXNlci51aWR9LyR7aW1hZ2VOYW1lfWApXHJcbiAgICAgIC5wdXQoZGF0YS5pbWFnZSlcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBzdG9yYWdlXHJcbiAgICAgICAgICAucmVmKGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gICAgICAgICAgLmNoaWxkKGltYWdlTmFtZSlcclxuICAgICAgICAgIC5nZXREb3dubG9hZFVSTCgpO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigodXJsKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGRiXHJcbiAgICAgICAgICAuY29sbGVjdGlvbihcImNoYXJhY3RlcnNcIilcclxuICAgICAgICAgIC5kb2MoaWQpXHJcbiAgICAgICAgICAudXBkYXRlKHtcclxuICAgICAgICAgICAgLi4uZGF0YSxcclxuICAgICAgICAgICAgaW1hZ2U6IHVybCxcclxuICAgICAgICAgICAgcmVsYXRpdmVzQXJyOiBkYXRhLnJlbGF0aXZlcy5tYXAoKGMpID0+IGMuY2hhcmFjdGVyX2lkKSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogdHlwZXMuRURJVF9DSEFSQUNURVIsXHJcbiAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiQ2hhcmFjdGVyIGVkaXRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgICAgbG9hZGluZ0NoYXJhY3RlcjogZmFsc2UsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoZXJyLm1lc3NhZ2UpO1xyXG4gICAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgZGIuY29sbGVjdGlvbihcImNoYXJhY3RlcnNcIilcclxuICAgICAgLmRvYyhpZClcclxuICAgICAgLnVwZGF0ZSh7XHJcbiAgICAgICAgLi4uZGF0YSxcclxuICAgICAgICByZWxhdGl2ZXNBcnI6IGRhdGEucmVsYXRpdmVzLm1hcCgoYykgPT4gYy5jaGFyYWN0ZXJfaWQpLFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogdHlwZXMuRURJVF9DSEFSQUNURVIsXHJcbiAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiQ2hhcmFjdGVyIGVkaXRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgICAgbG9hZGluZ0NoYXJhY3RlcjogZmFsc2UsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoZXJyLm1lc3NhZ2UpO1xyXG4gICAgICB9KTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlQ2hhcmFjdGVyID0gKGlkLCBmaXJzdG5hbWUsIGxhc3RuYW1lKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkaXNwYXRjaCh7IHR5cGU6IHR5cGVzLkRFTEVURV9DSEFSQUNURVIsIHBheWxvYWQ6IHsgbG9hZGluZzogdHJ1ZSB9IH0pO1xyXG4gIGNvbnN0IGltYWdlTmFtZSA9IGAke2ZpcnN0bmFtZS50b0xvd2VyQ2FzZSgpfSR7bGFzdG5hbWUgJiYgXCJfXCJ9JHtcclxuICAgIGxhc3RuYW1lICYmIGxhc3RuYW1lLnRvTG93ZXJDYXNlKClcclxuICB9YDtcclxuICBjb25zdCBiYXRjaCA9IGRiLmJhdGNoKCk7XHJcbiAgZGIuY29sbGVjdGlvbihcImNoYXJhY3RlcnNcIilcclxuICAgIC5kb2MoaWQpXHJcbiAgICAuZGVsZXRlKClcclxuICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgcmV0dXJuIHN0b3JhZ2UucmVmKGAke2F1dGguY3VycmVudFVzZXIudWlkfS8ke2ltYWdlTmFtZX1gKS5kZWxldGUoKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgIGRiLmNvbGxlY3Rpb24oXCJjaGFwdGVyc1wiKVxyXG4gICAgICAgIC53aGVyZShcImNoYXJhY3RlcnNcIiwgXCJhcnJheS1jb250YWluc1wiLCBpZClcclxuICAgICAgICAuZ2V0KClcclxuICAgICAgICAudGhlbigoZG9jcykgPT4ge1xyXG4gICAgICAgICAgZG9jcy5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgICAgICAgICAgYmF0Y2gudXBkYXRlKGRiLmNvbGxlY3Rpb24oXCJjaGFwdGVyc1wiKS5kb2MoZG9jLmlkKSwge1xyXG4gICAgICAgICAgICAgIGNoYXJhY3RlcnM6IGRvYy5kYXRhKCkuY2hhcmFjdGVycy5maWx0ZXIoKGMpID0+IGMgIT09IGlkKSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgIGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpXHJcbiAgICAgICAgICAgIC53aGVyZShcInNlY29uZGFyeUFyclwiLCBcImFycmF5LWNvbnRhaW5zXCIsIGlkKVxyXG4gICAgICAgICAgICAuZ2V0KClcclxuICAgICAgICAgICAgLnRoZW4oKHN0b3JpZXMpID0+IHtcclxuICAgICAgICAgICAgICBzdG9yaWVzLmZvckVhY2goKHN0b3J5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBiYXRjaC51cGRhdGUoZGIuY29sbGVjdGlvbihcInN0b3JpZXNcIikuZG9jKHN0b3J5LmlkKSwge1xyXG4gICAgICAgICAgICAgICAgICBtYWluQ2hhcmFjdGVyczogc3RvcnlcclxuICAgICAgICAgICAgICAgICAgICAuZGF0YSgpXHJcbiAgICAgICAgICAgICAgICAgICAgLm1haW5DaGFyYWN0ZXJzLmZpbHRlcigoYykgPT4gYyAhPT0gaWQpLFxyXG4gICAgICAgICAgICAgICAgICBzZWNvbmRhcnlBcnI6IHN0b3J5XHJcbiAgICAgICAgICAgICAgICAgICAgLmRhdGEoKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zZWNvbmRhcnlBcnIuZmlsdGVyKChjKSA9PiBjICE9PSBpZCksXHJcbiAgICAgICAgICAgICAgICAgIHNlY29uZGFyeUNoYXJhY3RlcnM6IHN0b3J5XHJcbiAgICAgICAgICAgICAgICAgICAgLmRhdGEoKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zZWNvbmRhcnlDaGFyYWN0ZXJzLmZpbHRlcigoYykgPT4gYy5pZCAhPT0gaWQpLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICBkYi5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc1wiKVxyXG4gICAgICAgICAgICAgICAgLndoZXJlKFwicmVsYXRpdmVzQXJyXCIsIFwiYXJyYXktY29udGFpbnNcIiwgaWQpXHJcbiAgICAgICAgICAgICAgICAuZ2V0KClcclxuICAgICAgICAgICAgICAgIC50aGVuKChjaGFyYWN0ZXJzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNoYXJhY3RlcnMuZm9yRWFjaCgoY2hhcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhdGNoLnVwZGF0ZShkYi5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc1wiKS5kb2MoY2hhci5pZCksIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHJlbGF0aXZlc0FycjogY2hhclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZGF0YSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZWxhdGl2ZXNBcnIuZmlsdGVyKChjKSA9PiBjICE9PSBpZCksXHJcbiAgICAgICAgICAgICAgICAgICAgICByZWxhdGl2ZXM6IGNoYXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmRhdGEoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVsYXRpdmVzLmZpbHRlcigoYykgPT4gYy5jaGFyYWN0ZXJfaWQgIT09IGlkKSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICBiYXRjaC5jb21taXQoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlOiB0eXBlcy5ERUxFVEVfQ0hBUkFDVEVSLFxyXG4gICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkNoYXJhY3RlciBkZWxldGVkIHN1Y2Nlc3NmdWxseVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VXNlckNoYXJhY3RlcnMgPSAodXNlcklkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkYi5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc1wiKVxyXG4gICAgLndoZXJlKFwiYXV0aG9ySWRcIiwgXCI9PVwiLCB1c2VySWQpXHJcbiAgICAuZ2V0KClcclxuICAgIC50aGVuKChkb2NzKSA9PiB7XHJcbiAgICAgIGxldCBpdGVtcyA9IFtdO1xyXG4gICAgICBkb2NzLmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgICAgIGl0ZW1zID0gWy4uLml0ZW1zLCB7IGlkOiBkb2MuaWQsIC4uLmRvYy5kYXRhKCkgfV07XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gaXRlbXM7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGl0ZW1zKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogdHlwZXMuR0VUX1VTRVJfQ0hBUkFDVEVSUywgcGF5bG9hZDogaXRlbXMgfSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRGYXZvcml0ZUNoYXJhY3RlcnMgPSAoKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkYi5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc0xpa2VzXCIpXHJcbiAgICAud2hlcmUoXCJzZW5kZXJJZFwiLCBcIj09XCIsIGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigoZG9jcykgPT4ge1xyXG4gICAgICBsZXQgZmF2QXJyID0gW107XHJcbiAgICAgIGRvY3MuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICAgICAgZmF2QXJyID0gWy4uLmZhdkFyciwgZG9jLmRhdGEoKS5jaGFyYWN0ZXJJZF07XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gZmF2QXJyO1xyXG4gICAgfSlcclxuICAgIC50aGVuKCh1c2VycykgPT4ge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSB1c2Vycy5tYXAoKHVzZXIpID0+XHJcbiAgICAgICAgZGIuY29sbGVjdGlvbihcImNoYXJhY3RlcnNcIikuZG9jKHVzZXIpLmdldCgpXHJcbiAgICAgICk7XHJcbiAgICAgIFByb21pc2UuYWxsKHJlc3VsdCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgbGV0IGZhdlVzZXJzID0gW107XHJcbiAgICAgICAgcmVzLmZvckVhY2goXHJcbiAgICAgICAgICAoZG9jKSA9PiAoZmF2VXNlcnMgPSBbLi4uZmF2VXNlcnMsIHsgaWQ6IGRvYy5pZCwgLi4uZG9jLmRhdGEoKSB9XSlcclxuICAgICAgICApO1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IHR5cGVzLkdFVF9GQVZPUklURV9DSEFSQUNURVJTLFxyXG4gICAgICAgICAgcGF5bG9hZDogZmF2VXNlcnMsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q2hhcmFjdGVyc0luU3RvcnkgPSAoaWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpXHJcbiAgICAuZG9jKGlkKVxyXG4gICAgLm9uU25hcHNob3QoKGRvYykgPT4ge1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogdHlwZXMuR0VUX1NUT1JZX0NIQVJBQ1RFUlMsXHJcbiAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgc2Vjb25kYXJ5Q2hhcmFjdGVyczogZG9jLmRhdGEoKS5zZWNvbmRhcnlDaGFyYWN0ZXJzLFxyXG4gICAgICAgICAgbWFpbkFycjogZG9jLmRhdGEoKS5tYWluQ2hhcmFjdGVycyxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9