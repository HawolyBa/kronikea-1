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












var Profile = function Profile(_ref) {
  _s();

  var getProfile = _ref.getProfile,
      profile = _ref.profile;

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
    getProfile();
  }, []);
  console.log(profile);
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
    profile: state.auth.profile
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS9pbmRleC5qcyJdLCJuYW1lcyI6WyJQcm9maWxlIiwiZ2V0UHJvZmlsZSIsInByb2ZpbGUiLCJ1c2VTdGF0ZSIsInRhYnMiLCJtb2RhbFZpc2libGUiLCJzZXRNb2RhbFZpc2libGUiLCJzZXR0aW5ncyIsIm9wZW5TZXR0aW5ncyIsImN1cnJlbnRUYWIiLCJzZXRDdXJyZW50VGFiIiwiY2hhbmdlVGFiIiwidGFiIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwib3duUHJvcHMiLCJhdXRoIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsT0FBNkI7QUFBQTs7QUFBQSxNQUExQkMsVUFBMEIsUUFBMUJBLFVBQTBCO0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjOztBQUFBLGtCQUM1QkMsc0RBQVEsQ0FBQyxDQUN0QixTQURzQixFQUV0QixZQUZzQixFQUd0QixXQUhzQixFQUl0QixtQkFKc0IsRUFLdEIsc0JBTHNCLENBQUQsQ0FEb0I7QUFBQSxNQUNwQ0MsSUFEb0M7O0FBQUEsbUJBUUhELHNEQUFRLENBQUMsS0FBRCxDQVJMO0FBQUEsTUFRcENFLFlBUm9DO0FBQUEsTUFRdEJDLGVBUnNCOztBQUFBLG1CQVNWSCxzREFBUSxDQUFDLEtBQUQsQ0FURTtBQUFBLE1BU3BDSSxRQVRvQztBQUFBLE1BUzFCQyxZQVQwQjs7QUFBQSxtQkFVUEwsc0RBQVEsQ0FBQyxTQUFELENBVkQ7QUFBQSxNQVVwQ00sVUFWb0M7QUFBQSxNQVV4QkMsYUFWd0I7O0FBVzNDLE1BQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLEdBQUQ7QUFBQSxXQUFTRixhQUFh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QTtBQUFBLElBZkYsQ0ExQkYsQ0FERjtBQThDRCxDQWhFRDs7R0FBTVIsTzs7S0FBQUEsTzs7QUFrRU4sSUFBTWdCLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRCxFQUFRQyxRQUFSLEVBQXFCO0FBQzNDLFNBQU87QUFBRWhCLFdBQU8sRUFBRWUsS0FBSyxDQUFDRSxJQUFOLENBQVdqQjtBQUF0QixHQUFQO0FBQ0QsQ0FGRDs7QUFJZWtCLDBIQUFPLENBQUNKLGVBQUQsRUFBa0I7QUFBRWYsWUFBVSxFQUFWQSxzRUFBVUE7QUFBWixDQUFsQixDQUFQLENBQXlDRCxPQUF6QyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUuZjkwZWM0MDI2YWVhZDgzNGMxMTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgeyBSb3csIE1vZGFsLCBCdXR0b24gfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuaW1wb3J0IEJhbm5lciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9wcm9maWxlL0Jhbm5lclwiO1xyXG5pbXBvcnQgVGFicyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9wcm9maWxlL1RhYnNcIjtcclxuaW1wb3J0IFN0b3JpZXMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcHJvZmlsZS9TdG9yaWVzXCI7XHJcbmltcG9ydCBDaGFyYWN0ZXJzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3Byb2ZpbGUvQ2hhcmFjdGVyc1wiO1xyXG5pbXBvcnQgRm9sbG93ZXJzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3Byb2ZpbGUvRm9sbG93ZXJzXCI7XHJcbmltcG9ydCBMb2NhdGlvbnMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcHJvZmlsZS9Mb2NhdGlvbnNcIjtcclxuaW1wb3J0IFNldHRpbmdzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3Byb2ZpbGUvU2V0dGluZ3NcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBnZXRQcm9maWxlIH0gZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvbnMvdXNlckFjdGlvbnNcIjtcclxuXHJcbmNvbnN0IFByb2ZpbGUgPSAoeyBnZXRQcm9maWxlLCBwcm9maWxlIH0pID0+IHtcclxuICBjb25zdCBbdGFic10gPSB1c2VTdGF0ZShbXHJcbiAgICBcInN0b3JpZXNcIixcclxuICAgIFwiY2hhcmFjdGVyc1wiLFxyXG4gICAgXCJsb2NhdGlvbnNcIixcclxuICAgIFwiZmF2b3JpdGVzIHN0b3JpZXNcIixcclxuICAgIFwiZmF2b3JpdGVzIGNoYXJhY3RlcnNcIixcclxuICBdKTtcclxuICBjb25zdCBbbW9kYWxWaXNpYmxlLCBzZXRNb2RhbFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzZXR0aW5ncywgb3BlblNldHRpbmdzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbY3VycmVudFRhYiwgc2V0Q3VycmVudFRhYl0gPSB1c2VTdGF0ZShcInN0b3JpZXNcIik7XHJcbiAgY29uc3QgY2hhbmdlVGFiID0gKHRhYikgPT4gc2V0Q3VycmVudFRhYih0YWIpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0UHJvZmlsZSgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc29sZS5sb2cocHJvZmlsZSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZVwiPlxyXG4gICAgICA8QmFubmVyIG9wZW5TZXR0aW5ncz17b3BlblNldHRpbmdzfSBzZXRNb2RhbFZpc2libGU9e3NldE1vZGFsVmlzaWJsZX0gLz5cclxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHJvZmlsZS1jb250ZW50XCI+XHJcbiAgICAgICAgPFRhYnMgY3VycmVudFRhYj17Y3VycmVudFRhYn0gdGFicz17dGFic30gY2hhbmdlVGFiPXtjaGFuZ2VUYWJ9IC8+XHJcbiAgICAgICAge2N1cnJlbnRUYWIgPT09IFwic3Rvcmllc1wiICYmIDxTdG9yaWVzIC8+fVxyXG4gICAgICAgIHtjdXJyZW50VGFiID09PSBcImNoYXJhY3RlcnNcIiAmJiA8Q2hhcmFjdGVycyAvPn1cclxuICAgICAgICB7Y3VycmVudFRhYiA9PT0gXCJsb2NhdGlvbnNcIiAmJiA8TG9jYXRpb25zIC8+fVxyXG4gICAgICAgIHtjdXJyZW50VGFiID09PSBcImZhdm9yaXRlcyBzdG9yaWVzXCIgJiYgPFN0b3JpZXMgLz59XHJcbiAgICAgICAge2N1cnJlbnRUYWIgPT09IFwiZmF2b3JpdGVzIGNoYXJhY3RlcnNcIiAmJiA8Q2hhcmFjdGVycyAvPn1cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICB0aXRsZT1cIjEyOCBGb2xsb3dlcnNcIlxyXG4gICAgICAgIHdpZHRoPXtcIjUwJVwifVxyXG4gICAgICAgIHZpc2libGU9e21vZGFsVmlzaWJsZX1cclxuICAgICAgICBvbk9rPXsoKSA9PiBzZXRNb2RhbFZpc2libGUoZmFsc2UpfVxyXG4gICAgICAgIG9uQ2FuY2VsPXsoKSA9PiBzZXRNb2RhbFZpc2libGUoZmFsc2UpfVxyXG4gICAgICAgIGZvb3Rlcj17W1xyXG4gICAgICAgICAgPEJ1dHRvbiBrZXk9XCJiYWNrXCIgb25DbGljaz17KCkgPT4gc2V0TW9kYWxWaXNpYmxlKGZhbHNlKX0+XHJcbiAgICAgICAgICAgIE9LXHJcbiAgICAgICAgICA8L0J1dHRvbj4sXHJcbiAgICAgICAgXX1cclxuICAgICAgPlxyXG4gICAgICAgIDxSb3c+XHJcbiAgICAgICAgICA8Rm9sbG93ZXJzIC8+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIHRpdGxlPVwiU2V0dGluZ3NcIlxyXG4gICAgICAgIHZpc2libGU9e3NldHRpbmdzfVxyXG4gICAgICAgIG9uT2s9eygpID0+IG9wZW5TZXR0aW5ncyhmYWxzZSl9XHJcbiAgICAgICAgb25DYW5jZWw9eygpID0+IG9wZW5TZXR0aW5ncyhmYWxzZSl9XHJcbiAgICAgICAgZm9vdGVyPXtbXHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIGtleT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb3BlblNldHRpbmdzKGZhbHNlKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgICA8L0J1dHRvbj4sXHJcbiAgICAgICAgXX1cclxuICAgICAgPlxyXG4gICAgICAgIDxTZXR0aW5ncyAvPlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgb3duUHJvcHMpID0+IHtcclxuICByZXR1cm4geyBwcm9maWxlOiBzdGF0ZS5hdXRoLnByb2ZpbGUgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7IGdldFByb2ZpbGUgfSkoUHJvZmlsZSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=