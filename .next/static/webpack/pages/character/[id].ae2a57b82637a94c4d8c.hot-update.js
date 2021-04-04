webpackHotUpdate_N_E("pages/character/[id]",{

/***/ "./pages/character/[id]/index.js":
/*!***************************************!*\
  !*** ./pages/character/[id]/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _utils_dummy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/dummy */ "./utils/dummy.js");
/* harmony import */ var _redux_actions_charactersActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../redux/actions/charactersActions */ "./redux/actions/charactersActions.js");
/* harmony import */ var _components_character_Comments__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/character/Comments */ "./components/character/Comments.js");
/* harmony import */ var _components_hoc_LoadingScreen__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/hoc/LoadingScreen */ "./components/hoc/LoadingScreen.js");
/* harmony import */ var _components_hoc_RedirectComp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/hoc/RedirectComp */ "./components/hoc/RedirectComp.js");
/* harmony import */ var _hooks_userHooks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../hooks/userHooks */ "./hooks/userHooks.js");
/* harmony import */ var _components_common_Grid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../components/common/Grid */ "./components/common/Grid.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\pages\\character\\[id]\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;













var Character = function Character(props) {
  _s();

  var character = props.character,
      loading = props.loading,
      charaExists = props.charaExists,
      comments = props.comments,
      loadingComments = props.loadingComments,
      confirmMessage = props.confirmMessage,
      userComment = props.userComment,
      rated = props.rated;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  var auth = Object(_hooks_userHooks__WEBPACK_IMPORTED_MODULE_11__["useAuth"])();
  var commentIds = comments.map(function (c) {
    return c.userId;
  });

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      alreadyPosted = _React$useState2[0],
      setAlreadyPosted = _React$useState2[1];

  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    if (auth.user && commentIds.includes(auth.user.uid)) {
      setAlreadyPosted(true);
    }
  }, [commentIds, auth, comments]);
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    props.getCharacter(router.query.id, "show");
    props.getCharacterComments(router.query.id);
  }, [router.query.id]);
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    if (rated) props.getCharacterComments(router.query.id);
  }, [rated]);
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    if (confirmMessage) {
      antd__WEBPACK_IMPORTED_MODULE_5__["message"].success(confirmMessage);
      props.getCharacterComments(router.query.id);
    }
  }, [confirmMessage]);
  return __jsx(_components_hoc_LoadingScreen__WEBPACK_IMPORTED_MODULE_9__["default"], {
    loading: loading,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 5
    }
  }, __jsx(_components_hoc_RedirectComp__WEBPACK_IMPORTED_MODULE_10__["default"], {
    type: "404",
    condition: charaExists,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }
  }, __jsx(_components_hoc_RedirectComp__WEBPACK_IMPORTED_MODULE_10__["default"], {
    type: "403",
    condition: character["public"] || character.authorId === auth.user.uid,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "main-character",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 11
    }
  }, __jsx("section", {
    className: "character-page",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "character-meta",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/profile/".concat(character.authorId),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 17
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 19
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Space"], {
    align: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "avatar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 23
    }
  }, __jsx("img", {
    src: character.authorImage ? character.authorImage : _utils_dummy__WEBPACK_IMPORTED_MODULE_6__["dummy"].avatar,
    alt: character.authorName,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 25
    }
  })), __jsx("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 23
    }
  }, "Author: ", character.authorName)))), auth.user && auth.user.uid === character.authorId ? __jsx("div", {
    className: "edit-btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 19
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/character/".concat(character.id, "/edit"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 21
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 23
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Space"], {
    size: 5,
    align: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 25
    }
  }, __jsx("ion-icon", {
    name: "create",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 27
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 27
    }
  }, "Edit"))))) : __jsx("div", {
    className: "like-btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 19
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Space"], {
    size: 5,
    align: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 21
    }
  }, __jsx("ion-icon", {
    name: "heart",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 23
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 23
    }
  }, "Like")))), __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 15
    }
  }, "".concat(character.firstname, " ").concat(character.lastname && character.lastname)), __jsx("div", {
    className: "character-image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "img-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Image"], {
    src: character.image ? character.image : _utils_dummy__WEBPACK_IMPORTED_MODULE_6__["dummy"].noImage,
    width: "100%",
    height: 600,
    alt: "character",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 19
    }
  }))), __jsx("div", {
    className: "character-description",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 15
    }
  }, __jsx("h3", {
    className: "desc-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 17
    }
  }, "Biography"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 17
    }
  }, character.description ? character.description : __jsx("span", {
    className: "na",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 21
    }
  }, "No description yet"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Divider"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 15
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Descriptions"], {
    title: "Character Info",
    layout: "vertical",
    labelStyle: {
      fontWeight: "bolder"
    },
    contentStyle: {
      paddingBottom: 0
    },
    colon: false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Descriptions"].Item, {
    label: "Age",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 17
    }
  }, character.age ? character.age : "N/A"), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Descriptions"].Item, {
    label: "Gender",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 17
    }
  }, character.gender ? character.gender : "N/A"), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Descriptions"].Item, {
    label: "Ethnicity",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 17
    }
  }, character.ethnicity ? character.ethnicity : "N/A"), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Descriptions"].Item, {
    label: "Occupation",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 17
    }
  }, character.occupation ? character.occupation : "N/A"), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Descriptions"].Item, {
    label: "Group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 17
    }
  }, character.group ? character.group : "N/A"), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Descriptions"].Item, {
    label: "Residence",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 17
    }
  }, character.residence ? character.residence : "N/A")), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Divider"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 15
    }
  }), __jsx("div", {
    className: "character-relationships",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 15
    }
  }, __jsx("h3", {
    className: "desc-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 17
    }
  }, "Relationships"), character.relatives ? __jsx(_components_common_Grid__WEBPACK_IMPORTED_MODULE_12__["CharacterGrid"], {
    gutter: [16, 16],
    type: "show",
    md: 8,
    lg: 6,
    xxl: 6,
    xl: 6,
    sm: 12,
    xs: 24,
    characters: character.relatives,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 19
    }
  }) : __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Empty"], {
    image: antd__WEBPACK_IMPORTED_MODULE_5__["Empty"].PRESENTED_IMAGE_SIMPLE,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 19
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Divider"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 15
    }
  }), __jsx("div", {
    className: "character-stories",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 15
    }
  }, __jsx("h3", {
    className: "desc-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 17
    }
  }, "Stories"), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    gutter: [16, 16],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 17
    }
  }, character.stories ? character.stories.map(function (story) {
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Col"], {
      lg: 8,
      md: 12,
      xs: 24,
      sm: 24,
      key: story.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 23
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/story/".concat(story.id),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 25
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 27
      }
    }, __jsx("figure", {
      className: "card story-card story-card-mini",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "img-container",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 31
      }
    }, __jsx("img", {
      src: story.banner,
      alt: "image",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 33
      }
    })), __jsx("figcaption", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 31
      }
    }, __jsx("h3", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 33
      }
    }, story === null || story === void 0 ? void 0 : story.title))))));
  }) : __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Empty"], {
    image: antd__WEBPACK_IMPORTED_MODULE_5__["Empty"].PRESENTED_IMAGE_SIMPLE,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 21
    }
  })))), __jsx(_components_character_Comments__WEBPACK_IMPORTED_MODULE_8__["default"], {
    userComment: userComment,
    comments: comments,
    character: character,
    auth: auth,
    submit: props.submitCharaterFeedback,
    loadingComments: loadingComments,
    deleteComment: props.deleteCharacterComment,
    commentIds: commentIds,
    alreadyPosted: alreadyPosted,
    rateComment: props.rateComment,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 13
    }
  })))));
};

_s(Character, "spiFfpK4DtokuoYNAPqLRk/K1o0=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"], _hooks_userHooks__WEBPACK_IMPORTED_MODULE_11__["useAuth"]];
});

_c = Character;

var mapStateToProps = function mapStateToProps(state) {
  return {
    character: state.characters.character,
    loading: state.characters.loading,
    charaExists: state.characters.charaExists,
    comments: state.stories.comments,
    loadingComments: state.stories.loadingComments,
    confirmMessage: state.stories.message,
    userComment: state.stories.userComment,
    rated: state.stories.rated
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, {
  getCharacter: _redux_actions_charactersActions__WEBPACK_IMPORTED_MODULE_7__["getCharacter"],
  submitCharaterFeedback: _redux_actions_charactersActions__WEBPACK_IMPORTED_MODULE_7__["submitCharaterFeedback"],
  getCharacterComments: _redux_actions_charactersActions__WEBPACK_IMPORTED_MODULE_7__["getCharacterComments"],
  deleteCharacterComment: _redux_actions_charactersActions__WEBPACK_IMPORTED_MODULE_7__["deleteCharacterComment"],
  rateComment: _redux_actions_charactersActions__WEBPACK_IMPORTED_MODULE_7__["rateComment"]
})(Character));

var _c;

$RefreshReg$(_c, "Character");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhcmFjdGVyLy9pbmRleC5qcyJdLCJuYW1lcyI6WyJDaGFyYWN0ZXIiLCJwcm9wcyIsImNoYXJhY3RlciIsImxvYWRpbmciLCJjaGFyYUV4aXN0cyIsImNvbW1lbnRzIiwibG9hZGluZ0NvbW1lbnRzIiwiY29uZmlybU1lc3NhZ2UiLCJ1c2VyQ29tbWVudCIsInJhdGVkIiwicm91dGVyIiwidXNlUm91dGVyIiwiYXV0aCIsInVzZUF1dGgiLCJjb21tZW50SWRzIiwibWFwIiwiYyIsInVzZXJJZCIsIlJlYWN0IiwidXNlU3RhdGUiLCJhbHJlYWR5UG9zdGVkIiwic2V0QWxyZWFkeVBvc3RlZCIsInVzZUVmZmVjdCIsInVzZXIiLCJpbmNsdWRlcyIsInVpZCIsImdldENoYXJhY3RlciIsInF1ZXJ5IiwiaWQiLCJnZXRDaGFyYWN0ZXJDb21tZW50cyIsIm1lc3NhZ2UiLCJzdWNjZXNzIiwiYXV0aG9ySWQiLCJhdXRob3JJbWFnZSIsImR1bW15IiwiYXZhdGFyIiwiYXV0aG9yTmFtZSIsImZpcnN0bmFtZSIsImxhc3RuYW1lIiwiaW1hZ2UiLCJub0ltYWdlIiwiZGVzY3JpcHRpb24iLCJmb250V2VpZ2h0IiwicGFkZGluZ0JvdHRvbSIsImFnZSIsImdlbmRlciIsImV0aG5pY2l0eSIsIm9jY3VwYXRpb24iLCJncm91cCIsInJlc2lkZW5jZSIsInJlbGF0aXZlcyIsIkVtcHR5IiwiUFJFU0VOVEVEX0lNQUdFX1NJTVBMRSIsInN0b3JpZXMiLCJzdG9yeSIsImJhbm5lciIsInRpdGxlIiwic3VibWl0Q2hhcmF0ZXJGZWVkYmFjayIsImRlbGV0ZUNoYXJhY3RlckNvbW1lbnQiLCJyYXRlQ29tbWVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiY2hhcmFjdGVycyIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBV0E7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsTUFFekJDLFNBRnlCLEdBVXZCRCxLQVZ1QixDQUV6QkMsU0FGeUI7QUFBQSxNQUd6QkMsT0FIeUIsR0FVdkJGLEtBVnVCLENBR3pCRSxPQUh5QjtBQUFBLE1BSXpCQyxXQUp5QixHQVV2QkgsS0FWdUIsQ0FJekJHLFdBSnlCO0FBQUEsTUFLekJDLFFBTHlCLEdBVXZCSixLQVZ1QixDQUt6QkksUUFMeUI7QUFBQSxNQU16QkMsZUFOeUIsR0FVdkJMLEtBVnVCLENBTXpCSyxlQU55QjtBQUFBLE1BT3pCQyxjQVB5QixHQVV2Qk4sS0FWdUIsQ0FPekJNLGNBUHlCO0FBQUEsTUFRekJDLFdBUnlCLEdBVXZCUCxLQVZ1QixDQVF6Qk8sV0FSeUI7QUFBQSxNQVN6QkMsS0FUeUIsR0FVdkJSLEtBVnVCLENBU3pCUSxLQVR5QjtBQVczQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsSUFBSSxHQUFHQyxpRUFBTyxFQUFwQjtBQUNBLE1BQU1DLFVBQVUsR0FBR1QsUUFBUSxDQUFDVSxHQUFULENBQWEsVUFBQ0MsQ0FBRDtBQUFBLFdBQU9BLENBQUMsQ0FBQ0MsTUFBVDtBQUFBLEdBQWIsQ0FBbkI7O0FBYjJCLHdCQWVlQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsS0FBZixDQWZmO0FBQUE7QUFBQSxNQWVwQkMsYUFmb0I7QUFBQSxNQWVMQyxnQkFmSzs7QUFpQjNCSCw4Q0FBSyxDQUFDSSxTQUFOLENBQWdCLFlBQU07QUFDcEIsUUFBSVYsSUFBSSxDQUFDVyxJQUFMLElBQWFULFVBQVUsQ0FBQ1UsUUFBWCxDQUFvQlosSUFBSSxDQUFDVyxJQUFMLENBQVVFLEdBQTlCLENBQWpCLEVBQXFEO0FBQ25ESixzQkFBZ0IsQ0FBQyxJQUFELENBQWhCO0FBQ0Q7QUFDRixHQUpELEVBSUcsQ0FBQ1AsVUFBRCxFQUFhRixJQUFiLEVBQW1CUCxRQUFuQixDQUpIO0FBTUFhLDhDQUFLLENBQUNJLFNBQU4sQ0FBZ0IsWUFBTTtBQUNwQnJCLFNBQUssQ0FBQ3lCLFlBQU4sQ0FBbUJoQixNQUFNLENBQUNpQixLQUFQLENBQWFDLEVBQWhDLEVBQW9DLE1BQXBDO0FBQ0EzQixTQUFLLENBQUM0QixvQkFBTixDQUEyQm5CLE1BQU0sQ0FBQ2lCLEtBQVAsQ0FBYUMsRUFBeEM7QUFDRCxHQUhELEVBR0csQ0FBQ2xCLE1BQU0sQ0FBQ2lCLEtBQVAsQ0FBYUMsRUFBZCxDQUhIO0FBS0FWLDhDQUFLLENBQUNJLFNBQU4sQ0FBZ0IsWUFBTTtBQUNwQixRQUFJYixLQUFKLEVBQVdSLEtBQUssQ0FBQzRCLG9CQUFOLENBQTJCbkIsTUFBTSxDQUFDaUIsS0FBUCxDQUFhQyxFQUF4QztBQUNaLEdBRkQsRUFFRyxDQUFDbkIsS0FBRCxDQUZIO0FBSUFTLDhDQUFLLENBQUNJLFNBQU4sQ0FBZ0IsWUFBTTtBQUNwQixRQUFJZixjQUFKLEVBQW9CO0FBQ2xCdUIsa0RBQU8sQ0FBQ0MsT0FBUixDQUFnQnhCLGNBQWhCO0FBQ0FOLFdBQUssQ0FBQzRCLG9CQUFOLENBQTJCbkIsTUFBTSxDQUFDaUIsS0FBUCxDQUFhQyxFQUF4QztBQUNEO0FBQ0YsR0FMRCxFQUtHLENBQUNyQixjQUFELENBTEg7QUFPQSxTQUNFLE1BQUMscUVBQUQ7QUFBZSxXQUFPLEVBQUVKLE9BQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHFFQUFEO0FBQWMsUUFBSSxFQUFDLEtBQW5CO0FBQXlCLGFBQVMsRUFBRUMsV0FBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMscUVBQUQ7QUFDRSxRQUFJLEVBQUMsS0FEUDtBQUVFLGFBQVMsRUFBRUYsU0FBUyxVQUFULElBQW9CQSxTQUFTLENBQUM4QixRQUFWLEtBQXVCcEIsSUFBSSxDQUFDVyxJQUFMLENBQVVFLEdBRmxFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJRTtBQUFLLGFBQVMsRUFBQyxnQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBUyxhQUFTLEVBQUMsZ0JBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxnQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUkscUJBQWN2QixTQUFTLENBQUM4QixRQUF4QixDQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywwQ0FBRDtBQUFPLFNBQUssRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLE9BQUcsRUFDRDlCLFNBQVMsQ0FBQytCLFdBQVYsR0FDSS9CLFNBQVMsQ0FBQytCLFdBRGQsR0FFSUMsa0RBQUssQ0FBQ0MsTUFKZDtBQU1FLE9BQUcsRUFBRWpDLFNBQVMsQ0FBQ2tDLFVBTmpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBV0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBYWxDLFNBQVMsQ0FBQ2tDLFVBQXZCLENBWEYsQ0FERixDQURGLENBREYsRUFrQkd4QixJQUFJLENBQUNXLElBQUwsSUFBYVgsSUFBSSxDQUFDVyxJQUFMLENBQVVFLEdBQVYsS0FBa0J2QixTQUFTLENBQUM4QixRQUF6QyxHQUNDO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLHVCQUFnQjlCLFNBQVMsQ0FBQzBCLEVBQTFCLFVBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDBDQUFEO0FBQU8sUUFBSSxFQUFFLENBQWI7QUFBZ0IsU0FBSyxFQUFDLFFBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFVLFFBQUksRUFBQyxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixDQURGLENBREYsQ0FERixDQURELEdBWUM7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywwQ0FBRDtBQUFPLFFBQUksRUFBRSxDQUFiO0FBQWdCLFNBQUssRUFBQyxRQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBVSxRQUFJLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsQ0FERixDQTlCSixDQURGLEVBdUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUTFCLFNBQVMsQ0FBQ21DLFNBQWxCLGNBQ0VuQyxTQUFTLENBQUNvQyxRQUFWLElBQXNCcEMsU0FBUyxDQUFDb0MsUUFEbEMsRUF2Q0YsRUEwQ0U7QUFBSyxhQUFTLEVBQUMsaUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMENBQUQ7QUFDRSxPQUFHLEVBQUVwQyxTQUFTLENBQUNxQyxLQUFWLEdBQWtCckMsU0FBUyxDQUFDcUMsS0FBNUIsR0FBb0NMLGtEQUFLLENBQUNNLE9BRGpEO0FBRUUsU0FBSyxFQUFFLE1BRlQ7QUFHRSxVQUFNLEVBQUUsR0FIVjtBQUlFLE9BQUcsRUFBQyxXQUpOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLENBMUNGLEVBb0RFO0FBQUssYUFBUyxFQUFDLHVCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQyxZQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0d0QyxTQUFTLENBQUN1QyxXQUFWLEdBQ0N2QyxTQUFTLENBQUN1QyxXQURYLEdBR0M7QUFBTSxhQUFTLEVBQUMsSUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFKSixDQUZGLENBcERGLEVBOERFLE1BQUMsNENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTlERixFQStERSxNQUFDLGlEQUFEO0FBQ0UsU0FBSyxFQUFDLGdCQURSO0FBRUUsVUFBTSxFQUFDLFVBRlQ7QUFHRSxjQUFVLEVBQUU7QUFBRUMsZ0JBQVUsRUFBRTtBQUFkLEtBSGQ7QUFJRSxnQkFBWSxFQUFFO0FBQUVDLG1CQUFhLEVBQUU7QUFBakIsS0FKaEI7QUFLRSxTQUFLLEVBQUUsS0FMVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0UsTUFBQyxpREFBRCxDQUFjLElBQWQ7QUFBbUIsU0FBSyxFQUFDLEtBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR3pDLFNBQVMsQ0FBQzBDLEdBQVYsR0FBZ0IxQyxTQUFTLENBQUMwQyxHQUExQixHQUFnQyxLQURuQyxDQVBGLEVBVUUsTUFBQyxpREFBRCxDQUFjLElBQWQ7QUFBbUIsU0FBSyxFQUFDLFFBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRzFDLFNBQVMsQ0FBQzJDLE1BQVYsR0FBbUIzQyxTQUFTLENBQUMyQyxNQUE3QixHQUFzQyxLQUR6QyxDQVZGLEVBYUUsTUFBQyxpREFBRCxDQUFjLElBQWQ7QUFBbUIsU0FBSyxFQUFDLFdBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRzNDLFNBQVMsQ0FBQzRDLFNBQVYsR0FBc0I1QyxTQUFTLENBQUM0QyxTQUFoQyxHQUE0QyxLQUQvQyxDQWJGLEVBZ0JFLE1BQUMsaURBQUQsQ0FBYyxJQUFkO0FBQW1CLFNBQUssRUFBQyxZQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0c1QyxTQUFTLENBQUM2QyxVQUFWLEdBQXVCN0MsU0FBUyxDQUFDNkMsVUFBakMsR0FBOEMsS0FEakQsQ0FoQkYsRUFtQkUsTUFBQyxpREFBRCxDQUFjLElBQWQ7QUFBbUIsU0FBSyxFQUFDLE9BQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRzdDLFNBQVMsQ0FBQzhDLEtBQVYsR0FBa0I5QyxTQUFTLENBQUM4QyxLQUE1QixHQUFvQyxLQUR2QyxDQW5CRixFQXNCRSxNQUFDLGlEQUFELENBQWMsSUFBZDtBQUFtQixTQUFLLEVBQUMsV0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHOUMsU0FBUyxDQUFDK0MsU0FBVixHQUFzQi9DLFNBQVMsQ0FBQytDLFNBQWhDLEdBQTRDLEtBRC9DLENBdEJGLENBL0RGLEVBeUZFLE1BQUMsNENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXpGRixFQTBGRTtBQUFLLGFBQVMsRUFBQyx5QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsWUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLEVBRUcvQyxTQUFTLENBQUNnRCxTQUFWLEdBQ0MsTUFBQyxzRUFBRDtBQUNFLFVBQU0sRUFBRSxDQUFDLEVBQUQsRUFBSyxFQUFMLENBRFY7QUFFRSxRQUFJLEVBQUMsTUFGUDtBQUdFLE1BQUUsRUFBRSxDQUhOO0FBSUUsTUFBRSxFQUFFLENBSk47QUFLRSxPQUFHLEVBQUUsQ0FMUDtBQU1FLE1BQUUsRUFBRSxDQU5OO0FBT0UsTUFBRSxFQUFFLEVBUE47QUFRRSxNQUFFLEVBQUUsRUFSTjtBQVNFLGNBQVUsRUFBRWhELFNBQVMsQ0FBQ2dELFNBVHhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxHQWFDLE1BQUMsMENBQUQ7QUFBTyxTQUFLLEVBQUVDLDBDQUFLLENBQUNDLHNCQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZkosQ0ExRkYsRUE0R0UsTUFBQyw0Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBNUdGLEVBNkdFO0FBQUssYUFBUyxFQUFDLG1CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQyxZQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixFQUVFLE1BQUMsd0NBQUQ7QUFBSyxVQUFNLEVBQUUsQ0FBQyxFQUFELEVBQUssRUFBTCxDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR2xELFNBQVMsQ0FBQ21ELE9BQVYsR0FDQ25ELFNBQVMsQ0FBQ21ELE9BQVYsQ0FBa0J0QyxHQUFsQixDQUFzQixVQUFDdUMsS0FBRDtBQUFBLFdBQ3BCLE1BQUMsd0NBQUQ7QUFBSyxRQUFFLEVBQUUsQ0FBVDtBQUFZLFFBQUUsRUFBRSxFQUFoQjtBQUFvQixRQUFFLEVBQUUsRUFBeEI7QUFBNEIsUUFBRSxFQUFFLEVBQWhDO0FBQW9DLFNBQUcsRUFBRUEsS0FBSyxDQUFDMUIsRUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsZ0RBQUQ7QUFBTSxVQUFJLG1CQUFZMEIsS0FBSyxDQUFDMUIsRUFBbEIsQ0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQVEsZUFBUyxFQUFDLGlDQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxlQUFTLEVBQUMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxTQUFHLEVBQUUwQixLQUFLLENBQUNDLE1BQWhCO0FBQXdCLFNBQUcsRUFBQyxPQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsQ0FERixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUtELEtBQUwsYUFBS0EsS0FBTCx1QkFBS0EsS0FBSyxDQUFFRSxLQUFaLENBREYsQ0FKRixDQURGLENBREYsQ0FERixDQURvQjtBQUFBLEdBQXRCLENBREQsR0FrQkMsTUFBQywwQ0FBRDtBQUFPLFNBQUssRUFBRUwsMENBQUssQ0FBQ0Msc0JBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFuQkosQ0FGRixDQTdHRixDQURGLEVBd0lFLE1BQUMsc0VBQUQ7QUFDRSxlQUFXLEVBQUU1QyxXQURmO0FBRUUsWUFBUSxFQUFFSCxRQUZaO0FBR0UsYUFBUyxFQUFFSCxTQUhiO0FBSUUsUUFBSSxFQUFFVSxJQUpSO0FBS0UsVUFBTSxFQUFFWCxLQUFLLENBQUN3RCxzQkFMaEI7QUFNRSxtQkFBZSxFQUFFbkQsZUFObkI7QUFPRSxpQkFBYSxFQUFFTCxLQUFLLENBQUN5RCxzQkFQdkI7QUFRRSxjQUFVLEVBQUU1QyxVQVJkO0FBU0UsaUJBQWEsRUFBRU0sYUFUakI7QUFVRSxlQUFXLEVBQUVuQixLQUFLLENBQUMwRCxXQVZyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBeElGLENBSkYsQ0FERixDQURGLENBREY7QUFnS0QsQ0F2TUQ7O0dBQU0zRCxTO1VBV1dXLHFELEVBQ0ZFLHlEOzs7S0FaVGIsUzs7QUF5TU4sSUFBTTRELGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDbEMzRCxhQUFTLEVBQUUyRCxLQUFLLENBQUNDLFVBQU4sQ0FBaUI1RCxTQURNO0FBRWxDQyxXQUFPLEVBQUUwRCxLQUFLLENBQUNDLFVBQU4sQ0FBaUIzRCxPQUZRO0FBR2xDQyxlQUFXLEVBQUV5RCxLQUFLLENBQUNDLFVBQU4sQ0FBaUIxRCxXQUhJO0FBSWxDQyxZQUFRLEVBQUV3RCxLQUFLLENBQUNSLE9BQU4sQ0FBY2hELFFBSlU7QUFLbENDLG1CQUFlLEVBQUV1RCxLQUFLLENBQUNSLE9BQU4sQ0FBYy9DLGVBTEc7QUFNbENDLGtCQUFjLEVBQUVzRCxLQUFLLENBQUNSLE9BQU4sQ0FBY3ZCLE9BTkk7QUFPbEN0QixlQUFXLEVBQUVxRCxLQUFLLENBQUNSLE9BQU4sQ0FBYzdDLFdBUE87QUFRbENDLFNBQUssRUFBRW9ELEtBQUssQ0FBQ1IsT0FBTixDQUFjNUM7QUFSYSxHQUFaO0FBQUEsQ0FBeEI7O0FBV2VzRCwwSEFBTyxDQUFDSCxlQUFELEVBQWtCO0FBQ3RDbEMsY0FBWSxFQUFaQSw2RUFEc0M7QUFFdEMrQix3QkFBc0IsRUFBdEJBLHVGQUZzQztBQUd0QzVCLHNCQUFvQixFQUFwQkEscUZBSHNDO0FBSXRDNkIsd0JBQXNCLEVBQXRCQSx1RkFKc0M7QUFLdENDLGFBQVcsRUFBWEEsNEVBQVdBO0FBTDJCLENBQWxCLENBQVAsQ0FNWjNELFNBTlksQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jaGFyYWN0ZXIvW2lkXS5hZTJhNTdiODI2MzdhOTRjNGQ4Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7XHJcbiAgSW1hZ2UsXHJcbiAgRGl2aWRlcixcclxuICBTcGFjZSxcclxuICBFbXB0eSxcclxuICBEZXNjcmlwdGlvbnMsXHJcbiAgUm93LFxyXG4gIENvbCxcclxuICBtZXNzYWdlLFxyXG59IGZyb20gXCJhbnRkXCI7XHJcblxyXG5pbXBvcnQgeyBkdW1teSB9IGZyb20gXCIuLi8uLi8uLi91dGlscy9kdW1teVwiO1xyXG5pbXBvcnQge1xyXG4gIGdldENoYXJhY3RlcixcclxuICBzdWJtaXRDaGFyYXRlckZlZWRiYWNrLFxyXG4gIGdldENoYXJhY3RlckNvbW1lbnRzLFxyXG4gIGRlbGV0ZUNoYXJhY3RlckNvbW1lbnQsXHJcbiAgcmF0ZUNvbW1lbnQsXHJcbn0gZnJvbSBcIi4uLy4uLy4uL3JlZHV4L2FjdGlvbnMvY2hhcmFjdGVyc0FjdGlvbnNcIjtcclxuXHJcbmltcG9ydCBDb21tZW50cyBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9jaGFyYWN0ZXIvQ29tbWVudHNcIjtcclxuaW1wb3J0IExvYWRpbmdTY3JlZW4gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaG9jL0xvYWRpbmdTY3JlZW5cIjtcclxuaW1wb3J0IFJlZGlyZWN0Q29tcCBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9ob2MvUmVkaXJlY3RDb21wXCI7XHJcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tIFwiLi4vLi4vLi4vaG9va3MvdXNlckhvb2tzXCI7XHJcbmltcG9ydCB7IENoYXJhY3RlckdyaWQgfSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9jb21tb24vR3JpZFwiO1xyXG5cclxuY29uc3QgQ2hhcmFjdGVyID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgY2hhcmFjdGVyLFxyXG4gICAgbG9hZGluZyxcclxuICAgIGNoYXJhRXhpc3RzLFxyXG4gICAgY29tbWVudHMsXHJcbiAgICBsb2FkaW5nQ29tbWVudHMsXHJcbiAgICBjb25maXJtTWVzc2FnZSxcclxuICAgIHVzZXJDb21tZW50LFxyXG4gICAgcmF0ZWQsXHJcbiAgfSA9IHByb3BzO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IGF1dGggPSB1c2VBdXRoKCk7XHJcbiAgY29uc3QgY29tbWVudElkcyA9IGNvbW1lbnRzLm1hcCgoYykgPT4gYy51c2VySWQpO1xyXG5cclxuICBjb25zdCBbYWxyZWFkeVBvc3RlZCwgc2V0QWxyZWFkeVBvc3RlZF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoYXV0aC51c2VyICYmIGNvbW1lbnRJZHMuaW5jbHVkZXMoYXV0aC51c2VyLnVpZCkpIHtcclxuICAgICAgc2V0QWxyZWFkeVBvc3RlZCh0cnVlKTtcclxuICAgIH1cclxuICB9LCBbY29tbWVudElkcywgYXV0aCwgY29tbWVudHNdKTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHByb3BzLmdldENoYXJhY3Rlcihyb3V0ZXIucXVlcnkuaWQsIFwic2hvd1wiKTtcclxuICAgIHByb3BzLmdldENoYXJhY3RlckNvbW1lbnRzKHJvdXRlci5xdWVyeS5pZCk7XHJcbiAgfSwgW3JvdXRlci5xdWVyeS5pZF0pO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHJhdGVkKSBwcm9wcy5nZXRDaGFyYWN0ZXJDb21tZW50cyhyb3V0ZXIucXVlcnkuaWQpO1xyXG4gIH0sIFtyYXRlZF0pO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGNvbmZpcm1NZXNzYWdlKSB7XHJcbiAgICAgIG1lc3NhZ2Uuc3VjY2Vzcyhjb25maXJtTWVzc2FnZSk7XHJcbiAgICAgIHByb3BzLmdldENoYXJhY3RlckNvbW1lbnRzKHJvdXRlci5xdWVyeS5pZCk7XHJcbiAgICB9XHJcbiAgfSwgW2NvbmZpcm1NZXNzYWdlXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TG9hZGluZ1NjcmVlbiBsb2FkaW5nPXtsb2FkaW5nfT5cclxuICAgICAgPFJlZGlyZWN0Q29tcCB0eXBlPVwiNDA0XCIgY29uZGl0aW9uPXtjaGFyYUV4aXN0c30+XHJcbiAgICAgICAgPFJlZGlyZWN0Q29tcFxyXG4gICAgICAgICAgdHlwZT1cIjQwM1wiXHJcbiAgICAgICAgICBjb25kaXRpb249e2NoYXJhY3Rlci5wdWJsaWMgfHwgY2hhcmFjdGVyLmF1dGhvcklkID09PSBhdXRoLnVzZXIudWlkfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1jaGFyYWN0ZXJcIj5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY2hhcmFjdGVyLXBhZ2VcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJhY3Rlci1tZXRhXCI+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3Byb2ZpbGUvJHtjaGFyYWN0ZXIuYXV0aG9ySWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTcGFjZSBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdmF0YXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFyYWN0ZXIuYXV0aG9ySW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBjaGFyYWN0ZXIuYXV0aG9ySW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBkdW1teS5hdmF0YXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtjaGFyYWN0ZXIuYXV0aG9yTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGg1PkF1dGhvcjoge2NoYXJhY3Rlci5hdXRob3JOYW1lfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TcGFjZT5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAge2F1dGgudXNlciAmJiBhdXRoLnVzZXIudWlkID09PSBjaGFyYWN0ZXIuYXV0aG9ySWQgPyAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWRpdC1idG5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2NoYXJhY3Rlci8ke2NoYXJhY3Rlci5pZH0vZWRpdGB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFjZSBzaXplPXs1fSBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpb24taWNvbiBuYW1lPVwiY3JlYXRlXCI+PC9pb24taWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5FZGl0PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NwYWNlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpa2UtYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNwYWNlIHNpemU9ezV9IGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW9uLWljb24gbmFtZT1cImhlYXJ0XCI+PC9pb24taWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkxpa2U8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TcGFjZT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxoMj57YCR7Y2hhcmFjdGVyLmZpcnN0bmFtZX0gJHtcclxuICAgICAgICAgICAgICAgIGNoYXJhY3Rlci5sYXN0bmFtZSAmJiBjaGFyYWN0ZXIubGFzdG5hbWVcclxuICAgICAgICAgICAgICB9YH08L2gyPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcmFjdGVyLWltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZy1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtjaGFyYWN0ZXIuaW1hZ2UgPyBjaGFyYWN0ZXIuaW1hZ2UgOiBkdW1teS5ub0ltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXtcIjEwMCVcIn1cclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezYwMH1cclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJjaGFyYWN0ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFyYWN0ZXItZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJkZXNjLXRpdGxlXCI+QmlvZ3JhcGh5PC9oMz5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICB7Y2hhcmFjdGVyLmRlc2NyaXB0aW9uID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIGNoYXJhY3Rlci5kZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hXCI+Tm8gZGVzY3JpcHRpb24geWV0PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgPERlc2NyaXB0aW9uc1xyXG4gICAgICAgICAgICAgICAgdGl0bGU9XCJDaGFyYWN0ZXIgSW5mb1wiXHJcbiAgICAgICAgICAgICAgICBsYXlvdXQ9XCJ2ZXJ0aWNhbFwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbFN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZGVyXCIgfX1cclxuICAgICAgICAgICAgICAgIGNvbnRlbnRTdHlsZT17eyBwYWRkaW5nQm90dG9tOiAwIH19XHJcbiAgICAgICAgICAgICAgICBjb2xvbj17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPERlc2NyaXB0aW9ucy5JdGVtIGxhYmVsPVwiQWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtjaGFyYWN0ZXIuYWdlID8gY2hhcmFjdGVyLmFnZSA6IFwiTi9BXCJ9XHJcbiAgICAgICAgICAgICAgICA8L0Rlc2NyaXB0aW9ucy5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPERlc2NyaXB0aW9ucy5JdGVtIGxhYmVsPVwiR2VuZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtjaGFyYWN0ZXIuZ2VuZGVyID8gY2hhcmFjdGVyLmdlbmRlciA6IFwiTi9BXCJ9XHJcbiAgICAgICAgICAgICAgICA8L0Rlc2NyaXB0aW9ucy5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPERlc2NyaXB0aW9ucy5JdGVtIGxhYmVsPVwiRXRobmljaXR5XCI+XHJcbiAgICAgICAgICAgICAgICAgIHtjaGFyYWN0ZXIuZXRobmljaXR5ID8gY2hhcmFjdGVyLmV0aG5pY2l0eSA6IFwiTi9BXCJ9XHJcbiAgICAgICAgICAgICAgICA8L0Rlc2NyaXB0aW9ucy5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPERlc2NyaXB0aW9ucy5JdGVtIGxhYmVsPVwiT2NjdXBhdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICB7Y2hhcmFjdGVyLm9jY3VwYXRpb24gPyBjaGFyYWN0ZXIub2NjdXBhdGlvbiA6IFwiTi9BXCJ9XHJcbiAgICAgICAgICAgICAgICA8L0Rlc2NyaXB0aW9ucy5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPERlc2NyaXB0aW9ucy5JdGVtIGxhYmVsPVwiR3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAge2NoYXJhY3Rlci5ncm91cCA/IGNoYXJhY3Rlci5ncm91cCA6IFwiTi9BXCJ9XHJcbiAgICAgICAgICAgICAgICA8L0Rlc2NyaXB0aW9ucy5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPERlc2NyaXB0aW9ucy5JdGVtIGxhYmVsPVwiUmVzaWRlbmNlXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtjaGFyYWN0ZXIucmVzaWRlbmNlID8gY2hhcmFjdGVyLnJlc2lkZW5jZSA6IFwiTi9BXCJ9XHJcbiAgICAgICAgICAgICAgICA8L0Rlc2NyaXB0aW9ucy5JdGVtPlxyXG4gICAgICAgICAgICAgIDwvRGVzY3JpcHRpb25zPlxyXG4gICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFyYWN0ZXItcmVsYXRpb25zaGlwc1wiPlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImRlc2MtdGl0bGVcIj5SZWxhdGlvbnNoaXBzPC9oMz5cclxuICAgICAgICAgICAgICAgIHtjaGFyYWN0ZXIucmVsYXRpdmVzID8gKFxyXG4gICAgICAgICAgICAgICAgICA8Q2hhcmFjdGVyR3JpZFxyXG4gICAgICAgICAgICAgICAgICAgIGd1dHRlcj17WzE2LCAxNl19XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInNob3dcIlxyXG4gICAgICAgICAgICAgICAgICAgIG1kPXs4fVxyXG4gICAgICAgICAgICAgICAgICAgIGxnPXs2fVxyXG4gICAgICAgICAgICAgICAgICAgIHh4bD17Nn1cclxuICAgICAgICAgICAgICAgICAgICB4bD17Nn1cclxuICAgICAgICAgICAgICAgICAgICBzbT17MTJ9XHJcbiAgICAgICAgICAgICAgICAgICAgeHM9ezI0fVxyXG4gICAgICAgICAgICAgICAgICAgIGNoYXJhY3RlcnM9e2NoYXJhY3Rlci5yZWxhdGl2ZXN9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICA8RW1wdHkgaW1hZ2U9e0VtcHR5LlBSRVNFTlRFRF9JTUFHRV9TSU1QTEV9IC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFyYWN0ZXItc3Rvcmllc1wiPlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImRlc2MtdGl0bGVcIj5TdG9yaWVzPC9oMz5cclxuICAgICAgICAgICAgICAgIDxSb3cgZ3V0dGVyPXtbMTYsIDE2XX0+XHJcbiAgICAgICAgICAgICAgICAgIHtjaGFyYWN0ZXIuc3RvcmllcyA/IChcclxuICAgICAgICAgICAgICAgICAgICBjaGFyYWN0ZXIuc3Rvcmllcy5tYXAoKHN0b3J5KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPXs4fSBtZD17MTJ9IHhzPXsyNH0gc209ezI0fSBrZXk9e3N0b3J5LmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9zdG9yeS8ke3N0b3J5LmlkfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJjYXJkIHN0b3J5LWNhcmQgc3RvcnktY2FyZC1taW5pXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtzdG9yeS5iYW5uZXJ9IGFsdD1cImltYWdlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWdjYXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57c3Rvcnk/LnRpdGxlfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlnY2FwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8RW1wdHkgaW1hZ2U9e0VtcHR5LlBSRVNFTlRFRF9JTUFHRV9TSU1QTEV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8Q29tbWVudHNcclxuICAgICAgICAgICAgICB1c2VyQ29tbWVudD17dXNlckNvbW1lbnR9XHJcbiAgICAgICAgICAgICAgY29tbWVudHM9e2NvbW1lbnRzfVxyXG4gICAgICAgICAgICAgIGNoYXJhY3Rlcj17Y2hhcmFjdGVyfVxyXG4gICAgICAgICAgICAgIGF1dGg9e2F1dGh9XHJcbiAgICAgICAgICAgICAgc3VibWl0PXtwcm9wcy5zdWJtaXRDaGFyYXRlckZlZWRiYWNrfVxyXG4gICAgICAgICAgICAgIGxvYWRpbmdDb21tZW50cz17bG9hZGluZ0NvbW1lbnRzfVxyXG4gICAgICAgICAgICAgIGRlbGV0ZUNvbW1lbnQ9e3Byb3BzLmRlbGV0ZUNoYXJhY3RlckNvbW1lbnR9XHJcbiAgICAgICAgICAgICAgY29tbWVudElkcz17Y29tbWVudElkc31cclxuICAgICAgICAgICAgICBhbHJlYWR5UG9zdGVkPXthbHJlYWR5UG9zdGVkfVxyXG4gICAgICAgICAgICAgIHJhdGVDb21tZW50PXtwcm9wcy5yYXRlQ29tbWVudH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvUmVkaXJlY3RDb21wPlxyXG4gICAgICA8L1JlZGlyZWN0Q29tcD5cclxuICAgIDwvTG9hZGluZ1NjcmVlbj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG4gIGNoYXJhY3Rlcjogc3RhdGUuY2hhcmFjdGVycy5jaGFyYWN0ZXIsXHJcbiAgbG9hZGluZzogc3RhdGUuY2hhcmFjdGVycy5sb2FkaW5nLFxyXG4gIGNoYXJhRXhpc3RzOiBzdGF0ZS5jaGFyYWN0ZXJzLmNoYXJhRXhpc3RzLFxyXG4gIGNvbW1lbnRzOiBzdGF0ZS5zdG9yaWVzLmNvbW1lbnRzLFxyXG4gIGxvYWRpbmdDb21tZW50czogc3RhdGUuc3Rvcmllcy5sb2FkaW5nQ29tbWVudHMsXHJcbiAgY29uZmlybU1lc3NhZ2U6IHN0YXRlLnN0b3JpZXMubWVzc2FnZSxcclxuICB1c2VyQ29tbWVudDogc3RhdGUuc3Rvcmllcy51c2VyQ29tbWVudCxcclxuICByYXRlZDogc3RhdGUuc3Rvcmllcy5yYXRlZCxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywge1xyXG4gIGdldENoYXJhY3RlcixcclxuICBzdWJtaXRDaGFyYXRlckZlZWRiYWNrLFxyXG4gIGdldENoYXJhY3RlckNvbW1lbnRzLFxyXG4gIGRlbGV0ZUNoYXJhY3RlckNvbW1lbnQsXHJcbiAgcmF0ZUNvbW1lbnQsXHJcbn0pKENoYXJhY3Rlcik7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=