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
    if (typeof values.image === null) values.image = "";
    if (!values.image) delete values.imageCopyright; // props.addCharacter({
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
      lineNumber: 58,
      columnNumber: 5
    }
  }, __jsx(_components_hoc_RedirectComp__WEBPACK_IMPORTED_MODULE_8__["default"], {
    condition: auth.user,
    type: "redirect",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "new-character custom-form",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  }, __jsx("h2", {
    className: "side-heading",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
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
      lineNumber: 63,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhcmFjdGVyL25ldy5qcyJdLCJuYW1lcyI6WyJuZXdDaGFyYWN0ZXIiLCJwcm9wcyIsImNoYXJhY3RlcnMiLCJjaGFyYWN0ZXJJZCIsImxvYWRpbmdDaGFyYWN0ZXIiLCJhdXRoIiwidXNlQXV0aCIsIkZvcm0iLCJ1c2VGb3JtIiwiZm9ybSIsInJvdXRlciIsInVzZVJvdXRlciIsIlJlYWN0IiwidXNlU3RhdGUiLCJ2aXNpYmlsaXR5Iiwic2V0VmlzaWJpbGl0eSIsInVzZUVmZmVjdCIsInVzZXIiLCJnZXRVc2VyQ2hhcmFjdGVycyIsInVpZCIsInNldEZpZWxkc1ZhbHVlIiwicHVzaCIsIm9uRmFpbGVkIiwid2luZG93Iiwic2Nyb2xsVG8iLCJtZXNzYWdlIiwiZXJyb3IiLCJzdWJtaXQiLCJ2YWx1ZXMiLCJpbWFnZSIsImltYWdlQ29weXJpZ2h0IiwiY29uc29sZSIsImxvZyIsImlzTG9hZGluZyIsImZpcnN0bmFtZSIsImxhc3RuYW1lIiwiYWdlIiwiZ2VuZGVyIiwiZXRobmljaXR5IiwiZ3JvdXAiLCJyZXNpZGVuY2UiLCJkZXNjcmlwdGlvbiIsIm5pY2tuYW1lIiwib2NjdXBhdGlvbiIsInJlbGF0aXZlcyIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwidXNlckNoYXJhY3RlcnMiLCJjb25uZWN0IiwiYWRkQ2hhcmFjdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsTUFDdEJDLFVBRHNCLEdBQ3dCRCxLQUR4QixDQUN0QkMsVUFEc0I7QUFBQSxNQUNWQyxXQURVLEdBQ3dCRixLQUR4QixDQUNWRSxXQURVO0FBQUEsTUFDR0MsZ0JBREgsR0FDd0JILEtBRHhCLENBQ0dHLGdCQURI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VEE7QUFVYkMsY0FBUSxFQUFFLEVBVkc7QUFXYkMsZ0JBQVUsRUFBRSxFQVhDO0FBWWJDLGVBQVMsRUFBRTtBQVpFLEtBVGpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGLENBREYsQ0FERixDQURGO0FBbUNELENBNUVEOztHQUFNNUMsWTtVQUVTTSx3RCxFQUNFQyx5Q0FBSSxDQUFDQyxPLEVBQ0xHLHFEOzs7QUEwRWpCLElBQU1rQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ2xDNUMsY0FBVSxFQUFFNEMsS0FBSyxDQUFDNUMsVUFBTixDQUFpQjZDLGNBREs7QUFFbEMzQyxvQkFBZ0IsRUFBRTBDLEtBQUssQ0FBQzVDLFVBQU4sQ0FBaUJFLGdCQUZEO0FBR2xDRCxlQUFXLEVBQUUyQyxLQUFLLENBQUM1QyxVQUFOLENBQWlCQztBQUhJLEdBQVo7QUFBQSxDQUF4Qjs7QUFNZTZDLDBIQUFPLENBQUNILGVBQUQsRUFBa0I7QUFBRTNCLG1CQUFpQixFQUFqQkEsa0ZBQUY7QUFBcUIrQixjQUFZLEVBQVpBLDZFQUFZQTtBQUFqQyxDQUFsQixDQUFQLENBQ2JqRCxZQURhLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2hhcmFjdGVyL25ldy5iYzdhNTYyZjFjYjNmZTY2YThkYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRm9ybSwgbWVzc2FnZSB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tIFwiLi4vLi4vaG9va3MvdXNlckhvb2tzXCI7XHJcbmltcG9ydCB7XHJcbiAgYWRkQ2hhcmFjdGVyLFxyXG4gIGdldFVzZXJDaGFyYWN0ZXJzLFxyXG59IGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25zL2NoYXJhY3RlcnNBY3Rpb25zXCI7XHJcblxyXG5pbXBvcnQgTG9hZGluZ1NjcmVlbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9ob2MvTG9hZGluZ1NjcmVlblwiO1xyXG5pbXBvcnQgUmVkaXJlY3RDb21wIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2hvYy9SZWRpcmVjdENvbXBcIjtcclxuaW1wb3J0IENoYXJhY3RlckZvcm0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZm9ybXMvQ2hhcmFjdGVyRm9ybVwiO1xyXG5cclxuY29uc3QgbmV3Q2hhcmFjdGVyID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBjaGFyYWN0ZXJzLCBjaGFyYWN0ZXJJZCwgbG9hZGluZ0NoYXJhY3RlciB9ID0gcHJvcHM7XHJcbiAgY29uc3QgYXV0aCA9IHVzZUF1dGgoKTtcclxuICBjb25zdCBbZm9ybV0gPSBGb3JtLnVzZUZvcm0oKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgW3Zpc2liaWxpdHksIHNldFZpc2liaWxpdHldID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoYXV0aC51c2VyKSB7XHJcbiAgICAgIHByb3BzLmdldFVzZXJDaGFyYWN0ZXJzKGF1dGgudXNlci51aWQpO1xyXG4gICAgfVxyXG4gIH0sIFthdXRoXSk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmb3JtLnNldEZpZWxkc1ZhbHVlKHsgcHVibGljOiB2aXNpYmlsaXR5IH0pO1xyXG4gIH0sIFt2aXNpYmlsaXR5XSk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoY2hhcmFjdGVySWQpIHtcclxuICAgICAgcm91dGVyLnB1c2goYC9jaGFyYWN0ZXIvJHtjaGFyYWN0ZXJJZH1gKTtcclxuICAgIH1cclxuICB9LCBbY2hhcmFjdGVySWRdKTtcclxuXHJcbiAgY29uc3Qgb25GYWlsZWQgPSAoKSA9PiB7XHJcbiAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcbiAgICBtZXNzYWdlLmVycm9yKFwiVGhlcmUgYXJlIHNvbWUgZXJyb3JzXCIpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHN1Ym1pdCA9ICh2YWx1ZXMpID0+IHtcclxuICAgIGlmICh0eXBlb2YgdmFsdWVzLmltYWdlID09PSBudWxsKSB2YWx1ZXMuaW1hZ2UgPSBcIlwiO1xyXG4gICAgaWYgKCF2YWx1ZXMuaW1hZ2UpIGRlbGV0ZSB2YWx1ZXMuaW1hZ2VDb3B5cmlnaHQ7XHJcbiAgICAvLyBwcm9wcy5hZGRDaGFyYWN0ZXIoe1xyXG4gICAgLy8gICAuLi52YWx1ZXMsXHJcbiAgICAvLyAgIGF1dGhvcklkOiBhdXRoLnVzZXIudWlkLFxyXG4gICAgLy8gICBhdXRob3JOYW1lOiBhdXRoLnVzZXIudXNlcm5hbWUsXHJcbiAgICAvLyAgIGF1dGhvckltYWdlOiBhdXRoLnVzZXIuaW1hZ2UgPyBhdXRoLnVzZXIuaW1hZ2UgOiBcIlwiLFxyXG4gICAgLy8gfSk7XHJcbiAgICBjb25zb2xlLmxvZyh2YWx1ZXMpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TG9hZGluZ1NjcmVlbiBsb2FkaW5nPXthdXRoLmlzTG9hZGluZ30+XHJcbiAgICAgIDxSZWRpcmVjdENvbXAgY29uZGl0aW9uPXthdXRoLnVzZXJ9IHR5cGU9XCJyZWRpcmVjdFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3LWNoYXJhY3RlciBjdXN0b20tZm9ybVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lclwiPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwic2lkZS1oZWFkaW5nXCI+QWRkIGEgbmV3IGNoYXJhY3RlcjwvaDI+XHJcbiAgICAgICAgICAgIDxDaGFyYWN0ZXJGb3JtXHJcbiAgICAgICAgICAgICAgc3VibWl0PXtzdWJtaXR9XHJcbiAgICAgICAgICAgICAgb25GYWlsZWQ9e29uRmFpbGVkfVxyXG4gICAgICAgICAgICAgIGZvcm09e2Zvcm19XHJcbiAgICAgICAgICAgICAgY2hhcmFjdGVycz17Y2hhcmFjdGVyc31cclxuICAgICAgICAgICAgICB2aXNpYmlsaXR5PXt2aXNpYmlsaXR5fVxyXG4gICAgICAgICAgICAgIHNldFZpc2liaWxpdHk9e3NldFZpc2liaWxpdHl9XHJcbiAgICAgICAgICAgICAgbG9hZGluZ0NoYXJhY3Rlcj17bG9hZGluZ0NoYXJhY3Rlcn1cclxuICAgICAgICAgICAgICB0eXBlPVwiYWRkXCJcclxuICAgICAgICAgICAgICBpbml0aWFsVmFsdWVzPXt7XHJcbiAgICAgICAgICAgICAgICBmaXJzdG5hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBsYXN0bmFtZTogXCJcIixcclxuICAgICAgICAgICAgICAgIGFnZTogMCxcclxuICAgICAgICAgICAgICAgIGdlbmRlcjogXCJcIixcclxuICAgICAgICAgICAgICAgIHB1YmxpYzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGV0aG5pY2l0eTogXCJcIixcclxuICAgICAgICAgICAgICAgIGdyb3VwOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgcmVzaWRlbmNlOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBuaWNrbmFtZTogXCJcIixcclxuICAgICAgICAgICAgICAgIG9jY3VwYXRpb246IFwiXCIsXHJcbiAgICAgICAgICAgICAgICByZWxhdGl2ZXM6IFtdLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9SZWRpcmVjdENvbXA+XHJcbiAgICA8L0xvYWRpbmdTY3JlZW4+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcclxuICBjaGFyYWN0ZXJzOiBzdGF0ZS5jaGFyYWN0ZXJzLnVzZXJDaGFyYWN0ZXJzLFxyXG4gIGxvYWRpbmdDaGFyYWN0ZXI6IHN0YXRlLmNoYXJhY3RlcnMubG9hZGluZ0NoYXJhY3RlcixcclxuICBjaGFyYWN0ZXJJZDogc3RhdGUuY2hhcmFjdGVycy5jaGFyYWN0ZXJJZCxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgeyBnZXRVc2VyQ2hhcmFjdGVycywgYWRkQ2hhcmFjdGVyIH0pKFxyXG4gIG5ld0NoYXJhY3RlclxyXG4pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9