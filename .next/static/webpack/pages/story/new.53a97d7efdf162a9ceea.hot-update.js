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
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");




var _this = undefined,
    _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\components\\forms\\Tags.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var Tags = function Tags(_ref) {
  _s();

  var tags = _ref.tags,
      setTags = _ref.setTags,
      storyInfo = _ref.storyInfo;
  var inputButton = react__WEBPACK_IMPORTED_MODULE_3___default.a.useRef();
  var editInputButton = react__WEBPACK_IMPORTED_MODULE_3___default.a.useRef();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState, 2),
      inputVisible = _React$useState2[0],
      setInputVisible = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(""),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState3, 2),
      inputValue = _React$useState4[0],
      setInputValue = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(-1),
      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState5, 2),
      editInputIndex = _React$useState6[0],
      setEditInputIndex = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(""),
      _React$useState8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState7, 2),
      editInputValue = _React$useState8[0],
      setEditInputValue = _React$useState8[1];

  var handleClose = function handleClose(removedTag) {
    return setTags(_objectSpread(_objectSpread({}, storyInfo), {}, {
      tags: tags.filter(function (tag) {
        return tags !== removedTag;
      })
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

    setTags(_objectSpread(_objectSpread({}, storyInfo), {}, {
      tags: newTags
    }));
    setInputValue("");
    setInputVisible(false);
  };

  var handleEditInputChange = function handleEditInputChange(e) {
    return setEditInputValue(e.target.value);
  };

  var handleEditInputConfirm = function handleEditInputConfirm() {
    var newTags = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(tags);

    newTags[editInputIndex] = editInputValue;
    setTags(_objectSpread(_objectSpread({}, storyInfo), {}, {
      tags: newTags
    }));
    setEditInputIndex(-1);
    setEditInputValue("");
  };

  var keyPress = function keyPress(e) {
    console.log(e.key);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, tags === null || tags === void 0 ? void 0 : tags.map(function (tag, i) {
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
          lineNumber: 54,
          columnNumber: 13
        }
      });
    }

    var isLongTag = tag.length > 20;

    var TagElem = __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Tag"], {
      onClose: function onClose() {
        return handleClose(tag);
      },
      closable: true,
      key: tag,
      className: "edit-tag",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
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
        lineNumber: 73,
        columnNumber: 13
      }
    }, isLongTag ? "".concat(tag.slice(0, 20), "...") : tag));

    return isLongTag ? __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], {
      title: tag,
      key: tag,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
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
      lineNumber: 96,
      columnNumber: 9
    }
  }), !inputVisible && __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Tag"], {
    className: "site-tag-plus",
    onClick: showInput,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 9
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["PlusOutlined"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 11
    }
  }), " New Tag"));
};

_s(Tags, "ZqYdNFlsgwjPlNp0db/U6JG31/U=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb3Jtcy9UYWdzLmpzIl0sIm5hbWVzIjpbIlRhZ3MiLCJ0YWdzIiwic2V0VGFncyIsInN0b3J5SW5mbyIsImlucHV0QnV0dG9uIiwiUmVhY3QiLCJ1c2VSZWYiLCJlZGl0SW5wdXRCdXR0b24iLCJ1c2VTdGF0ZSIsImlucHV0VmlzaWJsZSIsInNldElucHV0VmlzaWJsZSIsImlucHV0VmFsdWUiLCJzZXRJbnB1dFZhbHVlIiwiZWRpdElucHV0SW5kZXgiLCJzZXRFZGl0SW5wdXRJbmRleCIsImVkaXRJbnB1dFZhbHVlIiwic2V0RWRpdElucHV0VmFsdWUiLCJoYW5kbGVDbG9zZSIsInJlbW92ZWRUYWciLCJmaWx0ZXIiLCJ0YWciLCJzaG93SW5wdXQiLCJoYW5kbGVJbnB1dENoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUlucHV0Q29uZmlybSIsIm5ld1RhZ3MiLCJpbmRleE9mIiwiaGFuZGxlRWRpdElucHV0Q2hhbmdlIiwiaGFuZGxlRWRpdElucHV0Q29uZmlybSIsImtleVByZXNzIiwiY29uc29sZSIsImxvZyIsImtleSIsIm1hcCIsImkiLCJpc0xvbmdUYWciLCJsZW5ndGgiLCJUYWdFbGVtIiwiZm9jdXMiLCJwcmV2ZW50RGVmYXVsdCIsInNsaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQWtDO0FBQUE7O0FBQUEsTUFBL0JDLElBQStCLFFBQS9CQSxJQUErQjtBQUFBLE1BQXpCQyxPQUF5QixRQUF6QkEsT0FBeUI7QUFBQSxNQUFoQkMsU0FBZ0IsUUFBaEJBLFNBQWdCO0FBQzdDLE1BQU1DLFdBQVcsR0FBR0MsNENBQUssQ0FBQ0MsTUFBTixFQUFwQjtBQUNBLE1BQU1DLGVBQWUsR0FBR0YsNENBQUssQ0FBQ0MsTUFBTixFQUF4Qjs7QUFGNkMsd0JBR0xE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R0FBRixLQUFVLE9BQWQsRUFBdUI7QUFDckJSLDBCQUFrQjtBQUNuQjtBQUNGLEtBUEg7QUFRRSxTQUFLLEVBQUVmLFVBUlQ7QUFTRSxRQUFJLEVBQUMsTUFUUDtBQVVFLE9BQUcsRUFBRVAsV0FWUDtBQVdFLGFBQVMsRUFBQyxZQVhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUE5Q0osRUE0REcsQ0FBQ0ssWUFBRCxJQUNDLE1BQUMsd0NBQUQ7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUErQixXQUFPLEVBQUVZLFNBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixhQTdESixDQURGO0FBb0VELENBakhEOztHQUFNckIsSTs7S0FBQUEsSTtBQW1IU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3RvcnkvbmV3LjUzYTk3ZDdlZmRmMTYyYTljZWVhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUYWcsIFRvb2x0aXAgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyBQbHVzT3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuXHJcbmNvbnN0IFRhZ3MgPSAoeyB0YWdzLCBzZXRUYWdzLCBzdG9yeUluZm8gfSkgPT4ge1xyXG4gIGNvbnN0IGlucHV0QnV0dG9uID0gUmVhY3QudXNlUmVmKCk7XHJcbiAgY29uc3QgZWRpdElucHV0QnV0dG9uID0gUmVhY3QudXNlUmVmKCk7XHJcbiAgY29uc3QgW2lucHV0VmlzaWJsZSwgc2V0SW5wdXRWaXNpYmxlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaW5wdXRWYWx1ZSwgc2V0SW5wdXRWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZWRpdElucHV0SW5kZXgsIHNldEVkaXRJbnB1dEluZGV4XSA9IFJlYWN0LnVzZVN0YXRlKC0xKTtcclxuICBjb25zdCBbZWRpdElucHV0VmFsdWUsIHNldEVkaXRJbnB1dFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDbG9zZSA9IChyZW1vdmVkVGFnKSA9PlxyXG4gICAgc2V0VGFncyh7IC4uLnN0b3J5SW5mbywgdGFnczogdGFncy5maWx0ZXIoKHRhZykgPT4gdGFncyAhPT0gcmVtb3ZlZFRhZykgfSk7XHJcblxyXG4gIGNvbnN0IHNob3dJbnB1dCA9ICgpID0+IHtcclxuICAgIHNldElucHV0VmlzaWJsZSh0cnVlKTtcclxuICAgIC8vY29uc29sZS5sb2coKTtcclxuICAgIC8vZWRpdElucHV0QnV0dG9uLmN1cnJlbnQuZm9jdXMoKTtcclxuICAgIC8vaW5wdXRCdXR0b24uY3VycmVudC5mb2N1cygpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGUpID0+IHNldElucHV0VmFsdWUoZS50YXJnZXQudmFsdWUpO1xyXG5cclxuICBjb25zdCBoYW5kbGVJbnB1dENvbmZpcm0gPSAoKSA9PiB7XHJcbiAgICBsZXQgbmV3VGFncyA9IHRhZ3M7XHJcbiAgICBpZiAoaW5wdXRWYWx1ZSAmJiB0YWdzLmluZGV4T2YoaW5wdXRWYWx1ZSkgPT09IC0xKSB7XHJcbiAgICAgIG5ld1RhZ3MgPSBbLi4ubmV3VGFncywgaW5wdXRWYWx1ZV07XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VGFncyh7IC4uLnN0b3J5SW5mbywgdGFnczogbmV3VGFncyB9KTtcclxuICAgIHNldElucHV0VmFsdWUoXCJcIik7XHJcbiAgICBzZXRJbnB1dFZpc2libGUoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUVkaXRJbnB1dENoYW5nZSA9IChlKSA9PiBzZXRFZGl0SW5wdXRWYWx1ZShlLnRhcmdldC52YWx1ZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUVkaXRJbnB1dENvbmZpcm0gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBuZXdUYWdzID0gWy4uLnRhZ3NdO1xyXG4gICAgbmV3VGFnc1tlZGl0SW5wdXRJbmRleF0gPSBlZGl0SW5wdXRWYWx1ZTtcclxuICAgIHNldFRhZ3MoeyAuLi5zdG9yeUluZm8sIHRhZ3M6IG5ld1RhZ3MgfSk7XHJcbiAgICBzZXRFZGl0SW5wdXRJbmRleCgtMSk7XHJcbiAgICBzZXRFZGl0SW5wdXRWYWx1ZShcIlwiKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBrZXlQcmVzcyA9IChlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhlLmtleSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHt0YWdzPy5tYXAoKHRhZywgaSkgPT4ge1xyXG4gICAgICAgIGlmIChlZGl0SW5wdXRJbmRleCA9PT0gaSkge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVFZGl0SW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVFZGl0SW5wdXRDb25maXJtfVxyXG4gICAgICAgICAgICAgIG9uUHJlc3NFbnRlcj17aGFuZGxlRWRpdElucHV0Q29uZmlybX1cclxuICAgICAgICAgICAgICB2YWx1ZT17ZWRpdElucHV0VmFsdWV9XHJcbiAgICAgICAgICAgICAgcmVmPXtlZGl0SW5wdXRCdXR0b259XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1pbnB1dFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBpc0xvbmdUYWcgPSB0YWcubGVuZ3RoID4gMjA7XHJcbiAgICAgICAgY29uc3QgVGFnRWxlbSA9IChcclxuICAgICAgICAgIDxUYWdcclxuICAgICAgICAgICAgb25DbG9zZT17KCkgPT4gaGFuZGxlQ2xvc2UodGFnKX1cclxuICAgICAgICAgICAgY2xvc2FibGU9e3RydWV9XHJcbiAgICAgICAgICAgIGtleT17dGFnfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJlZGl0LXRhZ1wiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgb25Eb3VibGVDbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChpICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgIHNldEVkaXRJbnB1dEluZGV4KGkpO1xyXG4gICAgICAgICAgICAgICAgICBzZXRFZGl0SW5wdXRWYWx1ZSh0YWcpO1xyXG4gICAgICAgICAgICAgICAgICBlZGl0SW5wdXRCdXR0b24uZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7aXNMb25nVGFnID8gYCR7dGFnLnNsaWNlKDAsIDIwKX0uLi5gIDogdGFnfVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L1RhZz5cclxuICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiBpc0xvbmdUYWcgPyAoXHJcbiAgICAgICAgICA8VG9vbHRpcCB0aXRsZT17dGFnfSBrZXk9e3RhZ30+XHJcbiAgICAgICAgICAgIHtUYWdFbGVtfVxyXG4gICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICBUYWdFbGVtXHJcbiAgICAgICAgKTtcclxuICAgICAgfSl9XHJcbiAgICAgIHtpbnB1dFZpc2libGUgJiYgKFxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgb25CbHVyPXtoYW5kbGVJbnB1dENvbmZpcm19XHJcbiAgICAgICAgICBvbktleURvd249eyhlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XHJcbiAgICAgICAgICAgICAgaGFuZGxlSW5wdXRDb25maXJtKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICB2YWx1ZT17aW5wdXRWYWx1ZX1cclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIHJlZj17aW5wdXRCdXR0b259XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWlucHV0XCJcclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG4gICAgICB7IWlucHV0VmlzaWJsZSAmJiAoXHJcbiAgICAgICAgPFRhZyBjbGFzc05hbWU9XCJzaXRlLXRhZy1wbHVzXCIgb25DbGljaz17c2hvd0lucHV0fT5cclxuICAgICAgICAgIDxQbHVzT3V0bGluZWQgLz4gTmV3IFRhZ1xyXG4gICAgICAgIDwvVGFnPlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhZ3M7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=