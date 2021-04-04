webpackHotUpdate_N_E("pages/profile/[id]",{

/***/ "./components/common/Grid.js":
/*!***********************************!*\
  !*** ./components/common/Grid.js ***!
  \***********************************/
/*! exports provided: StoriesGrid, CharacterGrid, UserGrid, LocationGrid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoriesGrid", function() { return StoriesGrid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterGrid", function() { return CharacterGrid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserGrid", function() { return UserGrid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationGrid", function() { return LocationGrid; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_responsive_masonry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-responsive-masonry */ "./node_modules/react-responsive-masonry/es/index.js");
/* harmony import */ var react_responsive_masonry__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_responsive_masonry__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/Card */ "./components/common/Card.js");
/* harmony import */ var _common_UserCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/UserCard */ "./components/common/UserCard.js");
/* harmony import */ var _common_CharacterCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/CharacterCard */ "./components/common/CharacterCard.js");
/* harmony import */ var _common_LocationCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/LocationCard */ "./components/common/LocationCard.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\components\\common\\Grid.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var StoriesGrid = function StoriesGrid(_ref) {
  var stories = _ref.stories,
      type = _ref.type,
      gutter = _ref.gutter,
      columnsCountBreakPoints = _ref.columnsCountBreakPoints;
  return __jsx(react_responsive_masonry__WEBPACK_IMPORTED_MODULE_3__["ResponsiveMasonry"], {
    columnsCountBreakPoints: columnsCountBreakPoints,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx(react_responsive_masonry__WEBPACK_IMPORTED_MODULE_3___default.a, {
    gutter: gutter,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, stories.length > 0 ? stories.map(function (story) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      key: story.id,
      href: "/story/".concat(story.id),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 13
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 15
      }
    }, __jsx(_common_Card__WEBPACK_IMPORTED_MODULE_4__["default"], {
      story: story,
      type: type,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }
    })));
  }) : __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Empty"], {
    image: antd__WEBPACK_IMPORTED_MODULE_1__["Empty"].PRESENTED_IMAGE_SIMPLE,
    description: "No stories yet",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  })));
};

_c = StoriesGrid;

var UserGrid = function UserGrid(_ref2) {
  var users = _ref2.users,
      lg = _ref2.lg,
      xs = _ref2.xs,
      sm = _ref2.sm,
      md = _ref2.md,
      gutter = _ref2.gutter;
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    gutter: gutter,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, users.length > 0 ? users.map(function (u) {
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      key: u.id,
      lg: lg,
      md: md,
      sm: sm,
      xs: xs,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 11
      }
    }, __jsx(_common_UserCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
      user: u,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 13
      }
    }));
  }) : __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Empty"], {
    image: antd__WEBPACK_IMPORTED_MODULE_1__["Empty"].PRESENTED_IMAGE_SIMPLE,
    description: "No followers yet",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }));
};

_c2 = UserGrid;

var LocationGrid = function LocationGrid(_ref3) {
  var locations = _ref3.locations,
      gutter = _ref3.gutter,
      xl = _ref3.xl,
      xxl = _ref3.xxl,
      lg = _ref3.lg,
      md = _ref3.md,
      sm = _ref3.sm,
      xs = _ref3.xs,
      type = _ref3.type,
      columnsCountBreakPoints = _ref3.columnsCountBreakPoints;
  return locations.length > 0 ? __jsx(react_responsive_masonry__WEBPACK_IMPORTED_MODULE_3__["ResponsiveMasonry"], {
    columnsCountBreakPoints: columnsCountBreakPoints,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 5
    }
  }, __jsx(react_responsive_masonry__WEBPACK_IMPORTED_MODULE_3___default.a, {
    gutter: gutter,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }, locations.length > 0 ? locations.map(function (c) {
    return __jsx(_common_LocationCard__WEBPACK_IMPORTED_MODULE_7__["default"], {
      key: c.id,
      location: c,
      type: type,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 13
      }
    });
  }) : __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Empty"], {
    image: antd__WEBPACK_IMPORTED_MODULE_1__["Empty"].PRESENTED_IMAGE_SIMPLE,
    description: "No characters yet",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 11
    }
  }))) : __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Empty"], {
    image: antd__WEBPACK_IMPORTED_MODULE_1__["Empty"].PRESENTED_IMAGE_SIMPLE,
    description: "No locations yet",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 5
    }
  });
};

_c3 = LocationGrid;

var CharacterGrid = function CharacterGrid(_ref4) {
  var gutter = _ref4.gutter,
      xxl = _ref4.xxl,
      xl = _ref4.xl,
      lg = _ref4.lg,
      md = _ref4.md,
      sm = _ref4.sm,
      xs = _ref4.xs,
      characters = _ref4.characters,
      type = _ref4.type,
      columnsCountBreakPoints = _ref4.columnsCountBreakPoints;
  return characters.length > 0 ? __jsx(react_responsive_masonry__WEBPACK_IMPORTED_MODULE_3__["ResponsiveMasonry"], {
    columnsCountBreakPoints: columnsCountBreakPoints,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 5
    }
  }, __jsx(react_responsive_masonry__WEBPACK_IMPORTED_MODULE_3___default.a, {
    gutter: gutter,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }
  }, characters.length > 0 ? characters.map(function (c) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      key: c.id,
      href: "/character/".concat(c.id),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 13
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 15
      }
    }, __jsx(_common_CharacterCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
      character: c,
      type: type,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 17
      }
    })));
  }) : __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Empty"], {
    image: antd__WEBPACK_IMPORTED_MODULE_1__["Empty"].PRESENTED_IMAGE_SIMPLE,
    description: "No characters yet",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 11
    }
  }))) : __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Empty"], {
    image: antd__WEBPACK_IMPORTED_MODULE_1__["Empty"].PRESENTED_IMAGE_SIMPLE,
    description: "No characters yet",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 5
    }
  });
};

_c4 = CharacterGrid;


var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "StoriesGrid");
$RefreshReg$(_c2, "UserGrid");
$RefreshReg$(_c3, "LocationGrid");
$RefreshReg$(_c4, "CharacterGrid");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vR3JpZC5qcyJdLCJuYW1lcyI6WyJTdG9yaWVzR3JpZCIsInN0b3JpZXMiLCJ0eXBlIiwiZ3V0dGVyIiwiY29sdW1uc0NvdW50QnJlYWtQb2ludHMiLCJsZW5ndGgiLCJtYXAiLCJzdG9yeSIsImlkIiwiRW1wdHkiLCJQUkVTRU5URURfSU1BR0VfU0lNUExFIiwiVXNlckdyaWQiLCJ1c2VycyIsImxnIiwieHMiLCJzbSIsIm1kIiwidSIsIkxvY2F0aW9uR3JpZCIsImxvY2F0aW9ucyIsInhsIiwieHhsIiwiYyIsIkNoYXJhY3RlckdyaWQiLCJjaGFyYWN0ZXJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBd0Q7QUFBQSxNQUFyREMsT0FBcUQsUUFBckRBLE9BQXFEO0FBQUEsTUFBNUNDLElBQTRDLFFBQTVDQSxJQUE0QztBQUFBLE1BQXRDQyxNQUFzQyxRQUF0Q0EsTUFBc0M7QUFBQSxNQUE5QkMsdUJBQThCLFFBQTlCQSx1QkFBOEI7QUFDMUUsU0FDRSxNQUFDLDBFQUFEO0FBQW1CLDJCQUF1QixFQUFFQSx1QkFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsK0RBQUQ7QUFBUyxVQUFNLEVBQUVELE1BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0YsT0FBTyxDQUFDSSxNQUFSLEdBQWlCLENBQWpCLEdBQ0NKLE9BQU8sQ0FBQ0ssR0FBUixDQUFZLFVBQUNDLEtBQUQ7QUFBQSxXQUNWLE1BQUMsZ0RBQUQ7QUFBTSxTQUFHLEVBQUVBLEtBQUssQ0FBQ0MsRUFBakI7QUFBcUIsVUFBSSxtQkFBWUQsS0FBSyxDQUFDQyxFQUFsQixDQUF6QjtBQUFBO0FBQUE7QUFB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LGdEQUFEO0FBQU0sU0FBRyxFQUFFQSxDQUFDLENBQUNkLEVBQWI7QUFBaUIsVUFBSSx1QkFBZ0JjLENBQUMsQ0FBQ2QsRUFBbEIsQ0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLDZEQUFEO0FBQWUsZUFBUyxFQUFFYyxDQUExQjtBQUE2QixVQUFJLEVBQUVwQixJQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsQ0FERixDQURhO0FBQUEsR0FBZixDQURELEdBU0MsTUFBQywwQ0FBRDtBQUNFLFNBQUssRUFBRU8sMENBQUssQ0FBQ0Msc0JBRGY7QUFFRSxlQUFXLEVBQUMsbUJBRmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZKLENBREYsQ0FESyxHQW9CTCxNQUFDLDBDQUFEO0FBQ0UsU0FBSyxFQUFFRCwwQ0FBSyxDQUFDQyxzQkFEZjtBQUVFLGVBQVcsRUFBQyxtQkFGZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBcEJGO0FBeUJELENBckNEOztNQUFNYSxhO0FBdUNOIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUvW2lkXS4yMDA5YzcyMTcxNmVkZDcwM2Q2YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm93LCBDb2wsIEVtcHR5IH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgTWFzb25yeSwgeyBSZXNwb25zaXZlTWFzb25yeSB9IGZyb20gXCJyZWFjdC1yZXNwb25zaXZlLW1hc29ucnlcIjtcclxuXHJcbmltcG9ydCBDYXJkIGZyb20gXCIuLi9jb21tb24vQ2FyZFwiO1xyXG5pbXBvcnQgVXNlckNhcmQgZnJvbSBcIi4uL2NvbW1vbi9Vc2VyQ2FyZFwiO1xyXG5pbXBvcnQgQ2hhcmFjdGVyQ2FyZCBmcm9tIFwiLi4vY29tbW9uL0NoYXJhY3RlckNhcmRcIjtcclxuaW1wb3J0IExvY2F0aW9uQ2FyZCBmcm9tIFwiLi4vY29tbW9uL0xvY2F0aW9uQ2FyZFwiO1xyXG5cclxuY29uc3QgU3Rvcmllc0dyaWQgPSAoeyBzdG9yaWVzLCB0eXBlLCBndXR0ZXIsIGNvbHVtbnNDb3VudEJyZWFrUG9pbnRzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFJlc3BvbnNpdmVNYXNvbnJ5IGNvbHVtbnNDb3VudEJyZWFrUG9pbnRzPXtjb2x1bW5zQ291bnRCcmVha1BvaW50c30+XHJcbiAgICAgIDxNYXNvbnJ5IGd1dHRlcj17Z3V0dGVyfT5cclxuICAgICAgICB7c3Rvcmllcy5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgICAgc3Rvcmllcy5tYXAoKHN0b3J5KSA9PiAoXHJcbiAgICAgICAgICAgIDxMaW5rIGtleT17c3RvcnkuaWR9IGhyZWY9e2Avc3RvcnkvJHtzdG9yeS5pZH1gfT5cclxuICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgIDxDYXJkIHN0b3J5PXtzdG9yeX0gdHlwZT17dHlwZX0gLz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICkpXHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxFbXB0eVxyXG4gICAgICAgICAgICBpbWFnZT17RW1wdHkuUFJFU0VOVEVEX0lNQUdFX1NJTVBMRX1cclxuICAgICAgICAgICAgZGVzY3JpcHRpb249XCJObyBzdG9yaWVzIHlldFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvTWFzb25yeT5cclxuICAgIDwvUmVzcG9uc2l2ZU1hc29ucnk+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFVzZXJHcmlkID0gKHsgdXNlcnMsIGxnLCB4cywgc20sIG1kLCBndXR0ZXIgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Um93IGd1dHRlcj17Z3V0dGVyfT5cclxuICAgICAge3VzZXJzLmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgdXNlcnMubWFwKCh1KSA9PiAoXHJcbiAgICAgICAgICA8Q29sIGtleT17dS5pZH0gbGc9e2xnfSBtZD17bWR9IHNtPXtzbX0geHM9e3hzfT5cclxuICAgICAgICAgICAgPFVzZXJDYXJkIHVzZXI9e3V9IC8+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICApKVxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxFbXB0eVxyXG4gICAgICAgICAgaW1hZ2U9e0VtcHR5LlBSRVNFTlRFRF9JTUFHRV9TSU1QTEV9XHJcbiAgICAgICAgICBkZXNjcmlwdGlvbj1cIk5vIGZvbGxvd2VycyB5ZXRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcbiAgICA8L1Jvdz5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgTG9jYXRpb25HcmlkID0gKHtcclxuICBsb2NhdGlvbnMsXHJcbiAgZ3V0dGVyLFxyXG4gIHhsLFxyXG4gIHh4bCxcclxuICBsZyxcclxuICBtZCxcclxuICBzbSxcclxuICB4cyxcclxuICB0eXBlLFxyXG4gIGNvbHVtbnNDb3VudEJyZWFrUG9pbnRzLFxyXG59KSA9PiB7XHJcbiAgcmV0dXJuIGxvY2F0aW9ucy5sZW5ndGggPiAwID8gKFxyXG4gICAgPFJlc3BvbnNpdmVNYXNvbnJ5IGNvbHVtbnNDb3VudEJyZWFrUG9pbnRzPXtjb2x1bW5zQ291bnRCcmVha1BvaW50c30+XHJcbiAgICAgIDxNYXNvbnJ5IGd1dHRlcj17Z3V0dGVyfT5cclxuICAgICAgICB7bG9jYXRpb25zLmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgICBsb2NhdGlvbnMubWFwKChjKSA9PiAoXHJcbiAgICAgICAgICAgIDxMb2NhdGlvbkNhcmQga2V5PXtjLmlkfSBsb2NhdGlvbj17Y30gdHlwZT17dHlwZX0gLz5cclxuICAgICAgICAgICkpXHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxFbXB0eVxyXG4gICAgICAgICAgICBpbWFnZT17RW1wdHkuUFJFU0VOVEVEX0lNQUdFX1NJTVBMRX1cclxuICAgICAgICAgICAgZGVzY3JpcHRpb249XCJObyBjaGFyYWN0ZXJzIHlldFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvTWFzb25yeT5cclxuICAgIDwvUmVzcG9uc2l2ZU1hc29ucnk+XHJcbiAgKSA6IChcclxuICAgIDxFbXB0eVxyXG4gICAgICBpbWFnZT17RW1wdHkuUFJFU0VOVEVEX0lNQUdFX1NJTVBMRX1cclxuICAgICAgZGVzY3JpcHRpb249XCJObyBsb2NhdGlvbnMgeWV0XCJcclxuICAgIC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IENoYXJhY3RlckdyaWQgPSAoe1xyXG4gIGd1dHRlcixcclxuICB4eGwsXHJcbiAgeGwsXHJcbiAgbGcsXHJcbiAgbWQsXHJcbiAgc20sXHJcbiAgeHMsXHJcbiAgY2hhcmFjdGVycyxcclxuICB0eXBlLFxyXG4gIGNvbHVtbnNDb3VudEJyZWFrUG9pbnRzLFxyXG59KSA9PiB7XHJcbiAgcmV0dXJuIGNoYXJhY3RlcnMubGVuZ3RoID4gMCA/IChcclxuICAgIDxSZXNwb25zaXZlTWFzb25yeSBjb2x1bW5zQ291bnRCcmVha1BvaW50cz17Y29sdW1uc0NvdW50QnJlYWtQb2ludHN9PlxyXG4gICAgICA8TWFzb25yeSBndXR0ZXI9e2d1dHRlcn0+XHJcbiAgICAgICAge2NoYXJhY3RlcnMubGVuZ3RoID4gMCA/IChcclxuICAgICAgICAgIGNoYXJhY3RlcnMubWFwKChjKSA9PiAoXHJcbiAgICAgICAgICAgIDxMaW5rIGtleT17Yy5pZH0gaHJlZj17YC9jaGFyYWN0ZXIvJHtjLmlkfWB9PlxyXG4gICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgPENoYXJhY3RlckNhcmQgY2hhcmFjdGVyPXtjfSB0eXBlPXt0eXBlfSAvPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgKSlcclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPEVtcHR5XHJcbiAgICAgICAgICAgIGltYWdlPXtFbXB0eS5QUkVTRU5URURfSU1BR0VfU0lNUExFfVxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj1cIk5vIGNoYXJhY3RlcnMgeWV0XCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9NYXNvbnJ5PlxyXG4gICAgPC9SZXNwb25zaXZlTWFzb25yeT5cclxuICApIDogKFxyXG4gICAgPEVtcHR5XHJcbiAgICAgIGltYWdlPXtFbXB0eS5QUkVTRU5URURfSU1BR0VfU0lNUExFfVxyXG4gICAgICBkZXNjcmlwdGlvbj1cIk5vIGNoYXJhY3RlcnMgeWV0XCJcclxuICAgIC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCB7IFN0b3JpZXNHcmlkLCBDaGFyYWN0ZXJHcmlkLCBVc2VyR3JpZCwgTG9jYXRpb25HcmlkIH07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=