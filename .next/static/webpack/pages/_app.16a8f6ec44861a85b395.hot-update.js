webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/common/Navbar.js":
/*!*************************************!*\
  !*** ./components/common/Navbar.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _forms_Search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../forms/Search */ "./components/forms/Search.js");
/* harmony import */ var _FullMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FullMenu */ "./components/common/FullMenu.js");
/* harmony import */ var _hooks_userHooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/userHooks */ "./hooks/userHooks.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\components\\common\\Navbar.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var Navbar = function Navbar(_ref) {
  _s();

  var toggleNotifications = _ref.toggleNotifications;

  var onSearch = function onSearch() {};

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      searchVisible = _useState[0],
      setSearchVisible = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      menuVisible = _useState2[0],
      setMenuVisible = _useState2[1];

  var auth = Object(_hooks_userHooks__WEBPACK_IMPORTED_MODULE_6__["useAuth"])();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

  var toggleMenu = function toggleMenu() {
    return setMenuVisible(!menuVisible);
  };

  var logout = function logout() {
    auth.signout().then(function () {
      return router.push("/auth");
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("section", {
    className: "navbar-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx("header", {
    id: "main-navbar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "inner-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, __jsx("h1", {
    id: "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 15
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }, "Kronikea"))), __jsx(_forms_Search__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "header-icons",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Space"], {
    align: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Space"], {
    align: "center",
    size: 16,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "header-icon icon__home",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 21
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], {
    title: "Home",
    placement: "bottom",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 23
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 25
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 27
    }
  }, __jsx("ion-icon", {
    name: "home",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 29
    }
  }))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], {
    title: "Notifications",
    placement: "bottom",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "header-icon icon__settings",
    onClick: toggleNotifications,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 23
    }
  }, __jsx("ion-icon", {
    name: "notifications",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 25
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], {
    title: "Night mode",
    placement: "bottom",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "header-icon icon__settings",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 23
    }
  }, __jsx("ion-icon", {
    name: "contrast",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 25
    }
  }))), __jsx("div", {
    className: "header-icon icon__account",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/profile",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 23
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: "https://i.pinimg.com/564x/70/50/a3/7050a30cc61e8a7f3f8677ebf9505db7.jpg",
    alt: "aishwaraya",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 27
    }
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Popconfirm"], {
    title: "Do you really want to log out ?",
    onConfirm: logout,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 21
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], {
    title: "Log out",
    placement: "bottom",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 23
    }
  }, __jsx("div", {
    className: "header-icon icon__settings",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 25
    }
  }, __jsx("ion-icon", {
    name: "log-out",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 27
    }
  }))), __jsx("div", {
    className: "mobile-icon icon__home",
    onClick: function onClick() {
      return setSearchVisible(true);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 23
    }
  }, __jsx("ion-icon", {
    name: "search",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 25
    }
  }))), __jsx("div", {
    className: "menu-btn",
    onClick: toggleMenu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "bar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 23
    }
  }), __jsx("div", {
    className: "bar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 23
    }
  }), __jsx("div", {
    className: "bar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 23
    }
  })))))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Modal"], {
    closable: false,
    visible: searchVisible,
    onOk: function onOk() {
      return setSearchVisible(false);
    },
    onCancel: function onCancel() {
      return setSearchVisible(false);
    },
    footer: [__jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      key: "submit",
      type: "primary",
      onClick: function onClick() {
        return setSearchVisible(false);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 13
      }
    }, "Search")],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 9
    }
  }, __jsx("input", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 11
    }
  }))));
};

_s(Navbar, "t8AQYJk65pIk69N0hO1RyMv7N3o=", false, function () {
  return [_hooks_userHooks__WEBPACK_IMPORTED_MODULE_6__["useAuth"], next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});

_c = Navbar;
/* harmony default export */ __webpack_exports__["default"] = (Navbar);

var _c;

$RefreshReg$(_c, "Navbar");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vTmF2YmFyLmpzIl0sIm5hbWVzIjpbIk5hdmJhciIsInRvZ2dsZU5vdGlmaWNhdGlvbnMiLCJvblNlYXJjaCIsInVzZVN0YXRlIiwic2VhcmNoVmlzaWJsZSIsInNldFNlYXJjaFZpc2libGUiLCJtZW51VmlzaWJsZSIsInNldE1lbnVWaXNpYmxlIiwiYXV0aCIsInVzZUF1dGgiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ0b2dnbGVNZW51IiwibG9nb3V0Iiwic2lnbm91dCIsInRoZW4iLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQTZCO0FBQUE7O0FBQUEsTUFBMUJDLG1CQUEwQixRQUExQkEsbUJBQTBCOztBQUMxQyxNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNLENBQUUsQ0FBekI7O0FBRDBDLGtCQUVBQyxzREFBUSxDQUFDLEtBQUQsQ0FGUjtBQUFBLE1BRW5DQyxhQUZtQztBQUFBLE1BRXBCQyxnQkFGb0I7O0FBQUEsbUJBR0pGLHNEQUFRLENBQUMsS0FBRCxDQUhKO0FBQUEsTUFHbkNHLFdBSG1DO0FBQUEsTUFHdEJDLGNBSHNCOztBQUkxQyxNQUFNQyxJQUFJLEdBQUdDLGdFQUFPLEVBQXBCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFFQSxNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYTtBQUFBLFdBQU1MLGNBQWMsQ0FBQyxDQUFDRCxXQUFGLENBQXBCO0FBQUEsR0FBbkI7O0FBQ0EsTUFBTU8sTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUNuQkwsUUFBSSxDQUFDTSxPQUFMLEdBQWVDLElBQWYsQ0FBb0I7QUFBQSxhQUFNTCxNQUFNLENBQUNNLElBQVAsQ0FBWSxPQUFaLENBQU47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QUNFLFlBQVEsRUFBRSxLQURaO0FBRUUsV0FBTyxFQUFFUixhQUZYO0FBR0UsUUFBSSxFQUFFO0FBQUEsYUFBTUMsZ0JBQWdCLENBQUMsS0FBRCxDQUF0QjtBQUFBLEtBSFI7QUFJRSxZQUFRLEVBQUU7QUFBQSxhQUFNQSxnQkFBZ0IsQ0FBQyxLQUFELENBQXRCO0FBQUEsS0FKWjtBQUtFLFVBQU0sRUFBRSxDQUNOLE1BQUMsMkNBQUQ7QUFDRSxTQUFHLEVBQUMsUUFETjtBQUVFLFVBQUksRUFBQyxTQUZQO0FBR0UsYUFBTyxFQUFFO0FBQUEsZUFBTUEsZ0JBQWdCLENBQUMsS0FBRCxDQUF0QjtBQUFBLE9BSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFETSxDQUxWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FlRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZkYsQ0FoR0YsQ0FERixDQURGO0FBdUhELENBbklEOztHQUFNTCxNO1VBSVNTLHdELEVBQ0VFLHFEOzs7S0FMWFgsTTtBQXFJU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4xNmE4ZjZlYzQ0ODYxYTg1YjM5NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IE1vZGFsLCBTcGFjZSwgVG9vbHRpcCwgQnV0dG9uLCBQb3Bjb25maXJtIH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmltcG9ydCBTZWFyY2ggZnJvbSBcIi4uL2Zvcm1zL1NlYXJjaFwiO1xyXG5pbXBvcnQgRnVsbE1lbnUgZnJvbSBcIi4vRnVsbE1lbnVcIjtcclxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gXCIuLi8uLi9ob29rcy91c2VySG9va3NcIjtcclxuXHJcbmNvbnN0IE5hdmJhciA9ICh7IHRvZ2dsZU5vdGlmaWNhdGlvbnMgfSkgPT4ge1xyXG4gIGNvbnN0IG9uU2VhcmNoID0gKCkgPT4ge307XHJcbiAgY29uc3QgW3NlYXJjaFZpc2libGUsIHNldFNlYXJjaFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFttZW51VmlzaWJsZSwgc2V0TWVudVZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGF1dGggPSB1c2VBdXRoKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IHRvZ2dsZU1lbnUgPSAoKSA9PiBzZXRNZW51VmlzaWJsZSghbWVudVZpc2libGUpO1xyXG4gIGNvbnN0IGxvZ291dCA9ICgpID0+IHtcclxuICAgIGF1dGguc2lnbm91dCgpLnRoZW4oKCkgPT4gcm91dGVyLnB1c2goXCIvYXV0aFwiKSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm5hdmJhci1oZWFkZXJcIj5cclxuICAgICAgICA8aGVhZGVyIGlkPVwibWFpbi1uYXZiYXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXItaGVhZGVyXCI+XHJcbiAgICAgICAgICAgIDxoMSBpZD1cInRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgIDxhPktyb25pa2VhPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgPFNlYXJjaCAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1pY29uc1wiPlxyXG4gICAgICAgICAgICAgIDxTcGFjZSBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tLWJ0biBjdXN0b20tYnRuLXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgIDxwPkxvZ2luIC8gU2lnbiBVcDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25cIj5cclxuICAgICAgICAgICAgICAgICAgPFNwYWNlIGFsaWduPVwiY2VudGVyXCIgc2l6ZT17MTZ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWljb24gaWNvbl9faG9tZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgdGl0bGU9XCJIb21lXCIgcGxhY2VtZW50PVwiYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW9uLWljb24gbmFtZT1cImhvbWVcIj48L2lvbi1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIHRpdGxlPVwiTm90aWZpY2F0aW9uc1wiIHBsYWNlbWVudD1cImJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoZWFkZXItaWNvbiBpY29uX19zZXR0aW5nc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZU5vdGlmaWNhdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpb24taWNvbiBuYW1lPVwibm90aWZpY2F0aW9uc1wiPjwvaW9uLWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgdGl0bGU9XCJOaWdodCBtb2RlXCIgcGxhY2VtZW50PVwiYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1pY29uIGljb25fX3NldHRpbmdzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpb24taWNvbiBuYW1lPVwiY29udHJhc3RcIj48L2lvbi1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWljb24gaWNvbl9fYWNjb3VudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9maWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vaS5waW5pbWcuY29tLzU2NHgvNzAvNTAvYTMvNzA1MGEzMGNjNjFlOGE3ZjNmODY3N2ViZjk1MDVkYjcuanBnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImFpc2h3YXJheWFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8UG9wY29uZmlybVxyXG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJEbyB5b3UgcmVhbGx5IHdhbnQgdG8gbG9nIG91dCA/XCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ29uZmlybT17bG9nb3V0fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIHRpdGxlPVwiTG9nIG91dFwiIHBsYWNlbWVudD1cImJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1pY29uIGljb25fX3NldHRpbmdzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGlvbi1pY29uIG5hbWU9XCJsb2ctb3V0XCI+PC9pb24taWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1vYmlsZS1pY29uIGljb25fX2hvbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTZWFyY2hWaXNpYmxlKHRydWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW9uLWljb24gbmFtZT1cInNlYXJjaFwiPjwvaW9uLWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L1BvcGNvbmZpcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51LWJ0blwiIG9uQ2xpY2s9e3RvZ2dsZU1lbnV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L1NwYWNlPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9TcGFjZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICB7LyogPGhlYWRlciBjbGFzc05hbWU9XCJjYXRlZ29yaWVzXCI+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgPGxpPkRyYW1hPC9saT5cclxuICAgICAgICAgIDxsaT5Db21lZHk8L2xpPlxyXG4gICAgICAgICAgPGxpPkhvcnJvcjwvbGk+XHJcbiAgICAgICAgICA8bGk+Um9tYW5jZTwvbGk+XHJcbiAgICAgICAgICA8bGk+U2NpLWZpPC9saT5cclxuICAgICAgICAgIDxsaT5GYW50YXN5PC9saT5cclxuICAgICAgICAgIDxsaT5IdW1vcjwvbGk+XHJcbiAgICAgICAgICA8bGk+QWN0aW9uPC9saT5cclxuICAgICAgICAgIDxsaT5UaHJpbGxlcjwvbGk+XHJcbiAgICAgICAgICA8bGk+U3VwZXJuYXR1cmFsPC9saT5cclxuICAgICAgICAgIDxsaT5BZHZlbnR1cmU8L2xpPlxyXG4gICAgICAgICAgPGxpPk15c3Rlcnk8L2xpPlxyXG4gICAgICAgICAgPGxpPldlc3Rlcm48L2xpPlxyXG4gICAgICAgICAgPGxpPkhpc3Rvcnk8L2xpPlxyXG4gICAgICAgICAgPGxpPkNyaW1lPC9saT5cclxuICAgICAgICAgIDxsaT5GYW5maWN0aW9uPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L2hlYWRlcj4gKi99XHJcblxyXG4gICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgY2xvc2FibGU9e2ZhbHNlfVxyXG4gICAgICAgICAgdmlzaWJsZT17c2VhcmNoVmlzaWJsZX1cclxuICAgICAgICAgIG9uT2s9eygpID0+IHNldFNlYXJjaFZpc2libGUoZmFsc2UpfVxyXG4gICAgICAgICAgb25DYW5jZWw9eygpID0+IHNldFNlYXJjaFZpc2libGUoZmFsc2UpfVxyXG4gICAgICAgICAgZm9vdGVyPXtbXHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBrZXk9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTZWFyY2hWaXNpYmxlKGZhbHNlKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFNlYXJjaFxyXG4gICAgICAgICAgICA8L0J1dHRvbj4sXHJcbiAgICAgICAgICBdfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxpbnB1dCAvPlxyXG4gICAgICAgIDwvTW9kYWw+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgey8qIDxGdWxsTWVudSB0b2dnbGVNZW51PXt0b2dnbGVNZW51fSBtZW51VmlzaWJsZT17bWVudVZpc2libGV9IC8+ICovfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==