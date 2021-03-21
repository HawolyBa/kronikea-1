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
/* harmony import */ var _components_chapter_Comments__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/chapter/Comments */ "./components/chapter/Comments.js");
/* harmony import */ var _components_common_CharacterCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/common/CharacterCard */ "./components/common/CharacterCard.js");
/* harmony import */ var _components_hoc_LoadingScreen__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/hoc/LoadingScreen */ "./components/hoc/LoadingScreen.js");
/* harmony import */ var _components_hoc_RedirectComp__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/hoc/RedirectComp */ "./components/hoc/RedirectComp.js");
/* harmony import */ var _hooks_userHooks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../hooks/userHooks */ "./hooks/userHooks.js");
/* harmony import */ var _components_hoc_withLink__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../components/hoc/withLink */ "./components/hoc/withLink.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\pages\\character\\[id]\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;














var Character = function Character(props) {
  _s();

  var character = props.character,
      loading = props.loading,
      charaExists = props.charaExists,
      userCharacters = props.userCharacters;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  var auth = Object(_hooks_userHooks__WEBPACK_IMPORTED_MODULE_12__["useAuth"])();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState([]),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      relatives = _React$useState2[0],
      setRelatives = _React$useState2[1];

  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    props.getCharacter(router.query.id);
  }, [router.query.id]);
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    if (character.authorId && character["public"]) {
      props.getUserCharacters(character.authorId);
    }
  }, [character]);
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    if (userCharacters.length > 0 && character.relatives.length > 0) {
      setRelatives(character.relatives.map(function (c) {
        return {
          firstname: userCharacters.find(function (_char) {
            return _char.id === c.character_id;
          }).firstname,
          lastname: userCharacters.find(function (_char2) {
            return _char2.id === c.character_id;
          }).lastname,
          image: userCharacters.find(function (_char3) {
            return _char3.id === c.character_id;
          }).image,
          id: userCharacters.find(function (_char4) {
            return _char4.id === c.character_id;
          }).id,
          relation: c.relation,
          "public": userCharacters.find(function (_char5) {
            return _char5.id === c.character_id;
          })["public"]
        };
      }).filter(function (c) {
        return auth.user.uid !== character.authorId ? c["public"] : c;
      }));
    }
  }, [userCharacters]);
  return __jsx(_components_hoc_LoadingScreen__WEBPACK_IMPORTED_MODULE_10__["default"], {
    loading: loading,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 5
    }
  }, __jsx(_components_hoc_RedirectComp__WEBPACK_IMPORTED_MODULE_11__["default"], {
    type: "404",
    condition: charaExists,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }, __jsx(_components_hoc_RedirectComp__WEBPACK_IMPORTED_MODULE_11__["default"], {
    type: "403",
    condition: character["public"] || character.authorId === auth.user.uid,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "main-character",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  }, __jsx("section", {
    className: "character-page",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "character-meta",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/profile/1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 17
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 19
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Space"], {
    align: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "avatar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 23
    }
  }, __jsx("img", {
    src: _utils_dummy__WEBPACK_IMPORTED_MODULE_6__["dummy"].person,
    alt: character.authorName,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 25
    }
  })), __jsx("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 23
    }
  }, character.authorName)))), __jsx("div", {
    className: "like-btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Space"], {
    size: 5,
    align: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 19
    }
  }, __jsx("ion-icon", {
    name: "heart",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 21
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 21
    }
  }, "Like")))), __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 15
    }
  }, "".concat(character.firstname, " ").concat(character.lastname && character.lastname)), __jsx("div", {
    className: "character-image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "img-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Image"], {
    src: character.image,
    width: "100%",
    height: 600,
    alt: "character",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 19
    }
  }))), __jsx("div", {
    className: "character-description",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 15
    }
  }, __jsx("h3", {
    className: "desc-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 17
    }
  }, "Biography"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 17
    }
  }, character.description)), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Divider"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 15
    }
  }), __jsx("div", {
    className: "character-relationships",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 15
    }
  }, __jsx("h3", {
    className: "desc-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 17
    }
  }, "Relationships"), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    gutter: [16, 16],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 17
    }
  }, relatives === null || relatives === void 0 ? void 0 : relatives.map(function (r) {
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Col"], {
      md: 8,
      lg: 6,
      key: r.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 21
      }
    }, __jsx(_components_hoc_withLink__WEBPACK_IMPORTED_MODULE_13__["default"], {
      link: "/character/".concat(r.id),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 23
      }
    }, __jsx(_components_common_CharacterCard__WEBPACK_IMPORTED_MODULE_9__["default"], {
      type: "show",
      character: r,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 25
      }
    })));
  })))), __jsx("section", {
    className: "character-feedback",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 13
    }
  }, __jsx("h3", {
    className: "side-heading",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 15
    }
  }, "Feedback"), __jsx(_components_chapter_Comments__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 15
    }
  }))))));
};

_s(Character, "xnderpM3k//xUMtZYYnqmuyk8ec=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"], _hooks_userHooks__WEBPACK_IMPORTED_MODULE_12__["useAuth"]];
});

_c = Character;

var mapStateToProps = function mapStateToProps(state) {
  return {
    character: state.characters.character,
    loading: state.characters.loading,
    charaExists: state.characters.charaExists,
    userCharacters: state.characters.userCharacters
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, {
  getCharacter: _redux_actions_charactersActions__WEBPACK_IMPORTED_MODULE_7__["getCharacter"],
  getUserCharacters: _redux_actions_charactersActions__WEBPACK_IMPORTED_MODULE_7__["getUserCharacters"]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhcmFjdGVyLy9pbmRleC5qcyJdLCJuYW1lcyI6WyJDaGFyYWN0ZXIiLCJwcm9wcyIsImNoYXJhY3RlciIsImxvYWRpbmciLCJjaGFyYUV4aXN0cyIsInVzZXJDaGFyYWN0ZXJzIiwicm91dGVyIiwidXNlUm91dGVyIiwiYXV0aCIsInVzZUF1dGgiLCJSZWFjdCIsInVzZVN0YXRlIiwicmVsYXRpdmVzIiwic2V0UmVsYXRpdmVzIiwidXNlRWZmZWN0IiwiZ2V0Q2hhcmFjdGVyIiwicXVlcnkiLCJpZCIsImF1dGhvcklkIiwiZ2V0VXNlckNoYXJhY3RlcnMiLCJsZW5ndGgiLCJtYXAiLCJjIiwiZmlyc3RuYW1lIiwiZmluZCIsImNoYXIiLCJjaGFyYWN0ZXJfaWQiLCJsYXN0bmFtZSIsImltYWdlIiwicmVsYXRpb24iLCJmaWx0ZXIiLCJ1c2VyIiwidWlkIiwiZHVtbXkiLCJwZXJzb24iLCJhdXRob3JOYW1lIiwiZGVzY3JpcHRpb24iLCJyIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJjaGFyYWN0ZXJzIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxNQUNuQkMsU0FEbUIsR0FDaUNELEtBRGpDLENBQ25CQyxTQURtQjtBQUFBLE1BQ1JDLE9BRFEsR0FDaUNGLEtBRGpDLENBQ1JFLE9BRFE7QUFBQSxNQUNDQyxXQURELEdBQ2lDSCxLQURqQyxDQUNDRyxXQUREO0FBQUEsTUFDY0MsY0FEZCxHQUNpQ0osS0FEakMsQ0FDY0ksY0FEZDtBQUUzQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsSUFBSSxH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QyxrQkFBYyxFQUFFa0MsS0FBSyxDQUFDQyxVQUFOLENBQWlCbkM7QUFKQyxHQUFaO0FBQUEsQ0FBeEI7O0FBT2VvQywwSEFBTyxDQUFDSCxlQUFELEVBQWtCO0FBQ3RDdkIsY0FBWSxFQUFaQSw2RUFEc0M7QUFFdENJLG1CQUFpQixFQUFqQkEsa0ZBQWlCQTtBQUZxQixDQUFsQixDQUFQLENBR1puQixTQUhZLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2hhcmFjdGVyL1tpZF0uNTQ1NGUyYWFhODBlYWMwZDYyM2QuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBSb3csIENvbCwgSW1hZ2UsIERpdmlkZXIsIFNwYWNlIH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmltcG9ydCB7IGR1bW15IH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2R1bW15XCI7XHJcbmltcG9ydCB7XHJcbiAgZ2V0Q2hhcmFjdGVyLFxyXG4gIGdldFVzZXJDaGFyYWN0ZXJzLFxyXG59IGZyb20gXCIuLi8uLi8uLi9yZWR1eC9hY3Rpb25zL2NoYXJhY3RlcnNBY3Rpb25zXCI7XHJcbmltcG9ydCBDb21tZW50cyBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9jaGFwdGVyL0NvbW1lbnRzXCI7XHJcbmltcG9ydCBDaGFyYWN0ZXJDYXJkIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2NvbW1vbi9DaGFyYWN0ZXJDYXJkXCI7XHJcbmltcG9ydCBMb2FkaW5nU2NyZWVuIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2hvYy9Mb2FkaW5nU2NyZWVuXCI7XHJcbmltcG9ydCBSZWRpcmVjdENvbXAgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaG9jL1JlZGlyZWN0Q29tcFwiO1xyXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSBcIi4uLy4uLy4uL2hvb2tzL3VzZXJIb29rc1wiO1xyXG5pbXBvcnQgV2l0aExpbmsgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaG9jL3dpdGhMaW5rXCI7XHJcblxyXG5jb25zdCBDaGFyYWN0ZXIgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGNoYXJhY3RlciwgbG9hZGluZywgY2hhcmFFeGlzdHMsIHVzZXJDaGFyYWN0ZXJzIH0gPSBwcm9wcztcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBhdXRoID0gdXNlQXV0aCgpO1xyXG5cclxuICBjb25zdCBbcmVsYXRpdmVzLCBzZXRSZWxhdGl2ZXNdID0gUmVhY3QudXNlU3RhdGUoW10pO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgcHJvcHMuZ2V0Q2hhcmFjdGVyKHJvdXRlci5xdWVyeS5pZCk7XHJcbiAgfSwgW3JvdXRlci5xdWVyeS5pZF0pO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGNoYXJhY3Rlci5hdXRob3JJZCAmJiBjaGFyYWN0ZXIucHVibGljKSB7XHJcbiAgICAgIHByb3BzLmdldFVzZXJDaGFyYWN0ZXJzKGNoYXJhY3Rlci5hdXRob3JJZCk7XHJcbiAgICB9XHJcbiAgfSwgW2NoYXJhY3Rlcl0pO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHVzZXJDaGFyYWN0ZXJzLmxlbmd0aCA+IDAgJiYgY2hhcmFjdGVyLnJlbGF0aXZlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHNldFJlbGF0aXZlcyhcclxuICAgICAgICBjaGFyYWN0ZXIucmVsYXRpdmVzXHJcbiAgICAgICAgICAubWFwKChjKSA9PiAoe1xyXG4gICAgICAgICAgICBmaXJzdG5hbWU6IHVzZXJDaGFyYWN0ZXJzLmZpbmQoKGNoYXIpID0+IGNoYXIuaWQgPT09IGMuY2hhcmFjdGVyX2lkKVxyXG4gICAgICAgICAgICAgIC5maXJzdG5hbWUsXHJcbiAgICAgICAgICAgIGxhc3RuYW1lOiB1c2VyQ2hhcmFjdGVycy5maW5kKChjaGFyKSA9PiBjaGFyLmlkID09PSBjLmNoYXJhY3Rlcl9pZClcclxuICAgICAgICAgICAgICAubGFzdG5hbWUsXHJcbiAgICAgICAgICAgIGltYWdlOiB1c2VyQ2hhcmFjdGVycy5maW5kKChjaGFyKSA9PiBjaGFyLmlkID09PSBjLmNoYXJhY3Rlcl9pZClcclxuICAgICAgICAgICAgICAuaW1hZ2UsXHJcbiAgICAgICAgICAgIGlkOiB1c2VyQ2hhcmFjdGVycy5maW5kKChjaGFyKSA9PiBjaGFyLmlkID09PSBjLmNoYXJhY3Rlcl9pZCkuaWQsXHJcbiAgICAgICAgICAgIHJlbGF0aW9uOiBjLnJlbGF0aW9uLFxyXG4gICAgICAgICAgICBwdWJsaWM6IHVzZXJDaGFyYWN0ZXJzLmZpbmQoKGNoYXIpID0+IGNoYXIuaWQgPT09IGMuY2hhcmFjdGVyX2lkKVxyXG4gICAgICAgICAgICAgIC5wdWJsaWMsXHJcbiAgICAgICAgICB9KSlcclxuICAgICAgICAgIC5maWx0ZXIoKGMpID0+IChhdXRoLnVzZXIudWlkICE9PSBjaGFyYWN0ZXIuYXV0aG9ySWQgPyBjLnB1YmxpYyA6IGMpKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH0sIFt1c2VyQ2hhcmFjdGVyc10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExvYWRpbmdTY3JlZW4gbG9hZGluZz17bG9hZGluZ30+XHJcbiAgICAgIDxSZWRpcmVjdENvbXAgdHlwZT1cIjQwNFwiIGNvbmRpdGlvbj17Y2hhcmFFeGlzdHN9PlxyXG4gICAgICAgIDxSZWRpcmVjdENvbXBcclxuICAgICAgICAgIHR5cGU9XCI0MDNcIlxyXG4gICAgICAgICAgY29uZGl0aW9uPXtjaGFyYWN0ZXIucHVibGljIHx8IGNoYXJhY3Rlci5hdXRob3JJZCA9PT0gYXV0aC51c2VyLnVpZH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tY2hhcmFjdGVyXCI+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNoYXJhY3Rlci1wYWdlXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFyYWN0ZXItbWV0YVwiPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9maWxlLzFcIj5cclxuICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNwYWNlIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF2YXRhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZHVtbXkucGVyc29ufSBhbHQ9e2NoYXJhY3Rlci5hdXRob3JOYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDU+e2NoYXJhY3Rlci5hdXRob3JOYW1lfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TcGFjZT5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaWtlLWJ0blwiPlxyXG4gICAgICAgICAgICAgICAgICA8U3BhY2Ugc2l6ZT17NX0gYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW9uLWljb24gbmFtZT1cImhlYXJ0XCI+PC9pb24taWNvbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5MaWtlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L1NwYWNlPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGgyPntgJHtjaGFyYWN0ZXIuZmlyc3RuYW1lfSAke1xyXG4gICAgICAgICAgICAgICAgY2hhcmFjdGVyLmxhc3RuYW1lICYmIGNoYXJhY3Rlci5sYXN0bmFtZVxyXG4gICAgICAgICAgICAgIH1gfTwvaDI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFyYWN0ZXItaW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICBzcmM9e2NoYXJhY3Rlci5pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17XCIxMDAlXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs2MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiY2hhcmFjdGVyXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcmFjdGVyLWRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZGVzYy10aXRsZVwiPkJpb2dyYXBoeTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8cD57Y2hhcmFjdGVyLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcmFjdGVyLXJlbGF0aW9uc2hpcHNcIj5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJkZXNjLXRpdGxlXCI+UmVsYXRpb25zaGlwczwvaDM+XHJcbiAgICAgICAgICAgICAgICA8Um93IGd1dHRlcj17WzE2LCAxNl19PlxyXG4gICAgICAgICAgICAgICAgICB7cmVsYXRpdmVzPy5tYXAoKHIpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8Q29sIG1kPXs4fSBsZz17Nn0ga2V5PXtyLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxXaXRoTGluayBsaW5rPXtgL2NoYXJhY3Rlci8ke3IuaWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGFyYWN0ZXJDYXJkIHR5cGU9XCJzaG93XCIgY2hhcmFjdGVyPXtyfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9XaXRoTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjaGFyYWN0ZXItZmVlZGJhY2tcIj5cclxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwic2lkZS1oZWFkaW5nXCI+RmVlZGJhY2s8L2gzPlxyXG4gICAgICAgICAgICAgIDxDb21tZW50cyAvPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1JlZGlyZWN0Q29tcD5cclxuICAgICAgPC9SZWRpcmVjdENvbXA+XHJcbiAgICA8L0xvYWRpbmdTY3JlZW4+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcclxuICBjaGFyYWN0ZXI6IHN0YXRlLmNoYXJhY3RlcnMuY2hhcmFjdGVyLFxyXG4gIGxvYWRpbmc6IHN0YXRlLmNoYXJhY3RlcnMubG9hZGluZyxcclxuICBjaGFyYUV4aXN0czogc3RhdGUuY2hhcmFjdGVycy5jaGFyYUV4aXN0cyxcclxuICB1c2VyQ2hhcmFjdGVyczogc3RhdGUuY2hhcmFjdGVycy51c2VyQ2hhcmFjdGVycyxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywge1xyXG4gIGdldENoYXJhY3RlcixcclxuICBnZXRVc2VyQ2hhcmFjdGVycyxcclxufSkoQ2hhcmFjdGVyKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==