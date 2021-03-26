webpackHotUpdate_N_E("pages/story/[id]/chapter/[chapid]",{

/***/ "./components/chapter/Comments.js":
/*!****************************************!*\
  !*** ./components/chapter/Comments.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_Report__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/Report */ "./components/common/Report.js");



var _this = undefined,
    _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\components\\chapter\\Comments.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var confirm = antd__WEBPACK_IMPORTED_MODULE_3__["Modal"].confirm;

var Comments = function Comments(_ref) {
  _s();

  var comments = _ref.comments,
      auth = _ref.auth,
      commentBody = _ref.commentBody,
      setCommentBody = _ref.setCommentBody,
      submit = _ref.submit,
      responseBody = _ref.responseBody,
      setResponseBody = _ref.setResponseBody,
      deleteComment = _ref.deleteComment;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      toggleCommentForm = _React$useState2[0],
      setToggleCommentForm = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState3, 2),
      toggleAnswerForm = _React$useState4[0],
      setToggleAnswerForm = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(""),
      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState5, 2),
      clickedForm = _React$useState6[0],
      setClickedForm = _React$useState6[1];

  var topComments = comments.filter(function (comm) {
    return !comm.answer;
  });
  var responses = comments.filter(function (comm) {
    return comm.answer;
  });
  var allComments = topComments.map(function (comm) {
    var res = [];
    responses.forEach(function (response) {
      if (response.commentAnsweredId === comm.id) {
        res.push(response);
      }
    });
    return _objectSpread(_objectSpread({}, comm), {}, {
      responses: res
    });
  });

  var commentToggle = function commentToggle(id) {
    setClickedForm(id);
    setToggleCommentForm(!toggleCommentForm);
  };

  var answerToggle = function answerToggle(id) {
    setClickedForm(id);
    setToggleAnswerForm(!toggleAnswerForm);
  };

  var deleteFunc = function deleteFunc(id) {
    confirm({
      title: "Do you want to delete this comment ?",
      content: "This content will be lost forever",
      onOk: function onOk() {
        return deleteComment(id);
      }
    });
  };

  return __jsx("section", {
    className: "comments",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 5
    }
  }, auth.user ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 11
    }
  }, "Add a comment"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: 24,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"].TextArea, {
    value: commentBody,
    onChange: function onChange(e) {
      return setCommentBody(e.target.value);
    },
    autoSize: {
      minRows: 5
    },
    showCount: true,
    maxLength: 800,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 15
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: 24,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    onClick: submit,
    type: "primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 15
    }
  }, "Comment"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 11
    }
  })) : __jsx("p", {
    style: {
      marginBottom: "20px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }, "You need to be logged in to post a comment.", " ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/auth",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 11
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }
  }, "Click here to login or create an account !"))), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }
  }, comments.length, " Comments"), allComments.map(function (comment) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Comment"], {
      key: comment.id,
      actions: [auth && auth.user && __jsx("span", {
        key: "comment-basic-reply-to",
        onClick: commentToggle.bind(null, comment.id),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 17
        }
      }, "Reply", " "), comment.userId === auth.user.uid && __jsx("span", {
        onClick: deleteComment.bind(null, comment.id),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 17
        }
      }, "Delete"), auth.user && auth.user.uid !== comment.userId && __jsx(_common_Report__WEBPACK_IMPORTED_MODULE_6__["default"], {
        type: "comment",
        data: comment,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 17
        }
      })],
      author: __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/profile/".concat(comment.userId),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 15
        }
      }, __jsx("a", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 17
        }
      }, comment.username)),
      avatar: __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/profile/".concat(comment.userId),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 15
        }
      }, __jsx("a", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 17
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {
        src: comment.userImage,
        alt: comment.username,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 19
        }
      }))),
      content: __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 22
        }
      }, comment.content),
      datetime: __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], {
        title: comment.createdAt && typeof comment.createdAt === "object" ? moment__WEBPACK_IMPORTED_MODULE_5___default.a.unix(comment.createdAt.seconds).format("YYYY-MM-DD HH:mm:ss") : moment__WEBPACK_IMPORTED_MODULE_5___default()(comment.createdAt).format("YYYY-MM-DD HH:mm:ss"),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 15
        }
      }, __jsx("span", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 17
        }
      }, comment.createdAt && typeof comment.createdAt === "object" ? moment__WEBPACK_IMPORTED_MODULE_5___default.a.unix(comment.createdAt.seconds).fromNow() : moment__WEBPACK_IMPORTED_MODULE_5___default()(comment.createdAt).fromNow())),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 11
      }
    }, comment.responses.map(function (c) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Comment"], {
        key: c.id,
        actions: [auth && auth.user && __jsx("span", {
          key: "comment-basic-reply-to",
          onClick: answerToggle.bind(null, c.id),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 155,
            columnNumber: 23
          }
        }, "Reply", " "), comment.userId === auth.user.uid && __jsx("span", {
          onClick: deleteComment.bind(null, c.id),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 163,
            columnNumber: 23
          }
        }, "Delete"), auth.user && (auth.user.uid !== comment.userId)(__jsx(_common_Report__WEBPACK_IMPORTED_MODULE_6__["default"], {
          type: "comment",
          data: comment,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 169,
            columnNumber: 25
          }
        }))],
        author: __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: "/profile/".concat(c.userId),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 173,
            columnNumber: 21
          }
        }, __jsx("a", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 174,
            columnNumber: 23
          }
        }, c.username)),
        avatar: __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: "/profile/".concat(c.userId),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 178,
            columnNumber: 21
          }
        }, __jsx("a", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 179,
            columnNumber: 23
          }
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {
          src: c.userImage,
          alt: c.username,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 180,
            columnNumber: 25
          }
        }))),
        content: __jsx("p", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 184,
            columnNumber: 28
          }
        }, c.content),
        datetime: __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], {
          title: comment.createdAt && typeof c.createdAt === "object" ? moment__WEBPACK_IMPORTED_MODULE_5___default.a.unix(c.createdAt.seconds).format("YYYY-MM-DD HH:mm:ss") : moment__WEBPACK_IMPORTED_MODULE_5___default()(c.createdAt).format("YYYY-MM-DD HH:mm:ss"),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 186,
            columnNumber: 21
          }
        }, __jsx("span", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 195,
            columnNumber: 23
          }
        }, comment.createdAt && typeof c.createdAt === "object" ? moment__WEBPACK_IMPORTED_MODULE_5___default.a.unix(c.createdAt.seconds).fromNow() : moment__WEBPACK_IMPORTED_MODULE_5___default()(c.createdAt).fromNow())),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 17
        }
      }), clickedForm === c.id && toggleAnswerForm && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 21
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        md: 24,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206,
          columnNumber: 23
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"].TextArea, {
        value: responseBody,
        onChange: function onChange(e) {
          return setResponseBody(e.target.value);
        },
        autoSize: {
          minRows: 5
        },
        showCount: true,
        maxLength: 800,
        placeholder: "@".concat(c.username),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207,
          columnNumber: 25
        }
      })), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        md: 24,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216,
          columnNumber: 23
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        onClick: submit,
        type: "primary",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 25
        }
      }, "Comment"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222,
          columnNumber: 21
        }
      })));
    })), clickedForm === comment.id && toggleCommentForm ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 231,
        columnNumber: 15
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      md: 24,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232,
        columnNumber: 17
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"].TextArea, {
      value: responseBody,
      onChange: function onChange(e) {
        return setResponseBody(e.target.value);
      },
      autoSize: {
        minRows: 5
      },
      showCount: true,
      maxLength: 800,
      placeholder: "@".concat(comment.username),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 19
      }
    })), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      md: 24,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 17
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      onClick: submit,
      type: "primary",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243,
        columnNumber: 19
      }
    }, "Comment"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 248,
        columnNumber: 15
      }
    })) : null);
  }));
};

_s(Comments, "kkZarMmi3pYYkth2gicuMeel31Y=");

_c = Comments;
/* harmony default export */ __webpack_exports__["default"] = (Comments);

var _c;

$RefreshReg$(_c, "Comments");

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

/***/ }),

/***/ "./redux/actions/storiesActions.js":
/*!*****************************************!*\
  !*** ./redux/actions/storiesActions.js ***!
  \*****************************************/
/*! exports provided: getStory, addStory, editStory, getUserStories, getFavoriteStories, isStoryFavorite, addStoryToFavorite, removeStoryFromFavorite, getStoryCharacters, addChapter, editChapter, deleteChapter, getChapter, getChapters, addLocation, editLocation, getLocation, getUserLocations, getStoryLocations, getComments, submitComment, deleteComment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStory", function() { return getStory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addStory", function() { return addStory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editStory", function() { return editStory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserStories", function() { return getUserStories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFavoriteStories", function() { return getFavoriteStories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isStoryFavorite", function() { return isStoryFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addStoryToFavorite", function() { return addStoryToFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeStoryFromFavorite", function() { return removeStoryFromFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStoryCharacters", function() { return getStoryCharacters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addChapter", function() { return addChapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editChapter", function() { return editChapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteChapter", function() { return deleteChapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChapter", function() { return getChapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChapters", function() { return getChapters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addLocation", function() { return addLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editLocation", function() { return editLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocation", function() { return getLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserLocations", function() { return getUserLocations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStoryLocations", function() { return getStoryLocations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getComments", function() { return getComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submitComment", function() { return submitComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteComment", function() { return deleteComment; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/constants */ "./utils/constants.js");
/* harmony import */ var _fbConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fbConfig */ "./redux/fbConfig.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.esm.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





 // STORIES

var getStory = function getStory(id) {
  return function (dispatch) {
    _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("stories").doc(id).get().then(function (doc) {
      if (doc.exists) {
        var main = doc.data().mainCharacters;
        var secondary = doc.data().secondaryCharacters;
        var mainArr = [];
        var secondaryArr = [];
        var mainQuery = main.map(function (c) {
          return _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("characters").doc(c).get();
        });
        var secondaryQuery = secondary.map(function (c) {
          return _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("characters").doc(c.id).get();
        });
        var mainRes = Promise.all(mainQuery);
        var secondaryRes = Promise.all(secondaryQuery);
        Promise.all([mainRes, secondaryRes]).then(function (result) {
          result[0].forEach(function (docu) {
            mainArr = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(mainArr), [_objectSpread(_objectSpread({}, docu.data()), {}, {
              id: docu.id
            })]);
          });
          result[1].forEach(function (docu) {
            secondaryArr = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(secondaryArr), [_objectSpread(_objectSpread({}, docu.data()), {}, {
              id: docu.id
            })]);
          });
          dispatch({
            type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].GET_STORY,
            storyExists: true,
            payload: _objectSpread(_objectSpread({}, doc.data()), {}, {
              id: doc.id,
              secondaryCharacters: secondaryArr,
              mainCharacters: mainArr,
              mainArr: doc.data().mainCharacters,
              secondaryArr: doc.data().secondaryCharacters
            })
          });
        });
      } else {
        dispatch({
          type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].DISPATCH_ERROR,
          storyExists: false
        });
      }
    })["catch"](function (err) {
      return console.log(err);
    });
  };
};
var addStory = function addStory(data) {
  return function (dispatch) {
    dispatch({
      type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].ADD_STORY,
      payload: {
        loading: true
      }
    });
    var imageName = data.title.toLowerCase().split(" ").join("_");

    if (typeof data.banner === "object") {
      _fbConfig__WEBPACK_IMPORTED_MODULE_3__["storage"].ref("".concat(_fbConfig__WEBPACK_IMPORTED_MODULE_3__["auth"].currentUser.uid, "/").concat(imageName)).put(data.banner).then(function () {
        return _fbConfig__WEBPACK_IMPORTED_MODULE_3__["storage"].ref(_fbConfig__WEBPACK_IMPORTED_MODULE_3__["auth"].currentUser.uid).child(imageName).getDownloadURL();
      }).then(function (url) {
        return _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("stories").add(_objectSpread(_objectSpread({}, data), {}, {
          authorId: _fbConfig__WEBPACK_IMPORTED_MODULE_3__["auth"].currentUser.uid,
          authorName: data.authorName,
          oneShot: false,
          banner: url,
          createdAt: firebase_app__WEBPACK_IMPORTED_MODULE_4__["default"].firestore.FieldValue.serverTimestamp(),
          likesCount: 0,
          chaptersCount: 0,
          secondaryCharacters: [],
          featured: false,
          note: 0
        }));
      }).then(function (res) {
        antd__WEBPACK_IMPORTED_MODULE_5__["message"].success("Story added successfully");
        setTimeout(function () {
          next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push("/story/".concat(res.id));
          dispatch({
            type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].ADD_STORY,
            payload: {
              message: "Story added successfully",
              storyId: res.id,
              loading: false
            }
          });
        }, 1000);
      })["catch"](function (err) {
        antd__WEBPACK_IMPORTED_MODULE_5__["message"].error(err.message);
      });
    } else {
      _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("stories").add(_objectSpread(_objectSpread({}, data), {}, {
        authorId: _fbConfig__WEBPACK_IMPORTED_MODULE_3__["auth"].currentUser.uid,
        authorName: data.authorName,
        oneShot: false,
        createdAt: firebase_app__WEBPACK_IMPORTED_MODULE_4__["default"].firestore.FieldValue.serverTimestamp(),
        likesCount: 0,
        chaptersCount: 0,
        featured: false,
        secondaryCharacters: [],
        note: 0
      })).then(function (res) {
        antd__WEBPACK_IMPORTED_MODULE_5__["message"].success("Story added successfully");
        setTimeout(function () {
          next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push("/story/".concat(res.id));
          dispatch({
            type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].ADD_STORY,
            payload: {
              message: "Story added successfully",
              storyId: res.id,
              loading: false
            }
          });
        }, 1000);
      })["catch"](function (err) {
        antd__WEBPACK_IMPORTED_MODULE_5__["message"].error(err.message);
      });
    }
  };
};
var editStory = function editStory(data, storyId) {
  return function (dispatch) {
    dispatch({
      type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].EDIT_STORY,
      payload: {
        loadingStory: true
      }
    });
    var imageName = data.title.toLowerCase().split(" ").join("_");

    if (typeof data.banner === "object") {
      _fbConfig__WEBPACK_IMPORTED_MODULE_3__["storage"].ref("".concat(_fbConfig__WEBPACK_IMPORTED_MODULE_3__["auth"].currentUser.uid, "/").concat(imageName)).put(data.banner).then(function () {
        return _fbConfig__WEBPACK_IMPORTED_MODULE_3__["storage"].ref(_fbConfig__WEBPACK_IMPORTED_MODULE_3__["auth"].currentUser.uid).child(imageName).getDownloadURL();
      }).then(function (url) {
        return _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("stories").doc(storyId).update(_objectSpread(_objectSpread({}, data), {}, {
          banner: url
        }));
      }).then(function () {
        _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("locations").where("storyId", "==", storyId).get().then(function (docs) {
          var locationQuery = [];
          docs.forEach(function (doc) {
            locationQuery = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(locationQuery), [_fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("locations").doc(doc.id).update({
              storyTitle: data.title
            })]);
          });
          Promise.all(locationQuery).then(function () {
            antd__WEBPACK_IMPORTED_MODULE_5__["message"].success("Story added successfully");
            dispatch({
              type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].EDIT_STORY,
              payload: {
                message: "Story edited successfully"
              }
            });
          });
        });
      })["catch"](function (err) {
        antd__WEBPACK_IMPORTED_MODULE_5__["message"].error(err.message);
      });
    } else {
      _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("stories").doc(storyId).update(_objectSpread({}, data)).then(function () {
        _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("locations").where("storyId", "==", storyId).get().then(function (docs) {
          var locationQuery = [];
          docs.forEach(function (doc) {
            locationQuery = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(locationQuery), [_fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("locations").doc(doc.id).update({
              storyTitle: data.title
            })]);
          });
          Promise.all(locationQuery).then(function () {
            antd__WEBPACK_IMPORTED_MODULE_5__["message"].success("Story added successfully");
            dispatch({
              type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].EDIT_STORY,
              payload: {
                message: "Story edited successfully"
              }
            });
          });
        });
      })["catch"](function (err) {
        antd__WEBPACK_IMPORTED_MODULE_5__["message"].error(err.message);
      });
    }
  };
};
var getUserStories = function getUserStories() {
  return function (dispatch) {
    _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("stories").where("authorId", "==", _fbConfig__WEBPACK_IMPORTED_MODULE_3__["auth"].currentUser.uid).get().then(function (docs) {
      var items = [];
      docs.forEach(function (doc) {
        items = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(items), [_objectSpread({
          id: doc.id
        }, doc.data())]);
      });
      return items;
    }).then(function (items) {
      dispatch({
        type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].GET_USER_STORIES,
        payload: items
      });
    });
  };
};
var getFavoriteStories = function getFavoriteStories() {
  return function (dispatch) {
    _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("storiesLikes").where("senderId", "==", _fbConfig__WEBPACK_IMPORTED_MODULE_3__["auth"].currentUser.uid).get().then(function (docs) {
      var favArr = [];
      docs.forEach(function (doc) {
        favArr = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(favArr), [doc.data().storyId]);
      });
      return favArr;
    }).then(function (users) {
      var result = users.map(function (user) {
        return _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("stories").doc(user).get();
      });
      Promise.all(result).then(function (res) {
        var favUsers = [];
        res.forEach(function (doc) {
          return favUsers = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(favUsers), [_objectSpread({
            id: doc.id
          }, doc.data())]);
        });
        dispatch({
          type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].GET_FAVORITE_STORIES,
          payload: favUsers
        });
      });
    });
  };
};
var isStoryFavorite = function isStoryFavorite(storyId) {
  return function (dispatch) {
    if (_fbConfig__WEBPACK_IMPORTED_MODULE_3__["auth"].currentUser) {
      _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("storiesLikes").where("senderId", "==", _fbConfig__WEBPACK_IMPORTED_MODULE_3__["auth"].currentUser.uid).where("storyId", "==", storyId).onSnapshot(function (snapshot) {
        var answer = snapshot.docs[0] ? true : false;
        return dispatch({
          type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].IS_STORY_FAVORITE,
          payload: answer,
          loadingFav: false
        });
      });
    }
  };
};
var addStoryToFavorite = function addStoryToFavorite(id, username, storyTitle) {
  return function (dispatch) {
    // if (isFavorite) return message.warning("You've already liked this story");
    if (!_fbConfig__WEBPACK_IMPORTED_MODULE_3__["auth"].currentUser) return antd__WEBPACK_IMPORTED_MODULE_5__["message"].error("You need to be logged in to like a story");
    if (!_fbConfig__WEBPACK_IMPORTED_MODULE_3__["auth"].currentUser.emailVerified) return antd__WEBPACK_IMPORTED_MODULE_5__["message"].error("You need to verify your email first");
    _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("storiesLikes").add({
      sender: username,
      senderId: _fbConfig__WEBPACK_IMPORTED_MODULE_3__["auth"].currentUser.uid,
      storyId: id,
      createdAt: firebase_app__WEBPACK_IMPORTED_MODULE_4__["default"].firestore.FieldValue.serverTimestamp()
    }).then(function () {
      return antd__WEBPACK_IMPORTED_MODULE_5__["message"].success("".concat(storyTitle, " added to your favorites"));
    })["catch"](function (err) {
      return antd__WEBPACK_IMPORTED_MODULE_5__["message"].error("There has been a problem");
    });
  };
};
var removeStoryFromFavorite = function removeStoryFromFavorite(id, storyTitle) {
  return function (dispatch) {
    _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("storiesLikes").where("storyId", "==", id).where("senderId", "==", _fbConfig__WEBPACK_IMPORTED_MODULE_3__["auth"].currentUser.uid).get().then(function (data) {
      return _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("storiesLikes").doc(data.docs[0].id)["delete"]();
    }).then(function () {
      return antd__WEBPACK_IMPORTED_MODULE_5__["message"].success("".concat(storyTitle, " removed from your favorites"));
    })["catch"](function (err) {
      return antd__WEBPACK_IMPORTED_MODULE_5__["message"].error("There has been a problem");
    });
  };
};
var getStoryCharacters = function getStoryCharacters() {
  return function (dispatch) {};
}; // CHAPTERs

var addChapter = function addChapter(data, secondaryCharacters) {
  return function (dispatch) {
    dispatch({
      type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].ADD_CHAPTER,
      payload: {
        loading: true
      }
    });
    _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("chapters").add(_objectSpread(_objectSpread({}, data), {}, {
      authorId: _fbConfig__WEBPACK_IMPORTED_MODULE_3__["auth"].currentUser.uid,
      commentsCount: 0,
      note: 0,
      voters: [],
      votesCount: 0,
      createdAt: firebase_app__WEBPACK_IMPORTED_MODULE_4__["default"].firestore.FieldValue.serverTimestamp()
    })).then(function (res) {
      _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("stories").doc(data.storyId).get().then(function (doc) {
        _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("stories").doc(data.storyId).update({
          secondaryCharacters: secondaryCharacters
        }).then(function () {
          dispatch({
            type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].ADD_CHAPTER,
            payload: {
              message: "Chapter added successfully",
              chapId: res.id,
              loading: false
            }
          });
        });
      });
    }); // .then((res) => {
    //   dispatch({
    //     type: types.ADD_CHAPTER,
    //     payload: {
    //       message: "Chapter added successfully",
    //       chapId: res.id,
    //     },
    //   });
    // })
    // .catch((err) =>
    //   dispatch({
    //     type: types.ADD_CHAPTER,
    //     payload: { message: err.message, chapId: "" },
    //   })
    // );
  };
};
var editChapter = function editChapter(data, storyId, chapid, secondaryCharacters) {
  return function (dispatch) {
    dispatch({
      type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].EDIT_CHAPTER,
      payload: {
        loading: true
      }
    });
    _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("chapters").doc(chapid).update(_objectSpread({}, data)).then(function () {
      _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("stories").doc(storyId).get().then(function (doc) {
        _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("stories").doc(storyId).update({
          secondaryCharacters: secondaryCharacters
        }).then(function () {
          dispatch({
            type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].EDIT_CHAPTER,
            payload: {
              message: "Chapter edited successfully",
              loading: false
            }
          });
        });
      });
    });
  };
};
var deleteChapter = function deleteChapter(id, storyId) {
  return function (dispatch) {
    dispatch({
      type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].DELETE_CHAPTER,
      payload: {
        loadingChapter: true
      }
    });
    _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("chapters").doc(id).get().then(function (doc) {
      var charactersFromChapter = doc.data().characters;
      _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("stories").doc(storyId).get().then(function (story) {
        var charactersFromStory = story.data().secondaryCharacters;
        var newArr = charactersFromStory.map(function (c) {
          if (charactersFromChapter.includes(c.id)) {
            return _objectSpread(_objectSpread({}, c), {}, {
              times: c.times - 1
            });
          } else {
            return c;
          }
        });
        newArr = newArr.filter(function (c) {
          return c.times > 0;
        });
        _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("stories").doc(storyId).update({
          secondaryCharacters: newArr
        }).then(function () {
          _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("chapters").doc(id)["delete"]().then(function () {
            dispatch({
              type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].DELETE_CHAPTER,
              payload: {
                message: "Chapter deleted successfully",
                loadingChapter: false
              }
            });
          });
        });
      });
    });
  };
};
var getChapter = function getChapter(storyId, id, type) {
  return function (dispatch) {
    _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("stories").doc(storyId).get().then(function (doc) {
      if (doc.exists) {
        _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("chapters").doc(id).get().then(function (chap) {
          if (chap.exists) {
            if (type === "show") {
              var characters = [];
              var locations = [];
              var charaQuery = [];
              var locQuery = [];
              var charactersInChaper = chap.data().characters;
              var locationsInChaper = chap.data().locations;
              charactersInChaper.forEach(function (_char) {
                charaQuery.push(_fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("characters").doc(_char).get());
              });
              locationsInChaper.forEach(function (loc) {
                locQuery.push(_fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("locations").doc(loc).get());
              });
              charaQuery = Promise.all(charaQuery);
              locQuery = Promise.all(locQuery);
              Promise.all([charaQuery, locQuery]).then(function (res) {
                res[0].forEach(function (c) {
                  characters.push(_objectSpread(_objectSpread({}, c.data()), {}, {
                    id: c.id
                  }));
                });
                res[1].forEach(function (l) {
                  locations.push(_objectSpread(_objectSpread({}, l.data()), {}, {
                    id: l.id
                  }));
                });
                dispatch({
                  type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].GET_CHAPTER,
                  payload: {
                    chapter: _objectSpread(_objectSpread({}, chap.data()), {}, {
                      id: chap.id,
                      locations: locations,
                      characters: characters,
                      "public": doc.data()["public"]
                    }),
                    chapterExists: true
                  }
                });
              });
            } else {
              dispatch({
                type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].GET_CHAPTER,
                payload: {
                  chapter: _objectSpread(_objectSpread({}, chap.data()), {}, {
                    id: chap.id,
                    "public": doc.data()["public"]
                  }),
                  chapterExists: true
                }
              });
            }
          } else {
            dispatch({
              type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].GET_CHAPTER,
              payload: {
                chapterExists: false
              }
            });
          }
        });
      } else {
        dispatch({
          type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].GET_CHAPTER,
          payload: {
            chapterExists: false
          }
        });
      }
    });
  };
};
var getChapters = function getChapters(id) {
  return function (dispatch) {
    _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("chapters").where("storyId", "==", id).orderBy("number", "asc").onSnapshot(function (docs) {
      var arr = [];
      docs.forEach(function (doc) {
        arr.push({
          authorId: doc.data().authorId,
          id: doc.id,
          createdAt: doc.data().createdAt,
          number: doc.data().number,
          title: doc.data().title,
          commentsCount: doc.data().commentsCount
        });
      });
      dispatch({
        type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].GET_CHAPTERS,
        payload: arr
      });
    });
  };
}; // LOCATIONS

var addLocation = function addLocation(data) {
  return function (dispatch) {
    console.log("coucou");
    dispatch({
      type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].ADD_LOCATION,
      payload: {
        loadingLoc: true
      }
    });
    var imageName = data.name.toLowerCase().split(" ").join("_");

    if (typeof data.image === "object") {
      _fbConfig__WEBPACK_IMPORTED_MODULE_3__["storage"].ref("".concat(_fbConfig__WEBPACK_IMPORTED_MODULE_3__["auth"].currentUser.uid, "/").concat(imageName)).put(data.image).then(function () {
        return _fbConfig__WEBPACK_IMPORTED_MODULE_3__["storage"].ref(_fbConfig__WEBPACK_IMPORTED_MODULE_3__["auth"].currentUser.uid).child(imageName).getDownloadURL();
      }).then(function (url) {
        return _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("locations").add(_objectSpread(_objectSpread({}, data), {}, {
          image: url,
          createdAt: firebase_app__WEBPACK_IMPORTED_MODULE_4__["default"].firestore.FieldValue.serverTimestamp()
        }));
      }).then(function (res) {
        return dispatch({
          type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].ADD_LOCATION,
          payload: {
            message: "Location added successfully",
            locId: res.id,
            loadingLoc: false
          }
        });
      })["catch"](function (err) {
        antd__WEBPACK_IMPORTED_MODULE_5__["message"].error(err.message);
      });
    } else {
      _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("locations").add(_objectSpread(_objectSpread({}, data), {}, {
        createdAt: firebase_app__WEBPACK_IMPORTED_MODULE_4__["default"].firestore.FieldValue.serverTimestamp()
      })).then(function (res) {
        return dispatch({
          type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].ADD_LOCATION,
          payload: {
            message: "Location added successfully",
            locId: res.id,
            loadingLoc: false
          }
        });
      })["catch"](function (err) {
        antd__WEBPACK_IMPORTED_MODULE_5__["message"].error(err.message);
      });
    }
  };
};
var editLocation = function editLocation(data) {
  return function (dispatch) {};
};
var getLocation = function getLocation(id) {
  return function (dispatch) {
    _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("locations").doc(id).get().then(function (doc) {
      if (doc.exists) {
        dispatch({
          type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].GET_LOCATION,
          payload: _objectSpread(_objectSpread({}, doc.data()), {}, {
            id: doc.id
          }),
          locationExists: true
        });
      } else {
        dispatch({
          type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].GET_LOCATION,
          locationExists: false
        });
      }
    });
  };
};
var getUserLocations = function getUserLocations() {
  return function (dispatch) {
    _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("locations").where("authorId", "==", _fbConfig__WEBPACK_IMPORTED_MODULE_3__["auth"].currentUser.uid).get().then(function (docs) {
      var locations = [];
      docs.forEach(function (doc) {
        locations = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(locations), [_objectSpread({
          id: doc.id
        }, doc.data())]);
      });
      dispatch({
        type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].GET_USER_LOCATIONS,
        payload: locations
      });
    });
  };
};
var getStoryLocations = function getStoryLocations(storyId) {
  return function (dispatch) {
    _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("locations").where("storyId", "==", storyId).get().then(function (docs) {
      var locations = docs.docs.map(function (doc) {
        return _objectSpread(_objectSpread({}, doc.data()), {}, {
          id: doc.id
        });
      });
      dispatch({
        type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].GET_STORY_LOCATIONS,
        payload: locations
      });
    });
  };
}; // COMMENTS

var getComments = function getComments(id) {
  return function (dispatch) {
    _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("comments").where("chapterId", "==", id).orderBy("createdAt", "desc").onSnapshot(function (snap) {
      var comments = snap.docs.map(function (comment) {
        return _objectSpread(_objectSpread({}, comment.data()), {}, {
          id: comment.id
        });
      });
      var queries = [];
      comments.forEach(function (comm) {
        queries.push(_fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("users").doc(comm.userId).get());
      });
      Promise.all(queries).then(function (res) {
        comments = comments.map(function (comm) {
          return _objectSpread(_objectSpread({}, comm), {}, {
            userImage: res.find(function (d) {
              return d.id === comm.userId;
            }).data().image
          });
        });
        dispatch({
          type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__["types"].GET_COMMENTS,
          payload: {
            loadingComments: false,
            comments: comments
          }
        });
      });
    });
  };
};
var submitComment = function submitComment(info) {
  return function (dispatch) {
    if (!_fbConfig__WEBPACK_IMPORTED_MODULE_3__["auth"].currentUser.emailVerified) return antd__WEBPACK_IMPORTED_MODULE_5__["message"].error("You need to verify your email first");
    if (!info.content) return antd__WEBPACK_IMPORTED_MODULE_5__["message"].error("Content must not be empty");
    _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("comments").add(_objectSpread(_objectSpread({}, info), {}, {
      createdAt: firebase_app__WEBPACK_IMPORTED_MODULE_4__["default"].firestore.FieldValue.serverTimestamp()
    })).then(function () {
      return antd__WEBPACK_IMPORTED_MODULE_5__["message"].success("Comment posted successfully");
    })["catch"](function (err) {
      return antd__WEBPACK_IMPORTED_MODULE_5__["message"].error(err.message);
    });
  };
};
var deleteComment = function deleteComment(id, chapid) {
  return function (dispatch) {
    _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("comments").doc(id).get().then(function () {
      _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("chapters").doc(chapid).get().then(function (chap) {
        _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("chapters").doc(chapid).update({
          commentsCount: chap.data().commentsCount - 1
        }).then(function () {
          _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("comments").doc(id)["delete"]();
        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jaGFwdGVyL0NvbW1lbnRzLmpzIiwid2VicGFjazovL19OX0UvLi9yZWR1eC9hY3Rpb25zL3N0b3JpZXNBY3Rpb25zLmpzIl0sIm5hbWVzIjpbImNvbmZpcm0iLCJNb2RhbCIsIkNvbW1lbnRzIiwiY29tbWVudHMiLCJhdXRoIiwiY29tbWVudEJvZHkiLCJzZXRDb21tZW50Qm9keSIsInN1Ym1pdCIsInJlc3BvbnNlQm9keSIsInNldFJlc3BvbnNlQm9keSIsImRlbGV0ZUNvbW1lbnQiLCJSZWFjdCIsInVzZVN0YXRlIiwidG9nZ2xlQ29tbWVudEZvcm0iLCJzZXRUb2dnbGVDb21tZW50Rm9ybSIsInRvZ2dsZUFuc3dlckZvcm0iLCJzZXRUb2dnbGVBbnN3ZXJGb3JtIiwiY2xpY2tlZEZvcm0iLCJzZXRDbGlja2VkRm9ybSIsInRvcENvbW1lbnRzIiwiZmlsdGVyIiwiY29tbSIsImFuc3dlciIsInJlc3BvbnNlcyIsImFsbENvbW1lbnRzIiwibWFwIiwicmVzIiwiZm9yRWFjaCIsInJlc3BvbnNlIiwiY29tbWVudEFuc3dlcmVkSWQiLCJpZCIsInB1c2giLCJjb21tZW50VG9nZ2xlIiwiYW5zd2VyVG9nZ2xlIiwiZGVsZXRlRnVuYyIsInRpdGxlIiwiY29udGVudCIsIm9uT2siLCJ1c2VyIiwiZSIsInRhcmdldCIsInZhbHVlIiwibWluUm93cyIsIm1hcmdpbkJvdHRvbSIsImxlbmd0aCIsImNvbW1lbnQiLCJiaW5kIiwidXNlcklkIiwidWlkIiwidXNlcm5hbWUiLCJ1c2VySW1hZ2UiLCJjcmVhdGVkQXQiLCJtb21lbnQiLCJ1bml4Iiwic2Vjb25kcyIsImZvcm1hdCIsImZyb21Ob3ciLCJjIiwiZ2V0U3RvcnkiLCJkaXNwYXRjaCIsImRiIiwiY29sbGVjdGlvbiIsImRvYyIsImdldCIsInRoZW4iLCJleGlzdHMiLCJtYWluIiwiZGF0YSIsIm1haW5DaGFyYWN0ZXJzIiwic2Vjb25kYXJ5Iiwic2Vjb25kYXJ5Q2hhcmFjdGVycyIsIm1haW5BcnIiLCJzZWNvbmRhcnlBcnIiLCJtYWluUXVlcnkiLCJzZWNvbmRhcnlRdWVyeSIsIm1haW5SZXMiLCJQcm9taXNlIiwiYWxsIiwic2Vjb25kYXJ5UmVzIiwicmVzdWx0IiwiZG9jdSIsInR5cGUiLCJ0eXBlcyIsIkdFVF9TVE9SWSIsInN0b3J5RXhpc3RzIiwicGF5bG9hZCIsIkRJU1BBVENIX0VSUk9SIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImFkZFN0b3J5IiwiQUREX1NUT1JZIiwibG9hZGluZyIsImltYWdlTmFtZSIsInRvTG93ZXJDYXNlIiwic3BsaXQiLCJqb2luIiwiYmFubmVyIiwic3RvcmFnZSIsInJlZiIsImN1cnJlbnRVc2VyIiwicHV0IiwiY2hpbGQiLCJnZXREb3dubG9hZFVSTCIsInVybCIsImFkZCIsImF1dGhvcklkIiwiYXV0aG9yTmFtZSIsIm9uZVNob3QiLCJmaXJlYmFzZSIsImZpcmVzdG9yZSIsIkZpZWxkVmFsdWUiLCJzZXJ2ZXJUaW1lc3RhbXAiLCJsaWtlc0NvdW50IiwiY2hhcHRlcnNDb3VudCIsImZlYXR1cmVkIiwibm90ZSIsIm1lc3NhZ2UiLCJzdWNjZXNzIiwic2V0VGltZW91dCIsIlJvdXRlciIsInN0b3J5SWQiLCJlcnJvciIsImVkaXRTdG9yeSIsIkVESVRfU1RPUlkiLCJsb2FkaW5nU3RvcnkiLCJ1cGRhdGUiLCJ3aGVyZSIsImRvY3MiLCJsb2NhdGlvblF1ZXJ5Iiwic3RvcnlUaXRsZSIsImdldFVzZXJTdG9yaWVzIiwiaXRlbXMiLCJHRVRfVVNFUl9TVE9SSUVTIiwiZ2V0RmF2b3JpdGVTdG9yaWVzIiwiZmF2QXJyIiwidXNlcnMiLCJmYXZVc2VycyIsIkdFVF9GQVZPUklURV9TVE9SSUVTIiwiaXNTdG9yeUZhdm9yaXRlIiwib25TbmFwc2hvdCIsInNuYXBzaG90IiwiSVNfU1RPUllfRkFWT1JJVEUiLCJsb2FkaW5nRmF2IiwiYWRkU3RvcnlUb0Zhdm9yaXRlIiwiZW1haWxWZXJpZmllZCIsInNlbmRlciIsInNlbmRlcklkIiwicmVtb3ZlU3RvcnlGcm9tRmF2b3JpdGUiLCJnZXRTdG9yeUNoYXJhY3RlcnMiLCJhZGRDaGFwdGVyIiwiQUREX0NIQVBURVIiLCJjb21tZW50c0NvdW50Iiwidm90ZXJzIiwidm90ZXNDb3VudCIsImNoYXBJZCIsImVkaXRDaGFwdGVyIiwiY2hhcGlkIiwiRURJVF9DSEFQVEVSIiwiZGVsZXRlQ2hhcHRlciIsIkRFTEVURV9DSEFQVEVSIiwibG9hZGluZ0NoYXB0ZXIiLCJjaGFyYWN0ZXJzRnJvbUNoYXB0ZXIiLCJjaGFyYWN0ZXJzIiwic3RvcnkiLCJjaGFyYWN0ZXJzRnJvbVN0b3J5IiwibmV3QXJyIiwiaW5jbHVkZXMiLCJ0aW1lcyIsImdldENoYXB0ZXIiLCJjaGFwIiwibG9jYXRpb25zIiwiY2hhcmFRdWVyeSIsImxvY1F1ZXJ5IiwiY2hhcmFjdGVyc0luQ2hhcGVyIiwibG9jYXRpb25zSW5DaGFwZXIiLCJjaGFyIiwibG9jIiwibCIsIkdFVF9DSEFQVEVSIiwiY2hhcHRlciIsImNoYXB0ZXJFeGlzdHMiLCJnZXRDaGFwdGVycyIsIm9yZGVyQnkiLCJhcnIiLCJudW1iZXIiLCJHRVRfQ0hBUFRFUlMiLCJhZGRMb2NhdGlvbiIsIkFERF9MT0NBVElPTiIsImxvYWRpbmdMb2MiLCJuYW1lIiwiaW1hZ2UiLCJsb2NJZCIsImVkaXRMb2NhdGlvbiIsImdldExvY2F0aW9uIiwiR0VUX0xPQ0FUSU9OIiwibG9jYXRpb25FeGlzdHMiLCJnZXRVc2VyTG9jYXRpb25zIiwiR0VUX1VTRVJfTE9DQVRJT05TIiwiZ2V0U3RvcnlMb2NhdGlvbnMiLCJHRVRfU1RPUllfTE9DQVRJT05TIiwiZ2V0Q29tbWVudHMiLCJzbmFwIiwicXVlcmllcyIsImZpbmQiLCJkIiwiR0VUX0NPTU1FTlRTIiwibG9hZGluZ0NvbW1lbnRzIiwic3VibWl0Q29tbWVudCIsImluZm8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFXQTtBQUNBO0FBQ0E7SUFFUUEs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LEdBRkgsR0FHR0MsSUFISCxDQUdRLFlBQU07QUFDVkosa0RBQUUsQ0FBQ0MsVUFBSCxDQUFjLFVBQWQsRUFDR0MsR0FESCxDQUNPK0YsTUFEUCxFQUVHOUYsR0FGSCxHQUdHQyxJQUhILENBR1EsVUFBQzBHLElBQUQsRUFBVTtBQUNkOUcsb0RBQUUsQ0FBQ0MsVUFBSCxDQUFjLFVBQWQsRUFDR0MsR0FESCxDQUNPK0YsTUFEUCxFQUVHL0IsTUFGSCxDQUVVO0FBQUUwQix1QkFBYSxFQUFFa0IsSUFBSSxDQUFDdkcsSUFBTCxHQUFZcUYsYUFBWixHQUE0QjtBQUE3QyxTQUZWLEVBR0d4RixJQUhILENBR1EsWUFBTTtBQUNWSixzREFBRSxDQUFDQyxVQUFILENBQWMsVUFBZCxFQUEwQkMsR0FBMUIsQ0FBOEJoQyxFQUE5QjtBQUNELFNBTEg7QUFNRCxPQVZIO0FBV0QsS0FmSDtBQWdCRCxHQWpCNEI7QUFBQSxDQUF0QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zdG9yeS9baWRdL2NoYXB0ZXIvW2NoYXBpZF0uOTYyMjU0NDYzMzM3ODU1ZDc3YzIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tbWVudCxcclxuICBUb29sdGlwLFxyXG4gIEF2YXRhcixcclxuICBJbnB1dCxcclxuICBEaXZpZGVyLFxyXG4gIEJ1dHRvbixcclxuICBSb3csXHJcbiAgQ29sLFxyXG4gIE1vZGFsLFxyXG59IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XHJcbmltcG9ydCBSZXBvcnQgZnJvbSBcIi4uL2NvbW1vbi9SZXBvcnRcIjtcclxuXHJcbmNvbnN0IHsgY29uZmlybSB9ID0gTW9kYWw7XHJcblxyXG5jb25zdCBDb21tZW50cyA9ICh7XHJcbiAgY29tbWVudHMsXHJcbiAgYXV0aCxcclxuICBjb21tZW50Qm9keSxcclxuICBzZXRDb21tZW50Qm9keSxcclxuICBzdWJtaXQsXHJcbiAgcmVzcG9uc2VCb2R5LFxyXG4gIHNldFJlc3BvbnNlQm9keSxcclxuICBkZWxldGVDb21tZW50LFxyXG59KSA9PiB7XHJcbiAgY29uc3QgW3RvZ2dsZUNvbW1lbnRGb3JtLCBzZXRUb2dnbGVDb21tZW50Rm9ybV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3RvZ2dsZUFuc3dlckZvcm0sIHNldFRvZ2dsZUFuc3dlckZvcm1dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtjbGlja2VkRm9ybSwgc2V0Q2xpY2tlZEZvcm1dID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IHRvcENvbW1lbnRzID0gY29tbWVudHMuZmlsdGVyKChjb21tKSA9PiAhY29tbS5hbnN3ZXIpO1xyXG4gIGNvbnN0IHJlc3BvbnNlcyA9IGNvbW1lbnRzLmZpbHRlcigoY29tbSkgPT4gY29tbS5hbnN3ZXIpO1xyXG4gIGNvbnN0IGFsbENvbW1lbnRzID0gdG9wQ29tbWVudHMubWFwKChjb21tKSA9PiB7XHJcbiAgICBsZXQgcmVzID0gW107XHJcbiAgICByZXNwb25zZXMuZm9yRWFjaCgocmVzcG9uc2UpID0+IHtcclxuICAgICAgaWYgKHJlc3BvbnNlLmNvbW1lbnRBbnN3ZXJlZElkID09PSBjb21tLmlkKSB7XHJcbiAgICAgICAgcmVzLnB1c2gocmVzcG9uc2UpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB7IC4uLmNvbW0sIHJlc3BvbnNlczogcmVzIH07XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGNvbW1lbnRUb2dnbGUgPSAoaWQpID0+IHtcclxuICAgIHNldENsaWNrZWRGb3JtKGlkKTtcclxuICAgIHNldFRvZ2dsZUNvbW1lbnRGb3JtKCF0b2dnbGVDb21tZW50Rm9ybSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYW5zd2VyVG9nZ2xlID0gKGlkKSA9PiB7XHJcbiAgICBzZXRDbGlja2VkRm9ybShpZCk7XHJcbiAgICBzZXRUb2dnbGVBbnN3ZXJGb3JtKCF0b2dnbGVBbnN3ZXJGb3JtKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBkZWxldGVGdW5jID0gKGlkKSA9PiB7XHJcbiAgICBjb25maXJtKHtcclxuICAgICAgdGl0bGU6IFwiRG8geW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgY29tbWVudCA/XCIsXHJcbiAgICAgIGNvbnRlbnQ6IFwiVGhpcyBjb250ZW50IHdpbGwgYmUgbG9zdCBmb3JldmVyXCIsXHJcbiAgICAgIG9uT2soKSB7XHJcbiAgICAgICAgcmV0dXJuIGRlbGV0ZUNvbW1lbnQoaWQpO1xyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbW1lbnRzXCI+XHJcbiAgICAgIHthdXRoLnVzZXIgPyAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxoMz5BZGQgYSBjb21tZW50PC9oMz5cclxuICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgIDxDb2wgbWQ9ezI0fT5cclxuICAgICAgICAgICAgICA8SW5wdXQuVGV4dEFyZWFcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtjb21tZW50Qm9keX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q29tbWVudEJvZHkoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgYXV0b1NpemU9e3sgbWluUm93czogNSB9fVxyXG4gICAgICAgICAgICAgICAgc2hvd0NvdW50PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgbWF4TGVuZ3RoPXs4MDB9XHJcbiAgICAgICAgICAgICAgPjwvSW5wdXQuVGV4dEFyZWE+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIG1kPXsyNH0+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtzdWJtaXR9IHR5cGU9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICBDb21tZW50XHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxwIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIyMHB4XCIgfX0+XHJcbiAgICAgICAgICBZb3UgbmVlZCB0byBiZSBsb2dnZWQgaW4gdG8gcG9zdCBhIGNvbW1lbnQue1wiIFwifVxyXG4gICAgICAgICAgPExpbmsgaHJlZj17XCIvYXV0aFwifT5cclxuICAgICAgICAgICAgPGE+Q2xpY2sgaGVyZSB0byBsb2dpbiBvciBjcmVhdGUgYW4gYWNjb3VudCAhPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgKX1cclxuICAgICAgPGgzPntjb21tZW50cy5sZW5ndGh9IENvbW1lbnRzPC9oMz5cclxuICAgICAge2FsbENvbW1lbnRzLm1hcCgoY29tbWVudCkgPT4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8Q29tbWVudFxyXG4gICAgICAgICAgICBrZXk9e2NvbW1lbnQuaWR9XHJcbiAgICAgICAgICAgIGFjdGlvbnM9e1tcclxuICAgICAgICAgICAgICBhdXRoICYmIGF1dGgudXNlciAmJiAoXHJcbiAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICBrZXk9XCJjb21tZW50LWJhc2ljLXJlcGx5LXRvXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17Y29tbWVudFRvZ2dsZS5iaW5kKG51bGwsIGNvbW1lbnQuaWQpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBSZXBseXtcIiBcIn1cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgIGNvbW1lbnQudXNlcklkID09PSBhdXRoLnVzZXIudWlkICYmIChcclxuICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9e2RlbGV0ZUNvbW1lbnQuYmluZChudWxsLCBjb21tZW50LmlkKX0+XHJcbiAgICAgICAgICAgICAgICAgIERlbGV0ZVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgYXV0aC51c2VyICYmIGF1dGgudXNlci51aWQgIT09IGNvbW1lbnQudXNlcklkICYmIChcclxuICAgICAgICAgICAgICAgIDxSZXBvcnQgdHlwZT1cImNvbW1lbnRcIiBkYXRhPXtjb21tZW50fSAvPlxyXG4gICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgIGF1dGhvcj17XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9wcm9maWxlLyR7Y29tbWVudC51c2VySWR9YH0+XHJcbiAgICAgICAgICAgICAgICA8YT57Y29tbWVudC51c2VybmFtZX08L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGF2YXRhcj17XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9wcm9maWxlLyR7Y29tbWVudC51c2VySWR9YH0+XHJcbiAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgPEF2YXRhciBzcmM9e2NvbW1lbnQudXNlckltYWdlfSBhbHQ9e2NvbW1lbnQudXNlcm5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnRlbnQ9ezxwPntjb21tZW50LmNvbnRlbnR9PC9wPn1cclxuICAgICAgICAgICAgZGF0ZXRpbWU9e1xyXG4gICAgICAgICAgICAgIDxUb29sdGlwXHJcbiAgICAgICAgICAgICAgICB0aXRsZT17XHJcbiAgICAgICAgICAgICAgICAgIGNvbW1lbnQuY3JlYXRlZEF0ICYmIHR5cGVvZiBjb21tZW50LmNyZWF0ZWRBdCA9PT0gXCJvYmplY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgID8gbW9tZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC51bml4KGNvbW1lbnQuY3JlYXRlZEF0LnNlY29uZHMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5mb3JtYXQoXCJZWVlZLU1NLUREIEhIOm1tOnNzXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgOiBtb21lbnQoY29tbWVudC5jcmVhdGVkQXQpLmZvcm1hdChcIllZWVktTU0tREQgSEg6bW06c3NcIilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAge2NvbW1lbnQuY3JlYXRlZEF0ICYmIHR5cGVvZiBjb21tZW50LmNyZWF0ZWRBdCA9PT0gXCJvYmplY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgID8gbW9tZW50LnVuaXgoY29tbWVudC5jcmVhdGVkQXQuc2Vjb25kcykuZnJvbU5vdygpXHJcbiAgICAgICAgICAgICAgICAgICAgOiBtb21lbnQoY29tbWVudC5jcmVhdGVkQXQpLmZyb21Ob3coKX1cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2NvbW1lbnQucmVzcG9uc2VzLm1hcCgoYykgPT4gKFxyXG4gICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8Q29tbWVudFxyXG4gICAgICAgICAgICAgICAgICBrZXk9e2MuaWR9XHJcbiAgICAgICAgICAgICAgICAgIGFjdGlvbnM9e1tcclxuICAgICAgICAgICAgICAgICAgICBhdXRoICYmIGF1dGgudXNlciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9XCJjb21tZW50LWJhc2ljLXJlcGx5LXRvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17YW5zd2VyVG9nZ2xlLmJpbmQobnVsbCwgYy5pZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlcGx5e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgY29tbWVudC51c2VySWQgPT09IGF1dGgudXNlci51aWQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17ZGVsZXRlQ29tbWVudC5iaW5kKG51bGwsIGMuaWQpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRGVsZXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICBhdXRoLnVzZXIgJiZcclxuICAgICAgICAgICAgICAgICAgICAgIChhdXRoLnVzZXIudWlkICE9PSBjb21tZW50LnVzZXJJZCkoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZXBvcnQgdHlwZT1cImNvbW1lbnRcIiBkYXRhPXtjb21tZW50fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgYXV0aG9yPXtcclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3Byb2ZpbGUvJHtjLnVzZXJJZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhPntjLnVzZXJuYW1lfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgYXZhdGFyPXtcclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3Byb2ZpbGUvJHtjLnVzZXJJZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QXZhdGFyIHNyYz17Yy51c2VySW1hZ2V9IGFsdD17Yy51c2VybmFtZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgY29udGVudD17PHA+e2MuY29udGVudH08L3A+fVxyXG4gICAgICAgICAgICAgICAgICBkYXRldGltZT17XHJcbiAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBcclxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudC5jcmVhdGVkQXQgJiYgdHlwZW9mIGMuY3JlYXRlZEF0ID09PSBcIm9iamVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBtb21lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnVuaXgoYy5jcmVhdGVkQXQuc2Vjb25kcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZvcm1hdChcIllZWVktTU0tREQgSEg6bW06c3NcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IG1vbWVudChjLmNyZWF0ZWRBdCkuZm9ybWF0KFwiWVlZWS1NTS1ERCBISDptbTpzc1wiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y29tbWVudC5jcmVhdGVkQXQgJiYgdHlwZW9mIGMuY3JlYXRlZEF0ID09PSBcIm9iamVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBtb21lbnQudW5peChjLmNyZWF0ZWRBdC5zZWNvbmRzKS5mcm9tTm93KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IG1vbWVudChjLmNyZWF0ZWRBdCkuZnJvbU5vdygpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIHtjbGlja2VkRm9ybSA9PT0gYy5pZCAmJiB0b2dnbGVBbnN3ZXJGb3JtICYmIChcclxuICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENvbCBtZD17MjR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQuVGV4dEFyZWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cmVzcG9uc2VCb2R5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UmVzcG9uc2VCb2R5KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvU2l6ZT17eyBtaW5Sb3dzOiA1IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0NvdW50PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aD17ODAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtgQCR7Yy51c2VybmFtZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+PC9JbnB1dC5UZXh0QXJlYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENvbCBtZD17MjR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3N1Ym1pdH0gdHlwZT1cInByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBDb21tZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvQ29tbWVudD5cclxuXHJcbiAgICAgICAgICB7Y2xpY2tlZEZvcm0gPT09IGNvbW1lbnQuaWQgJiYgdG9nZ2xlQ29tbWVudEZvcm0gPyAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgbWQ9ezI0fT5cclxuICAgICAgICAgICAgICAgICAgPElucHV0LlRleHRBcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Jlc3BvbnNlQm9keX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFJlc3BvbnNlQm9keShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b1NpemU9e3sgbWluUm93czogNSB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHNob3dDb3VudD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9ezgwMH1cclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17YEAke2NvbW1lbnQudXNlcm5hbWV9YH1cclxuICAgICAgICAgICAgICAgICAgPjwvSW5wdXQuVGV4dEFyZWE+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgbWQ9ezI0fT5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtzdWJtaXR9IHR5cGU9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgQ29tbWVudFxyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICkpfVxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21tZW50cztcclxuIiwiaW1wb3J0IHsgdHlwZXMgfSBmcm9tIFwiLi4vLi4vdXRpbHMvY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IGRiLCBhdXRoLCBzdG9yYWdlIH0gZnJvbSBcIi4uL2ZiQ29uZmlnXCI7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcbmltcG9ydCB7IG1lc3NhZ2UgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuLy8gU1RPUklFU1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0b3J5ID0gKGlkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKVxyXG4gICAgLmRvYyhpZClcclxuICAgIC5nZXQoKVxyXG4gICAgLnRoZW4oKGRvYykgPT4ge1xyXG4gICAgICBpZiAoZG9jLmV4aXN0cykge1xyXG4gICAgICAgIGNvbnN0IG1haW4gPSBkb2MuZGF0YSgpLm1haW5DaGFyYWN0ZXJzO1xyXG4gICAgICAgIGNvbnN0IHNlY29uZGFyeSA9IGRvYy5kYXRhKCkuc2Vjb25kYXJ5Q2hhcmFjdGVycztcclxuICAgICAgICBsZXQgbWFpbkFyciA9IFtdO1xyXG4gICAgICAgIGxldCBzZWNvbmRhcnlBcnIgPSBbXTtcclxuICAgICAgICBjb25zdCBtYWluUXVlcnkgPSBtYWluLm1hcCgoYykgPT5cclxuICAgICAgICAgIGRiLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzXCIpLmRvYyhjKS5nZXQoKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3Qgc2Vjb25kYXJ5UXVlcnkgPSBzZWNvbmRhcnkubWFwKChjKSA9PlxyXG4gICAgICAgICAgZGIuY29sbGVjdGlvbihcImNoYXJhY3RlcnNcIikuZG9jKGMuaWQpLmdldCgpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBtYWluUmVzID0gUHJvbWlzZS5hbGwobWFpblF1ZXJ5KTtcclxuICAgICAgICBjb25zdCBzZWNvbmRhcnlSZXMgPSBQcm9taXNlLmFsbChzZWNvbmRhcnlRdWVyeSk7XHJcbiAgICAgICAgUHJvbWlzZS5hbGwoW21haW5SZXMsIHNlY29uZGFyeVJlc10pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgcmVzdWx0WzBdLmZvckVhY2goKGRvY3UpID0+IHtcclxuICAgICAgICAgICAgbWFpbkFyciA9IFsuLi5tYWluQXJyLCB7IC4uLmRvY3UuZGF0YSgpLCBpZDogZG9jdS5pZCB9XTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgcmVzdWx0WzFdLmZvckVhY2goKGRvY3UpID0+IHtcclxuICAgICAgICAgICAgc2Vjb25kYXJ5QXJyID0gWy4uLnNlY29uZGFyeUFyciwgeyAuLi5kb2N1LmRhdGEoKSwgaWQ6IGRvY3UuaWQgfV07XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogdHlwZXMuR0VUX1NUT1JZLFxyXG4gICAgICAgICAgICBzdG9yeUV4aXN0czogdHJ1ZSxcclxuICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgIC4uLmRvYy5kYXRhKCksXHJcbiAgICAgICAgICAgICAgaWQ6IGRvYy5pZCxcclxuICAgICAgICAgICAgICBzZWNvbmRhcnlDaGFyYWN0ZXJzOiBzZWNvbmRhcnlBcnIsXHJcbiAgICAgICAgICAgICAgbWFpbkNoYXJhY3RlcnM6IG1haW5BcnIsXHJcbiAgICAgICAgICAgICAgbWFpbkFycjogZG9jLmRhdGEoKS5tYWluQ2hhcmFjdGVycyxcclxuICAgICAgICAgICAgICBzZWNvbmRhcnlBcnI6IGRvYy5kYXRhKCkuc2Vjb25kYXJ5Q2hhcmFjdGVycyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IHR5cGVzLkRJU1BBVENIX0VSUk9SLFxyXG4gICAgICAgICAgc3RvcnlFeGlzdHM6IGZhbHNlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFN0b3J5ID0gKGRhdGEpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRpc3BhdGNoKHsgdHlwZTogdHlwZXMuQUREX1NUT1JZLCBwYXlsb2FkOiB7IGxvYWRpbmc6IHRydWUgfSB9KTtcclxuICBjb25zdCBpbWFnZU5hbWUgPSBkYXRhLnRpdGxlLnRvTG93ZXJDYXNlKCkuc3BsaXQoXCIgXCIpLmpvaW4oXCJfXCIpO1xyXG4gIGlmICh0eXBlb2YgZGF0YS5iYW5uZXIgPT09IFwib2JqZWN0XCIpIHtcclxuICAgIHN0b3JhZ2VcclxuICAgICAgLnJlZihgJHthdXRoLmN1cnJlbnRVc2VyLnVpZH0vJHtpbWFnZU5hbWV9YClcclxuICAgICAgLnB1dChkYXRhLmJhbm5lcilcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBzdG9yYWdlXHJcbiAgICAgICAgICAucmVmKGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gICAgICAgICAgLmNoaWxkKGltYWdlTmFtZSlcclxuICAgICAgICAgIC5nZXREb3dubG9hZFVSTCgpO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigodXJsKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpLmFkZCh7XHJcbiAgICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgICAgYXV0aG9ySWQ6IGF1dGguY3VycmVudFVzZXIudWlkLFxyXG4gICAgICAgICAgYXV0aG9yTmFtZTogZGF0YS5hdXRob3JOYW1lLFxyXG4gICAgICAgICAgb25lU2hvdDogZmFsc2UsXHJcbiAgICAgICAgICBiYW5uZXI6IHVybCxcclxuICAgICAgICAgIGNyZWF0ZWRBdDogZmlyZWJhc2UuZmlyZXN0b3JlLkZpZWxkVmFsdWUuc2VydmVyVGltZXN0YW1wKCksXHJcbiAgICAgICAgICBsaWtlc0NvdW50OiAwLFxyXG4gICAgICAgICAgY2hhcHRlcnNDb3VudDogMCxcclxuICAgICAgICAgIHNlY29uZGFyeUNoYXJhY3RlcnM6IFtdLFxyXG4gICAgICAgICAgZmVhdHVyZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgbm90ZTogMCxcclxuICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhcIlN0b3J5IGFkZGVkIHN1Y2Nlc3NmdWxseVwiKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIFJvdXRlci5wdXNoKGAvc3RvcnkvJHtyZXMuaWR9YCk7XHJcbiAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IHR5cGVzLkFERF9TVE9SWSxcclxuICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgIG1lc3NhZ2U6IFwiU3RvcnkgYWRkZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICAgICAgc3RvcnlJZDogcmVzLmlkLFxyXG4gICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihlcnIubWVzc2FnZSk7XHJcbiAgICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKVxyXG4gICAgICAuYWRkKHtcclxuICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgIGF1dGhvcklkOiBhdXRoLmN1cnJlbnRVc2VyLnVpZCxcclxuICAgICAgICBhdXRob3JOYW1lOiBkYXRhLmF1dGhvck5hbWUsXHJcbiAgICAgICAgb25lU2hvdDogZmFsc2UsXHJcbiAgICAgICAgY3JlYXRlZEF0OiBmaXJlYmFzZS5maXJlc3RvcmUuRmllbGRWYWx1ZS5zZXJ2ZXJUaW1lc3RhbXAoKSxcclxuICAgICAgICBsaWtlc0NvdW50OiAwLFxyXG4gICAgICAgIGNoYXB0ZXJzQ291bnQ6IDAsXHJcbiAgICAgICAgZmVhdHVyZWQ6IGZhbHNlLFxyXG4gICAgICAgIHNlY29uZGFyeUNoYXJhY3RlcnM6IFtdLFxyXG4gICAgICAgIG5vdGU6IDAsXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoXCJTdG9yeSBhZGRlZCBzdWNjZXNzZnVsbHlcIik7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBSb3V0ZXIucHVzaChgL3N0b3J5LyR7cmVzLmlkfWApO1xyXG4gICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiB0eXBlcy5BRERfU1RPUlksXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICBtZXNzYWdlOiBcIlN0b3J5IGFkZGVkIHN1Y2Nlc3NmdWxseVwiLFxyXG4gICAgICAgICAgICAgIHN0b3J5SWQ6IHJlcy5pZCxcclxuICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoZXJyLm1lc3NhZ2UpO1xyXG4gICAgICB9KTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZWRpdFN0b3J5ID0gKGRhdGEsIHN0b3J5SWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRpc3BhdGNoKHsgdHlwZTogdHlwZXMuRURJVF9TVE9SWSwgcGF5bG9hZDogeyBsb2FkaW5nU3Rvcnk6IHRydWUgfSB9KTtcclxuICBjb25zdCBpbWFnZU5hbWUgPSBkYXRhLnRpdGxlLnRvTG93ZXJDYXNlKCkuc3BsaXQoXCIgXCIpLmpvaW4oXCJfXCIpO1xyXG5cclxuICBpZiAodHlwZW9mIGRhdGEuYmFubmVyID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICBzdG9yYWdlXHJcbiAgICAgIC5yZWYoYCR7YXV0aC5jdXJyZW50VXNlci51aWR9LyR7aW1hZ2VOYW1lfWApXHJcbiAgICAgIC5wdXQoZGF0YS5iYW5uZXIpXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICByZXR1cm4gc3RvcmFnZVxyXG4gICAgICAgICAgLnJlZihhdXRoLmN1cnJlbnRVc2VyLnVpZClcclxuICAgICAgICAgIC5jaGlsZChpbWFnZU5hbWUpXHJcbiAgICAgICAgICAuZ2V0RG93bmxvYWRVUkwoKTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKHVybCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBkYlxyXG4gICAgICAgICAgLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpXHJcbiAgICAgICAgICAuZG9jKHN0b3J5SWQpXHJcbiAgICAgICAgICAudXBkYXRlKHtcclxuICAgICAgICAgICAgLi4uZGF0YSxcclxuICAgICAgICAgICAgYmFubmVyOiB1cmwsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIGRiLmNvbGxlY3Rpb24oXCJsb2NhdGlvbnNcIilcclxuICAgICAgICAgIC53aGVyZShcInN0b3J5SWRcIiwgXCI9PVwiLCBzdG9yeUlkKVxyXG4gICAgICAgICAgLmdldCgpXHJcbiAgICAgICAgICAudGhlbigoZG9jcykgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbG9jYXRpb25RdWVyeSA9IFtdO1xyXG4gICAgICAgICAgICBkb2NzLmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgICAgICAgICAgIGxvY2F0aW9uUXVlcnkgPSBbXHJcbiAgICAgICAgICAgICAgICAuLi5sb2NhdGlvblF1ZXJ5LFxyXG4gICAgICAgICAgICAgICAgZGJcclxuICAgICAgICAgICAgICAgICAgLmNvbGxlY3Rpb24oXCJsb2NhdGlvbnNcIilcclxuICAgICAgICAgICAgICAgICAgLmRvYyhkb2MuaWQpXHJcbiAgICAgICAgICAgICAgICAgIC51cGRhdGUoeyBzdG9yeVRpdGxlOiBkYXRhLnRpdGxlIH0pLFxyXG4gICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBQcm9taXNlLmFsbChsb2NhdGlvblF1ZXJ5KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoXCJTdG9yeSBhZGRlZCBzdWNjZXNzZnVsbHlcIik7XHJcbiAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogdHlwZXMuRURJVF9TVE9SWSxcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJTdG9yeSBlZGl0ZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoZXJyLm1lc3NhZ2UpO1xyXG4gICAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgZGIuY29sbGVjdGlvbihcInN0b3JpZXNcIilcclxuICAgICAgLmRvYyhzdG9yeUlkKVxyXG4gICAgICAudXBkYXRlKHtcclxuICAgICAgICAuLi5kYXRhLFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgZGIuY29sbGVjdGlvbihcImxvY2F0aW9uc1wiKVxyXG4gICAgICAgICAgLndoZXJlKFwic3RvcnlJZFwiLCBcIj09XCIsIHN0b3J5SWQpXHJcbiAgICAgICAgICAuZ2V0KClcclxuICAgICAgICAgIC50aGVuKChkb2NzKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBsb2NhdGlvblF1ZXJ5ID0gW107XHJcbiAgICAgICAgICAgIGRvY3MuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICAgICAgICAgICAgbG9jYXRpb25RdWVyeSA9IFtcclxuICAgICAgICAgICAgICAgIC4uLmxvY2F0aW9uUXVlcnksXHJcbiAgICAgICAgICAgICAgICBkYlxyXG4gICAgICAgICAgICAgICAgICAuY29sbGVjdGlvbihcImxvY2F0aW9uc1wiKVxyXG4gICAgICAgICAgICAgICAgICAuZG9jKGRvYy5pZClcclxuICAgICAgICAgICAgICAgICAgLnVwZGF0ZSh7IHN0b3J5VGl0bGU6IGRhdGEudGl0bGUgfSksXHJcbiAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFByb21pc2UuYWxsKGxvY2F0aW9uUXVlcnkpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhcIlN0b3J5IGFkZGVkIHN1Y2Nlc3NmdWxseVwiKTtcclxuICAgICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiB0eXBlcy5FRElUX1NUT1JZLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIlN0b3J5IGVkaXRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihlcnIubWVzc2FnZSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyU3RvcmllcyA9ICgpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpXHJcbiAgICAud2hlcmUoXCJhdXRob3JJZFwiLCBcIj09XCIsIGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigoZG9jcykgPT4ge1xyXG4gICAgICBsZXQgaXRlbXMgPSBbXTtcclxuICAgICAgZG9jcy5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgICAgICBpdGVtcyA9IFsuLi5pdGVtcywgeyBpZDogZG9jLmlkLCAuLi5kb2MuZGF0YSgpIH1dO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGl0ZW1zO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChpdGVtcykgPT4ge1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IHR5cGVzLkdFVF9VU0VSX1NUT1JJRVMsIHBheWxvYWQ6IGl0ZW1zIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0RmF2b3JpdGVTdG9yaWVzID0gKCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGIuY29sbGVjdGlvbihcInN0b3JpZXNMaWtlc1wiKVxyXG4gICAgLndoZXJlKFwic2VuZGVySWRcIiwgXCI9PVwiLCBhdXRoLmN1cnJlbnRVc2VyLnVpZClcclxuICAgIC5nZXQoKVxyXG4gICAgLnRoZW4oKGRvY3MpID0+IHtcclxuICAgICAgbGV0IGZhdkFyciA9IFtdO1xyXG4gICAgICBkb2NzLmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgICAgIGZhdkFyciA9IFsuLi5mYXZBcnIsIGRvYy5kYXRhKCkuc3RvcnlJZF07XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gZmF2QXJyO1xyXG4gICAgfSlcclxuICAgIC50aGVuKCh1c2VycykgPT4ge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSB1c2Vycy5tYXAoKHVzZXIpID0+XHJcbiAgICAgICAgZGIuY29sbGVjdGlvbihcInN0b3JpZXNcIikuZG9jKHVzZXIpLmdldCgpXHJcbiAgICAgICk7XHJcbiAgICAgIFByb21pc2UuYWxsKHJlc3VsdCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgbGV0IGZhdlVzZXJzID0gW107XHJcbiAgICAgICAgcmVzLmZvckVhY2goXHJcbiAgICAgICAgICAoZG9jKSA9PiAoZmF2VXNlcnMgPSBbLi4uZmF2VXNlcnMsIHsgaWQ6IGRvYy5pZCwgLi4uZG9jLmRhdGEoKSB9XSlcclxuICAgICAgICApO1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IHR5cGVzLkdFVF9GQVZPUklURV9TVE9SSUVTLFxyXG4gICAgICAgICAgcGF5bG9hZDogZmF2VXNlcnMsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgaXNTdG9yeUZhdm9yaXRlID0gKHN0b3J5SWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGlmIChhdXRoLmN1cnJlbnRVc2VyKSB7XHJcbiAgICBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc0xpa2VzXCIpXHJcbiAgICAgIC53aGVyZShcInNlbmRlcklkXCIsIFwiPT1cIiwgYXV0aC5jdXJyZW50VXNlci51aWQpXHJcbiAgICAgIC53aGVyZShcInN0b3J5SWRcIiwgXCI9PVwiLCBzdG9yeUlkKVxyXG4gICAgICAub25TbmFwc2hvdCgoc25hcHNob3QpID0+IHtcclxuICAgICAgICBjb25zdCBhbnN3ZXIgPSBzbmFwc2hvdC5kb2NzWzBdID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgIHJldHVybiBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiB0eXBlcy5JU19TVE9SWV9GQVZPUklURSxcclxuICAgICAgICAgIHBheWxvYWQ6IGFuc3dlcixcclxuICAgICAgICAgIGxvYWRpbmdGYXY6IGZhbHNlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYWRkU3RvcnlUb0Zhdm9yaXRlID0gKGlkLCB1c2VybmFtZSwgc3RvcnlUaXRsZSkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgLy8gaWYgKGlzRmF2b3JpdGUpIHJldHVybiBtZXNzYWdlLndhcm5pbmcoXCJZb3UndmUgYWxyZWFkeSBsaWtlZCB0aGlzIHN0b3J5XCIpO1xyXG4gIGlmICghYXV0aC5jdXJyZW50VXNlcilcclxuICAgIHJldHVybiBtZXNzYWdlLmVycm9yKFwiWW91IG5lZWQgdG8gYmUgbG9nZ2VkIGluIHRvIGxpa2UgYSBzdG9yeVwiKTtcclxuICBpZiAoIWF1dGguY3VycmVudFVzZXIuZW1haWxWZXJpZmllZClcclxuICAgIHJldHVybiBtZXNzYWdlLmVycm9yKFwiWW91IG5lZWQgdG8gdmVyaWZ5IHlvdXIgZW1haWwgZmlyc3RcIik7XHJcblxyXG4gIGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzTGlrZXNcIilcclxuICAgIC5hZGQoe1xyXG4gICAgICBzZW5kZXI6IHVzZXJuYW1lLFxyXG4gICAgICBzZW5kZXJJZDogYXV0aC5jdXJyZW50VXNlci51aWQsXHJcbiAgICAgIHN0b3J5SWQ6IGlkLFxyXG4gICAgICBjcmVhdGVkQXQ6IGZpcmViYXNlLmZpcmVzdG9yZS5GaWVsZFZhbHVlLnNlcnZlclRpbWVzdGFtcCgpLFxyXG4gICAgfSlcclxuICAgIC50aGVuKCgpID0+IG1lc3NhZ2Uuc3VjY2VzcyhgJHtzdG9yeVRpdGxlfSBhZGRlZCB0byB5b3VyIGZhdm9yaXRlc2ApKVxyXG4gICAgLmNhdGNoKChlcnIpID0+IG1lc3NhZ2UuZXJyb3IoXCJUaGVyZSBoYXMgYmVlbiBhIHByb2JsZW1cIikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZVN0b3J5RnJvbUZhdm9yaXRlID0gKGlkLCBzdG9yeVRpdGxlKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc0xpa2VzXCIpXHJcbiAgICAud2hlcmUoXCJzdG9yeUlkXCIsIFwiPT1cIiwgaWQpXHJcbiAgICAud2hlcmUoXCJzZW5kZXJJZFwiLCBcIj09XCIsIGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGIuY29sbGVjdGlvbihcInN0b3JpZXNMaWtlc1wiKS5kb2MoZGF0YS5kb2NzWzBdLmlkKS5kZWxldGUoKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoKSA9PiBtZXNzYWdlLnN1Y2Nlc3MoYCR7c3RvcnlUaXRsZX0gcmVtb3ZlZCBmcm9tIHlvdXIgZmF2b3JpdGVzYCkpXHJcbiAgICAuY2F0Y2goKGVycikgPT4gbWVzc2FnZS5lcnJvcihcIlRoZXJlIGhhcyBiZWVuIGEgcHJvYmxlbVwiKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RvcnlDaGFyYWN0ZXJzID0gKCkgPT4gKGRpc3BhdGNoKSA9PiB7fTtcclxuXHJcbi8vIENIQVBURVJzXHJcblxyXG5leHBvcnQgY29uc3QgYWRkQ2hhcHRlciA9IChkYXRhLCBzZWNvbmRhcnlDaGFyYWN0ZXJzKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkaXNwYXRjaCh7IHR5cGU6IHR5cGVzLkFERF9DSEFQVEVSLCBwYXlsb2FkOiB7IGxvYWRpbmc6IHRydWUgfSB9KTtcclxuICBkYi5jb2xsZWN0aW9uKFwiY2hhcHRlcnNcIilcclxuICAgIC5hZGQoe1xyXG4gICAgICAuLi5kYXRhLFxyXG4gICAgICBhdXRob3JJZDogYXV0aC5jdXJyZW50VXNlci51aWQsXHJcbiAgICAgIGNvbW1lbnRzQ291bnQ6IDAsXHJcbiAgICAgIG5vdGU6IDAsXHJcbiAgICAgIHZvdGVyczogW10sXHJcbiAgICAgIHZvdGVzQ291bnQ6IDAsXHJcbiAgICAgIGNyZWF0ZWRBdDogZmlyZWJhc2UuZmlyZXN0b3JlLkZpZWxkVmFsdWUuc2VydmVyVGltZXN0YW1wKCksXHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKVxyXG4gICAgICAgIC5kb2MoZGF0YS5zdG9yeUlkKVxyXG4gICAgICAgIC5nZXQoKVxyXG4gICAgICAgIC50aGVuKChkb2MpID0+IHtcclxuICAgICAgICAgIGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpXHJcbiAgICAgICAgICAgIC5kb2MoZGF0YS5zdG9yeUlkKVxyXG4gICAgICAgICAgICAudXBkYXRlKHtcclxuICAgICAgICAgICAgICBzZWNvbmRhcnlDaGFyYWN0ZXJzLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogdHlwZXMuQUREX0NIQVBURVIsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiQ2hhcHRlciBhZGRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgICAgICAgICAgY2hhcElkOiByZXMuaWQsXHJcbiAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAvLyAudGhlbigocmVzKSA9PiB7XHJcbiAgLy8gICBkaXNwYXRjaCh7XHJcbiAgLy8gICAgIHR5cGU6IHR5cGVzLkFERF9DSEFQVEVSLFxyXG4gIC8vICAgICBwYXlsb2FkOiB7XHJcbiAgLy8gICAgICAgbWVzc2FnZTogXCJDaGFwdGVyIGFkZGVkIHN1Y2Nlc3NmdWxseVwiLFxyXG4gIC8vICAgICAgIGNoYXBJZDogcmVzLmlkLFxyXG4gIC8vICAgICB9LFxyXG4gIC8vICAgfSk7XHJcbiAgLy8gfSlcclxuICAvLyAuY2F0Y2goKGVycikgPT5cclxuICAvLyAgIGRpc3BhdGNoKHtcclxuICAvLyAgICAgdHlwZTogdHlwZXMuQUREX0NIQVBURVIsXHJcbiAgLy8gICAgIHBheWxvYWQ6IHsgbWVzc2FnZTogZXJyLm1lc3NhZ2UsIGNoYXBJZDogXCJcIiB9LFxyXG4gIC8vICAgfSlcclxuICAvLyApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGVkaXRDaGFwdGVyID0gKGRhdGEsIHN0b3J5SWQsIGNoYXBpZCwgc2Vjb25kYXJ5Q2hhcmFjdGVycykgPT4gKFxyXG4gIGRpc3BhdGNoXHJcbikgPT4ge1xyXG4gIGRpc3BhdGNoKHsgdHlwZTogdHlwZXMuRURJVF9DSEFQVEVSLCBwYXlsb2FkOiB7IGxvYWRpbmc6IHRydWUgfSB9KTtcclxuICBkYi5jb2xsZWN0aW9uKFwiY2hhcHRlcnNcIilcclxuICAgIC5kb2MoY2hhcGlkKVxyXG4gICAgLnVwZGF0ZSh7IC4uLmRhdGEgfSlcclxuICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgZGIuY29sbGVjdGlvbihcInN0b3JpZXNcIilcclxuICAgICAgICAuZG9jKHN0b3J5SWQpXHJcbiAgICAgICAgLmdldCgpXHJcbiAgICAgICAgLnRoZW4oKGRvYykgPT4ge1xyXG4gICAgICAgICAgZGIuY29sbGVjdGlvbihcInN0b3JpZXNcIilcclxuICAgICAgICAgICAgLmRvYyhzdG9yeUlkKVxyXG4gICAgICAgICAgICAudXBkYXRlKHtcclxuICAgICAgICAgICAgICBzZWNvbmRhcnlDaGFyYWN0ZXJzLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogdHlwZXMuRURJVF9DSEFQVEVSLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkNoYXB0ZXIgZWRpdGVkIHN1Y2Nlc3NmdWxseVwiLFxyXG4gICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlQ2hhcHRlciA9IChpZCwgc3RvcnlJZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGlzcGF0Y2goeyB0eXBlOiB0eXBlcy5ERUxFVEVfQ0hBUFRFUiwgcGF5bG9hZDogeyBsb2FkaW5nQ2hhcHRlcjogdHJ1ZSB9IH0pO1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJjaGFwdGVyc1wiKVxyXG4gICAgLmRvYyhpZClcclxuICAgIC5nZXQoKVxyXG4gICAgLnRoZW4oKGRvYykgPT4ge1xyXG4gICAgICBjb25zdCBjaGFyYWN0ZXJzRnJvbUNoYXB0ZXIgPSBkb2MuZGF0YSgpLmNoYXJhY3RlcnM7XHJcbiAgICAgIGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpXHJcbiAgICAgICAgLmRvYyhzdG9yeUlkKVxyXG4gICAgICAgIC5nZXQoKVxyXG4gICAgICAgIC50aGVuKChzdG9yeSkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgY2hhcmFjdGVyc0Zyb21TdG9yeSA9IHN0b3J5LmRhdGEoKS5zZWNvbmRhcnlDaGFyYWN0ZXJzO1xyXG4gICAgICAgICAgbGV0IG5ld0FyciA9IGNoYXJhY3RlcnNGcm9tU3RvcnkubWFwKChjKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjaGFyYWN0ZXJzRnJvbUNoYXB0ZXIuaW5jbHVkZXMoYy5pZCkpIHtcclxuICAgICAgICAgICAgICByZXR1cm4geyAuLi5jLCB0aW1lczogYy50aW1lcyAtIDEgfTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICByZXR1cm4gYztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBuZXdBcnIgPSBuZXdBcnIuZmlsdGVyKChjKSA9PiBjLnRpbWVzID4gMCk7XHJcbiAgICAgICAgICBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKVxyXG4gICAgICAgICAgICAuZG9jKHN0b3J5SWQpXHJcbiAgICAgICAgICAgIC51cGRhdGUoeyBzZWNvbmRhcnlDaGFyYWN0ZXJzOiBuZXdBcnIgfSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGRiLmNvbGxlY3Rpb24oXCJjaGFwdGVyc1wiKVxyXG4gICAgICAgICAgICAgICAgLmRvYyhpZClcclxuICAgICAgICAgICAgICAgIC5kZWxldGUoKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogdHlwZXMuREVMRVRFX0NIQVBURVIsXHJcbiAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJDaGFwdGVyIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nQ2hhcHRlcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDaGFwdGVyID0gKHN0b3J5SWQsIGlkLCB0eXBlKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKVxyXG4gICAgLmRvYyhzdG9yeUlkKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigoZG9jKSA9PiB7XHJcbiAgICAgIGlmIChkb2MuZXhpc3RzKSB7XHJcbiAgICAgICAgZGIuY29sbGVjdGlvbihcImNoYXB0ZXJzXCIpXHJcbiAgICAgICAgICAuZG9jKGlkKVxyXG4gICAgICAgICAgLmdldCgpXHJcbiAgICAgICAgICAudGhlbigoY2hhcCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY2hhcC5leGlzdHMpIHtcclxuICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gXCJzaG93XCIpIHtcclxuICAgICAgICAgICAgICAgIGxldCBjaGFyYWN0ZXJzID0gW107XHJcbiAgICAgICAgICAgICAgICBsZXQgbG9jYXRpb25zID0gW107XHJcbiAgICAgICAgICAgICAgICBsZXQgY2hhcmFRdWVyeSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgbGV0IGxvY1F1ZXJ5ID0gW107XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjaGFyYWN0ZXJzSW5DaGFwZXIgPSBjaGFwLmRhdGEoKS5jaGFyYWN0ZXJzO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYXRpb25zSW5DaGFwZXIgPSBjaGFwLmRhdGEoKS5sb2NhdGlvbnM7XHJcbiAgICAgICAgICAgICAgICBjaGFyYWN0ZXJzSW5DaGFwZXIuZm9yRWFjaCgoY2hhcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBjaGFyYVF1ZXJ5LnB1c2goZGIuY29sbGVjdGlvbihcImNoYXJhY3RlcnNcIikuZG9jKGNoYXIpLmdldCgpKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgbG9jYXRpb25zSW5DaGFwZXIuZm9yRWFjaCgobG9jKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGxvY1F1ZXJ5LnB1c2goZGIuY29sbGVjdGlvbihcImxvY2F0aW9uc1wiKS5kb2MobG9jKS5nZXQoKSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGNoYXJhUXVlcnkgPSBQcm9taXNlLmFsbChjaGFyYVF1ZXJ5KTtcclxuICAgICAgICAgICAgICAgIGxvY1F1ZXJ5ID0gUHJvbWlzZS5hbGwobG9jUXVlcnkpO1xyXG4gICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwoW2NoYXJhUXVlcnksIGxvY1F1ZXJ5XSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHJlc1swXS5mb3JFYWNoKChjKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hhcmFjdGVycy5wdXNoKHsgLi4uYy5kYXRhKCksIGlkOiBjLmlkIH0pO1xyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgcmVzWzFdLmZvckVhY2goKGwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbnMucHVzaCh7IC4uLmwuZGF0YSgpLCBpZDogbC5pZCB9KTtcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiB0eXBlcy5HRVRfQ0hBUFRFUixcclxuICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjaGFwdGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLmNoYXAuZGF0YSgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogY2hhcC5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFyYWN0ZXJzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwdWJsaWM6IGRvYy5kYXRhKCkucHVibGljLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgIGNoYXB0ZXJFeGlzdHM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgICB0eXBlOiB0eXBlcy5HRVRfQ0hBUFRFUixcclxuICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoYXB0ZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIC4uLmNoYXAuZGF0YSgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ6IGNoYXAuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICBwdWJsaWM6IGRvYy5kYXRhKCkucHVibGljLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgY2hhcHRlckV4aXN0czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiB0eXBlcy5HRVRfQ0hBUFRFUixcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHsgY2hhcHRlckV4aXN0czogZmFsc2UgfSxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogdHlwZXMuR0VUX0NIQVBURVIsXHJcbiAgICAgICAgICBwYXlsb2FkOiB7IGNoYXB0ZXJFeGlzdHM6IGZhbHNlIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldENoYXB0ZXJzID0gKGlkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkYi5jb2xsZWN0aW9uKFwiY2hhcHRlcnNcIilcclxuICAgIC53aGVyZShcInN0b3J5SWRcIiwgXCI9PVwiLCBpZClcclxuICAgIC5vcmRlckJ5KFwibnVtYmVyXCIsIFwiYXNjXCIpXHJcbiAgICAub25TbmFwc2hvdCgoZG9jcykgPT4ge1xyXG4gICAgICBsZXQgYXJyID0gW107XHJcbiAgICAgIGRvY3MuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICAgICAgYXJyLnB1c2goe1xyXG4gICAgICAgICAgYXV0aG9ySWQ6IGRvYy5kYXRhKCkuYXV0aG9ySWQsXHJcbiAgICAgICAgICBpZDogZG9jLmlkLFxyXG4gICAgICAgICAgY3JlYXRlZEF0OiBkb2MuZGF0YSgpLmNyZWF0ZWRBdCxcclxuICAgICAgICAgIG51bWJlcjogZG9jLmRhdGEoKS5udW1iZXIsXHJcbiAgICAgICAgICB0aXRsZTogZG9jLmRhdGEoKS50aXRsZSxcclxuICAgICAgICAgIGNvbW1lbnRzQ291bnQ6IGRvYy5kYXRhKCkuY29tbWVudHNDb3VudCxcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiB0eXBlcy5HRVRfQ0hBUFRFUlMsXHJcbiAgICAgICAgcGF5bG9hZDogYXJyLFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuLy8gTE9DQVRJT05TXHJcblxyXG5leHBvcnQgY29uc3QgYWRkTG9jYXRpb24gPSAoZGF0YSkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgY29uc29sZS5sb2coXCJjb3Vjb3VcIik7XHJcbiAgZGlzcGF0Y2goeyB0eXBlOiB0eXBlcy5BRERfTE9DQVRJT04sIHBheWxvYWQ6IHsgbG9hZGluZ0xvYzogdHJ1ZSB9IH0pO1xyXG5cclxuICBjb25zdCBpbWFnZU5hbWUgPSBkYXRhLm5hbWUudG9Mb3dlckNhc2UoKS5zcGxpdChcIiBcIikuam9pbihcIl9cIik7XHJcblxyXG4gIGlmICh0eXBlb2YgZGF0YS5pbWFnZSA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgc3RvcmFnZVxyXG4gICAgICAucmVmKGAke2F1dGguY3VycmVudFVzZXIudWlkfS8ke2ltYWdlTmFtZX1gKVxyXG4gICAgICAucHV0KGRhdGEuaW1hZ2UpXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICByZXR1cm4gc3RvcmFnZVxyXG4gICAgICAgICAgLnJlZihhdXRoLmN1cnJlbnRVc2VyLnVpZClcclxuICAgICAgICAgIC5jaGlsZChpbWFnZU5hbWUpXHJcbiAgICAgICAgICAuZ2V0RG93bmxvYWRVUkwoKTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKHVybCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBkYi5jb2xsZWN0aW9uKFwibG9jYXRpb25zXCIpLmFkZCh7XHJcbiAgICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgICAgaW1hZ2U6IHVybCxcclxuICAgICAgICAgIGNyZWF0ZWRBdDogZmlyZWJhc2UuZmlyZXN0b3JlLkZpZWxkVmFsdWUuc2VydmVyVGltZXN0YW1wKCksXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXMpID0+XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogdHlwZXMuQUREX0xPQ0FUSU9OLFxyXG4gICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkxvY2F0aW9uIGFkZGVkIHN1Y2Nlc3NmdWxseVwiLFxyXG4gICAgICAgICAgICBsb2NJZDogcmVzLmlkLFxyXG4gICAgICAgICAgICBsb2FkaW5nTG9jOiBmYWxzZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSlcclxuICAgICAgKVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoZXJyLm1lc3NhZ2UpO1xyXG4gICAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgZGIuY29sbGVjdGlvbihcImxvY2F0aW9uc1wiKVxyXG4gICAgICAuYWRkKHtcclxuICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgIGNyZWF0ZWRBdDogZmlyZWJhc2UuZmlyZXN0b3JlLkZpZWxkVmFsdWUuc2VydmVyVGltZXN0YW1wKCksXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXMpID0+XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogdHlwZXMuQUREX0xPQ0FUSU9OLFxyXG4gICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkxvY2F0aW9uIGFkZGVkIHN1Y2Nlc3NmdWxseVwiLFxyXG4gICAgICAgICAgICBsb2NJZDogcmVzLmlkLFxyXG4gICAgICAgICAgICBsb2FkaW5nTG9jOiBmYWxzZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSlcclxuICAgICAgKVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoZXJyLm1lc3NhZ2UpO1xyXG4gICAgICB9KTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZWRpdExvY2F0aW9uID0gKGRhdGEpID0+IChkaXNwYXRjaCkgPT4ge307XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0TG9jYXRpb24gPSAoaWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJsb2NhdGlvbnNcIilcclxuICAgIC5kb2MoaWQpXHJcbiAgICAuZ2V0KClcclxuICAgIC50aGVuKChkb2MpID0+IHtcclxuICAgICAgaWYgKGRvYy5leGlzdHMpIHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiB0eXBlcy5HRVRfTE9DQVRJT04sXHJcbiAgICAgICAgICBwYXlsb2FkOiB7IC4uLmRvYy5kYXRhKCksIGlkOiBkb2MuaWQgfSxcclxuICAgICAgICAgIGxvY2F0aW9uRXhpc3RzOiB0cnVlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IHR5cGVzLkdFVF9MT0NBVElPTixcclxuICAgICAgICAgIGxvY2F0aW9uRXhpc3RzOiBmYWxzZSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VXNlckxvY2F0aW9ucyA9ICgpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJsb2NhdGlvbnNcIilcclxuICAgIC53aGVyZShcImF1dGhvcklkXCIsIFwiPT1cIiwgYXV0aC5jdXJyZW50VXNlci51aWQpXHJcbiAgICAuZ2V0KClcclxuICAgIC50aGVuKChkb2NzKSA9PiB7XHJcbiAgICAgIGxldCBsb2NhdGlvbnMgPSBbXTtcclxuICAgICAgZG9jcy5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgICAgICBsb2NhdGlvbnMgPSBbLi4ubG9jYXRpb25zLCB7IGlkOiBkb2MuaWQsIC4uLmRvYy5kYXRhKCkgfV07XHJcbiAgICAgIH0pO1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogdHlwZXMuR0VUX1VTRVJfTE9DQVRJT05TLFxyXG4gICAgICAgIHBheWxvYWQ6IGxvY2F0aW9ucyxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdG9yeUxvY2F0aW9ucyA9IChzdG9yeUlkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkYi5jb2xsZWN0aW9uKFwibG9jYXRpb25zXCIpXHJcbiAgICAud2hlcmUoXCJzdG9yeUlkXCIsIFwiPT1cIiwgc3RvcnlJZClcclxuICAgIC5nZXQoKVxyXG4gICAgLnRoZW4oKGRvY3MpID0+IHtcclxuICAgICAgY29uc3QgbG9jYXRpb25zID0gZG9jcy5kb2NzLm1hcCgoZG9jKSA9PiAoeyAuLi5kb2MuZGF0YSgpLCBpZDogZG9jLmlkIH0pKTtcclxuICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IHR5cGVzLkdFVF9TVE9SWV9MT0NBVElPTlMsXHJcbiAgICAgICAgcGF5bG9hZDogbG9jYXRpb25zLFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuLy8gQ09NTUVOVFNcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDb21tZW50cyA9IChpZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGIuY29sbGVjdGlvbihcImNvbW1lbnRzXCIpXHJcbiAgICAud2hlcmUoXCJjaGFwdGVySWRcIiwgXCI9PVwiLCBpZClcclxuICAgIC5vcmRlckJ5KFwiY3JlYXRlZEF0XCIsIFwiZGVzY1wiKVxyXG4gICAgLm9uU25hcHNob3QoKHNuYXApID0+IHtcclxuICAgICAgbGV0IGNvbW1lbnRzID0gc25hcC5kb2NzLm1hcCgoY29tbWVudCkgPT4gKHtcclxuICAgICAgICAuLi5jb21tZW50LmRhdGEoKSxcclxuICAgICAgICBpZDogY29tbWVudC5pZCxcclxuICAgICAgfSkpO1xyXG4gICAgICBsZXQgcXVlcmllcyA9IFtdO1xyXG4gICAgICBjb21tZW50cy5mb3JFYWNoKChjb21tKSA9PiB7XHJcbiAgICAgICAgcXVlcmllcy5wdXNoKGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKS5kb2MoY29tbS51c2VySWQpLmdldCgpKTtcclxuICAgICAgfSk7XHJcbiAgICAgIFByb21pc2UuYWxsKHF1ZXJpZXMpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGNvbW1lbnRzID0gY29tbWVudHMubWFwKChjb21tKSA9PiAoe1xyXG4gICAgICAgICAgLi4uY29tbSxcclxuICAgICAgICAgIHVzZXJJbWFnZTogcmVzLmZpbmQoKGQpID0+IGQuaWQgPT09IGNvbW0udXNlcklkKS5kYXRhKCkuaW1hZ2UsXHJcbiAgICAgICAgfSkpO1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IHR5cGVzLkdFVF9DT01NRU5UUyxcclxuICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgbG9hZGluZ0NvbW1lbnRzOiBmYWxzZSxcclxuICAgICAgICAgICAgY29tbWVudHMsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHN1Ym1pdENvbW1lbnQgPSAoaW5mbykgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgaWYgKCFhdXRoLmN1cnJlbnRVc2VyLmVtYWlsVmVyaWZpZWQpXHJcbiAgICByZXR1cm4gbWVzc2FnZS5lcnJvcihcIllvdSBuZWVkIHRvIHZlcmlmeSB5b3VyIGVtYWlsIGZpcnN0XCIpO1xyXG4gIGlmICghaW5mby5jb250ZW50KSByZXR1cm4gbWVzc2FnZS5lcnJvcihcIkNvbnRlbnQgbXVzdCBub3QgYmUgZW1wdHlcIik7XHJcblxyXG4gIGRiLmNvbGxlY3Rpb24oXCJjb21tZW50c1wiKVxyXG4gICAgLmFkZCh7XHJcbiAgICAgIC4uLmluZm8sXHJcbiAgICAgIGNyZWF0ZWRBdDogZmlyZWJhc2UuZmlyZXN0b3JlLkZpZWxkVmFsdWUuc2VydmVyVGltZXN0YW1wKCksXHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKCkgPT4gbWVzc2FnZS5zdWNjZXNzKFwiQ29tbWVudCBwb3N0ZWQgc3VjY2Vzc2Z1bGx5XCIpKVxyXG4gICAgLmNhdGNoKChlcnIpID0+IG1lc3NhZ2UuZXJyb3IoZXJyLm1lc3NhZ2UpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkZWxldGVDb21tZW50ID0gKGlkLCBjaGFwaWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJjb21tZW50c1wiKVxyXG4gICAgLmRvYyhpZClcclxuICAgIC5nZXQoKVxyXG4gICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICBkYi5jb2xsZWN0aW9uKFwiY2hhcHRlcnNcIilcclxuICAgICAgICAuZG9jKGNoYXBpZClcclxuICAgICAgICAuZ2V0KClcclxuICAgICAgICAudGhlbigoY2hhcCkgPT4ge1xyXG4gICAgICAgICAgZGIuY29sbGVjdGlvbihcImNoYXB0ZXJzXCIpXHJcbiAgICAgICAgICAgIC5kb2MoY2hhcGlkKVxyXG4gICAgICAgICAgICAudXBkYXRlKHsgY29tbWVudHNDb3VudDogY2hhcC5kYXRhKCkuY29tbWVudHNDb3VudCAtIDEgfSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGRiLmNvbGxlY3Rpb24oXCJjb21tZW50c1wiKS5kb2MoaWQpLmRlbGV0ZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9