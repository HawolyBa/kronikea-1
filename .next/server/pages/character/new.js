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
  type
}) => {
  return __jsx("figure", {
    className: "card character-card",
    "data-aos": "zoom-in-up",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "img-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: character === null || character === void 0 ? void 0 : character.image,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  })), __jsx("figcaption", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, `${character === null || character === void 0 ? void 0 : character.firstname} ${character === null || character === void 0 ? void 0 : character.lastname}`), type === "favorites" && __jsx("span", {
    className: "author",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }, "Author: ", character === null || character === void 0 ? void 0 : character.authorName)));
};

/* harmony default export */ __webpack_exports__["default"] = (CharacterCard);

/***/ }),

/***/ "./components/forms/Relatives.js":
/*!***************************************!*\
  !*** ./components/forms/Relatives.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_dummy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/dummy */ "./utils/dummy.js");
/* harmony import */ var _common_CharacterCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/CharacterCard */ "./components/common/CharacterCard.js");
var _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\components\\forms\\Relatives.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Relatives = () => {
  const [relations, setRelations] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState([]);
  const [charaValue, setCharaValue] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("");
  const [relValue, setRelValue] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("");

  const addRelation = () => {
    let newRelations = [...relations];

    if (charaValue && relValue) {
      newRelations = [...newRelations, {
        character: charaValue,
        relation: relValue
      }];
    }

    setRelations(newRelations);
    setCharaValue("");
    setRelValue("");
  };

  const onChangeRelation = e => setRelValue(e.target.value);

  const onChangeChara = e => setCharaValue(e.target.value);

  return __jsx("div", {
    className: "relatives",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, __jsx("label", {
    htmlFor: "relatives",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, "Relationships"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    align: "bottom",
    gutter: [24, 24],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    flex: "auto",
    md: 11,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx("select", {
    value: charaValue,
    className: "form-input",
    onChange: onChangeChara,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, __jsx("option", {
    value: "",
    disabled: true,
    selected: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, "Select a character"), __jsx("option", {
    value: "Caroline",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, "Caroline"), __jsx("option", {
    value: "Lola",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, "Lola"), __jsx("option", {
    value: "Gogo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, "Gogo"), __jsx("option", {
    value: "Froli",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, "Froli"), __jsx("option", {
    value: "Papi",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, "Papi"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    flex: "auto",
    md: 11,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx("input", {
    value: relValue,
    onChange: onChangeRelation,
    id: "relation",
    type: "text",
    className: "form-input",
    placeholder: "Type of relationship",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    flex: "auto",
    md: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "add-btn",
    onClick: addRelation,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }, "Add"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    gutter: [16, 16],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }, relations === null || relations === void 0 ? void 0 : relations.map(rel => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 4,
    key: rel.character,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 11
    }
  }, __jsx(_common_CharacterCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
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

const UploadImage = () => {
  const [loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const [imageUrl, setImageUrl] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("");

  const handleChange = info => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }

    if (info.file.status === "done") {
      // Get this url from response in real world.
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
      lineNumber: 41,
      columnNumber: 5
    }
  }, loading ? __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["LoadingOutlined"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 18
    }
  }) : __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["PlusOutlined"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 40
    }
  }), __jsx("div", {
    style: {
      marginTop: 8
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, "Upload"));

  return __jsx("div", {
    className: "upload-image",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Upload"], {
    name: "cover",
    listType: "picture-card",
    className: "cover-uploader",
    showUploadList: false,
    beforeUpload: beforeUpload,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, imageUrl ? __jsx("img", {
    src: imageUrl,
    alt: "cover",
    style: {
      width: "100%"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }) : uploadButton), __jsx("input", {
    type: "text",
    className: "form-input",
    placeholder: "image copyright",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (UploadImage);

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
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_forms_Relatives__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/forms/Relatives */ "./components/forms/Relatives.js");
/* harmony import */ var _components_forms_UploadImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/forms/UploadImage */ "./components/forms/UploadImage.js");
var _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\pages\\character\\new.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const newCharacter = () => {
  return __jsx("div", {
    className: "new-character custom-form",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "inner",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx("h2", {
    className: "side-heading",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, "Add a new character"), __jsx("form", {
    className: "form-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    align: "bottom",
    gutter: [24, 24],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    flex: "auto",
    md: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "input-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 15
    }
  }, __jsx("label", {
    htmlFor: "cover",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, "Upload a cover"), __jsx(_components_forms_UploadImage__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    flex: "auto",
    md: 8,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "input-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 15
    }
  }, __jsx("label", {
    htmlFor: "firstname",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }, "Firstname"), __jsx("input", {
    type: "text",
    className: "form-input",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    flex: "auto",
    md: 8,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "input-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 15
    }
  }, __jsx("label", {
    htmlFor: "lastname",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }, "Lastname"), __jsx("input", {
    id: "lastname",
    type: "text",
    className: "form-input",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    flex: "auto",
    md: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "input-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 15
    }
  }, __jsx("label", {
    htmlFor: "age",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }, "Age"), __jsx("input", {
    id: "age",
    type: "number",
    className: "form-input",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  })))), __jsx("div", {
    className: "input-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, __jsx("label", {
    htmlFor: "description",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, "Description"), __jsx("textarea", {
    name: "description",
    id: "description",
    className: "form-input",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  })), __jsx(_components_forms_Relatives__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }), __jsx("button", {
    type: "submit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, "Create"))));
};

/* harmony default export */ __webpack_exports__["default"] = (newCharacter);

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
  poster: "https://images-na.ssl-images-amazon.com/images/I/81h2gWPTYJL.jpg"
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

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb21tb24vQ2hhcmFjdGVyQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvcm1zL1JlbGF0aXZlcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvcm1zL1VwbG9hZEltYWdlLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2NoYXJhY3Rlci9uZXcuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZHVtbXkuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFudC1kZXNpZ24vaWNvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJDaGFyYWN0ZXJDYXJkIiwiY2hhcmFjdGVyIiwidHlwZSIsImltYWdlIiwiZmlyc3RuYW1lIiwibGFzdG5hbWUiLCJhdXRob3JOYW1lIiwiUmVsYXRpdmVzIiwicmVsYXRpb25zIiwic2V0UmVsYXRpb25zIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImNoYXJhVmFsdWUiLCJzZXRDaGFyYVZhbHVlIiwicmVsVmFsdWUiLCJzZXRSZWxWYWx1ZSIsImFkZFJlbGF0aW9uIiwibmV3UmVsYXRpb25zIiwicmVsYXRpb24iLCJvbkNoYW5nZVJlbGF0aW9uIiwiZSIsInRhcmdldCIsInZhbHVlIiwib25DaGFuZ2VDaGFyYSIsIm1hcCIsInJlbCIsImdldEJhc2U2NCIsImltZyIsImNhbGxiYWNrIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZXN1bHQiLCJyZWFkQXNEYXRhVVJMIiwiYmVmb3JlVXBsb2FkIiwiZmlsZSIsImlzSnBnT3JQbmciLCJtZXNzYWdlIiwiZXJyb3IiLCJpc0x0Mk0iLCJzaXplIiwiVXBsb2FkSW1hZ2UiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImltYWdlVXJsIiwic2V0SW1hZ2VVcmwiLCJoYW5kbGVDaGFuZ2UiLCJpbmZvIiwic3RhdHVzIiwib3JpZ2luRmlsZU9iaiIsInVwbG9hZEJ1dHRvbiIsIm1hcmdpblRvcCIsIndpZHRoIiwibmV3Q2hhcmFjdGVyIiwiZHVtbXkiLCJwZXJzb24iLCJjb3ZlciIsIm5hbWUiLCJwb3N0ZXIiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTs7QUFFQSxNQUFNQSxhQUFhLEdBQUcsQ0FBQztBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBRCxLQUF5QjtBQUM3QyxTQUNFO0FBQVEsYUFBUyxFQUFDLHFCQUFsQjtBQUF3QyxnQkFBUyxZQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFB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O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsa0MiLCJmaWxlIjoicGFnZXMvY2hhcmFjdGVyL25ldy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvY2hhcmFjdGVyL25ldy5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IENoYXJhY3RlckNhcmQgPSAoeyBjaGFyYWN0ZXIsIHR5cGUgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZmlndXJlIGNsYXNzTmFtZT1cImNhcmQgY2hhcmFjdGVyLWNhcmRcIiBkYXRhLWFvcz1cInpvb20taW4tdXBcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGltZyBzcmM9e2NoYXJhY3Rlcj8uaW1hZ2V9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZmlnY2FwdGlvbj5cclxuICAgICAgICA8aDM+e2Ake2NoYXJhY3Rlcj8uZmlyc3RuYW1lfSAke2NoYXJhY3Rlcj8ubGFzdG5hbWV9YH08L2gzPlxyXG4gICAgICAgIHt0eXBlID09PSBcImZhdm9yaXRlc1wiICYmIChcclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImF1dGhvclwiPkF1dGhvcjoge2NoYXJhY3Rlcj8uYXV0aG9yTmFtZX08L3NwYW4+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9maWdjYXB0aW9uPlxyXG4gICAgPC9maWd1cmU+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXJhY3RlckNhcmQ7XHJcbiIsImltcG9ydCB7IFJvdywgQ29sIH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmltcG9ydCB7IGR1bW15IH0gZnJvbSBcIi4uLy4uL3V0aWxzL2R1bW15XCI7XHJcbmltcG9ydCBDaGFyYWN0ZXJDYXJkLCB7IENoYXJhY3RlckdyaWQgfSBmcm9tIFwiLi4vY29tbW9uL0NoYXJhY3RlckNhcmRcIjtcclxuXHJcbmNvbnN0IFJlbGF0aXZlcyA9ICgpID0+IHtcclxuICBjb25zdCBbcmVsYXRpb25zLCBzZXRSZWxhdGlvbnNdID0gUmVhY3QudXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtjaGFyYVZhbHVlLCBzZXRDaGFyYVZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtyZWxWYWx1ZSwgc2V0UmVsVmFsdWVdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IGFkZFJlbGF0aW9uID0gKCkgPT4ge1xyXG4gICAgbGV0IG5ld1JlbGF0aW9ucyA9IFsuLi5yZWxhdGlvbnNdO1xyXG4gICAgaWYgKGNoYXJhVmFsdWUgJiYgcmVsVmFsdWUpIHtcclxuICAgICAgbmV3UmVsYXRpb25zID0gW1xyXG4gICAgICAgIC4uLm5ld1JlbGF0aW9ucyxcclxuICAgICAgICB7IGNoYXJhY3RlcjogY2hhcmFWYWx1ZSwgcmVsYXRpb246IHJlbFZhbHVlIH0sXHJcbiAgICAgIF07XHJcbiAgICB9XHJcbiAgICBzZXRSZWxhdGlvbnMobmV3UmVsYXRpb25zKTtcclxuICAgIHNldENoYXJhVmFsdWUoXCJcIik7XHJcbiAgICBzZXRSZWxWYWx1ZShcIlwiKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkNoYW5nZVJlbGF0aW9uID0gKGUpID0+IHNldFJlbFZhbHVlKGUudGFyZ2V0LnZhbHVlKTtcclxuICBjb25zdCBvbkNoYW5nZUNoYXJhID0gKGUpID0+IHNldENoYXJhVmFsdWUoZS50YXJnZXQudmFsdWUpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZXNcIj5cclxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJyZWxhdGl2ZXNcIj5SZWxhdGlvbnNoaXBzPC9sYWJlbD5cclxuICAgICAgPFJvdyBhbGlnbj1cImJvdHRvbVwiIGd1dHRlcj17WzI0LCAyNF19PlxyXG4gICAgICAgIDxDb2wgZmxleD1cImF1dG9cIiBtZD17MTF9PlxyXG4gICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICB2YWx1ZT17Y2hhcmFWYWx1ZX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1pbnB1dFwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUNoYXJhfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCIgZGlzYWJsZWQgc2VsZWN0ZWQ+XHJcbiAgICAgICAgICAgICAgU2VsZWN0IGEgY2hhcmFjdGVyXHJcbiAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQ2Fyb2xpbmVcIj5DYXJvbGluZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTG9sYVwiPkxvbGE8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkdvZ29cIj5Hb2dvPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJGcm9saVwiPkZyb2xpPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJQYXBpXCI+UGFwaTwvb3B0aW9uPlxyXG4gICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPENvbCBmbGV4PVwiYXV0b1wiIG1kPXsxMX0+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdmFsdWU9e3JlbFZhbHVlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VSZWxhdGlvbn1cclxuICAgICAgICAgICAgaWQ9XCJyZWxhdGlvblwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1pbnB1dFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSBvZiByZWxhdGlvbnNoaXBcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgICA8Q29sIGZsZXg9XCJhdXRvXCIgbWQ9ezJ9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZGQtYnRuXCIgb25DbGljaz17YWRkUmVsYXRpb259PlxyXG4gICAgICAgICAgICBBZGRcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICA8L1Jvdz5cclxuICAgICAgPFJvdyBndXR0ZXI9e1sxNiwgMTZdfT5cclxuICAgICAgICB7cmVsYXRpb25zPy5tYXAoKHJlbCkgPT4gKFxyXG4gICAgICAgICAgPENvbCBtZD17NH0ga2V5PXtyZWwuY2hhcmFjdGVyfT5cclxuICAgICAgICAgICAgPENoYXJhY3RlckNhcmQgLz5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L1Jvdz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWxhdGl2ZXM7XHJcbiIsImltcG9ydCB7IFVwbG9hZCwgbWVzc2FnZSB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IExvYWRpbmdPdXRsaW5lZCwgUGx1c091dGxpbmVkIH0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XHJcblxyXG5mdW5jdGlvbiBnZXRCYXNlNjQoaW1nLCBjYWxsYmFjaykge1xyXG4gIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgcmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IGNhbGxiYWNrKHJlYWRlci5yZXN1bHQpKTtcclxuICByZWFkZXIucmVhZEFzRGF0YVVSTChpbWcpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBiZWZvcmVVcGxvYWQoZmlsZSkge1xyXG4gIGNvbnN0IGlzSnBnT3JQbmcgPSBmaWxlLnR5cGUgPT09IFwiaW1hZ2UvanBlZ1wiIHx8IGZpbGUudHlwZSA9PT0gXCJpbWFnZS9wbmdcIjtcclxuICBpZiAoIWlzSnBnT3JQbmcpIHtcclxuICAgIG1lc3NhZ2UuZXJyb3IoXCJZb3UgY2FuIG9ubHkgdXBsb2FkIEpQRy9QTkcgZmlsZSFcIik7XHJcbiAgfVxyXG4gIGNvbnN0IGlzTHQyTSA9IGZpbGUuc2l6ZSAvIDEwMjQgLyAxMDI0IDwgMjtcclxuICBpZiAoIWlzTHQyTSkge1xyXG4gICAgbWVzc2FnZS5lcnJvcihcIkltYWdlIG11c3Qgc21hbGxlciB0aGFuIDJNQiFcIik7XHJcbiAgfVxyXG4gIHJldHVybiBpc0pwZ09yUG5nICYmIGlzTHQyTTtcclxufVxyXG5cclxuY29uc3QgVXBsb2FkSW1hZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpbWFnZVVybCwgc2V0SW1hZ2VVcmxdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChpbmZvKSA9PiB7XHJcbiAgICBpZiAoaW5mby5maWxlLnN0YXR1cyA9PT0gXCJ1cGxvYWRpbmdcIikge1xyXG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoaW5mby5maWxlLnN0YXR1cyA9PT0gXCJkb25lXCIpIHtcclxuICAgICAgLy8gR2V0IHRoaXMgdXJsIGZyb20gcmVzcG9uc2UgaW4gcmVhbCB3b3JsZC5cclxuICAgICAgZ2V0QmFzZTY0KGluZm8uZmlsZS5vcmlnaW5GaWxlT2JqLCAoaW1hZ2VVcmwpID0+IHtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICBzZXRJbWFnZVVybChpbWFnZVVybCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHVwbG9hZEJ1dHRvbiA9IChcclxuICAgIDxkaXY+XHJcbiAgICAgIHtsb2FkaW5nID8gPExvYWRpbmdPdXRsaW5lZCAvPiA6IDxQbHVzT3V0bGluZWQgLz59XHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiA4IH19PlVwbG9hZDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidXBsb2FkLWltYWdlXCI+XHJcbiAgICAgIDxVcGxvYWRcclxuICAgICAgICBuYW1lPVwiY292ZXJcIlxyXG4gICAgICAgIGxpc3RUeXBlPVwicGljdHVyZS1jYXJkXCJcclxuICAgICAgICBjbGFzc05hbWU9XCJjb3Zlci11cGxvYWRlclwiXHJcbiAgICAgICAgc2hvd1VwbG9hZExpc3Q9e2ZhbHNlfVxyXG4gICAgICAgIGJlZm9yZVVwbG9hZD17YmVmb3JlVXBsb2FkfVxyXG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgID5cclxuICAgICAgICB7aW1hZ2VVcmwgPyAoXHJcbiAgICAgICAgICA8aW1nIHNyYz17aW1hZ2VVcmx9IGFsdD1cImNvdmVyXCIgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19IC8+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIHVwbG9hZEJ1dHRvblxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvVXBsb2FkPlxyXG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWlucHV0XCIgcGxhY2Vob2xkZXI9XCJpbWFnZSBjb3B5cmlnaHRcIiAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVwbG9hZEltYWdlO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFJvdywgQ29sLCBEaXZpZGVyIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IFJlbGF0aXZlcyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9mb3Jtcy9SZWxhdGl2ZXNcIjtcclxuaW1wb3J0IFVwbG9hZEltYWdlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2Zvcm1zL1VwbG9hZEltYWdlXCI7XHJcblxyXG5jb25zdCBuZXdDaGFyYWN0ZXIgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3LWNoYXJhY3RlciBjdXN0b20tZm9ybVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyXCI+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInNpZGUtaGVhZGluZ1wiPkFkZCBhIG5ldyBjaGFyYWN0ZXI8L2gyPlxyXG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgIDxSb3cgYWxpZ249XCJib3R0b21cIiBndXR0ZXI9e1syNCwgMjRdfT5cclxuICAgICAgICAgICAgPENvbCBmbGV4PVwiYXV0b1wiIG1kPXs0fT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNvdmVyXCI+VXBsb2FkIGEgY292ZXI8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPFVwbG9hZEltYWdlIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIGZsZXg9XCJhdXRvXCIgbWQ9ezh9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZmlyc3RuYW1lXCI+Rmlyc3RuYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0taW5wdXRcIiAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPENvbCBmbGV4PVwiYXV0b1wiIG1kPXs4fT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImxhc3RuYW1lXCI+TGFzdG5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGlkPVwibGFzdG5hbWVcIiB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0taW5wdXRcIiAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPENvbCBmbGV4PVwiYXV0b1wiIG1kPXs0fT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImFnZVwiPkFnZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJhZ2VcIiB0eXBlPVwibnVtYmVyXCIgY2xhc3NOYW1lPVwiZm9ybS1pbnB1dFwiIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZGVzY3JpcHRpb25cIj5EZXNjcmlwdGlvbjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1pbnB1dFwiXHJcbiAgICAgICAgICAgID48L3RleHRhcmVhPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8UmVsYXRpdmVzIC8+XHJcbiAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+Q3JlYXRlPC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXdDaGFyYWN0ZXI7XHJcbiIsImV4cG9ydCBjb25zdCBkdW1teSA9IHtcclxuICBwZXJzb246XHJcbiAgICBcImh0dHBzOi8vaS5waW5pbWcuY29tLzU2NHgvNzAvNTAvYTMvNzA1MGEzMGNjNjFlOGE3ZjNmODY3N2ViZjk1MDVkYjcuanBnXCIsXHJcbiAgY292ZXI6XHJcbiAgICBcImh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzM4ODExMDQvcGV4ZWxzLXBob3RvLTM4ODExMDQuanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJmRwcj0yJmg9NjUwJnc9OTQwXCIsXHJcbiAgbmFtZTogXCJBaXNod2FyeWEgUmFpXCIsXHJcbiAgcG9zdGVyOiBcImh0dHBzOi8vaW1hZ2VzLW5hLnNzbC1pbWFnZXMtYW1hem9uLmNvbS9pbWFnZXMvSS84MWgyZ1dQVFlKTC5qcGdcIixcclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9