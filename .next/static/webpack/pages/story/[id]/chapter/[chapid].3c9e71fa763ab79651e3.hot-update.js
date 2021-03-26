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
    }, router.query.chapid);
    setCommentBody("");
  };

  return __jsx(_components_hoc_LoadingScreen__WEBPACK_IMPORTED_MODULE_10__["default"], {
    loading: loading,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 5
    }
  }, __jsx(_components_hoc_RedirectComp__WEBPACK_IMPORTED_MODULE_11__["default"], {
    condition: chapterExists,
    type: "404",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }
  }, __jsx(_components_hoc_RedirectComp__WEBPACK_IMPORTED_MODULE_11__["default"], {
    condition: chapter["public"] || auth.user && auth.user.uid === chapter.authorId,
    type: "403",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "main-chapter",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "chapter-page",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Tooltip"], {
    title: "Next Chapter",
    placement: "bottom",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "icon custom-icon nav-btn next-btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 17
    }
  }, __jsx("ion-icon", {
    name: "chevron-forward-circle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 19
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Tooltip"], {
    title: "Previous Chapter",
    placement: "bottom",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "icon custom-icon nav-btn prev-btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 17
    }
  }, __jsx("ion-icon", {
    name: "chevron-back-circle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
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
      lineNumber: 84,
      columnNumber: 15
    }
  }), __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 15
    }
  }, chapter.number, ". ", chapter.title), __jsx("div", {
    className: "meta",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Divider"], {
    orientation: "left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/profile/1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 19
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 21
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Space"], {
    direction: "vertical",
    align: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 23
    }
  }, __jsx("div", {
    className: "avatar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: _utils_dummy__WEBPACK_IMPORTED_MODULE_6__["dummy"].person,
    alt: _utils_dummy__WEBPACK_IMPORTED_MODULE_6__["dummy"].name,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 27
    }
  })), __jsx("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
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
      lineNumber: 106,
      columnNumber: 15
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Divider"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 15
    }
  }), loadingComments ? __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Spin"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
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
    chapid: router.query.chapid,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "main-chapter-details",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 13
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
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
      lineNumber: 129,
      columnNumber: 15
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Divider"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 15
    }
  }), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
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
      lineNumber: 140,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3RvcnkvL2NoYXB0ZXIvW2NoYXBpZF0vaW5kZXguanMiXSwibmFtZXMiOlsiQ2hhcHRlciIsInByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwiYXV0aCIsInVzZUF1dGgiLCJsb2FkaW5nIiwiY2hhcHRlciIsImxvYWRpbmdDb21tZW50cyIsImNvbW1lbnRzIiwiY2hhcHRlckV4aXN0cyIsIlJlYWN0IiwidXNlU3RhdGUiLCJjb21tZW50Qm9keSIsInNldENvbW1lbnRCb2R5IiwicmVzcG9uc2VCb2R5Iiwic2V0UmVzcG9uc2VCb2R5IiwiY2hhcmFjdGVycyIsInNldENoYXJhY3RlcnMiLCJ1c2VFZmZlY3QiLCJnZXRDaGFwdGVyIiwicXVlcnkiLCJpZCIsImNoYXBpZCIsImdldENvbW1lbnRzIiwiZmlsdGVyIiwiYyIsImF1dGhvcklkIiwidXNlciIsInVpZCIsInN1Ym1pdCIsInN1Ym1pdENvbW1lbnQiLCJjb250ZW50IiwidXNlcm5hbWUiLCJ1c2VySWQiLCJhbnN3ZXIiLCJjaGFwdGVySWQiLCJzdG9yeUlkIiwicHVzaCIsIm51bWJlciIsInRpdGxlIiwiZHVtbXkiLCJwZXJzb24iLCJuYW1lIiwiYXV0aG9yTmFtZSIsIl9faHRtbCIsImJvZHkiLCJkZWxldGVDb21tZW50IiwibG9jYXRpb25zIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJzdG9yaWVzIiwibWVzc2FnZSIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7O0FBS0EsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQ3pCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxNQUFNQyxJQUFJLEdBQUdDLGdFQUFPLEVBQXBC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R0FBTWhELE87VUFDV0cscUQsRUFDRkUsd0Q7OztLQUZUTCxPOztBQXFJTixJQUFNaUQsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUNsQzNDLFdBQU8sRUFBRTJDLEtBQUssQ0FBQ0MsT0FBTixDQUFjNUMsT0FEVztBQUVsQ0QsV0FBTyxFQUFFNEMsS0FBSyxDQUFDQyxPQUFOLENBQWM3QyxPQUZXO0FBR2xDRyxZQUFRLEVBQUV5QyxLQUFLLENBQUNDLE9BQU4sQ0FBYzFDLFFBSFU7QUFJbENELG1CQUFlLEVBQUUwQyxLQUFLLENBQUNDLE9BQU4sQ0FBYzNDLGVBSkc7QUFLbENFLGlCQUFhLEVBQUV3QyxLQUFLLENBQUNDLE9BQU4sQ0FBY3pDLGFBTEs7QUFNbEMwQyxXQUFPLEVBQUVGLEtBQUssQ0FBQ0MsT0FBTixDQUFjQztBQU5XLEdBQVo7QUFBQSxDQUF4Qjs7QUFTZUMsMEhBQU8sQ0FBQ0osZUFBRCxFQUFrQjtBQUN0QzdCLFlBQVUsRUFBVkEsd0VBRHNDO0FBRXRDSSxhQUFXLEVBQVhBLHlFQUZzQztBQUd0Q08sZUFBYSxFQUFiQSwyRUFIc0M7QUFJdENnQixlQUFhLEVBQWJBLDJFQUFhQTtBQUp5QixDQUFsQixDQUFQLENBS1ovQyxPQUxZLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3RvcnkvW2lkXS9jaGFwdGVyL1tjaGFwaWRdLjNjOWU3MWZhNzYzYWI3OTY1MWUzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRGl2aWRlciwgU3BhY2UsIFBhZ2VIZWFkZXIsIFRvb2x0aXAsIFNwaW4gfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuaW1wb3J0IHsgZHVtbXkgfSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vdXRpbHMvZHVtbXlcIjtcclxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ob29rcy91c2VySG9va3NcIjtcclxuaW1wb3J0IHtcclxuICBnZXRDaGFwdGVyLFxyXG4gIGdldENvbW1lbnRzLFxyXG4gIHN1Ym1pdENvbW1lbnQsXHJcbiAgZGVsZXRlQ29tbWVudCxcclxufSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vcmVkdXgvYWN0aW9ucy9zdG9yaWVzQWN0aW9uc1wiO1xyXG5cclxuaW1wb3J0IENvbW1lbnRzIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL2NoYXB0ZXIvQ29tbWVudHNcIjtcclxuaW1wb3J0IExvYWRpbmdTY3JlZW4gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvaG9jL0xvYWRpbmdTY3JlZW5cIjtcclxuaW1wb3J0IFJlZGlyZWN0Q29tcCBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy9ob2MvUmVkaXJlY3RDb21wXCI7XHJcbmltcG9ydCB7XHJcbiAgQ2hhcmFjdGVyR3JpZCxcclxuICBMb2NhdGlvbkdyaWQsXHJcbn0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvY29tbW9uL0dyaWRcIjtcclxuXHJcbmNvbnN0IENoYXB0ZXIgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBhdXRoID0gdXNlQXV0aCgpO1xyXG4gIGNvbnN0IHsgbG9hZGluZywgY2hhcHRlciwgbG9hZGluZ0NvbW1lbnRzLCBjb21tZW50cywgY2hhcHRlckV4aXN0cyB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IFtjb21tZW50Qm9keSwgc2V0Q29tbWVudEJvZHldID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Jlc3BvbnNlQm9keSwgc2V0UmVzcG9uc2VCb2R5XSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjaGFyYWN0ZXJzLCBzZXRDaGFyYWN0ZXJzXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHByb3BzLmdldENoYXB0ZXIocm91dGVyLnF1ZXJ5LmlkLCByb3V0ZXIucXVlcnkuY2hhcGlkLCBcInNob3dcIik7XHJcbiAgICBwcm9wcy5nZXRDb21tZW50cyhyb3V0ZXIucXVlcnkuY2hhcGlkKTtcclxuICB9LCBbcm91dGVyLnF1ZXJ5LmlkLCByb3V0ZXIucXVlcnkuY2hhcGlkXSk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoY2hhcHRlci5jaGFyYWN0ZXJzKSB7XHJcbiAgICAgIHNldENoYXJhY3RlcnMoXHJcbiAgICAgICAgY2hhcHRlci5jaGFyYWN0ZXJzLmZpbHRlcihcclxuICAgICAgICAgIChjKSA9PiBjLnB1YmxpYyB8fCBjLmF1dGhvcklkID09PSBhdXRoLnVzZXIudWlkXHJcbiAgICAgICAgKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH0sIFtjaGFwdGVyXSk7XHJcblxyXG4gIGNvbnN0IHN1Ym1pdCA9ICgpID0+IHtcclxuICAgIHByb3BzLnN1Ym1pdENvbW1lbnQoXHJcbiAgICAgIHtcclxuICAgICAgICBjb250ZW50OiBjb21tZW50Qm9keSxcclxuICAgICAgICB1c2VybmFtZTogYXV0aC51c2VyLnVzZXJuYW1lLFxyXG4gICAgICAgIHVzZXJJZDogYXV0aC51c2VyLnVpZCxcclxuICAgICAgICBhbnN3ZXI6IGZhbHNlLFxyXG4gICAgICAgIGNoYXB0ZXJJZDogcm91dGVyLnF1ZXJ5LmNoYXBpZCxcclxuICAgICAgICBzdG9yeUlkOiByb3V0ZXIucXVlcnkuaWQsXHJcbiAgICAgIH0sXHJcbiAgICAgIHJvdXRlci5xdWVyeS5jaGFwaWRcclxuICAgICk7XHJcbiAgICBzZXRDb21tZW50Qm9keShcIlwiKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExvYWRpbmdTY3JlZW4gbG9hZGluZz17bG9hZGluZ30+XHJcbiAgICAgIDxSZWRpcmVjdENvbXAgY29uZGl0aW9uPXtjaGFwdGVyRXhpc3RzfSB0eXBlPVwiNDA0XCI+XHJcbiAgICAgICAgPFJlZGlyZWN0Q29tcFxyXG4gICAgICAgICAgY29uZGl0aW9uPXtcclxuICAgICAgICAgICAgY2hhcHRlci5wdWJsaWMgfHwgKGF1dGgudXNlciAmJiBhdXRoLnVzZXIudWlkID09PSBjaGFwdGVyLmF1dGhvcklkKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdHlwZT1cIjQwM1wiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWNoYXB0ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFwdGVyLXBhZ2VcIj5cclxuICAgICAgICAgICAgICA8VG9vbHRpcCB0aXRsZT1cIk5leHQgQ2hhcHRlclwiIHBsYWNlbWVudD1cImJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uIGN1c3RvbS1pY29uIG5hdi1idG4gbmV4dC1idG5cIj5cclxuICAgICAgICAgICAgICAgICAgPGlvbi1pY29uIG5hbWU9XCJjaGV2cm9uLWZvcndhcmQtY2lyY2xlXCI+PC9pb24taWNvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICA8VG9vbHRpcCB0aXRsZT1cIlByZXZpb3VzIENoYXB0ZXJcIiBwbGFjZW1lbnQ9XCJib3R0b21cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbiBjdXN0b20taWNvbiBuYXYtYnRuIHByZXYtYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpb24taWNvbiBuYW1lPVwiY2hldnJvbi1iYWNrLWNpcmNsZVwiPjwvaW9uLWljb24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgPFBhZ2VIZWFkZXJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNpdGUtcGFnZS1oZWFkZXJcIlxyXG4gICAgICAgICAgICAgICAgb25CYWNrPXsoKSA9PiByb3V0ZXIucHVzaChgL3N0b3J5LyR7cm91dGVyLnF1ZXJ5LmlkfWApfVxyXG4gICAgICAgICAgICAgICAgdGl0bGU9XCJCYWNrIHRvIHN0b3J5XCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxoMj5cclxuICAgICAgICAgICAgICAgIHtjaGFwdGVyLm51bWJlcn0uIHtjaGFwdGVyLnRpdGxlfVxyXG4gICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXRhXCI+XHJcbiAgICAgICAgICAgICAgICA8RGl2aWRlciBvcmllbnRhdGlvbj1cImxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9maWxlLzFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxTcGFjZSBkaXJlY3Rpb249XCJ2ZXJ0aWNhbFwiIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXZhdGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2R1bW15LnBlcnNvbn0gYWx0PXtkdW1teS5uYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1PntjaGFwdGVyLmF1dGhvck5hbWV9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvU3BhY2U+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L0RpdmlkZXI+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPHNlY3Rpb25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNoYXB0ZXItY29udGVudFwiXHJcbiAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGNoYXB0ZXIuYm9keSB9fVxyXG4gICAgICAgICAgICAgID48L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgICB7bG9hZGluZ0NvbW1lbnRzID8gKFxyXG4gICAgICAgICAgICAgICAgPFNwaW4gLz5cclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPENvbW1lbnRzXHJcbiAgICAgICAgICAgICAgICAgIHN1Ym1pdD17c3VibWl0fVxyXG4gICAgICAgICAgICAgICAgICBjb21tZW50Qm9keT17Y29tbWVudEJvZHl9XHJcbiAgICAgICAgICAgICAgICAgIHNldENvbW1lbnRCb2R5PXtzZXRDb21tZW50Qm9keX1cclxuICAgICAgICAgICAgICAgICAgYXV0aD17YXV0aH1cclxuICAgICAgICAgICAgICAgICAgY29tbWVudHM9e2NvbW1lbnRzfVxyXG4gICAgICAgICAgICAgICAgICByZXNwb25zZUJvZHk9e3Jlc3BvbnNlQm9keX1cclxuICAgICAgICAgICAgICAgICAgc2V0UmVzcG9uc2VCb2R5PXtzZXRSZXNwb25zZUJvZHl9XHJcbiAgICAgICAgICAgICAgICAgIGRlbGV0ZUNvbW1lbnQ9e3Byb3BzLmRlbGV0ZUNvbW1lbnR9XHJcbiAgICAgICAgICAgICAgICAgIGNoYXBpZD17cm91dGVyLnF1ZXJ5LmNoYXBpZH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1jaGFwdGVyLWRldGFpbHNcIj5cclxuICAgICAgICAgICAgICA8aDM+Q2hhcmFjdGVycyBpbiB0aGlzIGNoYXB0ZXI8L2gzPlxyXG4gICAgICAgICAgICAgIDxDaGFyYWN0ZXJHcmlkXHJcbiAgICAgICAgICAgICAgICBndXR0ZXI9e1sxMiwgMTJdfVxyXG4gICAgICAgICAgICAgICAgY2hhcmFjdGVycz17Y2hhcmFjdGVyc31cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJzaG93XCJcclxuICAgICAgICAgICAgICAgIGxnPXsxMn1cclxuICAgICAgICAgICAgICAgIG1kPXsxMn1cclxuICAgICAgICAgICAgICAgIHNtPXsxMn1cclxuICAgICAgICAgICAgICAgIHhzPXsxMn1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgPGgzPkxvY2F0aW9ucyBpbiB0aGlzIGNoYXB0ZXI8L2gzPlxyXG4gICAgICAgICAgICAgIDxMb2NhdGlvbkdyaWRcclxuICAgICAgICAgICAgICAgIGd1dHRlcj17WzEyLCAxMl19XHJcbiAgICAgICAgICAgICAgICBsZz17MTJ9XHJcbiAgICAgICAgICAgICAgICBtZD17MTJ9XHJcbiAgICAgICAgICAgICAgICBzbT17MTJ9XHJcbiAgICAgICAgICAgICAgICB4cz17MTJ9XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwic3RvcnlcIlxyXG4gICAgICAgICAgICAgICAgbG9jYXRpb25zPXtjaGFwdGVyLmxvY2F0aW9uc31cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvUmVkaXJlY3RDb21wPlxyXG4gICAgICA8L1JlZGlyZWN0Q29tcD5cclxuICAgIDwvTG9hZGluZ1NjcmVlbj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG4gIGNoYXB0ZXI6IHN0YXRlLnN0b3JpZXMuY2hhcHRlcixcclxuICBsb2FkaW5nOiBzdGF0ZS5zdG9yaWVzLmxvYWRpbmcsXHJcbiAgY29tbWVudHM6IHN0YXRlLnN0b3JpZXMuY29tbWVudHMsXHJcbiAgbG9hZGluZ0NvbW1lbnRzOiBzdGF0ZS5zdG9yaWVzLmxvYWRpbmdDb21tZW50cyxcclxuICBjaGFwdGVyRXhpc3RzOiBzdGF0ZS5zdG9yaWVzLmNoYXB0ZXJFeGlzdHMsXHJcbiAgbWVzc2FnZTogc3RhdGUuc3Rvcmllcy5tZXNzYWdlLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7XHJcbiAgZ2V0Q2hhcHRlcixcclxuICBnZXRDb21tZW50cyxcclxuICBzdWJtaXRDb21tZW50LFxyXG4gIGRlbGV0ZUNvbW1lbnQsXHJcbn0pKENoYXB0ZXIpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9