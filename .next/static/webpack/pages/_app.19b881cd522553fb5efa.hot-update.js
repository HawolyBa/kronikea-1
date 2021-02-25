webpackHotUpdate_N_E("pages/_app",{

/***/ "./hooks/userHooks.js":
/*!****************************!*\
  !*** ./hooks/userHooks.js ***!
  \****************************/
/*! exports provided: useSession, useAuth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSession", function() { return useSession; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAuth", function() { return useAuth; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _s = $RefreshSig$(),
    _s2 = $RefreshSig$();


var userContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext({
  user: null
});
var useSession = function useSession() {
  _s();

  var _useContext = useContext(userContext),
      user = _useContext.user;

  return user;
};

_s(useSession, "y3FQDew7UyrSqYkvQcTdCsLbAB8=");

var useAuth = function useAuth() {
  _s2();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(function () {
    var user = firebase.auth().currentUser;
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
    var unsubscribe = firebase.auth().onAuthStateChanged(onChange); // unsubscribe to the listener when unmounting

    return function () {
      return unsubscribe();
    };
  }, []);
  return state;
};

_s2(useAuth, "Cyn0RoVLuEWi/ZFTh6yTKktnLI0=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlckhvb2tzLmpzIl0sIm5hbWVzIjpbInVzZXJDb250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlciIsInVzZVNlc3Npb24iLCJ1c2VDb250ZXh0IiwidXNlQXV0aCIsInVzZVN0YXRlIiwiZmlyZWJhc2UiLCJhdXRoIiwiY3VycmVudFVzZXIiLCJpbml0aWFsaXppbmciLCJzdGF0ZSIsInNldFN0YXRlIiwib25DaGFuZ2UiLCJ1c2VFZmZlY3QiLCJ1bnN1YnNjcmliZSIsIm9uQXV0aFN0YXRlQ2hhbmdlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxJQUFNQSxXQUFXLGdCQUFHQyw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CO0FBQ3RDQyxNQUFJLEVBQUU7QUFEZ0MsQ0FBcEIsQ0FBcEI7QUFJTyxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQUE7O0FBQUEsb0JBQ2JDLFVBQVUsQ0FBQ0wsV0FBRCxDQURHO0FBQUEsTUFDdEJHLElBRHNCLGVBQ3RCQSxJQURzQjs7QUFFOUIsU0FBT0EsSUFBUDtBQUNELENBSE07O0dBQU1DLFU7O0FBS04sSUFBTUUsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBOztBQUFBLHdCQUNETCw0Q0FBSyxDQUFDTSxRQUFOLENBQWUsWUFBTTtBQUM3QyxRQUFNSixJQUFJLEdBQUdLLFFBQVEsQ0FBQ0MsSUFBVCxHQUFnQkMsV0FBN0I7QUFDQSxXQUFPO0FBQUVDLGtCQUFZLEVBQUUsQ0FBQ1IsSUFBakI7QUFBdUJBLFVBQUksRUFBSkE7QUFBdkIsS0FBUDtBQUNELEdBSHlCLENBREM7QUFBQTtBQUFBLE1BQ3BCUyxLQURvQjtBQUFBLE1BQ2JDLFFBRGE7O0FBSzNCLFdBQVNDLFFBQVQsQ0FBa0JYLElBQWxCLEVBQXdCO0FBQ3RCVSxZQUFRLENBQUM7QUFBRUYsa0JBQVksRUFBRSxLQUFoQjtBQUF1QlIsVUFBSSxFQUFKQTtBQUF2QixLQUFELENBQVI7QUFDRDs7QUFFREYsOENBQUssQ0FBQ2MsU0FBTixDQUFnQixZQUFNO0FBQ3BCO0FBQ0EsUUFBTUMsV0FBVyxHQUFHUixRQUFRLENBQUNDLElBQVQsR0FBZ0JRLGtCQUFoQixDQUFtQ0gsUUFBbkMsQ0FBcEIsQ0FGb0IsQ0FHcEI7O0FBQ0EsV0FBTztBQUFBLGFBQU1FLFdBQVcsRUFBakI7QUFBQSxLQUFQO0FBQ0QsR0FMRCxFQUtHLEVBTEg7QUFPQSxTQUFPSixLQUFQO0FBQ0QsQ0FqQk07O0lBQU1OLE8iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4xOWI4ODFjZDUyMjU1M2ZiNWVmYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgdXNlckNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHtcclxuICB1c2VyOiBudWxsLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VTZXNzaW9uID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgdXNlciB9ID0gdXNlQ29udGV4dCh1c2VyQ29udGV4dCk7XHJcbiAgcmV0dXJuIHVzZXI7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXNlQXV0aCA9ICgpID0+IHtcclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKCgpID0+IHtcclxuICAgIGNvbnN0IHVzZXIgPSBmaXJlYmFzZS5hdXRoKCkuY3VycmVudFVzZXI7XHJcbiAgICByZXR1cm4geyBpbml0aWFsaXppbmc6ICF1c2VyLCB1c2VyIH07XHJcbiAgfSk7XHJcbiAgZnVuY3Rpb24gb25DaGFuZ2UodXNlcikge1xyXG4gICAgc2V0U3RhdGUoeyBpbml0aWFsaXppbmc6IGZhbHNlLCB1c2VyIH0pO1xyXG4gIH1cclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIGxpc3RlbiBmb3IgYXV0aCBzdGF0ZSBjaGFuZ2VzXHJcbiAgICBjb25zdCB1bnN1YnNjcmliZSA9IGZpcmViYXNlLmF1dGgoKS5vbkF1dGhTdGF0ZUNoYW5nZWQob25DaGFuZ2UpO1xyXG4gICAgLy8gdW5zdWJzY3JpYmUgdG8gdGhlIGxpc3RlbmVyIHdoZW4gdW5tb3VudGluZ1xyXG4gICAgcmV0dXJuICgpID0+IHVuc3Vic2NyaWJlKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gc3RhdGU7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=