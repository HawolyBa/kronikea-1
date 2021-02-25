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












var Profile = function Profile(props) {
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
  console.log(props);
  return __jsx("div", {
    className: "profile",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, __jsx(_components_profile_Banner__WEBPACK_IMPORTED_MODULE_2__["default"], {
    openSettings: openSettings,
    setModalVisible: setModalVisible,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }), __jsx("section", {
    className: "profile-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, __jsx(_components_profile_Tabs__WEBPACK_IMPORTED_MODULE_3__["default"], {
    currentTab: currentTab,
    tabs: tabs,
    changeTab: changeTab,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }), currentTab === "stories" && __jsx(_components_profile_Stories__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 38
    }
  }), currentTab === "characters" && __jsx(_components_profile_Characters__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 41
    }
  }), currentTab === "locations" && __jsx(_components_profile_Locations__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 40
    }
  }), currentTab === "favorites stories" && __jsx(_components_profile_Stories__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 48
    }
  }), currentTab === "favorites characters" && __jsx(_components_profile_Characters__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
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
        lineNumber: 51,
        columnNumber: 11
      }
    }, "OK")],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, __jsx(_components_profile_Followers__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
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
        lineNumber: 66,
        columnNumber: 11
      }
    }, "Submit")],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }, __jsx(_components_profile_Settings__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS9pbmRleC5qcyJdLCJuYW1lcyI6WyJQcm9maWxlIiwicHJvcHMiLCJ1c2VTdGF0ZSIsInRhYnMiLCJtb2RhbFZpc2libGUiLCJzZXRNb2RhbFZpc2libGUiLCJzZXR0aW5ncyIsIm9wZW5TZXR0aW5ncyIsImN1cnJlbnRUYWIiLCJzZXRDdXJyZW50VGFiIiwiY2hhbmdlVGFiIiwidGFiIiwidXNlRWZmZWN0IiwiZ2V0UHJvZmlsZSIsImNvbnNvbGUiLCJsb2ciLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIm93blByb3BzIiwidXNlciIsImF1dGgiLCJjb25uZWN0IiwibWFwRGlzcGF0Y2hUb1Byb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxrQkFDVkMsc0RBQVEsQ0FBQyxDQUN0QixTQURzQixFQUV0QixZQUZzQixFQUd0QixXQUhzQixFQUl0QixtQkFKc0IsRUFLdEIsc0JBTHNCLENBQUQsQ0FERTtBQUFBLE1BQ2xCQyxJQURrQjs7QUFBQSxtQkFRZUQsc0RBQVEsQ0FBQyxLQUFELENBUnZCO0FBQUEsTUFRbEJFLFlBUmtCO0FBQUEsTUFRSkMsZUFSSTs7QUFBQSxtQkFTUUgsc0RBQVEsQ0FBQyxLQUFELENBVGhCO0FBQUEsTUFTbEJJLFFBVGtCO0FBQUEsTUFTUkMsWUFUUTs7QUFBQSxtQkFVV0wsc0RBQVEsQ0FBQyxTQUFELENBVm5CO0FBQUEsTUFVbEJNLFVBVmtCO0FBQUEsTUFVTkMsYUFWTTs7QUFXekIsTUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsR0FBRDtBQUFBLFdBQVNGLGFBQWEsQ0FBQ0UsR0FBRCxDQUF0QjtBQUFBLEdBQWxCOztBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFDZEMsa0ZBQVU7QUFDWCxHQUZRLEVBRU4sRUFGTSxDQUFUO0FBSUFDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZZCxLQUFaO0FBQ0EsU0FDRTtBQUFLLGFBQVMsRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGtFQUFEO0FBQVEsZ0JBQVksRUFBRU0sWUFBdEI7QUFBb0MsbUJBQWUsRUFBRUYsZUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBUyxhQUFTLEVBQUMsaUJBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdFQUFEO0FBQU0sY0FBVSxFQUFFRyxVQUFsQjtBQUE4QixRQUFJLEVBQUVMLElBQXBDO0FBQTBDLGFBQVMsRUFBRU8sU0FBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUdGLFVBQVUsS0FBSyxTQUFmLElBQTRCLE1BQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUYvQixFQUdHQSxVQUFVLEtBQUssWUFBZixJQUErQixNQUFDLHNFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIbEMsRUFJR0EsVUFBVSxLQUFLLFdBQWYsSUFBOEIsTUFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSmpDLEVBS0dBLFVBQVUsS0FBSyxtQkFBZixJQUFzQyxNQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMekMsRUFNR0EsVUFBVSxLQUFLLHNCQUFmLElBQXlDLE1BQUMsc0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU41QyxDQUZGLEVBVUUsTUFBQywwQ0FBRDtBQUNFLFNBQUssRUFBQyxlQURSO0FBRUUsU0FBSyxFQUFFLEtBRlQ7QUFHRSxXQUFPLEVBQUVKLFlBSFg7QUFJRSxRQUFJLEVBQUU7QUFBQSxhQUFNQyxlQUFlLENBQUMsS0FBRCxDQUFyQjtBQUFBLEtBSlI7QUFLRSxZQUFRLEVBQUU7QUFBQSxhQUFNQSxlQUFlLENBQUMsS0FBRCxDQUFyQjtBQUFBLEtBTFo7QUFNRSxVQUFNLEVBQUUsQ0FDTixNQUFDLDJDQUFEO0FBQVEsU0FBRyxFQUFDLE1BQVo7QUFBbUIsYUFBTyxFQUFFO0FBQUEsZUFBTUEsZUFBZSxDQUFDLEtBQUQsQ0FBckI7QUFBQSxPQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRE0sQ0FOVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBWUUsTUFBQyx3Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FaRixDQVZGLEVBMEJFLE1BQUMsMENBQUQ7QUFDRSxTQUFLLEVBQUMsVUFEUjtBQUVFLFdBQU8sRUFBRUMsUUFGWDtBQUdFLFFBQUksRUFBRTtBQUFBLGFBQU1DLFlBQVksQ0FBQyxLQUFELENBQWxCO0FBQUEsS0FIUjtBQUlFLFlBQVEsRUFBRTtBQUFBLGFBQU1BLFlBQVksQ0FBQyxLQUFELENBQWxCO0FBQUEsS0FKWjtBQUtFLFVBQU0sRUFBRSxDQUNOLE1BQUMsMkNBQUQ7QUFDRSxTQUFHLEVBQUMsUUFETjtBQUVFLFVBQUksRUFBQyxTQUZQO0FBR0UsYUFBTyxFQUFFO0FBQUEsZUFBTUEsWUFBWSxDQUFDLEtBQUQsQ0FBbEI7QUFBQSxPQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRE0sQ0FMVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBZUUsTUFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZkYsQ0ExQkYsQ0FERjtBQThDRCxDQWhFRDs7R0FBTVAsTzs7S0FBQUEsTzs7QUFrRU4sSUFBTWdCLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRCxFQUFRQyxRQUFSO0FBQUEsU0FBc0I7QUFDNUNDLFFBQUksRUFBRUYsS0FBSyxDQUFDRztBQURnQyxHQUF0QjtBQUFBLENBQXhCOztBQUllQywwSEFBTyxDQUFDQyxrQkFBRCxFQUFxQjtBQUFFVCxZQUFVLEVBQVZBLHNFQUFVQTtBQUFaLENBQXJCLENBQVAsQ0FBNENiLE9BQTVDLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS5iNGZhMzk5NzJlNmQ1OTIyNGE5My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCB7IFJvdywgTW9kYWwsIEJ1dHRvbiB9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5pbXBvcnQgQmFubmVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3Byb2ZpbGUvQmFubmVyXCI7XHJcbmltcG9ydCBUYWJzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3Byb2ZpbGUvVGFic1wiO1xyXG5pbXBvcnQgU3RvcmllcyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9wcm9maWxlL1N0b3JpZXNcIjtcclxuaW1wb3J0IENoYXJhY3RlcnMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcHJvZmlsZS9DaGFyYWN0ZXJzXCI7XHJcbmltcG9ydCBGb2xsb3dlcnMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcHJvZmlsZS9Gb2xsb3dlcnNcIjtcclxuaW1wb3J0IExvY2F0aW9ucyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9wcm9maWxlL0xvY2F0aW9uc1wiO1xyXG5pbXBvcnQgU2V0dGluZ3MgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcHJvZmlsZS9TZXR0aW5nc1wiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IGdldFByb2ZpbGUgfSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9ucy91c2VyQWN0aW9uc1wiO1xyXG5cclxuY29uc3QgUHJvZmlsZSA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFt0YWJzXSA9IHVzZVN0YXRlKFtcclxuICAgIFwic3Rvcmllc1wiLFxyXG4gICAgXCJjaGFyYWN0ZXJzXCIsXHJcbiAgICBcImxvY2F0aW9uc1wiLFxyXG4gICAgXCJmYXZvcml0ZXMgc3Rvcmllc1wiLFxyXG4gICAgXCJmYXZvcml0ZXMgY2hhcmFjdGVyc1wiLFxyXG4gIF0pO1xyXG4gIGNvbnN0IFttb2RhbFZpc2libGUsIHNldE1vZGFsVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3NldHRpbmdzLCBvcGVuU2V0dGluZ3NdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtjdXJyZW50VGFiLCBzZXRDdXJyZW50VGFiXSA9IHVzZVN0YXRlKFwic3Rvcmllc1wiKTtcclxuICBjb25zdCBjaGFuZ2VUYWIgPSAodGFiKSA9PiBzZXRDdXJyZW50VGFiKHRhYik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRQcm9maWxlKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zb2xlLmxvZyhwcm9wcyk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZVwiPlxyXG4gICAgICA8QmFubmVyIG9wZW5TZXR0aW5ncz17b3BlblNldHRpbmdzfSBzZXRNb2RhbFZpc2libGU9e3NldE1vZGFsVmlzaWJsZX0gLz5cclxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHJvZmlsZS1jb250ZW50XCI+XHJcbiAgICAgICAgPFRhYnMgY3VycmVudFRhYj17Y3VycmVudFRhYn0gdGFicz17dGFic30gY2hhbmdlVGFiPXtjaGFuZ2VUYWJ9IC8+XHJcbiAgICAgICAge2N1cnJlbnRUYWIgPT09IFwic3Rvcmllc1wiICYmIDxTdG9yaWVzIC8+fVxyXG4gICAgICAgIHtjdXJyZW50VGFiID09PSBcImNoYXJhY3RlcnNcIiAmJiA8Q2hhcmFjdGVycyAvPn1cclxuICAgICAgICB7Y3VycmVudFRhYiA9PT0gXCJsb2NhdGlvbnNcIiAmJiA8TG9jYXRpb25zIC8+fVxyXG4gICAgICAgIHtjdXJyZW50VGFiID09PSBcImZhdm9yaXRlcyBzdG9yaWVzXCIgJiYgPFN0b3JpZXMgLz59XHJcbiAgICAgICAge2N1cnJlbnRUYWIgPT09IFwiZmF2b3JpdGVzIGNoYXJhY3RlcnNcIiAmJiA8Q2hhcmFjdGVycyAvPn1cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICB0aXRsZT1cIjEyOCBGb2xsb3dlcnNcIlxyXG4gICAgICAgIHdpZHRoPXtcIjUwJVwifVxyXG4gICAgICAgIHZpc2libGU9e21vZGFsVmlzaWJsZX1cclxuICAgICAgICBvbk9rPXsoKSA9PiBzZXRNb2RhbFZpc2libGUoZmFsc2UpfVxyXG4gICAgICAgIG9uQ2FuY2VsPXsoKSA9PiBzZXRNb2RhbFZpc2libGUoZmFsc2UpfVxyXG4gICAgICAgIGZvb3Rlcj17W1xyXG4gICAgICAgICAgPEJ1dHRvbiBrZXk9XCJiYWNrXCIgb25DbGljaz17KCkgPT4gc2V0TW9kYWxWaXNpYmxlKGZhbHNlKX0+XHJcbiAgICAgICAgICAgIE9LXHJcbiAgICAgICAgICA8L0J1dHRvbj4sXHJcbiAgICAgICAgXX1cclxuICAgICAgPlxyXG4gICAgICAgIDxSb3c+XHJcbiAgICAgICAgICA8Rm9sbG93ZXJzIC8+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIHRpdGxlPVwiU2V0dGluZ3NcIlxyXG4gICAgICAgIHZpc2libGU9e3NldHRpbmdzfVxyXG4gICAgICAgIG9uT2s9eygpID0+IG9wZW5TZXR0aW5ncyhmYWxzZSl9XHJcbiAgICAgICAgb25DYW5jZWw9eygpID0+IG9wZW5TZXR0aW5ncyhmYWxzZSl9XHJcbiAgICAgICAgZm9vdGVyPXtbXHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIGtleT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb3BlblNldHRpbmdzKGZhbHNlKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgICA8L0J1dHRvbj4sXHJcbiAgICAgICAgXX1cclxuICAgICAgPlxyXG4gICAgICAgIDxTZXR0aW5ncyAvPlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgb3duUHJvcHMpID0+ICh7XHJcbiAgdXNlcjogc3RhdGUuYXV0aCxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcERpc3BhdGNoVG9Qcm9wcywgeyBnZXRQcm9maWxlIH0pKFByb2ZpbGUpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9