webpackHotUpdate_N_E("pages/_app",{

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
/* harmony import */ var _style_custom_antd_less__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../style/custom-antd.less */ "./style/custom-antd.less");
/* harmony import */ var _style_custom_antd_less__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_style_custom_antd_less__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _style_main_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../style/main.scss */ "./style/main.scss");
/* harmony import */ var _style_main_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_style_main_scss__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! aos/dist/aos.css */ "./node_modules/aos/dist/aos.css");
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _components_common_Layout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/common/Layout */ "./components/common/Layout.js");





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
  firebase_app__WEBPACK_IMPORTED_MODULE_11__["default"].auth.onAuthStateChanged(function (authUser) {
    if (authUser) {
      console.log(authUser);
    }
  });
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    aos__WEBPACK_IMPORTED_MODULE_7___default.a.init({
      duration: 600
    });
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, __jsx("script", {
    src: "https://unpkg.com/ionicons@5.0.0/dist/ionicons.js",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/icon?family=Material+Icons",
    rel: "stylesheet",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  })), __jsx(react_redux__WEBPACK_IMPORTED_MODULE_8__["Provider"], {
    store: store,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }, __jsx(react_redux_firebase__WEBPACK_IMPORTED_MODULE_10__["ReactReduxFirebaseProvider"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, rrfProps, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }), __jsx(_components_common_Layout__WEBPACK_IMPORTED_MODULE_16__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, pageProps, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInJyZkNvbmZpZyIsInVzZXJQcm9maWxlIiwidXNlRmlyZXN0b3JlRm9yUHJvZmlsZSIsInN0b3JlIiwibmV3U3RvcmUiLCJycmZQcm9wcyIsImZpcmViYXNlIiwiY29uZmlnIiwiZGlzcGF0Y2giLCJjcmVhdGVGaXJlc3RvcmVJbnN0YW5jZSIsImF1dGgiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJhdXRoVXNlciIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJBT1MiLCJpbml0IiwiZHVyYXRpb24iLCJnZXRJbml0aWFsUHJvcHMiLCJhcHBDb250ZXh0IiwiQXBwIiwiYXBwUHJvcHMiLCJ3cmFwcGVyIiwid2l0aFJlZHV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtDQUdBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQUE4QjtBQUFBOztBQUFBLE1BQTNCQyxTQUEyQixRQUEzQkEsU0FBMkI7QUFBQSxNQUFoQkMsU0FBZ0IsUUFBaEJBLFNBQWdCO0FBQzFDLE1BQU1DLFNBQVMsR0FBRztBQUFFQyxlQUFXLEVBQUUsT0FBZjtBQUF3QkMsMEJBQXNCLEVBQUU7QUFBaEQsR0FBbEI7QUFFQSxNQUFNQyxLQUFLLEdBQUdDLDhEQUFRLEVBQXRCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHO0FBQ2ZDLFlBQVEsRUFBUkEscURBRGU7QUFFZkMsVUFBTSxFQUFFUCxTQUZPO0FBR2ZRLFlBQVEsRUFBRUwsS0FBSyxDQUFDSyxRQUhEO0FBSWZDLDJCQUF1QixFQUF2QkEsdUVBQXVCQTtBQUpSLEdBQWpCO0FBT0FILHVEQUFRLENBQUNJLElBQVQsQ0FBY0Msa0JBQWQsQ0FBaUMsVUFBQ0MsUUFBRCxFQUFjO0FBQzdDLFFBQUlBLFFBQUosRUFBYztBQUNaQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsUUFBWjtBQUNEO0FBQ0YsR0FKRDtBQU1BRyx5REFBUyxDQUFDLFlBQU07QUFDZEMsOENBQUcsQ0FBQ0MsSUFBSixDQUFTO0FBQ1BDLGNBQVEsRUFBRTtBQURILEtBQVQ7QUFHRCxHQUpRLEVBSU4sRUFKTSxDQUFUO0FBS0EsU0FDRSxtRUFDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFRLE9BQUcsRUFBQyxtREFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUNFLFFBQUksRUFBQyx5REFEUDtBQUVFLE9BQUcsRUFBQyxZQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGLEVBUUUsTUFBQyxvREFBRDtBQUFVLFNBQUssRUFBRWYsS0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0ZBQUQseUZBQWdDRSxRQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQ0UsTUFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxTQUFELHlGQUFlTixTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERixDQURGLENBREYsQ0FSRixDQURGO0FBa0JELENBeENEOztHQUFNRixLOztLQUFBQSxLOztBQTBDTkEsS0FBSyxDQUFDc0IsZUFBTjtBQUFBLCtMQUF3QixpQkFBT0MsVUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNDQywrQ0FBRyxDQUFDRixlQUFKLENBQW9CQyxVQUFwQixDQUREOztBQUFBO0FBQ2hCRSxvQkFEZ0I7QUFBQSwrREFFVkEsUUFGVTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF4Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFLZSxxRUFBQUMscURBQU8sQ0FBQ0MsU0FBUixDQUFrQjNCLEtBQWxCLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC43ODQ3OWUzMDJiODQwOWQ2Y2JjYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQXBwIGZyb20gXCJuZXh0L2FwcFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBBT1MgZnJvbSBcImFvc1wiO1xyXG5cclxuLy9SRURVWFxyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVGaXJlc3RvcmVJbnN0YW5jZSB9IGZyb20gXCJyZWR1eC1maXJlc3RvcmVcIjtcclxuaW1wb3J0IHsgUmVhY3RSZWR1eEZpcmViYXNlUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXgtZmlyZWJhc2VcIjtcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcclxuaW1wb3J0IHsgd3JhcHBlciwgbmV3U3RvcmUgfSBmcm9tIFwiLi4vcmVkdXgvc3RvcmVcIjtcclxuXHJcbmltcG9ydCBcIi4uL3N0eWxlL2N1c3RvbS1hbnRkLmxlc3NcIjtcclxuaW1wb3J0IFwiLi4vc3R5bGUvbWFpbi5zY3NzXCI7XHJcbmltcG9ydCBcImFvcy9kaXN0L2Fvcy5jc3NcIjtcclxuXHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvY29tbW9uL0xheW91dFwiO1xyXG5cclxuY29uc3QgTXlBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiB7XHJcbiAgY29uc3QgcnJmQ29uZmlnID0geyB1c2VyUHJvZmlsZTogXCJ1c2Vyc1wiLCB1c2VGaXJlc3RvcmVGb3JQcm9maWxlOiB0cnVlIH07XHJcblxyXG4gIGNvbnN0IHN0b3JlID0gbmV3U3RvcmUoKTtcclxuICBjb25zdCBycmZQcm9wcyA9IHtcclxuICAgIGZpcmViYXNlLFxyXG4gICAgY29uZmlnOiBycmZDb25maWcsXHJcbiAgICBkaXNwYXRjaDogc3RvcmUuZGlzcGF0Y2gsXHJcbiAgICBjcmVhdGVGaXJlc3RvcmVJbnN0YW5jZSxcclxuICB9O1xyXG5cclxuICBmaXJlYmFzZS5hdXRoLm9uQXV0aFN0YXRlQ2hhbmdlZCgoYXV0aFVzZXIpID0+IHtcclxuICAgIGlmIChhdXRoVXNlcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhhdXRoVXNlcik7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBBT1MuaW5pdCh7XHJcbiAgICAgIGR1cmF0aW9uOiA2MDAsXHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly91bnBrZy5jb20vaW9uaWNvbnNANS4wLjAvZGlzdC9pb25pY29ucy5qc1wiPjwvc2NyaXB0PlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9pY29uP2ZhbWlseT1NYXRlcmlhbCtJY29uc1wiXHJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgICAgIDxSZWFjdFJlZHV4RmlyZWJhc2VQcm92aWRlciB7Li4ucnJmUHJvcHN9PlxyXG4gICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgPC9SZWFjdFJlZHV4RmlyZWJhc2VQcm92aWRlcj5cclxuICAgICAgPC9Qcm92aWRlcj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5NeUFwcC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoYXBwQ29udGV4dCkgPT4ge1xyXG4gIGNvbnN0IGFwcFByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhhcHBDb250ZXh0KTtcclxuICByZXR1cm4geyAuLi5hcHBQcm9wcyB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoTXlBcHApO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9