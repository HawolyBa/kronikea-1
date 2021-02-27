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

  var tags = _ref.tags,
      setTags = _ref.setTags;
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
          lineNumber: 54,
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

    return isLongTag ? __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], {
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
  }), !inputVisible && __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Tag"], {
    className: "site-tag-plus",
    onClick: showInput,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 9
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["PlusOutlined"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb3Jtcy9UYWdzLmpzIl0sIm5hbWVzIjpbIlRhZ3MiLCJ0YWdzIiwic2V0VGFncyIsImlucHV0QnV0dG9uIiwiUmVhY3QiLCJ1c2VSZWYiLCJlZGl0SW5wdXRCdXR0b24iLCJ1c2VTdGF0ZSIsImlucHV0VmlzaWJsZSIsInNldElucHV0VmlzaWJsZSIsImlucHV0VmFsdWUiLCJzZXRJbnB1dFZhbHVlIiwiZWRpdElucHV0SW5kZXgiLCJzZXRFZGl0SW5wdXRJbmRleCIsImVkaXRJbnB1dFZhbHVlIiwic2V0RWRpdElucHV0VmFsdWUiLCJoYW5kbGVDbG9zZSIsInJlbW92ZWRUYWciLCJmaWx0ZXIiLCJ0YWciLCJzaG93SW5wdXQiLCJoYW5kbGVJbnB1dENoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUlucHV0Q29uZmlybSIsIm5ld1RhZ3MiLCJpbmRleE9mIiwiaGFuZGxlRWRpdElucHV0Q2hhbmdlIiwiaGFuZGxlRWRpdElucHV0Q29uZmlybSIsImtleVByZXNzIiwiY29uc29sZSIsImxvZyIsImtleSIsIm1hcCIsImkiLCJpc0xvbmdUYWciLCJsZW5ndGgiLCJUYWdFbGVtIiwiZm9jdXMiLCJwcmV2ZW50RGVmYXVsdCIsInNsaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBdUI7QUFBQTs7QUFBQSxNQUFwQkMsSUFBb0IsUUFBcEJBLElBQW9CO0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjO0FBQ2xDLE1BQU1DLFdBQVcsR0FBR0MsNENBQUssQ0FBQ0MsTUFBTixFQUFwQjtBQUNBLE1BQU1DLGVBQWUsR0FBR0YsNENBQUssQ0FBQ0MsTUFBTixFQUF4Qjs7QUFGa0Msd0JBR01ELDRDQUFLLENBQUNHLFFBQU4sQ0FBZSxLQUFmLENBSE47QUFBQTtBQUFBLE1BRzNCQyxZQUgyQjtBQUFBLE1BR2JDLGVBSGE7O0FBQUEseUJBSUVMLDRDQUFLLENBQUNHLFFBQU4sQ0FBZSxFQUFmLENBSkY7QUFBQTtBQUFBLE1BSTNCRyxVQUoyQjtBQUFBLE1BSWZDLGFBSmU7O0FBQUEseUJBS1VQLDRDQUFLLENBQUNHLFFBQU4sQ0FBZSxDQUFDLENBQWhCLENBTFY7QUFBQTtBQUFBLE1BSzNCSyxjQUwyQjtBQUFBLE1BS1hDLGlCQUxXOztBQUFBLHlCQU1VVCw0Q0FBSyxDQUFDRyxRQUFOLENBQWUsRUFBZixDQU5WO0FBQUE7QUFBQSxNQU0zQk8sY0FOMkI7QUFBQSxNQU1YQyxpQkFOVzs7QUFRbEMsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsVUFBRDtBQUFBLFdBQ2xCZixPQUFPLENBQUNELElBQUksQ0FBQ2lCLE1BQUwsQ0FBWSxVQUFDQyxHQUFEO0FBQUEsYUFBU2xCLElBQUksS0FBS2dCLFVBQWxCO0FBQUEsS0FBWixDQUFELENBRFc7QUFBQSxHQUFwQjs7QUFHQSxNQUFNRyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3RCWCxtQkFBZSxDQUFDLElBQUQsQ0FBZixDQURzQixDQUV0QjtBQUNBO0FBQ0E7QUFDRCxHQUxEOztBQU9BLE1BQU1ZLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ0MsQ0FBRDtBQUFBLFdBQU9YLGFBQWEsQ0FBQ1csQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBcEI7QUFBQSxHQUExQjs7QUFFQSxNQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLEdBQU07QUFDL0IsUUFBSUMsT0FBTyxHQUFHekIsSUFBZDs7QUFDQSxRQUFJUyxVQUFVLElBQUlULElBQUksQ0FBQzBCLE9BQUwsQ0FBYWpCLFVBQWIsTUFBNkIsQ0FBQyxDQUFoRCxFQUFtRDtBQUNqRGdCLGFBQU8sMEdBQU9BLE9BQVAsSUFBZ0JoQixVQUFoQixFQUFQO0FBQ0Q7O0FBRURSLFdBQU8sQ0FBQ3dCLE9BQUQsQ0FBUDtBQUNBZixpQkFBYSxDQUFDLEVBQUQsQ0FBYjtBQUNBRixtQkFBZSxDQUFDLEtBQUQsQ0FBZjtBQUNELEdBVEQ7O0FBV0EsTUFBTW1CLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsQ0FBQ04sQ0FBRDtBQUFBLFdBQU9QLGlCQUFpQixDQUFDTyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUF4QjtBQUFBLEdBQTlCOztBQUVBLE1BQU1LLHNCQUFzQixHQUFHLFNBQXpCQSxzQkFBeUIsR0FBTTtBQUNuQyxRQUFNSCxPQUFPLEdBQUcsNkZBQUl6QixJQUFQLENBQWI7O0FBQ0F5QixXQUFPLENBQUNkLGNBQUQsQ0FBUCxHQUEwQkUsY0FBMUI7QUFDQVosV0FBTyxDQUFDd0IsT0FBRCxDQUFQO0FBQ0FiLHFCQUFpQixDQUFDLENBQUMsQ0FBRixDQUFqQjtBQUNBRSxxQkFBaUIsQ0FBQyxFQUFELENBQWpCO0FBQ0QsR0FORDs7QUFRQSxNQUFNZSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDUixDQUFELEVBQU87QUFDdEJTLFdBQU8sQ0FBQ0MsR0FBUixDQUFZVixDQUFDLENBQUNXLEdBQWQ7QUFDRCxHQUZEOztBQUlBLFNBQ0UsbUVBQ0doQyxJQURILGFBQ0dBLElBREgsdUJBQ0dBLElBQUksQ0FBRWlDLEdBQU4sQ0FBVSxVQUFDZixHQUFELEVBQU1nQixDQUFOLEVBQVk7QUFDckIsUUFBSXZCLGNBQWMsS0FBS3VCLENBQXZCLEVBQTBCO0FBQ3hCLGFBQ0U7QUFDRSxXQUFHLEVBQUVBLENBRFA7QUFFRSxnQkFBUSxFQUFFUCxxQkFGWjtBQUdFLGNBQU0sRUFBRUMsc0JBSFY7QUFJRSxvQkFBWSxFQUFFQSxzQkFKaEI7QUFLRSxhQUFLLEVBQUVmLGNBTFQ7QUFNRSxXQUFHLEVBQUVSLGVBTlA7QUFPRSxpQkFBUyxFQUFDLFlBUFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGO0FBV0Q7O0FBQ0QsUUFBTThCLFNBQVMsR0FBR2pCLEdBQUcsQ0FBQ2tCLE1BQUosR0FBYSxFQUEvQjs7QUFDQSxRQUFNQyxPQUFPLEdBQ1gsTUFBQyx3Q0FBRDtBQUNFLGFBQU8sRUFBRTtBQUFBLGVBQU10QixXQUFXLENBQUNHLEdBQUQsQ0FBakI7QUFBQSxPQURYO0FBRUUsY0FBUSxFQUFFLElBRlo7QUFHRSxTQUFHLEVBQUVBLEdBSFA7QUFJRSxlQUFTLEVBQUMsVUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BTUU7QUFDRSxtQkFBYSxFQUFFLHVCQUFDRyxDQUFELEVBQU87QUFDcEIsWUFBSWEsQ0FBQyxLQUFLLENBQVYsRUFBYTtBQUNYdEIsMkJBQWlCLENBQUNzQixDQUFELENBQWpCO0FBQ0FwQiwyQkFBaUIsQ0FBQ0ksR0FBRCxDQUFqQjtBQUNBYix5QkFBZSxDQUFDaUMsS0FBaEI7QUFDQWpCLFdBQUMsQ0FBQ2tCLGNBQUY7QUFDRDtBQUNGLE9BUkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQVVHSixTQUFTLGFBQU1qQixHQUFHLENBQUNzQixLQUFKLENBQVUsQ0FBVixFQUFhLEVBQWIsQ0FBTixXQUE4QnRCLEdBVjFDLENBTkYsQ0FERjs7QUFxQkEsV0FBT2lCLFNBQVMsR0FDZCxNQUFDLDRDQUFEO0FBQVMsV0FBSyxFQUFFakIsR0FBaEI7QUFBcUIsU0FBRyxFQUFFQSxHQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dtQixPQURILENBRGMsR0FLZEEsT0FMRjtBQU9ELEdBM0NBLENBREgsRUE2Q0c5QixZQUFZLElBQ1g7QUFDRSxZQUFRLEVBQUVhLGlCQURaO0FBRUUsVUFBTSxFQUFFSSxrQkFGVjtBQUdFLGFBQVMsRUFBRSxtQkFBQ0gsQ0FBRCxFQUFPO0FBQ2hCLFVBQUlBLENBQUMsQ0FBQ1csR0FBRixLQUFVLE9BQWQsRUFBdUI7QUFDckJSLDBCQUFrQjtBQUNuQjtBQUNGLEtBUEg7QUFRRSxTQUFLLEVBQUVmLFVBUlQ7QUFTRSxRQUFJLEVBQUMsTUFUUDtBQVVFLE9BQUcsRUFBRVAsV0FWUDtBQVdFLGFBQVMsRUFBQyxZQVhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUE5Q0osRUE0REcsQ0FBQ0ssWUFBRCxJQUNDLE1BQUMsd0NBQUQ7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUErQixXQUFPLEVBQUVZLFNBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixhQTdESixDQURGO0FBb0VELENBakhEOztHQUFNcEIsSTs7S0FBQUEsSTtBQW1IU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3RvcnkvbmV3LmM3YjQyY2Q0OGIxYjk1NjFhYzdkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUYWcsIFRvb2x0aXAgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyBQbHVzT3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuXHJcbmNvbnN0IFRhZ3MgPSAoeyB0YWdzLCBzZXRUYWdzIH0pID0+IHtcclxuICBjb25zdCBpbnB1dEJ1dHRvbiA9IFJlYWN0LnVzZVJlZigpO1xyXG4gIGNvbnN0IGVkaXRJbnB1dEJ1dHRvbiA9IFJlYWN0LnVzZVJlZigpO1xyXG4gIGNvbnN0IFtpbnB1dFZpc2libGUsIHNldElucHV0VmlzaWJsZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lucHV0VmFsdWUsIHNldElucHV0VmFsdWVdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2VkaXRJbnB1dEluZGV4LCBzZXRFZGl0SW5wdXRJbmRleF0gPSBSZWFjdC51c2VTdGF0ZSgtMSk7XHJcbiAgY29uc3QgW2VkaXRJbnB1dFZhbHVlLCBzZXRFZGl0SW5wdXRWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAocmVtb3ZlZFRhZykgPT5cclxuICAgIHNldFRhZ3ModGFncy5maWx0ZXIoKHRhZykgPT4gdGFncyAhPT0gcmVtb3ZlZFRhZykpO1xyXG5cclxuICBjb25zdCBzaG93SW5wdXQgPSAoKSA9PiB7XHJcbiAgICBzZXRJbnB1dFZpc2libGUodHJ1ZSk7XHJcbiAgICAvL2NvbnNvbGUubG9nKCk7XHJcbiAgICAvL2VkaXRJbnB1dEJ1dHRvbi5jdXJyZW50LmZvY3VzKCk7XHJcbiAgICAvL2lucHV0QnV0dG9uLmN1cnJlbnQuZm9jdXMoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChlKSA9PiBzZXRJbnB1dFZhbHVlKGUudGFyZ2V0LnZhbHVlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlSW5wdXRDb25maXJtID0gKCkgPT4ge1xyXG4gICAgbGV0IG5ld1RhZ3MgPSB0YWdzO1xyXG4gICAgaWYgKGlucHV0VmFsdWUgJiYgdGFncy5pbmRleE9mKGlucHV0VmFsdWUpID09PSAtMSkge1xyXG4gICAgICBuZXdUYWdzID0gWy4uLm5ld1RhZ3MsIGlucHV0VmFsdWVdO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFRhZ3MobmV3VGFncyk7XHJcbiAgICBzZXRJbnB1dFZhbHVlKFwiXCIpO1xyXG4gICAgc2V0SW5wdXRWaXNpYmxlKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVFZGl0SW5wdXRDaGFuZ2UgPSAoZSkgPT4gc2V0RWRpdElucHV0VmFsdWUoZS50YXJnZXQudmFsdWUpO1xyXG5cclxuICBjb25zdCBoYW5kbGVFZGl0SW5wdXRDb25maXJtID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbmV3VGFncyA9IFsuLi50YWdzXTtcclxuICAgIG5ld1RhZ3NbZWRpdElucHV0SW5kZXhdID0gZWRpdElucHV0VmFsdWU7XHJcbiAgICBzZXRUYWdzKG5ld1RhZ3MpO1xyXG4gICAgc2V0RWRpdElucHV0SW5kZXgoLTEpO1xyXG4gICAgc2V0RWRpdElucHV0VmFsdWUoXCJcIik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qga2V5UHJlc3MgPSAoZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZS5rZXkpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7dGFncz8ubWFwKCh0YWcsIGkpID0+IHtcclxuICAgICAgICBpZiAoZWRpdElucHV0SW5kZXggPT09IGkpIHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRWRpdElucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlRWRpdElucHV0Q29uZmlybX1cclxuICAgICAgICAgICAgICBvblByZXNzRW50ZXI9e2hhbmRsZUVkaXRJbnB1dENvbmZpcm19XHJcbiAgICAgICAgICAgICAgdmFsdWU9e2VkaXRJbnB1dFZhbHVlfVxyXG4gICAgICAgICAgICAgIHJlZj17ZWRpdElucHV0QnV0dG9ufVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0taW5wdXRcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgaXNMb25nVGFnID0gdGFnLmxlbmd0aCA+IDIwO1xyXG4gICAgICAgIGNvbnN0IFRhZ0VsZW0gPSAoXHJcbiAgICAgICAgICA8VGFnXHJcbiAgICAgICAgICAgIG9uQ2xvc2U9eygpID0+IGhhbmRsZUNsb3NlKHRhZyl9XHJcbiAgICAgICAgICAgIGNsb3NhYmxlPXt0cnVlfVxyXG4gICAgICAgICAgICBrZXk9e3RhZ31cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZWRpdC10YWdcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgIG9uRG91YmxlQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaSAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICBzZXRFZGl0SW5wdXRJbmRleChpKTtcclxuICAgICAgICAgICAgICAgICAgc2V0RWRpdElucHV0VmFsdWUodGFnKTtcclxuICAgICAgICAgICAgICAgICAgZWRpdElucHV0QnV0dG9uLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2lzTG9uZ1RhZyA/IGAke3RhZy5zbGljZSgwLCAyMCl9Li4uYCA6IHRhZ31cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9UYWc+XHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXR1cm4gaXNMb25nVGFnID8gKFxyXG4gICAgICAgICAgPFRvb2x0aXAgdGl0bGU9e3RhZ30ga2V5PXt0YWd9PlxyXG4gICAgICAgICAgICB7VGFnRWxlbX1cclxuICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgVGFnRWxlbVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pfVxyXG4gICAgICB7aW5wdXRWaXNpYmxlICYmIChcclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cclxuICAgICAgICAgIG9uQmx1cj17aGFuZGxlSW5wdXRDb25maXJtfVxyXG4gICAgICAgICAgb25LZXlEb3duPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xyXG4gICAgICAgICAgICAgIGhhbmRsZUlucHV0Q29uZmlybSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgdmFsdWU9e2lucHV0VmFsdWV9XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICByZWY9e2lucHV0QnV0dG9ufVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1pbnB1dFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgKX1cclxuICAgICAgeyFpbnB1dFZpc2libGUgJiYgKFxyXG4gICAgICAgIDxUYWcgY2xhc3NOYW1lPVwic2l0ZS10YWctcGx1c1wiIG9uQ2xpY2s9e3Nob3dJbnB1dH0+XHJcbiAgICAgICAgICA8UGx1c091dGxpbmVkIC8+IE5ldyBUYWdcclxuICAgICAgICA8L1RhZz5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYWdzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9