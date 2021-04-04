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
                            console.log("mdp changé et image changé");
                            _fbConfig__WEBPACK_IMPORTED_MODULE_5__["db"].collection("users").doc(_fbConfig__WEBPACK_IMPORTED_MODULE_5__["auth"].currentUser.uid).update(_objectSpread(_objectSpread({}, newInfo), {}, {
                              image: url
                            }));
                            _context2.next = 4;
                            return batchUpdateAll([userStoriesQuery, userChaptersQuery, userCharactersQuery, userCommentsQuery], url);

                          case 4:
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
                _fbConfig__WEBPACK_IMPORTED_MODULE_5__["db"].collection("users").doc(_fbConfig__WEBPACK_IMPORTED_MODULE_5__["auth"].currentUser.uid).update(_objectSpread({}, newInfo));
                _context3.next = 7;
                return batchUpdateAll([userStoriesQuery, userChaptersQuery, userCharactersQuery, userCommentsQuery]);

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))).then(function () {
        setOpen(false);
        antd__WEBPACK_IMPORTED_MODULE_8__["message"].success("Profile updated successfully");
      });
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
                    return _context4.abrupt("return", _fbConfig__WEBPACK_IMPORTED_MODULE_5__["db"].collection("users").doc(_fbConfig__WEBPACK_IMPORTED_MODULE_5__["auth"].currentUser.uid).update(_objectSpread(_objectSpread({}, newInfo), {}, {
                      image: url
                    })).then(function () {
                      return batchUpdateAll([userStoriesQuery, userChaptersQuery, userCharactersQuery, userCommentsQuery], url);
                    }));

                  case 1:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4);
          }));

          return function (_x4) {
            return _ref4.apply(this, arguments);
          };
        }()).then(function () {
          setOpen(false);
          antd__WEBPACK_IMPORTED_MODULE_8__["message"].success("Profile updated successfully");
        });
      } else {
        console.log("mdp pas changé et image pas changé");
        _fbConfig__WEBPACK_IMPORTED_MODULE_5__["db"].collection("users").doc(_fbConfig__WEBPACK_IMPORTED_MODULE_5__["auth"].currentUser.uid).update(_objectSpread({}, newInfo)).then(function () {
          return batchUpdateAll([userStoriesQuery, userChaptersQuery, userCharactersQuery, userCommentsQuery]);
        }).then(function () {
          setOpen(false);
          antd__WEBPACK_IMPORTED_MODULE_8__["message"].success("Profile updated successfully");
        });
      }
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvYWN0aW9ucy91c2VyQWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJsb2dfaW4iLCJlbWFpbCIsInBhc3N3b3JkIiwiZGlzcGF0Y2giLCJjb25zb2xlIiwibG9nIiwiYXV0aCIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwiZ2V0UHJvZmlsZSIsImlkIiwiZGIiLCJjb2xsZWN0aW9uIiwiZG9jIiwiY3VycmVudFVzZXIiLCJ1aWQiLCJvblNuYXBzaG90IiwidHlwZSIsInR5cGVzIiwiR0VUX1BST0ZJTEUiLCJwYXlsb2FkIiwiZGF0YSIsImdldEZhdm9yaXRlQXV0aG9ycyIsImFkZGVkT24iLCJ1c2VySWQiLCJ3aGVyZSIsImdldCIsInRoZW4iLCJkb2NzIiwiZmF2QXJyIiwiZm9yRWFjaCIsImNyZWF0ZWRBdCIsInJlY2lwaWVudCIsInVzZXJzIiwicmVzdWx0IiwibWFwIiwidXNlciIsIlByb21pc2UiLCJhbGwiLCJyZXMiLCJmYXZVc2VycyIsIkdFVF9GQVZPUklURV9BVVRIT1JTIiwiZ2V0Rm9sbG93ZXJzIiwic2VuZGVySWQiLCJHRVRfRk9MTE9XRVJTIiwiZ2V0SXNGb2xsb3dpbmciLCJzbmFwc2hvdCIsImFuc3dlciIsImxlbmd0aCIsIklTX0ZPTExPV0lORyIsImZvbGxvd1VzZXIiLCJpc0Zhdm9yaXRlIiwibmV3Rm9sbG93ZXIiLCJtZXNzYWdlIiwid2FybmluZyIsImVycm9yIiwiZW1haWxWZXJpZmllZCIsImFkZCIsInNlbmRlciIsInVzZXJuYW1lIiwiZmlyZWJhc2UiLCJmaXJlc3RvcmUiLCJGaWVsZFZhbHVlIiwic2VydmVyVGltZXN0YW1wIiwic3VjY2VzcyIsImVyciIsInVuZm9sbG93VXNlciIsImNoYW5nZVByb2ZpbGUiLCJzZXRPcGVuIiwidXNlckltYWdlIiwibmV3UGFzc3dvcmQiLCJhY3R1YWxQYXNzd29yZCIsIm5ld0luZm8iLCJpbWFnZU5hbWUiLCJ1c2VyU3Rvcmllc1F1ZXJ5IiwidXNlckNoYXB0ZXJzUXVlcnkiLCJ1c2VyQ2hhcmFjdGVyc1F1ZXJ5IiwidXNlckNvbW1lbnRzUXVlcnkiLCJiYXRjaFVwZGF0ZUFsbCIsInF1ZXJpZXMiLCJ1cmwiLCJzdG9yeSIsInVwZGF0ZSIsImltYWdlIiwiYXV0aG9yTmFtZSIsImNoYXAiLCJjaGFyIiwiY29tbSIsInJlYXV0aGVudGljYXRlV2l0aENyZWRlbnRpYWwiLCJFbWFpbEF1dGhQcm92aWRlciIsImNyZWRlbnRpYWwiLCJ1cGRhdGVQYXNzd29yZCIsInN0b3JhZ2UiLCJyZWYiLCJwdXQiLCJnZXREb3dubG9hZFVSTCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxLQUFELEVBQVFDLFFBQVI7QUFBQSxTQUFxQixVQUFDQyxRQUFELEVBQWM7QUFDdkRDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSixLQUFaLEVBQW1CQyxRQUFuQjtBQUNBSSxrREFBSSxDQUFDQywwQkFBTCxDQUFnQ04sS0FBaEMsRUFBdUNDLFFBQXZDO0FBQ0QsR0FIcUI7QUFBQSxDQUFmO0FBS0EsSUFBTU0sVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsRUFBRDtBQUFBLFNBQVEsVUFBQ04sUUFBRCxFQUFjO0FBQzlDTyxnREFBRSxDQUFDQyxVQUFILENBQWMsT0FBZCxFQUNHQyxHQURILENBQ09ILEVBQUUsR0FBR0EsRUFBSCxHQUFRSCw4Q0FBSSxDQUFDTyxXQUFMLENBQWlCQyxHQURsQyxFQUVHQyxVQUZILENBRWMsVUFBQ0gsR0FBRCxFQUFTO0FBQ25CLGFBQU9ULFFBQVEsQ0FBQztBQUNkYSxZQUFJLEVBQUVDLHNEQUFLLENBQUNDLFdBREU7QUFFZEMsZUFBTztBQUFJVixZQUFFLEVBQUVHLEdBQUcsQ0FBQ0g7QUFBWixXQUFtQkcsR0FBRyxDQUFDUSxJQUFKLEVBQW5CO0FBRk8sT0FBRCxDQUFmO0FBSUQsS0FQ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QkFBSyxFQUFFSDtBQUxKLHdCQU9KckQsSUFQSSxDQU9DLFlBQU07QUFDViw2QkFBT21ELGNBQWMsQ0FDbkIsQ0FDRUosZ0JBREYsRUFFRUMsaUJBRkYsRUFHRUMsbUJBSEYsRUFJRUMsaUJBSkYsQ0FEbUIsRUFPbkJHLEdBUG1CLENBQXJCO0FBU0QscUJBakJJLENBREg7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FSUjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTRCR3JELElBNUJILENBNEJRLFlBQU07QUFDVnlDLGlCQUFPLENBQUMsS0FBRCxDQUFQO0FBQ0FmLHNEQUFPLENBQUNXLE9BQVIsQ0FBZ0IsOEJBQWhCO0FBQ0QsU0EvQkg7QUFnQ0QsT0FqQ0QsTUFpQ087QUFDTDNELGVBQU8sQ0FBQ0MsR0FBUixDQUFZLG9DQUFaO0FBQ0FLLG9EQUFFLENBQUNDLFVBQUgsQ0FBYyxPQUFkLEVBQ0dDLEdBREgsQ0FDT04sOENBQUksQ0FBQ08sV0FBTCxDQUFpQkMsR0FEeEIsRUFFR21FLE1BRkgsbUJBR09WLE9BSFAsR0FLRzdDLElBTEgsQ0FLUSxZQUFNO0FBQ1YsaUJBQU9tRCxjQUFjLENBQUMsQ0FDcEJKLGdCQURvQixFQUVwQkMsaUJBRm9CLEVBR3BCQyxtQkFIb0IsRUFJcEJDLGlCQUpvQixDQUFELENBQXJCO0FBTUQsU0FaSCxFQWFHbEQsSUFiSCxDQWFRLFlBQU07QUFDVnlDLGlCQUFPLENBQUMsS0FBRCxDQUFQO0FBQ0FmLHNEQUFPLENBQUNXLE9BQVIsQ0FBZ0IsOEJBQWhCO0FBQ0QsU0FoQkg7QUFpQkQ7QUFDRjtBQUNGLEdBOUs0QjtBQUFBLENBQXRCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUvW2lkXS40N2Y1NTk3ZjJhNjllNDZmNTIxMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGIsIGF1dGgsIHN0b3JhZ2UgfSBmcm9tIFwiLi4vZmJDb25maWdcIjtcclxuaW1wb3J0IHsgdHlwZXMgfSBmcm9tIFwiLi4vLi4vdXRpbHMvY29uc3RhbnRzXCI7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcbmltcG9ydCB7IG1lc3NhZ2UgfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ19pbiA9IChlbWFpbCwgcGFzc3dvcmQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGVtYWlsLCBwYXNzd29yZCk7XHJcbiAgYXV0aC5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFByb2ZpbGUgPSAoaWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKVxyXG4gICAgLmRvYyhpZCA/IGlkIDogYXV0aC5jdXJyZW50VXNlci51aWQpXHJcbiAgICAub25TbmFwc2hvdCgoZG9jKSA9PiB7XHJcbiAgICAgIHJldHVybiBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogdHlwZXMuR0VUX1BST0ZJTEUsXHJcbiAgICAgICAgcGF5bG9hZDogeyBpZDogZG9jLmlkLCAuLi5kb2MuZGF0YSgpIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0RmF2b3JpdGVBdXRob3JzID0gKGlkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBsZXQgYWRkZWRPbjtcclxuICBjb25zdCB1c2VySWQgPSBpZCA/IGlkIDogYXV0aC5jdXJyZW50VXNlci51aWQ7XHJcbiAgZGIuY29sbGVjdGlvbihcInVzZXJzTGlrZXNcIilcclxuICAgIC53aGVyZShcInNlbmRlcklkXCIsIFwiPT1cIiwgdXNlcklkKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigoZG9jcykgPT4ge1xyXG4gICAgICBsZXQgZmF2QXJyID0gW107XHJcbiAgICAgIGRvY3MuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICAgICAgYWRkZWRPbiA9IGRvYy5kYXRhKCkuY3JlYXRlZEF0O1xyXG4gICAgICAgIGZhdkFyciA9IFsuLi5mYXZBcnIsIGRvYy5kYXRhKCkucmVjaXBpZW50XTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBmYXZBcnI7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKHVzZXJzKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHVzZXJzLm1hcCgodXNlcikgPT5cclxuICAgICAgICBkYi5jb2xsZWN0aW9uKFwidXNlcnNcIikuZG9jKHVzZXIpLmdldCgpXHJcbiAgICAgICk7XHJcbiAgICAgIFByb21pc2UuYWxsKHJlc3VsdCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgbGV0IGZhdlVzZXJzID0gW107XHJcbiAgICAgICAgcmVzLmZvckVhY2goXHJcbiAgICAgICAgICAoZG9jKSA9PlxyXG4gICAgICAgICAgICAoZmF2VXNlcnMgPSBbLi4uZmF2VXNlcnMsIHsgYWRkZWRPbiwgaWQ6IGRvYy5pZCwgLi4uZG9jLmRhdGEoKSB9XSlcclxuICAgICAgICApO1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IHR5cGVzLkdFVF9GQVZPUklURV9BVVRIT1JTLFxyXG4gICAgICAgICAgcGF5bG9hZDogZmF2VXNlcnMsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Rm9sbG93ZXJzID0gKGlkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBsZXQgYWRkZWRPbjtcclxuICBjb25zdCB1c2VySWQgPSBpZCA/IGlkIDogYXV0aC5jdXJyZW50VXNlci51aWQ7XHJcbiAgZGIuY29sbGVjdGlvbihcInVzZXJzTGlrZXNcIilcclxuICAgIC53aGVyZShcInJlY2lwaWVudFwiLCBcIj09XCIsIHVzZXJJZClcclxuICAgIC5nZXQoKVxyXG4gICAgLnRoZW4oKGRvY3MpID0+IHtcclxuICAgICAgbGV0IGZhdkFyciA9IFtdO1xyXG4gICAgICBkb2NzLmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgICAgIGFkZGVkT24gPSBkb2MuZGF0YSgpLmNyZWF0ZWRBdDtcclxuICAgICAgICBmYXZBcnIgPSBbLi4uZmF2QXJyLCBkb2MuZGF0YSgpLnNlbmRlcklkXTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBmYXZBcnI7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKHVzZXJzKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHVzZXJzLm1hcCgodXNlcikgPT5cclxuICAgICAgICBkYi5jb2xsZWN0aW9uKFwidXNlcnNcIikuZG9jKHVzZXIpLmdldCgpXHJcbiAgICAgICk7XHJcbiAgICAgIFByb21pc2UuYWxsKHJlc3VsdCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgbGV0IGZhdlVzZXJzID0gW107XHJcbiAgICAgICAgcmVzLmZvckVhY2goXHJcbiAgICAgICAgICAoZG9jKSA9PlxyXG4gICAgICAgICAgICAoZmF2VXNlcnMgPSBbLi4uZmF2VXNlcnMsIHsgYWRkZWRPbiwgaWQ6IGRvYy5pZCwgLi4uZG9jLmRhdGEoKSB9XSlcclxuICAgICAgICApO1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IHR5cGVzLkdFVF9GT0xMT1dFUlMsXHJcbiAgICAgICAgICBwYXlsb2FkOiBmYXZVc2VycyxcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRJc0ZvbGxvd2luZyA9ICh1c2VySWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGlmIChhdXRoLmN1cnJlbnRVc2VyKSB7XHJcbiAgICBkYi5jb2xsZWN0aW9uKFwidXNlcnNMaWtlc1wiKVxyXG4gICAgICAud2hlcmUoXCJyZWNpcGllbnRcIiwgXCI9PVwiLCB1c2VySWQpXHJcbiAgICAgIC53aGVyZShcInNlbmRlcklkXCIsIFwiPT1cIiwgYXV0aC5jdXJyZW50VXNlci51aWQpXHJcbiAgICAgIC5vblNuYXBzaG90KChzbmFwc2hvdCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFuc3dlciA9IHNuYXBzaG90LmRvY3MubGVuZ3RoID4gMCA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICByZXR1cm4gZGlzcGF0Y2goeyB0eXBlOiB0eXBlcy5JU19GT0xMT1dJTkcsIHBheWxvYWQ6IGFuc3dlciB9KTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZvbGxvd1VzZXIgPSAoaWQsIGlzRmF2b3JpdGUsIG5ld0ZvbGxvd2VyKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBpZiAoaXNGYXZvcml0ZSkgcmV0dXJuIG1lc3NhZ2Uud2FybmluZyhcIllvdSBhcmUgYWxyZWFkeSBmb2xsb3dpbmcgdGhpcyB1c2VyXCIpO1xyXG4gIGlmICghYXV0aC5jdXJyZW50VXNlcilcclxuICAgIHJldHVybiBtZXNzYWdlLmVycm9yKFwiWW91IG5lZWQgdG8gYmUgbG9nZ2VkIGluIHRvIGZvbGxvdyB1c2Vyc1wiKTtcclxuICBpZiAoIWF1dGguY3VycmVudFVzZXIuZW1haWxWZXJpZmllZClcclxuICAgIHJldHVybiBtZXNzYWdlLmVycm9yKFwiWW91IG5lZWQgdG8gdmVyaWZ5IHlvdXIgZW1haWwgZmlyc3RcIik7XHJcblxyXG4gIGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc0xpa2VzXCIpXHJcbiAgICAuYWRkKHtcclxuICAgICAgc2VuZGVyOiBuZXdGb2xsb3dlci51c2VybmFtZSxcclxuICAgICAgc2VuZGVySWQ6IG5ld0ZvbGxvd2VyLnVpZCxcclxuICAgICAgcmVjaXBpZW50OiBpZCxcclxuICAgICAgY3JlYXRlZEF0OiBmaXJlYmFzZS5maXJlc3RvcmUuRmllbGRWYWx1ZS5zZXJ2ZXJUaW1lc3RhbXAoKSxcclxuICAgIH0pXHJcbiAgICAudGhlbigoKSA9PiBtZXNzYWdlLnN1Y2Nlc3MoXCJZb3UgYXJlIG5vdyBmb2xsb3dpbmcgdGhpcyB1c2VyXCIpKVxyXG4gICAgLmNhdGNoKChlcnIpID0+IG1lc3NhZ2UuZXJyb3IoXCJUaGVyZSBoYXMgYmVlbiBhIHByb2JsZW1cIikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVuZm9sbG93VXNlciA9IChpZCwgaXNGYXZvcml0ZSkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgaWYgKCFpc0Zhdm9yaXRlKVxyXG4gICAgcmV0dXJuIG1lc3NhZ2Uud2FybmluZyhcIllvdSBhcmUgbm90IGZvbGxvd2luZyB0aGlzIHVzZXIgeWV0XCIpO1xyXG5cclxuICBkYi5jb2xsZWN0aW9uKFwidXNlcnNMaWtlc1wiKVxyXG4gICAgLndoZXJlKFwicmVjaXBpZW50XCIsIFwiPT1cIiwgaWQpXHJcbiAgICAud2hlcmUoXCJzZW5kZXJJZFwiLCBcIj09XCIsIGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGIuY29sbGVjdGlvbihcInVzZXJzTGlrZXNcIikuZG9jKGRhdGEuZG9jc1swXS5pZCkuZGVsZXRlKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKCkgPT4gbWVzc2FnZS5zdWNjZXNzKFwiVXNlciBzdWNjZXNzZnVsbHkgdW5mb2xsb3dlZFwiKSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiBtZXNzYWdlLmVycm9yKFwiVGhlcmUgaGFzIGJlZW4gYSBwcm9ibGVtXCIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjaGFuZ2VQcm9maWxlID0gKGRhdGEsIHNldE9wZW4sIHVzZXJuYW1lLCB1c2VySW1hZ2UpID0+IChcclxuICBkaXNwYXRjaFxyXG4pID0+IHtcclxuICBjb25zdCB7IG5ld1Bhc3N3b3JkLCBhY3R1YWxQYXNzd29yZCwgLi4ubmV3SW5mbyB9ID0gZGF0YTtcclxuICBjb25zdCBpbWFnZU5hbWUgPSBgJHthdXRoLmN1cnJlbnRVc2VyLnVpZH1fJHtuZXdJbmZvLnVzZXJuYW1lfWA7XHJcblxyXG4gIC8vIFNUT1JJRVMsIENIQVBURVJTLCBDSEFSQUNURVJTICYgQ09NTUVOVFMgUVVFUklFU1xyXG4gIGNvbnN0IHVzZXJTdG9yaWVzUXVlcnkgPSBkYlxyXG4gICAgLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpXHJcbiAgICAud2hlcmUoXCJhdXRob3JJZFwiLCBcIj09XCIsIGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gICAgLmdldCgpO1xyXG4gIGNvbnN0IHVzZXJDaGFwdGVyc1F1ZXJ5ID0gZGJcclxuICAgIC5jb2xsZWN0aW9uKFwiY2hhcHRlcnNcIilcclxuICAgIC53aGVyZShcImF1dGhvcklkXCIsIFwiPT1cIiwgYXV0aC5jdXJyZW50VXNlci51aWQpXHJcbiAgICAuZ2V0KCk7XHJcbiAgY29uc3QgdXNlckNoYXJhY3RlcnNRdWVyeSA9IGRiXHJcbiAgICAuY29sbGVjdGlvbihcImNoYXJhY3RlcnNcIilcclxuICAgIC53aGVyZShcImF1dGhvcklkXCIsIFwiPT1cIiwgYXV0aC5jdXJyZW50VXNlci51aWQpXHJcbiAgICAuZ2V0KCk7XHJcbiAgY29uc3QgdXNlckNvbW1lbnRzUXVlcnkgPSBkYlxyXG4gICAgLmNvbGxlY3Rpb24oXCJjb21tZW50c1wiKVxyXG4gICAgLndoZXJlKFwidXNlcklkXCIsIFwiPT1cIiwgYXV0aC5jdXJyZW50VXNlci51aWQpXHJcbiAgICAuZ2V0KCk7XHJcblxyXG4gIC8vIEZVTkNUSU9OIFRPIEFDVFVBTExZIFVQREFURSBBTEwgQUZGRUNURUQgRklMRVNcclxuICBjb25zdCBiYXRjaFVwZGF0ZUFsbCA9IGFzeW5jIChxdWVyaWVzLCB1cmwpID0+IHtcclxuICAgIGF3YWl0IFByb21pc2UuYWxsKHF1ZXJpZXMpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICByZXNbMF0uZm9yRWFjaCgoc3RvcnkpID0+IHtcclxuICAgICAgICBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKVxyXG4gICAgICAgICAgLmRvYyhzdG9yeS5pZClcclxuICAgICAgICAgIC51cGRhdGUoe1xyXG4gICAgICAgICAgICB1c2VySW1hZ2U6IHVybCA/IHVybCA6IG5ld0luZm8uaW1hZ2UsXHJcbiAgICAgICAgICAgIGF1dGhvck5hbWU6IGRhdGEudXNlcm5hbWUsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJlc1sxXS5mb3JFYWNoKChjaGFwKSA9PiB7XHJcbiAgICAgICAgZGIuY29sbGVjdGlvbihcImNoYXB0ZXJzXCIpXHJcbiAgICAgICAgICAuZG9jKGNoYXAuaWQpXHJcbiAgICAgICAgICAudXBkYXRlKHtcclxuICAgICAgICAgICAgdXNlckltYWdlOiB1cmwgPyB1cmwgOiBuZXdJbmZvLmltYWdlLFxyXG4gICAgICAgICAgICBhdXRob3JOYW1lOiBkYXRhLnVzZXJuYW1lLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXNbMl0uZm9yRWFjaCgoY2hhcikgPT4ge1xyXG4gICAgICAgIGRiLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzXCIpXHJcbiAgICAgICAgICAuZG9jKGNoYXIuaWQpXHJcbiAgICAgICAgICAudXBkYXRlKHtcclxuICAgICAgICAgICAgdXNlckltYWdlOiB1cmwgPyB1cmwgOiBuZXdJbmZvLmltYWdlLFxyXG4gICAgICAgICAgICBhdXRob3JOYW1lOiBkYXRhLnVzZXJuYW1lLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXNbM10uZm9yRWFjaCgoY29tbSkgPT4ge1xyXG4gICAgICAgIGRiLmNvbGxlY3Rpb24oXCJjb21tZW50c1wiKVxyXG4gICAgICAgICAgLmRvYyhjb21tLmlkKVxyXG4gICAgICAgICAgLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgIHVzZXJJbWFnZTogdXJsID8gdXJsIDogbmV3SW5mby5pbWFnZSxcclxuICAgICAgICAgICAgYXV0aG9yTmFtZTogZGF0YS51c2VybmFtZSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGlmIChuZXdQYXNzd29yZCkge1xyXG4gICAgYXV0aC5jdXJyZW50VXNlclxyXG4gICAgICAucmVhdXRoZW50aWNhdGVXaXRoQ3JlZGVudGlhbChcclxuICAgICAgICBmaXJlYmFzZS5hdXRoLkVtYWlsQXV0aFByb3ZpZGVyLmNyZWRlbnRpYWwoXHJcbiAgICAgICAgICBhdXRoLmN1cnJlbnRVc2VyLmVtYWlsLFxyXG4gICAgICAgICAgYWN0dWFsUGFzc3dvcmRcclxuICAgICAgICApXHJcbiAgICAgIClcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBhdXRoLmN1cnJlbnRVc2VyLnVwZGF0ZVBhc3N3b3JkKG5ld1Bhc3N3b3JkKTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGlmICh0eXBlb2YgbmV3SW5mby5pbWFnZSA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgc3RvcmFnZVxyXG4gICAgICAgICAgICAucmVmKGAke2F1dGguY3VycmVudFVzZXIudWlkfS8ke2ltYWdlTmFtZX1gKVxyXG4gICAgICAgICAgICAucHV0KG5ld0luZm8uaW1hZ2UpXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gc3RvcmFnZVxyXG4gICAgICAgICAgICAgICAgLnJlZihgJHthdXRoLmN1cnJlbnRVc2VyLnVpZH0vJHtpbWFnZU5hbWV9YClcclxuICAgICAgICAgICAgICAgIC5nZXREb3dubG9hZFVSTCgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihhc3luYyAodXJsKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJtZHAgY2hhbmfDqSBldCBpbWFnZSBjaGFuZ8OpXCIpO1xyXG4gICAgICAgICAgICAgIGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKVxyXG4gICAgICAgICAgICAgICAgLmRvYyhhdXRoLmN1cnJlbnRVc2VyLnVpZClcclxuICAgICAgICAgICAgICAgIC51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAuLi5uZXdJbmZvLFxyXG4gICAgICAgICAgICAgICAgICBpbWFnZTogdXJsLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgYXdhaXQgYmF0Y2hVcGRhdGVBbGwoXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgIHVzZXJTdG9yaWVzUXVlcnksXHJcbiAgICAgICAgICAgICAgICAgIHVzZXJDaGFwdGVyc1F1ZXJ5LFxyXG4gICAgICAgICAgICAgICAgICB1c2VyQ2hhcmFjdGVyc1F1ZXJ5LFxyXG4gICAgICAgICAgICAgICAgICB1c2VyQ29tbWVudHNRdWVyeSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICB1cmxcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZGIuY29sbGVjdGlvbihcInVzZXJzXCIpXHJcbiAgICAgICAgICAgIC5kb2MoYXV0aC5jdXJyZW50VXNlci51aWQpXHJcbiAgICAgICAgICAgIC51cGRhdGUoe1xyXG4gICAgICAgICAgICAgIC4uLm5ld0luZm8sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgYXdhaXQgYmF0Y2hVcGRhdGVBbGwoW1xyXG4gICAgICAgICAgICB1c2VyU3Rvcmllc1F1ZXJ5LFxyXG4gICAgICAgICAgICB1c2VyQ2hhcHRlcnNRdWVyeSxcclxuICAgICAgICAgICAgdXNlckNoYXJhY3RlcnNRdWVyeSxcclxuICAgICAgICAgICAgdXNlckNvbW1lbnRzUXVlcnksXHJcbiAgICAgICAgICBdKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICBzZXRPcGVuKGZhbHNlKTtcclxuICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoXCJQcm9maWxlIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5XCIpO1xyXG4gICAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgaWYgKHR5cGVvZiBuZXdJbmZvLmltYWdlID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgIHN0b3JhZ2VcclxuICAgICAgICAucmVmKGAke2F1dGguY3VycmVudFVzZXIudWlkfS8ke2ltYWdlTmFtZX1gKVxyXG4gICAgICAgIC5wdXQobmV3SW5mby5pbWFnZSlcclxuICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gc3RvcmFnZVxyXG4gICAgICAgICAgICAucmVmKGAke2F1dGguY3VycmVudFVzZXIudWlkfS8ke2ltYWdlTmFtZX1gKVxyXG4gICAgICAgICAgICAuZ2V0RG93bmxvYWRVUkwoKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKGFzeW5jICh1cmwpID0+IHtcclxuICAgICAgICAgIHJldHVybiBkYlxyXG4gICAgICAgICAgICAuY29sbGVjdGlvbihcInVzZXJzXCIpXHJcbiAgICAgICAgICAgIC5kb2MoYXV0aC5jdXJyZW50VXNlci51aWQpXHJcbiAgICAgICAgICAgIC51cGRhdGUoe1xyXG4gICAgICAgICAgICAgIC4uLm5ld0luZm8sXHJcbiAgICAgICAgICAgICAgaW1hZ2U6IHVybCxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiBiYXRjaFVwZGF0ZUFsbChcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgdXNlclN0b3JpZXNRdWVyeSxcclxuICAgICAgICAgICAgICAgICAgdXNlckNoYXB0ZXJzUXVlcnksXHJcbiAgICAgICAgICAgICAgICAgIHVzZXJDaGFyYWN0ZXJzUXVlcnksXHJcbiAgICAgICAgICAgICAgICAgIHVzZXJDb21tZW50c1F1ZXJ5LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoXCJQcm9maWxlIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5XCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coXCJtZHAgcGFzIGNoYW5nw6kgZXQgaW1hZ2UgcGFzIGNoYW5nw6lcIik7XHJcbiAgICAgIGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKVxyXG4gICAgICAgIC5kb2MoYXV0aC5jdXJyZW50VXNlci51aWQpXHJcbiAgICAgICAgLnVwZGF0ZSh7XHJcbiAgICAgICAgICAuLi5uZXdJbmZvLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIGJhdGNoVXBkYXRlQWxsKFtcclxuICAgICAgICAgICAgdXNlclN0b3JpZXNRdWVyeSxcclxuICAgICAgICAgICAgdXNlckNoYXB0ZXJzUXVlcnksXHJcbiAgICAgICAgICAgIHVzZXJDaGFyYWN0ZXJzUXVlcnksXHJcbiAgICAgICAgICAgIHVzZXJDb21tZW50c1F1ZXJ5LFxyXG4gICAgICAgICAgXSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICBzZXRPcGVuKGZhbHNlKTtcclxuICAgICAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhcIlByb2ZpbGUgdXBkYXRlZCBzdWNjZXNzZnVsbHlcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9