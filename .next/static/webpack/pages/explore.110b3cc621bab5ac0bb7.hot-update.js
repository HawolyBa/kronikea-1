webpackHotUpdate_N_E("pages/explore",{

/***/ "./pages/explore.js":
/*!**************************!*\
  !*** ./pages/explore.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _components_common_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/common/Grid */ "./components/common/Grid.js");
/* harmony import */ var _components_hoc_LoadingScreen__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/hoc/LoadingScreen */ "./components/hoc/LoadingScreen.js");
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/helpers */ "./utils/helpers.js");
/* harmony import */ var _redux_actions_storiesActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../redux/actions/storiesActions */ "./redux/actions/storiesActions.js");



var _this = undefined,
    _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\pages\\explore.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;








var Explore = function Explore(props) {
  _s();

  var stories = props.stories,
      loading = props.loading;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState([]),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      currentStories = _React$useState2[0],
      setCurrentStories = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState("a"),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState3, 2),
      currentLetter = _React$useState4[0],
      setCurrentLetter = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState([]),
      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState5, 2),
      categories = _React$useState6[0],
      setCategories = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(""),
      _React$useState8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState7, 2),
      currentCategory = _React$useState8[0],
      setCurrentCategory = _React$useState8[1];

  var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    props.getStoriesByLetter(currentLetter, alphabet);
  }, [currentLetter]);
  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    setCurrentStories(stories);
    setCategories(stories.map(function (story) {
      return story.categories ? Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(story.categories) : story.category;
    }).filter(_utils_helpers__WEBPACK_IMPORTED_MODULE_7__["onlyUnique"]));
  }, [stories]);
  react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(function () {
    console.log("chane");
    setCurrentStories(currentStories.filter(function (s) {
      return s.category === currentCategory;
    }));
  }, [currentCategory]);
  return __jsx("div", {
    className: "explore-page",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 5
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  }, "Explore"), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    gutter: [32, 24],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    span: 6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }, __jsx("aside", {
    className: "filter",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 11
    }
  }, __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }, "Filter"), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  }, __jsx("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 15
    }
  }, "by categories"), __jsx("select", {
    onChange: function onChange(e) {
      return setCurrentCategory(e.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 15
    }
  }, categories.map(function (c) {
    return __jsx("option", {
      key: c,
      value: c,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 19
      }
    }, c);
  }))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    span: 18,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "alphabetic-search",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 11
    }
  }, alphabet.map(function (a) {
    return __jsx("span", {
      className: currentLetter === a ? "current" : "",
      key: a,
      onClick: function onClick() {
        return setCurrentLetter(a);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 15
      }
    }, a);
  })), __jsx(_components_hoc_LoadingScreen__WEBPACK_IMPORTED_MODULE_6__["default"], {
    loading: loading,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 11
    }
  }, __jsx(_components_common_Grid__WEBPACK_IMPORTED_MODULE_5__["StoriesGrid"], {
    stories: currentStories,
    gutter: "16px",
    columnsCountBreakPoints: {
      1600: 3,
      1200: 3,
      900: 3,
      750: 2
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }
  })))));
};

_s(Explore, "Q8hyX17HsJbDbcECHhNdtpFPYVs=");

_c = Explore;

var mapStateToProps = function mapStateToProps(state) {
  return {
    stories: state.stories.storiesFromSearch,
    loading: state.stories.loading
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, {
  getStoriesByLetter: _redux_actions_storiesActions__WEBPACK_IMPORTED_MODULE_8__["getStoriesByLetter"]
})(Explore));

var _c;

$RefreshReg$(_c, "Explore");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXhwbG9yZS5qcyJdLCJuYW1lcyI6WyJFeHBsb3JlIiwicHJvcHMiLCJzdG9yaWVzIiwibG9hZGluZyIsIlJlYWN0IiwidXNlU3RhdGUiLCJjdXJyZW50U3RvcmllcyIsInNldEN1cnJlbnRTdG9yaWVzIiwiY3VycmVudExldHRlciIsInNldEN1cnJlbnRMZXR0ZXIiLCJjYXRlZ29yaWVzIiwic2V0Q2F0ZWdvcmllcyIsImN1cnJlbnRDYXRlZ29yeSIsInNldEN1cnJlbnRDYXRlZ29yeSIsImFscGhhYmV0IiwidXNlRWZmZWN0IiwiZ2V0U3Rvcmllc0J5TGV0dGVyIiwibWFwIiwic3RvcnkiLCJjYXRlZ29yeSIsImZpbHRlciIsIm9ubHlVbmlxdWUiLCJjb25zb2xlIiwibG9nIiwicyIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImMiLCJhIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJzdG9yaWVzRnJvbVNlYXJjaCIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsTUFDakJDLE9BRGlCLEdBQ0lELEtBREosQ0FDakJDLE9BRGlCO0FBQUEsTUFDUkMsT0FEUSxHQUNJRixLQURKLENBQ1JFLE9BRFE7O0FBQUEsd0JBRW1CQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsRUFBZixDQUZuQjtBQUFBO0FBQUEsTUFFbEJDLGNBRmtCO0FBQUEsTUFFRkMsaUJBRkU7O0FBQUEseUJBR2lCSCw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsR0FBZixDQUhqQjtBQUFBO0FBQUEsTUFHbEJHLGFBSGtCO0FBQUEsTUFHSEMsZ0JBSEc7O0FBQUEseUJBSVdMLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxFQUFmLENBSlg7QUFBQTtB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QUFELEVBQWtCO0FBQUVkLG9CQUFrQixFQUFsQkEsZ0ZBQWtCQTtBQUFwQixDQUFsQixDQUFQLENBQWlEaEIsT0FBakQsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9leHBsb3JlLjExMGIzY2M2MjFiYWI1YWMwYmI3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgUm93LCBDb2wgfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuaW1wb3J0IHsgU3Rvcmllc0dyaWQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9jb21tb24vR3JpZFwiO1xyXG5pbXBvcnQgTG9hZGluZ1NjcmVlbiBmcm9tIFwiLi4vY29tcG9uZW50cy9ob2MvTG9hZGluZ1NjcmVlblwiO1xyXG5pbXBvcnQgeyBvbmx5VW5pcXVlIH0gZnJvbSBcIi4uL3V0aWxzL2hlbHBlcnNcIjtcclxuXHJcbmltcG9ydCB7IGdldFN0b3JpZXNCeUxldHRlciB9IGZyb20gXCIuLi9yZWR1eC9hY3Rpb25zL3N0b3JpZXNBY3Rpb25zXCI7XHJcblxyXG5jb25zdCBFeHBsb3JlID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBzdG9yaWVzLCBsb2FkaW5nIH0gPSBwcm9wcztcclxuICBjb25zdCBbY3VycmVudFN0b3JpZXMsIHNldEN1cnJlbnRTdG9yaWVzXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbY3VycmVudExldHRlciwgc2V0Q3VycmVudExldHRlcl0gPSBSZWFjdC51c2VTdGF0ZShcImFcIik7XHJcbiAgY29uc3QgW2NhdGVnb3JpZXMsIHNldENhdGVnb3JpZXNdID0gUmVhY3QudXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtjdXJyZW50Q2F0ZWdvcnksIHNldEN1cnJlbnRDYXRlZ29yeV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBhbHBoYWJldCA9IFtcclxuICAgIFwiYVwiLFxyXG4gICAgXCJiXCIsXHJcbiAgICBcImNcIixcclxuICAgIFwiZFwiLFxyXG4gICAgXCJlXCIsXHJcbiAgICBcImZcIixcclxuICAgIFwiZ1wiLFxyXG4gICAgXCJoXCIsXHJcbiAgICBcImlcIixcclxuICAgIFwialwiLFxyXG4gICAgXCJrXCIsXHJcbiAgICBcImxcIixcclxuICAgIFwibVwiLFxyXG4gICAgXCJuXCIsXHJcbiAgICBcIm9cIixcclxuICAgIFwicFwiLFxyXG4gICAgXCJxXCIsXHJcbiAgICBcInJcIixcclxuICAgIFwic1wiLFxyXG4gICAgXCJ0XCIsXHJcbiAgICBcInVcIixcclxuICAgIFwidlwiLFxyXG4gICAgXCJ3XCIsXHJcbiAgICBcInhcIixcclxuICAgIFwieVwiLFxyXG4gICAgXCJ6XCIsXHJcbiAgXTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHByb3BzLmdldFN0b3JpZXNCeUxldHRlcihjdXJyZW50TGV0dGVyLCBhbHBoYWJldCk7XHJcbiAgfSwgW2N1cnJlbnRMZXR0ZXJdKTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldEN1cnJlbnRTdG9yaWVzKHN0b3JpZXMpO1xyXG4gICAgc2V0Q2F0ZWdvcmllcyhcclxuICAgICAgc3Rvcmllc1xyXG4gICAgICAgIC5tYXAoKHN0b3J5KSA9PlxyXG4gICAgICAgICAgc3RvcnkuY2F0ZWdvcmllcyA/IFsuLi5zdG9yeS5jYXRlZ29yaWVzXSA6IHN0b3J5LmNhdGVnb3J5XHJcbiAgICAgICAgKVxyXG4gICAgICAgIC5maWx0ZXIob25seVVuaXF1ZSlcclxuICAgICk7XHJcbiAgfSwgW3N0b3JpZXNdKTtcclxuXHJcbiAgUmVhY3QudXNlU3RhdGUoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJjaGFuZVwiKTtcclxuICAgIHNldEN1cnJlbnRTdG9yaWVzKFxyXG4gICAgICBjdXJyZW50U3Rvcmllcy5maWx0ZXIoKHMpID0+IHMuY2F0ZWdvcnkgPT09IGN1cnJlbnRDYXRlZ29yeSlcclxuICAgICk7XHJcbiAgfSwgW2N1cnJlbnRDYXRlZ29yeV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJleHBsb3JlLXBhZ2VcIj5cclxuICAgICAgPGgyPkV4cGxvcmU8L2gyPlxyXG4gICAgICA8Um93IGd1dHRlcj17WzMyLCAyNF19PlxyXG4gICAgICAgIDxDb2wgc3Bhbj17Nn0+XHJcbiAgICAgICAgICA8YXNpZGUgY2xhc3NOYW1lPVwiZmlsdGVyXCI+XHJcbiAgICAgICAgICAgIDxoND5GaWx0ZXI8L2g0PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxoNT5ieSBjYXRlZ29yaWVzPC9oNT5cclxuICAgICAgICAgICAgICA8c2VsZWN0IG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q3VycmVudENhdGVnb3J5KGUudGFyZ2V0LnZhbHVlKX0+XHJcbiAgICAgICAgICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoKGMpID0+IChcclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2N9IHZhbHVlPXtjfT5cclxuICAgICAgICAgICAgICAgICAgICB7Y31cclxuICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2FzaWRlPlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDxDb2wgc3Bhbj17MTh9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbHBoYWJldGljLXNlYXJjaFwiPlxyXG4gICAgICAgICAgICB7YWxwaGFiZXQubWFwKChhKSA9PiAoXHJcbiAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3VycmVudExldHRlciA9PT0gYSA/IFwiY3VycmVudFwiIDogXCJcIn1cclxuICAgICAgICAgICAgICAgIGtleT17YX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEN1cnJlbnRMZXR0ZXIoYSl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2F9XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPExvYWRpbmdTY3JlZW4gbG9hZGluZz17bG9hZGluZ30+XHJcbiAgICAgICAgICAgIDxTdG9yaWVzR3JpZFxyXG4gICAgICAgICAgICAgIHN0b3JpZXM9e2N1cnJlbnRTdG9yaWVzfVxyXG4gICAgICAgICAgICAgIGd1dHRlcj1cIjE2cHhcIlxyXG4gICAgICAgICAgICAgIGNvbHVtbnNDb3VudEJyZWFrUG9pbnRzPXt7IDE2MDA6IDMsIDEyMDA6IDMsIDkwMDogMywgNzUwOiAyIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0xvYWRpbmdTY3JlZW4+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgIDwvUm93PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcclxuICBzdG9yaWVzOiBzdGF0ZS5zdG9yaWVzLnN0b3JpZXNGcm9tU2VhcmNoLFxyXG4gIGxvYWRpbmc6IHN0YXRlLnN0b3JpZXMubG9hZGluZyxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgeyBnZXRTdG9yaWVzQnlMZXR0ZXIgfSkoRXhwbG9yZSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=