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

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(""),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState3, 2),
      responseBody = _React$useState4[0],
      setResponseBody = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState5, 2),
      toggleCommentForm = _React$useState6[0],
      setToggleCommentForm = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      _React$useState8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState7, 2),
      toggleAnswerForm = _React$useState8[0],
      setToggleAnswerForm = _React$useState8[1];

  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(""),
      _React$useState10 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState9, 2),
      clickedForm = _React$useState10[0],
      setClickedForm = _React$useState10[1];

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

_s(Comments, "3XnuibVaPag+4R7p0DHXA6Rxuks=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jaGFwdGVyL0NvbW1lbnRzLmpzIl0sIm5hbWVzIjpbIkNvbW1lbnRzIiwiY29tbWVudHMiLCJhdXRoIiwiZGVsZXRlQ29tbWVudCIsInN1Ym1pdENvbW1lbnQiLCJjaGFwaWQiLCJzdG9yeUlkIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImNvbW1lbnRCb2R5Iiwic2V0Q29tbWVudEJvZHkiLCJyZXNwb25zZUJvZHkiLCJzZXRSZXNwb25zZUJvZHkiLCJ0b2dnbGVDb21tZW50Rm9ybSIsInNldFRvZ2dsZUNvbW1lbnRGb3JtIiwidG9nZ2xlQW5zd2VyRm9ybSIsInNldFRvZ2dsZUFuc3dlckZvcm0iLCJjbGlja2VkRm9ybSIsInNldENsaWNrZWRGb3JtIiwidG9wQ29tbWVudHMiLCJmaWx0ZXIiLCJjb21tIiwiYW5zd2VyIiwicmVzcG9uc2VzIiwiYWxsQ29tbWVudHMiLCJtYXAiLCJyZXMiLCJmb3JFYWNoIiwicmVzcG9uc2UiLCJjb21tZW50QW5zd2VyZWRJZCIsImlkIiwicHVzaCIsImNvbW1lbnRUb2dnbGUiLCJhbnN3ZXJUb2dnbGUiLCJzdWJtaXQiLCJjb250ZW50IiwidXNlcm5hbWUiLCJ1c2VyIiwidXNlcklkIiwidWlkIiwiY2hhcHRlcklkIiwiZSIsInRhcmdldCIsInZhbHVlIiwibWluUm93cyIsIm1hcmdpbkJvdHRvbSIsImxlbmd0aCIsImNvbW1lbnQiLCJiaW5kIiwidXNlckltYWdlIiwiY3JlYXRlZEF0IiwibW9tZW50IiwidW5peCIsInNlY29uZHMiLCJmb3JtYXQiLCJmcm9tTm93IiwiYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQVdBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQU9YO0FBQUE7O0FBQUEsTUFOSkMsUUFNSSxRQU5KQSxRQU1JO0FBQUEsTUFMSkMsSUFLSSxRQUxKQSxJQUtJO0FB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YWNrL3BhZ2VzL3N0b3J5L1tpZF0vY2hhcHRlci9bY2hhcGlkXS43MWZjZGI4MGM4ZWQ2YWQwNzdhMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21tZW50LFxyXG4gIFRvb2x0aXAsXHJcbiAgQXZhdGFyLFxyXG4gIElucHV0LFxyXG4gIERpdmlkZXIsXHJcbiAgQnV0dG9uLFxyXG4gIFJvdyxcclxuICBDb2wsXHJcbiAgUG9wY29uZmlybSxcclxufSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xyXG5pbXBvcnQgUmVwb3J0IGZyb20gXCIuLi9jb21tb24vUmVwb3J0XCI7XHJcblxyXG5jb25zdCBDb21tZW50cyA9ICh7XHJcbiAgY29tbWVudHMsXHJcbiAgYXV0aCxcclxuICBkZWxldGVDb21tZW50LFxyXG4gIHN1Ym1pdENvbW1lbnQsXHJcbiAgY2hhcGlkLFxyXG4gIHN0b3J5SWQsXHJcbn0pID0+IHtcclxuICBjb25zdCBbY29tbWVudEJvZHksIHNldENvbW1lbnRCb2R5XSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtyZXNwb25zZUJvZHksIHNldFJlc3BvbnNlQm9keV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbdG9nZ2xlQ29tbWVudEZvcm0sIHNldFRvZ2dsZUNvbW1lbnRGb3JtXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdG9nZ2xlQW5zd2VyRm9ybSwgc2V0VG9nZ2xlQW5zd2VyRm9ybV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2NsaWNrZWRGb3JtLCBzZXRDbGlja2VkRm9ybV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgdG9wQ29tbWVudHMgPSBjb21tZW50cy5maWx0ZXIoKGNvbW0pID0+ICFjb21tLmFuc3dlcik7XHJcbiAgY29uc3QgcmVzcG9uc2VzID0gY29tbWVudHMuZmlsdGVyKChjb21tKSA9PiBjb21tLmFuc3dlcik7XHJcbiAgY29uc3QgYWxsQ29tbWVudHMgPSB0b3BDb21tZW50cy5tYXAoKGNvbW0pID0+IHtcclxuICAgIGxldCByZXMgPSBbXTtcclxuICAgIHJlc3BvbnNlcy5mb3JFYWNoKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBpZiAocmVzcG9uc2UuY29tbWVudEFuc3dlcmVkSWQgPT09IGNvbW0uaWQpIHtcclxuICAgICAgICByZXMucHVzaChyZXNwb25zZSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHsgLi4uY29tbSwgcmVzcG9uc2VzOiByZXMgfTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgY29tbWVudFRvZ2dsZSA9IChpZCkgPT4ge1xyXG4gICAgc2V0Q2xpY2tlZEZvcm0oaWQpO1xyXG4gICAgc2V0VG9nZ2xlQ29tbWVudEZvcm0oIXRvZ2dsZUNvbW1lbnRGb3JtKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBhbnN3ZXJUb2dnbGUgPSAoaWQpID0+IHtcclxuICAgIHNldENsaWNrZWRGb3JtKGlkKTtcclxuICAgIHNldFRvZ2dsZUFuc3dlckZvcm0oIXRvZ2dsZUFuc3dlckZvcm0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHN1Ym1pdCA9ICgpID0+IHtcclxuICAgIHN1Ym1pdENvbW1lbnQoe1xyXG4gICAgICBjb250ZW50OiBjb21tZW50Qm9keSxcclxuICAgICAgdXNlcm5hbWU6IGF1dGgudXNlci51c2VybmFtZSxcclxuICAgICAgdXNlcklkOiBhdXRoLnVzZXIudWlkLFxyXG4gICAgICBhbnN3ZXI6IGZhbHNlLFxyXG4gICAgICBjaGFwdGVySWQ6IGNoYXBpZCxcclxuICAgICAgc3RvcnlJZDogc3RvcnlJZCxcclxuICAgIH0pO1xyXG4gICAgc2V0Q29tbWVudEJvZHkoXCJcIik7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbW1lbnRzXCI+XHJcbiAgICAgIHthdXRoLnVzZXIgPyAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxoMz5BZGQgYSBjb21tZW50PC9oMz5cclxuICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgIDxDb2wgbWQ9ezI0fT5cclxuICAgICAgICAgICAgICA8SW5wdXQuVGV4dEFyZWFcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtjb21tZW50Qm9keX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q29tbWVudEJvZHkoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgYXV0b1NpemU9e3sgbWluUm93czogNSB9fVxyXG4gICAgICAgICAgICAgICAgc2hvd0NvdW50PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgbWF4TGVuZ3RoPXs4MDB9XHJcbiAgICAgICAgICAgICAgPjwvSW5wdXQuVGV4dEFyZWE+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIG1kPXsyNH0+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtzdWJtaXR9IHR5cGU9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICBDb21tZW50XHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxwIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIyMHB4XCIgfX0+XHJcbiAgICAgICAgICBZb3UgbmVlZCB0byBiZSBsb2dnZWQgaW4gdG8gcG9zdCBhIGNvbW1lbnQue1wiIFwifVxyXG4gICAgICAgICAgPExpbmsgaHJlZj17XCIvYXV0aFwifT5cclxuICAgICAgICAgICAgPGE+Q2xpY2sgaGVyZSB0byBsb2dpbiBvciBjcmVhdGUgYW4gYWNjb3VudCAhPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgKX1cclxuICAgICAgPGgzPntjb21tZW50cy5sZW5ndGh9IENvbW1lbnRzPC9oMz5cclxuICAgICAge2FsbENvbW1lbnRzLm1hcCgoY29tbWVudCkgPT4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8Q29tbWVudFxyXG4gICAgICAgICAgICBrZXk9e2NvbW1lbnQuaWR9XHJcbiAgICAgICAgICAgIGFjdGlvbnM9e1tcclxuICAgICAgICAgICAgICBhdXRoICYmIGF1dGgudXNlciAmJiAoXHJcbiAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICBrZXk9XCJjb21tZW50LWJhc2ljLXJlcGx5LXRvXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17Y29tbWVudFRvZ2dsZS5iaW5kKG51bGwsIGNvbW1lbnQuaWQpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBSZXBseXtcIiBcIn1cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgIGNvbW1lbnQudXNlcklkID09PSBhdXRoLnVzZXIudWlkICYmIChcclxuICAgICAgICAgICAgICAgIDxQb3Bjb25maXJtXHJcbiAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRG8geW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgY29tbWVudCA/XCJcclxuICAgICAgICAgICAgICAgICAgb2tUZXh0PVwiWWVzXCJcclxuICAgICAgICAgICAgICAgICAgY2FuY2VsVGV4dD1cIk5vXCJcclxuICAgICAgICAgICAgICAgICAgb25Db25maXJtPXsoKSA9PiBkZWxldGVDb21tZW50KGNvbW1lbnQuaWQsIGNoYXBpZCl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPkRlbGV0ZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvUG9wY29uZmlybT5cclxuICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgIGF1dGgudXNlciAmJiBhdXRoLnVzZXIudWlkICE9PSBjb21tZW50LnVzZXJJZCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8UmVwb3J0IHR5cGU9XCJjb21tZW50XCIgZGF0YT17Y29tbWVudH0gLz5cclxuICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICBhdXRob3I9e1xyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcHJvZmlsZS8ke2NvbW1lbnQudXNlcklkfWB9PlxyXG4gICAgICAgICAgICAgICAgPGE+e2NvbW1lbnQudXNlcm5hbWV9PC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhdmF0YXI9e1xyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcHJvZmlsZS8ke2NvbW1lbnQudXNlcklkfWB9PlxyXG4gICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgIDxBdmF0YXIgc3JjPXtjb21tZW50LnVzZXJJbWFnZX0gYWx0PXtjb21tZW50LnVzZXJuYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb250ZW50PXs8cD57Y29tbWVudC5jb250ZW50fTwvcD59XHJcbiAgICAgICAgICAgIGRhdGV0aW1lPXtcclxuICAgICAgICAgICAgICA8VG9vbHRpcFxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e1xyXG4gICAgICAgICAgICAgICAgICBjb21tZW50LmNyZWF0ZWRBdCAmJiB0eXBlb2YgY29tbWVudC5jcmVhdGVkQXQgPT09IFwib2JqZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICA/IG1vbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudW5peChjb21tZW50LmNyZWF0ZWRBdC5zZWNvbmRzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZm9ybWF0KFwiWVlZWS1NTS1ERCBISDptbTpzc1wiKVxyXG4gICAgICAgICAgICAgICAgICAgIDogbW9tZW50KGNvbW1lbnQuY3JlYXRlZEF0KS5mb3JtYXQoXCJZWVlZLU1NLUREIEhIOm1tOnNzXCIpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgIHtjb21tZW50LmNyZWF0ZWRBdCAmJiB0eXBlb2YgY29tbWVudC5jcmVhdGVkQXQgPT09IFwib2JqZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICA/IG1vbWVudC51bml4KGNvbW1lbnQuY3JlYXRlZEF0LnNlY29uZHMpLmZyb21Ob3coKVxyXG4gICAgICAgICAgICAgICAgICAgIDogbW9tZW50KGNvbW1lbnQuY3JlYXRlZEF0KS5mcm9tTm93KCl9XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtjb21tZW50LnJlc3BvbnNlcy5tYXAoKGMpID0+IChcclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPENvbW1lbnRcclxuICAgICAgICAgICAgICAgICAga2V5PXtjLmlkfVxyXG4gICAgICAgICAgICAgICAgICBhY3Rpb25zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0aCAmJiBhdXRoLnVzZXIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PVwiY29tbWVudC1iYXNpYy1yZXBseS10b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Fuc3dlclRvZ2dsZS5iaW5kKG51bGwsIGMuaWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSZXBseXtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbW1lbnQudXNlcklkID09PSBhdXRoLnVzZXIudWlkICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxQb3Bjb25maXJtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRG8geW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgY29tbWVudCA/XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2tUZXh0PVwiWWVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsVGV4dD1cIk5vXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Db25maXJtPXsoKSA9PiBkZWxldGVDb21tZW50KGMuaWQsIGNoYXBpZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkRlbGV0ZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvUG9wY29uZmlybT5cclxuICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICAgIGF1dGgudXNlciAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgKGF1dGgudXNlci51aWQgIT09IGNvbW1lbnQudXNlcklkKShcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlcG9ydCB0eXBlPVwiY29tbWVudFwiIGRhdGE9e2NvbW1lbnR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICBhdXRob3I9e1xyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcHJvZmlsZS8ke2MudXNlcklkfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGE+e2MudXNlcm5hbWV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBhdmF0YXI9e1xyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcHJvZmlsZS8ke2MudXNlcklkfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBdmF0YXIgc3JjPXtjLnVzZXJJbWFnZX0gYWx0PXtjLnVzZXJuYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBjb250ZW50PXs8cD57Yy5jb250ZW50fTwvcD59XHJcbiAgICAgICAgICAgICAgICAgIGRhdGV0aW1lPXtcclxuICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcFxyXG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21tZW50LmNyZWF0ZWRBdCAmJiB0eXBlb2YgYy5jcmVhdGVkQXQgPT09IFwib2JqZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IG1vbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudW5peChjLmNyZWF0ZWRBdC5zZWNvbmRzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZm9ybWF0KFwiWVlZWS1NTS1ERCBISDptbTpzc1wiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogbW9tZW50KGMuY3JlYXRlZEF0KS5mb3JtYXQoXCJZWVlZLU1NLUREIEhIOm1tOnNzXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb21tZW50LmNyZWF0ZWRBdCAmJiB0eXBlb2YgYy5jcmVhdGVkQXQgPT09IFwib2JqZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IG1vbWVudC51bml4KGMuY3JlYXRlZEF0LnNlY29uZHMpLmZyb21Ob3coKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogbW9tZW50KGMuY3JlYXRlZEF0KS5mcm9tTm93KCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAge2NsaWNrZWRGb3JtID09PSBjLmlkICYmIHRvZ2dsZUFuc3dlckZvcm0gJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q29sIG1kPXsyNH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dC5UZXh0QXJlYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtyZXNwb25zZUJvZHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRSZXNwb25zZUJvZHkoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9TaXplPXt7IG1pblJvd3M6IDUgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93Q291bnQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPXs4MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2BAJHtjLnVzZXJuYW1lfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID48L0lucHV0LlRleHRBcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q29sIG1kPXsyNH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17c3VibWl0fSB0eXBlPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIENvbW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9Db21tZW50PlxyXG5cclxuICAgICAgICAgIHtjbGlja2VkRm9ybSA9PT0gY29tbWVudC5pZCAmJiB0b2dnbGVDb21tZW50Rm9ybSA/IChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCBtZD17MjR9PlxyXG4gICAgICAgICAgICAgICAgICA8SW5wdXQuVGV4dEFyZWFcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cmVzcG9uc2VCb2R5fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UmVzcG9uc2VCb2R5KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICBhdXRvU2l6ZT17eyBtaW5Sb3dzOiA1IH19XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd0NvdW50PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIG1heExlbmd0aD17ODAwfVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtgQCR7Y29tbWVudC51c2VybmFtZX1gfVxyXG4gICAgICAgICAgICAgICAgICA+PC9JbnB1dC5UZXh0QXJlYT5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCBtZD17MjR9PlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3N1Ym1pdH0gdHlwZT1cInByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICBDb21tZW50XHJcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICA8Lz5cclxuICAgICAgKSl9XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9