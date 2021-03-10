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

  return __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    label: "Tags",
    name: "tags",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 5
    }
  }, (_form$getFieldValue3 = form.getFieldValue("tags")) === null || _form$getFieldValue3 === void 0 ? void 0 : _form$getFieldValue3.map(function (tag, i) {
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
          lineNumber: 56,
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
        lineNumber: 69,
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
        lineNumber: 75,
        columnNumber: 13
      }
    }, isLongTag ? "#".concat(tag.slice(0, 20), "...") : "#".concat(tag)));

    return isLongTag ? __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], {
      title: tag,
      key: tag,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
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
      lineNumber: 98,
      columnNumber: 9
    }
  }), !inputVisible && __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Tag"], {
    className: "site-tag-plus",
    onClick: showInput,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 9
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["PlusOutlined"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb3Jtcy9UYWdzLmpzIl0sIm5hbWVzIjpbIlRhZ3MiLCJmb3JtIiwiaW5wdXRCdXR0b24iLCJSZWFjdCIsInVzZVJlZiIsImVkaXRJbnB1dEJ1dHRvbiIsInVzZVN0YXRlIiwiaW5wdXRWaXNpYmxlIiwic2V0SW5wdXRWaXNpYmxlIiwiaW5wdXRWYWx1ZSIsInNldElucHV0VmFsdWUiLCJlZGl0SW5wdXRJbmRleCIsInNldEVkaXRJbnB1dEluZGV4IiwiZWRpdElucHV0VmFsdWUiLCJzZXRFZGl0SW5wdXRWYWx1ZSIsImhhbmRsZUNsb3NlIiwicmVtb3ZlZFRhZyIsInNldEZpZWxkc1ZhbHVlIiwidGFncyIsImdldEZpZWxkVmFsdWUiLCJmaWx0ZXIiLCJ0YWciLCJzaG93SW5wdXQiLCJjdXJyZW50IiwiZm9jdXMiLCJoYW5kbGVJbnB1dENoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUlucHV0Q29uZmlybSIsIm5ld1RhZ3MiLCJpbmRleE9mIiwiaGFuZGxlRWRpdElucHV0Q2hhbmdlIiwiaGFuZGxlRWRpdElucHV0Q29uZmlybSIsImtleVByZXNzIiwiY29uc29sZSIsImxvZyIsImtleSIsIm1hcCIsImkiLCJpc0xvbmdUYWciLCJsZW5ndGgiLCJUYWdFbGVtIiwicHJldmVudERlZmF1bHQiLCJzbGljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQWM7QUFBQTs7QUFBQTs7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDekIsTUFBTUMsV0FBVyxHQUFHQyw0Q0FBSyxDQUFDQyxNQUFOLEVBQXBCO0FBQ0EsTUFBTUMsZUFBZSxHQUFHRiw0Q0FBSyxDQUFDQyxNQUFOLEVBQXhCOztBQUZ5Qix3QkFHZUQsNENBQUssQ0FBQ0csUUFBTixDQUFlLEtBQWYsQ0FIZjtBQUFBO0FB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QUFQLHNCQUFtQ3ZCLEdBQW5DLENBVlosQ0FORixDQURGOztBQXFCQSxXQUFPbUIsU0FBUyxHQUNkLE1BQUMsNENBQUQ7QUFBUyxXQUFLLEVBQUVuQixHQUFoQjtBQUFxQixTQUFHLEVBQUVBLEdBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR3FCLE9BREgsQ0FEYyxHQUtkQSxPQUxGO0FBT0QsR0EzQ0EsQ0FESCxFQTZDR25DLFlBQVksSUFDWDtBQUNFLFlBQVEsRUFBRWtCLGlCQURaO0FBRUUsVUFBTSxFQUFFSSxrQkFGVjtBQUdFLGFBQVMsRUFBRSxtQkFBQ0gsQ0FBRCxFQUFPO0FBQ2hCLFVBQUlBLENBQUMsQ0FBQ1csR0FBRixLQUFVLE9BQWQsRUFBdUI7QUFDckJSLDBCQUFrQjtBQUNuQjtBQUNGLEtBUEg7QUFRRSxTQUFLLEVBQUVwQixVQVJUO0FBU0UsUUFBSSxFQUFDLE1BVFA7QUFVRSxPQUFHLEVBQUVQLFdBVlA7QUFXRSxhQUFTLEVBQUMsV0FYWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBOUNKLEVBNERHLENBQUNLLFlBQUQsSUFDQyxNQUFDLHdDQUFEO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBK0IsV0FBTyxFQUFFZSxTQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsYUE3REosQ0FERjtBQW9FRCxDQW5IRDs7R0FBTXRCLEk7O0tBQUFBLEk7QUFxSFNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3N0b3J5L25ldy44MmY3MzM3ZDU2MDY4ZTczOWMwZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGFnLCBUb29sdGlwLCBGb3JtIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgUGx1c091dGxpbmVkIH0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XHJcblxyXG5jb25zdCBUYWdzID0gKHsgZm9ybSB9KSA9PiB7XHJcbiAgY29uc3QgaW5wdXRCdXR0b24gPSBSZWFjdC51c2VSZWYoKTtcclxuICBjb25zdCBlZGl0SW5wdXRCdXR0b24gPSBSZWFjdC51c2VSZWYoKTtcclxuICBjb25zdCBbaW5wdXRWaXNpYmxlLCBzZXRJbnB1dFZpc2libGVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpbnB1dFZhbHVlLCBzZXRJbnB1dFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtlZGl0SW5wdXRJbmRleCwgc2V0RWRpdElucHV0SW5kZXhdID0gUmVhY3QudXNlU3RhdGUoLTEpO1xyXG4gIGNvbnN0IFtlZGl0SW5wdXRWYWx1ZSwgc2V0RWRpdElucHV0VmFsdWVdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKHJlbW92ZWRUYWcpID0+IHtcclxuICAgIGZvcm0uc2V0RmllbGRzVmFsdWUoe1xyXG4gICAgICB0YWdzOiBmb3JtLmdldEZpZWxkVmFsdWUoXCJ0YWdzXCIpPy5maWx0ZXIoKHRhZykgPT4gdGFnICE9PSByZW1vdmVkVGFnKSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNob3dJbnB1dCA9ICgpID0+IHtcclxuICAgIHNldElucHV0VmlzaWJsZSh0cnVlKTtcclxuICAgIGlucHV0QnV0dG9uPy5jdXJyZW50Py5mb2N1cygpO1xyXG4gICAgLy9lZGl0SW5wdXRCdXR0b24uY3VycmVudC5mb2N1cygpO1xyXG4gICAgLy87XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZSkgPT4gc2V0SW5wdXRWYWx1ZShlLnRhcmdldC52YWx1ZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUlucHV0Q29uZmlybSA9ICgpID0+IHtcclxuICAgIGxldCBuZXdUYWdzID0gZm9ybS5nZXRGaWVsZFZhbHVlKFwidGFnc1wiKTtcclxuICAgIGlmIChpbnB1dFZhbHVlICYmIGZvcm0uZ2V0RmllbGRWYWx1ZShcInRhZ3NcIik/LmluZGV4T2YoaW5wdXRWYWx1ZSkgPT09IC0xKSB7XHJcbiAgICAgIG5ld1RhZ3MgPSBbLi4ubmV3VGFncywgaW5wdXRWYWx1ZV07XHJcbiAgICB9XHJcbiAgICBmb3JtLnNldEZpZWxkc1ZhbHVlKHsgdGFnczogbmV3VGFncyB9KTtcclxuICAgIHNldElucHV0VmFsdWUoXCJcIik7XHJcbiAgICBzZXRJbnB1dFZpc2libGUoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUVkaXRJbnB1dENoYW5nZSA9IChlKSA9PiBzZXRFZGl0SW5wdXRWYWx1ZShlLnRhcmdldC52YWx1ZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUVkaXRJbnB1dENvbmZpcm0gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBuZXdUYWdzID0gWy4uLmZvcm0uZ2V0RmllbGRWYWx1ZShcInRhZ3NcIildO1xyXG4gICAgbmV3VGFnc1tlZGl0SW5wdXRJbmRleF0gPSBlZGl0SW5wdXRWYWx1ZTtcclxuICAgIGZvcm0uc2V0RmllbGRzVmFsdWUoeyB0YWdzOiBuZXdUYWdzIH0pO1xyXG4gICAgc2V0RWRpdElucHV0SW5kZXgoLTEpO1xyXG4gICAgc2V0RWRpdElucHV0VmFsdWUoXCJcIik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qga2V5UHJlc3MgPSAoZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZS5rZXkpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybS5JdGVtIGxhYmVsPVwiVGFnc1wiIG5hbWU9XCJ0YWdzXCI+XHJcbiAgICAgIHtmb3JtLmdldEZpZWxkVmFsdWUoXCJ0YWdzXCIpPy5tYXAoKHRhZywgaSkgPT4ge1xyXG4gICAgICAgIGlmIChlZGl0SW5wdXRJbmRleCA9PT0gaSkge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVFZGl0SW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVFZGl0SW5wdXRDb25maXJtfVxyXG4gICAgICAgICAgICAgIG9uUHJlc3NFbnRlcj17aGFuZGxlRWRpdElucHV0Q29uZmlybX1cclxuICAgICAgICAgICAgICB2YWx1ZT17ZWRpdElucHV0VmFsdWV9XHJcbiAgICAgICAgICAgICAgcmVmPXtlZGl0SW5wdXRCdXR0b259XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1pbnB1dFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBpc0xvbmdUYWcgPSB0YWcubGVuZ3RoID4gMjA7XHJcbiAgICAgICAgY29uc3QgVGFnRWxlbSA9IChcclxuICAgICAgICAgIDxUYWdcclxuICAgICAgICAgICAgb25DbG9zZT17KCkgPT4gaGFuZGxlQ2xvc2UodGFnKX1cclxuICAgICAgICAgICAgY2xvc2FibGU9e3RydWV9XHJcbiAgICAgICAgICAgIGtleT17dGFnfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJlZGl0LXRhZ1wiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgb25Eb3VibGVDbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChpICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgIHNldEVkaXRJbnB1dEluZGV4KGkpO1xyXG4gICAgICAgICAgICAgICAgICBzZXRFZGl0SW5wdXRWYWx1ZSh0YWcpO1xyXG4gICAgICAgICAgICAgICAgICBlZGl0SW5wdXRCdXR0b24uZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7aXNMb25nVGFnID8gYCMke3RhZy5zbGljZSgwLCAyMCl9Li4uYCA6IGAjJHt0YWd9YH1cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9UYWc+XHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXR1cm4gaXNMb25nVGFnID8gKFxyXG4gICAgICAgICAgPFRvb2x0aXAgdGl0bGU9e3RhZ30ga2V5PXt0YWd9PlxyXG4gICAgICAgICAgICB7VGFnRWxlbX1cclxuICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgVGFnRWxlbVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pfVxyXG4gICAgICB7aW5wdXRWaXNpYmxlICYmIChcclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cclxuICAgICAgICAgIG9uQmx1cj17aGFuZGxlSW5wdXRDb25maXJtfVxyXG4gICAgICAgICAgb25LZXlEb3duPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xyXG4gICAgICAgICAgICAgIGhhbmRsZUlucHV0Q29uZmlybSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgdmFsdWU9e2lucHV0VmFsdWV9XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICByZWY9e2lucHV0QnV0dG9ufVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidGFnLWlucHV0XCJcclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG4gICAgICB7IWlucHV0VmlzaWJsZSAmJiAoXHJcbiAgICAgICAgPFRhZyBjbGFzc05hbWU9XCJzaXRlLXRhZy1wbHVzXCIgb25DbGljaz17c2hvd0lucHV0fT5cclxuICAgICAgICAgIDxQbHVzT3V0bGluZWQgLz4gTmV3IFRhZ1xyXG4gICAgICAgIDwvVGFnPlxyXG4gICAgICApfVxyXG4gICAgPC9Gb3JtLkl0ZW0+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhZ3M7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=