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
    gutter: "16px",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3RvcnkvL2luZGV4LmpzIl0sIm5hbWVzIjpbIlN0b3J5IiwiZ2V0U3RvcnkiLCJnZXRTdG9yeUxvY2F0aW9ucyIsInN0b3J5IiwibG9hZGluZyIsImdldENoYXB0ZXJzIiwiY2hhcHRlcnMiLCJzdG9yeUxvY2F0aW9ucyIsImdldFN0b3J5Q2hhcmFjdGVycyIsImRlbGV0ZUNoYXB0ZXIiLCJhY3Rpb25NZXNzYWdlIiwiaXNTdG9yeUZhdm9yaXRlIiwiaXNGYXZvcml0ZSIsImFkZFN0b3J5VG9GYXZvcml0ZSIsInN0b3J5RXhpc3RzIiwibG9hZGluZ0ZhdiIsInJlbW92ZVN0b3J5RnJvbUZhdm9yaXRlIiwicm91dGVyIiwidXNlUm91dGVyIiwiYXV0aCIsInVzZUF1dGgiLCJSZWFjdCIsInVzZVN0YXRlIiwibWFpbnMiLCJzZXRNYWlucyIsInNlY29uZGFyaWVzIiwic2V0U2Vjb25kYXJpZXMiLCJjaGFwdGVyc0FyciIsInNldENoYXB0ZXJzQXJyIiwidXNlRWZmZWN0IiwicXVlcnkiLCJpZCIsImlzTG9hZGluZyIsIm1lc3NhZ2UiLCJzdWNjZXNzIiwiZGVsZXRlQ2hhcHRlckZ1bmMiLCJtYWluQ2hhcmFjdGVycyIsImZpbHRlciIsImMiLCJhdXRob3JJZCIsInVzZXIiLCJ1aWQiLCJzZWNvbmRhcnlDaGFyYWN0ZXJzIiwiaXRlbXMiLCJzdGF0dXMiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwiRW1wdHkiLCJQUkVTRU5URURfSU1BR0VfU0lNUExFIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJzdG9yaWVzIiwibG9hZGluZ0NoYXB0ZXIiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFVQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FpQlI7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O0FBQ3RDakQsVUFBUSxFQUFSQSxzRUFEc0M7QUFFdENJLGFBQVcsRUFBWEEseUVBRnNDO0FBR3RDRyxvQkFBa0IsRUFBbEJBLGdGQUhzQztBQUl0Q0MsZUFBYSxFQUFiQSwyRUFKc0M7QUFLdENFLGlCQUFlLEVBQWZBLDZFQUxzQztBQU10Q0Usb0JBQWtCLEVBQWxCQSxnRkFOc0M7QUFPdENHLHlCQUF1QixFQUF2QkEscUZBUHNDO0FBUXRDZCxtQkFBaUIsRUFBakJBLCtFQUFpQkE7QUFScUIsQ0FBbEIsQ0FBUCxDQVNaRixLQVRZLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3RvcnkvW2lkXS4wZmY5YjI1ZTIwNGMwYWVhNmI2YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUm93LCBDb2wsIG1lc3NhZ2UsIEVtcHR5IH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuaW1wb3J0IHtcclxuICBnZXRTdG9yeSxcclxuICBnZXRDaGFwdGVycyxcclxuICBnZXRTdG9yeUNoYXJhY3RlcnMsXHJcbiAgZGVsZXRlQ2hhcHRlcixcclxuICBpc1N0b3J5RmF2b3JpdGUsXHJcbiAgYWRkU3RvcnlUb0Zhdm9yaXRlLFxyXG4gIHJlbW92ZVN0b3J5RnJvbUZhdm9yaXRlLFxyXG4gIGdldFN0b3J5TG9jYXRpb25zLFxyXG59IGZyb20gXCIuLi8uLi8uLi9yZWR1eC9hY3Rpb25zL3N0b3JpZXNBY3Rpb25zXCI7XHJcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tIFwiLi4vLi4vLi4vaG9va3MvdXNlckhvb2tzXCI7XHJcblxyXG5pbXBvcnQgUmVkaXJlY3RDb21wIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2hvYy9SZWRpcmVjdENvbXBcIjtcclxuaW1wb3J0IExvYWRpbmdTY3JlZW4gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaG9jL0xvYWRpbmdTY3JlZW5cIjtcclxuaW1wb3J0IENoYXB0ZXJzIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL3N0b3J5L0NoYXB0ZXJzXCI7XHJcbmltcG9ydCBCYW5uZXIgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvc3RvcnkvQmFubmVyXCI7XHJcbmltcG9ydCB7IENoYXJhY3RlckdyaWQsIExvY2F0aW9uR3JpZCB9IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2NvbW1vbi9HcmlkXCI7XHJcblxyXG5jb25zdCBTdG9yeSA9ICh7XHJcbiAgZ2V0U3RvcnksXHJcbiAgZ2V0U3RvcnlMb2NhdGlvbnMsXHJcbiAgc3RvcnksXHJcbiAgbG9hZGluZyxcclxuICBnZXRDaGFwdGVycyxcclxuICBjaGFwdGVycyxcclxuICBzdG9yeUxvY2F0aW9ucyxcclxuICBnZXRTdG9yeUNoYXJhY3RlcnMsXHJcbiAgZGVsZXRlQ2hhcHRlcixcclxuICBhY3Rpb25NZXNzYWdlLFxyXG4gIGlzU3RvcnlGYXZvcml0ZSxcclxuICBpc0Zhdm9yaXRlLFxyXG4gIGFkZFN0b3J5VG9GYXZvcml0ZSxcclxuICBzdG9yeUV4aXN0cyxcclxuICBsb2FkaW5nRmF2LFxyXG4gIHJlbW92ZVN0b3J5RnJvbUZhdm9yaXRlLFxyXG59KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgYXV0aCA9IHVzZUF1dGgoKTtcclxuXHJcbiAgY29uc3QgW21haW5zLCBzZXRNYWluc10gPSBSZWFjdC51c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3NlY29uZGFyaWVzLCBzZXRTZWNvbmRhcmllc10gPSBSZWFjdC51c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2NoYXB0ZXJzQXJyLCBzZXRDaGFwdGVyc0Fycl0gPSBSZWFjdC51c2VTdGF0ZShbXSk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRTdG9yeShyb3V0ZXIucXVlcnkuaWQpO1xyXG4gICAgZ2V0Q2hhcHRlcnMocm91dGVyLnF1ZXJ5LmlkKTtcclxuICAgIGdldFN0b3J5Q2hhcmFjdGVycyhyb3V0ZXIucXVlcnkuaWQpO1xyXG4gICAgZ2V0U3RvcnlMb2NhdGlvbnMocm91dGVyLnF1ZXJ5LmlkKTtcclxuICAgIGlmICghYXV0aC5pc0xvYWRpbmcpIHtcclxuICAgICAgaXNTdG9yeUZhdm9yaXRlKHJvdXRlci5xdWVyeS5pZCk7XHJcbiAgICB9XHJcbiAgfSwgW3JvdXRlci5xdWVyeS5pZCwgYXV0aF0pO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGFjdGlvbk1lc3NhZ2UpIHtcclxuICAgICAgbWVzc2FnZS5zdWNjZXNzKGFjdGlvbk1lc3NhZ2UpO1xyXG4gICAgICBnZXRDaGFwdGVycyhyb3V0ZXIucXVlcnkuaWQpO1xyXG4gICAgfVxyXG4gIH0sIFthY3Rpb25NZXNzYWdlXSk7XHJcblxyXG4gIGNvbnN0IGRlbGV0ZUNoYXB0ZXJGdW5jID0gKGlkKSA9PiB7XHJcbiAgICBkZWxldGVDaGFwdGVyKGlkLCByb3V0ZXIucXVlcnkuaWQpO1xyXG4gIH07XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoc3RvcnkubWFpbkNoYXJhY3RlcnMpIHtcclxuICAgICAgc2V0TWFpbnMoXHJcbiAgICAgICAgc3RvcnkubWFpbkNoYXJhY3RlcnMuZmlsdGVyKFxyXG4gICAgICAgICAgKGMpID0+IGMucHVibGljIHx8IGMuYXV0aG9ySWQgPT09IGF1dGgudXNlci51aWRcclxuICAgICAgICApXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfSwgW3N0b3J5XSk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoc3Rvcnkuc2Vjb25kYXJ5Q2hhcmFjdGVycykge1xyXG4gICAgICBzZXRTZWNvbmRhcmllcyhcclxuICAgICAgICBzdG9yeS5zZWNvbmRhcnlDaGFyYWN0ZXJzLmZpbHRlcihcclxuICAgICAgICAgIChjKSA9PiBjLnB1YmxpYyB8fCBjLmF1dGhvcklkID09PSBhdXRoLnVzZXIudWlkXHJcbiAgICAgICAgKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH0sIFtzdG9yeV0pO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFjaGFwdGVycy5sb2FkaW5nKSB7XHJcbiAgICAgIHNldENoYXB0ZXJzQXJyKFxyXG4gICAgICAgIGNoYXB0ZXJzLml0ZW1zLmZpbHRlcigoYykgPT4gYy5zdGF0dXMgfHwgYy5hdXRob3JJZCA9PT0gYXV0aC51c2VyLnVpZClcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9LCBbY2hhcHRlcnNdKTtcclxuXHJcbiAgY29uc29sZS5sb2coY2hhcHRlcnMpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExvYWRpbmdTY3JlZW4gbG9hZGluZz17bG9hZGluZ30+XHJcbiAgICAgIDxMb2FkaW5nU2NyZWVuIGxvYWRpbmc9e2xvYWRpbmdGYXZ9PlxyXG4gICAgICAgIDxSZWRpcmVjdENvbXAgdHlwZT1cIjQwNFwiIGNvbmRpdGlvbj17c3RvcnlFeGlzdHN9PlxyXG4gICAgICAgICAgPFJlZGlyZWN0Q29tcFxyXG4gICAgICAgICAgICB0eXBlPVwiNDAzXCJcclxuICAgICAgICAgICAgY29uZGl0aW9uPXtcclxuICAgICAgICAgICAgICBzdG9yeS5wdWJsaWMgfHwgKGF1dGgudXNlciAmJiBhdXRoLnVzZXIudWlkID09PSBzdG9yeS5hdXRob3JJZClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0b3J5XCI+XHJcbiAgICAgICAgICAgICAgPFJvdyBndXR0ZXI9ezI0fT5cclxuICAgICAgICAgICAgICAgIDxCYW5uZXJcclxuICAgICAgICAgICAgICAgICAgbG9hZGluZz17bG9hZGluZ31cclxuICAgICAgICAgICAgICAgICAgc3Rvcnk9e3N0b3J5fVxyXG4gICAgICAgICAgICAgICAgICBpZD17cm91dGVyLnF1ZXJ5LmlkfVxyXG4gICAgICAgICAgICAgICAgICBpc0Zhdm9yaXRlPXtpc0Zhdm9yaXRlfVxyXG4gICAgICAgICAgICAgICAgICBhZGRTdG9yeVRvRmF2b3JpdGU9e2FkZFN0b3J5VG9GYXZvcml0ZX1cclxuICAgICAgICAgICAgICAgICAgcmVtb3ZlU3RvcnlGcm9tRmF2b3JpdGU9e3JlbW92ZVN0b3J5RnJvbUZhdm9yaXRlfVxyXG4gICAgICAgICAgICAgICAgICBhdXRoPXthdXRofVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxDb2wgc209ezI0fSBtZD17MTZ9IGxnPXsxOH0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RvcnktY2hhcHRlcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICB7Y2hhcHRlcnNBcnIubGVuZ3RoID4gMCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxDaGFwdGVyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPXtjaGFwdGVycy5sb2FkaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFwdGVycz17Y2hhcHRlcnNBcnJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtyb3V0ZXIucXVlcnkuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZUNoYXB0ZXI9e2RlbGV0ZUNoYXB0ZXJGdW5jfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPEVtcHR5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlPXtFbXB0eS5QUkVTRU5URURfSU1BR0VfU0lNUExFfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIk5vIGNoYXB0ZXJzIHlldFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJoZWFkaW5nXCI+TWFpbiBDaGFyYWN0ZXJzPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8Q2hhcmFjdGVyR3JpZFxyXG4gICAgICAgICAgICAgICAgICAgICAgZ3V0dGVyPXtbMjQsIDE2XX1cclxuICAgICAgICAgICAgICAgICAgICAgIHh4bD17NH1cclxuICAgICAgICAgICAgICAgICAgICAgIHhsPXs0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgbGc9ezR9XHJcbiAgICAgICAgICAgICAgICAgICAgICBtZD17Nn1cclxuICAgICAgICAgICAgICAgICAgICAgIHNtPXs4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgeHM9ezEyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInNob3dcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2hhcmFjdGVycz17bWFpbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiaGVhZGluZ1wiPlNlY29uZGFyeSBDaGFyYWN0ZXJzPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8Q2hhcmFjdGVyR3JpZFxyXG4gICAgICAgICAgICAgICAgICAgICAgZ3V0dGVyPXtcIjE2cHhcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIHh4bD17NH1cclxuICAgICAgICAgICAgICAgICAgICAgIHhsPXs0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgbGc9ezR9XHJcbiAgICAgICAgICAgICAgICAgICAgICBtZD17Nn1cclxuICAgICAgICAgICAgICAgICAgICAgIHNtPXs4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgeHM9ezEyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInNob3dcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY29sdW1uc0NvdW50QnJlYWtQb2ludHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgMzUwOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA3NTA6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDkwMDogMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgMTIwMDogNCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgMTYwMDogNixcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBjaGFyYWN0ZXJzPXtzZWNvbmRhcmllc31cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJoZWFkaW5nXCI+TG9jYXRpb25zPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8TG9jYXRpb25HcmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbnM9e3N0b3J5TG9jYXRpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgZ3V0dGVyPXtcIjE2cHhcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbnNDb3VudEJyZWFrUG9pbnRzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDM1MDogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgNzUwOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA5MDA6IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDEyMDA6IDQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDE2MDA6IDYsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgbGc9ezR9XHJcbiAgICAgICAgICAgICAgICAgICAgICBtZD17Nn1cclxuICAgICAgICAgICAgICAgICAgICAgIHNtPXs4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgeHM9ezEyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN0b3J5XCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvUmVkaXJlY3RDb21wPlxyXG4gICAgICAgIDwvUmVkaXJlY3RDb21wPlxyXG4gICAgICA8L0xvYWRpbmdTY3JlZW4+XHJcbiAgICA8L0xvYWRpbmdTY3JlZW4+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcclxuICBzdG9yeTogc3RhdGUuc3Rvcmllcy5zdG9yeSxcclxuICBsb2FkaW5nOiBzdGF0ZS5zdG9yaWVzLmxvYWRpbmcsXHJcbiAgY2hhcHRlcnM6IHN0YXRlLnN0b3JpZXMuY2hhcHRlcnMsXHJcbiAgYWN0aW9uTWVzc2FnZTogc3RhdGUuc3Rvcmllcy5tZXNzYWdlLFxyXG4gIGxvYWRpbmdDaGFwdGVyOiBzdGF0ZS5zdG9yaWVzLmxvYWRpbmdDaGFwdGVyLFxyXG4gIGlzRmF2b3JpdGU6IHN0YXRlLnN0b3JpZXMuaXNGYXZvcml0ZSxcclxuICBzdG9yeUV4aXN0czogc3RhdGUuc3Rvcmllcy5zdG9yeUV4aXN0cyxcclxuICBsb2FkaW5nRmF2OiBzdGF0ZS5zdG9yaWVzLmxvYWRpbmdGYXYsXHJcbiAgc3RvcnlMb2NhdGlvbnM6IHN0YXRlLnN0b3JpZXMuc3RvcnlMb2NhdGlvbnMsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHtcclxuICBnZXRTdG9yeSxcclxuICBnZXRDaGFwdGVycyxcclxuICBnZXRTdG9yeUNoYXJhY3RlcnMsXHJcbiAgZGVsZXRlQ2hhcHRlcixcclxuICBpc1N0b3J5RmF2b3JpdGUsXHJcbiAgYWRkU3RvcnlUb0Zhdm9yaXRlLFxyXG4gIHJlbW92ZVN0b3J5RnJvbUZhdm9yaXRlLFxyXG4gIGdldFN0b3J5TG9jYXRpb25zLFxyXG59KShTdG9yeSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=