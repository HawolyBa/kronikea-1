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
    getProfile(router.query.id);
    getUserStories(router.query.id, "profile");
    getUserCharacters(router.query.id);
    getFavoriteAuthors(router.query.id);
    getFollowers(router.query.id);
    getFavoriteCharacters(router.query.id);
    getFavoriteStories(router.query.id);
    getUserLocations(router.query.id);
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
      lineNumber: 108,
      columnNumber: 5
    }
  }, __jsx(_components_hoc_LoadingScreen__WEBPACK_IMPORTED_MODULE_16__["default"], {
    loading: auth.isLoading,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 7
    }
  }, __jsx(_components_hoc_RedirectComp__WEBPACK_IMPORTED_MODULE_17__["default"], {
    condition: auth.user,
    type: "redirect",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 9
    }
  }, auth.user && auth.user.uid === router.query.id ? __jsx(_index__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
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
      lineNumber: 115,
      columnNumber: 15
    }
  }), __jsx("section", {
    className: "profile-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 15
    }
  }, __jsx(_components_profile_Tabs__WEBPACK_IMPORTED_MODULE_7__["default"], {
    currentTab: currentTab,
    tabs: tabs,
    changeTab: changeTab,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 17
    }
  }), currentTab === "stories" && __jsx(_components_profile_Stories__WEBPACK_IMPORTED_MODULE_8__["default"], (_jsx = {
    auth: auth,
    loading: loading,
    type: "show",
    stories: stories
  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "type", "privateProfile"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "context", "public"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__self", _this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__source", {
    fileName: _jsxFileName,
    lineNumber: 136,
    columnNumber: 19
  }), _jsx)), currentTab === "characters" && __jsx(_components_profile_Characters__WEBPACK_IMPORTED_MODULE_9__["default"], {
    context: "public",
    characters: characters,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 19
    }
  }), currentTab === "locations" && __jsx(_components_profile_Locations__WEBPACK_IMPORTED_MODULE_11__["default"], {
    context: "public",
    locations: locations,
    type: "profile",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 19
    }
  }), currentTab === "favorites stories" && __jsx(_components_profile_Stories__WEBPACK_IMPORTED_MODULE_8__["default"], {
    type: "favorites",
    loading: loading,
    stories: favoriteStories,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 19
    }
  }), currentTab === "favorites characters" && __jsx(_components_profile_Characters__WEBPACK_IMPORTED_MODULE_9__["default"], {
    type: "favorites",
    characters: favoriteCharacters,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 19
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
      lineNumber: 169,
      columnNumber: 19
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
      lineNumber: 180,
      columnNumber: 19
    }
  }))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS8vaW5kZXguanMiXSwibmFtZXMiOlsiUHJvZmlsZSIsImdldFByb2ZpbGUiLCJwcm9maWxlIiwic3RvcmllcyIsImxvY2F0aW9ucyIsImdldFVzZXJTdG9yaWVzIiwiZm9sbG93VXNlciIsInVuZm9sbG93VXNlciIsImdldElzRm9sbG93aW5nIiwiZ2V0VXNlckNoYXJhY3RlcnMiLCJnZXRGYXZvcml0ZUF1dGhvcnMiLCJnZXRGYXZvcml0ZUNoYXJhY3RlcnMiLCJnZXRGYXZvcml0ZVN0b3JpZXMiLCJnZXRVc2VyTG9jYXRpb25zIiwiZ2V0Rm9sbG93ZXJzIiwiY2hhcmFjdGVycyIsImlzRm9sbG93aW5nIiwiZmF2QXV0aG9ycyIsImZvbGxvd2VycyIsImZhdkNoYXJhY3RlcnMiLCJmYXZTdG9yaWVzIiwibG9hZGluZyIsInVzZVN0YXRlIiwidGFicyIsImN1cnJlbnRUYWIiLCJzZXRDdXJyZW50VGFiIiwiZmF2VGFiIiwic2V0RmF2VGFiIiwiZmF2b3JpdGVTdG9yaWVzIiwic2V0RmF2b3JpdGVTdG9yaWVzIiwiZmF2b3JpdGVDaGFyYWN0ZXJzIiwic2V0RmF2b3JpdGVDaGFyYWN0ZXJzIiwiY2hhbmdlVGFiIiwidGFiIiwiYXV0aCIsInVzZUF1dGgiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJxdWVyeSIsImlkIiwidXNlciIsImZpbHRlciIsInMiLCJhdXRob3JJZCIsInVpZCIsImNoYW5nZUZhdlRhYiIsImlzTG9hZGluZyIsImF1dGhvcnMiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIm93blByb3BzIiwidXNlclN0b3JpZXMiLCJ1c2VyQ2hhcmFjdGVycyIsInVzZXJMb2NhdGlvbnMiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFD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a0JBQWdCLEVBQWhCQSwrRUFSc0M7QUFTdENQLFlBQVUsRUFBVkEsc0VBVHNDO0FBVXRDQyxjQUFZLEVBQVpBLHdFQVZzQztBQVd0Q0MsZ0JBQWMsRUFBZEEsMEVBQWNBO0FBWHdCLENBQWxCLENBQVAsQ0FZWlIsT0FaWSxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUvW2lkXS40YmM2YmZkNDhlODhjMmM5MTA5Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgTW9kYWwsIEJ1dHRvbiB9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5pbXBvcnQgUHJvZmlsZVByaXZlIGZyb20gXCIuLi9pbmRleFwiO1xyXG5pbXBvcnQgQmFubmVyIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL3Byb2ZpbGUvQmFubmVyXCI7XHJcbmltcG9ydCBUYWJzIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL3Byb2ZpbGUvVGFic1wiO1xyXG5pbXBvcnQgU3RvcmllcyBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9wcm9maWxlL1N0b3JpZXNcIjtcclxuaW1wb3J0IENoYXJhY3RlcnMgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvcHJvZmlsZS9DaGFyYWN0ZXJzXCI7XHJcbmltcG9ydCBGb2xsb3dlcnMgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvcHJvZmlsZS9Gb2xsb3dlcnNcIjtcclxuaW1wb3J0IExvY2F0aW9ucyBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9wcm9maWxlL0xvY2F0aW9uc1wiO1xyXG5cclxuaW1wb3J0IHtcclxuICBnZXRQcm9maWxlLFxyXG4gIGZvbGxvd1VzZXIsXHJcbiAgdW5mb2xsb3dVc2VyLFxyXG4gIGdldElzRm9sbG93aW5nLFxyXG59IGZyb20gXCIuLi8uLi8uLi9yZWR1eC9hY3Rpb25zL3VzZXJBY3Rpb25zXCI7XHJcbmltcG9ydCB7XHJcbiAgZ2V0VXNlclN0b3JpZXMsXHJcbiAgZ2V0RmF2b3JpdGVTdG9yaWVzLFxyXG4gIGdldFVzZXJMb2NhdGlvbnMsXHJcbn0gZnJvbSBcIi4uLy4uLy4uL3JlZHV4L2FjdGlvbnMvc3Rvcmllc0FjdGlvbnNcIjtcclxuaW1wb3J0IHtcclxuICBnZXRVc2VyQ2hhcmFjdGVycyxcclxuICBnZXRGYXZvcml0ZUNoYXJhY3RlcnMsXHJcbn0gZnJvbSBcIi4uLy4uLy4uL3JlZHV4L2FjdGlvbnMvY2hhcmFjdGVyc0FjdGlvbnNcIjtcclxuaW1wb3J0IHtcclxuICBnZXRGYXZvcml0ZUF1dGhvcnMsXHJcbiAgZ2V0Rm9sbG93ZXJzLFxyXG59IGZyb20gXCIuLi8uLi8uLi9yZWR1eC9hY3Rpb25zL3VzZXJBY3Rpb25zXCI7XHJcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tIFwiLi4vLi4vLi4vaG9va3MvdXNlckhvb2tzXCI7XHJcbmltcG9ydCBMb2FkaW5nU2NyZWVuIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2hvYy9Mb2FkaW5nU2NyZWVuXCI7XHJcbmltcG9ydCBSZWRpcmVjdENvbXAgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaG9jL1JlZGlyZWN0Q29tcFwiO1xyXG5cclxuY29uc3QgUHJvZmlsZSA9ICh7XHJcbiAgZ2V0UHJvZmlsZSxcclxuICBwcm9maWxlLFxyXG4gIHN0b3JpZXMsXHJcbiAgbG9jYXRpb25zLFxyXG4gIGdldFVzZXJTdG9yaWVzLFxyXG4gIGZvbGxvd1VzZXIsXHJcbiAgdW5mb2xsb3dVc2VyLFxyXG4gIGdldElzRm9sbG93aW5nLFxyXG4gIGdldFVzZXJDaGFyYWN0ZXJzLFxyXG4gIGdldEZhdm9yaXRlQXV0aG9ycyxcclxuICBnZXRGYXZvcml0ZUNoYXJhY3RlcnMsXHJcbiAgZ2V0RmF2b3JpdGVTdG9yaWVzLFxyXG4gIGdldFVzZXJMb2NhdGlvbnMsXHJcbiAgZ2V0Rm9sbG93ZXJzLFxyXG4gIGNoYXJhY3RlcnMsXHJcbiAgaXNGb2xsb3dpbmcsXHJcbiAgZmF2QXV0aG9ycyxcclxuICBmb2xsb3dlcnMsXHJcbiAgZmF2Q2hhcmFjdGVycyxcclxuICBmYXZTdG9yaWVzLFxyXG4gIGxvYWRpbmcsXHJcbn0pID0+IHtcclxuICBjb25zdCBbdGFic10gPSB1c2VTdGF0ZShbXHJcbiAgICBcInN0b3JpZXNcIixcclxuICAgIFwiY2hhcmFjdGVyc1wiLFxyXG4gICAgXCJsb2NhdGlvbnNcIixcclxuICAgIFwiZmF2b3JpdGVzIHN0b3JpZXNcIixcclxuICAgIFwiZmF2b3JpdGVzIGNoYXJhY3RlcnNcIixcclxuICAgIFwiZm9sbG93ZXJzXCIsXHJcbiAgICBcImZvbGxvd2luZ3NcIixcclxuICBdKTtcclxuICBjb25zdCBbY3VycmVudFRhYiwgc2V0Q3VycmVudFRhYl0gPSB1c2VTdGF0ZShcInN0b3JpZXNcIik7XHJcbiAgY29uc3QgW2ZhdlRhYiwgc2V0RmF2VGFiXSA9IHVzZVN0YXRlKFwiZmF2YXV0aG9yc1wiKTtcclxuICBjb25zdCBbZmF2b3JpdGVTdG9yaWVzLCBzZXRGYXZvcml0ZVN0b3JpZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtmYXZvcml0ZUNoYXJhY3RlcnMsIHNldEZhdm9yaXRlQ2hhcmFjdGVyc10gPSB1c2VTdGF0ZShmYXZDaGFyYWN0ZXJzKTtcclxuICBjb25zdCBjaGFuZ2VUYWIgPSAodGFiKSA9PiBzZXRDdXJyZW50VGFiKHRhYik7XHJcblxyXG4gIGNvbnN0IGF1dGggPSB1c2VBdXRoKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRQcm9maWxlKHJvdXRlci5xdWVyeS5pZCk7XHJcblxyXG4gICAgZ2V0VXNlclN0b3JpZXMocm91dGVyLnF1ZXJ5LmlkLCBcInByb2ZpbGVcIik7XHJcbiAgICBnZXRVc2VyQ2hhcmFjdGVycyhyb3V0ZXIucXVlcnkuaWQpO1xyXG4gICAgZ2V0RmF2b3JpdGVBdXRob3JzKHJvdXRlci5xdWVyeS5pZCk7XHJcbiAgICBnZXRGb2xsb3dlcnMocm91dGVyLnF1ZXJ5LmlkKTtcclxuICAgIGdldEZhdm9yaXRlQ2hhcmFjdGVycyhyb3V0ZXIucXVlcnkuaWQpO1xyXG4gICAgZ2V0RmF2b3JpdGVTdG9yaWVzKHJvdXRlci5xdWVyeS5pZCk7XHJcbiAgICBnZXRVc2VyTG9jYXRpb25zKHJvdXRlci5xdWVyeS5pZCk7XHJcbiAgfSwgW3JvdXRlci5xdWVyeS5pZF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGF1dGgudXNlcikge1xyXG4gICAgICBnZXRJc0ZvbGxvd2luZyhyb3V0ZXIucXVlcnkuaWQpO1xyXG4gICAgfVxyXG4gIH0sIFthdXRoXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRGYXZvcml0ZVN0b3JpZXMoXHJcbiAgICAgIGZhdlN0b3JpZXMuZmlsdGVyKChzKSA9PiBzLnB1YmxpYyB8fCBzLmF1dGhvcklkID09PSBhdXRoLnVzZXIudWlkKVxyXG4gICAgKTtcclxuICAgIHNldEZhdm9yaXRlQ2hhcmFjdGVycyhcclxuICAgICAgZmF2Q2hhcmFjdGVycy5maWx0ZXIoKHMpID0+IHMucHVibGljIHx8IHMuYXV0aG9ySWQgPT09IGF1dGgudXNlci51aWQpXHJcbiAgICApO1xyXG4gIH0sIFthdXRoLCBmYXZTdG9yaWVzLCBmYXZDaGFyYWN0ZXJzXSk7XHJcblxyXG4gIGNvbnN0IGNoYW5nZUZhdlRhYiA9ICh0YWIpID0+IHNldEZhdlRhYih0YWIpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlXCI+XHJcbiAgICAgIDxMb2FkaW5nU2NyZWVuIGxvYWRpbmc9e2F1dGguaXNMb2FkaW5nfT5cclxuICAgICAgICA8UmVkaXJlY3RDb21wIGNvbmRpdGlvbj17YXV0aC51c2VyfSB0eXBlPVwicmVkaXJlY3RcIj5cclxuICAgICAgICAgIHthdXRoLnVzZXIgJiYgYXV0aC51c2VyLnVpZCA9PT0gcm91dGVyLnF1ZXJ5LmlkID8gKFxyXG4gICAgICAgICAgICA8UHJvZmlsZVByaXZlIC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxCYW5uZXJcclxuICAgICAgICAgICAgICAgIGNvbnRleHQ9XCJwdWJsaWNcIlxyXG4gICAgICAgICAgICAgICAgcHJvZmlsZT17cHJvZmlsZX1cclxuICAgICAgICAgICAgICAgIGZhdkF1dGhvcnM9e2ZhdkF1dGhvcnN9XHJcbiAgICAgICAgICAgICAgICBmb2xsb3dlcnM9e2ZvbGxvd2Vyc31cclxuICAgICAgICAgICAgICAgIGNoYW5nZUZhdlRhYj17Y2hhbmdlRmF2VGFifVxyXG4gICAgICAgICAgICAgICAgZmF2VGFiPXtmYXZUYWJ9XHJcbiAgICAgICAgICAgICAgICBzZXRDdXJyZW50VGFiPXtzZXRDdXJyZW50VGFifVxyXG4gICAgICAgICAgICAgICAgaXNGb2xsb3dpbmc9e2lzRm9sbG93aW5nfVxyXG4gICAgICAgICAgICAgICAgZm9sbG93VXNlcj17Zm9sbG93VXNlcn1cclxuICAgICAgICAgICAgICAgIHVuZm9sbG93VXNlcj17dW5mb2xsb3dVc2VyfVxyXG4gICAgICAgICAgICAgICAgYXV0aD17YXV0aH1cclxuICAgICAgICAgICAgICAgIGlkPXtyb3V0ZXIucXVlcnkuaWR9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwcm9maWxlLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxUYWJzXHJcbiAgICAgICAgICAgICAgICAgIGN1cnJlbnRUYWI9e2N1cnJlbnRUYWJ9XHJcbiAgICAgICAgICAgICAgICAgIHRhYnM9e3RhYnN9XHJcbiAgICAgICAgICAgICAgICAgIGNoYW5nZVRhYj17Y2hhbmdlVGFifVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIHtjdXJyZW50VGFiID09PSBcInN0b3JpZXNcIiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxTdG9yaWVzXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0aD17YXV0aH1cclxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9e1wic2hvd1wifVxyXG4gICAgICAgICAgICAgICAgICAgIHN0b3JpZXM9e3N0b3JpZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT17XCJwcml2YXRlUHJvZmlsZVwifVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQ9XCJwdWJsaWNcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIHtjdXJyZW50VGFiID09PSBcImNoYXJhY3RlcnNcIiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxDaGFyYWN0ZXJzIGNvbnRleHQ9XCJwdWJsaWNcIiBjaGFyYWN0ZXJzPXtjaGFyYWN0ZXJzfSAvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIHtjdXJyZW50VGFiID09PSBcImxvY2F0aW9uc1wiICYmIChcclxuICAgICAgICAgICAgICAgICAgPExvY2F0aW9uc1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQ9XCJwdWJsaWNcIlxyXG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9ucz17bG9jYXRpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwcm9maWxlXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICB7Y3VycmVudFRhYiA9PT0gXCJmYXZvcml0ZXMgc3Rvcmllc1wiICYmIChcclxuICAgICAgICAgICAgICAgICAgPFN0b3JpZXNcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZmF2b3JpdGVzXCJcclxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0b3JpZXM9e2Zhdm9yaXRlU3Rvcmllc31cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICB7Y3VycmVudFRhYiA9PT0gXCJmYXZvcml0ZXMgY2hhcmFjdGVyc1wiICYmIChcclxuICAgICAgICAgICAgICAgICAgPENoYXJhY3RlcnNcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZmF2b3JpdGVzXCJcclxuICAgICAgICAgICAgICAgICAgICBjaGFyYWN0ZXJzPXtmYXZvcml0ZUNoYXJhY3RlcnN9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAge2N1cnJlbnRUYWIgPT09IFwiZm9sbG93ZXJzXCIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8Rm9sbG93ZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJGb2xsb3dlcnNcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9e1wiZm9sbG93ZXJzXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgbGc9ezR9XHJcbiAgICAgICAgICAgICAgICAgICAgbWQ9ezZ9XHJcbiAgICAgICAgICAgICAgICAgICAgc209ezh9XHJcbiAgICAgICAgICAgICAgICAgICAgeHM9ezEyfVxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtmb2xsb3dlcnMuYXV0aG9yc31cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICB7Y3VycmVudFRhYiA9PT0gXCJmb2xsb3dpbmdzXCIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8Rm9sbG93ZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJGb2xsb3dpbmdzXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPXtcImZvbGxvd2luZ3NcIn1cclxuICAgICAgICAgICAgICAgICAgICBsZz17NH1cclxuICAgICAgICAgICAgICAgICAgICBtZD17Nn1cclxuICAgICAgICAgICAgICAgICAgICBzbT17OH1cclxuICAgICAgICAgICAgICAgICAgICB4cz17MTJ9XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM9e2ZhdkF1dGhvcnMuYXV0aG9yc31cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9SZWRpcmVjdENvbXA+XHJcbiAgICAgIDwvTG9hZGluZ1NjcmVlbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIG93blByb3BzKSA9PiAoe1xyXG4gIHByb2ZpbGU6IHN0YXRlLmF1dGgucHJvZmlsZSxcclxuICBzdG9yaWVzOiBzdGF0ZS5zdG9yaWVzLnVzZXJTdG9yaWVzLFxyXG4gIGNoYXJhY3RlcnM6IHN0YXRlLmNoYXJhY3RlcnMudXNlckNoYXJhY3RlcnMsXHJcbiAgZmF2QXV0aG9yczogc3RhdGUuYXV0aC5mYXZBdXRob3JzLFxyXG4gIGZvbGxvd2Vyczogc3RhdGUuYXV0aC5mb2xsb3dlcnMsXHJcbiAgZmF2Q2hhcmFjdGVyczogc3RhdGUuY2hhcmFjdGVycy5mYXZDaGFyYWN0ZXJzLFxyXG4gIGZhdlN0b3JpZXM6IHN0YXRlLnN0b3JpZXMuZmF2U3RvcmllcyxcclxuICBsb2NhdGlvbnM6IHN0YXRlLnN0b3JpZXMudXNlckxvY2F0aW9ucyxcclxuICBsb2FkaW5nOiBzdGF0ZS5zdG9yaWVzLmxvYWRpbmcsXHJcbiAgaXNGb2xsb3dpbmc6IHN0YXRlLmF1dGguaXNGb2xsb3dpbmcsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHtcclxuICBnZXRQcm9maWxlLFxyXG4gIGdldFVzZXJTdG9yaWVzLFxyXG4gIGdldFVzZXJDaGFyYWN0ZXJzLFxyXG4gIGdldEZhdm9yaXRlQXV0aG9ycyxcclxuICBnZXRGb2xsb3dlcnMsXHJcbiAgZ2V0RmF2b3JpdGVDaGFyYWN0ZXJzLFxyXG4gIGdldEZhdm9yaXRlU3RvcmllcyxcclxuICBnZXRVc2VyTG9jYXRpb25zLFxyXG4gIGZvbGxvd1VzZXIsXHJcbiAgdW5mb2xsb3dVc2VyLFxyXG4gIGdldElzRm9sbG93aW5nLFxyXG59KShQcm9maWxlKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==