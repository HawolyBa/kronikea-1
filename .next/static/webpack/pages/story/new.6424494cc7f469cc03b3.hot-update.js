webpackHotUpdate_N_E("pages/story/new",{

/***/ "./components/common/Input.js":
/*!************************************!*\
  !*** ./components/common/Input.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var antd_lib_form_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/form/Form */ "./node_modules/antd/lib/form/Form.js");
/* harmony import */ var antd_lib_form_Form__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form_Form__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/helpers */ "./utils/helpers.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\components\\common\\Input.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var InputGroup = function InputGroup(_ref) {
  var lg = _ref.lg,
      xs = _ref.xs,
      sm = _ref.sm,
      md = _ref.md,
      type = _ref.type,
      name = _ref.name,
      placeholder = _ref.placeholder,
      value = _ref.value,
      onChangeFunc = _ref.onChangeFunc,
      storyInfo = _ref.storyInfo,
      required = _ref.required;
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    lg: lg,
    xs: xs,
    sm: sm,
    md: md,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx(antd_lib_form_Form__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
    label: Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_4__["capitalizeFirstLetter"])(name),
    required: required,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "input-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx("label", {
    htmlFor: name,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }, name), __jsx("input", {
    className: "form-input",
    type: type,
    id: name,
    placeholder: placeholder,
    value: value,
    onChange: function onChange(e) {
      return onChangeFunc(_objectSpread(_objectSpread({}, storyInfo), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, name, e.target.value)));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }))));
};

_c = InputGroup;
/* harmony default export */ __webpack_exports__["default"] = (InputGroup);

var _c;

$RefreshReg$(_c, "InputGroup");

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

/***/ }),

/***/ "./node_modules/@ant-design/icons-svg/lib/asn/CheckCircleFilled.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@ant-design/icons-svg/lib/asn/CheckCircleFilled.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This icon file is generated automatically.
Object.defineProperty(exports, "__esModule", { value: true });
var CheckCircleFilled = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" } }] }, "name": "check-circle", "theme": "filled" };
exports.default = CheckCircleFilled;


/***/ }),

/***/ "./node_modules/@ant-design/icons-svg/lib/asn/CheckCircleOutlined.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@ant-design/icons-svg/lib/asn/CheckCircleOutlined.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This icon file is generated automatically.
Object.defineProperty(exports, "__esModule", { value: true });
var CheckCircleOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z" } }, { "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }] }, "name": "check-circle", "theme": "outlined" };
exports.default = CheckCircleOutlined;


/***/ }),

/***/ "./node_modules/@ant-design/icons-svg/lib/asn/CloseCircleFilled.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@ant-design/icons-svg/lib/asn/CloseCircleFilled.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This icon file is generated automatically.
Object.defineProperty(exports, "__esModule", { value: true });
var CloseCircleFilled = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z" } }] }, "name": "close-circle", "theme": "filled" };
exports.default = CloseCircleFilled;


/***/ }),

/***/ "./node_modules/@ant-design/icons-svg/lib/asn/CloseCircleOutlined.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@ant-design/icons-svg/lib/asn/CloseCircleOutlined.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This icon file is generated automatically.
Object.defineProperty(exports, "__esModule", { value: true });
var CloseCircleOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 00-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z" } }, { "tag": "path", "attrs": { "d": "M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }] }, "name": "close-circle", "theme": "outlined" };
exports.default = CloseCircleOutlined;


/***/ }),

/***/ "./node_modules/@ant-design/icons-svg/lib/asn/CloseOutlined.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ant-design/icons-svg/lib/asn/CloseOutlined.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This icon file is generated automatically.
Object.defineProperty(exports, "__esModule", { value: true });
var CloseOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" } }] }, "name": "close", "theme": "outlined" };
exports.default = CloseOutlined;


/***/ }),

/***/ "./node_modules/@ant-design/icons-svg/lib/asn/ExclamationCircleFilled.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@ant-design/icons-svg/lib/asn/ExclamationCircleFilled.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This icon file is generated automatically.
Object.defineProperty(exports, "__esModule", { value: true });
var ExclamationCircleFilled = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, "name": "exclamation-circle", "theme": "filled" };
exports.default = ExclamationCircleFilled;


/***/ }),

/***/ "./node_modules/@ant-design/icons-svg/lib/asn/ExclamationCircleOutlined.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@ant-design/icons-svg/lib/asn/ExclamationCircleOutlined.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This icon file is generated automatically.
Object.defineProperty(exports, "__esModule", { value: true });
var ExclamationCircleOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }, { "tag": "path", "attrs": { "d": "M464 688a48 48 0 1096 0 48 48 0 10-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z" } }] }, "name": "exclamation-circle", "theme": "outlined" };
exports.default = ExclamationCircleOutlined;


/***/ }),

/***/ "./node_modules/@ant-design/icons-svg/lib/asn/InfoCircleFilled.js":
/*!************************************************************************!*\
  !*** ./node_modules/@ant-design/icons-svg/lib/asn/InfoCircleFilled.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This icon file is generated automatically.
Object.defineProperty(exports, "__esModule", { value: true });
var InfoCircleFilled = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, "name": "info-circle", "theme": "filled" };
exports.default = InfoCircleFilled;


/***/ }),

/***/ "./node_modules/@ant-design/icons-svg/lib/asn/InfoCircleOutlined.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ant-design/icons-svg/lib/asn/InfoCircleOutlined.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This icon file is generated automatically.
Object.defineProperty(exports, "__esModule", { value: true });
var InfoCircleOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }, { "tag": "path", "attrs": { "d": "M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z" } }] }, "name": "info-circle", "theme": "outlined" };
exports.default = InfoCircleOutlined;


/***/ }),

/***/ "./node_modules/@ant-design/icons-svg/lib/asn/LoadingOutlined.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ant-design/icons-svg/lib/asn/LoadingOutlined.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This icon file is generated automatically.
Object.defineProperty(exports, "__esModule", { value: true });
var LoadingOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "0 0 1024 1024", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, "name": "loading", "theme": "outlined" };
exports.default = LoadingOutlined;


/***/ }),

/***/ "./node_modules/@ant-design/icons/CheckCircleFilled.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ant-design/icons/CheckCircleFilled.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  
  var _CheckCircleFilled = _interopRequireDefault(__webpack_require__(/*! ./lib/icons/CheckCircleFilled */ "./node_modules/@ant-design/icons/lib/icons/CheckCircleFilled.js"));
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _default = _CheckCircleFilled;
  exports.default = _default;
  module.exports = _default;

/***/ }),

/***/ "./node_modules/@ant-design/icons/CheckCircleOutlined.js":
/*!***************************************************************!*\
  !*** ./node_modules/@ant-design/icons/CheckCircleOutlined.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  
  var _CheckCircleOutlined = _interopRequireDefault(__webpack_require__(/*! ./lib/icons/CheckCircleOutlined */ "./node_modules/@ant-design/icons/lib/icons/CheckCircleOutlined.js"));
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _default = _CheckCircleOutlined;
  exports.default = _default;
  module.exports = _default;

/***/ }),

/***/ "./node_modules/@ant-design/icons/CloseCircleFilled.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ant-design/icons/CloseCircleFilled.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  
  var _CloseCircleFilled = _interopRequireDefault(__webpack_require__(/*! ./lib/icons/CloseCircleFilled */ "./node_modules/@ant-design/icons/lib/icons/CloseCircleFilled.js"));
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _default = _CloseCircleFilled;
  exports.default = _default;
  module.exports = _default;

/***/ }),

/***/ "./node_modules/@ant-design/icons/CloseCircleOutlined.js":
/*!***************************************************************!*\
  !*** ./node_modules/@ant-design/icons/CloseCircleOutlined.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  
  var _CloseCircleOutlined = _interopRequireDefault(__webpack_require__(/*! ./lib/icons/CloseCircleOutlined */ "./node_modules/@ant-design/icons/lib/icons/CloseCircleOutlined.js"));
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _default = _CloseCircleOutlined;
  exports.default = _default;
  module.exports = _default;

/***/ }),

/***/ "./node_modules/@ant-design/icons/CloseOutlined.js":
/*!*********************************************************!*\
  !*** ./node_modules/@ant-design/icons/CloseOutlined.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  
  var _CloseOutlined = _interopRequireDefault(__webpack_require__(/*! ./lib/icons/CloseOutlined */ "./node_modules/@ant-design/icons/lib/icons/CloseOutlined.js"));
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _default = _CloseOutlined;
  exports.default = _default;
  module.exports = _default;

/***/ }),

/***/ "./node_modules/@ant-design/icons/ExclamationCircleFilled.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@ant-design/icons/ExclamationCircleFilled.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  
  var _ExclamationCircleFilled = _interopRequireDefault(__webpack_require__(/*! ./lib/icons/ExclamationCircleFilled */ "./node_modules/@ant-design/icons/lib/icons/ExclamationCircleFilled.js"));
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _default = _ExclamationCircleFilled;
  exports.default = _default;
  module.exports = _default;

/***/ }),

/***/ "./node_modules/@ant-design/icons/ExclamationCircleOutlined.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ant-design/icons/ExclamationCircleOutlined.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  
  var _ExclamationCircleOutlined = _interopRequireDefault(__webpack_require__(/*! ./lib/icons/ExclamationCircleOutlined */ "./node_modules/@ant-design/icons/lib/icons/ExclamationCircleOutlined.js"));
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _default = _ExclamationCircleOutlined;
  exports.default = _default;
  module.exports = _default;

/***/ }),

/***/ "./node_modules/@ant-design/icons/InfoCircleFilled.js":
/*!************************************************************!*\
  !*** ./node_modules/@ant-design/icons/InfoCircleFilled.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  
  var _InfoCircleFilled = _interopRequireDefault(__webpack_require__(/*! ./lib/icons/InfoCircleFilled */ "./node_modules/@ant-design/icons/lib/icons/InfoCircleFilled.js"));
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _default = _InfoCircleFilled;
  exports.default = _default;
  module.exports = _default;

/***/ }),

/***/ "./node_modules/@ant-design/icons/InfoCircleOutlined.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ant-design/icons/InfoCircleOutlined.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  
  var _InfoCircleOutlined = _interopRequireDefault(__webpack_require__(/*! ./lib/icons/InfoCircleOutlined */ "./node_modules/@ant-design/icons/lib/icons/InfoCircleOutlined.js"));
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _default = _InfoCircleOutlined;
  exports.default = _default;
  module.exports = _default;

/***/ }),

/***/ "./node_modules/@ant-design/icons/LoadingOutlined.js":
/*!***********************************************************!*\
  !*** ./node_modules/@ant-design/icons/LoadingOutlined.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  
  var _LoadingOutlined = _interopRequireDefault(__webpack_require__(/*! ./lib/icons/LoadingOutlined */ "./node_modules/@ant-design/icons/lib/icons/LoadingOutlined.js"));
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _default = _LoadingOutlined;
  exports.default = _default;
  module.exports = _default;

/***/ }),

/***/ "./node_modules/@ant-design/icons/lib/components/AntdIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@ant-design/icons/lib/components/AntdIcon.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _Context = _interopRequireDefault(__webpack_require__(/*! ./Context */ "./node_modules/@ant-design/icons/lib/components/Context.js"));

var _IconBase = _interopRequireDefault(__webpack_require__(/*! ./IconBase */ "./node_modules/@ant-design/icons/lib/components/IconBase.js"));

var _twoTonePrimaryColor = __webpack_require__(/*! ./twoTonePrimaryColor */ "./node_modules/@ant-design/icons/lib/components/twoTonePrimaryColor.js");

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/@ant-design/icons/lib/utils.js");

// Initial setting
// should move it to antd main repo?
(0, _twoTonePrimaryColor.setTwoToneColor)('#1890ff');
var Icon = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _classNames;

  var className = props.className,
      icon = props.icon,
      spin = props.spin,
      rotate = props.rotate,
      tabIndex = props.tabIndex,
      onClick = props.onClick,
      twoToneColor = props.twoToneColor,
      restProps = (0, _objectWithoutProperties2.default)(props, ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"]);

  var _React$useContext = React.useContext(_Context.default),
      _React$useContext$pre = _React$useContext.prefixCls,
      prefixCls = _React$useContext$pre === void 0 ? 'anticon' : _React$useContext$pre;

  var classString = (0, _classnames.default)(prefixCls, (_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-").concat(icon.name), !!icon.name), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-spin"), !!spin || icon.name === 'loading'), _classNames), className);
  var iconTabIndex = tabIndex;

  if (iconTabIndex === undefined && onClick) {
    iconTabIndex = -1;
  }

  var svgStyle = rotate ? {
    msTransform: "rotate(".concat(rotate, "deg)"),
    transform: "rotate(".concat(rotate, "deg)")
  } : undefined;

  var _normalizeTwoToneColo = (0, _utils.normalizeTwoToneColors)(twoToneColor),
      _normalizeTwoToneColo2 = (0, _slicedToArray2.default)(_normalizeTwoToneColo, 2),
      primaryColor = _normalizeTwoToneColo2[0],
      secondaryColor = _normalizeTwoToneColo2[1];

  return /*#__PURE__*/React.createElement("span", Object.assign({
    role: "img",
    "aria-label": icon.name
  }, restProps, {
    ref: ref,
    tabIndex: iconTabIndex,
    onClick: onClick,
    className: classString
  }), /*#__PURE__*/React.createElement(_IconBase.default, {
    icon: icon,
    primaryColor: primaryColor,
    secondaryColor: secondaryColor,
    style: svgStyle
  }));
});
Icon.displayName = 'AntdIcon';
Icon.getTwoToneColor = _twoTonePrimaryColor.getTwoToneColor;
Icon.setTwoToneColor = _twoTonePrimaryColor.setTwoToneColor;
var _default = Icon;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@ant-design/icons/lib/components/Context.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ant-design/icons/lib/components/Context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var IconContext = /*#__PURE__*/(0, _react.createContext)({});
var _default = IconContext;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@ant-design/icons/lib/components/IconBase.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@ant-design/icons/lib/components/IconBase.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectSpread2 */ "./node_modules/@babel/runtime/helpers/objectSpread2.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/@ant-design/icons/lib/utils.js");

var twoToneColorPalette = {
  primaryColor: '#333',
  secondaryColor: '#E6E6E6',
  calculated: false
};

function setTwoToneColors(_ref) {
  var primaryColor = _ref.primaryColor,
      secondaryColor = _ref.secondaryColor;
  twoToneColorPalette.primaryColor = primaryColor;
  twoToneColorPalette.secondaryColor = secondaryColor || (0, _utils.getSecondaryColor)(primaryColor);
  twoToneColorPalette.calculated = !!secondaryColor;
}

function getTwoToneColors() {
  return (0, _objectSpread2.default)({}, twoToneColorPalette);
}

var IconBase = function IconBase(props) {
  var icon = props.icon,
      className = props.className,
      onClick = props.onClick,
      style = props.style,
      primaryColor = props.primaryColor,
      secondaryColor = props.secondaryColor,
      restProps = (0, _objectWithoutProperties2.default)(props, ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"]);
  var colors = twoToneColorPalette;

  if (primaryColor) {
    colors = {
      primaryColor: primaryColor,
      secondaryColor: secondaryColor || (0, _utils.getSecondaryColor)(primaryColor)
    };
  }

  (0, _utils.useInsertStyles)();
  (0, _utils.warning)((0, _utils.isIconDefinition)(icon), "icon should be icon definiton, but got ".concat(icon));

  if (!(0, _utils.isIconDefinition)(icon)) {
    return null;
  }

  var target = icon;

  if (target && typeof target.icon === 'function') {
    target = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, target), {}, {
      icon: target.icon(colors.primaryColor, colors.secondaryColor)
    });
  }

  return (0, _utils.generate)(target.icon, "svg-".concat(target.name), (0, _objectSpread2.default)({
    className: className,
    onClick: onClick,
    style: style,
    'data-icon': target.name,
    width: '1em',
    height: '1em',
    fill: 'currentColor',
    'aria-hidden': 'true'
  }, restProps));
};

IconBase.displayName = 'IconReact';
IconBase.getTwoToneColors = getTwoToneColors;
IconBase.setTwoToneColors = setTwoToneColors;
var _default = IconBase;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@ant-design/icons/lib/components/twoTonePrimaryColor.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@ant-design/icons/lib/components/twoTonePrimaryColor.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setTwoToneColor = setTwoToneColor;
exports.getTwoToneColor = getTwoToneColor;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _IconBase = _interopRequireDefault(__webpack_require__(/*! ./IconBase */ "./node_modules/@ant-design/icons/lib/components/IconBase.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/@ant-design/icons/lib/utils.js");

function setTwoToneColor(twoToneColor) {
  var _normalizeTwoToneColo = (0, _utils.normalizeTwoToneColors)(twoToneColor),
      _normalizeTwoToneColo2 = (0, _slicedToArray2.default)(_normalizeTwoToneColo, 2),
      primaryColor = _normalizeTwoToneColo2[0],
      secondaryColor = _normalizeTwoToneColo2[1];

  return _IconBase.default.setTwoToneColors({
    primaryColor: primaryColor,
    secondaryColor: secondaryColor
  });
}

function getTwoToneColor() {
  var colors = _IconBase.default.getTwoToneColors();

  if (!colors.calculated) {
    return colors.primaryColor;
  }

  return [colors.primaryColor, colors.secondaryColor];
}

/***/ }),

/***/ "./node_modules/@ant-design/icons/lib/icons/CheckCircleFilled.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ant-design/icons/lib/icons/CheckCircleFilled.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _CheckCircleFilled = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons-svg/lib/asn/CheckCircleFilled */ "./node_modules/@ant-design/icons-svg/lib/asn/CheckCircleFilled.js"));

var _AntdIcon = _interopRequireDefault(__webpack_require__(/*! ../components/AntdIcon */ "./node_modules/@ant-design/icons/lib/components/AntdIcon.js"));

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var CheckCircleFilled = function CheckCircleFilled(props, ref) {
  return /*#__PURE__*/React.createElement(_AntdIcon.default, Object.assign({}, props, {
    ref: ref,
    icon: _CheckCircleFilled.default
  }));
};

CheckCircleFilled.displayName = 'CheckCircleFilled';

var _default = /*#__PURE__*/React.forwardRef(CheckCircleFilled);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@ant-design/icons/lib/icons/CheckCircleOutlined.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@ant-design/icons/lib/icons/CheckCircleOutlined.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _CheckCircleOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons-svg/lib/asn/CheckCircleOutlined */ "./node_modules/@ant-design/icons-svg/lib/asn/CheckCircleOutlined.js"));

var _AntdIcon = _interopRequireDefault(__webpack_require__(/*! ../components/AntdIcon */ "./node_modules/@ant-design/icons/lib/components/AntdIcon.js"));

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var CheckCircleOutlined = function CheckCircleOutlined(props, ref) {
  return /*#__PURE__*/React.createElement(_AntdIcon.default, Object.assign({}, props, {
    ref: ref,
    icon: _CheckCircleOutlined.default
  }));
};

CheckCircleOutlined.displayName = 'CheckCircleOutlined';

var _default = /*#__PURE__*/React.forwardRef(CheckCircleOutlined);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@ant-design/icons/lib/icons/CloseCircleFilled.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ant-design/icons/lib/icons/CloseCircleFilled.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _CloseCircleFilled = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons-svg/lib/asn/CloseCircleFilled */ "./node_modules/@ant-design/icons-svg/lib/asn/CloseCircleFilled.js"));

var _AntdIcon = _interopRequireDefault(__webpack_require__(/*! ../components/AntdIcon */ "./node_modules/@ant-design/icons/lib/components/AntdIcon.js"));

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var CloseCircleFilled = function CloseCircleFilled(props, ref) {
  return /*#__PURE__*/React.createElement(_AntdIcon.default, Object.assign({}, props, {
    ref: ref,
    icon: _CloseCircleFilled.default
  }));
};

CloseCircleFilled.displayName = 'CloseCircleFilled';

var _default = /*#__PURE__*/React.forwardRef(CloseCircleFilled);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@ant-design/icons/lib/icons/CloseCircleOutlined.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@ant-design/icons/lib/icons/CloseCircleOutlined.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _CloseCircleOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons-svg/lib/asn/CloseCircleOutlined */ "./node_modules/@ant-design/icons-svg/lib/asn/CloseCircleOutlined.js"));

var _AntdIcon = _interopRequireDefault(__webpack_require__(/*! ../components/AntdIcon */ "./node_modules/@ant-design/icons/lib/components/AntdIcon.js"));

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var CloseCircleOutlined = function CloseCircleOutlined(props, ref) {
  return /*#__PURE__*/React.createElement(_AntdIcon.default, Object.assign({}, props, {
    ref: ref,
    icon: _CloseCircleOutlined.default
  }));
};

CloseCircleOutlined.displayName = 'CloseCircleOutlined';

var _default = /*#__PURE__*/React.forwardRef(CloseCircleOutlined);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@ant-design/icons/lib/icons/CloseOutlined.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@ant-design/icons/lib/icons/CloseOutlined.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _CloseOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons-svg/lib/asn/CloseOutlined */ "./node_modules/@ant-design/icons-svg/lib/asn/CloseOutlined.js"));

var _AntdIcon = _interopRequireDefault(__webpack_require__(/*! ../components/AntdIcon */ "./node_modules/@ant-design/icons/lib/components/AntdIcon.js"));

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var CloseOutlined = function CloseOutlined(props, ref) {
  return /*#__PURE__*/React.createElement(_AntdIcon.default, Object.assign({}, props, {
    ref: ref,
    icon: _CloseOutlined.default
  }));
};

CloseOutlined.displayName = 'CloseOutlined';

var _default = /*#__PURE__*/React.forwardRef(CloseOutlined);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@ant-design/icons/lib/icons/ExclamationCircleFilled.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@ant-design/icons/lib/icons/ExclamationCircleFilled.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _ExclamationCircleFilled = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons-svg/lib/asn/ExclamationCircleFilled */ "./node_modules/@ant-design/icons-svg/lib/asn/ExclamationCircleFilled.js"));

var _AntdIcon = _interopRequireDefault(__webpack_require__(/*! ../components/AntdIcon */ "./node_modules/@ant-design/icons/lib/components/AntdIcon.js"));

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var ExclamationCircleFilled = function ExclamationCircleFilled(props, ref) {
  return /*#__PURE__*/React.createElement(_AntdIcon.default, Object.assign({}, props, {
    ref: ref,
    icon: _ExclamationCircleFilled.default
  }));
};

ExclamationCircleFilled.displayName = 'ExclamationCircleFilled';

var _default = /*#__PURE__*/React.forwardRef(ExclamationCircleFilled);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@ant-design/icons/lib/icons/ExclamationCircleOutlined.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@ant-design/icons/lib/icons/ExclamationCircleOutlined.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _ExclamationCircleOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons-svg/lib/asn/ExclamationCircleOutlined */ "./node_modules/@ant-design/icons-svg/lib/asn/ExclamationCircleOutlined.js"));

var _AntdIcon = _interopRequireDefault(__webpack_require__(/*! ../components/AntdIcon */ "./node_modules/@ant-design/icons/lib/components/AntdIcon.js"));

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var ExclamationCircleOutlined = function ExclamationCircleOutlined(props, ref) {
  return /*#__PURE__*/React.createElement(_AntdIcon.default, Object.assign({}, props, {
    ref: ref,
    icon: _ExclamationCircleOutlined.default
  }));
};

ExclamationCircleOutlined.displayName = 'ExclamationCircleOutlined';

var _default = /*#__PURE__*/React.forwardRef(ExclamationCircleOutlined);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@ant-design/icons/lib/icons/InfoCircleFilled.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@ant-design/icons/lib/icons/InfoCircleFilled.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _InfoCircleFilled = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons-svg/lib/asn/InfoCircleFilled */ "./node_modules/@ant-design/icons-svg/lib/asn/InfoCircleFilled.js"));

var _AntdIcon = _interopRequireDefault(__webpack_require__(/*! ../components/AntdIcon */ "./node_modules/@ant-design/icons/lib/components/AntdIcon.js"));

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var InfoCircleFilled = function InfoCircleFilled(props, ref) {
  return /*#__PURE__*/React.createElement(_AntdIcon.default, Object.assign({}, props, {
    ref: ref,
    icon: _InfoCircleFilled.default
  }));
};

InfoCircleFilled.displayName = 'InfoCircleFilled';

var _default = /*#__PURE__*/React.forwardRef(InfoCircleFilled);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@ant-design/icons/lib/icons/InfoCircleOutlined.js":
/*!************************************************************************!*\
  !*** ./node_modules/@ant-design/icons/lib/icons/InfoCircleOutlined.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _InfoCircleOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons-svg/lib/asn/InfoCircleOutlined */ "./node_modules/@ant-design/icons-svg/lib/asn/InfoCircleOutlined.js"));

var _AntdIcon = _interopRequireDefault(__webpack_require__(/*! ../components/AntdIcon */ "./node_modules/@ant-design/icons/lib/components/AntdIcon.js"));

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var InfoCircleOutlined = function InfoCircleOutlined(props, ref) {
  return /*#__PURE__*/React.createElement(_AntdIcon.default, Object.assign({}, props, {
    ref: ref,
    icon: _InfoCircleOutlined.default
  }));
};

InfoCircleOutlined.displayName = 'InfoCircleOutlined';

var _default = /*#__PURE__*/React.forwardRef(InfoCircleOutlined);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@ant-design/icons/lib/icons/LoadingOutlined.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ant-design/icons/lib/icons/LoadingOutlined.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _LoadingOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons-svg/lib/asn/LoadingOutlined */ "./node_modules/@ant-design/icons-svg/lib/asn/LoadingOutlined.js"));

var _AntdIcon = _interopRequireDefault(__webpack_require__(/*! ../components/AntdIcon */ "./node_modules/@ant-design/icons/lib/components/AntdIcon.js"));

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var LoadingOutlined = function LoadingOutlined(props, ref) {
  return /*#__PURE__*/React.createElement(_AntdIcon.default, Object.assign({}, props, {
    ref: ref,
    icon: _LoadingOutlined.default
  }));
};

LoadingOutlined.displayName = 'LoadingOutlined';

var _default = /*#__PURE__*/React.forwardRef(LoadingOutlined);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@ant-design/icons/lib/utils.js":
/*!*****************************************************!*\
  !*** ./node_modules/@ant-design/icons/lib/utils.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.warning = warning;
exports.isIconDefinition = isIconDefinition;
exports.normalizeAttrs = normalizeAttrs;
exports.generate = generate;
exports.getSecondaryColor = getSecondaryColor;
exports.normalizeTwoToneColors = normalizeTwoToneColors;
exports.useInsertStyles = exports.iconStyles = exports.svgBaseProps = void 0;

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectSpread2 */ "./node_modules/@babel/runtime/helpers/objectSpread2.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

var _colors = __webpack_require__(/*! @ant-design/colors */ "./node_modules/@ant-design/icons/node_modules/@ant-design/colors/dist/index.esm.js");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _warning = _interopRequireDefault(__webpack_require__(/*! rc-util/lib/warning */ "./node_modules/rc-util/lib/warning.js"));

var _insertCss = __webpack_require__(/*! insert-css */ "./node_modules/insert-css/index.js");

function warning(valid, message) {
  (0, _warning.default)(valid, "[@ant-design/icons] ".concat(message));
}

function isIconDefinition(target) {
  return (0, _typeof2.default)(target) === 'object' && typeof target.name === 'string' && typeof target.theme === 'string' && ((0, _typeof2.default)(target.icon) === 'object' || typeof target.icon === 'function');
}

function normalizeAttrs() {
  var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Object.keys(attrs).reduce(function (acc, key) {
    var val = attrs[key];

    switch (key) {
      case 'class':
        acc.className = val;
        delete acc.class;
        break;

      default:
        acc[key] = val;
    }

    return acc;
  }, {});
}

function generate(node, key, rootProps) {
  if (!rootProps) {
    return /*#__PURE__*/_react.default.createElement(node.tag, (0, _objectSpread2.default)({
      key: key
    }, normalizeAttrs(node.attrs)), (node.children || []).map(function (child, index) {
      return generate(child, "".concat(key, "-").concat(node.tag, "-").concat(index));
    }));
  }

  return /*#__PURE__*/_react.default.createElement(node.tag, (0, _objectSpread2.default)((0, _objectSpread2.default)({
    key: key
  }, normalizeAttrs(node.attrs)), rootProps), (node.children || []).map(function (child, index) {
    return generate(child, "".concat(key, "-").concat(node.tag, "-").concat(index));
  }));
}

function getSecondaryColor(primaryColor) {
  // choose the second color
  return (0, _colors.generate)(primaryColor)[0];
}

function normalizeTwoToneColors(twoToneColor) {
  if (!twoToneColor) {
    return [];
  }

  return Array.isArray(twoToneColor) ? twoToneColor : [twoToneColor];
} // These props make sure that the SVG behaviours like general text.
// Reference: https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4


var svgBaseProps = {
  width: '1em',
  height: '1em',
  fill: 'currentColor',
  'aria-hidden': 'true',
  focusable: 'false'
};
exports.svgBaseProps = svgBaseProps;
var iconStyles = "\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n";
exports.iconStyles = iconStyles;
var cssInjectedFlag = false;

var useInsertStyles = function useInsertStyles() {
  var styleStr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : iconStyles;
  (0, _react.useEffect)(function () {
    if (!cssInjectedFlag) {
      (0, _insertCss.insertCss)(styleStr, {
        prepend: true
      });
      cssInjectedFlag = true;
    }
  }, []);
};

exports.useInsertStyles = useInsertStyles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createSuper.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createSuper.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(/*! ./getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

var isNativeReflectConstruct = __webpack_require__(/*! ./isNativeReflectConstruct */ "./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js");

var possibleConstructorReturn = __webpack_require__(/*! ./possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

function _createSuper(Derived) {
  var hasNativeReflectConstruct = isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return possibleConstructorReturn(this, result);
  };
}

module.exports = _createSuper;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectSpread2.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectSpread2.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

module.exports = _objectSpread2;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/antd/lib/_util/devWarning.js":
/*!***************************************************!*\
  !*** ./node_modules/antd/lib/_util/devWarning.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireWildcard/index.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "resetWarned", {
  enumerable: true,
  get: function get() {
    return _warning.resetWarned;
  }
});
exports["default"] = void 0;

var _warning = _interopRequireWildcard(__webpack_require__(/*! rc-util/lib/warning */ "./node_modules/rc-util/lib/warning.js"));

var _default = function _default(valid, component, message) {
  (0, _warning["default"])(valid, "[antd: ".concat(component, "] ").concat(message));
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/calendar/locale/en_US.js":
/*!********************************************************!*\
  !*** ./node_modules/antd/lib/calendar/locale/en_US.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireDefault/index.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _en_US = _interopRequireDefault(__webpack_require__(/*! ../../date-picker/locale/en_US */ "./node_modules/antd/lib/date-picker/locale/en_US.js"));

var _default = _en_US["default"];
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/config-provider/SizeContext.js":
/*!**************************************************************!*\
  !*** ./node_modules/antd/lib/config-provider/SizeContext.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireWildcard/index.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.SizeContextProvider = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var SizeContext = /*#__PURE__*/React.createContext(undefined);

var SizeContextProvider = function SizeContextProvider(_ref) {
  var children = _ref.children,
      size = _ref.size;
  return /*#__PURE__*/React.createElement(SizeContext.Consumer, null, function (originSize) {
    return /*#__PURE__*/React.createElement(SizeContext.Provider, {
      value: size || originSize
    }, children);
  });
};

exports.SizeContextProvider = SizeContextProvider;
var _default = SizeContext;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/config-provider/context.js":
/*!**********************************************************!*\
  !*** ./node_modules/antd/lib/config-provider/context.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireWildcard/index.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireDefault/index.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withConfigConsumer = withConfigConsumer;
exports.ConfigConsumer = exports.ConfigContext = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/antd/node_modules/@babel/runtime/helpers/extends/index.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _renderEmpty = _interopRequireDefault(__webpack_require__(/*! ./renderEmpty */ "./node_modules/antd/lib/config-provider/renderEmpty.js"));

var defaultGetPrefixCls = function defaultGetPrefixCls(suffixCls, customizePrefixCls) {
  if (customizePrefixCls) return customizePrefixCls;
  return suffixCls ? "ant-".concat(suffixCls) : 'ant';
};

var ConfigContext = /*#__PURE__*/React.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: defaultGetPrefixCls,
  renderEmpty: _renderEmpty["default"]
});
exports.ConfigContext = ConfigContext;
var ConfigConsumer = ConfigContext.Consumer;
/** @deprecated Use hooks instead. This is a legacy function */

exports.ConfigConsumer = ConfigConsumer;

function withConfigConsumer(config) {
  return function withConfigConsumerFunc(Component) {
    // Wrap with ConfigConsumer. Since we need compatible with react 15, be care when using ref methods
    var SFC = function SFC(props) {
      return /*#__PURE__*/React.createElement(ConfigConsumer, null, function (configProps) {
        var basicPrefixCls = config.prefixCls;
        var getPrefixCls = configProps.getPrefixCls;
        var customizePrefixCls = props.prefixCls;
        var prefixCls = getPrefixCls(basicPrefixCls, customizePrefixCls);
        return /*#__PURE__*/React.createElement(Component, (0, _extends2["default"])({}, configProps, props, {
          prefixCls: prefixCls
        }));
      });
    };

    var cons = Component.constructor;
    var name = cons && cons.displayName || Component.name || 'Component';
    SFC.displayName = "withConfigConsumer(".concat(name, ")");
    return SFC;
  };
}

/***/ }),

/***/ "./node_modules/antd/lib/config-provider/index.js":
/*!********************************************************!*\
  !*** ./node_modules/antd/lib/config-provider/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireWildcard/index.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireDefault/index.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ConfigConsumer", {
  enumerable: true,
  get: function get() {
    return _context.ConfigConsumer;
  }
});
Object.defineProperty(exports, "ConfigContext", {
  enumerable: true,
  get: function get() {
    return _context.ConfigContext;
  }
});
exports["default"] = exports.configConsumerProps = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/antd/node_modules/@babel/runtime/helpers/extends/index.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Context = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/lib/components/Context */ "./node_modules/@ant-design/icons/lib/components/Context.js"));

var _rcFieldForm = __webpack_require__(/*! rc-field-form */ "./node_modules/rc-field-form/es/index.js");

var _useMemo = _interopRequireDefault(__webpack_require__(/*! rc-util/lib/hooks/useMemo */ "./node_modules/rc-util/lib/hooks/useMemo.js"));

var _localeProvider = _interopRequireWildcard(__webpack_require__(/*! ../locale-provider */ "./node_modules/antd/lib/locale-provider/index.js"));

var _LocaleReceiver = _interopRequireDefault(__webpack_require__(/*! ../locale-provider/LocaleReceiver */ "./node_modules/antd/lib/locale-provider/LocaleReceiver.js"));

var _context = __webpack_require__(/*! ./context */ "./node_modules/antd/lib/config-provider/context.js");

var _SizeContext = _interopRequireWildcard(__webpack_require__(/*! ./SizeContext */ "./node_modules/antd/lib/config-provider/SizeContext.js"));

var _message = _interopRequireDefault(__webpack_require__(/*! ../message */ "./node_modules/antd/lib/message/index.js"));

var _notification = _interopRequireDefault(__webpack_require__(/*! ../notification */ "./node_modules/antd/lib/notification/index.js"));

var configConsumerProps = ['getTargetContainer', 'getPopupContainer', 'rootPrefixCls', 'getPrefixCls', 'renderEmpty', 'csp', 'autoInsertSpaceInButton', 'locale', 'pageHeader']; // These props is used by `useContext` directly in sub component

exports.configConsumerProps = configConsumerProps;
var PASSED_PROPS = ['getTargetContainer', 'getPopupContainer', 'renderEmpty', 'pageHeader', 'input', 'form'];

var ProviderChildren = function ProviderChildren(props) {
  var children = props.children,
      csp = props.csp,
      autoInsertSpaceInButton = props.autoInsertSpaceInButton,
      form = props.form,
      locale = props.locale,
      componentSize = props.componentSize,
      direction = props.direction,
      space = props.space,
      virtual = props.virtual,
      dropdownMatchSelectWidth = props.dropdownMatchSelectWidth,
      legacyLocale = props.legacyLocale,
      parentContext = props.parentContext,
      iconPrefixCls = props.iconPrefixCls;
  var getPrefixCls = React.useCallback(function (suffixCls, customizePrefixCls) {
    var prefixCls = props.prefixCls;
    if (customizePrefixCls) return customizePrefixCls;
    var mergedPrefixCls = prefixCls || parentContext.getPrefixCls('');
    return suffixCls ? "".concat(mergedPrefixCls, "-").concat(suffixCls) : mergedPrefixCls;
  }, [parentContext.getPrefixCls]);
  var config = (0, _extends2["default"])((0, _extends2["default"])({}, parentContext), {
    csp: csp,
    autoInsertSpaceInButton: autoInsertSpaceInButton,
    locale: locale || legacyLocale,
    direction: direction,
    space: space,
    virtual: virtual,
    dropdownMatchSelectWidth: dropdownMatchSelectWidth,
    getPrefixCls: getPrefixCls
  }); // Pass the props used by `useContext` directly with child component.
  // These props should merged into `config`.

  PASSED_PROPS.forEach(function (propName) {
    var propValue = props[propName];

    if (propValue) {
      config[propName] = propValue;
    }
  }); // https://github.com/ant-design/ant-design/issues/27617

  var memoedConfig = (0, _useMemo["default"])(function () {
    return config;
  }, config, function (prevConfig, currentConfig) {
    var prevKeys = Object.keys(prevConfig);
    var currentKeys = Object.keys(currentConfig);
    return prevKeys.length !== currentKeys.length || prevKeys.some(function (key) {
      return prevConfig[key] !== currentConfig[key];
    });
  });
  var memoIconContextValue = React.useMemo(function () {
    return {
      prefixCls: iconPrefixCls
    };
  }, [iconPrefixCls]);
  var childNode = children; // Additional Form provider

  var validateMessages = {};

  if (locale && locale.Form && locale.Form.defaultValidateMessages) {
    validateMessages = locale.Form.defaultValidateMessages;
  }

  if (form && form.validateMessages) {
    validateMessages = (0, _extends2["default"])((0, _extends2["default"])({}, validateMessages), form.validateMessages);
  }

  if (Object.keys(validateMessages).length > 0) {
    childNode = /*#__PURE__*/React.createElement(_rcFieldForm.FormProvider, {
      validateMessages: validateMessages
    }, children);
  }

  if (locale) {
    childNode = /*#__PURE__*/React.createElement(_localeProvider["default"], {
      locale: locale,
      _ANT_MARK__: _localeProvider.ANT_MARK
    }, childNode);
  }

  if (iconPrefixCls) {
    childNode = /*#__PURE__*/React.createElement(_Context["default"].Provider, {
      value: memoIconContextValue
    }, childNode);
  }

  if (componentSize) {
    childNode = /*#__PURE__*/React.createElement(_SizeContext.SizeContextProvider, {
      size: componentSize
    }, childNode);
  }

  return /*#__PURE__*/React.createElement(_context.ConfigContext.Provider, {
    value: memoedConfig
  }, childNode);
};

var ConfigProvider = function ConfigProvider(props) {
  React.useEffect(function () {
    if (props.direction) {
      _message["default"].config({
        rtl: props.direction === 'rtl'
      });

      _notification["default"].config({
        rtl: props.direction === 'rtl'
      });
    }
  }, [props.direction]);
  return /*#__PURE__*/React.createElement(_LocaleReceiver["default"], null, function (_, __, legacyLocale) {
    return /*#__PURE__*/React.createElement(_context.ConfigConsumer, null, function (context) {
      return /*#__PURE__*/React.createElement(ProviderChildren, (0, _extends2["default"])({
        parentContext: context,
        legacyLocale: legacyLocale
      }, props));
    });
  });
};
/** @private internal usage. do not use in your production */


ConfigProvider.ConfigContext = _context.ConfigContext;
ConfigProvider.SizeContext = _SizeContext["default"];
var _default = ConfigProvider;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/config-provider/renderEmpty.js":
/*!**************************************************************!*\
  !*** ./node_modules/antd/lib/config-provider/renderEmpty.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireDefault/index.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireWildcard/index.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _empty = _interopRequireDefault(__webpack_require__(/*! ../empty */ "./node_modules/antd/lib/empty/index.js"));

var _ = __webpack_require__(/*! . */ "./node_modules/antd/lib/config-provider/index.js");

var renderEmpty = function renderEmpty(componentName) {
  return /*#__PURE__*/React.createElement(_.ConfigConsumer, null, function (_ref) {
    var getPrefixCls = _ref.getPrefixCls;
    var prefix = getPrefixCls('empty');

    switch (componentName) {
      case 'Table':
      case 'List':
        return /*#__PURE__*/React.createElement(_empty["default"], {
          image: _empty["default"].PRESENTED_IMAGE_SIMPLE
        });

      case 'Select':
      case 'TreeSelect':
      case 'Cascader':
      case 'Transfer':
      case 'Mentions':
        return /*#__PURE__*/React.createElement(_empty["default"], {
          image: _empty["default"].PRESENTED_IMAGE_SIMPLE,
          className: "".concat(prefix, "-small")
        });

      default:
        return /*#__PURE__*/React.createElement(_empty["default"], null);
    }
  });
};

var _default = renderEmpty;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/date-picker/locale/en_US.js":
/*!***********************************************************!*\
  !*** ./node_modules/antd/lib/date-picker/locale/en_US.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireDefault/index.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/antd/node_modules/@babel/runtime/helpers/extends/index.js"));

var _en_US = _interopRequireDefault(__webpack_require__(/*! rc-picker/lib/locale/en_US */ "./node_modules/rc-picker/lib/locale/en_US.js"));

var _en_US2 = _interopRequireDefault(__webpack_require__(/*! ../../time-picker/locale/en_US */ "./node_modules/antd/lib/time-picker/locale/en_US.js"));

// Merge into a locale object
var locale = {
  lang: (0, _extends2["default"])({
    placeholder: 'Select date',
    yearPlaceholder: 'Select year',
    quarterPlaceholder: 'Select quarter',
    monthPlaceholder: 'Select month',
    weekPlaceholder: 'Select week',
    rangePlaceholder: ['Start date', 'End date'],
    rangeYearPlaceholder: ['Start year', 'End year'],
    rangeMonthPlaceholder: ['Start month', 'End month'],
    rangeWeekPlaceholder: ['Start week', 'End week']
  }, _en_US["default"]),
  timePickerLocale: (0, _extends2["default"])({}, _en_US2["default"])
}; // All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json

var _default = locale;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/empty/empty.js":
/*!**********************************************!*\
  !*** ./node_modules/antd/lib/empty/empty.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireWildcard/index.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var Empty = function Empty() {
  var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls;

  var prefixCls = getPrefixCls('empty-img-default');
  return /*#__PURE__*/React.createElement("svg", {
    className: prefixCls,
    width: "184",
    height: "152",
    viewBox: "0 0 184 152",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(24 31.67)"
  }, /*#__PURE__*/React.createElement("ellipse", {
    className: "".concat(prefixCls, "-ellipse"),
    cx: "67.797",
    cy: "106.89",
    rx: "67.797",
    ry: "12.668"
  }), /*#__PURE__*/React.createElement("path", {
    className: "".concat(prefixCls, "-path-1"),
    d: "M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"
  }), /*#__PURE__*/React.createElement("path", {
    className: "".concat(prefixCls, "-path-2"),
    d: "M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z",
    transform: "translate(13.56)"
  }), /*#__PURE__*/React.createElement("path", {
    className: "".concat(prefixCls, "-path-3"),
    d: "M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"
  }), /*#__PURE__*/React.createElement("path", {
    className: "".concat(prefixCls, "-path-4"),
    d: "M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"
  })), /*#__PURE__*/React.createElement("path", {
    className: "".concat(prefixCls, "-path-5"),
    d: "M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"
  }), /*#__PURE__*/React.createElement("g", {
    className: "".concat(prefixCls, "-g"),
    transform: "translate(149.65 15.383)"
  }, /*#__PURE__*/React.createElement("ellipse", {
    cx: "20.654",
    cy: "3.167",
    rx: "2.849",
    ry: "2.815"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"
  }))));
};

var _default = Empty;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/empty/index.js":
/*!**********************************************!*\
  !*** ./node_modules/antd/lib/empty/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireWildcard/index.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireDefault/index.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/antd/node_modules/@babel/runtime/helpers/extends/index.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/antd/node_modules/@babel/runtime/helpers/defineProperty/index.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var _LocaleReceiver = _interopRequireDefault(__webpack_require__(/*! ../locale-provider/LocaleReceiver */ "./node_modules/antd/lib/locale-provider/LocaleReceiver.js"));

var _empty = _interopRequireDefault(__webpack_require__(/*! ./empty */ "./node_modules/antd/lib/empty/empty.js"));

var _simple = _interopRequireDefault(__webpack_require__(/*! ./simple */ "./node_modules/antd/lib/empty/simple.js"));

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var defaultEmptyImg = /*#__PURE__*/React.createElement(_empty["default"], null);
var simpleEmptyImg = /*#__PURE__*/React.createElement(_simple["default"], null);

var Empty = function Empty(_a) {
  var className = _a.className,
      customizePrefixCls = _a.prefixCls,
      _a$image = _a.image,
      image = _a$image === void 0 ? defaultEmptyImg : _a$image,
      description = _a.description,
      children = _a.children,
      imageStyle = _a.imageStyle,
      restProps = __rest(_a, ["className", "prefixCls", "image", "description", "children", "imageStyle"]);

  var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  return /*#__PURE__*/React.createElement(_LocaleReceiver["default"], {
    componentName: "Empty"
  }, function (locale) {
    var _classNames;

    var prefixCls = getPrefixCls('empty', customizePrefixCls);
    var des = typeof description !== 'undefined' ? description : locale.description;
    var alt = typeof des === 'string' ? des : 'empty';
    var imageNode = null;

    if (typeof image === 'string') {
      imageNode = /*#__PURE__*/React.createElement("img", {
        alt: alt,
        src: image
      });
    } else {
      imageNode = image;
    }

    return /*#__PURE__*/React.createElement("div", (0, _extends2["default"])({
      className: (0, _classnames["default"])(prefixCls, (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-normal"), image === simpleEmptyImg), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames), className)
    }, restProps), /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-image"),
      style: imageStyle
    }, imageNode), des && /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-description")
    }, des), children && /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-footer")
    }, children));
  });
};

Empty.PRESENTED_IMAGE_DEFAULT = defaultEmptyImg;
Empty.PRESENTED_IMAGE_SIMPLE = simpleEmptyImg;
var _default = Empty;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/empty/simple.js":
/*!***********************************************!*\
  !*** ./node_modules/antd/lib/empty/simple.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireWildcard/index.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var Simple = function Simple() {
  var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls;

  var prefixCls = getPrefixCls('empty-img-simple');
  return /*#__PURE__*/React.createElement("svg", {
    className: prefixCls,
    width: "64",
    height: "41",
    viewBox: "0 0 64 41",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(0 1)",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("ellipse", {
    className: "".concat(prefixCls, "-ellipse"),
    cx: "32",
    cy: "33",
    rx: "32",
    ry: "7"
  }), /*#__PURE__*/React.createElement("g", {
    className: "".concat(prefixCls, "-g"),
    fillRule: "nonzero"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",
    className: "".concat(prefixCls, "-path")
  }))));
};

var _default = Simple;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/form/Form.js":
/*!********************************************!*\
  !*** ./node_modules/antd/lib/form/Form.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireWildcard/index.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireDefault/index.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "List", {
  enumerable: true,
  get: function get() {
    return _rcFieldForm.List;
  }
});
Object.defineProperty(exports, "useForm", {
  enumerable: true,
  get: function get() {
    return _useForm3["default"];
  }
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/antd/node_modules/@babel/runtime/helpers/extends/index.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/antd/node_modules/@babel/runtime/helpers/typeof/index.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/antd/node_modules/@babel/runtime/helpers/slicedToArray/index.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/antd/node_modules/@babel/runtime/helpers/defineProperty/index.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _rcFieldForm = _interopRequireWildcard(__webpack_require__(/*! rc-field-form */ "./node_modules/rc-field-form/es/index.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var _context = __webpack_require__(/*! ./context */ "./node_modules/antd/lib/form/context.js");

var _useForm3 = _interopRequireDefault(__webpack_require__(/*! ./hooks/useForm */ "./node_modules/antd/lib/form/hooks/useForm.js"));

var _SizeContext = _interopRequireWildcard(__webpack_require__(/*! ../config-provider/SizeContext */ "./node_modules/antd/lib/config-provider/SizeContext.js"));

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var InternalForm = function InternalForm(props, ref) {
  var _classNames;

  var contextSize = React.useContext(_SizeContext["default"]);

  var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction,
      contextForm = _React$useContext.form;

  var customizePrefixCls = props.prefixCls,
      _props$className = props.className,
      className = _props$className === void 0 ? '' : _props$className,
      _props$size = props.size,
      size = _props$size === void 0 ? contextSize : _props$size,
      form = props.form,
      colon = props.colon,
      labelAlign = props.labelAlign,
      labelCol = props.labelCol,
      wrapperCol = props.wrapperCol,
      hideRequiredMark = props.hideRequiredMark,
      _props$layout = props.layout,
      layout = _props$layout === void 0 ? 'horizontal' : _props$layout,
      scrollToFirstError = props.scrollToFirstError,
      requiredMark = props.requiredMark,
      onFinishFailed = props.onFinishFailed,
      name = props.name,
      restFormProps = __rest(props, ["prefixCls", "className", "size", "form", "colon", "labelAlign", "labelCol", "wrapperCol", "hideRequiredMark", "layout", "scrollToFirstError", "requiredMark", "onFinishFailed", "name"]);

  var mergedRequiredMark = (0, React.useMemo)(function () {
    if (requiredMark !== undefined) {
      return requiredMark;
    }

    if (contextForm && contextForm.requiredMark !== undefined) {
      return contextForm.requiredMark;
    }

    if (hideRequiredMark) {
      return false;
    }

    return true;
  }, [hideRequiredMark, requiredMark, contextForm]);
  var prefixCls = getPrefixCls('form', customizePrefixCls);
  var formClassName = (0, _classnames["default"])(prefixCls, (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-").concat(layout), true), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-hide-required-mark"), mergedRequiredMark === false), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-").concat(size), size), _classNames), className);

  var _useForm = (0, _useForm3["default"])(form),
      _useForm2 = (0, _slicedToArray2["default"])(_useForm, 1),
      wrapForm = _useForm2[0];

  var __INTERNAL__ = wrapForm.__INTERNAL__;
  __INTERNAL__.name = name;
  var formContextValue = (0, React.useMemo)(function () {
    return {
      name: name,
      labelAlign: labelAlign,
      labelCol: labelCol,
      wrapperCol: wrapperCol,
      vertical: layout === 'vertical',
      colon: colon,
      requiredMark: mergedRequiredMark,
      itemRef: __INTERNAL__.itemRef
    };
  }, [name, labelAlign, labelCol, wrapperCol, layout, colon, mergedRequiredMark]);
  React.useImperativeHandle(ref, function () {
    return wrapForm;
  });

  var onInternalFinishFailed = function onInternalFinishFailed(errorInfo) {
    if (onFinishFailed) {
      onFinishFailed(errorInfo);
    }

    var defaultScrollToFirstError = {
      block: 'nearest'
    };

    if (scrollToFirstError && errorInfo.errorFields.length) {
      if ((0, _typeof2["default"])(scrollToFirstError) === 'object') {
        defaultScrollToFirstError = scrollToFirstError;
      }

      wrapForm.scrollToField(errorInfo.errorFields[0].name, defaultScrollToFirstError);
    }
  };

  return /*#__PURE__*/React.createElement(_SizeContext.SizeContextProvider, {
    size: size
  }, /*#__PURE__*/React.createElement(_context.FormContext.Provider, {
    value: formContextValue
  }, /*#__PURE__*/React.createElement(_rcFieldForm["default"], (0, _extends2["default"])({
    id: name
  }, restFormProps, {
    name: name,
    onFinishFailed: onInternalFinishFailed,
    form: wrapForm,
    className: formClassName
  }))));
};

var Form = /*#__PURE__*/React.forwardRef(InternalForm);
var _default = Form;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/form/context.js":
/*!***********************************************!*\
  !*** ./node_modules/antd/lib/form/context.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireDefault/index.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireWildcard/index.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormItemPrefixContext = exports.FormProvider = exports.FormItemContext = exports.FormContext = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _omit = _interopRequireDefault(__webpack_require__(/*! rc-util/lib/omit */ "./node_modules/rc-util/lib/omit.js"));

var _rcFieldForm = __webpack_require__(/*! rc-field-form */ "./node_modules/rc-field-form/es/index.js");

var FormContext = /*#__PURE__*/React.createContext({
  labelAlign: 'right',
  vertical: false,
  itemRef: function itemRef() {}
});
exports.FormContext = FormContext;
var FormItemContext = /*#__PURE__*/React.createContext({
  updateItemErrors: function updateItemErrors() {}
});
exports.FormItemContext = FormItemContext;

var FormProvider = function FormProvider(props) {
  var providerProps = (0, _omit["default"])(props, ['prefixCls']);
  return /*#__PURE__*/React.createElement(_rcFieldForm.FormProvider, providerProps);
};

exports.FormProvider = FormProvider;
var FormItemPrefixContext = /*#__PURE__*/React.createContext({
  prefixCls: ''
});
exports.FormItemPrefixContext = FormItemPrefixContext;

/***/ }),

/***/ "./node_modules/antd/lib/form/hooks/useForm.js":
/*!*****************************************************!*\
  !*** ./node_modules/antd/lib/form/hooks/useForm.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireWildcard/index.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireDefault/index.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useForm;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/antd/node_modules/@babel/runtime/helpers/extends/index.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/antd/node_modules/@babel/runtime/helpers/slicedToArray/index.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _rcFieldForm = __webpack_require__(/*! rc-field-form */ "./node_modules/rc-field-form/es/index.js");

var _scrollIntoViewIfNeeded = _interopRequireDefault(__webpack_require__(/*! scroll-into-view-if-needed */ "./node_modules/scroll-into-view-if-needed/es/index.js"));

var _util = __webpack_require__(/*! ../util */ "./node_modules/antd/lib/form/util.js");

function toNamePathStr(name) {
  var namePath = (0, _util.toArray)(name);
  return namePath.join('_');
}

function useForm(form) {
  var _useRcForm = (0, _rcFieldForm.useForm)(),
      _useRcForm2 = (0, _slicedToArray2["default"])(_useRcForm, 1),
      rcForm = _useRcForm2[0];

  var itemsRef = React.useRef({});
  var wrapForm = React.useMemo(function () {
    return form || (0, _extends2["default"])((0, _extends2["default"])({}, rcForm), {
      __INTERNAL__: {
        itemRef: function itemRef(name) {
          return function (node) {
            var namePathStr = toNamePathStr(name);

            if (node) {
              itemsRef.current[namePathStr] = node;
            } else {
              delete itemsRef.current[namePathStr];
            }
          };
        }
      },
      scrollToField: function scrollToField(name) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var namePath = (0, _util.toArray)(name);
        var fieldId = (0, _util.getFieldId)(namePath, wrapForm.__INTERNAL__.name);
        var node = fieldId ? document.getElementById(fieldId) : null;

        if (node) {
          (0, _scrollIntoViewIfNeeded["default"])(node, (0, _extends2["default"])({
            scrollMode: 'if-needed',
            block: 'nearest'
          }, options));
        }
      },
      getFieldInstance: function getFieldInstance(name) {
        var namePathStr = toNamePathStr(name);
        return itemsRef.current[namePathStr];
      }
    });
  }, [form, rcForm]);
  return [wrapForm];
}

/***/ }),

/***/ "./node_modules/antd/lib/form/util.js":
/*!********************************************!*\
  !*** ./node_modules/antd/lib/form/util.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toArray = toArray;
exports.getFieldId = getFieldId;

function toArray(candidate) {
  if (candidate === undefined || candidate === false) return [];
  return Array.isArray(candidate) ? candidate : [candidate];
}

function getFieldId(namePath, formName) {
  if (!namePath.length) return undefined;
  var mergedId = namePath.join('_');
  return formName ? "".concat(formName, "_").concat(mergedId) : mergedId;
}

/***/ }),

/***/ "./node_modules/antd/lib/locale-provider/LocaleReceiver.js":
/*!*****************************************************************!*\
  !*** ./node_modules/antd/lib/locale-provider/LocaleReceiver.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireWildcard/index.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireDefault/index.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useLocaleReceiver = useLocaleReceiver;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/antd/node_modules/@babel/runtime/helpers/extends/index.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/antd/node_modules/@babel/runtime/helpers/classCallCheck/index.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/antd/node_modules/@babel/runtime/helpers/createClass/index.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/antd/node_modules/@babel/runtime/helpers/inherits/index.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createSuper */ "./node_modules/antd/node_modules/@babel/runtime/helpers/createSuper/index.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _default = _interopRequireDefault(__webpack_require__(/*! ./default */ "./node_modules/antd/lib/locale-provider/default.js"));

var _context = _interopRequireDefault(__webpack_require__(/*! ./context */ "./node_modules/antd/lib/locale-provider/context.js"));

var LocaleReceiver = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(LocaleReceiver, _React$Component);

  var _super = (0, _createSuper2["default"])(LocaleReceiver);

  function LocaleReceiver() {
    (0, _classCallCheck2["default"])(this, LocaleReceiver);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(LocaleReceiver, [{
    key: "getLocale",
    value: function getLocale() {
      var _this$props = this.props,
          componentName = _this$props.componentName,
          defaultLocale = _this$props.defaultLocale;
      var locale = defaultLocale || _default["default"][componentName || 'global'];
      var antLocale = this.context;
      var localeFromContext = componentName && antLocale ? antLocale[componentName] : {};
      return (0, _extends2["default"])((0, _extends2["default"])({}, typeof locale === 'function' ? locale() : locale), localeFromContext || {});
    }
  }, {
    key: "getLocaleCode",
    value: function getLocaleCode() {
      var antLocale = this.context;
      var localeCode = antLocale && antLocale.locale; // Had use LocaleProvide but didn't set locale

      if (antLocale && antLocale.exist && !localeCode) {
        return _default["default"].locale;
      }

      return localeCode;
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children(this.getLocale(), this.getLocaleCode(), this.context);
    }
  }]);
  return LocaleReceiver;
}(React.Component);

exports["default"] = LocaleReceiver;
LocaleReceiver.defaultProps = {
  componentName: 'global'
};
LocaleReceiver.contextType = _context["default"];

function useLocaleReceiver(componentName, defaultLocale) {
  var antLocale = React.useContext(_context["default"]);
  var componentLocale = React.useMemo(function () {
    var locale = defaultLocale || _default["default"][componentName || 'global'];
    var localeFromContext = componentName && antLocale ? antLocale[componentName] : {};
    return (0, _extends2["default"])((0, _extends2["default"])({}, typeof locale === 'function' ? locale() : locale), localeFromContext || {});
  }, [componentName, defaultLocale, antLocale]);
  return [componentLocale];
}

/***/ }),

/***/ "./node_modules/antd/lib/locale-provider/context.js":
/*!**********************************************************!*\
  !*** ./node_modules/antd/lib/locale-provider/context.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var LocaleContext = /*#__PURE__*/(0, _react.createContext)(undefined);
var _default = LocaleContext;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/locale-provider/default.js":
/*!**********************************************************!*\
  !*** ./node_modules/antd/lib/locale-provider/default.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireDefault/index.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default2 = _interopRequireDefault(__webpack_require__(/*! ../locale/default */ "./node_modules/antd/lib/locale/default.js"));

var _default = _default2["default"];
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/locale-provider/index.js":
/*!********************************************************!*\
  !*** ./node_modules/antd/lib/locale-provider/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireWildcard/index.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireDefault/index.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ANT_MARK = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/antd/node_modules/@babel/runtime/helpers/extends/index.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/antd/node_modules/@babel/runtime/helpers/classCallCheck/index.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/antd/node_modules/@babel/runtime/helpers/createClass/index.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/antd/node_modules/@babel/runtime/helpers/inherits/index.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createSuper */ "./node_modules/antd/node_modules/@babel/runtime/helpers/createSuper/index.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _devWarning = _interopRequireDefault(__webpack_require__(/*! ../_util/devWarning */ "./node_modules/antd/lib/_util/devWarning.js"));

var _locale = __webpack_require__(/*! ../modal/locale */ "./node_modules/antd/lib/modal/locale.js");

var _context = _interopRequireDefault(__webpack_require__(/*! ./context */ "./node_modules/antd/lib/locale-provider/context.js"));

var ANT_MARK = 'internalMark';
exports.ANT_MARK = ANT_MARK;

var LocaleProvider = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(LocaleProvider, _React$Component);

  var _super = (0, _createSuper2["default"])(LocaleProvider);

  function LocaleProvider(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, LocaleProvider);
    _this = _super.call(this, props);
    (0, _locale.changeConfirmLocale)(props.locale && props.locale.Modal);
    (0, _devWarning["default"])(props._ANT_MARK__ === ANT_MARK, 'LocaleProvider', '`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale');
    return _this;
  }

  (0, _createClass2["default"])(LocaleProvider, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var locale = this.props.locale;

      if (prevProps.locale !== locale) {
        (0, _locale.changeConfirmLocale)(locale && locale.Modal);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      (0, _locale.changeConfirmLocale)();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          locale = _this$props.locale,
          children = _this$props.children;
      return /*#__PURE__*/React.createElement(_context["default"].Provider, {
        value: (0, _extends2["default"])((0, _extends2["default"])({}, locale), {
          exist: true
        })
      }, children);
    }
  }]);
  return LocaleProvider;
}(React.Component);

exports["default"] = LocaleProvider;
LocaleProvider.defaultProps = {
  locale: {}
};

/***/ }),

/***/ "./node_modules/antd/lib/locale/default.js":
/*!*************************************************!*\
  !*** ./node_modules/antd/lib/locale/default.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireDefault/index.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _en_US = _interopRequireDefault(__webpack_require__(/*! rc-pagination/lib/locale/en_US */ "./node_modules/rc-pagination/lib/locale/en_US.js"));

var _en_US2 = _interopRequireDefault(__webpack_require__(/*! ../date-picker/locale/en_US */ "./node_modules/antd/lib/date-picker/locale/en_US.js"));

var _en_US3 = _interopRequireDefault(__webpack_require__(/*! ../time-picker/locale/en_US */ "./node_modules/antd/lib/time-picker/locale/en_US.js"));

var _en_US4 = _interopRequireDefault(__webpack_require__(/*! ../calendar/locale/en_US */ "./node_modules/antd/lib/calendar/locale/en_US.js"));

/* eslint-disable no-template-curly-in-string */
var typeTemplate = '${label} is not a valid ${type}';
var localeValues = {
  locale: 'en',
  Pagination: _en_US["default"],
  DatePicker: _en_US2["default"],
  TimePicker: _en_US3["default"],
  Calendar: _en_US4["default"],
  global: {
    placeholder: 'Please select'
  },
  Table: {
    filterTitle: 'Filter menu',
    filterConfirm: 'OK',
    filterReset: 'Reset',
    filterEmptyText: 'No filters',
    emptyText: 'No data',
    selectAll: 'Select current page',
    selectInvert: 'Invert current page',
    selectNone: 'Clear all data',
    selectionAll: 'Select all data',
    sortTitle: 'Sort',
    expand: 'Expand row',
    collapse: 'Collapse row',
    triggerDesc: 'Click to sort descending',
    triggerAsc: 'Click to sort ascending',
    cancelSort: 'Click to cancel sorting'
  },
  Modal: {
    okText: 'OK',
    cancelText: 'Cancel',
    justOkText: 'OK'
  },
  Popconfirm: {
    okText: 'OK',
    cancelText: 'Cancel'
  },
  Transfer: {
    titles: ['', ''],
    searchPlaceholder: 'Search here',
    itemUnit: 'item',
    itemsUnit: 'items',
    remove: 'Remove',
    selectCurrent: 'Select current page',
    removeCurrent: 'Remove current page',
    selectAll: 'Select all data',
    removeAll: 'Remove all data',
    selectInvert: 'Invert current page'
  },
  Upload: {
    uploading: 'Uploading...',
    removeFile: 'Remove file',
    uploadError: 'Upload error',
    previewFile: 'Preview file',
    downloadFile: 'Download file'
  },
  Empty: {
    description: 'No Data'
  },
  Icon: {
    icon: 'icon'
  },
  Text: {
    edit: 'Edit',
    copy: 'Copy',
    copied: 'Copied',
    expand: 'Expand'
  },
  PageHeader: {
    back: 'Back'
  },
  Form: {
    optional: '(optional)',
    defaultValidateMessages: {
      "default": 'Field validation error for ${label}',
      required: 'Please enter ${label}',
      "enum": '${label} must be one of [${enum}]',
      whitespace: '${label} cannot be a blank character',
      date: {
        format: '${label} date format is invalid',
        parse: '${label} cannot be converted to a date',
        invalid: '${label} is an invalid date'
      },
      types: {
        string: typeTemplate,
        method: typeTemplate,
        array: typeTemplate,
        object: typeTemplate,
        number: typeTemplate,
        date: typeTemplate,
        "boolean": typeTemplate,
        integer: typeTemplate,
        "float": typeTemplate,
        regexp: typeTemplate,
        email: typeTemplate,
        url: typeTemplate,
        hex: typeTemplate
      },
      string: {
        len: '${label} must be ${len} characters',
        min: '${label} must be at least ${min} characters',
        max: '${label} must be up to ${max} characters',
        range: '${label} must be between ${min}-${max} characters'
      },
      number: {
        len: '${label} must be equal to ${len}',
        min: '${label} must be minimum ${min}',
        max: '${label} must be maximum ${max}',
        range: '${label} must be between ${min}-${max}'
      },
      array: {
        len: 'Must be ${len} ${label}',
        min: 'At least ${min} ${label}',
        max: 'At most ${max} ${label}',
        range: 'The amount of ${label} must be between ${min}-${max}'
      },
      pattern: {
        mismatch: '${label} does not match the pattern ${pattern}'
      }
    }
  },
  Image: {
    preview: 'Preview'
  }
};
var _default = localeValues;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/message/hooks/useMessage.js":
/*!***********************************************************!*\
  !*** ./node_modules/antd/lib/message/hooks/useMessage.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireWildcard/index.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireDefault/index.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = createUseMessage;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/antd/node_modules/@babel/runtime/helpers/extends/index.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/antd/node_modules/@babel/runtime/helpers/slicedToArray/index.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _useNotification = _interopRequireDefault(__webpack_require__(/*! rc-notification/lib/useNotification */ "./node_modules/rc-notification/lib/useNotification.js"));

var _configProvider = __webpack_require__(/*! ../../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var _ = __webpack_require__(/*! .. */ "./node_modules/antd/lib/message/index.js");

function createUseMessage(getRcNotificationInstance, getRCNoticeProps) {
  var useMessage = function useMessage() {
    // We can only get content by render
    var getPrefixCls; // We create a proxy to handle delay created instance

    var innerInstance = null;
    var proxy = {
      add: function add(noticeProps, holderCallback) {
        innerInstance === null || innerInstance === void 0 ? void 0 : innerInstance.component.add(noticeProps, holderCallback);
      }
    };

    var _useRCNotification = (0, _useNotification["default"])(proxy),
        _useRCNotification2 = (0, _slicedToArray2["default"])(_useRCNotification, 2),
        hookNotify = _useRCNotification2[0],
        holder = _useRCNotification2[1];

    function notify(args) {
      var customizePrefixCls = args.prefixCls;
      var mergedPrefixCls = getPrefixCls('message', customizePrefixCls);
      var target = args.key || (0, _.getKeyThenIncreaseKey)();
      var closePromise = new Promise(function (resolve) {
        var callback = function callback() {
          if (typeof args.onClose === 'function') {
            args.onClose();
          }

          return resolve(true);
        };

        getRcNotificationInstance((0, _extends2["default"])((0, _extends2["default"])({}, args), {
          prefixCls: mergedPrefixCls
        }), function (_ref) {
          var prefixCls = _ref.prefixCls,
              instance = _ref.instance;
          innerInstance = instance;
          hookNotify(getRCNoticeProps((0, _extends2["default"])((0, _extends2["default"])({}, args), {
            key: target,
            onClose: callback
          }), prefixCls));
        });
      });

      var result = function result() {
        if (innerInstance) {
          innerInstance.removeNotice(target);
        }
      };

      result.then = function (filled, rejected) {
        return closePromise.then(filled, rejected);
      };

      result.promise = closePromise;
      return result;
    } // Fill functions


    var hookApiRef = React.useRef({});
    hookApiRef.current.open = notify;
    ['success', 'info', 'warning', 'error', 'loading'].forEach(function (type) {
      return (0, _.attachTypeApi)(hookApiRef.current, type);
    });
    return [hookApiRef.current, /*#__PURE__*/React.createElement(_configProvider.ConfigConsumer, {
      key: "holder"
    }, function (context) {
      getPrefixCls = context.getPrefixCls;
      return holder;
    })];
  };

  return useMessage;
}

/***/ }),

/***/ "./node_modules/antd/lib/message/index.js":
/*!************************************************!*\
  !*** ./node_modules/antd/lib/message/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireWildcard/index.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireDefault/index.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getKeyThenIncreaseKey = getKeyThenIncreaseKey;
exports.attachTypeApi = attachTypeApi;
exports["default"] = exports.getInstance = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/antd/node_modules/@babel/runtime/helpers/extends/index.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/antd/node_modules/@babel/runtime/helpers/defineProperty/index.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _rcNotification = _interopRequireDefault(__webpack_require__(/*! rc-notification */ "./node_modules/rc-notification/es/index.js"));

var _LoadingOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/LoadingOutlined */ "./node_modules/@ant-design/icons/LoadingOutlined.js"));

var _ExclamationCircleFilled = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/ExclamationCircleFilled */ "./node_modules/@ant-design/icons/ExclamationCircleFilled.js"));

var _CloseCircleFilled = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/CloseCircleFilled */ "./node_modules/@ant-design/icons/CloseCircleFilled.js"));

var _CheckCircleFilled = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/CheckCircleFilled */ "./node_modules/@ant-design/icons/CheckCircleFilled.js"));

var _InfoCircleFilled = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/InfoCircleFilled */ "./node_modules/@ant-design/icons/InfoCircleFilled.js"));

var _useMessage = _interopRequireDefault(__webpack_require__(/*! ./hooks/useMessage */ "./node_modules/antd/lib/message/hooks/useMessage.js"));

var messageInstance;
var defaultDuration = 3;
var defaultTop;
var key = 1;
var localPrefixCls = 'ant-message';
var transitionName = 'move-up';
var getContainer;
var maxCount;
var rtl = false;

function getKeyThenIncreaseKey() {
  return key++;
}

function setMessageConfig(options) {
  if (options.top !== undefined) {
    defaultTop = options.top;
    messageInstance = null; // delete messageInstance for new defaultTop
  }

  if (options.duration !== undefined) {
    defaultDuration = options.duration;
  }

  if (options.prefixCls !== undefined) {
    localPrefixCls = options.prefixCls;
  }

  if (options.getContainer !== undefined) {
    getContainer = options.getContainer;
  }

  if (options.transitionName !== undefined) {
    transitionName = options.transitionName;
    messageInstance = null; // delete messageInstance for new transitionName
  }

  if (options.maxCount !== undefined) {
    maxCount = options.maxCount;
    messageInstance = null;
  }

  if (options.rtl !== undefined) {
    rtl = options.rtl;
  }
}

function getRCNotificationInstance(args, callback) {
  var prefixCls = args.prefixCls || localPrefixCls;

  if (messageInstance) {
    callback({
      prefixCls: prefixCls,
      instance: messageInstance
    });
    return;
  }

  _rcNotification["default"].newInstance({
    prefixCls: prefixCls,
    transitionName: transitionName,
    style: {
      top: defaultTop
    },
    getContainer: getContainer,
    maxCount: maxCount
  }, function (instance) {
    if (messageInstance) {
      callback({
        prefixCls: prefixCls,
        instance: messageInstance
      });
      return;
    }

    messageInstance = instance;
    callback({
      prefixCls: prefixCls,
      instance: instance
    });
  });
}

var typeToIcon = {
  info: _InfoCircleFilled["default"],
  success: _CheckCircleFilled["default"],
  error: _CloseCircleFilled["default"],
  warning: _ExclamationCircleFilled["default"],
  loading: _LoadingOutlined["default"]
};

function getRCNoticeProps(args, prefixCls) {
  var _classNames;

  var duration = args.duration !== undefined ? args.duration : defaultDuration;
  var IconComponent = typeToIcon[args.type];
  var messageClass = (0, _classnames["default"])("".concat(prefixCls, "-custom-content"), (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-").concat(args.type), args.type), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-rtl"), rtl === true), _classNames));
  return {
    key: args.key,
    duration: duration,
    style: args.style || {},
    className: args.className,
    content: /*#__PURE__*/React.createElement("div", {
      className: messageClass
    }, args.icon || IconComponent && /*#__PURE__*/React.createElement(IconComponent, null), /*#__PURE__*/React.createElement("span", null, args.content)),
    onClose: args.onClose,
    onClick: args.onClick
  };
}

function notice(args) {
  var target = args.key || key++;
  var closePromise = new Promise(function (resolve) {
    var callback = function callback() {
      if (typeof args.onClose === 'function') {
        args.onClose();
      }

      return resolve(true);
    };

    getRCNotificationInstance(args, function (_ref) {
      var prefixCls = _ref.prefixCls,
          instance = _ref.instance;
      instance.notice(getRCNoticeProps((0, _extends2["default"])((0, _extends2["default"])({}, args), {
        key: target,
        onClose: callback
      }), prefixCls));
    });
  });

  var result = function result() {
    if (messageInstance) {
      messageInstance.removeNotice(target);
    }
  };

  result.then = function (filled, rejected) {
    return closePromise.then(filled, rejected);
  };

  result.promise = closePromise;
  return result;
}

function isArgsProps(content) {
  return Object.prototype.toString.call(content) === '[object Object]' && !!content.content;
}

var api = {
  open: notice,
  config: setMessageConfig,
  destroy: function destroy(messageKey) {
    if (messageInstance) {
      if (messageKey) {
        var _messageInstance = messageInstance,
            removeNotice = _messageInstance.removeNotice;
        removeNotice(messageKey);
      } else {
        var _messageInstance2 = messageInstance,
            destroy = _messageInstance2.destroy;
        destroy();
        messageInstance = null;
      }
    }
  }
};

function attachTypeApi(originalApi, type) {
  originalApi[type] = function (content, duration, onClose) {
    if (isArgsProps(content)) {
      return originalApi.open((0, _extends2["default"])((0, _extends2["default"])({}, content), {
        type: type
      }));
    }

    if (typeof duration === 'function') {
      onClose = duration;
      duration = undefined;
    }

    return originalApi.open({
      content: content,
      duration: duration,
      type: type,
      onClose: onClose
    });
  };
}

['success', 'info', 'warning', 'error', 'loading'].forEach(function (type) {
  return attachTypeApi(api, type);
});
api.warn = api.warning;
api.useMessage = (0, _useMessage["default"])(getRCNotificationInstance, getRCNoticeProps);
/** @private test only function. Not work on production */

var getInstance = function getInstance() {
  return  false ? undefined : null;
};

exports.getInstance = getInstance;
var _default = api;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/modal/locale.js":
/*!***********************************************!*\
  !*** ./node_modules/antd/lib/modal/locale.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireDefault/index.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changeConfirmLocale = changeConfirmLocale;
exports.getConfirmLocale = getConfirmLocale;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/antd/node_modules/@babel/runtime/helpers/extends/index.js"));

var _default = _interopRequireDefault(__webpack_require__(/*! ../locale/default */ "./node_modules/antd/lib/locale/default.js"));

var runtimeLocale = (0, _extends2["default"])({}, _default["default"].Modal);

function changeConfirmLocale(newLocale) {
  if (newLocale) {
    runtimeLocale = (0, _extends2["default"])((0, _extends2["default"])({}, runtimeLocale), newLocale);
  } else {
    runtimeLocale = (0, _extends2["default"])({}, _default["default"].Modal);
  }
}

function getConfirmLocale() {
  return runtimeLocale;
}

/***/ }),

/***/ "./node_modules/antd/lib/notification/hooks/useNotification.js":
/*!*********************************************************************!*\
  !*** ./node_modules/antd/lib/notification/hooks/useNotification.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireWildcard/index.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireDefault/index.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = createUseNotification;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/antd/node_modules/@babel/runtime/helpers/extends/index.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/antd/node_modules/@babel/runtime/helpers/slicedToArray/index.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _useNotification = _interopRequireDefault(__webpack_require__(/*! rc-notification/lib/useNotification */ "./node_modules/rc-notification/lib/useNotification.js"));

var _configProvider = __webpack_require__(/*! ../../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

function createUseNotification(getNotificationInstance, getRCNoticeProps) {
  var useNotification = function useNotification() {
    // We can only get content by render
    var getPrefixCls; // We create a proxy to handle delay created instance

    var innerInstance = null;
    var proxy = {
      add: function add(noticeProps, holderCallback) {
        innerInstance === null || innerInstance === void 0 ? void 0 : innerInstance.component.add(noticeProps, holderCallback);
      }
    };

    var _useRCNotification = (0, _useNotification["default"])(proxy),
        _useRCNotification2 = (0, _slicedToArray2["default"])(_useRCNotification, 2),
        hookNotify = _useRCNotification2[0],
        holder = _useRCNotification2[1];

    function notify(args) {
      var customizePrefixCls = args.prefixCls;
      var mergedPrefixCls = getPrefixCls('notification', customizePrefixCls);
      getNotificationInstance((0, _extends2["default"])((0, _extends2["default"])({}, args), {
        prefixCls: mergedPrefixCls
      }), function (_ref) {
        var prefixCls = _ref.prefixCls,
            instance = _ref.instance;
        innerInstance = instance;
        hookNotify(getRCNoticeProps(args, prefixCls));
      });
    } // Fill functions


    var hookApiRef = React.useRef({});
    hookApiRef.current.open = notify;
    ['success', 'info', 'warning', 'error'].forEach(function (type) {
      hookApiRef.current[type] = function (args) {
        return hookApiRef.current.open((0, _extends2["default"])((0, _extends2["default"])({}, args), {
          type: type
        }));
      };
    });
    return [hookApiRef.current, /*#__PURE__*/React.createElement(_configProvider.ConfigConsumer, {
      key: "holder"
    }, function (context) {
      getPrefixCls = context.getPrefixCls;
      return holder;
    })];
  };

  return useNotification;
}

/***/ }),

/***/ "./node_modules/antd/lib/notification/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/antd/lib/notification/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireWildcard/index.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireDefault/index.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.getInstance = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/antd/node_modules/@babel/runtime/regenerator/index.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/antd/node_modules/@babel/runtime/helpers/extends/index.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/antd/node_modules/@babel/runtime/helpers/defineProperty/index.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _rcNotification = _interopRequireDefault(__webpack_require__(/*! rc-notification */ "./node_modules/rc-notification/es/index.js"));

var _CloseOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/CloseOutlined */ "./node_modules/@ant-design/icons/CloseOutlined.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _CheckCircleOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/CheckCircleOutlined */ "./node_modules/@ant-design/icons/CheckCircleOutlined.js"));

var _CloseCircleOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/CloseCircleOutlined */ "./node_modules/@ant-design/icons/CloseCircleOutlined.js"));

var _ExclamationCircleOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/ExclamationCircleOutlined */ "./node_modules/@ant-design/icons/ExclamationCircleOutlined.js"));

var _InfoCircleOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/InfoCircleOutlined */ "./node_modules/@ant-design/icons/InfoCircleOutlined.js"));

var _useNotification = _interopRequireDefault(__webpack_require__(/*! ./hooks/useNotification */ "./node_modules/antd/lib/notification/hooks/useNotification.js"));

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var notificationInstance = {};
var defaultDuration = 4.5;
var defaultTop = 24;
var defaultBottom = 24;
var defaultPrefixCls = 'ant-notification';
var defaultPlacement = 'topRight';
var defaultGetContainer;
var defaultCloseIcon;
var rtl = false;

function setNotificationConfig(options) {
  var duration = options.duration,
      placement = options.placement,
      bottom = options.bottom,
      top = options.top,
      getContainer = options.getContainer,
      closeIcon = options.closeIcon,
      prefixCls = options.prefixCls;

  if (prefixCls !== undefined) {
    defaultPrefixCls = prefixCls;
  }

  if (duration !== undefined) {
    defaultDuration = duration;
  }

  if (placement !== undefined) {
    defaultPlacement = placement;
  } else if (options.rtl) {
    defaultPlacement = 'topLeft';
  }

  if (bottom !== undefined) {
    defaultBottom = bottom;
  }

  if (top !== undefined) {
    defaultTop = top;
  }

  if (getContainer !== undefined) {
    defaultGetContainer = getContainer;
  }

  if (closeIcon !== undefined) {
    defaultCloseIcon = closeIcon;
  }

  if (options.rtl !== undefined) {
    rtl = options.rtl;
  }
}

function getPlacementStyle(placement) {
  var top = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultTop;
  var bottom = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultBottom;
  var style;

  switch (placement) {
    case 'topLeft':
      style = {
        left: 0,
        top: top,
        bottom: 'auto'
      };
      break;

    case 'topRight':
      style = {
        right: 0,
        top: top,
        bottom: 'auto'
      };
      break;

    case 'bottomLeft':
      style = {
        left: 0,
        top: 'auto',
        bottom: bottom
      };
      break;

    default:
      style = {
        right: 0,
        top: 'auto',
        bottom: bottom
      };
      break;
  }

  return style;
}

function getNotificationInstance(args, callback) {
  var _args$placement = args.placement,
      placement = _args$placement === void 0 ? defaultPlacement : _args$placement,
      top = args.top,
      bottom = args.bottom,
      _args$getContainer = args.getContainer,
      getContainer = _args$getContainer === void 0 ? defaultGetContainer : _args$getContainer,
      _args$closeIcon = args.closeIcon,
      closeIcon = _args$closeIcon === void 0 ? defaultCloseIcon : _args$closeIcon;
  var outerPrefixCls = args.prefixCls || defaultPrefixCls;
  var prefixCls = "".concat(outerPrefixCls, "-notice");
  var cacheKey = "".concat(outerPrefixCls, "-").concat(placement);
  var cacheInstance = notificationInstance[cacheKey];

  if (cacheInstance) {
    Promise.resolve(cacheInstance).then(function (instance) {
      callback({
        prefixCls: prefixCls,
        instance: instance
      });
    });
    return;
  }

  var closeIconToRender = /*#__PURE__*/React.createElement("span", {
    className: "".concat(outerPrefixCls, "-close-x")
  }, closeIcon || /*#__PURE__*/React.createElement(_CloseOutlined["default"], {
    className: "".concat(outerPrefixCls, "-close-icon")
  }));
  var notificationClass = (0, _classnames["default"])("".concat(outerPrefixCls, "-").concat(placement), (0, _defineProperty2["default"])({}, "".concat(outerPrefixCls, "-rtl"), rtl === true));
  notificationInstance[cacheKey] = new Promise(function (resolve) {
    _rcNotification["default"].newInstance({
      prefixCls: outerPrefixCls,
      className: notificationClass,
      style: getPlacementStyle(placement, top, bottom),
      getContainer: getContainer,
      closeIcon: closeIconToRender
    }, function (notification) {
      resolve(notification);
      callback({
        prefixCls: prefixCls,
        instance: notification
      });
    });
  });
}

var typeToIcon = {
  success: _CheckCircleOutlined["default"],
  info: _InfoCircleOutlined["default"],
  error: _CloseCircleOutlined["default"],
  warning: _ExclamationCircleOutlined["default"]
};

function getRCNoticeProps(args, prefixCls) {
  var duration = args.duration === undefined ? defaultDuration : args.duration;
  var iconNode = null;

  if (args.icon) {
    iconNode = /*#__PURE__*/React.createElement("span", {
      className: "".concat(prefixCls, "-icon")
    }, args.icon);
  } else if (args.type) {
    iconNode = /*#__PURE__*/React.createElement(typeToIcon[args.type] || null, {
      className: "".concat(prefixCls, "-icon ").concat(prefixCls, "-icon-").concat(args.type)
    });
  }

  var autoMarginTag = !args.description && iconNode ? /*#__PURE__*/React.createElement("span", {
    className: "".concat(prefixCls, "-message-single-line-auto-margin")
  }) : null;
  return {
    content: /*#__PURE__*/React.createElement("div", {
      className: iconNode ? "".concat(prefixCls, "-with-icon") : '',
      role: "alert"
    }, iconNode, /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-message")
    }, autoMarginTag, args.message), /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-description")
    }, args.description), args.btn ? /*#__PURE__*/React.createElement("span", {
      className: "".concat(prefixCls, "-btn")
    }, args.btn) : null),
    duration: duration,
    closable: true,
    onClose: args.onClose,
    onClick: args.onClick,
    key: args.key,
    style: args.style || {},
    className: args.className
  };
}

function notice(args) {
  getNotificationInstance(args, function (_ref) {
    var prefixCls = _ref.prefixCls,
        instance = _ref.instance;
    instance.notice(getRCNoticeProps(args, prefixCls));
  });
}

var api = {
  open: notice,
  close: function close(key) {
    Object.keys(notificationInstance).forEach(function (cacheKey) {
      return Promise.resolve(notificationInstance[cacheKey]).then(function (instance) {
        instance.removeNotice(key);
      });
    });
  },
  config: setNotificationConfig,
  destroy: function destroy() {
    Object.keys(notificationInstance).forEach(function (cacheKey) {
      Promise.resolve(notificationInstance[cacheKey]).then(function (instance) {
        instance.destroy();
      });
      delete notificationInstance[cacheKey]; // lgtm[js/missing-await]
    });
  }
};
['success', 'info', 'warning', 'error'].forEach(function (type) {
  api[type] = function (args) {
    return api.open((0, _extends2["default"])((0, _extends2["default"])({}, args), {
      type: type
    }));
  };
});
api.warn = api.warning;
api.useNotification = (0, _useNotification["default"])(getNotificationInstance, getRCNoticeProps);
/** @private test only function. Not work on production */

var getInstance = function getInstance(cacheKey) {
  return __awaiter(void 0, void 0, void 0, /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return",  false ? undefined : null);

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
};

exports.getInstance = getInstance;
var _default = api;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/time-picker/locale/en_US.js":
/*!***********************************************************!*\
  !*** ./node_modules/antd/lib/time-picker/locale/en_US.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var locale = {
  placeholder: 'Select time',
  rangePlaceholder: ['Start time', 'End time']
};
var _default = locale;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/node_modules/@babel/runtime/helpers/classCallCheck/index.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/antd/node_modules/@babel/runtime/helpers/classCallCheck/index.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/antd/node_modules/@babel/runtime/helpers/createClass/index.js":
/*!************************************************************************************!*\
  !*** ./node_modules/antd/node_modules/@babel/runtime/helpers/createClass/index.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/antd/node_modules/@babel/runtime/helpers/createSuper/index.js":
/*!************************************************************************************!*\
  !*** ./node_modules/antd/node_modules/@babel/runtime/helpers/createSuper/index.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/antd/node_modules/@babel/runtime/helpers/getPrototypeOf/index.js");

var isNativeReflectConstruct = __webpack_require__(/*! @babel/runtime/helpers/isNativeReflectConstruct */ "./node_modules/antd/node_modules/@babel/runtime/helpers/isNativeReflectConstruct/index.js");

var possibleConstructorReturn = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/antd/node_modules/@babel/runtime/helpers/possibleConstructorReturn/index.js");

function _createSuper(Derived) {
  var hasNativeReflectConstruct = isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return possibleConstructorReturn(this, result);
  };
}

module.exports = _createSuper;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/antd/node_modules/@babel/runtime/helpers/defineProperty/index.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/antd/node_modules/@babel/runtime/helpers/defineProperty/index.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/antd/node_modules/@babel/runtime/helpers/extends/index.js":
/*!********************************************************************************!*\
  !*** ./node_modules/antd/node_modules/@babel/runtime/helpers/extends/index.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _extends.apply(this, arguments);
}

module.exports = _extends;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/antd/node_modules/@babel/runtime/helpers/inherits/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/antd/node_modules/@babel/runtime/helpers/inherits/index.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! @babel/runtime/helpers/setPrototypeOf */ "./node_modules/antd/node_modules/@babel/runtime/helpers/setPrototypeOf/index.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireDefault/index.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireDefault/index.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireWildcard/index.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireWildcard/index.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/antd/node_modules/@babel/runtime/helpers/typeof/index.js")["default"];

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/antd/node_modules/@babel/runtime/helpers/slicedToArray/index.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/antd/node_modules/@babel/runtime/helpers/slicedToArray/index.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! @babel/runtime/helpers/arrayWithHoles */ "./node_modules/antd/node_modules/@babel/runtime/helpers/arrayWithHoles/index.js");

var iterableToArrayLimit = __webpack_require__(/*! @babel/runtime/helpers/iterableToArrayLimit */ "./node_modules/antd/node_modules/@babel/runtime/helpers/iterableToArrayLimit/index.js");

var unsupportedIterableToArray = __webpack_require__(/*! @babel/runtime/helpers/unsupportedIterableToArray */ "./node_modules/antd/node_modules/@babel/runtime/helpers/unsupportedIterableToArray/index.js");

var nonIterableRest = __webpack_require__(/*! @babel/runtime/helpers/nonIterableRest */ "./node_modules/antd/node_modules/@babel/runtime/helpers/nonIterableRest/index.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/rc-notification/lib/Notice.js":
/*!****************************************************!*\
  !*** ./node_modules/rc-notification/lib/Notice.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createSuper */ "./node_modules/@babel/runtime/helpers/createSuper.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var Notice = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(Notice, _Component);

  var _super = (0, _createSuper2.default)(Notice);

  function Notice() {
    var _this;

    (0, _classCallCheck2.default)(this, Notice);
    _this = _super.apply(this, arguments);
    _this.closeTimer = null;

    _this.close = function (e) {
      if (e) {
        e.stopPropagation();
      }

      _this.clearCloseTimer();

      var _this$props = _this.props,
          onClose = _this$props.onClose,
          noticeKey = _this$props.noticeKey;

      if (onClose) {
        onClose(noticeKey);
      }
    };

    _this.startCloseTimer = function () {
      if (_this.props.duration) {
        _this.closeTimer = window.setTimeout(function () {
          _this.close();
        }, _this.props.duration * 1000);
      }
    };

    _this.clearCloseTimer = function () {
      if (_this.closeTimer) {
        clearTimeout(_this.closeTimer);
        _this.closeTimer = null;
      }
    };

    return _this;
  }

  (0, _createClass2.default)(Notice, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.startCloseTimer();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.duration !== prevProps.duration || this.props.updateMark !== prevProps.updateMark) {
        this.restartCloseTimer();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.clearCloseTimer();
    }
  }, {
    key: "restartCloseTimer",
    value: function restartCloseTimer() {
      this.clearCloseTimer();
      this.startCloseTimer();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          prefixCls = _this$props2.prefixCls,
          className = _this$props2.className,
          closable = _this$props2.closable,
          closeIcon = _this$props2.closeIcon,
          style = _this$props2.style,
          onClick = _this$props2.onClick,
          children = _this$props2.children,
          holder = _this$props2.holder;
      var componentClass = "".concat(prefixCls, "-notice");
      var dataOrAriaAttributeProps = Object.keys(this.props).reduce(function (acc, key) {
        if (key.substr(0, 5) === 'data-' || key.substr(0, 5) === 'aria-' || key === 'role') {
          acc[key] = _this2.props[key];
        }

        return acc;
      }, {});
      var node = React.createElement("div", Object.assign({
        className: (0, _classnames.default)(componentClass, className, (0, _defineProperty2.default)({}, "".concat(componentClass, "-closable"), closable)),
        style: style,
        onMouseEnter: this.clearCloseTimer,
        onMouseLeave: this.startCloseTimer,
        onClick: onClick
      }, dataOrAriaAttributeProps), React.createElement("div", {
        className: "".concat(componentClass, "-content")
      }, children), closable ? React.createElement("a", {
        tabIndex: 0,
        onClick: this.close,
        className: "".concat(componentClass, "-close")
      }, closeIcon || React.createElement("span", {
        className: "".concat(componentClass, "-close-x")
      })) : null);

      if (holder) {
        return _reactDom.default.createPortal(node, holder);
      }

      return node;
    }
  }]);
  return Notice;
}(React.Component);

exports.default = Notice;
Notice.defaultProps = {
  onClose: function onClose() {},
  duration: 1.5
};

/***/ }),

/***/ "./node_modules/rc-notification/lib/useNotification.js":
/*!*************************************************************!*\
  !*** ./node_modules/rc-notification/lib/useNotification.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useNotification;

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Notice = _interopRequireDefault(__webpack_require__(/*! ./Notice */ "./node_modules/rc-notification/lib/Notice.js"));

function useNotification(notificationInstance) {
  var createdRef = React.useRef({});

  var _React$useState = React.useState([]),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      elements = _React$useState2[0],
      setElements = _React$useState2[1];

  function notify(noticeProps) {
    notificationInstance.add(noticeProps, function (div, props) {
      var key = props.key;

      if (div && !createdRef.current[key]) {
        var noticeEle = React.createElement(_Notice.default, Object.assign({}, props, {
          holder: div
        }));
        createdRef.current[key] = noticeEle;
        setElements(function (originElements) {
          return [].concat((0, _toConsumableArray2.default)(originElements), [noticeEle]);
        });
      }
    });
  }

  return [notify, React.createElement(React.Fragment, null, elements)];
}

/***/ }),

/***/ "./node_modules/rc-pagination/lib/locale/en_US.js":
/*!********************************************************!*\
  !*** ./node_modules/rc-pagination/lib/locale/en_US.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  // Options.jsx
  items_per_page: '/ page',
  jump_to: 'Go to',
  jump_to_confirm: 'confirm',
  page: '',
  // Pagination.jsx
  prev_page: 'Previous Page',
  next_page: 'Next Page',
  prev_5: 'Previous 5 Pages',
  next_5: 'Next 5 Pages',
  prev_3: 'Previous 3 Pages',
  next_3: 'Next 3 Pages'
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/rc-picker/lib/locale/en_US.js":
/*!****************************************************!*\
  !*** ./node_modules/rc-picker/lib/locale/en_US.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var locale = {
  locale: 'en_US',
  today: 'Today',
  now: 'Now',
  backToToday: 'Back to today',
  ok: 'Ok',
  clear: 'Clear',
  month: 'Month',
  year: 'Year',
  timeSelect: 'select time',
  dateSelect: 'select date',
  weekSelect: 'Choose a week',
  monthSelect: 'Choose a month',
  yearSelect: 'Choose a year',
  decadeSelect: 'Choose a decade',
  yearFormat: 'YYYY',
  dateFormat: 'M/D/YYYY',
  dayFormat: 'D',
  dateTimeFormat: 'M/D/YYYY HH:mm:ss',
  monthBeforeYear: true,
  previousMonth: 'Previous month (PageUp)',
  nextMonth: 'Next month (PageDown)',
  previousYear: 'Last year (Control + left)',
  nextYear: 'Next year (Control + right)',
  previousDecade: 'Last decade',
  nextDecade: 'Next decade',
  previousCentury: 'Last century',
  nextCentury: 'Next century'
};
var _default = locale;
exports.default = _default;

/***/ }),

/***/ "./node_modules/rc-util/lib/hooks/useMemo.js":
/*!***************************************************!*\
  !*** ./node_modules/rc-util/lib/hooks/useMemo.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/rc-util/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useMemo;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function useMemo(getValue, condition, shouldUpdate) {
  var cacheRef = React.useRef({});

  if (!('value' in cacheRef.current) || shouldUpdate(cacheRef.current.condition, condition)) {
    cacheRef.current.value = getValue();
    cacheRef.current.condition = condition;
  }

  return cacheRef.current.value;
}

/***/ }),

/***/ "./node_modules/rc-util/lib/omit.js":
/*!******************************************!*\
  !*** ./node_modules/rc-util/lib/omit.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/rc-util/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = omit;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/rc-util/node_modules/@babel/runtime/helpers/defineProperty.js"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function omit(obj, fields) {
  var clone = _objectSpread({}, obj);

  if (Array.isArray(fields)) {
    fields.forEach(function (key) {
      delete clone[key];
    });
  }

  return clone;
}

/***/ }),

/***/ "./node_modules/rc-util/lib/warning.js":
/*!*********************************************!*\
  !*** ./node_modules/rc-util/lib/warning.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.warning = warning;
exports.note = note;
exports.resetWarned = resetWarned;
exports.call = call;
exports.warningOnce = warningOnce;
exports.noteOnce = noteOnce;
exports.default = void 0;

/* eslint-disable no-console */
var warned = {};

function warning(valid, message) {
  // Support uglify
  if ( true && !valid && console !== undefined) {
    console.error("Warning: ".concat(message));
  }
}

function note(valid, message) {
  // Support uglify
  if ( true && !valid && console !== undefined) {
    console.warn("Note: ".concat(message));
  }
}

function resetWarned() {
  warned = {};
}

function call(method, valid, message) {
  if (!valid && !warned[message]) {
    method(false, message);
    warned[message] = true;
  }
}

function warningOnce(valid, message) {
  call(warning, valid, message);
}

function noteOnce(valid, message) {
  call(note, valid, message);
}

var _default = warningOnce;
/* eslint-enable */

exports.default = _default;

/***/ }),

/***/ "./node_modules/rc-util/node_modules/@babel/runtime/helpers/defineProperty.js":
/*!************************************************************************************!*\
  !*** ./node_modules/rc-util/node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/rc-util/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/rc-util/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/rc-util/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/rc-util/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/rc-util/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/rc-util/node_modules/@babel/runtime/helpers/typeof.js":
/*!****************************************************************************!*\
  !*** ./node_modules/rc-util/node_modules/@babel/runtime/helpers/typeof.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vSW5wdXQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYW50LWRlc2lnbi9pY29ucy1zdmcvbGliL2Fzbi9DaGVja0NpcmNsZUZpbGxlZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BhbnQtZGVzaWduL2ljb25zLXN2Zy9saWIvYXNuL0NoZWNrQ2lyY2xlT3V0bGluZWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYW50LWRlc2lnbi9pY29ucy1zdmcvbGliL2Fzbi9DbG9zZUNpcmNsZUZpbGxlZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BhbnQtZGVzaWduL2ljb25zLXN2Zy9saWIvYXNuL0Nsb3NlQ2lyY2xlT3V0bGluZWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYW50LWRlc2lnbi9pY29ucy1zdmcvbGliL2Fzbi9DbG9zZU91dGxpbmVkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGFudC1kZXNpZ24vaWNvbnMtc3ZnL2xpYi9hc24vRXhjbGFtYXRpb25DaXJjbGVGaWxsZWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYW50LWRlc2lnbi9pY29ucy1zdmcvbGliL2Fzbi9FeGNsYW1hdGlvbkNpcmNsZU91dGxpbmVkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGFudC1kZXNpZ24vaWNvbnMtc3ZnL2xpYi9hc24vSW5mb0NpcmNsZUZpbGxlZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BhbnQtZGVzaWduL2ljb25zLXN2Zy9saWIvYXNuL0luZm9DaXJjbGVPdXRsaW5lZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BhbnQtZGVzaWduL2ljb25zLXN2Zy9saWIvYXNuL0xvYWRpbmdPdXRsaW5lZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BhbnQtZGVzaWduL2ljb25zL0NoZWNrQ2lyY2xlRmlsbGVkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGFudC1kZXNpZ24vaWNvbnMvQ2hlY2tDaXJjbGVPdXRsaW5lZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BhbnQtZGVzaWduL2ljb25zL0Nsb3NlQ2lyY2xlRmlsbGVkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGFudC1kZXNpZ24vaWNvbnMvQ2xvc2VDaXJjbGVPdXRsaW5lZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BhbnQtZGVzaWduL2ljb25zL0Nsb3NlT3V0bGluZWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYW50LWRlc2lnbi9pY29ucy9FeGNsYW1hdGlvbkNpcmNsZUZpbGxlZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BhbnQtZGVzaWduL2ljb25zL0V4Y2xhbWF0aW9uQ2lyY2xlT3V0bGluZWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYW50LWRlc2lnbi9pY29ucy9JbmZvQ2lyY2xlRmlsbGVkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGFudC1kZXNpZ24vaWNvbnMvSW5mb0NpcmNsZU91dGxpbmVkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGFudC1kZXNpZ24vaWNvbnMvTG9hZGluZ091dGxpbmVkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGFudC1kZXNpZ24vaWNvbnMvbGliL2NvbXBvbmVudHMvQW50ZEljb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYW50LWRlc2lnbi9pY29ucy9saWIvY29tcG9uZW50cy9Db250ZXh0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGFudC1kZXNpZ24vaWNvbnMvbGliL2NvbXBvbmVudHMvSWNvbkJhc2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYW50LWRlc2lnbi9pY29ucy9saWIvY29tcG9uZW50cy90d29Ub25lUHJpbWFyeUNvbG9yLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGFudC1kZXNpZ24vaWNvbnMvbGliL2ljb25zL0NoZWNrQ2lyY2xlRmlsbGVkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGFudC1kZXNpZ24vaWNvbnMvbGliL2ljb25zL0NoZWNrQ2lyY2xlT3V0bGluZWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYW50LWRlc2lnbi9pY29ucy9saWIvaWNvbnMvQ2xvc2VDaXJjbGVGaWxsZWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYW50LWRlc2lnbi9pY29ucy9saWIvaWNvbnMvQ2xvc2VDaXJjbGVPdXRsaW5lZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BhbnQtZGVzaWduL2ljb25zL2xpYi9pY29ucy9DbG9zZU91dGxpbmVkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGFudC1kZXNpZ24vaWNvbnMvbGliL2ljb25zL0V4Y2xhbWF0aW9uQ2lyY2xlRmlsbGVkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGFudC1kZXNpZ24vaWNvbnMvbGliL2ljb25zL0V4Y2xhbWF0aW9uQ2lyY2xlT3V0bGluZWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYW50LWRlc2lnbi9pY29ucy9saWIvaWNvbnMvSW5mb0NpcmNsZUZpbGxlZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BhbnQtZGVzaWduL2ljb25zL2xpYi9pY29ucy9JbmZvQ2lyY2xlT3V0bGluZWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYW50LWRlc2lnbi9pY29ucy9saWIvaWNvbnMvTG9hZGluZ091dGxpbmVkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGFudC1kZXNpZ24vaWNvbnMvbGliL3V0aWxzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVTdXBlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0U3ByZWFkMi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9fdXRpbC9kZXZXYXJuaW5nLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvY2FsZW5kYXIvbG9jYWxlL2VuX1VTLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvY29uZmlnLXByb3ZpZGVyL1NpemVDb250ZXh0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvY29uZmlnLXByb3ZpZGVyL2NvbnRleHQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9jb25maWctcHJvdmlkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9jb25maWctcHJvdmlkZXIvcmVuZGVyRW1wdHkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9kYXRlLXBpY2tlci9sb2NhbGUvZW5fVVMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9lbXB0eS9lbXB0eS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2VtcHR5L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvZW1wdHkvc2ltcGxlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvZm9ybS9Gb3JtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvZm9ybS9jb250ZXh0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvZm9ybS9ob29rcy91c2VGb3JtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvZm9ybS91dGlsLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvbG9jYWxlLXByb3ZpZGVyL0xvY2FsZVJlY2VpdmVyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvbG9jYWxlLXByb3ZpZGVyL2NvbnRleHQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9sb2NhbGUtcHJvdmlkZXIvZGVmYXVsdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2xvY2FsZS1wcm92aWRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2xvY2FsZS9kZWZhdWx0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvbWVzc2FnZS9ob29rcy91c2VNZXNzYWdlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvbWVzc2FnZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL21vZGFsL2xvY2FsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL25vdGlmaWNhdGlvbi9ob29rcy91c2VOb3RpZmljYXRpb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9ub3RpZmljYXRpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi90aW1lLXBpY2tlci9sb2NhbGUvZW5fVVMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9hbnRkL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlU3VwZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9hbnRkL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtbm90aWZpY2F0aW9uL2xpYi9Ob3RpY2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy1ub3RpZmljYXRpb24vbGliL3VzZU5vdGlmaWNhdGlvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLXBhZ2luYXRpb24vbGliL2xvY2FsZS9lbl9VUy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLXBpY2tlci9saWIvbG9jYWxlL2VuX1VTLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtdXRpbC9saWIvaG9va3MvdXNlTWVtby5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLXV0aWwvbGliL29taXQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy11dGlsL2xpYi93YXJuaW5nLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtdXRpbC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLXV0aWwvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtdXRpbC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtdXRpbC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiXSwibmFtZXMiOlsiSW5wdXRHcm91cCIsImxnIiwieHMiLCJzbSIsIm1kIiwidHlwZSIsIm5hbWUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2VGdW5jIiwic3RvcnlJbmZvIiwicmVxdWlyZWQiLCJjYXBpdGFsaXplRmlyc3RMZXR0ZXIiLCJlIiwidGFyZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FZYjtBQUFBLE1BWEpDLEVBV0ksUUFYSkEsRUFXSTtBQUFBLE1BVkpDLEVBVUksUUFWSkEsRUFVSTtBQUFBLE1BVEpDLEVBU0ksUUFUSkEsRUFTSTtBQUFBLE1BUkpDLEVBUUksUUFSSkEsRUFRSTtBQUFBLE1BUEpDLElBT0ksUUFQSkEsSUFPSTtBQUFBLE1BTkpDLElBTUksUUFOSkEsSUFNSTtBQUFBLE1BTEpDLFdBS0ksUUFMSkEsV0FLSTtBQUFBLE1BSkpDLEtBSUksUUFKSkEsS0FJSTtBQUFBLE1BSEpDLFlBR0ksUUFISkEsWUFHSTtBQUFBLE1BRkpDLFNBRUksUUFGSkEsU0FFSTtBQUFBLE1BREpDLFFBQ0ksUUFESkEsUUFDSTtBQUNKLFNBQ0UsTUFBQyx3Q0FBRDtBQUFLLE1BQUUsRUFBRVYsRUFBVDtBQUFhLE1BQUUsRUFBRUMsRUFBakI7QUFBcUIsTUFBRSxFQUFFQyxFQUF6QjtBQUE2QixNQUFFLEVBQUVDLEVBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHlEQUFELENBQU0sSUFBTjtBQUFXLFNBQUssRUFBRVEsNEVBQXFCLENBQUNOLElBQUQsQ0FBdkM7QUFBK0MsWUFBUSxF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QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlDOzs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0M7Ozs7Ozs7Ozs7O0FDTkEsY0FBYyxtQkFBTyxDQUFDLDJHQUErQjs7QUFFckQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEseUM7Ozs7Ozs7Ozs7O0FDdERBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx5QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zdG9yeS9uZXcuNjQyNDQ5NGNjN2Y0NjljYzAzYjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBGb3JtIGZyb20gXCJhbnRkL2xpYi9mb3JtL0Zvcm1cIjtcclxuaW1wb3J0IHsgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2hlbHBlcnNcIjtcclxuXHJcbmNvbnN0IElucHV0R3JvdXAgPSAoe1xyXG4gIGxnLFxyXG4gIHhzLFxyXG4gIHNtLFxyXG4gIG1kLFxyXG4gIHR5cGUsXHJcbiAgbmFtZSxcclxuICBwbGFjZWhvbGRlcixcclxuICB2YWx1ZSxcclxuICBvbkNoYW5nZUZ1bmMsXHJcbiAgc3RvcnlJbmZvLFxyXG4gIHJlcXVpcmVkLFxyXG59KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb2wgbGc9e2xnfSB4cz17eHN9IHNtPXtzbX0gbWQ9e21kfT5cclxuICAgICAgPEZvcm0uSXRlbSBsYWJlbD17Y2FwaXRhbGl6ZUZpcnN0TGV0dGVyKG5hbWUpfSByZXF1aXJlZD17cmVxdWlyZWR9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtuYW1lfT57bmFtZX08L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0taW5wdXRcIlxyXG4gICAgICAgICAgICB0eXBlPXt0eXBlfVxyXG4gICAgICAgICAgICBpZD17bmFtZX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cclxuICAgICAgICAgICAgICBvbkNoYW5nZUZ1bmMoeyAuLi5zdG9yeUluZm8sIFtuYW1lXTogZS50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICA8L0NvbD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5wdXRHcm91cDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vLyBUaGlzIGljb24gZmlsZSBpcyBnZW5lcmF0ZWQgYXV0b21hdGljYWxseS5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBDaGVja0NpcmNsZUZpbGxlZCA9IHsgXCJpY29uXCI6IHsgXCJ0YWdcIjogXCJzdmdcIiwgXCJhdHRyc1wiOiB7IFwidmlld0JveFwiOiBcIjY0IDY0IDg5NiA4OTZcIiwgXCJmb2N1c2FibGVcIjogXCJmYWxzZVwiIH0sIFwiY2hpbGRyZW5cIjogW3sgXCJ0YWdcIjogXCJwYXRoXCIsIFwiYXR0cnNcIjogeyBcImRcIjogXCJNNTEyIDY0QzI2NC42IDY0IDY0IDI2NC42IDY0IDUxMnMyMDAuNiA0NDggNDQ4IDQ0OCA0NDgtMjAwLjYgNDQ4LTQ0OFM3NTkuNCA2NCA1MTIgNjR6bTE5My41IDMwMS43bC0yMTAuNiAyOTJhMzEuOCAzMS44IDAgMDEtNTEuNyAwTDMxOC41IDQ4NC45Yy0zLjgtNS4zIDAtMTIuNyA2LjUtMTIuN2g0Ni45YzEwLjIgMCAxOS45IDQuOSAyNS45IDEzLjNsNzEuMiA5OC44IDE1Ny4yLTIxOGM2LTguMyAxNS42LTEzLjMgMjUuOS0xMy4zSDY5OWM2LjUgMCAxMC4zIDcuNCA2LjUgMTIuN3pcIiB9IH1dIH0sIFwibmFtZVwiOiBcImNoZWNrLWNpcmNsZVwiLCBcInRoZW1lXCI6IFwiZmlsbGVkXCIgfTtcbmV4cG9ydHMuZGVmYXVsdCA9IENoZWNrQ2lyY2xlRmlsbGVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vLyBUaGlzIGljb24gZmlsZSBpcyBnZW5lcmF0ZWQgYXV0b21hdGljYWxseS5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBDaGVja0NpcmNsZU91dGxpbmVkID0geyBcImljb25cIjogeyBcInRhZ1wiOiBcInN2Z1wiLCBcImF0dHJzXCI6IHsgXCJ2aWV3Qm94XCI6IFwiNjQgNjQgODk2IDg5NlwiLCBcImZvY3VzYWJsZVwiOiBcImZhbHNlXCIgfSwgXCJjaGlsZHJlblwiOiBbeyBcInRhZ1wiOiBcInBhdGhcIiwgXCJhdHRyc1wiOiB7IFwiZFwiOiBcIk02OTkgMzUzaC00Ni45Yy0xMC4yIDAtMTkuOSA0LjktMjUuOSAxMy4zTDQ2OSA1ODQuM2wtNzEuMi05OC44Yy02LTguMy0xNS42LTEzLjMtMjUuOS0xMy4zSDMyNWMtNi41IDAtMTAuMyA3LjQtNi41IDEyLjdsMTI0LjYgMTcyLjhhMzEuOCAzMS44IDAgMDA1MS43IDBsMjEwLjYtMjkyYzMuOS01LjMuMS0xMi43LTYuNC0xMi43elwiIH0gfSwgeyBcInRhZ1wiOiBcInBhdGhcIiwgXCJhdHRyc1wiOiB7IFwiZFwiOiBcIk01MTIgNjRDMjY0LjYgNjQgNjQgMjY0LjYgNjQgNTEyczIwMC42IDQ0OCA0NDggNDQ4IDQ0OC0yMDAuNiA0NDgtNDQ4Uzc1OS40IDY0IDUxMiA2NHptMCA4MjBjLTIwNS40IDAtMzcyLTE2Ni42LTM3Mi0zNzJzMTY2LjYtMzcyIDM3Mi0zNzIgMzcyIDE2Ni42IDM3MiAzNzItMTY2LjYgMzcyLTM3MiAzNzJ6XCIgfSB9XSB9LCBcIm5hbWVcIjogXCJjaGVjay1jaXJjbGVcIiwgXCJ0aGVtZVwiOiBcIm91dGxpbmVkXCIgfTtcbmV4cG9ydHMuZGVmYXVsdCA9IENoZWNrQ2lyY2xlT3V0bGluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8vIFRoaXMgaWNvbiBmaWxlIGlzIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIENsb3NlQ2lyY2xlRmlsbGVkID0geyBcImljb25cIjogeyBcInRhZ1wiOiBcInN2Z1wiLCBcImF0dHJzXCI6IHsgXCJ2aWV3Qm94XCI6IFwiNjQgNjQgODk2IDg5NlwiLCBcImZvY3VzYWJsZVwiOiBcImZhbHNlXCIgfSwgXCJjaGlsZHJlblwiOiBbeyBcInRhZ1wiOiBcInBhdGhcIiwgXCJhdHRyc1wiOiB7IFwiZFwiOiBcIk01MTIgNjRDMjY0LjYgNjQgNjQgMjY0LjYgNjQgNTEyczIwMC42IDQ0OCA0NDggNDQ4IDQ0OC0yMDAuNiA0NDgtNDQ4Uzc1OS40IDY0IDUxMiA2NHptMTY1LjQgNjE4LjJsLTY2LS4zTDUxMiA1NjMuNGwtOTkuMyAxMTguNC02Ni4xLjNjLTQuNCAwLTgtMy41LTgtOCAwLTEuOS43LTMuNyAxLjktNS4ybDEzMC4xLTE1NUwzNDAuNSAzNTlhOC4zMiA4LjMyIDAgMDEtMS45LTUuMmMwLTQuNCAzLjYtOCA4LThsNjYuMS4zTDUxMiA0NjQuNmw5OS4zLTExOC40IDY2LS4zYzQuNCAwIDggMy41IDggOCAwIDEuOS0uNyAzLjctMS45IDUuMkw1NTMuNSA1MTRsMTMwIDE1NWMxLjIgMS41IDEuOSAzLjMgMS45IDUuMiAwIDQuNC0zLjYgOC04IDh6XCIgfSB9XSB9LCBcIm5hbWVcIjogXCJjbG9zZS1jaXJjbGVcIiwgXCJ0aGVtZVwiOiBcImZpbGxlZFwiIH07XG5leHBvcnRzLmRlZmF1bHQgPSBDbG9zZUNpcmNsZUZpbGxlZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuLy8gVGhpcyBpY29uIGZpbGUgaXMgZ2VuZXJhdGVkIGF1dG9tYXRpY2FsbHkuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgQ2xvc2VDaXJjbGVPdXRsaW5lZCA9IHsgXCJpY29uXCI6IHsgXCJ0YWdcIjogXCJzdmdcIiwgXCJhdHRyc1wiOiB7IFwidmlld0JveFwiOiBcIjY0IDY0IDg5NiA4OTZcIiwgXCJmb2N1c2FibGVcIjogXCJmYWxzZVwiIH0sIFwiY2hpbGRyZW5cIjogW3sgXCJ0YWdcIjogXCJwYXRoXCIsIFwiYXR0cnNcIjogeyBcImRcIjogXCJNNjg1LjQgMzU0LjhjMC00LjQtMy42LTgtOC04bC02NiAuM0w1MTIgNDY1LjZsLTk5LjMtMTE4LjQtNjYuMS0uM2MtNC40IDAtOCAzLjUtOCA4IDAgMS45LjcgMy43IDEuOSA1LjJsMTMwLjEgMTU1TDM0MC41IDY3MGE4LjMyIDguMzIgMCAwMC0xLjkgNS4yYzAgNC40IDMuNiA4IDggOGw2Ni4xLS4zTDUxMiA1NjQuNGw5OS4zIDExOC40IDY2IC4zYzQuNCAwIDgtMy41IDgtOCAwLTEuOS0uNy0zLjctMS45LTUuMkw1NTMuNSA1MTVsMTMwLjEtMTU1YzEuMi0xLjQgMS44LTMuMyAxLjgtNS4yelwiIH0gfSwgeyBcInRhZ1wiOiBcInBhdGhcIiwgXCJhdHRyc1wiOiB7IFwiZFwiOiBcIk01MTIgNjVDMjY0LjYgNjUgNjQgMjY1LjYgNjQgNTEzczIwMC42IDQ0OCA0NDggNDQ4IDQ0OC0yMDAuNiA0NDgtNDQ4Uzc1OS40IDY1IDUxMiA2NXptMCA4MjBjLTIwNS40IDAtMzcyLTE2Ni42LTM3Mi0zNzJzMTY2LjYtMzcyIDM3Mi0zNzIgMzcyIDE2Ni42IDM3MiAzNzItMTY2LjYgMzcyLTM3MiAzNzJ6XCIgfSB9XSB9LCBcIm5hbWVcIjogXCJjbG9zZS1jaXJjbGVcIiwgXCJ0aGVtZVwiOiBcIm91dGxpbmVkXCIgfTtcbmV4cG9ydHMuZGVmYXVsdCA9IENsb3NlQ2lyY2xlT3V0bGluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8vIFRoaXMgaWNvbiBmaWxlIGlzIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIENsb3NlT3V0bGluZWQgPSB7IFwiaWNvblwiOiB7IFwidGFnXCI6IFwic3ZnXCIsIFwiYXR0cnNcIjogeyBcInZpZXdCb3hcIjogXCI2NCA2NCA4OTYgODk2XCIsIFwiZm9jdXNhYmxlXCI6IFwiZmFsc2VcIiB9LCBcImNoaWxkcmVuXCI6IFt7IFwidGFnXCI6IFwicGF0aFwiLCBcImF0dHJzXCI6IHsgXCJkXCI6IFwiTTU2My44IDUxMmwyNjIuNS0zMTIuOWM0LjQtNS4yLjctMTMuMS02LjEtMTMuMWgtNzkuOGMtNC43IDAtOS4yIDIuMS0xMi4zIDUuN0w1MTEuNiA0NDkuOCAyOTUuMSAxOTEuN2MtMy0zLjYtNy41LTUuNy0xMi4zLTUuN0gyMDNjLTYuOCAwLTEwLjUgNy45LTYuMSAxMy4xTDQ1OS40IDUxMiAxOTYuOSA4MjQuOUE3Ljk1IDcuOTUgMCAwMDIwMyA4MzhoNzkuOGM0LjcgMCA5LjItMi4xIDEyLjMtNS43bDIxNi41LTI1OC4xIDIxNi41IDI1OC4xYzMgMy42IDcuNSA1LjcgMTIuMyA1LjdoNzkuOGM2LjggMCAxMC41LTcuOSA2LjEtMTMuMUw1NjMuOCA1MTJ6XCIgfSB9XSB9LCBcIm5hbWVcIjogXCJjbG9zZVwiLCBcInRoZW1lXCI6IFwib3V0bGluZWRcIiB9O1xuZXhwb3J0cy5kZWZhdWx0ID0gQ2xvc2VPdXRsaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuLy8gVGhpcyBpY29uIGZpbGUgaXMgZ2VuZXJhdGVkIGF1dG9tYXRpY2FsbHkuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgRXhjbGFtYXRpb25DaXJjbGVGaWxsZWQgPSB7IFwiaWNvblwiOiB7IFwidGFnXCI6IFwic3ZnXCIsIFwiYXR0cnNcIjogeyBcInZpZXdCb3hcIjogXCI2NCA2NCA4OTYgODk2XCIsIFwiZm9jdXNhYmxlXCI6IFwiZmFsc2VcIiB9LCBcImNoaWxkcmVuXCI6IFt7IFwidGFnXCI6IFwicGF0aFwiLCBcImF0dHJzXCI6IHsgXCJkXCI6IFwiTTUxMiA2NEMyNjQuNiA2NCA2NCAyNjQuNiA2NCA1MTJzMjAwLjYgNDQ4IDQ0OCA0NDggNDQ4LTIwMC42IDQ0OC00NDhTNzU5LjQgNjQgNTEyIDY0em0tMzIgMjMyYzAtNC40IDMuNi04IDgtOGg0OGM0LjQgMCA4IDMuNiA4IDh2MjcyYzAgNC40LTMuNiA4LTggOGgtNDhjLTQuNCAwLTgtMy42LTgtOFYyOTZ6bTMyIDQ0MGE0OC4wMSA0OC4wMSAwIDAxMC05NiA0OC4wMSA0OC4wMSAwIDAxMCA5NnpcIiB9IH1dIH0sIFwibmFtZVwiOiBcImV4Y2xhbWF0aW9uLWNpcmNsZVwiLCBcInRoZW1lXCI6IFwiZmlsbGVkXCIgfTtcbmV4cG9ydHMuZGVmYXVsdCA9IEV4Y2xhbWF0aW9uQ2lyY2xlRmlsbGVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vLyBUaGlzIGljb24gZmlsZSBpcyBnZW5lcmF0ZWQgYXV0b21hdGljYWxseS5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBFeGNsYW1hdGlvbkNpcmNsZU91dGxpbmVkID0geyBcImljb25cIjogeyBcInRhZ1wiOiBcInN2Z1wiLCBcImF0dHJzXCI6IHsgXCJ2aWV3Qm94XCI6IFwiNjQgNjQgODk2IDg5NlwiLCBcImZvY3VzYWJsZVwiOiBcImZhbHNlXCIgfSwgXCJjaGlsZHJlblwiOiBbeyBcInRhZ1wiOiBcInBhdGhcIiwgXCJhdHRyc1wiOiB7IFwiZFwiOiBcIk01MTIgNjRDMjY0LjYgNjQgNjQgMjY0LjYgNjQgNTEyczIwMC42IDQ0OCA0NDggNDQ4IDQ0OC0yMDAuNiA0NDgtNDQ4Uzc1OS40IDY0IDUxMiA2NHptMCA4MjBjLTIwNS40IDAtMzcyLTE2Ni42LTM3Mi0zNzJzMTY2LjYtMzcyIDM3Mi0zNzIgMzcyIDE2Ni42IDM3MiAzNzItMTY2LjYgMzcyLTM3MiAzNzJ6XCIgfSB9LCB7IFwidGFnXCI6IFwicGF0aFwiLCBcImF0dHJzXCI6IHsgXCJkXCI6IFwiTTQ2NCA2ODhhNDggNDggMCAxMDk2IDAgNDggNDggMCAxMC05NiAwem0yNC0xMTJoNDhjNC40IDAgOC0zLjYgOC04VjI5NmMwLTQuNC0zLjYtOC04LThoLTQ4Yy00LjQgMC04IDMuNi04IDh2MjcyYzAgNC40IDMuNiA4IDggOHpcIiB9IH1dIH0sIFwibmFtZVwiOiBcImV4Y2xhbWF0aW9uLWNpcmNsZVwiLCBcInRoZW1lXCI6IFwib3V0bGluZWRcIiB9O1xuZXhwb3J0cy5kZWZhdWx0ID0gRXhjbGFtYXRpb25DaXJjbGVPdXRsaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuLy8gVGhpcyBpY29uIGZpbGUgaXMgZ2VuZXJhdGVkIGF1dG9tYXRpY2FsbHkuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgSW5mb0NpcmNsZUZpbGxlZCA9IHsgXCJpY29uXCI6IHsgXCJ0YWdcIjogXCJzdmdcIiwgXCJhdHRyc1wiOiB7IFwidmlld0JveFwiOiBcIjY0IDY0IDg5NiA4OTZcIiwgXCJmb2N1c2FibGVcIjogXCJmYWxzZVwiIH0sIFwiY2hpbGRyZW5cIjogW3sgXCJ0YWdcIjogXCJwYXRoXCIsIFwiYXR0cnNcIjogeyBcImRcIjogXCJNNTEyIDY0QzI2NC42IDY0IDY0IDI2NC42IDY0IDUxMnMyMDAuNiA0NDggNDQ4IDQ0OCA0NDgtMjAwLjYgNDQ4LTQ0OFM3NTkuNCA2NCA1MTIgNjR6bTMyIDY2NGMwIDQuNC0zLjYgOC04IDhoLTQ4Yy00LjQgMC04LTMuNi04LThWNDU2YzAtNC40IDMuNi04IDgtOGg0OGM0LjQgMCA4IDMuNiA4IDh2Mjcyem0tMzItMzQ0YTQ4LjAxIDQ4LjAxIDAgMDEwLTk2IDQ4LjAxIDQ4LjAxIDAgMDEwIDk2elwiIH0gfV0gfSwgXCJuYW1lXCI6IFwiaW5mby1jaXJjbGVcIiwgXCJ0aGVtZVwiOiBcImZpbGxlZFwiIH07XG5leHBvcnRzLmRlZmF1bHQgPSBJbmZvQ2lyY2xlRmlsbGVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vLyBUaGlzIGljb24gZmlsZSBpcyBnZW5lcmF0ZWQgYXV0b21hdGljYWxseS5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBJbmZvQ2lyY2xlT3V0bGluZWQgPSB7IFwiaWNvblwiOiB7IFwidGFnXCI6IFwic3ZnXCIsIFwiYXR0cnNcIjogeyBcInZpZXdCb3hcIjogXCI2NCA2NCA4OTYgODk2XCIsIFwiZm9jdXNhYmxlXCI6IFwiZmFsc2VcIiB9LCBcImNoaWxkcmVuXCI6IFt7IFwidGFnXCI6IFwicGF0aFwiLCBcImF0dHJzXCI6IHsgXCJkXCI6IFwiTTUxMiA2NEMyNjQuNiA2NCA2NCAyNjQuNiA2NCA1MTJzMjAwLjYgNDQ4IDQ0OCA0NDggNDQ4LTIwMC42IDQ0OC00NDhTNzU5LjQgNjQgNTEyIDY0em0wIDgyMGMtMjA1LjQgMC0zNzItMTY2LjYtMzcyLTM3MnMxNjYuNi0zNzIgMzcyLTM3MiAzNzIgMTY2LjYgMzcyIDM3Mi0xNjYuNiAzNzItMzcyIDM3MnpcIiB9IH0sIHsgXCJ0YWdcIjogXCJwYXRoXCIsIFwiYXR0cnNcIjogeyBcImRcIjogXCJNNDY0IDMzNmE0OCA0OCAwIDEwOTYgMCA0OCA0OCAwIDEwLTk2IDB6bTcyIDExMmgtNDhjLTQuNCAwLTggMy42LTggOHYyNzJjMCA0LjQgMy42IDggOCA4aDQ4YzQuNCAwIDgtMy42IDgtOFY0NTZjMC00LjQtMy42LTgtOC04elwiIH0gfV0gfSwgXCJuYW1lXCI6IFwiaW5mby1jaXJjbGVcIiwgXCJ0aGVtZVwiOiBcIm91dGxpbmVkXCIgfTtcbmV4cG9ydHMuZGVmYXVsdCA9IEluZm9DaXJjbGVPdXRsaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuLy8gVGhpcyBpY29uIGZpbGUgaXMgZ2VuZXJhdGVkIGF1dG9tYXRpY2FsbHkuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgTG9hZGluZ091dGxpbmVkID0geyBcImljb25cIjogeyBcInRhZ1wiOiBcInN2Z1wiLCBcImF0dHJzXCI6IHsgXCJ2aWV3Qm94XCI6IFwiMCAwIDEwMjQgMTAyNFwiLCBcImZvY3VzYWJsZVwiOiBcImZhbHNlXCIgfSwgXCJjaGlsZHJlblwiOiBbeyBcInRhZ1wiOiBcInBhdGhcIiwgXCJhdHRyc1wiOiB7IFwiZFwiOiBcIk05ODggNTQ4Yy0xOS45IDAtMzYtMTYuMS0zNi0zNiAwLTU5LjQtMTEuNi0xMTctMzQuNi0xNzEuM2E0NDAuNDUgNDQwLjQ1IDAgMDAtOTQuMy0xMzkuOSA0MzcuNzEgNDM3LjcxIDAgMDAtMTM5LjktOTQuM0M2MjkgODMuNiA1NzEuNCA3MiA1MTIgNzJjLTE5LjkgMC0zNi0xNi4xLTM2LTM2czE2LjEtMzYgMzYtMzZjNjkuMSAwIDEzNi4yIDEzLjUgMTk5LjMgNDAuM0M3NzIuMyA2NiA4MjcgMTAzIDg3NCAxNTBjNDcgNDcgODMuOSAxMDEuOCAxMDkuNyAxNjIuNyAyNi43IDYzLjEgNDAuMiAxMzAuMiA0MC4yIDE5OS4zLjEgMTkuOS0xNiAzNi0zNS45IDM2elwiIH0gfV0gfSwgXCJuYW1lXCI6IFwibG9hZGluZ1wiLCBcInRoZW1lXCI6IFwib3V0bGluZWRcIiB9O1xuZXhwb3J0cy5kZWZhdWx0ID0gTG9hZGluZ091dGxpbmVkO1xuIiwiJ3VzZSBzdHJpY3QnO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxuICB9KTtcbiAgZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuICBcbiAgdmFyIF9DaGVja0NpcmNsZUZpbGxlZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZSgnLi9saWIvaWNvbnMvQ2hlY2tDaXJjbGVGaWxsZWQnKSk7XG4gIFxuICBmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG4gIFxuICB2YXIgX2RlZmF1bHQgPSBfQ2hlY2tDaXJjbGVGaWxsZWQ7XG4gIGV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xuICBtb2R1bGUuZXhwb3J0cyA9IF9kZWZhdWx0OyIsIid1c2Ugc3RyaWN0JztcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbiAgfSk7XG4gIGV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbiAgXG4gIHZhciBfQ2hlY2tDaXJjbGVPdXRsaW5lZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZSgnLi9saWIvaWNvbnMvQ2hlY2tDaXJjbGVPdXRsaW5lZCcpKTtcbiAgXG4gIGZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cbiAgXG4gIHZhciBfZGVmYXVsdCA9IF9DaGVja0NpcmNsZU91dGxpbmVkO1xuICBleHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZGVmYXVsdDsiLCIndXNlIHN0cmljdCc7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG4gIH0pO1xuICBleHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG4gIFxuICB2YXIgX0Nsb3NlQ2lyY2xlRmlsbGVkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKCcuL2xpYi9pY29ucy9DbG9zZUNpcmNsZUZpbGxlZCcpKTtcbiAgXG4gIGZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cbiAgXG4gIHZhciBfZGVmYXVsdCA9IF9DbG9zZUNpcmNsZUZpbGxlZDtcbiAgZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG4gIG1vZHVsZS5leHBvcnRzID0gX2RlZmF1bHQ7IiwiJ3VzZSBzdHJpY3QnO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxuICB9KTtcbiAgZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuICBcbiAgdmFyIF9DbG9zZUNpcmNsZU91dGxpbmVkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKCcuL2xpYi9pY29ucy9DbG9zZUNpcmNsZU91dGxpbmVkJykpO1xuICBcbiAgZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuICBcbiAgdmFyIF9kZWZhdWx0ID0gX0Nsb3NlQ2lyY2xlT3V0bGluZWQ7XG4gIGV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xuICBtb2R1bGUuZXhwb3J0cyA9IF9kZWZhdWx0OyIsIid1c2Ugc3RyaWN0JztcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbiAgfSk7XG4gIGV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbiAgXG4gIHZhciBfQ2xvc2VPdXRsaW5lZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZSgnLi9saWIvaWNvbnMvQ2xvc2VPdXRsaW5lZCcpKTtcbiAgXG4gIGZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cbiAgXG4gIHZhciBfZGVmYXVsdCA9IF9DbG9zZU91dGxpbmVkO1xuICBleHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZGVmYXVsdDsiLCIndXNlIHN0cmljdCc7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG4gIH0pO1xuICBleHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG4gIFxuICB2YXIgX0V4Y2xhbWF0aW9uQ2lyY2xlRmlsbGVkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKCcuL2xpYi9pY29ucy9FeGNsYW1hdGlvbkNpcmNsZUZpbGxlZCcpKTtcbiAgXG4gIGZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cbiAgXG4gIHZhciBfZGVmYXVsdCA9IF9FeGNsYW1hdGlvbkNpcmNsZUZpbGxlZDtcbiAgZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG4gIG1vZHVsZS5leHBvcnRzID0gX2RlZmF1bHQ7IiwiJ3VzZSBzdHJpY3QnO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxuICB9KTtcbiAgZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuICBcbiAgdmFyIF9FeGNsYW1hdGlvbkNpcmNsZU91dGxpbmVkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKCcuL2xpYi9pY29ucy9FeGNsYW1hdGlvbkNpcmNsZU91dGxpbmVkJykpO1xuICBcbiAgZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuICBcbiAgdmFyIF9kZWZhdWx0ID0gX0V4Y2xhbWF0aW9uQ2lyY2xlT3V0bGluZWQ7XG4gIGV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xuICBtb2R1bGUuZXhwb3J0cyA9IF9kZWZhdWx0OyIsIid1c2Ugc3RyaWN0JztcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbiAgfSk7XG4gIGV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbiAgXG4gIHZhciBfSW5mb0NpcmNsZUZpbGxlZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZSgnLi9saWIvaWNvbnMvSW5mb0NpcmNsZUZpbGxlZCcpKTtcbiAgXG4gIGZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cbiAgXG4gIHZhciBfZGVmYXVsdCA9IF9JbmZvQ2lyY2xlRmlsbGVkO1xuICBleHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZGVmYXVsdDsiLCIndXNlIHN0cmljdCc7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG4gIH0pO1xuICBleHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG4gIFxuICB2YXIgX0luZm9DaXJjbGVPdXRsaW5lZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZSgnLi9saWIvaWNvbnMvSW5mb0NpcmNsZU91dGxpbmVkJykpO1xuICBcbiAgZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuICBcbiAgdmFyIF9kZWZhdWx0ID0gX0luZm9DaXJjbGVPdXRsaW5lZDtcbiAgZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG4gIG1vZHVsZS5leHBvcnRzID0gX2RlZmF1bHQ7IiwiJ3VzZSBzdHJpY3QnO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxuICB9KTtcbiAgZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuICBcbiAgdmFyIF9Mb2FkaW5nT3V0bGluZWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoJy4vbGliL2ljb25zL0xvYWRpbmdPdXRsaW5lZCcpKTtcbiAgXG4gIGZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cbiAgXG4gIHZhciBfZGVmYXVsdCA9IF9Mb2FkaW5nT3V0bGluZWQ7XG4gIGV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xuICBtb2R1bGUuZXhwb3J0cyA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9zbGljZWRUb0FycmF5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheVwiKSk7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eVwiKSk7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiKSk7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xuXG52YXIgX0NvbnRleHQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0NvbnRleHRcIikpO1xuXG52YXIgX0ljb25CYXNlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9JY29uQmFzZVwiKSk7XG5cbnZhciBfdHdvVG9uZVByaW1hcnlDb2xvciA9IHJlcXVpcmUoXCIuL3R3b1RvbmVQcmltYXJ5Q29sb3JcIik7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5cbi8vIEluaXRpYWwgc2V0dGluZ1xuLy8gc2hvdWxkIG1vdmUgaXQgdG8gYW50ZCBtYWluIHJlcG8/XG4oMCwgX3R3b1RvbmVQcmltYXJ5Q29sb3Iuc2V0VHdvVG9uZUNvbG9yKSgnIzE4OTBmZicpO1xudmFyIEljb24gPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikge1xuICB2YXIgX2NsYXNzTmFtZXM7XG5cbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGljb24gPSBwcm9wcy5pY29uLFxuICAgICAgc3BpbiA9IHByb3BzLnNwaW4sXG4gICAgICByb3RhdGUgPSBwcm9wcy5yb3RhdGUsXG4gICAgICB0YWJJbmRleCA9IHByb3BzLnRhYkluZGV4LFxuICAgICAgb25DbGljayA9IHByb3BzLm9uQ2xpY2ssXG4gICAgICB0d29Ub25lQ29sb3IgPSBwcm9wcy50d29Ub25lQ29sb3IsXG4gICAgICByZXN0UHJvcHMgPSAoMCwgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMi5kZWZhdWx0KShwcm9wcywgW1wiY2xhc3NOYW1lXCIsIFwiaWNvblwiLCBcInNwaW5cIiwgXCJyb3RhdGVcIiwgXCJ0YWJJbmRleFwiLCBcIm9uQ2xpY2tcIiwgXCJ0d29Ub25lQ29sb3JcIl0pO1xuXG4gIHZhciBfUmVhY3QkdXNlQ29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoX0NvbnRleHQuZGVmYXVsdCksXG4gICAgICBfUmVhY3QkdXNlQ29udGV4dCRwcmUgPSBfUmVhY3QkdXNlQ29udGV4dC5wcmVmaXhDbHMsXG4gICAgICBwcmVmaXhDbHMgPSBfUmVhY3QkdXNlQ29udGV4dCRwcmUgPT09IHZvaWQgMCA/ICdhbnRpY29uJyA6IF9SZWFjdCR1c2VDb250ZXh0JHByZTtcblxuICB2YXIgY2xhc3NTdHJpbmcgPSAoMCwgX2NsYXNzbmFtZXMuZGVmYXVsdCkocHJlZml4Q2xzLCAoX2NsYXNzTmFtZXMgPSB7fSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTIuZGVmYXVsdCkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItXCIpLmNvbmNhdChpY29uLm5hbWUpLCAhIWljb24ubmFtZSksICgwLCBfZGVmaW5lUHJvcGVydHkyLmRlZmF1bHQpKF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXNwaW5cIiksICEhc3BpbiB8fCBpY29uLm5hbWUgPT09ICdsb2FkaW5nJyksIF9jbGFzc05hbWVzKSwgY2xhc3NOYW1lKTtcbiAgdmFyIGljb25UYWJJbmRleCA9IHRhYkluZGV4O1xuXG4gIGlmIChpY29uVGFiSW5kZXggPT09IHVuZGVmaW5lZCAmJiBvbkNsaWNrKSB7XG4gICAgaWNvblRhYkluZGV4ID0gLTE7XG4gIH1cblxuICB2YXIgc3ZnU3R5bGUgPSByb3RhdGUgPyB7XG4gICAgbXNUcmFuc2Zvcm06IFwicm90YXRlKFwiLmNvbmNhdChyb3RhdGUsIFwiZGVnKVwiKSxcbiAgICB0cmFuc2Zvcm06IFwicm90YXRlKFwiLmNvbmNhdChyb3RhdGUsIFwiZGVnKVwiKVxuICB9IDogdW5kZWZpbmVkO1xuXG4gIHZhciBfbm9ybWFsaXplVHdvVG9uZUNvbG8gPSAoMCwgX3V0aWxzLm5vcm1hbGl6ZVR3b1RvbmVDb2xvcnMpKHR3b1RvbmVDb2xvciksXG4gICAgICBfbm9ybWFsaXplVHdvVG9uZUNvbG8yID0gKDAsIF9zbGljZWRUb0FycmF5Mi5kZWZhdWx0KShfbm9ybWFsaXplVHdvVG9uZUNvbG8sIDIpLFxuICAgICAgcHJpbWFyeUNvbG9yID0gX25vcm1hbGl6ZVR3b1RvbmVDb2xvMlswXSxcbiAgICAgIHNlY29uZGFyeUNvbG9yID0gX25vcm1hbGl6ZVR3b1RvbmVDb2xvMlsxXTtcblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIE9iamVjdC5hc3NpZ24oe1xuICAgIHJvbGU6IFwiaW1nXCIsXG4gICAgXCJhcmlhLWxhYmVsXCI6IGljb24ubmFtZVxuICB9LCByZXN0UHJvcHMsIHtcbiAgICByZWY6IHJlZixcbiAgICB0YWJJbmRleDogaWNvblRhYkluZGV4LFxuICAgIG9uQ2xpY2s6IG9uQ2xpY2ssXG4gICAgY2xhc3NOYW1lOiBjbGFzc1N0cmluZ1xuICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX0ljb25CYXNlLmRlZmF1bHQsIHtcbiAgICBpY29uOiBpY29uLFxuICAgIHByaW1hcnlDb2xvcjogcHJpbWFyeUNvbG9yLFxuICAgIHNlY29uZGFyeUNvbG9yOiBzZWNvbmRhcnlDb2xvcixcbiAgICBzdHlsZTogc3ZnU3R5bGVcbiAgfSkpO1xufSk7XG5JY29uLmRpc3BsYXlOYW1lID0gJ0FudGRJY29uJztcbkljb24uZ2V0VHdvVG9uZUNvbG9yID0gX3R3b1RvbmVQcmltYXJ5Q29sb3IuZ2V0VHdvVG9uZUNvbG9yO1xuSWNvbi5zZXRUd29Ub25lQ29sb3IgPSBfdHdvVG9uZVByaW1hcnlDb2xvci5zZXRUd29Ub25lQ29sb3I7XG52YXIgX2RlZmF1bHQgPSBJY29uO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cbnZhciBJY29uQ29udGV4dCA9IC8qI19fUFVSRV9fKi8oMCwgX3JlYWN0LmNyZWF0ZUNvbnRleHQpKHt9KTtcbnZhciBfZGVmYXVsdCA9IEljb25Db250ZXh0O1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIikpO1xuXG52YXIgX29iamVjdFNwcmVhZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFNwcmVhZDJcIikpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuXG52YXIgdHdvVG9uZUNvbG9yUGFsZXR0ZSA9IHtcbiAgcHJpbWFyeUNvbG9yOiAnIzMzMycsXG4gIHNlY29uZGFyeUNvbG9yOiAnI0U2RTZFNicsXG4gIGNhbGN1bGF0ZWQ6IGZhbHNlXG59O1xuXG5mdW5jdGlvbiBzZXRUd29Ub25lQ29sb3JzKF9yZWYpIHtcbiAgdmFyIHByaW1hcnlDb2xvciA9IF9yZWYucHJpbWFyeUNvbG9yLFxuICAgICAgc2Vjb25kYXJ5Q29sb3IgPSBfcmVmLnNlY29uZGFyeUNvbG9yO1xuICB0d29Ub25lQ29sb3JQYWxldHRlLnByaW1hcnlDb2xvciA9IHByaW1hcnlDb2xvcjtcbiAgdHdvVG9uZUNvbG9yUGFsZXR0ZS5zZWNvbmRhcnlDb2xvciA9IHNlY29uZGFyeUNvbG9yIHx8ICgwLCBfdXRpbHMuZ2V0U2Vjb25kYXJ5Q29sb3IpKHByaW1hcnlDb2xvcik7XG4gIHR3b1RvbmVDb2xvclBhbGV0dGUuY2FsY3VsYXRlZCA9ICEhc2Vjb25kYXJ5Q29sb3I7XG59XG5cbmZ1bmN0aW9uIGdldFR3b1RvbmVDb2xvcnMoKSB7XG4gIHJldHVybiAoMCwgX29iamVjdFNwcmVhZDIuZGVmYXVsdCkoe30sIHR3b1RvbmVDb2xvclBhbGV0dGUpO1xufVxuXG52YXIgSWNvbkJhc2UgPSBmdW5jdGlvbiBJY29uQmFzZShwcm9wcykge1xuICB2YXIgaWNvbiA9IHByb3BzLmljb24sXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBvbkNsaWNrID0gcHJvcHMub25DbGljayxcbiAgICAgIHN0eWxlID0gcHJvcHMuc3R5bGUsXG4gICAgICBwcmltYXJ5Q29sb3IgPSBwcm9wcy5wcmltYXJ5Q29sb3IsXG4gICAgICBzZWNvbmRhcnlDb2xvciA9IHByb3BzLnNlY29uZGFyeUNvbG9yLFxuICAgICAgcmVzdFByb3BzID0gKDAsIF9vYmplY3RXaXRob3V0UHJvcGVydGllczIuZGVmYXVsdCkocHJvcHMsIFtcImljb25cIiwgXCJjbGFzc05hbWVcIiwgXCJvbkNsaWNrXCIsIFwic3R5bGVcIiwgXCJwcmltYXJ5Q29sb3JcIiwgXCJzZWNvbmRhcnlDb2xvclwiXSk7XG4gIHZhciBjb2xvcnMgPSB0d29Ub25lQ29sb3JQYWxldHRlO1xuXG4gIGlmIChwcmltYXJ5Q29sb3IpIHtcbiAgICBjb2xvcnMgPSB7XG4gICAgICBwcmltYXJ5Q29sb3I6IHByaW1hcnlDb2xvcixcbiAgICAgIHNlY29uZGFyeUNvbG9yOiBzZWNvbmRhcnlDb2xvciB8fCAoMCwgX3V0aWxzLmdldFNlY29uZGFyeUNvbG9yKShwcmltYXJ5Q29sb3IpXG4gICAgfTtcbiAgfVxuXG4gICgwLCBfdXRpbHMudXNlSW5zZXJ0U3R5bGVzKSgpO1xuICAoMCwgX3V0aWxzLndhcm5pbmcpKCgwLCBfdXRpbHMuaXNJY29uRGVmaW5pdGlvbikoaWNvbiksIFwiaWNvbiBzaG91bGQgYmUgaWNvbiBkZWZpbml0b24sIGJ1dCBnb3QgXCIuY29uY2F0KGljb24pKTtcblxuICBpZiAoISgwLCBfdXRpbHMuaXNJY29uRGVmaW5pdGlvbikoaWNvbikpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciB0YXJnZXQgPSBpY29uO1xuXG4gIGlmICh0YXJnZXQgJiYgdHlwZW9mIHRhcmdldC5pY29uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdGFyZ2V0ID0gKDAsIF9vYmplY3RTcHJlYWQyLmRlZmF1bHQpKCgwLCBfb2JqZWN0U3ByZWFkMi5kZWZhdWx0KSh7fSwgdGFyZ2V0KSwge30sIHtcbiAgICAgIGljb246IHRhcmdldC5pY29uKGNvbG9ycy5wcmltYXJ5Q29sb3IsIGNvbG9ycy5zZWNvbmRhcnlDb2xvcilcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiAoMCwgX3V0aWxzLmdlbmVyYXRlKSh0YXJnZXQuaWNvbiwgXCJzdmctXCIuY29uY2F0KHRhcmdldC5uYW1lKSwgKDAsIF9vYmplY3RTcHJlYWQyLmRlZmF1bHQpKHtcbiAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICBvbkNsaWNrOiBvbkNsaWNrLFxuICAgIHN0eWxlOiBzdHlsZSxcbiAgICAnZGF0YS1pY29uJzogdGFyZ2V0Lm5hbWUsXG4gICAgd2lkdGg6ICcxZW0nLFxuICAgIGhlaWdodDogJzFlbScsXG4gICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gICAgJ2FyaWEtaGlkZGVuJzogJ3RydWUnXG4gIH0sIHJlc3RQcm9wcykpO1xufTtcblxuSWNvbkJhc2UuZGlzcGxheU5hbWUgPSAnSWNvblJlYWN0Jztcbkljb25CYXNlLmdldFR3b1RvbmVDb2xvcnMgPSBnZXRUd29Ub25lQ29sb3JzO1xuSWNvbkJhc2Uuc2V0VHdvVG9uZUNvbG9ycyA9IHNldFR3b1RvbmVDb2xvcnM7XG52YXIgX2RlZmF1bHQgPSBJY29uQmFzZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuc2V0VHdvVG9uZUNvbG9yID0gc2V0VHdvVG9uZUNvbG9yO1xuZXhwb3J0cy5nZXRUd29Ub25lQ29sb3IgPSBnZXRUd29Ub25lQ29sb3I7XG5cbnZhciBfc2xpY2VkVG9BcnJheTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXlcIikpO1xuXG52YXIgX0ljb25CYXNlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9JY29uQmFzZVwiKSk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5cbmZ1bmN0aW9uIHNldFR3b1RvbmVDb2xvcih0d29Ub25lQ29sb3IpIHtcbiAgdmFyIF9ub3JtYWxpemVUd29Ub25lQ29sbyA9ICgwLCBfdXRpbHMubm9ybWFsaXplVHdvVG9uZUNvbG9ycykodHdvVG9uZUNvbG9yKSxcbiAgICAgIF9ub3JtYWxpemVUd29Ub25lQ29sbzIgPSAoMCwgX3NsaWNlZFRvQXJyYXkyLmRlZmF1bHQpKF9ub3JtYWxpemVUd29Ub25lQ29sbywgMiksXG4gICAgICBwcmltYXJ5Q29sb3IgPSBfbm9ybWFsaXplVHdvVG9uZUNvbG8yWzBdLFxuICAgICAgc2Vjb25kYXJ5Q29sb3IgPSBfbm9ybWFsaXplVHdvVG9uZUNvbG8yWzFdO1xuXG4gIHJldHVybiBfSWNvbkJhc2UuZGVmYXVsdC5zZXRUd29Ub25lQ29sb3JzKHtcbiAgICBwcmltYXJ5Q29sb3I6IHByaW1hcnlDb2xvcixcbiAgICBzZWNvbmRhcnlDb2xvcjogc2Vjb25kYXJ5Q29sb3JcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldFR3b1RvbmVDb2xvcigpIHtcbiAgdmFyIGNvbG9ycyA9IF9JY29uQmFzZS5kZWZhdWx0LmdldFR3b1RvbmVDb2xvcnMoKTtcblxuICBpZiAoIWNvbG9ycy5jYWxjdWxhdGVkKSB7XG4gICAgcmV0dXJuIGNvbG9ycy5wcmltYXJ5Q29sb3I7XG4gIH1cblxuICByZXR1cm4gW2NvbG9ycy5wcmltYXJ5Q29sb3IsIGNvbG9ycy5zZWNvbmRhcnlDb2xvcl07XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX0NoZWNrQ2lyY2xlRmlsbGVkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnMtc3ZnL2xpYi9hc24vQ2hlY2tDaXJjbGVGaWxsZWRcIikpO1xuXG52YXIgX0FudGRJY29uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vY29tcG9uZW50cy9BbnRkSWNvblwiKSk7XG5cbi8vIEdFTkVSQVRFIEJZIC4vc2NyaXB0cy9nZW5lcmF0ZS50c1xuLy8gRE9OIE5PVCBFRElUIElUIE1BTlVBTExZXG52YXIgQ2hlY2tDaXJjbGVGaWxsZWQgPSBmdW5jdGlvbiBDaGVja0NpcmNsZUZpbGxlZChwcm9wcywgcmVmKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfQW50ZEljb24uZGVmYXVsdCwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICByZWY6IHJlZixcbiAgICBpY29uOiBfQ2hlY2tDaXJjbGVGaWxsZWQuZGVmYXVsdFxuICB9KSk7XG59O1xuXG5DaGVja0NpcmNsZUZpbGxlZC5kaXNwbGF5TmFtZSA9ICdDaGVja0NpcmNsZUZpbGxlZCc7XG5cbnZhciBfZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKENoZWNrQ2lyY2xlRmlsbGVkKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX0NoZWNrQ2lyY2xlT3V0bGluZWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29ucy1zdmcvbGliL2Fzbi9DaGVja0NpcmNsZU91dGxpbmVkXCIpKTtcblxudmFyIF9BbnRkSWNvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL2NvbXBvbmVudHMvQW50ZEljb25cIikpO1xuXG4vLyBHRU5FUkFURSBCWSAuL3NjcmlwdHMvZ2VuZXJhdGUudHNcbi8vIERPTiBOT1QgRURJVCBJVCBNQU5VQUxMWVxudmFyIENoZWNrQ2lyY2xlT3V0bGluZWQgPSBmdW5jdGlvbiBDaGVja0NpcmNsZU91dGxpbmVkKHByb3BzLCByZWYpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9BbnRkSWNvbi5kZWZhdWx0LCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcywge1xuICAgIHJlZjogcmVmLFxuICAgIGljb246IF9DaGVja0NpcmNsZU91dGxpbmVkLmRlZmF1bHRcbiAgfSkpO1xufTtcblxuQ2hlY2tDaXJjbGVPdXRsaW5lZC5kaXNwbGF5TmFtZSA9ICdDaGVja0NpcmNsZU91dGxpbmVkJztcblxudmFyIF9kZWZhdWx0ID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoQ2hlY2tDaXJjbGVPdXRsaW5lZCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9DbG9zZUNpcmNsZUZpbGxlZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zLXN2Zy9saWIvYXNuL0Nsb3NlQ2lyY2xlRmlsbGVkXCIpKTtcblxudmFyIF9BbnRkSWNvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL2NvbXBvbmVudHMvQW50ZEljb25cIikpO1xuXG4vLyBHRU5FUkFURSBCWSAuL3NjcmlwdHMvZ2VuZXJhdGUudHNcbi8vIERPTiBOT1QgRURJVCBJVCBNQU5VQUxMWVxudmFyIENsb3NlQ2lyY2xlRmlsbGVkID0gZnVuY3Rpb24gQ2xvc2VDaXJjbGVGaWxsZWQocHJvcHMsIHJlZikge1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX0FudGRJY29uLmRlZmF1bHQsIE9iamVjdC5hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgcmVmOiByZWYsXG4gICAgaWNvbjogX0Nsb3NlQ2lyY2xlRmlsbGVkLmRlZmF1bHRcbiAgfSkpO1xufTtcblxuQ2xvc2VDaXJjbGVGaWxsZWQuZGlzcGxheU5hbWUgPSAnQ2xvc2VDaXJjbGVGaWxsZWQnO1xuXG52YXIgX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihDbG9zZUNpcmNsZUZpbGxlZCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9DbG9zZUNpcmNsZU91dGxpbmVkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnMtc3ZnL2xpYi9hc24vQ2xvc2VDaXJjbGVPdXRsaW5lZFwiKSk7XG5cbnZhciBfQW50ZEljb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9jb21wb25lbnRzL0FudGRJY29uXCIpKTtcblxuLy8gR0VORVJBVEUgQlkgLi9zY3JpcHRzL2dlbmVyYXRlLnRzXG4vLyBET04gTk9UIEVESVQgSVQgTUFOVUFMTFlcbnZhciBDbG9zZUNpcmNsZU91dGxpbmVkID0gZnVuY3Rpb24gQ2xvc2VDaXJjbGVPdXRsaW5lZChwcm9wcywgcmVmKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfQW50ZEljb24uZGVmYXVsdCwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICByZWY6IHJlZixcbiAgICBpY29uOiBfQ2xvc2VDaXJjbGVPdXRsaW5lZC5kZWZhdWx0XG4gIH0pKTtcbn07XG5cbkNsb3NlQ2lyY2xlT3V0bGluZWQuZGlzcGxheU5hbWUgPSAnQ2xvc2VDaXJjbGVPdXRsaW5lZCc7XG5cbnZhciBfZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKENsb3NlQ2lyY2xlT3V0bGluZWQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfQ2xvc2VPdXRsaW5lZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zLXN2Zy9saWIvYXNuL0Nsb3NlT3V0bGluZWRcIikpO1xuXG52YXIgX0FudGRJY29uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vY29tcG9uZW50cy9BbnRkSWNvblwiKSk7XG5cbi8vIEdFTkVSQVRFIEJZIC4vc2NyaXB0cy9nZW5lcmF0ZS50c1xuLy8gRE9OIE5PVCBFRElUIElUIE1BTlVBTExZXG52YXIgQ2xvc2VPdXRsaW5lZCA9IGZ1bmN0aW9uIENsb3NlT3V0bGluZWQocHJvcHMsIHJlZikge1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX0FudGRJY29uLmRlZmF1bHQsIE9iamVjdC5hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgcmVmOiByZWYsXG4gICAgaWNvbjogX0Nsb3NlT3V0bGluZWQuZGVmYXVsdFxuICB9KSk7XG59O1xuXG5DbG9zZU91dGxpbmVkLmRpc3BsYXlOYW1lID0gJ0Nsb3NlT3V0bGluZWQnO1xuXG52YXIgX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihDbG9zZU91dGxpbmVkKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX0V4Y2xhbWF0aW9uQ2lyY2xlRmlsbGVkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnMtc3ZnL2xpYi9hc24vRXhjbGFtYXRpb25DaXJjbGVGaWxsZWRcIikpO1xuXG52YXIgX0FudGRJY29uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vY29tcG9uZW50cy9BbnRkSWNvblwiKSk7XG5cbi8vIEdFTkVSQVRFIEJZIC4vc2NyaXB0cy9nZW5lcmF0ZS50c1xuLy8gRE9OIE5PVCBFRElUIElUIE1BTlVBTExZXG52YXIgRXhjbGFtYXRpb25DaXJjbGVGaWxsZWQgPSBmdW5jdGlvbiBFeGNsYW1hdGlvbkNpcmNsZUZpbGxlZChwcm9wcywgcmVmKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfQW50ZEljb24uZGVmYXVsdCwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICByZWY6IHJlZixcbiAgICBpY29uOiBfRXhjbGFtYXRpb25DaXJjbGVGaWxsZWQuZGVmYXVsdFxuICB9KSk7XG59O1xuXG5FeGNsYW1hdGlvbkNpcmNsZUZpbGxlZC5kaXNwbGF5TmFtZSA9ICdFeGNsYW1hdGlvbkNpcmNsZUZpbGxlZCc7XG5cbnZhciBfZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKEV4Y2xhbWF0aW9uQ2lyY2xlRmlsbGVkKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX0V4Y2xhbWF0aW9uQ2lyY2xlT3V0bGluZWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29ucy1zdmcvbGliL2Fzbi9FeGNsYW1hdGlvbkNpcmNsZU91dGxpbmVkXCIpKTtcblxudmFyIF9BbnRkSWNvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL2NvbXBvbmVudHMvQW50ZEljb25cIikpO1xuXG4vLyBHRU5FUkFURSBCWSAuL3NjcmlwdHMvZ2VuZXJhdGUudHNcbi8vIERPTiBOT1QgRURJVCBJVCBNQU5VQUxMWVxudmFyIEV4Y2xhbWF0aW9uQ2lyY2xlT3V0bGluZWQgPSBmdW5jdGlvbiBFeGNsYW1hdGlvbkNpcmNsZU91dGxpbmVkKHByb3BzLCByZWYpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9BbnRkSWNvbi5kZWZhdWx0LCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcywge1xuICAgIHJlZjogcmVmLFxuICAgIGljb246IF9FeGNsYW1hdGlvbkNpcmNsZU91dGxpbmVkLmRlZmF1bHRcbiAgfSkpO1xufTtcblxuRXhjbGFtYXRpb25DaXJjbGVPdXRsaW5lZC5kaXNwbGF5TmFtZSA9ICdFeGNsYW1hdGlvbkNpcmNsZU91dGxpbmVkJztcblxudmFyIF9kZWZhdWx0ID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoRXhjbGFtYXRpb25DaXJjbGVPdXRsaW5lZCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9JbmZvQ2lyY2xlRmlsbGVkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnMtc3ZnL2xpYi9hc24vSW5mb0NpcmNsZUZpbGxlZFwiKSk7XG5cbnZhciBfQW50ZEljb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9jb21wb25lbnRzL0FudGRJY29uXCIpKTtcblxuLy8gR0VORVJBVEUgQlkgLi9zY3JpcHRzL2dlbmVyYXRlLnRzXG4vLyBET04gTk9UIEVESVQgSVQgTUFOVUFMTFlcbnZhciBJbmZvQ2lyY2xlRmlsbGVkID0gZnVuY3Rpb24gSW5mb0NpcmNsZUZpbGxlZChwcm9wcywgcmVmKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfQW50ZEljb24uZGVmYXVsdCwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICByZWY6IHJlZixcbiAgICBpY29uOiBfSW5mb0NpcmNsZUZpbGxlZC5kZWZhdWx0XG4gIH0pKTtcbn07XG5cbkluZm9DaXJjbGVGaWxsZWQuZGlzcGxheU5hbWUgPSAnSW5mb0NpcmNsZUZpbGxlZCc7XG5cbnZhciBfZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKEluZm9DaXJjbGVGaWxsZWQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfSW5mb0NpcmNsZU91dGxpbmVkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnMtc3ZnL2xpYi9hc24vSW5mb0NpcmNsZU91dGxpbmVkXCIpKTtcblxudmFyIF9BbnRkSWNvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL2NvbXBvbmVudHMvQW50ZEljb25cIikpO1xuXG4vLyBHRU5FUkFURSBCWSAuL3NjcmlwdHMvZ2VuZXJhdGUudHNcbi8vIERPTiBOT1QgRURJVCBJVCBNQU5VQUxMWVxudmFyIEluZm9DaXJjbGVPdXRsaW5lZCA9IGZ1bmN0aW9uIEluZm9DaXJjbGVPdXRsaW5lZChwcm9wcywgcmVmKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfQW50ZEljb24uZGVmYXVsdCwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICByZWY6IHJlZixcbiAgICBpY29uOiBfSW5mb0NpcmNsZU91dGxpbmVkLmRlZmF1bHRcbiAgfSkpO1xufTtcblxuSW5mb0NpcmNsZU91dGxpbmVkLmRpc3BsYXlOYW1lID0gJ0luZm9DaXJjbGVPdXRsaW5lZCc7XG5cbnZhciBfZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKEluZm9DaXJjbGVPdXRsaW5lZCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9Mb2FkaW5nT3V0bGluZWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29ucy1zdmcvbGliL2Fzbi9Mb2FkaW5nT3V0bGluZWRcIikpO1xuXG52YXIgX0FudGRJY29uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vY29tcG9uZW50cy9BbnRkSWNvblwiKSk7XG5cbi8vIEdFTkVSQVRFIEJZIC4vc2NyaXB0cy9nZW5lcmF0ZS50c1xuLy8gRE9OIE5PVCBFRElUIElUIE1BTlVBTExZXG52YXIgTG9hZGluZ091dGxpbmVkID0gZnVuY3Rpb24gTG9hZGluZ091dGxpbmVkKHByb3BzLCByZWYpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9BbnRkSWNvbi5kZWZhdWx0LCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcywge1xuICAgIHJlZjogcmVmLFxuICAgIGljb246IF9Mb2FkaW5nT3V0bGluZWQuZGVmYXVsdFxuICB9KSk7XG59O1xuXG5Mb2FkaW5nT3V0bGluZWQuZGlzcGxheU5hbWUgPSAnTG9hZGluZ091dGxpbmVkJztcblxudmFyIF9kZWZhdWx0ID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoTG9hZGluZ091dGxpbmVkKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy53YXJuaW5nID0gd2FybmluZztcbmV4cG9ydHMuaXNJY29uRGVmaW5pdGlvbiA9IGlzSWNvbkRlZmluaXRpb247XG5leHBvcnRzLm5vcm1hbGl6ZUF0dHJzID0gbm9ybWFsaXplQXR0cnM7XG5leHBvcnRzLmdlbmVyYXRlID0gZ2VuZXJhdGU7XG5leHBvcnRzLmdldFNlY29uZGFyeUNvbG9yID0gZ2V0U2Vjb25kYXJ5Q29sb3I7XG5leHBvcnRzLm5vcm1hbGl6ZVR3b1RvbmVDb2xvcnMgPSBub3JtYWxpemVUd29Ub25lQ29sb3JzO1xuZXhwb3J0cy51c2VJbnNlcnRTdHlsZXMgPSBleHBvcnRzLmljb25TdHlsZXMgPSBleHBvcnRzLnN2Z0Jhc2VQcm9wcyA9IHZvaWQgMDtcblxudmFyIF9vYmplY3RTcHJlYWQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RTcHJlYWQyXCIpKTtcblxudmFyIF90eXBlb2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIikpO1xuXG52YXIgX2NvbG9ycyA9IHJlcXVpcmUoXCJAYW50LWRlc2lnbi9jb2xvcnNcIik7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX3dhcm5pbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyYy11dGlsL2xpYi93YXJuaW5nXCIpKTtcblxudmFyIF9pbnNlcnRDc3MgPSByZXF1aXJlKFwiaW5zZXJ0LWNzc1wiKTtcblxuZnVuY3Rpb24gd2FybmluZyh2YWxpZCwgbWVzc2FnZSkge1xuICAoMCwgX3dhcm5pbmcuZGVmYXVsdCkodmFsaWQsIFwiW0BhbnQtZGVzaWduL2ljb25zXSBcIi5jb25jYXQobWVzc2FnZSkpO1xufVxuXG5mdW5jdGlvbiBpc0ljb25EZWZpbml0aW9uKHRhcmdldCkge1xuICByZXR1cm4gKDAsIF90eXBlb2YyLmRlZmF1bHQpKHRhcmdldCkgPT09ICdvYmplY3QnICYmIHR5cGVvZiB0YXJnZXQubmFtZSA9PT0gJ3N0cmluZycgJiYgdHlwZW9mIHRhcmdldC50aGVtZSA9PT0gJ3N0cmluZycgJiYgKCgwLCBfdHlwZW9mMi5kZWZhdWx0KSh0YXJnZXQuaWNvbikgPT09ICdvYmplY3QnIHx8IHR5cGVvZiB0YXJnZXQuaWNvbiA9PT0gJ2Z1bmN0aW9uJyk7XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUF0dHJzKCkge1xuICB2YXIgYXR0cnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICByZXR1cm4gT2JqZWN0LmtleXMoYXR0cnMpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBrZXkpIHtcbiAgICB2YXIgdmFsID0gYXR0cnNba2V5XTtcblxuICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICBjYXNlICdjbGFzcyc6XG4gICAgICAgIGFjYy5jbGFzc05hbWUgPSB2YWw7XG4gICAgICAgIGRlbGV0ZSBhY2MuY2xhc3M7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBhY2Nba2V5XSA9IHZhbDtcbiAgICB9XG5cbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlKG5vZGUsIGtleSwgcm9vdFByb3BzKSB7XG4gIGlmICghcm9vdFByb3BzKSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG5vZGUudGFnLCAoMCwgX29iamVjdFNwcmVhZDIuZGVmYXVsdCkoe1xuICAgICAga2V5OiBrZXlcbiAgICB9LCBub3JtYWxpemVBdHRycyhub2RlLmF0dHJzKSksIChub2RlLmNoaWxkcmVuIHx8IFtdKS5tYXAoZnVuY3Rpb24gKGNoaWxkLCBpbmRleCkge1xuICAgICAgcmV0dXJuIGdlbmVyYXRlKGNoaWxkLCBcIlwiLmNvbmNhdChrZXksIFwiLVwiKS5jb25jYXQobm9kZS50YWcsIFwiLVwiKS5jb25jYXQoaW5kZXgpKTtcbiAgICB9KSk7XG4gIH1cblxuICByZXR1cm4gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobm9kZS50YWcsICgwLCBfb2JqZWN0U3ByZWFkMi5kZWZhdWx0KSgoMCwgX29iamVjdFNwcmVhZDIuZGVmYXVsdCkoe1xuICAgIGtleToga2V5XG4gIH0sIG5vcm1hbGl6ZUF0dHJzKG5vZGUuYXR0cnMpKSwgcm9vdFByb3BzKSwgKG5vZGUuY2hpbGRyZW4gfHwgW10pLm1hcChmdW5jdGlvbiAoY2hpbGQsIGluZGV4KSB7XG4gICAgcmV0dXJuIGdlbmVyYXRlKGNoaWxkLCBcIlwiLmNvbmNhdChrZXksIFwiLVwiKS5jb25jYXQobm9kZS50YWcsIFwiLVwiKS5jb25jYXQoaW5kZXgpKTtcbiAgfSkpO1xufVxuXG5mdW5jdGlvbiBnZXRTZWNvbmRhcnlDb2xvcihwcmltYXJ5Q29sb3IpIHtcbiAgLy8gY2hvb3NlIHRoZSBzZWNvbmQgY29sb3JcbiAgcmV0dXJuICgwLCBfY29sb3JzLmdlbmVyYXRlKShwcmltYXJ5Q29sb3IpWzBdO1xufVxuXG5mdW5jdGlvbiBub3JtYWxpemVUd29Ub25lQ29sb3JzKHR3b1RvbmVDb2xvcikge1xuICBpZiAoIXR3b1RvbmVDb2xvcikge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIHJldHVybiBBcnJheS5pc0FycmF5KHR3b1RvbmVDb2xvcikgPyB0d29Ub25lQ29sb3IgOiBbdHdvVG9uZUNvbG9yXTtcbn0gLy8gVGhlc2UgcHJvcHMgbWFrZSBzdXJlIHRoYXQgdGhlIFNWRyBiZWhhdmlvdXJzIGxpa2UgZ2VuZXJhbCB0ZXh0LlxuLy8gUmVmZXJlbmNlOiBodHRwczovL2Jsb2cucHJvdG90eXByLmlvL2FsaWduLXN2Zy1pY29ucy10by10ZXh0LWFuZC1zYXktZ29vZGJ5ZS10by1mb250LWljb25zLWQ0NGIzZDdiMjZiNFxuXG5cbnZhciBzdmdCYXNlUHJvcHMgPSB7XG4gIHdpZHRoOiAnMWVtJyxcbiAgaGVpZ2h0OiAnMWVtJyxcbiAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gICdhcmlhLWhpZGRlbic6ICd0cnVlJyxcbiAgZm9jdXNhYmxlOiAnZmFsc2UnXG59O1xuZXhwb3J0cy5zdmdCYXNlUHJvcHMgPSBzdmdCYXNlUHJvcHM7XG52YXIgaWNvblN0eWxlcyA9IFwiXFxuLmFudGljb24ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbiAgdmVydGljYWwtYWxpZ246IC0wLjEyNWVtO1xcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXG59XFxuXFxuLmFudGljb24gPiAqIHtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5cXG4uYW50aWNvbiBzdmcge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4uYW50aWNvbjo6YmVmb3JlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5hbnRpY29uIC5hbnRpY29uLWljb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5hbnRpY29uW3RhYmluZGV4XSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hbnRpY29uLXNwaW46OmJlZm9yZSxcXG4uYW50aWNvbi1zcGluIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBsb2FkaW5nQ2lyY2xlIDFzIGluZmluaXRlIGxpbmVhcjtcXG4gIGFuaW1hdGlvbjogbG9hZGluZ0NpcmNsZSAxcyBpbmZpbml0ZSBsaW5lYXI7XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBsb2FkaW5nQ2lyY2xlIHtcXG4gIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgbG9hZGluZ0NpcmNsZSB7XFxuICAxMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG5cIjtcbmV4cG9ydHMuaWNvblN0eWxlcyA9IGljb25TdHlsZXM7XG52YXIgY3NzSW5qZWN0ZWRGbGFnID0gZmFsc2U7XG5cbnZhciB1c2VJbnNlcnRTdHlsZXMgPSBmdW5jdGlvbiB1c2VJbnNlcnRTdHlsZXMoKSB7XG4gIHZhciBzdHlsZVN0ciA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogaWNvblN0eWxlcztcbiAgKDAsIF9yZWFjdC51c2VFZmZlY3QpKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIWNzc0luamVjdGVkRmxhZykge1xuICAgICAgKDAsIF9pbnNlcnRDc3MuaW5zZXJ0Q3NzKShzdHlsZVN0ciwge1xuICAgICAgICBwcmVwZW5kOiB0cnVlXG4gICAgICB9KTtcbiAgICAgIGNzc0luamVjdGVkRmxhZyA9IHRydWU7XG4gICAgfVxuICB9LCBbXSk7XG59O1xuXG5leHBvcnRzLnVzZUluc2VydFN0eWxlcyA9IHVzZUluc2VydFN0eWxlczsiLCJ2YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9nZXRQcm90b3R5cGVPZlwiKTtcblxudmFyIGlzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IHJlcXVpcmUoXCIuL2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdFwiKTtcblxudmFyIHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gPSByZXF1aXJlKFwiLi9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuXCIpO1xuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkge1xuICB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IGlzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpO1xuICByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7XG4gICAgdmFyIFN1cGVyID0gZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksXG4gICAgICAgIHJlc3VsdDtcblxuICAgIGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7XG4gICAgICB2YXIgTmV3VGFyZ2V0ID0gZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7XG4gICAgICByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIHJldHVybiBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZVN1cGVyOyIsInZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoXCIuL2RlZmluZVByb3BlcnR5XCIpO1xuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpO1xuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7XG4gICAgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkge1xuICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7XG4gICAgfSk7XG4gICAga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpO1xuICB9XG5cbiAgcmV0dXJuIGtleXM7XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQyKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9O1xuXG4gICAgaWYgKGkgJSAyKSB7XG4gICAgICBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX29iamVjdFNwcmVhZDI7IiwidmFyIG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgPSByZXF1aXJlKFwiLi9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCIpO1xuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7XG4gIHZhciBrZXksIGk7XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc291cmNlU3ltYm9sS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldO1xuICAgICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7XG4gICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzOyIsImZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwicmVzZXRXYXJuZWRcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3dhcm5pbmcucmVzZXRXYXJuZWQ7XG4gIH1cbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfd2FybmluZyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyYy11dGlsL2xpYi93YXJuaW5nXCIpKTtcblxudmFyIF9kZWZhdWx0ID0gZnVuY3Rpb24gX2RlZmF1bHQodmFsaWQsIGNvbXBvbmVudCwgbWVzc2FnZSkge1xuICAoMCwgX3dhcm5pbmdbXCJkZWZhdWx0XCJdKSh2YWxpZCwgXCJbYW50ZDogXCIuY29uY2F0KGNvbXBvbmVudCwgXCJdIFwiKS5jb25jYXQobWVzc2FnZSkpO1xufTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9lbl9VUyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uL2RhdGUtcGlja2VyL2xvY2FsZS9lbl9VU1wiKSk7XG5cbnZhciBfZGVmYXVsdCA9IF9lbl9VU1tcImRlZmF1bHRcIl07XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBleHBvcnRzLlNpemVDb250ZXh0UHJvdmlkZXIgPSB2b2lkIDA7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBTaXplQ29udGV4dCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVDb250ZXh0KHVuZGVmaW5lZCk7XG5cbnZhciBTaXplQ29udGV4dFByb3ZpZGVyID0gZnVuY3Rpb24gU2l6ZUNvbnRleHRQcm92aWRlcihfcmVmKSB7XG4gIHZhciBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW4sXG4gICAgICBzaXplID0gX3JlZi5zaXplO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoU2l6ZUNvbnRleHQuQ29uc3VtZXIsIG51bGwsIGZ1bmN0aW9uIChvcmlnaW5TaXplKSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFNpemVDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgICB2YWx1ZTogc2l6ZSB8fCBvcmlnaW5TaXplXG4gICAgfSwgY2hpbGRyZW4pO1xuICB9KTtcbn07XG5cbmV4cG9ydHMuU2l6ZUNvbnRleHRQcm92aWRlciA9IFNpemVDb250ZXh0UHJvdmlkZXI7XG52YXIgX2RlZmF1bHQgPSBTaXplQ29udGV4dDtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy53aXRoQ29uZmlnQ29uc3VtZXIgPSB3aXRoQ29uZmlnQ29uc3VtZXI7XG5leHBvcnRzLkNvbmZpZ0NvbnN1bWVyID0gZXhwb3J0cy5Db25maWdDb250ZXh0ID0gdm9pZCAwO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9yZW5kZXJFbXB0eSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vcmVuZGVyRW1wdHlcIikpO1xuXG52YXIgZGVmYXVsdEdldFByZWZpeENscyA9IGZ1bmN0aW9uIGRlZmF1bHRHZXRQcmVmaXhDbHMoc3VmZml4Q2xzLCBjdXN0b21pemVQcmVmaXhDbHMpIHtcbiAgaWYgKGN1c3RvbWl6ZVByZWZpeENscykgcmV0dXJuIGN1c3RvbWl6ZVByZWZpeENscztcbiAgcmV0dXJuIHN1ZmZpeENscyA/IFwiYW50LVwiLmNvbmNhdChzdWZmaXhDbHMpIDogJ2FudCc7XG59O1xuXG52YXIgQ29uZmlnQ29udGV4dCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVDb250ZXh0KHtcbiAgLy8gV2UgcHJvdmlkZSBhIGRlZmF1bHQgZnVuY3Rpb24gZm9yIENvbnRleHQgd2l0aG91dCBwcm92aWRlclxuICBnZXRQcmVmaXhDbHM6IGRlZmF1bHRHZXRQcmVmaXhDbHMsXG4gIHJlbmRlckVtcHR5OiBfcmVuZGVyRW1wdHlbXCJkZWZhdWx0XCJdXG59KTtcbmV4cG9ydHMuQ29uZmlnQ29udGV4dCA9IENvbmZpZ0NvbnRleHQ7XG52YXIgQ29uZmlnQ29uc3VtZXIgPSBDb25maWdDb250ZXh0LkNvbnN1bWVyO1xuLyoqIEBkZXByZWNhdGVkIFVzZSBob29rcyBpbnN0ZWFkLiBUaGlzIGlzIGEgbGVnYWN5IGZ1bmN0aW9uICovXG5cbmV4cG9ydHMuQ29uZmlnQ29uc3VtZXIgPSBDb25maWdDb25zdW1lcjtcblxuZnVuY3Rpb24gd2l0aENvbmZpZ0NvbnN1bWVyKGNvbmZpZykge1xuICByZXR1cm4gZnVuY3Rpb24gd2l0aENvbmZpZ0NvbnN1bWVyRnVuYyhDb21wb25lbnQpIHtcbiAgICAvLyBXcmFwIHdpdGggQ29uZmlnQ29uc3VtZXIuIFNpbmNlIHdlIG5lZWQgY29tcGF0aWJsZSB3aXRoIHJlYWN0IDE1LCBiZSBjYXJlIHdoZW4gdXNpbmcgcmVmIG1ldGhvZHNcbiAgICB2YXIgU0ZDID0gZnVuY3Rpb24gU0ZDKHByb3BzKSB7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ29uZmlnQ29uc3VtZXIsIG51bGwsIGZ1bmN0aW9uIChjb25maWdQcm9wcykge1xuICAgICAgICB2YXIgYmFzaWNQcmVmaXhDbHMgPSBjb25maWcucHJlZml4Q2xzO1xuICAgICAgICB2YXIgZ2V0UHJlZml4Q2xzID0gY29uZmlnUHJvcHMuZ2V0UHJlZml4Q2xzO1xuICAgICAgICB2YXIgY3VzdG9taXplUHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzO1xuICAgICAgICB2YXIgcHJlZml4Q2xzID0gZ2V0UHJlZml4Q2xzKGJhc2ljUHJlZml4Q2xzLCBjdXN0b21pemVQcmVmaXhDbHMpO1xuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCAoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe30sIGNvbmZpZ1Byb3BzLCBwcm9wcywge1xuICAgICAgICAgIHByZWZpeENsczogcHJlZml4Q2xzXG4gICAgICAgIH0pKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICB2YXIgY29ucyA9IENvbXBvbmVudC5jb25zdHJ1Y3RvcjtcbiAgICB2YXIgbmFtZSA9IGNvbnMgJiYgY29ucy5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnQ29tcG9uZW50JztcbiAgICBTRkMuZGlzcGxheU5hbWUgPSBcIndpdGhDb25maWdDb25zdW1lcihcIi5jb25jYXQobmFtZSwgXCIpXCIpO1xuICAgIHJldHVybiBTRkM7XG4gIH07XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiQ29uZmlnQ29uc3VtZXJcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2NvbnRleHQuQ29uZmlnQ29uc3VtZXI7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiQ29uZmlnQ29udGV4dFwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfY29udGV4dC5Db25maWdDb250ZXh0O1xuICB9XG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZXhwb3J0cy5jb25maWdDb25zdW1lclByb3BzID0gdm9pZCAwO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9Db250ZXh0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnMvbGliL2NvbXBvbmVudHMvQ29udGV4dFwiKSk7XG5cbnZhciBfcmNGaWVsZEZvcm0gPSByZXF1aXJlKFwicmMtZmllbGQtZm9ybVwiKTtcblxudmFyIF91c2VNZW1vID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmMtdXRpbC9saWIvaG9va3MvdXNlTWVtb1wiKSk7XG5cbnZhciBfbG9jYWxlUHJvdmlkZXIgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi4vbG9jYWxlLXByb3ZpZGVyXCIpKTtcblxudmFyIF9Mb2NhbGVSZWNlaXZlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL2xvY2FsZS1wcm92aWRlci9Mb2NhbGVSZWNlaXZlclwiKSk7XG5cbnZhciBfY29udGV4dCA9IHJlcXVpcmUoXCIuL2NvbnRleHRcIik7XG5cbnZhciBfU2l6ZUNvbnRleHQgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi9TaXplQ29udGV4dFwiKSk7XG5cbnZhciBfbWVzc2FnZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL21lc3NhZ2VcIikpO1xuXG52YXIgX25vdGlmaWNhdGlvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL25vdGlmaWNhdGlvblwiKSk7XG5cbnZhciBjb25maWdDb25zdW1lclByb3BzID0gWydnZXRUYXJnZXRDb250YWluZXInLCAnZ2V0UG9wdXBDb250YWluZXInLCAncm9vdFByZWZpeENscycsICdnZXRQcmVmaXhDbHMnLCAncmVuZGVyRW1wdHknLCAnY3NwJywgJ2F1dG9JbnNlcnRTcGFjZUluQnV0dG9uJywgJ2xvY2FsZScsICdwYWdlSGVhZGVyJ107IC8vIFRoZXNlIHByb3BzIGlzIHVzZWQgYnkgYHVzZUNvbnRleHRgIGRpcmVjdGx5IGluIHN1YiBjb21wb25lbnRcblxuZXhwb3J0cy5jb25maWdDb25zdW1lclByb3BzID0gY29uZmlnQ29uc3VtZXJQcm9wcztcbnZhciBQQVNTRURfUFJPUFMgPSBbJ2dldFRhcmdldENvbnRhaW5lcicsICdnZXRQb3B1cENvbnRhaW5lcicsICdyZW5kZXJFbXB0eScsICdwYWdlSGVhZGVyJywgJ2lucHV0JywgJ2Zvcm0nXTtcblxudmFyIFByb3ZpZGVyQ2hpbGRyZW4gPSBmdW5jdGlvbiBQcm92aWRlckNoaWxkcmVuKHByb3BzKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgY3NwID0gcHJvcHMuY3NwLFxuICAgICAgYXV0b0luc2VydFNwYWNlSW5CdXR0b24gPSBwcm9wcy5hdXRvSW5zZXJ0U3BhY2VJbkJ1dHRvbixcbiAgICAgIGZvcm0gPSBwcm9wcy5mb3JtLFxuICAgICAgbG9jYWxlID0gcHJvcHMubG9jYWxlLFxuICAgICAgY29tcG9uZW50U2l6ZSA9IHByb3BzLmNvbXBvbmVudFNpemUsXG4gICAgICBkaXJlY3Rpb24gPSBwcm9wcy5kaXJlY3Rpb24sXG4gICAgICBzcGFjZSA9IHByb3BzLnNwYWNlLFxuICAgICAgdmlydHVhbCA9IHByb3BzLnZpcnR1YWwsXG4gICAgICBkcm9wZG93bk1hdGNoU2VsZWN0V2lkdGggPSBwcm9wcy5kcm9wZG93bk1hdGNoU2VsZWN0V2lkdGgsXG4gICAgICBsZWdhY3lMb2NhbGUgPSBwcm9wcy5sZWdhY3lMb2NhbGUsXG4gICAgICBwYXJlbnRDb250ZXh0ID0gcHJvcHMucGFyZW50Q29udGV4dCxcbiAgICAgIGljb25QcmVmaXhDbHMgPSBwcm9wcy5pY29uUHJlZml4Q2xzO1xuICB2YXIgZ2V0UHJlZml4Q2xzID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKHN1ZmZpeENscywgY3VzdG9taXplUHJlZml4Q2xzKSB7XG4gICAgdmFyIHByZWZpeENscyA9IHByb3BzLnByZWZpeENscztcbiAgICBpZiAoY3VzdG9taXplUHJlZml4Q2xzKSByZXR1cm4gY3VzdG9taXplUHJlZml4Q2xzO1xuICAgIHZhciBtZXJnZWRQcmVmaXhDbHMgPSBwcmVmaXhDbHMgfHwgcGFyZW50Q29udGV4dC5nZXRQcmVmaXhDbHMoJycpO1xuICAgIHJldHVybiBzdWZmaXhDbHMgPyBcIlwiLmNvbmNhdChtZXJnZWRQcmVmaXhDbHMsIFwiLVwiKS5jb25jYXQoc3VmZml4Q2xzKSA6IG1lcmdlZFByZWZpeENscztcbiAgfSwgW3BhcmVudENvbnRleHQuZ2V0UHJlZml4Q2xzXSk7XG4gIHZhciBjb25maWcgPSAoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHt9LCBwYXJlbnRDb250ZXh0KSwge1xuICAgIGNzcDogY3NwLFxuICAgIGF1dG9JbnNlcnRTcGFjZUluQnV0dG9uOiBhdXRvSW5zZXJ0U3BhY2VJbkJ1dHRvbixcbiAgICBsb2NhbGU6IGxvY2FsZSB8fCBsZWdhY3lMb2NhbGUsXG4gICAgZGlyZWN0aW9uOiBkaXJlY3Rpb24sXG4gICAgc3BhY2U6IHNwYWNlLFxuICAgIHZpcnR1YWw6IHZpcnR1YWwsXG4gICAgZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoOiBkcm9wZG93bk1hdGNoU2VsZWN0V2lkdGgsXG4gICAgZ2V0UHJlZml4Q2xzOiBnZXRQcmVmaXhDbHNcbiAgfSk7IC8vIFBhc3MgdGhlIHByb3BzIHVzZWQgYnkgYHVzZUNvbnRleHRgIGRpcmVjdGx5IHdpdGggY2hpbGQgY29tcG9uZW50LlxuICAvLyBUaGVzZSBwcm9wcyBzaG91bGQgbWVyZ2VkIGludG8gYGNvbmZpZ2AuXG5cbiAgUEFTU0VEX1BST1BTLmZvckVhY2goZnVuY3Rpb24gKHByb3BOYW1lKSB7XG4gICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcblxuICAgIGlmIChwcm9wVmFsdWUpIHtcbiAgICAgIGNvbmZpZ1twcm9wTmFtZV0gPSBwcm9wVmFsdWU7XG4gICAgfVxuICB9KTsgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9pc3N1ZXMvMjc2MTdcblxuICB2YXIgbWVtb2VkQ29uZmlnID0gKDAsIF91c2VNZW1vW1wiZGVmYXVsdFwiXSkoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBjb25maWc7XG4gIH0sIGNvbmZpZywgZnVuY3Rpb24gKHByZXZDb25maWcsIGN1cnJlbnRDb25maWcpIHtcbiAgICB2YXIgcHJldktleXMgPSBPYmplY3Qua2V5cyhwcmV2Q29uZmlnKTtcbiAgICB2YXIgY3VycmVudEtleXMgPSBPYmplY3Qua2V5cyhjdXJyZW50Q29uZmlnKTtcbiAgICByZXR1cm4gcHJldktleXMubGVuZ3RoICE9PSBjdXJyZW50S2V5cy5sZW5ndGggfHwgcHJldktleXMuc29tZShmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gcHJldkNvbmZpZ1trZXldICE9PSBjdXJyZW50Q29uZmlnW2tleV07XG4gICAgfSk7XG4gIH0pO1xuICB2YXIgbWVtb0ljb25Db250ZXh0VmFsdWUgPSBSZWFjdC51c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcHJlZml4Q2xzOiBpY29uUHJlZml4Q2xzXG4gICAgfTtcbiAgfSwgW2ljb25QcmVmaXhDbHNdKTtcbiAgdmFyIGNoaWxkTm9kZSA9IGNoaWxkcmVuOyAvLyBBZGRpdGlvbmFsIEZvcm0gcHJvdmlkZXJcblxuICB2YXIgdmFsaWRhdGVNZXNzYWdlcyA9IHt9O1xuXG4gIGlmIChsb2NhbGUgJiYgbG9jYWxlLkZvcm0gJiYgbG9jYWxlLkZvcm0uZGVmYXVsdFZhbGlkYXRlTWVzc2FnZXMpIHtcbiAgICB2YWxpZGF0ZU1lc3NhZ2VzID0gbG9jYWxlLkZvcm0uZGVmYXVsdFZhbGlkYXRlTWVzc2FnZXM7XG4gIH1cblxuICBpZiAoZm9ybSAmJiBmb3JtLnZhbGlkYXRlTWVzc2FnZXMpIHtcbiAgICB2YWxpZGF0ZU1lc3NhZ2VzID0gKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKCgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7fSwgdmFsaWRhdGVNZXNzYWdlcyksIGZvcm0udmFsaWRhdGVNZXNzYWdlcyk7XG4gIH1cblxuICBpZiAoT2JqZWN0LmtleXModmFsaWRhdGVNZXNzYWdlcykubGVuZ3RoID4gMCkge1xuICAgIGNoaWxkTm9kZSA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9yY0ZpZWxkRm9ybS5Gb3JtUHJvdmlkZXIsIHtcbiAgICAgIHZhbGlkYXRlTWVzc2FnZXM6IHZhbGlkYXRlTWVzc2FnZXNcbiAgICB9LCBjaGlsZHJlbik7XG4gIH1cblxuICBpZiAobG9jYWxlKSB7XG4gICAgY2hpbGROb2RlID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX2xvY2FsZVByb3ZpZGVyW1wiZGVmYXVsdFwiXSwge1xuICAgICAgbG9jYWxlOiBsb2NhbGUsXG4gICAgICBfQU5UX01BUktfXzogX2xvY2FsZVByb3ZpZGVyLkFOVF9NQVJLXG4gICAgfSwgY2hpbGROb2RlKTtcbiAgfVxuXG4gIGlmIChpY29uUHJlZml4Q2xzKSB7XG4gICAgY2hpbGROb2RlID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX0NvbnRleHRbXCJkZWZhdWx0XCJdLlByb3ZpZGVyLCB7XG4gICAgICB2YWx1ZTogbWVtb0ljb25Db250ZXh0VmFsdWVcbiAgICB9LCBjaGlsZE5vZGUpO1xuICB9XG5cbiAgaWYgKGNvbXBvbmVudFNpemUpIHtcbiAgICBjaGlsZE5vZGUgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfU2l6ZUNvbnRleHQuU2l6ZUNvbnRleHRQcm92aWRlciwge1xuICAgICAgc2l6ZTogY29tcG9uZW50U2l6ZVxuICAgIH0sIGNoaWxkTm9kZSk7XG4gIH1cblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX2NvbnRleHQuQ29uZmlnQ29udGV4dC5Qcm92aWRlciwge1xuICAgIHZhbHVlOiBtZW1vZWRDb25maWdcbiAgfSwgY2hpbGROb2RlKTtcbn07XG5cbnZhciBDb25maWdQcm92aWRlciA9IGZ1bmN0aW9uIENvbmZpZ1Byb3ZpZGVyKHByb3BzKSB7XG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHByb3BzLmRpcmVjdGlvbikge1xuICAgICAgX21lc3NhZ2VbXCJkZWZhdWx0XCJdLmNvbmZpZyh7XG4gICAgICAgIHJ0bDogcHJvcHMuZGlyZWN0aW9uID09PSAncnRsJ1xuICAgICAgfSk7XG5cbiAgICAgIF9ub3RpZmljYXRpb25bXCJkZWZhdWx0XCJdLmNvbmZpZyh7XG4gICAgICAgIHJ0bDogcHJvcHMuZGlyZWN0aW9uID09PSAncnRsJ1xuICAgICAgfSk7XG4gICAgfVxuICB9LCBbcHJvcHMuZGlyZWN0aW9uXSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfTG9jYWxlUmVjZWl2ZXJbXCJkZWZhdWx0XCJdLCBudWxsLCBmdW5jdGlvbiAoXywgX18sIGxlZ2FjeUxvY2FsZSkge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfY29udGV4dC5Db25maWdDb25zdW1lciwgbnVsbCwgZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChQcm92aWRlckNoaWxkcmVuLCAoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe1xuICAgICAgICBwYXJlbnRDb250ZXh0OiBjb250ZXh0LFxuICAgICAgICBsZWdhY3lMb2NhbGU6IGxlZ2FjeUxvY2FsZVxuICAgICAgfSwgcHJvcHMpKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuLyoqIEBwcml2YXRlIGludGVybmFsIHVzYWdlLiBkbyBub3QgdXNlIGluIHlvdXIgcHJvZHVjdGlvbiAqL1xuXG5cbkNvbmZpZ1Byb3ZpZGVyLkNvbmZpZ0NvbnRleHQgPSBfY29udGV4dC5Db25maWdDb250ZXh0O1xuQ29uZmlnUHJvdmlkZXIuU2l6ZUNvbnRleHQgPSBfU2l6ZUNvbnRleHRbXCJkZWZhdWx0XCJdO1xudmFyIF9kZWZhdWx0ID0gQ29uZmlnUHJvdmlkZXI7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX2VtcHR5ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vZW1wdHlcIikpO1xuXG52YXIgXyA9IHJlcXVpcmUoXCIuXCIpO1xuXG52YXIgcmVuZGVyRW1wdHkgPSBmdW5jdGlvbiByZW5kZXJFbXB0eShjb21wb25lbnROYW1lKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfLkNvbmZpZ0NvbnN1bWVyLCBudWxsLCBmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBnZXRQcmVmaXhDbHMgPSBfcmVmLmdldFByZWZpeENscztcbiAgICB2YXIgcHJlZml4ID0gZ2V0UHJlZml4Q2xzKCdlbXB0eScpO1xuXG4gICAgc3dpdGNoIChjb21wb25lbnROYW1lKSB7XG4gICAgICBjYXNlICdUYWJsZSc6XG4gICAgICBjYXNlICdMaXN0JzpcbiAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9lbXB0eVtcImRlZmF1bHRcIl0sIHtcbiAgICAgICAgICBpbWFnZTogX2VtcHR5W1wiZGVmYXVsdFwiXS5QUkVTRU5URURfSU1BR0VfU0lNUExFXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdTZWxlY3QnOlxuICAgICAgY2FzZSAnVHJlZVNlbGVjdCc6XG4gICAgICBjYXNlICdDYXNjYWRlcic6XG4gICAgICBjYXNlICdUcmFuc2Zlcic6XG4gICAgICBjYXNlICdNZW50aW9ucyc6XG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfZW1wdHlbXCJkZWZhdWx0XCJdLCB7XG4gICAgICAgICAgaW1hZ2U6IF9lbXB0eVtcImRlZmF1bHRcIl0uUFJFU0VOVEVEX0lNQUdFX1NJTVBMRSxcbiAgICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeCwgXCItc21hbGxcIilcbiAgICAgICAgfSk7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfZW1wdHlbXCJkZWZhdWx0XCJdLCBudWxsKTtcbiAgICB9XG4gIH0pO1xufTtcblxudmFyIF9kZWZhdWx0ID0gcmVuZGVyRW1wdHk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIF9lbl9VUyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJjLXBpY2tlci9saWIvbG9jYWxlL2VuX1VTXCIpKTtcblxudmFyIF9lbl9VUzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi90aW1lLXBpY2tlci9sb2NhbGUvZW5fVVNcIikpO1xuXG4vLyBNZXJnZSBpbnRvIGEgbG9jYWxlIG9iamVjdFxudmFyIGxvY2FsZSA9IHtcbiAgbGFuZzogKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHtcbiAgICBwbGFjZWhvbGRlcjogJ1NlbGVjdCBkYXRlJyxcbiAgICB5ZWFyUGxhY2Vob2xkZXI6ICdTZWxlY3QgeWVhcicsXG4gICAgcXVhcnRlclBsYWNlaG9sZGVyOiAnU2VsZWN0IHF1YXJ0ZXInLFxuICAgIG1vbnRoUGxhY2Vob2xkZXI6ICdTZWxlY3QgbW9udGgnLFxuICAgIHdlZWtQbGFjZWhvbGRlcjogJ1NlbGVjdCB3ZWVrJyxcbiAgICByYW5nZVBsYWNlaG9sZGVyOiBbJ1N0YXJ0IGRhdGUnLCAnRW5kIGRhdGUnXSxcbiAgICByYW5nZVllYXJQbGFjZWhvbGRlcjogWydTdGFydCB5ZWFyJywgJ0VuZCB5ZWFyJ10sXG4gICAgcmFuZ2VNb250aFBsYWNlaG9sZGVyOiBbJ1N0YXJ0IG1vbnRoJywgJ0VuZCBtb250aCddLFxuICAgIHJhbmdlV2Vla1BsYWNlaG9sZGVyOiBbJ1N0YXJ0IHdlZWsnLCAnRW5kIHdlZWsnXVxuICB9LCBfZW5fVVNbXCJkZWZhdWx0XCJdKSxcbiAgdGltZVBpY2tlckxvY2FsZTogKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHt9LCBfZW5fVVMyW1wiZGVmYXVsdFwiXSlcbn07IC8vIEFsbCBzZXR0aW5ncyBhdDpcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24vYmxvYi9tYXN0ZXIvY29tcG9uZW50cy9kYXRlLXBpY2tlci9sb2NhbGUvZXhhbXBsZS5qc29uXG5cbnZhciBfZGVmYXVsdCA9IGxvY2FsZTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9jb25maWdQcm92aWRlciA9IHJlcXVpcmUoXCIuLi9jb25maWctcHJvdmlkZXJcIik7XG5cbnZhciBFbXB0eSA9IGZ1bmN0aW9uIEVtcHR5KCkge1xuICB2YXIgX1JlYWN0JHVzZUNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KF9jb25maWdQcm92aWRlci5Db25maWdDb250ZXh0KSxcbiAgICAgIGdldFByZWZpeENscyA9IF9SZWFjdCR1c2VDb250ZXh0LmdldFByZWZpeENscztcblxuICB2YXIgcHJlZml4Q2xzID0gZ2V0UHJlZml4Q2xzKCdlbXB0eS1pbWctZGVmYXVsdCcpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwge1xuICAgIGNsYXNzTmFtZTogcHJlZml4Q2xzLFxuICAgIHdpZHRoOiBcIjE4NFwiLFxuICAgIGhlaWdodDogXCIxNTJcIixcbiAgICB2aWV3Qm94OiBcIjAgMCAxODQgMTUyXCIsXG4gICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImdcIiwge1xuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIGZpbGxSdWxlOiBcImV2ZW5vZGRcIlxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImdcIiwge1xuICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoMjQgMzEuNjcpXCJcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJlbGxpcHNlXCIsIHtcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItZWxsaXBzZVwiKSxcbiAgICBjeDogXCI2Ny43OTdcIixcbiAgICBjeTogXCIxMDYuODlcIixcbiAgICByeDogXCI2Ny43OTdcIixcbiAgICByeTogXCIxMi42NjhcIlxuICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItcGF0aC0xXCIpLFxuICAgIGQ6IFwiTTEyMi4wMzQgNjkuNjc0TDk4LjEwOSA0MC4yMjljLTEuMTQ4LTEuMzg2LTIuODI2LTIuMjI1LTQuNTkzLTIuMjI1aC01MS40NGMtMS43NjYgMC0zLjQ0NC44MzktNC41OTIgMi4yMjVMMTMuNTYgNjkuNjc0djE1LjM4M2gxMDguNDc1VjY5LjY3NHpcIlxuICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItcGF0aC0yXCIpLFxuICAgIGQ6IFwiTTEwMS41MzcgODYuMjE0TDgwLjYzIDYxLjEwMmMtMS4wMDEtMS4yMDctMi41MDctMS44NjctNC4wNDgtMS44NjdIMzEuNzI0Yy0xLjU0IDAtMy4wNDcuNjYtNC4wNDggMS44NjdMNi43NjkgODYuMjE0djEzLjc5Mmg5NC43NjhWODYuMjE0elwiLFxuICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoMTMuNTYpXCJcbiAgfSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXBhdGgtM1wiKSxcbiAgICBkOiBcIk0zMy44MyAwaDY3LjkzM2E0IDQgMCAwIDEgNCA0djkzLjM0NGE0IDQgMCAwIDEtNCA0SDMzLjgzYTQgNCAwIDAgMS00LTRWNGE0IDQgMCAwIDEgNC00elwiXG4gIH0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1wYXRoLTRcIiksXG4gICAgZDogXCJNNDIuNjc4IDkuOTUzaDUwLjIzN2EyIDIgMCAwIDEgMiAyVjM2LjkxYTIgMiAwIDAgMS0yIDJINDIuNjc4YTIgMiAwIDAgMS0yLTJWMTEuOTUzYTIgMiAwIDAgMSAyLTJ6TTQyLjk0IDQ5Ljc2N2g0OS43MTNhMi4yNjIgMi4yNjIgMCAxIDEgMCA0LjUyNEg0Mi45NGEyLjI2MiAyLjI2MiAwIDAgMSAwLTQuNTI0ek00Mi45NCA2MS41M2g0OS43MTNhMi4yNjIgMi4yNjIgMCAxIDEgMCA0LjUyNUg0Mi45NGEyLjI2MiAyLjI2MiAwIDAgMSAwLTQuNTI1ek0xMjEuODEzIDEwNS4wMzJjLS43NzUgMy4wNzEtMy40OTcgNS4zNi02LjczNSA1LjM2SDIwLjUxNWMtMy4yMzggMC01Ljk2LTIuMjktNi43MzQtNS4zNmE3LjMwOSA3LjMwOSAwIDAgMS0uMjIyLTEuNzlWNjkuNjc1aDI2LjMxOGMyLjkwNyAwIDUuMjUgMi40NDggNS4yNSA1LjQydi4wNGMwIDIuOTcxIDIuMzcgNS4zNyA1LjI3NyA1LjM3aDM0Ljc4NWMyLjkwNyAwIDUuMjc3LTIuNDIxIDUuMjc3LTUuMzkzVjc1LjFjMC0yLjk3MiAyLjM0My01LjQyNiA1LjI1LTUuNDI2aDI2LjMxOHYzMy41NjljMCAuNjE3LS4wNzcgMS4yMTYtLjIyMSAxLjc4OXpcIlxuICB9KSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXBhdGgtNVwiKSxcbiAgICBkOiBcIk0xNDkuMTIxIDMzLjI5MmwtNi44MyAyLjY1YTEgMSAwIDAgMS0xLjMxNy0xLjIzbDEuOTM3LTYuMjA3Yy0yLjU4OS0yLjk0NC00LjEwOS02LjUzNC00LjEwOS0xMC40MDhDMTM4LjgwMiA4LjEwMiAxNDguOTIgMCAxNjEuNDAyIDAgMTczLjg4MSAwIDE4NCA4LjEwMiAxODQgMTguMDk3YzAgOS45OTUtMTAuMTE4IDE4LjA5Ny0yMi41OTkgMTguMDk3LTQuNTI4IDAtOC43NDQtMS4wNjYtMTIuMjgtMi45MDJ6XCJcbiAgfSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZ1wiLCB7XG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWdcIiksXG4gICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgxNDkuNjUgMTUuMzgzKVwiXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZWxsaXBzZVwiLCB7XG4gICAgY3g6IFwiMjAuNjU0XCIsXG4gICAgY3k6IFwiMy4xNjdcIixcbiAgICByeDogXCIyLjg0OVwiLFxuICAgIHJ5OiBcIjIuODE1XCJcbiAgfSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZDogXCJNNS42OTggNS42M0gwTDIuODk4LjcwNHpNOS4yNTkuNzA0aDQuOTg1VjUuNjNIOS4yNTl6XCJcbiAgfSkpKSk7XG59O1xuXG52YXIgX2RlZmF1bHQgPSBFbXB0eTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfZXh0ZW5kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIikpO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKTtcblxudmFyIF9jb25maWdQcm92aWRlciA9IHJlcXVpcmUoXCIuLi9jb25maWctcHJvdmlkZXJcIik7XG5cbnZhciBfTG9jYWxlUmVjZWl2ZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9sb2NhbGUtcHJvdmlkZXIvTG9jYWxlUmVjZWl2ZXJcIikpO1xuXG52YXIgX2VtcHR5ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9lbXB0eVwiKSk7XG5cbnZhciBfc2ltcGxlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9zaW1wbGVcIikpO1xuXG52YXIgX19yZXN0ID0gdm9pZCAwICYmICh2b2lkIDApLl9fcmVzdCB8fCBmdW5jdGlvbiAocywgZSkge1xuICB2YXIgdCA9IHt9O1xuXG4gIGZvciAodmFyIHAgaW4gcykge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMCkgdFtwXSA9IHNbcF07XG4gIH1cblxuICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpIHRbcFtpXV0gPSBzW3BbaV1dO1xuICB9XG4gIHJldHVybiB0O1xufTtcblxudmFyIGRlZmF1bHRFbXB0eUltZyA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9lbXB0eVtcImRlZmF1bHRcIl0sIG51bGwpO1xudmFyIHNpbXBsZUVtcHR5SW1nID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX3NpbXBsZVtcImRlZmF1bHRcIl0sIG51bGwpO1xuXG52YXIgRW1wdHkgPSBmdW5jdGlvbiBFbXB0eShfYSkge1xuICB2YXIgY2xhc3NOYW1lID0gX2EuY2xhc3NOYW1lLFxuICAgICAgY3VzdG9taXplUHJlZml4Q2xzID0gX2EucHJlZml4Q2xzLFxuICAgICAgX2EkaW1hZ2UgPSBfYS5pbWFnZSxcbiAgICAgIGltYWdlID0gX2EkaW1hZ2UgPT09IHZvaWQgMCA/IGRlZmF1bHRFbXB0eUltZyA6IF9hJGltYWdlLFxuICAgICAgZGVzY3JpcHRpb24gPSBfYS5kZXNjcmlwdGlvbixcbiAgICAgIGNoaWxkcmVuID0gX2EuY2hpbGRyZW4sXG4gICAgICBpbWFnZVN0eWxlID0gX2EuaW1hZ2VTdHlsZSxcbiAgICAgIHJlc3RQcm9wcyA9IF9fcmVzdChfYSwgW1wiY2xhc3NOYW1lXCIsIFwicHJlZml4Q2xzXCIsIFwiaW1hZ2VcIiwgXCJkZXNjcmlwdGlvblwiLCBcImNoaWxkcmVuXCIsIFwiaW1hZ2VTdHlsZVwiXSk7XG5cbiAgdmFyIF9SZWFjdCR1c2VDb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChfY29uZmlnUHJvdmlkZXIuQ29uZmlnQ29udGV4dCksXG4gICAgICBnZXRQcmVmaXhDbHMgPSBfUmVhY3QkdXNlQ29udGV4dC5nZXRQcmVmaXhDbHMsXG4gICAgICBkaXJlY3Rpb24gPSBfUmVhY3QkdXNlQ29udGV4dC5kaXJlY3Rpb247XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9Mb2NhbGVSZWNlaXZlcltcImRlZmF1bHRcIl0sIHtcbiAgICBjb21wb25lbnROYW1lOiBcIkVtcHR5XCJcbiAgfSwgZnVuY3Rpb24gKGxvY2FsZSkge1xuICAgIHZhciBfY2xhc3NOYW1lcztcblxuICAgIHZhciBwcmVmaXhDbHMgPSBnZXRQcmVmaXhDbHMoJ2VtcHR5JywgY3VzdG9taXplUHJlZml4Q2xzKTtcbiAgICB2YXIgZGVzID0gdHlwZW9mIGRlc2NyaXB0aW9uICE9PSAndW5kZWZpbmVkJyA/IGRlc2NyaXB0aW9uIDogbG9jYWxlLmRlc2NyaXB0aW9uO1xuICAgIHZhciBhbHQgPSB0eXBlb2YgZGVzID09PSAnc3RyaW5nJyA/IGRlcyA6ICdlbXB0eSc7XG4gICAgdmFyIGltYWdlTm9kZSA9IG51bGw7XG5cbiAgICBpZiAodHlwZW9mIGltYWdlID09PSAnc3RyaW5nJykge1xuICAgICAgaW1hZ2VOb2RlID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwge1xuICAgICAgICBhbHQ6IGFsdCxcbiAgICAgICAgc3JjOiBpbWFnZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGltYWdlTm9kZSA9IGltYWdlO1xuICAgIH1cblxuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCAoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe1xuICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKShwcmVmaXhDbHMsIChfY2xhc3NOYW1lcyA9IHt9LCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLW5vcm1hbFwiKSwgaW1hZ2UgPT09IHNpbXBsZUVtcHR5SW1nKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1ydGxcIiksIGRpcmVjdGlvbiA9PT0gJ3J0bCcpLCBfY2xhc3NOYW1lcyksIGNsYXNzTmFtZSlcbiAgICB9LCByZXN0UHJvcHMpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItaW1hZ2VcIiksXG4gICAgICBzdHlsZTogaW1hZ2VTdHlsZVxuICAgIH0sIGltYWdlTm9kZSksIGRlcyAmJiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItZGVzY3JpcHRpb25cIilcbiAgICB9LCBkZXMpLCBjaGlsZHJlbiAmJiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItZm9vdGVyXCIpXG4gICAgfSwgY2hpbGRyZW4pKTtcbiAgfSk7XG59O1xuXG5FbXB0eS5QUkVTRU5URURfSU1BR0VfREVGQVVMVCA9IGRlZmF1bHRFbXB0eUltZztcbkVtcHR5LlBSRVNFTlRFRF9JTUFHRV9TSU1QTEUgPSBzaW1wbGVFbXB0eUltZztcbnZhciBfZGVmYXVsdCA9IEVtcHR5O1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX2NvbmZpZ1Byb3ZpZGVyID0gcmVxdWlyZShcIi4uL2NvbmZpZy1wcm92aWRlclwiKTtcblxudmFyIFNpbXBsZSA9IGZ1bmN0aW9uIFNpbXBsZSgpIHtcbiAgdmFyIF9SZWFjdCR1c2VDb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChfY29uZmlnUHJvdmlkZXIuQ29uZmlnQ29udGV4dCksXG4gICAgICBnZXRQcmVmaXhDbHMgPSBfUmVhY3QkdXNlQ29udGV4dC5nZXRQcmVmaXhDbHM7XG5cbiAgdmFyIHByZWZpeENscyA9IGdldFByZWZpeENscygnZW1wdHktaW1nLXNpbXBsZScpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwge1xuICAgIGNsYXNzTmFtZTogcHJlZml4Q2xzLFxuICAgIHdpZHRoOiBcIjY0XCIsXG4gICAgaGVpZ2h0OiBcIjQxXCIsXG4gICAgdmlld0JveDogXCIwIDAgNjQgNDFcIixcbiAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZ1wiLCB7XG4gICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgwIDEpXCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgZmlsbFJ1bGU6IFwiZXZlbm9kZFwiXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZWxsaXBzZVwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWVsbGlwc2VcIiksXG4gICAgY3g6IFwiMzJcIixcbiAgICBjeTogXCIzM1wiLFxuICAgIHJ4OiBcIjMyXCIsXG4gICAgcnk6IFwiN1wiXG4gIH0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImdcIiwge1xuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1nXCIpLFxuICAgIGZpbGxSdWxlOiBcIm5vbnplcm9cIlxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTU1IDEyLjc2TDQ0Ljg1NCAxLjI1OEM0NC4zNjcuNDc0IDQzLjY1NiAwIDQyLjkwNyAwSDIxLjA5M2MtLjc0OSAwLTEuNDYuNDc0LTEuOTQ3IDEuMjU3TDkgMTIuNzYxVjIyaDQ2di05LjI0elwiXG4gIH0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTQxLjYxMyAxNS45MzFjMC0xLjYwNS45OTQtMi45MyAyLjIyNy0yLjkzMUg1NXYxOC4xMzdDNTUgMzMuMjYgNTMuNjggMzUgNTIuMDUgMzVoLTQwLjFDMTAuMzIgMzUgOSAzMy4yNTkgOSAzMS4xMzdWMTNoMTEuMTZjMS4yMzMgMCAyLjIyNyAxLjMyMyAyLjIyNyAyLjkyOHYuMDIyYzAgMS42MDUgMS4wMDUgMi45MDEgMi4yMzcgMi45MDFoMTQuNzUyYzEuMjMyIDAgMi4yMzctMS4zMDggMi4yMzctMi45MTN2LS4wMDd6XCIsXG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXBhdGhcIilcbiAgfSkpKSk7XG59O1xuXG52YXIgX2RlZmF1bHQgPSBTaW1wbGU7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkxpc3RcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3JjRmllbGRGb3JtLkxpc3Q7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidXNlRm9ybVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfdXNlRm9ybTNbXCJkZWZhdWx0XCJdO1xuICB9XG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIF90eXBlb2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIikpO1xuXG52YXIgX3NsaWNlZFRvQXJyYXkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5XCIpKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5XCIpKTtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9jbGFzc25hbWVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSk7XG5cbnZhciBfcmNGaWVsZEZvcm0gPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmMtZmllbGQtZm9ybVwiKSk7XG5cbnZhciBfY29uZmlnUHJvdmlkZXIgPSByZXF1aXJlKFwiLi4vY29uZmlnLXByb3ZpZGVyXCIpO1xuXG52YXIgX2NvbnRleHQgPSByZXF1aXJlKFwiLi9jb250ZXh0XCIpO1xuXG52YXIgX3VzZUZvcm0zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9ob29rcy91c2VGb3JtXCIpKTtcblxudmFyIF9TaXplQ29udGV4dCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuLi9jb25maWctcHJvdmlkZXIvU2l6ZUNvbnRleHRcIikpO1xuXG52YXIgX19yZXN0ID0gdm9pZCAwICYmICh2b2lkIDApLl9fcmVzdCB8fCBmdW5jdGlvbiAocywgZSkge1xuICB2YXIgdCA9IHt9O1xuXG4gIGZvciAodmFyIHAgaW4gcykge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMCkgdFtwXSA9IHNbcF07XG4gIH1cblxuICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpIHRbcFtpXV0gPSBzW3BbaV1dO1xuICB9XG4gIHJldHVybiB0O1xufTtcblxudmFyIEludGVybmFsRm9ybSA9IGZ1bmN0aW9uIEludGVybmFsRm9ybShwcm9wcywgcmVmKSB7XG4gIHZhciBfY2xhc3NOYW1lcztcblxuICB2YXIgY29udGV4dFNpemUgPSBSZWFjdC51c2VDb250ZXh0KF9TaXplQ29udGV4dFtcImRlZmF1bHRcIl0pO1xuXG4gIHZhciBfUmVhY3QkdXNlQ29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoX2NvbmZpZ1Byb3ZpZGVyLkNvbmZpZ0NvbnRleHQpLFxuICAgICAgZ2V0UHJlZml4Q2xzID0gX1JlYWN0JHVzZUNvbnRleHQuZ2V0UHJlZml4Q2xzLFxuICAgICAgZGlyZWN0aW9uID0gX1JlYWN0JHVzZUNvbnRleHQuZGlyZWN0aW9uLFxuICAgICAgY29udGV4dEZvcm0gPSBfUmVhY3QkdXNlQ29udGV4dC5mb3JtO1xuXG4gIHZhciBjdXN0b21pemVQcmVmaXhDbHMgPSBwcm9wcy5wcmVmaXhDbHMsXG4gICAgICBfcHJvcHMkY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY2xhc3NOYW1lID0gX3Byb3BzJGNsYXNzTmFtZSA9PT0gdm9pZCAwID8gJycgOiBfcHJvcHMkY2xhc3NOYW1lLFxuICAgICAgX3Byb3BzJHNpemUgPSBwcm9wcy5zaXplLFxuICAgICAgc2l6ZSA9IF9wcm9wcyRzaXplID09PSB2b2lkIDAgPyBjb250ZXh0U2l6ZSA6IF9wcm9wcyRzaXplLFxuICAgICAgZm9ybSA9IHByb3BzLmZvcm0sXG4gICAgICBjb2xvbiA9IHByb3BzLmNvbG9uLFxuICAgICAgbGFiZWxBbGlnbiA9IHByb3BzLmxhYmVsQWxpZ24sXG4gICAgICBsYWJlbENvbCA9IHByb3BzLmxhYmVsQ29sLFxuICAgICAgd3JhcHBlckNvbCA9IHByb3BzLndyYXBwZXJDb2wsXG4gICAgICBoaWRlUmVxdWlyZWRNYXJrID0gcHJvcHMuaGlkZVJlcXVpcmVkTWFyayxcbiAgICAgIF9wcm9wcyRsYXlvdXQgPSBwcm9wcy5sYXlvdXQsXG4gICAgICBsYXlvdXQgPSBfcHJvcHMkbGF5b3V0ID09PSB2b2lkIDAgPyAnaG9yaXpvbnRhbCcgOiBfcHJvcHMkbGF5b3V0LFxuICAgICAgc2Nyb2xsVG9GaXJzdEVycm9yID0gcHJvcHMuc2Nyb2xsVG9GaXJzdEVycm9yLFxuICAgICAgcmVxdWlyZWRNYXJrID0gcHJvcHMucmVxdWlyZWRNYXJrLFxuICAgICAgb25GaW5pc2hGYWlsZWQgPSBwcm9wcy5vbkZpbmlzaEZhaWxlZCxcbiAgICAgIG5hbWUgPSBwcm9wcy5uYW1lLFxuICAgICAgcmVzdEZvcm1Qcm9wcyA9IF9fcmVzdChwcm9wcywgW1wicHJlZml4Q2xzXCIsIFwiY2xhc3NOYW1lXCIsIFwic2l6ZVwiLCBcImZvcm1cIiwgXCJjb2xvblwiLCBcImxhYmVsQWxpZ25cIiwgXCJsYWJlbENvbFwiLCBcIndyYXBwZXJDb2xcIiwgXCJoaWRlUmVxdWlyZWRNYXJrXCIsIFwibGF5b3V0XCIsIFwic2Nyb2xsVG9GaXJzdEVycm9yXCIsIFwicmVxdWlyZWRNYXJrXCIsIFwib25GaW5pc2hGYWlsZWRcIiwgXCJuYW1lXCJdKTtcblxuICB2YXIgbWVyZ2VkUmVxdWlyZWRNYXJrID0gKDAsIFJlYWN0LnVzZU1lbW8pKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAocmVxdWlyZWRNYXJrICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiByZXF1aXJlZE1hcms7XG4gICAgfVxuXG4gICAgaWYgKGNvbnRleHRGb3JtICYmIGNvbnRleHRGb3JtLnJlcXVpcmVkTWFyayAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gY29udGV4dEZvcm0ucmVxdWlyZWRNYXJrO1xuICAgIH1cblxuICAgIGlmIChoaWRlUmVxdWlyZWRNYXJrKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH0sIFtoaWRlUmVxdWlyZWRNYXJrLCByZXF1aXJlZE1hcmssIGNvbnRleHRGb3JtXSk7XG4gIHZhciBwcmVmaXhDbHMgPSBnZXRQcmVmaXhDbHMoJ2Zvcm0nLCBjdXN0b21pemVQcmVmaXhDbHMpO1xuICB2YXIgZm9ybUNsYXNzTmFtZSA9ICgwLCBfY2xhc3NuYW1lc1tcImRlZmF1bHRcIl0pKHByZWZpeENscywgKF9jbGFzc05hbWVzID0ge30sICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItXCIpLmNvbmNhdChsYXlvdXQpLCB0cnVlKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1oaWRlLXJlcXVpcmVkLW1hcmtcIiksIG1lcmdlZFJlcXVpcmVkTWFyayA9PT0gZmFsc2UpLCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXJ0bFwiKSwgZGlyZWN0aW9uID09PSAncnRsJyksICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItXCIpLmNvbmNhdChzaXplKSwgc2l6ZSksIF9jbGFzc05hbWVzKSwgY2xhc3NOYW1lKTtcblxuICB2YXIgX3VzZUZvcm0gPSAoMCwgX3VzZUZvcm0zW1wiZGVmYXVsdFwiXSkoZm9ybSksXG4gICAgICBfdXNlRm9ybTIgPSAoMCwgX3NsaWNlZFRvQXJyYXkyW1wiZGVmYXVsdFwiXSkoX3VzZUZvcm0sIDEpLFxuICAgICAgd3JhcEZvcm0gPSBfdXNlRm9ybTJbMF07XG5cbiAgdmFyIF9fSU5URVJOQUxfXyA9IHdyYXBGb3JtLl9fSU5URVJOQUxfXztcbiAgX19JTlRFUk5BTF9fLm5hbWUgPSBuYW1lO1xuICB2YXIgZm9ybUNvbnRleHRWYWx1ZSA9ICgwLCBSZWFjdC51c2VNZW1vKShmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICBsYWJlbEFsaWduOiBsYWJlbEFsaWduLFxuICAgICAgbGFiZWxDb2w6IGxhYmVsQ29sLFxuICAgICAgd3JhcHBlckNvbDogd3JhcHBlckNvbCxcbiAgICAgIHZlcnRpY2FsOiBsYXlvdXQgPT09ICd2ZXJ0aWNhbCcsXG4gICAgICBjb2xvbjogY29sb24sXG4gICAgICByZXF1aXJlZE1hcms6IG1lcmdlZFJlcXVpcmVkTWFyayxcbiAgICAgIGl0ZW1SZWY6IF9fSU5URVJOQUxfXy5pdGVtUmVmXG4gICAgfTtcbiAgfSwgW25hbWUsIGxhYmVsQWxpZ24sIGxhYmVsQ29sLCB3cmFwcGVyQ29sLCBsYXlvdXQsIGNvbG9uLCBtZXJnZWRSZXF1aXJlZE1hcmtdKTtcbiAgUmVhY3QudXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gd3JhcEZvcm07XG4gIH0pO1xuXG4gIHZhciBvbkludGVybmFsRmluaXNoRmFpbGVkID0gZnVuY3Rpb24gb25JbnRlcm5hbEZpbmlzaEZhaWxlZChlcnJvckluZm8pIHtcbiAgICBpZiAob25GaW5pc2hGYWlsZWQpIHtcbiAgICAgIG9uRmluaXNoRmFpbGVkKGVycm9ySW5mbyk7XG4gICAgfVxuXG4gICAgdmFyIGRlZmF1bHRTY3JvbGxUb0ZpcnN0RXJyb3IgPSB7XG4gICAgICBibG9jazogJ25lYXJlc3QnXG4gICAgfTtcblxuICAgIGlmIChzY3JvbGxUb0ZpcnN0RXJyb3IgJiYgZXJyb3JJbmZvLmVycm9yRmllbGRzLmxlbmd0aCkge1xuICAgICAgaWYgKCgwLCBfdHlwZW9mMltcImRlZmF1bHRcIl0pKHNjcm9sbFRvRmlyc3RFcnJvcikgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGRlZmF1bHRTY3JvbGxUb0ZpcnN0RXJyb3IgPSBzY3JvbGxUb0ZpcnN0RXJyb3I7XG4gICAgICB9XG5cbiAgICAgIHdyYXBGb3JtLnNjcm9sbFRvRmllbGQoZXJyb3JJbmZvLmVycm9yRmllbGRzWzBdLm5hbWUsIGRlZmF1bHRTY3JvbGxUb0ZpcnN0RXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX1NpemVDb250ZXh0LlNpemVDb250ZXh0UHJvdmlkZXIsIHtcbiAgICBzaXplOiBzaXplXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9jb250ZXh0LkZvcm1Db250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IGZvcm1Db250ZXh0VmFsdWVcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX3JjRmllbGRGb3JtW1wiZGVmYXVsdFwiXSwgKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHtcbiAgICBpZDogbmFtZVxuICB9LCByZXN0Rm9ybVByb3BzLCB7XG4gICAgbmFtZTogbmFtZSxcbiAgICBvbkZpbmlzaEZhaWxlZDogb25JbnRlcm5hbEZpbmlzaEZhaWxlZCxcbiAgICBmb3JtOiB3cmFwRm9ybSxcbiAgICBjbGFzc05hbWU6IGZvcm1DbGFzc05hbWVcbiAgfSkpKSk7XG59O1xuXG52YXIgRm9ybSA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKEludGVybmFsRm9ybSk7XG52YXIgX2RlZmF1bHQgPSBGb3JtO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLkZvcm1JdGVtUHJlZml4Q29udGV4dCA9IGV4cG9ydHMuRm9ybVByb3ZpZGVyID0gZXhwb3J0cy5Gb3JtSXRlbUNvbnRleHQgPSBleHBvcnRzLkZvcm1Db250ZXh0ID0gdm9pZCAwO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX29taXQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyYy11dGlsL2xpYi9vbWl0XCIpKTtcblxudmFyIF9yY0ZpZWxkRm9ybSA9IHJlcXVpcmUoXCJyYy1maWVsZC1mb3JtXCIpO1xuXG52YXIgRm9ybUNvbnRleHQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlQ29udGV4dCh7XG4gIGxhYmVsQWxpZ246ICdyaWdodCcsXG4gIHZlcnRpY2FsOiBmYWxzZSxcbiAgaXRlbVJlZjogZnVuY3Rpb24gaXRlbVJlZigpIHt9XG59KTtcbmV4cG9ydHMuRm9ybUNvbnRleHQgPSBGb3JtQ29udGV4dDtcbnZhciBGb3JtSXRlbUNvbnRleHQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlQ29udGV4dCh7XG4gIHVwZGF0ZUl0ZW1FcnJvcnM6IGZ1bmN0aW9uIHVwZGF0ZUl0ZW1FcnJvcnMoKSB7fVxufSk7XG5leHBvcnRzLkZvcm1JdGVtQ29udGV4dCA9IEZvcm1JdGVtQ29udGV4dDtcblxudmFyIEZvcm1Qcm92aWRlciA9IGZ1bmN0aW9uIEZvcm1Qcm92aWRlcihwcm9wcykge1xuICB2YXIgcHJvdmlkZXJQcm9wcyA9ICgwLCBfb21pdFtcImRlZmF1bHRcIl0pKHByb3BzLCBbJ3ByZWZpeENscyddKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9yY0ZpZWxkRm9ybS5Gb3JtUHJvdmlkZXIsIHByb3ZpZGVyUHJvcHMpO1xufTtcblxuZXhwb3J0cy5Gb3JtUHJvdmlkZXIgPSBGb3JtUHJvdmlkZXI7XG52YXIgRm9ybUl0ZW1QcmVmaXhDb250ZXh0ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUNvbnRleHQoe1xuICBwcmVmaXhDbHM6ICcnXG59KTtcbmV4cG9ydHMuRm9ybUl0ZW1QcmVmaXhDb250ZXh0ID0gRm9ybUl0ZW1QcmVmaXhDb250ZXh0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdXNlRm9ybTtcblxudmFyIF9leHRlbmRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7XG5cbnZhciBfc2xpY2VkVG9BcnJheTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXlcIikpO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX3JjRmllbGRGb3JtID0gcmVxdWlyZShcInJjLWZpZWxkLWZvcm1cIik7XG5cbnZhciBfc2Nyb2xsSW50b1ZpZXdJZk5lZWRlZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInNjcm9sbC1pbnRvLXZpZXctaWYtbmVlZGVkXCIpKTtcblxudmFyIF91dGlsID0gcmVxdWlyZShcIi4uL3V0aWxcIik7XG5cbmZ1bmN0aW9uIHRvTmFtZVBhdGhTdHIobmFtZSkge1xuICB2YXIgbmFtZVBhdGggPSAoMCwgX3V0aWwudG9BcnJheSkobmFtZSk7XG4gIHJldHVybiBuYW1lUGF0aC5qb2luKCdfJyk7XG59XG5cbmZ1bmN0aW9uIHVzZUZvcm0oZm9ybSkge1xuICB2YXIgX3VzZVJjRm9ybSA9ICgwLCBfcmNGaWVsZEZvcm0udXNlRm9ybSkoKSxcbiAgICAgIF91c2VSY0Zvcm0yID0gKDAsIF9zbGljZWRUb0FycmF5MltcImRlZmF1bHRcIl0pKF91c2VSY0Zvcm0sIDEpLFxuICAgICAgcmNGb3JtID0gX3VzZVJjRm9ybTJbMF07XG5cbiAgdmFyIGl0ZW1zUmVmID0gUmVhY3QudXNlUmVmKHt9KTtcbiAgdmFyIHdyYXBGb3JtID0gUmVhY3QudXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGZvcm0gfHwgKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKCgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7fSwgcmNGb3JtKSwge1xuICAgICAgX19JTlRFUk5BTF9fOiB7XG4gICAgICAgIGl0ZW1SZWY6IGZ1bmN0aW9uIGl0ZW1SZWYobmFtZSkge1xuICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgdmFyIG5hbWVQYXRoU3RyID0gdG9OYW1lUGF0aFN0cihuYW1lKTtcblxuICAgICAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICAgICAgaXRlbXNSZWYuY3VycmVudFtuYW1lUGF0aFN0cl0gPSBub2RlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZGVsZXRlIGl0ZW1zUmVmLmN1cnJlbnRbbmFtZVBhdGhTdHJdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBzY3JvbGxUb0ZpZWxkOiBmdW5jdGlvbiBzY3JvbGxUb0ZpZWxkKG5hbWUpIHtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgICAgICB2YXIgbmFtZVBhdGggPSAoMCwgX3V0aWwudG9BcnJheSkobmFtZSk7XG4gICAgICAgIHZhciBmaWVsZElkID0gKDAsIF91dGlsLmdldEZpZWxkSWQpKG5hbWVQYXRoLCB3cmFwRm9ybS5fX0lOVEVSTkFMX18ubmFtZSk7XG4gICAgICAgIHZhciBub2RlID0gZmllbGRJZCA/IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGZpZWxkSWQpIDogbnVsbDtcblxuICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgICgwLCBfc2Nyb2xsSW50b1ZpZXdJZk5lZWRlZFtcImRlZmF1bHRcIl0pKG5vZGUsICgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7XG4gICAgICAgICAgICBzY3JvbGxNb2RlOiAnaWYtbmVlZGVkJyxcbiAgICAgICAgICAgIGJsb2NrOiAnbmVhcmVzdCdcbiAgICAgICAgICB9LCBvcHRpb25zKSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBnZXRGaWVsZEluc3RhbmNlOiBmdW5jdGlvbiBnZXRGaWVsZEluc3RhbmNlKG5hbWUpIHtcbiAgICAgICAgdmFyIG5hbWVQYXRoU3RyID0gdG9OYW1lUGF0aFN0cihuYW1lKTtcbiAgICAgICAgcmV0dXJuIGl0ZW1zUmVmLmN1cnJlbnRbbmFtZVBhdGhTdHJdO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCBbZm9ybSwgcmNGb3JtXSk7XG4gIHJldHVybiBbd3JhcEZvcm1dO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy50b0FycmF5ID0gdG9BcnJheTtcbmV4cG9ydHMuZ2V0RmllbGRJZCA9IGdldEZpZWxkSWQ7XG5cbmZ1bmN0aW9uIHRvQXJyYXkoY2FuZGlkYXRlKSB7XG4gIGlmIChjYW5kaWRhdGUgPT09IHVuZGVmaW5lZCB8fCBjYW5kaWRhdGUgPT09IGZhbHNlKSByZXR1cm4gW107XG4gIHJldHVybiBBcnJheS5pc0FycmF5KGNhbmRpZGF0ZSkgPyBjYW5kaWRhdGUgOiBbY2FuZGlkYXRlXTtcbn1cblxuZnVuY3Rpb24gZ2V0RmllbGRJZChuYW1lUGF0aCwgZm9ybU5hbWUpIHtcbiAgaWYgKCFuYW1lUGF0aC5sZW5ndGgpIHJldHVybiB1bmRlZmluZWQ7XG4gIHZhciBtZXJnZWRJZCA9IG5hbWVQYXRoLmpvaW4oJ18nKTtcbiAgcmV0dXJuIGZvcm1OYW1lID8gXCJcIi5jb25jYXQoZm9ybU5hbWUsIFwiX1wiKS5jb25jYXQobWVyZ2VkSWQpIDogbWVyZ2VkSWQ7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy51c2VMb2NhbGVSZWNlaXZlciA9IHVzZUxvY2FsZVJlY2VpdmVyO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfZXh0ZW5kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2tcIikpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3NcIikpO1xuXG52YXIgX2luaGVyaXRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHNcIikpO1xuXG52YXIgX2NyZWF0ZVN1cGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlU3VwZXJcIikpO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX2RlZmF1bHQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2RlZmF1bHRcIikpO1xuXG52YXIgX2NvbnRleHQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2NvbnRleHRcIikpO1xuXG52YXIgTG9jYWxlUmVjZWl2ZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgKDAsIF9pbmhlcml0czJbXCJkZWZhdWx0XCJdKShMb2NhbGVSZWNlaXZlciwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgdmFyIF9zdXBlciA9ICgwLCBfY3JlYXRlU3VwZXIyW1wiZGVmYXVsdFwiXSkoTG9jYWxlUmVjZWl2ZXIpO1xuXG4gIGZ1bmN0aW9uIExvY2FsZVJlY2VpdmVyKCkge1xuICAgICgwLCBfY2xhc3NDYWxsQ2hlY2syW1wiZGVmYXVsdFwiXSkodGhpcywgTG9jYWxlUmVjZWl2ZXIpO1xuICAgIHJldHVybiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gICgwLCBfY3JlYXRlQ2xhc3MyW1wiZGVmYXVsdFwiXSkoTG9jYWxlUmVjZWl2ZXIsIFt7XG4gICAga2V5OiBcImdldExvY2FsZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRMb2NhbGUoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGNvbXBvbmVudE5hbWUgPSBfdGhpcyRwcm9wcy5jb21wb25lbnROYW1lLFxuICAgICAgICAgIGRlZmF1bHRMb2NhbGUgPSBfdGhpcyRwcm9wcy5kZWZhdWx0TG9jYWxlO1xuICAgICAgdmFyIGxvY2FsZSA9IGRlZmF1bHRMb2NhbGUgfHwgX2RlZmF1bHRbXCJkZWZhdWx0XCJdW2NvbXBvbmVudE5hbWUgfHwgJ2dsb2JhbCddO1xuICAgICAgdmFyIGFudExvY2FsZSA9IHRoaXMuY29udGV4dDtcbiAgICAgIHZhciBsb2NhbGVGcm9tQ29udGV4dCA9IGNvbXBvbmVudE5hbWUgJiYgYW50TG9jYWxlID8gYW50TG9jYWxlW2NvbXBvbmVudE5hbWVdIDoge307XG4gICAgICByZXR1cm4gKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKCgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7fSwgdHlwZW9mIGxvY2FsZSA9PT0gJ2Z1bmN0aW9uJyA/IGxvY2FsZSgpIDogbG9jYWxlKSwgbG9jYWxlRnJvbUNvbnRleHQgfHwge30pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRMb2NhbGVDb2RlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldExvY2FsZUNvZGUoKSB7XG4gICAgICB2YXIgYW50TG9jYWxlID0gdGhpcy5jb250ZXh0O1xuICAgICAgdmFyIGxvY2FsZUNvZGUgPSBhbnRMb2NhbGUgJiYgYW50TG9jYWxlLmxvY2FsZTsgLy8gSGFkIHVzZSBMb2NhbGVQcm92aWRlIGJ1dCBkaWRuJ3Qgc2V0IGxvY2FsZVxuXG4gICAgICBpZiAoYW50TG9jYWxlICYmIGFudExvY2FsZS5leGlzdCAmJiAhbG9jYWxlQ29kZSkge1xuICAgICAgICByZXR1cm4gX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmxvY2FsZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGxvY2FsZUNvZGU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbih0aGlzLmdldExvY2FsZSgpLCB0aGlzLmdldExvY2FsZUNvZGUoKSwgdGhpcy5jb250ZXh0KTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIExvY2FsZVJlY2VpdmVyO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IExvY2FsZVJlY2VpdmVyO1xuTG9jYWxlUmVjZWl2ZXIuZGVmYXVsdFByb3BzID0ge1xuICBjb21wb25lbnROYW1lOiAnZ2xvYmFsJ1xufTtcbkxvY2FsZVJlY2VpdmVyLmNvbnRleHRUeXBlID0gX2NvbnRleHRbXCJkZWZhdWx0XCJdO1xuXG5mdW5jdGlvbiB1c2VMb2NhbGVSZWNlaXZlcihjb21wb25lbnROYW1lLCBkZWZhdWx0TG9jYWxlKSB7XG4gIHZhciBhbnRMb2NhbGUgPSBSZWFjdC51c2VDb250ZXh0KF9jb250ZXh0W1wiZGVmYXVsdFwiXSk7XG4gIHZhciBjb21wb25lbnRMb2NhbGUgPSBSZWFjdC51c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbG9jYWxlID0gZGVmYXVsdExvY2FsZSB8fCBfZGVmYXVsdFtcImRlZmF1bHRcIl1bY29tcG9uZW50TmFtZSB8fCAnZ2xvYmFsJ107XG4gICAgdmFyIGxvY2FsZUZyb21Db250ZXh0ID0gY29tcG9uZW50TmFtZSAmJiBhbnRMb2NhbGUgPyBhbnRMb2NhbGVbY29tcG9uZW50TmFtZV0gOiB7fTtcbiAgICByZXR1cm4gKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKCgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7fSwgdHlwZW9mIGxvY2FsZSA9PT0gJ2Z1bmN0aW9uJyA/IGxvY2FsZSgpIDogbG9jYWxlKSwgbG9jYWxlRnJvbUNvbnRleHQgfHwge30pO1xuICB9LCBbY29tcG9uZW50TmFtZSwgZGVmYXVsdExvY2FsZSwgYW50TG9jYWxlXSk7XG4gIHJldHVybiBbY29tcG9uZW50TG9jYWxlXTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG52YXIgTG9jYWxlQ29udGV4dCA9IC8qI19fUFVSRV9fKi8oMCwgX3JlYWN0LmNyZWF0ZUNvbnRleHQpKHVuZGVmaW5lZCk7XG52YXIgX2RlZmF1bHQgPSBMb2NhbGVDb250ZXh0O1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9kZWZhdWx0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL2xvY2FsZS9kZWZhdWx0XCIpKTtcblxudmFyIF9kZWZhdWx0ID0gX2RlZmF1bHQyW1wiZGVmYXVsdFwiXTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBleHBvcnRzLkFOVF9NQVJLID0gdm9pZCAwO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrXCIpKTtcblxudmFyIF9jcmVhdGVDbGFzczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzXCIpKTtcblxudmFyIF9pbmhlcml0czIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzXCIpKTtcblxudmFyIF9jcmVhdGVTdXBlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZVN1cGVyXCIpKTtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9kZXZXYXJuaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vX3V0aWwvZGV2V2FybmluZ1wiKSk7XG5cbnZhciBfbG9jYWxlID0gcmVxdWlyZShcIi4uL21vZGFsL2xvY2FsZVwiKTtcblxudmFyIF9jb250ZXh0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9jb250ZXh0XCIpKTtcblxudmFyIEFOVF9NQVJLID0gJ2ludGVybmFsTWFyayc7XG5leHBvcnRzLkFOVF9NQVJLID0gQU5UX01BUks7XG5cbnZhciBMb2NhbGVQcm92aWRlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAoMCwgX2luaGVyaXRzMltcImRlZmF1bHRcIl0pKExvY2FsZVByb3ZpZGVyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICB2YXIgX3N1cGVyID0gKDAsIF9jcmVhdGVTdXBlcjJbXCJkZWZhdWx0XCJdKShMb2NhbGVQcm92aWRlcik7XG5cbiAgZnVuY3Rpb24gTG9jYWxlUHJvdmlkZXIocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICAoMCwgX2NsYXNzQ2FsbENoZWNrMltcImRlZmF1bHRcIl0pKHRoaXMsIExvY2FsZVByb3ZpZGVyKTtcbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHByb3BzKTtcbiAgICAoMCwgX2xvY2FsZS5jaGFuZ2VDb25maXJtTG9jYWxlKShwcm9wcy5sb2NhbGUgJiYgcHJvcHMubG9jYWxlLk1vZGFsKTtcbiAgICAoMCwgX2Rldldhcm5pbmdbXCJkZWZhdWx0XCJdKShwcm9wcy5fQU5UX01BUktfXyA9PT0gQU5UX01BUkssICdMb2NhbGVQcm92aWRlcicsICdgTG9jYWxlUHJvdmlkZXJgIGlzIGRlcHJlY2F0ZWQuIFBsZWFzZSB1c2UgYGxvY2FsZWAgd2l0aCBgQ29uZmlnUHJvdmlkZXJgIGluc3RlYWQ6IGh0dHA6Ly91LmFudC5kZXNpZ24vbG9jYWxlJyk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgKDAsIF9jcmVhdGVDbGFzczJbXCJkZWZhdWx0XCJdKShMb2NhbGVQcm92aWRlciwgW3tcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkVXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICAgIHZhciBsb2NhbGUgPSB0aGlzLnByb3BzLmxvY2FsZTtcblxuICAgICAgaWYgKHByZXZQcm9wcy5sb2NhbGUgIT09IGxvY2FsZSkge1xuICAgICAgICAoMCwgX2xvY2FsZS5jaGFuZ2VDb25maXJtTG9jYWxlKShsb2NhbGUgJiYgbG9jYWxlLk1vZGFsKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50V2lsbFVubW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAoMCwgX2xvY2FsZS5jaGFuZ2VDb25maXJtTG9jYWxlKSgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBsb2NhbGUgPSBfdGhpcyRwcm9wcy5sb2NhbGUsXG4gICAgICAgICAgY2hpbGRyZW4gPSBfdGhpcyRwcm9wcy5jaGlsZHJlbjtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfY29udGV4dFtcImRlZmF1bHRcIl0uUHJvdmlkZXIsIHtcbiAgICAgICAgdmFsdWU6ICgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSgoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe30sIGxvY2FsZSksIHtcbiAgICAgICAgICBleGlzdDogdHJ1ZVxuICAgICAgICB9KVxuICAgICAgfSwgY2hpbGRyZW4pO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gTG9jYWxlUHJvdmlkZXI7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gTG9jYWxlUHJvdmlkZXI7XG5Mb2NhbGVQcm92aWRlci5kZWZhdWx0UHJvcHMgPSB7XG4gIGxvY2FsZToge31cbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfZW5fVVMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyYy1wYWdpbmF0aW9uL2xpYi9sb2NhbGUvZW5fVVNcIikpO1xuXG52YXIgX2VuX1VTMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL2RhdGUtcGlja2VyL2xvY2FsZS9lbl9VU1wiKSk7XG5cbnZhciBfZW5fVVMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vdGltZS1waWNrZXIvbG9jYWxlL2VuX1VTXCIpKTtcblxudmFyIF9lbl9VUzQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9jYWxlbmRhci9sb2NhbGUvZW5fVVNcIikpO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby10ZW1wbGF0ZS1jdXJseS1pbi1zdHJpbmcgKi9cbnZhciB0eXBlVGVtcGxhdGUgPSAnJHtsYWJlbH0gaXMgbm90IGEgdmFsaWQgJHt0eXBlfSc7XG52YXIgbG9jYWxlVmFsdWVzID0ge1xuICBsb2NhbGU6ICdlbicsXG4gIFBhZ2luYXRpb246IF9lbl9VU1tcImRlZmF1bHRcIl0sXG4gIERhdGVQaWNrZXI6IF9lbl9VUzJbXCJkZWZhdWx0XCJdLFxuICBUaW1lUGlja2VyOiBfZW5fVVMzW1wiZGVmYXVsdFwiXSxcbiAgQ2FsZW5kYXI6IF9lbl9VUzRbXCJkZWZhdWx0XCJdLFxuICBnbG9iYWw6IHtcbiAgICBwbGFjZWhvbGRlcjogJ1BsZWFzZSBzZWxlY3QnXG4gIH0sXG4gIFRhYmxlOiB7XG4gICAgZmlsdGVyVGl0bGU6ICdGaWx0ZXIgbWVudScsXG4gICAgZmlsdGVyQ29uZmlybTogJ09LJyxcbiAgICBmaWx0ZXJSZXNldDogJ1Jlc2V0JyxcbiAgICBmaWx0ZXJFbXB0eVRleHQ6ICdObyBmaWx0ZXJzJyxcbiAgICBlbXB0eVRleHQ6ICdObyBkYXRhJyxcbiAgICBzZWxlY3RBbGw6ICdTZWxlY3QgY3VycmVudCBwYWdlJyxcbiAgICBzZWxlY3RJbnZlcnQ6ICdJbnZlcnQgY3VycmVudCBwYWdlJyxcbiAgICBzZWxlY3ROb25lOiAnQ2xlYXIgYWxsIGRhdGEnLFxuICAgIHNlbGVjdGlvbkFsbDogJ1NlbGVjdCBhbGwgZGF0YScsXG4gICAgc29ydFRpdGxlOiAnU29ydCcsXG4gICAgZXhwYW5kOiAnRXhwYW5kIHJvdycsXG4gICAgY29sbGFwc2U6ICdDb2xsYXBzZSByb3cnLFxuICAgIHRyaWdnZXJEZXNjOiAnQ2xpY2sgdG8gc29ydCBkZXNjZW5kaW5nJyxcbiAgICB0cmlnZ2VyQXNjOiAnQ2xpY2sgdG8gc29ydCBhc2NlbmRpbmcnLFxuICAgIGNhbmNlbFNvcnQ6ICdDbGljayB0byBjYW5jZWwgc29ydGluZydcbiAgfSxcbiAgTW9kYWw6IHtcbiAgICBva1RleHQ6ICdPSycsXG4gICAgY2FuY2VsVGV4dDogJ0NhbmNlbCcsXG4gICAganVzdE9rVGV4dDogJ09LJ1xuICB9LFxuICBQb3Bjb25maXJtOiB7XG4gICAgb2tUZXh0OiAnT0snLFxuICAgIGNhbmNlbFRleHQ6ICdDYW5jZWwnXG4gIH0sXG4gIFRyYW5zZmVyOiB7XG4gICAgdGl0bGVzOiBbJycsICcnXSxcbiAgICBzZWFyY2hQbGFjZWhvbGRlcjogJ1NlYXJjaCBoZXJlJyxcbiAgICBpdGVtVW5pdDogJ2l0ZW0nLFxuICAgIGl0ZW1zVW5pdDogJ2l0ZW1zJyxcbiAgICByZW1vdmU6ICdSZW1vdmUnLFxuICAgIHNlbGVjdEN1cnJlbnQ6ICdTZWxlY3QgY3VycmVudCBwYWdlJyxcbiAgICByZW1vdmVDdXJyZW50OiAnUmVtb3ZlIGN1cnJlbnQgcGFnZScsXG4gICAgc2VsZWN0QWxsOiAnU2VsZWN0IGFsbCBkYXRhJyxcbiAgICByZW1vdmVBbGw6ICdSZW1vdmUgYWxsIGRhdGEnLFxuICAgIHNlbGVjdEludmVydDogJ0ludmVydCBjdXJyZW50IHBhZ2UnXG4gIH0sXG4gIFVwbG9hZDoge1xuICAgIHVwbG9hZGluZzogJ1VwbG9hZGluZy4uLicsXG4gICAgcmVtb3ZlRmlsZTogJ1JlbW92ZSBmaWxlJyxcbiAgICB1cGxvYWRFcnJvcjogJ1VwbG9hZCBlcnJvcicsXG4gICAgcHJldmlld0ZpbGU6ICdQcmV2aWV3IGZpbGUnLFxuICAgIGRvd25sb2FkRmlsZTogJ0Rvd25sb2FkIGZpbGUnXG4gIH0sXG4gIEVtcHR5OiB7XG4gICAgZGVzY3JpcHRpb246ICdObyBEYXRhJ1xuICB9LFxuICBJY29uOiB7XG4gICAgaWNvbjogJ2ljb24nXG4gIH0sXG4gIFRleHQ6IHtcbiAgICBlZGl0OiAnRWRpdCcsXG4gICAgY29weTogJ0NvcHknLFxuICAgIGNvcGllZDogJ0NvcGllZCcsXG4gICAgZXhwYW5kOiAnRXhwYW5kJ1xuICB9LFxuICBQYWdlSGVhZGVyOiB7XG4gICAgYmFjazogJ0JhY2snXG4gIH0sXG4gIEZvcm06IHtcbiAgICBvcHRpb25hbDogJyhvcHRpb25hbCknLFxuICAgIGRlZmF1bHRWYWxpZGF0ZU1lc3NhZ2VzOiB7XG4gICAgICBcImRlZmF1bHRcIjogJ0ZpZWxkIHZhbGlkYXRpb24gZXJyb3IgZm9yICR7bGFiZWx9JyxcbiAgICAgIHJlcXVpcmVkOiAnUGxlYXNlIGVudGVyICR7bGFiZWx9JyxcbiAgICAgIFwiZW51bVwiOiAnJHtsYWJlbH0gbXVzdCBiZSBvbmUgb2YgWyR7ZW51bX1dJyxcbiAgICAgIHdoaXRlc3BhY2U6ICcke2xhYmVsfSBjYW5ub3QgYmUgYSBibGFuayBjaGFyYWN0ZXInLFxuICAgICAgZGF0ZToge1xuICAgICAgICBmb3JtYXQ6ICcke2xhYmVsfSBkYXRlIGZvcm1hdCBpcyBpbnZhbGlkJyxcbiAgICAgICAgcGFyc2U6ICcke2xhYmVsfSBjYW5ub3QgYmUgY29udmVydGVkIHRvIGEgZGF0ZScsXG4gICAgICAgIGludmFsaWQ6ICcke2xhYmVsfSBpcyBhbiBpbnZhbGlkIGRhdGUnXG4gICAgICB9LFxuICAgICAgdHlwZXM6IHtcbiAgICAgICAgc3RyaW5nOiB0eXBlVGVtcGxhdGUsXG4gICAgICAgIG1ldGhvZDogdHlwZVRlbXBsYXRlLFxuICAgICAgICBhcnJheTogdHlwZVRlbXBsYXRlLFxuICAgICAgICBvYmplY3Q6IHR5cGVUZW1wbGF0ZSxcbiAgICAgICAgbnVtYmVyOiB0eXBlVGVtcGxhdGUsXG4gICAgICAgIGRhdGU6IHR5cGVUZW1wbGF0ZSxcbiAgICAgICAgXCJib29sZWFuXCI6IHR5cGVUZW1wbGF0ZSxcbiAgICAgICAgaW50ZWdlcjogdHlwZVRlbXBsYXRlLFxuICAgICAgICBcImZsb2F0XCI6IHR5cGVUZW1wbGF0ZSxcbiAgICAgICAgcmVnZXhwOiB0eXBlVGVtcGxhdGUsXG4gICAgICAgIGVtYWlsOiB0eXBlVGVtcGxhdGUsXG4gICAgICAgIHVybDogdHlwZVRlbXBsYXRlLFxuICAgICAgICBoZXg6IHR5cGVUZW1wbGF0ZVxuICAgICAgfSxcbiAgICAgIHN0cmluZzoge1xuICAgICAgICBsZW46ICcke2xhYmVsfSBtdXN0IGJlICR7bGVufSBjaGFyYWN0ZXJzJyxcbiAgICAgICAgbWluOiAnJHtsYWJlbH0gbXVzdCBiZSBhdCBsZWFzdCAke21pbn0gY2hhcmFjdGVycycsXG4gICAgICAgIG1heDogJyR7bGFiZWx9IG11c3QgYmUgdXAgdG8gJHttYXh9IGNoYXJhY3RlcnMnLFxuICAgICAgICByYW5nZTogJyR7bGFiZWx9IG11c3QgYmUgYmV0d2VlbiAke21pbn0tJHttYXh9IGNoYXJhY3RlcnMnXG4gICAgICB9LFxuICAgICAgbnVtYmVyOiB7XG4gICAgICAgIGxlbjogJyR7bGFiZWx9IG11c3QgYmUgZXF1YWwgdG8gJHtsZW59JyxcbiAgICAgICAgbWluOiAnJHtsYWJlbH0gbXVzdCBiZSBtaW5pbXVtICR7bWlufScsXG4gICAgICAgIG1heDogJyR7bGFiZWx9IG11c3QgYmUgbWF4aW11bSAke21heH0nLFxuICAgICAgICByYW5nZTogJyR7bGFiZWx9IG11c3QgYmUgYmV0d2VlbiAke21pbn0tJHttYXh9J1xuICAgICAgfSxcbiAgICAgIGFycmF5OiB7XG4gICAgICAgIGxlbjogJ011c3QgYmUgJHtsZW59ICR7bGFiZWx9JyxcbiAgICAgICAgbWluOiAnQXQgbGVhc3QgJHttaW59ICR7bGFiZWx9JyxcbiAgICAgICAgbWF4OiAnQXQgbW9zdCAke21heH0gJHtsYWJlbH0nLFxuICAgICAgICByYW5nZTogJ1RoZSBhbW91bnQgb2YgJHtsYWJlbH0gbXVzdCBiZSBiZXR3ZWVuICR7bWlufS0ke21heH0nXG4gICAgICB9LFxuICAgICAgcGF0dGVybjoge1xuICAgICAgICBtaXNtYXRjaDogJyR7bGFiZWx9IGRvZXMgbm90IG1hdGNoIHRoZSBwYXR0ZXJuICR7cGF0dGVybn0nXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBJbWFnZToge1xuICAgIHByZXZpZXc6ICdQcmV2aWV3J1xuICB9XG59O1xudmFyIF9kZWZhdWx0ID0gbG9jYWxlVmFsdWVzO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGNyZWF0ZVVzZU1lc3NhZ2U7XG5cbnZhciBfZXh0ZW5kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO1xuXG52YXIgX3NsaWNlZFRvQXJyYXkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5XCIpKTtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF91c2VOb3RpZmljYXRpb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyYy1ub3RpZmljYXRpb24vbGliL3VzZU5vdGlmaWNhdGlvblwiKSk7XG5cbnZhciBfY29uZmlnUHJvdmlkZXIgPSByZXF1aXJlKFwiLi4vLi4vY29uZmlnLXByb3ZpZGVyXCIpO1xuXG52YXIgXyA9IHJlcXVpcmUoXCIuLlwiKTtcblxuZnVuY3Rpb24gY3JlYXRlVXNlTWVzc2FnZShnZXRSY05vdGlmaWNhdGlvbkluc3RhbmNlLCBnZXRSQ05vdGljZVByb3BzKSB7XG4gIHZhciB1c2VNZXNzYWdlID0gZnVuY3Rpb24gdXNlTWVzc2FnZSgpIHtcbiAgICAvLyBXZSBjYW4gb25seSBnZXQgY29udGVudCBieSByZW5kZXJcbiAgICB2YXIgZ2V0UHJlZml4Q2xzOyAvLyBXZSBjcmVhdGUgYSBwcm94eSB0byBoYW5kbGUgZGVsYXkgY3JlYXRlZCBpbnN0YW5jZVxuXG4gICAgdmFyIGlubmVySW5zdGFuY2UgPSBudWxsO1xuICAgIHZhciBwcm94eSA9IHtcbiAgICAgIGFkZDogZnVuY3Rpb24gYWRkKG5vdGljZVByb3BzLCBob2xkZXJDYWxsYmFjaykge1xuICAgICAgICBpbm5lckluc3RhbmNlID09PSBudWxsIHx8IGlubmVySW5zdGFuY2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGlubmVySW5zdGFuY2UuY29tcG9uZW50LmFkZChub3RpY2VQcm9wcywgaG9sZGVyQ2FsbGJhY2spO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgX3VzZVJDTm90aWZpY2F0aW9uID0gKDAsIF91c2VOb3RpZmljYXRpb25bXCJkZWZhdWx0XCJdKShwcm94eSksXG4gICAgICAgIF91c2VSQ05vdGlmaWNhdGlvbjIgPSAoMCwgX3NsaWNlZFRvQXJyYXkyW1wiZGVmYXVsdFwiXSkoX3VzZVJDTm90aWZpY2F0aW9uLCAyKSxcbiAgICAgICAgaG9va05vdGlmeSA9IF91c2VSQ05vdGlmaWNhdGlvbjJbMF0sXG4gICAgICAgIGhvbGRlciA9IF91c2VSQ05vdGlmaWNhdGlvbjJbMV07XG5cbiAgICBmdW5jdGlvbiBub3RpZnkoYXJncykge1xuICAgICAgdmFyIGN1c3RvbWl6ZVByZWZpeENscyA9IGFyZ3MucHJlZml4Q2xzO1xuICAgICAgdmFyIG1lcmdlZFByZWZpeENscyA9IGdldFByZWZpeENscygnbWVzc2FnZScsIGN1c3RvbWl6ZVByZWZpeENscyk7XG4gICAgICB2YXIgdGFyZ2V0ID0gYXJncy5rZXkgfHwgKDAsIF8uZ2V0S2V5VGhlbkluY3JlYXNlS2V5KSgpO1xuICAgICAgdmFyIGNsb3NlUHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgIHZhciBjYWxsYmFjayA9IGZ1bmN0aW9uIGNhbGxiYWNrKCkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYXJncy5vbkNsb3NlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBhcmdzLm9uQ2xvc2UoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgfTtcblxuICAgICAgICBnZXRSY05vdGlmaWNhdGlvbkluc3RhbmNlKCgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSgoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe30sIGFyZ3MpLCB7XG4gICAgICAgICAgcHJlZml4Q2xzOiBtZXJnZWRQcmVmaXhDbHNcbiAgICAgICAgfSksIGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICAgICAgdmFyIHByZWZpeENscyA9IF9yZWYucHJlZml4Q2xzLFxuICAgICAgICAgICAgICBpbnN0YW5jZSA9IF9yZWYuaW5zdGFuY2U7XG4gICAgICAgICAgaW5uZXJJbnN0YW5jZSA9IGluc3RhbmNlO1xuICAgICAgICAgIGhvb2tOb3RpZnkoZ2V0UkNOb3RpY2VQcm9wcygoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHt9LCBhcmdzKSwge1xuICAgICAgICAgICAga2V5OiB0YXJnZXQsXG4gICAgICAgICAgICBvbkNsb3NlOiBjYWxsYmFja1xuICAgICAgICAgIH0pLCBwcmVmaXhDbHMpKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgdmFyIHJlc3VsdCA9IGZ1bmN0aW9uIHJlc3VsdCgpIHtcbiAgICAgICAgaWYgKGlubmVySW5zdGFuY2UpIHtcbiAgICAgICAgICBpbm5lckluc3RhbmNlLnJlbW92ZU5vdGljZSh0YXJnZXQpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICByZXN1bHQudGhlbiA9IGZ1bmN0aW9uIChmaWxsZWQsIHJlamVjdGVkKSB7XG4gICAgICAgIHJldHVybiBjbG9zZVByb21pc2UudGhlbihmaWxsZWQsIHJlamVjdGVkKTtcbiAgICAgIH07XG5cbiAgICAgIHJlc3VsdC5wcm9taXNlID0gY2xvc2VQcm9taXNlO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9IC8vIEZpbGwgZnVuY3Rpb25zXG5cblxuICAgIHZhciBob29rQXBpUmVmID0gUmVhY3QudXNlUmVmKHt9KTtcbiAgICBob29rQXBpUmVmLmN1cnJlbnQub3BlbiA9IG5vdGlmeTtcbiAgICBbJ3N1Y2Nlc3MnLCAnaW5mbycsICd3YXJuaW5nJywgJ2Vycm9yJywgJ2xvYWRpbmcnXS5mb3JFYWNoKGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICByZXR1cm4gKDAsIF8uYXR0YWNoVHlwZUFwaSkoaG9va0FwaVJlZi5jdXJyZW50LCB0eXBlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2hvb2tBcGlSZWYuY3VycmVudCwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX2NvbmZpZ1Byb3ZpZGVyLkNvbmZpZ0NvbnN1bWVyLCB7XG4gICAgICBrZXk6IFwiaG9sZGVyXCJcbiAgICB9LCBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgZ2V0UHJlZml4Q2xzID0gY29udGV4dC5nZXRQcmVmaXhDbHM7XG4gICAgICByZXR1cm4gaG9sZGVyO1xuICAgIH0pXTtcbiAgfTtcblxuICByZXR1cm4gdXNlTWVzc2FnZTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmdldEtleVRoZW5JbmNyZWFzZUtleSA9IGdldEtleVRoZW5JbmNyZWFzZUtleTtcbmV4cG9ydHMuYXR0YWNoVHlwZUFwaSA9IGF0dGFjaFR5cGVBcGk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGV4cG9ydHMuZ2V0SW5zdGFuY2UgPSB2b2lkIDA7XG5cbnZhciBfZXh0ZW5kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIikpO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKTtcblxudmFyIF9yY05vdGlmaWNhdGlvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJjLW5vdGlmaWNhdGlvblwiKSk7XG5cbnZhciBfTG9hZGluZ091dGxpbmVkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnMvTG9hZGluZ091dGxpbmVkXCIpKTtcblxudmFyIF9FeGNsYW1hdGlvbkNpcmNsZUZpbGxlZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zL0V4Y2xhbWF0aW9uQ2lyY2xlRmlsbGVkXCIpKTtcblxudmFyIF9DbG9zZUNpcmNsZUZpbGxlZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zL0Nsb3NlQ2lyY2xlRmlsbGVkXCIpKTtcblxudmFyIF9DaGVja0NpcmNsZUZpbGxlZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zL0NoZWNrQ2lyY2xlRmlsbGVkXCIpKTtcblxudmFyIF9JbmZvQ2lyY2xlRmlsbGVkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnMvSW5mb0NpcmNsZUZpbGxlZFwiKSk7XG5cbnZhciBfdXNlTWVzc2FnZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vaG9va3MvdXNlTWVzc2FnZVwiKSk7XG5cbnZhciBtZXNzYWdlSW5zdGFuY2U7XG52YXIgZGVmYXVsdER1cmF0aW9uID0gMztcbnZhciBkZWZhdWx0VG9wO1xudmFyIGtleSA9IDE7XG52YXIgbG9jYWxQcmVmaXhDbHMgPSAnYW50LW1lc3NhZ2UnO1xudmFyIHRyYW5zaXRpb25OYW1lID0gJ21vdmUtdXAnO1xudmFyIGdldENvbnRhaW5lcjtcbnZhciBtYXhDb3VudDtcbnZhciBydGwgPSBmYWxzZTtcblxuZnVuY3Rpb24gZ2V0S2V5VGhlbkluY3JlYXNlS2V5KCkge1xuICByZXR1cm4ga2V5Kys7XG59XG5cbmZ1bmN0aW9uIHNldE1lc3NhZ2VDb25maWcob3B0aW9ucykge1xuICBpZiAob3B0aW9ucy50b3AgIT09IHVuZGVmaW5lZCkge1xuICAgIGRlZmF1bHRUb3AgPSBvcHRpb25zLnRvcDtcbiAgICBtZXNzYWdlSW5zdGFuY2UgPSBudWxsOyAvLyBkZWxldGUgbWVzc2FnZUluc3RhbmNlIGZvciBuZXcgZGVmYXVsdFRvcFxuICB9XG5cbiAgaWYgKG9wdGlvbnMuZHVyYXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgIGRlZmF1bHREdXJhdGlvbiA9IG9wdGlvbnMuZHVyYXRpb247XG4gIH1cblxuICBpZiAob3B0aW9ucy5wcmVmaXhDbHMgIT09IHVuZGVmaW5lZCkge1xuICAgIGxvY2FsUHJlZml4Q2xzID0gb3B0aW9ucy5wcmVmaXhDbHM7XG4gIH1cblxuICBpZiAob3B0aW9ucy5nZXRDb250YWluZXIgIT09IHVuZGVmaW5lZCkge1xuICAgIGdldENvbnRhaW5lciA9IG9wdGlvbnMuZ2V0Q29udGFpbmVyO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMudHJhbnNpdGlvbk5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgIHRyYW5zaXRpb25OYW1lID0gb3B0aW9ucy50cmFuc2l0aW9uTmFtZTtcbiAgICBtZXNzYWdlSW5zdGFuY2UgPSBudWxsOyAvLyBkZWxldGUgbWVzc2FnZUluc3RhbmNlIGZvciBuZXcgdHJhbnNpdGlvbk5hbWVcbiAgfVxuXG4gIGlmIChvcHRpb25zLm1heENvdW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICBtYXhDb3VudCA9IG9wdGlvbnMubWF4Q291bnQ7XG4gICAgbWVzc2FnZUluc3RhbmNlID0gbnVsbDtcbiAgfVxuXG4gIGlmIChvcHRpb25zLnJ0bCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcnRsID0gb3B0aW9ucy5ydGw7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0UkNOb3RpZmljYXRpb25JbnN0YW5jZShhcmdzLCBjYWxsYmFjaykge1xuICB2YXIgcHJlZml4Q2xzID0gYXJncy5wcmVmaXhDbHMgfHwgbG9jYWxQcmVmaXhDbHM7XG5cbiAgaWYgKG1lc3NhZ2VJbnN0YW5jZSkge1xuICAgIGNhbGxiYWNrKHtcbiAgICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgICAgaW5zdGFuY2U6IG1lc3NhZ2VJbnN0YW5jZVxuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIF9yY05vdGlmaWNhdGlvbltcImRlZmF1bHRcIl0ubmV3SW5zdGFuY2Uoe1xuICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgIHRyYW5zaXRpb25OYW1lOiB0cmFuc2l0aW9uTmFtZSxcbiAgICBzdHlsZToge1xuICAgICAgdG9wOiBkZWZhdWx0VG9wXG4gICAgfSxcbiAgICBnZXRDb250YWluZXI6IGdldENvbnRhaW5lcixcbiAgICBtYXhDb3VudDogbWF4Q291bnRcbiAgfSwgZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gICAgaWYgKG1lc3NhZ2VJbnN0YW5jZSkge1xuICAgICAgY2FsbGJhY2soe1xuICAgICAgICBwcmVmaXhDbHM6IHByZWZpeENscyxcbiAgICAgICAgaW5zdGFuY2U6IG1lc3NhZ2VJbnN0YW5jZVxuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbWVzc2FnZUluc3RhbmNlID0gaW5zdGFuY2U7XG4gICAgY2FsbGJhY2soe1xuICAgICAgcHJlZml4Q2xzOiBwcmVmaXhDbHMsXG4gICAgICBpbnN0YW5jZTogaW5zdGFuY2VcbiAgICB9KTtcbiAgfSk7XG59XG5cbnZhciB0eXBlVG9JY29uID0ge1xuICBpbmZvOiBfSW5mb0NpcmNsZUZpbGxlZFtcImRlZmF1bHRcIl0sXG4gIHN1Y2Nlc3M6IF9DaGVja0NpcmNsZUZpbGxlZFtcImRlZmF1bHRcIl0sXG4gIGVycm9yOiBfQ2xvc2VDaXJjbGVGaWxsZWRbXCJkZWZhdWx0XCJdLFxuICB3YXJuaW5nOiBfRXhjbGFtYXRpb25DaXJjbGVGaWxsZWRbXCJkZWZhdWx0XCJdLFxuICBsb2FkaW5nOiBfTG9hZGluZ091dGxpbmVkW1wiZGVmYXVsdFwiXVxufTtcblxuZnVuY3Rpb24gZ2V0UkNOb3RpY2VQcm9wcyhhcmdzLCBwcmVmaXhDbHMpIHtcbiAgdmFyIF9jbGFzc05hbWVzO1xuXG4gIHZhciBkdXJhdGlvbiA9IGFyZ3MuZHVyYXRpb24gIT09IHVuZGVmaW5lZCA/IGFyZ3MuZHVyYXRpb24gOiBkZWZhdWx0RHVyYXRpb247XG4gIHZhciBJY29uQ29tcG9uZW50ID0gdHlwZVRvSWNvblthcmdzLnR5cGVdO1xuICB2YXIgbWVzc2FnZUNsYXNzID0gKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkoXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1jdXN0b20tY29udGVudFwiKSwgKF9jbGFzc05hbWVzID0ge30sICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItXCIpLmNvbmNhdChhcmdzLnR5cGUpLCBhcmdzLnR5cGUpLCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXJ0bFwiKSwgcnRsID09PSB0cnVlKSwgX2NsYXNzTmFtZXMpKTtcbiAgcmV0dXJuIHtcbiAgICBrZXk6IGFyZ3Mua2V5LFxuICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICBzdHlsZTogYXJncy5zdHlsZSB8fCB7fSxcbiAgICBjbGFzc05hbWU6IGFyZ3MuY2xhc3NOYW1lLFxuICAgIGNvbnRlbnQ6IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogbWVzc2FnZUNsYXNzXG4gICAgfSwgYXJncy5pY29uIHx8IEljb25Db21wb25lbnQgJiYgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoSWNvbkNvbXBvbmVudCwgbnVsbCksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBudWxsLCBhcmdzLmNvbnRlbnQpKSxcbiAgICBvbkNsb3NlOiBhcmdzLm9uQ2xvc2UsXG4gICAgb25DbGljazogYXJncy5vbkNsaWNrXG4gIH07XG59XG5cbmZ1bmN0aW9uIG5vdGljZShhcmdzKSB7XG4gIHZhciB0YXJnZXQgPSBhcmdzLmtleSB8fCBrZXkrKztcbiAgdmFyIGNsb3NlUHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgdmFyIGNhbGxiYWNrID0gZnVuY3Rpb24gY2FsbGJhY2soKSB7XG4gICAgICBpZiAodHlwZW9mIGFyZ3Mub25DbG9zZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBhcmdzLm9uQ2xvc2UoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSk7XG4gICAgfTtcblxuICAgIGdldFJDTm90aWZpY2F0aW9uSW5zdGFuY2UoYXJncywgZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgIHZhciBwcmVmaXhDbHMgPSBfcmVmLnByZWZpeENscyxcbiAgICAgICAgICBpbnN0YW5jZSA9IF9yZWYuaW5zdGFuY2U7XG4gICAgICBpbnN0YW5jZS5ub3RpY2UoZ2V0UkNOb3RpY2VQcm9wcygoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHt9LCBhcmdzKSwge1xuICAgICAgICBrZXk6IHRhcmdldCxcbiAgICAgICAgb25DbG9zZTogY2FsbGJhY2tcbiAgICAgIH0pLCBwcmVmaXhDbHMpKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgdmFyIHJlc3VsdCA9IGZ1bmN0aW9uIHJlc3VsdCgpIHtcbiAgICBpZiAobWVzc2FnZUluc3RhbmNlKSB7XG4gICAgICBtZXNzYWdlSW5zdGFuY2UucmVtb3ZlTm90aWNlKHRhcmdldCk7XG4gICAgfVxuICB9O1xuXG4gIHJlc3VsdC50aGVuID0gZnVuY3Rpb24gKGZpbGxlZCwgcmVqZWN0ZWQpIHtcbiAgICByZXR1cm4gY2xvc2VQcm9taXNlLnRoZW4oZmlsbGVkLCByZWplY3RlZCk7XG4gIH07XG5cbiAgcmVzdWx0LnByb21pc2UgPSBjbG9zZVByb21pc2U7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGlzQXJnc1Byb3BzKGNvbnRlbnQpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChjb250ZW50KSA9PT0gJ1tvYmplY3QgT2JqZWN0XScgJiYgISFjb250ZW50LmNvbnRlbnQ7XG59XG5cbnZhciBhcGkgPSB7XG4gIG9wZW46IG5vdGljZSxcbiAgY29uZmlnOiBzZXRNZXNzYWdlQ29uZmlnLFxuICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KG1lc3NhZ2VLZXkpIHtcbiAgICBpZiAobWVzc2FnZUluc3RhbmNlKSB7XG4gICAgICBpZiAobWVzc2FnZUtleSkge1xuICAgICAgICB2YXIgX21lc3NhZ2VJbnN0YW5jZSA9IG1lc3NhZ2VJbnN0YW5jZSxcbiAgICAgICAgICAgIHJlbW92ZU5vdGljZSA9IF9tZXNzYWdlSW5zdGFuY2UucmVtb3ZlTm90aWNlO1xuICAgICAgICByZW1vdmVOb3RpY2UobWVzc2FnZUtleSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgX21lc3NhZ2VJbnN0YW5jZTIgPSBtZXNzYWdlSW5zdGFuY2UsXG4gICAgICAgICAgICBkZXN0cm95ID0gX21lc3NhZ2VJbnN0YW5jZTIuZGVzdHJveTtcbiAgICAgICAgZGVzdHJveSgpO1xuICAgICAgICBtZXNzYWdlSW5zdGFuY2UgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuZnVuY3Rpb24gYXR0YWNoVHlwZUFwaShvcmlnaW5hbEFwaSwgdHlwZSkge1xuICBvcmlnaW5hbEFwaVt0eXBlXSA9IGZ1bmN0aW9uIChjb250ZW50LCBkdXJhdGlvbiwgb25DbG9zZSkge1xuICAgIGlmIChpc0FyZ3NQcm9wcyhjb250ZW50KSkge1xuICAgICAgcmV0dXJuIG9yaWdpbmFsQXBpLm9wZW4oKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKCgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7fSwgY29udGVudCksIHtcbiAgICAgICAgdHlwZTogdHlwZVxuICAgICAgfSkpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgZHVyYXRpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG9uQ2xvc2UgPSBkdXJhdGlvbjtcbiAgICAgIGR1cmF0aW9uID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHJldHVybiBvcmlnaW5hbEFwaS5vcGVuKHtcbiAgICAgIGNvbnRlbnQ6IGNvbnRlbnQsXG4gICAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgICB0eXBlOiB0eXBlLFxuICAgICAgb25DbG9zZTogb25DbG9zZVxuICAgIH0pO1xuICB9O1xufVxuXG5bJ3N1Y2Nlc3MnLCAnaW5mbycsICd3YXJuaW5nJywgJ2Vycm9yJywgJ2xvYWRpbmcnXS5mb3JFYWNoKGZ1bmN0aW9uICh0eXBlKSB7XG4gIHJldHVybiBhdHRhY2hUeXBlQXBpKGFwaSwgdHlwZSk7XG59KTtcbmFwaS53YXJuID0gYXBpLndhcm5pbmc7XG5hcGkudXNlTWVzc2FnZSA9ICgwLCBfdXNlTWVzc2FnZVtcImRlZmF1bHRcIl0pKGdldFJDTm90aWZpY2F0aW9uSW5zdGFuY2UsIGdldFJDTm90aWNlUHJvcHMpO1xuLyoqIEBwcml2YXRlIHRlc3Qgb25seSBmdW5jdGlvbi4gTm90IHdvcmsgb24gcHJvZHVjdGlvbiAqL1xuXG52YXIgZ2V0SW5zdGFuY2UgPSBmdW5jdGlvbiBnZXRJbnN0YW5jZSgpIHtcbiAgcmV0dXJuIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAndGVzdCcgPyBtZXNzYWdlSW5zdGFuY2UgOiBudWxsO1xufTtcblxuZXhwb3J0cy5nZXRJbnN0YW5jZSA9IGdldEluc3RhbmNlO1xudmFyIF9kZWZhdWx0ID0gYXBpO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmNoYW5nZUNvbmZpcm1Mb2NhbGUgPSBjaGFuZ2VDb25maXJtTG9jYWxlO1xuZXhwb3J0cy5nZXRDb25maXJtTG9jYWxlID0gZ2V0Q29uZmlybUxvY2FsZTtcblxudmFyIF9leHRlbmRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7XG5cbnZhciBfZGVmYXVsdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL2xvY2FsZS9kZWZhdWx0XCIpKTtcblxudmFyIHJ1bnRpbWVMb2NhbGUgPSAoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe30sIF9kZWZhdWx0W1wiZGVmYXVsdFwiXS5Nb2RhbCk7XG5cbmZ1bmN0aW9uIGNoYW5nZUNvbmZpcm1Mb2NhbGUobmV3TG9jYWxlKSB7XG4gIGlmIChuZXdMb2NhbGUpIHtcbiAgICBydW50aW1lTG9jYWxlID0gKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKCgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7fSwgcnVudGltZUxvY2FsZSksIG5ld0xvY2FsZSk7XG4gIH0gZWxzZSB7XG4gICAgcnVudGltZUxvY2FsZSA9ICgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7fSwgX2RlZmF1bHRbXCJkZWZhdWx0XCJdLk1vZGFsKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRDb25maXJtTG9jYWxlKCkge1xuICByZXR1cm4gcnVudGltZUxvY2FsZTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGNyZWF0ZVVzZU5vdGlmaWNhdGlvbjtcblxudmFyIF9leHRlbmRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7XG5cbnZhciBfc2xpY2VkVG9BcnJheTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXlcIikpO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX3VzZU5vdGlmaWNhdGlvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJjLW5vdGlmaWNhdGlvbi9saWIvdXNlTm90aWZpY2F0aW9uXCIpKTtcblxudmFyIF9jb25maWdQcm92aWRlciA9IHJlcXVpcmUoXCIuLi8uLi9jb25maWctcHJvdmlkZXJcIik7XG5cbmZ1bmN0aW9uIGNyZWF0ZVVzZU5vdGlmaWNhdGlvbihnZXROb3RpZmljYXRpb25JbnN0YW5jZSwgZ2V0UkNOb3RpY2VQcm9wcykge1xuICB2YXIgdXNlTm90aWZpY2F0aW9uID0gZnVuY3Rpb24gdXNlTm90aWZpY2F0aW9uKCkge1xuICAgIC8vIFdlIGNhbiBvbmx5IGdldCBjb250ZW50IGJ5IHJlbmRlclxuICAgIHZhciBnZXRQcmVmaXhDbHM7IC8vIFdlIGNyZWF0ZSBhIHByb3h5IHRvIGhhbmRsZSBkZWxheSBjcmVhdGVkIGluc3RhbmNlXG5cbiAgICB2YXIgaW5uZXJJbnN0YW5jZSA9IG51bGw7XG4gICAgdmFyIHByb3h5ID0ge1xuICAgICAgYWRkOiBmdW5jdGlvbiBhZGQobm90aWNlUHJvcHMsIGhvbGRlckNhbGxiYWNrKSB7XG4gICAgICAgIGlubmVySW5zdGFuY2UgPT09IG51bGwgfHwgaW5uZXJJbnN0YW5jZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogaW5uZXJJbnN0YW5jZS5jb21wb25lbnQuYWRkKG5vdGljZVByb3BzLCBob2xkZXJDYWxsYmFjayk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHZhciBfdXNlUkNOb3RpZmljYXRpb24gPSAoMCwgX3VzZU5vdGlmaWNhdGlvbltcImRlZmF1bHRcIl0pKHByb3h5KSxcbiAgICAgICAgX3VzZVJDTm90aWZpY2F0aW9uMiA9ICgwLCBfc2xpY2VkVG9BcnJheTJbXCJkZWZhdWx0XCJdKShfdXNlUkNOb3RpZmljYXRpb24sIDIpLFxuICAgICAgICBob29rTm90aWZ5ID0gX3VzZVJDTm90aWZpY2F0aW9uMlswXSxcbiAgICAgICAgaG9sZGVyID0gX3VzZVJDTm90aWZpY2F0aW9uMlsxXTtcblxuICAgIGZ1bmN0aW9uIG5vdGlmeShhcmdzKSB7XG4gICAgICB2YXIgY3VzdG9taXplUHJlZml4Q2xzID0gYXJncy5wcmVmaXhDbHM7XG4gICAgICB2YXIgbWVyZ2VkUHJlZml4Q2xzID0gZ2V0UHJlZml4Q2xzKCdub3RpZmljYXRpb24nLCBjdXN0b21pemVQcmVmaXhDbHMpO1xuICAgICAgZ2V0Tm90aWZpY2F0aW9uSW5zdGFuY2UoKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKCgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7fSwgYXJncyksIHtcbiAgICAgICAgcHJlZml4Q2xzOiBtZXJnZWRQcmVmaXhDbHNcbiAgICAgIH0pLCBmdW5jdGlvbiAoX3JlZikge1xuICAgICAgICB2YXIgcHJlZml4Q2xzID0gX3JlZi5wcmVmaXhDbHMsXG4gICAgICAgICAgICBpbnN0YW5jZSA9IF9yZWYuaW5zdGFuY2U7XG4gICAgICAgIGlubmVySW5zdGFuY2UgPSBpbnN0YW5jZTtcbiAgICAgICAgaG9va05vdGlmeShnZXRSQ05vdGljZVByb3BzKGFyZ3MsIHByZWZpeENscykpO1xuICAgICAgfSk7XG4gICAgfSAvLyBGaWxsIGZ1bmN0aW9uc1xuXG5cbiAgICB2YXIgaG9va0FwaVJlZiA9IFJlYWN0LnVzZVJlZih7fSk7XG4gICAgaG9va0FwaVJlZi5jdXJyZW50Lm9wZW4gPSBub3RpZnk7XG4gICAgWydzdWNjZXNzJywgJ2luZm8nLCAnd2FybmluZycsICdlcnJvciddLmZvckVhY2goZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgIGhvb2tBcGlSZWYuY3VycmVudFt0eXBlXSA9IGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgICAgIHJldHVybiBob29rQXBpUmVmLmN1cnJlbnQub3BlbigoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHt9LCBhcmdzKSwge1xuICAgICAgICAgIHR5cGU6IHR5cGVcbiAgICAgICAgfSkpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2hvb2tBcGlSZWYuY3VycmVudCwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX2NvbmZpZ1Byb3ZpZGVyLkNvbmZpZ0NvbnN1bWVyLCB7XG4gICAgICBrZXk6IFwiaG9sZGVyXCJcbiAgICB9LCBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgZ2V0UHJlZml4Q2xzID0gY29udGV4dC5nZXRQcmVmaXhDbHM7XG4gICAgICByZXR1cm4gaG9sZGVyO1xuICAgIH0pXTtcbiAgfTtcblxuICByZXR1cm4gdXNlTm90aWZpY2F0aW9uO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZXhwb3J0cy5nZXRJbnN0YW5jZSA9IHZvaWQgMDtcblxudmFyIF9yZWdlbmVyYXRvciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yXCIpKTtcblxudmFyIF9leHRlbmRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eVwiKSk7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfcmNOb3RpZmljYXRpb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyYy1ub3RpZmljYXRpb25cIikpO1xuXG52YXIgX0Nsb3NlT3V0bGluZWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29ucy9DbG9zZU91dGxpbmVkXCIpKTtcblxudmFyIF9jbGFzc25hbWVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSk7XG5cbnZhciBfQ2hlY2tDaXJjbGVPdXRsaW5lZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zL0NoZWNrQ2lyY2xlT3V0bGluZWRcIikpO1xuXG52YXIgX0Nsb3NlQ2lyY2xlT3V0bGluZWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29ucy9DbG9zZUNpcmNsZU91dGxpbmVkXCIpKTtcblxudmFyIF9FeGNsYW1hdGlvbkNpcmNsZU91dGxpbmVkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnMvRXhjbGFtYXRpb25DaXJjbGVPdXRsaW5lZFwiKSk7XG5cbnZhciBfSW5mb0NpcmNsZU91dGxpbmVkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnMvSW5mb0NpcmNsZU91dGxpbmVkXCIpKTtcblxudmFyIF91c2VOb3RpZmljYXRpb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2hvb2tzL3VzZU5vdGlmaWNhdGlvblwiKSk7XG5cbnZhciBfX2F3YWl0ZXIgPSB2b2lkIDAgJiYgKHZvaWQgMCkuX19hd2FpdGVyIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7XG4gICAgICB0cnkge1xuICAgICAgICBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJlamVjdChlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkge1xuICAgICAgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7XG4gICAgfVxuXG4gICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICB9KTtcbn07XG5cbnZhciBub3RpZmljYXRpb25JbnN0YW5jZSA9IHt9O1xudmFyIGRlZmF1bHREdXJhdGlvbiA9IDQuNTtcbnZhciBkZWZhdWx0VG9wID0gMjQ7XG52YXIgZGVmYXVsdEJvdHRvbSA9IDI0O1xudmFyIGRlZmF1bHRQcmVmaXhDbHMgPSAnYW50LW5vdGlmaWNhdGlvbic7XG52YXIgZGVmYXVsdFBsYWNlbWVudCA9ICd0b3BSaWdodCc7XG52YXIgZGVmYXVsdEdldENvbnRhaW5lcjtcbnZhciBkZWZhdWx0Q2xvc2VJY29uO1xudmFyIHJ0bCA9IGZhbHNlO1xuXG5mdW5jdGlvbiBzZXROb3RpZmljYXRpb25Db25maWcob3B0aW9ucykge1xuICB2YXIgZHVyYXRpb24gPSBvcHRpb25zLmR1cmF0aW9uLFxuICAgICAgcGxhY2VtZW50ID0gb3B0aW9ucy5wbGFjZW1lbnQsXG4gICAgICBib3R0b20gPSBvcHRpb25zLmJvdHRvbSxcbiAgICAgIHRvcCA9IG9wdGlvbnMudG9wLFxuICAgICAgZ2V0Q29udGFpbmVyID0gb3B0aW9ucy5nZXRDb250YWluZXIsXG4gICAgICBjbG9zZUljb24gPSBvcHRpb25zLmNsb3NlSWNvbixcbiAgICAgIHByZWZpeENscyA9IG9wdGlvbnMucHJlZml4Q2xzO1xuXG4gIGlmIChwcmVmaXhDbHMgIT09IHVuZGVmaW5lZCkge1xuICAgIGRlZmF1bHRQcmVmaXhDbHMgPSBwcmVmaXhDbHM7XG4gIH1cblxuICBpZiAoZHVyYXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgIGRlZmF1bHREdXJhdGlvbiA9IGR1cmF0aW9uO1xuICB9XG5cbiAgaWYgKHBsYWNlbWVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZGVmYXVsdFBsYWNlbWVudCA9IHBsYWNlbWVudDtcbiAgfSBlbHNlIGlmIChvcHRpb25zLnJ0bCkge1xuICAgIGRlZmF1bHRQbGFjZW1lbnQgPSAndG9wTGVmdCc7XG4gIH1cblxuICBpZiAoYm90dG9tICE9PSB1bmRlZmluZWQpIHtcbiAgICBkZWZhdWx0Qm90dG9tID0gYm90dG9tO1xuICB9XG5cbiAgaWYgKHRvcCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZGVmYXVsdFRvcCA9IHRvcDtcbiAgfVxuXG4gIGlmIChnZXRDb250YWluZXIgIT09IHVuZGVmaW5lZCkge1xuICAgIGRlZmF1bHRHZXRDb250YWluZXIgPSBnZXRDb250YWluZXI7XG4gIH1cblxuICBpZiAoY2xvc2VJY29uICE9PSB1bmRlZmluZWQpIHtcbiAgICBkZWZhdWx0Q2xvc2VJY29uID0gY2xvc2VJY29uO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMucnRsICE9PSB1bmRlZmluZWQpIHtcbiAgICBydGwgPSBvcHRpb25zLnJ0bDtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRQbGFjZW1lbnRTdHlsZShwbGFjZW1lbnQpIHtcbiAgdmFyIHRvcCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZGVmYXVsdFRvcDtcbiAgdmFyIGJvdHRvbSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogZGVmYXVsdEJvdHRvbTtcbiAgdmFyIHN0eWxlO1xuXG4gIHN3aXRjaCAocGxhY2VtZW50KSB7XG4gICAgY2FzZSAndG9wTGVmdCc6XG4gICAgICBzdHlsZSA9IHtcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgdG9wOiB0b3AsXG4gICAgICAgIGJvdHRvbTogJ2F1dG8nXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICd0b3BSaWdodCc6XG4gICAgICBzdHlsZSA9IHtcbiAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgIHRvcDogdG9wLFxuICAgICAgICBib3R0b206ICdhdXRvJ1xuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnYm90dG9tTGVmdCc6XG4gICAgICBzdHlsZSA9IHtcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgdG9wOiAnYXV0bycsXG4gICAgICAgIGJvdHRvbTogYm90dG9tXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgc3R5bGUgPSB7XG4gICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICB0b3A6ICdhdXRvJyxcbiAgICAgICAgYm90dG9tOiBib3R0b21cbiAgICAgIH07XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gZ2V0Tm90aWZpY2F0aW9uSW5zdGFuY2UoYXJncywgY2FsbGJhY2spIHtcbiAgdmFyIF9hcmdzJHBsYWNlbWVudCA9IGFyZ3MucGxhY2VtZW50LFxuICAgICAgcGxhY2VtZW50ID0gX2FyZ3MkcGxhY2VtZW50ID09PSB2b2lkIDAgPyBkZWZhdWx0UGxhY2VtZW50IDogX2FyZ3MkcGxhY2VtZW50LFxuICAgICAgdG9wID0gYXJncy50b3AsXG4gICAgICBib3R0b20gPSBhcmdzLmJvdHRvbSxcbiAgICAgIF9hcmdzJGdldENvbnRhaW5lciA9IGFyZ3MuZ2V0Q29udGFpbmVyLFxuICAgICAgZ2V0Q29udGFpbmVyID0gX2FyZ3MkZ2V0Q29udGFpbmVyID09PSB2b2lkIDAgPyBkZWZhdWx0R2V0Q29udGFpbmVyIDogX2FyZ3MkZ2V0Q29udGFpbmVyLFxuICAgICAgX2FyZ3MkY2xvc2VJY29uID0gYXJncy5jbG9zZUljb24sXG4gICAgICBjbG9zZUljb24gPSBfYXJncyRjbG9zZUljb24gPT09IHZvaWQgMCA/IGRlZmF1bHRDbG9zZUljb24gOiBfYXJncyRjbG9zZUljb247XG4gIHZhciBvdXRlclByZWZpeENscyA9IGFyZ3MucHJlZml4Q2xzIHx8IGRlZmF1bHRQcmVmaXhDbHM7XG4gIHZhciBwcmVmaXhDbHMgPSBcIlwiLmNvbmNhdChvdXRlclByZWZpeENscywgXCItbm90aWNlXCIpO1xuICB2YXIgY2FjaGVLZXkgPSBcIlwiLmNvbmNhdChvdXRlclByZWZpeENscywgXCItXCIpLmNvbmNhdChwbGFjZW1lbnQpO1xuICB2YXIgY2FjaGVJbnN0YW5jZSA9IG5vdGlmaWNhdGlvbkluc3RhbmNlW2NhY2hlS2V5XTtcblxuICBpZiAoY2FjaGVJbnN0YW5jZSkge1xuICAgIFByb21pc2UucmVzb2x2ZShjYWNoZUluc3RhbmNlKS50aGVuKGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICAgICAgY2FsbGJhY2soe1xuICAgICAgICBwcmVmaXhDbHM6IHByZWZpeENscyxcbiAgICAgICAgaW5zdGFuY2U6IGluc3RhbmNlXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgY2xvc2VJY29uVG9SZW5kZXIgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQob3V0ZXJQcmVmaXhDbHMsIFwiLWNsb3NlLXhcIilcbiAgfSwgY2xvc2VJY29uIHx8IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9DbG9zZU91dGxpbmVkW1wiZGVmYXVsdFwiXSwge1xuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQob3V0ZXJQcmVmaXhDbHMsIFwiLWNsb3NlLWljb25cIilcbiAgfSkpO1xuICB2YXIgbm90aWZpY2F0aW9uQ2xhc3MgPSAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKShcIlwiLmNvbmNhdChvdXRlclByZWZpeENscywgXCItXCIpLmNvbmNhdChwbGFjZW1lbnQpLCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKHt9LCBcIlwiLmNvbmNhdChvdXRlclByZWZpeENscywgXCItcnRsXCIpLCBydGwgPT09IHRydWUpKTtcbiAgbm90aWZpY2F0aW9uSW5zdGFuY2VbY2FjaGVLZXldID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICBfcmNOb3RpZmljYXRpb25bXCJkZWZhdWx0XCJdLm5ld0luc3RhbmNlKHtcbiAgICAgIHByZWZpeENsczogb3V0ZXJQcmVmaXhDbHMsXG4gICAgICBjbGFzc05hbWU6IG5vdGlmaWNhdGlvbkNsYXNzLFxuICAgICAgc3R5bGU6IGdldFBsYWNlbWVudFN0eWxlKHBsYWNlbWVudCwgdG9wLCBib3R0b20pLFxuICAgICAgZ2V0Q29udGFpbmVyOiBnZXRDb250YWluZXIsXG4gICAgICBjbG9zZUljb246IGNsb3NlSWNvblRvUmVuZGVyXG4gICAgfSwgZnVuY3Rpb24gKG5vdGlmaWNhdGlvbikge1xuICAgICAgcmVzb2x2ZShub3RpZmljYXRpb24pO1xuICAgICAgY2FsbGJhY2soe1xuICAgICAgICBwcmVmaXhDbHM6IHByZWZpeENscyxcbiAgICAgICAgaW5zdGFuY2U6IG5vdGlmaWNhdGlvblxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG52YXIgdHlwZVRvSWNvbiA9IHtcbiAgc3VjY2VzczogX0NoZWNrQ2lyY2xlT3V0bGluZWRbXCJkZWZhdWx0XCJdLFxuICBpbmZvOiBfSW5mb0NpcmNsZU91dGxpbmVkW1wiZGVmYXVsdFwiXSxcbiAgZXJyb3I6IF9DbG9zZUNpcmNsZU91dGxpbmVkW1wiZGVmYXVsdFwiXSxcbiAgd2FybmluZzogX0V4Y2xhbWF0aW9uQ2lyY2xlT3V0bGluZWRbXCJkZWZhdWx0XCJdXG59O1xuXG5mdW5jdGlvbiBnZXRSQ05vdGljZVByb3BzKGFyZ3MsIHByZWZpeENscykge1xuICB2YXIgZHVyYXRpb24gPSBhcmdzLmR1cmF0aW9uID09PSB1bmRlZmluZWQgPyBkZWZhdWx0RHVyYXRpb24gOiBhcmdzLmR1cmF0aW9uO1xuICB2YXIgaWNvbk5vZGUgPSBudWxsO1xuXG4gIGlmIChhcmdzLmljb24pIHtcbiAgICBpY29uTm9kZSA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItaWNvblwiKVxuICAgIH0sIGFyZ3MuaWNvbik7XG4gIH0gZWxzZSBpZiAoYXJncy50eXBlKSB7XG4gICAgaWNvbk5vZGUgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudCh0eXBlVG9JY29uW2FyZ3MudHlwZV0gfHwgbnVsbCwge1xuICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWljb24gXCIpLmNvbmNhdChwcmVmaXhDbHMsIFwiLWljb24tXCIpLmNvbmNhdChhcmdzLnR5cGUpXG4gICAgfSk7XG4gIH1cblxuICB2YXIgYXV0b01hcmdpblRhZyA9ICFhcmdzLmRlc2NyaXB0aW9uICYmIGljb25Ob2RlID8gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItbWVzc2FnZS1zaW5nbGUtbGluZS1hdXRvLW1hcmdpblwiKVxuICB9KSA6IG51bGw7XG4gIHJldHVybiB7XG4gICAgY29udGVudDogLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiBpY29uTm9kZSA/IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItd2l0aC1pY29uXCIpIDogJycsXG4gICAgICByb2xlOiBcImFsZXJ0XCJcbiAgICB9LCBpY29uTm9kZSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLW1lc3NhZ2VcIilcbiAgICB9LCBhdXRvTWFyZ2luVGFnLCBhcmdzLm1lc3NhZ2UpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItZGVzY3JpcHRpb25cIilcbiAgICB9LCBhcmdzLmRlc2NyaXB0aW9uKSwgYXJncy5idG4gPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWJ0blwiKVxuICAgIH0sIGFyZ3MuYnRuKSA6IG51bGwpLFxuICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICBjbG9zYWJsZTogdHJ1ZSxcbiAgICBvbkNsb3NlOiBhcmdzLm9uQ2xvc2UsXG4gICAgb25DbGljazogYXJncy5vbkNsaWNrLFxuICAgIGtleTogYXJncy5rZXksXG4gICAgc3R5bGU6IGFyZ3Muc3R5bGUgfHwge30sXG4gICAgY2xhc3NOYW1lOiBhcmdzLmNsYXNzTmFtZVxuICB9O1xufVxuXG5mdW5jdGlvbiBub3RpY2UoYXJncykge1xuICBnZXROb3RpZmljYXRpb25JbnN0YW5jZShhcmdzLCBmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBwcmVmaXhDbHMgPSBfcmVmLnByZWZpeENscyxcbiAgICAgICAgaW5zdGFuY2UgPSBfcmVmLmluc3RhbmNlO1xuICAgIGluc3RhbmNlLm5vdGljZShnZXRSQ05vdGljZVByb3BzKGFyZ3MsIHByZWZpeENscykpO1xuICB9KTtcbn1cblxudmFyIGFwaSA9IHtcbiAgb3Blbjogbm90aWNlLFxuICBjbG9zZTogZnVuY3Rpb24gY2xvc2Uoa2V5KSB7XG4gICAgT2JqZWN0LmtleXMobm90aWZpY2F0aW9uSW5zdGFuY2UpLmZvckVhY2goZnVuY3Rpb24gKGNhY2hlS2V5KSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5vdGlmaWNhdGlvbkluc3RhbmNlW2NhY2hlS2V5XSkudGhlbihmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgICAgICAgaW5zdGFuY2UucmVtb3ZlTm90aWNlKGtleSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSxcbiAgY29uZmlnOiBzZXROb3RpZmljYXRpb25Db25maWcsXG4gIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgT2JqZWN0LmtleXMobm90aWZpY2F0aW9uSW5zdGFuY2UpLmZvckVhY2goZnVuY3Rpb24gKGNhY2hlS2V5KSB7XG4gICAgICBQcm9taXNlLnJlc29sdmUobm90aWZpY2F0aW9uSW5zdGFuY2VbY2FjaGVLZXldKS50aGVuKGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICAgICAgICBpbnN0YW5jZS5kZXN0cm95KCk7XG4gICAgICB9KTtcbiAgICAgIGRlbGV0ZSBub3RpZmljYXRpb25JbnN0YW5jZVtjYWNoZUtleV07IC8vIGxndG1banMvbWlzc2luZy1hd2FpdF1cbiAgICB9KTtcbiAgfVxufTtcblsnc3VjY2VzcycsICdpbmZvJywgJ3dhcm5pbmcnLCAnZXJyb3InXS5mb3JFYWNoKGZ1bmN0aW9uICh0eXBlKSB7XG4gIGFwaVt0eXBlXSA9IGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgcmV0dXJuIGFwaS5vcGVuKCgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSgoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe30sIGFyZ3MpLCB7XG4gICAgICB0eXBlOiB0eXBlXG4gICAgfSkpO1xuICB9O1xufSk7XG5hcGkud2FybiA9IGFwaS53YXJuaW5nO1xuYXBpLnVzZU5vdGlmaWNhdGlvbiA9ICgwLCBfdXNlTm90aWZpY2F0aW9uW1wiZGVmYXVsdFwiXSkoZ2V0Tm90aWZpY2F0aW9uSW5zdGFuY2UsIGdldFJDTm90aWNlUHJvcHMpO1xuLyoqIEBwcml2YXRlIHRlc3Qgb25seSBmdW5jdGlvbi4gTm90IHdvcmsgb24gcHJvZHVjdGlvbiAqL1xuXG52YXIgZ2V0SW5zdGFuY2UgPSBmdW5jdGlvbiBnZXRJbnN0YW5jZShjYWNoZUtleSkge1xuICByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIC8qI19fUFVSRV9fKi9fcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLm1hcmsoZnVuY3Rpb24gX2NhbGxlZSgpIHtcbiAgICByZXR1cm4gX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUkKF9jb250ZXh0KSB7XG4gICAgICB3aGlsZSAoMSkge1xuICAgICAgICBzd2l0Y2ggKF9jb250ZXh0LnByZXYgPSBfY29udGV4dC5uZXh0KSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LmFicnVwdChcInJldHVyblwiLCBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Rlc3QnID8gbm90aWZpY2F0aW9uSW5zdGFuY2VbY2FjaGVLZXldIDogbnVsbCk7XG5cbiAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIF9jYWxsZWUpO1xuICB9KSk7XG59O1xuXG5leHBvcnRzLmdldEluc3RhbmNlID0gZ2V0SW5zdGFuY2U7XG52YXIgX2RlZmF1bHQgPSBhcGk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG52YXIgbG9jYWxlID0ge1xuICBwbGFjZWhvbGRlcjogJ1NlbGVjdCB0aW1lJyxcbiAgcmFuZ2VQbGFjZWhvbGRlcjogWydTdGFydCB0aW1lJywgJ0VuZCB0aW1lJ11cbn07XG52YXIgX2RlZmF1bHQgPSBsb2NhbGU7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3M7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwidmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0UHJvdG90eXBlT2ZcIik7XG5cbnZhciBpc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3RcIik7XG5cbnZhciBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVyblwiKTtcblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHtcbiAgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBpc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkge1xuICAgIHZhciBTdXBlciA9IGdldFByb3RvdHlwZU9mKERlcml2ZWQpLFxuICAgICAgICByZXN1bHQ7XG5cbiAgICBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkge1xuICAgICAgdmFyIE5ld1RhcmdldCA9IGdldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yO1xuICAgICAgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVTdXBlcjtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHM7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwidmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2V0UHJvdG90eXBlT2ZcIik7XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW5oZXJpdHM7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKVtcImRlZmF1bHRcIl07XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwidmFyIGFycmF5V2l0aEhvbGVzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRoSG9sZXNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXlMaW1pdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheUxpbWl0XCIpO1xuXG52YXIgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheVwiKTtcblxudmFyIG5vbkl0ZXJhYmxlUmVzdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlUmVzdFwiKTtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7XG4gIHJldHVybiBhcnJheVdpdGhIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBub25JdGVyYWJsZVJlc3QoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2xpY2VkVG9BcnJheTtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eVwiKSk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVja1wiKSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzc1wiKSk7XG5cbnZhciBfaW5oZXJpdHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0c1wiKSk7XG5cbnZhciBfY3JlYXRlU3VwZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVTdXBlclwiKSk7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfcmVhY3REb20gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdC1kb21cIikpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKTtcblxudmFyIE5vdGljZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAoMCwgX2luaGVyaXRzMi5kZWZhdWx0KShOb3RpY2UsIF9Db21wb25lbnQpO1xuXG4gIHZhciBfc3VwZXIgPSAoMCwgX2NyZWF0ZVN1cGVyMi5kZWZhdWx0KShOb3RpY2UpO1xuXG4gIGZ1bmN0aW9uIE5vdGljZSgpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICAoMCwgX2NsYXNzQ2FsbENoZWNrMi5kZWZhdWx0KSh0aGlzLCBOb3RpY2UpO1xuICAgIF90aGlzID0gX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgX3RoaXMuY2xvc2VUaW1lciA9IG51bGw7XG5cbiAgICBfdGhpcy5jbG9zZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoZSkge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy5jbGVhckNsb3NlVGltZXIoKTtcblxuICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgb25DbG9zZSA9IF90aGlzJHByb3BzLm9uQ2xvc2UsXG4gICAgICAgICAgbm90aWNlS2V5ID0gX3RoaXMkcHJvcHMubm90aWNlS2V5O1xuXG4gICAgICBpZiAob25DbG9zZSkge1xuICAgICAgICBvbkNsb3NlKG5vdGljZUtleSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLnN0YXJ0Q2xvc2VUaW1lciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChfdGhpcy5wcm9wcy5kdXJhdGlvbikge1xuICAgICAgICBfdGhpcy5jbG9zZVRpbWVyID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzLmNsb3NlKCk7XG4gICAgICAgIH0sIF90aGlzLnByb3BzLmR1cmF0aW9uICogMTAwMCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLmNsZWFyQ2xvc2VUaW1lciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChfdGhpcy5jbG9zZVRpbWVyKSB7XG4gICAgICAgIGNsZWFyVGltZW91dChfdGhpcy5jbG9zZVRpbWVyKTtcbiAgICAgICAgX3RoaXMuY2xvc2VUaW1lciA9IG51bGw7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gICgwLCBfY3JlYXRlQ2xhc3MyLmRlZmF1bHQpKE5vdGljZSwgW3tcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkTW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB0aGlzLnN0YXJ0Q2xvc2VUaW1lcigpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb21wb25lbnREaWRVcGRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgICAgaWYgKHRoaXMucHJvcHMuZHVyYXRpb24gIT09IHByZXZQcm9wcy5kdXJhdGlvbiB8fCB0aGlzLnByb3BzLnVwZGF0ZU1hcmsgIT09IHByZXZQcm9wcy51cGRhdGVNYXJrKSB7XG4gICAgICAgIHRoaXMucmVzdGFydENsb3NlVGltZXIoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50V2lsbFVubW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICB0aGlzLmNsZWFyQ2xvc2VUaW1lcigpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZXN0YXJ0Q2xvc2VUaW1lclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZXN0YXJ0Q2xvc2VUaW1lcigpIHtcbiAgICAgIHRoaXMuY2xlYXJDbG9zZVRpbWVyKCk7XG4gICAgICB0aGlzLnN0YXJ0Q2xvc2VUaW1lcigpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBfdGhpcyRwcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIHByZWZpeENscyA9IF90aGlzJHByb3BzMi5wcmVmaXhDbHMsXG4gICAgICAgICAgY2xhc3NOYW1lID0gX3RoaXMkcHJvcHMyLmNsYXNzTmFtZSxcbiAgICAgICAgICBjbG9zYWJsZSA9IF90aGlzJHByb3BzMi5jbG9zYWJsZSxcbiAgICAgICAgICBjbG9zZUljb24gPSBfdGhpcyRwcm9wczIuY2xvc2VJY29uLFxuICAgICAgICAgIHN0eWxlID0gX3RoaXMkcHJvcHMyLnN0eWxlLFxuICAgICAgICAgIG9uQ2xpY2sgPSBfdGhpcyRwcm9wczIub25DbGljayxcbiAgICAgICAgICBjaGlsZHJlbiA9IF90aGlzJHByb3BzMi5jaGlsZHJlbixcbiAgICAgICAgICBob2xkZXIgPSBfdGhpcyRwcm9wczIuaG9sZGVyO1xuICAgICAgdmFyIGNvbXBvbmVudENsYXNzID0gXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1ub3RpY2VcIik7XG4gICAgICB2YXIgZGF0YU9yQXJpYUF0dHJpYnV0ZVByb3BzID0gT2JqZWN0LmtleXModGhpcy5wcm9wcykucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGtleSkge1xuICAgICAgICBpZiAoa2V5LnN1YnN0cigwLCA1KSA9PT0gJ2RhdGEtJyB8fCBrZXkuc3Vic3RyKDAsIDUpID09PSAnYXJpYS0nIHx8IGtleSA9PT0gJ3JvbGUnKSB7XG4gICAgICAgICAgYWNjW2tleV0gPSBfdGhpczIucHJvcHNba2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9LCB7fSk7XG4gICAgICB2YXIgbm9kZSA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzLmRlZmF1bHQpKGNvbXBvbmVudENsYXNzLCBjbGFzc05hbWUsICgwLCBfZGVmaW5lUHJvcGVydHkyLmRlZmF1bHQpKHt9LCBcIlwiLmNvbmNhdChjb21wb25lbnRDbGFzcywgXCItY2xvc2FibGVcIiksIGNsb3NhYmxlKSksXG4gICAgICAgIHN0eWxlOiBzdHlsZSxcbiAgICAgICAgb25Nb3VzZUVudGVyOiB0aGlzLmNsZWFyQ2xvc2VUaW1lcixcbiAgICAgICAgb25Nb3VzZUxlYXZlOiB0aGlzLnN0YXJ0Q2xvc2VUaW1lcixcbiAgICAgICAgb25DbGljazogb25DbGlja1xuICAgICAgfSwgZGF0YU9yQXJpYUF0dHJpYnV0ZVByb3BzKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQoY29tcG9uZW50Q2xhc3MsIFwiLWNvbnRlbnRcIilcbiAgICAgIH0sIGNoaWxkcmVuKSwgY2xvc2FibGUgPyBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7XG4gICAgICAgIHRhYkluZGV4OiAwLFxuICAgICAgICBvbkNsaWNrOiB0aGlzLmNsb3NlLFxuICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KGNvbXBvbmVudENsYXNzLCBcIi1jbG9zZVwiKVxuICAgICAgfSwgY2xvc2VJY29uIHx8IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChjb21wb25lbnRDbGFzcywgXCItY2xvc2UteFwiKVxuICAgICAgfSkpIDogbnVsbCk7XG5cbiAgICAgIGlmIChob2xkZXIpIHtcbiAgICAgICAgcmV0dXJuIF9yZWFjdERvbS5kZWZhdWx0LmNyZWF0ZVBvcnRhbChub2RlLCBob2xkZXIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIE5vdGljZTtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gTm90aWNlO1xuTm90aWNlLmRlZmF1bHRQcm9wcyA9IHtcbiAgb25DbG9zZTogZnVuY3Rpb24gb25DbG9zZSgpIHt9LFxuICBkdXJhdGlvbjogMS41XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHVzZU5vdGlmaWNhdGlvbjtcblxudmFyIF90b0NvbnN1bWFibGVBcnJheTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5XCIpKTtcblxudmFyIF9zbGljZWRUb0FycmF5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheVwiKSk7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfTm90aWNlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9Ob3RpY2VcIikpO1xuXG5mdW5jdGlvbiB1c2VOb3RpZmljYXRpb24obm90aWZpY2F0aW9uSW5zdGFuY2UpIHtcbiAgdmFyIGNyZWF0ZWRSZWYgPSBSZWFjdC51c2VSZWYoe30pO1xuXG4gIHZhciBfUmVhY3QkdXNlU3RhdGUgPSBSZWFjdC51c2VTdGF0ZShbXSksXG4gICAgICBfUmVhY3QkdXNlU3RhdGUyID0gKDAsIF9zbGljZWRUb0FycmF5Mi5kZWZhdWx0KShfUmVhY3QkdXNlU3RhdGUsIDIpLFxuICAgICAgZWxlbWVudHMgPSBfUmVhY3QkdXNlU3RhdGUyWzBdLFxuICAgICAgc2V0RWxlbWVudHMgPSBfUmVhY3QkdXNlU3RhdGUyWzFdO1xuXG4gIGZ1bmN0aW9uIG5vdGlmeShub3RpY2VQcm9wcykge1xuICAgIG5vdGlmaWNhdGlvbkluc3RhbmNlLmFkZChub3RpY2VQcm9wcywgZnVuY3Rpb24gKGRpdiwgcHJvcHMpIHtcbiAgICAgIHZhciBrZXkgPSBwcm9wcy5rZXk7XG5cbiAgICAgIGlmIChkaXYgJiYgIWNyZWF0ZWRSZWYuY3VycmVudFtrZXldKSB7XG4gICAgICAgIHZhciBub3RpY2VFbGUgPSBSZWFjdC5jcmVhdGVFbGVtZW50KF9Ob3RpY2UuZGVmYXVsdCwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICBob2xkZXI6IGRpdlxuICAgICAgICB9KSk7XG4gICAgICAgIGNyZWF0ZWRSZWYuY3VycmVudFtrZXldID0gbm90aWNlRWxlO1xuICAgICAgICBzZXRFbGVtZW50cyhmdW5jdGlvbiAob3JpZ2luRWxlbWVudHMpIHtcbiAgICAgICAgICByZXR1cm4gW10uY29uY2F0KCgwLCBfdG9Db25zdW1hYmxlQXJyYXkyLmRlZmF1bHQpKG9yaWdpbkVsZW1lbnRzKSwgW25vdGljZUVsZV0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBbbm90aWZ5LCBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBlbGVtZW50cyldO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9kZWZhdWx0ID0ge1xuICAvLyBPcHRpb25zLmpzeFxuICBpdGVtc19wZXJfcGFnZTogJy8gcGFnZScsXG4gIGp1bXBfdG86ICdHbyB0bycsXG4gIGp1bXBfdG9fY29uZmlybTogJ2NvbmZpcm0nLFxuICBwYWdlOiAnJyxcbiAgLy8gUGFnaW5hdGlvbi5qc3hcbiAgcHJldl9wYWdlOiAnUHJldmlvdXMgUGFnZScsXG4gIG5leHRfcGFnZTogJ05leHQgUGFnZScsXG4gIHByZXZfNTogJ1ByZXZpb3VzIDUgUGFnZXMnLFxuICBuZXh0XzU6ICdOZXh0IDUgUGFnZXMnLFxuICBwcmV2XzM6ICdQcmV2aW91cyAzIFBhZ2VzJyxcbiAgbmV4dF8zOiAnTmV4dCAzIFBhZ2VzJ1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIGxvY2FsZSA9IHtcbiAgbG9jYWxlOiAnZW5fVVMnLFxuICB0b2RheTogJ1RvZGF5JyxcbiAgbm93OiAnTm93JyxcbiAgYmFja1RvVG9kYXk6ICdCYWNrIHRvIHRvZGF5JyxcbiAgb2s6ICdPaycsXG4gIGNsZWFyOiAnQ2xlYXInLFxuICBtb250aDogJ01vbnRoJyxcbiAgeWVhcjogJ1llYXInLFxuICB0aW1lU2VsZWN0OiAnc2VsZWN0IHRpbWUnLFxuICBkYXRlU2VsZWN0OiAnc2VsZWN0IGRhdGUnLFxuICB3ZWVrU2VsZWN0OiAnQ2hvb3NlIGEgd2VlaycsXG4gIG1vbnRoU2VsZWN0OiAnQ2hvb3NlIGEgbW9udGgnLFxuICB5ZWFyU2VsZWN0OiAnQ2hvb3NlIGEgeWVhcicsXG4gIGRlY2FkZVNlbGVjdDogJ0Nob29zZSBhIGRlY2FkZScsXG4gIHllYXJGb3JtYXQ6ICdZWVlZJyxcbiAgZGF0ZUZvcm1hdDogJ00vRC9ZWVlZJyxcbiAgZGF5Rm9ybWF0OiAnRCcsXG4gIGRhdGVUaW1lRm9ybWF0OiAnTS9EL1lZWVkgSEg6bW06c3MnLFxuICBtb250aEJlZm9yZVllYXI6IHRydWUsXG4gIHByZXZpb3VzTW9udGg6ICdQcmV2aW91cyBtb250aCAoUGFnZVVwKScsXG4gIG5leHRNb250aDogJ05leHQgbW9udGggKFBhZ2VEb3duKScsXG4gIHByZXZpb3VzWWVhcjogJ0xhc3QgeWVhciAoQ29udHJvbCArIGxlZnQpJyxcbiAgbmV4dFllYXI6ICdOZXh0IHllYXIgKENvbnRyb2wgKyByaWdodCknLFxuICBwcmV2aW91c0RlY2FkZTogJ0xhc3QgZGVjYWRlJyxcbiAgbmV4dERlY2FkZTogJ05leHQgZGVjYWRlJyxcbiAgcHJldmlvdXNDZW50dXJ5OiAnTGFzdCBjZW50dXJ5JyxcbiAgbmV4dENlbnR1cnk6ICdOZXh0IGNlbnR1cnknXG59O1xudmFyIF9kZWZhdWx0ID0gbG9jYWxlO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB1c2VNZW1vO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG5mdW5jdGlvbiB1c2VNZW1vKGdldFZhbHVlLCBjb25kaXRpb24sIHNob3VsZFVwZGF0ZSkge1xuICB2YXIgY2FjaGVSZWYgPSBSZWFjdC51c2VSZWYoe30pO1xuXG4gIGlmICghKCd2YWx1ZScgaW4gY2FjaGVSZWYuY3VycmVudCkgfHwgc2hvdWxkVXBkYXRlKGNhY2hlUmVmLmN1cnJlbnQuY29uZGl0aW9uLCBjb25kaXRpb24pKSB7XG4gICAgY2FjaGVSZWYuY3VycmVudC52YWx1ZSA9IGdldFZhbHVlKCk7XG4gICAgY2FjaGVSZWYuY3VycmVudC5jb25kaXRpb24gPSBjb25kaXRpb247XG4gIH1cblxuICByZXR1cm4gY2FjaGVSZWYuY3VycmVudC52YWx1ZTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBvbWl0O1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIikpO1xuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyAoMCwgX2RlZmluZVByb3BlcnR5Mi5kZWZhdWx0KSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBvbWl0KG9iaiwgZmllbGRzKSB7XG4gIHZhciBjbG9uZSA9IF9vYmplY3RTcHJlYWQoe30sIG9iaik7XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkoZmllbGRzKSkge1xuICAgIGZpZWxkcy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIGRlbGV0ZSBjbG9uZVtrZXldO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGNsb25lO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy53YXJuaW5nID0gd2FybmluZztcbmV4cG9ydHMubm90ZSA9IG5vdGU7XG5leHBvcnRzLnJlc2V0V2FybmVkID0gcmVzZXRXYXJuZWQ7XG5leHBvcnRzLmNhbGwgPSBjYWxsO1xuZXhwb3J0cy53YXJuaW5nT25jZSA9IHdhcm5pbmdPbmNlO1xuZXhwb3J0cy5ub3RlT25jZSA9IG5vdGVPbmNlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG52YXIgd2FybmVkID0ge307XG5cbmZ1bmN0aW9uIHdhcm5pbmcodmFsaWQsIG1lc3NhZ2UpIHtcbiAgLy8gU3VwcG9ydCB1Z2xpZnlcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgIXZhbGlkICYmIGNvbnNvbGUgIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJXYXJuaW5nOiBcIi5jb25jYXQobWVzc2FnZSkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG5vdGUodmFsaWQsIG1lc3NhZ2UpIHtcbiAgLy8gU3VwcG9ydCB1Z2xpZnlcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgIXZhbGlkICYmIGNvbnNvbGUgIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnNvbGUud2FybihcIk5vdGU6IFwiLmNvbmNhdChtZXNzYWdlKSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVzZXRXYXJuZWQoKSB7XG4gIHdhcm5lZCA9IHt9O1xufVxuXG5mdW5jdGlvbiBjYWxsKG1ldGhvZCwgdmFsaWQsIG1lc3NhZ2UpIHtcbiAgaWYgKCF2YWxpZCAmJiAhd2FybmVkW21lc3NhZ2VdKSB7XG4gICAgbWV0aG9kKGZhbHNlLCBtZXNzYWdlKTtcbiAgICB3YXJuZWRbbWVzc2FnZV0gPSB0cnVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHdhcm5pbmdPbmNlKHZhbGlkLCBtZXNzYWdlKSB7XG4gIGNhbGwod2FybmluZywgdmFsaWQsIG1lc3NhZ2UpO1xufVxuXG5mdW5jdGlvbiBub3RlT25jZSh2YWxpZCwgbWVzc2FnZSkge1xuICBjYWxsKG5vdGUsIHZhbGlkLCBtZXNzYWdlKTtcbn1cblxudmFyIF9kZWZhdWx0ID0gd2FybmluZ09uY2U7XG4vKiBlc2xpbnQtZW5hYmxlICovXG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eTsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiXSwic291cmNlUm9vdCI6IiJ9