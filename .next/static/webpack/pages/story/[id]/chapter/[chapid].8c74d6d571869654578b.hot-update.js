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
    return comment.createdAt ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Comment"], {
      key: comment.id,
      actions: [auth && auth.user && __jsx("span", {
        key: "comment-basic-reply-to",
        onClick: commentToggle.bind(null, comment.id),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 19
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
          lineNumber: 133,
          columnNumber: 19
        }
      }, __jsx("span", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 21
        }
      }, "Delete")), auth.user && auth.user.uid !== comment.userId && __jsx(_common_Report__WEBPACK_IMPORTED_MODULE_6__["default"], {
        type: "comment",
        data: comment,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 19
        }
      })],
      author: __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/profile/".concat(comment.userId),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 17
        }
      }, __jsx("a", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 19
        }
      }, comment.username)),
      avatar: __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/profile/".concat(comment.userId),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 17
        }
      }, __jsx("a", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 19
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {
        src: comment.userImage,
        alt: comment.username,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 21
        }
      }))),
      content: __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 24
        }
      }, comment.content),
      datetime: __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], {
        title: comment.createdAt && typeof comment.createdAt === "object" ? moment__WEBPACK_IMPORTED_MODULE_5___default.a.unix(comment.createdAt.seconds).format("YYYY-MM-DD HH:mm:ss") : moment__WEBPACK_IMPORTED_MODULE_5___default()(comment.createdAt).format("YYYY-MM-DD HH:mm:ss"),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 17
        }
      }, __jsx("span", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 19
        }
      }, comment.createdAt && typeof comment.createdAt === "object" ? moment__WEBPACK_IMPORTED_MODULE_5___default.a.unix(comment.createdAt.seconds).fromNow() : moment__WEBPACK_IMPORTED_MODULE_5___default()(comment.createdAt).fromNow())),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 13
      }
    }, comment.responses.sort(function (a, b) {
      return typeof a.createdAt === "object" ? new Date(a.createdAt.seconds * 1000) - new Date(b.createdAt.seconds * 1000) : new Date(a.createdAt.seconds) - new Date(b.createdAt);
    }).map(function (c) {
      return c.createdAt ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Comment"], {
        key: c.id,
        actions: [auth && auth.user && __jsx("span", {
          key: "comment-basic-reply-to",
          onClick: answerToggle.bind(null, c.id),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 191,
            columnNumber: 29
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
            lineNumber: 199,
            columnNumber: 29
          }
        }, __jsx("span", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 205,
            columnNumber: 31
          }
        }, "Delete")), auth.user && auth.user.uid !== c.userId && __jsx(_common_Report__WEBPACK_IMPORTED_MODULE_6__["default"], {
          type: "comment",
          data: comment,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 209,
            columnNumber: 29
          }
        })],
        author: __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: "/profile/".concat(c.userId),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 213,
            columnNumber: 27
          }
        }, __jsx("a", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 214,
            columnNumber: 29
          }
        }, c.username)),
        avatar: __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: "/profile/".concat(c.userId),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 218,
            columnNumber: 27
          }
        }, __jsx("a", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 219,
            columnNumber: 29
          }
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {
          src: c.userImage,
          alt: c.username,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 220,
            columnNumber: 31
          }
        }))),
        content: __jsx("p", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 224,
            columnNumber: 34
          }
        }, c.content),
        datetime: __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], {
          title: comment.createdAt && typeof c.createdAt === "object" ? moment__WEBPACK_IMPORTED_MODULE_5___default.a.unix(c.createdAt.seconds).format("YYYY-MM-DD HH:mm:ss") : moment__WEBPACK_IMPORTED_MODULE_5___default()(c.createdAt).format("YYYY-MM-DD HH:mm:ss"),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 226,
            columnNumber: 27
          }
        }, __jsx("span", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 238,
            columnNumber: 29
          }
        }, comment.createdAt && typeof c.createdAt === "object" ? moment__WEBPACK_IMPORTED_MODULE_5___default.a.unix(c.createdAt.seconds).fromNow() : moment__WEBPACK_IMPORTED_MODULE_5___default()(c.createdAt).fromNow())),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 23
        }
      }), clickedForm === c.id && toggleAnswerForm && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249,
          columnNumber: 27
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        md: 24,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250,
          columnNumber: 29
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
          lineNumber: 251,
          columnNumber: 31
        }
      })), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        md: 24,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260,
          columnNumber: 29
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        onClick: submitAnswer.bind(null, comment.id, c.username, c.userId),
        type: "primary",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261,
          columnNumber: 31
        }
      }, "Comment"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274,
          columnNumber: 27
        }
      }))) : __jsx(Spin, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279,
          columnNumber: 21
        }
      });
    })), clickedForm === comment.id && toggleCommentForm ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 286,
        columnNumber: 17
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      md: 24,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 287,
        columnNumber: 19
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
        lineNumber: 288,
        columnNumber: 21
      }
    })), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      md: 24,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 297,
        columnNumber: 19
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      onClick: submitAnswer.bind(null, comment.id, comment.username, comment.userId),
      type: "primary",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 298,
        columnNumber: 21
      }
    }, "Comment"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 311,
        columnNumber: 17
      }
    })) : null) : __jsx(Spin, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 316,
        columnNumber: 11
      }
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jaGFwdGVyL0NvbW1lbnRzLmpzIl0sIm5hbWVzIjpbIkNvbW1lbnRzIiwiY29tbWVudHMiLCJhdXRoIiwiZGVsZXRlQ29tbWVudCIsInN1Ym1pdENvbW1lbnQiLCJjaGFwaWQiLCJzdG9yeUlkIiwiYXV0aG9ySWQiLCJ0aXRsZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJjb21tZW50Qm9keSIsInNldENvbW1lbnRCb2R5IiwidG9nZ2xlQ29tbWVudEZvcm0iLCJzZXRUb2dnbGVDb21tZW50Rm9ybSIsInRvZ2dsZUFuc3dlckZvcm0iLCJzZXRUb2dnbGVBbnN3ZXJGb3JtIiwiY2xpY2tlZEZvcm0iLCJzZXRDbGlja2VkRm9ybSIsInRvcENvbW1lbnRzIiwiZmlsdGVyIiwiY29tbSIsImFuc3dlciIsInJlc3BvbnNlcyIsImFsbENvbW1lbnRzIiwibWFwIiwicmVzIiwiZm9yRWFjaCIsInJlc3BvbnNlIiwiY29tbWVudEFuc3dlcmVkSWQiLCJpZCIsInB1c2giLCJjb21tZW50VG9nZ2xlIiwiYW5zd2VyVG9nZ2xlIiwic3VibWl0IiwiY29udGVudCIsInVzZXJuYW1lIiwidXNlciIsInVzZXJJZCIsInVpZCIsImNoYXB0ZXJJZCIsInN1Ym1pdEFuc3dlciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImFuc3dlcmVkVG9JZCIsImFuc3dlcmVkVG8iLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1pblJvd3MiLCJtYXJnaW5Cb3R0b20iLCJsZW5ndGgiLCJjb21tZW50IiwiY3JlYXRlZEF0IiwiYmluZCIsInVzZXJJbWFnZSIsIm1vbWVudCIsInVuaXgiLCJzZWNvbmRzIiwiZm9ybWF0IiwiZnJvbU5vdyIsInNvcnQiLCJhIiwiYiIsIkRhdGUiLCJjIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBV0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFX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T0FBTyxDQUFDYixNQUpELENBRFg7QUFPRSxVQUFJLEVBQUMsU0FQUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLENBWEYsQ0FERixFQTBCRSxNQUFDLDRDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUExQkYsQ0FERCxHQTZCRyxJQWpNTixDQURGLEdBcU1FLE1BQUMsSUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BdE1hO0FBQUEsR0FBaEIsQ0EvQkgsQ0FERjtBQTJPRCxDQWpURDs7R0FBTXRDLFE7O0tBQUFBLFE7QUFtVFNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3N0b3J5L1tpZF0vY2hhcHRlci9bY2hhcGlkXS44Yzc0ZDZkNTcxODY5NjU0NTc4Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21tZW50LFxyXG4gIFRvb2x0aXAsXHJcbiAgQXZhdGFyLFxyXG4gIElucHV0LFxyXG4gIERpdmlkZXIsXHJcbiAgQnV0dG9uLFxyXG4gIFJvdyxcclxuICBDb2wsXHJcbiAgUG9wY29uZmlybSxcclxufSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xyXG5pbXBvcnQgUmVwb3J0IGZyb20gXCIuLi9jb21tb24vUmVwb3J0XCI7XHJcblxyXG5jb25zdCBDb21tZW50cyA9ICh7XHJcbiAgY29tbWVudHMsXHJcbiAgYXV0aCxcclxuICBkZWxldGVDb21tZW50LFxyXG4gIHN1Ym1pdENvbW1lbnQsXHJcbiAgY2hhcGlkLFxyXG4gIHN0b3J5SWQsXHJcbiAgYXV0aG9ySWQsXHJcbiAgdGl0bGUsXHJcbn0pID0+IHtcclxuICBjb25zdCBbY29tbWVudEJvZHksIHNldENvbW1lbnRCb2R5XSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt0b2dnbGVDb21tZW50Rm9ybSwgc2V0VG9nZ2xlQ29tbWVudEZvcm1dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt0b2dnbGVBbnN3ZXJGb3JtLCBzZXRUb2dnbGVBbnN3ZXJGb3JtXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbY2xpY2tlZEZvcm0sIHNldENsaWNrZWRGb3JtXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCB0b3BDb21tZW50cyA9IGNvbW1lbnRzLmZpbHRlcigoY29tbSkgPT4gIWNvbW0uYW5zd2VyKTtcclxuICBjb25zdCByZXNwb25zZXMgPSBjb21tZW50cy5maWx0ZXIoKGNvbW0pID0+IGNvbW0uYW5zd2VyKTtcclxuICBjb25zdCBhbGxDb21tZW50cyA9IHRvcENvbW1lbnRzLm1hcCgoY29tbSkgPT4ge1xyXG4gICAgbGV0IHJlcyA9IFtdO1xyXG4gICAgcmVzcG9uc2VzLmZvckVhY2goKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIGlmIChyZXNwb25zZS5jb21tZW50QW5zd2VyZWRJZCA9PT0gY29tbS5pZCkge1xyXG4gICAgICAgIHJlcy5wdXNoKHJlc3BvbnNlKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4geyAuLi5jb21tLCByZXNwb25zZXM6IHJlcyB9O1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBjb21tZW50VG9nZ2xlID0gKGlkKSA9PiB7XHJcbiAgICBzZXRDbGlja2VkRm9ybShpZCk7XHJcbiAgICBzZXRUb2dnbGVDb21tZW50Rm9ybSghdG9nZ2xlQ29tbWVudEZvcm0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFuc3dlclRvZ2dsZSA9IChpZCkgPT4ge1xyXG4gICAgc2V0Q2xpY2tlZEZvcm0oaWQpO1xyXG4gICAgc2V0VG9nZ2xlQW5zd2VyRm9ybSghdG9nZ2xlQW5zd2VyRm9ybSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc3VibWl0ID0gKCkgPT4ge1xyXG4gICAgc3VibWl0Q29tbWVudCh7XHJcbiAgICAgIGNvbnRlbnQ6IGNvbW1lbnRCb2R5LFxyXG4gICAgICB1c2VybmFtZTogYXV0aC51c2VyLnVzZXJuYW1lLFxyXG4gICAgICB1c2VySWQ6IGF1dGgudXNlci51aWQsXHJcbiAgICAgIGFuc3dlcjogZmFsc2UsXHJcbiAgICAgIGNoYXB0ZXJJZDogY2hhcGlkLFxyXG4gICAgICBzdG9yeUlkOiBzdG9yeUlkLFxyXG4gICAgICB0aXRsZSxcclxuICAgIH0pO1xyXG4gICAgc2V0Q29tbWVudEJvZHkoXCJcIik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc3VibWl0QW5zd2VyID0gKGlkLCB1c2VybmFtZSwgdXNlcklkLCBlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzdWJtaXRDb21tZW50KHtcclxuICAgICAgdXNlcklkOiBhdXRoLnVzZXIudWlkLFxyXG4gICAgICB1c2VybmFtZTogYXV0aC51c2VyLnVzZXJuYW1lLFxyXG4gICAgICBjb21tZW50QW5zd2VyZWRJZDogaWQsXHJcbiAgICAgIGFuc3dlcmVkVG9JZDogdXNlcklkLFxyXG4gICAgICBjb250ZW50OiBgQCR7dXNlcm5hbWV9ICR7Y29tbWVudEJvZHl9YCxcclxuICAgICAgc3RvcnlJZDogc3RvcnlJZCxcclxuICAgICAgY2hhcHRlcklkOiBjaGFwaWQsXHJcbiAgICAgIGF1dGhvcklkOiBhdXRob3JJZCxcclxuICAgICAgdGl0bGU6IHRpdGxlLFxyXG4gICAgICBhbnN3ZXJlZFRvOiB1c2VybmFtZSxcclxuICAgICAgYW5zd2VyOiB0cnVlLFxyXG4gICAgfSk7XHJcblxyXG4gICAgc2V0Q29tbWVudEJvZHkoXCJcIik7XHJcbiAgICBhbnN3ZXJUb2dnbGUoKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29tbWVudHNcIj5cclxuICAgICAge2F1dGgudXNlciA/IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPGgzPkFkZCBhIGNvbW1lbnQ8L2gzPlxyXG4gICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgPENvbCBtZD17MjR9PlxyXG4gICAgICAgICAgICAgIDxJbnB1dC5UZXh0QXJlYVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2NvbW1lbnRCb2R5fVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDb21tZW50Qm9keShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICBhdXRvU2l6ZT17eyBtaW5Sb3dzOiA1IH19XHJcbiAgICAgICAgICAgICAgICBzaG93Q291bnQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBtYXhMZW5ndGg9ezgwMH1cclxuICAgICAgICAgICAgICA+PC9JbnB1dC5UZXh0QXJlYT5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgbWQ9ezI0fT5cclxuICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3N1Ym1pdH0gdHlwZT1cInByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgIENvbW1lbnRcclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPHAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjIwcHhcIiB9fT5cclxuICAgICAgICAgIFlvdSBuZWVkIHRvIGJlIGxvZ2dlZCBpbiB0byBwb3N0IGEgY29tbWVudC57XCIgXCJ9XHJcbiAgICAgICAgICA8TGluayBocmVmPXtcIi9hdXRoXCJ9PlxyXG4gICAgICAgICAgICA8YT5DbGljayBoZXJlIHRvIGxvZ2luIG9yIGNyZWF0ZSBhbiBhY2NvdW50ICE8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICApfVxyXG4gICAgICA8aDM+e2NvbW1lbnRzLmxlbmd0aH0gQ29tbWVudHM8L2gzPlxyXG4gICAgICB7YWxsQ29tbWVudHMubWFwKChjb21tZW50KSA9PlxyXG4gICAgICAgIGNvbW1lbnQuY3JlYXRlZEF0ID8gKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPENvbW1lbnRcclxuICAgICAgICAgICAgICBrZXk9e2NvbW1lbnQuaWR9XHJcbiAgICAgICAgICAgICAgYWN0aW9ucz17W1xyXG4gICAgICAgICAgICAgICAgYXV0aCAmJiBhdXRoLnVzZXIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgIGtleT1cImNvbW1lbnQtYmFzaWMtcmVwbHktdG9cIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2NvbW1lbnRUb2dnbGUuYmluZChudWxsLCBjb21tZW50LmlkKX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFJlcGx5e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgY29tbWVudC51c2VySWQgPT09IGF1dGgudXNlci51aWQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8UG9wY29uZmlybVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRG8geW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgY29tbWVudCA/XCJcclxuICAgICAgICAgICAgICAgICAgICBva1RleHQ9XCJZZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbFRleHQ9XCJOb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgb25Db25maXJtPXsoKSA9PiBkZWxldGVDb21tZW50KGNvbW1lbnQuaWQsIGNoYXBpZCl9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5EZWxldGU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvUG9wY29uZmlybT5cclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBhdXRoLnVzZXIgJiYgYXV0aC51c2VyLnVpZCAhPT0gY29tbWVudC51c2VySWQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8UmVwb3J0IHR5cGU9XCJjb21tZW50XCIgZGF0YT17Y29tbWVudH0gLz5cclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICBhdXRob3I9e1xyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9wcm9maWxlLyR7Y29tbWVudC51c2VySWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgIDxhPntjb21tZW50LnVzZXJuYW1lfTwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgYXZhdGFyPXtcclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcHJvZmlsZS8ke2NvbW1lbnQudXNlcklkfWB9PlxyXG4gICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICA8QXZhdGFyIHNyYz17Y29tbWVudC51c2VySW1hZ2V9IGFsdD17Y29tbWVudC51c2VybmFtZX0gLz5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBjb250ZW50PXs8cD57Y29tbWVudC5jb250ZW50fTwvcD59XHJcbiAgICAgICAgICAgICAgZGF0ZXRpbWU9e1xyXG4gICAgICAgICAgICAgICAgPFRvb2x0aXBcclxuICAgICAgICAgICAgICAgICAgdGl0bGU9e1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbW1lbnQuY3JlYXRlZEF0ICYmIHR5cGVvZiBjb21tZW50LmNyZWF0ZWRBdCA9PT0gXCJvYmplY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPyBtb21lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAudW5peChjb21tZW50LmNyZWF0ZWRBdC5zZWNvbmRzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5mb3JtYXQoXCJZWVlZLU1NLUREIEhIOm1tOnNzXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICA6IG1vbWVudChjb21tZW50LmNyZWF0ZWRBdCkuZm9ybWF0KFwiWVlZWS1NTS1ERCBISDptbTpzc1wiKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjb21tZW50LmNyZWF0ZWRBdCAmJiB0eXBlb2YgY29tbWVudC5jcmVhdGVkQXQgPT09IFwib2JqZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgID8gbW9tZW50LnVuaXgoY29tbWVudC5jcmVhdGVkQXQuc2Vjb25kcykuZnJvbU5vdygpXHJcbiAgICAgICAgICAgICAgICAgICAgICA6IG1vbWVudChjb21tZW50LmNyZWF0ZWRBdCkuZnJvbU5vdygpfVxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2NvbW1lbnQucmVzcG9uc2VzXHJcbiAgICAgICAgICAgICAgICAuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gdHlwZW9mIGEuY3JlYXRlZEF0ID09PSBcIm9iamVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPyBuZXcgRGF0ZShhLmNyZWF0ZWRBdC5zZWNvbmRzICogMTAwMCkgLVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgRGF0ZShiLmNyZWF0ZWRBdC5zZWNvbmRzICogMTAwMClcclxuICAgICAgICAgICAgICAgICAgICA6IG5ldyBEYXRlKGEuY3JlYXRlZEF0LnNlY29uZHMpIC0gbmV3IERhdGUoYi5jcmVhdGVkQXQpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5tYXAoKGMpID0+XHJcbiAgICAgICAgICAgICAgICAgIGMuY3JlYXRlZEF0ID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q29tbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2MuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbnM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRoICYmIGF1dGgudXNlciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9XCJjb21tZW50LWJhc2ljLXJlcGx5LXRvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17YW5zd2VyVG9nZ2xlLmJpbmQobnVsbCwgYy5pZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlcGx5e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudC51c2VySWQgPT09IGF1dGgudXNlci51aWQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBvcGNvbmZpcm1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJEbyB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBjb21tZW50ID9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBva1RleHQ9XCJZZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxUZXh0PVwiTm9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNvbmZpcm09eygpID0+IGRlbGV0ZUNvbW1lbnQoYy5pZCwgY2hhcGlkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+RGVsZXRlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Qb3Bjb25maXJtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0aC51c2VyICYmIGF1dGgudXNlci51aWQgIT09IGMudXNlcklkICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZXBvcnQgdHlwZT1cImNvbW1lbnRcIiBkYXRhPXtjb21tZW50fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dGhvcj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9wcm9maWxlLyR7Yy51c2VySWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT57Yy51c2VybmFtZX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF2YXRhcj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9wcm9maWxlLyR7Yy51c2VySWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEF2YXRhciBzcmM9e2MudXNlckltYWdlfSBhbHQ9e2MudXNlcm5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9ezxwPntjLmNvbnRlbnR9PC9wPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZXRpbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnQuY3JlYXRlZEF0ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVvZiBjLmNyZWF0ZWRBdCA9PT0gXCJvYmplY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gbW9tZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC51bml4KGMuY3JlYXRlZEF0LnNlY29uZHMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mb3JtYXQoXCJZWVlZLU1NLUREIEhIOm1tOnNzXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBtb21lbnQoYy5jcmVhdGVkQXQpLmZvcm1hdChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJZWVlZLU1NLUREIEhIOm1tOnNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbW1lbnQuY3JlYXRlZEF0ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVvZiBjLmNyZWF0ZWRBdCA9PT0gXCJvYmplY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gbW9tZW50LnVuaXgoYy5jcmVhdGVkQXQuc2Vjb25kcykuZnJvbU5vdygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBtb21lbnQoYy5jcmVhdGVkQXQpLmZyb21Ob3coKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7Y2xpY2tlZEZvcm0gPT09IGMuaWQgJiYgdG9nZ2xlQW5zd2VyRm9ybSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgbWQ9ezI0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0LlRleHRBcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NvbW1lbnRCb2R5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q29tbWVudEJvZHkoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9TaXplPXt7IG1pblJvd3M6IDUgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93Q291bnQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPXs4MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2BAJHtjLnVzZXJuYW1lfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L0lucHV0LlRleHRBcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIG1kPXsyNH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtzdWJtaXRBbnN3ZXIuYmluZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21tZW50LmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYy51c2VybmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMudXNlcklkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb21tZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxTcGluIC8+XHJcbiAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvQ29tbWVudD5cclxuXHJcbiAgICAgICAgICAgIHtjbGlja2VkRm9ybSA9PT0gY29tbWVudC5pZCAmJiB0b2dnbGVDb21tZW50Rm9ybSA/IChcclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgPENvbCBtZD17MjR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dC5UZXh0QXJlYVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NvbW1lbnRCb2R5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDb21tZW50Qm9keShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBhdXRvU2l6ZT17eyBtaW5Sb3dzOiA1IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBzaG93Q291bnQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9ezgwMH1cclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtgQCR7Y29tbWVudC51c2VybmFtZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgID48L0lucHV0LlRleHRBcmVhPlxyXG4gICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgPENvbCBtZD17MjR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3N1Ym1pdEFuc3dlci5iaW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21tZW50LmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21tZW50LnVzZXJuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21tZW50LnVzZXJJZFxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBDb21tZW50XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8U3BpbiAvPlxyXG4gICAgICAgIClcclxuICAgICAgKX1cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudHM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=