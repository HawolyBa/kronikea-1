webpackHotUpdate_N_E("pages/_app",{

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

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! redux-firestore */ "./node_modules/redux-firestore/es/index.js");
/* harmony import */ var redux_firestore__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(redux_firestore__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux_firebase__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux-firebase */ "./node_modules/react-redux-firebase/es/index.js");
/* harmony import */ var react_redux_firebase__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux_firebase__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.esm.js");
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../redux/store */ "./redux/store.js");
/* harmony import */ var _hooks_userHooks__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../hooks/userHooks */ "./hooks/userHooks.js");
/* harmony import */ var _style_custom_antd_less__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../style/custom-antd.less */ "./style/custom-antd.less");
/* harmony import */ var _style_custom_antd_less__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_style_custom_antd_less__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _style_main_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../style/main.scss */ "./style/main.scss");
/* harmony import */ var _style_main_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_style_main_scss__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! aos/dist/aos.css */ "./node_modules/aos/dist/aos.css");
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _components_common_Layout__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/common/Layout */ "./components/common/Layout.js");





var _this = undefined,
    _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\pages\\_app.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




 //REDUX












var MyApp = function MyApp(_ref) {
  _s();

  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  var rrfConfig = {
    userProfile: "users",
    useFirestoreForProfile: true
  };
  var store = Object(_redux_store__WEBPACK_IMPORTED_MODULE_12__["newStore"])();
  var rrfProps = {
    firebase: firebase_app__WEBPACK_IMPORTED_MODULE_11__["default"],
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance: redux_firestore__WEBPACK_IMPORTED_MODULE_9__["createFirestoreInstance"]
  };
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    aos__WEBPACK_IMPORTED_MODULE_7___default.a.init({
      duration: 600
    });
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, __jsx("script", {
    src: "https://unpkg.com/ionicons@5.0.0/dist/ionicons.js",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/icon?family=Material+Icons",
    rel: "stylesheet",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  })), __jsx(react_redux__WEBPACK_IMPORTED_MODULE_8__["Provider"], {
    store: store,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, __jsx(react_redux_firebase__WEBPACK_IMPORTED_MODULE_10__["ReactReduxFirebaseProvider"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, rrfProps, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }), __jsx(_hooks_userHooks__WEBPACK_IMPORTED_MODULE_13__["ProvideAuth"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, __jsx(_components_common_Layout__WEBPACK_IMPORTED_MODULE_17__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, pageProps, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 15
    }
  })))))));
};

_s(MyApp, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = MyApp;

MyApp.getInitialProps = /*#__PURE__*/function () {
  var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(appContext) {
    var appProps;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return next_app__WEBPACK_IMPORTED_MODULE_5___default.a.getInitialProps(appContext);

          case 2:
            appProps = _context.sent;
            return _context.abrupt("return", _objectSpread({}, appProps));

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (_c2 = _redux_store__WEBPACK_IMPORTED_MODULE_12__["wrapper"].withRedux(MyApp));

var _c, _c2;

$RefreshReg$(_c, "MyApp");
$RefreshReg$(_c2, "%default%");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlckhvb2tzLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLmpzIl0sIm5hbWVzIjpbImF1dGhDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIlByb3ZpZGVBdXRoIiwiY2hpbGRyZW4iLCJhdXRoIiwidXNlUHJvdmlkZUF1dGgiLCJ1c2VBdXRoIiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlciIsInNldFVzZXIiLCJzaWduaW4iLCJlbWFpbCIsInBhc3N3b3JkIiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJ0aGVuIiwicmVzcG9uc2UiLCJzaWdudXAiLCJjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJzaWdub3V0Iiwic2lnbk91dCIsInNlbmRQYXNzd29yZFJlc2V0RW1haWwiLCJjb25maXJtUGFzc3dvcmRSZXNldCIsImNvZGUiLCJ1c2VFZmZlY3QiLCJ1bnN1YnNjcmliZSIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicnJmQ29uZmlnIiwidXNlclByb2ZpbGUiLCJ1c2VGaXJlc3RvcmVGb3JQcm9maWxlIiwic3RvcmUiLCJuZXdTdG9yZSIsInJyZlByb3BzIiwiZmlyZWJhc2UiLCJjb25maWciLCJkaXNwYXRjaCIsImNyZWF0ZUZpcmVzdG9yZUluc3RhbmNlIiwiQU9TIiwiaW5pdCIsImR1cmF0aW9uIiwiZ2V0SW5pdGlhbFByb3BzIiwiYXBwQ29udGV4dCIsIkFwcCIsImFwcFByb3BzIiwid3JhcHBlciIsIndpdGhSZWR1eCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxXQUFXLGdCQUFHQywyREFBYSxFQUFqQztBQUVPLFNBQVNDLFdBQVQsT0FBbUM7QUFBQTs7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7QUFDeEMsTUFBTUMsSUFBSSxHQUFHQyxjQUFj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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnRkFBRCx5RkFBZ0NFLFFBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFDRSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLFNBQUQseUZBQWVOLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURGLENBREYsQ0FERixDQURGLENBUkYsQ0FERjtBQW9CRCxDQXJDRDs7R0FBTUYsSzs7S0FBQUEsSzs7QUF1Q05BLEtBQUssQ0FBQ2dCLGVBQU47QUFBQSwrTEFBd0IsaUJBQU9DLFVBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDQ0MsK0NBQUcsQ0FBQ0YsZUFBSixDQUFvQkMsVUFBcEIsQ0FERDs7QUFBQTtBQUNoQkUsb0JBRGdCO0FBQUEsK0RBRVZBLFFBRlU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBeEI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBS2UscUVBQUFDLHFEQUFPLENBQUNDLFNBQVIsQ0FBa0JyQixLQUFsQixDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNGQ5ZmUyMGEwODAwMDMyNWQ0NWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0LCBjcmVhdGVDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiLi4vcmVkdXgvZmJDb25maWdcIjtcclxuXHJcbmNvbnN0IGF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFByb3ZpZGVBdXRoKHsgY2hpbGRyZW4gfSkge1xyXG4gIGNvbnN0IGF1dGggPSB1c2VQcm92aWRlQXV0aCgpO1xyXG4gIHJldHVybiA8YXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2F1dGh9PntjaGlsZHJlbn08L2F1dGhDb250ZXh0LlByb3ZpZGVyPjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUF1dGggPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHVzZUNvbnRleHQoYXV0aENvbnRleHQpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gdXNlUHJvdmlkZUF1dGgoKSB7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIC8vIFdyYXAgYW55IEZpcmViYXNlIG1ldGhvZHMgd2Ugd2FudCB0byB1c2UgbWFraW5nIHN1cmUgLi4uXHJcbiAgLy8gLi4uIHRvIHNhdmUgdGhlIHVzZXIgdG8gc3RhdGUuXHJcbiAgY29uc3Qgc2lnbmluID0gKGVtYWlsLCBwYXNzd29yZCkgPT4ge1xyXG4gICAgcmV0dXJuIGF1dGguc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBzZXRVc2VyKHJlc3BvbnNlLnVzZXIpO1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UudXNlcjtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNpZ251cCA9IChlbWFpbCwgcGFzc3dvcmQpID0+IHtcclxuICAgIHJldHVybiBhdXRoXHJcbiAgICAgIC5jcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBzZXRVc2VyKHJlc3BvbnNlLnVzZXIpO1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZS51c2VyO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzaWdub3V0ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGF1dGguc2lnbk91dCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICBzZXRVc2VyKGZhbHNlKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNlbmRQYXNzd29yZFJlc2V0RW1haWwgPSAoZW1haWwpID0+IHtcclxuICAgIHJldHVybiBhdXRoLnNlbmRQYXNzd29yZFJlc2V0RW1haWwoZW1haWwpLnRoZW4oKCkgPT4ge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNvbmZpcm1QYXNzd29yZFJlc2V0ID0gKGNvZGUsIHBhc3N3b3JkKSA9PiB7XHJcbiAgICByZXR1cm4gYXV0aC5jb25maXJtUGFzc3dvcmRSZXNldChjb2RlLCBwYXNzd29yZCkudGhlbigoKSA9PiB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHVuc3Vic2NyaWJlID0gYXV0aC5vbkF1dGhTdGF0ZUNoYW5nZWQoKHVzZXIpID0+IHtcclxuICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICBzZXRVc2VyKHVzZXIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldFVzZXIoZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBDbGVhbnVwIHN1YnNjcmlwdGlvbiBvbiB1bm1vdW50XHJcbiAgICByZXR1cm4gKCkgPT4gdW5zdWJzY3JpYmUoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8vIFJldHVybiB0aGUgdXNlciBvYmplY3QgYW5kIGF1dGggbWV0aG9kc1xyXG4gIHJldHVybiB7XHJcbiAgICB1c2VyLFxyXG4gICAgc2lnbmluLFxyXG4gICAgc2lnbnVwLFxyXG4gICAgc2lnbm91dCxcclxuICAgIHNlbmRQYXNzd29yZFJlc2V0RW1haWwsXHJcbiAgICBjb25maXJtUGFzc3dvcmRSZXNldCxcclxuICB9O1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFwcCBmcm9tIFwibmV4dC9hcHBcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgQU9TIGZyb20gXCJhb3NcIjtcclxuXHJcbi8vUkVEVVhcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgY3JlYXRlRmlyZXN0b3JlSW5zdGFuY2UgfSBmcm9tIFwicmVkdXgtZmlyZXN0b3JlXCI7XHJcbmltcG9ydCB7IFJlYWN0UmVkdXhGaXJlYmFzZVByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJlZHV4LWZpcmViYXNlXCI7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcbmltcG9ydCB7IHdyYXBwZXIsIG5ld1N0b3JlIH0gZnJvbSBcIi4uL3JlZHV4L3N0b3JlXCI7XHJcbmltcG9ydCB7IFByb3ZpZGVBdXRoIH0gZnJvbSBcIi4uL2hvb2tzL3VzZXJIb29rc1wiO1xyXG5cclxuaW1wb3J0IFwiLi4vc3R5bGUvY3VzdG9tLWFudGQubGVzc1wiO1xyXG5pbXBvcnQgXCIuLi9zdHlsZS9tYWluLnNjc3NcIjtcclxuaW1wb3J0IFwiYW9zL2Rpc3QvYW9zLmNzc1wiO1xyXG5cclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9jb21tb24vTGF5b3V0XCI7XHJcblxyXG5jb25zdCBNeUFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcclxuICBjb25zdCBycmZDb25maWcgPSB7IHVzZXJQcm9maWxlOiBcInVzZXJzXCIsIHVzZUZpcmVzdG9yZUZvclByb2ZpbGU6IHRydWUgfTtcclxuXHJcbiAgY29uc3Qgc3RvcmUgPSBuZXdTdG9yZSgpO1xyXG4gIGNvbnN0IHJyZlByb3BzID0ge1xyXG4gICAgZmlyZWJhc2UsXHJcbiAgICBjb25maWc6IHJyZkNvbmZpZyxcclxuICAgIGRpc3BhdGNoOiBzdG9yZS5kaXNwYXRjaCxcclxuICAgIGNyZWF0ZUZpcmVzdG9yZUluc3RhbmNlLFxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBBT1MuaW5pdCh7XHJcbiAgICAgIGR1cmF0aW9uOiA2MDAsXHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vdW5wa2cuY29tL2lvbmljb25zQDUuMC4wL2Rpc3QvaW9uaWNvbnMuanNcIj48L3NjcmlwdD5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vaWNvbj9mYW1pbHk9TWF0ZXJpYWwrSWNvbnNcIlxyXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgICA8UmVhY3RSZWR1eEZpcmViYXNlUHJvdmlkZXIgey4uLnJyZlByb3BzfT5cclxuICAgICAgICAgIDxQcm92aWRlQXV0aD5cclxuICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAgPC9Qcm92aWRlQXV0aD5cclxuICAgICAgICA8L1JlYWN0UmVkdXhGaXJlYmFzZVByb3ZpZGVyPlxyXG4gICAgICA8L1Byb3ZpZGVyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbk15QXBwLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChhcHBDb250ZXh0KSA9PiB7XHJcbiAgY29uc3QgYXBwUHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGFwcENvbnRleHQpO1xyXG4gIHJldHVybiB7IC4uLmFwcFByb3BzIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eChNeUFwcCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=