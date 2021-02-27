webpackHotUpdate_N_E("pages/story/new",{

/***/ "./components/common/Select.js":
/*!*************************************!*\
  !*** ./components/common/Select.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\components\\common\\Select.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var Option = antd__WEBPACK_IMPORTED_MODULE_2__["Select"].Option;

var SelectGroup = function SelectGroup(_ref) {
  var xs = _ref.xs,
      lg = _ref.lg,
      sm = _ref.sm,
      md = _ref.md,
      name = _ref.name,
      options = _ref.options,
      info = _ref.info,
      value = _ref.value,
      onChangeFunc = _ref.onChangeFunc,
      storyInfo = _ref.storyInfo,
      type = _ref.type;
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xs: xs,
    sm: sm,
    md: md,
    lg: lg,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
    label: name,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "input-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx("label", {
    htmlFor: "genre",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }, name, " ", info && __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Popover"], {
    title: info,
    trigger: "click",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 15
    }
  }, __jsx("ion-icon", {
    name: "information-circle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }))), type === "multiple" ? __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Select"], {
    mode: "multiple",
    allowClear: true,
    style: {
      width: "100%"
    },
    placeholder: "Please select",
    value: value,
    onChange: function onChange(val) {
      return onChangeFunc(_objectSpread(_objectSpread({}, storyInfo), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, name, val)));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, options === null || options === void 0 ? void 0 : options.sort(function (a, b) {
    var keyA = a.name,
        keyB = b.name; // Compare the 2 dates

    if (keyA < keyB) return -1;
    if (keyA > keyB) return 1;
    return 0;
  }).map(function (option) {
    return __jsx(Option, {
      style: {
        textTransform: "capitalize"
      },
      key: option.value,
      value: option.value,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 19
      }
    }, option.name);
  })) : __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Select"], {
    allowClear: true,
    style: {
      width: "100%"
    },
    placeholder: "Please select",
    value: value,
    onChange: function onChange(val) {
      return onChangeFunc(_objectSpread(_objectSpread({}, storyInfo), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, name, val)));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, options === null || options === void 0 ? void 0 : options.sort(function (a, b) {
    var keyA = a.name,
        keyB = b.name; // Compare the 2 dates

    if (keyA < keyB) return -1;
    if (keyA > keyB) return 1;
    return 0;
  }).map(function (option) {
    return __jsx(Option, {
      style: {
        textTransform: "capitalize"
      },
      key: option.value,
      value: option.value,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 19
      }
    }, option.name);
  })))));
};

_c = SelectGroup;
/* harmony default export */ __webpack_exports__["default"] = (SelectGroup);

var _c;

$RefreshReg$(_c, "SelectGroup");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vU2VsZWN0LmpzIl0sIm5hbWVzIjpbIk9wdGlvbiIsIlNlbGVjdCIsIlNlbGVjdEdyb3VwIiwieHMiLCJsZyIsInNtIiwibWQiLCJuYW1lIiwib3B0aW9ucyIsImluZm8iLCJ2YWx1ZSIsIm9uQ2hhbmdlRnVuYyIsInN0b3J5SW5mbyIsInR5cGUiLCJ3aWR0aCIsInZhbCIsInNvcnQiLCJhIiwiYiIsImtleUEiLCJrZXlCIiwibWFwIiwib3B0aW9uIiwidGV4dFRyYW5zZm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFFUUEsTSxHQUFXQywyQyxDQUFYRCxNOztBQUVSLElBQU1FLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BWWQ7QUFBQSxNQVhKQyxFQVdJLFFBWEpBLEVBV0k7QUFBQSxNQVZKQyxFQVVJLFFBVkpBLEVBVUk7QUFBQSxNQVRKQyxFQVNJLFFBVEpBLEVBU0k7QUFBQSxNQVJKQyxFQVFJLFFBUkpBLEVBUUk7QUFBQSxNQVBKQyxJQU9JLFFBUEpBLElBT0k7QUFBQSxNQU5KQyxPQU1JLFFBTkpBLE9BTUk7QUFBQSxNQUxKQyxJQUtJLFFBTEpBLElBS0k7QUFBQSxNQUpKQyxLQUlJLFFBSkpBLEtBSUk7QUFBQSxNQUhKQyxZQUdJLFFBSEpBLFlBR0k7QUFBQSxNQUZKQyxTQUVJLFFBRkpBLFNBRUk7QUFBQSxNQURKQyxJQUNJLFFBREpBLElBQ0k7QUFDSixTQUNFLE1BQUMsd0NBQUQ7QUFBSyxNQUFFLEVBQUVWLEVBQVQ7QUFBYSxNQUFFLEVBQUVFLEVBQWpCO0FBQXFCLE1BQUUsRUFBRUMsRUFBekI7QUFBNkIsTUFBRSxFQUFFRixFQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBVyxTQUFLLEVBQUVHLElBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFB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WSxNQUFNLENBQUNaLEtBSGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FLR1ksTUFBTSxDQUFDZixJQUxWLENBREc7QUFBQSxHQVROLENBUEgsQ0F0Q0osQ0FERixDQURGLENBREY7QUF3RUQsQ0FyRkQ7O0tBQU1MLFc7QUF1RlNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3N0b3J5L25ldy40Yjc3ODJlODg0ODkxNTE5YTQzMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29sLCBQb3BvdmVyLCBTZWxlY3QsIEZvcm0gfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuY29uc3QgeyBPcHRpb24gfSA9IFNlbGVjdDtcclxuXHJcbmNvbnN0IFNlbGVjdEdyb3VwID0gKHtcclxuICB4cyxcclxuICBsZyxcclxuICBzbSxcclxuICBtZCxcclxuICBuYW1lLFxyXG4gIG9wdGlvbnMsXHJcbiAgaW5mbyxcclxuICB2YWx1ZSxcclxuICBvbkNoYW5nZUZ1bmMsXHJcbiAgc3RvcnlJbmZvLFxyXG4gIHR5cGUsXHJcbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPENvbCB4cz17eHN9IHNtPXtzbX0gbWQ9e21kfSBsZz17bGd9PlxyXG4gICAgICA8Rm9ybS5JdGVtIGxhYmVsPXtuYW1lfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImdlbnJlXCI+XHJcbiAgICAgICAgICAgIHtuYW1lfXtcIiBcIn1cclxuICAgICAgICAgICAge2luZm8gJiYgKFxyXG4gICAgICAgICAgICAgIDxQb3BvdmVyIHRpdGxlPXtpbmZvfSB0cmlnZ2VyPVwiY2xpY2tcIj5cclxuICAgICAgICAgICAgICAgIDxpb24taWNvbiBuYW1lPVwiaW5mb3JtYXRpb24tY2lyY2xlXCI+PC9pb24taWNvbj5cclxuICAgICAgICAgICAgICA8L1BvcG92ZXI+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAge3R5cGUgPT09IFwibXVsdGlwbGVcIiA/IChcclxuICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgIG1vZGU9XCJtdWx0aXBsZVwiXHJcbiAgICAgICAgICAgICAgYWxsb3dDbGVhclxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGxlYXNlIHNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsKSA9PiBvbkNoYW5nZUZ1bmMoeyAuLi5zdG9yeUluZm8sIFtuYW1lXTogdmFsIH0pfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge29wdGlvbnNcclxuICAgICAgICAgICAgICAgID8uc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBrZXlBID0gYS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGtleUIgPSBiLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgIC8vIENvbXBhcmUgdGhlIDIgZGF0ZXNcclxuICAgICAgICAgICAgICAgICAgaWYgKGtleUEgPCBrZXlCKSByZXR1cm4gLTE7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChrZXlBID4ga2V5QikgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5tYXAoKG9wdGlvbikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8T3B0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgdGV4dFRyYW5zZm9ybTogXCJjYXBpdGFsaXplXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICBrZXk9e29wdGlvbi52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17b3B0aW9uLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge29wdGlvbi5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICA8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICBhbGxvd0NsZWFyXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQbGVhc2Ugc2VsZWN0XCJcclxuICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWwpID0+IG9uQ2hhbmdlRnVuYyh7IC4uLnN0b3J5SW5mbywgW25hbWVdOiB2YWwgfSl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7b3B0aW9uc1xyXG4gICAgICAgICAgICAgICAgPy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGtleUEgPSBhLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAga2V5QiA9IGIubmFtZTtcclxuICAgICAgICAgICAgICAgICAgLy8gQ29tcGFyZSB0aGUgMiBkYXRlc1xyXG4gICAgICAgICAgICAgICAgICBpZiAoa2V5QSA8IGtleUIpIHJldHVybiAtMTtcclxuICAgICAgICAgICAgICAgICAgaWYgKGtleUEgPiBrZXlCKSByZXR1cm4gMTtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLm1hcCgob3B0aW9uKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxPcHRpb25cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB0ZXh0VHJhbnNmb3JtOiBcImNhcGl0YWxpemVcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17b3B0aW9uLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtvcHRpb24udmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7b3B0aW9uLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICA8L0NvbD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0R3JvdXA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=