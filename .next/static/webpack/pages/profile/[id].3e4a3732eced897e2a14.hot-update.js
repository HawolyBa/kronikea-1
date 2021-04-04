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
                    _fbConfig__WEBPACK_IMPORTED_MODULE_5__["db"].collection("stories").doc(story.id).update({
                      userImage: url ? url : newInfo.image,
                      authorName: data.username
                    });
                  });
                  res[1].forEach(function (chap) {
                    _fbConfig__WEBPACK_IMPORTED_MODULE_5__["db"].collection("chapters").doc(chap.id).update({
                      userImage: url ? url : newInfo.image,
                      authorName: data.username
                    });
                  });
                  res[2].forEach(function (_char) {
                    _fbConfig__WEBPACK_IMPORTED_MODULE_5__["db"].collection("characters").doc(_char.id).update({
                      userImage: url ? url : newInfo.image,
                      authorName: data.username
                    });
                  });
                  res[3].forEach(function (comm) {
                    _fbConfig__WEBPACK_IMPORTED_MODULE_5__["db"].collection("comments").doc(comm.id).update({
                      userImage: url ? url : newInfo.image,
                      authorName: data.username
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
                            _fbConfig__WEBPACK_IMPORTED_MODULE_5__["db"].collection("users").doc(_fbConfig__WEBPACK_IMPORTED_MODULE_5__["auth"].currentUser.uid).update({
                              newInfo: newInfo,
                              image: url
                            });
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
                _fbConfig__WEBPACK_IMPORTED_MODULE_5__["db"].collection("users").doc(_fbConfig__WEBPACK_IMPORTED_MODULE_5__["auth"].currentUser.uid).update({
                  newInfo: newInfo
                });
                _context3.next = 7;
                return batchUpdateAll([userStoriesQuery, userChaptersQuery, userCharactersQuery, userCommentsQuery]);

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
                    _fbConfig__WEBPACK_IMPORTED_MODULE_5__["db"].collection("users").doc(_fbConfig__WEBPACK_IMPORTED_MODULE_5__["auth"].currentUser.uid).update({
                      newInfo: newInfo,
                      image: url
                    });
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
        _fbConfig__WEBPACK_IMPORTED_MODULE_5__["db"].collection("users").doc(_fbConfig__WEBPACK_IMPORTED_MODULE_5__["auth"].currentUser.uid).update({
          newInfo: newInfo
        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvYWN0aW9ucy91c2VyQWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJsb2dfaW4iLCJlbWFpbCIsInBhc3N3b3JkIiwiZGlzcGF0Y2giLCJjb25zb2xlIiwibG9nIiwiYXV0aCIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwiZ2V0UHJvZmlsZSIsImlkIiwiZGIiLCJjb2xsZWN0aW9uIiwiZG9jIiwiY3VycmVudFVzZXIiLCJ1aWQiLCJvblNuYXBzaG90IiwidHlwZSIsInR5cGVzIiwiR0VUX1BST0ZJTEUiLCJwYXlsb2FkIiwiZGF0YSIsImdldEZhdm9yaXRlQXV0aG9ycyIsImFkZGVkT24iLCJ1c2VySWQiLCJ3aGVyZSIsImdldCIsInRoZW4iLCJkb2NzIiwiZmF2QXJyIiwiZm9yRWFjaCIsImNyZWF0ZWRBdCIsInJlY2lwaWVudCIsInVzZXJzIiwicmVzdWx0IiwibWFwIiwidXNlciIsIlByb21pc2UiLCJhbGwiLCJyZXMiLCJmYXZVc2VycyIsIkdFVF9GQVZPUklURV9BVVRIT1JTIiwiZ2V0Rm9sbG93ZXJzIiwic2VuZGVySWQiLCJHRVRfRk9MTE9XRVJTIiwiZ2V0SXNGb2xsb3dpbmciLCJzbmFwc2hvdCIsImFuc3dlciIsImxlbmd0aCIsIklTX0ZPTExPV0lORyIsImZvbGxvd1VzZXIiLCJpc0Zhdm9yaXRlIiwibmV3Rm9sbG93ZXIiLCJtZXNzYWdlIiwid2FybmluZyIsImVycm9yIiwiZW1haWxWZXJpZmllZCIsImFkZCIsInNlbmRlciIsInVzZXJuYW1lIiwiZmlyZWJhc2UiLCJmaXJlc3RvcmUiLCJGaWVsZFZhbHVlIiwic2VydmVyVGltZXN0YW1wIiwic3VjY2VzcyIsImVyciIsInVuZm9sbG93VXNlciIsImNoYW5nZVByb2ZpbGUiLCJzZXRPcGVuIiwidXNlckltYWdlIiwiYmF0Y2giLCJuZXdQYXNzd29yZCIsImFjdHVhbFBhc3N3b3JkIiwibmV3SW5mbyIsImltYWdlTmFtZSIsInVzZXJTdG9yaWVzUXVlcnkiLCJ1c2VyQ2hhcHRlcnNRdWVyeSIsInVzZXJDaGFyYWN0ZXJzUXVlcnkiLCJ1c2VyQ29tbWVudHNRdWVyeSIsImJhdGNoVXBkYXRlQWxsIiwicXVlcmllcyIsInVybCIsInN0b3J5IiwidXBkYXRlIiwiaW1hZ2UiLCJhdXRob3JOYW1lIiwiY2hhcCIsImNoYXIiLCJjb21tIiwicmVhdXRoZW50aWNhdGVXaXRoQ3JlZGVudGlhbCIsIkVtYWlsQXV0aFByb3ZpZGVyIiwiY3JlZGVudGlhbCIsInVwZGF0ZVBhc3N3b3JkIiwic3RvcmFnZSIsInJlZiIsInB1dCIsImdldERvd25sb2FkVVJMIiwiY29tbWl0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEtBQUQsRUFBUUMsUUFBUjtBQUFBLFNBQXFCLFVBQUNDLFFBQUQsRUFBYztBQUN2REMsV0FBTyxDQUFDQyxHQUFSLENBQVlKLEtBQVosRUFBbUJDLFFBQW5CO0FBQ0FJLGtEQUFJLENBQUNDLDBCQUFMLENBQWdDTixLQUFoQyxFQUF1Q0MsUUFBdkM7QUFDRCxHQUhxQjtBQUFBLENBQWY7QUFLQSxJQUFNTSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxFQUFEO0FBQUEsU0FBUSxVQUFDTixRQUFELEVBQWM7QUFDOUNPLGdEQUFFLENBQUNDLFVBQUgsQ0FBYyxPQUFkLEVBQ0dDLEdBREgsQ0FDT0gsRUFBRSxHQUFHQSxFQUFILEdBQVFILDhDQUFJLENBQUNPLFdBQUwsQ0FBaUJDLEdBRGxDLEVBRUdDLFVBRkgsQ0FFYyxVQUFDSCxHQUFELEVBQVM7QUFDbkIsYUFBT1QsUUFBUSxDQUFDO0FBQ2RhLFlBQUksRUFBRUMsc0RBQUssQ0FBQ0MsV0FERTtBQUVkQyxlQUFPO0FBQUlWLFlBQUUsRUFBRUcsR0FBRyxDQUFDSDtBQUFaLFdBQW1CRyxHQUFHLENBQUNRLElBQUosRUFBbkI7QUFGTyxP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LE9BRHNEO0FBRXREVywyQkFBSyxFQUFFSDtBQUYrQyxxQkFBeEQ7QUFESTtBQUFBLDJCQUtFRixjQUFjLENBQ2xCLENBQ0VKLGdCQURGLEVBRUVDLGlCQUZGLEVBR0VDLG1CQUhGLEVBSUVDLGlCQUpGLENBRGtCLEVBT2xCRyxHQVBrQixDQUxoQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQVJSOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBdUJELE9BeEJELE1Bd0JPO0FBQ0x0RSxvREFBRSxDQUFDQyxVQUFILENBQWMsT0FBZCxFQUF1QkMsR0FBdkIsQ0FBMkJOLDhDQUFJLENBQUNPLFdBQUwsQ0FBaUJDLEdBQTVDLEVBQWlEb0UsTUFBakQsQ0FBd0Q7QUFDdERWLGlCQUFPLEVBQVBBO0FBRHNELFNBQXhEO0FBR0FNLHNCQUFjLENBQUMsQ0FDYkosZ0JBRGEsRUFFYkMsaUJBRmEsRUFHYkMsbUJBSGEsRUFJYkMsaUJBSmEsQ0FBRCxDQUFkO0FBTUQ7QUFDRjs7QUFDRFIsU0FBSyxDQUFDMkIsTUFBTixHQUFldEUsSUFBZixDQUFvQjtBQUFBLGFBQU10QixPQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaLENBQU47QUFBQSxLQUFwQjtBQUNELEdBcko0QjtBQUFBLENBQXRCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUvW2lkXS4zZTRhMzczMmVjZWQ4OTdlMmExNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGIsIGF1dGgsIHN0b3JhZ2UgfSBmcm9tIFwiLi4vZmJDb25maWdcIjtcclxuaW1wb3J0IHsgdHlwZXMgfSBmcm9tIFwiLi4vLi4vdXRpbHMvY29uc3RhbnRzXCI7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcbmltcG9ydCB7IG1lc3NhZ2UgfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ19pbiA9IChlbWFpbCwgcGFzc3dvcmQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGVtYWlsLCBwYXNzd29yZCk7XHJcbiAgYXV0aC5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFByb2ZpbGUgPSAoaWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKVxyXG4gICAgLmRvYyhpZCA/IGlkIDogYXV0aC5jdXJyZW50VXNlci51aWQpXHJcbiAgICAub25TbmFwc2hvdCgoZG9jKSA9PiB7XHJcbiAgICAgIHJldHVybiBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogdHlwZXMuR0VUX1BST0ZJTEUsXHJcbiAgICAgICAgcGF5bG9hZDogeyBpZDogZG9jLmlkLCAuLi5kb2MuZGF0YSgpIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0RmF2b3JpdGVBdXRob3JzID0gKGlkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBsZXQgYWRkZWRPbjtcclxuICBjb25zdCB1c2VySWQgPSBpZCA/IGlkIDogYXV0aC5jdXJyZW50VXNlci51aWQ7XHJcbiAgZGIuY29sbGVjdGlvbihcInVzZXJzTGlrZXNcIilcclxuICAgIC53aGVyZShcInNlbmRlcklkXCIsIFwiPT1cIiwgdXNlcklkKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigoZG9jcykgPT4ge1xyXG4gICAgICBsZXQgZmF2QXJyID0gW107XHJcbiAgICAgIGRvY3MuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICAgICAgYWRkZWRPbiA9IGRvYy5kYXRhKCkuY3JlYXRlZEF0O1xyXG4gICAgICAgIGZhdkFyciA9IFsuLi5mYXZBcnIsIGRvYy5kYXRhKCkucmVjaXBpZW50XTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBmYXZBcnI7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKHVzZXJzKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHVzZXJzLm1hcCgodXNlcikgPT5cclxuICAgICAgICBkYi5jb2xsZWN0aW9uKFwidXNlcnNcIikuZG9jKHVzZXIpLmdldCgpXHJcbiAgICAgICk7XHJcbiAgICAgIFByb21pc2UuYWxsKHJlc3VsdCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgbGV0IGZhdlVzZXJzID0gW107XHJcbiAgICAgICAgcmVzLmZvckVhY2goXHJcbiAgICAgICAgICAoZG9jKSA9PlxyXG4gICAgICAgICAgICAoZmF2VXNlcnMgPSBbLi4uZmF2VXNlcnMsIHsgYWRkZWRPbiwgaWQ6IGRvYy5pZCwgLi4uZG9jLmRhdGEoKSB9XSlcclxuICAgICAgICApO1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IHR5cGVzLkdFVF9GQVZPUklURV9BVVRIT1JTLFxyXG4gICAgICAgICAgcGF5bG9hZDogZmF2VXNlcnMsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Rm9sbG93ZXJzID0gKGlkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBsZXQgYWRkZWRPbjtcclxuICBjb25zdCB1c2VySWQgPSBpZCA/IGlkIDogYXV0aC5jdXJyZW50VXNlci51aWQ7XHJcbiAgZGIuY29sbGVjdGlvbihcInVzZXJzTGlrZXNcIilcclxuICAgIC53aGVyZShcInJlY2lwaWVudFwiLCBcIj09XCIsIHVzZXJJZClcclxuICAgIC5nZXQoKVxyXG4gICAgLnRoZW4oKGRvY3MpID0+IHtcclxuICAgICAgbGV0IGZhdkFyciA9IFtdO1xyXG4gICAgICBkb2NzLmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgICAgIGFkZGVkT24gPSBkb2MuZGF0YSgpLmNyZWF0ZWRBdDtcclxuICAgICAgICBmYXZBcnIgPSBbLi4uZmF2QXJyLCBkb2MuZGF0YSgpLnNlbmRlcklkXTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBmYXZBcnI7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKHVzZXJzKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHVzZXJzLm1hcCgodXNlcikgPT5cclxuICAgICAgICBkYi5jb2xsZWN0aW9uKFwidXNlcnNcIikuZG9jKHVzZXIpLmdldCgpXHJcbiAgICAgICk7XHJcbiAgICAgIFByb21pc2UuYWxsKHJlc3VsdCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgbGV0IGZhdlVzZXJzID0gW107XHJcbiAgICAgICAgcmVzLmZvckVhY2goXHJcbiAgICAgICAgICAoZG9jKSA9PlxyXG4gICAgICAgICAgICAoZmF2VXNlcnMgPSBbLi4uZmF2VXNlcnMsIHsgYWRkZWRPbiwgaWQ6IGRvYy5pZCwgLi4uZG9jLmRhdGEoKSB9XSlcclxuICAgICAgICApO1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IHR5cGVzLkdFVF9GT0xMT1dFUlMsXHJcbiAgICAgICAgICBwYXlsb2FkOiBmYXZVc2VycyxcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRJc0ZvbGxvd2luZyA9ICh1c2VySWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGlmIChhdXRoLmN1cnJlbnRVc2VyKSB7XHJcbiAgICBkYi5jb2xsZWN0aW9uKFwidXNlcnNMaWtlc1wiKVxyXG4gICAgICAud2hlcmUoXCJyZWNpcGllbnRcIiwgXCI9PVwiLCB1c2VySWQpXHJcbiAgICAgIC53aGVyZShcInNlbmRlcklkXCIsIFwiPT1cIiwgYXV0aC5jdXJyZW50VXNlci51aWQpXHJcbiAgICAgIC5vblNuYXBzaG90KChzbmFwc2hvdCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFuc3dlciA9IHNuYXBzaG90LmRvY3MubGVuZ3RoID4gMCA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICByZXR1cm4gZGlzcGF0Y2goeyB0eXBlOiB0eXBlcy5JU19GT0xMT1dJTkcsIHBheWxvYWQ6IGFuc3dlciB9KTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZvbGxvd1VzZXIgPSAoaWQsIGlzRmF2b3JpdGUsIG5ld0ZvbGxvd2VyKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBpZiAoaXNGYXZvcml0ZSkgcmV0dXJuIG1lc3NhZ2Uud2FybmluZyhcIllvdSBhcmUgYWxyZWFkeSBmb2xsb3dpbmcgdGhpcyB1c2VyXCIpO1xyXG4gIGlmICghYXV0aC5jdXJyZW50VXNlcilcclxuICAgIHJldHVybiBtZXNzYWdlLmVycm9yKFwiWW91IG5lZWQgdG8gYmUgbG9nZ2VkIGluIHRvIGZvbGxvdyB1c2Vyc1wiKTtcclxuICBpZiAoIWF1dGguY3VycmVudFVzZXIuZW1haWxWZXJpZmllZClcclxuICAgIHJldHVybiBtZXNzYWdlLmVycm9yKFwiWW91IG5lZWQgdG8gdmVyaWZ5IHlvdXIgZW1haWwgZmlyc3RcIik7XHJcblxyXG4gIGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc0xpa2VzXCIpXHJcbiAgICAuYWRkKHtcclxuICAgICAgc2VuZGVyOiBuZXdGb2xsb3dlci51c2VybmFtZSxcclxuICAgICAgc2VuZGVySWQ6IG5ld0ZvbGxvd2VyLnVpZCxcclxuICAgICAgcmVjaXBpZW50OiBpZCxcclxuICAgICAgY3JlYXRlZEF0OiBmaXJlYmFzZS5maXJlc3RvcmUuRmllbGRWYWx1ZS5zZXJ2ZXJUaW1lc3RhbXAoKSxcclxuICAgIH0pXHJcbiAgICAudGhlbigoKSA9PiBtZXNzYWdlLnN1Y2Nlc3MoXCJZb3UgYXJlIG5vdyBmb2xsb3dpbmcgdGhpcyB1c2VyXCIpKVxyXG4gICAgLmNhdGNoKChlcnIpID0+IG1lc3NhZ2UuZXJyb3IoXCJUaGVyZSBoYXMgYmVlbiBhIHByb2JsZW1cIikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVuZm9sbG93VXNlciA9IChpZCwgaXNGYXZvcml0ZSkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgaWYgKCFpc0Zhdm9yaXRlKVxyXG4gICAgcmV0dXJuIG1lc3NhZ2Uud2FybmluZyhcIllvdSBhcmUgbm90IGZvbGxvd2luZyB0aGlzIHVzZXIgeWV0XCIpO1xyXG5cclxuICBkYi5jb2xsZWN0aW9uKFwidXNlcnNMaWtlc1wiKVxyXG4gICAgLndoZXJlKFwicmVjaXBpZW50XCIsIFwiPT1cIiwgaWQpXHJcbiAgICAud2hlcmUoXCJzZW5kZXJJZFwiLCBcIj09XCIsIGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGIuY29sbGVjdGlvbihcInVzZXJzTGlrZXNcIikuZG9jKGRhdGEuZG9jc1swXS5pZCkuZGVsZXRlKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKCkgPT4gbWVzc2FnZS5zdWNjZXNzKFwiVXNlciBzdWNjZXNzZnVsbHkgdW5mb2xsb3dlZFwiKSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiBtZXNzYWdlLmVycm9yKFwiVGhlcmUgaGFzIGJlZW4gYSBwcm9ibGVtXCIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjaGFuZ2VQcm9maWxlID0gKGRhdGEsIHNldE9wZW4sIHVzZXJuYW1lLCB1c2VySW1hZ2UpID0+IChcclxuICBkaXNwYXRjaFxyXG4pID0+IHtcclxuICBjb25zdCBiYXRjaCA9IGRiLmJhdGNoKCk7XHJcbiAgY29uc3QgeyBuZXdQYXNzd29yZCwgYWN0dWFsUGFzc3dvcmQsIC4uLm5ld0luZm8gfSA9IGRhdGE7XHJcbiAgY29uc3QgaW1hZ2VOYW1lID0gYCR7YXV0aC5jdXJyZW50VXNlci51aWR9XyR7bmV3SW5mby51c2VybmFtZX1gO1xyXG5cclxuICAvLyBTVE9SSUVTLCBDSEFQVEVSUywgQ0hBUkFDVEVSUyAmIENPTU1FTlRTIFFVRVJJRVNcclxuICBjb25zdCB1c2VyU3Rvcmllc1F1ZXJ5ID0gZGJcclxuICAgIC5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKVxyXG4gICAgLndoZXJlKFwiYXV0aG9ySWRcIiwgXCI9PVwiLCBhdXRoLmN1cnJlbnRVc2VyLnVpZClcclxuICAgIC5nZXQoKTtcclxuICBjb25zdCB1c2VyQ2hhcHRlcnNRdWVyeSA9IGRiXHJcbiAgICAuY29sbGVjdGlvbihcImNoYXB0ZXJzXCIpXHJcbiAgICAud2hlcmUoXCJhdXRob3JJZFwiLCBcIj09XCIsIGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gICAgLmdldCgpO1xyXG4gIGNvbnN0IHVzZXJDaGFyYWN0ZXJzUXVlcnkgPSBkYlxyXG4gICAgLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzXCIpXHJcbiAgICAud2hlcmUoXCJhdXRob3JJZFwiLCBcIj09XCIsIGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gICAgLmdldCgpO1xyXG4gIGNvbnN0IHVzZXJDb21tZW50c1F1ZXJ5ID0gZGJcclxuICAgIC5jb2xsZWN0aW9uKFwiY29tbWVudHNcIilcclxuICAgIC53aGVyZShcInVzZXJJZFwiLCBcIj09XCIsIGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gICAgLmdldCgpO1xyXG5cclxuICAvLyBGVU5DVElPTiBUTyBBQ1RVQUxMWSBVUERBVEUgQUxMIEFGRkVDVEVEIEZJTEVTXHJcbiAgY29uc3QgYmF0Y2hVcGRhdGVBbGwgPSBhc3luYyAocXVlcmllcywgdXJsKSA9PiB7XHJcbiAgICBhd2FpdCBQcm9taXNlLmFsbChxdWVyaWVzKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgcmVzWzBdLmZvckVhY2goKHN0b3J5KSA9PiB7XHJcbiAgICAgICAgZGIuY29sbGVjdGlvbihcInN0b3JpZXNcIilcclxuICAgICAgICAgIC5kb2Moc3RvcnkuaWQpXHJcbiAgICAgICAgICAudXBkYXRlKHtcclxuICAgICAgICAgICAgdXNlckltYWdlOiB1cmwgPyB1cmwgOiBuZXdJbmZvLmltYWdlLFxyXG4gICAgICAgICAgICBhdXRob3JOYW1lOiBkYXRhLnVzZXJuYW1lLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXNbMV0uZm9yRWFjaCgoY2hhcCkgPT4ge1xyXG4gICAgICAgIGRiLmNvbGxlY3Rpb24oXCJjaGFwdGVyc1wiKVxyXG4gICAgICAgICAgLmRvYyhjaGFwLmlkKVxyXG4gICAgICAgICAgLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgIHVzZXJJbWFnZTogdXJsID8gdXJsIDogbmV3SW5mby5pbWFnZSxcclxuICAgICAgICAgICAgYXV0aG9yTmFtZTogZGF0YS51c2VybmFtZSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgICAgcmVzWzJdLmZvckVhY2goKGNoYXIpID0+IHtcclxuICAgICAgICBkYi5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc1wiKVxyXG4gICAgICAgICAgLmRvYyhjaGFyLmlkKVxyXG4gICAgICAgICAgLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgIHVzZXJJbWFnZTogdXJsID8gdXJsIDogbmV3SW5mby5pbWFnZSxcclxuICAgICAgICAgICAgYXV0aG9yTmFtZTogZGF0YS51c2VybmFtZSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgICAgcmVzWzNdLmZvckVhY2goKGNvbW0pID0+IHtcclxuICAgICAgICBkYi5jb2xsZWN0aW9uKFwiY29tbWVudHNcIilcclxuICAgICAgICAgIC5kb2MoY29tbS5pZClcclxuICAgICAgICAgIC51cGRhdGUoe1xyXG4gICAgICAgICAgICB1c2VySW1hZ2U6IHVybCA/IHVybCA6IG5ld0luZm8uaW1hZ2UsXHJcbiAgICAgICAgICAgIGF1dGhvck5hbWU6IGRhdGEudXNlcm5hbWUsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBpZiAobmV3UGFzc3dvcmQpIHtcclxuICAgIGF1dGguY3VycmVudFVzZXJcclxuICAgICAgLnJlYXV0aGVudGljYXRlV2l0aENyZWRlbnRpYWwoXHJcbiAgICAgICAgZmlyZWJhc2UuYXV0aC5FbWFpbEF1dGhQcm92aWRlci5jcmVkZW50aWFsKFxyXG4gICAgICAgICAgYXV0aC5jdXJyZW50VXNlci5lbWFpbCxcclxuICAgICAgICAgIGFjdHVhbFBhc3N3b3JkXHJcbiAgICAgICAgKVxyXG4gICAgICApXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICByZXR1cm4gYXV0aC5jdXJyZW50VXNlci51cGRhdGVQYXNzd29yZChuZXdQYXNzd29yZCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKGFzeW5jICgpID0+IHtcclxuICAgICAgICBpZiAodHlwZW9mIG5ld0luZm8uaW1hZ2UgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgIHN0b3JhZ2VcclxuICAgICAgICAgICAgLnJlZihgJHthdXRoLmN1cnJlbnRVc2VyLnVpZH0vJHtpbWFnZU5hbWV9YClcclxuICAgICAgICAgICAgLnB1dChuZXdJbmZvLmltYWdlKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHN0b3JhZ2VcclxuICAgICAgICAgICAgICAgIC5yZWYoYCR7YXV0aC5jdXJyZW50VXNlci51aWR9LyR7aW1hZ2VOYW1lfWApXHJcbiAgICAgICAgICAgICAgICAuZ2V0RG93bmxvYWRVUkwoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oYXN5bmMgKHVybCkgPT4ge1xyXG4gICAgICAgICAgICAgIGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKS5kb2MoYXV0aC5jdXJyZW50VXNlci51aWQpLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBuZXdJbmZvLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHVybCxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICBhd2FpdCBiYXRjaFVwZGF0ZUFsbChcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgdXNlclN0b3JpZXNRdWVyeSxcclxuICAgICAgICAgICAgICAgICAgdXNlckNoYXB0ZXJzUXVlcnksXHJcbiAgICAgICAgICAgICAgICAgIHVzZXJDaGFyYWN0ZXJzUXVlcnksXHJcbiAgICAgICAgICAgICAgICAgIHVzZXJDb21tZW50c1F1ZXJ5LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBkYi5jb2xsZWN0aW9uKFwidXNlcnNcIikuZG9jKGF1dGguY3VycmVudFVzZXIudWlkKS51cGRhdGUoe1xyXG4gICAgICAgICAgICBuZXdJbmZvLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBhd2FpdCBiYXRjaFVwZGF0ZUFsbChbXHJcbiAgICAgICAgICAgIHVzZXJTdG9yaWVzUXVlcnksXHJcbiAgICAgICAgICAgIHVzZXJDaGFwdGVyc1F1ZXJ5LFxyXG4gICAgICAgICAgICB1c2VyQ2hhcmFjdGVyc1F1ZXJ5LFxyXG4gICAgICAgICAgICB1c2VyQ29tbWVudHNRdWVyeSxcclxuICAgICAgICAgIF0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGlmICh0eXBlb2YgbmV3SW5mby5pbWFnZSA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICBzdG9yYWdlXHJcbiAgICAgICAgLnJlZihgJHthdXRoLmN1cnJlbnRVc2VyLnVpZH0vJHtpbWFnZU5hbWV9YClcclxuICAgICAgICAucHV0KG5ld0luZm8uaW1hZ2UpXHJcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHN0b3JhZ2VcclxuICAgICAgICAgICAgLnJlZihgJHthdXRoLmN1cnJlbnRVc2VyLnVpZH0vJHtpbWFnZU5hbWV9YClcclxuICAgICAgICAgICAgLmdldERvd25sb2FkVVJMKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihhc3luYyAodXJsKSA9PiB7XHJcbiAgICAgICAgICBkYi5jb2xsZWN0aW9uKFwidXNlcnNcIikuZG9jKGF1dGguY3VycmVudFVzZXIudWlkKS51cGRhdGUoe1xyXG4gICAgICAgICAgICBuZXdJbmZvLFxyXG4gICAgICAgICAgICBpbWFnZTogdXJsLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBhd2FpdCBiYXRjaFVwZGF0ZUFsbChcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgIHVzZXJTdG9yaWVzUXVlcnksXHJcbiAgICAgICAgICAgICAgdXNlckNoYXB0ZXJzUXVlcnksXHJcbiAgICAgICAgICAgICAgdXNlckNoYXJhY3RlcnNRdWVyeSxcclxuICAgICAgICAgICAgICB1c2VyQ29tbWVudHNRdWVyeSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGIuY29sbGVjdGlvbihcInVzZXJzXCIpLmRvYyhhdXRoLmN1cnJlbnRVc2VyLnVpZCkudXBkYXRlKHtcclxuICAgICAgICBuZXdJbmZvLFxyXG4gICAgICB9KTtcclxuICAgICAgYmF0Y2hVcGRhdGVBbGwoW1xyXG4gICAgICAgIHVzZXJTdG9yaWVzUXVlcnksXHJcbiAgICAgICAgdXNlckNoYXB0ZXJzUXVlcnksXHJcbiAgICAgICAgdXNlckNoYXJhY3RlcnNRdWVyeSxcclxuICAgICAgICB1c2VyQ29tbWVudHNRdWVyeSxcclxuICAgICAgXSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGJhdGNoLmNvbW1pdCgpLnRoZW4oKCkgPT4gY29uc29sZS5sb2coXCJhbGwgZ29vZFwiKSk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=