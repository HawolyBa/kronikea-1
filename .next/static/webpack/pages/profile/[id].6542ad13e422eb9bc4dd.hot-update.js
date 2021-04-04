webpackHotUpdate_N_E("pages/profile/[id]",{

/***/ "./redux/actions/userActions.js":
/*!**************************************!*\
  !*** ./redux/actions/userActions.js ***!
  \**************************************/
/*! exports provided: log_in, getProfile, getFavoriteAuthors, getFollowers, getIsFollowing, followUser, unfollowUser, changeProfile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log_in", function() { return log_in; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProfile", function() { return getProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFavoriteAuthors", function() { return getFavoriteAuthors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFollowers", function() { return getFollowers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsFollowing", function() { return getIsFollowing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "followUser", function() { return followUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unfollowUser", function() { return unfollowUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeProfile", function() { return changeProfile; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _fbConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fbConfig */ "./redux/fbConfig.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/constants */ "./utils/constants.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.esm.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");






function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var log_in = function log_in(email, password) {
  return function (dispatch) {
    console.log(email, password);
    _fbConfig__WEBPACK_IMPORTED_MODULE_5__["auth"].signInWithEmailAndPassword(email, password);
  };
};
var getProfile = function getProfile(id) {
  return function (dispatch) {
    _fbConfig__WEBPACK_IMPORTED_MODULE_5__["db"].collection("users").doc(id ? id : _fbConfig__WEBPACK_IMPORTED_MODULE_5__["auth"].currentUser.uid).onSnapshot(function (doc) {
      return dispatch({
        type: _utils_constants__WEBPACK_IMPORTED_MODULE_6__["types"].GET_PROFILE,
        payload: _objectSpread({
          id: doc.id
        }, doc.data())
      });
    });
  };
};
var getFavoriteAuthors = function getFavoriteAuthors(id) {
  return function (dispatch) {
    var addedOn;
    var userId = id ? id : _fbConfig__WEBPACK_IMPORTED_MODULE_5__["auth"].currentUser.uid;
    _fbConfig__WEBPACK_IMPORTED_MODULE_5__["db"].collection("usersLikes").where("senderId", "==", userId).get().then(function (docs) {
      var favArr = [];
      docs.forEach(function (doc) {
        addedOn = doc.data().createdAt;
        favArr = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(favArr), [doc.data().recipient]);
      });
      return favArr;
    }).then(function (users) {
      var result = users.map(function (user) {
        return _fbConfig__WEBPACK_IMPORTED_MODULE_5__["db"].collection("users").doc(user).get();
      });
      Promise.all(result).then(function (res) {
        var favUsers = [];
        res.forEach(function (doc) {
          return favUsers = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(favUsers), [_objectSpread({
            addedOn: addedOn,
            id: doc.id
          }, doc.data())]);
        });
        dispatch({
          type: _utils_constants__WEBPACK_IMPORTED_MODULE_6__["types"].GET_FAVORITE_AUTHORS,
          payload: favUsers
        });
      });
    });
  };
};
var getFollowers = function getFollowers(id) {
  return function (dispatch) {
    var addedOn;
    var userId = id ? id : _fbConfig__WEBPACK_IMPORTED_MODULE_5__["auth"].currentUser.uid;
    _fbConfig__WEBPACK_IMPORTED_MODULE_5__["db"].collection("usersLikes").where("recipient", "==", userId).get().then(function (docs) {
      var favArr = [];
      docs.forEach(function (doc) {
        addedOn = doc.data().createdAt;
        favArr = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(favArr), [doc.data().senderId]);
      });
      return favArr;
    }).then(function (users) {
      var result = users.map(function (user) {
        return _fbConfig__WEBPACK_IMPORTED_MODULE_5__["db"].collection("users").doc(user).get();
      });
      Promise.all(result).then(function (res) {
        var favUsers = [];
        res.forEach(function (doc) {
          return favUsers = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(favUsers), [_objectSpread({
            addedOn: addedOn,
            id: doc.id
          }, doc.data())]);
        });
        dispatch({
          type: _utils_constants__WEBPACK_IMPORTED_MODULE_6__["types"].GET_FOLLOWERS,
          payload: favUsers
        });
      });
    });
  };
};
var getIsFollowing = function getIsFollowing(userId) {
  return function (dispatch) {
    if (_fbConfig__WEBPACK_IMPORTED_MODULE_5__["auth"].currentUser) {
      _fbConfig__WEBPACK_IMPORTED_MODULE_5__["db"].collection("usersLikes").where("recipient", "==", userId).where("senderId", "==", _fbConfig__WEBPACK_IMPORTED_MODULE_5__["auth"].currentUser.uid).onSnapshot(function (snapshot) {
        var answer = snapshot.docs.length > 0 ? true : false;
        return dispatch({
          type: _utils_constants__WEBPACK_IMPORTED_MODULE_6__["types"].IS_FOLLOWING,
          payload: answer
        });
      });
    }
  };
};
var followUser = function followUser(id, isFavorite, newFollower) {
  return function (dispatch) {
    if (isFavorite) return antd__WEBPACK_IMPORTED_MODULE_8__["message"].warning("You are already following this user");
    if (!_fbConfig__WEBPACK_IMPORTED_MODULE_5__["auth"].currentUser) return antd__WEBPACK_IMPORTED_MODULE_8__["message"].error("You need to be logged in to follow users");
    if (!_fbConfig__WEBPACK_IMPORTED_MODULE_5__["auth"].currentUser.emailVerified) return antd__WEBPACK_IMPORTED_MODULE_8__["message"].error("You need to verify your email first");
    _fbConfig__WEBPACK_IMPORTED_MODULE_5__["db"].collection("usersLikes").add({
      sender: newFollower.username,
      senderId: newFollower.uid,
      recipient: id,
      createdAt: firebase_app__WEBPACK_IMPORTED_MODULE_7__["default"].firestore.FieldValue.serverTimestamp()
    }).then(function () {
      return antd__WEBPACK_IMPORTED_MODULE_8__["message"].success("You are now following this user");
    })["catch"](function (err) {
      return antd__WEBPACK_IMPORTED_MODULE_8__["message"].error("There has been a problem");
    });
  };
};
var unfollowUser = function unfollowUser(id, isFavorite) {
  return function (dispatch) {
    if (!isFavorite) return antd__WEBPACK_IMPORTED_MODULE_8__["message"].warning("You are not following this user yet");
    _fbConfig__WEBPACK_IMPORTED_MODULE_5__["db"].collection("usersLikes").where("recipient", "==", id).where("senderId", "==", _fbConfig__WEBPACK_IMPORTED_MODULE_5__["auth"].currentUser.uid).get().then(function (data) {
      return _fbConfig__WEBPACK_IMPORTED_MODULE_5__["db"].collection("usersLikes").doc(data.docs[0].id)["delete"]();
    }).then(function () {
      return antd__WEBPACK_IMPORTED_MODULE_8__["message"].success("User successfully unfollowed");
    })["catch"](function (err) {
      return antd__WEBPACK_IMPORTED_MODULE_8__["message"].error("There has been a problem");
    });
  };
};
var changeProfile = function changeProfile(data, setOpen, username, userImage) {
  return function (dispatch) {
    var batch = _fbConfig__WEBPACK_IMPORTED_MODULE_5__["db"].batch();

    var newPassword = data.newPassword,
        actualPassword = data.actualPassword,
        newInfo = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(data, ["newPassword", "actualPassword"]);

    var imageName = "".concat(_fbConfig__WEBPACK_IMPORTED_MODULE_5__["auth"].currentUser.uid, "_").concat(newInfo.username); // STORIES, CHAPTERS, CHARACTERS & COMMENTS QUERIES

    var userStoriesQuery = _fbConfig__WEBPACK_IMPORTED_MODULE_5__["db"].collection("stories").where("authorId", "==", _fbConfig__WEBPACK_IMPORTED_MODULE_5__["auth"].currentUser.uid).get();
    var userChaptersQuery = _fbConfig__WEBPACK_IMPORTED_MODULE_5__["db"].collection("chapters").where("authorId", "==", _fbConfig__WEBPACK_IMPORTED_MODULE_5__["auth"].currentUser.uid).get();
    var userCharactersQuery = _fbConfig__WEBPACK_IMPORTED_MODULE_5__["db"].collection("characters").where("authorId", "==", _fbConfig__WEBPACK_IMPORTED_MODULE_5__["auth"].currentUser.uid).get();
    var userCommentsQuery = _fbConfig__WEBPACK_IMPORTED_MODULE_5__["db"].collection("comments").where("userId", "==", _fbConfig__WEBPACK_IMPORTED_MODULE_5__["auth"].currentUser.uid).get(); // FUNCTION TO ACTUALLY UPDATE ALL AFFECTED FILES

    var batchUpdateAll = /*#__PURE__*/function () {
      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(queries, url) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Promise.all(queries).then(function (res) {
                  res[0].forEach(function (story) {
                    batch.update(_fbConfig__WEBPACK_IMPORTED_MODULE_5__["db"].collection("stories").doc(story.id), {
                      userImage: url ? url : newInfo.image,
                      authorName: data.username
                    });
                  });
                  res[1].forEach(function (chap) {
                    batch.update(_fbConfig__WEBPACK_IMPORTED_MODULE_5__["db"].collection("chapters").doc(chap.id), {
                      userImage: url ? url : newInfo.image,
                      authorName: data.username
                    });
                  });
                  res[2].forEach(function (_char) {
                    batch.update(_fbConfig__WEBPACK_IMPORTED_MODULE_5__["db"].collection("characters").doc(_char.id), {
                      userImage: url ? url : newInfo.image,
                      authorName: data.username
                    });
                  });
                  res[3].forEach(function (_char2) {
                    batch.update(_fbConfig__WEBPACK_IMPORTED_MODULE_5__["db"].collection("comments").doc(_char2.id), {
                      userImage: url ? url : newInfo.image,
                      username: data.username
                    });
                  });
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function batchUpdateAll(_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }();

    if (newPassword) {
      _fbConfig__WEBPACK_IMPORTED_MODULE_5__["auth"].currentUser.reauthenticateWithCredential(firebase_app__WEBPACK_IMPORTED_MODULE_7__["default"].auth.EmailAuthProvider.credential(_fbConfig__WEBPACK_IMPORTED_MODULE_5__["auth"].currentUser.email, actualPassword)).then(function () {
        return _fbConfig__WEBPACK_IMPORTED_MODULE_5__["auth"].currentUser.updatePassword(newPassword);
      }).then( /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(typeof newInfo.image === "object")) {
                  _context3.next = 4;
                  break;
                }

                _fbConfig__WEBPACK_IMPORTED_MODULE_5__["storage"].ref("".concat(_fbConfig__WEBPACK_IMPORTED_MODULE_5__["auth"].currentUser.uid, "/").concat(imageName)).put(newInfo.image).then(function () {
                  return _fbConfig__WEBPACK_IMPORTED_MODULE_5__["storage"].ref("".concat(_fbConfig__WEBPACK_IMPORTED_MODULE_5__["auth"].currentUser.uid, "/").concat(imageName)).getDownloadURL();
                }).then( /*#__PURE__*/function () {
                  var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(url) {
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            batch.update(_fbConfig__WEBPACK_IMPORTED_MODULE_5__["db"].collection("users").doc(_fbConfig__WEBPACK_IMPORTED_MODULE_5__["auth"].currentUser.uid), _objectSpread(_objectSpread({}, newInfo), {}, {
                              image: url
                            }));
                            _context2.next = 3;
                            return batchUpdateAll([userStoriesQuery, userChaptersQuery, userCharactersQuery, userCommentsQuery], url);

                          case 3:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2);
                  }));

                  return function (_x3) {
                    return _ref3.apply(this, arguments);
                  };
                }());
                _context3.next = 7;
                break;

              case 4:
                batch.update(_fbConfig__WEBPACK_IMPORTED_MODULE_5__["db"].collection("users").doc(_fbConfig__WEBPACK_IMPORTED_MODULE_5__["auth"].currentUser.uid), _objectSpread({}, newInfo));
                _context3.next = 7;
                return batchUpdateAll([userStoriesQuery, userChaptersQuery, userCharactersQuery, userCommentsQuery], url);

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      })));
    } else {
      if (typeof newInfo.image === "object") {
        _fbConfig__WEBPACK_IMPORTED_MODULE_5__["storage"].ref("".concat(_fbConfig__WEBPACK_IMPORTED_MODULE_5__["auth"].currentUser.uid, "/").concat(imageName)).put(newInfo.image).then(function () {
          return _fbConfig__WEBPACK_IMPORTED_MODULE_5__["storage"].ref("".concat(_fbConfig__WEBPACK_IMPORTED_MODULE_5__["auth"].currentUser.uid, "/").concat(imageName)).getDownloadURL();
        }).then( /*#__PURE__*/function () {
          var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(url) {
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    batch.update(_fbConfig__WEBPACK_IMPORTED_MODULE_5__["db"].collection("users").doc(_fbConfig__WEBPACK_IMPORTED_MODULE_5__["auth"].currentUser.uid), _objectSpread(_objectSpread({}, newInfo), {}, {
                      image: url
                    }));
                    _context4.next = 3;
                    return batchUpdateAll([userStoriesQuery, userChaptersQuery, userCharactersQuery, userCommentsQuery], url);

                  case 3:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4);
          }));

          return function (_x4) {
            return _ref4.apply(this, arguments);
          };
        }());
      } else {
        batch.update(_fbConfig__WEBPACK_IMPORTED_MODULE_5__["db"].collection("users").doc(_fbConfig__WEBPACK_IMPORTED_MODULE_5__["auth"].currentUser.uid), _objectSpread({}, newInfo));
        batchUpdateAll([userStoriesQuery, userChaptersQuery, userCharactersQuery, userCommentsQuery]);
      }
    }

    batch.commit().then(function () {
      return console.log("all good");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvYWN0aW9ucy91c2VyQWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJsb2dfaW4iLCJlbWFpbCIsInBhc3N3b3JkIiwiZGlzcGF0Y2giLCJjb25zb2xlIiwibG9nIiwiYXV0aCIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwiZ2V0UHJvZmlsZSIsImlkIiwiZGIiLCJjb2xsZWN0aW9uIiwiZG9jIiwiY3VycmVudFVzZXIiLCJ1aWQiLCJvblNuYXBzaG90IiwidHlwZSIsInR5cGVzIiwiR0VUX1BST0ZJTEUiLCJwYXlsb2FkIiwiZGF0YSIsImdldEZhdm9yaXRlQXV0aG9ycyIsImFkZGVkT24iLCJ1c2VySWQiLCJ3aGVyZSIsImdldCIsInRoZW4iLCJkb2NzIiwiZmF2QXJyIiwiZm9yRWFjaCIsImNyZWF0ZWRBdCIsInJlY2lwaWVudCIsInVzZXJzIiwicmVzdWx0IiwibWFwIiwidXNlciIsIlByb21pc2UiLCJhbGwiLCJyZXMiLCJmYXZVc2VycyIsIkdFVF9GQVZPUklURV9BVVRIT1JTIiwiZ2V0Rm9sbG93ZXJzIiwic2VuZGVySWQiLCJHRVRfRk9MTE9XRVJTIiwiZ2V0SXNGb2xsb3dpbmciLCJzbmFwc2hvdCIsImFuc3dlciIsImxlbmd0aCIsIklTX0ZPTExPV0lORyIsImZvbGxvd1VzZXIiLCJpc0Zhdm9yaXRlIiwibmV3Rm9sbG93ZXIiLCJtZXNzYWdlIiwid2FybmluZyIsImVycm9yIiwiZW1haWxWZXJpZmllZCIsImFkZCIsInNlbmRlciIsInVzZXJuYW1lIiwiZmlyZWJhc2UiLCJmaXJlc3RvcmUiLCJGaWVsZFZhbHVlIiwic2VydmVyVGltZXN0YW1wIiwic3VjY2VzcyIsImVyciIsInVuZm9sbG93VXNlciIsImNoYW5nZVByb2ZpbGUiLCJzZXRPcGVuIiwidXNlckltYWdlIiwiYmF0Y2giLCJuZXdQYXNzd29yZCIsImFjdHVhbFBhc3N3b3JkIiwibmV3SW5mbyIsImltYWdlTmFtZSIsInVzZXJTdG9yaWVzUXVlcnkiLCJ1c2VyQ2hhcHRlcnNRdWVyeSIsInVzZXJDaGFyYWN0ZXJzUXVlcnkiLCJ1c2VyQ29tbWVudHNRdWVyeSIsImJhdGNoVXBkYXRlQWxsIiwicXVlcmllcyIsInVybCIsInN0b3J5IiwidXBkYXRlIiwiaW1hZ2UiLCJhdXRob3JOYW1lIiwiY2hhcCIsImNoYXIiLCJyZWF1dGhlbnRpY2F0ZVdpdGhDcmVkZW50aWFsIiwiRW1haWxBdXRoUHJvdmlkZXIiLCJjcmVkZW50aWFsIiwidXBkYXRlUGFzc3dvcmQiLCJzdG9yYWdlIiwicmVmIiwicHV0IiwiZ2V0RG93bmxvYWRVUkwiLCJjb21taXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRCxFQUFRQyxRQUFSO0FBQUEsU0FBcUIsVUFBQ0MsUUFBRCxFQUFjO0FBQ3ZEQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUosS0FBWixFQUFtQkMsUUFBbkI7QUFDQUksa0RBQUksQ0FBQ0MsMEJBQUwsQ0FBZ0NOLEtBQWhDLEVBQXVDQyxRQUF2QztBQUNELEdBSHFCO0FBQUEsQ0FBZjtBQUtBLElBQU1NLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLEVBQUQ7QUFBQSxTQUFRLFVBQUNOLFFBQUQsRUFBYztBQUM5Q08sZ0RBQUUsQ0FBQ0MsVUFBSCxDQUFjLE9BQWQsRUFDR0MsR0FESCxDQUNPSCxFQUFFLEdBQUdBLEVBQUgsR0FBUUgsOENBQUksQ0FBQ08sV0FBTCxDQUFpQkMsR0FEbEMsRUFFR0MsVUFGSCxDQUVjLFVBQUNILEdBQUQsRUFBUztBQUNuQixhQUFPVCxRQUFRLENBQUM7QUFDZGEsWUFBSSxFQUFFQyxzREFBSyxDQUFDQyxXQURFO0FBRWRDLGVBQU87QUFBSVYsWUFBRSxFQUFFRyxHQUFHLENBQUNIO0FBQVosV0FBbUJHLEdBQUcsQ0FBQ1EsSUFBSixFQUFuQjtBQUZPLE9BQUQsQ0FBZjtBQUlELEtBUEg7QUFRRCxHQVR5QjtBQUFBLENBQW5CO0FBV0EsSUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDWixFQUFEO0FBQUEsU0FBUSxVQUFDTixRQUFELEVBQWM7QUFDdEQsUUFBSW1CLE9BQUo7QUFDQSxRQUFNQyxNQUFNLEdBQUdkLEVBQUUsR0FBR0EsRUFBSCxHQUFRSCw4Q0FBSSxDQUFDTyxXQUFMLENBQWlCQyxHQUExQztBQUNBSixnREFBRSxDQUFDQyxVQUFILENBQWMsWUFBZCxFQUNHYSxLQURILENBQ1MsVUFEVCxFQUNxQixJQURyQixFQUMyQkQsTUFEM0IsRUFFR0UsR0FGSCxHQUdHQyxJQUhILENBR1EsVUFBQ0MsSUFBRCxFQUFVO0FBQ2QsVUFBSUMsTUFBTSxHQUFHLEVBQWI7QUFDQUQsVUFBSSxDQUFDRSxPQUFMLENBQWEsVUFBQ2pCLEdBQUQsRUFBUztBQUNwQlUsZUFBTyxHQUFHVixHQUFHLENBQUNRLElBQUosR0FBV1UsU0FBckI7QUFDQUYsY0FBTSwwR0FBT0EsTUFBUCxJQUFlaEIsR0FBRyxDQUFDUSxJQUFKLEdBQVdXLFNBQTFCLEVBQU47QUFDRCxPQUhEO0FBSUEsYUFBT0gsTUFBUDtBQUNELEtBVkgsRUFXR0YsSUFYSCxDQVdRLFVBQUNNLEtBQUQsRUFBVztBQUNmLFVBQU1DLE1BQU0sR0FBR0QsS0FBSyxDQUFDRSxHQUFOLENBQVUsVUFBQ0MsSUFBRDtBQUFBLGVBQ3ZCekIsNENBQUUsQ0FBQ0MsVUFBSCxDQUFjLE9BQWQsRUFBdUJDLEdBQXZCLENBQTJCdUIsSUFBM0IsRUFBaUNWLEdBQWpDLEVBRHVCO0FBQUEsT0FBVixDQUFmO0FBR0FXLGFBQU8sQ0FBQ0MsR0FBUixDQUFZSixNQUFaLEVBQW9CUCxJQUFwQixDQUF5QixVQUFDWSxHQUFELEVBQVM7QUFDaEMsWUFBSUMsUUFBUSxHQUFHLEVBQWY7QUFDQUQsV0FBRyxDQUFDVCxPQUFKLENBQ0UsVUFBQ2pCLEdBQUQ7QUFBQSxpQkFDRzJCLFFBQVEsMEdBQU9BLFFBQVA7QUFBbUJqQixtQkFBTyxFQUFQQSxPQUFuQjtBQUE0QmIsY0FBRSxFQUFFRyxHQUFHLENBQUNIO0FBQXBDLGFBQTJDRyxHQUFHLENBQUNRLElBQUosRUFBM0MsR0FEWDtBQUFBLFNBREY7QUFJQWpCLGdCQUFRLENBQUM7QUFDUGEsY0FBSSxFQUFFQyxzREFBSyxDQUFDdUIsb0JBREw7QUFFUHJCLGlCQUFPLEVBQUVvQjtBQUZGLFNBQUQsQ0FBUjtBQUlELE9BVkQ7QUFXRCxLQTFCSDtBQTJCRCxHQTlCaUM7QUFBQSxDQUEzQjtBQWdDQSxJQUFNRSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDaEMsRUFBRDtBQUFBLFNBQVEsVUFBQ04sUUFBRCxFQUFjO0FBQ2hELFFBQUltQixPQUFKO0FBQ0EsUUFBTUMsTUFBTSxHQUFHZCxFQUFFLEdBQUdBLEVBQUgsR0FBUUgsOENBQUksQ0FBQ08sV0FBTCxDQUFpQkMsR0FBMUM7QUFDQUosZ0RBQUUsQ0FBQ0MsVUFBSCxDQUFjLFlBQWQsRUFDR2EsS0FESCxDQUNTLFdBRFQsRUFDc0IsSUFEdEIsRUFDNEJELE1BRDVCLEVBRUdFLEdBRkgsR0FHR0MsSUFISCxDQUdRLFVBQUNDLElBQUQsRUFBVTtBQUNkLFVBQUlDLE1BQU0sR0FBRyxFQUFiO0FBQ0FELFVBQUksQ0FBQ0UsT0FBTCxDQUFhLFVBQUNqQixHQUFELEVBQVM7QUFDcEJVLGVBQU8sR0FBR1YsR0FBRyxDQUFDUSxJQUFKLEdBQVdVLFNBQXJCO0FBQ0FGLGNBQU0sMEdBQU9BLE1BQVAsSUFBZWhCLEdBQUcsQ0FBQ1EsSUFBSixHQUFXc0IsUUFBMUIsRUFBTjtBQUNELE9BSEQ7QUFJQSxhQUFPZCxNQUFQO0FBQ0QsS0FWSCxFQVdHRixJQVhILENBV1EsVUFBQ00sS0FBRCxFQUFXO0FBQ2YsVUFBTUMsTUFBTSxHQUFHRCxLQUFLLENBQUNFLEdBQU4sQ0FBVSxVQUFDQyxJQUFEO0FBQUEsZUFDdkJ6Qiw0Q0FBRSxDQUFDQyxVQUFILENBQWMsT0FBZCxFQUF1QkMsR0FBdkIsQ0FBMkJ1QixJQUEzQixFQUFpQ1YsR0FBakMsRUFEdUI7QUFBQSxPQUFWLENBQWY7QUFHQVcsYUFBTyxDQUFDQyxHQUFSLENBQVlKLE1BQVosRUFBb0JQLElBQXBCLENBQXlCLFVBQUNZLEdBQUQsRUFBUztBQUNoQyxZQUFJQyxRQUFRLEdBQUcsRUFBZjtBQUNBRCxXQUFHLENBQUNULE9BQUosQ0FDRSxVQUFDakIsR0FBRDtBQUFBLGlCQUNHMkIsUUFBUSwwR0FBT0EsUUFBUDtBQUFtQmpCLG1CQUFPLEVBQVBBLE9BQW5CO0FBQTRCYixjQUFFLEVBQUVHLEdBQUcsQ0FBQ0g7QUFBcEMsYUFBMkNHLEdBQUcsQ0FBQ1EsSUFBSixFQUEzQyxHQURYO0FBQUEsU0FERjtBQUlBakIsZ0JBQVEsQ0FBQztBQUNQYSxjQUFJLEVBQUVDLHNEQUFLLENBQUMwQixhQURMO0FBRVB4QixpQkFBTyxFQUFFb0I7QUFGRixTQUFELENBQVI7QUFJRCxPQVZEO0FBV0QsS0ExQkg7QUEyQkQsR0E5QjJCO0FBQUEsQ0FBckI7QUFnQ0EsSUFBTUssY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDckIsTUFBRDtBQUFBLFNBQVksVUFBQ3BCLFFBQUQsRUFBYztBQUN0RCxRQUFJRyw4Q0FBSSxDQUFDTyxXQUFULEVBQXNCO0FBQ3BCSCxrREFBRSxDQUFDQyxVQUFILENBQWMsWUFBZCxFQUNHYSxLQURILENBQ1MsV0FEVCxFQUNzQixJQUR0QixFQUM0QkQsTUFENUIsRUFFR0MsS0FGSCxDQUVTLFVBRlQsRUFFcUIsSUFGckIsRUFFMkJsQiw4Q0FBSSxDQUFDTyxXQUFMLENBQWlCQyxHQUY1QyxFQUdHQyxVQUhILENBR2MsVUFBQzhCLFFBQUQsRUFBYztBQUN4QixZQUFNQyxNQUFNLEdBQUdELFFBQVEsQ0FBQ2xCLElBQVQsQ0FBY29CLE1BQWQsR0FBdUIsQ0FBdkIsR0FBMkIsSUFBM0IsR0FBa0MsS0FBakQ7QUFDQSxlQUFPNUMsUUFBUSxDQUFDO0FBQUVhLGNBQUksRUFBRUMsc0RBQUssQ0FBQytCLFlBQWQ7QUFBNEI3QixpQkFBTyxFQUFFMkI7QUFBckMsU0FBRCxDQUFmO0FBQ0QsT0FOSDtBQU9EO0FBQ0YsR0FWNkI7QUFBQSxDQUF2QjtBQVlBLElBQU1HLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUN4QyxFQUFELEVBQUt5QyxVQUFMLEVBQWlCQyxXQUFqQjtBQUFBLFNBQWlDLFVBQUNoRCxRQUFELEVBQWM7QUFDdkUsUUFBSStDLFVBQUosRUFBZ0IsT0FBT0UsNENBQU8sQ0FBQ0MsT0FBUixDQUFnQixxQ0FBaEIsQ0FBUDtBQUNoQixRQUFJLENBQUMvQyw4Q0FBSSxDQUFDTyxXQUFWLEVBQ0UsT0FBT3VDLDRDQUFPLENBQUNFLEtBQVIsQ0FBYywwQ0FBZCxDQUFQO0FBQ0YsUUFBSSxDQUFDaEQsOENBQUksQ0FBQ08sV0FBTCxDQUFpQjBDLGFBQXRCLEVBQ0UsT0FBT0gsNENBQU8sQ0FBQ0UsS0FBUixDQUFjLHFDQUFkLENBQVA7QUFFRjVDLGdEQUFFLENBQUNDLFVBQUgsQ0FBYyxZQUFkLEVBQ0c2QyxHQURILENBQ087QUFDSEMsWUFBTSxFQUFFTixXQUFXLENBQUNPLFFBRGpCO0FBRUhoQixjQUFRLEVBQUVTLFdBQVcsQ0FBQ3JDLEdBRm5CO0FBR0hpQixlQUFTLEVBQUV0QixFQUhSO0FBSUhxQixlQUFTLEVBQUU2QixvREFBUSxDQUFDQyxTQUFULENBQW1CQyxVQUFuQixDQUE4QkMsZUFBOUI7QUFKUixLQURQLEVBT0dwQyxJQVBILENBT1E7QUFBQSxhQUFNMEIsNENBQU8sQ0FBQ1csT0FBUixDQUFnQixpQ0FBaEIsQ0FBTjtBQUFBLEtBUFIsV0FRUyxVQUFDQyxHQUFEO0FBQUEsYUFBU1osNENBQU8sQ0FBQ0UsS0FBUixDQUFjLDBCQUFkLENBQVQ7QUFBQSxLQVJUO0FBU0QsR0FoQnlCO0FBQUEsQ0FBbkI7QUFrQkEsSUFBTVcsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ3hELEVBQUQsRUFBS3lDLFVBQUw7QUFBQSxTQUFvQixVQUFDL0MsUUFBRCxFQUFjO0FBQzVELFFBQUksQ0FBQytDLFVBQUwsRUFDRSxPQUFPRSw0Q0FBTyxDQUFDQyxPQUFSLENBQWdCLHFDQUFoQixDQUFQO0FBRUYzQyxnREFBRSxDQUFDQyxVQUFILENBQWMsWUFBZCxFQUNHYSxLQURILENBQ1MsV0FEVCxFQUNzQixJQUR0QixFQUM0QmYsRUFENUIsRUFFR2UsS0FGSCxDQUVTLFVBRlQsRUFFcUIsSUFGckIsRUFFMkJsQiw4Q0FBSSxDQUFDTyxXQUFMLENBQWlCQyxHQUY1QyxFQUdHVyxHQUhILEdBSUdDLElBSkgsQ0FJUSxVQUFDTixJQUFELEVBQVU7QUFDZCxhQUFPViw0Q0FBRSxDQUFDQyxVQUFILENBQWMsWUFBZCxFQUE0QkMsR0FBNUIsQ0FBZ0NRLElBQUksQ0FBQ08sSUFBTCxDQUFVLENBQVYsRUFBYWxCLEVBQTdDLGFBQVA7QUFDRCxLQU5ILEVBT0dpQixJQVBILENBT1E7QUFBQSxhQUFNMEIsNENBQU8sQ0FBQ1csT0FBUixDQUFnQiw4QkFBaEIsQ0FBTjtBQUFBLEtBUFIsV0FRUyxVQUFDQyxHQUFEO0FBQUEsYUFBU1osNENBQU8sQ0FBQ0UsS0FBUixDQUFjLDBCQUFkLENBQVQ7QUFBQSxLQVJUO0FBU0QsR0FiMkI7QUFBQSxDQUFyQjtBQWVBLElBQU1ZLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQzlDLElBQUQsRUFBTytDLE9BQVAsRUFBZ0JULFFBQWhCLEVBQTBCVSxTQUExQjtBQUFBLFNBQXdDLFVBQ25FakUsUUFEbUUsRUFFaEU7QUFDSCxRQUFNa0UsS0FBSyxHQUFHM0QsNENBQUUsQ0FBQzJELEtBQUgsRUFBZDs7QUFERyxRQUVLQyxXQUZMLEdBRWlEbEQsSUFGakQsQ0FFS2tELFdBRkw7QUFBQSxRQUVrQkMsY0FGbEIsR0FFaURuRCxJQUZqRCxDQUVrQm1ELGNBRmxCO0FBQUEsUUFFcUNDLE9BRnJDLHNHQUVpRHBELElBRmpEOztBQUdILFFBQU1xRCxTQUFTLGFBQU1uRSw4Q0FBSSxDQUFDTyxXQUFMLENBQWlCQyxHQUF2QixjQUE4QjBELE9BQU8sQ0FBQ2QsUUFBdEMsQ0FBZixDQUhHLENBS0g7O0FBQ0EsUUFBTWdCLGdCQUFnQixHQUFHaEUsNENBQUUsQ0FDeEJDLFVBRHNCLENBQ1gsU0FEVyxFQUV0QmEsS0FGc0IsQ0FFaEIsVUFGZ0IsRUFFSixJQUZJLEVBRUVsQiw4Q0FBSSxDQUFDTyxXQUFMLENBQWlCQyxHQUZuQixFQUd0QlcsR0FIc0IsRUFBekI7QUFJQSxRQUFNa0QsaUJBQWlCLEdBQUdqRSw0Q0FBRSxDQUN6QkMsVUFEdUIsQ0FDWixVQURZLEVBRXZCYSxLQUZ1QixDQUVqQixVQUZpQixFQUVMLElBRkssRUFFQ2xCLDhDQUFJLENBQUNPLFdBQUwsQ0FBaUJDLEdBRmxCLEVBR3ZCVyxHQUh1QixFQUExQjtBQUlBLFFBQU1tRCxtQkFBbUIsR0FBR2xFLDRDQUFFLENBQzNCQyxVQUR5QixDQUNkLFlBRGMsRUFFekJhLEtBRnlCLENBRW5CLFVBRm1CLEVBRVAsSUFGTyxFQUVEbEIsOENBQUksQ0FBQ08sV0FBTCxDQUFpQkMsR0FGaEIsRUFHekJXLEdBSHlCLEVBQTVCO0FBSUEsUUFBTW9ELGlCQUFpQixHQUFHbkUsNENBQUUsQ0FDekJDLFVBRHVCLENBQ1osVUFEWSxFQUV2QmEsS0FGdUIsQ0FFakIsUUFGaUIsRUFFUCxJQUZPLEVBRURsQiw4Q0FBSSxDQUFDTyxXQUFMLENBQWlCQyxHQUZoQixFQUd2QlcsR0FIdUIsRUFBMUIsQ0FsQkcsQ0F1Qkg7O0FBQ0EsUUFBTXFELGNBQWM7QUFBQSxrTUFBRyxpQkFBT0MsT0FBUCxFQUFnQkMsR0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQ2Y1QyxPQUFPLENBQUNDLEdBQVIsQ0FBWTBDLE9BQVosRUFBcUJyRCxJQUFyQixDQUEwQixVQUFDWSxHQUFELEVBQVM7QUFDdkNBLHFCQUFHLENBQUMsQ0FBRCxDQUFILENBQU9ULE9BQVAsQ0FBZSxVQUFDb0QsS0FBRCxFQUFXO0FBQ3hCWix5QkFBSyxDQUFDYSxNQUFOLENBQWF4RSw0Q0FBRSxDQUFDQyxVQUFILENBQWMsU0FBZCxFQUF5QkMsR0FBekIsQ0FBNkJxRSxLQUFLLENBQUN4RSxFQUFuQyxDQUFiLEVBQXFEO0FBQ25EMkQsK0JBQVMsRUFBRVksR0FBRyxHQUFHQSxHQUFILEdBQVNSLE9BQU8sQ0FBQ1csS0FEb0I7QUFFbkRDLGdDQUFVLEVBQUVoRSxJQUFJLENBQUNzQztBQUZrQyxxQkFBckQ7QUFJRCxtQkFMRDtBQU1BcEIscUJBQUcsQ0FBQyxDQUFELENBQUgsQ0FBT1QsT0FBUCxDQUFlLFVBQUN3RCxJQUFELEVBQVU7QUFDdkJoQix5QkFBSyxDQUFDYSxNQUFOLENBQWF4RSw0Q0FBRSxDQUFDQyxVQUFILENBQWMsVUFBZCxFQUEwQkMsR0FBMUIsQ0FBOEJ5RSxJQUFJLENBQUM1RSxFQUFuQyxDQUFiLEVBQXFEO0FBQ25EMkQsK0JBQVMsRUFBRVksR0FBRyxHQUFHQSxHQUFILEdBQVNSLE9BQU8sQ0FBQ1csS0FEb0I7QUFFbkRDLGdDQUFVLEVBQUVoRSxJQUFJLENBQUNzQztBQUZrQyxxQkFBckQ7QUFJRCxtQkFMRDtBQU1BcEIscUJBQUcsQ0FBQyxDQUFELENBQUgsQ0FBT1QsT0FBUCxDQUFlLFVBQUN5RCxLQUFELEVBQVU7QUFDdkJqQix5QkFBSyxDQUFDYSxNQUFOLENBQWF4RSw0Q0FBRSxDQUFDQyxVQUFILENBQWMsWUFBZCxFQUE0QkMsR0FBNUIsQ0FBZ0MwRSxLQUFJLENBQUM3RSxFQUFyQyxDQUFiLEVBQXVEO0FBQ3JEMkQsK0JBQVMsRUFBRVksR0FBRyxHQUFHQSxHQUFILEdBQVNSLE9BQU8sQ0FBQ1csS0FEc0I7QUFFckRDLGdDQUFVLEVBQUVoRSxJQUFJLENBQUNzQztBQUZvQyxxQkFBdkQ7QUFJRCxtQkFMRDtBQU1BcEIscUJBQUcsQ0FBQyxDQUFELENBQUgsQ0FBT1QsT0FBUCxDQUFlLFVBQUN5RCxNQUFELEVBQVU7QUFDdkJqQix5QkFBSyxDQUFDYSxNQUFOLENBQWF4RSw0Q0FBRSxDQUFDQyxVQUFILENBQWMsVUFBZCxFQUEwQkMsR0FBMUIsQ0FBOEIwRSxNQUFJLENBQUM3RSxFQUFuQyxDQUFiLEVBQXFEO0FBQ25EMkQsK0JBQVMsRUFBRVksR0FBRyxHQUFHQSxHQUFILEdBQVNSLE9BQU8sQ0FBQ1csS0FEb0I7QUFFbkR6Qiw4QkFBUSxFQUFFdEMsSUFBSSxDQUFDc0M7QUFGb0MscUJBQXJEO0FBSUQsbUJBTEQ7QUFNRCxpQkF6QkssQ0FEZTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFIOztBQUFBLHNCQUFkb0IsY0FBYztBQUFBO0FBQUE7QUFBQSxPQUFwQjs7QUE2QkEsUUFBSVIsV0FBSixFQUFpQjtBQUNmaEUsb0RBQUksQ0FBQ08sV0FBTCxDQUNHMEUsNEJBREgsQ0FFSTVCLG9EQUFRLENBQUNyRCxJQUFULENBQWNrRixpQkFBZCxDQUFnQ0MsVUFBaEMsQ0FDRW5GLDhDQUFJLENBQUNPLFdBQUwsQ0FBaUJaLEtBRG5CLEVBRUVzRSxjQUZGLENBRkosRUFPRzdDLElBUEgsQ0FPUSxZQUFNO0FBQ1YsZUFBT3BCLDhDQUFJLENBQUNPLFdBQUwsQ0FBaUI2RSxjQUFqQixDQUFnQ3BCLFdBQWhDLENBQVA7QUFDRCxPQVRILEVBVUc1QyxJQVZILGdNQVVRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFDQSxPQUFPOEMsT0FBTyxDQUFDVyxLQUFmLEtBQXlCLFFBRHpCO0FBQUE7QUFBQTtBQUFBOztBQUVGUSxpRUFBTyxDQUNKQyxHQURILFdBQ1V0Riw4Q0FBSSxDQUFDTyxXQUFMLENBQWlCQyxHQUQzQixjQUNrQzJELFNBRGxDLEdBRUdvQixHQUZILENBRU9yQixPQUFPLENBQUNXLEtBRmYsRUFHR3pELElBSEgsQ0FHUSxZQUFNO0FBQ1YseUJBQU9pRSxpREFBTyxDQUNYQyxHQURJLFdBQ0d0Riw4Q0FBSSxDQUFDTyxXQUFMLENBQWlCQyxHQURwQixjQUMyQjJELFNBRDNCLEdBRUpxQixjQUZJLEVBQVA7QUFHRCxpQkFQSCxFQVFHcEUsSUFSSDtBQUFBLCtNQVFRLGtCQUFPc0QsR0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0pYLGlDQUFLLENBQUNhLE1BQU4sQ0FBYXhFLDRDQUFFLENBQUNDLFVBQUgsQ0FBYyxPQUFkLEVBQXVCQyxHQUF2QixDQUEyQk4sOENBQUksQ0FBQ08sV0FBTCxDQUFpQkMsR0FBNUMsQ0FBYixrQ0FDSzBELE9BREw7QUFFRVcsbUNBQUssRUFBRUg7QUFGVDtBQURJO0FBQUEsbUNBS0VGLGNBQWMsQ0FDbEIsQ0FDRUosZ0JBREYsRUFFRUMsaUJBRkYsRUFHRUMsbUJBSEYsRUFJRUMsaUJBSkYsQ0FEa0IsRUFPbEJHLEdBUGtCLENBTGhCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVJSOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkU7QUFBQTs7QUFBQTtBQTBCRlgscUJBQUssQ0FBQ2EsTUFBTixDQUFheEUsNENBQUUsQ0FBQ0MsVUFBSCxDQUFjLE9BQWQsRUFBdUJDLEdBQXZCLENBQTJCTiw4Q0FBSSxDQUFDTyxXQUFMLENBQWlCQyxHQUE1QyxDQUFiLG9CQUNLMEQsT0FETDtBQTFCRTtBQUFBLHVCQTZCSU0sY0FBYyxDQUNsQixDQUNFSixnQkFERixFQUVFQyxpQkFGRixFQUdFQyxtQkFIRixFQUlFQyxpQkFKRixDQURrQixFQU9sQkcsR0FQa0IsQ0E3QmxCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BVlI7QUFrREQsS0FuREQsTUFtRE87QUFDTCxVQUFJLE9BQU9SLE9BQU8sQ0FBQ1csS0FBZixLQUF5QixRQUE3QixFQUF1QztBQUNyQ1EseURBQU8sQ0FDSkMsR0FESCxXQUNVdEYsOENBQUksQ0FBQ08sV0FBTCxDQUFpQkMsR0FEM0IsY0FDa0MyRCxTQURsQyxHQUVHb0IsR0FGSCxDQUVPckIsT0FBTyxDQUFDVyxLQUZmLEVBR0d6RCxJQUhILENBR1EsWUFBTTtBQUNWLGlCQUFPaUUsaURBQU8sQ0FDWEMsR0FESSxXQUNHdEYsOENBQUksQ0FBQ08sV0FBTCxDQUFpQkMsR0FEcEIsY0FDMkIyRCxTQUQzQixHQUVKcUIsY0FGSSxFQUFQO0FBR0QsU0FQSCxFQVFHcEUsSUFSSDtBQUFBLHVNQVFRLGtCQUFPc0QsR0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0pYLHlCQUFLLENBQUNhLE1BQU4sQ0FBYXhFLDRDQUFFLENBQUNDLFVBQUgsQ0FBYyxPQUFkLEVBQXVCQyxHQUF2QixDQUEyQk4sOENBQUksQ0FBQ08sV0FBTCxDQUFpQkMsR0FBNUMsQ0FBYixrQ0FDSzBELE9BREw7QUFFRVcsMkJBQUssRUFBRUg7QUFGVDtBQURJO0FBQUEsMkJBS0VGLGNBQWMsQ0FDbEIsQ0FDRUosZ0JBREYsRUFFRUMsaUJBRkYsRUFHRUMsbUJBSEYsRUFJRUMsaUJBSkYsQ0FEa0IsRUFPbEJHLEdBUGtCLENBTGhCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBUlI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF1QkQsT0F4QkQsTUF3Qk87QUFDTFgsYUFBSyxDQUFDYSxNQUFOLENBQWF4RSw0Q0FBRSxDQUFDQyxVQUFILENBQWMsT0FBZCxFQUF1QkMsR0FBdkIsQ0FBMkJOLDhDQUFJLENBQUNPLFdBQUwsQ0FBaUJDLEdBQTVDLENBQWIsb0JBQ0swRCxPQURMO0FBR0FNLHNCQUFjLENBQUMsQ0FDYkosZ0JBRGEsRUFFYkMsaUJBRmEsRUFHYkMsbUJBSGEsRUFJYkMsaUJBSmEsQ0FBRCxDQUFkO0FBTUQ7QUFDRjs7QUFDRFIsU0FBSyxDQUFDMEIsTUFBTixHQUFlckUsSUFBZixDQUFvQjtBQUFBLGFBQU10QixPQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaLENBQU47QUFBQSxLQUFwQjtBQUNELEdBaEo0QjtBQUFBLENBQXRCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUvW2lkXS42NTQyYWQxM2U0MjJlYjliYzRkZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGIsIGF1dGgsIHN0b3JhZ2UgfSBmcm9tIFwiLi4vZmJDb25maWdcIjtcclxuaW1wb3J0IHsgdHlwZXMgfSBmcm9tIFwiLi4vLi4vdXRpbHMvY29uc3RhbnRzXCI7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcbmltcG9ydCB7IG1lc3NhZ2UgfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ19pbiA9IChlbWFpbCwgcGFzc3dvcmQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGVtYWlsLCBwYXNzd29yZCk7XHJcbiAgYXV0aC5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFByb2ZpbGUgPSAoaWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKVxyXG4gICAgLmRvYyhpZCA/IGlkIDogYXV0aC5jdXJyZW50VXNlci51aWQpXHJcbiAgICAub25TbmFwc2hvdCgoZG9jKSA9PiB7XHJcbiAgICAgIHJldHVybiBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogdHlwZXMuR0VUX1BST0ZJTEUsXHJcbiAgICAgICAgcGF5bG9hZDogeyBpZDogZG9jLmlkLCAuLi5kb2MuZGF0YSgpIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0RmF2b3JpdGVBdXRob3JzID0gKGlkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBsZXQgYWRkZWRPbjtcclxuICBjb25zdCB1c2VySWQgPSBpZCA/IGlkIDogYXV0aC5jdXJyZW50VXNlci51aWQ7XHJcbiAgZGIuY29sbGVjdGlvbihcInVzZXJzTGlrZXNcIilcclxuICAgIC53aGVyZShcInNlbmRlcklkXCIsIFwiPT1cIiwgdXNlcklkKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigoZG9jcykgPT4ge1xyXG4gICAgICBsZXQgZmF2QXJyID0gW107XHJcbiAgICAgIGRvY3MuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICAgICAgYWRkZWRPbiA9IGRvYy5kYXRhKCkuY3JlYXRlZEF0O1xyXG4gICAgICAgIGZhdkFyciA9IFsuLi5mYXZBcnIsIGRvYy5kYXRhKCkucmVjaXBpZW50XTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBmYXZBcnI7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKHVzZXJzKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHVzZXJzLm1hcCgodXNlcikgPT5cclxuICAgICAgICBkYi5jb2xsZWN0aW9uKFwidXNlcnNcIikuZG9jKHVzZXIpLmdldCgpXHJcbiAgICAgICk7XHJcbiAgICAgIFByb21pc2UuYWxsKHJlc3VsdCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgbGV0IGZhdlVzZXJzID0gW107XHJcbiAgICAgICAgcmVzLmZvckVhY2goXHJcbiAgICAgICAgICAoZG9jKSA9PlxyXG4gICAgICAgICAgICAoZmF2VXNlcnMgPSBbLi4uZmF2VXNlcnMsIHsgYWRkZWRPbiwgaWQ6IGRvYy5pZCwgLi4uZG9jLmRhdGEoKSB9XSlcclxuICAgICAgICApO1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IHR5cGVzLkdFVF9GQVZPUklURV9BVVRIT1JTLFxyXG4gICAgICAgICAgcGF5bG9hZDogZmF2VXNlcnMsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Rm9sbG93ZXJzID0gKGlkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBsZXQgYWRkZWRPbjtcclxuICBjb25zdCB1c2VySWQgPSBpZCA/IGlkIDogYXV0aC5jdXJyZW50VXNlci51aWQ7XHJcbiAgZGIuY29sbGVjdGlvbihcInVzZXJzTGlrZXNcIilcclxuICAgIC53aGVyZShcInJlY2lwaWVudFwiLCBcIj09XCIsIHVzZXJJZClcclxuICAgIC5nZXQoKVxyXG4gICAgLnRoZW4oKGRvY3MpID0+IHtcclxuICAgICAgbGV0IGZhdkFyciA9IFtdO1xyXG4gICAgICBkb2NzLmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgICAgIGFkZGVkT24gPSBkb2MuZGF0YSgpLmNyZWF0ZWRBdDtcclxuICAgICAgICBmYXZBcnIgPSBbLi4uZmF2QXJyLCBkb2MuZGF0YSgpLnNlbmRlcklkXTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBmYXZBcnI7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKHVzZXJzKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHVzZXJzLm1hcCgodXNlcikgPT5cclxuICAgICAgICBkYi5jb2xsZWN0aW9uKFwidXNlcnNcIikuZG9jKHVzZXIpLmdldCgpXHJcbiAgICAgICk7XHJcbiAgICAgIFByb21pc2UuYWxsKHJlc3VsdCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgbGV0IGZhdlVzZXJzID0gW107XHJcbiAgICAgICAgcmVzLmZvckVhY2goXHJcbiAgICAgICAgICAoZG9jKSA9PlxyXG4gICAgICAgICAgICAoZmF2VXNlcnMgPSBbLi4uZmF2VXNlcnMsIHsgYWRkZWRPbiwgaWQ6IGRvYy5pZCwgLi4uZG9jLmRhdGEoKSB9XSlcclxuICAgICAgICApO1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IHR5cGVzLkdFVF9GT0xMT1dFUlMsXHJcbiAgICAgICAgICBwYXlsb2FkOiBmYXZVc2VycyxcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRJc0ZvbGxvd2luZyA9ICh1c2VySWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGlmIChhdXRoLmN1cnJlbnRVc2VyKSB7XHJcbiAgICBkYi5jb2xsZWN0aW9uKFwidXNlcnNMaWtlc1wiKVxyXG4gICAgICAud2hlcmUoXCJyZWNpcGllbnRcIiwgXCI9PVwiLCB1c2VySWQpXHJcbiAgICAgIC53aGVyZShcInNlbmRlcklkXCIsIFwiPT1cIiwgYXV0aC5jdXJyZW50VXNlci51aWQpXHJcbiAgICAgIC5vblNuYXBzaG90KChzbmFwc2hvdCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFuc3dlciA9IHNuYXBzaG90LmRvY3MubGVuZ3RoID4gMCA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICByZXR1cm4gZGlzcGF0Y2goeyB0eXBlOiB0eXBlcy5JU19GT0xMT1dJTkcsIHBheWxvYWQ6IGFuc3dlciB9KTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZvbGxvd1VzZXIgPSAoaWQsIGlzRmF2b3JpdGUsIG5ld0ZvbGxvd2VyKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBpZiAoaXNGYXZvcml0ZSkgcmV0dXJuIG1lc3NhZ2Uud2FybmluZyhcIllvdSBhcmUgYWxyZWFkeSBmb2xsb3dpbmcgdGhpcyB1c2VyXCIpO1xyXG4gIGlmICghYXV0aC5jdXJyZW50VXNlcilcclxuICAgIHJldHVybiBtZXNzYWdlLmVycm9yKFwiWW91IG5lZWQgdG8gYmUgbG9nZ2VkIGluIHRvIGZvbGxvdyB1c2Vyc1wiKTtcclxuICBpZiAoIWF1dGguY3VycmVudFVzZXIuZW1haWxWZXJpZmllZClcclxuICAgIHJldHVybiBtZXNzYWdlLmVycm9yKFwiWW91IG5lZWQgdG8gdmVyaWZ5IHlvdXIgZW1haWwgZmlyc3RcIik7XHJcblxyXG4gIGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc0xpa2VzXCIpXHJcbiAgICAuYWRkKHtcclxuICAgICAgc2VuZGVyOiBuZXdGb2xsb3dlci51c2VybmFtZSxcclxuICAgICAgc2VuZGVySWQ6IG5ld0ZvbGxvd2VyLnVpZCxcclxuICAgICAgcmVjaXBpZW50OiBpZCxcclxuICAgICAgY3JlYXRlZEF0OiBmaXJlYmFzZS5maXJlc3RvcmUuRmllbGRWYWx1ZS5zZXJ2ZXJUaW1lc3RhbXAoKSxcclxuICAgIH0pXHJcbiAgICAudGhlbigoKSA9PiBtZXNzYWdlLnN1Y2Nlc3MoXCJZb3UgYXJlIG5vdyBmb2xsb3dpbmcgdGhpcyB1c2VyXCIpKVxyXG4gICAgLmNhdGNoKChlcnIpID0+IG1lc3NhZ2UuZXJyb3IoXCJUaGVyZSBoYXMgYmVlbiBhIHByb2JsZW1cIikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVuZm9sbG93VXNlciA9IChpZCwgaXNGYXZvcml0ZSkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgaWYgKCFpc0Zhdm9yaXRlKVxyXG4gICAgcmV0dXJuIG1lc3NhZ2Uud2FybmluZyhcIllvdSBhcmUgbm90IGZvbGxvd2luZyB0aGlzIHVzZXIgeWV0XCIpO1xyXG5cclxuICBkYi5jb2xsZWN0aW9uKFwidXNlcnNMaWtlc1wiKVxyXG4gICAgLndoZXJlKFwicmVjaXBpZW50XCIsIFwiPT1cIiwgaWQpXHJcbiAgICAud2hlcmUoXCJzZW5kZXJJZFwiLCBcIj09XCIsIGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGIuY29sbGVjdGlvbihcInVzZXJzTGlrZXNcIikuZG9jKGRhdGEuZG9jc1swXS5pZCkuZGVsZXRlKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKCkgPT4gbWVzc2FnZS5zdWNjZXNzKFwiVXNlciBzdWNjZXNzZnVsbHkgdW5mb2xsb3dlZFwiKSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiBtZXNzYWdlLmVycm9yKFwiVGhlcmUgaGFzIGJlZW4gYSBwcm9ibGVtXCIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjaGFuZ2VQcm9maWxlID0gKGRhdGEsIHNldE9wZW4sIHVzZXJuYW1lLCB1c2VySW1hZ2UpID0+IChcclxuICBkaXNwYXRjaFxyXG4pID0+IHtcclxuICBjb25zdCBiYXRjaCA9IGRiLmJhdGNoKCk7XHJcbiAgY29uc3QgeyBuZXdQYXNzd29yZCwgYWN0dWFsUGFzc3dvcmQsIC4uLm5ld0luZm8gfSA9IGRhdGE7XHJcbiAgY29uc3QgaW1hZ2VOYW1lID0gYCR7YXV0aC5jdXJyZW50VXNlci51aWR9XyR7bmV3SW5mby51c2VybmFtZX1gO1xyXG5cclxuICAvLyBTVE9SSUVTLCBDSEFQVEVSUywgQ0hBUkFDVEVSUyAmIENPTU1FTlRTIFFVRVJJRVNcclxuICBjb25zdCB1c2VyU3Rvcmllc1F1ZXJ5ID0gZGJcclxuICAgIC5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKVxyXG4gICAgLndoZXJlKFwiYXV0aG9ySWRcIiwgXCI9PVwiLCBhdXRoLmN1cnJlbnRVc2VyLnVpZClcclxuICAgIC5nZXQoKTtcclxuICBjb25zdCB1c2VyQ2hhcHRlcnNRdWVyeSA9IGRiXHJcbiAgICAuY29sbGVjdGlvbihcImNoYXB0ZXJzXCIpXHJcbiAgICAud2hlcmUoXCJhdXRob3JJZFwiLCBcIj09XCIsIGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gICAgLmdldCgpO1xyXG4gIGNvbnN0IHVzZXJDaGFyYWN0ZXJzUXVlcnkgPSBkYlxyXG4gICAgLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzXCIpXHJcbiAgICAud2hlcmUoXCJhdXRob3JJZFwiLCBcIj09XCIsIGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gICAgLmdldCgpO1xyXG4gIGNvbnN0IHVzZXJDb21tZW50c1F1ZXJ5ID0gZGJcclxuICAgIC5jb2xsZWN0aW9uKFwiY29tbWVudHNcIilcclxuICAgIC53aGVyZShcInVzZXJJZFwiLCBcIj09XCIsIGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gICAgLmdldCgpO1xyXG5cclxuICAvLyBGVU5DVElPTiBUTyBBQ1RVQUxMWSBVUERBVEUgQUxMIEFGRkVDVEVEIEZJTEVTXHJcbiAgY29uc3QgYmF0Y2hVcGRhdGVBbGwgPSBhc3luYyAocXVlcmllcywgdXJsKSA9PiB7XHJcbiAgICBhd2FpdCBQcm9taXNlLmFsbChxdWVyaWVzKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgcmVzWzBdLmZvckVhY2goKHN0b3J5KSA9PiB7XHJcbiAgICAgICAgYmF0Y2gudXBkYXRlKGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpLmRvYyhzdG9yeS5pZCksIHtcclxuICAgICAgICAgIHVzZXJJbWFnZTogdXJsID8gdXJsIDogbmV3SW5mby5pbWFnZSxcclxuICAgICAgICAgIGF1dGhvck5hbWU6IGRhdGEudXNlcm5hbWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXNbMV0uZm9yRWFjaCgoY2hhcCkgPT4ge1xyXG4gICAgICAgIGJhdGNoLnVwZGF0ZShkYi5jb2xsZWN0aW9uKFwiY2hhcHRlcnNcIikuZG9jKGNoYXAuaWQpLCB7XHJcbiAgICAgICAgICB1c2VySW1hZ2U6IHVybCA/IHVybCA6IG5ld0luZm8uaW1hZ2UsXHJcbiAgICAgICAgICBhdXRob3JOYW1lOiBkYXRhLnVzZXJuYW1lLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgICAgcmVzWzJdLmZvckVhY2goKGNoYXIpID0+IHtcclxuICAgICAgICBiYXRjaC51cGRhdGUoZGIuY29sbGVjdGlvbihcImNoYXJhY3RlcnNcIikuZG9jKGNoYXIuaWQpLCB7XHJcbiAgICAgICAgICB1c2VySW1hZ2U6IHVybCA/IHVybCA6IG5ld0luZm8uaW1hZ2UsXHJcbiAgICAgICAgICBhdXRob3JOYW1lOiBkYXRhLnVzZXJuYW1lLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgICAgcmVzWzNdLmZvckVhY2goKGNoYXIpID0+IHtcclxuICAgICAgICBiYXRjaC51cGRhdGUoZGIuY29sbGVjdGlvbihcImNvbW1lbnRzXCIpLmRvYyhjaGFyLmlkKSwge1xyXG4gICAgICAgICAgdXNlckltYWdlOiB1cmwgPyB1cmwgOiBuZXdJbmZvLmltYWdlLFxyXG4gICAgICAgICAgdXNlcm5hbWU6IGRhdGEudXNlcm5hbWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgaWYgKG5ld1Bhc3N3b3JkKSB7XHJcbiAgICBhdXRoLmN1cnJlbnRVc2VyXHJcbiAgICAgIC5yZWF1dGhlbnRpY2F0ZVdpdGhDcmVkZW50aWFsKFxyXG4gICAgICAgIGZpcmViYXNlLmF1dGguRW1haWxBdXRoUHJvdmlkZXIuY3JlZGVudGlhbChcclxuICAgICAgICAgIGF1dGguY3VycmVudFVzZXIuZW1haWwsXHJcbiAgICAgICAgICBhY3R1YWxQYXNzd29yZFxyXG4gICAgICAgIClcclxuICAgICAgKVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGF1dGguY3VycmVudFVzZXIudXBkYXRlUGFzc3dvcmQobmV3UGFzc3dvcmQpO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBuZXdJbmZvLmltYWdlID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICBzdG9yYWdlXHJcbiAgICAgICAgICAgIC5yZWYoYCR7YXV0aC5jdXJyZW50VXNlci51aWR9LyR7aW1hZ2VOYW1lfWApXHJcbiAgICAgICAgICAgIC5wdXQobmV3SW5mby5pbWFnZSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiBzdG9yYWdlXHJcbiAgICAgICAgICAgICAgICAucmVmKGAke2F1dGguY3VycmVudFVzZXIudWlkfS8ke2ltYWdlTmFtZX1gKVxyXG4gICAgICAgICAgICAgICAgLmdldERvd25sb2FkVVJMKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKGFzeW5jICh1cmwpID0+IHtcclxuICAgICAgICAgICAgICBiYXRjaC51cGRhdGUoZGIuY29sbGVjdGlvbihcInVzZXJzXCIpLmRvYyhhdXRoLmN1cnJlbnRVc2VyLnVpZCksIHtcclxuICAgICAgICAgICAgICAgIC4uLm5ld0luZm8sXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogdXJsLFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIGF3YWl0IGJhdGNoVXBkYXRlQWxsKFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICB1c2VyU3Rvcmllc1F1ZXJ5LFxyXG4gICAgICAgICAgICAgICAgICB1c2VyQ2hhcHRlcnNRdWVyeSxcclxuICAgICAgICAgICAgICAgICAgdXNlckNoYXJhY3RlcnNRdWVyeSxcclxuICAgICAgICAgICAgICAgICAgdXNlckNvbW1lbnRzUXVlcnksXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGJhdGNoLnVwZGF0ZShkYi5jb2xsZWN0aW9uKFwidXNlcnNcIikuZG9jKGF1dGguY3VycmVudFVzZXIudWlkKSwge1xyXG4gICAgICAgICAgICAuLi5uZXdJbmZvLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBhd2FpdCBiYXRjaFVwZGF0ZUFsbChcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgIHVzZXJTdG9yaWVzUXVlcnksXHJcbiAgICAgICAgICAgICAgdXNlckNoYXB0ZXJzUXVlcnksXHJcbiAgICAgICAgICAgICAgdXNlckNoYXJhY3RlcnNRdWVyeSxcclxuICAgICAgICAgICAgICB1c2VyQ29tbWVudHNRdWVyeSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGlmICh0eXBlb2YgbmV3SW5mby5pbWFnZSA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICBzdG9yYWdlXHJcbiAgICAgICAgLnJlZihgJHthdXRoLmN1cnJlbnRVc2VyLnVpZH0vJHtpbWFnZU5hbWV9YClcclxuICAgICAgICAucHV0KG5ld0luZm8uaW1hZ2UpXHJcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHN0b3JhZ2VcclxuICAgICAgICAgICAgLnJlZihgJHthdXRoLmN1cnJlbnRVc2VyLnVpZH0vJHtpbWFnZU5hbWV9YClcclxuICAgICAgICAgICAgLmdldERvd25sb2FkVVJMKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihhc3luYyAodXJsKSA9PiB7XHJcbiAgICAgICAgICBiYXRjaC51cGRhdGUoZGIuY29sbGVjdGlvbihcInVzZXJzXCIpLmRvYyhhdXRoLmN1cnJlbnRVc2VyLnVpZCksIHtcclxuICAgICAgICAgICAgLi4ubmV3SW5mbyxcclxuICAgICAgICAgICAgaW1hZ2U6IHVybCxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgYXdhaXQgYmF0Y2hVcGRhdGVBbGwoXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICB1c2VyU3Rvcmllc1F1ZXJ5LFxyXG4gICAgICAgICAgICAgIHVzZXJDaGFwdGVyc1F1ZXJ5LFxyXG4gICAgICAgICAgICAgIHVzZXJDaGFyYWN0ZXJzUXVlcnksXHJcbiAgICAgICAgICAgICAgdXNlckNvbW1lbnRzUXVlcnksXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGJhdGNoLnVwZGF0ZShkYi5jb2xsZWN0aW9uKFwidXNlcnNcIikuZG9jKGF1dGguY3VycmVudFVzZXIudWlkKSwge1xyXG4gICAgICAgIC4uLm5ld0luZm8sXHJcbiAgICAgIH0pO1xyXG4gICAgICBiYXRjaFVwZGF0ZUFsbChbXHJcbiAgICAgICAgdXNlclN0b3JpZXNRdWVyeSxcclxuICAgICAgICB1c2VyQ2hhcHRlcnNRdWVyeSxcclxuICAgICAgICB1c2VyQ2hhcmFjdGVyc1F1ZXJ5LFxyXG4gICAgICAgIHVzZXJDb21tZW50c1F1ZXJ5LFxyXG4gICAgICBdKTtcclxuICAgIH1cclxuICB9XHJcbiAgYmF0Y2guY29tbWl0KCkudGhlbigoKSA9PiBjb25zb2xlLmxvZyhcImFsbCBnb29kXCIpKTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==