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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvYWN0aW9ucy9jaGFyYWN0ZXJzQWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJnZXRDaGFyYWN0ZXIiLCJpZCIsImRpc3BhdGNoIiwiZGIiLCJjb2xsZWN0aW9uIiwiZG9jIiwiZ2V0IiwidGhlbiIsImV4aXN0cyIsInR5cGUiLCJ0eXBlcyIsIkdFVF9DSEFSQUNURVIiLCJwYXlsb2FkIiwiY2hhcmFjdGVyIiwiZGF0YSIsImNoYXJhRXhpc3RzIiwibG9hZGluZyIsImFkZENoYXJhY3RlciIsIkFERF9DSEFSQUNURVIiLCJhZGQiLCJjcmVhdGVkQXQiLCJmaXJlYmFzZSIsImZpcmVzdG9yZSIsIkZpZWxkVmFsdWUiLCJzZXJ2ZXJUaW1lc3RhbXAiLCJsaWtlc0NvdW50IiwibGlrZXMiLCJkaXNsaWtlcyIsInJlcyIsImltYWdlTmFtZSIsImZpcnN0bmFtZSIsInRvTG93ZXJDYXNlIiwibGFzdG5hbWUiLCJpbWFnZSIsInN0b3JhZ2UiLCJyZWYiLCJhdXRoIiwiY3VycmVudFVzZXIiLCJ1aWQiLCJwdXQiLCJjaGlsZCIsImdldERvd25sb2FkVVJMIiwidXJsIiwidXBkYXRlIiwibWVzc2FnZSIsInN1Y2Nlc3MiLCJjaGFyYWN0ZXJJZCIsImVyciIsImVycm9yIiwiZWRpdENoYXJhY3RlciIsIkVESVRfQ0hBUkFDVEVSIiwibG9hZGluZ0NoYXJhY3RlciIsInJlbGF0aXZlc0FyciIsInJlbGF0aXZlcyIsIm1hcCIsImMiLCJjaGFyYWN0ZXJfaWQiLCJkZWxldGVDaGFyYWN0ZXIiLCJERUxFVEVfQ0hBUkFDVEVSIiwiYmF0Y2giLCJ3aGVyZSIsImRvY3MiLCJmb3JFYWNoIiwiY2hhcmFjdGVycyIsImZpbHRlciIsInN0b3JpZXMiLCJzdG9yeSIsIm1haW5DaGFyYWN0ZXJzIiwic2Vjb25kYXJ5QXJyIiwic2Vjb25kYXJ5Q2hhcmFjdGVycyIsImNoYXIiLCJjb21taXQiLCJkZWxldGVkIiwiZ2V0VXNlckNoYXJhY3RlcnMiLCJ1c2VySWQiLCJpdGVtcyIsIkdFVF9VU0VSX0NIQVJBQ1RFUlMiLCJnZXRGYXZvcml0ZUNoYXJhY3RlcnMiLCJmYXZBcnIiLCJ1c2VycyIsInJlc3VsdCIsInVzZXIiLCJQcm9taXNlIiwiYWxsIiwiZmF2VXNlcnMiLCJHRVRfRkFWT1JJVEVfQ0hBUkFDVEVSUyIsImdldENoYXJhY3RlcnNJblN0b3J5Iiwib25TbmFwc2hvdCIsIkdFVF9TVE9SWV9DSEFSQUNURVJTIiwibWFpbkFyciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEVBQUQ7QUFBQSxTQUFRLFVBQUNDLFFBQUQsRUFBYztBQUNoREMsZ0RBQUUsQ0FBQ0MsVUFBSCxDQUFjLFlBQWQsRUFDR0MsR0FESCxDQUNPSixFQURQLEVBRUdLLEdBRkgsR0FHR0MsSUFISCxDQUdRLFVBQUNGLEdBQUQsRUFBUztBQUNiLFVBQUlBLEdBQUcsQ0FBQ0csTUFBUixFQUFnQjtBQUNkTixnQkFBUSxDQUFDO0FBQ1BPLGNBQUksRUFBRUMsc0RBQUssQ0FBQ0MsYUFETDtBQUVQQyxpQkFBTyxFQUFFO0FBQ1BDLHFCQUFTLGtDQUFPUixHQUFHLENBQUNTLElBQUosRUFBUDtBQUFtQmIsZ0JBQUUsRUFBRUksR0FBRyxDQUFDSjtBQUEzQixjQURGO0FBRVBjLHVCQUFXLEVBQUUsSUFGTjtBQUdQQyxtQkFBTyxFQUFFO0FBSEY7QUFGRixTQUFELENBQVI7QUFRRCxPQVRELE1BU087QUFDTGQsZ0JBQVEsQ0FBQztBQUNQTyxjQUFJLEVBQUVDLHNEQUFLLENBQUNDLGFBREw7QUFFUEMsaUJBQU8sRUFBRTtBQUNQRyx1QkFBVyxFQUFFLEtBRE47QUFFUEMsbUJBQU8sRUFBRTtBQUZGO0FBRkYsU0FBRCxDQUFSO0FBT0Q7QUFDRixLQXRCSDtBQXVCRCxHQXhCMkI7QUFBQSxDQUFyQjtBQTBCQSxJQUFNQyxZQUFZLEdBQUcs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QSxRQUFQO0FBQW1CbkYsY0FBRSxFQUFFSSxHQUFHLENBQUNKO0FBQTNCLGFBQWtDSSxHQUFHLENBQUNTLElBQUosRUFBbEMsR0FBbEI7QUFBQSxTQURGO0FBR0FaLGdCQUFRLENBQUM7QUFDUE8sY0FBSSxFQUFFQyxzREFBSyxDQUFDMkUsdUJBREw7QUFFUHpFLGlCQUFPLEVBQUV3RTtBQUZGLFNBQUQsQ0FBUjtBQUlELE9BVEQ7QUFVRCxLQXhCSDtBQXlCRCxHQTFCb0M7QUFBQSxDQUE5QjtBQTRCQSxJQUFNRSxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLENBQUNyRixFQUFEO0FBQUEsU0FBUSxVQUFDQyxRQUFELEVBQWM7QUFDeERDLGdEQUFFLENBQUNDLFVBQUgsQ0FBYyxTQUFkLEVBQ0dDLEdBREgsQ0FDT0osRUFEUCxFQUVHc0YsVUFGSCxDQUVjLFVBQUNsRixHQUFELEVBQVM7QUFDbkJILGNBQVEsQ0FBQztBQUNQTyxZQUFJLEVBQUVDLHNEQUFLLENBQUM4RSxvQkFETDtBQUVQNUUsZUFBTyxFQUFFO0FBQ1B5RCw2QkFBbUIsRUFBRWhFLEdBQUcsQ0FBQ1MsSUFBSixHQUFXdUQsbUJBRHpCO0FBRVBvQixpQkFBTyxFQUFFcEYsR0FBRyxDQUFDUyxJQUFKLEdBQVdxRDtBQUZiO0FBRkYsT0FBRCxDQUFSO0FBT0QsS0FWSDtBQVdELEdBWm1DO0FBQUEsQ0FBN0IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2hhcmFjdGVyL25ldy5lYTUwZjlhMzYwYzVmMDhjMmNhOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdHlwZXMgfSBmcm9tIFwiLi4vLi4vdXRpbHMvY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IG1lc3NhZ2UgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyBkYiwgYXV0aCwgc3RvcmFnZSB9IGZyb20gXCIuLi9mYkNvbmZpZ1wiO1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlL2FwcFwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDaGFyYWN0ZXIgPSAoaWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzXCIpXHJcbiAgICAuZG9jKGlkKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigoZG9jKSA9PiB7XHJcbiAgICAgIGlmIChkb2MuZXhpc3RzKSB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogdHlwZXMuR0VUX0NIQVJBQ1RFUixcclxuICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgY2hhcmFjdGVyOiB7IC4uLmRvYy5kYXRhKCksIGlkOiBkb2MuaWQgfSxcclxuICAgICAgICAgICAgY2hhcmFFeGlzdHM6IHRydWUsXHJcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiB0eXBlcy5HRVRfQ0hBUkFDVEVSLFxyXG4gICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICBjaGFyYUV4aXN0czogZmFsc2UsXHJcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYWRkQ2hhcmFjdGVyID0gKGRhdGEpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRpc3BhdGNoKHsgdHlwZTogdHlwZXMuQUREX0NIQVJBQ1RFUiwgcGF5bG9hZDogeyBsb2FkaW5nOiB0cnVlIH0gfSk7XHJcblxyXG4gIGRiLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzXCIpXHJcbiAgICAuYWRkKHtcclxuICAgICAgLi4uZGF0YSxcclxuICAgICAgY3JlYXRlZEF0OiBmaXJlYmFzZS5maXJlc3RvcmUuRmllbGRWYWx1ZS5zZXJ2ZXJUaW1lc3RhbXAoKSxcclxuICAgICAgbGlrZXNDb3VudDogMCxcclxuICAgICAgbGlrZXM6IFtdLFxyXG4gICAgICBkaXNsaWtlczogW10sXHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBjb25zdCBpbWFnZU5hbWUgPSBgJHtyZXMuaWR9JHtcIl9cIn0ke2RhdGEuZmlyc3RuYW1lLnRvTG93ZXJDYXNlKCl9JHtcclxuICAgICAgICBkYXRhLmxhc3RuYW1lICYmIFwiX1wiXHJcbiAgICAgIH0ke2RhdGEubGFzdG5hbWUgJiYgZGF0YS5sYXN0bmFtZS50b0xvd2VyQ2FzZSgpfWA7XHJcbiAgICAgIGlmICh0eXBlb2YgZGF0YS5pbWFnZSA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgIHN0b3JhZ2VcclxuICAgICAgICAgIC5yZWYoYCR7YXV0aC5jdXJyZW50VXNlci51aWR9LyR7aW1hZ2VOYW1lfWApXHJcbiAgICAgICAgICAucHV0KGRhdGEuaW1hZ2UpXHJcbiAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdG9yYWdlXHJcbiAgICAgICAgICAgICAgLnJlZihhdXRoLmN1cnJlbnRVc2VyLnVpZClcclxuICAgICAgICAgICAgICAuY2hpbGQoaW1hZ2VOYW1lKVxyXG4gICAgICAgICAgICAgIC5nZXREb3dubG9hZFVSTCgpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKCh1cmwpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGRiXHJcbiAgICAgICAgICAgICAgLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzXCIpXHJcbiAgICAgICAgICAgICAgLmRvYyhyZXMuaWQpXHJcbiAgICAgICAgICAgICAgLnVwZGF0ZSh7IGltYWdlOiB1cmwgfSk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoXCJDaGFyYWN0ZXIgYWRkZWQgc3VjY2Vzc2Z1bGx5XCIpO1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgdHlwZTogdHlwZXMuQUREX0NIQVJBQ1RFUixcclxuICAgICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkNoYXJhY3RlciBhZGRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgICAgICAgIGNoYXJhY3RlcklkOiByZXMuaWQsXHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhcIkNoYXJhY3RlciBhZGRlZCBzdWNjZXNzZnVsbHlcIik7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogdHlwZXMuQUREX0NIQVJBQ1RFUixcclxuICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJDaGFyYWN0ZXIgYWRkZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICAgIGNoYXJhY3RlcklkOiByZXMuaWQsXHJcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIG1lc3NhZ2UuZXJyb3IoZXJyLm1lc3NhZ2UpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZWRpdENoYXJhY3RlciA9IChkYXRhLCBpZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGlzcGF0Y2goeyB0eXBlOiB0eXBlcy5FRElUX0NIQVJBQ1RFUiwgcGF5bG9hZDogeyBsb2FkaW5nQ2hhcmFjdGVyOiB0cnVlIH0gfSk7XHJcblxyXG4gIGNvbnN0IGltYWdlTmFtZSA9IGAke2lkfSR7XCJfXCJ9JHtkYXRhLmZpcnN0bmFtZS50b0xvd2VyQ2FzZSgpfSR7XHJcbiAgICBkYXRhLmxhc3RuYW1lICYmIFwiX1wiXHJcbiAgfSR7ZGF0YS5sYXN0bmFtZSAmJiBkYXRhLmxhc3RuYW1lLnRvTG93ZXJDYXNlKCl9YDtcclxuXHJcbiAgaWYgKGRhdGEuaW1hZ2UgJiYgdHlwZW9mIGRhdGEuaW1hZ2UgPT09IFwib2JqZWN0XCIpIHtcclxuICAgIHN0b3JhZ2VcclxuICAgICAgLnJlZihgJHthdXRoLmN1cnJlbnRVc2VyLnVpZH0vJHtpbWFnZU5hbWV9YClcclxuICAgICAgLnB1dChkYXRhLmltYWdlKVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHN0b3JhZ2VcclxuICAgICAgICAgIC5yZWYoYXV0aC5jdXJyZW50VXNlci51aWQpXHJcbiAgICAgICAgICAuY2hpbGQoaW1hZ2VOYW1lKVxyXG4gICAgICAgICAgLmdldERvd25sb2FkVVJMKCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKCh1cmwpID0+IHtcclxuICAgICAgICByZXR1cm4gZGJcclxuICAgICAgICAgIC5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc1wiKVxyXG4gICAgICAgICAgLmRvYyhpZClcclxuICAgICAgICAgIC51cGRhdGUoe1xyXG4gICAgICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgICAgICBpbWFnZTogdXJsLFxyXG4gICAgICAgICAgICByZWxhdGl2ZXNBcnI6IGRhdGEucmVsYXRpdmVzLm1hcCgoYykgPT4gYy5jaGFyYWN0ZXJfaWQpLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiB0eXBlcy5FRElUX0NIQVJBQ1RFUixcclxuICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJDaGFyYWN0ZXIgZWRpdGVkIHN1Y2Nlc3NmdWxseVwiLFxyXG4gICAgICAgICAgICBsb2FkaW5nQ2hhcmFjdGVyOiBmYWxzZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihlcnIubWVzc2FnZSk7XHJcbiAgICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBkYi5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc1wiKVxyXG4gICAgICAuZG9jKGlkKVxyXG4gICAgICAudXBkYXRlKHtcclxuICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgIHJlbGF0aXZlc0FycjogZGF0YS5yZWxhdGl2ZXMubWFwKChjKSA9PiBjLmNoYXJhY3Rlcl9pZCksXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiB0eXBlcy5FRElUX0NIQVJBQ1RFUixcclxuICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJDaGFyYWN0ZXIgZWRpdGVkIHN1Y2Nlc3NmdWxseVwiLFxyXG4gICAgICAgICAgICBsb2FkaW5nQ2hhcmFjdGVyOiBmYWxzZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihlcnIubWVzc2FnZSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkZWxldGVDaGFyYWN0ZXIgPSAoaWQsIGZpcnN0bmFtZSwgbGFzdG5hbWUpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRpc3BhdGNoKHsgdHlwZTogdHlwZXMuREVMRVRFX0NIQVJBQ1RFUiwgcGF5bG9hZDogeyBsb2FkaW5nOiB0cnVlIH0gfSk7XHJcbiAgY29uc3QgaW1hZ2VOYW1lID0gYCR7aWR9JHtcIl9cIn0ke2ZpcnN0bmFtZS50b0xvd2VyQ2FzZSgpfSR7bGFzdG5hbWUgJiYgXCJfXCJ9JHtcclxuICAgIGxhc3RuYW1lICYmIGxhc3RuYW1lLnRvTG93ZXJDYXNlKClcclxuICB9YDtcclxuICBjb25zdCBiYXRjaCA9IGRiLmJhdGNoKCk7XHJcbiAgZGIuY29sbGVjdGlvbihcImNoYXJhY3RlcnNcIilcclxuICAgIC5kb2MoaWQpXHJcbiAgICAuZGVsZXRlKClcclxuICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgcmV0dXJuIHN0b3JhZ2UucmVmKGAke2F1dGguY3VycmVudFVzZXIudWlkfS8ke2ltYWdlTmFtZX1gKS5kZWxldGUoKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgIGRiLmNvbGxlY3Rpb24oXCJjaGFwdGVyc1wiKVxyXG4gICAgICAgIC53aGVyZShcImNoYXJhY3RlcnNcIiwgXCJhcnJheS1jb250YWluc1wiLCBpZClcclxuICAgICAgICAuZ2V0KClcclxuICAgICAgICAudGhlbigoZG9jcykgPT4ge1xyXG4gICAgICAgICAgZG9jcy5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgICAgICAgICAgYmF0Y2gudXBkYXRlKGRiLmNvbGxlY3Rpb24oXCJjaGFwdGVyc1wiKS5kb2MoZG9jLmlkKSwge1xyXG4gICAgICAgICAgICAgIGNoYXJhY3RlcnM6IGRvYy5kYXRhKCkuY2hhcmFjdGVycy5maWx0ZXIoKGMpID0+IGMgIT09IGlkKSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgIGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpXHJcbiAgICAgICAgICAgIC53aGVyZShcInNlY29uZGFyeUFyclwiLCBcImFycmF5LWNvbnRhaW5zXCIsIGlkKVxyXG4gICAgICAgICAgICAuZ2V0KClcclxuICAgICAgICAgICAgLnRoZW4oKHN0b3JpZXMpID0+IHtcclxuICAgICAgICAgICAgICBzdG9yaWVzLmZvckVhY2goKHN0b3J5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBiYXRjaC51cGRhdGUoZGIuY29sbGVjdGlvbihcInN0b3JpZXNcIikuZG9jKHN0b3J5LmlkKSwge1xyXG4gICAgICAgICAgICAgICAgICBtYWluQ2hhcmFjdGVyczogc3RvcnlcclxuICAgICAgICAgICAgICAgICAgICAuZGF0YSgpXHJcbiAgICAgICAgICAgICAgICAgICAgLm1haW5DaGFyYWN0ZXJzLmZpbHRlcigoYykgPT4gYyAhPT0gaWQpLFxyXG4gICAgICAgICAgICAgICAgICBzZWNvbmRhcnlBcnI6IHN0b3J5XHJcbiAgICAgICAgICAgICAgICAgICAgLmRhdGEoKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zZWNvbmRhcnlBcnIuZmlsdGVyKChjKSA9PiBjICE9PSBpZCksXHJcbiAgICAgICAgICAgICAgICAgIHNlY29uZGFyeUNoYXJhY3RlcnM6IHN0b3J5XHJcbiAgICAgICAgICAgICAgICAgICAgLmRhdGEoKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zZWNvbmRhcnlDaGFyYWN0ZXJzLmZpbHRlcigoYykgPT4gYy5pZCAhPT0gaWQpLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICBkYi5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc1wiKVxyXG4gICAgICAgICAgICAgICAgLndoZXJlKFwicmVsYXRpdmVzQXJyXCIsIFwiYXJyYXktY29udGFpbnNcIiwgaWQpXHJcbiAgICAgICAgICAgICAgICAuZ2V0KClcclxuICAgICAgICAgICAgICAgIC50aGVuKChjaGFyYWN0ZXJzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNoYXJhY3RlcnMuZm9yRWFjaCgoY2hhcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhdGNoLnVwZGF0ZShkYi5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc1wiKS5kb2MoY2hhci5pZCksIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHJlbGF0aXZlc0FycjogY2hhclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZGF0YSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZWxhdGl2ZXNBcnIuZmlsdGVyKChjKSA9PiBjICE9PSBpZCksXHJcbiAgICAgICAgICAgICAgICAgICAgICByZWxhdGl2ZXM6IGNoYXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmRhdGEoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVsYXRpdmVzLmZpbHRlcigoYykgPT4gYy5jaGFyYWN0ZXJfaWQgIT09IGlkKSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICBiYXRjaC5jb21taXQoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlOiB0eXBlcy5ERUxFVEVfQ0hBUkFDVEVSLFxyXG4gICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkNoYXJhY3RlciBkZWxldGVkIHN1Y2Nlc3NmdWxseVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VXNlckNoYXJhY3RlcnMgPSAodXNlcklkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkYi5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc1wiKVxyXG4gICAgLndoZXJlKFwiYXV0aG9ySWRcIiwgXCI9PVwiLCB1c2VySWQpXHJcbiAgICAuZ2V0KClcclxuICAgIC50aGVuKChkb2NzKSA9PiB7XHJcbiAgICAgIGxldCBpdGVtcyA9IFtdO1xyXG4gICAgICBkb2NzLmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgICAgIGl0ZW1zID0gWy4uLml0ZW1zLCB7IGlkOiBkb2MuaWQsIC4uLmRvYy5kYXRhKCkgfV07XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gaXRlbXM7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGl0ZW1zKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogdHlwZXMuR0VUX1VTRVJfQ0hBUkFDVEVSUywgcGF5bG9hZDogaXRlbXMgfSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRGYXZvcml0ZUNoYXJhY3RlcnMgPSAoKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkYi5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc0xpa2VzXCIpXHJcbiAgICAud2hlcmUoXCJzZW5kZXJJZFwiLCBcIj09XCIsIGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigoZG9jcykgPT4ge1xyXG4gICAgICBsZXQgZmF2QXJyID0gW107XHJcbiAgICAgIGRvY3MuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICAgICAgZmF2QXJyID0gWy4uLmZhdkFyciwgZG9jLmRhdGEoKS5jaGFyYWN0ZXJJZF07XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gZmF2QXJyO1xyXG4gICAgfSlcclxuICAgIC50aGVuKCh1c2VycykgPT4ge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSB1c2Vycy5tYXAoKHVzZXIpID0+XHJcbiAgICAgICAgZGIuY29sbGVjdGlvbihcImNoYXJhY3RlcnNcIikuZG9jKHVzZXIpLmdldCgpXHJcbiAgICAgICk7XHJcbiAgICAgIFByb21pc2UuYWxsKHJlc3VsdCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgbGV0IGZhdlVzZXJzID0gW107XHJcbiAgICAgICAgcmVzLmZvckVhY2goXHJcbiAgICAgICAgICAoZG9jKSA9PiAoZmF2VXNlcnMgPSBbLi4uZmF2VXNlcnMsIHsgaWQ6IGRvYy5pZCwgLi4uZG9jLmRhdGEoKSB9XSlcclxuICAgICAgICApO1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IHR5cGVzLkdFVF9GQVZPUklURV9DSEFSQUNURVJTLFxyXG4gICAgICAgICAgcGF5bG9hZDogZmF2VXNlcnMsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q2hhcmFjdGVyc0luU3RvcnkgPSAoaWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpXHJcbiAgICAuZG9jKGlkKVxyXG4gICAgLm9uU25hcHNob3QoKGRvYykgPT4ge1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogdHlwZXMuR0VUX1NUT1JZX0NIQVJBQ1RFUlMsXHJcbiAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgc2Vjb25kYXJ5Q2hhcmFjdGVyczogZG9jLmRhdGEoKS5zZWNvbmRhcnlDaGFyYWN0ZXJzLFxyXG4gICAgICAgICAgbWFpbkFycjogZG9jLmRhdGEoKS5tYWluQ2hhcmFjdGVycyxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9