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
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _fbConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fbConfig */ "./redux/fbConfig.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/constants */ "./utils/constants.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.esm.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var log_in = function log_in(email, password) {
  return function (dispatch) {
    console.log(email, password);
    _fbConfig__WEBPACK_IMPORTED_MODULE_3__["auth"].signInWithEmailAndPassword(email, password);
  };
};
var getProfile = function getProfile(id) {
  return function (dispatch) {
    _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("users").doc(id ? id : _fbConfig__WEBPACK_IMPORTED_MODULE_3__["auth"].currentUser.uid).onSnapshot(function (doc) {
      return dispatch({
        type: _utils_constants__WEBPACK_IMPORTED_MODULE_4__["types"].GET_PROFILE,
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
    var userId = id ? id : _fbConfig__WEBPACK_IMPORTED_MODULE_3__["auth"].currentUser.uid;
    _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("usersLikes").where("senderId", "==", userId).get().then(function (docs) {
      var favArr = [];
      docs.forEach(function (doc) {
        addedOn = doc.data().createdAt;
        favArr = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(favArr), [doc.data().recipient]);
      });
      return favArr;
    }).then(function (users) {
      var result = users.map(function (user) {
        return _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("users").doc(user).get();
      });
      Promise.all(result).then(function (res) {
        var favUsers = [];
        res.forEach(function (doc) {
          return favUsers = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(favUsers), [_objectSpread({
            addedOn: addedOn,
            id: doc.id
          }, doc.data())]);
        });
        dispatch({
          type: _utils_constants__WEBPACK_IMPORTED_MODULE_4__["types"].GET_FAVORITE_AUTHORS,
          payload: favUsers
        });
      });
    });
  };
};
var getFollowers = function getFollowers(id) {
  return function (dispatch) {
    var addedOn;
    var userId = id ? id : _fbConfig__WEBPACK_IMPORTED_MODULE_3__["auth"].currentUser.uid;
    _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("usersLikes").where("recipient", "==", userId).get().then(function (docs) {
      var favArr = [];
      docs.forEach(function (doc) {
        addedOn = doc.data().createdAt;
        favArr = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(favArr), [doc.data().senderId]);
      });
      return favArr;
    }).then(function (users) {
      var result = users.map(function (user) {
        return _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("users").doc(user).get();
      });
      Promise.all(result).then(function (res) {
        var favUsers = [];
        res.forEach(function (doc) {
          return favUsers = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(favUsers), [_objectSpread({
            addedOn: addedOn,
            id: doc.id
          }, doc.data())]);
        });
        dispatch({
          type: _utils_constants__WEBPACK_IMPORTED_MODULE_4__["types"].GET_FOLLOWERS,
          payload: favUsers
        });
      });
    });
  };
};
var getIsFollowing = function getIsFollowing(userId) {
  return function (dispatch) {
    if (_fbConfig__WEBPACK_IMPORTED_MODULE_3__["auth"].currentUser) {
      _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("usersLikes").where("recipient", "==", userId).where("senderId", "==", _fbConfig__WEBPACK_IMPORTED_MODULE_3__["auth"].currentUser.uid).onSnapshot(function (snapshot) {
        var answer = snapshot.docs.length > 0 ? true : false;
        return dispatch({
          type: _utils_constants__WEBPACK_IMPORTED_MODULE_4__["types"].IS_FOLLOWING,
          payload: answer
        });
      });
    }
  };
};
var followUser = function followUser(id, isFavorite, newFollower) {
  return function (dispatch) {
    if (isFavorite) return antd__WEBPACK_IMPORTED_MODULE_6__["message"].warning("You are already following this user");
    if (!_fbConfig__WEBPACK_IMPORTED_MODULE_3__["auth"].currentUser) return antd__WEBPACK_IMPORTED_MODULE_6__["message"].error("You need to be logged in to follow users");
    if (!_fbConfig__WEBPACK_IMPORTED_MODULE_3__["auth"].currentUser.emailVerified) return antd__WEBPACK_IMPORTED_MODULE_6__["message"].error("You need to verify your email first");
    _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("usersLikes").add({
      sender: newFollower.username,
      senderId: newFollower.uid,
      recipient: id,
      createdAt: firebase_app__WEBPACK_IMPORTED_MODULE_5__["default"].firestore.FieldValue.serverTimestamp()
    }).then(function () {
      return antd__WEBPACK_IMPORTED_MODULE_6__["message"].success("You are now following this user");
    })["catch"](function (err) {
      return antd__WEBPACK_IMPORTED_MODULE_6__["message"].error("There has been a problem");
    });
  };
};
var unfollowUser = function unfollowUser(id, isFavorite) {
  return function (dispatch) {
    if (!isFavorite) return antd__WEBPACK_IMPORTED_MODULE_6__["message"].warning("You are not following this user yet");
    _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("usersLikes").where("recipient", "==", id).where("senderId", "==", _fbConfig__WEBPACK_IMPORTED_MODULE_3__["auth"].currentUser.uid).get().then(function (data) {
      return _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("usersLikes").doc(data.docs[0].id)["delete"]();
    }).then(function () {
      return antd__WEBPACK_IMPORTED_MODULE_6__["message"].success("User successfully unfollowed");
    })["catch"](function (err) {
      return antd__WEBPACK_IMPORTED_MODULE_6__["message"].error("There has been a problem");
    });
  };
};
var changeProfile = function changeProfile(data, setOpen, username, userImage) {
  return function (dispatch) {
    var batch = _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].batch();

    var newPassword = data.newPassword,
        actualPassword = data.actualPassword,
        newInfo = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(data, ["newPassword", "actualPassword"]);

    var imageName = "".concat(_fbConfig__WEBPACK_IMPORTED_MODULE_3__["auth"].currentUser.uid, "_").concat(newInfo.username); // STORIES, CHAPTERS, CHARACTERS & COMMENTS QUERIES

    var userStoriesQuery = _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("stories").where("authorId", "==", _fbConfig__WEBPACK_IMPORTED_MODULE_3__["auth"].currentUser.uid).get();
    var userChaptersQuery = _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("chapters").where("authorId", "==", _fbConfig__WEBPACK_IMPORTED_MODULE_3__["auth"].currentUser.uid).get();
    var userCharactersQuery = _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("characters").where("authorId", "==", _fbConfig__WEBPACK_IMPORTED_MODULE_3__["auth"].currentUser.uid).get();
    var userCommentsQuery = _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("comments").where("userId", "==", _fbConfig__WEBPACK_IMPORTED_MODULE_3__["auth"].currentUser.uid).get();

    if (newPassword) {
      _fbConfig__WEBPACK_IMPORTED_MODULE_3__["auth"].currentUser.reauthenticateWithCredential(firebase_app__WEBPACK_IMPORTED_MODULE_5__["default"].auth.EmailAuthProvider.credential(user.email, currentPassword)).then(function () {
        return user.updatePassword(newPassword);
      }).then(function () {
        if (typeof newInfo.image === "object") {
          _fbConfig__WEBPACK_IMPORTED_MODULE_3__["storage"].ref("".concat(_fbConfig__WEBPACK_IMPORTED_MODULE_3__["auth"].currentUser.uid, "/").concat(imageName)).put(newInfo.image).then(function () {
            return _fbConfig__WEBPACK_IMPORTED_MODULE_3__["storage"].ref("".concat(_fbConfig__WEBPACK_IMPORTED_MODULE_3__["auth"].currentUser.uid, "/").concat(imageName)).getDownloadURL();
          }).then(function (url) {
            imageUrl = url;
            batch.update(_fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("users").doc(_fbConfig__WEBPACK_IMPORTED_MODULE_3__["auth"].currentUser.uid), _objectSpread(_objectSpread({}, newInfo), {}, {
              image: imageUrl
            }));
          });
        } else {
          batch.update(_fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("users").doc(_fbConfig__WEBPACK_IMPORTED_MODULE_3__["auth"].currentUser.uid), _objectSpread({}, newInfo));
        }
      });
    } //   const reauthenticate = (currentPassword) => {
    //   const user = auth.currentUser;
    //   const cred = ;
    //   return user.reauthenticateWithCredential(cred);
    // };
    // const batch = db.batch();
    // const { newPassword, actualPassword, ...newInfo } = data;
    // const imageName = `${auth.currentUser.uid}_${data.username}`;
    // let imageUrl = "";
    // const userStoriesQuery = db
    //   .collection("stories")
    //   .where("authorId", "==", auth.currentUser.uid)
    //   .get();
    // const userChaptersQuery = db
    //   .collection("chapters")
    //   .where("authorId", "==", auth.currentUser.uid)
    //   .get();
    // const userCharactersQuery = db
    //   .collection("characters")
    //   .where("authorId", "==", auth.currentUser.uid)
    //   .get();
    // const userCommentsQuery = db
    //   .collection("comments")
    //   .where("userId", "==", auth.currentUser.uid)
    //   .get();
    // Promise.all([
    //   userStoriesQuery,
    //   userChaptersQuery,
    //   userCharactersQuery,
    //   userCommentsQuery,
    // ]).then((res) => {
    //   res[0].forEach((story) => {
    //     batch.update(db.collection("stories").doc(story.id), {
    //       userImage: url,
    //       authorName: data.username,
    //     });
    //   });
    //   res[1].forEach((chap) => {
    //     batch.update(db.collection("chapters").doc(chap.id), {
    //       userImage: url,
    //       authorName: data.username,
    //     });
    //   });
    //   res[2].forEach((char) => {
    //     batch.update(db.collection("characters").doc(char.id), {
    //       userImage: url,
    //       authorName: data.username,
    //     });
    //   });
    //   res[3].forEach((char) => {
    //     batch.update(db.collection("comments").doc(char.id), {
    //       userImage: url,
    //       username: data.username,
    //     });
    //   });
    // });
    // // UPDATE l'USER
    // if (typeof data.image === "object") {
    //   storage
    //     .ref(`${auth.currentUser.uid}/${imageName}`)
    //     .put(data.image)
    //     .then(() => {
    //       return storage
    //         .ref(`${auth.currentUser.uid}/${imageName}`)
    //         .getDownloadURL();
    //     })
    //     .then((url) => {
    //       imageUrl = url;
    //       db.update(db.collection("users").doc(auth.currentUser.uid), {
    //         ...newInfo,
    //         image: imageUrl,
    //       });
    //     });
    // } else {
    //   db.update(db.collection("users").doc(auth.currentUser.uid), {
    //     ...newInfo,
    //   });
    // }
    // // UPDATE LE MOT DE PASSE
    // if (newPassword) {
    //   auth.currentUser
    //     .reauthenticateWithCredential(
    //       firebase.auth.EmailAuthProvider.credential(user.email, currentPassword)
    //     )
    //     .then(() => {
    //       return user.updatePassword(newPassword);
    //     });
    // }
    // // UPDATE LES TORIES, CHARACTERS & COMMENTS SI BESOIN
    // // if()
    // if (newPassword) {
    //   reauthenticate(actualPassword)
    //     .then(() => {
    //       const user = auth.currentUser;
    //       user.updatePassword(newPassword).then(() => {
    //         if (typeof data.image === "object") {
    //           storage
    //             .ref(`${auth.currentUser.uid}/${imageName}`)
    //             .put(data.image)
    //             .then(() => {
    //               return storage
    //                 .ref(auth.currentUser.uid)
    //                 .child(imageName)
    //                 .getDownloadURL();
    //             })
    //             .then((url) => {
    //               if (data.username !== username || data.image !== userImage) {
    //                 batch.update(
    //                   db.collection("users").doc(auth.currentUser.uid),
    //                   {
    //                     image: url,
    //                     ...newInfo,
    //                   }
    //                 );
    //                 batch
    //                   .commit()
    //                   .then(() => {
    //                     setOpen(false);
    //                     message.success(
    //                       "Your profile has been successfully updated"
    //                     );
    //                   })
    //                   .catch((error) => {
    //                     message.error(error.message);
    //                   });
    //               } else {
    //                 batch.update(
    //                   db.collection("users").doc(auth.currentUser.uid),
    //                   {
    //                     image: url,
    //                     ...newInfo,
    //                   }
    //                 );
    //                 batch
    //                   .commit()
    //                   .then(() => {
    //                     setOpen(false);
    //                     message.success(
    //                       "Your profile has been successfully updated"
    //                     );
    //                   })
    //                   .catch((error) => {
    //                     message.error(error.message);
    //                   });
    //               }
    //             });
    //         } else {
    //           if (data.username !== username) {
    //             Promise.all([
    //               userStoriesQuery,
    //               userChaptersQuery,
    //               userCharactersQuery,
    //               userCommentsQuery,
    //             ]).then((res) => {
    //               res[0].forEach((story) => {
    //                 batch.update(db.collection("stories").doc(story.id), {
    //                   authorName: data.username,
    //                 });
    //               });
    //               res[0].forEach((chap) => {
    //                 batch.update(db.collection("chapters").doc(chap.id), {
    //                   authorName: data.username,
    //                 });
    //               });
    //               res[0].forEach((char) => {
    //                 batch.update(db.collection("characters").doc(char.id), {
    //                   authorName: data.username,
    //                 });
    //               });
    //               res[0].forEach((char) => {
    //                 batch.update(db.collection("comments").doc(char.id), {
    //                   username: data.username,
    //                 });
    //               });
    //             });
    //             batch.update(db.collection("users").doc(auth.currentUser.uid), {
    //               ...newInfo,
    //             });
    //           } else {
    //             batch.update(db.collection("users").doc(auth.currentUser.uid), {
    //               ...newInfo,
    //             });
    //             batch
    //               .commit()
    //               .then(() => {
    //                 setOpen(false);
    //                 message.success("Your profile has been successfully updated");
    //               })
    //               .catch((error) => {
    //                 message.error(error.message);
    //               });
    //           }
    //         }
    //       });
    //     })
    //     .catch((err) => {
    //       message.error(err.message);
    //     });
    // } else {
    //   if (typeof data.image === "object") {
    //     storage
    //       .ref(`${auth.currentUser.uid}/${imageName}`)
    //       .put(data.image)
    //       .then(() => {
    //         return storage
    //           .ref(auth.currentUser.uid)
    //           .child(imageName)
    //           .getDownloadURL();
    //       })
    //       .then((url) => {
    //         if (data.username !== username || data.image !== userImage) {
    //           Promise.all([
    //             userStoriesQuery,
    //             userChaptersQuery,
    //             userCharactersQuery,
    //             userCommentsQuery,
    //           ]).then((res) => {
    //             res[0].forEach((story) => {
    //               batch.update(db.collection("stories").doc(story.id), {
    //                 userImage: url,
    //                 authorName: data.username,
    //               });
    //             });
    //             res[1].forEach((chap) => {
    //               batch.update(db.collection("chapters").doc(chap.id), {
    //                 userImage: url,
    //                 authorName: data.username,
    //               });
    //             });
    //             res[2].forEach((char) => {
    //               batch.update(db.collection("characters").doc(char.id), {
    //                 userImage: url,
    //                 authorName: data.username,
    //               });
    //             });
    //             res[3].forEach((char) => {
    //               batch.update(db.collection("comments").doc(char.id), {
    //                 userImage: url,
    //                 username: data.username,
    //               });
    //             });
    //           });
    //           batch.update(db.collection("users").doc(auth.currentUser.uid), {
    //             ...newInfo,
    //             image: url,
    //           });
    //           batch
    //             .commit()
    //             .then(() => {
    //               setOpen(false);
    //               message.success("Your profile has been successfully updated");
    //             })
    //             .catch((error) => {
    //               message.error(error.message);
    //             });
    //         } else {
    //           batch.update(db.collection("users").doc(auth.currentUser.uid), {
    //             ...newInfo,
    //           });
    //           batch
    //             .commit()
    //             .then(() => {
    //               setOpen(false);
    //               message.success("Your profile has been successfully updated");
    //             })
    //             .catch((error) => {
    //               message.error(error.message);
    //             });
    //         }
    //       });
    //   } else {
    //     if (data.username !== username) {
    //       Promise.all([
    //         userStoriesQuery,
    //         userChaptersQuery,
    //         userCharactersQuery,
    //         userCommentsQuery,
    //       ]).then((res) => {
    //         res[0].forEach((story) => {
    //           batch.update(db.collection("stories").doc(story.id), {
    //             authorName: data.username,
    //           });
    //         });
    //         res[1].forEach((chap) => {
    //           batch.update(db.collection("chapters").doc(chap.id), {
    //             authorName: data.username,
    //           });
    //         });
    //         res[2].forEach((char) => {
    //           batch.update(db.collection("characters").doc(char.id), {
    //             authorName: data.username,
    //           });
    //         });
    //         res[3].forEach((char) => {
    //           batch.update(db.collection("comments").doc(char.id), {
    //             username: data.username,
    //           });
    //         });
    //         batch.update(db.collection("users").doc(auth.currentUser.uid), {
    //           ...newInfo,
    //         });
    //         batch
    //           .commit()
    //           .then(() => {
    //             setOpen(false);
    //             message.success("Your profile has been successfully updated");
    //           })
    //           .catch((error) => {
    //             message.error(error.message);
    //           });
    //       });
    //     } else {
    //       batch.update(db.collection("users").doc(auth.currentUser.uid), {
    //         ...newInfo,
    //       });
    //       batch
    //         .commit()
    //         .then(() => {
    //           setOpen(false);
    //           message.success("Your profile has been successfully updated");
    //         })
    //         .catch((error) => {
    //           message.error(error.message);
    //         });
    //     }
    //   }
    // }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvYWN0aW9ucy91c2VyQWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJsb2dfaW4iLCJlbWFpbCIsInBhc3N3b3JkIiwiZGlzcGF0Y2giLCJjb25zb2xlIiwibG9nIiwiYXV0aCIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwiZ2V0UHJvZmlsZSIsImlkIiwiZGIiLCJjb2xsZWN0aW9uIiwiZG9jIiwiY3VycmVudFVzZXIiLCJ1aWQiLCJvblNuYXBzaG90IiwidHlwZSIsInR5cGVzIiwiR0VUX1BST0ZJTEUiLCJwYXlsb2FkIiwiZGF0YSIsImdldEZhdm9yaXRlQXV0aG9ycyIsImFkZGVkT24iLCJ1c2VySWQiLCJ3aGVyZSIsImdldCIsInRoZW4iLCJkb2NzIiwiZmF2QXJyIiwiZm9yRWFjaCIsImNyZWF0ZWRBdCIsInJlY2lwaWVudCIsInVzZXJzIiwicmVzdWx0IiwibWFwIiwidXNlciIsIlByb21pc2UiLCJhbGwiLCJyZXMiLCJmYXZVc2VycyIsIkdFVF9GQVZPUklURV9BVVRIT1JTIiwiZ2V0Rm9sbG93ZXJzIiwic2VuZGVySWQiLCJHRVRfRk9MTE9XRVJTIiwiZ2V0SXNGb2xsb3dpbmciLCJzbmFwc2hvdCIsImFuc3dlciIsImxlbmd0aCIsIklTX0ZPTExPV0lORyIsImZvbGxvd1VzZXIiLCJpc0Zhdm9yaXRlIiwibmV3Rm9sbG93ZXIiLCJtZXNzYWdlIiwid2FybmluZyIsImVycm9yIiwiZW1haWxWZXJpZmllZCIsImFkZCIsInNlbmRlciIsInVzZXJuYW1lIiwiZmlyZWJhc2UiLCJmaXJlc3RvcmUiLCJGaWVsZFZhbHVlIiwic2VydmVyVGltZXN0YW1wIiwic3VjY2VzcyIsImVyciIsInVuZm9sbG93VXNlciIsImNoYW5nZVByb2ZpbGUiLCJzZXRPcGVuIiwidXNlckltYWdlIiwiYmF0Y2giLCJuZXdQYXNzd29yZCIsImFjdHVhbFBhc3N3b3JkIiwibmV3SW5mbyIsImltYWdlTmFtZSIsInVzZXJTdG9yaWVzUXVlcnkiLCJ1c2VyQ2hhcHRlcnNRdWVyeSIsInVzZXJDaGFyYWN0ZXJzUXVlcnkiLCJ1c2VyQ29tbWVudHNRdWVyeSIsInJlYXV0aGVudGljYXRlV2l0aENyZWRlbnRpYWwiLCJFbWFpbEF1dGhQcm92aWRlciIsImNyZWRlbnRpYWwiLCJjdXJyZW50UGFzc3dvcmQiLCJ1cGRhdGVQYXNzd29yZCIsImltYWdlIiwic3RvcmFnZSIsInJlZiIsInB1dCIsImdldERvd25sb2FkVVJMIiwidXJsIiwiaW1hZ2VVcmwiLCJ1cGRhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEtBQUQsRUFBUUMsUUFBUjtBQUFBLFNBQXFCLFVBQUNDLFFBQUQsRUFBYztBQUN2REMsV0FBTyxDQUFDQyxHQUFSLENBQVlKLEtBQVosRUFBbUJDLFFBQW5CO0FBQ0FJLGtEQUFJLENBQUNDLDBCQUFMLENBQWdDTixLQUFoQyxFQUF1Q0MsUUFBdkM7QUFDRCxHQUhxQjtBQUFBLENBQWY7QUFLQSxJQUFNTSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxFQUFEO0FBQUEsU0FBUSxVQUFDTixRQUFELEVBQWM7QUFDOUNPLGdEQUFFLENBQUNDLFVBQUgsQ0FBYyxPQUFkLEVBQ0dDLEdBREgsQ0FDT0gsRUFBRSxHQUFHQSxFQUFILEdBQVFILDhDQUFJLENBQUNPLFdBQUwsQ0FBaUJDLEdBRGxDLEVBRUdDLFVBRkgsQ0FFYyxVQUFDSCxHQUFELEVBQVM7QUFDbkIsYUFBT1QsUUFBUSxDQUFDO0FBQ2RhLFlBQUksRUFBRUMsc0RBQUssQ0FBQ0MsV0FERTtBQUVkQyxlQUFPO0FBQUlWLFlBQUUsRUFBRUcsR0FBRyxDQUFDSDtBQUFaLFdBQW1CRyxHQUFHLENBQUNRLElBQUosRUFBbkI7QUFGTyxPQUFELENBQWY7QUFJRCxLQVBIO0FBUUQsR0FUeUI7QUFBQSxDQUFuQjtBQVdBLElBQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ1osRUFBRDtBQUFBLFNBQVEsVUFBQ04sUUFBRCxFQUFjO0FBQ3RELFFBQUltQixPQUFKO0FBQ0EsUUFBTUMsTUFBTSxHQUFHZCxFQUFFLEdBQUdBLEVBQUgsR0FBUUgsOENBQUksQ0FBQ08sV0FBTCxDQUFpQkMsR0FBMUM7QUFDQUosZ0RBQUUsQ0FBQ0MsVUFBSCxDQUFjLFlBQWQsRUFDR2EsS0FESCxDQUNTLFVBRFQsRUFDcUIsSUFEckIsRUFDMkJELE1BRDNCLEVBRUdFLEdBRkgsR0FHR0MsSUFISCxDQUdRLFVBQUNDLElBQUQsRUFBVTtBQUNkLFVBQUlDLE1BQU0sR0FBRyxFQUFiO0FBQ0FELFVBQUksQ0FBQ0UsT0FBTCxDQUFhLFVBQUNqQixHQUFELEVBQVM7QUFDcEJVLGVBQU8sR0FBR1YsR0FBRyxDQUFDUSxJQUFKLEdBQVdVLFNBQXJCO0FBQ0FGLGNBQU0sMEdBQU9BLE1BQVAsSUFBZWhCLEdBQUcsQ0FBQ1EsSUFBSixHQUFXVyxTQUExQixFQUFOO0FBQ0QsT0FIRDtBQUlBLGFBQU9ILE1BQVA7QUFDRCxLQVZILEVBV0dGLElBWEgsQ0FXUSxVQUFDTSxLQUFELEVBQVc7QUFDZixVQUFNQyxNQUFNLEdBQUdELEtBQUssQ0FBQ0UsR0FBTixDQUFVLFVBQUNDLElBQUQ7QUFBQSxlQUN2QnpCLDRDQUFFLENBQUNDLFVBQUgsQ0FBYyxPQUFkLEVBQXVCQyxHQUF2QixDQUEyQnVCLElBQTNCLEVBQWlDVixHQUFqQyxFQUR1QjtBQUFBLE9BQVYsQ0FBZjtBQUdBVyxhQUFPLENBQUNDLEdBQVIsQ0FBWUosTUFBWixFQUFvQlAsSUFBcEIsQ0FBeUIsVUFBQ1ksR0FBRCxFQUFTO0FBQ2hDLFlBQUlDLFFBQVEsR0FBRyxFQUFmO0FBQ0FELFdBQUcsQ0FBQ1QsT0FBSixDQUNFLFVBQUNqQixHQUFEO0FBQUEsaUJBQ0cyQixRQUFRLDBHQUFPQSxRQUFQO0FBQW1CakIsbUJBQU8sRUFBUEEsT0FBbkI7QUFBNEJiLGNBQUUsRUFBRUcsR0FBRyxDQUFDSDtBQUFwQyxhQUEyQ0csR0FBRyxDQUFDUSxJQUFKLEVBQTNDLEdBRFg7QUFBQSxTQURGO0FBSUFqQixnQkFBUSxDQUFDO0FBQ1BhLGNBQUksRUFBRUMsc0RBQUssQ0FBQ3VCLG9CQURMO0FBRVByQixpQkFBTyxFQUFFb0I7QUFGRixTQUFELENBQVI7QUFJRCxPQVZEO0FBV0QsS0ExQkg7QUEyQkQsR0E5QmlDO0FBQUEsQ0FBM0I7QUFnQ0EsSUFBTUUsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ2hDLEVBQUQ7QUFBQSxTQUFRLFVBQUNOLFFBQUQsRUFBYztBQUNoRCxRQUFJbUIsT0FBSjtBQUNBLFFBQU1DLE1BQU0sR0FBR2QsRUFBRSxHQUFHQSxFQUFILEdBQVFILDhDQUFJLENBQUNPLFdBQUwsQ0FBaUJDLEdBQTFDO0FBQ0FKLGdEQUFFLENBQUNDLFVBQUgsQ0FBYyxZQUFkLEVBQ0dhLEtBREgsQ0FDUyxXQURULEVBQ3NCLElBRHRCLEVBQzRCRCxNQUQ1QixFQUVHRSxHQUZILEdBR0dDLElBSEgsQ0FHUSxVQUFDQyxJQUFELEVBQVU7QUFDZCxVQUFJQyxNQUFNLEdBQUcsRUFBYjtBQUNBRCxVQUFJLENBQUNFLE9BQUwsQ0FBYSxVQUFDakIsR0FBRCxFQUFTO0FBQ3BCVSxlQUFPLEdBQUdWLEdBQUcsQ0FBQ1EsSUFBSixHQUFXVSxTQUFyQjtBQUNBRixjQUFNLDBHQUFPQSxNQUFQLElBQWVoQixHQUFHLENBQUNRLElBQUosR0FBV3NCLFFBQTFCLEVBQU47QUFDRCxPQUhEO0FBSUEsYUFBT2QsTUFBUDtBQUNELEtBVkgsRUFXR0YsSUFYSCxDQVdRLFVBQUNNLEtBQUQsRUFBVztBQUNmLFVBQU1DLE1BQU0sR0FBR0QsS0FBSyxDQUFDRSxHQUFOLENBQVUsVUFBQ0MsSUFBRDtBQUFBLGVBQ3ZCekIsNENBQUUsQ0FBQ0MsVUFBSCxDQUFjLE9BQWQsRUFBdUJDLEdBQXZCLENBQTJCdUIsSUFBM0IsRUFBaUNWLEdBQWpDLEVBRHVCO0FBQUEsT0FBVixDQUFmO0FBR0FXLGFBQU8sQ0FBQ0MsR0FBUixDQUFZSixNQUFaLEVBQW9CUCxJQUFwQixDQUF5QixVQUFDWSxHQUFELEVBQVM7QUFDaEMsWUFBSUMsUUFBUSxHQUFHLEVBQWY7QUFDQUQsV0FBRyxDQUFDVCxPQUFKLENBQ0UsVUFBQ2pCLEdBQUQ7QUFBQSxpQkFDRzJCLFFBQVEsMEdBQU9BLFFBQVA7QUFBbUJqQixtQkFBTyxFQUFQQSxPQUFuQjtBQUE0QmIsY0FBRSxFQUFFRyxHQUFHLENBQUNIO0FBQXBDLGFBQTJDRyxHQUFHLENBQUNRLElBQUosRUFBM0MsR0FEWDtBQUFBLFNBREY7QUFJQWpCLGdCQUFRLENBQUM7QUFDUGEsY0FBSSxFQUFFQyxzREFBSyxDQUFDMEIsYUFETDtBQUVQeEIsaUJBQU8sRUFBRW9CO0FBRkYsU0FBRCxDQUFSO0FBSUQsT0FWRDtBQVdELEtBMUJIO0FBMkJELEdBOUIyQjtBQUFBLENBQXJCO0FBZ0NBLElBQU1LLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ3JCLE1BQUQ7QUFBQSxTQUFZLFVBQUNwQixRQUFELEVBQWM7QUFDdEQsUUFBSUcsOENBQUksQ0FBQ08sV0FBVCxFQUFzQjtBQUNwQkgsa0RBQUUsQ0FBQ0MsVUFBSCxDQUFjLFlBQWQsRUFDR2EsS0FESCxDQUNTLFdBRFQsRUFDc0IsSUFEdEIsRUFDNEJELE1BRDVCLEVBRUdDLEtBRkgsQ0FFUyxVQUZULEVBRXFCLElBRnJCLEVBRTJCbEIsOENBQUksQ0FBQ08sV0FBTCxDQUFpQkMsR0FGNUMsRUFHR0MsVUFISCxDQUdjLFVBQUM4QixRQUFELEVBQWM7QUFDeEIsWUFBTUMsTUFBTSxHQUFHRCxRQUFRLENBQUNsQixJQUFULENBQWNvQixNQUFkLEdBQXVCLENBQXZCLEdBQTJCLElBQTNCLEdBQWtDLEtBQWpEO0FBQ0EsZUFBTzVDLFFBQVEsQ0FBQztBQUFFYSxjQUFJLEVBQUVDLHNEQUFLLENBQUMrQixZQUFkO0FBQTRCN0IsaUJBQU8sRUFBRTJCO0FBQXJDLFNBQUQsQ0FBZjtBQUNELE9BTkg7QUFPRDtBQUNGLEdBVjZCO0FBQUEsQ0FBdkI7QUFZQSxJQUFNRyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDeEMsRUFBRCxFQUFLeUMsVUFBTCxFQUFpQkMsV0FBakI7QUFBQSxTQUFpQyxVQUFDaEQsUUFBRCxFQUFjO0FBQ3ZFLFFBQUkrQyxVQUFKLEVBQWdCLE9BQU9FLDRDQUFPLENBQUNDLE9BQVIsQ0FBZ0IscUNBQWhCLENBQVA7QUFDaEIsUUFBSSxDQUFDL0MsOENBQUksQ0FBQ08sV0FBVixFQUNFLE9BQU91Qyw0Q0FBTyxDQUFDRSxLQUFSLENBQWMsMENBQWQsQ0FBUDtBQUNGLFFBQUksQ0FBQ2hELDhDQUFJLENBQUNPLFdBQUwsQ0FBaUIwQyxhQUF0QixFQUNFLE9BQU9ILDRDQUFPLENBQUNFLEtBQVIsQ0FBYyxxQ0FBZCxDQUFQO0FBRUY1QyxnREFBRSxDQUFDQyxVQUFILENBQWMsWUFBZCxFQUNHNkMsR0FESCxDQUNPO0FBQ0hDLFlBQU0sRUFBRU4sV0FBVyxDQUFDTyxRQURqQjtBQUVIaEIsY0FBUSxFQUFFUyxXQUFXLENBQUNyQyxHQUZuQjtBQUdIaUIsZUFBUyxFQUFFdEIsRUFIUjtBQUlIcUIsZUFBUyxFQUFFNkIsb0RBQVEsQ0FBQ0MsU0FBVCxDQUFtQkMsVUFBbkIsQ0FBOEJDLGVBQTlCO0FBSlIsS0FEUCxFQU9HcEMsSUFQSCxDQU9RO0FBQUEsYUFBTTBCLDRDQUFPLENBQUNXLE9BQVIsQ0FBZ0IsaUNBQWhCLENBQU47QUFBQSxLQVBSLFdBUVMsVUFBQ0MsR0FBRDtBQUFBLGFBQVNaLDRDQUFPLENBQUNFLEtBQVIsQ0FBYywwQkFBZCxDQUFUO0FBQUEsS0FSVDtBQVNELEdBaEJ5QjtBQUFBLENBQW5CO0FBa0JBLElBQU1XLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUN4RCxFQUFELEVBQUt5QyxVQUFMO0FBQUEsU0FBb0IsVUFBQy9DLFFBQUQsRUFBYztBQUM1RCxRQUFJLENBQUMrQyxVQUFMLEVBQ0UsT0FBT0UsNENBQU8sQ0FBQ0MsT0FBUixDQUFnQixxQ0FBaEIsQ0FBUDtBQUVGM0MsZ0RBQUUsQ0FBQ0MsVUFBSCxDQUFjLFlBQWQsRUFDR2EsS0FESCxDQUNTLFdBRFQsRUFDc0IsSUFEdEIsRUFDNEJmLEVBRDVCLEVBRUdlLEtBRkgsQ0FFUyxVQUZULEVBRXFCLElBRnJCLEVBRTJCbEIsOENBQUksQ0FBQ08sV0FBTCxDQUFpQkMsR0FGNUMsRUFHR1csR0FISCxHQUlHQyxJQUpILENBSVEsVUFBQ04sSUFBRCxFQUFVO0FBQ2QsYUFBT1YsNENBQUUsQ0FBQ0MsVUFBSCxDQUFjLFlBQWQsRUFBNEJDLEdBQTVCLENBQWdDUSxJQUFJLENBQUNPLElBQUwsQ0FBVSxDQUFWLEVBQWFsQixFQUE3QyxhQUFQO0FBQ0QsS0FOSCxFQU9HaUIsSUFQSCxDQU9RO0FBQUEsYUFBTTBCLDRDQUFPLENBQUNXLE9BQVIsQ0FBZ0IsOEJBQWhCLENBQU47QUFBQSxLQVBSLFdBUVMsVUFBQ0MsR0FBRDtBQUFBLGFBQVNaLDRDQUFPLENBQUNFLEtBQVIsQ0FBYywwQkFBZCxDQUFUO0FBQUEsS0FSVDtBQVNELEdBYjJCO0FBQUEsQ0FBckI7QUFlQSxJQUFNWSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUM5QyxJQUFELEVBQU8rQyxPQUFQLEVBQWdCVCxRQUFoQixFQUEwQlUsU0FBMUI7QUFBQSxTQUF3QyxVQUNuRWpFLFFBRG1FLEVBRWhFO0FBQ0gsUUFBTWtFLEtBQUssR0FBRzNELDRDQUFFLENBQUMyRCxLQUFILEVBQWQ7O0FBREcsUUFFS0MsV0FGTCxHQUVpRGxELElBRmpELENBRUtrRCxXQUZMO0FBQUEsUUFFa0JDLGNBRmxCLEdBRWlEbkQsSUFGakQsQ0FFa0JtRCxjQUZsQjtBQUFBLFFBRXFDQyxPQUZyQyxzR0FFaURwRCxJQUZqRDs7QUFHSCxRQUFNcUQsU0FBUyxhQUFNbkUsOENBQUksQ0FBQ08sV0FBTCxDQUFpQkMsR0FBdkIsY0FBOEIwRCxPQUFPLENBQUNkLFFBQXRDLENBQWYsQ0FIRyxDQUtIOztBQUNBLFFBQU1nQixnQkFBZ0IsR0FBR2hFLDRDQUFFLENBQ3hCQyxVQURzQixDQUNYLFNBRFcsRUFFdEJhLEtBRnNCLENBRWhCLFVBRmdCLEVBRUosSUFGSSxFQUVFbEIsOENBQUksQ0FBQ08sV0FBTCxDQUFpQkMsR0FGbkIsRUFHdEJXLEdBSHNCLEVBQXpCO0FBSUEsUUFBTWtELGlCQUFpQixHQUFHakUsNENBQUUsQ0FDekJDLFVBRHVCLENBQ1osVUFEWSxFQUV2QmEsS0FGdUIsQ0FFakIsVUFGaUIsRUFFTCxJQUZLLEVBRUNsQiw4Q0FBSSxDQUFDTyxXQUFMLENBQWlCQyxHQUZsQixFQUd2QlcsR0FIdUIsRUFBMUI7QUFJQSxRQUFNbUQsbUJBQW1CLEdBQUdsRSw0Q0FBRSxDQUMzQkMsVUFEeUIsQ0FDZCxZQURjLEVBRXpCYSxLQUZ5QixDQUVuQixVQUZtQixFQUVQLElBRk8sRUFFRGxCLDhDQUFJLENBQUNPLFdBQUwsQ0FBaUJDLEdBRmhCLEVBR3pCVyxHQUh5QixFQUE1QjtBQUlBLFFBQU1vRCxpQkFBaUIsR0FBR25FLDRDQUFFLENBQ3pCQyxVQUR1QixDQUNaLFVBRFksRUFFdkJhLEtBRnVCLENBRWpCLFFBRmlCLEVBRVAsSUFGTyxFQUVEbEIsOENBQUksQ0FBQ08sV0FBTCxDQUFpQkMsR0FGaEIsRUFHdkJXLEdBSHVCLEVBQTFCOztBQUtBLFFBQUk2QyxXQUFKLEVBQWlCO0FBQ2ZoRSxvREFBSSxDQUFDTyxXQUFMLENBQ0dpRSw0QkFESCxDQUVJbkIsb0RBQVEsQ0FBQ3JELElBQVQsQ0FBY3lFLGlCQUFkLENBQWdDQyxVQUFoQyxDQUEyQzdDLElBQUksQ0FBQ2xDLEtBQWhELEVBQXVEZ0YsZUFBdkQsQ0FGSixFQUlHdkQsSUFKSCxDQUlRLFlBQU07QUFDVixlQUFPUyxJQUFJLENBQUMrQyxjQUFMLENBQW9CWixXQUFwQixDQUFQO0FBQ0QsT0FOSCxFQU9HNUMsSUFQSCxDQU9RLFlBQU07QUFDVixZQUFJLE9BQU84QyxPQUFPLENBQUNXLEtBQWYsS0FBeUIsUUFBN0IsRUFBdUM7QUFDckNDLDJEQUFPLENBQ0pDLEdBREgsV0FDVS9FLDhDQUFJLENBQUNPLFdBQUwsQ0FBaUJDLEdBRDNCLGNBQ2tDMkQsU0FEbEMsR0FFR2EsR0FGSCxDQUVPZCxPQUFPLENBQUNXLEtBRmYsRUFHR3pELElBSEgsQ0FHUSxZQUFNO0FBQ1YsbUJBQU8wRCxpREFBTyxDQUNYQyxHQURJLFdBQ0cvRSw4Q0FBSSxDQUFDTyxXQUFMLENBQWlCQyxHQURwQixjQUMyQjJELFNBRDNCLEdBRUpjLGNBRkksRUFBUDtBQUdELFdBUEgsRUFRRzdELElBUkgsQ0FRUSxVQUFDOEQsR0FBRCxFQUFTO0FBQ2JDLG9CQUFRLEdBQUdELEdBQVg7QUFDQW5CLGlCQUFLLENBQUNxQixNQUFOLENBQWFoRiw0Q0FBRSxDQUFDQyxVQUFILENBQWMsT0FBZCxFQUF1QkMsR0FBdkIsQ0FBMkJOLDhDQUFJLENBQUNPLFdBQUwsQ0FBaUJDLEdBQTVDLENBQWIsa0NBQ0swRCxPQURMO0FBRUVXLG1CQUFLLEVBQUVNO0FBRlQ7QUFJRCxXQWRIO0FBZUQsU0FoQkQsTUFnQk87QUFDTHBCLGVBQUssQ0FBQ3FCLE1BQU4sQ0FBYWhGLDRDQUFFLENBQUNDLFVBQUgsQ0FBYyxPQUFkLEVBQXVCQyxHQUF2QixDQUEyQk4sOENBQUksQ0FBQ08sV0FBTCxDQUFpQkMsR0FBNUMsQ0FBYixvQkFDSzBELE9BREw7QUFHRDtBQUNGLE9BN0JIO0FBOEJELEtBdERFLENBd0RIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDRCxHQWpZNEI7QUFBQSxDQUF0QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlL1tpZF0uMThiNTE5YjMwZTg4NjE4M2Y2NDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRiLCBhdXRoLCBzdG9yYWdlIH0gZnJvbSBcIi4uL2ZiQ29uZmlnXCI7XHJcbmltcG9ydCB7IHR5cGVzIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlL2FwcFwiO1xyXG5pbXBvcnQgeyBtZXNzYWdlIH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dfaW4gPSAoZW1haWwsIHBhc3N3b3JkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBjb25zb2xlLmxvZyhlbWFpbCwgcGFzc3dvcmQpO1xyXG4gIGF1dGguc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRQcm9maWxlID0gKGlkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkYi5jb2xsZWN0aW9uKFwidXNlcnNcIilcclxuICAgIC5kb2MoaWQgPyBpZCA6IGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gICAgLm9uU25hcHNob3QoKGRvYykgPT4ge1xyXG4gICAgICByZXR1cm4gZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IHR5cGVzLkdFVF9QUk9GSUxFLFxyXG4gICAgICAgIHBheWxvYWQ6IHsgaWQ6IGRvYy5pZCwgLi4uZG9jLmRhdGEoKSB9LFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEZhdm9yaXRlQXV0aG9ycyA9IChpZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgbGV0IGFkZGVkT247XHJcbiAgY29uc3QgdXNlcklkID0gaWQgPyBpZCA6IGF1dGguY3VycmVudFVzZXIudWlkO1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc0xpa2VzXCIpXHJcbiAgICAud2hlcmUoXCJzZW5kZXJJZFwiLCBcIj09XCIsIHVzZXJJZClcclxuICAgIC5nZXQoKVxyXG4gICAgLnRoZW4oKGRvY3MpID0+IHtcclxuICAgICAgbGV0IGZhdkFyciA9IFtdO1xyXG4gICAgICBkb2NzLmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgICAgIGFkZGVkT24gPSBkb2MuZGF0YSgpLmNyZWF0ZWRBdDtcclxuICAgICAgICBmYXZBcnIgPSBbLi4uZmF2QXJyLCBkb2MuZGF0YSgpLnJlY2lwaWVudF07XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gZmF2QXJyO1xyXG4gICAgfSlcclxuICAgIC50aGVuKCh1c2VycykgPT4ge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSB1c2Vycy5tYXAoKHVzZXIpID0+XHJcbiAgICAgICAgZGIuY29sbGVjdGlvbihcInVzZXJzXCIpLmRvYyh1c2VyKS5nZXQoKVxyXG4gICAgICApO1xyXG4gICAgICBQcm9taXNlLmFsbChyZXN1bHQpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGxldCBmYXZVc2VycyA9IFtdO1xyXG4gICAgICAgIHJlcy5mb3JFYWNoKFxyXG4gICAgICAgICAgKGRvYykgPT5cclxuICAgICAgICAgICAgKGZhdlVzZXJzID0gWy4uLmZhdlVzZXJzLCB7IGFkZGVkT24sIGlkOiBkb2MuaWQsIC4uLmRvYy5kYXRhKCkgfV0pXHJcbiAgICAgICAgKTtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiB0eXBlcy5HRVRfRkFWT1JJVEVfQVVUSE9SUyxcclxuICAgICAgICAgIHBheWxvYWQ6IGZhdlVzZXJzLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEZvbGxvd2VycyA9IChpZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgbGV0IGFkZGVkT247XHJcbiAgY29uc3QgdXNlcklkID0gaWQgPyBpZCA6IGF1dGguY3VycmVudFVzZXIudWlkO1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc0xpa2VzXCIpXHJcbiAgICAud2hlcmUoXCJyZWNpcGllbnRcIiwgXCI9PVwiLCB1c2VySWQpXHJcbiAgICAuZ2V0KClcclxuICAgIC50aGVuKChkb2NzKSA9PiB7XHJcbiAgICAgIGxldCBmYXZBcnIgPSBbXTtcclxuICAgICAgZG9jcy5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgICAgICBhZGRlZE9uID0gZG9jLmRhdGEoKS5jcmVhdGVkQXQ7XHJcbiAgICAgICAgZmF2QXJyID0gWy4uLmZhdkFyciwgZG9jLmRhdGEoKS5zZW5kZXJJZF07XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gZmF2QXJyO1xyXG4gICAgfSlcclxuICAgIC50aGVuKCh1c2VycykgPT4ge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSB1c2Vycy5tYXAoKHVzZXIpID0+XHJcbiAgICAgICAgZGIuY29sbGVjdGlvbihcInVzZXJzXCIpLmRvYyh1c2VyKS5nZXQoKVxyXG4gICAgICApO1xyXG4gICAgICBQcm9taXNlLmFsbChyZXN1bHQpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGxldCBmYXZVc2VycyA9IFtdO1xyXG4gICAgICAgIHJlcy5mb3JFYWNoKFxyXG4gICAgICAgICAgKGRvYykgPT5cclxuICAgICAgICAgICAgKGZhdlVzZXJzID0gWy4uLmZhdlVzZXJzLCB7IGFkZGVkT24sIGlkOiBkb2MuaWQsIC4uLmRvYy5kYXRhKCkgfV0pXHJcbiAgICAgICAgKTtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiB0eXBlcy5HRVRfRk9MTE9XRVJTLFxyXG4gICAgICAgICAgcGF5bG9hZDogZmF2VXNlcnMsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0SXNGb2xsb3dpbmcgPSAodXNlcklkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBpZiAoYXV0aC5jdXJyZW50VXNlcikge1xyXG4gICAgZGIuY29sbGVjdGlvbihcInVzZXJzTGlrZXNcIilcclxuICAgICAgLndoZXJlKFwicmVjaXBpZW50XCIsIFwiPT1cIiwgdXNlcklkKVxyXG4gICAgICAud2hlcmUoXCJzZW5kZXJJZFwiLCBcIj09XCIsIGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gICAgICAub25TbmFwc2hvdCgoc25hcHNob3QpID0+IHtcclxuICAgICAgICBjb25zdCBhbnN3ZXIgPSBzbmFwc2hvdC5kb2NzLmxlbmd0aCA+IDAgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogdHlwZXMuSVNfRk9MTE9XSU5HLCBwYXlsb2FkOiBhbnN3ZXIgfSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBmb2xsb3dVc2VyID0gKGlkLCBpc0Zhdm9yaXRlLCBuZXdGb2xsb3dlcikgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgaWYgKGlzRmF2b3JpdGUpIHJldHVybiBtZXNzYWdlLndhcm5pbmcoXCJZb3UgYXJlIGFscmVhZHkgZm9sbG93aW5nIHRoaXMgdXNlclwiKTtcclxuICBpZiAoIWF1dGguY3VycmVudFVzZXIpXHJcbiAgICByZXR1cm4gbWVzc2FnZS5lcnJvcihcIllvdSBuZWVkIHRvIGJlIGxvZ2dlZCBpbiB0byBmb2xsb3cgdXNlcnNcIik7XHJcbiAgaWYgKCFhdXRoLmN1cnJlbnRVc2VyLmVtYWlsVmVyaWZpZWQpXHJcbiAgICByZXR1cm4gbWVzc2FnZS5lcnJvcihcIllvdSBuZWVkIHRvIHZlcmlmeSB5b3VyIGVtYWlsIGZpcnN0XCIpO1xyXG5cclxuICBkYi5jb2xsZWN0aW9uKFwidXNlcnNMaWtlc1wiKVxyXG4gICAgLmFkZCh7XHJcbiAgICAgIHNlbmRlcjogbmV3Rm9sbG93ZXIudXNlcm5hbWUsXHJcbiAgICAgIHNlbmRlcklkOiBuZXdGb2xsb3dlci51aWQsXHJcbiAgICAgIHJlY2lwaWVudDogaWQsXHJcbiAgICAgIGNyZWF0ZWRBdDogZmlyZWJhc2UuZmlyZXN0b3JlLkZpZWxkVmFsdWUuc2VydmVyVGltZXN0YW1wKCksXHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKCkgPT4gbWVzc2FnZS5zdWNjZXNzKFwiWW91IGFyZSBub3cgZm9sbG93aW5nIHRoaXMgdXNlclwiKSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiBtZXNzYWdlLmVycm9yKFwiVGhlcmUgaGFzIGJlZW4gYSBwcm9ibGVtXCIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1bmZvbGxvd1VzZXIgPSAoaWQsIGlzRmF2b3JpdGUpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGlmICghaXNGYXZvcml0ZSlcclxuICAgIHJldHVybiBtZXNzYWdlLndhcm5pbmcoXCJZb3UgYXJlIG5vdCBmb2xsb3dpbmcgdGhpcyB1c2VyIHlldFwiKTtcclxuXHJcbiAgZGIuY29sbGVjdGlvbihcInVzZXJzTGlrZXNcIilcclxuICAgIC53aGVyZShcInJlY2lwaWVudFwiLCBcIj09XCIsIGlkKVxyXG4gICAgLndoZXJlKFwic2VuZGVySWRcIiwgXCI9PVwiLCBhdXRoLmN1cnJlbnRVc2VyLnVpZClcclxuICAgIC5nZXQoKVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc0xpa2VzXCIpLmRvYyhkYXRhLmRvY3NbMF0uaWQpLmRlbGV0ZSgpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKCgpID0+IG1lc3NhZ2Uuc3VjY2VzcyhcIlVzZXIgc3VjY2Vzc2Z1bGx5IHVuZm9sbG93ZWRcIikpXHJcbiAgICAuY2F0Y2goKGVycikgPT4gbWVzc2FnZS5lcnJvcihcIlRoZXJlIGhhcyBiZWVuIGEgcHJvYmxlbVwiKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY2hhbmdlUHJvZmlsZSA9IChkYXRhLCBzZXRPcGVuLCB1c2VybmFtZSwgdXNlckltYWdlKSA9PiAoXHJcbiAgZGlzcGF0Y2hcclxuKSA9PiB7XHJcbiAgY29uc3QgYmF0Y2ggPSBkYi5iYXRjaCgpO1xyXG4gIGNvbnN0IHsgbmV3UGFzc3dvcmQsIGFjdHVhbFBhc3N3b3JkLCAuLi5uZXdJbmZvIH0gPSBkYXRhO1xyXG4gIGNvbnN0IGltYWdlTmFtZSA9IGAke2F1dGguY3VycmVudFVzZXIudWlkfV8ke25ld0luZm8udXNlcm5hbWV9YDtcclxuXHJcbiAgLy8gU1RPUklFUywgQ0hBUFRFUlMsIENIQVJBQ1RFUlMgJiBDT01NRU5UUyBRVUVSSUVTXHJcbiAgY29uc3QgdXNlclN0b3JpZXNRdWVyeSA9IGRiXHJcbiAgICAuY29sbGVjdGlvbihcInN0b3JpZXNcIilcclxuICAgIC53aGVyZShcImF1dGhvcklkXCIsIFwiPT1cIiwgYXV0aC5jdXJyZW50VXNlci51aWQpXHJcbiAgICAuZ2V0KCk7XHJcbiAgY29uc3QgdXNlckNoYXB0ZXJzUXVlcnkgPSBkYlxyXG4gICAgLmNvbGxlY3Rpb24oXCJjaGFwdGVyc1wiKVxyXG4gICAgLndoZXJlKFwiYXV0aG9ySWRcIiwgXCI9PVwiLCBhdXRoLmN1cnJlbnRVc2VyLnVpZClcclxuICAgIC5nZXQoKTtcclxuICBjb25zdCB1c2VyQ2hhcmFjdGVyc1F1ZXJ5ID0gZGJcclxuICAgIC5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc1wiKVxyXG4gICAgLndoZXJlKFwiYXV0aG9ySWRcIiwgXCI9PVwiLCBhdXRoLmN1cnJlbnRVc2VyLnVpZClcclxuICAgIC5nZXQoKTtcclxuICBjb25zdCB1c2VyQ29tbWVudHNRdWVyeSA9IGRiXHJcbiAgICAuY29sbGVjdGlvbihcImNvbW1lbnRzXCIpXHJcbiAgICAud2hlcmUoXCJ1c2VySWRcIiwgXCI9PVwiLCBhdXRoLmN1cnJlbnRVc2VyLnVpZClcclxuICAgIC5nZXQoKTtcclxuXHJcbiAgaWYgKG5ld1Bhc3N3b3JkKSB7XHJcbiAgICBhdXRoLmN1cnJlbnRVc2VyXHJcbiAgICAgIC5yZWF1dGhlbnRpY2F0ZVdpdGhDcmVkZW50aWFsKFxyXG4gICAgICAgIGZpcmViYXNlLmF1dGguRW1haWxBdXRoUHJvdmlkZXIuY3JlZGVudGlhbCh1c2VyLmVtYWlsLCBjdXJyZW50UGFzc3dvcmQpXHJcbiAgICAgIClcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiB1c2VyLnVwZGF0ZVBhc3N3b3JkKG5ld1Bhc3N3b3JkKTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIGlmICh0eXBlb2YgbmV3SW5mby5pbWFnZSA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgc3RvcmFnZVxyXG4gICAgICAgICAgICAucmVmKGAke2F1dGguY3VycmVudFVzZXIudWlkfS8ke2ltYWdlTmFtZX1gKVxyXG4gICAgICAgICAgICAucHV0KG5ld0luZm8uaW1hZ2UpXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gc3RvcmFnZVxyXG4gICAgICAgICAgICAgICAgLnJlZihgJHthdXRoLmN1cnJlbnRVc2VyLnVpZH0vJHtpbWFnZU5hbWV9YClcclxuICAgICAgICAgICAgICAgIC5nZXREb3dubG9hZFVSTCgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigodXJsKSA9PiB7XHJcbiAgICAgICAgICAgICAgaW1hZ2VVcmwgPSB1cmw7XHJcbiAgICAgICAgICAgICAgYmF0Y2gudXBkYXRlKGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKS5kb2MoYXV0aC5jdXJyZW50VXNlci51aWQpLCB7XHJcbiAgICAgICAgICAgICAgICAuLi5uZXdJbmZvLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IGltYWdlVXJsLFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYmF0Y2gudXBkYXRlKGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKS5kb2MoYXV0aC5jdXJyZW50VXNlci51aWQpLCB7XHJcbiAgICAgICAgICAgIC4uLm5ld0luZm8sXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gICBjb25zdCByZWF1dGhlbnRpY2F0ZSA9IChjdXJyZW50UGFzc3dvcmQpID0+IHtcclxuICAvLyAgIGNvbnN0IHVzZXIgPSBhdXRoLmN1cnJlbnRVc2VyO1xyXG4gIC8vICAgY29uc3QgY3JlZCA9IDtcclxuICAvLyAgIHJldHVybiB1c2VyLnJlYXV0aGVudGljYXRlV2l0aENyZWRlbnRpYWwoY3JlZCk7XHJcbiAgLy8gfTtcclxuICAvLyBjb25zdCBiYXRjaCA9IGRiLmJhdGNoKCk7XHJcbiAgLy8gY29uc3QgeyBuZXdQYXNzd29yZCwgYWN0dWFsUGFzc3dvcmQsIC4uLm5ld0luZm8gfSA9IGRhdGE7XHJcbiAgLy8gY29uc3QgaW1hZ2VOYW1lID0gYCR7YXV0aC5jdXJyZW50VXNlci51aWR9XyR7ZGF0YS51c2VybmFtZX1gO1xyXG4gIC8vIGxldCBpbWFnZVVybCA9IFwiXCI7XHJcbiAgLy8gY29uc3QgdXNlclN0b3JpZXNRdWVyeSA9IGRiXHJcbiAgLy8gICAuY29sbGVjdGlvbihcInN0b3JpZXNcIilcclxuICAvLyAgIC53aGVyZShcImF1dGhvcklkXCIsIFwiPT1cIiwgYXV0aC5jdXJyZW50VXNlci51aWQpXHJcbiAgLy8gICAuZ2V0KCk7XHJcbiAgLy8gY29uc3QgdXNlckNoYXB0ZXJzUXVlcnkgPSBkYlxyXG4gIC8vICAgLmNvbGxlY3Rpb24oXCJjaGFwdGVyc1wiKVxyXG4gIC8vICAgLndoZXJlKFwiYXV0aG9ySWRcIiwgXCI9PVwiLCBhdXRoLmN1cnJlbnRVc2VyLnVpZClcclxuICAvLyAgIC5nZXQoKTtcclxuICAvLyBjb25zdCB1c2VyQ2hhcmFjdGVyc1F1ZXJ5ID0gZGJcclxuICAvLyAgIC5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc1wiKVxyXG4gIC8vICAgLndoZXJlKFwiYXV0aG9ySWRcIiwgXCI9PVwiLCBhdXRoLmN1cnJlbnRVc2VyLnVpZClcclxuICAvLyAgIC5nZXQoKTtcclxuICAvLyBjb25zdCB1c2VyQ29tbWVudHNRdWVyeSA9IGRiXHJcbiAgLy8gICAuY29sbGVjdGlvbihcImNvbW1lbnRzXCIpXHJcbiAgLy8gICAud2hlcmUoXCJ1c2VySWRcIiwgXCI9PVwiLCBhdXRoLmN1cnJlbnRVc2VyLnVpZClcclxuICAvLyAgIC5nZXQoKTtcclxuICAvLyBQcm9taXNlLmFsbChbXHJcbiAgLy8gICB1c2VyU3Rvcmllc1F1ZXJ5LFxyXG4gIC8vICAgdXNlckNoYXB0ZXJzUXVlcnksXHJcbiAgLy8gICB1c2VyQ2hhcmFjdGVyc1F1ZXJ5LFxyXG4gIC8vICAgdXNlckNvbW1lbnRzUXVlcnksXHJcbiAgLy8gXSkudGhlbigocmVzKSA9PiB7XHJcbiAgLy8gICByZXNbMF0uZm9yRWFjaCgoc3RvcnkpID0+IHtcclxuICAvLyAgICAgYmF0Y2gudXBkYXRlKGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpLmRvYyhzdG9yeS5pZCksIHtcclxuICAvLyAgICAgICB1c2VySW1hZ2U6IHVybCxcclxuICAvLyAgICAgICBhdXRob3JOYW1lOiBkYXRhLnVzZXJuYW1lLFxyXG4gIC8vICAgICB9KTtcclxuICAvLyAgIH0pO1xyXG4gIC8vICAgcmVzWzFdLmZvckVhY2goKGNoYXApID0+IHtcclxuICAvLyAgICAgYmF0Y2gudXBkYXRlKGRiLmNvbGxlY3Rpb24oXCJjaGFwdGVyc1wiKS5kb2MoY2hhcC5pZCksIHtcclxuICAvLyAgICAgICB1c2VySW1hZ2U6IHVybCxcclxuICAvLyAgICAgICBhdXRob3JOYW1lOiBkYXRhLnVzZXJuYW1lLFxyXG4gIC8vICAgICB9KTtcclxuICAvLyAgIH0pO1xyXG4gIC8vICAgcmVzWzJdLmZvckVhY2goKGNoYXIpID0+IHtcclxuICAvLyAgICAgYmF0Y2gudXBkYXRlKGRiLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzXCIpLmRvYyhjaGFyLmlkKSwge1xyXG4gIC8vICAgICAgIHVzZXJJbWFnZTogdXJsLFxyXG4gIC8vICAgICAgIGF1dGhvck5hbWU6IGRhdGEudXNlcm5hbWUsXHJcbiAgLy8gICAgIH0pO1xyXG4gIC8vICAgfSk7XHJcbiAgLy8gICByZXNbM10uZm9yRWFjaCgoY2hhcikgPT4ge1xyXG4gIC8vICAgICBiYXRjaC51cGRhdGUoZGIuY29sbGVjdGlvbihcImNvbW1lbnRzXCIpLmRvYyhjaGFyLmlkKSwge1xyXG4gIC8vICAgICAgIHVzZXJJbWFnZTogdXJsLFxyXG4gIC8vICAgICAgIHVzZXJuYW1lOiBkYXRhLnVzZXJuYW1lLFxyXG4gIC8vICAgICB9KTtcclxuICAvLyAgIH0pO1xyXG4gIC8vIH0pO1xyXG4gIC8vIC8vIFVQREFURSBsJ1VTRVJcclxuICAvLyBpZiAodHlwZW9mIGRhdGEuaW1hZ2UgPT09IFwib2JqZWN0XCIpIHtcclxuICAvLyAgIHN0b3JhZ2VcclxuICAvLyAgICAgLnJlZihgJHthdXRoLmN1cnJlbnRVc2VyLnVpZH0vJHtpbWFnZU5hbWV9YClcclxuICAvLyAgICAgLnB1dChkYXRhLmltYWdlKVxyXG4gIC8vICAgICAudGhlbigoKSA9PiB7XHJcbiAgLy8gICAgICAgcmV0dXJuIHN0b3JhZ2VcclxuICAvLyAgICAgICAgIC5yZWYoYCR7YXV0aC5jdXJyZW50VXNlci51aWR9LyR7aW1hZ2VOYW1lfWApXHJcbiAgLy8gICAgICAgICAuZ2V0RG93bmxvYWRVUkwoKTtcclxuICAvLyAgICAgfSlcclxuICAvLyAgICAgLnRoZW4oKHVybCkgPT4ge1xyXG4gIC8vICAgICAgIGltYWdlVXJsID0gdXJsO1xyXG4gIC8vICAgICAgIGRiLnVwZGF0ZShkYi5jb2xsZWN0aW9uKFwidXNlcnNcIikuZG9jKGF1dGguY3VycmVudFVzZXIudWlkKSwge1xyXG4gIC8vICAgICAgICAgLi4ubmV3SW5mbyxcclxuICAvLyAgICAgICAgIGltYWdlOiBpbWFnZVVybCxcclxuICAvLyAgICAgICB9KTtcclxuICAvLyAgICAgfSk7XHJcbiAgLy8gfSBlbHNlIHtcclxuICAvLyAgIGRiLnVwZGF0ZShkYi5jb2xsZWN0aW9uKFwidXNlcnNcIikuZG9jKGF1dGguY3VycmVudFVzZXIudWlkKSwge1xyXG4gIC8vICAgICAuLi5uZXdJbmZvLFxyXG4gIC8vICAgfSk7XHJcbiAgLy8gfVxyXG4gIC8vIC8vIFVQREFURSBMRSBNT1QgREUgUEFTU0VcclxuICAvLyBpZiAobmV3UGFzc3dvcmQpIHtcclxuICAvLyAgIGF1dGguY3VycmVudFVzZXJcclxuICAvLyAgICAgLnJlYXV0aGVudGljYXRlV2l0aENyZWRlbnRpYWwoXHJcbiAgLy8gICAgICAgZmlyZWJhc2UuYXV0aC5FbWFpbEF1dGhQcm92aWRlci5jcmVkZW50aWFsKHVzZXIuZW1haWwsIGN1cnJlbnRQYXNzd29yZClcclxuICAvLyAgICAgKVxyXG4gIC8vICAgICAudGhlbigoKSA9PiB7XHJcbiAgLy8gICAgICAgcmV0dXJuIHVzZXIudXBkYXRlUGFzc3dvcmQobmV3UGFzc3dvcmQpO1xyXG4gIC8vICAgICB9KTtcclxuICAvLyB9XHJcbiAgLy8gLy8gVVBEQVRFIExFUyBUT1JJRVMsIENIQVJBQ1RFUlMgJiBDT01NRU5UUyBTSSBCRVNPSU5cclxuICAvLyAvLyBpZigpXHJcbiAgLy8gaWYgKG5ld1Bhc3N3b3JkKSB7XHJcbiAgLy8gICByZWF1dGhlbnRpY2F0ZShhY3R1YWxQYXNzd29yZClcclxuICAvLyAgICAgLnRoZW4oKCkgPT4ge1xyXG4gIC8vICAgICAgIGNvbnN0IHVzZXIgPSBhdXRoLmN1cnJlbnRVc2VyO1xyXG4gIC8vICAgICAgIHVzZXIudXBkYXRlUGFzc3dvcmQobmV3UGFzc3dvcmQpLnRoZW4oKCkgPT4ge1xyXG4gIC8vICAgICAgICAgaWYgKHR5cGVvZiBkYXRhLmltYWdlID09PSBcIm9iamVjdFwiKSB7XHJcbiAgLy8gICAgICAgICAgIHN0b3JhZ2VcclxuICAvLyAgICAgICAgICAgICAucmVmKGAke2F1dGguY3VycmVudFVzZXIudWlkfS8ke2ltYWdlTmFtZX1gKVxyXG4gIC8vICAgICAgICAgICAgIC5wdXQoZGF0YS5pbWFnZSlcclxuICAvLyAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgLy8gICAgICAgICAgICAgICByZXR1cm4gc3RvcmFnZVxyXG4gIC8vICAgICAgICAgICAgICAgICAucmVmKGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gIC8vICAgICAgICAgICAgICAgICAuY2hpbGQoaW1hZ2VOYW1lKVxyXG4gIC8vICAgICAgICAgICAgICAgICAuZ2V0RG93bmxvYWRVUkwoKTtcclxuICAvLyAgICAgICAgICAgICB9KVxyXG4gIC8vICAgICAgICAgICAgIC50aGVuKCh1cmwpID0+IHtcclxuICAvLyAgICAgICAgICAgICAgIGlmIChkYXRhLnVzZXJuYW1lICE9PSB1c2VybmFtZSB8fCBkYXRhLmltYWdlICE9PSB1c2VySW1hZ2UpIHtcclxuICAvLyAgICAgICAgICAgICAgICAgYmF0Y2gudXBkYXRlKFxyXG4gIC8vICAgICAgICAgICAgICAgICAgIGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKS5kb2MoYXV0aC5jdXJyZW50VXNlci51aWQpLFxyXG4gIC8vICAgICAgICAgICAgICAgICAgIHtcclxuICAvLyAgICAgICAgICAgICAgICAgICAgIGltYWdlOiB1cmwsXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAuLi5uZXdJbmZvLFxyXG4gIC8vICAgICAgICAgICAgICAgICAgIH1cclxuICAvLyAgICAgICAgICAgICAgICAgKTtcclxuICAvLyAgICAgICAgICAgICAgICAgYmF0Y2hcclxuICAvLyAgICAgICAgICAgICAgICAgICAuY29tbWl0KClcclxuICAvLyAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICBzZXRPcGVuKGZhbHNlKTtcclxuICAvLyAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhcclxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgXCJZb3VyIHByb2ZpbGUgaGFzIGJlZW4gc3VjY2Vzc2Z1bGx5IHVwZGF0ZWRcIlxyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAvLyAgICAgICAgICAgICAgICAgICB9KVxyXG4gIC8vICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAvLyAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UuZXJyb3IoZXJyb3IubWVzc2FnZSk7XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgLy8gICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gIC8vICAgICAgICAgICAgICAgICBiYXRjaC51cGRhdGUoXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgZGIuY29sbGVjdGlvbihcInVzZXJzXCIpLmRvYyhhdXRoLmN1cnJlbnRVc2VyLnVpZCksXHJcbiAgLy8gICAgICAgICAgICAgICAgICAge1xyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IHVybCxcclxuICAvLyAgICAgICAgICAgICAgICAgICAgIC4uLm5ld0luZm8sXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgfVxyXG4gIC8vICAgICAgICAgICAgICAgICApO1xyXG4gIC8vICAgICAgICAgICAgICAgICBiYXRjaFxyXG4gIC8vICAgICAgICAgICAgICAgICAgIC5jb21taXQoKVxyXG4gIC8vICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAvLyAgICAgICAgICAgICAgICAgICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5zdWNjZXNzKFxyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgICBcIllvdXIgcHJvZmlsZSBoYXMgYmVlbiBzdWNjZXNzZnVsbHkgdXBkYXRlZFwiXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICApO1xyXG4gIC8vICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5lcnJvcihlcnJvci5tZXNzYWdlKTtcclxuICAvLyAgICAgICAgICAgICAgICAgICB9KTtcclxuICAvLyAgICAgICAgICAgICAgIH1cclxuICAvLyAgICAgICAgICAgICB9KTtcclxuICAvLyAgICAgICAgIH0gZWxzZSB7XHJcbiAgLy8gICAgICAgICAgIGlmIChkYXRhLnVzZXJuYW1lICE9PSB1c2VybmFtZSkge1xyXG4gIC8vICAgICAgICAgICAgIFByb21pc2UuYWxsKFtcclxuICAvLyAgICAgICAgICAgICAgIHVzZXJTdG9yaWVzUXVlcnksXHJcbiAgLy8gICAgICAgICAgICAgICB1c2VyQ2hhcHRlcnNRdWVyeSxcclxuICAvLyAgICAgICAgICAgICAgIHVzZXJDaGFyYWN0ZXJzUXVlcnksXHJcbiAgLy8gICAgICAgICAgICAgICB1c2VyQ29tbWVudHNRdWVyeSxcclxuICAvLyAgICAgICAgICAgICBdKS50aGVuKChyZXMpID0+IHtcclxuICAvLyAgICAgICAgICAgICAgIHJlc1swXS5mb3JFYWNoKChzdG9yeSkgPT4ge1xyXG4gIC8vICAgICAgICAgICAgICAgICBiYXRjaC51cGRhdGUoZGIuY29sbGVjdGlvbihcInN0b3JpZXNcIikuZG9jKHN0b3J5LmlkKSwge1xyXG4gIC8vICAgICAgICAgICAgICAgICAgIGF1dGhvck5hbWU6IGRhdGEudXNlcm5hbWUsXHJcbiAgLy8gICAgICAgICAgICAgICAgIH0pO1xyXG4gIC8vICAgICAgICAgICAgICAgfSk7XHJcbiAgLy8gICAgICAgICAgICAgICByZXNbMF0uZm9yRWFjaCgoY2hhcCkgPT4ge1xyXG4gIC8vICAgICAgICAgICAgICAgICBiYXRjaC51cGRhdGUoZGIuY29sbGVjdGlvbihcImNoYXB0ZXJzXCIpLmRvYyhjaGFwLmlkKSwge1xyXG4gIC8vICAgICAgICAgICAgICAgICAgIGF1dGhvck5hbWU6IGRhdGEudXNlcm5hbWUsXHJcbiAgLy8gICAgICAgICAgICAgICAgIH0pO1xyXG4gIC8vICAgICAgICAgICAgICAgfSk7XHJcbiAgLy8gICAgICAgICAgICAgICByZXNbMF0uZm9yRWFjaCgoY2hhcikgPT4ge1xyXG4gIC8vICAgICAgICAgICAgICAgICBiYXRjaC51cGRhdGUoZGIuY29sbGVjdGlvbihcImNoYXJhY3RlcnNcIikuZG9jKGNoYXIuaWQpLCB7XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgYXV0aG9yTmFtZTogZGF0YS51c2VybmFtZSxcclxuICAvLyAgICAgICAgICAgICAgICAgfSk7XHJcbiAgLy8gICAgICAgICAgICAgICB9KTtcclxuICAvLyAgICAgICAgICAgICAgIHJlc1swXS5mb3JFYWNoKChjaGFyKSA9PiB7XHJcbiAgLy8gICAgICAgICAgICAgICAgIGJhdGNoLnVwZGF0ZShkYi5jb2xsZWN0aW9uKFwiY29tbWVudHNcIikuZG9jKGNoYXIuaWQpLCB7XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6IGRhdGEudXNlcm5hbWUsXHJcbiAgLy8gICAgICAgICAgICAgICAgIH0pO1xyXG4gIC8vICAgICAgICAgICAgICAgfSk7XHJcbiAgLy8gICAgICAgICAgICAgfSk7XHJcbiAgLy8gICAgICAgICAgICAgYmF0Y2gudXBkYXRlKGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKS5kb2MoYXV0aC5jdXJyZW50VXNlci51aWQpLCB7XHJcbiAgLy8gICAgICAgICAgICAgICAuLi5uZXdJbmZvLFxyXG4gIC8vICAgICAgICAgICAgIH0pO1xyXG4gIC8vICAgICAgICAgICB9IGVsc2Uge1xyXG4gIC8vICAgICAgICAgICAgIGJhdGNoLnVwZGF0ZShkYi5jb2xsZWN0aW9uKFwidXNlcnNcIikuZG9jKGF1dGguY3VycmVudFVzZXIudWlkKSwge1xyXG4gIC8vICAgICAgICAgICAgICAgLi4ubmV3SW5mbyxcclxuICAvLyAgICAgICAgICAgICB9KTtcclxuICAvLyAgICAgICAgICAgICBiYXRjaFxyXG4gIC8vICAgICAgICAgICAgICAgLmNvbW1pdCgpXHJcbiAgLy8gICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgLy8gICAgICAgICAgICAgICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gIC8vICAgICAgICAgICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoXCJZb3VyIHByb2ZpbGUgaGFzIGJlZW4gc3VjY2Vzc2Z1bGx5IHVwZGF0ZWRcIik7XHJcbiAgLy8gICAgICAgICAgICAgICB9KVxyXG4gIC8vICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gIC8vICAgICAgICAgICAgICAgICBtZXNzYWdlLmVycm9yKGVycm9yLm1lc3NhZ2UpO1xyXG4gIC8vICAgICAgICAgICAgICAgfSk7XHJcbiAgLy8gICAgICAgICAgIH1cclxuICAvLyAgICAgICAgIH1cclxuICAvLyAgICAgICB9KTtcclxuICAvLyAgICAgfSlcclxuICAvLyAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAvLyAgICAgICBtZXNzYWdlLmVycm9yKGVyci5tZXNzYWdlKTtcclxuICAvLyAgICAgfSk7XHJcbiAgLy8gfSBlbHNlIHtcclxuICAvLyAgIGlmICh0eXBlb2YgZGF0YS5pbWFnZSA9PT0gXCJvYmplY3RcIikge1xyXG4gIC8vICAgICBzdG9yYWdlXHJcbiAgLy8gICAgICAgLnJlZihgJHthdXRoLmN1cnJlbnRVc2VyLnVpZH0vJHtpbWFnZU5hbWV9YClcclxuICAvLyAgICAgICAucHV0KGRhdGEuaW1hZ2UpXHJcbiAgLy8gICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gIC8vICAgICAgICAgcmV0dXJuIHN0b3JhZ2VcclxuICAvLyAgICAgICAgICAgLnJlZihhdXRoLmN1cnJlbnRVc2VyLnVpZClcclxuICAvLyAgICAgICAgICAgLmNoaWxkKGltYWdlTmFtZSlcclxuICAvLyAgICAgICAgICAgLmdldERvd25sb2FkVVJMKCk7XHJcbiAgLy8gICAgICAgfSlcclxuICAvLyAgICAgICAudGhlbigodXJsKSA9PiB7XHJcbiAgLy8gICAgICAgICBpZiAoZGF0YS51c2VybmFtZSAhPT0gdXNlcm5hbWUgfHwgZGF0YS5pbWFnZSAhPT0gdXNlckltYWdlKSB7XHJcbiAgLy8gICAgICAgICAgIFByb21pc2UuYWxsKFtcclxuICAvLyAgICAgICAgICAgICB1c2VyU3Rvcmllc1F1ZXJ5LFxyXG4gIC8vICAgICAgICAgICAgIHVzZXJDaGFwdGVyc1F1ZXJ5LFxyXG4gIC8vICAgICAgICAgICAgIHVzZXJDaGFyYWN0ZXJzUXVlcnksXHJcbiAgLy8gICAgICAgICAgICAgdXNlckNvbW1lbnRzUXVlcnksXHJcbiAgLy8gICAgICAgICAgIF0pLnRoZW4oKHJlcykgPT4ge1xyXG4gIC8vICAgICAgICAgICAgIHJlc1swXS5mb3JFYWNoKChzdG9yeSkgPT4ge1xyXG4gIC8vICAgICAgICAgICAgICAgYmF0Y2gudXBkYXRlKGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpLmRvYyhzdG9yeS5pZCksIHtcclxuICAvLyAgICAgICAgICAgICAgICAgdXNlckltYWdlOiB1cmwsXHJcbiAgLy8gICAgICAgICAgICAgICAgIGF1dGhvck5hbWU6IGRhdGEudXNlcm5hbWUsXHJcbiAgLy8gICAgICAgICAgICAgICB9KTtcclxuICAvLyAgICAgICAgICAgICB9KTtcclxuICAvLyAgICAgICAgICAgICByZXNbMV0uZm9yRWFjaCgoY2hhcCkgPT4ge1xyXG4gIC8vICAgICAgICAgICAgICAgYmF0Y2gudXBkYXRlKGRiLmNvbGxlY3Rpb24oXCJjaGFwdGVyc1wiKS5kb2MoY2hhcC5pZCksIHtcclxuICAvLyAgICAgICAgICAgICAgICAgdXNlckltYWdlOiB1cmwsXHJcbiAgLy8gICAgICAgICAgICAgICAgIGF1dGhvck5hbWU6IGRhdGEudXNlcm5hbWUsXHJcbiAgLy8gICAgICAgICAgICAgICB9KTtcclxuICAvLyAgICAgICAgICAgICB9KTtcclxuICAvLyAgICAgICAgICAgICByZXNbMl0uZm9yRWFjaCgoY2hhcikgPT4ge1xyXG4gIC8vICAgICAgICAgICAgICAgYmF0Y2gudXBkYXRlKGRiLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzXCIpLmRvYyhjaGFyLmlkKSwge1xyXG4gIC8vICAgICAgICAgICAgICAgICB1c2VySW1hZ2U6IHVybCxcclxuICAvLyAgICAgICAgICAgICAgICAgYXV0aG9yTmFtZTogZGF0YS51c2VybmFtZSxcclxuICAvLyAgICAgICAgICAgICAgIH0pO1xyXG4gIC8vICAgICAgICAgICAgIH0pO1xyXG4gIC8vICAgICAgICAgICAgIHJlc1szXS5mb3JFYWNoKChjaGFyKSA9PiB7XHJcbiAgLy8gICAgICAgICAgICAgICBiYXRjaC51cGRhdGUoZGIuY29sbGVjdGlvbihcImNvbW1lbnRzXCIpLmRvYyhjaGFyLmlkKSwge1xyXG4gIC8vICAgICAgICAgICAgICAgICB1c2VySW1hZ2U6IHVybCxcclxuICAvLyAgICAgICAgICAgICAgICAgdXNlcm5hbWU6IGRhdGEudXNlcm5hbWUsXHJcbiAgLy8gICAgICAgICAgICAgICB9KTtcclxuICAvLyAgICAgICAgICAgICB9KTtcclxuICAvLyAgICAgICAgICAgfSk7XHJcbiAgLy8gICAgICAgICAgIGJhdGNoLnVwZGF0ZShkYi5jb2xsZWN0aW9uKFwidXNlcnNcIikuZG9jKGF1dGguY3VycmVudFVzZXIudWlkKSwge1xyXG4gIC8vICAgICAgICAgICAgIC4uLm5ld0luZm8sXHJcbiAgLy8gICAgICAgICAgICAgaW1hZ2U6IHVybCxcclxuICAvLyAgICAgICAgICAgfSk7XHJcbiAgLy8gICAgICAgICAgIGJhdGNoXHJcbiAgLy8gICAgICAgICAgICAgLmNvbW1pdCgpXHJcbiAgLy8gICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gIC8vICAgICAgICAgICAgICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgLy8gICAgICAgICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoXCJZb3VyIHByb2ZpbGUgaGFzIGJlZW4gc3VjY2Vzc2Z1bGx5IHVwZGF0ZWRcIik7XHJcbiAgLy8gICAgICAgICAgICAgfSlcclxuICAvLyAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgLy8gICAgICAgICAgICAgICBtZXNzYWdlLmVycm9yKGVycm9yLm1lc3NhZ2UpO1xyXG4gIC8vICAgICAgICAgICAgIH0pO1xyXG4gIC8vICAgICAgICAgfSBlbHNlIHtcclxuICAvLyAgICAgICAgICAgYmF0Y2gudXBkYXRlKGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKS5kb2MoYXV0aC5jdXJyZW50VXNlci51aWQpLCB7XHJcbiAgLy8gICAgICAgICAgICAgLi4ubmV3SW5mbyxcclxuICAvLyAgICAgICAgICAgfSk7XHJcbiAgLy8gICAgICAgICAgIGJhdGNoXHJcbiAgLy8gICAgICAgICAgICAgLmNvbW1pdCgpXHJcbiAgLy8gICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gIC8vICAgICAgICAgICAgICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgLy8gICAgICAgICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoXCJZb3VyIHByb2ZpbGUgaGFzIGJlZW4gc3VjY2Vzc2Z1bGx5IHVwZGF0ZWRcIik7XHJcbiAgLy8gICAgICAgICAgICAgfSlcclxuICAvLyAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgLy8gICAgICAgICAgICAgICBtZXNzYWdlLmVycm9yKGVycm9yLm1lc3NhZ2UpO1xyXG4gIC8vICAgICAgICAgICAgIH0pO1xyXG4gIC8vICAgICAgICAgfVxyXG4gIC8vICAgICAgIH0pO1xyXG4gIC8vICAgfSBlbHNlIHtcclxuICAvLyAgICAgaWYgKGRhdGEudXNlcm5hbWUgIT09IHVzZXJuYW1lKSB7XHJcbiAgLy8gICAgICAgUHJvbWlzZS5hbGwoW1xyXG4gIC8vICAgICAgICAgdXNlclN0b3JpZXNRdWVyeSxcclxuICAvLyAgICAgICAgIHVzZXJDaGFwdGVyc1F1ZXJ5LFxyXG4gIC8vICAgICAgICAgdXNlckNoYXJhY3RlcnNRdWVyeSxcclxuICAvLyAgICAgICAgIHVzZXJDb21tZW50c1F1ZXJ5LFxyXG4gIC8vICAgICAgIF0pLnRoZW4oKHJlcykgPT4ge1xyXG4gIC8vICAgICAgICAgcmVzWzBdLmZvckVhY2goKHN0b3J5KSA9PiB7XHJcbiAgLy8gICAgICAgICAgIGJhdGNoLnVwZGF0ZShkYi5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKS5kb2Moc3RvcnkuaWQpLCB7XHJcbiAgLy8gICAgICAgICAgICAgYXV0aG9yTmFtZTogZGF0YS51c2VybmFtZSxcclxuICAvLyAgICAgICAgICAgfSk7XHJcbiAgLy8gICAgICAgICB9KTtcclxuICAvLyAgICAgICAgIHJlc1sxXS5mb3JFYWNoKChjaGFwKSA9PiB7XHJcbiAgLy8gICAgICAgICAgIGJhdGNoLnVwZGF0ZShkYi5jb2xsZWN0aW9uKFwiY2hhcHRlcnNcIikuZG9jKGNoYXAuaWQpLCB7XHJcbiAgLy8gICAgICAgICAgICAgYXV0aG9yTmFtZTogZGF0YS51c2VybmFtZSxcclxuICAvLyAgICAgICAgICAgfSk7XHJcbiAgLy8gICAgICAgICB9KTtcclxuICAvLyAgICAgICAgIHJlc1syXS5mb3JFYWNoKChjaGFyKSA9PiB7XHJcbiAgLy8gICAgICAgICAgIGJhdGNoLnVwZGF0ZShkYi5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc1wiKS5kb2MoY2hhci5pZCksIHtcclxuICAvLyAgICAgICAgICAgICBhdXRob3JOYW1lOiBkYXRhLnVzZXJuYW1lLFxyXG4gIC8vICAgICAgICAgICB9KTtcclxuICAvLyAgICAgICAgIH0pO1xyXG4gIC8vICAgICAgICAgcmVzWzNdLmZvckVhY2goKGNoYXIpID0+IHtcclxuICAvLyAgICAgICAgICAgYmF0Y2gudXBkYXRlKGRiLmNvbGxlY3Rpb24oXCJjb21tZW50c1wiKS5kb2MoY2hhci5pZCksIHtcclxuICAvLyAgICAgICAgICAgICB1c2VybmFtZTogZGF0YS51c2VybmFtZSxcclxuICAvLyAgICAgICAgICAgfSk7XHJcbiAgLy8gICAgICAgICB9KTtcclxuICAvLyAgICAgICAgIGJhdGNoLnVwZGF0ZShkYi5jb2xsZWN0aW9uKFwidXNlcnNcIikuZG9jKGF1dGguY3VycmVudFVzZXIudWlkKSwge1xyXG4gIC8vICAgICAgICAgICAuLi5uZXdJbmZvLFxyXG4gIC8vICAgICAgICAgfSk7XHJcbiAgLy8gICAgICAgICBiYXRjaFxyXG4gIC8vICAgICAgICAgICAuY29tbWl0KClcclxuICAvLyAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gIC8vICAgICAgICAgICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gIC8vICAgICAgICAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhcIllvdXIgcHJvZmlsZSBoYXMgYmVlbiBzdWNjZXNzZnVsbHkgdXBkYXRlZFwiKTtcclxuICAvLyAgICAgICAgICAgfSlcclxuICAvLyAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gIC8vICAgICAgICAgICAgIG1lc3NhZ2UuZXJyb3IoZXJyb3IubWVzc2FnZSk7XHJcbiAgLy8gICAgICAgICAgIH0pO1xyXG4gIC8vICAgICAgIH0pO1xyXG4gIC8vICAgICB9IGVsc2Uge1xyXG4gIC8vICAgICAgIGJhdGNoLnVwZGF0ZShkYi5jb2xsZWN0aW9uKFwidXNlcnNcIikuZG9jKGF1dGguY3VycmVudFVzZXIudWlkKSwge1xyXG4gIC8vICAgICAgICAgLi4ubmV3SW5mbyxcclxuICAvLyAgICAgICB9KTtcclxuICAvLyAgICAgICBiYXRjaFxyXG4gIC8vICAgICAgICAgLmNvbW1pdCgpXHJcbiAgLy8gICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgLy8gICAgICAgICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gIC8vICAgICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoXCJZb3VyIHByb2ZpbGUgaGFzIGJlZW4gc3VjY2Vzc2Z1bGx5IHVwZGF0ZWRcIik7XHJcbiAgLy8gICAgICAgICB9KVxyXG4gIC8vICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gIC8vICAgICAgICAgICBtZXNzYWdlLmVycm9yKGVycm9yLm1lc3NhZ2UpO1xyXG4gIC8vICAgICAgICAgfSk7XHJcbiAgLy8gICAgIH1cclxuICAvLyAgIH1cclxuICAvLyB9XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=