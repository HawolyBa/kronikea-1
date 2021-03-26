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
    loading: auth.isLoading,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }
  }, __jsx(_components_hoc_RedirectComp__WEBPACK_IMPORTED_MODULE_15__["default"], {
    condition: auth.user,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS9pbmRleC5qcyJdLCJuYW1lcyI6WyJQcm9maWxlIiwiZ2V0UHJvZmlsZSIsInByb2ZpbGUiLCJzdG9yaWVzIiwiZ2V0VXNlclN0b3JpZXMiLCJnZXRVc2VyQ2hhcmFjdGVycyIsImdldEZhdm9yaXRlQXV0aG9ycyIsImdldEZhdm9yaXRlQ2hhcmFjdGVycyIsImdldEZhdm9yaXRlU3RvcmllcyIsImdldEZvbGxvd2VycyIsImNoYXJhY3RlcnMiLCJmYXZBdXRob3JzIiwiZm9sbG93ZXJzIiwiZmF2Q2hhcmFjdGVycyIsImZhdlN0b3JpZXMiLCJ1c2VTdGF0ZSIsInRhYnMiLCJtb2RhbFZpc2libGUiLCJzZXRNb2RhbFZpc2libGUiLCJzZXR0aW5ncyIsIm9wZW5TZXR0aW5ncyIsImN1cnJlbnRUYWIiLCJzZXRDdXJyZW50VGFiIiwiZmF2VGFiIiwic2V0RmF2VGFiIiwiY2hhbmdlVGFiIiwidGFiIiwiYXV0aCIsInVzZUF1dGgiLCJ1c2VFZmZlY3QiLCJ1c2VyIiwidWlkIiwiY2hhbmdlRmF2VGFiIiwiaXNMb2FkaW5nIiwiYXV0aG9ycyIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwib3duUHJvcHMiLCJ1c2VyU3RvcmllcyIsInVzZXJDaGFyYWN0ZXJzIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFJQTtBQUlBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxPQWVWO0FBQUE7O0FBQUEsTUFkSkMsVUFjSSxRQWRKQSxVQWNJO0FBQUEsTUFiSkMsT0FhSSxRQWJKQSxPQWFJO0FBQUEsTUFaSkMsT0FZSSxRQVpKQSxPQVlJO0FBQUEsTUFYSkMsY0FXSSxRQVhKQSxjQVdJO0FBQUEsTUFWSkMs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MEIsMEhBQU8sQ0FBQ0wsZUFBRCxFQUFrQjtBQUN0Q2xDLFlBQVUsRUFBVkEsc0VBRHNDO0FBRXRDRyxnQkFBYyxFQUFkQSw2RUFGc0M7QUFHdENDLG1CQUFpQixFQUFqQkEsbUZBSHNDO0FBSXRDQyxvQkFBa0IsRUFBbEJBLDhFQUpzQztBQUt0Q0csY0FBWSxFQUFaQSx3RUFMc0M7QUFNdENGLHVCQUFxQixFQUFyQkEsdUZBTnNDO0FBT3RDQyxvQkFBa0IsRUFBbEJBLGlGQUFrQkE7QUFQb0IsQ0FBbEIsQ0FBUCxDQVFaUixPQVJZLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS41OGViYWMyMGRlMTdjYmY3MjRmMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBSb3csIE1vZGFsLCBCdXR0b24gfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuaW1wb3J0IEJhbm5lciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9wcm9maWxlL0Jhbm5lclwiO1xyXG5pbXBvcnQgVGFicyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9wcm9maWxlL1RhYnNcIjtcclxuaW1wb3J0IFN0b3JpZXMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcHJvZmlsZS9TdG9yaWVzXCI7XHJcbmltcG9ydCBDaGFyYWN0ZXJzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3Byb2ZpbGUvQ2hhcmFjdGVyc1wiO1xyXG5pbXBvcnQgRm9sbG93ZXJzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3Byb2ZpbGUvRm9sbG93ZXJzXCI7XHJcbmltcG9ydCBMb2NhdGlvbnMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcHJvZmlsZS9Mb2NhdGlvbnNcIjtcclxuaW1wb3J0IFNldHRpbmdzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3Byb2ZpbGUvU2V0dGluZ3NcIjtcclxuXHJcbmltcG9ydCB7IGdldFByb2ZpbGUgfSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9ucy91c2VyQWN0aW9uc1wiO1xyXG5pbXBvcnQge1xyXG4gIGdldFVzZXJTdG9yaWVzLFxyXG4gIGdldEZhdm9yaXRlU3RvcmllcyxcclxufSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9ucy9zdG9yaWVzQWN0aW9uc1wiO1xyXG5pbXBvcnQge1xyXG4gIGdldFVzZXJDaGFyYWN0ZXJzLFxyXG4gIGdldEZhdm9yaXRlQ2hhcmFjdGVycyxcclxufSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9ucy9jaGFyYWN0ZXJzQWN0aW9uc1wiO1xyXG5pbXBvcnQge1xyXG4gIGdldEZhdm9yaXRlQXV0aG9ycyxcclxuICBnZXRGb2xsb3dlcnMsXHJcbn0gZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvbnMvdXNlckFjdGlvbnNcIjtcclxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gXCIuLi8uLi9ob29rcy91c2VySG9va3NcIjtcclxuaW1wb3J0IExvYWRpbmdTY3JlZW4gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvaG9jL0xvYWRpbmdTY3JlZW5cIjtcclxuaW1wb3J0IFJlZGlyZWN0Q29tcCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9ob2MvUmVkaXJlY3RDb21wXCI7XHJcblxyXG5jb25zdCBQcm9maWxlID0gKHtcclxuICBnZXRQcm9maWxlLFxyXG4gIHByb2ZpbGUsXHJcbiAgc3RvcmllcyxcclxuICBnZXRVc2VyU3RvcmllcyxcclxuICBnZXRVc2VyQ2hhcmFjdGVycyxcclxuICBnZXRGYXZvcml0ZUF1dGhvcnMsXHJcbiAgZ2V0RmF2b3JpdGVDaGFyYWN0ZXJzLFxyXG4gIGdldEZhdm9yaXRlU3RvcmllcyxcclxuICBnZXRGb2xsb3dlcnMsXHJcbiAgY2hhcmFjdGVycyxcclxuICBmYXZBdXRob3JzLFxyXG4gIGZvbGxvd2VycyxcclxuICBmYXZDaGFyYWN0ZXJzLFxyXG4gIGZhdlN0b3JpZXMsXHJcbn0pID0+IHtcclxuICBjb25zdCBbdGFic10gPSB1c2VTdGF0ZShbXHJcbiAgICBcInN0b3JpZXNcIixcclxuICAgIFwiY2hhcmFjdGVyc1wiLFxyXG4gICAgXCJsb2NhdGlvbnNcIixcclxuICAgIFwiZmF2b3JpdGVzIHN0b3JpZXNcIixcclxuICAgIFwiZmF2b3JpdGVzIGNoYXJhY3RlcnNcIixcclxuICAgIFwiZm9sbG93ZXJzXCIsXHJcbiAgICBcImZvbGxvd2luZ3NcIixcclxuICBdKTtcclxuICBjb25zdCBbbW9kYWxWaXNpYmxlLCBzZXRNb2RhbFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzZXR0aW5ncywgb3BlblNldHRpbmdzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbY3VycmVudFRhYiwgc2V0Q3VycmVudFRhYl0gPSB1c2VTdGF0ZShcInN0b3JpZXNcIik7XHJcbiAgY29uc3QgW2ZhdlRhYiwgc2V0RmF2VGFiXSA9IHVzZVN0YXRlKFwiZmF2YXV0aG9yc1wiKTtcclxuICBjb25zdCBjaGFuZ2VUYWIgPSAodGFiKSA9PiBzZXRDdXJyZW50VGFiKHRhYik7XHJcblxyXG4gIGNvbnN0IGF1dGggPSB1c2VBdXRoKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoYXV0aC51c2VyKSB7XHJcbiAgICAgIGdldFByb2ZpbGUoKTtcclxuICAgICAgZ2V0VXNlclN0b3JpZXMoKTtcclxuICAgICAgZ2V0VXNlckNoYXJhY3RlcnMoYXV0aC51c2VyLnVpZCk7XHJcbiAgICAgIGdldEZhdm9yaXRlQXV0aG9ycygpO1xyXG4gICAgICBnZXRGb2xsb3dlcnMoKTtcclxuICAgICAgZ2V0RmF2b3JpdGVDaGFyYWN0ZXJzKCk7XHJcbiAgICAgIGdldEZhdm9yaXRlU3RvcmllcygpO1xyXG4gICAgfVxyXG4gIH0sIFthdXRoXSk7XHJcblxyXG4gIGNvbnN0IGNoYW5nZUZhdlRhYiA9ICh0YWIpID0+IHNldEZhdlRhYih0YWIpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlXCI+XHJcbiAgICAgIDxMb2FkaW5nU2NyZWVuIGxvYWRpbmc9e2F1dGguaXNMb2FkaW5nfT5cclxuICAgICAgICA8UmVkaXJlY3RDb21wIGNvbmRpdGlvbj17YXV0aC51c2VyfSB0eXBlPVwicmVkaXJlY3RcIj5cclxuICAgICAgICAgIDxCYW5uZXJcclxuICAgICAgICAgICAgcHJvZmlsZT17cHJvZmlsZX1cclxuICAgICAgICAgICAgb3BlblNldHRpbmdzPXtvcGVuU2V0dGluZ3N9XHJcbiAgICAgICAgICAgIHNldE1vZGFsVmlzaWJsZT17c2V0TW9kYWxWaXNpYmxlfVxyXG4gICAgICAgICAgICBmYXZBdXRob3JzPXtmYXZBdXRob3JzfVxyXG4gICAgICAgICAgICBmb2xsb3dlcnM9e2ZvbGxvd2Vyc31cclxuICAgICAgICAgICAgY2hhbmdlRmF2VGFiPXtjaGFuZ2VGYXZUYWJ9XHJcbiAgICAgICAgICAgIGZhdlRhYj17ZmF2VGFifVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInByb2ZpbGUtY29udGVudFwiPlxyXG4gICAgICAgICAgICA8VGFicyBjdXJyZW50VGFiPXtjdXJyZW50VGFifSB0YWJzPXt0YWJzfSBjaGFuZ2VUYWI9e2NoYW5nZVRhYn0gLz5cclxuICAgICAgICAgICAge2N1cnJlbnRUYWIgPT09IFwic3Rvcmllc1wiICYmIDxTdG9yaWVzIHN0b3JpZXM9e3N0b3JpZXN9IC8+fVxyXG4gICAgICAgICAgICB7Y3VycmVudFRhYiA9PT0gXCJjaGFyYWN0ZXJzXCIgJiYgKFxyXG4gICAgICAgICAgICAgIDxDaGFyYWN0ZXJzIGNoYXJhY3RlcnM9e2NoYXJhY3RlcnN9IC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHtjdXJyZW50VGFiID09PSBcImxvY2F0aW9uc1wiICYmIDxMb2NhdGlvbnMgLz59XHJcbiAgICAgICAgICAgIHtjdXJyZW50VGFiID09PSBcImZhdm9yaXRlcyBzdG9yaWVzXCIgJiYgKFxyXG4gICAgICAgICAgICAgIDxTdG9yaWVzIHN0b3JpZXM9e2ZhdlN0b3JpZXN9IC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHtjdXJyZW50VGFiID09PSBcImZhdm9yaXRlcyBjaGFyYWN0ZXJzXCIgJiYgKFxyXG4gICAgICAgICAgICAgIDxDaGFyYWN0ZXJzIHR5cGU9XCJmYXZvcml0ZXNcIiBjaGFyYWN0ZXJzPXtmYXZDaGFyYWN0ZXJzfSAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7Y3VycmVudFRhYiA9PT0gXCJmb2xsb3dlcnNcIiAmJiAoXHJcbiAgICAgICAgICAgICAgPEZvbGxvd2Vyc1xyXG4gICAgICAgICAgICAgICAgbGc9ezR9XHJcbiAgICAgICAgICAgICAgICBtZD17Nn1cclxuICAgICAgICAgICAgICAgIHNtPXs4fVxyXG4gICAgICAgICAgICAgICAgeHM9ezEyfVxyXG4gICAgICAgICAgICAgICAgaXRlbXM9e2ZvbGxvd2Vycy5hdXRob3JzfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHtjdXJyZW50VGFiID09PSBcImZvbGxvd2luZ3NcIiAmJiAoXHJcbiAgICAgICAgICAgICAgPEZvbGxvd2Vyc1xyXG4gICAgICAgICAgICAgICAgbGc9ezR9XHJcbiAgICAgICAgICAgICAgICBtZD17Nn1cclxuICAgICAgICAgICAgICAgIHNtPXs4fVxyXG4gICAgICAgICAgICAgICAgeHM9ezEyfVxyXG4gICAgICAgICAgICAgICAgaXRlbXM9e2ZhdkF1dGhvcnMuYXV0aG9yc31cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgIHRpdGxlPVwiU2V0dGluZ3NcIlxyXG4gICAgICAgICAgICB2aXNpYmxlPXtzZXR0aW5nc31cclxuICAgICAgICAgICAgb25Paz17KCkgPT4gb3BlblNldHRpbmdzKGZhbHNlKX1cclxuICAgICAgICAgICAgb25DYW5jZWw9eygpID0+IG9wZW5TZXR0aW5ncyhmYWxzZSl9XHJcbiAgICAgICAgICAgIGZvb3Rlcj17W1xyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIGtleT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvcGVuU2V0dGluZ3MoZmFsc2UpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFN1Ym1pdFxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPixcclxuICAgICAgICAgICAgXX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPFNldHRpbmdzIC8+XHJcbiAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgIDwvUmVkaXJlY3RDb21wPlxyXG4gICAgICA8L0xvYWRpbmdTY3JlZW4+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCBvd25Qcm9wcykgPT4gKHtcclxuICBwcm9maWxlOiBzdGF0ZS5hdXRoLnByb2ZpbGUsXHJcbiAgc3Rvcmllczogc3RhdGUuc3Rvcmllcy51c2VyU3RvcmllcyxcclxuICBjaGFyYWN0ZXJzOiBzdGF0ZS5jaGFyYWN0ZXJzLnVzZXJDaGFyYWN0ZXJzLFxyXG4gIGZhdkF1dGhvcnM6IHN0YXRlLmF1dGguZmF2QXV0aG9ycyxcclxuICBmb2xsb3dlcnM6IHN0YXRlLmF1dGguZm9sbG93ZXJzLFxyXG4gIGZhdkNoYXJhY3RlcnM6IHN0YXRlLmNoYXJhY3RlcnMuZmF2Q2hhcmFjdGVycyxcclxuICBmYXZTdG9yaWVzOiBzdGF0ZS5zdG9yaWVzLmZhdlN0b3JpZXMsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHtcclxuICBnZXRQcm9maWxlLFxyXG4gIGdldFVzZXJTdG9yaWVzLFxyXG4gIGdldFVzZXJDaGFyYWN0ZXJzLFxyXG4gIGdldEZhdm9yaXRlQXV0aG9ycyxcclxuICBnZXRGb2xsb3dlcnMsXHJcbiAgZ2V0RmF2b3JpdGVDaGFyYWN0ZXJzLFxyXG4gIGdldEZhdm9yaXRlU3RvcmllcyxcclxufSkoUHJvZmlsZSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=