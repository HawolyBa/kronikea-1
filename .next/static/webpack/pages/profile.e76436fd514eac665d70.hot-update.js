webpackHotUpdate_N_E("pages/profile",{

/***/ "./components/profile/Stories.js":
/*!***************************************!*\
  !*** ./components/profile/Stories.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _common_Pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/Pagination */ "./components/common/Pagination.js");
/* harmony import */ var _hoc_LoadingScreen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hoc/LoadingScreen */ "./components/hoc/LoadingScreen.js");
/* harmony import */ var _SortInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SortInput */ "./components/profile/SortInput.js");



var _this = undefined,
    _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\components\\profile\\Stories.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






var Stories = function Stories(_ref) {
  _s();

  var _jsx;

  var stories = _ref.stories,
      loading = _ref.loading,
      type = _ref.type,
      context = _ref.context;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState([]),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      data = _React$useState2[0],
      setData = _React$useState2[1];

  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    setData(stories);
  }, [stories]);
  var options = [{
    name: "Date (ascending)",
    value: "date-asc"
  }, {
    name: "Date (descending)",
    value: "date-desc"
  }, {
    name: "Name (ascending)",
    value: "name-asc"
  }, {
    name: "Name (descending)",
    value: "name-desc"
  }];
  return __jsx("div", {
    className: "profile-stories",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx(_hoc_LoadingScreen__WEBPACK_IMPORTED_MODULE_5__["default"], {
    loading: loading,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx(_SortInput__WEBPACK_IMPORTED_MODULE_6__["default"], {
    type: "stories",
    itemData: stories,
    title: type !== "favorites" ? "Stories" : "Favorite Stories",
    setData: setData,
    options: options,
    context: context,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }), __jsx(_common_Pagination__WEBPACK_IMPORTED_MODULE_4__["default"], (_jsx = {
    data: data,
    type: type,
    gutter: "16px"
  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "type", type), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "itemType", "stories"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "columnsCountBreakPoints", {
    350: 1,
    750: 2,
    900: 3,
    1200: 4
  }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__self", _this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__source", {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 9
  }), _jsx))));
};

_s(Stories, "IEMTtLVFIuToo7X/raQbJAxzNQU=");

_c = Stories;
/* harmony default export */ __webpack_exports__["default"] = (Stories);

var _c;

$RefreshReg$(_c, "Stories");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9maWxlL1N0b3JpZXMuanMiXSwibmFtZXMiOlsiU3RvcmllcyIsInN0b3JpZXMiLCJsb2FkaW5nIiwidHlwZSIsImNvbnRleHQiLCJSZWFjdCIsInVzZVN0YXRlIiwiZGF0YSIsInNldERhdGEiLCJ1c2VFZmZlY3QiLCJvcHRpb25zIiwibmFtZSIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLE9BQXlDO0FBQUE7O0FBQUE7O0FBQUEsTUFBdENDLE9BQXNDLFFBQXRDQSxPQUFzQztBQUFBLE1BQTdCQyxPQUE2QixRQUE3QkEsT0FBNkI7QUFBQSxNQUFwQkMsSUFBb0IsUUFBcEJBLElBQW9CO0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjOztBQUFBLHdCQUMvQkMsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEVBQWYsQ0FEK0I7QUFBQTtBQUFBLE1BQ2hEQyxJQURnRDtBQUFBLE1BQzFDQyxPQUQwQzs7QUFHdkRILDhDQUFLLENBQUNJLFNBQU4sQ0FBZ0IsWUFBTTtBQUNwQkQsV0FBTyxDQUFDUCxPQUFELENBQVA7QUFDRCxHQUZELEVBRUcsQ0FBQ0EsT0FBRCxDQUZIO0FBSUEsTUFBTVMsT0FBTyxHQUFHLENBQ2Q7QUFBRUMsUUFBSSxFQUFFLGtCQUFSO0FBQTRCQyxTQUFLLEVBQUU7QUFBbkMsR0FEYyxFQUVkO0FBQUVELFFBQUksRUFBRSxtQkFBUjtBQUE2QkMsU0FBSyxFQUFFO0FBQXBDLEdBRmMsRUFHZDtBQUFFRCxRQUFJLEVBQUUsa0JBQVI7QUFBNEJDLFNBQUssRUFBRTtBQUFuQyxHQUhjLEVBSWQ7QUFBRUQsUUFBSSxFQUFFLG1CQUFSO0FBQTZCQyxTQUFLLEVBQUU7QUFBcEMsR0FKYyxDQUFoQjtBQU9BLFNBQ0U7QUFBSyxhQUFTLEVBQUMsaUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMERBQUQ7QUFBZSxXQUFPLEVBQUVWLE9BQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGtEQUFEO0FBQ0UsUUFBSSxFQUFDLFNBRFA7QUFFRSxZQUFRLEVBQUVELE9BRlo7QUFHRSxTQUFLLEVBQUVFLElBQUksS0FBSyxXQUFULEdBQXVCLFNBQXZCLEdBQW1DLGtCQUg1QztBQUlFLFdBQU8sRUFBRUssT0FKWDtBQUtFLFdBQU8sRUFBRUUsT0FMWDtBQU1FLFdBQU8sRUFBRU4sT0FOWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFTRSxNQUFDLDRDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFURixFQVVFLE1BQUMsMERBQUQ7QUFDRSxRQUFJLEVBQUVHLElBRFI7QUFFRSxRQUFJLEVBQUVKLElBRlI7QUFHRSxVQUFNLEVBQUU7QUFIViw2R0FJUUEsSUFKUiwrR0FLVyxTQUxYLDhIQU0yQjtBQUFFLFNBQUssQ0FBUDtBQUFVLFNBQUssQ0FBZjtBQUFrQixTQUFLLENBQXZCO0FBQTBCLFVBQU07QUFBaEMsR0FOM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVZGLENBREYsQ0FERjtBQXVCRCxDQXJDRDs7R0FBTUgsTzs7S0FBQUEsTztBQXVDU0Esc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS5lNzY0MzZmZDUxNGVhYzY2NWQ3MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBEaXZpZGVyIH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gXCIuLi9jb21tb24vUGFnaW5hdGlvblwiO1xyXG5pbXBvcnQgTG9hZGluZ1NjcmVlbiBmcm9tIFwiLi4vaG9jL0xvYWRpbmdTY3JlZW5cIjtcclxuaW1wb3J0IFNvcnRJbnB1dCBmcm9tIFwiLi9Tb3J0SW5wdXRcIjtcclxuXHJcbmNvbnN0IFN0b3JpZXMgPSAoeyBzdG9yaWVzLCBsb2FkaW5nLCB0eXBlLCBjb250ZXh0IH0pID0+IHtcclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSBSZWFjdC51c2VTdGF0ZShbXSk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXREYXRhKHN0b3JpZXMpO1xyXG4gIH0sIFtzdG9yaWVzXSk7XHJcblxyXG4gIGNvbnN0IG9wdGlvbnMgPSBbXHJcbiAgICB7IG5hbWU6IFwiRGF0ZSAoYXNjZW5kaW5nKVwiLCB2YWx1ZTogXCJkYXRlLWFzY1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiRGF0ZSAoZGVzY2VuZGluZylcIiwgdmFsdWU6IFwiZGF0ZS1kZXNjXCIgfSxcclxuICAgIHsgbmFtZTogXCJOYW1lIChhc2NlbmRpbmcpXCIsIHZhbHVlOiBcIm5hbWUtYXNjXCIgfSxcclxuICAgIHsgbmFtZTogXCJOYW1lIChkZXNjZW5kaW5nKVwiLCB2YWx1ZTogXCJuYW1lLWRlc2NcIiB9LFxyXG4gIF07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtc3Rvcmllc1wiPlxyXG4gICAgICA8TG9hZGluZ1NjcmVlbiBsb2FkaW5nPXtsb2FkaW5nfT5cclxuICAgICAgICA8U29ydElucHV0XHJcbiAgICAgICAgICB0eXBlPVwic3Rvcmllc1wiXHJcbiAgICAgICAgICBpdGVtRGF0YT17c3Rvcmllc31cclxuICAgICAgICAgIHRpdGxlPXt0eXBlICE9PSBcImZhdm9yaXRlc1wiID8gXCJTdG9yaWVzXCIgOiBcIkZhdm9yaXRlIFN0b3JpZXNcIn1cclxuICAgICAgICAgIHNldERhdGE9e3NldERhdGF9XHJcbiAgICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxyXG4gICAgICAgICAgY29udGV4dD17Y29udGV4dH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgPFBhZ2luYXRpb25cclxuICAgICAgICAgIGRhdGE9e2RhdGF9XHJcbiAgICAgICAgICB0eXBlPXt0eXBlfVxyXG4gICAgICAgICAgZ3V0dGVyPXtcIjE2cHhcIn1cclxuICAgICAgICAgIHR5cGU9e3R5cGV9XHJcbiAgICAgICAgICBpdGVtVHlwZT1cInN0b3JpZXNcIlxyXG4gICAgICAgICAgY29sdW1uc0NvdW50QnJlYWtQb2ludHM9e3sgMzUwOiAxLCA3NTA6IDIsIDkwMDogMywgMTIwMDogNCB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvTG9hZGluZ1NjcmVlbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdG9yaWVzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9