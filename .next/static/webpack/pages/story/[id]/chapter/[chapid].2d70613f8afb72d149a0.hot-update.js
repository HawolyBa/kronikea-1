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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3RvcnkvL2NoYXB0ZXIvW2NoYXBpZF0vaW5kZXguanMiXSwibmFtZXMiOlsiQ2hhcHRlciIsInByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwiYXV0aCIsInVzZUF1dGgiLCJsb2FkaW5nIiwiY2hhcHRlciIsImxvYWRpbmdDb21tZW50cyIsImNvbW1lbnRzIiwiY2hhcHRlckV4aXN0cyIsIlJlYWN0IiwidXNlU3RhdGUiLCJyZXNwb25zZUJvZHkiLCJzZXRSZXNwb25zZUJvZHkiLCJjaGFyYWN0ZXJzIiwic2V0Q2hhcmFjdGVycyIsInVzZUVmZmVjdCIsImdldENoYXB0ZXIiLCJxdWVyeSIsImlkIiwiY2hhcGlkIiwiZ2V0Q29tbWVudHMiLCJmaWx0ZXIiLCJjIiwiYXV0aG9ySWQiLCJ1c2VyIiwidWlkIiwicHVzaCIsIm51bWJlciIsInRpdGxlIiwiZHVtbXkiLCJwZXJzb24iLCJuYW1lIiwiYXV0aG9yTmFtZSIsIl9faHRtbCIsImJvZHkiLCJzdWJtaXRDb21tZW50IiwiZGVsZXRlQ29tbWVudCIsImxvY2F0aW9ucyIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwic3RvcmllcyIsIm1lc3NhZ2UiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBOztBQUtBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUN6QixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsSUFBSSxHQUFHQyxnRUFBTyxFQUFwQjtBQUZ5QixNQUdqQkMsT0FIaUIsR0FHOENMLEtBSDlDLENBR2pCSyxPQUhpQjtBQUFBLE1BR1JDLE9BSFEsR0FHOENOLEtBSDlDLENBR1JNLE9BSFE7QUFBQSxNQUdDQyxlQUhELEdBRzhDUCxLQUg5QyxDQUdDTyxlQUhEO0FBQUEsTUFHa0JDLFFBSGxCLEdBRzhDUixLQUg5QyxDQUdrQlEsUUFIbEI7QUFBQSxNQUc0QkMsYUFINUIsR0FHOENULEtBSDlDLENBRzRCUyxhQUg1Qjs7QUFBQSx3QkFLZUMsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEVBQWYsQ0FMZjtBQUFBO0FBQUEsTUFLbEJDLFlBTGtCO0FBQUEsTUFLSkMsZUFMSTs7QUFBQSx5QkFNV0gsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEVBQWYsQ0FOWDtBQUFBO0FBQUEsTUFNbEJHLFVBTmtCO0FBQUEsTUFNTkMsYUFOTTs7QUFRekJMLDhDQUFLLENBQUNNLFNBQU4sQ0FBZ0IsWUFBTTtBQUNwQmhCLFNBQUssQ0FBQ2lCLFVBQU4sQ0FBaUJoQixNQUFNLENBQUNpQixLQUFQLENBQWFDLEVBQTlCLEVBQWtDbEIsTUFBTSxDQUFDaUIsS0FBUCxDQUFhRSxNQUEvQyxFQUF1RCxNQUF2RDtBQUNBcEIsU0FBSyxDQUFDcUIsV0FBTixDQUFrQnBCLE1BQU0sQ0FBQ2lCLEtBQVAsQ0FBYUUsTUFBL0I7QUFDRCxHQUhELEVBR0csQ0FBQ25CLE1BQU0sQ0FBQ2lCLEtBQVAsQ0FBYUMsRUFBZCxFQUFrQmxCLE1BQU0sQ0FBQ2lCLEtBQVAsQ0FBYUUsTUFBL0IsQ0FISDtBQUtBViw4Q0FBSyxDQUFDTSxTQUFOLENBQWdCLFlBQU07QUFDcEIsUUFBSVYsT0FBTyxDQUFDUSxVQUFaLEVBQXdCO0FBQ3RCQyxtQkFBYSxDQUNYVCxPQUFPLENBQUNRLFVBQVIsQ0FBbUJRLE1BQW5CLENBQ0UsVUFBQ0MsQ0FBRDtBQUFBLGVBQU9BLENBQUMsVUFBRCxJQUFZQSxDQUFDLENBQUNDLFFBQUYsS0FBZXJCLElBQUksQ0FBQ3NCLElBQUwsQ0FBVUMsR0FBNUM7QUFBQSxPQURGLENBRFcsQ0FBYjtBQUtEO0FBQ0YsR0FSRCxFQVFHLENBQUNwQixPQUFELENBUkg7QUFVQSxTQUNFLE1BQUMsc0VBQUQ7QUFBZSxXQUFPLEVBQUVELE9BQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHFFQUFEO0FBQWMsYUFBUyxFQUFFSSxhQUF6QjtBQUF3QyxRQUFJLEVBQUMsS0FBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMscUVBQUQ7QUFDRSxhQUFTLEVBQ1BILE9BQU8sVUFBUCxJQUFtQkgsSUFBSSxDQUFDc0IsSUFBTCxJQUFhdEIsSUFBSSxDQUFDc0IsSUFBTCxDQUFVQyxHQUFWLEtBQWtCcEIsT0FBTyxDQUFDa0IsUUFGOUQ7QUFJRSxRQUFJLEVBQUMsS0FKUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUU7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw0Q0FBRDtBQUFTLFNBQUssRUFBQyxjQUFmO0FBQThCLGFBQVMsRUFBQyxRQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsbUNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQVUsUUFBSSxFQUFDLHdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLENBREYsRUFNRSxNQUFDLDRDQUFEO0FBQVMsU0FBSyxFQUFDLGtCQUFmO0FBQWtDLGFBQVMsRUFBQyxRQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsbUNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQVUsUUFBSSxFQUFDLHFCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLENBTkYsRUFXRSxNQUFDLCtDQUFEO0FBQ0UsYUFBUyxFQUFDLGtCQURaO0FBRUUsVUFBTSxFQUFFO0FBQUEsYUFBTXZCLE1BQU0sQ0FBQzBCLElBQVAsa0JBQXNCMUIsTUFBTSxDQUFDaUIsS0FBUCxDQUFhQyxFQUFuQyxFQUFOO0FBQUEsS0FGVjtBQUdFLFNBQUssRUFBQyxlQUhSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFYRixFQWdCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0diLE9BQU8sQ0FBQ3NCLE1BRFgsUUFDcUJ0QixPQUFPLENBQUN1QixLQUQ3QixDQWhCRixFQW1CRTtBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDRDQUFEO0FBQVMsZUFBVyxFQUFDLE1BQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLFlBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDBDQUFEO0FBQU8sYUFBUyxFQUFDLFVBQWpCO0FBQTRCLFNBQUssRUFBQyxRQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxPQUFHLEVBQUVDLGtEQUFLLENBQUNDLE1BQWhCO0FBQXdCLE9BQUcsRUFBRUQsa0RBQUssQ0FBQ0UsSUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUsxQixPQUFPLENBQUMyQixVQUFiLENBSkYsQ0FERixDQURGLENBREYsQ0FERixDQW5CRixFQWlDRTtBQUNFLGFBQVMsRUFBQyxpQkFEWjtBQUVFLDJCQUF1QixFQUFFO0FBQUVDLFlBQU0sRUFBRTVCLE9BQU8sQ0FBQzZCO0FBQWxCLEtBRjNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFqQ0YsRUFxQ0UsTUFBQyw0Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBckNGLEVBc0NHNUIsZUFBZSxHQUNkLE1BQUMseUNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURjLEdBR2QsTUFBQyxvRUFBRDtBQUNFLGlCQUFhLEVBQUVQLEtBQUssQ0FBQ29DLGFBRHZCO0FBRUUsUUFBSSxFQUFFakMsSUFGUjtBQUdFLFlBQVEsRUFBRUssUUFIWjtBQUlFLGdCQUFZLEVBQUVJLFlBSmhCO0FBS0UsbUJBQWUsRUFBRUMsZUFMbkI7QUFNRSxpQkFBYSxFQUFFYixLQUFLLENBQUNxQyxhQU52QjtBQU9FLFVBQU0sRUFBRXBDLE1BQU0sQ0FBQ2lCLEtBQVAsQ0FBYUUsTUFQdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXpDSixDQURGLEVBcURFO0FBQUssYUFBUyxFQUFDLHNCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQURGLEVBRUUsTUFBQyxzRUFBRDtBQUNFLFVBQU0sRUFBRSxDQUFDLEVBQUQsRUFBSyxFQUFMLENBRFY7QUFFRSxjQUFVLEVBQUVOLFVBRmQ7QUFHRSxRQUFJLEVBQUMsTUFIUDtBQUlFLE1BQUUsRUFBRSxFQUpOO0FBS0UsTUFBRSxFQUFFLEVBTE47QUFNRSxNQUFFLEVBQUUsRUFOTjtBQU9FLE1BQUUsRUFBRSxFQVBOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQVdFLE1BQUMsNENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVhGLEVBWUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FaRixFQWFFLE1BQUMscUVBQUQ7QUFDRSxVQUFNLEVBQUUsQ0FBQyxFQUFELEVBQUssRUFBTCxDQURWO0FBRUUsTUFBRSxFQUFFLEVBRk47QUFHRSxNQUFFLEVBQUUsRUFITjtBQUlFLE1BQUUsRUFBRSxFQUpOO0FBS0UsTUFBRSxFQUFFLEVBTE47QUFNRSxRQUFJLEVBQUMsT0FOUDtBQU9FLGFBQVMsRUFBRVIsT0FBTyxDQUFDZ0MsU0FQckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWJGLENBckRGLENBTkYsQ0FERixDQURGLENBREY7QUEwRkQsQ0FqSEQ7O0dBQU12QyxPO1VBQ1dHLHFELEVBQ0ZFLHdEOzs7S0FGVEwsTzs7QUFtSE4sSUFBTXdDLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDbENsQyxXQUFPLEVBQUVrQyxLQUFLLENBQUNDLE9BQU4sQ0FBY25DLE9BRFc7QUFFbENELFdBQU8sRUFBRW1DLEtBQUssQ0FBQ0MsT0FBTixDQUFjcEMsT0FGVztBQUdsQ0csWUFBUSxFQUFFZ0MsS0FBSyxDQUFDQyxPQUFOLENBQWNqQyxRQUhVO0FBSWxDRCxtQkFBZSxFQUFFaUMsS0FBSyxDQUFDQyxPQUFOLENBQWNsQyxlQUpHO0FBS2xDRSxpQkFBYSxFQUFFK0IsS0FBSyxDQUFDQyxPQUFOLENBQWNoQyxhQUxLO0FBTWxDaUMsV0FBTyxFQUFFRixLQUFLLENBQUNDLE9BQU4sQ0FBY0M7QUFOVyxHQUFaO0FBQUEsQ0FBeEI7O0FBU2VDLDBIQUFPLENBQUNKLGVBQUQsRUFBa0I7QUFDdEN0QixZQUFVLEVBQVZBLHdFQURzQztBQUV0Q0ksYUFBVyxFQUFYQSx5RUFGc0M7QUFHdENlLGVBQWEsRUFBYkEsMkVBSHNDO0FBSXRDQyxlQUFhLEVBQWJBLDJFQUFhQTtBQUp5QixDQUFsQixDQUFQLENBS1p0QyxPQUxZLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3RvcnkvW2lkXS9jaGFwdGVyL1tjaGFwaWRdLjJkNzA2MTNmOGFmYjcyZDE0OWEwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRGl2aWRlciwgU3BhY2UsIFBhZ2VIZWFkZXIsIFRvb2x0aXAsIFNwaW4gfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuaW1wb3J0IHsgZHVtbXkgfSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vdXRpbHMvZHVtbXlcIjtcclxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ob29rcy91c2VySG9va3NcIjtcclxuaW1wb3J0IHtcclxuICBnZXRDaGFwdGVyLFxyXG4gIGdldENvbW1lbnRzLFxyXG4gIHN1Ym1pdENvbW1lbnQsXHJcbiAgZGVsZXRlQ29tbWVudCxcclxufSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vcmVkdXgvYWN0aW9ucy9zdG9yaWVzQWN0aW9uc1wiO1xyXG5cclxuaW1wb3J0IENvbW1lbnRzIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL2NoYXB0ZXIvQ29tbWVudHNcIjtcclxuaW1wb3J0IExvYWRpbmdTY3JlZW4gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvaG9jL0xvYWRpbmdTY3JlZW5cIjtcclxuaW1wb3J0IFJlZGlyZWN0Q29tcCBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy9ob2MvUmVkaXJlY3RDb21wXCI7XHJcbmltcG9ydCB7XHJcbiAgQ2hhcmFjdGVyR3JpZCxcclxuICBMb2NhdGlvbkdyaWQsXHJcbn0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvY29tbW9uL0dyaWRcIjtcclxuXHJcbmNvbnN0IENoYXB0ZXIgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBhdXRoID0gdXNlQXV0aCgpO1xyXG4gIGNvbnN0IHsgbG9hZGluZywgY2hhcHRlciwgbG9hZGluZ0NvbW1lbnRzLCBjb21tZW50cywgY2hhcHRlckV4aXN0cyB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IFtyZXNwb25zZUJvZHksIHNldFJlc3BvbnNlQm9keV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY2hhcmFjdGVycywgc2V0Q2hhcmFjdGVyc10gPSBSZWFjdC51c2VTdGF0ZShbXSk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBwcm9wcy5nZXRDaGFwdGVyKHJvdXRlci5xdWVyeS5pZCwgcm91dGVyLnF1ZXJ5LmNoYXBpZCwgXCJzaG93XCIpO1xyXG4gICAgcHJvcHMuZ2V0Q29tbWVudHMocm91dGVyLnF1ZXJ5LmNoYXBpZCk7XHJcbiAgfSwgW3JvdXRlci5xdWVyeS5pZCwgcm91dGVyLnF1ZXJ5LmNoYXBpZF0pO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGNoYXB0ZXIuY2hhcmFjdGVycykge1xyXG4gICAgICBzZXRDaGFyYWN0ZXJzKFxyXG4gICAgICAgIGNoYXB0ZXIuY2hhcmFjdGVycy5maWx0ZXIoXHJcbiAgICAgICAgICAoYykgPT4gYy5wdWJsaWMgfHwgYy5hdXRob3JJZCA9PT0gYXV0aC51c2VyLnVpZFxyXG4gICAgICAgIClcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9LCBbY2hhcHRlcl0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExvYWRpbmdTY3JlZW4gbG9hZGluZz17bG9hZGluZ30+XHJcbiAgICAgIDxSZWRpcmVjdENvbXAgY29uZGl0aW9uPXtjaGFwdGVyRXhpc3RzfSB0eXBlPVwiNDA0XCI+XHJcbiAgICAgICAgPFJlZGlyZWN0Q29tcFxyXG4gICAgICAgICAgY29uZGl0aW9uPXtcclxuICAgICAgICAgICAgY2hhcHRlci5wdWJsaWMgfHwgKGF1dGgudXNlciAmJiBhdXRoLnVzZXIudWlkID09PSBjaGFwdGVyLmF1dGhvcklkKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdHlwZT1cIjQwM1wiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWNoYXB0ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFwdGVyLXBhZ2VcIj5cclxuICAgICAgICAgICAgICA8VG9vbHRpcCB0aXRsZT1cIk5leHQgQ2hhcHRlclwiIHBsYWNlbWVudD1cImJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uIGN1c3RvbS1pY29uIG5hdi1idG4gbmV4dC1idG5cIj5cclxuICAgICAgICAgICAgICAgICAgPGlvbi1pY29uIG5hbWU9XCJjaGV2cm9uLWZvcndhcmQtY2lyY2xlXCI+PC9pb24taWNvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICA8VG9vbHRpcCB0aXRsZT1cIlByZXZpb3VzIENoYXB0ZXJcIiBwbGFjZW1lbnQ9XCJib3R0b21cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbiBjdXN0b20taWNvbiBuYXYtYnRuIHByZXYtYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpb24taWNvbiBuYW1lPVwiY2hldnJvbi1iYWNrLWNpcmNsZVwiPjwvaW9uLWljb24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgPFBhZ2VIZWFkZXJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNpdGUtcGFnZS1oZWFkZXJcIlxyXG4gICAgICAgICAgICAgICAgb25CYWNrPXsoKSA9PiByb3V0ZXIucHVzaChgL3N0b3J5LyR7cm91dGVyLnF1ZXJ5LmlkfWApfVxyXG4gICAgICAgICAgICAgICAgdGl0bGU9XCJCYWNrIHRvIHN0b3J5XCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxoMj5cclxuICAgICAgICAgICAgICAgIHtjaGFwdGVyLm51bWJlcn0uIHtjaGFwdGVyLnRpdGxlfVxyXG4gICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXRhXCI+XHJcbiAgICAgICAgICAgICAgICA8RGl2aWRlciBvcmllbnRhdGlvbj1cImxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9maWxlLzFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxTcGFjZSBkaXJlY3Rpb249XCJ2ZXJ0aWNhbFwiIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXZhdGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2R1bW15LnBlcnNvbn0gYWx0PXtkdW1teS5uYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1PntjaGFwdGVyLmF1dGhvck5hbWV9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvU3BhY2U+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L0RpdmlkZXI+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPHNlY3Rpb25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNoYXB0ZXItY29udGVudFwiXHJcbiAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGNoYXB0ZXIuYm9keSB9fVxyXG4gICAgICAgICAgICAgID48L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgICB7bG9hZGluZ0NvbW1lbnRzID8gKFxyXG4gICAgICAgICAgICAgICAgPFNwaW4gLz5cclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPENvbW1lbnRzXHJcbiAgICAgICAgICAgICAgICAgIHN1Ym1pdENvbW1lbnQ9e3Byb3BzLnN1Ym1pdENvbW1lbnR9XHJcbiAgICAgICAgICAgICAgICAgIGF1dGg9e2F1dGh9XHJcbiAgICAgICAgICAgICAgICAgIGNvbW1lbnRzPXtjb21tZW50c31cclxuICAgICAgICAgICAgICAgICAgcmVzcG9uc2VCb2R5PXtyZXNwb25zZUJvZHl9XHJcbiAgICAgICAgICAgICAgICAgIHNldFJlc3BvbnNlQm9keT17c2V0UmVzcG9uc2VCb2R5fVxyXG4gICAgICAgICAgICAgICAgICBkZWxldGVDb21tZW50PXtwcm9wcy5kZWxldGVDb21tZW50fVxyXG4gICAgICAgICAgICAgICAgICBjaGFwaWQ9e3JvdXRlci5xdWVyeS5jaGFwaWR9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tY2hhcHRlci1kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgPGgzPkNoYXJhY3RlcnMgaW4gdGhpcyBjaGFwdGVyPC9oMz5cclxuICAgICAgICAgICAgICA8Q2hhcmFjdGVyR3JpZFxyXG4gICAgICAgICAgICAgICAgZ3V0dGVyPXtbMTIsIDEyXX1cclxuICAgICAgICAgICAgICAgIGNoYXJhY3RlcnM9e2NoYXJhY3RlcnN9XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwic2hvd1wiXHJcbiAgICAgICAgICAgICAgICBsZz17MTJ9XHJcbiAgICAgICAgICAgICAgICBtZD17MTJ9XHJcbiAgICAgICAgICAgICAgICBzbT17MTJ9XHJcbiAgICAgICAgICAgICAgICB4cz17MTJ9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgIDxoMz5Mb2NhdGlvbnMgaW4gdGhpcyBjaGFwdGVyPC9oMz5cclxuICAgICAgICAgICAgICA8TG9jYXRpb25HcmlkXHJcbiAgICAgICAgICAgICAgICBndXR0ZXI9e1sxMiwgMTJdfVxyXG4gICAgICAgICAgICAgICAgbGc9ezEyfVxyXG4gICAgICAgICAgICAgICAgbWQ9ezEyfVxyXG4gICAgICAgICAgICAgICAgc209ezEyfVxyXG4gICAgICAgICAgICAgICAgeHM9ezEyfVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInN0b3J5XCJcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9ucz17Y2hhcHRlci5sb2NhdGlvbnN9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1JlZGlyZWN0Q29tcD5cclxuICAgICAgPC9SZWRpcmVjdENvbXA+XHJcbiAgICA8L0xvYWRpbmdTY3JlZW4+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcclxuICBjaGFwdGVyOiBzdGF0ZS5zdG9yaWVzLmNoYXB0ZXIsXHJcbiAgbG9hZGluZzogc3RhdGUuc3Rvcmllcy5sb2FkaW5nLFxyXG4gIGNvbW1lbnRzOiBzdGF0ZS5zdG9yaWVzLmNvbW1lbnRzLFxyXG4gIGxvYWRpbmdDb21tZW50czogc3RhdGUuc3Rvcmllcy5sb2FkaW5nQ29tbWVudHMsXHJcbiAgY2hhcHRlckV4aXN0czogc3RhdGUuc3Rvcmllcy5jaGFwdGVyRXhpc3RzLFxyXG4gIG1lc3NhZ2U6IHN0YXRlLnN0b3JpZXMubWVzc2FnZSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywge1xyXG4gIGdldENoYXB0ZXIsXHJcbiAgZ2V0Q29tbWVudHMsXHJcbiAgc3VibWl0Q29tbWVudCxcclxuICBkZWxldGVDb21tZW50LFxyXG59KShDaGFwdGVyKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==