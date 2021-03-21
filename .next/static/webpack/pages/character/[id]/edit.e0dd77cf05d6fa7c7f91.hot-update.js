webpackHotUpdate_N_E("pages/character/[id]/edit",{

/***/ "./pages/character/[id]/edit.js":
/*!**************************************!*\
  !*** ./pages/character/[id]/edit.js ***!
  \**************************************/
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
/* harmony import */ var _hooks_userHooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../hooks/userHooks */ "./hooks/userHooks.js");
/* harmony import */ var _redux_actions_charactersActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../redux/actions/charactersActions */ "./redux/actions/charactersActions.js");
/* harmony import */ var _components_hoc_LoadingScreen__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/hoc/LoadingScreen */ "./components/hoc/LoadingScreen.js");
/* harmony import */ var _components_hoc_RedirectComp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/hoc/RedirectComp */ "./components/hoc/RedirectComp.js");
/* harmony import */ var _components_forms_CharacterForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/forms/CharacterForm */ "./components/forms/CharacterForm.js");



var _this = undefined,
    _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\pages\\character\\[id]\\edit.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











var EditCharacter = function EditCharacter(props) {
  _s();

  var character = props.character,
      characters = props.characters,
      loadingCharacter = props.loadingCharacter,
      loading = props.loading,
      charaExists = props.charaExists,
      editMessage = props.editMessage;
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
      props.getCharacter(router.query.id);
      props.getUserCharacters(auth.user.uid);
    }
  }, [auth]);
  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    if (editMessage) {
      antd__WEBPACK_IMPORTED_MODULE_4__["message"].success(editMessage);
    }
  }, [editMessage]);
  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    form.setFieldsValue({
      "public": visibility
    });
  }, [visibility]);

  var onFailed = function onFailed() {
    window.scrollTo(0, 0);
    antd__WEBPACK_IMPORTED_MODULE_4__["message"].error("There are some errors");
  };

  var submit = function submit(values) {
    props.editCharacter(_objectSpread({}, values), router.query.id);
  };

  return __jsx(_components_hoc_LoadingScreen__WEBPACK_IMPORTED_MODULE_8__["default"], {
    loading: loading,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 5
    }
  }, __jsx(_components_hoc_RedirectComp__WEBPACK_IMPORTED_MODULE_9__["default"], {
    type: "404",
    condition: charaExists,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }, __jsx(_components_hoc_RedirectComp__WEBPACK_IMPORTED_MODULE_9__["default"], {
    type: "403",
    condition: auth.user && auth.user.uid === character.authorId,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "custom-form new-character",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  }, __jsx("h2", {
    className: "side-heading",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 15
    }
  }, "Edit character:", " ".concat(character.firstname, " ").concat(character.lastname && character.lastname)), __jsx(_components_forms_CharacterForm__WEBPACK_IMPORTED_MODULE_10__["default"], {
    submit: submit,
    onFailed: onFailed,
    form: form,
    character: character,
    characters: characters.filter(function (c) {
      return c.id !== character.id;
    }),
    visibility: visibility,
    setVisibility: setVisibility,
    loadingCharacter: loadingCharacter,
    type: "edit",
    initialValues: _objectSpread({}, character),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 15
    }
  }))))));
};

_s(EditCharacter, "BmEDB6/Oq88cPR3EHWBrfisvGxw=", false, function () {
  return [_hooks_userHooks__WEBPACK_IMPORTED_MODULE_6__["useAuth"], antd__WEBPACK_IMPORTED_MODULE_4__["Form"].useForm, next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c = EditCharacter;

var mapStateToProps = function mapStateToProps(state) {
  return {
    character: state.characters.character,
    characters: state.characters.userCharacters,
    loading: state.characters.loading,
    loadingCharacter: state.characters.loadingCharacter,
    characterId: state.characters.characterId,
    charaExists: state.characters.charaExists,
    editMessage: state.characters.message
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps, {
  getCharacter: _redux_actions_charactersActions__WEBPACK_IMPORTED_MODULE_7__["getCharacter"],
  editCharacter: _redux_actions_charactersActions__WEBPACK_IMPORTED_MODULE_7__["editCharacter"],
  getUserCharacters: _redux_actions_charactersActions__WEBPACK_IMPORTED_MODULE_7__["getUserCharacters"]
})(EditCharacter));

var _c;

$RefreshReg$(_c, "EditCharacter");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhcmFjdGVyLy9lZGl0LmpzIl0sIm5hbWVzIjpbIkVkaXRDaGFyYWN0ZXIiLCJwcm9wcyIsImNoYXJhY3RlciIsImNoYXJhY3RlcnMiLCJsb2FkaW5nQ2hhcmFjdGVyIiwibG9hZGluZyIsImNoYXJhRXhpc3RzIiwiZWRpdE1lc3NhZ2UiLCJhdXRoIiwidXNlQXV0aCIsIkZvcm0iLCJ1c2VGb3JtIiwiZm9ybSIsInJvdXRlciIsInVzZVJvdXRlciIsIlJlYWN0IiwidXNlU3RhdGUiLCJ2aXNpYmlsaXR5Iiwic2V0VmlzaWJpbGl0eSIsInVzZUVmZmVjdCIsInVzZXIiLCJnZXRDaGFyYWN0ZXIiLCJxdWVyeSIsImlkIiwiZ2V0VXNlckNoYXJhY3RlcnMiLCJ1aWQiLCJtZXNzYWdlIiwic3VjY2VzcyIsInNldEZpZWxkc1ZhbHVlIiwib25GYWlsZWQiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsImVycm9yIiwic3VibWl0IiwidmFsdWVzIiwiZWRpdENoYXJhY3RlciIsImF1dGhvcklkIiwiZmlyc3RuYW1lIiwibGFzdG5hbWUiLCJmaWx0ZXIiLCJjIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJ1c2VyQ2hhcmFjdGVycyIsImNoYXJhY3RlcklkIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQU1BO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLE1BRTdCQyxTQUY2QixHQVEzQkQsS0FSMkIsQ0FFN0JDLFNBRjZCO0FBQUEsTUFHN0JDLFVBSDZCLEdBUTNCRixLQVIyQixDQUc3QkUsVUFINkI7QUFBQSxNQUk3QkMsZ0JBSjZCLEdBUTNCSCxLQVIyQixDQUk3QkcsZ0JBSjZCO0FBQUEsTUFLN0JDLE9BTDZCLEdBUTNCSixLQVIyQixDQUs3QkksT0FMNkI7QUFBQSxNQU03QkMsV0FONkIsR0FRM0JMLEtBUjJCLENBTTdCSyxXQU42QjtBQUFBLE1BTzdCQyxXQVA2QixHQVEzQk4sS0FSMkIsQ0FPN0JNLFdBUDZCO0FBUy9CLE1BQU1DLElBQUksR0FBR0MsZ0VBQU8sRUFBcEI7O0FBVCtCLHNCQVVoQkMseUNBQUksQ0FBQ0MsT0FBTCxFQVZnQjtBQUFBO0FBQUEsTUFVeEJDLElBVndCOztBQVcvQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQVgrQix3QkFhS0MsNENBQUssQ0FBQ0MsUUFBTixDQUFlLElBQWYsQ0FiTDtBQUFBO0FBQUEsTUFheEJDLFVBYndCO0FBQUEsTUFhWkMsYUFiWTs7QUFlL0JILDhDQUFLLENBQUNJLFNBQU4sQ0FBZ0IsWUFBTTtBQUNwQixRQUFJWCxJQUFJLENBQUNZLElBQVQsRUFBZTtBQUNibkIsV0FBSyxDQUFDb0IsWUFBTixDQUFtQlIsTUFBTSxDQUFDUyxLQUFQLENBQWFDLEVBQWhDO0FBQ0F0QixXQUFLLENBQUN1QixpQkFBTixDQUF3QmhCLElBQUksQ0FBQ1ksSUFBTCxDQUFVSyxHQUFsQztBQUNEO0FBQ0YsR0FMRCxFQUtHLENBQUNqQixJQUFELENBTEg7QUFPQU8sOENBQUssQ0FBQ0ksU0FBTixDQUFnQixZQUFNO0FBQ3BCLFFBQUlaLFdBQUosRUFBaUI7QUFDZm1CLGtEQUFPLENBQUNDLE9BQVIsQ0FBZ0JwQixXQUFoQjtBQUNEO0FBQ0YsR0FKRCxFQUlHLENBQUNBLFdBQUQsQ0FKSDtBQU1BUSw4Q0FBSyxDQUFDSSxTQUFOLENBQWdCLFlBQU07QUFDcEJQLFFBQUksQ0FBQ2dCLGNBQUwsQ0FBb0I7QUFBRSxnQkFBUVg7QUFBVixLQUFwQjtBQUNELEdBRkQsRUFFRyxDQUFDQSxVQUFELENBRkg7O0FBSUEsTUFBTVksUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNyQkMsVUFBTSxDQUFDQyxRQUFQLENBQWdCLENBQWhCLEVBQW1CLENBQW5CO0FBQ0FMLGdEQUFPLENBQUNNLEtBQVIsQ0FBYyx1QkFBZDtBQUNELEdBSEQ7O0FBS0EsTUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsTUFBRCxFQUFZO0FBQ3pCakMsU0FBSyxDQUFDa0MsYUFBTixtQkFBeUJELE1BQXpCLEdBQW1DckIsTUFBTSxDQUFDUyxLQUFQLENBQWFDLEVBQWhEO0FBQ0QsR0FGRDs7QUFJQSxTQUNFLE1BQUMscUVBQUQ7QUFBZSxXQUFPLEVBQUVsQixPQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvRUFBRDtBQUFjLFFBQUksRUFBQyxLQUFuQjtBQUF5QixhQUFTLEVBQUVDLFdBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9FQUFEO0FBQ0UsUUFBSSxFQUFDLEtBRFA7QUFFRSxhQUFTLEVBQUVFLElBQUksQ0FBQ1ksSUFBTCxJQUFhWixJQUFJLENBQUNZLElBQUwsQ0FBVUssR0FBVixLQUFrQnZCLFNBQVMsQ0FBQ2tDLFFBRnREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJRTtBQUFLLGFBQVMsRUFBQywyQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsY0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQUVPbEMsU0FBUyxDQUFDbUMsU0FGakIsY0FHSW5DLFNBQVMsQ0FBQ29DLFFBQVYsSUFBc0JwQyxTQUFTLENBQUNvQyxRQUhwQyxFQURGLEVBT0UsTUFBQyx3RUFBRDtBQUNFLFVBQU0sRUFBRUwsTUFEVjtBQUVFLFlBQVEsRUFBRUosUUFGWjtBQUdFLFFBQUksRUFBRWpCLElBSFI7QUFJRSxhQUFTLEVBQUVWLFNBSmI7QUFLRSxjQUFVLEVBQUVDLFVBQVUsQ0FBQ29DLE1BQVgsQ0FBa0IsVUFBQ0MsQ0FBRDtBQUFBLGFBQU9BLENBQUMsQ0FBQ2pCLEVBQUYsS0FBU3JCLFNBQVMsQ0FBQ3FCLEVBQTFCO0FBQUEsS0FBbEIsQ0FMZDtBQU1FLGNBQVUsRUFBRU4sVUFOZDtBQU9FLGlCQUFhLEVBQUVDLGFBUGpCO0FBUUUsb0JBQWdCLEVBQUVkLGdCQVJwQjtBQVNFLFFBQUksRUFBQyxNQVRQO0FBVUUsaUJBQWEsb0JBQU9GLFNBQVAsQ0FWZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEYsQ0FERixDQUpGLENBREYsQ0FERixDQURGO0FBaUNELENBMUVEOztHQUFNRixhO1VBU1NTLHdELEVBQ0VDLHlDQUFJLENBQUNDLE8sRUFDTEcscUQ7OztLQVhYZCxhOztBQTRFTixJQUFNeUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUNsQ3hDLGFBQVMsRUFBRXdDLEtBQUssQ0FBQ3ZDLFVBQU4sQ0FBaUJELFNBRE07QUFFbENDLGNBQVUsRUFBRXVDLEtBQUssQ0FBQ3ZDLFVBQU4sQ0FBaUJ3QyxjQUZLO0FBR2xDdEMsV0FBTyxFQUFFcUMsS0FBSyxDQUFDdkMsVUFBTixDQUFpQkUsT0FIUTtBQUlsQ0Qsb0JBQWdCLEVBQUVzQyxLQUFLLENBQUN2QyxVQUFOLENBQWlCQyxnQkFKRDtBQUtsQ3dDLGVBQVcsRUFBRUYsS0FBSyxDQUFDdkMsVUFBTixDQUFpQnlDLFdBTEk7QUFNbEN0QyxlQUFXLEVBQUVvQyxLQUFLLENBQUN2QyxVQUFOLENBQWlCRyxXQU5JO0FBT2xDQyxlQUFXLEVBQUVtQyxLQUFLLENBQUN2QyxVQUFOLENBQWlCdUI7QUFQSSxHQUFaO0FBQUEsQ0FBeEI7O0FBVWVtQiwwSEFBTyxDQUFDSixlQUFELEVBQWtCO0FBQ3RDcEIsY0FBWSxFQUFaQSw2RUFEc0M7QUFFdENjLGVBQWEsRUFBYkEsOEVBRnNDO0FBR3RDWCxtQkFBaUIsRUFBakJBLGtGQUFpQkE7QUFIcUIsQ0FBbEIsQ0FBUCxDQUlaeEIsYUFKWSxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NoYXJhY3Rlci9baWRdL2VkaXQuZTBkZDc3Y2YwNWQ2ZmE3YzdmOTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IEZvcm0sIG1lc3NhZ2UgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcblxyXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSBcIi4uLy4uLy4uL2hvb2tzL3VzZXJIb29rc1wiO1xyXG5pbXBvcnQge1xyXG4gIGVkaXRDaGFyYWN0ZXIsXHJcbiAgZ2V0Q2hhcmFjdGVyLFxyXG4gIGdldFVzZXJDaGFyYWN0ZXJzLFxyXG59IGZyb20gXCIuLi8uLi8uLi9yZWR1eC9hY3Rpb25zL2NoYXJhY3RlcnNBY3Rpb25zXCI7XHJcblxyXG5pbXBvcnQgTG9hZGluZ1NjcmVlbiBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9ob2MvTG9hZGluZ1NjcmVlblwiO1xyXG5pbXBvcnQgUmVkaXJlY3RDb21wIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2hvYy9SZWRpcmVjdENvbXBcIjtcclxuaW1wb3J0IENoYXJhY3RlckZvcm0gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvZm9ybXMvQ2hhcmFjdGVyRm9ybVwiO1xyXG5cclxuY29uc3QgRWRpdENoYXJhY3RlciA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIGNoYXJhY3RlcixcclxuICAgIGNoYXJhY3RlcnMsXHJcbiAgICBsb2FkaW5nQ2hhcmFjdGVyLFxyXG4gICAgbG9hZGluZyxcclxuICAgIGNoYXJhRXhpc3RzLFxyXG4gICAgZWRpdE1lc3NhZ2UsXHJcbiAgfSA9IHByb3BzO1xyXG4gIGNvbnN0IGF1dGggPSB1c2VBdXRoKCk7XHJcbiAgY29uc3QgW2Zvcm1dID0gRm9ybS51c2VGb3JtKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IFt2aXNpYmlsaXR5LCBzZXRWaXNpYmlsaXR5XSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGF1dGgudXNlcikge1xyXG4gICAgICBwcm9wcy5nZXRDaGFyYWN0ZXIocm91dGVyLnF1ZXJ5LmlkKTtcclxuICAgICAgcHJvcHMuZ2V0VXNlckNoYXJhY3RlcnMoYXV0aC51c2VyLnVpZCk7XHJcbiAgICB9XHJcbiAgfSwgW2F1dGhdKTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChlZGl0TWVzc2FnZSkge1xyXG4gICAgICBtZXNzYWdlLnN1Y2Nlc3MoZWRpdE1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH0sIFtlZGl0TWVzc2FnZV0pO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZm9ybS5zZXRGaWVsZHNWYWx1ZSh7IHB1YmxpYzogdmlzaWJpbGl0eSB9KTtcclxuICB9LCBbdmlzaWJpbGl0eV0pO1xyXG5cclxuICBjb25zdCBvbkZhaWxlZCA9ICgpID0+IHtcclxuICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxuICAgIG1lc3NhZ2UuZXJyb3IoXCJUaGVyZSBhcmUgc29tZSBlcnJvcnNcIik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc3VibWl0ID0gKHZhbHVlcykgPT4ge1xyXG4gICAgcHJvcHMuZWRpdENoYXJhY3Rlcih7IC4uLnZhbHVlcyB9LCByb3V0ZXIucXVlcnkuaWQpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TG9hZGluZ1NjcmVlbiBsb2FkaW5nPXtsb2FkaW5nfT5cclxuICAgICAgPFJlZGlyZWN0Q29tcCB0eXBlPVwiNDA0XCIgY29uZGl0aW9uPXtjaGFyYUV4aXN0c30+XHJcbiAgICAgICAgPFJlZGlyZWN0Q29tcFxyXG4gICAgICAgICAgdHlwZT1cIjQwM1wiXHJcbiAgICAgICAgICBjb25kaXRpb249e2F1dGgudXNlciAmJiBhdXRoLnVzZXIudWlkID09PSBjaGFyYWN0ZXIuYXV0aG9ySWR9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXN0b20tZm9ybSBuZXctY2hhcmFjdGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXJcIj5cclxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwic2lkZS1oZWFkaW5nXCI+XHJcbiAgICAgICAgICAgICAgICBFZGl0IGNoYXJhY3RlcjpcclxuICAgICAgICAgICAgICAgIHtgICR7Y2hhcmFjdGVyLmZpcnN0bmFtZX0gJHtcclxuICAgICAgICAgICAgICAgICAgY2hhcmFjdGVyLmxhc3RuYW1lICYmIGNoYXJhY3Rlci5sYXN0bmFtZVxyXG4gICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICA8Q2hhcmFjdGVyRm9ybVxyXG4gICAgICAgICAgICAgICAgc3VibWl0PXtzdWJtaXR9XHJcbiAgICAgICAgICAgICAgICBvbkZhaWxlZD17b25GYWlsZWR9XHJcbiAgICAgICAgICAgICAgICBmb3JtPXtmb3JtfVxyXG4gICAgICAgICAgICAgICAgY2hhcmFjdGVyPXtjaGFyYWN0ZXJ9XHJcbiAgICAgICAgICAgICAgICBjaGFyYWN0ZXJzPXtjaGFyYWN0ZXJzLmZpbHRlcigoYykgPT4gYy5pZCAhPT0gY2hhcmFjdGVyLmlkKX1cclxuICAgICAgICAgICAgICAgIHZpc2liaWxpdHk9e3Zpc2liaWxpdHl9XHJcbiAgICAgICAgICAgICAgICBzZXRWaXNpYmlsaXR5PXtzZXRWaXNpYmlsaXR5fVxyXG4gICAgICAgICAgICAgICAgbG9hZGluZ0NoYXJhY3Rlcj17bG9hZGluZ0NoYXJhY3Rlcn1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJlZGl0XCJcclxuICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e3sgLi4uY2hhcmFjdGVyIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1JlZGlyZWN0Q29tcD5cclxuICAgICAgPC9SZWRpcmVjdENvbXA+XHJcbiAgICA8L0xvYWRpbmdTY3JlZW4+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcclxuICBjaGFyYWN0ZXI6IHN0YXRlLmNoYXJhY3RlcnMuY2hhcmFjdGVyLFxyXG4gIGNoYXJhY3RlcnM6IHN0YXRlLmNoYXJhY3RlcnMudXNlckNoYXJhY3RlcnMsXHJcbiAgbG9hZGluZzogc3RhdGUuY2hhcmFjdGVycy5sb2FkaW5nLFxyXG4gIGxvYWRpbmdDaGFyYWN0ZXI6IHN0YXRlLmNoYXJhY3RlcnMubG9hZGluZ0NoYXJhY3RlcixcclxuICBjaGFyYWN0ZXJJZDogc3RhdGUuY2hhcmFjdGVycy5jaGFyYWN0ZXJJZCxcclxuICBjaGFyYUV4aXN0czogc3RhdGUuY2hhcmFjdGVycy5jaGFyYUV4aXN0cyxcclxuICBlZGl0TWVzc2FnZTogc3RhdGUuY2hhcmFjdGVycy5tZXNzYWdlLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7XHJcbiAgZ2V0Q2hhcmFjdGVyLFxyXG4gIGVkaXRDaGFyYWN0ZXIsXHJcbiAgZ2V0VXNlckNoYXJhY3RlcnMsXHJcbn0pKEVkaXRDaGFyYWN0ZXIpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9