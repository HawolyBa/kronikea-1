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
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/helpers */ "./utils/helpers.js");


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
      lineNumber: 21,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
    label: info ? __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Popover"], {
      title: info,
      trigger: "click",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 13
      }
    }, __jsx("ion-icon", {
      name: "information-circle",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 15
      }
    })) : "",
    colon: false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "input-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx("label", {
    htmlFor: "genre",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }), type === "multiple" ? __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Select"], {
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
      lineNumber: 37,
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
        lineNumber: 55,
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
      lineNumber: 65,
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
        lineNumber: 82,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vU2VsZWN0LmpzIl0sIm5hbWVzIjpbIk9wdGlvbiIsIlNlbGVjdCIsIlNlbGVjdEdyb3VwIiwieHMiLCJsZyIsInNtIiwibWQiLCJuYW1lIiwib3B0aW9ucyIsImluZm8iLCJ2YWx1ZSIsIm9uQ2hhbmdlRnVuYyIsInN0b3J5SW5mbyIsInR5cGUiLCJ3aWR0aCIsInZhbCIsInNvcnQiLCJhIiwiYiIsImtleUEiLCJrZXlCIiwibWFwIiwib3B0aW9uIiwidGV4dFRyYW5zZm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7SUFFUUEsTSxHQUFXQywyQyxDQUFYRCxNOztBQUVSLElBQU1FLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BWWQ7QUFBQSxNQVhKQyxFQVdJLFFBWEpBLEVBV0k7QUFBQSxNQVZKQyxFQVVJLFFBVkpBLEVBVUk7QUFBQSxNQVRKQyxFQVNJLFFBVEpBLEVBU0k7QUFBQSxNQVJKQyxFQVFJLFFBUkpBLEVBUUk7QUFBQSxNQVBKQyxJQU9JLFFBUEpBLElBT0k7QUFBQSxNQU5KQyxPQU1JLFFBTkpBLE9BTUk7QUFBQSxNQUxKQyxJQUtJLFFBTEpBLElBS0k7QUFBQSxNQUpKQyxLQUlJLFFBSkpBLEtBSUk7QUFBQSxNQUhKQyxZQUdJLFFBSEpBLFlBR0k7QUFBQSxNQUZKQyxTQUVJLFFBRkpBLFNBRUk7QUFBQSxNQURKQyxJQUNJLFFBREpBLElBQ0k7QUFDSixTQUNFLE1BQUMsd0NBQUQ7QUFBSyxNQUFFLEVBQUVWLEVBQVQ7QUFBYSxNQUFFLEVBQUVFLEVBQWpCO0FBQXFCLE1BQUUsRUFBRUMsRUFBekI7QUFBNkIsTUFBRSxFQUFFRixFQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFDRSxTQUFLLEVBQ0hLLElBQUksR0FDRixNQUFDLDRDQUFEO0FBQVMsV0FB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QUFFWSxNQUFNLENBQUNaLEtBSGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FLR1ksTUFBTSxDQUFDZixJQUxWLENBREc7QUFBQSxHQVROLENBUEgsQ0EvQkosQ0FaRixDQURGLENBREY7QUE0RUQsQ0F6RkQ7O0tBQU1MLFc7QUEyRlNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3N0b3J5L25ldy5mNDRjMjQ4MGE2ODA5YTBjNjk3YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29sLCBQb3BvdmVyLCBTZWxlY3QsIEZvcm0gfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuaW1wb3J0IHsgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2hlbHBlcnNcIjtcclxuXHJcbmNvbnN0IHsgT3B0aW9uIH0gPSBTZWxlY3Q7XHJcblxyXG5jb25zdCBTZWxlY3RHcm91cCA9ICh7XHJcbiAgeHMsXHJcbiAgbGcsXHJcbiAgc20sXHJcbiAgbWQsXHJcbiAgbmFtZSxcclxuICBvcHRpb25zLFxyXG4gIGluZm8sXHJcbiAgdmFsdWUsXHJcbiAgb25DaGFuZ2VGdW5jLFxyXG4gIHN0b3J5SW5mbyxcclxuICB0eXBlLFxyXG59KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb2wgeHM9e3hzfSBzbT17c219IG1kPXttZH0gbGc9e2xnfT5cclxuICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgIGxhYmVsPXtcclxuICAgICAgICAgIGluZm8gPyAoXHJcbiAgICAgICAgICAgIDxQb3BvdmVyIHRpdGxlPXtpbmZvfSB0cmlnZ2VyPVwiY2xpY2tcIj5cclxuICAgICAgICAgICAgICA8aW9uLWljb24gbmFtZT1cImluZm9ybWF0aW9uLWNpcmNsZVwiPjwvaW9uLWljb24+XHJcbiAgICAgICAgICAgIDwvUG9wb3Zlcj5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgICAgY29sb249e2ZhbHNlfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJnZW5yZVwiPjwvbGFiZWw+XHJcbiAgICAgICAgICB7dHlwZSA9PT0gXCJtdWx0aXBsZVwiID8gKFxyXG4gICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgbW9kZT1cIm11bHRpcGxlXCJcclxuICAgICAgICAgICAgICBhbGxvd0NsZWFyXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQbGVhc2Ugc2VsZWN0XCJcclxuICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWwpID0+IG9uQ2hhbmdlRnVuYyh7IC4uLnN0b3J5SW5mbywgW25hbWVdOiB2YWwgfSl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7b3B0aW9uc1xyXG4gICAgICAgICAgICAgICAgPy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGtleUEgPSBhLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAga2V5QiA9IGIubmFtZTtcclxuICAgICAgICAgICAgICAgICAgLy8gQ29tcGFyZSB0aGUgMiBkYXRlc1xyXG4gICAgICAgICAgICAgICAgICBpZiAoa2V5QSA8IGtleUIpIHJldHVybiAtMTtcclxuICAgICAgICAgICAgICAgICAgaWYgKGtleUEgPiBrZXlCKSByZXR1cm4gMTtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLm1hcCgob3B0aW9uKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxPcHRpb25cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB0ZXh0VHJhbnNmb3JtOiBcImNhcGl0YWxpemVcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17b3B0aW9uLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtvcHRpb24udmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7b3B0aW9uLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgIGFsbG93Q2xlYXJcclxuICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBsZWFzZSBzZWxlY3RcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbCkgPT4gb25DaGFuZ2VGdW5jKHsgLi4uc3RvcnlJbmZvLCBbbmFtZV06IHZhbCB9KX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtvcHRpb25zXHJcbiAgICAgICAgICAgICAgICA/LnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgY29uc3Qga2V5QSA9IGEubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBrZXlCID0gYi5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAvLyBDb21wYXJlIHRoZSAyIGRhdGVzXHJcbiAgICAgICAgICAgICAgICAgIGlmIChrZXlBIDwga2V5QikgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgICAgICAgICBpZiAoa2V5QSA+IGtleUIpIHJldHVybiAxO1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAubWFwKChvcHRpb24pID0+IChcclxuICAgICAgICAgICAgICAgICAgPE9wdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHRleHRUcmFuc2Zvcm06IFwiY2FwaXRhbGl6ZVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtvcHRpb24udmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e29wdGlvbi52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtvcHRpb24ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0Zvcm0uSXRlbT5cclxuICAgIDwvQ29sPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RHcm91cDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==