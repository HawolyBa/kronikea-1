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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/character/[id]/edit.js");
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

/***/ "./pages/character/[id]/edit.js":
/*!**************************************!*\
  !*** ./pages/character/[id]/edit.js ***!
  \**************************************/
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
/* harmony import */ var _hooks_userHooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../hooks/userHooks */ "./hooks/userHooks.js");
/* harmony import */ var _redux_actions_charactersActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../redux/actions/charactersActions */ "./redux/actions/charactersActions.js");
/* harmony import */ var _components_hoc_LoadingScreen__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/hoc/LoadingScreen */ "./components/hoc/LoadingScreen.js");
/* harmony import */ var _components_hoc_RedirectComp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/hoc/RedirectComp */ "./components/hoc/RedirectComp.js");
/* harmony import */ var _components_forms_CharacterForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/forms/CharacterForm */ "./components/forms/CharacterForm.js");
var _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\pages\\character\\[id]\\edit.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const EditCharacter = props => {
  const {
    character,
    characters,
    loadingCharacter,
    loading,
    charaExists,
    editMessage,
    deleted
  } = props;
  const auth = Object(_hooks_userHooks__WEBPACK_IMPORTED_MODULE_4__["useAuth"])();
  const [form] = antd__WEBPACK_IMPORTED_MODULE_2__["Form"].useForm();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const [visibility, setVisibility] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(true);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    if (auth.user) {
      props.getCharacter(router.query.id);
      props.getUserCharacters(auth.user.uid);
    }
  }, [auth]);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    if (deleted) {
      router.push("/profile");
    }
  }, [deleted]);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    if (editMessage) {
      antd__WEBPACK_IMPORTED_MODULE_2__["message"].success(editMessage);
    }
  }, [editMessage]);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    form.setFieldsValue({
      public: visibility
    });
  }, [visibility]);

  const onFailed = () => {
    window.scrollTo(0, 0);
    antd__WEBPACK_IMPORTED_MODULE_2__["message"].error("There are some errors");
  };

  const submit = values => {
    console.log(values);
    props.editCharacter(_objectSpread({}, values), router.query.id);
  };

  return __jsx(_components_hoc_LoadingScreen__WEBPACK_IMPORTED_MODULE_6__["default"], {
    loading: loading,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 5
    }
  }, __jsx(_components_hoc_RedirectComp__WEBPACK_IMPORTED_MODULE_7__["default"], {
    type: "404",
    condition: charaExists,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }, __jsx(_components_hoc_RedirectComp__WEBPACK_IMPORTED_MODULE_7__["default"], {
    type: "403",
    condition: auth.user && auth.user.uid === character.authorId,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "custom-form new-character",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "inner",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  }, __jsx("h2", {
    className: "side-heading",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 15
    }
  }, "Edit character:", ` ${character.firstname} ${character.lastname && character.lastname}`), __jsx(_components_forms_CharacterForm__WEBPACK_IMPORTED_MODULE_8__["default"], {
    submit: submit,
    onFailed: onFailed,
    form: form,
    character: character,
    characters: characters.filter(c => c.id !== character.id),
    visibility: visibility,
    setVisibility: setVisibility,
    loadingCharacter: loadingCharacter,
    type: "edit",
    initialValues: {
      firstname: character.firstname,
      lastname: character.lastname || "",
      age: character.age || 0,
      gender: character.gender || "",
      public: character.public,
      ethnicity: character.ethnicity || "",
      group: character.group || "",
      residence: character.residence || "",
      description: character.description || "",
      nickname: character.nickname || "",
      occupation: character.occupation || "",
      relatives: character.relatives || [],
      image: character.image || "",
      imageCopyright: character.imageCopyright || ""
    },
    deleteCharacter: props.deleteCharacter,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 15
    }
  }))))));
};

const mapStateToProps = state => ({
  character: state.characters.character,
  characters: state.characters.userCharacters,
  loading: state.characters.loading,
  loadingCharacter: state.characters.loadingCharacter,
  characterId: state.characters.characterId,
  charaExists: state.characters.charaExists,
  editMessage: state.characters.message,
  deleted: state.characters.deleted
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, {
  getCharacter: _redux_actions_charactersActions__WEBPACK_IMPORTED_MODULE_5__["getCharacter"],
  editCharacter: _redux_actions_charactersActions__WEBPACK_IMPORTED_MODULE_5__["editCharacter"],
  getUserCharacters: _redux_actions_charactersActions__WEBPACK_IMPORTED_MODULE_5__["getUserCharacters"],
  deleteCharacter: _redux_actions_charactersActions__WEBPACK_IMPORTED_MODULE_5__["deleteCharacter"]
})(EditCharacter));

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
    if (_fbConfig__WEBPACK_IMPORTED_MODULE_2__["storage"].ref(`${_fbConfig__WEBPACK_IMPORTED_MODULE_2__["auth"].currentUser.uid}/${imageName}`)) {
      return _fbConfig__WEBPACK_IMPORTED_MODULE_2__["storage"].ref(`${_fbConfig__WEBPACK_IMPORTED_MODULE_2__["auth"].currentUser.uid}/${imageName}`).delete();
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb21tb24vQ2hhcmFjdGVyQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvcm1zL0NoYXJhY3RlckZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mb3Jtcy9JbWFnZVJvdy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvcm1zL1JhZGlvQnV0dG9uLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZm9ybXMvUmVsYXRpdmVzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZm9ybXMvVXBsb2FkSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9ob2MvTG9hZGluZ1NjcmVlbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hvYy9SZWRpcmVjdENvbXAuanMiLCJ3ZWJwYWNrOi8vLy4vaG9va3MvdXNlckhvb2tzLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2NoYXJhY3Rlci8vZWRpdC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25zL2NoYXJhY3RlcnNBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3JlZHV4L2ZiQ29uZmlnLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9kdW1teS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW50LWRlc2lnbi9pY29uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9hcHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9hdXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2Uvc3RvcmFnZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImlzLWltYWdlLXVybFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIl0sIm5hbWVzIjpbIkNoYXJhY3RlckNhcmQiLCJjaGFyYWN0ZXIiLCJ0eXBlIiwicmVtb3ZlQ2hhcmFjdGVyIiwiaWQiLCJpbWFnZSIsImR1bW15Iiwibm9JbWFnZSIsImZpcnN0bmFtZSIsImxhc3RuYW1lIiwiYXV0aG9yTmFtZSIsInJlbGF0aW9uIiwiQ2hhcmFjdGVyRm9ybSIsImZvcm0iLCJjaGFyYWN0ZXJzIiwic3VibWl0Iiwib25GYWlsZWQiLCJ2aXNpYmlsaXR5Iiwic2V0VmlzaWJpbGl0eSIsImxvYWRpbmdDaGFyYWN0ZXIiLCJpbml0aWFsVmFsdWVzIiwiZGVsZXRlQ2hhcmFjdGVyIiwicmVxdWlyZWQiLCJtZXNzYWdlIiwibWF4IiwibWluUm93cyIsIkltYWdlUm93IiwiaXRlbUltYWdlIiwibmFtZSIsImxpbmtWaXNpYmxlIiwic2V0TGlua1Zpc2libGUiLCJSZWFjdCIsInVzZVN0YXRlIiwidXBsb2FkVmlzaWJsZSIsInNldFVwbG9hZFZpc2libGUiLCJzaG93TGluayIsInNldEZpZWxkc1ZhbHVlIiwic2hvd1VwbG9hZCIsInZhbGlkYXRvciIsIl8iLCJ2YWx1ZSIsImlzSW1hZ2VVcmwiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIkVycm9yIiwiUmFkaW9CdXRvbiIsImxnIiwic20iLCJ4cyIsIm1kIiwibGFiZWwiLCJudW0xIiwibnVtMiIsImxhYmVsMSIsImxhYmVsMiIsInNldEZ1bmMiLCJ2YWwiLCJPcHRpb24iLCJTZWxlY3QiLCJSZWxhdGl2ZXMiLCJyZWxhdGlvbnMiLCJzZXRSZWxhdGlvbnMiLCJyZWxhdGl2ZXMiLCJjdXJyZW50Q2hhciIsInNldEN1cnJlbnRDaGFyIiwiY3VycmVudFJlbCIsInNldEN1cnJlbnRSZWwiLCJzZWxlY3RlZENoYXJhY3RlcnMiLCJzZXRTZWxlY3RlZENoYXJhY3RlcnMiLCJzZWxlY3RlZEFyciIsInNldFNlbGVjdGVkQXJyIiwibWFwIiwiYyIsImNoYXJhY3Rlcl9pZCIsInNob3dFcnJvclJlbCIsInNldFNob3dFcnJvclJlbCIsInNob3dFcnJvckNoYXIiLCJzZXRTaG93RXJyb3JDaGFyIiwiYWRkUmVsYXRpb24iLCJuZXdSZWxhdGlvbnMiLCJmaW5kIiwidXNlRWZmZWN0IiwibGVuZ3RoIiwiY2hhciIsImZpbHRlciIsImluY2x1ZGVzIiwiZSIsInRhcmdldCIsInJlbCIsImdldEJhc2U2NCIsImltZyIsImNhbGxiYWNrIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZXN1bHQiLCJyZWFkQXNEYXRhVVJMIiwiYmVmb3JlVXBsb2FkIiwiZmlsZSIsImlzSnBnT3JQbmciLCJlcnJvciIsImlzTHQyTSIsInNpemUiLCJVcGxvYWRJbWFnZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiaW1hZ2VVcmwiLCJzZXRJbWFnZVVybCIsImhhbmRsZUNoYW5nZSIsImluZm8iLCJzdGF0dXMiLCJvcmlnaW5GaWxlT2JqIiwidXBsb2FkQnV0dG9uIiwibWFyZ2luVG9wIiwic2hvd1JlbW92ZUljb24iLCJyZW1vdmVJY29uIiwid2lkdGgiLCJoZWlnaHQiLCJvYmplY3RGaXQiLCJnZXRGaWVsZFZhbHVlIiwiTG9hZGluZ1NjcmVlbiIsImNoaWxkcmVuIiwiUmVkaXJlY3RDb21wIiwiY29uZGl0aW9uIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiYXV0aENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiUHJvdmlkZUF1dGgiLCJhdXRoIiwidXNlUHJvdmlkZUF1dGgiLCJ1c2VBdXRoIiwidXNlQ29udGV4dCIsInVzZXIiLCJzZXRVc2VyIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwic2lnbmluIiwiZW1haWwiLCJwYXNzd29yZCIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwidGhlbiIsInJlc3BvbnNlIiwic2lnbnVwIiwidXNlcm5hbWUiLCJjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJkYiIsImNvbGxlY3Rpb24iLCJhZGQiLCJiYWRnZXMiLCJiaW9ncmFwaHkiLCJjcmVhdGVkQXQiLCJmaXJlYmFzZSIsImZpcmVzdG9yZSIsIkZpZWxkVmFsdWUiLCJzZXJ2ZXJUaW1lc3RhbXAiLCJzdXNwZW5kZWQiLCJmYWNlYm9vayIsImluc3RhZ3JhbSIsInR3aXR0ZXIiLCJkZXZpYW50YXJ0IiwibGlrZXNDb3VudCIsInNpZ25vdXQiLCJzaWduT3V0Iiwic2VuZFBhc3N3b3JkUmVzZXRFbWFpbCIsImNvbmZpcm1QYXNzd29yZFJlc2V0IiwiY29kZSIsInVuc3Vic2NyaWJlIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwidWlkIiwiZG9jIiwib25TbmFwc2hvdCIsImRhdGEiLCJFZGl0Q2hhcmFjdGVyIiwicHJvcHMiLCJjaGFyYUV4aXN0cyIsImVkaXRNZXNzYWdlIiwiZGVsZXRlZCIsIkZvcm0iLCJ1c2VGb3JtIiwicm91dGVyIiwidXNlUm91dGVyIiwiZ2V0Q2hhcmFjdGVyIiwicXVlcnkiLCJnZXRVc2VyQ2hhcmFjdGVycyIsInB1c2giLCJzdWNjZXNzIiwicHVibGljIiwic2Nyb2xsVG8iLCJ2YWx1ZXMiLCJjb25zb2xlIiwibG9nIiwiZWRpdENoYXJhY3RlciIsImF1dGhvcklkIiwiYWdlIiwiZ2VuZGVyIiwiZXRobmljaXR5IiwiZ3JvdXAiLCJyZXNpZGVuY2UiLCJkZXNjcmlwdGlvbiIsIm5pY2tuYW1lIiwib2NjdXBhdGlvbiIsImltYWdlQ29weXJpZ2h0IiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJ1c2VyQ2hhcmFjdGVycyIsImNoYXJhY3RlcklkIiwiY29ubmVjdCIsImRpc3BhdGNoIiwiZ2V0IiwiZXhpc3RzIiwidHlwZXMiLCJHRVRfQ0hBUkFDVEVSIiwicGF5bG9hZCIsImFkZENoYXJhY3RlciIsIkFERF9DSEFSQUNURVIiLCJjaGFyYUlkIiwibGlrZXMiLCJkaXNsaWtlcyIsInJlcyIsImltYWdlTmFtZSIsInRvTG93ZXJDYXNlIiwic3RvcmFnZSIsInJlZiIsImN1cnJlbnRVc2VyIiwicHV0IiwiY2hpbGQiLCJnZXREb3dubG9hZFVSTCIsInVybCIsInVwZGF0ZSIsImNhdGNoIiwiZXJyIiwiRURJVF9DSEFSQUNURVIiLCJyZWxhdGl2ZXNBcnIiLCJERUxFVEVfQ0hBUkFDVEVSIiwiYmF0Y2giLCJkZWxldGUiLCJ3aGVyZSIsImRvY3MiLCJmb3JFYWNoIiwic3RvcmllcyIsInN0b3J5IiwibWFpbkNoYXJhY3RlcnMiLCJzZWNvbmRhcnlBcnIiLCJzZWNvbmRhcnlDaGFyYWN0ZXJzIiwibGlrZSIsImNvbW1pdCIsInVzZXJJZCIsIml0ZW1zIiwiR0VUX1VTRVJfQ0hBUkFDVEVSUyIsImdldEZhdm9yaXRlQ2hhcmFjdGVycyIsImZhdkFyciIsInVzZXJzIiwiYWxsIiwiZmF2VXNlcnMiLCJHRVRfRkFWT1JJVEVfQ0hBUkFDVEVSUyIsImdldENoYXJhY3RlcnNJblN0b3J5IiwiR0VUX1NUT1JZX0NIQVJBQ1RFUlMiLCJtYWluQXJyIiwicHJvZENvbmZpZyIsImFwaUtleSIsInByb2Nlc3MiLCJhdXRoRG9tYWluIiwiZGF0YWJhc2VVUkwiLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIkZJUkVCQVNFX0FQUF9JRCIsImRldkNvbmZpZyIsImNvbmZpZyIsImFwcHMiLCJpbml0aWFsaXplQXBwIiwiQ0FURUdPUklFUyIsIkNPUFlSSUdIVFMiLCJMQU5HVUFHRVMiLCJTVEFUVVMiLCJHRVRfUFJPRklMRSIsIkxPR0lOIiwiUkVHSVNURVIiLCJHRVRfU1RPUlkiLCJHRVRfVVNFUl9TVE9SSUVTIiwiR0VUX0ZBVk9SSVRFX1NUT1JJRVMiLCJBRERfU1RPUlkiLCJFRElUX1NUT1JZIiwiREVMRVRFX1NUT1JZIiwiSVNfU1RPUllfRkFWT1JJVEUiLCJHRVRfQ0hBUFRFUiIsIkFERF9DSEFQVEVSIiwiRURJVF9DSEFQVEVSIiwiREVMRVRFX0NIQVBURVIiLCJHRVRfQ0hBUFRFUlMiLCJHRVRfVVNFUl9MT0NBVElPTlMiLCJBRERfTE9DQVRJT04iLCJHRVRfTE9DQVRJT04iLCJFRElUX0xPQ0FUSU9OIiwiR0VUX0NPTU1FTlRTIiwiR0VUX0ZBVk9SSVRFX0FVVEhPUlMiLCJHRVRfU1RPUllfTE9DQVRJT05TIiwiR0VUX0ZPTExPV0VSUyIsIkRJU1BBVENIX0VSUk9SIiwicGVyc29uIiwiY292ZXIiLCJwb3N0ZXIiLCJhdmF0YXIiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFFQTs7QUFFQSxNQUFNQSxhQUFhLEdBQUcsQ0FBQztBQUFFQyxXQUFGO0FBQWFDLE1BQWI7QUFBbUJDO0FBQW5CLENBQUQsS0FBMEM7QUFDOUQsU0FDRTtBQUNFLGFB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QTFCO0FBRUEsTUFBTUMsV0FBVyxHQUFHLGFBQXBCO0FBQ0EsTUFBTUMsV0FBVyxHQUFHLGFBQXBCO0FBQ0EsTUFBTUMsWUFBWSxHQUFHLGNBQXJCO0FBQ0EsTUFBTUMsY0FBYyxHQUFHLGdCQUF2QjtBQUNBLE1BQU1DLFlBQVksR0FBRyxjQUFyQjtBQUVBLE1BQU01RSxhQUFhLEdBQUcsZUFBdEI7QUFDQSxNQUFNSCxhQUFhLEdBQUcsZUFBdEI7QUFDQSxNQUFNb0IsY0FBYyxHQUFHLGdCQUF2QjtBQUNBLE1BQU1pQixtQkFBbUIsR0FBRyxxQkFBNUI7QUFDQSxNQUFNMkMsa0JBQWtCLEdBQUcsb0JBQTNCO0FBQ0EsTUFBTXJDLHVCQUF1QixHQUFHLHlCQUFoQztBQUNBLE1BQU1FLG9CQUFvQixHQUFHLHNCQUE3QjtBQUVBLE1BQU1vQyxZQUFZLEdBQUcsY0FBckI7QUFFQSxNQUFNSSxvQkFBb0IsR0FBRyxzQkFBN0I7QUFDQSxNQUFNRSxhQUFhLEdBQUcsZUFBdEI7QUFFQSxNQUFNQyxjQUFjLEdBQUcsZ0JBQXZCLEM7Ozs7Ozs7Ozs7OztBQy9SUDtBQUFBO0FBQU8sTUFBTXhTLEtBQUssR0FBRztBQUNuQnlTLFFBQU0sRUFDSix5RUFGaUI7QUFHbkJDLE9BQUssRUFDSCxnSEFKaUI7QUFLbkJwUixNQUFJLEVBQUUsZUFMYTtBQU1uQnFSLFFBQU0sRUFBRSxrRUFOVztBQU9uQkMsUUFBTSxFQUFFLHlEQVBXO0FBUW5CM1MsU0FBTyxFQUFFO0FBUlUsQ0FBZCxDOzs7Ozs7Ozs7OztBQ0FQLDhDOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDIiwiZmlsZSI6InBhZ2VzL2NoYXJhY3Rlci9baWRdL2VkaXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2NoYXJhY3Rlci9baWRdL2VkaXQuanNcIik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgeyBkdW1teSB9IGZyb20gXCIuLi8uLi91dGlscy9kdW1teVwiO1xyXG5cclxuY29uc3QgQ2hhcmFjdGVyQ2FyZCA9ICh7IGNoYXJhY3RlciwgdHlwZSwgcmVtb3ZlQ2hhcmFjdGVyIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGZpZ3VyZVxyXG4gICAgICBjbGFzc05hbWU9e2BjYXJkIGNoYXJhY3Rlci1jYXJkICR7dHlwZSA/IHR5cGUgOiBcIlwifWB9XHJcbiAgICAgIGRhdGEtYW9zPVwiem9vbS1pbi11cFwiXHJcbiAgICA+XHJcbiAgICAgIHt0eXBlID09PSBcImFkZFwiICYmIChcclxuICAgICAgICA8c3BhblxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gcmVtb3ZlQ2hhcmFjdGVyKGNoYXJhY3Rlci5pZCl9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJyZW1vdmUtYnRuXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICB4XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICApfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZy1jb250YWluZXJcIj5cclxuICAgICAgICA8aW1nIHNyYz17Y2hhcmFjdGVyPy5pbWFnZSA/IGNoYXJhY3Rlci5pbWFnZSA6IGR1bW15Lm5vSW1hZ2V9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZmlnY2FwdGlvbj5cclxuICAgICAgICA8aDM+e2Ake2NoYXJhY3Rlcj8uZmlyc3RuYW1lfSAke2NoYXJhY3Rlcj8ubGFzdG5hbWV9YH08L2gzPlxyXG4gICAgICAgIHt0eXBlID09PSBcImZhdm9yaXRlc1wiIHx8XHJcbiAgICAgICAgICAodHlwZSA9PT0gXCJzdG9yeVwiICYmIChcclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYXV0aG9yXCI+QXV0aG9yOiB7Y2hhcmFjdGVyPy5hdXRob3JOYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIHsodHlwZSA9PT0gXCJhZGRcIiB8fCB0eXBlID09PSBcInNob3dcIikgJiYgKFxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYXV0aG9yXCI+UmVsYXRpb246IHtjaGFyYWN0ZXI/LnJlbGF0aW9ufTwvc3Bhbj5cclxuICAgICAgICApfVxyXG4gICAgICA8L2ZpZ2NhcHRpb24+XHJcbiAgICA8L2ZpZ3VyZT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhcmFjdGVyQ2FyZDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIFJvdyxcclxuICBDb2wsXHJcbiAgRGl2aWRlcixcclxuICBGb3JtLFxyXG4gIElucHV0LFxyXG4gIElucHV0TnVtYmVyLFxyXG4gIFNwaW4sXHJcbiAgUG9wY29uZmlybSxcclxufSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuaW1wb3J0IFJlbGF0aXZlcyBmcm9tIFwiLi9SZWxhdGl2ZXNcIjtcclxuaW1wb3J0IEltYWdlUm93IGZyb20gXCIuL0ltYWdlUm93XCI7XHJcbmltcG9ydCBSYWRpb0J1dHRvbiBmcm9tIFwiLi9SYWRpb0J1dHRvblwiO1xyXG5cclxuY29uc3QgQ2hhcmFjdGVyRm9ybSA9ICh7XHJcbiAgZm9ybSxcclxuICBjaGFyYWN0ZXJzLFxyXG4gIGNoYXJhY3RlcixcclxuICBzdWJtaXQsXHJcbiAgb25GYWlsZWQsXHJcbiAgdmlzaWJpbGl0eSxcclxuICBzZXRWaXNpYmlsaXR5LFxyXG4gIHR5cGUsXHJcbiAgbG9hZGluZ0NoYXJhY3RlcixcclxuICBpbml0aWFsVmFsdWVzLFxyXG4gIGRlbGV0ZUNoYXJhY3RlcixcclxufSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybVxyXG4gICAgICBsYXlvdXQ9XCJ2ZXJ0aWNhbFwiXHJcbiAgICAgIHNjcm9sbFRvRmlyc3RFcnJvclxyXG4gICAgICBvbkZpbmlzaEZhaWxlZD17b25GYWlsZWR9XHJcbiAgICAgIG9uRmluaXNoPXtzdWJtaXR9XHJcbiAgICAgIGZvcm09e2Zvcm19XHJcbiAgICAgIGluaXRpYWxWYWx1ZXM9e2luaXRpYWxWYWx1ZXN9XHJcbiAgICA+XHJcbiAgICAgIDxJbWFnZVJvdyBuYW1lPVwiaW1hZ2VcIiBmb3JtPXtmb3JtfSBpdGVtSW1hZ2U9e2NoYXJhY3Rlcj8uaW1hZ2V9IC8+XHJcbiAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgIDxSb3cgYWxpZ249XCJib3R0b21cIiBndXR0ZXI9e1syNCwgMjRdfT5cclxuICAgICAgICA8Q29sIG1kPXs4fSB4cz17MjR9IHNtPXsyNH0+XHJcbiAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgIGxhYmVsPVwiRmlyc3RuYW1lXCJcclxuICAgICAgICAgICAgbmFtZT1cImZpcnN0bmFtZVwiXHJcbiAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkEgZmlyc3RuYW1lIGlzIHJlcXVpcmVkXCIsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB7IG1heDogMjAgfSxcclxuICAgICAgICAgICAgXX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgICA8Q29sIG1kPXs4fSB4cz17MjR9IHNtPXsyNH0+XHJcbiAgICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwiTGFzdG5hbWVcIiBuYW1lPVwibGFzdG5hbWVcIiBydWxlcz17W3sgbWF4OiA2NSB9XX0+XHJcbiAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPENvbCBtZD17OH0geHM9ezI0fSBzbT17MjR9PlxyXG4gICAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD1cIk5pY2tuYW1lXCIgbmFtZT1cIm5pY2tuYW1lXCIgcnVsZXM9e1t7IG1heDogNjUgfV19PlxyXG4gICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICA8L1Jvdz5cclxuICAgICAgPFJvdyBndXR0ZXI9e1syNCwgMjRdfT5cclxuICAgICAgICA8Q29sIG1kPXs4fSBzbT17MjR9IHhzPXsyNH0+XHJcbiAgICAgICAgICA8Rm9ybS5JdGVtIG5hbWU9XCJnZW5kZXJcIiBsYWJlbD1cIkdlbmRlclwiPlxyXG4gICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDxDb2wgbWQ9ezh9IHNtPXsyNH0geHM9ezI0fT5cclxuICAgICAgICAgIDxGb3JtLkl0ZW0gbmFtZT1cIm9jY3VwYXRpb25cIiBsYWJlbD1cIk9jY3VwYXRpb25cIj5cclxuICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgICA8Q29sIG1kPXs4fSBzbT17MjR9IHhzPXsyNH0+XHJcbiAgICAgICAgICA8Rm9ybS5JdGVtIG5hbWU9XCJyZXNpZGVuY2VcIiBsYWJlbD1cIlJlc2lkZW5jZVwiPlxyXG4gICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICA8L1Jvdz5cclxuICAgICAgPFJvdyBndXR0ZXI9e1syNCwgMjRdfT5cclxuICAgICAgICA8Q29sIG1kPXs4fSB4cz17MjR9IHNtPXsyNH0+XHJcbiAgICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwiRXRobmljaXR5XCIgbmFtZT1cImV0aG5pY2l0eVwiPlxyXG4gICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDxDb2wgbWQ9ezh9IHhzPXsyNH0gc209ezI0fT5cclxuICAgICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCJHcm91cFwiIG5hbWU9XCJncm91cFwiPlxyXG4gICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDxDb2wgbWQ9ezR9IHhzPXsyNH0gc209ezI0fT5cclxuICAgICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCJBZ2VcIiBuYW1lPVwiYWdlXCI+XHJcbiAgICAgICAgICAgIDxJbnB1dE51bWJlciBtaW49ezB9IC8+XHJcbiAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgICA8UmFkaW9CdXR0b25cclxuICAgICAgICAgIGxnPXs0fVxyXG4gICAgICAgICAgbWQ9ezR9XHJcbiAgICAgICAgICBzbT17MjR9XHJcbiAgICAgICAgICB4cz17MjR9XHJcbiAgICAgICAgICBuYW1lPVwicHVibGljXCJcclxuICAgICAgICAgIGxhYmVsPVwiVmlzaWJpbGl0eVwiXHJcbiAgICAgICAgICBudW0xPVwiMVwiXHJcbiAgICAgICAgICBudW0yPVwiMlwiXHJcbiAgICAgICAgICBsYWJlbDE9XCJQdWJsaWNcIlxyXG4gICAgICAgICAgbGFiZWwyPVwiUHJpdmF0ZVwiXHJcbiAgICAgICAgICBzZXRGdW5jPXtzZXRWaXNpYmlsaXR5fVxyXG4gICAgICAgICAgdmFsPXt2aXNpYmlsaXR5fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvUm93PlxyXG4gICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgbGFiZWw9XCJEZXNjcmlwdGlvblwiXHJcbiAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBtYXg6IDE4MCxcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJZb3VyIGRlc2NyaXB0aW9uIGNhbm5vdCBleGNlZWQgMTgwIGNoYXJhY3RlcnNcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXX1cclxuICAgICAgPlxyXG4gICAgICAgIDxJbnB1dC5UZXh0QXJlYVxyXG4gICAgICAgICAgYXV0b1NpemU9e3sgbWluUm93czogNSB9fVxyXG4gICAgICAgICAgc2hvd0NvdW50PXt0cnVlfVxyXG4gICAgICAgICAgbWF4TGVuZ3RoPXsxODB9XHJcbiAgICAgICAgPjwvSW5wdXQuVGV4dEFyZWE+XHJcbiAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICA8RGl2aWRlciAvPlxyXG4gICAgICA8UmVsYXRpdmVzXHJcbiAgICAgICAgY2hhcmFjdGVyPXtjaGFyYWN0ZXIgJiYgY2hhcmFjdGVyfVxyXG4gICAgICAgIGZvcm09e2Zvcm19XHJcbiAgICAgICAgY2hhcmFjdGVycz17Y2hhcmFjdGVyc31cclxuICAgICAgLz5cclxuICAgICAge3R5cGUgPT09IFwiYWRkXCIgPyAoXHJcbiAgICAgICAgbG9hZGluZ0NoYXJhY3RlciA/IChcclxuICAgICAgICAgIDxidXR0b24gZGlzYWJsZWQgY2xhc3NOYW1lPVwic3Bpbi1idG5cIj5cclxuICAgICAgICAgICAgPFNwaW4gLz5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5DcmVhdGU8L2J1dHRvbj5cclxuICAgICAgICApXHJcbiAgICAgICkgOiBsb2FkaW5nQ2hhcmFjdGVyID8gKFxyXG4gICAgICAgIDxidXR0b24gZGlzYWJsZWQgY2xhc3NOYW1lPVwic3Bpbi1idG5cIj5cclxuICAgICAgICAgIDxTcGluIC8+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPFJvdyBndXR0ZXI9e1szMiwgMTZdfT5cclxuICAgICAgICAgIDxDb2wgbWQ9ezE2fSBzbT17MjR9IHhzPXsyNH0+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkVkaXQ8L2J1dHRvbj5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPENvbCBtZD17OH0gc209ezI0fSB4cz17MjR9PlxyXG4gICAgICAgICAgICA8UG9wY29uZmlybVxyXG4gICAgICAgICAgICAgIHRpdGxlPVwiRG8geW91IHJlYWxseSB3YW50IHRvIGRlbGV0ZSB0aGlzIGNoYXJhY3RlciA/XCJcclxuICAgICAgICAgICAgICBvbkNvbmZpcm09eygpID0+XHJcbiAgICAgICAgICAgICAgICBkZWxldGVDaGFyYWN0ZXIoXHJcbiAgICAgICAgICAgICAgICAgIGNoYXJhY3Rlci5pZCxcclxuICAgICAgICAgICAgICAgICAgY2hhcmFjdGVyLmZpcnN0bmFtZSxcclxuICAgICAgICAgICAgICAgICAgY2hhcmFjdGVyLmxhc3RuYW1lXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJkZWxldGUtYnRuXCIgdHlwZT1cImJ1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgRGVsZXRlXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvUG9wY29uZmlybT5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICApfVxyXG4gICAgPC9Gb3JtPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGFyYWN0ZXJGb3JtO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFJvdywgQ29sLCBGb3JtLCBJbnB1dCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBpc0ltYWdlVXJsIGZyb20gXCJpcy1pbWFnZS11cmxcIjtcclxuXHJcbmltcG9ydCBVcGxvYWRJbWFnZSBmcm9tIFwiLi9VcGxvYWRJbWFnZVwiO1xyXG5cclxuY29uc3QgSW1hZ2VSb3cgPSAoeyBmb3JtLCBpdGVtSW1hZ2UsIG5hbWUgfSkgPT4ge1xyXG4gIGNvbnN0IFtsaW5rVmlzaWJsZSwgc2V0TGlua1Zpc2libGVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt1cGxvYWRWaXNpYmxlLCBzZXRVcGxvYWRWaXNpYmxlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3Qgc2hvd0xpbmsgPSAoKSA9PiB7XHJcbiAgICBmb3JtLnNldEZpZWxkc1ZhbHVlKHsgW25hbWVdOiBudWxsIH0pO1xyXG4gICAgc2V0TGlua1Zpc2libGUodHJ1ZSk7XHJcbiAgICBzZXRVcGxvYWRWaXNpYmxlKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzaG93VXBsb2FkID0gKCkgPT4ge1xyXG4gICAgZm9ybS5zZXRGaWVsZHNWYWx1ZSh7IFtuYW1lXTogbnVsbCB9KTtcclxuICAgIHNldExpbmtWaXNpYmxlKGZhbHNlKTtcclxuICAgIHNldFVwbG9hZFZpc2libGUodHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHshdXBsb2FkVmlzaWJsZSAmJiAhbGlua1Zpc2libGUgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXBsb2FkLWJ0bnNcIj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17c2hvd1VwbG9hZH0gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cInVwbG9hZC1idG5cIj5cclxuICAgICAgICAgICAgVXBsb2FkIGEgY292ZXJcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17c2hvd0xpbmt9IHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJ1cGxvYWQtYnRuXCI+XHJcbiAgICAgICAgICAgIFN1Ym1pdCBhIGxpbmsgdG8gYSBjb3ZlclxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICAgIHt1cGxvYWRWaXNpYmxlICYmIChcclxuICAgICAgICA8Um93IGFsaWduPVwiYm90dG9tXCIgZ3V0dGVyPXtbMjQsIDI0XX0+XHJcbiAgICAgICAgICA8Q29sIG1kPXsxMn0gc209ezI0fSB4cz17MjR9PlxyXG4gICAgICAgICAgICA8VXBsb2FkSW1hZ2UgbmFtZT17bmFtZX0gZm9ybT17Zm9ybX0gaW1hZ2U9e2l0ZW1JbWFnZX0gLz5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPENvbCBtZD17MTJ9IHNtPXsyNH0geHM9ezI0fT5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzaG93TGlua30gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cInVwbG9hZC1idG5cIj5cclxuICAgICAgICAgICAgICBPUiBTdWJtaXQgYSBsaW5rIHRvIGEgY292ZXJcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgKX1cclxuICAgICAge2xpbmtWaXNpYmxlICYmIChcclxuICAgICAgICA8Um93IGFsaWduPVwiYm90dG9tXCIgZ3V0dGVyPXtbMjQsIDI0XX0+XHJcbiAgICAgICAgICA8Q29sIHNtPXsyNH0geHM9ezI0fSBtZD17MTJ9IGxnPXsxMn0+XHJcbiAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICB0eXBlOiBcInVybFwiLFxyXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIlRoaXMgZmllbGQgbXVzdCBiZSBhIHZhbGlkIHVybC5cIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAoKSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgICB2YWxpZGF0b3IoXywgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNJbWFnZVVybCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgbmV3IEVycm9yKFwiVGhlIGxpbmsgbmVlZHMgdG8gYmUgYW4gaW1hZ2VcIilcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICBsYWJlbD1cIlN1Ym1pdCBhIGxpbmsgdG8geW91ciBpbWFnZVwiXHJcbiAgICAgICAgICAgICAgbmFtZT17bmFtZX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPENvbCBtZD17MTJ9IHNtPXsyNH0geHM9ezI0fT5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzaG93VXBsb2FkfSB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwidXBsb2FkLWJ0blwiPlxyXG4gICAgICAgICAgICAgIFVwbG9hZCBhIGNvdmVyXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VSb3c7XHJcbiIsImltcG9ydCB7IENvbCwgU3BhY2UsIEZvcm0sIFJhZGlvIH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmNvbnN0IFJhZGlvQnV0b24gPSAoe1xyXG4gIGxnLFxyXG4gIHNtLFxyXG4gIHhzLFxyXG4gIG1kLFxyXG4gIG5hbWUsXHJcbiAgbGFiZWwsXHJcbiAgbnVtMSxcclxuICBudW0yLFxyXG4gIGxhYmVsMSxcclxuICBsYWJlbDIsXHJcbiAgZm9ybSxcclxuICBzZXRGdW5jLFxyXG4gIHZhbCxcclxufSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q29sIGxnPXtsZ30gbWQ9e21kfSBzbT17c219IHhzPXt4c30+XHJcbiAgICAgIDxGb3JtLkl0ZW0gbmFtZT17bmFtZX0gbGFiZWw9e2xhYmVsfT5cclxuICAgICAgICA8ZmllbGRzZXQgaWQ9e25hbWV9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYWRpb1wiPlxyXG4gICAgICAgICAgICA8UmFkaW8uR3JvdXA+XHJcbiAgICAgICAgICAgICAgPFNwYWNlIHNpemU9ezMyfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmFkaW9fXzFcIj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9e2ByYWRpby0ke251bTF9YH1cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBzZXRGdW5jKHRydWUpfVxyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3ZhbCA/IHRydWUgOiBmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e2ByYWRpby0ke251bTF9YH0+PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPHA+e2xhYmVsMX08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmFkaW9fXzJcIj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9e2ByYWRpby0ke251bTJ9YH1cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gc2V0RnVuYyhmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dmFsID8gZmFsc2UgOiB0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17YHJhZGlvLSR7bnVtMn1gfT48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8cD57bGFiZWwyfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvU3BhY2U+XHJcbiAgICAgICAgICAgIDwvUmFkaW8uR3JvdXA+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2ZpZWxkc2V0PlxyXG4gICAgICA8L0Zvcm0uSXRlbT5cclxuICAgIDwvQ29sPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSYWRpb0J1dG9uO1xyXG4iLCJpbXBvcnQgeyBSb3csIENvbCwgRm9ybSwgU2VsZWN0LCBJbnB1dCwgRGl2aWRlciB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBDaGFyYWN0ZXJDYXJkLCB7IENoYXJhY3RlckdyaWQgfSBmcm9tIFwiLi4vY29tbW9uL0NoYXJhY3RlckNhcmRcIjtcclxuXHJcbmNvbnN0IHsgT3B0aW9uIH0gPSBTZWxlY3Q7XHJcblxyXG5jb25zdCBSZWxhdGl2ZXMgPSAoeyBjaGFyYWN0ZXIsIGNoYXJhY3RlcnMsIGZvcm0gfSkgPT4ge1xyXG4gIGNvbnN0IFtyZWxhdGlvbnMsIHNldFJlbGF0aW9uc10gPSBSZWFjdC51c2VTdGF0ZShcclxuICAgIGNoYXJhY3RlciA/IGNoYXJhY3Rlci5yZWxhdGl2ZXMgOiBbXVxyXG4gICk7XHJcbiAgY29uc3QgW2N1cnJlbnRDaGFyLCBzZXRDdXJyZW50Q2hhcl0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY3VycmVudFJlbCwgc2V0Q3VycmVudFJlbF0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbc2VsZWN0ZWRDaGFyYWN0ZXJzLCBzZXRTZWxlY3RlZENoYXJhY3RlcnNdID0gUmVhY3QudXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBbc2VsZWN0ZWRBcnIsIHNldFNlbGVjdGVkQXJyXSA9IFJlYWN0LnVzZVN0YXRlKFxyXG4gICAgY2hhcmFjdGVyID8gY2hhcmFjdGVyLnJlbGF0aXZlcy5tYXAoKGMpID0+IGMuY2hhcmFjdGVyX2lkKSA6IFtdXHJcbiAgKTtcclxuICBjb25zdCBbc2hvd0Vycm9yUmVsLCBzZXRTaG93RXJyb3JSZWxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzaG93RXJyb3JDaGFyLCBzZXRTaG93RXJyb3JDaGFyXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgYWRkUmVsYXRpb24gPSAoKSA9PiB7XHJcbiAgICBsZXQgbmV3UmVsYXRpb25zID0gWy4uLnJlbGF0aW9uc107XHJcbiAgICBpZiAoY3VycmVudENoYXIgJiYgY3VycmVudFJlbCkge1xyXG4gICAgICBuZXdSZWxhdGlvbnMgPSBbXHJcbiAgICAgICAgLi4ubmV3UmVsYXRpb25zLFxyXG4gICAgICAgIHsgY2hhcmFjdGVyX2lkOiBjdXJyZW50Q2hhciwgcmVsYXRpb246IGN1cnJlbnRSZWwgfSxcclxuICAgICAgXTtcclxuICAgICAgc2V0U2VsZWN0ZWRDaGFyYWN0ZXJzKFtcclxuICAgICAgICAuLi5zZWxlY3RlZENoYXJhY3RlcnMsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgLi4uY2hhcmFjdGVycy5maW5kKChjKSA9PiBjLmlkID09PSBjdXJyZW50Q2hhciksXHJcbiAgICAgICAgICByZWxhdGlvbjogY3VycmVudFJlbCxcclxuICAgICAgICB9LFxyXG4gICAgICBdKTtcclxuICAgICAgc2V0U2VsZWN0ZWRBcnIoWy4uLnNlbGVjdGVkQXJyLCBjdXJyZW50Q2hhcl0pO1xyXG4gICAgICBmb3JtLnNldEZpZWxkc1ZhbHVlKHsgcmVsYXRpdmVzOiBuZXdSZWxhdGlvbnMgfSk7XHJcbiAgICAgIHNldFJlbGF0aW9ucyhuZXdSZWxhdGlvbnMpO1xyXG4gICAgICBzZXRDdXJyZW50Q2hhcihcIlwiKTtcclxuICAgICAgc2V0Q3VycmVudFJlbChcIlwiKTtcclxuICAgICAgc2V0U2hvd0Vycm9yQ2hhcihmYWxzZSk7XHJcbiAgICAgIHNldFNob3dFcnJvclJlbChmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFjdXJyZW50UmVsKSB7XHJcbiAgICAgIHNldFNob3dFcnJvclJlbCh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWN1cnJlbnRDaGFyKSB7XHJcbiAgICAgIHNldFNob3dFcnJvckNoYXIodHJ1ZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChjaGFyYWN0ZXIgJiYgY2hhcmFjdGVycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHNldFNlbGVjdGVkQ2hhcmFjdGVycyhcclxuICAgICAgICBjaGFyYWN0ZXIucmVsYXRpdmVzLm1hcCgoYykgPT4gKHtcclxuICAgICAgICAgIGZpcnN0bmFtZTogY2hhcmFjdGVycy5maW5kKChjaGFyKSA9PiBjaGFyLmlkID09PSBjLmNoYXJhY3Rlcl9pZClcclxuICAgICAgICAgICAgLmZpcnN0bmFtZSxcclxuICAgICAgICAgIGxhc3RuYW1lOiBjaGFyYWN0ZXJzLmZpbmQoKGNoYXIpID0+IGNoYXIuaWQgPT09IGMuY2hhcmFjdGVyX2lkKVxyXG4gICAgICAgICAgICAubGFzdG5hbWUsXHJcbiAgICAgICAgICBpbWFnZTogY2hhcmFjdGVycy5maW5kKChjaGFyKSA9PiBjaGFyLmlkID09PSBjLmNoYXJhY3Rlcl9pZCkuaW1hZ2UsXHJcbiAgICAgICAgICBpZDogY2hhcmFjdGVycy5maW5kKChjaGFyKSA9PiBjaGFyLmlkID09PSBjLmNoYXJhY3Rlcl9pZCkuaWQsXHJcbiAgICAgICAgICByZWxhdGlvbjogYy5yZWxhdGlvbixcclxuICAgICAgICB9KSlcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9LCBbY2hhcmFjdGVyLCBjaGFyYWN0ZXJzXSk7XHJcblxyXG4gIGNvbnN0IHJlbW92ZUNoYXJhY3RlciA9IChpZCkgPT4ge1xyXG4gICAgc2V0U2VsZWN0ZWRDaGFyYWN0ZXJzKHNlbGVjdGVkQ2hhcmFjdGVycy5maWx0ZXIoKGMpID0+IGMuaWQgIT09IGlkKSk7XHJcbiAgICBzZXRTZWxlY3RlZEFycihzZWxlY3RlZEFyci5maWx0ZXIoKGMpID0+IGMgIT09IGlkKSk7XHJcbiAgICBzZXRSZWxhdGlvbnMocmVsYXRpb25zLmZpbHRlcigoYykgPT4gYy5jaGFyYWN0ZXJfaWQgIT09IGlkKSk7XHJcbiAgICBmb3JtLnNldEZpZWxkc1ZhbHVlKHtcclxuICAgICAgcmVsYXRpdmVzOiByZWxhdGlvbnMuZmlsdGVyKChjKSA9PiBjLmNoYXJhY3Rlcl9pZCAhPT0gaWQpLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtLkl0ZW0gbmFtZT1cInJlbGF0aXZlc1wiPlxyXG4gICAgICA8aDM+UmVsYXRpb25zaGlwczwvaDM+XHJcbiAgICAgIDxSb3cgZ3V0dGVyPXtbMjQsIDEyXX0gYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICA8Q29sIG1kPXsxMX0gc209ezI0fSB4cz17MjR9PlxyXG4gICAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD1cIlNlbGVjdCBhIGNoYXJhY3RlclwiPlxyXG4gICAgICAgICAgICA8U2VsZWN0IHZhbHVlPXtjdXJyZW50Q2hhcn0gb25DaGFuZ2U9eyh2YWwpID0+IHNldEN1cnJlbnRDaGFyKHZhbCl9PlxyXG4gICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJub25lXCIgZGlzYWJsZWQ+XHJcbiAgICAgICAgICAgICAgICBTZWxlY3QgYSBjaGFyYWN0ZXJcclxuICAgICAgICAgICAgICA8L09wdGlvbj5cclxuICAgICAgICAgICAgICB7Y2hhcmFjdGVyc1xyXG4gICAgICAgICAgICAgICAgPy5maWx0ZXIoKGMpID0+ICFzZWxlY3RlZEFyci5pbmNsdWRlcyhjLmlkKSlcclxuICAgICAgICAgICAgICAgIC5tYXAoKGMpID0+IChcclxuICAgICAgICAgICAgICAgICAgPE9wdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17Yy5pZH1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Yy5pZH1cclxuICAgICAgICAgICAgICAgICAgPntgJHtjLmZpcnN0bmFtZX0gJHtjLmxhc3RuYW1lfWB9PC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgIHtzaG93RXJyb3JDaGFyICYmIChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFudC1mb3JtLWl0ZW0tZXhwbGFpbiBhbnQtZm9ybS1pdGVtLWV4cGxhaW4tZXJyb3JcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgcm9sZT1cImFsZXJ0XCI+QSBjaGFyYWN0ZXIgaXMgcmVxdWlyZWQ8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDxDb2wgbWQ9ezExfSBzbT17MjF9IHhzPXsyMX0+XHJcbiAgICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwiVHlwZSBvZiByZWxhdGlvbnNoaXBcIj5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgdmFsdWU9e2N1cnJlbnRSZWx9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDdXJyZW50UmVsKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAge3Nob3dFcnJvclJlbCAmJiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbnQtZm9ybS1pdGVtLWV4cGxhaW4gYW50LWZvcm0taXRlbS1leHBsYWluLWVycm9yXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHJvbGU9XCJhbGVydFwiPkEgdHlwZSBvZiByZWxhdGlvbnNoaXAgaXMgcmVxdWlyZWQ8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDxDb2wgbWQ9ezJ9IHhzPXszfSBzbT17M30+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdC1hZGQtaW5wdXQtaWNvbmJveFwiIG9uQ2xpY2s9e2FkZFJlbGF0aW9ufT5cclxuICAgICAgICAgICAgPHNwYW4+Kzwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICA8L1Jvdz5cclxuICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgPFJvdyBndXR0ZXI9e1sxNiwgMTZdfT5cclxuICAgICAgICB7c2VsZWN0ZWRDaGFyYWN0ZXJzPy5tYXAoKHJlbCkgPT4gKFxyXG4gICAgICAgICAgPENvbCBsZz17NH0gbWQ9ezh9IHNtPXsxMn0geHM9ezI0fSBrZXk9e3JlbC5pZH0+XHJcbiAgICAgICAgICAgIDxDaGFyYWN0ZXJDYXJkXHJcbiAgICAgICAgICAgICAgcmVtb3ZlQ2hhcmFjdGVyPXtyZW1vdmVDaGFyYWN0ZXJ9XHJcbiAgICAgICAgICAgICAgdHlwZT1cImFkZFwiXHJcbiAgICAgICAgICAgICAgY2hhcmFjdGVyPXtyZWx9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICApKX1cclxuICAgICAgPC9Sb3c+XHJcbiAgICA8L0Zvcm0uSXRlbT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVsYXRpdmVzO1xyXG4iLCJpbXBvcnQgeyBVcGxvYWQsIG1lc3NhZ2UsIEZvcm0sIElucHV0IH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgTG9hZGluZ091dGxpbmVkLCBQbHVzT3V0bGluZWQsIFN0YXJPdXRsaW5lZCB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5cclxuZnVuY3Rpb24gZ2V0QmFzZTY0KGltZywgY2FsbGJhY2spIHtcclxuICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gIHJlYWRlci5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiBjYWxsYmFjayhyZWFkZXIucmVzdWx0KSk7XHJcbiAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoaW1nKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYmVmb3JlVXBsb2FkKGZpbGUpIHtcclxuICBjb25zdCBpc0pwZ09yUG5nID0gZmlsZS50eXBlID09PSBcImltYWdlL2pwZWdcIiB8fCBmaWxlLnR5cGUgPT09IFwiaW1hZ2UvcG5nXCI7XHJcbiAgaWYgKCFpc0pwZ09yUG5nKSB7XHJcbiAgICBtZXNzYWdlLmVycm9yKFwiWW91IGNhbiBvbmx5IHVwbG9hZCBKUEcvUE5HIGZpbGUhXCIpO1xyXG4gIH1cclxuICBjb25zdCBpc0x0Mk0gPSBmaWxlLnNpemUgLyAxMDI0IC8gMTAyNCA8IDI7XHJcbiAgaWYgKCFpc0x0Mk0pIHtcclxuICAgIG1lc3NhZ2UuZXJyb3IoXCJJbWFnZSBtdXN0IHNtYWxsZXIgdGhhbiAyTUIhXCIpO1xyXG4gIH1cclxuICByZXR1cm4gaXNKcGdPclBuZyAmJiBpc0x0Mk07XHJcbn1cclxuXHJcbmNvbnN0IFVwbG9hZEltYWdlID0gKHsgZm9ybSwgaW1hZ2UsIG5hbWUgfSkgPT4ge1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaW1hZ2VVcmwsIHNldEltYWdlVXJsXSA9IFJlYWN0LnVzZVN0YXRlKGltYWdlID8gaW1hZ2UgOiBcIlwiKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGluZm8pID0+IHtcclxuICAgIGlmIChpbmZvLmZpbGUuc3RhdHVzID09PSBcInVwbG9hZGluZ1wiKSB7XHJcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmIChpbmZvLmZpbGUuc3RhdHVzID09PSBcImRvbmVcIikge1xyXG4gICAgICBmb3JtLnNldEZpZWxkc1ZhbHVlKHsgW25hbWVdOiBpbmZvLmZpbGUub3JpZ2luRmlsZU9iaiB9KTtcclxuICAgICAgLy8gc2V0SW1hZ2UoaW5mby5maWxlLm9yaWdpbkZpbGVPYmopO1xyXG4gICAgICBnZXRCYXNlNjQoaW5mby5maWxlLm9yaWdpbkZpbGVPYmosIChpbWFnZVVybCkgPT4ge1xyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIHNldEltYWdlVXJsKGltYWdlVXJsKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdXBsb2FkQnV0dG9uID0gKFxyXG4gICAgPGRpdj5cclxuICAgICAge2xvYWRpbmcgPyA8TG9hZGluZ091dGxpbmVkIC8+IDogPFBsdXNPdXRsaW5lZCAvPn1cclxuICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IDggfX0+VXBsb2FkPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Rm9ybS5JdGVtIG5hbWU9e25hbWV9IGxhYmVsPVwiVXBsb2FkIGEgY292ZXJcIj5cclxuICAgICAgICA8VXBsb2FkXHJcbiAgICAgICAgICBzaG93VXBsb2FkTGlzdD17e1xyXG4gICAgICAgICAgICBzaG93UmVtb3ZlSWNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgcmVtb3ZlSWNvbjogPFN0YXJPdXRsaW5lZCAvPixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBsaXN0VHlwZT1cInBpY3R1cmUtY2FyZFwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJjb3Zlci11cGxvYWRlclwiXHJcbiAgICAgICAgICBzaG93VXBsb2FkTGlzdD17dHJ1ZX1cclxuICAgICAgICAgIGJlZm9yZVVwbG9hZD17YmVmb3JlVXBsb2FkfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgIG1heENvdW50PXsxfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtpbWFnZVVybCA/IChcclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIHNyYz17aW1hZ2VVcmx9XHJcbiAgICAgICAgICAgICAgYWx0PVwiaW1hZ2VcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgb2JqZWN0Rml0OiBcImNvdmVyXCIgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIHVwbG9hZEJ1dHRvblxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L1VwbG9hZD5cclxuICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICBsYWJlbD1cIkltYWdlIENvcHlyaWdodFwiXHJcbiAgICAgICAgbmFtZT1cImltYWdlQ29weXJpZ2h0XCJcclxuICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICByZXF1aXJlZDogZm9ybS5nZXRGaWVsZFZhbHVlKG5hbWUpID8gdHJ1ZSA6IGZhbHNlLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkFuIGltYWdlIGNvcHlyaWdodCBpcyByZXF1aXJlZFwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdfVxyXG4gICAgICA+XHJcbiAgICAgICAgPElucHV0IC8+XHJcbiAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVwbG9hZEltYWdlO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBMb2FkaW5nU2NyZWVuID0gKHsgY2hpbGRyZW4sIGxvYWRpbmcgfSkgPT4ge1xyXG4gIHJldHVybiAhbG9hZGluZyA/IChcclxuICAgIGNoaWxkcmVuXHJcbiAgKSA6IChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGVyLWNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRlclwiPlxyXG4gICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2FkaW5nU2NyZWVuO1xyXG4iLCJpbXBvcnQgeyBSZXN1bHQsIEJ1dHRvbiB9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5jb25zdCBSZWRpcmVjdENvbXAgPSAoeyBjb25kaXRpb24sIHR5cGUsIGNoaWxkcmVuIH0pID0+IHtcclxuICByZXR1cm4gY29uZGl0aW9uID8gKFxyXG4gICAgY2hpbGRyZW5cclxuICApIDogdHlwZSA9PT0gXCI0MDRcIiA/IChcclxuICAgIDxSZXN1bHRcclxuICAgICAgc3RhdHVzPVwiNDA0XCJcclxuICAgICAgdGl0bGU9XCI0MDRcIlxyXG4gICAgICBzdWJUaXRsZT1cIlNvcnJ5LCB0aGUgcGFnZSB5b3UgdmlzaXRlZCBkb2VzIG5vdCBleGlzdC5cIlxyXG4gICAgICBleHRyYT17PEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiPkJhY2sgSG9tZTwvQnV0dG9uPn1cclxuICAgIC8+XHJcbiAgKSA6IHR5cGUgPT09IFwiNDAzXCIgPyAoXHJcbiAgICA8UmVzdWx0XHJcbiAgICAgIHN0YXR1cz1cIjQwM1wiXHJcbiAgICAgIHRpdGxlPVwiNDAzXCJcclxuICAgICAgc3ViVGl0bGU9XCJTb3JyeSwgeW91IGFyZSBub3QgYXV0aG9yaXplZCB0byBhY2Nlc3MgdGhpcyBwYWdlLlwiXHJcbiAgICAgIGV4dHJhPXs8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCI+QmFjayBIb21lPC9CdXR0b24+fVxyXG4gICAgLz5cclxuICApIDogdHlwZSA9PT0gXCJyZWRpcmVjdFwiID8gKFxyXG4gICAgKHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvYXV0aFwiKVxyXG4gICkgOiAoXHJcbiAgICA8ZGl2PjwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWRpcmVjdENvbXA7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0LCBjcmVhdGVDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcbmltcG9ydCB7IGF1dGgsIGRiIH0gZnJvbSBcIi4uL3JlZHV4L2ZiQ29uZmlnXCI7XHJcblxyXG5jb25zdCBhdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQcm92aWRlQXV0aCh7IGNoaWxkcmVuIH0pIHtcclxuICBjb25zdCBhdXRoID0gdXNlUHJvdmlkZUF1dGgoKTtcclxuICByZXR1cm4gPGF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXthdXRofT57Y2hpbGRyZW59PC9hdXRoQ29udGV4dC5Qcm92aWRlcj47XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1c2VBdXRoID0gKCkgPT4ge1xyXG4gIHJldHVybiB1c2VDb250ZXh0KGF1dGhDb250ZXh0KTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIHVzZVByb3ZpZGVBdXRoKCkge1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgLy8gV3JhcCBhbnkgRmlyZWJhc2UgbWV0aG9kcyB3ZSB3YW50IHRvIHVzZSBtYWtpbmcgc3VyZSAuLi5cclxuICAvLyAuLi4gdG8gc2F2ZSB0aGUgdXNlciB0byBzdGF0ZS5cclxuICBjb25zdCBzaWduaW4gPSAoZW1haWwsIHBhc3N3b3JkKSA9PiB7XHJcbiAgICByZXR1cm4gYXV0aC5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHNldFVzZXIocmVzcG9uc2UudXNlcik7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS51c2VyO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2lnbnVwID0gKGVtYWlsLCBwYXNzd29yZCwgdXNlcm5hbWUpID0+IHtcclxuICAgIHJldHVybiBhdXRoXHJcbiAgICAgIC5jcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBzZXRVc2VyKHJlc3BvbnNlLnVzZXIpO1xyXG4gICAgICAgIGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKS5hZGQoe1xyXG4gICAgICAgICAgYmFkZ2VzOiBbXSxcclxuICAgICAgICAgIGJpb2dyYXBoeTogXCJcIixcclxuICAgICAgICAgIGNyZWF0ZWRBdDogZmlyZWJhc2UuZmlyZXN0b3JlLkZpZWxkVmFsdWUuc2VydmVyVGltZXN0YW1wKCksXHJcbiAgICAgICAgICBzdXNwZW5kZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgZmFjZWJvb2s6IFwiXCIsXHJcbiAgICAgICAgICBpbnN0YWdyYW06IFwiXCIsXHJcbiAgICAgICAgICB0d2l0dGVyOiBcIlwiLFxyXG4gICAgICAgICAgZGV2aWFudGFydDogXCJcIixcclxuICAgICAgICAgIGxpa2VzQ291bnQ6IFwiXCIsXHJcbiAgICAgICAgICB1c2VybmFtZTogdXNlcm5hbWUsXHJcbiAgICAgICAgICBpbWFnZTogXCJcIixcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UudXNlcjtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2lnbm91dCA9ICgpID0+IHtcclxuICAgIHJldHVybiBhdXRoLnNpZ25PdXQoKS50aGVuKCgpID0+IHtcclxuICAgICAgc2V0VXNlcihmYWxzZSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzZW5kUGFzc3dvcmRSZXNldEVtYWlsID0gKGVtYWlsKSA9PiB7XHJcbiAgICByZXR1cm4gYXV0aC5zZW5kUGFzc3dvcmRSZXNldEVtYWlsKGVtYWlsKS50aGVuKCgpID0+IHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjb25maXJtUGFzc3dvcmRSZXNldCA9IChjb2RlLCBwYXNzd29yZCkgPT4ge1xyXG4gICAgcmV0dXJuIGF1dGguY29uZmlybVBhc3N3b3JkUmVzZXQoY29kZSwgcGFzc3dvcmQpLnRoZW4oKCkgPT4ge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB1bnN1YnNjcmliZSA9IGF1dGgub25BdXRoU3RhdGVDaGFuZ2VkKCh1c2VyKSA9PiB7XHJcbiAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgc2V0VXNlcih1c2VyKTtcclxuICAgICAgICBpZiAodXNlci51aWQpIHtcclxuICAgICAgICAgIGxldCB1c2VybmFtZSA9IFwiXCI7XHJcbiAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgZGIuY29sbGVjdGlvbihcInVzZXJzXCIpXHJcbiAgICAgICAgICAgIC5kb2ModXNlci51aWQpXHJcbiAgICAgICAgICAgIC5vblNuYXBzaG90KChkb2MpID0+IHtcclxuICAgICAgICAgICAgICB1c2VybmFtZSA9IGRvYy5kYXRhKCkudXNlcm5hbWU7XHJcbiAgICAgICAgICAgICAgc2V0VXNlcih7IC4uLnVzZXIsIHVzZXJuYW1lLCBpbWFnZTogZG9jLmRhdGEoKS5pbWFnZSB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldFVzZXIoZmFsc2UpO1xyXG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIENsZWFudXAgc3Vic2NyaXB0aW9uIG9uIHVubW91bnRcclxuICAgIHJldHVybiAoKSA9PiB1bnN1YnNjcmliZSgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgLy8gUmV0dXJuIHRoZSB1c2VyIG9iamVjdCBhbmQgYXV0aCBtZXRob2RzXHJcbiAgcmV0dXJuIHtcclxuICAgIGlzTG9hZGluZyxcclxuICAgIHVzZXIsXHJcbiAgICBzaWduaW4sXHJcbiAgICBzaWdudXAsXHJcbiAgICBzaWdub3V0LFxyXG4gICAgc2VuZFBhc3N3b3JkUmVzZXRFbWFpbCxcclxuICAgIGNvbmZpcm1QYXNzd29yZFJlc2V0LFxyXG4gIH07XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRm9ybSwgbWVzc2FnZSB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tIFwiLi4vLi4vLi4vaG9va3MvdXNlckhvb2tzXCI7XHJcbmltcG9ydCB7XHJcbiAgZWRpdENoYXJhY3RlcixcclxuICBnZXRDaGFyYWN0ZXIsXHJcbiAgZ2V0VXNlckNoYXJhY3RlcnMsXHJcbiAgZGVsZXRlQ2hhcmFjdGVyLFxyXG59IGZyb20gXCIuLi8uLi8uLi9yZWR1eC9hY3Rpb25zL2NoYXJhY3RlcnNBY3Rpb25zXCI7XHJcblxyXG5pbXBvcnQgTG9hZGluZ1NjcmVlbiBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9ob2MvTG9hZGluZ1NjcmVlblwiO1xyXG5pbXBvcnQgUmVkaXJlY3RDb21wIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2hvYy9SZWRpcmVjdENvbXBcIjtcclxuaW1wb3J0IENoYXJhY3RlckZvcm0gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvZm9ybXMvQ2hhcmFjdGVyRm9ybVwiO1xyXG5cclxuY29uc3QgRWRpdENoYXJhY3RlciA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIGNoYXJhY3RlcixcclxuICAgIGNoYXJhY3RlcnMsXHJcbiAgICBsb2FkaW5nQ2hhcmFjdGVyLFxyXG4gICAgbG9hZGluZyxcclxuICAgIGNoYXJhRXhpc3RzLFxyXG4gICAgZWRpdE1lc3NhZ2UsXHJcbiAgICBkZWxldGVkLFxyXG4gIH0gPSBwcm9wcztcclxuICBjb25zdCBhdXRoID0gdXNlQXV0aCgpO1xyXG4gIGNvbnN0IFtmb3JtXSA9IEZvcm0udXNlRm9ybSgpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBbdmlzaWJpbGl0eSwgc2V0VmlzaWJpbGl0eV0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChhdXRoLnVzZXIpIHtcclxuICAgICAgcHJvcHMuZ2V0Q2hhcmFjdGVyKHJvdXRlci5xdWVyeS5pZCk7XHJcbiAgICAgIHByb3BzLmdldFVzZXJDaGFyYWN0ZXJzKGF1dGgudXNlci51aWQpO1xyXG4gICAgfVxyXG4gIH0sIFthdXRoXSk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoZGVsZXRlZCkge1xyXG4gICAgICByb3V0ZXIucHVzaChcIi9wcm9maWxlXCIpO1xyXG4gICAgfVxyXG4gIH0sIFtkZWxldGVkXSk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoZWRpdE1lc3NhZ2UpIHtcclxuICAgICAgbWVzc2FnZS5zdWNjZXNzKGVkaXRNZXNzYWdlKTtcclxuICAgIH1cclxuICB9LCBbZWRpdE1lc3NhZ2VdKTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZvcm0uc2V0RmllbGRzVmFsdWUoeyBwdWJsaWM6IHZpc2liaWxpdHkgfSk7XHJcbiAgfSwgW3Zpc2liaWxpdHldKTtcclxuXHJcbiAgY29uc3Qgb25GYWlsZWQgPSAoKSA9PiB7XHJcbiAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcbiAgICBtZXNzYWdlLmVycm9yKFwiVGhlcmUgYXJlIHNvbWUgZXJyb3JzXCIpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHN1Ym1pdCA9ICh2YWx1ZXMpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHZhbHVlcyk7XHJcbiAgICBwcm9wcy5lZGl0Q2hhcmFjdGVyKHsgLi4udmFsdWVzIH0sIHJvdXRlci5xdWVyeS5pZCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMb2FkaW5nU2NyZWVuIGxvYWRpbmc9e2xvYWRpbmd9PlxyXG4gICAgICA8UmVkaXJlY3RDb21wIHR5cGU9XCI0MDRcIiBjb25kaXRpb249e2NoYXJhRXhpc3RzfT5cclxuICAgICAgICA8UmVkaXJlY3RDb21wXHJcbiAgICAgICAgICB0eXBlPVwiNDAzXCJcclxuICAgICAgICAgIGNvbmRpdGlvbj17YXV0aC51c2VyICYmIGF1dGgudXNlci51aWQgPT09IGNoYXJhY3Rlci5hdXRob3JJZH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbS1mb3JtIG5ldy1jaGFyYWN0ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lclwiPlxyXG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJzaWRlLWhlYWRpbmdcIj5cclxuICAgICAgICAgICAgICAgIEVkaXQgY2hhcmFjdGVyOlxyXG4gICAgICAgICAgICAgICAge2AgJHtjaGFyYWN0ZXIuZmlyc3RuYW1lfSAke1xyXG4gICAgICAgICAgICAgICAgICBjaGFyYWN0ZXIubGFzdG5hbWUgJiYgY2hhcmFjdGVyLmxhc3RuYW1lXHJcbiAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgIDxDaGFyYWN0ZXJGb3JtXHJcbiAgICAgICAgICAgICAgICBzdWJtaXQ9e3N1Ym1pdH1cclxuICAgICAgICAgICAgICAgIG9uRmFpbGVkPXtvbkZhaWxlZH1cclxuICAgICAgICAgICAgICAgIGZvcm09e2Zvcm19XHJcbiAgICAgICAgICAgICAgICBjaGFyYWN0ZXI9e2NoYXJhY3Rlcn1cclxuICAgICAgICAgICAgICAgIGNoYXJhY3RlcnM9e2NoYXJhY3RlcnMuZmlsdGVyKChjKSA9PiBjLmlkICE9PSBjaGFyYWN0ZXIuaWQpfVxyXG4gICAgICAgICAgICAgICAgdmlzaWJpbGl0eT17dmlzaWJpbGl0eX1cclxuICAgICAgICAgICAgICAgIHNldFZpc2liaWxpdHk9e3NldFZpc2liaWxpdHl9XHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nQ2hhcmFjdGVyPXtsb2FkaW5nQ2hhcmFjdGVyfVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImVkaXRcIlxyXG4gICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17e1xyXG4gICAgICAgICAgICAgICAgICBmaXJzdG5hbWU6IGNoYXJhY3Rlci5maXJzdG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgIGxhc3RuYW1lOiBjaGFyYWN0ZXIubGFzdG5hbWUgfHwgXCJcIixcclxuICAgICAgICAgICAgICAgICAgYWdlOiBjaGFyYWN0ZXIuYWdlIHx8IDAsXHJcbiAgICAgICAgICAgICAgICAgIGdlbmRlcjogY2hhcmFjdGVyLmdlbmRlciB8fCBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICBwdWJsaWM6IGNoYXJhY3Rlci5wdWJsaWMsXHJcbiAgICAgICAgICAgICAgICAgIGV0aG5pY2l0eTogY2hhcmFjdGVyLmV0aG5pY2l0eSB8fCBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICBncm91cDogY2hhcmFjdGVyLmdyb3VwIHx8IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgIHJlc2lkZW5jZTogY2hhcmFjdGVyLnJlc2lkZW5jZSB8fCBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogY2hhcmFjdGVyLmRlc2NyaXB0aW9uIHx8IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgIG5pY2tuYW1lOiBjaGFyYWN0ZXIubmlja25hbWUgfHwgXCJcIixcclxuICAgICAgICAgICAgICAgICAgb2NjdXBhdGlvbjogY2hhcmFjdGVyLm9jY3VwYXRpb24gfHwgXCJcIixcclxuICAgICAgICAgICAgICAgICAgcmVsYXRpdmVzOiBjaGFyYWN0ZXIucmVsYXRpdmVzIHx8IFtdLFxyXG4gICAgICAgICAgICAgICAgICBpbWFnZTogY2hhcmFjdGVyLmltYWdlIHx8IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgIGltYWdlQ29weXJpZ2h0OiBjaGFyYWN0ZXIuaW1hZ2VDb3B5cmlnaHQgfHwgXCJcIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBkZWxldGVDaGFyYWN0ZXI9e3Byb3BzLmRlbGV0ZUNoYXJhY3Rlcn1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvUmVkaXJlY3RDb21wPlxyXG4gICAgICA8L1JlZGlyZWN0Q29tcD5cclxuICAgIDwvTG9hZGluZ1NjcmVlbj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG4gIGNoYXJhY3Rlcjogc3RhdGUuY2hhcmFjdGVycy5jaGFyYWN0ZXIsXHJcbiAgY2hhcmFjdGVyczogc3RhdGUuY2hhcmFjdGVycy51c2VyQ2hhcmFjdGVycyxcclxuICBsb2FkaW5nOiBzdGF0ZS5jaGFyYWN0ZXJzLmxvYWRpbmcsXHJcbiAgbG9hZGluZ0NoYXJhY3Rlcjogc3RhdGUuY2hhcmFjdGVycy5sb2FkaW5nQ2hhcmFjdGVyLFxyXG4gIGNoYXJhY3RlcklkOiBzdGF0ZS5jaGFyYWN0ZXJzLmNoYXJhY3RlcklkLFxyXG4gIGNoYXJhRXhpc3RzOiBzdGF0ZS5jaGFyYWN0ZXJzLmNoYXJhRXhpc3RzLFxyXG4gIGVkaXRNZXNzYWdlOiBzdGF0ZS5jaGFyYWN0ZXJzLm1lc3NhZ2UsXHJcbiAgZGVsZXRlZDogc3RhdGUuY2hhcmFjdGVycy5kZWxldGVkLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7XHJcbiAgZ2V0Q2hhcmFjdGVyLFxyXG4gIGVkaXRDaGFyYWN0ZXIsXHJcbiAgZ2V0VXNlckNoYXJhY3RlcnMsXHJcbiAgZGVsZXRlQ2hhcmFjdGVyLFxyXG59KShFZGl0Q2hhcmFjdGVyKTtcclxuIiwiaW1wb3J0IHsgdHlwZXMgfSBmcm9tIFwiLi4vLi4vdXRpbHMvY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IG1lc3NhZ2UgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyBkYiwgYXV0aCwgc3RvcmFnZSB9IGZyb20gXCIuLi9mYkNvbmZpZ1wiO1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlL2FwcFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldENoYXJhY3RlciA9IChpZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGIuY29sbGVjdGlvbihcImNoYXJhY3RlcnNcIilcclxuICAgIC5kb2MoaWQpXHJcbiAgICAuZ2V0KClcclxuICAgIC50aGVuKChkb2MpID0+IHtcclxuICAgICAgaWYgKGRvYy5leGlzdHMpIHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiB0eXBlcy5HRVRfQ0hBUkFDVEVSLFxyXG4gICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICBjaGFyYWN0ZXI6IHsgLi4uZG9jLmRhdGEoKSwgaWQ6IGRvYy5pZCB9LFxyXG4gICAgICAgICAgICBjaGFyYUV4aXN0czogdHJ1ZSxcclxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IHR5cGVzLkdFVF9DSEFSQUNURVIsXHJcbiAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgIGNoYXJhRXhpc3RzOiBmYWxzZSxcclxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRDaGFyYWN0ZXIgPSAoZGF0YSkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGlzcGF0Y2goeyB0eXBlOiB0eXBlcy5BRERfQ0hBUkFDVEVSLCBwYXlsb2FkOiB7IGxvYWRpbmc6IHRydWUgfSB9KTtcclxuXHJcbiAgbGV0IGNoYXJhSWQgPSBcIlwiO1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzXCIpXHJcbiAgICAuYWRkKHtcclxuICAgICAgLi4uZGF0YSxcclxuICAgICAgaW1hZ2U6IHR5cGVvZiBkYXRhLmltYWdlID09PSBcInN0cmluZ1wiID8gZGF0YS5pbWFnZSA6IFwiXCIsXHJcbiAgICAgIGNyZWF0ZWRBdDogZmlyZWJhc2UuZmlyZXN0b3JlLkZpZWxkVmFsdWUuc2VydmVyVGltZXN0YW1wKCksXHJcbiAgICAgIGxpa2VzQ291bnQ6IDAsXHJcbiAgICAgIGxpa2VzOiBbXSxcclxuICAgICAgZGlzbGlrZXM6IFtdLFxyXG4gICAgfSlcclxuICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgY2hhcmFJZCA9IHJlcy5pZDtcclxuICAgICAgY29uc3QgaW1hZ2VOYW1lID0gYCR7cmVzLmlkfSR7XCJfXCJ9JHtkYXRhLmZpcnN0bmFtZS50b0xvd2VyQ2FzZSgpfSR7XHJcbiAgICAgICAgZGF0YS5sYXN0bmFtZSAmJiBcIl9cIlxyXG4gICAgICB9JHtkYXRhLmxhc3RuYW1lICYmIGRhdGEubGFzdG5hbWUudG9Mb3dlckNhc2UoKX1gO1xyXG5cclxuICAgICAgaWYgKHR5cGVvZiBkYXRhLmltYWdlID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgc3RvcmFnZVxyXG4gICAgICAgICAgLnJlZihgJHthdXRoLmN1cnJlbnRVc2VyLnVpZH0vJHtpbWFnZU5hbWV9YClcclxuICAgICAgICAgIC5wdXQoZGF0YS5pbWFnZSlcclxuICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHN0b3JhZ2VcclxuICAgICAgICAgICAgICAucmVmKGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gICAgICAgICAgICAgIC5jaGlsZChpbWFnZU5hbWUpXHJcbiAgICAgICAgICAgICAgLmdldERvd25sb2FkVVJMKCk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4oKHVybCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gZGJcclxuICAgICAgICAgICAgICAuY29sbGVjdGlvbihcImNoYXJhY3RlcnNcIilcclxuICAgICAgICAgICAgICAuZG9jKGNoYXJhSWQpXHJcbiAgICAgICAgICAgICAgLnVwZGF0ZSh7IGltYWdlOiB1cmwgfSk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoXCJDaGFyYWN0ZXIgYWRkZWQgc3VjY2Vzc2Z1bGx5XCIpO1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgdHlwZTogdHlwZXMuQUREX0NIQVJBQ1RFUixcclxuICAgICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkNoYXJhY3RlciBhZGRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgICAgICAgIGNoYXJhY3RlcklkOiBjaGFyYUlkLFxyXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoXCJDaGFyYWN0ZXIgYWRkZWQgc3VjY2Vzc2Z1bGx5XCIpO1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IHR5cGVzLkFERF9DSEFSQUNURVIsXHJcbiAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiQ2hhcmFjdGVyIGFkZGVkIHN1Y2Nlc3NmdWxseVwiLFxyXG4gICAgICAgICAgICBjaGFyYWN0ZXJJZDogY2hhcmFJZCxcclxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgbWVzc2FnZS5lcnJvcihlcnIubWVzc2FnZSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBlZGl0Q2hhcmFjdGVyID0gKGRhdGEsIGlkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkaXNwYXRjaCh7IHR5cGU6IHR5cGVzLkVESVRfQ0hBUkFDVEVSLCBwYXlsb2FkOiB7IGxvYWRpbmdDaGFyYWN0ZXI6IHRydWUgfSB9KTtcclxuXHJcbiAgY29uc3QgaW1hZ2VOYW1lID0gYCR7aWR9JHtcIl9cIn0ke2RhdGEuZmlyc3RuYW1lLnRvTG93ZXJDYXNlKCl9JHtcclxuICAgIGRhdGEubGFzdG5hbWUgJiYgXCJfXCJcclxuICB9JHtkYXRhLmxhc3RuYW1lICYmIGRhdGEubGFzdG5hbWUudG9Mb3dlckNhc2UoKX1gO1xyXG5cclxuICBpZiAoZGF0YS5pbWFnZSAmJiB0eXBlb2YgZGF0YS5pbWFnZSA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgc3RvcmFnZVxyXG4gICAgICAucmVmKGAke2F1dGguY3VycmVudFVzZXIudWlkfS8ke2ltYWdlTmFtZX1gKVxyXG4gICAgICAucHV0KGRhdGEuaW1hZ2UpXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICByZXR1cm4gc3RvcmFnZVxyXG4gICAgICAgICAgLnJlZihhdXRoLmN1cnJlbnRVc2VyLnVpZClcclxuICAgICAgICAgIC5jaGlsZChpbWFnZU5hbWUpXHJcbiAgICAgICAgICAuZ2V0RG93bmxvYWRVUkwoKTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKHVybCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBkYlxyXG4gICAgICAgICAgLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzXCIpXHJcbiAgICAgICAgICAuZG9jKGlkKVxyXG4gICAgICAgICAgLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgIC4uLmRhdGEsXHJcbiAgICAgICAgICAgIGltYWdlOiB1cmwsXHJcbiAgICAgICAgICAgIHJlbGF0aXZlc0FycjogZGF0YS5yZWxhdGl2ZXMubWFwKChjKSA9PiBjLmNoYXJhY3Rlcl9pZCksXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IHR5cGVzLkVESVRfQ0hBUkFDVEVSLFxyXG4gICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkNoYXJhY3RlciBlZGl0ZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICAgIGxvYWRpbmdDaGFyYWN0ZXI6IGZhbHNlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBtZXNzYWdlLmVycm9yKGVyci5tZXNzYWdlKTtcclxuICAgICAgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGRiLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzXCIpXHJcbiAgICAgIC5kb2MoaWQpXHJcbiAgICAgIC51cGRhdGUoe1xyXG4gICAgICAgIC4uLmRhdGEsXHJcbiAgICAgICAgcmVsYXRpdmVzQXJyOiBkYXRhLnJlbGF0aXZlcy5tYXAoKGMpID0+IGMuY2hhcmFjdGVyX2lkKSxcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IHR5cGVzLkVESVRfQ0hBUkFDVEVSLFxyXG4gICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkNoYXJhY3RlciBlZGl0ZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICAgIGxvYWRpbmdDaGFyYWN0ZXI6IGZhbHNlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBtZXNzYWdlLmVycm9yKGVyci5tZXNzYWdlKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlbGV0ZUNoYXJhY3RlciA9IChpZCwgZmlyc3RuYW1lLCBsYXN0bmFtZSkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGlzcGF0Y2goeyB0eXBlOiB0eXBlcy5ERUxFVEVfQ0hBUkFDVEVSLCBwYXlsb2FkOiB7IGxvYWRpbmc6IHRydWUgfSB9KTtcclxuICBjb25zdCBpbWFnZU5hbWUgPSBgJHtpZH0ke1wiX1wifSR7Zmlyc3RuYW1lLnRvTG93ZXJDYXNlKCl9JHtsYXN0bmFtZSAmJiBcIl9cIn0ke1xyXG4gICAgbGFzdG5hbWUgJiYgbGFzdG5hbWUudG9Mb3dlckNhc2UoKVxyXG4gIH1gO1xyXG4gIGNvbnN0IGJhdGNoID0gZGIuYmF0Y2goKTtcclxuICBkYi5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc1wiKVxyXG4gICAgLmRvYyhpZClcclxuICAgIC5kZWxldGUoKVxyXG4gICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICBpZiAoc3RvcmFnZS5yZWYoYCR7YXV0aC5jdXJyZW50VXNlci51aWR9LyR7aW1hZ2VOYW1lfWApKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0b3JhZ2UucmVmKGAke2F1dGguY3VycmVudFVzZXIudWlkfS8ke2ltYWdlTmFtZX1gKS5kZWxldGUoKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgZGIuY29sbGVjdGlvbihcImNoYXB0ZXJzXCIpXHJcbiAgICAgICAgLndoZXJlKFwiY2hhcmFjdGVyc1wiLCBcImFycmF5LWNvbnRhaW5zXCIsIGlkKVxyXG4gICAgICAgIC5nZXQoKVxyXG4gICAgICAgIC50aGVuKChkb2NzKSA9PiB7XHJcbiAgICAgICAgICBkb2NzLmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgICAgICAgICBiYXRjaC51cGRhdGUoZGIuY29sbGVjdGlvbihcImNoYXB0ZXJzXCIpLmRvYyhkb2MuaWQpLCB7XHJcbiAgICAgICAgICAgICAgY2hhcmFjdGVyczogZG9jLmRhdGEoKS5jaGFyYWN0ZXJzLmZpbHRlcigoYykgPT4gYyAhPT0gaWQpLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgZGIuY29sbGVjdGlvbihcInN0b3JpZXNcIilcclxuICAgICAgICAgICAgLndoZXJlKFwic2Vjb25kYXJ5QXJyXCIsIFwiYXJyYXktY29udGFpbnNcIiwgaWQpXHJcbiAgICAgICAgICAgIC5nZXQoKVxyXG4gICAgICAgICAgICAudGhlbigoc3RvcmllcykgPT4ge1xyXG4gICAgICAgICAgICAgIHN0b3JpZXMuZm9yRWFjaCgoc3RvcnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGJhdGNoLnVwZGF0ZShkYi5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKS5kb2Moc3RvcnkuaWQpLCB7XHJcbiAgICAgICAgICAgICAgICAgIG1haW5DaGFyYWN0ZXJzOiBzdG9yeVxyXG4gICAgICAgICAgICAgICAgICAgIC5kYXRhKClcclxuICAgICAgICAgICAgICAgICAgICAubWFpbkNoYXJhY3RlcnMuZmlsdGVyKChjKSA9PiBjICE9PSBpZCksXHJcbiAgICAgICAgICAgICAgICAgIHNlY29uZGFyeUFycjogc3RvcnlcclxuICAgICAgICAgICAgICAgICAgICAuZGF0YSgpXHJcbiAgICAgICAgICAgICAgICAgICAgLnNlY29uZGFyeUFyci5maWx0ZXIoKGMpID0+IGMgIT09IGlkKSxcclxuICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5Q2hhcmFjdGVyczogc3RvcnlcclxuICAgICAgICAgICAgICAgICAgICAuZGF0YSgpXHJcbiAgICAgICAgICAgICAgICAgICAgLnNlY29uZGFyeUNoYXJhY3RlcnMuZmlsdGVyKChjKSA9PiBjLmlkICE9PSBpZCksXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGRiLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzXCIpXHJcbiAgICAgICAgICAgICAgICAud2hlcmUoXCJyZWxhdGl2ZXNBcnJcIiwgXCJhcnJheS1jb250YWluc1wiLCBpZClcclxuICAgICAgICAgICAgICAgIC5nZXQoKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKGNoYXJhY3RlcnMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgY2hhcmFjdGVycy5mb3JFYWNoKChjaGFyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmF0Y2gudXBkYXRlKGRiLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzXCIpLmRvYyhjaGFyLmlkKSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmVsYXRpdmVzQXJyOiBjaGFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5kYXRhKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbGF0aXZlc0Fyci5maWx0ZXIoKGMpID0+IGMgIT09IGlkKSxcclxuICAgICAgICAgICAgICAgICAgICAgIHJlbGF0aXZlczogY2hhclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZGF0YSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZWxhdGl2ZXMuZmlsdGVyKChjKSA9PiBjLmNoYXJhY3Rlcl9pZCAhPT0gaWQpLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGRiLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzTGlrZXNcIilcclxuICAgICAgICAgICAgICAgICAgICAud2hlcmUoXCJjaGFyYWN0ZXJJZFwiLCBcIj09XCIsIGlkKVxyXG4gICAgICAgICAgICAgICAgICAgIC5nZXQoKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChsaWtlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGlrZXMuZm9yRWFjaCgobGlrZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYXRjaC5kZWxldGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGIuY29sbGVjdGlvbihcImNoYXJhY3RlcnNMaWtlc1wiKS5kb2MobGlrZS5pZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgYmF0Y2guY29tbWl0KCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiB0eXBlcy5ERUxFVEVfQ0hBUkFDVEVSLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiQ2hhcmFjdGVyIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFyYUV4aXN0czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFVzZXJDaGFyYWN0ZXJzID0gKHVzZXJJZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGIuY29sbGVjdGlvbihcImNoYXJhY3RlcnNcIilcclxuICAgIC53aGVyZShcImF1dGhvcklkXCIsIFwiPT1cIiwgdXNlcklkKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigoZG9jcykgPT4ge1xyXG4gICAgICBsZXQgaXRlbXMgPSBbXTtcclxuICAgICAgZG9jcy5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgICAgICBpdGVtcyA9IFsuLi5pdGVtcywgeyBpZDogZG9jLmlkLCAuLi5kb2MuZGF0YSgpIH1dO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGl0ZW1zO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChpdGVtcykgPT4ge1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IHR5cGVzLkdFVF9VU0VSX0NIQVJBQ1RFUlMsIHBheWxvYWQ6IGl0ZW1zIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0RmF2b3JpdGVDaGFyYWN0ZXJzID0gKCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGIuY29sbGVjdGlvbihcImNoYXJhY3RlcnNMaWtlc1wiKVxyXG4gICAgLndoZXJlKFwic2VuZGVySWRcIiwgXCI9PVwiLCBhdXRoLmN1cnJlbnRVc2VyLnVpZClcclxuICAgIC5nZXQoKVxyXG4gICAgLnRoZW4oKGRvY3MpID0+IHtcclxuICAgICAgbGV0IGZhdkFyciA9IFtdO1xyXG4gICAgICBkb2NzLmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgICAgIGZhdkFyciA9IFsuLi5mYXZBcnIsIGRvYy5kYXRhKCkuY2hhcmFjdGVySWRdO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGZhdkFycjtcclxuICAgIH0pXHJcbiAgICAudGhlbigodXNlcnMpID0+IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gdXNlcnMubWFwKCh1c2VyKSA9PlxyXG4gICAgICAgIGRiLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzXCIpLmRvYyh1c2VyKS5nZXQoKVxyXG4gICAgICApO1xyXG4gICAgICBQcm9taXNlLmFsbChyZXN1bHQpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGxldCBmYXZVc2VycyA9IFtdO1xyXG4gICAgICAgIHJlcy5mb3JFYWNoKFxyXG4gICAgICAgICAgKGRvYykgPT4gKGZhdlVzZXJzID0gWy4uLmZhdlVzZXJzLCB7IGlkOiBkb2MuaWQsIC4uLmRvYy5kYXRhKCkgfV0pXHJcbiAgICAgICAgKTtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiB0eXBlcy5HRVRfRkFWT1JJVEVfQ0hBUkFDVEVSUyxcclxuICAgICAgICAgIHBheWxvYWQ6IGZhdlVzZXJzLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldENoYXJhY3RlcnNJblN0b3J5ID0gKGlkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKVxyXG4gICAgLmRvYyhpZClcclxuICAgIC5vblNuYXBzaG90KChkb2MpID0+IHtcclxuICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IHR5cGVzLkdFVF9TVE9SWV9DSEFSQUNURVJTLFxyXG4gICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgIHNlY29uZGFyeUNoYXJhY3RlcnM6IGRvYy5kYXRhKCkuc2Vjb25kYXJ5Q2hhcmFjdGVycyxcclxuICAgICAgICAgIG1haW5BcnI6IGRvYy5kYXRhKCkubWFpbkNoYXJhY3RlcnMsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuIiwiaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcclxuaW1wb3J0IFwiZmlyZWJhc2UvYXV0aFwiO1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcclxuaW1wb3J0IFwiZmlyZWJhc2Uvc3RvcmFnZVwiO1xyXG5cclxuY29uc3QgcHJvZENvbmZpZyA9IHtcclxuICBhcGlLZXk6IHByb2Nlc3MuZW52LkZJUkVCQVNFX0FQSV9LRVksXHJcbiAgYXV0aERvbWFpbjogcHJvY2Vzcy5lbnYuRklSRUJBU0VfQVVUSF9ET01BSU4sXHJcbiAgZGF0YWJhc2VVUkw6IHByb2Nlc3MuZW52LkZJUkVCQVNFX0RBVEFCQVNFX1VSTCxcclxuICBwcm9qZWN0SWQ6IHByb2Nlc3MuZW52LkZJUkVCQVNFX1BST0pFQ1RfSUQsXHJcbiAgc3RvcmFnZUJ1Y2tldDogcHJvY2Vzcy5lbnYuRklSRUJBU0VfU1RPUkFHRV9CVUNLRVQsXHJcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IHByb2Nlc3MuZW52LkZJUkVCQVNFX01FU1NBR0lOR19TRU5ERVJfSUQsXHJcbiAgYXBwSWQ6IHByb2Nlc3MuZW52LkZJUkVCQVNFX0FQUF9JRCxcclxufTtcclxuXHJcbmNvbnN0IGRldkNvbmZpZyA9IHtcclxuICBhcGlLZXk6IHByb2Nlc3MuZW52LkZJUkVCQVNFX0FQSV9LRVksXHJcbiAgYXV0aERvbWFpbjogcHJvY2Vzcy5lbnYuRklSRUJBU0VfQVVUSF9ET01BSU4sXHJcbiAgZGF0YWJhc2VVUkw6IHByb2Nlc3MuZW52LkZJUkVCQVNFX0RBVEFCQVNFX1VSTCxcclxuICBwcm9qZWN0SWQ6IHByb2Nlc3MuZW52LkZJUkVCQVNFX1BST0pFQ1RfSUQsXHJcbiAgc3RvcmFnZUJ1Y2tldDogcHJvY2Vzcy5lbnYuRklSRUJBU0VfU1RPUkFHRV9CVUNLRVQsXHJcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IHByb2Nlc3MuZW52LkZJUkVCQVNFX01FU1NBR0lOR19TRU5ERVJfSUQsXHJcbiAgYXBwSWQ6IHByb2Nlc3MuZW52LkZJUkVCQVNFX0FQUF9JRCxcclxufTtcclxuXHJcbmNvbnN0IGNvbmZpZyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IHByb2RDb25maWcgOiBkZXZDb25maWc7XHJcblxyXG5pZiAoIWZpcmViYXNlLmFwcHMubGVuZ3RoKSB7XHJcbiAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChjb25maWcpO1xyXG59XHJcblxyXG5jb25zdCBkYiA9IGZpcmViYXNlLmZpcmVzdG9yZSgpO1xyXG5jb25zdCBhdXRoID0gZmlyZWJhc2UuYXV0aCgpO1xyXG5jb25zdCBzdG9yYWdlID0gZmlyZWJhc2Uuc3RvcmFnZSgpO1xyXG5cclxuZXhwb3J0IHsgZGIsIGF1dGgsIHN0b3JhZ2UgfTtcclxuZXhwb3J0IGRlZmF1bHQgY29uZmlnO1xyXG4iLCJleHBvcnQgY29uc3QgQ0FURUdPUklFUyA9IFtcclxuICB7IG5hbWU6IFwiRHJhbWFcIiwgdmFsdWU6IFwiZHJhbWFcIiB9LFxyXG4gIHsgbmFtZTogXCJDb21lZHlcIiwgdmFsdWU6IFwiY29tZWR5XCIgfSxcclxuICB7IG5hbWU6IFwiSG9ycm9yXCIsIHZhbHVlOiBcImhvcnJvclwiIH0sXHJcbiAgeyBuYW1lOiBcIlJvbWFuY2VcIiwgdmFsdWU6IFwicm9tYW5jZVwiIH0sXHJcbiAgeyBuYW1lOiBcIlNjaS1maVwiLCB2YWx1ZTogXCJzY2ktZmlcIiB9LFxyXG4gIHsgbmFtZTogXCJGYW50YXN5XCIsIHZhbHVlOiBcImZhbnRhc3lcIiB9LFxyXG4gIHsgbmFtZTogXCJIdW1vclwiLCB2YWx1ZTogXCJodW1vclwiIH0sXHJcbiAgeyBuYW1lOiBcIkFjdGlvblwiLCB2YWx1ZTogXCJhY3Rpb25cIiB9LFxyXG4gIHsgbmFtZTogXCJUaHJpbGxlclwiLCB2YWx1ZTogXCJ0aHJpbGxlclwiIH0sXHJcbiAgeyBuYW1lOiBcIlN1cGVybmF0dXJhbFwiLCB2YWx1ZTogXCJzdXBlcm5hdHVyYWxcIiB9LFxyXG4gIHsgbmFtZTogXCJBZHZlbnR1cmVcIiwgdmFsdWU6IFwiYWR2ZW50dXJlXCIgfSxcclxuICB7IG5hbWU6IFwiTXlzdGVyeVwiLCB2YWx1ZTogXCJteXN0ZXJ5XCIgfSxcclxuICB7IG5hbWU6IFwiV2VzdGVyblwiLCB2YWx1ZTogXCJ3ZXN0ZXJuXCIgfSxcclxuICB7IG5hbWU6IFwiSGlzdG9yeVwiLCB2YWx1ZTogXCJoaXN0b3J5XCIgfSxcclxuICB7IG5hbWU6IFwiQ3JpbWVcIiwgdmFsdWU6IFwiY3JpbWVcIiB9LFxyXG4gIHsgbmFtZTogXCJGYW5maWN0aW9uXCIsIHZhbHVlOiBcImZhbmZpY3Rpb25cIiB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IENPUFlSSUdIVFMgPSBbXHJcbiAgeyBuYW1lOiBcIlB1YmxpYyBEb21haW5cIiwgdmFsdWU6IFwicHVibGljIGRvbWFpblwiIH0sXHJcbiAgeyBuYW1lOiBcIkFsbCBSaWdodHMgUmVzZXJ2ZWRcIiwgdmFsdWU6IFwiYWxsIHJpZ2h0cyByZXNlcnZlZFwiIH0sXHJcbiAgeyBuYW1lOiBcIkNyZWF0aXZlIENvbW1vbnNcIiwgdmFsdWU6IFwiY3JlYXRpdmUgY29tbW9uc1wiIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgTEFOR1VBR0VTID0gW1xyXG4gIHsgbmFtZTogXCJBZmFyXCIsIHZhbHVlOiBcImFhXCIgfSxcclxuICB7IG5hbWU6IFwiQWJraGF6aWFuXCIsIHZhbHVlOiBcImFiXCIgfSxcclxuICB7IG5hbWU6IFwiQXZlc3RhblwiLCB2YWx1ZTogXCJhZVwiIH0sXHJcbiAgeyBuYW1lOiBcIkFmcmlrYWFuc1wiLCB2YWx1ZTogXCJhZlwiIH0sXHJcbiAgeyBuYW1lOiBcIkFrYW5cIiwgdmFsdWU6IFwiYWtcIiB9LFxyXG4gIHsgbmFtZTogXCJBbWhhcmljXCIsIHZhbHVlOiBcImFtXCIgfSxcclxuICB7IG5hbWU6IFwiQXJhZ29uZXNlXCIsIHZhbHVlOiBcImFuXCIgfSxcclxuICB7IG5hbWU6IFwiQXJhYmljXCIsIHZhbHVlOiBcImFyXCIgfSxcclxuICB7IG5hbWU6IFwiQXNzYW1lc2VcIiwgdmFsdWU6IFwiYXNcIiB9LFxyXG4gIHsgbmFtZTogXCJBdmFyaWNcIiwgdmFsdWU6IFwiYXZcIiB9LFxyXG4gIHsgbmFtZTogXCJBeW1hcmFcIiwgdmFsdWU6IFwiYXlcIiB9LFxyXG4gIHsgbmFtZTogXCJBemVyYmFpamFuaVwiLCB2YWx1ZTogXCJhelwiIH0sXHJcbiAgeyBuYW1lOiBcIkJhc2hraXJcIiwgdmFsdWU6IFwiYmFcIiB9LFxyXG4gIHsgbmFtZTogXCJCZWxhcnVzaWFuXCIsIHZhbHVlOiBcImJlXCIgfSxcclxuICB7IG5hbWU6IFwiQnVsZ2FyaWFuXCIsIHZhbHVlOiBcImJnXCIgfSxcclxuICB7IG5hbWU6IFwiQmloYXJpXCIsIHZhbHVlOiBcImJoXCIgfSxcclxuICB7IG5hbWU6IFwiQmlzbGFtYVwiLCB2YWx1ZTogXCJiaVwiIH0sXHJcbiAgeyBuYW1lOiBcIkJhbWJhcmFcIiwgdmFsdWU6IFwiYm1cIiB9LFxyXG4gIHsgbmFtZTogXCJCZW5nYWxpXCIsIHZhbHVlOiBcImJuXCIgfSxcclxuICB7IG5hbWU6IFwiVGliZXRhblwiLCB2YWx1ZTogXCJib1wiIH0sXHJcbiAgeyBuYW1lOiBcIkJyZXRvblwiLCB2YWx1ZTogXCJiclwiIH0sXHJcbiAgeyBuYW1lOiBcIkJvc25pYW5cIiwgdmFsdWU6IFwiYnNcIiB9LFxyXG4gIHsgbmFtZTogXCJDYXRhbGFuXCIsIHZhbHVlOiBcImNhXCIgfSxcclxuICB7IG5hbWU6IFwiQ2hlY2hlblwiLCB2YWx1ZTogXCJjZVwiIH0sXHJcbiAgeyBuYW1lOiBcIkNoYW1vcnJvXCIsIHZhbHVlOiBcImNoXCIgfSxcclxuICB7IG5hbWU6IFwiQ29yc2ljYW5cIiwgdmFsdWU6IFwiY29cIiB9LFxyXG4gIHsgbmFtZTogXCJDcmVlXCIsIHZhbHVlOiBcImNyXCIgfSxcclxuICB7IG5hbWU6IFwiQ3plY2hcIiwgdmFsdWU6IFwiY3NcIiB9LFxyXG4gIHsgbmFtZTogXCJPbGQgQ2h1cmNoIFNsYXZvbmljXCIsIHZhbHVlOiBcImN1XCIgfSxcclxuICB7IG5hbWU6IFwiQ2h1dmFzaFwiLCB2YWx1ZTogXCJjdlwiIH0sXHJcbiAgeyBuYW1lOiBcIldlbHNoXCIsIHZhbHVlOiBcImN5XCIgfSxcclxuICB7IG5hbWU6IFwiRGFuaXNoXCIsIHZhbHVlOiBcImRhXCIgfSxcclxuICB7IG5hbWU6IFwiR2VybWFuXCIsIHZhbHVlOiBcImRlXCIgfSxcclxuICB7IG5hbWU6IFwiRGl2ZWhpXCIsIHZhbHVlOiBcImR2XCIgfSxcclxuICB7IG5hbWU6IFwiRHpvbmdraGFcdFwiLCB2YWx1ZTogXCJkelwiIH0sXHJcbiAgeyBuYW1lOiBcIkV3ZVwiLCB2YWx1ZTogXCJlZVwiIH0sXHJcbiAgeyBuYW1lOiBcIkdyZWVrXCIsIHZhbHVlOiBcImVsXCIgfSxcclxuICB7IG5hbWU6IFwiRW5nbGlzaFwiLCB2YWx1ZTogXCJlblwiIH0sXHJcbiAgeyBuYW1lOiBcIkVzcGVyYW50b1wiLCB2YWx1ZTogXCJlb1wiIH0sXHJcbiAgeyBuYW1lOiBcIlNwYW5pc2hcIiwgdmFsdWU6IFwiZXNcIiB9LFxyXG4gIHsgbmFtZTogXCJFc3RvbmlhblwiLCB2YWx1ZTogXCJldFwiIH0sXHJcbiAgeyBuYW1lOiBcIkJhc3F1ZVwiLCB2YWx1ZTogXCJldVwiIH0sXHJcbiAgeyBuYW1lOiBcIlBlcnNpYW5cIiwgdmFsdWU6IFwiZmFcIiB9LFxyXG4gIHsgbmFtZTogXCJGdWxhaFwiLCB2YWx1ZTogXCJmZlwiIH0sXHJcbiAgeyBuYW1lOiBcIkZpbm5pc2hcIiwgdmFsdWU6IFwiZmlcIiB9LFxyXG4gIHsgbmFtZTogXCJGaWppYW5cIiwgdmFsdWU6IFwiZmpcIiB9LFxyXG4gIHsgbmFtZTogXCJGYXJvZXNlXCIsIHZhbHVlOiBcImZvXCIgfSxcclxuICB7IG5hbWU6IFwiRnJlbmNoXCIsIHZhbHVlOiBcImZyXCIgfSxcclxuICB7IG5hbWU6IFwiV2VzdGVybiBGcmlzaWFuXCIsIHZhbHVlOiBcImZ5XCIgfSxcclxuICB7IG5hbWU6IFwiSXJpc2hcIiwgdmFsdWU6IFwiZ2FcIiB9LFxyXG4gIHsgbmFtZTogXCJTY290dGlzaCBHYWVsaWNcIiwgdmFsdWU6IFwiZ2RcIiB9LFxyXG4gIHsgbmFtZTogXCJHYWxpY2lhblwiLCB2YWx1ZTogXCJnbFwiIH0sXHJcbiAgeyBuYW1lOiBcIkd1YXJhbmlcIiwgdmFsdWU6IFwiZ25cIiB9LFxyXG4gIHsgbmFtZTogXCJHdWphcmF0aVwiLCB2YWx1ZTogXCJndVwiIH0sXHJcbiAgeyBuYW1lOiBcIk1hbnhcIiwgdmFsdWU6IFwiZ3ZcIiB9LFxyXG4gIHsgbmFtZTogXCJIYXVzYVwiLCB2YWx1ZTogXCJoYVwiIH0sXHJcbiAgeyBuYW1lOiBcIkhlYnJld1wiLCB2YWx1ZTogXCJoZVwiIH0sXHJcbiAgeyBuYW1lOiBcIkhpbmRpXCIsIHZhbHVlOiBcImhpXCIgfSxcclxuICB7IG5hbWU6IFwiSGlyaSBNb3R1XCIsIHZhbHVlOiBcImhvXCIgfSxcclxuICB7IG5hbWU6IFwiQ3JvYXRpYW5cIiwgdmFsdWU6IFwiaHJcIiB9LFxyXG4gIHsgbmFtZTogXCJIYWl0aWFuXCIsIHZhbHVlOiBcImh0XCIgfSxcclxuICB7IG5hbWU6IFwiSHVuZ2FyaWFuXCIsIHZhbHVlOiBcImh1XCIgfSxcclxuICB7IG5hbWU6IFwiQXJtZW5pYW5cIiwgdmFsdWU6IFwiaHlcIiB9LFxyXG4gIHsgbmFtZTogXCJIZXJlcm9cIiwgdmFsdWU6IFwiaHpcIiB9LFxyXG4gIHsgbmFtZTogXCJJbnRlcmxpbmd1YVwiLCB2YWx1ZTogXCJpYVwiIH0sXHJcbiAgeyBuYW1lOiBcIkluZG9uZXNpYW5cIiwgdmFsdWU6IFwiaWRcIiB9LFxyXG4gIHsgbmFtZTogXCJJbnRlcmxpbmd1ZVwiLCB2YWx1ZTogXCJpZVwiIH0sXHJcbiAgeyBuYW1lOiBcIklnYm9cIiwgdmFsdWU6IFwiaWdcIiB9LFxyXG4gIHsgbmFtZTogXCJTaWNodWFuIFlpXCIsIHZhbHVlOiBcImlpXCIgfSxcclxuICB7IG5hbWU6IFwiSW51cGlhcVwiLCB2YWx1ZTogXCJpa1wiIH0sXHJcbiAgeyBuYW1lOiBcIklkb1wiLCB2YWx1ZTogXCJpb1wiIH0sXHJcbiAgeyBuYW1lOiBcIkljZWxhbmRpY1wiLCB2YWx1ZTogXCJpc1wiIH0sXHJcbiAgeyBuYW1lOiBcIkl0YWxpYW5cIiwgdmFsdWU6IFwiaXRcIiB9LFxyXG4gIHsgbmFtZTogXCJJbnVrdGl0dXRcIiwgdmFsdWU6IFwiaXVcIiB9LFxyXG4gIHsgbmFtZTogXCJKYXBhbmVzZVwiLCB2YWx1ZTogXCJqYVwiIH0sXHJcbiAgeyBuYW1lOiBcIkphdmFuZXNlXCIsIHZhbHVlOiBcImp2XCIgfSxcclxuICB7IG5hbWU6IFwiR2VvcmdpYW5cIiwgdmFsdWU6IFwia2FcIiB9LFxyXG4gIHsgbmFtZTogXCJLb25nb1wiLCB2YWx1ZTogXCJrZ1wiIH0sXHJcbiAgeyBuYW1lOiBcIktpa3V5dVwiLCB2YWx1ZTogXCJraVwiIH0sXHJcbiAgeyBuYW1lOiBcIkt3YW55YW1hXCIsIHZhbHVlOiBcImtqXCIgfSxcclxuICB7IG5hbWU6IFwiS2F6YWtoXCIsIHZhbHVlOiBcImtrXCIgfSxcclxuICB7IG5hbWU6IFwiR3JlZW5sYW5kaWNcIiwgdmFsdWU6IFwia2xcIiB9LFxyXG4gIHsgbmFtZTogXCJLaG1lclwiLCB2YWx1ZTogXCJrbVwiIH0sXHJcbiAgeyBuYW1lOiBcIkthbm5hZGFcIiwgdmFsdWU6IFwia25cIiB9LFxyXG4gIHsgbmFtZTogXCJLb3JlYW5cIiwgdmFsdWU6IFwia29cIiB9LFxyXG4gIHsgbmFtZTogXCJLYW51cmlcIiwgdmFsdWU6IFwia3JcIiB9LFxyXG4gIHsgbmFtZTogXCJLYXNobWlyaVwiLCB2YWx1ZTogXCJrc1wiIH0sXHJcbiAgeyBuYW1lOiBcIkt1cmRpc2hcIiwgdmFsdWU6IFwia3VcIiB9LFxyXG4gIHsgbmFtZTogXCJLb21pXCIsIHZhbHVlOiBcImt2XCIgfSxcclxuICB7IG5hbWU6IFwiQ29ybmlzaFwiLCB2YWx1ZTogXCJrd1wiIH0sXHJcbiAgeyBuYW1lOiBcIktpcmdoaXpcIiwgdmFsdWU6IFwia3lcIiB9LFxyXG4gIHsgbmFtZTogXCJMYXRpblwiLCB2YWx1ZTogXCJsYVwiIH0sXHJcbiAgeyBuYW1lOiBcIkx1eGVtYm91cmdpc2hcIiwgdmFsdWU6IFwibGJcIiB9LFxyXG4gIHsgbmFtZTogXCJHYW5kYVwiLCB2YWx1ZTogXCJsZ1wiIH0sXHJcbiAgeyBuYW1lOiBcIkxpbWJ1cmdpc2hcIiwgdmFsdWU6IFwibGlcIiB9LFxyXG4gIHsgbmFtZTogXCJMaW5nYWxhXCIsIHZhbHVlOiBcImxuXCIgfSxcclxuICB7IG5hbWU6IFwiTGFvXCIsIHZhbHVlOiBcImxvXCIgfSxcclxuICB7IG5hbWU6IFwiTGl0aHVhbmlhblwiLCB2YWx1ZTogXCJsdFwiIH0sXHJcbiAgeyBuYW1lOiBcIkx1YmFcIiwgdmFsdWU6IFwibHVcIiB9LFxyXG4gIHsgbmFtZTogXCJMYXR2aWFuXCIsIHZhbHVlOiBcImx2XCIgfSxcclxuICB7IG5hbWU6IFwiTWFsYWdhc3lcIiwgdmFsdWU6IFwibWdcIiB9LFxyXG4gIHsgbmFtZTogXCJNYXJzaGFsbGVzZVwiLCB2YWx1ZTogXCJtaFwiIH0sXHJcbiAgeyBuYW1lOiBcIk3EgW9yaVwiLCB2YWx1ZTogXCJtaVwiIH0sXHJcbiAgeyBuYW1lOiBcIk1hY2Vkb25pYW5cIiwgdmFsdWU6IFwibWtcIiB9LFxyXG4gIHsgbmFtZTogXCJNYWxheWFsYW1cIiwgdmFsdWU6IFwibWxcIiB9LFxyXG4gIHsgbmFtZTogXCJNb25nb2xpYW5cIiwgdmFsdWU6IFwibW5cIiB9LFxyXG4gIHsgbmFtZTogXCJNb2xkYXZpYW5cIiwgdmFsdWU6IFwibW9cIiB9LFxyXG4gIHsgbmFtZTogXCJNYXJhdGhpXCIsIHZhbHVlOiBcIm1yXCIgfSxcclxuICB7IG5hbWU6IFwiTWFsYXlcIiwgdmFsdWU6IFwibXNcIiB9LFxyXG4gIHsgbmFtZTogXCJNYWx0ZXNlXCIsIHZhbHVlOiBcIm10XCIgfSxcclxuICB7IG5hbWU6IFwiQnVybWVzZVwiLCB2YWx1ZTogXCJteVwiIH0sXHJcbiAgeyBuYW1lOiBcIk5hdXJ1XCIsIHZhbHVlOiBcIm5hXCIgfSxcclxuICB7IG5hbWU6IFwiTm9yd2VnaWFuIEJva23DpWxcIiwgdmFsdWU6IFwibmJcIiB9LFxyXG4gIHsgbmFtZTogXCJOb3J0aCBOZGViZWxlXCIsIHZhbHVlOiBcIm5kXCIgfSxcclxuICB7IG5hbWU6IFwiTmVwYWxpXCIsIHZhbHVlOiBcIm5lXCIgfSxcclxuICB7IG5hbWU6IFwiTmRvbmdhXCIsIHZhbHVlOiBcIm5nXCIgfSxcclxuICB7IG5hbWU6IFwiRHV0Y2hcIiwgdmFsdWU6IFwibmxcIiB9LFxyXG4gIHsgbmFtZTogXCJOb3J3ZWdpYW4gTnlub3Jza1wiLCB2YWx1ZTogXCJublwiIH0sXHJcbiAgeyBuYW1lOiBcIk5vcndlZ2lhblwiLCB2YWx1ZTogXCJub1wiIH0sXHJcbiAgeyBuYW1lOiBcIlNvdXRoIE5kZWJlbGVcIiwgdmFsdWU6IFwibnJcIiB9LFxyXG4gIHsgbmFtZTogXCJOYXZham9cIiwgdmFsdWU6IFwibnZcIiB9LFxyXG4gIHsgbmFtZTogXCJDaGljaGV3YVwiLCB2YWx1ZTogXCJueVwiIH0sXHJcbiAgeyBuYW1lOiBcIk9jY2l0YW5cIiwgdmFsdWU6IFwib2NcIiB9LFxyXG4gIHsgbmFtZTogXCJPamlid2FcIiwgdmFsdWU6IFwib2pcIiB9LFxyXG4gIHsgbmFtZTogXCJPcm9tb1wiLCB2YWx1ZTogXCJvbVwiIH0sXHJcbiAgeyBuYW1lOiBcIk9yaXlhXCIsIHZhbHVlOiBcIm9yXCIgfSxcclxuICB7IG5hbWU6IFwiT3NzZXRpYW5cIiwgdmFsdWU6IFwib3NcIiB9LFxyXG4gIHsgbmFtZTogXCJQYW5qYWJpXCIsIHZhbHVlOiBcInBhXCIgfSxcclxuICB7IG5hbWU6IFwiUMSBbGlcIiwgdmFsdWU6IFwicGlcIiB9LFxyXG4gIHsgbmFtZTogXCJQb2xpc2hcIiwgdmFsdWU6IFwicGxcIiB9LFxyXG4gIHsgbmFtZTogXCJQYXNodG9cIiwgdmFsdWU6IFwicHNcIiB9LFxyXG4gIHsgbmFtZTogXCJQb3J0dWd1ZXNlXCIsIHZhbHVlOiBcInB0XCIgfSxcclxuICB7IG5hbWU6IFwiUXVlY2h1YVwiLCB2YWx1ZTogXCJxdVwiIH0sXHJcbiAgeyBuYW1lOiBcIlJldW5pb25lc2VcIiwgdmFsdWU6IFwicmNcIiB9LFxyXG4gIHsgbmFtZTogXCJSb21hbnNoXCIsIHZhbHVlOiBcInJtXCIgfSxcclxuICB7IG5hbWU6IFwiS2lydW5kaVwiLCB2YWx1ZTogXCJyblwiIH0sXHJcbiAgeyBuYW1lOiBcIlJvbWFuaWFuXCIsIHZhbHVlOiBcInJvXCIgfSxcclxuICB7IG5hbWU6IFwiUnVzc2lhblwiLCB2YWx1ZTogXCJydVwiIH0sXHJcbiAgeyBuYW1lOiBcIktpbnlhcndhbmRhXCIsIHZhbHVlOiBcInJ3XCIgfSxcclxuICB7IG5hbWU6IFwiU2Fuc2tyaXRcIiwgdmFsdWU6IFwic2FcIiB9LFxyXG4gIHsgbmFtZTogXCJTYXJkaW5pYW5cIiwgdmFsdWU6IFwic2NcIiB9LFxyXG4gIHsgbmFtZTogXCJTaW5kaGlcIiwgdmFsdWU6IFwic2RcIiB9LFxyXG4gIHsgbmFtZTogXCJOb3J0aGVybiBTYW1pXCIsIHZhbHVlOiBcInNlXCIgfSxcclxuICB7IG5hbWU6IFwiU2FuZ29cIiwgdmFsdWU6IFwic2dcIiB9LFxyXG4gIHsgbmFtZTogXCJTZXJiby1Dcm9hdGlhblwiLCB2YWx1ZTogXCJzaFwiIH0sXHJcbiAgeyBuYW1lOiBcIlNpbmhhbGVzZVwiLCB2YWx1ZTogXCJzaVwiIH0sXHJcbiAgeyBuYW1lOiBcIlNsb3Zha1wiLCB2YWx1ZTogXCJza1wiIH0sXHJcbiAgeyBuYW1lOiBcIlNsb3ZlbmlhblwiLCB2YWx1ZTogXCJzbFwiIH0sXHJcbiAgeyBuYW1lOiBcIlNhbW9hblwiLCB2YWx1ZTogXCJzbVwiIH0sXHJcbiAgeyBuYW1lOiBcIlNob25hXCIsIHZhbHVlOiBcInNuXCIgfSxcclxuICB7IG5hbWU6IFwiU29tYWxpXCIsIHZhbHVlOiBcInNvXCIgfSxcclxuICB7IG5hbWU6IFwiQWxiYW5pYW5cIiwgdmFsdWU6IFwic3FcIiB9LFxyXG4gIHsgbmFtZTogXCJTZXJiaWFuXCIsIHZhbHVlOiBcInNyXCIgfSxcclxuICB7IG5hbWU6IFwiU3dhdGlcIiwgdmFsdWU6IFwic3NcIiB9LFxyXG4gIHsgbmFtZTogXCJTb3Rob1wiLCB2YWx1ZTogXCJzdFwiIH0sXHJcbiAgeyBuYW1lOiBcIlN1bmRhbmVzZVwiLCB2YWx1ZTogXCJzdVwiIH0sXHJcbiAgeyBuYW1lOiBcIlN3ZWRpc2hcIiwgdmFsdWU6IFwic3ZcIiB9LFxyXG4gIHsgbmFtZTogXCJTd2FoaWxpXCIsIHZhbHVlOiBcInN3XCIgfSxcclxuICB7IG5hbWU6IFwiVGFtaWxcIiwgdmFsdWU6IFwidGFcIiB9LFxyXG4gIHsgbmFtZTogXCJUZWx1Z3VcIiwgdmFsdWU6IFwidGVcIiB9LFxyXG4gIHsgbmFtZTogXCJUYWppa1wiLCB2YWx1ZTogXCJ0Z1wiIH0sXHJcbiAgeyBuYW1lOiBcIlRoYWlcIiwgdmFsdWU6IFwidGhcIiB9LFxyXG4gIHsgbmFtZTogXCJUaWdyaW55YVwiLCB2YWx1ZTogXCJ0aVwiIH0sXHJcbiAgeyBuYW1lOiBcIlR1cmttZW5cIiwgdmFsdWU6IFwidGtcIiB9LFxyXG4gIHsgbmFtZTogXCJUYWdhbG9nXCIsIHZhbHVlOiBcInRsXCIgfSxcclxuICB7IG5hbWU6IFwiVHN3YW5hXCIsIHZhbHVlOiBcInRuXCIgfSxcclxuICB7IG5hbWU6IFwiVG9uZ2FcIiwgdmFsdWU6IFwidG9cIiB9LFxyXG4gIHsgbmFtZTogXCJUdXJraXNoXCIsIHZhbHVlOiBcInRyXCIgfSxcclxuICB7IG5hbWU6IFwiVHNvbmdhXCIsIHZhbHVlOiBcInRzXCIgfSxcclxuICB7IG5hbWU6IFwiVGF0YXJcIiwgdmFsdWU6IFwidHRcIiB9LFxyXG4gIHsgbmFtZTogXCJUd2lcIiwgdmFsdWU6IFwidHdcIiB9LFxyXG4gIHsgbmFtZTogXCJUYWhpdGlhblwiLCB2YWx1ZTogXCJ0eVwiIH0sXHJcbiAgeyBuYW1lOiBcIlVpZ2h1clwiLCB2YWx1ZTogXCJ1Z1wiIH0sXHJcbiAgeyBuYW1lOiBcIlVrcmFpbmlhblwiLCB2YWx1ZTogXCJ1a1wiIH0sXHJcbiAgeyBuYW1lOiBcIlVyZHVcIiwgdmFsdWU6IFwidXJcIiB9LFxyXG4gIHsgbmFtZTogXCJVemJla1wiLCB2YWx1ZTogXCJ1elwiIH0sXHJcbiAgeyBuYW1lOiBcIlZlbmRhXCIsIHZhbHVlOiBcInZlXCIgfSxcclxuICB7IG5hbWU6IFwiVmnDqnQgTmFtZXNlXCIsIHZhbHVlOiBcInZpXCIgfSxcclxuICB7IG5hbWU6IFwiVm9sYXDDvGtcIiwgdmFsdWU6IFwidm9cIiB9LFxyXG4gIHsgbmFtZTogXCJXYWxsb29uXCIsIHZhbHVlOiBcIndhXCIgfSxcclxuICB7IG5hbWU6IFwiV29sb2ZcIiwgdmFsdWU6IFwid29cIiB9LFxyXG4gIHsgbmFtZTogXCJYaG9zYVwiLCB2YWx1ZTogXCJ4aFwiIH0sXHJcbiAgeyBuYW1lOiBcIllpZGRpc2hcIiwgdmFsdWU6IFwieWlcIiB9LFxyXG4gIHsgbmFtZTogXCJZb3J1YmFcIiwgdmFsdWU6IFwieW9cIiB9LFxyXG4gIHsgbmFtZTogXCJaaHVhbmdcIiwgdmFsdWU6IFwiemFcIiB9LFxyXG4gIHsgbmFtZTogXCJDaGluZXNlXCIsIHZhbHVlOiBcInpoXCIgfSxcclxuICB7IG5hbWU6IFwiWnVsdVwiLCB2YWx1ZTogXCJ6dVwiIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgU1RBVFVTID0gW1xyXG4gIHsgbmFtZTogXCJJbiBQcm9ncmVzc1wiLCB2YWx1ZTogXCJpbiBwcm9ncmVzc1wiIH0sXHJcbiAgeyBuYW1lOiBcIkluIEhpYXR1c1wiLCB2YWx1ZTogXCJpbiBoaWF0dXNcIiB9LFxyXG4gIHsgbmFtZTogXCJDb21wbGV0ZWRcIiwgdmFsdWU6IFwiY29tcGxldGVkXCIgfSxcclxuXTtcclxuXHJcbi8vIFRZUEVTXHJcbmV4cG9ydCBjb25zdCB0eXBlcyA9IHtcclxuICBHRVRfUFJPRklMRTogXCJHRVRfUFJPRklMRVwiLFxyXG4gIExPR0lOOiBcIkxPR0lOXCIsXHJcbiAgUkVHSVNURVI6IFwiUkVHSVNURVJcIixcclxuICBHRVRfU1RPUlk6IFwiR0VUX1NUT1JZXCIsXHJcbiAgR0VUX1VTRVJfU1RPUklFUzogXCJHRVRfVVNFUl9TVE9SSUVTXCIsXHJcbiAgR0VUX0ZBVk9SSVRFX1NUT1JJRVM6IFwiR0VUX0ZBVk9SSVRFX1NUT1JJRVNcIixcclxuICBBRERfU1RPUlk6IFwiQUREX1NUT1JZXCIsXHJcbiAgRURJVF9TVE9SWTogXCJFRElUX1NUT1JZXCIsXHJcbiAgREVMRVRFX1NUT1JZOiBcIkRFTEVURV9TVE9SWVwiLFxyXG4gIElTX1NUT1JZX0ZBVk9SSVRFOiBcIklTX1NUT1JZX0ZBVk9SSVRFXCIsXHJcbiAgR0VUX0NIQVBURVI6IFwiR0VUX0NIQVBURVJcIixcclxuICBBRERfQ0hBUFRFUjogXCJBRERfQ0hBUFRFUlwiLFxyXG4gIEVESVRfQ0hBUFRFUjogXCJFRElUX0NIQVBURVJcIixcclxuICBERUxFVEVfQ0hBUFRFUjogXCJERUxFVEVfQ0hBUFRFUlwiLFxyXG4gIEdFVF9DSEFQVEVSUzogXCJHRVRfQ0hBUFRFUlNcIixcclxuICBBRERfQ0hBUkFDVEVSOiBcIkFERF9DSEFSQUNURVJcIixcclxuICBHRVRfQ0hBUkFDVEVSOiBcIkdFVF9DSEFSQUNURVJcIixcclxuICBFRElUX0NIQVJBQ1RFUjogXCJFRElUX0NIQVJBQ1RFUlwiLFxyXG4gIERFTEVURV9DSEFSQUNURVI6IFwiREVMRVRFX0NIQVJBQ1RFUlwiLFxyXG4gIEdFVF9VU0VSX0NIQVJBQ1RFUlM6IFwiR0VUX1VTRVJfQ0hBUkFDVEVSU1wiLFxyXG4gIEdFVF9VU0VSX0xPQ0FUSU9OUzogXCJHRVRfVVNFUl9MT0NBVElPTlNcIixcclxuICBHRVRfRkFWT1JJVEVfQ0hBUkFDVEVSUzogXCJHRVRfRkFWT1JJVEVfQ0hBUkFDVEVSU1wiLFxyXG4gIEdFVF9TVE9SWV9DSEFSQUNURVJTOiBcIkdFVF9TVE9SWV9DSEFSQUNURVJTXCIsXHJcbiAgQUREX0xPQ0FUSU9OOiBcIkFERF9MT0NBVElPTlwiLFxyXG4gIEdFVF9MT0NBVElPTjogXCJHRVRfTE9DQVRJT05cIixcclxuICBFRElUX0xPQ0FUSU9OOiBcIkVESVRfTE9DQVRJT05cIixcclxuICBHRVRfQ09NTUVOVFM6IFwiR0VUX0NPTU1FTlRTXCIsXHJcbiAgR0VUX0ZBVk9SSVRFX0FVVEhPUlM6IFwiR0VUX0ZBVk9SSVRFX0FVVEhPUlNcIixcclxuICBHRVRfU1RPUllfTE9DQVRJT05TOiBcIkdFVF9TVE9SWV9MT0NBVElPTlNcIixcclxuICBHRVRfRk9MTE9XRVJTOiBcIkdFVF9GT0xMT1dFUlNcIixcclxuICBESVNQQVRDSF9FUlJPUjogXCJESVNQQVRDSF9FUlJPUlwiLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9QUk9GSUxFID0gXCJHRVRfUFJPRklMRVwiO1xyXG5leHBvcnQgY29uc3QgTE9HSU4gPSBcIkxPR0lOXCI7XHJcbmV4cG9ydCBjb25zdCBSRUdJU1RFUiA9IFwiUkVHSVNURVJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfU1RPUlkgPSBcIkdFVF9TVE9SWVwiO1xyXG5leHBvcnQgY29uc3QgR0VUX1VTRVJfU1RPUklFUyA9IFwiR0VUX1VTRVJfU1RPUklFU1wiO1xyXG5leHBvcnQgY29uc3QgR0VUX0ZBVk9SSVRFX1NUT1JJRVMgPSBcIkdFVF9GQVZPUklURV9TVE9SSUVTXCI7XHJcbmV4cG9ydCBjb25zdCBBRERfU1RPUlkgPSBcIkFERF9TVE9SWVwiO1xyXG5leHBvcnQgY29uc3QgRURJVF9TVE9SWSA9IFwiRURJVF9TVE9SWVwiO1xyXG5leHBvcnQgY29uc3QgREVMRVRFX1NUT1JZID0gXCJERUxFVEVfU1RPUllcIjtcclxuZXhwb3J0IGNvbnN0IElTX1NUT1JZX0ZBVk9SSVRFID0gXCJJU19TVE9SWV9GQVZPUklURVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9DSEFQVEVSID0gXCJHRVRfQ0hBUFRFUlwiO1xyXG5leHBvcnQgY29uc3QgQUREX0NIQVBURVIgPSBcIkFERF9DSEFQVEVSXCI7XHJcbmV4cG9ydCBjb25zdCBFRElUX0NIQVBURVIgPSBcIkVESVRfQ0hBUFRFUlwiO1xyXG5leHBvcnQgY29uc3QgREVMRVRFX0NIQVBURVIgPSBcIkRFTEVURV9DSEFQVEVSXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfQ0hBUFRFUlMgPSBcIkdFVF9DSEFQVEVSU1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9DSEFSQUNURVIgPSBcIkFERF9DSEFSQUNURVJcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9DSEFSQUNURVIgPSBcIkdFVF9DSEFSQUNURVJcIjtcclxuZXhwb3J0IGNvbnN0IEVESVRfQ0hBUkFDVEVSID0gXCJFRElUX0NIQVJBQ1RFUlwiO1xyXG5leHBvcnQgY29uc3QgR0VUX1VTRVJfQ0hBUkFDVEVSUyA9IFwiR0VUX1VTRVJfQ0hBUkFDVEVSU1wiO1xyXG5leHBvcnQgY29uc3QgR0VUX1VTRVJfTE9DQVRJT05TID0gXCJHRVRfVVNFUl9MT0NBVElPTlNcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9GQVZPUklURV9DSEFSQUNURVJTID0gXCJHRVRfRkFWT1JJVEVfQ0hBUkFDVEVSU1wiO1xyXG5leHBvcnQgY29uc3QgR0VUX1NUT1JZX0NIQVJBQ1RFUlMgPSBcIkdFVF9TVE9SWV9DSEFSQUNURVJTXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX0xPQ0FUSU9OID0gXCJBRERfTE9DQVRJT05cIjtcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfRkFWT1JJVEVfQVVUSE9SUyA9IFwiR0VUX0ZBVk9SSVRFX0FVVEhPUlNcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9GT0xMT1dFUlMgPSBcIkdFVF9GT0xMT1dFUlNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBESVNQQVRDSF9FUlJPUiA9IFwiRElTUEFUQ0hfRVJST1JcIjtcclxuIiwiZXhwb3J0IGNvbnN0IGR1bW15ID0ge1xyXG4gIHBlcnNvbjpcclxuICAgIFwiaHR0cHM6Ly9pLnBpbmltZy5jb20vNTY0eC83MC81MC9hMy83MDUwYTMwY2M2MWU4YTdmM2Y4Njc3ZWJmOTUwNWRiNy5qcGdcIixcclxuICBjb3ZlcjpcclxuICAgIFwiaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvMzg4MTEwNC9wZXhlbHMtcGhvdG8tMzg4MTEwNC5qcGVnP2F1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2ImZHByPTImaD02NTAmdz05NDBcIixcclxuICBuYW1lOiBcIkFpc2h3YXJ5YSBSYWlcIixcclxuICBwb3N0ZXI6IFwiaHR0cHM6Ly9pbWFnZXMtbmEuc3NsLWltYWdlcy1hbWF6b24uY29tL2ltYWdlcy9JLzgxaDJnV1BUWUpMLmpwZ1wiLFxyXG4gIGF2YXRhcjogXCJodHRwczovL2JpcC5jbnJzLmZyL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzExL3VzZXIuanBnXCIsXHJcbiAgbm9JbWFnZTogXCJodHRwczovL2kuc3RhY2suaW1ndXIuY29tL3k5RHBULmpwZ1wiLFxyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2FwcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9hdXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2ZpcmVzdG9yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9zdG9yYWdlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzLWltYWdlLXVybFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9