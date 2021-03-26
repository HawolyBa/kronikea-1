webpackHotUpdate_N_E("pages/character/[id]",{

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
                  charaExists: false
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvYWN0aW9ucy9jaGFyYWN0ZXJzQWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJnZXRDaGFyYWN0ZXIiLCJpZCIsImRpc3BhdGNoIiwiZGIiLCJjb2xsZWN0aW9uIiwiZG9jIiwiZ2V0IiwidGhlbiIsImV4aXN0cyIsInR5cGUiLCJ0eXBlcyIsIkdFVF9DSEFSQUNURVIiLCJwYXlsb2FkIiwiY2hhcmFjdGVyIiwiZGF0YSIsImNoYXJhRXhpc3RzIiwibG9hZGluZyIsImFkZENoYXJhY3RlciIsIkFERF9DSEFSQUNURVIiLCJjaGFyYUlkIiwiYWRkIiwiaW1hZ2UiLCJjcmVhdGVkQXQiLCJmaXJlYmFzZSIsImZpcmVzdG9yZSIsIkZpZWxkVmFsdWUiLCJzZXJ2ZXJUaW1lc3RhbXAiLCJsaWtlc0NvdW50IiwibGlrZXMiLCJkaXNsaWtlcyIsInJlcyIsImltYWdlTmFtZSIsImZpcnN0bmFtZSIsInRvTG93ZXJDYXNlIiwibGFzdG5hbWUiLCJzdG9yYWdlIiwicmVmIiwiYXV0aCIsImN1cnJlbnRVc2VyIiwidWlkIiwicHV0IiwiY2hpbGQiLCJnZXREb3dubG9hZFVSTCIsInVybCIsInVwZGF0ZSIsIm1lc3NhZ2UiLCJzdWNjZXNzIiwiY2hhcmFjdGVySWQiLCJlcnIiLCJlcnJvciIsImVkaXRDaGFyYWN0ZXIiLCJFRElUX0NIQVJBQ1RFUiIsImxvYWRpbmdDaGFyYWN0ZXIiLCJyZWxhdGl2ZXNBcnIiLCJyZWxhdGl2ZXMiLCJtYXAiLCJjIiwiY2hhcmFjdGVyX2lkIiwiZGVsZXRlQ2hhcmFjdGVyIiwiREVMRVRFX0NIQVJBQ1RFUiIsImJhdGNoIiwid2hlcmUiLCJkb2NzIiwiZm9yRWFjaCIsImNoYXJhY3RlcnMiLCJmaWx0ZXIiLCJzdG9yaWVzIiwic3RvcnkiLCJtYWluQ2hhcmFjdGVycyIsInNlY29uZGFyeUFyciIsInNlY29uZGFyeUNoYXJhY3RlcnMiLCJjaGFyIiwiY29tbWl0IiwiZGVsZXRlZCIsImdldFVzZXJDaGFyYWN0ZXJzIiwidXNlcklkIiwiaXRlbXMiLCJHRVRfVVNFUl9DSEFSQUNURVJTIiwiZ2V0RmF2b3JpdGVDaGFyYWN0ZXJzIiwiZmF2QXJyIiwidXNlcnMiLCJyZXN1bHQiLCJ1c2VyIiwiUHJvbWlzZSIsImFsbCIsImZhdlVzZXJzIiwiR0VUX0ZBVk9SSVRFX0NIQVJBQ1RFUlMiLCJnZXRDaGFyYWN0ZXJzSW5TdG9yeSIsIm9uU25hcHNob3QiLCJHRVRfU1RPUllfQ0hBUkFDVEVSUyIsIm1haW5BcnIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEVBQUQ7QUFBQSxTQUFRLFVBQUNDLFFBQUQsRUFBYztBQUNoREMsZ0RBQUUsQ0FBQ0MsVUFBSCxDQUFjLFlBQWQsRUFDR0MsR0FESCxDQUNPSixFQURQLEVBRUdLLEdBRkgsR0FHR0MsSUFISCxDQUdRLFVBQUNGLEdBQUQsRUFBUztBQUNiLFVBQUlBLEdBQUcsQ0FBQ0csTUFBUixFQUFnQjtBQUNkTixnQkFBUSxDQUFDO0FBQ1BPLGNBQUksRUFBRUMsc0RBQUssQ0FBQ0MsYUFETDtBQUVQQyxpQkFBTyxFQUFFO0FBQ1BDLHFCQUFTLGtDQUFPUixHQUFHLENBQUNTLElBQUosRUFBUDtBQUFtQmIsZ0JBQUUsRUFBRUksR0FBRyxDQUFDSjtBQUEzQixjQURGO0FBRVBjLHVCQUFXLEVBQUUsSUFGTjtBQUdQQyxtQkFBTyxFQUFFO0FBSEY7QUFGRixTQUFELENBQVI7QUFRRCxPQVRELE1BU087QUFDTGQsZ0JBQVEsQ0FBQztBQUNQTyxjQUFJLEVBQUVDLHNEQUFLLENBQUNDLGFBREw7QUFFUEMsaUJBQU8sRUFBRTtBQUNQRyx1QkFBVyxFQUFFLEtBRE47QUFFUEMsbUJBQU8sRUFBRTtBQUZGO0FBRkYsU0FBRCxDQUFSO0FBT0Q7QUFDRixLQXRCSDtBQXVCRCxHQXhCMkI7QUFBQSxDQUFyQjtBQTBCQSxJQUFNQyxZQUFZLEdB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QUFaLEVBQW9CMUUsSUFBcEIsQ0FBeUIsVUFBQ3VCLEdBQUQsRUFBUztBQUNoQyxZQUFJdUQsUUFBUSxHQUFHLEVBQWY7QUFDQXZELFdBQUcsQ0FBQ2lDLE9BQUosQ0FDRSxVQUFDMUQsR0FBRDtBQUFBLGlCQUFVZ0YsUUFBUSwwR0FBT0EsUUFBUDtBQUFtQnBGLGNBQUUsRUFBRUksR0FBRyxDQUFDSjtBQUEzQixhQUFrQ0ksR0FBRyxDQUFDUyxJQUFKLEVBQWxDLEdBQWxCO0FBQUEsU0FERjtBQUdBWixnQkFBUSxDQUFDO0FBQ1BPLGNBQUksRUFBRUMsc0RBQUssQ0FBQzRFLHVCQURMO0FBRVAxRSxpQkFBTyxFQUFFeUU7QUFGRixTQUFELENBQVI7QUFJRCxPQVREO0FBVUQsS0F4Qkg7QUF5QkQsR0ExQm9DO0FBQUEsQ0FBOUI7QUE0QkEsSUFBTUUsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixDQUFDdEYsRUFBRDtBQUFBLFNBQVEsVUFBQ0MsUUFBRCxFQUFjO0FBQ3hEQyxnREFBRSxDQUFDQyxVQUFILENBQWMsU0FBZCxFQUNHQyxHQURILENBQ09KLEVBRFAsRUFFR3VGLFVBRkgsQ0FFYyxVQUFDbkYsR0FBRCxFQUFTO0FBQ25CSCxjQUFRLENBQUM7QUFDUE8sWUFBSSxFQUFFQyxzREFBSyxDQUFDK0Usb0JBREw7QUFFUDdFLGVBQU8sRUFBRTtBQUNQMEQsNkJBQW1CLEVBQUVqRSxHQUFHLENBQUNTLElBQUosR0FBV3dELG1CQUR6QjtBQUVQb0IsaUJBQU8sRUFBRXJGLEdBQUcsQ0FBQ1MsSUFBSixHQUFXc0Q7QUFGYjtBQUZGLE9BQUQsQ0FBUjtBQU9ELEtBVkg7QUFXRCxHQVptQztBQUFBLENBQTdCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NoYXJhY3Rlci9baWRdLjQ4M2I4NzBlMGUyYTk0Y2JmMWIxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0eXBlcyB9IGZyb20gXCIuLi8uLi91dGlscy9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgbWVzc2FnZSB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IGRiLCBhdXRoLCBzdG9yYWdlIH0gZnJvbSBcIi4uL2ZiQ29uZmlnXCI7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q2hhcmFjdGVyID0gKGlkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkYi5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc1wiKVxyXG4gICAgLmRvYyhpZClcclxuICAgIC5nZXQoKVxyXG4gICAgLnRoZW4oKGRvYykgPT4ge1xyXG4gICAgICBpZiAoZG9jLmV4aXN0cykge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IHR5cGVzLkdFVF9DSEFSQUNURVIsXHJcbiAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgIGNoYXJhY3RlcjogeyAuLi5kb2MuZGF0YSgpLCBpZDogZG9jLmlkIH0sXHJcbiAgICAgICAgICAgIGNoYXJhRXhpc3RzOiB0cnVlLFxyXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogdHlwZXMuR0VUX0NIQVJBQ1RFUixcclxuICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgY2hhcmFFeGlzdHM6IGZhbHNlLFxyXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZENoYXJhY3RlciA9IChkYXRhKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkaXNwYXRjaCh7IHR5cGU6IHR5cGVzLkFERF9DSEFSQUNURVIsIHBheWxvYWQ6IHsgbG9hZGluZzogdHJ1ZSB9IH0pO1xyXG5cclxuICBsZXQgY2hhcmFJZCA9IFwiXCI7XHJcbiAgZGIuY29sbGVjdGlvbihcImNoYXJhY3RlcnNcIilcclxuICAgIC5hZGQoe1xyXG4gICAgICAuLi5kYXRhLFxyXG4gICAgICBpbWFnZTogdHlwZW9mIGRhdGEuaW1hZ2UgPT09IFwic3RyaW5nXCIgPyBkYXRhLmltYWdlIDogXCJcIixcclxuICAgICAgY3JlYXRlZEF0OiBmaXJlYmFzZS5maXJlc3RvcmUuRmllbGRWYWx1ZS5zZXJ2ZXJUaW1lc3RhbXAoKSxcclxuICAgICAgbGlrZXNDb3VudDogMCxcclxuICAgICAgbGlrZXM6IFtdLFxyXG4gICAgICBkaXNsaWtlczogW10sXHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBjaGFyYUlkID0gcmVzLmlkO1xyXG4gICAgICBjb25zdCBpbWFnZU5hbWUgPSBgJHtyZXMuaWR9JHtcIl9cIn0ke2RhdGEuZmlyc3RuYW1lLnRvTG93ZXJDYXNlKCl9JHtcclxuICAgICAgICBkYXRhLmxhc3RuYW1lICYmIFwiX1wiXHJcbiAgICAgIH0ke2RhdGEubGFzdG5hbWUgJiYgZGF0YS5sYXN0bmFtZS50b0xvd2VyQ2FzZSgpfWA7XHJcblxyXG4gICAgICBpZiAodHlwZW9mIGRhdGEuaW1hZ2UgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICBzdG9yYWdlXHJcbiAgICAgICAgICAucmVmKGAke2F1dGguY3VycmVudFVzZXIudWlkfS8ke2ltYWdlTmFtZX1gKVxyXG4gICAgICAgICAgLnB1dChkYXRhLmltYWdlKVxyXG4gICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gc3RvcmFnZVxyXG4gICAgICAgICAgICAgIC5yZWYoYXV0aC5jdXJyZW50VXNlci51aWQpXHJcbiAgICAgICAgICAgICAgLmNoaWxkKGltYWdlTmFtZSlcclxuICAgICAgICAgICAgICAuZ2V0RG93bmxvYWRVUkwoKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbigodXJsKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBkYlxyXG4gICAgICAgICAgICAgIC5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc1wiKVxyXG4gICAgICAgICAgICAgIC5kb2MoY2hhcmFJZClcclxuICAgICAgICAgICAgICAudXBkYXRlKHsgaW1hZ2U6IHVybCB9KTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhcIkNoYXJhY3RlciBhZGRlZCBzdWNjZXNzZnVsbHlcIik7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICB0eXBlOiB0eXBlcy5BRERfQ0hBUkFDVEVSLFxyXG4gICAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiQ2hhcmFjdGVyIGFkZGVkIHN1Y2Nlc3NmdWxseVwiLFxyXG4gICAgICAgICAgICAgICAgY2hhcmFjdGVySWQ6IGNoYXJhSWQsXHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhcIkNoYXJhY3RlciBhZGRlZCBzdWNjZXNzZnVsbHlcIik7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogdHlwZXMuQUREX0NIQVJBQ1RFUixcclxuICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJDaGFyYWN0ZXIgYWRkZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICAgIGNoYXJhY3RlcklkOiBjaGFyYUlkLFxyXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBtZXNzYWdlLmVycm9yKGVyci5tZXNzYWdlKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGVkaXRDaGFyYWN0ZXIgPSAoZGF0YSwgaWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRpc3BhdGNoKHsgdHlwZTogdHlwZXMuRURJVF9DSEFSQUNURVIsIHBheWxvYWQ6IHsgbG9hZGluZ0NoYXJhY3RlcjogdHJ1ZSB9IH0pO1xyXG5cclxuICBjb25zdCBpbWFnZU5hbWUgPSBgJHtpZH0ke1wiX1wifSR7ZGF0YS5maXJzdG5hbWUudG9Mb3dlckNhc2UoKX0ke1xyXG4gICAgZGF0YS5sYXN0bmFtZSAmJiBcIl9cIlxyXG4gIH0ke2RhdGEubGFzdG5hbWUgJiYgZGF0YS5sYXN0bmFtZS50b0xvd2VyQ2FzZSgpfWA7XHJcblxyXG4gIGlmIChkYXRhLmltYWdlICYmIHR5cGVvZiBkYXRhLmltYWdlID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICBzdG9yYWdlXHJcbiAgICAgIC5yZWYoYCR7YXV0aC5jdXJyZW50VXNlci51aWR9LyR7aW1hZ2VOYW1lfWApXHJcbiAgICAgIC5wdXQoZGF0YS5pbWFnZSlcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBzdG9yYWdlXHJcbiAgICAgICAgICAucmVmKGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gICAgICAgICAgLmNoaWxkKGltYWdlTmFtZSlcclxuICAgICAgICAgIC5nZXREb3dubG9hZFVSTCgpO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigodXJsKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGRiXHJcbiAgICAgICAgICAuY29sbGVjdGlvbihcImNoYXJhY3RlcnNcIilcclxuICAgICAgICAgIC5kb2MoaWQpXHJcbiAgICAgICAgICAudXBkYXRlKHtcclxuICAgICAgICAgICAgLi4uZGF0YSxcclxuICAgICAgICAgICAgaW1hZ2U6IHVybCxcclxuICAgICAgICAgICAgcmVsYXRpdmVzQXJyOiBkYXRhLnJlbGF0aXZlcy5tYXAoKGMpID0+IGMuY2hhcmFjdGVyX2lkKSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogdHlwZXMuRURJVF9DSEFSQUNURVIsXHJcbiAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiQ2hhcmFjdGVyIGVkaXRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgICAgbG9hZGluZ0NoYXJhY3RlcjogZmFsc2UsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoZXJyLm1lc3NhZ2UpO1xyXG4gICAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgZGIuY29sbGVjdGlvbihcImNoYXJhY3RlcnNcIilcclxuICAgICAgLmRvYyhpZClcclxuICAgICAgLnVwZGF0ZSh7XHJcbiAgICAgICAgLi4uZGF0YSxcclxuICAgICAgICByZWxhdGl2ZXNBcnI6IGRhdGEucmVsYXRpdmVzLm1hcCgoYykgPT4gYy5jaGFyYWN0ZXJfaWQpLFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogdHlwZXMuRURJVF9DSEFSQUNURVIsXHJcbiAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiQ2hhcmFjdGVyIGVkaXRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgICAgbG9hZGluZ0NoYXJhY3RlcjogZmFsc2UsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoZXJyLm1lc3NhZ2UpO1xyXG4gICAgICB9KTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlQ2hhcmFjdGVyID0gKGlkLCBmaXJzdG5hbWUsIGxhc3RuYW1lKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkaXNwYXRjaCh7IHR5cGU6IHR5cGVzLkRFTEVURV9DSEFSQUNURVIsIHBheWxvYWQ6IHsgbG9hZGluZzogdHJ1ZSB9IH0pO1xyXG4gIGNvbnN0IGltYWdlTmFtZSA9IGAke2lkfSR7XCJfXCJ9JHtmaXJzdG5hbWUudG9Mb3dlckNhc2UoKX0ke2xhc3RuYW1lICYmIFwiX1wifSR7XHJcbiAgICBsYXN0bmFtZSAmJiBsYXN0bmFtZS50b0xvd2VyQ2FzZSgpXHJcbiAgfWA7XHJcbiAgY29uc3QgYmF0Y2ggPSBkYi5iYXRjaCgpO1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzXCIpXHJcbiAgICAuZG9jKGlkKVxyXG4gICAgLmRlbGV0ZSgpXHJcbiAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgIHJldHVybiBzdG9yYWdlLnJlZihgJHthdXRoLmN1cnJlbnRVc2VyLnVpZH0vJHtpbWFnZU5hbWV9YCkuZGVsZXRlKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICBkYi5jb2xsZWN0aW9uKFwiY2hhcHRlcnNcIilcclxuICAgICAgICAud2hlcmUoXCJjaGFyYWN0ZXJzXCIsIFwiYXJyYXktY29udGFpbnNcIiwgaWQpXHJcbiAgICAgICAgLmdldCgpXHJcbiAgICAgICAgLnRoZW4oKGRvY3MpID0+IHtcclxuICAgICAgICAgIGRvY3MuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICAgICAgICAgIGJhdGNoLnVwZGF0ZShkYi5jb2xsZWN0aW9uKFwiY2hhcHRlcnNcIikuZG9jKGRvYy5pZCksIHtcclxuICAgICAgICAgICAgICBjaGFyYWN0ZXJzOiBkb2MuZGF0YSgpLmNoYXJhY3RlcnMuZmlsdGVyKChjKSA9PiBjICE9PSBpZCksXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKVxyXG4gICAgICAgICAgICAud2hlcmUoXCJzZWNvbmRhcnlBcnJcIiwgXCJhcnJheS1jb250YWluc1wiLCBpZClcclxuICAgICAgICAgICAgLmdldCgpXHJcbiAgICAgICAgICAgIC50aGVuKChzdG9yaWVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgc3Rvcmllcy5mb3JFYWNoKChzdG9yeSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYmF0Y2gudXBkYXRlKGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpLmRvYyhzdG9yeS5pZCksIHtcclxuICAgICAgICAgICAgICAgICAgbWFpbkNoYXJhY3RlcnM6IHN0b3J5XHJcbiAgICAgICAgICAgICAgICAgICAgLmRhdGEoKVxyXG4gICAgICAgICAgICAgICAgICAgIC5tYWluQ2hhcmFjdGVycy5maWx0ZXIoKGMpID0+IGMgIT09IGlkKSxcclxuICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5QXJyOiBzdG9yeVxyXG4gICAgICAgICAgICAgICAgICAgIC5kYXRhKClcclxuICAgICAgICAgICAgICAgICAgICAuc2Vjb25kYXJ5QXJyLmZpbHRlcigoYykgPT4gYyAhPT0gaWQpLFxyXG4gICAgICAgICAgICAgICAgICBzZWNvbmRhcnlDaGFyYWN0ZXJzOiBzdG9yeVxyXG4gICAgICAgICAgICAgICAgICAgIC5kYXRhKClcclxuICAgICAgICAgICAgICAgICAgICAuc2Vjb25kYXJ5Q2hhcmFjdGVycy5maWx0ZXIoKGMpID0+IGMuaWQgIT09IGlkKSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgZGIuY29sbGVjdGlvbihcImNoYXJhY3RlcnNcIilcclxuICAgICAgICAgICAgICAgIC53aGVyZShcInJlbGF0aXZlc0FyclwiLCBcImFycmF5LWNvbnRhaW5zXCIsIGlkKVxyXG4gICAgICAgICAgICAgICAgLmdldCgpXHJcbiAgICAgICAgICAgICAgICAudGhlbigoY2hhcmFjdGVycykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBjaGFyYWN0ZXJzLmZvckVhY2goKGNoYXIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBiYXRjaC51cGRhdGUoZGIuY29sbGVjdGlvbihcImNoYXJhY3RlcnNcIikuZG9jKGNoYXIuaWQpLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZWxhdGl2ZXNBcnI6IGNoYXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmRhdGEoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVsYXRpdmVzQXJyLmZpbHRlcigoYykgPT4gYyAhPT0gaWQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgcmVsYXRpdmVzOiBjaGFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5kYXRhKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbGF0aXZlcy5maWx0ZXIoKGMpID0+IGMuY2hhcmFjdGVyX2lkICE9PSBpZCksXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgYmF0Y2guY29tbWl0KCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogdHlwZXMuREVMRVRFX0NIQVJBQ1RFUixcclxuICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJDaGFyYWN0ZXIgZGVsZXRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJhRXhpc3RzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VXNlckNoYXJhY3RlcnMgPSAodXNlcklkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkYi5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc1wiKVxyXG4gICAgLndoZXJlKFwiYXV0aG9ySWRcIiwgXCI9PVwiLCB1c2VySWQpXHJcbiAgICAuZ2V0KClcclxuICAgIC50aGVuKChkb2NzKSA9PiB7XHJcbiAgICAgIGxldCBpdGVtcyA9IFtdO1xyXG4gICAgICBkb2NzLmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgICAgIGl0ZW1zID0gWy4uLml0ZW1zLCB7IGlkOiBkb2MuaWQsIC4uLmRvYy5kYXRhKCkgfV07XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gaXRlbXM7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGl0ZW1zKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogdHlwZXMuR0VUX1VTRVJfQ0hBUkFDVEVSUywgcGF5bG9hZDogaXRlbXMgfSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRGYXZvcml0ZUNoYXJhY3RlcnMgPSAoKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkYi5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc0xpa2VzXCIpXHJcbiAgICAud2hlcmUoXCJzZW5kZXJJZFwiLCBcIj09XCIsIGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigoZG9jcykgPT4ge1xyXG4gICAgICBsZXQgZmF2QXJyID0gW107XHJcbiAgICAgIGRvY3MuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICAgICAgZmF2QXJyID0gWy4uLmZhdkFyciwgZG9jLmRhdGEoKS5jaGFyYWN0ZXJJZF07XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gZmF2QXJyO1xyXG4gICAgfSlcclxuICAgIC50aGVuKCh1c2VycykgPT4ge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSB1c2Vycy5tYXAoKHVzZXIpID0+XHJcbiAgICAgICAgZGIuY29sbGVjdGlvbihcImNoYXJhY3RlcnNcIikuZG9jKHVzZXIpLmdldCgpXHJcbiAgICAgICk7XHJcbiAgICAgIFByb21pc2UuYWxsKHJlc3VsdCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgbGV0IGZhdlVzZXJzID0gW107XHJcbiAgICAgICAgcmVzLmZvckVhY2goXHJcbiAgICAgICAgICAoZG9jKSA9PiAoZmF2VXNlcnMgPSBbLi4uZmF2VXNlcnMsIHsgaWQ6IGRvYy5pZCwgLi4uZG9jLmRhdGEoKSB9XSlcclxuICAgICAgICApO1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IHR5cGVzLkdFVF9GQVZPUklURV9DSEFSQUNURVJTLFxyXG4gICAgICAgICAgcGF5bG9hZDogZmF2VXNlcnMsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q2hhcmFjdGVyc0luU3RvcnkgPSAoaWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpXHJcbiAgICAuZG9jKGlkKVxyXG4gICAgLm9uU25hcHNob3QoKGRvYykgPT4ge1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogdHlwZXMuR0VUX1NUT1JZX0NIQVJBQ1RFUlMsXHJcbiAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgc2Vjb25kYXJ5Q2hhcmFjdGVyczogZG9jLmRhdGEoKS5zZWNvbmRhcnlDaGFyYWN0ZXJzLFxyXG4gICAgICAgICAgbWFpbkFycjogZG9jLmRhdGEoKS5tYWluQ2hhcmFjdGVycyxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9