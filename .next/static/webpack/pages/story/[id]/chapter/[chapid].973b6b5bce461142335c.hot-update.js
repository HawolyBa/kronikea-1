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
      responseBody = _ref.responseBody,
      setResponseBody = _ref.setResponseBody,
      deleteComment = _ref.deleteComment,
      chapid = _ref.chapid,
      submitComment = _ref.submitComment;

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
      storyId: id
    });
    setCommentBody("");
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
          lineNumber: 110,
          columnNumber: 17
        }
      }, __jsx("span", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 19
        }
      }, "Delete")), auth.user && auth.user.uid !== comment.userId && __jsx(_common_Report__WEBPACK_IMPORTED_MODULE_6__["default"], {
        type: "comment",
        data: comment,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 17
        }
      })],
      author: __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
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
      }, comment.username)),
      avatar: __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/profile/".concat(comment.userId),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 15
        }
      }, __jsx("a", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 17
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {
        src: comment.userImage,
        alt: comment.username,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 19
        }
      }))),
      content: __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 22
        }
      }, comment.content),
      datetime: __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], {
        title: comment.createdAt && typeof comment.createdAt === "object" ? moment__WEBPACK_IMPORTED_MODULE_5___default.a.unix(comment.createdAt.seconds).format("YYYY-MM-DD HH:mm:ss") : moment__WEBPACK_IMPORTED_MODULE_5___default()(comment.createdAt).format("YYYY-MM-DD HH:mm:ss"),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 15
        }
      }, __jsx("span", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146,
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
            lineNumber: 160,
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
            lineNumber: 168,
            columnNumber: 23
          }
        }, __jsx("span", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 174,
            columnNumber: 25
          }
        }, "Delete")), auth.user && (auth.user.uid !== comment.userId)(__jsx(_common_Report__WEBPACK_IMPORTED_MODULE_6__["default"], {
          type: "comment",
          data: comment,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 179,
            columnNumber: 25
          }
        }))],
        author: __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: "/profile/".concat(c.userId),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 183,
            columnNumber: 21
          }
        }, __jsx("a", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 184,
            columnNumber: 23
          }
        }, c.username)),
        avatar: __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: "/profile/".concat(c.userId),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 188,
            columnNumber: 21
          }
        }, __jsx("a", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 189,
            columnNumber: 23
          }
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {
          src: c.userImage,
          alt: c.username,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 190,
            columnNumber: 25
          }
        }))),
        content: __jsx("p", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 194,
            columnNumber: 28
          }
        }, c.content),
        datetime: __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], {
          title: comment.createdAt && typeof c.createdAt === "object" ? moment__WEBPACK_IMPORTED_MODULE_5___default.a.unix(c.createdAt.seconds).format("YYYY-MM-DD HH:mm:ss") : moment__WEBPACK_IMPORTED_MODULE_5___default()(c.createdAt).format("YYYY-MM-DD HH:mm:ss"),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 196,
            columnNumber: 21
          }
        }, __jsx("span", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 205,
            columnNumber: 23
          }
        }, comment.createdAt && typeof c.createdAt === "object" ? moment__WEBPACK_IMPORTED_MODULE_5___default.a.unix(c.createdAt.seconds).fromNow() : moment__WEBPACK_IMPORTED_MODULE_5___default()(c.createdAt).fromNow())),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 17
        }
      }), clickedForm === c.id && toggleAnswerForm && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215,
          columnNumber: 21
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        md: 24,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216,
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
          lineNumber: 217,
          columnNumber: 25
        }
      })), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        md: 24,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226,
          columnNumber: 23
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        onClick: submit,
        type: "primary",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227,
          columnNumber: 25
        }
      }, "Comment"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232,
          columnNumber: 21
        }
      })));
    })), clickedForm === comment.id && toggleCommentForm ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241,
        columnNumber: 15
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      md: 24,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 242,
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
        lineNumber: 243,
        columnNumber: 19
      }
    })), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      md: 24,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 252,
        columnNumber: 17
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      onClick: submit,
      type: "primary",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 253,
        columnNumber: 19
      }
    }, "Comment"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 258,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jaGFwdGVyL0NvbW1lbnRzLmpzIl0sIm5hbWVzIjpbIkNvbW1lbnRzIiwiY29tbWVudHMiLCJhdXRoIiwicmVzcG9uc2VCb2R5Iiwic2V0UmVzcG9uc2VCb2R5IiwiZGVsZXRlQ29tbWVudCIsImNoYXBpZCIsInN1Ym1pdENvbW1lbnQiLCJSZWFjdCIsInVzZVN0YXRlIiwiY29tbWVudEJvZHkiLCJzZXRDb21tZW50Qm9keSIsInRvZ2dsZUNvbW1lbnRGb3JtIiwic2V0VG9nZ2xlQ29tbWVudEZvcm0iLCJ0b2dnbGVBbnN3ZXJGb3JtIiwic2V0VG9nZ2xlQW5zd2VyRm9ybSIsImNsaWNrZWRGb3JtIiwic2V0Q2xpY2tlZEZvcm0iLCJ0b3BDb21tZW50cyIsImZpbHRlciIsImNvbW0iLCJhbnN3ZXIiLCJyZXNwb25zZXMiLCJhbGxDb21tZW50cyIsIm1hcCIsInJlcyIsImZvckVhY2giLCJyZXNwb25zZSIsImNvbW1lbnRBbnN3ZXJlZElkIiwiaWQiLCJwdXNoIiwiY29tbWVudFRvZ2dsZSIsImFuc3dlclRvZ2dsZSIsInN1Ym1pdCIsImNvbnRlbnQiLCJ1c2VybmFtZSIsInVzZXIiLCJ1c2VySWQiLCJ1aWQiLCJjaGFwdGVySWQiLCJzdG9yeUlkIiwiZSIsInRhcmdldCIsInZhbHVlIiwibWluUm93cyIsIm1hcmdpbkJvdHRvbSIsImxlbmd0aCIsImNvbW1lbnQiLCJiaW5kIiwidXNlckltYWdlIiwiY3JlYXRlZEF0IiwibW9tZW50IiwidW5peCIsInNlY29uZHMiLCJmb3JtYXQiLCJmcm9tTm93IiwiYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQVdBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQVFYO0FBQUE7O0FBQUEsTUFQSkMsUUFPSSxRQVBKQSxRQU9JO0FBQUEsTUFOSkMsSUFNSSxRQU5KQSxJQU1JO0FB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eERILENBREYsRUE4SUdqQixXQUFXLEtBQUsrQixPQUFPLENBQUNsQixFQUF4QixJQUE4QmpCLGlCQUE5QixHQUNDLG1FQUNFLE1BQUMsd0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsd0NBQUQ7QUFBSyxRQUFFLEVBQUUsRUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQywwQ0FBRCxDQUFPLFFBQVA7QUFDRSxXQUFLLEVBQUVULFlBRFQ7QUFFRSxjQUFRLEVBQUUsa0JBQUNzQyxDQUFEO0FBQUEsZUFBT3JDLGVBQWUsQ0FBQ3FDLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQXRCO0FBQUEsT0FGWjtBQUdFLGNBQVEsRUFBRTtBQUFFQyxlQUFPLEVBQUU7QUFBWCxPQUhaO0FBSUUsZUFBUyxFQUFFLElBSmI7QUFLRSxlQUFTLEVBQUUsR0FMYjtBQU1FLGlCQUFXLGFBQU1HLE9BQU8sQ0FBQ1osUUFBZCxDQU5iO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQURGLEVBV0UsTUFBQyx3Q0FBRDtBQUFLLFFBQUUsRUFBRSxFQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLDJDQUFEO0FBQVEsYUFBTyxFQUFFRixNQUFqQjtBQUF5QixVQUFJLEVBQUMsU0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixDQVhGLENBREYsRUFrQkUsTUFBQyw0Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BbEJGLENBREQsR0FxQkcsSUFuS04sQ0FEZTtBQUFBLEdBQWhCLENBL0JILENBREY7QUF5TUQsQ0F6UEQ7O0dBQU1qQyxROztLQUFBQSxRO0FBMlBTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zdG9yeS9baWRdL2NoYXB0ZXIvW2NoYXBpZF0uOTczYjZiNWJjZTQ2MTE0MjMzNWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tbWVudCxcclxuICBUb29sdGlwLFxyXG4gIEF2YXRhcixcclxuICBJbnB1dCxcclxuICBEaXZpZGVyLFxyXG4gIEJ1dHRvbixcclxuICBSb3csXHJcbiAgQ29sLFxyXG4gIFBvcGNvbmZpcm0sXHJcbn0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcclxuaW1wb3J0IFJlcG9ydCBmcm9tIFwiLi4vY29tbW9uL1JlcG9ydFwiO1xyXG5cclxuY29uc3QgQ29tbWVudHMgPSAoe1xyXG4gIGNvbW1lbnRzLFxyXG4gIGF1dGgsXHJcbiAgcmVzcG9uc2VCb2R5LFxyXG4gIHNldFJlc3BvbnNlQm9keSxcclxuICBkZWxldGVDb21tZW50LFxyXG4gIGNoYXBpZCxcclxuICBzdWJtaXRDb21tZW50LFxyXG59KSA9PiB7XHJcbiAgY29uc3QgW2NvbW1lbnRCb2R5LCBzZXRDb21tZW50Qm9keV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbdG9nZ2xlQ29tbWVudEZvcm0sIHNldFRvZ2dsZUNvbW1lbnRGb3JtXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdG9nZ2xlQW5zd2VyRm9ybSwgc2V0VG9nZ2xlQW5zd2VyRm9ybV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2NsaWNrZWRGb3JtLCBzZXRDbGlja2VkRm9ybV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgdG9wQ29tbWVudHMgPSBjb21tZW50cy5maWx0ZXIoKGNvbW0pID0+ICFjb21tLmFuc3dlcik7XHJcbiAgY29uc3QgcmVzcG9uc2VzID0gY29tbWVudHMuZmlsdGVyKChjb21tKSA9PiBjb21tLmFuc3dlcik7XHJcbiAgY29uc3QgYWxsQ29tbWVudHMgPSB0b3BDb21tZW50cy5tYXAoKGNvbW0pID0+IHtcclxuICAgIGxldCByZXMgPSBbXTtcclxuICAgIHJlc3BvbnNlcy5mb3JFYWNoKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBpZiAocmVzcG9uc2UuY29tbWVudEFuc3dlcmVkSWQgPT09IGNvbW0uaWQpIHtcclxuICAgICAgICByZXMucHVzaChyZXNwb25zZSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHsgLi4uY29tbSwgcmVzcG9uc2VzOiByZXMgfTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgY29tbWVudFRvZ2dsZSA9IChpZCkgPT4ge1xyXG4gICAgc2V0Q2xpY2tlZEZvcm0oaWQpO1xyXG4gICAgc2V0VG9nZ2xlQ29tbWVudEZvcm0oIXRvZ2dsZUNvbW1lbnRGb3JtKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBhbnN3ZXJUb2dnbGUgPSAoaWQpID0+IHtcclxuICAgIHNldENsaWNrZWRGb3JtKGlkKTtcclxuICAgIHNldFRvZ2dsZUFuc3dlckZvcm0oIXRvZ2dsZUFuc3dlckZvcm0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHN1Ym1pdCA9ICgpID0+IHtcclxuICAgIHN1Ym1pdENvbW1lbnQoe1xyXG4gICAgICBjb250ZW50OiBjb21tZW50Qm9keSxcclxuICAgICAgdXNlcm5hbWU6IGF1dGgudXNlci51c2VybmFtZSxcclxuICAgICAgdXNlcklkOiBhdXRoLnVzZXIudWlkLFxyXG4gICAgICBhbnN3ZXI6IGZhbHNlLFxyXG4gICAgICBjaGFwdGVySWQ6IGNoYXBpZCxcclxuICAgICAgc3RvcnlJZDogaWQsXHJcbiAgICB9KTtcclxuICAgIHNldENvbW1lbnRCb2R5KFwiXCIpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb21tZW50c1wiPlxyXG4gICAgICB7YXV0aC51c2VyID8gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8aDM+QWRkIGEgY29tbWVudDwvaDM+XHJcbiAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICA8Q29sIG1kPXsyNH0+XHJcbiAgICAgICAgICAgICAgPElucHV0LlRleHRBcmVhXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Y29tbWVudEJvZHl9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldENvbW1lbnRCb2R5KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgIGF1dG9TaXplPXt7IG1pblJvd3M6IDUgfX1cclxuICAgICAgICAgICAgICAgIHNob3dDb3VudD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIG1heExlbmd0aD17ODAwfVxyXG4gICAgICAgICAgICAgID48L0lucHV0LlRleHRBcmVhPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPENvbCBtZD17MjR9PlxyXG4gICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17c3VibWl0fSB0eXBlPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgQ29tbWVudFxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICA8Lz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8cCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMjBweFwiIH19PlxyXG4gICAgICAgICAgWW91IG5lZWQgdG8gYmUgbG9nZ2VkIGluIHRvIHBvc3QgYSBjb21tZW50LntcIiBcIn1cclxuICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL2F1dGhcIn0+XHJcbiAgICAgICAgICAgIDxhPkNsaWNrIGhlcmUgdG8gbG9naW4gb3IgY3JlYXRlIGFuIGFjY291bnQgITwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L3A+XHJcbiAgICAgICl9XHJcbiAgICAgIDxoMz57Y29tbWVudHMubGVuZ3RofSBDb21tZW50czwvaDM+XHJcbiAgICAgIHthbGxDb21tZW50cy5tYXAoKGNvbW1lbnQpID0+IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPENvbW1lbnRcclxuICAgICAgICAgICAga2V5PXtjb21tZW50LmlkfVxyXG4gICAgICAgICAgICBhY3Rpb25zPXtbXHJcbiAgICAgICAgICAgICAgYXV0aCAmJiBhdXRoLnVzZXIgJiYgKFxyXG4gICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAga2V5PVwiY29tbWVudC1iYXNpYy1yZXBseS10b1wiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2NvbW1lbnRUb2dnbGUuYmluZChudWxsLCBjb21tZW50LmlkKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgUmVwbHl7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICBjb21tZW50LnVzZXJJZCA9PT0gYXV0aC51c2VyLnVpZCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8UG9wY29uZmlybVxyXG4gICAgICAgICAgICAgICAgICB0aXRsZT1cIkRvIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIGNvbW1lbnQgP1wiXHJcbiAgICAgICAgICAgICAgICAgIG9rVGV4dD1cIlllc1wiXHJcbiAgICAgICAgICAgICAgICAgIGNhbmNlbFRleHQ9XCJOb1wiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ29uZmlybT17KCkgPT4gZGVsZXRlQ29tbWVudChjb21tZW50LmlkLCBjaGFwaWQpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj5EZWxldGU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L1BvcGNvbmZpcm0+XHJcbiAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICBhdXRoLnVzZXIgJiYgYXV0aC51c2VyLnVpZCAhPT0gY29tbWVudC51c2VySWQgJiYgKFxyXG4gICAgICAgICAgICAgICAgPFJlcG9ydCB0eXBlPVwiY29tbWVudFwiIGRhdGE9e2NvbW1lbnR9IC8+XHJcbiAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgYXV0aG9yPXtcclxuICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3Byb2ZpbGUvJHtjb21tZW50LnVzZXJJZH1gfT5cclxuICAgICAgICAgICAgICAgIDxhPntjb21tZW50LnVzZXJuYW1lfTwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYXZhdGFyPXtcclxuICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3Byb2ZpbGUvJHtjb21tZW50LnVzZXJJZH1gfT5cclxuICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICA8QXZhdGFyIHNyYz17Y29tbWVudC51c2VySW1hZ2V9IGFsdD17Y29tbWVudC51c2VybmFtZX0gLz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29udGVudD17PHA+e2NvbW1lbnQuY29udGVudH08L3A+fVxyXG4gICAgICAgICAgICBkYXRldGltZT17XHJcbiAgICAgICAgICAgICAgPFRvb2x0aXBcclxuICAgICAgICAgICAgICAgIHRpdGxlPXtcclxuICAgICAgICAgICAgICAgICAgY29tbWVudC5jcmVhdGVkQXQgJiYgdHlwZW9mIGNvbW1lbnQuY3JlYXRlZEF0ID09PSBcIm9iamVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPyBtb21lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnVuaXgoY29tbWVudC5jcmVhdGVkQXQuc2Vjb25kcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmZvcm1hdChcIllZWVktTU0tREQgSEg6bW06c3NcIilcclxuICAgICAgICAgICAgICAgICAgICA6IG1vbWVudChjb21tZW50LmNyZWF0ZWRBdCkuZm9ybWF0KFwiWVlZWS1NTS1ERCBISDptbTpzc1wiKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICB7Y29tbWVudC5jcmVhdGVkQXQgJiYgdHlwZW9mIGNvbW1lbnQuY3JlYXRlZEF0ID09PSBcIm9iamVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPyBtb21lbnQudW5peChjb21tZW50LmNyZWF0ZWRBdC5zZWNvbmRzKS5mcm9tTm93KClcclxuICAgICAgICAgICAgICAgICAgICA6IG1vbWVudChjb21tZW50LmNyZWF0ZWRBdCkuZnJvbU5vdygpfVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7Y29tbWVudC5yZXNwb25zZXMubWFwKChjKSA9PiAoXHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxDb21tZW50XHJcbiAgICAgICAgICAgICAgICAgIGtleT17Yy5pZH1cclxuICAgICAgICAgICAgICAgICAgYWN0aW9ucz17W1xyXG4gICAgICAgICAgICAgICAgICAgIGF1dGggJiYgYXV0aC51c2VyICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT1cImNvbW1lbnQtYmFzaWMtcmVwbHktdG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXthbnN3ZXJUb2dnbGUuYmluZChudWxsLCBjLmlkKX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUmVwbHl7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICBjb21tZW50LnVzZXJJZCA9PT0gYXV0aC51c2VyLnVpZCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8UG9wY29uZmlybVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkRvIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIGNvbW1lbnQgP1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9rVGV4dD1cIlllc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbFRleHQ9XCJOb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29uZmlybT17KCkgPT4gZGVsZXRlQ29tbWVudChjLmlkLCBjaGFwaWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5EZWxldGU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1BvcGNvbmZpcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICBhdXRoLnVzZXIgJiZcclxuICAgICAgICAgICAgICAgICAgICAgIChhdXRoLnVzZXIudWlkICE9PSBjb21tZW50LnVzZXJJZCkoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZXBvcnQgdHlwZT1cImNvbW1lbnRcIiBkYXRhPXtjb21tZW50fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgYXV0aG9yPXtcclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3Byb2ZpbGUvJHtjLnVzZXJJZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhPntjLnVzZXJuYW1lfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgYXZhdGFyPXtcclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3Byb2ZpbGUvJHtjLnVzZXJJZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QXZhdGFyIHNyYz17Yy51c2VySW1hZ2V9IGFsdD17Yy51c2VybmFtZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgY29udGVudD17PHA+e2MuY29udGVudH08L3A+fVxyXG4gICAgICAgICAgICAgICAgICBkYXRldGltZT17XHJcbiAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBcclxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudC5jcmVhdGVkQXQgJiYgdHlwZW9mIGMuY3JlYXRlZEF0ID09PSBcIm9iamVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBtb21lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnVuaXgoYy5jcmVhdGVkQXQuc2Vjb25kcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZvcm1hdChcIllZWVktTU0tREQgSEg6bW06c3NcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IG1vbWVudChjLmNyZWF0ZWRBdCkuZm9ybWF0KFwiWVlZWS1NTS1ERCBISDptbTpzc1wiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y29tbWVudC5jcmVhdGVkQXQgJiYgdHlwZW9mIGMuY3JlYXRlZEF0ID09PSBcIm9iamVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBtb21lbnQudW5peChjLmNyZWF0ZWRBdC5zZWNvbmRzKS5mcm9tTm93KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IG1vbWVudChjLmNyZWF0ZWRBdCkuZnJvbU5vdygpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIHtjbGlja2VkRm9ybSA9PT0gYy5pZCAmJiB0b2dnbGVBbnN3ZXJGb3JtICYmIChcclxuICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENvbCBtZD17MjR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQuVGV4dEFyZWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cmVzcG9uc2VCb2R5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UmVzcG9uc2VCb2R5KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvU2l6ZT17eyBtaW5Sb3dzOiA1IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0NvdW50PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aD17ODAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtgQCR7Yy51c2VybmFtZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+PC9JbnB1dC5UZXh0QXJlYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENvbCBtZD17MjR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3N1Ym1pdH0gdHlwZT1cInByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBDb21tZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvQ29tbWVudD5cclxuXHJcbiAgICAgICAgICB7Y2xpY2tlZEZvcm0gPT09IGNvbW1lbnQuaWQgJiYgdG9nZ2xlQ29tbWVudEZvcm0gPyAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgbWQ9ezI0fT5cclxuICAgICAgICAgICAgICAgICAgPElucHV0LlRleHRBcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Jlc3BvbnNlQm9keX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFJlc3BvbnNlQm9keShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b1NpemU9e3sgbWluUm93czogNSB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHNob3dDb3VudD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9ezgwMH1cclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17YEAke2NvbW1lbnQudXNlcm5hbWV9YH1cclxuICAgICAgICAgICAgICAgICAgPjwvSW5wdXQuVGV4dEFyZWE+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgbWQ9ezI0fT5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtzdWJtaXR9IHR5cGU9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgQ29tbWVudFxyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICkpfVxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21tZW50cztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==