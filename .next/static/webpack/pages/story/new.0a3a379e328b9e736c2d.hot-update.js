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
        label: "Tags",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb3Jtcy9UYWdzLmpzIl0sIm5hbWVzIjpbIlRhZ3MiLCJmb3JtIiwiaW5wdXRCdXR0b24iLCJSZWFjdCIsInVzZVJlZiIsImVkaXRJbnB1dEJ1dHRvbiIsInVzZVN0YXRlIiwiaW5wdXRWaXNpYmxlIiwic2V0SW5wdXRWaXNpYmxlIiwiaW5wdXRWYWx1ZSIsInNldElucHV0VmFsdWUiLCJlZGl0SW5wdXRJbmRleCIsInNldEVkaXRJbnB1dEluZGV4IiwiZWRpdElucHV0VmFsdWUiLCJzZXRFZGl0SW5wdXRWYWx1ZSIsImhhbmRsZUNsb3NlIiwicmVtb3ZlZFRhZyIsInNldEZpZWxkc1ZhbHVlIiwidGFncyIsImdldEZpZWxkVmFsdWUiLCJmaWx0ZXIiLCJ0YWciLCJzaG93SW5wdXQiLCJjdXJyZW50IiwiZm9jdXMiLCJoYW5kbGVJbnB1dENoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUlucHV0Q29uZmlybSIsIm5ld1RhZ3MiLCJpbmRleE9mIiwiaGFuZGxlRWRpdElucHV0Q2hhbmdlIiwiaGFuZGxlRWRpdElucHV0Q29uZmlybSIsImtleVByZXNzIiwiY29uc29sZSIsImxvZyIsImtleSIsIm1hcCIsImkiLCJpc0xvbmdUYWciLCJsZW5ndGgiLCJUYWdFbGVtIiwicHJldmVudERlZmF1bHQiLCJzbGljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQWM7QUFBQTs7QUFBQTs7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDekIsTUFBTUMsV0FBVyxHQUFHQyw0Q0FBSyxDQUFDQyxNQUFOLEVBQXBCO0FBQ0EsTUFBTUMsZUFBZSxHQUFHRiw0Q0FBSyxDQUFDQyxNQUFOLEVBQXhCOztBQUZ5Qix3QkFHZUQsNENBQUssQ0FBQ0csUUFBTixDQUFlLEtBQWYsQ0FIZjtBQUFBO0FB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QUFhLEVBQWIsQ0FBUCxzQkFBbUN2QixHQUFuQyxDQVZaLENBTkYsQ0FERjs7QUFxQkEsV0FBT21CLFNBQVMsR0FDZCxNQUFDLDRDQUFEO0FBQVMsV0FBSyxFQUFFbkIsR0FBaEI7QUFBcUIsU0FBRyxFQUFFQSxHQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dxQixPQURILENBRGMsR0FLZEEsT0FMRjtBQU9ELEdBN0NBLENBREgsRUErQ0duQyxZQUFZLElBQ1g7QUFDRSxZQUFRLEVBQUVrQixpQkFEWjtBQUVFLFVBQU0sRUFBRUksa0JBRlY7QUFHRSxhQUFTLEVBQUUsbUJBQUNILENBQUQsRUFBTztBQUNoQixVQUFJQSxDQUFDLENBQUNXLEdBQUYsS0FBVSxPQUFkLEVBQXVCO0FBQ3JCUiwwQkFBa0I7QUFDbkI7QUFDRixLQVBIO0FBUUUsU0FBSyxFQUFFcEIsVUFSVDtBQVNFLFFBQUksRUFBQyxNQVRQO0FBVUUsT0FBRyxFQUFFUCxXQVZQO0FBV0UsYUFBUyxFQUFDLFdBWFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWhESixFQThERyxDQUFDSyxZQUFELElBQ0MsTUFBQyx3Q0FBRDtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQStCLFdBQU8sRUFBRWUsU0FBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLGFBL0RKLENBREY7QUFzRUQsQ0FySEQ7O0dBQU10QixJOztLQUFBQSxJO0FBdUhTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zdG9yeS9uZXcuMGEzYTM3OWUzMjhiOWU3MzZjMmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRhZywgVG9vbHRpcCwgRm9ybSB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IFBsdXNPdXRsaW5lZCB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5cclxuY29uc3QgVGFncyA9ICh7IGZvcm0gfSkgPT4ge1xyXG4gIGNvbnN0IGlucHV0QnV0dG9uID0gUmVhY3QudXNlUmVmKCk7XHJcbiAgY29uc3QgZWRpdElucHV0QnV0dG9uID0gUmVhY3QudXNlUmVmKCk7XHJcbiAgY29uc3QgW2lucHV0VmlzaWJsZSwgc2V0SW5wdXRWaXNpYmxlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaW5wdXRWYWx1ZSwgc2V0SW5wdXRWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZWRpdElucHV0SW5kZXgsIHNldEVkaXRJbnB1dEluZGV4XSA9IFJlYWN0LnVzZVN0YXRlKC0xKTtcclxuICBjb25zdCBbZWRpdElucHV0VmFsdWUsIHNldEVkaXRJbnB1dFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDbG9zZSA9IChyZW1vdmVkVGFnKSA9PiB7XHJcbiAgICBmb3JtLnNldEZpZWxkc1ZhbHVlKHtcclxuICAgICAgdGFnczogZm9ybS5nZXRGaWVsZFZhbHVlKFwidGFnc1wiKT8uZmlsdGVyKCh0YWcpID0+IHRhZyAhPT0gcmVtb3ZlZFRhZyksXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzaG93SW5wdXQgPSAoKSA9PiB7XHJcbiAgICBzZXRJbnB1dFZpc2libGUodHJ1ZSk7XHJcbiAgICBpbnB1dEJ1dHRvbj8uY3VycmVudD8uZm9jdXMoKTtcclxuICAgIC8vZWRpdElucHV0QnV0dG9uLmN1cnJlbnQuZm9jdXMoKTtcclxuICAgIC8vO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGUpID0+IHNldElucHV0VmFsdWUoZS50YXJnZXQudmFsdWUpO1xyXG5cclxuICBjb25zdCBoYW5kbGVJbnB1dENvbmZpcm0gPSAoKSA9PiB7XHJcbiAgICBsZXQgbmV3VGFncyA9IGZvcm0uZ2V0RmllbGRWYWx1ZShcInRhZ3NcIik7XHJcbiAgICBpZiAoaW5wdXRWYWx1ZSAmJiBmb3JtLmdldEZpZWxkVmFsdWUoXCJ0YWdzXCIpPy5pbmRleE9mKGlucHV0VmFsdWUpID09PSAtMSkge1xyXG4gICAgICBuZXdUYWdzID0gWy4uLm5ld1RhZ3MsIGlucHV0VmFsdWVdO1xyXG4gICAgfVxyXG4gICAgZm9ybS5zZXRGaWVsZHNWYWx1ZSh7IHRhZ3M6IG5ld1RhZ3MgfSk7XHJcbiAgICBzZXRJbnB1dFZhbHVlKFwiXCIpO1xyXG4gICAgc2V0SW5wdXRWaXNpYmxlKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVFZGl0SW5wdXRDaGFuZ2UgPSAoZSkgPT4gc2V0RWRpdElucHV0VmFsdWUoZS50YXJnZXQudmFsdWUpO1xyXG5cclxuICBjb25zdCBoYW5kbGVFZGl0SW5wdXRDb25maXJtID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbmV3VGFncyA9IFsuLi5mb3JtLmdldEZpZWxkVmFsdWUoXCJ0YWdzXCIpXTtcclxuICAgIG5ld1RhZ3NbZWRpdElucHV0SW5kZXhdID0gZWRpdElucHV0VmFsdWU7XHJcbiAgICBmb3JtLnNldEZpZWxkc1ZhbHVlKHsgdGFnczogbmV3VGFncyB9KTtcclxuICAgIHNldEVkaXRJbnB1dEluZGV4KC0xKTtcclxuICAgIHNldEVkaXRJbnB1dFZhbHVlKFwiXCIpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGtleVByZXNzID0gKGUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGUua2V5KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge2Zvcm0uZ2V0RmllbGRWYWx1ZShcInRhZ3NcIik/Lm1hcCgodGFnLCBpKSA9PiB7XHJcbiAgICAgICAgaWYgKGVkaXRJbnB1dEluZGV4ID09PSBpKSB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwiVGFnc1wiIG5hbWU9XCJ0YWdzXCI+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRWRpdElucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVFZGl0SW5wdXRDb25maXJtfVxyXG4gICAgICAgICAgICAgICAgb25QcmVzc0VudGVyPXtoYW5kbGVFZGl0SW5wdXRDb25maXJtfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2VkaXRJbnB1dFZhbHVlfVxyXG4gICAgICAgICAgICAgICAgcmVmPXtlZGl0SW5wdXRCdXR0b259XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWlucHV0XCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGlzTG9uZ1RhZyA9IHRhZy5sZW5ndGggPiAyMDtcclxuICAgICAgICBjb25zdCBUYWdFbGVtID0gKFxyXG4gICAgICAgICAgPFRhZ1xyXG4gICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBoYW5kbGVDbG9zZSh0YWcpfVxyXG4gICAgICAgICAgICBjbG9zYWJsZT17dHJ1ZX1cclxuICAgICAgICAgICAga2V5PXt0YWd9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImVkaXQtdGFnXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICBvbkRvdWJsZUNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGkgIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgc2V0RWRpdElucHV0SW5kZXgoaSk7XHJcbiAgICAgICAgICAgICAgICAgIHNldEVkaXRJbnB1dFZhbHVlKHRhZyk7XHJcbiAgICAgICAgICAgICAgICAgIGVkaXRJbnB1dEJ1dHRvbi5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtpc0xvbmdUYWcgPyBgIyR7dGFnLnNsaWNlKDAsIDIwKX0uLi5gIDogYCMke3RhZ31gfVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L1RhZz5cclxuICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiBpc0xvbmdUYWcgPyAoXHJcbiAgICAgICAgICA8VG9vbHRpcCB0aXRsZT17dGFnfSBrZXk9e3RhZ30+XHJcbiAgICAgICAgICAgIHtUYWdFbGVtfVxyXG4gICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICBUYWdFbGVtXHJcbiAgICAgICAgKTtcclxuICAgICAgfSl9XHJcbiAgICAgIHtpbnB1dFZpc2libGUgJiYgKFxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgb25CbHVyPXtoYW5kbGVJbnB1dENvbmZpcm19XHJcbiAgICAgICAgICBvbktleURvd249eyhlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XHJcbiAgICAgICAgICAgICAgaGFuZGxlSW5wdXRDb25maXJtKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICB2YWx1ZT17aW5wdXRWYWx1ZX1cclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIHJlZj17aW5wdXRCdXR0b259XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ0YWctaW5wdXRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcbiAgICAgIHshaW5wdXRWaXNpYmxlICYmIChcclxuICAgICAgICA8VGFnIGNsYXNzTmFtZT1cInNpdGUtdGFnLXBsdXNcIiBvbkNsaWNrPXtzaG93SW5wdXR9PlxyXG4gICAgICAgICAgPFBsdXNPdXRsaW5lZCAvPiBOZXcgVGFnXHJcbiAgICAgICAgPC9UYWc+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFncztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==