module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/story/[id]/edit.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/forms/ImageRow.js":
/*!**************************************!*\
  !*** ./components/forms/ImageRow.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var is_image_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! is-image-url */ "is-image-url");
/* harmony import */ var is_image_url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(is_image_url__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _UploadImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UploadImage */ "./components/forms/UploadImage.js");
var _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\components\\forms\\ImageRow.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const ImageRow = ({
  form,
  itemImage,
  name
}) => {
  const [linkVisible, setLinkVisible] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const [uploadVisible, setUploadVisible] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);

  const showLink = () => {
    form.setFieldsValue({
      [name]: null
    });
    setLinkVisible(true);
    setUploadVisible(false);
  };

  const showUpload = () => {
    form.setFieldsValue({
      [name]: null
    });
    setLinkVisible(false);
    setUploadVisible(true);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, !uploadVisible && !linkVisible && __jsx("div", {
    className: "upload-btns",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx("button", {
    onClick: showUpload,
    type: "button",
    className: "upload-btn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, "Upload a cover"), __jsx("button", {
    onClick: showLink,
    type: "button",
    className: "upload-btn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, "Submit a link to a cover")), uploadVisible && __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    align: "bottom",
    gutter: [24, 24],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 12,
    sm: 24,
    xs: 24,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, __jsx(_UploadImage__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: name,
    form: form,
    image: itemImage,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 12,
    sm: 24,
    xs: 24,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, __jsx("button", {
    onClick: showLink,
    type: "button",
    className: "upload-btn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, "OR Submit a link to a cover"))), linkVisible && __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    align: "bottom",
    gutter: [24, 24],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 24,
    xs: 24,
    md: 12,
    lg: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    rules: [{
      type: "url",
      message: "This field must be a valid url."
    }, () => ({
      validator(_, value) {
        if (is_image_url__WEBPACK_IMPORTED_MODULE_2___default()(value)) {
          return Promise.resolve();
        }

        return Promise.reject(new Error("The link needs to be an image"));
      }

    })],
    label: "Submit a link to your image",
    name: name,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 15
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 12,
    sm: 24,
    xs: 24,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }
  }, __jsx("button", {
    onClick: showUpload,
    type: "button",
    className: "upload-btn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  }, "Upload a cover"))));
};

/* harmony default export */ __webpack_exports__["default"] = (ImageRow);

/***/ }),

/***/ "./components/forms/ItemSelector.js":
/*!******************************************!*\
  !*** ./components/forms/ItemSelector.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\components\\forms\\ItemSelector.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const {
  Option
} = antd__WEBPACK_IMPORTED_MODULE_1__["Select"];

const ItemSelector = ({
  item,
  subject,
  form,
  arrInForm,
  label,
  type,
  lg1,
  subjectType
}) => {
  var _form$getFieldValue3, _subject$filter;

  const [currentChar, setCurrentChar] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("");
  const [currentLoc, setCurrentLoc] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("");
  const [selectedSubjects, setSelectedSubjects] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(item ? subject.filter(c => item.includes(c.id)) : []);

  const addCharacter = (current, setCurrent) => {
    var _form$getFieldValue, _form$getFieldValue2;

    if (type === "story" && ((_form$getFieldValue = form.getFieldValue(arrInForm)) === null || _form$getFieldValue === void 0 ? void 0 : _form$getFieldValue.length) === 5) {
      return;
    }

    if (current && ((_form$getFieldValue2 = form.getFieldValue(arrInForm)) === null || _form$getFieldValue2 === void 0 ? void 0 : _form$getFieldValue2.indexOf(current)) === -1) {
      setSelectedSubjects([...selectedSubjects, subject.find(c => c.id === current)]);
      form.setFieldsValue({
        [arrInForm]: [...form.getFieldValue(arrInForm), current]
      });
    }

    setCurrent("");
    form.setFieldsValue({
      [current]: ""
    });
  };

  const removeCharacter = id => {
    form.setFieldsValue({
      [arrInForm]: form.getFieldValue(arrInForm).filter(c => c !== id)
    });
    setSelectedSubjects(selectedSubjects.filter(c => c.id !== id));
  };

  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: arrInForm,
    label: label,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    gutter: [24, 24],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: lg1,
    md: 24,
    sm: 24,
    xs: 24,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    gutter: 16,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 22,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: subjectType === "characters" ? "currentChar" : "currentLoc",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    disabled: ((_form$getFieldValue3 = form.getFieldValue(arrInForm)) === null || _form$getFieldValue3 === void 0 ? void 0 : _form$getFieldValue3.length) >= 5 && type === "story" ? true : false,
    onChange: val => subjectType === "characters" ? setCurrentChar(val) : setCurrentLoc(val),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  }, __jsx(Option, {
    value: "none",
    disabled: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 19
    }
  }, "Choose"), (_subject$filter = subject.filter(c => {
    var _form$getFieldValue4;

    return ((_form$getFieldValue4 = form.getFieldValue(arrInForm)) === null || _form$getFieldValue4 === void 0 ? void 0 : _form$getFieldValue4.indexOf(c.id)) === -1;
  })) === null || _subject$filter === void 0 ? void 0 : _subject$filter.sort((a, b) => {
    const keyA = a.firstname,
          keyB = b.firstname; // Compare the 2 dates

    if (keyA < keyB) return -1;
    if (keyA > keyB) return 1;
    return 0;
  }).map(char => __jsx(Option, {
    key: char.id,
    value: char.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 23
    }
  }, subjectType === "characters" ? `${char.firstname} ${char.lastname}` : char.name))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "select-add-input-iconbox",
    onClick: () => subjectType === "characters" ? addCharacter(currentChar, setCurrentChar) : addCharacter(currentLoc, setCurrentLoc),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 15
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 17
    }
  }, "+"))), type === "story" && __jsx("small", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 15
    }
  }, "You can add up to 5 main characters"))), subject.length > 0 && __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: lg1,
    md: 24,
    sm: 24,
    xs: 24,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    gutter: 16,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 13
    }
  }, subject.filter(c => form.getFieldValue(arrInForm).includes(c.id)).map(char => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 12,
    sm: 24,
    key: char.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 19
    }
  }, __jsx("div", {
    key: char.id,
    className: "main-selected",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "main-avatar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 23
    }
  }, __jsx("img", {
    src: char.image,
    alt: subjectType === "characters" ? char.firstname : char.name,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 25
    }
  })), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 23
    }
  }, subjectType === "characters" ? `${char.firstname} ${char.lastname}` : char.name), __jsx("ion-icon", {
    onClick: () => removeCharacter(char.id),
    name: "close-circle",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 23
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    style: {
      margin: "15px 0"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 21
    }
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (ItemSelector);

/***/ }),

/***/ "./components/forms/RadioButton.js":
/*!*****************************************!*\
  !*** ./components/forms/RadioButton.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\components\\forms\\RadioButton.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const RadioButon = ({
  lg,
  sm,
  xs,
  md,
  name,
  label,
  num1,
  num2,
  label1,
  label2,
  form,
  setFunc,
  val
}) => {
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: lg,
    md: md,
    sm: sm,
    xs: xs,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: name,
    label: label,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx("fieldset", {
    id: name,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "radio",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Radio"].Group, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Space"], {
    size: 32,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "radio__1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }, __jsx("input", {
    value: true,
    id: `radio-${num1}`,
    type: "radio",
    onChange: () => setFunc(true),
    checked: val ? true : false,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 19
    }
  }), __jsx("label", {
    htmlFor: `radio-${num1}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 19
    }
  }), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 19
    }
  }, label1)), __jsx("div", {
    className: "radio__2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }, __jsx("input", {
    id: `radio-${num2}`,
    type: "radio",
    value: false,
    onChange: () => setFunc(false),
    checked: val ? false : true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 19
    }
  }), __jsx("label", {
    htmlFor: `radio-${num2}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 19
    }
  }), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 19
    }
  }, label2))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (RadioButon);

/***/ }),

/***/ "./components/forms/StoryForm.js":
/*!***************************************!*\
  !*** ./components/forms/StoryForm.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/constants */ "./utils/constants.js");
/* harmony import */ var _components_forms_Tags__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/forms/Tags */ "./components/forms/Tags.js");
/* harmony import */ var _components_forms_RadioButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/forms/RadioButton */ "./components/forms/RadioButton.js");
/* harmony import */ var _ItemSelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ItemSelector */ "./components/forms/ItemSelector.js");
/* harmony import */ var _ImageRow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ImageRow */ "./components/forms/ImageRow.js");
var _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\components\\forms\\StoryForm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const {
  Option
} = antd__WEBPACK_IMPORTED_MODULE_1__["Select"];

const StoryForm = ({
  type,
  story,
  form,
  submit,
  loading,
  storyId,
  characters,
  mature,
  setMature,
  visibility,
  setVisibility,
  loadingStory
}) => {
  const [linkVisible, setLinkVisible] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const [uploadVisible, setUploadVisible] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);

  const filterSort = (a, b) => {
    const keyA = a.name,
          keyB = b.name;
    if (keyA < keyB) return -1;
    if (keyA > keyB) return 1;
    return 0;
  };

  const onFailed = () => {
    window.scrollTo(0, 0);
    antd__WEBPACK_IMPORTED_MODULE_1__["message"].error("There are some errors");
  };

  const showLink = () => {
    form.setFieldsValue({
      banner: null
    });
    setLinkVisible(true);
    setUploadVisible(false);
  };

  const showUpload = () => {
    form.setFieldsValue({
      banner: null
    });
    setLinkVisible(false);
    setUploadVisible(true);
  };

  return __jsx("div", {
    className: "new-story custom-form",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "inner",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, __jsx("h2", {
    className: "side-heading",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, `${type} ${type === "add" && "a new"} story ${type === "edit" ? ":" : ""} ${type === "edit" ? story.title : ""}`), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    layout: "vertical",
    scrollToFirstError: true,
    onFinishFailed: onFailed,
    onFinish: submit,
    form: form,
    initialValues: type === "add" ? {
      summary: "",
      mature: false,
      public: true,
      banner: "",
      mainCharacters: [],
      tags: [],
      title: "",
      categories: [],
      copyright: "",
      language: "",
      status: "",
      imageCopyright: ""
    } : _objectSpread({}, story),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    gutter: [24, 24],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 24,
    xs: 24,
    md: 18,
    lg: 18,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    colon: false,
    name: "title",
    rules: [{
      required: true,
      message: "A title is required"
    }, {
      max: 65
    }],
    label: "Title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 17
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 24,
    xs: 24,
    lg: 6,
    md: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "categories",
    label: "Categories",
    rules: [{
      required: true,
      message: "At least 1 category is required"
    }, {
      max: 2,
      type: "array",
      message: "You can only select up to 2 categories"
    }],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    mode: "multiple",
    allowClear: true,
    maxTagCount: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 17
    }
  }, _utils_constants__WEBPACK_IMPORTED_MODULE_2__["CATEGORIES"] === null || _utils_constants__WEBPACK_IMPORTED_MODULE_2__["CATEGORIES"] === void 0 ? void 0 : _utils_constants__WEBPACK_IMPORTED_MODULE_2__["CATEGORIES"].sort((a, b) => {
    const keyA = a.name,
          keyB = b.name; // Compare the 2 dates

    if (keyA < keyB) return -1;
    if (keyA > keyB) return 1;
    return 0;
  }).map(cat => __jsx(Option, {
    value: cat.value,
    key: cat.value,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 21
    }
  }, cat.name)))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    gutter: [24, 24],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 8,
    sm: 24,
    xs: 24,
    lg: 8,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "language",
    label: "Language",
    rules: [{
      required: true,
      message: "A language is required"
    }],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    showSearch: true,
    filterSort: filterSort,
    filterOption: (input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 17
    }
  }, _utils_constants__WEBPACK_IMPORTED_MODULE_2__["LANGUAGES"] === null || _utils_constants__WEBPACK_IMPORTED_MODULE_2__["LANGUAGES"] === void 0 ? void 0 : _utils_constants__WEBPACK_IMPORTED_MODULE_2__["LANGUAGES"].map(lang => __jsx(Option, {
    value: lang.value,
    key: lang.value,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 21
    }
  }, lang.name))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 8,
    sm: 24,
    xs: 24,
    lg: 8,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "status",
    label: "Status",
    rules: [{
      required: true,
      message: "A status is required"
    }],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 17
    }
  }, _utils_constants__WEBPACK_IMPORTED_MODULE_2__["STATUS"].map(stat => __jsx(Option, {
    value: stat.value,
    key: stat.value,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 21
    }
  }, stat.name))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 8,
    sm: 24,
    xs: 24,
    lg: 8,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "copyright",
    label: "Copyright",
    rules: [{
      required: true,
      message: "A copyright is required"
    }],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 17
    }
  }, _utils_constants__WEBPACK_IMPORTED_MODULE_2__["COPYRIGHTS"].map(copy => __jsx(Option, {
    value: copy.value,
    key: copy.value,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 21
    }
  }, copy.name)))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    label: "Summary",
    name: "summary",
    rules: [{
      max: 180,
      message: "Your summary cannot exceed 180 characters"
    }],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].TextArea, {
    autoSize: {
      minRows: 5
    },
    showCount: true,
    maxLength: 180,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 13
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    justify: "space-between",
    gutter: [24, 24],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 11
    }
  }, __jsx(_components_forms_RadioButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    lg: 4,
    sm: 12,
    xs: 24,
    md: 8,
    name: "public",
    label: "Visibility",
    setFunc: setVisibility,
    num1: "3",
    num2: "4",
    label1: "Public",
    label2: "Private",
    val: visibility,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 13
    }
  }), __jsx(_components_forms_RadioButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    lg: 4,
    sm: 12,
    xs: 24,
    md: 8,
    val: mature,
    setFunc: setMature,
    name: "mature",
    label: "Mature content ?",
    num1: "1",
    num2: "2",
    label1: "Yes",
    label2: "No",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 13
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: 8,
    md: 12,
    sm: 24,
    xs: 24,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 13
    }
  }, __jsx(_components_forms_Tags__WEBPACK_IMPORTED_MODULE_3__["default"], {
    form: form,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 15
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 11
    }
  }), __jsx(_ItemSelector__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: story && story.mainCharacters,
    subject: characters,
    form: form,
    arrInForm: "mainCharacters",
    label: "Main Characters",
    type: "story",
    lg1: 12,
    subjectType: "characters",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 11
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 11
    }
  }), __jsx(_ImageRow__WEBPACK_IMPORTED_MODULE_6__["default"], {
    name: "banner",
    form: form,
    itemImage: story === null || story === void 0 ? void 0 : story.banner,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 11
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 11
    }
  }), type === "add" ? loading || storyId ? __jsx("button", {
    disabled: true,
    className: "spin-btn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Spin"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 17
    }
  })) : __jsx("button", {
    type: "submit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 15
    }
  }, "Create") : loadingStory ? __jsx("button", {
    disabled: true,
    className: "spin-btn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Spin"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 15
    }
  })) : __jsx("button", {
    type: "submit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 13
    }
  }, "Edit"))));
};

/* harmony default export */ __webpack_exports__["default"] = (StoryForm);

/***/ }),

/***/ "./components/forms/Tags.js":
/*!**********************************!*\
  !*** ./components/forms/Tags.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\components\\forms\\Tags.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Tags = ({
  form
}) => {
  var _form$getFieldValue3;

  const inputButton = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef();
  const editInputButton = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef();
  const [inputVisible, setInputVisible] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const [inputValue, setInputValue] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("");
  const [editInputIndex, setEditInputIndex] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(-1);
  const [editInputValue, setEditInputValue] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("");

  const handleClose = removedTag => {
    var _form$getFieldValue;

    form.setFieldsValue({
      tags: (_form$getFieldValue = form.getFieldValue("tags")) === null || _form$getFieldValue === void 0 ? void 0 : _form$getFieldValue.filter(tag => tag !== removedTag)
    });
  };

  const showInput = () => {
    var _inputButton$current;

    setInputVisible(true);
    inputButton === null || inputButton === void 0 ? void 0 : (_inputButton$current = inputButton.current) === null || _inputButton$current === void 0 ? void 0 : _inputButton$current.focus(); //editInputButton.current.focus();
    //;
  };

  const handleInputChange = e => setInputValue(e.target.value);

  const handleInputConfirm = () => {
    var _form$getFieldValue2;

    let newTags = form.getFieldValue("tags");

    if (inputValue && ((_form$getFieldValue2 = form.getFieldValue("tags")) === null || _form$getFieldValue2 === void 0 ? void 0 : _form$getFieldValue2.indexOf(inputValue)) === -1) {
      newTags = [...newTags, inputValue];
    }

    form.setFieldsValue({
      tags: newTags
    });
    setInputValue("");
    setInputVisible(false);
  };

  const handleEditInputChange = e => setEditInputValue(e.target.value);

  const handleEditInputConfirm = () => {
    const newTags = [...form.getFieldValue("tags")];
    newTags[editInputIndex] = editInputValue;
    form.setFieldsValue({
      tags: newTags
    });
    setEditInputIndex(-1);
    setEditInputValue("");
  };

  const keyPress = e => {
    console.log(e.key);
  };

  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    label: "Tags",
    name: "tags",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 5
    }
  }, (_form$getFieldValue3 = form.getFieldValue("tags")) === null || _form$getFieldValue3 === void 0 ? void 0 : _form$getFieldValue3.map((tag, i) => {
    if (editInputIndex === i) {
      return __jsx("input", {
        key: i,
        onChange: handleEditInputChange,
        onBlur: handleEditInputConfirm,
        onPressEnter: handleEditInputConfirm,
        value: editInputValue,
        ref: editInputButton,
        className: "form-input",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 13
        }
      });
    }

    const isLongTag = tag.length > 20;

    const TagElem = __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Tag"], {
      onClose: () => handleClose(tag),
      closable: true,
      key: tag,
      className: "edit-tag",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 11
      }
    }, __jsx("span", {
      onDoubleClick: e => {
        if (i !== 0) {
          setEditInputIndex(i);
          setEditInputValue(tag);
          editInputButton.focus();
          e.preventDefault();
        }
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 13
      }
    }, isLongTag ? `#${tag.slice(0, 20)}...` : `#${tag}`));

    return isLongTag ? __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
      title: tag,
      key: tag,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 11
      }
    }, TagElem) : TagElem;
  }), inputVisible && __jsx("input", {
    onChange: handleInputChange,
    onBlur: handleInputConfirm,
    onKeyDown: e => {
      if (e.key === "Enter") {
        handleInputConfirm();
      }
    },
    value: inputValue,
    type: "text",
    ref: inputButton,
    className: "tag-input",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }
  }), !inputVisible && __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Tag"], {
    className: "site-tag-plus",
    onClick: showInput,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 9
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["PlusOutlined"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 11
    }
  }), " New Tag"));
};

/* harmony default export */ __webpack_exports__["default"] = (Tags);

/***/ }),

/***/ "./components/forms/UploadImage.js":
/*!*****************************************!*\
  !*** ./components/forms/UploadImage.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\components\\forms\\UploadImage.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";

  if (!isJpgOrPng) {
    antd__WEBPACK_IMPORTED_MODULE_1__["message"].error("You can only upload JPG/PNG file!");
  }

  const isLt2M = file.size / 1024 / 1024 < 2;

  if (!isLt2M) {
    antd__WEBPACK_IMPORTED_MODULE_1__["message"].error("Image must smaller than 2MB!");
  }

  return isJpgOrPng && isLt2M;
}

const UploadImage = ({
  form,
  image,
  name
}) => {
  const [loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const [imageUrl, setImageUrl] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(image ? image : "");

  const handleChange = info => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }

    if (info.file.status === "done") {
      form.setFieldsValue({
        [name]: info.file.originFileObj
      }); // setImage(info.file.originFileObj);

      getBase64(info.file.originFileObj, imageUrl => {
        setLoading(false);
        setImageUrl(imageUrl);
      });
    }
  };

  const uploadButton = __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  }, loading ? __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["LoadingOutlined"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 18
    }
  }) : __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["PlusOutlined"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 40
    }
  }), __jsx("div", {
    style: {
      marginTop: 8
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, "Upload"));

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: name,
    label: "Upload a cover",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Upload"], {
    showUploadList: {
      showRemoveIcon: true,
      removeIcon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["StarOutlined"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 25
        }
      })
    },
    listType: "picture-card",
    className: "cover-uploader",
    showUploadList: true,
    beforeUpload: beforeUpload,
    onChange: handleChange,
    maxCount: 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, imageUrl ? __jsx("img", {
    src: imageUrl,
    alt: "image",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }) : uploadButton)), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    label: "Image Copyright",
    name: "imageCopyright",
    rules: [{
      required: form.getFieldValue(name) ? true : false,
      message: "An image copyright is required"
    }],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (UploadImage);

/***/ }),

/***/ "./hooks/userHooks.js":
/*!****************************!*\
  !*** ./hooks/userHooks.js ***!
  \****************************/
/*! exports provided: ProvideAuth, useAuth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProvideAuth", function() { return ProvideAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAuth", function() { return useAuth; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_fbConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/fbConfig */ "./redux/fbConfig.js");
var _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\hooks\\userHooks.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const authContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
function ProvideAuth({
  children
}) {
  const auth = useProvideAuth();
  return __jsx(authContext.Provider, {
    value: auth,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 10
    }
  }, children);
}
const useAuth = () => {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(authContext);
};

function useProvideAuth() {
  const {
    0: user,
    1: setUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: isLoading,
    1: setIsLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true); // Wrap any Firebase methods we want to use making sure ...
  // ... to save the user to state.

  const signin = (email, password) => {
    return _redux_fbConfig__WEBPACK_IMPORTED_MODULE_2__["auth"].signInWithEmailAndPassword(email, password).then(response => {
      setUser(response.user);
      return response.user;
    });
  };

  const signup = (email, password, username) => {
    return _redux_fbConfig__WEBPACK_IMPORTED_MODULE_2__["auth"].createUserWithEmailAndPassword(email, password).then(response => {
      setUser(response.user);
      _redux_fbConfig__WEBPACK_IMPORTED_MODULE_2__["db"].collection("users").add({
        badges: [],
        biography: "",
        createdAt: firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a.firestore.FieldValue.serverTimestamp(),
        suspended: false,
        facebook: "",
        instagram: "",
        twitter: "",
        deviantart: "",
        likesCount: "",
        username: username,
        image: ""
      });
      return response.user;
    });
  };

  const signout = () => {
    return _redux_fbConfig__WEBPACK_IMPORTED_MODULE_2__["auth"].signOut().then(() => {
      setUser(false);
    });
  };

  const sendPasswordResetEmail = email => {
    return _redux_fbConfig__WEBPACK_IMPORTED_MODULE_2__["auth"].sendPasswordResetEmail(email).then(() => {
      return true;
    });
  };

  const confirmPasswordReset = (code, password) => {
    return _redux_fbConfig__WEBPACK_IMPORTED_MODULE_2__["auth"].confirmPasswordReset(code, password).then(() => {
      return true;
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const unsubscribe = _redux_fbConfig__WEBPACK_IMPORTED_MODULE_2__["auth"].onAuthStateChanged(user => {
      if (user) {
        setUser(user);

        if (user.uid) {
          let username = "";
          setIsLoading(false);
          _redux_fbConfig__WEBPACK_IMPORTED_MODULE_2__["db"].collection("users").doc(user.uid).onSnapshot(doc => {
            username = doc.data().username;
            setUser(_objectSpread(_objectSpread({}, user), {}, {
              username
            }));
          });
        }
      } else {
        setUser(false);
        setIsLoading(false);
      }
    }); // Cleanup subscription on unmount

    return () => unsubscribe();
  }, []); // Return the user object and auth methods

  return {
    isLoading,
    user,
    signin,
    signup,
    signout,
    sendPasswordResetEmail,
    confirmPasswordReset
  };
}

/***/ }),

/***/ "./pages/story/[id]/edit.js":
/*!**********************************!*\
  !*** ./pages/story/[id]/edit.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_userHooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../hooks/userHooks */ "./hooks/userHooks.js");
/* harmony import */ var _redux_actions_charactersActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../redux/actions/charactersActions */ "./redux/actions/charactersActions.js");
/* harmony import */ var _redux_actions_storiesActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../redux/actions/storiesActions */ "./redux/actions/storiesActions.js");
/* harmony import */ var _components_forms_StoryForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/forms/StoryForm */ "./components/forms/StoryForm.js");
var _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\pages\\story\\[id]\\edit.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






 //import Loader from "../../../components/hoc/withLoading";



const EditStory = props => {
  const auth = Object(_hooks_userHooks__WEBPACK_IMPORTED_MODULE_4__["useAuth"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const {
    story,
    loading,
    characters,
    loadingStory,
    storyExists
  } = props;
  const [form] = antd__WEBPACK_IMPORTED_MODULE_1__["Form"].useForm();
  console.log(loading);
  const [mature, setMature] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const [visibility, setVisibility] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(true);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    if (auth.user) {
      props.getUserCharacters(auth.user.uid);
    }
  }, [auth]);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    if (router.query.id) {
      props.getStory(router.query.id);
    }
  }, [router.query.id]);

  const submit = values => {
    delete values.currentChar;
    props.editStory(values, router.query.id);
  };

  return !loading ? storyExists && story.title ? auth.user.uid === story.authorId ? __jsx(_components_forms_StoryForm__WEBPACK_IMPORTED_MODULE_7__["default"], {
    type: "edit",
    submit: submit,
    characters: characters,
    loading: loading,
    form: form,
    mature: mature,
    setMature: setMature,
    visibility: visibility,
    setVisibility: setVisibility,
    story: story,
    loadingStory: loadingStory,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }) : __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Result"], {
    status: "403",
    title: "403",
    subTitle: "Sorry, you are not authorized to access this page.",
    extra: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      type: "primary",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 18
      }
    }, "Back Home"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }) : __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Result"], {
    status: "404",
    title: "404",
    subTitle: "Sorry, the page you visited does not exist.",
    extra: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      type: "primary",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 16
      }
    }, "Back Home"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }) : __jsx("div", {
    className: "loader-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "loader",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  })));
};

const mapStateToProps = state => ({
  characters: state.characters.userCharacters,
  confirmMessage: state.stories.message,
  storyId: state.stories.storyId,
  loadingStory: state.stories.loadingStory,
  story: state.stories.story,
  loading: state.stories.loading,
  storyExists: state.stories.storyExists
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, {
  getUserCharacters: _redux_actions_charactersActions__WEBPACK_IMPORTED_MODULE_5__["getUserCharacters"],
  editStory: _redux_actions_storiesActions__WEBPACK_IMPORTED_MODULE_6__["editStory"],
  getStory: _redux_actions_storiesActions__WEBPACK_IMPORTED_MODULE_6__["getStory"]
})(EditStory));

/***/ }),

/***/ "./redux/actions/charactersActions.js":
/*!********************************************!*\
  !*** ./redux/actions/charactersActions.js ***!
  \********************************************/
/*! exports provided: getCharacter, addCharacter, editCharacter, getUserCharacters, getFavoriteCharacters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCharacter", function() { return getCharacter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCharacter", function() { return addCharacter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editCharacter", function() { return editCharacter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserCharacters", function() { return getUserCharacters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFavoriteCharacters", function() { return getFavoriteCharacters; });
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/constants */ "./utils/constants.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fbConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fbConfig */ "./redux/fbConfig.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const getCharacter = id => dispatch => {
  _fbConfig__WEBPACK_IMPORTED_MODULE_2__["db"].collection("characters").doc(id).get().then(doc => {
    if (doc.exists) {
      dispatch({
        type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["GET_CHARACTER"],
        payload: {
          character: _objectSpread(_objectSpread({}, doc.data()), {}, {
            id: doc.id
          }),
          charaExists: true,
          loading: false
        }
      });
    } else {
      dispatch({
        type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["GET_CHARACTER"],
        payload: {
          charaExists: false,
          loading: false
        }
      });
    }
  });
};
const addCharacter = data => dispatch => {
  dispatch({
    type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["ADD_CHARACTER"],
    payload: {
      loading: true
    }
  });
  const imageName = `${data.firstname.toLowerCase()}${data.lastname && "_"}${data.lastname && data.lastname.toLowerCase()}`;

  if (typeof data.image === "object") {
    storage.ref(`${_fbConfig__WEBPACK_IMPORTED_MODULE_2__["auth"].currentUser.uid}/${imageName}`).put(data.image).then(() => {
      return storage.ref(_fbConfig__WEBPACK_IMPORTED_MODULE_2__["auth"].currentUser.uid).child(imageName).getDownloadURL();
    }).then(url => {
      return _fbConfig__WEBPACK_IMPORTED_MODULE_2__["db"].collection("characters").add(_objectSpread(_objectSpread({}, data), {}, {
        image: url,
        createdAt: firebase_app__WEBPACK_IMPORTED_MODULE_3___default.a.firestore.FieldValue.serverTimestamp(),
        likesCount: 0,
        likes: [],
        dislikes: []
      }));
    }).then(res => {
      antd__WEBPACK_IMPORTED_MODULE_1__["message"].success("Character added successfully");
      dispatch({
        type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["ADD_CHARACTER"],
        payload: {
          message: "Character added successfully",
          characterId: res.id,
          loading: false
        }
      });
    }).catch(err => {
      antd__WEBPACK_IMPORTED_MODULE_1__["message"].error(err.message);
    });
  } else {
    _fbConfig__WEBPACK_IMPORTED_MODULE_2__["db"].collection("characters").add(_objectSpread(_objectSpread({}, data), {}, {
      createdAt: firebase_app__WEBPACK_IMPORTED_MODULE_3___default.a.firestore.FieldValue.serverTimestamp(),
      likesCount: 0,
      likes: [],
      dislikes: []
    })).then(res => {
      antd__WEBPACK_IMPORTED_MODULE_1__["message"].success("Character added successfully");
      dispatch({
        type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["ADD_CHARACTER"],
        payload: {
          message: "Character added successfully",
          characterId: res.id,
          loading: false
        }
      });
    }).catch(err => {
      antd__WEBPACK_IMPORTED_MODULE_1__["message"].error(err.message);
    });
  }
};
const editCharacter = (data, id) => dispatch => {
  dispatch({
    type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["EDIT_CHARACTER"],
    payload: {
      loadingCharacter: true
    }
  });
  const imageName = `${data.firstname.toLowerCase()}${data.lastname && "_"}${data.lastname && data.lastname.toLowerCase()}`;

  if (data.image && typeof data.image === "object") {
    storage.ref(`${_fbConfig__WEBPACK_IMPORTED_MODULE_2__["auth"].currentUser.uid}/${imageName}`).put(data.image).then(() => {
      return storage.ref(_fbConfig__WEBPACK_IMPORTED_MODULE_2__["auth"].currentUser.uid).child(imageName).getDownloadURL();
    }).then(url => {
      return _fbConfig__WEBPACK_IMPORTED_MODULE_2__["db"].collection("characters").doc(id).update(_objectSpread(_objectSpread({}, data), {}, {
        image: url
      }));
    }).then(() => {
      dispatch({
        type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["EDIT_CHARACTER"],
        payload: {
          message: "Character edited successfully",
          loadingCharacter: false
        }
      });
    }).catch(err => {
      antd__WEBPACK_IMPORTED_MODULE_1__["message"].error(err.message);
    });
  } else {
    _fbConfig__WEBPACK_IMPORTED_MODULE_2__["db"].collection("characters").doc(id).update(_objectSpread({}, data)).then(() => {
      dispatch({
        type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["EDIT_CHARACTER"],
        payload: {
          message: "Character edited successfully",
          loadingCharacter: false
        }
      });
    }).catch(err => {
      antd__WEBPACK_IMPORTED_MODULE_1__["message"].error(err.message);
    });
  }
};
const getUserCharacters = userId => dispatch => {
  _fbConfig__WEBPACK_IMPORTED_MODULE_2__["db"].collection("characters").where("authorId", "==", userId).get().then(docs => {
    let items = [];
    docs.forEach(doc => {
      items = [...items, _objectSpread({
        id: doc.id
      }, doc.data())];
    });
    return items;
  }).then(items => {
    dispatch({
      type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["GET_USER_CHARACTERS"],
      payload: items
    });
  });
};
const getFavoriteCharacters = () => dispatch => {
  _fbConfig__WEBPACK_IMPORTED_MODULE_2__["db"].collection("charactersLikes").where("senderId", "==", _fbConfig__WEBPACK_IMPORTED_MODULE_2__["auth"].currentUser.uid).get().then(docs => {
    let favArr = [];
    docs.forEach(doc => {
      favArr = [...favArr, doc.data().characterId];
    });
    return favArr;
  }).then(users => {
    const result = users.map(user => _fbConfig__WEBPACK_IMPORTED_MODULE_2__["db"].collection("characters").doc(user).get());
    Promise.all(result).then(res => {
      let favUsers = [];
      res.forEach(doc => favUsers = [...favUsers, _objectSpread({
        id: doc.id
      }, doc.data())]);
      dispatch({
        type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["GET_FAVORITE_CHARACTERS"],
        payload: favUsers
      });
    });
  });
};

/***/ }),

/***/ "./redux/actions/storiesActions.js":
/*!*****************************************!*\
  !*** ./redux/actions/storiesActions.js ***!
  \*****************************************/
/*! exports provided: getStory, addStory, editStory, addChapter, getChapter, editChapter, getChapters, getStoryCharacters, getUserStories, getUserLocations, getFavoriteStories */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStory", function() { return getStory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addStory", function() { return addStory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editStory", function() { return editStory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addChapter", function() { return addChapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChapter", function() { return getChapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editChapter", function() { return editChapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChapters", function() { return getChapters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStoryCharacters", function() { return getStoryCharacters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserStories", function() { return getUserStories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserLocations", function() { return getUserLocations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFavoriteStories", function() { return getFavoriteStories; });
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/constants */ "./utils/constants.js");
/* harmony import */ var _fbConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fbConfig */ "./redux/fbConfig.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const getStory = id => dispatch => {
  _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("stories").doc(id).get().then(doc => {
    if (doc.exists) {
      dispatch({
        type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["GET_STORY"],
        storyExists: true,
        payload: _objectSpread(_objectSpread({}, doc.data()), {}, {
          id: doc.id
        })
      });
    } else {
      dispatch({
        type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["DISPATCH_ERROR"],
        storyExists: false
      });
    }
  }).catch(err => console.log(err));
};
const addStory = data => dispatch => {
  dispatch({
    type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["ADD_STORY"],
    payload: {
      loading: true
    }
  });
  const imageName = data.title.toLowerCase().split(" ").join("_");
  console.log(data);

  if (typeof data.banner === "object") {
    _fbConfig__WEBPACK_IMPORTED_MODULE_1__["storage"].ref(`${_fbConfig__WEBPACK_IMPORTED_MODULE_1__["auth"].currentUser.uid}/${imageName}`).put(data.banner).then(() => {
      return _fbConfig__WEBPACK_IMPORTED_MODULE_1__["storage"].ref(_fbConfig__WEBPACK_IMPORTED_MODULE_1__["auth"].currentUser.uid).child(imageName).getDownloadURL();
    }).then(url => {
      return _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("stories").add(_objectSpread(_objectSpread({}, data), {}, {
        authorId: _fbConfig__WEBPACK_IMPORTED_MODULE_1__["auth"].currentUser.uid,
        authorName: data.authorName,
        oneShot: false,
        banner: url,
        createdAt: firebase_app__WEBPACK_IMPORTED_MODULE_2___default.a.firestore.FieldValue.serverTimestamp(),
        likesCount: 0,
        chaptersCount: 0,
        locationsCount: 0,
        secondaryCharacters: [],
        featured: false,
        note: 0
      }));
    }).then(res => {
      antd__WEBPACK_IMPORTED_MODULE_3__["message"].success("Story added successfully");
      setTimeout(() => {
        next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push(`/story/${res.id}`);
        dispatch({
          type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["ADD_STORY"],
          payload: {
            message: "Story added successfully",
            storyId: res.id,
            loading: false
          }
        });
      }, 1000);
    }).catch(err => {
      antd__WEBPACK_IMPORTED_MODULE_3__["message"].error(err.message);
    });
  } else {
    _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("stories").add(_objectSpread(_objectSpread({}, data), {}, {
      authorId: _fbConfig__WEBPACK_IMPORTED_MODULE_1__["auth"].currentUser.uid,
      authorName: data.authorName,
      oneShot: false,
      createdAt: firebase_app__WEBPACK_IMPORTED_MODULE_2___default.a.firestore.FieldValue.serverTimestamp(),
      likesCount: 0,
      chaptersCount: 0,
      locationsCount: 0,
      featured: false,
      secondaryCharacters: [],
      note: 0
    })).then(res => {
      antd__WEBPACK_IMPORTED_MODULE_3__["message"].success("Story added successfully");
      setTimeout(() => {
        next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push(`/story/${res.id}`);
        dispatch({
          type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["ADD_STORY"],
          payload: {
            message: "Story added successfully",
            storyId: res.id,
            loading: false
          }
        });
      }, 1000);
    }).catch(err => {
      antd__WEBPACK_IMPORTED_MODULE_3__["message"].error(err.message);
    });
  }
};
const editStory = (data, storyId) => dispatch => {
  dispatch({
    type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["EDIT_STORY"],
    payload: {
      loadingStory: true
    }
  });
  const imageName = data.title.toLowerCase().split(" ").join("_");

  if (typeof data.banner === "object") {
    _fbConfig__WEBPACK_IMPORTED_MODULE_1__["storage"].ref(`${_fbConfig__WEBPACK_IMPORTED_MODULE_1__["auth"].currentUser.uid}/${imageName}`).put(data.banner).then(() => {
      return _fbConfig__WEBPACK_IMPORTED_MODULE_1__["storage"].ref(_fbConfig__WEBPACK_IMPORTED_MODULE_1__["auth"].currentUser.uid).child(imageName).getDownloadURL();
    }).then(url => {
      return _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("stories").doc(storyId).update(_objectSpread(_objectSpread({}, data), {}, {
        banner: url
      }));
    }).then(() => {
      antd__WEBPACK_IMPORTED_MODULE_3__["message"].success("Story added successfully");
      dispatch({
        type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["EDIT_STORY"],
        payload: {
          message: "Story edited successfully"
        }
      });
    }).catch(err => {
      antd__WEBPACK_IMPORTED_MODULE_3__["message"].error(err.message);
    });
  } else {
    _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("stories").doc(storyId).update(_objectSpread({}, data)).then(() => {
      antd__WEBPACK_IMPORTED_MODULE_3__["message"].success("Story added successfully");
      dispatch({
        type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["EDIT_STORY"],
        payload: {
          message: "Story edited successfully"
        }
      });
    }).catch(err => {
      antd__WEBPACK_IMPORTED_MODULE_3__["message"].error(err.message);
    });
  }
};
const addChapter = data => dispatch => {
  dispatch({
    type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["ADD_CHAPTER"],
    payload: {
      loading: true
    }
  });
  _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("chapters").add(_objectSpread(_objectSpread({}, data), {}, {
    authorId: _fbConfig__WEBPACK_IMPORTED_MODULE_1__["auth"].currentUser.uid,
    commentsCount: 0,
    note: 0,
    voters: [],
    votesCount: 0,
    createdAt: firebase_app__WEBPACK_IMPORTED_MODULE_2___default.a.firestore.FieldValue.serverTimestamp()
  })).then(res => {
    _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("stories").doc(data.storyId).get().then(doc => {
      const characters = doc.data().secondaryCharacters;
      const main = doc.data().mainCharacters;
      _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("stories").doc(data.storyId).update({
        secondaryCharacters: [...new Set([...characters, ...data.characters.filter(c => !main.includes(c))])]
      }).then(() => {
        dispatch({
          type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["ADD_CHAPTER"],
          payload: {
            message: "Chapter added successfully",
            chapId: res.id,
            loading: false
          }
        });
      });
    });
  }); // .then((res) => {
  //   dispatch({
  //     type: ADD_CHAPTER,
  //     payload: {
  //       message: "Chapter added successfully",
  //       chapId: res.id,
  //     },
  //   });
  // })
  // .catch((err) =>
  //   dispatch({
  //     type: ADD_CHAPTER,
  //     payload: { message: err.message, chapId: "" },
  //   })
  // );
};
const getChapter = (storyId, id) => dispatch => {
  _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("stories").doc(storyId).get().then(doc => {
    if (doc.exists) {
      _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("chapters").doc(id).get().then(doc => {
        if (doc.exists) {
          dispatch({
            type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["GET_CHAPTER"],
            payload: {
              chapter: _objectSpread(_objectSpread({}, doc.data()), {}, {
                id: doc.id
              }),
              chapterExists: true
            }
          });
        } else {
          dispatch({
            type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["GET_CHAPTER"],
            payload: {
              chapterExists: false
            }
          });
        }
      });
    } else {
      dispatch({
        type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["GET_CHAPTER"],
        payload: {
          chapterExists: false
        }
      });
    }
  });
};
const editChapter = (data, storyId, chapid) => dispatch => {
  dispatch({
    type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["EDIT_CHAPTER"],
    payload: {
      loading: true
    }
  });
  _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("chapters").doc(chapid).update(_objectSpread({}, data)).then(() => {
    _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("stories").doc(storyId).get().then(doc => {
      const characters = doc.data().secondaryCharacters;
      const main = doc.data().mainCharacters;
      _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("stories").doc(storyId).update({
        secondaryCharacters: data.characters ? [...new Set([...characters, ...data.characters.filter(c => !main.includes(c))])] : characters
      }).then(() => {
        dispatch({
          type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["EDIT_CHAPTER"],
          payload: {
            message: "Chapter edited successfully",
            loading: false
          }
        });
      });
    });
  });
};
const getChapters = id => dispatch => {
  _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("chapters").where("storyId", "==", id).orderBy("number", "asc").onSnapshot(docs => {
    let arr = [];
    docs.forEach(doc => {
      arr.push({
        authorId: doc.data().authorId,
        id: doc.id,
        createdAt: doc.data().createdAt,
        number: doc.data().number,
        title: doc.data().title,
        commentsCount: doc.data().commentsCount
      });
    });
    dispatch({
      type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["GET_CHAPTERS"],
      payload: arr
    });
  });
};
const getStoryCharacters = id => dispatch => {};
const getUserStories = () => dispatch => {
  _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("stories").where("authorId", "==", _fbConfig__WEBPACK_IMPORTED_MODULE_1__["auth"].currentUser.uid).get().then(docs => {
    let items = [];
    docs.forEach(doc => {
      items = [...items, _objectSpread({
        id: doc.id
      }, doc.data())];
    });
    return items;
  }).then(items => {
    dispatch({
      type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["GET_USER_STORIES"],
      payload: items
    });
  });
};
const getUserLocations = () => dispatch => {
  _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("locations").where("authorId", "==", _fbConfig__WEBPACK_IMPORTED_MODULE_1__["auth"].currentUser.uid).get().then(docs => {
    let locations = [];
    docs.forEach(doc => {
      locations = [...locations, _objectSpread({
        id: doc.id
      }, doc.data())];
    });
    dispatch({
      type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["GET_USER_LOCATIONS"],
      payload: locations
    });
  });
};
const getFavoriteStories = () => dispatch => {
  _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("storiesLikes").where("senderId", "==", _fbConfig__WEBPACK_IMPORTED_MODULE_1__["auth"].currentUser.uid).get().then(docs => {
    let favArr = [];
    docs.forEach(doc => {
      favArr = [...favArr, doc.data().storyId];
    });
    return favArr;
  }).then(users => {
    const result = users.map(user => _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("stories").doc(user).get());
    Promise.all(result).then(res => {
      let favUsers = [];
      res.forEach(doc => favUsers = [...favUsers, _objectSpread({
        id: doc.id
      }, doc.data())]);
      dispatch({
        type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["GET_FAVORITE_STORIES"],
        payload: favUsers
      });
    });
  });
};

/***/ }),

/***/ "./redux/fbConfig.js":
/*!***************************!*\
  !*** ./redux/fbConfig.js ***!
  \***************************/
/*! exports provided: db, auth, storage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "db", function() { return db; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return auth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storage", function() { return storage; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ "firebase/auth");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ "firebase/firestore");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/storage */ "firebase/storage");
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_storage__WEBPACK_IMPORTED_MODULE_3__);




const prodConfig = {
  apiKey: "AIzaSyBI9ITjYUCZ6YedemNiY9EXmKMLEx6yCys",
  authDomain: "story-center.firebaseapp.com",
  databaseURL: "https://story-center.firebaseio.com",
  projectId: "story-center",
  storageBucket: "story-center.appspot.com",
  messagingSenderId: "1095246518275",
  appId: "1:1095246518275:web:de42acc0aab573506e5636"
};
const devConfig = {
  apiKey: "AIzaSyBI9ITjYUCZ6YedemNiY9EXmKMLEx6yCys",
  authDomain: "story-center.firebaseapp.com",
  databaseURL: "https://story-center.firebaseio.com",
  projectId: "story-center",
  storageBucket: "story-center.appspot.com",
  messagingSenderId: "1095246518275",
  appId: "1:1095246518275:web:de42acc0aab573506e5636"
};
const config = false ? undefined : devConfig;

if (!firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length) {
  firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(config);
}

const db = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.firestore();
const auth = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.auth();
const storage = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.storage();

/* harmony default export */ __webpack_exports__["default"] = (config);

/***/ }),

/***/ "./utils/constants.js":
/*!****************************!*\
  !*** ./utils/constants.js ***!
  \****************************/
/*! exports provided: CATEGORIES, COPYRIGHTS, LANGUAGES, STATUS, GET_PROFILE, LOGIN, REGISTER, GET_STORY, GET_USER_STORIES, GET_FAVORITE_STORIES, ADD_STORY, EDIT_STORY, GET_CHAPTER, ADD_CHAPTER, EDIT_CHAPTER, GET_CHAPTERS, ADD_CHARACTER, GET_CHARACTER, EDIT_CHARACTER, GET_USER_CHARACTERS, GET_USER_LOCATIONS, GET_FAVORITE_CHARACTERS, GET_FAVORITE_AUTHORS, GET_FOLLOWERS, DISPATCH_ERROR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CATEGORIES", function() { return CATEGORIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COPYRIGHTS", function() { return COPYRIGHTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANGUAGES", function() { return LANGUAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATUS", function() { return STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PROFILE", function() { return GET_PROFILE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN", function() { return LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER", function() { return REGISTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_STORY", function() { return GET_STORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_USER_STORIES", function() { return GET_USER_STORIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_FAVORITE_STORIES", function() { return GET_FAVORITE_STORIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_STORY", function() { return ADD_STORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_STORY", function() { return EDIT_STORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_CHAPTER", function() { return GET_CHAPTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_CHAPTER", function() { return ADD_CHAPTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_CHAPTER", function() { return EDIT_CHAPTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_CHAPTERS", function() { return GET_CHAPTERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_CHARACTER", function() { return ADD_CHARACTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_CHARACTER", function() { return GET_CHARACTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_CHARACTER", function() { return EDIT_CHARACTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_USER_CHARACTERS", function() { return GET_USER_CHARACTERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_USER_LOCATIONS", function() { return GET_USER_LOCATIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_FAVORITE_CHARACTERS", function() { return GET_FAVORITE_CHARACTERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_FAVORITE_AUTHORS", function() { return GET_FAVORITE_AUTHORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_FOLLOWERS", function() { return GET_FOLLOWERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DISPATCH_ERROR", function() { return DISPATCH_ERROR; });
const CATEGORIES = [{
  name: "Drama",
  value: "drama"
}, {
  name: "Comedy",
  value: "comedy"
}, {
  name: "Horror",
  value: "horror"
}, {
  name: "Romance",
  value: "romance"
}, {
  name: "Sci-fi",
  value: "sci-fi"
}, {
  name: "Fantasy",
  value: "fantasy"
}, {
  name: "Humor",
  value: "humor"
}, {
  name: "Action",
  value: "action"
}, {
  name: "Thriller",
  value: "thriller"
}, {
  name: "Supernatural",
  value: "supernatural"
}, {
  name: "Adventure",
  value: "adventure"
}, {
  name: "Mystery",
  value: "mystery"
}, {
  name: "Western",
  value: "western"
}, {
  name: "History",
  value: "history"
}, {
  name: "Crime",
  value: "crime"
}, {
  name: "Fanfiction",
  value: "fanfiction"
}];
const COPYRIGHTS = [{
  name: "Public Domain",
  value: "public domain"
}, {
  name: "All Rights Reserved",
  value: "all rights reserved"
}, {
  name: "Creative Commons",
  value: "creative commons"
}];
const LANGUAGES = [{
  name: "Afar",
  value: "aa"
}, {
  name: "Abkhazian",
  value: "ab"
}, {
  name: "Avestan",
  value: "ae"
}, {
  name: "Afrikaans",
  value: "af"
}, {
  name: "Akan",
  value: "ak"
}, {
  name: "Amharic",
  value: "am"
}, {
  name: "Aragonese",
  value: "an"
}, {
  name: "Arabic",
  value: "ar"
}, {
  name: "Assamese",
  value: "as"
}, {
  name: "Avaric",
  value: "av"
}, {
  name: "Aymara",
  value: "ay"
}, {
  name: "Azerbaijani",
  value: "az"
}, {
  name: "Bashkir",
  value: "ba"
}, {
  name: "Belarusian",
  value: "be"
}, {
  name: "Bulgarian",
  value: "bg"
}, {
  name: "Bihari",
  value: "bh"
}, {
  name: "Bislama",
  value: "bi"
}, {
  name: "Bambara",
  value: "bm"
}, {
  name: "Bengali",
  value: "bn"
}, {
  name: "Tibetan",
  value: "bo"
}, {
  name: "Breton",
  value: "br"
}, {
  name: "Bosnian",
  value: "bs"
}, {
  name: "Catalan",
  value: "ca"
}, {
  name: "Chechen",
  value: "ce"
}, {
  name: "Chamorro",
  value: "ch"
}, {
  name: "Corsican",
  value: "co"
}, {
  name: "Cree",
  value: "cr"
}, {
  name: "Czech",
  value: "cs"
}, {
  name: "Old Church Slavonic",
  value: "cu"
}, {
  name: "Chuvash",
  value: "cv"
}, {
  name: "Welsh",
  value: "cy"
}, {
  name: "Danish",
  value: "da"
}, {
  name: "German",
  value: "de"
}, {
  name: "Divehi",
  value: "dv"
}, {
  name: "Dzongkha	",
  value: "dz"
}, {
  name: "Ewe",
  value: "ee"
}, {
  name: "Greek",
  value: "el"
}, {
  name: "English",
  value: "en"
}, {
  name: "Esperanto",
  value: "eo"
}, {
  name: "Spanish",
  value: "es"
}, {
  name: "Estonian",
  value: "et"
}, {
  name: "Basque",
  value: "eu"
}, {
  name: "Persian",
  value: "fa"
}, {
  name: "Fulah",
  value: "ff"
}, {
  name: "Finnish",
  value: "fi"
}, {
  name: "Fijian",
  value: "fj"
}, {
  name: "Faroese",
  value: "fo"
}, {
  name: "French",
  value: "fr"
}, {
  name: "Western Frisian",
  value: "fy"
}, {
  name: "Irish",
  value: "ga"
}, {
  name: "Scottish Gaelic",
  value: "gd"
}, {
  name: "Galician",
  value: "gl"
}, {
  name: "Guarani",
  value: "gn"
}, {
  name: "Gujarati",
  value: "gu"
}, {
  name: "Manx",
  value: "gv"
}, {
  name: "Hausa",
  value: "ha"
}, {
  name: "Hebrew",
  value: "he"
}, {
  name: "Hindi",
  value: "hi"
}, {
  name: "Hiri Motu",
  value: "ho"
}, {
  name: "Croatian",
  value: "hr"
}, {
  name: "Haitian",
  value: "ht"
}, {
  name: "Hungarian",
  value: "hu"
}, {
  name: "Armenian",
  value: "hy"
}, {
  name: "Herero",
  value: "hz"
}, {
  name: "Interlingua",
  value: "ia"
}, {
  name: "Indonesian",
  value: "id"
}, {
  name: "Interlingue",
  value: "ie"
}, {
  name: "Igbo",
  value: "ig"
}, {
  name: "Sichuan Yi",
  value: "ii"
}, {
  name: "Inupiaq",
  value: "ik"
}, {
  name: "Ido",
  value: "io"
}, {
  name: "Icelandic",
  value: "is"
}, {
  name: "Italian",
  value: "it"
}, {
  name: "Inuktitut",
  value: "iu"
}, {
  name: "Japanese",
  value: "ja"
}, {
  name: "Javanese",
  value: "jv"
}, {
  name: "Georgian",
  value: "ka"
}, {
  name: "Kongo",
  value: "kg"
}, {
  name: "Kikuyu",
  value: "ki"
}, {
  name: "Kwanyama",
  value: "kj"
}, {
  name: "Kazakh",
  value: "kk"
}, {
  name: "Greenlandic",
  value: "kl"
}, {
  name: "Khmer",
  value: "km"
}, {
  name: "Kannada",
  value: "kn"
}, {
  name: "Korean",
  value: "ko"
}, {
  name: "Kanuri",
  value: "kr"
}, {
  name: "Kashmiri",
  value: "ks"
}, {
  name: "Kurdish",
  value: "ku"
}, {
  name: "Komi",
  value: "kv"
}, {
  name: "Cornish",
  value: "kw"
}, {
  name: "Kirghiz",
  value: "ky"
}, {
  name: "Latin",
  value: "la"
}, {
  name: "Luxembourgish",
  value: "lb"
}, {
  name: "Ganda",
  value: "lg"
}, {
  name: "Limburgish",
  value: "li"
}, {
  name: "Lingala",
  value: "ln"
}, {
  name: "Lao",
  value: "lo"
}, {
  name: "Lithuanian",
  value: "lt"
}, {
  name: "Luba",
  value: "lu"
}, {
  name: "Latvian",
  value: "lv"
}, {
  name: "Malagasy",
  value: "mg"
}, {
  name: "Marshallese",
  value: "mh"
}, {
  name: "Māori",
  value: "mi"
}, {
  name: "Macedonian",
  value: "mk"
}, {
  name: "Malayalam",
  value: "ml"
}, {
  name: "Mongolian",
  value: "mn"
}, {
  name: "Moldavian",
  value: "mo"
}, {
  name: "Marathi",
  value: "mr"
}, {
  name: "Malay",
  value: "ms"
}, {
  name: "Maltese",
  value: "mt"
}, {
  name: "Burmese",
  value: "my"
}, {
  name: "Nauru",
  value: "na"
}, {
  name: "Norwegian Bokmål",
  value: "nb"
}, {
  name: "North Ndebele",
  value: "nd"
}, {
  name: "Nepali",
  value: "ne"
}, {
  name: "Ndonga",
  value: "ng"
}, {
  name: "Dutch",
  value: "nl"
}, {
  name: "Norwegian Nynorsk",
  value: "nn"
}, {
  name: "Norwegian",
  value: "no"
}, {
  name: "South Ndebele",
  value: "nr"
}, {
  name: "Navajo",
  value: "nv"
}, {
  name: "Chichewa",
  value: "ny"
}, {
  name: "Occitan",
  value: "oc"
}, {
  name: "Ojibwa",
  value: "oj"
}, {
  name: "Oromo",
  value: "om"
}, {
  name: "Oriya",
  value: "or"
}, {
  name: "Ossetian",
  value: "os"
}, {
  name: "Panjabi",
  value: "pa"
}, {
  name: "Pāli",
  value: "pi"
}, {
  name: "Polish",
  value: "pl"
}, {
  name: "Pashto",
  value: "ps"
}, {
  name: "Portuguese",
  value: "pt"
}, {
  name: "Quechua",
  value: "qu"
}, {
  name: "Reunionese",
  value: "rc"
}, {
  name: "Romansh",
  value: "rm"
}, {
  name: "Kirundi",
  value: "rn"
}, {
  name: "Romanian",
  value: "ro"
}, {
  name: "Russian",
  value: "ru"
}, {
  name: "Kinyarwanda",
  value: "rw"
}, {
  name: "Sanskrit",
  value: "sa"
}, {
  name: "Sardinian",
  value: "sc"
}, {
  name: "Sindhi",
  value: "sd"
}, {
  name: "Northern Sami",
  value: "se"
}, {
  name: "Sango",
  value: "sg"
}, {
  name: "Serbo-Croatian",
  value: "sh"
}, {
  name: "Sinhalese",
  value: "si"
}, {
  name: "Slovak",
  value: "sk"
}, {
  name: "Slovenian",
  value: "sl"
}, {
  name: "Samoan",
  value: "sm"
}, {
  name: "Shona",
  value: "sn"
}, {
  name: "Somali",
  value: "so"
}, {
  name: "Albanian",
  value: "sq"
}, {
  name: "Serbian",
  value: "sr"
}, {
  name: "Swati",
  value: "ss"
}, {
  name: "Sotho",
  value: "st"
}, {
  name: "Sundanese",
  value: "su"
}, {
  name: "Swedish",
  value: "sv"
}, {
  name: "Swahili",
  value: "sw"
}, {
  name: "Tamil",
  value: "ta"
}, {
  name: "Telugu",
  value: "te"
}, {
  name: "Tajik",
  value: "tg"
}, {
  name: "Thai",
  value: "th"
}, {
  name: "Tigrinya",
  value: "ti"
}, {
  name: "Turkmen",
  value: "tk"
}, {
  name: "Tagalog",
  value: "tl"
}, {
  name: "Tswana",
  value: "tn"
}, {
  name: "Tonga",
  value: "to"
}, {
  name: "Turkish",
  value: "tr"
}, {
  name: "Tsonga",
  value: "ts"
}, {
  name: "Tatar",
  value: "tt"
}, {
  name: "Twi",
  value: "tw"
}, {
  name: "Tahitian",
  value: "ty"
}, {
  name: "Uighur",
  value: "ug"
}, {
  name: "Ukrainian",
  value: "uk"
}, {
  name: "Urdu",
  value: "ur"
}, {
  name: "Uzbek",
  value: "uz"
}, {
  name: "Venda",
  value: "ve"
}, {
  name: "Viêt Namese",
  value: "vi"
}, {
  name: "Volapük",
  value: "vo"
}, {
  name: "Walloon",
  value: "wa"
}, {
  name: "Wolof",
  value: "wo"
}, {
  name: "Xhosa",
  value: "xh"
}, {
  name: "Yiddish",
  value: "yi"
}, {
  name: "Yoruba",
  value: "yo"
}, {
  name: "Zhuang",
  value: "za"
}, {
  name: "Chinese",
  value: "zh"
}, {
  name: "Zulu",
  value: "zu"
}];
const STATUS = [{
  name: "In Progress",
  value: "in progress"
}, {
  name: "In Hiatus",
  value: "in hiatus"
}, {
  name: "Completed",
  value: "completed"
}]; // TYPES

const GET_PROFILE = "GET_PROFILE";
const LOGIN = "LOGIN";
const REGISTER = "REGISTER";
const GET_STORY = "GET_STORY";
const GET_USER_STORIES = "GET_USER_STORIES";
const GET_FAVORITE_STORIES = "GET_FAVORITE_STORIES";
const ADD_STORY = "ADD_STORY";
const EDIT_STORY = "EDIT_STORY";
const GET_CHAPTER = "GET_CHAPTER";
const ADD_CHAPTER = "ADD_CHAPTER";
const EDIT_CHAPTER = "EDIT_CHAPTER";
const GET_CHAPTERS = "GET_CHAPTERS";
const ADD_CHARACTER = "ADD_CHARACTER";
const GET_CHARACTER = "GET_CHARACTER";
const EDIT_CHARACTER = "EDIT_CHARACTER";
const GET_USER_CHARACTERS = "GET_USER_CHARACTERS";
const GET_USER_LOCATIONS = "GET_USER_LOCATIONS";
const GET_FAVORITE_CHARACTERS = "GET_FAVORITE_CHARACTERS";
const GET_FAVORITE_AUTHORS = "GET_FAVORITE_AUTHORS";
const GET_FOLLOWERS = "GET_FOLLOWERS";
const DISPATCH_ERROR = "DISPATCH_ERROR";

/***/ }),

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/auth");

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/firestore");

/***/ }),

/***/ "firebase/storage":
/*!***********************************!*\
  !*** external "firebase/storage" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/storage");

/***/ }),

/***/ "is-image-url":
/*!*******************************!*\
  !*** external "is-image-url" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("is-image-url");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mb3Jtcy9JbWFnZVJvdy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvcm1zL0l0ZW1TZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvcm1zL1JhZGlvQnV0dG9uLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZm9ybXMvU3RvcnlGb3JtLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZm9ybXMvVGFncy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvcm1zL1VwbG9hZEltYWdlLmpzIiwid2VicGFjazovLy8uL2hvb2tzL3VzZXJIb29rcy5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9zdG9yeS8vZWRpdC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25zL2NoYXJhY3RlcnNBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3JlZHV4L2FjdGlvbnMvc3Rvcmllc0FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvZmJDb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbnQtZGVzaWduL2ljb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL2FwcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL2F1dGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9maXJlc3RvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9zdG9yYWdlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaXMtaW1hZ2UtdXJsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiXSwibmFtZXMiOlsiSW1hZ2VSb3ciLCJmb3JtIiwiaXRlbUltYWdlIiwibmFtZSIsImxpbmtWaXNpYmxlIiwic2V0TGlua1Zpc2libGUiLCJSZWFjdCIsInVzZVN0YXRlIiwidXBsb2FkVmlzaWJsZSIsInNldFVwbG9hZFZpc2libGUiLCJzaG93TGluayIsInNldEZpZWxkc1ZhbHVlIiwic2hvd1VwbG9hZCIsInR5cGUiLCJtZXNzYWdlIiwidmFsaWRhdG9yIiwiXyIsInZhbHVlIiwiaXNJbWFnZVVybCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiRXJyb3IiLCJPcHRpb24iLCJTZWxlY3QiLCJJdGVtU2VsZWN0b3IiLCJpdGVtIiwic3ViamVjdCIsImFyckluRm9ybSIsImxhYmVsIiwibGcxIiwic3ViamVjdFR5cGUiLCJjdXJyZW50Q2hhciIsInNldEN1cnJlbnRDaGFyIiwiY3VycmVudExvYyIsInNldEN1cnJlbnRMb2MiLCJzZWxlY3RlZFN1YmplY3RzIiwic2V0U2VsZWN0ZWRTdWJqZWN0cyIsImZpbHRlciIsImMiLCJpbmNsdWRlcyIsImlkIiwiYWRkQ2hhcmFjdGVyIiwiY3VycmVudCIsInNldEN1cnJlbnQiLCJnZXRGaWVsZFZhbHVlIiwibGVuZ3RoIiwiaW5kZXhPZiIsImZpbmQiLCJyZW1vdmVDaGFyYWN0ZXIiLCJ2YWwiLCJzb3J0IiwiYSIsImIiLCJrZXlBIiwiZmlyc3RuYW1lIiwia2V5QiIsIm1hcCIsImNoYXIiLCJsYXN0bmFtZSIsImltYWdlIiwibWFyZ2luIiwiUmFkaW9CdXRvbiIsImxnIiwic20iLCJ4cyIsIm1kIiwibnVtMSIsIm51bTIiLCJsYWJlbDEiLCJsYWJlbDIiLCJzZXRGdW5jIiwiU3RvcnlGb3JtIiwic3RvcnkiLCJzdWJtaXQiLCJsb2FkaW5nIiwic3RvcnlJZCIsImNoYXJhY3RlcnMiLCJtYXR1cmUiLCJzZXRNYXR1cmUiLCJ2aXNpYmlsaXR5Iiwic2V0VmlzaWJpbGl0eSIsImxvYWRpbmdTdG9yeSIsImZpbHRlclNvcnQiLCJvbkZhaWxlZCIsIndpbmRvdyIsInNjcm9sbFRvIiwiZXJyb3IiLCJiYW5uZXIiLCJ0aXRsZSIsInN1bW1hcnkiLCJwdWJsaWMiLCJtYWluQ2hhcmFjdGVycyIsInRhZ3MiLCJjYXRlZ29yaWVzIiwiY29weXJpZ2h0IiwibGFuZ3VhZ2UiLCJzdGF0dXMiLCJpbWFnZUNvcHlyaWdodCIsInJlcXVpcmVkIiwibWF4IiwiQ0FURUdPUklFUyIsImNhdCIsImlucHV0Iiwib3B0aW9uIiwiY2hpbGRyZW4iLCJ0b0xvd2VyQ2FzZSIsIkxBTkdVQUdFUyIsImxhbmciLCJTVEFUVVMiLCJzdGF0IiwiQ09QWVJJR0hUUyIsImNvcHkiLCJtaW5Sb3dzIiwiVGFncyIsImlucHV0QnV0dG9uIiwidXNlUmVmIiwiZWRpdElucHV0QnV0dG9uIiwiaW5wdXRWaXNpYmxlIiwic2V0SW5wdXRWaXNpYmxlIiwiaW5wdXRWYWx1ZSIsInNldElucHV0VmFsdWUiLCJlZGl0SW5wdXRJbmRleCIsInNldEVkaXRJbnB1dEluZGV4IiwiZWRpdElucHV0VmFsdWUiLCJzZXRFZGl0SW5wdXRWYWx1ZSIsImhhbmRsZUNsb3NlIiwicmVtb3ZlZFRhZyIsInRhZyIsInNob3dJbnB1dCIsImZvY3VzIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJlIiwidGFyZ2V0IiwiaGFuZGxlSW5wdXRDb25maXJtIiwibmV3VGFncyIsImhhbmRsZUVkaXRJbnB1dENoYW5nZSIsImhhbmRsZUVkaXRJbnB1dENvbmZpcm0iLCJrZXlQcmVzcyIsImNvbnNvbGUiLCJsb2ciLCJrZXkiLCJpIiwiaXNMb25nVGFnIiwiVGFnRWxlbSIsInByZXZlbnREZWZhdWx0Iiwic2xpY2UiLCJnZXRCYXNlNjQiLCJpbWciLCJjYWxsYmFjayIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJhZGRFdmVudExpc3RlbmVyIiwicmVzdWx0IiwicmVhZEFzRGF0YVVSTCIsImJlZm9yZVVwbG9hZCIsImZpbGUiLCJpc0pwZ09yUG5nIiwiaXNMdDJNIiwic2l6ZSIsIlVwbG9hZEltYWdlIiwic2V0TG9hZGluZyIsImltYWdlVXJsIiwic2V0SW1hZ2VVcmwiLCJoYW5kbGVDaGFuZ2UiLCJpbmZvIiwib3JpZ2luRmlsZU9iaiIsInVwbG9hZEJ1dHRvbiIsIm1hcmdpblRvcCIsInNob3dSZW1vdmVJY29uIiwicmVtb3ZlSWNvbiIsIndpZHRoIiwiaGVpZ2h0Iiwib2JqZWN0Rml0IiwiYXV0aENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiUHJvdmlkZUF1dGgiLCJhdXRoIiwidXNlUHJvdmlkZUF1dGgiLCJ1c2VBdXRoIiwidXNlQ29udGV4dCIsInVzZXIiLCJzZXRVc2VyIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwic2lnbmluIiwiZW1haWwiLCJwYXNzd29yZCIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwidGhlbiIsInJlc3BvbnNlIiwic2lnbnVwIiwidXNlcm5hbWUiLCJjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJkYiIsImNvbGxlY3Rpb24iLCJhZGQiLCJiYWRnZXMiLCJiaW9ncmFwaHkiLCJjcmVhdGVkQXQiLCJmaXJlYmFzZSIsImZpcmVzdG9yZSIsIkZpZWxkVmFsdWUiLCJzZXJ2ZXJUaW1lc3RhbXAiLCJzdXNwZW5kZWQiLCJmYWNlYm9vayIsImluc3RhZ3JhbSIsInR3aXR0ZXIiLCJkZXZpYW50YXJ0IiwibGlrZXNDb3VudCIsInNpZ25vdXQiLCJzaWduT3V0Iiwic2VuZFBhc3N3b3JkUmVzZXRFbWFpbCIsImNvbmZpcm1QYXNzd29yZFJlc2V0IiwiY29kZSIsInVzZUVmZmVjdCIsInVuc3Vic2NyaWJlIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwidWlkIiwiZG9jIiwib25TbmFwc2hvdCIsImRhdGEiLCJFZGl0U3RvcnkiLCJwcm9wcyIsInJvdXRlciIsInVzZVJvdXRlciIsInN0b3J5RXhpc3RzIiwiRm9ybSIsInVzZUZvcm0iLCJnZXRVc2VyQ2hhcmFjdGVycyIsInF1ZXJ5IiwiZ2V0U3RvcnkiLCJ2YWx1ZXMiLCJlZGl0U3RvcnkiLCJhdXRob3JJZCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwidXNlckNoYXJhY3RlcnMiLCJjb25maXJtTWVzc2FnZSIsInN0b3JpZXMiLCJjb25uZWN0IiwiZ2V0Q2hhcmFjdGVyIiwiZGlzcGF0Y2giLCJnZXQiLCJleGlzdHMiLCJHRVRfQ0hBUkFDVEVSIiwicGF5bG9hZCIsImNoYXJhY3RlciIsImNoYXJhRXhpc3RzIiwiQUREX0NIQVJBQ1RFUiIsImltYWdlTmFtZSIsInN0b3JhZ2UiLCJyZWYiLCJjdXJyZW50VXNlciIsInB1dCIsImNoaWxkIiwiZ2V0RG93bmxvYWRVUkwiLCJ1cmwiLCJsaWtlcyIsImRpc2xpa2VzIiwicmVzIiwic3VjY2VzcyIsImNoYXJhY3RlcklkIiwiY2F0Y2giLCJlcnIiLCJlZGl0Q2hhcmFjdGVyIiwiRURJVF9DSEFSQUNURVIiLCJsb2FkaW5nQ2hhcmFjdGVyIiwidXBkYXRlIiwidXNlcklkIiwid2hlcmUiLCJkb2NzIiwiaXRlbXMiLCJmb3JFYWNoIiwiR0VUX1VTRVJfQ0hBUkFDVEVSUyIsImdldEZhdm9yaXRlQ2hhcmFjdGVycyIsImZhdkFyciIsInVzZXJzIiwiYWxsIiwiZmF2VXNlcnMiLCJHRVRfRkFWT1JJVEVfQ0hBUkFDVEVSUyIsIkdFVF9TVE9SWSIsIkRJU1BBVENIX0VSUk9SIiwiYWRkU3RvcnkiLCJBRERfU1RPUlkiLCJzcGxpdCIsImpvaW4iLCJhdXRob3JOYW1lIiwib25lU2hvdCIsImNoYXB0ZXJzQ291bnQiLCJsb2NhdGlvbnNDb3VudCIsInNlY29uZGFyeUNoYXJhY3RlcnMiLCJmZWF0dXJlZCIsIm5vdGUiLCJzZXRUaW1lb3V0IiwiUm91dGVyIiwicHVzaCIsIkVESVRfU1RPUlkiLCJhZGRDaGFwdGVyIiwiQUREX0NIQVBURVIiLCJjb21tZW50c0NvdW50Iiwidm90ZXJzIiwidm90ZXNDb3VudCIsIm1haW4iLCJTZXQiLCJjaGFwSWQiLCJnZXRDaGFwdGVyIiwiR0VUX0NIQVBURVIiLCJjaGFwdGVyIiwiY2hhcHRlckV4aXN0cyIsImVkaXRDaGFwdGVyIiwiY2hhcGlkIiwiRURJVF9DSEFQVEVSIiwiZ2V0Q2hhcHRlcnMiLCJvcmRlckJ5IiwiYXJyIiwibnVtYmVyIiwiR0VUX0NIQVBURVJTIiwiZ2V0U3RvcnlDaGFyYWN0ZXJzIiwiZ2V0VXNlclN0b3JpZXMiLCJHRVRfVVNFUl9TVE9SSUVTIiwiZ2V0VXNlckxvY2F0aW9ucyIsImxvY2F0aW9ucyIsIkdFVF9VU0VSX0xPQ0FUSU9OUyIsImdldEZhdm9yaXRlU3RvcmllcyIsIkdFVF9GQVZPUklURV9TVE9SSUVTIiwicHJvZENvbmZpZyIsImFwaUtleSIsInByb2Nlc3MiLCJhdXRoRG9tYWluIiwiZGF0YWJhc2VVUkwiLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIkZJUkVCQVNFX0FQUF9JRCIsImRldkNvbmZpZyIsImNvbmZpZyIsImFwcHMiLCJpbml0aWFsaXplQXBwIiwiR0VUX1BST0ZJTEUiLCJMT0dJTiIsIlJFR0lTVEVSIiwiR0VUX0ZBVk9SSVRFX0FVVEhPUlMiLCJHRVRfRk9MTE9XRVJTIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxNQUFNQSxRQUFRLEdBQUcsQ0FBQztBQUFFQyxNQUFGO0FBQVFDLFdBQVI7QUFBbUJDO0FBQW5CLENBQUQsS0FBK0I7QUFDOUMsUUFBTSxDQUFDQyxXQUFELEVBQWNDLGNBQWQsSUFBZ0NDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBQXRDO0FBQ0EsUUFBTSxDQUFDQyxhQUFELEVBQWdCQyxnQkFBaEIsSUFBb0NILDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBQTFDOztBQUVBLFFBQU1HLFFBQVEsR0FBRyxNQUFNO0FBQ3JCVCxRQUFJLENBQUNVLGNBQUwsQ0FBb0I7QUFBRSxPQUFDUixJQUFELEdBQVE7QUFBVixLQUFwQjtBQUNBRSxrQkFBYyxDQUFDLElBQUQsQ0FBZDtBQUNBSSxvQkFBZ0IsQ0FBQyxLQUFELENBQWhCO0FBQ0QsR0FKRDs7QUFNQSxRQUFNRyxVQUFVLEdBQUcsTUFBTTtBQUN2QlgsUUFBSSxDQUFDVSxjQUFMLENBQW9CO0FBQUUsT0FBQ1IsSUFBRCxHQUFRO0FBQVYsS0FBcEI7QUFDQUUsa0JBQWMsQ0FBQyxLQUFELENBQWQ7QUFDQUksb0JBQWdCLENBQUMsSUFBRCxDQUFoQjtBQUNELEdBSkQ7O0FBTUEsU0FDRSxtRUFDRyxDQUFDRCxhQUFELElBQWtCLENBQUNKLFdBQW5CLElBQ0M7QUFBSyxhQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBUSxXQUFPLEVBQUVRLFVBQWpCO0FBQTZCLFFBQUksRUFBQyxRQUFsQztBQUEyQyxhQUFTLEVBQUMsWUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixFQUtFO0FBQVEsV0FBTyxFQUFFRixRQUFqQjtBQUEyQixRQUFJLEVBQUMsUUFBaEM7QUFBeUMsYUFBUyxFQUFDLFlBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBTEYsQ0FGSixFQVlHRixhQUFhLElBQ1osTUFBQyx3Q0FBRDtBQUFLLFNBQUssRUFBQyxRQUFYO0FBQW9CLFVBQU0sRUFBRSxDQUFDLEVBQUQsRUFBSyxFQUFMLENBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdDQUFEO0FBQUssTUFBRSxFQUFFLEVBQVQ7QUFBYSxNQUFFLEVBQUUsRUFBakI7QUFBcUIsTUFBRSxFQUFFLEVBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9EQUFEO0FBQWEsUUFBSSxFQUFFTCxJQUFuQjtBQUF5QixRQUFJLEVBQUVGLElBQS9CO0FBQXFDLFNBQUssRUFBRUMsU0FBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFJRSxNQUFDLHdDQUFEO0FBQUssTUFBRSxFQUFFLEVBQVQ7QUFBYSxNQUFFLEVBQUUsRUFBakI7QUFBcUIsTUFBRSxFQUFFLEVBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFRLFdBQU8sRUFBRVEsUUFBakI7QUFBMkIsUUFBSSxFQUFDLFFBQWhDO0FBQXlDLGFBQVMsRUFBQyxZQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQURGLENBSkYsQ0FiSixFQXdCR04sV0FBVyxJQUNWLE1BQUMsd0NBQUQ7QUFBSyxTQUFLLEVBQUMsUUFBWDtBQUFvQixVQUFNLEVBQUUsQ0FBQyxFQUFELEVBQUssRUFBTCxDQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3Q0FBRDtBQUFLLE1BQUUsRUFBRSxFQUFUO0FBQWEsTUFBRSxFQUFFLEVBQWpCO0FBQXFCLE1BQUUsRUFBRSxFQUF6QjtBQUE2QixNQUFFLEVBQUUsRUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQ0UsU0FBSyxFQUFFLENBQ0w7QUFDRVMsVUFBSSxFQUFFLEtBRFI7QUFFRUMsYUFBTyxFQUFFO0FBRlgsS0FESyxFQUtMLE9BQU87QUFDTEMsZUFBUyxDQUFDQyxDQUFELEVBQUlDLEtBQUosRUFBVztBQUNsQixZQUFJQyxtREFBVSxDQUFDRCxLQUFELENBQWQsRUFBdUI7QUFDckIsaUJBQU9FLE9BQU8sQ0FBQ0MsT0FBUixFQUFQO0FBQ0Q7O0FBQ0QsZUFBT0QsT0FBTyxDQUFDRSxNQUFSLENBQ0wsSUFBSUMsS0FBSixDQUFVLCtCQUFWLENBREssQ0FBUDtBQUdEOztBQVJJLEtBQVAsQ0FMSyxDQURUO0FBaUJFLFNBQUssRUFBQyw2QkFqQlI7QUFrQkUsUUFBSSxFQUFFbkIsSUFsQlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQW9CRSxNQUFDLDBDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFwQkYsQ0FERixDQURGLEVBeUJFLE1BQUMsd0NBQUQ7QUFBSyxNQUFFLEVBQUUsRUFBVDtBQUFhLE1BQUUsRUFBRSxFQUFqQjtBQUFxQixNQUFFLEVBQUUsRUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQVEsV0FBTyxFQUFFUyxVQUFqQjtBQUE2QixRQUFJLEVBQUMsUUFBbEM7QUFBMkMsYUFBUyxFQUFDLFlBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsQ0F6QkYsQ0F6QkosQ0FERjtBQTRERCxDQTVFRDs7QUE4RWVaLHVFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRkE7QUFDQTtBQUVBLE1BQU07QUFBRXVCO0FBQUYsSUFBYUMsMkNBQW5COztBQUVBLE1BQU1DLFlBQVksR0FBRyxDQUFDO0FBQ3BCQyxNQURvQjtBQUVwQkMsU0FGb0I7QUFHcEIxQixNQUhvQjtBQUlwQjJCLFdBSm9CO0FBS3BCQyxPQUxvQjtBQU1wQmhCLE1BTm9CO0FBT3BCaUIsS0FQb0I7QUFRcEJDO0FBUm9CLENBQUQsS0FTZjtBQUFBOztBQUNKLFFBQU0sQ0FBQ0MsV0FBRCxFQUFjQyxjQUFkLElBQWdDM0IsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEVBQWYsQ0FBdEM7QUFDQSxRQUFNLENBQUMyQixVQUFELEVBQWFDLGFBQWIsSUFBOEI3Qiw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsRUFBZixDQUFwQztBQUNBLFFBQU0sQ0FBQzZCLGdCQUFELEVBQW1CQyxtQkFBbkIsSUFBMEMvQiw0Q0FBSyxDQUFDQyxRQUFOLENBQzlDbUIsSUFBSSxHQUFHQyxPQUFPLENBQUNXLE1BQVIsQ0FBZ0JDLENBQUQsSUFBT2IsSUFBSSxDQUFDYyxRQUFMLENBQWNELENBQUMsQ0FBQ0UsRUFBaEIsQ0FBdEIsQ0FBSCxHQUFnRCxFQUROLENBQWhEOztBQUlBLFFBQU1DLFlBQVksR0FBRyxDQUFDQyxPQUFELEVBQVVDLFVBQVYsS0FBeUI7QUFBQTs7QUFDNUMsUUFBSS9CLElBQUksS0FBSyxPQUFULElBQW9CLHdCQUFBWixJQUFJLENBQUM0QyxhQUFMLENBQW1CakIsU0FBbkIsNkVBQStCa0IsTUFBL0IsTUFBMEMsQ0FBbEUsRUFBcUU7QUFDbkU7QUFDRDs7QUFFRCxRQUFJSCxPQUFPLElBQUkseUJBQUExQyxJQUFJLENBQUM0QyxhQUFMLENBQW1CakIsU0FBbkIsK0VBQStCbUIsT0FBL0IsQ0FBdUNKLE9BQXZDLE9BQW9ELENBQUMsQ0FBcEUsRUFBdUU7QUFDckVOLHlCQUFtQixDQUFDLENBQ2xCLEdBQUdELGdCQURlLEVBRWxCVCxPQUFPLENBQUNxQixJQUFSLENBQWNULENBQUQsSUFBT0EsQ0FBQyxDQUFDRSxFQUFGLEtBQVNFLE9BQTdCLENBRmtCLENBQUQsQ0FBbkI7QUFJQTFDLFVBQUksQ0FBQ1UsY0FBTCxDQUFvQjtBQUNsQixTQUFDaUIsU0FBRCxHQUFhLENBQUMsR0FBRzNCLElBQUksQ0FBQzRDLGFBQUwsQ0FBbUJqQixTQUFuQixDQUFKLEVBQW1DZSxPQUFuQztBQURLLE9BQXBCO0FBR0Q7O0FBRURDLGNBQVUsQ0FBQyxFQUFELENBQVY7QUFDQTNDLFFBQUksQ0FBQ1UsY0FBTCxDQUFvQjtBQUFFLE9BQUNnQyxPQUFELEdBQVc7QUFBYixLQUFwQjtBQUNELEdBakJEOztBQW1CQSxRQUFNTSxlQUFlLEdBQUlSLEVBQUQsSUFBUTtBQUM5QnhDLFFBQUksQ0FBQ1UsY0FBTCxDQUFvQjtBQUNsQixPQUFDaUIsU0FBRCxHQUFhM0IsSUFBSSxDQUFDNEMsYUFBTCxDQUFtQmpCLFNBQW5CLEVBQThCVSxNQUE5QixDQUFzQ0MsQ0FBRCxJQUFPQSxDQUFDLEtBQUtFLEVBQWxEO0FBREssS0FBcEI7QUFHQUosdUJBQW1CLENBQUNELGdCQUFnQixDQUFDRSxNQUFqQixDQUF5QkMsQ0FBRCxJQUFPQSxDQUFDLENBQUNFLEVBQUYsS0FBU0EsRUFBeEMsQ0FBRCxDQUFuQjtBQUNELEdBTEQ7O0FBT0EsU0FDRSxNQUFDLHlDQUFELENBQU0sSUFBTjtBQUFXLFFBQUksRUFBRWIsU0FBakI7QUFBNEIsU0FBSyxFQUFFQyxLQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3Q0FBRDtBQUFLLFVBQU0sRUFBRSxDQUFDLEVBQUQsRUFBSyxFQUFMLENBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0NBQUQ7QUFBSyxNQUFFLEVBQUVDLEdBQVQ7QUFBYyxNQUFFLEVBQUUsRUFBbEI7QUFBc0IsTUFBRSxFQUFFLEVBQTFCO0FBQThCLE1BQUUsRUFBRSxFQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3Q0FBRDtBQUFLLFVBQU0sRUFBRSxFQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdDQUFEO0FBQUssUUFBSSxFQUFFLEVBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQ0UsUUFBSSxFQUNGQyxXQUFXLEtBQUssWUFBaEIsR0FBK0IsYUFBL0IsR0FBK0MsWUFGbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtFLE1BQUMsMkNBQUQ7QUFDRSxZQUFRLEVBQ04seUJBQUE5QixJQUFJLENBQUM0QyxhQUFMLENBQW1CakIsU0FBbkIsK0VBQStCa0IsTUFBL0IsS0FBeUMsQ0FBekMsSUFDQWpDLElBQUksS0FBSyxPQURULEdBRUksSUFGSixHQUdJLEtBTFI7QUFPRSxZQUFRLEVBQUdxQyxHQUFELElBQ1JuQixXQUFXLEtBQUssWUFBaEIsR0FDSUUsY0FBYyxDQUFDaUIsR0FBRCxDQURsQixHQUVJZixhQUFhLENBQUNlLEdBQUQsQ0FWckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWFFLE1BQUMsTUFBRDtBQUFRLFNBQUssRUFBQyxNQUFkO0FBQXFCLFlBQVEsTUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWJGLHFCQWdCR3ZCLE9BQU8sQ0FDTFcsTUFERixDQUVJQyxDQUFEO0FBQUE7O0FBQUEsV0FBTyx5QkFBQXRDLElBQUksQ0FBQzRDLGFBQUwsQ0FBbUJqQixTQUFuQiwrRUFBK0JtQixPQUEvQixDQUF1Q1IsQ0FBQyxDQUFDRSxFQUF6QyxPQUFpRCxDQUFDLENBQXpEO0FBQUEsR0FGSCxDQWhCSCxvREFnQkcsZ0JBSUdVLElBSkgsQ0FJUSxDQUFDQyxDQUFELEVBQUlDLENBQUosS0FBVTtBQUNmLFVBQU1DLElBQUksR0FBR0YsQ0FBQyxDQUFDRyxTQUFmO0FBQUEsVUFDRUMsSUFBSSxHQUFHSCxDQUFDLENBQUNFLFNBRFgsQ0FEZSxDQUdmOztBQUNBLFFBQUlELElBQUksR0FBR0UsSUFBWCxFQUFpQixPQUFPLENBQUMsQ0FBUjtBQUNqQixRQUFJRixJQUFJLEdBQUdFLElBQVgsRUFBaUIsT0FBTyxDQUFQO0FBQ2pCLFdBQU8sQ0FBUDtBQUNELEdBWEYsRUFZRUMsR0FaRixDQVlPQyxJQUFELElBQ0gsTUFBQyxNQUFEO0FBQVEsT0FBRyxFQUFFQSxJQUFJLENBQUNqQixFQUFsQjtBQUFzQixTQUFLLEVBQUVpQixJQUFJLENBQUNqQixFQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dWLFdBQVcsS0FBSyxZQUFoQixHQUNJLEdBQUUyQixJQUFJLENBQUNILFNBQVUsSUFBR0csSUFBSSxDQUFDQyxRQUFTLEVBRHRDLEdBRUdELElBQUksQ0FBQ3ZELElBSFgsQ0FiSCxDQWhCSCxDQUxGLENBREYsQ0FERixFQTZDRSxNQUFDLHdDQUFEO0FBQUssUUFBSSxFQUFFLENBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsYUFBUyxFQUFDLDBCQURaO0FBRUUsV0FBTyxFQUFFLE1BQ1A0QixXQUFXLEtBQUssWUFBaEIsR0FDSVcsWUFBWSxDQUFDVixXQUFELEVBQWNDLGNBQWQsQ0FEaEIsR0FFSVMsWUFBWSxDQUFDUixVQUFELEVBQWFDLGFBQWIsQ0FMcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FSRixDQURGLENBN0NGLEVBeURHdEIsSUFBSSxLQUFLLE9BQVQsSUFDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJDQTFESixDQURGLENBREYsRUFnRUdjLE9BQU8sQ0FBQ21CLE1BQVIsR0FBaUIsQ0FBakIsSUFDQyxNQUFDLHdDQUFEO0FBQUssTUFBRSxFQUFFaEIsR0FBVDtBQUFjLE1BQUUsRUFBRSxFQUFsQjtBQUFzQixNQUFFLEVBQUUsRUFBMUI7QUFBOEIsTUFBRSxFQUFFLEVBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdDQUFEO0FBQUssVUFBTSxFQUFFLEVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHSCxPQUFPLENBQ0xXLE1BREYsQ0FDVUMsQ0FBRCxJQUFPdEMsSUFBSSxDQUFDNEMsYUFBTCxDQUFtQmpCLFNBQW5CLEVBQThCWSxRQUE5QixDQUF1Q0QsQ0FBQyxDQUFDRSxFQUF6QyxDQURoQixFQUVFZ0IsR0FGRixDQUVPQyxJQUFELElBQ0gsTUFBQyx3Q0FBRDtBQUFLLE1BQUUsRUFBRSxFQUFUO0FBQWEsTUFBRSxFQUFFLEVBQWpCO0FBQXFCLE9BQUcsRUFBRUEsSUFBSSxDQUFDakIsRUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssT0FBRyxFQUFFaUIsSUFBSSxDQUFDakIsRUFBZjtBQUFtQixhQUFTLEVBQUMsZUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsT0FBRyxFQUFFaUIsSUFBSSxDQUFDRSxLQURaO0FBRUUsT0FBRyxFQUNEN0IsV0FBVyxLQUFLLFlBQWhCLEdBQ0kyQixJQUFJLENBQUNILFNBRFQsR0FFSUcsSUFBSSxDQUFDdkQsSUFMYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQVdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRzRCLFdBQVcsS0FBSyxZQUFoQixHQUNJLEdBQUUyQixJQUFJLENBQUNILFNBQVUsSUFBR0csSUFBSSxDQUFDQyxRQUFTLEVBRHRDLEdBRUdELElBQUksQ0FBQ3ZELElBSFgsQ0FYRixFQWdCRTtBQUNFLFdBQU8sRUFBRSxNQUFNOEMsZUFBZSxDQUFDUyxJQUFJLENBQUNqQixFQUFOLENBRGhDO0FBRUUsUUFBSSxFQUFDLGNBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWhCRixDQURGLEVBc0JFLE1BQUMsNENBQUQ7QUFBUyxTQUFLLEVBQUU7QUFBRW9CLFlBQU0sRUFBRTtBQUFWLEtBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF0QkYsQ0FISCxDQURILENBREYsQ0FqRUosQ0FERixDQURGO0FBdUdELENBakpEOztBQW1KZXBDLDJFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEpBOztBQUVBLE1BQU1xQyxVQUFVLEdBQUcsQ0FBQztBQUNsQkMsSUFEa0I7QUFFbEJDLElBRmtCO0FBR2xCQyxJQUhrQjtBQUlsQkMsSUFKa0I7QUFLbEIvRCxNQUxrQjtBQU1sQjBCLE9BTmtCO0FBT2xCc0MsTUFQa0I7QUFRbEJDLE1BUmtCO0FBU2xCQyxRQVRrQjtBQVVsQkMsUUFWa0I7QUFXbEJyRSxNQVhrQjtBQVlsQnNFLFNBWmtCO0FBYWxCckI7QUFia0IsQ0FBRCxLQWNiO0FBQ0osU0FDRSxNQUFDLHdDQUFEO0FBQUssTUFBRSxFQUFFYSxFQUFUO0FBQWEsTUFBRSxFQUFFRyxFQUFqQjtBQUFxQixNQUFFLEVBQUVGLEVBQXpCO0FBQTZCLE1BQUUsRUFBRUMsRUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQVcsUUFBSSxFQUFFOUQsSUFBakI7QUFBdUIsU0FBSyxFQUFFMEIsS0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQVUsTUFBRSxFQUFFMUIsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywwQ0FBRCxDQUFPLEtBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMENBQUQ7QUFBTyxRQUFJLEVBQUUsRUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxTQUFLLEVBQUUsSUFEVDtBQUVFLE1BQUUsRUFBRyxTQUFRZ0UsSUFBSyxFQUZwQjtBQUdFLFFBQUksRUFBQyxPQUhQO0FBSUUsWUFBUSxFQUFFLE1BQU1JLE9BQU8sQ0FBQyxJQUFELENBSnpCO0FBS0UsV0FBTyxFQUFFckIsR0FBRyxHQUFHLElBQUgsR0FBVSxLQUx4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFRRTtBQUFPLFdBQU8sRUFBRyxTQUFRaUIsSUFBSyxFQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkYsRUFTRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUlFLE1BQUosQ0FURixDQURGLEVBWUU7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxNQUFFLEVBQUcsU0FBUUQsSUFBSyxFQURwQjtBQUVFLFFBQUksRUFBQyxPQUZQO0FBR0UsU0FBSyxFQUFFLEtBSFQ7QUFJRSxZQUFRLEVBQUUsTUFBTUcsT0FBTyxDQUFDLEtBQUQsQ0FKekI7QUFLRSxXQUFPLEVBQUVyQixHQUFHLEdBQUcsS0FBSCxHQUFXLElBTHpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQVFFO0FBQU8sV0FBTyxFQUFHLFNBQVFrQixJQUFLLEVBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSRixFQVNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSUUsTUFBSixDQVRGLENBWkYsQ0FERixDQURGLENBREYsQ0FERixDQURGLENBREY7QUFvQ0QsQ0FuREQ7O0FBcURlUix5RUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkRBO0FBQ0E7QUFFQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTTtBQUFFdkM7QUFBRixJQUFhQywyQ0FBbkI7O0FBRUEsTUFBTWdELFNBQVMsR0FBRyxDQUFDO0FBQ2pCM0QsTUFEaUI7QUFFakI0RCxPQUZpQjtBQUdqQnhFLE1BSGlCO0FBSWpCeUUsUUFKaUI7QUFLakJDLFNBTGlCO0FBTWpCQyxTQU5pQjtBQU9qQkMsWUFQaUI7QUFRakJDLFFBUmlCO0FBU2pCQyxXQVRpQjtBQVVqQkMsWUFWaUI7QUFXakJDLGVBWGlCO0FBWWpCQztBQVppQixDQUFELEtBYVo7QUFDSixRQUFNLENBQUM5RSxXQUFELEVBQWNDLGNBQWQsSUFBZ0NDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBQXRDO0FBQ0EsUUFBTSxDQUFDQyxhQUFELEVBQWdCQyxnQkFBaEIsSUFBb0NILDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBQTFDOztBQUVBLFFBQU00RSxVQUFVLEdBQUcsQ0FBQy9CLENBQUQsRUFBSUMsQ0FBSixLQUFVO0FBQzNCLFVBQU1DLElBQUksR0FBR0YsQ0FBQyxDQUFDakQsSUFBZjtBQUFBLFVBQ0VxRCxJQUFJLEdBQUdILENBQUMsQ0FBQ2xELElBRFg7QUFFQSxRQUFJbUQsSUFBSSxHQUFHRSxJQUFYLEVBQWlCLE9BQU8sQ0FBQyxDQUFSO0FBQ2pCLFFBQUlGLElBQUksR0FBR0UsSUFBWCxFQUFpQixPQUFPLENBQVA7QUFDakIsV0FBTyxDQUFQO0FBQ0QsR0FORDs7QUFRQSxRQUFNNEIsUUFBUSxHQUFHLE1BQU07QUFDckJDLFVBQU0sQ0FBQ0MsUUFBUCxDQUFnQixDQUFoQixFQUFtQixDQUFuQjtBQUNBeEUsZ0RBQU8sQ0FBQ3lFLEtBQVIsQ0FBYyx1QkFBZDtBQUNELEdBSEQ7O0FBS0EsUUFBTTdFLFFBQVEsR0FBRyxNQUFNO0FBQ3JCVCxRQUFJLENBQUNVLGNBQUwsQ0FBb0I7QUFBRTZFLFlBQU0sRUFBRTtBQUFWLEtBQXBCO0FBQ0FuRixrQkFBYyxDQUFDLElBQUQsQ0FBZDtBQUNBSSxvQkFBZ0IsQ0FBQyxLQUFELENBQWhCO0FBQ0QsR0FKRDs7QUFNQSxRQUFNRyxVQUFVLEdBQUcsTUFBTTtBQUN2QlgsUUFBSSxDQUFDVSxjQUFMLENBQW9CO0FBQUU2RSxZQUFNLEVBQUU7QUFBVixLQUFwQjtBQUNBbkYsa0JBQWMsQ0FBQyxLQUFELENBQWQ7QUFDQUksb0JBQWdCLENBQUMsSUFBRCxDQUFoQjtBQUNELEdBSkQ7O0FBTUEsU0FDRTtBQUFLLGFBQVMsRUFBQyx1QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsY0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksR0FBRUksSUFBSyxJQUFHQSxJQUFJLEtBQUssS0FBVCxJQUFrQixPQUFRLFVBQ3BDQSxJQUFJLEtBQUssTUFBVCxHQUFrQixHQUFsQixHQUF3QixFQUN6QixJQUFHQSxJQUFJLEtBQUssTUFBVCxHQUFrQjRELEtBQUssQ0FBQ2dCLEtBQXhCLEdBQWdDLEVBQUcsRUFIekMsQ0FERixFQU1FLE1BQUMseUNBQUQ7QUFDRSxVQUFNLEVBQUMsVUFEVDtBQUVFLHNCQUFrQixNQUZwQjtBQUdFLGtCQUFjLEVBQUVMLFFBSGxCO0FBSUUsWUFBUSxFQUFFVixNQUpaO0FBS0UsUUFBSSxFQUFFekUsSUFMUjtBQU1FLGlCQUFhLEVBQ1hZLElBQUksS0FBSyxLQUFULEdBQ0k7QUFDRTZFLGFBQU8sRUFBRSxFQURYO0FBRUVaLFlBQU0sRUFBRSxLQUZWO0FBR0VhLFlBQU0sRUFBRSxJQUhWO0FBSUVILFlBQU0sRUFBRSxFQUpWO0FBS0VJLG9CQUFjLEVBQUUsRUFMbEI7QUFNRUMsVUFBSSxFQUFFLEVBTlI7QUFPRUosV0FBSyxFQUFFLEVBUFQ7QUFRRUssZ0JBQVUsRUFBRSxFQVJkO0FBU0VDLGVBQVMsRUFBRSxFQVRiO0FBVUVDLGNBQVEsRUFBRSxFQVZaO0FBV0VDLFlBQU0sRUFBRSxFQVhWO0FBWUVDLG9CQUFjLEVBQUU7QUFabEIsS0FESixxQkFlU3pCLEtBZlQsQ0FQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBeUJFLE1BQUMsd0NBQUQ7QUFBSyxVQUFNLEVBQUUsQ0FBQyxFQUFELEVBQUssRUFBTCxDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdDQUFEO0FBQUssTUFBRSxFQUFFLEVBQVQ7QUFBYSxNQUFFLEVBQUUsRUFBakI7QUFBcUIsTUFBRSxFQUFFLEVBQXpCO0FBQTZCLE1BQUUsRUFBRSxFQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFDRSxTQUFLLEVBQUUsS0FEVDtBQUVFLFFBQUksRUFBQyxPQUZQO0FBR0UsU0FBSyxFQUFFLENBQ0w7QUFDRTBCLGNBQVEsRUFBRSxJQURaO0FBRUVyRixhQUFPLEVBQUU7QUFGWCxLQURLLEVBS0w7QUFBRXNGLFNBQUcsRUFBRTtBQUFQLEtBTEssQ0FIVDtBQVVFLFNBQUssRUFBQyxPQVZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FZRSxNQUFDLDBDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFaRixDQURGLENBREYsRUFpQkUsTUFBQyx3Q0FBRDtBQUFLLE1BQUUsRUFBRSxFQUFUO0FBQWEsTUFBRSxFQUFFLEVBQWpCO0FBQXFCLE1BQUUsRUFBRSxDQUF6QjtBQUE0QixNQUFFLEVBQUUsQ0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQ0UsUUFBSSxFQUFDLFlBRFA7QUFFRSxTQUFLLEVBQUMsWUFGUjtBQUdFLFNBQUssRUFBRSxDQUNMO0FBQ0VELGNBQVEsRUFBRSxJQURaO0FBRUVyRixhQUFPLEVBQUU7QUFGWCxLQURLLEVBS0w7QUFDRXNGLFNBQUcsRUFBRSxDQURQO0FBRUV2RixVQUFJLEVBQUUsT0FGUjtBQUdFQyxhQUFPLEVBQUU7QUFIWCxLQUxLLENBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWVFLE1BQUMsMkNBQUQ7QUFBUSxRQUFJLEVBQUMsVUFBYjtBQUF3QixjQUFVLE1BQWxDO0FBQW1DLGVBQVcsRUFBRSxDQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0d1RiwyREFESCxhQUNHQSwyREFESCx1QkFDR0EsMkRBQVUsQ0FBRWxELElBQVosQ0FBaUIsQ0FBQ0MsQ0FBRCxFQUFJQyxDQUFKLEtBQVU7QUFDMUIsVUFBTUMsSUFBSSxHQUFHRixDQUFDLENBQUNqRCxJQUFmO0FBQUEsVUFDRXFELElBQUksR0FBR0gsQ0FBQyxDQUFDbEQsSUFEWCxDQUQwQixDQUcxQjs7QUFDQSxRQUFJbUQsSUFBSSxHQUFHRSxJQUFYLEVBQWlCLE9BQU8sQ0FBQyxDQUFSO0FBQ2pCLFFBQUlGLElBQUksR0FBR0UsSUFBWCxFQUFpQixPQUFPLENBQVA7QUFDakIsV0FBTyxDQUFQO0FBQ0QsR0FQQSxFQU9FQyxHQVBGLENBT082QyxHQUFELElBQ0wsTUFBQyxNQUFEO0FBQVEsU0FBSyxFQUFFQSxHQUFHLENBQUNyRixLQUFuQjtBQUEwQixPQUFHLEVBQUVxRixHQUFHLENBQUNyRixLQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dxRixHQUFHLENBQUNuRyxJQURQLENBUkQsQ0FESCxDQWZGLENBREYsQ0FqQkYsQ0F6QkYsRUEyRUUsTUFBQyx3Q0FBRDtBQUFLLFVBQU0sRUFBRSxDQUFDLEVBQUQsRUFBSyxFQUFMLENBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0NBQUQ7QUFBSyxNQUFFLEVBQUUsQ0FBVDtBQUFZLE1BQUUsRUFBRSxFQUFoQjtBQUFvQixNQUFFLEVBQUUsRUFBeEI7QUFBNEIsTUFBRSxFQUFFLENBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHlDQUFELENBQU0sSUFBTjtBQUNFLFFBQUksRUFBQyxVQURQO0FBRUUsU0FBSyxFQUFDLFVBRlI7QUFHRSxTQUFLLEVBQUUsQ0FDTDtBQUNFZ0csY0FBUSxFQUFFLElBRFo7QUFFRXJGLGFBQU8sRUFBRTtBQUZYLEtBREssQ0FIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBVUUsTUFBQywyQ0FBRDtBQUNFLGNBQVUsTUFEWjtBQUVFLGNBQVUsRUFBRXFFLFVBRmQ7QUFHRSxnQkFBWSxFQUFFLENBQUNvQixLQUFELEVBQVFDLE1BQVIsS0FDWkEsTUFBTSxDQUFDQyxRQUFQLENBQ0dDLFdBREgsR0FFRzNELE9BRkgsQ0FFV3dELEtBQUssQ0FBQ0csV0FBTixFQUZYLEtBRW1DLENBTnZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FTR0MsMERBVEgsYUFTR0EsMERBVEgsdUJBU0dBLDBEQUFTLENBQUVsRCxHQUFYLENBQWdCbUQsSUFBRCxJQUNkLE1BQUMsTUFBRDtBQUFRLFNBQUssRUFBRUEsSUFBSSxDQUFDM0YsS0FBcEI7QUFBMkIsT0FBRyxFQUFFMkYsSUFBSSxDQUFDM0YsS0FBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHMkYsSUFBSSxDQUFDekcsSUFEUixDQURELENBVEgsQ0FWRixDQURGLENBREYsRUE2QkUsTUFBQyx3Q0FBRDtBQUFLLE1BQUUsRUFBRSxDQUFUO0FBQVksTUFBRSxFQUFFLEVBQWhCO0FBQW9CLE1BQUUsRUFBRSxFQUF4QjtBQUE0QixNQUFFLEVBQUUsQ0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQ0UsUUFBSSxFQUFDLFFBRFA7QUFFRSxTQUFLLEVBQUMsUUFGUjtBQUdFLFNBQUssRUFBRSxDQUNMO0FBQ0VnRyxjQUFRLEVBQUUsSUFEWjtBQUVFckYsYUFBTyxFQUFFO0FBRlgsS0FESyxDQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FVRSxNQUFDLDJDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRytGLHVEQUFNLENBQUNwRCxHQUFQLENBQVlxRCxJQUFELElBQ1YsTUFBQyxNQUFEO0FBQVEsU0FBSyxFQUFFQSxJQUFJLENBQUM3RixLQUFwQjtBQUEyQixPQUFHLEVBQUU2RixJQUFJLENBQUM3RixLQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0c2RixJQUFJLENBQUMzRyxJQURSLENBREQsQ0FESCxDQVZGLENBREYsQ0E3QkYsRUFpREUsTUFBQyx3Q0FBRDtBQUFLLE1BQUUsRUFBRSxDQUFUO0FBQVksTUFBRSxFQUFFLEVBQWhCO0FBQW9CLE1BQUUsRUFBRSxFQUF4QjtBQUE0QixNQUFFLEVBQUUsQ0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQ0UsUUFBSSxFQUFDLFdBRFA7QUFFRSxTQUFLLEVBQUMsV0FGUjtBQUdFLFNBQUssRUFBRSxDQUNMO0FBQ0VnRyxjQUFRLEVBQUUsSUFEWjtBQUVFckYsYUFBTyxFQUFFO0FBRlgsS0FESyxDQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FVRSxNQUFDLDJDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR2lHLDJEQUFVLENBQUN0RCxHQUFYLENBQWdCdUQsSUFBRCxJQUNkLE1BQUMsTUFBRDtBQUFRLFNBQUssRUFBRUEsSUFBSSxDQUFDL0YsS0FBcEI7QUFBMkIsT0FBRyxFQUFFK0YsSUFBSSxDQUFDL0YsS0FBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHK0YsSUFBSSxDQUFDN0csSUFEUixDQURELENBREgsQ0FWRixDQURGLENBakRGLENBM0VGLEVBaUpFLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQ0UsU0FBSyxFQUFDLFNBRFI7QUFFRSxRQUFJLEVBQUMsU0FGUDtBQUdFLFNBQUssRUFBRSxDQUNMO0FBQ0VpRyxTQUFHLEVBQUUsR0FEUDtBQUVFdEYsYUFBTyxFQUFFO0FBRlgsS0FESyxDQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FVRSxNQUFDLDBDQUFELENBQU8sUUFBUDtBQUNFLFlBQVEsRUFBRTtBQUFFbUcsYUFBTyxFQUFFO0FBQVgsS0FEWjtBQUVFLGFBQVMsRUFBRSxJQUZiO0FBR0UsYUFBUyxFQUFFLEdBSGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZGLENBakpGLEVBaUtFLE1BQUMsd0NBQUQ7QUFBSyxXQUFPLEVBQUMsZUFBYjtBQUE2QixVQUFNLEVBQUUsQ0FBQyxFQUFELEVBQUssRUFBTCxDQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxxRUFBRDtBQUNFLE1BQUUsRUFBRSxDQUROO0FBRUUsTUFBRSxFQUFFLEVBRk47QUFHRSxNQUFFLEVBQUUsRUFITjtBQUlFLE1BQUUsRUFBRSxDQUpOO0FBS0UsUUFBSSxFQUFDLFFBTFA7QUFNRSxTQUFLLEVBQUMsWUFOUjtBQU9FLFdBQU8sRUFBRWhDLGFBUFg7QUFRRSxRQUFJLEVBQUMsR0FSUDtBQVNFLFFBQUksRUFBQyxHQVRQO0FBVUUsVUFBTSxFQUFDLFFBVlQ7QUFXRSxVQUFNLEVBQUMsU0FYVDtBQVlFLE9BQUcsRUFBRUQsVUFaUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFlRSxNQUFDLHFFQUFEO0FBQ0UsTUFBRSxFQUFFLENBRE47QUFFRSxNQUFFLEVBQUUsRUFGTjtBQUdFLE1BQUUsRUFBRSxFQUhOO0FBSUUsTUFBRSxFQUFFLENBSk47QUFLRSxPQUFHLEVBQUVGLE1BTFA7QUFNRSxXQUFPLEVBQUVDLFNBTlg7QUFPRSxRQUFJLEVBQUMsUUFQUDtBQVFFLFNBQUssRUFBQyxrQkFSUjtBQVNFLFFBQUksRUFBQyxHQVRQO0FBVUUsUUFBSSxFQUFDLEdBVlA7QUFXRSxVQUFNLEVBQUMsS0FYVDtBQVlFLFVBQU0sRUFBQyxJQVpUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFmRixFQTZCRSxNQUFDLHdDQUFEO0FBQUssTUFBRSxFQUFFLENBQVQ7QUFBWSxNQUFFLEVBQUUsRUFBaEI7QUFBb0IsTUFBRSxFQUFFLEVBQXhCO0FBQTRCLE1BQUUsRUFBRSxFQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw4REFBRDtBQUFNLFFBQUksRUFBRTlFLElBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBN0JGLENBaktGLEVBa01FLE1BQUMsNENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWxNRixFQW1NRSxNQUFDLHFEQUFEO0FBQ0UsUUFBSSxFQUFFd0UsS0FBSyxJQUFJQSxLQUFLLENBQUNtQixjQUR2QjtBQUVFLFdBQU8sRUFBRWYsVUFGWDtBQUdFLFFBQUksRUFBRTVFLElBSFI7QUFJRSxhQUFTLEVBQUMsZ0JBSlo7QUFLRSxTQUFLLEVBQUMsaUJBTFI7QUFNRSxRQUFJLEVBQUMsT0FOUDtBQU9FLE9BQUcsRUFBRSxFQVBQO0FBUUUsZUFBVyxFQUFDLFlBUmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQW5NRixFQTZNRSxNQUFDLDRDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUE3TUYsRUE4TUUsTUFBQyxpREFBRDtBQUFVLFFBQUksRUFBQyxRQUFmO0FBQXdCLFFBQUksRUFBRUEsSUFBOUI7QUFBb0MsYUFBUyxFQUFFd0UsS0FBRixhQUFFQSxLQUFGLHVCQUFFQSxLQUFLLENBQUVlLE1BQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUE5TUYsRUErTUUsTUFBQyw0Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBL01GLEVBZ05HM0UsSUFBSSxLQUFLLEtBQVQsR0FDQzhELE9BQU8sSUFBSUMsT0FBWCxHQUNFO0FBQVEsWUFBUSxNQUFoQjtBQUFpQixhQUFTLEVBQUMsVUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMseUNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsR0FLRTtBQUFRLFFBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FOSCxHQVFHTSxZQUFZLEdBQ2Q7QUFBUSxZQUFRLE1BQWhCO0FBQWlCLGFBQVMsRUFBQyxVQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx5Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FEYyxHQUtkO0FBQVEsUUFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTdOSixDQU5GLENBREYsQ0FERjtBQTJPRCxDQXJSRDs7QUF1UmVWLHdFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4U0E7QUFDQTs7QUFFQSxNQUFNMEMsSUFBSSxHQUFHLENBQUM7QUFBRWpIO0FBQUYsQ0FBRCxLQUFjO0FBQUE7O0FBQ3pCLFFBQU1rSCxXQUFXLEdBQUc3Ryw0Q0FBSyxDQUFDOEcsTUFBTixFQUFwQjtBQUNBLFFBQU1DLGVBQWUsR0FBRy9HLDRDQUFLLENBQUM4RyxNQUFOLEVBQXhCO0FBQ0EsUUFBTSxDQUFDRSxZQUFELEVBQWVDLGVBQWYsSUFBa0NqSCw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsS0FBZixDQUF4QztBQUNBLFFBQU0sQ0FBQ2lILFVBQUQsRUFBYUMsYUFBYixJQUE4Qm5ILDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxFQUFmLENBQXBDO0FBQ0EsUUFBTSxDQUFDbUgsY0FBRCxFQUFpQkMsaUJBQWpCLElBQXNDckgsNENBQUssQ0FBQ0MsUUFBTixDQUFlLENBQUMsQ0FBaEIsQ0FBNUM7QUFDQSxRQUFNLENBQUNxSCxjQUFELEVBQWlCQyxpQkFBakIsSUFBc0N2SCw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsRUFBZixDQUE1Qzs7QUFFQSxRQUFNdUgsV0FBVyxHQUFJQyxVQUFELElBQWdCO0FBQUE7O0FBQ2xDOUgsUUFBSSxDQUFDVSxjQUFMLENBQW9CO0FBQ2xCa0YsVUFBSSx5QkFBRTVGLElBQUksQ0FBQzRDLGFBQUwsQ0FBbUIsTUFBbkIsQ0FBRix3REFBRSxvQkFBNEJQLE1BQTVCLENBQW9DMEYsR0FBRCxJQUFTQSxHQUFHLEtBQUtELFVBQXBEO0FBRFksS0FBcEI7QUFHRCxHQUpEOztBQU1BLFFBQU1FLFNBQVMsR0FBRyxNQUFNO0FBQUE7O0FBQ3RCVixtQkFBZSxDQUFDLElBQUQsQ0FBZjtBQUNBSixlQUFXLFNBQVgsSUFBQUEsV0FBVyxXQUFYLG9DQUFBQSxXQUFXLENBQUV4RSxPQUFiLDhFQUFzQnVGLEtBQXRCLEdBRnNCLENBR3RCO0FBQ0E7QUFDRCxHQUxEOztBQU9BLFFBQU1DLGlCQUFpQixHQUFJQyxDQUFELElBQU9YLGFBQWEsQ0FBQ1csQ0FBQyxDQUFDQyxNQUFGLENBQVNwSCxLQUFWLENBQTlDOztBQUVBLFFBQU1xSCxrQkFBa0IsR0FBRyxNQUFNO0FBQUE7O0FBQy9CLFFBQUlDLE9BQU8sR0FBR3RJLElBQUksQ0FBQzRDLGFBQUwsQ0FBbUIsTUFBbkIsQ0FBZDs7QUFDQSxRQUFJMkUsVUFBVSxJQUFJLHlCQUFBdkgsSUFBSSxDQUFDNEMsYUFBTCxDQUFtQixNQUFuQiwrRUFBNEJFLE9BQTVCLENBQW9DeUUsVUFBcEMsT0FBb0QsQ0FBQyxDQUF2RSxFQUEwRTtBQUN4RWUsYUFBTyxHQUFHLENBQUMsR0FBR0EsT0FBSixFQUFhZixVQUFiLENBQVY7QUFDRDs7QUFDRHZILFFBQUksQ0FBQ1UsY0FBTCxDQUFvQjtBQUFFa0YsVUFBSSxFQUFFMEM7QUFBUixLQUFwQjtBQUNBZCxpQkFBYSxDQUFDLEVBQUQsQ0FBYjtBQUNBRixtQkFBZSxDQUFDLEtBQUQsQ0FBZjtBQUNELEdBUkQ7O0FBVUEsUUFBTWlCLHFCQUFxQixHQUFJSixDQUFELElBQU9QLGlCQUFpQixDQUFDTyxDQUFDLENBQUNDLE1BQUYsQ0FBU3BILEtBQVYsQ0FBdEQ7O0FBRUEsUUFBTXdILHNCQUFzQixHQUFHLE1BQU07QUFDbkMsVUFBTUYsT0FBTyxHQUFHLENBQUMsR0FBR3RJLElBQUksQ0FBQzRDLGFBQUwsQ0FBbUIsTUFBbkIsQ0FBSixDQUFoQjtBQUNBMEYsV0FBTyxDQUFDYixjQUFELENBQVAsR0FBMEJFLGNBQTFCO0FBQ0EzSCxRQUFJLENBQUNVLGNBQUwsQ0FBb0I7QUFBRWtGLFVBQUksRUFBRTBDO0FBQVIsS0FBcEI7QUFDQVoscUJBQWlCLENBQUMsQ0FBQyxDQUFGLENBQWpCO0FBQ0FFLHFCQUFpQixDQUFDLEVBQUQsQ0FBakI7QUFDRCxHQU5EOztBQVFBLFFBQU1hLFFBQVEsR0FBSU4sQ0FBRCxJQUFPO0FBQ3RCTyxXQUFPLENBQUNDLEdBQVIsQ0FBWVIsQ0FBQyxDQUFDUyxHQUFkO0FBQ0QsR0FGRDs7QUFJQSxTQUNFLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQVcsU0FBSyxFQUFDLE1BQWpCO0FBQXdCLFFBQUksRUFBQyxNQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUNHNUksSUFBSSxDQUFDNEMsYUFBTCxDQUFtQixNQUFuQixDQURILHlEQUNHLHFCQUE0QlksR0FBNUIsQ0FBZ0MsQ0FBQ3VFLEdBQUQsRUFBTWMsQ0FBTixLQUFZO0FBQzNDLFFBQUlwQixjQUFjLEtBQUtvQixDQUF2QixFQUEwQjtBQUN4QixhQUNFO0FBQ0UsV0FBRyxFQUFFQSxDQURQO0FBRUUsZ0JBQVEsRUFBRU4scUJBRlo7QUFHRSxjQUFNLEVBQUVDLHNCQUhWO0FBSUUsb0JBQVksRUFBRUEsc0JBSmhCO0FBS0UsYUFBSyxFQUFFYixjQUxUO0FBTUUsV0FBRyxFQUFFUCxlQU5QO0FBT0UsaUJBQVMsRUFBQyxZQVBaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERjtBQVdEOztBQUNELFVBQU0wQixTQUFTLEdBQUdmLEdBQUcsQ0FBQ2xGLE1BQUosR0FBYSxFQUEvQjs7QUFDQSxVQUFNa0csT0FBTyxHQUNYLE1BQUMsd0NBQUQ7QUFDRSxhQUFPLEVBQUUsTUFBTWxCLFdBQVcsQ0FBQ0UsR0FBRCxDQUQ1QjtBQUVFLGNBQVEsRUFBRSxJQUZaO0FBR0UsU0FBRyxFQUFFQSxHQUhQO0FBSUUsZUFBUyxFQUFDLFVBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQU1FO0FBQ0UsbUJBQWEsRUFBR0ksQ0FBRCxJQUFPO0FBQ3BCLFlBQUlVLENBQUMsS0FBSyxDQUFWLEVBQWE7QUFDWG5CLDJCQUFpQixDQUFDbUIsQ0FBRCxDQUFqQjtBQUNBakIsMkJBQWlCLENBQUNHLEdBQUQsQ0FBakI7QUFDQVgseUJBQWUsQ0FBQ2EsS0FBaEI7QUFDQUUsV0FBQyxDQUFDYSxjQUFGO0FBQ0Q7QUFDRixPQVJIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FVR0YsU0FBUyxHQUFJLElBQUdmLEdBQUcsQ0FBQ2tCLEtBQUosQ0FBVSxDQUFWLEVBQWEsRUFBYixDQUFpQixLQUF4QixHQUFnQyxJQUFHbEIsR0FBSSxFQVZuRCxDQU5GLENBREY7O0FBcUJBLFdBQU9lLFNBQVMsR0FDZCxNQUFDLDRDQUFEO0FBQVMsV0FBSyxFQUFFZixHQUFoQjtBQUFxQixTQUFHLEVBQUVBLEdBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR2dCLE9BREgsQ0FEYyxHQUtkQSxPQUxGO0FBT0QsR0EzQ0EsQ0FESCxFQTZDRzFCLFlBQVksSUFDWDtBQUNFLFlBQVEsRUFBRWEsaUJBRFo7QUFFRSxVQUFNLEVBQUVHLGtCQUZWO0FBR0UsYUFBUyxFQUFHRixDQUFELElBQU87QUFDaEIsVUFBSUEsQ0FBQyxDQUFDUyxHQUFGLEtBQVUsT0FBZCxFQUF1QjtBQUNyQlAsMEJBQWtCO0FBQ25CO0FBQ0YsS0FQSDtBQVFFLFNBQUssRUFBRWQsVUFSVDtBQVNFLFFBQUksRUFBQyxNQVRQO0FBVUUsT0FBRyxFQUFFTCxXQVZQO0FBV0UsYUFBUyxFQUFDLFdBWFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTlDSixFQTRERyxDQUFDRyxZQUFELElBQ0MsTUFBQyx3Q0FBRDtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQStCLFdBQU8sRUFBRVcsU0FBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLGFBN0RKLENBREY7QUFvRUQsQ0FuSEQ7O0FBcUhlZixtRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEhBO0FBQ0E7O0FBRUEsU0FBU2lDLFNBQVQsQ0FBbUJDLEdBQW5CLEVBQXdCQyxRQUF4QixFQUFrQztBQUNoQyxRQUFNQyxNQUFNLEdBQUcsSUFBSUMsVUFBSixFQUFmO0FBQ0FELFFBQU0sQ0FBQ0UsZ0JBQVAsQ0FBd0IsTUFBeEIsRUFBZ0MsTUFBTUgsUUFBUSxDQUFDQyxNQUFNLENBQUNHLE1BQVIsQ0FBOUM7QUFDQUgsUUFBTSxDQUFDSSxhQUFQLENBQXFCTixHQUFyQjtBQUNEOztBQUVELFNBQVNPLFlBQVQsQ0FBc0JDLElBQXRCLEVBQTRCO0FBQzFCLFFBQU1DLFVBQVUsR0FBR0QsSUFBSSxDQUFDL0ksSUFBTCxLQUFjLFlBQWQsSUFBOEIrSSxJQUFJLENBQUMvSSxJQUFMLEtBQWMsV0FBL0Q7O0FBQ0EsTUFBSSxDQUFDZ0osVUFBTCxFQUFpQjtBQUNmL0ksZ0RBQU8sQ0FBQ3lFLEtBQVIsQ0FBYyxtQ0FBZDtBQUNEOztBQUNELFFBQU11RSxNQUFNLEdBQUdGLElBQUksQ0FBQ0csSUFBTCxHQUFZLElBQVosR0FBbUIsSUFBbkIsR0FBMEIsQ0FBekM7O0FBQ0EsTUFBSSxDQUFDRCxNQUFMLEVBQWE7QUFDWGhKLGdEQUFPLENBQUN5RSxLQUFSLENBQWMsOEJBQWQ7QUFDRDs7QUFDRCxTQUFPc0UsVUFBVSxJQUFJQyxNQUFyQjtBQUNEOztBQUVELE1BQU1FLFdBQVcsR0FBRyxDQUFDO0FBQUUvSixNQUFGO0FBQVEyRCxPQUFSO0FBQWV6RDtBQUFmLENBQUQsS0FBMkI7QUFDN0MsUUFBTSxDQUFDd0UsT0FBRCxFQUFVc0YsVUFBVixJQUF3QjNKLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBQTlCO0FBQ0EsUUFBTSxDQUFDMkosUUFBRCxFQUFXQyxXQUFYLElBQTBCN0osNENBQUssQ0FBQ0MsUUFBTixDQUFlcUQsS0FBSyxHQUFHQSxLQUFILEdBQVcsRUFBL0IsQ0FBaEM7O0FBRUEsUUFBTXdHLFlBQVksR0FBSUMsSUFBRCxJQUFVO0FBQzdCLFFBQUlBLElBQUksQ0FBQ1QsSUFBTCxDQUFVM0QsTUFBVixLQUFxQixXQUF6QixFQUFzQztBQUNwQ2dFLGdCQUFVLENBQUMsSUFBRCxDQUFWO0FBQ0E7QUFDRDs7QUFDRCxRQUFJSSxJQUFJLENBQUNULElBQUwsQ0FBVTNELE1BQVYsS0FBcUIsTUFBekIsRUFBaUM7QUFDL0JoRyxVQUFJLENBQUNVLGNBQUwsQ0FBb0I7QUFBRSxTQUFDUixJQUFELEdBQVFrSyxJQUFJLENBQUNULElBQUwsQ0FBVVU7QUFBcEIsT0FBcEIsRUFEK0IsQ0FFL0I7O0FBQ0FuQixlQUFTLENBQUNrQixJQUFJLENBQUNULElBQUwsQ0FBVVUsYUFBWCxFQUEyQkosUUFBRCxJQUFjO0FBQy9DRCxrQkFBVSxDQUFDLEtBQUQsQ0FBVjtBQUNBRSxtQkFBVyxDQUFDRCxRQUFELENBQVg7QUFDRCxPQUhRLENBQVQ7QUFJRDtBQUNGLEdBYkQ7O0FBZUEsUUFBTUssWUFBWSxHQUNoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0c1RixPQUFPLEdBQUcsTUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQUgsR0FBeUIsTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRG5DLEVBRUU7QUFBSyxTQUFLLEVBQUU7QUFBRTZGLGVBQVMsRUFBRTtBQUFiLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLENBREY7O0FBTUEsU0FDRSxtRUFDRSxNQUFDLHlDQUFELENBQU0sSUFBTjtBQUFXLFFBQUksRUFBRXJLLElBQWpCO0FBQXVCLFNBQUssRUFBQyxnQkFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMkNBQUQ7QUFDRSxrQkFBYyxFQUFFO0FBQ2RzSyxvQkFBYyxFQUFFLElBREY7QUFFZEMsZ0JBQVUsRUFBRSxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRSxLQURsQjtBQUtFLFlBQVEsRUFBQyxjQUxYO0FBTUUsYUFBUyxFQUFDLGdCQU5aO0FBT0Usa0JBQWMsRUFBRSxJQVBsQjtBQVFFLGdCQUFZLEVBQUVmLFlBUmhCO0FBU0UsWUFBUSxFQUFFUyxZQVRaO0FBVUUsWUFBUSxFQUFFLENBVlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVlHRixRQUFRLEdBQ1A7QUFDRSxPQUFHLEVBQUVBLFFBRFA7QUFFRSxPQUFHLEVBQUMsT0FGTjtBQUdFLFNBQUssRUFBRTtBQUFFUyxXQUFLLEVBQUUsTUFBVDtBQUFpQkMsWUFBTSxFQUFFLE1BQXpCO0FBQWlDQyxlQUFTLEVBQUU7QUFBNUMsS0FIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRE8sR0FPUE4sWUFuQkosQ0FERixDQURGLEVBeUJFLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQ0UsU0FBSyxFQUFDLGlCQURSO0FBRUUsUUFBSSxFQUFDLGdCQUZQO0FBR0UsU0FBSyxFQUFFLENBQ0w7QUFDRXBFLGNBQVEsRUFBRWxHLElBQUksQ0FBQzRDLGFBQUwsQ0FBbUIxQyxJQUFuQixJQUEyQixJQUEzQixHQUFrQyxLQUQ5QztBQUVFVyxhQUFPLEVBQUU7QUFGWCxLQURLLENBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVVFLE1BQUMsMENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZGLENBekJGLENBREY7QUF3Q0QsQ0FqRUQ7O0FBbUVla0osMEVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTtBQUNBO0FBRUEsTUFBTWMsV0FBVyxnQkFBR0MsMkRBQWEsRUFBakM7QUFFTyxTQUFTQyxXQUFULENBQXFCO0FBQUV2RTtBQUFGLENBQXJCLEVBQW1DO0FBQ3hDLFFBQU13RSxJQUFJLEdBQUdDLGNBQWMsRUFBM0I7QUFDQSxTQUFPLE1BQUMsV0FBRCxDQUFhLFFBQWI7QUFBc0IsU0FBSyxFQUFFRCxJQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQW9DeEUsUUFBcEMsQ0FBUDtBQUNEO0FBRU0sTUFBTTBFLE9BQU8sR0FBRyxNQUFNO0FBQzNCLFNBQU9DLHdEQUFVLENBQUNOLFdBQUQsQ0FBakI7QUFDRCxDQUZNOztBQUlQLFNBQVNJLGNBQVQsR0FBMEI7QUFDeEIsUUFBTTtBQUFBLE9BQUNHLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCL0ssc0RBQVEsQ0FBQyxJQUFELENBQWhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNnTCxTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUE0QmpMLHNEQUFRLENBQUMsSUFBRCxDQUExQyxDQUZ3QixDQUl4QjtBQUNBOztBQUNBLFFBQU1rTCxNQUFNLEdBQUcsQ0FBQ0MsS0FBRCxFQUFRQyxRQUFSLEtBQXFCO0FBQ2xDLFdBQU9WLG9EQUFJLENBQUNXLDBCQUFMLENBQWdDRixLQUFoQyxFQUF1Q0MsUUFBdkMsRUFBaURFLElBQWpELENBQXVEQyxRQUFELElBQWM7QUFDekVSLGFBQU8sQ0FBQ1EsUUFBUSxDQUFDVCxJQUFWLENBQVA7QUFDQSxhQUFPUyxRQUFRLENBQUNULElBQWhCO0FBQ0QsS0FITSxDQUFQO0FBSUQsR0FMRDs7QUFPQSxRQUFNVSxNQUFNLEdBQUcsQ0FBQ0wsS0FBRCxFQUFRQyxRQUFSLEVBQWtCSyxRQUFsQixLQUErQjtBQUM1QyxXQUFPZixvREFBSSxDQUNSZ0IsOEJBREksQ0FDMkJQLEtBRDNCLEVBQ2tDQyxRQURsQyxFQUVKRSxJQUZJLENBRUVDLFFBQUQsSUFBYztBQUNsQlIsYUFBTyxDQUFDUSxRQUFRLENBQUNULElBQVYsQ0FBUDtBQUNBYSx3REFBRSxDQUFDQyxVQUFILENBQWMsT0FBZCxFQUF1QkMsR0FBdkIsQ0FBMkI7QUFDekJDLGNBQU0sRUFBRSxFQURpQjtBQUV6QkMsaUJBQVMsRUFBRSxFQUZjO0FBR3pCQyxpQkFBUyxFQUFFQyxtREFBUSxDQUFDQyxTQUFULENBQW1CQyxVQUFuQixDQUE4QkMsZUFBOUIsRUFIYztBQUl6QkMsaUJBQVMsRUFBRSxLQUpjO0FBS3pCQyxnQkFBUSxFQUFFLEVBTGU7QUFNekJDLGlCQUFTLEVBQUUsRUFOYztBQU96QkMsZUFBTyxFQUFFLEVBUGdCO0FBUXpCQyxrQkFBVSxFQUFFLEVBUmE7QUFTekJDLGtCQUFVLEVBQUUsRUFUYTtBQVV6QmpCLGdCQUFRLEVBQUVBLFFBVmU7QUFXekJwSSxhQUFLLEVBQUU7QUFYa0IsT0FBM0I7QUFhQSxhQUFPa0ksUUFBUSxDQUFDVCxJQUFoQjtBQUNELEtBbEJJLENBQVA7QUFtQkQsR0FwQkQ7O0FBc0JBLFFBQU02QixPQUFPLEdBQUcsTUFBTTtBQUNwQixXQUFPakMsb0RBQUksQ0FBQ2tDLE9BQUwsR0FBZXRCLElBQWYsQ0FBb0IsTUFBTTtBQUMvQlAsYUFBTyxDQUFDLEtBQUQsQ0FBUDtBQUNELEtBRk0sQ0FBUDtBQUdELEdBSkQ7O0FBTUEsUUFBTThCLHNCQUFzQixHQUFJMUIsS0FBRCxJQUFXO0FBQ3hDLFdBQU9ULG9EQUFJLENBQUNtQyxzQkFBTCxDQUE0QjFCLEtBQTVCLEVBQW1DRyxJQUFuQyxDQUF3QyxNQUFNO0FBQ25ELGFBQU8sSUFBUDtBQUNELEtBRk0sQ0FBUDtBQUdELEdBSkQ7O0FBTUEsUUFBTXdCLG9CQUFvQixHQUFHLENBQUNDLElBQUQsRUFBTzNCLFFBQVAsS0FBb0I7QUFDL0MsV0FBT1Ysb0RBQUksQ0FBQ29DLG9CQUFMLENBQTBCQyxJQUExQixFQUFnQzNCLFFBQWhDLEVBQTBDRSxJQUExQyxDQUErQyxNQUFNO0FBQzFELGFBQU8sSUFBUDtBQUNELEtBRk0sQ0FBUDtBQUdELEdBSkQ7O0FBTUEwQix5REFBUyxDQUFDLE1BQU07QUFDZCxVQUFNQyxXQUFXLEdBQUd2QyxvREFBSSxDQUFDd0Msa0JBQUwsQ0FBeUJwQyxJQUFELElBQVU7QUFDcEQsVUFBSUEsSUFBSixFQUFVO0FBQ1JDLGVBQU8sQ0FBQ0QsSUFBRCxDQUFQOztBQUNBLFlBQUlBLElBQUksQ0FBQ3FDLEdBQVQsRUFBYztBQUNaLGNBQUkxQixRQUFRLEdBQUcsRUFBZjtBQUNBUixzQkFBWSxDQUFDLEtBQUQsQ0FBWjtBQUNBVSw0REFBRSxDQUFDQyxVQUFILENBQWMsT0FBZCxFQUNHd0IsR0FESCxDQUNPdEMsSUFBSSxDQUFDcUMsR0FEWixFQUVHRSxVQUZILENBRWVELEdBQUQsSUFBUztBQUNuQjNCLG9CQUFRLEdBQUcyQixHQUFHLENBQUNFLElBQUosR0FBVzdCLFFBQXRCO0FBQ0FWLG1CQUFPLGlDQUFNRCxJQUFOO0FBQVlXO0FBQVosZUFBUDtBQUNELFdBTEg7QUFNRDtBQUNGLE9BWkQsTUFZTztBQUNMVixlQUFPLENBQUMsS0FBRCxDQUFQO0FBQ0FFLG9CQUFZLENBQUMsS0FBRCxDQUFaO0FBQ0Q7QUFDRixLQWpCbUIsQ0FBcEIsQ0FEYyxDQW9CZDs7QUFDQSxXQUFPLE1BQU1nQyxXQUFXLEVBQXhCO0FBQ0QsR0F0QlEsRUFzQk4sRUF0Qk0sQ0FBVCxDQXJEd0IsQ0E2RXhCOztBQUNBLFNBQU87QUFDTGpDLGFBREs7QUFFTEYsUUFGSztBQUdMSSxVQUhLO0FBSUxNLFVBSks7QUFLTG1CLFdBTEs7QUFNTEUsMEJBTks7QUFPTEM7QUFQSyxHQUFQO0FBU0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEdEO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtDQUdBOztBQUNBOztBQUVBLE1BQU1TLFNBQVMsR0FBSUMsS0FBRCxJQUFXO0FBQzNCLFFBQU05QyxJQUFJLEdBQUdFLGdFQUFPLEVBQXBCO0FBQ0EsUUFBTTZDLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxRQUFNO0FBQUV4SixTQUFGO0FBQVNFLFdBQVQ7QUFBa0JFLGNBQWxCO0FBQThCSyxnQkFBOUI7QUFBNENnSjtBQUE1QyxNQUE0REgsS0FBbEU7QUFDQSxRQUFNLENBQUM5TixJQUFELElBQVNrTyx5Q0FBSSxDQUFDQyxPQUFMLEVBQWY7QUFFQXpGLFNBQU8sQ0FBQ0MsR0FBUixDQUFZakUsT0FBWjtBQUVBLFFBQU0sQ0FBQ0csTUFBRCxFQUFTQyxTQUFULElBQXNCekUsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEtBQWYsQ0FBNUI7QUFDQSxRQUFNLENBQUN5RSxVQUFELEVBQWFDLGFBQWIsSUFBOEIzRSw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsSUFBZixDQUFwQztBQUVBRCw4Q0FBSyxDQUFDaU4sU0FBTixDQUFnQixNQUFNO0FBQ3BCLFFBQUl0QyxJQUFJLENBQUNJLElBQVQsRUFBZTtBQUNiMEMsV0FBSyxDQUFDTSxpQkFBTixDQUF3QnBELElBQUksQ0FBQ0ksSUFBTCxDQUFVcUMsR0FBbEM7QUFDRDtBQUNGLEdBSkQsRUFJRyxDQUFDekMsSUFBRCxDQUpIO0FBTUEzSyw4Q0FBSyxDQUFDaU4sU0FBTixDQUFnQixNQUFNO0FBQ3BCLFFBQUlTLE1BQU0sQ0FBQ00sS0FBUCxDQUFhN0wsRUFBakIsRUFBcUI7QUFDbkJzTCxXQUFLLENBQUNRLFFBQU4sQ0FBZVAsTUFBTSxDQUFDTSxLQUFQLENBQWE3TCxFQUE1QjtBQUNEO0FBQ0YsR0FKRCxFQUlHLENBQUN1TCxNQUFNLENBQUNNLEtBQVAsQ0FBYTdMLEVBQWQsQ0FKSDs7QUFNQSxRQUFNaUMsTUFBTSxHQUFJOEosTUFBRCxJQUFZO0FBQ3pCLFdBQU9BLE1BQU0sQ0FBQ3hNLFdBQWQ7QUFDQStMLFNBQUssQ0FBQ1UsU0FBTixDQUFnQkQsTUFBaEIsRUFBd0JSLE1BQU0sQ0FBQ00sS0FBUCxDQUFhN0wsRUFBckM7QUFDRCxHQUhEOztBQUtBLFNBQU8sQ0FBQ2tDLE9BQUQsR0FDTHVKLFdBQVcsSUFBSXpKLEtBQUssQ0FBQ2dCLEtBQXJCLEdBQ0V3RixJQUFJLENBQUNJLElBQUwsQ0FBVXFDLEdBQVYsS0FBa0JqSixLQUFLLENBQUNpSyxRQUF4QixHQUNFLE1BQUMsbUVBQUQ7QUFDRSxRQUFJLEVBQUMsTUFEUDtBQUVFLFVBQU0sRUFBRWhLLE1BRlY7QUFHRSxjQUFVLEVBQUVHLFVBSGQ7QUFJRSxXQUFPLEVBQUVGLE9BSlg7QUFLRSxRQUFJLEVBQUUxRSxJQUxSO0FBTUUsVUFBTSxFQUFFNkUsTUFOVjtBQU9FLGFBQVMsRUFBRUMsU0FQYjtBQVFFLGNBQVUsRUFBRUMsVUFSZDtBQVNFLGlCQUFhLEVBQUVDLGFBVGpCO0FBVUUsU0FBSyxFQUFFUixLQVZUO0FBV0UsZ0JBQVksRUFBRVMsWUFYaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEdBZUUsTUFBQywyQ0FBRDtBQUNFLFVBQU0sRUFBQyxLQURUO0FBRUUsU0FBSyxFQUFDLEtBRlI7QUFHRSxZQUFRLEVBQUMsb0RBSFg7QUFJRSxTQUFLLEVBQUUsTUFBQywyQ0FBRDtBQUFRLFVBQUksRUFBQyxTQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWhCSixHQXdCRSxNQUFDLDJDQUFEO0FBQ0UsVUFBTSxFQUFDLEtBRFQ7QUFFRSxTQUFLLEVBQUMsS0FGUjtBQUdFLFlBQVEsRUFBQyw2Q0FIWDtBQUlFLFNBQUssRUFBRSxNQUFDLDJDQUFEO0FBQVEsVUFBSSxFQUFDLFNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBekJHLEdBaUNMO0FBQUssYUFBUyxFQUFDLGtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsQ0FERixDQWpDRjtBQXlDRCxDQXJFRDs7QUF1RUEsTUFBTXlKLGVBQWUsR0FBSUMsS0FBRCxLQUFZO0FBQ2xDL0osWUFBVSxFQUFFK0osS0FBSyxDQUFDL0osVUFBTixDQUFpQmdLLGNBREs7QUFFbENDLGdCQUFjLEVBQUVGLEtBQUssQ0FBQ0csT0FBTixDQUFjak8sT0FGSTtBQUdsQzhELFNBQU8sRUFBRWdLLEtBQUssQ0FBQ0csT0FBTixDQUFjbkssT0FIVztBQUlsQ00sY0FBWSxFQUFFMEosS0FBSyxDQUFDRyxPQUFOLENBQWM3SixZQUpNO0FBS2xDVCxPQUFLLEVBQUVtSyxLQUFLLENBQUNHLE9BQU4sQ0FBY3RLLEtBTGE7QUFNbENFLFNBQU8sRUFBRWlLLEtBQUssQ0FBQ0csT0FBTixDQUFjcEssT0FOVztBQU9sQ3VKLGFBQVcsRUFBRVUsS0FBSyxDQUFDRyxPQUFOLENBQWNiO0FBUE8sQ0FBWixDQUF4Qjs7QUFVZWMsMEhBQU8sQ0FBQ0wsZUFBRCxFQUFrQjtBQUN0Q04sdUdBRHNDO0FBRXRDSSxvRkFGc0M7QUFHdENGLGtGQUFRQTtBQUg4QixDQUFsQixDQUFQLENBSVpULFNBSlksQ0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RkE7QUFPQTtBQUNBO0FBQ0E7QUFFTyxNQUFNbUIsWUFBWSxHQUFJeE0sRUFBRCxJQUFTeU0sUUFBRCxJQUFjO0FBQ2hEaEQsOENBQUUsQ0FBQ0MsVUFBSCxDQUFjLFlBQWQsRUFDR3dCLEdBREgsQ0FDT2xMLEVBRFAsRUFFRzBNLEdBRkgsR0FHR3RELElBSEgsQ0FHUzhCLEdBQUQsSUFBUztBQUNiLFFBQUlBLEdBQUcsQ0FBQ3lCLE1BQVIsRUFBZ0I7QUFDZEYsY0FBUSxDQUFDO0FBQ1ByTyxZQUFJLEVBQUV3Tyw4REFEQztBQUVQQyxlQUFPLEVBQUU7QUFDUEMsbUJBQVMsa0NBQU81QixHQUFHLENBQUNFLElBQUosRUFBUDtBQUFtQnBMLGNBQUUsRUFBRWtMLEdBQUcsQ0FBQ2xMO0FBQTNCLFlBREY7QUFFUCtNLHFCQUFXLEVBQUUsSUFGTjtBQUdQN0ssaUJBQU8sRUFBRTtBQUhGO0FBRkYsT0FBRCxDQUFSO0FBUUQsS0FURCxNQVNPO0FBQ0x1SyxjQUFRLENBQUM7QUFDUHJPLFlBQUksRUFBRXdPLDhEQURDO0FBRVBDLGVBQU8sRUFBRTtBQUNQRSxxQkFBVyxFQUFFLEtBRE47QUFFUDdLLGlCQUFPLEVBQUU7QUFGRjtBQUZGLE9BQUQsQ0FBUjtBQU9EO0FBQ0YsR0F0Qkg7QUF1QkQsQ0F4Qk07QUEwQkEsTUFBTWpDLFlBQVksR0FBSW1MLElBQUQsSUFBV3FCLFFBQUQsSUFBYztBQUNsREEsVUFBUSxDQUFDO0FBQUVyTyxRQUFJLEVBQUU0Tyw4REFBUjtBQUF1QkgsV0FBTyxFQUFFO0FBQUUzSyxhQUFPLEVBQUU7QUFBWDtBQUFoQyxHQUFELENBQVI7QUFDQSxRQUFNK0ssU0FBUyxHQUFJLEdBQUU3QixJQUFJLENBQUN0SyxTQUFMLENBQWVtRCxXQUFmLEVBQTZCLEdBQUVtSCxJQUFJLENBQUNsSyxRQUFMLElBQWlCLEdBQUksR0FDdkVrSyxJQUFJLENBQUNsSyxRQUFMLElBQWlCa0ssSUFBSSxDQUFDbEssUUFBTCxDQUFjK0MsV0FBZCxFQUNsQixFQUZEOztBQUdBLE1BQUksT0FBT21ILElBQUksQ0FBQ2pLLEtBQVosS0FBc0IsUUFBMUIsRUFBb0M7QUFDbEMrTCxXQUFPLENBQ0pDLEdBREgsQ0FDUSxHQUFFM0UsOENBQUksQ0FBQzRFLFdBQUwsQ0FBaUJuQyxHQUFJLElBQUdnQyxTQUFVLEVBRDVDLEVBRUdJLEdBRkgsQ0FFT2pDLElBQUksQ0FBQ2pLLEtBRlosRUFHR2lJLElBSEgsQ0FHUSxNQUFNO0FBQ1YsYUFBTzhELE9BQU8sQ0FDWEMsR0FESSxDQUNBM0UsOENBQUksQ0FBQzRFLFdBQUwsQ0FBaUJuQyxHQURqQixFQUVKcUMsS0FGSSxDQUVFTCxTQUZGLEVBR0pNLGNBSEksRUFBUDtBQUlELEtBUkgsRUFTR25FLElBVEgsQ0FTU29FLEdBQUQsSUFBUztBQUNiLGFBQU8vRCw0Q0FBRSxDQUFDQyxVQUFILENBQWMsWUFBZCxFQUE0QkMsR0FBNUIsaUNBQ0Z5QixJQURFO0FBRUxqSyxhQUFLLEVBQUVxTSxHQUZGO0FBR0wxRCxpQkFBUyxFQUFFQyxtREFBUSxDQUFDQyxTQUFULENBQW1CQyxVQUFuQixDQUE4QkMsZUFBOUIsRUFITjtBQUlMTSxrQkFBVSxFQUFFLENBSlA7QUFLTGlELGFBQUssRUFBRSxFQUxGO0FBTUxDLGdCQUFRLEVBQUU7QUFOTCxTQUFQO0FBUUQsS0FsQkgsRUFtQkd0RSxJQW5CSCxDQW1CU3VFLEdBQUQsSUFBUztBQUNidFAsa0RBQU8sQ0FBQ3VQLE9BQVIsQ0FBZ0IsOEJBQWhCO0FBQ0FuQixjQUFRLENBQUM7QUFDUHJPLFlBQUksRUFBRTRPLDhEQURDO0FBRVBILGVBQU8sRUFBRTtBQUNQeE8saUJBQU8sRUFBRSw4QkFERjtBQUVQd1AscUJBQVcsRUFBRUYsR0FBRyxDQUFDM04sRUFGVjtBQUdQa0MsaUJBQU8sRUFBRTtBQUhGO0FBRkYsT0FBRCxDQUFSO0FBUUQsS0E3QkgsRUE4Qkc0TCxLQTlCSCxDQThCVUMsR0FBRCxJQUFTO0FBQ2QxUCxrREFBTyxDQUFDeUUsS0FBUixDQUFjaUwsR0FBRyxDQUFDMVAsT0FBbEI7QUFDRCxLQWhDSDtBQWlDRCxHQWxDRCxNQWtDTztBQUNMb0wsZ0RBQUUsQ0FBQ0MsVUFBSCxDQUFjLFlBQWQsRUFDR0MsR0FESCxpQ0FFT3lCLElBRlA7QUFHSXRCLGVBQVMsRUFBRUMsbURBQVEsQ0FBQ0MsU0FBVCxDQUFtQkMsVUFBbkIsQ0FBOEJDLGVBQTlCLEVBSGY7QUFJSU0sZ0JBQVUsRUFBRSxDQUpoQjtBQUtJaUQsV0FBSyxFQUFFLEVBTFg7QUFNSUMsY0FBUSxFQUFFO0FBTmQsUUFRR3RFLElBUkgsQ0FRU3VFLEdBQUQsSUFBUztBQUNidFAsa0RBQU8sQ0FBQ3VQLE9BQVIsQ0FBZ0IsOEJBQWhCO0FBQ0FuQixjQUFRLENBQUM7QUFDUHJPLFlBQUksRUFBRTRPLDhEQURDO0FBRVBILGVBQU8sRUFBRTtBQUNQeE8saUJBQU8sRUFBRSw4QkFERjtBQUVQd1AscUJBQVcsRUFBRUYsR0FBRyxDQUFDM04sRUFGVjtBQUdQa0MsaUJBQU8sRUFBRTtBQUhGO0FBRkYsT0FBRCxDQUFSO0FBUUQsS0FsQkgsRUFtQkc0TCxLQW5CSCxDQW1CVUMsR0FBRCxJQUFTO0FBQ2QxUCxrREFBTyxDQUFDeUUsS0FBUixDQUFjaUwsR0FBRyxDQUFDMVAsT0FBbEI7QUFDRCxLQXJCSDtBQXNCRDtBQUNGLENBL0RNO0FBaUVBLE1BQU0yUCxhQUFhLEdBQUcsQ0FBQzVDLElBQUQsRUFBT3BMLEVBQVAsS0FBZXlNLFFBQUQsSUFBYztBQUN2REEsVUFBUSxDQUFDO0FBQUVyTyxRQUFJLEVBQUU2UCwrREFBUjtBQUF3QnBCLFdBQU8sRUFBRTtBQUFFcUIsc0JBQWdCLEVBQUU7QUFBcEI7QUFBakMsR0FBRCxDQUFSO0FBQ0EsUUFBTWpCLFNBQVMsR0FBSSxHQUFFN0IsSUFBSSxDQUFDdEssU0FBTCxDQUFlbUQsV0FBZixFQUE2QixHQUFFbUgsSUFBSSxDQUFDbEssUUFBTCxJQUFpQixHQUFJLEdBQ3ZFa0ssSUFBSSxDQUFDbEssUUFBTCxJQUFpQmtLLElBQUksQ0FBQ2xLLFFBQUwsQ0FBYytDLFdBQWQsRUFDbEIsRUFGRDs7QUFHQSxNQUFJbUgsSUFBSSxDQUFDakssS0FBTCxJQUFjLE9BQU9pSyxJQUFJLENBQUNqSyxLQUFaLEtBQXNCLFFBQXhDLEVBQWtEO0FBQ2hEK0wsV0FBTyxDQUNKQyxHQURILENBQ1EsR0FBRTNFLDhDQUFJLENBQUM0RSxXQUFMLENBQWlCbkMsR0FBSSxJQUFHZ0MsU0FBVSxFQUQ1QyxFQUVHSSxHQUZILENBRU9qQyxJQUFJLENBQUNqSyxLQUZaLEVBR0dpSSxJQUhILENBR1EsTUFBTTtBQUNWLGFBQU84RCxPQUFPLENBQ1hDLEdBREksQ0FDQTNFLDhDQUFJLENBQUM0RSxXQUFMLENBQWlCbkMsR0FEakIsRUFFSnFDLEtBRkksQ0FFRUwsU0FGRixFQUdKTSxjQUhJLEVBQVA7QUFJRCxLQVJILEVBU0duRSxJQVRILENBU1NvRSxHQUFELElBQVM7QUFDYixhQUFPL0QsNENBQUUsQ0FDTkMsVUFESSxDQUNPLFlBRFAsRUFFSndCLEdBRkksQ0FFQWxMLEVBRkEsRUFHSm1PLE1BSEksaUNBSUEvQyxJQUpBO0FBS0hqSyxhQUFLLEVBQUVxTTtBQUxKLFNBQVA7QUFPRCxLQWpCSCxFQWtCR3BFLElBbEJILENBa0JRLE1BQU07QUFDVnFELGNBQVEsQ0FBQztBQUNQck8sWUFBSSxFQUFFNlAsK0RBREM7QUFFUHBCLGVBQU8sRUFBRTtBQUNQeE8saUJBQU8sRUFBRSwrQkFERjtBQUVQNlAsMEJBQWdCLEVBQUU7QUFGWDtBQUZGLE9BQUQsQ0FBUjtBQU9ELEtBMUJILEVBMkJHSixLQTNCSCxDQTJCVUMsR0FBRCxJQUFTO0FBQ2QxUCxrREFBTyxDQUFDeUUsS0FBUixDQUFjaUwsR0FBRyxDQUFDMVAsT0FBbEI7QUFDRCxLQTdCSDtBQThCRCxHQS9CRCxNQStCTztBQUNMb0wsZ0RBQUUsQ0FBQ0MsVUFBSCxDQUFjLFlBQWQsRUFDR3dCLEdBREgsQ0FDT2xMLEVBRFAsRUFFR21PLE1BRkgsbUJBR08vQyxJQUhQLEdBS0doQyxJQUxILENBS1EsTUFBTTtBQUNWcUQsY0FBUSxDQUFDO0FBQ1ByTyxZQUFJLEVBQUU2UCwrREFEQztBQUVQcEIsZUFBTyxFQUFFO0FBQ1B4TyxpQkFBTyxFQUFFLCtCQURGO0FBRVA2UCwwQkFBZ0IsRUFBRTtBQUZYO0FBRkYsT0FBRCxDQUFSO0FBT0QsS0FiSCxFQWNHSixLQWRILENBY1VDLEdBQUQsSUFBUztBQUNkMVAsa0RBQU8sQ0FBQ3lFLEtBQVIsQ0FBY2lMLEdBQUcsQ0FBQzFQLE9BQWxCO0FBQ0QsS0FoQkg7QUFpQkQ7QUFDRixDQXZETTtBQXlEQSxNQUFNdU4saUJBQWlCLEdBQUl3QyxNQUFELElBQWEzQixRQUFELElBQWM7QUFDekRoRCw4Q0FBRSxDQUFDQyxVQUFILENBQWMsWUFBZCxFQUNHMkUsS0FESCxDQUNTLFVBRFQsRUFDcUIsSUFEckIsRUFDMkJELE1BRDNCLEVBRUcxQixHQUZILEdBR0d0RCxJQUhILENBR1NrRixJQUFELElBQVU7QUFDZCxRQUFJQyxLQUFLLEdBQUcsRUFBWjtBQUNBRCxRQUFJLENBQUNFLE9BQUwsQ0FBY3RELEdBQUQsSUFBUztBQUNwQnFELFdBQUssR0FBRyxDQUFDLEdBQUdBLEtBQUo7QUFBYXZPLFVBQUUsRUFBRWtMLEdBQUcsQ0FBQ2xMO0FBQXJCLFNBQTRCa0wsR0FBRyxDQUFDRSxJQUFKLEVBQTVCLEVBQVI7QUFDRCxLQUZEO0FBR0EsV0FBT21ELEtBQVA7QUFDRCxHQVRILEVBVUduRixJQVZILENBVVNtRixLQUFELElBQVc7QUFDZjlCLFlBQVEsQ0FBQztBQUFFck8sVUFBSSxFQUFFcVEsb0VBQVI7QUFBNkI1QixhQUFPLEVBQUUwQjtBQUF0QyxLQUFELENBQVI7QUFDRCxHQVpIO0FBYUQsQ0FkTTtBQWdCQSxNQUFNRyxxQkFBcUIsR0FBRyxNQUFPakMsUUFBRCxJQUFjO0FBQ3ZEaEQsOENBQUUsQ0FBQ0MsVUFBSCxDQUFjLGlCQUFkLEVBQ0cyRSxLQURILENBQ1MsVUFEVCxFQUNxQixJQURyQixFQUMyQjdGLDhDQUFJLENBQUM0RSxXQUFMLENBQWlCbkMsR0FENUMsRUFFR3lCLEdBRkgsR0FHR3RELElBSEgsQ0FHU2tGLElBQUQsSUFBVTtBQUNkLFFBQUlLLE1BQU0sR0FBRyxFQUFiO0FBQ0FMLFFBQUksQ0FBQ0UsT0FBTCxDQUFjdEQsR0FBRCxJQUFTO0FBQ3BCeUQsWUFBTSxHQUFHLENBQUMsR0FBR0EsTUFBSixFQUFZekQsR0FBRyxDQUFDRSxJQUFKLEdBQVd5QyxXQUF2QixDQUFUO0FBQ0QsS0FGRDtBQUdBLFdBQU9jLE1BQVA7QUFDRCxHQVRILEVBVUd2RixJQVZILENBVVN3RixLQUFELElBQVc7QUFDZixVQUFNNUgsTUFBTSxHQUFHNEgsS0FBSyxDQUFDNU4sR0FBTixDQUFXNEgsSUFBRCxJQUN2QmEsNENBQUUsQ0FBQ0MsVUFBSCxDQUFjLFlBQWQsRUFBNEJ3QixHQUE1QixDQUFnQ3RDLElBQWhDLEVBQXNDOEQsR0FBdEMsRUFEYSxDQUFmO0FBR0FoTyxXQUFPLENBQUNtUSxHQUFSLENBQVk3SCxNQUFaLEVBQW9Cb0MsSUFBcEIsQ0FBMEJ1RSxHQUFELElBQVM7QUFDaEMsVUFBSW1CLFFBQVEsR0FBRyxFQUFmO0FBQ0FuQixTQUFHLENBQUNhLE9BQUosQ0FDR3RELEdBQUQsSUFBVTRELFFBQVEsR0FBRyxDQUFDLEdBQUdBLFFBQUo7QUFBZ0I5TyxVQUFFLEVBQUVrTCxHQUFHLENBQUNsTDtBQUF4QixTQUErQmtMLEdBQUcsQ0FBQ0UsSUFBSixFQUEvQixFQUR2QjtBQUdBcUIsY0FBUSxDQUFDO0FBQ1ByTyxZQUFJLEVBQUUyUSx3RUFEQztBQUVQbEMsZUFBTyxFQUFFaUM7QUFGRixPQUFELENBQVI7QUFJRCxLQVREO0FBVUQsR0F4Qkg7QUF5QkQsQ0ExQk0sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvS1A7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLE1BQU1oRCxRQUFRLEdBQUk5TCxFQUFELElBQVN5TSxRQUFELElBQWM7QUFDNUNoRCw4Q0FBRSxDQUFDQyxVQUFILENBQWMsU0FBZCxFQUNHd0IsR0FESCxDQUNPbEwsRUFEUCxFQUVHME0sR0FGSCxHQUdHdEQsSUFISCxDQUdTOEIsR0FBRCxJQUFTO0FBQ2IsUUFBSUEsR0FBRyxDQUFDeUIsTUFBUixFQUFnQjtBQUNkRixjQUFRLENBQUM7QUFDUHJPLFlBQUksRUFBRTRRLDBEQURDO0FBRVB2RCxtQkFBVyxFQUFFLElBRk47QUFHUG9CLGVBQU8sa0NBQU8zQixHQUFHLENBQUNFLElBQUosRUFBUDtBQUFtQnBMLFlBQUUsRUFBRWtMLEdBQUcsQ0FBQ2xMO0FBQTNCO0FBSEEsT0FBRCxDQUFSO0FBS0QsS0FORCxNQU1PO0FBQ0x5TSxjQUFRLENBQUM7QUFDUHJPLFlBQUksRUFBRTZRLCtEQURDO0FBRVB4RCxtQkFBVyxFQUFFO0FBRk4sT0FBRCxDQUFSO0FBSUQ7QUFDRixHQWhCSCxFQWlCR3FDLEtBakJILENBaUJVQyxHQUFELElBQVM3SCxPQUFPLENBQUNDLEdBQVIsQ0FBWTRILEdBQVosQ0FqQmxCO0FBa0JELENBbkJNO0FBcUJBLE1BQU1tQixRQUFRLEdBQUk5RCxJQUFELElBQVdxQixRQUFELElBQWM7QUFDOUNBLFVBQVEsQ0FBQztBQUFFck8sUUFBSSxFQUFFK1EsMERBQVI7QUFBbUJ0QyxXQUFPLEVBQUU7QUFBRTNLLGFBQU8sRUFBRTtBQUFYO0FBQTVCLEdBQUQsQ0FBUjtBQUNBLFFBQU0rSyxTQUFTLEdBQUc3QixJQUFJLENBQUNwSSxLQUFMLENBQVdpQixXQUFYLEdBQXlCbUwsS0FBekIsQ0FBK0IsR0FBL0IsRUFBb0NDLElBQXBDLENBQXlDLEdBQXpDLENBQWxCO0FBQ0FuSixTQUFPLENBQUNDLEdBQVIsQ0FBWWlGLElBQVo7O0FBQ0EsTUFBSSxPQUFPQSxJQUFJLENBQUNySSxNQUFaLEtBQXVCLFFBQTNCLEVBQXFDO0FBQ25DbUsscURBQU8sQ0FDSkMsR0FESCxDQUNRLEdBQUUzRSw4Q0FBSSxDQUFDNEUsV0FBTCxDQUFpQm5DLEdBQUksSUFBR2dDLFNBQVUsRUFENUMsRUFFR0ksR0FGSCxDQUVPakMsSUFBSSxDQUFDckksTUFGWixFQUdHcUcsSUFISCxDQUdRLE1BQU07QUFDVixhQUFPOEQsaURBQU8sQ0FDWEMsR0FESSxDQUNBM0UsOENBQUksQ0FBQzRFLFdBQUwsQ0FBaUJuQyxHQURqQixFQUVKcUMsS0FGSSxDQUVFTCxTQUZGLEVBR0pNLGNBSEksRUFBUDtBQUlELEtBUkgsRUFTR25FLElBVEgsQ0FTU29FLEdBQUQsSUFBUztBQUNiLGFBQU8vRCw0Q0FBRSxDQUFDQyxVQUFILENBQWMsU0FBZCxFQUF5QkMsR0FBekIsaUNBQ0Z5QixJQURFO0FBRUxhLGdCQUFRLEVBQUV6RCw4Q0FBSSxDQUFDNEUsV0FBTCxDQUFpQm5DLEdBRnRCO0FBR0xxRSxrQkFBVSxFQUFFbEUsSUFBSSxDQUFDa0UsVUFIWjtBQUlMQyxlQUFPLEVBQUUsS0FKSjtBQUtMeE0sY0FBTSxFQUFFeUssR0FMSDtBQU1MMUQsaUJBQVMsRUFBRUMsbURBQVEsQ0FBQ0MsU0FBVCxDQUFtQkMsVUFBbkIsQ0FBOEJDLGVBQTlCLEVBTk47QUFPTE0sa0JBQVUsRUFBRSxDQVBQO0FBUUxnRixxQkFBYSxFQUFFLENBUlY7QUFTTEMsc0JBQWMsRUFBRSxDQVRYO0FBVUxDLDJCQUFtQixFQUFFLEVBVmhCO0FBV0xDLGdCQUFRLEVBQUUsS0FYTDtBQVlMQyxZQUFJLEVBQUU7QUFaRCxTQUFQO0FBY0QsS0F4QkgsRUF5Qkd4RyxJQXpCSCxDQXlCU3VFLEdBQUQsSUFBUztBQUNidFAsa0RBQU8sQ0FBQ3VQLE9BQVIsQ0FBZ0IsMEJBQWhCO0FBQ0FpQyxnQkFBVSxDQUFDLE1BQU07QUFDZkMsMERBQU0sQ0FBQ0MsSUFBUCxDQUFhLFVBQVNwQyxHQUFHLENBQUMzTixFQUFHLEVBQTdCO0FBQ0F5TSxnQkFBUSxDQUFDO0FBQ1ByTyxjQUFJLEVBQUUrUSwwREFEQztBQUVQdEMsaUJBQU8sRUFBRTtBQUNQeE8sbUJBQU8sRUFBRSwwQkFERjtBQUVQOEQsbUJBQU8sRUFBRXdMLEdBQUcsQ0FBQzNOLEVBRk47QUFHUGtDLG1CQUFPLEVBQUU7QUFIRjtBQUZGLFNBQUQsQ0FBUjtBQVFELE9BVlMsRUFVUCxJQVZPLENBQVY7QUFXRCxLQXRDSCxFQXVDRzRMLEtBdkNILENBdUNVQyxHQUFELElBQVM7QUFDZDFQLGtEQUFPLENBQUN5RSxLQUFSLENBQWNpTCxHQUFHLENBQUMxUCxPQUFsQjtBQUNELEtBekNIO0FBMENELEdBM0NELE1BMkNPO0FBQ0xvTCxnREFBRSxDQUFDQyxVQUFILENBQWMsU0FBZCxFQUNHQyxHQURILGlDQUVPeUIsSUFGUDtBQUdJYSxjQUFRLEVBQUV6RCw4Q0FBSSxDQUFDNEUsV0FBTCxDQUFpQm5DLEdBSC9CO0FBSUlxRSxnQkFBVSxFQUFFbEUsSUFBSSxDQUFDa0UsVUFKckI7QUFLSUMsYUFBTyxFQUFFLEtBTGI7QUFNSXpGLGVBQVMsRUFBRUMsbURBQVEsQ0FBQ0MsU0FBVCxDQUFtQkMsVUFBbkIsQ0FBOEJDLGVBQTlCLEVBTmY7QUFPSU0sZ0JBQVUsRUFBRSxDQVBoQjtBQVFJZ0YsbUJBQWEsRUFBRSxDQVJuQjtBQVNJQyxvQkFBYyxFQUFFLENBVHBCO0FBVUlFLGNBQVEsRUFBRSxLQVZkO0FBV0lELHlCQUFtQixFQUFFLEVBWHpCO0FBWUlFLFVBQUksRUFBRTtBQVpWLFFBY0d4RyxJQWRILENBY1N1RSxHQUFELElBQVM7QUFDYnRQLGtEQUFPLENBQUN1UCxPQUFSLENBQWdCLDBCQUFoQjtBQUNBaUMsZ0JBQVUsQ0FBQyxNQUFNO0FBQ2ZDLDBEQUFNLENBQUNDLElBQVAsQ0FBYSxVQUFTcEMsR0FBRyxDQUFDM04sRUFBRyxFQUE3QjtBQUNBeU0sZ0JBQVEsQ0FBQztBQUNQck8sY0FBSSxFQUFFK1EsMERBREM7QUFFUHRDLGlCQUFPLEVBQUU7QUFDUHhPLG1CQUFPLEVBQUUsMEJBREY7QUFFUDhELG1CQUFPLEVBQUV3TCxHQUFHLENBQUMzTixFQUZOO0FBR1BrQyxtQkFBTyxFQUFFO0FBSEY7QUFGRixTQUFELENBQVI7QUFRRCxPQVZTLEVBVVAsSUFWTyxDQUFWO0FBV0QsS0EzQkgsRUE0Qkc0TCxLQTVCSCxDQTRCVUMsR0FBRCxJQUFTO0FBQ2QxUCxrREFBTyxDQUFDeUUsS0FBUixDQUFjaUwsR0FBRyxDQUFDMVAsT0FBbEI7QUFDRCxLQTlCSDtBQStCRDtBQUNGLENBaEZNO0FBa0ZBLE1BQU0yTixTQUFTLEdBQUcsQ0FBQ1osSUFBRCxFQUFPakosT0FBUCxLQUFvQnNLLFFBQUQsSUFBYztBQUN4REEsVUFBUSxDQUFDO0FBQUVyTyxRQUFJLEVBQUU0UiwyREFBUjtBQUFvQm5ELFdBQU8sRUFBRTtBQUFFcEssa0JBQVksRUFBRTtBQUFoQjtBQUE3QixHQUFELENBQVI7QUFDQSxRQUFNd0ssU0FBUyxHQUFHN0IsSUFBSSxDQUFDcEksS0FBTCxDQUFXaUIsV0FBWCxHQUF5Qm1MLEtBQXpCLENBQStCLEdBQS9CLEVBQW9DQyxJQUFwQyxDQUF5QyxHQUF6QyxDQUFsQjs7QUFFQSxNQUFJLE9BQU9qRSxJQUFJLENBQUNySSxNQUFaLEtBQXVCLFFBQTNCLEVBQXFDO0FBQ25DbUsscURBQU8sQ0FDSkMsR0FESCxDQUNRLEdBQUUzRSw4Q0FBSSxDQUFDNEUsV0FBTCxDQUFpQm5DLEdBQUksSUFBR2dDLFNBQVUsRUFENUMsRUFFR0ksR0FGSCxDQUVPakMsSUFBSSxDQUFDckksTUFGWixFQUdHcUcsSUFISCxDQUdRLE1BQU07QUFDVixhQUFPOEQsaURBQU8sQ0FDWEMsR0FESSxDQUNBM0UsOENBQUksQ0FBQzRFLFdBQUwsQ0FBaUJuQyxHQURqQixFQUVKcUMsS0FGSSxDQUVFTCxTQUZGLEVBR0pNLGNBSEksRUFBUDtBQUlELEtBUkgsRUFTR25FLElBVEgsQ0FTU29FLEdBQUQsSUFBUztBQUNiLGFBQU8vRCw0Q0FBRSxDQUNOQyxVQURJLENBQ08sU0FEUCxFQUVKd0IsR0FGSSxDQUVBL0ksT0FGQSxFQUdKZ00sTUFISSxpQ0FJQS9DLElBSkE7QUFLSHJJLGNBQU0sRUFBRXlLO0FBTEwsU0FBUDtBQU9ELEtBakJILEVBa0JHcEUsSUFsQkgsQ0FrQlEsTUFBTTtBQUNWL0ssa0RBQU8sQ0FBQ3VQLE9BQVIsQ0FBZ0IsMEJBQWhCO0FBQ0FuQixjQUFRLENBQUM7QUFDUHJPLFlBQUksRUFBRTRSLDJEQURDO0FBRVBuRCxlQUFPLEVBQUU7QUFDUHhPLGlCQUFPLEVBQUU7QUFERjtBQUZGLE9BQUQsQ0FBUjtBQU1ELEtBMUJILEVBMkJHeVAsS0EzQkgsQ0EyQlVDLEdBQUQsSUFBUztBQUNkMVAsa0RBQU8sQ0FBQ3lFLEtBQVIsQ0FBY2lMLEdBQUcsQ0FBQzFQLE9BQWxCO0FBQ0QsS0E3Qkg7QUE4QkQsR0EvQkQsTUErQk87QUFDTG9MLGdEQUFFLENBQUNDLFVBQUgsQ0FBYyxTQUFkLEVBQ0d3QixHQURILENBQ08vSSxPQURQLEVBRUdnTSxNQUZILG1CQUdPL0MsSUFIUCxHQUtHaEMsSUFMSCxDQUtRLE1BQU07QUFDVi9LLGtEQUFPLENBQUN1UCxPQUFSLENBQWdCLDBCQUFoQjtBQUNBbkIsY0FBUSxDQUFDO0FBQ1ByTyxZQUFJLEVBQUU0UiwyREFEQztBQUVQbkQsZUFBTyxFQUFFO0FBQ1B4TyxpQkFBTyxFQUFFO0FBREY7QUFGRixPQUFELENBQVI7QUFNRCxLQWJILEVBY0d5UCxLQWRILENBY1VDLEdBQUQsSUFBUztBQUNkMVAsa0RBQU8sQ0FBQ3lFLEtBQVIsQ0FBY2lMLEdBQUcsQ0FBQzFQLE9BQWxCO0FBQ0QsS0FoQkg7QUFpQkQ7QUFDRixDQXRETTtBQXdEQSxNQUFNNFIsVUFBVSxHQUFJN0UsSUFBRCxJQUFXcUIsUUFBRCxJQUFjO0FBQ2hEQSxVQUFRLENBQUM7QUFBRXJPLFFBQUksRUFBRThSLDREQUFSO0FBQXFCckQsV0FBTyxFQUFFO0FBQUUzSyxhQUFPLEVBQUU7QUFBWDtBQUE5QixHQUFELENBQVI7QUFDQXVILDhDQUFFLENBQUNDLFVBQUgsQ0FBYyxVQUFkLEVBQ0dDLEdBREgsaUNBRU95QixJQUZQO0FBR0lhLFlBQVEsRUFBRXpELDhDQUFJLENBQUM0RSxXQUFMLENBQWlCbkMsR0FIL0I7QUFJSWtGLGlCQUFhLEVBQUUsQ0FKbkI7QUFLSVAsUUFBSSxFQUFFLENBTFY7QUFNSVEsVUFBTSxFQUFFLEVBTlo7QUFPSUMsY0FBVSxFQUFFLENBUGhCO0FBUUl2RyxhQUFTLEVBQUVDLG1EQUFRLENBQUNDLFNBQVQsQ0FBbUJDLFVBQW5CLENBQThCQyxlQUE5QjtBQVJmLE1BVUdkLElBVkgsQ0FVU3VFLEdBQUQsSUFBUztBQUNibEUsZ0RBQUUsQ0FBQ0MsVUFBSCxDQUFjLFNBQWQsRUFDR3dCLEdBREgsQ0FDT0UsSUFBSSxDQUFDakosT0FEWixFQUVHdUssR0FGSCxHQUdHdEQsSUFISCxDQUdTOEIsR0FBRCxJQUFTO0FBQ2IsWUFBTTlJLFVBQVUsR0FBRzhJLEdBQUcsQ0FBQ0UsSUFBSixHQUFXc0UsbUJBQTlCO0FBQ0EsWUFBTVksSUFBSSxHQUFHcEYsR0FBRyxDQUFDRSxJQUFKLEdBQVdqSSxjQUF4QjtBQUNBc0csa0RBQUUsQ0FBQ0MsVUFBSCxDQUFjLFNBQWQsRUFDR3dCLEdBREgsQ0FDT0UsSUFBSSxDQUFDakosT0FEWixFQUVHZ00sTUFGSCxDQUVVO0FBQ051QiwyQkFBbUIsRUFBRSxDQUNuQixHQUFHLElBQUlhLEdBQUosQ0FBUSxDQUNULEdBQUduTyxVQURNLEVBRVQsR0FBR2dKLElBQUksQ0FBQ2hKLFVBQUwsQ0FBZ0J2QyxNQUFoQixDQUF3QkMsQ0FBRCxJQUFPLENBQUN3USxJQUFJLENBQUN2USxRQUFMLENBQWNELENBQWQsQ0FBL0IsQ0FGTSxDQUFSLENBRGdCO0FBRGYsT0FGVixFQVVHc0osSUFWSCxDQVVRLE1BQU07QUFDVnFELGdCQUFRLENBQUM7QUFDUHJPLGNBQUksRUFBRThSLDREQURDO0FBRVByRCxpQkFBTyxFQUFFO0FBQ1B4TyxtQkFBTyxFQUFFLDRCQURGO0FBRVBtUyxrQkFBTSxFQUFFN0MsR0FBRyxDQUFDM04sRUFGTDtBQUdQa0MsbUJBQU8sRUFBRTtBQUhGO0FBRkYsU0FBRCxDQUFSO0FBUUQsT0FuQkg7QUFvQkQsS0ExQkg7QUEyQkQsR0F0Q0gsRUFGZ0QsQ0F5Q2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNELENBeERNO0FBMERBLE1BQU11TyxVQUFVLEdBQUcsQ0FBQ3RPLE9BQUQsRUFBVW5DLEVBQVYsS0FBa0J5TSxRQUFELElBQWM7QUFDdkRoRCw4Q0FBRSxDQUFDQyxVQUFILENBQWMsU0FBZCxFQUNHd0IsR0FESCxDQUNPL0ksT0FEUCxFQUVHdUssR0FGSCxHQUdHdEQsSUFISCxDQUdTOEIsR0FBRCxJQUFTO0FBQ2IsUUFBSUEsR0FBRyxDQUFDeUIsTUFBUixFQUFnQjtBQUNkbEQsa0RBQUUsQ0FBQ0MsVUFBSCxDQUFjLFVBQWQsRUFDR3dCLEdBREgsQ0FDT2xMLEVBRFAsRUFFRzBNLEdBRkgsR0FHR3RELElBSEgsQ0FHUzhCLEdBQUQsSUFBUztBQUNiLFlBQUlBLEdBQUcsQ0FBQ3lCLE1BQVIsRUFBZ0I7QUFDZEYsa0JBQVEsQ0FBQztBQUNQck8sZ0JBQUksRUFBRXNTLDREQURDO0FBRVA3RCxtQkFBTyxFQUFFO0FBQ1A4RCxxQkFBTyxrQ0FBT3pGLEdBQUcsQ0FBQ0UsSUFBSixFQUFQO0FBQW1CcEwsa0JBQUUsRUFBRWtMLEdBQUcsQ0FBQ2xMO0FBQTNCLGdCQURBO0FBRVA0USwyQkFBYSxFQUFFO0FBRlI7QUFGRixXQUFELENBQVI7QUFPRCxTQVJELE1BUU87QUFDTG5FLGtCQUFRLENBQUM7QUFDUHJPLGdCQUFJLEVBQUVzUyw0REFEQztBQUVQN0QsbUJBQU8sRUFBRTtBQUFFK0QsMkJBQWEsRUFBRTtBQUFqQjtBQUZGLFdBQUQsQ0FBUjtBQUlEO0FBQ0YsT0FsQkg7QUFtQkQsS0FwQkQsTUFvQk87QUFDTG5FLGNBQVEsQ0FBQztBQUNQck8sWUFBSSxFQUFFc1MsNERBREM7QUFFUDdELGVBQU8sRUFBRTtBQUFFK0QsdUJBQWEsRUFBRTtBQUFqQjtBQUZGLE9BQUQsQ0FBUjtBQUlEO0FBQ0YsR0E5Qkg7QUErQkQsQ0FoQ007QUFrQ0EsTUFBTUMsV0FBVyxHQUFHLENBQUN6RixJQUFELEVBQU9qSixPQUFQLEVBQWdCMk8sTUFBaEIsS0FBNEJyRSxRQUFELElBQWM7QUFDbEVBLFVBQVEsQ0FBQztBQUFFck8sUUFBSSxFQUFFMlMsNkRBQVI7QUFBc0JsRSxXQUFPLEVBQUU7QUFBRTNLLGFBQU8sRUFBRTtBQUFYO0FBQS9CLEdBQUQsQ0FBUjtBQUNBdUgsOENBQUUsQ0FBQ0MsVUFBSCxDQUFjLFVBQWQsRUFDR3dCLEdBREgsQ0FDTzRGLE1BRFAsRUFFRzNDLE1BRkgsbUJBRWUvQyxJQUZmLEdBR0doQyxJQUhILENBR1EsTUFBTTtBQUNWSyxnREFBRSxDQUFDQyxVQUFILENBQWMsU0FBZCxFQUNHd0IsR0FESCxDQUNPL0ksT0FEUCxFQUVHdUssR0FGSCxHQUdHdEQsSUFISCxDQUdTOEIsR0FBRCxJQUFTO0FBQ2IsWUFBTTlJLFVBQVUsR0FBRzhJLEdBQUcsQ0FBQ0UsSUFBSixHQUFXc0UsbUJBQTlCO0FBQ0EsWUFBTVksSUFBSSxHQUFHcEYsR0FBRyxDQUFDRSxJQUFKLEdBQVdqSSxjQUF4QjtBQUNBc0csa0RBQUUsQ0FBQ0MsVUFBSCxDQUFjLFNBQWQsRUFDR3dCLEdBREgsQ0FDTy9JLE9BRFAsRUFFR2dNLE1BRkgsQ0FFVTtBQUNOdUIsMkJBQW1CLEVBQUV0RSxJQUFJLENBQUNoSixVQUFMLEdBQ2pCLENBQ0UsR0FBRyxJQUFJbU8sR0FBSixDQUFRLENBQ1QsR0FBR25PLFVBRE0sRUFFVCxHQUFHZ0osSUFBSSxDQUFDaEosVUFBTCxDQUFnQnZDLE1BQWhCLENBQXdCQyxDQUFELElBQU8sQ0FBQ3dRLElBQUksQ0FBQ3ZRLFFBQUwsQ0FBY0QsQ0FBZCxDQUEvQixDQUZNLENBQVIsQ0FETCxDQURpQixHQU9qQnNDO0FBUkUsT0FGVixFQVlHZ0gsSUFaSCxDQVlRLE1BQU07QUFDVnFELGdCQUFRLENBQUM7QUFDUHJPLGNBQUksRUFBRTJTLDZEQURDO0FBRVBsRSxpQkFBTyxFQUFFO0FBQ1B4TyxtQkFBTyxFQUFFLDZCQURGO0FBRVA2RCxtQkFBTyxFQUFFO0FBRkY7QUFGRixTQUFELENBQVI7QUFPRCxPQXBCSDtBQXFCRCxLQTNCSDtBQTRCRCxHQWhDSDtBQWlDRCxDQW5DTTtBQXFDQSxNQUFNOE8sV0FBVyxHQUFJaFIsRUFBRCxJQUFTeU0sUUFBRCxJQUFjO0FBQy9DaEQsOENBQUUsQ0FBQ0MsVUFBSCxDQUFjLFVBQWQsRUFDRzJFLEtBREgsQ0FDUyxTQURULEVBQ29CLElBRHBCLEVBQzBCck8sRUFEMUIsRUFFR2lSLE9BRkgsQ0FFVyxRQUZYLEVBRXFCLEtBRnJCLEVBR0c5RixVQUhILENBR2VtRCxJQUFELElBQVU7QUFDcEIsUUFBSTRDLEdBQUcsR0FBRyxFQUFWO0FBQ0E1QyxRQUFJLENBQUNFLE9BQUwsQ0FBY3RELEdBQUQsSUFBUztBQUNwQmdHLFNBQUcsQ0FBQ25CLElBQUosQ0FBUztBQUNQOUQsZ0JBQVEsRUFBRWYsR0FBRyxDQUFDRSxJQUFKLEdBQVdhLFFBRGQ7QUFFUGpNLFVBQUUsRUFBRWtMLEdBQUcsQ0FBQ2xMLEVBRkQ7QUFHUDhKLGlCQUFTLEVBQUVvQixHQUFHLENBQUNFLElBQUosR0FBV3RCLFNBSGY7QUFJUHFILGNBQU0sRUFBRWpHLEdBQUcsQ0FBQ0UsSUFBSixHQUFXK0YsTUFKWjtBQUtQbk8sYUFBSyxFQUFFa0ksR0FBRyxDQUFDRSxJQUFKLEdBQVdwSSxLQUxYO0FBTVBtTixxQkFBYSxFQUFFakYsR0FBRyxDQUFDRSxJQUFKLEdBQVcrRTtBQU5uQixPQUFUO0FBUUQsS0FURDtBQVVBMUQsWUFBUSxDQUFDO0FBQ1ByTyxVQUFJLEVBQUVnVCw2REFEQztBQUVQdkUsYUFBTyxFQUFFcUU7QUFGRixLQUFELENBQVI7QUFJRCxHQW5CSDtBQW9CRCxDQXJCTTtBQXVCQSxNQUFNRyxrQkFBa0IsR0FBSXJSLEVBQUQsSUFBU3lNLFFBQUQsSUFBYyxDQUFFLENBQW5EO0FBRUEsTUFBTTZFLGNBQWMsR0FBRyxNQUFPN0UsUUFBRCxJQUFjO0FBQ2hEaEQsOENBQUUsQ0FBQ0MsVUFBSCxDQUFjLFNBQWQsRUFDRzJFLEtBREgsQ0FDUyxVQURULEVBQ3FCLElBRHJCLEVBQzJCN0YsOENBQUksQ0FBQzRFLFdBQUwsQ0FBaUJuQyxHQUQ1QyxFQUVHeUIsR0FGSCxHQUdHdEQsSUFISCxDQUdTa0YsSUFBRCxJQUFVO0FBQ2QsUUFBSUMsS0FBSyxHQUFHLEVBQVo7QUFDQUQsUUFBSSxDQUFDRSxPQUFMLENBQWN0RCxHQUFELElBQVM7QUFDcEJxRCxXQUFLLEdBQUcsQ0FBQyxHQUFHQSxLQUFKO0FBQWF2TyxVQUFFLEVBQUVrTCxHQUFHLENBQUNsTDtBQUFyQixTQUE0QmtMLEdBQUcsQ0FBQ0UsSUFBSixFQUE1QixFQUFSO0FBQ0QsS0FGRDtBQUdBLFdBQU9tRCxLQUFQO0FBQ0QsR0FUSCxFQVVHbkYsSUFWSCxDQVVTbUYsS0FBRCxJQUFXO0FBQ2Y5QixZQUFRLENBQUM7QUFBRXJPLFVBQUksRUFBRW1ULGlFQUFSO0FBQTBCMUUsYUFBTyxFQUFFMEI7QUFBbkMsS0FBRCxDQUFSO0FBQ0QsR0FaSDtBQWFELENBZE07QUFnQkEsTUFBTWlELGdCQUFnQixHQUFHLE1BQU8vRSxRQUFELElBQWM7QUFDbERoRCw4Q0FBRSxDQUFDQyxVQUFILENBQWMsV0FBZCxFQUNHMkUsS0FESCxDQUNTLFVBRFQsRUFDcUIsSUFEckIsRUFDMkI3Riw4Q0FBSSxDQUFDNEUsV0FBTCxDQUFpQm5DLEdBRDVDLEVBRUd5QixHQUZILEdBR0d0RCxJQUhILENBR1NrRixJQUFELElBQVU7QUFDZCxRQUFJbUQsU0FBUyxHQUFHLEVBQWhCO0FBQ0FuRCxRQUFJLENBQUNFLE9BQUwsQ0FBY3RELEdBQUQsSUFBUztBQUNwQnVHLGVBQVMsR0FBRyxDQUFDLEdBQUdBLFNBQUo7QUFBaUJ6UixVQUFFLEVBQUVrTCxHQUFHLENBQUNsTDtBQUF6QixTQUFnQ2tMLEdBQUcsQ0FBQ0UsSUFBSixFQUFoQyxFQUFaO0FBQ0QsS0FGRDtBQUdBcUIsWUFBUSxDQUFDO0FBQ1ByTyxVQUFJLEVBQUVzVCxtRUFEQztBQUVQN0UsYUFBTyxFQUFFNEU7QUFGRixLQUFELENBQVI7QUFJRCxHQVpIO0FBYUQsQ0FkTTtBQWdCQSxNQUFNRSxrQkFBa0IsR0FBRyxNQUFPbEYsUUFBRCxJQUFjO0FBQ3BEaEQsOENBQUUsQ0FBQ0MsVUFBSCxDQUFjLGNBQWQsRUFDRzJFLEtBREgsQ0FDUyxVQURULEVBQ3FCLElBRHJCLEVBQzJCN0YsOENBQUksQ0FBQzRFLFdBQUwsQ0FBaUJuQyxHQUQ1QyxFQUVHeUIsR0FGSCxHQUdHdEQsSUFISCxDQUdTa0YsSUFBRCxJQUFVO0FBQ2QsUUFBSUssTUFBTSxHQUFHLEVBQWI7QUFDQUwsUUFBSSxDQUFDRSxPQUFMLENBQWN0RCxHQUFELElBQVM7QUFDcEJ5RCxZQUFNLEdBQUcsQ0FBQyxHQUFHQSxNQUFKLEVBQVl6RCxHQUFHLENBQUNFLElBQUosR0FBV2pKLE9BQXZCLENBQVQ7QUFDRCxLQUZEO0FBR0EsV0FBT3dNLE1BQVA7QUFDRCxHQVRILEVBVUd2RixJQVZILENBVVN3RixLQUFELElBQVc7QUFDZixVQUFNNUgsTUFBTSxHQUFHNEgsS0FBSyxDQUFDNU4sR0FBTixDQUFXNEgsSUFBRCxJQUN2QmEsNENBQUUsQ0FBQ0MsVUFBSCxDQUFjLFNBQWQsRUFBeUJ3QixHQUF6QixDQUE2QnRDLElBQTdCLEVBQW1DOEQsR0FBbkMsRUFEYSxDQUFmO0FBR0FoTyxXQUFPLENBQUNtUSxHQUFSLENBQVk3SCxNQUFaLEVBQW9Cb0MsSUFBcEIsQ0FBMEJ1RSxHQUFELElBQVM7QUFDaEMsVUFBSW1CLFFBQVEsR0FBRyxFQUFmO0FBQ0FuQixTQUFHLENBQUNhLE9BQUosQ0FDR3RELEdBQUQsSUFBVTRELFFBQVEsR0FBRyxDQUFDLEdBQUdBLFFBQUo7QUFBZ0I5TyxVQUFFLEVBQUVrTCxHQUFHLENBQUNsTDtBQUF4QixTQUErQmtMLEdBQUcsQ0FBQ0UsSUFBSixFQUEvQixFQUR2QjtBQUdBcUIsY0FBUSxDQUFDO0FBQ1ByTyxZQUFJLEVBQUV3VCxxRUFEQztBQUVQL0UsZUFBTyxFQUFFaUM7QUFGRixPQUFELENBQVI7QUFJRCxLQVREO0FBVUQsR0F4Qkg7QUF5QkQsQ0ExQk0sQzs7Ozs7Ozs7Ozs7O0FDM1dQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTStDLFVBQVUsR0FBRztBQUNqQkMsUUFBTSxFQUFFQyx5Q0FEUztBQUVqQkMsWUFBVSxFQUFFRCw4QkFGSztBQUdqQkUsYUFBVyxFQUFFRixxQ0FISTtBQUlqQkcsV0FBUyxFQUFFSCxjQUpNO0FBS2pCSSxlQUFhLEVBQUVKLDBCQUxFO0FBTWpCSyxtQkFBaUIsRUFBRUwsZUFORjtBQU9qQk0sT0FBSyxFQUFFTiw0Q0FBMkJPO0FBUGpCLENBQW5CO0FBVUEsTUFBTUMsU0FBUyxHQUFHO0FBQ2hCVCxRQUFNLEVBQUVDLHlDQURRO0FBRWhCQyxZQUFVLEVBQUVELDhCQUZJO0FBR2hCRSxhQUFXLEVBQUVGLHFDQUhHO0FBSWhCRyxXQUFTLEVBQUVILGNBSks7QUFLaEJJLGVBQWEsRUFBRUosMEJBTEM7QUFNaEJLLG1CQUFpQixFQUFFTCxlQU5IO0FBT2hCTSxPQUFLLEVBQUVOLDRDQUEyQk87QUFQbEIsQ0FBbEI7QUFVQSxNQUFNRSxNQUFNLEdBQUcsUUFBd0NYLFNBQXhDLEdBQXFEVSxTQUFwRTs7QUFFQSxJQUFJLENBQUN4SSxtREFBUSxDQUFDMEksSUFBVCxDQUFjcFMsTUFBbkIsRUFBMkI7QUFDekIwSixxREFBUSxDQUFDMkksYUFBVCxDQUF1QkYsTUFBdkI7QUFDRDs7QUFFRCxNQUFNL0ksRUFBRSxHQUFHTSxtREFBUSxDQUFDQyxTQUFULEVBQVg7QUFDQSxNQUFNeEIsSUFBSSxHQUFHdUIsbURBQVEsQ0FBQ3ZCLElBQVQsRUFBYjtBQUNBLE1BQU0wRSxPQUFPLEdBQUduRCxtREFBUSxDQUFDbUQsT0FBVCxFQUFoQjtBQUVBO0FBQ2VzRixxRUFBZixFOzs7Ozs7Ozs7Ozs7QUNwQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPLE1BQU01TyxVQUFVLEdBQUcsQ0FDeEI7QUFBRWxHLE1BQUksRUFBRSxPQUFSO0FBQWlCYyxPQUFLLEVBQUU7QUFBeEIsQ0FEd0IsRUFFeEI7QUFBRWQsTUFBSSxFQUFFLFFBQVI7QUFBa0JjLE9BQUssRUFBRTtBQUF6QixDQUZ3QixFQUd4QjtBQUFFZCxNQUFJLEVBQUUsUUFBUjtBQUFrQmMsT0FBSyxFQUFFO0FBQXpCLENBSHdCLEVBSXhCO0FBQUVkLE1BQUksRUFBRSxTQUFSO0FBQW1CYyxPQUFLLEVBQUU7QUFBMUIsQ0FKd0IsRUFLeEI7QUFBRWQsTUFBSSxFQUFFLFFBQVI7QUFBa0JjLE9BQUssRUFBRTtBQUF6QixDQUx3QixFQU14QjtBQUFFZCxNQUFJLEVBQUUsU0FBUjtBQUFtQmMsT0FBSyxFQUFFO0FBQTFCLENBTndCLEVBT3hCO0FBQUVkLE1BQUksRUFBRSxPQUFSO0FBQWlCYyxPQUFLLEVBQUU7QUFBeEIsQ0FQd0IsRUFReEI7QUFBRWQsTUFBSSxFQUFFLFFBQVI7QUFBa0JjLE9BQUssRUFBRTtBQUF6QixDQVJ3QixFQVN4QjtBQUFFZCxNQUFJLEVBQUUsVUFBUjtBQUFvQmMsT0FBSyxFQUFFO0FBQTNCLENBVHdCLEVBVXhCO0FBQUVkLE1BQUksRUFBRSxjQUFSO0FBQXdCYyxPQUFLLEVBQUU7QUFBL0IsQ0FWd0IsRUFXeEI7QUFBRWQsTUFBSSxFQUFFLFdBQVI7QUFBcUJjLE9BQUssRUFBRTtBQUE1QixDQVh3QixFQVl4QjtBQUFFZCxNQUFJLEVBQUUsU0FBUjtBQUFtQmMsT0FBSyxFQUFFO0FBQTFCLENBWndCLEVBYXhCO0FBQUVkLE1BQUksRUFBRSxTQUFSO0FBQW1CYyxPQUFLLEVBQUU7QUFBMUIsQ0Fid0IsRUFjeEI7QUFBRWQsTUFBSSxFQUFFLFNBQVI7QUFBbUJjLE9BQUssRUFBRTtBQUExQixDQWR3QixFQWV4QjtBQUFFZCxNQUFJLEVBQUUsT0FBUjtBQUFpQmMsT0FBSyxFQUFFO0FBQXhCLENBZndCLEVBZ0J4QjtBQUFFZCxNQUFJLEVBQUUsWUFBUjtBQUFzQmMsT0FBSyxFQUFFO0FBQTdCLENBaEJ3QixDQUFuQjtBQW1CQSxNQUFNOEYsVUFBVSxHQUFHLENBQ3hCO0FBQUU1RyxNQUFJLEVBQUUsZUFBUjtBQUF5QmMsT0FBSyxFQUFFO0FBQWhDLENBRHdCLEVBRXhCO0FBQUVkLE1BQUksRUFBRSxxQkFBUjtBQUErQmMsT0FBSyxFQUFFO0FBQXRDLENBRndCLEVBR3hCO0FBQUVkLE1BQUksRUFBRSxrQkFBUjtBQUE0QmMsT0FBSyxFQUFFO0FBQW5DLENBSHdCLENBQW5CO0FBTUEsTUFBTTBGLFNBQVMsR0FBRyxDQUN2QjtBQUFFeEcsTUFBSSxFQUFFLE1BQVI7QUFBZ0JjLE9BQUssRUFBRTtBQUF2QixDQUR1QixFQUV2QjtBQUFFZCxNQUFJLEVBQUUsV0FBUjtBQUFxQmMsT0FBSyxFQUFFO0FBQTVCLENBRnVCLEVBR3ZCO0FBQUVkLE1BQUksRUFBRSxTQUFSO0FBQW1CYyxPQUFLLEVBQUU7QUFBMUIsQ0FIdUIsRUFJdkI7QUFBRWQsTUFBSSxFQUFFLFdBQVI7QUFBcUJjLE9BQUssRUFBRTtBQUE1QixDQUp1QixFQUt2QjtBQUFFZCxNQUFJLEVBQUUsTUFBUjtBQUFnQmMsT0FBSyxFQUFFO0FBQXZCLENBTHVCLEVBTXZCO0FBQUVkLE1BQUksRUFBRSxTQUFSO0FBQW1CYyxPQUFLLEVBQUU7QUFBMUIsQ0FOdUIsRUFPdkI7QUFBRWQsTUFBSSxFQUFFLFdBQVI7QUFBcUJjLE9BQUssRUFBRTtBQUE1QixDQVB1QixFQVF2QjtBQUFFZCxNQUFJLEVBQUUsUUFBUjtBQUFrQmMsT0FBSyxFQUFFO0FBQXpCLENBUnVCLEVBU3ZCO0FBQUVkLE1BQUksRUFBRSxVQUFSO0FBQW9CYyxPQUFLLEVBQUU7QUFBM0IsQ0FUdUIsRUFVdkI7QUFBRWQsTUFBSSxFQUFFLFFBQVI7QUFBa0JjLE9BQUssRUFBRTtBQUF6QixDQVZ1QixFQVd2QjtBQUFFZCxNQUFJLEVBQUUsUUFBUjtBQUFrQmMsT0FBSyxFQUFFO0FBQXpCLENBWHVCLEVBWXZCO0FBQUVkLE1BQUksRUFBRSxhQUFSO0FBQXVCYyxPQUFLLEVBQUU7QUFBOUIsQ0FadUIsRUFhdkI7QUFBRWQsTUFBSSxFQUFFLFNBQVI7QUFBbUJjLE9BQUssRUFBRTtBQUExQixDQWJ1QixFQWN2QjtBQUFFZCxNQUFJLEVBQUUsWUFBUjtBQUFzQmMsT0FBSyxFQUFFO0FBQTdCLENBZHVCLEVBZXZCO0FBQUVkLE1BQUksRUFBRSxXQUFSO0FBQXFCYyxPQUFLLEVBQUU7QUFBNUIsQ0FmdUIsRUFnQnZCO0FBQUVkLE1BQUksRUFBRSxRQUFSO0FBQWtCYyxPQUFLLEVBQUU7QUFBekIsQ0FoQnVCLEVBaUJ2QjtBQUFFZCxNQUFJLEVBQUUsU0FBUjtBQUFtQmMsT0FBSyxFQUFFO0FBQTFCLENBakJ1QixFQWtCdkI7QUFBRWQsTUFBSSxFQUFFLFNBQVI7QUFBbUJjLE9BQUssRUFBRTtBQUExQixDQWxCdUIsRUFtQnZCO0FBQUVkLE1BQUksRUFBRSxTQUFSO0FBQW1CYyxPQUFLLEVBQUU7QUFBMUIsQ0FuQnVCLEVBb0J2QjtBQUFFZCxNQUFJLEVBQUUsU0FBUjtBQUFtQmMsT0FBSyxFQUFFO0FBQTFCLENBcEJ1QixFQXFCdkI7QUFBRWQsTUFBSSxFQUFFLFFBQVI7QUFBa0JjLE9BQUssRUFBRTtBQUF6QixDQXJCdUIsRUFzQnZCO0FBQUVkLE1BQUksRUFBRSxTQUFSO0FBQW1CYyxPQUFLLEVBQUU7QUFBMUIsQ0F0QnVCLEVBdUJ2QjtBQUFFZCxNQUFJLEVBQUUsU0FBUjtBQUFtQmMsT0FBSyxFQUFFO0FBQTFCLENBdkJ1QixFQXdCdkI7QUFBRWQsTUFBSSxFQUFFLFNBQVI7QUFBbUJjLE9BQUssRUFBRTtBQUExQixDQXhCdUIsRUF5QnZCO0FBQUVkLE1BQUksRUFBRSxVQUFSO0FBQW9CYyxPQUFLLEVBQUU7QUFBM0IsQ0F6QnVCLEVBMEJ2QjtBQUFFZCxNQUFJLEVBQUUsVUFBUjtBQUFvQmMsT0FBSyxFQUFFO0FBQTNCLENBMUJ1QixFQTJCdkI7QUFBRWQsTUFBSSxFQUFFLE1BQVI7QUFBZ0JjLE9BQUssRUFBRTtBQUF2QixDQTNCdUIsRUE0QnZCO0FBQUVkLE1BQUksRUFBRSxPQUFSO0FBQWlCYyxPQUFLLEVBQUU7QUFBeEIsQ0E1QnVCLEVBNkJ2QjtBQUFFZCxNQUFJLEVBQUUscUJBQVI7QUFBK0JjLE9BQUssRUFBRTtBQUF0QyxDQTdCdUIsRUE4QnZCO0FBQUVkLE1BQUksRUFBRSxTQUFSO0FBQW1CYyxPQUFLLEVBQUU7QUFBMUIsQ0E5QnVCLEVBK0J2QjtBQUFFZCxNQUFJLEVBQUUsT0FBUjtBQUFpQmMsT0FBSyxFQUFFO0FBQXhCLENBL0J1QixFQWdDdkI7QUFBRWQsTUFBSSxFQUFFLFFBQVI7QUFBa0JjLE9BQUssRUFBRTtBQUF6QixDQWhDdUIsRUFpQ3ZCO0FBQUVkLE1BQUksRUFBRSxRQUFSO0FBQWtCYyxPQUFLLEVBQUU7QUFBekIsQ0FqQ3VCLEVBa0N2QjtBQUFFZCxNQUFJLEVBQUUsUUFBUjtBQUFrQmMsT0FBSyxFQUFFO0FBQXpCLENBbEN1QixFQW1DdkI7QUFBRWQsTUFBSSxFQUFFLFdBQVI7QUFBcUJjLE9BQUssRUFBRTtBQUE1QixDQW5DdUIsRUFvQ3ZCO0FBQUVkLE1BQUksRUFBRSxLQUFSO0FBQWVjLE9BQUssRUFBRTtBQUF0QixDQXBDdUIsRUFxQ3ZCO0FBQUVkLE1BQUksRUFBRSxPQUFSO0FBQWlCYyxPQUFLLEVBQUU7QUFBeEIsQ0FyQ3VCLEVBc0N2QjtBQUFFZCxNQUFJLEVBQUUsU0FBUjtBQUFtQmMsT0FBSyxFQUFFO0FBQTFCLENBdEN1QixFQXVDdkI7QUFBRWQsTUFBSSxFQUFFLFdBQVI7QUFBcUJjLE9BQUssRUFBRTtBQUE1QixDQXZDdUIsRUF3Q3ZCO0FBQUVkLE1BQUksRUFBRSxTQUFSO0FBQW1CYyxPQUFLLEVBQUU7QUFBMUIsQ0F4Q3VCLEVBeUN2QjtBQUFFZCxNQUFJLEVBQUUsVUFBUjtBQUFvQmMsT0FBSyxFQUFFO0FBQTNCLENBekN1QixFQTBDdkI7QUFBRWQsTUFBSSxFQUFFLFFBQVI7QUFBa0JjLE9BQUssRUFBRTtBQUF6QixDQTFDdUIsRUEyQ3ZCO0FBQUVkLE1BQUksRUFBRSxTQUFSO0FBQW1CYyxPQUFLLEVBQUU7QUFBMUIsQ0EzQ3VCLEVBNEN2QjtBQUFFZCxNQUFJLEVBQUUsT0FBUjtBQUFpQmMsT0FBSyxFQUFFO0FBQXhCLENBNUN1QixFQTZDdkI7QUFBRWQsTUFBSSxFQUFFLFNBQVI7QUFBbUJjLE9BQUssRUFBRTtBQUExQixDQTdDdUIsRUE4Q3ZCO0FBQUVkLE1BQUksRUFBRSxRQUFSO0FBQWtCYyxPQUFLLEVBQUU7QUFBekIsQ0E5Q3VCLEVBK0N2QjtBQUFFZCxNQUFJLEVBQUUsU0FBUjtBQUFtQmMsT0FBSyxFQUFFO0FBQTFCLENBL0N1QixFQWdEdkI7QUFBRWQsTUFBSSxFQUFFLFFBQVI7QUFBa0JjLE9BQUssRUFBRTtBQUF6QixDQWhEdUIsRUFpRHZCO0FBQUVkLE1BQUksRUFBRSxpQkFBUjtBQUEyQmMsT0FBSyxFQUFFO0FBQWxDLENBakR1QixFQWtEdkI7QUFBRWQsTUFBSSxFQUFFLE9BQVI7QUFBaUJjLE9BQUssRUFBRTtBQUF4QixDQWxEdUIsRUFtRHZCO0FBQUVkLE1BQUksRUFBRSxpQkFBUjtBQUEyQmMsT0FBSyxFQUFFO0FBQWxDLENBbkR1QixFQW9EdkI7QUFBRWQsTUFBSSxFQUFFLFVBQVI7QUFBb0JjLE9BQUssRUFBRTtBQUEzQixDQXBEdUIsRUFxRHZCO0FBQUVkLE1BQUksRUFBRSxTQUFSO0FBQW1CYyxPQUFLLEVBQUU7QUFBMUIsQ0FyRHVCLEVBc0R2QjtBQUFFZCxNQUFJLEVBQUUsVUFBUjtBQUFvQmMsT0FBSyxFQUFFO0FBQTNCLENBdER1QixFQXVEdkI7QUFBRWQsTUFBSSxFQUFFLE1BQVI7QUFBZ0JjLE9BQUssRUFBRTtBQUF2QixDQXZEdUIsRUF3RHZCO0FBQUVkLE1BQUksRUFBRSxPQUFSO0FBQWlCYyxPQUFLLEVBQUU7QUFBeEIsQ0F4RHVCLEVBeUR2QjtBQUFFZCxNQUFJLEVBQUUsUUFBUjtBQUFrQmMsT0FBSyxFQUFFO0FBQXpCLENBekR1QixFQTBEdkI7QUFBRWQsTUFBSSxFQUFFLE9BQVI7QUFBaUJjLE9BQUssRUFBRTtBQUF4QixDQTFEdUIsRUEyRHZCO0FBQUVkLE1BQUksRUFBRSxXQUFSO0FBQXFCYyxPQUFLLEVBQUU7QUFBNUIsQ0EzRHVCLEVBNER2QjtBQUFFZCxNQUFJLEVBQUUsVUFBUjtBQUFvQmMsT0FBSyxFQUFFO0FBQTNCLENBNUR1QixFQTZEdkI7QUFBRWQsTUFBSSxFQUFFLFNBQVI7QUFBbUJjLE9BQUssRUFBRTtBQUExQixDQTdEdUIsRUE4RHZCO0FBQUVkLE1BQUksRUFBRSxXQUFSO0FBQXFCYyxPQUFLLEVBQUU7QUFBNUIsQ0E5RHVCLEVBK0R2QjtBQUFFZCxNQUFJLEVBQUUsVUFBUjtBQUFvQmMsT0FBSyxFQUFFO0FBQTNCLENBL0R1QixFQWdFdkI7QUFBRWQsTUFBSSxFQUFFLFFBQVI7QUFBa0JjLE9BQUssRUFBRTtBQUF6QixDQWhFdUIsRUFpRXZCO0FBQUVkLE1BQUksRUFBRSxhQUFSO0FBQXVCYyxPQUFLLEVBQUU7QUFBOUIsQ0FqRXVCLEVBa0V2QjtBQUFFZCxNQUFJLEVBQUUsWUFBUjtBQUFzQmMsT0FBSyxFQUFFO0FBQTdCLENBbEV1QixFQW1FdkI7QUFBRWQsTUFBSSxFQUFFLGFBQVI7QUFBdUJjLE9BQUssRUFBRTtBQUE5QixDQW5FdUIsRUFvRXZCO0FBQUVkLE1BQUksRUFBRSxNQUFSO0FBQWdCYyxPQUFLLEVBQUU7QUFBdkIsQ0FwRXVCLEVBcUV2QjtBQUFFZCxNQUFJLEVBQUUsWUFBUjtBQUFzQmMsT0FBSyxFQUFFO0FBQTdCLENBckV1QixFQXNFdkI7QUFBRWQsTUFBSSxFQUFFLFNBQVI7QUFBbUJjLE9BQUssRUFBRTtBQUExQixDQXRFdUIsRUF1RXZCO0FBQUVkLE1BQUksRUFBRSxLQUFSO0FBQWVjLE9BQUssRUFBRTtBQUF0QixDQXZFdUIsRUF3RXZCO0FBQUVkLE1BQUksRUFBRSxXQUFSO0FBQXFCYyxPQUFLLEVBQUU7QUFBNUIsQ0F4RXVCLEVBeUV2QjtBQUFFZCxNQUFJLEVBQUUsU0FBUjtBQUFtQmMsT0FBSyxFQUFFO0FBQTFCLENBekV1QixFQTBFdkI7QUFBRWQsTUFBSSxFQUFFLFdBQVI7QUFBcUJjLE9BQUssRUFBRTtBQUE1QixDQTFFdUIsRUEyRXZCO0FBQUVkLE1BQUksRUFBRSxVQUFSO0FBQW9CYyxPQUFLLEVBQUU7QUFBM0IsQ0EzRXVCLEVBNEV2QjtBQUFFZCxNQUFJLEVBQUUsVUFBUjtBQUFvQmMsT0FBSyxFQUFFO0FBQTNCLENBNUV1QixFQTZFdkI7QUFBRWQsTUFBSSxFQUFFLFVBQVI7QUFBb0JjLE9BQUssRUFBRTtBQUEzQixDQTdFdUIsRUE4RXZCO0FBQUVkLE1BQUksRUFBRSxPQUFSO0FBQWlCYyxPQUFLLEVBQUU7QUFBeEIsQ0E5RXVCLEVBK0V2QjtBQUFFZCxNQUFJLEVBQUUsUUFBUjtBQUFrQmMsT0FBSyxFQUFFO0FBQXpCLENBL0V1QixFQWdGdkI7QUFBRWQsTUFBSSxFQUFFLFVBQVI7QUFBb0JjLE9BQUssRUFBRTtBQUEzQixDQWhGdUIsRUFpRnZCO0FBQUVkLE1BQUksRUFBRSxRQUFSO0FBQWtCYyxPQUFLLEVBQUU7QUFBekIsQ0FqRnVCLEVBa0Z2QjtBQUFFZCxNQUFJLEVBQUUsYUFBUjtBQUF1QmMsT0FBSyxFQUFFO0FBQTlCLENBbEZ1QixFQW1GdkI7QUFBRWQsTUFBSSxFQUFFLE9BQVI7QUFBaUJjLE9BQUssRUFBRTtBQUF4QixDQW5GdUIsRUFvRnZCO0FBQUVkLE1BQUksRUFBRSxTQUFSO0FBQW1CYyxPQUFLLEVBQUU7QUFBMUIsQ0FwRnVCLEVBcUZ2QjtBQUFFZCxNQUFJLEVBQUUsUUFBUjtBQUFrQmMsT0FBSyxFQUFFO0FBQXpCLENBckZ1QixFQXNGdkI7QUFBRWQsTUFBSSxFQUFFLFFBQVI7QUFBa0JjLE9BQUssRUFBRTtBQUF6QixDQXRGdUIsRUF1RnZCO0FBQUVkLE1BQUksRUFBRSxVQUFSO0FBQW9CYyxPQUFLLEVBQUU7QUFBM0IsQ0F2RnVCLEVBd0Z2QjtBQUFFZCxNQUFJLEVBQUUsU0FBUjtBQUFtQmMsT0FBSyxFQUFFO0FBQTFCLENBeEZ1QixFQXlGdkI7QUFBRWQsTUFBSSxFQUFFLE1BQVI7QUFBZ0JjLE9BQUssRUFBRTtBQUF2QixDQXpGdUIsRUEwRnZCO0FBQUVkLE1BQUksRUFBRSxTQUFSO0FBQW1CYyxPQUFLLEVBQUU7QUFBMUIsQ0ExRnVCLEVBMkZ2QjtBQUFFZCxNQUFJLEVBQUUsU0FBUjtBQUFtQmMsT0FBSyxFQUFFO0FBQTFCLENBM0Z1QixFQTRGdkI7QUFBRWQsTUFBSSxFQUFFLE9BQVI7QUFBaUJjLE9BQUssRUFBRTtBQUF4QixDQTVGdUIsRUE2RnZCO0FBQUVkLE1BQUksRUFBRSxlQUFSO0FBQXlCYyxPQUFLLEVBQUU7QUFBaEMsQ0E3RnVCLEVBOEZ2QjtBQUFFZCxNQUFJLEVBQUUsT0FBUjtBQUFpQmMsT0FBSyxFQUFFO0FBQXhCLENBOUZ1QixFQStGdkI7QUFBRWQsTUFBSSxFQUFFLFlBQVI7QUFBc0JjLE9BQUssRUFBRTtBQUE3QixDQS9GdUIsRUFnR3ZCO0FBQUVkLE1BQUksRUFBRSxTQUFSO0FBQW1CYyxPQUFLLEVBQUU7QUFBMUIsQ0FoR3VCLEVBaUd2QjtBQUFFZCxNQUFJLEVBQUUsS0FBUjtBQUFlYyxPQUFLLEVBQUU7QUFBdEIsQ0FqR3VCLEVBa0d2QjtBQUFFZCxNQUFJLEVBQUUsWUFBUjtBQUFzQmMsT0FBSyxFQUFFO0FBQTdCLENBbEd1QixFQW1HdkI7QUFBRWQsTUFBSSxFQUFFLE1BQVI7QUFBZ0JjLE9BQUssRUFBRTtBQUF2QixDQW5HdUIsRUFvR3ZCO0FBQUVkLE1BQUksRUFBRSxTQUFSO0FBQW1CYyxPQUFLLEVBQUU7QUFBMUIsQ0FwR3VCLEVBcUd2QjtBQUFFZCxNQUFJLEVBQUUsVUFBUjtBQUFvQmMsT0FBSyxFQUFFO0FBQTNCLENBckd1QixFQXNHdkI7QUFBRWQsTUFBSSxFQUFFLGFBQVI7QUFBdUJjLE9BQUssRUFBRTtBQUE5QixDQXRHdUIsRUF1R3ZCO0FBQUVkLE1BQUksRUFBRSxPQUFSO0FBQWlCYyxPQUFLLEVBQUU7QUFBeEIsQ0F2R3VCLEVBd0d2QjtBQUFFZCxNQUFJLEVBQUUsWUFBUjtBQUFzQmMsT0FBSyxFQUFFO0FBQTdCLENBeEd1QixFQXlHdkI7QUFBRWQsTUFBSSxFQUFFLFdBQVI7QUFBcUJjLE9BQUssRUFBRTtBQUE1QixDQXpHdUIsRUEwR3ZCO0FBQUVkLE1BQUksRUFBRSxXQUFSO0FBQXFCYyxPQUFLLEVBQUU7QUFBNUIsQ0ExR3VCLEVBMkd2QjtBQUFFZCxNQUFJLEVBQUUsV0FBUjtBQUFxQmMsT0FBSyxFQUFFO0FBQTVCLENBM0d1QixFQTRHdkI7QUFBRWQsTUFBSSxFQUFFLFNBQVI7QUFBbUJjLE9BQUssRUFBRTtBQUExQixDQTVHdUIsRUE2R3ZCO0FBQUVkLE1BQUksRUFBRSxPQUFSO0FBQWlCYyxPQUFLLEVBQUU7QUFBeEIsQ0E3R3VCLEVBOEd2QjtBQUFFZCxNQUFJLEVBQUUsU0FBUjtBQUFtQmMsT0FBSyxFQUFFO0FBQTFCLENBOUd1QixFQStHdkI7QUFBRWQsTUFBSSxFQUFFLFNBQVI7QUFBbUJjLE9BQUssRUFBRTtBQUExQixDQS9HdUIsRUFnSHZCO0FBQUVkLE1BQUksRUFBRSxPQUFSO0FBQWlCYyxPQUFLLEVBQUU7QUFBeEIsQ0FoSHVCLEVBaUh2QjtBQUFFZCxNQUFJLEVBQUUsa0JBQVI7QUFBNEJjLE9BQUssRUFBRTtBQUFuQyxDQWpIdUIsRUFrSHZCO0FBQUVkLE1BQUksRUFBRSxlQUFSO0FBQXlCYyxPQUFLLEVBQUU7QUFBaEMsQ0FsSHVCLEVBbUh2QjtBQUFFZCxNQUFJLEVBQUUsUUFBUjtBQUFrQmMsT0FBSyxFQUFFO0FBQXpCLENBbkh1QixFQW9IdkI7QUFBRWQsTUFBSSxFQUFFLFFBQVI7QUFBa0JjLE9BQUssRUFBRTtBQUF6QixDQXBIdUIsRUFxSHZCO0FBQUVkLE1BQUksRUFBRSxPQUFSO0FBQWlCYyxPQUFLLEVBQUU7QUFBeEIsQ0FySHVCLEVBc0h2QjtBQUFFZCxNQUFJLEVBQUUsbUJBQVI7QUFBNkJjLE9BQUssRUFBRTtBQUFwQyxDQXRIdUIsRUF1SHZCO0FBQUVkLE1BQUksRUFBRSxXQUFSO0FBQXFCYyxPQUFLLEVBQUU7QUFBNUIsQ0F2SHVCLEVBd0h2QjtBQUFFZCxNQUFJLEVBQUUsZUFBUjtBQUF5QmMsT0FBSyxFQUFFO0FBQWhDLENBeEh1QixFQXlIdkI7QUFBRWQsTUFBSSxFQUFFLFFBQVI7QUFBa0JjLE9BQUssRUFBRTtBQUF6QixDQXpIdUIsRUEwSHZCO0FBQUVkLE1BQUksRUFBRSxVQUFSO0FBQW9CYyxPQUFLLEVBQUU7QUFBM0IsQ0ExSHVCLEVBMkh2QjtBQUFFZCxNQUFJLEVBQUUsU0FBUjtBQUFtQmMsT0FBSyxFQUFFO0FBQTFCLENBM0h1QixFQTRIdkI7QUFBRWQsTUFBSSxFQUFFLFFBQVI7QUFBa0JjLE9BQUssRUFBRTtBQUF6QixDQTVIdUIsRUE2SHZCO0FBQUVkLE1BQUksRUFBRSxPQUFSO0FBQWlCYyxPQUFLLEVBQUU7QUFBeEIsQ0E3SHVCLEVBOEh2QjtBQUFFZCxNQUFJLEVBQUUsT0FBUjtBQUFpQmMsT0FBSyxFQUFFO0FBQXhCLENBOUh1QixFQStIdkI7QUFBRWQsTUFBSSxFQUFFLFVBQVI7QUFBb0JjLE9BQUssRUFBRTtBQUEzQixDQS9IdUIsRUFnSXZCO0FBQUVkLE1BQUksRUFBRSxTQUFSO0FBQW1CYyxPQUFLLEVBQUU7QUFBMUIsQ0FoSXVCLEVBaUl2QjtBQUFFZCxNQUFJLEVBQUUsTUFBUjtBQUFnQmMsT0FBSyxFQUFFO0FBQXZCLENBakl1QixFQWtJdkI7QUFBRWQsTUFBSSxFQUFFLFFBQVI7QUFBa0JjLE9BQUssRUFBRTtBQUF6QixDQWxJdUIsRUFtSXZCO0FBQUVkLE1BQUksRUFBRSxRQUFSO0FBQWtCYyxPQUFLLEVBQUU7QUFBekIsQ0FuSXVCLEVBb0l2QjtBQUFFZCxNQUFJLEVBQUUsWUFBUjtBQUFzQmMsT0FBSyxFQUFFO0FBQTdCLENBcEl1QixFQXFJdkI7QUFBRWQsTUFBSSxFQUFFLFNBQVI7QUFBbUJjLE9BQUssRUFBRTtBQUExQixDQXJJdUIsRUFzSXZCO0FBQUVkLE1BQUksRUFBRSxZQUFSO0FBQXNCYyxPQUFLLEVBQUU7QUFBN0IsQ0F0SXVCLEVBdUl2QjtBQUFFZCxNQUFJLEVBQUUsU0FBUjtBQUFtQmMsT0FBSyxFQUFFO0FBQTFCLENBdkl1QixFQXdJdkI7QUFBRWQsTUFBSSxFQUFFLFNBQVI7QUFBbUJjLE9BQUssRUFBRTtBQUExQixDQXhJdUIsRUF5SXZCO0FBQUVkLE1BQUksRUFBRSxVQUFSO0FBQW9CYyxPQUFLLEVBQUU7QUFBM0IsQ0F6SXVCLEVBMEl2QjtBQUFFZCxNQUFJLEVBQUUsU0FBUjtBQUFtQmMsT0FBSyxFQUFFO0FBQTFCLENBMUl1QixFQTJJdkI7QUFBRWQsTUFBSSxFQUFFLGFBQVI7QUFBdUJjLE9BQUssRUFBRTtBQUE5QixDQTNJdUIsRUE0SXZCO0FBQUVkLE1BQUksRUFBRSxVQUFSO0FBQW9CYyxPQUFLLEVBQUU7QUFBM0IsQ0E1SXVCLEVBNkl2QjtBQUFFZCxNQUFJLEVBQUUsV0FBUjtBQUFxQmMsT0FBSyxFQUFFO0FBQTVCLENBN0l1QixFQThJdkI7QUFBRWQsTUFBSSxFQUFFLFFBQVI7QUFBa0JjLE9BQUssRUFBRTtBQUF6QixDQTlJdUIsRUErSXZCO0FBQUVkLE1BQUksRUFBRSxlQUFSO0FBQXlCYyxPQUFLLEVBQUU7QUFBaEMsQ0EvSXVCLEVBZ0p2QjtBQUFFZCxNQUFJLEVBQUUsT0FBUjtBQUFpQmMsT0FBSyxFQUFFO0FBQXhCLENBaEp1QixFQWlKdkI7QUFBRWQsTUFBSSxFQUFFLGdCQUFSO0FBQTBCYyxPQUFLLEVBQUU7QUFBakMsQ0FqSnVCLEVBa0p2QjtBQUFFZCxNQUFJLEVBQUUsV0FBUjtBQUFxQmMsT0FBSyxFQUFFO0FBQTVCLENBbEp1QixFQW1KdkI7QUFBRWQsTUFBSSxFQUFFLFFBQVI7QUFBa0JjLE9BQUssRUFBRTtBQUF6QixDQW5KdUIsRUFvSnZCO0FBQUVkLE1BQUksRUFBRSxXQUFSO0FBQXFCYyxPQUFLLEVBQUU7QUFBNUIsQ0FwSnVCLEVBcUp2QjtBQUFFZCxNQUFJLEVBQUUsUUFBUjtBQUFrQmMsT0FBSyxFQUFFO0FBQXpCLENBckp1QixFQXNKdkI7QUFBRWQsTUFBSSxFQUFFLE9BQVI7QUFBaUJjLE9BQUssRUFBRTtBQUF4QixDQXRKdUIsRUF1SnZCO0FBQUVkLE1BQUksRUFBRSxRQUFSO0FBQWtCYyxPQUFLLEVBQUU7QUFBekIsQ0F2SnVCLEVBd0p2QjtBQUFFZCxNQUFJLEVBQUUsVUFBUjtBQUFvQmMsT0FBSyxFQUFFO0FBQTNCLENBeEp1QixFQXlKdkI7QUFBRWQsTUFBSSxFQUFFLFNBQVI7QUFBbUJjLE9BQUssRUFBRTtBQUExQixDQXpKdUIsRUEwSnZCO0FBQUVkLE1BQUksRUFBRSxPQUFSO0FBQWlCYyxPQUFLLEVBQUU7QUFBeEIsQ0ExSnVCLEVBMkp2QjtBQUFFZCxNQUFJLEVBQUUsT0FBUjtBQUFpQmMsT0FBSyxFQUFFO0FBQXhCLENBM0p1QixFQTRKdkI7QUFBRWQsTUFBSSxFQUFFLFdBQVI7QUFBcUJjLE9BQUssRUFBRTtBQUE1QixDQTVKdUIsRUE2SnZCO0FBQUVkLE1BQUksRUFBRSxTQUFSO0FBQW1CYyxPQUFLLEVBQUU7QUFBMUIsQ0E3SnVCLEVBOEp2QjtBQUFFZCxNQUFJLEVBQUUsU0FBUjtBQUFtQmMsT0FBSyxFQUFFO0FBQTFCLENBOUp1QixFQStKdkI7QUFBRWQsTUFBSSxFQUFFLE9BQVI7QUFBaUJjLE9BQUssRUFBRTtBQUF4QixDQS9KdUIsRUFnS3ZCO0FBQUVkLE1BQUksRUFBRSxRQUFSO0FBQWtCYyxPQUFLLEVBQUU7QUFBekIsQ0FoS3VCLEVBaUt2QjtBQUFFZCxNQUFJLEVBQUUsT0FBUjtBQUFpQmMsT0FBSyxFQUFFO0FBQXhCLENBakt1QixFQWtLdkI7QUFBRWQsTUFBSSxFQUFFLE1BQVI7QUFBZ0JjLE9BQUssRUFBRTtBQUF2QixDQWxLdUIsRUFtS3ZCO0FBQUVkLE1BQUksRUFBRSxVQUFSO0FBQW9CYyxPQUFLLEVBQUU7QUFBM0IsQ0FuS3VCLEVBb0t2QjtBQUFFZCxNQUFJLEVBQUUsU0FBUjtBQUFtQmMsT0FBSyxFQUFFO0FBQTFCLENBcEt1QixFQXFLdkI7QUFBRWQsTUFBSSxFQUFFLFNBQVI7QUFBbUJjLE9BQUssRUFBRTtBQUExQixDQXJLdUIsRUFzS3ZCO0FBQUVkLE1BQUksRUFBRSxRQUFSO0FBQWtCYyxPQUFLLEVBQUU7QUFBekIsQ0F0S3VCLEVBdUt2QjtBQUFFZCxNQUFJLEVBQUUsT0FBUjtBQUFpQmMsT0FBSyxFQUFFO0FBQXhCLENBdkt1QixFQXdLdkI7QUFBRWQsTUFBSSxFQUFFLFNBQVI7QUFBbUJjLE9BQUssRUFBRTtBQUExQixDQXhLdUIsRUF5S3ZCO0FBQUVkLE1BQUksRUFBRSxRQUFSO0FBQWtCYyxPQUFLLEVBQUU7QUFBekIsQ0F6S3VCLEVBMEt2QjtBQUFFZCxNQUFJLEVBQUUsT0FBUjtBQUFpQmMsT0FBSyxFQUFFO0FBQXhCLENBMUt1QixFQTJLdkI7QUFBRWQsTUFBSSxFQUFFLEtBQVI7QUFBZWMsT0FBSyxFQUFFO0FBQXRCLENBM0t1QixFQTRLdkI7QUFBRWQsTUFBSSxFQUFFLFVBQVI7QUFBb0JjLE9BQUssRUFBRTtBQUEzQixDQTVLdUIsRUE2S3ZCO0FBQUVkLE1BQUksRUFBRSxRQUFSO0FBQWtCYyxPQUFLLEVBQUU7QUFBekIsQ0E3S3VCLEVBOEt2QjtBQUFFZCxNQUFJLEVBQUUsV0FBUjtBQUFxQmMsT0FBSyxFQUFFO0FBQTVCLENBOUt1QixFQStLdkI7QUFBRWQsTUFBSSxFQUFFLE1BQVI7QUFBZ0JjLE9BQUssRUFBRTtBQUF2QixDQS9LdUIsRUFnTHZCO0FBQUVkLE1BQUksRUFBRSxPQUFSO0FBQWlCYyxPQUFLLEVBQUU7QUFBeEIsQ0FoTHVCLEVBaUx2QjtBQUFFZCxNQUFJLEVBQUUsT0FBUjtBQUFpQmMsT0FBSyxFQUFFO0FBQXhCLENBakx1QixFQWtMdkI7QUFBRWQsTUFBSSxFQUFFLGFBQVI7QUFBdUJjLE9BQUssRUFBRTtBQUE5QixDQWxMdUIsRUFtTHZCO0FBQUVkLE1BQUksRUFBRSxTQUFSO0FBQW1CYyxPQUFLLEVBQUU7QUFBMUIsQ0FuTHVCLEVBb0x2QjtBQUFFZCxNQUFJLEVBQUUsU0FBUjtBQUFtQmMsT0FBSyxFQUFFO0FBQTFCLENBcEx1QixFQXFMdkI7QUFBRWQsTUFBSSxFQUFFLE9BQVI7QUFBaUJjLE9BQUssRUFBRTtBQUF4QixDQXJMdUIsRUFzTHZCO0FBQUVkLE1BQUksRUFBRSxPQUFSO0FBQWlCYyxPQUFLLEVBQUU7QUFBeEIsQ0F0THVCLEVBdUx2QjtBQUFFZCxNQUFJLEVBQUUsU0FBUjtBQUFtQmMsT0FBSyxFQUFFO0FBQTFCLENBdkx1QixFQXdMdkI7QUFBRWQsTUFBSSxFQUFFLFFBQVI7QUFBa0JjLE9BQUssRUFBRTtBQUF6QixDQXhMdUIsRUF5THZCO0FBQUVkLE1BQUksRUFBRSxRQUFSO0FBQWtCYyxPQUFLLEVBQUU7QUFBekIsQ0F6THVCLEVBMEx2QjtBQUFFZCxNQUFJLEVBQUUsU0FBUjtBQUFtQmMsT0FBSyxFQUFFO0FBQTFCLENBMUx1QixFQTJMdkI7QUFBRWQsTUFBSSxFQUFFLE1BQVI7QUFBZ0JjLE9BQUssRUFBRTtBQUF2QixDQTNMdUIsQ0FBbEI7QUE4TEEsTUFBTTRGLE1BQU0sR0FBRyxDQUNwQjtBQUFFMUcsTUFBSSxFQUFFLGFBQVI7QUFBdUJjLE9BQUssRUFBRTtBQUE5QixDQURvQixFQUVwQjtBQUFFZCxNQUFJLEVBQUUsV0FBUjtBQUFxQmMsT0FBSyxFQUFFO0FBQTVCLENBRm9CLEVBR3BCO0FBQUVkLE1BQUksRUFBRSxXQUFSO0FBQXFCYyxPQUFLLEVBQUU7QUFBNUIsQ0FIb0IsQ0FBZixDLENBTVA7O0FBQ08sTUFBTW1VLFdBQVcsR0FBRyxhQUFwQjtBQUNBLE1BQU1DLEtBQUssR0FBRyxPQUFkO0FBQ0EsTUFBTUMsUUFBUSxHQUFHLFVBQWpCO0FBRUEsTUFBTTdELFNBQVMsR0FBRyxXQUFsQjtBQUNBLE1BQU11QyxnQkFBZ0IsR0FBRyxrQkFBekI7QUFDQSxNQUFNSyxvQkFBb0IsR0FBRyxzQkFBN0I7QUFDQSxNQUFNekMsU0FBUyxHQUFHLFdBQWxCO0FBQ0EsTUFBTWEsVUFBVSxHQUFHLFlBQW5CO0FBRUEsTUFBTVUsV0FBVyxHQUFHLGFBQXBCO0FBQ0EsTUFBTVIsV0FBVyxHQUFHLGFBQXBCO0FBQ0EsTUFBTWEsWUFBWSxHQUFHLGNBQXJCO0FBQ0EsTUFBTUssWUFBWSxHQUFHLGNBQXJCO0FBRUEsTUFBTXBFLGFBQWEsR0FBRyxlQUF0QjtBQUNBLE1BQU1KLGFBQWEsR0FBRyxlQUF0QjtBQUNBLE1BQU1xQixjQUFjLEdBQUcsZ0JBQXZCO0FBQ0EsTUFBTVEsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsTUFBTWlELGtCQUFrQixHQUFHLG9CQUEzQjtBQUNBLE1BQU0zQyx1QkFBdUIsR0FBRyx5QkFBaEM7QUFFQSxNQUFNK0Qsb0JBQW9CLEdBQUcsc0JBQTdCO0FBQ0EsTUFBTUMsYUFBYSxHQUFHLGVBQXRCO0FBRUEsTUFBTTlELGNBQWMsR0FBRyxnQkFBdkIsQzs7Ozs7Ozs7Ozs7QUN2UFAsOEM7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0MiLCJmaWxlIjoicGFnZXMvc3RvcnkvW2lkXS9lZGl0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9zdG9yeS9baWRdL2VkaXQuanNcIik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFJvdywgQ29sLCBGb3JtLCBJbnB1dCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBpc0ltYWdlVXJsIGZyb20gXCJpcy1pbWFnZS11cmxcIjtcclxuXHJcbmltcG9ydCBVcGxvYWRJbWFnZSBmcm9tIFwiLi9VcGxvYWRJbWFnZVwiO1xyXG5cclxuY29uc3QgSW1hZ2VSb3cgPSAoeyBmb3JtLCBpdGVtSW1hZ2UsIG5hbWUgfSkgPT4ge1xyXG4gIGNvbnN0IFtsaW5rVmlzaWJsZSwgc2V0TGlua1Zpc2libGVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt1cGxvYWRWaXNpYmxlLCBzZXRVcGxvYWRWaXNpYmxlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3Qgc2hvd0xpbmsgPSAoKSA9PiB7XHJcbiAgICBmb3JtLnNldEZpZWxkc1ZhbHVlKHsgW25hbWVdOiBudWxsIH0pO1xyXG4gICAgc2V0TGlua1Zpc2libGUodHJ1ZSk7XHJcbiAgICBzZXRVcGxvYWRWaXNpYmxlKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzaG93VXBsb2FkID0gKCkgPT4ge1xyXG4gICAgZm9ybS5zZXRGaWVsZHNWYWx1ZSh7IFtuYW1lXTogbnVsbCB9KTtcclxuICAgIHNldExpbmtWaXNpYmxlKGZhbHNlKTtcclxuICAgIHNldFVwbG9hZFZpc2libGUodHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHshdXBsb2FkVmlzaWJsZSAmJiAhbGlua1Zpc2libGUgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXBsb2FkLWJ0bnNcIj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17c2hvd1VwbG9hZH0gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cInVwbG9hZC1idG5cIj5cclxuICAgICAgICAgICAgVXBsb2FkIGEgY292ZXJcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17c2hvd0xpbmt9IHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJ1cGxvYWQtYnRuXCI+XHJcbiAgICAgICAgICAgIFN1Ym1pdCBhIGxpbmsgdG8gYSBjb3ZlclxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICAgIHt1cGxvYWRWaXNpYmxlICYmIChcclxuICAgICAgICA8Um93IGFsaWduPVwiYm90dG9tXCIgZ3V0dGVyPXtbMjQsIDI0XX0+XHJcbiAgICAgICAgICA8Q29sIG1kPXsxMn0gc209ezI0fSB4cz17MjR9PlxyXG4gICAgICAgICAgICA8VXBsb2FkSW1hZ2UgbmFtZT17bmFtZX0gZm9ybT17Zm9ybX0gaW1hZ2U9e2l0ZW1JbWFnZX0gLz5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPENvbCBtZD17MTJ9IHNtPXsyNH0geHM9ezI0fT5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzaG93TGlua30gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cInVwbG9hZC1idG5cIj5cclxuICAgICAgICAgICAgICBPUiBTdWJtaXQgYSBsaW5rIHRvIGEgY292ZXJcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgKX1cclxuICAgICAge2xpbmtWaXNpYmxlICYmIChcclxuICAgICAgICA8Um93IGFsaWduPVwiYm90dG9tXCIgZ3V0dGVyPXtbMjQsIDI0XX0+XHJcbiAgICAgICAgICA8Q29sIHNtPXsyNH0geHM9ezI0fSBtZD17MTJ9IGxnPXsxMn0+XHJcbiAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICB0eXBlOiBcInVybFwiLFxyXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIlRoaXMgZmllbGQgbXVzdCBiZSBhIHZhbGlkIHVybC5cIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAoKSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgICB2YWxpZGF0b3IoXywgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNJbWFnZVVybCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgbmV3IEVycm9yKFwiVGhlIGxpbmsgbmVlZHMgdG8gYmUgYW4gaW1hZ2VcIilcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICBsYWJlbD1cIlN1Ym1pdCBhIGxpbmsgdG8geW91ciBpbWFnZVwiXHJcbiAgICAgICAgICAgICAgbmFtZT17bmFtZX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPENvbCBtZD17MTJ9IHNtPXsyNH0geHM9ezI0fT5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzaG93VXBsb2FkfSB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwidXBsb2FkLWJ0blwiPlxyXG4gICAgICAgICAgICAgIFVwbG9hZCBhIGNvdmVyXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VSb3c7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRm9ybSwgQ29sLCBSb3csIFNlbGVjdCwgRGl2aWRlciB9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5jb25zdCB7IE9wdGlvbiB9ID0gU2VsZWN0O1xyXG5cclxuY29uc3QgSXRlbVNlbGVjdG9yID0gKHtcclxuICBpdGVtLFxyXG4gIHN1YmplY3QsXHJcbiAgZm9ybSxcclxuICBhcnJJbkZvcm0sXHJcbiAgbGFiZWwsXHJcbiAgdHlwZSxcclxuICBsZzEsXHJcbiAgc3ViamVjdFR5cGUsXHJcbn0pID0+IHtcclxuICBjb25zdCBbY3VycmVudENoYXIsIHNldEN1cnJlbnRDaGFyXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjdXJyZW50TG9jLCBzZXRDdXJyZW50TG9jXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtzZWxlY3RlZFN1YmplY3RzLCBzZXRTZWxlY3RlZFN1YmplY3RzXSA9IFJlYWN0LnVzZVN0YXRlKFxyXG4gICAgaXRlbSA/IHN1YmplY3QuZmlsdGVyKChjKSA9PiBpdGVtLmluY2x1ZGVzKGMuaWQpKSA6IFtdXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgYWRkQ2hhcmFjdGVyID0gKGN1cnJlbnQsIHNldEN1cnJlbnQpID0+IHtcclxuICAgIGlmICh0eXBlID09PSBcInN0b3J5XCIgJiYgZm9ybS5nZXRGaWVsZFZhbHVlKGFyckluRm9ybSk/Lmxlbmd0aCA9PT0gNSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGN1cnJlbnQgJiYgZm9ybS5nZXRGaWVsZFZhbHVlKGFyckluRm9ybSk/LmluZGV4T2YoY3VycmVudCkgPT09IC0xKSB7XHJcbiAgICAgIHNldFNlbGVjdGVkU3ViamVjdHMoW1xyXG4gICAgICAgIC4uLnNlbGVjdGVkU3ViamVjdHMsXHJcbiAgICAgICAgc3ViamVjdC5maW5kKChjKSA9PiBjLmlkID09PSBjdXJyZW50KSxcclxuICAgICAgXSk7XHJcbiAgICAgIGZvcm0uc2V0RmllbGRzVmFsdWUoe1xyXG4gICAgICAgIFthcnJJbkZvcm1dOiBbLi4uZm9ybS5nZXRGaWVsZFZhbHVlKGFyckluRm9ybSksIGN1cnJlbnRdLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRDdXJyZW50KFwiXCIpO1xyXG4gICAgZm9ybS5zZXRGaWVsZHNWYWx1ZSh7IFtjdXJyZW50XTogXCJcIiB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW1vdmVDaGFyYWN0ZXIgPSAoaWQpID0+IHtcclxuICAgIGZvcm0uc2V0RmllbGRzVmFsdWUoe1xyXG4gICAgICBbYXJySW5Gb3JtXTogZm9ybS5nZXRGaWVsZFZhbHVlKGFyckluRm9ybSkuZmlsdGVyKChjKSA9PiBjICE9PSBpZCksXHJcbiAgICB9KTtcclxuICAgIHNldFNlbGVjdGVkU3ViamVjdHMoc2VsZWN0ZWRTdWJqZWN0cy5maWx0ZXIoKGMpID0+IGMuaWQgIT09IGlkKSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtLkl0ZW0gbmFtZT17YXJySW5Gb3JtfSBsYWJlbD17bGFiZWx9PlxyXG4gICAgICA8Um93IGd1dHRlcj17WzI0LCAyNF19PlxyXG4gICAgICAgIDxDb2wgbGc9e2xnMX0gbWQ9ezI0fSBzbT17MjR9IHhzPXsyNH0+XHJcbiAgICAgICAgICA8Um93IGd1dHRlcj17MTZ9PlxyXG4gICAgICAgICAgICA8Q29sIHNwYW49ezIyfT5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICBuYW1lPXtcclxuICAgICAgICAgICAgICAgICAgc3ViamVjdFR5cGUgPT09IFwiY2hhcmFjdGVyc1wiID8gXCJjdXJyZW50Q2hhclwiIDogXCJjdXJyZW50TG9jXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtLmdldEZpZWxkVmFsdWUoYXJySW5Gb3JtKT8ubGVuZ3RoID49IDUgJiZcclxuICAgICAgICAgICAgICAgICAgICB0eXBlID09PSBcInN0b3J5XCJcclxuICAgICAgICAgICAgICAgICAgICAgID8gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIHN1YmplY3RUeXBlID09PSBcImNoYXJhY3RlcnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPyBzZXRDdXJyZW50Q2hhcih2YWwpXHJcbiAgICAgICAgICAgICAgICAgICAgICA6IHNldEN1cnJlbnRMb2ModmFsKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJub25lXCIgZGlzYWJsZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgQ2hvb3NlXHJcbiAgICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICB7c3ViamVjdFxyXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAoYykgPT4gZm9ybS5nZXRGaWVsZFZhbHVlKGFyckluRm9ybSk/LmluZGV4T2YoYy5pZCkgPT09IC0xXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgID8uc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5QSA9IGEuZmlyc3RuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlCID0gYi5maXJzdG5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAvLyBDb21wYXJlIHRoZSAyIGRhdGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoa2V5QSA8IGtleUIpIHJldHVybiAtMTtcclxuICAgICAgICAgICAgICAgICAgICAgIGlmIChrZXlBID4ga2V5QikgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoKGNoYXIpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24ga2V5PXtjaGFyLmlkfSB2YWx1ZT17Y2hhci5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzdWJqZWN0VHlwZSA9PT0gXCJjaGFyYWN0ZXJzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IGAke2NoYXIuZmlyc3RuYW1lfSAke2NoYXIubGFzdG5hbWV9YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogY2hhci5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgc3Bhbj17Mn0+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VsZWN0LWFkZC1pbnB1dC1pY29uYm94XCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgIHN1YmplY3RUeXBlID09PSBcImNoYXJhY3RlcnNcIlxyXG4gICAgICAgICAgICAgICAgICAgID8gYWRkQ2hhcmFjdGVyKGN1cnJlbnRDaGFyLCBzZXRDdXJyZW50Q2hhcilcclxuICAgICAgICAgICAgICAgICAgICA6IGFkZENoYXJhY3RlcihjdXJyZW50TG9jLCBzZXRDdXJyZW50TG9jKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxzcGFuPis8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICB7dHlwZSA9PT0gXCJzdG9yeVwiICYmIChcclxuICAgICAgICAgICAgICA8c21hbGw+WW91IGNhbiBhZGQgdXAgdG8gNSBtYWluIGNoYXJhY3RlcnM8L3NtYWxsPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgICAge3N1YmplY3QubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgICA8Q29sIGxnPXtsZzF9IG1kPXsyNH0gc209ezI0fSB4cz17MjR9PlxyXG4gICAgICAgICAgICA8Um93IGd1dHRlcj17MTZ9PlxyXG4gICAgICAgICAgICAgIHtzdWJqZWN0XHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyKChjKSA9PiBmb3JtLmdldEZpZWxkVmFsdWUoYXJySW5Gb3JtKS5pbmNsdWRlcyhjLmlkKSlcclxuICAgICAgICAgICAgICAgIC5tYXAoKGNoYXIpID0+IChcclxuICAgICAgICAgICAgICAgICAgPENvbCBtZD17MTJ9IHNtPXsyNH0ga2V5PXtjaGFyLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17Y2hhci5pZH0gY2xhc3NOYW1lPVwibWFpbi1zZWxlY3RlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWF2YXRhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtjaGFyLmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJqZWN0VHlwZSA9PT0gXCJjaGFyYWN0ZXJzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBjaGFyLmZpcnN0bmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGNoYXIubmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzdWJqZWN0VHlwZSA9PT0gXCJjaGFyYWN0ZXJzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IGAke2NoYXIuZmlyc3RuYW1lfSAke2NoYXIubGFzdG5hbWV9YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogY2hhci5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlvbi1pY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJlbW92ZUNoYXJhY3RlcihjaGFyLmlkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNsb3NlLWNpcmNsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+PC9pb24taWNvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8RGl2aWRlciBzdHlsZT17eyBtYXJnaW46IFwiMTVweCAwXCIgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICApfVxyXG4gICAgICA8L1Jvdz5cclxuICAgIDwvRm9ybS5JdGVtPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJdGVtU2VsZWN0b3I7XHJcbiIsImltcG9ydCB7IENvbCwgU3BhY2UsIEZvcm0sIFJhZGlvIH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmNvbnN0IFJhZGlvQnV0b24gPSAoe1xyXG4gIGxnLFxyXG4gIHNtLFxyXG4gIHhzLFxyXG4gIG1kLFxyXG4gIG5hbWUsXHJcbiAgbGFiZWwsXHJcbiAgbnVtMSxcclxuICBudW0yLFxyXG4gIGxhYmVsMSxcclxuICBsYWJlbDIsXHJcbiAgZm9ybSxcclxuICBzZXRGdW5jLFxyXG4gIHZhbCxcclxufSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q29sIGxnPXtsZ30gbWQ9e21kfSBzbT17c219IHhzPXt4c30+XHJcbiAgICAgIDxGb3JtLkl0ZW0gbmFtZT17bmFtZX0gbGFiZWw9e2xhYmVsfT5cclxuICAgICAgICA8ZmllbGRzZXQgaWQ9e25hbWV9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYWRpb1wiPlxyXG4gICAgICAgICAgICA8UmFkaW8uR3JvdXA+XHJcbiAgICAgICAgICAgICAgPFNwYWNlIHNpemU9ezMyfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmFkaW9fXzFcIj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9e2ByYWRpby0ke251bTF9YH1cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBzZXRGdW5jKHRydWUpfVxyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3ZhbCA/IHRydWUgOiBmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e2ByYWRpby0ke251bTF9YH0+PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPHA+e2xhYmVsMX08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmFkaW9fXzJcIj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9e2ByYWRpby0ke251bTJ9YH1cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gc2V0RnVuYyhmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dmFsID8gZmFsc2UgOiB0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17YHJhZGlvLSR7bnVtMn1gfT48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8cD57bGFiZWwyfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvU3BhY2U+XHJcbiAgICAgICAgICAgIDwvUmFkaW8uR3JvdXA+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2ZpZWxkc2V0PlxyXG4gICAgICA8L0Zvcm0uSXRlbT5cclxuICAgIDwvQ29sPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSYWRpb0J1dG9uO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFJvdywgQ29sLCBEaXZpZGVyLCBGb3JtLCBTcGluLCBJbnB1dCwgU2VsZWN0LCBtZXNzYWdlIH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgQ0FURUdPUklFUyxcclxuICBDT1BZUklHSFRTLFxyXG4gIExBTkdVQUdFUyxcclxuICBTVEFUVVMsXHJcbn0gZnJvbSBcIi4uLy4uL3V0aWxzL2NvbnN0YW50c1wiO1xyXG5cclxuaW1wb3J0IFRhZ3MgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZm9ybXMvVGFnc1wiO1xyXG5pbXBvcnQgUmFkaW9CdXR0b24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZm9ybXMvUmFkaW9CdXR0b25cIjtcclxuaW1wb3J0IEl0ZW1TZWxlY3RvciBmcm9tIFwiLi9JdGVtU2VsZWN0b3JcIjtcclxuaW1wb3J0IEltYWdlUm93IGZyb20gXCIuL0ltYWdlUm93XCI7XHJcblxyXG5jb25zdCB7IE9wdGlvbiB9ID0gU2VsZWN0O1xyXG5cclxuY29uc3QgU3RvcnlGb3JtID0gKHtcclxuICB0eXBlLFxyXG4gIHN0b3J5LFxyXG4gIGZvcm0sXHJcbiAgc3VibWl0LFxyXG4gIGxvYWRpbmcsXHJcbiAgc3RvcnlJZCxcclxuICBjaGFyYWN0ZXJzLFxyXG4gIG1hdHVyZSxcclxuICBzZXRNYXR1cmUsXHJcbiAgdmlzaWJpbGl0eSxcclxuICBzZXRWaXNpYmlsaXR5LFxyXG4gIGxvYWRpbmdTdG9yeSxcclxufSkgPT4ge1xyXG4gIGNvbnN0IFtsaW5rVmlzaWJsZSwgc2V0TGlua1Zpc2libGVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt1cGxvYWRWaXNpYmxlLCBzZXRVcGxvYWRWaXNpYmxlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgZmlsdGVyU29ydCA9IChhLCBiKSA9PiB7XHJcbiAgICBjb25zdCBrZXlBID0gYS5uYW1lLFxyXG4gICAgICBrZXlCID0gYi5uYW1lO1xyXG4gICAgaWYgKGtleUEgPCBrZXlCKSByZXR1cm4gLTE7XHJcbiAgICBpZiAoa2V5QSA+IGtleUIpIHJldHVybiAxO1xyXG4gICAgcmV0dXJuIDA7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25GYWlsZWQgPSAoKSA9PiB7XHJcbiAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcbiAgICBtZXNzYWdlLmVycm9yKFwiVGhlcmUgYXJlIHNvbWUgZXJyb3JzXCIpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNob3dMaW5rID0gKCkgPT4ge1xyXG4gICAgZm9ybS5zZXRGaWVsZHNWYWx1ZSh7IGJhbm5lcjogbnVsbCB9KTtcclxuICAgIHNldExpbmtWaXNpYmxlKHRydWUpO1xyXG4gICAgc2V0VXBsb2FkVmlzaWJsZShmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2hvd1VwbG9hZCA9ICgpID0+IHtcclxuICAgIGZvcm0uc2V0RmllbGRzVmFsdWUoeyBiYW5uZXI6IG51bGwgfSk7XHJcbiAgICBzZXRMaW5rVmlzaWJsZShmYWxzZSk7XHJcbiAgICBzZXRVcGxvYWRWaXNpYmxlKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ldy1zdG9yeSBjdXN0b20tZm9ybVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyXCI+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInNpZGUtaGVhZGluZ1wiPlxyXG4gICAgICAgICAge2Ake3R5cGV9ICR7dHlwZSA9PT0gXCJhZGRcIiAmJiBcImEgbmV3XCJ9IHN0b3J5ICR7XHJcbiAgICAgICAgICAgIHR5cGUgPT09IFwiZWRpdFwiID8gXCI6XCIgOiBcIlwiXHJcbiAgICAgICAgICB9ICR7dHlwZSA9PT0gXCJlZGl0XCIgPyBzdG9yeS50aXRsZSA6IFwiXCJ9YH1cclxuICAgICAgICA8L2gyPlxyXG4gICAgICAgIDxGb3JtXHJcbiAgICAgICAgICBsYXlvdXQ9XCJ2ZXJ0aWNhbFwiXHJcbiAgICAgICAgICBzY3JvbGxUb0ZpcnN0RXJyb3JcclxuICAgICAgICAgIG9uRmluaXNoRmFpbGVkPXtvbkZhaWxlZH1cclxuICAgICAgICAgIG9uRmluaXNoPXtzdWJtaXR9XHJcbiAgICAgICAgICBmb3JtPXtmb3JtfVxyXG4gICAgICAgICAgaW5pdGlhbFZhbHVlcz17XHJcbiAgICAgICAgICAgIHR5cGUgPT09IFwiYWRkXCJcclxuICAgICAgICAgICAgICA/IHtcclxuICAgICAgICAgICAgICAgICAgc3VtbWFyeTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgbWF0dXJlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgcHVibGljOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICBiYW5uZXI6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgIG1haW5DaGFyYWN0ZXJzOiBbXSxcclxuICAgICAgICAgICAgICAgICAgdGFnczogW10sXHJcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOiBbXSxcclxuICAgICAgICAgICAgICAgICAgY29weXJpZ2h0OiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICBsYW5ndWFnZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgc3RhdHVzOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICBpbWFnZUNvcHlyaWdodDogXCJcIixcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA6IHsgLi4uc3RvcnkgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxSb3cgZ3V0dGVyPXtbMjQsIDI0XX0+XHJcbiAgICAgICAgICAgIDxDb2wgc209ezI0fSB4cz17MjR9IG1kPXsxOH0gbGc9ezE4fT5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICBjb2xvbj17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICBuYW1lPVwidGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiQSB0aXRsZSBpcyByZXF1aXJlZFwiLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICB7IG1heDogNjUgfSxcclxuICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlRpdGxlXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgc209ezI0fSB4cz17MjR9IGxnPXs2fSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImNhdGVnb3JpZXNcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJDYXRlZ29yaWVzXCJcclxuICAgICAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkF0IGxlYXN0IDEgY2F0ZWdvcnkgaXMgcmVxdWlyZWRcIixcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG1heDogMixcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFycmF5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJZb3UgY2FuIG9ubHkgc2VsZWN0IHVwIHRvIDIgY2F0ZWdvcmllc1wiLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0IG1vZGU9XCJtdWx0aXBsZVwiIGFsbG93Q2xlYXIgbWF4VGFnQ291bnQ9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICB7Q0FURUdPUklFUz8uc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleUEgPSBhLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICBrZXlCID0gYi5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIENvbXBhcmUgdGhlIDIgZGF0ZXNcclxuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5QSA8IGtleUIpIHJldHVybiAtMTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5QSA+IGtleUIpIHJldHVybiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICAgICAgICB9KS5tYXAoKGNhdCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9e2NhdC52YWx1ZX0ga2V5PXtjYXQudmFsdWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAge2NhdC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgPFJvdyBndXR0ZXI9e1syNCwgMjRdfT5cclxuICAgICAgICAgICAgPENvbCBtZD17OH0gc209ezI0fSB4cz17MjR9IGxnPXs4fT5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwibGFuZ3VhZ2VcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJMYW5ndWFnZVwiXHJcbiAgICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJBIGxhbmd1YWdlIGlzIHJlcXVpcmVkXCIsXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgc2hvd1NlYXJjaFxyXG4gICAgICAgICAgICAgICAgICBmaWx0ZXJTb3J0PXtmaWx0ZXJTb3J0fVxyXG4gICAgICAgICAgICAgICAgICBmaWx0ZXJPcHRpb249eyhpbnB1dCwgb3B0aW9uKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbi5jaGlsZHJlblxyXG4gICAgICAgICAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcclxuICAgICAgICAgICAgICAgICAgICAgIC5pbmRleE9mKGlucHV0LnRvTG93ZXJDYXNlKCkpID49IDBcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7TEFOR1VBR0VTPy5tYXAoKGxhbmcpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPXtsYW5nLnZhbHVlfSBrZXk9e2xhbmcudmFsdWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAge2xhbmcubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICA8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgbWQ9ezh9IHNtPXsyNH0geHM9ezI0fSBsZz17OH0+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInN0YXR1c1wiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlN0YXR1c1wiXHJcbiAgICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJBIHN0YXR1cyBpcyByZXF1aXJlZFwiLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICB7U1RBVFVTLm1hcCgoc3RhdCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9e3N0YXQudmFsdWV9IGtleT17c3RhdC52YWx1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7c3RhdC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPENvbCBtZD17OH0gc209ezI0fSB4cz17MjR9IGxnPXs4fT5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiY29weXJpZ2h0XCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiQ29weXJpZ2h0XCJcclxuICAgICAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkEgY29weXJpZ2h0IGlzIHJlcXVpcmVkXCIsXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgIHtDT1BZUklHSFRTLm1hcCgoY29weSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9e2NvcHkudmFsdWV9IGtleT17Y29weS52YWx1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7Y29weS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICBsYWJlbD1cIlN1bW1hcnlcIlxyXG4gICAgICAgICAgICBuYW1lPVwic3VtbWFyeVwiXHJcbiAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbWF4OiAxODAsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIllvdXIgc3VtbWFyeSBjYW5ub3QgZXhjZWVkIDE4MCBjaGFyYWN0ZXJzXCIsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPElucHV0LlRleHRBcmVhXHJcbiAgICAgICAgICAgICAgYXV0b1NpemU9e3sgbWluUm93czogNSB9fVxyXG4gICAgICAgICAgICAgIHNob3dDb3VudD17dHJ1ZX1cclxuICAgICAgICAgICAgICBtYXhMZW5ndGg9ezE4MH1cclxuICAgICAgICAgICAgPjwvSW5wdXQuVGV4dEFyZWE+XHJcbiAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgIDxSb3cganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIiBndXR0ZXI9e1syNCwgMjRdfT5cclxuICAgICAgICAgICAgPFJhZGlvQnV0dG9uXHJcbiAgICAgICAgICAgICAgbGc9ezR9XHJcbiAgICAgICAgICAgICAgc209ezEyfVxyXG4gICAgICAgICAgICAgIHhzPXsyNH1cclxuICAgICAgICAgICAgICBtZD17OH1cclxuICAgICAgICAgICAgICBuYW1lPVwicHVibGljXCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIlZpc2liaWxpdHlcIlxyXG4gICAgICAgICAgICAgIHNldEZ1bmM9e3NldFZpc2liaWxpdHl9XHJcbiAgICAgICAgICAgICAgbnVtMT1cIjNcIlxyXG4gICAgICAgICAgICAgIG51bTI9XCI0XCJcclxuICAgICAgICAgICAgICBsYWJlbDE9XCJQdWJsaWNcIlxyXG4gICAgICAgICAgICAgIGxhYmVsMj1cIlByaXZhdGVcIlxyXG4gICAgICAgICAgICAgIHZhbD17dmlzaWJpbGl0eX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFJhZGlvQnV0dG9uXHJcbiAgICAgICAgICAgICAgbGc9ezR9XHJcbiAgICAgICAgICAgICAgc209ezEyfVxyXG4gICAgICAgICAgICAgIHhzPXsyNH1cclxuICAgICAgICAgICAgICBtZD17OH1cclxuICAgICAgICAgICAgICB2YWw9e21hdHVyZX1cclxuICAgICAgICAgICAgICBzZXRGdW5jPXtzZXRNYXR1cmV9XHJcbiAgICAgICAgICAgICAgbmFtZT1cIm1hdHVyZVwiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJNYXR1cmUgY29udGVudCA/XCJcclxuICAgICAgICAgICAgICBudW0xPVwiMVwiXHJcbiAgICAgICAgICAgICAgbnVtMj1cIjJcIlxyXG4gICAgICAgICAgICAgIGxhYmVsMT1cIlllc1wiXHJcbiAgICAgICAgICAgICAgbGFiZWwyPVwiTm9cIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Q29sIGxnPXs4fSBtZD17MTJ9IHNtPXsyNH0geHM9ezI0fT5cclxuICAgICAgICAgICAgICA8VGFncyBmb3JtPXtmb3JtfSAvPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgIDxJdGVtU2VsZWN0b3JcclxuICAgICAgICAgICAgaXRlbT17c3RvcnkgJiYgc3RvcnkubWFpbkNoYXJhY3RlcnN9XHJcbiAgICAgICAgICAgIHN1YmplY3Q9e2NoYXJhY3RlcnN9XHJcbiAgICAgICAgICAgIGZvcm09e2Zvcm19XHJcbiAgICAgICAgICAgIGFyckluRm9ybT1cIm1haW5DaGFyYWN0ZXJzXCJcclxuICAgICAgICAgICAgbGFiZWw9XCJNYWluIENoYXJhY3RlcnNcIlxyXG4gICAgICAgICAgICB0eXBlPVwic3RvcnlcIlxyXG4gICAgICAgICAgICBsZzE9ezEyfVxyXG4gICAgICAgICAgICBzdWJqZWN0VHlwZT1cImNoYXJhY3RlcnNcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICA8SW1hZ2VSb3cgbmFtZT1cImJhbm5lclwiIGZvcm09e2Zvcm19IGl0ZW1JbWFnZT17c3Rvcnk/LmJhbm5lcn0gLz5cclxuICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICB7dHlwZSA9PT0gXCJhZGRcIiA/IChcclxuICAgICAgICAgICAgbG9hZGluZyB8fCBzdG9yeUlkID8gKFxyXG4gICAgICAgICAgICAgIDxidXR0b24gZGlzYWJsZWQgY2xhc3NOYW1lPVwic3Bpbi1idG5cIj5cclxuICAgICAgICAgICAgICAgIDxTcGluIC8+XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+Q3JlYXRlPC9idXR0b24+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICkgOiBsb2FkaW5nU3RvcnkgPyAoXHJcbiAgICAgICAgICAgIDxidXR0b24gZGlzYWJsZWQgY2xhc3NOYW1lPVwic3Bpbi1idG5cIj5cclxuICAgICAgICAgICAgICA8U3BpbiAvPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkVkaXQ8L2J1dHRvbj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdG9yeUZvcm07XHJcbiIsImltcG9ydCB7IFRhZywgVG9vbHRpcCwgRm9ybSB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IFBsdXNPdXRsaW5lZCB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5cclxuY29uc3QgVGFncyA9ICh7IGZvcm0gfSkgPT4ge1xyXG4gIGNvbnN0IGlucHV0QnV0dG9uID0gUmVhY3QudXNlUmVmKCk7XHJcbiAgY29uc3QgZWRpdElucHV0QnV0dG9uID0gUmVhY3QudXNlUmVmKCk7XHJcbiAgY29uc3QgW2lucHV0VmlzaWJsZSwgc2V0SW5wdXRWaXNpYmxlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaW5wdXRWYWx1ZSwgc2V0SW5wdXRWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZWRpdElucHV0SW5kZXgsIHNldEVkaXRJbnB1dEluZGV4XSA9IFJlYWN0LnVzZVN0YXRlKC0xKTtcclxuICBjb25zdCBbZWRpdElucHV0VmFsdWUsIHNldEVkaXRJbnB1dFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDbG9zZSA9IChyZW1vdmVkVGFnKSA9PiB7XHJcbiAgICBmb3JtLnNldEZpZWxkc1ZhbHVlKHtcclxuICAgICAgdGFnczogZm9ybS5nZXRGaWVsZFZhbHVlKFwidGFnc1wiKT8uZmlsdGVyKCh0YWcpID0+IHRhZyAhPT0gcmVtb3ZlZFRhZyksXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzaG93SW5wdXQgPSAoKSA9PiB7XHJcbiAgICBzZXRJbnB1dFZpc2libGUodHJ1ZSk7XHJcbiAgICBpbnB1dEJ1dHRvbj8uY3VycmVudD8uZm9jdXMoKTtcclxuICAgIC8vZWRpdElucHV0QnV0dG9uLmN1cnJlbnQuZm9jdXMoKTtcclxuICAgIC8vO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGUpID0+IHNldElucHV0VmFsdWUoZS50YXJnZXQudmFsdWUpO1xyXG5cclxuICBjb25zdCBoYW5kbGVJbnB1dENvbmZpcm0gPSAoKSA9PiB7XHJcbiAgICBsZXQgbmV3VGFncyA9IGZvcm0uZ2V0RmllbGRWYWx1ZShcInRhZ3NcIik7XHJcbiAgICBpZiAoaW5wdXRWYWx1ZSAmJiBmb3JtLmdldEZpZWxkVmFsdWUoXCJ0YWdzXCIpPy5pbmRleE9mKGlucHV0VmFsdWUpID09PSAtMSkge1xyXG4gICAgICBuZXdUYWdzID0gWy4uLm5ld1RhZ3MsIGlucHV0VmFsdWVdO1xyXG4gICAgfVxyXG4gICAgZm9ybS5zZXRGaWVsZHNWYWx1ZSh7IHRhZ3M6IG5ld1RhZ3MgfSk7XHJcbiAgICBzZXRJbnB1dFZhbHVlKFwiXCIpO1xyXG4gICAgc2V0SW5wdXRWaXNpYmxlKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVFZGl0SW5wdXRDaGFuZ2UgPSAoZSkgPT4gc2V0RWRpdElucHV0VmFsdWUoZS50YXJnZXQudmFsdWUpO1xyXG5cclxuICBjb25zdCBoYW5kbGVFZGl0SW5wdXRDb25maXJtID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbmV3VGFncyA9IFsuLi5mb3JtLmdldEZpZWxkVmFsdWUoXCJ0YWdzXCIpXTtcclxuICAgIG5ld1RhZ3NbZWRpdElucHV0SW5kZXhdID0gZWRpdElucHV0VmFsdWU7XHJcbiAgICBmb3JtLnNldEZpZWxkc1ZhbHVlKHsgdGFnczogbmV3VGFncyB9KTtcclxuICAgIHNldEVkaXRJbnB1dEluZGV4KC0xKTtcclxuICAgIHNldEVkaXRJbnB1dFZhbHVlKFwiXCIpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGtleVByZXNzID0gKGUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGUua2V5KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm0uSXRlbSBsYWJlbD1cIlRhZ3NcIiBuYW1lPVwidGFnc1wiPlxyXG4gICAgICB7Zm9ybS5nZXRGaWVsZFZhbHVlKFwidGFnc1wiKT8ubWFwKCh0YWcsIGkpID0+IHtcclxuICAgICAgICBpZiAoZWRpdElucHV0SW5kZXggPT09IGkpIHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRWRpdElucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlRWRpdElucHV0Q29uZmlybX1cclxuICAgICAgICAgICAgICBvblByZXNzRW50ZXI9e2hhbmRsZUVkaXRJbnB1dENvbmZpcm19XHJcbiAgICAgICAgICAgICAgdmFsdWU9e2VkaXRJbnB1dFZhbHVlfVxyXG4gICAgICAgICAgICAgIHJlZj17ZWRpdElucHV0QnV0dG9ufVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0taW5wdXRcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgaXNMb25nVGFnID0gdGFnLmxlbmd0aCA+IDIwO1xyXG4gICAgICAgIGNvbnN0IFRhZ0VsZW0gPSAoXHJcbiAgICAgICAgICA8VGFnXHJcbiAgICAgICAgICAgIG9uQ2xvc2U9eygpID0+IGhhbmRsZUNsb3NlKHRhZyl9XHJcbiAgICAgICAgICAgIGNsb3NhYmxlPXt0cnVlfVxyXG4gICAgICAgICAgICBrZXk9e3RhZ31cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZWRpdC10YWdcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgIG9uRG91YmxlQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaSAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICBzZXRFZGl0SW5wdXRJbmRleChpKTtcclxuICAgICAgICAgICAgICAgICAgc2V0RWRpdElucHV0VmFsdWUodGFnKTtcclxuICAgICAgICAgICAgICAgICAgZWRpdElucHV0QnV0dG9uLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2lzTG9uZ1RhZyA/IGAjJHt0YWcuc2xpY2UoMCwgMjApfS4uLmAgOiBgIyR7dGFnfWB9XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvVGFnPlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmV0dXJuIGlzTG9uZ1RhZyA/IChcclxuICAgICAgICAgIDxUb29sdGlwIHRpdGxlPXt0YWd9IGtleT17dGFnfT5cclxuICAgICAgICAgICAge1RhZ0VsZW19XHJcbiAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIFRhZ0VsZW1cclxuICAgICAgICApO1xyXG4gICAgICB9KX1cclxuICAgICAge2lucHV0VmlzaWJsZSAmJiAoXHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICBvbkJsdXI9e2hhbmRsZUlucHV0Q29uZmlybX1cclxuICAgICAgICAgIG9uS2V5RG93bj17KGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcclxuICAgICAgICAgICAgICBoYW5kbGVJbnB1dENvbmZpcm0oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIHZhbHVlPXtpbnB1dFZhbHVlfVxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgcmVmPXtpbnB1dEJ1dHRvbn1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInRhZy1pbnB1dFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgKX1cclxuICAgICAgeyFpbnB1dFZpc2libGUgJiYgKFxyXG4gICAgICAgIDxUYWcgY2xhc3NOYW1lPVwic2l0ZS10YWctcGx1c1wiIG9uQ2xpY2s9e3Nob3dJbnB1dH0+XHJcbiAgICAgICAgICA8UGx1c091dGxpbmVkIC8+IE5ldyBUYWdcclxuICAgICAgICA8L1RhZz5cclxuICAgICAgKX1cclxuICAgIDwvRm9ybS5JdGVtPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYWdzO1xyXG4iLCJpbXBvcnQgeyBVcGxvYWQsIG1lc3NhZ2UsIEZvcm0sIElucHV0IH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgTG9hZGluZ091dGxpbmVkLCBQbHVzT3V0bGluZWQsIFN0YXJPdXRsaW5lZCB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5cclxuZnVuY3Rpb24gZ2V0QmFzZTY0KGltZywgY2FsbGJhY2spIHtcclxuICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gIHJlYWRlci5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiBjYWxsYmFjayhyZWFkZXIucmVzdWx0KSk7XHJcbiAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoaW1nKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYmVmb3JlVXBsb2FkKGZpbGUpIHtcclxuICBjb25zdCBpc0pwZ09yUG5nID0gZmlsZS50eXBlID09PSBcImltYWdlL2pwZWdcIiB8fCBmaWxlLnR5cGUgPT09IFwiaW1hZ2UvcG5nXCI7XHJcbiAgaWYgKCFpc0pwZ09yUG5nKSB7XHJcbiAgICBtZXNzYWdlLmVycm9yKFwiWW91IGNhbiBvbmx5IHVwbG9hZCBKUEcvUE5HIGZpbGUhXCIpO1xyXG4gIH1cclxuICBjb25zdCBpc0x0Mk0gPSBmaWxlLnNpemUgLyAxMDI0IC8gMTAyNCA8IDI7XHJcbiAgaWYgKCFpc0x0Mk0pIHtcclxuICAgIG1lc3NhZ2UuZXJyb3IoXCJJbWFnZSBtdXN0IHNtYWxsZXIgdGhhbiAyTUIhXCIpO1xyXG4gIH1cclxuICByZXR1cm4gaXNKcGdPclBuZyAmJiBpc0x0Mk07XHJcbn1cclxuXHJcbmNvbnN0IFVwbG9hZEltYWdlID0gKHsgZm9ybSwgaW1hZ2UsIG5hbWUgfSkgPT4ge1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaW1hZ2VVcmwsIHNldEltYWdlVXJsXSA9IFJlYWN0LnVzZVN0YXRlKGltYWdlID8gaW1hZ2UgOiBcIlwiKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGluZm8pID0+IHtcclxuICAgIGlmIChpbmZvLmZpbGUuc3RhdHVzID09PSBcInVwbG9hZGluZ1wiKSB7XHJcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmIChpbmZvLmZpbGUuc3RhdHVzID09PSBcImRvbmVcIikge1xyXG4gICAgICBmb3JtLnNldEZpZWxkc1ZhbHVlKHsgW25hbWVdOiBpbmZvLmZpbGUub3JpZ2luRmlsZU9iaiB9KTtcclxuICAgICAgLy8gc2V0SW1hZ2UoaW5mby5maWxlLm9yaWdpbkZpbGVPYmopO1xyXG4gICAgICBnZXRCYXNlNjQoaW5mby5maWxlLm9yaWdpbkZpbGVPYmosIChpbWFnZVVybCkgPT4ge1xyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIHNldEltYWdlVXJsKGltYWdlVXJsKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdXBsb2FkQnV0dG9uID0gKFxyXG4gICAgPGRpdj5cclxuICAgICAge2xvYWRpbmcgPyA8TG9hZGluZ091dGxpbmVkIC8+IDogPFBsdXNPdXRsaW5lZCAvPn1cclxuICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IDggfX0+VXBsb2FkPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Rm9ybS5JdGVtIG5hbWU9e25hbWV9IGxhYmVsPVwiVXBsb2FkIGEgY292ZXJcIj5cclxuICAgICAgICA8VXBsb2FkXHJcbiAgICAgICAgICBzaG93VXBsb2FkTGlzdD17e1xyXG4gICAgICAgICAgICBzaG93UmVtb3ZlSWNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgcmVtb3ZlSWNvbjogPFN0YXJPdXRsaW5lZCAvPixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBsaXN0VHlwZT1cInBpY3R1cmUtY2FyZFwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJjb3Zlci11cGxvYWRlclwiXHJcbiAgICAgICAgICBzaG93VXBsb2FkTGlzdD17dHJ1ZX1cclxuICAgICAgICAgIGJlZm9yZVVwbG9hZD17YmVmb3JlVXBsb2FkfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgIG1heENvdW50PXsxfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtpbWFnZVVybCA/IChcclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIHNyYz17aW1hZ2VVcmx9XHJcbiAgICAgICAgICAgICAgYWx0PVwiaW1hZ2VcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgb2JqZWN0Rml0OiBcImNvdmVyXCIgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIHVwbG9hZEJ1dHRvblxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L1VwbG9hZD5cclxuICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICBsYWJlbD1cIkltYWdlIENvcHlyaWdodFwiXHJcbiAgICAgICAgbmFtZT1cImltYWdlQ29weXJpZ2h0XCJcclxuICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICByZXF1aXJlZDogZm9ybS5nZXRGaWVsZFZhbHVlKG5hbWUpID8gdHJ1ZSA6IGZhbHNlLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkFuIGltYWdlIGNvcHlyaWdodCBpcyByZXF1aXJlZFwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdfVxyXG4gICAgICA+XHJcbiAgICAgICAgPElucHV0IC8+XHJcbiAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVwbG9hZEltYWdlO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCwgY3JlYXRlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlL2FwcFwiO1xyXG5pbXBvcnQgeyBhdXRoLCBkYiB9IGZyb20gXCIuLi9yZWR1eC9mYkNvbmZpZ1wiO1xyXG5cclxuY29uc3QgYXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUHJvdmlkZUF1dGgoeyBjaGlsZHJlbiB9KSB7XHJcbiAgY29uc3QgYXV0aCA9IHVzZVByb3ZpZGVBdXRoKCk7XHJcbiAgcmV0dXJuIDxhdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17YXV0aH0+e2NoaWxkcmVufTwvYXV0aENvbnRleHQuUHJvdmlkZXI+O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXNlQXV0aCA9ICgpID0+IHtcclxuICByZXR1cm4gdXNlQ29udGV4dChhdXRoQ29udGV4dCk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiB1c2VQcm92aWRlQXV0aCgpIHtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIC8vIFdyYXAgYW55IEZpcmViYXNlIG1ldGhvZHMgd2Ugd2FudCB0byB1c2UgbWFraW5nIHN1cmUgLi4uXHJcbiAgLy8gLi4uIHRvIHNhdmUgdGhlIHVzZXIgdG8gc3RhdGUuXHJcbiAgY29uc3Qgc2lnbmluID0gKGVtYWlsLCBwYXNzd29yZCkgPT4ge1xyXG4gICAgcmV0dXJuIGF1dGguc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBzZXRVc2VyKHJlc3BvbnNlLnVzZXIpO1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UudXNlcjtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNpZ251cCA9IChlbWFpbCwgcGFzc3dvcmQsIHVzZXJuYW1lKSA9PiB7XHJcbiAgICByZXR1cm4gYXV0aFxyXG4gICAgICAuY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZClcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgc2V0VXNlcihyZXNwb25zZS51c2VyKTtcclxuICAgICAgICBkYi5jb2xsZWN0aW9uKFwidXNlcnNcIikuYWRkKHtcclxuICAgICAgICAgIGJhZGdlczogW10sXHJcbiAgICAgICAgICBiaW9ncmFwaHk6IFwiXCIsXHJcbiAgICAgICAgICBjcmVhdGVkQXQ6IGZpcmViYXNlLmZpcmVzdG9yZS5GaWVsZFZhbHVlLnNlcnZlclRpbWVzdGFtcCgpLFxyXG4gICAgICAgICAgc3VzcGVuZGVkOiBmYWxzZSxcclxuICAgICAgICAgIGZhY2Vib29rOiBcIlwiLFxyXG4gICAgICAgICAgaW5zdGFncmFtOiBcIlwiLFxyXG4gICAgICAgICAgdHdpdHRlcjogXCJcIixcclxuICAgICAgICAgIGRldmlhbnRhcnQ6IFwiXCIsXHJcbiAgICAgICAgICBsaWtlc0NvdW50OiBcIlwiLFxyXG4gICAgICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLFxyXG4gICAgICAgICAgaW1hZ2U6IFwiXCIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnVzZXI7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNpZ25vdXQgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gYXV0aC5zaWduT3V0KCkudGhlbigoKSA9PiB7XHJcbiAgICAgIHNldFVzZXIoZmFsc2UpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2VuZFBhc3N3b3JkUmVzZXRFbWFpbCA9IChlbWFpbCkgPT4ge1xyXG4gICAgcmV0dXJuIGF1dGguc2VuZFBhc3N3b3JkUmVzZXRFbWFpbChlbWFpbCkudGhlbigoKSA9PiB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY29uZmlybVBhc3N3b3JkUmVzZXQgPSAoY29kZSwgcGFzc3dvcmQpID0+IHtcclxuICAgIHJldHVybiBhdXRoLmNvbmZpcm1QYXNzd29yZFJlc2V0KGNvZGUsIHBhc3N3b3JkKS50aGVuKCgpID0+IHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdW5zdWJzY3JpYmUgPSBhdXRoLm9uQXV0aFN0YXRlQ2hhbmdlZCgodXNlcikgPT4ge1xyXG4gICAgICBpZiAodXNlcikge1xyXG4gICAgICAgIHNldFVzZXIodXNlcik7XHJcbiAgICAgICAgaWYgKHVzZXIudWlkKSB7XHJcbiAgICAgICAgICBsZXQgdXNlcm5hbWUgPSBcIlwiO1xyXG4gICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgIGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKVxyXG4gICAgICAgICAgICAuZG9jKHVzZXIudWlkKVxyXG4gICAgICAgICAgICAub25TbmFwc2hvdCgoZG9jKSA9PiB7XHJcbiAgICAgICAgICAgICAgdXNlcm5hbWUgPSBkb2MuZGF0YSgpLnVzZXJuYW1lO1xyXG4gICAgICAgICAgICAgIHNldFVzZXIoeyAuLi51c2VyLCB1c2VybmFtZSB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldFVzZXIoZmFsc2UpO1xyXG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIENsZWFudXAgc3Vic2NyaXB0aW9uIG9uIHVubW91bnRcclxuICAgIHJldHVybiAoKSA9PiB1bnN1YnNjcmliZSgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgLy8gUmV0dXJuIHRoZSB1c2VyIG9iamVjdCBhbmQgYXV0aCBtZXRob2RzXHJcbiAgcmV0dXJuIHtcclxuICAgIGlzTG9hZGluZyxcclxuICAgIHVzZXIsXHJcbiAgICBzaWduaW4sXHJcbiAgICBzaWdudXAsXHJcbiAgICBzaWdub3V0LFxyXG4gICAgc2VuZFBhc3N3b3JkUmVzZXRFbWFpbCxcclxuICAgIGNvbmZpcm1QYXNzd29yZFJlc2V0LFxyXG4gIH07XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGb3JtLCBSZXN1bHQsIEJ1dHRvbiB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSBcIi4uLy4uLy4uL2hvb2tzL3VzZXJIb29rc1wiO1xyXG5pbXBvcnQgeyBnZXRVc2VyQ2hhcmFjdGVycyB9IGZyb20gXCIuLi8uLi8uLi9yZWR1eC9hY3Rpb25zL2NoYXJhY3RlcnNBY3Rpb25zXCI7XHJcbmltcG9ydCB7IGdldFN0b3J5LCBlZGl0U3RvcnkgfSBmcm9tIFwiLi4vLi4vLi4vcmVkdXgvYWN0aW9ucy9zdG9yaWVzQWN0aW9uc1wiO1xyXG5cclxuLy9pbXBvcnQgTG9hZGVyIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2hvYy93aXRoTG9hZGluZ1wiO1xyXG5pbXBvcnQgU3RvcnlGb3JtIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2Zvcm1zL1N0b3J5Rm9ybVwiO1xyXG5cclxuY29uc3QgRWRpdFN0b3J5ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgYXV0aCA9IHVzZUF1dGgoKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IHN0b3J5LCBsb2FkaW5nLCBjaGFyYWN0ZXJzLCBsb2FkaW5nU3RvcnksIHN0b3J5RXhpc3RzIH0gPSBwcm9wcztcclxuICBjb25zdCBbZm9ybV0gPSBGb3JtLnVzZUZvcm0oKTtcclxuXHJcbiAgY29uc29sZS5sb2cobG9hZGluZyk7XHJcblxyXG4gIGNvbnN0IFttYXR1cmUsIHNldE1hdHVyZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Zpc2liaWxpdHksIHNldFZpc2liaWxpdHldID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoYXV0aC51c2VyKSB7XHJcbiAgICAgIHByb3BzLmdldFVzZXJDaGFyYWN0ZXJzKGF1dGgudXNlci51aWQpO1xyXG4gICAgfVxyXG4gIH0sIFthdXRoXSk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAocm91dGVyLnF1ZXJ5LmlkKSB7XHJcbiAgICAgIHByb3BzLmdldFN0b3J5KHJvdXRlci5xdWVyeS5pZCk7XHJcbiAgICB9XHJcbiAgfSwgW3JvdXRlci5xdWVyeS5pZF0pO1xyXG5cclxuICBjb25zdCBzdWJtaXQgPSAodmFsdWVzKSA9PiB7XHJcbiAgICBkZWxldGUgdmFsdWVzLmN1cnJlbnRDaGFyO1xyXG4gICAgcHJvcHMuZWRpdFN0b3J5KHZhbHVlcywgcm91dGVyLnF1ZXJ5LmlkKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gIWxvYWRpbmcgPyAoXHJcbiAgICBzdG9yeUV4aXN0cyAmJiBzdG9yeS50aXRsZSA/IChcclxuICAgICAgYXV0aC51c2VyLnVpZCA9PT0gc3RvcnkuYXV0aG9ySWQgPyAoXHJcbiAgICAgICAgPFN0b3J5Rm9ybVxyXG4gICAgICAgICAgdHlwZT1cImVkaXRcIlxyXG4gICAgICAgICAgc3VibWl0PXtzdWJtaXR9XHJcbiAgICAgICAgICBjaGFyYWN0ZXJzPXtjaGFyYWN0ZXJzfVxyXG4gICAgICAgICAgbG9hZGluZz17bG9hZGluZ31cclxuICAgICAgICAgIGZvcm09e2Zvcm19XHJcbiAgICAgICAgICBtYXR1cmU9e21hdHVyZX1cclxuICAgICAgICAgIHNldE1hdHVyZT17c2V0TWF0dXJlfVxyXG4gICAgICAgICAgdmlzaWJpbGl0eT17dmlzaWJpbGl0eX1cclxuICAgICAgICAgIHNldFZpc2liaWxpdHk9e3NldFZpc2liaWxpdHl9XHJcbiAgICAgICAgICBzdG9yeT17c3Rvcnl9XHJcbiAgICAgICAgICBsb2FkaW5nU3Rvcnk9e2xvYWRpbmdTdG9yeX1cclxuICAgICAgICAvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxSZXN1bHRcclxuICAgICAgICAgIHN0YXR1cz1cIjQwM1wiXHJcbiAgICAgICAgICB0aXRsZT1cIjQwM1wiXHJcbiAgICAgICAgICBzdWJUaXRsZT1cIlNvcnJ5LCB5b3UgYXJlIG5vdCBhdXRob3JpemVkIHRvIGFjY2VzcyB0aGlzIHBhZ2UuXCJcclxuICAgICAgICAgIGV4dHJhPXs8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCI+QmFjayBIb21lPC9CdXR0b24+fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIClcclxuICAgICkgOiAoXHJcbiAgICAgIDxSZXN1bHRcclxuICAgICAgICBzdGF0dXM9XCI0MDRcIlxyXG4gICAgICAgIHRpdGxlPVwiNDA0XCJcclxuICAgICAgICBzdWJUaXRsZT1cIlNvcnJ5LCB0aGUgcGFnZSB5b3UgdmlzaXRlZCBkb2VzIG5vdCBleGlzdC5cIlxyXG4gICAgICAgIGV4dHJhPXs8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCI+QmFjayBIb21lPC9CdXR0b24+fVxyXG4gICAgICAvPlxyXG4gICAgKVxyXG4gICkgOiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRlci1jb250YWluZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkZXJcIj5cclxuICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG4gIGNoYXJhY3RlcnM6IHN0YXRlLmNoYXJhY3RlcnMudXNlckNoYXJhY3RlcnMsXHJcbiAgY29uZmlybU1lc3NhZ2U6IHN0YXRlLnN0b3JpZXMubWVzc2FnZSxcclxuICBzdG9yeUlkOiBzdGF0ZS5zdG9yaWVzLnN0b3J5SWQsXHJcbiAgbG9hZGluZ1N0b3J5OiBzdGF0ZS5zdG9yaWVzLmxvYWRpbmdTdG9yeSxcclxuICBzdG9yeTogc3RhdGUuc3Rvcmllcy5zdG9yeSxcclxuICBsb2FkaW5nOiBzdGF0ZS5zdG9yaWVzLmxvYWRpbmcsXHJcbiAgc3RvcnlFeGlzdHM6IHN0YXRlLnN0b3JpZXMuc3RvcnlFeGlzdHMsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHtcclxuICBnZXRVc2VyQ2hhcmFjdGVycyxcclxuICBlZGl0U3RvcnksXHJcbiAgZ2V0U3RvcnksXHJcbn0pKEVkaXRTdG9yeSk7XHJcbiIsImltcG9ydCB7XHJcbiAgR0VUX1VTRVJfQ0hBUkFDVEVSUyxcclxuICBHRVRfRkFWT1JJVEVfQ0hBUkFDVEVSUyxcclxuICBBRERfQ0hBUkFDVEVSLFxyXG4gIEVESVRfQ0hBUkFDVEVSLFxyXG4gIEdFVF9DSEFSQUNURVIsXHJcbn0gZnJvbSBcIi4uLy4uL3V0aWxzL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBtZXNzYWdlIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgZGIsIGF1dGggfSBmcm9tIFwiLi4vZmJDb25maWdcIjtcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDaGFyYWN0ZXIgPSAoaWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzXCIpXHJcbiAgICAuZG9jKGlkKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigoZG9jKSA9PiB7XHJcbiAgICAgIGlmIChkb2MuZXhpc3RzKSB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogR0VUX0NIQVJBQ1RFUixcclxuICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgY2hhcmFjdGVyOiB7IC4uLmRvYy5kYXRhKCksIGlkOiBkb2MuaWQgfSxcclxuICAgICAgICAgICAgY2hhcmFFeGlzdHM6IHRydWUsXHJcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiBHRVRfQ0hBUkFDVEVSLFxyXG4gICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICBjaGFyYUV4aXN0czogZmFsc2UsXHJcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYWRkQ2hhcmFjdGVyID0gKGRhdGEpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRpc3BhdGNoKHsgdHlwZTogQUREX0NIQVJBQ1RFUiwgcGF5bG9hZDogeyBsb2FkaW5nOiB0cnVlIH0gfSk7XHJcbiAgY29uc3QgaW1hZ2VOYW1lID0gYCR7ZGF0YS5maXJzdG5hbWUudG9Mb3dlckNhc2UoKX0ke2RhdGEubGFzdG5hbWUgJiYgXCJfXCJ9JHtcclxuICAgIGRhdGEubGFzdG5hbWUgJiYgZGF0YS5sYXN0bmFtZS50b0xvd2VyQ2FzZSgpXHJcbiAgfWA7XHJcbiAgaWYgKHR5cGVvZiBkYXRhLmltYWdlID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICBzdG9yYWdlXHJcbiAgICAgIC5yZWYoYCR7YXV0aC5jdXJyZW50VXNlci51aWR9LyR7aW1hZ2VOYW1lfWApXHJcbiAgICAgIC5wdXQoZGF0YS5pbWFnZSlcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBzdG9yYWdlXHJcbiAgICAgICAgICAucmVmKGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gICAgICAgICAgLmNoaWxkKGltYWdlTmFtZSlcclxuICAgICAgICAgIC5nZXREb3dubG9hZFVSTCgpO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigodXJsKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGRiLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzXCIpLmFkZCh7XHJcbiAgICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgICAgaW1hZ2U6IHVybCxcclxuICAgICAgICAgIGNyZWF0ZWRBdDogZmlyZWJhc2UuZmlyZXN0b3JlLkZpZWxkVmFsdWUuc2VydmVyVGltZXN0YW1wKCksXHJcbiAgICAgICAgICBsaWtlc0NvdW50OiAwLFxyXG4gICAgICAgICAgbGlrZXM6IFtdLFxyXG4gICAgICAgICAgZGlzbGlrZXM6IFtdLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgbWVzc2FnZS5zdWNjZXNzKFwiQ2hhcmFjdGVyIGFkZGVkIHN1Y2Nlc3NmdWxseVwiKTtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiBBRERfQ0hBUkFDVEVSLFxyXG4gICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkNoYXJhY3RlciBhZGRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgICAgY2hhcmFjdGVySWQ6IHJlcy5pZCxcclxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoZXJyLm1lc3NhZ2UpO1xyXG4gICAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgZGIuY29sbGVjdGlvbihcImNoYXJhY3RlcnNcIilcclxuICAgICAgLmFkZCh7XHJcbiAgICAgICAgLi4uZGF0YSxcclxuICAgICAgICBjcmVhdGVkQXQ6IGZpcmViYXNlLmZpcmVzdG9yZS5GaWVsZFZhbHVlLnNlcnZlclRpbWVzdGFtcCgpLFxyXG4gICAgICAgIGxpa2VzQ291bnQ6IDAsXHJcbiAgICAgICAgbGlrZXM6IFtdLFxyXG4gICAgICAgIGRpc2xpa2VzOiBbXSxcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhcIkNoYXJhY3RlciBhZGRlZCBzdWNjZXNzZnVsbHlcIik7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogQUREX0NIQVJBQ1RFUixcclxuICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJDaGFyYWN0ZXIgYWRkZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICAgIGNoYXJhY3RlcklkOiByZXMuaWQsXHJcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBtZXNzYWdlLmVycm9yKGVyci5tZXNzYWdlKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGVkaXRDaGFyYWN0ZXIgPSAoZGF0YSwgaWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRpc3BhdGNoKHsgdHlwZTogRURJVF9DSEFSQUNURVIsIHBheWxvYWQ6IHsgbG9hZGluZ0NoYXJhY3RlcjogdHJ1ZSB9IH0pO1xyXG4gIGNvbnN0IGltYWdlTmFtZSA9IGAke2RhdGEuZmlyc3RuYW1lLnRvTG93ZXJDYXNlKCl9JHtkYXRhLmxhc3RuYW1lICYmIFwiX1wifSR7XHJcbiAgICBkYXRhLmxhc3RuYW1lICYmIGRhdGEubGFzdG5hbWUudG9Mb3dlckNhc2UoKVxyXG4gIH1gO1xyXG4gIGlmIChkYXRhLmltYWdlICYmIHR5cGVvZiBkYXRhLmltYWdlID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICBzdG9yYWdlXHJcbiAgICAgIC5yZWYoYCR7YXV0aC5jdXJyZW50VXNlci51aWR9LyR7aW1hZ2VOYW1lfWApXHJcbiAgICAgIC5wdXQoZGF0YS5pbWFnZSlcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBzdG9yYWdlXHJcbiAgICAgICAgICAucmVmKGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gICAgICAgICAgLmNoaWxkKGltYWdlTmFtZSlcclxuICAgICAgICAgIC5nZXREb3dubG9hZFVSTCgpO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigodXJsKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGRiXHJcbiAgICAgICAgICAuY29sbGVjdGlvbihcImNoYXJhY3RlcnNcIilcclxuICAgICAgICAgIC5kb2MoaWQpXHJcbiAgICAgICAgICAudXBkYXRlKHtcclxuICAgICAgICAgICAgLi4uZGF0YSxcclxuICAgICAgICAgICAgaW1hZ2U6IHVybCxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogRURJVF9DSEFSQUNURVIsXHJcbiAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiQ2hhcmFjdGVyIGVkaXRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgICAgbG9hZGluZ0NoYXJhY3RlcjogZmFsc2UsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoZXJyLm1lc3NhZ2UpO1xyXG4gICAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgZGIuY29sbGVjdGlvbihcImNoYXJhY3RlcnNcIilcclxuICAgICAgLmRvYyhpZClcclxuICAgICAgLnVwZGF0ZSh7XHJcbiAgICAgICAgLi4uZGF0YSxcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IEVESVRfQ0hBUkFDVEVSLFxyXG4gICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkNoYXJhY3RlciBlZGl0ZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICAgIGxvYWRpbmdDaGFyYWN0ZXI6IGZhbHNlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBtZXNzYWdlLmVycm9yKGVyci5tZXNzYWdlKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFVzZXJDaGFyYWN0ZXJzID0gKHVzZXJJZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGIuY29sbGVjdGlvbihcImNoYXJhY3RlcnNcIilcclxuICAgIC53aGVyZShcImF1dGhvcklkXCIsIFwiPT1cIiwgdXNlcklkKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigoZG9jcykgPT4ge1xyXG4gICAgICBsZXQgaXRlbXMgPSBbXTtcclxuICAgICAgZG9jcy5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgICAgICBpdGVtcyA9IFsuLi5pdGVtcywgeyBpZDogZG9jLmlkLCAuLi5kb2MuZGF0YSgpIH1dO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGl0ZW1zO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChpdGVtcykgPT4ge1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IEdFVF9VU0VSX0NIQVJBQ1RFUlMsIHBheWxvYWQ6IGl0ZW1zIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0RmF2b3JpdGVDaGFyYWN0ZXJzID0gKCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGIuY29sbGVjdGlvbihcImNoYXJhY3RlcnNMaWtlc1wiKVxyXG4gICAgLndoZXJlKFwic2VuZGVySWRcIiwgXCI9PVwiLCBhdXRoLmN1cnJlbnRVc2VyLnVpZClcclxuICAgIC5nZXQoKVxyXG4gICAgLnRoZW4oKGRvY3MpID0+IHtcclxuICAgICAgbGV0IGZhdkFyciA9IFtdO1xyXG4gICAgICBkb2NzLmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgICAgIGZhdkFyciA9IFsuLi5mYXZBcnIsIGRvYy5kYXRhKCkuY2hhcmFjdGVySWRdO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGZhdkFycjtcclxuICAgIH0pXHJcbiAgICAudGhlbigodXNlcnMpID0+IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gdXNlcnMubWFwKCh1c2VyKSA9PlxyXG4gICAgICAgIGRiLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzXCIpLmRvYyh1c2VyKS5nZXQoKVxyXG4gICAgICApO1xyXG4gICAgICBQcm9taXNlLmFsbChyZXN1bHQpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGxldCBmYXZVc2VycyA9IFtdO1xyXG4gICAgICAgIHJlcy5mb3JFYWNoKFxyXG4gICAgICAgICAgKGRvYykgPT4gKGZhdlVzZXJzID0gWy4uLmZhdlVzZXJzLCB7IGlkOiBkb2MuaWQsIC4uLmRvYy5kYXRhKCkgfV0pXHJcbiAgICAgICAgKTtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiBHRVRfRkFWT1JJVEVfQ0hBUkFDVEVSUyxcclxuICAgICAgICAgIHBheWxvYWQ6IGZhdlVzZXJzLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG4iLCJpbXBvcnQge1xyXG4gIEdFVF9VU0VSX1NUT1JJRVMsXHJcbiAgR0VUX0ZBVk9SSVRFX1NUT1JJRVMsXHJcbiAgR0VUX1VTRVJfTE9DQVRJT05TLFxyXG4gIEdFVF9TVE9SWSxcclxuICBHRVRfQ0hBUFRFUlMsXHJcbiAgQUREX1NUT1JZLFxyXG4gIEFERF9DSEFQVEVSLFxyXG4gIEVESVRfQ0hBUFRFUixcclxuICBHRVRfQ0hBUFRFUixcclxuICBFRElUX1NUT1JZLFxyXG4gIERJU1BBVENIX0VSUk9SLFxyXG59IGZyb20gXCIuLi8uLi91dGlscy9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgZGIsIGF1dGgsIHN0b3JhZ2UgfSBmcm9tIFwiLi4vZmJDb25maWdcIjtcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcclxuaW1wb3J0IHsgbWVzc2FnZSB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RvcnkgPSAoaWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpXHJcbiAgICAuZG9jKGlkKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigoZG9jKSA9PiB7XHJcbiAgICAgIGlmIChkb2MuZXhpc3RzKSB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogR0VUX1NUT1JZLFxyXG4gICAgICAgICAgc3RvcnlFeGlzdHM6IHRydWUsXHJcbiAgICAgICAgICBwYXlsb2FkOiB7IC4uLmRvYy5kYXRhKCksIGlkOiBkb2MuaWQgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiBESVNQQVRDSF9FUlJPUixcclxuICAgICAgICAgIHN0b3J5RXhpc3RzOiBmYWxzZSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRTdG9yeSA9IChkYXRhKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkaXNwYXRjaCh7IHR5cGU6IEFERF9TVE9SWSwgcGF5bG9hZDogeyBsb2FkaW5nOiB0cnVlIH0gfSk7XHJcbiAgY29uc3QgaW1hZ2VOYW1lID0gZGF0YS50aXRsZS50b0xvd2VyQ2FzZSgpLnNwbGl0KFwiIFwiKS5qb2luKFwiX1wiKTtcclxuICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICBpZiAodHlwZW9mIGRhdGEuYmFubmVyID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICBzdG9yYWdlXHJcbiAgICAgIC5yZWYoYCR7YXV0aC5jdXJyZW50VXNlci51aWR9LyR7aW1hZ2VOYW1lfWApXHJcbiAgICAgIC5wdXQoZGF0YS5iYW5uZXIpXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICByZXR1cm4gc3RvcmFnZVxyXG4gICAgICAgICAgLnJlZihhdXRoLmN1cnJlbnRVc2VyLnVpZClcclxuICAgICAgICAgIC5jaGlsZChpbWFnZU5hbWUpXHJcbiAgICAgICAgICAuZ2V0RG93bmxvYWRVUkwoKTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKHVybCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKS5hZGQoe1xyXG4gICAgICAgICAgLi4uZGF0YSxcclxuICAgICAgICAgIGF1dGhvcklkOiBhdXRoLmN1cnJlbnRVc2VyLnVpZCxcclxuICAgICAgICAgIGF1dGhvck5hbWU6IGRhdGEuYXV0aG9yTmFtZSxcclxuICAgICAgICAgIG9uZVNob3Q6IGZhbHNlLFxyXG4gICAgICAgICAgYmFubmVyOiB1cmwsXHJcbiAgICAgICAgICBjcmVhdGVkQXQ6IGZpcmViYXNlLmZpcmVzdG9yZS5GaWVsZFZhbHVlLnNlcnZlclRpbWVzdGFtcCgpLFxyXG4gICAgICAgICAgbGlrZXNDb3VudDogMCxcclxuICAgICAgICAgIGNoYXB0ZXJzQ291bnQ6IDAsXHJcbiAgICAgICAgICBsb2NhdGlvbnNDb3VudDogMCxcclxuICAgICAgICAgIHNlY29uZGFyeUNoYXJhY3RlcnM6IFtdLFxyXG4gICAgICAgICAgZmVhdHVyZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgbm90ZTogMCxcclxuICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhcIlN0b3J5IGFkZGVkIHN1Y2Nlc3NmdWxseVwiKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIFJvdXRlci5wdXNoKGAvc3RvcnkvJHtyZXMuaWR9YCk7XHJcbiAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9TVE9SWSxcclxuICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgIG1lc3NhZ2U6IFwiU3RvcnkgYWRkZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICAgICAgc3RvcnlJZDogcmVzLmlkLFxyXG4gICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihlcnIubWVzc2FnZSk7XHJcbiAgICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKVxyXG4gICAgICAuYWRkKHtcclxuICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgIGF1dGhvcklkOiBhdXRoLmN1cnJlbnRVc2VyLnVpZCxcclxuICAgICAgICBhdXRob3JOYW1lOiBkYXRhLmF1dGhvck5hbWUsXHJcbiAgICAgICAgb25lU2hvdDogZmFsc2UsXHJcbiAgICAgICAgY3JlYXRlZEF0OiBmaXJlYmFzZS5maXJlc3RvcmUuRmllbGRWYWx1ZS5zZXJ2ZXJUaW1lc3RhbXAoKSxcclxuICAgICAgICBsaWtlc0NvdW50OiAwLFxyXG4gICAgICAgIGNoYXB0ZXJzQ291bnQ6IDAsXHJcbiAgICAgICAgbG9jYXRpb25zQ291bnQ6IDAsXHJcbiAgICAgICAgZmVhdHVyZWQ6IGZhbHNlLFxyXG4gICAgICAgIHNlY29uZGFyeUNoYXJhY3RlcnM6IFtdLFxyXG4gICAgICAgIG5vdGU6IDAsXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoXCJTdG9yeSBhZGRlZCBzdWNjZXNzZnVsbHlcIik7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBSb3V0ZXIucHVzaChgL3N0b3J5LyR7cmVzLmlkfWApO1xyXG4gICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBBRERfU1RPUlksXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICBtZXNzYWdlOiBcIlN0b3J5IGFkZGVkIHN1Y2Nlc3NmdWxseVwiLFxyXG4gICAgICAgICAgICAgIHN0b3J5SWQ6IHJlcy5pZCxcclxuICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoZXJyLm1lc3NhZ2UpO1xyXG4gICAgICB9KTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZWRpdFN0b3J5ID0gKGRhdGEsIHN0b3J5SWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRpc3BhdGNoKHsgdHlwZTogRURJVF9TVE9SWSwgcGF5bG9hZDogeyBsb2FkaW5nU3Rvcnk6IHRydWUgfSB9KTtcclxuICBjb25zdCBpbWFnZU5hbWUgPSBkYXRhLnRpdGxlLnRvTG93ZXJDYXNlKCkuc3BsaXQoXCIgXCIpLmpvaW4oXCJfXCIpO1xyXG5cclxuICBpZiAodHlwZW9mIGRhdGEuYmFubmVyID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICBzdG9yYWdlXHJcbiAgICAgIC5yZWYoYCR7YXV0aC5jdXJyZW50VXNlci51aWR9LyR7aW1hZ2VOYW1lfWApXHJcbiAgICAgIC5wdXQoZGF0YS5iYW5uZXIpXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICByZXR1cm4gc3RvcmFnZVxyXG4gICAgICAgICAgLnJlZihhdXRoLmN1cnJlbnRVc2VyLnVpZClcclxuICAgICAgICAgIC5jaGlsZChpbWFnZU5hbWUpXHJcbiAgICAgICAgICAuZ2V0RG93bmxvYWRVUkwoKTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKHVybCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBkYlxyXG4gICAgICAgICAgLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpXHJcbiAgICAgICAgICAuZG9jKHN0b3J5SWQpXHJcbiAgICAgICAgICAudXBkYXRlKHtcclxuICAgICAgICAgICAgLi4uZGF0YSxcclxuICAgICAgICAgICAgYmFubmVyOiB1cmwsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhcIlN0b3J5IGFkZGVkIHN1Y2Nlc3NmdWxseVwiKTtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiBFRElUX1NUT1JZLFxyXG4gICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIlN0b3J5IGVkaXRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihlcnIubWVzc2FnZSk7XHJcbiAgICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKVxyXG4gICAgICAuZG9jKHN0b3J5SWQpXHJcbiAgICAgIC51cGRhdGUoe1xyXG4gICAgICAgIC4uLmRhdGEsXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoXCJTdG9yeSBhZGRlZCBzdWNjZXNzZnVsbHlcIik7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogRURJVF9TVE9SWSxcclxuICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJTdG9yeSBlZGl0ZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoZXJyLm1lc3NhZ2UpO1xyXG4gICAgICB9KTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYWRkQ2hhcHRlciA9IChkYXRhKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkaXNwYXRjaCh7IHR5cGU6IEFERF9DSEFQVEVSLCBwYXlsb2FkOiB7IGxvYWRpbmc6IHRydWUgfSB9KTtcclxuICBkYi5jb2xsZWN0aW9uKFwiY2hhcHRlcnNcIilcclxuICAgIC5hZGQoe1xyXG4gICAgICAuLi5kYXRhLFxyXG4gICAgICBhdXRob3JJZDogYXV0aC5jdXJyZW50VXNlci51aWQsXHJcbiAgICAgIGNvbW1lbnRzQ291bnQ6IDAsXHJcbiAgICAgIG5vdGU6IDAsXHJcbiAgICAgIHZvdGVyczogW10sXHJcbiAgICAgIHZvdGVzQ291bnQ6IDAsXHJcbiAgICAgIGNyZWF0ZWRBdDogZmlyZWJhc2UuZmlyZXN0b3JlLkZpZWxkVmFsdWUuc2VydmVyVGltZXN0YW1wKCksXHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKVxyXG4gICAgICAgIC5kb2MoZGF0YS5zdG9yeUlkKVxyXG4gICAgICAgIC5nZXQoKVxyXG4gICAgICAgIC50aGVuKChkb2MpID0+IHtcclxuICAgICAgICAgIGNvbnN0IGNoYXJhY3RlcnMgPSBkb2MuZGF0YSgpLnNlY29uZGFyeUNoYXJhY3RlcnM7XHJcbiAgICAgICAgICBjb25zdCBtYWluID0gZG9jLmRhdGEoKS5tYWluQ2hhcmFjdGVycztcclxuICAgICAgICAgIGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpXHJcbiAgICAgICAgICAgIC5kb2MoZGF0YS5zdG9yeUlkKVxyXG4gICAgICAgICAgICAudXBkYXRlKHtcclxuICAgICAgICAgICAgICBzZWNvbmRhcnlDaGFyYWN0ZXJzOiBbXHJcbiAgICAgICAgICAgICAgICAuLi5uZXcgU2V0KFtcclxuICAgICAgICAgICAgICAgICAgLi4uY2hhcmFjdGVycyxcclxuICAgICAgICAgICAgICAgICAgLi4uZGF0YS5jaGFyYWN0ZXJzLmZpbHRlcigoYykgPT4gIW1haW4uaW5jbHVkZXMoYykpLFxyXG4gICAgICAgICAgICAgICAgXSksXHJcbiAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IEFERF9DSEFQVEVSLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkNoYXB0ZXIgYWRkZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICAgICAgICAgIGNoYXBJZDogcmVzLmlkLFxyXG4gICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgLy8gLnRoZW4oKHJlcykgPT4ge1xyXG4gIC8vICAgZGlzcGF0Y2goe1xyXG4gIC8vICAgICB0eXBlOiBBRERfQ0hBUFRFUixcclxuICAvLyAgICAgcGF5bG9hZDoge1xyXG4gIC8vICAgICAgIG1lc3NhZ2U6IFwiQ2hhcHRlciBhZGRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAvLyAgICAgICBjaGFwSWQ6IHJlcy5pZCxcclxuICAvLyAgICAgfSxcclxuICAvLyAgIH0pO1xyXG4gIC8vIH0pXHJcbiAgLy8gLmNhdGNoKChlcnIpID0+XHJcbiAgLy8gICBkaXNwYXRjaCh7XHJcbiAgLy8gICAgIHR5cGU6IEFERF9DSEFQVEVSLFxyXG4gIC8vICAgICBwYXlsb2FkOiB7IG1lc3NhZ2U6IGVyci5tZXNzYWdlLCBjaGFwSWQ6IFwiXCIgfSxcclxuICAvLyAgIH0pXHJcbiAgLy8gKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDaGFwdGVyID0gKHN0b3J5SWQsIGlkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKVxyXG4gICAgLmRvYyhzdG9yeUlkKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigoZG9jKSA9PiB7XHJcbiAgICAgIGlmIChkb2MuZXhpc3RzKSB7XHJcbiAgICAgICAgZGIuY29sbGVjdGlvbihcImNoYXB0ZXJzXCIpXHJcbiAgICAgICAgICAuZG9jKGlkKVxyXG4gICAgICAgICAgLmdldCgpXHJcbiAgICAgICAgICAudGhlbigoZG9jKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkb2MuZXhpc3RzKSB7XHJcbiAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogR0VUX0NIQVBURVIsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgICAgIGNoYXB0ZXI6IHsgLi4uZG9jLmRhdGEoKSwgaWQ6IGRvYy5pZCB9LFxyXG4gICAgICAgICAgICAgICAgICBjaGFwdGVyRXhpc3RzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBHRVRfQ0hBUFRFUixcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHsgY2hhcHRlckV4aXN0czogZmFsc2UgfSxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogR0VUX0NIQVBURVIsXHJcbiAgICAgICAgICBwYXlsb2FkOiB7IGNoYXB0ZXJFeGlzdHM6IGZhbHNlIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGVkaXRDaGFwdGVyID0gKGRhdGEsIHN0b3J5SWQsIGNoYXBpZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGlzcGF0Y2goeyB0eXBlOiBFRElUX0NIQVBURVIsIHBheWxvYWQ6IHsgbG9hZGluZzogdHJ1ZSB9IH0pO1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJjaGFwdGVyc1wiKVxyXG4gICAgLmRvYyhjaGFwaWQpXHJcbiAgICAudXBkYXRlKHsgLi4uZGF0YSB9KVxyXG4gICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKVxyXG4gICAgICAgIC5kb2Moc3RvcnlJZClcclxuICAgICAgICAuZ2V0KClcclxuICAgICAgICAudGhlbigoZG9jKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBjaGFyYWN0ZXJzID0gZG9jLmRhdGEoKS5zZWNvbmRhcnlDaGFyYWN0ZXJzO1xyXG4gICAgICAgICAgY29uc3QgbWFpbiA9IGRvYy5kYXRhKCkubWFpbkNoYXJhY3RlcnM7XHJcbiAgICAgICAgICBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKVxyXG4gICAgICAgICAgICAuZG9jKHN0b3J5SWQpXHJcbiAgICAgICAgICAgIC51cGRhdGUoe1xyXG4gICAgICAgICAgICAgIHNlY29uZGFyeUNoYXJhY3RlcnM6IGRhdGEuY2hhcmFjdGVyc1xyXG4gICAgICAgICAgICAgICAgPyBbXHJcbiAgICAgICAgICAgICAgICAgICAgLi4ubmV3IFNldChbXHJcbiAgICAgICAgICAgICAgICAgICAgICAuLi5jaGFyYWN0ZXJzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgLi4uZGF0YS5jaGFyYWN0ZXJzLmZpbHRlcigoYykgPT4gIW1haW4uaW5jbHVkZXMoYykpLFxyXG4gICAgICAgICAgICAgICAgICAgIF0pLFxyXG4gICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICA6IGNoYXJhY3RlcnMsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBFRElUX0NIQVBURVIsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiQ2hhcHRlciBlZGl0ZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDaGFwdGVycyA9IChpZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGIuY29sbGVjdGlvbihcImNoYXB0ZXJzXCIpXHJcbiAgICAud2hlcmUoXCJzdG9yeUlkXCIsIFwiPT1cIiwgaWQpXHJcbiAgICAub3JkZXJCeShcIm51bWJlclwiLCBcImFzY1wiKVxyXG4gICAgLm9uU25hcHNob3QoKGRvY3MpID0+IHtcclxuICAgICAgbGV0IGFyciA9IFtdO1xyXG4gICAgICBkb2NzLmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgICAgIGFyci5wdXNoKHtcclxuICAgICAgICAgIGF1dGhvcklkOiBkb2MuZGF0YSgpLmF1dGhvcklkLFxyXG4gICAgICAgICAgaWQ6IGRvYy5pZCxcclxuICAgICAgICAgIGNyZWF0ZWRBdDogZG9jLmRhdGEoKS5jcmVhdGVkQXQsXHJcbiAgICAgICAgICBudW1iZXI6IGRvYy5kYXRhKCkubnVtYmVyLFxyXG4gICAgICAgICAgdGl0bGU6IGRvYy5kYXRhKCkudGl0bGUsXHJcbiAgICAgICAgICBjb21tZW50c0NvdW50OiBkb2MuZGF0YSgpLmNvbW1lbnRzQ291bnQsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogR0VUX0NIQVBURVJTLFxyXG4gICAgICAgIHBheWxvYWQ6IGFycixcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdG9yeUNoYXJhY3RlcnMgPSAoaWQpID0+IChkaXNwYXRjaCkgPT4ge307XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VXNlclN0b3JpZXMgPSAoKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKVxyXG4gICAgLndoZXJlKFwiYXV0aG9ySWRcIiwgXCI9PVwiLCBhdXRoLmN1cnJlbnRVc2VyLnVpZClcclxuICAgIC5nZXQoKVxyXG4gICAgLnRoZW4oKGRvY3MpID0+IHtcclxuICAgICAgbGV0IGl0ZW1zID0gW107XHJcbiAgICAgIGRvY3MuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICAgICAgaXRlbXMgPSBbLi4uaXRlbXMsIHsgaWQ6IGRvYy5pZCwgLi4uZG9jLmRhdGEoKSB9XTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBpdGVtcztcclxuICAgIH0pXHJcbiAgICAudGhlbigoaXRlbXMpID0+IHtcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBHRVRfVVNFUl9TVE9SSUVTLCBwYXlsb2FkOiBpdGVtcyB9KTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFVzZXJMb2NhdGlvbnMgPSAoKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkYi5jb2xsZWN0aW9uKFwibG9jYXRpb25zXCIpXHJcbiAgICAud2hlcmUoXCJhdXRob3JJZFwiLCBcIj09XCIsIGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigoZG9jcykgPT4ge1xyXG4gICAgICBsZXQgbG9jYXRpb25zID0gW107XHJcbiAgICAgIGRvY3MuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICAgICAgbG9jYXRpb25zID0gWy4uLmxvY2F0aW9ucywgeyBpZDogZG9jLmlkLCAuLi5kb2MuZGF0YSgpIH1dO1xyXG4gICAgICB9KTtcclxuICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IEdFVF9VU0VSX0xPQ0FUSU9OUyxcclxuICAgICAgICBwYXlsb2FkOiBsb2NhdGlvbnMsXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0RmF2b3JpdGVTdG9yaWVzID0gKCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGIuY29sbGVjdGlvbihcInN0b3JpZXNMaWtlc1wiKVxyXG4gICAgLndoZXJlKFwic2VuZGVySWRcIiwgXCI9PVwiLCBhdXRoLmN1cnJlbnRVc2VyLnVpZClcclxuICAgIC5nZXQoKVxyXG4gICAgLnRoZW4oKGRvY3MpID0+IHtcclxuICAgICAgbGV0IGZhdkFyciA9IFtdO1xyXG4gICAgICBkb2NzLmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgICAgIGZhdkFyciA9IFsuLi5mYXZBcnIsIGRvYy5kYXRhKCkuc3RvcnlJZF07XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gZmF2QXJyO1xyXG4gICAgfSlcclxuICAgIC50aGVuKCh1c2VycykgPT4ge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSB1c2Vycy5tYXAoKHVzZXIpID0+XHJcbiAgICAgICAgZGIuY29sbGVjdGlvbihcInN0b3JpZXNcIikuZG9jKHVzZXIpLmdldCgpXHJcbiAgICAgICk7XHJcbiAgICAgIFByb21pc2UuYWxsKHJlc3VsdCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgbGV0IGZhdlVzZXJzID0gW107XHJcbiAgICAgICAgcmVzLmZvckVhY2goXHJcbiAgICAgICAgICAoZG9jKSA9PiAoZmF2VXNlcnMgPSBbLi4uZmF2VXNlcnMsIHsgaWQ6IGRvYy5pZCwgLi4uZG9jLmRhdGEoKSB9XSlcclxuICAgICAgICApO1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IEdFVF9GQVZPUklURV9TVE9SSUVTLFxyXG4gICAgICAgICAgcGF5bG9hZDogZmF2VXNlcnMsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcbiIsImltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcbmltcG9ydCBcImZpcmViYXNlL2F1dGhcIjtcclxuaW1wb3J0IFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XHJcbmltcG9ydCBcImZpcmViYXNlL3N0b3JhZ2VcIjtcclxuXHJcbmNvbnN0IHByb2RDb25maWcgPSB7XHJcbiAgYXBpS2V5OiBwcm9jZXNzLmVudi5GSVJFQkFTRV9BUElfS0VZLFxyXG4gIGF1dGhEb21haW46IHByb2Nlc3MuZW52LkZJUkVCQVNFX0FVVEhfRE9NQUlOLFxyXG4gIGRhdGFiYXNlVVJMOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9EQVRBQkFTRV9VUkwsXHJcbiAgcHJvamVjdElkOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9QUk9KRUNUX0lELFxyXG4gIHN0b3JhZ2VCdWNrZXQ6IHByb2Nlc3MuZW52LkZJUkVCQVNFX1NUT1JBR0VfQlVDS0VULFxyXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9NRVNTQUdJTkdfU0VOREVSX0lELFxyXG4gIGFwcElkOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9BUFBfSUQsXHJcbn07XHJcblxyXG5jb25zdCBkZXZDb25maWcgPSB7XHJcbiAgYXBpS2V5OiBwcm9jZXNzLmVudi5GSVJFQkFTRV9BUElfS0VZLFxyXG4gIGF1dGhEb21haW46IHByb2Nlc3MuZW52LkZJUkVCQVNFX0FVVEhfRE9NQUlOLFxyXG4gIGRhdGFiYXNlVVJMOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9EQVRBQkFTRV9VUkwsXHJcbiAgcHJvamVjdElkOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9QUk9KRUNUX0lELFxyXG4gIHN0b3JhZ2VCdWNrZXQ6IHByb2Nlc3MuZW52LkZJUkVCQVNFX1NUT1JBR0VfQlVDS0VULFxyXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9NRVNTQUdJTkdfU0VOREVSX0lELFxyXG4gIGFwcElkOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9BUFBfSUQsXHJcbn07XHJcblxyXG5jb25zdCBjb25maWcgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBwcm9kQ29uZmlnIDogZGV2Q29uZmlnO1xyXG5cclxuaWYgKCFmaXJlYmFzZS5hcHBzLmxlbmd0aCkge1xyXG4gIGZpcmViYXNlLmluaXRpYWxpemVBcHAoY29uZmlnKTtcclxufVxyXG5cclxuY29uc3QgZGIgPSBmaXJlYmFzZS5maXJlc3RvcmUoKTtcclxuY29uc3QgYXV0aCA9IGZpcmViYXNlLmF1dGgoKTtcclxuY29uc3Qgc3RvcmFnZSA9IGZpcmViYXNlLnN0b3JhZ2UoKTtcclxuXHJcbmV4cG9ydCB7IGRiLCBhdXRoLCBzdG9yYWdlIH07XHJcbmV4cG9ydCBkZWZhdWx0IGNvbmZpZztcclxuIiwiZXhwb3J0IGNvbnN0IENBVEVHT1JJRVMgPSBbXHJcbiAgeyBuYW1lOiBcIkRyYW1hXCIsIHZhbHVlOiBcImRyYW1hXCIgfSxcclxuICB7IG5hbWU6IFwiQ29tZWR5XCIsIHZhbHVlOiBcImNvbWVkeVwiIH0sXHJcbiAgeyBuYW1lOiBcIkhvcnJvclwiLCB2YWx1ZTogXCJob3Jyb3JcIiB9LFxyXG4gIHsgbmFtZTogXCJSb21hbmNlXCIsIHZhbHVlOiBcInJvbWFuY2VcIiB9LFxyXG4gIHsgbmFtZTogXCJTY2ktZmlcIiwgdmFsdWU6IFwic2NpLWZpXCIgfSxcclxuICB7IG5hbWU6IFwiRmFudGFzeVwiLCB2YWx1ZTogXCJmYW50YXN5XCIgfSxcclxuICB7IG5hbWU6IFwiSHVtb3JcIiwgdmFsdWU6IFwiaHVtb3JcIiB9LFxyXG4gIHsgbmFtZTogXCJBY3Rpb25cIiwgdmFsdWU6IFwiYWN0aW9uXCIgfSxcclxuICB7IG5hbWU6IFwiVGhyaWxsZXJcIiwgdmFsdWU6IFwidGhyaWxsZXJcIiB9LFxyXG4gIHsgbmFtZTogXCJTdXBlcm5hdHVyYWxcIiwgdmFsdWU6IFwic3VwZXJuYXR1cmFsXCIgfSxcclxuICB7IG5hbWU6IFwiQWR2ZW50dXJlXCIsIHZhbHVlOiBcImFkdmVudHVyZVwiIH0sXHJcbiAgeyBuYW1lOiBcIk15c3RlcnlcIiwgdmFsdWU6IFwibXlzdGVyeVwiIH0sXHJcbiAgeyBuYW1lOiBcIldlc3Rlcm5cIiwgdmFsdWU6IFwid2VzdGVyblwiIH0sXHJcbiAgeyBuYW1lOiBcIkhpc3RvcnlcIiwgdmFsdWU6IFwiaGlzdG9yeVwiIH0sXHJcbiAgeyBuYW1lOiBcIkNyaW1lXCIsIHZhbHVlOiBcImNyaW1lXCIgfSxcclxuICB7IG5hbWU6IFwiRmFuZmljdGlvblwiLCB2YWx1ZTogXCJmYW5maWN0aW9uXCIgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBDT1BZUklHSFRTID0gW1xyXG4gIHsgbmFtZTogXCJQdWJsaWMgRG9tYWluXCIsIHZhbHVlOiBcInB1YmxpYyBkb21haW5cIiB9LFxyXG4gIHsgbmFtZTogXCJBbGwgUmlnaHRzIFJlc2VydmVkXCIsIHZhbHVlOiBcImFsbCByaWdodHMgcmVzZXJ2ZWRcIiB9LFxyXG4gIHsgbmFtZTogXCJDcmVhdGl2ZSBDb21tb25zXCIsIHZhbHVlOiBcImNyZWF0aXZlIGNvbW1vbnNcIiB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IExBTkdVQUdFUyA9IFtcclxuICB7IG5hbWU6IFwiQWZhclwiLCB2YWx1ZTogXCJhYVwiIH0sXHJcbiAgeyBuYW1lOiBcIkFia2hhemlhblwiLCB2YWx1ZTogXCJhYlwiIH0sXHJcbiAgeyBuYW1lOiBcIkF2ZXN0YW5cIiwgdmFsdWU6IFwiYWVcIiB9LFxyXG4gIHsgbmFtZTogXCJBZnJpa2FhbnNcIiwgdmFsdWU6IFwiYWZcIiB9LFxyXG4gIHsgbmFtZTogXCJBa2FuXCIsIHZhbHVlOiBcImFrXCIgfSxcclxuICB7IG5hbWU6IFwiQW1oYXJpY1wiLCB2YWx1ZTogXCJhbVwiIH0sXHJcbiAgeyBuYW1lOiBcIkFyYWdvbmVzZVwiLCB2YWx1ZTogXCJhblwiIH0sXHJcbiAgeyBuYW1lOiBcIkFyYWJpY1wiLCB2YWx1ZTogXCJhclwiIH0sXHJcbiAgeyBuYW1lOiBcIkFzc2FtZXNlXCIsIHZhbHVlOiBcImFzXCIgfSxcclxuICB7IG5hbWU6IFwiQXZhcmljXCIsIHZhbHVlOiBcImF2XCIgfSxcclxuICB7IG5hbWU6IFwiQXltYXJhXCIsIHZhbHVlOiBcImF5XCIgfSxcclxuICB7IG5hbWU6IFwiQXplcmJhaWphbmlcIiwgdmFsdWU6IFwiYXpcIiB9LFxyXG4gIHsgbmFtZTogXCJCYXNoa2lyXCIsIHZhbHVlOiBcImJhXCIgfSxcclxuICB7IG5hbWU6IFwiQmVsYXJ1c2lhblwiLCB2YWx1ZTogXCJiZVwiIH0sXHJcbiAgeyBuYW1lOiBcIkJ1bGdhcmlhblwiLCB2YWx1ZTogXCJiZ1wiIH0sXHJcbiAgeyBuYW1lOiBcIkJpaGFyaVwiLCB2YWx1ZTogXCJiaFwiIH0sXHJcbiAgeyBuYW1lOiBcIkJpc2xhbWFcIiwgdmFsdWU6IFwiYmlcIiB9LFxyXG4gIHsgbmFtZTogXCJCYW1iYXJhXCIsIHZhbHVlOiBcImJtXCIgfSxcclxuICB7IG5hbWU6IFwiQmVuZ2FsaVwiLCB2YWx1ZTogXCJiblwiIH0sXHJcbiAgeyBuYW1lOiBcIlRpYmV0YW5cIiwgdmFsdWU6IFwiYm9cIiB9LFxyXG4gIHsgbmFtZTogXCJCcmV0b25cIiwgdmFsdWU6IFwiYnJcIiB9LFxyXG4gIHsgbmFtZTogXCJCb3NuaWFuXCIsIHZhbHVlOiBcImJzXCIgfSxcclxuICB7IG5hbWU6IFwiQ2F0YWxhblwiLCB2YWx1ZTogXCJjYVwiIH0sXHJcbiAgeyBuYW1lOiBcIkNoZWNoZW5cIiwgdmFsdWU6IFwiY2VcIiB9LFxyXG4gIHsgbmFtZTogXCJDaGFtb3Jyb1wiLCB2YWx1ZTogXCJjaFwiIH0sXHJcbiAgeyBuYW1lOiBcIkNvcnNpY2FuXCIsIHZhbHVlOiBcImNvXCIgfSxcclxuICB7IG5hbWU6IFwiQ3JlZVwiLCB2YWx1ZTogXCJjclwiIH0sXHJcbiAgeyBuYW1lOiBcIkN6ZWNoXCIsIHZhbHVlOiBcImNzXCIgfSxcclxuICB7IG5hbWU6IFwiT2xkIENodXJjaCBTbGF2b25pY1wiLCB2YWx1ZTogXCJjdVwiIH0sXHJcbiAgeyBuYW1lOiBcIkNodXZhc2hcIiwgdmFsdWU6IFwiY3ZcIiB9LFxyXG4gIHsgbmFtZTogXCJXZWxzaFwiLCB2YWx1ZTogXCJjeVwiIH0sXHJcbiAgeyBuYW1lOiBcIkRhbmlzaFwiLCB2YWx1ZTogXCJkYVwiIH0sXHJcbiAgeyBuYW1lOiBcIkdlcm1hblwiLCB2YWx1ZTogXCJkZVwiIH0sXHJcbiAgeyBuYW1lOiBcIkRpdmVoaVwiLCB2YWx1ZTogXCJkdlwiIH0sXHJcbiAgeyBuYW1lOiBcIkR6b25na2hhXHRcIiwgdmFsdWU6IFwiZHpcIiB9LFxyXG4gIHsgbmFtZTogXCJFd2VcIiwgdmFsdWU6IFwiZWVcIiB9LFxyXG4gIHsgbmFtZTogXCJHcmVla1wiLCB2YWx1ZTogXCJlbFwiIH0sXHJcbiAgeyBuYW1lOiBcIkVuZ2xpc2hcIiwgdmFsdWU6IFwiZW5cIiB9LFxyXG4gIHsgbmFtZTogXCJFc3BlcmFudG9cIiwgdmFsdWU6IFwiZW9cIiB9LFxyXG4gIHsgbmFtZTogXCJTcGFuaXNoXCIsIHZhbHVlOiBcImVzXCIgfSxcclxuICB7IG5hbWU6IFwiRXN0b25pYW5cIiwgdmFsdWU6IFwiZXRcIiB9LFxyXG4gIHsgbmFtZTogXCJCYXNxdWVcIiwgdmFsdWU6IFwiZXVcIiB9LFxyXG4gIHsgbmFtZTogXCJQZXJzaWFuXCIsIHZhbHVlOiBcImZhXCIgfSxcclxuICB7IG5hbWU6IFwiRnVsYWhcIiwgdmFsdWU6IFwiZmZcIiB9LFxyXG4gIHsgbmFtZTogXCJGaW5uaXNoXCIsIHZhbHVlOiBcImZpXCIgfSxcclxuICB7IG5hbWU6IFwiRmlqaWFuXCIsIHZhbHVlOiBcImZqXCIgfSxcclxuICB7IG5hbWU6IFwiRmFyb2VzZVwiLCB2YWx1ZTogXCJmb1wiIH0sXHJcbiAgeyBuYW1lOiBcIkZyZW5jaFwiLCB2YWx1ZTogXCJmclwiIH0sXHJcbiAgeyBuYW1lOiBcIldlc3Rlcm4gRnJpc2lhblwiLCB2YWx1ZTogXCJmeVwiIH0sXHJcbiAgeyBuYW1lOiBcIklyaXNoXCIsIHZhbHVlOiBcImdhXCIgfSxcclxuICB7IG5hbWU6IFwiU2NvdHRpc2ggR2FlbGljXCIsIHZhbHVlOiBcImdkXCIgfSxcclxuICB7IG5hbWU6IFwiR2FsaWNpYW5cIiwgdmFsdWU6IFwiZ2xcIiB9LFxyXG4gIHsgbmFtZTogXCJHdWFyYW5pXCIsIHZhbHVlOiBcImduXCIgfSxcclxuICB7IG5hbWU6IFwiR3VqYXJhdGlcIiwgdmFsdWU6IFwiZ3VcIiB9LFxyXG4gIHsgbmFtZTogXCJNYW54XCIsIHZhbHVlOiBcImd2XCIgfSxcclxuICB7IG5hbWU6IFwiSGF1c2FcIiwgdmFsdWU6IFwiaGFcIiB9LFxyXG4gIHsgbmFtZTogXCJIZWJyZXdcIiwgdmFsdWU6IFwiaGVcIiB9LFxyXG4gIHsgbmFtZTogXCJIaW5kaVwiLCB2YWx1ZTogXCJoaVwiIH0sXHJcbiAgeyBuYW1lOiBcIkhpcmkgTW90dVwiLCB2YWx1ZTogXCJob1wiIH0sXHJcbiAgeyBuYW1lOiBcIkNyb2F0aWFuXCIsIHZhbHVlOiBcImhyXCIgfSxcclxuICB7IG5hbWU6IFwiSGFpdGlhblwiLCB2YWx1ZTogXCJodFwiIH0sXHJcbiAgeyBuYW1lOiBcIkh1bmdhcmlhblwiLCB2YWx1ZTogXCJodVwiIH0sXHJcbiAgeyBuYW1lOiBcIkFybWVuaWFuXCIsIHZhbHVlOiBcImh5XCIgfSxcclxuICB7IG5hbWU6IFwiSGVyZXJvXCIsIHZhbHVlOiBcImh6XCIgfSxcclxuICB7IG5hbWU6IFwiSW50ZXJsaW5ndWFcIiwgdmFsdWU6IFwiaWFcIiB9LFxyXG4gIHsgbmFtZTogXCJJbmRvbmVzaWFuXCIsIHZhbHVlOiBcImlkXCIgfSxcclxuICB7IG5hbWU6IFwiSW50ZXJsaW5ndWVcIiwgdmFsdWU6IFwiaWVcIiB9LFxyXG4gIHsgbmFtZTogXCJJZ2JvXCIsIHZhbHVlOiBcImlnXCIgfSxcclxuICB7IG5hbWU6IFwiU2ljaHVhbiBZaVwiLCB2YWx1ZTogXCJpaVwiIH0sXHJcbiAgeyBuYW1lOiBcIkludXBpYXFcIiwgdmFsdWU6IFwiaWtcIiB9LFxyXG4gIHsgbmFtZTogXCJJZG9cIiwgdmFsdWU6IFwiaW9cIiB9LFxyXG4gIHsgbmFtZTogXCJJY2VsYW5kaWNcIiwgdmFsdWU6IFwiaXNcIiB9LFxyXG4gIHsgbmFtZTogXCJJdGFsaWFuXCIsIHZhbHVlOiBcIml0XCIgfSxcclxuICB7IG5hbWU6IFwiSW51a3RpdHV0XCIsIHZhbHVlOiBcIml1XCIgfSxcclxuICB7IG5hbWU6IFwiSmFwYW5lc2VcIiwgdmFsdWU6IFwiamFcIiB9LFxyXG4gIHsgbmFtZTogXCJKYXZhbmVzZVwiLCB2YWx1ZTogXCJqdlwiIH0sXHJcbiAgeyBuYW1lOiBcIkdlb3JnaWFuXCIsIHZhbHVlOiBcImthXCIgfSxcclxuICB7IG5hbWU6IFwiS29uZ29cIiwgdmFsdWU6IFwia2dcIiB9LFxyXG4gIHsgbmFtZTogXCJLaWt1eXVcIiwgdmFsdWU6IFwia2lcIiB9LFxyXG4gIHsgbmFtZTogXCJLd2FueWFtYVwiLCB2YWx1ZTogXCJralwiIH0sXHJcbiAgeyBuYW1lOiBcIkthemFraFwiLCB2YWx1ZTogXCJra1wiIH0sXHJcbiAgeyBuYW1lOiBcIkdyZWVubGFuZGljXCIsIHZhbHVlOiBcImtsXCIgfSxcclxuICB7IG5hbWU6IFwiS2htZXJcIiwgdmFsdWU6IFwia21cIiB9LFxyXG4gIHsgbmFtZTogXCJLYW5uYWRhXCIsIHZhbHVlOiBcImtuXCIgfSxcclxuICB7IG5hbWU6IFwiS29yZWFuXCIsIHZhbHVlOiBcImtvXCIgfSxcclxuICB7IG5hbWU6IFwiS2FudXJpXCIsIHZhbHVlOiBcImtyXCIgfSxcclxuICB7IG5hbWU6IFwiS2FzaG1pcmlcIiwgdmFsdWU6IFwia3NcIiB9LFxyXG4gIHsgbmFtZTogXCJLdXJkaXNoXCIsIHZhbHVlOiBcImt1XCIgfSxcclxuICB7IG5hbWU6IFwiS29taVwiLCB2YWx1ZTogXCJrdlwiIH0sXHJcbiAgeyBuYW1lOiBcIkNvcm5pc2hcIiwgdmFsdWU6IFwia3dcIiB9LFxyXG4gIHsgbmFtZTogXCJLaXJnaGl6XCIsIHZhbHVlOiBcImt5XCIgfSxcclxuICB7IG5hbWU6IFwiTGF0aW5cIiwgdmFsdWU6IFwibGFcIiB9LFxyXG4gIHsgbmFtZTogXCJMdXhlbWJvdXJnaXNoXCIsIHZhbHVlOiBcImxiXCIgfSxcclxuICB7IG5hbWU6IFwiR2FuZGFcIiwgdmFsdWU6IFwibGdcIiB9LFxyXG4gIHsgbmFtZTogXCJMaW1idXJnaXNoXCIsIHZhbHVlOiBcImxpXCIgfSxcclxuICB7IG5hbWU6IFwiTGluZ2FsYVwiLCB2YWx1ZTogXCJsblwiIH0sXHJcbiAgeyBuYW1lOiBcIkxhb1wiLCB2YWx1ZTogXCJsb1wiIH0sXHJcbiAgeyBuYW1lOiBcIkxpdGh1YW5pYW5cIiwgdmFsdWU6IFwibHRcIiB9LFxyXG4gIHsgbmFtZTogXCJMdWJhXCIsIHZhbHVlOiBcImx1XCIgfSxcclxuICB7IG5hbWU6IFwiTGF0dmlhblwiLCB2YWx1ZTogXCJsdlwiIH0sXHJcbiAgeyBuYW1lOiBcIk1hbGFnYXN5XCIsIHZhbHVlOiBcIm1nXCIgfSxcclxuICB7IG5hbWU6IFwiTWFyc2hhbGxlc2VcIiwgdmFsdWU6IFwibWhcIiB9LFxyXG4gIHsgbmFtZTogXCJNxIFvcmlcIiwgdmFsdWU6IFwibWlcIiB9LFxyXG4gIHsgbmFtZTogXCJNYWNlZG9uaWFuXCIsIHZhbHVlOiBcIm1rXCIgfSxcclxuICB7IG5hbWU6IFwiTWFsYXlhbGFtXCIsIHZhbHVlOiBcIm1sXCIgfSxcclxuICB7IG5hbWU6IFwiTW9uZ29saWFuXCIsIHZhbHVlOiBcIm1uXCIgfSxcclxuICB7IG5hbWU6IFwiTW9sZGF2aWFuXCIsIHZhbHVlOiBcIm1vXCIgfSxcclxuICB7IG5hbWU6IFwiTWFyYXRoaVwiLCB2YWx1ZTogXCJtclwiIH0sXHJcbiAgeyBuYW1lOiBcIk1hbGF5XCIsIHZhbHVlOiBcIm1zXCIgfSxcclxuICB7IG5hbWU6IFwiTWFsdGVzZVwiLCB2YWx1ZTogXCJtdFwiIH0sXHJcbiAgeyBuYW1lOiBcIkJ1cm1lc2VcIiwgdmFsdWU6IFwibXlcIiB9LFxyXG4gIHsgbmFtZTogXCJOYXVydVwiLCB2YWx1ZTogXCJuYVwiIH0sXHJcbiAgeyBuYW1lOiBcIk5vcndlZ2lhbiBCb2ttw6VsXCIsIHZhbHVlOiBcIm5iXCIgfSxcclxuICB7IG5hbWU6IFwiTm9ydGggTmRlYmVsZVwiLCB2YWx1ZTogXCJuZFwiIH0sXHJcbiAgeyBuYW1lOiBcIk5lcGFsaVwiLCB2YWx1ZTogXCJuZVwiIH0sXHJcbiAgeyBuYW1lOiBcIk5kb25nYVwiLCB2YWx1ZTogXCJuZ1wiIH0sXHJcbiAgeyBuYW1lOiBcIkR1dGNoXCIsIHZhbHVlOiBcIm5sXCIgfSxcclxuICB7IG5hbWU6IFwiTm9yd2VnaWFuIE55bm9yc2tcIiwgdmFsdWU6IFwibm5cIiB9LFxyXG4gIHsgbmFtZTogXCJOb3J3ZWdpYW5cIiwgdmFsdWU6IFwibm9cIiB9LFxyXG4gIHsgbmFtZTogXCJTb3V0aCBOZGViZWxlXCIsIHZhbHVlOiBcIm5yXCIgfSxcclxuICB7IG5hbWU6IFwiTmF2YWpvXCIsIHZhbHVlOiBcIm52XCIgfSxcclxuICB7IG5hbWU6IFwiQ2hpY2hld2FcIiwgdmFsdWU6IFwibnlcIiB9LFxyXG4gIHsgbmFtZTogXCJPY2NpdGFuXCIsIHZhbHVlOiBcIm9jXCIgfSxcclxuICB7IG5hbWU6IFwiT2ppYndhXCIsIHZhbHVlOiBcIm9qXCIgfSxcclxuICB7IG5hbWU6IFwiT3JvbW9cIiwgdmFsdWU6IFwib21cIiB9LFxyXG4gIHsgbmFtZTogXCJPcml5YVwiLCB2YWx1ZTogXCJvclwiIH0sXHJcbiAgeyBuYW1lOiBcIk9zc2V0aWFuXCIsIHZhbHVlOiBcIm9zXCIgfSxcclxuICB7IG5hbWU6IFwiUGFuamFiaVwiLCB2YWx1ZTogXCJwYVwiIH0sXHJcbiAgeyBuYW1lOiBcIlDEgWxpXCIsIHZhbHVlOiBcInBpXCIgfSxcclxuICB7IG5hbWU6IFwiUG9saXNoXCIsIHZhbHVlOiBcInBsXCIgfSxcclxuICB7IG5hbWU6IFwiUGFzaHRvXCIsIHZhbHVlOiBcInBzXCIgfSxcclxuICB7IG5hbWU6IFwiUG9ydHVndWVzZVwiLCB2YWx1ZTogXCJwdFwiIH0sXHJcbiAgeyBuYW1lOiBcIlF1ZWNodWFcIiwgdmFsdWU6IFwicXVcIiB9LFxyXG4gIHsgbmFtZTogXCJSZXVuaW9uZXNlXCIsIHZhbHVlOiBcInJjXCIgfSxcclxuICB7IG5hbWU6IFwiUm9tYW5zaFwiLCB2YWx1ZTogXCJybVwiIH0sXHJcbiAgeyBuYW1lOiBcIktpcnVuZGlcIiwgdmFsdWU6IFwicm5cIiB9LFxyXG4gIHsgbmFtZTogXCJSb21hbmlhblwiLCB2YWx1ZTogXCJyb1wiIH0sXHJcbiAgeyBuYW1lOiBcIlJ1c3NpYW5cIiwgdmFsdWU6IFwicnVcIiB9LFxyXG4gIHsgbmFtZTogXCJLaW55YXJ3YW5kYVwiLCB2YWx1ZTogXCJyd1wiIH0sXHJcbiAgeyBuYW1lOiBcIlNhbnNrcml0XCIsIHZhbHVlOiBcInNhXCIgfSxcclxuICB7IG5hbWU6IFwiU2FyZGluaWFuXCIsIHZhbHVlOiBcInNjXCIgfSxcclxuICB7IG5hbWU6IFwiU2luZGhpXCIsIHZhbHVlOiBcInNkXCIgfSxcclxuICB7IG5hbWU6IFwiTm9ydGhlcm4gU2FtaVwiLCB2YWx1ZTogXCJzZVwiIH0sXHJcbiAgeyBuYW1lOiBcIlNhbmdvXCIsIHZhbHVlOiBcInNnXCIgfSxcclxuICB7IG5hbWU6IFwiU2VyYm8tQ3JvYXRpYW5cIiwgdmFsdWU6IFwic2hcIiB9LFxyXG4gIHsgbmFtZTogXCJTaW5oYWxlc2VcIiwgdmFsdWU6IFwic2lcIiB9LFxyXG4gIHsgbmFtZTogXCJTbG92YWtcIiwgdmFsdWU6IFwic2tcIiB9LFxyXG4gIHsgbmFtZTogXCJTbG92ZW5pYW5cIiwgdmFsdWU6IFwic2xcIiB9LFxyXG4gIHsgbmFtZTogXCJTYW1vYW5cIiwgdmFsdWU6IFwic21cIiB9LFxyXG4gIHsgbmFtZTogXCJTaG9uYVwiLCB2YWx1ZTogXCJzblwiIH0sXHJcbiAgeyBuYW1lOiBcIlNvbWFsaVwiLCB2YWx1ZTogXCJzb1wiIH0sXHJcbiAgeyBuYW1lOiBcIkFsYmFuaWFuXCIsIHZhbHVlOiBcInNxXCIgfSxcclxuICB7IG5hbWU6IFwiU2VyYmlhblwiLCB2YWx1ZTogXCJzclwiIH0sXHJcbiAgeyBuYW1lOiBcIlN3YXRpXCIsIHZhbHVlOiBcInNzXCIgfSxcclxuICB7IG5hbWU6IFwiU290aG9cIiwgdmFsdWU6IFwic3RcIiB9LFxyXG4gIHsgbmFtZTogXCJTdW5kYW5lc2VcIiwgdmFsdWU6IFwic3VcIiB9LFxyXG4gIHsgbmFtZTogXCJTd2VkaXNoXCIsIHZhbHVlOiBcInN2XCIgfSxcclxuICB7IG5hbWU6IFwiU3dhaGlsaVwiLCB2YWx1ZTogXCJzd1wiIH0sXHJcbiAgeyBuYW1lOiBcIlRhbWlsXCIsIHZhbHVlOiBcInRhXCIgfSxcclxuICB7IG5hbWU6IFwiVGVsdWd1XCIsIHZhbHVlOiBcInRlXCIgfSxcclxuICB7IG5hbWU6IFwiVGFqaWtcIiwgdmFsdWU6IFwidGdcIiB9LFxyXG4gIHsgbmFtZTogXCJUaGFpXCIsIHZhbHVlOiBcInRoXCIgfSxcclxuICB7IG5hbWU6IFwiVGlncmlueWFcIiwgdmFsdWU6IFwidGlcIiB9LFxyXG4gIHsgbmFtZTogXCJUdXJrbWVuXCIsIHZhbHVlOiBcInRrXCIgfSxcclxuICB7IG5hbWU6IFwiVGFnYWxvZ1wiLCB2YWx1ZTogXCJ0bFwiIH0sXHJcbiAgeyBuYW1lOiBcIlRzd2FuYVwiLCB2YWx1ZTogXCJ0blwiIH0sXHJcbiAgeyBuYW1lOiBcIlRvbmdhXCIsIHZhbHVlOiBcInRvXCIgfSxcclxuICB7IG5hbWU6IFwiVHVya2lzaFwiLCB2YWx1ZTogXCJ0clwiIH0sXHJcbiAgeyBuYW1lOiBcIlRzb25nYVwiLCB2YWx1ZTogXCJ0c1wiIH0sXHJcbiAgeyBuYW1lOiBcIlRhdGFyXCIsIHZhbHVlOiBcInR0XCIgfSxcclxuICB7IG5hbWU6IFwiVHdpXCIsIHZhbHVlOiBcInR3XCIgfSxcclxuICB7IG5hbWU6IFwiVGFoaXRpYW5cIiwgdmFsdWU6IFwidHlcIiB9LFxyXG4gIHsgbmFtZTogXCJVaWdodXJcIiwgdmFsdWU6IFwidWdcIiB9LFxyXG4gIHsgbmFtZTogXCJVa3JhaW5pYW5cIiwgdmFsdWU6IFwidWtcIiB9LFxyXG4gIHsgbmFtZTogXCJVcmR1XCIsIHZhbHVlOiBcInVyXCIgfSxcclxuICB7IG5hbWU6IFwiVXpiZWtcIiwgdmFsdWU6IFwidXpcIiB9LFxyXG4gIHsgbmFtZTogXCJWZW5kYVwiLCB2YWx1ZTogXCJ2ZVwiIH0sXHJcbiAgeyBuYW1lOiBcIlZpw6p0IE5hbWVzZVwiLCB2YWx1ZTogXCJ2aVwiIH0sXHJcbiAgeyBuYW1lOiBcIlZvbGFww7xrXCIsIHZhbHVlOiBcInZvXCIgfSxcclxuICB7IG5hbWU6IFwiV2FsbG9vblwiLCB2YWx1ZTogXCJ3YVwiIH0sXHJcbiAgeyBuYW1lOiBcIldvbG9mXCIsIHZhbHVlOiBcIndvXCIgfSxcclxuICB7IG5hbWU6IFwiWGhvc2FcIiwgdmFsdWU6IFwieGhcIiB9LFxyXG4gIHsgbmFtZTogXCJZaWRkaXNoXCIsIHZhbHVlOiBcInlpXCIgfSxcclxuICB7IG5hbWU6IFwiWW9ydWJhXCIsIHZhbHVlOiBcInlvXCIgfSxcclxuICB7IG5hbWU6IFwiWmh1YW5nXCIsIHZhbHVlOiBcInphXCIgfSxcclxuICB7IG5hbWU6IFwiQ2hpbmVzZVwiLCB2YWx1ZTogXCJ6aFwiIH0sXHJcbiAgeyBuYW1lOiBcIlp1bHVcIiwgdmFsdWU6IFwienVcIiB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNUQVRVUyA9IFtcclxuICB7IG5hbWU6IFwiSW4gUHJvZ3Jlc3NcIiwgdmFsdWU6IFwiaW4gcHJvZ3Jlc3NcIiB9LFxyXG4gIHsgbmFtZTogXCJJbiBIaWF0dXNcIiwgdmFsdWU6IFwiaW4gaGlhdHVzXCIgfSxcclxuICB7IG5hbWU6IFwiQ29tcGxldGVkXCIsIHZhbHVlOiBcImNvbXBsZXRlZFwiIH0sXHJcbl07XHJcblxyXG4vLyBUWVBFU1xyXG5leHBvcnQgY29uc3QgR0VUX1BST0ZJTEUgPSBcIkdFVF9QUk9GSUxFXCI7XHJcbmV4cG9ydCBjb25zdCBMT0dJTiA9IFwiTE9HSU5cIjtcclxuZXhwb3J0IGNvbnN0IFJFR0lTVEVSID0gXCJSRUdJU1RFUlwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9TVE9SWSA9IFwiR0VUX1NUT1JZXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfVVNFUl9TVE9SSUVTID0gXCJHRVRfVVNFUl9TVE9SSUVTXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfRkFWT1JJVEVfU1RPUklFUyA9IFwiR0VUX0ZBVk9SSVRFX1NUT1JJRVNcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9TVE9SWSA9IFwiQUREX1NUT1JZXCI7XHJcbmV4cG9ydCBjb25zdCBFRElUX1NUT1JZID0gXCJFRElUX1NUT1JZXCI7XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX0NIQVBURVIgPSBcIkdFVF9DSEFQVEVSXCI7XHJcbmV4cG9ydCBjb25zdCBBRERfQ0hBUFRFUiA9IFwiQUREX0NIQVBURVJcIjtcclxuZXhwb3J0IGNvbnN0IEVESVRfQ0hBUFRFUiA9IFwiRURJVF9DSEFQVEVSXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfQ0hBUFRFUlMgPSBcIkdFVF9DSEFQVEVSU1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9DSEFSQUNURVIgPSBcIkFERF9DSEFSQUNURVJcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9DSEFSQUNURVIgPSBcIkdFVF9DSEFSQUNURVJcIjtcclxuZXhwb3J0IGNvbnN0IEVESVRfQ0hBUkFDVEVSID0gXCJFRElUX0NIQVJBQ1RFUlwiO1xyXG5leHBvcnQgY29uc3QgR0VUX1VTRVJfQ0hBUkFDVEVSUyA9IFwiR0VUX1VTRVJfQ0hBUkFDVEVSU1wiO1xyXG5leHBvcnQgY29uc3QgR0VUX1VTRVJfTE9DQVRJT05TID0gXCJHRVRfVVNFUl9MT0NBVElPTlNcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9GQVZPUklURV9DSEFSQUNURVJTID0gXCJHRVRfRkFWT1JJVEVfQ0hBUkFDVEVSU1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9GQVZPUklURV9BVVRIT1JTID0gXCJHRVRfRkFWT1JJVEVfQVVUSE9SU1wiO1xyXG5leHBvcnQgY29uc3QgR0VUX0ZPTExPV0VSUyA9IFwiR0VUX0ZPTExPV0VSU1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IERJU1BBVENIX0VSUk9SID0gXCJESVNQQVRDSF9FUlJPUlwiO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2FwcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9hdXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2ZpcmVzdG9yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9zdG9yYWdlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzLWltYWdlLXVybFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9