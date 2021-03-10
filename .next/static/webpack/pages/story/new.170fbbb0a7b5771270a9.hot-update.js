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

  var _form$getFieldValue3;

  var form = _ref.form;
  var inputButton = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef();
  var editInputButton = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      inputVisible = _React$useState2[0],
      setInputVisible = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(""),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState3, 2),
      inputValue = _React$useState4[0],
      setInputValue = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(-1),
      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState5, 2),
      editInputIndex = _React$useState6[0],
      setEditInputIndex = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(""),
      _React$useState8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState7, 2),
      editInputValue = _React$useState8[0],
      setEditInputValue = _React$useState8[1];

  var handleClose = function handleClose(removedTag) {
    var _form$getFieldValue;

    form.setFieldsValue({
      tags: (_form$getFieldValue = form.getFieldValue("tags")) === null || _form$getFieldValue === void 0 ? void 0 : _form$getFieldValue.filter(function (tag) {
        return tag !== removedTag;
      })
    });
  };

  var showInput = function showInput() {
    var _inputButton$current;

    setInputVisible(true);
    inputButton === null || inputButton === void 0 ? void 0 : (_inputButton$current = inputButton.current) === null || _inputButton$current === void 0 ? void 0 : _inputButton$current.focus(); //editInputButton.current.focus();
    //;
  };

  var handleInputChange = function handleInputChange(e) {
    return setInputValue(e.target.value);
  };

  var handleInputConfirm = function handleInputConfirm() {
    var _form$getFieldValue2;

    var newTags = form.getFieldValue("tags");

    if (inputValue && ((_form$getFieldValue2 = form.getFieldValue("tags")) === null || _form$getFieldValue2 === void 0 ? void 0 : _form$getFieldValue2.indexOf(inputValue)) === -1) {
      newTags = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(newTags), [inputValue]);
    }

    form.setFieldsValue({
      tags: newTags
    });
    setInputValue("");
    setInputVisible(false);
  };

  var handleEditInputChange = function handleEditInputChange(e) {
    return setEditInputValue(e.target.value);
  };

  var handleEditInputConfirm = function handleEditInputConfirm() {
    var newTags = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(form.getFieldValue("tags"));

    newTags[editInputIndex] = editInputValue;
    form.setFieldsValue({
      tags: newTags
    });
    setEditInputIndex(-1);
    setEditInputValue("");
  };

  var keyPress = function keyPress(e) {
    console.log(e.key);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, (_form$getFieldValue3 = form.getFieldValue("tags")) === null || _form$getFieldValue3 === void 0 ? void 0 : _form$getFieldValue3.map(function (tag, i) {
    if (editInputIndex === i) {
      return __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
        name: "tags",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 13
        }
      }, __jsx("input", {
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
          lineNumber: 57,
          columnNumber: 15
        }
      }));
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
        lineNumber: 71,
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
        lineNumber: 77,
        columnNumber: 13
      }
    }, isLongTag ? "#".concat(tag.slice(0, 20), "...") : "#".concat(tag)));

    return isLongTag ? __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], {
      title: tag,
      key: tag,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
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
    className: "tag-input",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 9
    }
  }), !inputVisible && __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Tag"], {
    className: "site-tag-plus",
    onClick: showInput,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 9
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["PlusOutlined"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb3Jtcy9UYWdzLmpzIl0sIm5hbWVzIjpbIlRhZ3MiLCJmb3JtIiwiaW5wdXRCdXR0b24iLCJSZWFjdCIsInVzZVJlZiIsImVkaXRJbnB1dEJ1dHRvbiIsInVzZVN0YXRlIiwiaW5wdXRWaXNpYmxlIiwic2V0SW5wdXRWaXNpYmxlIiwiaW5wdXRWYWx1ZSIsInNldElucHV0VmFsdWUiLCJlZGl0SW5wdXRJbmRleCIsInNldEVkaXRJbnB1dEluZGV4IiwiZWRpdElucHV0VmFsdWUiLCJzZXRFZGl0SW5wdXRWYWx1ZSIsImhhbmRsZUNsb3NlIiwicmVtb3ZlZFRhZyIsInNldEZpZWxkc1ZhbHVlIiwidGFncyIsImdldEZpZWxkVmFsdWUiLCJmaWx0ZXIiLCJ0YWciLCJzaG93SW5wdXQiLCJjdXJyZW50IiwiZm9jdXMiLCJoYW5kbGVJbnB1dENoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUlucHV0Q29uZmlybSIsIm5ld1RhZ3MiLCJpbmRleE9mIiwiaGFuZGxlRWRpdElucHV0Q2hhbmdlIiwiaGFuZGxlRWRpdElucHV0Q29uZmlybSIsImtleVByZXNzIiwiY29uc29sZSIsImxvZyIsImtleSIsIm1hcCIsImkiLCJpc0xvbmdUYWciLCJsZW5ndGgiLCJUYWdFbGVtIiwicHJldmVudERlZmF1bHQiLCJzbGljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQWM7QUFBQTs7QUFBQTs7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDekIsTUFBTUMsV0FBVyxHQUFHQyw0Q0FBSyxDQUFDQyxNQUFOLEVBQXBCO0FBQ0EsTUFBTUMsZUFBZSxHQUFHRiw0Q0FBSyxDQUFDQyxNQUFOLEVBQXhCOztBQUZ5Qix3QkFHZUQsNENBQUssQ0FBQ0csUUFBTixDQUFlLEtBQWYsQ0FIZjtBQUFBO0FB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LEdBQW5DLENBVlosQ0FORixDQURGOztBQXFCQSxXQUFPbUIsU0FBUyxHQUNkLE1BQUMsNENBQUQ7QUFBUyxXQUFLLEVBQUVuQixHQUFoQjtBQUFxQixTQUFHLEVBQUVBLEdBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR3FCLE9BREgsQ0FEYyxHQUtkQSxPQUxGO0FBT0QsR0E3Q0EsQ0FESCxFQStDR25DLFlBQVksSUFDWDtBQUNFLFlBQVEsRUFBRWtCLGlCQURaO0FBRUUsVUFBTSxFQUFFSSxrQkFGVjtBQUdFLGFBQVMsRUFBRSxtQkFBQ0gsQ0FBRCxFQUFPO0FBQ2hCLFVBQUlBLENBQUMsQ0FBQ1csR0FBRixLQUFVLE9BQWQsRUFBdUI7QUFDckJSLDBCQUFrQjtBQUNuQjtBQUNGLEtBUEg7QUFRRSxTQUFLLEVBQUVwQixVQVJUO0FBU0UsUUFBSSxFQUFDLE1BVFA7QUFVRSxPQUFHLEVBQUVQLFdBVlA7QUFXRSxhQUFTLEVBQUMsV0FYWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBaERKLEVBOERHLENBQUNLLFlBQUQsSUFDQyxNQUFDLHdDQUFEO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBK0IsV0FBTyxFQUFFZSxTQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsYUEvREosQ0FERjtBQXNFRCxDQXJIRDs7R0FBTXRCLEk7O0tBQUFBLEk7QUF1SFNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3N0b3J5L25ldy4xNzBmYmJiMGE3YjU3NzEyNzBhOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGFnLCBUb29sdGlwLCBGb3JtIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgUGx1c091dGxpbmVkIH0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XHJcblxyXG5jb25zdCBUYWdzID0gKHsgZm9ybSB9KSA9PiB7XHJcbiAgY29uc3QgaW5wdXRCdXR0b24gPSBSZWFjdC51c2VSZWYoKTtcclxuICBjb25zdCBlZGl0SW5wdXRCdXR0b24gPSBSZWFjdC51c2VSZWYoKTtcclxuICBjb25zdCBbaW5wdXRWaXNpYmxlLCBzZXRJbnB1dFZpc2libGVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpbnB1dFZhbHVlLCBzZXRJbnB1dFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtlZGl0SW5wdXRJbmRleCwgc2V0RWRpdElucHV0SW5kZXhdID0gUmVhY3QudXNlU3RhdGUoLTEpO1xyXG4gIGNvbnN0IFtlZGl0SW5wdXRWYWx1ZSwgc2V0RWRpdElucHV0VmFsdWVdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKHJlbW92ZWRUYWcpID0+IHtcclxuICAgIGZvcm0uc2V0RmllbGRzVmFsdWUoe1xyXG4gICAgICB0YWdzOiBmb3JtLmdldEZpZWxkVmFsdWUoXCJ0YWdzXCIpPy5maWx0ZXIoKHRhZykgPT4gdGFnICE9PSByZW1vdmVkVGFnKSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNob3dJbnB1dCA9ICgpID0+IHtcclxuICAgIHNldElucHV0VmlzaWJsZSh0cnVlKTtcclxuICAgIGlucHV0QnV0dG9uPy5jdXJyZW50Py5mb2N1cygpO1xyXG4gICAgLy9lZGl0SW5wdXRCdXR0b24uY3VycmVudC5mb2N1cygpO1xyXG4gICAgLy87XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZSkgPT4gc2V0SW5wdXRWYWx1ZShlLnRhcmdldC52YWx1ZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUlucHV0Q29uZmlybSA9ICgpID0+IHtcclxuICAgIGxldCBuZXdUYWdzID0gZm9ybS5nZXRGaWVsZFZhbHVlKFwidGFnc1wiKTtcclxuICAgIGlmIChpbnB1dFZhbHVlICYmIGZvcm0uZ2V0RmllbGRWYWx1ZShcInRhZ3NcIik/LmluZGV4T2YoaW5wdXRWYWx1ZSkgPT09IC0xKSB7XHJcbiAgICAgIG5ld1RhZ3MgPSBbLi4ubmV3VGFncywgaW5wdXRWYWx1ZV07XHJcbiAgICB9XHJcbiAgICBmb3JtLnNldEZpZWxkc1ZhbHVlKHsgdGFnczogbmV3VGFncyB9KTtcclxuICAgIHNldElucHV0VmFsdWUoXCJcIik7XHJcbiAgICBzZXRJbnB1dFZpc2libGUoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUVkaXRJbnB1dENoYW5nZSA9IChlKSA9PiBzZXRFZGl0SW5wdXRWYWx1ZShlLnRhcmdldC52YWx1ZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUVkaXRJbnB1dENvbmZpcm0gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBuZXdUYWdzID0gWy4uLmZvcm0uZ2V0RmllbGRWYWx1ZShcInRhZ3NcIildO1xyXG4gICAgbmV3VGFnc1tlZGl0SW5wdXRJbmRleF0gPSBlZGl0SW5wdXRWYWx1ZTtcclxuICAgIGZvcm0uc2V0RmllbGRzVmFsdWUoeyB0YWdzOiBuZXdUYWdzIH0pO1xyXG4gICAgc2V0RWRpdElucHV0SW5kZXgoLTEpO1xyXG4gICAgc2V0RWRpdElucHV0VmFsdWUoXCJcIik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qga2V5UHJlc3MgPSAoZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZS5rZXkpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7Zm9ybS5nZXRGaWVsZFZhbHVlKFwidGFnc1wiKT8ubWFwKCh0YWcsIGkpID0+IHtcclxuICAgICAgICBpZiAoZWRpdElucHV0SW5kZXggPT09IGkpIHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxGb3JtLkl0ZW0gbmFtZT1cInRhZ3NcIj5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVFZGl0SW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUVkaXRJbnB1dENvbmZpcm19XHJcbiAgICAgICAgICAgICAgICBvblByZXNzRW50ZXI9e2hhbmRsZUVkaXRJbnB1dENvbmZpcm19XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17ZWRpdElucHV0VmFsdWV9XHJcbiAgICAgICAgICAgICAgICByZWY9e2VkaXRJbnB1dEJ1dHRvbn1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0taW5wdXRcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgaXNMb25nVGFnID0gdGFnLmxlbmd0aCA+IDIwO1xyXG4gICAgICAgIGNvbnN0IFRhZ0VsZW0gPSAoXHJcbiAgICAgICAgICA8VGFnXHJcbiAgICAgICAgICAgIG9uQ2xvc2U9eygpID0+IGhhbmRsZUNsb3NlKHRhZyl9XHJcbiAgICAgICAgICAgIGNsb3NhYmxlPXt0cnVlfVxyXG4gICAgICAgICAgICBrZXk9e3RhZ31cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZWRpdC10YWdcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgIG9uRG91YmxlQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaSAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICBzZXRFZGl0SW5wdXRJbmRleChpKTtcclxuICAgICAgICAgICAgICAgICAgc2V0RWRpdElucHV0VmFsdWUodGFnKTtcclxuICAgICAgICAgICAgICAgICAgZWRpdElucHV0QnV0dG9uLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2lzTG9uZ1RhZyA/IGAjJHt0YWcuc2xpY2UoMCwgMjApfS4uLmAgOiBgIyR7dGFnfWB9XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvVGFnPlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmV0dXJuIGlzTG9uZ1RhZyA/IChcclxuICAgICAgICAgIDxUb29sdGlwIHRpdGxlPXt0YWd9IGtleT17dGFnfT5cclxuICAgICAgICAgICAge1RhZ0VsZW19XHJcbiAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIFRhZ0VsZW1cclxuICAgICAgICApO1xyXG4gICAgICB9KX1cclxuICAgICAge2lucHV0VmlzaWJsZSAmJiAoXHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICBvbkJsdXI9e2hhbmRsZUlucHV0Q29uZmlybX1cclxuICAgICAgICAgIG9uS2V5RG93bj17KGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcclxuICAgICAgICAgICAgICBoYW5kbGVJbnB1dENvbmZpcm0oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIHZhbHVlPXtpbnB1dFZhbHVlfVxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgcmVmPXtpbnB1dEJ1dHRvbn1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInRhZy1pbnB1dFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgKX1cclxuICAgICAgeyFpbnB1dFZpc2libGUgJiYgKFxyXG4gICAgICAgIDxUYWcgY2xhc3NOYW1lPVwic2l0ZS10YWctcGx1c1wiIG9uQ2xpY2s9e3Nob3dJbnB1dH0+XHJcbiAgICAgICAgICA8UGx1c091dGxpbmVkIC8+IE5ldyBUYWdcclxuICAgICAgICA8L1RhZz5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYWdzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9