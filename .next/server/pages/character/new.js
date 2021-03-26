module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/character/new.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/common/CharacterCard.js":
/*!********************************************!*\
  !*** ./components/common/CharacterCard.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_dummy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/dummy */ "./utils/dummy.js");
var _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\components\\common\\CharacterCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const CharacterCard = ({
  character,
  type,
  removeCharacter
}) => {
  return __jsx("figure", {
    className: `card character-card ${type ? type : ""}`,
    "data-aos": "zoom-in-up",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, type === "add" && __jsx("span", {
    onClick: () => removeCharacter(character.id),
    className: "remove-btn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, "x"), __jsx("div", {
    className: "img-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: character !== null && character !== void 0 && character.image ? character.image : _utils_dummy__WEBPACK_IMPORTED_MODULE_1__["dummy"].noImage,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  })), __jsx("figcaption", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, `${character === null || character === void 0 ? void 0 : character.firstname} ${character === null || character === void 0 ? void 0 : character.lastname}`), type === "favorites" || type === "story" && __jsx("span", {
    className: "author",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, "Author: ", character === null || character === void 0 ? void 0 : character.authorName), (type === "add" || type === "show") && __jsx("span", {
    className: "author",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, "Relation: ", character === null || character === void 0 ? void 0 : character.relation)));
};

/* harmony default export */ __webpack_exports__["default"] = (CharacterCard);

/***/ }),

/***/ "./components/forms/CharacterForm.js":
/*!*******************************************!*\
  !*** ./components/forms/CharacterForm.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Relatives__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Relatives */ "./components/forms/Relatives.js");
/* harmony import */ var _ImageRow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ImageRow */ "./components/forms/ImageRow.js");
/* harmony import */ var _RadioButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RadioButton */ "./components/forms/RadioButton.js");
var _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\components\\forms\\CharacterForm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const CharacterForm = ({
  form,
  characters,
  character,
  submit,
  onFailed,
  visibility,
  setVisibility,
  type,
  loadingCharacter,
  initialValues,
  deleteCharacter
}) => {
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    layout: "vertical",
    scrollToFirstError: true,
    onFinishFailed: onFailed,
    onFinish: submit,
    form: form,
    initialValues: initialValues,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, __jsx(_ImageRow__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "image",
    form: form,
    itemImage: character === null || character === void 0 ? void 0 : character.image,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    align: "bottom",
    gutter: [24, 24],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 8,
    xs: 24,
    sm: 24,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    label: "Firstname",
    name: "firstname",
    rules: [{
      required: true,
      message: "A firstname is required"
    }, {
      max: 20
    }],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 8,
    xs: 24,
    sm: 24,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    label: "Lastname",
    name: "lastname",
    rules: [{
      max: 65
    }],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 8,
    xs: 24,
    sm: 24,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    label: "Nickname",
    name: "nickname",
    rules: [{
      max: 65
    }],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    gutter: [24, 24],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 8,
    sm: 24,
    xs: 24,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "gender",
    label: "Gender",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 8,
    sm: 24,
    xs: 24,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "occupation",
    label: "Occupation",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 8,
    sm: 24,
    xs: 24,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "residence",
    label: "Residence",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    gutter: [24, 24],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 8,
    xs: 24,
    sm: 24,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    label: "Ethnicity",
    name: "ethnicity",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 8,
    xs: 24,
    sm: 24,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    label: "Group",
    name: "group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 13
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 4,
    xs: 24,
    sm: 24,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    label: "Age",
    name: "age",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["InputNumber"], {
    min: 0,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 13
    }
  }))), __jsx(_RadioButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    lg: 4,
    md: 4,
    sm: 24,
    xs: 24,
    name: "public",
    label: "Visibility",
    num1: "1",
    num2: "2",
    label1: "Public",
    label2: "Private",
    setFunc: setVisibility,
    val: visibility,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 9
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    label: "Description",
    name: "description",
    rules: [{
      max: 180,
      message: "Your description cannot exceed 180 characters"
    }],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 7
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
      lineNumber: 126,
      columnNumber: 9
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 7
    }
  }), __jsx(_Relatives__WEBPACK_IMPORTED_MODULE_2__["default"], {
    character: character && character,
    form: form,
    characters: characters,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 7
    }
  }), type === "add" ? loadingCharacter ? __jsx("button", {
    disabled: true,
    className: "spin-btn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Spin"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 13
    }
  })) : __jsx("button", {
    type: "submit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 11
    }
  }, "Create") : loadingCharacter ? __jsx("button", {
    disabled: true,
    className: "spin-btn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Spin"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 11
    }
  })) : __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    gutter: [32, 16],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 16,
    sm: 24,
    xs: 24,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 11
    }
  }, __jsx("button", {
    type: "submit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 13
    }
  }, "Edit")), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 8,
    sm: 24,
    xs: 24,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popconfirm"], {
    title: "Do you really want to delete this character ?",
    onConfirm: () => deleteCharacter(character.id, character.firstname, character.lastname),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 13
    }
  }, __jsx("button", {
    className: "delete-btn",
    type: "button",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 15
    }
  }, "Delete")))));
};

/* harmony default export */ __webpack_exports__["default"] = (CharacterForm);

/***/ }),

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

/***/ "./components/forms/Relatives.js":
/*!***************************************!*\
  !*** ./components/forms/Relatives.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_CharacterCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/CharacterCard */ "./components/common/CharacterCard.js");
var _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\components\\forms\\Relatives.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const {
  Option
} = antd__WEBPACK_IMPORTED_MODULE_0__["Select"];

const Relatives = ({
  character,
  characters,
  form
}) => {
  const [relations, setRelations] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(character ? character.relatives : []);
  const [currentChar, setCurrentChar] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("");
  const [currentRel, setCurrentRel] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("");
  const [selectedCharacters, setSelectedCharacters] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState([]);
  const [selectedArr, setSelectedArr] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(character ? character.relatives.map(c => c.character_id) : []);
  const [showErrorRel, setShowErrorRel] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false);
  const [showErrorChar, setShowErrorChar] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false);

  const addRelation = () => {
    let newRelations = [...relations];

    if (currentChar && currentRel) {
      newRelations = [...newRelations, {
        character_id: currentChar,
        relation: currentRel
      }];
      setSelectedCharacters([...selectedCharacters, _objectSpread(_objectSpread({}, characters.find(c => c.id === currentChar)), {}, {
        relation: currentRel
      })]);
      setSelectedArr([...selectedArr, currentChar]);
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

  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    if (character && characters.length > 0) {
      setSelectedCharacters(character.relatives.map(c => ({
        firstname: characters.find(char => char.id === c.character_id).firstname,
        lastname: characters.find(char => char.id === c.character_id).lastname,
        image: characters.find(char => char.id === c.character_id).image,
        id: characters.find(char => char.id === c.character_id).id,
        relation: c.relation
      })));
    }
  }, [character, characters]);

  const removeCharacter = id => {
    setSelectedCharacters(selectedCharacters.filter(c => c.id !== id));
    setSelectedArr(selectedArr.filter(c => c !== id));
    setRelations(relations.filter(c => c.character_id !== id));
    form.setFieldsValue({
      relatives: relations.filter(c => c.character_id !== id)
    });
  };

  return __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "relatives",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 5
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }
  }, "Relationships"), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Row"], {
    gutter: [24, 12],
    align: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    md: 11,
    sm: 24,
    xs: 24,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    label: "Select a character",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Select"], {
    value: currentChar,
    onChange: val => setCurrentChar(val),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }
  }, __jsx(Option, {
    value: "none",
    disabled: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 15
    }
  }, "Select a character"), characters === null || characters === void 0 ? void 0 : characters.filter(c => !selectedArr.includes(c.id)).map(c => __jsx(Option, {
    key: c.id,
    value: c.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 19
    }
  }, `${c.firstname} ${c.lastname}`))), showErrorChar && __jsx("div", {
    className: "ant-form-item-explain ant-form-item-explain-error",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 15
    }
  }, __jsx("div", {
    role: "alert",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 17
    }
  }, "A character is required")))), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    md: 11,
    sm: 21,
    xs: 21,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    label: "Type of relationship",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Input"], {
    value: currentRel,
    onChange: e => setCurrentRel(e.target.value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }
  }), showErrorRel && __jsx("div", {
    className: "ant-form-item-explain ant-form-item-explain-error",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 15
    }
  }, __jsx("div", {
    role: "alert",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 17
    }
  }, "A type of relationship is required")))), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    md: 2,
    xs: 3,
    sm: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "select-add-input-iconbox",
    onClick: addRelation,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 11
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 13
    }
  }, "+")))), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Divider"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 7
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Row"], {
    gutter: [16, 16],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 7
    }
  }, selectedCharacters === null || selectedCharacters === void 0 ? void 0 : selectedCharacters.map(rel => __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    lg: 4,
    md: 8,
    sm: 12,
    xs: 24,
    key: rel.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 11
    }
  }, __jsx(_common_CharacterCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    removeCharacter: removeCharacter,
    type: "add",
    character: rel,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 13
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Relatives);

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

/***/ "./components/hoc/LoadingScreen.js":
/*!*****************************************!*\
  !*** ./components/hoc/LoadingScreen.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\components\\hoc\\LoadingScreen.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const LoadingScreen = ({
  children,
  loading
}) => {
  return !loading ? children : __jsx("div", {
    className: "loader-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "loader",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (LoadingScreen);

/***/ }),

/***/ "./components/hoc/RedirectComp.js":
/*!****************************************!*\
  !*** ./components/hoc/RedirectComp.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\components\\hoc\\RedirectComp.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const RedirectComp = ({
  condition,
  type,
  children
}) => {
  return condition ? children : type === "404" ? __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Result"], {
    status: "404",
    title: "404",
    subTitle: "Sorry, the page you visited does not exist.",
    extra: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      type: "primary",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 14
      }
    }, "Back Home"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }) : type === "403" ? __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Result"], {
    status: "403",
    title: "403",
    subTitle: "Sorry, you are not authorized to access this page.",
    extra: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      type: "primary",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 14
      }
    }, "Back Home"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }) : type === "redirect" ? window.location.href = "/auth" : __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (RedirectComp);

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
              username,
              image: doc.data().image
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

/***/ "./pages/character/new.js":
/*!********************************!*\
  !*** ./pages/character/new.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_userHooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/userHooks */ "./hooks/userHooks.js");
/* harmony import */ var _redux_actions_charactersActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/actions/charactersActions */ "./redux/actions/charactersActions.js");
/* harmony import */ var _components_hoc_LoadingScreen__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/hoc/LoadingScreen */ "./components/hoc/LoadingScreen.js");
/* harmony import */ var _components_hoc_RedirectComp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/hoc/RedirectComp */ "./components/hoc/RedirectComp.js");
/* harmony import */ var _components_forms_CharacterForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/forms/CharacterForm */ "./components/forms/CharacterForm.js");
var _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\pages\\character\\new.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const newCharacter = props => {
  const {
    characters,
    characterId,
    loadingCharacter
  } = props;
  const auth = Object(_hooks_userHooks__WEBPACK_IMPORTED_MODULE_4__["useAuth"])();
  const [form] = antd__WEBPACK_IMPORTED_MODULE_2__["Form"].useForm();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const [visibility, setVisibility] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(true);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    if (auth.user) {
      props.getUserCharacters(auth.user.uid);
    }
  }, [auth]);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    form.setFieldsValue({
      public: visibility
    });
  }, [visibility]);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    if (characterId) {
      router.push(`/character/${characterId}`);
    }
  }, [characterId]);

  const onFailed = () => {
    window.scrollTo(0, 0);
    antd__WEBPACK_IMPORTED_MODULE_2__["message"].error("There are some errors");
  };

  const submit = values => {
    if (typeof values.image === null) values.image = "";
    if (!values.image) delete values.imageCopyright;
    props.addCharacter(_objectSpread(_objectSpread({}, values), {}, {
      authorId: auth.user.uid,
      authorName: auth.user.username,
      authorImage: auth.user.image ? auth.user.image : ""
    }));
  };

  return __jsx(_components_hoc_LoadingScreen__WEBPACK_IMPORTED_MODULE_6__["default"], {
    loading: auth.isLoading,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 5
    }
  }, __jsx(_components_hoc_RedirectComp__WEBPACK_IMPORTED_MODULE_7__["default"], {
    condition: auth.user,
    type: "redirect",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "new-character custom-form",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "inner",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  }, __jsx("h2", {
    className: "side-heading",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }, "Add a new character"), __jsx(_components_forms_CharacterForm__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
      public: true,
      ethnicity: "",
      group: "",
      residence: "",
      description: "",
      nickname: "",
      occupation: "",
      relatives: []
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  })))));
};

const mapStateToProps = state => ({
  characters: state.characters.userCharacters,
  loadingCharacter: state.characters.loadingCharacter,
  characterId: state.characters.characterId
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, {
  getUserCharacters: _redux_actions_charactersActions__WEBPACK_IMPORTED_MODULE_5__["getUserCharacters"],
  addCharacter: _redux_actions_charactersActions__WEBPACK_IMPORTED_MODULE_5__["addCharacter"]
})(newCharacter));

/***/ }),

/***/ "./redux/actions/charactersActions.js":
/*!********************************************!*\
  !*** ./redux/actions/charactersActions.js ***!
  \********************************************/
/*! exports provided: getCharacter, addCharacter, editCharacter, deleteCharacter, getUserCharacters, getFavoriteCharacters, getCharactersInStory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCharacter", function() { return getCharacter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCharacter", function() { return addCharacter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editCharacter", function() { return editCharacter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteCharacter", function() { return deleteCharacter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserCharacters", function() { return getUserCharacters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFavoriteCharacters", function() { return getFavoriteCharacters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCharactersInStory", function() { return getCharactersInStory; });
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
        type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].GET_CHARACTER,
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
        type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].GET_CHARACTER,
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
    type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].ADD_CHARACTER,
    payload: {
      loading: true
    }
  });
  let charaId = "";
  _fbConfig__WEBPACK_IMPORTED_MODULE_2__["db"].collection("characters").add(_objectSpread(_objectSpread({}, data), {}, {
    image: typeof data.image === "string" ? data.image : "",
    createdAt: firebase_app__WEBPACK_IMPORTED_MODULE_3___default.a.firestore.FieldValue.serverTimestamp(),
    likesCount: 0,
    likes: [],
    dislikes: []
  })).then(res => {
    charaId = res.id;
    const imageName = `${res.id}${"_"}${data.firstname.toLowerCase()}${data.lastname && "_"}${data.lastname && data.lastname.toLowerCase()}`;

    if (typeof data.image === "object") {
      _fbConfig__WEBPACK_IMPORTED_MODULE_2__["storage"].ref(`${_fbConfig__WEBPACK_IMPORTED_MODULE_2__["auth"].currentUser.uid}/${imageName}`).put(data.image).then(() => {
        return _fbConfig__WEBPACK_IMPORTED_MODULE_2__["storage"].ref(_fbConfig__WEBPACK_IMPORTED_MODULE_2__["auth"].currentUser.uid).child(imageName).getDownloadURL();
      }).then(url => {
        return _fbConfig__WEBPACK_IMPORTED_MODULE_2__["db"].collection("characters").doc(charaId).update({
          image: url
        });
      }).then(() => {
        antd__WEBPACK_IMPORTED_MODULE_1__["message"].success("Character added successfully");
        dispatch({
          type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].ADD_CHARACTER,
          payload: {
            message: "Character added successfully",
            characterId: charaId,
            loading: false
          }
        });
      });
    } else {
      antd__WEBPACK_IMPORTED_MODULE_1__["message"].success("Character added successfully");
      dispatch({
        type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].ADD_CHARACTER,
        payload: {
          message: "Character added successfully",
          characterId: charaId,
          loading: false
        }
      });
    }
  }).catch(err => {
    antd__WEBPACK_IMPORTED_MODULE_1__["message"].error(err.message);
  });
};
const editCharacter = (data, id) => dispatch => {
  dispatch({
    type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].EDIT_CHARACTER,
    payload: {
      loadingCharacter: true
    }
  });
  const imageName = `${id}${"_"}${data.firstname.toLowerCase()}${data.lastname && "_"}${data.lastname && data.lastname.toLowerCase()}`;

  if (data.image && typeof data.image === "object") {
    _fbConfig__WEBPACK_IMPORTED_MODULE_2__["storage"].ref(`${_fbConfig__WEBPACK_IMPORTED_MODULE_2__["auth"].currentUser.uid}/${imageName}`).put(data.image).then(() => {
      return _fbConfig__WEBPACK_IMPORTED_MODULE_2__["storage"].ref(_fbConfig__WEBPACK_IMPORTED_MODULE_2__["auth"].currentUser.uid).child(imageName).getDownloadURL();
    }).then(url => {
      return _fbConfig__WEBPACK_IMPORTED_MODULE_2__["db"].collection("characters").doc(id).update(_objectSpread(_objectSpread({}, data), {}, {
        image: url,
        relativesArr: data.relatives.map(c => c.character_id)
      }));
    }).then(() => {
      dispatch({
        type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].EDIT_CHARACTER,
        payload: {
          message: "Character edited successfully",
          loadingCharacter: false
        }
      });
    }).catch(err => {
      antd__WEBPACK_IMPORTED_MODULE_1__["message"].error(err.message);
    });
  } else {
    _fbConfig__WEBPACK_IMPORTED_MODULE_2__["db"].collection("characters").doc(id).update(_objectSpread(_objectSpread({}, data), {}, {
      relativesArr: data.relatives.map(c => c.character_id)
    })).then(() => {
      dispatch({
        type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].EDIT_CHARACTER,
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
const deleteCharacter = (id, firstname, lastname) => dispatch => {
  dispatch({
    type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].DELETE_CHARACTER,
    payload: {
      loading: true
    }
  });
  const imageName = `${id}${"_"}${firstname.toLowerCase()}${lastname && "_"}${lastname && lastname.toLowerCase()}`;
  const batch = _fbConfig__WEBPACK_IMPORTED_MODULE_2__["db"].batch();
  _fbConfig__WEBPACK_IMPORTED_MODULE_2__["db"].collection("characters").doc(id).delete().then(() => {
    return _fbConfig__WEBPACK_IMPORTED_MODULE_2__["storage"].ref(`${_fbConfig__WEBPACK_IMPORTED_MODULE_2__["auth"].currentUser.uid}/${imageName}`).delete();
  }).then(() => {
    _fbConfig__WEBPACK_IMPORTED_MODULE_2__["db"].collection("chapters").where("characters", "array-contains", id).get().then(docs => {
      docs.forEach(doc => {
        batch.update(_fbConfig__WEBPACK_IMPORTED_MODULE_2__["db"].collection("chapters").doc(doc.id), {
          characters: doc.data().characters.filter(c => c !== id)
        });
      });
    }).then(() => {
      _fbConfig__WEBPACK_IMPORTED_MODULE_2__["db"].collection("stories").where("secondaryArr", "array-contains", id).get().then(stories => {
        stories.forEach(story => {
          batch.update(_fbConfig__WEBPACK_IMPORTED_MODULE_2__["db"].collection("stories").doc(story.id), {
            mainCharacters: story.data().mainCharacters.filter(c => c !== id),
            secondaryArr: story.data().secondaryArr.filter(c => c !== id),
            secondaryCharacters: story.data().secondaryCharacters.filter(c => c.id !== id)
          });
        });
      }).then(() => {
        _fbConfig__WEBPACK_IMPORTED_MODULE_2__["db"].collection("characters").where("relativesArr", "array-contains", id).get().then(characters => {
          characters.forEach(char => {
            batch.update(_fbConfig__WEBPACK_IMPORTED_MODULE_2__["db"].collection("characters").doc(char.id), {
              relativesArr: char.data().relativesArr.filter(c => c !== id),
              relatives: char.data().relatives.filter(c => c.character_id !== id)
            });
          });
        }).then(() => {
          _fbConfig__WEBPACK_IMPORTED_MODULE_2__["db"].collection("charactersLikes").where("characterId", "==", id).get().then(likes => {
            likes.forEach(like => {
              batch.delete(_fbConfig__WEBPACK_IMPORTED_MODULE_2__["db"].collection("charactersLikes").doc(like.id));
            });
            batch.commit().then(() => {
              dispatch({
                type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].DELETE_CHARACTER,
                payload: {
                  message: "Character deleted successfully",
                  loading: false,
                  deleted: true,
                  charaExists: false
                }
              });
            });
          });
        });
      });
    });
  });
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
      type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].GET_USER_CHARACTERS,
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
        type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].GET_FAVORITE_CHARACTERS,
        payload: favUsers
      });
    });
  });
};
const getCharactersInStory = id => dispatch => {
  _fbConfig__WEBPACK_IMPORTED_MODULE_2__["db"].collection("stories").doc(id).onSnapshot(doc => {
    dispatch({
      type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].GET_STORY_CHARACTERS,
      payload: {
        secondaryCharacters: doc.data().secondaryCharacters,
        mainArr: doc.data().mainCharacters
      }
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
/*! exports provided: CATEGORIES, COPYRIGHTS, LANGUAGES, STATUS, types, GET_PROFILE, LOGIN, REGISTER, GET_STORY, GET_USER_STORIES, GET_FAVORITE_STORIES, ADD_STORY, EDIT_STORY, DELETE_STORY, IS_STORY_FAVORITE, GET_CHAPTER, ADD_CHAPTER, EDIT_CHAPTER, DELETE_CHAPTER, GET_CHAPTERS, ADD_CHARACTER, GET_CHARACTER, EDIT_CHARACTER, GET_USER_CHARACTERS, GET_USER_LOCATIONS, GET_FAVORITE_CHARACTERS, GET_STORY_CHARACTERS, ADD_LOCATION, GET_FAVORITE_AUTHORS, GET_FOLLOWERS, DISPATCH_ERROR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CATEGORIES", function() { return CATEGORIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COPYRIGHTS", function() { return COPYRIGHTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANGUAGES", function() { return LANGUAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATUS", function() { return STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "types", function() { return types; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PROFILE", function() { return GET_PROFILE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN", function() { return LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER", function() { return REGISTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_STORY", function() { return GET_STORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_USER_STORIES", function() { return GET_USER_STORIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_FAVORITE_STORIES", function() { return GET_FAVORITE_STORIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_STORY", function() { return ADD_STORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_STORY", function() { return EDIT_STORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_STORY", function() { return DELETE_STORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_STORY_FAVORITE", function() { return IS_STORY_FAVORITE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_CHAPTER", function() { return GET_CHAPTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_CHAPTER", function() { return ADD_CHAPTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_CHAPTER", function() { return EDIT_CHAPTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_CHAPTER", function() { return DELETE_CHAPTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_CHAPTERS", function() { return GET_CHAPTERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_CHARACTER", function() { return ADD_CHARACTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_CHARACTER", function() { return GET_CHARACTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_CHARACTER", function() { return EDIT_CHARACTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_USER_CHARACTERS", function() { return GET_USER_CHARACTERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_USER_LOCATIONS", function() { return GET_USER_LOCATIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_FAVORITE_CHARACTERS", function() { return GET_FAVORITE_CHARACTERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_STORY_CHARACTERS", function() { return GET_STORY_CHARACTERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_LOCATION", function() { return ADD_LOCATION; });
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

const types = {
  GET_PROFILE: "GET_PROFILE",
  LOGIN: "LOGIN",
  REGISTER: "REGISTER",
  GET_STORY: "GET_STORY",
  GET_USER_STORIES: "GET_USER_STORIES",
  GET_FAVORITE_STORIES: "GET_FAVORITE_STORIES",
  ADD_STORY: "ADD_STORY",
  EDIT_STORY: "EDIT_STORY",
  DELETE_STORY: "DELETE_STORY",
  IS_STORY_FAVORITE: "IS_STORY_FAVORITE",
  GET_CHAPTER: "GET_CHAPTER",
  ADD_CHAPTER: "ADD_CHAPTER",
  EDIT_CHAPTER: "EDIT_CHAPTER",
  DELETE_CHAPTER: "DELETE_CHAPTER",
  GET_CHAPTERS: "GET_CHAPTERS",
  ADD_CHARACTER: "ADD_CHARACTER",
  GET_CHARACTER: "GET_CHARACTER",
  EDIT_CHARACTER: "EDIT_CHARACTER",
  DELETE_CHARACTER: "DELETE_CHARACTER",
  GET_USER_CHARACTERS: "GET_USER_CHARACTERS",
  GET_USER_LOCATIONS: "GET_USER_LOCATIONS",
  GET_FAVORITE_CHARACTERS: "GET_FAVORITE_CHARACTERS",
  GET_STORY_CHARACTERS: "GET_STORY_CHARACTERS",
  ADD_LOCATION: "ADD_LOCATION",
  GET_LOCATION: "GET_LOCATION",
  EDIT_LOCATION: "EDIT_LOCATION",
  GET_COMMENTS: "GET_COMMENTS",
  GET_FAVORITE_AUTHORS: "GET_FAVORITE_AUTHORS",
  GET_STORY_LOCATIONS: "GET_STORY_LOCATIONS",
  GET_FOLLOWERS: "GET_FOLLOWERS",
  DISPATCH_ERROR: "DISPATCH_ERROR"
};
const GET_PROFILE = "GET_PROFILE";
const LOGIN = "LOGIN";
const REGISTER = "REGISTER";
const GET_STORY = "GET_STORY";
const GET_USER_STORIES = "GET_USER_STORIES";
const GET_FAVORITE_STORIES = "GET_FAVORITE_STORIES";
const ADD_STORY = "ADD_STORY";
const EDIT_STORY = "EDIT_STORY";
const DELETE_STORY = "DELETE_STORY";
const IS_STORY_FAVORITE = "IS_STORY_FAVORITE";
const GET_CHAPTER = "GET_CHAPTER";
const ADD_CHAPTER = "ADD_CHAPTER";
const EDIT_CHAPTER = "EDIT_CHAPTER";
const DELETE_CHAPTER = "DELETE_CHAPTER";
const GET_CHAPTERS = "GET_CHAPTERS";
const ADD_CHARACTER = "ADD_CHARACTER";
const GET_CHARACTER = "GET_CHARACTER";
const EDIT_CHARACTER = "EDIT_CHARACTER";
const GET_USER_CHARACTERS = "GET_USER_CHARACTERS";
const GET_USER_LOCATIONS = "GET_USER_LOCATIONS";
const GET_FAVORITE_CHARACTERS = "GET_FAVORITE_CHARACTERS";
const GET_STORY_CHARACTERS = "GET_STORY_CHARACTERS";
const ADD_LOCATION = "ADD_LOCATION";
const GET_FAVORITE_AUTHORS = "GET_FAVORITE_AUTHORS";
const GET_FOLLOWERS = "GET_FOLLOWERS";
const DISPATCH_ERROR = "DISPATCH_ERROR";

/***/ }),

/***/ "./utils/dummy.js":
/*!************************!*\
  !*** ./utils/dummy.js ***!
  \************************/
/*! exports provided: dummy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dummy", function() { return dummy; });
const dummy = {
  person: "https://i.pinimg.com/564x/70/50/a3/7050a30cc61e8a7f3f8677ebf9505db7.jpg",
  cover: "https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  name: "Aishwarya Rai",
  poster: "https://images-na.ssl-images-amazon.com/images/I/81h2gWPTYJL.jpg",
  avatar: "https://bip.cnrs.fr/wp-content/uploads/2019/11/user.jpg",
  noImage: "https://i.stack.imgur.com/y9DpT.jpg"
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb21tb24vQ2hhcmFjdGVyQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvcm1zL0NoYXJhY3RlckZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mb3Jtcy9JbWFnZVJvdy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvcm1zL1JhZGlvQnV0dG9uLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZm9ybXMvUmVsYXRpdmVzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZm9ybXMvVXBsb2FkSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9ob2MvTG9hZGluZ1NjcmVlbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hvYy9SZWRpcmVjdENvbXAuanMiLCJ3ZWJwYWNrOi8vLy4vaG9va3MvdXNlckhvb2tzLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2NoYXJhY3Rlci9uZXcuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWN0aW9ucy9jaGFyYWN0ZXJzQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9mYkNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZHVtbXkuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFudC1kZXNpZ24vaWNvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2UvYXBwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2UvYXV0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL2ZpcmVzdG9yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL3N0b3JhZ2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpcy1pbWFnZS11cmxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiJdLCJuYW1lcyI6WyJDaGFyYWN0ZXJDYXJkIiwiY2hhcmFjdGVyIiwidHlwZSIsInJlbW92ZUNoYXJhY3RlciIsImlkIiwiaW1hZ2UiLCJkdW1teSIsIm5vSW1hZ2UiLCJmaXJzdG5hbWUiLCJsYXN0bmFtZSIsImF1dGhvck5hbWUiLCJyZWxhdGlvbiIsIkNoYXJhY3RlckZvcm0iLCJmb3JtIiwiY2hhcmFjdGVycyIsInN1Ym1pdCIsIm9uRmFpbGVkIiwidmlzaWJpbGl0eSIsInNldFZpc2liaWxpdHkiLCJsb2FkaW5nQ2hhcmFjdGVyIiwiaW5pdGlhbFZhbHVlcyIsImRlbGV0ZUNoYXJhY3RlciIsInJlcXVpcmVkIiwibWVzc2FnZSIsIm1heCIsIm1pblJvd3MiLCJJbWFnZVJvdyIsIml0ZW1JbWFnZSIsIm5hbWUiLCJsaW5rVmlzaWJsZSIsInNldExpbmtWaXNpYmxlIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVwbG9hZFZpc2libGUiLCJzZXRVcGxvYWRWaXNpYmxlIiwic2hvd0xpbmsiLCJzZXRGaWVsZHNWYWx1ZSIsInNob3dVcGxvYWQiLCJ2YWxpZGF0b3IiLCJfIiwidmFsdWUiLCJpc0ltYWdlVXJsIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJFcnJvciIsIlJhZGlvQnV0b24iLCJsZyIsInNtIiwieHMiLCJtZCIsImxhYmVsIiwibnVtMSIsIm51bTIiLCJsYWJlbDEiLCJsYWJlbDIiLCJzZXRGdW5jIiwidmFsIiwiT3B0aW9uIiwiU2VsZWN0IiwiUmVsYXRpdmVzIiwicmVsYXRpb25zIiwic2V0UmVsYXRpb25zIiwicmVsYXRpdmVzIiwiY3VycmVudENoYXIiLCJzZXRDdXJyZW50Q2hhciIsImN1cnJlbnRSZWwiLCJzZXRDdXJyZW50UmVsIiwic2VsZWN0ZWRDaGFyYWN0ZXJzIiwic2V0U2VsZWN0ZWRDaGFyYWN0ZXJzIiwic2VsZWN0ZWRBcnIiLCJzZXRTZWxlY3RlZEFyciIsIm1hcCIsImMiLCJjaGFyYWN0ZXJfaWQiLCJzaG93RXJyb3JSZWwiLCJzZXRTaG93RXJyb3JSZWwiLCJzaG93RXJyb3JDaGFyIiwic2V0U2hvd0Vycm9yQ2hhciIsImFkZFJlbGF0aW9uIiwibmV3UmVsYXRpb25zIiwiZmluZCIsInVzZUVmZmVjdCIsImxlbmd0aCIsImNoYXIiLCJmaWx0ZXIiLCJpbmNsdWRlcyIsImUiLCJ0YXJnZXQiLCJyZWwiLCJnZXRCYXNlNjQiLCJpbWciLCJjYWxsYmFjayIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJhZGRFdmVudExpc3RlbmVyIiwicmVzdWx0IiwicmVhZEFzRGF0YVVSTCIsImJlZm9yZVVwbG9hZCIsImZpbGUiLCJpc0pwZ09yUG5nIiwiZXJyb3IiLCJpc0x0Mk0iLCJzaXplIiwiVXBsb2FkSW1hZ2UiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImltYWdlVXJsIiwic2V0SW1hZ2VVcmwiLCJoYW5kbGVDaGFuZ2UiLCJpbmZvIiwic3RhdHVzIiwib3JpZ2luRmlsZU9iaiIsInVwbG9hZEJ1dHRvbiIsIm1hcmdpblRvcCIsInNob3dSZW1vdmVJY29uIiwicmVtb3ZlSWNvbiIsIndpZHRoIiwiaGVpZ2h0Iiwib2JqZWN0Rml0IiwiZ2V0RmllbGRWYWx1ZSIsIkxvYWRpbmdTY3JlZW4iLCJjaGlsZHJlbiIsIlJlZGlyZWN0Q29tcCIsImNvbmRpdGlvbiIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImF1dGhDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIlByb3ZpZGVBdXRoIiwiYXV0aCIsInVzZVByb3ZpZGVBdXRoIiwidXNlQXV0aCIsInVzZUNvbnRleHQiLCJ1c2VyIiwic2V0VXNlciIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsInNpZ25pbiIsImVtYWlsIiwicGFzc3dvcmQiLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsInRoZW4iLCJyZXNwb25zZSIsInNpZ251cCIsInVzZXJuYW1lIiwiY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwiZGIiLCJjb2xsZWN0aW9uIiwiYWRkIiwiYmFkZ2VzIiwiYmlvZ3JhcGh5IiwiY3JlYXRlZEF0IiwiZmlyZWJhc2UiLCJmaXJlc3RvcmUiLCJGaWVsZFZhbHVlIiwic2VydmVyVGltZXN0YW1wIiwic3VzcGVuZGVkIiwiZmFjZWJvb2siLCJpbnN0YWdyYW0iLCJ0d2l0dGVyIiwiZGV2aWFudGFydCIsImxpa2VzQ291bnQiLCJzaWdub3V0Iiwic2lnbk91dCIsInNlbmRQYXNzd29yZFJlc2V0RW1haWwiLCJjb25maXJtUGFzc3dvcmRSZXNldCIsImNvZGUiLCJ1bnN1YnNjcmliZSIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsInVpZCIsImRvYyIsIm9uU25hcHNob3QiLCJkYXRhIiwibmV3Q2hhcmFjdGVyIiwicHJvcHMiLCJjaGFyYWN0ZXJJZCIsIkZvcm0iLCJ1c2VGb3JtIiwicm91dGVyIiwidXNlUm91dGVyIiwiZ2V0VXNlckNoYXJhY3RlcnMiLCJwdWJsaWMiLCJwdXNoIiwic2Nyb2xsVG8iLCJ2YWx1ZXMiLCJpbWFnZUNvcHlyaWdodCIsImFkZENoYXJhY3RlciIsImF1dGhvcklkIiwiYXV0aG9ySW1hZ2UiLCJhZ2UiLCJnZW5kZXIiLCJldGhuaWNpdHkiLCJncm91cCIsInJlc2lkZW5jZSIsImRlc2NyaXB0aW9uIiwibmlja25hbWUiLCJvY2N1cGF0aW9uIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJ1c2VyQ2hhcmFjdGVycyIsImNvbm5lY3QiLCJnZXRDaGFyYWN0ZXIiLCJkaXNwYXRjaCIsImdldCIsImV4aXN0cyIsInR5cGVzIiwiR0VUX0NIQVJBQ1RFUiIsInBheWxvYWQiLCJjaGFyYUV4aXN0cyIsIkFERF9DSEFSQUNURVIiLCJjaGFyYUlkIiwibGlrZXMiLCJkaXNsaWtlcyIsInJlcyIsImltYWdlTmFtZSIsInRvTG93ZXJDYXNlIiwic3RvcmFnZSIsInJlZiIsImN1cnJlbnRVc2VyIiwicHV0IiwiY2hpbGQiLCJnZXREb3dubG9hZFVSTCIsInVybCIsInVwZGF0ZSIsInN1Y2Nlc3MiLCJjYXRjaCIsImVyciIsImVkaXRDaGFyYWN0ZXIiLCJFRElUX0NIQVJBQ1RFUiIsInJlbGF0aXZlc0FyciIsIkRFTEVURV9DSEFSQUNURVIiLCJiYXRjaCIsImRlbGV0ZSIsIndoZXJlIiwiZG9jcyIsImZvckVhY2giLCJzdG9yaWVzIiwic3RvcnkiLCJtYWluQ2hhcmFjdGVycyIsInNlY29uZGFyeUFyciIsInNlY29uZGFyeUNoYXJhY3RlcnMiLCJsaWtlIiwiY29tbWl0IiwiZGVsZXRlZCIsInVzZXJJZCIsIml0ZW1zIiwiR0VUX1VTRVJfQ0hBUkFDVEVSUyIsImdldEZhdm9yaXRlQ2hhcmFjdGVycyIsImZhdkFyciIsInVzZXJzIiwiYWxsIiwiZmF2VXNlcnMiLCJHRVRfRkFWT1JJVEVfQ0hBUkFDVEVSUyIsImdldENoYXJhY3RlcnNJblN0b3J5IiwiR0VUX1NUT1JZX0NIQVJBQ1RFUlMiLCJtYWluQXJyIiwicHJvZENvbmZpZyIsImFwaUtleSIsInByb2Nlc3MiLCJhdXRoRG9tYWluIiwiZGF0YWJhc2VVUkwiLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIkZJUkVCQVNFX0FQUF9JRCIsImRldkNvbmZpZyIsImNvbmZpZyIsImFwcHMiLCJpbml0aWFsaXplQXBwIiwiQ0FURUdPUklFUyIsIkNPUFlSSUdIVFMiLCJMQU5HVUFHRVMiLCJTVEFUVVMiLCJHRVRfUFJPRklMRSIsIkxPR0lOIiwiUkVHSVNURVIiLCJHRVRfU1RPUlkiLCJHRVRfVVNFUl9TVE9SSUVTIiwiR0VUX0ZBVk9SSVRFX1NUT1JJRVMiLCJBRERfU1RPUlkiLCJFRElUX1NUT1JZIiwiREVMRVRFX1NUT1JZIiwiSVNfU1RPUllfRkFWT1JJVEUiLCJHRVRfQ0hBUFRFUiIsIkFERF9DSEFQVEVSIiwiRURJVF9DSEFQVEVSIiwiREVMRVRFX0NIQVBURVIiLCJHRVRfQ0hBUFRFUlMiLCJHRVRfVVNFUl9MT0NBVElPTlMiLCJBRERfTE9DQVRJT04iLCJHRVRfTE9DQVRJT04iLCJFRElUX0xPQ0FUSU9OIiwiR0VUX0NPTU1FTlRTIiwiR0VUX0ZBVk9SSVRFX0FVVEhPUlMiLCJHRVRfU1RPUllfTE9DQVRJT05TIiwiR0VUX0ZPTExPV0VSUyIsIkRJU1BBVENIX0VSUk9SIiwicGVyc29uIiwiY292ZXIiLCJwb3N0ZXIiLCJhdmF0YXIiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFFQTs7QUFFQSxNQUFNQSxhQUFhLEdBQUcsQ0FBQztBQUFFQyxXQUFGO0FBQWFDLE1BQWI7QUFBbUJDO0FBQW5CLENBQUQsS0FBMEM7QUFDOUQsU0FDRTtBQUNFLGFBQVMsRUFBRyx1QkFBc0JELElBQUksR0FBR0Es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Q0EsTUFBTXNCLGNBQWMsR0FBRyxnQkFBdkI7QUFDQSxNQUFNa0IsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsTUFBTTJDLGtCQUFrQixHQUFHLG9CQUEzQjtBQUNBLE1BQU1yQyx1QkFBdUIsR0FBRyx5QkFBaEM7QUFDQSxNQUFNRSxvQkFBb0IsR0FBRyxzQkFBN0I7QUFFQSxNQUFNb0MsWUFBWSxHQUFHLGNBQXJCO0FBRUEsTUFBTUksb0JBQW9CLEdBQUcsc0JBQTdCO0FBQ0EsTUFBTUUsYUFBYSxHQUFHLGVBQXRCO0FBRUEsTUFBTUMsY0FBYyxHQUFHLGdCQUF2QixDOzs7Ozs7Ozs7Ozs7QUMvUlA7QUFBQTtBQUFPLE1BQU1yUyxLQUFLLEdBQUc7QUFDbkJzUyxRQUFNLEVBQ0oseUVBRmlCO0FBR25CQyxPQUFLLEVBQ0gsZ0hBSmlCO0FBS25CalIsTUFBSSxFQUFFLGVBTGE7QUFNbkJrUixRQUFNLEVBQUUsa0VBTlc7QUFPbkJDLFFBQU0sRUFBRSx5REFQVztBQVFuQnhTLFNBQU8sRUFBRTtBQVJVLENBQWQsQzs7Ozs7Ozs7Ozs7QUNBUCw4Qzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3QyIsImZpbGUiOiJwYWdlcy9jaGFyYWN0ZXIvbmV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9jaGFyYWN0ZXIvbmV3LmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHsgZHVtbXkgfSBmcm9tIFwiLi4vLi4vdXRpbHMvZHVtbXlcIjtcclxuXHJcbmNvbnN0IENoYXJhY3RlckNhcmQgPSAoeyBjaGFyYWN0ZXIsIHR5cGUsIHJlbW92ZUNoYXJhY3RlciB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxmaWd1cmVcclxuICAgICAgY2xhc3NOYW1lPXtgY2FyZCBjaGFyYWN0ZXItY2FyZCAke3R5cGUgPyB0eXBlIDogXCJcIn1gfVxyXG4gICAgICBkYXRhLWFvcz1cInpvb20taW4tdXBcIlxyXG4gICAgPlxyXG4gICAgICB7dHlwZSA9PT0gXCJhZGRcIiAmJiAoXHJcbiAgICAgICAgPHNwYW5cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJlbW92ZUNoYXJhY3RlcihjaGFyYWN0ZXIuaWQpfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwicmVtb3ZlLWJ0blwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgeFxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgKX1cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGltZyBzcmM9e2NoYXJhY3Rlcj8uaW1hZ2UgPyBjaGFyYWN0ZXIuaW1hZ2UgOiBkdW1teS5ub0ltYWdlfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGZpZ2NhcHRpb24+XHJcbiAgICAgICAgPGgzPntgJHtjaGFyYWN0ZXI/LmZpcnN0bmFtZX0gJHtjaGFyYWN0ZXI/Lmxhc3RuYW1lfWB9PC9oMz5cclxuICAgICAgICB7dHlwZSA9PT0gXCJmYXZvcml0ZXNcIiB8fFxyXG4gICAgICAgICAgKHR5cGUgPT09IFwic3RvcnlcIiAmJiAoXHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImF1dGhvclwiPkF1dGhvcjoge2NoYXJhY3Rlcj8uYXV0aG9yTmFtZX08L3NwYW4+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICB7KHR5cGUgPT09IFwiYWRkXCIgfHwgdHlwZSA9PT0gXCJzaG93XCIpICYmIChcclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImF1dGhvclwiPlJlbGF0aW9uOiB7Y2hhcmFjdGVyPy5yZWxhdGlvbn08L3NwYW4+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9maWdjYXB0aW9uPlxyXG4gICAgPC9maWd1cmU+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXJhY3RlckNhcmQ7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBSb3csXHJcbiAgQ29sLFxyXG4gIERpdmlkZXIsXHJcbiAgRm9ybSxcclxuICBJbnB1dCxcclxuICBJbnB1dE51bWJlcixcclxuICBTcGluLFxyXG4gIFBvcGNvbmZpcm0sXHJcbn0gZnJvbSBcImFudGRcIjtcclxuXHJcbmltcG9ydCBSZWxhdGl2ZXMgZnJvbSBcIi4vUmVsYXRpdmVzXCI7XHJcbmltcG9ydCBJbWFnZVJvdyBmcm9tIFwiLi9JbWFnZVJvd1wiO1xyXG5pbXBvcnQgUmFkaW9CdXR0b24gZnJvbSBcIi4vUmFkaW9CdXR0b25cIjtcclxuXHJcbmNvbnN0IENoYXJhY3RlckZvcm0gPSAoe1xyXG4gIGZvcm0sXHJcbiAgY2hhcmFjdGVycyxcclxuICBjaGFyYWN0ZXIsXHJcbiAgc3VibWl0LFxyXG4gIG9uRmFpbGVkLFxyXG4gIHZpc2liaWxpdHksXHJcbiAgc2V0VmlzaWJpbGl0eSxcclxuICB0eXBlLFxyXG4gIGxvYWRpbmdDaGFyYWN0ZXIsXHJcbiAgaW5pdGlhbFZhbHVlcyxcclxuICBkZWxldGVDaGFyYWN0ZXIsXHJcbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1cclxuICAgICAgbGF5b3V0PVwidmVydGljYWxcIlxyXG4gICAgICBzY3JvbGxUb0ZpcnN0RXJyb3JcclxuICAgICAgb25GaW5pc2hGYWlsZWQ9e29uRmFpbGVkfVxyXG4gICAgICBvbkZpbmlzaD17c3VibWl0fVxyXG4gICAgICBmb3JtPXtmb3JtfVxyXG4gICAgICBpbml0aWFsVmFsdWVzPXtpbml0aWFsVmFsdWVzfVxyXG4gICAgPlxyXG4gICAgICA8SW1hZ2VSb3cgbmFtZT1cImltYWdlXCIgZm9ybT17Zm9ybX0gaXRlbUltYWdlPXtjaGFyYWN0ZXI/LmltYWdlfSAvPlxyXG4gICAgICA8RGl2aWRlciAvPlxyXG4gICAgICA8Um93IGFsaWduPVwiYm90dG9tXCIgZ3V0dGVyPXtbMjQsIDI0XX0+XHJcbiAgICAgICAgPENvbCBtZD17OH0geHM9ezI0fSBzbT17MjR9PlxyXG4gICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICBsYWJlbD1cIkZpcnN0bmFtZVwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJmaXJzdG5hbWVcIlxyXG4gICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJBIGZpcnN0bmFtZSBpcyByZXF1aXJlZFwiLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgeyBtYXg6IDIwIH0sXHJcbiAgICAgICAgICAgIF19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPENvbCBtZD17OH0geHM9ezI0fSBzbT17MjR9PlxyXG4gICAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD1cIkxhc3RuYW1lXCIgbmFtZT1cImxhc3RuYW1lXCIgcnVsZXM9e1t7IG1heDogNjUgfV19PlxyXG4gICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDxDb2wgbWQ9ezh9IHhzPXsyNH0gc209ezI0fT5cclxuICAgICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCJOaWNrbmFtZVwiIG5hbWU9XCJuaWNrbmFtZVwiIHJ1bGVzPXtbeyBtYXg6IDY1IH1dfT5cclxuICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgPC9Sb3c+XHJcbiAgICAgIDxSb3cgZ3V0dGVyPXtbMjQsIDI0XX0+XHJcbiAgICAgICAgPENvbCBtZD17OH0gc209ezI0fSB4cz17MjR9PlxyXG4gICAgICAgICAgPEZvcm0uSXRlbSBuYW1lPVwiZ2VuZGVyXCIgbGFiZWw9XCJHZW5kZXJcIj5cclxuICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgICA8Q29sIG1kPXs4fSBzbT17MjR9IHhzPXsyNH0+XHJcbiAgICAgICAgICA8Rm9ybS5JdGVtIG5hbWU9XCJvY2N1cGF0aW9uXCIgbGFiZWw9XCJPY2N1cGF0aW9uXCI+XHJcbiAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPENvbCBtZD17OH0gc209ezI0fSB4cz17MjR9PlxyXG4gICAgICAgICAgPEZvcm0uSXRlbSBuYW1lPVwicmVzaWRlbmNlXCIgbGFiZWw9XCJSZXNpZGVuY2VcIj5cclxuICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgPC9Sb3c+XHJcbiAgICAgIDxSb3cgZ3V0dGVyPXtbMjQsIDI0XX0+XHJcbiAgICAgICAgPENvbCBtZD17OH0geHM9ezI0fSBzbT17MjR9PlxyXG4gICAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD1cIkV0aG5pY2l0eVwiIG5hbWU9XCJldGhuaWNpdHlcIj5cclxuICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgICA8Q29sIG1kPXs4fSB4cz17MjR9IHNtPXsyNH0+XHJcbiAgICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwiR3JvdXBcIiBuYW1lPVwiZ3JvdXBcIj5cclxuICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgICA8Q29sIG1kPXs0fSB4cz17MjR9IHNtPXsyNH0+XHJcbiAgICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwiQWdlXCIgbmFtZT1cImFnZVwiPlxyXG4gICAgICAgICAgICA8SW5wdXROdW1iZXIgbWluPXswfSAvPlxyXG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPFJhZGlvQnV0dG9uXHJcbiAgICAgICAgICBsZz17NH1cclxuICAgICAgICAgIG1kPXs0fVxyXG4gICAgICAgICAgc209ezI0fVxyXG4gICAgICAgICAgeHM9ezI0fVxyXG4gICAgICAgICAgbmFtZT1cInB1YmxpY1wiXHJcbiAgICAgICAgICBsYWJlbD1cIlZpc2liaWxpdHlcIlxyXG4gICAgICAgICAgbnVtMT1cIjFcIlxyXG4gICAgICAgICAgbnVtMj1cIjJcIlxyXG4gICAgICAgICAgbGFiZWwxPVwiUHVibGljXCJcclxuICAgICAgICAgIGxhYmVsMj1cIlByaXZhdGVcIlxyXG4gICAgICAgICAgc2V0RnVuYz17c2V0VmlzaWJpbGl0eX1cclxuICAgICAgICAgIHZhbD17dmlzaWJpbGl0eX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L1Jvdz5cclxuICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgIGxhYmVsPVwiRGVzY3JpcHRpb25cIlxyXG4gICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbWF4OiAxODAsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiWW91ciBkZXNjcmlwdGlvbiBjYW5ub3QgZXhjZWVkIDE4MCBjaGFyYWN0ZXJzXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF19XHJcbiAgICAgID5cclxuICAgICAgICA8SW5wdXQuVGV4dEFyZWFcclxuICAgICAgICAgIGF1dG9TaXplPXt7IG1pblJvd3M6IDUgfX1cclxuICAgICAgICAgIHNob3dDb3VudD17dHJ1ZX1cclxuICAgICAgICAgIG1heExlbmd0aD17MTgwfVxyXG4gICAgICAgID48L0lucHV0LlRleHRBcmVhPlxyXG4gICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgPFJlbGF0aXZlc1xyXG4gICAgICAgIGNoYXJhY3Rlcj17Y2hhcmFjdGVyICYmIGNoYXJhY3Rlcn1cclxuICAgICAgICBmb3JtPXtmb3JtfVxyXG4gICAgICAgIGNoYXJhY3RlcnM9e2NoYXJhY3RlcnN9XHJcbiAgICAgIC8+XHJcbiAgICAgIHt0eXBlID09PSBcImFkZFwiID8gKFxyXG4gICAgICAgIGxvYWRpbmdDaGFyYWN0ZXIgPyAoXHJcbiAgICAgICAgICA8YnV0dG9uIGRpc2FibGVkIGNsYXNzTmFtZT1cInNwaW4tYnRuXCI+XHJcbiAgICAgICAgICAgIDxTcGluIC8+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+Q3JlYXRlPC9idXR0b24+XHJcbiAgICAgICAgKVxyXG4gICAgICApIDogbG9hZGluZ0NoYXJhY3RlciA/IChcclxuICAgICAgICA8YnV0dG9uIGRpc2FibGVkIGNsYXNzTmFtZT1cInNwaW4tYnRuXCI+XHJcbiAgICAgICAgICA8U3BpbiAvPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxSb3cgZ3V0dGVyPXtbMzIsIDE2XX0+XHJcbiAgICAgICAgICA8Q29sIG1kPXsxNn0gc209ezI0fSB4cz17MjR9PlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5FZGl0PC9idXR0b24+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDxDb2wgbWQ9ezh9IHNtPXsyNH0geHM9ezI0fT5cclxuICAgICAgICAgICAgPFBvcGNvbmZpcm1cclxuICAgICAgICAgICAgICB0aXRsZT1cIkRvIHlvdSByZWFsbHkgd2FudCB0byBkZWxldGUgdGhpcyBjaGFyYWN0ZXIgP1wiXHJcbiAgICAgICAgICAgICAgb25Db25maXJtPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgZGVsZXRlQ2hhcmFjdGVyKFxyXG4gICAgICAgICAgICAgICAgICBjaGFyYWN0ZXIuaWQsXHJcbiAgICAgICAgICAgICAgICAgIGNoYXJhY3Rlci5maXJzdG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgIGNoYXJhY3Rlci5sYXN0bmFtZVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZGVsZXRlLWJ0blwiIHR5cGU9XCJidXR0b25cIj5cclxuICAgICAgICAgICAgICAgIERlbGV0ZVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L1BvcGNvbmZpcm0+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgKX1cclxuICAgIDwvRm9ybT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhcmFjdGVyRm9ybTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBSb3csIENvbCwgRm9ybSwgSW5wdXQgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgaXNJbWFnZVVybCBmcm9tIFwiaXMtaW1hZ2UtdXJsXCI7XHJcblxyXG5pbXBvcnQgVXBsb2FkSW1hZ2UgZnJvbSBcIi4vVXBsb2FkSW1hZ2VcIjtcclxuXHJcbmNvbnN0IEltYWdlUm93ID0gKHsgZm9ybSwgaXRlbUltYWdlLCBuYW1lIH0pID0+IHtcclxuICBjb25zdCBbbGlua1Zpc2libGUsIHNldExpbmtWaXNpYmxlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdXBsb2FkVmlzaWJsZSwgc2V0VXBsb2FkVmlzaWJsZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHNob3dMaW5rID0gKCkgPT4ge1xyXG4gICAgZm9ybS5zZXRGaWVsZHNWYWx1ZSh7IFtuYW1lXTogbnVsbCB9KTtcclxuICAgIHNldExpbmtWaXNpYmxlKHRydWUpO1xyXG4gICAgc2V0VXBsb2FkVmlzaWJsZShmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2hvd1VwbG9hZCA9ICgpID0+IHtcclxuICAgIGZvcm0uc2V0RmllbGRzVmFsdWUoeyBbbmFtZV06IG51bGwgfSk7XHJcbiAgICBzZXRMaW5rVmlzaWJsZShmYWxzZSk7XHJcbiAgICBzZXRVcGxvYWRWaXNpYmxlKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7IXVwbG9hZFZpc2libGUgJiYgIWxpbmtWaXNpYmxlICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVwbG9hZC1idG5zXCI+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Nob3dVcGxvYWR9IHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJ1cGxvYWQtYnRuXCI+XHJcbiAgICAgICAgICAgIFVwbG9hZCBhIGNvdmVyXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Nob3dMaW5rfSB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwidXBsb2FkLWJ0blwiPlxyXG4gICAgICAgICAgICBTdWJtaXQgYSBsaW5rIHRvIGEgY292ZXJcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgICB7dXBsb2FkVmlzaWJsZSAmJiAoXHJcbiAgICAgICAgPFJvdyBhbGlnbj1cImJvdHRvbVwiIGd1dHRlcj17WzI0LCAyNF19PlxyXG4gICAgICAgICAgPENvbCBtZD17MTJ9IHNtPXsyNH0geHM9ezI0fT5cclxuICAgICAgICAgICAgPFVwbG9hZEltYWdlIG5hbWU9e25hbWV9IGZvcm09e2Zvcm19IGltYWdlPXtpdGVtSW1hZ2V9IC8+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDxDb2wgbWQ9ezEyfSBzbT17MjR9IHhzPXsyNH0+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17c2hvd0xpbmt9IHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJ1cGxvYWQtYnRuXCI+XHJcbiAgICAgICAgICAgICAgT1IgU3VibWl0IGEgbGluayB0byBhIGNvdmVyXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgICl9XHJcbiAgICAgIHtsaW5rVmlzaWJsZSAmJiAoXHJcbiAgICAgICAgPFJvdyBhbGlnbj1cImJvdHRvbVwiIGd1dHRlcj17WzI0LCAyNF19PlxyXG4gICAgICAgICAgPENvbCBzbT17MjR9IHhzPXsyNH0gbWQ9ezEyfSBsZz17MTJ9PlxyXG4gICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgdHlwZTogXCJ1cmxcIixcclxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJUaGlzIGZpZWxkIG11c3QgYmUgYSB2YWxpZCB1cmwuXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKCkgPT4gKHtcclxuICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yKF8sIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzSW1hZ2VVcmwodmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcclxuICAgICAgICAgICAgICAgICAgICAgIG5ldyBFcnJvcihcIlRoZSBsaW5rIG5lZWRzIHRvIGJlIGFuIGltYWdlXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJTdWJtaXQgYSBsaW5rIHRvIHlvdXIgaW1hZ2VcIlxyXG4gICAgICAgICAgICAgIG5hbWU9e25hbWV9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDxDb2wgbWQ9ezEyfSBzbT17MjR9IHhzPXsyNH0+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17c2hvd1VwbG9hZH0gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cInVwbG9hZC1idG5cIj5cclxuICAgICAgICAgICAgICBVcGxvYWQgYSBjb3ZlclxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlUm93O1xyXG4iLCJpbXBvcnQgeyBDb2wsIFNwYWNlLCBGb3JtLCBSYWRpbyB9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5jb25zdCBSYWRpb0J1dG9uID0gKHtcclxuICBsZyxcclxuICBzbSxcclxuICB4cyxcclxuICBtZCxcclxuICBuYW1lLFxyXG4gIGxhYmVsLFxyXG4gIG51bTEsXHJcbiAgbnVtMixcclxuICBsYWJlbDEsXHJcbiAgbGFiZWwyLFxyXG4gIGZvcm0sXHJcbiAgc2V0RnVuYyxcclxuICB2YWwsXHJcbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPENvbCBsZz17bGd9IG1kPXttZH0gc209e3NtfSB4cz17eHN9PlxyXG4gICAgICA8Rm9ybS5JdGVtIG5hbWU9e25hbWV9IGxhYmVsPXtsYWJlbH0+XHJcbiAgICAgICAgPGZpZWxkc2V0IGlkPXtuYW1lfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmFkaW9cIj5cclxuICAgICAgICAgICAgPFJhZGlvLkdyb3VwPlxyXG4gICAgICAgICAgICAgIDxTcGFjZSBzaXplPXszMn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhZGlvX18xXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIGlkPXtgcmFkaW8tJHtudW0xfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gc2V0RnVuYyh0cnVlKX1cclxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt2YWwgPyB0cnVlIDogZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtgcmFkaW8tJHtudW0xfWB9PjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxwPntsYWJlbDF9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhZGlvX18yXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIGlkPXtgcmFkaW8tJHtudW0yfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHNldEZ1bmMoZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3ZhbCA/IGZhbHNlIDogdHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e2ByYWRpby0ke251bTJ9YH0+PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPHA+e2xhYmVsMn08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L1NwYWNlPlxyXG4gICAgICAgICAgICA8L1JhZGlvLkdyb3VwPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9maWVsZHNldD5cclxuICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICA8L0NvbD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmFkaW9CdXRvbjtcclxuIiwiaW1wb3J0IHsgUm93LCBDb2wsIEZvcm0sIFNlbGVjdCwgSW5wdXQsIERpdmlkZXIgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgQ2hhcmFjdGVyQ2FyZCwgeyBDaGFyYWN0ZXJHcmlkIH0gZnJvbSBcIi4uL2NvbW1vbi9DaGFyYWN0ZXJDYXJkXCI7XHJcblxyXG5jb25zdCB7IE9wdGlvbiB9ID0gU2VsZWN0O1xyXG5cclxuY29uc3QgUmVsYXRpdmVzID0gKHsgY2hhcmFjdGVyLCBjaGFyYWN0ZXJzLCBmb3JtIH0pID0+IHtcclxuICBjb25zdCBbcmVsYXRpb25zLCBzZXRSZWxhdGlvbnNdID0gUmVhY3QudXNlU3RhdGUoXHJcbiAgICBjaGFyYWN0ZXIgPyBjaGFyYWN0ZXIucmVsYXRpdmVzIDogW11cclxuICApO1xyXG4gIGNvbnN0IFtjdXJyZW50Q2hhciwgc2V0Q3VycmVudENoYXJdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2N1cnJlbnRSZWwsIHNldEN1cnJlbnRSZWxdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3NlbGVjdGVkQ2hhcmFjdGVycywgc2V0U2VsZWN0ZWRDaGFyYWN0ZXJzXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3QgW3NlbGVjdGVkQXJyLCBzZXRTZWxlY3RlZEFycl0gPSBSZWFjdC51c2VTdGF0ZShcclxuICAgIGNoYXJhY3RlciA/IGNoYXJhY3Rlci5yZWxhdGl2ZXMubWFwKChjKSA9PiBjLmNoYXJhY3Rlcl9pZCkgOiBbXVxyXG4gICk7XHJcbiAgY29uc3QgW3Nob3dFcnJvclJlbCwgc2V0U2hvd0Vycm9yUmVsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2hvd0Vycm9yQ2hhciwgc2V0U2hvd0Vycm9yQ2hhcl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGFkZFJlbGF0aW9uID0gKCkgPT4ge1xyXG4gICAgbGV0IG5ld1JlbGF0aW9ucyA9IFsuLi5yZWxhdGlvbnNdO1xyXG4gICAgaWYgKGN1cnJlbnRDaGFyICYmIGN1cnJlbnRSZWwpIHtcclxuICAgICAgbmV3UmVsYXRpb25zID0gW1xyXG4gICAgICAgIC4uLm5ld1JlbGF0aW9ucyxcclxuICAgICAgICB7IGNoYXJhY3Rlcl9pZDogY3VycmVudENoYXIsIHJlbGF0aW9uOiBjdXJyZW50UmVsIH0sXHJcbiAgICAgIF07XHJcbiAgICAgIHNldFNlbGVjdGVkQ2hhcmFjdGVycyhbXHJcbiAgICAgICAgLi4uc2VsZWN0ZWRDaGFyYWN0ZXJzLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIC4uLmNoYXJhY3RlcnMuZmluZCgoYykgPT4gYy5pZCA9PT0gY3VycmVudENoYXIpLFxyXG4gICAgICAgICAgcmVsYXRpb246IGN1cnJlbnRSZWwsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSk7XHJcbiAgICAgIHNldFNlbGVjdGVkQXJyKFsuLi5zZWxlY3RlZEFyciwgY3VycmVudENoYXJdKTtcclxuICAgICAgZm9ybS5zZXRGaWVsZHNWYWx1ZSh7IHJlbGF0aXZlczogbmV3UmVsYXRpb25zIH0pO1xyXG4gICAgICBzZXRSZWxhdGlvbnMobmV3UmVsYXRpb25zKTtcclxuICAgICAgc2V0Q3VycmVudENoYXIoXCJcIik7XHJcbiAgICAgIHNldEN1cnJlbnRSZWwoXCJcIik7XHJcbiAgICAgIHNldFNob3dFcnJvckNoYXIoZmFsc2UpO1xyXG4gICAgICBzZXRTaG93RXJyb3JSZWwoZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghY3VycmVudFJlbCkge1xyXG4gICAgICBzZXRTaG93RXJyb3JSZWwodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFjdXJyZW50Q2hhcikge1xyXG4gICAgICBzZXRTaG93RXJyb3JDaGFyKHRydWUpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoY2hhcmFjdGVyICYmIGNoYXJhY3RlcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICBzZXRTZWxlY3RlZENoYXJhY3RlcnMoXHJcbiAgICAgICAgY2hhcmFjdGVyLnJlbGF0aXZlcy5tYXAoKGMpID0+ICh7XHJcbiAgICAgICAgICBmaXJzdG5hbWU6IGNoYXJhY3RlcnMuZmluZCgoY2hhcikgPT4gY2hhci5pZCA9PT0gYy5jaGFyYWN0ZXJfaWQpXHJcbiAgICAgICAgICAgIC5maXJzdG5hbWUsXHJcbiAgICAgICAgICBsYXN0bmFtZTogY2hhcmFjdGVycy5maW5kKChjaGFyKSA9PiBjaGFyLmlkID09PSBjLmNoYXJhY3Rlcl9pZClcclxuICAgICAgICAgICAgLmxhc3RuYW1lLFxyXG4gICAgICAgICAgaW1hZ2U6IGNoYXJhY3RlcnMuZmluZCgoY2hhcikgPT4gY2hhci5pZCA9PT0gYy5jaGFyYWN0ZXJfaWQpLmltYWdlLFxyXG4gICAgICAgICAgaWQ6IGNoYXJhY3RlcnMuZmluZCgoY2hhcikgPT4gY2hhci5pZCA9PT0gYy5jaGFyYWN0ZXJfaWQpLmlkLFxyXG4gICAgICAgICAgcmVsYXRpb246IGMucmVsYXRpb24sXHJcbiAgICAgICAgfSkpXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfSwgW2NoYXJhY3RlciwgY2hhcmFjdGVyc10pO1xyXG5cclxuICBjb25zdCByZW1vdmVDaGFyYWN0ZXIgPSAoaWQpID0+IHtcclxuICAgIHNldFNlbGVjdGVkQ2hhcmFjdGVycyhzZWxlY3RlZENoYXJhY3RlcnMuZmlsdGVyKChjKSA9PiBjLmlkICE9PSBpZCkpO1xyXG4gICAgc2V0U2VsZWN0ZWRBcnIoc2VsZWN0ZWRBcnIuZmlsdGVyKChjKSA9PiBjICE9PSBpZCkpO1xyXG4gICAgc2V0UmVsYXRpb25zKHJlbGF0aW9ucy5maWx0ZXIoKGMpID0+IGMuY2hhcmFjdGVyX2lkICE9PSBpZCkpO1xyXG4gICAgZm9ybS5zZXRGaWVsZHNWYWx1ZSh7XHJcbiAgICAgIHJlbGF0aXZlczogcmVsYXRpb25zLmZpbHRlcigoYykgPT4gYy5jaGFyYWN0ZXJfaWQgIT09IGlkKSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybS5JdGVtIG5hbWU9XCJyZWxhdGl2ZXNcIj5cclxuICAgICAgPGgzPlJlbGF0aW9uc2hpcHM8L2gzPlxyXG4gICAgICA8Um93IGd1dHRlcj17WzI0LCAxMl19IGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgPENvbCBtZD17MTF9IHNtPXsyNH0geHM9ezI0fT5cclxuICAgICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCJTZWxlY3QgYSBjaGFyYWN0ZXJcIj5cclxuICAgICAgICAgICAgPFNlbGVjdCB2YWx1ZT17Y3VycmVudENoYXJ9IG9uQ2hhbmdlPXsodmFsKSA9PiBzZXRDdXJyZW50Q2hhcih2YWwpfT5cclxuICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwibm9uZVwiIGRpc2FibGVkPlxyXG4gICAgICAgICAgICAgICAgU2VsZWN0IGEgY2hhcmFjdGVyXHJcbiAgICAgICAgICAgICAgPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAge2NoYXJhY3RlcnNcclxuICAgICAgICAgICAgICAgID8uZmlsdGVyKChjKSA9PiAhc2VsZWN0ZWRBcnIuaW5jbHVkZXMoYy5pZCkpXHJcbiAgICAgICAgICAgICAgICAubWFwKChjKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxPcHRpb25cclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2MuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2MuaWR9XHJcbiAgICAgICAgICAgICAgICAgID57YCR7Yy5maXJzdG5hbWV9ICR7Yy5sYXN0bmFtZX1gfTwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICB7c2hvd0Vycm9yQ2hhciAmJiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbnQtZm9ybS1pdGVtLWV4cGxhaW4gYW50LWZvcm0taXRlbS1leHBsYWluLWVycm9yXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHJvbGU9XCJhbGVydFwiPkEgY2hhcmFjdGVyIGlzIHJlcXVpcmVkPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgICA8Q29sIG1kPXsxMX0gc209ezIxfSB4cz17MjF9PlxyXG4gICAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD1cIlR5cGUgb2YgcmVsYXRpb25zaGlwXCI+XHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgIHZhbHVlPXtjdXJyZW50UmVsfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q3VycmVudFJlbChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIHtzaG93RXJyb3JSZWwgJiYgKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW50LWZvcm0taXRlbS1leHBsYWluIGFudC1mb3JtLWl0ZW0tZXhwbGFpbi1lcnJvclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiByb2xlPVwiYWxlcnRcIj5BIHR5cGUgb2YgcmVsYXRpb25zaGlwIGlzIHJlcXVpcmVkPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgICA8Q29sIG1kPXsyfSB4cz17M30gc209ezN9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3QtYWRkLWlucHV0LWljb25ib3hcIiBvbkNsaWNrPXthZGRSZWxhdGlvbn0+XHJcbiAgICAgICAgICAgIDxzcGFuPis8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgPC9Sb3c+XHJcbiAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgIDxSb3cgZ3V0dGVyPXtbMTYsIDE2XX0+XHJcbiAgICAgICAge3NlbGVjdGVkQ2hhcmFjdGVycz8ubWFwKChyZWwpID0+IChcclxuICAgICAgICAgIDxDb2wgbGc9ezR9IG1kPXs4fSBzbT17MTJ9IHhzPXsyNH0ga2V5PXtyZWwuaWR9PlxyXG4gICAgICAgICAgICA8Q2hhcmFjdGVyQ2FyZFxyXG4gICAgICAgICAgICAgIHJlbW92ZUNoYXJhY3Rlcj17cmVtb3ZlQ2hhcmFjdGVyfVxyXG4gICAgICAgICAgICAgIHR5cGU9XCJhZGRcIlxyXG4gICAgICAgICAgICAgIGNoYXJhY3Rlcj17cmVsfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvUm93PlxyXG4gICAgPC9Gb3JtLkl0ZW0+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlbGF0aXZlcztcclxuIiwiaW1wb3J0IHsgVXBsb2FkLCBtZXNzYWdlLCBGb3JtLCBJbnB1dCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IExvYWRpbmdPdXRsaW5lZCwgUGx1c091dGxpbmVkLCBTdGFyT3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuXHJcbmZ1bmN0aW9uIGdldEJhc2U2NChpbWcsIGNhbGxiYWNrKSB7XHJcbiAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICByZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4gY2FsbGJhY2socmVhZGVyLnJlc3VsdCkpO1xyXG4gIHJlYWRlci5yZWFkQXNEYXRhVVJMKGltZyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJlZm9yZVVwbG9hZChmaWxlKSB7XHJcbiAgY29uc3QgaXNKcGdPclBuZyA9IGZpbGUudHlwZSA9PT0gXCJpbWFnZS9qcGVnXCIgfHwgZmlsZS50eXBlID09PSBcImltYWdlL3BuZ1wiO1xyXG4gIGlmICghaXNKcGdPclBuZykge1xyXG4gICAgbWVzc2FnZS5lcnJvcihcIllvdSBjYW4gb25seSB1cGxvYWQgSlBHL1BORyBmaWxlIVwiKTtcclxuICB9XHJcbiAgY29uc3QgaXNMdDJNID0gZmlsZS5zaXplIC8gMTAyNCAvIDEwMjQgPCAyO1xyXG4gIGlmICghaXNMdDJNKSB7XHJcbiAgICBtZXNzYWdlLmVycm9yKFwiSW1hZ2UgbXVzdCBzbWFsbGVyIHRoYW4gMk1CIVwiKTtcclxuICB9XHJcbiAgcmV0dXJuIGlzSnBnT3JQbmcgJiYgaXNMdDJNO1xyXG59XHJcblxyXG5jb25zdCBVcGxvYWRJbWFnZSA9ICh7IGZvcm0sIGltYWdlLCBuYW1lIH0pID0+IHtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2ltYWdlVXJsLCBzZXRJbWFnZVVybF0gPSBSZWFjdC51c2VTdGF0ZShpbWFnZSA/IGltYWdlIDogXCJcIik7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChpbmZvKSA9PiB7XHJcbiAgICBpZiAoaW5mby5maWxlLnN0YXR1cyA9PT0gXCJ1cGxvYWRpbmdcIikge1xyXG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoaW5mby5maWxlLnN0YXR1cyA9PT0gXCJkb25lXCIpIHtcclxuICAgICAgZm9ybS5zZXRGaWVsZHNWYWx1ZSh7IFtuYW1lXTogaW5mby5maWxlLm9yaWdpbkZpbGVPYmogfSk7XHJcbiAgICAgIC8vIHNldEltYWdlKGluZm8uZmlsZS5vcmlnaW5GaWxlT2JqKTtcclxuICAgICAgZ2V0QmFzZTY0KGluZm8uZmlsZS5vcmlnaW5GaWxlT2JqLCAoaW1hZ2VVcmwpID0+IHtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICBzZXRJbWFnZVVybChpbWFnZVVybCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHVwbG9hZEJ1dHRvbiA9IChcclxuICAgIDxkaXY+XHJcbiAgICAgIHtsb2FkaW5nID8gPExvYWRpbmdPdXRsaW5lZCAvPiA6IDxQbHVzT3V0bGluZWQgLz59XHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiA4IH19PlVwbG9hZDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEZvcm0uSXRlbSBuYW1lPXtuYW1lfSBsYWJlbD1cIlVwbG9hZCBhIGNvdmVyXCI+XHJcbiAgICAgICAgPFVwbG9hZFxyXG4gICAgICAgICAgc2hvd1VwbG9hZExpc3Q9e3tcclxuICAgICAgICAgICAgc2hvd1JlbW92ZUljb246IHRydWUsXHJcbiAgICAgICAgICAgIHJlbW92ZUljb246IDxTdGFyT3V0bGluZWQgLz4sXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgbGlzdFR5cGU9XCJwaWN0dXJlLWNhcmRcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY292ZXItdXBsb2FkZXJcIlxyXG4gICAgICAgICAgc2hvd1VwbG9hZExpc3Q9e3RydWV9XHJcbiAgICAgICAgICBiZWZvcmVVcGxvYWQ9e2JlZm9yZVVwbG9hZH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICBtYXhDb3VudD17MX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7aW1hZ2VVcmwgPyAoXHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBzcmM9e2ltYWdlVXJsfVxyXG4gICAgICAgICAgICAgIGFsdD1cImltYWdlXCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIsIG9iamVjdEZpdDogXCJjb3ZlclwiIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICB1cGxvYWRCdXR0b25cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9VcGxvYWQ+XHJcbiAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgbGFiZWw9XCJJbWFnZSBDb3B5cmlnaHRcIlxyXG4gICAgICAgIG5hbWU9XCJpbWFnZUNvcHlyaWdodFwiXHJcbiAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgcmVxdWlyZWQ6IGZvcm0uZ2V0RmllbGRWYWx1ZShuYW1lKSA/IHRydWUgOiBmYWxzZSxcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJBbiBpbWFnZSBjb3B5cmlnaHQgaXMgcmVxdWlyZWRcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXX1cclxuICAgICAgPlxyXG4gICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICA8L0Zvcm0uSXRlbT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVcGxvYWRJbWFnZTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgTG9hZGluZ1NjcmVlbiA9ICh7IGNoaWxkcmVuLCBsb2FkaW5nIH0pID0+IHtcclxuICByZXR1cm4gIWxvYWRpbmcgPyAoXHJcbiAgICBjaGlsZHJlblxyXG4gICkgOiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRlci1jb250YWluZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkZXJcIj5cclxuICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9hZGluZ1NjcmVlbjtcclxuIiwiaW1wb3J0IHsgUmVzdWx0LCBCdXR0b24gfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuY29uc3QgUmVkaXJlY3RDb21wID0gKHsgY29uZGl0aW9uLCB0eXBlLCBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgcmV0dXJuIGNvbmRpdGlvbiA/IChcclxuICAgIGNoaWxkcmVuXHJcbiAgKSA6IHR5cGUgPT09IFwiNDA0XCIgPyAoXHJcbiAgICA8UmVzdWx0XHJcbiAgICAgIHN0YXR1cz1cIjQwNFwiXHJcbiAgICAgIHRpdGxlPVwiNDA0XCJcclxuICAgICAgc3ViVGl0bGU9XCJTb3JyeSwgdGhlIHBhZ2UgeW91IHZpc2l0ZWQgZG9lcyBub3QgZXhpc3QuXCJcclxuICAgICAgZXh0cmE9ezxCdXR0b24gdHlwZT1cInByaW1hcnlcIj5CYWNrIEhvbWU8L0J1dHRvbj59XHJcbiAgICAvPlxyXG4gICkgOiB0eXBlID09PSBcIjQwM1wiID8gKFxyXG4gICAgPFJlc3VsdFxyXG4gICAgICBzdGF0dXM9XCI0MDNcIlxyXG4gICAgICB0aXRsZT1cIjQwM1wiXHJcbiAgICAgIHN1YlRpdGxlPVwiU29ycnksIHlvdSBhcmUgbm90IGF1dGhvcml6ZWQgdG8gYWNjZXNzIHRoaXMgcGFnZS5cIlxyXG4gICAgICBleHRyYT17PEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiPkJhY2sgSG9tZTwvQnV0dG9uPn1cclxuICAgIC8+XHJcbiAgKSA6IHR5cGUgPT09IFwicmVkaXJlY3RcIiA/IChcclxuICAgICh3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL2F1dGhcIilcclxuICApIDogKFxyXG4gICAgPGRpdj48L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVkaXJlY3RDb21wO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCwgY3JlYXRlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlL2FwcFwiO1xyXG5pbXBvcnQgeyBhdXRoLCBkYiB9IGZyb20gXCIuLi9yZWR1eC9mYkNvbmZpZ1wiO1xyXG5cclxuY29uc3QgYXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUHJvdmlkZUF1dGgoeyBjaGlsZHJlbiB9KSB7XHJcbiAgY29uc3QgYXV0aCA9IHVzZVByb3ZpZGVBdXRoKCk7XHJcbiAgcmV0dXJuIDxhdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17YXV0aH0+e2NoaWxkcmVufTwvYXV0aENvbnRleHQuUHJvdmlkZXI+O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXNlQXV0aCA9ICgpID0+IHtcclxuICByZXR1cm4gdXNlQ29udGV4dChhdXRoQ29udGV4dCk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiB1c2VQcm92aWRlQXV0aCgpIHtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIC8vIFdyYXAgYW55IEZpcmViYXNlIG1ldGhvZHMgd2Ugd2FudCB0byB1c2UgbWFraW5nIHN1cmUgLi4uXHJcbiAgLy8gLi4uIHRvIHNhdmUgdGhlIHVzZXIgdG8gc3RhdGUuXHJcbiAgY29uc3Qgc2lnbmluID0gKGVtYWlsLCBwYXNzd29yZCkgPT4ge1xyXG4gICAgcmV0dXJuIGF1dGguc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBzZXRVc2VyKHJlc3BvbnNlLnVzZXIpO1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UudXNlcjtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNpZ251cCA9IChlbWFpbCwgcGFzc3dvcmQsIHVzZXJuYW1lKSA9PiB7XHJcbiAgICByZXR1cm4gYXV0aFxyXG4gICAgICAuY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZClcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgc2V0VXNlcihyZXNwb25zZS51c2VyKTtcclxuICAgICAgICBkYi5jb2xsZWN0aW9uKFwidXNlcnNcIikuYWRkKHtcclxuICAgICAgICAgIGJhZGdlczogW10sXHJcbiAgICAgICAgICBiaW9ncmFwaHk6IFwiXCIsXHJcbiAgICAgICAgICBjcmVhdGVkQXQ6IGZpcmViYXNlLmZpcmVzdG9yZS5GaWVsZFZhbHVlLnNlcnZlclRpbWVzdGFtcCgpLFxyXG4gICAgICAgICAgc3VzcGVuZGVkOiBmYWxzZSxcclxuICAgICAgICAgIGZhY2Vib29rOiBcIlwiLFxyXG4gICAgICAgICAgaW5zdGFncmFtOiBcIlwiLFxyXG4gICAgICAgICAgdHdpdHRlcjogXCJcIixcclxuICAgICAgICAgIGRldmlhbnRhcnQ6IFwiXCIsXHJcbiAgICAgICAgICBsaWtlc0NvdW50OiBcIlwiLFxyXG4gICAgICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLFxyXG4gICAgICAgICAgaW1hZ2U6IFwiXCIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnVzZXI7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNpZ25vdXQgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gYXV0aC5zaWduT3V0KCkudGhlbigoKSA9PiB7XHJcbiAgICAgIHNldFVzZXIoZmFsc2UpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2VuZFBhc3N3b3JkUmVzZXRFbWFpbCA9IChlbWFpbCkgPT4ge1xyXG4gICAgcmV0dXJuIGF1dGguc2VuZFBhc3N3b3JkUmVzZXRFbWFpbChlbWFpbCkudGhlbigoKSA9PiB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY29uZmlybVBhc3N3b3JkUmVzZXQgPSAoY29kZSwgcGFzc3dvcmQpID0+IHtcclxuICAgIHJldHVybiBhdXRoLmNvbmZpcm1QYXNzd29yZFJlc2V0KGNvZGUsIHBhc3N3b3JkKS50aGVuKCgpID0+IHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdW5zdWJzY3JpYmUgPSBhdXRoLm9uQXV0aFN0YXRlQ2hhbmdlZCgodXNlcikgPT4ge1xyXG4gICAgICBpZiAodXNlcikge1xyXG4gICAgICAgIHNldFVzZXIodXNlcik7XHJcbiAgICAgICAgaWYgKHVzZXIudWlkKSB7XHJcbiAgICAgICAgICBsZXQgdXNlcm5hbWUgPSBcIlwiO1xyXG4gICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgIGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKVxyXG4gICAgICAgICAgICAuZG9jKHVzZXIudWlkKVxyXG4gICAgICAgICAgICAub25TbmFwc2hvdCgoZG9jKSA9PiB7XHJcbiAgICAgICAgICAgICAgdXNlcm5hbWUgPSBkb2MuZGF0YSgpLnVzZXJuYW1lO1xyXG4gICAgICAgICAgICAgIHNldFVzZXIoeyAuLi51c2VyLCB1c2VybmFtZSwgaW1hZ2U6IGRvYy5kYXRhKCkuaW1hZ2UgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRVc2VyKGZhbHNlKTtcclxuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBDbGVhbnVwIHN1YnNjcmlwdGlvbiBvbiB1bm1vdW50XHJcbiAgICByZXR1cm4gKCkgPT4gdW5zdWJzY3JpYmUoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8vIFJldHVybiB0aGUgdXNlciBvYmplY3QgYW5kIGF1dGggbWV0aG9kc1xyXG4gIHJldHVybiB7XHJcbiAgICBpc0xvYWRpbmcsXHJcbiAgICB1c2VyLFxyXG4gICAgc2lnbmluLFxyXG4gICAgc2lnbnVwLFxyXG4gICAgc2lnbm91dCxcclxuICAgIHNlbmRQYXNzd29yZFJlc2V0RW1haWwsXHJcbiAgICBjb25maXJtUGFzc3dvcmRSZXNldCxcclxuICB9O1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IEZvcm0sIG1lc3NhZ2UgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcblxyXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSBcIi4uLy4uL2hvb2tzL3VzZXJIb29rc1wiO1xyXG5pbXBvcnQge1xyXG4gIGFkZENoYXJhY3RlcixcclxuICBnZXRVc2VyQ2hhcmFjdGVycyxcclxufSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9ucy9jaGFyYWN0ZXJzQWN0aW9uc1wiO1xyXG5cclxuaW1wb3J0IExvYWRpbmdTY3JlZW4gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvaG9jL0xvYWRpbmdTY3JlZW5cIjtcclxuaW1wb3J0IFJlZGlyZWN0Q29tcCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9ob2MvUmVkaXJlY3RDb21wXCI7XHJcbmltcG9ydCBDaGFyYWN0ZXJGb3JtIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2Zvcm1zL0NoYXJhY3RlckZvcm1cIjtcclxuXHJcbmNvbnN0IG5ld0NoYXJhY3RlciA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgY2hhcmFjdGVycywgY2hhcmFjdGVySWQsIGxvYWRpbmdDaGFyYWN0ZXIgfSA9IHByb3BzO1xyXG4gIGNvbnN0IGF1dGggPSB1c2VBdXRoKCk7XHJcbiAgY29uc3QgW2Zvcm1dID0gRm9ybS51c2VGb3JtKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IFt2aXNpYmlsaXR5LCBzZXRWaXNpYmlsaXR5XSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGF1dGgudXNlcikge1xyXG4gICAgICBwcm9wcy5nZXRVc2VyQ2hhcmFjdGVycyhhdXRoLnVzZXIudWlkKTtcclxuICAgIH1cclxuICB9LCBbYXV0aF0pO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZm9ybS5zZXRGaWVsZHNWYWx1ZSh7IHB1YmxpYzogdmlzaWJpbGl0eSB9KTtcclxuICB9LCBbdmlzaWJpbGl0eV0pO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGNoYXJhY3RlcklkKSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKGAvY2hhcmFjdGVyLyR7Y2hhcmFjdGVySWR9YCk7XHJcbiAgICB9XHJcbiAgfSwgW2NoYXJhY3RlcklkXSk7XHJcblxyXG4gIGNvbnN0IG9uRmFpbGVkID0gKCkgPT4ge1xyXG4gICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG4gICAgbWVzc2FnZS5lcnJvcihcIlRoZXJlIGFyZSBzb21lIGVycm9yc1wiKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzdWJtaXQgPSAodmFsdWVzKSA9PiB7XHJcbiAgICBpZiAodHlwZW9mIHZhbHVlcy5pbWFnZSA9PT0gbnVsbCkgdmFsdWVzLmltYWdlID0gXCJcIjtcclxuICAgIGlmICghdmFsdWVzLmltYWdlKSBkZWxldGUgdmFsdWVzLmltYWdlQ29weXJpZ2h0O1xyXG4gICAgcHJvcHMuYWRkQ2hhcmFjdGVyKHtcclxuICAgICAgLi4udmFsdWVzLFxyXG4gICAgICBhdXRob3JJZDogYXV0aC51c2VyLnVpZCxcclxuICAgICAgYXV0aG9yTmFtZTogYXV0aC51c2VyLnVzZXJuYW1lLFxyXG4gICAgICBhdXRob3JJbWFnZTogYXV0aC51c2VyLmltYWdlID8gYXV0aC51c2VyLmltYWdlIDogXCJcIixcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TG9hZGluZ1NjcmVlbiBsb2FkaW5nPXthdXRoLmlzTG9hZGluZ30+XHJcbiAgICAgIDxSZWRpcmVjdENvbXAgY29uZGl0aW9uPXthdXRoLnVzZXJ9IHR5cGU9XCJyZWRpcmVjdFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3LWNoYXJhY3RlciBjdXN0b20tZm9ybVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lclwiPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwic2lkZS1oZWFkaW5nXCI+QWRkIGEgbmV3IGNoYXJhY3RlcjwvaDI+XHJcbiAgICAgICAgICAgIDxDaGFyYWN0ZXJGb3JtXHJcbiAgICAgICAgICAgICAgc3VibWl0PXtzdWJtaXR9XHJcbiAgICAgICAgICAgICAgb25GYWlsZWQ9e29uRmFpbGVkfVxyXG4gICAgICAgICAgICAgIGZvcm09e2Zvcm19XHJcbiAgICAgICAgICAgICAgY2hhcmFjdGVycz17Y2hhcmFjdGVyc31cclxuICAgICAgICAgICAgICB2aXNpYmlsaXR5PXt2aXNpYmlsaXR5fVxyXG4gICAgICAgICAgICAgIHNldFZpc2liaWxpdHk9e3NldFZpc2liaWxpdHl9XHJcbiAgICAgICAgICAgICAgbG9hZGluZ0NoYXJhY3Rlcj17bG9hZGluZ0NoYXJhY3Rlcn1cclxuICAgICAgICAgICAgICB0eXBlPVwiYWRkXCJcclxuICAgICAgICAgICAgICBpbml0aWFsVmFsdWVzPXt7XHJcbiAgICAgICAgICAgICAgICBmaXJzdG5hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBsYXN0bmFtZTogXCJcIixcclxuICAgICAgICAgICAgICAgIGFnZTogMCxcclxuICAgICAgICAgICAgICAgIGdlbmRlcjogXCJcIixcclxuICAgICAgICAgICAgICAgIHB1YmxpYzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGV0aG5pY2l0eTogXCJcIixcclxuICAgICAgICAgICAgICAgIGdyb3VwOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgcmVzaWRlbmNlOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBuaWNrbmFtZTogXCJcIixcclxuICAgICAgICAgICAgICAgIG9jY3VwYXRpb246IFwiXCIsXHJcbiAgICAgICAgICAgICAgICByZWxhdGl2ZXM6IFtdLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9SZWRpcmVjdENvbXA+XHJcbiAgICA8L0xvYWRpbmdTY3JlZW4+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcclxuICBjaGFyYWN0ZXJzOiBzdGF0ZS5jaGFyYWN0ZXJzLnVzZXJDaGFyYWN0ZXJzLFxyXG4gIGxvYWRpbmdDaGFyYWN0ZXI6IHN0YXRlLmNoYXJhY3RlcnMubG9hZGluZ0NoYXJhY3RlcixcclxuICBjaGFyYWN0ZXJJZDogc3RhdGUuY2hhcmFjdGVycy5jaGFyYWN0ZXJJZCxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgeyBnZXRVc2VyQ2hhcmFjdGVycywgYWRkQ2hhcmFjdGVyIH0pKFxyXG4gIG5ld0NoYXJhY3RlclxyXG4pO1xyXG4iLCJpbXBvcnQgeyB0eXBlcyB9IGZyb20gXCIuLi8uLi91dGlscy9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgbWVzc2FnZSB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IGRiLCBhdXRoLCBzdG9yYWdlIH0gZnJvbSBcIi4uL2ZiQ29uZmlnXCI7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q2hhcmFjdGVyID0gKGlkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkYi5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc1wiKVxyXG4gICAgLmRvYyhpZClcclxuICAgIC5nZXQoKVxyXG4gICAgLnRoZW4oKGRvYykgPT4ge1xyXG4gICAgICBpZiAoZG9jLmV4aXN0cykge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IHR5cGVzLkdFVF9DSEFSQUNURVIsXHJcbiAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgIGNoYXJhY3RlcjogeyAuLi5kb2MuZGF0YSgpLCBpZDogZG9jLmlkIH0sXHJcbiAgICAgICAgICAgIGNoYXJhRXhpc3RzOiB0cnVlLFxyXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogdHlwZXMuR0VUX0NIQVJBQ1RFUixcclxuICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgY2hhcmFFeGlzdHM6IGZhbHNlLFxyXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZENoYXJhY3RlciA9IChkYXRhKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkaXNwYXRjaCh7IHR5cGU6IHR5cGVzLkFERF9DSEFSQUNURVIsIHBheWxvYWQ6IHsgbG9hZGluZzogdHJ1ZSB9IH0pO1xyXG5cclxuICBsZXQgY2hhcmFJZCA9IFwiXCI7XHJcbiAgZGIuY29sbGVjdGlvbihcImNoYXJhY3RlcnNcIilcclxuICAgIC5hZGQoe1xyXG4gICAgICAuLi5kYXRhLFxyXG4gICAgICBpbWFnZTogdHlwZW9mIGRhdGEuaW1hZ2UgPT09IFwic3RyaW5nXCIgPyBkYXRhLmltYWdlIDogXCJcIixcclxuICAgICAgY3JlYXRlZEF0OiBmaXJlYmFzZS5maXJlc3RvcmUuRmllbGRWYWx1ZS5zZXJ2ZXJUaW1lc3RhbXAoKSxcclxuICAgICAgbGlrZXNDb3VudDogMCxcclxuICAgICAgbGlrZXM6IFtdLFxyXG4gICAgICBkaXNsaWtlczogW10sXHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBjaGFyYUlkID0gcmVzLmlkO1xyXG4gICAgICBjb25zdCBpbWFnZU5hbWUgPSBgJHtyZXMuaWR9JHtcIl9cIn0ke2RhdGEuZmlyc3RuYW1lLnRvTG93ZXJDYXNlKCl9JHtcclxuICAgICAgICBkYXRhLmxhc3RuYW1lICYmIFwiX1wiXHJcbiAgICAgIH0ke2RhdGEubGFzdG5hbWUgJiYgZGF0YS5sYXN0bmFtZS50b0xvd2VyQ2FzZSgpfWA7XHJcblxyXG4gICAgICBpZiAodHlwZW9mIGRhdGEuaW1hZ2UgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICBzdG9yYWdlXHJcbiAgICAgICAgICAucmVmKGAke2F1dGguY3VycmVudFVzZXIudWlkfS8ke2ltYWdlTmFtZX1gKVxyXG4gICAgICAgICAgLnB1dChkYXRhLmltYWdlKVxyXG4gICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gc3RvcmFnZVxyXG4gICAgICAgICAgICAgIC5yZWYoYXV0aC5jdXJyZW50VXNlci51aWQpXHJcbiAgICAgICAgICAgICAgLmNoaWxkKGltYWdlTmFtZSlcclxuICAgICAgICAgICAgICAuZ2V0RG93bmxvYWRVUkwoKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbigodXJsKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBkYlxyXG4gICAgICAgICAgICAgIC5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc1wiKVxyXG4gICAgICAgICAgICAgIC5kb2MoY2hhcmFJZClcclxuICAgICAgICAgICAgICAudXBkYXRlKHsgaW1hZ2U6IHVybCB9KTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhcIkNoYXJhY3RlciBhZGRlZCBzdWNjZXNzZnVsbHlcIik7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICB0eXBlOiB0eXBlcy5BRERfQ0hBUkFDVEVSLFxyXG4gICAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiQ2hhcmFjdGVyIGFkZGVkIHN1Y2Nlc3NmdWxseVwiLFxyXG4gICAgICAgICAgICAgICAgY2hhcmFjdGVySWQ6IGNoYXJhSWQsXHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhcIkNoYXJhY3RlciBhZGRlZCBzdWNjZXNzZnVsbHlcIik7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogdHlwZXMuQUREX0NIQVJBQ1RFUixcclxuICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJDaGFyYWN0ZXIgYWRkZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICAgIGNoYXJhY3RlcklkOiBjaGFyYUlkLFxyXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBtZXNzYWdlLmVycm9yKGVyci5tZXNzYWdlKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGVkaXRDaGFyYWN0ZXIgPSAoZGF0YSwgaWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRpc3BhdGNoKHsgdHlwZTogdHlwZXMuRURJVF9DSEFSQUNURVIsIHBheWxvYWQ6IHsgbG9hZGluZ0NoYXJhY3RlcjogdHJ1ZSB9IH0pO1xyXG5cclxuICBjb25zdCBpbWFnZU5hbWUgPSBgJHtpZH0ke1wiX1wifSR7ZGF0YS5maXJzdG5hbWUudG9Mb3dlckNhc2UoKX0ke1xyXG4gICAgZGF0YS5sYXN0bmFtZSAmJiBcIl9cIlxyXG4gIH0ke2RhdGEubGFzdG5hbWUgJiYgZGF0YS5sYXN0bmFtZS50b0xvd2VyQ2FzZSgpfWA7XHJcblxyXG4gIGlmIChkYXRhLmltYWdlICYmIHR5cGVvZiBkYXRhLmltYWdlID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICBzdG9yYWdlXHJcbiAgICAgIC5yZWYoYCR7YXV0aC5jdXJyZW50VXNlci51aWR9LyR7aW1hZ2VOYW1lfWApXHJcbiAgICAgIC5wdXQoZGF0YS5pbWFnZSlcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBzdG9yYWdlXHJcbiAgICAgICAgICAucmVmKGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gICAgICAgICAgLmNoaWxkKGltYWdlTmFtZSlcclxuICAgICAgICAgIC5nZXREb3dubG9hZFVSTCgpO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigodXJsKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGRiXHJcbiAgICAgICAgICAuY29sbGVjdGlvbihcImNoYXJhY3RlcnNcIilcclxuICAgICAgICAgIC5kb2MoaWQpXHJcbiAgICAgICAgICAudXBkYXRlKHtcclxuICAgICAgICAgICAgLi4uZGF0YSxcclxuICAgICAgICAgICAgaW1hZ2U6IHVybCxcclxuICAgICAgICAgICAgcmVsYXRpdmVzQXJyOiBkYXRhLnJlbGF0aXZlcy5tYXAoKGMpID0+IGMuY2hhcmFjdGVyX2lkKSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogdHlwZXMuRURJVF9DSEFSQUNURVIsXHJcbiAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiQ2hhcmFjdGVyIGVkaXRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgICAgbG9hZGluZ0NoYXJhY3RlcjogZmFsc2UsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoZXJyLm1lc3NhZ2UpO1xyXG4gICAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgZGIuY29sbGVjdGlvbihcImNoYXJhY3RlcnNcIilcclxuICAgICAgLmRvYyhpZClcclxuICAgICAgLnVwZGF0ZSh7XHJcbiAgICAgICAgLi4uZGF0YSxcclxuICAgICAgICByZWxhdGl2ZXNBcnI6IGRhdGEucmVsYXRpdmVzLm1hcCgoYykgPT4gYy5jaGFyYWN0ZXJfaWQpLFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogdHlwZXMuRURJVF9DSEFSQUNURVIsXHJcbiAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiQ2hhcmFjdGVyIGVkaXRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgICAgbG9hZGluZ0NoYXJhY3RlcjogZmFsc2UsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoZXJyLm1lc3NhZ2UpO1xyXG4gICAgICB9KTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlQ2hhcmFjdGVyID0gKGlkLCBmaXJzdG5hbWUsIGxhc3RuYW1lKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkaXNwYXRjaCh7IHR5cGU6IHR5cGVzLkRFTEVURV9DSEFSQUNURVIsIHBheWxvYWQ6IHsgbG9hZGluZzogdHJ1ZSB9IH0pO1xyXG4gIGNvbnN0IGltYWdlTmFtZSA9IGAke2lkfSR7XCJfXCJ9JHtmaXJzdG5hbWUudG9Mb3dlckNhc2UoKX0ke2xhc3RuYW1lICYmIFwiX1wifSR7XHJcbiAgICBsYXN0bmFtZSAmJiBsYXN0bmFtZS50b0xvd2VyQ2FzZSgpXHJcbiAgfWA7XHJcbiAgY29uc3QgYmF0Y2ggPSBkYi5iYXRjaCgpO1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzXCIpXHJcbiAgICAuZG9jKGlkKVxyXG4gICAgLmRlbGV0ZSgpXHJcbiAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgIHJldHVybiBzdG9yYWdlLnJlZihgJHthdXRoLmN1cnJlbnRVc2VyLnVpZH0vJHtpbWFnZU5hbWV9YCkuZGVsZXRlKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICBkYi5jb2xsZWN0aW9uKFwiY2hhcHRlcnNcIilcclxuICAgICAgICAud2hlcmUoXCJjaGFyYWN0ZXJzXCIsIFwiYXJyYXktY29udGFpbnNcIiwgaWQpXHJcbiAgICAgICAgLmdldCgpXHJcbiAgICAgICAgLnRoZW4oKGRvY3MpID0+IHtcclxuICAgICAgICAgIGRvY3MuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICAgICAgICAgIGJhdGNoLnVwZGF0ZShkYi5jb2xsZWN0aW9uKFwiY2hhcHRlcnNcIikuZG9jKGRvYy5pZCksIHtcclxuICAgICAgICAgICAgICBjaGFyYWN0ZXJzOiBkb2MuZGF0YSgpLmNoYXJhY3RlcnMuZmlsdGVyKChjKSA9PiBjICE9PSBpZCksXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKVxyXG4gICAgICAgICAgICAud2hlcmUoXCJzZWNvbmRhcnlBcnJcIiwgXCJhcnJheS1jb250YWluc1wiLCBpZClcclxuICAgICAgICAgICAgLmdldCgpXHJcbiAgICAgICAgICAgIC50aGVuKChzdG9yaWVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgc3Rvcmllcy5mb3JFYWNoKChzdG9yeSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYmF0Y2gudXBkYXRlKGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpLmRvYyhzdG9yeS5pZCksIHtcclxuICAgICAgICAgICAgICAgICAgbWFpbkNoYXJhY3RlcnM6IHN0b3J5XHJcbiAgICAgICAgICAgICAgICAgICAgLmRhdGEoKVxyXG4gICAgICAgICAgICAgICAgICAgIC5tYWluQ2hhcmFjdGVycy5maWx0ZXIoKGMpID0+IGMgIT09IGlkKSxcclxuICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5QXJyOiBzdG9yeVxyXG4gICAgICAgICAgICAgICAgICAgIC5kYXRhKClcclxuICAgICAgICAgICAgICAgICAgICAuc2Vjb25kYXJ5QXJyLmZpbHRlcigoYykgPT4gYyAhPT0gaWQpLFxyXG4gICAgICAgICAgICAgICAgICBzZWNvbmRhcnlDaGFyYWN0ZXJzOiBzdG9yeVxyXG4gICAgICAgICAgICAgICAgICAgIC5kYXRhKClcclxuICAgICAgICAgICAgICAgICAgICAuc2Vjb25kYXJ5Q2hhcmFjdGVycy5maWx0ZXIoKGMpID0+IGMuaWQgIT09IGlkKSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgZGIuY29sbGVjdGlvbihcImNoYXJhY3RlcnNcIilcclxuICAgICAgICAgICAgICAgIC53aGVyZShcInJlbGF0aXZlc0FyclwiLCBcImFycmF5LWNvbnRhaW5zXCIsIGlkKVxyXG4gICAgICAgICAgICAgICAgLmdldCgpXHJcbiAgICAgICAgICAgICAgICAudGhlbigoY2hhcmFjdGVycykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBjaGFyYWN0ZXJzLmZvckVhY2goKGNoYXIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBiYXRjaC51cGRhdGUoZGIuY29sbGVjdGlvbihcImNoYXJhY3RlcnNcIikuZG9jKGNoYXIuaWQpLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZWxhdGl2ZXNBcnI6IGNoYXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmRhdGEoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVsYXRpdmVzQXJyLmZpbHRlcigoYykgPT4gYyAhPT0gaWQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgcmVsYXRpdmVzOiBjaGFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5kYXRhKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbGF0aXZlcy5maWx0ZXIoKGMpID0+IGMuY2hhcmFjdGVyX2lkICE9PSBpZCksXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgZGIuY29sbGVjdGlvbihcImNoYXJhY3RlcnNMaWtlc1wiKVxyXG4gICAgICAgICAgICAgICAgICAgIC53aGVyZShcImNoYXJhY3RlcklkXCIsIFwiPT1cIiwgaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgLmdldCgpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKGxpa2VzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBsaWtlcy5mb3JFYWNoKChsaWtlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhdGNoLmRlbGV0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYi5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc0xpa2VzXCIpLmRvYyhsaWtlLmlkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBiYXRjaC5jb21taXQoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHR5cGVzLkRFTEVURV9DSEFSQUNURVIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJDaGFyYWN0ZXIgZGVsZXRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJhRXhpc3RzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VXNlckNoYXJhY3RlcnMgPSAodXNlcklkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkYi5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc1wiKVxyXG4gICAgLndoZXJlKFwiYXV0aG9ySWRcIiwgXCI9PVwiLCB1c2VySWQpXHJcbiAgICAuZ2V0KClcclxuICAgIC50aGVuKChkb2NzKSA9PiB7XHJcbiAgICAgIGxldCBpdGVtcyA9IFtdO1xyXG4gICAgICBkb2NzLmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgICAgIGl0ZW1zID0gWy4uLml0ZW1zLCB7IGlkOiBkb2MuaWQsIC4uLmRvYy5kYXRhKCkgfV07XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gaXRlbXM7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGl0ZW1zKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogdHlwZXMuR0VUX1VTRVJfQ0hBUkFDVEVSUywgcGF5bG9hZDogaXRlbXMgfSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRGYXZvcml0ZUNoYXJhY3RlcnMgPSAoKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkYi5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc0xpa2VzXCIpXHJcbiAgICAud2hlcmUoXCJzZW5kZXJJZFwiLCBcIj09XCIsIGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigoZG9jcykgPT4ge1xyXG4gICAgICBsZXQgZmF2QXJyID0gW107XHJcbiAgICAgIGRvY3MuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICAgICAgZmF2QXJyID0gWy4uLmZhdkFyciwgZG9jLmRhdGEoKS5jaGFyYWN0ZXJJZF07XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gZmF2QXJyO1xyXG4gICAgfSlcclxuICAgIC50aGVuKCh1c2VycykgPT4ge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSB1c2Vycy5tYXAoKHVzZXIpID0+XHJcbiAgICAgICAgZGIuY29sbGVjdGlvbihcImNoYXJhY3RlcnNcIikuZG9jKHVzZXIpLmdldCgpXHJcbiAgICAgICk7XHJcbiAgICAgIFByb21pc2UuYWxsKHJlc3VsdCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgbGV0IGZhdlVzZXJzID0gW107XHJcbiAgICAgICAgcmVzLmZvckVhY2goXHJcbiAgICAgICAgICAoZG9jKSA9PiAoZmF2VXNlcnMgPSBbLi4uZmF2VXNlcnMsIHsgaWQ6IGRvYy5pZCwgLi4uZG9jLmRhdGEoKSB9XSlcclxuICAgICAgICApO1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IHR5cGVzLkdFVF9GQVZPUklURV9DSEFSQUNURVJTLFxyXG4gICAgICAgICAgcGF5bG9hZDogZmF2VXNlcnMsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q2hhcmFjdGVyc0luU3RvcnkgPSAoaWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpXHJcbiAgICAuZG9jKGlkKVxyXG4gICAgLm9uU25hcHNob3QoKGRvYykgPT4ge1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogdHlwZXMuR0VUX1NUT1JZX0NIQVJBQ1RFUlMsXHJcbiAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgc2Vjb25kYXJ5Q2hhcmFjdGVyczogZG9jLmRhdGEoKS5zZWNvbmRhcnlDaGFyYWN0ZXJzLFxyXG4gICAgICAgICAgbWFpbkFycjogZG9jLmRhdGEoKS5tYWluQ2hhcmFjdGVycyxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG4iLCJpbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlL2FwcFwiO1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9hdXRoXCI7XHJcbmltcG9ydCBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9zdG9yYWdlXCI7XHJcblxyXG5jb25zdCBwcm9kQ29uZmlnID0ge1xyXG4gIGFwaUtleTogcHJvY2Vzcy5lbnYuRklSRUJBU0VfQVBJX0tFWSxcclxuICBhdXRoRG9tYWluOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9BVVRIX0RPTUFJTixcclxuICBkYXRhYmFzZVVSTDogcHJvY2Vzcy5lbnYuRklSRUJBU0VfREFUQUJBU0VfVVJMLFxyXG4gIHByb2plY3RJZDogcHJvY2Vzcy5lbnYuRklSRUJBU0VfUFJPSkVDVF9JRCxcclxuICBzdG9yYWdlQnVja2V0OiBwcm9jZXNzLmVudi5GSVJFQkFTRV9TVE9SQUdFX0JVQ0tFVCxcclxuICBtZXNzYWdpbmdTZW5kZXJJZDogcHJvY2Vzcy5lbnYuRklSRUJBU0VfTUVTU0FHSU5HX1NFTkRFUl9JRCxcclxuICBhcHBJZDogcHJvY2Vzcy5lbnYuRklSRUJBU0VfQVBQX0lELFxyXG59O1xyXG5cclxuY29uc3QgZGV2Q29uZmlnID0ge1xyXG4gIGFwaUtleTogcHJvY2Vzcy5lbnYuRklSRUJBU0VfQVBJX0tFWSxcclxuICBhdXRoRG9tYWluOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9BVVRIX0RPTUFJTixcclxuICBkYXRhYmFzZVVSTDogcHJvY2Vzcy5lbnYuRklSRUJBU0VfREFUQUJBU0VfVVJMLFxyXG4gIHByb2plY3RJZDogcHJvY2Vzcy5lbnYuRklSRUJBU0VfUFJPSkVDVF9JRCxcclxuICBzdG9yYWdlQnVja2V0OiBwcm9jZXNzLmVudi5GSVJFQkFTRV9TVE9SQUdFX0JVQ0tFVCxcclxuICBtZXNzYWdpbmdTZW5kZXJJZDogcHJvY2Vzcy5lbnYuRklSRUJBU0VfTUVTU0FHSU5HX1NFTkRFUl9JRCxcclxuICBhcHBJZDogcHJvY2Vzcy5lbnYuRklSRUJBU0VfQVBQX0lELFxyXG59O1xyXG5cclxuY29uc3QgY29uZmlnID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gcHJvZENvbmZpZyA6IGRldkNvbmZpZztcclxuXHJcbmlmICghZmlyZWJhc2UuYXBwcy5sZW5ndGgpIHtcclxuICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGNvbmZpZyk7XHJcbn1cclxuXHJcbmNvbnN0IGRiID0gZmlyZWJhc2UuZmlyZXN0b3JlKCk7XHJcbmNvbnN0IGF1dGggPSBmaXJlYmFzZS5hdXRoKCk7XHJcbmNvbnN0IHN0b3JhZ2UgPSBmaXJlYmFzZS5zdG9yYWdlKCk7XHJcblxyXG5leHBvcnQgeyBkYiwgYXV0aCwgc3RvcmFnZSB9O1xyXG5leHBvcnQgZGVmYXVsdCBjb25maWc7XHJcbiIsImV4cG9ydCBjb25zdCBDQVRFR09SSUVTID0gW1xyXG4gIHsgbmFtZTogXCJEcmFtYVwiLCB2YWx1ZTogXCJkcmFtYVwiIH0sXHJcbiAgeyBuYW1lOiBcIkNvbWVkeVwiLCB2YWx1ZTogXCJjb21lZHlcIiB9LFxyXG4gIHsgbmFtZTogXCJIb3Jyb3JcIiwgdmFsdWU6IFwiaG9ycm9yXCIgfSxcclxuICB7IG5hbWU6IFwiUm9tYW5jZVwiLCB2YWx1ZTogXCJyb21hbmNlXCIgfSxcclxuICB7IG5hbWU6IFwiU2NpLWZpXCIsIHZhbHVlOiBcInNjaS1maVwiIH0sXHJcbiAgeyBuYW1lOiBcIkZhbnRhc3lcIiwgdmFsdWU6IFwiZmFudGFzeVwiIH0sXHJcbiAgeyBuYW1lOiBcIkh1bW9yXCIsIHZhbHVlOiBcImh1bW9yXCIgfSxcclxuICB7IG5hbWU6IFwiQWN0aW9uXCIsIHZhbHVlOiBcImFjdGlvblwiIH0sXHJcbiAgeyBuYW1lOiBcIlRocmlsbGVyXCIsIHZhbHVlOiBcInRocmlsbGVyXCIgfSxcclxuICB7IG5hbWU6IFwiU3VwZXJuYXR1cmFsXCIsIHZhbHVlOiBcInN1cGVybmF0dXJhbFwiIH0sXHJcbiAgeyBuYW1lOiBcIkFkdmVudHVyZVwiLCB2YWx1ZTogXCJhZHZlbnR1cmVcIiB9LFxyXG4gIHsgbmFtZTogXCJNeXN0ZXJ5XCIsIHZhbHVlOiBcIm15c3RlcnlcIiB9LFxyXG4gIHsgbmFtZTogXCJXZXN0ZXJuXCIsIHZhbHVlOiBcIndlc3Rlcm5cIiB9LFxyXG4gIHsgbmFtZTogXCJIaXN0b3J5XCIsIHZhbHVlOiBcImhpc3RvcnlcIiB9LFxyXG4gIHsgbmFtZTogXCJDcmltZVwiLCB2YWx1ZTogXCJjcmltZVwiIH0sXHJcbiAgeyBuYW1lOiBcIkZhbmZpY3Rpb25cIiwgdmFsdWU6IFwiZmFuZmljdGlvblwiIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgQ09QWVJJR0hUUyA9IFtcclxuICB7IG5hbWU6IFwiUHVibGljIERvbWFpblwiLCB2YWx1ZTogXCJwdWJsaWMgZG9tYWluXCIgfSxcclxuICB7IG5hbWU6IFwiQWxsIFJpZ2h0cyBSZXNlcnZlZFwiLCB2YWx1ZTogXCJhbGwgcmlnaHRzIHJlc2VydmVkXCIgfSxcclxuICB7IG5hbWU6IFwiQ3JlYXRpdmUgQ29tbW9uc1wiLCB2YWx1ZTogXCJjcmVhdGl2ZSBjb21tb25zXCIgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBMQU5HVUFHRVMgPSBbXHJcbiAgeyBuYW1lOiBcIkFmYXJcIiwgdmFsdWU6IFwiYWFcIiB9LFxyXG4gIHsgbmFtZTogXCJBYmtoYXppYW5cIiwgdmFsdWU6IFwiYWJcIiB9LFxyXG4gIHsgbmFtZTogXCJBdmVzdGFuXCIsIHZhbHVlOiBcImFlXCIgfSxcclxuICB7IG5hbWU6IFwiQWZyaWthYW5zXCIsIHZhbHVlOiBcImFmXCIgfSxcclxuICB7IG5hbWU6IFwiQWthblwiLCB2YWx1ZTogXCJha1wiIH0sXHJcbiAgeyBuYW1lOiBcIkFtaGFyaWNcIiwgdmFsdWU6IFwiYW1cIiB9LFxyXG4gIHsgbmFtZTogXCJBcmFnb25lc2VcIiwgdmFsdWU6IFwiYW5cIiB9LFxyXG4gIHsgbmFtZTogXCJBcmFiaWNcIiwgdmFsdWU6IFwiYXJcIiB9LFxyXG4gIHsgbmFtZTogXCJBc3NhbWVzZVwiLCB2YWx1ZTogXCJhc1wiIH0sXHJcbiAgeyBuYW1lOiBcIkF2YXJpY1wiLCB2YWx1ZTogXCJhdlwiIH0sXHJcbiAgeyBuYW1lOiBcIkF5bWFyYVwiLCB2YWx1ZTogXCJheVwiIH0sXHJcbiAgeyBuYW1lOiBcIkF6ZXJiYWlqYW5pXCIsIHZhbHVlOiBcImF6XCIgfSxcclxuICB7IG5hbWU6IFwiQmFzaGtpclwiLCB2YWx1ZTogXCJiYVwiIH0sXHJcbiAgeyBuYW1lOiBcIkJlbGFydXNpYW5cIiwgdmFsdWU6IFwiYmVcIiB9LFxyXG4gIHsgbmFtZTogXCJCdWxnYXJpYW5cIiwgdmFsdWU6IFwiYmdcIiB9LFxyXG4gIHsgbmFtZTogXCJCaWhhcmlcIiwgdmFsdWU6IFwiYmhcIiB9LFxyXG4gIHsgbmFtZTogXCJCaXNsYW1hXCIsIHZhbHVlOiBcImJpXCIgfSxcclxuICB7IG5hbWU6IFwiQmFtYmFyYVwiLCB2YWx1ZTogXCJibVwiIH0sXHJcbiAgeyBuYW1lOiBcIkJlbmdhbGlcIiwgdmFsdWU6IFwiYm5cIiB9LFxyXG4gIHsgbmFtZTogXCJUaWJldGFuXCIsIHZhbHVlOiBcImJvXCIgfSxcclxuICB7IG5hbWU6IFwiQnJldG9uXCIsIHZhbHVlOiBcImJyXCIgfSxcclxuICB7IG5hbWU6IFwiQm9zbmlhblwiLCB2YWx1ZTogXCJic1wiIH0sXHJcbiAgeyBuYW1lOiBcIkNhdGFsYW5cIiwgdmFsdWU6IFwiY2FcIiB9LFxyXG4gIHsgbmFtZTogXCJDaGVjaGVuXCIsIHZhbHVlOiBcImNlXCIgfSxcclxuICB7IG5hbWU6IFwiQ2hhbW9ycm9cIiwgdmFsdWU6IFwiY2hcIiB9LFxyXG4gIHsgbmFtZTogXCJDb3JzaWNhblwiLCB2YWx1ZTogXCJjb1wiIH0sXHJcbiAgeyBuYW1lOiBcIkNyZWVcIiwgdmFsdWU6IFwiY3JcIiB9LFxyXG4gIHsgbmFtZTogXCJDemVjaFwiLCB2YWx1ZTogXCJjc1wiIH0sXHJcbiAgeyBuYW1lOiBcIk9sZCBDaHVyY2ggU2xhdm9uaWNcIiwgdmFsdWU6IFwiY3VcIiB9LFxyXG4gIHsgbmFtZTogXCJDaHV2YXNoXCIsIHZhbHVlOiBcImN2XCIgfSxcclxuICB7IG5hbWU6IFwiV2Vsc2hcIiwgdmFsdWU6IFwiY3lcIiB9LFxyXG4gIHsgbmFtZTogXCJEYW5pc2hcIiwgdmFsdWU6IFwiZGFcIiB9LFxyXG4gIHsgbmFtZTogXCJHZXJtYW5cIiwgdmFsdWU6IFwiZGVcIiB9LFxyXG4gIHsgbmFtZTogXCJEaXZlaGlcIiwgdmFsdWU6IFwiZHZcIiB9LFxyXG4gIHsgbmFtZTogXCJEem9uZ2toYVx0XCIsIHZhbHVlOiBcImR6XCIgfSxcclxuICB7IG5hbWU6IFwiRXdlXCIsIHZhbHVlOiBcImVlXCIgfSxcclxuICB7IG5hbWU6IFwiR3JlZWtcIiwgdmFsdWU6IFwiZWxcIiB9LFxyXG4gIHsgbmFtZTogXCJFbmdsaXNoXCIsIHZhbHVlOiBcImVuXCIgfSxcclxuICB7IG5hbWU6IFwiRXNwZXJhbnRvXCIsIHZhbHVlOiBcImVvXCIgfSxcclxuICB7IG5hbWU6IFwiU3BhbmlzaFwiLCB2YWx1ZTogXCJlc1wiIH0sXHJcbiAgeyBuYW1lOiBcIkVzdG9uaWFuXCIsIHZhbHVlOiBcImV0XCIgfSxcclxuICB7IG5hbWU6IFwiQmFzcXVlXCIsIHZhbHVlOiBcImV1XCIgfSxcclxuICB7IG5hbWU6IFwiUGVyc2lhblwiLCB2YWx1ZTogXCJmYVwiIH0sXHJcbiAgeyBuYW1lOiBcIkZ1bGFoXCIsIHZhbHVlOiBcImZmXCIgfSxcclxuICB7IG5hbWU6IFwiRmlubmlzaFwiLCB2YWx1ZTogXCJmaVwiIH0sXHJcbiAgeyBuYW1lOiBcIkZpamlhblwiLCB2YWx1ZTogXCJmalwiIH0sXHJcbiAgeyBuYW1lOiBcIkZhcm9lc2VcIiwgdmFsdWU6IFwiZm9cIiB9LFxyXG4gIHsgbmFtZTogXCJGcmVuY2hcIiwgdmFsdWU6IFwiZnJcIiB9LFxyXG4gIHsgbmFtZTogXCJXZXN0ZXJuIEZyaXNpYW5cIiwgdmFsdWU6IFwiZnlcIiB9LFxyXG4gIHsgbmFtZTogXCJJcmlzaFwiLCB2YWx1ZTogXCJnYVwiIH0sXHJcbiAgeyBuYW1lOiBcIlNjb3R0aXNoIEdhZWxpY1wiLCB2YWx1ZTogXCJnZFwiIH0sXHJcbiAgeyBuYW1lOiBcIkdhbGljaWFuXCIsIHZhbHVlOiBcImdsXCIgfSxcclxuICB7IG5hbWU6IFwiR3VhcmFuaVwiLCB2YWx1ZTogXCJnblwiIH0sXHJcbiAgeyBuYW1lOiBcIkd1amFyYXRpXCIsIHZhbHVlOiBcImd1XCIgfSxcclxuICB7IG5hbWU6IFwiTWFueFwiLCB2YWx1ZTogXCJndlwiIH0sXHJcbiAgeyBuYW1lOiBcIkhhdXNhXCIsIHZhbHVlOiBcImhhXCIgfSxcclxuICB7IG5hbWU6IFwiSGVicmV3XCIsIHZhbHVlOiBcImhlXCIgfSxcclxuICB7IG5hbWU6IFwiSGluZGlcIiwgdmFsdWU6IFwiaGlcIiB9LFxyXG4gIHsgbmFtZTogXCJIaXJpIE1vdHVcIiwgdmFsdWU6IFwiaG9cIiB9LFxyXG4gIHsgbmFtZTogXCJDcm9hdGlhblwiLCB2YWx1ZTogXCJoclwiIH0sXHJcbiAgeyBuYW1lOiBcIkhhaXRpYW5cIiwgdmFsdWU6IFwiaHRcIiB9LFxyXG4gIHsgbmFtZTogXCJIdW5nYXJpYW5cIiwgdmFsdWU6IFwiaHVcIiB9LFxyXG4gIHsgbmFtZTogXCJBcm1lbmlhblwiLCB2YWx1ZTogXCJoeVwiIH0sXHJcbiAgeyBuYW1lOiBcIkhlcmVyb1wiLCB2YWx1ZTogXCJoelwiIH0sXHJcbiAgeyBuYW1lOiBcIkludGVybGluZ3VhXCIsIHZhbHVlOiBcImlhXCIgfSxcclxuICB7IG5hbWU6IFwiSW5kb25lc2lhblwiLCB2YWx1ZTogXCJpZFwiIH0sXHJcbiAgeyBuYW1lOiBcIkludGVybGluZ3VlXCIsIHZhbHVlOiBcImllXCIgfSxcclxuICB7IG5hbWU6IFwiSWdib1wiLCB2YWx1ZTogXCJpZ1wiIH0sXHJcbiAgeyBuYW1lOiBcIlNpY2h1YW4gWWlcIiwgdmFsdWU6IFwiaWlcIiB9LFxyXG4gIHsgbmFtZTogXCJJbnVwaWFxXCIsIHZhbHVlOiBcImlrXCIgfSxcclxuICB7IG5hbWU6IFwiSWRvXCIsIHZhbHVlOiBcImlvXCIgfSxcclxuICB7IG5hbWU6IFwiSWNlbGFuZGljXCIsIHZhbHVlOiBcImlzXCIgfSxcclxuICB7IG5hbWU6IFwiSXRhbGlhblwiLCB2YWx1ZTogXCJpdFwiIH0sXHJcbiAgeyBuYW1lOiBcIkludWt0aXR1dFwiLCB2YWx1ZTogXCJpdVwiIH0sXHJcbiAgeyBuYW1lOiBcIkphcGFuZXNlXCIsIHZhbHVlOiBcImphXCIgfSxcclxuICB7IG5hbWU6IFwiSmF2YW5lc2VcIiwgdmFsdWU6IFwianZcIiB9LFxyXG4gIHsgbmFtZTogXCJHZW9yZ2lhblwiLCB2YWx1ZTogXCJrYVwiIH0sXHJcbiAgeyBuYW1lOiBcIktvbmdvXCIsIHZhbHVlOiBcImtnXCIgfSxcclxuICB7IG5hbWU6IFwiS2lrdXl1XCIsIHZhbHVlOiBcImtpXCIgfSxcclxuICB7IG5hbWU6IFwiS3dhbnlhbWFcIiwgdmFsdWU6IFwia2pcIiB9LFxyXG4gIHsgbmFtZTogXCJLYXpha2hcIiwgdmFsdWU6IFwia2tcIiB9LFxyXG4gIHsgbmFtZTogXCJHcmVlbmxhbmRpY1wiLCB2YWx1ZTogXCJrbFwiIH0sXHJcbiAgeyBuYW1lOiBcIktobWVyXCIsIHZhbHVlOiBcImttXCIgfSxcclxuICB7IG5hbWU6IFwiS2FubmFkYVwiLCB2YWx1ZTogXCJrblwiIH0sXHJcbiAgeyBuYW1lOiBcIktvcmVhblwiLCB2YWx1ZTogXCJrb1wiIH0sXHJcbiAgeyBuYW1lOiBcIkthbnVyaVwiLCB2YWx1ZTogXCJrclwiIH0sXHJcbiAgeyBuYW1lOiBcIkthc2htaXJpXCIsIHZhbHVlOiBcImtzXCIgfSxcclxuICB7IG5hbWU6IFwiS3VyZGlzaFwiLCB2YWx1ZTogXCJrdVwiIH0sXHJcbiAgeyBuYW1lOiBcIktvbWlcIiwgdmFsdWU6IFwia3ZcIiB9LFxyXG4gIHsgbmFtZTogXCJDb3JuaXNoXCIsIHZhbHVlOiBcImt3XCIgfSxcclxuICB7IG5hbWU6IFwiS2lyZ2hpelwiLCB2YWx1ZTogXCJreVwiIH0sXHJcbiAgeyBuYW1lOiBcIkxhdGluXCIsIHZhbHVlOiBcImxhXCIgfSxcclxuICB7IG5hbWU6IFwiTHV4ZW1ib3VyZ2lzaFwiLCB2YWx1ZTogXCJsYlwiIH0sXHJcbiAgeyBuYW1lOiBcIkdhbmRhXCIsIHZhbHVlOiBcImxnXCIgfSxcclxuICB7IG5hbWU6IFwiTGltYnVyZ2lzaFwiLCB2YWx1ZTogXCJsaVwiIH0sXHJcbiAgeyBuYW1lOiBcIkxpbmdhbGFcIiwgdmFsdWU6IFwibG5cIiB9LFxyXG4gIHsgbmFtZTogXCJMYW9cIiwgdmFsdWU6IFwibG9cIiB9LFxyXG4gIHsgbmFtZTogXCJMaXRodWFuaWFuXCIsIHZhbHVlOiBcImx0XCIgfSxcclxuICB7IG5hbWU6IFwiTHViYVwiLCB2YWx1ZTogXCJsdVwiIH0sXHJcbiAgeyBuYW1lOiBcIkxhdHZpYW5cIiwgdmFsdWU6IFwibHZcIiB9LFxyXG4gIHsgbmFtZTogXCJNYWxhZ2FzeVwiLCB2YWx1ZTogXCJtZ1wiIH0sXHJcbiAgeyBuYW1lOiBcIk1hcnNoYWxsZXNlXCIsIHZhbHVlOiBcIm1oXCIgfSxcclxuICB7IG5hbWU6IFwiTcSBb3JpXCIsIHZhbHVlOiBcIm1pXCIgfSxcclxuICB7IG5hbWU6IFwiTWFjZWRvbmlhblwiLCB2YWx1ZTogXCJta1wiIH0sXHJcbiAgeyBuYW1lOiBcIk1hbGF5YWxhbVwiLCB2YWx1ZTogXCJtbFwiIH0sXHJcbiAgeyBuYW1lOiBcIk1vbmdvbGlhblwiLCB2YWx1ZTogXCJtblwiIH0sXHJcbiAgeyBuYW1lOiBcIk1vbGRhdmlhblwiLCB2YWx1ZTogXCJtb1wiIH0sXHJcbiAgeyBuYW1lOiBcIk1hcmF0aGlcIiwgdmFsdWU6IFwibXJcIiB9LFxyXG4gIHsgbmFtZTogXCJNYWxheVwiLCB2YWx1ZTogXCJtc1wiIH0sXHJcbiAgeyBuYW1lOiBcIk1hbHRlc2VcIiwgdmFsdWU6IFwibXRcIiB9LFxyXG4gIHsgbmFtZTogXCJCdXJtZXNlXCIsIHZhbHVlOiBcIm15XCIgfSxcclxuICB7IG5hbWU6IFwiTmF1cnVcIiwgdmFsdWU6IFwibmFcIiB9LFxyXG4gIHsgbmFtZTogXCJOb3J3ZWdpYW4gQm9rbcOlbFwiLCB2YWx1ZTogXCJuYlwiIH0sXHJcbiAgeyBuYW1lOiBcIk5vcnRoIE5kZWJlbGVcIiwgdmFsdWU6IFwibmRcIiB9LFxyXG4gIHsgbmFtZTogXCJOZXBhbGlcIiwgdmFsdWU6IFwibmVcIiB9LFxyXG4gIHsgbmFtZTogXCJOZG9uZ2FcIiwgdmFsdWU6IFwibmdcIiB9LFxyXG4gIHsgbmFtZTogXCJEdXRjaFwiLCB2YWx1ZTogXCJubFwiIH0sXHJcbiAgeyBuYW1lOiBcIk5vcndlZ2lhbiBOeW5vcnNrXCIsIHZhbHVlOiBcIm5uXCIgfSxcclxuICB7IG5hbWU6IFwiTm9yd2VnaWFuXCIsIHZhbHVlOiBcIm5vXCIgfSxcclxuICB7IG5hbWU6IFwiU291dGggTmRlYmVsZVwiLCB2YWx1ZTogXCJuclwiIH0sXHJcbiAgeyBuYW1lOiBcIk5hdmFqb1wiLCB2YWx1ZTogXCJudlwiIH0sXHJcbiAgeyBuYW1lOiBcIkNoaWNoZXdhXCIsIHZhbHVlOiBcIm55XCIgfSxcclxuICB7IG5hbWU6IFwiT2NjaXRhblwiLCB2YWx1ZTogXCJvY1wiIH0sXHJcbiAgeyBuYW1lOiBcIk9qaWJ3YVwiLCB2YWx1ZTogXCJvalwiIH0sXHJcbiAgeyBuYW1lOiBcIk9yb21vXCIsIHZhbHVlOiBcIm9tXCIgfSxcclxuICB7IG5hbWU6IFwiT3JpeWFcIiwgdmFsdWU6IFwib3JcIiB9LFxyXG4gIHsgbmFtZTogXCJPc3NldGlhblwiLCB2YWx1ZTogXCJvc1wiIH0sXHJcbiAgeyBuYW1lOiBcIlBhbmphYmlcIiwgdmFsdWU6IFwicGFcIiB9LFxyXG4gIHsgbmFtZTogXCJQxIFsaVwiLCB2YWx1ZTogXCJwaVwiIH0sXHJcbiAgeyBuYW1lOiBcIlBvbGlzaFwiLCB2YWx1ZTogXCJwbFwiIH0sXHJcbiAgeyBuYW1lOiBcIlBhc2h0b1wiLCB2YWx1ZTogXCJwc1wiIH0sXHJcbiAgeyBuYW1lOiBcIlBvcnR1Z3Vlc2VcIiwgdmFsdWU6IFwicHRcIiB9LFxyXG4gIHsgbmFtZTogXCJRdWVjaHVhXCIsIHZhbHVlOiBcInF1XCIgfSxcclxuICB7IG5hbWU6IFwiUmV1bmlvbmVzZVwiLCB2YWx1ZTogXCJyY1wiIH0sXHJcbiAgeyBuYW1lOiBcIlJvbWFuc2hcIiwgdmFsdWU6IFwicm1cIiB9LFxyXG4gIHsgbmFtZTogXCJLaXJ1bmRpXCIsIHZhbHVlOiBcInJuXCIgfSxcclxuICB7IG5hbWU6IFwiUm9tYW5pYW5cIiwgdmFsdWU6IFwicm9cIiB9LFxyXG4gIHsgbmFtZTogXCJSdXNzaWFuXCIsIHZhbHVlOiBcInJ1XCIgfSxcclxuICB7IG5hbWU6IFwiS2lueWFyd2FuZGFcIiwgdmFsdWU6IFwicndcIiB9LFxyXG4gIHsgbmFtZTogXCJTYW5za3JpdFwiLCB2YWx1ZTogXCJzYVwiIH0sXHJcbiAgeyBuYW1lOiBcIlNhcmRpbmlhblwiLCB2YWx1ZTogXCJzY1wiIH0sXHJcbiAgeyBuYW1lOiBcIlNpbmRoaVwiLCB2YWx1ZTogXCJzZFwiIH0sXHJcbiAgeyBuYW1lOiBcIk5vcnRoZXJuIFNhbWlcIiwgdmFsdWU6IFwic2VcIiB9LFxyXG4gIHsgbmFtZTogXCJTYW5nb1wiLCB2YWx1ZTogXCJzZ1wiIH0sXHJcbiAgeyBuYW1lOiBcIlNlcmJvLUNyb2F0aWFuXCIsIHZhbHVlOiBcInNoXCIgfSxcclxuICB7IG5hbWU6IFwiU2luaGFsZXNlXCIsIHZhbHVlOiBcInNpXCIgfSxcclxuICB7IG5hbWU6IFwiU2xvdmFrXCIsIHZhbHVlOiBcInNrXCIgfSxcclxuICB7IG5hbWU6IFwiU2xvdmVuaWFuXCIsIHZhbHVlOiBcInNsXCIgfSxcclxuICB7IG5hbWU6IFwiU2Ftb2FuXCIsIHZhbHVlOiBcInNtXCIgfSxcclxuICB7IG5hbWU6IFwiU2hvbmFcIiwgdmFsdWU6IFwic25cIiB9LFxyXG4gIHsgbmFtZTogXCJTb21hbGlcIiwgdmFsdWU6IFwic29cIiB9LFxyXG4gIHsgbmFtZTogXCJBbGJhbmlhblwiLCB2YWx1ZTogXCJzcVwiIH0sXHJcbiAgeyBuYW1lOiBcIlNlcmJpYW5cIiwgdmFsdWU6IFwic3JcIiB9LFxyXG4gIHsgbmFtZTogXCJTd2F0aVwiLCB2YWx1ZTogXCJzc1wiIH0sXHJcbiAgeyBuYW1lOiBcIlNvdGhvXCIsIHZhbHVlOiBcInN0XCIgfSxcclxuICB7IG5hbWU6IFwiU3VuZGFuZXNlXCIsIHZhbHVlOiBcInN1XCIgfSxcclxuICB7IG5hbWU6IFwiU3dlZGlzaFwiLCB2YWx1ZTogXCJzdlwiIH0sXHJcbiAgeyBuYW1lOiBcIlN3YWhpbGlcIiwgdmFsdWU6IFwic3dcIiB9LFxyXG4gIHsgbmFtZTogXCJUYW1pbFwiLCB2YWx1ZTogXCJ0YVwiIH0sXHJcbiAgeyBuYW1lOiBcIlRlbHVndVwiLCB2YWx1ZTogXCJ0ZVwiIH0sXHJcbiAgeyBuYW1lOiBcIlRhamlrXCIsIHZhbHVlOiBcInRnXCIgfSxcclxuICB7IG5hbWU6IFwiVGhhaVwiLCB2YWx1ZTogXCJ0aFwiIH0sXHJcbiAgeyBuYW1lOiBcIlRpZ3JpbnlhXCIsIHZhbHVlOiBcInRpXCIgfSxcclxuICB7IG5hbWU6IFwiVHVya21lblwiLCB2YWx1ZTogXCJ0a1wiIH0sXHJcbiAgeyBuYW1lOiBcIlRhZ2Fsb2dcIiwgdmFsdWU6IFwidGxcIiB9LFxyXG4gIHsgbmFtZTogXCJUc3dhbmFcIiwgdmFsdWU6IFwidG5cIiB9LFxyXG4gIHsgbmFtZTogXCJUb25nYVwiLCB2YWx1ZTogXCJ0b1wiIH0sXHJcbiAgeyBuYW1lOiBcIlR1cmtpc2hcIiwgdmFsdWU6IFwidHJcIiB9LFxyXG4gIHsgbmFtZTogXCJUc29uZ2FcIiwgdmFsdWU6IFwidHNcIiB9LFxyXG4gIHsgbmFtZTogXCJUYXRhclwiLCB2YWx1ZTogXCJ0dFwiIH0sXHJcbiAgeyBuYW1lOiBcIlR3aVwiLCB2YWx1ZTogXCJ0d1wiIH0sXHJcbiAgeyBuYW1lOiBcIlRhaGl0aWFuXCIsIHZhbHVlOiBcInR5XCIgfSxcclxuICB7IG5hbWU6IFwiVWlnaHVyXCIsIHZhbHVlOiBcInVnXCIgfSxcclxuICB7IG5hbWU6IFwiVWtyYWluaWFuXCIsIHZhbHVlOiBcInVrXCIgfSxcclxuICB7IG5hbWU6IFwiVXJkdVwiLCB2YWx1ZTogXCJ1clwiIH0sXHJcbiAgeyBuYW1lOiBcIlV6YmVrXCIsIHZhbHVlOiBcInV6XCIgfSxcclxuICB7IG5hbWU6IFwiVmVuZGFcIiwgdmFsdWU6IFwidmVcIiB9LFxyXG4gIHsgbmFtZTogXCJWacOqdCBOYW1lc2VcIiwgdmFsdWU6IFwidmlcIiB9LFxyXG4gIHsgbmFtZTogXCJWb2xhcMO8a1wiLCB2YWx1ZTogXCJ2b1wiIH0sXHJcbiAgeyBuYW1lOiBcIldhbGxvb25cIiwgdmFsdWU6IFwid2FcIiB9LFxyXG4gIHsgbmFtZTogXCJXb2xvZlwiLCB2YWx1ZTogXCJ3b1wiIH0sXHJcbiAgeyBuYW1lOiBcIlhob3NhXCIsIHZhbHVlOiBcInhoXCIgfSxcclxuICB7IG5hbWU6IFwiWWlkZGlzaFwiLCB2YWx1ZTogXCJ5aVwiIH0sXHJcbiAgeyBuYW1lOiBcIllvcnViYVwiLCB2YWx1ZTogXCJ5b1wiIH0sXHJcbiAgeyBuYW1lOiBcIlpodWFuZ1wiLCB2YWx1ZTogXCJ6YVwiIH0sXHJcbiAgeyBuYW1lOiBcIkNoaW5lc2VcIiwgdmFsdWU6IFwiemhcIiB9LFxyXG4gIHsgbmFtZTogXCJadWx1XCIsIHZhbHVlOiBcInp1XCIgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBTVEFUVVMgPSBbXHJcbiAgeyBuYW1lOiBcIkluIFByb2dyZXNzXCIsIHZhbHVlOiBcImluIHByb2dyZXNzXCIgfSxcclxuICB7IG5hbWU6IFwiSW4gSGlhdHVzXCIsIHZhbHVlOiBcImluIGhpYXR1c1wiIH0sXHJcbiAgeyBuYW1lOiBcIkNvbXBsZXRlZFwiLCB2YWx1ZTogXCJjb21wbGV0ZWRcIiB9LFxyXG5dO1xyXG5cclxuLy8gVFlQRVNcclxuZXhwb3J0IGNvbnN0IHR5cGVzID0ge1xyXG4gIEdFVF9QUk9GSUxFOiBcIkdFVF9QUk9GSUxFXCIsXHJcbiAgTE9HSU46IFwiTE9HSU5cIixcclxuICBSRUdJU1RFUjogXCJSRUdJU1RFUlwiLFxyXG4gIEdFVF9TVE9SWTogXCJHRVRfU1RPUllcIixcclxuICBHRVRfVVNFUl9TVE9SSUVTOiBcIkdFVF9VU0VSX1NUT1JJRVNcIixcclxuICBHRVRfRkFWT1JJVEVfU1RPUklFUzogXCJHRVRfRkFWT1JJVEVfU1RPUklFU1wiLFxyXG4gIEFERF9TVE9SWTogXCJBRERfU1RPUllcIixcclxuICBFRElUX1NUT1JZOiBcIkVESVRfU1RPUllcIixcclxuICBERUxFVEVfU1RPUlk6IFwiREVMRVRFX1NUT1JZXCIsXHJcbiAgSVNfU1RPUllfRkFWT1JJVEU6IFwiSVNfU1RPUllfRkFWT1JJVEVcIixcclxuICBHRVRfQ0hBUFRFUjogXCJHRVRfQ0hBUFRFUlwiLFxyXG4gIEFERF9DSEFQVEVSOiBcIkFERF9DSEFQVEVSXCIsXHJcbiAgRURJVF9DSEFQVEVSOiBcIkVESVRfQ0hBUFRFUlwiLFxyXG4gIERFTEVURV9DSEFQVEVSOiBcIkRFTEVURV9DSEFQVEVSXCIsXHJcbiAgR0VUX0NIQVBURVJTOiBcIkdFVF9DSEFQVEVSU1wiLFxyXG4gIEFERF9DSEFSQUNURVI6IFwiQUREX0NIQVJBQ1RFUlwiLFxyXG4gIEdFVF9DSEFSQUNURVI6IFwiR0VUX0NIQVJBQ1RFUlwiLFxyXG4gIEVESVRfQ0hBUkFDVEVSOiBcIkVESVRfQ0hBUkFDVEVSXCIsXHJcbiAgREVMRVRFX0NIQVJBQ1RFUjogXCJERUxFVEVfQ0hBUkFDVEVSXCIsXHJcbiAgR0VUX1VTRVJfQ0hBUkFDVEVSUzogXCJHRVRfVVNFUl9DSEFSQUNURVJTXCIsXHJcbiAgR0VUX1VTRVJfTE9DQVRJT05TOiBcIkdFVF9VU0VSX0xPQ0FUSU9OU1wiLFxyXG4gIEdFVF9GQVZPUklURV9DSEFSQUNURVJTOiBcIkdFVF9GQVZPUklURV9DSEFSQUNURVJTXCIsXHJcbiAgR0VUX1NUT1JZX0NIQVJBQ1RFUlM6IFwiR0VUX1NUT1JZX0NIQVJBQ1RFUlNcIixcclxuICBBRERfTE9DQVRJT046IFwiQUREX0xPQ0FUSU9OXCIsXHJcbiAgR0VUX0xPQ0FUSU9OOiBcIkdFVF9MT0NBVElPTlwiLFxyXG4gIEVESVRfTE9DQVRJT046IFwiRURJVF9MT0NBVElPTlwiLFxyXG4gIEdFVF9DT01NRU5UUzogXCJHRVRfQ09NTUVOVFNcIixcclxuICBHRVRfRkFWT1JJVEVfQVVUSE9SUzogXCJHRVRfRkFWT1JJVEVfQVVUSE9SU1wiLFxyXG4gIEdFVF9TVE9SWV9MT0NBVElPTlM6IFwiR0VUX1NUT1JZX0xPQ0FUSU9OU1wiLFxyXG4gIEdFVF9GT0xMT1dFUlM6IFwiR0VUX0ZPTExPV0VSU1wiLFxyXG4gIERJU1BBVENIX0VSUk9SOiBcIkRJU1BBVENIX0VSUk9SXCIsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX1BST0ZJTEUgPSBcIkdFVF9QUk9GSUxFXCI7XHJcbmV4cG9ydCBjb25zdCBMT0dJTiA9IFwiTE9HSU5cIjtcclxuZXhwb3J0IGNvbnN0IFJFR0lTVEVSID0gXCJSRUdJU1RFUlwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9TVE9SWSA9IFwiR0VUX1NUT1JZXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfVVNFUl9TVE9SSUVTID0gXCJHRVRfVVNFUl9TVE9SSUVTXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfRkFWT1JJVEVfU1RPUklFUyA9IFwiR0VUX0ZBVk9SSVRFX1NUT1JJRVNcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9TVE9SWSA9IFwiQUREX1NUT1JZXCI7XHJcbmV4cG9ydCBjb25zdCBFRElUX1NUT1JZID0gXCJFRElUX1NUT1JZXCI7XHJcbmV4cG9ydCBjb25zdCBERUxFVEVfU1RPUlkgPSBcIkRFTEVURV9TVE9SWVwiO1xyXG5leHBvcnQgY29uc3QgSVNfU1RPUllfRkFWT1JJVEUgPSBcIklTX1NUT1JZX0ZBVk9SSVRFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX0NIQVBURVIgPSBcIkdFVF9DSEFQVEVSXCI7XHJcbmV4cG9ydCBjb25zdCBBRERfQ0hBUFRFUiA9IFwiQUREX0NIQVBURVJcIjtcclxuZXhwb3J0IGNvbnN0IEVESVRfQ0hBUFRFUiA9IFwiRURJVF9DSEFQVEVSXCI7XHJcbmV4cG9ydCBjb25zdCBERUxFVEVfQ0hBUFRFUiA9IFwiREVMRVRFX0NIQVBURVJcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9DSEFQVEVSUyA9IFwiR0VUX0NIQVBURVJTXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX0NIQVJBQ1RFUiA9IFwiQUREX0NIQVJBQ1RFUlwiO1xyXG5leHBvcnQgY29uc3QgR0VUX0NIQVJBQ1RFUiA9IFwiR0VUX0NIQVJBQ1RFUlwiO1xyXG5leHBvcnQgY29uc3QgRURJVF9DSEFSQUNURVIgPSBcIkVESVRfQ0hBUkFDVEVSXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfVVNFUl9DSEFSQUNURVJTID0gXCJHRVRfVVNFUl9DSEFSQUNURVJTXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfVVNFUl9MT0NBVElPTlMgPSBcIkdFVF9VU0VSX0xPQ0FUSU9OU1wiO1xyXG5leHBvcnQgY29uc3QgR0VUX0ZBVk9SSVRFX0NIQVJBQ1RFUlMgPSBcIkdFVF9GQVZPUklURV9DSEFSQUNURVJTXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfU1RPUllfQ0hBUkFDVEVSUyA9IFwiR0VUX1NUT1JZX0NIQVJBQ1RFUlNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfTE9DQVRJT04gPSBcIkFERF9MT0NBVElPTlwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9GQVZPUklURV9BVVRIT1JTID0gXCJHRVRfRkFWT1JJVEVfQVVUSE9SU1wiO1xyXG5leHBvcnQgY29uc3QgR0VUX0ZPTExPV0VSUyA9IFwiR0VUX0ZPTExPV0VSU1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IERJU1BBVENIX0VSUk9SID0gXCJESVNQQVRDSF9FUlJPUlwiO1xyXG4iLCJleHBvcnQgY29uc3QgZHVtbXkgPSB7XHJcbiAgcGVyc29uOlxyXG4gICAgXCJodHRwczovL2kucGluaW1nLmNvbS81NjR4LzcwLzUwL2EzLzcwNTBhMzBjYzYxZThhN2YzZjg2NzdlYmY5NTA1ZGI3LmpwZ1wiLFxyXG4gIGNvdmVyOlxyXG4gICAgXCJodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy8zODgxMTA0L3BleGVscy1waG90by0zODgxMTA0LmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZkcHI9MiZoPTY1MCZ3PTk0MFwiLFxyXG4gIG5hbWU6IFwiQWlzaHdhcnlhIFJhaVwiLFxyXG4gIHBvc3RlcjogXCJodHRwczovL2ltYWdlcy1uYS5zc2wtaW1hZ2VzLWFtYXpvbi5jb20vaW1hZ2VzL0kvODFoMmdXUFRZSkwuanBnXCIsXHJcbiAgYXZhdGFyOiBcImh0dHBzOi8vYmlwLmNucnMuZnIvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMTEvdXNlci5qcGdcIixcclxuICBub0ltYWdlOiBcImh0dHBzOi8vaS5zdGFjay5pbWd1ci5jb20veTlEcFQuanBnXCIsXHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvYXBwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2F1dGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvZmlyZXN0b3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL3N0b3JhZ2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaXMtaW1hZ2UtdXJsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=