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


var _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

var userContext = React.createContext({
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

  var _React$useState = React.useState(function () {
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

  React.useEffect(function () {
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
/* harmony import */ var _redux_fbConfig__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../redux/fbConfig */ "./redux/fbConfig.js");
/* harmony import */ var _style_custom_antd_less__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../style/custom-antd.less */ "./style/custom-antd.less");
/* harmony import */ var _style_custom_antd_less__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_style_custom_antd_less__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _style_main_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../style/main.scss */ "./style/main.scss");
/* harmony import */ var _style_main_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_style_main_scss__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! aos/dist/aos.css */ "./node_modules/aos/dist/aos.css");
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _components_common_Layout__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/common/Layout */ "./components/common/Layout.js");
/* harmony import */ var _hooks_userHooks__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../hooks/userHooks */ "./hooks/userHooks.js");





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

  var _useAuth = Object(_hooks_userHooks__WEBPACK_IMPORTED_MODULE_18__["useAuth"])(),
      initializing = _useAuth.initializing,
      user = _useAuth.user;

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
  console.log(pageProps);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, __jsx("script", {
    src: "https://unpkg.com/ionicons@5.0.0/dist/ionicons.js",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/icon?family=Material+Icons",
    rel: "stylesheet",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  })), __jsx(react_redux__WEBPACK_IMPORTED_MODULE_8__["Provider"], {
    store: store,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, __jsx(react_redux_firebase__WEBPACK_IMPORTED_MODULE_10__["ReactReduxFirebaseProvider"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, rrfProps, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }), __jsx(userContext.Provider, {
    value: {
      user: user
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }, __jsx(_components_common_Layout__WEBPACK_IMPORTED_MODULE_17__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, pageProps, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 15
    }
  })))))));
};

_s(MyApp, "a589Av76OWBDKvSwadpgsR4tY7A=", false, function () {
  return [_hooks_userHooks__WEBPACK_IMPORTED_MODULE_18__["useAuth"]];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlckhvb2tzLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLmpzIl0sIm5hbWVzIjpbInVzZXJDb250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlciIsInVzZVNlc3Npb24iLCJ1c2VDb250ZXh0IiwidXNlQXV0aCIsInVzZVN0YXRlIiwiZmlyZWJhc2UiLCJhdXRoIiwiY3VycmVudFVzZXIiLCJpbml0aWFsaXppbmciLCJzdGF0ZSIsInNldFN0YXRlIiwib25DaGFuZ2UiLCJ1c2VFZmZlY3QiLCJ1bnN1YnNjcmliZSIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicnJmQ29uZmlnIiwidXNlclByb2ZpbGUiLCJ1c2VGaXJlc3RvcmVGb3JQcm9maWxlIiwic3RvcmUiLCJuZXdTdG9yZSIsInJyZlByb3BzIiwiY29uZmlnIiwiZGlzcGF0Y2giLCJjcmVhdGVGaXJlc3RvcmVJbnN0YW5jZSIsIkFPUyIsImluaXQiLCJkdXJhdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJnZXRJbml0aWFsUHJvcHMiLCJhcHBDb250ZXh0IiwiQXBwIiwiYXBwUHJvcHMiLCJ3cmFwcGVyIiwid2l0aFJlZHV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsV0FBVyxHQUFHQyxLQUFLLENBQUNDLGFBQU4sQ0FBb0I7QUFDdENDLE1BQUksRUFBRTtBQURnQyxDQUFwQixDQUFwQjtBQUlPLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFBQTs7QUFBQSxvQkFDYkMsVUFBVSxDQUFDTCxXQUFELENBREc7QUFBQSxNQUN0QkcsSUFEc0IsZUFDdEJBLElBRHNCOztBQUU5QixTQUFPQSxJQUFQO0FBQ0QsQ0FITTs7R0FBTUMsVTs7QUFLTixJQUFNRSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBQUEsd0JBQ0RM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QUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxTQUFELHlGQUFlaUIsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREYsQ0FERixDQURGLENBREYsQ0FSRixDQURGO0FBb0JELENBdENEOztHQUFNRixLO1VBQzJCWix5RDs7O0tBRDNCWSxLOztBQXdDTkEsS0FBSyxDQUFDaUIsZUFBTjtBQUFBLCtMQUF3QixpQkFBT0MsVUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNDQywrQ0FBRyxDQUFDRixlQUFKLENBQW9CQyxVQUFwQixDQUREOztBQUFBO0FBQ2hCRSxvQkFEZ0I7QUFBQSwrREFFVkEsUUFGVTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF4Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFLZSxxRUFBQUMscURBQU8sQ0FBQ0MsU0FBUixDQUFrQnRCLEtBQWxCLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5hZGQxN2E1YTlhNGJkMWY2ZTMwZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdXNlckNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHtcclxuICB1c2VyOiBudWxsLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VTZXNzaW9uID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgdXNlciB9ID0gdXNlQ29udGV4dCh1c2VyQ29udGV4dCk7XHJcbiAgcmV0dXJuIHVzZXI7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXNlQXV0aCA9ICgpID0+IHtcclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKCgpID0+IHtcclxuICAgIGNvbnN0IHVzZXIgPSBmaXJlYmFzZS5hdXRoKCkuY3VycmVudFVzZXI7XHJcbiAgICByZXR1cm4geyBpbml0aWFsaXppbmc6ICF1c2VyLCB1c2VyIH07XHJcbiAgfSk7XHJcbiAgZnVuY3Rpb24gb25DaGFuZ2UodXNlcikge1xyXG4gICAgc2V0U3RhdGUoeyBpbml0aWFsaXppbmc6IGZhbHNlLCB1c2VyIH0pO1xyXG4gIH1cclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIGxpc3RlbiBmb3IgYXV0aCBzdGF0ZSBjaGFuZ2VzXHJcbiAgICBjb25zdCB1bnN1YnNjcmliZSA9IGZpcmViYXNlLmF1dGgoKS5vbkF1dGhTdGF0ZUNoYW5nZWQob25DaGFuZ2UpO1xyXG4gICAgLy8gdW5zdWJzY3JpYmUgdG8gdGhlIGxpc3RlbmVyIHdoZW4gdW5tb3VudGluZ1xyXG4gICAgcmV0dXJuICgpID0+IHVuc3Vic2NyaWJlKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gc3RhdGU7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFwcCBmcm9tIFwibmV4dC9hcHBcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgQU9TIGZyb20gXCJhb3NcIjtcclxuXHJcbi8vUkVEVVhcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgY3JlYXRlRmlyZXN0b3JlSW5zdGFuY2UgfSBmcm9tIFwicmVkdXgtZmlyZXN0b3JlXCI7XHJcbmltcG9ydCB7IFJlYWN0UmVkdXhGaXJlYmFzZVByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJlZHV4LWZpcmViYXNlXCI7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcbmltcG9ydCB7IHdyYXBwZXIsIG5ld1N0b3JlIH0gZnJvbSBcIi4uL3JlZHV4L3N0b3JlXCI7XHJcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiLi4vcmVkdXgvZmJDb25maWdcIjtcclxuXHJcbmltcG9ydCBcIi4uL3N0eWxlL2N1c3RvbS1hbnRkLmxlc3NcIjtcclxuaW1wb3J0IFwiLi4vc3R5bGUvbWFpbi5zY3NzXCI7XHJcbmltcG9ydCBcImFvcy9kaXN0L2Fvcy5jc3NcIjtcclxuXHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvY29tbW9uL0xheW91dFwiO1xyXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSBcIi4uL2hvb2tzL3VzZXJIb29rc1wiO1xyXG5cclxuY29uc3QgTXlBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiB7XHJcbiAgY29uc3QgeyBpbml0aWFsaXppbmcsIHVzZXIgfSA9IHVzZUF1dGgoKTtcclxuICBjb25zdCBycmZDb25maWcgPSB7IHVzZXJQcm9maWxlOiBcInVzZXJzXCIsIHVzZUZpcmVzdG9yZUZvclByb2ZpbGU6IHRydWUgfTtcclxuXHJcbiAgY29uc3Qgc3RvcmUgPSBuZXdTdG9yZSgpO1xyXG4gIGNvbnN0IHJyZlByb3BzID0ge1xyXG4gICAgZmlyZWJhc2UsXHJcbiAgICBjb25maWc6IHJyZkNvbmZpZyxcclxuICAgIGRpc3BhdGNoOiBzdG9yZS5kaXNwYXRjaCxcclxuICAgIGNyZWF0ZUZpcmVzdG9yZUluc3RhbmNlLFxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBBT1MuaW5pdCh7XHJcbiAgICAgIGR1cmF0aW9uOiA2MDAsXHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcbiAgY29uc29sZS5sb2cocGFnZVByb3BzKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL3VucGtnLmNvbS9pb25pY29uc0A1LjAuMC9kaXN0L2lvbmljb25zLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2ljb24/ZmFtaWx5PU1hdGVyaWFsK0ljb25zXCJcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgICAgPFJlYWN0UmVkdXhGaXJlYmFzZVByb3ZpZGVyIHsuLi5ycmZQcm9wc30+XHJcbiAgICAgICAgICA8dXNlckNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgdXNlciB9fT5cclxuICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAgPC91c2VyQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICAgICA8L1JlYWN0UmVkdXhGaXJlYmFzZVByb3ZpZGVyPlxyXG4gICAgICA8L1Byb3ZpZGVyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbk15QXBwLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChhcHBDb250ZXh0KSA9PiB7XHJcbiAgY29uc3QgYXBwUHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGFwcENvbnRleHQpO1xyXG4gIHJldHVybiB7IC4uLmFwcFByb3BzIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eChNeUFwcCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=