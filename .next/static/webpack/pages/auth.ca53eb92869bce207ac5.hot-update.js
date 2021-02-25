webpackHotUpdate_N_E("pages/auth",{

/***/ "./hooks/userHooks.js":
/*!****************************!*\
  !*** ./hooks/userHooks.js ***!
  \****************************/
/*! exports provided: userContext, useSession, useAuth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userContext", function() { return userContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSession", function() { return useSession; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAuth", function() { return useAuth; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_fbConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/fbConfig */ "./redux/fbConfig.js");


var _s = $RefreshSig$(),
    _s2 = $RefreshSig$();



var userContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext({
  user: null
});
var useSession = function useSession() {
  _s();

  var user = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(userContext);
  return user;
};

_s(useSession, "T/slviYl6xUb2nQaiedYLY1KgOo=");

var useAuth = function useAuth() {
  _s2();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(function () {
    var user = _redux_fbConfig__WEBPACK_IMPORTED_MODULE_2__["auth"].currentUser;
    return {
      initializing: !user,
      user: user
    };
  }),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      state = _React$useState2[0],
      setState = _React$useState2[1];

  function onChange(user) {
    setState({
      initializing: false,
      user: user
    });
  }

  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    // listen for auth state changes
    var unsubscribe = _redux_fbConfig__WEBPACK_IMPORTED_MODULE_2__["auth"].onAuthStateChanged(onChange); // unsubscribe to the listener when unmounting

    return function () {
      return unsubscribe();
    };
  }, []);
  return state;
};

_s2(useAuth, "Q7gfpfGBlGKqaIq/LngHL8pJnOU=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlckhvb2tzLmpzIl0sIm5hbWVzIjpbInVzZXJDb250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlciIsInVzZVNlc3Npb24iLCJ1c2VDb250ZXh0IiwidXNlQXV0aCIsInVzZVN0YXRlIiwiYXV0aCIsImN1cnJlbnRVc2VyIiwiaW5pdGlhbGl6aW5nIiwic3RhdGUiLCJzZXRTdGF0ZSIsIm9uQ2hhbmdlIiwidXNlRWZmZWN0IiwidW5zdWJzY3JpYmUiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVPLElBQU1BLFdBQVcsZ0JBQUdDLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0I7QUFDN0NDLE1BQUksRUFBRTtBQUR1QyxDQUFwQixDQUFwQjtBQUlBLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFBQTs7QUFDOUIsTUFBTUQsSUFBSSxHQUFHRSx3REFBVSxDQUFDTCxXQUFELENBQXZCO0FBQ0EsU0FBT0csSUFBUDtBQUNELENBSE07O0dBQU1DLFU7O0FBS04sSUFBTUUsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBOztBQUFBLHdCQUNETCw0Q0FBSyxDQUFDTSxRQUFOLENBQWUsWUFBTTtBQUM3QyxRQUFNSixJQUFJLEdBQUdLLG9EQUFJLENBQUNDLFdBQWxCO0FBQ0EsV0FBTztBQUFFQyxrQkFBWSxFQUFFLENBQUNQLElBQWpCO0FBQXVCQSxVQUFJLEVBQUpBO0FBQXZCLEtBQVA7QUFDRCxHQUh5QixDQURDO0FBQUE7QUFBQSxNQUNwQlEsS0FEb0I7QUFBQSxNQUNiQyxRQURhOztBQUszQixXQUFTQyxRQUFULENBQWtCVixJQUFsQixFQUF3QjtBQUN0QlMsWUFBUSxDQUFDO0FBQUVGLGtCQUFZLEVBQUUsS0FBaEI7QUFBdUJQLFVBQUksRUFBSkE7QUFBdkIsS0FBRCxDQUFSO0FBQ0Q7O0FBRURGLDhDQUFLLENBQUNhLFNBQU4sQ0FBZ0IsWUFBTTtBQUNwQjtBQUNBLFFBQU1DLFdBQVcsR0FBR1Asb0RBQUksQ0FBQ1Esa0JBQUwsQ0FBd0JILFFBQXhCLENBQXBCLENBRm9CLENBR3BCOztBQUNBLFdBQU87QUFBQSxhQUFNRSxXQUFXLEVBQWpCO0FBQUEsS0FBUDtBQUNELEdBTEQsRUFLRyxFQUxIO0FBT0EsU0FBT0osS0FBUDtBQUNELENBakJNOztJQUFNTCxPIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2F1dGguY2E1M2ViOTI4NjliY2UyMDdhYzUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiLi4vcmVkdXgvZmJDb25maWdcIjtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VyQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoe1xyXG4gIHVzZXI6IG51bGwsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVNlc3Npb24gPSAoKSA9PiB7XHJcbiAgY29uc3QgdXNlciA9IHVzZUNvbnRleHQodXNlckNvbnRleHQpO1xyXG4gIHJldHVybiB1c2VyO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUF1dGggPSAoKSA9PiB7XHJcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZSgoKSA9PiB7XHJcbiAgICBjb25zdCB1c2VyID0gYXV0aC5jdXJyZW50VXNlcjtcclxuICAgIHJldHVybiB7IGluaXRpYWxpemluZzogIXVzZXIsIHVzZXIgfTtcclxuICB9KTtcclxuICBmdW5jdGlvbiBvbkNoYW5nZSh1c2VyKSB7XHJcbiAgICBzZXRTdGF0ZSh7IGluaXRpYWxpemluZzogZmFsc2UsIHVzZXIgfSk7XHJcbiAgfVxyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gbGlzdGVuIGZvciBhdXRoIHN0YXRlIGNoYW5nZXNcclxuICAgIGNvbnN0IHVuc3Vic2NyaWJlID0gYXV0aC5vbkF1dGhTdGF0ZUNoYW5nZWQob25DaGFuZ2UpO1xyXG4gICAgLy8gdW5zdWJzY3JpYmUgdG8gdGhlIGxpc3RlbmVyIHdoZW4gdW5tb3VudGluZ1xyXG4gICAgcmV0dXJuICgpID0+IHVuc3Vic2NyaWJlKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gc3RhdGU7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=