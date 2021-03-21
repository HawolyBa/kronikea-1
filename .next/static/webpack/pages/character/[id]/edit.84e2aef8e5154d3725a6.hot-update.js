webpackHotUpdate_N_E("pages/character/[id]/edit",{

/***/ "./components/forms/Relatives.js":
/*!***************************************!*\
  !*** ./components/forms/Relatives.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_CharacterCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/CharacterCard */ "./components/common/CharacterCard.js");




var _this = undefined,
    _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\components\\forms\\Relatives.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var Option = antd__WEBPACK_IMPORTED_MODULE_3__["Select"].Option;

var Relatives = function Relatives(_ref) {
  _s();

  var character = _ref.character,
      characters = _ref.characters,
      form = _ref.form;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(character ? character.relatives : []),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState, 2),
      relations = _React$useState2[0],
      setRelations = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(""),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState3, 2),
      currentChar = _React$useState4[0],
      setCurrentChar = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(""),
      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState5, 2),
      currentRel = _React$useState6[0],
      setCurrentRel = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState([]),
      _React$useState8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState7, 2),
      selectedCharacters = _React$useState8[0],
      setSelectedCharacters = _React$useState8[1];

  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(character ? character.relatives.map(function (c) {
    return c.character_id;
  }) : []),
      _React$useState10 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState9, 2),
      selectedArr = _React$useState10[0],
      setSelectedArr = _React$useState10[1];

  var _React$useState11 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(false),
      _React$useState12 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState11, 2),
      showErrorRel = _React$useState12[0],
      setShowErrorRel = _React$useState12[1];

  var _React$useState13 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(false),
      _React$useState14 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState13, 2),
      showErrorChar = _React$useState14[0],
      setShowErrorChar = _React$useState14[1];

  var addRelation = function addRelation() {
    var newRelations = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(relations);

    if (currentChar && currentRel) {
      newRelations = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(newRelations), [{
        character_id: currentChar,
        relation: currentRel
      }]);
      setSelectedCharacters([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(selectedCharacters), [_objectSpread(_objectSpread({}, characters.find(function (c) {
        return c.id === currentChar;
      })), {}, {
        relation: currentRel
      })]));
      setSelectedArr([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(selectedArr), [currentChar]));
      form.setFieldsValue({
        relatives: newRelations
      });
      setRelations(newRelations);
      setCurrentChar("");
      setCurrentRel("");
      setShowErrorChar(false);
      setShowErrorRel(false);
    }

    if (!currentRel) {
      setShowErrorRel(true);
    }

    if (!currentChar) {
      setShowErrorChar(true);
    }
  };

  react__WEBPACK_IMPORTED_MODULE_4___default.a.useEffect(function () {
    if (character && characters.length > 0) {
      setSelectedCharacters(character.relatives.map(function (c) {
        return {
          firstname: characters.find(function (_char) {
            return _char.id === c.character_id;
          }).firstname,
          lastname: characters.find(function (_char2) {
            return _char2.id === c.character_id;
          }).lastname,
          image: characters.find(function (_char3) {
            return _char3.id === c.character_id;
          }).image,
          id: characters.find(function (_char4) {
            return _char4.id === c.character_id;
          }).id,
          relation: c.relation
        };
      }));
    }
  }, [character, characters]);

  var removeCharacter = function removeCharacter(id) {
    setSelectedCharacters(selectedCharacters.filter(function (c) {
      return c.id !== id;
    }));
    setSelectedArr(selectedArr.filter(function (c) {
      return c !== id;
    }));
    setRelations(relations.filter(function (c) {
      return c.character_id !== id;
    }));
    form.setFieldsValue({
      relatives: relations.filter(function (c) {
        return c.character_id !== id;
      })
    });
  };

  return __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    name: "relatives",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 5
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }
  }, "Relationships"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    gutter: [24, 12],
    align: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: 11,
    sm: 24,
    xs: 24,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    label: "Select a character",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Select"], {
    value: currentChar,
    onChange: function onChange(val) {
      return setCurrentChar(val);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }
  }, __jsx(Option, {
    value: "none",
    disabled: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 15
    }
  }, "Select a character"), characters === null || characters === void 0 ? void 0 : characters.filter(function (c) {
    return !selectedArr.includes(c.id) || c.id === character.id;
  }).map(function (c) {
    return __jsx(Option, {
      key: c.id,
      value: c.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 19
      }
    }, "".concat(c.firstname, " ").concat(c.lastname));
  })), showErrorChar && __jsx("div", {
    className: "ant-form-item-explain ant-form-item-explain-error",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 15
    }
  }, __jsx("div", {
    role: "alert",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 17
    }
  }, "A character is required")))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: 11,
    sm: 21,
    xs: 21,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    label: "Type of relationship",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    value: currentRel,
    onChange: function onChange(e) {
      return setCurrentRel(e.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 13
    }
  }), showErrorRel && __jsx("div", {
    className: "ant-form-item-explain ant-form-item-explain-error",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 15
    }
  }, __jsx("div", {
    role: "alert",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 17
    }
  }, "A type of relationship is required")))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: 2,
    xs: 3,
    sm: 3,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "select-add-input-iconbox",
    onClick: addRelation,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 11
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 13
    }
  }, "+")))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 7
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    gutter: [16, 16],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 7
    }
  }, selectedCharacters === null || selectedCharacters === void 0 ? void 0 : selectedCharacters.map(function (rel) {
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      lg: 4,
      md: 8,
      sm: 12,
      xs: 24,
      key: rel.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 11
      }
    }, __jsx(_common_CharacterCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
      removeCharacter: removeCharacter,
      type: "add",
      character: rel,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 13
      }
    }));
  })));
};

_s(Relatives, "NCWTHl71uFWeGMFAEtbS9LSHwBQ=");

_c = Relatives;
/* harmony default export */ __webpack_exports__["default"] = (Relatives);

var _c;

$RefreshReg$(_c, "Relatives");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb3Jtcy9SZWxhdGl2ZXMuanMiXSwibmFtZXMiOlsiT3B0aW9uIiwiU2VsZWN0IiwiUmVsYXRpdmVzIiwiY2hhcmFjdGVyIiwiY2hhcmFjdGVycyIsImZvcm0iLCJSZWFjdCIsInVzZVN0YXRlIiwicmVsYXRpdmVzIiwicmVsYXRpb25zIiwic2V0UmVsYXRpb25zIiwiY3VycmVudENoYXIiLCJzZXRDdXJyZW50Q2hhciIsImN1cnJlbnRSZWwiLCJzZXRDdXJyZW50UmVsIiwic2VsZWN0ZWRDaGFyYWN0ZXJzIiwic2V0U2VsZWN0ZWRDaGFyYWN0ZXJzIiwibWFwIiwiYyIsImNoYXJhY3Rlcl9pZCIsInNlbGVjdGVkQXJyIiwic2V0U2VsZWN0ZWRBcnIiLCJzaG93RXJyb3JSZWwiLCJzZXRTaG93RXJyb3JSZWwiLCJzaG93RXJyb3JDaGFyIiwic2V0U2hvd0Vycm9yQ2hhciIsImFkZFJlbGF0aW9uIiwibmV3UmVsYXRpb25zIiwicmVsYXRpb24iLCJmaW5kIiwiaWQiLCJzZXRGaWVsZHNWYWx1ZSIsInVzZUVmZmVjdCIsImxlbmd0aCIsImZpcnN0bmFtZSIsImNoYXIiLCJsYXN0bmFtZSIsImltYWdlIiwicmVtb3ZlQ2hhcmFjdGVyIiwiZmlsdGVyIiwidmFsIiwiaW5jbHVkZXMiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJyZWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0lBRVFBLE0sR0FBV0MsMkMsQ0FBWEQsTTs7QUFFUixJQUFNRSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUFxQztBQUFBOztBQUFBLE1BQWxDQyxTQUFrQyxRQUFsQ0EsU0FBa0M7QUFBQSxNQUF2QkMsVUFBdUIsUUFBdkJBLFVBQXVCO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXOztBQUFBLHdCQUNuQkMsNENBQUssQ0FBQ0MsUUFBTixDQUNoQ0osU0FBUyxHQUFHQSxT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UztBQXNJU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2hhcmFjdGVyL1tpZF0vZWRpdC44NGUyYWVmOGU1MTU0ZDM3MjVhNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm93LCBDb2wsIEZvcm0sIFNlbGVjdCwgSW5wdXQsIERpdmlkZXIgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgQ2hhcmFjdGVyQ2FyZCwgeyBDaGFyYWN0ZXJHcmlkIH0gZnJvbSBcIi4uL2NvbW1vbi9DaGFyYWN0ZXJDYXJkXCI7XHJcblxyXG5jb25zdCB7IE9wdGlvbiB9ID0gU2VsZWN0O1xyXG5cclxuY29uc3QgUmVsYXRpdmVzID0gKHsgY2hhcmFjdGVyLCBjaGFyYWN0ZXJzLCBmb3JtIH0pID0+IHtcclxuICBjb25zdCBbcmVsYXRpb25zLCBzZXRSZWxhdGlvbnNdID0gUmVhY3QudXNlU3RhdGUoXHJcbiAgICBjaGFyYWN0ZXIgPyBjaGFyYWN0ZXIucmVsYXRpdmVzIDogW11cclxuICApO1xyXG4gIGNvbnN0IFtjdXJyZW50Q2hhciwgc2V0Q3VycmVudENoYXJdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2N1cnJlbnRSZWwsIHNldEN1cnJlbnRSZWxdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3NlbGVjdGVkQ2hhcmFjdGVycywgc2V0U2VsZWN0ZWRDaGFyYWN0ZXJzXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3QgW3NlbGVjdGVkQXJyLCBzZXRTZWxlY3RlZEFycl0gPSBSZWFjdC51c2VTdGF0ZShcclxuICAgIGNoYXJhY3RlciA/IGNoYXJhY3Rlci5yZWxhdGl2ZXMubWFwKChjKSA9PiBjLmNoYXJhY3Rlcl9pZCkgOiBbXVxyXG4gICk7XHJcbiAgY29uc3QgW3Nob3dFcnJvclJlbCwgc2V0U2hvd0Vycm9yUmVsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2hvd0Vycm9yQ2hhciwgc2V0U2hvd0Vycm9yQ2hhcl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGFkZFJlbGF0aW9uID0gKCkgPT4ge1xyXG4gICAgbGV0IG5ld1JlbGF0aW9ucyA9IFsuLi5yZWxhdGlvbnNdO1xyXG4gICAgaWYgKGN1cnJlbnRDaGFyICYmIGN1cnJlbnRSZWwpIHtcclxuICAgICAgbmV3UmVsYXRpb25zID0gW1xyXG4gICAgICAgIC4uLm5ld1JlbGF0aW9ucyxcclxuICAgICAgICB7IGNoYXJhY3Rlcl9pZDogY3VycmVudENoYXIsIHJlbGF0aW9uOiBjdXJyZW50UmVsIH0sXHJcbiAgICAgIF07XHJcbiAgICAgIHNldFNlbGVjdGVkQ2hhcmFjdGVycyhbXHJcbiAgICAgICAgLi4uc2VsZWN0ZWRDaGFyYWN0ZXJzLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIC4uLmNoYXJhY3RlcnMuZmluZCgoYykgPT4gYy5pZCA9PT0gY3VycmVudENoYXIpLFxyXG4gICAgICAgICAgcmVsYXRpb246IGN1cnJlbnRSZWwsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSk7XHJcbiAgICAgIHNldFNlbGVjdGVkQXJyKFsuLi5zZWxlY3RlZEFyciwgY3VycmVudENoYXJdKTtcclxuICAgICAgZm9ybS5zZXRGaWVsZHNWYWx1ZSh7IHJlbGF0aXZlczogbmV3UmVsYXRpb25zIH0pO1xyXG4gICAgICBzZXRSZWxhdGlvbnMobmV3UmVsYXRpb25zKTtcclxuICAgICAgc2V0Q3VycmVudENoYXIoXCJcIik7XHJcbiAgICAgIHNldEN1cnJlbnRSZWwoXCJcIik7XHJcbiAgICAgIHNldFNob3dFcnJvckNoYXIoZmFsc2UpO1xyXG4gICAgICBzZXRTaG93RXJyb3JSZWwoZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghY3VycmVudFJlbCkge1xyXG4gICAgICBzZXRTaG93RXJyb3JSZWwodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFjdXJyZW50Q2hhcikge1xyXG4gICAgICBzZXRTaG93RXJyb3JDaGFyKHRydWUpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoY2hhcmFjdGVyICYmIGNoYXJhY3RlcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICBzZXRTZWxlY3RlZENoYXJhY3RlcnMoXHJcbiAgICAgICAgY2hhcmFjdGVyLnJlbGF0aXZlcy5tYXAoKGMpID0+ICh7XHJcbiAgICAgICAgICBmaXJzdG5hbWU6IGNoYXJhY3RlcnMuZmluZCgoY2hhcikgPT4gY2hhci5pZCA9PT0gYy5jaGFyYWN0ZXJfaWQpXHJcbiAgICAgICAgICAgIC5maXJzdG5hbWUsXHJcbiAgICAgICAgICBsYXN0bmFtZTogY2hhcmFjdGVycy5maW5kKChjaGFyKSA9PiBjaGFyLmlkID09PSBjLmNoYXJhY3Rlcl9pZClcclxuICAgICAgICAgICAgLmxhc3RuYW1lLFxyXG4gICAgICAgICAgaW1hZ2U6IGNoYXJhY3RlcnMuZmluZCgoY2hhcikgPT4gY2hhci5pZCA9PT0gYy5jaGFyYWN0ZXJfaWQpLmltYWdlLFxyXG4gICAgICAgICAgaWQ6IGNoYXJhY3RlcnMuZmluZCgoY2hhcikgPT4gY2hhci5pZCA9PT0gYy5jaGFyYWN0ZXJfaWQpLmlkLFxyXG4gICAgICAgICAgcmVsYXRpb246IGMucmVsYXRpb24sXHJcbiAgICAgICAgfSkpXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfSwgW2NoYXJhY3RlciwgY2hhcmFjdGVyc10pO1xyXG5cclxuICBjb25zdCByZW1vdmVDaGFyYWN0ZXIgPSAoaWQpID0+IHtcclxuICAgIHNldFNlbGVjdGVkQ2hhcmFjdGVycyhzZWxlY3RlZENoYXJhY3RlcnMuZmlsdGVyKChjKSA9PiBjLmlkICE9PSBpZCkpO1xyXG4gICAgc2V0U2VsZWN0ZWRBcnIoc2VsZWN0ZWRBcnIuZmlsdGVyKChjKSA9PiBjICE9PSBpZCkpO1xyXG4gICAgc2V0UmVsYXRpb25zKHJlbGF0aW9ucy5maWx0ZXIoKGMpID0+IGMuY2hhcmFjdGVyX2lkICE9PSBpZCkpO1xyXG4gICAgZm9ybS5zZXRGaWVsZHNWYWx1ZSh7XHJcbiAgICAgIHJlbGF0aXZlczogcmVsYXRpb25zLmZpbHRlcigoYykgPT4gYy5jaGFyYWN0ZXJfaWQgIT09IGlkKSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybS5JdGVtIG5hbWU9XCJyZWxhdGl2ZXNcIj5cclxuICAgICAgPGgzPlJlbGF0aW9uc2hpcHM8L2gzPlxyXG4gICAgICA8Um93IGd1dHRlcj17WzI0LCAxMl19IGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgPENvbCBtZD17MTF9IHNtPXsyNH0geHM9ezI0fT5cclxuICAgICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCJTZWxlY3QgYSBjaGFyYWN0ZXJcIj5cclxuICAgICAgICAgICAgPFNlbGVjdCB2YWx1ZT17Y3VycmVudENoYXJ9IG9uQ2hhbmdlPXsodmFsKSA9PiBzZXRDdXJyZW50Q2hhcih2YWwpfT5cclxuICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwibm9uZVwiIGRpc2FibGVkPlxyXG4gICAgICAgICAgICAgICAgU2VsZWN0IGEgY2hhcmFjdGVyXHJcbiAgICAgICAgICAgICAgPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAge2NoYXJhY3RlcnNcclxuICAgICAgICAgICAgICAgID8uZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgICAoYykgPT4gIXNlbGVjdGVkQXJyLmluY2x1ZGVzKGMuaWQpIHx8IGMuaWQgPT09IGNoYXJhY3Rlci5pZFxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgLm1hcCgoYykgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8T3B0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtjLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjLmlkfVxyXG4gICAgICAgICAgICAgICAgICA+e2Ake2MuZmlyc3RuYW1lfSAke2MubGFzdG5hbWV9YH08L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAge3Nob3dFcnJvckNoYXIgJiYgKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW50LWZvcm0taXRlbS1leHBsYWluIGFudC1mb3JtLWl0ZW0tZXhwbGFpbi1lcnJvclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiByb2xlPVwiYWxlcnRcIj5BIGNoYXJhY3RlciBpcyByZXF1aXJlZDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPENvbCBtZD17MTF9IHNtPXsyMX0geHM9ezIxfT5cclxuICAgICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCJUeXBlIG9mIHJlbGF0aW9uc2hpcFwiPlxyXG4gICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICB2YWx1ZT17Y3VycmVudFJlbH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEN1cnJlbnRSZWwoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7c2hvd0Vycm9yUmVsICYmIChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFudC1mb3JtLWl0ZW0tZXhwbGFpbiBhbnQtZm9ybS1pdGVtLWV4cGxhaW4tZXJyb3JcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgcm9sZT1cImFsZXJ0XCI+QSB0eXBlIG9mIHJlbGF0aW9uc2hpcCBpcyByZXF1aXJlZDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPENvbCBtZD17Mn0geHM9ezN9IHNtPXszfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0LWFkZC1pbnB1dC1pY29uYm94XCIgb25DbGljaz17YWRkUmVsYXRpb259PlxyXG4gICAgICAgICAgICA8c3Bhbj4rPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgIDwvUm93PlxyXG4gICAgICA8RGl2aWRlciAvPlxyXG4gICAgICA8Um93IGd1dHRlcj17WzE2LCAxNl19PlxyXG4gICAgICAgIHtzZWxlY3RlZENoYXJhY3RlcnM/Lm1hcCgocmVsKSA9PiAoXHJcbiAgICAgICAgICA8Q29sIGxnPXs0fSBtZD17OH0gc209ezEyfSB4cz17MjR9IGtleT17cmVsLmlkfT5cclxuICAgICAgICAgICAgPENoYXJhY3RlckNhcmRcclxuICAgICAgICAgICAgICByZW1vdmVDaGFyYWN0ZXI9e3JlbW92ZUNoYXJhY3Rlcn1cclxuICAgICAgICAgICAgICB0eXBlPVwiYWRkXCJcclxuICAgICAgICAgICAgICBjaGFyYWN0ZXI9e3JlbH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L1Jvdz5cclxuICAgIDwvRm9ybS5JdGVtPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWxhdGl2ZXM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=