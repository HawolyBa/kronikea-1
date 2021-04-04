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
    if (router.query.id) {
      console.log("yo");
      getProfile(router.query.id);
      getUserStories(router.query.id);
      getUserCharacters(router.query.id);
      getFavoriteAuthors(router.query.id);
      getFollowers(router.query.id);
      getFavoriteCharacters(router.query.id);
      getFavoriteStories(router.query.id);
      getUserLocations(router.query.id);
    }
  }, [router.query.id]);
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
      lineNumber: 111,
      columnNumber: 5
    }
  }, __jsx(_components_hoc_LoadingScreen__WEBPACK_IMPORTED_MODULE_16__["default"], {
    loading: auth.isLoading,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 7
    }
  }, auth.user && auth.user.uid === router.query.id ? __jsx(_index__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
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
      lineNumber: 117,
      columnNumber: 13
    }
  }), __jsx("section", {
    className: "profile-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 13
    }
  }, __jsx(_components_profile_Tabs__WEBPACK_IMPORTED_MODULE_7__["default"], {
    currentTab: currentTab,
    tabs: tabs,
    changeTab: changeTab,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 15
    }
  }), currentTab === "stories" && __jsx(_components_profile_Stories__WEBPACK_IMPORTED_MODULE_8__["default"], (_jsx = {
    auth: auth,
    loading: loading,
    type: "show",
    stories: stories
  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "type", "privateProfile"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "context", "public"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__self", _this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__source", {
    fileName: _jsxFileName,
    lineNumber: 134,
    columnNumber: 17
  }), _jsx)), currentTab === "characters" && __jsx(_components_profile_Characters__WEBPACK_IMPORTED_MODULE_9__["default"], {
    context: "public",
    characters: characters,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 17
    }
  }), currentTab === "locations" && __jsx(_components_profile_Locations__WEBPACK_IMPORTED_MODULE_11__["default"], {
    context: "public",
    locations: locations,
    type: "profile",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 17
    }
  }), currentTab === "favorites stories" && __jsx(_components_profile_Stories__WEBPACK_IMPORTED_MODULE_8__["default"], {
    type: "favorites",
    loading: loading,
    stories: favoriteStories,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 17
    }
  }), currentTab === "favorites characters" && __jsx(_components_profile_Characters__WEBPACK_IMPORTED_MODULE_9__["default"], {
    type: "favorites",
    characters: favoriteCharacters,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
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
      lineNumber: 164,
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
      lineNumber: 175,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS8vaW5kZXguanMiXSwibmFtZXMiOlsiUHJvZmlsZSIsImdldFByb2ZpbGUiLCJwcm9maWxlIiwic3RvcmllcyIsImxvY2F0aW9ucyIsImdldFVzZXJTdG9yaWVzIiwiZm9sbG93VXNlciIsInVuZm9sbG93VXNlciIsImdldElzRm9sbG93aW5nIiwiZ2V0VXNlckNoYXJhY3RlcnMiLCJnZXRGYXZvcml0ZUF1dGhvcnMiLCJnZXRGYXZvcml0ZUNoYXJhY3RlcnMiLCJnZXRGYXZvcml0ZVN0b3JpZXMiLCJnZXRVc2VyTG9jYXRpb25zIiwiZ2V0Rm9sbG93ZXJzIiwiY2hhcmFjdGVycyIsImlzRm9sbG93aW5nIiwiZmF2QXV0aG9ycyIsImZvbGxvd2VycyIsImZhdkNoYXJhY3RlcnMiLCJmYXZTdG9yaWVzIiwibG9hZGluZyIsInVzZVN0YXRlIiwidGFicyIsImN1cnJlbnRUYWIiLCJzZXRDdXJyZW50VGFiIiwiZmF2VGFiIiwic2V0RmF2VGFiIiwiZmF2b3JpdGVTdG9yaWVzIiwic2V0RmF2b3JpdGVTdG9yaWVzIiwiZmF2b3JpdGVDaGFyYWN0ZXJzIiwic2V0RmF2b3JpdGVDaGFyYWN0ZXJzIiwiY2hhbmdlVGFiIiwidGFiIiwiYXV0aCIsInVzZUF1dGgiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJxdWVyeSIsImlkIiwiY29uc29sZSIsImxvZyIsInVzZXIiLCJmaWx0ZXIiLCJzIiwiYXV0aG9ySWQiLCJ1aWQiLCJjaGFuZ2VGYXZUYWIiLCJpc0xvYWRpbmciLCJhdXRob3JzIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJvd25Qcm9wcyIsInVzZXJTdG9yaWVzIiwidXNlckNoYXJhY3RlcnMiLCJ1c2VyTG9jYXRpb25zIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FB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UnNDO0FBU3RDUCxZQUFVLEVBQVZBLHNFQVRzQztBQVV0Q0MsY0FBWSxFQUFaQSx3RUFWc0M7QUFXdENDLGdCQUFjLEVBQWRBLDBFQUFjQTtBQVh3QixDQUFsQixDQUFQLENBWVpSLE9BWlksQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlL1tpZF0uYjQxZGE5ODViN2JiNmYxOGMxNzkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IE1vZGFsLCBCdXR0b24gfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuaW1wb3J0IFByb2ZpbGVQcml2ZSBmcm9tIFwiLi4vaW5kZXhcIjtcclxuaW1wb3J0IEJhbm5lciBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9wcm9maWxlL0Jhbm5lclwiO1xyXG5pbXBvcnQgVGFicyBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9wcm9maWxlL1RhYnNcIjtcclxuaW1wb3J0IFN0b3JpZXMgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvcHJvZmlsZS9TdG9yaWVzXCI7XHJcbmltcG9ydCBDaGFyYWN0ZXJzIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL3Byb2ZpbGUvQ2hhcmFjdGVyc1wiO1xyXG5pbXBvcnQgRm9sbG93ZXJzIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL3Byb2ZpbGUvRm9sbG93ZXJzXCI7XHJcbmltcG9ydCBMb2NhdGlvbnMgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvcHJvZmlsZS9Mb2NhdGlvbnNcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgZ2V0UHJvZmlsZSxcclxuICBmb2xsb3dVc2VyLFxyXG4gIHVuZm9sbG93VXNlcixcclxuICBnZXRJc0ZvbGxvd2luZyxcclxufSBmcm9tIFwiLi4vLi4vLi4vcmVkdXgvYWN0aW9ucy91c2VyQWN0aW9uc1wiO1xyXG5pbXBvcnQge1xyXG4gIGdldFVzZXJTdG9yaWVzLFxyXG4gIGdldEZhdm9yaXRlU3RvcmllcyxcclxuICBnZXRVc2VyTG9jYXRpb25zLFxyXG59IGZyb20gXCIuLi8uLi8uLi9yZWR1eC9hY3Rpb25zL3N0b3JpZXNBY3Rpb25zXCI7XHJcbmltcG9ydCB7XHJcbiAgZ2V0VXNlckNoYXJhY3RlcnMsXHJcbiAgZ2V0RmF2b3JpdGVDaGFyYWN0ZXJzLFxyXG59IGZyb20gXCIuLi8uLi8uLi9yZWR1eC9hY3Rpb25zL2NoYXJhY3RlcnNBY3Rpb25zXCI7XHJcbmltcG9ydCB7XHJcbiAgZ2V0RmF2b3JpdGVBdXRob3JzLFxyXG4gIGdldEZvbGxvd2VycyxcclxufSBmcm9tIFwiLi4vLi4vLi4vcmVkdXgvYWN0aW9ucy91c2VyQWN0aW9uc1wiO1xyXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSBcIi4uLy4uLy4uL2hvb2tzL3VzZXJIb29rc1wiO1xyXG5pbXBvcnQgTG9hZGluZ1NjcmVlbiBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9ob2MvTG9hZGluZ1NjcmVlblwiO1xyXG5pbXBvcnQgUmVkaXJlY3RDb21wIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2hvYy9SZWRpcmVjdENvbXBcIjtcclxuXHJcbmNvbnN0IFByb2ZpbGUgPSAoe1xyXG4gIGdldFByb2ZpbGUsXHJcbiAgcHJvZmlsZSxcclxuICBzdG9yaWVzLFxyXG4gIGxvY2F0aW9ucyxcclxuICBnZXRVc2VyU3RvcmllcyxcclxuICBmb2xsb3dVc2VyLFxyXG4gIHVuZm9sbG93VXNlcixcclxuICBnZXRJc0ZvbGxvd2luZyxcclxuICBnZXRVc2VyQ2hhcmFjdGVycyxcclxuICBnZXRGYXZvcml0ZUF1dGhvcnMsXHJcbiAgZ2V0RmF2b3JpdGVDaGFyYWN0ZXJzLFxyXG4gIGdldEZhdm9yaXRlU3RvcmllcyxcclxuICBnZXRVc2VyTG9jYXRpb25zLFxyXG4gIGdldEZvbGxvd2VycyxcclxuICBjaGFyYWN0ZXJzLFxyXG4gIGlzRm9sbG93aW5nLFxyXG4gIGZhdkF1dGhvcnMsXHJcbiAgZm9sbG93ZXJzLFxyXG4gIGZhdkNoYXJhY3RlcnMsXHJcbiAgZmF2U3RvcmllcyxcclxuICBsb2FkaW5nLFxyXG59KSA9PiB7XHJcbiAgY29uc3QgW3RhYnNdID0gdXNlU3RhdGUoW1xyXG4gICAgXCJzdG9yaWVzXCIsXHJcbiAgICBcImNoYXJhY3RlcnNcIixcclxuICAgIFwibG9jYXRpb25zXCIsXHJcbiAgICBcImZhdm9yaXRlcyBzdG9yaWVzXCIsXHJcbiAgICBcImZhdm9yaXRlcyBjaGFyYWN0ZXJzXCIsXHJcbiAgICBcImZvbGxvd2Vyc1wiLFxyXG4gICAgXCJmb2xsb3dpbmdzXCIsXHJcbiAgXSk7XHJcbiAgY29uc3QgW2N1cnJlbnRUYWIsIHNldEN1cnJlbnRUYWJdID0gdXNlU3RhdGUoXCJzdG9yaWVzXCIpO1xyXG4gIGNvbnN0IFtmYXZUYWIsIHNldEZhdlRhYl0gPSB1c2VTdGF0ZShcImZhdmF1dGhvcnNcIik7XHJcbiAgY29uc3QgW2Zhdm9yaXRlU3Rvcmllcywgc2V0RmF2b3JpdGVTdG9yaWVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbZmF2b3JpdGVDaGFyYWN0ZXJzLCBzZXRGYXZvcml0ZUNoYXJhY3RlcnNdID0gdXNlU3RhdGUoZmF2Q2hhcmFjdGVycyk7XHJcbiAgY29uc3QgY2hhbmdlVGFiID0gKHRhYikgPT4gc2V0Q3VycmVudFRhYih0YWIpO1xyXG5cclxuICBjb25zdCBhdXRoID0gdXNlQXV0aCgpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHJvdXRlci5xdWVyeS5pZCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcInlvXCIpO1xyXG4gICAgICBnZXRQcm9maWxlKHJvdXRlci5xdWVyeS5pZCk7XHJcblxyXG4gICAgICBnZXRVc2VyU3Rvcmllcyhyb3V0ZXIucXVlcnkuaWQpO1xyXG4gICAgICBnZXRVc2VyQ2hhcmFjdGVycyhyb3V0ZXIucXVlcnkuaWQpO1xyXG4gICAgICBnZXRGYXZvcml0ZUF1dGhvcnMocm91dGVyLnF1ZXJ5LmlkKTtcclxuICAgICAgZ2V0Rm9sbG93ZXJzKHJvdXRlci5xdWVyeS5pZCk7XHJcbiAgICAgIGdldEZhdm9yaXRlQ2hhcmFjdGVycyhyb3V0ZXIucXVlcnkuaWQpO1xyXG4gICAgICBnZXRGYXZvcml0ZVN0b3JpZXMocm91dGVyLnF1ZXJ5LmlkKTtcclxuICAgICAgZ2V0VXNlckxvY2F0aW9ucyhyb3V0ZXIucXVlcnkuaWQpO1xyXG4gICAgfVxyXG4gIH0sIFtyb3V0ZXIucXVlcnkuaWRdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChhdXRoLnVzZXIpIHtcclxuICAgICAgZ2V0SXNGb2xsb3dpbmcocm91dGVyLnF1ZXJ5LmlkKTtcclxuICAgIH1cclxuICB9LCBbYXV0aF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0RmF2b3JpdGVTdG9yaWVzKFxyXG4gICAgICBmYXZTdG9yaWVzLmZpbHRlcigocykgPT4gcy5wdWJsaWMgfHwgcy5hdXRob3JJZCA9PT0gYXV0aC51c2VyLnVpZClcclxuICAgICk7XHJcbiAgICBzZXRGYXZvcml0ZUNoYXJhY3RlcnMoXHJcbiAgICAgIGZhdkNoYXJhY3RlcnMuZmlsdGVyKChzKSA9PiBzLnB1YmxpYyB8fCBzLmF1dGhvcklkID09PSBhdXRoLnVzZXIudWlkKVxyXG4gICAgKTtcclxuICB9LCBbYXV0aCwgZmF2U3RvcmllcywgZmF2Q2hhcmFjdGVyc10pO1xyXG5cclxuICBjb25zdCBjaGFuZ2VGYXZUYWIgPSAodGFiKSA9PiBzZXRGYXZUYWIodGFiKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZVwiPlxyXG4gICAgICA8TG9hZGluZ1NjcmVlbiBsb2FkaW5nPXthdXRoLmlzTG9hZGluZ30+XHJcbiAgICAgICAge2F1dGgudXNlciAmJiBhdXRoLnVzZXIudWlkID09PSByb3V0ZXIucXVlcnkuaWQgPyAoXHJcbiAgICAgICAgICA8UHJvZmlsZVByaXZlIC8+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxCYW5uZXJcclxuICAgICAgICAgICAgICBjb250ZXh0PVwicHVibGljXCJcclxuICAgICAgICAgICAgICBwcm9maWxlPXtwcm9maWxlfVxyXG4gICAgICAgICAgICAgIGZhdkF1dGhvcnM9e2ZhdkF1dGhvcnN9XHJcbiAgICAgICAgICAgICAgZm9sbG93ZXJzPXtmb2xsb3dlcnN9XHJcbiAgICAgICAgICAgICAgY2hhbmdlRmF2VGFiPXtjaGFuZ2VGYXZUYWJ9XHJcbiAgICAgICAgICAgICAgZmF2VGFiPXtmYXZUYWJ9XHJcbiAgICAgICAgICAgICAgc2V0Q3VycmVudFRhYj17c2V0Q3VycmVudFRhYn1cclxuICAgICAgICAgICAgICBpc0ZvbGxvd2luZz17aXNGb2xsb3dpbmd9XHJcbiAgICAgICAgICAgICAgZm9sbG93VXNlcj17Zm9sbG93VXNlcn1cclxuICAgICAgICAgICAgICB1bmZvbGxvd1VzZXI9e3VuZm9sbG93VXNlcn1cclxuICAgICAgICAgICAgICBhdXRoPXthdXRofVxyXG4gICAgICAgICAgICAgIGlkPXtyb3V0ZXIucXVlcnkuaWR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInByb2ZpbGUtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgIDxUYWJzIGN1cnJlbnRUYWI9e2N1cnJlbnRUYWJ9IHRhYnM9e3RhYnN9IGNoYW5nZVRhYj17Y2hhbmdlVGFifSAvPlxyXG4gICAgICAgICAgICAgIHtjdXJyZW50VGFiID09PSBcInN0b3JpZXNcIiAmJiAoXHJcbiAgICAgICAgICAgICAgICA8U3Rvcmllc1xyXG4gICAgICAgICAgICAgICAgICBhdXRoPXthdXRofVxyXG4gICAgICAgICAgICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxyXG4gICAgICAgICAgICAgICAgICB0eXBlPXtcInNob3dcIn1cclxuICAgICAgICAgICAgICAgICAgc3Rvcmllcz17c3Rvcmllc31cclxuICAgICAgICAgICAgICAgICAgdHlwZT17XCJwcml2YXRlUHJvZmlsZVwifVxyXG4gICAgICAgICAgICAgICAgICBjb250ZXh0PVwicHVibGljXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICB7Y3VycmVudFRhYiA9PT0gXCJjaGFyYWN0ZXJzXCIgJiYgKFxyXG4gICAgICAgICAgICAgICAgPENoYXJhY3RlcnMgY29udGV4dD1cInB1YmxpY1wiIGNoYXJhY3RlcnM9e2NoYXJhY3RlcnN9IC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICB7Y3VycmVudFRhYiA9PT0gXCJsb2NhdGlvbnNcIiAmJiAoXHJcbiAgICAgICAgICAgICAgICA8TG9jYXRpb25zXHJcbiAgICAgICAgICAgICAgICAgIGNvbnRleHQ9XCJwdWJsaWNcIlxyXG4gICAgICAgICAgICAgICAgICBsb2NhdGlvbnM9e2xvY2F0aW9uc31cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInByb2ZpbGVcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIHtjdXJyZW50VGFiID09PSBcImZhdm9yaXRlcyBzdG9yaWVzXCIgJiYgKFxyXG4gICAgICAgICAgICAgICAgPFN0b3JpZXNcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cImZhdm9yaXRlc1wiXHJcbiAgICAgICAgICAgICAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICAgIHN0b3JpZXM9e2Zhdm9yaXRlU3Rvcmllc31cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICB7Y3VycmVudFRhYiA9PT0gXCJmYXZvcml0ZXMgY2hhcmFjdGVyc1wiICYmIChcclxuICAgICAgICAgICAgICAgIDxDaGFyYWN0ZXJzIHR5cGU9XCJmYXZvcml0ZXNcIiBjaGFyYWN0ZXJzPXtmYXZvcml0ZUNoYXJhY3RlcnN9IC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICB7Y3VycmVudFRhYiA9PT0gXCJmb2xsb3dlcnNcIiAmJiAoXHJcbiAgICAgICAgICAgICAgICA8Rm9sbG93ZXJzXHJcbiAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRm9sbG93ZXJzXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT17XCJmb2xsb3dlcnNcIn1cclxuICAgICAgICAgICAgICAgICAgbGc9ezR9XHJcbiAgICAgICAgICAgICAgICAgIG1kPXs2fVxyXG4gICAgICAgICAgICAgICAgICBzbT17OH1cclxuICAgICAgICAgICAgICAgICAgeHM9ezEyfVxyXG4gICAgICAgICAgICAgICAgICBpdGVtcz17Zm9sbG93ZXJzLmF1dGhvcnN9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAge2N1cnJlbnRUYWIgPT09IFwiZm9sbG93aW5nc1wiICYmIChcclxuICAgICAgICAgICAgICAgIDxGb2xsb3dlcnNcclxuICAgICAgICAgICAgICAgICAgdGl0bGU9XCJGb2xsb3dpbmdzXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT17XCJmb2xsb3dpbmdzXCJ9XHJcbiAgICAgICAgICAgICAgICAgIGxnPXs0fVxyXG4gICAgICAgICAgICAgICAgICBtZD17Nn1cclxuICAgICAgICAgICAgICAgICAgc209ezh9XHJcbiAgICAgICAgICAgICAgICAgIHhzPXsxMn1cclxuICAgICAgICAgICAgICAgICAgaXRlbXM9e2ZhdkF1dGhvcnMuYXV0aG9yc31cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9Mb2FkaW5nU2NyZWVuPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgb3duUHJvcHMpID0+ICh7XHJcbiAgcHJvZmlsZTogc3RhdGUuYXV0aC5wcm9maWxlLFxyXG4gIHN0b3JpZXM6IHN0YXRlLnN0b3JpZXMudXNlclN0b3JpZXMsXHJcbiAgY2hhcmFjdGVyczogc3RhdGUuY2hhcmFjdGVycy51c2VyQ2hhcmFjdGVycyxcclxuICBmYXZBdXRob3JzOiBzdGF0ZS5hdXRoLmZhdkF1dGhvcnMsXHJcbiAgZm9sbG93ZXJzOiBzdGF0ZS5hdXRoLmZvbGxvd2VycyxcclxuICBmYXZDaGFyYWN0ZXJzOiBzdGF0ZS5jaGFyYWN0ZXJzLmZhdkNoYXJhY3RlcnMsXHJcbiAgZmF2U3Rvcmllczogc3RhdGUuc3Rvcmllcy5mYXZTdG9yaWVzLFxyXG4gIGxvY2F0aW9uczogc3RhdGUuc3Rvcmllcy51c2VyTG9jYXRpb25zLFxyXG4gIGxvYWRpbmc6IHN0YXRlLnN0b3JpZXMubG9hZGluZyxcclxuICBpc0ZvbGxvd2luZzogc3RhdGUuYXV0aC5pc0ZvbGxvd2luZyxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywge1xyXG4gIGdldFByb2ZpbGUsXHJcbiAgZ2V0VXNlclN0b3JpZXMsXHJcbiAgZ2V0VXNlckNoYXJhY3RlcnMsXHJcbiAgZ2V0RmF2b3JpdGVBdXRob3JzLFxyXG4gIGdldEZvbGxvd2VycyxcclxuICBnZXRGYXZvcml0ZUNoYXJhY3RlcnMsXHJcbiAgZ2V0RmF2b3JpdGVTdG9yaWVzLFxyXG4gIGdldFVzZXJMb2NhdGlvbnMsXHJcbiAgZm9sbG93VXNlcixcclxuICB1bmZvbGxvd1VzZXIsXHJcbiAgZ2V0SXNGb2xsb3dpbmcsXHJcbn0pKFByb2ZpbGUpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9