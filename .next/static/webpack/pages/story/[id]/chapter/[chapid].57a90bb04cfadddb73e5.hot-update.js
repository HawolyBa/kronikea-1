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
  };

  return __jsx(_components_hoc_LoadingScreen__WEBPACK_IMPORTED_MODULE_10__["default"], {
    loading: loading,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 5
    }
  }, __jsx(_components_hoc_RedirectComp__WEBPACK_IMPORTED_MODULE_11__["default"], {
    condition: chapterExists,
    type: "404",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }
  }, __jsx(_components_hoc_RedirectComp__WEBPACK_IMPORTED_MODULE_11__["default"], {
    condition: chapter["public"] || auth.user && auth.user.uid === chapter.authorId,
    type: "403",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "main-chapter",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "chapter-page",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Tooltip"], {
    title: "Next Chapter",
    placement: "bottom",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "icon custom-icon nav-btn next-btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 17
    }
  }, __jsx("ion-icon", {
    name: "chevron-forward-circle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 19
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Tooltip"], {
    title: "Previous Chapter",
    placement: "bottom",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "icon custom-icon nav-btn prev-btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 17
    }
  }, __jsx("ion-icon", {
    name: "chevron-back-circle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
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
      lineNumber: 83,
      columnNumber: 15
    }
  }), __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 15
    }
  }, chapter.number, ". ", chapter.title), __jsx("div", {
    className: "meta",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Divider"], {
    orientation: "left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/profile/1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 19
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 21
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Space"], {
    direction: "vertical",
    align: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 23
    }
  }, __jsx("div", {
    className: "avatar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: _utils_dummy__WEBPACK_IMPORTED_MODULE_6__["dummy"].person,
    alt: _utils_dummy__WEBPACK_IMPORTED_MODULE_6__["dummy"].name,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 27
    }
  })), __jsx("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
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
      lineNumber: 105,
      columnNumber: 15
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Divider"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 15
    }
  }), loadingComments ? __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Spin"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
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
      lineNumber: 113,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "main-chapter-details",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 13
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
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
      lineNumber: 128,
      columnNumber: 15
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Divider"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 15
    }
  }), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
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
      lineNumber: 139,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3RvcnkvL2NoYXB0ZXIvW2NoYXBpZF0vaW5kZXguanMiXSwibmFtZXMiOlsiQ2hhcHRlciIsInByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwiYXV0aCIsInVzZUF1dGgiLCJsb2FkaW5nIiwiY2hhcHRlciIsImxvYWRpbmdDb21tZW50cyIsImNvbW1lbnRzIiwiY2hhcHRlckV4aXN0cyIsIlJlYWN0IiwidXNlU3RhdGUiLCJjb21tZW50Qm9keSIsInNldENvbW1lbnRCb2R5IiwicmVzcG9uc2VCb2R5Iiwic2V0UmVzcG9uc2VCb2R5IiwiY2hhcmFjdGVycyIsInNldENoYXJhY3RlcnMiLCJ1c2VFZmZlY3QiLCJnZXRDaGFwdGVyIiwicXVlcnkiLCJpZCIsImNoYXBpZCIsImdldENvbW1lbnRzIiwiZmlsdGVyIiwiYyIsImF1dGhvcklkIiwidXNlciIsInVpZCIsInN1Ym1pdCIsInN1Ym1pdENvbW1lbnQiLCJjb250ZW50IiwidXNlcm5hbWUiLCJ1c2VySWQiLCJhbnN3ZXIiLCJjaGFwdGVySWQiLCJzdG9yeUlkIiwicHVzaCIsIm51bWJlciIsInRpdGxlIiwiZHVtbXkiLCJwZXJzb24iLCJuYW1lIiwiYXV0aG9yTmFtZSIsIl9faHRtbCIsImJvZHkiLCJkZWxldGVDb21tZW50IiwibG9jYXRpb25zIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJzdG9yaWVzIiwibWVzc2FnZSIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7O0FBS0EsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQ3pCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxNQUFNQyxJQUFJLEdBQUdDLGdFQUFPLEVBQXBC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Ozs7S0FGVEwsTzs7QUFvSU4sSUFBTWlELGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDbEMzQyxXQUFPLEVBQUUyQyxLQUFLLENBQUNDLE9BQU4sQ0FBYzVDLE9BRFc7QUFFbENELFdBQU8sRUFBRTRDLEtBQUssQ0FBQ0MsT0FBTixDQUFjN0MsT0FGVztBQUdsQ0csWUFBUSxFQUFFeUMsS0FBSyxDQUFDQyxPQUFOLENBQWMxQyxRQUhVO0FBSWxDRCxtQkFBZSxFQUFFMEMsS0FBSyxDQUFDQyxPQUFOLENBQWMzQyxlQUpHO0FBS2xDRSxpQkFBYSxFQUFFd0MsS0FBSyxDQUFDQyxPQUFOLENBQWN6QyxhQUxLO0FBTWxDMEMsV0FBTyxFQUFFRixLQUFLLENBQUNDLE9BQU4sQ0FBY0M7QUFOVyxHQUFaO0FBQUEsQ0FBeEI7O0FBU2VDLDBIQUFPLENBQUNKLGVBQUQsRUFBa0I7QUFDdEM3QixZQUFVLEVBQVZBLHdFQURzQztBQUV0Q0ksYUFBVyxFQUFYQSx5RUFGc0M7QUFHdENPLGVBQWEsRUFBYkEsMkVBSHNDO0FBSXRDZ0IsZUFBYSxFQUFiQSwyRUFBYUE7QUFKeUIsQ0FBbEIsQ0FBUCxDQUtaL0MsT0FMWSxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3N0b3J5L1tpZF0vY2hhcHRlci9bY2hhcGlkXS41N2E5MGJiMDRjZmFkZGRiNzNlNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IERpdmlkZXIsIFNwYWNlLCBQYWdlSGVhZGVyLCBUb29sdGlwLCBTcGluIH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmltcG9ydCB7IGR1bW15IH0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL3V0aWxzL2R1bW15XCI7XHJcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vaG9va3MvdXNlckhvb2tzXCI7XHJcbmltcG9ydCB7XHJcbiAgZ2V0Q2hhcHRlcixcclxuICBnZXRDb21tZW50cyxcclxuICBzdWJtaXRDb21tZW50LFxyXG4gIGRlbGV0ZUNvbW1lbnQsXHJcbn0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL3JlZHV4L2FjdGlvbnMvc3Rvcmllc0FjdGlvbnNcIjtcclxuXHJcbmltcG9ydCBDb21tZW50cyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy9jaGFwdGVyL0NvbW1lbnRzXCI7XHJcbmltcG9ydCBMb2FkaW5nU2NyZWVuIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL2hvYy9Mb2FkaW5nU2NyZWVuXCI7XHJcbmltcG9ydCBSZWRpcmVjdENvbXAgZnJvbSBcIi4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvaG9jL1JlZGlyZWN0Q29tcFwiO1xyXG5pbXBvcnQge1xyXG4gIENoYXJhY3RlckdyaWQsXHJcbiAgTG9jYXRpb25HcmlkLFxyXG59IGZyb20gXCIuLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL2NvbW1vbi9HcmlkXCI7XHJcblxyXG5jb25zdCBDaGFwdGVyID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgYXV0aCA9IHVzZUF1dGgoKTtcclxuICBjb25zdCB7IGxvYWRpbmcsIGNoYXB0ZXIsIGxvYWRpbmdDb21tZW50cywgY29tbWVudHMsIGNoYXB0ZXJFeGlzdHMgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBbY29tbWVudEJvZHksIHNldENvbW1lbnRCb2R5XSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtyZXNwb25zZUJvZHksIHNldFJlc3BvbnNlQm9keV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY2hhcmFjdGVycywgc2V0Q2hhcmFjdGVyc10gPSBSZWFjdC51c2VTdGF0ZShbXSk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBwcm9wcy5nZXRDaGFwdGVyKHJvdXRlci5xdWVyeS5pZCwgcm91dGVyLnF1ZXJ5LmNoYXBpZCwgXCJzaG93XCIpO1xyXG4gICAgcHJvcHMuZ2V0Q29tbWVudHMocm91dGVyLnF1ZXJ5LmNoYXBpZCk7XHJcbiAgfSwgW3JvdXRlci5xdWVyeS5pZCwgcm91dGVyLnF1ZXJ5LmNoYXBpZF0pO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGNoYXB0ZXIuY2hhcmFjdGVycykge1xyXG4gICAgICBzZXRDaGFyYWN0ZXJzKFxyXG4gICAgICAgIGNoYXB0ZXIuY2hhcmFjdGVycy5maWx0ZXIoXHJcbiAgICAgICAgICAoYykgPT4gYy5wdWJsaWMgfHwgYy5hdXRob3JJZCA9PT0gYXV0aC51c2VyLnVpZFxyXG4gICAgICAgIClcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9LCBbY2hhcHRlcl0pO1xyXG5cclxuICBjb25zdCBzdWJtaXQgPSAoKSA9PiB7XHJcbiAgICBwcm9wcy5zdWJtaXRDb21tZW50KFxyXG4gICAgICB7XHJcbiAgICAgICAgY29udGVudDogY29tbWVudEJvZHksXHJcbiAgICAgICAgdXNlcm5hbWU6IGF1dGgudXNlci51c2VybmFtZSxcclxuICAgICAgICB1c2VySWQ6IGF1dGgudXNlci51aWQsXHJcbiAgICAgICAgYW5zd2VyOiBmYWxzZSxcclxuICAgICAgICBjaGFwdGVySWQ6IHJvdXRlci5xdWVyeS5jaGFwaWQsXHJcbiAgICAgICAgc3RvcnlJZDogcm91dGVyLnF1ZXJ5LmlkLFxyXG4gICAgICB9LFxyXG4gICAgICByb3V0ZXIucXVlcnkuY2hhcGlkXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TG9hZGluZ1NjcmVlbiBsb2FkaW5nPXtsb2FkaW5nfT5cclxuICAgICAgPFJlZGlyZWN0Q29tcCBjb25kaXRpb249e2NoYXB0ZXJFeGlzdHN9IHR5cGU9XCI0MDRcIj5cclxuICAgICAgICA8UmVkaXJlY3RDb21wXHJcbiAgICAgICAgICBjb25kaXRpb249e1xyXG4gICAgICAgICAgICBjaGFwdGVyLnB1YmxpYyB8fCAoYXV0aC51c2VyICYmIGF1dGgudXNlci51aWQgPT09IGNoYXB0ZXIuYXV0aG9ySWQpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0eXBlPVwiNDAzXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tY2hhcHRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXB0ZXItcGFnZVwiPlxyXG4gICAgICAgICAgICAgIDxUb29sdGlwIHRpdGxlPVwiTmV4dCBDaGFwdGVyXCIgcGxhY2VtZW50PVwiYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24gY3VzdG9tLWljb24gbmF2LWJ0biBuZXh0LWJ0blwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW9uLWljb24gbmFtZT1cImNoZXZyb24tZm9yd2FyZC1jaXJjbGVcIj48L2lvbi1pY29uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgIDxUb29sdGlwIHRpdGxlPVwiUHJldmlvdXMgQ2hhcHRlclwiIHBsYWNlbWVudD1cImJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uIGN1c3RvbS1pY29uIG5hdi1idG4gcHJldi1idG5cIj5cclxuICAgICAgICAgICAgICAgICAgPGlvbi1pY29uIG5hbWU9XCJjaGV2cm9uLWJhY2stY2lyY2xlXCI+PC9pb24taWNvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICA8UGFnZUhlYWRlclxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2l0ZS1wYWdlLWhlYWRlclwiXHJcbiAgICAgICAgICAgICAgICBvbkJhY2s9eygpID0+IHJvdXRlci5wdXNoKGAvc3RvcnkvJHtyb3V0ZXIucXVlcnkuaWR9YCl9XHJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIkJhY2sgdG8gc3RvcnlcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGgyPlxyXG4gICAgICAgICAgICAgICAge2NoYXB0ZXIubnVtYmVyfS4ge2NoYXB0ZXIudGl0bGV9XHJcbiAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1ldGFcIj5cclxuICAgICAgICAgICAgICAgIDxEaXZpZGVyIG9yaWVudGF0aW9uPVwibGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2ZpbGUvMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFNwYWNlIGRpcmVjdGlvbj1cInZlcnRpY2FsXCIgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdmF0YXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZHVtbXkucGVyc29ufSBhbHQ9e2R1bW15Lm5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDU+e2NoYXB0ZXIuYXV0aG9yTmFtZX08L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9TcGFjZT5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvRGl2aWRlcj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8c2VjdGlvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2hhcHRlci1jb250ZW50XCJcclxuICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogY2hhcHRlci5ib2R5IH19XHJcbiAgICAgICAgICAgICAgPjwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgIHtsb2FkaW5nQ29tbWVudHMgPyAoXHJcbiAgICAgICAgICAgICAgICA8U3BpbiAvPlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8Q29tbWVudHNcclxuICAgICAgICAgICAgICAgICAgc3VibWl0PXtzdWJtaXR9XHJcbiAgICAgICAgICAgICAgICAgIGNvbW1lbnRCb2R5PXtjb21tZW50Qm9keX1cclxuICAgICAgICAgICAgICAgICAgc2V0Q29tbWVudEJvZHk9e3NldENvbW1lbnRCb2R5fVxyXG4gICAgICAgICAgICAgICAgICBhdXRoPXthdXRofVxyXG4gICAgICAgICAgICAgICAgICBjb21tZW50cz17Y29tbWVudHN9XHJcbiAgICAgICAgICAgICAgICAgIHJlc3BvbnNlQm9keT17cmVzcG9uc2VCb2R5fVxyXG4gICAgICAgICAgICAgICAgICBzZXRSZXNwb25zZUJvZHk9e3NldFJlc3BvbnNlQm9keX1cclxuICAgICAgICAgICAgICAgICAgZGVsZXRlQ29tbWVudD17cHJvcHMuZGVsZXRlQ29tbWVudH1cclxuICAgICAgICAgICAgICAgICAgY2hhcGlkPXtyb3V0ZXIucXVlcnkuY2hhcGlkfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWNoYXB0ZXItZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgIDxoMz5DaGFyYWN0ZXJzIGluIHRoaXMgY2hhcHRlcjwvaDM+XHJcbiAgICAgICAgICAgICAgPENoYXJhY3RlckdyaWRcclxuICAgICAgICAgICAgICAgIGd1dHRlcj17WzEyLCAxMl19XHJcbiAgICAgICAgICAgICAgICBjaGFyYWN0ZXJzPXtjaGFyYWN0ZXJzfVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInNob3dcIlxyXG4gICAgICAgICAgICAgICAgbGc9ezEyfVxyXG4gICAgICAgICAgICAgICAgbWQ9ezEyfVxyXG4gICAgICAgICAgICAgICAgc209ezEyfVxyXG4gICAgICAgICAgICAgICAgeHM9ezEyfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgICA8aDM+TG9jYXRpb25zIGluIHRoaXMgY2hhcHRlcjwvaDM+XHJcbiAgICAgICAgICAgICAgPExvY2F0aW9uR3JpZFxyXG4gICAgICAgICAgICAgICAgZ3V0dGVyPXtbMTIsIDEyXX1cclxuICAgICAgICAgICAgICAgIGxnPXsxMn1cclxuICAgICAgICAgICAgICAgIG1kPXsxMn1cclxuICAgICAgICAgICAgICAgIHNtPXsxMn1cclxuICAgICAgICAgICAgICAgIHhzPXsxMn1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJzdG9yeVwiXHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbnM9e2NoYXB0ZXIubG9jYXRpb25zfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9SZWRpcmVjdENvbXA+XHJcbiAgICAgIDwvUmVkaXJlY3RDb21wPlxyXG4gICAgPC9Mb2FkaW5nU2NyZWVuPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XHJcbiAgY2hhcHRlcjogc3RhdGUuc3Rvcmllcy5jaGFwdGVyLFxyXG4gIGxvYWRpbmc6IHN0YXRlLnN0b3JpZXMubG9hZGluZyxcclxuICBjb21tZW50czogc3RhdGUuc3Rvcmllcy5jb21tZW50cyxcclxuICBsb2FkaW5nQ29tbWVudHM6IHN0YXRlLnN0b3JpZXMubG9hZGluZ0NvbW1lbnRzLFxyXG4gIGNoYXB0ZXJFeGlzdHM6IHN0YXRlLnN0b3JpZXMuY2hhcHRlckV4aXN0cyxcclxuICBtZXNzYWdlOiBzdGF0ZS5zdG9yaWVzLm1lc3NhZ2UsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHtcclxuICBnZXRDaGFwdGVyLFxyXG4gIGdldENvbW1lbnRzLFxyXG4gIHN1Ym1pdENvbW1lbnQsXHJcbiAgZGVsZXRlQ29tbWVudCxcclxufSkoQ2hhcHRlcik7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=