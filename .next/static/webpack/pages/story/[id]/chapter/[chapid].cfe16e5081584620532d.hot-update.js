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
      lineNumber: 108,
      columnNumber: 13
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
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
      lineNumber: 110,
      columnNumber: 15
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Divider"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 15
    }
  }), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
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
      lineNumber: 121,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3RvcnkvL2NoYXB0ZXIvW2NoYXBpZF0vaW5kZXguanMiXSwibmFtZXMiOlsiQ2hhcHRlciIsInByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwiYXV0aCIsInVzZUF1dGgiLCJsb2FkaW5nIiwiY2hhcHRlciIsImxvYWRpbmdDb21tZW50cyIsImNvbW1lbnRzIiwiY2hhcHRlckV4aXN0cyIsIlJlYWN0IiwidXNlU3RhdGUiLCJjaGFyYWN0ZXJzIiwic2V0Q2hhcmFjdGVycyIsInVzZUVmZmVjdCIsImdldENoYXB0ZXIiLCJxdWVyeSIsImlkIiwiY2hhcGlkIiwiZ2V0Q29tbWVudHMiLCJmaWx0ZXIiLCJjIiwiYXV0aG9ySWQiLCJ1c2VyIiwidWlkIiwicHVzaCIsIm51bWJlciIsInRpdGxlIiwiZHVtbXkiLCJwZXJzb24iLCJuYW1lIiwiYXV0aG9yTmFtZSIsIl9faHRtbCIsImJvZHkiLCJzdWJtaXRDb21tZW50IiwiZGVsZXRlQ29tbWVudCIsImxvY2F0aW9ucyIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwic3RvcmllcyIsIm1lc3NhZ2UiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBOztBQUtBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUN6QixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsSUFBSSxHQUFHQyxnRUFBTyxFQUFwQjtBQUZ5QixNQUdqQkMsT0FIaUIsR0FHOENMLEtBSDlDLENBR2pCSyxPQUhpQjtBQUFBLE1BR1JDLE9BSFEsR0FHOENOLEtBSDlDLENBR1JNLE9BSFE7QUFBQSxNQUdDQyxlQUhELEdBRzhDUCxLQUg5QyxDQUdDTyxlQUhEO0FBQUEsTUFHa0JDLFFBSGxCLEdBRzhDUixLQUg5QyxDQUdrQlEsUUFIbEI7QUFBQSxNQUc0QkMsYUFINUIsR0FHOENULEtBSDlDLENBRzRCUyxhQUg1Qjs7QUFBQSx3QkFLV0MsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEVBQWYsQ0FMWDtBQUFBO0FBQUEsTUFLbEJDLFVBTGtCO0FBQUEsTUFLTkMsYUFMTTs7QUFPekJILDhDQUFLLENBQUNJLFNBQU4sQ0FBZ0IsWUFBTTtBQUNwQmQsU0FBSyxDQUFDZSxVQUFOLENBQWlCZCxNQUFNLENBQUNlLEtBQVAsQ0FBYUMsRUFBOUIsRUFBa0NoQixNQUFNLENBQUNlLEtBQVAsQ0FBYUUsTUFBL0MsRUFBdUQsTUFBdkQ7QUFDQWxCLFNBQUssQ0FBQ21CLFdBQU4sQ0FBa0JsQixNQUFNLENBQUNlLEtBQVAsQ0FBYUUsTUFBL0I7QUFDRCxHQUhELEVBR0csQ0FBQ2pCLE1BQU0sQ0FBQ2UsS0FBUCxDQUFhQyxFQUFkLEVBQWtCaEIsTUFBTSxDQUFDZSxLQUFQLENBQWFFLE1BQS9CLENBSEg7QUFLQVIsOENBQUssQ0FBQ0ksU0FBTixDQUFnQixZQUFNO0FBQ3BCLFFBQUlSLE9BQU8sQ0FBQ00sVUFBWixFQUF3QjtBQUN0QkMsbUJBQWEsQ0FDWFAsT0FBTyxDQUFDTSxVQUFSLENBQW1CUSxNQUFuQixDQUNFLFVBQUNDLENBQUQ7QUFBQSxlQUFPQSxDQUFDLFVBQUQsSUFBWUEsQ0FBQyxDQUFDQyxRQUFGLEtBQWVuQixJQUFJLENBQUNvQixJQUFMLENBQVVDLEdBQTVDO0FBQUEsT0FERixDQURXLENBQWI7QUFLRDtBQUNGLEdBUkQsRUFRRyxDQUFDbEIsT0FBRCxDQVJIO0FBVUEsU0FDRSxNQUFDLHNFQUFEO0FBQWUsV0FBTyxFQUFFRCxPQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxxRUFBRDtBQUFjLGFBQVMsRUFBRUksYUFBekI7QUFBd0MsUUFBSSxFQUFDLEtBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHFFQUFEO0FBQ0UsYUFBUyxFQUNQSCxPQUFPLFVBQVAsSUFBbUJILElBQUksQ0FBQ29CLElBQUwsSUFBYXBCLElBQUksQ0FBQ29CLElBQUwsQ0FBVUMsR0FBVixLQUFrQmxCLE9BQU8sQ0FBQ2dCLFFBRjlEO0FBSUUsUUFBSSxFQUFDLEtBSlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1FO0FBQUssYUFBUyxFQUFDLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNENBQUQ7QUFBUyxTQUFLLEVBQUMsY0FBZjtBQUE4QixhQUFTLEVBQUMsUUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLG1DQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFVLFFBQUksRUFBQyx3QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixDQURGLEVBTUUsTUFBQyw0Q0FBRDtBQUFTLFNBQUssRUFBQyxrQkFBZjtBQUFrQyxhQUFTLEVBQUMsUUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLG1DQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFVLFFBQUksRUFBQyxxQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixDQU5GLEVBV0UsTUFBQywrQ0FBRDtBQUNFLGFBQVMsRUFBQyxrQkFEWjtBQUVFLFVBQU0sRUFBRTtBQUFBLGFBQU1yQixNQUFNLENBQUN3QixJQUFQLGtCQUFzQnhCLE1BQU0sQ0FBQ2UsS0FBUCxDQUFhQyxFQUFuQyxFQUFOO0FBQUEsS0FGVjtBQUdFLFNBQUssRUFBQyxlQUhSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFYRixFQWdCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dYLE9BQU8sQ0FBQ29CLE1BRFgsUUFDcUJwQixPQUFPLENBQUNxQixLQUQ3QixDQWhCRixFQW1CRTtBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDRDQUFEO0FBQVMsZUFBVyxFQUFDLE1BQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLFlBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDBDQUFEO0FBQU8sYUFBUyxFQUFDLFVBQWpCO0FBQTRCLFNBQUssRUFBQyxRQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxPQUFHLEVBQUVDLGtEQUFLLENBQUNDLE1BQWhCO0FBQXdCLE9BQUcsRUFBRUQsa0RBQUssQ0FBQ0UsSUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUt4QixPQUFPLENBQUN5QixVQUFiLENBSkYsQ0FERixDQURGLENBREYsQ0FERixDQW5CRixFQWlDRTtBQUNFLGFBQVMsRUFBQyxpQkFEWjtBQUVFLDJCQUF1QixFQUFFO0FBQUVDLFlBQU0sRUFBRTFCLE9BQU8sQ0FBQzJCO0FBQWxCLEtBRjNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFqQ0YsRUFxQ0UsTUFBQyw0Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBckNGLEVBc0NHMUIsZUFBZSxHQUNkLE1BQUMseUNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURjLEdBR2QsTUFBQyxvRUFBRDtBQUNFLGlCQUFhLEVBQUVQLEtBQUssQ0FBQ2tDLGFBRHZCO0FBRUUsUUFBSSxFQUFFL0IsSUFGUjtBQUdFLFlBQVEsRUFBRUssUUFIWjtBQUlFLGlCQUFhLEVBQUVSLEtBQUssQ0FBQ21DLGFBSnZCO0FBS0UsVUFBTSxFQUFFbEMsTUFBTSxDQUFDZSxLQUFQLENBQWFFLE1BTHZCO0FBTUUsV0FBTyxFQUFFakIsTUFBTSxDQUFDZSxLQUFQLENBQWFDLEVBTnhCO0FBT0UsWUFBUSxFQUFFWCxPQUFPLENBQUNnQixRQVBwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBekNKLENBREYsRUFxREU7QUFBSyxhQUFTLEVBQUMsc0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBREYsRUFFRSxNQUFDLHNFQUFEO0FBQ0UsVUFBTSxFQUFFLENBQUMsRUFBRCxFQUFLLEVBQUwsQ0FEVjtBQUVFLGNBQVUsRUFBRVYsVUFGZDtBQUdFLFFBQUksRUFBQyxNQUhQO0FBSUUsTUFBRSxFQUFFLEVBSk47QUFLRSxNQUFFLEVBQUUsRUFMTjtBQU1FLE1BQUUsRUFBRSxFQU5OO0FBT0UsTUFBRSxFQUFFLEVBUE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBV0UsTUFBQyw0Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWEYsRUFZRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQVpGLEVBYUUsTUFBQyxxRUFBRDtBQUNFLFVBQU0sRUFBRSxDQUFDLEVBQUQsRUFBSyxFQUFMLENBRFY7QUFFRSxNQUFFLEVBQUUsRUFGTjtBQUdFLE1BQUUsRUFBRSxFQUhOO0FBSUUsTUFBRSxFQUFFLEVBSk47QUFLRSxNQUFFLEVBQUUsRUFMTjtBQU1FLFFBQUksRUFBQyxPQU5QO0FBT0UsYUFBUyxFQUFFTixPQUFPLENBQUM4QixTQVByQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBYkYsQ0FyREYsQ0FORixDQURGLENBREYsQ0FERjtBQTBGRCxDQWhIRDs7R0FBTXJDLE87VUFDV0cscUQsRUFDRkUsd0Q7OztLQUZUTCxPOztBQWtITixJQUFNc0MsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUNsQ2hDLFdBQU8sRUFBRWdDLEtBQUssQ0FBQ0MsT0FBTixDQUFjakMsT0FEVztBQUVsQ0QsV0FBTyxFQUFFaUMsS0FBSyxDQUFDQyxPQUFOLENBQWNsQyxPQUZXO0FBR2xDRyxZQUFRLEVBQUU4QixLQUFLLENBQUNDLE9BQU4sQ0FBYy9CLFFBSFU7QUFJbENELG1CQUFlLEVBQUUrQixLQUFLLENBQUNDLE9BQU4sQ0FBY2hDLGVBSkc7QUFLbENFLGlCQUFhLEVBQUU2QixLQUFLLENBQUNDLE9BQU4sQ0FBYzlCLGFBTEs7QUFNbEMrQixXQUFPLEVBQUVGLEtBQUssQ0FBQ0MsT0FBTixDQUFjQztBQU5XLEdBQVo7QUFBQSxDQUF4Qjs7QUFTZUMsMEhBQU8sQ0FBQ0osZUFBRCxFQUFrQjtBQUN0Q3RCLFlBQVUsRUFBVkEsd0VBRHNDO0FBRXRDSSxhQUFXLEVBQVhBLHlFQUZzQztBQUd0Q2UsZUFBYSxFQUFiQSwyRUFIc0M7QUFJdENDLGVBQWEsRUFBYkEsMkVBQWFBO0FBSnlCLENBQWxCLENBQVAsQ0FLWnBDLE9BTFksQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zdG9yeS9baWRdL2NoYXB0ZXIvW2NoYXBpZF0uY2ZlMTZlNTA4MTU4NDYyMDUzMmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBEaXZpZGVyLCBTcGFjZSwgUGFnZUhlYWRlciwgVG9vbHRpcCwgU3BpbiB9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5pbXBvcnQgeyBkdW1teSB9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi91dGlscy9kdW1teVwiO1xyXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL2hvb2tzL3VzZXJIb29rc1wiO1xyXG5pbXBvcnQge1xyXG4gIGdldENoYXB0ZXIsXHJcbiAgZ2V0Q29tbWVudHMsXHJcbiAgc3VibWl0Q29tbWVudCxcclxuICBkZWxldGVDb21tZW50LFxyXG59IGZyb20gXCIuLi8uLi8uLi8uLi8uLi9yZWR1eC9hY3Rpb25zL3N0b3JpZXNBY3Rpb25zXCI7XHJcblxyXG5pbXBvcnQgQ29tbWVudHMgZnJvbSBcIi4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvY2hhcHRlci9Db21tZW50c1wiO1xyXG5pbXBvcnQgTG9hZGluZ1NjcmVlbiBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy9ob2MvTG9hZGluZ1NjcmVlblwiO1xyXG5pbXBvcnQgUmVkaXJlY3RDb21wIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL2hvYy9SZWRpcmVjdENvbXBcIjtcclxuaW1wb3J0IHtcclxuICBDaGFyYWN0ZXJHcmlkLFxyXG4gIExvY2F0aW9uR3JpZCxcclxufSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy9jb21tb24vR3JpZFwiO1xyXG5cclxuY29uc3QgQ2hhcHRlciA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IGF1dGggPSB1c2VBdXRoKCk7XHJcbiAgY29uc3QgeyBsb2FkaW5nLCBjaGFwdGVyLCBsb2FkaW5nQ29tbWVudHMsIGNvbW1lbnRzLCBjaGFwdGVyRXhpc3RzIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgW2NoYXJhY3RlcnMsIHNldENoYXJhY3RlcnNdID0gUmVhY3QudXNlU3RhdGUoW10pO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgcHJvcHMuZ2V0Q2hhcHRlcihyb3V0ZXIucXVlcnkuaWQsIHJvdXRlci5xdWVyeS5jaGFwaWQsIFwic2hvd1wiKTtcclxuICAgIHByb3BzLmdldENvbW1lbnRzKHJvdXRlci5xdWVyeS5jaGFwaWQpO1xyXG4gIH0sIFtyb3V0ZXIucXVlcnkuaWQsIHJvdXRlci5xdWVyeS5jaGFwaWRdKTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChjaGFwdGVyLmNoYXJhY3RlcnMpIHtcclxuICAgICAgc2V0Q2hhcmFjdGVycyhcclxuICAgICAgICBjaGFwdGVyLmNoYXJhY3RlcnMuZmlsdGVyKFxyXG4gICAgICAgICAgKGMpID0+IGMucHVibGljIHx8IGMuYXV0aG9ySWQgPT09IGF1dGgudXNlci51aWRcclxuICAgICAgICApXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfSwgW2NoYXB0ZXJdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMb2FkaW5nU2NyZWVuIGxvYWRpbmc9e2xvYWRpbmd9PlxyXG4gICAgICA8UmVkaXJlY3RDb21wIGNvbmRpdGlvbj17Y2hhcHRlckV4aXN0c30gdHlwZT1cIjQwNFwiPlxyXG4gICAgICAgIDxSZWRpcmVjdENvbXBcclxuICAgICAgICAgIGNvbmRpdGlvbj17XHJcbiAgICAgICAgICAgIGNoYXB0ZXIucHVibGljIHx8IChhdXRoLnVzZXIgJiYgYXV0aC51c2VyLnVpZCA9PT0gY2hhcHRlci5hdXRob3JJZClcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHR5cGU9XCI0MDNcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1jaGFwdGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcHRlci1wYWdlXCI+XHJcbiAgICAgICAgICAgICAgPFRvb2x0aXAgdGl0bGU9XCJOZXh0IENoYXB0ZXJcIiBwbGFjZW1lbnQ9XCJib3R0b21cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbiBjdXN0b20taWNvbiBuYXYtYnRuIG5leHQtYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpb24taWNvbiBuYW1lPVwiY2hldnJvbi1mb3J3YXJkLWNpcmNsZVwiPjwvaW9uLWljb24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgPFRvb2x0aXAgdGl0bGU9XCJQcmV2aW91cyBDaGFwdGVyXCIgcGxhY2VtZW50PVwiYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24gY3VzdG9tLWljb24gbmF2LWJ0biBwcmV2LWJ0blwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW9uLWljb24gbmFtZT1cImNoZXZyb24tYmFjay1jaXJjbGVcIj48L2lvbi1pY29uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgIDxQYWdlSGVhZGVyXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaXRlLXBhZ2UtaGVhZGVyXCJcclxuICAgICAgICAgICAgICAgIG9uQmFjaz17KCkgPT4gcm91dGVyLnB1c2goYC9zdG9yeS8ke3JvdXRlci5xdWVyeS5pZH1gKX1cclxuICAgICAgICAgICAgICAgIHRpdGxlPVwiQmFjayB0byBzdG9yeVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8aDI+XHJcbiAgICAgICAgICAgICAgICB7Y2hhcHRlci5udW1iZXJ9LiB7Y2hhcHRlci50aXRsZX1cclxuICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWV0YVwiPlxyXG4gICAgICAgICAgICAgICAgPERpdmlkZXIgb3JpZW50YXRpb249XCJsZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZmlsZS8xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8U3BhY2UgZGlyZWN0aW9uPVwidmVydGljYWxcIiBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF2YXRhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtkdW1teS5wZXJzb259IGFsdD17ZHVtbXkubmFtZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNT57Y2hhcHRlci5hdXRob3JOYW1lfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1NwYWNlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9EaXZpZGVyPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxzZWN0aW9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjaGFwdGVyLWNvbnRlbnRcIlxyXG4gICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBjaGFwdGVyLmJvZHkgfX1cclxuICAgICAgICAgICAgICA+PC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAge2xvYWRpbmdDb21tZW50cyA/IChcclxuICAgICAgICAgICAgICAgIDxTcGluIC8+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxDb21tZW50c1xyXG4gICAgICAgICAgICAgICAgICBzdWJtaXRDb21tZW50PXtwcm9wcy5zdWJtaXRDb21tZW50fVxyXG4gICAgICAgICAgICAgICAgICBhdXRoPXthdXRofVxyXG4gICAgICAgICAgICAgICAgICBjb21tZW50cz17Y29tbWVudHN9XHJcbiAgICAgICAgICAgICAgICAgIGRlbGV0ZUNvbW1lbnQ9e3Byb3BzLmRlbGV0ZUNvbW1lbnR9XHJcbiAgICAgICAgICAgICAgICAgIGNoYXBpZD17cm91dGVyLnF1ZXJ5LmNoYXBpZH1cclxuICAgICAgICAgICAgICAgICAgc3RvcnlJZD17cm91dGVyLnF1ZXJ5LmlkfVxyXG4gICAgICAgICAgICAgICAgICBhdXRob3JJZD17Y2hhcHRlci5hdXRob3JJZH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1jaGFwdGVyLWRldGFpbHNcIj5cclxuICAgICAgICAgICAgICA8aDM+Q2hhcmFjdGVycyBpbiB0aGlzIGNoYXB0ZXI8L2gzPlxyXG4gICAgICAgICAgICAgIDxDaGFyYWN0ZXJHcmlkXHJcbiAgICAgICAgICAgICAgICBndXR0ZXI9e1sxMiwgMTJdfVxyXG4gICAgICAgICAgICAgICAgY2hhcmFjdGVycz17Y2hhcmFjdGVyc31cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJzaG93XCJcclxuICAgICAgICAgICAgICAgIGxnPXsxMn1cclxuICAgICAgICAgICAgICAgIG1kPXsxMn1cclxuICAgICAgICAgICAgICAgIHNtPXsxMn1cclxuICAgICAgICAgICAgICAgIHhzPXsxMn1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgPGgzPkxvY2F0aW9ucyBpbiB0aGlzIGNoYXB0ZXI8L2gzPlxyXG4gICAgICAgICAgICAgIDxMb2NhdGlvbkdyaWRcclxuICAgICAgICAgICAgICAgIGd1dHRlcj17WzEyLCAxMl19XHJcbiAgICAgICAgICAgICAgICBsZz17MTJ9XHJcbiAgICAgICAgICAgICAgICBtZD17MTJ9XHJcbiAgICAgICAgICAgICAgICBzbT17MTJ9XHJcbiAgICAgICAgICAgICAgICB4cz17MTJ9XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwic3RvcnlcIlxyXG4gICAgICAgICAgICAgICAgbG9jYXRpb25zPXtjaGFwdGVyLmxvY2F0aW9uc31cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvUmVkaXJlY3RDb21wPlxyXG4gICAgICA8L1JlZGlyZWN0Q29tcD5cclxuICAgIDwvTG9hZGluZ1NjcmVlbj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG4gIGNoYXB0ZXI6IHN0YXRlLnN0b3JpZXMuY2hhcHRlcixcclxuICBsb2FkaW5nOiBzdGF0ZS5zdG9yaWVzLmxvYWRpbmcsXHJcbiAgY29tbWVudHM6IHN0YXRlLnN0b3JpZXMuY29tbWVudHMsXHJcbiAgbG9hZGluZ0NvbW1lbnRzOiBzdGF0ZS5zdG9yaWVzLmxvYWRpbmdDb21tZW50cyxcclxuICBjaGFwdGVyRXhpc3RzOiBzdGF0ZS5zdG9yaWVzLmNoYXB0ZXJFeGlzdHMsXHJcbiAgbWVzc2FnZTogc3RhdGUuc3Rvcmllcy5tZXNzYWdlLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7XHJcbiAgZ2V0Q2hhcHRlcixcclxuICBnZXRDb21tZW50cyxcclxuICBzdWJtaXRDb21tZW50LFxyXG4gIGRlbGV0ZUNvbW1lbnQsXHJcbn0pKENoYXB0ZXIpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9