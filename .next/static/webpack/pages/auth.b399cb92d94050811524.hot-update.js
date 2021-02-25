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
/* harmony import */ var _redux_actions_userActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/actions/userActions */ "./redux/actions/userActions.js");
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

  var handleClick = function handleClick(e) {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };

  var signin = function signin() {
    return log_in({
      email: email,
      password: password
    });
  };

  return __jsx("div", {
    className: "authentication",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, __jsx(react_card_flip__WEBPACK_IMPORTED_MODULE_1___default.a, {
    isFlipped: isFlipped,
    flipDirection: "horizontal",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, __jsx(_components_auth_Login__WEBPACK_IMPORTED_MODULE_3__["default"], {
    setPassword: setPassword,
    setEmail: setEmail,
    email: email,
    password: password,
    handleClick: handleClick,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }), __jsx(_components_auth_Register__WEBPACK_IMPORTED_MODULE_4__["default"], {
    handleClick: handleClick,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  })));
};

_s(auth, "4CnmE6Jz4tmah7hXdBHTcqoH9g4=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXV0aC5qcyJdLCJuYW1lcyI6WyJhdXRoIiwibG9nX2luIiwidXNlU3RhdGUiLCJpc0ZsaXBwZWQiLCJzZXRJc0ZsaXBwZWQiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJjb25maXJtUGFzc3dvcmQiLCJzZXRDb25maXJtUGFzc3dvcmQiLCJoYW5kbGVDbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNpZ25pbiIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQWdCO0FBQUE7O0FBQUEsTUFBYkMsTUFBYSxRQUFiQSxNQUFhOztBQUFBLGtCQUNPQyxzREFBUSxDQUFDLEtBQUQsQ0FEZjtBQUFBLE1BQ3BCQyxTQURvQjtBQUFBLE1BQ1RDLFlBRFM7O0FBQUEsbUJBRUtGLHNEQUFRLENBQUMsRUFBRCxDQUZiO0FBQUEsTUFFcEJHLFFBRm9CO0FBQUEsTUFFVkMsV0FGVTs7QUFBQSxtQkFHREosc0RBQVEsQ0FBQyxFQUFELENBSFA7QUFBQSxNQUdwQkssS0FIb0I7QUFBQSxNQUdiQyxRQUhhOztBQUFBLG1CQUlLTixzREFBUSxDQUFDLEVBQUQsQ0FKYjtBQUFBLE1BSXBCTyxRQUpvQjtBQUFBLE1BSVZDLFdBSlU7O0FBQUEsbUJBS21CUixzREFBUSxDQUFDLEVBQUQsQ0FMM0I7QUFBQSxNQUtwQlMsZUFMb0I7QUFBQSxNQUtIQyxrQkFMRzs7QUFPM0IsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3pCQSxLQUFDLENBQUNDLGNBQUY7QUFDQVgsZ0JBQVksQ0FBQyxDQUFDRCxTQUFGLENBQVo7QUFDRCxHQUhEOztBQUtBLE1BQU1hLE1BQU0sR0FBRyxTQUFUQSxNQUFTO0FBQUEsV0FBTWYsTUFBTSxDQUFDO0FBQUVNLFdBQUssRUFBTEEsS0FBRjtBQUFTRSxjQUFRLEVBQVJBO0FBQVQsS0FBRCxDQUFaO0FBQUEsR0FBZjs7QUFFQSxTQUNFO0FBQUssYUFBUyxFQUFDLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHNEQUFEO0FBQWUsYUFBUyxFQUFFTixTQUExQjtBQUFxQyxpQkFBYSxFQUFDLFlBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhEQUFEO0FBQ0UsZUFBVyxFQUFFTyxXQURmO0FBRUUsWUFBUSxFQUFFRixRQUZaO0FBR0UsU0FBSyxFQUFFRCxLQUhUO0FBSUUsWUFBUSxFQUFFRSxRQUpaO0FBS0UsZUFBVyxFQUFFSSxXQUxmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQVFFLE1BQUMsaUVBQUQ7QUFBVSxlQUFXLEVBQUVBLFdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSRixDQURGLENBREY7QUFjRCxDQTVCRDs7R0FBTWIsSTs7QUE4Qk4sSUFBTWlCLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRDtBQUFBLFNBQVksRUFBWjtBQUFBLENBQXhCOztBQUVlQywwSEFBTyxDQUFDRixlQUFELEVBQWtCO0FBQUVoQixRQUFNLEVBQU5BLGlFQUFNQTtBQUFSLENBQWxCLENBQVAsQ0FBcUNELElBQXJDLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYXV0aC5iMzk5Y2I5MmQ5NDA1MDgxMTUyNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSZWFjdENhcmRGbGlwIGZyb20gXCJyZWFjdC1jYXJkLWZsaXBcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuaW1wb3J0IExvZ2luIGZyb20gXCIuLi9jb21wb25lbnRzL2F1dGgvTG9naW5cIjtcclxuaW1wb3J0IFJlZ2lzdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2F1dGgvUmVnaXN0ZXJcIjtcclxuaW1wb3J0IHsgbG9nX2luIH0gZnJvbSBcIi4uL3JlZHV4L2FjdGlvbnMvdXNlckFjdGlvbnNcIjtcclxuXHJcbmNvbnN0IGF1dGggPSAoeyBsb2dfaW4gfSkgPT4ge1xyXG4gIGNvbnN0IFtpc0ZsaXBwZWQsIHNldElzRmxpcHBlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2NvbmZpcm1QYXNzd29yZCwgc2V0Q29uZmlybVBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRJc0ZsaXBwZWQoIWlzRmxpcHBlZCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2lnbmluID0gKCkgPT4gbG9nX2luKHsgZW1haWwsIHBhc3N3b3JkIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhdXRoZW50aWNhdGlvblwiPlxyXG4gICAgICA8UmVhY3RDYXJkRmxpcCBpc0ZsaXBwZWQ9e2lzRmxpcHBlZH0gZmxpcERpcmVjdGlvbj1cImhvcml6b250YWxcIj5cclxuICAgICAgICA8TG9naW5cclxuICAgICAgICAgIHNldFBhc3N3b3JkPXtzZXRQYXNzd29yZH1cclxuICAgICAgICAgIHNldEVtYWlsPXtzZXRFbWFpbH1cclxuICAgICAgICAgIGVtYWlsPXtlbWFpbH1cclxuICAgICAgICAgIHBhc3N3b3JkPXtwYXNzd29yZH1cclxuICAgICAgICAgIGhhbmRsZUNsaWNrPXtoYW5kbGVDbGlja31cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxSZWdpc3RlciBoYW5kbGVDbGljaz17aGFuZGxlQ2xpY2t9IC8+XHJcbiAgICAgIDwvUmVhY3RDYXJkRmxpcD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7fSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgeyBsb2dfaW4gfSkoYXV0aCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=