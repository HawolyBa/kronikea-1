webpackHotUpdate_N_E("pages/_app",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vTGF5b3V0LmpzIl0sIm5hbWVzIjpbIkxheW91dCIsImNoaWxkcmVuIiwibWVudVJlZiIsIlJlYWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJpc09wZW4iLCJzZXRPcGVuIiwib3Blbk1lbnUiLCJlIiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xpY2tPdXRzaWRlTWVudSIsImN1cnJlbnQiLCJjb250YWlucyIsInRhcmdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQWtCO0FBQUE7O0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlO0FBQy9CO0FBQ0EsTUFBTUMsT0FBTyxHQUFHQyw0Q0FBSyxDQUFDQyxNQUFOLEVBQWhCOztBQUYrQix3QkFJTEQsNENBQUssQ0FBQ0UsUUFBTixDQUFlLEtBQWYsQ0FKSztBQUFBO0FBQUEsTUFJeEJDLE1BSndCO0FBQUEsTUFJaEJDLE9BSmdCOztBQU0vQixNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxDQUFELEVBQU87QUFDdEJGLFdBQU8sQ0FBQyxDQUFDRCxNQUFGLENBQVA7QUFDRCxHQUZEOztBQUlBSCw4Q0FBSyxDQUFDTyxTQUFOLENBQWdCLFlBQU07QUFDcEJDLFlBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsV0FBMUIsRUFBdUNDLGdCQUF2QztBQUNELEdBRkQsRUFFRyxDQUFDWCxPQUFPLENBQUNZLE9BQVQsQ0FGSDs7QUFJQSxNQUFNRCxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNKLENBQUQsRUFBTztBQUM5QixRQUFJUCxPQUFPLENBQUNZLE9BQVIsSUFBbUIsQ0FBQ1osT0FBTyxDQUFDWSxPQUFSLENBQWdCQyxRQUFoQixDQUF5Qk4sQ0FBQyxDQUFDTyxNQUEzQixDQUF4QixFQUE0RDtBQUMxRFQsYUFBTyxDQUFDLEtBQUQsQ0FBUDtBQUNEO0FBQ0YsR0FKRDs7QUFNQSxTQUNFLE1BQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLCtDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQU0sYUFBUyx5QkFBa0JELE1BQU0sR0FBRyxtQkFBSCxHQUF5QixFQUFqRCxDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLCtDQUFEO0FBQVEsV0FBTyxFQUFFSixPQUFqQjtBQUEwQixVQUFNLEVBQUVJLE1BQWxDO0FBQTBDLFlBQVEsRUFBRUUsUUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBSyxhQUFTLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTBCUCxRQUExQixDQUZGLENBRkYsRUFNRSxNQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFORixDQURGO0FBVUQsQ0E5QkQ7O0dBQU1ELE07O0tBQUFBLE07QUFnQ1NBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYmFkNzJkNzBlZmI2MmNhMzQzZTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkZXIgZnJvbSBcIi4vSGVhZGVyXCI7XHJcbmltcG9ydCBTdGlja3lNZW51IGZyb20gXCIuL1N0aWNreU1lbnVcIjtcclxuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi9OYXZiYXJcIjtcclxuaW1wb3J0IFwiYW50ZC9kaXN0L2FudGQuY3NzXCI7XHJcbmltcG9ydCBcIi4uLy4uL3N0eWxlL21haW4uc2Nzc1wiO1xyXG5cclxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIC8vIFJlZmVyZW5jZSB0byBzaWRlIG1lbnVcclxuICBjb25zdCBtZW51UmVmID0gUmVhY3QudXNlUmVmKCk7XHJcblxyXG4gIGNvbnN0IFtpc09wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBvcGVuTWVudSA9IChlKSA9PiB7XHJcbiAgICBzZXRPcGVuKCFpc09wZW4pO1xyXG4gIH07XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGNsaWNrT3V0c2lkZU1lbnUpO1xyXG4gIH0sIFttZW51UmVmLmN1cnJlbnRdKTtcclxuXHJcbiAgY29uc3QgY2xpY2tPdXRzaWRlTWVudSA9IChlKSA9PiB7XHJcbiAgICBpZiAobWVudVJlZi5jdXJyZW50ICYmICFtZW51UmVmLmN1cnJlbnQuY29udGFpbnMoZS50YXJnZXQpKSB7XHJcbiAgICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtgbWFpbi1jb250ZW50ICR7aXNPcGVuID8gXCJjb250ZW50LW1lbnUtb3BlblwiIDogXCJcIn1gfT5cclxuICAgICAgICA8SGVhZGVyIG1lbnVSZWY9e21lbnVSZWZ9IGlzT3Blbj17aXNPcGVufSBvcGVuTWVudT17b3Blbk1lbnV9IC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+e2NoaWxkcmVufTwvZGl2PlxyXG4gICAgICA8L21haW4+XHJcbiAgICAgIDxTdGlja3lNZW51IC8+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=