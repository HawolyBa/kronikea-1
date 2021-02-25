webpackHotUpdate_N_E("pages/profile",{

/***/ "./redux/actions/userActions.js":
/*!**************************************!*\
  !*** ./redux/actions/userActions.js ***!
  \**************************************/
/*! exports provided: log_in, getProfile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log_in", function() { return log_in; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProfile", function() { return getProfile; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_redux_firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux-firebase */ "./node_modules/react-redux-firebase/es/index.js");
/* harmony import */ var react_redux_firebase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux_firebase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fbConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fbConfig */ "./redux/fbConfig.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/constants */ "./utils/constants.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var log_in = function log_in(credentials) {
  var _s = $RefreshSig$();

  return _s(function (dispatch) {
    _s();

    var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
    _fbConfig__WEBPACK_IMPORTED_MODULE_3__["auth"].signInWithEmailAndPassword(credentials).then(router.push("/profile"));
  }, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
    return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
  });
};
var getProfile = function getProfile() {
  return function (dispatch) {
    _fbConfig__WEBPACK_IMPORTED_MODULE_3__["db"].collection("users").doc("0K9FO3KtCZOm2VCItZrssTJ8xbE3").onSnapshot(function (doc) {
      console.log("coucou");
      return dispatch({
        type: _utils_constants__WEBPACK_IMPORTED_MODULE_4__["GET_PROFILE"],
        payload: _objectSpread({
          id: doc.id
        }, doc.data())
      });
    });
  };
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvYWN0aW9ucy91c2VyQWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJsb2dfaW4iLCJjcmVkZW50aWFscyIsImRpc3BhdGNoIiwicm91dGVyIiwidXNlUm91dGVyIiwiYXV0aCIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwidGhlbiIsInB1c2giLCJnZXRQcm9maWxlIiwiZGIiLCJjb2xsZWN0aW9uIiwiZG9jIiwib25TbmFwc2hvdCIsImNvbnNvbGUiLCJsb2ciLCJ0eXBlIiwiR0VUX1BST0ZJTEUiLCJwYXlsb2FkIiwiaWQiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBRU8sSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsV0FBRDtBQUFBOztBQUFBLFlBQWlCLFVBQUNDLFFBQUQsRUFBYztBQUFBOztBQUNuRCxRQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0FDLGtEQUFJLENBQUNDLDBCQUFMLENBQWdDTCxXQUFoQyxFQUE2Q00sSUFBN0MsQ0FBa0RKLE1BQU0sQ0FBQ0ssSUFBUCxDQUFZLFVBQVosQ0FBbEQ7QUFDRCxHQUhxQjtBQUFBLFlBQ0xKLHFEQURLO0FBQUE7QUFBQSxDQUFmO0FBS0EsSUFBTUssVUFBVSxHQUFHLFNBQWJBLFVBQWE7QUFBQSxTQUFNLFVBQUNQLFFBQUQsRUFBYztBQUM1Q1EsZ0RBQUUsQ0FBQ0MsVUFBSCxDQUFjLE9BQWQsRUFDR0MsR0FESCxDQUNPLDhCQURQLEVBRUdDLFVBRkgsQ0FFYyxVQUFDRCxHQUFELEVBQVM7QUFDbkJFLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVo7QUFDQSxhQUFPYixRQUFRLENBQUM7QUFDZGMsWUFBSSxFQUFFQyw0REFEUTtBQUVkQyxlQUFPO0FBQUlDLFlBQUUsRUFBRVAsR0FBRyxDQUFDTztBQUFaLFdBQW1CUCxHQUFHLENBQUNRLElBQUosRUFBbkI7QUFGTyxPQUFELENBQWY7QUFJRCxLQVJIO0FBU0QsR0FWeUI7QUFBQSxDQUFuQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlLjA1MzI4MWU4MmIzNTBiOGQzNjI0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VGaXJlYmFzZSB9IGZyb20gXCJyZWFjdC1yZWR1eC1maXJlYmFzZVwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IGRiLCBhdXRoIH0gZnJvbSBcIi4uL2ZiQ29uZmlnXCI7XHJcblxyXG5pbXBvcnQgeyBHRVRfUFJPRklMRSB9IGZyb20gXCIuLi8uLi91dGlscy9jb25zdGFudHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dfaW4gPSAoY3JlZGVudGlhbHMpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGF1dGguc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoY3JlZGVudGlhbHMpLnRoZW4ocm91dGVyLnB1c2goXCIvcHJvZmlsZVwiKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UHJvZmlsZSA9ICgpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKVxyXG4gICAgLmRvYyhcIjBLOUZPM0t0Q1pPbTJWQ0l0WnJzc1RKOHhiRTNcIilcclxuICAgIC5vblNuYXBzaG90KChkb2MpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJjb3Vjb3VcIik7XHJcbiAgICAgIHJldHVybiBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogR0VUX1BST0ZJTEUsXHJcbiAgICAgICAgcGF5bG9hZDogeyBpZDogZG9jLmlkLCAuLi5kb2MuZGF0YSgpIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=