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

  var tags = _ref.tags,
      form = _ref.form;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb3Jtcy9UYWdzLmpzIl0sIm5hbWVzIjpbIlRhZ3MiLCJ0YWdzIiwiZm9ybSIsImlucHV0QnV0dG9uIiwiUmVhY3QiLCJ1c2VSZWYiLCJlZGl0SW5wdXRCdXR0b24iLCJ1c2VTdGF0ZSIsImlucHV0VmlzaWJsZSIsInNldElucHV0VmlzaWJsZSIsImlucHV0VmFsdWUiLCJzZXRJbnB1dFZhbHVlIiwiZWRpdElucHV0SW5kZXgiLCJzZXRFZGl0SW5wdXRJbmRleCIsImVkaXRJbnB1dFZhbHVlIiwic2V0RWRpdElucHV0VmFsdWUiLCJoYW5kbGVDbG9zZSIsInJlbW92ZWRUYWciLCJzZXRGaWVsZHNWYWx1ZSIsImdldEZpZWxkVmFsdWUiLCJmaWx0ZXIiLCJ0YWciLCJzaG93SW5wdXQiLCJjdXJyZW50IiwiZm9jdXMiLCJoYW5kbGVJbnB1dENoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUlucHV0Q29uZmlybSIsIm5ld1RhZ3MiLCJpbmRleE9mIiwiaGFuZGxlRWRpdElucHV0Q2hhbmdlIiwiaGFuZGxlRWRpdElucHV0Q29uZmlybSIsImtleVByZXNzIiwiY29uc29sZSIsImxvZyIsImtleSIsIm1hcCIsImkiLCJpc0xvbmdUYWciLCJsZW5ndGgiLCJUYWdFbGVtIiwicHJldmVudERlZmF1bHQiLCJzbGljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQW9CO0FBQUE7O0FBQUE7O0FBQUEsTUFBakJDLElBQWlCLFFBQWpCQSxJQUFpQjtBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVztBQUMvQixNQUFNQyxXQUFXLEdBQUdDLDRDQUFLLENBQUNDLE1BQU4sRUFBcEI7QUFDQSxNQUFNQyxlQUFlLEdBQUdGLDRDQUFLLENBQUNDLE1BQU4sRUFBeEI7O0FBRitCLHdCQUdTRCw0Q0FBSyxD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dUIsS0FBSixDQUFVLENBQVYsRUFBYSxFQUFiLENBQVAsc0JBQW1DdkIsR0FBbkMsQ0FWWixDQU5GLENBREY7O0FBcUJBLFdBQU9tQixTQUFTLEdBQ2QsTUFBQyw0Q0FBRDtBQUFTLFdBQUssRUFBRW5CLEdBQWhCO0FBQXFCLFNBQUcsRUFBRUEsR0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHcUIsT0FESCxDQURjLEdBS2RBLE9BTEY7QUFPRCxHQTNDQSxDQURILEVBNkNHbEMsWUFBWSxJQUNYO0FBQ0UsWUFBUSxFQUFFaUIsaUJBRFo7QUFFRSxVQUFNLEVBQUVJLGtCQUZWO0FBR0UsYUFBUyxFQUFFLG1CQUFDSCxDQUFELEVBQU87QUFDaEIsVUFBSUEsQ0FBQyxDQUFDVyxHQUFGLEtBQVUsT0FBZCxFQUF1QjtBQUNyQlIsMEJBQWtCO0FBQ25CO0FBQ0YsS0FQSDtBQVFFLFNBQUssRUFBRW5CLFVBUlQ7QUFTRSxRQUFJLEVBQUMsTUFUUDtBQVVFLE9BQUcsRUFBRVAsV0FWUDtBQVdFLGFBQVMsRUFBQyxXQVhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUE5Q0osRUE0REcsQ0FBQ0ssWUFBRCxJQUNDLE1BQUMsd0NBQUQ7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUErQixXQUFPLEVBQUVjLFNBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixhQTdESixDQURGO0FBb0VELENBbkhEOztHQUFNdEIsSTs7S0FBQUEsSTtBQXFIU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3RvcnkvbmV3LjcyYTBiZWQ5MzhmOWVjYmFmNjEzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUYWcsIFRvb2x0aXAsIEZvcm0gfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyBQbHVzT3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuXHJcbmNvbnN0IFRhZ3MgPSAoeyB0YWdzLCBmb3JtIH0pID0+IHtcclxuICBjb25zdCBpbnB1dEJ1dHRvbiA9IFJlYWN0LnVzZVJlZigpO1xyXG4gIGNvbnN0IGVkaXRJbnB1dEJ1dHRvbiA9IFJlYWN0LnVzZVJlZigpO1xyXG4gIGNvbnN0IFtpbnB1dFZpc2libGUsIHNldElucHV0VmlzaWJsZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lucHV0VmFsdWUsIHNldElucHV0VmFsdWVdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2VkaXRJbnB1dEluZGV4LCBzZXRFZGl0SW5wdXRJbmRleF0gPSBSZWFjdC51c2VTdGF0ZSgtMSk7XHJcbiAgY29uc3QgW2VkaXRJbnB1dFZhbHVlLCBzZXRFZGl0SW5wdXRWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAocmVtb3ZlZFRhZykgPT4ge1xyXG4gICAgZm9ybS5zZXRGaWVsZHNWYWx1ZSh7XHJcbiAgICAgIHRhZ3M6IGZvcm0uZ2V0RmllbGRWYWx1ZShcInRhZ3NcIik/LmZpbHRlcigodGFnKSA9PiB0YWcgIT09IHJlbW92ZWRUYWcpLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2hvd0lucHV0ID0gKCkgPT4ge1xyXG4gICAgc2V0SW5wdXRWaXNpYmxlKHRydWUpO1xyXG4gICAgaW5wdXRCdXR0b24/LmN1cnJlbnQ/LmZvY3VzKCk7XHJcbiAgICAvL2VkaXRJbnB1dEJ1dHRvbi5jdXJyZW50LmZvY3VzKCk7XHJcbiAgICAvLztcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChlKSA9PiBzZXRJbnB1dFZhbHVlKGUudGFyZ2V0LnZhbHVlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlSW5wdXRDb25maXJtID0gKCkgPT4ge1xyXG4gICAgbGV0IG5ld1RhZ3MgPSBmb3JtLmdldEZpZWxkVmFsdWUoXCJ0YWdzXCIpO1xyXG4gICAgaWYgKGlucHV0VmFsdWUgJiYgZm9ybS5nZXRGaWVsZFZhbHVlKFwidGFnc1wiKT8uaW5kZXhPZihpbnB1dFZhbHVlKSA9PT0gLTEpIHtcclxuICAgICAgbmV3VGFncyA9IFsuLi5uZXdUYWdzLCBpbnB1dFZhbHVlXTtcclxuICAgIH1cclxuICAgIGZvcm0uc2V0RmllbGRzVmFsdWUoeyB0YWdzOiBuZXdUYWdzIH0pO1xyXG4gICAgc2V0SW5wdXRWYWx1ZShcIlwiKTtcclxuICAgIHNldElucHV0VmlzaWJsZShmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRWRpdElucHV0Q2hhbmdlID0gKGUpID0+IHNldEVkaXRJbnB1dFZhbHVlKGUudGFyZ2V0LnZhbHVlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRWRpdElucHV0Q29uZmlybSA9ICgpID0+IHtcclxuICAgIGNvbnN0IG5ld1RhZ3MgPSBbLi4uZm9ybS5nZXRGaWVsZFZhbHVlKFwidGFnc1wiKV07XHJcbiAgICBuZXdUYWdzW2VkaXRJbnB1dEluZGV4XSA9IGVkaXRJbnB1dFZhbHVlO1xyXG4gICAgZm9ybS5zZXRGaWVsZHNWYWx1ZSh7IHRhZ3M6IG5ld1RhZ3MgfSk7XHJcbiAgICBzZXRFZGl0SW5wdXRJbmRleCgtMSk7XHJcbiAgICBzZXRFZGl0SW5wdXRWYWx1ZShcIlwiKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBrZXlQcmVzcyA9IChlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhlLmtleSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCJUYWdzXCIgbmFtZT1cInRhZ3NcIj5cclxuICAgICAge2Zvcm0uZ2V0RmllbGRWYWx1ZShcInRhZ3NcIik/Lm1hcCgodGFnLCBpKSA9PiB7XHJcbiAgICAgICAgaWYgKGVkaXRJbnB1dEluZGV4ID09PSBpKSB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUVkaXRJbnB1dENoYW5nZX1cclxuICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUVkaXRJbnB1dENvbmZpcm19XHJcbiAgICAgICAgICAgICAgb25QcmVzc0VudGVyPXtoYW5kbGVFZGl0SW5wdXRDb25maXJtfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtlZGl0SW5wdXRWYWx1ZX1cclxuICAgICAgICAgICAgICByZWY9e2VkaXRJbnB1dEJ1dHRvbn1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWlucHV0XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGlzTG9uZ1RhZyA9IHRhZy5sZW5ndGggPiAyMDtcclxuICAgICAgICBjb25zdCBUYWdFbGVtID0gKFxyXG4gICAgICAgICAgPFRhZ1xyXG4gICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBoYW5kbGVDbG9zZSh0YWcpfVxyXG4gICAgICAgICAgICBjbG9zYWJsZT17dHJ1ZX1cclxuICAgICAgICAgICAga2V5PXt0YWd9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImVkaXQtdGFnXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICBvbkRvdWJsZUNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGkgIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgc2V0RWRpdElucHV0SW5kZXgoaSk7XHJcbiAgICAgICAgICAgICAgICAgIHNldEVkaXRJbnB1dFZhbHVlKHRhZyk7XHJcbiAgICAgICAgICAgICAgICAgIGVkaXRJbnB1dEJ1dHRvbi5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtpc0xvbmdUYWcgPyBgIyR7dGFnLnNsaWNlKDAsIDIwKX0uLi5gIDogYCMke3RhZ31gfVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L1RhZz5cclxuICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiBpc0xvbmdUYWcgPyAoXHJcbiAgICAgICAgICA8VG9vbHRpcCB0aXRsZT17dGFnfSBrZXk9e3RhZ30+XHJcbiAgICAgICAgICAgIHtUYWdFbGVtfVxyXG4gICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICBUYWdFbGVtXHJcbiAgICAgICAgKTtcclxuICAgICAgfSl9XHJcbiAgICAgIHtpbnB1dFZpc2libGUgJiYgKFxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgb25CbHVyPXtoYW5kbGVJbnB1dENvbmZpcm19XHJcbiAgICAgICAgICBvbktleURvd249eyhlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XHJcbiAgICAgICAgICAgICAgaGFuZGxlSW5wdXRDb25maXJtKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICB2YWx1ZT17aW5wdXRWYWx1ZX1cclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIHJlZj17aW5wdXRCdXR0b259XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ0YWctaW5wdXRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcbiAgICAgIHshaW5wdXRWaXNpYmxlICYmIChcclxuICAgICAgICA8VGFnIGNsYXNzTmFtZT1cInNpdGUtdGFnLXBsdXNcIiBvbkNsaWNrPXtzaG93SW5wdXR9PlxyXG4gICAgICAgICAgPFBsdXNPdXRsaW5lZCAvPiBOZXcgVGFnXHJcbiAgICAgICAgPC9UYWc+XHJcbiAgICAgICl9XHJcbiAgICA8L0Zvcm0uSXRlbT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFncztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==