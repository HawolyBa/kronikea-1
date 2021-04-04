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
        }).then( /*#__PURE__*/function () {
          var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(url) {
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    imageUrl = url;
                    batch.update(_fbConfig__WEBPACK_IMPORTED_MODULE_5__["db"].collection("users").doc(_fbConfig__WEBPACK_IMPORTED_MODULE_5__["auth"].currentUser.uid), _objectSpread(_objectSpread({}, newInfo), {}, {
                      image: imageUrl
                    }));
                    _context3.next = 4;
                    return batchUpdateAll([userStoriesQuery, userChaptersQuery, userCharactersQuery, userCommentsQuery]);

                  case 4:
                    batch.commit().then(function () {
                      return console.log("all good");
                    });

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3);
          }));

          return function (_x2) {
            return _ref3.apply(this, arguments);
          };
        }());
      } else {
        batch.update(_fbConfig__WEBPACK_IMPORTED_MODULE_5__["db"].collection("users").doc(_fbConfig__WEBPACK_IMPORTED_MODULE_5__["auth"].currentUser.uid), _objectSpread({}, newInfo));
        batchUpdateAll([userStoriesQuery, userChaptersQuery, userCharactersQuery, userCommentsQuery]);
        batch.commit().then(function () {
          return console.log("all good");
        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvYWN0aW9ucy91c2VyQWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJsb2dfaW4iLCJlbWFpbCIsInBhc3N3b3JkIiwiZGlzcGF0Y2giLCJjb25zb2xlIiwibG9nIiwiYXV0aCIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwiZ2V0UHJvZmlsZSIsImlkIiwiZGIiLCJjb2xsZWN0aW9uIiwiZG9jIiwiY3VycmVudFVzZXIiLCJ1aWQiLCJvblNuYXBzaG90IiwidHlwZSIsInR5cGVzIiwiR0VUX1BST0ZJTEUiLCJwYXlsb2FkIiwiZGF0YSIsImdldEZhdm9yaXRlQXV0aG9ycyIsImFkZGVkT24iLCJ1c2VySWQiLCJ3aGVyZSIsImdldCIsInRoZW4iLCJkb2NzIiwiZmF2QXJyIiwiZm9yRWFjaCIsImNyZWF0ZWRBdCIsInJlY2lwaWVudCIsInVzZXJzIiwicmVzdWx0IiwibWFwIiwidXNlciIsIlByb21pc2UiLCJhbGwiLCJyZXMiLCJmYXZVc2VycyIsIkdFVF9GQVZPUklURV9BVVRIT1JTIiwiZ2V0Rm9sbG93ZXJzIiwic2VuZGVySWQiLCJHRVRfRk9MTE9XRVJTIiwiZ2V0SXNGb2xsb3dpbmciLCJzbmFwc2hvdCIsImFuc3dlciIsImxlbmd0aCIsIklTX0ZPTExPV0lORyIsImZvbGxvd1VzZXIiLCJpc0Zhdm9yaXRlIiwibmV3Rm9sbG93ZXIiLCJtZXNzYWdlIiwid2FybmluZyIsImVycm9yIiwiZW1haWxWZXJpZmllZCIsImFkZCIsInNlbmRlciIsInVzZXJuYW1lIiwiZmlyZWJhc2UiLCJmaXJlc3RvcmUiLCJGaWVsZFZhbHVlIiwic2VydmVyVGltZXN0YW1wIiwic3VjY2VzcyIsImVyciIsInVuZm9sbG93VXNlciIsImNoYW5nZVByb2ZpbGUiLCJzZXRPcGVuIiwidXNlckltYWdlIiwiYmF0Y2giLCJuZXdQYXNzd29yZCIsImFjdHVhbFBhc3N3b3JkIiwibmV3SW5mbyIsImltYWdlTmFtZSIsInVzZXJTdG9yaWVzUXVlcnkiLCJ1c2VyQ2hhcHRlcnNRdWVyeSIsInVzZXJDaGFyYWN0ZXJzUXVlcnkiLCJ1c2VyQ29tbWVudHNRdWVyeSIsImJhdGNoVXBkYXRlQWxsIiwicXVlcmllcyIsInN0b3J5IiwidXBkYXRlIiwidXJsIiwiYXV0aG9yTmFtZSIsImNoYXAiLCJjaGFyIiwicmVhdXRoZW50aWNhdGVXaXRoQ3JlZGVudGlhbCIsIkVtYWlsQXV0aFByb3ZpZGVyIiwiY3JlZGVudGlhbCIsImN1cnJlbnRQYXNzd29yZCIsInVwZGF0ZVBhc3N3b3JkIiwiaW1hZ2UiLCJzdG9yYWdlIiwicmVmIiwicHV0IiwiZ2V0RG93bmxvYWRVUkwiLCJpbWFnZVVybCIsImNvbW1pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxLQUFELEVBQVFDLFFBQVI7QUFBQSxTQUFxQixVQUFDQyxRQUFELEVBQWM7QUFDdkRDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSixLQUFaLEVBQW1CQyxRQUFuQjtBQUNBSSxrREFBSSxDQUFDQywwQkFBTCxDQUFnQ04sS0FBaEMsRUFBdUNDLFFBQXZDO0FBQ0QsR0FIcUI7QUFBQSxDQUFmO0FBS0EsSUFBTU0sVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsRUFBRDtBQUFBLFNBQVEsVUFBQ04sUUFBRCxFQUFjO0FBQzlDTyxnREFBRSxDQUFDQyxVQUFILENBQWMsT0FBZCxFQUNHQyxHQURILENBQ09ILEVBQUUsR0FBR0EsRUFBSCxHQUFRSCw4Q0FBSSxDQUFDTyxXQUFMLENBQWlCQyxHQURsQyxFQUVHQyxVQUZILENBRWMsVUFBQ0gsR0FBRCxFQUFTO0FBQ25CLGFBQU9ULFFBQVEsQ0FBQztBQUNkYSxZQUFJLEVBQUVDLHNEQUFLLENBQUNDLFdBREU7QUFFZEMsZUFBTztBQUFJVixZQUFFLEVBQUVHLEdBQUcsQ0FBQ0g7QUFBWixXQUFtQkcsR0FBRyxD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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0QsR0FoZDRCO0FBQUEsQ0FBdEIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS9baWRdLmMwMWZlZGVhM2ZmZjc2MDJhOGUyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkYiwgYXV0aCwgc3RvcmFnZSB9IGZyb20gXCIuLi9mYkNvbmZpZ1wiO1xyXG5pbXBvcnQgeyB0eXBlcyB9IGZyb20gXCIuLi8uLi91dGlscy9jb25zdGFudHNcIjtcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcclxuaW1wb3J0IHsgbWVzc2FnZSB9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5leHBvcnQgY29uc3QgbG9nX2luID0gKGVtYWlsLCBwYXNzd29yZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgY29uc29sZS5sb2coZW1haWwsIHBhc3N3b3JkKTtcclxuICBhdXRoLnNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UHJvZmlsZSA9IChpZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGIuY29sbGVjdGlvbihcInVzZXJzXCIpXHJcbiAgICAuZG9jKGlkID8gaWQgOiBhdXRoLmN1cnJlbnRVc2VyLnVpZClcclxuICAgIC5vblNuYXBzaG90KChkb2MpID0+IHtcclxuICAgICAgcmV0dXJuIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiB0eXBlcy5HRVRfUFJPRklMRSxcclxuICAgICAgICBwYXlsb2FkOiB7IGlkOiBkb2MuaWQsIC4uLmRvYy5kYXRhKCkgfSxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRGYXZvcml0ZUF1dGhvcnMgPSAoaWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGxldCBhZGRlZE9uO1xyXG4gIGNvbnN0IHVzZXJJZCA9IGlkID8gaWQgOiBhdXRoLmN1cnJlbnRVc2VyLnVpZDtcclxuICBkYi5jb2xsZWN0aW9uKFwidXNlcnNMaWtlc1wiKVxyXG4gICAgLndoZXJlKFwic2VuZGVySWRcIiwgXCI9PVwiLCB1c2VySWQpXHJcbiAgICAuZ2V0KClcclxuICAgIC50aGVuKChkb2NzKSA9PiB7XHJcbiAgICAgIGxldCBmYXZBcnIgPSBbXTtcclxuICAgICAgZG9jcy5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgICAgICBhZGRlZE9uID0gZG9jLmRhdGEoKS5jcmVhdGVkQXQ7XHJcbiAgICAgICAgZmF2QXJyID0gWy4uLmZhdkFyciwgZG9jLmRhdGEoKS5yZWNpcGllbnRdO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGZhdkFycjtcclxuICAgIH0pXHJcbiAgICAudGhlbigodXNlcnMpID0+IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gdXNlcnMubWFwKCh1c2VyKSA9PlxyXG4gICAgICAgIGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKS5kb2ModXNlcikuZ2V0KClcclxuICAgICAgKTtcclxuICAgICAgUHJvbWlzZS5hbGwocmVzdWx0KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBsZXQgZmF2VXNlcnMgPSBbXTtcclxuICAgICAgICByZXMuZm9yRWFjaChcclxuICAgICAgICAgIChkb2MpID0+XHJcbiAgICAgICAgICAgIChmYXZVc2VycyA9IFsuLi5mYXZVc2VycywgeyBhZGRlZE9uLCBpZDogZG9jLmlkLCAuLi5kb2MuZGF0YSgpIH1dKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogdHlwZXMuR0VUX0ZBVk9SSVRFX0FVVEhPUlMsXHJcbiAgICAgICAgICBwYXlsb2FkOiBmYXZVc2VycyxcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRGb2xsb3dlcnMgPSAoaWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGxldCBhZGRlZE9uO1xyXG4gIGNvbnN0IHVzZXJJZCA9IGlkID8gaWQgOiBhdXRoLmN1cnJlbnRVc2VyLnVpZDtcclxuICBkYi5jb2xsZWN0aW9uKFwidXNlcnNMaWtlc1wiKVxyXG4gICAgLndoZXJlKFwicmVjaXBpZW50XCIsIFwiPT1cIiwgdXNlcklkKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigoZG9jcykgPT4ge1xyXG4gICAgICBsZXQgZmF2QXJyID0gW107XHJcbiAgICAgIGRvY3MuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICAgICAgYWRkZWRPbiA9IGRvYy5kYXRhKCkuY3JlYXRlZEF0O1xyXG4gICAgICAgIGZhdkFyciA9IFsuLi5mYXZBcnIsIGRvYy5kYXRhKCkuc2VuZGVySWRdO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGZhdkFycjtcclxuICAgIH0pXHJcbiAgICAudGhlbigodXNlcnMpID0+IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gdXNlcnMubWFwKCh1c2VyKSA9PlxyXG4gICAgICAgIGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKS5kb2ModXNlcikuZ2V0KClcclxuICAgICAgKTtcclxuICAgICAgUHJvbWlzZS5hbGwocmVzdWx0KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBsZXQgZmF2VXNlcnMgPSBbXTtcclxuICAgICAgICByZXMuZm9yRWFjaChcclxuICAgICAgICAgIChkb2MpID0+XHJcbiAgICAgICAgICAgIChmYXZVc2VycyA9IFsuLi5mYXZVc2VycywgeyBhZGRlZE9uLCBpZDogZG9jLmlkLCAuLi5kb2MuZGF0YSgpIH1dKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogdHlwZXMuR0VUX0ZPTExPV0VSUyxcclxuICAgICAgICAgIHBheWxvYWQ6IGZhdlVzZXJzLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldElzRm9sbG93aW5nID0gKHVzZXJJZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgaWYgKGF1dGguY3VycmVudFVzZXIpIHtcclxuICAgIGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc0xpa2VzXCIpXHJcbiAgICAgIC53aGVyZShcInJlY2lwaWVudFwiLCBcIj09XCIsIHVzZXJJZClcclxuICAgICAgLndoZXJlKFwic2VuZGVySWRcIiwgXCI9PVwiLCBhdXRoLmN1cnJlbnRVc2VyLnVpZClcclxuICAgICAgLm9uU25hcHNob3QoKHNuYXBzaG90KSA9PiB7XHJcbiAgICAgICAgY29uc3QgYW5zd2VyID0gc25hcHNob3QuZG9jcy5sZW5ndGggPiAwID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgIHJldHVybiBkaXNwYXRjaCh7IHR5cGU6IHR5cGVzLklTX0ZPTExPV0lORywgcGF5bG9hZDogYW5zd2VyIH0pO1xyXG4gICAgICB9KTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZm9sbG93VXNlciA9IChpZCwgaXNGYXZvcml0ZSwgbmV3Rm9sbG93ZXIpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGlmIChpc0Zhdm9yaXRlKSByZXR1cm4gbWVzc2FnZS53YXJuaW5nKFwiWW91IGFyZSBhbHJlYWR5IGZvbGxvd2luZyB0aGlzIHVzZXJcIik7XHJcbiAgaWYgKCFhdXRoLmN1cnJlbnRVc2VyKVxyXG4gICAgcmV0dXJuIG1lc3NhZ2UuZXJyb3IoXCJZb3UgbmVlZCB0byBiZSBsb2dnZWQgaW4gdG8gZm9sbG93IHVzZXJzXCIpO1xyXG4gIGlmICghYXV0aC5jdXJyZW50VXNlci5lbWFpbFZlcmlmaWVkKVxyXG4gICAgcmV0dXJuIG1lc3NhZ2UuZXJyb3IoXCJZb3UgbmVlZCB0byB2ZXJpZnkgeW91ciBlbWFpbCBmaXJzdFwiKTtcclxuXHJcbiAgZGIuY29sbGVjdGlvbihcInVzZXJzTGlrZXNcIilcclxuICAgIC5hZGQoe1xyXG4gICAgICBzZW5kZXI6IG5ld0ZvbGxvd2VyLnVzZXJuYW1lLFxyXG4gICAgICBzZW5kZXJJZDogbmV3Rm9sbG93ZXIudWlkLFxyXG4gICAgICByZWNpcGllbnQ6IGlkLFxyXG4gICAgICBjcmVhdGVkQXQ6IGZpcmViYXNlLmZpcmVzdG9yZS5GaWVsZFZhbHVlLnNlcnZlclRpbWVzdGFtcCgpLFxyXG4gICAgfSlcclxuICAgIC50aGVuKCgpID0+IG1lc3NhZ2Uuc3VjY2VzcyhcIllvdSBhcmUgbm93IGZvbGxvd2luZyB0aGlzIHVzZXJcIikpXHJcbiAgICAuY2F0Y2goKGVycikgPT4gbWVzc2FnZS5lcnJvcihcIlRoZXJlIGhhcyBiZWVuIGEgcHJvYmxlbVwiKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdW5mb2xsb3dVc2VyID0gKGlkLCBpc0Zhdm9yaXRlKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBpZiAoIWlzRmF2b3JpdGUpXHJcbiAgICByZXR1cm4gbWVzc2FnZS53YXJuaW5nKFwiWW91IGFyZSBub3QgZm9sbG93aW5nIHRoaXMgdXNlciB5ZXRcIik7XHJcblxyXG4gIGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc0xpa2VzXCIpXHJcbiAgICAud2hlcmUoXCJyZWNpcGllbnRcIiwgXCI9PVwiLCBpZClcclxuICAgIC53aGVyZShcInNlbmRlcklkXCIsIFwiPT1cIiwgYXV0aC5jdXJyZW50VXNlci51aWQpXHJcbiAgICAuZ2V0KClcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiBkYi5jb2xsZWN0aW9uKFwidXNlcnNMaWtlc1wiKS5kb2MoZGF0YS5kb2NzWzBdLmlkKS5kZWxldGUoKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoKSA9PiBtZXNzYWdlLnN1Y2Nlc3MoXCJVc2VyIHN1Y2Nlc3NmdWxseSB1bmZvbGxvd2VkXCIpKVxyXG4gICAgLmNhdGNoKChlcnIpID0+IG1lc3NhZ2UuZXJyb3IoXCJUaGVyZSBoYXMgYmVlbiBhIHByb2JsZW1cIikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNoYW5nZVByb2ZpbGUgPSAoZGF0YSwgc2V0T3BlbiwgdXNlcm5hbWUsIHVzZXJJbWFnZSkgPT4gKFxyXG4gIGRpc3BhdGNoXHJcbikgPT4ge1xyXG4gIGNvbnN0IGJhdGNoID0gZGIuYmF0Y2goKTtcclxuICBjb25zdCB7IG5ld1Bhc3N3b3JkLCBhY3R1YWxQYXNzd29yZCwgLi4ubmV3SW5mbyB9ID0gZGF0YTtcclxuICBjb25zdCBpbWFnZU5hbWUgPSBgJHthdXRoLmN1cnJlbnRVc2VyLnVpZH1fJHtuZXdJbmZvLnVzZXJuYW1lfWA7XHJcblxyXG4gIC8vIFNUT1JJRVMsIENIQVBURVJTLCBDSEFSQUNURVJTICYgQ09NTUVOVFMgUVVFUklFU1xyXG4gIGNvbnN0IHVzZXJTdG9yaWVzUXVlcnkgPSBkYlxyXG4gICAgLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpXHJcbiAgICAud2hlcmUoXCJhdXRob3JJZFwiLCBcIj09XCIsIGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gICAgLmdldCgpO1xyXG4gIGNvbnN0IHVzZXJDaGFwdGVyc1F1ZXJ5ID0gZGJcclxuICAgIC5jb2xsZWN0aW9uKFwiY2hhcHRlcnNcIilcclxuICAgIC53aGVyZShcImF1dGhvcklkXCIsIFwiPT1cIiwgYXV0aC5jdXJyZW50VXNlci51aWQpXHJcbiAgICAuZ2V0KCk7XHJcbiAgY29uc3QgdXNlckNoYXJhY3RlcnNRdWVyeSA9IGRiXHJcbiAgICAuY29sbGVjdGlvbihcImNoYXJhY3RlcnNcIilcclxuICAgIC53aGVyZShcImF1dGhvcklkXCIsIFwiPT1cIiwgYXV0aC5jdXJyZW50VXNlci51aWQpXHJcbiAgICAuZ2V0KCk7XHJcbiAgY29uc3QgdXNlckNvbW1lbnRzUXVlcnkgPSBkYlxyXG4gICAgLmNvbGxlY3Rpb24oXCJjb21tZW50c1wiKVxyXG4gICAgLndoZXJlKFwidXNlcklkXCIsIFwiPT1cIiwgYXV0aC5jdXJyZW50VXNlci51aWQpXHJcbiAgICAuZ2V0KCk7XHJcblxyXG4gIGNvbnN0IGJhdGNoVXBkYXRlQWxsID0gKHF1ZXJpZXMpID0+IHtcclxuICAgIFByb21pc2UuYWxsKHF1ZXJpZXMpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICByZXNbMF0uZm9yRWFjaCgoc3RvcnkpID0+IHtcclxuICAgICAgICBiYXRjaC51cGRhdGUoZGIuY29sbGVjdGlvbihcInN0b3JpZXNcIikuZG9jKHN0b3J5LmlkKSwge1xyXG4gICAgICAgICAgdXNlckltYWdlOiB1cmwsXHJcbiAgICAgICAgICBhdXRob3JOYW1lOiBkYXRhLnVzZXJuYW1lLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgICAgcmVzWzFdLmZvckVhY2goKGNoYXApID0+IHtcclxuICAgICAgICBiYXRjaC51cGRhdGUoZGIuY29sbGVjdGlvbihcImNoYXB0ZXJzXCIpLmRvYyhjaGFwLmlkKSwge1xyXG4gICAgICAgICAgdXNlckltYWdlOiB1cmwsXHJcbiAgICAgICAgICBhdXRob3JOYW1lOiBkYXRhLnVzZXJuYW1lLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgICAgcmVzWzJdLmZvckVhY2goKGNoYXIpID0+IHtcclxuICAgICAgICBiYXRjaC51cGRhdGUoZGIuY29sbGVjdGlvbihcImNoYXJhY3RlcnNcIikuZG9jKGNoYXIuaWQpLCB7XHJcbiAgICAgICAgICB1c2VySW1hZ2U6IHVybCxcclxuICAgICAgICAgIGF1dGhvck5hbWU6IGRhdGEudXNlcm5hbWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXNbM10uZm9yRWFjaCgoY2hhcikgPT4ge1xyXG4gICAgICAgIGJhdGNoLnVwZGF0ZShkYi5jb2xsZWN0aW9uKFwiY29tbWVudHNcIikuZG9jKGNoYXIuaWQpLCB7XHJcbiAgICAgICAgICB1c2VySW1hZ2U6IHVybCxcclxuICAgICAgICAgIHVzZXJuYW1lOiBkYXRhLnVzZXJuYW1lLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGlmIChuZXdQYXNzd29yZCkge1xyXG4gICAgYXV0aC5jdXJyZW50VXNlclxyXG4gICAgICAucmVhdXRoZW50aWNhdGVXaXRoQ3JlZGVudGlhbChcclxuICAgICAgICBmaXJlYmFzZS5hdXRoLkVtYWlsQXV0aFByb3ZpZGVyLmNyZWRlbnRpYWwodXNlci5lbWFpbCwgY3VycmVudFBhc3N3b3JkKVxyXG4gICAgICApXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICByZXR1cm4gdXNlci51cGRhdGVQYXNzd29yZChuZXdQYXNzd29yZCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKGFzeW5jICgpID0+IHtcclxuICAgICAgICBpZiAodHlwZW9mIG5ld0luZm8uaW1hZ2UgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgIHN0b3JhZ2VcclxuICAgICAgICAgICAgLnJlZihgJHthdXRoLmN1cnJlbnRVc2VyLnVpZH0vJHtpbWFnZU5hbWV9YClcclxuICAgICAgICAgICAgLnB1dChuZXdJbmZvLmltYWdlKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHN0b3JhZ2VcclxuICAgICAgICAgICAgICAgIC5yZWYoYCR7YXV0aC5jdXJyZW50VXNlci51aWR9LyR7aW1hZ2VOYW1lfWApXHJcbiAgICAgICAgICAgICAgICAuZ2V0RG93bmxvYWRVUkwoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oYXN5bmMgKHVybCkgPT4ge1xyXG4gICAgICAgICAgICAgIGltYWdlVXJsID0gdXJsO1xyXG4gICAgICAgICAgICAgIGJhdGNoLnVwZGF0ZShkYi5jb2xsZWN0aW9uKFwidXNlcnNcIikuZG9jKGF1dGguY3VycmVudFVzZXIudWlkKSwge1xyXG4gICAgICAgICAgICAgICAgLi4ubmV3SW5mbyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiBpbWFnZVVybCxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICBhd2FpdCBiYXRjaFVwZGF0ZUFsbChbXHJcbiAgICAgICAgICAgICAgICB1c2VyU3Rvcmllc1F1ZXJ5LFxyXG4gICAgICAgICAgICAgICAgdXNlckNoYXB0ZXJzUXVlcnksXHJcbiAgICAgICAgICAgICAgICB1c2VyQ2hhcmFjdGVyc1F1ZXJ5LFxyXG4gICAgICAgICAgICAgICAgdXNlckNvbW1lbnRzUXVlcnksXHJcbiAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgICAgYmF0Y2guY29tbWl0KCkudGhlbigoKSA9PiBjb25zb2xlLmxvZyhcImFsbCBnb29kXCIpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGJhdGNoLnVwZGF0ZShkYi5jb2xsZWN0aW9uKFwidXNlcnNcIikuZG9jKGF1dGguY3VycmVudFVzZXIudWlkKSwge1xyXG4gICAgICAgICAgICAuLi5uZXdJbmZvLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBhd2FpdCBiYXRjaFVwZGF0ZUFsbChbXHJcbiAgICAgICAgICAgIHVzZXJTdG9yaWVzUXVlcnksXHJcbiAgICAgICAgICAgIHVzZXJDaGFwdGVyc1F1ZXJ5LFxyXG4gICAgICAgICAgICB1c2VyQ2hhcmFjdGVyc1F1ZXJ5LFxyXG4gICAgICAgICAgICB1c2VyQ29tbWVudHNRdWVyeSxcclxuICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgYmF0Y2guY29tbWl0KCkudGhlbigoKSA9PiBjb25zb2xlLmxvZyhcImFsbCBnb29kXCIpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBpZiAodHlwZW9mIG5ld0luZm8uaW1hZ2UgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgc3RvcmFnZVxyXG4gICAgICAgIC5yZWYoYCR7YXV0aC5jdXJyZW50VXNlci51aWR9LyR7aW1hZ2VOYW1lfWApXHJcbiAgICAgICAgLnB1dChuZXdJbmZvLmltYWdlKVxyXG4gICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgIHJldHVybiBzdG9yYWdlXHJcbiAgICAgICAgICAgIC5yZWYoYCR7YXV0aC5jdXJyZW50VXNlci51aWR9LyR7aW1hZ2VOYW1lfWApXHJcbiAgICAgICAgICAgIC5nZXREb3dubG9hZFVSTCgpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oYXN5bmMgKHVybCkgPT4ge1xyXG4gICAgICAgICAgaW1hZ2VVcmwgPSB1cmw7XHJcbiAgICAgICAgICBiYXRjaC51cGRhdGUoZGIuY29sbGVjdGlvbihcInVzZXJzXCIpLmRvYyhhdXRoLmN1cnJlbnRVc2VyLnVpZCksIHtcclxuICAgICAgICAgICAgLi4ubmV3SW5mbyxcclxuICAgICAgICAgICAgaW1hZ2U6IGltYWdlVXJsLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBhd2FpdCBiYXRjaFVwZGF0ZUFsbChbXHJcbiAgICAgICAgICAgIHVzZXJTdG9yaWVzUXVlcnksXHJcbiAgICAgICAgICAgIHVzZXJDaGFwdGVyc1F1ZXJ5LFxyXG4gICAgICAgICAgICB1c2VyQ2hhcmFjdGVyc1F1ZXJ5LFxyXG4gICAgICAgICAgICB1c2VyQ29tbWVudHNRdWVyeSxcclxuICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgYmF0Y2guY29tbWl0KCkudGhlbigoKSA9PiBjb25zb2xlLmxvZyhcImFsbCBnb29kXCIpKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGJhdGNoLnVwZGF0ZShkYi5jb2xsZWN0aW9uKFwidXNlcnNcIikuZG9jKGF1dGguY3VycmVudFVzZXIudWlkKSwge1xyXG4gICAgICAgIC4uLm5ld0luZm8sXHJcbiAgICAgIH0pO1xyXG4gICAgICBiYXRjaFVwZGF0ZUFsbChbXHJcbiAgICAgICAgdXNlclN0b3JpZXNRdWVyeSxcclxuICAgICAgICB1c2VyQ2hhcHRlcnNRdWVyeSxcclxuICAgICAgICB1c2VyQ2hhcmFjdGVyc1F1ZXJ5LFxyXG4gICAgICAgIHVzZXJDb21tZW50c1F1ZXJ5LFxyXG4gICAgICBdKTtcclxuICAgICAgYmF0Y2guY29tbWl0KCkudGhlbigoKSA9PiBjb25zb2xlLmxvZyhcImFsbCBnb29kXCIpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vICAgY29uc3QgcmVhdXRoZW50aWNhdGUgPSAoY3VycmVudFBhc3N3b3JkKSA9PiB7XHJcbiAgLy8gICBjb25zdCB1c2VyID0gYXV0aC5jdXJyZW50VXNlcjtcclxuICAvLyAgIGNvbnN0IGNyZWQgPSA7XHJcbiAgLy8gICByZXR1cm4gdXNlci5yZWF1dGhlbnRpY2F0ZVdpdGhDcmVkZW50aWFsKGNyZWQpO1xyXG4gIC8vIH07XHJcbiAgLy8gY29uc3QgYmF0Y2ggPSBkYi5iYXRjaCgpO1xyXG4gIC8vIGNvbnN0IHsgbmV3UGFzc3dvcmQsIGFjdHVhbFBhc3N3b3JkLCAuLi5uZXdJbmZvIH0gPSBkYXRhO1xyXG4gIC8vIGNvbnN0IGltYWdlTmFtZSA9IGAke2F1dGguY3VycmVudFVzZXIudWlkfV8ke2RhdGEudXNlcm5hbWV9YDtcclxuICAvLyBsZXQgaW1hZ2VVcmwgPSBcIlwiO1xyXG4gIC8vIGNvbnN0IHVzZXJTdG9yaWVzUXVlcnkgPSBkYlxyXG4gIC8vICAgLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpXHJcbiAgLy8gICAud2hlcmUoXCJhdXRob3JJZFwiLCBcIj09XCIsIGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gIC8vICAgLmdldCgpO1xyXG4gIC8vIGNvbnN0IHVzZXJDaGFwdGVyc1F1ZXJ5ID0gZGJcclxuICAvLyAgIC5jb2xsZWN0aW9uKFwiY2hhcHRlcnNcIilcclxuICAvLyAgIC53aGVyZShcImF1dGhvcklkXCIsIFwiPT1cIiwgYXV0aC5jdXJyZW50VXNlci51aWQpXHJcbiAgLy8gICAuZ2V0KCk7XHJcbiAgLy8gY29uc3QgdXNlckNoYXJhY3RlcnNRdWVyeSA9IGRiXHJcbiAgLy8gICAuY29sbGVjdGlvbihcImNoYXJhY3RlcnNcIilcclxuICAvLyAgIC53aGVyZShcImF1dGhvcklkXCIsIFwiPT1cIiwgYXV0aC5jdXJyZW50VXNlci51aWQpXHJcbiAgLy8gICAuZ2V0KCk7XHJcbiAgLy8gY29uc3QgdXNlckNvbW1lbnRzUXVlcnkgPSBkYlxyXG4gIC8vICAgLmNvbGxlY3Rpb24oXCJjb21tZW50c1wiKVxyXG4gIC8vICAgLndoZXJlKFwidXNlcklkXCIsIFwiPT1cIiwgYXV0aC5jdXJyZW50VXNlci51aWQpXHJcbiAgLy8gICAuZ2V0KCk7XHJcbiAgLy8gUHJvbWlzZS5hbGwoW1xyXG4gIC8vICAgdXNlclN0b3JpZXNRdWVyeSxcclxuICAvLyAgIHVzZXJDaGFwdGVyc1F1ZXJ5LFxyXG4gIC8vICAgdXNlckNoYXJhY3RlcnNRdWVyeSxcclxuICAvLyAgIHVzZXJDb21tZW50c1F1ZXJ5LFxyXG4gIC8vIF0pLnRoZW4oKHJlcykgPT4ge1xyXG4gIC8vICAgcmVzWzBdLmZvckVhY2goKHN0b3J5KSA9PiB7XHJcbiAgLy8gICAgIGJhdGNoLnVwZGF0ZShkYi5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKS5kb2Moc3RvcnkuaWQpLCB7XHJcbiAgLy8gICAgICAgdXNlckltYWdlOiB1cmwsXHJcbiAgLy8gICAgICAgYXV0aG9yTmFtZTogZGF0YS51c2VybmFtZSxcclxuICAvLyAgICAgfSk7XHJcbiAgLy8gICB9KTtcclxuICAvLyAgIHJlc1sxXS5mb3JFYWNoKChjaGFwKSA9PiB7XHJcbiAgLy8gICAgIGJhdGNoLnVwZGF0ZShkYi5jb2xsZWN0aW9uKFwiY2hhcHRlcnNcIikuZG9jKGNoYXAuaWQpLCB7XHJcbiAgLy8gICAgICAgdXNlckltYWdlOiB1cmwsXHJcbiAgLy8gICAgICAgYXV0aG9yTmFtZTogZGF0YS51c2VybmFtZSxcclxuICAvLyAgICAgfSk7XHJcbiAgLy8gICB9KTtcclxuICAvLyAgIHJlc1syXS5mb3JFYWNoKChjaGFyKSA9PiB7XHJcbiAgLy8gICAgIGJhdGNoLnVwZGF0ZShkYi5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc1wiKS5kb2MoY2hhci5pZCksIHtcclxuICAvLyAgICAgICB1c2VySW1hZ2U6IHVybCxcclxuICAvLyAgICAgICBhdXRob3JOYW1lOiBkYXRhLnVzZXJuYW1lLFxyXG4gIC8vICAgICB9KTtcclxuICAvLyAgIH0pO1xyXG4gIC8vICAgcmVzWzNdLmZvckVhY2goKGNoYXIpID0+IHtcclxuICAvLyAgICAgYmF0Y2gudXBkYXRlKGRiLmNvbGxlY3Rpb24oXCJjb21tZW50c1wiKS5kb2MoY2hhci5pZCksIHtcclxuICAvLyAgICAgICB1c2VySW1hZ2U6IHVybCxcclxuICAvLyAgICAgICB1c2VybmFtZTogZGF0YS51c2VybmFtZSxcclxuICAvLyAgICAgfSk7XHJcbiAgLy8gICB9KTtcclxuICAvLyB9KTtcclxuICAvLyAvLyBVUERBVEUgbCdVU0VSXHJcbiAgLy8gaWYgKHR5cGVvZiBkYXRhLmltYWdlID09PSBcIm9iamVjdFwiKSB7XHJcbiAgLy8gICBzdG9yYWdlXHJcbiAgLy8gICAgIC5yZWYoYCR7YXV0aC5jdXJyZW50VXNlci51aWR9LyR7aW1hZ2VOYW1lfWApXHJcbiAgLy8gICAgIC5wdXQoZGF0YS5pbWFnZSlcclxuICAvLyAgICAgLnRoZW4oKCkgPT4ge1xyXG4gIC8vICAgICAgIHJldHVybiBzdG9yYWdlXHJcbiAgLy8gICAgICAgICAucmVmKGAke2F1dGguY3VycmVudFVzZXIudWlkfS8ke2ltYWdlTmFtZX1gKVxyXG4gIC8vICAgICAgICAgLmdldERvd25sb2FkVVJMKCk7XHJcbiAgLy8gICAgIH0pXHJcbiAgLy8gICAgIC50aGVuKCh1cmwpID0+IHtcclxuICAvLyAgICAgICBpbWFnZVVybCA9IHVybDtcclxuICAvLyAgICAgICBkYi51cGRhdGUoZGIuY29sbGVjdGlvbihcInVzZXJzXCIpLmRvYyhhdXRoLmN1cnJlbnRVc2VyLnVpZCksIHtcclxuICAvLyAgICAgICAgIC4uLm5ld0luZm8sXHJcbiAgLy8gICAgICAgICBpbWFnZTogaW1hZ2VVcmwsXHJcbiAgLy8gICAgICAgfSk7XHJcbiAgLy8gICAgIH0pO1xyXG4gIC8vIH0gZWxzZSB7XHJcbiAgLy8gICBkYi51cGRhdGUoZGIuY29sbGVjdGlvbihcInVzZXJzXCIpLmRvYyhhdXRoLmN1cnJlbnRVc2VyLnVpZCksIHtcclxuICAvLyAgICAgLi4ubmV3SW5mbyxcclxuICAvLyAgIH0pO1xyXG4gIC8vIH1cclxuICAvLyAvLyBVUERBVEUgTEUgTU9UIERFIFBBU1NFXHJcbiAgLy8gaWYgKG5ld1Bhc3N3b3JkKSB7XHJcbiAgLy8gICBhdXRoLmN1cnJlbnRVc2VyXHJcbiAgLy8gICAgIC5yZWF1dGhlbnRpY2F0ZVdpdGhDcmVkZW50aWFsKFxyXG4gIC8vICAgICAgIGZpcmViYXNlLmF1dGguRW1haWxBdXRoUHJvdmlkZXIuY3JlZGVudGlhbCh1c2VyLmVtYWlsLCBjdXJyZW50UGFzc3dvcmQpXHJcbiAgLy8gICAgIClcclxuICAvLyAgICAgLnRoZW4oKCkgPT4ge1xyXG4gIC8vICAgICAgIHJldHVybiB1c2VyLnVwZGF0ZVBhc3N3b3JkKG5ld1Bhc3N3b3JkKTtcclxuICAvLyAgICAgfSk7XHJcbiAgLy8gfVxyXG4gIC8vIC8vIFVQREFURSBMRVMgVE9SSUVTLCBDSEFSQUNURVJTICYgQ09NTUVOVFMgU0kgQkVTT0lOXHJcbiAgLy8gLy8gaWYoKVxyXG4gIC8vIGlmIChuZXdQYXNzd29yZCkge1xyXG4gIC8vICAgcmVhdXRoZW50aWNhdGUoYWN0dWFsUGFzc3dvcmQpXHJcbiAgLy8gICAgIC50aGVuKCgpID0+IHtcclxuICAvLyAgICAgICBjb25zdCB1c2VyID0gYXV0aC5jdXJyZW50VXNlcjtcclxuICAvLyAgICAgICB1c2VyLnVwZGF0ZVBhc3N3b3JkKG5ld1Bhc3N3b3JkKS50aGVuKCgpID0+IHtcclxuICAvLyAgICAgICAgIGlmICh0eXBlb2YgZGF0YS5pbWFnZSA9PT0gXCJvYmplY3RcIikge1xyXG4gIC8vICAgICAgICAgICBzdG9yYWdlXHJcbiAgLy8gICAgICAgICAgICAgLnJlZihgJHthdXRoLmN1cnJlbnRVc2VyLnVpZH0vJHtpbWFnZU5hbWV9YClcclxuICAvLyAgICAgICAgICAgICAucHV0KGRhdGEuaW1hZ2UpXHJcbiAgLy8gICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gIC8vICAgICAgICAgICAgICAgcmV0dXJuIHN0b3JhZ2VcclxuICAvLyAgICAgICAgICAgICAgICAgLnJlZihhdXRoLmN1cnJlbnRVc2VyLnVpZClcclxuICAvLyAgICAgICAgICAgICAgICAgLmNoaWxkKGltYWdlTmFtZSlcclxuICAvLyAgICAgICAgICAgICAgICAgLmdldERvd25sb2FkVVJMKCk7XHJcbiAgLy8gICAgICAgICAgICAgfSlcclxuICAvLyAgICAgICAgICAgICAudGhlbigodXJsKSA9PiB7XHJcbiAgLy8gICAgICAgICAgICAgICBpZiAoZGF0YS51c2VybmFtZSAhPT0gdXNlcm5hbWUgfHwgZGF0YS5pbWFnZSAhPT0gdXNlckltYWdlKSB7XHJcbiAgLy8gICAgICAgICAgICAgICAgIGJhdGNoLnVwZGF0ZShcclxuICAvLyAgICAgICAgICAgICAgICAgICBkYi5jb2xsZWN0aW9uKFwidXNlcnNcIikuZG9jKGF1dGguY3VycmVudFVzZXIudWlkKSxcclxuICAvLyAgICAgICAgICAgICAgICAgICB7XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICBpbWFnZTogdXJsLFxyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgLi4ubmV3SW5mbyxcclxuICAvLyAgICAgICAgICAgICAgICAgICB9XHJcbiAgLy8gICAgICAgICAgICAgICAgICk7XHJcbiAgLy8gICAgICAgICAgICAgICAgIGJhdGNoXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgLmNvbW1pdCgpXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgIFwiWW91ciBwcm9maWxlIGhhcyBiZWVuIHN1Y2Nlc3NmdWxseSB1cGRhdGVkXCJcclxuICAvLyAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgfSlcclxuICAvLyAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLmVycm9yKGVycm9yLm1lc3NhZ2UpO1xyXG4gIC8vICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gIC8vICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAvLyAgICAgICAgICAgICAgICAgYmF0Y2gudXBkYXRlKFxyXG4gIC8vICAgICAgICAgICAgICAgICAgIGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKS5kb2MoYXV0aC5jdXJyZW50VXNlci51aWQpLFxyXG4gIC8vICAgICAgICAgICAgICAgICAgIHtcclxuICAvLyAgICAgICAgICAgICAgICAgICAgIGltYWdlOiB1cmwsXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAuLi5uZXdJbmZvLFxyXG4gIC8vICAgICAgICAgICAgICAgICAgIH1cclxuICAvLyAgICAgICAgICAgICAgICAgKTtcclxuICAvLyAgICAgICAgICAgICAgICAgYmF0Y2hcclxuICAvLyAgICAgICAgICAgICAgICAgICAuY29tbWl0KClcclxuICAvLyAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICBzZXRPcGVuKGZhbHNlKTtcclxuICAvLyAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhcclxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgXCJZb3VyIHByb2ZpbGUgaGFzIGJlZW4gc3VjY2Vzc2Z1bGx5IHVwZGF0ZWRcIlxyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAvLyAgICAgICAgICAgICAgICAgICB9KVxyXG4gIC8vICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAvLyAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UuZXJyb3IoZXJyb3IubWVzc2FnZSk7XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgLy8gICAgICAgICAgICAgICB9XHJcbiAgLy8gICAgICAgICAgICAgfSk7XHJcbiAgLy8gICAgICAgICB9IGVsc2Uge1xyXG4gIC8vICAgICAgICAgICBpZiAoZGF0YS51c2VybmFtZSAhPT0gdXNlcm5hbWUpIHtcclxuICAvLyAgICAgICAgICAgICBQcm9taXNlLmFsbChbXHJcbiAgLy8gICAgICAgICAgICAgICB1c2VyU3Rvcmllc1F1ZXJ5LFxyXG4gIC8vICAgICAgICAgICAgICAgdXNlckNoYXB0ZXJzUXVlcnksXHJcbiAgLy8gICAgICAgICAgICAgICB1c2VyQ2hhcmFjdGVyc1F1ZXJ5LFxyXG4gIC8vICAgICAgICAgICAgICAgdXNlckNvbW1lbnRzUXVlcnksXHJcbiAgLy8gICAgICAgICAgICAgXSkudGhlbigocmVzKSA9PiB7XHJcbiAgLy8gICAgICAgICAgICAgICByZXNbMF0uZm9yRWFjaCgoc3RvcnkpID0+IHtcclxuICAvLyAgICAgICAgICAgICAgICAgYmF0Y2gudXBkYXRlKGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpLmRvYyhzdG9yeS5pZCksIHtcclxuICAvLyAgICAgICAgICAgICAgICAgICBhdXRob3JOYW1lOiBkYXRhLnVzZXJuYW1lLFxyXG4gIC8vICAgICAgICAgICAgICAgICB9KTtcclxuICAvLyAgICAgICAgICAgICAgIH0pO1xyXG4gIC8vICAgICAgICAgICAgICAgcmVzWzBdLmZvckVhY2goKGNoYXApID0+IHtcclxuICAvLyAgICAgICAgICAgICAgICAgYmF0Y2gudXBkYXRlKGRiLmNvbGxlY3Rpb24oXCJjaGFwdGVyc1wiKS5kb2MoY2hhcC5pZCksIHtcclxuICAvLyAgICAgICAgICAgICAgICAgICBhdXRob3JOYW1lOiBkYXRhLnVzZXJuYW1lLFxyXG4gIC8vICAgICAgICAgICAgICAgICB9KTtcclxuICAvLyAgICAgICAgICAgICAgIH0pO1xyXG4gIC8vICAgICAgICAgICAgICAgcmVzWzBdLmZvckVhY2goKGNoYXIpID0+IHtcclxuICAvLyAgICAgICAgICAgICAgICAgYmF0Y2gudXBkYXRlKGRiLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzXCIpLmRvYyhjaGFyLmlkKSwge1xyXG4gIC8vICAgICAgICAgICAgICAgICAgIGF1dGhvck5hbWU6IGRhdGEudXNlcm5hbWUsXHJcbiAgLy8gICAgICAgICAgICAgICAgIH0pO1xyXG4gIC8vICAgICAgICAgICAgICAgfSk7XHJcbiAgLy8gICAgICAgICAgICAgICByZXNbMF0uZm9yRWFjaCgoY2hhcikgPT4ge1xyXG4gIC8vICAgICAgICAgICAgICAgICBiYXRjaC51cGRhdGUoZGIuY29sbGVjdGlvbihcImNvbW1lbnRzXCIpLmRvYyhjaGFyLmlkKSwge1xyXG4gIC8vICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lOiBkYXRhLnVzZXJuYW1lLFxyXG4gIC8vICAgICAgICAgICAgICAgICB9KTtcclxuICAvLyAgICAgICAgICAgICAgIH0pO1xyXG4gIC8vICAgICAgICAgICAgIH0pO1xyXG4gIC8vICAgICAgICAgICAgIGJhdGNoLnVwZGF0ZShkYi5jb2xsZWN0aW9uKFwidXNlcnNcIikuZG9jKGF1dGguY3VycmVudFVzZXIudWlkKSwge1xyXG4gIC8vICAgICAgICAgICAgICAgLi4ubmV3SW5mbyxcclxuICAvLyAgICAgICAgICAgICB9KTtcclxuICAvLyAgICAgICAgICAgfSBlbHNlIHtcclxuICAvLyAgICAgICAgICAgICBiYXRjaC51cGRhdGUoZGIuY29sbGVjdGlvbihcInVzZXJzXCIpLmRvYyhhdXRoLmN1cnJlbnRVc2VyLnVpZCksIHtcclxuICAvLyAgICAgICAgICAgICAgIC4uLm5ld0luZm8sXHJcbiAgLy8gICAgICAgICAgICAgfSk7XHJcbiAgLy8gICAgICAgICAgICAgYmF0Y2hcclxuICAvLyAgICAgICAgICAgICAgIC5jb21taXQoKVxyXG4gIC8vICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gIC8vICAgICAgICAgICAgICAgICBzZXRPcGVuKGZhbHNlKTtcclxuICAvLyAgICAgICAgICAgICAgICAgbWVzc2FnZS5zdWNjZXNzKFwiWW91ciBwcm9maWxlIGhhcyBiZWVuIHN1Y2Nlc3NmdWxseSB1cGRhdGVkXCIpO1xyXG4gIC8vICAgICAgICAgICAgICAgfSlcclxuICAvLyAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAvLyAgICAgICAgICAgICAgICAgbWVzc2FnZS5lcnJvcihlcnJvci5tZXNzYWdlKTtcclxuICAvLyAgICAgICAgICAgICAgIH0pO1xyXG4gIC8vICAgICAgICAgICB9XHJcbiAgLy8gICAgICAgICB9XHJcbiAgLy8gICAgICAgfSk7XHJcbiAgLy8gICAgIH0pXHJcbiAgLy8gICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgLy8gICAgICAgbWVzc2FnZS5lcnJvcihlcnIubWVzc2FnZSk7XHJcbiAgLy8gICAgIH0pO1xyXG4gIC8vIH0gZWxzZSB7XHJcbiAgLy8gICBpZiAodHlwZW9mIGRhdGEuaW1hZ2UgPT09IFwib2JqZWN0XCIpIHtcclxuICAvLyAgICAgc3RvcmFnZVxyXG4gIC8vICAgICAgIC5yZWYoYCR7YXV0aC5jdXJyZW50VXNlci51aWR9LyR7aW1hZ2VOYW1lfWApXHJcbiAgLy8gICAgICAgLnB1dChkYXRhLmltYWdlKVxyXG4gIC8vICAgICAgIC50aGVuKCgpID0+IHtcclxuICAvLyAgICAgICAgIHJldHVybiBzdG9yYWdlXHJcbiAgLy8gICAgICAgICAgIC5yZWYoYXV0aC5jdXJyZW50VXNlci51aWQpXHJcbiAgLy8gICAgICAgICAgIC5jaGlsZChpbWFnZU5hbWUpXHJcbiAgLy8gICAgICAgICAgIC5nZXREb3dubG9hZFVSTCgpO1xyXG4gIC8vICAgICAgIH0pXHJcbiAgLy8gICAgICAgLnRoZW4oKHVybCkgPT4ge1xyXG4gIC8vICAgICAgICAgaWYgKGRhdGEudXNlcm5hbWUgIT09IHVzZXJuYW1lIHx8IGRhdGEuaW1hZ2UgIT09IHVzZXJJbWFnZSkge1xyXG4gIC8vICAgICAgICAgICBQcm9taXNlLmFsbChbXHJcbiAgLy8gICAgICAgICAgICAgdXNlclN0b3JpZXNRdWVyeSxcclxuICAvLyAgICAgICAgICAgICB1c2VyQ2hhcHRlcnNRdWVyeSxcclxuICAvLyAgICAgICAgICAgICB1c2VyQ2hhcmFjdGVyc1F1ZXJ5LFxyXG4gIC8vICAgICAgICAgICAgIHVzZXJDb21tZW50c1F1ZXJ5LFxyXG4gIC8vICAgICAgICAgICBdKS50aGVuKChyZXMpID0+IHtcclxuICAvLyAgICAgICAgICAgICByZXNbMF0uZm9yRWFjaCgoc3RvcnkpID0+IHtcclxuICAvLyAgICAgICAgICAgICAgIGJhdGNoLnVwZGF0ZShkYi5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKS5kb2Moc3RvcnkuaWQpLCB7XHJcbiAgLy8gICAgICAgICAgICAgICAgIHVzZXJJbWFnZTogdXJsLFxyXG4gIC8vICAgICAgICAgICAgICAgICBhdXRob3JOYW1lOiBkYXRhLnVzZXJuYW1lLFxyXG4gIC8vICAgICAgICAgICAgICAgfSk7XHJcbiAgLy8gICAgICAgICAgICAgfSk7XHJcbiAgLy8gICAgICAgICAgICAgcmVzWzFdLmZvckVhY2goKGNoYXApID0+IHtcclxuICAvLyAgICAgICAgICAgICAgIGJhdGNoLnVwZGF0ZShkYi5jb2xsZWN0aW9uKFwiY2hhcHRlcnNcIikuZG9jKGNoYXAuaWQpLCB7XHJcbiAgLy8gICAgICAgICAgICAgICAgIHVzZXJJbWFnZTogdXJsLFxyXG4gIC8vICAgICAgICAgICAgICAgICBhdXRob3JOYW1lOiBkYXRhLnVzZXJuYW1lLFxyXG4gIC8vICAgICAgICAgICAgICAgfSk7XHJcbiAgLy8gICAgICAgICAgICAgfSk7XHJcbiAgLy8gICAgICAgICAgICAgcmVzWzJdLmZvckVhY2goKGNoYXIpID0+IHtcclxuICAvLyAgICAgICAgICAgICAgIGJhdGNoLnVwZGF0ZShkYi5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc1wiKS5kb2MoY2hhci5pZCksIHtcclxuICAvLyAgICAgICAgICAgICAgICAgdXNlckltYWdlOiB1cmwsXHJcbiAgLy8gICAgICAgICAgICAgICAgIGF1dGhvck5hbWU6IGRhdGEudXNlcm5hbWUsXHJcbiAgLy8gICAgICAgICAgICAgICB9KTtcclxuICAvLyAgICAgICAgICAgICB9KTtcclxuICAvLyAgICAgICAgICAgICByZXNbM10uZm9yRWFjaCgoY2hhcikgPT4ge1xyXG4gIC8vICAgICAgICAgICAgICAgYmF0Y2gudXBkYXRlKGRiLmNvbGxlY3Rpb24oXCJjb21tZW50c1wiKS5kb2MoY2hhci5pZCksIHtcclxuICAvLyAgICAgICAgICAgICAgICAgdXNlckltYWdlOiB1cmwsXHJcbiAgLy8gICAgICAgICAgICAgICAgIHVzZXJuYW1lOiBkYXRhLnVzZXJuYW1lLFxyXG4gIC8vICAgICAgICAgICAgICAgfSk7XHJcbiAgLy8gICAgICAgICAgICAgfSk7XHJcbiAgLy8gICAgICAgICAgIH0pO1xyXG4gIC8vICAgICAgICAgICBiYXRjaC51cGRhdGUoZGIuY29sbGVjdGlvbihcInVzZXJzXCIpLmRvYyhhdXRoLmN1cnJlbnRVc2VyLnVpZCksIHtcclxuICAvLyAgICAgICAgICAgICAuLi5uZXdJbmZvLFxyXG4gIC8vICAgICAgICAgICAgIGltYWdlOiB1cmwsXHJcbiAgLy8gICAgICAgICAgIH0pO1xyXG4gIC8vICAgICAgICAgICBiYXRjaFxyXG4gIC8vICAgICAgICAgICAgIC5jb21taXQoKVxyXG4gIC8vICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAvLyAgICAgICAgICAgICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gIC8vICAgICAgICAgICAgICAgbWVzc2FnZS5zdWNjZXNzKFwiWW91ciBwcm9maWxlIGhhcyBiZWVuIHN1Y2Nlc3NmdWxseSB1cGRhdGVkXCIpO1xyXG4gIC8vICAgICAgICAgICAgIH0pXHJcbiAgLy8gICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gIC8vICAgICAgICAgICAgICAgbWVzc2FnZS5lcnJvcihlcnJvci5tZXNzYWdlKTtcclxuICAvLyAgICAgICAgICAgICB9KTtcclxuICAvLyAgICAgICAgIH0gZWxzZSB7XHJcbiAgLy8gICAgICAgICAgIGJhdGNoLnVwZGF0ZShkYi5jb2xsZWN0aW9uKFwidXNlcnNcIikuZG9jKGF1dGguY3VycmVudFVzZXIudWlkKSwge1xyXG4gIC8vICAgICAgICAgICAgIC4uLm5ld0luZm8sXHJcbiAgLy8gICAgICAgICAgIH0pO1xyXG4gIC8vICAgICAgICAgICBiYXRjaFxyXG4gIC8vICAgICAgICAgICAgIC5jb21taXQoKVxyXG4gIC8vICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAvLyAgICAgICAgICAgICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gIC8vICAgICAgICAgICAgICAgbWVzc2FnZS5zdWNjZXNzKFwiWW91ciBwcm9maWxlIGhhcyBiZWVuIHN1Y2Nlc3NmdWxseSB1cGRhdGVkXCIpO1xyXG4gIC8vICAgICAgICAgICAgIH0pXHJcbiAgLy8gICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gIC8vICAgICAgICAgICAgICAgbWVzc2FnZS5lcnJvcihlcnJvci5tZXNzYWdlKTtcclxuICAvLyAgICAgICAgICAgICB9KTtcclxuICAvLyAgICAgICAgIH1cclxuICAvLyAgICAgICB9KTtcclxuICAvLyAgIH0gZWxzZSB7XHJcbiAgLy8gICAgIGlmIChkYXRhLnVzZXJuYW1lICE9PSB1c2VybmFtZSkge1xyXG4gIC8vICAgICAgIFByb21pc2UuYWxsKFtcclxuICAvLyAgICAgICAgIHVzZXJTdG9yaWVzUXVlcnksXHJcbiAgLy8gICAgICAgICB1c2VyQ2hhcHRlcnNRdWVyeSxcclxuICAvLyAgICAgICAgIHVzZXJDaGFyYWN0ZXJzUXVlcnksXHJcbiAgLy8gICAgICAgICB1c2VyQ29tbWVudHNRdWVyeSxcclxuICAvLyAgICAgICBdKS50aGVuKChyZXMpID0+IHtcclxuICAvLyAgICAgICAgIHJlc1swXS5mb3JFYWNoKChzdG9yeSkgPT4ge1xyXG4gIC8vICAgICAgICAgICBiYXRjaC51cGRhdGUoZGIuY29sbGVjdGlvbihcInN0b3JpZXNcIikuZG9jKHN0b3J5LmlkKSwge1xyXG4gIC8vICAgICAgICAgICAgIGF1dGhvck5hbWU6IGRhdGEudXNlcm5hbWUsXHJcbiAgLy8gICAgICAgICAgIH0pO1xyXG4gIC8vICAgICAgICAgfSk7XHJcbiAgLy8gICAgICAgICByZXNbMV0uZm9yRWFjaCgoY2hhcCkgPT4ge1xyXG4gIC8vICAgICAgICAgICBiYXRjaC51cGRhdGUoZGIuY29sbGVjdGlvbihcImNoYXB0ZXJzXCIpLmRvYyhjaGFwLmlkKSwge1xyXG4gIC8vICAgICAgICAgICAgIGF1dGhvck5hbWU6IGRhdGEudXNlcm5hbWUsXHJcbiAgLy8gICAgICAgICAgIH0pO1xyXG4gIC8vICAgICAgICAgfSk7XHJcbiAgLy8gICAgICAgICByZXNbMl0uZm9yRWFjaCgoY2hhcikgPT4ge1xyXG4gIC8vICAgICAgICAgICBiYXRjaC51cGRhdGUoZGIuY29sbGVjdGlvbihcImNoYXJhY3RlcnNcIikuZG9jKGNoYXIuaWQpLCB7XHJcbiAgLy8gICAgICAgICAgICAgYXV0aG9yTmFtZTogZGF0YS51c2VybmFtZSxcclxuICAvLyAgICAgICAgICAgfSk7XHJcbiAgLy8gICAgICAgICB9KTtcclxuICAvLyAgICAgICAgIHJlc1szXS5mb3JFYWNoKChjaGFyKSA9PiB7XHJcbiAgLy8gICAgICAgICAgIGJhdGNoLnVwZGF0ZShkYi5jb2xsZWN0aW9uKFwiY29tbWVudHNcIikuZG9jKGNoYXIuaWQpLCB7XHJcbiAgLy8gICAgICAgICAgICAgdXNlcm5hbWU6IGRhdGEudXNlcm5hbWUsXHJcbiAgLy8gICAgICAgICAgIH0pO1xyXG4gIC8vICAgICAgICAgfSk7XHJcbiAgLy8gICAgICAgICBiYXRjaC51cGRhdGUoZGIuY29sbGVjdGlvbihcInVzZXJzXCIpLmRvYyhhdXRoLmN1cnJlbnRVc2VyLnVpZCksIHtcclxuICAvLyAgICAgICAgICAgLi4ubmV3SW5mbyxcclxuICAvLyAgICAgICAgIH0pO1xyXG4gIC8vICAgICAgICAgYmF0Y2hcclxuICAvLyAgICAgICAgICAgLmNvbW1pdCgpXHJcbiAgLy8gICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAvLyAgICAgICAgICAgICBzZXRPcGVuKGZhbHNlKTtcclxuICAvLyAgICAgICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoXCJZb3VyIHByb2ZpbGUgaGFzIGJlZW4gc3VjY2Vzc2Z1bGx5IHVwZGF0ZWRcIik7XHJcbiAgLy8gICAgICAgICAgIH0pXHJcbiAgLy8gICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAvLyAgICAgICAgICAgICBtZXNzYWdlLmVycm9yKGVycm9yLm1lc3NhZ2UpO1xyXG4gIC8vICAgICAgICAgICB9KTtcclxuICAvLyAgICAgICB9KTtcclxuICAvLyAgICAgfSBlbHNlIHtcclxuICAvLyAgICAgICBiYXRjaC51cGRhdGUoZGIuY29sbGVjdGlvbihcInVzZXJzXCIpLmRvYyhhdXRoLmN1cnJlbnRVc2VyLnVpZCksIHtcclxuICAvLyAgICAgICAgIC4uLm5ld0luZm8sXHJcbiAgLy8gICAgICAgfSk7XHJcbiAgLy8gICAgICAgYmF0Y2hcclxuICAvLyAgICAgICAgIC5jb21taXQoKVxyXG4gIC8vICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gIC8vICAgICAgICAgICBzZXRPcGVuKGZhbHNlKTtcclxuICAvLyAgICAgICAgICAgbWVzc2FnZS5zdWNjZXNzKFwiWW91ciBwcm9maWxlIGhhcyBiZWVuIHN1Y2Nlc3NmdWxseSB1cGRhdGVkXCIpO1xyXG4gIC8vICAgICAgICAgfSlcclxuICAvLyAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAvLyAgICAgICAgICAgbWVzc2FnZS5lcnJvcihlcnJvci5tZXNzYWdlKTtcclxuICAvLyAgICAgICAgIH0pO1xyXG4gIC8vICAgICB9XHJcbiAgLy8gICB9XHJcbiAgLy8gfVxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9