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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS8vaW5kZXguanMiXSwibmFtZXMiOlsiUHJvZmlsZSIsImdldFByb2ZpbGUiLCJwcm9maWxlIiwic3RvcmllcyIsImxvY2F0aW9ucyIsImdldFVzZXJTdG9yaWVzIiwiZm9sbG93VXNlciIsInVuZm9sbG93VXNlciIsImdldElzRm9sbG93aW5nIiwiZ2V0VXNlckNoYXJhY3RlcnMiLCJnZXRGYXZvcml0ZUF1dGhvcnMiLCJnZXRGYXZvcml0ZUNoYXJhY3RlcnMiLCJnZXRGYXZvcml0ZVN0b3JpZXMiLCJnZXRVc2VyTG9jYXRpb25zIiwiZ2V0Rm9sbG93ZXJzIiwiY2hhcmFjdGVycyIsImlzRm9sbG93aW5nIiwiZmF2QXV0aG9ycyIsImZvbGxvd2VycyIsImZhdkNoYXJhY3RlcnMiLCJmYXZTdG9yaWVzIiwibG9hZGluZyIsInVzZVN0YXRlIiwidGFicyIsImN1cnJlbnRUYWIiLCJzZXRDdXJyZW50VGFiIiwiZmF2VGFiIiwic2V0RmF2VGFiIiwiZmF2b3JpdGVTdG9yaWVzIiwic2V0RmF2b3JpdGVTdG9yaWVzIiwiZmF2b3JpdGVDaGFyYWN0ZXJzIiwic2V0RmF2b3JpdGVDaGFyYWN0ZXJzIiwiY2hhbmdlVGFiIiwidGFiIiwiYXV0aCIsInVzZUF1dGgiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJxdWVyeSIsImlkIiwidXNlciIsImZpbHRlciIsInMiLCJhdXRob3JJZCIsInVpZCIsImNoYW5nZUZhdlRhYiIsImlzTG9hZGluZyIsImF1dGhvcnMiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIm93blByb3BzIiwidXNlclN0b3JpZXMiLCJ1c2VyQ2hhcmFjdGVycyIsInVzZXJMb2NhdGlvbnMiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFD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QVZzQztBQVd0Q0MsZ0JBQWMsRUFBZEEsMEVBQWNBO0FBWHdCLENBQWxCLENBQVAsQ0FZWlIsT0FaWSxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUvW2lkXS44OWVkNWNmNTUxMDY5MTVjZDI3MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgTW9kYWwsIEJ1dHRvbiB9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5pbXBvcnQgUHJvZmlsZVByaXZlIGZyb20gXCIuLi9pbmRleFwiO1xyXG5pbXBvcnQgQmFubmVyIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL3Byb2ZpbGUvQmFubmVyXCI7XHJcbmltcG9ydCBUYWJzIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL3Byb2ZpbGUvVGFic1wiO1xyXG5pbXBvcnQgU3RvcmllcyBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9wcm9maWxlL1N0b3JpZXNcIjtcclxuaW1wb3J0IENoYXJhY3RlcnMgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvcHJvZmlsZS9DaGFyYWN0ZXJzXCI7XHJcbmltcG9ydCBGb2xsb3dlcnMgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvcHJvZmlsZS9Gb2xsb3dlcnNcIjtcclxuaW1wb3J0IExvY2F0aW9ucyBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9wcm9maWxlL0xvY2F0aW9uc1wiO1xyXG5cclxuaW1wb3J0IHtcclxuICBnZXRQcm9maWxlLFxyXG4gIGZvbGxvd1VzZXIsXHJcbiAgdW5mb2xsb3dVc2VyLFxyXG4gIGdldElzRm9sbG93aW5nLFxyXG59IGZyb20gXCIuLi8uLi8uLi9yZWR1eC9hY3Rpb25zL3VzZXJBY3Rpb25zXCI7XHJcbmltcG9ydCB7XHJcbiAgZ2V0VXNlclN0b3JpZXMsXHJcbiAgZ2V0RmF2b3JpdGVTdG9yaWVzLFxyXG4gIGdldFVzZXJMb2NhdGlvbnMsXHJcbn0gZnJvbSBcIi4uLy4uLy4uL3JlZHV4L2FjdGlvbnMvc3Rvcmllc0FjdGlvbnNcIjtcclxuaW1wb3J0IHtcclxuICBnZXRVc2VyQ2hhcmFjdGVycyxcclxuICBnZXRGYXZvcml0ZUNoYXJhY3RlcnMsXHJcbn0gZnJvbSBcIi4uLy4uLy4uL3JlZHV4L2FjdGlvbnMvY2hhcmFjdGVyc0FjdGlvbnNcIjtcclxuaW1wb3J0IHtcclxuICBnZXRGYXZvcml0ZUF1dGhvcnMsXHJcbiAgZ2V0Rm9sbG93ZXJzLFxyXG59IGZyb20gXCIuLi8uLi8uLi9yZWR1eC9hY3Rpb25zL3VzZXJBY3Rpb25zXCI7XHJcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tIFwiLi4vLi4vLi4vaG9va3MvdXNlckhvb2tzXCI7XHJcbmltcG9ydCBMb2FkaW5nU2NyZWVuIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2hvYy9Mb2FkaW5nU2NyZWVuXCI7XHJcbmltcG9ydCBSZWRpcmVjdENvbXAgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaG9jL1JlZGlyZWN0Q29tcFwiO1xyXG5cclxuY29uc3QgUHJvZmlsZSA9ICh7XHJcbiAgZ2V0UHJvZmlsZSxcclxuICBwcm9maWxlLFxyXG4gIHN0b3JpZXMsXHJcbiAgbG9jYXRpb25zLFxyXG4gIGdldFVzZXJTdG9yaWVzLFxyXG4gIGZvbGxvd1VzZXIsXHJcbiAgdW5mb2xsb3dVc2VyLFxyXG4gIGdldElzRm9sbG93aW5nLFxyXG4gIGdldFVzZXJDaGFyYWN0ZXJzLFxyXG4gIGdldEZhdm9yaXRlQXV0aG9ycyxcclxuICBnZXRGYXZvcml0ZUNoYXJhY3RlcnMsXHJcbiAgZ2V0RmF2b3JpdGVTdG9yaWVzLFxyXG4gIGdldFVzZXJMb2NhdGlvbnMsXHJcbiAgZ2V0Rm9sbG93ZXJzLFxyXG4gIGNoYXJhY3RlcnMsXHJcbiAgaXNGb2xsb3dpbmcsXHJcbiAgZmF2QXV0aG9ycyxcclxuICBmb2xsb3dlcnMsXHJcbiAgZmF2Q2hhcmFjdGVycyxcclxuICBmYXZTdG9yaWVzLFxyXG4gIGxvYWRpbmcsXHJcbn0pID0+IHtcclxuICBjb25zdCBbdGFic10gPSB1c2VTdGF0ZShbXHJcbiAgICBcInN0b3JpZXNcIixcclxuICAgIFwiY2hhcmFjdGVyc1wiLFxyXG4gICAgXCJsb2NhdGlvbnNcIixcclxuICAgIFwiZmF2b3JpdGVzIHN0b3JpZXNcIixcclxuICAgIFwiZmF2b3JpdGVzIGNoYXJhY3RlcnNcIixcclxuICAgIFwiZm9sbG93ZXJzXCIsXHJcbiAgICBcImZvbGxvd2luZ3NcIixcclxuICBdKTtcclxuICBjb25zdCBbY3VycmVudFRhYiwgc2V0Q3VycmVudFRhYl0gPSB1c2VTdGF0ZShcInN0b3JpZXNcIik7XHJcbiAgY29uc3QgW2ZhdlRhYiwgc2V0RmF2VGFiXSA9IHVzZVN0YXRlKFwiZmF2YXV0aG9yc1wiKTtcclxuICBjb25zdCBbZmF2b3JpdGVTdG9yaWVzLCBzZXRGYXZvcml0ZVN0b3JpZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtmYXZvcml0ZUNoYXJhY3RlcnMsIHNldEZhdm9yaXRlQ2hhcmFjdGVyc10gPSB1c2VTdGF0ZShmYXZDaGFyYWN0ZXJzKTtcclxuICBjb25zdCBjaGFuZ2VUYWIgPSAodGFiKSA9PiBzZXRDdXJyZW50VGFiKHRhYik7XHJcblxyXG4gIGNvbnN0IGF1dGggPSB1c2VBdXRoKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAocm91dGVyLnF1ZXJ5LmlkKSB7XHJcbiAgICAgIGdldFByb2ZpbGUocm91dGVyLnF1ZXJ5LmlkKTtcclxuXHJcbiAgICAgIGdldFVzZXJTdG9yaWVzKHJvdXRlci5xdWVyeS5pZCk7XHJcbiAgICAgIGdldFVzZXJDaGFyYWN0ZXJzKHJvdXRlci5xdWVyeS5pZCk7XHJcbiAgICAgIGdldEZhdm9yaXRlQXV0aG9ycyhyb3V0ZXIucXVlcnkuaWQpO1xyXG4gICAgICBnZXRGb2xsb3dlcnMocm91dGVyLnF1ZXJ5LmlkKTtcclxuICAgICAgZ2V0RmF2b3JpdGVDaGFyYWN0ZXJzKHJvdXRlci5xdWVyeS5pZCk7XHJcbiAgICAgIGdldEZhdm9yaXRlU3Rvcmllcyhyb3V0ZXIucXVlcnkuaWQpO1xyXG4gICAgICBnZXRVc2VyTG9jYXRpb25zKHJvdXRlci5xdWVyeS5pZCk7XHJcbiAgICB9XHJcbiAgfSwgW3JvdXRlci5xdWVyeS5pZF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGF1dGgudXNlcikge1xyXG4gICAgICBnZXRJc0ZvbGxvd2luZyhyb3V0ZXIucXVlcnkuaWQpO1xyXG4gICAgfVxyXG4gIH0sIFthdXRoXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRGYXZvcml0ZVN0b3JpZXMoXHJcbiAgICAgIGZhdlN0b3JpZXMuZmlsdGVyKChzKSA9PiBzLnB1YmxpYyB8fCBzLmF1dGhvcklkID09PSBhdXRoLnVzZXIudWlkKVxyXG4gICAgKTtcclxuICAgIHNldEZhdm9yaXRlQ2hhcmFjdGVycyhcclxuICAgICAgZmF2Q2hhcmFjdGVycy5maWx0ZXIoKHMpID0+IHMucHVibGljIHx8IHMuYXV0aG9ySWQgPT09IGF1dGgudXNlci51aWQpXHJcbiAgICApO1xyXG4gIH0sIFthdXRoLCBmYXZTdG9yaWVzLCBmYXZDaGFyYWN0ZXJzXSk7XHJcblxyXG4gIGNvbnN0IGNoYW5nZUZhdlRhYiA9ICh0YWIpID0+IHNldEZhdlRhYih0YWIpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlXCI+XHJcbiAgICAgIDxMb2FkaW5nU2NyZWVuIGxvYWRpbmc9e2F1dGguaXNMb2FkaW5nfT5cclxuICAgICAgICB7YXV0aC51c2VyICYmIGF1dGgudXNlci51aWQgPT09IHJvdXRlci5xdWVyeS5pZCA/IChcclxuICAgICAgICAgIDxQcm9maWxlUHJpdmUgLz5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPEJhbm5lclxyXG4gICAgICAgICAgICAgIGNvbnRleHQ9XCJwdWJsaWNcIlxyXG4gICAgICAgICAgICAgIHByb2ZpbGU9e3Byb2ZpbGV9XHJcbiAgICAgICAgICAgICAgZmF2QXV0aG9ycz17ZmF2QXV0aG9yc31cclxuICAgICAgICAgICAgICBmb2xsb3dlcnM9e2ZvbGxvd2Vyc31cclxuICAgICAgICAgICAgICBjaGFuZ2VGYXZUYWI9e2NoYW5nZUZhdlRhYn1cclxuICAgICAgICAgICAgICBmYXZUYWI9e2ZhdlRhYn1cclxuICAgICAgICAgICAgICBzZXRDdXJyZW50VGFiPXtzZXRDdXJyZW50VGFifVxyXG4gICAgICAgICAgICAgIGlzRm9sbG93aW5nPXtpc0ZvbGxvd2luZ31cclxuICAgICAgICAgICAgICBmb2xsb3dVc2VyPXtmb2xsb3dVc2VyfVxyXG4gICAgICAgICAgICAgIHVuZm9sbG93VXNlcj17dW5mb2xsb3dVc2VyfVxyXG4gICAgICAgICAgICAgIGF1dGg9e2F1dGh9XHJcbiAgICAgICAgICAgICAgaWQ9e3JvdXRlci5xdWVyeS5pZH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHJvZmlsZS1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgPFRhYnMgY3VycmVudFRhYj17Y3VycmVudFRhYn0gdGFicz17dGFic30gY2hhbmdlVGFiPXtjaGFuZ2VUYWJ9IC8+XHJcbiAgICAgICAgICAgICAge2N1cnJlbnRUYWIgPT09IFwic3Rvcmllc1wiICYmIChcclxuICAgICAgICAgICAgICAgIDxTdG9yaWVzXHJcbiAgICAgICAgICAgICAgICAgIGF1dGg9e2F1dGh9XHJcbiAgICAgICAgICAgICAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9e1wic2hvd1wifVxyXG4gICAgICAgICAgICAgICAgICBzdG9yaWVzPXtzdG9yaWVzfVxyXG4gICAgICAgICAgICAgICAgICB0eXBlPXtcInByaXZhdGVQcm9maWxlXCJ9XHJcbiAgICAgICAgICAgICAgICAgIGNvbnRleHQ9XCJwdWJsaWNcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIHtjdXJyZW50VGFiID09PSBcImNoYXJhY3RlcnNcIiAmJiAoXHJcbiAgICAgICAgICAgICAgICA8Q2hhcmFjdGVycyBjb250ZXh0PVwicHVibGljXCIgY2hhcmFjdGVycz17Y2hhcmFjdGVyc30gLz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIHtjdXJyZW50VGFiID09PSBcImxvY2F0aW9uc1wiICYmIChcclxuICAgICAgICAgICAgICAgIDxMb2NhdGlvbnNcclxuICAgICAgICAgICAgICAgICAgY29udGV4dD1cInB1YmxpY1wiXHJcbiAgICAgICAgICAgICAgICAgIGxvY2F0aW9ucz17bG9jYXRpb25zfVxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicHJvZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAge2N1cnJlbnRUYWIgPT09IFwiZmF2b3JpdGVzIHN0b3JpZXNcIiAmJiAoXHJcbiAgICAgICAgICAgICAgICA8U3Rvcmllc1xyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiZmF2b3JpdGVzXCJcclxuICAgICAgICAgICAgICAgICAgbG9hZGluZz17bG9hZGluZ31cclxuICAgICAgICAgICAgICAgICAgc3Rvcmllcz17ZmF2b3JpdGVTdG9yaWVzfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIHtjdXJyZW50VGFiID09PSBcImZhdm9yaXRlcyBjaGFyYWN0ZXJzXCIgJiYgKFxyXG4gICAgICAgICAgICAgICAgPENoYXJhY3RlcnMgdHlwZT1cImZhdm9yaXRlc1wiIGNoYXJhY3RlcnM9e2Zhdm9yaXRlQ2hhcmFjdGVyc30gLz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIHtjdXJyZW50VGFiID09PSBcImZvbGxvd2Vyc1wiICYmIChcclxuICAgICAgICAgICAgICAgIDxGb2xsb3dlcnNcclxuICAgICAgICAgICAgICAgICAgdGl0bGU9XCJGb2xsb3dlcnNcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPXtcImZvbGxvd2Vyc1wifVxyXG4gICAgICAgICAgICAgICAgICBsZz17NH1cclxuICAgICAgICAgICAgICAgICAgbWQ9ezZ9XHJcbiAgICAgICAgICAgICAgICAgIHNtPXs4fVxyXG4gICAgICAgICAgICAgICAgICB4cz17MTJ9XHJcbiAgICAgICAgICAgICAgICAgIGl0ZW1zPXtmb2xsb3dlcnMuYXV0aG9yc31cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICB7Y3VycmVudFRhYiA9PT0gXCJmb2xsb3dpbmdzXCIgJiYgKFxyXG4gICAgICAgICAgICAgICAgPEZvbGxvd2Vyc1xyXG4gICAgICAgICAgICAgICAgICB0aXRsZT1cIkZvbGxvd2luZ3NcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPXtcImZvbGxvd2luZ3NcIn1cclxuICAgICAgICAgICAgICAgICAgbGc9ezR9XHJcbiAgICAgICAgICAgICAgICAgIG1kPXs2fVxyXG4gICAgICAgICAgICAgICAgICBzbT17OH1cclxuICAgICAgICAgICAgICAgICAgeHM9ezEyfVxyXG4gICAgICAgICAgICAgICAgICBpdGVtcz17ZmF2QXV0aG9ycy5hdXRob3JzfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApfVxyXG4gICAgICA8L0xvYWRpbmdTY3JlZW4+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCBvd25Qcm9wcykgPT4gKHtcclxuICBwcm9maWxlOiBzdGF0ZS5hdXRoLnByb2ZpbGUsXHJcbiAgc3Rvcmllczogc3RhdGUuc3Rvcmllcy51c2VyU3RvcmllcyxcclxuICBjaGFyYWN0ZXJzOiBzdGF0ZS5jaGFyYWN0ZXJzLnVzZXJDaGFyYWN0ZXJzLFxyXG4gIGZhdkF1dGhvcnM6IHN0YXRlLmF1dGguZmF2QXV0aG9ycyxcclxuICBmb2xsb3dlcnM6IHN0YXRlLmF1dGguZm9sbG93ZXJzLFxyXG4gIGZhdkNoYXJhY3RlcnM6IHN0YXRlLmNoYXJhY3RlcnMuZmF2Q2hhcmFjdGVycyxcclxuICBmYXZTdG9yaWVzOiBzdGF0ZS5zdG9yaWVzLmZhdlN0b3JpZXMsXHJcbiAgbG9jYXRpb25zOiBzdGF0ZS5zdG9yaWVzLnVzZXJMb2NhdGlvbnMsXHJcbiAgbG9hZGluZzogc3RhdGUuc3Rvcmllcy5sb2FkaW5nLFxyXG4gIGlzRm9sbG93aW5nOiBzdGF0ZS5hdXRoLmlzRm9sbG93aW5nLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7XHJcbiAgZ2V0UHJvZmlsZSxcclxuICBnZXRVc2VyU3RvcmllcyxcclxuICBnZXRVc2VyQ2hhcmFjdGVycyxcclxuICBnZXRGYXZvcml0ZUF1dGhvcnMsXHJcbiAgZ2V0Rm9sbG93ZXJzLFxyXG4gIGdldEZhdm9yaXRlQ2hhcmFjdGVycyxcclxuICBnZXRGYXZvcml0ZVN0b3JpZXMsXHJcbiAgZ2V0VXNlckxvY2F0aW9ucyxcclxuICBmb2xsb3dVc2VyLFxyXG4gIHVuZm9sbG93VXNlcixcclxuICBnZXRJc0ZvbGxvd2luZyxcclxufSkoUHJvZmlsZSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=