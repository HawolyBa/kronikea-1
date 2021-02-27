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
    label: Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_3__["capitalizeFirstLetter"])(name),
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
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx("label", {
    htmlFor: "genre",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, name, " ", info && __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Popover"], {
    title: info,
    trigger: "click",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 15
    }
  }, __jsx("ion-icon", {
    name: "information-circle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
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
      lineNumber: 33,
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
        lineNumber: 51,
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
      lineNumber: 61,
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
        lineNumber: 78,
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

/***/ }),

/***/ "./utils/helpers.js":
/*!**************************!*\
  !*** ./utils/helpers.js ***!
  \**************************/
/*! exports provided: capitalizeFirstLetter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capitalizeFirstLetter", function() { return capitalizeFirstLetter; });
var capitalizeFirstLetter = function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vU2VsZWN0LmpzIiwid2VicGFjazovL19OX0UvLi91dGlscy9oZWxwZXJzLmpzIl0sIm5hbWVzIjpbIk9wdGlvbiIsIlNlbGVjdCIsIlNlbGVjdEdyb3VwIiwieHMiLCJsZyIsInNtIiwibWQiLCJuYW1lIiwib3B0aW9ucyIsImluZm8iLCJ2YWx1ZSIsIm9uQ2hhbmdlRnVuYyIsInN0b3J5SW5mbyIsInR5cGUiLCJjYXBpdGFsaXplRmlyc3RMZXR0ZXIiLCJ3aWR0aCIsInZhbCIsInNvcnQiLCJhIiwiYiIsImtleUEiLCJrZXlCIiwibWFwIiwib3B0aW9uIiwidGV4dFRyYW5zZm9ybSIsInN0cmluZyIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0lBRVFBLE0sR0FBV0MsMkMsQ0FBWEQsTTs7QUFFUixJQUFNRSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQVlkO0FBQUEsTUFYSkMsRUFXSSxRQVhKQSxFQVdJO0FBQUEsTUFWSkMsRUFVSSxRQVZKQSxFQVVJO0FBQUEsTUFUSkMsRUFTSSxRQVRKQSxFQVNJO0FBQUEsTUFSSkMsRUFRSSxRQVJKQSxFQVFJO0FBQUEsTUFQSkMsSUFPSSxRQVBKQSxJQU9JO0FBQUEsTUFOSkMsT0FNSSxRQU5KQSxPQU1JO0FBQUEsTUFMSkMsSUFLSSxRQUxKQSxJQUtJO0FBQUEsTUFKSkMsS0FJSSxRQUpKQSxLQUlJO0FBQUEsTUFISkMsWUFHSSxRQUhKQSxZQUdJO0FBQUEsTUFGSkMsU0FFSSxRQUZKQSxTQUVJO0FBQUEsTUFESkMsSUFDSSxRQURKQSxJQUNJO0FBQ0osU0FDRSxNQUFDLHdDQUFEO0FBQUssTUFBRSxFQUFFVixFQUFUO0FBQWEsTUFBRSxFQUFFRSxFQUFqQjtBQUFxQixNQUFFLEVBQUVDLEVBQXpCO0FBQTZCLE1BQUUsRUFBRUYsRUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQVcsU0FBSyxFQUFFVSw0RUFBcUIsQ0FBQ1AsSUFBRCxDQUF2QztBQUErQyxTQUFLLEVBQUUsS0FBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU8sV0FBTyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQSxJQURILEVBQ1MsR0FEVCxFQUVHRSxJQUFJLElBQ0gsTUFBQyw0Q0FBRDtBQUFTLFNBQUssRUFBRUEsSUFBaEI7QUFBc0IsV0FBTyxFQUFDLE9BQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFVLFFBQUksRUFBQyxvQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FISixDQURGLEVBU0dJLElBQUksS0FBSyxVQUFULEdBQ0MsTUFBQywyQ0FBRDtBQUNFLFFBQUksRUFBQyxVQURQO0FBRUUsY0FBVSxNQUZaO0FBR0UsU0FBSyxFQUFFO0FBQUVFLFdBQUssRUFBRTtBQUFULEtBSFQ7QUFJRSxlQUFXLEVBQUMsZUFKZDtBQUtFLFNBQUssRUFBRUwsS0FMVDtBQU1FLFlBQVEsRUFBRSxrQkFBQ00sR0FBRDtBQUFBLGFBQVNMLFlBQVksaUNBQU1DLFNBQU4scUdBQWtCTCxJQUFsQixFQUF5QlMsR0FBekIsR0FBckI7QUFBQSxLQU5aO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FRR1IsT0FSSCxhQVFHQSxPQVJILHVCQVFHQSxPQUFPLENBQ0pTLElBREgsQ0FDUSxVQUFDQyxDQUFELEVBQUlDLENBQUosRUFBVTtBQUNmLFFBQU1DLElBQUksR0FBR0YsQ0FBQyxDQUFDWCxJQUFmO0FBQUEsUUFDRWMsSUFBSSxHQUFHRixDQUFDLENBQUNaLElBRFgsQ0FEZSxDQUdmOztBQUNBLFFBQUlhLElBQUksR0FBR0MsSUFBWCxFQUFpQixPQUFPLENBQUMsQ0FBUjtBQUNqQixRQUFJRCxJQUFJLEdBQUdDLElBQVgsRUFBaUIsT0FBTyxDQUFQO0FBQ2pCLFdBQU8sQ0FBUDtBQUNELEdBUkYsRUFTRUMsR0FURixDQVNNLFVBQUNDLE1BQUQ7QUFBQSxXQUNILE1BQUMsTUFBRDtBQUNFLFdBQUssRUFBRTtBQUFFQyxxQkFBYSxFQUFFO0FBQWpCLE9BRFQ7QUFFRSxTQUFHLEVBQUVELE1BQU0sQ0FBQ2IsS0FGZDtBQUdFLFdBQUssRUFBRWEsTUFBTSxDQUFDYixLQUhoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BS0dhLE1BQU0sQ0FBQ2hCLElBTFYsQ0FERztBQUFBLEdBVE4sQ0FSSCxDQURELEdBNkJDLE1BQUMsMkNBQUQ7QUFDRSxjQUFVLE1BRFo7QUFFRSxTQUFLLEVBQUU7QUFBRVEsV0FBSyxFQUFFO0FBQVQsS0FGVDtBQUdFLGVBQVcsRUFBQyxlQUhkO0FBSUUsU0FBSyxFQUFFTCxLQUpUO0FBS0UsWUFBUSxFQUFFLGtCQUFDTSxHQUFEO0FBQUEsYUFBU0wsWUFBWSxpQ0FBTUMsU0FBTixxR0FBa0JMLElBQWxCLEVBQXlCUyxHQUF6QixHQUFyQjtBQUFBLEtBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU9HUixPQVBILGFBT0dBLE9BUEgsdUJBT0dBLE9BQU8sQ0FDSlMsSUFESCxDQUNRLFVBQUNDLENBQUQsRUFBSUMsQ0FBSixFQUFVO0FBQ2YsUUFBTUMsSUFBSSxHQUFHRixDQUFDLENBQUNYLElBQWY7QUFBQSxRQUNFYyxJQUFJLEdBQUdGLENBQUMsQ0FBQ1osSUFEWCxDQURlLENBR2Y7O0FBQ0EsUUFBSWEsSUFBSSxHQUFHQyxJQUFYLEVBQWlCLE9BQU8sQ0FBQyxDQUFSO0FBQ2pCLFFBQUlELElBQUksR0FBR0MsSUFBWCxFQUFpQixPQUFPLENBQVA7QUFDakIsV0FBTyxDQUFQO0FBQ0QsR0FSRixFQVNFQyxHQVRGLENBU00sVUFBQ0MsTUFBRDtBQUFBLFdBQ0gsTUFBQyxNQUFEO0FBQ0UsV0FBSyxFQUFFO0FBQUVDLHFCQUFhLEVBQUU7QUFBakIsT0FEVDtBQUVFLFNBQUcsRUFBRUQsTUFBTSxDQUFDYixLQUZkO0FBR0UsV0FBSyxFQUFFYSxNQUFNLENBQUNiLEtBSGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FLR2EsTUFBTSxDQUFDaEIsSUFMVixDQURHO0FBQUEsR0FUTixDQVBILENBdENKLENBREYsQ0FERixDQURGO0FBd0VELENBckZEOztLQUFNTCxXO0FBdUZTQSwwRUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdGQTtBQUFBO0FBQU8sSUFBTVkscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixDQUFDVyxNQUFEO0FBQUEsU0FDbkNBLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLENBQWQsRUFBaUJDLFdBQWpCLEtBQWlDRixNQUFNLENBQUNHLEtBQVAsQ0FBYSxDQUFiLENBREU7QUFBQSxDQUE5QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zdG9yeS9uZXcuZjg5NzYzNzYzYzFjNmU0NGYwYmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbCwgUG9wb3ZlciwgU2VsZWN0LCBGb3JtIH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmltcG9ydCB7IGNhcGl0YWxpemVGaXJzdExldHRlciB9IGZyb20gXCIuLi8uLi91dGlscy9oZWxwZXJzXCI7XHJcblxyXG5jb25zdCB7IE9wdGlvbiB9ID0gU2VsZWN0O1xyXG5cclxuY29uc3QgU2VsZWN0R3JvdXAgPSAoe1xyXG4gIHhzLFxyXG4gIGxnLFxyXG4gIHNtLFxyXG4gIG1kLFxyXG4gIG5hbWUsXHJcbiAgb3B0aW9ucyxcclxuICBpbmZvLFxyXG4gIHZhbHVlLFxyXG4gIG9uQ2hhbmdlRnVuYyxcclxuICBzdG9yeUluZm8sXHJcbiAgdHlwZSxcclxufSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q29sIHhzPXt4c30gc209e3NtfSBtZD17bWR9IGxnPXtsZ30+XHJcbiAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9e2NhcGl0YWxpemVGaXJzdExldHRlcihuYW1lKX0gY29sb249e2ZhbHNlfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImdlbnJlXCI+XHJcbiAgICAgICAgICAgIHtuYW1lfXtcIiBcIn1cclxuICAgICAgICAgICAge2luZm8gJiYgKFxyXG4gICAgICAgICAgICAgIDxQb3BvdmVyIHRpdGxlPXtpbmZvfSB0cmlnZ2VyPVwiY2xpY2tcIj5cclxuICAgICAgICAgICAgICAgIDxpb24taWNvbiBuYW1lPVwiaW5mb3JtYXRpb24tY2lyY2xlXCI+PC9pb24taWNvbj5cclxuICAgICAgICAgICAgICA8L1BvcG92ZXI+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAge3R5cGUgPT09IFwibXVsdGlwbGVcIiA/IChcclxuICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgIG1vZGU9XCJtdWx0aXBsZVwiXHJcbiAgICAgICAgICAgICAgYWxsb3dDbGVhclxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGxlYXNlIHNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsKSA9PiBvbkNoYW5nZUZ1bmMoeyAuLi5zdG9yeUluZm8sIFtuYW1lXTogdmFsIH0pfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge29wdGlvbnNcclxuICAgICAgICAgICAgICAgID8uc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBrZXlBID0gYS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGtleUIgPSBiLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgIC8vIENvbXBhcmUgdGhlIDIgZGF0ZXNcclxuICAgICAgICAgICAgICAgICAgaWYgKGtleUEgPCBrZXlCKSByZXR1cm4gLTE7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChrZXlBID4ga2V5QikgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5tYXAoKG9wdGlvbikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8T3B0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgdGV4dFRyYW5zZm9ybTogXCJjYXBpdGFsaXplXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICBrZXk9e29wdGlvbi52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17b3B0aW9uLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge29wdGlvbi5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICA8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICBhbGxvd0NsZWFyXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQbGVhc2Ugc2VsZWN0XCJcclxuICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWwpID0+IG9uQ2hhbmdlRnVuYyh7IC4uLnN0b3J5SW5mbywgW25hbWVdOiB2YWwgfSl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7b3B0aW9uc1xyXG4gICAgICAgICAgICAgICAgPy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGtleUEgPSBhLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAga2V5QiA9IGIubmFtZTtcclxuICAgICAgICAgICAgICAgICAgLy8gQ29tcGFyZSB0aGUgMiBkYXRlc1xyXG4gICAgICAgICAgICAgICAgICBpZiAoa2V5QSA8IGtleUIpIHJldHVybiAtMTtcclxuICAgICAgICAgICAgICAgICAgaWYgKGtleUEgPiBrZXlCKSByZXR1cm4gMTtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLm1hcCgob3B0aW9uKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxPcHRpb25cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB0ZXh0VHJhbnNmb3JtOiBcImNhcGl0YWxpemVcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17b3B0aW9uLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtvcHRpb24udmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7b3B0aW9uLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICA8L0NvbD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0R3JvdXA7XHJcbiIsImV4cG9ydCBjb25zdCBjYXBpdGFsaXplRmlyc3RMZXR0ZXIgPSAoc3RyaW5nKSA9PlxyXG4gIHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==