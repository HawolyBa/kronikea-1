webpackHotUpdate_N_E("pages/profile",{

/***/ "./pages/profile/index.js":
/*!********************************!*\
  !*** ./pages/profile/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _components_profile_Banner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/profile/Banner */ "./components/profile/Banner.js");
/* harmony import */ var _components_profile_Tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/profile/Tabs */ "./components/profile/Tabs.js");
/* harmony import */ var _components_profile_Stories__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/profile/Stories */ "./components/profile/Stories.js");
/* harmony import */ var _components_profile_Characters__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/profile/Characters */ "./components/profile/Characters.js");
/* harmony import */ var _components_profile_Followers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/profile/Followers */ "./components/profile/Followers.js");
/* harmony import */ var _components_profile_Locations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/profile/Locations */ "./components/profile/Locations.js");
/* harmony import */ var _components_profile_Settings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/profile/Settings */ "./components/profile/Settings.js");
/* harmony import */ var _redux_actions_userActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../redux/actions/userActions */ "./redux/actions/userActions.js");
/* harmony import */ var _redux_actions_storiesActions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../redux/actions/storiesActions */ "./redux/actions/storiesActions.js");
/* harmony import */ var _redux_actions_charactersActions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../redux/actions/charactersActions */ "./redux/actions/charactersActions.js");
/* harmony import */ var _hooks_userHooks__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../hooks/userHooks */ "./hooks/userHooks.js");
/* harmony import */ var _components_hoc_LoadingScreen__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/hoc/LoadingScreen */ "./components/hoc/LoadingScreen.js");
/* harmony import */ var _components_hoc_RedirectComp__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/hoc/RedirectComp */ "./components/hoc/RedirectComp.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\pages\\profile\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


















var Profile = function Profile(_ref) {
  _s();

  var _jsx;

  var getProfile = _ref.getProfile,
      profile = _ref.profile,
      stories = _ref.stories,
      locations = _ref.locations,
      getUserStories = _ref.getUserStories,
      getUserCharacters = _ref.getUserCharacters,
      getFavoriteAuthors = _ref.getFavoriteAuthors,
      getFavoriteCharacters = _ref.getFavoriteCharacters,
      getFavoriteStories = _ref.getFavoriteStories,
      getUserLocations = _ref.getUserLocations,
      getFollowers = _ref.getFollowers,
      characters = _ref.characters,
      favAuthors = _ref.favAuthors,
      followers = _ref.followers,
      favCharacters = _ref.favCharacters,
      favStories = _ref.favStories,
      loading = _ref.loading;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(["stories", "characters", "locations", "favorites stories", "favorites characters", "followers", "followings"]),
      tabs = _useState[0];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      settings = _useState2[0],
      openSettings = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("stories"),
      currentTab = _useState3[0],
      setCurrentTab = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("favauthors"),
      favTab = _useState4[0],
      setFavTab = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      favoriteStories = _useState5[0],
      setFavoriteStories = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(favCharacters),
      favoriteCharacters = _useState6[0],
      setFavoriteCharacters = _useState6[1];

  var changeTab = function changeTab(tab) {
    return setCurrentTab(tab);
  };

  var auth = Object(_hooks_userHooks__WEBPACK_IMPORTED_MODULE_14__["useAuth"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (auth.user) {
      getProfile();
      getUserStories(null, "profile");
      getUserCharacters();
      getFavoriteAuthors();
      getFollowers();
      getFavoriteCharacters();
      getFavoriteStories();
      getUserLocations();
    }
  }, [auth]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setFavoriteStories(favStories.filter(function (s) {
      return s["public"] || s.authorId === auth.user.uid;
    }));
    setFavoriteCharacters(favCharacters.filter(function (s) {
      return s["public"] || s.authorId === auth.user.uid;
    }));
  }, [auth, favStories, favCharacters]);

  var changeFavTab = function changeFavTab(tab) {
    return setFavTab(tab);
  };

  return __jsx("div", {
    className: "profile",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 5
    }
  }, __jsx(_components_hoc_LoadingScreen__WEBPACK_IMPORTED_MODULE_15__["default"], {
    loading: auth.isLoading,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }
  }, __jsx(_components_hoc_RedirectComp__WEBPACK_IMPORTED_MODULE_16__["default"], {
    condition: auth.user,
    type: "redirect",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 9
    }
  }, __jsx(_components_profile_Banner__WEBPACK_IMPORTED_MODULE_4__["default"], {
    context: "private",
    profile: profile,
    openSettings: openSettings,
    favAuthors: favAuthors,
    followers: followers,
    changeFavTab: changeFavTab,
    favTab: favTab,
    setCurrentTab: setCurrentTab,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 11
    }
  }), __jsx("section", {
    className: "profile-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 11
    }
  }, __jsx(_components_profile_Tabs__WEBPACK_IMPORTED_MODULE_5__["default"], {
    currentTab: currentTab,
    tabs: tabs,
    changeTab: changeTab,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }
  }), currentTab === "stories" && __jsx(_components_profile_Stories__WEBPACK_IMPORTED_MODULE_6__["default"], (_jsx = {
    auth: auth,
    loading: loading,
    type: "show",
    stories: stories
  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "type", "privateProfile"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "context", "private"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__self", _this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__source", {
    fileName: _jsxFileName,
    lineNumber: 109,
    columnNumber: 15
  }), _jsx)), currentTab === "characters" && __jsx(_components_profile_Characters__WEBPACK_IMPORTED_MODULE_7__["default"], {
    context: "private",
    characters: characters,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 15
    }
  }), currentTab === "locations" && __jsx(_components_profile_Locations__WEBPACK_IMPORTED_MODULE_9__["default"], {
    context: "private",
    locations: locations,
    type: "profile",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 15
    }
  }), currentTab === "favorites stories" && __jsx(_components_profile_Stories__WEBPACK_IMPORTED_MODULE_6__["default"], {
    loading: loading,
    type: "favorites",
    stories: favoriteStories,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 15
    }
  }), currentTab === "favorites characters" && __jsx(_components_profile_Characters__WEBPACK_IMPORTED_MODULE_7__["default"], {
    type: "favorites",
    characters: favoriteCharacters,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 15
    }
  }), currentTab === "followers" && __jsx(_components_profile_Followers__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: "Followers",
    type: "followers",
    lg: 4,
    md: 6,
    sm: 8,
    xs: 12,
    items: followers.authors,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 15
    }
  }), currentTab === "followings" && __jsx(_components_profile_Followers__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: "Followings",
    type: "followings",
    lg: 4,
    md: 6,
    sm: 8,
    xs: 12,
    items: favAuthors.authors,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 15
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Modal"], {
    title: "Settings",
    visible: settings,
    onOk: function onOk() {
      return openSettings(false);
    },
    onCancel: function onCancel() {
      return openSettings(false);
    },
    footer: [__jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      key: "submit",
      type: "primary",
      onClick: function onClick() {
        return openSettings(false);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 15
      }
    }, "Submit")],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 11
    }
  }, __jsx(_components_profile_Settings__WEBPACK_IMPORTED_MODULE_10__["default"], {
    user: auth.user,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 13
    }
  })))));
};

_s(Profile, "R/xidnqUJkJyDbCCS6341iz85A8=", false, function () {
  return [_hooks_userHooks__WEBPACK_IMPORTED_MODULE_14__["useAuth"]];
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
    favStories: state.stories.favStories,
    locations: state.stories.userLocations,
    loading: state.stories.loading
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, {
  getProfile: _redux_actions_userActions__WEBPACK_IMPORTED_MODULE_11__["getProfile"],
  getUserStories: _redux_actions_storiesActions__WEBPACK_IMPORTED_MODULE_12__["getUserStories"],
  getUserCharacters: _redux_actions_charactersActions__WEBPACK_IMPORTED_MODULE_13__["getUserCharacters"],
  getFavoriteAuthors: _redux_actions_userActions__WEBPACK_IMPORTED_MODULE_11__["getFavoriteAuthors"],
  getFollowers: _redux_actions_userActions__WEBPACK_IMPORTED_MODULE_11__["getFollowers"],
  getFavoriteCharacters: _redux_actions_charactersActions__WEBPACK_IMPORTED_MODULE_13__["getFavoriteCharacters"],
  getFavoriteStories: _redux_actions_storiesActions__WEBPACK_IMPORTED_MODULE_12__["getFavoriteStories"],
  getUserLocations: _redux_actions_storiesActions__WEBPACK_IMPORTED_MODULE_12__["getUserLocations"]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS9pbmRleC5qcyJdLCJuYW1lcyI6WyJQcm9maWxlIiwiZ2V0UHJvZmlsZSIsInByb2ZpbGUiLCJzdG9yaWVzIiwibG9jYXRpb25zIiwiZ2V0VXNlclN0b3JpZXMiLCJnZXRVc2VyQ2hhcmFjdGVycyIsImdldEZhdm9yaXRlQXV0aG9ycyIsImdldEZhdm9yaXRlQ2hhcmFjdGVycyIsImdldEZhdm9yaXRlU3RvcmllcyIsImdldFVzZXJMb2NhdGlvbnMiLCJnZXRGb2xsb3dlcnMiLCJjaGFyYWN0ZXJzIiwiZmF2QXV0aG9ycyIsImZvbGxvd2VycyIsImZhdkNoYXJhY3RlcnMiLCJmYXZTdG9yaWVzIiwibG9hZGluZyIsInVzZVN0YXRlIiwidGFicyIsInNldHRpbmdzIiwib3BlblNldHRpbmdzIiwiY3VycmVudFRhYiIsInNldEN1cnJlbnRUYWIiLCJmYXZUYWIiLCJzZXRGYXZUYWIiLCJmYXZvcml0ZVN0b3JpZXMiLCJzZXRGYXZvcml0ZVN0b3JpZXMiLCJmYXZvcml0ZUNoYXJhY3RlcnMiLCJzZXRGYXZvcml0ZUNoYXJhY3RlcnMiLCJjaGFuZ2VUYWIiLCJ0YWIiLCJhdXRoIiwidXNlQXV0aCIsInVzZUVmZmVjdCIsInVzZXIiLCJmaWx0ZXIiLCJzIiwiYXV0aG9ySWQiLCJ1aWQiLCJjaGFuZ2VGYXZUYWIiLCJpc0xvYWRpbmciLCJhdXRob3JzIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJvd25Qcm9wcyIsInVzZXJTdG9yaWVzIiwidXNlckNoYXJhY3RlcnMiLCJ1c2VyTG9jYXRpb25zIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBS0E7QUFJQTtBQUlBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEs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Q0FBV2xCLFNBTHNCO0FBTTVDQyxpQkFBYSxFQUFFNkIsS0FBSyxDQUFDaEMsVUFBTixDQUFpQkcsYUFOWTtBQU81Q0MsY0FBVSxFQUFFNEIsS0FBSyxDQUFDekMsT0FBTixDQUFjYSxVQVBrQjtBQVE1Q1osYUFBUyxFQUFFd0MsS0FBSyxDQUFDekMsT0FBTixDQUFjNkMsYUFSbUI7QUFTNUMvQixXQUFPLEVBQUUyQixLQUFLLENBQUN6QyxPQUFOLENBQWNjO0FBVHFCLEdBQXRCO0FBQUEsQ0FBeEI7O0FBWWVnQywwSEFBTyxDQUFDTixlQUFELEVBQWtCO0FBQ3RDMUMsWUFBVSxFQUFWQSxzRUFEc0M7QUFFdENJLGdCQUFjLEVBQWRBLDZFQUZzQztBQUd0Q0MsbUJBQWlCLEVBQWpCQSxtRkFIc0M7QUFJdENDLG9CQUFrQixFQUFsQkEsOEVBSnNDO0FBS3RDSSxjQUFZLEVBQVpBLHdFQUxzQztBQU10Q0gsdUJBQXFCLEVBQXJCQSx1RkFOc0M7QUFPdENDLG9CQUFrQixFQUFsQkEsaUZBUHNDO0FBUXRDQyxrQkFBZ0IsRUFBaEJBLCtFQUFnQkE7QUFSc0IsQ0FBbEIsQ0FBUCxDQVNaVixPQVRZLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS40NzIyYjlmYWZmNzhiNmMzZGQ5OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBNb2RhbCwgQnV0dG9uIH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmltcG9ydCBCYW5uZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcHJvZmlsZS9CYW5uZXJcIjtcclxuaW1wb3J0IFRhYnMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcHJvZmlsZS9UYWJzXCI7XHJcbmltcG9ydCBTdG9yaWVzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3Byb2ZpbGUvU3Rvcmllc1wiO1xyXG5pbXBvcnQgQ2hhcmFjdGVycyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9wcm9maWxlL0NoYXJhY3RlcnNcIjtcclxuaW1wb3J0IEZvbGxvd2VycyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9wcm9maWxlL0ZvbGxvd2Vyc1wiO1xyXG5pbXBvcnQgTG9jYXRpb25zIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3Byb2ZpbGUvTG9jYXRpb25zXCI7XHJcbmltcG9ydCBTZXR0aW5ncyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9wcm9maWxlL1NldHRpbmdzXCI7XHJcblxyXG5pbXBvcnQgeyBnZXRQcm9maWxlIH0gZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvbnMvdXNlckFjdGlvbnNcIjtcclxuaW1wb3J0IHtcclxuICBnZXRVc2VyU3RvcmllcyxcclxuICBnZXRGYXZvcml0ZVN0b3JpZXMsXHJcbiAgZ2V0VXNlckxvY2F0aW9ucyxcclxufSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9ucy9zdG9yaWVzQWN0aW9uc1wiO1xyXG5pbXBvcnQge1xyXG4gIGdldFVzZXJDaGFyYWN0ZXJzLFxyXG4gIGdldEZhdm9yaXRlQ2hhcmFjdGVycyxcclxufSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9ucy9jaGFyYWN0ZXJzQWN0aW9uc1wiO1xyXG5pbXBvcnQge1xyXG4gIGdldEZhdm9yaXRlQXV0aG9ycyxcclxuICBnZXRGb2xsb3dlcnMsXHJcbn0gZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvbnMvdXNlckFjdGlvbnNcIjtcclxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gXCIuLi8uLi9ob29rcy91c2VySG9va3NcIjtcclxuaW1wb3J0IExvYWRpbmdTY3JlZW4gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvaG9jL0xvYWRpbmdTY3JlZW5cIjtcclxuaW1wb3J0IFJlZGlyZWN0Q29tcCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9ob2MvUmVkaXJlY3RDb21wXCI7XHJcblxyXG5jb25zdCBQcm9maWxlID0gKHtcclxuICBnZXRQcm9maWxlLFxyXG4gIHByb2ZpbGUsXHJcbiAgc3RvcmllcyxcclxuICBsb2NhdGlvbnMsXHJcbiAgZ2V0VXNlclN0b3JpZXMsXHJcbiAgZ2V0VXNlckNoYXJhY3RlcnMsXHJcbiAgZ2V0RmF2b3JpdGVBdXRob3JzLFxyXG4gIGdldEZhdm9yaXRlQ2hhcmFjdGVycyxcclxuICBnZXRGYXZvcml0ZVN0b3JpZXMsXHJcbiAgZ2V0VXNlckxvY2F0aW9ucyxcclxuICBnZXRGb2xsb3dlcnMsXHJcbiAgY2hhcmFjdGVycyxcclxuICBmYXZBdXRob3JzLFxyXG4gIGZvbGxvd2VycyxcclxuICBmYXZDaGFyYWN0ZXJzLFxyXG4gIGZhdlN0b3JpZXMsXHJcbiAgbG9hZGluZyxcclxufSkgPT4ge1xyXG4gIGNvbnN0IFt0YWJzXSA9IHVzZVN0YXRlKFtcclxuICAgIFwic3Rvcmllc1wiLFxyXG4gICAgXCJjaGFyYWN0ZXJzXCIsXHJcbiAgICBcImxvY2F0aW9uc1wiLFxyXG4gICAgXCJmYXZvcml0ZXMgc3Rvcmllc1wiLFxyXG4gICAgXCJmYXZvcml0ZXMgY2hhcmFjdGVyc1wiLFxyXG4gICAgXCJmb2xsb3dlcnNcIixcclxuICAgIFwiZm9sbG93aW5nc1wiLFxyXG4gIF0pO1xyXG4gIGNvbnN0IFtzZXR0aW5ncywgb3BlblNldHRpbmdzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbY3VycmVudFRhYiwgc2V0Q3VycmVudFRhYl0gPSB1c2VTdGF0ZShcInN0b3JpZXNcIik7XHJcbiAgY29uc3QgW2ZhdlRhYiwgc2V0RmF2VGFiXSA9IHVzZVN0YXRlKFwiZmF2YXV0aG9yc1wiKTtcclxuICBjb25zdCBbZmF2b3JpdGVTdG9yaWVzLCBzZXRGYXZvcml0ZVN0b3JpZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtmYXZvcml0ZUNoYXJhY3RlcnMsIHNldEZhdm9yaXRlQ2hhcmFjdGVyc10gPSB1c2VTdGF0ZShmYXZDaGFyYWN0ZXJzKTtcclxuICBjb25zdCBjaGFuZ2VUYWIgPSAodGFiKSA9PiBzZXRDdXJyZW50VGFiKHRhYik7XHJcblxyXG4gIGNvbnN0IGF1dGggPSB1c2VBdXRoKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoYXV0aC51c2VyKSB7XHJcbiAgICAgIGdldFByb2ZpbGUoKTtcclxuICAgICAgZ2V0VXNlclN0b3JpZXMobnVsbCwgXCJwcm9maWxlXCIpO1xyXG4gICAgICBnZXRVc2VyQ2hhcmFjdGVycygpO1xyXG4gICAgICBnZXRGYXZvcml0ZUF1dGhvcnMoKTtcclxuICAgICAgZ2V0Rm9sbG93ZXJzKCk7XHJcbiAgICAgIGdldEZhdm9yaXRlQ2hhcmFjdGVycygpO1xyXG4gICAgICBnZXRGYXZvcml0ZVN0b3JpZXMoKTtcclxuICAgICAgZ2V0VXNlckxvY2F0aW9ucygpO1xyXG4gICAgfVxyXG4gIH0sIFthdXRoXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRGYXZvcml0ZVN0b3JpZXMoXHJcbiAgICAgIGZhdlN0b3JpZXMuZmlsdGVyKChzKSA9PiBzLnB1YmxpYyB8fCBzLmF1dGhvcklkID09PSBhdXRoLnVzZXIudWlkKVxyXG4gICAgKTtcclxuICAgIHNldEZhdm9yaXRlQ2hhcmFjdGVycyhcclxuICAgICAgZmF2Q2hhcmFjdGVycy5maWx0ZXIoKHMpID0+IHMucHVibGljIHx8IHMuYXV0aG9ySWQgPT09IGF1dGgudXNlci51aWQpXHJcbiAgICApO1xyXG4gIH0sIFthdXRoLCBmYXZTdG9yaWVzLCBmYXZDaGFyYWN0ZXJzXSk7XHJcblxyXG4gIGNvbnN0IGNoYW5nZUZhdlRhYiA9ICh0YWIpID0+IHNldEZhdlRhYih0YWIpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlXCI+XHJcbiAgICAgIDxMb2FkaW5nU2NyZWVuIGxvYWRpbmc9e2F1dGguaXNMb2FkaW5nfT5cclxuICAgICAgICA8UmVkaXJlY3RDb21wIGNvbmRpdGlvbj17YXV0aC51c2VyfSB0eXBlPVwicmVkaXJlY3RcIj5cclxuICAgICAgICAgIDxCYW5uZXJcclxuICAgICAgICAgICAgY29udGV4dD1cInByaXZhdGVcIlxyXG4gICAgICAgICAgICBwcm9maWxlPXtwcm9maWxlfVxyXG4gICAgICAgICAgICBvcGVuU2V0dGluZ3M9e29wZW5TZXR0aW5nc31cclxuICAgICAgICAgICAgZmF2QXV0aG9ycz17ZmF2QXV0aG9yc31cclxuICAgICAgICAgICAgZm9sbG93ZXJzPXtmb2xsb3dlcnN9XHJcbiAgICAgICAgICAgIGNoYW5nZUZhdlRhYj17Y2hhbmdlRmF2VGFifVxyXG4gICAgICAgICAgICBmYXZUYWI9e2ZhdlRhYn1cclxuICAgICAgICAgICAgc2V0Q3VycmVudFRhYj17c2V0Q3VycmVudFRhYn1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwcm9maWxlLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPFRhYnMgY3VycmVudFRhYj17Y3VycmVudFRhYn0gdGFicz17dGFic30gY2hhbmdlVGFiPXtjaGFuZ2VUYWJ9IC8+XHJcbiAgICAgICAgICAgIHtjdXJyZW50VGFiID09PSBcInN0b3JpZXNcIiAmJiAoXHJcbiAgICAgICAgICAgICAgPFN0b3JpZXNcclxuICAgICAgICAgICAgICAgIGF1dGg9e2F1dGh9XHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxyXG4gICAgICAgICAgICAgICAgdHlwZT17XCJzaG93XCJ9XHJcbiAgICAgICAgICAgICAgICBzdG9yaWVzPXtzdG9yaWVzfVxyXG4gICAgICAgICAgICAgICAgdHlwZT17XCJwcml2YXRlUHJvZmlsZVwifVxyXG4gICAgICAgICAgICAgICAgY29udGV4dD1cInByaXZhdGVcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHtjdXJyZW50VGFiID09PSBcImNoYXJhY3RlcnNcIiAmJiAoXHJcbiAgICAgICAgICAgICAgPENoYXJhY3RlcnMgY29udGV4dD1cInByaXZhdGVcIiBjaGFyYWN0ZXJzPXtjaGFyYWN0ZXJzfSAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7Y3VycmVudFRhYiA9PT0gXCJsb2NhdGlvbnNcIiAmJiAoXHJcbiAgICAgICAgICAgICAgPExvY2F0aW9uc1xyXG4gICAgICAgICAgICAgICAgY29udGV4dD1cInByaXZhdGVcIlxyXG4gICAgICAgICAgICAgICAgbG9jYXRpb25zPXtsb2NhdGlvbnN9XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwicHJvZmlsZVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAge2N1cnJlbnRUYWIgPT09IFwiZmF2b3JpdGVzIHN0b3JpZXNcIiAmJiAoXHJcbiAgICAgICAgICAgICAgPFN0b3JpZXNcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiZmF2b3JpdGVzXCJcclxuICAgICAgICAgICAgICAgIHN0b3JpZXM9e2Zhdm9yaXRlU3Rvcmllc31cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7Y3VycmVudFRhYiA9PT0gXCJmYXZvcml0ZXMgY2hhcmFjdGVyc1wiICYmIChcclxuICAgICAgICAgICAgICA8Q2hhcmFjdGVycyB0eXBlPVwiZmF2b3JpdGVzXCIgY2hhcmFjdGVycz17ZmF2b3JpdGVDaGFyYWN0ZXJzfSAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7Y3VycmVudFRhYiA9PT0gXCJmb2xsb3dlcnNcIiAmJiAoXHJcbiAgICAgICAgICAgICAgPEZvbGxvd2Vyc1xyXG4gICAgICAgICAgICAgICAgdGl0bGU9XCJGb2xsb3dlcnNcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT17XCJmb2xsb3dlcnNcIn1cclxuICAgICAgICAgICAgICAgIGxnPXs0fVxyXG4gICAgICAgICAgICAgICAgbWQ9ezZ9XHJcbiAgICAgICAgICAgICAgICBzbT17OH1cclxuICAgICAgICAgICAgICAgIHhzPXsxMn1cclxuICAgICAgICAgICAgICAgIGl0ZW1zPXtmb2xsb3dlcnMuYXV0aG9yc31cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7Y3VycmVudFRhYiA9PT0gXCJmb2xsb3dpbmdzXCIgJiYgKFxyXG4gICAgICAgICAgICAgIDxGb2xsb3dlcnNcclxuICAgICAgICAgICAgICAgIHRpdGxlPVwiRm9sbG93aW5nc1wiXHJcbiAgICAgICAgICAgICAgICB0eXBlPXtcImZvbGxvd2luZ3NcIn1cclxuICAgICAgICAgICAgICAgIGxnPXs0fVxyXG4gICAgICAgICAgICAgICAgbWQ9ezZ9XHJcbiAgICAgICAgICAgICAgICBzbT17OH1cclxuICAgICAgICAgICAgICAgIHhzPXsxMn1cclxuICAgICAgICAgICAgICAgIGl0ZW1zPXtmYXZBdXRob3JzLmF1dGhvcnN9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICB0aXRsZT1cIlNldHRpbmdzXCJcclxuICAgICAgICAgICAgdmlzaWJsZT17c2V0dGluZ3N9XHJcbiAgICAgICAgICAgIG9uT2s9eygpID0+IG9wZW5TZXR0aW5ncyhmYWxzZSl9XHJcbiAgICAgICAgICAgIG9uQ2FuY2VsPXsoKSA9PiBvcGVuU2V0dGluZ3MoZmFsc2UpfVxyXG4gICAgICAgICAgICBmb290ZXI9e1tcclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBrZXk9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb3BlblNldHRpbmdzKGZhbHNlKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBTdWJtaXRcclxuICAgICAgICAgICAgICA8L0J1dHRvbj4sXHJcbiAgICAgICAgICAgIF19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxTZXR0aW5ncyB1c2VyPXthdXRoLnVzZXJ9IC8+XHJcbiAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgIDwvUmVkaXJlY3RDb21wPlxyXG4gICAgICA8L0xvYWRpbmdTY3JlZW4+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCBvd25Qcm9wcykgPT4gKHtcclxuICBwcm9maWxlOiBzdGF0ZS5hdXRoLnByb2ZpbGUsXHJcbiAgc3Rvcmllczogc3RhdGUuc3Rvcmllcy51c2VyU3RvcmllcyxcclxuICBjaGFyYWN0ZXJzOiBzdGF0ZS5jaGFyYWN0ZXJzLnVzZXJDaGFyYWN0ZXJzLFxyXG4gIGZhdkF1dGhvcnM6IHN0YXRlLmF1dGguZmF2QXV0aG9ycyxcclxuICBmb2xsb3dlcnM6IHN0YXRlLmF1dGguZm9sbG93ZXJzLFxyXG4gIGZhdkNoYXJhY3RlcnM6IHN0YXRlLmNoYXJhY3RlcnMuZmF2Q2hhcmFjdGVycyxcclxuICBmYXZTdG9yaWVzOiBzdGF0ZS5zdG9yaWVzLmZhdlN0b3JpZXMsXHJcbiAgbG9jYXRpb25zOiBzdGF0ZS5zdG9yaWVzLnVzZXJMb2NhdGlvbnMsXHJcbiAgbG9hZGluZzogc3RhdGUuc3Rvcmllcy5sb2FkaW5nLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7XHJcbiAgZ2V0UHJvZmlsZSxcclxuICBnZXRVc2VyU3RvcmllcyxcclxuICBnZXRVc2VyQ2hhcmFjdGVycyxcclxuICBnZXRGYXZvcml0ZUF1dGhvcnMsXHJcbiAgZ2V0Rm9sbG93ZXJzLFxyXG4gIGdldEZhdm9yaXRlQ2hhcmFjdGVycyxcclxuICBnZXRGYXZvcml0ZVN0b3JpZXMsXHJcbiAgZ2V0VXNlckxvY2F0aW9ucyxcclxufSkoUHJvZmlsZSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=