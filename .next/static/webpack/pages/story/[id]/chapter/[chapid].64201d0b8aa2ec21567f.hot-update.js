webpackHotUpdate_N_E("pages/story/[id]/chapter/[chapid]",{

/***/ "./pages/story/[id]/chapter/[chapid]/index.js":
/*!****************************************************!*\
  !*** ./pages/story/[id]/chapter/[chapid]/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _utils_dummy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../utils/dummy */ "./utils/dummy.js");
/* harmony import */ var _hooks_userHooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../hooks/userHooks */ "./hooks/userHooks.js");
/* harmony import */ var _redux_actions_storiesActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../redux/actions/storiesActions */ "./redux/actions/storiesActions.js");
/* harmony import */ var _components_chapter_Comments__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../components/chapter/Comments */ "./components/chapter/Comments.js");
/* harmony import */ var _components_hoc_LoadingScreen__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../components/hoc/LoadingScreen */ "./components/hoc/LoadingScreen.js");
/* harmony import */ var _components_hoc_RedirectComp__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../components/hoc/RedirectComp */ "./components/hoc/RedirectComp.js");
/* harmony import */ var _components_common_Grid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../components/common/Grid */ "./components/common/Grid.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\pages\\story\\[id]\\chapter\\[chapid]\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;













var Chapter = function Chapter(props) {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  var auth = Object(_hooks_userHooks__WEBPACK_IMPORTED_MODULE_7__["useAuth"])();
  var loading = props.loading,
      chapter = props.chapter,
      loadingComments = props.loadingComments,
      comments = props.comments,
      chapterExists = props.chapterExists;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState([]),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      characters = _React$useState2[0],
      setCharacters = _React$useState2[1];

  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    props.getChapter(router.query.id, router.query.chapid, "show");
    props.getComments(router.query.chapid);
  }, [router.query.id, router.query.chapid]);
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    if (chapter.characters) {
      setCharacters(chapter.characters.filter(function (c) {
        return c["public"] || c.authorId === auth.user.uid;
      }));
    }
  }, [chapter]);
  return __jsx(_components_hoc_LoadingScreen__WEBPACK_IMPORTED_MODULE_10__["default"], {
    loading: loading,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }, __jsx(_components_hoc_RedirectComp__WEBPACK_IMPORTED_MODULE_11__["default"], {
    condition: chapterExists,
    type: "404",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, __jsx(_components_hoc_RedirectComp__WEBPACK_IMPORTED_MODULE_11__["default"], {
    condition: chapter["public"] || auth.user && auth.user.uid === chapter.authorId,
    type: "403",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "main-chapter",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "chapter-page",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Tooltip"], {
    title: "Next Chapter",
    placement: "bottom",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "icon custom-icon nav-btn next-btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }, __jsx("ion-icon", {
    name: "chevron-forward-circle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 19
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Tooltip"], {
    title: "Previous Chapter",
    placement: "bottom",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "icon custom-icon nav-btn prev-btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  }, __jsx("ion-icon", {
    name: "chevron-back-circle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 19
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["PageHeader"], {
    className: "site-page-header",
    onBack: function onBack() {
      return router.push("/story/".concat(router.query.id));
    },
    title: "Back to story",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 15
    }
  }), __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 15
    }
  }, chapter.number, ". ", chapter.title), __jsx("div", {
    className: "meta",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Divider"], {
    orientation: "left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/profile/1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 19
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 21
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Space"], {
    direction: "vertical",
    align: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 23
    }
  }, __jsx("div", {
    className: "avatar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: _utils_dummy__WEBPACK_IMPORTED_MODULE_6__["dummy"].person,
    alt: _utils_dummy__WEBPACK_IMPORTED_MODULE_6__["dummy"].name,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 27
    }
  })), __jsx("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 25
    }
  }, chapter.authorName)))))), __jsx("section", {
    className: "chapter-content",
    dangerouslySetInnerHTML: {
      __html: chapter.body
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 15
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Divider"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 15
    }
  }), loadingComments ? __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Spin"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 17
    }
  }) : __jsx(_components_chapter_Comments__WEBPACK_IMPORTED_MODULE_9__["default"], {
    submitComment: props.submitComment,
    auth: auth,
    comments: comments,
    deleteComment: props.deleteComment,
    chapid: router.query.chapid,
    storyId: router.query.id,
    authorId: chapter.authorId,
    title: chapter.storyTitle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "main-chapter-details",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 13
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 15
    }
  }, "Characters in this chapter"), __jsx(_components_common_Grid__WEBPACK_IMPORTED_MODULE_12__["CharacterGrid"], {
    gutter: [12, 12],
    characters: characters,
    type: "show",
    lg: 12,
    md: 12,
    sm: 12,
    xs: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 15
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Divider"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 15
    }
  }), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 15
    }
  }, "Locations in this chapter"), __jsx(_components_common_Grid__WEBPACK_IMPORTED_MODULE_12__["LocationGrid"], {
    gutter: [12, 12],
    lg: 12,
    md: 12,
    sm: 12,
    xs: 12,
    type: "story",
    locations: chapter.locations,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 15
    }
  }))))));
};

_s(Chapter, "5bsPvzQv/qmU9u3u7Bc4zGtd4wo=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"], _hooks_userHooks__WEBPACK_IMPORTED_MODULE_7__["useAuth"]];
});

_c = Chapter;

var mapStateToProps = function mapStateToProps(state) {
  return {
    chapter: state.stories.chapter,
    loading: state.stories.loading,
    comments: state.stories.comments,
    loadingComments: state.stories.loadingComments,
    chapterExists: state.stories.chapterExists,
    message: state.stories.message
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, {
  getChapter: _redux_actions_storiesActions__WEBPACK_IMPORTED_MODULE_8__["getChapter"],
  getComments: _redux_actions_storiesActions__WEBPACK_IMPORTED_MODULE_8__["getComments"],
  submitComment: _redux_actions_storiesActions__WEBPACK_IMPORTED_MODULE_8__["submitComment"],
  deleteComment: _redux_actions_storiesActions__WEBPACK_IMPORTED_MODULE_8__["deleteComment"]
})(Chapter));

var _c;

$RefreshReg$(_c, "Chapter");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3RvcnkvL2NoYXB0ZXIvW2NoYXBpZF0vaW5kZXguanMiXSwibmFtZXMiOlsiQ2hhcHRlciIsInByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwiYXV0aCIsInVzZUF1dGgiLCJsb2FkaW5nIiwiY2hhcHRlciIsImxvYWRpbmdDb21tZW50cyIsImNvbW1lbnRzIiwiY2hhcHRlckV4aXN0cyIsIlJlYWN0IiwidXNlU3RhdGUiLCJjaGFyYWN0ZXJzIiwic2V0Q2hhcmFjdGVycyIsInVzZUVmZmVjdCIsImdldENoYXB0ZXIiLCJxdWVyeSIsImlkIiwiY2hhcGlkIiwiZ2V0Q29tbWVudHMiLCJmaWx0ZXIiLCJjIiwiYXV0aG9ySWQiLCJ1c2VyIiwidWlkIiwicHVzaCIsIm51bWJlciIsInRpdGxlIiwiZHVtbXkiLCJwZXJzb24iLCJuYW1lIiwiYXV0aG9yTmFtZSIsIl9faHRtbCIsImJvZHkiLCJzdWJtaXRDb21tZW50IiwiZGVsZXRlQ29tbWVudCIsInN0b3J5VGl0bGUiLCJsb2NhdGlvbnMiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsInN0b3JpZXMiLCJtZXNzYWdlIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTs7QUFLQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFDekIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQU1DLElBQUksR0FBR0MsZ0VBQU8sRUFBcEI7QUFGeUIsTUFHakJDLE9BSGlCLEdBRzhDTCxLQUg5QyxDQUdqQkssT0FIaUI7QUFBQSxNQUdSQyxPQUhRLEdBRzhDTixLQUg5QyxDQUdSTSxPQUhRO0FBQUEsTUFHQ0MsZUFIRCxHQUc4Q1AsS0FIOUMsQ0FHQ08s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cUVBQUQ7QUFDRSxVQUFNLEVBQUUsQ0FBQyxFQUFELEVBQUssRUFBTCxDQURWO0FBRUUsTUFBRSxFQUFFLEVBRk47QUFHRSxNQUFFLEVBQUUsRUFITjtBQUlFLE1BQUUsRUFBRSxFQUpOO0FBS0UsTUFBRSxFQUFFLEVBTE47QUFNRSxRQUFJLEVBQUMsT0FOUDtBQU9FLGFBQVMsRUFBRU4sT0FBTyxDQUFDK0IsU0FQckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWJGLENBdERGLENBTkYsQ0FERixDQURGLENBREY7QUEyRkQsQ0FqSEQ7O0dBQU10QyxPO1VBQ1dHLHFELEVBQ0ZFLHdEOzs7S0FGVEwsTzs7QUFtSE4sSUFBTXVDLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDbENqQyxXQUFPLEVBQUVpQyxLQUFLLENBQUNDLE9BQU4sQ0FBY2xDLE9BRFc7QUFFbENELFdBQU8sRUFBRWtDLEtBQUssQ0FBQ0MsT0FBTixDQUFjbkMsT0FGVztBQUdsQ0csWUFBUSxFQUFFK0IsS0FBSyxDQUFDQyxPQUFOLENBQWNoQyxRQUhVO0FBSWxDRCxtQkFBZSxFQUFFZ0MsS0FBSyxDQUFDQyxPQUFOLENBQWNqQyxlQUpHO0FBS2xDRSxpQkFBYSxFQUFFOEIsS0FBSyxDQUFDQyxPQUFOLENBQWMvQixhQUxLO0FBTWxDZ0MsV0FBTyxFQUFFRixLQUFLLENBQUNDLE9BQU4sQ0FBY0M7QUFOVyxHQUFaO0FBQUEsQ0FBeEI7O0FBU2VDLDBIQUFPLENBQUNKLGVBQUQsRUFBa0I7QUFDdEN2QixZQUFVLEVBQVZBLHdFQURzQztBQUV0Q0ksYUFBVyxFQUFYQSx5RUFGc0M7QUFHdENlLGVBQWEsRUFBYkEsMkVBSHNDO0FBSXRDQyxlQUFhLEVBQWJBLDJFQUFhQTtBQUp5QixDQUFsQixDQUFQLENBS1pwQyxPQUxZLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3RvcnkvW2lkXS9jaGFwdGVyL1tjaGFwaWRdLjY0MjAxZDBiOGFhMmVjMjE1NjdmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRGl2aWRlciwgU3BhY2UsIFBhZ2VIZWFkZXIsIFRvb2x0aXAsIFNwaW4gfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuaW1wb3J0IHsgZHVtbXkgfSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vdXRpbHMvZHVtbXlcIjtcclxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ob29rcy91c2VySG9va3NcIjtcclxuaW1wb3J0IHtcclxuICBnZXRDaGFwdGVyLFxyXG4gIGdldENvbW1lbnRzLFxyXG4gIHN1Ym1pdENvbW1lbnQsXHJcbiAgZGVsZXRlQ29tbWVudCxcclxufSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vcmVkdXgvYWN0aW9ucy9zdG9yaWVzQWN0aW9uc1wiO1xyXG5cclxuaW1wb3J0IENvbW1lbnRzIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL2NoYXB0ZXIvQ29tbWVudHNcIjtcclxuaW1wb3J0IExvYWRpbmdTY3JlZW4gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvaG9jL0xvYWRpbmdTY3JlZW5cIjtcclxuaW1wb3J0IFJlZGlyZWN0Q29tcCBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy9ob2MvUmVkaXJlY3RDb21wXCI7XHJcbmltcG9ydCB7XHJcbiAgQ2hhcmFjdGVyR3JpZCxcclxuICBMb2NhdGlvbkdyaWQsXHJcbn0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvY29tbW9uL0dyaWRcIjtcclxuXHJcbmNvbnN0IENoYXB0ZXIgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBhdXRoID0gdXNlQXV0aCgpO1xyXG4gIGNvbnN0IHsgbG9hZGluZywgY2hhcHRlciwgbG9hZGluZ0NvbW1lbnRzLCBjb21tZW50cywgY2hhcHRlckV4aXN0cyB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IFtjaGFyYWN0ZXJzLCBzZXRDaGFyYWN0ZXJzXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHByb3BzLmdldENoYXB0ZXIocm91dGVyLnF1ZXJ5LmlkLCByb3V0ZXIucXVlcnkuY2hhcGlkLCBcInNob3dcIik7XHJcbiAgICBwcm9wcy5nZXRDb21tZW50cyhyb3V0ZXIucXVlcnkuY2hhcGlkKTtcclxuICB9LCBbcm91dGVyLnF1ZXJ5LmlkLCByb3V0ZXIucXVlcnkuY2hhcGlkXSk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoY2hhcHRlci5jaGFyYWN0ZXJzKSB7XHJcbiAgICAgIHNldENoYXJhY3RlcnMoXHJcbiAgICAgICAgY2hhcHRlci5jaGFyYWN0ZXJzLmZpbHRlcihcclxuICAgICAgICAgIChjKSA9PiBjLnB1YmxpYyB8fCBjLmF1dGhvcklkID09PSBhdXRoLnVzZXIudWlkXHJcbiAgICAgICAgKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH0sIFtjaGFwdGVyXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TG9hZGluZ1NjcmVlbiBsb2FkaW5nPXtsb2FkaW5nfT5cclxuICAgICAgPFJlZGlyZWN0Q29tcCBjb25kaXRpb249e2NoYXB0ZXJFeGlzdHN9IHR5cGU9XCI0MDRcIj5cclxuICAgICAgICA8UmVkaXJlY3RDb21wXHJcbiAgICAgICAgICBjb25kaXRpb249e1xyXG4gICAgICAgICAgICBjaGFwdGVyLnB1YmxpYyB8fCAoYXV0aC51c2VyICYmIGF1dGgudXNlci51aWQgPT09IGNoYXB0ZXIuYXV0aG9ySWQpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0eXBlPVwiNDAzXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tY2hhcHRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXB0ZXItcGFnZVwiPlxyXG4gICAgICAgICAgICAgIDxUb29sdGlwIHRpdGxlPVwiTmV4dCBDaGFwdGVyXCIgcGxhY2VtZW50PVwiYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24gY3VzdG9tLWljb24gbmF2LWJ0biBuZXh0LWJ0blwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW9uLWljb24gbmFtZT1cImNoZXZyb24tZm9yd2FyZC1jaXJjbGVcIj48L2lvbi1pY29uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgIDxUb29sdGlwIHRpdGxlPVwiUHJldmlvdXMgQ2hhcHRlclwiIHBsYWNlbWVudD1cImJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uIGN1c3RvbS1pY29uIG5hdi1idG4gcHJldi1idG5cIj5cclxuICAgICAgICAgICAgICAgICAgPGlvbi1pY29uIG5hbWU9XCJjaGV2cm9uLWJhY2stY2lyY2xlXCI+PC9pb24taWNvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICA8UGFnZUhlYWRlclxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2l0ZS1wYWdlLWhlYWRlclwiXHJcbiAgICAgICAgICAgICAgICBvbkJhY2s9eygpID0+IHJvdXRlci5wdXNoKGAvc3RvcnkvJHtyb3V0ZXIucXVlcnkuaWR9YCl9XHJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIkJhY2sgdG8gc3RvcnlcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGgyPlxyXG4gICAgICAgICAgICAgICAge2NoYXB0ZXIubnVtYmVyfS4ge2NoYXB0ZXIudGl0bGV9XHJcbiAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1ldGFcIj5cclxuICAgICAgICAgICAgICAgIDxEaXZpZGVyIG9yaWVudGF0aW9uPVwibGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2ZpbGUvMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFNwYWNlIGRpcmVjdGlvbj1cInZlcnRpY2FsXCIgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdmF0YXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZHVtbXkucGVyc29ufSBhbHQ9e2R1bW15Lm5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDU+e2NoYXB0ZXIuYXV0aG9yTmFtZX08L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9TcGFjZT5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvRGl2aWRlcj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8c2VjdGlvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2hhcHRlci1jb250ZW50XCJcclxuICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogY2hhcHRlci5ib2R5IH19XHJcbiAgICAgICAgICAgICAgPjwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgIHtsb2FkaW5nQ29tbWVudHMgPyAoXHJcbiAgICAgICAgICAgICAgICA8U3BpbiAvPlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8Q29tbWVudHNcclxuICAgICAgICAgICAgICAgICAgc3VibWl0Q29tbWVudD17cHJvcHMuc3VibWl0Q29tbWVudH1cclxuICAgICAgICAgICAgICAgICAgYXV0aD17YXV0aH1cclxuICAgICAgICAgICAgICAgICAgY29tbWVudHM9e2NvbW1lbnRzfVxyXG4gICAgICAgICAgICAgICAgICBkZWxldGVDb21tZW50PXtwcm9wcy5kZWxldGVDb21tZW50fVxyXG4gICAgICAgICAgICAgICAgICBjaGFwaWQ9e3JvdXRlci5xdWVyeS5jaGFwaWR9XHJcbiAgICAgICAgICAgICAgICAgIHN0b3J5SWQ9e3JvdXRlci5xdWVyeS5pZH1cclxuICAgICAgICAgICAgICAgICAgYXV0aG9ySWQ9e2NoYXB0ZXIuYXV0aG9ySWR9XHJcbiAgICAgICAgICAgICAgICAgIHRpdGxlPXtjaGFwdGVyLnN0b3J5VGl0bGV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tY2hhcHRlci1kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgPGgzPkNoYXJhY3RlcnMgaW4gdGhpcyBjaGFwdGVyPC9oMz5cclxuICAgICAgICAgICAgICA8Q2hhcmFjdGVyR3JpZFxyXG4gICAgICAgICAgICAgICAgZ3V0dGVyPXtbMTIsIDEyXX1cclxuICAgICAgICAgICAgICAgIGNoYXJhY3RlcnM9e2NoYXJhY3RlcnN9XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwic2hvd1wiXHJcbiAgICAgICAgICAgICAgICBsZz17MTJ9XHJcbiAgICAgICAgICAgICAgICBtZD17MTJ9XHJcbiAgICAgICAgICAgICAgICBzbT17MTJ9XHJcbiAgICAgICAgICAgICAgICB4cz17MTJ9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgIDxoMz5Mb2NhdGlvbnMgaW4gdGhpcyBjaGFwdGVyPC9oMz5cclxuICAgICAgICAgICAgICA8TG9jYXRpb25HcmlkXHJcbiAgICAgICAgICAgICAgICBndXR0ZXI9e1sxMiwgMTJdfVxyXG4gICAgICAgICAgICAgICAgbGc9ezEyfVxyXG4gICAgICAgICAgICAgICAgbWQ9ezEyfVxyXG4gICAgICAgICAgICAgICAgc209ezEyfVxyXG4gICAgICAgICAgICAgICAgeHM9ezEyfVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInN0b3J5XCJcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9ucz17Y2hhcHRlci5sb2NhdGlvbnN9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1JlZGlyZWN0Q29tcD5cclxuICAgICAgPC9SZWRpcmVjdENvbXA+XHJcbiAgICA8L0xvYWRpbmdTY3JlZW4+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcclxuICBjaGFwdGVyOiBzdGF0ZS5zdG9yaWVzLmNoYXB0ZXIsXHJcbiAgbG9hZGluZzogc3RhdGUuc3Rvcmllcy5sb2FkaW5nLFxyXG4gIGNvbW1lbnRzOiBzdGF0ZS5zdG9yaWVzLmNvbW1lbnRzLFxyXG4gIGxvYWRpbmdDb21tZW50czogc3RhdGUuc3Rvcmllcy5sb2FkaW5nQ29tbWVudHMsXHJcbiAgY2hhcHRlckV4aXN0czogc3RhdGUuc3Rvcmllcy5jaGFwdGVyRXhpc3RzLFxyXG4gIG1lc3NhZ2U6IHN0YXRlLnN0b3JpZXMubWVzc2FnZSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywge1xyXG4gIGdldENoYXB0ZXIsXHJcbiAgZ2V0Q29tbWVudHMsXHJcbiAgc3VibWl0Q29tbWVudCxcclxuICBkZWxldGVDb21tZW50LFxyXG59KShDaGFwdGVyKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==