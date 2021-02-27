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
      setTags = _ref.setTags,
      storyInfo = _ref.storyInfo;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb3Jtcy9UYWdzLmpzIl0sIm5hbWVzIjpbIlRhZ3MiLCJ0YWdzIiwic2V0VGFncyIsInN0b3J5SW5mbyIsImlucHV0QnV0dG9uIiwiUmVhY3QiLCJ1c2VSZWYiLCJlZGl0SW5wdXRCdXR0b24iLCJ1c2VTdGF0ZSIsImlucHV0VmlzaWJsZSIsInNldElucHV0VmlzaWJsZSIsImlucHV0VmFsdWUiLCJzZXRJbnB1dFZhbHVlIiwiZWRpdElucHV0SW5kZXgiLCJzZXRFZGl0SW5wdXRJbmRleCIsImVkaXRJbnB1dFZhbHVlIiwic2V0RWRpdElucHV0VmFsdWUiLCJoYW5kbGVDbG9zZSIsInJlbW92ZWRUYWciLCJmaWx0ZXIiLCJ0YWciLCJzaG93SW5wdXQiLCJoYW5kbGVJbnB1dENoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUlucHV0Q29uZmlybSIsIm5ld1RhZ3MiLCJpbmRleE9mIiwiaGFuZGxlRWRpdElucHV0Q2hhbmdlIiwiaGFuZGxlRWRpdElucHV0Q29uZmlybSIsImtleVByZXNzIiwiY29uc29sZSIsImxvZyIsImtleSIsIm1hcCIsImkiLCJpc0xvbmdUYWciLCJsZW5ndGgiLCJUYWdFbGVtIiwiZm9jdXMiLCJwcmV2ZW50RGVmYXVsdCIsInNsaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBa0M7QUFBQTs7QUFBQSxNQUEvQkMsSUFBK0IsUUFBL0JBLElBQStCO0FBQUEsTUFBekJDLE9BQXlCLFFBQXpCQSxPQUF5QjtBQUFBLE1BQWhCQyxTQUFnQixRQUFoQkEsU0FBZ0I7QUFDN0MsTUFBTUMsV0FBVyxHQUFHQyw0Q0FBSyxDQUFDQyxNQUFOLEVBQXBCO0FBQ0EsTUFBTUMsZUFBZSxHQUFHRiw0Q0FBSyxDQUFDQyxNQUFOLEVBQXhCOztBQUY2Qyx3QkFHTEQsNENBQUssQ0FBQ0csUUFBTixDQUFlLEtBQWYsQ0FISztBQUFBO0FBQUEsTUFHdENDLFlBSHNDO0FBQUEsTUFHeEJDLGVBSHdCOztBQUFBLHlCQUlUTCw0Q0FBSyxDQUFDRyxRQUFOLENBQWUsRUFBZixDQUpTO0FBQUE7QUFBQSxNQUl0Q0csVUFKc0M7QUFBQSxNQUkxQkMsYUFKMEI7O0FBQUEseUJBS0RQLDRDQUFLLENBQUNHLFFBQU4sQ0FBZSxDQUFDLENBQWhCLENBTEM7QUFBQTtBQUFBLE1BS3RDSyxjQUxzQztBQUFBLE1BS3RCQyxpQkFMc0I7O0FBQUEseUJBTURULDRDQUFLLENBQUNHLFFBQU4sQ0FBZSxFQUFmLENBTkM7QUFBQTtBQUFBLE1BTXRDTyxjQU5zQztBQUFBLE1BTXRCQyxpQkFOc0I7O0FBUTdDLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLFVBQUQ7QUFBQSxXQUNsQmhCLE9BQU8sQ0FBQ0QsSUFBSSxDQUFDa0IsTUFBTCxDQUFZLFVBQUNDLEdBQUQ7QUFBQSxhQUFTbkIsSUFBSSxLQUFLaUIsVUFBbEI7QUFBQSxLQUFaLENBQUQsQ0FEVztBQUFBLEdBQXBCOztBQUdBLE1BQU1HLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFDdEJYLG1CQUFlLENBQUMsSUFBRCxDQUFmLENBRHNCLENBRXRCO0FBQ0E7QUFDQTtBQUNELEdBTEQ7O0FBT0EsTUFBTVksaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDQyxDQUFEO0FBQUEsV0FBT1gsYUFBYSxDQUFDVyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFwQjtBQUFBLEdBQTFCOztBQUVBLE1BQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsR0FBTTtBQUMvQixRQUFJQyxPQUFPLEdBQUcxQixJQUFkOztBQUNBLFFBQUlVLFVBQVUsSUFBSVYsSUFBSSxDQUFDMkIsT0FBTCxDQUFhakIsVUFBYixNQUE2QixDQUFDLENBQWhELEVBQW1EO0FBQ2pEZ0IsYUFBTywwR0FBT0EsT0FBUCxJQUFnQmhCLFVBQWhCLEVBQVA7QUFDRDs7QUFFRFQsV0FBTyxDQUFDeUIsT0FBRCxDQUFQO0FBQ0FmLGlCQUFhLENBQUMsRUFBRCxDQUFiO0FBQ0FGLG1CQUFlLENBQUMsS0FBRCxDQUFmO0FBQ0QsR0FURDs7QUFXQSxNQUFNbUIscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixDQUFDTixDQUFEO0FBQUEsV0FBT1AsaUJBQWlCLENBQUNPLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQXhCO0FBQUEsR0FBOUI7O0FBRUEsTUFBTUssc0JBQXNCLEdBQUcsU0FBekJBLHNCQUF5QixHQUFNO0FBQ25DLFFBQU1ILE9BQU8sR0FBRyw2RkFBSTFCLElBQVAsQ0FBYjs7QUFDQTBCLFdBQU8sQ0FBQ2QsY0FBRCxDQUFQLEdBQTBCRSxjQUExQjtBQUNBYixXQUFPLENBQUN5QixPQUFELENBQVA7QUFDQWIscUJBQWlCLENBQUMsQ0FBQyxDQUFGLENBQWpCO0FBQ0FFLHFCQUFpQixDQUFDLEVBQUQsQ0FBakI7QUFDRCxHQU5EOztBQVFBLE1BQU1lLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNSLENBQUQsRUFBTztBQUN0QlMsV0FBTyxDQUFDQyxHQUFSLENBQVlWLENBQUMsQ0FBQ1csR0FBZDtBQUNELEdBRkQ7O0FBSUEsU0FDRSxtRUFDR2pDLElBREgsYUFDR0EsSUFESCx1QkFDR0EsSUFBSSxDQUFFa0MsR0FBTixDQUFVLFVBQUNmLEdBQUQsRUFBTWdCLENBQU4sRUFBWTtBQUNyQixRQUFJdkIsY0FBYyxLQUFLdUIsQ0FBdkIsRUFBMEI7QUFDeEIsYUFDRTtBQUNFLFdBQUcsRUFBRUEsQ0FEUDtBQUVFLGdCQUFRLEVBQUVQLHFCQUZaO0FBR0UsY0FBTSxFQUFFQyxzQkFIVjtBQUlFLG9CQUFZLEVBQUVBLHNCQUpoQjtBQUtFLGFBQUssRUFBRWYsY0FMVDtBQU1FLFdBQUcsRUFBRVIsZUFOUDtBQU9FLGlCQUFTLEVBQUMsWUFQWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREY7QUFXRDs7QUFDRCxRQUFNOEIsU0FBUyxHQUFHakIsR0FBRyxDQUFDa0IsTUFBSixHQUFhLEVBQS9COztBQUNBLFFBQU1DLE9BQU8sR0FDWCxNQUFDLHdDQUFEO0FBQ0UsYUFBTyxFQUFFO0FBQUEsZUFBTXRCLFdBQVcsQ0FBQ0csR0FBRCxDQUFqQjtBQUFBLE9BRFg7QUFFRSxjQUFRLEVBQUUsSUFGWjtBQUdFLFNBQUcsRUFBRUEsR0FIUDtBQUlFLGVBQVMsRUFBQyxVQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FNRTtBQUNFLG1CQUFhLEVBQUUsdUJBQUNHLENBQUQsRUFBTztBQUNwQixZQUFJYSxDQUFDLEtBQUssQ0FBVixFQUFhO0FBQ1h0QiwyQkFBaUIsQ0FBQ3NCLENBQUQsQ0FBakI7QUFDQXBCLDJCQUFpQixDQUFDSSxHQUFELENBQWpCO0FBQ0FiLHlCQUFlLENBQUNpQyxLQUFoQjtBQUNBakIsV0FBQyxDQUFDa0IsY0FBRjtBQUNEO0FBQ0YsT0FSSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BVUdKLFNBQVMsYUFBTWpCLEdBQUcsQ0FBQ3NCLEtBQUosQ0FBVSxDQUFWLEVBQWEsRUFBYixDQUFOLFdBQThCdEIsR0FWMUMsQ0FORixDQURGOztBQXFCQSxXQUFPaUIsU0FBUyxHQUNkLE1BQUMsNENBQUQ7QUFBUyxXQUFLLEVBQUVqQixHQUFoQjtBQUFxQixTQUFHLEVBQUVBLEdBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR21CLE9BREgsQ0FEYyxHQUtkQSxPQUxGO0FBT0QsR0EzQ0EsQ0FESCxFQTZDRzlCLFlBQVksSUFDWDtBQUNFLFlBQVEsRUFBRWEsaUJBRFo7QUFFRSxVQUFNLEVBQUVJLGtCQUZWO0FBR0UsYUFBUyxFQUFFLG1CQUFDSCxDQUFELEVBQU87QUFDaEIsVUFBSUEsQ0FBQyxDQUFDVyxHQUFGLEtBQVUsT0FBZCxFQUF1QjtBQUNyQlIsMEJBQWtCO0FBQ25CO0FBQ0YsS0FQSDtBQVFFLFNBQUssRUFBRWYsVUFSVDtBQVNFLFFBQUksRUFBQyxNQVRQO0FBVUUsT0FBRyxFQUFFUCxXQVZQO0FBV0UsYUFBUyxFQUFDLFlBWFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTlDSixFQTRERyxDQUFDSyxZQUFELElBQ0MsTUFBQyx3Q0FBRDtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQStCLFdBQU8sRUFBRVksU0FBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLGFBN0RKLENBREY7QUFvRUQsQ0FqSEQ7O0dBQU1yQixJOztLQUFBQSxJO0FBbUhTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zdG9yeS9uZXcuMjhlNWM0MjQyOGMzNTg0YTljNTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRhZywgVG9vbHRpcCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IFBsdXNPdXRsaW5lZCB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5cclxuY29uc3QgVGFncyA9ICh7IHRhZ3MsIHNldFRhZ3MsIHN0b3J5SW5mbyB9KSA9PiB7XHJcbiAgY29uc3QgaW5wdXRCdXR0b24gPSBSZWFjdC51c2VSZWYoKTtcclxuICBjb25zdCBlZGl0SW5wdXRCdXR0b24gPSBSZWFjdC51c2VSZWYoKTtcclxuICBjb25zdCBbaW5wdXRWaXNpYmxlLCBzZXRJbnB1dFZpc2libGVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpbnB1dFZhbHVlLCBzZXRJbnB1dFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtlZGl0SW5wdXRJbmRleCwgc2V0RWRpdElucHV0SW5kZXhdID0gUmVhY3QudXNlU3RhdGUoLTEpO1xyXG4gIGNvbnN0IFtlZGl0SW5wdXRWYWx1ZSwgc2V0RWRpdElucHV0VmFsdWVdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKHJlbW92ZWRUYWcpID0+XHJcbiAgICBzZXRUYWdzKHRhZ3MuZmlsdGVyKCh0YWcpID0+IHRhZ3MgIT09IHJlbW92ZWRUYWcpKTtcclxuXHJcbiAgY29uc3Qgc2hvd0lucHV0ID0gKCkgPT4ge1xyXG4gICAgc2V0SW5wdXRWaXNpYmxlKHRydWUpO1xyXG4gICAgLy9jb25zb2xlLmxvZygpO1xyXG4gICAgLy9lZGl0SW5wdXRCdXR0b24uY3VycmVudC5mb2N1cygpO1xyXG4gICAgLy9pbnB1dEJ1dHRvbi5jdXJyZW50LmZvY3VzKCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZSkgPT4gc2V0SW5wdXRWYWx1ZShlLnRhcmdldC52YWx1ZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUlucHV0Q29uZmlybSA9ICgpID0+IHtcclxuICAgIGxldCBuZXdUYWdzID0gdGFncztcclxuICAgIGlmIChpbnB1dFZhbHVlICYmIHRhZ3MuaW5kZXhPZihpbnB1dFZhbHVlKSA9PT0gLTEpIHtcclxuICAgICAgbmV3VGFncyA9IFsuLi5uZXdUYWdzLCBpbnB1dFZhbHVlXTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRUYWdzKG5ld1RhZ3MpO1xyXG4gICAgc2V0SW5wdXRWYWx1ZShcIlwiKTtcclxuICAgIHNldElucHV0VmlzaWJsZShmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRWRpdElucHV0Q2hhbmdlID0gKGUpID0+IHNldEVkaXRJbnB1dFZhbHVlKGUudGFyZ2V0LnZhbHVlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRWRpdElucHV0Q29uZmlybSA9ICgpID0+IHtcclxuICAgIGNvbnN0IG5ld1RhZ3MgPSBbLi4udGFnc107XHJcbiAgICBuZXdUYWdzW2VkaXRJbnB1dEluZGV4XSA9IGVkaXRJbnB1dFZhbHVlO1xyXG4gICAgc2V0VGFncyhuZXdUYWdzKTtcclxuICAgIHNldEVkaXRJbnB1dEluZGV4KC0xKTtcclxuICAgIHNldEVkaXRJbnB1dFZhbHVlKFwiXCIpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGtleVByZXNzID0gKGUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGUua2V5KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge3RhZ3M/Lm1hcCgodGFnLCBpKSA9PiB7XHJcbiAgICAgICAgaWYgKGVkaXRJbnB1dEluZGV4ID09PSBpKSB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUVkaXRJbnB1dENoYW5nZX1cclxuICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUVkaXRJbnB1dENvbmZpcm19XHJcbiAgICAgICAgICAgICAgb25QcmVzc0VudGVyPXtoYW5kbGVFZGl0SW5wdXRDb25maXJtfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtlZGl0SW5wdXRWYWx1ZX1cclxuICAgICAgICAgICAgICByZWY9e2VkaXRJbnB1dEJ1dHRvbn1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWlucHV0XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGlzTG9uZ1RhZyA9IHRhZy5sZW5ndGggPiAyMDtcclxuICAgICAgICBjb25zdCBUYWdFbGVtID0gKFxyXG4gICAgICAgICAgPFRhZ1xyXG4gICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBoYW5kbGVDbG9zZSh0YWcpfVxyXG4gICAgICAgICAgICBjbG9zYWJsZT17dHJ1ZX1cclxuICAgICAgICAgICAga2V5PXt0YWd9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImVkaXQtdGFnXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICBvbkRvdWJsZUNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGkgIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgc2V0RWRpdElucHV0SW5kZXgoaSk7XHJcbiAgICAgICAgICAgICAgICAgIHNldEVkaXRJbnB1dFZhbHVlKHRhZyk7XHJcbiAgICAgICAgICAgICAgICAgIGVkaXRJbnB1dEJ1dHRvbi5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtpc0xvbmdUYWcgPyBgJHt0YWcuc2xpY2UoMCwgMjApfS4uLmAgOiB0YWd9XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvVGFnPlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmV0dXJuIGlzTG9uZ1RhZyA/IChcclxuICAgICAgICAgIDxUb29sdGlwIHRpdGxlPXt0YWd9IGtleT17dGFnfT5cclxuICAgICAgICAgICAge1RhZ0VsZW19XHJcbiAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIFRhZ0VsZW1cclxuICAgICAgICApO1xyXG4gICAgICB9KX1cclxuICAgICAge2lucHV0VmlzaWJsZSAmJiAoXHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICBvbkJsdXI9e2hhbmRsZUlucHV0Q29uZmlybX1cclxuICAgICAgICAgIG9uS2V5RG93bj17KGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcclxuICAgICAgICAgICAgICBoYW5kbGVJbnB1dENvbmZpcm0oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIHZhbHVlPXtpbnB1dFZhbHVlfVxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgcmVmPXtpbnB1dEJ1dHRvbn1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0taW5wdXRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcbiAgICAgIHshaW5wdXRWaXNpYmxlICYmIChcclxuICAgICAgICA8VGFnIGNsYXNzTmFtZT1cInNpdGUtdGFnLXBsdXNcIiBvbkNsaWNrPXtzaG93SW5wdXR9PlxyXG4gICAgICAgICAgPFBsdXNPdXRsaW5lZCAvPiBOZXcgVGFnXHJcbiAgICAgICAgPC9UYWc+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFncztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==