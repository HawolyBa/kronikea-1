webpackHotUpdate_N_E("pages/profile",{

/***/ "./components/profile/Characters.js":
/*!******************************************!*\
  !*** ./components/profile/Characters.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _common_Pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/Pagination */ "./components/common/Pagination.js");
/* harmony import */ var _SortInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SortInput */ "./components/profile/SortInput.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\components\\profile\\Characters.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var Characters = function Characters(_ref) {
  _s();

  var characters = _ref.characters,
      type = _ref.type,
      context = _ref.context;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState([]),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      data = _React$useState2[0],
      setData = _React$useState2[1];

  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    setData(characters);
  }, [characters]);
  var options = [{
    name: "Date (ascending)",
    value: "date-asc"
  }, {
    name: "Date (descending)",
    value: "date-desc"
  }, {
    name: "Firstname (ascending)",
    value: "firstname-asc"
  }, {
    name: "Firstname (descending)",
    value: "firstname-desc"
  }, {
    name: "Lastname (ascending)",
    value: "lastname-asc"
  }, {
    name: "Lastname (descending)",
    value: "lastname-desc"
  }];
  return __jsx("div", {
    className: "profile-characters",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, __jsx(_SortInput__WEBPACK_IMPORTED_MODULE_4__["default"], {
    type: "characters",
    itemData: characters,
    title: type !== "favorites" ? "Characters" : "Favorite Characters",
    setData: setData,
    options: options,
    context: context,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }), __jsx(_common_Pagination__WEBPACK_IMPORTED_MODULE_3__["default"], {
    data: data,
    type: type,
    gutter: "16px",
    itemType: "characters",
    columnsCountBreakPoints: {
      350: 1,
      750: 2,
      900: 3,
      1200: 4,
      1600: 6
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }));
};

_s(Characters, "IEMTtLVFIuToo7X/raQbJAxzNQU=");

_c = Characters;
/* harmony default export */ __webpack_exports__["default"] = (Characters);

var _c;

$RefreshReg$(_c, "Characters");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9maWxlL0NoYXJhY3RlcnMuanMiXSwibmFtZXMiOlsiQ2hhcmFjdGVycyIsImNoYXJhY3RlcnMiLCJ0eXBlIiwiY29udGV4dCIsIlJlYWN0IiwidXNlU3RhdGUiLCJkYXRhIiwic2V0RGF0YSIsInVzZUVmZmVjdCIsIm9wdGlvbnMiLCJuYW1lIiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQW1DO0FBQUE7O0FBQUEsTUFBaENDLFVBQWdDLFFBQWhDQSxVQUFnQztBQUFBLE1BQXBCQyxJQUFvQixRQUFwQkEsSUFBb0I7QUFBQSxNQUFkQyxPQUFjLFFBQWRBLE9BQWM7O0FBQUEsd0JBQzVCQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsRUFBZixDQUQ0QjtBQUFBO0FBQUEsTUFDN0NDLElBRDZDO0FBQUEsTUFDdkNDLE9BRHVDOztBQUdwREgsOENBQUssQ0FBQ0ksU0FBTixDQUFnQixZQUFNO0FBQ3BCRCxXQUFPLENBQUNOLFVBQUQsQ0FBUDtBQUNELEdBRkQsRUFFRyxDQUFDQSxVQUFELENBRkg7QUFJQSxNQUFNUSxPQUFPLEdBQUcsQ0FDZDtBQUFFQyxRQUFJLEVBQUUsa0JBQVI7QUFBNEJDLFNBQUssRUFBRTtBQUFuQyxHQURjLEVBRWQ7QUFBRUQsUUFBSSxFQUFFLG1CQUFSO0FBQTZCQyxTQUFLLEVBQUU7QUFBcEMsR0FGYyxFQUdkO0FBQUVELFFBQUksRUFBRSx1QkFBUjtBQUFpQ0MsU0FBSyxFQUFFO0FBQXhDLEdBSGMsRUFJZDtBQUFFRCxRQUFJLEVBQUUsd0JBQVI7QUFBa0NDLFNBQUssRUFBRTtBQUF6QyxHQUpjLEVBS2Q7QUFBRUQsUUFBSSxFQUFFLHNCQUFSO0FBQWdDQyxTQUFLLEVBQUU7QUFBdkMsR0FMYyxFQU1kO0FBQUVELFFBQUksRUFBRSx1QkFBUjtBQUFpQ0MsU0FBSyxFQUFFO0FBQXhDLEdBTmMsQ0FBaEI7QUFTQSxTQUNFO0FBQUssYUFBUyxFQUFDLG9CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGtEQUFEO0FBQ0UsUUFBSSxFQUFDLFlBRFA7QUFFRSxZQUFRLEVBQUVWLFVBRlo7QUFHRSxTQUFLLEVBQUVDLElBQUksS0FBSyxXQUFULEdBQXVCLFlBQXZCLEdBQXNDLHFCQUgvQztBQUlFLFdBQU8sRUFBRUssT0FKWDtBQUtFLFdBQU8sRUFBRUUsT0FMWDtBQU1FLFdBQU8sRUFBRU4sT0FOWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFTRSxNQUFDLDRDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFURixFQVVFLE1BQUMsMERBQUQ7QUFDRSxRQUFJLEVBQUVHLElBRFI7QUFFRSxRQUFJLEVBQUVKLElBRlI7QUFHRSxVQUFNLEVBQUUsTUFIVjtBQUlFLFlBQVEsRUFBQyxZQUpYO0FBS0UsMkJBQXVCLEVBQUU7QUFBRSxXQUFLLENBQVA7QUFBVSxXQUFLLENBQWY7QUFBa0IsV0FBSyxDQUF2QjtBQUEwQixZQUFNLENBQWhDO0FBQW1DLFlBQU07QUFBekMsS0FMM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZGLENBREY7QUFvQkQsQ0FwQ0Q7O0dBQU1GLFU7O0tBQUFBLFU7QUFzQ1NBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUuYjU1Zjg5ZjM0MTdmZGRkMzFlZTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRGl2aWRlciB9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tIFwiLi4vY29tbW9uL1BhZ2luYXRpb25cIjtcclxuaW1wb3J0IFNvcnRJbnB1dCBmcm9tIFwiLi9Tb3J0SW5wdXRcIjtcclxuXHJcbmNvbnN0IENoYXJhY3RlcnMgPSAoeyBjaGFyYWN0ZXJzLCB0eXBlLCBjb250ZXh0IH0pID0+IHtcclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSBSZWFjdC51c2VTdGF0ZShbXSk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXREYXRhKGNoYXJhY3RlcnMpO1xyXG4gIH0sIFtjaGFyYWN0ZXJzXSk7XHJcblxyXG4gIGNvbnN0IG9wdGlvbnMgPSBbXHJcbiAgICB7IG5hbWU6IFwiRGF0ZSAoYXNjZW5kaW5nKVwiLCB2YWx1ZTogXCJkYXRlLWFzY1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiRGF0ZSAoZGVzY2VuZGluZylcIiwgdmFsdWU6IFwiZGF0ZS1kZXNjXCIgfSxcclxuICAgIHsgbmFtZTogXCJGaXJzdG5hbWUgKGFzY2VuZGluZylcIiwgdmFsdWU6IFwiZmlyc3RuYW1lLWFzY1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiRmlyc3RuYW1lIChkZXNjZW5kaW5nKVwiLCB2YWx1ZTogXCJmaXJzdG5hbWUtZGVzY1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiTGFzdG5hbWUgKGFzY2VuZGluZylcIiwgdmFsdWU6IFwibGFzdG5hbWUtYXNjXCIgfSxcclxuICAgIHsgbmFtZTogXCJMYXN0bmFtZSAoZGVzY2VuZGluZylcIiwgdmFsdWU6IFwibGFzdG5hbWUtZGVzY1wiIH0sXHJcbiAgXTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1jaGFyYWN0ZXJzXCI+XHJcbiAgICAgIDxTb3J0SW5wdXRcclxuICAgICAgICB0eXBlPVwiY2hhcmFjdGVyc1wiXHJcbiAgICAgICAgaXRlbURhdGE9e2NoYXJhY3RlcnN9XHJcbiAgICAgICAgdGl0bGU9e3R5cGUgIT09IFwiZmF2b3JpdGVzXCIgPyBcIkNoYXJhY3RlcnNcIiA6IFwiRmF2b3JpdGUgQ2hhcmFjdGVyc1wifVxyXG4gICAgICAgIHNldERhdGE9e3NldERhdGF9XHJcbiAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cclxuICAgICAgICBjb250ZXh0PXtjb250ZXh0fVxyXG4gICAgICAvPlxyXG4gICAgICA8RGl2aWRlciAvPlxyXG4gICAgICA8UGFnaW5hdGlvblxyXG4gICAgICAgIGRhdGE9e2RhdGF9XHJcbiAgICAgICAgdHlwZT17dHlwZX1cclxuICAgICAgICBndXR0ZXI9e1wiMTZweFwifVxyXG4gICAgICAgIGl0ZW1UeXBlPVwiY2hhcmFjdGVyc1wiXHJcbiAgICAgICAgY29sdW1uc0NvdW50QnJlYWtQb2ludHM9e3sgMzUwOiAxLCA3NTA6IDIsIDkwMDogMywgMTIwMDogNCwgMTYwMDogNiB9fVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXJhY3RlcnM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=