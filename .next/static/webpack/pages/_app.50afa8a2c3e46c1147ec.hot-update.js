webpackHotUpdate_N_E("pages/_app",{

/***/ "./redux/reducers/charactersReducer.js":
/*!*********************************************!*\
  !*** ./redux/reducers/charactersReducer.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/constants */ "./utils/constants.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var initialState = {
  userCharacters: [],
  favCharacters: [],
  loading: true,
  loadingCharacter: false,
  characterId: "",
  message: "",
  character: {
    id: "",
    authorId: "",
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
  charaExists: false,
  secondaryCharacters: [],
  mainArr: [],
  deleted: false
};

var charactersReducer = function charactersReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _utils_constants__WEBPACK_IMPORTED_MODULE_1__["types"].ADD_CHARACTER:
      return _objectSpread(_objectSpread({}, state), {}, {
        message: action.payload.message,
        characterId: action.payload.characterId,
        loadingCharacter: action.payload.loading
      });

    case _utils_constants__WEBPACK_IMPORTED_MODULE_1__["types"].EDIT_CHARACTER:
      return _objectSpread(_objectSpread({}, state), {}, {
        message: action.payload.message,
        loadingCharacter: action.payload.loading
      });

    case _utils_constants__WEBPACK_IMPORTED_MODULE_1__["types"].DELETE_CHARACTER:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: action.payload.loading,
        message: action.payload.message ? action.payload.message : state.message,
        deleted: action.payload.deleted ? action.payload.deleted : state.deleted,
        charaExists: action.payload.charaExists ? action.payload.charaExists : state.charaExists
      });

    case _utils_constants__WEBPACK_IMPORTED_MODULE_1__["types"].GET_CHARACTER:
      return _objectSpread(_objectSpread({}, state), {}, {
        charaExists: action.payload.charaExists,
        character: action.payload.charaExists ? action.payload.character : state.character,
        loading: action.payload.loading
      });

    case _utils_constants__WEBPACK_IMPORTED_MODULE_1__["types"].GET_USER_CHARACTERS:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        userCharacters: action.payload
      });

    case _utils_constants__WEBPACK_IMPORTED_MODULE_1__["types"].GET_FAVORITE_CHARACTERS:
      return _objectSpread(_objectSpread({}, state), {}, {
        favCharacters: action.payload
      });

    case _utils_constants__WEBPACK_IMPORTED_MODULE_1__["types"].GET_STORY_CHARACTERS:
      return _objectSpread(_objectSpread({}, state), {}, {
        secondaryCharacters: action.payload.secondaryCharacters,
        mainArr: action.payload.mainArr
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (charactersReducer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvcmVkdWNlcnMvY2hhcmFjdGVyc1JlZHVjZXIuanMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwidXNlckNoYXJhY3RlcnMiLCJmYXZDaGFyYWN0ZXJzIiwibG9hZGluZyIsImxvYWRpbmdDaGFyYWN0ZXIiLCJjaGFyYWN0ZXJJZCIsIm1lc3NhZ2UiLCJjaGFyYWN0ZXIiLCJpZCIsImF1dGhvcklkIiwiZmlyc3RuYW1lIiwibGFzdG5hbWUiLCJhZ2UiLCJldGhuaWNpdHkiLCJncm91cCIsInJlc2lkZW5jZSIsImRlc2NyaXB0aW9uIiwibmlja25hbWUiLCJvY2N1cGF0aW9uIiwicmVsYXRpdmVzIiwiY2hhcmFFeGlzdHMiLCJzZWNvbmRhcnlDaGFyYWN0ZXJzIiwibWFpbkFyciIsImRlbGV0ZWQiLCJjaGFyYWN0ZXJzUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInR5cGVzIiwiQUREX0NIQVJBQ1RFUiIsInBheWxvYWQiLCJFRElUX0NIQVJBQ1RFUiIsIkRFTEVURV9DSEFSQUNURVIiLCJHRVRfQ0hBUkFDVEVSIiwiR0VUX1VTRVJfQ0hBUkFDVEVSUyIsIkdFVF9GQVZPUklURV9DSEFSQUNURVJTIiwiR0VUX1NUT1JZX0NIQVJBQ1RFUlMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLElBQU1BLFlBQVksR0FBRztBQUNuQkMsZ0JBQWMsRUFBRSxFQURHO0FBRW5CQyxlQUFhLEVBQUUsRUFGSTtBQUduQkMsU0FBTyxFQUFFLElBSFU7QUFJbkJDLGtCQUFnQixFQUFFLEtBSkM7QUFLbkJDLGFBQVcsRUFBRSxFQUxNO0FBTW5CQyxTQUFPLEVBQUUsRUFOVTtBQU9uQkMsV0FBUyxFQUFFO0FBQ1RDLE1BQUUsRUFBRSxFQURLO0FBRVRDLFlBQVEsRUFBRSxFQUZEO0FBR1RDLGFBQVMsRUFBRSxFQUhGO0FBSVRDLFlBQVEsRUFBRSxFQUpEO0FBS1RDLE9BQUcsRUFBRSxDQUxJ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MmMzZTQ2YzExNDdlYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdHlwZXMgfSBmcm9tIFwiLi4vLi4vdXRpbHMvY29uc3RhbnRzXCI7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgdXNlckNoYXJhY3RlcnM6IFtdLFxyXG4gIGZhdkNoYXJhY3RlcnM6IFtdLFxyXG4gIGxvYWRpbmc6IHRydWUsXHJcbiAgbG9hZGluZ0NoYXJhY3RlcjogZmFsc2UsXHJcbiAgY2hhcmFjdGVySWQ6IFwiXCIsXHJcbiAgbWVzc2FnZTogXCJcIixcclxuICBjaGFyYWN0ZXI6IHtcclxuICAgIGlkOiBcIlwiLFxyXG4gICAgYXV0aG9ySWQ6IFwiXCIsXHJcbiAgICBmaXJzdG5hbWU6IFwiXCIsXHJcbiAgICBsYXN0bmFtZTogXCJcIixcclxuICAgIGFnZTogMCxcclxuICAgIHB1YmxpYzogdHJ1ZSxcclxuICAgIGV0aG5pY2l0eTogXCJcIixcclxuICAgIGdyb3VwOiBcIlwiLFxyXG4gICAgcmVzaWRlbmNlOiBcIlwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiXCIsXHJcbiAgICBuaWNrbmFtZTogXCJcIixcclxuICAgIG9jY3VwYXRpb246IFwiXCIsXHJcbiAgICByZWxhdGl2ZXM6IFtdLFxyXG4gIH0sXHJcbiAgY2hhcmFFeGlzdHM6IGZhbHNlLFxyXG4gIHNlY29uZGFyeUNoYXJhY3RlcnM6IFtdLFxyXG4gIG1haW5BcnI6IFtdLFxyXG4gIGRlbGV0ZWQ6IGZhbHNlLFxyXG59O1xyXG5cclxuY29uc3QgY2hhcmFjdGVyc1JlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgdHlwZXMuQUREX0NIQVJBQ1RFUjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBtZXNzYWdlOiBhY3Rpb24ucGF5bG9hZC5tZXNzYWdlLFxyXG4gICAgICAgIGNoYXJhY3RlcklkOiBhY3Rpb24ucGF5bG9hZC5jaGFyYWN0ZXJJZCxcclxuICAgICAgICBsb2FkaW5nQ2hhcmFjdGVyOiBhY3Rpb24ucGF5bG9hZC5sb2FkaW5nLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSB0eXBlcy5FRElUX0NIQVJBQ1RFUjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBtZXNzYWdlOiBhY3Rpb24ucGF5bG9hZC5tZXNzYWdlLFxyXG4gICAgICAgIGxvYWRpbmdDaGFyYWN0ZXI6IGFjdGlvbi5wYXlsb2FkLmxvYWRpbmcsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIHR5cGVzLkRFTEVURV9DSEFSQUNURVI6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbG9hZGluZzogYWN0aW9uLnBheWxvYWQubG9hZGluZyxcclxuICAgICAgICBtZXNzYWdlOiBhY3Rpb24ucGF5bG9hZC5tZXNzYWdlXHJcbiAgICAgICAgICA/IGFjdGlvbi5wYXlsb2FkLm1lc3NhZ2VcclxuICAgICAgICAgIDogc3RhdGUubWVzc2FnZSxcclxuICAgICAgICBkZWxldGVkOiBhY3Rpb24ucGF5bG9hZC5kZWxldGVkXHJcbiAgICAgICAgICA/IGFjdGlvbi5wYXlsb2FkLmRlbGV0ZWRcclxuICAgICAgICAgIDogc3RhdGUuZGVsZXRlZCxcclxuICAgICAgICBjaGFyYUV4aXN0czogYWN0aW9uLnBheWxvYWQuY2hhcmFFeGlzdHNcclxuICAgICAgICAgID8gYWN0aW9uLnBheWxvYWQuY2hhcmFFeGlzdHNcclxuICAgICAgICAgIDogc3RhdGUuY2hhcmFFeGlzdHMsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIHR5cGVzLkdFVF9DSEFSQUNURVI6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY2hhcmFFeGlzdHM6IGFjdGlvbi5wYXlsb2FkLmNoYXJhRXhpc3RzLFxyXG4gICAgICAgIGNoYXJhY3RlcjogYWN0aW9uLnBheWxvYWQuY2hhcmFFeGlzdHNcclxuICAgICAgICAgID8gYWN0aW9uLnBheWxvYWQuY2hhcmFjdGVyXHJcbiAgICAgICAgICA6IHN0YXRlLmNoYXJhY3RlcixcclxuICAgICAgICBsb2FkaW5nOiBhY3Rpb24ucGF5bG9hZC5sb2FkaW5nLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSB0eXBlcy5HRVRfVVNFUl9DSEFSQUNURVJTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIHVzZXJDaGFyYWN0ZXJzOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgfTtcclxuICAgIGNhc2UgdHlwZXMuR0VUX0ZBVk9SSVRFX0NIQVJBQ1RFUlM6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgZmF2Q2hhcmFjdGVyczogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIHR5cGVzLkdFVF9TVE9SWV9DSEFSQUNURVJTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHNlY29uZGFyeUNoYXJhY3RlcnM6IGFjdGlvbi5wYXlsb2FkLnNlY29uZGFyeUNoYXJhY3RlcnMsXHJcbiAgICAgICAgbWFpbkFycjogYWN0aW9uLnBheWxvYWQubWFpbkFycixcclxuICAgICAgfTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjaGFyYWN0ZXJzUmVkdWNlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==