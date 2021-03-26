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
      storyId = _ref.storyId;

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

  return __jsx("section", {
    className: "comments",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 5
    }
  }, auth.user ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 11
    }
  }, "Add a comment"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: 24,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
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
      lineNumber: 70,
      columnNumber: 15
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: 24,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    onClick: submit,
    type: "primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 15
    }
  }, "Comment"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 11
    }
  })) : __jsx("p", {
    style: {
      marginBottom: "20px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }, "You need to be logged in to post a comment.", " ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/auth",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 11
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }
  }, "Click here to login or create an account !"))), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
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
          lineNumber: 101,
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
          lineNumber: 109,
          columnNumber: 17
        }
      }, __jsx("span", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 19
        }
      }, "Delete")), auth.user && auth.user.uid !== comment.userId && __jsx(_common_Report__WEBPACK_IMPORTED_MODULE_6__["default"], {
        type: "comment",
        data: comment,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 17
        }
      })],
      author: __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/profile/".concat(comment.userId),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 15
        }
      }, __jsx("a", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 17
        }
      }, comment.username)),
      avatar: __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/profile/".concat(comment.userId),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 15
        }
      }, __jsx("a", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 17
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {
        src: comment.userImage,
        alt: comment.username,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 19
        }
      }))),
      content: __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 22
        }
      }, comment.content),
      datetime: __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], {
        title: comment.createdAt && typeof comment.createdAt === "object" ? moment__WEBPACK_IMPORTED_MODULE_5___default.a.unix(comment.createdAt.seconds).format("YYYY-MM-DD HH:mm:ss") : moment__WEBPACK_IMPORTED_MODULE_5___default()(comment.createdAt).format("YYYY-MM-DD HH:mm:ss"),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 15
        }
      }, __jsx("span", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 17
        }
      }, comment.createdAt && typeof comment.createdAt === "object" ? moment__WEBPACK_IMPORTED_MODULE_5___default.a.unix(comment.createdAt.seconds).fromNow() : moment__WEBPACK_IMPORTED_MODULE_5___default()(comment.createdAt).fromNow())),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
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
            lineNumber: 159,
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
            lineNumber: 167,
            columnNumber: 23
          }
        }, __jsx("span", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 173,
            columnNumber: 25
          }
        }, "Delete")), auth.user && (auth.user.uid !== comment.userId)(__jsx(_common_Report__WEBPACK_IMPORTED_MODULE_6__["default"], {
          type: "comment",
          data: comment,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 178,
            columnNumber: 25
          }
        }))],
        author: __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: "/profile/".concat(c.userId),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 182,
            columnNumber: 21
          }
        }, __jsx("a", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 183,
            columnNumber: 23
          }
        }, c.username)),
        avatar: __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: "/profile/".concat(c.userId),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 187,
            columnNumber: 21
          }
        }, __jsx("a", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 188,
            columnNumber: 23
          }
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {
          src: c.userImage,
          alt: c.username,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 189,
            columnNumber: 25
          }
        }))),
        content: __jsx("p", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 193,
            columnNumber: 28
          }
        }, c.content),
        datetime: __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], {
          title: comment.createdAt && typeof c.createdAt === "object" ? moment__WEBPACK_IMPORTED_MODULE_5___default.a.unix(c.createdAt.seconds).format("YYYY-MM-DD HH:mm:ss") : moment__WEBPACK_IMPORTED_MODULE_5___default()(c.createdAt).format("YYYY-MM-DD HH:mm:ss"),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 195,
            columnNumber: 21
          }
        }, __jsx("span", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 204,
            columnNumber: 23
          }
        }, comment.createdAt && typeof c.createdAt === "object" ? moment__WEBPACK_IMPORTED_MODULE_5___default.a.unix(c.createdAt.seconds).fromNow() : moment__WEBPACK_IMPORTED_MODULE_5___default()(c.createdAt).fromNow())),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 17
        }
      }), clickedForm === c.id && toggleAnswerForm && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214,
          columnNumber: 21
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        md: 24,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215,
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
          lineNumber: 216,
          columnNumber: 25
        }
      })), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        md: 24,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225,
          columnNumber: 23
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        onClick: submit,
        type: "primary",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226,
          columnNumber: 25
        }
      }, "Comment"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231,
          columnNumber: 21
        }
      })));
    })), clickedForm === comment.id && toggleCommentForm ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 240,
        columnNumber: 15
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      md: 24,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241,
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
        lineNumber: 242,
        columnNumber: 19
      }
    })), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      md: 24,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 251,
        columnNumber: 17
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      onClick: submit,
      type: "primary",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 252,
        columnNumber: 19
      }
    }, "Comment"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 257,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jaGFwdGVyL0NvbW1lbnRzLmpzIl0sIm5hbWVzIjpbIkNvbW1lbnRzIiwiY29tbWVudHMiLCJhdXRoIiwiZGVsZXRlQ29tbWVudCIsInN1Ym1pdENvbW1lbnQiLCJjaGFwaWQiLCJzdG9yeUlkIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImNvbW1lbnRCb2R5Iiwic2V0Q29tbWVudEJvZHkiLCJ0b2dnbGVDb21tZW50Rm9ybSIsInNldFRvZ2dsZUNvbW1lbnRGb3JtIiwidG9nZ2xlQW5zd2VyRm9ybSIsInNldFRvZ2dsZUFuc3dlckZvcm0iLCJjbGlja2VkRm9ybSIsInNldENsaWNrZWRGb3JtIiwidG9wQ29tbWVudHMiLCJmaWx0ZXIiLCJjb21tIiwiYW5zd2VyIiwicmVzcG9uc2VzIiwiYWxsQ29tbWVudHMiLCJtYXAiLCJyZXMiLCJmb3JFYWNoIiwicmVzcG9uc2UiLCJjb21tZW50QW5zd2VyZWRJZCIsImlkIiwicHVzaCIsImNvbW1lbnRUb2dnbGUiLCJhbnN3ZXJUb2dnbGUiLCJzdWJtaXQiLCJjb250ZW50IiwidXNlcm5hbWUiLCJ1c2VyIiwidXNlcklkIiwidWlkIiwiY2hhcHRlcklkIiwiZSIsInRhcmdldCIsInZhbHVlIiwibWluUm93cyIsIm1hcmdpbkJvdHRvbSIsImxlbmd0aCIsImNvbW1lbnQiLCJiaW5kIiwidXNlckltYWdlIiwiY3JlYXRlZEF0IiwibW9tZW50IiwidW5peCIsInNlY29uZHMiLCJmb3JtYXQiLCJmcm9tTm93IiwiYyIsInJlc3BvbnNlQm9keSIsInNldFJlc3BvbnNlQm9keSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQVdBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQU9YO0FBQUE7O0FBQUEsTUFOSkMsUUFNSSxRQU5KQSxRQU1JO0FBQUEsTUFMSkMsSUFLSSxRQUxKQSxJQUtJO0FB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QUFPLENBQUNqQixFQUF4QixJQUE4QmpCLGlCQUE5QixHQUNDLG1FQUNFLE1BQUMsd0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsd0NBQUQ7QUFBSyxRQUFFLEVBQUUsRUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQywwQ0FBRCxDQUFPLFFBQVA7QUFDRSxXQUFLLEVBQUU0QyxZQURUO0FBRUUsY0FBUSxFQUFFLGtCQUFDaEIsQ0FBRDtBQUFBLGVBQU9pQixlQUFlLENBQUNqQixDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUF0QjtBQUFBLE9BRlo7QUFHRSxjQUFRLEVBQUU7QUFBRUMsZUFBTyxFQUFFO0FBQVgsT0FIWjtBQUlFLGVBQVMsRUFBRSxJQUpiO0FBS0UsZUFBUyxFQUFFLEdBTGI7QUFNRSxpQkFBVyxhQUFNRyxPQUFPLENBQUNYLFFBQWQsQ0FOYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsQ0FERixFQVdFLE1BQUMsd0NBQUQ7QUFBSyxRQUFFLEVBQUUsRUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQywyQ0FBRDtBQUFRLGFBQU8sRUFBRUYsTUFBakI7QUFBeUIsVUFBSSxFQUFDLFNBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsQ0FYRixDQURGLEVBa0JFLE1BQUMsNENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQWxCRixDQURELEdBcUJHLElBbktOLENBRGU7QUFBQSxHQUFoQixDQS9CSCxDQURGO0FBeU1ELENBeFBEOztHQUFNaEMsUTs7S0FBQUEsUTtBQTBQU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3RvcnkvW2lkXS9jaGFwdGVyL1tjaGFwaWRdLjI1MjkwZTI1ZmVlMTkxZTk3NjcxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbW1lbnQsXHJcbiAgVG9vbHRpcCxcclxuICBBdmF0YXIsXHJcbiAgSW5wdXQsXHJcbiAgRGl2aWRlcixcclxuICBCdXR0b24sXHJcbiAgUm93LFxyXG4gIENvbCxcclxuICBQb3Bjb25maXJtLFxyXG59IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XHJcbmltcG9ydCBSZXBvcnQgZnJvbSBcIi4uL2NvbW1vbi9SZXBvcnRcIjtcclxuXHJcbmNvbnN0IENvbW1lbnRzID0gKHtcclxuICBjb21tZW50cyxcclxuICBhdXRoLFxyXG4gIGRlbGV0ZUNvbW1lbnQsXHJcbiAgc3VibWl0Q29tbWVudCxcclxuICBjaGFwaWQsXHJcbiAgc3RvcnlJZCxcclxufSkgPT4ge1xyXG4gIGNvbnN0IFtjb21tZW50Qm9keSwgc2V0Q29tbWVudEJvZHldID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3RvZ2dsZUNvbW1lbnRGb3JtLCBzZXRUb2dnbGVDb21tZW50Rm9ybV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3RvZ2dsZUFuc3dlckZvcm0sIHNldFRvZ2dsZUFuc3dlckZvcm1dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtjbGlja2VkRm9ybSwgc2V0Q2xpY2tlZEZvcm1dID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IHRvcENvbW1lbnRzID0gY29tbWVudHMuZmlsdGVyKChjb21tKSA9PiAhY29tbS5hbnN3ZXIpO1xyXG4gIGNvbnN0IHJlc3BvbnNlcyA9IGNvbW1lbnRzLmZpbHRlcigoY29tbSkgPT4gY29tbS5hbnN3ZXIpO1xyXG4gIGNvbnN0IGFsbENvbW1lbnRzID0gdG9wQ29tbWVudHMubWFwKChjb21tKSA9PiB7XHJcbiAgICBsZXQgcmVzID0gW107XHJcbiAgICByZXNwb25zZXMuZm9yRWFjaCgocmVzcG9uc2UpID0+IHtcclxuICAgICAgaWYgKHJlc3BvbnNlLmNvbW1lbnRBbnN3ZXJlZElkID09PSBjb21tLmlkKSB7XHJcbiAgICAgICAgcmVzLnB1c2gocmVzcG9uc2UpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB7IC4uLmNvbW0sIHJlc3BvbnNlczogcmVzIH07XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGNvbW1lbnRUb2dnbGUgPSAoaWQpID0+IHtcclxuICAgIHNldENsaWNrZWRGb3JtKGlkKTtcclxuICAgIHNldFRvZ2dsZUNvbW1lbnRGb3JtKCF0b2dnbGVDb21tZW50Rm9ybSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYW5zd2VyVG9nZ2xlID0gKGlkKSA9PiB7XHJcbiAgICBzZXRDbGlja2VkRm9ybShpZCk7XHJcbiAgICBzZXRUb2dnbGVBbnN3ZXJGb3JtKCF0b2dnbGVBbnN3ZXJGb3JtKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzdWJtaXQgPSAoKSA9PiB7XHJcbiAgICBzdWJtaXRDb21tZW50KHtcclxuICAgICAgY29udGVudDogY29tbWVudEJvZHksXHJcbiAgICAgIHVzZXJuYW1lOiBhdXRoLnVzZXIudXNlcm5hbWUsXHJcbiAgICAgIHVzZXJJZDogYXV0aC51c2VyLnVpZCxcclxuICAgICAgYW5zd2VyOiBmYWxzZSxcclxuICAgICAgY2hhcHRlcklkOiBjaGFwaWQsXHJcbiAgICAgIHN0b3J5SWQ6IHN0b3J5SWQsXHJcbiAgICB9KTtcclxuICAgIHNldENvbW1lbnRCb2R5KFwiXCIpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb21tZW50c1wiPlxyXG4gICAgICB7YXV0aC51c2VyID8gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8aDM+QWRkIGEgY29tbWVudDwvaDM+XHJcbiAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICA8Q29sIG1kPXsyNH0+XHJcbiAgICAgICAgICAgICAgPElucHV0LlRleHRBcmVhXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Y29tbWVudEJvZHl9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldENvbW1lbnRCb2R5KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgIGF1dG9TaXplPXt7IG1pblJvd3M6IDUgfX1cclxuICAgICAgICAgICAgICAgIHNob3dDb3VudD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIG1heExlbmd0aD17ODAwfVxyXG4gICAgICAgICAgICAgID48L0lucHV0LlRleHRBcmVhPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPENvbCBtZD17MjR9PlxyXG4gICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17c3VibWl0fSB0eXBlPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgQ29tbWVudFxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICA8Lz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8cCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMjBweFwiIH19PlxyXG4gICAgICAgICAgWW91IG5lZWQgdG8gYmUgbG9nZ2VkIGluIHRvIHBvc3QgYSBjb21tZW50LntcIiBcIn1cclxuICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL2F1dGhcIn0+XHJcbiAgICAgICAgICAgIDxhPkNsaWNrIGhlcmUgdG8gbG9naW4gb3IgY3JlYXRlIGFuIGFjY291bnQgITwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L3A+XHJcbiAgICAgICl9XHJcbiAgICAgIDxoMz57Y29tbWVudHMubGVuZ3RofSBDb21tZW50czwvaDM+XHJcbiAgICAgIHthbGxDb21tZW50cy5tYXAoKGNvbW1lbnQpID0+IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPENvbW1lbnRcclxuICAgICAgICAgICAga2V5PXtjb21tZW50LmlkfVxyXG4gICAgICAgICAgICBhY3Rpb25zPXtbXHJcbiAgICAgICAgICAgICAgYXV0aCAmJiBhdXRoLnVzZXIgJiYgKFxyXG4gICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAga2V5PVwiY29tbWVudC1iYXNpYy1yZXBseS10b1wiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2NvbW1lbnRUb2dnbGUuYmluZChudWxsLCBjb21tZW50LmlkKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgUmVwbHl7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICBjb21tZW50LnVzZXJJZCA9PT0gYXV0aC51c2VyLnVpZCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8UG9wY29uZmlybVxyXG4gICAgICAgICAgICAgICAgICB0aXRsZT1cIkRvIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIGNvbW1lbnQgP1wiXHJcbiAgICAgICAgICAgICAgICAgIG9rVGV4dD1cIlllc1wiXHJcbiAgICAgICAgICAgICAgICAgIGNhbmNlbFRleHQ9XCJOb1wiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ29uZmlybT17KCkgPT4gZGVsZXRlQ29tbWVudChjb21tZW50LmlkLCBjaGFwaWQpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj5EZWxldGU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L1BvcGNvbmZpcm0+XHJcbiAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICBhdXRoLnVzZXIgJiYgYXV0aC51c2VyLnVpZCAhPT0gY29tbWVudC51c2VySWQgJiYgKFxyXG4gICAgICAgICAgICAgICAgPFJlcG9ydCB0eXBlPVwiY29tbWVudFwiIGRhdGE9e2NvbW1lbnR9IC8+XHJcbiAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgYXV0aG9yPXtcclxuICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3Byb2ZpbGUvJHtjb21tZW50LnVzZXJJZH1gfT5cclxuICAgICAgICAgICAgICAgIDxhPntjb21tZW50LnVzZXJuYW1lfTwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYXZhdGFyPXtcclxuICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3Byb2ZpbGUvJHtjb21tZW50LnVzZXJJZH1gfT5cclxuICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICA8QXZhdGFyIHNyYz17Y29tbWVudC51c2VySW1hZ2V9IGFsdD17Y29tbWVudC51c2VybmFtZX0gLz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29udGVudD17PHA+e2NvbW1lbnQuY29udGVudH08L3A+fVxyXG4gICAgICAgICAgICBkYXRldGltZT17XHJcbiAgICAgICAgICAgICAgPFRvb2x0aXBcclxuICAgICAgICAgICAgICAgIHRpdGxlPXtcclxuICAgICAgICAgICAgICAgICAgY29tbWVudC5jcmVhdGVkQXQgJiYgdHlwZW9mIGNvbW1lbnQuY3JlYXRlZEF0ID09PSBcIm9iamVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPyBtb21lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnVuaXgoY29tbWVudC5jcmVhdGVkQXQuc2Vjb25kcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmZvcm1hdChcIllZWVktTU0tREQgSEg6bW06c3NcIilcclxuICAgICAgICAgICAgICAgICAgICA6IG1vbWVudChjb21tZW50LmNyZWF0ZWRBdCkuZm9ybWF0KFwiWVlZWS1NTS1ERCBISDptbTpzc1wiKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICB7Y29tbWVudC5jcmVhdGVkQXQgJiYgdHlwZW9mIGNvbW1lbnQuY3JlYXRlZEF0ID09PSBcIm9iamVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPyBtb21lbnQudW5peChjb21tZW50LmNyZWF0ZWRBdC5zZWNvbmRzKS5mcm9tTm93KClcclxuICAgICAgICAgICAgICAgICAgICA6IG1vbWVudChjb21tZW50LmNyZWF0ZWRBdCkuZnJvbU5vdygpfVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7Y29tbWVudC5yZXNwb25zZXMubWFwKChjKSA9PiAoXHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxDb21tZW50XHJcbiAgICAgICAgICAgICAgICAgIGtleT17Yy5pZH1cclxuICAgICAgICAgICAgICAgICAgYWN0aW9ucz17W1xyXG4gICAgICAgICAgICAgICAgICAgIGF1dGggJiYgYXV0aC51c2VyICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT1cImNvbW1lbnQtYmFzaWMtcmVwbHktdG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXthbnN3ZXJUb2dnbGUuYmluZChudWxsLCBjLmlkKX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUmVwbHl7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICBjb21tZW50LnVzZXJJZCA9PT0gYXV0aC51c2VyLnVpZCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8UG9wY29uZmlybVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkRvIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIGNvbW1lbnQgP1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9rVGV4dD1cIlllc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbFRleHQ9XCJOb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29uZmlybT17KCkgPT4gZGVsZXRlQ29tbWVudChjLmlkLCBjaGFwaWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5EZWxldGU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1BvcGNvbmZpcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICBhdXRoLnVzZXIgJiZcclxuICAgICAgICAgICAgICAgICAgICAgIChhdXRoLnVzZXIudWlkICE9PSBjb21tZW50LnVzZXJJZCkoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZXBvcnQgdHlwZT1cImNvbW1lbnRcIiBkYXRhPXtjb21tZW50fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgYXV0aG9yPXtcclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3Byb2ZpbGUvJHtjLnVzZXJJZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhPntjLnVzZXJuYW1lfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgYXZhdGFyPXtcclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3Byb2ZpbGUvJHtjLnVzZXJJZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QXZhdGFyIHNyYz17Yy51c2VySW1hZ2V9IGFsdD17Yy51c2VybmFtZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgY29udGVudD17PHA+e2MuY29udGVudH08L3A+fVxyXG4gICAgICAgICAgICAgICAgICBkYXRldGltZT17XHJcbiAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBcclxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudC5jcmVhdGVkQXQgJiYgdHlwZW9mIGMuY3JlYXRlZEF0ID09PSBcIm9iamVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBtb21lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnVuaXgoYy5jcmVhdGVkQXQuc2Vjb25kcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZvcm1hdChcIllZWVktTU0tREQgSEg6bW06c3NcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IG1vbWVudChjLmNyZWF0ZWRBdCkuZm9ybWF0KFwiWVlZWS1NTS1ERCBISDptbTpzc1wiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y29tbWVudC5jcmVhdGVkQXQgJiYgdHlwZW9mIGMuY3JlYXRlZEF0ID09PSBcIm9iamVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBtb21lbnQudW5peChjLmNyZWF0ZWRBdC5zZWNvbmRzKS5mcm9tTm93KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IG1vbWVudChjLmNyZWF0ZWRBdCkuZnJvbU5vdygpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIHtjbGlja2VkRm9ybSA9PT0gYy5pZCAmJiB0b2dnbGVBbnN3ZXJGb3JtICYmIChcclxuICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENvbCBtZD17MjR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQuVGV4dEFyZWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y29tbWVudEJvZHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDb21tZW50Qm9keShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b1NpemU9e3sgbWluUm93czogNSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dDb3VudD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9ezgwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17YEAke2MudXNlcm5hbWV9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvSW5wdXQuVGV4dEFyZWE+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxDb2wgbWQ9ezI0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtzdWJtaXR9IHR5cGU9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgQ29tbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L0NvbW1lbnQ+XHJcblxyXG4gICAgICAgICAge2NsaWNrZWRGb3JtID09PSBjb21tZW50LmlkICYmIHRvZ2dsZUNvbW1lbnRGb3JtID8gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sIG1kPXsyNH0+XHJcbiAgICAgICAgICAgICAgICAgIDxJbnB1dC5UZXh0QXJlYVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtyZXNwb25zZUJvZHl9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRSZXNwb25zZUJvZHkoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9TaXplPXt7IG1pblJvd3M6IDUgfX1cclxuICAgICAgICAgICAgICAgICAgICBzaG93Q291bnQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPXs4MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2BAJHtjb21tZW50LnVzZXJuYW1lfWB9XHJcbiAgICAgICAgICAgICAgICAgID48L0lucHV0LlRleHRBcmVhPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIG1kPXsyNH0+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17c3VibWl0fSB0eXBlPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIENvbW1lbnRcclxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgIDwvPlxyXG4gICAgICApKX1cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudHM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=