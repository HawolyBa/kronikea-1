webpackHotUpdate_N_E("pages/profile",{

/***/ "./pages/profile/index.js":
/*!********************************!*\
  !*** ./pages/profile/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _components_profile_Banner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/profile/Banner */ "./components/profile/Banner.js");
/* harmony import */ var _components_profile_Tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/profile/Tabs */ "./components/profile/Tabs.js");
/* harmony import */ var _components_profile_Stories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/profile/Stories */ "./components/profile/Stories.js");
/* harmony import */ var _components_profile_Characters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/profile/Characters */ "./components/profile/Characters.js");
/* harmony import */ var _components_profile_Followers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/profile/Followers */ "./components/profile/Followers.js");
/* harmony import */ var _components_profile_Locations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/profile/Locations */ "./components/profile/Locations.js");
/* harmony import */ var _components_profile_Settings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/profile/Settings */ "./components/profile/Settings.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_userActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../redux/actions/userActions */ "./redux/actions/userActions.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\pages\\profile\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












var Profile = function Profile() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(["stories", "characters", "locations", "favorites stories", "favorites characters"]),
      tabs = _useState[0];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      modalVisible = _useState2[0],
      setModalVisible = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      settings = _useState3[0],
      openSettings = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("stories"),
      currentTab = _useState4[0],
      setCurrentTab = _useState4[1];

  var changeTab = function changeTab(tab) {
    return setCurrentTab(tab);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    Object(_redux_actions_userActions__WEBPACK_IMPORTED_MODULE_10__["getProfile"])();
  }, []);
  return __jsx("div", {
    className: "profile",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }, __jsx(_components_profile_Banner__WEBPACK_IMPORTED_MODULE_2__["default"], {
    openSettings: openSettings,
    setModalVisible: setModalVisible,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }), __jsx("section", {
    className: "profile-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, __jsx(_components_profile_Tabs__WEBPACK_IMPORTED_MODULE_3__["default"], {
    currentTab: currentTab,
    tabs: tabs,
    changeTab: changeTab,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }), currentTab === "stories" && __jsx(_components_profile_Stories__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 38
    }
  }), currentTab === "characters" && __jsx(_components_profile_Characters__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 41
    }
  }), currentTab === "locations" && __jsx(_components_profile_Locations__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 40
    }
  }), currentTab === "favorites stories" && __jsx(_components_profile_Stories__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 48
    }
  }), currentTab === "favorites characters" && __jsx(_components_profile_Characters__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 51
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    title: "128 Followers",
    width: "50%",
    visible: modalVisible,
    onOk: function onOk() {
      return setModalVisible(false);
    },
    onCancel: function onCancel() {
      return setModalVisible(false);
    },
    footer: [__jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      key: "back",
      onClick: function onClick() {
        return setModalVisible(false);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 11
      }
    }, "OK")],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, __jsx(_components_profile_Followers__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    title: "Settings",
    visible: settings,
    onOk: function onOk() {
      return openSettings(false);
    },
    onCancel: function onCancel() {
      return openSettings(false);
    },
    footer: [__jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      key: "submit",
      type: "primary",
      onClick: function onClick() {
        return openSettings(false);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 11
      }
    }, "Submit")],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }, __jsx(_components_profile_Settings__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  })));
};

_s(Profile, "eDUS57MTysSUj5cdGrGzVfS6WSk=");

_c = Profile;

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    user: state.auth
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapDispatchToProps, {
  getProfile: _redux_actions_userActions__WEBPACK_IMPORTED_MODULE_10__["getProfile"]
})(Profile));

var _c;

$RefreshReg$(_c, "Profile");

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

/***/ }),

/***/ "./redux/actions/userActions.js":
/*!**************************************!*\
  !*** ./redux/actions/userActions.js ***!
  \**************************************/
/*! exports provided: getProfile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProfile", function() { return getProfile; });
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/constants */ "./utils/constants.js");

var getProfile = function getProfile() {
  return function (dispatch) {
    console.log("coucou");
  };
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvYWN0aW9ucy91c2VyQWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJQcm9maWxlIiwidXNlU3RhdGUiLCJ0YWJzIiwibW9kYWxWaXNpYmxlIiwic2V0TW9kYWxWaXNpYmxlIiwic2V0dGluZ3MiLCJvcGVuU2V0dGluZ3MiLCJjdXJyZW50VGFiIiwic2V0Q3VycmVudFRhYiIsImNoYW5nZVRhYiIsInRhYiIsInVzZUVmZmVjdCIsImdldFByb2ZpbGUiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIm93blByb3BzIiwidXNlciIsImF1dGgiLCJjb25uZWN0IiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBQUEsa0JBQ0xDLHNEQUFRLENBQUMsQ0FDdEIsU0FEc0IsRUFFdEIsWUFGc0IsRUFHdEIsV0FIc0IsRUFJdEIsbUJBSnNCLEVBS3RCLHNCQUxzQixDQUFELENBREg7QUFBQSxNQUNiQyxJQURhOztBQUFBLG1CQVFvQkQsc0RBQVEsQ0FBQyxLQUFELENBUjVCO0FBQUEsTUFRYkUsWUFSYTtBQUFBLE1BUUNDLGVBUkQ7O0FBQUEsbUJBU2FILHNEQUFRLENBQUMsS0FBRCxDQVRyQjtBQUFBLE1BU2JJLFFBVGE7QUFBQSxNQVNIQyxZQVRHOztBQUFBLG1CQVVnQkwsc0RBQVEsQ0FBQyxTQUFELENBVnhCO0FBQUEsTUFVYk0sVUFWYTtBQUFBLE1BVURDLGFBVkM7O0FBV3BCLE1BQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLEdBQUQ7QUFBQSxXQUFTRixhQUFhLENBQUNFLEdBQUQsQ0FBdEI7QUFBQSxHQUFsQjs7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLGtGQUFVO0FBQ1gsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUlBLFNBQ0U7QUFBSyxhQUFTLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxrRUFBRDtBQUFRLGdCQUFZLEVBQUVOLFlBQXRCO0FBQW9DLG1CQUFlLEVBQUVGLGVBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQVMsYUFBUyxFQUFDLGlCQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnRUFBRDtBQUFNLGNBQVUsRUFBRUcsVUFBbEI7QUFBOEIsUUFBSSxFQUFFTCxJQUFwQztBQUEwQyxhQUFTLEVBQUVPLFNBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVHRixVQUFVLEtBQUssU0FBZixJQUE0QixNQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGL0IsRUFHR0EsVUFBVSxLQUFLLFlBQWYsSUFBK0IsTUFBQyxzRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSGxDLEVBSUdBLFVBQVUsS0FBSyxXQUFmLElBQThCLE1BQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpqQyxFQUtHQSxVQUFVLEtBQUssbUJBQWYsSUFBc0MsTUFBQyxtRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTHpDLEVBTUdBLFVBQVUsS0FBSyxzQkFBZixJQUF5QyxNQUFDLHNFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFONUMsQ0FGRixFQVVFLE1BQUMsMENBQUQ7QUFDRSxTQUFLLEVBQUMsZUFEUjtBQUVFLFNBQUssRUFBRSxLQUZUO0FBR0UsV0FBTyxFQUFFSixZQUhYO0FBSUUsUUFBSSxFQUFFO0FBQUEsYUFBTUMsZUFBZSxDQUFDLEtBQUQsQ0FBckI7QUFBQSxLQUpSO0FBS0UsWUFBUSxFQUFFO0FBQUEsYUFBTUEsZUFBZSxDQUFDLEtBQUQsQ0FBckI7QUFBQSxLQUxaO0FBTUUsVUFBTSxFQUFFLENBQ04sTUFBQywyQ0FBRDtBQUFRLFNBQUcsRUFBQyxNQUFaO0FBQW1CLGFBQU8sRUFBRTtBQUFBLGVBQU1BLGVBQWUsQ0FBQyxLQUFELENBQXJCO0FBQUEsT0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURNLENBTlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVlFLE1BQUMsd0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBWkYsQ0FWRixFQTBCRSxNQUFDLDBDQUFEO0FBQ0UsU0FBSyxFQUFDLFVBRFI7QUFFRSxXQUFPLEVBQUVDLFFBRlg7QUFHRSxRQUFJLEVBQUU7QUFBQSxhQUFNQyxZQUFZLENBQUMsS0FBRCxDQUFsQjtBQUFBLEtBSFI7QUFJRSxZQUFRLEVBQUU7QUFBQSxhQUFNQSxZQUFZLENBQUMsS0FBRCxDQUFsQjtBQUFBLEtBSlo7QUFLRSxVQUFNLEVBQUUsQ0FDTixNQUFDLDJDQUFEO0FBQ0UsU0FBRyxFQUFDLFFBRE47QUFFRSxVQUFJLEVBQUMsU0FGUDtBQUdFLGFBQU8sRUFBRTtBQUFBLGVBQU1BLFlBQVksQ0FBQyxLQUFELENBQWxCO0FBQUEsT0FIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURNLENBTFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWVFLE1BQUMsb0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWZGLENBMUJGLENBREY7QUE4Q0QsQ0EvREQ7O0dBQU1OLE87O0tBQUFBLE87O0FBaUVOLElBQU1hLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRCxFQUFRQyxRQUFSO0FBQUEsU0FBc0I7QUFDNUNDLFFBQUksRUFBRUYsS0FBSyxDQUFDRztBQURnQyxHQUF0QjtBQUFBLENBQXhCOztBQUllQywwSEFBTyxDQUFDQyxrQkFBRCxFQUFxQjtBQUFFUCxZQUFVLEVBQVZBLHNFQUFVQTtBQUFaLENBQXJCLENBQVAsQ0FBNENaLE9BQTVDLENBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRkE7QUFBQTtBQUFBO0FBQUE7QUFFTyxJQUFNWSxVQUFVLEdBQUcsU0FBYkEsVUFBYTtBQUFBLFNBQU0sVUFBQ1EsUUFBRCxFQUFjO0FBQzVDQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaO0FBQ0QsR0FGeUI7QUFBQSxDQUFuQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlLmQwODhiMDc1MzNjNjA5ZWQ3ZDA0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHsgUm93LCBNb2RhbCwgQnV0dG9uIH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmltcG9ydCBCYW5uZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcHJvZmlsZS9CYW5uZXJcIjtcclxuaW1wb3J0IFRhYnMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcHJvZmlsZS9UYWJzXCI7XHJcbmltcG9ydCBTdG9yaWVzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3Byb2ZpbGUvU3Rvcmllc1wiO1xyXG5pbXBvcnQgQ2hhcmFjdGVycyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9wcm9maWxlL0NoYXJhY3RlcnNcIjtcclxuaW1wb3J0IEZvbGxvd2VycyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9wcm9maWxlL0ZvbGxvd2Vyc1wiO1xyXG5pbXBvcnQgTG9jYXRpb25zIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3Byb2ZpbGUvTG9jYXRpb25zXCI7XHJcbmltcG9ydCBTZXR0aW5ncyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9wcm9maWxlL1NldHRpbmdzXCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgZ2V0UHJvZmlsZSB9IGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25zL3VzZXJBY3Rpb25zXCI7XHJcblxyXG5jb25zdCBQcm9maWxlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt0YWJzXSA9IHVzZVN0YXRlKFtcclxuICAgIFwic3Rvcmllc1wiLFxyXG4gICAgXCJjaGFyYWN0ZXJzXCIsXHJcbiAgICBcImxvY2F0aW9uc1wiLFxyXG4gICAgXCJmYXZvcml0ZXMgc3Rvcmllc1wiLFxyXG4gICAgXCJmYXZvcml0ZXMgY2hhcmFjdGVyc1wiLFxyXG4gIF0pO1xyXG4gIGNvbnN0IFttb2RhbFZpc2libGUsIHNldE1vZGFsVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3NldHRpbmdzLCBvcGVuU2V0dGluZ3NdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtjdXJyZW50VGFiLCBzZXRDdXJyZW50VGFiXSA9IHVzZVN0YXRlKFwic3Rvcmllc1wiKTtcclxuICBjb25zdCBjaGFuZ2VUYWIgPSAodGFiKSA9PiBzZXRDdXJyZW50VGFiKHRhYik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRQcm9maWxlKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlXCI+XHJcbiAgICAgIDxCYW5uZXIgb3BlblNldHRpbmdzPXtvcGVuU2V0dGluZ3N9IHNldE1vZGFsVmlzaWJsZT17c2V0TW9kYWxWaXNpYmxlfSAvPlxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwcm9maWxlLWNvbnRlbnRcIj5cclxuICAgICAgICA8VGFicyBjdXJyZW50VGFiPXtjdXJyZW50VGFifSB0YWJzPXt0YWJzfSBjaGFuZ2VUYWI9e2NoYW5nZVRhYn0gLz5cclxuICAgICAgICB7Y3VycmVudFRhYiA9PT0gXCJzdG9yaWVzXCIgJiYgPFN0b3JpZXMgLz59XHJcbiAgICAgICAge2N1cnJlbnRUYWIgPT09IFwiY2hhcmFjdGVyc1wiICYmIDxDaGFyYWN0ZXJzIC8+fVxyXG4gICAgICAgIHtjdXJyZW50VGFiID09PSBcImxvY2F0aW9uc1wiICYmIDxMb2NhdGlvbnMgLz59XHJcbiAgICAgICAge2N1cnJlbnRUYWIgPT09IFwiZmF2b3JpdGVzIHN0b3JpZXNcIiAmJiA8U3RvcmllcyAvPn1cclxuICAgICAgICB7Y3VycmVudFRhYiA9PT0gXCJmYXZvcml0ZXMgY2hhcmFjdGVyc1wiICYmIDxDaGFyYWN0ZXJzIC8+fVxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIHRpdGxlPVwiMTI4IEZvbGxvd2Vyc1wiXHJcbiAgICAgICAgd2lkdGg9e1wiNTAlXCJ9XHJcbiAgICAgICAgdmlzaWJsZT17bW9kYWxWaXNpYmxlfVxyXG4gICAgICAgIG9uT2s9eygpID0+IHNldE1vZGFsVmlzaWJsZShmYWxzZSl9XHJcbiAgICAgICAgb25DYW5jZWw9eygpID0+IHNldE1vZGFsVmlzaWJsZShmYWxzZSl9XHJcbiAgICAgICAgZm9vdGVyPXtbXHJcbiAgICAgICAgICA8QnV0dG9uIGtleT1cImJhY2tcIiBvbkNsaWNrPXsoKSA9PiBzZXRNb2RhbFZpc2libGUoZmFsc2UpfT5cclxuICAgICAgICAgICAgT0tcclxuICAgICAgICAgIDwvQnV0dG9uPixcclxuICAgICAgICBdfVxyXG4gICAgICA+XHJcbiAgICAgICAgPFJvdz5cclxuICAgICAgICAgIDxGb2xsb3dlcnMgLz5cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgdGl0bGU9XCJTZXR0aW5nc1wiXHJcbiAgICAgICAgdmlzaWJsZT17c2V0dGluZ3N9XHJcbiAgICAgICAgb25Paz17KCkgPT4gb3BlblNldHRpbmdzKGZhbHNlKX1cclxuICAgICAgICBvbkNhbmNlbD17KCkgPT4gb3BlblNldHRpbmdzKGZhbHNlKX1cclxuICAgICAgICBmb290ZXI9e1tcclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAga2V5PVwic3VibWl0XCJcclxuICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvcGVuU2V0dGluZ3MoZmFsc2UpfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBTdWJtaXRcclxuICAgICAgICAgIDwvQnV0dG9uPixcclxuICAgICAgICBdfVxyXG4gICAgICA+XHJcbiAgICAgICAgPFNldHRpbmdzIC8+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCBvd25Qcm9wcykgPT4gKHtcclxuICB1c2VyOiBzdGF0ZS5hdXRoLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwRGlzcGF0Y2hUb1Byb3BzLCB7IGdldFByb2ZpbGUgfSkoUHJvZmlsZSk7XHJcbiIsImltcG9ydCB7IEdFVF9QUk9GSUxFIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2NvbnN0YW50c1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFByb2ZpbGUgPSAoKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBjb25zb2xlLmxvZyhcImNvdWNvdVwiKTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==