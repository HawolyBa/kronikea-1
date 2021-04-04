webpackHotUpdate_N_E("pages/story/[id]",{

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
      location: c,
      type: type,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 32
      }
    });
  }) : __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Empty"], {
    image: antd__WEBPACK_IMPORTED_MODULE_1__["Empty"].PRESENTED_IMAGE_SIMPLE,
    description: "No characters yet",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  }))) : //   <Row gutter={gutter}>
  //     {locations.map((loc) => (
  //       <Col xl={xl} xxl={xxl} xs={xs} sm={sm} md={md} lg={lg} key={loc.id}>
  //         <LocationCard type={type} location={loc} />
  //       </Col>
  //     ))}
  //   </Row>
  __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Empty"], {
    image: antd__WEBPACK_IMPORTED_MODULE_1__["Empty"].PRESENTED_IMAGE_SIMPLE,
    description: "No locations yet",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
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
      lineNumber: 105,
      columnNumber: 5
    }
  }, __jsx(react_responsive_masonry__WEBPACK_IMPORTED_MODULE_3___default.a, {
    gutter: gutter,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 7
    }
  }, characters.length > 0 ? characters.map(function (c) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      key: c.id,
      href: "/character/".concat(c.id),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 13
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 15
      }
    }, __jsx(_common_CharacterCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
      character: c,
      type: type,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 17
      }
    })));
  }) : __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Empty"], {
    image: antd__WEBPACK_IMPORTED_MODULE_1__["Empty"].PRESENTED_IMAGE_SIMPLE,
    description: "No characters yet",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 11
    }
  }))) : __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Empty"], {
    image: antd__WEBPACK_IMPORTED_MODULE_1__["Empty"].PRESENTED_IMAGE_SIMPLE,
    description: "No characters yet",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vR3JpZC5qcyJdLCJuYW1lcyI6WyJTdG9yaWVzR3JpZCIsInN0b3JpZXMiLCJ0eXBlIiwiZ3V0dGVyIiwiY29sdW1uc0NvdW50QnJlYWtQb2ludHMiLCJsZW5ndGgiLCJtYXAiLCJzdG9yeSIsImlkIiwiRW1wdHkiLCJQUkVTRU5URURfSU1BR0VfU0lNUExFIiwiVXNlckdyaWQiLCJ1c2VycyIsImxnIiwieHMiLCJzbSIsIm1kIiwidSIsIkxvY2F0aW9uR3JpZCIsImxvY2F0aW9ucyIsInhsIiwieHhsIiwiYyIsIkNoYXJhY3RlckdyaWQiLCJjaGFyYWN0ZXJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBd0Q7QUFBQSxNQUFyREMsT0FBcUQsUUFBckRBLE9BQXFEO0FBQUEsTUFBNUNDLElBQTRDLFFBQTVDQSxJQUE0QztBQUFBLE1BQXRDQyxNQUFzQyxRQUF0Q0EsTUFBc0M7QUFBQSxNQUE5QkMsdUJBQThCLFFBQTlCQSx1QkFBOEI7QUFDMUUsU0FDRSxNQUFDLDBFQUFEO0FBQW1CLDJCQUF1QixFQUFFQSx1QkFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsK0RBQUQ7QUFBUyxVQUFNLEVBQUVELE1BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0YsT0FBTyxDQUFDSSxNQUFSLEdBQWlCLENBQWpCLEdBQ0NKLE9BQU8sQ0FBQ0ssR0FBUixDQUFZLFVBQUNDLEtBQUQ7QUFBQSxXQUNWLE1BQUMsZ0RBQUQ7QUFBTSxTQUFHLEVBQUVBLEtBQUssQ0FBQ0MsRUFBakI7QUFBcUIsVUFBSSxtQkFBWUQsS0FBSyxDQUFDQyxFQUFsQixDQUF6QjtBQUFBO0FBQUE7QUFB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LGdEQUFEO0FBQU0sU0FBRyxFQUFFQSxDQUFDLENBQUNkLEVBQWI7QUFBaUIsVUFBSSx1QkFBZ0JjLENBQUMsQ0FBQ2QsRUFBbEIsQ0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLDZEQUFEO0FBQWUsZUFBUyxFQUFFYyxDQUExQjtBQUE2QixVQUFJLEVBQUVwQixJQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsQ0FERixDQURhO0FBQUEsR0FBZixDQURELEdBU0MsTUFBQywwQ0FBRDtBQUNFLFNBQUssRUFBRU8sMENBQUssQ0FBQ0Msc0JBRGY7QUFFRSxlQUFXLEVBQUMsbUJBRmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZKLENBREYsQ0FESyxHQW9CTCxNQUFDLDBDQUFEO0FBQ0UsU0FBSyxFQUFFRCwwQ0FBSyxDQUFDQyxzQkFEZjtBQUVFLGVBQVcsRUFBQyxtQkFGZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBcEJGO0FBeUJELENBckNEOztNQUFNYSxhO0FBdUNOIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3N0b3J5L1tpZF0uMzVlODhhNmFmYjVkMjNkY2RhNzguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdywgQ29sLCBFbXB0eSB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IE1hc29ucnksIHsgUmVzcG9uc2l2ZU1hc29ucnkgfSBmcm9tIFwicmVhY3QtcmVzcG9uc2l2ZS1tYXNvbnJ5XCI7XHJcblxyXG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi4vY29tbW9uL0NhcmRcIjtcclxuaW1wb3J0IFVzZXJDYXJkIGZyb20gXCIuLi9jb21tb24vVXNlckNhcmRcIjtcclxuaW1wb3J0IENoYXJhY3RlckNhcmQgZnJvbSBcIi4uL2NvbW1vbi9DaGFyYWN0ZXJDYXJkXCI7XHJcbmltcG9ydCBMb2NhdGlvbkNhcmQgZnJvbSBcIi4uL2NvbW1vbi9Mb2NhdGlvbkNhcmRcIjtcclxuXHJcbmNvbnN0IFN0b3JpZXNHcmlkID0gKHsgc3RvcmllcywgdHlwZSwgZ3V0dGVyLCBjb2x1bW5zQ291bnRCcmVha1BvaW50cyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxSZXNwb25zaXZlTWFzb25yeSBjb2x1bW5zQ291bnRCcmVha1BvaW50cz17Y29sdW1uc0NvdW50QnJlYWtQb2ludHN9PlxyXG4gICAgICA8TWFzb25yeSBndXR0ZXI9e2d1dHRlcn0+XHJcbiAgICAgICAge3N0b3JpZXMubGVuZ3RoID4gMCA/IChcclxuICAgICAgICAgIHN0b3JpZXMubWFwKChzdG9yeSkgPT4gKFxyXG4gICAgICAgICAgICA8TGluayBrZXk9e3N0b3J5LmlkfSBocmVmPXtgL3N0b3J5LyR7c3RvcnkuaWR9YH0+XHJcbiAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZCBzdG9yeT17c3Rvcnl9IHR5cGU9e3R5cGV9IC8+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICApKVxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8RW1wdHlcclxuICAgICAgICAgICAgaW1hZ2U9e0VtcHR5LlBSRVNFTlRFRF9JTUFHRV9TSU1QTEV9XHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiTm8gc3RvcmllcyB5ZXRcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApfVxyXG4gICAgICA8L01hc29ucnk+XHJcbiAgICA8L1Jlc3BvbnNpdmVNYXNvbnJ5PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBVc2VyR3JpZCA9ICh7IHVzZXJzLCBsZywgeHMsIHNtLCBtZCwgZ3V0dGVyIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFJvdyBndXR0ZXI9e2d1dHRlcn0+XHJcbiAgICAgIHt1c2Vycy5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgIHVzZXJzLm1hcCgodSkgPT4gKFxyXG4gICAgICAgICAgPENvbCBrZXk9e3UuaWR9IGxnPXtsZ30gbWQ9e21kfSBzbT17c219IHhzPXt4c30+XHJcbiAgICAgICAgICAgIDxVc2VyQ2FyZCB1c2VyPXt1fSAvPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgKSlcclxuICAgICAgKSA6IChcclxuICAgICAgICA8RW1wdHlcclxuICAgICAgICAgIGltYWdlPXtFbXB0eS5QUkVTRU5URURfSU1BR0VfU0lNUExFfVxyXG4gICAgICAgICAgZGVzY3JpcHRpb249XCJObyBmb2xsb3dlcnMgeWV0XCJcclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG4gICAgPC9Sb3c+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IExvY2F0aW9uR3JpZCA9ICh7XHJcbiAgbG9jYXRpb25zLFxyXG4gIGd1dHRlcixcclxuICB4bCxcclxuICB4eGwsXHJcbiAgbGcsXHJcbiAgbWQsXHJcbiAgc20sXHJcbiAgeHMsXHJcbiAgdHlwZSxcclxuICBjb2x1bW5zQ291bnRCcmVha1BvaW50cyxcclxufSkgPT4ge1xyXG4gIHJldHVybiBsb2NhdGlvbnMubGVuZ3RoID4gMCA/IChcclxuICAgIDxSZXNwb25zaXZlTWFzb25yeSBjb2x1bW5zQ291bnRCcmVha1BvaW50cz17Y29sdW1uc0NvdW50QnJlYWtQb2ludHN9PlxyXG4gICAgICA8TWFzb25yeSBndXR0ZXI9e2d1dHRlcn0+XHJcbiAgICAgICAge2xvY2F0aW9ucy5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgICAgbG9jYXRpb25zLm1hcCgoYykgPT4gPExvY2F0aW9uQ2FyZCBsb2NhdGlvbj17Y30gdHlwZT17dHlwZX0gLz4pXHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxFbXB0eVxyXG4gICAgICAgICAgICBpbWFnZT17RW1wdHkuUFJFU0VOVEVEX0lNQUdFX1NJTVBMRX1cclxuICAgICAgICAgICAgZGVzY3JpcHRpb249XCJObyBjaGFyYWN0ZXJzIHlldFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvTWFzb25yeT5cclxuICAgIDwvUmVzcG9uc2l2ZU1hc29ucnk+XHJcbiAgKSA6IChcclxuICAgIC8vICAgPFJvdyBndXR0ZXI9e2d1dHRlcn0+XHJcbiAgICAvLyAgICAge2xvY2F0aW9ucy5tYXAoKGxvYykgPT4gKFxyXG4gICAgLy8gICAgICAgPENvbCB4bD17eGx9IHh4bD17eHhsfSB4cz17eHN9IHNtPXtzbX0gbWQ9e21kfSBsZz17bGd9IGtleT17bG9jLmlkfT5cclxuICAgIC8vICAgICAgICAgPExvY2F0aW9uQ2FyZCB0eXBlPXt0eXBlfSBsb2NhdGlvbj17bG9jfSAvPlxyXG4gICAgLy8gICAgICAgPC9Db2w+XHJcbiAgICAvLyAgICAgKSl9XHJcbiAgICAvLyAgIDwvUm93PlxyXG4gICAgPEVtcHR5XHJcbiAgICAgIGltYWdlPXtFbXB0eS5QUkVTRU5URURfSU1BR0VfU0lNUExFfVxyXG4gICAgICBkZXNjcmlwdGlvbj1cIk5vIGxvY2F0aW9ucyB5ZXRcIlxyXG4gICAgLz5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgQ2hhcmFjdGVyR3JpZCA9ICh7XHJcbiAgZ3V0dGVyLFxyXG4gIHh4bCxcclxuICB4bCxcclxuICBsZyxcclxuICBtZCxcclxuICBzbSxcclxuICB4cyxcclxuICBjaGFyYWN0ZXJzLFxyXG4gIHR5cGUsXHJcbiAgY29sdW1uc0NvdW50QnJlYWtQb2ludHMsXHJcbn0pID0+IHtcclxuICByZXR1cm4gY2hhcmFjdGVycy5sZW5ndGggPiAwID8gKFxyXG4gICAgPFJlc3BvbnNpdmVNYXNvbnJ5IGNvbHVtbnNDb3VudEJyZWFrUG9pbnRzPXtjb2x1bW5zQ291bnRCcmVha1BvaW50c30+XHJcbiAgICAgIDxNYXNvbnJ5IGd1dHRlcj17Z3V0dGVyfT5cclxuICAgICAgICB7Y2hhcmFjdGVycy5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgICAgY2hhcmFjdGVycy5tYXAoKGMpID0+IChcclxuICAgICAgICAgICAgPExpbmsga2V5PXtjLmlkfSBocmVmPXtgL2NoYXJhY3Rlci8ke2MuaWR9YH0+XHJcbiAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICA8Q2hhcmFjdGVyQ2FyZCBjaGFyYWN0ZXI9e2N9IHR5cGU9e3R5cGV9IC8+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICApKVxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8RW1wdHlcclxuICAgICAgICAgICAgaW1hZ2U9e0VtcHR5LlBSRVNFTlRFRF9JTUFHRV9TSU1QTEV9XHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiTm8gY2hhcmFjdGVycyB5ZXRcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApfVxyXG4gICAgICA8L01hc29ucnk+XHJcbiAgICA8L1Jlc3BvbnNpdmVNYXNvbnJ5PlxyXG4gICkgOiAoXHJcbiAgICA8RW1wdHlcclxuICAgICAgaW1hZ2U9e0VtcHR5LlBSRVNFTlRFRF9JTUFHRV9TSU1QTEV9XHJcbiAgICAgIGRlc2NyaXB0aW9uPVwiTm8gY2hhcmFjdGVycyB5ZXRcIlxyXG4gICAgLz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgU3Rvcmllc0dyaWQsIENoYXJhY3RlckdyaWQsIFVzZXJHcmlkLCBMb2NhdGlvbkdyaWQgfTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==