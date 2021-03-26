webpackHotUpdate_N_E("pages/character/new",{

/***/ "./pages/character/new.js":
/*!********************************!*\
  !*** ./pages/character/new.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _hooks_userHooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/userHooks */ "./hooks/userHooks.js");
/* harmony import */ var _redux_actions_charactersActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../redux/actions/charactersActions */ "./redux/actions/charactersActions.js");
/* harmony import */ var _components_hoc_LoadingScreen__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/hoc/LoadingScreen */ "./components/hoc/LoadingScreen.js");
/* harmony import */ var _components_hoc_RedirectComp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/hoc/RedirectComp */ "./components/hoc/RedirectComp.js");
/* harmony import */ var _components_forms_CharacterForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/forms/CharacterForm */ "./components/forms/CharacterForm.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\pages\\character\\new.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










var newCharacter = function newCharacter(props) {
  _s();

  var characters = props.characters,
      characterId = props.characterId,
      loadingCharacter = props.loadingCharacter;
  var auth = Object(_hooks_userHooks__WEBPACK_IMPORTED_MODULE_5__["useAuth"])();

  var _Form$useForm = antd__WEBPACK_IMPORTED_MODULE_3__["Form"].useForm(),
      _Form$useForm2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(true),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      visibility = _React$useState2[0],
      setVisibility = _React$useState2[1];

  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    if (auth.user) {
      props.getUserCharacters(auth.user.uid);
    }
  }, [auth]);
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    form.setFieldsValue({
      "public": visibility
    });
  }, [visibility]);
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    if (characterId) {
      router.push("/character/".concat(characterId));
    }
  }, [characterId]);

  var onFailed = function onFailed() {
    window.scrollTo(0, 0);
    antd__WEBPACK_IMPORTED_MODULE_3__["message"].error("There are some errors");
  };

  var submit = function submit(values) {
    // props.addCharacter({
    //   ...values,
    //   authorId: auth.user.uid,
    //   authorName: auth.user.username,
    //   authorImage: auth.user.image ? auth.user.image : "",
    // });
    console.log(values);
  };

  return __jsx(_components_hoc_LoadingScreen__WEBPACK_IMPORTED_MODULE_7__["default"], {
    loading: auth.isLoading,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 5
    }
  }, __jsx(_components_hoc_RedirectComp__WEBPACK_IMPORTED_MODULE_8__["default"], {
    condition: auth.user,
    type: "redirect",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "new-character custom-form",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }, __jsx("h2", {
    className: "side-heading",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }, "Add a new character"), __jsx(_components_forms_CharacterForm__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
      gender: "",
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
      lineNumber: 61,
      columnNumber: 13
    }
  })))));
};

_s(newCharacter, "BmEDB6/Oq88cPR3EHWBrfisvGxw=", false, function () {
  return [_hooks_userHooks__WEBPACK_IMPORTED_MODULE_5__["useAuth"], antd__WEBPACK_IMPORTED_MODULE_3__["Form"].useForm, next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});

var mapStateToProps = function mapStateToProps(state) {
  return {
    characters: state.characters.userCharacters,
    loadingCharacter: state.characters.loadingCharacter,
    characterId: state.characters.characterId
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, {
  getUserCharacters: _redux_actions_charactersActions__WEBPACK_IMPORTED_MODULE_6__["getUserCharacters"],
  addCharacter: _redux_actions_charactersActions__WEBPACK_IMPORTED_MODULE_6__["addCharacter"]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhcmFjdGVyL25ldy5qcyJdLCJuYW1lcyI6WyJuZXdDaGFyYWN0ZXIiLCJwcm9wcyIsImNoYXJhY3RlcnMiLCJjaGFyYWN0ZXJJZCIsImxvYWRpbmdDaGFyYWN0ZXIiLCJhdXRoIiwidXNlQXV0aCIsIkZvcm0iLCJ1c2VGb3JtIiwiZm9ybSIsInJvdXRlciIsInVzZVJvdXRlciIsIlJlYWN0IiwidXNlU3RhdGUiLCJ2aXNpYmlsaXR5Iiwic2V0VmlzaWJpbGl0eSIsInVzZUVmZmVjdCIsInVzZXIiLCJnZXRVc2VyQ2hhcmFjdGVycyIsInVpZCIsInNldEZpZWxkc1ZhbHVlIiwicHVzaCIsIm9uRmFpbGVkIiwid2luZG93Iiwic2Nyb2xsVG8iLCJtZXNzYWdlIiwiZXJyb3IiLCJzdWJtaXQiLCJ2YWx1ZXMiLCJjb25zb2xlIiwibG9nIiwiaXNMb2FkaW5nIiwiZmlyc3RuYW1lIiwibGFzdG5hbWUiLCJhZ2UiLCJnZW5kZXIiLCJldGhuaWNpdHkiLCJncm91cCIsInJlc2lkZW5jZSIsImRlc2NyaXB0aW9uIiwibmlja25hbWUiLCJvY2N1cGF0aW9uIiwicmVsYXRpdmVzIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJ1c2VyQ2hhcmFjdGVycyIsImNvbm5lY3QiLCJhZGRDaGFyYWN0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxNQUN0QkMsVUFEc0IsR0FDd0JELEtBRHhCLENBQ3RCQyxVQURzQjtBQUFBLE1BQ1ZDLFdBRFUsR0FDd0JGLEtBRHhCLENBQ1ZFLFdBRFU7QUFBQSxNQUNHQyxnQkFESCxHQUN3QkgsS0FEeEIsQ0FDR0csZ0JBREg7QUFFOUIsTUFBTUMsSUFBSSxHQUFHQyxn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eUNBQUksQ0FBQ0MsTyxFQUNMRyxxRDs7O0FBd0VqQixJQUFNZ0MsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUNsQzFDLGNBQVUsRUFBRTBDLEtBQUssQ0FBQzFDLFVBQU4sQ0FBaUIyQyxjQURLO0FBRWxDekMsb0JBQWdCLEVBQUV3QyxLQUFLLENBQUMxQyxVQUFOLENBQWlCRSxnQkFGRDtBQUdsQ0QsZUFBVyxFQUFFeUMsS0FBSyxDQUFDMUMsVUFBTixDQUFpQkM7QUFISSxHQUFaO0FBQUEsQ0FBeEI7O0FBTWUyQywwSEFBTyxDQUFDSCxlQUFELEVBQWtCO0FBQUV6QixtQkFBaUIsRUFBakJBLGtGQUFGO0FBQXFCNkIsY0FBWSxFQUFaQSw2RUFBWUE7QUFBakMsQ0FBbEIsQ0FBUCxDQUNiL0MsWUFEYSxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NoYXJhY3Rlci9uZXcuMDRiOTdhNTdjMmZmYzVlNjU5YzIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IEZvcm0sIG1lc3NhZ2UgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcblxyXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSBcIi4uLy4uL2hvb2tzL3VzZXJIb29rc1wiO1xyXG5pbXBvcnQge1xyXG4gIGFkZENoYXJhY3RlcixcclxuICBnZXRVc2VyQ2hhcmFjdGVycyxcclxufSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9ucy9jaGFyYWN0ZXJzQWN0aW9uc1wiO1xyXG5cclxuaW1wb3J0IExvYWRpbmdTY3JlZW4gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvaG9jL0xvYWRpbmdTY3JlZW5cIjtcclxuaW1wb3J0IFJlZGlyZWN0Q29tcCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9ob2MvUmVkaXJlY3RDb21wXCI7XHJcbmltcG9ydCBDaGFyYWN0ZXJGb3JtIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2Zvcm1zL0NoYXJhY3RlckZvcm1cIjtcclxuXHJcbmNvbnN0IG5ld0NoYXJhY3RlciA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgY2hhcmFjdGVycywgY2hhcmFjdGVySWQsIGxvYWRpbmdDaGFyYWN0ZXIgfSA9IHByb3BzO1xyXG4gIGNvbnN0IGF1dGggPSB1c2VBdXRoKCk7XHJcbiAgY29uc3QgW2Zvcm1dID0gRm9ybS51c2VGb3JtKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IFt2aXNpYmlsaXR5LCBzZXRWaXNpYmlsaXR5XSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGF1dGgudXNlcikge1xyXG4gICAgICBwcm9wcy5nZXRVc2VyQ2hhcmFjdGVycyhhdXRoLnVzZXIudWlkKTtcclxuICAgIH1cclxuICB9LCBbYXV0aF0pO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZm9ybS5zZXRGaWVsZHNWYWx1ZSh7IHB1YmxpYzogdmlzaWJpbGl0eSB9KTtcclxuICB9LCBbdmlzaWJpbGl0eV0pO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGNoYXJhY3RlcklkKSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKGAvY2hhcmFjdGVyLyR7Y2hhcmFjdGVySWR9YCk7XHJcbiAgICB9XHJcbiAgfSwgW2NoYXJhY3RlcklkXSk7XHJcblxyXG4gIGNvbnN0IG9uRmFpbGVkID0gKCkgPT4ge1xyXG4gICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG4gICAgbWVzc2FnZS5lcnJvcihcIlRoZXJlIGFyZSBzb21lIGVycm9yc1wiKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzdWJtaXQgPSAodmFsdWVzKSA9PiB7XHJcbiAgICAvLyBwcm9wcy5hZGRDaGFyYWN0ZXIoe1xyXG4gICAgLy8gICAuLi52YWx1ZXMsXHJcbiAgICAvLyAgIGF1dGhvcklkOiBhdXRoLnVzZXIudWlkLFxyXG4gICAgLy8gICBhdXRob3JOYW1lOiBhdXRoLnVzZXIudXNlcm5hbWUsXHJcbiAgICAvLyAgIGF1dGhvckltYWdlOiBhdXRoLnVzZXIuaW1hZ2UgPyBhdXRoLnVzZXIuaW1hZ2UgOiBcIlwiLFxyXG4gICAgLy8gfSk7XHJcbiAgICBjb25zb2xlLmxvZyh2YWx1ZXMpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TG9hZGluZ1NjcmVlbiBsb2FkaW5nPXthdXRoLmlzTG9hZGluZ30+XHJcbiAgICAgIDxSZWRpcmVjdENvbXAgY29uZGl0aW9uPXthdXRoLnVzZXJ9IHR5cGU9XCJyZWRpcmVjdFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3LWNoYXJhY3RlciBjdXN0b20tZm9ybVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lclwiPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwic2lkZS1oZWFkaW5nXCI+QWRkIGEgbmV3IGNoYXJhY3RlcjwvaDI+XHJcbiAgICAgICAgICAgIDxDaGFyYWN0ZXJGb3JtXHJcbiAgICAgICAgICAgICAgc3VibWl0PXtzdWJtaXR9XHJcbiAgICAgICAgICAgICAgb25GYWlsZWQ9e29uRmFpbGVkfVxyXG4gICAgICAgICAgICAgIGZvcm09e2Zvcm19XHJcbiAgICAgICAgICAgICAgY2hhcmFjdGVycz17Y2hhcmFjdGVyc31cclxuICAgICAgICAgICAgICB2aXNpYmlsaXR5PXt2aXNpYmlsaXR5fVxyXG4gICAgICAgICAgICAgIHNldFZpc2liaWxpdHk9e3NldFZpc2liaWxpdHl9XHJcbiAgICAgICAgICAgICAgbG9hZGluZ0NoYXJhY3Rlcj17bG9hZGluZ0NoYXJhY3Rlcn1cclxuICAgICAgICAgICAgICB0eXBlPVwiYWRkXCJcclxuICAgICAgICAgICAgICBpbml0aWFsVmFsdWVzPXt7XHJcbiAgICAgICAgICAgICAgICBmaXJzdG5hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBsYXN0bmFtZTogXCJcIixcclxuICAgICAgICAgICAgICAgIGFnZTogMCxcclxuICAgICAgICAgICAgICAgIGdlbmRlcjogXCJcIixcclxuICAgICAgICAgICAgICAgIHB1YmxpYzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGV0aG5pY2l0eTogXCJcIixcclxuICAgICAgICAgICAgICAgIGdyb3VwOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgcmVzaWRlbmNlOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBuaWNrbmFtZTogXCJcIixcclxuICAgICAgICAgICAgICAgIG9jY3VwYXRpb246IFwiXCIsXHJcbiAgICAgICAgICAgICAgICByZWxhdGl2ZXM6IFtdLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9SZWRpcmVjdENvbXA+XHJcbiAgICA8L0xvYWRpbmdTY3JlZW4+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcclxuICBjaGFyYWN0ZXJzOiBzdGF0ZS5jaGFyYWN0ZXJzLnVzZXJDaGFyYWN0ZXJzLFxyXG4gIGxvYWRpbmdDaGFyYWN0ZXI6IHN0YXRlLmNoYXJhY3RlcnMubG9hZGluZ0NoYXJhY3RlcixcclxuICBjaGFyYWN0ZXJJZDogc3RhdGUuY2hhcmFjdGVycy5jaGFyYWN0ZXJJZCxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgeyBnZXRVc2VyQ2hhcmFjdGVycywgYWRkQ2hhcmFjdGVyIH0pKFxyXG4gIG5ld0NoYXJhY3RlclxyXG4pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9