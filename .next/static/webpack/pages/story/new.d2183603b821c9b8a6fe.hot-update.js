webpackHotUpdate_N_E("pages/story/new",{

/***/ "./components/forms/Tags.js":
/*!**********************************!*\
  !*** ./components/forms/Tags.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");



var _this = undefined,
    _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\components\\forms\\Tags.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



var Tags = function Tags(_ref) {
  _s();

  var value = _ref.value,
      onChangeFunc = _ref.onChangeFunc;
  var inputButton = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef();
  var editInputButton = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(["Unremovable", "Tag 2", "Tag 3"]),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      tags = _React$useState2[0],
      setTags = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState3, 2),
      inputVisible = _React$useState4[0],
      setInputVisible = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(""),
      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState5, 2),
      inputValue = _React$useState6[0],
      setInputValue = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(-1),
      _React$useState8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState7, 2),
      editInputIndex = _React$useState8[0],
      setEditInputIndex = _React$useState8[1];

  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(""),
      _React$useState10 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState9, 2),
      editInputValue = _React$useState10[0],
      setEditInputValue = _React$useState10[1];

  var handleClose = function handleClose(removedTag) {
    return setTags(tags.filter(function (tag) {
      return tags !== removedTag;
    }));
  };

  var showInput = function showInput() {
    setInputVisible(true); //console.log();
    //editInputButton.current.focus();
    //inputButton.current.focus();
  };

  var handleInputChange = function handleInputChange(e) {
    return setInputValue(e.target.value);
  };

  var handleInputConfirm = function handleInputConfirm() {
    var newTags = tags;

    if (inputValue && tags.indexOf(inputValue) === -1) {
      newTags = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(newTags), [inputValue]);
    }

    setTags(newTags);
    setInputValue("");
    setInputVisible(false);
  };

  var handleEditInputChange = function handleEditInputChange(e) {
    return setEditInputValue(e.target.value);
  };

  var handleEditInputConfirm = function handleEditInputConfirm() {
    var newTags = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(tags);

    newTags[editInputIndex] = editInputValue;
    setTags(newTags);
    setEditInputIndex(-1);
    setEditInputValue("");
  };

  var keyPress = function keyPress(e) {
    console.log(e.key);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, tags === null || tags === void 0 ? void 0 : tags.map(function (tag, i) {
    if (editInputIndex === i) {
      return __jsx("input", {
        key: i,
        onChange: handleEditInputChange,
        onBlur: handleEditInputConfirm,
        onPressEnter: handleEditInputConfirm,
        value: editInputValue,
        ref: editInputButton,
        className: "form-input",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 13
        }
      });
    }

    var isLongTag = tag.length > 20;

    var TagElem = __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Tag"], {
      onClose: function onClose() {
        return handleClose(tag);
      },
      closable: true,
      key: tag,
      className: "edit-tag",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 11
      }
    }, __jsx("span", {
      onDoubleClick: function onDoubleClick(e) {
        if (i !== 0) {
          setEditInputIndex(i);
          setEditInputValue(tag);
          editInputButton.focus();
          e.preventDefault();
        }
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 13
      }
    }, isLongTag ? "".concat(tag.slice(0, 20), "...") : tag));

    return isLongTag ? __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], {
      title: tag,
      key: tag,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 11
      }
    }, TagElem) : TagElem;
  }), inputVisible && __jsx("input", {
    onChange: handleInputChange,
    onBlur: handleInputConfirm,
    onKeyDown: function onKeyDown(e) {
      if (e.key === "Enter") {
        handleInputConfirm();
      }
    },
    value: inputValue,
    type: "text",
    ref: inputButton,
    className: "form-input",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 9
    }
  }), !inputVisible && __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Tag"], {
    className: "site-tag-plus",
    onClick: showInput,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 9
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["PlusOutlined"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 11
    }
  }), " New Tag"));
};

_s(Tags, "Tk7UyboWwRYGMOiPKcNApuvmCyw=");

_c = Tags;
/* harmony default export */ __webpack_exports__["default"] = (Tags);

var _c;

$RefreshReg$(_c, "Tags");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb3Jtcy9UYWdzLmpzIl0sIm5hbWVzIjpbIlRhZ3MiLCJ2YWx1ZSIsIm9uQ2hhbmdlRnVuYyIsImlucHV0QnV0dG9uIiwiUmVhY3QiLCJ1c2VSZWYiLCJlZGl0SW5wdXRCdXR0b24iLCJ1c2VTdGF0ZSIsInRhZ3MiLCJzZXRUYWdzIiwiaW5wdXRWaXNpYmxlIiwic2V0SW5wdXRWaXNpYmxlIiwiaW5wdXRWYWx1ZSIsInNldElucHV0VmFsdWUiLCJlZGl0SW5wdXRJbmRleCIsInNldEVkaXRJbnB1dEluZGV4IiwiZWRpdElucHV0VmFsdWUiLCJzZXRFZGl0SW5wdXRWYWx1ZSIsImhhbmRsZUNsb3NlIiwicmVtb3ZlZFRhZyIsImZpbHRlciIsInRhZyIsInNob3dJbnB1dCIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZSIsInRhcmdldCIsImhhbmRsZUlucHV0Q29uZmlybSIsIm5ld1RhZ3MiLCJpbmRleE9mIiwiaGFuZGxlRWRpdElucHV0Q2hhbmdlIiwiaGFuZGxlRWRpdElucHV0Q29uZmlybSIsImtleVByZXNzIiwiY29uc29sZSIsImxvZyIsImtleSIsIm1hcCIsImkiLCJpc0xvbmdUYWciLCJsZW5ndGgiLCJUYWdFbGVtIiwiZm9jdXMiLCJwcmV2ZW50RGVmYXVsdCIsInNsaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBNkI7QUFBQTs7QUFBQSxNQUExQkMsS0FBMEIsUUFBMUJBLEtBQTBCO0FBQUEsTUFBbkJDLFlBQW1CLFFBQW5CQSxZQUFtQjtBQUN4QyxNQUFNQyxXQUFXLEdBQUdDLDRDQUFLLENBQUNDLE1BQU4sRUFBcEI7QUFDQSxNQUFNQyxlQUFlLEdBQUdGLDRDQUFLLENBQUNDLE1BQU4sRUFBeEI7O0FBRndDLHdCQUdoQkQsNENBQUssQ0FBQ0csUUFBTixDQUFlLENBQUMsYUFBRCxF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QUMsQ0FBQ1UsR0FBRixLQUFVLE9BQWQsRUFBdUI7QUFDckJSLDBCQUFrQjtBQUNuQjtBQUNGLEtBUEg7QUFRRSxTQUFLLEVBQUVkLFVBUlQ7QUFTRSxRQUFJLEVBQUMsTUFUUDtBQVVFLE9BQUcsRUFBRVQsV0FWUDtBQVdFLGFBQVMsRUFBQyxZQVhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUE5Q0osRUE0REcsQ0FBQ08sWUFBRCxJQUNDLE1BQUMsd0NBQUQ7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUErQixXQUFPLEVBQUVZLFNBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixhQTdESixDQURGO0FBb0VELENBbEhEOztHQUFNdEIsSTs7S0FBQUEsSTtBQW9IU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3RvcnkvbmV3LmQyMTgzNjAzYjgyMWM5YjhhNmZlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUYWcsIFRvb2x0aXAgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyBQbHVzT3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuXHJcbmNvbnN0IFRhZ3MgPSAoeyB2YWx1ZSwgb25DaGFuZ2VGdW5jIH0pID0+IHtcclxuICBjb25zdCBpbnB1dEJ1dHRvbiA9IFJlYWN0LnVzZVJlZigpO1xyXG4gIGNvbnN0IGVkaXRJbnB1dEJ1dHRvbiA9IFJlYWN0LnVzZVJlZigpO1xyXG4gIGNvbnN0IFt0YWdzLCBzZXRUYWdzXSA9IFJlYWN0LnVzZVN0YXRlKFtcIlVucmVtb3ZhYmxlXCIsIFwiVGFnIDJcIiwgXCJUYWcgM1wiXSk7XHJcbiAgY29uc3QgW2lucHV0VmlzaWJsZSwgc2V0SW5wdXRWaXNpYmxlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaW5wdXRWYWx1ZSwgc2V0SW5wdXRWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZWRpdElucHV0SW5kZXgsIHNldEVkaXRJbnB1dEluZGV4XSA9IFJlYWN0LnVzZVN0YXRlKC0xKTtcclxuICBjb25zdCBbZWRpdElucHV0VmFsdWUsIHNldEVkaXRJbnB1dFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDbG9zZSA9IChyZW1vdmVkVGFnKSA9PlxyXG4gICAgc2V0VGFncyh0YWdzLmZpbHRlcigodGFnKSA9PiB0YWdzICE9PSByZW1vdmVkVGFnKSk7XHJcblxyXG4gIGNvbnN0IHNob3dJbnB1dCA9ICgpID0+IHtcclxuICAgIHNldElucHV0VmlzaWJsZSh0cnVlKTtcclxuICAgIC8vY29uc29sZS5sb2coKTtcclxuICAgIC8vZWRpdElucHV0QnV0dG9uLmN1cnJlbnQuZm9jdXMoKTtcclxuICAgIC8vaW5wdXRCdXR0b24uY3VycmVudC5mb2N1cygpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGUpID0+IHNldElucHV0VmFsdWUoZS50YXJnZXQudmFsdWUpO1xyXG5cclxuICBjb25zdCBoYW5kbGVJbnB1dENvbmZpcm0gPSAoKSA9PiB7XHJcbiAgICBsZXQgbmV3VGFncyA9IHRhZ3M7XHJcbiAgICBpZiAoaW5wdXRWYWx1ZSAmJiB0YWdzLmluZGV4T2YoaW5wdXRWYWx1ZSkgPT09IC0xKSB7XHJcbiAgICAgIG5ld1RhZ3MgPSBbLi4ubmV3VGFncywgaW5wdXRWYWx1ZV07XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VGFncyhuZXdUYWdzKTtcclxuICAgIHNldElucHV0VmFsdWUoXCJcIik7XHJcbiAgICBzZXRJbnB1dFZpc2libGUoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUVkaXRJbnB1dENoYW5nZSA9IChlKSA9PiBzZXRFZGl0SW5wdXRWYWx1ZShlLnRhcmdldC52YWx1ZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUVkaXRJbnB1dENvbmZpcm0gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBuZXdUYWdzID0gWy4uLnRhZ3NdO1xyXG4gICAgbmV3VGFnc1tlZGl0SW5wdXRJbmRleF0gPSBlZGl0SW5wdXRWYWx1ZTtcclxuICAgIHNldFRhZ3MobmV3VGFncyk7XHJcbiAgICBzZXRFZGl0SW5wdXRJbmRleCgtMSk7XHJcbiAgICBzZXRFZGl0SW5wdXRWYWx1ZShcIlwiKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBrZXlQcmVzcyA9IChlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhlLmtleSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHt0YWdzPy5tYXAoKHRhZywgaSkgPT4ge1xyXG4gICAgICAgIGlmIChlZGl0SW5wdXRJbmRleCA9PT0gaSkge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVFZGl0SW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVFZGl0SW5wdXRDb25maXJtfVxyXG4gICAgICAgICAgICAgIG9uUHJlc3NFbnRlcj17aGFuZGxlRWRpdElucHV0Q29uZmlybX1cclxuICAgICAgICAgICAgICB2YWx1ZT17ZWRpdElucHV0VmFsdWV9XHJcbiAgICAgICAgICAgICAgcmVmPXtlZGl0SW5wdXRCdXR0b259XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1pbnB1dFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBpc0xvbmdUYWcgPSB0YWcubGVuZ3RoID4gMjA7XHJcbiAgICAgICAgY29uc3QgVGFnRWxlbSA9IChcclxuICAgICAgICAgIDxUYWdcclxuICAgICAgICAgICAgb25DbG9zZT17KCkgPT4gaGFuZGxlQ2xvc2UodGFnKX1cclxuICAgICAgICAgICAgY2xvc2FibGU9e3RydWV9XHJcbiAgICAgICAgICAgIGtleT17dGFnfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJlZGl0LXRhZ1wiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgb25Eb3VibGVDbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChpICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgIHNldEVkaXRJbnB1dEluZGV4KGkpO1xyXG4gICAgICAgICAgICAgICAgICBzZXRFZGl0SW5wdXRWYWx1ZSh0YWcpO1xyXG4gICAgICAgICAgICAgICAgICBlZGl0SW5wdXRCdXR0b24uZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7aXNMb25nVGFnID8gYCR7dGFnLnNsaWNlKDAsIDIwKX0uLi5gIDogdGFnfVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L1RhZz5cclxuICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiBpc0xvbmdUYWcgPyAoXHJcbiAgICAgICAgICA8VG9vbHRpcCB0aXRsZT17dGFnfSBrZXk9e3RhZ30+XHJcbiAgICAgICAgICAgIHtUYWdFbGVtfVxyXG4gICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICBUYWdFbGVtXHJcbiAgICAgICAgKTtcclxuICAgICAgfSl9XHJcbiAgICAgIHtpbnB1dFZpc2libGUgJiYgKFxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgb25CbHVyPXtoYW5kbGVJbnB1dENvbmZpcm19XHJcbiAgICAgICAgICBvbktleURvd249eyhlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XHJcbiAgICAgICAgICAgICAgaGFuZGxlSW5wdXRDb25maXJtKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICB2YWx1ZT17aW5wdXRWYWx1ZX1cclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIHJlZj17aW5wdXRCdXR0b259XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWlucHV0XCJcclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG4gICAgICB7IWlucHV0VmlzaWJsZSAmJiAoXHJcbiAgICAgICAgPFRhZyBjbGFzc05hbWU9XCJzaXRlLXRhZy1wbHVzXCIgb25DbGljaz17c2hvd0lucHV0fT5cclxuICAgICAgICAgIDxQbHVzT3V0bGluZWQgLz4gTmV3IFRhZ1xyXG4gICAgICAgIDwvVGFnPlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhZ3M7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=