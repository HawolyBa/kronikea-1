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
      lineNumber: 5,
      columnNumber: 5
    }
  }, type === "add" && __jsx("span", {
    onClick: () => removeCharacter(character.id),
    className: "remove-btn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, "x"), __jsx("div", {
    className: "img-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: character === null || character === void 0 ? void 0 : character.image,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  })), __jsx("figcaption", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, `${character === null || character === void 0 ? void 0 : character.firstname} ${character === null || character === void 0 ? void 0 : character.lastname}`), type === "favorites" && __jsx("span", {
    className: "author",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, "Author: ", character === null || character === void 0 ? void 0 : character.authorName), (type === "add" || type === "show") && __jsx("span", {
    className: "author",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
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
  initialValues
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
      lineNumber: 21,
      columnNumber: 5
    }
  }, __jsx(_ImageRow__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "image",
    form: form,
    itemImage: character === null || character === void 0 ? void 0 : character.image,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    align: "bottom",
    gutter: [24, 24],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 8,
    xs: 24,
    sm: 24,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
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
      lineNumber: 33,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 8,
    xs: 24,
    sm: 24,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
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
      lineNumber: 48,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 8,
    xs: 24,
    sm: 24,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
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
      lineNumber: 53,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    gutter: [24, 24],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 8,
    sm: 24,
    xs: 24,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "gender",
    label: "Gender",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 8,
    sm: 24,
    xs: 24,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "occupation",
    label: "Occupation",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
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
    name: "residence",
    label: "Residence",
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
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    gutter: [24, 24],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 8,
    xs: 24,
    sm: 24,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    label: "Ethnicity",
    name: "ethnicity",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 8,
    xs: 24,
    sm: 24,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    label: "Group",
    name: "group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 4,
    xs: 24,
    sm: 24,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    label: "Age",
    name: "age",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["InputNumber"], {
    min: 0,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
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
      lineNumber: 91,
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
      lineNumber: 106,
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
      lineNumber: 116,
      columnNumber: 9
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 7
    }
  }), __jsx(_Relatives__WEBPACK_IMPORTED_MODULE_2__["default"], {
    character: character && character,
    form: form,
    characters: characters,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 7
    }
  }), type === "add" ? loadingCharacter ? __jsx("button", {
    disabled: true,
    className: "spin-btn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Spin"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 13
    }
  })) : __jsx("button", {
    type: "submit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 11
    }
  }, "Create") : loadingCharacter ? __jsx("button", {
    disabled: true,
    className: "spin-btn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Spin"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 11
    }
  })) : __jsx("button", {
    type: "submit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 9
    }
  }, "Edit"));
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
    props.addCharacter(_objectSpread(_objectSpread({}, values), {}, {
      authorId: auth.user.uid,
      authorName: auth.user.username
    }));
  };

  return __jsx(_components_hoc_LoadingScreen__WEBPACK_IMPORTED_MODULE_6__["default"], {
    loading: auth.isLoading,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 5
    }
  }, __jsx(_components_hoc_RedirectComp__WEBPACK_IMPORTED_MODULE_7__["default"], {
    condition: auth.user,
    type: "redirect",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "new-character custom-form",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "inner",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }, __jsx("h2", {
    className: "side-heading",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
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
      lineNumber: 59,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb21tb24vQ2hhcmFjdGVyQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvcm1zL0NoYXJhY3RlckZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mb3Jtcy9JbWFnZVJvdy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvcm1zL1JhZGlvQnV0dG9uLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZm9ybXMvUmVsYXRpdmVzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZm9ybXMvVXBsb2FkSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9ob2MvTG9hZGluZ1NjcmVlbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hvYy9SZWRpcmVjdENvbXAuanMiLCJ3ZWJwYWNrOi8vLy4vaG9va3MvdXNlckhvb2tzLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2NoYXJhY3Rlci9uZXcuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWN0aW9ucy9jaGFyYWN0ZXJzQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9mYkNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFudC1kZXNpZ24vaWNvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2UvYXBwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2UvYXV0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL2ZpcmVzdG9yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL3N0b3JhZ2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpcy1pbWFnZS11cmxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiJdLCJuYW1lcyI6WyJDaGFyYWN0ZXJDYXJkIiwiY2hhcmFjdGVyIiwidHlwZSIsInJlbW92ZUNoYXJhY3RlciIsImlkIiwiaW1hZ2UiLCJmaXJzdG5hbWUiLCJsYXN0bmFtZSIsImF1dGhvck5hbWUiLCJyZWxhdGlvbiIsIkNoYXJhY3RlckZvcm0iLCJmb3JtIiwiY2hhcmFjdGVycyIsInN1Ym1pdCIsIm9uRmFpbGVkIiwidmlzaWJpbGl0eSIsInNldFZpc2liaWxpdHkiLCJsb2FkaW5nQ2hhcmFjdGVyIiwiaW5pdGlhbFZhbHVlcyIsInJlcXVpcmVkIiwibWVzc2FnZSIsIm1heCIsIm1pblJvd3MiLCJJbWFnZVJvdyIsIml0ZW1JbWFnZSIsIm5hbWUiLCJsaW5rVmlzaWJsZSIsInNldExpbmtWaXNpYmxlIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVwbG9hZFZpc2libGUiLCJzZXRVcGxvYWRWaXNpYmxlIiwic2hvd0xpbmsiLCJzZXRGaWVsZHNWYWx1ZSIsInNob3dVcGxvYWQiLCJ2YWxpZGF0b3IiLCJfIiwidmFsdWUiLCJpc0ltYWdlVXJsIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJFcnJvciIsIlJhZGlvQnV0b24iLCJsZyIsInNtIiwieHMiLCJtZCIsImxhYmVsIiwibnVtMSIsIm51bTIiLCJsYWJlbDEiLCJsYWJlbDIiLCJzZXRGdW5jIiwidmFsIiwiT3B0aW9uIiwiU2VsZWN0IiwiUmVsYXRpdmVzIiwicmVsYXRpb25zIiwic2V0UmVsYXRpb25zIiwicmVsYXRpdmVzIiwiY3VycmVudENoYXIiLCJzZXRDdXJyZW50Q2hhciIsImN1cnJlbnRSZWwiLCJzZXRDdXJyZW50UmVsIiwic2VsZWN0ZWRDaGFyYWN0ZXJzIiwic2V0U2VsZWN0ZWRDaGFyYWN0ZXJzIiwic2VsZWN0ZWRBcnIiLCJzZXRTZWxlY3RlZEFyciIsIm1hcCIsImMiLCJjaGFyYWN0ZXJfaWQiLCJzaG93RXJyb3JSZWwiLCJzZXRTaG93RXJyb3JSZWwiLCJzaG93RXJyb3JDaGFyIiwic2V0U2hvd0Vycm9yQ2hhciIsImFkZFJlbGF0aW9uIiwibmV3UmVsYXRpb25zIiwiZmluZCIsInVzZUVmZmVjdCIsImxlbmd0aCIsImNoYXIiLCJmaWx0ZXIiLCJpbmNsdWRlcyIsImUiLCJ0YXJnZXQiLCJyZWwiLCJnZXRCYXNlNjQiLCJpbWciLCJjYWxsYmFjayIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJhZGRFdmVudExpc3RlbmVyIiwicmVzdWx0IiwicmVhZEFzRGF0YVVSTCIsImJlZm9yZVVwbG9hZCIsImZpbGUiLCJpc0pwZ09yUG5nIiwiZXJyb3IiLCJpc0x0Mk0iLCJzaXplIiwiVXBsb2FkSW1hZ2UiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImltYWdlVXJsIiwic2V0SW1hZ2VVcmwiLCJoYW5kbGVDaGFuZ2UiLCJpbmZvIiwic3RhdHVzIiwib3JpZ2luRmlsZU9iaiIsInVwbG9hZEJ1dHRvbiIsIm1hcmdpblRvcCIsInNob3dSZW1vdmVJY29uIiwicmVtb3ZlSWNvbiIsIndpZHRoIiwiaGVpZ2h0Iiwib2JqZWN0Rml0IiwiZ2V0RmllbGRWYWx1ZSIsIkxvYWRpbmdTY3JlZW4iLCJjaGlsZHJlbiIsIlJlZGlyZWN0Q29tcCIsImNvbmRpdGlvbiIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImF1dGhDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIlByb3ZpZGVBdXRoIiwiYXV0aCIsInVzZVByb3ZpZGVBdXRoIiwidXNlQXV0aCIsInVzZUNvbnRleHQiLCJ1c2VyIiwic2V0VXNlciIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsInNpZ25pbiIsImVtYWlsIiwicGFzc3dvcmQiLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsInRoZW4iLCJyZXNwb25zZSIsInNpZ251cCIsInVzZXJuYW1lIiwiY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwiZGIiLCJjb2xsZWN0aW9uIiwiYWRkIiwiYmFkZ2VzIiwiYmlvZ3JhcGh5IiwiY3JlYXRlZEF0IiwiZmlyZWJhc2UiLCJmaXJlc3RvcmUiLCJGaWVsZFZhbHVlIiwic2VydmVyVGltZXN0YW1wIiwic3VzcGVuZGVkIiwiZmFjZWJvb2siLCJpbnN0YWdyYW0iLCJ0d2l0dGVyIiwiZGV2aWFudGFydCIsImxpa2VzQ291bnQiLCJzaWdub3V0Iiwic2lnbk91dCIsInNlbmRQYXNzd29yZFJlc2V0RW1haWwiLCJjb25maXJtUGFzc3dvcmRSZXNldCIsImNvZGUiLCJ1bnN1YnNjcmliZSIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsInVpZCIsImRvYyIsIm9uU25hcHNob3QiLCJkYXRhIiwibmV3Q2hhcmFjdGVyIiwicHJvcHMiLCJjaGFyYWN0ZXJJZCIsIkZvcm0iLCJ1c2VGb3JtIiwicm91dGVyIiwidXNlUm91dGVyIiwiZ2V0VXNlckNoYXJhY3RlcnMiLCJwdWJsaWMiLCJwdXNoIiwic2Nyb2xsVG8iLCJ2YWx1ZXMiLCJhZGRDaGFyYWN0ZXIiLCJhdXRob3JJZCIsImFnZSIsImV0aG5pY2l0eSIsImdyb3VwIiwicmVzaWRlbmNlIiwiZGVzY3JpcHRpb24iLCJuaWNrbmFtZSIsIm9jY3VwYXRpb24iLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsInVzZXJDaGFyYWN0ZXJzIiwiY29ubmVjdCIsImdldENoYXJhY3RlciIsImRpc3BhdGNoIiwiZ2V0IiwiZXhpc3RzIiwiR0VUX0NIQVJBQ1RFUiIsInBheWxvYWQiLCJjaGFyYUV4aXN0cyIsIkFERF9DSEFSQUNURVIiLCJpbWFnZU5hbWUiLCJ0b0xvd2VyQ2FzZSIsInN0b3JhZ2UiLCJyZWYiLCJjdXJyZW50VXNlciIsInB1dCIsImNoaWxkIiwiZ2V0RG93bmxvYWRVUkwiLCJ1cmwiLCJsaWtlcyIsImRpc2xpa2VzIiwicmVzIiwic3VjY2VzcyIsImNhdGNoIiwiZXJyIiwiZWRpdENoYXJhY3RlciIsIkVESVRfQ0hBUkFDVEVSIiwidXBkYXRlIiwidXNlcklkIiwid2hlcmUiLCJkb2NzIiwiaXRlbXMiLCJmb3JFYWNoIiwiR0VUX1VTRVJfQ0hBUkFDVEVSUyIsImdldEZhdm9yaXRlQ2hhcmFjdGVycyIsImZhdkFyciIsInVzZXJzIiwiYWxsIiwiZmF2VXNlcnMiLCJHRVRfRkFWT1JJVEVfQ0hBUkFDVEVSUyIsInByb2RDb25maWciLCJhcGlLZXkiLCJwcm9jZXNzIiwiYXV0aERvbWFpbiIsImRhdGFiYXNlVVJMIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJGSVJFQkFTRV9BUFBfSUQiLCJkZXZDb25maWciLCJjb25maWciLCJhcHBzIiwiaW5pdGlhbGl6ZUFwcCIsIkNBVEVHT1JJRVMiLCJDT1BZUklHSFRTIiwiTEFOR1VBR0VTIiwiU1RBVFVTIiwiR0VUX1BST0ZJTEUiLCJMT0dJTiIsIlJFR0lTVEVSIiwiR0VUX1NUT1JZIiwiR0VUX1VTRVJfU1RPUklFUyIsIkdFVF9GQVZPUklURV9TVE9SSUVTIiwiQUREX1NUT1JZIiwiRURJVF9TVE9SWSIsIkdFVF9DSEFQVEVSIiwiQUREX0NIQVBURVIiLCJFRElUX0NIQVBURVIiLCJHRVRfQ0hBUFRFUlMiLCJHRVRfVVNFUl9MT0NBVElPTlMiLCJHRVRfRkFWT1JJVEVfQVVUSE9SUyIsIkdFVF9GT0xMT1dFUlMiLCJESVNQQVRDSF9FUlJPUiJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFD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dCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2NoYXJhY3Rlci9uZXcuanNcIik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBDaGFyYWN0ZXJDYXJkID0gKHsgY2hhcmFjdGVyLCB0eXBlLCByZW1vdmVDaGFyYWN0ZXIgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZmlndXJlXHJcbiAgICAgIGNsYXNzTmFtZT17YGNhcmQgY2hhcmFjdGVyLWNhcmQgJHt0eXBlID8gdHlwZSA6IFwiXCJ9YH1cclxuICAgICAgZGF0YS1hb3M9XCJ6b29tLWluLXVwXCJcclxuICAgID5cclxuICAgICAge3R5cGUgPT09IFwiYWRkXCIgJiYgKFxyXG4gICAgICAgIDxzcGFuXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByZW1vdmVDaGFyYWN0ZXIoY2hhcmFjdGVyLmlkKX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInJlbW92ZS1idG5cIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIHhcclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICl9XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxpbWcgc3JjPXtjaGFyYWN0ZXI/LmltYWdlfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGZpZ2NhcHRpb24+XHJcbiAgICAgICAgPGgzPntgJHtjaGFyYWN0ZXI/LmZpcnN0bmFtZX0gJHtjaGFyYWN0ZXI/Lmxhc3RuYW1lfWB9PC9oMz5cclxuICAgICAgICB7dHlwZSA9PT0gXCJmYXZvcml0ZXNcIiAmJiAoXHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhdXRob3JcIj5BdXRob3I6IHtjaGFyYWN0ZXI/LmF1dGhvck5hbWV9PC9zcGFuPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgeyh0eXBlID09PSBcImFkZFwiIHx8IHR5cGUgPT09IFwic2hvd1wiKSAmJiAoXHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhdXRob3JcIj5SZWxhdGlvbjoge2NoYXJhY3Rlcj8ucmVsYXRpb259PC9zcGFuPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZmlnY2FwdGlvbj5cclxuICAgIDwvZmlndXJlPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGFyYWN0ZXJDYXJkO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFJvdywgQ29sLCBEaXZpZGVyLCBGb3JtLCBJbnB1dCwgSW5wdXROdW1iZXIsIFNwaW4gfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuaW1wb3J0IFJlbGF0aXZlcyBmcm9tIFwiLi9SZWxhdGl2ZXNcIjtcclxuaW1wb3J0IEltYWdlUm93IGZyb20gXCIuL0ltYWdlUm93XCI7XHJcbmltcG9ydCBSYWRpb0J1dHRvbiBmcm9tIFwiLi9SYWRpb0J1dHRvblwiO1xyXG5cclxuY29uc3QgQ2hhcmFjdGVyRm9ybSA9ICh7XHJcbiAgZm9ybSxcclxuICBjaGFyYWN0ZXJzLFxyXG4gIGNoYXJhY3RlcixcclxuICBzdWJtaXQsXHJcbiAgb25GYWlsZWQsXHJcbiAgdmlzaWJpbGl0eSxcclxuICBzZXRWaXNpYmlsaXR5LFxyXG4gIHR5cGUsXHJcbiAgbG9hZGluZ0NoYXJhY3RlcixcclxuICBpbml0aWFsVmFsdWVzLFxyXG59KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtXHJcbiAgICAgIGxheW91dD1cInZlcnRpY2FsXCJcclxuICAgICAgc2Nyb2xsVG9GaXJzdEVycm9yXHJcbiAgICAgIG9uRmluaXNoRmFpbGVkPXtvbkZhaWxlZH1cclxuICAgICAgb25GaW5pc2g9e3N1Ym1pdH1cclxuICAgICAgZm9ybT17Zm9ybX1cclxuICAgICAgaW5pdGlhbFZhbHVlcz17aW5pdGlhbFZhbHVlc31cclxuICAgID5cclxuICAgICAgPEltYWdlUm93IG5hbWU9XCJpbWFnZVwiIGZvcm09e2Zvcm19IGl0ZW1JbWFnZT17Y2hhcmFjdGVyPy5pbWFnZX0gLz5cclxuICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgPFJvdyBhbGlnbj1cImJvdHRvbVwiIGd1dHRlcj17WzI0LCAyNF19PlxyXG4gICAgICAgIDxDb2wgbWQ9ezh9IHhzPXsyNH0gc209ezI0fT5cclxuICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgbGFiZWw9XCJGaXJzdG5hbWVcIlxyXG4gICAgICAgICAgICBuYW1lPVwiZmlyc3RuYW1lXCJcclxuICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiQSBmaXJzdG5hbWUgaXMgcmVxdWlyZWRcIixcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHsgbWF4OiAyMCB9LFxyXG4gICAgICAgICAgICBdfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDxDb2wgbWQ9ezh9IHhzPXsyNH0gc209ezI0fT5cclxuICAgICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCJMYXN0bmFtZVwiIG5hbWU9XCJsYXN0bmFtZVwiIHJ1bGVzPXtbeyBtYXg6IDY1IH1dfT5cclxuICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgICA8Q29sIG1kPXs4fSB4cz17MjR9IHNtPXsyNH0+XHJcbiAgICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwiTmlja25hbWVcIiBuYW1lPVwibmlja25hbWVcIiBydWxlcz17W3sgbWF4OiA2NSB9XX0+XHJcbiAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgIDwvUm93PlxyXG4gICAgICA8Um93IGd1dHRlcj17WzI0LCAyNF19PlxyXG4gICAgICAgIDxDb2wgbWQ9ezh9IHNtPXsyNH0geHM9ezI0fT5cclxuICAgICAgICAgIDxGb3JtLkl0ZW0gbmFtZT1cImdlbmRlclwiIGxhYmVsPVwiR2VuZGVyXCI+XHJcbiAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPENvbCBtZD17OH0gc209ezI0fSB4cz17MjR9PlxyXG4gICAgICAgICAgPEZvcm0uSXRlbSBuYW1lPVwib2NjdXBhdGlvblwiIGxhYmVsPVwiT2NjdXBhdGlvblwiPlxyXG4gICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDxDb2wgbWQ9ezh9IHNtPXsyNH0geHM9ezI0fT5cclxuICAgICAgICAgIDxGb3JtLkl0ZW0gbmFtZT1cInJlc2lkZW5jZVwiIGxhYmVsPVwiUmVzaWRlbmNlXCI+XHJcbiAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgIDwvUm93PlxyXG4gICAgICA8Um93IGd1dHRlcj17WzI0LCAyNF19PlxyXG4gICAgICAgIDxDb2wgbWQ9ezh9IHhzPXsyNH0gc209ezI0fT5cclxuICAgICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCJFdGhuaWNpdHlcIiBuYW1lPVwiZXRobmljaXR5XCI+XHJcbiAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPENvbCBtZD17OH0geHM9ezI0fSBzbT17MjR9PlxyXG4gICAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD1cIkdyb3VwXCIgbmFtZT1cImdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPENvbCBtZD17NH0geHM9ezI0fSBzbT17MjR9PlxyXG4gICAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD1cIkFnZVwiIG5hbWU9XCJhZ2VcIj5cclxuICAgICAgICAgICAgPElucHV0TnVtYmVyIG1pbj17MH0gLz5cclxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDxSYWRpb0J1dHRvblxyXG4gICAgICAgICAgbGc9ezR9XHJcbiAgICAgICAgICBtZD17NH1cclxuICAgICAgICAgIHNtPXsyNH1cclxuICAgICAgICAgIHhzPXsyNH1cclxuICAgICAgICAgIG5hbWU9XCJwdWJsaWNcIlxyXG4gICAgICAgICAgbGFiZWw9XCJWaXNpYmlsaXR5XCJcclxuICAgICAgICAgIG51bTE9XCIxXCJcclxuICAgICAgICAgIG51bTI9XCIyXCJcclxuICAgICAgICAgIGxhYmVsMT1cIlB1YmxpY1wiXHJcbiAgICAgICAgICBsYWJlbDI9XCJQcml2YXRlXCJcclxuICAgICAgICAgIHNldEZ1bmM9e3NldFZpc2liaWxpdHl9XHJcbiAgICAgICAgICB2YWw9e3Zpc2liaWxpdHl9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9Sb3c+XHJcbiAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICBsYWJlbD1cIkRlc2NyaXB0aW9uXCJcclxuICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG1heDogMTgwLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIllvdXIgZGVzY3JpcHRpb24gY2Fubm90IGV4Y2VlZCAxODAgY2hhcmFjdGVyc1wiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdfVxyXG4gICAgICA+XHJcbiAgICAgICAgPElucHV0LlRleHRBcmVhXHJcbiAgICAgICAgICBhdXRvU2l6ZT17eyBtaW5Sb3dzOiA1IH19XHJcbiAgICAgICAgICBzaG93Q291bnQ9e3RydWV9XHJcbiAgICAgICAgICBtYXhMZW5ndGg9ezE4MH1cclxuICAgICAgICA+PC9JbnB1dC5UZXh0QXJlYT5cclxuICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgIDxSZWxhdGl2ZXNcclxuICAgICAgICBjaGFyYWN0ZXI9e2NoYXJhY3RlciAmJiBjaGFyYWN0ZXJ9XHJcbiAgICAgICAgZm9ybT17Zm9ybX1cclxuICAgICAgICBjaGFyYWN0ZXJzPXtjaGFyYWN0ZXJzfVxyXG4gICAgICAvPlxyXG4gICAgICB7dHlwZSA9PT0gXCJhZGRcIiA/IChcclxuICAgICAgICBsb2FkaW5nQ2hhcmFjdGVyID8gKFxyXG4gICAgICAgICAgPGJ1dHRvbiBkaXNhYmxlZCBjbGFzc05hbWU9XCJzcGluLWJ0blwiPlxyXG4gICAgICAgICAgICA8U3BpbiAvPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkNyZWF0ZTwvYnV0dG9uPlxyXG4gICAgICAgIClcclxuICAgICAgKSA6IGxvYWRpbmdDaGFyYWN0ZXIgPyAoXHJcbiAgICAgICAgPGJ1dHRvbiBkaXNhYmxlZCBjbGFzc05hbWU9XCJzcGluLWJ0blwiPlxyXG4gICAgICAgICAgPFNwaW4gLz5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5FZGl0PC9idXR0b24+XHJcbiAgICAgICl9XHJcbiAgICA8L0Zvcm0+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXJhY3RlckZvcm07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgUm93LCBDb2wsIEZvcm0sIElucHV0IH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IGlzSW1hZ2VVcmwgZnJvbSBcImlzLWltYWdlLXVybFwiO1xyXG5cclxuaW1wb3J0IFVwbG9hZEltYWdlIGZyb20gXCIuL1VwbG9hZEltYWdlXCI7XHJcblxyXG5jb25zdCBJbWFnZVJvdyA9ICh7IGZvcm0sIGl0ZW1JbWFnZSwgbmFtZSB9KSA9PiB7XHJcbiAgY29uc3QgW2xpbmtWaXNpYmxlLCBzZXRMaW5rVmlzaWJsZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3VwbG9hZFZpc2libGUsIHNldFVwbG9hZFZpc2libGVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBzaG93TGluayA9ICgpID0+IHtcclxuICAgIGZvcm0uc2V0RmllbGRzVmFsdWUoeyBbbmFtZV06IG51bGwgfSk7XHJcbiAgICBzZXRMaW5rVmlzaWJsZSh0cnVlKTtcclxuICAgIHNldFVwbG9hZFZpc2libGUoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNob3dVcGxvYWQgPSAoKSA9PiB7XHJcbiAgICBmb3JtLnNldEZpZWxkc1ZhbHVlKHsgW25hbWVdOiBudWxsIH0pO1xyXG4gICAgc2V0TGlua1Zpc2libGUoZmFsc2UpO1xyXG4gICAgc2V0VXBsb2FkVmlzaWJsZSh0cnVlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgeyF1cGxvYWRWaXNpYmxlICYmICFsaW5rVmlzaWJsZSAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1cGxvYWQtYnRuc1wiPlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzaG93VXBsb2FkfSB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwidXBsb2FkLWJ0blwiPlxyXG4gICAgICAgICAgICBVcGxvYWQgYSBjb3ZlclxyXG4gICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzaG93TGlua30gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cInVwbG9hZC1idG5cIj5cclxuICAgICAgICAgICAgU3VibWl0IGEgbGluayB0byBhIGNvdmVyXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgICAge3VwbG9hZFZpc2libGUgJiYgKFxyXG4gICAgICAgIDxSb3cgYWxpZ249XCJib3R0b21cIiBndXR0ZXI9e1syNCwgMjRdfT5cclxuICAgICAgICAgIDxDb2wgbWQ9ezEyfSBzbT17MjR9IHhzPXsyNH0+XHJcbiAgICAgICAgICAgIDxVcGxvYWRJbWFnZSBuYW1lPXtuYW1lfSBmb3JtPXtmb3JtfSBpbWFnZT17aXRlbUltYWdlfSAvPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8Q29sIG1kPXsxMn0gc209ezI0fSB4cz17MjR9PlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Nob3dMaW5rfSB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwidXBsb2FkLWJ0blwiPlxyXG4gICAgICAgICAgICAgIE9SIFN1Ym1pdCBhIGxpbmsgdG8gYSBjb3ZlclxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICApfVxyXG4gICAgICB7bGlua1Zpc2libGUgJiYgKFxyXG4gICAgICAgIDxSb3cgYWxpZ249XCJib3R0b21cIiBndXR0ZXI9e1syNCwgMjRdfT5cclxuICAgICAgICAgIDxDb2wgc209ezI0fSB4cz17MjR9IG1kPXsxMn0gbGc9ezEyfT5cclxuICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwidXJsXCIsXHJcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiVGhpcyBmaWVsZCBtdXN0IGJlIGEgdmFsaWQgdXJsLlwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICgpID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcihfLCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0ltYWdlVXJsKHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXHJcbiAgICAgICAgICAgICAgICAgICAgICBuZXcgRXJyb3IoXCJUaGUgbGluayBuZWVkcyB0byBiZSBhbiBpbWFnZVwiKVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiU3VibWl0IGEgbGluayB0byB5b3VyIGltYWdlXCJcclxuICAgICAgICAgICAgICBuYW1lPXtuYW1lfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8Q29sIG1kPXsxMn0gc209ezI0fSB4cz17MjR9PlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Nob3dVcGxvYWR9IHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJ1cGxvYWQtYnRuXCI+XHJcbiAgICAgICAgICAgICAgVXBsb2FkIGEgY292ZXJcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZVJvdztcclxuIiwiaW1wb3J0IHsgQ29sLCBTcGFjZSwgRm9ybSwgUmFkaW8gfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuY29uc3QgUmFkaW9CdXRvbiA9ICh7XHJcbiAgbGcsXHJcbiAgc20sXHJcbiAgeHMsXHJcbiAgbWQsXHJcbiAgbmFtZSxcclxuICBsYWJlbCxcclxuICBudW0xLFxyXG4gIG51bTIsXHJcbiAgbGFiZWwxLFxyXG4gIGxhYmVsMixcclxuICBmb3JtLFxyXG4gIHNldEZ1bmMsXHJcbiAgdmFsLFxyXG59KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb2wgbGc9e2xnfSBtZD17bWR9IHNtPXtzbX0geHM9e3hzfT5cclxuICAgICAgPEZvcm0uSXRlbSBuYW1lPXtuYW1lfSBsYWJlbD17bGFiZWx9PlxyXG4gICAgICAgIDxmaWVsZHNldCBpZD17bmFtZX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhZGlvXCI+XHJcbiAgICAgICAgICAgIDxSYWRpby5Hcm91cD5cclxuICAgICAgICAgICAgICA8U3BhY2Ugc2l6ZT17MzJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYWRpb19fMVwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICBpZD17YHJhZGlvLSR7bnVtMX1gfVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHNldEZ1bmModHJ1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dmFsID8gdHJ1ZSA6IGZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17YHJhZGlvLSR7bnVtMX1gfT48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8cD57bGFiZWwxfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYWRpb19fMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBpZD17YHJhZGlvLSR7bnVtMn1gfVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBzZXRGdW5jKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt2YWwgPyBmYWxzZSA6IHRydWV9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtgcmFkaW8tJHtudW0yfWB9PjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxwPntsYWJlbDJ9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9TcGFjZT5cclxuICAgICAgICAgICAgPC9SYWRpby5Hcm91cD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZmllbGRzZXQ+XHJcbiAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgPC9Db2w+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJhZGlvQnV0b247XHJcbiIsImltcG9ydCB7IFJvdywgQ29sLCBGb3JtLCBTZWxlY3QsIElucHV0LCBEaXZpZGVyIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IENoYXJhY3RlckNhcmQsIHsgQ2hhcmFjdGVyR3JpZCB9IGZyb20gXCIuLi9jb21tb24vQ2hhcmFjdGVyQ2FyZFwiO1xyXG5cclxuY29uc3QgeyBPcHRpb24gfSA9IFNlbGVjdDtcclxuXHJcbmNvbnN0IFJlbGF0aXZlcyA9ICh7IGNoYXJhY3RlciwgY2hhcmFjdGVycywgZm9ybSB9KSA9PiB7XHJcbiAgY29uc3QgW3JlbGF0aW9ucywgc2V0UmVsYXRpb25zXSA9IFJlYWN0LnVzZVN0YXRlKFxyXG4gICAgY2hhcmFjdGVyID8gY2hhcmFjdGVyLnJlbGF0aXZlcyA6IFtdXHJcbiAgKTtcclxuICBjb25zdCBbY3VycmVudENoYXIsIHNldEN1cnJlbnRDaGFyXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjdXJyZW50UmVsLCBzZXRDdXJyZW50UmVsXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtzZWxlY3RlZENoYXJhY3RlcnMsIHNldFNlbGVjdGVkQ2hhcmFjdGVyc10gPSBSZWFjdC51c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IFtzZWxlY3RlZEFyciwgc2V0U2VsZWN0ZWRBcnJdID0gUmVhY3QudXNlU3RhdGUoXHJcbiAgICBjaGFyYWN0ZXIgPyBjaGFyYWN0ZXIucmVsYXRpdmVzLm1hcCgoYykgPT4gYy5jaGFyYWN0ZXJfaWQpIDogW11cclxuICApO1xyXG4gIGNvbnN0IFtzaG93RXJyb3JSZWwsIHNldFNob3dFcnJvclJlbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Nob3dFcnJvckNoYXIsIHNldFNob3dFcnJvckNoYXJdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBhZGRSZWxhdGlvbiA9ICgpID0+IHtcclxuICAgIGxldCBuZXdSZWxhdGlvbnMgPSBbLi4ucmVsYXRpb25zXTtcclxuICAgIGlmIChjdXJyZW50Q2hhciAmJiBjdXJyZW50UmVsKSB7XHJcbiAgICAgIG5ld1JlbGF0aW9ucyA9IFtcclxuICAgICAgICAuLi5uZXdSZWxhdGlvbnMsXHJcbiAgICAgICAgeyBjaGFyYWN0ZXJfaWQ6IGN1cnJlbnRDaGFyLCByZWxhdGlvbjogY3VycmVudFJlbCB9LFxyXG4gICAgICBdO1xyXG4gICAgICBzZXRTZWxlY3RlZENoYXJhY3RlcnMoW1xyXG4gICAgICAgIC4uLnNlbGVjdGVkQ2hhcmFjdGVycyxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAuLi5jaGFyYWN0ZXJzLmZpbmQoKGMpID0+IGMuaWQgPT09IGN1cnJlbnRDaGFyKSxcclxuICAgICAgICAgIHJlbGF0aW9uOiBjdXJyZW50UmVsLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0pO1xyXG4gICAgICBzZXRTZWxlY3RlZEFycihbLi4uc2VsZWN0ZWRBcnIsIGN1cnJlbnRDaGFyXSk7XHJcbiAgICAgIGZvcm0uc2V0RmllbGRzVmFsdWUoeyByZWxhdGl2ZXM6IG5ld1JlbGF0aW9ucyB9KTtcclxuICAgICAgc2V0UmVsYXRpb25zKG5ld1JlbGF0aW9ucyk7XHJcbiAgICAgIHNldEN1cnJlbnRDaGFyKFwiXCIpO1xyXG4gICAgICBzZXRDdXJyZW50UmVsKFwiXCIpO1xyXG4gICAgICBzZXRTaG93RXJyb3JDaGFyKGZhbHNlKTtcclxuICAgICAgc2V0U2hvd0Vycm9yUmVsKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWN1cnJlbnRSZWwpIHtcclxuICAgICAgc2V0U2hvd0Vycm9yUmVsKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghY3VycmVudENoYXIpIHtcclxuICAgICAgc2V0U2hvd0Vycm9yQ2hhcih0cnVlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGNoYXJhY3RlciAmJiBjaGFyYWN0ZXJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgc2V0U2VsZWN0ZWRDaGFyYWN0ZXJzKFxyXG4gICAgICAgIGNoYXJhY3Rlci5yZWxhdGl2ZXMubWFwKChjKSA9PiAoe1xyXG4gICAgICAgICAgZmlyc3RuYW1lOiBjaGFyYWN0ZXJzLmZpbmQoKGNoYXIpID0+IGNoYXIuaWQgPT09IGMuY2hhcmFjdGVyX2lkKVxyXG4gICAgICAgICAgICAuZmlyc3RuYW1lLFxyXG4gICAgICAgICAgbGFzdG5hbWU6IGNoYXJhY3RlcnMuZmluZCgoY2hhcikgPT4gY2hhci5pZCA9PT0gYy5jaGFyYWN0ZXJfaWQpXHJcbiAgICAgICAgICAgIC5sYXN0bmFtZSxcclxuICAgICAgICAgIGltYWdlOiBjaGFyYWN0ZXJzLmZpbmQoKGNoYXIpID0+IGNoYXIuaWQgPT09IGMuY2hhcmFjdGVyX2lkKS5pbWFnZSxcclxuICAgICAgICAgIGlkOiBjaGFyYWN0ZXJzLmZpbmQoKGNoYXIpID0+IGNoYXIuaWQgPT09IGMuY2hhcmFjdGVyX2lkKS5pZCxcclxuICAgICAgICAgIHJlbGF0aW9uOiBjLnJlbGF0aW9uLFxyXG4gICAgICAgIH0pKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH0sIFtjaGFyYWN0ZXIsIGNoYXJhY3RlcnNdKTtcclxuXHJcbiAgY29uc3QgcmVtb3ZlQ2hhcmFjdGVyID0gKGlkKSA9PiB7XHJcbiAgICBzZXRTZWxlY3RlZENoYXJhY3RlcnMoc2VsZWN0ZWRDaGFyYWN0ZXJzLmZpbHRlcigoYykgPT4gYy5pZCAhPT0gaWQpKTtcclxuICAgIHNldFNlbGVjdGVkQXJyKHNlbGVjdGVkQXJyLmZpbHRlcigoYykgPT4gYyAhPT0gaWQpKTtcclxuICAgIHNldFJlbGF0aW9ucyhyZWxhdGlvbnMuZmlsdGVyKChjKSA9PiBjLmNoYXJhY3Rlcl9pZCAhPT0gaWQpKTtcclxuICAgIGZvcm0uc2V0RmllbGRzVmFsdWUoe1xyXG4gICAgICByZWxhdGl2ZXM6IHJlbGF0aW9ucy5maWx0ZXIoKGMpID0+IGMuY2hhcmFjdGVyX2lkICE9PSBpZCksXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm0uSXRlbSBuYW1lPVwicmVsYXRpdmVzXCI+XHJcbiAgICAgIDxoMz5SZWxhdGlvbnNoaXBzPC9oMz5cclxuICAgICAgPFJvdyBndXR0ZXI9e1syNCwgMTJdfSBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgIDxDb2wgbWQ9ezExfSBzbT17MjR9IHhzPXsyNH0+XHJcbiAgICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwiU2VsZWN0IGEgY2hhcmFjdGVyXCI+XHJcbiAgICAgICAgICAgIDxTZWxlY3QgdmFsdWU9e2N1cnJlbnRDaGFyfSBvbkNoYW5nZT17KHZhbCkgPT4gc2V0Q3VycmVudENoYXIodmFsKX0+XHJcbiAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIm5vbmVcIiBkaXNhYmxlZD5cclxuICAgICAgICAgICAgICAgIFNlbGVjdCBhIGNoYXJhY3RlclxyXG4gICAgICAgICAgICAgIDwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgIHtjaGFyYWN0ZXJzXHJcbiAgICAgICAgICAgICAgICA/LmZpbHRlcigoYykgPT4gIXNlbGVjdGVkQXJyLmluY2x1ZGVzKGMuaWQpKVxyXG4gICAgICAgICAgICAgICAgLm1hcCgoYykgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8T3B0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtjLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjLmlkfVxyXG4gICAgICAgICAgICAgICAgICA+e2Ake2MuZmlyc3RuYW1lfSAke2MubGFzdG5hbWV9YH08L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAge3Nob3dFcnJvckNoYXIgJiYgKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW50LWZvcm0taXRlbS1leHBsYWluIGFudC1mb3JtLWl0ZW0tZXhwbGFpbi1lcnJvclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiByb2xlPVwiYWxlcnRcIj5BIGNoYXJhY3RlciBpcyByZXF1aXJlZDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPENvbCBtZD17MTF9IHNtPXsyMX0geHM9ezIxfT5cclxuICAgICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCJUeXBlIG9mIHJlbGF0aW9uc2hpcFwiPlxyXG4gICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICB2YWx1ZT17Y3VycmVudFJlbH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEN1cnJlbnRSZWwoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7c2hvd0Vycm9yUmVsICYmIChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFudC1mb3JtLWl0ZW0tZXhwbGFpbiBhbnQtZm9ybS1pdGVtLWV4cGxhaW4tZXJyb3JcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgcm9sZT1cImFsZXJ0XCI+QSB0eXBlIG9mIHJlbGF0aW9uc2hpcCBpcyByZXF1aXJlZDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPENvbCBtZD17Mn0geHM9ezN9IHNtPXszfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0LWFkZC1pbnB1dC1pY29uYm94XCIgb25DbGljaz17YWRkUmVsYXRpb259PlxyXG4gICAgICAgICAgICA8c3Bhbj4rPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgIDwvUm93PlxyXG4gICAgICA8RGl2aWRlciAvPlxyXG4gICAgICA8Um93IGd1dHRlcj17WzE2LCAxNl19PlxyXG4gICAgICAgIHtzZWxlY3RlZENoYXJhY3RlcnM/Lm1hcCgocmVsKSA9PiAoXHJcbiAgICAgICAgICA8Q29sIGxnPXs0fSBtZD17OH0gc209ezEyfSB4cz17MjR9IGtleT17cmVsLmlkfT5cclxuICAgICAgICAgICAgPENoYXJhY3RlckNhcmRcclxuICAgICAgICAgICAgICByZW1vdmVDaGFyYWN0ZXI9e3JlbW92ZUNoYXJhY3Rlcn1cclxuICAgICAgICAgICAgICB0eXBlPVwiYWRkXCJcclxuICAgICAgICAgICAgICBjaGFyYWN0ZXI9e3JlbH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L1Jvdz5cclxuICAgIDwvRm9ybS5JdGVtPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWxhdGl2ZXM7XHJcbiIsImltcG9ydCB7IFVwbG9hZCwgbWVzc2FnZSwgRm9ybSwgSW5wdXQgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyBMb2FkaW5nT3V0bGluZWQsIFBsdXNPdXRsaW5lZCwgU3Rhck91dGxpbmVkIH0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XHJcblxyXG5mdW5jdGlvbiBnZXRCYXNlNjQoaW1nLCBjYWxsYmFjaykge1xyXG4gIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgcmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IGNhbGxiYWNrKHJlYWRlci5yZXN1bHQpKTtcclxuICByZWFkZXIucmVhZEFzRGF0YVVSTChpbWcpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBiZWZvcmVVcGxvYWQoZmlsZSkge1xyXG4gIGNvbnN0IGlzSnBnT3JQbmcgPSBmaWxlLnR5cGUgPT09IFwiaW1hZ2UvanBlZ1wiIHx8IGZpbGUudHlwZSA9PT0gXCJpbWFnZS9wbmdcIjtcclxuICBpZiAoIWlzSnBnT3JQbmcpIHtcclxuICAgIG1lc3NhZ2UuZXJyb3IoXCJZb3UgY2FuIG9ubHkgdXBsb2FkIEpQRy9QTkcgZmlsZSFcIik7XHJcbiAgfVxyXG4gIGNvbnN0IGlzTHQyTSA9IGZpbGUuc2l6ZSAvIDEwMjQgLyAxMDI0IDwgMjtcclxuICBpZiAoIWlzTHQyTSkge1xyXG4gICAgbWVzc2FnZS5lcnJvcihcIkltYWdlIG11c3Qgc21hbGxlciB0aGFuIDJNQiFcIik7XHJcbiAgfVxyXG4gIHJldHVybiBpc0pwZ09yUG5nICYmIGlzTHQyTTtcclxufVxyXG5cclxuY29uc3QgVXBsb2FkSW1hZ2UgPSAoeyBmb3JtLCBpbWFnZSwgbmFtZSB9KSA9PiB7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpbWFnZVVybCwgc2V0SW1hZ2VVcmxdID0gUmVhY3QudXNlU3RhdGUoaW1hZ2UgPyBpbWFnZSA6IFwiXCIpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoaW5mbykgPT4ge1xyXG4gICAgaWYgKGluZm8uZmlsZS5zdGF0dXMgPT09IFwidXBsb2FkaW5nXCIpIHtcclxuICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKGluZm8uZmlsZS5zdGF0dXMgPT09IFwiZG9uZVwiKSB7XHJcbiAgICAgIGZvcm0uc2V0RmllbGRzVmFsdWUoeyBbbmFtZV06IGluZm8uZmlsZS5vcmlnaW5GaWxlT2JqIH0pO1xyXG4gICAgICAvLyBzZXRJbWFnZShpbmZvLmZpbGUub3JpZ2luRmlsZU9iaik7XHJcbiAgICAgIGdldEJhc2U2NChpbmZvLmZpbGUub3JpZ2luRmlsZU9iaiwgKGltYWdlVXJsKSA9PiB7XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgc2V0SW1hZ2VVcmwoaW1hZ2VVcmwpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCB1cGxvYWRCdXR0b24gPSAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7bG9hZGluZyA/IDxMb2FkaW5nT3V0bGluZWQgLz4gOiA8UGx1c091dGxpbmVkIC8+fVxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogOCB9fT5VcGxvYWQ8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxGb3JtLkl0ZW0gbmFtZT17bmFtZX0gbGFiZWw9XCJVcGxvYWQgYSBjb3ZlclwiPlxyXG4gICAgICAgIDxVcGxvYWRcclxuICAgICAgICAgIHNob3dVcGxvYWRMaXN0PXt7XHJcbiAgICAgICAgICAgIHNob3dSZW1vdmVJY29uOiB0cnVlLFxyXG4gICAgICAgICAgICByZW1vdmVJY29uOiA8U3Rhck91dGxpbmVkIC8+LFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIGxpc3RUeXBlPVwicGljdHVyZS1jYXJkXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImNvdmVyLXVwbG9hZGVyXCJcclxuICAgICAgICAgIHNob3dVcGxvYWRMaXN0PXt0cnVlfVxyXG4gICAgICAgICAgYmVmb3JlVXBsb2FkPXtiZWZvcmVVcGxvYWR9XHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgbWF4Q291bnQ9ezF9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2ltYWdlVXJsID8gKFxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPXtpbWFnZVVybH1cclxuICAgICAgICAgICAgICBhbHQ9XCJpbWFnZVwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBvYmplY3RGaXQ6IFwiY292ZXJcIiB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgdXBsb2FkQnV0dG9uXHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvVXBsb2FkPlxyXG4gICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgIGxhYmVsPVwiSW1hZ2UgQ29weXJpZ2h0XCJcclxuICAgICAgICBuYW1lPVwiaW1hZ2VDb3B5cmlnaHRcIlxyXG4gICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHJlcXVpcmVkOiBmb3JtLmdldEZpZWxkVmFsdWUobmFtZSkgPyB0cnVlIDogZmFsc2UsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiQW4gaW1hZ2UgY29weXJpZ2h0IGlzIHJlcXVpcmVkXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF19XHJcbiAgICAgID5cclxuICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXBsb2FkSW1hZ2U7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IExvYWRpbmdTY3JlZW4gPSAoeyBjaGlsZHJlbiwgbG9hZGluZyB9KSA9PiB7XHJcbiAgcmV0dXJuICFsb2FkaW5nID8gKFxyXG4gICAgY2hpbGRyZW5cclxuICApIDogKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkZXItY29udGFpbmVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGVyXCI+XHJcbiAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvYWRpbmdTY3JlZW47XHJcbiIsImltcG9ydCB7IFJlc3VsdCwgQnV0dG9uIH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmNvbnN0IFJlZGlyZWN0Q29tcCA9ICh7IGNvbmRpdGlvbiwgdHlwZSwgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIHJldHVybiBjb25kaXRpb24gPyAoXHJcbiAgICBjaGlsZHJlblxyXG4gICkgOiB0eXBlID09PSBcIjQwNFwiID8gKFxyXG4gICAgPFJlc3VsdFxyXG4gICAgICBzdGF0dXM9XCI0MDRcIlxyXG4gICAgICB0aXRsZT1cIjQwNFwiXHJcbiAgICAgIHN1YlRpdGxlPVwiU29ycnksIHRoZSBwYWdlIHlvdSB2aXNpdGVkIGRvZXMgbm90IGV4aXN0LlwiXHJcbiAgICAgIGV4dHJhPXs8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCI+QmFjayBIb21lPC9CdXR0b24+fVxyXG4gICAgLz5cclxuICApIDogdHlwZSA9PT0gXCI0MDNcIiA/IChcclxuICAgIDxSZXN1bHRcclxuICAgICAgc3RhdHVzPVwiNDAzXCJcclxuICAgICAgdGl0bGU9XCI0MDNcIlxyXG4gICAgICBzdWJUaXRsZT1cIlNvcnJ5LCB5b3UgYXJlIG5vdCBhdXRob3JpemVkIHRvIGFjY2VzcyB0aGlzIHBhZ2UuXCJcclxuICAgICAgZXh0cmE9ezxCdXR0b24gdHlwZT1cInByaW1hcnlcIj5CYWNrIEhvbWU8L0J1dHRvbj59XHJcbiAgICAvPlxyXG4gICkgOiB0eXBlID09PSBcInJlZGlyZWN0XCIgPyAoXHJcbiAgICAod2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9hdXRoXCIpXHJcbiAgKSA6IChcclxuICAgIDxkaXY+PC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZGlyZWN0Q29tcDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQsIGNyZWF0ZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcclxuaW1wb3J0IHsgYXV0aCwgZGIgfSBmcm9tIFwiLi4vcmVkdXgvZmJDb25maWdcIjtcclxuXHJcbmNvbnN0IGF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFByb3ZpZGVBdXRoKHsgY2hpbGRyZW4gfSkge1xyXG4gIGNvbnN0IGF1dGggPSB1c2VQcm92aWRlQXV0aCgpO1xyXG4gIHJldHVybiA8YXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2F1dGh9PntjaGlsZHJlbn08L2F1dGhDb250ZXh0LlByb3ZpZGVyPjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUF1dGggPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHVzZUNvbnRleHQoYXV0aENvbnRleHQpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gdXNlUHJvdmlkZUF1dGgoKSB7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICAvLyBXcmFwIGFueSBGaXJlYmFzZSBtZXRob2RzIHdlIHdhbnQgdG8gdXNlIG1ha2luZyBzdXJlIC4uLlxyXG4gIC8vIC4uLiB0byBzYXZlIHRoZSB1c2VyIHRvIHN0YXRlLlxyXG4gIGNvbnN0IHNpZ25pbiA9IChlbWFpbCwgcGFzc3dvcmQpID0+IHtcclxuICAgIHJldHVybiBhdXRoLnNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgc2V0VXNlcihyZXNwb25zZS51c2VyKTtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLnVzZXI7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzaWdudXAgPSAoZW1haWwsIHBhc3N3b3JkLCB1c2VybmFtZSkgPT4ge1xyXG4gICAgcmV0dXJuIGF1dGhcclxuICAgICAgLmNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHNldFVzZXIocmVzcG9uc2UudXNlcik7XHJcbiAgICAgICAgZGIuY29sbGVjdGlvbihcInVzZXJzXCIpLmFkZCh7XHJcbiAgICAgICAgICBiYWRnZXM6IFtdLFxyXG4gICAgICAgICAgYmlvZ3JhcGh5OiBcIlwiLFxyXG4gICAgICAgICAgY3JlYXRlZEF0OiBmaXJlYmFzZS5maXJlc3RvcmUuRmllbGRWYWx1ZS5zZXJ2ZXJUaW1lc3RhbXAoKSxcclxuICAgICAgICAgIHN1c3BlbmRlZDogZmFsc2UsXHJcbiAgICAgICAgICBmYWNlYm9vazogXCJcIixcclxuICAgICAgICAgIGluc3RhZ3JhbTogXCJcIixcclxuICAgICAgICAgIHR3aXR0ZXI6IFwiXCIsXHJcbiAgICAgICAgICBkZXZpYW50YXJ0OiBcIlwiLFxyXG4gICAgICAgICAgbGlrZXNDb3VudDogXCJcIixcclxuICAgICAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSxcclxuICAgICAgICAgIGltYWdlOiBcIlwiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZS51c2VyO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzaWdub3V0ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGF1dGguc2lnbk91dCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICBzZXRVc2VyKGZhbHNlKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNlbmRQYXNzd29yZFJlc2V0RW1haWwgPSAoZW1haWwpID0+IHtcclxuICAgIHJldHVybiBhdXRoLnNlbmRQYXNzd29yZFJlc2V0RW1haWwoZW1haWwpLnRoZW4oKCkgPT4ge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNvbmZpcm1QYXNzd29yZFJlc2V0ID0gKGNvZGUsIHBhc3N3b3JkKSA9PiB7XHJcbiAgICByZXR1cm4gYXV0aC5jb25maXJtUGFzc3dvcmRSZXNldChjb2RlLCBwYXNzd29yZCkudGhlbigoKSA9PiB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHVuc3Vic2NyaWJlID0gYXV0aC5vbkF1dGhTdGF0ZUNoYW5nZWQoKHVzZXIpID0+IHtcclxuICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICBzZXRVc2VyKHVzZXIpO1xyXG4gICAgICAgIGlmICh1c2VyLnVpZCkge1xyXG4gICAgICAgICAgbGV0IHVzZXJuYW1lID0gXCJcIjtcclxuICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICBkYi5jb2xsZWN0aW9uKFwidXNlcnNcIilcclxuICAgICAgICAgICAgLmRvYyh1c2VyLnVpZClcclxuICAgICAgICAgICAgLm9uU25hcHNob3QoKGRvYykgPT4ge1xyXG4gICAgICAgICAgICAgIHVzZXJuYW1lID0gZG9jLmRhdGEoKS51c2VybmFtZTtcclxuICAgICAgICAgICAgICBzZXRVc2VyKHsgLi4udXNlciwgdXNlcm5hbWUgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRVc2VyKGZhbHNlKTtcclxuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBDbGVhbnVwIHN1YnNjcmlwdGlvbiBvbiB1bm1vdW50XHJcbiAgICByZXR1cm4gKCkgPT4gdW5zdWJzY3JpYmUoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8vIFJldHVybiB0aGUgdXNlciBvYmplY3QgYW5kIGF1dGggbWV0aG9kc1xyXG4gIHJldHVybiB7XHJcbiAgICBpc0xvYWRpbmcsXHJcbiAgICB1c2VyLFxyXG4gICAgc2lnbmluLFxyXG4gICAgc2lnbnVwLFxyXG4gICAgc2lnbm91dCxcclxuICAgIHNlbmRQYXNzd29yZFJlc2V0RW1haWwsXHJcbiAgICBjb25maXJtUGFzc3dvcmRSZXNldCxcclxuICB9O1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IEZvcm0sIG1lc3NhZ2UgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcblxyXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSBcIi4uLy4uL2hvb2tzL3VzZXJIb29rc1wiO1xyXG5pbXBvcnQge1xyXG4gIGFkZENoYXJhY3RlcixcclxuICBnZXRVc2VyQ2hhcmFjdGVycyxcclxufSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9ucy9jaGFyYWN0ZXJzQWN0aW9uc1wiO1xyXG5cclxuaW1wb3J0IExvYWRpbmdTY3JlZW4gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvaG9jL0xvYWRpbmdTY3JlZW5cIjtcclxuaW1wb3J0IFJlZGlyZWN0Q29tcCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9ob2MvUmVkaXJlY3RDb21wXCI7XHJcbmltcG9ydCBDaGFyYWN0ZXJGb3JtIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2Zvcm1zL0NoYXJhY3RlckZvcm1cIjtcclxuXHJcbmNvbnN0IG5ld0NoYXJhY3RlciA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgY2hhcmFjdGVycywgY2hhcmFjdGVySWQsIGxvYWRpbmdDaGFyYWN0ZXIgfSA9IHByb3BzO1xyXG4gIGNvbnN0IGF1dGggPSB1c2VBdXRoKCk7XHJcbiAgY29uc3QgW2Zvcm1dID0gRm9ybS51c2VGb3JtKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IFt2aXNpYmlsaXR5LCBzZXRWaXNpYmlsaXR5XSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGF1dGgudXNlcikge1xyXG4gICAgICBwcm9wcy5nZXRVc2VyQ2hhcmFjdGVycyhhdXRoLnVzZXIudWlkKTtcclxuICAgIH1cclxuICB9LCBbYXV0aF0pO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZm9ybS5zZXRGaWVsZHNWYWx1ZSh7IHB1YmxpYzogdmlzaWJpbGl0eSB9KTtcclxuICB9LCBbdmlzaWJpbGl0eV0pO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGNoYXJhY3RlcklkKSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKGAvY2hhcmFjdGVyLyR7Y2hhcmFjdGVySWR9YCk7XHJcbiAgICB9XHJcbiAgfSwgW2NoYXJhY3RlcklkXSk7XHJcblxyXG4gIGNvbnN0IG9uRmFpbGVkID0gKCkgPT4ge1xyXG4gICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG4gICAgbWVzc2FnZS5lcnJvcihcIlRoZXJlIGFyZSBzb21lIGVycm9yc1wiKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzdWJtaXQgPSAodmFsdWVzKSA9PiB7XHJcbiAgICBwcm9wcy5hZGRDaGFyYWN0ZXIoe1xyXG4gICAgICAuLi52YWx1ZXMsXHJcbiAgICAgIGF1dGhvcklkOiBhdXRoLnVzZXIudWlkLFxyXG4gICAgICBhdXRob3JOYW1lOiBhdXRoLnVzZXIudXNlcm5hbWUsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExvYWRpbmdTY3JlZW4gbG9hZGluZz17YXV0aC5pc0xvYWRpbmd9PlxyXG4gICAgICA8UmVkaXJlY3RDb21wIGNvbmRpdGlvbj17YXV0aC51c2VyfSB0eXBlPVwicmVkaXJlY3RcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ldy1jaGFyYWN0ZXIgY3VzdG9tLWZvcm1cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXJcIj5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInNpZGUtaGVhZGluZ1wiPkFkZCBhIG5ldyBjaGFyYWN0ZXI8L2gyPlxyXG4gICAgICAgICAgICA8Q2hhcmFjdGVyRm9ybVxyXG4gICAgICAgICAgICAgIHN1Ym1pdD17c3VibWl0fVxyXG4gICAgICAgICAgICAgIG9uRmFpbGVkPXtvbkZhaWxlZH1cclxuICAgICAgICAgICAgICBmb3JtPXtmb3JtfVxyXG4gICAgICAgICAgICAgIGNoYXJhY3RlcnM9e2NoYXJhY3RlcnN9XHJcbiAgICAgICAgICAgICAgdmlzaWJpbGl0eT17dmlzaWJpbGl0eX1cclxuICAgICAgICAgICAgICBzZXRWaXNpYmlsaXR5PXtzZXRWaXNpYmlsaXR5fVxyXG4gICAgICAgICAgICAgIGxvYWRpbmdDaGFyYWN0ZXI9e2xvYWRpbmdDaGFyYWN0ZXJ9XHJcbiAgICAgICAgICAgICAgdHlwZT1cImFkZFwiXHJcbiAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17e1xyXG4gICAgICAgICAgICAgICAgZmlyc3RuYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgbGFzdG5hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBhZ2U6IDAsXHJcbiAgICAgICAgICAgICAgICBwdWJsaWM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBldGhuaWNpdHk6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBncm91cDogXCJcIixcclxuICAgICAgICAgICAgICAgIHJlc2lkZW5jZTogXCJcIixcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgbmlja25hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBvY2N1cGF0aW9uOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgcmVsYXRpdmVzOiBbXSxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvUmVkaXJlY3RDb21wPlxyXG4gICAgPC9Mb2FkaW5nU2NyZWVuPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XHJcbiAgY2hhcmFjdGVyczogc3RhdGUuY2hhcmFjdGVycy51c2VyQ2hhcmFjdGVycyxcclxuICBsb2FkaW5nQ2hhcmFjdGVyOiBzdGF0ZS5jaGFyYWN0ZXJzLmxvYWRpbmdDaGFyYWN0ZXIsXHJcbiAgY2hhcmFjdGVySWQ6IHN0YXRlLmNoYXJhY3RlcnMuY2hhcmFjdGVySWQsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHsgZ2V0VXNlckNoYXJhY3RlcnMsIGFkZENoYXJhY3RlciB9KShcclxuICBuZXdDaGFyYWN0ZXJcclxuKTtcclxuIiwiaW1wb3J0IHtcclxuICBHRVRfVVNFUl9DSEFSQUNURVJTLFxyXG4gIEdFVF9GQVZPUklURV9DSEFSQUNURVJTLFxyXG4gIEFERF9DSEFSQUNURVIsXHJcbiAgRURJVF9DSEFSQUNURVIsXHJcbiAgR0VUX0NIQVJBQ1RFUixcclxufSBmcm9tIFwiLi4vLi4vdXRpbHMvY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IG1lc3NhZ2UgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyBkYiwgYXV0aCB9IGZyb20gXCIuLi9mYkNvbmZpZ1wiO1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlL2FwcFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldENoYXJhY3RlciA9IChpZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGIuY29sbGVjdGlvbihcImNoYXJhY3RlcnNcIilcclxuICAgIC5kb2MoaWQpXHJcbiAgICAuZ2V0KClcclxuICAgIC50aGVuKChkb2MpID0+IHtcclxuICAgICAgaWYgKGRvYy5leGlzdHMpIHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiBHRVRfQ0hBUkFDVEVSLFxyXG4gICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICBjaGFyYWN0ZXI6IHsgLi4uZG9jLmRhdGEoKSwgaWQ6IGRvYy5pZCB9LFxyXG4gICAgICAgICAgICBjaGFyYUV4aXN0czogdHJ1ZSxcclxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IEdFVF9DSEFSQUNURVIsXHJcbiAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgIGNoYXJhRXhpc3RzOiBmYWxzZSxcclxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRDaGFyYWN0ZXIgPSAoZGF0YSkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGlzcGF0Y2goeyB0eXBlOiBBRERfQ0hBUkFDVEVSLCBwYXlsb2FkOiB7IGxvYWRpbmc6IHRydWUgfSB9KTtcclxuICBjb25zdCBpbWFnZU5hbWUgPSBgJHtkYXRhLmZpcnN0bmFtZS50b0xvd2VyQ2FzZSgpfSR7ZGF0YS5sYXN0bmFtZSAmJiBcIl9cIn0ke1xyXG4gICAgZGF0YS5sYXN0bmFtZSAmJiBkYXRhLmxhc3RuYW1lLnRvTG93ZXJDYXNlKClcclxuICB9YDtcclxuICBpZiAodHlwZW9mIGRhdGEuaW1hZ2UgPT09IFwib2JqZWN0XCIpIHtcclxuICAgIHN0b3JhZ2VcclxuICAgICAgLnJlZihgJHthdXRoLmN1cnJlbnRVc2VyLnVpZH0vJHtpbWFnZU5hbWV9YClcclxuICAgICAgLnB1dChkYXRhLmltYWdlKVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHN0b3JhZ2VcclxuICAgICAgICAgIC5yZWYoYXV0aC5jdXJyZW50VXNlci51aWQpXHJcbiAgICAgICAgICAuY2hpbGQoaW1hZ2VOYW1lKVxyXG4gICAgICAgICAgLmdldERvd25sb2FkVVJMKCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKCh1cmwpID0+IHtcclxuICAgICAgICByZXR1cm4gZGIuY29sbGVjdGlvbihcImNoYXJhY3RlcnNcIikuYWRkKHtcclxuICAgICAgICAgIC4uLmRhdGEsXHJcbiAgICAgICAgICBpbWFnZTogdXJsLFxyXG4gICAgICAgICAgY3JlYXRlZEF0OiBmaXJlYmFzZS5maXJlc3RvcmUuRmllbGRWYWx1ZS5zZXJ2ZXJUaW1lc3RhbXAoKSxcclxuICAgICAgICAgIGxpa2VzQ291bnQ6IDAsXHJcbiAgICAgICAgICBsaWtlczogW10sXHJcbiAgICAgICAgICBkaXNsaWtlczogW10sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoXCJDaGFyYWN0ZXIgYWRkZWQgc3VjY2Vzc2Z1bGx5XCIpO1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IEFERF9DSEFSQUNURVIsXHJcbiAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiQ2hhcmFjdGVyIGFkZGVkIHN1Y2Nlc3NmdWxseVwiLFxyXG4gICAgICAgICAgICBjaGFyYWN0ZXJJZDogcmVzLmlkLFxyXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihlcnIubWVzc2FnZSk7XHJcbiAgICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBkYi5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc1wiKVxyXG4gICAgICAuYWRkKHtcclxuICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgIGNyZWF0ZWRBdDogZmlyZWJhc2UuZmlyZXN0b3JlLkZpZWxkVmFsdWUuc2VydmVyVGltZXN0YW1wKCksXHJcbiAgICAgICAgbGlrZXNDb3VudDogMCxcclxuICAgICAgICBsaWtlczogW10sXHJcbiAgICAgICAgZGlzbGlrZXM6IFtdLFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgbWVzc2FnZS5zdWNjZXNzKFwiQ2hhcmFjdGVyIGFkZGVkIHN1Y2Nlc3NmdWxseVwiKTtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiBBRERfQ0hBUkFDVEVSLFxyXG4gICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkNoYXJhY3RlciBhZGRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgICAgY2hhcmFjdGVySWQ6IHJlcy5pZCxcclxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoZXJyLm1lc3NhZ2UpO1xyXG4gICAgICB9KTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZWRpdENoYXJhY3RlciA9IChkYXRhLCBpZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGlzcGF0Y2goeyB0eXBlOiBFRElUX0NIQVJBQ1RFUiwgcGF5bG9hZDogeyBsb2FkaW5nQ2hhcmFjdGVyOiB0cnVlIH0gfSk7XHJcbiAgY29uc3QgaW1hZ2VOYW1lID0gYCR7ZGF0YS5maXJzdG5hbWUudG9Mb3dlckNhc2UoKX0ke2RhdGEubGFzdG5hbWUgJiYgXCJfXCJ9JHtcclxuICAgIGRhdGEubGFzdG5hbWUgJiYgZGF0YS5sYXN0bmFtZS50b0xvd2VyQ2FzZSgpXHJcbiAgfWA7XHJcbiAgaWYgKGRhdGEuaW1hZ2UgJiYgdHlwZW9mIGRhdGEuaW1hZ2UgPT09IFwib2JqZWN0XCIpIHtcclxuICAgIHN0b3JhZ2VcclxuICAgICAgLnJlZihgJHthdXRoLmN1cnJlbnRVc2VyLnVpZH0vJHtpbWFnZU5hbWV9YClcclxuICAgICAgLnB1dChkYXRhLmltYWdlKVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHN0b3JhZ2VcclxuICAgICAgICAgIC5yZWYoYXV0aC5jdXJyZW50VXNlci51aWQpXHJcbiAgICAgICAgICAuY2hpbGQoaW1hZ2VOYW1lKVxyXG4gICAgICAgICAgLmdldERvd25sb2FkVVJMKCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKCh1cmwpID0+IHtcclxuICAgICAgICByZXR1cm4gZGJcclxuICAgICAgICAgIC5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc1wiKVxyXG4gICAgICAgICAgLmRvYyhpZClcclxuICAgICAgICAgIC51cGRhdGUoe1xyXG4gICAgICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgICAgICBpbWFnZTogdXJsLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiBFRElUX0NIQVJBQ1RFUixcclxuICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJDaGFyYWN0ZXIgZWRpdGVkIHN1Y2Nlc3NmdWxseVwiLFxyXG4gICAgICAgICAgICBsb2FkaW5nQ2hhcmFjdGVyOiBmYWxzZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihlcnIubWVzc2FnZSk7XHJcbiAgICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBkYi5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc1wiKVxyXG4gICAgICAuZG9jKGlkKVxyXG4gICAgICAudXBkYXRlKHtcclxuICAgICAgICAuLi5kYXRhLFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogRURJVF9DSEFSQUNURVIsXHJcbiAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiQ2hhcmFjdGVyIGVkaXRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgICAgbG9hZGluZ0NoYXJhY3RlcjogZmFsc2UsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoZXJyLm1lc3NhZ2UpO1xyXG4gICAgICB9KTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VXNlckNoYXJhY3RlcnMgPSAodXNlcklkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkYi5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc1wiKVxyXG4gICAgLndoZXJlKFwiYXV0aG9ySWRcIiwgXCI9PVwiLCB1c2VySWQpXHJcbiAgICAuZ2V0KClcclxuICAgIC50aGVuKChkb2NzKSA9PiB7XHJcbiAgICAgIGxldCBpdGVtcyA9IFtdO1xyXG4gICAgICBkb2NzLmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgICAgIGl0ZW1zID0gWy4uLml0ZW1zLCB7IGlkOiBkb2MuaWQsIC4uLmRvYy5kYXRhKCkgfV07XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gaXRlbXM7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGl0ZW1zKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogR0VUX1VTRVJfQ0hBUkFDVEVSUywgcGF5bG9hZDogaXRlbXMgfSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRGYXZvcml0ZUNoYXJhY3RlcnMgPSAoKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkYi5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc0xpa2VzXCIpXHJcbiAgICAud2hlcmUoXCJzZW5kZXJJZFwiLCBcIj09XCIsIGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigoZG9jcykgPT4ge1xyXG4gICAgICBsZXQgZmF2QXJyID0gW107XHJcbiAgICAgIGRvY3MuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICAgICAgZmF2QXJyID0gWy4uLmZhdkFyciwgZG9jLmRhdGEoKS5jaGFyYWN0ZXJJZF07XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gZmF2QXJyO1xyXG4gICAgfSlcclxuICAgIC50aGVuKCh1c2VycykgPT4ge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSB1c2Vycy5tYXAoKHVzZXIpID0+XHJcbiAgICAgICAgZGIuY29sbGVjdGlvbihcImNoYXJhY3RlcnNcIikuZG9jKHVzZXIpLmdldCgpXHJcbiAgICAgICk7XHJcbiAgICAgIFByb21pc2UuYWxsKHJlc3VsdCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgbGV0IGZhdlVzZXJzID0gW107XHJcbiAgICAgICAgcmVzLmZvckVhY2goXHJcbiAgICAgICAgICAoZG9jKSA9PiAoZmF2VXNlcnMgPSBbLi4uZmF2VXNlcnMsIHsgaWQ6IGRvYy5pZCwgLi4uZG9jLmRhdGEoKSB9XSlcclxuICAgICAgICApO1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IEdFVF9GQVZPUklURV9DSEFSQUNURVJTLFxyXG4gICAgICAgICAgcGF5bG9hZDogZmF2VXNlcnMsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcbiIsImltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcbmltcG9ydCBcImZpcmViYXNlL2F1dGhcIjtcclxuaW1wb3J0IFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XHJcbmltcG9ydCBcImZpcmViYXNlL3N0b3JhZ2VcIjtcclxuXHJcbmNvbnN0IHByb2RDb25maWcgPSB7XHJcbiAgYXBpS2V5OiBwcm9jZXNzLmVudi5GSVJFQkFTRV9BUElfS0VZLFxyXG4gIGF1dGhEb21haW46IHByb2Nlc3MuZW52LkZJUkVCQVNFX0FVVEhfRE9NQUlOLFxyXG4gIGRhdGFiYXNlVVJMOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9EQVRBQkFTRV9VUkwsXHJcbiAgcHJvamVjdElkOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9QUk9KRUNUX0lELFxyXG4gIHN0b3JhZ2VCdWNrZXQ6IHByb2Nlc3MuZW52LkZJUkVCQVNFX1NUT1JBR0VfQlVDS0VULFxyXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9NRVNTQUdJTkdfU0VOREVSX0lELFxyXG4gIGFwcElkOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9BUFBfSUQsXHJcbn07XHJcblxyXG5jb25zdCBkZXZDb25maWcgPSB7XHJcbiAgYXBpS2V5OiBwcm9jZXNzLmVudi5GSVJFQkFTRV9BUElfS0VZLFxyXG4gIGF1dGhEb21haW46IHByb2Nlc3MuZW52LkZJUkVCQVNFX0FVVEhfRE9NQUlOLFxyXG4gIGRhdGFiYXNlVVJMOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9EQVRBQkFTRV9VUkwsXHJcbiAgcHJvamVjdElkOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9QUk9KRUNUX0lELFxyXG4gIHN0b3JhZ2VCdWNrZXQ6IHByb2Nlc3MuZW52LkZJUkVCQVNFX1NUT1JBR0VfQlVDS0VULFxyXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9NRVNTQUdJTkdfU0VOREVSX0lELFxyXG4gIGFwcElkOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9BUFBfSUQsXHJcbn07XHJcblxyXG5jb25zdCBjb25maWcgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBwcm9kQ29uZmlnIDogZGV2Q29uZmlnO1xyXG5cclxuaWYgKCFmaXJlYmFzZS5hcHBzLmxlbmd0aCkge1xyXG4gIGZpcmViYXNlLmluaXRpYWxpemVBcHAoY29uZmlnKTtcclxufVxyXG5cclxuY29uc3QgZGIgPSBmaXJlYmFzZS5maXJlc3RvcmUoKTtcclxuY29uc3QgYXV0aCA9IGZpcmViYXNlLmF1dGgoKTtcclxuY29uc3Qgc3RvcmFnZSA9IGZpcmViYXNlLnN0b3JhZ2UoKTtcclxuXHJcbmV4cG9ydCB7IGRiLCBhdXRoLCBzdG9yYWdlIH07XHJcbmV4cG9ydCBkZWZhdWx0IGNvbmZpZztcclxuIiwiZXhwb3J0IGNvbnN0IENBVEVHT1JJRVMgPSBbXHJcbiAgeyBuYW1lOiBcIkRyYW1hXCIsIHZhbHVlOiBcImRyYW1hXCIgfSxcclxuICB7IG5hbWU6IFwiQ29tZWR5XCIsIHZhbHVlOiBcImNvbWVkeVwiIH0sXHJcbiAgeyBuYW1lOiBcIkhvcnJvclwiLCB2YWx1ZTogXCJob3Jyb3JcIiB9LFxyXG4gIHsgbmFtZTogXCJSb21hbmNlXCIsIHZhbHVlOiBcInJvbWFuY2VcIiB9LFxyXG4gIHsgbmFtZTogXCJTY2ktZmlcIiwgdmFsdWU6IFwic2NpLWZpXCIgfSxcclxuICB7IG5hbWU6IFwiRmFudGFzeVwiLCB2YWx1ZTogXCJmYW50YXN5XCIgfSxcclxuICB7IG5hbWU6IFwiSHVtb3JcIiwgdmFsdWU6IFwiaHVtb3JcIiB9LFxyXG4gIHsgbmFtZTogXCJBY3Rpb25cIiwgdmFsdWU6IFwiYWN0aW9uXCIgfSxcclxuICB7IG5hbWU6IFwiVGhyaWxsZXJcIiwgdmFsdWU6IFwidGhyaWxsZXJcIiB9LFxyXG4gIHsgbmFtZTogXCJTdXBlcm5hdHVyYWxcIiwgdmFsdWU6IFwic3VwZXJuYXR1cmFsXCIgfSxcclxuICB7IG5hbWU6IFwiQWR2ZW50dXJlXCIsIHZhbHVlOiBcImFkdmVudHVyZVwiIH0sXHJcbiAgeyBuYW1lOiBcIk15c3RlcnlcIiwgdmFsdWU6IFwibXlzdGVyeVwiIH0sXHJcbiAgeyBuYW1lOiBcIldlc3Rlcm5cIiwgdmFsdWU6IFwid2VzdGVyblwiIH0sXHJcbiAgeyBuYW1lOiBcIkhpc3RvcnlcIiwgdmFsdWU6IFwiaGlzdG9yeVwiIH0sXHJcbiAgeyBuYW1lOiBcIkNyaW1lXCIsIHZhbHVlOiBcImNyaW1lXCIgfSxcclxuICB7IG5hbWU6IFwiRmFuZmljdGlvblwiLCB2YWx1ZTogXCJmYW5maWN0aW9uXCIgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBDT1BZUklHSFRTID0gW1xyXG4gIHsgbmFtZTogXCJQdWJsaWMgRG9tYWluXCIsIHZhbHVlOiBcInB1YmxpYyBkb21haW5cIiB9LFxyXG4gIHsgbmFtZTogXCJBbGwgUmlnaHRzIFJlc2VydmVkXCIsIHZhbHVlOiBcImFsbCByaWdodHMgcmVzZXJ2ZWRcIiB9LFxyXG4gIHsgbmFtZTogXCJDcmVhdGl2ZSBDb21tb25zXCIsIHZhbHVlOiBcImNyZWF0aXZlIGNvbW1vbnNcIiB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IExBTkdVQUdFUyA9IFtcclxuICB7IG5hbWU6IFwiQWZhclwiLCB2YWx1ZTogXCJhYVwiIH0sXHJcbiAgeyBuYW1lOiBcIkFia2hhemlhblwiLCB2YWx1ZTogXCJhYlwiIH0sXHJcbiAgeyBuYW1lOiBcIkF2ZXN0YW5cIiwgdmFsdWU6IFwiYWVcIiB9LFxyXG4gIHsgbmFtZTogXCJBZnJpa2FhbnNcIiwgdmFsdWU6IFwiYWZcIiB9LFxyXG4gIHsgbmFtZTogXCJBa2FuXCIsIHZhbHVlOiBcImFrXCIgfSxcclxuICB7IG5hbWU6IFwiQW1oYXJpY1wiLCB2YWx1ZTogXCJhbVwiIH0sXHJcbiAgeyBuYW1lOiBcIkFyYWdvbmVzZVwiLCB2YWx1ZTogXCJhblwiIH0sXHJcbiAgeyBuYW1lOiBcIkFyYWJpY1wiLCB2YWx1ZTogXCJhclwiIH0sXHJcbiAgeyBuYW1lOiBcIkFzc2FtZXNlXCIsIHZhbHVlOiBcImFzXCIgfSxcclxuICB7IG5hbWU6IFwiQXZhcmljXCIsIHZhbHVlOiBcImF2XCIgfSxcclxuICB7IG5hbWU6IFwiQXltYXJhXCIsIHZhbHVlOiBcImF5XCIgfSxcclxuICB7IG5hbWU6IFwiQXplcmJhaWphbmlcIiwgdmFsdWU6IFwiYXpcIiB9LFxyXG4gIHsgbmFtZTogXCJCYXNoa2lyXCIsIHZhbHVlOiBcImJhXCIgfSxcclxuICB7IG5hbWU6IFwiQmVsYXJ1c2lhblwiLCB2YWx1ZTogXCJiZVwiIH0sXHJcbiAgeyBuYW1lOiBcIkJ1bGdhcmlhblwiLCB2YWx1ZTogXCJiZ1wiIH0sXHJcbiAgeyBuYW1lOiBcIkJpaGFyaVwiLCB2YWx1ZTogXCJiaFwiIH0sXHJcbiAgeyBuYW1lOiBcIkJpc2xhbWFcIiwgdmFsdWU6IFwiYmlcIiB9LFxyXG4gIHsgbmFtZTogXCJCYW1iYXJhXCIsIHZhbHVlOiBcImJtXCIgfSxcclxuICB7IG5hbWU6IFwiQmVuZ2FsaVwiLCB2YWx1ZTogXCJiblwiIH0sXHJcbiAgeyBuYW1lOiBcIlRpYmV0YW5cIiwgdmFsdWU6IFwiYm9cIiB9LFxyXG4gIHsgbmFtZTogXCJCcmV0b25cIiwgdmFsdWU6IFwiYnJcIiB9LFxyXG4gIHsgbmFtZTogXCJCb3NuaWFuXCIsIHZhbHVlOiBcImJzXCIgfSxcclxuICB7IG5hbWU6IFwiQ2F0YWxhblwiLCB2YWx1ZTogXCJjYVwiIH0sXHJcbiAgeyBuYW1lOiBcIkNoZWNoZW5cIiwgdmFsdWU6IFwiY2VcIiB9LFxyXG4gIHsgbmFtZTogXCJDaGFtb3Jyb1wiLCB2YWx1ZTogXCJjaFwiIH0sXHJcbiAgeyBuYW1lOiBcIkNvcnNpY2FuXCIsIHZhbHVlOiBcImNvXCIgfSxcclxuICB7IG5hbWU6IFwiQ3JlZVwiLCB2YWx1ZTogXCJjclwiIH0sXHJcbiAgeyBuYW1lOiBcIkN6ZWNoXCIsIHZhbHVlOiBcImNzXCIgfSxcclxuICB7IG5hbWU6IFwiT2xkIENodXJjaCBTbGF2b25pY1wiLCB2YWx1ZTogXCJjdVwiIH0sXHJcbiAgeyBuYW1lOiBcIkNodXZhc2hcIiwgdmFsdWU6IFwiY3ZcIiB9LFxyXG4gIHsgbmFtZTogXCJXZWxzaFwiLCB2YWx1ZTogXCJjeVwiIH0sXHJcbiAgeyBuYW1lOiBcIkRhbmlzaFwiLCB2YWx1ZTogXCJkYVwiIH0sXHJcbiAgeyBuYW1lOiBcIkdlcm1hblwiLCB2YWx1ZTogXCJkZVwiIH0sXHJcbiAgeyBuYW1lOiBcIkRpdmVoaVwiLCB2YWx1ZTogXCJkdlwiIH0sXHJcbiAgeyBuYW1lOiBcIkR6b25na2hhXHRcIiwgdmFsdWU6IFwiZHpcIiB9LFxyXG4gIHsgbmFtZTogXCJFd2VcIiwgdmFsdWU6IFwiZWVcIiB9LFxyXG4gIHsgbmFtZTogXCJHcmVla1wiLCB2YWx1ZTogXCJlbFwiIH0sXHJcbiAgeyBuYW1lOiBcIkVuZ2xpc2hcIiwgdmFsdWU6IFwiZW5cIiB9LFxyXG4gIHsgbmFtZTogXCJFc3BlcmFudG9cIiwgdmFsdWU6IFwiZW9cIiB9LFxyXG4gIHsgbmFtZTogXCJTcGFuaXNoXCIsIHZhbHVlOiBcImVzXCIgfSxcclxuICB7IG5hbWU6IFwiRXN0b25pYW5cIiwgdmFsdWU6IFwiZXRcIiB9LFxyXG4gIHsgbmFtZTogXCJCYXNxdWVcIiwgdmFsdWU6IFwiZXVcIiB9LFxyXG4gIHsgbmFtZTogXCJQZXJzaWFuXCIsIHZhbHVlOiBcImZhXCIgfSxcclxuICB7IG5hbWU6IFwiRnVsYWhcIiwgdmFsdWU6IFwiZmZcIiB9LFxyXG4gIHsgbmFtZTogXCJGaW5uaXNoXCIsIHZhbHVlOiBcImZpXCIgfSxcclxuICB7IG5hbWU6IFwiRmlqaWFuXCIsIHZhbHVlOiBcImZqXCIgfSxcclxuICB7IG5hbWU6IFwiRmFyb2VzZVwiLCB2YWx1ZTogXCJmb1wiIH0sXHJcbiAgeyBuYW1lOiBcIkZyZW5jaFwiLCB2YWx1ZTogXCJmclwiIH0sXHJcbiAgeyBuYW1lOiBcIldlc3Rlcm4gRnJpc2lhblwiLCB2YWx1ZTogXCJmeVwiIH0sXHJcbiAgeyBuYW1lOiBcIklyaXNoXCIsIHZhbHVlOiBcImdhXCIgfSxcclxuICB7IG5hbWU6IFwiU2NvdHRpc2ggR2FlbGljXCIsIHZhbHVlOiBcImdkXCIgfSxcclxuICB7IG5hbWU6IFwiR2FsaWNpYW5cIiwgdmFsdWU6IFwiZ2xcIiB9LFxyXG4gIHsgbmFtZTogXCJHdWFyYW5pXCIsIHZhbHVlOiBcImduXCIgfSxcclxuICB7IG5hbWU6IFwiR3VqYXJhdGlcIiwgdmFsdWU6IFwiZ3VcIiB9LFxyXG4gIHsgbmFtZTogXCJNYW54XCIsIHZhbHVlOiBcImd2XCIgfSxcclxuICB7IG5hbWU6IFwiSGF1c2FcIiwgdmFsdWU6IFwiaGFcIiB9LFxyXG4gIHsgbmFtZTogXCJIZWJyZXdcIiwgdmFsdWU6IFwiaGVcIiB9LFxyXG4gIHsgbmFtZTogXCJIaW5kaVwiLCB2YWx1ZTogXCJoaVwiIH0sXHJcbiAgeyBuYW1lOiBcIkhpcmkgTW90dVwiLCB2YWx1ZTogXCJob1wiIH0sXHJcbiAgeyBuYW1lOiBcIkNyb2F0aWFuXCIsIHZhbHVlOiBcImhyXCIgfSxcclxuICB7IG5hbWU6IFwiSGFpdGlhblwiLCB2YWx1ZTogXCJodFwiIH0sXHJcbiAgeyBuYW1lOiBcIkh1bmdhcmlhblwiLCB2YWx1ZTogXCJodVwiIH0sXHJcbiAgeyBuYW1lOiBcIkFybWVuaWFuXCIsIHZhbHVlOiBcImh5XCIgfSxcclxuICB7IG5hbWU6IFwiSGVyZXJvXCIsIHZhbHVlOiBcImh6XCIgfSxcclxuICB7IG5hbWU6IFwiSW50ZXJsaW5ndWFcIiwgdmFsdWU6IFwiaWFcIiB9LFxyXG4gIHsgbmFtZTogXCJJbmRvbmVzaWFuXCIsIHZhbHVlOiBcImlkXCIgfSxcclxuICB7IG5hbWU6IFwiSW50ZXJsaW5ndWVcIiwgdmFsdWU6IFwiaWVcIiB9LFxyXG4gIHsgbmFtZTogXCJJZ2JvXCIsIHZhbHVlOiBcImlnXCIgfSxcclxuICB7IG5hbWU6IFwiU2ljaHVhbiBZaVwiLCB2YWx1ZTogXCJpaVwiIH0sXHJcbiAgeyBuYW1lOiBcIkludXBpYXFcIiwgdmFsdWU6IFwiaWtcIiB9LFxyXG4gIHsgbmFtZTogXCJJZG9cIiwgdmFsdWU6IFwiaW9cIiB9LFxyXG4gIHsgbmFtZTogXCJJY2VsYW5kaWNcIiwgdmFsdWU6IFwiaXNcIiB9LFxyXG4gIHsgbmFtZTogXCJJdGFsaWFuXCIsIHZhbHVlOiBcIml0XCIgfSxcclxuICB7IG5hbWU6IFwiSW51a3RpdHV0XCIsIHZhbHVlOiBcIml1XCIgfSxcclxuICB7IG5hbWU6IFwiSmFwYW5lc2VcIiwgdmFsdWU6IFwiamFcIiB9LFxyXG4gIHsgbmFtZTogXCJKYXZhbmVzZVwiLCB2YWx1ZTogXCJqdlwiIH0sXHJcbiAgeyBuYW1lOiBcIkdlb3JnaWFuXCIsIHZhbHVlOiBcImthXCIgfSxcclxuICB7IG5hbWU6IFwiS29uZ29cIiwgdmFsdWU6IFwia2dcIiB9LFxyXG4gIHsgbmFtZTogXCJLaWt1eXVcIiwgdmFsdWU6IFwia2lcIiB9LFxyXG4gIHsgbmFtZTogXCJLd2FueWFtYVwiLCB2YWx1ZTogXCJralwiIH0sXHJcbiAgeyBuYW1lOiBcIkthemFraFwiLCB2YWx1ZTogXCJra1wiIH0sXHJcbiAgeyBuYW1lOiBcIkdyZWVubGFuZGljXCIsIHZhbHVlOiBcImtsXCIgfSxcclxuICB7IG5hbWU6IFwiS2htZXJcIiwgdmFsdWU6IFwia21cIiB9LFxyXG4gIHsgbmFtZTogXCJLYW5uYWRhXCIsIHZhbHVlOiBcImtuXCIgfSxcclxuICB7IG5hbWU6IFwiS29yZWFuXCIsIHZhbHVlOiBcImtvXCIgfSxcclxuICB7IG5hbWU6IFwiS2FudXJpXCIsIHZhbHVlOiBcImtyXCIgfSxcclxuICB7IG5hbWU6IFwiS2FzaG1pcmlcIiwgdmFsdWU6IFwia3NcIiB9LFxyXG4gIHsgbmFtZTogXCJLdXJkaXNoXCIsIHZhbHVlOiBcImt1XCIgfSxcclxuICB7IG5hbWU6IFwiS29taVwiLCB2YWx1ZTogXCJrdlwiIH0sXHJcbiAgeyBuYW1lOiBcIkNvcm5pc2hcIiwgdmFsdWU6IFwia3dcIiB9LFxyXG4gIHsgbmFtZTogXCJLaXJnaGl6XCIsIHZhbHVlOiBcImt5XCIgfSxcclxuICB7IG5hbWU6IFwiTGF0aW5cIiwgdmFsdWU6IFwibGFcIiB9LFxyXG4gIHsgbmFtZTogXCJMdXhlbWJvdXJnaXNoXCIsIHZhbHVlOiBcImxiXCIgfSxcclxuICB7IG5hbWU6IFwiR2FuZGFcIiwgdmFsdWU6IFwibGdcIiB9LFxyXG4gIHsgbmFtZTogXCJMaW1idXJnaXNoXCIsIHZhbHVlOiBcImxpXCIgfSxcclxuICB7IG5hbWU6IFwiTGluZ2FsYVwiLCB2YWx1ZTogXCJsblwiIH0sXHJcbiAgeyBuYW1lOiBcIkxhb1wiLCB2YWx1ZTogXCJsb1wiIH0sXHJcbiAgeyBuYW1lOiBcIkxpdGh1YW5pYW5cIiwgdmFsdWU6IFwibHRcIiB9LFxyXG4gIHsgbmFtZTogXCJMdWJhXCIsIHZhbHVlOiBcImx1XCIgfSxcclxuICB7IG5hbWU6IFwiTGF0dmlhblwiLCB2YWx1ZTogXCJsdlwiIH0sXHJcbiAgeyBuYW1lOiBcIk1hbGFnYXN5XCIsIHZhbHVlOiBcIm1nXCIgfSxcclxuICB7IG5hbWU6IFwiTWFyc2hhbGxlc2VcIiwgdmFsdWU6IFwibWhcIiB9LFxyXG4gIHsgbmFtZTogXCJNxIFvcmlcIiwgdmFsdWU6IFwibWlcIiB9LFxyXG4gIHsgbmFtZTogXCJNYWNlZG9uaWFuXCIsIHZhbHVlOiBcIm1rXCIgfSxcclxuICB7IG5hbWU6IFwiTWFsYXlhbGFtXCIsIHZhbHVlOiBcIm1sXCIgfSxcclxuICB7IG5hbWU6IFwiTW9uZ29saWFuXCIsIHZhbHVlOiBcIm1uXCIgfSxcclxuICB7IG5hbWU6IFwiTW9sZGF2aWFuXCIsIHZhbHVlOiBcIm1vXCIgfSxcclxuICB7IG5hbWU6IFwiTWFyYXRoaVwiLCB2YWx1ZTogXCJtclwiIH0sXHJcbiAgeyBuYW1lOiBcIk1hbGF5XCIsIHZhbHVlOiBcIm1zXCIgfSxcclxuICB7IG5hbWU6IFwiTWFsdGVzZVwiLCB2YWx1ZTogXCJtdFwiIH0sXHJcbiAgeyBuYW1lOiBcIkJ1cm1lc2VcIiwgdmFsdWU6IFwibXlcIiB9LFxyXG4gIHsgbmFtZTogXCJOYXVydVwiLCB2YWx1ZTogXCJuYVwiIH0sXHJcbiAgeyBuYW1lOiBcIk5vcndlZ2lhbiBCb2ttw6VsXCIsIHZhbHVlOiBcIm5iXCIgfSxcclxuICB7IG5hbWU6IFwiTm9ydGggTmRlYmVsZVwiLCB2YWx1ZTogXCJuZFwiIH0sXHJcbiAgeyBuYW1lOiBcIk5lcGFsaVwiLCB2YWx1ZTogXCJuZVwiIH0sXHJcbiAgeyBuYW1lOiBcIk5kb25nYVwiLCB2YWx1ZTogXCJuZ1wiIH0sXHJcbiAgeyBuYW1lOiBcIkR1dGNoXCIsIHZhbHVlOiBcIm5sXCIgfSxcclxuICB7IG5hbWU6IFwiTm9yd2VnaWFuIE55bm9yc2tcIiwgdmFsdWU6IFwibm5cIiB9LFxyXG4gIHsgbmFtZTogXCJOb3J3ZWdpYW5cIiwgdmFsdWU6IFwibm9cIiB9LFxyXG4gIHsgbmFtZTogXCJTb3V0aCBOZGViZWxlXCIsIHZhbHVlOiBcIm5yXCIgfSxcclxuICB7IG5hbWU6IFwiTmF2YWpvXCIsIHZhbHVlOiBcIm52XCIgfSxcclxuICB7IG5hbWU6IFwiQ2hpY2hld2FcIiwgdmFsdWU6IFwibnlcIiB9LFxyXG4gIHsgbmFtZTogXCJPY2NpdGFuXCIsIHZhbHVlOiBcIm9jXCIgfSxcclxuICB7IG5hbWU6IFwiT2ppYndhXCIsIHZhbHVlOiBcIm9qXCIgfSxcclxuICB7IG5hbWU6IFwiT3JvbW9cIiwgdmFsdWU6IFwib21cIiB9LFxyXG4gIHsgbmFtZTogXCJPcml5YVwiLCB2YWx1ZTogXCJvclwiIH0sXHJcbiAgeyBuYW1lOiBcIk9zc2V0aWFuXCIsIHZhbHVlOiBcIm9zXCIgfSxcclxuICB7IG5hbWU6IFwiUGFuamFiaVwiLCB2YWx1ZTogXCJwYVwiIH0sXHJcbiAgeyBuYW1lOiBcIlDEgWxpXCIsIHZhbHVlOiBcInBpXCIgfSxcclxuICB7IG5hbWU6IFwiUG9saXNoXCIsIHZhbHVlOiBcInBsXCIgfSxcclxuICB7IG5hbWU6IFwiUGFzaHRvXCIsIHZhbHVlOiBcInBzXCIgfSxcclxuICB7IG5hbWU6IFwiUG9ydHVndWVzZVwiLCB2YWx1ZTogXCJwdFwiIH0sXHJcbiAgeyBuYW1lOiBcIlF1ZWNodWFcIiwgdmFsdWU6IFwicXVcIiB9LFxyXG4gIHsgbmFtZTogXCJSZXVuaW9uZXNlXCIsIHZhbHVlOiBcInJjXCIgfSxcclxuICB7IG5hbWU6IFwiUm9tYW5zaFwiLCB2YWx1ZTogXCJybVwiIH0sXHJcbiAgeyBuYW1lOiBcIktpcnVuZGlcIiwgdmFsdWU6IFwicm5cIiB9LFxyXG4gIHsgbmFtZTogXCJSb21hbmlhblwiLCB2YWx1ZTogXCJyb1wiIH0sXHJcbiAgeyBuYW1lOiBcIlJ1c3NpYW5cIiwgdmFsdWU6IFwicnVcIiB9LFxyXG4gIHsgbmFtZTogXCJLaW55YXJ3YW5kYVwiLCB2YWx1ZTogXCJyd1wiIH0sXHJcbiAgeyBuYW1lOiBcIlNhbnNrcml0XCIsIHZhbHVlOiBcInNhXCIgfSxcclxuICB7IG5hbWU6IFwiU2FyZGluaWFuXCIsIHZhbHVlOiBcInNjXCIgfSxcclxuICB7IG5hbWU6IFwiU2luZGhpXCIsIHZhbHVlOiBcInNkXCIgfSxcclxuICB7IG5hbWU6IFwiTm9ydGhlcm4gU2FtaVwiLCB2YWx1ZTogXCJzZVwiIH0sXHJcbiAgeyBuYW1lOiBcIlNhbmdvXCIsIHZhbHVlOiBcInNnXCIgfSxcclxuICB7IG5hbWU6IFwiU2VyYm8tQ3JvYXRpYW5cIiwgdmFsdWU6IFwic2hcIiB9LFxyXG4gIHsgbmFtZTogXCJTaW5oYWxlc2VcIiwgdmFsdWU6IFwic2lcIiB9LFxyXG4gIHsgbmFtZTogXCJTbG92YWtcIiwgdmFsdWU6IFwic2tcIiB9LFxyXG4gIHsgbmFtZTogXCJTbG92ZW5pYW5cIiwgdmFsdWU6IFwic2xcIiB9LFxyXG4gIHsgbmFtZTogXCJTYW1vYW5cIiwgdmFsdWU6IFwic21cIiB9LFxyXG4gIHsgbmFtZTogXCJTaG9uYVwiLCB2YWx1ZTogXCJzblwiIH0sXHJcbiAgeyBuYW1lOiBcIlNvbWFsaVwiLCB2YWx1ZTogXCJzb1wiIH0sXHJcbiAgeyBuYW1lOiBcIkFsYmFuaWFuXCIsIHZhbHVlOiBcInNxXCIgfSxcclxuICB7IG5hbWU6IFwiU2VyYmlhblwiLCB2YWx1ZTogXCJzclwiIH0sXHJcbiAgeyBuYW1lOiBcIlN3YXRpXCIsIHZhbHVlOiBcInNzXCIgfSxcclxuICB7IG5hbWU6IFwiU290aG9cIiwgdmFsdWU6IFwic3RcIiB9LFxyXG4gIHsgbmFtZTogXCJTdW5kYW5lc2VcIiwgdmFsdWU6IFwic3VcIiB9LFxyXG4gIHsgbmFtZTogXCJTd2VkaXNoXCIsIHZhbHVlOiBcInN2XCIgfSxcclxuICB7IG5hbWU6IFwiU3dhaGlsaVwiLCB2YWx1ZTogXCJzd1wiIH0sXHJcbiAgeyBuYW1lOiBcIlRhbWlsXCIsIHZhbHVlOiBcInRhXCIgfSxcclxuICB7IG5hbWU6IFwiVGVsdWd1XCIsIHZhbHVlOiBcInRlXCIgfSxcclxuICB7IG5hbWU6IFwiVGFqaWtcIiwgdmFsdWU6IFwidGdcIiB9LFxyXG4gIHsgbmFtZTogXCJUaGFpXCIsIHZhbHVlOiBcInRoXCIgfSxcclxuICB7IG5hbWU6IFwiVGlncmlueWFcIiwgdmFsdWU6IFwidGlcIiB9LFxyXG4gIHsgbmFtZTogXCJUdXJrbWVuXCIsIHZhbHVlOiBcInRrXCIgfSxcclxuICB7IG5hbWU6IFwiVGFnYWxvZ1wiLCB2YWx1ZTogXCJ0bFwiIH0sXHJcbiAgeyBuYW1lOiBcIlRzd2FuYVwiLCB2YWx1ZTogXCJ0blwiIH0sXHJcbiAgeyBuYW1lOiBcIlRvbmdhXCIsIHZhbHVlOiBcInRvXCIgfSxcclxuICB7IG5hbWU6IFwiVHVya2lzaFwiLCB2YWx1ZTogXCJ0clwiIH0sXHJcbiAgeyBuYW1lOiBcIlRzb25nYVwiLCB2YWx1ZTogXCJ0c1wiIH0sXHJcbiAgeyBuYW1lOiBcIlRhdGFyXCIsIHZhbHVlOiBcInR0XCIgfSxcclxuICB7IG5hbWU6IFwiVHdpXCIsIHZhbHVlOiBcInR3XCIgfSxcclxuICB7IG5hbWU6IFwiVGFoaXRpYW5cIiwgdmFsdWU6IFwidHlcIiB9LFxyXG4gIHsgbmFtZTogXCJVaWdodXJcIiwgdmFsdWU6IFwidWdcIiB9LFxyXG4gIHsgbmFtZTogXCJVa3JhaW5pYW5cIiwgdmFsdWU6IFwidWtcIiB9LFxyXG4gIHsgbmFtZTogXCJVcmR1XCIsIHZhbHVlOiBcInVyXCIgfSxcclxuICB7IG5hbWU6IFwiVXpiZWtcIiwgdmFsdWU6IFwidXpcIiB9LFxyXG4gIHsgbmFtZTogXCJWZW5kYVwiLCB2YWx1ZTogXCJ2ZVwiIH0sXHJcbiAgeyBuYW1lOiBcIlZpw6p0IE5hbWVzZVwiLCB2YWx1ZTogXCJ2aVwiIH0sXHJcbiAgeyBuYW1lOiBcIlZvbGFww7xrXCIsIHZhbHVlOiBcInZvXCIgfSxcclxuICB7IG5hbWU6IFwiV2FsbG9vblwiLCB2YWx1ZTogXCJ3YVwiIH0sXHJcbiAgeyBuYW1lOiBcIldvbG9mXCIsIHZhbHVlOiBcIndvXCIgfSxcclxuICB7IG5hbWU6IFwiWGhvc2FcIiwgdmFsdWU6IFwieGhcIiB9LFxyXG4gIHsgbmFtZTogXCJZaWRkaXNoXCIsIHZhbHVlOiBcInlpXCIgfSxcclxuICB7IG5hbWU6IFwiWW9ydWJhXCIsIHZhbHVlOiBcInlvXCIgfSxcclxuICB7IG5hbWU6IFwiWmh1YW5nXCIsIHZhbHVlOiBcInphXCIgfSxcclxuICB7IG5hbWU6IFwiQ2hpbmVzZVwiLCB2YWx1ZTogXCJ6aFwiIH0sXHJcbiAgeyBuYW1lOiBcIlp1bHVcIiwgdmFsdWU6IFwienVcIiB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNUQVRVUyA9IFtcclxuICB7IG5hbWU6IFwiSW4gUHJvZ3Jlc3NcIiwgdmFsdWU6IFwiaW4gcHJvZ3Jlc3NcIiB9LFxyXG4gIHsgbmFtZTogXCJJbiBIaWF0dXNcIiwgdmFsdWU6IFwiaW4gaGlhdHVzXCIgfSxcclxuICB7IG5hbWU6IFwiQ29tcGxldGVkXCIsIHZhbHVlOiBcImNvbXBsZXRlZFwiIH0sXHJcbl07XHJcblxyXG4vLyBUWVBFU1xyXG5leHBvcnQgY29uc3QgR0VUX1BST0ZJTEUgPSBcIkdFVF9QUk9GSUxFXCI7XHJcbmV4cG9ydCBjb25zdCBMT0dJTiA9IFwiTE9HSU5cIjtcclxuZXhwb3J0IGNvbnN0IFJFR0lTVEVSID0gXCJSRUdJU1RFUlwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9TVE9SWSA9IFwiR0VUX1NUT1JZXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfVVNFUl9TVE9SSUVTID0gXCJHRVRfVVNFUl9TVE9SSUVTXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfRkFWT1JJVEVfU1RPUklFUyA9IFwiR0VUX0ZBVk9SSVRFX1NUT1JJRVNcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9TVE9SWSA9IFwiQUREX1NUT1JZXCI7XHJcbmV4cG9ydCBjb25zdCBFRElUX1NUT1JZID0gXCJFRElUX1NUT1JZXCI7XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX0NIQVBURVIgPSBcIkdFVF9DSEFQVEVSXCI7XHJcbmV4cG9ydCBjb25zdCBBRERfQ0hBUFRFUiA9IFwiQUREX0NIQVBURVJcIjtcclxuZXhwb3J0IGNvbnN0IEVESVRfQ0hBUFRFUiA9IFwiRURJVF9DSEFQVEVSXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfQ0hBUFRFUlMgPSBcIkdFVF9DSEFQVEVSU1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9DSEFSQUNURVIgPSBcIkFERF9DSEFSQUNURVJcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9DSEFSQUNURVIgPSBcIkdFVF9DSEFSQUNURVJcIjtcclxuZXhwb3J0IGNvbnN0IEVESVRfQ0hBUkFDVEVSID0gXCJFRElUX0NIQVJBQ1RFUlwiO1xyXG5leHBvcnQgY29uc3QgR0VUX1VTRVJfQ0hBUkFDVEVSUyA9IFwiR0VUX1VTRVJfQ0hBUkFDVEVSU1wiO1xyXG5leHBvcnQgY29uc3QgR0VUX1VTRVJfTE9DQVRJT05TID0gXCJHRVRfVVNFUl9MT0NBVElPTlNcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9GQVZPUklURV9DSEFSQUNURVJTID0gXCJHRVRfRkFWT1JJVEVfQ0hBUkFDVEVSU1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9GQVZPUklURV9BVVRIT1JTID0gXCJHRVRfRkFWT1JJVEVfQVVUSE9SU1wiO1xyXG5leHBvcnQgY29uc3QgR0VUX0ZPTExPV0VSUyA9IFwiR0VUX0ZPTExPV0VSU1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IERJU1BBVENIX0VSUk9SID0gXCJESVNQQVRDSF9FUlJPUlwiO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2FwcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9hdXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2ZpcmVzdG9yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9zdG9yYWdlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzLWltYWdlLXVybFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9