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
                            _fbConfig__WEBPACK_IMPORTED_MODULE_5__["db"].collection("users").doc(_fbConfig__WEBPACK_IMPORTED_MODULE_5__["auth"].currentUser.uid).update({
                              newInfo: newInfo,
                              image: url
                            });
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
                _context3.next = 8;
                break;

              case 4:
                console.log("mdp changé et image pas changé");
                _fbConfig__WEBPACK_IMPORTED_MODULE_5__["db"].collection("users").doc(_fbConfig__WEBPACK_IMPORTED_MODULE_5__["auth"].currentUser.uid).update({
                  newInfo: newInfo
                });
                _context3.next = 8;
                return batchUpdateAll([userStoriesQuery, userChaptersQuery, userCharactersQuery, userCommentsQuery]);

              case 8:
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
                    console.log("mdp pas changé et image changé");
                    _fbConfig__WEBPACK_IMPORTED_MODULE_5__["db"].collection("users").doc(_fbConfig__WEBPACK_IMPORTED_MODULE_5__["auth"].currentUser.uid).update({
                      newInfo: newInfo,
                      image: url
                    });
                    _context4.next = 4;
                    return batchUpdateAll([userStoriesQuery, userChaptersQuery, userCharactersQuery, userCommentsQuery], url);

                  case 4:
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
        console.log("mdp pas changé et image pas changé");
        _fbConfig__WEBPACK_IMPORTED_MODULE_5__["db"].collection("users").doc(_fbConfig__WEBPACK_IMPORTED_MODULE_5__["auth"].currentUser.uid).update({
          newInfo: newInfo
        });
        batchUpdateAll([userStoriesQuery, userChaptersQuery, userCharactersQuery, userCommentsQuery]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvYWN0aW9ucy91c2VyQWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJsb2dfaW4iLCJlbWFpbCIsInBhc3N3b3JkIiwiZGlzcGF0Y2giLCJjb25zb2xlIiwibG9nIiwiYXV0aCIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwiZ2V0UHJvZmlsZSIsImlkIiwiZGIiLCJjb2xsZWN0aW9uIiwiZG9jIiwiY3VycmVudFVzZXIiLCJ1aWQiLCJvblNuYXBzaG90IiwidHlwZSIsInR5cGVzIiwiR0VUX1BST0ZJTEUiLCJwYXlsb2FkIiwiZGF0YSIsImdldEZhdm9yaXRlQXV0aG9ycyIsImFkZGVkT24iLCJ1c2VySWQiLCJ3aGVyZSIsImdldCIsInRoZW4iLCJkb2NzIiwiZmF2QXJyIiwiZm9yRWFjaCIsImNyZWF0ZWRBdCIsInJlY2lwaWVudCIsInVzZXJzIiwicmVzdWx0IiwibWFwIiwidXNlciIsIlByb21pc2UiLCJhbGwiLCJyZXMiLCJmYXZVc2VycyIsIkdFVF9GQVZPUklURV9BVVRIT1JTIiwiZ2V0Rm9sbG93ZXJzIiwic2VuZGVySWQiLCJHRVRfRk9MTE9XRVJTIiwiZ2V0SXNGb2xsb3dpbmciLCJzbmFwc2hvdCIsImFuc3dlciIsImxlbmd0aCIsIklTX0ZPTExPV0lORyIsImZvbGxvd1VzZXIiLCJpc0Zhdm9yaXRlIiwibmV3Rm9sbG93ZXIiLCJtZXNzYWdlIiwid2FybmluZyIsImVycm9yIiwiZW1haWxWZXJpZmllZCIsImFkZCIsInNlbmRlciIsInVzZXJuYW1lIiwiZmlyZWJhc2UiLCJmaXJlc3RvcmUiLCJGaWVsZFZhbHVlIiwic2VydmVyVGltZXN0YW1wIiwic3VjY2VzcyIsImVyciIsInVuZm9sbG93VXNlciIsImNoYW5nZVByb2ZpbGUiLCJzZXRPcGVuIiwidXNlckltYWdlIiwibmV3UGFzc3dvcmQiLCJhY3R1YWxQYXNzd29yZCIsIm5ld0luZm8iLCJpbWFnZU5hbWUiLCJ1c2VyU3Rvcmllc1F1ZXJ5IiwidXNlckNoYXB0ZXJzUXVlcnkiLCJ1c2VyQ2hhcmFjdGVyc1F1ZXJ5IiwidXNlckNvbW1lbnRzUXVlcnkiLCJiYXRjaFVwZGF0ZUFsbCIsInF1ZXJpZXMiLCJ1cmwiLCJzdG9yeSIsInVwZGF0ZSIsImltYWdlIiwiYXV0aG9yTmFtZSIsImNoYXAiLCJjaGFyIiwiY29tbSIsInJlYXV0aGVudGljYXRlV2l0aENyZWRlbnRpYWwiLCJFbWFpbEF1dGhQcm92aWRlciIsImNyZWRlbnRpYWwiLCJ1cGRhdGVQYXNzd29yZCIsInN0b3JhZ2UiLCJyZWYiLCJwdXQiLCJnZXREb3dubG9hZFVSTCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxLQUFELEVBQVFDLFFBQVI7QUFBQSxTQUFxQixVQUFDQyxRQUFELEVBQWM7QUFDdkRDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSixLQUFaLEVBQW1CQyxRQUFuQjtBQUNBSSxrREFBSSxDQUFDQywwQkFBTCxDQUFnQ04sS0FBaEMsRUFBdUNDLFFBQXZDO0FBQ0QsR0FIcUI7QUFBQSxDQUFmO0FBS0EsSUFBTU0sVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsRUFBRDtBQUFBLFNBQVEsVUFBQ04sUUFBRCxFQUFjO0FBQzlDTyxnREFBRSxDQUFDQyxVQUFILENBQWMsT0FBZCxFQUNHQyxHQURILENBQ09ILEVBQUUsR0FBR0EsRUFBSCxHQUFRSCw4Q0FBSSxDQUFDTyxXQUFMLENBQWlCQyxHQURsQyxFQUVHQyxVQUZILENBRWMsVUFBQ0gsR0FBRCxFQUFTO0FBQ25CLGFBQU9ULFFBQVEsQ0FBQztBQUNkYSxZQUFJLEVBQUVDLHNEQUFLLENBQUNDLFdBREU7QUFFZEMsZUFBTztBQUFJVixZQUFFLEVBQUVHLEdBQUcsQ0FBQ0g7QUFBWixXQUFtQkcsR0FBRyxDQUFDUSxJQUFKLEVBQW5CO0FBRk8sT0FBRCxDQUFmO0FBSUQsS0FQ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QUFpRG1FLE1BQWpELENBQXdEO0FBQ3REViw2QkFBTyxFQUFQQSxPQURzRDtBQUV0RFcsMkJBQUssRUFBRUg7QUFGK0MscUJBQXhEO0FBRkk7QUFBQSwyQkFNRUYsY0FBYyxDQUNsQixDQUNFSixnQkFERixFQUVFQyxpQkFGRixFQUdFQyxtQkFIRixFQUlFQyxpQkFKRixDQURrQixFQU9sQkcsR0FQa0IsQ0FOaEI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FSUjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXdCRCxPQXpCRCxNQXlCTztBQUNMM0UsZUFBTyxDQUFDQyxHQUFSLENBQVksb0NBQVo7QUFDQUssb0RBQUUsQ0FBQ0MsVUFBSCxDQUFjLE9BQWQsRUFBdUJDLEdBQXZCLENBQTJCTiw4Q0FBSSxDQUFDTyxXQUFMLENBQWlCQyxHQUE1QyxFQUFpRG1FLE1BQWpELENBQXdEO0FBQ3REVixpQkFBTyxFQUFQQTtBQURzRCxTQUF4RDtBQUdBTSxzQkFBYyxDQUFDLENBQ2JKLGdCQURhLEVBRWJDLGlCQUZhLEVBR2JDLG1CQUhhLEVBSWJDLGlCQUphLENBQUQsQ0FBZDtBQU1EO0FBQ0Y7QUFDRixHQXZKNEI7QUFBQSxDQUF0QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlL1tpZF0uYzVjYjdmMjE0ZGQxODFjZDZmMzcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRiLCBhdXRoLCBzdG9yYWdlIH0gZnJvbSBcIi4uL2ZiQ29uZmlnXCI7XHJcbmltcG9ydCB7IHR5cGVzIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlL2FwcFwiO1xyXG5pbXBvcnQgeyBtZXNzYWdlIH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dfaW4gPSAoZW1haWwsIHBhc3N3b3JkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBjb25zb2xlLmxvZyhlbWFpbCwgcGFzc3dvcmQpO1xyXG4gIGF1dGguc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRQcm9maWxlID0gKGlkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkYi5jb2xsZWN0aW9uKFwidXNlcnNcIilcclxuICAgIC5kb2MoaWQgPyBpZCA6IGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gICAgLm9uU25hcHNob3QoKGRvYykgPT4ge1xyXG4gICAgICByZXR1cm4gZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IHR5cGVzLkdFVF9QUk9GSUxFLFxyXG4gICAgICAgIHBheWxvYWQ6IHsgaWQ6IGRvYy5pZCwgLi4uZG9jLmRhdGEoKSB9LFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEZhdm9yaXRlQXV0aG9ycyA9IChpZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgbGV0IGFkZGVkT247XHJcbiAgY29uc3QgdXNlcklkID0gaWQgPyBpZCA6IGF1dGguY3VycmVudFVzZXIudWlkO1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc0xpa2VzXCIpXHJcbiAgICAud2hlcmUoXCJzZW5kZXJJZFwiLCBcIj09XCIsIHVzZXJJZClcclxuICAgIC5nZXQoKVxyXG4gICAgLnRoZW4oKGRvY3MpID0+IHtcclxuICAgICAgbGV0IGZhdkFyciA9IFtdO1xyXG4gICAgICBkb2NzLmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgICAgIGFkZGVkT24gPSBkb2MuZGF0YSgpLmNyZWF0ZWRBdDtcclxuICAgICAgICBmYXZBcnIgPSBbLi4uZmF2QXJyLCBkb2MuZGF0YSgpLnJlY2lwaWVudF07XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gZmF2QXJyO1xyXG4gICAgfSlcclxuICAgIC50aGVuKCh1c2VycykgPT4ge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSB1c2Vycy5tYXAoKHVzZXIpID0+XHJcbiAgICAgICAgZGIuY29sbGVjdGlvbihcInVzZXJzXCIpLmRvYyh1c2VyKS5nZXQoKVxyXG4gICAgICApO1xyXG4gICAgICBQcm9taXNlLmFsbChyZXN1bHQpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGxldCBmYXZVc2VycyA9IFtdO1xyXG4gICAgICAgIHJlcy5mb3JFYWNoKFxyXG4gICAgICAgICAgKGRvYykgPT5cclxuICAgICAgICAgICAgKGZhdlVzZXJzID0gWy4uLmZhdlVzZXJzLCB7IGFkZGVkT24sIGlkOiBkb2MuaWQsIC4uLmRvYy5kYXRhKCkgfV0pXHJcbiAgICAgICAgKTtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiB0eXBlcy5HRVRfRkFWT1JJVEVfQVVUSE9SUyxcclxuICAgICAgICAgIHBheWxvYWQ6IGZhdlVzZXJzLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEZvbGxvd2VycyA9IChpZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgbGV0IGFkZGVkT247XHJcbiAgY29uc3QgdXNlcklkID0gaWQgPyBpZCA6IGF1dGguY3VycmVudFVzZXIudWlkO1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc0xpa2VzXCIpXHJcbiAgICAud2hlcmUoXCJyZWNpcGllbnRcIiwgXCI9PVwiLCB1c2VySWQpXHJcbiAgICAuZ2V0KClcclxuICAgIC50aGVuKChkb2NzKSA9PiB7XHJcbiAgICAgIGxldCBmYXZBcnIgPSBbXTtcclxuICAgICAgZG9jcy5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgICAgICBhZGRlZE9uID0gZG9jLmRhdGEoKS5jcmVhdGVkQXQ7XHJcbiAgICAgICAgZmF2QXJyID0gWy4uLmZhdkFyciwgZG9jLmRhdGEoKS5zZW5kZXJJZF07XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gZmF2QXJyO1xyXG4gICAgfSlcclxuICAgIC50aGVuKCh1c2VycykgPT4ge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSB1c2Vycy5tYXAoKHVzZXIpID0+XHJcbiAgICAgICAgZGIuY29sbGVjdGlvbihcInVzZXJzXCIpLmRvYyh1c2VyKS5nZXQoKVxyXG4gICAgICApO1xyXG4gICAgICBQcm9taXNlLmFsbChyZXN1bHQpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGxldCBmYXZVc2VycyA9IFtdO1xyXG4gICAgICAgIHJlcy5mb3JFYWNoKFxyXG4gICAgICAgICAgKGRvYykgPT5cclxuICAgICAgICAgICAgKGZhdlVzZXJzID0gWy4uLmZhdlVzZXJzLCB7IGFkZGVkT24sIGlkOiBkb2MuaWQsIC4uLmRvYy5kYXRhKCkgfV0pXHJcbiAgICAgICAgKTtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiB0eXBlcy5HRVRfRk9MTE9XRVJTLFxyXG4gICAgICAgICAgcGF5bG9hZDogZmF2VXNlcnMsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0SXNGb2xsb3dpbmcgPSAodXNlcklkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBpZiAoYXV0aC5jdXJyZW50VXNlcikge1xyXG4gICAgZGIuY29sbGVjdGlvbihcInVzZXJzTGlrZXNcIilcclxuICAgICAgLndoZXJlKFwicmVjaXBpZW50XCIsIFwiPT1cIiwgdXNlcklkKVxyXG4gICAgICAud2hlcmUoXCJzZW5kZXJJZFwiLCBcIj09XCIsIGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gICAgICAub25TbmFwc2hvdCgoc25hcHNob3QpID0+IHtcclxuICAgICAgICBjb25zdCBhbnN3ZXIgPSBzbmFwc2hvdC5kb2NzLmxlbmd0aCA+IDAgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogdHlwZXMuSVNfRk9MTE9XSU5HLCBwYXlsb2FkOiBhbnN3ZXIgfSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBmb2xsb3dVc2VyID0gKGlkLCBpc0Zhdm9yaXRlLCBuZXdGb2xsb3dlcikgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgaWYgKGlzRmF2b3JpdGUpIHJldHVybiBtZXNzYWdlLndhcm5pbmcoXCJZb3UgYXJlIGFscmVhZHkgZm9sbG93aW5nIHRoaXMgdXNlclwiKTtcclxuICBpZiAoIWF1dGguY3VycmVudFVzZXIpXHJcbiAgICByZXR1cm4gbWVzc2FnZS5lcnJvcihcIllvdSBuZWVkIHRvIGJlIGxvZ2dlZCBpbiB0byBmb2xsb3cgdXNlcnNcIik7XHJcbiAgaWYgKCFhdXRoLmN1cnJlbnRVc2VyLmVtYWlsVmVyaWZpZWQpXHJcbiAgICByZXR1cm4gbWVzc2FnZS5lcnJvcihcIllvdSBuZWVkIHRvIHZlcmlmeSB5b3VyIGVtYWlsIGZpcnN0XCIpO1xyXG5cclxuICBkYi5jb2xsZWN0aW9uKFwidXNlcnNMaWtlc1wiKVxyXG4gICAgLmFkZCh7XHJcbiAgICAgIHNlbmRlcjogbmV3Rm9sbG93ZXIudXNlcm5hbWUsXHJcbiAgICAgIHNlbmRlcklkOiBuZXdGb2xsb3dlci51aWQsXHJcbiAgICAgIHJlY2lwaWVudDogaWQsXHJcbiAgICAgIGNyZWF0ZWRBdDogZmlyZWJhc2UuZmlyZXN0b3JlLkZpZWxkVmFsdWUuc2VydmVyVGltZXN0YW1wKCksXHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKCkgPT4gbWVzc2FnZS5zdWNjZXNzKFwiWW91IGFyZSBub3cgZm9sbG93aW5nIHRoaXMgdXNlclwiKSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiBtZXNzYWdlLmVycm9yKFwiVGhlcmUgaGFzIGJlZW4gYSBwcm9ibGVtXCIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1bmZvbGxvd1VzZXIgPSAoaWQsIGlzRmF2b3JpdGUpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGlmICghaXNGYXZvcml0ZSlcclxuICAgIHJldHVybiBtZXNzYWdlLndhcm5pbmcoXCJZb3UgYXJlIG5vdCBmb2xsb3dpbmcgdGhpcyB1c2VyIHlldFwiKTtcclxuXHJcbiAgZGIuY29sbGVjdGlvbihcInVzZXJzTGlrZXNcIilcclxuICAgIC53aGVyZShcInJlY2lwaWVudFwiLCBcIj09XCIsIGlkKVxyXG4gICAgLndoZXJlKFwic2VuZGVySWRcIiwgXCI9PVwiLCBhdXRoLmN1cnJlbnRVc2VyLnVpZClcclxuICAgIC5nZXQoKVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc0xpa2VzXCIpLmRvYyhkYXRhLmRvY3NbMF0uaWQpLmRlbGV0ZSgpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKCgpID0+IG1lc3NhZ2Uuc3VjY2VzcyhcIlVzZXIgc3VjY2Vzc2Z1bGx5IHVuZm9sbG93ZWRcIikpXHJcbiAgICAuY2F0Y2goKGVycikgPT4gbWVzc2FnZS5lcnJvcihcIlRoZXJlIGhhcyBiZWVuIGEgcHJvYmxlbVwiKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY2hhbmdlUHJvZmlsZSA9IChkYXRhLCBzZXRPcGVuLCB1c2VybmFtZSwgdXNlckltYWdlKSA9PiAoXHJcbiAgZGlzcGF0Y2hcclxuKSA9PiB7XHJcbiAgY29uc3QgeyBuZXdQYXNzd29yZCwgYWN0dWFsUGFzc3dvcmQsIC4uLm5ld0luZm8gfSA9IGRhdGE7XHJcbiAgY29uc3QgaW1hZ2VOYW1lID0gYCR7YXV0aC5jdXJyZW50VXNlci51aWR9XyR7bmV3SW5mby51c2VybmFtZX1gO1xyXG5cclxuICAvLyBTVE9SSUVTLCBDSEFQVEVSUywgQ0hBUkFDVEVSUyAmIENPTU1FTlRTIFFVRVJJRVNcclxuICBjb25zdCB1c2VyU3Rvcmllc1F1ZXJ5ID0gZGJcclxuICAgIC5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKVxyXG4gICAgLndoZXJlKFwiYXV0aG9ySWRcIiwgXCI9PVwiLCBhdXRoLmN1cnJlbnRVc2VyLnVpZClcclxuICAgIC5nZXQoKTtcclxuICBjb25zdCB1c2VyQ2hhcHRlcnNRdWVyeSA9IGRiXHJcbiAgICAuY29sbGVjdGlvbihcImNoYXB0ZXJzXCIpXHJcbiAgICAud2hlcmUoXCJhdXRob3JJZFwiLCBcIj09XCIsIGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gICAgLmdldCgpO1xyXG4gIGNvbnN0IHVzZXJDaGFyYWN0ZXJzUXVlcnkgPSBkYlxyXG4gICAgLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzXCIpXHJcbiAgICAud2hlcmUoXCJhdXRob3JJZFwiLCBcIj09XCIsIGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gICAgLmdldCgpO1xyXG4gIGNvbnN0IHVzZXJDb21tZW50c1F1ZXJ5ID0gZGJcclxuICAgIC5jb2xsZWN0aW9uKFwiY29tbWVudHNcIilcclxuICAgIC53aGVyZShcInVzZXJJZFwiLCBcIj09XCIsIGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gICAgLmdldCgpO1xyXG5cclxuICAvLyBGVU5DVElPTiBUTyBBQ1RVQUxMWSBVUERBVEUgQUxMIEFGRkVDVEVEIEZJTEVTXHJcbiAgY29uc3QgYmF0Y2hVcGRhdGVBbGwgPSBhc3luYyAocXVlcmllcywgdXJsKSA9PiB7XHJcbiAgICBhd2FpdCBQcm9taXNlLmFsbChxdWVyaWVzKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgcmVzWzBdLmZvckVhY2goKHN0b3J5KSA9PiB7XHJcbiAgICAgICAgZGIuY29sbGVjdGlvbihcInN0b3JpZXNcIilcclxuICAgICAgICAgIC5kb2Moc3RvcnkuaWQpXHJcbiAgICAgICAgICAudXBkYXRlKHtcclxuICAgICAgICAgICAgdXNlckltYWdlOiB1cmwgPyB1cmwgOiBuZXdJbmZvLmltYWdlLFxyXG4gICAgICAgICAgICBhdXRob3JOYW1lOiBkYXRhLnVzZXJuYW1lLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXNbMV0uZm9yRWFjaCgoY2hhcCkgPT4ge1xyXG4gICAgICAgIGRiLmNvbGxlY3Rpb24oXCJjaGFwdGVyc1wiKVxyXG4gICAgICAgICAgLmRvYyhjaGFwLmlkKVxyXG4gICAgICAgICAgLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgIHVzZXJJbWFnZTogdXJsID8gdXJsIDogbmV3SW5mby5pbWFnZSxcclxuICAgICAgICAgICAgYXV0aG9yTmFtZTogZGF0YS51c2VybmFtZSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgICAgcmVzWzJdLmZvckVhY2goKGNoYXIpID0+IHtcclxuICAgICAgICBkYi5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc1wiKVxyXG4gICAgICAgICAgLmRvYyhjaGFyLmlkKVxyXG4gICAgICAgICAgLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgIHVzZXJJbWFnZTogdXJsID8gdXJsIDogbmV3SW5mby5pbWFnZSxcclxuICAgICAgICAgICAgYXV0aG9yTmFtZTogZGF0YS51c2VybmFtZSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgICAgcmVzWzNdLmZvckVhY2goKGNvbW0pID0+IHtcclxuICAgICAgICBkYi5jb2xsZWN0aW9uKFwiY29tbWVudHNcIilcclxuICAgICAgICAgIC5kb2MoY29tbS5pZClcclxuICAgICAgICAgIC51cGRhdGUoe1xyXG4gICAgICAgICAgICB1c2VySW1hZ2U6IHVybCA/IHVybCA6IG5ld0luZm8uaW1hZ2UsXHJcbiAgICAgICAgICAgIGF1dGhvck5hbWU6IGRhdGEudXNlcm5hbWUsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBpZiAobmV3UGFzc3dvcmQpIHtcclxuICAgIGF1dGguY3VycmVudFVzZXJcclxuICAgICAgLnJlYXV0aGVudGljYXRlV2l0aENyZWRlbnRpYWwoXHJcbiAgICAgICAgZmlyZWJhc2UuYXV0aC5FbWFpbEF1dGhQcm92aWRlci5jcmVkZW50aWFsKFxyXG4gICAgICAgICAgYXV0aC5jdXJyZW50VXNlci5lbWFpbCxcclxuICAgICAgICAgIGFjdHVhbFBhc3N3b3JkXHJcbiAgICAgICAgKVxyXG4gICAgICApXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICByZXR1cm4gYXV0aC5jdXJyZW50VXNlci51cGRhdGVQYXNzd29yZChuZXdQYXNzd29yZCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKGFzeW5jICgpID0+IHtcclxuICAgICAgICBpZiAodHlwZW9mIG5ld0luZm8uaW1hZ2UgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgIHN0b3JhZ2VcclxuICAgICAgICAgICAgLnJlZihgJHthdXRoLmN1cnJlbnRVc2VyLnVpZH0vJHtpbWFnZU5hbWV9YClcclxuICAgICAgICAgICAgLnB1dChuZXdJbmZvLmltYWdlKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHN0b3JhZ2VcclxuICAgICAgICAgICAgICAgIC5yZWYoYCR7YXV0aC5jdXJyZW50VXNlci51aWR9LyR7aW1hZ2VOYW1lfWApXHJcbiAgICAgICAgICAgICAgICAuZ2V0RG93bmxvYWRVUkwoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oYXN5bmMgKHVybCkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibWRwIGNoYW5nw6kgZXQgaW1hZ2UgY2hhbmfDqVwiKTtcclxuICAgICAgICAgICAgICBkYi5jb2xsZWN0aW9uKFwidXNlcnNcIikuZG9jKGF1dGguY3VycmVudFVzZXIudWlkKS51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgbmV3SW5mbyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiB1cmwsXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgYXdhaXQgYmF0Y2hVcGRhdGVBbGwoXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgIHVzZXJTdG9yaWVzUXVlcnksXHJcbiAgICAgICAgICAgICAgICAgIHVzZXJDaGFwdGVyc1F1ZXJ5LFxyXG4gICAgICAgICAgICAgICAgICB1c2VyQ2hhcmFjdGVyc1F1ZXJ5LFxyXG4gICAgICAgICAgICAgICAgICB1c2VyQ29tbWVudHNRdWVyeSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICB1cmxcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJtZHAgY2hhbmfDqSBldCBpbWFnZSBwYXMgY2hhbmfDqVwiKTtcclxuICAgICAgICAgIGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKS5kb2MoYXV0aC5jdXJyZW50VXNlci51aWQpLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgIG5ld0luZm8sXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGF3YWl0IGJhdGNoVXBkYXRlQWxsKFtcclxuICAgICAgICAgICAgdXNlclN0b3JpZXNRdWVyeSxcclxuICAgICAgICAgICAgdXNlckNoYXB0ZXJzUXVlcnksXHJcbiAgICAgICAgICAgIHVzZXJDaGFyYWN0ZXJzUXVlcnksXHJcbiAgICAgICAgICAgIHVzZXJDb21tZW50c1F1ZXJ5LFxyXG4gICAgICAgICAgXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgaWYgKHR5cGVvZiBuZXdJbmZvLmltYWdlID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgIHN0b3JhZ2VcclxuICAgICAgICAucmVmKGAke2F1dGguY3VycmVudFVzZXIudWlkfS8ke2ltYWdlTmFtZX1gKVxyXG4gICAgICAgIC5wdXQobmV3SW5mby5pbWFnZSlcclxuICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gc3RvcmFnZVxyXG4gICAgICAgICAgICAucmVmKGAke2F1dGguY3VycmVudFVzZXIudWlkfS8ke2ltYWdlTmFtZX1gKVxyXG4gICAgICAgICAgICAuZ2V0RG93bmxvYWRVUkwoKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKGFzeW5jICh1cmwpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwibWRwIHBhcyBjaGFuZ8OpIGV0IGltYWdlIGNoYW5nw6lcIik7XHJcbiAgICAgICAgICBkYi5jb2xsZWN0aW9uKFwidXNlcnNcIikuZG9jKGF1dGguY3VycmVudFVzZXIudWlkKS51cGRhdGUoe1xyXG4gICAgICAgICAgICBuZXdJbmZvLFxyXG4gICAgICAgICAgICBpbWFnZTogdXJsLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBhd2FpdCBiYXRjaFVwZGF0ZUFsbChcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgIHVzZXJTdG9yaWVzUXVlcnksXHJcbiAgICAgICAgICAgICAgdXNlckNoYXB0ZXJzUXVlcnksXHJcbiAgICAgICAgICAgICAgdXNlckNoYXJhY3RlcnNRdWVyeSxcclxuICAgICAgICAgICAgICB1c2VyQ29tbWVudHNRdWVyeSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coXCJtZHAgcGFzIGNoYW5nw6kgZXQgaW1hZ2UgcGFzIGNoYW5nw6lcIik7XHJcbiAgICAgIGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKS5kb2MoYXV0aC5jdXJyZW50VXNlci51aWQpLnVwZGF0ZSh7XHJcbiAgICAgICAgbmV3SW5mbyxcclxuICAgICAgfSk7XHJcbiAgICAgIGJhdGNoVXBkYXRlQWxsKFtcclxuICAgICAgICB1c2VyU3Rvcmllc1F1ZXJ5LFxyXG4gICAgICAgIHVzZXJDaGFwdGVyc1F1ZXJ5LFxyXG4gICAgICAgIHVzZXJDaGFyYWN0ZXJzUXVlcnksXHJcbiAgICAgICAgdXNlckNvbW1lbnRzUXVlcnksXHJcbiAgICAgIF0pO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==