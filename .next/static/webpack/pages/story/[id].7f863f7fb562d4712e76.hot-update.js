webpackHotUpdate_N_E("pages/story/[id]",{

/***/ "./components/story/Banner.js":
/*!************************************!*\
  !*** ./components/story/Banner.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/constants */ "./utils/constants.js");
/* harmony import */ var _utils_dummy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/dummy */ "./utils/dummy.js");
/* harmony import */ var _common_Like__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/Like */ "./components/common/Like.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\components\\story\\Banner.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var Banner = function Banner(_ref) {
  var loading = _ref.loading,
      story = _ref.story,
      id = _ref.id,
      isFavorite = _ref.isFavorite,
      addStoryToFavorite = _ref.addStoryToFavorite,
      removeStoryFromFavorite = _ref.removeStoryFromFavorite,
      auth = _ref.auth;
  var lang = _utils_constants__WEBPACK_IMPORTED_MODULE_4__["LANGUAGES"].find(function (l) {
    return l.value.toLocaleLowerCase() === story.language;
  });
  lang = lang ? lang.name : story.language;
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    sm: 24,
    md: 8,
    lg: 6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "story-details",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, !loading && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "poster",
    "data-aos": "zoom-in",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Image"], {
    src: story.banner ? story.banner : _utils_dummy__WEBPACK_IMPORTED_MODULE_5__["dummy"].noImage,
    alt: "poster ".concat(story.title),
    width: "100%",
    height: "100%",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 15
    }
  })), __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, story.title), __jsx("p", {
    className: "author",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, "by", " ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/profile/".concat(story.authorId),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 15
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }, story.authorName))), __jsx(_common_Like__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: id,
    title: story.title,
    type: "story",
    isFavorite: isFavorite,
    likeFunc: addStoryToFavorite,
    username: auth.user.username,
    removeFunc: removeStoryFromFavorite,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, "Summary"), __jsx("p", {
    className: "summary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, story.summary ? story.summary : "No summary yet"), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, "Details"), __jsx("div", {
    className: "details",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 15
    }
  }, "Posted on:", " ", typeof story.createdAt === "object" ? moment__WEBPACK_IMPORTED_MODULE_2___default.a.unix(story.createdAt.seconds).format("YYYY-DD-MM") : moment__WEBPACK_IMPORTED_MODULE_2___default()(story.createdAt).format("YYYY-DD-MM")), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 15
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 15
    }
  }, "Category:", " ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/category/1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 17
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 19
    }
  }, "Drama"))), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 15
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 15
    }
  }, "Language: ", lang), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 15
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 15
    }
  }, "Status: ", story.status), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 15
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 15
    }
  }, "Copyright: ", story.copyright), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 15
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 15
    }
  }, "Cover Copyright: ", story.imageCopyright), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 15
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 15
    }
  }, "Mature content: ", story.mature ? "YES" : "NO"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 15
    }
  })), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }
  }, "Tags"), __jsx("div", {
    className: "tags",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }
  }, story.tags.map(function (tag) {
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Tag"], {
      key: tag,
      color: "#6d5dfc",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 17
      }
    }, "#".concat(tag));
  }))), __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, loading && __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Skeleton"].Avatar, {
    loading: loading,
    shape: "square",
    size: 265,
    active: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 13
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Skeleton"], {
    loading: loading,
    paragraph: true,
    active: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 11
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Skeleton"], {
    loading: loading,
    paragraph: true,
    active: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 11
    }
  }))));
};

_c = Banner;
/* harmony default export */ __webpack_exports__["default"] = (Banner);

var _c;

$RefreshReg$(_c, "Banner");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zdG9yeS9CYW5uZXIuanMiXSwibmFtZXMiOlsiQmFubmVyIiwibG9hZGluZyIsInN0b3J5IiwiaWQiLCJpc0Zhdm9yaXRlIiwiYWRkU3RvcnlUb0Zhdm9yaXRlIiwicmVtb3ZlU3RvcnlGcm9tRmF2b3JpdGUiLCJhdXRoIiwibGFuZyIsIkxBTkdVQUdFUyIsImZpbmQiLCJsIiwidmFsdWUiLCJ0b0xvY2FsZUxvd2VyQ2FzZSIsImxhbmd1YWdlIiwibmFtZSIsImJhbm5lciIsImR1bW15Iiwibm9JbWFnZSIsInRpdGxlIiwiYXV0aG9ySWQiLCJhdXRob3JOYW1lIiwidXNlciIsInVzZXJuYW1lIiwic3VtbWFyeSIsImNyZWF0ZWRBdCIsIm1vbWVudCIsInVuaXgiLCJzZWNvbmRzIiwiZm9ybWF0Iiwic3RhdHVzIiwiY29weXJpZ2h0IiwiaW1hZ2VDb3B5cmlnaHQiLCJtYXR1cmUiLCJ0YWdzIiwibWFwIiwidGFnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsT0FRVDtBQUFBLE1BUEpDLE9BT0ksUUFQSkEsT0FPSTtBQUFBLE1BTkpDLEtBTUksUUFOSkEsS0FNSTtBQUFBLE1BTEpDLEVBS0ksUUFMSkEsRUFLSTtBQUFBLE1BSkpDLFVBSUksUUFKSkEsVUFJSTtBQUFBLE1BSEpDLGtCQUdJLFFBSEpBLGtCQUdJO0FBQUEsTUFGSkMsdUJBRUksUUFGSkEsdUJBRUk7QUFBQSxNQURKQyxJQUNJLFFBREpBLElBQ0k7QUFDSixNQUFJQyxJQUFJLEdBQUdDLDBEQUFTLENBQUNDLElBQVYsQ0FDVCxVQUFDQyxDQUFEO0FBQUEsV0FBT0EsQ0FBQyxDQUFDQyxLQUFGLENBQVFDLGlCQUFSLE9BQWdDWCxLQUFLLENBQUNZLFFBQTdDO0FBQUEsR0FEUyxDQUFYO0FBR0FOLE1B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QSxXQUNkLE1BQUMsd0NBQUQ7QUFBSyxTQUFHLEVBQUVBLEdBQVY7QUFBZSxXQUFLLEVBQUMsU0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBb0NBLEdBQXBDLEVBRGM7QUFBQSxHQUFmLENBREgsQ0F6REYsQ0FGSixFQWtFRSxtRUFDR25DLE9BQU8sSUFDTixNQUFDLDZDQUFELENBQVUsTUFBVjtBQUNFLFdBQU8sRUFBRUEsT0FEWDtBQUVFLFNBQUssRUFBQyxRQUZSO0FBR0UsUUFBSSxFQUFFLEdBSFI7QUFJRSxVQUFNLE1BSlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLEVBU0UsTUFBQyw2Q0FBRDtBQUFVLFdBQU8sRUFBRUEsT0FBbkI7QUFBNEIsYUFBUyxNQUFyQztBQUFzQyxVQUFNLE1BQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFURixFQVVFLE1BQUMsNkNBQUQ7QUFBVSxXQUFPLEVBQUVBLE9BQW5CO0FBQTRCLGFBQVMsTUFBckM7QUFBc0MsVUFBTSxNQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVkYsQ0FsRUYsQ0FERixDQURGO0FBbUZELENBaEdEOztLQUFNRCxNO0FBa0dTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zdG9yeS9baWRdLjdmODYzZjdmYjU2MmQ0NzEyZTc2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XHJcbmltcG9ydCB7IEltYWdlLCBDb2wsIFRhZywgU2tlbGV0b24gfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuaW1wb3J0IHsgTEFOR1VBR0VTIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBkdW1teSB9IGZyb20gXCIuLi8uLi91dGlscy9kdW1teVwiO1xyXG5cclxuaW1wb3J0IExpa2UgZnJvbSBcIi4uL2NvbW1vbi9MaWtlXCI7XHJcblxyXG5jb25zdCBCYW5uZXIgPSAoe1xyXG4gIGxvYWRpbmcsXHJcbiAgc3RvcnksXHJcbiAgaWQsXHJcbiAgaXNGYXZvcml0ZSxcclxuICBhZGRTdG9yeVRvRmF2b3JpdGUsXHJcbiAgcmVtb3ZlU3RvcnlGcm9tRmF2b3JpdGUsXHJcbiAgYXV0aCxcclxufSkgPT4ge1xyXG4gIGxldCBsYW5nID0gTEFOR1VBR0VTLmZpbmQoXHJcbiAgICAobCkgPT4gbC52YWx1ZS50b0xvY2FsZUxvd2VyQ2FzZSgpID09PSBzdG9yeS5sYW5ndWFnZVxyXG4gICk7XHJcbiAgbGFuZyA9IGxhbmcgPyBsYW5nLm5hbWUgOiBzdG9yeS5sYW5ndWFnZTtcclxuICByZXR1cm4gKFxyXG4gICAgPENvbCBzbT17MjR9IG1kPXs4fSBsZz17Nn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RvcnktZGV0YWlsc1wiPlxyXG4gICAgICAgIHshbG9hZGluZyAmJiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RlclwiIGRhdGEtYW9zPVwiem9vbS1pblwiPlxyXG4gICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgc3JjPXtzdG9yeS5iYW5uZXIgPyBzdG9yeS5iYW5uZXIgOiBkdW1teS5ub0ltYWdlfVxyXG4gICAgICAgICAgICAgICAgYWx0PXtgcG9zdGVyICR7c3RvcnkudGl0bGV9YH1cclxuICAgICAgICAgICAgICAgIHdpZHRoPXtcIjEwMCVcIn1cclxuICAgICAgICAgICAgICAgIGhlaWdodD17XCIxMDAlXCJ9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxoMj57c3RvcnkudGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYXV0aG9yXCI+XHJcbiAgICAgICAgICAgICAgYnl7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9wcm9maWxlLyR7c3RvcnkuYXV0aG9ySWR9YH0+XHJcbiAgICAgICAgICAgICAgICA8YT57c3RvcnkuYXV0aG9yTmFtZX08L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxMaWtlXHJcbiAgICAgICAgICAgICAgaWQ9e2lkfVxyXG4gICAgICAgICAgICAgIHRpdGxlPXtzdG9yeS50aXRsZX1cclxuICAgICAgICAgICAgICB0eXBlPVwic3RvcnlcIlxyXG4gICAgICAgICAgICAgIGlzRmF2b3JpdGU9e2lzRmF2b3JpdGV9XHJcbiAgICAgICAgICAgICAgbGlrZUZ1bmM9e2FkZFN0b3J5VG9GYXZvcml0ZX1cclxuICAgICAgICAgICAgICB1c2VybmFtZT17YXV0aC51c2VyLnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgIHJlbW92ZUZ1bmM9e3JlbW92ZVN0b3J5RnJvbUZhdm9yaXRlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8aDM+U3VtbWFyeTwvaDM+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN1bW1hcnlcIj5cclxuICAgICAgICAgICAgICB7c3Rvcnkuc3VtbWFyeSA/IHN0b3J5LnN1bW1hcnkgOiBcIk5vIHN1bW1hcnkgeWV0XCJ9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPGgzPkRldGFpbHM8L2gzPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHNcIj5cclxuICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgIFBvc3RlZCBvbjp7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICB7dHlwZW9mIHN0b3J5LmNyZWF0ZWRBdCA9PT0gXCJvYmplY3RcIlxyXG4gICAgICAgICAgICAgICAgICA/IG1vbWVudC51bml4KHN0b3J5LmNyZWF0ZWRBdC5zZWNvbmRzKS5mb3JtYXQoXCJZWVlZLURELU1NXCIpXHJcbiAgICAgICAgICAgICAgICAgIDogbW9tZW50KHN0b3J5LmNyZWF0ZWRBdCkuZm9ybWF0KFwiWVlZWS1ERC1NTVwiKX1cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICBDYXRlZ29yeTp7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NhdGVnb3J5LzFcIj5cclxuICAgICAgICAgICAgICAgICAgPGE+RHJhbWE8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIDxzcGFuPkxhbmd1YWdlOiB7bGFuZ308L3NwYW4+XHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgPHNwYW4+U3RhdHVzOiB7c3Rvcnkuc3RhdHVzfTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICA8c3Bhbj5Db3B5cmlnaHQ6IHtzdG9yeS5jb3B5cmlnaHR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIDxzcGFuPkNvdmVyIENvcHlyaWdodDoge3N0b3J5LmltYWdlQ29weXJpZ2h0fTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICA8c3Bhbj5NYXR1cmUgY29udGVudDoge3N0b3J5Lm1hdHVyZSA/IFwiWUVTXCIgOiBcIk5PXCJ9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGgzPlRhZ3M8L2gzPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhZ3NcIj5cclxuICAgICAgICAgICAgICB7c3RvcnkudGFncy5tYXAoKHRhZykgPT4gKFxyXG4gICAgICAgICAgICAgICAgPFRhZyBrZXk9e3RhZ30gY29sb3I9XCIjNmQ1ZGZjXCI+e2AjJHt0YWd9YH08L1RhZz5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApfVxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICB7bG9hZGluZyAmJiAoXHJcbiAgICAgICAgICAgIDxTa2VsZXRvbi5BdmF0YXJcclxuICAgICAgICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxyXG4gICAgICAgICAgICAgIHNoYXBlPVwic3F1YXJlXCJcclxuICAgICAgICAgICAgICBzaXplPXsyNjV9XHJcbiAgICAgICAgICAgICAgYWN0aXZlXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgPFNrZWxldG9uIGxvYWRpbmc9e2xvYWRpbmd9IHBhcmFncmFwaCBhY3RpdmUgLz5cclxuICAgICAgICAgIDxTa2VsZXRvbiBsb2FkaW5nPXtsb2FkaW5nfSBwYXJhZ3JhcGggYWN0aXZlIC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9Db2w+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhbm5lcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==