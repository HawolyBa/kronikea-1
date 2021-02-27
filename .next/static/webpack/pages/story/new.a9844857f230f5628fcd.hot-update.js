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
  }, __jsx("div", {
    className: "input-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx("label", {
    htmlFor: "genre",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, name, " ", info && __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Popover"], {
    title: info,
    trigger: "click",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, __jsx("ion-icon", {
    name: "information-circle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 15
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
      lineNumber: 30,
      columnNumber: 11
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
        lineNumber: 48,
        columnNumber: 17
      }
    }, option.name);
  })) : __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Select"], {
    label: name,
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
      lineNumber: 58,
      columnNumber: 11
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
        columnNumber: 17
      }
    }, option.name);
  }))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vU2VsZWN0LmpzIl0sIm5hbWVzIjpbIk9wdGlvbiIsIlNlbGVjdCIsIlNlbGVjdEdyb3VwIiwieHMiLCJsZyIsInNtIiwibWQiLCJuYW1lIiwib3B0aW9ucyIsImluZm8iLCJ2YWx1ZSIsIm9uQ2hhbmdlRnVuYyIsInN0b3J5SW5mbyIsInR5cGUiLCJ3aWR0aCIsInZhbCIsInNvcnQiLCJhIiwiYiIsImtleUEiLCJrZXlCIiwibWFwIiwib3B0aW9uIiwidGV4dFRyYW5zZm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFFUUEsTSxHQUFXQywyQyxDQUFYRCxNOztBQUVSLElBQU1FLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BWWQ7QUFBQSxNQVhKQyxFQVdJLFFBWEpBLEVBV0k7QUFBQSxNQVZKQyxFQVVJLFFBVkpBLEVBVUk7QUFBQSxNQVRKQyxFQVNJLFFBVEpBLEVBU0k7QUFBQSxNQVJKQyxFQVFJLFFBUkpBLEVBUUk7QUFBQSxNQVBKQyxJQU9JLFFBUEpBLElBT0k7QUFBQSxNQU5KQyxPQU1JLFFBTkpBLE9BTUk7QUFBQSxNQUxKQyxJQUtJLFFBTEpBLElBS0k7QUFBQSxNQUpKQyxLQUlJLFFBSkpBLEtBSUk7QUFBQSxNQUhKQyxZQUdJLFFBSEpBLFlBR0k7QUFBQSxNQUZKQyxTQUVJLFFBRkpBLFNBRUk7QUFBQSxNQURKQyxJQUNJLFFBREpBLElBQ0k7QUFDSixTQUNFLE1BQUMsd0NBQUQ7QUFBSyxNQUFFLEVBQUVWLEVBQVQ7QUFBYSxNQUFFLEVBQUVFLEVBQWpCO0FBQXFCLE1BQUUsRUFBRUMsRUFBekI7QUFBNkIsTUFBRSxFQUFFRixFQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTyxXQUFPLEVB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QU0sQ0FBQ2YsSUFMVixDQURHO0FBQUEsR0FUTixDQVJILENBdENKLENBREYsQ0FERjtBQXVFRCxDQXBGRDs7S0FBTUwsVztBQXNGU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3RvcnkvbmV3LmE5ODQ0ODU3ZjIzMGY1NjI4ZmNkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2wsIFBvcG92ZXIsIFNlbGVjdCB9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5jb25zdCB7IE9wdGlvbiB9ID0gU2VsZWN0O1xyXG5cclxuY29uc3QgU2VsZWN0R3JvdXAgPSAoe1xyXG4gIHhzLFxyXG4gIGxnLFxyXG4gIHNtLFxyXG4gIG1kLFxyXG4gIG5hbWUsXHJcbiAgb3B0aW9ucyxcclxuICBpbmZvLFxyXG4gIHZhbHVlLFxyXG4gIG9uQ2hhbmdlRnVuYyxcclxuICBzdG9yeUluZm8sXHJcbiAgdHlwZSxcclxufSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q29sIHhzPXt4c30gc209e3NtfSBtZD17bWR9IGxnPXtsZ30+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImdlbnJlXCI+XHJcbiAgICAgICAgICB7bmFtZX17XCIgXCJ9XHJcbiAgICAgICAgICB7aW5mbyAmJiAoXHJcbiAgICAgICAgICAgIDxQb3BvdmVyIHRpdGxlPXtpbmZvfSB0cmlnZ2VyPVwiY2xpY2tcIj5cclxuICAgICAgICAgICAgICA8aW9uLWljb24gbmFtZT1cImluZm9ybWF0aW9uLWNpcmNsZVwiPjwvaW9uLWljb24+XHJcbiAgICAgICAgICAgIDwvUG9wb3Zlcj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICB7dHlwZSA9PT0gXCJtdWx0aXBsZVwiID8gKFxyXG4gICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICBtb2RlPVwibXVsdGlwbGVcIlxyXG4gICAgICAgICAgICBhbGxvd0NsZWFyXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBsZWFzZSBzZWxlY3RcIlxyXG4gICAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsKSA9PiBvbkNoYW5nZUZ1bmMoeyAuLi5zdG9yeUluZm8sIFtuYW1lXTogdmFsIH0pfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7b3B0aW9uc1xyXG4gICAgICAgICAgICAgID8uc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qga2V5QSA9IGEubmFtZSxcclxuICAgICAgICAgICAgICAgICAga2V5QiA9IGIubmFtZTtcclxuICAgICAgICAgICAgICAgIC8vIENvbXBhcmUgdGhlIDIgZGF0ZXNcclxuICAgICAgICAgICAgICAgIGlmIChrZXlBIDwga2V5QikgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgICAgICAgaWYgKGtleUEgPiBrZXlCKSByZXR1cm4gMTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgLm1hcCgob3B0aW9uKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8T3B0aW9uXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHRleHRUcmFuc2Zvcm06IFwiY2FwaXRhbGl6ZVwiIH19XHJcbiAgICAgICAgICAgICAgICAgIGtleT17b3B0aW9uLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17b3B0aW9uLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7b3B0aW9uLm5hbWV9XHJcbiAgICAgICAgICAgICAgICA8L09wdGlvbj5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgIGxhYmVsPXtuYW1lfVxyXG4gICAgICAgICAgICBhbGxvd0NsZWFyXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBsZWFzZSBzZWxlY3RcIlxyXG4gICAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsKSA9PiBvbkNoYW5nZUZ1bmMoeyAuLi5zdG9yeUluZm8sIFtuYW1lXTogdmFsIH0pfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7b3B0aW9uc1xyXG4gICAgICAgICAgICAgID8uc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qga2V5QSA9IGEubmFtZSxcclxuICAgICAgICAgICAgICAgICAga2V5QiA9IGIubmFtZTtcclxuICAgICAgICAgICAgICAgIC8vIENvbXBhcmUgdGhlIDIgZGF0ZXNcclxuICAgICAgICAgICAgICAgIGlmIChrZXlBIDwga2V5QikgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgICAgICAgaWYgKGtleUEgPiBrZXlCKSByZXR1cm4gMTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgLm1hcCgob3B0aW9uKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8T3B0aW9uXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHRleHRUcmFuc2Zvcm06IFwiY2FwaXRhbGl6ZVwiIH19XHJcbiAgICAgICAgICAgICAgICAgIGtleT17b3B0aW9uLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17b3B0aW9uLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7b3B0aW9uLm5hbWV9XHJcbiAgICAgICAgICAgICAgICA8L09wdGlvbj5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9Db2w+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlbGVjdEdyb3VwO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9