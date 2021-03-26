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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _components_profile_Banner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/profile/Banner */ "./components/profile/Banner.js");
/* harmony import */ var _components_profile_Tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/profile/Tabs */ "./components/profile/Tabs.js");
/* harmony import */ var _components_profile_Stories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/profile/Stories */ "./components/profile/Stories.js");
/* harmony import */ var _components_profile_Characters__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/profile/Characters */ "./components/profile/Characters.js");
/* harmony import */ var _components_profile_Followers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/profile/Followers */ "./components/profile/Followers.js");
/* harmony import */ var _components_profile_Locations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/profile/Locations */ "./components/profile/Locations.js");
/* harmony import */ var _components_profile_Settings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/profile/Settings */ "./components/profile/Settings.js");
/* harmony import */ var _redux_actions_userActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../redux/actions/userActions */ "./redux/actions/userActions.js");
/* harmony import */ var _redux_actions_storiesActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../redux/actions/storiesActions */ "./redux/actions/storiesActions.js");
/* harmony import */ var _redux_actions_charactersActions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../redux/actions/charactersActions */ "./redux/actions/charactersActions.js");
/* harmony import */ var _hooks_userHooks__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../hooks/userHooks */ "./hooks/userHooks.js");
/* harmony import */ var _components_hoc_LoadingScreen__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/hoc/LoadingScreen */ "./components/hoc/LoadingScreen.js");
/* harmony import */ var _components_hoc_RedirectComp__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/hoc/RedirectComp */ "./components/hoc/RedirectComp.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\pages\\profile\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


















var Profile = function Profile(_ref) {
  _s();

  var getProfile = _ref.getProfile,
      profile = _ref.profile,
      stories = _ref.stories,
      getUserStories = _ref.getUserStories,
      getUserCharacters = _ref.getUserCharacters,
      getFavoriteAuthors = _ref.getFavoriteAuthors,
      getFavoriteCharacters = _ref.getFavoriteCharacters,
      getFavoriteStories = _ref.getFavoriteStories,
      getFollowers = _ref.getFollowers,
      characters = _ref.characters,
      favAuthors = _ref.favAuthors,
      followers = _ref.followers,
      favCharacters = _ref.favCharacters,
      favStories = _ref.favStories;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(["stories", "characters", "locations", "favorites stories", "favorites characters", "followers", "followings"]),
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

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("favauthors"),
      favTab = _useState5[0],
      setFavTab = _useState5[1];

  var changeTab = function changeTab(tab) {
    return setCurrentTab(tab);
  };

  var auth = Object(_hooks_userHooks__WEBPACK_IMPORTED_MODULE_13__["useAuth"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (auth.user) {
      getProfile();
      getUserStories();
      getUserCharacters(auth.user.uid);
      getFavoriteAuthors();
      getFollowers();
      getFavoriteCharacters();
      getFavoriteStories();
    }
  }, [auth]);

  var changeFavTab = function changeFavTab(tab) {
    return setFavTab(tab);
  };

  return __jsx("div", {
    className: "profile",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 5
    }
  }, __jsx(_components_hoc_LoadingScreen__WEBPACK_IMPORTED_MODULE_14__["default"], {
    loading: !auth.isLoading,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }
  }, __jsx(_components_hoc_RedirectComp__WEBPACK_IMPORTED_MODULE_15__["default"], {
    condition: !auth.user,
    type: "redirect",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }, __jsx(_components_profile_Banner__WEBPACK_IMPORTED_MODULE_3__["default"], {
    profile: profile,
    openSettings: openSettings,
    setModalVisible: setModalVisible,
    favAuthors: favAuthors,
    followers: followers,
    changeFavTab: changeFavTab,
    favTab: favTab,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 11
    }
  }), __jsx("section", {
    className: "profile-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 11
    }
  }, __jsx(_components_profile_Tabs__WEBPACK_IMPORTED_MODULE_4__["default"], {
    currentTab: currentTab,
    tabs: tabs,
    changeTab: changeTab,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }
  }), currentTab === "stories" && __jsx(_components_profile_Stories__WEBPACK_IMPORTED_MODULE_5__["default"], {
    stories: stories,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 42
    }
  }), currentTab === "characters" && __jsx(_components_profile_Characters__WEBPACK_IMPORTED_MODULE_6__["default"], {
    characters: characters,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 15
    }
  }), currentTab === "locations" && __jsx(_components_profile_Locations__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 44
    }
  }), currentTab === "favorites stories" && __jsx(_components_profile_Stories__WEBPACK_IMPORTED_MODULE_5__["default"], {
    stories: favStories,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 15
    }
  }), currentTab === "favorites characters" && __jsx(_components_profile_Characters__WEBPACK_IMPORTED_MODULE_6__["default"], {
    type: "favorites",
    characters: favCharacters,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 15
    }
  }), currentTab === "followers" && __jsx(_components_profile_Followers__WEBPACK_IMPORTED_MODULE_7__["default"], {
    lg: 4,
    md: 6,
    sm: 8,
    xs: 12,
    items: followers.authors,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 15
    }
  }), currentTab === "followings" && __jsx(_components_profile_Followers__WEBPACK_IMPORTED_MODULE_7__["default"], {
    lg: 4,
    md: 6,
    sm: 8,
    xs: 12,
    items: favAuthors.authors,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 15
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
    title: "Settings",
    visible: settings,
    onOk: function onOk() {
      return openSettings(false);
    },
    onCancel: function onCancel() {
      return openSettings(false);
    },
    footer: [__jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      key: "submit",
      type: "primary",
      onClick: function onClick() {
        return openSettings(false);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 15
      }
    }, "Submit")],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 11
    }
  }, __jsx(_components_profile_Settings__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 13
    }
  })))));
};

_s(Profile, "4yoEhaSnaTtRx3FwGZbs4VDgGWk=", false, function () {
  return [_hooks_userHooks__WEBPACK_IMPORTED_MODULE_13__["useAuth"]];
});

_c = Profile;

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    profile: state.auth.profile,
    stories: state.stories.userStories,
    characters: state.characters.userCharacters,
    favAuthors: state.auth.favAuthors,
    followers: state.auth.followers,
    favCharacters: state.characters.favCharacters,
    favStories: state.stories.favStories
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  getProfile: _redux_actions_userActions__WEBPACK_IMPORTED_MODULE_10__["getProfile"],
  getUserStories: _redux_actions_storiesActions__WEBPACK_IMPORTED_MODULE_11__["getUserStories"],
  getUserCharacters: _redux_actions_charactersActions__WEBPACK_IMPORTED_MODULE_12__["getUserCharacters"],
  getFavoriteAuthors: _redux_actions_userActions__WEBPACK_IMPORTED_MODULE_10__["getFavoriteAuthors"],
  getFollowers: _redux_actions_userActions__WEBPACK_IMPORTED_MODULE_10__["getFollowers"],
  getFavoriteCharacters: _redux_actions_charactersActions__WEBPACK_IMPORTED_MODULE_12__["getFavoriteCharacters"],
  getFavoriteStories: _redux_actions_storiesActions__WEBPACK_IMPORTED_MODULE_11__["getFavoriteStories"]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS9pbmRleC5qcyJdLCJuYW1lcyI6WyJQcm9maWxlIiwiZ2V0UHJvZmlsZSIsInByb2ZpbGUiLCJzdG9yaWVzIiwiZ2V0VXNlclN0b3JpZXMiLCJnZXRVc2VyQ2hhcmFjdGVycyIsImdldEZhdm9yaXRlQXV0aG9ycyIsImdldEZhdm9yaXRlQ2hhcmFjdGVycyIsImdldEZhdm9yaXRlU3RvcmllcyIsImdldEZvbGxvd2VycyIsImNoYXJhY3RlcnMiLCJmYXZBdXRob3JzIiwiZm9sbG93ZXJzIiwiZmF2Q2hhcmFjdGVycyIsImZhdlN0b3JpZXMiLCJ1c2VTdGF0ZSIsInRhYnMiLCJtb2RhbFZpc2libGUiLCJzZXRNb2RhbFZpc2libGUiLCJzZXR0aW5ncyIsIm9wZW5TZXR0aW5ncyIsImN1cnJlbnRUYWIiLCJzZXRDdXJyZW50VGFiIiwiZmF2VGFiIiwic2V0RmF2VGFiIiwiY2hhbmdlVGFiIiwidGFiIiwiYXV0aCIsInVzZUF1dGgiLCJ1c2VFZmZlY3QiLCJ1c2VyIiwidWlkIiwiY2hhbmdlRmF2VGFiIiwiaXNMb2FkaW5nIiwiYXV0aG9ycyIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwib3duUHJvcHMiLCJ1c2VyU3RvcmllcyIsInVzZXJDaGFyYWN0ZXJzIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFJQTtBQUlBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxPQWVWO0FBQUE7O0FBQUEsTUFkSkMsVUFjSSxRQWRKQSxVQWNJO0FBQUEsTUFiSkMsT0FhSSxRQWJKQSxPQWFJO0FBQUEsTUFaSkMsT0FZSSxRQVpKQSxPQVlJO0FBQUEsTUFYSkMsY0FXSSxRQVhKQSxjQVdJO0FBQUEsTUFWSkMs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QUF4Qjs7QUFVZTBCLDBIQUFPLENBQUNMLGVBQUQsRUFBa0I7QUFDdENsQyxZQUFVLEVBQVZBLHNFQURzQztBQUV0Q0csZ0JBQWMsRUFBZEEsNkVBRnNDO0FBR3RDQyxtQkFBaUIsRUFBakJBLG1GQUhzQztBQUl0Q0Msb0JBQWtCLEVBQWxCQSw4RUFKc0M7QUFLdENHLGNBQVksRUFBWkEsd0VBTHNDO0FBTXRDRix1QkFBcUIsRUFBckJBLHVGQU5zQztBQU90Q0Msb0JBQWtCLEVBQWxCQSxpRkFBa0JBO0FBUG9CLENBQWxCLENBQVAsQ0FRWlIsT0FSWSxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUuNDU5ZmMyMmJiNTUyODljNzRkZDAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgUm93LCBNb2RhbCwgQnV0dG9uIH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmltcG9ydCBCYW5uZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcHJvZmlsZS9CYW5uZXJcIjtcclxuaW1wb3J0IFRhYnMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcHJvZmlsZS9UYWJzXCI7XHJcbmltcG9ydCBTdG9yaWVzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3Byb2ZpbGUvU3Rvcmllc1wiO1xyXG5pbXBvcnQgQ2hhcmFjdGVycyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9wcm9maWxlL0NoYXJhY3RlcnNcIjtcclxuaW1wb3J0IEZvbGxvd2VycyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9wcm9maWxlL0ZvbGxvd2Vyc1wiO1xyXG5pbXBvcnQgTG9jYXRpb25zIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3Byb2ZpbGUvTG9jYXRpb25zXCI7XHJcbmltcG9ydCBTZXR0aW5ncyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9wcm9maWxlL1NldHRpbmdzXCI7XHJcblxyXG5pbXBvcnQgeyBnZXRQcm9maWxlIH0gZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvbnMvdXNlckFjdGlvbnNcIjtcclxuaW1wb3J0IHtcclxuICBnZXRVc2VyU3RvcmllcyxcclxuICBnZXRGYXZvcml0ZVN0b3JpZXMsXHJcbn0gZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvbnMvc3Rvcmllc0FjdGlvbnNcIjtcclxuaW1wb3J0IHtcclxuICBnZXRVc2VyQ2hhcmFjdGVycyxcclxuICBnZXRGYXZvcml0ZUNoYXJhY3RlcnMsXHJcbn0gZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvbnMvY2hhcmFjdGVyc0FjdGlvbnNcIjtcclxuaW1wb3J0IHtcclxuICBnZXRGYXZvcml0ZUF1dGhvcnMsXHJcbiAgZ2V0Rm9sbG93ZXJzLFxyXG59IGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25zL3VzZXJBY3Rpb25zXCI7XHJcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tIFwiLi4vLi4vaG9va3MvdXNlckhvb2tzXCI7XHJcbmltcG9ydCBMb2FkaW5nU2NyZWVuIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2hvYy9Mb2FkaW5nU2NyZWVuXCI7XHJcbmltcG9ydCBSZWRpcmVjdENvbXAgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvaG9jL1JlZGlyZWN0Q29tcFwiO1xyXG5cclxuY29uc3QgUHJvZmlsZSA9ICh7XHJcbiAgZ2V0UHJvZmlsZSxcclxuICBwcm9maWxlLFxyXG4gIHN0b3JpZXMsXHJcbiAgZ2V0VXNlclN0b3JpZXMsXHJcbiAgZ2V0VXNlckNoYXJhY3RlcnMsXHJcbiAgZ2V0RmF2b3JpdGVBdXRob3JzLFxyXG4gIGdldEZhdm9yaXRlQ2hhcmFjdGVycyxcclxuICBnZXRGYXZvcml0ZVN0b3JpZXMsXHJcbiAgZ2V0Rm9sbG93ZXJzLFxyXG4gIGNoYXJhY3RlcnMsXHJcbiAgZmF2QXV0aG9ycyxcclxuICBmb2xsb3dlcnMsXHJcbiAgZmF2Q2hhcmFjdGVycyxcclxuICBmYXZTdG9yaWVzLFxyXG59KSA9PiB7XHJcbiAgY29uc3QgW3RhYnNdID0gdXNlU3RhdGUoW1xyXG4gICAgXCJzdG9yaWVzXCIsXHJcbiAgICBcImNoYXJhY3RlcnNcIixcclxuICAgIFwibG9jYXRpb25zXCIsXHJcbiAgICBcImZhdm9yaXRlcyBzdG9yaWVzXCIsXHJcbiAgICBcImZhdm9yaXRlcyBjaGFyYWN0ZXJzXCIsXHJcbiAgICBcImZvbGxvd2Vyc1wiLFxyXG4gICAgXCJmb2xsb3dpbmdzXCIsXHJcbiAgXSk7XHJcbiAgY29uc3QgW21vZGFsVmlzaWJsZSwgc2V0TW9kYWxWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2V0dGluZ3MsIG9wZW5TZXR0aW5nc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2N1cnJlbnRUYWIsIHNldEN1cnJlbnRUYWJdID0gdXNlU3RhdGUoXCJzdG9yaWVzXCIpO1xyXG4gIGNvbnN0IFtmYXZUYWIsIHNldEZhdlRhYl0gPSB1c2VTdGF0ZShcImZhdmF1dGhvcnNcIik7XHJcbiAgY29uc3QgY2hhbmdlVGFiID0gKHRhYikgPT4gc2V0Q3VycmVudFRhYih0YWIpO1xyXG5cclxuICBjb25zdCBhdXRoID0gdXNlQXV0aCgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGF1dGgudXNlcikge1xyXG4gICAgICBnZXRQcm9maWxlKCk7XHJcbiAgICAgIGdldFVzZXJTdG9yaWVzKCk7XHJcbiAgICAgIGdldFVzZXJDaGFyYWN0ZXJzKGF1dGgudXNlci51aWQpO1xyXG4gICAgICBnZXRGYXZvcml0ZUF1dGhvcnMoKTtcclxuICAgICAgZ2V0Rm9sbG93ZXJzKCk7XHJcbiAgICAgIGdldEZhdm9yaXRlQ2hhcmFjdGVycygpO1xyXG4gICAgICBnZXRGYXZvcml0ZVN0b3JpZXMoKTtcclxuICAgIH1cclxuICB9LCBbYXV0aF0pO1xyXG5cclxuICBjb25zdCBjaGFuZ2VGYXZUYWIgPSAodGFiKSA9PiBzZXRGYXZUYWIodGFiKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZVwiPlxyXG4gICAgICA8TG9hZGluZ1NjcmVlbiBsb2FkaW5nPXshYXV0aC5pc0xvYWRpbmd9PlxyXG4gICAgICAgIDxSZWRpcmVjdENvbXAgY29uZGl0aW9uPXshYXV0aC51c2VyfSB0eXBlPVwicmVkaXJlY3RcIj5cclxuICAgICAgICAgIDxCYW5uZXJcclxuICAgICAgICAgICAgcHJvZmlsZT17cHJvZmlsZX1cclxuICAgICAgICAgICAgb3BlblNldHRpbmdzPXtvcGVuU2V0dGluZ3N9XHJcbiAgICAgICAgICAgIHNldE1vZGFsVmlzaWJsZT17c2V0TW9kYWxWaXNpYmxlfVxyXG4gICAgICAgICAgICBmYXZBdXRob3JzPXtmYXZBdXRob3JzfVxyXG4gICAgICAgICAgICBmb2xsb3dlcnM9e2ZvbGxvd2Vyc31cclxuICAgICAgICAgICAgY2hhbmdlRmF2VGFiPXtjaGFuZ2VGYXZUYWJ9XHJcbiAgICAgICAgICAgIGZhdlRhYj17ZmF2VGFifVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInByb2ZpbGUtY29udGVudFwiPlxyXG4gICAgICAgICAgICA8VGFicyBjdXJyZW50VGFiPXtjdXJyZW50VGFifSB0YWJzPXt0YWJzfSBjaGFuZ2VUYWI9e2NoYW5nZVRhYn0gLz5cclxuICAgICAgICAgICAge2N1cnJlbnRUYWIgPT09IFwic3Rvcmllc1wiICYmIDxTdG9yaWVzIHN0b3JpZXM9e3N0b3JpZXN9IC8+fVxyXG4gICAgICAgICAgICB7Y3VycmVudFRhYiA9PT0gXCJjaGFyYWN0ZXJzXCIgJiYgKFxyXG4gICAgICAgICAgICAgIDxDaGFyYWN0ZXJzIGNoYXJhY3RlcnM9e2NoYXJhY3RlcnN9IC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHtjdXJyZW50VGFiID09PSBcImxvY2F0aW9uc1wiICYmIDxMb2NhdGlvbnMgLz59XHJcbiAgICAgICAgICAgIHtjdXJyZW50VGFiID09PSBcImZhdm9yaXRlcyBzdG9yaWVzXCIgJiYgKFxyXG4gICAgICAgICAgICAgIDxTdG9yaWVzIHN0b3JpZXM9e2ZhdlN0b3JpZXN9IC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHtjdXJyZW50VGFiID09PSBcImZhdm9yaXRlcyBjaGFyYWN0ZXJzXCIgJiYgKFxyXG4gICAgICAgICAgICAgIDxDaGFyYWN0ZXJzIHR5cGU9XCJmYXZvcml0ZXNcIiBjaGFyYWN0ZXJzPXtmYXZDaGFyYWN0ZXJzfSAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7Y3VycmVudFRhYiA9PT0gXCJmb2xsb3dlcnNcIiAmJiAoXHJcbiAgICAgICAgICAgICAgPEZvbGxvd2Vyc1xyXG4gICAgICAgICAgICAgICAgbGc9ezR9XHJcbiAgICAgICAgICAgICAgICBtZD17Nn1cclxuICAgICAgICAgICAgICAgIHNtPXs4fVxyXG4gICAgICAgICAgICAgICAgeHM9ezEyfVxyXG4gICAgICAgICAgICAgICAgaXRlbXM9e2ZvbGxvd2Vycy5hdXRob3JzfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHtjdXJyZW50VGFiID09PSBcImZvbGxvd2luZ3NcIiAmJiAoXHJcbiAgICAgICAgICAgICAgPEZvbGxvd2Vyc1xyXG4gICAgICAgICAgICAgICAgbGc9ezR9XHJcbiAgICAgICAgICAgICAgICBtZD17Nn1cclxuICAgICAgICAgICAgICAgIHNtPXs4fVxyXG4gICAgICAgICAgICAgICAgeHM9ezEyfVxyXG4gICAgICAgICAgICAgICAgaXRlbXM9e2ZhdkF1dGhvcnMuYXV0aG9yc31cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgIHRpdGxlPVwiU2V0dGluZ3NcIlxyXG4gICAgICAgICAgICB2aXNpYmxlPXtzZXR0aW5nc31cclxuICAgICAgICAgICAgb25Paz17KCkgPT4gb3BlblNldHRpbmdzKGZhbHNlKX1cclxuICAgICAgICAgICAgb25DYW5jZWw9eygpID0+IG9wZW5TZXR0aW5ncyhmYWxzZSl9XHJcbiAgICAgICAgICAgIGZvb3Rlcj17W1xyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIGtleT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvcGVuU2V0dGluZ3MoZmFsc2UpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFN1Ym1pdFxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPixcclxuICAgICAgICAgICAgXX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPFNldHRpbmdzIC8+XHJcbiAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgIDwvUmVkaXJlY3RDb21wPlxyXG4gICAgICA8L0xvYWRpbmdTY3JlZW4+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCBvd25Qcm9wcykgPT4gKHtcclxuICBwcm9maWxlOiBzdGF0ZS5hdXRoLnByb2ZpbGUsXHJcbiAgc3Rvcmllczogc3RhdGUuc3Rvcmllcy51c2VyU3RvcmllcyxcclxuICBjaGFyYWN0ZXJzOiBzdGF0ZS5jaGFyYWN0ZXJzLnVzZXJDaGFyYWN0ZXJzLFxyXG4gIGZhdkF1dGhvcnM6IHN0YXRlLmF1dGguZmF2QXV0aG9ycyxcclxuICBmb2xsb3dlcnM6IHN0YXRlLmF1dGguZm9sbG93ZXJzLFxyXG4gIGZhdkNoYXJhY3RlcnM6IHN0YXRlLmNoYXJhY3RlcnMuZmF2Q2hhcmFjdGVycyxcclxuICBmYXZTdG9yaWVzOiBzdGF0ZS5zdG9yaWVzLmZhdlN0b3JpZXMsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHtcclxuICBnZXRQcm9maWxlLFxyXG4gIGdldFVzZXJTdG9yaWVzLFxyXG4gIGdldFVzZXJDaGFyYWN0ZXJzLFxyXG4gIGdldEZhdm9yaXRlQXV0aG9ycyxcclxuICBnZXRGb2xsb3dlcnMsXHJcbiAgZ2V0RmF2b3JpdGVDaGFyYWN0ZXJzLFxyXG4gIGdldEZhdm9yaXRlU3RvcmllcyxcclxufSkoUHJvZmlsZSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=