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
      lineNumber: 8,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "img-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: location.image,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  })), __jsx("figcaption", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }, location.name), type !== "story" && __jsx("span", {
    className: "author",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
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
        lineNumber: 27,
        columnNumber: 11
      }
    }, "Close")],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: location.image,
    alt: location.name,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, "Story:", " ", type !== "stroy" && __jsx(Link, {
    href: "/story/".concat(location.storyId),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vTG9jYXRpb25DYXJkLmpzIl0sIm5hbWVzIjpbIkxvY2F0aW9uQ2FyZCIsImxvY2F0aW9uIiwidHlwZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsImltYWdlIiwibmFtZSIsInN0b3J5VGl0bGUiLCJzdG9yeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUF3QjtBQUFBOztBQUFBLE1BQXJCQyxRQUFxQixRQUFyQkEsUUFBcUI7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7O0FBQUEsd0JBQ2JDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBRGE7QUFBQTtBQUFBLE1BQ3BDQyxPQURvQztBQUFBLE1BQzNCQyxVQUQyQjs7QUFFM0MsU0FDRSxtRUFDRTtBQUNFLGFBQVMsRUFBQyxxQkFEWjtBQUVFLGdCQUFTLFlBRlg7QUFHRSxXQUFPLEVBQUU7QUFBQSxhQUFNQSxVQUFVLENBQUMsSUFBRCxDQUFoQjtBQUFBLEtBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtFO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssT0FBRyxFQUFFTCxRQUFRLENBQUNNLEtBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUxGLEVBUUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS04sUUFBUSxDQUFDTyxJQUFkLENBREYsRUFFR04sSUFBSSxLQUFLLE9BQVQsSUFDQztBQUFNLGFBQVMsRUFBQyxRQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFpQ0QsUUFBUSxDQUFDUSxVQUExQyxDQUhKLENBUkYsQ0FERixFQWdCRSxNQUFDLDBDQUFEO0FBQ0UsU0FBSyxFQUFFUixRQUFRLENBQUNPLElBRGxCO0FBRUUsV0FBTyxFQUFFSCxPQUZYO0FBR0UsVUFBTSxFQUFFLENBQ04sTUFBQywyQ0FBRDtBQUFRLFNBQUcsRUFBQyxRQUFaO0FBQXFCLFVBQUksRUFBQyxTQUExQjtBQUFvQyxhQUFPLEVBQUU7QUFBQSxlQUFNQyxVQUFVLENBQUMsS0FBRCxDQUFoQjtBQUFBLE9BQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFETSxDQUhWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FTRTtBQUFLLE9BQUcsRUFBRUwsUUFBUSxDQUFDTSxLQUFuQjtBQUEwQixPQUFHLEVBQUVOLFFBQVEsQ0FBQ08sSUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRGLEVBVUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUNTLEdBRFQsRUFFR04sSUFBSSxLQUFLLE9BQVQsSUFDQyxNQUFDLElBQUQ7QUFBTSxRQUFJLG1CQUFZRCxRQUFRLENBQUNTLE9BQXJCLENBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSVQsUUFBUSxDQUFDUSxVQUFiLENBREYsQ0FISixDQVZGLENBaEJGLENBREY7QUFzQ0QsQ0F4Q0Q7O0dBQU1ULFk7O0tBQUFBLFk7QUEwQ1NBLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3N0b3J5L1tpZF0uNWNlOTYzOGI1NTFmMDNiM2Y1OTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTW9kYWwsIEJ1dHRvbiB9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5jb25zdCBMb2NhdGlvbkNhcmQgPSAoeyBsb2NhdGlvbiwgdHlwZSB9KSA9PiB7XHJcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZmlndXJlXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiY2FyZCBjaGFyYWN0ZXItY2FyZFwiXHJcbiAgICAgICAgZGF0YS1hb3M9XCJ6b29tLWluLXVwXCJcclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRWaXNpYmxlKHRydWUpfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz17bG9jYXRpb24uaW1hZ2V9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGZpZ2NhcHRpb24+XHJcbiAgICAgICAgICA8aDM+e2xvY2F0aW9uLm5hbWV9PC9oMz5cclxuICAgICAgICAgIHt0eXBlICE9PSBcInN0b3J5XCIgJiYgKFxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhdXRob3JcIj5TdG9yeToge2xvY2F0aW9uLnN0b3J5VGl0bGV9PC9zcGFuPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2ZpZ2NhcHRpb24+XHJcbiAgICAgIDwvZmlndXJlPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICB0aXRsZT17bG9jYXRpb24ubmFtZX1cclxuICAgICAgICB2aXNpYmxlPXt2aXNpYmxlfVxyXG4gICAgICAgIGZvb3Rlcj17W1xyXG4gICAgICAgICAgPEJ1dHRvbiBrZXk9XCJzdWJtaXRcIiB0eXBlPVwicHJpbWFyeVwiIG9uQ2xpY2s9eygpID0+IHNldFZpc2libGUoZmFsc2UpfT5cclxuICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgIDwvQnV0dG9uPixcclxuICAgICAgICBdfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGltZyBzcmM9e2xvY2F0aW9uLmltYWdlfSBhbHQ9e2xvY2F0aW9uLm5hbWV9IC8+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICBTdG9yeTp7XCIgXCJ9XHJcbiAgICAgICAgICB7dHlwZSAhPT0gXCJzdHJveVwiICYmIChcclxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC9zdG9yeS8ke2xvY2F0aW9uLnN0b3J5SWR9YH0+XHJcbiAgICAgICAgICAgICAgPGE+e2xvY2F0aW9uLnN0b3J5VGl0bGV9PC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2NhdGlvbkNhcmQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=