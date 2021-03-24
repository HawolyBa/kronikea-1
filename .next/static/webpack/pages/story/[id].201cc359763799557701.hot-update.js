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

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("figure", {
    className: "card character-card",
    "data-aos": "zoom-in-up",
    onClick: function onClick() {
      return setVisible(true);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "img-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: location.image,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  })), __jsx("figcaption", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }, location.name), type !== "story" && __jsx("span", {
    className: "author",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, "Story: ", location.storyTitle))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
    title: location.name,
    visible: visible,
    onCancel: function onCancel() {
      return setVisible(false);
    },
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
      lineNumber: 24,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vTG9jYXRpb25DYXJkLmpzIl0sIm5hbWVzIjpbIkxvY2F0aW9uQ2FyZCIsImxvY2F0aW9uIiwidHlwZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsImltYWdlIiwibmFtZSIsInN0b3J5VGl0bGUiLCJkZXNjcmlwdGlvbiIsInN0b3J5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUF3QjtBQUFBOztBQUFBLE1BQXJCQyxRQUFxQixRQUFyQkEsUUFBcUI7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7O0FBQUEsd0JBQ2JDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBRGE7QUFBQTtBQUFBLE1BQ3BDQyxPQURvQztBQUFBLE1BQzNCQyxVQUQyQjs7QUFFM0MsU0FDRSxtRUFDRTtBQUNFLGFBQVMsRUFBQyxxQkFEWjtBQUVFLGdCQUFTLFlBRlg7QUFHRSxXQUFPLEVBQUU7QUFBQSxhQUFNQSxVQUFVLENBQUMsSUFBRCxDQUFoQjtBQUFBLEtBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtFO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssT0FBRyxFQUFFTCxRQUFRLENBQUNNLEtBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUxGLEVBUUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS04sUUFBUSxDQUFDTyxJQUFkLENBREYsRUFFR04sSUFBSSxLQUFLLE9BQVQsSUFDQztBQUFNLGFBQVMsRUFBQyxRQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFpQ0QsUUFBUSxDQUFDUSxVQUExQyxDQUhKLENBUkYsQ0FERixFQWdCRSxNQUFDLDBDQUFEO0FBQ0UsU0FBSyxFQUFFUixRQUFRLENBQUNPLElBRGxCO0FBRUUsV0FBTyxFQUFFSCxPQUZYO0FBR0UsWUFBUSxFQUFFO0FBQUEsYUFBTUMsVUFBVSxDQUFDLEtBQUQsQ0FBaEI7QUFBQSxLQUhaO0FBSUUsVUFBTSxFQUFFLENBQ04sTUFBQywyQ0FBRDtBQUFRLFNBQUcsRUFBQyxRQUFaO0FBQXFCLFVBQUksRUFBQyxTQUExQjtBQUFvQyxhQUFPLEVBQUU7QUFBQSxlQUFNQSxVQUFVLENBQUMsS0FBRCxDQUFoQjtBQUFBLE9BQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFETSxDQUpWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FVRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQTJCLE9BQUcsRUFBRUwsUUFBUSxDQUFDTSxLQUF6QztBQUFnRCxPQUFHLEVBQUVOLFFBQVEsQ0FBQ08sSUFBOUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZGLEVBV0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJUCxRQUFRLENBQUNTLFdBQWIsQ0FYRixFQVlHUixJQUFJLEtBQUssT0FBVCxJQUNDO0FBQUcsYUFBUyxFQUFDLGtCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFDUyxHQURULEVBRUUsTUFBQyxnREFBRDtBQUFNLFFBQUksbUJBQVlELFFBQVEsQ0FBQ1UsT0FBckIsQ0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJVixRQUFRLENBQUNRLFVBQWIsQ0FERixDQUZGLENBYkosQ0FoQkYsQ0FERjtBQXdDRCxDQTFDRDs7R0FBTVQsWTs7S0FBQUEsWTtBQTRDU0EsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3RvcnkvW2lkXS4yMDFjYzM1OTc2Mzc5OTU1NzcwMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBNb2RhbCwgQnV0dG9uIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvTGlua1wiO1xyXG5cclxuY29uc3QgTG9jYXRpb25DYXJkID0gKHsgbG9jYXRpb24sIHR5cGUgfSkgPT4ge1xyXG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGZpZ3VyZVxyXG4gICAgICAgIGNsYXNzTmFtZT1cImNhcmQgY2hhcmFjdGVyLWNhcmRcIlxyXG4gICAgICAgIGRhdGEtYW9zPVwiem9vbS1pbi11cFwiXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VmlzaWJsZSh0cnVlKX1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGltZyBzcmM9e2xvY2F0aW9uLmltYWdlfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxmaWdjYXB0aW9uPlxyXG4gICAgICAgICAgPGgzPntsb2NhdGlvbi5uYW1lfTwvaDM+XHJcbiAgICAgICAgICB7dHlwZSAhPT0gXCJzdG9yeVwiICYmIChcclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYXV0aG9yXCI+U3Rvcnk6IHtsb2NhdGlvbi5zdG9yeVRpdGxlfTwvc3Bhbj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9maWdjYXB0aW9uPlxyXG4gICAgICA8L2ZpZ3VyZT5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgdGl0bGU9e2xvY2F0aW9uLm5hbWV9XHJcbiAgICAgICAgdmlzaWJsZT17dmlzaWJsZX1cclxuICAgICAgICBvbkNhbmNlbD17KCkgPT4gc2V0VmlzaWJsZShmYWxzZSl9XHJcbiAgICAgICAgZm9vdGVyPXtbXHJcbiAgICAgICAgICA8QnV0dG9uIGtleT1cInN1Ym1pdFwiIHR5cGU9XCJwcmltYXJ5XCIgb25DbGljaz17KCkgPT4gc2V0VmlzaWJsZShmYWxzZSl9PlxyXG4gICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgPC9CdXR0b24+LFxyXG4gICAgICAgIF19XHJcbiAgICAgID5cclxuICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIm1vZGFsLWltZ1wiIHNyYz17bG9jYXRpb24uaW1hZ2V9IGFsdD17bG9jYXRpb24ubmFtZX0gLz5cclxuICAgICAgICA8cD57bG9jYXRpb24uZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgIHt0eXBlICE9PSBcInN0b3J5XCIgJiYgKFxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibW9kYWwtc3RvcnktbGlua1wiPlxyXG4gICAgICAgICAgICBTdG9yeTp7XCIgXCJ9XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2Avc3RvcnkvJHtsb2NhdGlvbi5zdG9yeUlkfWB9PlxyXG4gICAgICAgICAgICAgIDxhPntsb2NhdGlvbi5zdG9yeVRpdGxlfTwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9jYXRpb25DYXJkO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9