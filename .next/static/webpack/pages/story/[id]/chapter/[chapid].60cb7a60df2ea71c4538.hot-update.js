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

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      _React$useState8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState7, 2),
      openReply = _React$useState8[0],
      setOpenReply = _React$useState8[1];

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
      lineNumber: 52,
      columnNumber: 5
    }
  }, auth.user ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, "Add a comment"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: 24,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
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
      lineNumber: 58,
      columnNumber: 15
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: 24,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    onClick: submit,
    type: "primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 15
    }
  }, "Comment"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 11
    }
  })) : __jsx("p", {
    style: {
      marginBottom: "20px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }, "You need to be logged in to post a comment.", " ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/auth",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 11
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  }, "Click here to login or create an account !"))), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
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
          lineNumber: 89,
          columnNumber: 17
        }
      }, "Reply", " "), comment.userId === auth.user.uid && __jsx("span", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 51
        }
      }, "Delete"), auth.user && auth.user.uid !== comment.userId && __jsx(_common_Report__WEBPACK_IMPORTED_MODULE_6__["default"], {
        type: "comment",
        data: comment,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 17
        }
      })],
      author: __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/profile/".concat(comment.userId),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 15
        }
      }, __jsx("a", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 17
        }
      }, comment.username)),
      avatar: __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/profile/".concat(comment.userId),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 15
        }
      }, __jsx("a", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 17
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {
        src: comment.userImage,
        alt: comment.username,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 19
        }
      }))),
      content: __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 22
        }
      }, comment.content),
      datetime: __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], {
        title: comment.createdAt && typeof comment.createdAt === "object" ? moment__WEBPACK_IMPORTED_MODULE_5___default.a.unix(comment.createdAt.seconds).format("YYYY-MM-DD HH:mm:ss") : moment__WEBPACK_IMPORTED_MODULE_5___default()(comment.createdAt).format("YYYY-MM-DD HH:mm:ss"),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 15
        }
      }, __jsx("span", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 17
        }
      }, comment.createdAt && typeof comment.createdAt === "object" ? moment__WEBPACK_IMPORTED_MODULE_5___default.a.unix(comment.createdAt.seconds).fromNow() : moment__WEBPACK_IMPORTED_MODULE_5___default()(comment.createdAt).fromNow())),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
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
            lineNumber: 138,
            columnNumber: 23
          }
        }, "Reply", " "), comment.userId === auth.user.uid && __jsx("span", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 57
          }
        }, "Delete"), auth.user && (auth.user.uid !== comment.userId)(__jsx(_common_Report__WEBPACK_IMPORTED_MODULE_6__["default"], {
          type: "comment",
          data: comment,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 25
          }
        }))],
        author: __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: "/profile/".concat(c.userId),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 21
          }
        }, __jsx("a", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 153,
            columnNumber: 23
          }
        }, c.username)),
        avatar: __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: "/profile/".concat(c.userId),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 21
          }
        }, __jsx("a", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 158,
            columnNumber: 23
          }
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {
          src: c.userImage,
          alt: c.username,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 159,
            columnNumber: 25
          }
        }))),
        content: __jsx("p", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 163,
            columnNumber: 28
          }
        }, c.content),
        datetime: __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], {
          title: comment.createdAt && typeof c.createdAt === "object" ? moment__WEBPACK_IMPORTED_MODULE_5___default.a.unix(c.createdAt.seconds).format("YYYY-MM-DD HH:mm:ss") : moment__WEBPACK_IMPORTED_MODULE_5___default()(c.createdAt).format("YYYY-MM-DD HH:mm:ss"),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 165,
            columnNumber: 21
          }
        }, __jsx("span", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 174,
            columnNumber: 23
          }
        }, comment.createdAt && typeof c.createdAt === "object" ? moment__WEBPACK_IMPORTED_MODULE_5___default.a.unix(c.createdAt.seconds).fromNow() : moment__WEBPACK_IMPORTED_MODULE_5___default()(c.createdAt).fromNow())),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 17
        }
      }), clickedForm === c.id && toggleAnswerForm && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 21
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        md: 24,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185,
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
          lineNumber: 186,
          columnNumber: 25
        }
      })), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        md: 24,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 23
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        onClick: submit,
        type: "primary",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 25
        }
      }, "Comment"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201,
          columnNumber: 21
        }
      })));
    })), clickedForm === comment.id && toggleCommentForm ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 15
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      md: 24,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211,
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
        lineNumber: 212,
        columnNumber: 19
      }
    })), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      md: 24,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221,
        columnNumber: 17
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      onClick: submit,
      type: "primary",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222,
        columnNumber: 19
      }
    }, "Comment"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 15
      }
    })) : null);
  }));
};

_s(Comments, "WkVReJAvt06VR6QvxjxMNsbOtqw=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jaGFwdGVyL0NvbW1lbnRzLmpzIl0sIm5hbWVzIjpbIkNvbW1lbnRzIiwiY29tbWVudHMiLCJhdXRoIiwiY29tbWVudEJvZHkiLCJzZXRDb21tZW50Qm9keSIsInN1Ym1pdCIsInJlc3BvbnNlQm9keSIsInNldFJlc3BvbnNlQm9keSIsIlJlYWN0IiwidXNlU3RhdGUiLCJ0b2dnbGVDb21tZW50Rm9ybSIsInNldFRvZ2dsZUNvbW1lbnRGb3JtIiwidG9nZ2xlQW5zd2VyRm9ybSIsInNldFRvZ2dsZUFuc3dlckZvcm0iLCJjbGlja2VkRm9ybSIsInNldENsaWNrZWRGb3JtIiwib3BlblJlcGx5Iiwic2V0T3BlblJlcGx5IiwidG9wQ29tbWVudHMiLCJmaWx0ZXIiLCJjb21tIiwiYW5zd2VyIiwicmVzcG9uc2VzIiwiYWxsQ29tbWVudHMiLCJtYXAiLCJyZXMiLCJmb3JFYWNoIiwicmVzcG9uc2UiLCJjb21tZW50QW5zd2VyZWRJZCIsImlkIiwicHVzaCIsImNvbW1lbnRUb2dnbGUiLCJhbnN3ZXJUb2dnbGUiLCJ1c2VyIiwiZSIsInRhcmdldCIsInZhbHVlIiwibWluUm93cyIsIm1hcmdpbkJvdHRvbSIsImxlbmd0aCIsImNvbW1lbnQiLCJiaW5kIiwidXNlcklkIiwidWlkIiwidXNlcm5hbWUiLCJ1c2VySW1hZ2UiLCJjb250ZW50IiwiY3JlYXRlZEF0IiwibW9tZW50IiwidW5peCIsInNlY29uZHMiLCJmb3JtYXQiLCJmcm9tTm93IiwiYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQVVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQVFYO0FBQUE7O0FBQUEsTUFQSkMsUUFPSSxRQVBKQSxRQU9JO0FBQUEsTUFOSkMsSUFNSSxRQU5KQSxJQU1JO0FBQUEsTUFMSkMsV0FLSSxRQUxKQSxXQUtJO0FBQUEsTUFKSkMs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QWpKTixDQURlO0FBQUEsR0FBaEIsQ0EvQkgsQ0FERjtBQXVMRCxDQTNORDs7R0FBTUwsUTs7S0FBQUEsUTtBQTZOU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3RvcnkvW2lkXS9jaGFwdGVyL1tjaGFwaWRdLjYwY2I3YTYwZGYyZWE3MWM0NTM4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbW1lbnQsXHJcbiAgVG9vbHRpcCxcclxuICBBdmF0YXIsXHJcbiAgSW5wdXQsXHJcbiAgRGl2aWRlcixcclxuICBCdXR0b24sXHJcbiAgUm93LFxyXG4gIENvbCxcclxufSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xyXG5pbXBvcnQgUmVwb3J0IGZyb20gXCIuLi9jb21tb24vUmVwb3J0XCI7XHJcblxyXG5jb25zdCBDb21tZW50cyA9ICh7XHJcbiAgY29tbWVudHMsXHJcbiAgYXV0aCxcclxuICBjb21tZW50Qm9keSxcclxuICBzZXRDb21tZW50Qm9keSxcclxuICBzdWJtaXQsXHJcbiAgcmVzcG9uc2VCb2R5LFxyXG4gIHNldFJlc3BvbnNlQm9keSxcclxufSkgPT4ge1xyXG4gIGNvbnN0IFt0b2dnbGVDb21tZW50Rm9ybSwgc2V0VG9nZ2xlQ29tbWVudEZvcm1dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt0b2dnbGVBbnN3ZXJGb3JtLCBzZXRUb2dnbGVBbnN3ZXJGb3JtXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbY2xpY2tlZEZvcm0sIHNldENsaWNrZWRGb3JtXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtvcGVuUmVwbHksIHNldE9wZW5SZXBseV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHRvcENvbW1lbnRzID0gY29tbWVudHMuZmlsdGVyKChjb21tKSA9PiAhY29tbS5hbnN3ZXIpO1xyXG4gIGNvbnN0IHJlc3BvbnNlcyA9IGNvbW1lbnRzLmZpbHRlcigoY29tbSkgPT4gY29tbS5hbnN3ZXIpO1xyXG4gIGNvbnN0IGFsbENvbW1lbnRzID0gdG9wQ29tbWVudHMubWFwKChjb21tKSA9PiB7XHJcbiAgICBsZXQgcmVzID0gW107XHJcbiAgICByZXNwb25zZXMuZm9yRWFjaCgocmVzcG9uc2UpID0+IHtcclxuICAgICAgaWYgKHJlc3BvbnNlLmNvbW1lbnRBbnN3ZXJlZElkID09PSBjb21tLmlkKSB7XHJcbiAgICAgICAgcmVzLnB1c2gocmVzcG9uc2UpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB7IC4uLmNvbW0sIHJlc3BvbnNlczogcmVzIH07XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGNvbW1lbnRUb2dnbGUgPSAoaWQpID0+IHtcclxuICAgIHNldENsaWNrZWRGb3JtKGlkKTtcclxuICAgIHNldFRvZ2dsZUNvbW1lbnRGb3JtKCF0b2dnbGVDb21tZW50Rm9ybSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYW5zd2VyVG9nZ2xlID0gKGlkKSA9PiB7XHJcbiAgICBzZXRDbGlja2VkRm9ybShpZCk7XHJcbiAgICBzZXRUb2dnbGVBbnN3ZXJGb3JtKCF0b2dnbGVBbnN3ZXJGb3JtKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29tbWVudHNcIj5cclxuICAgICAge2F1dGgudXNlciA/IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPGgzPkFkZCBhIGNvbW1lbnQ8L2gzPlxyXG4gICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgPENvbCBtZD17MjR9PlxyXG4gICAgICAgICAgICAgIDxJbnB1dC5UZXh0QXJlYVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2NvbW1lbnRCb2R5fVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDb21tZW50Qm9keShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICBhdXRvU2l6ZT17eyBtaW5Sb3dzOiA1IH19XHJcbiAgICAgICAgICAgICAgICBzaG93Q291bnQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBtYXhMZW5ndGg9ezgwMH1cclxuICAgICAgICAgICAgICA+PC9JbnB1dC5UZXh0QXJlYT5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgbWQ9ezI0fT5cclxuICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3N1Ym1pdH0gdHlwZT1cInByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgIENvbW1lbnRcclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPHAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjIwcHhcIiB9fT5cclxuICAgICAgICAgIFlvdSBuZWVkIHRvIGJlIGxvZ2dlZCBpbiB0byBwb3N0IGEgY29tbWVudC57XCIgXCJ9XHJcbiAgICAgICAgICA8TGluayBocmVmPXtcIi9hdXRoXCJ9PlxyXG4gICAgICAgICAgICA8YT5DbGljayBoZXJlIHRvIGxvZ2luIG9yIGNyZWF0ZSBhbiBhY2NvdW50ICE8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICApfVxyXG4gICAgICA8aDM+e2NvbW1lbnRzLmxlbmd0aH0gQ29tbWVudHM8L2gzPlxyXG4gICAgICB7YWxsQ29tbWVudHMubWFwKChjb21tZW50KSA9PiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxDb21tZW50XHJcbiAgICAgICAgICAgIGtleT17Y29tbWVudC5pZH1cclxuICAgICAgICAgICAgYWN0aW9ucz17W1xyXG4gICAgICAgICAgICAgIGF1dGggJiYgYXV0aC51c2VyICYmIChcclxuICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgIGtleT1cImNvbW1lbnQtYmFzaWMtcmVwbHktdG9cIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjb21tZW50VG9nZ2xlLmJpbmQobnVsbCwgY29tbWVudC5pZCl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIFJlcGx5e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgY29tbWVudC51c2VySWQgPT09IGF1dGgudXNlci51aWQgJiYgPHNwYW4+RGVsZXRlPC9zcGFuPixcclxuICAgICAgICAgICAgICBhdXRoLnVzZXIgJiYgYXV0aC51c2VyLnVpZCAhPT0gY29tbWVudC51c2VySWQgJiYgKFxyXG4gICAgICAgICAgICAgICAgPFJlcG9ydCB0eXBlPVwiY29tbWVudFwiIGRhdGE9e2NvbW1lbnR9IC8+XHJcbiAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgYXV0aG9yPXtcclxuICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3Byb2ZpbGUvJHtjb21tZW50LnVzZXJJZH1gfT5cclxuICAgICAgICAgICAgICAgIDxhPntjb21tZW50LnVzZXJuYW1lfTwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYXZhdGFyPXtcclxuICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3Byb2ZpbGUvJHtjb21tZW50LnVzZXJJZH1gfT5cclxuICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICA8QXZhdGFyIHNyYz17Y29tbWVudC51c2VySW1hZ2V9IGFsdD17Y29tbWVudC51c2VybmFtZX0gLz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29udGVudD17PHA+e2NvbW1lbnQuY29udGVudH08L3A+fVxyXG4gICAgICAgICAgICBkYXRldGltZT17XHJcbiAgICAgICAgICAgICAgPFRvb2x0aXBcclxuICAgICAgICAgICAgICAgIHRpdGxlPXtcclxuICAgICAgICAgICAgICAgICAgY29tbWVudC5jcmVhdGVkQXQgJiYgdHlwZW9mIGNvbW1lbnQuY3JlYXRlZEF0ID09PSBcIm9iamVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPyBtb21lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnVuaXgoY29tbWVudC5jcmVhdGVkQXQuc2Vjb25kcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmZvcm1hdChcIllZWVktTU0tREQgSEg6bW06c3NcIilcclxuICAgICAgICAgICAgICAgICAgICA6IG1vbWVudChjb21tZW50LmNyZWF0ZWRBdCkuZm9ybWF0KFwiWVlZWS1NTS1ERCBISDptbTpzc1wiKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICB7Y29tbWVudC5jcmVhdGVkQXQgJiYgdHlwZW9mIGNvbW1lbnQuY3JlYXRlZEF0ID09PSBcIm9iamVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPyBtb21lbnQudW5peChjb21tZW50LmNyZWF0ZWRBdC5zZWNvbmRzKS5mcm9tTm93KClcclxuICAgICAgICAgICAgICAgICAgICA6IG1vbWVudChjb21tZW50LmNyZWF0ZWRBdCkuZnJvbU5vdygpfVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7Y29tbWVudC5yZXNwb25zZXMubWFwKChjKSA9PiAoXHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxDb21tZW50XHJcbiAgICAgICAgICAgICAgICAgIGtleT17Yy5pZH1cclxuICAgICAgICAgICAgICAgICAgYWN0aW9ucz17W1xyXG4gICAgICAgICAgICAgICAgICAgIGF1dGggJiYgYXV0aC51c2VyICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT1cImNvbW1lbnQtYmFzaWMtcmVwbHktdG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXthbnN3ZXJUb2dnbGUuYmluZChudWxsLCBjLmlkKX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUmVwbHl7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICBjb21tZW50LnVzZXJJZCA9PT0gYXV0aC51c2VyLnVpZCAmJiA8c3Bhbj5EZWxldGU8L3NwYW4+LFxyXG4gICAgICAgICAgICAgICAgICAgIGF1dGgudXNlciAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgKGF1dGgudXNlci51aWQgIT09IGNvbW1lbnQudXNlcklkKShcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlcG9ydCB0eXBlPVwiY29tbWVudFwiIGRhdGE9e2NvbW1lbnR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICBhdXRob3I9e1xyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcHJvZmlsZS8ke2MudXNlcklkfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGE+e2MudXNlcm5hbWV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBhdmF0YXI9e1xyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcHJvZmlsZS8ke2MudXNlcklkfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBdmF0YXIgc3JjPXtjLnVzZXJJbWFnZX0gYWx0PXtjLnVzZXJuYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBjb250ZW50PXs8cD57Yy5jb250ZW50fTwvcD59XHJcbiAgICAgICAgICAgICAgICAgIGRhdGV0aW1lPXtcclxuICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcFxyXG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21tZW50LmNyZWF0ZWRBdCAmJiB0eXBlb2YgYy5jcmVhdGVkQXQgPT09IFwib2JqZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IG1vbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudW5peChjLmNyZWF0ZWRBdC5zZWNvbmRzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZm9ybWF0KFwiWVlZWS1NTS1ERCBISDptbTpzc1wiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogbW9tZW50KGMuY3JlYXRlZEF0KS5mb3JtYXQoXCJZWVlZLU1NLUREIEhIOm1tOnNzXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb21tZW50LmNyZWF0ZWRBdCAmJiB0eXBlb2YgYy5jcmVhdGVkQXQgPT09IFwib2JqZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IG1vbWVudC51bml4KGMuY3JlYXRlZEF0LnNlY29uZHMpLmZyb21Ob3coKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogbW9tZW50KGMuY3JlYXRlZEF0KS5mcm9tTm93KCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAge2NsaWNrZWRGb3JtID09PSBjLmlkICYmIHRvZ2dsZUFuc3dlckZvcm0gJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q29sIG1kPXsyNH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dC5UZXh0QXJlYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtyZXNwb25zZUJvZHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRSZXNwb25zZUJvZHkoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9TaXplPXt7IG1pblJvd3M6IDUgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93Q291bnQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPXs4MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2BAJHtjLnVzZXJuYW1lfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID48L0lucHV0LlRleHRBcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q29sIG1kPXsyNH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17c3VibWl0fSB0eXBlPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIENvbW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9Db21tZW50PlxyXG5cclxuICAgICAgICAgIHtjbGlja2VkRm9ybSA9PT0gY29tbWVudC5pZCAmJiB0b2dnbGVDb21tZW50Rm9ybSA/IChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCBtZD17MjR9PlxyXG4gICAgICAgICAgICAgICAgICA8SW5wdXQuVGV4dEFyZWFcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cmVzcG9uc2VCb2R5fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UmVzcG9uc2VCb2R5KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICBhdXRvU2l6ZT17eyBtaW5Sb3dzOiA1IH19XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd0NvdW50PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIG1heExlbmd0aD17ODAwfVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtgQCR7Y29tbWVudC51c2VybmFtZX1gfVxyXG4gICAgICAgICAgICAgICAgICA+PC9JbnB1dC5UZXh0QXJlYT5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCBtZD17MjR9PlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3N1Ym1pdH0gdHlwZT1cInByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICBDb21tZW50XHJcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICA8Lz5cclxuICAgICAgKSl9XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9