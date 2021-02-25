webpackHotUpdate_N_E("pages/auth",{

/***/ "./pages/auth.js":
/*!***********************!*\
  !*** ./pages/auth.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_card_flip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-card-flip */ "./node_modules/react-card-flip/lib/ReactCardFlip.js");
/* harmony import */ var react_card_flip__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_card_flip__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_auth_Login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/auth/Login */ "./components/auth/Login.js");
/* harmony import */ var _components_auth_Register__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/auth/Register */ "./components/auth/Register.js");
/* harmony import */ var _hooks_userHooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/userHooks */ "./hooks/userHooks.js");
/* harmony import */ var _redux_actions_userActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../redux/actions/userActions */ "./redux/actions/userActions.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\pages\\auth.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var auth = function auth(_ref) {
  _s();

  var log_in = _ref.log_in;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isFlipped = _useState[0],
      setIsFlipped = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      username = _useState2[0],
      setUsername = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      email = _useState3[0],
      setEmail = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      password = _useState4[0],
      setPassword = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      confirmPassword = _useState5[0],
      setConfirmPassword = _useState5[1];

  var _useSession = Object(_hooks_userHooks__WEBPACK_IMPORTED_MODULE_5__["useSession"])(),
      user = _useSession.user;

  console.log(user);

  var handleClick = function handleClick(e) {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };

  var signin = function signin() {
    return log_in(email, password);
  };

  return __jsx("div", {
    className: "authentication",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, __jsx(react_card_flip__WEBPACK_IMPORTED_MODULE_1___default.a, {
    isFlipped: isFlipped,
    flipDirection: "horizontal",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, __jsx(_components_auth_Login__WEBPACK_IMPORTED_MODULE_3__["default"], {
    signin: signin,
    setPassword: setPassword,
    setEmail: setEmail,
    email: email,
    password: password,
    handleClick: handleClick,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }), __jsx(_components_auth_Register__WEBPACK_IMPORTED_MODULE_4__["default"], {
    handleClick: handleClick,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  })));
};

_s(auth, "HGlU8LwUO+pMNCWd9I+EaNNLph4=", false, function () {
  return [_hooks_userHooks__WEBPACK_IMPORTED_MODULE_5__["useSession"]];
});

var mapStateToProps = function mapStateToProps(state) {
  return {};
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, {
  log_in: _redux_actions_userActions__WEBPACK_IMPORTED_MODULE_6__["log_in"]
})(auth));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXV0aC5qcyJdLCJuYW1lcyI6WyJhdXRoIiwibG9nX2luIiwidXNlU3RhdGUiLCJpc0ZsaXBwZWQiLCJzZXRJc0ZsaXBwZWQiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJjb25maXJtUGFzc3dvcmQiLCJzZXRDb25maXJtUGFzc3dvcmQiLCJ1c2VTZXNzaW9uIiwidXNlciIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNpZ25pbiIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQWdCO0FBQUE7O0FBQUEsTUFBYkMsTUFBYSxRQUFiQSxNQUFhOztBQUFBLGtCQUNPQyxzREFBUSxDQUFDLEtBQUQsQ0FEZjtBQUFBLE1BQ3BCQyxTQURvQjtBQUFBLE1BQ1RDLFlBRFM7O0FBQUEsbUJBRUtGLHNEQUFRLENBQUMsRUFBRCxDQUZiO0FBQUEsTUFFcEJHLFFBRm9CO0FBQUEsTUFFVkMsV0FGVTs7QUFBQSxtQkFHREosc0RBQVEsQ0FBQyxFQUFELENBSFA7QUFBQSxNQUdwQkssS0FIb0I7QUFBQSxNQUdiQyxRQUhhOztBQUFBLG1CQUlLTixzREFBUSxDQUFDLEVBQUQsQ0FKYjtBQUFBLE1BSXBCTyxRQUpvQjtBQUFBLE1BSVZDLFdBSlU7O0FBQUEsbUJBS21CUixzREFBUSxDQUFDLEVBQUQsQ0FMM0I7QUFBQSxNQUtwQlMsZUFMb0I7QUFBQSxNQUtIQyxrQkFMRzs7QUFBQSxvQkFPVkMsbUVBQVUsRUFQQTtBQUFBLE1BT25CQyxJQVBtQixlQU9uQkEsSUFQbUI7O0FBUTNCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjs7QUFFQSxNQUFNRyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxDQUFELEVBQU87QUFDekJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBZixnQkFBWSxDQUFDLENBQUNELFNBQUYsQ0FBWjtBQUNELEdBSEQ7O0FBS0EsTUFBTWlCLE1BQU0sR0FBRyxTQUFUQSxNQUFTO0FBQUEsV0FBTW5CLE1BQU0sQ0FBQ00sS0FBRCxFQUFRRSxRQUFSLENBQVo7QUFBQSxHQUFmOztBQUVBLFNBQ0U7QUFBSyxhQUFTLEVBQUMsZ0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsc0RBQUQ7QUFBZSxhQUFTLEVBQUVOLFNBQTFCO0FBQXFDLGlCQUFhLEVBQUMsWUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsOERBQUQ7QUFDRSxVQUFNLEVBQUVpQixNQURWO0FBRUUsZUFBVyxFQUFFVixXQUZmO0FBR0UsWUFBUSxFQUFFRixRQUhaO0FBSUUsU0FBSyxFQUFFRCxLQUpUO0FBS0UsWUFBUSxFQUFFRSxRQUxaO0FBTUUsZUFBVyxFQUFFUSxXQU5mO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQVNFLE1BQUMsaUVBQUQ7QUFBVSxlQUFXLEVBQUVBLFdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFURixDQURGLENBREY7QUFlRCxDQWhDRDs7R0FBTWpCLEk7VUFPYWEsMkQ7OztBQTJCbkIsSUFBTVEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFEO0FBQUEsU0FBWSxFQUFaO0FBQUEsQ0FBeEI7O0FBRWVDLDBIQUFPLENBQUNGLGVBQUQsRUFBa0I7QUFBRXBCLFFBQU0sRUFBTkEsaUVBQU1BO0FBQVIsQ0FBbEIsQ0FBUCxDQUFxQ0QsSUFBckMsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hdXRoLmE3OGU3NDJmZWExNGQ1ZWM3YTlkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0Q2FyZEZsaXAgZnJvbSBcInJlYWN0LWNhcmQtZmxpcFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcblxyXG5pbXBvcnQgTG9naW4gZnJvbSBcIi4uL2NvbXBvbmVudHMvYXV0aC9Mb2dpblwiO1xyXG5pbXBvcnQgUmVnaXN0ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvYXV0aC9SZWdpc3RlclwiO1xyXG5pbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSBcIi4uL2hvb2tzL3VzZXJIb29rc1wiO1xyXG5pbXBvcnQgeyBsb2dfaW4gfSBmcm9tIFwiLi4vcmVkdXgvYWN0aW9ucy91c2VyQWN0aW9uc1wiO1xyXG5cclxuY29uc3QgYXV0aCA9ICh7IGxvZ19pbiB9KSA9PiB7XHJcbiAgY29uc3QgW2lzRmxpcHBlZCwgc2V0SXNGbGlwcGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY29uZmlybVBhc3N3b3JkLCBzZXRDb25maXJtUGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IHsgdXNlciB9ID0gdXNlU2Vzc2lvbigpO1xyXG4gIGNvbnNvbGUubG9nKHVzZXIpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRJc0ZsaXBwZWQoIWlzRmxpcHBlZCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2lnbmluID0gKCkgPT4gbG9nX2luKGVtYWlsLCBwYXNzd29yZCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImF1dGhlbnRpY2F0aW9uXCI+XHJcbiAgICAgIDxSZWFjdENhcmRGbGlwIGlzRmxpcHBlZD17aXNGbGlwcGVkfSBmbGlwRGlyZWN0aW9uPVwiaG9yaXpvbnRhbFwiPlxyXG4gICAgICAgIDxMb2dpblxyXG4gICAgICAgICAgc2lnbmluPXtzaWduaW59XHJcbiAgICAgICAgICBzZXRQYXNzd29yZD17c2V0UGFzc3dvcmR9XHJcbiAgICAgICAgICBzZXRFbWFpbD17c2V0RW1haWx9XHJcbiAgICAgICAgICBlbWFpbD17ZW1haWx9XHJcbiAgICAgICAgICBwYXNzd29yZD17cGFzc3dvcmR9XHJcbiAgICAgICAgICBoYW5kbGVDbGljaz17aGFuZGxlQ2xpY2t9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8UmVnaXN0ZXIgaGFuZGxlQ2xpY2s9e2hhbmRsZUNsaWNrfSAvPlxyXG4gICAgICA8L1JlYWN0Q2FyZEZsaXA+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe30pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHsgbG9nX2luIH0pKGF1dGgpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9