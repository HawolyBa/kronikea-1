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





var _Modal = Modal,
    confirm = _Modal.confirm;

var Comments = function Comments(_ref) {
  _s();

  var comments = _ref.comments,
      auth = _ref.auth,
      commentBody = _ref.commentBody,
      setCommentBody = _ref.setCommentBody,
      submit = _ref.submit,
      responseBody = _ref.responseBody,
      setResponseBody = _ref.setResponseBody,
      deleteComment = _ref.deleteComment,
      chapid = _ref.chapid;

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

  var deleteFunc = function deleteFunc(id) {
    deleteComment(id, chapid);
  };

  return __jsx("section", {
    className: "comments",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 5
    }
  }, auth.user ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }, "Add a comment"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: 24,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
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
      lineNumber: 66,
      columnNumber: 15
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: 24,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    onClick: submit,
    type: "primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 15
    }
  }, "Comment"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 11
    }
  })) : __jsx("p", {
    style: {
      marginBottom: "20px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }, "You need to be logged in to post a comment.", " ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/auth",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 11
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  }, "Click here to login or create an account !"))), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
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
          lineNumber: 97,
          columnNumber: 17
        }
      }, "Reply", " "), comment.userId === auth.user.uid && __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Popconfirm"], {
        title: "Do you want to delete this comment ?",
        okText: "Yes",
        cancelText: "No",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 17
        }
      }, __jsx("span", {
        onClick: deleteFunc.bind(null, comment.id),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 19
        }
      }, "Delete")), auth.user && auth.user.uid !== comment.userId && __jsx(_common_Report__WEBPACK_IMPORTED_MODULE_6__["default"], {
        type: "comment",
        data: comment,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 17
        }
      })],
      author: __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/profile/".concat(comment.userId),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 15
        }
      }, __jsx("a", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 17
        }
      }, comment.username)),
      avatar: __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/profile/".concat(comment.userId),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 15
        }
      }, __jsx("a", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 17
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {
        src: comment.userImage,
        alt: comment.username,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 19
        }
      }))),
      content: __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 22
        }
      }, comment.content),
      datetime: __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], {
        title: comment.createdAt && typeof comment.createdAt === "object" ? moment__WEBPACK_IMPORTED_MODULE_5___default.a.unix(comment.createdAt.seconds).format("YYYY-MM-DD HH:mm:ss") : moment__WEBPACK_IMPORTED_MODULE_5___default()(comment.createdAt).format("YYYY-MM-DD HH:mm:ss"),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 15
        }
      }, __jsx("span", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 17
        }
      }, comment.createdAt && typeof comment.createdAt === "object" ? moment__WEBPACK_IMPORTED_MODULE_5___default.a.unix(comment.createdAt.seconds).fromNow() : moment__WEBPACK_IMPORTED_MODULE_5___default()(comment.createdAt).fromNow())),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
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
            lineNumber: 156,
            columnNumber: 23
          }
        }, "Reply", " "), comment.userId === auth.user.uid && __jsx("span", {
          onClick: deleteFunc.bind(null, c.id),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 164,
            columnNumber: 23
          }
        }, "Delete"), auth.user && (auth.user.uid !== comment.userId)(__jsx(_common_Report__WEBPACK_IMPORTED_MODULE_6__["default"], {
          type: "comment",
          data: comment,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 168,
            columnNumber: 25
          }
        }))],
        author: __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: "/profile/".concat(c.userId),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 21
          }
        }, __jsx("a", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 173,
            columnNumber: 23
          }
        }, c.username)),
        avatar: __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: "/profile/".concat(c.userId),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 177,
            columnNumber: 21
          }
        }, __jsx("a", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 178,
            columnNumber: 23
          }
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {
          src: c.userImage,
          alt: c.username,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 179,
            columnNumber: 25
          }
        }))),
        content: __jsx("p", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 183,
            columnNumber: 28
          }
        }, c.content),
        datetime: __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], {
          title: comment.createdAt && typeof c.createdAt === "object" ? moment__WEBPACK_IMPORTED_MODULE_5___default.a.unix(c.createdAt.seconds).format("YYYY-MM-DD HH:mm:ss") : moment__WEBPACK_IMPORTED_MODULE_5___default()(c.createdAt).format("YYYY-MM-DD HH:mm:ss"),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 185,
            columnNumber: 21
          }
        }, __jsx("span", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 194,
            columnNumber: 23
          }
        }, comment.createdAt && typeof c.createdAt === "object" ? moment__WEBPACK_IMPORTED_MODULE_5___default.a.unix(c.createdAt.seconds).fromNow() : moment__WEBPACK_IMPORTED_MODULE_5___default()(c.createdAt).fromNow())),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 17
        }
      }), clickedForm === c.id && toggleAnswerForm && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204,
          columnNumber: 21
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        md: 24,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205,
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
          lineNumber: 206,
          columnNumber: 25
        }
      })), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        md: 24,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215,
          columnNumber: 23
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        onClick: submit,
        type: "primary",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216,
          columnNumber: 25
        }
      }, "Comment"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221,
          columnNumber: 21
        }
      })));
    })), clickedForm === comment.id && toggleCommentForm ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 230,
        columnNumber: 15
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      md: 24,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 231,
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
        lineNumber: 232,
        columnNumber: 19
      }
    })), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      md: 24,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241,
        columnNumber: 17
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      onClick: submit,
      type: "primary",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 19
      }
    }, "Comment"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 247,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jaGFwdGVyL0NvbW1lbnRzLmpzIl0sIm5hbWVzIjpbIk1vZGFsIiwiY29uZmlybSIsIkNvbW1lbnRzIiwiY29tbWVudHMiLCJhdXRoIiwiY29tbWVudEJvZHkiLCJzZXRDb21tZW50Qm9keSIsInN1Ym1pdCIsInJlc3BvbnNlQm9keSIsInNldFJlc3BvbnNlQm9keSIsImRlbGV0ZUNvbW1lbnQiLCJjaGFwaWQiLCJSZWFjdCIsInVzZVN0YXRlIiwidG9nZ2xlQ29tbWVudEZvcm0iLCJzZXRUb2dnbGVDb21tZW50Rm9ybSIsInRvZ2dsZUFuc3dlckZvcm0iLCJzZXRUb2dnbGVBbnN3ZXJGb3JtIiwiY2xpY2tlZEZvcm0iLCJzZXRDbGlja2VkRm9ybSIsInRvcENvbW1lbnRzIiwiZmlsdGVyIiwiY29tbSIsImFuc3dlciIsInJlc3BvbnNlcyIsImFsbENvbW1lbnRzIiwibWFwIiwicmVzIiwiZm9yRWFjaCIsInJlc3BvbnNlIiwiY29tbWVudEFuc3dlcmVkSWQiLCJpZCIsInB1c2giLCJjb21tZW50VG9nZ2xlIiwiYW5zd2VyVG9nZ2xlIiwiZGVsZXRlRnVuYyIsInVzZXIiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJtaW5Sb3dzIiwibWFyZ2luQm90dG9tIiwibGVuZ3RoIiwiY29tbWVudCIsImJpbmQiLCJ1c2VySWQiLCJ1aWQiLCJ1c2VybmFtZSIsInVzZXJJbWFnZSIsImNvbnRlbnQiLCJjcmVhdGVkQXQiLCJtb21lbnQiLCJ1bml4Iiwic2Vjb25kcyIsImZvcm1hdCIsImZyb21Ob3ciLCJjIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBV0E7QUFDQTtBQUNBO2FBRW9CQSxLO0lBQVpDLE8sVUFBQUEsTzs7QUFFUixJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQVVYO0FBQUE7O0FBQUEsTUFUSkMsUUFTSSxRQVRKQSxRQVNJO0FBQUEsTUFSSkMs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QUU7QUFBWCxPQUhaO0FBSUUsZUFBUyxFQUFFLElBSmI7QUFLRSxlQUFTLEVBQUUsR0FMYjtBQU1FLGlCQUFXLGFBQU1HLE9BQU8sQ0FBQ0ksUUFBZCxDQU5iO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQURGLEVBV0UsTUFBQyx3Q0FBRDtBQUFLLFFBQUUsRUFBRSxFQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLDJDQUFEO0FBQVEsYUFBTyxFQUFFeEMsTUFBakI7QUFBeUIsVUFBSSxFQUFDLFNBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsQ0FYRixDQURGLEVBa0JFLE1BQUMsNENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQWxCRixDQURELEdBcUJHLElBN0pOLENBRGU7QUFBQSxHQUFoQixDQS9CSCxDQURGO0FBbU1ELENBNU9EOztHQUFNTCxROztLQUFBQSxRO0FBOE9TQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zdG9yeS9baWRdL2NoYXB0ZXIvW2NoYXBpZF0uYmYzOWU4YzJlYTFmMTNmYjMxODkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tbWVudCxcclxuICBUb29sdGlwLFxyXG4gIEF2YXRhcixcclxuICBJbnB1dCxcclxuICBEaXZpZGVyLFxyXG4gIEJ1dHRvbixcclxuICBSb3csXHJcbiAgQ29sLFxyXG4gIFBvcGNvbmZpcm0sXHJcbn0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcclxuaW1wb3J0IFJlcG9ydCBmcm9tIFwiLi4vY29tbW9uL1JlcG9ydFwiO1xyXG5cclxuY29uc3QgeyBjb25maXJtIH0gPSBNb2RhbDtcclxuXHJcbmNvbnN0IENvbW1lbnRzID0gKHtcclxuICBjb21tZW50cyxcclxuICBhdXRoLFxyXG4gIGNvbW1lbnRCb2R5LFxyXG4gIHNldENvbW1lbnRCb2R5LFxyXG4gIHN1Ym1pdCxcclxuICByZXNwb25zZUJvZHksXHJcbiAgc2V0UmVzcG9uc2VCb2R5LFxyXG4gIGRlbGV0ZUNvbW1lbnQsXHJcbiAgY2hhcGlkLFxyXG59KSA9PiB7XHJcbiAgY29uc3QgW3RvZ2dsZUNvbW1lbnRGb3JtLCBzZXRUb2dnbGVDb21tZW50Rm9ybV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3RvZ2dsZUFuc3dlckZvcm0sIHNldFRvZ2dsZUFuc3dlckZvcm1dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtjbGlja2VkRm9ybSwgc2V0Q2xpY2tlZEZvcm1dID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IHRvcENvbW1lbnRzID0gY29tbWVudHMuZmlsdGVyKChjb21tKSA9PiAhY29tbS5hbnN3ZXIpO1xyXG4gIGNvbnN0IHJlc3BvbnNlcyA9IGNvbW1lbnRzLmZpbHRlcigoY29tbSkgPT4gY29tbS5hbnN3ZXIpO1xyXG4gIGNvbnN0IGFsbENvbW1lbnRzID0gdG9wQ29tbWVudHMubWFwKChjb21tKSA9PiB7XHJcbiAgICBsZXQgcmVzID0gW107XHJcbiAgICByZXNwb25zZXMuZm9yRWFjaCgocmVzcG9uc2UpID0+IHtcclxuICAgICAgaWYgKHJlc3BvbnNlLmNvbW1lbnRBbnN3ZXJlZElkID09PSBjb21tLmlkKSB7XHJcbiAgICAgICAgcmVzLnB1c2gocmVzcG9uc2UpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB7IC4uLmNvbW0sIHJlc3BvbnNlczogcmVzIH07XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGNvbW1lbnRUb2dnbGUgPSAoaWQpID0+IHtcclxuICAgIHNldENsaWNrZWRGb3JtKGlkKTtcclxuICAgIHNldFRvZ2dsZUNvbW1lbnRGb3JtKCF0b2dnbGVDb21tZW50Rm9ybSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYW5zd2VyVG9nZ2xlID0gKGlkKSA9PiB7XHJcbiAgICBzZXRDbGlja2VkRm9ybShpZCk7XHJcbiAgICBzZXRUb2dnbGVBbnN3ZXJGb3JtKCF0b2dnbGVBbnN3ZXJGb3JtKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBkZWxldGVGdW5jID0gKGlkKSA9PiB7XHJcbiAgICBkZWxldGVDb21tZW50KGlkLCBjaGFwaWQpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb21tZW50c1wiPlxyXG4gICAgICB7YXV0aC51c2VyID8gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8aDM+QWRkIGEgY29tbWVudDwvaDM+XHJcbiAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICA8Q29sIG1kPXsyNH0+XHJcbiAgICAgICAgICAgICAgPElucHV0LlRleHRBcmVhXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Y29tbWVudEJvZHl9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldENvbW1lbnRCb2R5KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgIGF1dG9TaXplPXt7IG1pblJvd3M6IDUgfX1cclxuICAgICAgICAgICAgICAgIHNob3dDb3VudD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIG1heExlbmd0aD17ODAwfVxyXG4gICAgICAgICAgICAgID48L0lucHV0LlRleHRBcmVhPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPENvbCBtZD17MjR9PlxyXG4gICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17c3VibWl0fSB0eXBlPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgQ29tbWVudFxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICA8Lz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8cCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMjBweFwiIH19PlxyXG4gICAgICAgICAgWW91IG5lZWQgdG8gYmUgbG9nZ2VkIGluIHRvIHBvc3QgYSBjb21tZW50LntcIiBcIn1cclxuICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL2F1dGhcIn0+XHJcbiAgICAgICAgICAgIDxhPkNsaWNrIGhlcmUgdG8gbG9naW4gb3IgY3JlYXRlIGFuIGFjY291bnQgITwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L3A+XHJcbiAgICAgICl9XHJcbiAgICAgIDxoMz57Y29tbWVudHMubGVuZ3RofSBDb21tZW50czwvaDM+XHJcbiAgICAgIHthbGxDb21tZW50cy5tYXAoKGNvbW1lbnQpID0+IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPENvbW1lbnRcclxuICAgICAgICAgICAga2V5PXtjb21tZW50LmlkfVxyXG4gICAgICAgICAgICBhY3Rpb25zPXtbXHJcbiAgICAgICAgICAgICAgYXV0aCAmJiBhdXRoLnVzZXIgJiYgKFxyXG4gICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAga2V5PVwiY29tbWVudC1iYXNpYy1yZXBseS10b1wiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2NvbW1lbnRUb2dnbGUuYmluZChudWxsLCBjb21tZW50LmlkKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgUmVwbHl7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICBjb21tZW50LnVzZXJJZCA9PT0gYXV0aC51c2VyLnVpZCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8UG9wY29uZmlybVxyXG4gICAgICAgICAgICAgICAgICB0aXRsZT1cIkRvIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIGNvbW1lbnQgP1wiXHJcbiAgICAgICAgICAgICAgICAgIG9rVGV4dD1cIlllc1wiXHJcbiAgICAgICAgICAgICAgICAgIGNhbmNlbFRleHQ9XCJOb1wiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9e2RlbGV0ZUZ1bmMuYmluZChudWxsLCBjb21tZW50LmlkKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgRGVsZXRlXHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvUG9wY29uZmlybT5cclxuICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgIGF1dGgudXNlciAmJiBhdXRoLnVzZXIudWlkICE9PSBjb21tZW50LnVzZXJJZCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8UmVwb3J0IHR5cGU9XCJjb21tZW50XCIgZGF0YT17Y29tbWVudH0gLz5cclxuICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICBhdXRob3I9e1xyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcHJvZmlsZS8ke2NvbW1lbnQudXNlcklkfWB9PlxyXG4gICAgICAgICAgICAgICAgPGE+e2NvbW1lbnQudXNlcm5hbWV9PC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhdmF0YXI9e1xyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcHJvZmlsZS8ke2NvbW1lbnQudXNlcklkfWB9PlxyXG4gICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgIDxBdmF0YXIgc3JjPXtjb21tZW50LnVzZXJJbWFnZX0gYWx0PXtjb21tZW50LnVzZXJuYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb250ZW50PXs8cD57Y29tbWVudC5jb250ZW50fTwvcD59XHJcbiAgICAgICAgICAgIGRhdGV0aW1lPXtcclxuICAgICAgICAgICAgICA8VG9vbHRpcFxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e1xyXG4gICAgICAgICAgICAgICAgICBjb21tZW50LmNyZWF0ZWRBdCAmJiB0eXBlb2YgY29tbWVudC5jcmVhdGVkQXQgPT09IFwib2JqZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICA/IG1vbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudW5peChjb21tZW50LmNyZWF0ZWRBdC5zZWNvbmRzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZm9ybWF0KFwiWVlZWS1NTS1ERCBISDptbTpzc1wiKVxyXG4gICAgICAgICAgICAgICAgICAgIDogbW9tZW50KGNvbW1lbnQuY3JlYXRlZEF0KS5mb3JtYXQoXCJZWVlZLU1NLUREIEhIOm1tOnNzXCIpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgIHtjb21tZW50LmNyZWF0ZWRBdCAmJiB0eXBlb2YgY29tbWVudC5jcmVhdGVkQXQgPT09IFwib2JqZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICA/IG1vbWVudC51bml4KGNvbW1lbnQuY3JlYXRlZEF0LnNlY29uZHMpLmZyb21Ob3coKVxyXG4gICAgICAgICAgICAgICAgICAgIDogbW9tZW50KGNvbW1lbnQuY3JlYXRlZEF0KS5mcm9tTm93KCl9XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtjb21tZW50LnJlc3BvbnNlcy5tYXAoKGMpID0+IChcclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPENvbW1lbnRcclxuICAgICAgICAgICAgICAgICAga2V5PXtjLmlkfVxyXG4gICAgICAgICAgICAgICAgICBhY3Rpb25zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0aCAmJiBhdXRoLnVzZXIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PVwiY29tbWVudC1iYXNpYy1yZXBseS10b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Fuc3dlclRvZ2dsZS5iaW5kKG51bGwsIGMuaWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSZXBseXtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbW1lbnQudXNlcklkID09PSBhdXRoLnVzZXIudWlkICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9e2RlbGV0ZUZ1bmMuYmluZChudWxsLCBjLmlkKX0+RGVsZXRlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0aC51c2VyICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAoYXV0aC51c2VyLnVpZCAhPT0gY29tbWVudC51c2VySWQpKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVwb3J0IHR5cGU9XCJjb21tZW50XCIgZGF0YT17Y29tbWVudH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgIGF1dGhvcj17XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9wcm9maWxlLyR7Yy51c2VySWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YT57Yy51c2VybmFtZX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIGF2YXRhcj17XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9wcm9maWxlLyR7Yy51c2VySWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEF2YXRhciBzcmM9e2MudXNlckltYWdlfSBhbHQ9e2MudXNlcm5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9ezxwPntjLmNvbnRlbnR9PC9wPn1cclxuICAgICAgICAgICAgICAgICAgZGF0ZXRpbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgIDxUb29sdGlwXHJcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnQuY3JlYXRlZEF0ICYmIHR5cGVvZiBjLmNyZWF0ZWRBdCA9PT0gXCJvYmplY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gbW9tZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC51bml4KGMuY3JlYXRlZEF0LnNlY29uZHMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mb3JtYXQoXCJZWVlZLU1NLUREIEhIOm1tOnNzXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBtb21lbnQoYy5jcmVhdGVkQXQpLmZvcm1hdChcIllZWVktTU0tREQgSEg6bW06c3NcIilcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NvbW1lbnQuY3JlYXRlZEF0ICYmIHR5cGVvZiBjLmNyZWF0ZWRBdCA9PT0gXCJvYmplY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gbW9tZW50LnVuaXgoYy5jcmVhdGVkQXQuc2Vjb25kcykuZnJvbU5vdygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBtb21lbnQoYy5jcmVhdGVkQXQpLmZyb21Ob3coKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB7Y2xpY2tlZEZvcm0gPT09IGMuaWQgJiYgdG9nZ2xlQW5zd2VyRm9ybSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxDb2wgbWQ9ezI0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0LlRleHRBcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Jlc3BvbnNlQm9keX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFJlc3BvbnNlQm9keShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b1NpemU9e3sgbWluUm93czogNSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dDb3VudD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9ezgwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17YEAke2MudXNlcm5hbWV9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvSW5wdXQuVGV4dEFyZWE+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxDb2wgbWQ9ezI0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtzdWJtaXR9IHR5cGU9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgQ29tbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L0NvbW1lbnQ+XHJcblxyXG4gICAgICAgICAge2NsaWNrZWRGb3JtID09PSBjb21tZW50LmlkICYmIHRvZ2dsZUNvbW1lbnRGb3JtID8gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sIG1kPXsyNH0+XHJcbiAgICAgICAgICAgICAgICAgIDxJbnB1dC5UZXh0QXJlYVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtyZXNwb25zZUJvZHl9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRSZXNwb25zZUJvZHkoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9TaXplPXt7IG1pblJvd3M6IDUgfX1cclxuICAgICAgICAgICAgICAgICAgICBzaG93Q291bnQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPXs4MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2BAJHtjb21tZW50LnVzZXJuYW1lfWB9XHJcbiAgICAgICAgICAgICAgICAgID48L0lucHV0LlRleHRBcmVhPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIG1kPXsyNH0+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17c3VibWl0fSB0eXBlPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIENvbW1lbnRcclxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgIDwvPlxyXG4gICAgICApKX1cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudHM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=