webpackHotUpdate_N_E("pages/story/[id]",{

/***/ "./components/common/LocationCard.js":
/*!*******************************************!*\
  !*** ./components/common/LocationCard.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\components\\common\\LocationCard.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var LocationCard = function LocationCard(_ref) {
  _s();

  var location = _ref.location,
      type = _ref.type;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      visible = _React$useState2[0],
      setVisible = _React$useState2[1];

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("figure", {
    className: "card character-card",
    "data-aos": "zoom-in-up",
    onClick: setVisible(true),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "img-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: location.image,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  })), __jsx("figcaption", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }, location.name), type !== "story" && __jsx("span", {
    className: "author",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, "Story: ", location.storyTitle))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
    title: location.name,
    visible: visible,
    onOk: function onOk() {
      return setVisible(false);
    },
    onCancel: function onCancel() {
      return setVisible(false);
    },
    footer: [__jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      key: "submit",
      type: "primary",
      onClick: function onClick() {
        return setVisible(false);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 11
      }
    }, "Close")],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, "hello"));
};

_s(LocationCard, "OGsIWlGlwYpVUqIrDReJ1GWx7rw=");

_c = LocationCard;
/* harmony default export */ __webpack_exports__["default"] = (LocationCard);

var _c;

$RefreshReg$(_c, "LocationCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vTG9jYXRpb25DYXJkLmpzIl0sIm5hbWVzIjpbIkxvY2F0aW9uQ2FyZCIsImxvY2F0aW9uIiwidHlwZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsImltYWdlIiwibmFtZSIsInN0b3J5VGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BQXdCO0FBQUE7O0FBQUEsTUFBckJDLFFBQXFCLFFBQXJCQSxRQUFxQjtBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVzs7QUFBQSx3QkFDYkMsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEtBQWYsQ0FEYTtBQUFBO0FBQUEsTUFDcENDLE9BRG9DO0FBQUEsTUFDM0JDLFVBRDJCOztBQUUzQyxTQUNFLG1FQUNFO0FBQ0UsYUFBUyxFQUFDLHFCQURaO0FBRUUsZ0JBQVMsWUFGWDtBQUdFLFdBQU8sRUFBRUEsVUFBVSxDQUFDLElBQUQsQ0FIckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtFO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssT0FBRyxFQUFFTCxRQUFRLENBQUNNLEtBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUxGLEVBUUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS04sUUFBUSxDQUFDTyxJQUFkLENBREYsRUFFR04sSUFBSSxLQUFLLE9BQVQsSUFDQztBQUFNLGFBQVMsRUFBQyxRQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFpQ0QsUUFBUSxDQUFDUSxVQUExQyxDQUhKLENBUkYsQ0FERixFQWdCRSxNQUFDLDBDQUFEO0FBQ0UsU0FBSyxFQUFFUixRQUFRLENBQUNPLElBRGxCO0FBRUUsV0FBTyxFQUFFSCxPQUZYO0FBR0UsUUFBSSxFQUFFO0FBQUEsYUFBTUMsVUFBVSxDQUFDLEtBQUQsQ0FBaEI7QUFBQSxLQUhSO0FBSUUsWUFBUSxFQUFFO0FBQUEsYUFBTUEsVUFBVSxDQUFDLEtBQUQsQ0FBaEI7QUFBQSxLQUpaO0FBS0UsVUFBTSxFQUFFLENBQ04sTUFBQywyQ0FBRDtBQUFRLFNBQUcsRUFBQyxRQUFaO0FBQXFCLFVBQUksRUFBQyxTQUExQjtBQUFvQyxhQUFPLEVBQUU7QUFBQSxlQUFNQSxVQUFVLENBQUMsS0FBRCxDQUFoQjtBQUFBLE9BQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFETSxDQUxWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFoQkYsQ0FERjtBQWdDRCxDQWxDRDs7R0FBTU4sWTs7S0FBQUEsWTtBQW9DU0EsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3RvcnkvW2lkXS41NjJkZjU2MzRhNWUzODg3YjNmNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBNb2RhbCwgQnV0dG9uIH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmNvbnN0IExvY2F0aW9uQ2FyZCA9ICh7IGxvY2F0aW9uLCB0eXBlIH0pID0+IHtcclxuICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxmaWd1cmVcclxuICAgICAgICBjbGFzc05hbWU9XCJjYXJkIGNoYXJhY3Rlci1jYXJkXCJcclxuICAgICAgICBkYXRhLWFvcz1cInpvb20taW4tdXBcIlxyXG4gICAgICAgIG9uQ2xpY2s9e3NldFZpc2libGUodHJ1ZSl9XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZy1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPXtsb2NhdGlvbi5pbWFnZX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZmlnY2FwdGlvbj5cclxuICAgICAgICAgIDxoMz57bG9jYXRpb24ubmFtZX08L2gzPlxyXG4gICAgICAgICAge3R5cGUgIT09IFwic3RvcnlcIiAmJiAoXHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImF1dGhvclwiPlN0b3J5OiB7bG9jYXRpb24uc3RvcnlUaXRsZX08L3NwYW4+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZmlnY2FwdGlvbj5cclxuICAgICAgPC9maWd1cmU+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIHRpdGxlPXtsb2NhdGlvbi5uYW1lfVxyXG4gICAgICAgIHZpc2libGU9e3Zpc2libGV9XHJcbiAgICAgICAgb25Paz17KCkgPT4gc2V0VmlzaWJsZShmYWxzZSl9XHJcbiAgICAgICAgb25DYW5jZWw9eygpID0+IHNldFZpc2libGUoZmFsc2UpfVxyXG4gICAgICAgIGZvb3Rlcj17W1xyXG4gICAgICAgICAgPEJ1dHRvbiBrZXk9XCJzdWJtaXRcIiB0eXBlPVwicHJpbWFyeVwiIG9uQ2xpY2s9eygpID0+IHNldFZpc2libGUoZmFsc2UpfT5cclxuICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgIDwvQnV0dG9uPixcclxuICAgICAgICBdfVxyXG4gICAgICA+XHJcbiAgICAgICAgaGVsbG9cclxuICAgICAgPC9Nb2RhbD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2NhdGlvbkNhcmQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=