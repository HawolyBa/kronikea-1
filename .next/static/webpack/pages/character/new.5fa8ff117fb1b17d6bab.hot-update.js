webpackHotUpdate_N_E("pages/character/new",{

/***/ "./pages/character/new.js":
/*!********************************!*\
  !*** ./pages/character/new.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _hooks_userHooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/userHooks */ "./hooks/userHooks.js");
/* harmony import */ var _redux_actions_charactersActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../redux/actions/charactersActions */ "./redux/actions/charactersActions.js");
/* harmony import */ var _components_hoc_LoadingScreen__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/hoc/LoadingScreen */ "./components/hoc/LoadingScreen.js");
/* harmony import */ var _components_hoc_RedirectComp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/hoc/RedirectComp */ "./components/hoc/RedirectComp.js");
/* harmony import */ var _components_forms_CharacterForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/forms/CharacterForm */ "./components/forms/CharacterForm.js");



var _this = undefined,
    _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\pages\\character\\new.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











var newCharacter = function newCharacter(props) {
  _s();

  var characters = props.characters,
      characterId = props.characterId,
      loadingCharacter = props.loadingCharacter;
  var auth = Object(_hooks_userHooks__WEBPACK_IMPORTED_MODULE_6__["useAuth"])();

  var _Form$useForm = antd__WEBPACK_IMPORTED_MODULE_4__["Form"].useForm(),
      _Form$useForm2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(true),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      visibility = _React$useState2[0],
      setVisibility = _React$useState2[1];

  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    if (auth.user) {
      props.getUserCharacters(auth.user.uid);
    }
  }, [auth]);
  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    form.setFieldsValue({
      "public": visibility
    });
  }, [visibility]);
  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    if (characterId) {
      router.push("/character/".concat(characterId));
    }
  }, [characterId]);

  var onFailed = function onFailed() {
    window.scrollTo(0, 0);
    antd__WEBPACK_IMPORTED_MODULE_4__["message"].error("There are some errors");
  };

  var submit = function submit(values) {
    props.addCharacter(_objectSpread(_objectSpread({}, values), {}, {
      authorId: auth.user.uid,
      authorName: auth.user.username
    }));
  };

  return __jsx(_components_hoc_LoadingScreen__WEBPACK_IMPORTED_MODULE_8__["default"], {
    loading: auth.isLoading,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 5
    }
  }, __jsx(_components_hoc_RedirectComp__WEBPACK_IMPORTED_MODULE_9__["default"], {
    condition: auth.user,
    type: "redirect",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "new-character custom-form",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }, __jsx("h2", {
    className: "side-heading",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, "Add a new character"), __jsx(_components_forms_CharacterForm__WEBPACK_IMPORTED_MODULE_10__["default"], {
    submit: submit,
    onFailed: onFailed,
    form: form,
    characters: characters,
    visibility: visibility,
    setVisibility: setVisibility,
    loadingCharacter: loadingCharacter,
    type: "add",
    initialValues: {
      firstname: "",
      lastname: "",
      age: 0,
      "public": true,
      ethnicity: "",
      group: "",
      residence: "",
      description: "",
      nickname: "",
      occupation: "",
      relatives: []
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  })))));
};

_s(newCharacter, "BmEDB6/Oq88cPR3EHWBrfisvGxw=", false, function () {
  return [_hooks_userHooks__WEBPACK_IMPORTED_MODULE_6__["useAuth"], antd__WEBPACK_IMPORTED_MODULE_4__["Form"].useForm, next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

var mapStateToProps = function mapStateToProps(state) {
  return {
    characters: state.characters.userCharacters,
    loadingCharacter: state.characters.loadingCharacter,
    characterId: state.characters.characterId
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps, {
  getUserCharacters: _redux_actions_charactersActions__WEBPACK_IMPORTED_MODULE_7__["getUserCharacters"],
  addCharacter: _redux_actions_charactersActions__WEBPACK_IMPORTED_MODULE_7__["addCharacter"]
})(newCharacter));

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhcmFjdGVyL25ldy5qcyJdLCJuYW1lcyI6WyJuZXdDaGFyYWN0ZXIiLCJwcm9wcyIsImNoYXJhY3RlcnMiLCJjaGFyYWN0ZXJJZCIsImxvYWRpbmdDaGFyYWN0ZXIiLCJhdXRoIiwidXNlQXV0aCIsIkZvcm0iLCJ1c2VGb3JtIiwiZm9ybSIsInJvdXRlciIsInVzZVJvdXRlciIsIlJlYWN0IiwidXNlU3RhdGUiLCJ2aXNpYmlsaXR5Iiwic2V0VmlzaWJpbGl0eSIsInVzZUVmZmVjdCIsInVzZXIiLCJnZXRVc2VyQ2hhcmFjdGVycyIsInVpZCIsInNldEZpZWxkc1ZhbHVlIiwicHVzaCIsIm9uRmFpbGVkIiwid2luZG93Iiwic2Nyb2xsVG8iLCJtZXNzYWdlIiwiZXJyb3IiLCJzdWJtaXQiLCJ2YWx1ZXMiLCJhZGRDaGFyYWN0ZXIiLCJhdXRob3JJZCIsImF1dGhvck5hbWUiLCJ1c2VybmFtZSIsImlzTG9hZGluZyIsImZpcnN0bmFtZSIsImxhc3RuYW1lIiwiYWdlIiwiZXRobmljaXR5IiwiZ3JvdXAiLCJyZXNpZGVuY2UiLCJkZXNjcmlwdGlvbiIsIm5pY2tuYW1lIiwib2NjdXBhdGlvbiIsInJlbGF0aXZlcyIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwidXNlckNoYXJhY3RlcnMiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBS0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLE1BQ3RCQyxVQURzQixHQUN3QkQsS0FEeEIsQ0FDdEJDLFVBRHNCO0FBQUEsTUFDVkMsV0FEVSxHQUN3QkYsS0FEeEIsQ0FDVkUsV0FEVTtBQUFBLE1BQ0dDLGdCQURILEdBQ3dCSCxLQUR4QixDQUNHRyxnQkFESDtBQUU5QixN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SUFGRixDQURGLENBREYsQ0FERixDQURGO0FBa0NELENBdkVEOztHQUFNM0MsWTtVQUVTTSx3RCxFQUNFQyx5Q0FBSSxDQUFDQyxPLEVBQ0xHLHFEOzs7QUFxRWpCLElBQU1pQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ2xDM0MsY0FBVSxFQUFFMkMsS0FBSyxDQUFDM0MsVUFBTixDQUFpQjRDLGNBREs7QUFFbEMxQyxvQkFBZ0IsRUFBRXlDLEtBQUssQ0FBQzNDLFVBQU4sQ0FBaUJFLGdCQUZEO0FBR2xDRCxlQUFXLEVBQUUwQyxLQUFLLENBQUMzQyxVQUFOLENBQWlCQztBQUhJLEdBQVo7QUFBQSxDQUF4Qjs7QUFNZTRDLDBIQUFPLENBQUNILGVBQUQsRUFBa0I7QUFBRTFCLG1CQUFpQixFQUFqQkEsa0ZBQUY7QUFBcUJXLGNBQVksRUFBWkEsNkVBQVlBO0FBQWpDLENBQWxCLENBQVAsQ0FDYjdCLFlBRGEsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jaGFyYWN0ZXIvbmV3LjVmYThmZjExN2ZiMWIxN2Q2YmFiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBGb3JtLCBtZXNzYWdlIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gXCIuLi8uLi9ob29rcy91c2VySG9va3NcIjtcclxuaW1wb3J0IHtcclxuICBhZGRDaGFyYWN0ZXIsXHJcbiAgZ2V0VXNlckNoYXJhY3RlcnMsXHJcbn0gZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvbnMvY2hhcmFjdGVyc0FjdGlvbnNcIjtcclxuXHJcbmltcG9ydCBMb2FkaW5nU2NyZWVuIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2hvYy9Mb2FkaW5nU2NyZWVuXCI7XHJcbmltcG9ydCBSZWRpcmVjdENvbXAgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvaG9jL1JlZGlyZWN0Q29tcFwiO1xyXG5pbXBvcnQgQ2hhcmFjdGVyRm9ybSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9mb3Jtcy9DaGFyYWN0ZXJGb3JtXCI7XHJcblxyXG5jb25zdCBuZXdDaGFyYWN0ZXIgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGNoYXJhY3RlcnMsIGNoYXJhY3RlcklkLCBsb2FkaW5nQ2hhcmFjdGVyIH0gPSBwcm9wcztcclxuICBjb25zdCBhdXRoID0gdXNlQXV0aCgpO1xyXG4gIGNvbnN0IFtmb3JtXSA9IEZvcm0udXNlRm9ybSgpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBbdmlzaWJpbGl0eSwgc2V0VmlzaWJpbGl0eV0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChhdXRoLnVzZXIpIHtcclxuICAgICAgcHJvcHMuZ2V0VXNlckNoYXJhY3RlcnMoYXV0aC51c2VyLnVpZCk7XHJcbiAgICB9XHJcbiAgfSwgW2F1dGhdKTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZvcm0uc2V0RmllbGRzVmFsdWUoeyBwdWJsaWM6IHZpc2liaWxpdHkgfSk7XHJcbiAgfSwgW3Zpc2liaWxpdHldKTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChjaGFyYWN0ZXJJZCkge1xyXG4gICAgICByb3V0ZXIucHVzaChgL2NoYXJhY3Rlci8ke2NoYXJhY3RlcklkfWApO1xyXG4gICAgfVxyXG4gIH0sIFtjaGFyYWN0ZXJJZF0pO1xyXG5cclxuICBjb25zdCBvbkZhaWxlZCA9ICgpID0+IHtcclxuICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxuICAgIG1lc3NhZ2UuZXJyb3IoXCJUaGVyZSBhcmUgc29tZSBlcnJvcnNcIik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc3VibWl0ID0gKHZhbHVlcykgPT4ge1xyXG4gICAgcHJvcHMuYWRkQ2hhcmFjdGVyKHtcclxuICAgICAgLi4udmFsdWVzLFxyXG4gICAgICBhdXRob3JJZDogYXV0aC51c2VyLnVpZCxcclxuICAgICAgYXV0aG9yTmFtZTogYXV0aC51c2VyLnVzZXJuYW1lLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMb2FkaW5nU2NyZWVuIGxvYWRpbmc9e2F1dGguaXNMb2FkaW5nfT5cclxuICAgICAgPFJlZGlyZWN0Q29tcCBjb25kaXRpb249e2F1dGgudXNlcn0gdHlwZT1cInJlZGlyZWN0XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXctY2hhcmFjdGVyIGN1c3RvbS1mb3JtXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyXCI+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJzaWRlLWhlYWRpbmdcIj5BZGQgYSBuZXcgY2hhcmFjdGVyPC9oMj5cclxuICAgICAgICAgICAgPENoYXJhY3RlckZvcm1cclxuICAgICAgICAgICAgICBzdWJtaXQ9e3N1Ym1pdH1cclxuICAgICAgICAgICAgICBvbkZhaWxlZD17b25GYWlsZWR9XHJcbiAgICAgICAgICAgICAgZm9ybT17Zm9ybX1cclxuICAgICAgICAgICAgICBjaGFyYWN0ZXJzPXtjaGFyYWN0ZXJzfVxyXG4gICAgICAgICAgICAgIHZpc2liaWxpdHk9e3Zpc2liaWxpdHl9XHJcbiAgICAgICAgICAgICAgc2V0VmlzaWJpbGl0eT17c2V0VmlzaWJpbGl0eX1cclxuICAgICAgICAgICAgICBsb2FkaW5nQ2hhcmFjdGVyPXtsb2FkaW5nQ2hhcmFjdGVyfVxyXG4gICAgICAgICAgICAgIHR5cGU9XCJhZGRcIlxyXG4gICAgICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e3tcclxuICAgICAgICAgICAgICAgIGZpcnN0bmFtZTogXCJcIixcclxuICAgICAgICAgICAgICAgIGxhc3RuYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgYWdlOiAwLFxyXG4gICAgICAgICAgICAgICAgcHVibGljOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZXRobmljaXR5OiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgZ3JvdXA6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICByZXNpZGVuY2U6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJcIixcclxuICAgICAgICAgICAgICAgIG5pY2tuYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgb2NjdXBhdGlvbjogXCJcIixcclxuICAgICAgICAgICAgICAgIHJlbGF0aXZlczogW10sXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L1JlZGlyZWN0Q29tcD5cclxuICAgIDwvTG9hZGluZ1NjcmVlbj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG4gIGNoYXJhY3RlcnM6IHN0YXRlLmNoYXJhY3RlcnMudXNlckNoYXJhY3RlcnMsXHJcbiAgbG9hZGluZ0NoYXJhY3Rlcjogc3RhdGUuY2hhcmFjdGVycy5sb2FkaW5nQ2hhcmFjdGVyLFxyXG4gIGNoYXJhY3RlcklkOiBzdGF0ZS5jaGFyYWN0ZXJzLmNoYXJhY3RlcklkLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7IGdldFVzZXJDaGFyYWN0ZXJzLCBhZGRDaGFyYWN0ZXIgfSkoXHJcbiAgbmV3Q2hhcmFjdGVyXHJcbik7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=