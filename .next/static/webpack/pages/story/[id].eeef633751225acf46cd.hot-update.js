webpackHotUpdate_N_E("pages/story/[id]",{

/***/ "./pages/story/[id]/index.js":
/*!***********************************!*\
  !*** ./pages/story/[id]/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_storiesActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../redux/actions/storiesActions */ "./redux/actions/storiesActions.js");
/* harmony import */ var _hooks_userHooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../hooks/userHooks */ "./hooks/userHooks.js");
/* harmony import */ var _components_hoc_RedirectComp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/hoc/RedirectComp */ "./components/hoc/RedirectComp.js");
/* harmony import */ var _components_hoc_LoadingScreen__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/hoc/LoadingScreen */ "./components/hoc/LoadingScreen.js");
/* harmony import */ var _components_story_Chapters__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/story/Chapters */ "./components/story/Chapters.js");
/* harmony import */ var _components_story_Banner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/story/Banner */ "./components/story/Banner.js");
/* harmony import */ var _components_common_Grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/common/Grid */ "./components/common/Grid.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\pages\\story\\[id]\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;












var Story = function Story(_ref) {
  _s();

  var getStory = _ref.getStory,
      getStoryLocations = _ref.getStoryLocations,
      story = _ref.story,
      loading = _ref.loading,
      getChapters = _ref.getChapters,
      chapters = _ref.chapters,
      storyLocations = _ref.storyLocations,
      getStoryCharacters = _ref.getStoryCharacters,
      deleteChapter = _ref.deleteChapter,
      actionMessage = _ref.actionMessage,
      isStoryFavorite = _ref.isStoryFavorite,
      isFavorite = _ref.isFavorite,
      addStoryToFavorite = _ref.addStoryToFavorite,
      storyExists = _ref.storyExists,
      loadingFav = _ref.loadingFav,
      removeStoryFromFavorite = _ref.removeStoryFromFavorite;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  var auth = Object(_hooks_userHooks__WEBPACK_IMPORTED_MODULE_6__["useAuth"])();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState([]),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      mains = _React$useState2[0],
      setMains = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState([]),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      secondaries = _React$useState4[0],
      setSecondaries = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState([]),
      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState5, 2),
      chaptersArr = _React$useState6[0],
      setChaptersArr = _React$useState6[1];

  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    getStory(router.query.id);
    getChapters(router.query.id);
    getStoryCharacters(router.query.id);
    getStoryLocations(router.query.id);

    if (!auth.isLoading) {
      isStoryFavorite(router.query.id);
    }
  }, [router.query.id, auth]);
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    if (actionMessage) {
      antd__WEBPACK_IMPORTED_MODULE_3__["message"].success(actionMessage);
      getChapters(router.query.id);
    }
  }, [actionMessage]);

  var deleteChapterFunc = function deleteChapterFunc(id) {
    deleteChapter(id, router.query.id);
  };

  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    if (story.mainCharacters) {
      setMains(story.mainCharacters.filter(function (c) {
        return c["public"] || c.authorId === auth.user.uid;
      }));
    }
  }, [story]);
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    if (story.secondaryCharacters) {
      setSecondaries(story.secondaryCharacters.filter(function (c) {
        return c["public"] || c.authorId === auth.user.uid;
      }));
    }
  }, [story]);
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    if (!chapters.loading) {
      setChaptersArr(chapters.items.filter(function (c) {
        return c.status || c.authorId === auth.user.uid;
      }));
    }
  }, [chapters]);
  console.log(chapters);
  return __jsx(_components_hoc_LoadingScreen__WEBPACK_IMPORTED_MODULE_8__["default"], {
    loading: loading,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 5
    }
  }, __jsx(_components_hoc_LoadingScreen__WEBPACK_IMPORTED_MODULE_8__["default"], {
    loading: loadingFav,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }
  }, __jsx(_components_hoc_RedirectComp__WEBPACK_IMPORTED_MODULE_7__["default"], {
    type: "404",
    condition: storyExists,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 9
    }
  }, __jsx(_components_hoc_RedirectComp__WEBPACK_IMPORTED_MODULE_7__["default"], {
    type: "403",
    condition: story["public"] || auth.user && auth.user.uid === story.authorId,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "story",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    gutter: 24,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 15
    }
  }, __jsx(_components_story_Banner__WEBPACK_IMPORTED_MODULE_10__["default"], {
    loading: loading,
    story: story,
    id: router.query.id,
    isFavorite: isFavorite,
    addStoryToFavorite: addStoryToFavorite,
    removeStoryFromFavorite: removeStoryFromFavorite,
    auth: auth,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 17
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    sm: 24,
    md: 16,
    lg: 18,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "story-chapters",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 19
    }
  }, chaptersArr.length > 0 ? __jsx(_components_story_Chapters__WEBPACK_IMPORTED_MODULE_9__["default"], {
    loading: chapters.loading,
    chapters: chaptersArr,
    id: router.query.id,
    deleteChapter: deleteChapterFunc,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 23
    }
  }) : __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Empty"], {
    image: antd__WEBPACK_IMPORTED_MODULE_3__["Empty"].PRESENTED_IMAGE_SIMPLE,
    description: "No chapters yet",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 23
    }
  }), __jsx("h3", {
    className: "heading",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 21
    }
  }, "Main Characters"), __jsx(_components_common_Grid__WEBPACK_IMPORTED_MODULE_11__["CharacterGrid"], {
    gutter: [24, 16],
    xxl: 4,
    xl: 4,
    lg: 4,
    md: 6,
    sm: 8,
    xs: 12,
    type: "show",
    characters: mains,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 21
    }
  }), __jsx("h3", {
    className: "heading",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 21
    }
  }, "Secondary Characters"), __jsx(_components_common_Grid__WEBPACK_IMPORTED_MODULE_11__["CharacterGrid"], {
    gutter: [24, 16],
    xxl: 4,
    xl: 4,
    lg: 4,
    md: 6,
    sm: 8,
    xs: 12,
    type: "show",
    columnsCountBreakPoints: {
      350: 1,
      750: 2,
      900: 3,
      1200: 4,
      1600: 6
    },
    characters: secondaries,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 21
    }
  }), __jsx("h3", {
    className: "heading",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 21
    }
  }, "Locations"), __jsx(_components_common_Grid__WEBPACK_IMPORTED_MODULE_11__["LocationGrid"], {
    locations: storyLocations,
    gutter: "16px",
    columnsCountBreakPoints: {
      350: 1,
      750: 2,
      900: 3,
      1200: 4,
      1600: 6
    },
    lg: 4,
    md: 6,
    sm: 8,
    xs: 12,
    type: "story",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 21
    }
  })))))))));
};

_s(Story, "9e20YYukbxl+t/a/0dkprG989T8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"], _hooks_userHooks__WEBPACK_IMPORTED_MODULE_6__["useAuth"]];
});

_c = Story;

var mapStateToProps = function mapStateToProps(state) {
  return {
    story: state.stories.story,
    loading: state.stories.loading,
    chapters: state.stories.chapters,
    actionMessage: state.stories.message,
    loadingChapter: state.stories.loadingChapter,
    isFavorite: state.stories.isFavorite,
    storyExists: state.stories.storyExists,
    loadingFav: state.stories.loadingFav,
    storyLocations: state.stories.storyLocations
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, {
  getStory: _redux_actions_storiesActions__WEBPACK_IMPORTED_MODULE_5__["getStory"],
  getChapters: _redux_actions_storiesActions__WEBPACK_IMPORTED_MODULE_5__["getChapters"],
  getStoryCharacters: _redux_actions_storiesActions__WEBPACK_IMPORTED_MODULE_5__["getStoryCharacters"],
  deleteChapter: _redux_actions_storiesActions__WEBPACK_IMPORTED_MODULE_5__["deleteChapter"],
  isStoryFavorite: _redux_actions_storiesActions__WEBPACK_IMPORTED_MODULE_5__["isStoryFavorite"],
  addStoryToFavorite: _redux_actions_storiesActions__WEBPACK_IMPORTED_MODULE_5__["addStoryToFavorite"],
  removeStoryFromFavorite: _redux_actions_storiesActions__WEBPACK_IMPORTED_MODULE_5__["removeStoryFromFavorite"],
  getStoryLocations: _redux_actions_storiesActions__WEBPACK_IMPORTED_MODULE_5__["getStoryLocations"]
})(Story));

var _c;

$RefreshReg$(_c, "Story");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3RvcnkvL2luZGV4LmpzIl0sIm5hbWVzIjpbIlN0b3J5IiwiZ2V0U3RvcnkiLCJnZXRTdG9yeUxvY2F0aW9ucyIsInN0b3J5IiwibG9hZGluZyIsImdldENoYXB0ZXJzIiwiY2hhcHRlcnMiLCJzdG9yeUxvY2F0aW9ucyIsImdldFN0b3J5Q2hhcmFjdGVycyIsImRlbGV0ZUNoYXB0ZXIiLCJhY3Rpb25NZXNzYWdlIiwiaXNTdG9yeUZhdm9yaXRlIiwiaXNGYXZvcml0ZSIsImFkZFN0b3J5VG9GYXZvcml0ZSIsInN0b3J5RXhpc3RzIiwibG9hZGluZ0ZhdiIsInJlbW92ZVN0b3J5RnJvbUZhdm9yaXRlIiwicm91dGVyIiwidXNlUm91dGVyIiwiYXV0aCIsInVzZUF1dGgiLCJSZWFjdCIsInVzZVN0YXRlIiwibWFpbnMiLCJzZXRNYWlucyIsInNlY29uZGFyaWVzIiwic2V0U2Vjb25kYXJpZXMiLCJjaGFwdGVyc0FyciIsInNldENoYXB0ZXJzQXJyIiwidXNlRWZmZWN0IiwicXVlcnkiLCJpZCIsImlzTG9hZGluZyIsIm1lc3NhZ2UiLCJzdWNjZXNzIiwiZGVsZXRlQ2hhcHRlckZ1bmMiLCJtYWluQ2hhcmFjdGVycyIsImZpbHRlciIsImMiLCJhdXRob3JJZCIsInVzZXIiLCJ1aWQiLCJzZWNvbmRhcnlDaGFyYWN0ZXJzIiwiaXRlbXMiLCJzdGF0dXMiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwiRW1wdHkiLCJQUkVTRU5URURfSU1BR0VfU0lNUExFIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJzdG9yaWVzIiwibG9hZGluZ0NoYXB0ZXIiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFVQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FpQlI7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QUFPLENBQUNKLGVBQUQsRUFBa0I7QUFDdENqRCxVQUFRLEVBQVJBLHNFQURzQztBQUV0Q0ksYUFBVyxFQUFYQSx5RUFGc0M7QUFHdENHLG9CQUFrQixFQUFsQkEsZ0ZBSHNDO0FBSXRDQyxlQUFhLEVBQWJBLDJFQUpzQztBQUt0Q0UsaUJBQWUsRUFBZkEsNkVBTHNDO0FBTXRDRSxvQkFBa0IsRUFBbEJBLGdGQU5zQztBQU90Q0cseUJBQXVCLEVBQXZCQSxxRkFQc0M7QUFRdENkLG1CQUFpQixFQUFqQkEsK0VBQWlCQTtBQVJxQixDQUFsQixDQUFQLENBU1pGLEtBVFksQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zdG9yeS9baWRdLmVlZWY2MzM3NTEyMjVhY2Y0NmNkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBSb3csIENvbCwgbWVzc2FnZSwgRW1wdHkgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIGdldFN0b3J5LFxyXG4gIGdldENoYXB0ZXJzLFxyXG4gIGdldFN0b3J5Q2hhcmFjdGVycyxcclxuICBkZWxldGVDaGFwdGVyLFxyXG4gIGlzU3RvcnlGYXZvcml0ZSxcclxuICBhZGRTdG9yeVRvRmF2b3JpdGUsXHJcbiAgcmVtb3ZlU3RvcnlGcm9tRmF2b3JpdGUsXHJcbiAgZ2V0U3RvcnlMb2NhdGlvbnMsXHJcbn0gZnJvbSBcIi4uLy4uLy4uL3JlZHV4L2FjdGlvbnMvc3Rvcmllc0FjdGlvbnNcIjtcclxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gXCIuLi8uLi8uLi9ob29rcy91c2VySG9va3NcIjtcclxuXHJcbmltcG9ydCBSZWRpcmVjdENvbXAgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaG9jL1JlZGlyZWN0Q29tcFwiO1xyXG5pbXBvcnQgTG9hZGluZ1NjcmVlbiBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9ob2MvTG9hZGluZ1NjcmVlblwiO1xyXG5pbXBvcnQgQ2hhcHRlcnMgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvc3RvcnkvQ2hhcHRlcnNcIjtcclxuaW1wb3J0IEJhbm5lciBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9zdG9yeS9CYW5uZXJcIjtcclxuaW1wb3J0IHsgQ2hhcmFjdGVyR3JpZCwgTG9jYXRpb25HcmlkIH0gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvY29tbW9uL0dyaWRcIjtcclxuXHJcbmNvbnN0IFN0b3J5ID0gKHtcclxuICBnZXRTdG9yeSxcclxuICBnZXRTdG9yeUxvY2F0aW9ucyxcclxuICBzdG9yeSxcclxuICBsb2FkaW5nLFxyXG4gIGdldENoYXB0ZXJzLFxyXG4gIGNoYXB0ZXJzLFxyXG4gIHN0b3J5TG9jYXRpb25zLFxyXG4gIGdldFN0b3J5Q2hhcmFjdGVycyxcclxuICBkZWxldGVDaGFwdGVyLFxyXG4gIGFjdGlvbk1lc3NhZ2UsXHJcbiAgaXNTdG9yeUZhdm9yaXRlLFxyXG4gIGlzRmF2b3JpdGUsXHJcbiAgYWRkU3RvcnlUb0Zhdm9yaXRlLFxyXG4gIHN0b3J5RXhpc3RzLFxyXG4gIGxvYWRpbmdGYXYsXHJcbiAgcmVtb3ZlU3RvcnlGcm9tRmF2b3JpdGUsXHJcbn0pID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBhdXRoID0gdXNlQXV0aCgpO1xyXG5cclxuICBjb25zdCBbbWFpbnMsIHNldE1haW5zXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbc2Vjb25kYXJpZXMsIHNldFNlY29uZGFyaWVzXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbY2hhcHRlcnNBcnIsIHNldENoYXB0ZXJzQXJyXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldFN0b3J5KHJvdXRlci5xdWVyeS5pZCk7XHJcbiAgICBnZXRDaGFwdGVycyhyb3V0ZXIucXVlcnkuaWQpO1xyXG4gICAgZ2V0U3RvcnlDaGFyYWN0ZXJzKHJvdXRlci5xdWVyeS5pZCk7XHJcbiAgICBnZXRTdG9yeUxvY2F0aW9ucyhyb3V0ZXIucXVlcnkuaWQpO1xyXG4gICAgaWYgKCFhdXRoLmlzTG9hZGluZykge1xyXG4gICAgICBpc1N0b3J5RmF2b3JpdGUocm91dGVyLnF1ZXJ5LmlkKTtcclxuICAgIH1cclxuICB9LCBbcm91dGVyLnF1ZXJ5LmlkLCBhdXRoXSk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoYWN0aW9uTWVzc2FnZSkge1xyXG4gICAgICBtZXNzYWdlLnN1Y2Nlc3MoYWN0aW9uTWVzc2FnZSk7XHJcbiAgICAgIGdldENoYXB0ZXJzKHJvdXRlci5xdWVyeS5pZCk7XHJcbiAgICB9XHJcbiAgfSwgW2FjdGlvbk1lc3NhZ2VdKTtcclxuXHJcbiAgY29uc3QgZGVsZXRlQ2hhcHRlckZ1bmMgPSAoaWQpID0+IHtcclxuICAgIGRlbGV0ZUNoYXB0ZXIoaWQsIHJvdXRlci5xdWVyeS5pZCk7XHJcbiAgfTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChzdG9yeS5tYWluQ2hhcmFjdGVycykge1xyXG4gICAgICBzZXRNYWlucyhcclxuICAgICAgICBzdG9yeS5tYWluQ2hhcmFjdGVycy5maWx0ZXIoXHJcbiAgICAgICAgICAoYykgPT4gYy5wdWJsaWMgfHwgYy5hdXRob3JJZCA9PT0gYXV0aC51c2VyLnVpZFxyXG4gICAgICAgIClcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9LCBbc3RvcnldKTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChzdG9yeS5zZWNvbmRhcnlDaGFyYWN0ZXJzKSB7XHJcbiAgICAgIHNldFNlY29uZGFyaWVzKFxyXG4gICAgICAgIHN0b3J5LnNlY29uZGFyeUNoYXJhY3RlcnMuZmlsdGVyKFxyXG4gICAgICAgICAgKGMpID0+IGMucHVibGljIHx8IGMuYXV0aG9ySWQgPT09IGF1dGgudXNlci51aWRcclxuICAgICAgICApXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfSwgW3N0b3J5XSk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWNoYXB0ZXJzLmxvYWRpbmcpIHtcclxuICAgICAgc2V0Q2hhcHRlcnNBcnIoXHJcbiAgICAgICAgY2hhcHRlcnMuaXRlbXMuZmlsdGVyKChjKSA9PiBjLnN0YXR1cyB8fCBjLmF1dGhvcklkID09PSBhdXRoLnVzZXIudWlkKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH0sIFtjaGFwdGVyc10pO1xyXG5cclxuICBjb25zb2xlLmxvZyhjaGFwdGVycyk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TG9hZGluZ1NjcmVlbiBsb2FkaW5nPXtsb2FkaW5nfT5cclxuICAgICAgPExvYWRpbmdTY3JlZW4gbG9hZGluZz17bG9hZGluZ0Zhdn0+XHJcbiAgICAgICAgPFJlZGlyZWN0Q29tcCB0eXBlPVwiNDA0XCIgY29uZGl0aW9uPXtzdG9yeUV4aXN0c30+XHJcbiAgICAgICAgICA8UmVkaXJlY3RDb21wXHJcbiAgICAgICAgICAgIHR5cGU9XCI0MDNcIlxyXG4gICAgICAgICAgICBjb25kaXRpb249e1xyXG4gICAgICAgICAgICAgIHN0b3J5LnB1YmxpYyB8fCAoYXV0aC51c2VyICYmIGF1dGgudXNlci51aWQgPT09IHN0b3J5LmF1dGhvcklkKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RvcnlcIj5cclxuICAgICAgICAgICAgICA8Um93IGd1dHRlcj17MjR9PlxyXG4gICAgICAgICAgICAgICAgPEJhbm5lclxyXG4gICAgICAgICAgICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxyXG4gICAgICAgICAgICAgICAgICBzdG9yeT17c3Rvcnl9XHJcbiAgICAgICAgICAgICAgICAgIGlkPXtyb3V0ZXIucXVlcnkuaWR9XHJcbiAgICAgICAgICAgICAgICAgIGlzRmF2b3JpdGU9e2lzRmF2b3JpdGV9XHJcbiAgICAgICAgICAgICAgICAgIGFkZFN0b3J5VG9GYXZvcml0ZT17YWRkU3RvcnlUb0Zhdm9yaXRlfVxyXG4gICAgICAgICAgICAgICAgICByZW1vdmVTdG9yeUZyb21GYXZvcml0ZT17cmVtb3ZlU3RvcnlGcm9tRmF2b3JpdGV9XHJcbiAgICAgICAgICAgICAgICAgIGF1dGg9e2F1dGh9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPENvbCBzbT17MjR9IG1kPXsxNn0gbGc9ezE4fT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdG9yeS1jaGFwdGVyc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjaGFwdGVyc0Fyci5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPENoYXB0ZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc9e2NoYXB0ZXJzLmxvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYXB0ZXJzPXtjaGFwdGVyc0Fycn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e3JvdXRlci5xdWVyeS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlQ2hhcHRlcj17ZGVsZXRlQ2hhcHRlckZ1bmN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8RW1wdHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U9e0VtcHR5LlBSRVNFTlRFRF9JTUFHRV9TSU1QTEV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiTm8gY2hhcHRlcnMgeWV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImhlYWRpbmdcIj5NYWluIENoYXJhY3RlcnM8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDaGFyYWN0ZXJHcmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICBndXR0ZXI9e1syNCwgMTZdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgeHhsPXs0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgeGw9ezR9XHJcbiAgICAgICAgICAgICAgICAgICAgICBsZz17NH1cclxuICAgICAgICAgICAgICAgICAgICAgIG1kPXs2fVxyXG4gICAgICAgICAgICAgICAgICAgICAgc209ezh9XHJcbiAgICAgICAgICAgICAgICAgICAgICB4cz17MTJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic2hvd1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjaGFyYWN0ZXJzPXttYWluc31cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJoZWFkaW5nXCI+U2Vjb25kYXJ5IENoYXJhY3RlcnM8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDaGFyYWN0ZXJHcmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICBndXR0ZXI9e1syNCwgMTZdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgeHhsPXs0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgeGw9ezR9XHJcbiAgICAgICAgICAgICAgICAgICAgICBsZz17NH1cclxuICAgICAgICAgICAgICAgICAgICAgIG1kPXs2fVxyXG4gICAgICAgICAgICAgICAgICAgICAgc209ezh9XHJcbiAgICAgICAgICAgICAgICAgICAgICB4cz17MTJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic2hvd1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5zQ291bnRCcmVha1BvaW50cz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAzNTA6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDc1MDogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgOTAwOiAzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAxMjAwOiA0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAxNjAwOiA2LFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNoYXJhY3RlcnM9e3NlY29uZGFyaWVzfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImhlYWRpbmdcIj5Mb2NhdGlvbnM8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMb2NhdGlvbkdyaWRcclxuICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9ucz17c3RvcnlMb2NhdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICBndXR0ZXI9e1wiMTZweFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgY29sdW1uc0NvdW50QnJlYWtQb2ludHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgMzUwOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA3NTA6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDkwMDogMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgMTIwMDogNCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgMTYwMDogNixcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBsZz17NH1cclxuICAgICAgICAgICAgICAgICAgICAgIG1kPXs2fVxyXG4gICAgICAgICAgICAgICAgICAgICAgc209ezh9XHJcbiAgICAgICAgICAgICAgICAgICAgICB4cz17MTJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3RvcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9SZWRpcmVjdENvbXA+XHJcbiAgICAgICAgPC9SZWRpcmVjdENvbXA+XHJcbiAgICAgIDwvTG9hZGluZ1NjcmVlbj5cclxuICAgIDwvTG9hZGluZ1NjcmVlbj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG4gIHN0b3J5OiBzdGF0ZS5zdG9yaWVzLnN0b3J5LFxyXG4gIGxvYWRpbmc6IHN0YXRlLnN0b3JpZXMubG9hZGluZyxcclxuICBjaGFwdGVyczogc3RhdGUuc3Rvcmllcy5jaGFwdGVycyxcclxuICBhY3Rpb25NZXNzYWdlOiBzdGF0ZS5zdG9yaWVzLm1lc3NhZ2UsXHJcbiAgbG9hZGluZ0NoYXB0ZXI6IHN0YXRlLnN0b3JpZXMubG9hZGluZ0NoYXB0ZXIsXHJcbiAgaXNGYXZvcml0ZTogc3RhdGUuc3Rvcmllcy5pc0Zhdm9yaXRlLFxyXG4gIHN0b3J5RXhpc3RzOiBzdGF0ZS5zdG9yaWVzLnN0b3J5RXhpc3RzLFxyXG4gIGxvYWRpbmdGYXY6IHN0YXRlLnN0b3JpZXMubG9hZGluZ0ZhdixcclxuICBzdG9yeUxvY2F0aW9uczogc3RhdGUuc3Rvcmllcy5zdG9yeUxvY2F0aW9ucyxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywge1xyXG4gIGdldFN0b3J5LFxyXG4gIGdldENoYXB0ZXJzLFxyXG4gIGdldFN0b3J5Q2hhcmFjdGVycyxcclxuICBkZWxldGVDaGFwdGVyLFxyXG4gIGlzU3RvcnlGYXZvcml0ZSxcclxuICBhZGRTdG9yeVRvRmF2b3JpdGUsXHJcbiAgcmVtb3ZlU3RvcnlGcm9tRmF2b3JpdGUsXHJcbiAgZ2V0U3RvcnlMb2NhdGlvbnMsXHJcbn0pKFN0b3J5KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==