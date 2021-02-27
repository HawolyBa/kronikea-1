webpackHotUpdate_N_E("pages/story/new",{

/***/ "./components/common/Input.js":
/*!************************************!*\
  !*** ./components/common/Input.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\components\\common\\Input.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var InputGroup = function InputGroup(_ref) {
  var lg = _ref.lg,
      xs = _ref.xs,
      sm = _ref.sm,
      md = _ref.md,
      type = _ref.type,
      name = _ref.name,
      placeholder = _ref.placeholder,
      value = _ref.value,
      onChangeFunc = _ref.onChangeFunc,
      storyInfo = _ref.storyInfo;
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    lg: lg,
    xs: xs,
    sm: sm,
    md: md,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "input-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx("label", {
    htmlFor: name,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, name), __jsx("input", {
    className: "form-input",
    type: type,
    id: name,
    placeholder: placeholder,
    value: value,
    onChange: function onChange(e) {
      return onChangeFunc(_objectSpread(_objectSpread({}, storyInfo), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, name, e.target.value)));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  })));
};

_c = InputGroup;
/* harmony default export */ __webpack_exports__["default"] = (InputGroup);

var _c;

$RefreshReg$(_c, "InputGroup");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vSW5wdXQuanMiXSwibmFtZXMiOlsiSW5wdXRHcm91cCIsImxnIiwieHMiLCJzbSIsIm1kIiwidHlwZSIsIm5hbWUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2VGdW5jIiwic3RvcnlJbmZvIiwiZSIsInRhcmdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FXYjtBQUFBLE1BVkpDLEVBVUksUUFWSkEsRUFVSTtBQUFBLE1BVEpDLEVBU0ksUUFUSkEsRUFTSTtBQUFBLE1BUkpDLEVBUUksUUFSSkEsRUFRSTtBQUFBLE1BUEpDLEVBT0ksUUFQSkEsRUFPSTtBQUFBLE1BTkpDLElBTUksUUFOSkEsSUFNSTtBQUFBLE1BTEpDLElBS0ksUUFMSkEsSUFLSTtBQUFBLE1BSkpDLFdBSUksUUFKSkEsV0FJSTtBQUFBLE1BSEpDLEtBR0ksUUFISkEsS0FHSTtBQUFBLE1BRkpDLFlBRUksUUFGSkEsWUFFSTtBQUFBLE1BREpDLFNBQ0ksUUFESkEsU0FDSTtBQUNKLFNBQ0UsTUFBQyx3Q0FBRDtBQUFLLE1BQUUsRUFBRVQsRUFBVDtBQUFhLE1BQUUsRUFBRUMsRUFBakI7QUFBcUIsTUFBRSxFQUFFQyxFQUF6QjtBQUE2QixNQUFFLEVBQUVDLEVBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFPLFdBQU8sRUFBRUUsSUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF1QkEsSUFBdkIsQ0FERixFQUVFO0FBQ0UsYUFBUyxFQUFDLFlBRFo7QUFFRSxRQUFJLEVBQUVELElBRlI7QUFHRSxNQUFFLEVBQUVDLElBSE47QUFJRSxlQUFXLEVBQUVDLFdBSmY7QUFLRSxTQUFLLEVBQUVDLEtBTFQ7QUFNRSxZQUFRLEVBQUUsa0JBQUNHLENBQUQ7QUFBQSxhQUNSRixZQUFZLGlDQUFNQyxTQUFOLHFHQUFrQkosSUFBbEIsRUFBeUJLLENBQUMsQ0FBQ0MsTUFBRixDQUFTSixLQUFsQyxHQURKO0FBQUEsS0FOWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixDQURGO0FBaUJELENBN0JEOztLQUFNUixVO0FBK0JTQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zdG9yeS9uZXcuN2JhZDczNzA0MGI2ODE2MWUyZDUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbCB9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5jb25zdCBJbnB1dEdyb3VwID0gKHtcclxuICBsZyxcclxuICB4cyxcclxuICBzbSxcclxuICBtZCxcclxuICB0eXBlLFxyXG4gIG5hbWUsXHJcbiAgcGxhY2Vob2xkZXIsXHJcbiAgdmFsdWUsXHJcbiAgb25DaGFuZ2VGdW5jLFxyXG4gIHN0b3J5SW5mbyxcclxufSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q29sIGxnPXtsZ30geHM9e3hzfSBzbT17c219IG1kPXttZH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj17bmFtZX0+e25hbWV9PC9sYWJlbD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0taW5wdXRcIlxyXG4gICAgICAgICAgdHlwZT17dHlwZX1cclxuICAgICAgICAgIGlkPXtuYW1lfVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxyXG4gICAgICAgICAgICBvbkNoYW5nZUZ1bmMoeyAuLi5zdG9yeUluZm8sIFtuYW1lXTogZS50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvQ29sPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnB1dEdyb3VwO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9