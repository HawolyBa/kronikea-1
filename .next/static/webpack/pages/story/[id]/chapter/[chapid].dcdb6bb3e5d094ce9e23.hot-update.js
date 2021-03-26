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






var Comments = function Comments(_ref) {
  _s();

  var comments = _ref.comments,
      auth = _ref.auth,
      deleteComment = _ref.deleteComment,
      submitComment = _ref.submitComment,
      chapid = _ref.chapid,
      storyId = _ref.storyId,
      authorId = _ref.authorId,
      title = _ref.title;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(""),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      commentBody = _React$useState2[0],
      setCommentBody = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState3, 2),
      toggleCommentForm = _React$useState4[0],
      setToggleCommentForm = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState5, 2),
      toggleAnswerForm = _React$useState6[0],
      setToggleAnswerForm = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(""),
      _React$useState8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState7, 2),
      clickedForm = _React$useState8[0],
      setClickedForm = _React$useState8[1];

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

  var submit = function submit() {
    submitComment({
      content: commentBody,
      username: auth.user.username,
      userId: auth.user.uid,
      answer: false,
      chapterId: chapid,
      storyId: storyId
    });
    setCommentBody("");
  };

  var submitAnswer = function submitAnswer(id, username, userId, e) {
    e.preventDefault();
    props.submitAnswer({
      commentAnsweredId: id,
      answeredToId: userId,
      content: "@".concat(username, " ").concat(commentBody),
      storyId: storyId,
      chapterId: chapid,
      authorId: authorId,
      title: title,
      answeredTo: username
    });
    setCommentBody("");
    answerToggle();
  };

  return __jsx("section", {
    className: "comments",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 5
    }
  }, auth.user ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 11
    }
  }, "Add a comment"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: 24,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
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
      lineNumber: 89,
      columnNumber: 15
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: 24,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    onClick: submit,
    type: "primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 15
    }
  }, "Comment"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 11
    }
  })) : __jsx("p", {
    style: {
      marginBottom: "20px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 9
    }
  }, "You need to be logged in to post a comment.", " ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/auth",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 11
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 13
    }
  }, "Click here to login or create an account !"))), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
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
          lineNumber: 120,
          columnNumber: 17
        }
      }, "Reply", " "), comment.userId === auth.user.uid && __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Popconfirm"], {
        title: "Do you want to delete this comment ?",
        okText: "Yes",
        cancelText: "No",
        onConfirm: function onConfirm() {
          return deleteComment(comment.id, chapid);
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 17
        }
      }, __jsx("span", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 19
        }
      }, "Delete")), auth.user && auth.user.uid !== comment.userId && __jsx(_common_Report__WEBPACK_IMPORTED_MODULE_6__["default"], {
        type: "comment",
        data: comment,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 17
        }
      })],
      author: __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/profile/".concat(comment.userId),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 15
        }
      }, __jsx("a", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 17
        }
      }, comment.username)),
      avatar: __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/profile/".concat(comment.userId),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 15
        }
      }, __jsx("a", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 17
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {
        src: comment.userImage,
        alt: comment.username,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 19
        }
      }))),
      content: __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 22
        }
      }, comment.content),
      datetime: __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], {
        title: comment.createdAt && typeof comment.createdAt === "object" ? moment__WEBPACK_IMPORTED_MODULE_5___default.a.unix(comment.createdAt.seconds).format("YYYY-MM-DD HH:mm:ss") : moment__WEBPACK_IMPORTED_MODULE_5___default()(comment.createdAt).format("YYYY-MM-DD HH:mm:ss"),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 15
        }
      }, __jsx("span", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 17
        }
      }, comment.createdAt && typeof comment.createdAt === "object" ? moment__WEBPACK_IMPORTED_MODULE_5___default.a.unix(comment.createdAt.seconds).fromNow() : moment__WEBPACK_IMPORTED_MODULE_5___default()(comment.createdAt).fromNow())),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
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
            lineNumber: 178,
            columnNumber: 23
          }
        }, "Reply", " "), comment.userId === auth.user.uid && __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Popconfirm"], {
          title: "Do you want to delete this comment ?",
          okText: "Yes",
          cancelText: "No",
          onConfirm: function onConfirm() {
            return deleteComment(c.id, chapid);
          },
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 186,
            columnNumber: 23
          }
        }, __jsx("span", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 192,
            columnNumber: 25
          }
        }, "Delete")), auth.user && (auth.user.uid !== comment.userId)(__jsx(_common_Report__WEBPACK_IMPORTED_MODULE_6__["default"], {
          type: "comment",
          data: comment,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 197,
            columnNumber: 25
          }
        }))],
        author: __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: "/profile/".concat(c.userId),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 201,
            columnNumber: 21
          }
        }, __jsx("a", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 202,
            columnNumber: 23
          }
        }, c.username)),
        avatar: __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: "/profile/".concat(c.userId),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 206,
            columnNumber: 21
          }
        }, __jsx("a", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 207,
            columnNumber: 23
          }
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {
          src: c.userImage,
          alt: c.username,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 208,
            columnNumber: 25
          }
        }))),
        content: __jsx("p", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 212,
            columnNumber: 28
          }
        }, c.content),
        datetime: __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], {
          title: comment.createdAt && typeof c.createdAt === "object" ? moment__WEBPACK_IMPORTED_MODULE_5___default.a.unix(c.createdAt.seconds).format("YYYY-MM-DD HH:mm:ss") : moment__WEBPACK_IMPORTED_MODULE_5___default()(c.createdAt).format("YYYY-MM-DD HH:mm:ss"),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 214,
            columnNumber: 21
          }
        }, __jsx("span", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 223,
            columnNumber: 23
          }
        }, comment.createdAt && typeof c.createdAt === "object" ? moment__WEBPACK_IMPORTED_MODULE_5___default.a.unix(c.createdAt.seconds).fromNow() : moment__WEBPACK_IMPORTED_MODULE_5___default()(c.createdAt).fromNow())),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 17
        }
      }), clickedForm === c.id && toggleAnswerForm && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233,
          columnNumber: 21
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        md: 24,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234,
          columnNumber: 23
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
        placeholder: "@".concat(c.username),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235,
          columnNumber: 25
        }
      })), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        md: 24,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244,
          columnNumber: 23
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        onClick: submitAnswer.bind(null, comment.id, c.username, c.userId),
        type: "primary",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245,
          columnNumber: 25
        }
      }, "Comment"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258,
          columnNumber: 21
        }
      })));
    })), clickedForm === comment.id && toggleCommentForm ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 267,
        columnNumber: 15
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      md: 24,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 268,
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
        lineNumber: 269,
        columnNumber: 19
      }
    })), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      md: 24,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 278,
        columnNumber: 17
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      onClick: submitAnswer.bind(null, comment.id, c.username, c.userId),
      type: "primary",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 279,
        columnNumber: 19
      }
    }, "Comment"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 292,
        columnNumber: 15
      }
    })) : null);
  }));
};

_s(Comments, "RaZ/uPJTugk8w0Bya+6YPcCE9Qs=");

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jaGFwdGVyL0NvbW1lbnRzLmpzIl0sIm5hbWVzIjpbIkNvbW1lbnRzIiwiY29tbWVudHMiLCJhdXRoIiwiZGVsZXRlQ29tbWVudCIsInN1Ym1pdENvbW1lbnQiLCJjaGFwaWQiLCJzdG9yeUlkIiwiYXV0aG9ySWQiLCJ0aXRsZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJjb21tZW50Qm9keSIsInNldENvbW1lbnRCb2R5IiwidG9nZ2xlQ29tbWVudEZvcm0iLCJzZXRUb2dnbGVDb21tZW50Rm9ybSIsInRvZ2dsZUFuc3dlckZvcm0iLCJzZXRUb2dnbGVBbnN3ZXJGb3JtIiwiY2xpY2tlZEZvcm0iLCJzZXRDbGlja2VkRm9ybSIsInRvcENvbW1lbnRzIiwiZmlsdGVyIiwiY29tbSIsImFuc3dlciIsInJlc3BvbnNlcyIsImFsbENvbW1lbnRzIiwibWFwIiwicmVzIiwiZm9yRWFjaCIsInJlc3BvbnNlIiwiY29tbWVudEFuc3dlcmVkSWQiLCJpZCIsInB1c2giLCJjb21tZW50VG9nZ2xlIiwiYW5zd2VyVG9nZ2xlIiwic3VibWl0IiwiY29udGVudCIsInVzZXJuYW1lIiwidXNlciIsInVzZXJJZCIsInVpZCIsImNoYXB0ZXJJZCIsInN1Ym1pdEFuc3dlciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInByb3BzIiwiYW5zd2VyZWRUb0lkIiwiYW5zd2VyZWRUbyIsInRhcmdldCIsInZhbHVlIiwibWluUm93cyIsIm1hcmdpbkJvdHRvbSIsImxlbmd0aCIsImNvbW1lbnQiLCJiaW5kIiwidXNlckltYWdlIiwiY3JlYXRlZEF0IiwibW9tZW50IiwidW5peCIsInNlY29uZHMiLCJmb3JtYXQiLCJmcm9tTm93IiwiYyIsInJlc3BvbnNlQm9keSIsInNldFJlc3BvbnNlQm9keSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQVdBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxR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QWUsQ0FBQ3JCLENBQUMsQ0FBQ0ssTUFBRixDQUFTQyxLQUFWLENBQXRCO0FBQUEsT0FGWjtBQUdFLGNBQVEsRUFBRTtBQUFFQyxlQUFPLEVBQUU7QUFBWCxPQUhaO0FBSUUsZUFBUyxFQUFFLElBSmI7QUFLRSxlQUFTLEVBQUUsR0FMYjtBQU1FLGlCQUFXLGFBQU1HLE9BQU8sQ0FBQ2hCLFFBQWQsQ0FOYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsQ0FERixFQVdFLE1BQUMsd0NBQUQ7QUFBSyxRQUFFLEVBQUUsRUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQywyQ0FBRDtBQUNFLGFBQU8sRUFBRUssWUFBWSxDQUFDWSxJQUFiLENBQ1AsSUFETyxFQUVQRCxPQUFPLENBQUN0QixFQUZELEVBR1ArQixDQUFDLENBQUN6QixRQUhLLEVBSVB5QixDQUFDLENBQUN2QixNQUpLLENBRFg7QUFPRSxVQUFJLEVBQUMsU0FQUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLENBWEYsQ0FERixFQTBCRSxNQUFDLDRDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUExQkYsQ0FERCxHQTZCRyxJQW5MTixDQURlO0FBQUEsR0FBaEIsQ0EvQkgsQ0FERjtBQXlORCxDQTNSRDs7R0FBTXRDLFE7O0tBQUFBLFE7QUE2UlNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3N0b3J5L1tpZF0vY2hhcHRlci9bY2hhcGlkXS5kY2RiNmJiM2U1ZDA5NGNlOWUyMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21tZW50LFxyXG4gIFRvb2x0aXAsXHJcbiAgQXZhdGFyLFxyXG4gIElucHV0LFxyXG4gIERpdmlkZXIsXHJcbiAgQnV0dG9uLFxyXG4gIFJvdyxcclxuICBDb2wsXHJcbiAgUG9wY29uZmlybSxcclxufSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xyXG5pbXBvcnQgUmVwb3J0IGZyb20gXCIuLi9jb21tb24vUmVwb3J0XCI7XHJcblxyXG5jb25zdCBDb21tZW50cyA9ICh7XHJcbiAgY29tbWVudHMsXHJcbiAgYXV0aCxcclxuICBkZWxldGVDb21tZW50LFxyXG4gIHN1Ym1pdENvbW1lbnQsXHJcbiAgY2hhcGlkLFxyXG4gIHN0b3J5SWQsXHJcbiAgYXV0aG9ySWQsXHJcbiAgdGl0bGUsXHJcbn0pID0+IHtcclxuICBjb25zdCBbY29tbWVudEJvZHksIHNldENvbW1lbnRCb2R5XSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt0b2dnbGVDb21tZW50Rm9ybSwgc2V0VG9nZ2xlQ29tbWVudEZvcm1dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt0b2dnbGVBbnN3ZXJGb3JtLCBzZXRUb2dnbGVBbnN3ZXJGb3JtXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbY2xpY2tlZEZvcm0sIHNldENsaWNrZWRGb3JtXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCB0b3BDb21tZW50cyA9IGNvbW1lbnRzLmZpbHRlcigoY29tbSkgPT4gIWNvbW0uYW5zd2VyKTtcclxuICBjb25zdCByZXNwb25zZXMgPSBjb21tZW50cy5maWx0ZXIoKGNvbW0pID0+IGNvbW0uYW5zd2VyKTtcclxuICBjb25zdCBhbGxDb21tZW50cyA9IHRvcENvbW1lbnRzLm1hcCgoY29tbSkgPT4ge1xyXG4gICAgbGV0IHJlcyA9IFtdO1xyXG4gICAgcmVzcG9uc2VzLmZvckVhY2goKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIGlmIChyZXNwb25zZS5jb21tZW50QW5zd2VyZWRJZCA9PT0gY29tbS5pZCkge1xyXG4gICAgICAgIHJlcy5wdXNoKHJlc3BvbnNlKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4geyAuLi5jb21tLCByZXNwb25zZXM6IHJlcyB9O1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBjb21tZW50VG9nZ2xlID0gKGlkKSA9PiB7XHJcbiAgICBzZXRDbGlja2VkRm9ybShpZCk7XHJcbiAgICBzZXRUb2dnbGVDb21tZW50Rm9ybSghdG9nZ2xlQ29tbWVudEZvcm0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFuc3dlclRvZ2dsZSA9IChpZCkgPT4ge1xyXG4gICAgc2V0Q2xpY2tlZEZvcm0oaWQpO1xyXG4gICAgc2V0VG9nZ2xlQW5zd2VyRm9ybSghdG9nZ2xlQW5zd2VyRm9ybSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc3VibWl0ID0gKCkgPT4ge1xyXG4gICAgc3VibWl0Q29tbWVudCh7XHJcbiAgICAgIGNvbnRlbnQ6IGNvbW1lbnRCb2R5LFxyXG4gICAgICB1c2VybmFtZTogYXV0aC51c2VyLnVzZXJuYW1lLFxyXG4gICAgICB1c2VySWQ6IGF1dGgudXNlci51aWQsXHJcbiAgICAgIGFuc3dlcjogZmFsc2UsXHJcbiAgICAgIGNoYXB0ZXJJZDogY2hhcGlkLFxyXG4gICAgICBzdG9yeUlkOiBzdG9yeUlkLFxyXG4gICAgfSk7XHJcbiAgICBzZXRDb21tZW50Qm9keShcIlwiKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzdWJtaXRBbnN3ZXIgPSAoaWQsIHVzZXJuYW1lLCB1c2VySWQsIGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHByb3BzLnN1Ym1pdEFuc3dlcih7XHJcbiAgICAgIGNvbW1lbnRBbnN3ZXJlZElkOiBpZCxcclxuICAgICAgYW5zd2VyZWRUb0lkOiB1c2VySWQsXHJcbiAgICAgIGNvbnRlbnQ6IGBAJHt1c2VybmFtZX0gJHtjb21tZW50Qm9keX1gLFxyXG4gICAgICBzdG9yeUlkOiBzdG9yeUlkLFxyXG4gICAgICBjaGFwdGVySWQ6IGNoYXBpZCxcclxuICAgICAgYXV0aG9ySWQ6IGF1dGhvcklkLFxyXG4gICAgICB0aXRsZTogdGl0bGUsXHJcbiAgICAgIGFuc3dlcmVkVG86IHVzZXJuYW1lLFxyXG4gICAgfSk7XHJcblxyXG4gICAgc2V0Q29tbWVudEJvZHkoXCJcIik7XHJcbiAgICBhbnN3ZXJUb2dnbGUoKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29tbWVudHNcIj5cclxuICAgICAge2F1dGgudXNlciA/IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPGgzPkFkZCBhIGNvbW1lbnQ8L2gzPlxyXG4gICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgPENvbCBtZD17MjR9PlxyXG4gICAgICAgICAgICAgIDxJbnB1dC5UZXh0QXJlYVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2NvbW1lbnRCb2R5fVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDb21tZW50Qm9keShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICBhdXRvU2l6ZT17eyBtaW5Sb3dzOiA1IH19XHJcbiAgICAgICAgICAgICAgICBzaG93Q291bnQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBtYXhMZW5ndGg9ezgwMH1cclxuICAgICAgICAgICAgICA+PC9JbnB1dC5UZXh0QXJlYT5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgbWQ9ezI0fT5cclxuICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3N1Ym1pdH0gdHlwZT1cInByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgIENvbW1lbnRcclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPHAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjIwcHhcIiB9fT5cclxuICAgICAgICAgIFlvdSBuZWVkIHRvIGJlIGxvZ2dlZCBpbiB0byBwb3N0IGEgY29tbWVudC57XCIgXCJ9XHJcbiAgICAgICAgICA8TGluayBocmVmPXtcIi9hdXRoXCJ9PlxyXG4gICAgICAgICAgICA8YT5DbGljayBoZXJlIHRvIGxvZ2luIG9yIGNyZWF0ZSBhbiBhY2NvdW50ICE8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICApfVxyXG4gICAgICA8aDM+e2NvbW1lbnRzLmxlbmd0aH0gQ29tbWVudHM8L2gzPlxyXG4gICAgICB7YWxsQ29tbWVudHMubWFwKChjb21tZW50KSA9PiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxDb21tZW50XHJcbiAgICAgICAgICAgIGtleT17Y29tbWVudC5pZH1cclxuICAgICAgICAgICAgYWN0aW9ucz17W1xyXG4gICAgICAgICAgICAgIGF1dGggJiYgYXV0aC51c2VyICYmIChcclxuICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgIGtleT1cImNvbW1lbnQtYmFzaWMtcmVwbHktdG9cIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjb21tZW50VG9nZ2xlLmJpbmQobnVsbCwgY29tbWVudC5pZCl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIFJlcGx5e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgY29tbWVudC51c2VySWQgPT09IGF1dGgudXNlci51aWQgJiYgKFxyXG4gICAgICAgICAgICAgICAgPFBvcGNvbmZpcm1cclxuICAgICAgICAgICAgICAgICAgdGl0bGU9XCJEbyB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBjb21tZW50ID9cIlxyXG4gICAgICAgICAgICAgICAgICBva1RleHQ9XCJZZXNcIlxyXG4gICAgICAgICAgICAgICAgICBjYW5jZWxUZXh0PVwiTm9cIlxyXG4gICAgICAgICAgICAgICAgICBvbkNvbmZpcm09eygpID0+IGRlbGV0ZUNvbW1lbnQoY29tbWVudC5pZCwgY2hhcGlkKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4+RGVsZXRlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9Qb3Bjb25maXJtPlxyXG4gICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgYXV0aC51c2VyICYmIGF1dGgudXNlci51aWQgIT09IGNvbW1lbnQudXNlcklkICYmIChcclxuICAgICAgICAgICAgICAgIDxSZXBvcnQgdHlwZT1cImNvbW1lbnRcIiBkYXRhPXtjb21tZW50fSAvPlxyXG4gICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgIGF1dGhvcj17XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9wcm9maWxlLyR7Y29tbWVudC51c2VySWR9YH0+XHJcbiAgICAgICAgICAgICAgICA8YT57Y29tbWVudC51c2VybmFtZX08L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGF2YXRhcj17XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9wcm9maWxlLyR7Y29tbWVudC51c2VySWR9YH0+XHJcbiAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgPEF2YXRhciBzcmM9e2NvbW1lbnQudXNlckltYWdlfSBhbHQ9e2NvbW1lbnQudXNlcm5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnRlbnQ9ezxwPntjb21tZW50LmNvbnRlbnR9PC9wPn1cclxuICAgICAgICAgICAgZGF0ZXRpbWU9e1xyXG4gICAgICAgICAgICAgIDxUb29sdGlwXHJcbiAgICAgICAgICAgICAgICB0aXRsZT17XHJcbiAgICAgICAgICAgICAgICAgIGNvbW1lbnQuY3JlYXRlZEF0ICYmIHR5cGVvZiBjb21tZW50LmNyZWF0ZWRBdCA9PT0gXCJvYmplY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgID8gbW9tZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC51bml4KGNvbW1lbnQuY3JlYXRlZEF0LnNlY29uZHMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5mb3JtYXQoXCJZWVlZLU1NLUREIEhIOm1tOnNzXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgOiBtb21lbnQoY29tbWVudC5jcmVhdGVkQXQpLmZvcm1hdChcIllZWVktTU0tREQgSEg6bW06c3NcIilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAge2NvbW1lbnQuY3JlYXRlZEF0ICYmIHR5cGVvZiBjb21tZW50LmNyZWF0ZWRBdCA9PT0gXCJvYmplY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgID8gbW9tZW50LnVuaXgoY29tbWVudC5jcmVhdGVkQXQuc2Vjb25kcykuZnJvbU5vdygpXHJcbiAgICAgICAgICAgICAgICAgICAgOiBtb21lbnQoY29tbWVudC5jcmVhdGVkQXQpLmZyb21Ob3coKX1cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2NvbW1lbnQucmVzcG9uc2VzLm1hcCgoYykgPT4gKFxyXG4gICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8Q29tbWVudFxyXG4gICAgICAgICAgICAgICAgICBrZXk9e2MuaWR9XHJcbiAgICAgICAgICAgICAgICAgIGFjdGlvbnM9e1tcclxuICAgICAgICAgICAgICAgICAgICBhdXRoICYmIGF1dGgudXNlciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9XCJjb21tZW50LWJhc2ljLXJlcGx5LXRvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17YW5zd2VyVG9nZ2xlLmJpbmQobnVsbCwgYy5pZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlcGx5e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgY29tbWVudC51c2VySWQgPT09IGF1dGgudXNlci51aWQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPFBvcGNvbmZpcm1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJEbyB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBjb21tZW50ID9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBva1RleHQ9XCJZZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxUZXh0PVwiTm9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNvbmZpcm09eygpID0+IGRlbGV0ZUNvbW1lbnQoYy5pZCwgY2hhcGlkKX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+RGVsZXRlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9Qb3Bjb25maXJtPlxyXG4gICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0aC51c2VyICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAoYXV0aC51c2VyLnVpZCAhPT0gY29tbWVudC51c2VySWQpKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVwb3J0IHR5cGU9XCJjb21tZW50XCIgZGF0YT17Y29tbWVudH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgIGF1dGhvcj17XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9wcm9maWxlLyR7Yy51c2VySWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YT57Yy51c2VybmFtZX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIGF2YXRhcj17XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9wcm9maWxlLyR7Yy51c2VySWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEF2YXRhciBzcmM9e2MudXNlckltYWdlfSBhbHQ9e2MudXNlcm5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9ezxwPntjLmNvbnRlbnR9PC9wPn1cclxuICAgICAgICAgICAgICAgICAgZGF0ZXRpbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgIDxUb29sdGlwXHJcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnQuY3JlYXRlZEF0ICYmIHR5cGVvZiBjLmNyZWF0ZWRBdCA9PT0gXCJvYmplY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gbW9tZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC51bml4KGMuY3JlYXRlZEF0LnNlY29uZHMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mb3JtYXQoXCJZWVlZLU1NLUREIEhIOm1tOnNzXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBtb21lbnQoYy5jcmVhdGVkQXQpLmZvcm1hdChcIllZWVktTU0tREQgSEg6bW06c3NcIilcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NvbW1lbnQuY3JlYXRlZEF0ICYmIHR5cGVvZiBjLmNyZWF0ZWRBdCA9PT0gXCJvYmplY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gbW9tZW50LnVuaXgoYy5jcmVhdGVkQXQuc2Vjb25kcykuZnJvbU5vdygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBtb21lbnQoYy5jcmVhdGVkQXQpLmZyb21Ob3coKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB7Y2xpY2tlZEZvcm0gPT09IGMuaWQgJiYgdG9nZ2xlQW5zd2VyRm9ybSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxDb2wgbWQ9ezI0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0LlRleHRBcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NvbW1lbnRCb2R5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q29tbWVudEJvZHkoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9TaXplPXt7IG1pblJvd3M6IDUgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93Q291bnQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPXs4MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2BAJHtjLnVzZXJuYW1lfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID48L0lucHV0LlRleHRBcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q29sIG1kPXsyNH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtzdWJtaXRBbnN3ZXIuYmluZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21tZW50LmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYy51c2VybmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMudXNlcklkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBDb21tZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvQ29tbWVudD5cclxuXHJcbiAgICAgICAgICB7Y2xpY2tlZEZvcm0gPT09IGNvbW1lbnQuaWQgJiYgdG9nZ2xlQ29tbWVudEZvcm0gPyAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgbWQ9ezI0fT5cclxuICAgICAgICAgICAgICAgICAgPElucHV0LlRleHRBcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Jlc3BvbnNlQm9keX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFJlc3BvbnNlQm9keShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b1NpemU9e3sgbWluUm93czogNSB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHNob3dDb3VudD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9ezgwMH1cclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17YEAke2NvbW1lbnQudXNlcm5hbWV9YH1cclxuICAgICAgICAgICAgICAgICAgPjwvSW5wdXQuVGV4dEFyZWE+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgbWQ9ezI0fT5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3N1Ym1pdEFuc3dlci5iaW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnQuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICBjLnVzZXJuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgYy51c2VySWRcclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIENvbW1lbnRcclxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgIDwvPlxyXG4gICAgICApKX1cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudHM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=