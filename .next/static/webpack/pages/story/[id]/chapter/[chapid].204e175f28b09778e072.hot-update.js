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
      responses: res.sort(function (a, b) {
        return a.createdAt && b.createdAt && typeof a.createdAt === "object" ? new Date(a.createdAt.seconds * 1000) - new Date(b.createdAt.seconds * 1000) : new Date(a.createdAt.seconds) - new Date(b.createdAt);
      })
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
      lineNumber: 96,
      columnNumber: 5
    }
  }, auth.user ? __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 11
    }
  }, "Add a comment"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    md: 24,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
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
      lineNumber: 102,
      columnNumber: 15
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    md: 24,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: submit,
    type: "primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 15
    }
  }, "Comment"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 11
    }
  })) : __jsx("p", {
    style: {
      marginBottom: "20px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 9
    }
  }, "You need to be logged in to post a comment.", " ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/auth",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 11
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 13
    }
  }, "Click here to login or create an account !"))), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 7
    }
  }, comments.length, " Comments"), allComments.map(function (comment) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, {
      key: comment.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 9
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Comment"], {
      actions: [auth && auth.user && __jsx("span", {
        key: "comment-basic-reply-to",
        onClick: commentToggle.bind(null, comment.id),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132,
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
          lineNumber: 140,
          columnNumber: 17
        }
      }, __jsx("span", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 19
        }
      }, "Delete")), auth.user && auth.user.uid !== comment.userId && __jsx(_common_Report__WEBPACK_IMPORTED_MODULE_5__["default"], {
        type: "comment",
        data: comment,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 17
        }
      })],
      author: __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/profile/".concat(comment.userId),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 15
        }
      }, __jsx("a", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 17
        }
      }, comment.username)),
      avatar: __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/profile/".concat(comment.userId),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 15
        }
      }, __jsx("a", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 17
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
        src: comment.userImage,
        alt: comment.username,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 19
        }
      }))),
      content: __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 22
        }
      }, comment.content),
      datetime: __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
        title: comment.createdAt && typeof comment.createdAt === "object" ? moment__WEBPACK_IMPORTED_MODULE_4___default.a.unix(comment.createdAt.seconds).format("YYYY-MM-DD HH:mm:ss") : moment__WEBPACK_IMPORTED_MODULE_4___default()(comment.createdAt).format("YYYY-MM-DD HH:mm:ss"),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 15
        }
      }, __jsx("span", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 17
        }
      }, comment.createdAt && typeof comment.createdAt === "object" ? moment__WEBPACK_IMPORTED_MODULE_4___default.a.unix(comment.createdAt.seconds).fromNow() : moment__WEBPACK_IMPORTED_MODULE_4___default()(comment.createdAt).fromNow())),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 11
      }
    }, comment.responses // .sort((a, b) => {
    //   if (a.createdAt) {
    //     if (typeof a.createdAt === "object") {
    //       return (
    //         new Date(a.createdAt.seconds * 1000) -
    //         new Date(b.createdAt.seconds * 1000)
    //       );
    //     } else
    //       return (
    //         new Date(a.createdAt.seconds) - new Date(b.createdAt)
    //       );
    //   }
    // })
    .map(function (c) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, {
        key: c.id,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199,
          columnNumber: 17
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Comment"], {
        actions: [auth && auth.user && __jsx("span", {
          key: "comment-basic-reply-to",
          onClick: answerToggle.bind(null, c.id),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 203,
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
            lineNumber: 211,
            columnNumber: 25
          }
        }, __jsx("span", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 217,
            columnNumber: 27
          }
        }, "Delete")), auth.user && auth.user.uid !== c.userId && __jsx(_common_Report__WEBPACK_IMPORTED_MODULE_5__["default"], {
          type: "comment",
          data: comment,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 221,
            columnNumber: 25
          }
        })],
        author: __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "/profile/".concat(c.userId),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 225,
            columnNumber: 23
          }
        }, __jsx("a", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 226,
            columnNumber: 25
          }
        }, c.username)),
        avatar: __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "/profile/".concat(c.userId),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 230,
            columnNumber: 23
          }
        }, __jsx("a", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 231,
            columnNumber: 25
          }
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
          src: c.userImage,
          alt: c.username,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 232,
            columnNumber: 27
          }
        }))),
        content: __jsx("p", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 236,
            columnNumber: 30
          }
        }, c.content),
        datetime: __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
          title: c.createdAt && typeof c.createdAt === "object" ? moment__WEBPACK_IMPORTED_MODULE_4___default.a.unix(c.createdAt.seconds).format("YYYY-MM-DD HH:mm:ss") : moment__WEBPACK_IMPORTED_MODULE_4___default()(c.createdAt).format("YYYY-MM-DD HH:mm:ss"),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 238,
            columnNumber: 23
          }
        }, __jsx("span", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 247,
            columnNumber: 25
          }
        }, c.createdAt && typeof c.createdAt === "object" ? moment__WEBPACK_IMPORTED_MODULE_4___default.a.unix(c.createdAt.seconds).fromNow() : moment__WEBPACK_IMPORTED_MODULE_4___default()(c.createdAt).fromNow())),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200,
          columnNumber: 19
        }
      }), clickedForm === c.id && toggleAnswerForm && __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257,
          columnNumber: 23
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        md: 24,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258,
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
          lineNumber: 259,
          columnNumber: 27
        }
      })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        md: 24,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268,
          columnNumber: 25
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        onClick: submitAnswer.bind(null, comment.id, c.username, c.userId),
        type: "primary",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269,
          columnNumber: 27
        }
      }, "Comment"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282,
          columnNumber: 23
        }
      })));
    })), clickedForm === comment.id && toggleCommentForm ? __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 291,
        columnNumber: 15
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      md: 24,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 292,
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
        lineNumber: 293,
        columnNumber: 19
      }
    })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      md: 24,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 302,
        columnNumber: 17
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      onClick: submitAnswer.bind(null, comment.id, comment.username, comment.userId),
      type: "primary",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 303,
        columnNumber: 19
      }
    }, "Comment"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 316,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jaGFwdGVyL0NvbW1lbnRzLmpzIl0sIm5hbWVzIjpbIkNvbW1lbnRzIiwiY29tbWVudHMiLCJhdXRoIiwiZGVsZXRlQ29tbWVudCIsInN1Ym1pdENvbW1lbnQiLCJjaGFwaWQiLCJzdG9yeUlkIiwiYXV0aG9ySWQiLCJ0aXRsZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJjb21tZW50Qm9keSIsInNldENvbW1lbnRCb2R5IiwidG9nZ2xlQ29tbWVudEZvcm0iLCJzZXRUb2dnbGVDb21tZW50Rm9ybSIsInRvZ2dsZUFuc3dlckZvcm0iLCJzZXRUb2dnbGVBbnN3ZXJGb3JtIiwiY2xpY2tlZEZvcm0iLCJzZXRDbGlja2VkRm9ybSIsInRvcENvbW1lbnRzIiwiZmlsdGVyIiwiY29tbSIsImFuc3dlciIsInJlc3BvbnNlcyIsImFsbENvbW1lbnRzIiwibWFwIiwicmVzIiwiZm9yRWFjaCIsInJlc3BvbnNlIiwiY29tbWVudEFuc3dlcmVkSWQiLCJpZCIsInB1c2giLCJzb3J0IiwiYSIsImIiLCJjcmVhdGVkQXQiLCJEYXRlIiwic2Vjb25kcyIsImNvbW1lbnRUb2dnbGUiLCJhbnN3ZXJUb2dnbGUiLCJzdWJtaXQiLCJjb250ZW50IiwidXNlcm5hbWUiLCJ1c2VyIiwidXNlcklkIiwidWlkIiwiY2hhcHRlcklkIiwic3VibWl0QW5zd2VyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiYW5zd2VyZWRUb0lkIiwiYW5zd2VyZWRUbyIsInRhcmdldCIsInZhbHVlIiwibWluUm93cyIsIm1hcmdpbkJvdHRvbSIsImxlbmd0aCIsImNvbW1lbnQiLCJiaW5kIiwidXNlckltYWdlIiwibW9tZW50IiwidW5peCIsImZvcm1hdCIsImZyb21Ob3ciLCJjIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFXQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEs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QUQ7QUFBSyxRQUFFLEVBQUUsRUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQywyQ0FBRDtBQUNFLGFBQU8sRUFBRUssWUFBWSxDQUFDVyxJQUFiLENBQ1AsSUFETyxFQUVQRCxPQUFPLENBQUMzQixFQUZELEVBR1AyQixPQUFPLENBQUNmLFFBSEQsRUFJUGUsT0FBTyxDQUFDYixNQUpELENBRFg7QUFPRSxVQUFJLEVBQUMsU0FQUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLENBWEYsQ0FERixFQTBCRSxNQUFDLDRDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUExQkYsQ0FERCxHQTZCRyxJQTlMTixDQURlO0FBQUEsR0FBaEIsQ0EvQkgsQ0FERjtBQW9PRCxDQWxURDs7R0FBTTVDLFE7O0tBQUFBLFE7QUFvVFNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3N0b3J5L1tpZF0vY2hhcHRlci9bY2hhcGlkXS4yMDRlMTc1ZjI4YjA5Nzc4ZTA3Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21tZW50LFxyXG4gIFRvb2x0aXAsXHJcbiAgQXZhdGFyLFxyXG4gIElucHV0LFxyXG4gIERpdmlkZXIsXHJcbiAgQnV0dG9uLFxyXG4gIFJvdyxcclxuICBDb2wsXHJcbiAgUG9wY29uZmlybSxcclxufSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xyXG5pbXBvcnQgUmVwb3J0IGZyb20gXCIuLi9jb21tb24vUmVwb3J0XCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IENvbW1lbnRzID0gKHtcclxuICBjb21tZW50cyxcclxuICBhdXRoLFxyXG4gIGRlbGV0ZUNvbW1lbnQsXHJcbiAgc3VibWl0Q29tbWVudCxcclxuICBjaGFwaWQsXHJcbiAgc3RvcnlJZCxcclxuICBhdXRob3JJZCxcclxuICB0aXRsZSxcclxufSkgPT4ge1xyXG4gIGNvbnN0IFtjb21tZW50Qm9keSwgc2V0Q29tbWVudEJvZHldID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3RvZ2dsZUNvbW1lbnRGb3JtLCBzZXRUb2dnbGVDb21tZW50Rm9ybV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3RvZ2dsZUFuc3dlckZvcm0sIHNldFRvZ2dsZUFuc3dlckZvcm1dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtjbGlja2VkRm9ybSwgc2V0Q2xpY2tlZEZvcm1dID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IHRvcENvbW1lbnRzID0gY29tbWVudHMuZmlsdGVyKChjb21tKSA9PiAhY29tbS5hbnN3ZXIpO1xyXG4gIGNvbnN0IHJlc3BvbnNlcyA9IGNvbW1lbnRzLmZpbHRlcigoY29tbSkgPT4gY29tbS5hbnN3ZXIpO1xyXG4gIGNvbnN0IGFsbENvbW1lbnRzID0gdG9wQ29tbWVudHMubWFwKChjb21tKSA9PiB7XHJcbiAgICBsZXQgcmVzID0gW107XHJcbiAgICByZXNwb25zZXMuZm9yRWFjaCgocmVzcG9uc2UpID0+IHtcclxuICAgICAgaWYgKHJlc3BvbnNlLmNvbW1lbnRBbnN3ZXJlZElkID09PSBjb21tLmlkKSB7XHJcbiAgICAgICAgcmVzLnB1c2gocmVzcG9uc2UpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLmNvbW0sXHJcbiAgICAgIHJlc3BvbnNlczogcmVzLnNvcnQoKGEsIGIpID0+XHJcbiAgICAgICAgYS5jcmVhdGVkQXQgJiYgYi5jcmVhdGVkQXQgJiYgdHlwZW9mIGEuY3JlYXRlZEF0ID09PSBcIm9iamVjdFwiXHJcbiAgICAgICAgICA/IG5ldyBEYXRlKGEuY3JlYXRlZEF0LnNlY29uZHMgKiAxMDAwKSAtXHJcbiAgICAgICAgICAgIG5ldyBEYXRlKGIuY3JlYXRlZEF0LnNlY29uZHMgKiAxMDAwKVxyXG4gICAgICAgICAgOiBuZXcgRGF0ZShhLmNyZWF0ZWRBdC5zZWNvbmRzKSAtIG5ldyBEYXRlKGIuY3JlYXRlZEF0KVxyXG4gICAgICApLFxyXG4gICAgfTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgY29tbWVudFRvZ2dsZSA9IChpZCkgPT4ge1xyXG4gICAgc2V0Q2xpY2tlZEZvcm0oaWQpO1xyXG4gICAgc2V0VG9nZ2xlQ29tbWVudEZvcm0oIXRvZ2dsZUNvbW1lbnRGb3JtKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBhbnN3ZXJUb2dnbGUgPSAoaWQpID0+IHtcclxuICAgIHNldENsaWNrZWRGb3JtKGlkKTtcclxuICAgIHNldFRvZ2dsZUFuc3dlckZvcm0oIXRvZ2dsZUFuc3dlckZvcm0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHN1Ym1pdCA9ICgpID0+IHtcclxuICAgIHN1Ym1pdENvbW1lbnQoe1xyXG4gICAgICBjb250ZW50OiBjb21tZW50Qm9keSxcclxuICAgICAgdXNlcm5hbWU6IGF1dGgudXNlci51c2VybmFtZSxcclxuICAgICAgdXNlcklkOiBhdXRoLnVzZXIudWlkLFxyXG4gICAgICBhbnN3ZXI6IGZhbHNlLFxyXG4gICAgICBjaGFwdGVySWQ6IGNoYXBpZCxcclxuICAgICAgc3RvcnlJZDogc3RvcnlJZCxcclxuICAgICAgdGl0bGUsXHJcbiAgICB9KTtcclxuICAgIHNldENvbW1lbnRCb2R5KFwiXCIpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHN1Ym1pdEFuc3dlciA9IChpZCwgdXNlcm5hbWUsIHVzZXJJZCwgZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc3VibWl0Q29tbWVudCh7XHJcbiAgICAgIHVzZXJJZDogYXV0aC51c2VyLnVpZCxcclxuICAgICAgdXNlcm5hbWU6IGF1dGgudXNlci51c2VybmFtZSxcclxuICAgICAgY29tbWVudEFuc3dlcmVkSWQ6IGlkLFxyXG4gICAgICBhbnN3ZXJlZFRvSWQ6IHVzZXJJZCxcclxuICAgICAgY29udGVudDogYEAke3VzZXJuYW1lfSAke2NvbW1lbnRCb2R5fWAsXHJcbiAgICAgIHN0b3J5SWQ6IHN0b3J5SWQsXHJcbiAgICAgIGNoYXB0ZXJJZDogY2hhcGlkLFxyXG4gICAgICBhdXRob3JJZDogYXV0aG9ySWQsXHJcbiAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAgICAgYW5zd2VyZWRUbzogdXNlcm5hbWUsXHJcbiAgICAgIGFuc3dlcjogdHJ1ZSxcclxuICAgIH0pO1xyXG5cclxuICAgIHNldENvbW1lbnRCb2R5KFwiXCIpO1xyXG4gICAgYW5zd2VyVG9nZ2xlKCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbW1lbnRzXCI+XHJcbiAgICAgIHthdXRoLnVzZXIgPyAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxoMz5BZGQgYSBjb21tZW50PC9oMz5cclxuICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgIDxDb2wgbWQ9ezI0fT5cclxuICAgICAgICAgICAgICA8SW5wdXQuVGV4dEFyZWFcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtjb21tZW50Qm9keX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q29tbWVudEJvZHkoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgYXV0b1NpemU9e3sgbWluUm93czogNSB9fVxyXG4gICAgICAgICAgICAgICAgc2hvd0NvdW50PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgbWF4TGVuZ3RoPXs4MDB9XHJcbiAgICAgICAgICAgICAgPjwvSW5wdXQuVGV4dEFyZWE+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIG1kPXsyNH0+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtzdWJtaXR9IHR5cGU9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICBDb21tZW50XHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxwIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIyMHB4XCIgfX0+XHJcbiAgICAgICAgICBZb3UgbmVlZCB0byBiZSBsb2dnZWQgaW4gdG8gcG9zdCBhIGNvbW1lbnQue1wiIFwifVxyXG4gICAgICAgICAgPExpbmsgaHJlZj17XCIvYXV0aFwifT5cclxuICAgICAgICAgICAgPGE+Q2xpY2sgaGVyZSB0byBsb2dpbiBvciBjcmVhdGUgYW4gYWNjb3VudCAhPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgKX1cclxuICAgICAgPGgzPntjb21tZW50cy5sZW5ndGh9IENvbW1lbnRzPC9oMz5cclxuICAgICAge2FsbENvbW1lbnRzLm1hcCgoY29tbWVudCkgPT4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2NvbW1lbnQuaWR9PlxyXG4gICAgICAgICAgPENvbW1lbnRcclxuICAgICAgICAgICAgYWN0aW9ucz17W1xyXG4gICAgICAgICAgICAgIGF1dGggJiYgYXV0aC51c2VyICYmIChcclxuICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgIGtleT1cImNvbW1lbnQtYmFzaWMtcmVwbHktdG9cIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjb21tZW50VG9nZ2xlLmJpbmQobnVsbCwgY29tbWVudC5pZCl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIFJlcGx5e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgY29tbWVudC51c2VySWQgPT09IGF1dGgudXNlci51aWQgJiYgKFxyXG4gICAgICAgICAgICAgICAgPFBvcGNvbmZpcm1cclxuICAgICAgICAgICAgICAgICAgdGl0bGU9XCJEbyB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBjb21tZW50ID9cIlxyXG4gICAgICAgICAgICAgICAgICBva1RleHQ9XCJZZXNcIlxyXG4gICAgICAgICAgICAgICAgICBjYW5jZWxUZXh0PVwiTm9cIlxyXG4gICAgICAgICAgICAgICAgICBvbkNvbmZpcm09eygpID0+IGRlbGV0ZUNvbW1lbnQoY29tbWVudC5pZCwgY2hhcGlkKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4+RGVsZXRlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9Qb3Bjb25maXJtPlxyXG4gICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgYXV0aC51c2VyICYmIGF1dGgudXNlci51aWQgIT09IGNvbW1lbnQudXNlcklkICYmIChcclxuICAgICAgICAgICAgICAgIDxSZXBvcnQgdHlwZT1cImNvbW1lbnRcIiBkYXRhPXtjb21tZW50fSAvPlxyXG4gICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgIGF1dGhvcj17XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9wcm9maWxlLyR7Y29tbWVudC51c2VySWR9YH0+XHJcbiAgICAgICAgICAgICAgICA8YT57Y29tbWVudC51c2VybmFtZX08L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGF2YXRhcj17XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9wcm9maWxlLyR7Y29tbWVudC51c2VySWR9YH0+XHJcbiAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgPEF2YXRhciBzcmM9e2NvbW1lbnQudXNlckltYWdlfSBhbHQ9e2NvbW1lbnQudXNlcm5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnRlbnQ9ezxwPntjb21tZW50LmNvbnRlbnR9PC9wPn1cclxuICAgICAgICAgICAgZGF0ZXRpbWU9e1xyXG4gICAgICAgICAgICAgIDxUb29sdGlwXHJcbiAgICAgICAgICAgICAgICB0aXRsZT17XHJcbiAgICAgICAgICAgICAgICAgIGNvbW1lbnQuY3JlYXRlZEF0ICYmIHR5cGVvZiBjb21tZW50LmNyZWF0ZWRBdCA9PT0gXCJvYmplY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgID8gbW9tZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC51bml4KGNvbW1lbnQuY3JlYXRlZEF0LnNlY29uZHMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5mb3JtYXQoXCJZWVlZLU1NLUREIEhIOm1tOnNzXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgOiBtb21lbnQoY29tbWVudC5jcmVhdGVkQXQpLmZvcm1hdChcIllZWVktTU0tREQgSEg6bW06c3NcIilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAge2NvbW1lbnQuY3JlYXRlZEF0ICYmIHR5cGVvZiBjb21tZW50LmNyZWF0ZWRBdCA9PT0gXCJvYmplY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgID8gbW9tZW50LnVuaXgoY29tbWVudC5jcmVhdGVkQXQuc2Vjb25kcykuZnJvbU5vdygpXHJcbiAgICAgICAgICAgICAgICAgICAgOiBtb21lbnQoY29tbWVudC5jcmVhdGVkQXQpLmZyb21Ob3coKX1cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2NvbW1lbnQucmVzcG9uc2VzXHJcbiAgICAgICAgICAgICAgLy8gLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgICAvLyAgIGlmIChhLmNyZWF0ZWRBdCkge1xyXG4gICAgICAgICAgICAgIC8vICAgICBpZiAodHlwZW9mIGEuY3JlYXRlZEF0ID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgICAgLy8gICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAvLyAgICAgICAgIG5ldyBEYXRlKGEuY3JlYXRlZEF0LnNlY29uZHMgKiAxMDAwKSAtXHJcbiAgICAgICAgICAgICAgLy8gICAgICAgICBuZXcgRGF0ZShiLmNyZWF0ZWRBdC5zZWNvbmRzICogMTAwMClcclxuICAgICAgICAgICAgICAvLyAgICAgICApO1xyXG4gICAgICAgICAgICAgIC8vICAgICB9IGVsc2VcclxuICAgICAgICAgICAgICAvLyAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIC8vICAgICAgICAgbmV3IERhdGUoYS5jcmVhdGVkQXQuc2Vjb25kcykgLSBuZXcgRGF0ZShiLmNyZWF0ZWRBdClcclxuICAgICAgICAgICAgICAvLyAgICAgICApO1xyXG4gICAgICAgICAgICAgIC8vICAgfVxyXG4gICAgICAgICAgICAgIC8vIH0pXHJcbiAgICAgICAgICAgICAgLm1hcCgoYykgPT4gKFxyXG4gICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17Yy5pZH0+XHJcbiAgICAgICAgICAgICAgICAgIDxDb21tZW50XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9ucz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgYXV0aCAmJiBhdXRoLnVzZXIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleT1cImNvbW1lbnQtYmFzaWMtcmVwbHktdG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Fuc3dlclRvZ2dsZS5iaW5kKG51bGwsIGMuaWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgUmVwbHl7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb21tZW50LnVzZXJJZCA9PT0gYXV0aC51c2VyLnVpZCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQb3Bjb25maXJtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJEbyB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBjb21tZW50ID9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9rVGV4dD1cIlllc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsVGV4dD1cIk5vXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNvbmZpcm09eygpID0+IGRlbGV0ZUNvbW1lbnQoYy5pZCwgY2hhcGlkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkRlbGV0ZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Qb3Bjb25maXJtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICAgIGF1dGgudXNlciAmJiBhdXRoLnVzZXIudWlkICE9PSBjLnVzZXJJZCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZXBvcnQgdHlwZT1cImNvbW1lbnRcIiBkYXRhPXtjb21tZW50fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgIGF1dGhvcj17XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3Byb2ZpbGUvJHtjLnVzZXJJZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+e2MudXNlcm5hbWV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBhdmF0YXI9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9wcm9maWxlLyR7Yy51c2VySWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxBdmF0YXIgc3JjPXtjLnVzZXJJbWFnZX0gYWx0PXtjLnVzZXJuYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9ezxwPntjLmNvbnRlbnR9PC9wPn1cclxuICAgICAgICAgICAgICAgICAgICBkYXRldGltZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYy5jcmVhdGVkQXQgJiYgdHlwZW9mIGMuY3JlYXRlZEF0ID09PSBcIm9iamVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IG1vbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC51bml4KGMuY3JlYXRlZEF0LnNlY29uZHMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZvcm1hdChcIllZWVktTU0tREQgSEg6bW06c3NcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbW9tZW50KGMuY3JlYXRlZEF0KS5mb3JtYXQoXCJZWVlZLU1NLUREIEhIOm1tOnNzXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2MuY3JlYXRlZEF0ICYmIHR5cGVvZiBjLmNyZWF0ZWRBdCA9PT0gXCJvYmplY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBtb21lbnQudW5peChjLmNyZWF0ZWRBdC5zZWNvbmRzKS5mcm9tTm93KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbW9tZW50KGMuY3JlYXRlZEF0KS5mcm9tTm93KCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIHtjbGlja2VkRm9ybSA9PT0gYy5pZCAmJiB0b2dnbGVBbnN3ZXJGb3JtICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBtZD17MjR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dC5UZXh0QXJlYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NvbW1lbnRCb2R5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDb21tZW50Qm9keShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvU2l6ZT17eyBtaW5Sb3dzOiA1IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93Q291bnQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9ezgwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtgQCR7Yy51c2VybmFtZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID48L0lucHV0LlRleHRBcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBtZD17MjR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3N1Ym1pdEFuc3dlci5iaW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21tZW50LmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjLnVzZXJuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjLnVzZXJJZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb21tZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvQ29tbWVudD5cclxuXHJcbiAgICAgICAgICB7Y2xpY2tlZEZvcm0gPT09IGNvbW1lbnQuaWQgJiYgdG9nZ2xlQ29tbWVudEZvcm0gPyAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgbWQ9ezI0fT5cclxuICAgICAgICAgICAgICAgICAgPElucHV0LlRleHRBcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NvbW1lbnRCb2R5fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q29tbWVudEJvZHkoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9TaXplPXt7IG1pblJvd3M6IDUgfX1cclxuICAgICAgICAgICAgICAgICAgICBzaG93Q291bnQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPXs4MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2BAJHtjb21tZW50LnVzZXJuYW1lfWB9XHJcbiAgICAgICAgICAgICAgICAgID48L0lucHV0LlRleHRBcmVhPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIG1kPXsyNH0+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtzdWJtaXRBbnN3ZXIuYmluZChcclxuICAgICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb21tZW50LmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgY29tbWVudC51c2VybmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnQudXNlcklkXHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBDb21tZW50XHJcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICApKX1cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudHM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=