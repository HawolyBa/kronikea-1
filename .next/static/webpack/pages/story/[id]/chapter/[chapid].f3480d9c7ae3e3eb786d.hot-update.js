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
      responseBody = _React$useState2[0],
      setResponseBody = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState([]),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      characters = _React$useState4[0],
      setCharacters = _React$useState4[1];

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
      lineNumber: 48,
      columnNumber: 5
    }
  }, __jsx(_components_hoc_RedirectComp__WEBPACK_IMPORTED_MODULE_11__["default"], {
    condition: chapterExists,
    type: "404",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, __jsx(_components_hoc_RedirectComp__WEBPACK_IMPORTED_MODULE_11__["default"], {
    condition: chapter["public"] || auth.user && auth.user.uid === chapter.authorId,
    type: "403",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "main-chapter",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "chapter-page",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Tooltip"], {
    title: "Next Chapter",
    placement: "bottom",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "icon custom-icon nav-btn next-btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  }, __jsx("ion-icon", {
    name: "chevron-forward-circle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 19
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Tooltip"], {
    title: "Previous Chapter",
    placement: "bottom",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "icon custom-icon nav-btn prev-btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }
  }, __jsx("ion-icon", {
    name: "chevron-back-circle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
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
      lineNumber: 68,
      columnNumber: 15
    }
  }), __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 15
    }
  }, chapter.number, ". ", chapter.title), __jsx("div", {
    className: "meta",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Divider"], {
    orientation: "left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/profile/1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 19
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 21
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Space"], {
    direction: "vertical",
    align: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 23
    }
  }, __jsx("div", {
    className: "avatar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: _utils_dummy__WEBPACK_IMPORTED_MODULE_6__["dummy"].person,
    alt: _utils_dummy__WEBPACK_IMPORTED_MODULE_6__["dummy"].name,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 27
    }
  })), __jsx("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
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
      lineNumber: 90,
      columnNumber: 15
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Divider"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 15
    }
  }), loadingComments ? __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Spin"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 17
    }
  }) : __jsx(_components_chapter_Comments__WEBPACK_IMPORTED_MODULE_9__["default"], {
    submitComment: props.submitComment,
    auth: auth,
    comments: comments,
    responseBody: responseBody,
    setResponseBody: setResponseBody,
    deleteComment: props.deleteComment,
    chapid: router.query.chapid,
    storyId: router.query.id,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "main-chapter-details",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 13
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
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
      lineNumber: 112,
      columnNumber: 15
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Divider"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 15
    }
  }), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
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
      lineNumber: 123,
      columnNumber: 15
    }
  }))))));
};

_s(Chapter, "g/OXFmibLDTQqgzKjwKFnfLK0/w=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3RvcnkvL2NoYXB0ZXIvW2NoYXBpZF0vaW5kZXguanMiXSwibmFtZXMiOlsiQ2hhcHRlciIsInByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwiYXV0aCIsInVzZUF1dGgiLCJsb2FkaW5nIiwiY2hhcHRlciIsImxvYWRpbmdDb21tZW50cyIsImNvbW1lbnRzIiwiY2hhcHRlckV4aXN0cyIsIlJlYWN0IiwidXNlU3RhdGUiLCJyZXNwb25zZUJvZHkiLCJzZXRSZXNwb25zZUJvZHkiLCJjaGFyYWN0ZXJzIiwic2V0Q2hhcmFjdGVycyIsInVzZUVmZmVjdCIsImdldENoYXB0ZXIiLCJxdWVyeSIsImlkIiwiY2hhcGlkIiwiZ2V0Q29tbWVudHMiLCJmaWx0ZXIiLCJjIiwiYXV0aG9ySWQiLCJ1c2VyIiwidWlkIiwicHVzaCIsIm51bWJlciIsInRpdGxlIiwiZHVtbXkiLCJwZXJzb24iLCJuYW1lIiwiYXV0aG9yTmFtZSIsIl9faHRtbCIsImJvZHkiLCJzdWJtaXRDb21tZW50IiwiZGVsZXRlQ29tbWVudCIsImxvY2F0aW9ucyIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwic3RvcmllcyIsIm1lc3NhZ2UiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBOztBQUtBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUN6QixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsSUFBSSxHQUFHQyxnRUFBTyxFQUFwQjtBQUZ5QixNQUdqQkMsT0FIaUIsR0FHOENMLEtBSDlDLENBR2pCSyxPQUhpQjtBQUFBLE1BR1JDLE9BSFEsR0FHOENOLEtBSDlDLENBR1JNLE9BSFE7QUFBQSxNQUdDQyxlQUhE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T0FMWSxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3N0b3J5L1tpZF0vY2hhcHRlci9bY2hhcGlkXS5mMzQ4MGQ5YzdhZTNlM2ViNzg2ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IERpdmlkZXIsIFNwYWNlLCBQYWdlSGVhZGVyLCBUb29sdGlwLCBTcGluIH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmltcG9ydCB7IGR1bW15IH0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL3V0aWxzL2R1bW15XCI7XHJcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vaG9va3MvdXNlckhvb2tzXCI7XHJcbmltcG9ydCB7XHJcbiAgZ2V0Q2hhcHRlcixcclxuICBnZXRDb21tZW50cyxcclxuICBzdWJtaXRDb21tZW50LFxyXG4gIGRlbGV0ZUNvbW1lbnQsXHJcbn0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL3JlZHV4L2FjdGlvbnMvc3Rvcmllc0FjdGlvbnNcIjtcclxuXHJcbmltcG9ydCBDb21tZW50cyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy9jaGFwdGVyL0NvbW1lbnRzXCI7XHJcbmltcG9ydCBMb2FkaW5nU2NyZWVuIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL2hvYy9Mb2FkaW5nU2NyZWVuXCI7XHJcbmltcG9ydCBSZWRpcmVjdENvbXAgZnJvbSBcIi4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvaG9jL1JlZGlyZWN0Q29tcFwiO1xyXG5pbXBvcnQge1xyXG4gIENoYXJhY3RlckdyaWQsXHJcbiAgTG9jYXRpb25HcmlkLFxyXG59IGZyb20gXCIuLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL2NvbW1vbi9HcmlkXCI7XHJcblxyXG5jb25zdCBDaGFwdGVyID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgYXV0aCA9IHVzZUF1dGgoKTtcclxuICBjb25zdCB7IGxvYWRpbmcsIGNoYXB0ZXIsIGxvYWRpbmdDb21tZW50cywgY29tbWVudHMsIGNoYXB0ZXJFeGlzdHMgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBbcmVzcG9uc2VCb2R5LCBzZXRSZXNwb25zZUJvZHldID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2NoYXJhY3RlcnMsIHNldENoYXJhY3RlcnNdID0gUmVhY3QudXNlU3RhdGUoW10pO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgcHJvcHMuZ2V0Q2hhcHRlcihyb3V0ZXIucXVlcnkuaWQsIHJvdXRlci5xdWVyeS5jaGFwaWQsIFwic2hvd1wiKTtcclxuICAgIHByb3BzLmdldENvbW1lbnRzKHJvdXRlci5xdWVyeS5jaGFwaWQpO1xyXG4gIH0sIFtyb3V0ZXIucXVlcnkuaWQsIHJvdXRlci5xdWVyeS5jaGFwaWRdKTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChjaGFwdGVyLmNoYXJhY3RlcnMpIHtcclxuICAgICAgc2V0Q2hhcmFjdGVycyhcclxuICAgICAgICBjaGFwdGVyLmNoYXJhY3RlcnMuZmlsdGVyKFxyXG4gICAgICAgICAgKGMpID0+IGMucHVibGljIHx8IGMuYXV0aG9ySWQgPT09IGF1dGgudXNlci51aWRcclxuICAgICAgICApXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfSwgW2NoYXB0ZXJdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMb2FkaW5nU2NyZWVuIGxvYWRpbmc9e2xvYWRpbmd9PlxyXG4gICAgICA8UmVkaXJlY3RDb21wIGNvbmRpdGlvbj17Y2hhcHRlckV4aXN0c30gdHlwZT1cIjQwNFwiPlxyXG4gICAgICAgIDxSZWRpcmVjdENvbXBcclxuICAgICAgICAgIGNvbmRpdGlvbj17XHJcbiAgICAgICAgICAgIGNoYXB0ZXIucHVibGljIHx8IChhdXRoLnVzZXIgJiYgYXV0aC51c2VyLnVpZCA9PT0gY2hhcHRlci5hdXRob3JJZClcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHR5cGU9XCI0MDNcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1jaGFwdGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcHRlci1wYWdlXCI+XHJcbiAgICAgICAgICAgICAgPFRvb2x0aXAgdGl0bGU9XCJOZXh0IENoYXB0ZXJcIiBwbGFjZW1lbnQ9XCJib3R0b21cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbiBjdXN0b20taWNvbiBuYXYtYnRuIG5leHQtYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpb24taWNvbiBuYW1lPVwiY2hldnJvbi1mb3J3YXJkLWNpcmNsZVwiPjwvaW9uLWljb24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgPFRvb2x0aXAgdGl0bGU9XCJQcmV2aW91cyBDaGFwdGVyXCIgcGxhY2VtZW50PVwiYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24gY3VzdG9tLWljb24gbmF2LWJ0biBwcmV2LWJ0blwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW9uLWljb24gbmFtZT1cImNoZXZyb24tYmFjay1jaXJjbGVcIj48L2lvbi1pY29uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgIDxQYWdlSGVhZGVyXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaXRlLXBhZ2UtaGVhZGVyXCJcclxuICAgICAgICAgICAgICAgIG9uQmFjaz17KCkgPT4gcm91dGVyLnB1c2goYC9zdG9yeS8ke3JvdXRlci5xdWVyeS5pZH1gKX1cclxuICAgICAgICAgICAgICAgIHRpdGxlPVwiQmFjayB0byBzdG9yeVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8aDI+XHJcbiAgICAgICAgICAgICAgICB7Y2hhcHRlci5udW1iZXJ9LiB7Y2hhcHRlci50aXRsZX1cclxuICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWV0YVwiPlxyXG4gICAgICAgICAgICAgICAgPERpdmlkZXIgb3JpZW50YXRpb249XCJsZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZmlsZS8xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8U3BhY2UgZGlyZWN0aW9uPVwidmVydGljYWxcIiBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF2YXRhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtkdW1teS5wZXJzb259IGFsdD17ZHVtbXkubmFtZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNT57Y2hhcHRlci5hdXRob3JOYW1lfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1NwYWNlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9EaXZpZGVyPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxzZWN0aW9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjaGFwdGVyLWNvbnRlbnRcIlxyXG4gICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBjaGFwdGVyLmJvZHkgfX1cclxuICAgICAgICAgICAgICA+PC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAge2xvYWRpbmdDb21tZW50cyA/IChcclxuICAgICAgICAgICAgICAgIDxTcGluIC8+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxDb21tZW50c1xyXG4gICAgICAgICAgICAgICAgICBzdWJtaXRDb21tZW50PXtwcm9wcy5zdWJtaXRDb21tZW50fVxyXG4gICAgICAgICAgICAgICAgICBhdXRoPXthdXRofVxyXG4gICAgICAgICAgICAgICAgICBjb21tZW50cz17Y29tbWVudHN9XHJcbiAgICAgICAgICAgICAgICAgIHJlc3BvbnNlQm9keT17cmVzcG9uc2VCb2R5fVxyXG4gICAgICAgICAgICAgICAgICBzZXRSZXNwb25zZUJvZHk9e3NldFJlc3BvbnNlQm9keX1cclxuICAgICAgICAgICAgICAgICAgZGVsZXRlQ29tbWVudD17cHJvcHMuZGVsZXRlQ29tbWVudH1cclxuICAgICAgICAgICAgICAgICAgY2hhcGlkPXtyb3V0ZXIucXVlcnkuY2hhcGlkfVxyXG4gICAgICAgICAgICAgICAgICBzdG9yeUlkPXtyb3V0ZXIucXVlcnkuaWR9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tY2hhcHRlci1kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgPGgzPkNoYXJhY3RlcnMgaW4gdGhpcyBjaGFwdGVyPC9oMz5cclxuICAgICAgICAgICAgICA8Q2hhcmFjdGVyR3JpZFxyXG4gICAgICAgICAgICAgICAgZ3V0dGVyPXtbMTIsIDEyXX1cclxuICAgICAgICAgICAgICAgIGNoYXJhY3RlcnM9e2NoYXJhY3RlcnN9XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwic2hvd1wiXHJcbiAgICAgICAgICAgICAgICBsZz17MTJ9XHJcbiAgICAgICAgICAgICAgICBtZD17MTJ9XHJcbiAgICAgICAgICAgICAgICBzbT17MTJ9XHJcbiAgICAgICAgICAgICAgICB4cz17MTJ9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgIDxoMz5Mb2NhdGlvbnMgaW4gdGhpcyBjaGFwdGVyPC9oMz5cclxuICAgICAgICAgICAgICA8TG9jYXRpb25HcmlkXHJcbiAgICAgICAgICAgICAgICBndXR0ZXI9e1sxMiwgMTJdfVxyXG4gICAgICAgICAgICAgICAgbGc9ezEyfVxyXG4gICAgICAgICAgICAgICAgbWQ9ezEyfVxyXG4gICAgICAgICAgICAgICAgc209ezEyfVxyXG4gICAgICAgICAgICAgICAgeHM9ezEyfVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInN0b3J5XCJcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9ucz17Y2hhcHRlci5sb2NhdGlvbnN9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1JlZGlyZWN0Q29tcD5cclxuICAgICAgPC9SZWRpcmVjdENvbXA+XHJcbiAgICA8L0xvYWRpbmdTY3JlZW4+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcclxuICBjaGFwdGVyOiBzdGF0ZS5zdG9yaWVzLmNoYXB0ZXIsXHJcbiAgbG9hZGluZzogc3RhdGUuc3Rvcmllcy5sb2FkaW5nLFxyXG4gIGNvbW1lbnRzOiBzdGF0ZS5zdG9yaWVzLmNvbW1lbnRzLFxyXG4gIGxvYWRpbmdDb21tZW50czogc3RhdGUuc3Rvcmllcy5sb2FkaW5nQ29tbWVudHMsXHJcbiAgY2hhcHRlckV4aXN0czogc3RhdGUuc3Rvcmllcy5jaGFwdGVyRXhpc3RzLFxyXG4gIG1lc3NhZ2U6IHN0YXRlLnN0b3JpZXMubWVzc2FnZSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywge1xyXG4gIGdldENoYXB0ZXIsXHJcbiAgZ2V0Q29tbWVudHMsXHJcbiAgc3VibWl0Q29tbWVudCxcclxuICBkZWxldGVDb21tZW50LFxyXG59KShDaGFwdGVyKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==