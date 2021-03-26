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
      image: url,
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
          _fbConfig__WEBPACK_IMPORTED_MODULE_4__["db"].collection("characters").doc(res.id);
        });
      } else {}
    });

    if (typeof data.image === "object") {
      _fbConfig__WEBPACK_IMPORTED_MODULE_4__["storage"].ref("".concat(_fbConfig__WEBPACK_IMPORTED_MODULE_4__["auth"].currentUser.uid, "/").concat(imageName)).put(data.image).then(function () {
        return _fbConfig__WEBPACK_IMPORTED_MODULE_4__["storage"].ref(_fbConfig__WEBPACK_IMPORTED_MODULE_4__["auth"].currentUser.uid).child(imageName).getDownloadURL();
      }).then(function (url) {
        return _fbConfig__WEBPACK_IMPORTED_MODULE_4__["db"].collection("characters").add(_objectSpread(_objectSpread({}, data), {}, {
          image: url,
          createdAt: firebase_app__WEBPACK_IMPORTED_MODULE_5__["default"].firestore.FieldValue.serverTimestamp(),
          likesCount: 0,
          likes: [],
          dislikes: []
        }));
      }).then(function (res) {
        antd__WEBPACK_IMPORTED_MODULE_3__["message"].success("Character added successfully");
        dispatch({
          type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].ADD_CHARACTER,
          payload: {
            message: "Character added successfully",
            characterId: res.id,
            loading: false
          }
        });
      })["catch"](function (err) {
        antd__WEBPACK_IMPORTED_MODULE_3__["message"].error(err.message);
      });
    } else {
      _fbConfig__WEBPACK_IMPORTED_MODULE_4__["db"].collection("characters").add(_objectSpread(_objectSpread({}, data), {}, {
        createdAt: firebase_app__WEBPACK_IMPORTED_MODULE_5__["default"].firestore.FieldValue.serverTimestamp(),
        likesCount: 0,
        likes: [],
        dislikes: []
      })).then(function (res) {
        antd__WEBPACK_IMPORTED_MODULE_3__["message"].success("Character added successfully");
        dispatch({
          type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].ADD_CHARACTER,
          payload: {
            message: "Character added successfully",
            characterId: res.id,
            loading: false
          }
        });
      })["catch"](function (err) {
        antd__WEBPACK_IMPORTED_MODULE_3__["message"].error(err.message);
      });
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvYWN0aW9ucy9jaGFyYWN0ZXJzQWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJnZXRDaGFyYWN0ZXIiLCJpZCIsImRpc3BhdGNoIiwiZGIiLCJjb2xsZWN0aW9uIiwiZG9jIiwiZ2V0IiwidGhlbiIsImV4aXN0cyIsInR5cGUiLCJ0eXBlcyIsIkdFVF9DSEFSQUNURVIiLCJwYXlsb2FkIiwiY2hhcmFjdGVyIiwiZGF0YSIsImNoYXJhRXhpc3RzIiwibG9hZGluZyIsImFkZENoYXJhY3RlciIsIkFERF9DSEFSQUNURVIiLCJhZGQiLCJpbWFnZSIsInVybCIsImNyZWF0ZWRBdCIsImZpcmViYXNlIiwiZmlyZXN0b3JlIiwiRmllbGRWYWx1ZSIsInNlcnZlclRpbWVzdGFtcCIsImxpa2VzQ291bnQiLCJsaWtlcyIsImRpc2xpa2VzIiwicmVzIiwiaW1hZ2VOYW1lIiwiZmlyc3RuYW1lIiwidG9Mb3dlckNhc2UiLCJsYXN0bmFtZSIsInN0b3JhZ2UiLCJyZWYiLCJhdXRoIiwiY3VycmVudFVzZXIiLCJ1aWQiLCJwdXQiLCJjaGlsZCIsImdldERvd25sb2FkVVJMIiwibWVzc2FnZSIsInN1Y2Nlc3MiLCJjaGFyYWN0ZXJJZCIsImVyciIsImVycm9yIiwiZWRpdENoYXJhY3RlciIsIkVESVRfQ0hBUkFDVEVSIiwibG9hZGluZ0NoYXJhY3RlciIsInVwZGF0ZSIsInJlbGF0aXZlc0FyciIsInJlbGF0aXZlcyIsIm1hcCIsImMiLCJjaGFyYWN0ZXJfaWQiLCJkZWxldGVDaGFyYWN0ZXIiLCJERUxFVEVfQ0hBUkFDVEVSIiwiYmF0Y2giLCJ3aGVyZSIsImRvY3MiLCJmb3JFYWNoIiwiY2hhcmFjdGVycyIsImZpbHRlciIsInN0b3JpZXMiLCJzdG9yeSIsIm1haW5DaGFyYWN0ZXJzIiwic2Vjb25kYXJ5QXJyIiwic2Vjb25kYXJ5Q2hhcmFjdGVycyIsImNoYXIiLCJjb21taXQiLCJkZWxldGVkIiwiZ2V0VXNlckNoYXJhY3RlcnMiLCJ1c2VySWQiLCJpdGVtcyIsIkdFVF9VU0VSX0NIQVJBQ1RFUlMiLCJnZXRGYXZvcml0ZUNoYXJhY3RlcnMiLCJmYXZBcnIiLCJ1c2VycyIsInJlc3VsdCIsInVzZXIiLCJQcm9taXNlIiwiYWxsIiwiZmF2VXNlcnMiLCJHRVRfRkFWT1JJVEVfQ0hBUkFDVEVSUyIsImdldENoYXJhY3RlcnNJblN0b3J5Iiwib25TbmFwc2hvdCIsIkdFVF9TVE9SWV9DSEFSQUNURVJTIiwibWFpbkFyciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEVBQUQ7QUFBQSxTQUFRLFVBQUNDLFFBQUQsRUFBYztBQUNoREMsZ0RBQUUsQ0FBQ0MsVUFBSCxDQUFjLFlBQWQsRUFDR0MsR0FESCxDQUNPSixFQURQLEVBRUdLLEdBRkgsR0FHR0MsSUFISCxDQUdRLFVBQUNGLEdBQUQsRUFBUztBQUNiLFVBQUlBLEdBQUcsQ0FBQ0csTUFBUixFQUFnQjtBQUNkTixnQkFBUSxDQUFDO0FBQ1BPLGNBQUksRUFBRUMsc0RBQUssQ0FBQ0MsYUFETDtBQUVQQyxpQkFBTyxFQUFFO0FBQ1BDLHFCQUFTLGtDQUFPUixHQUFHLENBQUNTLElBQUosRUFBUDtBQUFtQmIsZ0JBQUUsRUFBRUksR0FBRyxDQUFDSjtBQUEzQixjQURGO0FBRVBjLHVCQUFXLEVBQUUsSUFGTjtBQUdQQyxtQkFBTyxFQUFFO0FBSEY7QUFGRixTQUFELENBQVI7QUFRRCxPQVRELE1BU087QUFDTGQsZ0JBQVEsQ0FBQztBQUNQTyxjQUFJLEVBQUVDLHNEQUFLLENBQUNDLGFBREw7QUFFUEMsaUJBQU8sRUFBRTtBQUNQRyx1QkFBVyxFQUFFLEtBRE47QUFFUEMsbUJBQU8sRUFBRTtBQUZGO0FBRkYsU0FBRCxDQUFSO0FBT0Q7QUFDRixLQXRCSDtBQXVCRCxHQXhCMkI7QUFBQSxDQUFyQjtBQTBCQSxJQUFNQyxZQUFZLEdBQUcs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RjtBQUdBWixnQkFBUSxDQUFDO0FBQ1BPLGNBQUksRUFBRUMsc0RBQUssQ0FBQzJFLHVCQURMO0FBRVB6RSxpQkFBTyxFQUFFd0U7QUFGRixTQUFELENBQVI7QUFJRCxPQVREO0FBVUQsS0F4Qkg7QUF5QkQsR0ExQm9DO0FBQUEsQ0FBOUI7QUE0QkEsSUFBTUUsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixDQUFDckYsRUFBRDtBQUFBLFNBQVEsVUFBQ0MsUUFBRCxFQUFjO0FBQ3hEQyxnREFBRSxDQUFDQyxVQUFILENBQWMsU0FBZCxFQUNHQyxHQURILENBQ09KLEVBRFAsRUFFR3NGLFVBRkgsQ0FFYyxVQUFDbEYsR0FBRCxFQUFTO0FBQ25CSCxjQUFRLENBQUM7QUFDUE8sWUFBSSxFQUFFQyxzREFBSyxDQUFDOEUsb0JBREw7QUFFUDVFLGVBQU8sRUFBRTtBQUNQeUQsNkJBQW1CLEVBQUVoRSxHQUFHLENBQUNTLElBQUosR0FBV3VELG1CQUR6QjtBQUVQb0IsaUJBQU8sRUFBRXBGLEdBQUcsQ0FBQ1MsSUFBSixHQUFXcUQ7QUFGYjtBQUZGLE9BQUQsQ0FBUjtBQU9ELEtBVkg7QUFXRCxHQVptQztBQUFBLENBQTdCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NoYXJhY3Rlci9uZXcuOGQ4YTY1NzQ4MGU1YTZkM2Q0OTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHR5cGVzIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBtZXNzYWdlIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgZGIsIGF1dGgsIHN0b3JhZ2UgfSBmcm9tIFwiLi4vZmJDb25maWdcIjtcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q2hhcmFjdGVyID0gKGlkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkYi5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc1wiKVxyXG4gICAgLmRvYyhpZClcclxuICAgIC5nZXQoKVxyXG4gICAgLnRoZW4oKGRvYykgPT4ge1xyXG4gICAgICBpZiAoZG9jLmV4aXN0cykge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IHR5cGVzLkdFVF9DSEFSQUNURVIsXHJcbiAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgIGNoYXJhY3RlcjogeyAuLi5kb2MuZGF0YSgpLCBpZDogZG9jLmlkIH0sXHJcbiAgICAgICAgICAgIGNoYXJhRXhpc3RzOiB0cnVlLFxyXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogdHlwZXMuR0VUX0NIQVJBQ1RFUixcclxuICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgY2hhcmFFeGlzdHM6IGZhbHNlLFxyXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZENoYXJhY3RlciA9IChkYXRhKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkaXNwYXRjaCh7IHR5cGU6IHR5cGVzLkFERF9DSEFSQUNURVIsIHBheWxvYWQ6IHsgbG9hZGluZzogdHJ1ZSB9IH0pO1xyXG5cclxuICBkYi5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc1wiKVxyXG4gICAgLmFkZCh7XHJcbiAgICAgIC4uLmRhdGEsXHJcbiAgICAgIGltYWdlOiB1cmwsXHJcbiAgICAgIGNyZWF0ZWRBdDogZmlyZWJhc2UuZmlyZXN0b3JlLkZpZWxkVmFsdWUuc2VydmVyVGltZXN0YW1wKCksXHJcbiAgICAgIGxpa2VzQ291bnQ6IDAsXHJcbiAgICAgIGxpa2VzOiBbXSxcclxuICAgICAgZGlzbGlrZXM6IFtdLFxyXG4gICAgfSlcclxuICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgY29uc3QgaW1hZ2VOYW1lID0gYCR7cmVzLmlkfSR7XCJfXCJ9JHtkYXRhLmZpcnN0bmFtZS50b0xvd2VyQ2FzZSgpfSR7XHJcbiAgICAgICAgZGF0YS5sYXN0bmFtZSAmJiBcIl9cIlxyXG4gICAgICB9JHtkYXRhLmxhc3RuYW1lICYmIGRhdGEubGFzdG5hbWUudG9Mb3dlckNhc2UoKX1gO1xyXG4gICAgICBpZiAodHlwZW9mIGRhdGEuaW1hZ2UgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICBzdG9yYWdlXHJcbiAgICAgICAgICAucmVmKGAke2F1dGguY3VycmVudFVzZXIudWlkfS8ke2ltYWdlTmFtZX1gKVxyXG4gICAgICAgICAgLnB1dChkYXRhLmltYWdlKVxyXG4gICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gc3RvcmFnZVxyXG4gICAgICAgICAgICAgIC5yZWYoYXV0aC5jdXJyZW50VXNlci51aWQpXHJcbiAgICAgICAgICAgICAgLmNoaWxkKGltYWdlTmFtZSlcclxuICAgICAgICAgICAgICAuZ2V0RG93bmxvYWRVUkwoKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbigodXJsKSA9PiB7XHJcbiAgICAgICAgICAgIGRiLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzXCIpLmRvYyhyZXMuaWQpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIGlmICh0eXBlb2YgZGF0YS5pbWFnZSA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgc3RvcmFnZVxyXG4gICAgICAucmVmKGAke2F1dGguY3VycmVudFVzZXIudWlkfS8ke2ltYWdlTmFtZX1gKVxyXG4gICAgICAucHV0KGRhdGEuaW1hZ2UpXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICByZXR1cm4gc3RvcmFnZVxyXG4gICAgICAgICAgLnJlZihhdXRoLmN1cnJlbnRVc2VyLnVpZClcclxuICAgICAgICAgIC5jaGlsZChpbWFnZU5hbWUpXHJcbiAgICAgICAgICAuZ2V0RG93bmxvYWRVUkwoKTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKHVybCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBkYi5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc1wiKS5hZGQoe1xyXG4gICAgICAgICAgLi4uZGF0YSxcclxuICAgICAgICAgIGltYWdlOiB1cmwsXHJcbiAgICAgICAgICBjcmVhdGVkQXQ6IGZpcmViYXNlLmZpcmVzdG9yZS5GaWVsZFZhbHVlLnNlcnZlclRpbWVzdGFtcCgpLFxyXG4gICAgICAgICAgbGlrZXNDb3VudDogMCxcclxuICAgICAgICAgIGxpa2VzOiBbXSxcclxuICAgICAgICAgIGRpc2xpa2VzOiBbXSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhcIkNoYXJhY3RlciBhZGRlZCBzdWNjZXNzZnVsbHlcIik7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogdHlwZXMuQUREX0NIQVJBQ1RFUixcclxuICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJDaGFyYWN0ZXIgYWRkZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICAgIGNoYXJhY3RlcklkOiByZXMuaWQsXHJcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBtZXNzYWdlLmVycm9yKGVyci5tZXNzYWdlKTtcclxuICAgICAgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGRiLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzXCIpXHJcbiAgICAgIC5hZGQoe1xyXG4gICAgICAgIC4uLmRhdGEsXHJcbiAgICAgICAgY3JlYXRlZEF0OiBmaXJlYmFzZS5maXJlc3RvcmUuRmllbGRWYWx1ZS5zZXJ2ZXJUaW1lc3RhbXAoKSxcclxuICAgICAgICBsaWtlc0NvdW50OiAwLFxyXG4gICAgICAgIGxpa2VzOiBbXSxcclxuICAgICAgICBkaXNsaWtlczogW10sXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoXCJDaGFyYWN0ZXIgYWRkZWQgc3VjY2Vzc2Z1bGx5XCIpO1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IHR5cGVzLkFERF9DSEFSQUNURVIsXHJcbiAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiQ2hhcmFjdGVyIGFkZGVkIHN1Y2Nlc3NmdWxseVwiLFxyXG4gICAgICAgICAgICBjaGFyYWN0ZXJJZDogcmVzLmlkLFxyXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihlcnIubWVzc2FnZSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBlZGl0Q2hhcmFjdGVyID0gKGRhdGEsIGlkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkaXNwYXRjaCh7IHR5cGU6IHR5cGVzLkVESVRfQ0hBUkFDVEVSLCBwYXlsb2FkOiB7IGxvYWRpbmdDaGFyYWN0ZXI6IHRydWUgfSB9KTtcclxuICBjb25zdCBpbWFnZU5hbWUgPSBgJHtkYXRhLmZpcnN0bmFtZS50b0xvd2VyQ2FzZSgpfSR7ZGF0YS5sYXN0bmFtZSAmJiBcIl9cIn0ke1xyXG4gICAgZGF0YS5sYXN0bmFtZSAmJiBkYXRhLmxhc3RuYW1lLnRvTG93ZXJDYXNlKClcclxuICB9YDtcclxuICBpZiAoZGF0YS5pbWFnZSAmJiB0eXBlb2YgZGF0YS5pbWFnZSA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgc3RvcmFnZVxyXG4gICAgICAucmVmKGAke2F1dGguY3VycmVudFVzZXIudWlkfS8ke2ltYWdlTmFtZX1gKVxyXG4gICAgICAucHV0KGRhdGEuaW1hZ2UpXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICByZXR1cm4gc3RvcmFnZVxyXG4gICAgICAgICAgLnJlZihhdXRoLmN1cnJlbnRVc2VyLnVpZClcclxuICAgICAgICAgIC5jaGlsZChpbWFnZU5hbWUpXHJcbiAgICAgICAgICAuZ2V0RG93bmxvYWRVUkwoKTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKHVybCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBkYlxyXG4gICAgICAgICAgLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzXCIpXHJcbiAgICAgICAgICAuZG9jKGlkKVxyXG4gICAgICAgICAgLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgIC4uLmRhdGEsXHJcbiAgICAgICAgICAgIGltYWdlOiB1cmwsXHJcbiAgICAgICAgICAgIHJlbGF0aXZlc0FycjogZGF0YS5yZWxhdGl2ZXMubWFwKChjKSA9PiBjLmNoYXJhY3Rlcl9pZCksXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IHR5cGVzLkVESVRfQ0hBUkFDVEVSLFxyXG4gICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkNoYXJhY3RlciBlZGl0ZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICAgIGxvYWRpbmdDaGFyYWN0ZXI6IGZhbHNlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBtZXNzYWdlLmVycm9yKGVyci5tZXNzYWdlKTtcclxuICAgICAgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGRiLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzXCIpXHJcbiAgICAgIC5kb2MoaWQpXHJcbiAgICAgIC51cGRhdGUoe1xyXG4gICAgICAgIC4uLmRhdGEsXHJcbiAgICAgICAgcmVsYXRpdmVzQXJyOiBkYXRhLnJlbGF0aXZlcy5tYXAoKGMpID0+IGMuY2hhcmFjdGVyX2lkKSxcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IHR5cGVzLkVESVRfQ0hBUkFDVEVSLFxyXG4gICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkNoYXJhY3RlciBlZGl0ZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICAgIGxvYWRpbmdDaGFyYWN0ZXI6IGZhbHNlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBtZXNzYWdlLmVycm9yKGVyci5tZXNzYWdlKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlbGV0ZUNoYXJhY3RlciA9IChpZCwgZmlyc3RuYW1lLCBsYXN0bmFtZSkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGlzcGF0Y2goeyB0eXBlOiB0eXBlcy5ERUxFVEVfQ0hBUkFDVEVSLCBwYXlsb2FkOiB7IGxvYWRpbmc6IHRydWUgfSB9KTtcclxuICBjb25zdCBpbWFnZU5hbWUgPSBgJHtmaXJzdG5hbWUudG9Mb3dlckNhc2UoKX0ke2xhc3RuYW1lICYmIFwiX1wifSR7XHJcbiAgICBsYXN0bmFtZSAmJiBsYXN0bmFtZS50b0xvd2VyQ2FzZSgpXHJcbiAgfWA7XHJcbiAgY29uc3QgYmF0Y2ggPSBkYi5iYXRjaCgpO1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzXCIpXHJcbiAgICAuZG9jKGlkKVxyXG4gICAgLmRlbGV0ZSgpXHJcbiAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgIHJldHVybiBzdG9yYWdlLnJlZihgJHthdXRoLmN1cnJlbnRVc2VyLnVpZH0vJHtpbWFnZU5hbWV9YCkuZGVsZXRlKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICBkYi5jb2xsZWN0aW9uKFwiY2hhcHRlcnNcIilcclxuICAgICAgICAud2hlcmUoXCJjaGFyYWN0ZXJzXCIsIFwiYXJyYXktY29udGFpbnNcIiwgaWQpXHJcbiAgICAgICAgLmdldCgpXHJcbiAgICAgICAgLnRoZW4oKGRvY3MpID0+IHtcclxuICAgICAgICAgIGRvY3MuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICAgICAgICAgIGJhdGNoLnVwZGF0ZShkYi5jb2xsZWN0aW9uKFwiY2hhcHRlcnNcIikuZG9jKGRvYy5pZCksIHtcclxuICAgICAgICAgICAgICBjaGFyYWN0ZXJzOiBkb2MuZGF0YSgpLmNoYXJhY3RlcnMuZmlsdGVyKChjKSA9PiBjICE9PSBpZCksXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKVxyXG4gICAgICAgICAgICAud2hlcmUoXCJzZWNvbmRhcnlBcnJcIiwgXCJhcnJheS1jb250YWluc1wiLCBpZClcclxuICAgICAgICAgICAgLmdldCgpXHJcbiAgICAgICAgICAgIC50aGVuKChzdG9yaWVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgc3Rvcmllcy5mb3JFYWNoKChzdG9yeSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYmF0Y2gudXBkYXRlKGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpLmRvYyhzdG9yeS5pZCksIHtcclxuICAgICAgICAgICAgICAgICAgbWFpbkNoYXJhY3RlcnM6IHN0b3J5XHJcbiAgICAgICAgICAgICAgICAgICAgLmRhdGEoKVxyXG4gICAgICAgICAgICAgICAgICAgIC5tYWluQ2hhcmFjdGVycy5maWx0ZXIoKGMpID0+IGMgIT09IGlkKSxcclxuICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5QXJyOiBzdG9yeVxyXG4gICAgICAgICAgICAgICAgICAgIC5kYXRhKClcclxuICAgICAgICAgICAgICAgICAgICAuc2Vjb25kYXJ5QXJyLmZpbHRlcigoYykgPT4gYyAhPT0gaWQpLFxyXG4gICAgICAgICAgICAgICAgICBzZWNvbmRhcnlDaGFyYWN0ZXJzOiBzdG9yeVxyXG4gICAgICAgICAgICAgICAgICAgIC5kYXRhKClcclxuICAgICAgICAgICAgICAgICAgICAuc2Vjb25kYXJ5Q2hhcmFjdGVycy5maWx0ZXIoKGMpID0+IGMuaWQgIT09IGlkKSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgZGIuY29sbGVjdGlvbihcImNoYXJhY3RlcnNcIilcclxuICAgICAgICAgICAgICAgIC53aGVyZShcInJlbGF0aXZlc0FyclwiLCBcImFycmF5LWNvbnRhaW5zXCIsIGlkKVxyXG4gICAgICAgICAgICAgICAgLmdldCgpXHJcbiAgICAgICAgICAgICAgICAudGhlbigoY2hhcmFjdGVycykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBjaGFyYWN0ZXJzLmZvckVhY2goKGNoYXIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBiYXRjaC51cGRhdGUoZGIuY29sbGVjdGlvbihcImNoYXJhY3RlcnNcIikuZG9jKGNoYXIuaWQpLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZWxhdGl2ZXNBcnI6IGNoYXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmRhdGEoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVsYXRpdmVzQXJyLmZpbHRlcigoYykgPT4gYyAhPT0gaWQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgcmVsYXRpdmVzOiBjaGFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5kYXRhKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbGF0aXZlcy5maWx0ZXIoKGMpID0+IGMuY2hhcmFjdGVyX2lkICE9PSBpZCksXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgYmF0Y2guY29tbWl0KCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogdHlwZXMuREVMRVRFX0NIQVJBQ1RFUixcclxuICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJDaGFyYWN0ZXIgZGVsZXRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFVzZXJDaGFyYWN0ZXJzID0gKHVzZXJJZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGIuY29sbGVjdGlvbihcImNoYXJhY3RlcnNcIilcclxuICAgIC53aGVyZShcImF1dGhvcklkXCIsIFwiPT1cIiwgdXNlcklkKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigoZG9jcykgPT4ge1xyXG4gICAgICBsZXQgaXRlbXMgPSBbXTtcclxuICAgICAgZG9jcy5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgICAgICBpdGVtcyA9IFsuLi5pdGVtcywgeyBpZDogZG9jLmlkLCAuLi5kb2MuZGF0YSgpIH1dO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGl0ZW1zO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChpdGVtcykgPT4ge1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IHR5cGVzLkdFVF9VU0VSX0NIQVJBQ1RFUlMsIHBheWxvYWQ6IGl0ZW1zIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0RmF2b3JpdGVDaGFyYWN0ZXJzID0gKCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGIuY29sbGVjdGlvbihcImNoYXJhY3RlcnNMaWtlc1wiKVxyXG4gICAgLndoZXJlKFwic2VuZGVySWRcIiwgXCI9PVwiLCBhdXRoLmN1cnJlbnRVc2VyLnVpZClcclxuICAgIC5nZXQoKVxyXG4gICAgLnRoZW4oKGRvY3MpID0+IHtcclxuICAgICAgbGV0IGZhdkFyciA9IFtdO1xyXG4gICAgICBkb2NzLmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgICAgIGZhdkFyciA9IFsuLi5mYXZBcnIsIGRvYy5kYXRhKCkuY2hhcmFjdGVySWRdO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGZhdkFycjtcclxuICAgIH0pXHJcbiAgICAudGhlbigodXNlcnMpID0+IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gdXNlcnMubWFwKCh1c2VyKSA9PlxyXG4gICAgICAgIGRiLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzXCIpLmRvYyh1c2VyKS5nZXQoKVxyXG4gICAgICApO1xyXG4gICAgICBQcm9taXNlLmFsbChyZXN1bHQpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGxldCBmYXZVc2VycyA9IFtdO1xyXG4gICAgICAgIHJlcy5mb3JFYWNoKFxyXG4gICAgICAgICAgKGRvYykgPT4gKGZhdlVzZXJzID0gWy4uLmZhdlVzZXJzLCB7IGlkOiBkb2MuaWQsIC4uLmRvYy5kYXRhKCkgfV0pXHJcbiAgICAgICAgKTtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiB0eXBlcy5HRVRfRkFWT1JJVEVfQ0hBUkFDVEVSUyxcclxuICAgICAgICAgIHBheWxvYWQ6IGZhdlVzZXJzLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldENoYXJhY3RlcnNJblN0b3J5ID0gKGlkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKVxyXG4gICAgLmRvYyhpZClcclxuICAgIC5vblNuYXBzaG90KChkb2MpID0+IHtcclxuICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IHR5cGVzLkdFVF9TVE9SWV9DSEFSQUNURVJTLFxyXG4gICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgIHNlY29uZGFyeUNoYXJhY3RlcnM6IGRvYy5kYXRhKCkuc2Vjb25kYXJ5Q2hhcmFjdGVycyxcclxuICAgICAgICAgIG1haW5BcnI6IGRvYy5kYXRhKCkubWFpbkNoYXJhY3RlcnMsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==