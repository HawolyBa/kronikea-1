webpackHotUpdate_N_E("pages/profile/[id]",{

/***/ "./pages/profile/[id]/index.js":
/*!*************************************!*\
  !*** ./pages/profile/[id]/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../index */ "./pages/profile/index.js");
/* harmony import */ var _components_profile_Banner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/profile/Banner */ "./components/profile/Banner.js");
/* harmony import */ var _components_profile_Tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/profile/Tabs */ "./components/profile/Tabs.js");
/* harmony import */ var _components_profile_Stories__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/profile/Stories */ "./components/profile/Stories.js");
/* harmony import */ var _components_profile_Characters__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/profile/Characters */ "./components/profile/Characters.js");
/* harmony import */ var _components_profile_Followers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/profile/Followers */ "./components/profile/Followers.js");
/* harmony import */ var _components_profile_Locations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/profile/Locations */ "./components/profile/Locations.js");
/* harmony import */ var _redux_actions_userActions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../redux/actions/userActions */ "./redux/actions/userActions.js");
/* harmony import */ var _redux_actions_storiesActions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../redux/actions/storiesActions */ "./redux/actions/storiesActions.js");
/* harmony import */ var _redux_actions_charactersActions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../redux/actions/charactersActions */ "./redux/actions/charactersActions.js");
/* harmony import */ var _hooks_userHooks__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../hooks/userHooks */ "./hooks/userHooks.js");
/* harmony import */ var _components_hoc_LoadingScreen__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../components/hoc/LoadingScreen */ "./components/hoc/LoadingScreen.js");
/* harmony import */ var _components_hoc_RedirectComp__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../components/hoc/RedirectComp */ "./components/hoc/RedirectComp.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\pages\\profile\\[id]\\index.js",
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
      followUser = _ref.followUser,
      unfollowUser = _ref.unfollowUser,
      getIsFollowing = _ref.getIsFollowing,
      getUserCharacters = _ref.getUserCharacters,
      getFavoriteAuthors = _ref.getFavoriteAuthors,
      getFavoriteCharacters = _ref.getFavoriteCharacters,
      getFavoriteStories = _ref.getFavoriteStories,
      getUserLocations = _ref.getUserLocations,
      getFollowers = _ref.getFollowers,
      characters = _ref.characters,
      isFollowing = _ref.isFollowing,
      favAuthors = _ref.favAuthors,
      followers = _ref.followers,
      favCharacters = _ref.favCharacters,
      favStories = _ref.favStories,
      loading = _ref.loading;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(["stories", "characters", "locations", "favorites stories", "favorites characters", "followers", "followings"]),
      tabs = _useState[0];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("stories"),
      currentTab = _useState2[0],
      setCurrentTab = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("favauthors"),
      favTab = _useState3[0],
      setFavTab = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      favoriteStories = _useState4[0],
      setFavoriteStories = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(favCharacters),
      favoriteCharacters = _useState5[0],
      setFavoriteCharacters = _useState5[1];

  var changeTab = function changeTab(tab) {
    return setCurrentTab(tab);
  };

  var auth = Object(_hooks_userHooks__WEBPACK_IMPORTED_MODULE_15__["useAuth"])();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (auth && auth.user.uid !== router.query.id) {
      getProfile(router.query.id);
      getUserStories(router.query.id);
      getUserCharacters(router.query.id);
      getFavoriteAuthors(router.query.id);
      getFollowers(router.query.id);
      getFavoriteCharacters(router.query.id);
      getFavoriteStories(router.query.id);
      getUserLocations(router.query.id);
    }
  }, [router.query.id, auth]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (auth.user) {
      getIsFollowing(router.query.id);
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
      lineNumber: 110,
      columnNumber: 5
    }
  }, __jsx(_components_hoc_LoadingScreen__WEBPACK_IMPORTED_MODULE_16__["default"], {
    loading: auth.isLoading,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }
  }, auth.user && auth.user.uid === router.query.id ? __jsx(_index__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 11
    }
  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_profile_Banner__WEBPACK_IMPORTED_MODULE_6__["default"], {
    context: "public",
    profile: profile,
    favAuthors: favAuthors,
    followers: followers,
    changeFavTab: changeFavTab,
    favTab: favTab,
    setCurrentTab: setCurrentTab,
    isFollowing: isFollowing,
    followUser: followUser,
    unfollowUser: unfollowUser,
    auth: auth,
    id: router.query.id,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 13
    }
  }), __jsx("section", {
    className: "profile-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 13
    }
  }, __jsx(_components_profile_Tabs__WEBPACK_IMPORTED_MODULE_7__["default"], {
    currentTab: currentTab,
    tabs: tabs,
    changeTab: changeTab,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 15
    }
  }), currentTab === "stories" && __jsx(_components_profile_Stories__WEBPACK_IMPORTED_MODULE_8__["default"], (_jsx = {
    auth: auth,
    loading: loading,
    type: "show",
    stories: stories
  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "type", "privateProfile"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "context", "public"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__self", _this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__source", {
    fileName: _jsxFileName,
    lineNumber: 133,
    columnNumber: 17
  }), _jsx)), currentTab === "characters" && __jsx(_components_profile_Characters__WEBPACK_IMPORTED_MODULE_9__["default"], {
    context: "public",
    characters: characters,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 17
    }
  }), currentTab === "locations" && __jsx(_components_profile_Locations__WEBPACK_IMPORTED_MODULE_11__["default"], {
    context: "public",
    locations: locations,
    type: "profile",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 17
    }
  }), currentTab === "favorites stories" && __jsx(_components_profile_Stories__WEBPACK_IMPORTED_MODULE_8__["default"], {
    type: "favorites",
    loading: loading,
    stories: favoriteStories,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 17
    }
  }), currentTab === "favorites characters" && __jsx(_components_profile_Characters__WEBPACK_IMPORTED_MODULE_9__["default"], {
    type: "favorites",
    characters: favoriteCharacters,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 17
    }
  }), currentTab === "followers" && __jsx(_components_profile_Followers__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
      lineNumber: 163,
      columnNumber: 17
    }
  }), currentTab === "followings" && __jsx(_components_profile_Followers__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
      lineNumber: 174,
      columnNumber: 17
    }
  })))));
};

_s(Profile, "E7h8WDe/YMN9ittHLGWz7/w2Zns=", false, function () {
  return [_hooks_userHooks__WEBPACK_IMPORTED_MODULE_15__["useAuth"], next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
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
    loading: state.stories.loading,
    isFollowing: state.auth.isFollowing
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, {
  getProfile: _redux_actions_userActions__WEBPACK_IMPORTED_MODULE_12__["getProfile"],
  getUserStories: _redux_actions_storiesActions__WEBPACK_IMPORTED_MODULE_13__["getUserStories"],
  getUserCharacters: _redux_actions_charactersActions__WEBPACK_IMPORTED_MODULE_14__["getUserCharacters"],
  getFavoriteAuthors: _redux_actions_userActions__WEBPACK_IMPORTED_MODULE_12__["getFavoriteAuthors"],
  getFollowers: _redux_actions_userActions__WEBPACK_IMPORTED_MODULE_12__["getFollowers"],
  getFavoriteCharacters: _redux_actions_charactersActions__WEBPACK_IMPORTED_MODULE_14__["getFavoriteCharacters"],
  getFavoriteStories: _redux_actions_storiesActions__WEBPACK_IMPORTED_MODULE_13__["getFavoriteStories"],
  getUserLocations: _redux_actions_storiesActions__WEBPACK_IMPORTED_MODULE_13__["getUserLocations"],
  followUser: _redux_actions_userActions__WEBPACK_IMPORTED_MODULE_12__["followUser"],
  unfollowUser: _redux_actions_userActions__WEBPACK_IMPORTED_MODULE_12__["unfollowUser"],
  getIsFollowing: _redux_actions_userActions__WEBPACK_IMPORTED_MODULE_12__["getIsFollowing"]
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS8vaW5kZXguanMiXSwibmFtZXMiOlsiUHJvZmlsZSIsImdldFByb2ZpbGUiLCJwcm9maWxlIiwic3RvcmllcyIsImxvY2F0aW9ucyIsImdldFVzZXJTdG9yaWVzIiwiZm9sbG93VXNlciIsInVuZm9sbG93VXNlciIsImdldElzRm9sbG93aW5nIiwiZ2V0VXNlckNoYXJhY3RlcnMiLCJnZXRGYXZvcml0ZUF1dGhvcnMiLCJnZXRGYXZvcml0ZUNoYXJhY3RlcnMiLCJnZXRGYXZvcml0ZVN0b3JpZXMiLCJnZXRVc2VyTG9jYXRpb25zIiwiZ2V0Rm9sbG93ZXJzIiwiY2hhcmFjdGVycyIsImlzRm9sbG93aW5nIiwiZmF2QXV0aG9ycyIsImZvbGxvd2VycyIsImZhdkNoYXJhY3RlcnMiLCJmYXZTdG9yaWVzIiwibG9hZGluZyIsInVzZVN0YXRlIiwidGFicyIsImN1cnJlbnRUYWIiLCJzZXRDdXJyZW50VGFiIiwiZmF2VGFiIiwic2V0RmF2VGFiIiwiZmF2b3JpdGVTdG9yaWVzIiwic2V0RmF2b3JpdGVTdG9yaWVzIiwiZmF2b3JpdGVDaGFyYWN0ZXJzIiwic2V0RmF2b3JpdGVDaGFyYWN0ZXJzIiwiY2hhbmdlVGFiIiwidGFiIiwiYXV0aCIsInVzZUF1dGgiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VyIiwidWlkIiwicXVlcnkiLCJpZCIsImZpbHRlciIsInMiLCJhdXRob3JJZCIsImNoYW5nZUZhdlRhYiIsImlzTG9hZGluZyIsImF1dGhvcnMiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIm93blByb3BzIiwidXNlclN0b3JpZXMiLCJ1c2VyQ2hhcmFjdGVycyIsInVzZXJMb2NhdGlvbnMiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFoQkEsK0VBUnNDO0FBU3RDUCxZQUFVLEVBQVZBLHNFQVRzQztBQVV0Q0MsY0FBWSxFQUFaQSx3RUFWc0M7QUFXdENDLGdCQUFjLEVBQWRBLDBFQUFjQTtBQVh3QixDQUFsQixDQUFQLENBWVpSLE9BWlksQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlL1tpZF0uOTk0MjRkMjE4YWY1YjhkYjc0ZTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IE1vZGFsLCBCdXR0b24gfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuaW1wb3J0IFByb2ZpbGVQcml2ZSBmcm9tIFwiLi4vaW5kZXhcIjtcclxuaW1wb3J0IEJhbm5lciBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9wcm9maWxlL0Jhbm5lclwiO1xyXG5pbXBvcnQgVGFicyBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9wcm9maWxlL1RhYnNcIjtcclxuaW1wb3J0IFN0b3JpZXMgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvcHJvZmlsZS9TdG9yaWVzXCI7XHJcbmltcG9ydCBDaGFyYWN0ZXJzIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL3Byb2ZpbGUvQ2hhcmFjdGVyc1wiO1xyXG5pbXBvcnQgRm9sbG93ZXJzIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL3Byb2ZpbGUvRm9sbG93ZXJzXCI7XHJcbmltcG9ydCBMb2NhdGlvbnMgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvcHJvZmlsZS9Mb2NhdGlvbnNcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgZ2V0UHJvZmlsZSxcclxuICBmb2xsb3dVc2VyLFxyXG4gIHVuZm9sbG93VXNlcixcclxuICBnZXRJc0ZvbGxvd2luZyxcclxufSBmcm9tIFwiLi4vLi4vLi4vcmVkdXgvYWN0aW9ucy91c2VyQWN0aW9uc1wiO1xyXG5pbXBvcnQge1xyXG4gIGdldFVzZXJTdG9yaWVzLFxyXG4gIGdldEZhdm9yaXRlU3RvcmllcyxcclxuICBnZXRVc2VyTG9jYXRpb25zLFxyXG59IGZyb20gXCIuLi8uLi8uLi9yZWR1eC9hY3Rpb25zL3N0b3JpZXNBY3Rpb25zXCI7XHJcbmltcG9ydCB7XHJcbiAgZ2V0VXNlckNoYXJhY3RlcnMsXHJcbiAgZ2V0RmF2b3JpdGVDaGFyYWN0ZXJzLFxyXG59IGZyb20gXCIuLi8uLi8uLi9yZWR1eC9hY3Rpb25zL2NoYXJhY3RlcnNBY3Rpb25zXCI7XHJcbmltcG9ydCB7XHJcbiAgZ2V0RmF2b3JpdGVBdXRob3JzLFxyXG4gIGdldEZvbGxvd2VycyxcclxufSBmcm9tIFwiLi4vLi4vLi4vcmVkdXgvYWN0aW9ucy91c2VyQWN0aW9uc1wiO1xyXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSBcIi4uLy4uLy4uL2hvb2tzL3VzZXJIb29rc1wiO1xyXG5pbXBvcnQgTG9hZGluZ1NjcmVlbiBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9ob2MvTG9hZGluZ1NjcmVlblwiO1xyXG5pbXBvcnQgUmVkaXJlY3RDb21wIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2hvYy9SZWRpcmVjdENvbXBcIjtcclxuXHJcbmNvbnN0IFByb2ZpbGUgPSAoe1xyXG4gIGdldFByb2ZpbGUsXHJcbiAgcHJvZmlsZSxcclxuICBzdG9yaWVzLFxyXG4gIGxvY2F0aW9ucyxcclxuICBnZXRVc2VyU3RvcmllcyxcclxuICBmb2xsb3dVc2VyLFxyXG4gIHVuZm9sbG93VXNlcixcclxuICBnZXRJc0ZvbGxvd2luZyxcclxuICBnZXRVc2VyQ2hhcmFjdGVycyxcclxuICBnZXRGYXZvcml0ZUF1dGhvcnMsXHJcbiAgZ2V0RmF2b3JpdGVDaGFyYWN0ZXJzLFxyXG4gIGdldEZhdm9yaXRlU3RvcmllcyxcclxuICBnZXRVc2VyTG9jYXRpb25zLFxyXG4gIGdldEZvbGxvd2VycyxcclxuICBjaGFyYWN0ZXJzLFxyXG4gIGlzRm9sbG93aW5nLFxyXG4gIGZhdkF1dGhvcnMsXHJcbiAgZm9sbG93ZXJzLFxyXG4gIGZhdkNoYXJhY3RlcnMsXHJcbiAgZmF2U3RvcmllcyxcclxuICBsb2FkaW5nLFxyXG59KSA9PiB7XHJcbiAgY29uc3QgW3RhYnNdID0gdXNlU3RhdGUoW1xyXG4gICAgXCJzdG9yaWVzXCIsXHJcbiAgICBcImNoYXJhY3RlcnNcIixcclxuICAgIFwibG9jYXRpb25zXCIsXHJcbiAgICBcImZhdm9yaXRlcyBzdG9yaWVzXCIsXHJcbiAgICBcImZhdm9yaXRlcyBjaGFyYWN0ZXJzXCIsXHJcbiAgICBcImZvbGxvd2Vyc1wiLFxyXG4gICAgXCJmb2xsb3dpbmdzXCIsXHJcbiAgXSk7XHJcbiAgY29uc3QgW2N1cnJlbnRUYWIsIHNldEN1cnJlbnRUYWJdID0gdXNlU3RhdGUoXCJzdG9yaWVzXCIpO1xyXG4gIGNvbnN0IFtmYXZUYWIsIHNldEZhdlRhYl0gPSB1c2VTdGF0ZShcImZhdmF1dGhvcnNcIik7XHJcbiAgY29uc3QgW2Zhdm9yaXRlU3Rvcmllcywgc2V0RmF2b3JpdGVTdG9yaWVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbZmF2b3JpdGVDaGFyYWN0ZXJzLCBzZXRGYXZvcml0ZUNoYXJhY3RlcnNdID0gdXNlU3RhdGUoZmF2Q2hhcmFjdGVycyk7XHJcbiAgY29uc3QgY2hhbmdlVGFiID0gKHRhYikgPT4gc2V0Q3VycmVudFRhYih0YWIpO1xyXG5cclxuICBjb25zdCBhdXRoID0gdXNlQXV0aCgpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGF1dGggJiYgYXV0aC51c2VyLnVpZCAhPT0gcm91dGVyLnF1ZXJ5LmlkKSB7XHJcbiAgICAgIGdldFByb2ZpbGUocm91dGVyLnF1ZXJ5LmlkKTtcclxuXHJcbiAgICAgIGdldFVzZXJTdG9yaWVzKHJvdXRlci5xdWVyeS5pZCk7XHJcbiAgICAgIGdldFVzZXJDaGFyYWN0ZXJzKHJvdXRlci5xdWVyeS5pZCk7XHJcbiAgICAgIGdldEZhdm9yaXRlQXV0aG9ycyhyb3V0ZXIucXVlcnkuaWQpO1xyXG4gICAgICBnZXRGb2xsb3dlcnMocm91dGVyLnF1ZXJ5LmlkKTtcclxuICAgICAgZ2V0RmF2b3JpdGVDaGFyYWN0ZXJzKHJvdXRlci5xdWVyeS5pZCk7XHJcbiAgICAgIGdldEZhdm9yaXRlU3Rvcmllcyhyb3V0ZXIucXVlcnkuaWQpO1xyXG4gICAgICBnZXRVc2VyTG9jYXRpb25zKHJvdXRlci5xdWVyeS5pZCk7XHJcbiAgICB9XHJcbiAgfSwgW3JvdXRlci5xdWVyeS5pZCwgYXV0aF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGF1dGgudXNlcikge1xyXG4gICAgICBnZXRJc0ZvbGxvd2luZyhyb3V0ZXIucXVlcnkuaWQpO1xyXG4gICAgfVxyXG4gIH0sIFthdXRoXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRGYXZvcml0ZVN0b3JpZXMoXHJcbiAgICAgIGZhdlN0b3JpZXMuZmlsdGVyKChzKSA9PiBzLnB1YmxpYyB8fCBzLmF1dGhvcklkID09PSBhdXRoLnVzZXIudWlkKVxyXG4gICAgKTtcclxuICAgIHNldEZhdm9yaXRlQ2hhcmFjdGVycyhcclxuICAgICAgZmF2Q2hhcmFjdGVycy5maWx0ZXIoKHMpID0+IHMucHVibGljIHx8IHMuYXV0aG9ySWQgPT09IGF1dGgudXNlci51aWQpXHJcbiAgICApO1xyXG4gIH0sIFthdXRoLCBmYXZTdG9yaWVzLCBmYXZDaGFyYWN0ZXJzXSk7XHJcblxyXG4gIGNvbnN0IGNoYW5nZUZhdlRhYiA9ICh0YWIpID0+IHNldEZhdlRhYih0YWIpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlXCI+XHJcbiAgICAgIDxMb2FkaW5nU2NyZWVuIGxvYWRpbmc9e2F1dGguaXNMb2FkaW5nfT5cclxuICAgICAgICB7YXV0aC51c2VyICYmIGF1dGgudXNlci51aWQgPT09IHJvdXRlci5xdWVyeS5pZCA/IChcclxuICAgICAgICAgIDxQcm9maWxlUHJpdmUgLz5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPEJhbm5lclxyXG4gICAgICAgICAgICAgIGNvbnRleHQ9XCJwdWJsaWNcIlxyXG4gICAgICAgICAgICAgIHByb2ZpbGU9e3Byb2ZpbGV9XHJcbiAgICAgICAgICAgICAgZmF2QXV0aG9ycz17ZmF2QXV0aG9yc31cclxuICAgICAgICAgICAgICBmb2xsb3dlcnM9e2ZvbGxvd2Vyc31cclxuICAgICAgICAgICAgICBjaGFuZ2VGYXZUYWI9e2NoYW5nZUZhdlRhYn1cclxuICAgICAgICAgICAgICBmYXZUYWI9e2ZhdlRhYn1cclxuICAgICAgICAgICAgICBzZXRDdXJyZW50VGFiPXtzZXRDdXJyZW50VGFifVxyXG4gICAgICAgICAgICAgIGlzRm9sbG93aW5nPXtpc0ZvbGxvd2luZ31cclxuICAgICAgICAgICAgICBmb2xsb3dVc2VyPXtmb2xsb3dVc2VyfVxyXG4gICAgICAgICAgICAgIHVuZm9sbG93VXNlcj17dW5mb2xsb3dVc2VyfVxyXG4gICAgICAgICAgICAgIGF1dGg9e2F1dGh9XHJcbiAgICAgICAgICAgICAgaWQ9e3JvdXRlci5xdWVyeS5pZH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHJvZmlsZS1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgPFRhYnMgY3VycmVudFRhYj17Y3VycmVudFRhYn0gdGFicz17dGFic30gY2hhbmdlVGFiPXtjaGFuZ2VUYWJ9IC8+XHJcbiAgICAgICAgICAgICAge2N1cnJlbnRUYWIgPT09IFwic3Rvcmllc1wiICYmIChcclxuICAgICAgICAgICAgICAgIDxTdG9yaWVzXHJcbiAgICAgICAgICAgICAgICAgIGF1dGg9e2F1dGh9XHJcbiAgICAgICAgICAgICAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9e1wic2hvd1wifVxyXG4gICAgICAgICAgICAgICAgICBzdG9yaWVzPXtzdG9yaWVzfVxyXG4gICAgICAgICAgICAgICAgICB0eXBlPXtcInByaXZhdGVQcm9maWxlXCJ9XHJcbiAgICAgICAgICAgICAgICAgIGNvbnRleHQ9XCJwdWJsaWNcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIHtjdXJyZW50VGFiID09PSBcImNoYXJhY3RlcnNcIiAmJiAoXHJcbiAgICAgICAgICAgICAgICA8Q2hhcmFjdGVycyBjb250ZXh0PVwicHVibGljXCIgY2hhcmFjdGVycz17Y2hhcmFjdGVyc30gLz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIHtjdXJyZW50VGFiID09PSBcImxvY2F0aW9uc1wiICYmIChcclxuICAgICAgICAgICAgICAgIDxMb2NhdGlvbnNcclxuICAgICAgICAgICAgICAgICAgY29udGV4dD1cInB1YmxpY1wiXHJcbiAgICAgICAgICAgICAgICAgIGxvY2F0aW9ucz17bG9jYXRpb25zfVxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicHJvZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAge2N1cnJlbnRUYWIgPT09IFwiZmF2b3JpdGVzIHN0b3JpZXNcIiAmJiAoXHJcbiAgICAgICAgICAgICAgICA8U3Rvcmllc1xyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiZmF2b3JpdGVzXCJcclxuICAgICAgICAgICAgICAgICAgbG9hZGluZz17bG9hZGluZ31cclxuICAgICAgICAgICAgICAgICAgc3Rvcmllcz17ZmF2b3JpdGVTdG9yaWVzfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIHtjdXJyZW50VGFiID09PSBcImZhdm9yaXRlcyBjaGFyYWN0ZXJzXCIgJiYgKFxyXG4gICAgICAgICAgICAgICAgPENoYXJhY3RlcnMgdHlwZT1cImZhdm9yaXRlc1wiIGNoYXJhY3RlcnM9e2Zhdm9yaXRlQ2hhcmFjdGVyc30gLz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIHtjdXJyZW50VGFiID09PSBcImZvbGxvd2Vyc1wiICYmIChcclxuICAgICAgICAgICAgICAgIDxGb2xsb3dlcnNcclxuICAgICAgICAgICAgICAgICAgdGl0bGU9XCJGb2xsb3dlcnNcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPXtcImZvbGxvd2Vyc1wifVxyXG4gICAgICAgICAgICAgICAgICBsZz17NH1cclxuICAgICAgICAgICAgICAgICAgbWQ9ezZ9XHJcbiAgICAgICAgICAgICAgICAgIHNtPXs4fVxyXG4gICAgICAgICAgICAgICAgICB4cz17MTJ9XHJcbiAgICAgICAgICAgICAgICAgIGl0ZW1zPXtmb2xsb3dlcnMuYXV0aG9yc31cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICB7Y3VycmVudFRhYiA9PT0gXCJmb2xsb3dpbmdzXCIgJiYgKFxyXG4gICAgICAgICAgICAgICAgPEZvbGxvd2Vyc1xyXG4gICAgICAgICAgICAgICAgICB0aXRsZT1cIkZvbGxvd2luZ3NcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPXtcImZvbGxvd2luZ3NcIn1cclxuICAgICAgICAgICAgICAgICAgbGc9ezR9XHJcbiAgICAgICAgICAgICAgICAgIG1kPXs2fVxyXG4gICAgICAgICAgICAgICAgICBzbT17OH1cclxuICAgICAgICAgICAgICAgICAgeHM9ezEyfVxyXG4gICAgICAgICAgICAgICAgICBpdGVtcz17ZmF2QXV0aG9ycy5hdXRob3JzfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApfVxyXG4gICAgICA8L0xvYWRpbmdTY3JlZW4+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCBvd25Qcm9wcykgPT4gKHtcclxuICBwcm9maWxlOiBzdGF0ZS5hdXRoLnByb2ZpbGUsXHJcbiAgc3Rvcmllczogc3RhdGUuc3Rvcmllcy51c2VyU3RvcmllcyxcclxuICBjaGFyYWN0ZXJzOiBzdGF0ZS5jaGFyYWN0ZXJzLnVzZXJDaGFyYWN0ZXJzLFxyXG4gIGZhdkF1dGhvcnM6IHN0YXRlLmF1dGguZmF2QXV0aG9ycyxcclxuICBmb2xsb3dlcnM6IHN0YXRlLmF1dGguZm9sbG93ZXJzLFxyXG4gIGZhdkNoYXJhY3RlcnM6IHN0YXRlLmNoYXJhY3RlcnMuZmF2Q2hhcmFjdGVycyxcclxuICBmYXZTdG9yaWVzOiBzdGF0ZS5zdG9yaWVzLmZhdlN0b3JpZXMsXHJcbiAgbG9jYXRpb25zOiBzdGF0ZS5zdG9yaWVzLnVzZXJMb2NhdGlvbnMsXHJcbiAgbG9hZGluZzogc3RhdGUuc3Rvcmllcy5sb2FkaW5nLFxyXG4gIGlzRm9sbG93aW5nOiBzdGF0ZS5hdXRoLmlzRm9sbG93aW5nLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7XHJcbiAgZ2V0UHJvZmlsZSxcclxuICBnZXRVc2VyU3RvcmllcyxcclxuICBnZXRVc2VyQ2hhcmFjdGVycyxcclxuICBnZXRGYXZvcml0ZUF1dGhvcnMsXHJcbiAgZ2V0Rm9sbG93ZXJzLFxyXG4gIGdldEZhdm9yaXRlQ2hhcmFjdGVycyxcclxuICBnZXRGYXZvcml0ZVN0b3JpZXMsXHJcbiAgZ2V0VXNlckxvY2F0aW9ucyxcclxuICBmb2xsb3dVc2VyLFxyXG4gIHVuZm9sbG93VXNlcixcclxuICBnZXRJc0ZvbGxvd2luZyxcclxufSkoUHJvZmlsZSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=