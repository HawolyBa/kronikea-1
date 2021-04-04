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
    if (auth && auth.user.uid !== router.query.id || !auth.isLoading && !auth.user) {
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
      lineNumber: 113,
      columnNumber: 5
    }
  }, __jsx(_components_hoc_LoadingScreen__WEBPACK_IMPORTED_MODULE_16__["default"], {
    loading: auth.isLoading,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 7
    }
  }, auth.user && auth.user.uid === router.query.id ? __jsx(_index__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
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
      lineNumber: 119,
      columnNumber: 13
    }
  }), __jsx("section", {
    className: "profile-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 13
    }
  }, __jsx(_components_profile_Tabs__WEBPACK_IMPORTED_MODULE_7__["default"], {
    currentTab: currentTab,
    tabs: tabs,
    changeTab: changeTab,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 15
    }
  }), currentTab === "stories" && __jsx(_components_profile_Stories__WEBPACK_IMPORTED_MODULE_8__["default"], (_jsx = {
    auth: auth,
    loading: loading,
    type: "show",
    stories: stories
  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "type", "privateProfile"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "context", "public"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__self", _this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__source", {
    fileName: _jsxFileName,
    lineNumber: 136,
    columnNumber: 17
  }), _jsx)), currentTab === "characters" && __jsx(_components_profile_Characters__WEBPACK_IMPORTED_MODULE_9__["default"], {
    context: "public",
    characters: characters,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 17
    }
  }), currentTab === "locations" && __jsx(_components_profile_Locations__WEBPACK_IMPORTED_MODULE_11__["default"], {
    context: "public",
    locations: locations,
    type: "profile",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 17
    }
  }), currentTab === "favorites stories" && __jsx(_components_profile_Stories__WEBPACK_IMPORTED_MODULE_8__["default"], {
    type: "favorites",
    loading: loading,
    stories: favoriteStories,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 17
    }
  }), currentTab === "favorites characters" && __jsx(_components_profile_Characters__WEBPACK_IMPORTED_MODULE_9__["default"], {
    type: "favorites",
    characters: favoriteCharacters,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
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
      lineNumber: 166,
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
      lineNumber: 177,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS8vaW5kZXguanMiXSwibmFtZXMiOlsiUHJvZmlsZSIsImdldFByb2ZpbGUiLCJwcm9maWxlIiwic3RvcmllcyIsImxvY2F0aW9ucyIsImdldFVzZXJTdG9yaWVzIiwiZm9sbG93VXNlciIsInVuZm9sbG93VXNlciIsImdldElzRm9sbG93aW5nIiwiZ2V0VXNlckNoYXJhY3RlcnMiLCJnZXRGYXZvcml0ZUF1dGhvcnMiLCJnZXRGYXZvcml0ZUNoYXJhY3RlcnMiLCJnZXRGYXZvcml0ZVN0b3JpZXMiLCJnZXRVc2VyTG9jYXRpb25zIiwiZ2V0Rm9sbG93ZXJzIiwiY2hhcmFjdGVycyIsImlzRm9sbG93aW5nIiwiZmF2QXV0aG9ycyIsImZvbGxvd2VycyIsImZhdkNoYXJhY3RlcnMiLCJmYXZTdG9yaWVzIiwibG9hZGluZyIsInVzZVN0YXRlIiwidGFicyIsImN1cnJlbnRUYWIiLCJzZXRDdXJyZW50VGFiIiwiZmF2VGFiIiwic2V0RmF2VGFiIiwiZmF2b3JpdGVTdG9yaWVzIiwic2V0RmF2b3JpdGVTdG9yaWVzIiwiZmF2b3JpdGVDaGFyYWN0ZXJzIiwic2V0RmF2b3JpdGVDaGFyYWN0ZXJzIiwiY2hhbmdlVGFiIiwidGFiIiwiYXV0aCIsInVzZUF1dGgiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VyIiwidWlkIiwicXVlcnkiLCJpZCIsImlzTG9hZGluZyIsImZpbHRlciIsInMiLCJhdXRob3JJZCIsImNoYW5nZUZhdlRhYiIsImF1dGhvcnMiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIm93blByb3BzIiwidXNlclN0b3JpZXMiLCJ1c2VyQ2hhcmFjdGVycyIsInVzZXJMb2NhdGlvbnMiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFD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QXJCQSx1RkFOc0M7QUFPdENDLG9CQUFrQixFQUFsQkEsaUZBUHNDO0FBUXRDQyxrQkFBZ0IsRUFBaEJBLCtFQVJzQztBQVN0Q1AsWUFBVSxFQUFWQSxzRUFUc0M7QUFVdENDLGNBQVksRUFBWkEsd0VBVnNDO0FBV3RDQyxnQkFBYyxFQUFkQSwwRUFBY0E7QUFYd0IsQ0FBbEIsQ0FBUCxDQVlaUixPQVpZLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS9baWRdLmY2Y2JlYzkzYjRkNjU5N2Q2ZTliLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBNb2RhbCwgQnV0dG9uIH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmltcG9ydCBQcm9maWxlUHJpdmUgZnJvbSBcIi4uL2luZGV4XCI7XHJcbmltcG9ydCBCYW5uZXIgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvcHJvZmlsZS9CYW5uZXJcIjtcclxuaW1wb3J0IFRhYnMgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvcHJvZmlsZS9UYWJzXCI7XHJcbmltcG9ydCBTdG9yaWVzIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL3Byb2ZpbGUvU3Rvcmllc1wiO1xyXG5pbXBvcnQgQ2hhcmFjdGVycyBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9wcm9maWxlL0NoYXJhY3RlcnNcIjtcclxuaW1wb3J0IEZvbGxvd2VycyBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9wcm9maWxlL0ZvbGxvd2Vyc1wiO1xyXG5pbXBvcnQgTG9jYXRpb25zIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL3Byb2ZpbGUvTG9jYXRpb25zXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIGdldFByb2ZpbGUsXHJcbiAgZm9sbG93VXNlcixcclxuICB1bmZvbGxvd1VzZXIsXHJcbiAgZ2V0SXNGb2xsb3dpbmcsXHJcbn0gZnJvbSBcIi4uLy4uLy4uL3JlZHV4L2FjdGlvbnMvdXNlckFjdGlvbnNcIjtcclxuaW1wb3J0IHtcclxuICBnZXRVc2VyU3RvcmllcyxcclxuICBnZXRGYXZvcml0ZVN0b3JpZXMsXHJcbiAgZ2V0VXNlckxvY2F0aW9ucyxcclxufSBmcm9tIFwiLi4vLi4vLi4vcmVkdXgvYWN0aW9ucy9zdG9yaWVzQWN0aW9uc1wiO1xyXG5pbXBvcnQge1xyXG4gIGdldFVzZXJDaGFyYWN0ZXJzLFxyXG4gIGdldEZhdm9yaXRlQ2hhcmFjdGVycyxcclxufSBmcm9tIFwiLi4vLi4vLi4vcmVkdXgvYWN0aW9ucy9jaGFyYWN0ZXJzQWN0aW9uc1wiO1xyXG5pbXBvcnQge1xyXG4gIGdldEZhdm9yaXRlQXV0aG9ycyxcclxuICBnZXRGb2xsb3dlcnMsXHJcbn0gZnJvbSBcIi4uLy4uLy4uL3JlZHV4L2FjdGlvbnMvdXNlckFjdGlvbnNcIjtcclxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gXCIuLi8uLi8uLi9ob29rcy91c2VySG9va3NcIjtcclxuaW1wb3J0IExvYWRpbmdTY3JlZW4gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaG9jL0xvYWRpbmdTY3JlZW5cIjtcclxuaW1wb3J0IFJlZGlyZWN0Q29tcCBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9ob2MvUmVkaXJlY3RDb21wXCI7XHJcblxyXG5jb25zdCBQcm9maWxlID0gKHtcclxuICBnZXRQcm9maWxlLFxyXG4gIHByb2ZpbGUsXHJcbiAgc3RvcmllcyxcclxuICBsb2NhdGlvbnMsXHJcbiAgZ2V0VXNlclN0b3JpZXMsXHJcbiAgZm9sbG93VXNlcixcclxuICB1bmZvbGxvd1VzZXIsXHJcbiAgZ2V0SXNGb2xsb3dpbmcsXHJcbiAgZ2V0VXNlckNoYXJhY3RlcnMsXHJcbiAgZ2V0RmF2b3JpdGVBdXRob3JzLFxyXG4gIGdldEZhdm9yaXRlQ2hhcmFjdGVycyxcclxuICBnZXRGYXZvcml0ZVN0b3JpZXMsXHJcbiAgZ2V0VXNlckxvY2F0aW9ucyxcclxuICBnZXRGb2xsb3dlcnMsXHJcbiAgY2hhcmFjdGVycyxcclxuICBpc0ZvbGxvd2luZyxcclxuICBmYXZBdXRob3JzLFxyXG4gIGZvbGxvd2VycyxcclxuICBmYXZDaGFyYWN0ZXJzLFxyXG4gIGZhdlN0b3JpZXMsXHJcbiAgbG9hZGluZyxcclxufSkgPT4ge1xyXG4gIGNvbnN0IFt0YWJzXSA9IHVzZVN0YXRlKFtcclxuICAgIFwic3Rvcmllc1wiLFxyXG4gICAgXCJjaGFyYWN0ZXJzXCIsXHJcbiAgICBcImxvY2F0aW9uc1wiLFxyXG4gICAgXCJmYXZvcml0ZXMgc3Rvcmllc1wiLFxyXG4gICAgXCJmYXZvcml0ZXMgY2hhcmFjdGVyc1wiLFxyXG4gICAgXCJmb2xsb3dlcnNcIixcclxuICAgIFwiZm9sbG93aW5nc1wiLFxyXG4gIF0pO1xyXG4gIGNvbnN0IFtjdXJyZW50VGFiLCBzZXRDdXJyZW50VGFiXSA9IHVzZVN0YXRlKFwic3Rvcmllc1wiKTtcclxuICBjb25zdCBbZmF2VGFiLCBzZXRGYXZUYWJdID0gdXNlU3RhdGUoXCJmYXZhdXRob3JzXCIpO1xyXG4gIGNvbnN0IFtmYXZvcml0ZVN0b3JpZXMsIHNldEZhdm9yaXRlU3Rvcmllc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2Zhdm9yaXRlQ2hhcmFjdGVycywgc2V0RmF2b3JpdGVDaGFyYWN0ZXJzXSA9IHVzZVN0YXRlKGZhdkNoYXJhY3RlcnMpO1xyXG4gIGNvbnN0IGNoYW5nZVRhYiA9ICh0YWIpID0+IHNldEN1cnJlbnRUYWIodGFiKTtcclxuXHJcbiAgY29uc3QgYXV0aCA9IHVzZUF1dGgoKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChcclxuICAgICAgKGF1dGggJiYgYXV0aC51c2VyLnVpZCAhPT0gcm91dGVyLnF1ZXJ5LmlkKSB8fFxyXG4gICAgICAoIWF1dGguaXNMb2FkaW5nICYmICFhdXRoLnVzZXIpXHJcbiAgICApIHtcclxuICAgICAgZ2V0UHJvZmlsZShyb3V0ZXIucXVlcnkuaWQpO1xyXG5cclxuICAgICAgZ2V0VXNlclN0b3JpZXMocm91dGVyLnF1ZXJ5LmlkKTtcclxuICAgICAgZ2V0VXNlckNoYXJhY3RlcnMocm91dGVyLnF1ZXJ5LmlkKTtcclxuICAgICAgZ2V0RmF2b3JpdGVBdXRob3JzKHJvdXRlci5xdWVyeS5pZCk7XHJcbiAgICAgIGdldEZvbGxvd2Vycyhyb3V0ZXIucXVlcnkuaWQpO1xyXG4gICAgICBnZXRGYXZvcml0ZUNoYXJhY3RlcnMocm91dGVyLnF1ZXJ5LmlkKTtcclxuICAgICAgZ2V0RmF2b3JpdGVTdG9yaWVzKHJvdXRlci5xdWVyeS5pZCk7XHJcbiAgICAgIGdldFVzZXJMb2NhdGlvbnMocm91dGVyLnF1ZXJ5LmlkKTtcclxuICAgIH1cclxuICB9LCBbcm91dGVyLnF1ZXJ5LmlkLCBhdXRoXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoYXV0aC51c2VyKSB7XHJcbiAgICAgIGdldElzRm9sbG93aW5nKHJvdXRlci5xdWVyeS5pZCk7XHJcbiAgICB9XHJcbiAgfSwgW2F1dGhdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldEZhdm9yaXRlU3RvcmllcyhcclxuICAgICAgZmF2U3Rvcmllcy5maWx0ZXIoKHMpID0+IHMucHVibGljIHx8IHMuYXV0aG9ySWQgPT09IGF1dGgudXNlci51aWQpXHJcbiAgICApO1xyXG4gICAgc2V0RmF2b3JpdGVDaGFyYWN0ZXJzKFxyXG4gICAgICBmYXZDaGFyYWN0ZXJzLmZpbHRlcigocykgPT4gcy5wdWJsaWMgfHwgcy5hdXRob3JJZCA9PT0gYXV0aC51c2VyLnVpZClcclxuICAgICk7XHJcbiAgfSwgW2F1dGgsIGZhdlN0b3JpZXMsIGZhdkNoYXJhY3RlcnNdKTtcclxuXHJcbiAgY29uc3QgY2hhbmdlRmF2VGFiID0gKHRhYikgPT4gc2V0RmF2VGFiKHRhYik7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGVcIj5cclxuICAgICAgPExvYWRpbmdTY3JlZW4gbG9hZGluZz17YXV0aC5pc0xvYWRpbmd9PlxyXG4gICAgICAgIHthdXRoLnVzZXIgJiYgYXV0aC51c2VyLnVpZCA9PT0gcm91dGVyLnF1ZXJ5LmlkID8gKFxyXG4gICAgICAgICAgPFByb2ZpbGVQcml2ZSAvPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8QmFubmVyXHJcbiAgICAgICAgICAgICAgY29udGV4dD1cInB1YmxpY1wiXHJcbiAgICAgICAgICAgICAgcHJvZmlsZT17cHJvZmlsZX1cclxuICAgICAgICAgICAgICBmYXZBdXRob3JzPXtmYXZBdXRob3JzfVxyXG4gICAgICAgICAgICAgIGZvbGxvd2Vycz17Zm9sbG93ZXJzfVxyXG4gICAgICAgICAgICAgIGNoYW5nZUZhdlRhYj17Y2hhbmdlRmF2VGFifVxyXG4gICAgICAgICAgICAgIGZhdlRhYj17ZmF2VGFifVxyXG4gICAgICAgICAgICAgIHNldEN1cnJlbnRUYWI9e3NldEN1cnJlbnRUYWJ9XHJcbiAgICAgICAgICAgICAgaXNGb2xsb3dpbmc9e2lzRm9sbG93aW5nfVxyXG4gICAgICAgICAgICAgIGZvbGxvd1VzZXI9e2ZvbGxvd1VzZXJ9XHJcbiAgICAgICAgICAgICAgdW5mb2xsb3dVc2VyPXt1bmZvbGxvd1VzZXJ9XHJcbiAgICAgICAgICAgICAgYXV0aD17YXV0aH1cclxuICAgICAgICAgICAgICBpZD17cm91dGVyLnF1ZXJ5LmlkfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwcm9maWxlLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICA8VGFicyBjdXJyZW50VGFiPXtjdXJyZW50VGFifSB0YWJzPXt0YWJzfSBjaGFuZ2VUYWI9e2NoYW5nZVRhYn0gLz5cclxuICAgICAgICAgICAgICB7Y3VycmVudFRhYiA9PT0gXCJzdG9yaWVzXCIgJiYgKFxyXG4gICAgICAgICAgICAgICAgPFN0b3JpZXNcclxuICAgICAgICAgICAgICAgICAgYXV0aD17YXV0aH1cclxuICAgICAgICAgICAgICAgICAgbG9hZGluZz17bG9hZGluZ31cclxuICAgICAgICAgICAgICAgICAgdHlwZT17XCJzaG93XCJ9XHJcbiAgICAgICAgICAgICAgICAgIHN0b3JpZXM9e3N0b3JpZXN9XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9e1wicHJpdmF0ZVByb2ZpbGVcIn1cclxuICAgICAgICAgICAgICAgICAgY29udGV4dD1cInB1YmxpY1wiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAge2N1cnJlbnRUYWIgPT09IFwiY2hhcmFjdGVyc1wiICYmIChcclxuICAgICAgICAgICAgICAgIDxDaGFyYWN0ZXJzIGNvbnRleHQ9XCJwdWJsaWNcIiBjaGFyYWN0ZXJzPXtjaGFyYWN0ZXJzfSAvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAge2N1cnJlbnRUYWIgPT09IFwibG9jYXRpb25zXCIgJiYgKFxyXG4gICAgICAgICAgICAgICAgPExvY2F0aW9uc1xyXG4gICAgICAgICAgICAgICAgICBjb250ZXh0PVwicHVibGljXCJcclxuICAgICAgICAgICAgICAgICAgbG9jYXRpb25zPXtsb2NhdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJwcm9maWxlXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICB7Y3VycmVudFRhYiA9PT0gXCJmYXZvcml0ZXMgc3Rvcmllc1wiICYmIChcclxuICAgICAgICAgICAgICAgIDxTdG9yaWVzXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJmYXZvcml0ZXNcIlxyXG4gICAgICAgICAgICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxyXG4gICAgICAgICAgICAgICAgICBzdG9yaWVzPXtmYXZvcml0ZVN0b3JpZXN9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAge2N1cnJlbnRUYWIgPT09IFwiZmF2b3JpdGVzIGNoYXJhY3RlcnNcIiAmJiAoXHJcbiAgICAgICAgICAgICAgICA8Q2hhcmFjdGVycyB0eXBlPVwiZmF2b3JpdGVzXCIgY2hhcmFjdGVycz17ZmF2b3JpdGVDaGFyYWN0ZXJzfSAvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAge2N1cnJlbnRUYWIgPT09IFwiZm9sbG93ZXJzXCIgJiYgKFxyXG4gICAgICAgICAgICAgICAgPEZvbGxvd2Vyc1xyXG4gICAgICAgICAgICAgICAgICB0aXRsZT1cIkZvbGxvd2Vyc1wiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9e1wiZm9sbG93ZXJzXCJ9XHJcbiAgICAgICAgICAgICAgICAgIGxnPXs0fVxyXG4gICAgICAgICAgICAgICAgICBtZD17Nn1cclxuICAgICAgICAgICAgICAgICAgc209ezh9XHJcbiAgICAgICAgICAgICAgICAgIHhzPXsxMn1cclxuICAgICAgICAgICAgICAgICAgaXRlbXM9e2ZvbGxvd2Vycy5hdXRob3JzfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIHtjdXJyZW50VGFiID09PSBcImZvbGxvd2luZ3NcIiAmJiAoXHJcbiAgICAgICAgICAgICAgICA8Rm9sbG93ZXJzXHJcbiAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRm9sbG93aW5nc1wiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9e1wiZm9sbG93aW5nc1wifVxyXG4gICAgICAgICAgICAgICAgICBsZz17NH1cclxuICAgICAgICAgICAgICAgICAgbWQ9ezZ9XHJcbiAgICAgICAgICAgICAgICAgIHNtPXs4fVxyXG4gICAgICAgICAgICAgICAgICB4cz17MTJ9XHJcbiAgICAgICAgICAgICAgICAgIGl0ZW1zPXtmYXZBdXRob3JzLmF1dGhvcnN9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvTG9hZGluZ1NjcmVlbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIG93blByb3BzKSA9PiAoe1xyXG4gIHByb2ZpbGU6IHN0YXRlLmF1dGgucHJvZmlsZSxcclxuICBzdG9yaWVzOiBzdGF0ZS5zdG9yaWVzLnVzZXJTdG9yaWVzLFxyXG4gIGNoYXJhY3RlcnM6IHN0YXRlLmNoYXJhY3RlcnMudXNlckNoYXJhY3RlcnMsXHJcbiAgZmF2QXV0aG9yczogc3RhdGUuYXV0aC5mYXZBdXRob3JzLFxyXG4gIGZvbGxvd2Vyczogc3RhdGUuYXV0aC5mb2xsb3dlcnMsXHJcbiAgZmF2Q2hhcmFjdGVyczogc3RhdGUuY2hhcmFjdGVycy5mYXZDaGFyYWN0ZXJzLFxyXG4gIGZhdlN0b3JpZXM6IHN0YXRlLnN0b3JpZXMuZmF2U3RvcmllcyxcclxuICBsb2NhdGlvbnM6IHN0YXRlLnN0b3JpZXMudXNlckxvY2F0aW9ucyxcclxuICBsb2FkaW5nOiBzdGF0ZS5zdG9yaWVzLmxvYWRpbmcsXHJcbiAgaXNGb2xsb3dpbmc6IHN0YXRlLmF1dGguaXNGb2xsb3dpbmcsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHtcclxuICBnZXRQcm9maWxlLFxyXG4gIGdldFVzZXJTdG9yaWVzLFxyXG4gIGdldFVzZXJDaGFyYWN0ZXJzLFxyXG4gIGdldEZhdm9yaXRlQXV0aG9ycyxcclxuICBnZXRGb2xsb3dlcnMsXHJcbiAgZ2V0RmF2b3JpdGVDaGFyYWN0ZXJzLFxyXG4gIGdldEZhdm9yaXRlU3RvcmllcyxcclxuICBnZXRVc2VyTG9jYXRpb25zLFxyXG4gIGZvbGxvd1VzZXIsXHJcbiAgdW5mb2xsb3dVc2VyLFxyXG4gIGdldElzRm9sbG93aW5nLFxyXG59KShQcm9maWxlKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==