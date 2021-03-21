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
    editMessage
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
    props.editCharacter(_objectSpread({}, values), router.query.id);
  };

  return __jsx(_components_hoc_LoadingScreen__WEBPACK_IMPORTED_MODULE_6__["default"], {
    loading: loading,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 5
    }
  }, __jsx(_components_hoc_RedirectComp__WEBPACK_IMPORTED_MODULE_7__["default"], {
    type: "404",
    condition: charaExists,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }, __jsx(_components_hoc_RedirectComp__WEBPACK_IMPORTED_MODULE_7__["default"], {
    type: "403",
    condition: auth.user && auth.user.uid === character.authorId,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "custom-form new-character",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "inner",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  }, __jsx("h2", {
    className: "side-heading",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
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
    initialValues: _objectSpread({}, character),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
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
  editMessage: state.characters.message
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, {
  getCharacter: _redux_actions_charactersActions__WEBPACK_IMPORTED_MODULE_5__["getCharacter"],
  editCharacter: _redux_actions_charactersActions__WEBPACK_IMPORTED_MODULE_5__["editCharacter"],
  getUserCharacters: _redux_actions_charactersActions__WEBPACK_IMPORTED_MODULE_5__["getUserCharacters"]
})(EditCharacter));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb21tb24vQ2hhcmFjdGVyQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvcm1zL0NoYXJhY3RlckZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mb3Jtcy9JbWFnZVJvdy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvcm1zL1JhZGlvQnV0dG9uLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZm9ybXMvUmVsYXRpdmVzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZm9ybXMvVXBsb2FkSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9ob2MvTG9hZGluZ1NjcmVlbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hvYy9SZWRpcmVjdENvbXAuanMiLCJ3ZWJwYWNrOi8vLy4vaG9va3MvdXNlckhvb2tzLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2NoYXJhY3Rlci8vZWRpdC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25zL2NoYXJhY3RlcnNBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3JlZHV4L2ZiQ29uZmlnLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW50LWRlc2lnbi9pY29uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9hcHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9hdXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2Uvc3RvcmFnZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImlzLWltYWdlLXVybFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIl0sIm5hbWVzIjpbIkNoYXJhY3RlckNhcmQiLCJjaGFyYWN0ZXIiLCJ0eXBlIiwicmVtb3ZlQ2hhcmFjdGVyIiwiaWQiLCJpbWFnZSIsImZpcnN0bmFtZSIsImxhc3RuYW1lIiwiYXV0aG9yTmFtZSIsInJlbGF0aW9uIiwiQ2hhcmFjdGVyRm9ybSIsImZvcm0iLCJjaGFyYWN0ZXJzIiwic3VibWl0Iiwib25GYWlsZWQiLCJ2aXNpYmlsaXR5Iiwic2V0VmlzaWJpbGl0eSIsImxvYWRpbmdDaGFyYWN0ZXIiLCJpbml0aWFsVmFsdWVzIiwicmVxdWlyZWQiLCJtZXNzYWdlIiwibWF4IiwibWluUm93cyIsIkltYWdlUm93IiwiaXRlbUltYWdlIiwibmFtZSIsImxpbmtWaXNpYmxlIiwic2V0TGlua1Zpc2libGUiLCJSZWFjdCIsInVzZVN0YXRlIiwidXBsb2FkVmlzaWJsZSIsInNldFVwbG9hZFZpc2libGUiLCJzaG93TGluayIsInNldEZpZWxkc1ZhbHVlIiwic2hvd1VwbG9hZCIsInZhbGlkYXRvciIsIl8iLCJ2YWx1ZSIsImlzSW1hZ2VVcmwiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIkVycm9yIiwiUmFkaW9CdXRvbiIsImxnIiwic20iLCJ4cyIsIm1kIiwibGFiZWwiLCJudW0xIiwibnVtMiIsImxhYmVsMSIsImxhYmVsMiIsInNldEZ1bmMiLCJ2YWwiLCJPcHRpb24iLCJTZWxlY3QiLCJSZWxhdGl2ZXMiLCJyZWxhdGlvbnMiLCJzZXRSZWxhdGlvbnMiLCJyZWxhdGl2ZXMiLCJjdXJyZW50Q2hhciIsInNldEN1cnJlbnRDaGFyIiwiY3VycmVudFJlbCIsInNldEN1cnJlbnRSZWwiLCJzZWxlY3RlZENoYXJhY3RlcnMiLCJzZXRTZWxlY3RlZENoYXJhY3RlcnMiLCJzZWxlY3RlZEFyciIsInNldFNlbGVjdGVkQXJyIiwibWFwIiwiYyIsImNoYXJhY3Rlcl9pZCIsInNob3dFcnJvclJlbCIsInNldFNob3dFcnJvclJlbCIsInNob3dFcnJvckNoYXIiLCJzZXRTaG93RXJyb3JDaGFyIiwiYWRkUmVsYXRpb24iLCJuZXdSZWxhdGlvbnMiLCJmaW5kIiwidXNlRWZmZWN0IiwibGVuZ3RoIiwiY2hhciIsImZpbHRlciIsImluY2x1ZGVzIiwiZSIsInRhcmdldCIsInJlbCIsImdldEJhc2U2NCIsImltZyIsImNhbGxiYWNrIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZXN1bHQiLCJyZWFkQXNEYXRhVVJMIiwiYmVmb3JlVXBsb2FkIiwiZmlsZSIsImlzSnBnT3JQbmciLCJlcnJvciIsImlzTHQyTSIsInNpemUiLCJVcGxvYWRJbWFnZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiaW1hZ2VVcmwiLCJzZXRJbWFnZVVybCIsImhhbmRsZUNoYW5nZSIsImluZm8iLCJzdGF0dXMiLCJvcmlnaW5GaWxlT2JqIiwidXBsb2FkQnV0dG9uIiwibWFyZ2luVG9wIiwic2hvd1JlbW92ZUljb24iLCJyZW1vdmVJY29uIiwid2lkdGgiLCJoZWlnaHQiLCJvYmplY3RGaXQiLCJnZXRGaWVsZFZhbHVlIiwiTG9hZGluZ1NjcmVlbiIsImNoaWxkcmVuIiwiUmVkaXJlY3RDb21wIiwiY29uZGl0aW9uIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiYXV0aENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiUHJvdmlkZUF1dGgiLCJhdXRoIiwidXNlUHJvdmlkZUF1dGgiLCJ1c2VBdXRoIiwidXNlQ29udGV4dCIsInVzZXIiLCJzZXRVc2VyIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwic2lnbmluIiwiZW1haWwiLCJwYXNzd29yZCIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwidGhlbiIsInJlc3BvbnNlIiwic2lnbnVwIiwidXNlcm5hbWUiLCJjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJkYiIsImNvbGxlY3Rpb24iLCJhZGQiLCJiYWRnZXMiLCJiaW9ncmFwaHkiLCJjcmVhdGVkQXQiLCJmaXJlYmFzZSIsImZpcmVzdG9yZSIsIkZpZWxkVmFsdWUiLCJzZXJ2ZXJUaW1lc3RhbXAiLCJzdXNwZW5kZWQiLCJmYWNlYm9vayIsImluc3RhZ3JhbSIsInR3aXR0ZXIiLCJkZXZpYW50YXJ0IiwibGlrZXNDb3VudCIsInNpZ25vdXQiLCJzaWduT3V0Iiwic2VuZFBhc3N3b3JkUmVzZXRFbWFpbCIsImNvbmZpcm1QYXNzd29yZFJlc2V0IiwiY29kZSIsInVuc3Vic2NyaWJlIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwidWlkIiwiZG9jIiwib25TbmFwc2hvdCIsImRhdGEiLCJFZGl0Q2hhcmFjdGVyIiwicHJvcHMiLCJjaGFyYUV4aXN0cyIsImVkaXRNZXNzYWdlIiwiRm9ybSIsInVzZUZvcm0iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJnZXRDaGFyYWN0ZXIiLCJxdWVyeSIsImdldFVzZXJDaGFyYWN0ZXJzIiwic3VjY2VzcyIsInB1YmxpYyIsInNjcm9sbFRvIiwidmFsdWVzIiwiZWRpdENoYXJhY3RlciIsImF1dGhvcklkIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJ1c2VyQ2hhcmFjdGVycyIsImNoYXJhY3RlcklkIiwiY29ubmVjdCIsImRpc3BhdGNoIiwiZ2V0IiwiZXhpc3RzIiwiR0VUX0NIQVJBQ1RFUiIsInBheWxvYWQiLCJhZGRDaGFyYWN0ZXIiLCJBRERfQ0hBUkFDVEVSIiwiaW1hZ2VOYW1lIiwidG9Mb3dlckNhc2UiLCJzdG9yYWdlIiwicmVmIiwiY3VycmVudFVzZXIiLCJwdXQiLCJjaGlsZCIsImdldERvd25sb2FkVVJMIiwidXJsIiwibGlrZXMiLCJkaXNsaWtlcyIsInJlcyIsImNhdGNoIiwiZXJyIiwiRURJVF9DSEFSQUNURVIiLCJ1cGRhdGUiLCJ1c2VySWQiLCJ3aGVyZSIsImRvY3MiLCJpdGVtcyIsImZvckVhY2giLCJHRVRfVVNFUl9DSEFSQUNURVJTIiwiZ2V0RmF2b3JpdGVDaGFyYWN0ZXJzIiwiZmF2QXJyIiwidXNlcnMiLCJhbGwiLCJmYXZVc2VycyIsIkdFVF9GQVZPUklURV9DSEFSQUNURVJTIiwicHJvZENvbmZpZyIsImFwaUtleSIsInByb2Nlc3MiLCJhdXRoRG9tYWluIiwiZGF0YWJhc2VVUkwiLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIkZJUkVCQVNFX0FQUF9JRCIsImRldkNvbmZpZyIsImNvbmZpZyIsImFwcHMiLCJpbml0aWFsaXplQXBwIiwiQ0FURUdPUklFUyIsIkNPUFlSSUdIVFMiLCJMQU5HVUFHRVMiLCJTVEFUVVMiLCJHRVRfUFJPRklMRSIsIkxPR0lOIiwiUkVHSVNURVIiLCJHRVRfU1RPUlkiLCJHRVRfVVNFUl9TVE9SSUVTIiwiR0VUX0ZBVk9SSVRFX1NUT1JJRVMiLCJBRERfU1RPUlkiLCJFRElUX1NUT1JZIiwiR0VUX0NIQVBURVIiLCJBRERfQ0hBUFRFUiIsIkVESVRfQ0hBUFRFUiIsIkdFVF9DSEFQVEVSUyIsIkdFVF9VU0VSX0xPQ0FUSU9OUyIsIkdFVF9GQVZPUklURV9BVVRIT1JTIiwiR0VUX0ZPTExPV0VSUyIsIkRJU1BBVENIX0VSUk9SIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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QWEsR0FBRyxlQUF0QjtBQUVBLE1BQU1DLGNBQWMsR0FBRyxnQkFBdkIsQzs7Ozs7Ozs7Ozs7QUN2UFAsOEM7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0MiLCJmaWxlIjoicGFnZXMvY2hhcmFjdGVyL1tpZF0vZWRpdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvY2hhcmFjdGVyL1tpZF0vZWRpdC5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IENoYXJhY3RlckNhcmQgPSAoeyBjaGFyYWN0ZXIsIHR5cGUsIHJlbW92ZUNoYXJhY3RlciB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxmaWd1cmVcclxuICAgICAgY2xhc3NOYW1lPXtgY2FyZCBjaGFyYWN0ZXItY2FyZCAke3R5cGUgPyB0eXBlIDogXCJcIn1gfVxyXG4gICAgICBkYXRhLWFvcz1cInpvb20taW4tdXBcIlxyXG4gICAgPlxyXG4gICAgICB7dHlwZSA9PT0gXCJhZGRcIiAmJiAoXHJcbiAgICAgICAgPHNwYW5cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJlbW92ZUNoYXJhY3RlcihjaGFyYWN0ZXIuaWQpfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwicmVtb3ZlLWJ0blwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgeFxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgKX1cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGltZyBzcmM9e2NoYXJhY3Rlcj8uaW1hZ2V9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZmlnY2FwdGlvbj5cclxuICAgICAgICA8aDM+e2Ake2NoYXJhY3Rlcj8uZmlyc3RuYW1lfSAke2NoYXJhY3Rlcj8ubGFzdG5hbWV9YH08L2gzPlxyXG4gICAgICAgIHt0eXBlID09PSBcImZhdm9yaXRlc1wiICYmIChcclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImF1dGhvclwiPkF1dGhvcjoge2NoYXJhY3Rlcj8uYXV0aG9yTmFtZX08L3NwYW4+XHJcbiAgICAgICAgKX1cclxuICAgICAgICB7KHR5cGUgPT09IFwiYWRkXCIgfHwgdHlwZSA9PT0gXCJzaG93XCIpICYmIChcclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImF1dGhvclwiPlJlbGF0aW9uOiB7Y2hhcmFjdGVyPy5yZWxhdGlvbn08L3NwYW4+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9maWdjYXB0aW9uPlxyXG4gICAgPC9maWd1cmU+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXJhY3RlckNhcmQ7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgUm93LCBDb2wsIERpdmlkZXIsIEZvcm0sIElucHV0LCBJbnB1dE51bWJlciwgU3BpbiB9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5pbXBvcnQgUmVsYXRpdmVzIGZyb20gXCIuL1JlbGF0aXZlc1wiO1xyXG5pbXBvcnQgSW1hZ2VSb3cgZnJvbSBcIi4vSW1hZ2VSb3dcIjtcclxuaW1wb3J0IFJhZGlvQnV0dG9uIGZyb20gXCIuL1JhZGlvQnV0dG9uXCI7XHJcblxyXG5jb25zdCBDaGFyYWN0ZXJGb3JtID0gKHtcclxuICBmb3JtLFxyXG4gIGNoYXJhY3RlcnMsXHJcbiAgY2hhcmFjdGVyLFxyXG4gIHN1Ym1pdCxcclxuICBvbkZhaWxlZCxcclxuICB2aXNpYmlsaXR5LFxyXG4gIHNldFZpc2liaWxpdHksXHJcbiAgdHlwZSxcclxuICBsb2FkaW5nQ2hhcmFjdGVyLFxyXG4gIGluaXRpYWxWYWx1ZXMsXHJcbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1cclxuICAgICAgbGF5b3V0PVwidmVydGljYWxcIlxyXG4gICAgICBzY3JvbGxUb0ZpcnN0RXJyb3JcclxuICAgICAgb25GaW5pc2hGYWlsZWQ9e29uRmFpbGVkfVxyXG4gICAgICBvbkZpbmlzaD17c3VibWl0fVxyXG4gICAgICBmb3JtPXtmb3JtfVxyXG4gICAgICBpbml0aWFsVmFsdWVzPXtpbml0aWFsVmFsdWVzfVxyXG4gICAgPlxyXG4gICAgICA8SW1hZ2VSb3cgbmFtZT1cImltYWdlXCIgZm9ybT17Zm9ybX0gaXRlbUltYWdlPXtjaGFyYWN0ZXI/LmltYWdlfSAvPlxyXG4gICAgICA8RGl2aWRlciAvPlxyXG4gICAgICA8Um93IGFsaWduPVwiYm90dG9tXCIgZ3V0dGVyPXtbMjQsIDI0XX0+XHJcbiAgICAgICAgPENvbCBtZD17OH0geHM9ezI0fSBzbT17MjR9PlxyXG4gICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICBsYWJlbD1cIkZpcnN0bmFtZVwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJmaXJzdG5hbWVcIlxyXG4gICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJBIGZpcnN0bmFtZSBpcyByZXF1aXJlZFwiLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgeyBtYXg6IDIwIH0sXHJcbiAgICAgICAgICAgIF19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPENvbCBtZD17OH0geHM9ezI0fSBzbT17MjR9PlxyXG4gICAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD1cIkxhc3RuYW1lXCIgbmFtZT1cImxhc3RuYW1lXCIgcnVsZXM9e1t7IG1heDogNjUgfV19PlxyXG4gICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDxDb2wgbWQ9ezh9IHhzPXsyNH0gc209ezI0fT5cclxuICAgICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCJOaWNrbmFtZVwiIG5hbWU9XCJuaWNrbmFtZVwiIHJ1bGVzPXtbeyBtYXg6IDY1IH1dfT5cclxuICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgPC9Sb3c+XHJcbiAgICAgIDxSb3cgZ3V0dGVyPXtbMjQsIDI0XX0+XHJcbiAgICAgICAgPENvbCBtZD17OH0gc209ezI0fSB4cz17MjR9PlxyXG4gICAgICAgICAgPEZvcm0uSXRlbSBuYW1lPVwiZ2VuZGVyXCIgbGFiZWw9XCJHZW5kZXJcIj5cclxuICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgICA8Q29sIG1kPXs4fSBzbT17MjR9IHhzPXsyNH0+XHJcbiAgICAgICAgICA8Rm9ybS5JdGVtIG5hbWU9XCJvY2N1cGF0aW9uXCIgbGFiZWw9XCJPY2N1cGF0aW9uXCI+XHJcbiAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPENvbCBtZD17OH0gc209ezI0fSB4cz17MjR9PlxyXG4gICAgICAgICAgPEZvcm0uSXRlbSBuYW1lPVwicmVzaWRlbmNlXCIgbGFiZWw9XCJSZXNpZGVuY2VcIj5cclxuICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgPC9Sb3c+XHJcbiAgICAgIDxSb3cgZ3V0dGVyPXtbMjQsIDI0XX0+XHJcbiAgICAgICAgPENvbCBtZD17OH0geHM9ezI0fSBzbT17MjR9PlxyXG4gICAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD1cIkV0aG5pY2l0eVwiIG5hbWU9XCJldGhuaWNpdHlcIj5cclxuICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgICA8Q29sIG1kPXs4fSB4cz17MjR9IHNtPXsyNH0+XHJcbiAgICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwiR3JvdXBcIiBuYW1lPVwiZ3JvdXBcIj5cclxuICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgICA8Q29sIG1kPXs0fSB4cz17MjR9IHNtPXsyNH0+XHJcbiAgICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwiQWdlXCIgbmFtZT1cImFnZVwiPlxyXG4gICAgICAgICAgICA8SW5wdXROdW1iZXIgbWluPXswfSAvPlxyXG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPFJhZGlvQnV0dG9uXHJcbiAgICAgICAgICBsZz17NH1cclxuICAgICAgICAgIG1kPXs0fVxyXG4gICAgICAgICAgc209ezI0fVxyXG4gICAgICAgICAgeHM9ezI0fVxyXG4gICAgICAgICAgbmFtZT1cInB1YmxpY1wiXHJcbiAgICAgICAgICBsYWJlbD1cIlZpc2liaWxpdHlcIlxyXG4gICAgICAgICAgbnVtMT1cIjFcIlxyXG4gICAgICAgICAgbnVtMj1cIjJcIlxyXG4gICAgICAgICAgbGFiZWwxPVwiUHVibGljXCJcclxuICAgICAgICAgIGxhYmVsMj1cIlByaXZhdGVcIlxyXG4gICAgICAgICAgc2V0RnVuYz17c2V0VmlzaWJpbGl0eX1cclxuICAgICAgICAgIHZhbD17dmlzaWJpbGl0eX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L1Jvdz5cclxuICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgIGxhYmVsPVwiRGVzY3JpcHRpb25cIlxyXG4gICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbWF4OiAxODAsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiWW91ciBkZXNjcmlwdGlvbiBjYW5ub3QgZXhjZWVkIDE4MCBjaGFyYWN0ZXJzXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF19XHJcbiAgICAgID5cclxuICAgICAgICA8SW5wdXQuVGV4dEFyZWFcclxuICAgICAgICAgIGF1dG9TaXplPXt7IG1pblJvd3M6IDUgfX1cclxuICAgICAgICAgIHNob3dDb3VudD17dHJ1ZX1cclxuICAgICAgICAgIG1heExlbmd0aD17MTgwfVxyXG4gICAgICAgID48L0lucHV0LlRleHRBcmVhPlxyXG4gICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgPFJlbGF0aXZlc1xyXG4gICAgICAgIGNoYXJhY3Rlcj17Y2hhcmFjdGVyICYmIGNoYXJhY3Rlcn1cclxuICAgICAgICBmb3JtPXtmb3JtfVxyXG4gICAgICAgIGNoYXJhY3RlcnM9e2NoYXJhY3RlcnN9XHJcbiAgICAgIC8+XHJcbiAgICAgIHt0eXBlID09PSBcImFkZFwiID8gKFxyXG4gICAgICAgIGxvYWRpbmdDaGFyYWN0ZXIgPyAoXHJcbiAgICAgICAgICA8YnV0dG9uIGRpc2FibGVkIGNsYXNzTmFtZT1cInNwaW4tYnRuXCI+XHJcbiAgICAgICAgICAgIDxTcGluIC8+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+Q3JlYXRlPC9idXR0b24+XHJcbiAgICAgICAgKVxyXG4gICAgICApIDogbG9hZGluZ0NoYXJhY3RlciA/IChcclxuICAgICAgICA8YnV0dG9uIGRpc2FibGVkIGNsYXNzTmFtZT1cInNwaW4tYnRuXCI+XHJcbiAgICAgICAgICA8U3BpbiAvPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkVkaXQ8L2J1dHRvbj5cclxuICAgICAgKX1cclxuICAgIDwvRm9ybT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhcmFjdGVyRm9ybTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBSb3csIENvbCwgRm9ybSwgSW5wdXQgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgaXNJbWFnZVVybCBmcm9tIFwiaXMtaW1hZ2UtdXJsXCI7XHJcblxyXG5pbXBvcnQgVXBsb2FkSW1hZ2UgZnJvbSBcIi4vVXBsb2FkSW1hZ2VcIjtcclxuXHJcbmNvbnN0IEltYWdlUm93ID0gKHsgZm9ybSwgaXRlbUltYWdlLCBuYW1lIH0pID0+IHtcclxuICBjb25zdCBbbGlua1Zpc2libGUsIHNldExpbmtWaXNpYmxlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdXBsb2FkVmlzaWJsZSwgc2V0VXBsb2FkVmlzaWJsZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHNob3dMaW5rID0gKCkgPT4ge1xyXG4gICAgZm9ybS5zZXRGaWVsZHNWYWx1ZSh7IFtuYW1lXTogbnVsbCB9KTtcclxuICAgIHNldExpbmtWaXNpYmxlKHRydWUpO1xyXG4gICAgc2V0VXBsb2FkVmlzaWJsZShmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2hvd1VwbG9hZCA9ICgpID0+IHtcclxuICAgIGZvcm0uc2V0RmllbGRzVmFsdWUoeyBbbmFtZV06IG51bGwgfSk7XHJcbiAgICBzZXRMaW5rVmlzaWJsZShmYWxzZSk7XHJcbiAgICBzZXRVcGxvYWRWaXNpYmxlKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7IXVwbG9hZFZpc2libGUgJiYgIWxpbmtWaXNpYmxlICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVwbG9hZC1idG5zXCI+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Nob3dVcGxvYWR9IHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJ1cGxvYWQtYnRuXCI+XHJcbiAgICAgICAgICAgIFVwbG9hZCBhIGNvdmVyXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Nob3dMaW5rfSB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwidXBsb2FkLWJ0blwiPlxyXG4gICAgICAgICAgICBTdWJtaXQgYSBsaW5rIHRvIGEgY292ZXJcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgICB7dXBsb2FkVmlzaWJsZSAmJiAoXHJcbiAgICAgICAgPFJvdyBhbGlnbj1cImJvdHRvbVwiIGd1dHRlcj17WzI0LCAyNF19PlxyXG4gICAgICAgICAgPENvbCBtZD17MTJ9IHNtPXsyNH0geHM9ezI0fT5cclxuICAgICAgICAgICAgPFVwbG9hZEltYWdlIG5hbWU9e25hbWV9IGZvcm09e2Zvcm19IGltYWdlPXtpdGVtSW1hZ2V9IC8+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDxDb2wgbWQ9ezEyfSBzbT17MjR9IHhzPXsyNH0+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17c2hvd0xpbmt9IHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJ1cGxvYWQtYnRuXCI+XHJcbiAgICAgICAgICAgICAgT1IgU3VibWl0IGEgbGluayB0byBhIGNvdmVyXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgICl9XHJcbiAgICAgIHtsaW5rVmlzaWJsZSAmJiAoXHJcbiAgICAgICAgPFJvdyBhbGlnbj1cImJvdHRvbVwiIGd1dHRlcj17WzI0LCAyNF19PlxyXG4gICAgICAgICAgPENvbCBzbT17MjR9IHhzPXsyNH0gbWQ9ezEyfSBsZz17MTJ9PlxyXG4gICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgdHlwZTogXCJ1cmxcIixcclxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJUaGlzIGZpZWxkIG11c3QgYmUgYSB2YWxpZCB1cmwuXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKCkgPT4gKHtcclxuICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yKF8sIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzSW1hZ2VVcmwodmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcclxuICAgICAgICAgICAgICAgICAgICAgIG5ldyBFcnJvcihcIlRoZSBsaW5rIG5lZWRzIHRvIGJlIGFuIGltYWdlXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJTdWJtaXQgYSBsaW5rIHRvIHlvdXIgaW1hZ2VcIlxyXG4gICAgICAgICAgICAgIG5hbWU9e25hbWV9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDxDb2wgbWQ9ezEyfSBzbT17MjR9IHhzPXsyNH0+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17c2hvd1VwbG9hZH0gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cInVwbG9hZC1idG5cIj5cclxuICAgICAgICAgICAgICBVcGxvYWQgYSBjb3ZlclxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlUm93O1xyXG4iLCJpbXBvcnQgeyBDb2wsIFNwYWNlLCBGb3JtLCBSYWRpbyB9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5jb25zdCBSYWRpb0J1dG9uID0gKHtcclxuICBsZyxcclxuICBzbSxcclxuICB4cyxcclxuICBtZCxcclxuICBuYW1lLFxyXG4gIGxhYmVsLFxyXG4gIG51bTEsXHJcbiAgbnVtMixcclxuICBsYWJlbDEsXHJcbiAgbGFiZWwyLFxyXG4gIGZvcm0sXHJcbiAgc2V0RnVuYyxcclxuICB2YWwsXHJcbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPENvbCBsZz17bGd9IG1kPXttZH0gc209e3NtfSB4cz17eHN9PlxyXG4gICAgICA8Rm9ybS5JdGVtIG5hbWU9e25hbWV9IGxhYmVsPXtsYWJlbH0+XHJcbiAgICAgICAgPGZpZWxkc2V0IGlkPXtuYW1lfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmFkaW9cIj5cclxuICAgICAgICAgICAgPFJhZGlvLkdyb3VwPlxyXG4gICAgICAgICAgICAgIDxTcGFjZSBzaXplPXszMn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhZGlvX18xXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIGlkPXtgcmFkaW8tJHtudW0xfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gc2V0RnVuYyh0cnVlKX1cclxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt2YWwgPyB0cnVlIDogZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtgcmFkaW8tJHtudW0xfWB9PjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxwPntsYWJlbDF9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhZGlvX18yXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIGlkPXtgcmFkaW8tJHtudW0yfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHNldEZ1bmMoZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3ZhbCA/IGZhbHNlIDogdHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e2ByYWRpby0ke251bTJ9YH0+PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPHA+e2xhYmVsMn08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L1NwYWNlPlxyXG4gICAgICAgICAgICA8L1JhZGlvLkdyb3VwPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9maWVsZHNldD5cclxuICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICA8L0NvbD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmFkaW9CdXRvbjtcclxuIiwiaW1wb3J0IHsgUm93LCBDb2wsIEZvcm0sIFNlbGVjdCwgSW5wdXQsIERpdmlkZXIgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgQ2hhcmFjdGVyQ2FyZCwgeyBDaGFyYWN0ZXJHcmlkIH0gZnJvbSBcIi4uL2NvbW1vbi9DaGFyYWN0ZXJDYXJkXCI7XHJcblxyXG5jb25zdCB7IE9wdGlvbiB9ID0gU2VsZWN0O1xyXG5cclxuY29uc3QgUmVsYXRpdmVzID0gKHsgY2hhcmFjdGVyLCBjaGFyYWN0ZXJzLCBmb3JtIH0pID0+IHtcclxuICBjb25zdCBbcmVsYXRpb25zLCBzZXRSZWxhdGlvbnNdID0gUmVhY3QudXNlU3RhdGUoXHJcbiAgICBjaGFyYWN0ZXIgPyBjaGFyYWN0ZXIucmVsYXRpdmVzIDogW11cclxuICApO1xyXG4gIGNvbnN0IFtjdXJyZW50Q2hhciwgc2V0Q3VycmVudENoYXJdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2N1cnJlbnRSZWwsIHNldEN1cnJlbnRSZWxdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3NlbGVjdGVkQ2hhcmFjdGVycywgc2V0U2VsZWN0ZWRDaGFyYWN0ZXJzXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3QgW3NlbGVjdGVkQXJyLCBzZXRTZWxlY3RlZEFycl0gPSBSZWFjdC51c2VTdGF0ZShcclxuICAgIGNoYXJhY3RlciA/IGNoYXJhY3Rlci5yZWxhdGl2ZXMubWFwKChjKSA9PiBjLmNoYXJhY3Rlcl9pZCkgOiBbXVxyXG4gICk7XHJcbiAgY29uc3QgW3Nob3dFcnJvclJlbCwgc2V0U2hvd0Vycm9yUmVsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2hvd0Vycm9yQ2hhciwgc2V0U2hvd0Vycm9yQ2hhcl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGFkZFJlbGF0aW9uID0gKCkgPT4ge1xyXG4gICAgbGV0IG5ld1JlbGF0aW9ucyA9IFsuLi5yZWxhdGlvbnNdO1xyXG4gICAgaWYgKGN1cnJlbnRDaGFyICYmIGN1cnJlbnRSZWwpIHtcclxuICAgICAgbmV3UmVsYXRpb25zID0gW1xyXG4gICAgICAgIC4uLm5ld1JlbGF0aW9ucyxcclxuICAgICAgICB7IGNoYXJhY3Rlcl9pZDogY3VycmVudENoYXIsIHJlbGF0aW9uOiBjdXJyZW50UmVsIH0sXHJcbiAgICAgIF07XHJcbiAgICAgIHNldFNlbGVjdGVkQ2hhcmFjdGVycyhbXHJcbiAgICAgICAgLi4uc2VsZWN0ZWRDaGFyYWN0ZXJzLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIC4uLmNoYXJhY3RlcnMuZmluZCgoYykgPT4gYy5pZCA9PT0gY3VycmVudENoYXIpLFxyXG4gICAgICAgICAgcmVsYXRpb246IGN1cnJlbnRSZWwsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSk7XHJcbiAgICAgIHNldFNlbGVjdGVkQXJyKFsuLi5zZWxlY3RlZEFyciwgY3VycmVudENoYXJdKTtcclxuICAgICAgZm9ybS5zZXRGaWVsZHNWYWx1ZSh7IHJlbGF0aXZlczogbmV3UmVsYXRpb25zIH0pO1xyXG4gICAgICBzZXRSZWxhdGlvbnMobmV3UmVsYXRpb25zKTtcclxuICAgICAgc2V0Q3VycmVudENoYXIoXCJcIik7XHJcbiAgICAgIHNldEN1cnJlbnRSZWwoXCJcIik7XHJcbiAgICAgIHNldFNob3dFcnJvckNoYXIoZmFsc2UpO1xyXG4gICAgICBzZXRTaG93RXJyb3JSZWwoZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghY3VycmVudFJlbCkge1xyXG4gICAgICBzZXRTaG93RXJyb3JSZWwodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFjdXJyZW50Q2hhcikge1xyXG4gICAgICBzZXRTaG93RXJyb3JDaGFyKHRydWUpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoY2hhcmFjdGVyICYmIGNoYXJhY3RlcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICBzZXRTZWxlY3RlZENoYXJhY3RlcnMoXHJcbiAgICAgICAgY2hhcmFjdGVyLnJlbGF0aXZlcy5tYXAoKGMpID0+ICh7XHJcbiAgICAgICAgICBmaXJzdG5hbWU6IGNoYXJhY3RlcnMuZmluZCgoY2hhcikgPT4gY2hhci5pZCA9PT0gYy5jaGFyYWN0ZXJfaWQpXHJcbiAgICAgICAgICAgIC5maXJzdG5hbWUsXHJcbiAgICAgICAgICBsYXN0bmFtZTogY2hhcmFjdGVycy5maW5kKChjaGFyKSA9PiBjaGFyLmlkID09PSBjLmNoYXJhY3Rlcl9pZClcclxuICAgICAgICAgICAgLmxhc3RuYW1lLFxyXG4gICAgICAgICAgaW1hZ2U6IGNoYXJhY3RlcnMuZmluZCgoY2hhcikgPT4gY2hhci5pZCA9PT0gYy5jaGFyYWN0ZXJfaWQpLmltYWdlLFxyXG4gICAgICAgICAgaWQ6IGNoYXJhY3RlcnMuZmluZCgoY2hhcikgPT4gY2hhci5pZCA9PT0gYy5jaGFyYWN0ZXJfaWQpLmlkLFxyXG4gICAgICAgICAgcmVsYXRpb246IGMucmVsYXRpb24sXHJcbiAgICAgICAgfSkpXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfSwgW2NoYXJhY3RlciwgY2hhcmFjdGVyc10pO1xyXG5cclxuICBjb25zdCByZW1vdmVDaGFyYWN0ZXIgPSAoaWQpID0+IHtcclxuICAgIHNldFNlbGVjdGVkQ2hhcmFjdGVycyhzZWxlY3RlZENoYXJhY3RlcnMuZmlsdGVyKChjKSA9PiBjLmlkICE9PSBpZCkpO1xyXG4gICAgc2V0U2VsZWN0ZWRBcnIoc2VsZWN0ZWRBcnIuZmlsdGVyKChjKSA9PiBjICE9PSBpZCkpO1xyXG4gICAgc2V0UmVsYXRpb25zKHJlbGF0aW9ucy5maWx0ZXIoKGMpID0+IGMuY2hhcmFjdGVyX2lkICE9PSBpZCkpO1xyXG4gICAgZm9ybS5zZXRGaWVsZHNWYWx1ZSh7XHJcbiAgICAgIHJlbGF0aXZlczogcmVsYXRpb25zLmZpbHRlcigoYykgPT4gYy5jaGFyYWN0ZXJfaWQgIT09IGlkKSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybS5JdGVtIG5hbWU9XCJyZWxhdGl2ZXNcIj5cclxuICAgICAgPGgzPlJlbGF0aW9uc2hpcHM8L2gzPlxyXG4gICAgICA8Um93IGd1dHRlcj17WzI0LCAxMl19IGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgPENvbCBtZD17MTF9IHNtPXsyNH0geHM9ezI0fT5cclxuICAgICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCJTZWxlY3QgYSBjaGFyYWN0ZXJcIj5cclxuICAgICAgICAgICAgPFNlbGVjdCB2YWx1ZT17Y3VycmVudENoYXJ9IG9uQ2hhbmdlPXsodmFsKSA9PiBzZXRDdXJyZW50Q2hhcih2YWwpfT5cclxuICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwibm9uZVwiIGRpc2FibGVkPlxyXG4gICAgICAgICAgICAgICAgU2VsZWN0IGEgY2hhcmFjdGVyXHJcbiAgICAgICAgICAgICAgPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAge2NoYXJhY3RlcnNcclxuICAgICAgICAgICAgICAgID8uZmlsdGVyKChjKSA9PiAhc2VsZWN0ZWRBcnIuaW5jbHVkZXMoYy5pZCkpXHJcbiAgICAgICAgICAgICAgICAubWFwKChjKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxPcHRpb25cclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2MuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2MuaWR9XHJcbiAgICAgICAgICAgICAgICAgID57YCR7Yy5maXJzdG5hbWV9ICR7Yy5sYXN0bmFtZX1gfTwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICB7c2hvd0Vycm9yQ2hhciAmJiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbnQtZm9ybS1pdGVtLWV4cGxhaW4gYW50LWZvcm0taXRlbS1leHBsYWluLWVycm9yXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHJvbGU9XCJhbGVydFwiPkEgY2hhcmFjdGVyIGlzIHJlcXVpcmVkPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgICA8Q29sIG1kPXsxMX0gc209ezIxfSB4cz17MjF9PlxyXG4gICAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD1cIlR5cGUgb2YgcmVsYXRpb25zaGlwXCI+XHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgIHZhbHVlPXtjdXJyZW50UmVsfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q3VycmVudFJlbChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIHtzaG93RXJyb3JSZWwgJiYgKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW50LWZvcm0taXRlbS1leHBsYWluIGFudC1mb3JtLWl0ZW0tZXhwbGFpbi1lcnJvclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiByb2xlPVwiYWxlcnRcIj5BIHR5cGUgb2YgcmVsYXRpb25zaGlwIGlzIHJlcXVpcmVkPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgICA8Q29sIG1kPXsyfSB4cz17M30gc209ezN9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3QtYWRkLWlucHV0LWljb25ib3hcIiBvbkNsaWNrPXthZGRSZWxhdGlvbn0+XHJcbiAgICAgICAgICAgIDxzcGFuPis8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgPC9Sb3c+XHJcbiAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgIDxSb3cgZ3V0dGVyPXtbMTYsIDE2XX0+XHJcbiAgICAgICAge3NlbGVjdGVkQ2hhcmFjdGVycz8ubWFwKChyZWwpID0+IChcclxuICAgICAgICAgIDxDb2wgbGc9ezR9IG1kPXs4fSBzbT17MTJ9IHhzPXsyNH0ga2V5PXtyZWwuaWR9PlxyXG4gICAgICAgICAgICA8Q2hhcmFjdGVyQ2FyZFxyXG4gICAgICAgICAgICAgIHJlbW92ZUNoYXJhY3Rlcj17cmVtb3ZlQ2hhcmFjdGVyfVxyXG4gICAgICAgICAgICAgIHR5cGU9XCJhZGRcIlxyXG4gICAgICAgICAgICAgIGNoYXJhY3Rlcj17cmVsfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvUm93PlxyXG4gICAgPC9Gb3JtLkl0ZW0+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlbGF0aXZlcztcclxuIiwiaW1wb3J0IHsgVXBsb2FkLCBtZXNzYWdlLCBGb3JtLCBJbnB1dCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IExvYWRpbmdPdXRsaW5lZCwgUGx1c091dGxpbmVkLCBTdGFyT3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuXHJcbmZ1bmN0aW9uIGdldEJhc2U2NChpbWcsIGNhbGxiYWNrKSB7XHJcbiAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICByZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4gY2FsbGJhY2socmVhZGVyLnJlc3VsdCkpO1xyXG4gIHJlYWRlci5yZWFkQXNEYXRhVVJMKGltZyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJlZm9yZVVwbG9hZChmaWxlKSB7XHJcbiAgY29uc3QgaXNKcGdPclBuZyA9IGZpbGUudHlwZSA9PT0gXCJpbWFnZS9qcGVnXCIgfHwgZmlsZS50eXBlID09PSBcImltYWdlL3BuZ1wiO1xyXG4gIGlmICghaXNKcGdPclBuZykge1xyXG4gICAgbWVzc2FnZS5lcnJvcihcIllvdSBjYW4gb25seSB1cGxvYWQgSlBHL1BORyBmaWxlIVwiKTtcclxuICB9XHJcbiAgY29uc3QgaXNMdDJNID0gZmlsZS5zaXplIC8gMTAyNCAvIDEwMjQgPCAyO1xyXG4gIGlmICghaXNMdDJNKSB7XHJcbiAgICBtZXNzYWdlLmVycm9yKFwiSW1hZ2UgbXVzdCBzbWFsbGVyIHRoYW4gMk1CIVwiKTtcclxuICB9XHJcbiAgcmV0dXJuIGlzSnBnT3JQbmcgJiYgaXNMdDJNO1xyXG59XHJcblxyXG5jb25zdCBVcGxvYWRJbWFnZSA9ICh7IGZvcm0sIGltYWdlLCBuYW1lIH0pID0+IHtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2ltYWdlVXJsLCBzZXRJbWFnZVVybF0gPSBSZWFjdC51c2VTdGF0ZShpbWFnZSA/IGltYWdlIDogXCJcIik7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChpbmZvKSA9PiB7XHJcbiAgICBpZiAoaW5mby5maWxlLnN0YXR1cyA9PT0gXCJ1cGxvYWRpbmdcIikge1xyXG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoaW5mby5maWxlLnN0YXR1cyA9PT0gXCJkb25lXCIpIHtcclxuICAgICAgZm9ybS5zZXRGaWVsZHNWYWx1ZSh7IFtuYW1lXTogaW5mby5maWxlLm9yaWdpbkZpbGVPYmogfSk7XHJcbiAgICAgIC8vIHNldEltYWdlKGluZm8uZmlsZS5vcmlnaW5GaWxlT2JqKTtcclxuICAgICAgZ2V0QmFzZTY0KGluZm8uZmlsZS5vcmlnaW5GaWxlT2JqLCAoaW1hZ2VVcmwpID0+IHtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICBzZXRJbWFnZVVybChpbWFnZVVybCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHVwbG9hZEJ1dHRvbiA9IChcclxuICAgIDxkaXY+XHJcbiAgICAgIHtsb2FkaW5nID8gPExvYWRpbmdPdXRsaW5lZCAvPiA6IDxQbHVzT3V0bGluZWQgLz59XHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiA4IH19PlVwbG9hZDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEZvcm0uSXRlbSBuYW1lPXtuYW1lfSBsYWJlbD1cIlVwbG9hZCBhIGNvdmVyXCI+XHJcbiAgICAgICAgPFVwbG9hZFxyXG4gICAgICAgICAgc2hvd1VwbG9hZExpc3Q9e3tcclxuICAgICAgICAgICAgc2hvd1JlbW92ZUljb246IHRydWUsXHJcbiAgICAgICAgICAgIHJlbW92ZUljb246IDxTdGFyT3V0bGluZWQgLz4sXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgbGlzdFR5cGU9XCJwaWN0dXJlLWNhcmRcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY292ZXItdXBsb2FkZXJcIlxyXG4gICAgICAgICAgc2hvd1VwbG9hZExpc3Q9e3RydWV9XHJcbiAgICAgICAgICBiZWZvcmVVcGxvYWQ9e2JlZm9yZVVwbG9hZH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICBtYXhDb3VudD17MX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7aW1hZ2VVcmwgPyAoXHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBzcmM9e2ltYWdlVXJsfVxyXG4gICAgICAgICAgICAgIGFsdD1cImltYWdlXCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIsIG9iamVjdEZpdDogXCJjb3ZlclwiIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICB1cGxvYWRCdXR0b25cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9VcGxvYWQ+XHJcbiAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgbGFiZWw9XCJJbWFnZSBDb3B5cmlnaHRcIlxyXG4gICAgICAgIG5hbWU9XCJpbWFnZUNvcHlyaWdodFwiXHJcbiAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgcmVxdWlyZWQ6IGZvcm0uZ2V0RmllbGRWYWx1ZShuYW1lKSA/IHRydWUgOiBmYWxzZSxcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJBbiBpbWFnZSBjb3B5cmlnaHQgaXMgcmVxdWlyZWRcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXX1cclxuICAgICAgPlxyXG4gICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICA8L0Zvcm0uSXRlbT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVcGxvYWRJbWFnZTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgTG9hZGluZ1NjcmVlbiA9ICh7IGNoaWxkcmVuLCBsb2FkaW5nIH0pID0+IHtcclxuICByZXR1cm4gIWxvYWRpbmcgPyAoXHJcbiAgICBjaGlsZHJlblxyXG4gICkgOiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRlci1jb250YWluZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkZXJcIj5cclxuICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9hZGluZ1NjcmVlbjtcclxuIiwiaW1wb3J0IHsgUmVzdWx0LCBCdXR0b24gfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuY29uc3QgUmVkaXJlY3RDb21wID0gKHsgY29uZGl0aW9uLCB0eXBlLCBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgcmV0dXJuIGNvbmRpdGlvbiA/IChcclxuICAgIGNoaWxkcmVuXHJcbiAgKSA6IHR5cGUgPT09IFwiNDA0XCIgPyAoXHJcbiAgICA8UmVzdWx0XHJcbiAgICAgIHN0YXR1cz1cIjQwNFwiXHJcbiAgICAgIHRpdGxlPVwiNDA0XCJcclxuICAgICAgc3ViVGl0bGU9XCJTb3JyeSwgdGhlIHBhZ2UgeW91IHZpc2l0ZWQgZG9lcyBub3QgZXhpc3QuXCJcclxuICAgICAgZXh0cmE9ezxCdXR0b24gdHlwZT1cInByaW1hcnlcIj5CYWNrIEhvbWU8L0J1dHRvbj59XHJcbiAgICAvPlxyXG4gICkgOiB0eXBlID09PSBcIjQwM1wiID8gKFxyXG4gICAgPFJlc3VsdFxyXG4gICAgICBzdGF0dXM9XCI0MDNcIlxyXG4gICAgICB0aXRsZT1cIjQwM1wiXHJcbiAgICAgIHN1YlRpdGxlPVwiU29ycnksIHlvdSBhcmUgbm90IGF1dGhvcml6ZWQgdG8gYWNjZXNzIHRoaXMgcGFnZS5cIlxyXG4gICAgICBleHRyYT17PEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiPkJhY2sgSG9tZTwvQnV0dG9uPn1cclxuICAgIC8+XHJcbiAgKSA6IHR5cGUgPT09IFwicmVkaXJlY3RcIiA/IChcclxuICAgICh3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL2F1dGhcIilcclxuICApIDogKFxyXG4gICAgPGRpdj48L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVkaXJlY3RDb21wO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCwgY3JlYXRlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlL2FwcFwiO1xyXG5pbXBvcnQgeyBhdXRoLCBkYiB9IGZyb20gXCIuLi9yZWR1eC9mYkNvbmZpZ1wiO1xyXG5cclxuY29uc3QgYXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUHJvdmlkZUF1dGgoeyBjaGlsZHJlbiB9KSB7XHJcbiAgY29uc3QgYXV0aCA9IHVzZVByb3ZpZGVBdXRoKCk7XHJcbiAgcmV0dXJuIDxhdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17YXV0aH0+e2NoaWxkcmVufTwvYXV0aENvbnRleHQuUHJvdmlkZXI+O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXNlQXV0aCA9ICgpID0+IHtcclxuICByZXR1cm4gdXNlQ29udGV4dChhdXRoQ29udGV4dCk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiB1c2VQcm92aWRlQXV0aCgpIHtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIC8vIFdyYXAgYW55IEZpcmViYXNlIG1ldGhvZHMgd2Ugd2FudCB0byB1c2UgbWFraW5nIHN1cmUgLi4uXHJcbiAgLy8gLi4uIHRvIHNhdmUgdGhlIHVzZXIgdG8gc3RhdGUuXHJcbiAgY29uc3Qgc2lnbmluID0gKGVtYWlsLCBwYXNzd29yZCkgPT4ge1xyXG4gICAgcmV0dXJuIGF1dGguc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBzZXRVc2VyKHJlc3BvbnNlLnVzZXIpO1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UudXNlcjtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNpZ251cCA9IChlbWFpbCwgcGFzc3dvcmQsIHVzZXJuYW1lKSA9PiB7XHJcbiAgICByZXR1cm4gYXV0aFxyXG4gICAgICAuY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZClcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgc2V0VXNlcihyZXNwb25zZS51c2VyKTtcclxuICAgICAgICBkYi5jb2xsZWN0aW9uKFwidXNlcnNcIikuYWRkKHtcclxuICAgICAgICAgIGJhZGdlczogW10sXHJcbiAgICAgICAgICBiaW9ncmFwaHk6IFwiXCIsXHJcbiAgICAgICAgICBjcmVhdGVkQXQ6IGZpcmViYXNlLmZpcmVzdG9yZS5GaWVsZFZhbHVlLnNlcnZlclRpbWVzdGFtcCgpLFxyXG4gICAgICAgICAgc3VzcGVuZGVkOiBmYWxzZSxcclxuICAgICAgICAgIGZhY2Vib29rOiBcIlwiLFxyXG4gICAgICAgICAgaW5zdGFncmFtOiBcIlwiLFxyXG4gICAgICAgICAgdHdpdHRlcjogXCJcIixcclxuICAgICAgICAgIGRldmlhbnRhcnQ6IFwiXCIsXHJcbiAgICAgICAgICBsaWtlc0NvdW50OiBcIlwiLFxyXG4gICAgICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLFxyXG4gICAgICAgICAgaW1hZ2U6IFwiXCIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnVzZXI7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNpZ25vdXQgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gYXV0aC5zaWduT3V0KCkudGhlbigoKSA9PiB7XHJcbiAgICAgIHNldFVzZXIoZmFsc2UpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2VuZFBhc3N3b3JkUmVzZXRFbWFpbCA9IChlbWFpbCkgPT4ge1xyXG4gICAgcmV0dXJuIGF1dGguc2VuZFBhc3N3b3JkUmVzZXRFbWFpbChlbWFpbCkudGhlbigoKSA9PiB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY29uZmlybVBhc3N3b3JkUmVzZXQgPSAoY29kZSwgcGFzc3dvcmQpID0+IHtcclxuICAgIHJldHVybiBhdXRoLmNvbmZpcm1QYXNzd29yZFJlc2V0KGNvZGUsIHBhc3N3b3JkKS50aGVuKCgpID0+IHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdW5zdWJzY3JpYmUgPSBhdXRoLm9uQXV0aFN0YXRlQ2hhbmdlZCgodXNlcikgPT4ge1xyXG4gICAgICBpZiAodXNlcikge1xyXG4gICAgICAgIHNldFVzZXIodXNlcik7XHJcbiAgICAgICAgaWYgKHVzZXIudWlkKSB7XHJcbiAgICAgICAgICBsZXQgdXNlcm5hbWUgPSBcIlwiO1xyXG4gICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgIGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKVxyXG4gICAgICAgICAgICAuZG9jKHVzZXIudWlkKVxyXG4gICAgICAgICAgICAub25TbmFwc2hvdCgoZG9jKSA9PiB7XHJcbiAgICAgICAgICAgICAgdXNlcm5hbWUgPSBkb2MuZGF0YSgpLnVzZXJuYW1lO1xyXG4gICAgICAgICAgICAgIHNldFVzZXIoeyAuLi51c2VyLCB1c2VybmFtZSB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldFVzZXIoZmFsc2UpO1xyXG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIENsZWFudXAgc3Vic2NyaXB0aW9uIG9uIHVubW91bnRcclxuICAgIHJldHVybiAoKSA9PiB1bnN1YnNjcmliZSgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgLy8gUmV0dXJuIHRoZSB1c2VyIG9iamVjdCBhbmQgYXV0aCBtZXRob2RzXHJcbiAgcmV0dXJuIHtcclxuICAgIGlzTG9hZGluZyxcclxuICAgIHVzZXIsXHJcbiAgICBzaWduaW4sXHJcbiAgICBzaWdudXAsXHJcbiAgICBzaWdub3V0LFxyXG4gICAgc2VuZFBhc3N3b3JkUmVzZXRFbWFpbCxcclxuICAgIGNvbmZpcm1QYXNzd29yZFJlc2V0LFxyXG4gIH07XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRm9ybSwgbWVzc2FnZSB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tIFwiLi4vLi4vLi4vaG9va3MvdXNlckhvb2tzXCI7XHJcbmltcG9ydCB7XHJcbiAgZWRpdENoYXJhY3RlcixcclxuICBnZXRDaGFyYWN0ZXIsXHJcbiAgZ2V0VXNlckNoYXJhY3RlcnMsXHJcbn0gZnJvbSBcIi4uLy4uLy4uL3JlZHV4L2FjdGlvbnMvY2hhcmFjdGVyc0FjdGlvbnNcIjtcclxuXHJcbmltcG9ydCBMb2FkaW5nU2NyZWVuIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2hvYy9Mb2FkaW5nU2NyZWVuXCI7XHJcbmltcG9ydCBSZWRpcmVjdENvbXAgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaG9jL1JlZGlyZWN0Q29tcFwiO1xyXG5pbXBvcnQgQ2hhcmFjdGVyRm9ybSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9mb3Jtcy9DaGFyYWN0ZXJGb3JtXCI7XHJcblxyXG5jb25zdCBFZGl0Q2hhcmFjdGVyID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgY2hhcmFjdGVyLFxyXG4gICAgY2hhcmFjdGVycyxcclxuICAgIGxvYWRpbmdDaGFyYWN0ZXIsXHJcbiAgICBsb2FkaW5nLFxyXG4gICAgY2hhcmFFeGlzdHMsXHJcbiAgICBlZGl0TWVzc2FnZSxcclxuICB9ID0gcHJvcHM7XHJcbiAgY29uc3QgYXV0aCA9IHVzZUF1dGgoKTtcclxuICBjb25zdCBbZm9ybV0gPSBGb3JtLnVzZUZvcm0oKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgW3Zpc2liaWxpdHksIHNldFZpc2liaWxpdHldID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoYXV0aC51c2VyKSB7XHJcbiAgICAgIHByb3BzLmdldENoYXJhY3Rlcihyb3V0ZXIucXVlcnkuaWQpO1xyXG4gICAgICBwcm9wcy5nZXRVc2VyQ2hhcmFjdGVycyhhdXRoLnVzZXIudWlkKTtcclxuICAgIH1cclxuICB9LCBbYXV0aF0pO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGVkaXRNZXNzYWdlKSB7XHJcbiAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhlZGl0TWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfSwgW2VkaXRNZXNzYWdlXSk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmb3JtLnNldEZpZWxkc1ZhbHVlKHsgcHVibGljOiB2aXNpYmlsaXR5IH0pO1xyXG4gIH0sIFt2aXNpYmlsaXR5XSk7XHJcblxyXG4gIGNvbnN0IG9uRmFpbGVkID0gKCkgPT4ge1xyXG4gICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG4gICAgbWVzc2FnZS5lcnJvcihcIlRoZXJlIGFyZSBzb21lIGVycm9yc1wiKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzdWJtaXQgPSAodmFsdWVzKSA9PiB7XHJcbiAgICBwcm9wcy5lZGl0Q2hhcmFjdGVyKHsgLi4udmFsdWVzIH0sIHJvdXRlci5xdWVyeS5pZCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMb2FkaW5nU2NyZWVuIGxvYWRpbmc9e2xvYWRpbmd9PlxyXG4gICAgICA8UmVkaXJlY3RDb21wIHR5cGU9XCI0MDRcIiBjb25kaXRpb249e2NoYXJhRXhpc3RzfT5cclxuICAgICAgICA8UmVkaXJlY3RDb21wXHJcbiAgICAgICAgICB0eXBlPVwiNDAzXCJcclxuICAgICAgICAgIGNvbmRpdGlvbj17YXV0aC51c2VyICYmIGF1dGgudXNlci51aWQgPT09IGNoYXJhY3Rlci5hdXRob3JJZH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbS1mb3JtIG5ldy1jaGFyYWN0ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lclwiPlxyXG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJzaWRlLWhlYWRpbmdcIj5cclxuICAgICAgICAgICAgICAgIEVkaXQgY2hhcmFjdGVyOlxyXG4gICAgICAgICAgICAgICAge2AgJHtjaGFyYWN0ZXIuZmlyc3RuYW1lfSAke1xyXG4gICAgICAgICAgICAgICAgICBjaGFyYWN0ZXIubGFzdG5hbWUgJiYgY2hhcmFjdGVyLmxhc3RuYW1lXHJcbiAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgIDxDaGFyYWN0ZXJGb3JtXHJcbiAgICAgICAgICAgICAgICBzdWJtaXQ9e3N1Ym1pdH1cclxuICAgICAgICAgICAgICAgIG9uRmFpbGVkPXtvbkZhaWxlZH1cclxuICAgICAgICAgICAgICAgIGZvcm09e2Zvcm19XHJcbiAgICAgICAgICAgICAgICBjaGFyYWN0ZXI9e2NoYXJhY3Rlcn1cclxuICAgICAgICAgICAgICAgIGNoYXJhY3RlcnM9e2NoYXJhY3RlcnMuZmlsdGVyKChjKSA9PiBjLmlkICE9PSBjaGFyYWN0ZXIuaWQpfVxyXG4gICAgICAgICAgICAgICAgdmlzaWJpbGl0eT17dmlzaWJpbGl0eX1cclxuICAgICAgICAgICAgICAgIHNldFZpc2liaWxpdHk9e3NldFZpc2liaWxpdHl9XHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nQ2hhcmFjdGVyPXtsb2FkaW5nQ2hhcmFjdGVyfVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImVkaXRcIlxyXG4gICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17eyAuLi5jaGFyYWN0ZXIgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvUmVkaXJlY3RDb21wPlxyXG4gICAgICA8L1JlZGlyZWN0Q29tcD5cclxuICAgIDwvTG9hZGluZ1NjcmVlbj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG4gIGNoYXJhY3Rlcjogc3RhdGUuY2hhcmFjdGVycy5jaGFyYWN0ZXIsXHJcbiAgY2hhcmFjdGVyczogc3RhdGUuY2hhcmFjdGVycy51c2VyQ2hhcmFjdGVycyxcclxuICBsb2FkaW5nOiBzdGF0ZS5jaGFyYWN0ZXJzLmxvYWRpbmcsXHJcbiAgbG9hZGluZ0NoYXJhY3Rlcjogc3RhdGUuY2hhcmFjdGVycy5sb2FkaW5nQ2hhcmFjdGVyLFxyXG4gIGNoYXJhY3RlcklkOiBzdGF0ZS5jaGFyYWN0ZXJzLmNoYXJhY3RlcklkLFxyXG4gIGNoYXJhRXhpc3RzOiBzdGF0ZS5jaGFyYWN0ZXJzLmNoYXJhRXhpc3RzLFxyXG4gIGVkaXRNZXNzYWdlOiBzdGF0ZS5jaGFyYWN0ZXJzLm1lc3NhZ2UsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHtcclxuICBnZXRDaGFyYWN0ZXIsXHJcbiAgZWRpdENoYXJhY3RlcixcclxuICBnZXRVc2VyQ2hhcmFjdGVycyxcclxufSkoRWRpdENoYXJhY3Rlcik7XHJcbiIsImltcG9ydCB7XHJcbiAgR0VUX1VTRVJfQ0hBUkFDVEVSUyxcclxuICBHRVRfRkFWT1JJVEVfQ0hBUkFDVEVSUyxcclxuICBBRERfQ0hBUkFDVEVSLFxyXG4gIEVESVRfQ0hBUkFDVEVSLFxyXG4gIEdFVF9DSEFSQUNURVIsXHJcbn0gZnJvbSBcIi4uLy4uL3V0aWxzL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBtZXNzYWdlIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgZGIsIGF1dGggfSBmcm9tIFwiLi4vZmJDb25maWdcIjtcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDaGFyYWN0ZXIgPSAoaWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzXCIpXHJcbiAgICAuZG9jKGlkKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigoZG9jKSA9PiB7XHJcbiAgICAgIGlmIChkb2MuZXhpc3RzKSB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogR0VUX0NIQVJBQ1RFUixcclxuICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgY2hhcmFjdGVyOiB7IC4uLmRvYy5kYXRhKCksIGlkOiBkb2MuaWQgfSxcclxuICAgICAgICAgICAgY2hhcmFFeGlzdHM6IHRydWUsXHJcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiBHRVRfQ0hBUkFDVEVSLFxyXG4gICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICBjaGFyYUV4aXN0czogZmFsc2UsXHJcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYWRkQ2hhcmFjdGVyID0gKGRhdGEpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRpc3BhdGNoKHsgdHlwZTogQUREX0NIQVJBQ1RFUiwgcGF5bG9hZDogeyBsb2FkaW5nOiB0cnVlIH0gfSk7XHJcbiAgY29uc3QgaW1hZ2VOYW1lID0gYCR7ZGF0YS5maXJzdG5hbWUudG9Mb3dlckNhc2UoKX0ke2RhdGEubGFzdG5hbWUgJiYgXCJfXCJ9JHtcclxuICAgIGRhdGEubGFzdG5hbWUgJiYgZGF0YS5sYXN0bmFtZS50b0xvd2VyQ2FzZSgpXHJcbiAgfWA7XHJcbiAgaWYgKHR5cGVvZiBkYXRhLmltYWdlID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICBzdG9yYWdlXHJcbiAgICAgIC5yZWYoYCR7YXV0aC5jdXJyZW50VXNlci51aWR9LyR7aW1hZ2VOYW1lfWApXHJcbiAgICAgIC5wdXQoZGF0YS5pbWFnZSlcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBzdG9yYWdlXHJcbiAgICAgICAgICAucmVmKGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gICAgICAgICAgLmNoaWxkKGltYWdlTmFtZSlcclxuICAgICAgICAgIC5nZXREb3dubG9hZFVSTCgpO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigodXJsKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGRiLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzXCIpLmFkZCh7XHJcbiAgICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgICAgaW1hZ2U6IHVybCxcclxuICAgICAgICAgIGNyZWF0ZWRBdDogZmlyZWJhc2UuZmlyZXN0b3JlLkZpZWxkVmFsdWUuc2VydmVyVGltZXN0YW1wKCksXHJcbiAgICAgICAgICBsaWtlc0NvdW50OiAwLFxyXG4gICAgICAgICAgbGlrZXM6IFtdLFxyXG4gICAgICAgICAgZGlzbGlrZXM6IFtdLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgbWVzc2FnZS5zdWNjZXNzKFwiQ2hhcmFjdGVyIGFkZGVkIHN1Y2Nlc3NmdWxseVwiKTtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiBBRERfQ0hBUkFDVEVSLFxyXG4gICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkNoYXJhY3RlciBhZGRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgICAgY2hhcmFjdGVySWQ6IHJlcy5pZCxcclxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoZXJyLm1lc3NhZ2UpO1xyXG4gICAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgZGIuY29sbGVjdGlvbihcImNoYXJhY3RlcnNcIilcclxuICAgICAgLmFkZCh7XHJcbiAgICAgICAgLi4uZGF0YSxcclxuICAgICAgICBjcmVhdGVkQXQ6IGZpcmViYXNlLmZpcmVzdG9yZS5GaWVsZFZhbHVlLnNlcnZlclRpbWVzdGFtcCgpLFxyXG4gICAgICAgIGxpa2VzQ291bnQ6IDAsXHJcbiAgICAgICAgbGlrZXM6IFtdLFxyXG4gICAgICAgIGRpc2xpa2VzOiBbXSxcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhcIkNoYXJhY3RlciBhZGRlZCBzdWNjZXNzZnVsbHlcIik7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogQUREX0NIQVJBQ1RFUixcclxuICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJDaGFyYWN0ZXIgYWRkZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICAgIGNoYXJhY3RlcklkOiByZXMuaWQsXHJcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBtZXNzYWdlLmVycm9yKGVyci5tZXNzYWdlKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGVkaXRDaGFyYWN0ZXIgPSAoZGF0YSwgaWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRpc3BhdGNoKHsgdHlwZTogRURJVF9DSEFSQUNURVIsIHBheWxvYWQ6IHsgbG9hZGluZ0NoYXJhY3RlcjogdHJ1ZSB9IH0pO1xyXG4gIGNvbnN0IGltYWdlTmFtZSA9IGAke2RhdGEuZmlyc3RuYW1lLnRvTG93ZXJDYXNlKCl9JHtkYXRhLmxhc3RuYW1lICYmIFwiX1wifSR7XHJcbiAgICBkYXRhLmxhc3RuYW1lICYmIGRhdGEubGFzdG5hbWUudG9Mb3dlckNhc2UoKVxyXG4gIH1gO1xyXG4gIGlmIChkYXRhLmltYWdlICYmIHR5cGVvZiBkYXRhLmltYWdlID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICBzdG9yYWdlXHJcbiAgICAgIC5yZWYoYCR7YXV0aC5jdXJyZW50VXNlci51aWR9LyR7aW1hZ2VOYW1lfWApXHJcbiAgICAgIC5wdXQoZGF0YS5pbWFnZSlcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBzdG9yYWdlXHJcbiAgICAgICAgICAucmVmKGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gICAgICAgICAgLmNoaWxkKGltYWdlTmFtZSlcclxuICAgICAgICAgIC5nZXREb3dubG9hZFVSTCgpO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigodXJsKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGRiXHJcbiAgICAgICAgICAuY29sbGVjdGlvbihcImNoYXJhY3RlcnNcIilcclxuICAgICAgICAgIC5kb2MoaWQpXHJcbiAgICAgICAgICAudXBkYXRlKHtcclxuICAgICAgICAgICAgLi4uZGF0YSxcclxuICAgICAgICAgICAgaW1hZ2U6IHVybCxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogRURJVF9DSEFSQUNURVIsXHJcbiAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiQ2hhcmFjdGVyIGVkaXRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgICAgbG9hZGluZ0NoYXJhY3RlcjogZmFsc2UsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoZXJyLm1lc3NhZ2UpO1xyXG4gICAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgZGIuY29sbGVjdGlvbihcImNoYXJhY3RlcnNcIilcclxuICAgICAgLmRvYyhpZClcclxuICAgICAgLnVwZGF0ZSh7XHJcbiAgICAgICAgLi4uZGF0YSxcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IEVESVRfQ0hBUkFDVEVSLFxyXG4gICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkNoYXJhY3RlciBlZGl0ZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICAgIGxvYWRpbmdDaGFyYWN0ZXI6IGZhbHNlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBtZXNzYWdlLmVycm9yKGVyci5tZXNzYWdlKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFVzZXJDaGFyYWN0ZXJzID0gKHVzZXJJZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGIuY29sbGVjdGlvbihcImNoYXJhY3RlcnNcIilcclxuICAgIC53aGVyZShcImF1dGhvcklkXCIsIFwiPT1cIiwgdXNlcklkKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigoZG9jcykgPT4ge1xyXG4gICAgICBsZXQgaXRlbXMgPSBbXTtcclxuICAgICAgZG9jcy5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgICAgICBpdGVtcyA9IFsuLi5pdGVtcywgeyBpZDogZG9jLmlkLCAuLi5kb2MuZGF0YSgpIH1dO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGl0ZW1zO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChpdGVtcykgPT4ge1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IEdFVF9VU0VSX0NIQVJBQ1RFUlMsIHBheWxvYWQ6IGl0ZW1zIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0RmF2b3JpdGVDaGFyYWN0ZXJzID0gKCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGIuY29sbGVjdGlvbihcImNoYXJhY3RlcnNMaWtlc1wiKVxyXG4gICAgLndoZXJlKFwic2VuZGVySWRcIiwgXCI9PVwiLCBhdXRoLmN1cnJlbnRVc2VyLnVpZClcclxuICAgIC5nZXQoKVxyXG4gICAgLnRoZW4oKGRvY3MpID0+IHtcclxuICAgICAgbGV0IGZhdkFyciA9IFtdO1xyXG4gICAgICBkb2NzLmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgICAgIGZhdkFyciA9IFsuLi5mYXZBcnIsIGRvYy5kYXRhKCkuY2hhcmFjdGVySWRdO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGZhdkFycjtcclxuICAgIH0pXHJcbiAgICAudGhlbigodXNlcnMpID0+IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gdXNlcnMubWFwKCh1c2VyKSA9PlxyXG4gICAgICAgIGRiLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzXCIpLmRvYyh1c2VyKS5nZXQoKVxyXG4gICAgICApO1xyXG4gICAgICBQcm9taXNlLmFsbChyZXN1bHQpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGxldCBmYXZVc2VycyA9IFtdO1xyXG4gICAgICAgIHJlcy5mb3JFYWNoKFxyXG4gICAgICAgICAgKGRvYykgPT4gKGZhdlVzZXJzID0gWy4uLmZhdlVzZXJzLCB7IGlkOiBkb2MuaWQsIC4uLmRvYy5kYXRhKCkgfV0pXHJcbiAgICAgICAgKTtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiBHRVRfRkFWT1JJVEVfQ0hBUkFDVEVSUyxcclxuICAgICAgICAgIHBheWxvYWQ6IGZhdlVzZXJzLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG4iLCJpbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlL2FwcFwiO1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9hdXRoXCI7XHJcbmltcG9ydCBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9zdG9yYWdlXCI7XHJcblxyXG5jb25zdCBwcm9kQ29uZmlnID0ge1xyXG4gIGFwaUtleTogcHJvY2Vzcy5lbnYuRklSRUJBU0VfQVBJX0tFWSxcclxuICBhdXRoRG9tYWluOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9BVVRIX0RPTUFJTixcclxuICBkYXRhYmFzZVVSTDogcHJvY2Vzcy5lbnYuRklSRUJBU0VfREFUQUJBU0VfVVJMLFxyXG4gIHByb2plY3RJZDogcHJvY2Vzcy5lbnYuRklSRUJBU0VfUFJPSkVDVF9JRCxcclxuICBzdG9yYWdlQnVja2V0OiBwcm9jZXNzLmVudi5GSVJFQkFTRV9TVE9SQUdFX0JVQ0tFVCxcclxuICBtZXNzYWdpbmdTZW5kZXJJZDogcHJvY2Vzcy5lbnYuRklSRUJBU0VfTUVTU0FHSU5HX1NFTkRFUl9JRCxcclxuICBhcHBJZDogcHJvY2Vzcy5lbnYuRklSRUJBU0VfQVBQX0lELFxyXG59O1xyXG5cclxuY29uc3QgZGV2Q29uZmlnID0ge1xyXG4gIGFwaUtleTogcHJvY2Vzcy5lbnYuRklSRUJBU0VfQVBJX0tFWSxcclxuICBhdXRoRG9tYWluOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9BVVRIX0RPTUFJTixcclxuICBkYXRhYmFzZVVSTDogcHJvY2Vzcy5lbnYuRklSRUJBU0VfREFUQUJBU0VfVVJMLFxyXG4gIHByb2plY3RJZDogcHJvY2Vzcy5lbnYuRklSRUJBU0VfUFJPSkVDVF9JRCxcclxuICBzdG9yYWdlQnVja2V0OiBwcm9jZXNzLmVudi5GSVJFQkFTRV9TVE9SQUdFX0JVQ0tFVCxcclxuICBtZXNzYWdpbmdTZW5kZXJJZDogcHJvY2Vzcy5lbnYuRklSRUJBU0VfTUVTU0FHSU5HX1NFTkRFUl9JRCxcclxuICBhcHBJZDogcHJvY2Vzcy5lbnYuRklSRUJBU0VfQVBQX0lELFxyXG59O1xyXG5cclxuY29uc3QgY29uZmlnID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gcHJvZENvbmZpZyA6IGRldkNvbmZpZztcclxuXHJcbmlmICghZmlyZWJhc2UuYXBwcy5sZW5ndGgpIHtcclxuICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGNvbmZpZyk7XHJcbn1cclxuXHJcbmNvbnN0IGRiID0gZmlyZWJhc2UuZmlyZXN0b3JlKCk7XHJcbmNvbnN0IGF1dGggPSBmaXJlYmFzZS5hdXRoKCk7XHJcbmNvbnN0IHN0b3JhZ2UgPSBmaXJlYmFzZS5zdG9yYWdlKCk7XHJcblxyXG5leHBvcnQgeyBkYiwgYXV0aCwgc3RvcmFnZSB9O1xyXG5leHBvcnQgZGVmYXVsdCBjb25maWc7XHJcbiIsImV4cG9ydCBjb25zdCBDQVRFR09SSUVTID0gW1xyXG4gIHsgbmFtZTogXCJEcmFtYVwiLCB2YWx1ZTogXCJkcmFtYVwiIH0sXHJcbiAgeyBuYW1lOiBcIkNvbWVkeVwiLCB2YWx1ZTogXCJjb21lZHlcIiB9LFxyXG4gIHsgbmFtZTogXCJIb3Jyb3JcIiwgdmFsdWU6IFwiaG9ycm9yXCIgfSxcclxuICB7IG5hbWU6IFwiUm9tYW5jZVwiLCB2YWx1ZTogXCJyb21hbmNlXCIgfSxcclxuICB7IG5hbWU6IFwiU2NpLWZpXCIsIHZhbHVlOiBcInNjaS1maVwiIH0sXHJcbiAgeyBuYW1lOiBcIkZhbnRhc3lcIiwgdmFsdWU6IFwiZmFudGFzeVwiIH0sXHJcbiAgeyBuYW1lOiBcIkh1bW9yXCIsIHZhbHVlOiBcImh1bW9yXCIgfSxcclxuICB7IG5hbWU6IFwiQWN0aW9uXCIsIHZhbHVlOiBcImFjdGlvblwiIH0sXHJcbiAgeyBuYW1lOiBcIlRocmlsbGVyXCIsIHZhbHVlOiBcInRocmlsbGVyXCIgfSxcclxuICB7IG5hbWU6IFwiU3VwZXJuYXR1cmFsXCIsIHZhbHVlOiBcInN1cGVybmF0dXJhbFwiIH0sXHJcbiAgeyBuYW1lOiBcIkFkdmVudHVyZVwiLCB2YWx1ZTogXCJhZHZlbnR1cmVcIiB9LFxyXG4gIHsgbmFtZTogXCJNeXN0ZXJ5XCIsIHZhbHVlOiBcIm15c3RlcnlcIiB9LFxyXG4gIHsgbmFtZTogXCJXZXN0ZXJuXCIsIHZhbHVlOiBcIndlc3Rlcm5cIiB9LFxyXG4gIHsgbmFtZTogXCJIaXN0b3J5XCIsIHZhbHVlOiBcImhpc3RvcnlcIiB9LFxyXG4gIHsgbmFtZTogXCJDcmltZVwiLCB2YWx1ZTogXCJjcmltZVwiIH0sXHJcbiAgeyBuYW1lOiBcIkZhbmZpY3Rpb25cIiwgdmFsdWU6IFwiZmFuZmljdGlvblwiIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgQ09QWVJJR0hUUyA9IFtcclxuICB7IG5hbWU6IFwiUHVibGljIERvbWFpblwiLCB2YWx1ZTogXCJwdWJsaWMgZG9tYWluXCIgfSxcclxuICB7IG5hbWU6IFwiQWxsIFJpZ2h0cyBSZXNlcnZlZFwiLCB2YWx1ZTogXCJhbGwgcmlnaHRzIHJlc2VydmVkXCIgfSxcclxuICB7IG5hbWU6IFwiQ3JlYXRpdmUgQ29tbW9uc1wiLCB2YWx1ZTogXCJjcmVhdGl2ZSBjb21tb25zXCIgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBMQU5HVUFHRVMgPSBbXHJcbiAgeyBuYW1lOiBcIkFmYXJcIiwgdmFsdWU6IFwiYWFcIiB9LFxyXG4gIHsgbmFtZTogXCJBYmtoYXppYW5cIiwgdmFsdWU6IFwiYWJcIiB9LFxyXG4gIHsgbmFtZTogXCJBdmVzdGFuXCIsIHZhbHVlOiBcImFlXCIgfSxcclxuICB7IG5hbWU6IFwiQWZyaWthYW5zXCIsIHZhbHVlOiBcImFmXCIgfSxcclxuICB7IG5hbWU6IFwiQWthblwiLCB2YWx1ZTogXCJha1wiIH0sXHJcbiAgeyBuYW1lOiBcIkFtaGFyaWNcIiwgdmFsdWU6IFwiYW1cIiB9LFxyXG4gIHsgbmFtZTogXCJBcmFnb25lc2VcIiwgdmFsdWU6IFwiYW5cIiB9LFxyXG4gIHsgbmFtZTogXCJBcmFiaWNcIiwgdmFsdWU6IFwiYXJcIiB9LFxyXG4gIHsgbmFtZTogXCJBc3NhbWVzZVwiLCB2YWx1ZTogXCJhc1wiIH0sXHJcbiAgeyBuYW1lOiBcIkF2YXJpY1wiLCB2YWx1ZTogXCJhdlwiIH0sXHJcbiAgeyBuYW1lOiBcIkF5bWFyYVwiLCB2YWx1ZTogXCJheVwiIH0sXHJcbiAgeyBuYW1lOiBcIkF6ZXJiYWlqYW5pXCIsIHZhbHVlOiBcImF6XCIgfSxcclxuICB7IG5hbWU6IFwiQmFzaGtpclwiLCB2YWx1ZTogXCJiYVwiIH0sXHJcbiAgeyBuYW1lOiBcIkJlbGFydXNpYW5cIiwgdmFsdWU6IFwiYmVcIiB9LFxyXG4gIHsgbmFtZTogXCJCdWxnYXJpYW5cIiwgdmFsdWU6IFwiYmdcIiB9LFxyXG4gIHsgbmFtZTogXCJCaWhhcmlcIiwgdmFsdWU6IFwiYmhcIiB9LFxyXG4gIHsgbmFtZTogXCJCaXNsYW1hXCIsIHZhbHVlOiBcImJpXCIgfSxcclxuICB7IG5hbWU6IFwiQmFtYmFyYVwiLCB2YWx1ZTogXCJibVwiIH0sXHJcbiAgeyBuYW1lOiBcIkJlbmdhbGlcIiwgdmFsdWU6IFwiYm5cIiB9LFxyXG4gIHsgbmFtZTogXCJUaWJldGFuXCIsIHZhbHVlOiBcImJvXCIgfSxcclxuICB7IG5hbWU6IFwiQnJldG9uXCIsIHZhbHVlOiBcImJyXCIgfSxcclxuICB7IG5hbWU6IFwiQm9zbmlhblwiLCB2YWx1ZTogXCJic1wiIH0sXHJcbiAgeyBuYW1lOiBcIkNhdGFsYW5cIiwgdmFsdWU6IFwiY2FcIiB9LFxyXG4gIHsgbmFtZTogXCJDaGVjaGVuXCIsIHZhbHVlOiBcImNlXCIgfSxcclxuICB7IG5hbWU6IFwiQ2hhbW9ycm9cIiwgdmFsdWU6IFwiY2hcIiB9LFxyXG4gIHsgbmFtZTogXCJDb3JzaWNhblwiLCB2YWx1ZTogXCJjb1wiIH0sXHJcbiAgeyBuYW1lOiBcIkNyZWVcIiwgdmFsdWU6IFwiY3JcIiB9LFxyXG4gIHsgbmFtZTogXCJDemVjaFwiLCB2YWx1ZTogXCJjc1wiIH0sXHJcbiAgeyBuYW1lOiBcIk9sZCBDaHVyY2ggU2xhdm9uaWNcIiwgdmFsdWU6IFwiY3VcIiB9LFxyXG4gIHsgbmFtZTogXCJDaHV2YXNoXCIsIHZhbHVlOiBcImN2XCIgfSxcclxuICB7IG5hbWU6IFwiV2Vsc2hcIiwgdmFsdWU6IFwiY3lcIiB9LFxyXG4gIHsgbmFtZTogXCJEYW5pc2hcIiwgdmFsdWU6IFwiZGFcIiB9LFxyXG4gIHsgbmFtZTogXCJHZXJtYW5cIiwgdmFsdWU6IFwiZGVcIiB9LFxyXG4gIHsgbmFtZTogXCJEaXZlaGlcIiwgdmFsdWU6IFwiZHZcIiB9LFxyXG4gIHsgbmFtZTogXCJEem9uZ2toYVx0XCIsIHZhbHVlOiBcImR6XCIgfSxcclxuICB7IG5hbWU6IFwiRXdlXCIsIHZhbHVlOiBcImVlXCIgfSxcclxuICB7IG5hbWU6IFwiR3JlZWtcIiwgdmFsdWU6IFwiZWxcIiB9LFxyXG4gIHsgbmFtZTogXCJFbmdsaXNoXCIsIHZhbHVlOiBcImVuXCIgfSxcclxuICB7IG5hbWU6IFwiRXNwZXJhbnRvXCIsIHZhbHVlOiBcImVvXCIgfSxcclxuICB7IG5hbWU6IFwiU3BhbmlzaFwiLCB2YWx1ZTogXCJlc1wiIH0sXHJcbiAgeyBuYW1lOiBcIkVzdG9uaWFuXCIsIHZhbHVlOiBcImV0XCIgfSxcclxuICB7IG5hbWU6IFwiQmFzcXVlXCIsIHZhbHVlOiBcImV1XCIgfSxcclxuICB7IG5hbWU6IFwiUGVyc2lhblwiLCB2YWx1ZTogXCJmYVwiIH0sXHJcbiAgeyBuYW1lOiBcIkZ1bGFoXCIsIHZhbHVlOiBcImZmXCIgfSxcclxuICB7IG5hbWU6IFwiRmlubmlzaFwiLCB2YWx1ZTogXCJmaVwiIH0sXHJcbiAgeyBuYW1lOiBcIkZpamlhblwiLCB2YWx1ZTogXCJmalwiIH0sXHJcbiAgeyBuYW1lOiBcIkZhcm9lc2VcIiwgdmFsdWU6IFwiZm9cIiB9LFxyXG4gIHsgbmFtZTogXCJGcmVuY2hcIiwgdmFsdWU6IFwiZnJcIiB9LFxyXG4gIHsgbmFtZTogXCJXZXN0ZXJuIEZyaXNpYW5cIiwgdmFsdWU6IFwiZnlcIiB9LFxyXG4gIHsgbmFtZTogXCJJcmlzaFwiLCB2YWx1ZTogXCJnYVwiIH0sXHJcbiAgeyBuYW1lOiBcIlNjb3R0aXNoIEdhZWxpY1wiLCB2YWx1ZTogXCJnZFwiIH0sXHJcbiAgeyBuYW1lOiBcIkdhbGljaWFuXCIsIHZhbHVlOiBcImdsXCIgfSxcclxuICB7IG5hbWU6IFwiR3VhcmFuaVwiLCB2YWx1ZTogXCJnblwiIH0sXHJcbiAgeyBuYW1lOiBcIkd1amFyYXRpXCIsIHZhbHVlOiBcImd1XCIgfSxcclxuICB7IG5hbWU6IFwiTWFueFwiLCB2YWx1ZTogXCJndlwiIH0sXHJcbiAgeyBuYW1lOiBcIkhhdXNhXCIsIHZhbHVlOiBcImhhXCIgfSxcclxuICB7IG5hbWU6IFwiSGVicmV3XCIsIHZhbHVlOiBcImhlXCIgfSxcclxuICB7IG5hbWU6IFwiSGluZGlcIiwgdmFsdWU6IFwiaGlcIiB9LFxyXG4gIHsgbmFtZTogXCJIaXJpIE1vdHVcIiwgdmFsdWU6IFwiaG9cIiB9LFxyXG4gIHsgbmFtZTogXCJDcm9hdGlhblwiLCB2YWx1ZTogXCJoclwiIH0sXHJcbiAgeyBuYW1lOiBcIkhhaXRpYW5cIiwgdmFsdWU6IFwiaHRcIiB9LFxyXG4gIHsgbmFtZTogXCJIdW5nYXJpYW5cIiwgdmFsdWU6IFwiaHVcIiB9LFxyXG4gIHsgbmFtZTogXCJBcm1lbmlhblwiLCB2YWx1ZTogXCJoeVwiIH0sXHJcbiAgeyBuYW1lOiBcIkhlcmVyb1wiLCB2YWx1ZTogXCJoelwiIH0sXHJcbiAgeyBuYW1lOiBcIkludGVybGluZ3VhXCIsIHZhbHVlOiBcImlhXCIgfSxcclxuICB7IG5hbWU6IFwiSW5kb25lc2lhblwiLCB2YWx1ZTogXCJpZFwiIH0sXHJcbiAgeyBuYW1lOiBcIkludGVybGluZ3VlXCIsIHZhbHVlOiBcImllXCIgfSxcclxuICB7IG5hbWU6IFwiSWdib1wiLCB2YWx1ZTogXCJpZ1wiIH0sXHJcbiAgeyBuYW1lOiBcIlNpY2h1YW4gWWlcIiwgdmFsdWU6IFwiaWlcIiB9LFxyXG4gIHsgbmFtZTogXCJJbnVwaWFxXCIsIHZhbHVlOiBcImlrXCIgfSxcclxuICB7IG5hbWU6IFwiSWRvXCIsIHZhbHVlOiBcImlvXCIgfSxcclxuICB7IG5hbWU6IFwiSWNlbGFuZGljXCIsIHZhbHVlOiBcImlzXCIgfSxcclxuICB7IG5hbWU6IFwiSXRhbGlhblwiLCB2YWx1ZTogXCJpdFwiIH0sXHJcbiAgeyBuYW1lOiBcIkludWt0aXR1dFwiLCB2YWx1ZTogXCJpdVwiIH0sXHJcbiAgeyBuYW1lOiBcIkphcGFuZXNlXCIsIHZhbHVlOiBcImphXCIgfSxcclxuICB7IG5hbWU6IFwiSmF2YW5lc2VcIiwgdmFsdWU6IFwianZcIiB9LFxyXG4gIHsgbmFtZTogXCJHZW9yZ2lhblwiLCB2YWx1ZTogXCJrYVwiIH0sXHJcbiAgeyBuYW1lOiBcIktvbmdvXCIsIHZhbHVlOiBcImtnXCIgfSxcclxuICB7IG5hbWU6IFwiS2lrdXl1XCIsIHZhbHVlOiBcImtpXCIgfSxcclxuICB7IG5hbWU6IFwiS3dhbnlhbWFcIiwgdmFsdWU6IFwia2pcIiB9LFxyXG4gIHsgbmFtZTogXCJLYXpha2hcIiwgdmFsdWU6IFwia2tcIiB9LFxyXG4gIHsgbmFtZTogXCJHcmVlbmxhbmRpY1wiLCB2YWx1ZTogXCJrbFwiIH0sXHJcbiAgeyBuYW1lOiBcIktobWVyXCIsIHZhbHVlOiBcImttXCIgfSxcclxuICB7IG5hbWU6IFwiS2FubmFkYVwiLCB2YWx1ZTogXCJrblwiIH0sXHJcbiAgeyBuYW1lOiBcIktvcmVhblwiLCB2YWx1ZTogXCJrb1wiIH0sXHJcbiAgeyBuYW1lOiBcIkthbnVyaVwiLCB2YWx1ZTogXCJrclwiIH0sXHJcbiAgeyBuYW1lOiBcIkthc2htaXJpXCIsIHZhbHVlOiBcImtzXCIgfSxcclxuICB7IG5hbWU6IFwiS3VyZGlzaFwiLCB2YWx1ZTogXCJrdVwiIH0sXHJcbiAgeyBuYW1lOiBcIktvbWlcIiwgdmFsdWU6IFwia3ZcIiB9LFxyXG4gIHsgbmFtZTogXCJDb3JuaXNoXCIsIHZhbHVlOiBcImt3XCIgfSxcclxuICB7IG5hbWU6IFwiS2lyZ2hpelwiLCB2YWx1ZTogXCJreVwiIH0sXHJcbiAgeyBuYW1lOiBcIkxhdGluXCIsIHZhbHVlOiBcImxhXCIgfSxcclxuICB7IG5hbWU6IFwiTHV4ZW1ib3VyZ2lzaFwiLCB2YWx1ZTogXCJsYlwiIH0sXHJcbiAgeyBuYW1lOiBcIkdhbmRhXCIsIHZhbHVlOiBcImxnXCIgfSxcclxuICB7IG5hbWU6IFwiTGltYnVyZ2lzaFwiLCB2YWx1ZTogXCJsaVwiIH0sXHJcbiAgeyBuYW1lOiBcIkxpbmdhbGFcIiwgdmFsdWU6IFwibG5cIiB9LFxyXG4gIHsgbmFtZTogXCJMYW9cIiwgdmFsdWU6IFwibG9cIiB9LFxyXG4gIHsgbmFtZTogXCJMaXRodWFuaWFuXCIsIHZhbHVlOiBcImx0XCIgfSxcclxuICB7IG5hbWU6IFwiTHViYVwiLCB2YWx1ZTogXCJsdVwiIH0sXHJcbiAgeyBuYW1lOiBcIkxhdHZpYW5cIiwgdmFsdWU6IFwibHZcIiB9LFxyXG4gIHsgbmFtZTogXCJNYWxhZ2FzeVwiLCB2YWx1ZTogXCJtZ1wiIH0sXHJcbiAgeyBuYW1lOiBcIk1hcnNoYWxsZXNlXCIsIHZhbHVlOiBcIm1oXCIgfSxcclxuICB7IG5hbWU6IFwiTcSBb3JpXCIsIHZhbHVlOiBcIm1pXCIgfSxcclxuICB7IG5hbWU6IFwiTWFjZWRvbmlhblwiLCB2YWx1ZTogXCJta1wiIH0sXHJcbiAgeyBuYW1lOiBcIk1hbGF5YWxhbVwiLCB2YWx1ZTogXCJtbFwiIH0sXHJcbiAgeyBuYW1lOiBcIk1vbmdvbGlhblwiLCB2YWx1ZTogXCJtblwiIH0sXHJcbiAgeyBuYW1lOiBcIk1vbGRhdmlhblwiLCB2YWx1ZTogXCJtb1wiIH0sXHJcbiAgeyBuYW1lOiBcIk1hcmF0aGlcIiwgdmFsdWU6IFwibXJcIiB9LFxyXG4gIHsgbmFtZTogXCJNYWxheVwiLCB2YWx1ZTogXCJtc1wiIH0sXHJcbiAgeyBuYW1lOiBcIk1hbHRlc2VcIiwgdmFsdWU6IFwibXRcIiB9LFxyXG4gIHsgbmFtZTogXCJCdXJtZXNlXCIsIHZhbHVlOiBcIm15XCIgfSxcclxuICB7IG5hbWU6IFwiTmF1cnVcIiwgdmFsdWU6IFwibmFcIiB9LFxyXG4gIHsgbmFtZTogXCJOb3J3ZWdpYW4gQm9rbcOlbFwiLCB2YWx1ZTogXCJuYlwiIH0sXHJcbiAgeyBuYW1lOiBcIk5vcnRoIE5kZWJlbGVcIiwgdmFsdWU6IFwibmRcIiB9LFxyXG4gIHsgbmFtZTogXCJOZXBhbGlcIiwgdmFsdWU6IFwibmVcIiB9LFxyXG4gIHsgbmFtZTogXCJOZG9uZ2FcIiwgdmFsdWU6IFwibmdcIiB9LFxyXG4gIHsgbmFtZTogXCJEdXRjaFwiLCB2YWx1ZTogXCJubFwiIH0sXHJcbiAgeyBuYW1lOiBcIk5vcndlZ2lhbiBOeW5vcnNrXCIsIHZhbHVlOiBcIm5uXCIgfSxcclxuICB7IG5hbWU6IFwiTm9yd2VnaWFuXCIsIHZhbHVlOiBcIm5vXCIgfSxcclxuICB7IG5hbWU6IFwiU291dGggTmRlYmVsZVwiLCB2YWx1ZTogXCJuclwiIH0sXHJcbiAgeyBuYW1lOiBcIk5hdmFqb1wiLCB2YWx1ZTogXCJudlwiIH0sXHJcbiAgeyBuYW1lOiBcIkNoaWNoZXdhXCIsIHZhbHVlOiBcIm55XCIgfSxcclxuICB7IG5hbWU6IFwiT2NjaXRhblwiLCB2YWx1ZTogXCJvY1wiIH0sXHJcbiAgeyBuYW1lOiBcIk9qaWJ3YVwiLCB2YWx1ZTogXCJvalwiIH0sXHJcbiAgeyBuYW1lOiBcIk9yb21vXCIsIHZhbHVlOiBcIm9tXCIgfSxcclxuICB7IG5hbWU6IFwiT3JpeWFcIiwgdmFsdWU6IFwib3JcIiB9LFxyXG4gIHsgbmFtZTogXCJPc3NldGlhblwiLCB2YWx1ZTogXCJvc1wiIH0sXHJcbiAgeyBuYW1lOiBcIlBhbmphYmlcIiwgdmFsdWU6IFwicGFcIiB9LFxyXG4gIHsgbmFtZTogXCJQxIFsaVwiLCB2YWx1ZTogXCJwaVwiIH0sXHJcbiAgeyBuYW1lOiBcIlBvbGlzaFwiLCB2YWx1ZTogXCJwbFwiIH0sXHJcbiAgeyBuYW1lOiBcIlBhc2h0b1wiLCB2YWx1ZTogXCJwc1wiIH0sXHJcbiAgeyBuYW1lOiBcIlBvcnR1Z3Vlc2VcIiwgdmFsdWU6IFwicHRcIiB9LFxyXG4gIHsgbmFtZTogXCJRdWVjaHVhXCIsIHZhbHVlOiBcInF1XCIgfSxcclxuICB7IG5hbWU6IFwiUmV1bmlvbmVzZVwiLCB2YWx1ZTogXCJyY1wiIH0sXHJcbiAgeyBuYW1lOiBcIlJvbWFuc2hcIiwgdmFsdWU6IFwicm1cIiB9LFxyXG4gIHsgbmFtZTogXCJLaXJ1bmRpXCIsIHZhbHVlOiBcInJuXCIgfSxcclxuICB7IG5hbWU6IFwiUm9tYW5pYW5cIiwgdmFsdWU6IFwicm9cIiB9LFxyXG4gIHsgbmFtZTogXCJSdXNzaWFuXCIsIHZhbHVlOiBcInJ1XCIgfSxcclxuICB7IG5hbWU6IFwiS2lueWFyd2FuZGFcIiwgdmFsdWU6IFwicndcIiB9LFxyXG4gIHsgbmFtZTogXCJTYW5za3JpdFwiLCB2YWx1ZTogXCJzYVwiIH0sXHJcbiAgeyBuYW1lOiBcIlNhcmRpbmlhblwiLCB2YWx1ZTogXCJzY1wiIH0sXHJcbiAgeyBuYW1lOiBcIlNpbmRoaVwiLCB2YWx1ZTogXCJzZFwiIH0sXHJcbiAgeyBuYW1lOiBcIk5vcnRoZXJuIFNhbWlcIiwgdmFsdWU6IFwic2VcIiB9LFxyXG4gIHsgbmFtZTogXCJTYW5nb1wiLCB2YWx1ZTogXCJzZ1wiIH0sXHJcbiAgeyBuYW1lOiBcIlNlcmJvLUNyb2F0aWFuXCIsIHZhbHVlOiBcInNoXCIgfSxcclxuICB7IG5hbWU6IFwiU2luaGFsZXNlXCIsIHZhbHVlOiBcInNpXCIgfSxcclxuICB7IG5hbWU6IFwiU2xvdmFrXCIsIHZhbHVlOiBcInNrXCIgfSxcclxuICB7IG5hbWU6IFwiU2xvdmVuaWFuXCIsIHZhbHVlOiBcInNsXCIgfSxcclxuICB7IG5hbWU6IFwiU2Ftb2FuXCIsIHZhbHVlOiBcInNtXCIgfSxcclxuICB7IG5hbWU6IFwiU2hvbmFcIiwgdmFsdWU6IFwic25cIiB9LFxyXG4gIHsgbmFtZTogXCJTb21hbGlcIiwgdmFsdWU6IFwic29cIiB9LFxyXG4gIHsgbmFtZTogXCJBbGJhbmlhblwiLCB2YWx1ZTogXCJzcVwiIH0sXHJcbiAgeyBuYW1lOiBcIlNlcmJpYW5cIiwgdmFsdWU6IFwic3JcIiB9LFxyXG4gIHsgbmFtZTogXCJTd2F0aVwiLCB2YWx1ZTogXCJzc1wiIH0sXHJcbiAgeyBuYW1lOiBcIlNvdGhvXCIsIHZhbHVlOiBcInN0XCIgfSxcclxuICB7IG5hbWU6IFwiU3VuZGFuZXNlXCIsIHZhbHVlOiBcInN1XCIgfSxcclxuICB7IG5hbWU6IFwiU3dlZGlzaFwiLCB2YWx1ZTogXCJzdlwiIH0sXHJcbiAgeyBuYW1lOiBcIlN3YWhpbGlcIiwgdmFsdWU6IFwic3dcIiB9LFxyXG4gIHsgbmFtZTogXCJUYW1pbFwiLCB2YWx1ZTogXCJ0YVwiIH0sXHJcbiAgeyBuYW1lOiBcIlRlbHVndVwiLCB2YWx1ZTogXCJ0ZVwiIH0sXHJcbiAgeyBuYW1lOiBcIlRhamlrXCIsIHZhbHVlOiBcInRnXCIgfSxcclxuICB7IG5hbWU6IFwiVGhhaVwiLCB2YWx1ZTogXCJ0aFwiIH0sXHJcbiAgeyBuYW1lOiBcIlRpZ3JpbnlhXCIsIHZhbHVlOiBcInRpXCIgfSxcclxuICB7IG5hbWU6IFwiVHVya21lblwiLCB2YWx1ZTogXCJ0a1wiIH0sXHJcbiAgeyBuYW1lOiBcIlRhZ2Fsb2dcIiwgdmFsdWU6IFwidGxcIiB9LFxyXG4gIHsgbmFtZTogXCJUc3dhbmFcIiwgdmFsdWU6IFwidG5cIiB9LFxyXG4gIHsgbmFtZTogXCJUb25nYVwiLCB2YWx1ZTogXCJ0b1wiIH0sXHJcbiAgeyBuYW1lOiBcIlR1cmtpc2hcIiwgdmFsdWU6IFwidHJcIiB9LFxyXG4gIHsgbmFtZTogXCJUc29uZ2FcIiwgdmFsdWU6IFwidHNcIiB9LFxyXG4gIHsgbmFtZTogXCJUYXRhclwiLCB2YWx1ZTogXCJ0dFwiIH0sXHJcbiAgeyBuYW1lOiBcIlR3aVwiLCB2YWx1ZTogXCJ0d1wiIH0sXHJcbiAgeyBuYW1lOiBcIlRhaGl0aWFuXCIsIHZhbHVlOiBcInR5XCIgfSxcclxuICB7IG5hbWU6IFwiVWlnaHVyXCIsIHZhbHVlOiBcInVnXCIgfSxcclxuICB7IG5hbWU6IFwiVWtyYWluaWFuXCIsIHZhbHVlOiBcInVrXCIgfSxcclxuICB7IG5hbWU6IFwiVXJkdVwiLCB2YWx1ZTogXCJ1clwiIH0sXHJcbiAgeyBuYW1lOiBcIlV6YmVrXCIsIHZhbHVlOiBcInV6XCIgfSxcclxuICB7IG5hbWU6IFwiVmVuZGFcIiwgdmFsdWU6IFwidmVcIiB9LFxyXG4gIHsgbmFtZTogXCJWacOqdCBOYW1lc2VcIiwgdmFsdWU6IFwidmlcIiB9LFxyXG4gIHsgbmFtZTogXCJWb2xhcMO8a1wiLCB2YWx1ZTogXCJ2b1wiIH0sXHJcbiAgeyBuYW1lOiBcIldhbGxvb25cIiwgdmFsdWU6IFwid2FcIiB9LFxyXG4gIHsgbmFtZTogXCJXb2xvZlwiLCB2YWx1ZTogXCJ3b1wiIH0sXHJcbiAgeyBuYW1lOiBcIlhob3NhXCIsIHZhbHVlOiBcInhoXCIgfSxcclxuICB7IG5hbWU6IFwiWWlkZGlzaFwiLCB2YWx1ZTogXCJ5aVwiIH0sXHJcbiAgeyBuYW1lOiBcIllvcnViYVwiLCB2YWx1ZTogXCJ5b1wiIH0sXHJcbiAgeyBuYW1lOiBcIlpodWFuZ1wiLCB2YWx1ZTogXCJ6YVwiIH0sXHJcbiAgeyBuYW1lOiBcIkNoaW5lc2VcIiwgdmFsdWU6IFwiemhcIiB9LFxyXG4gIHsgbmFtZTogXCJadWx1XCIsIHZhbHVlOiBcInp1XCIgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBTVEFUVVMgPSBbXHJcbiAgeyBuYW1lOiBcIkluIFByb2dyZXNzXCIsIHZhbHVlOiBcImluIHByb2dyZXNzXCIgfSxcclxuICB7IG5hbWU6IFwiSW4gSGlhdHVzXCIsIHZhbHVlOiBcImluIGhpYXR1c1wiIH0sXHJcbiAgeyBuYW1lOiBcIkNvbXBsZXRlZFwiLCB2YWx1ZTogXCJjb21wbGV0ZWRcIiB9LFxyXG5dO1xyXG5cclxuLy8gVFlQRVNcclxuZXhwb3J0IGNvbnN0IEdFVF9QUk9GSUxFID0gXCJHRVRfUFJPRklMRVwiO1xyXG5leHBvcnQgY29uc3QgTE9HSU4gPSBcIkxPR0lOXCI7XHJcbmV4cG9ydCBjb25zdCBSRUdJU1RFUiA9IFwiUkVHSVNURVJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfU1RPUlkgPSBcIkdFVF9TVE9SWVwiO1xyXG5leHBvcnQgY29uc3QgR0VUX1VTRVJfU1RPUklFUyA9IFwiR0VUX1VTRVJfU1RPUklFU1wiO1xyXG5leHBvcnQgY29uc3QgR0VUX0ZBVk9SSVRFX1NUT1JJRVMgPSBcIkdFVF9GQVZPUklURV9TVE9SSUVTXCI7XHJcbmV4cG9ydCBjb25zdCBBRERfU1RPUlkgPSBcIkFERF9TVE9SWVwiO1xyXG5leHBvcnQgY29uc3QgRURJVF9TVE9SWSA9IFwiRURJVF9TVE9SWVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9DSEFQVEVSID0gXCJHRVRfQ0hBUFRFUlwiO1xyXG5leHBvcnQgY29uc3QgQUREX0NIQVBURVIgPSBcIkFERF9DSEFQVEVSXCI7XHJcbmV4cG9ydCBjb25zdCBFRElUX0NIQVBURVIgPSBcIkVESVRfQ0hBUFRFUlwiO1xyXG5leHBvcnQgY29uc3QgR0VUX0NIQVBURVJTID0gXCJHRVRfQ0hBUFRFUlNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfQ0hBUkFDVEVSID0gXCJBRERfQ0hBUkFDVEVSXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfQ0hBUkFDVEVSID0gXCJHRVRfQ0hBUkFDVEVSXCI7XHJcbmV4cG9ydCBjb25zdCBFRElUX0NIQVJBQ1RFUiA9IFwiRURJVF9DSEFSQUNURVJcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9VU0VSX0NIQVJBQ1RFUlMgPSBcIkdFVF9VU0VSX0NIQVJBQ1RFUlNcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9VU0VSX0xPQ0FUSU9OUyA9IFwiR0VUX1VTRVJfTE9DQVRJT05TXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfRkFWT1JJVEVfQ0hBUkFDVEVSUyA9IFwiR0VUX0ZBVk9SSVRFX0NIQVJBQ1RFUlNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfRkFWT1JJVEVfQVVUSE9SUyA9IFwiR0VUX0ZBVk9SSVRFX0FVVEhPUlNcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9GT0xMT1dFUlMgPSBcIkdFVF9GT0xMT1dFUlNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBESVNQQVRDSF9FUlJPUiA9IFwiRElTUEFUQ0hfRVJST1JcIjtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9hcHBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvYXV0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9maXJlc3RvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2Uvc3RvcmFnZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpcy1pbWFnZS11cmxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==