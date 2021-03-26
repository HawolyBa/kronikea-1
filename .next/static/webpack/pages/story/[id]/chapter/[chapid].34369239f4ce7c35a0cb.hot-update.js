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
      storyId: storyId,
      title: title
    });
    setCommentBody("");
  };

  var submitAnswer = function submitAnswer(id, username, userId, e) {
    e.preventDefault();
    submitComment({
      userId: auth.user.uid,
      username: auth.user.username,
      commentAnsweredId: id,
      answeredToId: userId,
      content: "@".concat(username, " ").concat(commentBody),
      storyId: storyId,
      chapterId: chapid,
      authorId: authorId,
      title: title,
      answeredTo: username,
      answer: true
    });
    setCommentBody("");
    answerToggle();
  };

  return __jsx("section", {
    className: "comments",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 5
    }
  }, auth.user ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 11
    }
  }, "Add a comment"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: 24,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
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
      lineNumber: 93,
      columnNumber: 15
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: 24,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    onClick: submit,
    type: "primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 15
    }
  }, "Comment"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 11
    }
  })) : __jsx("p", {
    style: {
      marginBottom: "20px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 9
    }
  }, "You need to be logged in to post a comment.", " ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/auth",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 11
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 13
    }
  }, "Click here to login or create an account !"))), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
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
          lineNumber: 124,
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
          lineNumber: 132,
          columnNumber: 17
        }
      }, __jsx("span", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 19
        }
      }, "Delete")), auth.user && auth.user.uid !== comment.userId && __jsx(_common_Report__WEBPACK_IMPORTED_MODULE_6__["default"], {
        type: "comment",
        data: comment,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 17
        }
      })],
      author: __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/profile/".concat(comment.userId),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 15
        }
      }, __jsx("a", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 17
        }
      }, comment.username)),
      avatar: __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/profile/".concat(comment.userId),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 15
        }
      }, __jsx("a", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 17
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {
        src: comment.userImage,
        alt: comment.username,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 19
        }
      }))),
      content: __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 22
        }
      }, comment.content),
      datetime: __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], {
        title: comment.createdAt && typeof comment.createdAt === "object" ? moment__WEBPACK_IMPORTED_MODULE_5___default.a.unix(comment.createdAt.seconds).format("YYYY-MM-DD HH:mm:ss") : moment__WEBPACK_IMPORTED_MODULE_5___default()(comment.createdAt).format("YYYY-MM-DD HH:mm:ss"),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 15
        }
      }, __jsx("span", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 17
        }
      }, comment.createdAt && typeof comment.createdAt === "object" ? moment__WEBPACK_IMPORTED_MODULE_5___default.a.unix(comment.createdAt.seconds).fromNow() : moment__WEBPACK_IMPORTED_MODULE_5___default()(comment.createdAt).fromNow())),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 11
      }
    }, comment.responses.sort(function (a, b) {
      return new Date(b.createdAt) - new Date(a.createdAt);
    }).map(function (c) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Comment"], {
        key: c.id,
        actions: [auth && auth.user && __jsx("span", {
          key: "comment-basic-reply-to",
          onClick: answerToggle.bind(null, c.id),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 186,
            columnNumber: 25
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
            lineNumber: 194,
            columnNumber: 25
          }
        }, __jsx("span", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 200,
            columnNumber: 27
          }
        }, "Delete")), auth.user && auth.user.uid !== c.userId && __jsx(_common_Report__WEBPACK_IMPORTED_MODULE_6__["default"], {
          type: "comment",
          data: comment,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 204,
            columnNumber: 25
          }
        })],
        author: __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: "/profile/".concat(c.userId),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 208,
            columnNumber: 23
          }
        }, __jsx("a", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 209,
            columnNumber: 25
          }
        }, c.username)),
        avatar: __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: "/profile/".concat(c.userId),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 213,
            columnNumber: 23
          }
        }, __jsx("a", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 214,
            columnNumber: 25
          }
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {
          src: c.userImage,
          alt: c.username,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 215,
            columnNumber: 27
          }
        }))),
        content: __jsx("p", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 219,
            columnNumber: 30
          }
        }, c.content),
        datetime: __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], {
          title: comment.createdAt && typeof c.createdAt === "object" ? moment__WEBPACK_IMPORTED_MODULE_5___default.a.unix(c.createdAt.seconds).format("YYYY-MM-DD HH:mm:ss") : moment__WEBPACK_IMPORTED_MODULE_5___default()(c.createdAt).format("YYYY-MM-DD HH:mm:ss"),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 221,
            columnNumber: 23
          }
        }, __jsx("span", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 230,
            columnNumber: 25
          }
        }, comment.createdAt && typeof c.createdAt === "object" ? moment__WEBPACK_IMPORTED_MODULE_5___default.a.unix(c.createdAt.seconds).fromNow() : moment__WEBPACK_IMPORTED_MODULE_5___default()(c.createdAt).fromNow())),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 19
        }
      }), clickedForm === c.id && toggleAnswerForm && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240,
          columnNumber: 23
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        md: 24,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241,
          columnNumber: 25
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
          lineNumber: 242,
          columnNumber: 27
        }
      })), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        md: 24,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251,
          columnNumber: 25
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        onClick: submitAnswer.bind(null, comment.id, c.username, c.userId),
        type: "primary",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252,
          columnNumber: 27
        }
      }, "Comment"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265,
          columnNumber: 23
        }
      })));
    })), clickedForm === comment.id && toggleCommentForm ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 274,
        columnNumber: 15
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      md: 24,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 275,
        columnNumber: 17
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
      placeholder: "@".concat(comment.username),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 276,
        columnNumber: 19
      }
    })), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      md: 24,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 285,
        columnNumber: 17
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      onClick: submitAnswer.bind(null, comment.id, comment.username, comment.userId),
      type: "primary",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 286,
        columnNumber: 19
      }
    }, "Comment"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 299,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jaGFwdGVyL0NvbW1lbnRzLmpzIl0sIm5hbWVzIjpbIkNvbW1lbnRzIiwiY29tbWVudHMiLCJhdXRoIiwiZGVsZXRlQ29tbWVudCIsInN1Ym1pdENvbW1lbnQiLCJjaGFwaWQiLCJzdG9yeUlkIiwiYXV0aG9ySWQiLCJ0aXRsZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJjb21tZW50Qm9keSIsInNldENvbW1lbnRCb2R5IiwidG9nZ2xlQ29tbWVudEZvcm0iLCJzZXRUb2dnbGVDb21tZW50Rm9ybSIsInRvZ2dsZUFuc3dlckZvcm0iLCJzZXRUb2dnbGVBbnN3ZXJGb3JtIiwiY2xpY2tlZEZvcm0iLCJzZXRDbGlja2VkRm9ybSIsInRvcENvbW1lbnRzIiwiZmlsdGVyIiwiY29tbSIsImFuc3dlciIsInJlc3BvbnNlcyIsImFsbENvbW1lbnRzIiwibWFwIiwicmVzIiwiZm9yRWFjaCIsInJlc3BvbnNlIiwiY29tbWVudEFuc3dlcmVkSWQiLCJpZCIsInB1c2giLCJjb21tZW50VG9nZ2xlIiwiYW5zd2VyVG9nZ2xlIiwic3VibWl0IiwiY29udGVudCIsInVzZXJuYW1lIiwidXNlciIsInVzZXJJZCIsInVpZCIsImNoYXB0ZXJJZCIsInN1Ym1pdEFuc3dlciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImFuc3dlcmVkVG9JZCIsImFuc3dlcmVkVG8iLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1pblJvd3MiLCJtYXJnaW5Cb3R0b20iLCJsZW5ndGgiLCJjb21tZW50IiwiYmluZCIsInVzZXJJbWFnZSIsImNyZWF0ZWRBdCIsIm1vbWVudCIsInVuaXgiLCJzZWNvbmRzIiwiZm9ybWF0IiwiZnJvbU5vdyIsInNvcnQiLCJhIiwiYiIsIkRhdGUiLCJjIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBV0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BU1g7QUFBQTs7QUFBQSxNQVJKQyxRQVFJLFFBUkpBLFFBUUk7QUFBQSxNQVBKQyxJQU9JLFFBUEpBLElBT0k7QUFBQSxNQU5KQyxhQU1JLFFBTkpBLGFBTUk7QUFBQSxNQUxKQyxhQUtJLFFBTEpBLGFBS0k7QUFBQSxNQUpKQyxNQUlJLFFBSkpBLE1BSUk7QUFBQSxNQUhKQyxPQUdJLFFBSEpBLE9BR0k7QUFBQSxNQUZKQyxRQUVJLFFBRkpBLFFBRUk7QUFBQSxNQURKQyxLQUNJLFFBREpBLEtBQ0k7O0FBQUEsd0JBQ2tDQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsRUFBZixDQURsQztBQUFBO0FBQUEsTUFDR0MsV0FESDtBQUFBLE1BQ2dCQyxjQURoQjs7QUFBQSx5QkFFOENILDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBRjlDO0FBQUE7QUFBQSxNQUVHRyxpQkFGSDtBQUFBLE1BRXNCQyxvQkFGdEI7O0FBQUEseUJBRzRDTCw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsS0FBZixDQUg1QztBQUFBO0FBQUEsTUFHR0ssZ0JBSEg7QUFBQSxNQUdxQkMsbUJBSHJCOztBQUFBLHlCQUlrQ1AsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEVBQWYsQ0FKbEM7QUFBQTtBQUFBLE1BSUdPLFdBSkg7QUFBQSxNQUlnQkMsY0FKaEI7O0FBTUosTUFBTUMsV0FBVyxHQUFHbEIsUUFBUSxDQUFDbUIsTUFBVCxDQUFnQixVQUFDQyxJQUFEO0FBQUEsV0FBVSxDQUFDQSxJQUFJLENBQUNDLE1BQWhCO0FBQUEsR0FBaEIsQ0FBcEI7QUFDQSxNQUFNQyxTQUFTLEdBQUd0QixRQUFRLENBQUNtQixNQUFULENBQWdCLFVBQUNDLElBQUQ7QUFBQSxXQUFVQSxJQUFJLENBQUNDLE1BQWY7QUFBQSxHQUFoQixDQUFsQjtBQUNBLE1BQU1FLFdBQVcsR0FBR0wsV0FBVyxDQUFDTSxHQUFaLENBQWdCLFVBQUNKLElBQUQsRUFBVTtBQUM1QyxRQUFJSyxHQUFHLEdBQUcsRUFBVjtBQUNBSCxhQUFTLENBQUNJLE9BQVYsQ0FBa0IsVUFBQ0MsUUFBRCxFQUFjO0FBQzlCLFVBQUlBLFFBQVEsQ0FBQ0MsaUJBQVQsS0FBK0JSLElBQUksQ0FBQ1MsRUFBeEMsRUFBNEM7QUFDMUNKLFdBQUcsQ0FBQ0ssSUFBSixDQUFTSCxRQUFUO0FBQ0Q7QUFDRixLQUpEO0FBS0EsMkNBQVlQLElBQVo7QUFBa0JFLGVBQVMsRUFBRUc7QUFBN0I7QUFDRCxHQVJtQixDQUFwQjs7QUFVQSxNQUFNTSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNGLEVBQUQsRUFBUTtBQUM1Qlosa0JBQWMsQ0FBQ1ksRUFBRCxDQUFkO0FBQ0FoQix3QkFBb0IsQ0FBQyxDQUFDRCxpQkFBRixDQUFwQjtBQUNELEdBSEQ7O0FBS0EsTUFBTW9CLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNILEVBQUQsRUFBUTtBQUMzQlosa0JBQWMsQ0FBQ1ksRUFBRCxDQUFkO0FBQ0FkLHVCQUFtQixDQUFDLENBQUNELGdCQUFGLENBQW5CO0FBQ0QsR0FIRDs7QUFLQSxNQUFNbUIsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUNuQjlCLGlCQUFhLENBQUM7QUFDWitCLGFBQU8sRUFBRXhCLFdBREc7QUFFWnlCLGNBQVEsRUFBRWxDLElBQUksQ0FBQ21DLElBQUwsQ0FBVUQsUUFGUjtBQUdaRSxZQUFNLEVBQUVwQyxJQUFJLENBQUNtQyxJQUFMLENBQVVFLEdBSE47QUFJWmpCLFlBQU0sRUFBRSxLQUpJO0FBS1prQixlQUFTLEVBQUVuQyxNQUxDO0FBTVpDLGFBQU8sRUFBRUEsT0FORztBQU9aRSxXQUFLLEVBQUxBO0FBUFksS0FBRCxDQUFiO0FBU0FJLGtCQUFjLENBQUMsRUFBRCxDQUFkO0FBQ0QsR0FYRDs7QUFhQSxNQUFNNkIsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ1gsRUFBRCxFQUFLTSxRQUFMLEVBQWVFLE1BQWYsRUFBdUJJLENBQXZCLEVBQTZCO0FBQ2hEQSxLQUFDLENBQUNDLGNBQUY7QUFDQXZDLGlCQUFhLENBQUM7QUFDWmtDLFlBQU0sRUFBRXBDLElBQUksQ0FBQ21DLElBQUwsQ0FBVUUsR0FETjtBQUVaSCxjQUFRLEVBQUVsQyxJQUFJLENBQUNtQyxJQUFMLENBQVVELFFBRlI7QUFHWlAsdUJBQWlCLEVBQUVDLEVBSFA7QUFJWmMsa0JBQVksRUFBRU4sTUFKRjtBQUtaSCxhQUFPLGFBQU1DLFFBQU4sY0FBa0J6QixXQUFsQixDQUxLO0FBTVpMLGFBQU8sRUFBRUEsT0FORztBQU9aa0MsZUFBUyxFQUFFbkMsTUFQQztBQVFaRSxjQUFRLEVBQUVBLFFBUkU7QUFTWkMsV0FBSyxFQUFFQSxLQVRLO0FBVVpxQyxnQkFBVSxFQUFFVCxRQVZBO0FBV1pkLFlBQU0sRUFBRTtBQVhJLEtBQUQsQ0FBYjtBQWNBVixrQkFBYyxDQUFDLEVBQUQsQ0FBZDtBQUNBcUIsZ0JBQVk7QUFDYixHQWxCRDs7QUFvQkEsU0FDRTtBQUFTLGFBQVMsRUFBQyxVQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0cvQixJQUFJLENBQUNtQyxJQUFMLEdBQ0MsbUVBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixFQUVFLE1BQUMsd0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0NBQUQ7QUFBSyxNQUFFLEVBQUUsRUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywwQ0FBRCxDQUFPLFFBQVA7QUFDRSxTQUFLLEVBQUUxQixXQURUO0FBRUUsWUFBUSxFQUFFLGtCQUFDK0IsQ0FBRDtBQUFBLGFBQU85QixjQUFjLENBQUM4QixDQUFDLENBQUNJLE1BQUYsQ0FBU0MsS0FBVixDQUFyQjtBQUFBLEtBRlo7QUFHRSxZQUFRLEVBQUU7QUFBRUMsYUFBTyxFQUFFO0FBQVgsS0FIWjtBQUlFLGFBQVMsRUFBRSxJQUpiO0FBS0UsYUFBUyxFQUFFLEdBTGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFVRSxNQUFDLHdDQUFEO0FBQUssTUFBRSxFQUFFLEVBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMkNBQUQ7QUFBUSxXQUFPLEVBQUVkLE1BQWpCO0FBQXlCLFFBQUksRUFBQyxTQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsQ0FWRixDQUZGLEVBa0JFLE1BQUMsNENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWxCRixDQURELEdBc0JDO0FBQUcsU0FBSyxFQUFFO0FBQUVlLGtCQUFZLEVBQUU7QUFBaEIsS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9EQUM4QyxHQUQ5QyxFQUVFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUUsT0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrREFERixDQUZGLENBdkJKLEVBOEJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS2hELFFBQVEsQ0FBQ2lELE1BQWQsY0E5QkYsRUErQkcxQixXQUFXLENBQUNDLEdBQVosQ0FBZ0IsVUFBQzBCLE9BQUQ7QUFBQSxXQUNmLG1FQUNFLE1BQUMsNENBQUQ7QUFDRSxTQUFHLEVBQUVBLE9BQU8sQ0FBQ3JCLEVBRGY7QUFFRSxhQUFPLEVBQUUsQ0FDUDVCLElBQUksSUFBSUEsSUFBSSxDQUFDbUMsSUFBYixJQUNFO0FBQ0UsV0FBRyxFQUFDLHdCQUROO0FBRUUsZUFBTyxFQUFFTCxhQUFhLENBQUNvQixJQUFkLENBQW1CLElBQW5CLEVBQXlCRCxPQUFPLENBQUNyQixFQUFqQyxDQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSVEsR0FKUixDQUZLLEVBU1BxQixPQUFPLENBQUNiLE1BQVIsS0FBbUJwQyxJQUFJLENBQUNtQyxJQUFMLENBQVVFLEdBQTdCLElBQ0UsTUFBQywrQ0FBRDtBQUNFLGFBQUssRUFBQyxzQ0FEUjtBQUVFLGNBQU0sRUFBQyxLQUZUO0FBR0Usa0JBQVUsRUFBQyxJQUhiO0FBSUUsaUJBQVMsRUFBRTtBQUFBLGlCQUFNcEMsYUFBYSxDQUFDZ0QsT0FBTyxDQUFDckIsRUFBVCxFQUFhekIsTUFBYixDQUFuQjtBQUFBLFNBSmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTkYsQ0FWSyxFQW1CUEgsSUFBSSxDQUFDbUMsSUFBTCxJQUFhbkMsSUFBSSxDQUFDbUMsSUFBTCxDQUFVRSxHQUFWLEtBQWtCWSxPQUFPLENBQUNiLE1BQXZDLElBQ0UsTUFBQyxzREFBRDtBQUFRLFlBQUksRUFBQyxTQUFiO0FBQXVCLFlBQUksRUFBRWEsT0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQXBCSyxDQUZYO0FBeUJFLFlBQU0sRUFDSixNQUFDLGdEQUFEO0FBQU0sWUFBSSxxQkFBY0EsT0FBTyxDQUFDYixNQUF0QixDQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUlhLE9BQU8sQ0FBQ2YsUUFBWixDQURGLENBMUJKO0FBOEJFLFlBQU0sRUFDSixNQUFDLGdEQUFEO0FBQU0sWUFBSSxxQkFBY2UsT0FBTyxDQUFDYixNQUF0QixDQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQywyQ0FBRDtBQUFRLFdBQUcsRUFBRWEsT0FBTyxDQUFDRSxTQUFyQjtBQUFnQyxXQUFHLEVBQUVGLE9BQU8sQ0FBQ2YsUUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGLENBREYsQ0EvQko7QUFxQ0UsYUFBTyxFQUFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBSWUsT0FBTyxDQUFDaEIsT0FBWixDQXJDWDtBQXNDRSxjQUFRLEVBQ04sTUFBQyw0Q0FBRDtBQUNFLGFBQUssRUFDSGdCLE9BQU8sQ0FBQ0csU0FBUixJQUFxQixPQUFPSCxPQUFPLENBQUNHLFNBQWYsS0FBNkIsUUFBbEQsR0FDSUMsNkNBQU0sQ0FDSEMsSUFESCxDQUNRTCxPQUFPLENBQUNHLFNBQVIsQ0FBa0JHLE9BRDFCLEVBRUdDLE1BRkgsQ0FFVSxxQkFGVixDQURKLEdBSUlILDZDQUFNLENBQUNKLE9BQU8sQ0FBQ0csU0FBVCxDQUFOLENBQTBCSSxNQUExQixDQUFpQyxxQkFBakMsQ0FOUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBU0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNHUCxPQUFPLENBQUNHLFNBQVIsSUFBcUIsT0FBT0gsT0FBTyxDQUFDRyxTQUFmLEtBQTZCLFFBQWxELEdBQ0dDLDZDQUFNLENBQUNDLElBQVAsQ0FBWUwsT0FBTyxDQUFDRyxTQUFSLENBQWtCRyxPQUE5QixFQUF1Q0UsT0FBdkMsRUFESCxHQUVHSiw2Q0FBTSxDQUFDSixPQUFPLENBQUNHLFNBQVQsQ0FBTixDQUEwQkssT0FBMUIsRUFITixDQVRGLENBdkNKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0F3REdSLE9BQU8sQ0FBQzVCLFNBQVIsQ0FDRXFDLElBREYsQ0FDTyxVQUFDQyxDQUFELEVBQUlDLENBQUosRUFBVTtBQUNkLGFBQU8sSUFBSUMsSUFBSixDQUFTRCxDQUFDLENBQUNSLFNBQVgsSUFBd0IsSUFBSVMsSUFBSixDQUFTRixDQUFDLENBQUNQLFNBQVgsQ0FBL0I7QUFDRCxLQUhGLEVBSUU3QixHQUpGLENBSU0sVUFBQ3VDLENBQUQ7QUFBQSxhQUNILG1FQUNFLE1BQUMsNENBQUQ7QUFDRSxXQUFHLEVBQUVBLENBQUMsQ0FBQ2xDLEVBRFQ7QUFFRSxlQUFPLEVBQUUsQ0FDUDVCLElBQUksSUFBSUEsSUFBSSxDQUFDbUMsSUFBYixJQUNFO0FBQ0UsYUFBRyxFQUFDLHdCQUROO0FBRUUsaUJBQU8sRUFBRUosWUFBWSxDQUFDbUIsSUFBYixDQUFrQixJQUFsQixFQUF3QlksQ0FBQyxDQUFDbEMsRUFBMUIsQ0FGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUlRLEdBSlIsQ0FGSyxFQVNQcUIsT0FBTyxDQUFDYixNQUFSLEtBQW1CcEMsSUFBSSxDQUFDbUMsSUFBTCxDQUFVRSxHQUE3QixJQUNFLE1BQUMsK0NBQUQ7QUFDRSxlQUFLLEVBQUMsc0NBRFI7QUFFRSxnQkFBTSxFQUFDLEtBRlQ7QUFHRSxvQkFBVSxFQUFDLElBSGI7QUFJRSxtQkFBUyxFQUFFO0FBQUEsbUJBQU1wQyxhQUFhLENBQUM2RCxDQUFDLENBQUNsQyxFQUFILEVBQU96QixNQUFQLENBQW5CO0FBQUEsV0FKYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFORixDQVZLLEVBbUJQSCxJQUFJLENBQUNtQyxJQUFMLElBQWFuQyxJQUFJLENBQUNtQyxJQUFMLENBQVVFLEdBQVYsS0FBa0J5QixDQUFDLENBQUMxQixNQUFqQyxJQUNFLE1BQUMsc0RBQUQ7QUFBUSxjQUFJLEVBQUMsU0FBYjtBQUF1QixjQUFJLEVBQUVhLE9BQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFwQkssQ0FGWDtBQXlCRSxjQUFNLEVBQ0osTUFBQyxnREFBRDtBQUFNLGNBQUkscUJBQWNhLENBQUMsQ0FBQzFCLE1BQWhCLENBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBSTBCLENBQUMsQ0FBQzVCLFFBQU4sQ0FERixDQTFCSjtBQThCRSxjQUFNLEVBQ0osTUFBQyxnREFBRDtBQUFNLGNBQUkscUJBQWM0QixDQUFDLENBQUMxQixNQUFoQixDQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0UsTUFBQywyQ0FBRDtBQUFRLGFBQUcsRUFBRTBCLENBQUMsQ0FBQ1gsU0FBZjtBQUEwQixhQUFHLEVBQUVXLENBQUMsQ0FBQzVCLFFBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERixDQURGLENBL0JKO0FBcUNFLGVBQU8sRUFBRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQUk0QixDQUFDLENBQUM3QixPQUFOLENBckNYO0FBc0NFLGdCQUFRLEVBQ04sTUFBQyw0Q0FBRDtBQUNFLGVBQUssRUFDSGdCLE9BQU8sQ0FBQ0csU0FBUixJQUFxQixPQUFPVSxDQUFDLENBQUNWLFNBQVQsS0FBdUIsUUFBNUMsR0FDSUMsNkNBQU0sQ0FDSEMsSUFESCxDQUNRUSxDQUFDLENBQUNWLFNBQUYsQ0FBWUcsT0FEcEIsRUFFR0MsTUFGSCxDQUVVLHFCQUZWLENBREosR0FJSUgsNkNBQU0sQ0FBQ1MsQ0FBQyxDQUFDVixTQUFILENBQU4sQ0FBb0JJLE1BQXBCLENBQTJCLHFCQUEzQixDQU5SO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FTRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0dQLE9BQU8sQ0FBQ0csU0FBUixJQUFxQixPQUFPVSxDQUFDLENBQUNWLFNBQVQsS0FBdUIsUUFBNUMsR0FDR0MsNkNBQU0sQ0FBQ0MsSUFBUCxDQUFZUSxDQUFDLENBQUNWLFNBQUYsQ0FBWUcsT0FBeEIsRUFBaUNFLE9BQWpDLEVBREgsR0FFR0osNkNBQU0sQ0FBQ1MsQ0FBQyxDQUFDVixTQUFILENBQU4sQ0FBb0JLLE9BQXBCLEVBSE4sQ0FURixDQXZDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREYsRUF5REcxQyxXQUFXLEtBQUsrQyxDQUFDLENBQUNsQyxFQUFsQixJQUF3QmYsZ0JBQXhCLElBQ0MsbUVBQ0UsTUFBQyx3Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyx3Q0FBRDtBQUFLLFVBQUUsRUFBRSxFQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLDBDQUFELENBQU8sUUFBUDtBQUNFLGFBQUssRUFBRUosV0FEVDtBQUVFLGdCQUFRLEVBQUUsa0JBQUMrQixDQUFEO0FBQUEsaUJBQU85QixjQUFjLENBQUM4QixDQUFDLENBQUNJLE1BQUYsQ0FBU0MsS0FBVixDQUFyQjtBQUFBLFNBRlo7QUFHRSxnQkFBUSxFQUFFO0FBQUVDLGlCQUFPLEVBQUU7QUFBWCxTQUhaO0FBSUUsaUJBQVMsRUFBRSxJQUpiO0FBS0UsaUJBQVMsRUFBRSxHQUxiO0FBTUUsbUJBQVcsYUFBTWdCLENBQUMsQ0FBQzVCLFFBQVIsQ0FOYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREYsQ0FERixFQVdFLE1BQUMsd0NBQUQ7QUFBSyxVQUFFLEVBQUUsRUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQywyQ0FBRDtBQUNFLGVBQU8sRUFBRUssWUFBWSxDQUFDVyxJQUFiLENBQ1AsSUFETyxFQUVQRCxPQUFPLENBQUNyQixFQUZELEVBR1BrQyxDQUFDLENBQUM1QixRQUhLLEVBSVA0QixDQUFDLENBQUMxQixNQUpLLENBRFg7QUFPRSxZQUFJLEVBQUMsU0FQUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLENBWEYsQ0FERixFQTBCRSxNQUFDLDRDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUExQkYsQ0ExREosQ0FERztBQUFBLEtBSk4sQ0F4REgsQ0FERixFQXlKR3JCLFdBQVcsS0FBS2tDLE9BQU8sQ0FBQ3JCLEVBQXhCLElBQThCakIsaUJBQTlCLEdBQ0MsbUVBQ0UsTUFBQyx3Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyx3Q0FBRDtBQUFLLFFBQUUsRUFBRSxFQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLDBDQUFELENBQU8sUUFBUDtBQUNFLFdBQUssRUFBRUYsV0FEVDtBQUVFLGNBQVEsRUFBRSxrQkFBQytCLENBQUQ7QUFBQSxlQUFPOUIsY0FBYyxDQUFDOEIsQ0FBQyxDQUFDSSxNQUFGLENBQVNDLEtBQVYsQ0FBckI7QUFBQSxPQUZaO0FBR0UsY0FBUSxFQUFFO0FBQUVDLGVBQU8sRUFBRTtBQUFYLE9BSFo7QUFJRSxlQUFTLEVBQUUsSUFKYjtBQUtFLGVBQVMsRUFBRSxHQUxiO0FBTUUsaUJBQVcsYUFBTUcsT0FBTyxDQUFDZixRQUFkLENBTmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBREYsRUFXRSxNQUFDLHdDQUFEO0FBQUssUUFBRSxFQUFFLEVBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsMkNBQUQ7QUFDRSxhQUFPLEVBQUVLLFlBQVksQ0FBQ1csSUFBYixDQUNQLElBRE8sRUFFUEQsT0FBTyxDQUFDckIsRUFGRCxFQUdQcUIsT0FBTyxDQUFDZixRQUhELEVBSVBlLE9BQU8sQ0FBQ2IsTUFKRCxDQURYO0FBT0UsVUFBSSxFQUFDLFNBUFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixDQVhGLENBREYsRUEwQkUsTUFBQyw0Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BMUJGLENBREQsR0E2QkcsSUF0TE4sQ0FEZTtBQUFBLEdBQWhCLENBL0JILENBREY7QUE0TkQsQ0FsU0Q7O0dBQU10QyxROztLQUFBQSxRO0FBb1NTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zdG9yeS9baWRdL2NoYXB0ZXIvW2NoYXBpZF0uMzQzNjkyMzlmNGNlN2MzNWEwY2IuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tbWVudCxcclxuICBUb29sdGlwLFxyXG4gIEF2YXRhcixcclxuICBJbnB1dCxcclxuICBEaXZpZGVyLFxyXG4gIEJ1dHRvbixcclxuICBSb3csXHJcbiAgQ29sLFxyXG4gIFBvcGNvbmZpcm0sXHJcbn0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcclxuaW1wb3J0IFJlcG9ydCBmcm9tIFwiLi4vY29tbW9uL1JlcG9ydFwiO1xyXG5cclxuY29uc3QgQ29tbWVudHMgPSAoe1xyXG4gIGNvbW1lbnRzLFxyXG4gIGF1dGgsXHJcbiAgZGVsZXRlQ29tbWVudCxcclxuICBzdWJtaXRDb21tZW50LFxyXG4gIGNoYXBpZCxcclxuICBzdG9yeUlkLFxyXG4gIGF1dGhvcklkLFxyXG4gIHRpdGxlLFxyXG59KSA9PiB7XHJcbiAgY29uc3QgW2NvbW1lbnRCb2R5LCBzZXRDb21tZW50Qm9keV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbdG9nZ2xlQ29tbWVudEZvcm0sIHNldFRvZ2dsZUNvbW1lbnRGb3JtXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdG9nZ2xlQW5zd2VyRm9ybSwgc2V0VG9nZ2xlQW5zd2VyRm9ybV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2NsaWNrZWRGb3JtLCBzZXRDbGlja2VkRm9ybV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgdG9wQ29tbWVudHMgPSBjb21tZW50cy5maWx0ZXIoKGNvbW0pID0+ICFjb21tLmFuc3dlcik7XHJcbiAgY29uc3QgcmVzcG9uc2VzID0gY29tbWVudHMuZmlsdGVyKChjb21tKSA9PiBjb21tLmFuc3dlcik7XHJcbiAgY29uc3QgYWxsQ29tbWVudHMgPSB0b3BDb21tZW50cy5tYXAoKGNvbW0pID0+IHtcclxuICAgIGxldCByZXMgPSBbXTtcclxuICAgIHJlc3BvbnNlcy5mb3JFYWNoKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBpZiAocmVzcG9uc2UuY29tbWVudEFuc3dlcmVkSWQgPT09IGNvbW0uaWQpIHtcclxuICAgICAgICByZXMucHVzaChyZXNwb25zZSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHsgLi4uY29tbSwgcmVzcG9uc2VzOiByZXMgfTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgY29tbWVudFRvZ2dsZSA9IChpZCkgPT4ge1xyXG4gICAgc2V0Q2xpY2tlZEZvcm0oaWQpO1xyXG4gICAgc2V0VG9nZ2xlQ29tbWVudEZvcm0oIXRvZ2dsZUNvbW1lbnRGb3JtKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBhbnN3ZXJUb2dnbGUgPSAoaWQpID0+IHtcclxuICAgIHNldENsaWNrZWRGb3JtKGlkKTtcclxuICAgIHNldFRvZ2dsZUFuc3dlckZvcm0oIXRvZ2dsZUFuc3dlckZvcm0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHN1Ym1pdCA9ICgpID0+IHtcclxuICAgIHN1Ym1pdENvbW1lbnQoe1xyXG4gICAgICBjb250ZW50OiBjb21tZW50Qm9keSxcclxuICAgICAgdXNlcm5hbWU6IGF1dGgudXNlci51c2VybmFtZSxcclxuICAgICAgdXNlcklkOiBhdXRoLnVzZXIudWlkLFxyXG4gICAgICBhbnN3ZXI6IGZhbHNlLFxyXG4gICAgICBjaGFwdGVySWQ6IGNoYXBpZCxcclxuICAgICAgc3RvcnlJZDogc3RvcnlJZCxcclxuICAgICAgdGl0bGUsXHJcbiAgICB9KTtcclxuICAgIHNldENvbW1lbnRCb2R5KFwiXCIpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHN1Ym1pdEFuc3dlciA9IChpZCwgdXNlcm5hbWUsIHVzZXJJZCwgZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc3VibWl0Q29tbWVudCh7XHJcbiAgICAgIHVzZXJJZDogYXV0aC51c2VyLnVpZCxcclxuICAgICAgdXNlcm5hbWU6IGF1dGgudXNlci51c2VybmFtZSxcclxuICAgICAgY29tbWVudEFuc3dlcmVkSWQ6IGlkLFxyXG4gICAgICBhbnN3ZXJlZFRvSWQ6IHVzZXJJZCxcclxuICAgICAgY29udGVudDogYEAke3VzZXJuYW1lfSAke2NvbW1lbnRCb2R5fWAsXHJcbiAgICAgIHN0b3J5SWQ6IHN0b3J5SWQsXHJcbiAgICAgIGNoYXB0ZXJJZDogY2hhcGlkLFxyXG4gICAgICBhdXRob3JJZDogYXV0aG9ySWQsXHJcbiAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAgICAgYW5zd2VyZWRUbzogdXNlcm5hbWUsXHJcbiAgICAgIGFuc3dlcjogdHJ1ZSxcclxuICAgIH0pO1xyXG5cclxuICAgIHNldENvbW1lbnRCb2R5KFwiXCIpO1xyXG4gICAgYW5zd2VyVG9nZ2xlKCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbW1lbnRzXCI+XHJcbiAgICAgIHthdXRoLnVzZXIgPyAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxoMz5BZGQgYSBjb21tZW50PC9oMz5cclxuICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgIDxDb2wgbWQ9ezI0fT5cclxuICAgICAgICAgICAgICA8SW5wdXQuVGV4dEFyZWFcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtjb21tZW50Qm9keX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q29tbWVudEJvZHkoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgYXV0b1NpemU9e3sgbWluUm93czogNSB9fVxyXG4gICAgICAgICAgICAgICAgc2hvd0NvdW50PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgbWF4TGVuZ3RoPXs4MDB9XHJcbiAgICAgICAgICAgICAgPjwvSW5wdXQuVGV4dEFyZWE+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIG1kPXsyNH0+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtzdWJtaXR9IHR5cGU9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICBDb21tZW50XHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxwIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIyMHB4XCIgfX0+XHJcbiAgICAgICAgICBZb3UgbmVlZCB0byBiZSBsb2dnZWQgaW4gdG8gcG9zdCBhIGNvbW1lbnQue1wiIFwifVxyXG4gICAgICAgICAgPExpbmsgaHJlZj17XCIvYXV0aFwifT5cclxuICAgICAgICAgICAgPGE+Q2xpY2sgaGVyZSB0byBsb2dpbiBvciBjcmVhdGUgYW4gYWNjb3VudCAhPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgKX1cclxuICAgICAgPGgzPntjb21tZW50cy5sZW5ndGh9IENvbW1lbnRzPC9oMz5cclxuICAgICAge2FsbENvbW1lbnRzLm1hcCgoY29tbWVudCkgPT4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8Q29tbWVudFxyXG4gICAgICAgICAgICBrZXk9e2NvbW1lbnQuaWR9XHJcbiAgICAgICAgICAgIGFjdGlvbnM9e1tcclxuICAgICAgICAgICAgICBhdXRoICYmIGF1dGgudXNlciAmJiAoXHJcbiAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICBrZXk9XCJjb21tZW50LWJhc2ljLXJlcGx5LXRvXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17Y29tbWVudFRvZ2dsZS5iaW5kKG51bGwsIGNvbW1lbnQuaWQpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBSZXBseXtcIiBcIn1cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgIGNvbW1lbnQudXNlcklkID09PSBhdXRoLnVzZXIudWlkICYmIChcclxuICAgICAgICAgICAgICAgIDxQb3Bjb25maXJtXHJcbiAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRG8geW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgY29tbWVudCA/XCJcclxuICAgICAgICAgICAgICAgICAgb2tUZXh0PVwiWWVzXCJcclxuICAgICAgICAgICAgICAgICAgY2FuY2VsVGV4dD1cIk5vXCJcclxuICAgICAgICAgICAgICAgICAgb25Db25maXJtPXsoKSA9PiBkZWxldGVDb21tZW50KGNvbW1lbnQuaWQsIGNoYXBpZCl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPkRlbGV0ZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvUG9wY29uZmlybT5cclxuICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgIGF1dGgudXNlciAmJiBhdXRoLnVzZXIudWlkICE9PSBjb21tZW50LnVzZXJJZCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8UmVwb3J0IHR5cGU9XCJjb21tZW50XCIgZGF0YT17Y29tbWVudH0gLz5cclxuICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICBhdXRob3I9e1xyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcHJvZmlsZS8ke2NvbW1lbnQudXNlcklkfWB9PlxyXG4gICAgICAgICAgICAgICAgPGE+e2NvbW1lbnQudXNlcm5hbWV9PC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhdmF0YXI9e1xyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcHJvZmlsZS8ke2NvbW1lbnQudXNlcklkfWB9PlxyXG4gICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgIDxBdmF0YXIgc3JjPXtjb21tZW50LnVzZXJJbWFnZX0gYWx0PXtjb21tZW50LnVzZXJuYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb250ZW50PXs8cD57Y29tbWVudC5jb250ZW50fTwvcD59XHJcbiAgICAgICAgICAgIGRhdGV0aW1lPXtcclxuICAgICAgICAgICAgICA8VG9vbHRpcFxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e1xyXG4gICAgICAgICAgICAgICAgICBjb21tZW50LmNyZWF0ZWRBdCAmJiB0eXBlb2YgY29tbWVudC5jcmVhdGVkQXQgPT09IFwib2JqZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICA/IG1vbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudW5peChjb21tZW50LmNyZWF0ZWRBdC5zZWNvbmRzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZm9ybWF0KFwiWVlZWS1NTS1ERCBISDptbTpzc1wiKVxyXG4gICAgICAgICAgICAgICAgICAgIDogbW9tZW50KGNvbW1lbnQuY3JlYXRlZEF0KS5mb3JtYXQoXCJZWVlZLU1NLUREIEhIOm1tOnNzXCIpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgIHtjb21tZW50LmNyZWF0ZWRBdCAmJiB0eXBlb2YgY29tbWVudC5jcmVhdGVkQXQgPT09IFwib2JqZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICA/IG1vbWVudC51bml4KGNvbW1lbnQuY3JlYXRlZEF0LnNlY29uZHMpLmZyb21Ob3coKVxyXG4gICAgICAgICAgICAgICAgICAgIDogbW9tZW50KGNvbW1lbnQuY3JlYXRlZEF0KS5mcm9tTm93KCl9XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtjb21tZW50LnJlc3BvbnNlc1xyXG4gICAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoYi5jcmVhdGVkQXQpIC0gbmV3IERhdGUoYS5jcmVhdGVkQXQpO1xyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgLm1hcCgoYykgPT4gKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgPENvbW1lbnRcclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2MuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9ucz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgYXV0aCAmJiBhdXRoLnVzZXIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleT1cImNvbW1lbnQtYmFzaWMtcmVwbHktdG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Fuc3dlclRvZ2dsZS5iaW5kKG51bGwsIGMuaWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgUmVwbHl7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb21tZW50LnVzZXJJZCA9PT0gYXV0aC51c2VyLnVpZCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQb3Bjb25maXJtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJEbyB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBjb21tZW50ID9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9rVGV4dD1cIlllc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsVGV4dD1cIk5vXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNvbmZpcm09eygpID0+IGRlbGV0ZUNvbW1lbnQoYy5pZCwgY2hhcGlkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkRlbGV0ZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Qb3Bjb25maXJtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICAgIGF1dGgudXNlciAmJiBhdXRoLnVzZXIudWlkICE9PSBjLnVzZXJJZCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZXBvcnQgdHlwZT1cImNvbW1lbnRcIiBkYXRhPXtjb21tZW50fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgIGF1dGhvcj17XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3Byb2ZpbGUvJHtjLnVzZXJJZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+e2MudXNlcm5hbWV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBhdmF0YXI9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9wcm9maWxlLyR7Yy51c2VySWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxBdmF0YXIgc3JjPXtjLnVzZXJJbWFnZX0gYWx0PXtjLnVzZXJuYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9ezxwPntjLmNvbnRlbnR9PC9wPn1cclxuICAgICAgICAgICAgICAgICAgICBkYXRldGltZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudC5jcmVhdGVkQXQgJiYgdHlwZW9mIGMuY3JlYXRlZEF0ID09PSBcIm9iamVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IG1vbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC51bml4KGMuY3JlYXRlZEF0LnNlY29uZHMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZvcm1hdChcIllZWVktTU0tREQgSEg6bW06c3NcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbW9tZW50KGMuY3JlYXRlZEF0KS5mb3JtYXQoXCJZWVlZLU1NLUREIEhIOm1tOnNzXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbW1lbnQuY3JlYXRlZEF0ICYmIHR5cGVvZiBjLmNyZWF0ZWRBdCA9PT0gXCJvYmplY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBtb21lbnQudW5peChjLmNyZWF0ZWRBdC5zZWNvbmRzKS5mcm9tTm93KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbW9tZW50KGMuY3JlYXRlZEF0KS5mcm9tTm93KCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIHtjbGlja2VkRm9ybSA9PT0gYy5pZCAmJiB0b2dnbGVBbnN3ZXJGb3JtICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBtZD17MjR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dC5UZXh0QXJlYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NvbW1lbnRCb2R5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDb21tZW50Qm9keShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvU2l6ZT17eyBtaW5Sb3dzOiA1IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93Q291bnQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9ezgwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtgQCR7Yy51c2VybmFtZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID48L0lucHV0LlRleHRBcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBtZD17MjR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3N1Ym1pdEFuc3dlci5iaW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21tZW50LmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjLnVzZXJuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjLnVzZXJJZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb21tZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L0NvbW1lbnQ+XHJcblxyXG4gICAgICAgICAge2NsaWNrZWRGb3JtID09PSBjb21tZW50LmlkICYmIHRvZ2dsZUNvbW1lbnRGb3JtID8gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sIG1kPXsyNH0+XHJcbiAgICAgICAgICAgICAgICAgIDxJbnB1dC5UZXh0QXJlYVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjb21tZW50Qm9keX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldENvbW1lbnRCb2R5KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICBhdXRvU2l6ZT17eyBtaW5Sb3dzOiA1IH19XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd0NvdW50PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIG1heExlbmd0aD17ODAwfVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtgQCR7Y29tbWVudC51c2VybmFtZX1gfVxyXG4gICAgICAgICAgICAgICAgICA+PC9JbnB1dC5UZXh0QXJlYT5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCBtZD17MjR9PlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17c3VibWl0QW5zd2VyLmJpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgY29tbWVudC5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnQudXNlcm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb21tZW50LnVzZXJJZFxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgQ29tbWVudFxyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICkpfVxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21tZW50cztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==