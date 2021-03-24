webpackHotUpdate_N_E("pages/story/[id]",{

/***/ "./components/common/LocationCard.js":
/*!*******************************************!*\
  !*** ./components/common/LocationCard.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/Link */ "./node_modules/next/Link.js");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_3__);


var _this = undefined,
    _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\components\\common\\LocationCard.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var LocationCard = function LocationCard(_ref) {
  _s();

  var location = _ref.location,
      type = _ref.type;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      visible = _React$useState2[0],
      setVisible = _React$useState2[1];

  console.log(type);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("figure", {
    className: "card character-card",
    "data-aos": "zoom-in-up",
    onClick: function onClick() {
      return setVisible(true);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "img-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: location.image,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  })), __jsx("figcaption", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, location.name), type !== "story" && __jsx("span", {
    className: "author",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, "Story: ", location.storyTitle))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
    title: location.name,
    visible: visible,
    footer: [__jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      key: "submit",
      type: "primary",
      onClick: function onClick() {
        return setVisible(false);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 11
      }
    }, "Close")],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, __jsx("img", {
    className: "modal-img",
    src: location.image,
    alt: location.name,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, location.description), type !== "story" && __jsx("p", {
    className: "modal-story-link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, "Story:", " ", __jsx(next_Link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/story/".concat(location.storyId),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 15
    }
  }, location.storyTitle)))));
};

_s(LocationCard, "OGsIWlGlwYpVUqIrDReJ1GWx7rw=");

_c = LocationCard;
/* harmony default export */ __webpack_exports__["default"] = (LocationCard);

var _c;

$RefreshReg$(_c, "LocationCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vTG9jYXRpb25DYXJkLmpzIl0sIm5hbWVzIjpbIkxvY2F0aW9uQ2FyZCIsImxvY2F0aW9uIiwidHlwZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsImNvbnNvbGUiLCJsb2ciLCJpbWFnZSIsIm5hbWUiLCJzdG9yeVRpdGxlIiwiZGVzY3JpcHRpb24iLCJzdG9yeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsT0FBd0I7QUFBQTs7QUFBQSxNQUFyQkMsUUFBcUIsUUFBckJBLFFBQXFCO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXOztBQUFBLHdCQUNiQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsS0FBZixDQURhO0FBQUE7QUFBQSxNQUNwQ0MsT0FEb0M7QUFBQSxNQUMzQkMsVUFEMkI7O0FBRTNDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWU4sSUFBWjtBQUNBLFNBQ0UsbUVBQ0U7QUFDRSxhQUFTLEVBQUMscUJBRFo7QUFFRSxnQkFBUyxZQUZYO0FBR0UsV0FBTyxFQUFFO0FBQUEsYUFBTUksVUFBVSxDQUFDLElBQUQsQ0FBaEI7QUFBQSxLQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLRTtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLE9BQUcsRUFBRUwsUUFBUSxDQUFDUSxLQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FMRixFQVFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUtSLFFBQVEsQ0FBQ1MsSUFBZCxDQURGLEVBRUdSLElBQUksS0FBSyxPQUFULElBQ0M7QUFBTSxhQUFTLEVBQUMsUUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBaUNELFFBQVEsQ0FBQ1UsVUFBMUMsQ0FISixDQVJGLENBREYsRUFnQkUsTUFBQywwQ0FBRDtBQUNFLFNBQUssRUFBRVYsUUFBUSxDQUFDUyxJQURsQjtBQUVFLFdBQU8sRUFBRUwsT0FGWDtBQUdFLFVBQU0sRUFBRSxDQUNOLE1BQUMsMkNBQUQ7QUFBUSxTQUFHLEVBQUMsUUFBWjtBQUFxQixVQUFJLEVBQUMsU0FBMUI7QUFBb0MsYUFBTyxFQUFFO0FBQUEsZUFBTUMsVUFBVSxDQUFDLEtBQUQsQ0FBaEI7QUFBQSxPQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRE0sQ0FIVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBU0U7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUEyQixPQUFHLEVBQUVMLFFBQVEsQ0FBQ1EsS0FBekM7QUFBZ0QsT0FBRyxFQUFFUixRQUFRLENBQUNTLElBQTlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFURixFQVVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSVQsUUFBUSxDQUFDVyxXQUFiLENBVkYsRUFXR1YsSUFBSSxLQUFLLE9BQVQsSUFDQztBQUFHLGFBQVMsRUFBQyxrQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQ1MsR0FEVCxFQUVFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLG1CQUFZRCxRQUFRLENBQUNZLE9BQXJCLENBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSVosUUFBUSxDQUFDVSxVQUFiLENBREYsQ0FGRixDQVpKLENBaEJGLENBREY7QUF1Q0QsQ0ExQ0Q7O0dBQU1YLFk7O0tBQUFBLFk7QUE0Q1NBLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3N0b3J5L1tpZF0uNmM2NmJhZTEyNzQwNDhkYjg0OWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTW9kYWwsIEJ1dHRvbiB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L0xpbmtcIjtcclxuXHJcbmNvbnN0IExvY2F0aW9uQ2FyZCA9ICh7IGxvY2F0aW9uLCB0eXBlIH0pID0+IHtcclxuICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc29sZS5sb2codHlwZSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxmaWd1cmVcclxuICAgICAgICBjbGFzc05hbWU9XCJjYXJkIGNoYXJhY3Rlci1jYXJkXCJcclxuICAgICAgICBkYXRhLWFvcz1cInpvb20taW4tdXBcIlxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFZpc2libGUodHJ1ZSl9XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZy1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPXtsb2NhdGlvbi5pbWFnZX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZmlnY2FwdGlvbj5cclxuICAgICAgICAgIDxoMz57bG9jYXRpb24ubmFtZX08L2gzPlxyXG4gICAgICAgICAge3R5cGUgIT09IFwic3RvcnlcIiAmJiAoXHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImF1dGhvclwiPlN0b3J5OiB7bG9jYXRpb24uc3RvcnlUaXRsZX08L3NwYW4+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZmlnY2FwdGlvbj5cclxuICAgICAgPC9maWd1cmU+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIHRpdGxlPXtsb2NhdGlvbi5uYW1lfVxyXG4gICAgICAgIHZpc2libGU9e3Zpc2libGV9XHJcbiAgICAgICAgZm9vdGVyPXtbXHJcbiAgICAgICAgICA8QnV0dG9uIGtleT1cInN1Ym1pdFwiIHR5cGU9XCJwcmltYXJ5XCIgb25DbGljaz17KCkgPT4gc2V0VmlzaWJsZShmYWxzZSl9PlxyXG4gICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgPC9CdXR0b24+LFxyXG4gICAgICAgIF19XHJcbiAgICAgID5cclxuICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIm1vZGFsLWltZ1wiIHNyYz17bG9jYXRpb24uaW1hZ2V9IGFsdD17bG9jYXRpb24ubmFtZX0gLz5cclxuICAgICAgICA8cD57bG9jYXRpb24uZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgIHt0eXBlICE9PSBcInN0b3J5XCIgJiYgKFxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibW9kYWwtc3RvcnktbGlua1wiPlxyXG4gICAgICAgICAgICBTdG9yeTp7XCIgXCJ9XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2Avc3RvcnkvJHtsb2NhdGlvbi5zdG9yeUlkfWB9PlxyXG4gICAgICAgICAgICAgIDxhPntsb2NhdGlvbi5zdG9yeVRpdGxlfTwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9jYXRpb25DYXJkO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9