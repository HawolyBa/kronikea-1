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

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(""),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      commentBody = _React$useState2[0],
      setCommentBody = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(""),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      responseBody = _React$useState4[0],
      setResponseBody = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState([]),
      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState5, 2),
      characters = _React$useState6[0],
      setCharacters = _React$useState6[1];

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

  var submit = function submit() {
    props.submitComment({
      content: commentBody,
      username: auth.user.username,
      userId: auth.user.uid,
      answer: false,
      chapterId: router.query.chapid,
      storyId: router.query.id
    });
  };

  return __jsx(_components_hoc_LoadingScreen__WEBPACK_IMPORTED_MODULE_10__["default"], {
    loading: loading,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 5
    }
  }, __jsx(_components_hoc_RedirectComp__WEBPACK_IMPORTED_MODULE_11__["default"], {
    condition: chapterExists,
    type: "404",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }, __jsx(_components_hoc_RedirectComp__WEBPACK_IMPORTED_MODULE_11__["default"], {
    condition: chapter["public"] || auth.user && auth.user.uid === chapter.authorId,
    type: "403",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "main-chapter",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "chapter-page",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Tooltip"], {
    title: "Next Chapter",
    placement: "bottom",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "icon custom-icon nav-btn next-btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 17
    }
  }, __jsx("ion-icon", {
    name: "chevron-forward-circle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 19
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Tooltip"], {
    title: "Previous Chapter",
    placement: "bottom",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "icon custom-icon nav-btn prev-btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 17
    }
  }, __jsx("ion-icon", {
    name: "chevron-back-circle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
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
      lineNumber: 80,
      columnNumber: 15
    }
  }), __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 15
    }
  }, chapter.number, ". ", chapter.title), __jsx("div", {
    className: "meta",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Divider"], {
    orientation: "left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/profile/1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 19
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 21
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Space"], {
    direction: "vertical",
    align: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 23
    }
  }, __jsx("div", {
    className: "avatar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: _utils_dummy__WEBPACK_IMPORTED_MODULE_6__["dummy"].person,
    alt: _utils_dummy__WEBPACK_IMPORTED_MODULE_6__["dummy"].name,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 27
    }
  })), __jsx("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
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
      lineNumber: 102,
      columnNumber: 15
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Divider"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 15
    }
  }), loadingComments ? __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Spin"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 17
    }
  }) : __jsx(_components_chapter_Comments__WEBPACK_IMPORTED_MODULE_9__["default"], {
    submit: submit,
    commentBody: commentBody,
    setCommentBody: setCommentBody,
    auth: auth,
    comments: comments,
    responseBody: responseBody,
    setResponseBody: setResponseBody,
    deleteComment: props.deleteComment,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "main-chapter-details",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 13
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
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
      lineNumber: 124,
      columnNumber: 15
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Divider"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 15
    }
  }), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
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
      lineNumber: 135,
      columnNumber: 15
    }
  }))))));
};

_s(Chapter, "oTliN4Jw6BOkce9Tt+d6VZzz8Gs=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3RvcnkvL2NoYXB0ZXIvW2NoYXBpZF0vaW5kZXguanMiXSwibmFtZXMiOlsiQ2hhcHRlciIsInByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwiYXV0aCIsInVzZUF1dGgiLCJsb2FkaW5nIiwiY2hhcHRlciIsImxvYWRpbmdDb21tZW50cyIsImNvbW1lbnRzIiwiY2hhcHRlckV4aXN0cyIsIlJlYWN0IiwidXNlU3RhdGUiLCJjb21tZW50Qm9keSIsInNldENvbW1lbnRCb2R5IiwicmVzcG9uc2VCb2R5Iiwic2V0UmVzcG9uc2VCb2R5IiwiY2hhcmFjdGVycyIsInNldENoYXJhY3RlcnMiLCJ1c2VFZmZlY3QiLCJnZXRDaGFwdGVyIiwicXVlcnkiLCJpZCIsImNoYXBpZCIsImdldENvbW1lbnRzIiwiZmlsdGVyIiwiYyIsImF1dGhvcklkIiwidXNlciIsInVpZCIsInN1Ym1pdCIsInN1Ym1pdENvbW1lbnQiLCJjb250ZW50IiwidXNlcm5hbWUiLCJ1c2VySWQiLCJhbnN3ZXIiLCJjaGFwdGVySWQiLCJzdG9yeUlkIiwicHVzaCIsIm51bWJlciIsInRpdGxlIiwiZHVtbXkiLCJwZXJzb24iLCJuYW1lIiwiYXV0aG9yTmFtZSIsIl9faHRtbCIsImJvZHkiLCJkZWxldGVDb21tZW50IiwibG9jYXRpb25zIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJzdG9yaWVzIiwibWVzc2FnZSIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7O0FBS0EsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQ3pCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxNQUFNQyxJQUFJLEdBQUdDLGdFQUFPLEVBQXBC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LFdBQU8sRUFBRTJDLEtBQUssQ0FBQ0MsT0FBTixDQUFjNUMsT0FEVztBQUVsQ0QsV0FBTyxFQUFFNEMsS0FBSyxDQUFDQyxPQUFOLENBQWM3QyxPQUZXO0FBR2xDRyxZQUFRLEVBQUV5QyxLQUFLLENBQUNDLE9BQU4sQ0FBYzFDLFFBSFU7QUFJbENELG1CQUFlLEVBQUUwQyxLQUFLLENBQUNDLE9BQU4sQ0FBYzNDLGVBSkc7QUFLbENFLGlCQUFhLEVBQUV3QyxLQUFLLENBQUNDLE9BQU4sQ0FBY3pDLGFBTEs7QUFNbEMwQyxXQUFPLEVBQUVGLEtBQUssQ0FBQ0MsT0FBTixDQUFjQztBQU5XLEdBQVo7QUFBQSxDQUF4Qjs7QUFTZUMsMEhBQU8sQ0FBQ0osZUFBRCxFQUFrQjtBQUN0QzdCLFlBQVUsRUFBVkEsd0VBRHNDO0FBRXRDSSxhQUFXLEVBQVhBLHlFQUZzQztBQUd0Q08sZUFBYSxFQUFiQSwyRUFIc0M7QUFJdENnQixlQUFhLEVBQWJBLDJFQUFhQTtBQUp5QixDQUFsQixDQUFQLENBS1ovQyxPQUxZLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3RvcnkvW2lkXS9jaGFwdGVyL1tjaGFwaWRdLmE5NzAxMGNkMjE5ZTYyNzA4OGVjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRGl2aWRlciwgU3BhY2UsIFBhZ2VIZWFkZXIsIFRvb2x0aXAsIFNwaW4gfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuaW1wb3J0IHsgZHVtbXkgfSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vdXRpbHMvZHVtbXlcIjtcclxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ob29rcy91c2VySG9va3NcIjtcclxuaW1wb3J0IHtcclxuICBnZXRDaGFwdGVyLFxyXG4gIGdldENvbW1lbnRzLFxyXG4gIHN1Ym1pdENvbW1lbnQsXHJcbiAgZGVsZXRlQ29tbWVudCxcclxufSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vcmVkdXgvYWN0aW9ucy9zdG9yaWVzQWN0aW9uc1wiO1xyXG5cclxuaW1wb3J0IENvbW1lbnRzIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL2NoYXB0ZXIvQ29tbWVudHNcIjtcclxuaW1wb3J0IExvYWRpbmdTY3JlZW4gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvaG9jL0xvYWRpbmdTY3JlZW5cIjtcclxuaW1wb3J0IFJlZGlyZWN0Q29tcCBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy9ob2MvUmVkaXJlY3RDb21wXCI7XHJcbmltcG9ydCB7XHJcbiAgQ2hhcmFjdGVyR3JpZCxcclxuICBMb2NhdGlvbkdyaWQsXHJcbn0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvY29tbW9uL0dyaWRcIjtcclxuXHJcbmNvbnN0IENoYXB0ZXIgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBhdXRoID0gdXNlQXV0aCgpO1xyXG4gIGNvbnN0IHsgbG9hZGluZywgY2hhcHRlciwgbG9hZGluZ0NvbW1lbnRzLCBjb21tZW50cywgY2hhcHRlckV4aXN0cyB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IFtjb21tZW50Qm9keSwgc2V0Q29tbWVudEJvZHldID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Jlc3BvbnNlQm9keSwgc2V0UmVzcG9uc2VCb2R5XSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjaGFyYWN0ZXJzLCBzZXRDaGFyYWN0ZXJzXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHByb3BzLmdldENoYXB0ZXIocm91dGVyLnF1ZXJ5LmlkLCByb3V0ZXIucXVlcnkuY2hhcGlkLCBcInNob3dcIik7XHJcbiAgICBwcm9wcy5nZXRDb21tZW50cyhyb3V0ZXIucXVlcnkuY2hhcGlkKTtcclxuICB9LCBbcm91dGVyLnF1ZXJ5LmlkLCByb3V0ZXIucXVlcnkuY2hhcGlkXSk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoY2hhcHRlci5jaGFyYWN0ZXJzKSB7XHJcbiAgICAgIHNldENoYXJhY3RlcnMoXHJcbiAgICAgICAgY2hhcHRlci5jaGFyYWN0ZXJzLmZpbHRlcihcclxuICAgICAgICAgIChjKSA9PiBjLnB1YmxpYyB8fCBjLmF1dGhvcklkID09PSBhdXRoLnVzZXIudWlkXHJcbiAgICAgICAgKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH0sIFtjaGFwdGVyXSk7XHJcblxyXG4gIGNvbnN0IHN1Ym1pdCA9ICgpID0+IHtcclxuICAgIHByb3BzLnN1Ym1pdENvbW1lbnQoe1xyXG4gICAgICBjb250ZW50OiBjb21tZW50Qm9keSxcclxuICAgICAgdXNlcm5hbWU6IGF1dGgudXNlci51c2VybmFtZSxcclxuICAgICAgdXNlcklkOiBhdXRoLnVzZXIudWlkLFxyXG4gICAgICBhbnN3ZXI6IGZhbHNlLFxyXG4gICAgICBjaGFwdGVySWQ6IHJvdXRlci5xdWVyeS5jaGFwaWQsXHJcbiAgICAgIHN0b3J5SWQ6IHJvdXRlci5xdWVyeS5pZCxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TG9hZGluZ1NjcmVlbiBsb2FkaW5nPXtsb2FkaW5nfT5cclxuICAgICAgPFJlZGlyZWN0Q29tcCBjb25kaXRpb249e2NoYXB0ZXJFeGlzdHN9IHR5cGU9XCI0MDRcIj5cclxuICAgICAgICA8UmVkaXJlY3RDb21wXHJcbiAgICAgICAgICBjb25kaXRpb249e1xyXG4gICAgICAgICAgICBjaGFwdGVyLnB1YmxpYyB8fCAoYXV0aC51c2VyICYmIGF1dGgudXNlci51aWQgPT09IGNoYXB0ZXIuYXV0aG9ySWQpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0eXBlPVwiNDAzXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tY2hhcHRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXB0ZXItcGFnZVwiPlxyXG4gICAgICAgICAgICAgIDxUb29sdGlwIHRpdGxlPVwiTmV4dCBDaGFwdGVyXCIgcGxhY2VtZW50PVwiYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24gY3VzdG9tLWljb24gbmF2LWJ0biBuZXh0LWJ0blwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW9uLWljb24gbmFtZT1cImNoZXZyb24tZm9yd2FyZC1jaXJjbGVcIj48L2lvbi1pY29uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgIDxUb29sdGlwIHRpdGxlPVwiUHJldmlvdXMgQ2hhcHRlclwiIHBsYWNlbWVudD1cImJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uIGN1c3RvbS1pY29uIG5hdi1idG4gcHJldi1idG5cIj5cclxuICAgICAgICAgICAgICAgICAgPGlvbi1pY29uIG5hbWU9XCJjaGV2cm9uLWJhY2stY2lyY2xlXCI+PC9pb24taWNvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICA8UGFnZUhlYWRlclxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2l0ZS1wYWdlLWhlYWRlclwiXHJcbiAgICAgICAgICAgICAgICBvbkJhY2s9eygpID0+IHJvdXRlci5wdXNoKGAvc3RvcnkvJHtyb3V0ZXIucXVlcnkuaWR9YCl9XHJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIkJhY2sgdG8gc3RvcnlcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGgyPlxyXG4gICAgICAgICAgICAgICAge2NoYXB0ZXIubnVtYmVyfS4ge2NoYXB0ZXIudGl0bGV9XHJcbiAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1ldGFcIj5cclxuICAgICAgICAgICAgICAgIDxEaXZpZGVyIG9yaWVudGF0aW9uPVwibGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2ZpbGUvMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFNwYWNlIGRpcmVjdGlvbj1cInZlcnRpY2FsXCIgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdmF0YXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZHVtbXkucGVyc29ufSBhbHQ9e2R1bW15Lm5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDU+e2NoYXB0ZXIuYXV0aG9yTmFtZX08L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9TcGFjZT5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvRGl2aWRlcj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8c2VjdGlvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2hhcHRlci1jb250ZW50XCJcclxuICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogY2hhcHRlci5ib2R5IH19XHJcbiAgICAgICAgICAgICAgPjwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgIHtsb2FkaW5nQ29tbWVudHMgPyAoXHJcbiAgICAgICAgICAgICAgICA8U3BpbiAvPlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8Q29tbWVudHNcclxuICAgICAgICAgICAgICAgICAgc3VibWl0PXtzdWJtaXR9XHJcbiAgICAgICAgICAgICAgICAgIGNvbW1lbnRCb2R5PXtjb21tZW50Qm9keX1cclxuICAgICAgICAgICAgICAgICAgc2V0Q29tbWVudEJvZHk9e3NldENvbW1lbnRCb2R5fVxyXG4gICAgICAgICAgICAgICAgICBhdXRoPXthdXRofVxyXG4gICAgICAgICAgICAgICAgICBjb21tZW50cz17Y29tbWVudHN9XHJcbiAgICAgICAgICAgICAgICAgIHJlc3BvbnNlQm9keT17cmVzcG9uc2VCb2R5fVxyXG4gICAgICAgICAgICAgICAgICBzZXRSZXNwb25zZUJvZHk9e3NldFJlc3BvbnNlQm9keX1cclxuICAgICAgICAgICAgICAgICAgZGVsZXRlQ29tbWVudD17cHJvcHMuZGVsZXRlQ29tbWVudH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1jaGFwdGVyLWRldGFpbHNcIj5cclxuICAgICAgICAgICAgICA8aDM+Q2hhcmFjdGVycyBpbiB0aGlzIGNoYXB0ZXI8L2gzPlxyXG4gICAgICAgICAgICAgIDxDaGFyYWN0ZXJHcmlkXHJcbiAgICAgICAgICAgICAgICBndXR0ZXI9e1sxMiwgMTJdfVxyXG4gICAgICAgICAgICAgICAgY2hhcmFjdGVycz17Y2hhcmFjdGVyc31cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJzaG93XCJcclxuICAgICAgICAgICAgICAgIGxnPXsxMn1cclxuICAgICAgICAgICAgICAgIG1kPXsxMn1cclxuICAgICAgICAgICAgICAgIHNtPXsxMn1cclxuICAgICAgICAgICAgICAgIHhzPXsxMn1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgPGgzPkxvY2F0aW9ucyBpbiB0aGlzIGNoYXB0ZXI8L2gzPlxyXG4gICAgICAgICAgICAgIDxMb2NhdGlvbkdyaWRcclxuICAgICAgICAgICAgICAgIGd1dHRlcj17WzEyLCAxMl19XHJcbiAgICAgICAgICAgICAgICBsZz17MTJ9XHJcbiAgICAgICAgICAgICAgICBtZD17MTJ9XHJcbiAgICAgICAgICAgICAgICBzbT17MTJ9XHJcbiAgICAgICAgICAgICAgICB4cz17MTJ9XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwic3RvcnlcIlxyXG4gICAgICAgICAgICAgICAgbG9jYXRpb25zPXtjaGFwdGVyLmxvY2F0aW9uc31cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvUmVkaXJlY3RDb21wPlxyXG4gICAgICA8L1JlZGlyZWN0Q29tcD5cclxuICAgIDwvTG9hZGluZ1NjcmVlbj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG4gIGNoYXB0ZXI6IHN0YXRlLnN0b3JpZXMuY2hhcHRlcixcclxuICBsb2FkaW5nOiBzdGF0ZS5zdG9yaWVzLmxvYWRpbmcsXHJcbiAgY29tbWVudHM6IHN0YXRlLnN0b3JpZXMuY29tbWVudHMsXHJcbiAgbG9hZGluZ0NvbW1lbnRzOiBzdGF0ZS5zdG9yaWVzLmxvYWRpbmdDb21tZW50cyxcclxuICBjaGFwdGVyRXhpc3RzOiBzdGF0ZS5zdG9yaWVzLmNoYXB0ZXJFeGlzdHMsXHJcbiAgbWVzc2FnZTogc3RhdGUuc3Rvcmllcy5tZXNzYWdlLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7XHJcbiAgZ2V0Q2hhcHRlcixcclxuICBnZXRDb21tZW50cyxcclxuICBzdWJtaXRDb21tZW50LFxyXG4gIGRlbGV0ZUNvbW1lbnQsXHJcbn0pKENoYXB0ZXIpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9