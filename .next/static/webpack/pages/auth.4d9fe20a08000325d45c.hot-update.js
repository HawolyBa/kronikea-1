webpackHotUpdate_N_E("pages/auth",{

/***/ "./hooks/userHooks.js":
/*!****************************!*\
  !*** ./hooks/userHooks.js ***!
  \****************************/
/*! exports provided: ProvideAuth, useAuth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProvideAuth", function() { return ProvideAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAuth", function() { return useAuth; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_fbConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../redux/fbConfig */ "./redux/fbConfig.js");
var _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\hooks\\userHooks.js",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$(),
    _s3 = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var authContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
function ProvideAuth(_ref) {
  _s();

  var children = _ref.children;
  var auth = useProvideAuth();
  return __jsx(authContext.Provider, {
    value: auth,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 10
    }
  }, children);
}

_s(ProvideAuth, "XNU4Jn8u4aVzJknlKOHFJq03xMo=", false, function () {
  return [useProvideAuth];
});

_c = ProvideAuth;
var useAuth = function useAuth() {
  _s2();

  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(authContext);
};

_s2(useAuth, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");

function useProvideAuth() {
  _s3();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      user = _useState[0],
      setUser = _useState[1]; // Wrap any Firebase methods we want to use making sure ...
  // ... to save the user to state.


  var signin = function signin(email, password) {
    return _redux_fbConfig__WEBPACK_IMPORTED_MODULE_1__["auth"].signInWithEmailAndPassword(email, password).then(function (response) {
      setUser(response.user);
      return response.user;
    });
  };

  var signup = function signup(email, password) {
    return _redux_fbConfig__WEBPACK_IMPORTED_MODULE_1__["auth"].createUserWithEmailAndPassword(email, password).then(function (response) {
      setUser(response.user);
      return response.user;
    });
  };

  var signout = function signout() {
    return _redux_fbConfig__WEBPACK_IMPORTED_MODULE_1__["auth"].signOut().then(function () {
      setUser(false);
    });
  };

  var sendPasswordResetEmail = function sendPasswordResetEmail(email) {
    return _redux_fbConfig__WEBPACK_IMPORTED_MODULE_1__["auth"].sendPasswordResetEmail(email).then(function () {
      return true;
    });
  };

  var confirmPasswordReset = function confirmPasswordReset(code, password) {
    return _redux_fbConfig__WEBPACK_IMPORTED_MODULE_1__["auth"].confirmPasswordReset(code, password).then(function () {
      return true;
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var unsubscribe = _redux_fbConfig__WEBPACK_IMPORTED_MODULE_1__["auth"].onAuthStateChanged(function (user) {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
    }); // Cleanup subscription on unmount

    return function () {
      return unsubscribe();
    };
  }, []); // Return the user object and auth methods

  return {
    user: user,
    signin: signin,
    signup: signup,
    signout: signout,
    sendPasswordResetEmail: sendPasswordResetEmail,
    confirmPasswordReset: confirmPasswordReset
  };
}

_s3(useProvideAuth, "5s2qRsV95gTJBmaaTh11GoxYeGE=");

var _c;

$RefreshReg$(_c, "ProvideAuth");

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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
false,

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
/* harmony import */ var _redux_actions_userActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/actions/userActions */ "./redux/actions/userActions.js");
/* harmony import */ var _hooks_userHooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/userHooks */ "./hooks/userHooks.js");
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

  var auth = Object(_hooks_userHooks__WEBPACK_IMPORTED_MODULE_6__["useAuth"])();
  console.log(auth);

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
      lineNumber: 27,
      columnNumber: 5
    }
  }, __jsx(react_card_flip__WEBPACK_IMPORTED_MODULE_1___default.a, {
    isFlipped: isFlipped,
    flipDirection: "horizontal",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
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
      lineNumber: 29,
      columnNumber: 9
    }
  }), __jsx(_components_auth_Register__WEBPACK_IMPORTED_MODULE_4__["default"], {
    handleClick: handleClick,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  })));
};

_s(auth, "yVO/gR381/qW12h2QOdRSfMPmrc=", false, function () {
  return [_hooks_userHooks__WEBPACK_IMPORTED_MODULE_6__["useAuth"]];
});

var mapStateToProps = function mapStateToProps(state) {
  return {};
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, {
  log_in: _redux_actions_userActions__WEBPACK_IMPORTED_MODULE_5__["log_in"]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlckhvb2tzLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9hdXRoLmpzIl0sIm5hbWVzIjpbImF1dGhDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIlByb3ZpZGVBdXRoIiwiY2hpbGRyZW4iLCJhdXRoIiwidXNlUHJvdmlkZUF1dGgiLCJ1c2VBdXRoIiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlciIsInNldFVzZXIiLCJzaWduaW4iLCJlbWFpbCIsInBhc3N3b3JkIiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJ0aGVuIiwicmVzcG9uc2UiLCJzaWdudXAiLCJjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJzaWdub3V0Iiwic2lnbk91dCIsInNlbmRQYXNzd29yZFJlc2V0RW1haWwiLCJjb25maXJtUGFzc3dvcmRSZXNldCIsImNvZGUiLCJ1c2VFZmZlY3QiLCJ1bnN1YnNjcmliZSIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsImxvZ19pbiIsImlzRmxpcHBlZCIsInNldElzRmxpcHBlZCIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJzZXRFbWFpbCIsInNldFBhc3N3b3JkIiwiY29uZmlybVBhc3N3b3JkIiwic2V0Q29uZmlybVBhc3N3b3JkIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLFdBQVcsZ0JBQUdDLDJEQUFhLEVBQWpDO0FBRU8sU0FBU0MsV0FBVCxPQUFtQztBQUFBOztBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTtBQUN4QyxNQUFNQyxJQUFJLEdBQUdDLGNBQWMsRUFBM0I7QUFDQSxTQUFPLE1BQUMsV0FBRCxDQUFhLFFBQWI7QUFBc0IsU0FBSyxFQUFF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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhEQUFEO0FBQ0UsVUFBTSxFQUFFakIsTUFEVjtBQUVFLGVBQVcsRUFBRXNCLFdBRmY7QUFHRSxZQUFRLEVBQUVELFFBSFo7QUFJRSxTQUFLLEVBQUVwQixLQUpUO0FBS0UsWUFBUSxFQUFFQyxRQUxaO0FBTUUsZUFBVyxFQUFFeUIsV0FOZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFTRSxNQUFDLGlFQUFEO0FBQVUsZUFBVyxFQUFFQSxXQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVEYsQ0FERixDQURGO0FBZUQsQ0EvQkQ7O0dBQU1sQyxJO1VBTVNFLHdEOzs7QUEyQmYsSUFBTW1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRDtBQUFBLFNBQVksRUFBWjtBQUFBLENBQXhCOztBQUVlQywwSEFBTyxDQUFDRixlQUFELEVBQWtCO0FBQUVkLFFBQU0sRUFBTkEsaUVBQU1BO0FBQVIsQ0FBbEIsQ0FBUCxDQUFxQ3ZCLElBQXJDLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYXV0aC40ZDlmZTIwYTA4MDAwMzI1ZDQ1Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQsIGNyZWF0ZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgYXV0aCB9IGZyb20gXCIuLi9yZWR1eC9mYkNvbmZpZ1wiO1xyXG5cclxuY29uc3QgYXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUHJvdmlkZUF1dGgoeyBjaGlsZHJlbiB9KSB7XHJcbiAgY29uc3QgYXV0aCA9IHVzZVByb3ZpZGVBdXRoKCk7XHJcbiAgcmV0dXJuIDxhdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17YXV0aH0+e2NoaWxkcmVufTwvYXV0aENvbnRleHQuUHJvdmlkZXI+O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXNlQXV0aCA9ICgpID0+IHtcclxuICByZXR1cm4gdXNlQ29udGV4dChhdXRoQ29udGV4dCk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiB1c2VQcm92aWRlQXV0aCgpIHtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgLy8gV3JhcCBhbnkgRmlyZWJhc2UgbWV0aG9kcyB3ZSB3YW50IHRvIHVzZSBtYWtpbmcgc3VyZSAuLi5cclxuICAvLyAuLi4gdG8gc2F2ZSB0aGUgdXNlciB0byBzdGF0ZS5cclxuICBjb25zdCBzaWduaW4gPSAoZW1haWwsIHBhc3N3b3JkKSA9PiB7XHJcbiAgICByZXR1cm4gYXV0aC5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHNldFVzZXIocmVzcG9uc2UudXNlcik7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS51c2VyO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2lnbnVwID0gKGVtYWlsLCBwYXNzd29yZCkgPT4ge1xyXG4gICAgcmV0dXJuIGF1dGhcclxuICAgICAgLmNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHNldFVzZXIocmVzcG9uc2UudXNlcik7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnVzZXI7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNpZ25vdXQgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gYXV0aC5zaWduT3V0KCkudGhlbigoKSA9PiB7XHJcbiAgICAgIHNldFVzZXIoZmFsc2UpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2VuZFBhc3N3b3JkUmVzZXRFbWFpbCA9IChlbWFpbCkgPT4ge1xyXG4gICAgcmV0dXJuIGF1dGguc2VuZFBhc3N3b3JkUmVzZXRFbWFpbChlbWFpbCkudGhlbigoKSA9PiB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY29uZmlybVBhc3N3b3JkUmVzZXQgPSAoY29kZSwgcGFzc3dvcmQpID0+IHtcclxuICAgIHJldHVybiBhdXRoLmNvbmZpcm1QYXNzd29yZFJlc2V0KGNvZGUsIHBhc3N3b3JkKS50aGVuKCgpID0+IHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdW5zdWJzY3JpYmUgPSBhdXRoLm9uQXV0aFN0YXRlQ2hhbmdlZCgodXNlcikgPT4ge1xyXG4gICAgICBpZiAodXNlcikge1xyXG4gICAgICAgIHNldFVzZXIodXNlcik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0VXNlcihmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIENsZWFudXAgc3Vic2NyaXB0aW9uIG9uIHVubW91bnRcclxuICAgIHJldHVybiAoKSA9PiB1bnN1YnNjcmliZSgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgLy8gUmV0dXJuIHRoZSB1c2VyIG9iamVjdCBhbmQgYXV0aCBtZXRob2RzXHJcbiAgcmV0dXJuIHtcclxuICAgIHVzZXIsXHJcbiAgICBzaWduaW4sXHJcbiAgICBzaWdudXAsXHJcbiAgICBzaWdub3V0LFxyXG4gICAgc2VuZFBhc3N3b3JkUmVzZXRFbWFpbCxcclxuICAgIGNvbmZpcm1QYXNzd29yZFJlc2V0LFxyXG4gIH07XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSZWFjdENhcmRGbGlwIGZyb20gXCJyZWFjdC1jYXJkLWZsaXBcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuaW1wb3J0IExvZ2luIGZyb20gXCIuLi9jb21wb25lbnRzL2F1dGgvTG9naW5cIjtcclxuaW1wb3J0IFJlZ2lzdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2F1dGgvUmVnaXN0ZXJcIjtcclxuaW1wb3J0IHsgbG9nX2luIH0gZnJvbSBcIi4uL3JlZHV4L2FjdGlvbnMvdXNlckFjdGlvbnNcIjtcclxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gXCIuLi9ob29rcy91c2VySG9va3NcIjtcclxuXHJcbmNvbnN0IGF1dGggPSAoeyBsb2dfaW4gfSkgPT4ge1xyXG4gIGNvbnN0IFtpc0ZsaXBwZWQsIHNldElzRmxpcHBlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2NvbmZpcm1QYXNzd29yZCwgc2V0Q29uZmlybVBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IGF1dGggPSB1c2VBdXRoKCk7XHJcbiAgY29uc29sZS5sb2coYXV0aCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldElzRmxpcHBlZCghaXNGbGlwcGVkKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzaWduaW4gPSAoKSA9PiBsb2dfaW4oZW1haWwsIHBhc3N3b3JkKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYXV0aGVudGljYXRpb25cIj5cclxuICAgICAgPFJlYWN0Q2FyZEZsaXAgaXNGbGlwcGVkPXtpc0ZsaXBwZWR9IGZsaXBEaXJlY3Rpb249XCJob3Jpem9udGFsXCI+XHJcbiAgICAgICAgPExvZ2luXHJcbiAgICAgICAgICBzaWduaW49e3NpZ25pbn1cclxuICAgICAgICAgIHNldFBhc3N3b3JkPXtzZXRQYXNzd29yZH1cclxuICAgICAgICAgIHNldEVtYWlsPXtzZXRFbWFpbH1cclxuICAgICAgICAgIGVtYWlsPXtlbWFpbH1cclxuICAgICAgICAgIHBhc3N3b3JkPXtwYXNzd29yZH1cclxuICAgICAgICAgIGhhbmRsZUNsaWNrPXtoYW5kbGVDbGlja31cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxSZWdpc3RlciBoYW5kbGVDbGljaz17aGFuZGxlQ2xpY2t9IC8+XHJcbiAgICAgIDwvUmVhY3RDYXJkRmxpcD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7fSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgeyBsb2dfaW4gfSkoYXV0aCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=