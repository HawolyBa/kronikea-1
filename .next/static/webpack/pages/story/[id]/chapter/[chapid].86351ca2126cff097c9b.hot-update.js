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
      commentBody = _ref.commentBody,
      setCommentBody = _ref.setCommentBody,
      submit = _ref.submit,
      responseBody = _ref.responseBody,
      setResponseBody = _ref.setResponseBody;

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

  return __jsx("section", {
    className: "comments",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }
  }, auth.user ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }, "Add a comment"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: 24,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
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
      lineNumber: 57,
      columnNumber: 15
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: 24,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    onClick: submit,
    type: "primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 15
    }
  }, "Comment"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  })) : __jsx("p", {
    style: {
      marginBottom: "20px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }, "You need to be logged in to post a comment.", " ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/auth",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }, "Click here to login or create an account !"))), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
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
          lineNumber: 88,
          columnNumber: 17
        }
      }, "Reply", " "), comment.userId === auth.user.uid && __jsx("span", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 51
        }
      }, "Delete"), auth.user && auth.user.uid !== comment.userId && __jsx(_common_Report__WEBPACK_IMPORTED_MODULE_6__["default"], {
        type: "comment",
        data: comment,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 17
        }
      })],
      author: __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/profile/".concat(comment.userId),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 15
        }
      }, __jsx("a", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 17
        }
      }, comment.username)),
      avatar: __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/profile/".concat(comment.userId),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 15
        }
      }, __jsx("a", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 17
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {
        src: comment.userImage,
        alt: comment.username,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 19
        }
      }))),
      content: __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 22
        }
      }, comment.content),
      datetime: __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], {
        title: comment.createdAt && typeof comment.createdAt === "object" ? moment__WEBPACK_IMPORTED_MODULE_5___default.a.unix(comment.createdAt.seconds).format("YYYY-MM-DD HH:mm:ss") : moment__WEBPACK_IMPORTED_MODULE_5___default()(comment.createdAt).format("YYYY-MM-DD HH:mm:ss"),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 15
        }
      }, __jsx("span", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 17
        }
      }, comment.createdAt && typeof comment.createdAt === "object" ? moment__WEBPACK_IMPORTED_MODULE_5___default.a.unix(comment.createdAt.seconds).fromNow() : moment__WEBPACK_IMPORTED_MODULE_5___default()(comment.createdAt).fromNow())),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
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
            lineNumber: 137,
            columnNumber: 23
          }
        }, "Reply", " "), comment.userId === auth.user.uid && __jsx("span", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 57
          }
        }, "Delete"), auth.user && (auth.user.uid !== comment.userId)(__jsx(_common_Report__WEBPACK_IMPORTED_MODULE_6__["default"], {
          type: "comment",
          data: comment,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 25
          }
        }))],
        author: __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: "/profile/".concat(c.userId),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 21
          }
        }, __jsx("a", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 23
          }
        }, c.username)),
        avatar: __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: "/profile/".concat(c.userId),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 156,
            columnNumber: 21
          }
        }, __jsx("a", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 23
          }
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {
          src: c.userImage,
          alt: c.username,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 158,
            columnNumber: 25
          }
        }))),
        content: __jsx("p", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 162,
            columnNumber: 28
          }
        }, c.content),
        datetime: __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], {
          title: comment.createdAt && typeof c.createdAt === "object" ? moment__WEBPACK_IMPORTED_MODULE_5___default.a.unix(c.createdAt.seconds).format("YYYY-MM-DD HH:mm:ss") : moment__WEBPACK_IMPORTED_MODULE_5___default()(c.createdAt).format("YYYY-MM-DD HH:mm:ss"),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 164,
            columnNumber: 21
          }
        }, __jsx("span", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 173,
            columnNumber: 23
          }
        }, comment.createdAt && typeof c.createdAt === "object" ? moment__WEBPACK_IMPORTED_MODULE_5___default.a.unix(c.createdAt.seconds).fromNow() : moment__WEBPACK_IMPORTED_MODULE_5___default()(c.createdAt).fromNow())),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 17
        }
      }), clickedForm === c.id && toggleAnswerForm && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 21
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        md: 24,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184,
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
          lineNumber: 185,
          columnNumber: 25
        }
      })), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        md: 24,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194,
          columnNumber: 23
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        onClick: submit,
        type: "primary",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 25
        }
      }, "Comment"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200,
          columnNumber: 21
        }
      })));
    })), clickedForm === comment.id && toggleCommentForm ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 15
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      md: 24,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210,
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
        lineNumber: 211,
        columnNumber: 19
      }
    })), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      md: 24,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 17
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      onClick: submit,
      type: "primary",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221,
        columnNumber: 19
      }
    }, "Comment"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 226,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jaGFwdGVyL0NvbW1lbnRzLmpzIl0sIm5hbWVzIjpbIkNvbW1lbnRzIiwiY29tbWVudHMiLCJhdXRoIiwiY29tbWVudEJvZHkiLCJzZXRDb21tZW50Qm9keSIsInN1Ym1pdCIsInJlc3BvbnNlQm9keSIsInNldFJlc3BvbnNlQm9keSIsIlJlYWN0IiwidXNlU3RhdGUiLCJ0b2dnbGVDb21tZW50Rm9ybSIsInNldFRvZ2dsZUNvbW1lbnRGb3JtIiwidG9nZ2xlQW5zd2VyRm9ybSIsInNldFRvZ2dsZUFuc3dlckZvcm0iLCJjbGlja2VkRm9ybSIsInNldENsaWNrZWRGb3JtIiwidG9wQ29tbWVudHMiLCJmaWx0ZXIiLCJjb21tIiwiYW5zd2VyIiwicmVzcG9uc2VzIiwiYWxsQ29tbWVudHMiLCJtYXAiLCJyZXMiLCJmb3JFYWNoIiwicmVzcG9uc2UiLCJjb21tZW50QW5zd2VyZWRJZCIsImlkIiwicHVzaCIsImNvbW1lbnRUb2dnbGUiLCJhbnN3ZXJUb2dnbGUiLCJ1c2VyIiwiZSIsInRhcmdldCIsInZhbHVlIiwibWluUm93cyIsIm1hcmdpbkJvdHRvbSIsImxlbmd0aCIsImNvbW1lbnQiLCJiaW5kIiwidXNlcklkIiwidWlkIiwidXNlcm5hbWUiLCJ1c2VySW1hZ2UiLCJjb250ZW50IiwiY3JlYXRlZEF0IiwibW9tZW50IiwidW5peCIsInNlY29uZHMiLCJmb3JtYXQiLCJmcm9tTm93IiwiYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQVVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQVFYO0FBQUE7O0FBQUEsTUFQSkMsUUFPSSxRQVBKQSxRQU9JO0FBQUEsTUFOSkMsSUFNSSxRQU5KQSxJQU1JO0FBQUEsTUFMSkMsV0FLSSxRQUxKQSxXQUtJO0FBQUEsTUFKSkMsY0FJSSxRQUpKQSxjQUlJO0FBQUEsTUFISkMs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XS9jaGFwdGVyL1tjaGFwaWRdLjg2MzUxY2EyMTI2Y2ZmMDk3YzliLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbW1lbnQsXHJcbiAgVG9vbHRpcCxcclxuICBBdmF0YXIsXHJcbiAgSW5wdXQsXHJcbiAgRGl2aWRlcixcclxuICBCdXR0b24sXHJcbiAgUm93LFxyXG4gIENvbCxcclxufSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xyXG5pbXBvcnQgUmVwb3J0IGZyb20gXCIuLi9jb21tb24vUmVwb3J0XCI7XHJcblxyXG5jb25zdCBDb21tZW50cyA9ICh7XHJcbiAgY29tbWVudHMsXHJcbiAgYXV0aCxcclxuICBjb21tZW50Qm9keSxcclxuICBzZXRDb21tZW50Qm9keSxcclxuICBzdWJtaXQsXHJcbiAgcmVzcG9uc2VCb2R5LFxyXG4gIHNldFJlc3BvbnNlQm9keSxcclxufSkgPT4ge1xyXG4gIGNvbnN0IFt0b2dnbGVDb21tZW50Rm9ybSwgc2V0VG9nZ2xlQ29tbWVudEZvcm1dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt0b2dnbGVBbnN3ZXJGb3JtLCBzZXRUb2dnbGVBbnN3ZXJGb3JtXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbY2xpY2tlZEZvcm0sIHNldENsaWNrZWRGb3JtXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCB0b3BDb21tZW50cyA9IGNvbW1lbnRzLmZpbHRlcigoY29tbSkgPT4gIWNvbW0uYW5zd2VyKTtcclxuICBjb25zdCByZXNwb25zZXMgPSBjb21tZW50cy5maWx0ZXIoKGNvbW0pID0+IGNvbW0uYW5zd2VyKTtcclxuICBjb25zdCBhbGxDb21tZW50cyA9IHRvcENvbW1lbnRzLm1hcCgoY29tbSkgPT4ge1xyXG4gICAgbGV0IHJlcyA9IFtdO1xyXG4gICAgcmVzcG9uc2VzLmZvckVhY2goKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIGlmIChyZXNwb25zZS5jb21tZW50QW5zd2VyZWRJZCA9PT0gY29tbS5pZCkge1xyXG4gICAgICAgIHJlcy5wdXNoKHJlc3BvbnNlKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4geyAuLi5jb21tLCByZXNwb25zZXM6IHJlcyB9O1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBjb21tZW50VG9nZ2xlID0gKGlkKSA9PiB7XHJcbiAgICBzZXRDbGlja2VkRm9ybShpZCk7XHJcbiAgICBzZXRUb2dnbGVDb21tZW50Rm9ybSghdG9nZ2xlQ29tbWVudEZvcm0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFuc3dlclRvZ2dsZSA9IChpZCkgPT4ge1xyXG4gICAgc2V0Q2xpY2tlZEZvcm0oaWQpO1xyXG4gICAgc2V0VG9nZ2xlQW5zd2VyRm9ybSghdG9nZ2xlQW5zd2VyRm9ybSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbW1lbnRzXCI+XHJcbiAgICAgIHthdXRoLnVzZXIgPyAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxoMz5BZGQgYSBjb21tZW50PC9oMz5cclxuICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgIDxDb2wgbWQ9ezI0fT5cclxuICAgICAgICAgICAgICA8SW5wdXQuVGV4dEFyZWFcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtjb21tZW50Qm9keX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q29tbWVudEJvZHkoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgYXV0b1NpemU9e3sgbWluUm93czogNSB9fVxyXG4gICAgICAgICAgICAgICAgc2hvd0NvdW50PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgbWF4TGVuZ3RoPXs4MDB9XHJcbiAgICAgICAgICAgICAgPjwvSW5wdXQuVGV4dEFyZWE+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIG1kPXsyNH0+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtzdWJtaXR9IHR5cGU9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICBDb21tZW50XHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxwIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIyMHB4XCIgfX0+XHJcbiAgICAgICAgICBZb3UgbmVlZCB0byBiZSBsb2dnZWQgaW4gdG8gcG9zdCBhIGNvbW1lbnQue1wiIFwifVxyXG4gICAgICAgICAgPExpbmsgaHJlZj17XCIvYXV0aFwifT5cclxuICAgICAgICAgICAgPGE+Q2xpY2sgaGVyZSB0byBsb2dpbiBvciBjcmVhdGUgYW4gYWNjb3VudCAhPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgKX1cclxuICAgICAgPGgzPntjb21tZW50cy5sZW5ndGh9IENvbW1lbnRzPC9oMz5cclxuICAgICAge2FsbENvbW1lbnRzLm1hcCgoY29tbWVudCkgPT4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8Q29tbWVudFxyXG4gICAgICAgICAgICBrZXk9e2NvbW1lbnQuaWR9XHJcbiAgICAgICAgICAgIGFjdGlvbnM9e1tcclxuICAgICAgICAgICAgICBhdXRoICYmIGF1dGgudXNlciAmJiAoXHJcbiAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICBrZXk9XCJjb21tZW50LWJhc2ljLXJlcGx5LXRvXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17Y29tbWVudFRvZ2dsZS5iaW5kKG51bGwsIGNvbW1lbnQuaWQpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBSZXBseXtcIiBcIn1cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgIGNvbW1lbnQudXNlcklkID09PSBhdXRoLnVzZXIudWlkICYmIDxzcGFuPkRlbGV0ZTwvc3Bhbj4sXHJcbiAgICAgICAgICAgICAgYXV0aC51c2VyICYmIGF1dGgudXNlci51aWQgIT09IGNvbW1lbnQudXNlcklkICYmIChcclxuICAgICAgICAgICAgICAgIDxSZXBvcnQgdHlwZT1cImNvbW1lbnRcIiBkYXRhPXtjb21tZW50fSAvPlxyXG4gICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgIGF1dGhvcj17XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9wcm9maWxlLyR7Y29tbWVudC51c2VySWR9YH0+XHJcbiAgICAgICAgICAgICAgICA8YT57Y29tbWVudC51c2VybmFtZX08L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGF2YXRhcj17XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9wcm9maWxlLyR7Y29tbWVudC51c2VySWR9YH0+XHJcbiAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgPEF2YXRhciBzcmM9e2NvbW1lbnQudXNlckltYWdlfSBhbHQ9e2NvbW1lbnQudXNlcm5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnRlbnQ9ezxwPntjb21tZW50LmNvbnRlbnR9PC9wPn1cclxuICAgICAgICAgICAgZGF0ZXRpbWU9e1xyXG4gICAgICAgICAgICAgIDxUb29sdGlwXHJcbiAgICAgICAgICAgICAgICB0aXRsZT17XHJcbiAgICAgICAgICAgICAgICAgIGNvbW1lbnQuY3JlYXRlZEF0ICYmIHR5cGVvZiBjb21tZW50LmNyZWF0ZWRBdCA9PT0gXCJvYmplY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgID8gbW9tZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC51bml4KGNvbW1lbnQuY3JlYXRlZEF0LnNlY29uZHMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5mb3JtYXQoXCJZWVlZLU1NLUREIEhIOm1tOnNzXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgOiBtb21lbnQoY29tbWVudC5jcmVhdGVkQXQpLmZvcm1hdChcIllZWVktTU0tREQgSEg6bW06c3NcIilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAge2NvbW1lbnQuY3JlYXRlZEF0ICYmIHR5cGVvZiBjb21tZW50LmNyZWF0ZWRBdCA9PT0gXCJvYmplY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgID8gbW9tZW50LnVuaXgoY29tbWVudC5jcmVhdGVkQXQuc2Vjb25kcykuZnJvbU5vdygpXHJcbiAgICAgICAgICAgICAgICAgICAgOiBtb21lbnQoY29tbWVudC5jcmVhdGVkQXQpLmZyb21Ob3coKX1cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2NvbW1lbnQucmVzcG9uc2VzLm1hcCgoYykgPT4gKFxyXG4gICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8Q29tbWVudFxyXG4gICAgICAgICAgICAgICAgICBrZXk9e2MuaWR9XHJcbiAgICAgICAgICAgICAgICAgIGFjdGlvbnM9e1tcclxuICAgICAgICAgICAgICAgICAgICBhdXRoICYmIGF1dGgudXNlciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9XCJjb21tZW50LWJhc2ljLXJlcGx5LXRvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17YW5zd2VyVG9nZ2xlLmJpbmQobnVsbCwgYy5pZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlcGx5e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgY29tbWVudC51c2VySWQgPT09IGF1dGgudXNlci51aWQgJiYgPHNwYW4+RGVsZXRlPC9zcGFuPixcclxuICAgICAgICAgICAgICAgICAgICBhdXRoLnVzZXIgJiZcclxuICAgICAgICAgICAgICAgICAgICAgIChhdXRoLnVzZXIudWlkICE9PSBjb21tZW50LnVzZXJJZCkoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZXBvcnQgdHlwZT1cImNvbW1lbnRcIiBkYXRhPXtjb21tZW50fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgYXV0aG9yPXtcclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3Byb2ZpbGUvJHtjLnVzZXJJZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhPntjLnVzZXJuYW1lfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgYXZhdGFyPXtcclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3Byb2ZpbGUvJHtjLnVzZXJJZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QXZhdGFyIHNyYz17Yy51c2VySW1hZ2V9IGFsdD17Yy51c2VybmFtZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgY29udGVudD17PHA+e2MuY29udGVudH08L3A+fVxyXG4gICAgICAgICAgICAgICAgICBkYXRldGltZT17XHJcbiAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBcclxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudC5jcmVhdGVkQXQgJiYgdHlwZW9mIGMuY3JlYXRlZEF0ID09PSBcIm9iamVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBtb21lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnVuaXgoYy5jcmVhdGVkQXQuc2Vjb25kcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZvcm1hdChcIllZWVktTU0tREQgSEg6bW06c3NcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IG1vbWVudChjLmNyZWF0ZWRBdCkuZm9ybWF0KFwiWVlZWS1NTS1ERCBISDptbTpzc1wiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y29tbWVudC5jcmVhdGVkQXQgJiYgdHlwZW9mIGMuY3JlYXRlZEF0ID09PSBcIm9iamVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBtb21lbnQudW5peChjLmNyZWF0ZWRBdC5zZWNvbmRzKS5mcm9tTm93KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IG1vbWVudChjLmNyZWF0ZWRBdCkuZnJvbU5vdygpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIHtjbGlja2VkRm9ybSA9PT0gYy5pZCAmJiB0b2dnbGVBbnN3ZXJGb3JtICYmIChcclxuICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENvbCBtZD17MjR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQuVGV4dEFyZWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cmVzcG9uc2VCb2R5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UmVzcG9uc2VCb2R5KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvU2l6ZT17eyBtaW5Sb3dzOiA1IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0NvdW50PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aD17ODAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtgQCR7Yy51c2VybmFtZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+PC9JbnB1dC5UZXh0QXJlYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENvbCBtZD17MjR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3N1Ym1pdH0gdHlwZT1cInByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBDb21tZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvQ29tbWVudD5cclxuXHJcbiAgICAgICAgICB7Y2xpY2tlZEZvcm0gPT09IGNvbW1lbnQuaWQgJiYgdG9nZ2xlQ29tbWVudEZvcm0gPyAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgbWQ9ezI0fT5cclxuICAgICAgICAgICAgICAgICAgPElucHV0LlRleHRBcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Jlc3BvbnNlQm9keX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFJlc3BvbnNlQm9keShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b1NpemU9e3sgbWluUm93czogNSB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHNob3dDb3VudD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9ezgwMH1cclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17YEAke2NvbW1lbnQudXNlcm5hbWV9YH1cclxuICAgICAgICAgICAgICAgICAgPjwvSW5wdXQuVGV4dEFyZWE+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgbWQ9ezI0fT5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtzdWJtaXR9IHR5cGU9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgQ29tbWVudFxyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICkpfVxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21tZW50cztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==