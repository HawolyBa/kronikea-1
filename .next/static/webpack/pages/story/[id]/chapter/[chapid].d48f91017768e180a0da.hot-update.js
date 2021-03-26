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
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_Report__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/Report */ "./components/common/Report.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);



var _this = undefined,
    _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\components\\chapter\\Comments.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

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

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_6___default.a.useState(""),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      commentBody = _React$useState2[0],
      setCommentBody = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_6___default.a.useState(false),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState3, 2),
      toggleCommentForm = _React$useState4[0],
      setToggleCommentForm = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_6___default.a.useState(false),
      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState5, 2),
      toggleAnswerForm = _React$useState6[0],
      setToggleAnswerForm = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_6___default.a.useState(""),
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
      lineNumber: 88,
      columnNumber: 5
    }
  }, auth.user ? __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 11
    }
  }, "Add a comment"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    md: 24,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"].TextArea, {
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
      lineNumber: 94,
      columnNumber: 15
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    md: 24,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: submit,
    type: "primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 15
    }
  }, "Comment"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 11
    }
  })) : __jsx("p", {
    style: {
      marginBottom: "20px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 9
    }
  }, "You need to be logged in to post a comment.", " ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/auth",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 11
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 13
    }
  }, "Click here to login or create an account !"))), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 7
    }
  }, comments.length, " Comments"), allComments.map(function (comment) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, {
      key: comment.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 9
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Comment"], {
      actions: [auth && auth.user && __jsx("span", {
        key: "comment-basic-reply-to",
        onClick: commentToggle.bind(null, comment.id),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 17
        }
      }, "Reply", " "), comment.userId === auth.user.uid && __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Popconfirm"], {
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
      }, "Delete")), auth.user && auth.user.uid !== comment.userId && __jsx(_common_Report__WEBPACK_IMPORTED_MODULE_5__["default"], {
        type: "comment",
        data: comment,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 17
        }
      })],
      author: __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
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
      avatar: __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
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
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
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
      datetime: __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
        title: comment.createdAt && typeof comment.createdAt === "object" ? moment__WEBPACK_IMPORTED_MODULE_4___default.a.unix(comment.createdAt.seconds).format("YYYY-MM-DD HH:mm:ss") : moment__WEBPACK_IMPORTED_MODULE_4___default()(comment.createdAt).format("YYYY-MM-DD HH:mm:ss"),
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
      }, comment.createdAt && typeof comment.createdAt === "object" ? moment__WEBPACK_IMPORTED_MODULE_4___default.a.unix(comment.createdAt.seconds).fromNow() : moment__WEBPACK_IMPORTED_MODULE_4___default()(comment.createdAt).fromNow())),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 11
      }
    }, comment.responses.sort(function (a, b) {
      if (a.createdAt) {
        if (typeof a.createdAt === "object") {
          return new Date(a.createdAt.seconds * 1000) - new Date(b.createdAt.seconds * 1000);
        } else return new Date(a.createdAt.seconds) - new Date(b.createdAt);
      } else {
        return;
      }
    }).map(function (c) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, {
        key: c.id,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 17
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Comment"], {
        actions: [auth && auth.user && __jsx("span", {
          key: "comment-basic-reply-to",
          onClick: answerToggle.bind(null, c.id),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 197,
            columnNumber: 25
          }
        }, "Reply", " "), comment.userId === auth.user.uid && __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Popconfirm"], {
          title: "Do you want to delete this comment ?",
          okText: "Yes",
          cancelText: "No",
          onConfirm: function onConfirm() {
            return deleteComment(c.id, chapid);
          },
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 205,
            columnNumber: 25
          }
        }, __jsx("span", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 211,
            columnNumber: 27
          }
        }, "Delete")), auth.user && auth.user.uid !== c.userId && __jsx(_common_Report__WEBPACK_IMPORTED_MODULE_5__["default"], {
          type: "comment",
          data: comment,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 215,
            columnNumber: 25
          }
        })],
        author: __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "/profile/".concat(c.userId),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 219,
            columnNumber: 23
          }
        }, __jsx("a", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 220,
            columnNumber: 25
          }
        }, c.username)),
        avatar: __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "/profile/".concat(c.userId),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 224,
            columnNumber: 23
          }
        }, __jsx("a", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 225,
            columnNumber: 25
          }
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
          src: c.userImage,
          alt: c.username,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 226,
            columnNumber: 27
          }
        }))),
        content: __jsx("p", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 230,
            columnNumber: 30
          }
        }, c.content),
        datetime: __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
          title: comment.createdAt && typeof c.createdAt === "object" ? moment__WEBPACK_IMPORTED_MODULE_4___default.a.unix(c.createdAt.seconds).format("YYYY-MM-DD HH:mm:ss") : moment__WEBPACK_IMPORTED_MODULE_4___default()(c.createdAt).format("YYYY-MM-DD HH:mm:ss"),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 232,
            columnNumber: 23
          }
        }, __jsx("span", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 241,
            columnNumber: 25
          }
        }, comment.createdAt && typeof c.createdAt === "object" ? moment__WEBPACK_IMPORTED_MODULE_4___default.a.unix(c.createdAt.seconds).fromNow() : moment__WEBPACK_IMPORTED_MODULE_4___default()(c.createdAt).fromNow())),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194,
          columnNumber: 19
        }
      }), clickedForm === c.id && toggleAnswerForm && __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251,
          columnNumber: 23
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        md: 24,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252,
          columnNumber: 25
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"].TextArea, {
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
          lineNumber: 253,
          columnNumber: 27
        }
      })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        md: 24,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262,
          columnNumber: 25
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        onClick: submitAnswer.bind(null, comment.id, c.username, c.userId),
        type: "primary",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263,
          columnNumber: 27
        }
      }, "Comment"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276,
          columnNumber: 23
        }
      })));
    })), clickedForm === comment.id && toggleCommentForm ? __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 285,
        columnNumber: 15
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      md: 24,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 286,
        columnNumber: 17
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"].TextArea, {
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
        lineNumber: 287,
        columnNumber: 19
      }
    })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      md: 24,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 296,
        columnNumber: 17
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      onClick: submitAnswer.bind(null, comment.id, comment.username, comment.userId),
      type: "primary",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 297,
        columnNumber: 19
      }
    }, "Comment"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 310,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jaGFwdGVyL0NvbW1lbnRzLmpzIl0sIm5hbWVzIjpbIkNvbW1lbnRzIiwiY29tbWVudHMiLCJhdXRoIiwiZGVsZXRlQ29tbWVudCIsInN1Ym1pdENvbW1lbnQiLCJjaGFwaWQiLCJzdG9yeUlkIiwiYXV0aG9ySWQiLCJ0aXRsZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJjb21tZW50Qm9keSIsInNldENvbW1lbnRCb2R5IiwidG9nZ2xlQ29tbWVudEZvcm0iLCJzZXRUb2dnbGVDb21tZW50Rm9ybSIsInRvZ2dsZUFuc3dlckZvcm0iLCJzZXRUb2dnbGVBbnN3ZXJGb3JtIiwiY2xpY2tlZEZvcm0iLCJzZXRDbGlja2VkRm9ybSIsInRvcENvbW1lbnRzIiwiZmlsdGVyIiwiY29tbSIsImFuc3dlciIsInJlc3BvbnNlcyIsImFsbENvbW1lbnRzIiwibWFwIiwicmVzIiwiZm9yRWFjaCIsInJlc3BvbnNlIiwiY29tbWVudEFuc3dlcmVkSWQiLCJpZCIsInB1c2giLCJjb21tZW50VG9nZ2xlIiwiYW5zd2VyVG9nZ2xlIiwic3VibWl0IiwiY29udGVudCIsInVzZXJuYW1lIiwidXNlciIsInVzZXJJZCIsInVpZCIsImNoYXB0ZXJJZCIsInN1Ym1pdEFuc3dlciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImFuc3dlcmVkVG9JZCIsImFuc3dlcmVkVG8iLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1pblJvd3MiLCJtYXJnaW5Cb3R0b20iLCJsZW5ndGgiLCJjb21tZW50IiwiYmluZCIsInVzZXJJbWFnZSIsImNyZWF0ZWRBdCIsIm1vbWVudCIsInVuaXgiLCJzZWNvbmRzIiwiZm9ybWF0IiwiZnJvbU5vdyIsInNvcnQiLCJhIiwiYiIsIkRhdGUiLCJjIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFXQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEs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LE9BQ0UsTUFBQywyQ0FBRDtBQUNFLGFBQU8sRUFBRUssWUFBWSxDQUFDVyxJQUFiLENBQ1AsSUFETyxFQUVQRCxPQUFPLENBQUNyQixFQUZELEVBR1BxQixPQUFPLENBQUNmLFFBSEQsRUFJUGUsT0FBTyxDQUFDYixNQUpELENBRFg7QUFPRSxVQUFJLEVBQUMsU0FQUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLENBWEYsQ0FERixFQTBCRSxNQUFDLDRDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUExQkYsQ0FERCxHQTZCRyxJQWhNTixDQURlO0FBQUEsR0FBaEIsQ0EvQkgsQ0FERjtBQXNPRCxDQTVTRDs7R0FBTXRDLFE7O0tBQUFBLFE7QUE4U1NBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3N0b3J5L1tpZF0vY2hhcHRlci9bY2hhcGlkXS5kNDhmOTEwMTc3NjhlMTgwYTBkYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21tZW50LFxyXG4gIFRvb2x0aXAsXHJcbiAgQXZhdGFyLFxyXG4gIElucHV0LFxyXG4gIERpdmlkZXIsXHJcbiAgQnV0dG9uLFxyXG4gIFJvdyxcclxuICBDb2wsXHJcbiAgUG9wY29uZmlybSxcclxufSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xyXG5pbXBvcnQgUmVwb3J0IGZyb20gXCIuLi9jb21tb24vUmVwb3J0XCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IENvbW1lbnRzID0gKHtcclxuICBjb21tZW50cyxcclxuICBhdXRoLFxyXG4gIGRlbGV0ZUNvbW1lbnQsXHJcbiAgc3VibWl0Q29tbWVudCxcclxuICBjaGFwaWQsXHJcbiAgc3RvcnlJZCxcclxuICBhdXRob3JJZCxcclxuICB0aXRsZSxcclxufSkgPT4ge1xyXG4gIGNvbnN0IFtjb21tZW50Qm9keSwgc2V0Q29tbWVudEJvZHldID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3RvZ2dsZUNvbW1lbnRGb3JtLCBzZXRUb2dnbGVDb21tZW50Rm9ybV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3RvZ2dsZUFuc3dlckZvcm0sIHNldFRvZ2dsZUFuc3dlckZvcm1dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtjbGlja2VkRm9ybSwgc2V0Q2xpY2tlZEZvcm1dID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IHRvcENvbW1lbnRzID0gY29tbWVudHMuZmlsdGVyKChjb21tKSA9PiAhY29tbS5hbnN3ZXIpO1xyXG4gIGNvbnN0IHJlc3BvbnNlcyA9IGNvbW1lbnRzLmZpbHRlcigoY29tbSkgPT4gY29tbS5hbnN3ZXIpO1xyXG4gIGNvbnN0IGFsbENvbW1lbnRzID0gdG9wQ29tbWVudHMubWFwKChjb21tKSA9PiB7XHJcbiAgICBsZXQgcmVzID0gW107XHJcbiAgICByZXNwb25zZXMuZm9yRWFjaCgocmVzcG9uc2UpID0+IHtcclxuICAgICAgaWYgKHJlc3BvbnNlLmNvbW1lbnRBbnN3ZXJlZElkID09PSBjb21tLmlkKSB7XHJcbiAgICAgICAgcmVzLnB1c2gocmVzcG9uc2UpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB7IC4uLmNvbW0sIHJlc3BvbnNlczogcmVzIH07XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGNvbW1lbnRUb2dnbGUgPSAoaWQpID0+IHtcclxuICAgIHNldENsaWNrZWRGb3JtKGlkKTtcclxuICAgIHNldFRvZ2dsZUNvbW1lbnRGb3JtKCF0b2dnbGVDb21tZW50Rm9ybSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYW5zd2VyVG9nZ2xlID0gKGlkKSA9PiB7XHJcbiAgICBzZXRDbGlja2VkRm9ybShpZCk7XHJcbiAgICBzZXRUb2dnbGVBbnN3ZXJGb3JtKCF0b2dnbGVBbnN3ZXJGb3JtKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzdWJtaXQgPSAoKSA9PiB7XHJcbiAgICBzdWJtaXRDb21tZW50KHtcclxuICAgICAgY29udGVudDogY29tbWVudEJvZHksXHJcbiAgICAgIHVzZXJuYW1lOiBhdXRoLnVzZXIudXNlcm5hbWUsXHJcbiAgICAgIHVzZXJJZDogYXV0aC51c2VyLnVpZCxcclxuICAgICAgYW5zd2VyOiBmYWxzZSxcclxuICAgICAgY2hhcHRlcklkOiBjaGFwaWQsXHJcbiAgICAgIHN0b3J5SWQ6IHN0b3J5SWQsXHJcbiAgICAgIHRpdGxlLFxyXG4gICAgfSk7XHJcbiAgICBzZXRDb21tZW50Qm9keShcIlwiKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzdWJtaXRBbnN3ZXIgPSAoaWQsIHVzZXJuYW1lLCB1c2VySWQsIGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHN1Ym1pdENvbW1lbnQoe1xyXG4gICAgICB1c2VySWQ6IGF1dGgudXNlci51aWQsXHJcbiAgICAgIHVzZXJuYW1lOiBhdXRoLnVzZXIudXNlcm5hbWUsXHJcbiAgICAgIGNvbW1lbnRBbnN3ZXJlZElkOiBpZCxcclxuICAgICAgYW5zd2VyZWRUb0lkOiB1c2VySWQsXHJcbiAgICAgIGNvbnRlbnQ6IGBAJHt1c2VybmFtZX0gJHtjb21tZW50Qm9keX1gLFxyXG4gICAgICBzdG9yeUlkOiBzdG9yeUlkLFxyXG4gICAgICBjaGFwdGVySWQ6IGNoYXBpZCxcclxuICAgICAgYXV0aG9ySWQ6IGF1dGhvcklkLFxyXG4gICAgICB0aXRsZTogdGl0bGUsXHJcbiAgICAgIGFuc3dlcmVkVG86IHVzZXJuYW1lLFxyXG4gICAgICBhbnN3ZXI6IHRydWUsXHJcbiAgICB9KTtcclxuXHJcbiAgICBzZXRDb21tZW50Qm9keShcIlwiKTtcclxuICAgIGFuc3dlclRvZ2dsZSgpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb21tZW50c1wiPlxyXG4gICAgICB7YXV0aC51c2VyID8gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8aDM+QWRkIGEgY29tbWVudDwvaDM+XHJcbiAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICA8Q29sIG1kPXsyNH0+XHJcbiAgICAgICAgICAgICAgPElucHV0LlRleHRBcmVhXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Y29tbWVudEJvZHl9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldENvbW1lbnRCb2R5KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgIGF1dG9TaXplPXt7IG1pblJvd3M6IDUgfX1cclxuICAgICAgICAgICAgICAgIHNob3dDb3VudD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIG1heExlbmd0aD17ODAwfVxyXG4gICAgICAgICAgICAgID48L0lucHV0LlRleHRBcmVhPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPENvbCBtZD17MjR9PlxyXG4gICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17c3VibWl0fSB0eXBlPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgQ29tbWVudFxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICA8Lz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8cCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMjBweFwiIH19PlxyXG4gICAgICAgICAgWW91IG5lZWQgdG8gYmUgbG9nZ2VkIGluIHRvIHBvc3QgYSBjb21tZW50LntcIiBcIn1cclxuICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL2F1dGhcIn0+XHJcbiAgICAgICAgICAgIDxhPkNsaWNrIGhlcmUgdG8gbG9naW4gb3IgY3JlYXRlIGFuIGFjY291bnQgITwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L3A+XHJcbiAgICAgICl9XHJcbiAgICAgIDxoMz57Y29tbWVudHMubGVuZ3RofSBDb21tZW50czwvaDM+XHJcbiAgICAgIHthbGxDb21tZW50cy5tYXAoKGNvbW1lbnQpID0+IChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtjb21tZW50LmlkfT5cclxuICAgICAgICAgIDxDb21tZW50XHJcbiAgICAgICAgICAgIGFjdGlvbnM9e1tcclxuICAgICAgICAgICAgICBhdXRoICYmIGF1dGgudXNlciAmJiAoXHJcbiAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICBrZXk9XCJjb21tZW50LWJhc2ljLXJlcGx5LXRvXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17Y29tbWVudFRvZ2dsZS5iaW5kKG51bGwsIGNvbW1lbnQuaWQpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBSZXBseXtcIiBcIn1cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgIGNvbW1lbnQudXNlcklkID09PSBhdXRoLnVzZXIudWlkICYmIChcclxuICAgICAgICAgICAgICAgIDxQb3Bjb25maXJtXHJcbiAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRG8geW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgY29tbWVudCA/XCJcclxuICAgICAgICAgICAgICAgICAgb2tUZXh0PVwiWWVzXCJcclxuICAgICAgICAgICAgICAgICAgY2FuY2VsVGV4dD1cIk5vXCJcclxuICAgICAgICAgICAgICAgICAgb25Db25maXJtPXsoKSA9PiBkZWxldGVDb21tZW50KGNvbW1lbnQuaWQsIGNoYXBpZCl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPkRlbGV0ZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvUG9wY29uZmlybT5cclxuICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgIGF1dGgudXNlciAmJiBhdXRoLnVzZXIudWlkICE9PSBjb21tZW50LnVzZXJJZCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8UmVwb3J0IHR5cGU9XCJjb21tZW50XCIgZGF0YT17Y29tbWVudH0gLz5cclxuICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICBhdXRob3I9e1xyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcHJvZmlsZS8ke2NvbW1lbnQudXNlcklkfWB9PlxyXG4gICAgICAgICAgICAgICAgPGE+e2NvbW1lbnQudXNlcm5hbWV9PC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhdmF0YXI9e1xyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcHJvZmlsZS8ke2NvbW1lbnQudXNlcklkfWB9PlxyXG4gICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgIDxBdmF0YXIgc3JjPXtjb21tZW50LnVzZXJJbWFnZX0gYWx0PXtjb21tZW50LnVzZXJuYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb250ZW50PXs8cD57Y29tbWVudC5jb250ZW50fTwvcD59XHJcbiAgICAgICAgICAgIGRhdGV0aW1lPXtcclxuICAgICAgICAgICAgICA8VG9vbHRpcFxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e1xyXG4gICAgICAgICAgICAgICAgICBjb21tZW50LmNyZWF0ZWRBdCAmJiB0eXBlb2YgY29tbWVudC5jcmVhdGVkQXQgPT09IFwib2JqZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICA/IG1vbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudW5peChjb21tZW50LmNyZWF0ZWRBdC5zZWNvbmRzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZm9ybWF0KFwiWVlZWS1NTS1ERCBISDptbTpzc1wiKVxyXG4gICAgICAgICAgICAgICAgICAgIDogbW9tZW50KGNvbW1lbnQuY3JlYXRlZEF0KS5mb3JtYXQoXCJZWVlZLU1NLUREIEhIOm1tOnNzXCIpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgIHtjb21tZW50LmNyZWF0ZWRBdCAmJiB0eXBlb2YgY29tbWVudC5jcmVhdGVkQXQgPT09IFwib2JqZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICA/IG1vbWVudC51bml4KGNvbW1lbnQuY3JlYXRlZEF0LnNlY29uZHMpLmZyb21Ob3coKVxyXG4gICAgICAgICAgICAgICAgICAgIDogbW9tZW50KGNvbW1lbnQuY3JlYXRlZEF0KS5mcm9tTm93KCl9XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtjb21tZW50LnJlc3BvbnNlc1xyXG4gICAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYS5jcmVhdGVkQXQpIHtcclxuICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBhLmNyZWF0ZWRBdCA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICBuZXcgRGF0ZShhLmNyZWF0ZWRBdC5zZWNvbmRzICogMTAwMCkgLVxyXG4gICAgICAgICAgICAgICAgICAgICAgbmV3IERhdGUoYi5jcmVhdGVkQXQuc2Vjb25kcyAqIDEwMDApXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgIG5ldyBEYXRlKGEuY3JlYXRlZEF0LnNlY29uZHMpIC0gbmV3IERhdGUoYi5jcmVhdGVkQXQpXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIC5tYXAoKGMpID0+IChcclxuICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2MuaWR9PlxyXG4gICAgICAgICAgICAgICAgICA8Q29tbWVudFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbnM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgIGF1dGggJiYgYXV0aC51c2VyICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9XCJjb21tZW50LWJhc2ljLXJlcGx5LXRvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXthbnN3ZXJUb2dnbGUuYmluZChudWxsLCBjLmlkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFJlcGx5e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgY29tbWVudC51c2VySWQgPT09IGF1dGgudXNlci51aWQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UG9wY29uZmlybVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRG8geW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgY29tbWVudCA/XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBva1RleHQ9XCJZZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbFRleHQ9XCJOb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25Db25maXJtPXsoKSA9PiBkZWxldGVDb21tZW50KGMuaWQsIGNoYXBpZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5EZWxldGU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUG9wY29uZmlybT5cclxuICAgICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgICBhdXRoLnVzZXIgJiYgYXV0aC51c2VyLnVpZCAhPT0gYy51c2VySWQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVwb3J0IHR5cGU9XCJjb21tZW50XCIgZGF0YT17Y29tbWVudH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICBhdXRob3I9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9wcm9maWxlLyR7Yy51c2VySWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPntjLnVzZXJuYW1lfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYXZhdGFyPXtcclxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcHJvZmlsZS8ke2MudXNlcklkfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QXZhdGFyIHNyYz17Yy51c2VySW1hZ2V9IGFsdD17Yy51c2VybmFtZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PXs8cD57Yy5jb250ZW50fTwvcD59XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZXRpbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnQuY3JlYXRlZEF0ICYmIHR5cGVvZiBjLmNyZWF0ZWRBdCA9PT0gXCJvYmplY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBtb21lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudW5peChjLmNyZWF0ZWRBdC5zZWNvbmRzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mb3JtYXQoXCJZWVlZLU1NLUREIEhIOm1tOnNzXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG1vbWVudChjLmNyZWF0ZWRBdCkuZm9ybWF0KFwiWVlZWS1NTS1ERCBISDptbTpzc1wiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtjb21tZW50LmNyZWF0ZWRBdCAmJiB0eXBlb2YgYy5jcmVhdGVkQXQgPT09IFwib2JqZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gbW9tZW50LnVuaXgoYy5jcmVhdGVkQXQuc2Vjb25kcykuZnJvbU5vdygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG1vbWVudChjLmNyZWF0ZWRBdCkuZnJvbU5vdygpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICB7Y2xpY2tlZEZvcm0gPT09IGMuaWQgJiYgdG9nZ2xlQW5zd2VyRm9ybSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgbWQ9ezI0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQuVGV4dEFyZWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjb21tZW50Qm9keX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q29tbWVudEJvZHkoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b1NpemU9e3sgbWluUm93czogNSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0NvdW50PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPXs4MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17YEAke2MudXNlcm5hbWV9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9JbnB1dC5UZXh0QXJlYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgbWQ9ezI0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtzdWJtaXRBbnN3ZXIuYmluZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudC5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYy51c2VybmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYy51c2VySWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29tbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L0NvbW1lbnQ+XHJcblxyXG4gICAgICAgICAge2NsaWNrZWRGb3JtID09PSBjb21tZW50LmlkICYmIHRvZ2dsZUNvbW1lbnRGb3JtID8gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sIG1kPXsyNH0+XHJcbiAgICAgICAgICAgICAgICAgIDxJbnB1dC5UZXh0QXJlYVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjb21tZW50Qm9keX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldENvbW1lbnRCb2R5KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICBhdXRvU2l6ZT17eyBtaW5Sb3dzOiA1IH19XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd0NvdW50PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIG1heExlbmd0aD17ODAwfVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtgQCR7Y29tbWVudC51c2VybmFtZX1gfVxyXG4gICAgICAgICAgICAgICAgICA+PC9JbnB1dC5UZXh0QXJlYT5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCBtZD17MjR9PlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17c3VibWl0QW5zd2VyLmJpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgY29tbWVudC5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnQudXNlcm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb21tZW50LnVzZXJJZFxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgQ29tbWVudFxyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgKSl9XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9