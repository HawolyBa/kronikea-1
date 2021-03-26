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
      openReply = _React$useState2[0],
      setOpenReply = _React$useState2[1];

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
  return __jsx("section", {
    className: "comments",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }, auth.user ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, "Add a comment"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: 24,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
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
      lineNumber: 44,
      columnNumber: 15
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: 24,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    onClick: submit,
    type: "primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 15
    }
  }, "Comment"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  })) : __jsx("p", {
    style: {
      marginBottom: "20px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, "You need to be logged in to post a comment.", " ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/auth",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, "Click here to login or create an account !"))), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }
  }, comments.length, " Comments"), allComments.map(function (comment) {
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Comment"], {
      key: comment.id,
      actions: [__jsx("span", {
        key: "comment-basic-reply-to",
        onClick: function onClick() {
          return setOpenReply(true);
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 13
        }
      }, "Reply", " "), comment.userId === auth.user.uid && __jsx("span", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 49
        }
      }, "Delete"), auth && auth.user.uid && __jsx(_common_Report__WEBPACK_IMPORTED_MODULE_6__["default"], {
        type: "comment",
        data: comment,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 38
        }
      })],
      author: __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/profile/".concat(comment.userId),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 13
        }
      }, __jsx("a", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 15
        }
      }, comment.username)),
      avatar: __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/profile/".concat(comment.userId),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 13
        }
      }, __jsx("a", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 15
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {
        src: comment.userImage,
        alt: comment.username,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 17
        }
      }))),
      content: __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 20
        }
      }, comment.content),
      datetime: __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], {
        title: comment.createdAt && typeof comment.createdAt === "object" ? moment__WEBPACK_IMPORTED_MODULE_5___default.a.unix(comment.createdAt.seconds).format("YYYY-MM-DD HH:mm:ss") : moment__WEBPACK_IMPORTED_MODULE_5___default()(comment.createdAt).format("YYYY-MM-DD HH:mm:ss"),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 13
        }
      }, __jsx("span", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 15
        }
      }, comment.createdAt && typeof comment.createdAt === "object" ? moment__WEBPACK_IMPORTED_MODULE_5___default.a.unix(comment.createdAt.seconds).fromNow() : moment__WEBPACK_IMPORTED_MODULE_5___default()(comment.createdAt).fromNow())),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }
    }, openReply && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 15
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      md: 24,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
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
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 19
      }
    })), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      md: 24,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 17
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      onClick: submit,
      type: "primary",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 19
      }
    }, "Comment"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 15
      }
    })), comment.responses.map(function (c) {
      return __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Comment"], {
        key: c.id,
        actions: [__jsx("span", {
          key: "comment-basic-reply-to",
          onClick: function onClick() {
            return setOpenReply(true);
          },
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 17
          }
        }, "Reply", " "), comment.userId === auth.user.uid && __jsx("span", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 53
          }
        }, "Delete"), auth && auth.user.uid && __jsx(_common_Report__WEBPACK_IMPORTED_MODULE_6__["default"], {
          type: "comment",
          data: comment,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 19
          }
        })],
        author: __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: "/profile/".concat(c.userId),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 17
          }
        }, __jsx("a", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 19
          }
        }, c.username)),
        avatar: __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: "/profile/".concat(c.userId),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 155,
            columnNumber: 17
          }
        }, __jsx("a", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 156,
            columnNumber: 19
          }
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {
          src: c.userImage,
          alt: c.username,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 21
          }
        }))),
        content: __jsx("p", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 161,
            columnNumber: 24
          }
        }, c.content),
        datetime: __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], {
          title: comment.createdAt && typeof c.createdAt === "object" ? moment__WEBPACK_IMPORTED_MODULE_5___default.a.unix(c.createdAt.seconds).format("YYYY-MM-DD HH:mm:ss") : moment__WEBPACK_IMPORTED_MODULE_5___default()(c.createdAt).format("YYYY-MM-DD HH:mm:ss"),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 163,
            columnNumber: 17
          }
        }, __jsx("span", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 19
          }
        }, comment.createdAt && typeof c.createdAt === "object" ? moment__WEBPACK_IMPORTED_MODULE_5___default.a.unix(c.createdAt.seconds).fromNow() : moment__WEBPACK_IMPORTED_MODULE_5___default()(c.createdAt).fromNow())),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 13
        }
      });
    }));
  }));
};

_s(Comments, "uyeb//TN2gWkLWkO/ZM8h2GkMnY=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jaGFwdGVyL0NvbW1lbnRzLmpzIl0sIm5hbWVzIjpbIkNvbW1lbnRzIiwiY29tbWVudHMiLCJhdXRoIiwiY29tbWVudEJvZHkiLCJzZXRDb21tZW50Qm9keSIsInN1Ym1pdCIsInJlc3BvbnNlQm9keSIsInNldFJlc3BvbnNlQm9keSIsIlJlYWN0IiwidXNlU3RhdGUiLCJvcGVuUmVwbHkiLCJzZXRPcGVuUmVwbHkiLCJ0b3BDb21tZW50cyIsImZpbHRlciIsImNvbW0iLCJhbnN3ZXIiLCJyZXNwb25zZXMiLCJhbGxDb21tZW50cyIsIm1hcCIsInJlcyIsImZvckVhY2giLCJyZXNwb25zZSIsImNvbW1lbnRBbnN3ZXJlZElkIiwiaWQiLCJwdXNoIiwidXNlciIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1pblJvd3MiLCJtYXJnaW5Cb3R0b20iLCJsZW5ndGgiLCJjb21tZW50IiwidXNlcklkIiwidWlkIiwidXNlcm5hbWUiLCJ1c2VySW1hZ2UiLCJjb250ZW50IiwiY3JlYXRlZEF0IiwibW9tZW50IiwidW5peCIsInNlY29uZHMiLCJmb3JtYXQiLCJmcm9tTm93IiwiYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQVVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQVFYO0FBQUE7O0FBQUEsTUFQSkMsUUFPSSxRQVBKQSxRQU9JO0FBQUEsTUFOSkMsSUFNSSxRQU5KQSxJQU1JO0FBQUEsTUFMSkMsV0FLSSxRQUxKQSxXQUtJO0FBQUEsTUFKSkMsY0FJSSxRQUpKQSxjQUlJO0FBQUEsTUFISkMsTUFHSSxRQUhKQSxNQUdJO0FBQUEsTUFGSkMsWUFFSSxRQUZKQSxZQUVJO0FBQUEsTUFESkMsZUFDSSxRQURKQSxlQUNJOztBQUFBLHdCQUM4QkMsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEtBQWYsQ0FEOUI7QUFBQTtBQUFB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TixTQUFILENBQU4sQ0FBb0JLLE9BQXBCLEVBSE4sQ0FURixDQTVCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRHFCO0FBQUEsS0FBdEIsQ0FoRUgsQ0FEZTtBQUFBLEdBQWhCLENBL0JILENBREY7QUFvSkQsQ0ExS0Q7O0dBQU0zQyxROztLQUFBQSxRO0FBNEtTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zdG9yeS9baWRdL2NoYXB0ZXIvW2NoYXBpZF0uNjZjZjcxZGE0MjZkMDkyMzljZDUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tbWVudCxcclxuICBUb29sdGlwLFxyXG4gIEF2YXRhcixcclxuICBJbnB1dCxcclxuICBEaXZpZGVyLFxyXG4gIEJ1dHRvbixcclxuICBSb3csXHJcbiAgQ29sLFxyXG59IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XHJcbmltcG9ydCBSZXBvcnQgZnJvbSBcIi4uL2NvbW1vbi9SZXBvcnRcIjtcclxuXHJcbmNvbnN0IENvbW1lbnRzID0gKHtcclxuICBjb21tZW50cyxcclxuICBhdXRoLFxyXG4gIGNvbW1lbnRCb2R5LFxyXG4gIHNldENvbW1lbnRCb2R5LFxyXG4gIHN1Ym1pdCxcclxuICByZXNwb25zZUJvZHksXHJcbiAgc2V0UmVzcG9uc2VCb2R5LFxyXG59KSA9PiB7XHJcbiAgY29uc3QgW29wZW5SZXBseSwgc2V0T3BlblJlcGx5XSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgdG9wQ29tbWVudHMgPSBjb21tZW50cy5maWx0ZXIoKGNvbW0pID0+ICFjb21tLmFuc3dlcik7XHJcbiAgY29uc3QgcmVzcG9uc2VzID0gY29tbWVudHMuZmlsdGVyKChjb21tKSA9PiBjb21tLmFuc3dlcik7XHJcbiAgY29uc3QgYWxsQ29tbWVudHMgPSB0b3BDb21tZW50cy5tYXAoKGNvbW0pID0+IHtcclxuICAgIGxldCByZXMgPSBbXTtcclxuICAgIHJlc3BvbnNlcy5mb3JFYWNoKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBpZiAocmVzcG9uc2UuY29tbWVudEFuc3dlcmVkSWQgPT09IGNvbW0uaWQpIHtcclxuICAgICAgICByZXMucHVzaChyZXNwb25zZSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHsgLi4uY29tbSwgcmVzcG9uc2VzOiByZXMgfTtcclxuICB9KTtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29tbWVudHNcIj5cclxuICAgICAge2F1dGgudXNlciA/IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPGgzPkFkZCBhIGNvbW1lbnQ8L2gzPlxyXG4gICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgPENvbCBtZD17MjR9PlxyXG4gICAgICAgICAgICAgIDxJbnB1dC5UZXh0QXJlYVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2NvbW1lbnRCb2R5fVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDb21tZW50Qm9keShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICBhdXRvU2l6ZT17eyBtaW5Sb3dzOiA1IH19XHJcbiAgICAgICAgICAgICAgICBzaG93Q291bnQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBtYXhMZW5ndGg9ezgwMH1cclxuICAgICAgICAgICAgICA+PC9JbnB1dC5UZXh0QXJlYT5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgbWQ9ezI0fT5cclxuICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3N1Ym1pdH0gdHlwZT1cInByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgIENvbW1lbnRcclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPHAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjIwcHhcIiB9fT5cclxuICAgICAgICAgIFlvdSBuZWVkIHRvIGJlIGxvZ2dlZCBpbiB0byBwb3N0IGEgY29tbWVudC57XCIgXCJ9XHJcbiAgICAgICAgICA8TGluayBocmVmPXtcIi9hdXRoXCJ9PlxyXG4gICAgICAgICAgICA8YT5DbGljayBoZXJlIHRvIGxvZ2luIG9yIGNyZWF0ZSBhbiBhY2NvdW50ICE8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICApfVxyXG4gICAgICA8aDM+e2NvbW1lbnRzLmxlbmd0aH0gQ29tbWVudHM8L2gzPlxyXG4gICAgICB7YWxsQ29tbWVudHMubWFwKChjb21tZW50KSA9PiAoXHJcbiAgICAgICAgPENvbW1lbnRcclxuICAgICAgICAgIGtleT17Y29tbWVudC5pZH1cclxuICAgICAgICAgIGFjdGlvbnM9e1tcclxuICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICBrZXk9XCJjb21tZW50LWJhc2ljLXJlcGx5LXRvXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuUmVwbHkodHJ1ZSl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBSZXBseXtcIiBcIn1cclxuICAgICAgICAgICAgPC9zcGFuPixcclxuICAgICAgICAgICAgY29tbWVudC51c2VySWQgPT09IGF1dGgudXNlci51aWQgJiYgPHNwYW4+RGVsZXRlPC9zcGFuPixcclxuICAgICAgICAgICAgYXV0aCAmJiBhdXRoLnVzZXIudWlkICYmIDxSZXBvcnQgdHlwZT1cImNvbW1lbnRcIiBkYXRhPXtjb21tZW50fSAvPixcclxuICAgICAgICAgIF19XHJcbiAgICAgICAgICBhdXRob3I9e1xyXG4gICAgICAgICAgICA8TGluayBocmVmPXtgL3Byb2ZpbGUvJHtjb21tZW50LnVzZXJJZH1gfT5cclxuICAgICAgICAgICAgICA8YT57Y29tbWVudC51c2VybmFtZX08L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGF2YXRhcj17XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcHJvZmlsZS8ke2NvbW1lbnQudXNlcklkfWB9PlxyXG4gICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgPEF2YXRhciBzcmM9e2NvbW1lbnQudXNlckltYWdlfSBhbHQ9e2NvbW1lbnQudXNlcm5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjb250ZW50PXs8cD57Y29tbWVudC5jb250ZW50fTwvcD59XHJcbiAgICAgICAgICBkYXRldGltZT17XHJcbiAgICAgICAgICAgIDxUb29sdGlwXHJcbiAgICAgICAgICAgICAgdGl0bGU9e1xyXG4gICAgICAgICAgICAgICAgY29tbWVudC5jcmVhdGVkQXQgJiYgdHlwZW9mIGNvbW1lbnQuY3JlYXRlZEF0ID09PSBcIm9iamVjdFwiXHJcbiAgICAgICAgICAgICAgICAgID8gbW9tZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAudW5peChjb21tZW50LmNyZWF0ZWRBdC5zZWNvbmRzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgLmZvcm1hdChcIllZWVktTU0tREQgSEg6bW06c3NcIilcclxuICAgICAgICAgICAgICAgICAgOiBtb21lbnQoY29tbWVudC5jcmVhdGVkQXQpLmZvcm1hdChcIllZWVktTU0tREQgSEg6bW06c3NcIilcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgIHtjb21tZW50LmNyZWF0ZWRBdCAmJiB0eXBlb2YgY29tbWVudC5jcmVhdGVkQXQgPT09IFwib2JqZWN0XCJcclxuICAgICAgICAgICAgICAgICAgPyBtb21lbnQudW5peChjb21tZW50LmNyZWF0ZWRBdC5zZWNvbmRzKS5mcm9tTm93KClcclxuICAgICAgICAgICAgICAgICAgOiBtb21lbnQoY29tbWVudC5jcmVhdGVkQXQpLmZyb21Ob3coKX1cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgIH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7b3BlblJlcGx5ICYmIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCBtZD17MjR9PlxyXG4gICAgICAgICAgICAgICAgICA8SW5wdXQuVGV4dEFyZWFcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cmVzcG9uc2VCb2R5fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UmVzcG9uc2VCb2R5KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICBhdXRvU2l6ZT17eyBtaW5Sb3dzOiA1IH19XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd0NvdW50PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIG1heExlbmd0aD17ODAwfVxyXG4gICAgICAgICAgICAgICAgICA+PC9JbnB1dC5UZXh0QXJlYT5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCBtZD17MjR9PlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3N1Ym1pdH0gdHlwZT1cInByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICBDb21tZW50XHJcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAge2NvbW1lbnQucmVzcG9uc2VzLm1hcCgoYykgPT4gKFxyXG4gICAgICAgICAgICA8Q29tbWVudFxyXG4gICAgICAgICAgICAgIGtleT17Yy5pZH1cclxuICAgICAgICAgICAgICBhY3Rpb25zPXtbXHJcbiAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICBrZXk9XCJjb21tZW50LWJhc2ljLXJlcGx5LXRvXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0T3BlblJlcGx5KHRydWUpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBSZXBseXtcIiBcIn1cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj4sXHJcbiAgICAgICAgICAgICAgICBjb21tZW50LnVzZXJJZCA9PT0gYXV0aC51c2VyLnVpZCAmJiA8c3Bhbj5EZWxldGU8L3NwYW4+LFxyXG4gICAgICAgICAgICAgICAgYXV0aCAmJiBhdXRoLnVzZXIudWlkICYmIChcclxuICAgICAgICAgICAgICAgICAgPFJlcG9ydCB0eXBlPVwiY29tbWVudFwiIGRhdGE9e2NvbW1lbnR9IC8+XHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgYXV0aG9yPXtcclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcHJvZmlsZS8ke2MudXNlcklkfWB9PlxyXG4gICAgICAgICAgICAgICAgICA8YT57Yy51c2VybmFtZX08L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGF2YXRhcj17XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3Byb2ZpbGUvJHtjLnVzZXJJZH1gfT5cclxuICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgPEF2YXRhciBzcmM9e2MudXNlckltYWdlfSBhbHQ9e2MudXNlcm5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgY29udGVudD17PHA+e2MuY29udGVudH08L3A+fVxyXG4gICAgICAgICAgICAgIGRhdGV0aW1lPXtcclxuICAgICAgICAgICAgICAgIDxUb29sdGlwXHJcbiAgICAgICAgICAgICAgICAgIHRpdGxlPXtcclxuICAgICAgICAgICAgICAgICAgICBjb21tZW50LmNyZWF0ZWRBdCAmJiB0eXBlb2YgYy5jcmVhdGVkQXQgPT09IFwib2JqZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgID8gbW9tZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLnVuaXgoYy5jcmVhdGVkQXQuc2Vjb25kcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAuZm9ybWF0KFwiWVlZWS1NTS1ERCBISDptbTpzc1wiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgOiBtb21lbnQoYy5jcmVhdGVkQXQpLmZvcm1hdChcIllZWVktTU0tREQgSEg6bW06c3NcIilcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICB7Y29tbWVudC5jcmVhdGVkQXQgJiYgdHlwZW9mIGMuY3JlYXRlZEF0ID09PSBcIm9iamVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA/IG1vbWVudC51bml4KGMuY3JlYXRlZEF0LnNlY29uZHMpLmZyb21Ob3coKVxyXG4gICAgICAgICAgICAgICAgICAgICAgOiBtb21lbnQoYy5jcmVhdGVkQXQpLmZyb21Ob3coKX1cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvQ29tbWVudD5cclxuICAgICAgKSl9XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9