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

  var _useAuth = Object(_hooks_userHooks__WEBPACK_IMPORTED_MODULE_13__["useAuth"])(),
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
  }), __jsx(_hooks_userHooks__WEBPACK_IMPORTED_MODULE_13__["userContext"].Provider, {
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
  return [_hooks_userHooks__WEBPACK_IMPORTED_MODULE_13__["useAuth"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInVzZUF1dGgiLCJpbml0aWFsaXppbmciLCJ1c2VyIiwicnJmQ29uZmlnIiwidXNlclByb2ZpbGUiLCJ1c2VGaXJlc3RvcmVGb3JQcm9maWxlIiwic3RvcmUiLCJuZXdTdG9yZSIsInJyZlByb3BzIiwiZmlyZWJhc2UiLCJjb25maWciLCJkaXNwYXRjaCIsImNyZWF0ZUZpcmVzdG9yZUluc3RhbmNlIiwidXNlRWZmZWN0IiwiQU9TIiwiaW5pdCIsImR1cmF0aW9uIiwiY29uc29sZSIsImxvZyIsImdldEluaXRpYWxQcm9wcyIsImFwcENvbnRleHQiLCJBcHAiLCJhcHBQcm9wcyIsIndyYXBwZXIiLCJ3aXRoUmVkdXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtDQUdBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FBOEI7QUFBQTs7QUFBQSxNQUEzQkMsU0FBMkIsUUFBM0JBLFNBQTJCO0FBQUEsTUFBaEJDLFNBQWdCLFFBQWhCQSxTQUFnQjs7QUFBQSxpQkFDWEMsaUVBQU8sRUFESTtBQUFBLE1BQ2xDQyxZQURrQyxZQUNsQ0EsWUFEa0M7QUFBQSxNQUNwQkMsSUFEb0IsWUFDcEJBLElBRG9COztBQUUxQyxNQUFNQyxTQUFTLEdBQUc7QUFBRUMsZUFBVyxFQUFFLE9BQWY7QUFBd0JDLDBCQUFzQixFQUFFO0FBQWhELEdBQWxCO0FBRUEsTUFBTUMsS0FBSyxHQUFHQyw4REFBUSxFQUF0QjtBQUNBLE1BQU1DLFFBQVEsR0FBRztBQUNmQyxZQUFRLEVBQVJBLHFEQURlO0FBRWZDLFVBQU0sRUFBRVAsU0FGTztBQUdmUSxZQUFRLEVBQUVMLEtBQUssQ0FBQ0ssUUFIRDtBQUlmQywyQkFBdUIsRUFBdkJBLHVFQUF1QkE7QUFKUixHQUFqQjtBQU9BQyx5REFBUyxDQUFDLFlBQU07QUFDZEMsOENBQUcsQ0FBQ0MsSUFBSixDQUFTO0FBQ1BDLGNBQVEsRUFBRTtBQURILEtBQVQ7QUFHRCxHQUpRLEVBSU4sRUFKTSxDQUFUO0FBS0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZbkIsU0FBWjtBQUNBLFNBQ0UsbUVBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBUSxPQUFHLEVBQUMsbURBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFDRSxRQUFJLEVBQUMseURBRFA7QUFFRSxPQUFHLEVBQUMsWUFGTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixFQVFFLE1BQUMsb0RBQUQ7QUFBVSxTQUFLLEVBQUVPLEtBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdGQUFELHlGQUFnQ0UsUUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUNFLE1BQUMsNkRBQUQsQ0FBYSxRQUFiO0FBQXNCLFNBQUssRUFBRTtBQUFFTixVQUFJLEVBQUpBO0FBQUYsS0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsU0FBRCx5RkFBZUgsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREYsQ0FERixDQURGLENBREYsQ0FSRixDQURGO0FBb0JELENBdENEOztHQUFNRixLO1VBQzJCRyx5RDs7O0tBRDNCSCxLOztBQXdDTkEsS0FBSyxDQUFDc0IsZUFBTjtBQUFBLCtMQUF3QixpQkFBT0MsVUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNDQywrQ0FBRyxDQUFDRixlQUFKLENBQW9CQyxVQUFwQixDQUREOztBQUFBO0FBQ2hCRSxvQkFEZ0I7QUFBQSwrREFFVkEsUUFGVTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF4Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFLZSxxRUFBQUMscURBQU8sQ0FBQ0MsU0FBUixDQUFrQjNCLEtBQWxCLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5mZWI4NTM2YWNjMjM0MjQwZmEzNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQXBwIGZyb20gXCJuZXh0L2FwcFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBBT1MgZnJvbSBcImFvc1wiO1xyXG5cclxuLy9SRURVWFxyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVGaXJlc3RvcmVJbnN0YW5jZSB9IGZyb20gXCJyZWR1eC1maXJlc3RvcmVcIjtcclxuaW1wb3J0IHsgUmVhY3RSZWR1eEZpcmViYXNlUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXgtZmlyZWJhc2VcIjtcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcclxuaW1wb3J0IHsgd3JhcHBlciwgbmV3U3RvcmUgfSBmcm9tIFwiLi4vcmVkdXgvc3RvcmVcIjtcclxuaW1wb3J0IHsgdXNlckNvbnRleHQgfSBmcm9tIFwiLi4vaG9va3MvdXNlckhvb2tzXCI7XHJcblxyXG5pbXBvcnQgXCIuLi9zdHlsZS9jdXN0b20tYW50ZC5sZXNzXCI7XHJcbmltcG9ydCBcIi4uL3N0eWxlL21haW4uc2Nzc1wiO1xyXG5pbXBvcnQgXCJhb3MvZGlzdC9hb3MuY3NzXCI7XHJcblxyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2NvbW1vbi9MYXlvdXRcIjtcclxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gXCIuLi9ob29rcy91c2VySG9va3NcIjtcclxuXHJcbmNvbnN0IE15QXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4ge1xyXG4gIGNvbnN0IHsgaW5pdGlhbGl6aW5nLCB1c2VyIH0gPSB1c2VBdXRoKCk7XHJcbiAgY29uc3QgcnJmQ29uZmlnID0geyB1c2VyUHJvZmlsZTogXCJ1c2Vyc1wiLCB1c2VGaXJlc3RvcmVGb3JQcm9maWxlOiB0cnVlIH07XHJcblxyXG4gIGNvbnN0IHN0b3JlID0gbmV3U3RvcmUoKTtcclxuICBjb25zdCBycmZQcm9wcyA9IHtcclxuICAgIGZpcmViYXNlLFxyXG4gICAgY29uZmlnOiBycmZDb25maWcsXHJcbiAgICBkaXNwYXRjaDogc3RvcmUuZGlzcGF0Y2gsXHJcbiAgICBjcmVhdGVGaXJlc3RvcmVJbnN0YW5jZSxcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgQU9TLmluaXQoe1xyXG4gICAgICBkdXJhdGlvbjogNjAwLFxyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG4gIGNvbnNvbGUubG9nKHBhZ2VQcm9wcyk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly91bnBrZy5jb20vaW9uaWNvbnNANS4wLjAvZGlzdC9pb25pY29ucy5qc1wiPjwvc2NyaXB0PlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9pY29uP2ZhbWlseT1NYXRlcmlhbCtJY29uc1wiXHJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgICAgIDxSZWFjdFJlZHV4RmlyZWJhc2VQcm92aWRlciB7Li4ucnJmUHJvcHN9PlxyXG4gICAgICAgICAgPHVzZXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHVzZXIgfX0+XHJcbiAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICAgIDwvdXNlckNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICAgICAgPC9SZWFjdFJlZHV4RmlyZWJhc2VQcm92aWRlcj5cclxuICAgICAgPC9Qcm92aWRlcj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5NeUFwcC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoYXBwQ29udGV4dCkgPT4ge1xyXG4gIGNvbnN0IGFwcFByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhhcHBDb250ZXh0KTtcclxuICByZXR1cm4geyAuLi5hcHBQcm9wcyB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoTXlBcHApO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9