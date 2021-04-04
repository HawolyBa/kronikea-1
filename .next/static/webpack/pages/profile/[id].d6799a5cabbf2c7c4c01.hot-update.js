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
    var userCommentsQuery = _fbConfig__WEBPACK_IMPORTED_MODULE_5__["db"].collection("comments").where("userId", "==", _fbConfig__WEBPACK_IMPORTED_MODULE_5__["auth"].currentUser.uid).get();

    var batchUpdateAll = function batchUpdateAll(queries) {
      Promise.all(queries).then(function (res) {
        res[0].forEach(function (story) {
          batch.update(_fbConfig__WEBPACK_IMPORTED_MODULE_5__["db"].collection("stories").doc(story.id), {
            userImage: url,
            authorName: data.username
          });
        });
        res[1].forEach(function (chap) {
          batch.update(_fbConfig__WEBPACK_IMPORTED_MODULE_5__["db"].collection("chapters").doc(chap.id), {
            userImage: url,
            authorName: data.username
          });
        });
        res[2].forEach(function (_char) {
          batch.update(_fbConfig__WEBPACK_IMPORTED_MODULE_5__["db"].collection("characters").doc(_char.id), {
            userImage: url,
            authorName: data.username
          });
        });
        res[3].forEach(function (_char2) {
          batch.update(_fbConfig__WEBPACK_IMPORTED_MODULE_5__["db"].collection("comments").doc(_char2.id), {
            userImage: url,
            username: data.username
          });
        });
      });
    };

    if (newPassword) {
      _fbConfig__WEBPACK_IMPORTED_MODULE_5__["auth"].currentUser.reauthenticateWithCredential(firebase_app__WEBPACK_IMPORTED_MODULE_7__["default"].auth.EmailAuthProvider.credential(user.email, currentPassword)).then(function () {
        return user.updatePassword(newPassword);
      }).then( /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(typeof newInfo.image === "object")) {
                  _context2.next = 4;
                  break;
                }

                _fbConfig__WEBPACK_IMPORTED_MODULE_5__["storage"].ref("".concat(_fbConfig__WEBPACK_IMPORTED_MODULE_5__["auth"].currentUser.uid, "/").concat(imageName)).put(newInfo.image).then(function () {
                  return _fbConfig__WEBPACK_IMPORTED_MODULE_5__["storage"].ref("".concat(_fbConfig__WEBPACK_IMPORTED_MODULE_5__["auth"].currentUser.uid, "/").concat(imageName)).getDownloadURL();
                }).then( /*#__PURE__*/function () {
                  var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(url) {
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            imageUrl = url;
                            batch.update(_fbConfig__WEBPACK_IMPORTED_MODULE_5__["db"].collection("users").doc(_fbConfig__WEBPACK_IMPORTED_MODULE_5__["auth"].currentUser.uid), _objectSpread(_objectSpread({}, newInfo), {}, {
                              image: imageUrl
                            }));
                            _context.next = 4;
                            return batchUpdateAll([userStoriesQuery, userChaptersQuery, userCharactersQuery, userCommentsQuery]);

                          case 4:
                            batch.commit().then(function () {
                              return console.log("all good");
                            });

                          case 5:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));

                  return function (_x) {
                    return _ref2.apply(this, arguments);
                  };
                }());
                _context2.next = 8;
                break;

              case 4:
                batch.update(_fbConfig__WEBPACK_IMPORTED_MODULE_5__["db"].collection("users").doc(_fbConfig__WEBPACK_IMPORTED_MODULE_5__["auth"].currentUser.uid), _objectSpread({}, newInfo));
                _context2.next = 7;
                return batchUpdateAll([userStoriesQuery, userChaptersQuery, userCharactersQuery, userCommentsQuery]);

              case 7:
                batch.commit().then(function () {
                  return console.log("all good");
                });

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      })));
    } else {
      if (typeof newInfo.image === "object") {
        _fbConfig__WEBPACK_IMPORTED_MODULE_5__["storage"].ref("".concat(_fbConfig__WEBPACK_IMPORTED_MODULE_5__["auth"].currentUser.uid, "/").concat(imageName)).put(newInfo.image).then(function () {
          return _fbConfig__WEBPACK_IMPORTED_MODULE_5__["storage"].ref("".concat(_fbConfig__WEBPACK_IMPORTED_MODULE_5__["auth"].currentUser.uid, "/").concat(imageName)).getDownloadURL();
        }).then(function (url) {
          imageUrl = url;
          batch.update(_fbConfig__WEBPACK_IMPORTED_MODULE_5__["db"].collection("users").doc(_fbConfig__WEBPACK_IMPORTED_MODULE_5__["auth"].currentUser.uid), _objectSpread(_objectSpread({}, newInfo), {}, {
            image: imageUrl
          }));
        });
      } else {
        batch.update(_fbConfig__WEBPACK_IMPORTED_MODULE_5__["db"].collection("users").doc(_fbConfig__WEBPACK_IMPORTED_MODULE_5__["auth"].currentUser.uid), _objectSpread({}, newInfo));
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvYWN0aW9ucy91c2VyQWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJsb2dfaW4iLCJlbWFpbCIsInBhc3N3b3JkIiwiZGlzcGF0Y2giLCJjb25zb2xlIiwibG9nIiwiYXV0aCIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwiZ2V0UHJvZmlsZSIsImlkIiwiZGIiLCJjb2xsZWN0aW9uIiwiZG9jIiwiY3VycmVudFVzZXIiLCJ1aWQiLCJvblNuYXBzaG90IiwidHlwZSIsInR5cGVzIiwiR0VUX1BST0ZJTEUiLCJwYXlsb2FkIiwiZGF0YSIsImdldEZhdm9yaXRlQXV0aG9ycyIsImFkZGVkT24iLCJ1c2VySWQiLCJ3aGVyZSIsImdldCIsInRoZW4iLCJkb2NzIiwiZmF2QXJyIiwiZm9yRWFjaCIsImNyZWF0ZWRBdCIsInJlY2lwaWVudCIsInVzZXJzIiwicmVzdWx0IiwibWFwIiwidXNlciIsIlByb21pc2UiLCJhbGwiLCJyZXMiLCJmYXZVc2VycyIsIkdFVF9GQVZPUklURV9BVVRIT1JTIiwiZ2V0Rm9sbG93ZXJzIiwic2VuZGVySWQiLCJHRVRfRk9MTE9XRVJTIiwiZ2V0SXNGb2xsb3dpbmciLCJzbmFwc2hvdCIsImFuc3dlciIsImxlbmd0aCIsIklTX0ZPTExPV0lORyIsImZvbGxvd1VzZXIiLCJpc0Zhdm9yaXRlIiwibmV3Rm9sbG93ZXIiLCJtZXNzYWdlIiwid2FybmluZyIsImVycm9yIiwiZW1haWxWZXJpZmllZCIsImFkZCIsInNlbmRlciIsInVzZXJuYW1lIiwiZmlyZWJhc2UiLCJmaXJlc3RvcmUiLCJGaWVsZFZhbHVlIiwic2VydmVyVGltZXN0YW1wIiwic3VjY2VzcyIsImVyciIsInVuZm9sbG93VXNlciIsImNoYW5nZVByb2ZpbGUiLCJzZXRPcGVuIiwidXNlckltYWdlIiwiYmF0Y2giLCJuZXdQYXNzd29yZCIsImFjdHVhbFBhc3N3b3JkIiwibmV3SW5mbyIsImltYWdlTmFtZSIsInVzZXJTdG9yaWVzUXVlcnkiLCJ1c2VyQ2hhcHRlcnNRdWVyeSIsInVzZXJDaGFyYWN0ZXJzUXVlcnkiLCJ1c2VyQ29tbWVudHNRdWVyeSIsImJhdGNoVXBkYXRlQWxsIiwicXVlcmllcyIsInN0b3J5IiwidXBkYXRlIiwidXJsIiwiYXV0aG9yTmFtZSIsImNoYXAiLCJjaGFyIiwicmVhdXRoZW50aWNhdGVXaXRoQ3JlZGVudGlhbCIsIkVtYWlsQXV0aFByb3ZpZGVyIiwiY3JlZGVudGlhbCIsImN1cnJlbnRQYXNzd29yZCIsInVwZGF0ZVBhc3N3b3JkIiwiaW1hZ2UiLCJzdG9yYWdlIiwicmVmIiwicHV0IiwiZ2V0RG93bmxvYWRVUkwiLCJpbWFnZVVybCIsImNvbW1pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxLQUFELEVBQVFDLFFBQVI7QUFBQSxTQUFxQixVQUFDQyxRQUFELEVBQWM7QUFDdkRDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSixLQUFaLEVBQW1CQyxRQUFuQjtBQUNBSSxrREFBSSxDQUFDQywwQkFBTCxDQUFnQ04sS0FBaEMsRUFBdUNDLFFBQXZDO0FBQ0QsR0FIcUI7QUFBQSxDQUFmO0FBS0EsSUFBTU0sVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsRUFBRDtBQUFBLFNBQVEsVUFBQ04sUUFBRCxFQUFjO0FBQzlDTyxnREFBRSxDQUFDQyxVQUFILENBQWMsT0FBZCxFQUNHQyxHQURILENBQ09ILEVBQUUsR0FBR0EsRUFBSCxHQUFRSCw4Q0FBSSxDQUFDTyxXQUFMLENBQWlCQyxHQURsQyxFQUVHQyxVQUZILENBRWMsVUFBQ0gsR0FBRCxFQUFTO0FBQ25CLGFBQU9ULFFBQVEsQ0FBQztBQUNkYSxZQUFJLEVBQUVDLHNEQUFLLENBQUNDLFdBREU7QUFFZEMsZUFBTztBQUFJVixZQUFFLEVBQUVHLEdBQUcsQ0FBQ0g7QUFBWixXQUFtQkcsR0FBRyxD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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNELEdBbGM0QjtBQUFBLENBQXRCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUvW2lkXS5kNjc5OWE1Y2FiYmYyYzdjNGMwMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGIsIGF1dGgsIHN0b3JhZ2UgfSBmcm9tIFwiLi4vZmJDb25maWdcIjtcclxuaW1wb3J0IHsgdHlwZXMgfSBmcm9tIFwiLi4vLi4vdXRpbHMvY29uc3RhbnRzXCI7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcbmltcG9ydCB7IG1lc3NhZ2UgfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ19pbiA9IChlbWFpbCwgcGFzc3dvcmQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGVtYWlsLCBwYXNzd29yZCk7XHJcbiAgYXV0aC5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFByb2ZpbGUgPSAoaWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKVxyXG4gICAgLmRvYyhpZCA/IGlkIDogYXV0aC5jdXJyZW50VXNlci51aWQpXHJcbiAgICAub25TbmFwc2hvdCgoZG9jKSA9PiB7XHJcbiAgICAgIHJldHVybiBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogdHlwZXMuR0VUX1BST0ZJTEUsXHJcbiAgICAgICAgcGF5bG9hZDogeyBpZDogZG9jLmlkLCAuLi5kb2MuZGF0YSgpIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0RmF2b3JpdGVBdXRob3JzID0gKGlkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBsZXQgYWRkZWRPbjtcclxuICBjb25zdCB1c2VySWQgPSBpZCA/IGlkIDogYXV0aC5jdXJyZW50VXNlci51aWQ7XHJcbiAgZGIuY29sbGVjdGlvbihcInVzZXJzTGlrZXNcIilcclxuICAgIC53aGVyZShcInNlbmRlcklkXCIsIFwiPT1cIiwgdXNlcklkKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigoZG9jcykgPT4ge1xyXG4gICAgICBsZXQgZmF2QXJyID0gW107XHJcbiAgICAgIGRvY3MuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICAgICAgYWRkZWRPbiA9IGRvYy5kYXRhKCkuY3JlYXRlZEF0O1xyXG4gICAgICAgIGZhdkFyciA9IFsuLi5mYXZBcnIsIGRvYy5kYXRhKCkucmVjaXBpZW50XTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBmYXZBcnI7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKHVzZXJzKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHVzZXJzLm1hcCgodXNlcikgPT5cclxuICAgICAgICBkYi5jb2xsZWN0aW9uKFwidXNlcnNcIikuZG9jKHVzZXIpLmdldCgpXHJcbiAgICAgICk7XHJcbiAgICAgIFByb21pc2UuYWxsKHJlc3VsdCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgbGV0IGZhdlVzZXJzID0gW107XHJcbiAgICAgICAgcmVzLmZvckVhY2goXHJcbiAgICAgICAgICAoZG9jKSA9PlxyXG4gICAgICAgICAgICAoZmF2VXNlcnMgPSBbLi4uZmF2VXNlcnMsIHsgYWRkZWRPbiwgaWQ6IGRvYy5pZCwgLi4uZG9jLmRhdGEoKSB9XSlcclxuICAgICAgICApO1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IHR5cGVzLkdFVF9GQVZPUklURV9BVVRIT1JTLFxyXG4gICAgICAgICAgcGF5bG9hZDogZmF2VXNlcnMsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Rm9sbG93ZXJzID0gKGlkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBsZXQgYWRkZWRPbjtcclxuICBjb25zdCB1c2VySWQgPSBpZCA/IGlkIDogYXV0aC5jdXJyZW50VXNlci51aWQ7XHJcbiAgZGIuY29sbGVjdGlvbihcInVzZXJzTGlrZXNcIilcclxuICAgIC53aGVyZShcInJlY2lwaWVudFwiLCBcIj09XCIsIHVzZXJJZClcclxuICAgIC5nZXQoKVxyXG4gICAgLnRoZW4oKGRvY3MpID0+IHtcclxuICAgICAgbGV0IGZhdkFyciA9IFtdO1xyXG4gICAgICBkb2NzLmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgICAgIGFkZGVkT24gPSBkb2MuZGF0YSgpLmNyZWF0ZWRBdDtcclxuICAgICAgICBmYXZBcnIgPSBbLi4uZmF2QXJyLCBkb2MuZGF0YSgpLnNlbmRlcklkXTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBmYXZBcnI7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKHVzZXJzKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHVzZXJzLm1hcCgodXNlcikgPT5cclxuICAgICAgICBkYi5jb2xsZWN0aW9uKFwidXNlcnNcIikuZG9jKHVzZXIpLmdldCgpXHJcbiAgICAgICk7XHJcbiAgICAgIFByb21pc2UuYWxsKHJlc3VsdCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgbGV0IGZhdlVzZXJzID0gW107XHJcbiAgICAgICAgcmVzLmZvckVhY2goXHJcbiAgICAgICAgICAoZG9jKSA9PlxyXG4gICAgICAgICAgICAoZmF2VXNlcnMgPSBbLi4uZmF2VXNlcnMsIHsgYWRkZWRPbiwgaWQ6IGRvYy5pZCwgLi4uZG9jLmRhdGEoKSB9XSlcclxuICAgICAgICApO1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IHR5cGVzLkdFVF9GT0xMT1dFUlMsXHJcbiAgICAgICAgICBwYXlsb2FkOiBmYXZVc2VycyxcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRJc0ZvbGxvd2luZyA9ICh1c2VySWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGlmIChhdXRoLmN1cnJlbnRVc2VyKSB7XHJcbiAgICBkYi5jb2xsZWN0aW9uKFwidXNlcnNMaWtlc1wiKVxyXG4gICAgICAud2hlcmUoXCJyZWNpcGllbnRcIiwgXCI9PVwiLCB1c2VySWQpXHJcbiAgICAgIC53aGVyZShcInNlbmRlcklkXCIsIFwiPT1cIiwgYXV0aC5jdXJyZW50VXNlci51aWQpXHJcbiAgICAgIC5vblNuYXBzaG90KChzbmFwc2hvdCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFuc3dlciA9IHNuYXBzaG90LmRvY3MubGVuZ3RoID4gMCA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICByZXR1cm4gZGlzcGF0Y2goeyB0eXBlOiB0eXBlcy5JU19GT0xMT1dJTkcsIHBheWxvYWQ6IGFuc3dlciB9KTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZvbGxvd1VzZXIgPSAoaWQsIGlzRmF2b3JpdGUsIG5ld0ZvbGxvd2VyKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBpZiAoaXNGYXZvcml0ZSkgcmV0dXJuIG1lc3NhZ2Uud2FybmluZyhcIllvdSBhcmUgYWxyZWFkeSBmb2xsb3dpbmcgdGhpcyB1c2VyXCIpO1xyXG4gIGlmICghYXV0aC5jdXJyZW50VXNlcilcclxuICAgIHJldHVybiBtZXNzYWdlLmVycm9yKFwiWW91IG5lZWQgdG8gYmUgbG9nZ2VkIGluIHRvIGZvbGxvdyB1c2Vyc1wiKTtcclxuICBpZiAoIWF1dGguY3VycmVudFVzZXIuZW1haWxWZXJpZmllZClcclxuICAgIHJldHVybiBtZXNzYWdlLmVycm9yKFwiWW91IG5lZWQgdG8gdmVyaWZ5IHlvdXIgZW1haWwgZmlyc3RcIik7XHJcblxyXG4gIGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc0xpa2VzXCIpXHJcbiAgICAuYWRkKHtcclxuICAgICAgc2VuZGVyOiBuZXdGb2xsb3dlci51c2VybmFtZSxcclxuICAgICAgc2VuZGVySWQ6IG5ld0ZvbGxvd2VyLnVpZCxcclxuICAgICAgcmVjaXBpZW50OiBpZCxcclxuICAgICAgY3JlYXRlZEF0OiBmaXJlYmFzZS5maXJlc3RvcmUuRmllbGRWYWx1ZS5zZXJ2ZXJUaW1lc3RhbXAoKSxcclxuICAgIH0pXHJcbiAgICAudGhlbigoKSA9PiBtZXNzYWdlLnN1Y2Nlc3MoXCJZb3UgYXJlIG5vdyBmb2xsb3dpbmcgdGhpcyB1c2VyXCIpKVxyXG4gICAgLmNhdGNoKChlcnIpID0+IG1lc3NhZ2UuZXJyb3IoXCJUaGVyZSBoYXMgYmVlbiBhIHByb2JsZW1cIikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVuZm9sbG93VXNlciA9IChpZCwgaXNGYXZvcml0ZSkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgaWYgKCFpc0Zhdm9yaXRlKVxyXG4gICAgcmV0dXJuIG1lc3NhZ2Uud2FybmluZyhcIllvdSBhcmUgbm90IGZvbGxvd2luZyB0aGlzIHVzZXIgeWV0XCIpO1xyXG5cclxuICBkYi5jb2xsZWN0aW9uKFwidXNlcnNMaWtlc1wiKVxyXG4gICAgLndoZXJlKFwicmVjaXBpZW50XCIsIFwiPT1cIiwgaWQpXHJcbiAgICAud2hlcmUoXCJzZW5kZXJJZFwiLCBcIj09XCIsIGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGIuY29sbGVjdGlvbihcInVzZXJzTGlrZXNcIikuZG9jKGRhdGEuZG9jc1swXS5pZCkuZGVsZXRlKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKCkgPT4gbWVzc2FnZS5zdWNjZXNzKFwiVXNlciBzdWNjZXNzZnVsbHkgdW5mb2xsb3dlZFwiKSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiBtZXNzYWdlLmVycm9yKFwiVGhlcmUgaGFzIGJlZW4gYSBwcm9ibGVtXCIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjaGFuZ2VQcm9maWxlID0gKGRhdGEsIHNldE9wZW4sIHVzZXJuYW1lLCB1c2VySW1hZ2UpID0+IChcclxuICBkaXNwYXRjaFxyXG4pID0+IHtcclxuICBjb25zdCBiYXRjaCA9IGRiLmJhdGNoKCk7XHJcbiAgY29uc3QgeyBuZXdQYXNzd29yZCwgYWN0dWFsUGFzc3dvcmQsIC4uLm5ld0luZm8gfSA9IGRhdGE7XHJcbiAgY29uc3QgaW1hZ2VOYW1lID0gYCR7YXV0aC5jdXJyZW50VXNlci51aWR9XyR7bmV3SW5mby51c2VybmFtZX1gO1xyXG5cclxuICAvLyBTVE9SSUVTLCBDSEFQVEVSUywgQ0hBUkFDVEVSUyAmIENPTU1FTlRTIFFVRVJJRVNcclxuICBjb25zdCB1c2VyU3Rvcmllc1F1ZXJ5ID0gZGJcclxuICAgIC5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKVxyXG4gICAgLndoZXJlKFwiYXV0aG9ySWRcIiwgXCI9PVwiLCBhdXRoLmN1cnJlbnRVc2VyLnVpZClcclxuICAgIC5nZXQoKTtcclxuICBjb25zdCB1c2VyQ2hhcHRlcnNRdWVyeSA9IGRiXHJcbiAgICAuY29sbGVjdGlvbihcImNoYXB0ZXJzXCIpXHJcbiAgICAud2hlcmUoXCJhdXRob3JJZFwiLCBcIj09XCIsIGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gICAgLmdldCgpO1xyXG4gIGNvbnN0IHVzZXJDaGFyYWN0ZXJzUXVlcnkgPSBkYlxyXG4gICAgLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzXCIpXHJcbiAgICAud2hlcmUoXCJhdXRob3JJZFwiLCBcIj09XCIsIGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gICAgLmdldCgpO1xyXG4gIGNvbnN0IHVzZXJDb21tZW50c1F1ZXJ5ID0gZGJcclxuICAgIC5jb2xsZWN0aW9uKFwiY29tbWVudHNcIilcclxuICAgIC53aGVyZShcInVzZXJJZFwiLCBcIj09XCIsIGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gICAgLmdldCgpO1xyXG5cclxuICBjb25zdCBiYXRjaFVwZGF0ZUFsbCA9IChxdWVyaWVzKSA9PiB7XHJcbiAgICBQcm9taXNlLmFsbChxdWVyaWVzKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgcmVzWzBdLmZvckVhY2goKHN0b3J5KSA9PiB7XHJcbiAgICAgICAgYmF0Y2gudXBkYXRlKGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpLmRvYyhzdG9yeS5pZCksIHtcclxuICAgICAgICAgIHVzZXJJbWFnZTogdXJsLFxyXG4gICAgICAgICAgYXV0aG9yTmFtZTogZGF0YS51c2VybmFtZSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJlc1sxXS5mb3JFYWNoKChjaGFwKSA9PiB7XHJcbiAgICAgICAgYmF0Y2gudXBkYXRlKGRiLmNvbGxlY3Rpb24oXCJjaGFwdGVyc1wiKS5kb2MoY2hhcC5pZCksIHtcclxuICAgICAgICAgIHVzZXJJbWFnZTogdXJsLFxyXG4gICAgICAgICAgYXV0aG9yTmFtZTogZGF0YS51c2VybmFtZSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJlc1syXS5mb3JFYWNoKChjaGFyKSA9PiB7XHJcbiAgICAgICAgYmF0Y2gudXBkYXRlKGRiLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzXCIpLmRvYyhjaGFyLmlkKSwge1xyXG4gICAgICAgICAgdXNlckltYWdlOiB1cmwsXHJcbiAgICAgICAgICBhdXRob3JOYW1lOiBkYXRhLnVzZXJuYW1lLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgICAgcmVzWzNdLmZvckVhY2goKGNoYXIpID0+IHtcclxuICAgICAgICBiYXRjaC51cGRhdGUoZGIuY29sbGVjdGlvbihcImNvbW1lbnRzXCIpLmRvYyhjaGFyLmlkKSwge1xyXG4gICAgICAgICAgdXNlckltYWdlOiB1cmwsXHJcbiAgICAgICAgICB1c2VybmFtZTogZGF0YS51c2VybmFtZSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBpZiAobmV3UGFzc3dvcmQpIHtcclxuICAgIGF1dGguY3VycmVudFVzZXJcclxuICAgICAgLnJlYXV0aGVudGljYXRlV2l0aENyZWRlbnRpYWwoXHJcbiAgICAgICAgZmlyZWJhc2UuYXV0aC5FbWFpbEF1dGhQcm92aWRlci5jcmVkZW50aWFsKHVzZXIuZW1haWwsIGN1cnJlbnRQYXNzd29yZClcclxuICAgICAgKVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHVzZXIudXBkYXRlUGFzc3dvcmQobmV3UGFzc3dvcmQpO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBuZXdJbmZvLmltYWdlID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICBzdG9yYWdlXHJcbiAgICAgICAgICAgIC5yZWYoYCR7YXV0aC5jdXJyZW50VXNlci51aWR9LyR7aW1hZ2VOYW1lfWApXHJcbiAgICAgICAgICAgIC5wdXQobmV3SW5mby5pbWFnZSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiBzdG9yYWdlXHJcbiAgICAgICAgICAgICAgICAucmVmKGAke2F1dGguY3VycmVudFVzZXIudWlkfS8ke2ltYWdlTmFtZX1gKVxyXG4gICAgICAgICAgICAgICAgLmdldERvd25sb2FkVVJMKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKGFzeW5jICh1cmwpID0+IHtcclxuICAgICAgICAgICAgICBpbWFnZVVybCA9IHVybDtcclxuICAgICAgICAgICAgICBiYXRjaC51cGRhdGUoZGIuY29sbGVjdGlvbihcInVzZXJzXCIpLmRvYyhhdXRoLmN1cnJlbnRVc2VyLnVpZCksIHtcclxuICAgICAgICAgICAgICAgIC4uLm5ld0luZm8sXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogaW1hZ2VVcmwsXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgYXdhaXQgYmF0Y2hVcGRhdGVBbGwoW1xyXG4gICAgICAgICAgICAgICAgdXNlclN0b3JpZXNRdWVyeSxcclxuICAgICAgICAgICAgICAgIHVzZXJDaGFwdGVyc1F1ZXJ5LFxyXG4gICAgICAgICAgICAgICAgdXNlckNoYXJhY3RlcnNRdWVyeSxcclxuICAgICAgICAgICAgICAgIHVzZXJDb21tZW50c1F1ZXJ5LFxyXG4gICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICAgIGJhdGNoLmNvbW1pdCgpLnRoZW4oKCkgPT4gY29uc29sZS5sb2coXCJhbGwgZ29vZFwiKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBiYXRjaC51cGRhdGUoZGIuY29sbGVjdGlvbihcInVzZXJzXCIpLmRvYyhhdXRoLmN1cnJlbnRVc2VyLnVpZCksIHtcclxuICAgICAgICAgICAgLi4ubmV3SW5mbyxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgYXdhaXQgYmF0Y2hVcGRhdGVBbGwoW1xyXG4gICAgICAgICAgICB1c2VyU3Rvcmllc1F1ZXJ5LFxyXG4gICAgICAgICAgICB1c2VyQ2hhcHRlcnNRdWVyeSxcclxuICAgICAgICAgICAgdXNlckNoYXJhY3RlcnNRdWVyeSxcclxuICAgICAgICAgICAgdXNlckNvbW1lbnRzUXVlcnksXHJcbiAgICAgICAgICBdKTtcclxuICAgICAgICAgIGJhdGNoLmNvbW1pdCgpLnRoZW4oKCkgPT4gY29uc29sZS5sb2coXCJhbGwgZ29vZFwiKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgaWYgKHR5cGVvZiBuZXdJbmZvLmltYWdlID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgIHN0b3JhZ2VcclxuICAgICAgICAucmVmKGAke2F1dGguY3VycmVudFVzZXIudWlkfS8ke2ltYWdlTmFtZX1gKVxyXG4gICAgICAgIC5wdXQobmV3SW5mby5pbWFnZSlcclxuICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gc3RvcmFnZVxyXG4gICAgICAgICAgICAucmVmKGAke2F1dGguY3VycmVudFVzZXIudWlkfS8ke2ltYWdlTmFtZX1gKVxyXG4gICAgICAgICAgICAuZ2V0RG93bmxvYWRVUkwoKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKCh1cmwpID0+IHtcclxuICAgICAgICAgIGltYWdlVXJsID0gdXJsO1xyXG4gICAgICAgICAgYmF0Y2gudXBkYXRlKGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKS5kb2MoYXV0aC5jdXJyZW50VXNlci51aWQpLCB7XHJcbiAgICAgICAgICAgIC4uLm5ld0luZm8sXHJcbiAgICAgICAgICAgIGltYWdlOiBpbWFnZVVybCxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYmF0Y2gudXBkYXRlKGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKS5kb2MoYXV0aC5jdXJyZW50VXNlci51aWQpLCB7XHJcbiAgICAgICAgLi4ubmV3SW5mbyxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyAgIGNvbnN0IHJlYXV0aGVudGljYXRlID0gKGN1cnJlbnRQYXNzd29yZCkgPT4ge1xyXG4gIC8vICAgY29uc3QgdXNlciA9IGF1dGguY3VycmVudFVzZXI7XHJcbiAgLy8gICBjb25zdCBjcmVkID0gO1xyXG4gIC8vICAgcmV0dXJuIHVzZXIucmVhdXRoZW50aWNhdGVXaXRoQ3JlZGVudGlhbChjcmVkKTtcclxuICAvLyB9O1xyXG4gIC8vIGNvbnN0IGJhdGNoID0gZGIuYmF0Y2goKTtcclxuICAvLyBjb25zdCB7IG5ld1Bhc3N3b3JkLCBhY3R1YWxQYXNzd29yZCwgLi4ubmV3SW5mbyB9ID0gZGF0YTtcclxuICAvLyBjb25zdCBpbWFnZU5hbWUgPSBgJHthdXRoLmN1cnJlbnRVc2VyLnVpZH1fJHtkYXRhLnVzZXJuYW1lfWA7XHJcbiAgLy8gbGV0IGltYWdlVXJsID0gXCJcIjtcclxuICAvLyBjb25zdCB1c2VyU3Rvcmllc1F1ZXJ5ID0gZGJcclxuICAvLyAgIC5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKVxyXG4gIC8vICAgLndoZXJlKFwiYXV0aG9ySWRcIiwgXCI9PVwiLCBhdXRoLmN1cnJlbnRVc2VyLnVpZClcclxuICAvLyAgIC5nZXQoKTtcclxuICAvLyBjb25zdCB1c2VyQ2hhcHRlcnNRdWVyeSA9IGRiXHJcbiAgLy8gICAuY29sbGVjdGlvbihcImNoYXB0ZXJzXCIpXHJcbiAgLy8gICAud2hlcmUoXCJhdXRob3JJZFwiLCBcIj09XCIsIGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gIC8vICAgLmdldCgpO1xyXG4gIC8vIGNvbnN0IHVzZXJDaGFyYWN0ZXJzUXVlcnkgPSBkYlxyXG4gIC8vICAgLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzXCIpXHJcbiAgLy8gICAud2hlcmUoXCJhdXRob3JJZFwiLCBcIj09XCIsIGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gIC8vICAgLmdldCgpO1xyXG4gIC8vIGNvbnN0IHVzZXJDb21tZW50c1F1ZXJ5ID0gZGJcclxuICAvLyAgIC5jb2xsZWN0aW9uKFwiY29tbWVudHNcIilcclxuICAvLyAgIC53aGVyZShcInVzZXJJZFwiLCBcIj09XCIsIGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gIC8vICAgLmdldCgpO1xyXG4gIC8vIFByb21pc2UuYWxsKFtcclxuICAvLyAgIHVzZXJTdG9yaWVzUXVlcnksXHJcbiAgLy8gICB1c2VyQ2hhcHRlcnNRdWVyeSxcclxuICAvLyAgIHVzZXJDaGFyYWN0ZXJzUXVlcnksXHJcbiAgLy8gICB1c2VyQ29tbWVudHNRdWVyeSxcclxuICAvLyBdKS50aGVuKChyZXMpID0+IHtcclxuICAvLyAgIHJlc1swXS5mb3JFYWNoKChzdG9yeSkgPT4ge1xyXG4gIC8vICAgICBiYXRjaC51cGRhdGUoZGIuY29sbGVjdGlvbihcInN0b3JpZXNcIikuZG9jKHN0b3J5LmlkKSwge1xyXG4gIC8vICAgICAgIHVzZXJJbWFnZTogdXJsLFxyXG4gIC8vICAgICAgIGF1dGhvck5hbWU6IGRhdGEudXNlcm5hbWUsXHJcbiAgLy8gICAgIH0pO1xyXG4gIC8vICAgfSk7XHJcbiAgLy8gICByZXNbMV0uZm9yRWFjaCgoY2hhcCkgPT4ge1xyXG4gIC8vICAgICBiYXRjaC51cGRhdGUoZGIuY29sbGVjdGlvbihcImNoYXB0ZXJzXCIpLmRvYyhjaGFwLmlkKSwge1xyXG4gIC8vICAgICAgIHVzZXJJbWFnZTogdXJsLFxyXG4gIC8vICAgICAgIGF1dGhvck5hbWU6IGRhdGEudXNlcm5hbWUsXHJcbiAgLy8gICAgIH0pO1xyXG4gIC8vICAgfSk7XHJcbiAgLy8gICByZXNbMl0uZm9yRWFjaCgoY2hhcikgPT4ge1xyXG4gIC8vICAgICBiYXRjaC51cGRhdGUoZGIuY29sbGVjdGlvbihcImNoYXJhY3RlcnNcIikuZG9jKGNoYXIuaWQpLCB7XHJcbiAgLy8gICAgICAgdXNlckltYWdlOiB1cmwsXHJcbiAgLy8gICAgICAgYXV0aG9yTmFtZTogZGF0YS51c2VybmFtZSxcclxuICAvLyAgICAgfSk7XHJcbiAgLy8gICB9KTtcclxuICAvLyAgIHJlc1szXS5mb3JFYWNoKChjaGFyKSA9PiB7XHJcbiAgLy8gICAgIGJhdGNoLnVwZGF0ZShkYi5jb2xsZWN0aW9uKFwiY29tbWVudHNcIikuZG9jKGNoYXIuaWQpLCB7XHJcbiAgLy8gICAgICAgdXNlckltYWdlOiB1cmwsXHJcbiAgLy8gICAgICAgdXNlcm5hbWU6IGRhdGEudXNlcm5hbWUsXHJcbiAgLy8gICAgIH0pO1xyXG4gIC8vICAgfSk7XHJcbiAgLy8gfSk7XHJcbiAgLy8gLy8gVVBEQVRFIGwnVVNFUlxyXG4gIC8vIGlmICh0eXBlb2YgZGF0YS5pbWFnZSA9PT0gXCJvYmplY3RcIikge1xyXG4gIC8vICAgc3RvcmFnZVxyXG4gIC8vICAgICAucmVmKGAke2F1dGguY3VycmVudFVzZXIudWlkfS8ke2ltYWdlTmFtZX1gKVxyXG4gIC8vICAgICAucHV0KGRhdGEuaW1hZ2UpXHJcbiAgLy8gICAgIC50aGVuKCgpID0+IHtcclxuICAvLyAgICAgICByZXR1cm4gc3RvcmFnZVxyXG4gIC8vICAgICAgICAgLnJlZihgJHthdXRoLmN1cnJlbnRVc2VyLnVpZH0vJHtpbWFnZU5hbWV9YClcclxuICAvLyAgICAgICAgIC5nZXREb3dubG9hZFVSTCgpO1xyXG4gIC8vICAgICB9KVxyXG4gIC8vICAgICAudGhlbigodXJsKSA9PiB7XHJcbiAgLy8gICAgICAgaW1hZ2VVcmwgPSB1cmw7XHJcbiAgLy8gICAgICAgZGIudXBkYXRlKGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKS5kb2MoYXV0aC5jdXJyZW50VXNlci51aWQpLCB7XHJcbiAgLy8gICAgICAgICAuLi5uZXdJbmZvLFxyXG4gIC8vICAgICAgICAgaW1hZ2U6IGltYWdlVXJsLFxyXG4gIC8vICAgICAgIH0pO1xyXG4gIC8vICAgICB9KTtcclxuICAvLyB9IGVsc2Uge1xyXG4gIC8vICAgZGIudXBkYXRlKGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKS5kb2MoYXV0aC5jdXJyZW50VXNlci51aWQpLCB7XHJcbiAgLy8gICAgIC4uLm5ld0luZm8sXHJcbiAgLy8gICB9KTtcclxuICAvLyB9XHJcbiAgLy8gLy8gVVBEQVRFIExFIE1PVCBERSBQQVNTRVxyXG4gIC8vIGlmIChuZXdQYXNzd29yZCkge1xyXG4gIC8vICAgYXV0aC5jdXJyZW50VXNlclxyXG4gIC8vICAgICAucmVhdXRoZW50aWNhdGVXaXRoQ3JlZGVudGlhbChcclxuICAvLyAgICAgICBmaXJlYmFzZS5hdXRoLkVtYWlsQXV0aFByb3ZpZGVyLmNyZWRlbnRpYWwodXNlci5lbWFpbCwgY3VycmVudFBhc3N3b3JkKVxyXG4gIC8vICAgICApXHJcbiAgLy8gICAgIC50aGVuKCgpID0+IHtcclxuICAvLyAgICAgICByZXR1cm4gdXNlci51cGRhdGVQYXNzd29yZChuZXdQYXNzd29yZCk7XHJcbiAgLy8gICAgIH0pO1xyXG4gIC8vIH1cclxuICAvLyAvLyBVUERBVEUgTEVTIFRPUklFUywgQ0hBUkFDVEVSUyAmIENPTU1FTlRTIFNJIEJFU09JTlxyXG4gIC8vIC8vIGlmKClcclxuICAvLyBpZiAobmV3UGFzc3dvcmQpIHtcclxuICAvLyAgIHJlYXV0aGVudGljYXRlKGFjdHVhbFBhc3N3b3JkKVxyXG4gIC8vICAgICAudGhlbigoKSA9PiB7XHJcbiAgLy8gICAgICAgY29uc3QgdXNlciA9IGF1dGguY3VycmVudFVzZXI7XHJcbiAgLy8gICAgICAgdXNlci51cGRhdGVQYXNzd29yZChuZXdQYXNzd29yZCkudGhlbigoKSA9PiB7XHJcbiAgLy8gICAgICAgICBpZiAodHlwZW9mIGRhdGEuaW1hZ2UgPT09IFwib2JqZWN0XCIpIHtcclxuICAvLyAgICAgICAgICAgc3RvcmFnZVxyXG4gIC8vICAgICAgICAgICAgIC5yZWYoYCR7YXV0aC5jdXJyZW50VXNlci51aWR9LyR7aW1hZ2VOYW1lfWApXHJcbiAgLy8gICAgICAgICAgICAgLnB1dChkYXRhLmltYWdlKVxyXG4gIC8vICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAvLyAgICAgICAgICAgICAgIHJldHVybiBzdG9yYWdlXHJcbiAgLy8gICAgICAgICAgICAgICAgIC5yZWYoYXV0aC5jdXJyZW50VXNlci51aWQpXHJcbiAgLy8gICAgICAgICAgICAgICAgIC5jaGlsZChpbWFnZU5hbWUpXHJcbiAgLy8gICAgICAgICAgICAgICAgIC5nZXREb3dubG9hZFVSTCgpO1xyXG4gIC8vICAgICAgICAgICAgIH0pXHJcbiAgLy8gICAgICAgICAgICAgLnRoZW4oKHVybCkgPT4ge1xyXG4gIC8vICAgICAgICAgICAgICAgaWYgKGRhdGEudXNlcm5hbWUgIT09IHVzZXJuYW1lIHx8IGRhdGEuaW1hZ2UgIT09IHVzZXJJbWFnZSkge1xyXG4gIC8vICAgICAgICAgICAgICAgICBiYXRjaC51cGRhdGUoXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgZGIuY29sbGVjdGlvbihcInVzZXJzXCIpLmRvYyhhdXRoLmN1cnJlbnRVc2VyLnVpZCksXHJcbiAgLy8gICAgICAgICAgICAgICAgICAge1xyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IHVybCxcclxuICAvLyAgICAgICAgICAgICAgICAgICAgIC4uLm5ld0luZm8sXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgfVxyXG4gIC8vICAgICAgICAgICAgICAgICApO1xyXG4gIC8vICAgICAgICAgICAgICAgICBiYXRjaFxyXG4gIC8vICAgICAgICAgICAgICAgICAgIC5jb21taXQoKVxyXG4gIC8vICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAvLyAgICAgICAgICAgICAgICAgICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5zdWNjZXNzKFxyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgICBcIllvdXIgcHJvZmlsZSBoYXMgYmVlbiBzdWNjZXNzZnVsbHkgdXBkYXRlZFwiXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICApO1xyXG4gIC8vICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5lcnJvcihlcnJvci5tZXNzYWdlKTtcclxuICAvLyAgICAgICAgICAgICAgICAgICB9KTtcclxuICAvLyAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgLy8gICAgICAgICAgICAgICAgIGJhdGNoLnVwZGF0ZShcclxuICAvLyAgICAgICAgICAgICAgICAgICBkYi5jb2xsZWN0aW9uKFwidXNlcnNcIikuZG9jKGF1dGguY3VycmVudFVzZXIudWlkKSxcclxuICAvLyAgICAgICAgICAgICAgICAgICB7XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICBpbWFnZTogdXJsLFxyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgLi4ubmV3SW5mbyxcclxuICAvLyAgICAgICAgICAgICAgICAgICB9XHJcbiAgLy8gICAgICAgICAgICAgICAgICk7XHJcbiAgLy8gICAgICAgICAgICAgICAgIGJhdGNoXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgLmNvbW1pdCgpXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgIFwiWW91ciBwcm9maWxlIGhhcyBiZWVuIHN1Y2Nlc3NmdWxseSB1cGRhdGVkXCJcclxuICAvLyAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgfSlcclxuICAvLyAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLmVycm9yKGVycm9yLm1lc3NhZ2UpO1xyXG4gIC8vICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gIC8vICAgICAgICAgICAgICAgfVxyXG4gIC8vICAgICAgICAgICAgIH0pO1xyXG4gIC8vICAgICAgICAgfSBlbHNlIHtcclxuICAvLyAgICAgICAgICAgaWYgKGRhdGEudXNlcm5hbWUgIT09IHVzZXJuYW1lKSB7XHJcbiAgLy8gICAgICAgICAgICAgUHJvbWlzZS5hbGwoW1xyXG4gIC8vICAgICAgICAgICAgICAgdXNlclN0b3JpZXNRdWVyeSxcclxuICAvLyAgICAgICAgICAgICAgIHVzZXJDaGFwdGVyc1F1ZXJ5LFxyXG4gIC8vICAgICAgICAgICAgICAgdXNlckNoYXJhY3RlcnNRdWVyeSxcclxuICAvLyAgICAgICAgICAgICAgIHVzZXJDb21tZW50c1F1ZXJ5LFxyXG4gIC8vICAgICAgICAgICAgIF0pLnRoZW4oKHJlcykgPT4ge1xyXG4gIC8vICAgICAgICAgICAgICAgcmVzWzBdLmZvckVhY2goKHN0b3J5KSA9PiB7XHJcbiAgLy8gICAgICAgICAgICAgICAgIGJhdGNoLnVwZGF0ZShkYi5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKS5kb2Moc3RvcnkuaWQpLCB7XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgYXV0aG9yTmFtZTogZGF0YS51c2VybmFtZSxcclxuICAvLyAgICAgICAgICAgICAgICAgfSk7XHJcbiAgLy8gICAgICAgICAgICAgICB9KTtcclxuICAvLyAgICAgICAgICAgICAgIHJlc1swXS5mb3JFYWNoKChjaGFwKSA9PiB7XHJcbiAgLy8gICAgICAgICAgICAgICAgIGJhdGNoLnVwZGF0ZShkYi5jb2xsZWN0aW9uKFwiY2hhcHRlcnNcIikuZG9jKGNoYXAuaWQpLCB7XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgYXV0aG9yTmFtZTogZGF0YS51c2VybmFtZSxcclxuICAvLyAgICAgICAgICAgICAgICAgfSk7XHJcbiAgLy8gICAgICAgICAgICAgICB9KTtcclxuICAvLyAgICAgICAgICAgICAgIHJlc1swXS5mb3JFYWNoKChjaGFyKSA9PiB7XHJcbiAgLy8gICAgICAgICAgICAgICAgIGJhdGNoLnVwZGF0ZShkYi5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc1wiKS5kb2MoY2hhci5pZCksIHtcclxuICAvLyAgICAgICAgICAgICAgICAgICBhdXRob3JOYW1lOiBkYXRhLnVzZXJuYW1lLFxyXG4gIC8vICAgICAgICAgICAgICAgICB9KTtcclxuICAvLyAgICAgICAgICAgICAgIH0pO1xyXG4gIC8vICAgICAgICAgICAgICAgcmVzWzBdLmZvckVhY2goKGNoYXIpID0+IHtcclxuICAvLyAgICAgICAgICAgICAgICAgYmF0Y2gudXBkYXRlKGRiLmNvbGxlY3Rpb24oXCJjb21tZW50c1wiKS5kb2MoY2hhci5pZCksIHtcclxuICAvLyAgICAgICAgICAgICAgICAgICB1c2VybmFtZTogZGF0YS51c2VybmFtZSxcclxuICAvLyAgICAgICAgICAgICAgICAgfSk7XHJcbiAgLy8gICAgICAgICAgICAgICB9KTtcclxuICAvLyAgICAgICAgICAgICB9KTtcclxuICAvLyAgICAgICAgICAgICBiYXRjaC51cGRhdGUoZGIuY29sbGVjdGlvbihcInVzZXJzXCIpLmRvYyhhdXRoLmN1cnJlbnRVc2VyLnVpZCksIHtcclxuICAvLyAgICAgICAgICAgICAgIC4uLm5ld0luZm8sXHJcbiAgLy8gICAgICAgICAgICAgfSk7XHJcbiAgLy8gICAgICAgICAgIH0gZWxzZSB7XHJcbiAgLy8gICAgICAgICAgICAgYmF0Y2gudXBkYXRlKGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKS5kb2MoYXV0aC5jdXJyZW50VXNlci51aWQpLCB7XHJcbiAgLy8gICAgICAgICAgICAgICAuLi5uZXdJbmZvLFxyXG4gIC8vICAgICAgICAgICAgIH0pO1xyXG4gIC8vICAgICAgICAgICAgIGJhdGNoXHJcbiAgLy8gICAgICAgICAgICAgICAuY29tbWl0KClcclxuICAvLyAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAvLyAgICAgICAgICAgICAgICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgLy8gICAgICAgICAgICAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhcIllvdXIgcHJvZmlsZSBoYXMgYmVlbiBzdWNjZXNzZnVsbHkgdXBkYXRlZFwiKTtcclxuICAvLyAgICAgICAgICAgICAgIH0pXHJcbiAgLy8gICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgLy8gICAgICAgICAgICAgICAgIG1lc3NhZ2UuZXJyb3IoZXJyb3IubWVzc2FnZSk7XHJcbiAgLy8gICAgICAgICAgICAgICB9KTtcclxuICAvLyAgICAgICAgICAgfVxyXG4gIC8vICAgICAgICAgfVxyXG4gIC8vICAgICAgIH0pO1xyXG4gIC8vICAgICB9KVxyXG4gIC8vICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gIC8vICAgICAgIG1lc3NhZ2UuZXJyb3IoZXJyLm1lc3NhZ2UpO1xyXG4gIC8vICAgICB9KTtcclxuICAvLyB9IGVsc2Uge1xyXG4gIC8vICAgaWYgKHR5cGVvZiBkYXRhLmltYWdlID09PSBcIm9iamVjdFwiKSB7XHJcbiAgLy8gICAgIHN0b3JhZ2VcclxuICAvLyAgICAgICAucmVmKGAke2F1dGguY3VycmVudFVzZXIudWlkfS8ke2ltYWdlTmFtZX1gKVxyXG4gIC8vICAgICAgIC5wdXQoZGF0YS5pbWFnZSlcclxuICAvLyAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgLy8gICAgICAgICByZXR1cm4gc3RvcmFnZVxyXG4gIC8vICAgICAgICAgICAucmVmKGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gIC8vICAgICAgICAgICAuY2hpbGQoaW1hZ2VOYW1lKVxyXG4gIC8vICAgICAgICAgICAuZ2V0RG93bmxvYWRVUkwoKTtcclxuICAvLyAgICAgICB9KVxyXG4gIC8vICAgICAgIC50aGVuKCh1cmwpID0+IHtcclxuICAvLyAgICAgICAgIGlmIChkYXRhLnVzZXJuYW1lICE9PSB1c2VybmFtZSB8fCBkYXRhLmltYWdlICE9PSB1c2VySW1hZ2UpIHtcclxuICAvLyAgICAgICAgICAgUHJvbWlzZS5hbGwoW1xyXG4gIC8vICAgICAgICAgICAgIHVzZXJTdG9yaWVzUXVlcnksXHJcbiAgLy8gICAgICAgICAgICAgdXNlckNoYXB0ZXJzUXVlcnksXHJcbiAgLy8gICAgICAgICAgICAgdXNlckNoYXJhY3RlcnNRdWVyeSxcclxuICAvLyAgICAgICAgICAgICB1c2VyQ29tbWVudHNRdWVyeSxcclxuICAvLyAgICAgICAgICAgXSkudGhlbigocmVzKSA9PiB7XHJcbiAgLy8gICAgICAgICAgICAgcmVzWzBdLmZvckVhY2goKHN0b3J5KSA9PiB7XHJcbiAgLy8gICAgICAgICAgICAgICBiYXRjaC51cGRhdGUoZGIuY29sbGVjdGlvbihcInN0b3JpZXNcIikuZG9jKHN0b3J5LmlkKSwge1xyXG4gIC8vICAgICAgICAgICAgICAgICB1c2VySW1hZ2U6IHVybCxcclxuICAvLyAgICAgICAgICAgICAgICAgYXV0aG9yTmFtZTogZGF0YS51c2VybmFtZSxcclxuICAvLyAgICAgICAgICAgICAgIH0pO1xyXG4gIC8vICAgICAgICAgICAgIH0pO1xyXG4gIC8vICAgICAgICAgICAgIHJlc1sxXS5mb3JFYWNoKChjaGFwKSA9PiB7XHJcbiAgLy8gICAgICAgICAgICAgICBiYXRjaC51cGRhdGUoZGIuY29sbGVjdGlvbihcImNoYXB0ZXJzXCIpLmRvYyhjaGFwLmlkKSwge1xyXG4gIC8vICAgICAgICAgICAgICAgICB1c2VySW1hZ2U6IHVybCxcclxuICAvLyAgICAgICAgICAgICAgICAgYXV0aG9yTmFtZTogZGF0YS51c2VybmFtZSxcclxuICAvLyAgICAgICAgICAgICAgIH0pO1xyXG4gIC8vICAgICAgICAgICAgIH0pO1xyXG4gIC8vICAgICAgICAgICAgIHJlc1syXS5mb3JFYWNoKChjaGFyKSA9PiB7XHJcbiAgLy8gICAgICAgICAgICAgICBiYXRjaC51cGRhdGUoZGIuY29sbGVjdGlvbihcImNoYXJhY3RlcnNcIikuZG9jKGNoYXIuaWQpLCB7XHJcbiAgLy8gICAgICAgICAgICAgICAgIHVzZXJJbWFnZTogdXJsLFxyXG4gIC8vICAgICAgICAgICAgICAgICBhdXRob3JOYW1lOiBkYXRhLnVzZXJuYW1lLFxyXG4gIC8vICAgICAgICAgICAgICAgfSk7XHJcbiAgLy8gICAgICAgICAgICAgfSk7XHJcbiAgLy8gICAgICAgICAgICAgcmVzWzNdLmZvckVhY2goKGNoYXIpID0+IHtcclxuICAvLyAgICAgICAgICAgICAgIGJhdGNoLnVwZGF0ZShkYi5jb2xsZWN0aW9uKFwiY29tbWVudHNcIikuZG9jKGNoYXIuaWQpLCB7XHJcbiAgLy8gICAgICAgICAgICAgICAgIHVzZXJJbWFnZTogdXJsLFxyXG4gIC8vICAgICAgICAgICAgICAgICB1c2VybmFtZTogZGF0YS51c2VybmFtZSxcclxuICAvLyAgICAgICAgICAgICAgIH0pO1xyXG4gIC8vICAgICAgICAgICAgIH0pO1xyXG4gIC8vICAgICAgICAgICB9KTtcclxuICAvLyAgICAgICAgICAgYmF0Y2gudXBkYXRlKGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKS5kb2MoYXV0aC5jdXJyZW50VXNlci51aWQpLCB7XHJcbiAgLy8gICAgICAgICAgICAgLi4ubmV3SW5mbyxcclxuICAvLyAgICAgICAgICAgICBpbWFnZTogdXJsLFxyXG4gIC8vICAgICAgICAgICB9KTtcclxuICAvLyAgICAgICAgICAgYmF0Y2hcclxuICAvLyAgICAgICAgICAgICAuY29tbWl0KClcclxuICAvLyAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgLy8gICAgICAgICAgICAgICBzZXRPcGVuKGZhbHNlKTtcclxuICAvLyAgICAgICAgICAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhcIllvdXIgcHJvZmlsZSBoYXMgYmVlbiBzdWNjZXNzZnVsbHkgdXBkYXRlZFwiKTtcclxuICAvLyAgICAgICAgICAgICB9KVxyXG4gIC8vICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAvLyAgICAgICAgICAgICAgIG1lc3NhZ2UuZXJyb3IoZXJyb3IubWVzc2FnZSk7XHJcbiAgLy8gICAgICAgICAgICAgfSk7XHJcbiAgLy8gICAgICAgICB9IGVsc2Uge1xyXG4gIC8vICAgICAgICAgICBiYXRjaC51cGRhdGUoZGIuY29sbGVjdGlvbihcInVzZXJzXCIpLmRvYyhhdXRoLmN1cnJlbnRVc2VyLnVpZCksIHtcclxuICAvLyAgICAgICAgICAgICAuLi5uZXdJbmZvLFxyXG4gIC8vICAgICAgICAgICB9KTtcclxuICAvLyAgICAgICAgICAgYmF0Y2hcclxuICAvLyAgICAgICAgICAgICAuY29tbWl0KClcclxuICAvLyAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgLy8gICAgICAgICAgICAgICBzZXRPcGVuKGZhbHNlKTtcclxuICAvLyAgICAgICAgICAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhcIllvdXIgcHJvZmlsZSBoYXMgYmVlbiBzdWNjZXNzZnVsbHkgdXBkYXRlZFwiKTtcclxuICAvLyAgICAgICAgICAgICB9KVxyXG4gIC8vICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAvLyAgICAgICAgICAgICAgIG1lc3NhZ2UuZXJyb3IoZXJyb3IubWVzc2FnZSk7XHJcbiAgLy8gICAgICAgICAgICAgfSk7XHJcbiAgLy8gICAgICAgICB9XHJcbiAgLy8gICAgICAgfSk7XHJcbiAgLy8gICB9IGVsc2Uge1xyXG4gIC8vICAgICBpZiAoZGF0YS51c2VybmFtZSAhPT0gdXNlcm5hbWUpIHtcclxuICAvLyAgICAgICBQcm9taXNlLmFsbChbXHJcbiAgLy8gICAgICAgICB1c2VyU3Rvcmllc1F1ZXJ5LFxyXG4gIC8vICAgICAgICAgdXNlckNoYXB0ZXJzUXVlcnksXHJcbiAgLy8gICAgICAgICB1c2VyQ2hhcmFjdGVyc1F1ZXJ5LFxyXG4gIC8vICAgICAgICAgdXNlckNvbW1lbnRzUXVlcnksXHJcbiAgLy8gICAgICAgXSkudGhlbigocmVzKSA9PiB7XHJcbiAgLy8gICAgICAgICByZXNbMF0uZm9yRWFjaCgoc3RvcnkpID0+IHtcclxuICAvLyAgICAgICAgICAgYmF0Y2gudXBkYXRlKGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpLmRvYyhzdG9yeS5pZCksIHtcclxuICAvLyAgICAgICAgICAgICBhdXRob3JOYW1lOiBkYXRhLnVzZXJuYW1lLFxyXG4gIC8vICAgICAgICAgICB9KTtcclxuICAvLyAgICAgICAgIH0pO1xyXG4gIC8vICAgICAgICAgcmVzWzFdLmZvckVhY2goKGNoYXApID0+IHtcclxuICAvLyAgICAgICAgICAgYmF0Y2gudXBkYXRlKGRiLmNvbGxlY3Rpb24oXCJjaGFwdGVyc1wiKS5kb2MoY2hhcC5pZCksIHtcclxuICAvLyAgICAgICAgICAgICBhdXRob3JOYW1lOiBkYXRhLnVzZXJuYW1lLFxyXG4gIC8vICAgICAgICAgICB9KTtcclxuICAvLyAgICAgICAgIH0pO1xyXG4gIC8vICAgICAgICAgcmVzWzJdLmZvckVhY2goKGNoYXIpID0+IHtcclxuICAvLyAgICAgICAgICAgYmF0Y2gudXBkYXRlKGRiLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzXCIpLmRvYyhjaGFyLmlkKSwge1xyXG4gIC8vICAgICAgICAgICAgIGF1dGhvck5hbWU6IGRhdGEudXNlcm5hbWUsXHJcbiAgLy8gICAgICAgICAgIH0pO1xyXG4gIC8vICAgICAgICAgfSk7XHJcbiAgLy8gICAgICAgICByZXNbM10uZm9yRWFjaCgoY2hhcikgPT4ge1xyXG4gIC8vICAgICAgICAgICBiYXRjaC51cGRhdGUoZGIuY29sbGVjdGlvbihcImNvbW1lbnRzXCIpLmRvYyhjaGFyLmlkKSwge1xyXG4gIC8vICAgICAgICAgICAgIHVzZXJuYW1lOiBkYXRhLnVzZXJuYW1lLFxyXG4gIC8vICAgICAgICAgICB9KTtcclxuICAvLyAgICAgICAgIH0pO1xyXG4gIC8vICAgICAgICAgYmF0Y2gudXBkYXRlKGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKS5kb2MoYXV0aC5jdXJyZW50VXNlci51aWQpLCB7XHJcbiAgLy8gICAgICAgICAgIC4uLm5ld0luZm8sXHJcbiAgLy8gICAgICAgICB9KTtcclxuICAvLyAgICAgICAgIGJhdGNoXHJcbiAgLy8gICAgICAgICAgIC5jb21taXQoKVxyXG4gIC8vICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgLy8gICAgICAgICAgICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgLy8gICAgICAgICAgICAgbWVzc2FnZS5zdWNjZXNzKFwiWW91ciBwcm9maWxlIGhhcyBiZWVuIHN1Y2Nlc3NmdWxseSB1cGRhdGVkXCIpO1xyXG4gIC8vICAgICAgICAgICB9KVxyXG4gIC8vICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgLy8gICAgICAgICAgICAgbWVzc2FnZS5lcnJvcihlcnJvci5tZXNzYWdlKTtcclxuICAvLyAgICAgICAgICAgfSk7XHJcbiAgLy8gICAgICAgfSk7XHJcbiAgLy8gICAgIH0gZWxzZSB7XHJcbiAgLy8gICAgICAgYmF0Y2gudXBkYXRlKGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKS5kb2MoYXV0aC5jdXJyZW50VXNlci51aWQpLCB7XHJcbiAgLy8gICAgICAgICAuLi5uZXdJbmZvLFxyXG4gIC8vICAgICAgIH0pO1xyXG4gIC8vICAgICAgIGJhdGNoXHJcbiAgLy8gICAgICAgICAuY29tbWl0KClcclxuICAvLyAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAvLyAgICAgICAgICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgLy8gICAgICAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhcIllvdXIgcHJvZmlsZSBoYXMgYmVlbiBzdWNjZXNzZnVsbHkgdXBkYXRlZFwiKTtcclxuICAvLyAgICAgICAgIH0pXHJcbiAgLy8gICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgLy8gICAgICAgICAgIG1lc3NhZ2UuZXJyb3IoZXJyb3IubWVzc2FnZSk7XHJcbiAgLy8gICAgICAgICB9KTtcclxuICAvLyAgICAgfVxyXG4gIC8vICAgfVxyXG4gIC8vIH1cclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==