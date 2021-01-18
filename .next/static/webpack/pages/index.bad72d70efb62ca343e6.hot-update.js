webpackHotUpdate_N_E("pages/index",{

/***/ "./components/common/Layout.js":
/*!*************************************!*\
  !*** ./components/common/Layout.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./components/common/Header.js");
/* harmony import */ var _StickyMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StickyMenu */ "./components/common/StickyMenu.js");
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Navbar */ "./components/common/Navbar.js");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _style_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../style/main.scss */ "./style/main.scss");
/* harmony import */ var _style_main_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_main_scss__WEBPACK_IMPORTED_MODULE_6__);


var _this = undefined,
    _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\components\\common\\Layout.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var Layout = function Layout(_ref) {
  _s();

  var children = _ref.children;
  // Reference to side menu
  var menuRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      isOpen = _React$useState2[0],
      setOpen = _React$useState2[1];

  var openMenu = function openMenu(e) {
    setOpen(!isOpen);
  };

  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    document.addEventListener("mousedown", clickOutsideMenu);
  }, [menuRef.current]);

  var clickOutsideMenu = function clickOutsideMenu(e) {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setOpen(false);
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, __jsx(_Navbar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }), __jsx("main", {
    className: "main-content ".concat(isOpen ? "content-menu-open" : ""),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    menuRef: menuRef,
    isOpen: isOpen,
    openMenu: openMenu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, children)), __jsx(_StickyMenu__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }));
};

_s(Layout, "/TFHO/q6ZnzWoQPU4uM39YEZnnc=");

_c = Layout;
/* harmony default export */ __webpack_exports__["default"] = (Layout);

var _c;

$RefreshReg$(_c, "Layout");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vTGF5b3V0LmpzIl0sIm5hbWVzIjpbIkxheW91dCIsImNoaWxkcmVuIiwibWVudVJlZiIsIlJlYWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJpc09wZW4iLCJzZXRPcGVuIiwib3Blbk1lbnUiLCJlIiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xpY2tPdXRzaWRlTWVudSIsImN1cnJlbnQiLCJjb250YWlucyIsInRhcmdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQWtCO0FBQUE7O0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlO0FBQy9CO0FBQ0EsTUFBTUMsT0FBTyxHQUFHQyw0Q0FBSyxDQUFDQyxNQUFOLEVBQWhCOztBQUYrQix3QkFJTEQsNENBQUssQ0FBQ0UsUUFBTixDQUFlLEtBQWYsQ0FKSztBQUFBO0FBQUEsTUFJeEJDLE1BSndCO0FBQUEsTUFJaEJDLE9BSmdCOztBQU0vQixNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxDQUFELEVBQU87QUFDdEJGLFdBQU8sQ0FBQyxDQUFDRCxNQUFGLENBQVA7QUFDRCxHQUZEOztBQUlBSCw4Q0FBSyxDQUFDTyxTQUFOLENBQWdCLFlBQU07QUFDcEJDLFlBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsV0FBMUIsRUFBdUNDLGdCQUF2QztBQUNELEdBRkQsRUFFRyxDQUFDWCxPQUFPLENBQUNZLE9BQVQsQ0FGSDs7QUFJQSxNQUFNRCxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNKLENBQUQsRUFBTztBQUM5QixRQUFJUCxPQUFPLENBQUNZLE9BQVIsSUFBbUIsQ0FBQ1osT0FBTyxDQUFDWSxPQUFSLENBQWdCQyxRQUFoQixDQUF5Qk4sQ0FBQyxDQUFDTyxNQUEzQixDQUF4QixFQUE0RDtBQUMxRFQsYUFBTyxDQUFDLEtBQUQsQ0FBUDtBQUNEO0FBQ0YsR0FKRDs7QUFNQSxTQUNFLE1BQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLCtDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQU0sYUFBUyx5QkFBa0JELE1BQU0sR0FBRyxtQkFBSCxHQUF5QixFQUFqRCxDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLCtDQUFEO0FBQVEsV0FBTyxFQUFFSixPQUFqQjtBQUEwQixVQUFNLEVBQUVJLE1BQWxDO0FBQTBDLFlBQVEsRUFBRUUsUUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBSyxhQUFTLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTBCUCxRQUExQixDQUZGLENBRkYsRUFNRSxNQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFORixDQURGO0FBVUQsQ0E5QkQ7O0dBQU1ELE07O0tBQUFBLE07QUFnQ1NBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmJhZDcyZDcwZWZiNjJjYTM0M2U2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xyXG5pbXBvcnQgU3RpY2t5TWVudSBmcm9tIFwiLi9TdGlja3lNZW51XCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4vTmF2YmFyXCI7XHJcbmltcG9ydCBcImFudGQvZGlzdC9hbnRkLmNzc1wiO1xyXG5pbXBvcnQgXCIuLi8uLi9zdHlsZS9tYWluLnNjc3NcIjtcclxuXHJcbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICAvLyBSZWZlcmVuY2UgdG8gc2lkZSBtZW51XHJcbiAgY29uc3QgbWVudVJlZiA9IFJlYWN0LnVzZVJlZigpO1xyXG5cclxuICBjb25zdCBbaXNPcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3Qgb3Blbk1lbnUgPSAoZSkgPT4ge1xyXG4gICAgc2V0T3BlbighaXNPcGVuKTtcclxuICB9O1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBjbGlja091dHNpZGVNZW51KTtcclxuICB9LCBbbWVudVJlZi5jdXJyZW50XSk7XHJcblxyXG4gIGNvbnN0IGNsaWNrT3V0c2lkZU1lbnUgPSAoZSkgPT4ge1xyXG4gICAgaWYgKG1lbnVSZWYuY3VycmVudCAmJiAhbWVudVJlZi5jdXJyZW50LmNvbnRhaW5zKGUudGFyZ2V0KSkge1xyXG4gICAgICBzZXRPcGVuKGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICA8TmF2YmFyIC8+XHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT17YG1haW4tY29udGVudCAke2lzT3BlbiA/IFwiY29udGVudC1tZW51LW9wZW5cIiA6IFwiXCJ9YH0+XHJcbiAgICAgICAgPEhlYWRlciBtZW51UmVmPXttZW51UmVmfSBpc09wZW49e2lzT3Blbn0gb3Blbk1lbnU9e29wZW5NZW51fSAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPntjaGlsZHJlbn08L2Rpdj5cclxuICAgICAgPC9tYWluPlxyXG4gICAgICA8U3RpY2t5TWVudSAvPlxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9