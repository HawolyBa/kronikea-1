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
      lineNumber: 107,
      columnNumber: 13
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
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
      lineNumber: 109,
      columnNumber: 15
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Divider"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 15
    }
  }), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
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
      lineNumber: 120,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3RvcnkvL2NoYXB0ZXIvW2NoYXBpZF0vaW5kZXguanMiXSwibmFtZXMiOlsiQ2hhcHRlciIsInByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwiYXV0aCIsInVzZUF1dGgiLCJsb2FkaW5nIiwiY2hhcHRlciIsImxvYWRpbmdDb21tZW50cyIsImNvbW1lbnRzIiwiY2hhcHRlckV4aXN0cyIsIlJlYWN0IiwidXNlU3RhdGUiLCJjaGFyYWN0ZXJzIiwic2V0Q2hhcmFjdGVycyIsInVzZUVmZmVjdCIsImdldENoYXB0ZXIiLCJxdWVyeSIsImlkIiwiY2hhcGlkIiwiZ2V0Q29tbWVudHMiLCJmaWx0ZXIiLCJjIiwiYXV0aG9ySWQiLCJ1c2VyIiwidWlkIiwicHVzaCIsIm51bWJlciIsInRpdGxlIiwiZHVtbXkiLCJwZXJzb24iLCJuYW1lIiwiYXV0aG9yTmFtZSIsIl9faHRtbCIsImJvZHkiLCJzdWJtaXRDb21tZW50IiwiZGVsZXRlQ29tbWVudCIsImxvY2F0aW9ucyIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwic3RvcmllcyIsIm1lc3NhZ2UiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBOztBQUtBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUN6QixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsSUFBSSxHQUFHQyxnRUFBTyxFQUFwQjtBQUZ5QixNQUdqQkMsT0FIaUIsR0FHOENMLEtBSDlDLENBR2pCSyxPQUhpQjtBQUFBLE1BR1JDLE9BSFEsR0FHOENOLEtBSDlDLENBR1JNLE9BSFE7QUFBQSxNQUdDQyxlQUhELEdBRzhDUCxLQUg5QyxDQUdDTyxlQUhEO0FBQUEsTUFH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SE47QUFJRSxNQUFFLEVBQUUsRUFKTjtBQUtFLE1BQUUsRUFBRSxFQUxOO0FBTUUsUUFBSSxFQUFDLE9BTlA7QUFPRSxhQUFTLEVBQUVOLE9BQU8sQ0FBQzhCLFNBUHJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFiRixDQXBERixDQU5GLENBREYsQ0FERixDQURGO0FBeUZELENBL0dEOztHQUFNckMsTztVQUNXRyxxRCxFQUNGRSx3RDs7O0tBRlRMLE87O0FBaUhOLElBQU1zQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ2xDaEMsV0FBTyxFQUFFZ0MsS0FBSyxDQUFDQyxPQUFOLENBQWNqQyxPQURXO0FBRWxDRCxXQUFPLEVBQUVpQyxLQUFLLENBQUNDLE9BQU4sQ0FBY2xDLE9BRlc7QUFHbENHLFlBQVEsRUFBRThCLEtBQUssQ0FBQ0MsT0FBTixDQUFjL0IsUUFIVTtBQUlsQ0QsbUJBQWUsRUFBRStCLEtBQUssQ0FBQ0MsT0FBTixDQUFjaEMsZUFKRztBQUtsQ0UsaUJBQWEsRUFBRTZCLEtBQUssQ0FBQ0MsT0FBTixDQUFjOUIsYUFMSztBQU1sQytCLFdBQU8sRUFBRUYsS0FBSyxDQUFDQyxPQUFOLENBQWNDO0FBTlcsR0FBWjtBQUFBLENBQXhCOztBQVNlQywwSEFBTyxDQUFDSixlQUFELEVBQWtCO0FBQ3RDdEIsWUFBVSxFQUFWQSx3RUFEc0M7QUFFdENJLGFBQVcsRUFBWEEseUVBRnNDO0FBR3RDZSxlQUFhLEVBQWJBLDJFQUhzQztBQUl0Q0MsZUFBYSxFQUFiQSwyRUFBYUE7QUFKeUIsQ0FBbEIsQ0FBUCxDQUtacEMsT0FMWSxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3N0b3J5L1tpZF0vY2hhcHRlci9bY2hhcGlkXS44MWRiMGI3ZTI2MGNhMDcwMTJiYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IERpdmlkZXIsIFNwYWNlLCBQYWdlSGVhZGVyLCBUb29sdGlwLCBTcGluIH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmltcG9ydCB7IGR1bW15IH0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL3V0aWxzL2R1bW15XCI7XHJcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vaG9va3MvdXNlckhvb2tzXCI7XHJcbmltcG9ydCB7XHJcbiAgZ2V0Q2hhcHRlcixcclxuICBnZXRDb21tZW50cyxcclxuICBzdWJtaXRDb21tZW50LFxyXG4gIGRlbGV0ZUNvbW1lbnQsXHJcbn0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL3JlZHV4L2FjdGlvbnMvc3Rvcmllc0FjdGlvbnNcIjtcclxuXHJcbmltcG9ydCBDb21tZW50cyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy9jaGFwdGVyL0NvbW1lbnRzXCI7XHJcbmltcG9ydCBMb2FkaW5nU2NyZWVuIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL2hvYy9Mb2FkaW5nU2NyZWVuXCI7XHJcbmltcG9ydCBSZWRpcmVjdENvbXAgZnJvbSBcIi4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvaG9jL1JlZGlyZWN0Q29tcFwiO1xyXG5pbXBvcnQge1xyXG4gIENoYXJhY3RlckdyaWQsXHJcbiAgTG9jYXRpb25HcmlkLFxyXG59IGZyb20gXCIuLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL2NvbW1vbi9HcmlkXCI7XHJcblxyXG5jb25zdCBDaGFwdGVyID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgYXV0aCA9IHVzZUF1dGgoKTtcclxuICBjb25zdCB7IGxvYWRpbmcsIGNoYXB0ZXIsIGxvYWRpbmdDb21tZW50cywgY29tbWVudHMsIGNoYXB0ZXJFeGlzdHMgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBbY2hhcmFjdGVycywgc2V0Q2hhcmFjdGVyc10gPSBSZWFjdC51c2VTdGF0ZShbXSk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBwcm9wcy5nZXRDaGFwdGVyKHJvdXRlci5xdWVyeS5pZCwgcm91dGVyLnF1ZXJ5LmNoYXBpZCwgXCJzaG93XCIpO1xyXG4gICAgcHJvcHMuZ2V0Q29tbWVudHMocm91dGVyLnF1ZXJ5LmNoYXBpZCk7XHJcbiAgfSwgW3JvdXRlci5xdWVyeS5pZCwgcm91dGVyLnF1ZXJ5LmNoYXBpZF0pO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGNoYXB0ZXIuY2hhcmFjdGVycykge1xyXG4gICAgICBzZXRDaGFyYWN0ZXJzKFxyXG4gICAgICAgIGNoYXB0ZXIuY2hhcmFjdGVycy5maWx0ZXIoXHJcbiAgICAgICAgICAoYykgPT4gYy5wdWJsaWMgfHwgYy5hdXRob3JJZCA9PT0gYXV0aC51c2VyLnVpZFxyXG4gICAgICAgIClcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9LCBbY2hhcHRlcl0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExvYWRpbmdTY3JlZW4gbG9hZGluZz17bG9hZGluZ30+XHJcbiAgICAgIDxSZWRpcmVjdENvbXAgY29uZGl0aW9uPXtjaGFwdGVyRXhpc3RzfSB0eXBlPVwiNDA0XCI+XHJcbiAgICAgICAgPFJlZGlyZWN0Q29tcFxyXG4gICAgICAgICAgY29uZGl0aW9uPXtcclxuICAgICAgICAgICAgY2hhcHRlci5wdWJsaWMgfHwgKGF1dGgudXNlciAmJiBhdXRoLnVzZXIudWlkID09PSBjaGFwdGVyLmF1dGhvcklkKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdHlwZT1cIjQwM1wiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWNoYXB0ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFwdGVyLXBhZ2VcIj5cclxuICAgICAgICAgICAgICA8VG9vbHRpcCB0aXRsZT1cIk5leHQgQ2hhcHRlclwiIHBsYWNlbWVudD1cImJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uIGN1c3RvbS1pY29uIG5hdi1idG4gbmV4dC1idG5cIj5cclxuICAgICAgICAgICAgICAgICAgPGlvbi1pY29uIG5hbWU9XCJjaGV2cm9uLWZvcndhcmQtY2lyY2xlXCI+PC9pb24taWNvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICA8VG9vbHRpcCB0aXRsZT1cIlByZXZpb3VzIENoYXB0ZXJcIiBwbGFjZW1lbnQ9XCJib3R0b21cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbiBjdXN0b20taWNvbiBuYXYtYnRuIHByZXYtYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpb24taWNvbiBuYW1lPVwiY2hldnJvbi1iYWNrLWNpcmNsZVwiPjwvaW9uLWljb24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgPFBhZ2VIZWFkZXJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNpdGUtcGFnZS1oZWFkZXJcIlxyXG4gICAgICAgICAgICAgICAgb25CYWNrPXsoKSA9PiByb3V0ZXIucHVzaChgL3N0b3J5LyR7cm91dGVyLnF1ZXJ5LmlkfWApfVxyXG4gICAgICAgICAgICAgICAgdGl0bGU9XCJCYWNrIHRvIHN0b3J5XCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxoMj5cclxuICAgICAgICAgICAgICAgIHtjaGFwdGVyLm51bWJlcn0uIHtjaGFwdGVyLnRpdGxlfVxyXG4gICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXRhXCI+XHJcbiAgICAgICAgICAgICAgICA8RGl2aWRlciBvcmllbnRhdGlvbj1cImxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9maWxlLzFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxTcGFjZSBkaXJlY3Rpb249XCJ2ZXJ0aWNhbFwiIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXZhdGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2R1bW15LnBlcnNvbn0gYWx0PXtkdW1teS5uYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1PntjaGFwdGVyLmF1dGhvck5hbWV9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvU3BhY2U+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L0RpdmlkZXI+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPHNlY3Rpb25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNoYXB0ZXItY29udGVudFwiXHJcbiAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGNoYXB0ZXIuYm9keSB9fVxyXG4gICAgICAgICAgICAgID48L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgICB7bG9hZGluZ0NvbW1lbnRzID8gKFxyXG4gICAgICAgICAgICAgICAgPFNwaW4gLz5cclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPENvbW1lbnRzXHJcbiAgICAgICAgICAgICAgICAgIHN1Ym1pdENvbW1lbnQ9e3Byb3BzLnN1Ym1pdENvbW1lbnR9XHJcbiAgICAgICAgICAgICAgICAgIGF1dGg9e2F1dGh9XHJcbiAgICAgICAgICAgICAgICAgIGNvbW1lbnRzPXtjb21tZW50c31cclxuICAgICAgICAgICAgICAgICAgZGVsZXRlQ29tbWVudD17cHJvcHMuZGVsZXRlQ29tbWVudH1cclxuICAgICAgICAgICAgICAgICAgY2hhcGlkPXtyb3V0ZXIucXVlcnkuY2hhcGlkfVxyXG4gICAgICAgICAgICAgICAgICBzdG9yeUlkPXtyb3V0ZXIucXVlcnkuaWR9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tY2hhcHRlci1kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgPGgzPkNoYXJhY3RlcnMgaW4gdGhpcyBjaGFwdGVyPC9oMz5cclxuICAgICAgICAgICAgICA8Q2hhcmFjdGVyR3JpZFxyXG4gICAgICAgICAgICAgICAgZ3V0dGVyPXtbMTIsIDEyXX1cclxuICAgICAgICAgICAgICAgIGNoYXJhY3RlcnM9e2NoYXJhY3RlcnN9XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwic2hvd1wiXHJcbiAgICAgICAgICAgICAgICBsZz17MTJ9XHJcbiAgICAgICAgICAgICAgICBtZD17MTJ9XHJcbiAgICAgICAgICAgICAgICBzbT17MTJ9XHJcbiAgICAgICAgICAgICAgICB4cz17MTJ9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgIDxoMz5Mb2NhdGlvbnMgaW4gdGhpcyBjaGFwdGVyPC9oMz5cclxuICAgICAgICAgICAgICA8TG9jYXRpb25HcmlkXHJcbiAgICAgICAgICAgICAgICBndXR0ZXI9e1sxMiwgMTJdfVxyXG4gICAgICAgICAgICAgICAgbGc9ezEyfVxyXG4gICAgICAgICAgICAgICAgbWQ9ezEyfVxyXG4gICAgICAgICAgICAgICAgc209ezEyfVxyXG4gICAgICAgICAgICAgICAgeHM9ezEyfVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInN0b3J5XCJcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9ucz17Y2hhcHRlci5sb2NhdGlvbnN9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1JlZGlyZWN0Q29tcD5cclxuICAgICAgPC9SZWRpcmVjdENvbXA+XHJcbiAgICA8L0xvYWRpbmdTY3JlZW4+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcclxuICBjaGFwdGVyOiBzdGF0ZS5zdG9yaWVzLmNoYXB0ZXIsXHJcbiAgbG9hZGluZzogc3RhdGUuc3Rvcmllcy5sb2FkaW5nLFxyXG4gIGNvbW1lbnRzOiBzdGF0ZS5zdG9yaWVzLmNvbW1lbnRzLFxyXG4gIGxvYWRpbmdDb21tZW50czogc3RhdGUuc3Rvcmllcy5sb2FkaW5nQ29tbWVudHMsXHJcbiAgY2hhcHRlckV4aXN0czogc3RhdGUuc3Rvcmllcy5jaGFwdGVyRXhpc3RzLFxyXG4gIG1lc3NhZ2U6IHN0YXRlLnN0b3JpZXMubWVzc2FnZSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywge1xyXG4gIGdldENoYXB0ZXIsXHJcbiAgZ2V0Q29tbWVudHMsXHJcbiAgc3VibWl0Q29tbWVudCxcclxuICBkZWxldGVDb21tZW50LFxyXG59KShDaGFwdGVyKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==