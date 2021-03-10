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
  }))))), __jsx("div", {
    className: "header-icon icon__settings",
    onClick: toggleNotifications,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 21
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], {
    title: "Notifications",
    placement: "bottom",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 23
    }
  }, __jsx("ion-icon", {
    name: "notifications",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 25
    }
  }))), __jsx("div", {
    className: "header-icon icon__settings",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 21
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], {
    title: "Night mode",
    placement: "bottom",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 23
    }
  }, __jsx("ion-icon", {
    name: "contrast",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 25
    }
  }))), __jsx("div", {
    className: "header-icon icon__account",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/profile",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 23
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: "https://i.pinimg.com/564x/70/50/a3/7050a30cc61e8a7f3f8677ebf9505db7.jpg",
    alt: "aishwaraya",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 27
    }
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Popconfirm"], {
    title: "Do you really want to log out ?",
    onConfirm: logout,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "header-icon icon__settings",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 23
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], {
    title: "Log out",
    placement: "bottom",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 25
    }
  }, __jsx("ion-icon", {
    name: "log-out",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
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
      lineNumber: 82,
      columnNumber: 23
    }
  }, __jsx("ion-icon", {
    name: "search",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 25
    }
  }))), __jsx("div", {
    className: "menu-btn",
    onClick: toggleMenu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 21
    }
  }, __jsx("div", {
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
  }), __jsx("div", {
    className: "bar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
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
        lineNumber: 127,
        columnNumber: 13
      }
    }, "Search")],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 9
    }
  }, __jsx("input", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vTmF2YmFyLmpzIl0sIm5hbWVzIjpbIk5hdmJhciIsInRvZ2dsZU5vdGlmaWNhdGlvbnMiLCJvblNlYXJjaCIsInVzZVN0YXRlIiwic2VhcmNoVmlzaWJsZSIsInNldFNlYXJjaFZpc2libGUiLCJtZW51VmlzaWJsZSIsInNldE1lbnVWaXNpYmxlIiwiYXV0aCIsInVzZUF1dGgiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ0b2dnbGVNZW51IiwibG9nb3V0Iiwic2lnbm91dCIsInRoZW4iLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQTZCO0FBQUE7O0FBQUEsTUFBMUJDLG1CQUEwQixRQUExQkEsbUJBQTBCOztBQUMxQyxNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNLENBQUUsQ0FBekI7O0FBRDBDLGtCQUVBQyxzREFBUSxDQUFDLEtBQUQsQ0FGUjtBQUFBLE1BRW5DQyxhQUZtQztBQUFBLE1BRXBCQyxnQkFGb0I7O0FBQUEsbUJBR0pGLHNEQUFRLENBQUMsS0FBRCxDQUhKO0FBQUEsTUFHbkNHLFdBSG1DO0FBQUEsTUFHdEJDLGNBSHNCOztBQUkxQyxNQUFNQyxJQUFJLEdBQUdDLGdFQUFPLEVBQXBCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFFQSxNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYTtBQUFBLFdBQU1MLGNBQWMsQ0FBQyxDQUFDRCxXQUFGLENBQXBCO0FBQUEsR0FBbkI7O0FBQ0EsTUFBTU8sTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUNuQkwsUUFBSSxDQUFDTSxPQUFMLEdBQWVDLElBQWYsQ0FBb0I7QUFBQSxhQUFNTCxNQUFNLENBQUNNLElBQVAsQ0FBWSxPQUFaLENBQU47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QUNFLFlBQVEsRUFBRSxLQURaO0FBRUUsV0FBTyxFQUFFUixhQUZYO0FBR0UsUUFBSSxFQUFFO0FBQUEsYUFBTUMsZ0JBQWdCLENBQUMsS0FBRCxDQUF0QjtBQUFBLEtBSFI7QUFJRSxZQUFRLEVBQUU7QUFBQSxhQUFNQSxnQkFBZ0IsQ0FBQyxLQUFELENBQXRCO0FBQUEsS0FKWjtBQUtFLFVBQU0sRUFBRSxDQUNOLE1BQUMsMkNBQUQ7QUFDRSxTQUFHLEVBQUMsUUFETjtBQUVFLFVBQUksRUFBQyxTQUZQO0FBR0UsYUFBTyxFQUFFO0FBQUEsZUFBTUEsZ0JBQWdCLENBQUMsS0FBRCxDQUF0QjtBQUFBLE9BSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFETSxDQUxWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FlRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZkYsQ0FqR0YsQ0FERixDQURGO0FBd0hELENBcElEOztHQUFNTCxNO1VBSVNTLHdELEVBQ0VFLHFEOzs7S0FMWFgsTTtBQXNJU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5kYmYxNTU5ZTYwNWJlODFkYWVlNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IE1vZGFsLCBTcGFjZSwgVG9vbHRpcCwgQnV0dG9uLCBQb3Bjb25maXJtIH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmltcG9ydCBTZWFyY2ggZnJvbSBcIi4uL2Zvcm1zL1NlYXJjaFwiO1xyXG5pbXBvcnQgRnVsbE1lbnUgZnJvbSBcIi4vRnVsbE1lbnVcIjtcclxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gXCIuLi8uLi9ob29rcy91c2VySG9va3NcIjtcclxuXHJcbmNvbnN0IE5hdmJhciA9ICh7IHRvZ2dsZU5vdGlmaWNhdGlvbnMgfSkgPT4ge1xyXG4gIGNvbnN0IG9uU2VhcmNoID0gKCkgPT4ge307XHJcbiAgY29uc3QgW3NlYXJjaFZpc2libGUsIHNldFNlYXJjaFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFttZW51VmlzaWJsZSwgc2V0TWVudVZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGF1dGggPSB1c2VBdXRoKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IHRvZ2dsZU1lbnUgPSAoKSA9PiBzZXRNZW51VmlzaWJsZSghbWVudVZpc2libGUpO1xyXG4gIGNvbnN0IGxvZ291dCA9ICgpID0+IHtcclxuICAgIGF1dGguc2lnbm91dCgpLnRoZW4oKCkgPT4gcm91dGVyLnB1c2goXCIvYXV0aFwiKSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm5hdmJhci1oZWFkZXJcIj5cclxuICAgICAgICA8aGVhZGVyIGlkPVwibWFpbi1uYXZiYXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXItaGVhZGVyXCI+XHJcbiAgICAgICAgICAgIDxoMSBpZD1cInRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgIDxhPktyb25pa2VhPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgPFNlYXJjaCAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1pY29uc1wiPlxyXG4gICAgICAgICAgICAgIDxTcGFjZSBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tLWJ0biBjdXN0b20tYnRuLXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgIDxwPkxvZ2luIC8gU2lnbiBVcDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25cIj5cclxuICAgICAgICAgICAgICAgICAgPFNwYWNlIGFsaWduPVwiY2VudGVyXCIgc2l6ZT17MTZ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWljb24gaWNvbl9faG9tZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgdGl0bGU9XCJIb21lXCIgcGxhY2VtZW50PVwiYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW9uLWljb24gbmFtZT1cImhvbWVcIj48L2lvbi1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoZWFkZXItaWNvbiBpY29uX19zZXR0aW5nc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVOb3RpZmljYXRpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIHRpdGxlPVwiTm90aWZpY2F0aW9uc1wiIHBsYWNlbWVudD1cImJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW9uLWljb24gbmFtZT1cIm5vdGlmaWNhdGlvbnNcIj48L2lvbi1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWljb24gaWNvbl9fc2V0dGluZ3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIHRpdGxlPVwiTmlnaHQgbW9kZVwiIHBsYWNlbWVudD1cImJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW9uLWljb24gbmFtZT1cImNvbnRyYXN0XCI+PC9pb24taWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1pY29uIGljb25fX2FjY291bnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZmlsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2kucGluaW1nLmNvbS81NjR4LzcwLzUwL2EzLzcwNTBhMzBjYzYxZThhN2YzZjg2NzdlYmY5NTA1ZGI3LmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJhaXNod2FyYXlhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBvcGNvbmZpcm1cclxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRG8geW91IHJlYWxseSB3YW50IHRvIGxvZyBvdXQgP1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNvbmZpcm09e2xvZ291dH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1pY29uIGljb25fX3NldHRpbmdzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIHRpdGxlPVwiTG9nIG91dFwiIHBsYWNlbWVudD1cImJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpb24taWNvbiBuYW1lPVwibG9nLW91dFwiPjwvaW9uLWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtb2JpbGUtaWNvbiBpY29uX19ob21lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VhcmNoVmlzaWJsZSh0cnVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlvbi1pY29uIG5hbWU9XCJzZWFyY2hcIj48L2lvbi1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Qb3Bjb25maXJtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS1idG5cIiBvbkNsaWNrPXt0b2dnbGVNZW51fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9TcGFjZT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvU3BhY2U+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgey8qIDxoZWFkZXIgY2xhc3NOYW1lPVwiY2F0ZWdvcmllc1wiPlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgIDxsaT5EcmFtYTwvbGk+XHJcbiAgICAgICAgICA8bGk+Q29tZWR5PC9saT5cclxuICAgICAgICAgIDxsaT5Ib3Jyb3I8L2xpPlxyXG4gICAgICAgICAgPGxpPlJvbWFuY2U8L2xpPlxyXG4gICAgICAgICAgPGxpPlNjaS1maTwvbGk+XHJcbiAgICAgICAgICA8bGk+RmFudGFzeTwvbGk+XHJcbiAgICAgICAgICA8bGk+SHVtb3I8L2xpPlxyXG4gICAgICAgICAgPGxpPkFjdGlvbjwvbGk+XHJcbiAgICAgICAgICA8bGk+VGhyaWxsZXI8L2xpPlxyXG4gICAgICAgICAgPGxpPlN1cGVybmF0dXJhbDwvbGk+XHJcbiAgICAgICAgICA8bGk+QWR2ZW50dXJlPC9saT5cclxuICAgICAgICAgIDxsaT5NeXN0ZXJ5PC9saT5cclxuICAgICAgICAgIDxsaT5XZXN0ZXJuPC9saT5cclxuICAgICAgICAgIDxsaT5IaXN0b3J5PC9saT5cclxuICAgICAgICAgIDxsaT5DcmltZTwvbGk+XHJcbiAgICAgICAgICA8bGk+RmFuZmljdGlvbjwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9oZWFkZXI+ICovfVxyXG5cclxuICAgICAgICA8TW9kYWxcclxuICAgICAgICAgIGNsb3NhYmxlPXtmYWxzZX1cclxuICAgICAgICAgIHZpc2libGU9e3NlYXJjaFZpc2libGV9XHJcbiAgICAgICAgICBvbk9rPXsoKSA9PiBzZXRTZWFyY2hWaXNpYmxlKGZhbHNlKX1cclxuICAgICAgICAgIG9uQ2FuY2VsPXsoKSA9PiBzZXRTZWFyY2hWaXNpYmxlKGZhbHNlKX1cclxuICAgICAgICAgIGZvb3Rlcj17W1xyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAga2V5PVwic3VibWl0XCJcclxuICAgICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VhcmNoVmlzaWJsZShmYWxzZSl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBTZWFyY2hcclxuICAgICAgICAgICAgPC9CdXR0b24+LFxyXG4gICAgICAgICAgXX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8aW5wdXQgLz5cclxuICAgICAgICA8L01vZGFsPlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIHsvKiA8RnVsbE1lbnUgdG9nZ2xlTWVudT17dG9nZ2xlTWVudX0gbWVudVZpc2libGU9e21lbnVWaXNpYmxlfSAvPiAqL31cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=