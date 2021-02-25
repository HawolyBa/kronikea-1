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

  var getProfile = _ref.getProfile;

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
  console.log(state);
  return {
    profile: state.auth
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS9pbmRleC5qcyJdLCJuYW1lcyI6WyJQcm9maWxlIiwiZ2V0UHJvZmlsZSIsInVzZVN0YXRlIiwidGFicyIsIm1vZGFsVmlzaWJsZSIsInNldE1vZGFsVmlzaWJsZSIsInNldHRpbmdzIiwib3BlblNldHRpbmdzIiwiY3VycmVudFRhYiIsInNldEN1cnJlbnRUYWIiLCJjaGFuZ2VUYWIiLCJ0YWIiLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIiwicHJvcHMiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIm93blByb3BzIiwicHJvZmlsZSIsImF1dGgiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxPQUFvQjtBQUFBOztBQUFBLE1BQWpCQyxVQUFpQixRQUFqQkEsVUFBaUI7O0FBQUEsa0JBQ25CQyxzREFBUSxDQUFDLENBQ3RCLFNBRHNCLEVBRXRCLFlBRnNCLEVBR3RCLFdBSHNCLEVBSXRCLG1CQUpzQixFQUt0QixzQkFMc0IsQ0FBRCxDQURXO0FBQUEsTUFDM0JDLElBRDJCOztBQUFBLG1CQVFNRCxzREFBUSxDQUFDLEtBQUQsQ0FSZDtBQUFBLE1BUTNCRSxZQVIyQjtBQUFBLE1BUWJDLGVBUmE7O0FBQUEsbUJBU0RILHNEQUFRLENBQUMsS0FBRCxDQVRQO0FBQUEsTUFTM0JJLFFBVDJCO0FBQUEsTUFTakJDLFlBVGlCOztBQUFBLG1CQVVFTCxzREFBUSxDQUFDLFNBQUQsQ0FWVjtBQUFBLE1BVTNCTSxVQVYyQjtBQUFBLE1BVWZDLGFBVmU7O0FBV2xDLE1BQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLEdBQUQ7QUFBQSxXQUFTRixhQUFhLENBQUNFLEdBQUQsQ0FBdEI7QUFBQSxH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QThDRCxDQWhFRDs7R0FBTVAsTzs7S0FBQUEsTzs7QUFrRU4sSUFBTWdCLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRCxFQUFRQyxRQUFSLEVBQXFCO0FBQzNDTCxTQUFPLENBQUNDLEdBQVIsQ0FBWUcsS0FBWjtBQUNBLFNBQU87QUFBRUUsV0FBTyxFQUFFRixLQUFLLENBQUNHO0FBQWpCLEdBQVA7QUFDRCxDQUhEOztBQUtlQywwSEFBTyxDQUFDTCxlQUFELEVBQWtCO0FBQUVmLFlBQVUsRUFBVkEsc0VBQVVBO0FBQVosQ0FBbEIsQ0FBUCxDQUF5Q0QsT0FBekMsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlLmFjMDllMGQ1NDFiMjYwYjRlYmVhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHsgUm93LCBNb2RhbCwgQnV0dG9uIH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmltcG9ydCBCYW5uZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcHJvZmlsZS9CYW5uZXJcIjtcclxuaW1wb3J0IFRhYnMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcHJvZmlsZS9UYWJzXCI7XHJcbmltcG9ydCBTdG9yaWVzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3Byb2ZpbGUvU3Rvcmllc1wiO1xyXG5pbXBvcnQgQ2hhcmFjdGVycyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9wcm9maWxlL0NoYXJhY3RlcnNcIjtcclxuaW1wb3J0IEZvbGxvd2VycyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9wcm9maWxlL0ZvbGxvd2Vyc1wiO1xyXG5pbXBvcnQgTG9jYXRpb25zIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3Byb2ZpbGUvTG9jYXRpb25zXCI7XHJcbmltcG9ydCBTZXR0aW5ncyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9wcm9maWxlL1NldHRpbmdzXCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgZ2V0UHJvZmlsZSB9IGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25zL3VzZXJBY3Rpb25zXCI7XHJcblxyXG5jb25zdCBQcm9maWxlID0gKHsgZ2V0UHJvZmlsZSB9KSA9PiB7XHJcbiAgY29uc3QgW3RhYnNdID0gdXNlU3RhdGUoW1xyXG4gICAgXCJzdG9yaWVzXCIsXHJcbiAgICBcImNoYXJhY3RlcnNcIixcclxuICAgIFwibG9jYXRpb25zXCIsXHJcbiAgICBcImZhdm9yaXRlcyBzdG9yaWVzXCIsXHJcbiAgICBcImZhdm9yaXRlcyBjaGFyYWN0ZXJzXCIsXHJcbiAgXSk7XHJcbiAgY29uc3QgW21vZGFsVmlzaWJsZSwgc2V0TW9kYWxWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2V0dGluZ3MsIG9wZW5TZXR0aW5nc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2N1cnJlbnRUYWIsIHNldEN1cnJlbnRUYWJdID0gdXNlU3RhdGUoXCJzdG9yaWVzXCIpO1xyXG4gIGNvbnN0IGNoYW5nZVRhYiA9ICh0YWIpID0+IHNldEN1cnJlbnRUYWIodGFiKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldFByb2ZpbGUoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnNvbGUubG9nKHByb3BzKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlXCI+XHJcbiAgICAgIDxCYW5uZXIgb3BlblNldHRpbmdzPXtvcGVuU2V0dGluZ3N9IHNldE1vZGFsVmlzaWJsZT17c2V0TW9kYWxWaXNpYmxlfSAvPlxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwcm9maWxlLWNvbnRlbnRcIj5cclxuICAgICAgICA8VGFicyBjdXJyZW50VGFiPXtjdXJyZW50VGFifSB0YWJzPXt0YWJzfSBjaGFuZ2VUYWI9e2NoYW5nZVRhYn0gLz5cclxuICAgICAgICB7Y3VycmVudFRhYiA9PT0gXCJzdG9yaWVzXCIgJiYgPFN0b3JpZXMgLz59XHJcbiAgICAgICAge2N1cnJlbnRUYWIgPT09IFwiY2hhcmFjdGVyc1wiICYmIDxDaGFyYWN0ZXJzIC8+fVxyXG4gICAgICAgIHtjdXJyZW50VGFiID09PSBcImxvY2F0aW9uc1wiICYmIDxMb2NhdGlvbnMgLz59XHJcbiAgICAgICAge2N1cnJlbnRUYWIgPT09IFwiZmF2b3JpdGVzIHN0b3JpZXNcIiAmJiA8U3RvcmllcyAvPn1cclxuICAgICAgICB7Y3VycmVudFRhYiA9PT0gXCJmYXZvcml0ZXMgY2hhcmFjdGVyc1wiICYmIDxDaGFyYWN0ZXJzIC8+fVxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIHRpdGxlPVwiMTI4IEZvbGxvd2Vyc1wiXHJcbiAgICAgICAgd2lkdGg9e1wiNTAlXCJ9XHJcbiAgICAgICAgdmlzaWJsZT17bW9kYWxWaXNpYmxlfVxyXG4gICAgICAgIG9uT2s9eygpID0+IHNldE1vZGFsVmlzaWJsZShmYWxzZSl9XHJcbiAgICAgICAgb25DYW5jZWw9eygpID0+IHNldE1vZGFsVmlzaWJsZShmYWxzZSl9XHJcbiAgICAgICAgZm9vdGVyPXtbXHJcbiAgICAgICAgICA8QnV0dG9uIGtleT1cImJhY2tcIiBvbkNsaWNrPXsoKSA9PiBzZXRNb2RhbFZpc2libGUoZmFsc2UpfT5cclxuICAgICAgICAgICAgT0tcclxuICAgICAgICAgIDwvQnV0dG9uPixcclxuICAgICAgICBdfVxyXG4gICAgICA+XHJcbiAgICAgICAgPFJvdz5cclxuICAgICAgICAgIDxGb2xsb3dlcnMgLz5cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgdGl0bGU9XCJTZXR0aW5nc1wiXHJcbiAgICAgICAgdmlzaWJsZT17c2V0dGluZ3N9XHJcbiAgICAgICAgb25Paz17KCkgPT4gb3BlblNldHRpbmdzKGZhbHNlKX1cclxuICAgICAgICBvbkNhbmNlbD17KCkgPT4gb3BlblNldHRpbmdzKGZhbHNlKX1cclxuICAgICAgICBmb290ZXI9e1tcclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAga2V5PVwic3VibWl0XCJcclxuICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvcGVuU2V0dGluZ3MoZmFsc2UpfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBTdWJtaXRcclxuICAgICAgICAgIDwvQnV0dG9uPixcclxuICAgICAgICBdfVxyXG4gICAgICA+XHJcbiAgICAgICAgPFNldHRpbmdzIC8+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCBvd25Qcm9wcykgPT4ge1xyXG4gIGNvbnNvbGUubG9nKHN0YXRlKTtcclxuICByZXR1cm4geyBwcm9maWxlOiBzdGF0ZS5hdXRoIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgeyBnZXRQcm9maWxlIH0pKFByb2ZpbGUpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9