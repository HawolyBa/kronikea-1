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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/story/new.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/common/Input.js":
/*!************************************!*\
  !*** ./components/common/Input.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/helpers */ "./utils/helpers.js");
var _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\components\\common\\Input.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const InputGroup = ({
  lg,
  xs,
  sm,
  md,
  type,
  name,
  placeholder,
  value,
  onChangeFunc,
  storyInfo,
  required,
  title
}) => {
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: lg,
    xs: xs,
    sm: sm,
    md: md,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    label: title ? title : Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_2__["capitalizeFirstLetter"])(name),
    required: required,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "input-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx("input", {
    className: "form-input",
    type: type,
    id: name,
    placeholder: placeholder,
    value: value,
    onChange: e => onChangeFunc(_objectSpread(_objectSpread({}, storyInfo), {}, {
      [name]: e.target.value
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (InputGroup);

/***/ }),

/***/ "./components/common/Select.js":
/*!*************************************!*\
  !*** ./components/common/Select.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/helpers */ "./utils/helpers.js");
var _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\components\\common\\Select.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const {
  Option
} = antd__WEBPACK_IMPORTED_MODULE_1__["Select"];

const SelectGroup = ({
  xs,
  lg,
  sm,
  md,
  name,
  options,
  info,
  value,
  onChangeFunc,
  storyInfo,
  type
}) => {
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: xs,
    sm: sm,
    md: md,
    lg: lg,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    required: true,
    label: info ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_2__["capitalizeFirstLetter"])(name), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
      title: info,
      trigger: "click",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 15
      }
    }, __jsx("ion-icon", {
      name: "information-circle",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }
    }))) : Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_2__["capitalizeFirstLetter"])(name),
    colon: false,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "input-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, __jsx("label", {
    htmlFor: "genre",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }), type === "multiple" ? __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    mode: "multiple",
    allowClear: true,
    style: {
      width: "100%"
    },
    placeholder: "Please select",
    value: value,
    onChange: val => onChangeFunc(_objectSpread(_objectSpread({}, storyInfo), {}, {
      [name]: val
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, options === null || options === void 0 ? void 0 : options.sort((a, b) => {
    const keyA = a.name,
          keyB = b.name; // Compare the 2 dates

    if (keyA < keyB) return -1;
    if (keyA > keyB) return 1;
    return 0;
  }).map(option => __jsx(Option, {
    style: {
      textTransform: "capitalize"
    },
    key: option.value,
    value: option.value,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 19
    }
  }, option.name))) : __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    allowClear: true,
    style: {
      width: "100%"
    },
    placeholder: "Please select",
    value: value,
    onChange: val => onChangeFunc(_objectSpread(_objectSpread({}, storyInfo), {}, {
      [name]: val
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }, options === null || options === void 0 ? void 0 : options.sort((a, b) => {
    const keyA = a.name,
          keyB = b.name; // Compare the 2 dates

    if (keyA < keyB) return -1;
    if (keyA > keyB) return 1;
    return 0;
  }).map(option => __jsx(Option, {
    style: {
      textTransform: "capitalize"
    },
    key: option.value,
    value: option.value,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 19
    }
  }, option.name))))));
};

/* harmony default export */ __webpack_exports__["default"] = (SelectGroup);

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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const Tags = ({
  tags,
  setTags,
  storyInfo
}) => {
  const inputButton = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef();
  const editInputButton = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef();
  const [inputVisible, setInputVisible] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const [inputValue, setInputValue] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("");
  const [editInputIndex, setEditInputIndex] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(-1);
  const [editInputValue, setEditInputValue] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("");

  const handleClose = removedTag => setTags(_objectSpread(_objectSpread({}, storyInfo), {}, {
    tags: tags.filter(tag => tag !== removedTag)
  }));

  const showInput = () => {
    setInputVisible(true); //console.log();
    //editInputButton.current.focus();
    //inputButton.current.focus();
  };

  const handleInputChange = e => setInputValue(e.target.value);

  const handleInputConfirm = () => {
    let newTags = tags;

    if (inputValue && tags.indexOf(inputValue) === -1) {
      newTags = [...newTags, inputValue];
    }

    setTags(_objectSpread(_objectSpread({}, storyInfo), {}, {
      tags: newTags
    }));
    setInputValue("");
    setInputVisible(false);
  };

  const handleEditInputChange = e => setEditInputValue(e.target.value);

  const handleEditInputConfirm = () => {
    const newTags = [...tags];
    newTags[editInputIndex] = editInputValue;
    setTags(_objectSpread(_objectSpread({}, storyInfo), {}, {
      tags: newTags
    }));
    setEditInputIndex(-1);
    setEditInputValue("");
  };

  const keyPress = e => {
    console.log(e.key);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, tags === null || tags === void 0 ? void 0 : tags.map((tag, i) => {
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
          lineNumber: 54,
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
        lineNumber: 67,
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
        lineNumber: 73,
        columnNumber: 13
      }
    }, isLongTag ? `${tag.slice(0, 20)}...` : tag));

    return isLongTag ? __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
      title: tag,
      key: tag,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
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
    className: "form-input",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  }), !inputVisible && __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Tag"], {
    className: "site-tag-plus",
    onClick: showInput,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 9
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["PlusOutlined"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




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
  storyInfo,
  onChangeFunc
}) => {
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
        onChangeFunc(_objectSpread(_objectSpread({}, storyInfo), {}, {
          image: imageUrl
        }));
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

  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "upload-image",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Upload"], {
    name: "image",
    listType: "picture-card",
    className: "cover-uploader",
    showUploadList: false,
    beforeUpload: beforeUpload,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, imageUrl ? __jsx("img", {
    src: imageUrl,
    alt: "image",
    style: {
      width: "100%"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }) : uploadButton), __jsx("div", {
    className: "input-froup",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, __jsx("label", {
    htmlFor: "imageCopyright",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 11
    }
  }, "Image copyright"), __jsx("input", {
    required: true,
    type: "text",
    id: "imageCopyright",
    className: "form-input",
    onChange: e => onChangeFunc(_objectSpread(_objectSpread({}, storyInfo), {}, {
      imageCopyright: e.target.value
    })),
    value: storyInfo.imageCopyright,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 11
    }
  }))));
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
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase */ "firebase");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_fbConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/fbConfig */ "./redux/fbConfig.js");
var _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\hooks\\userHooks.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



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
        createdAt: firebase__WEBPACK_IMPORTED_MODULE_1___default.a.firestore.FieldValue.serverTimestamp(),
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
        setIsLoading(false);
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

/***/ "./pages/story/new.js":
/*!****************************!*\
  !*** ./pages/story/new.js ***!
  \****************************/
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
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/constants */ "./utils/constants.js");
/* harmony import */ var _hooks_userHooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/userHooks */ "./hooks/userHooks.js");
/* harmony import */ var _redux_actions_charactersActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/actions/charactersActions */ "./redux/actions/charactersActions.js");
/* harmony import */ var _components_common_Input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/common/Input */ "./components/common/Input.js");
/* harmony import */ var _components_common_Select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/common/Select */ "./components/common/Select.js");
/* harmony import */ var _components_forms_Tags__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/forms/Tags */ "./components/forms/Tags.js");
/* harmony import */ var _components_forms_UploadImage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/forms/UploadImage */ "./components/forms/UploadImage.js");
var _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\pages\\story\\new.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












const newStory = props => {
  var _props$characters;

  const [storyInfo, setStoryInfo] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({
    title: "",
    categories: [],
    language: "",
    status: "",
    copyright: "",
    summary: "",
    mature: false,
    public: true,
    tags: [],
    mainCharacters: [],
    secondaryCharacters: [],
    image: "",
    imageCopyright: ""
  });
  const [currentChar, setCurrentChar] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("");
  const auth = Object(_hooks_userHooks__WEBPACK_IMPORTED_MODULE_4__["useAuth"])();
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    if (auth.user) {
      props.getUserCharacters();
    }
  }, [auth]);

  const addCharacter = () => {
    if (currentChar && storyInfo.mainCharacters.indexOf(currentChar) === -1 && storyInfo.mainCharacters.length < 5) {
      setStoryInfo(_objectSpread(_objectSpread({}, storyInfo), {}, {
        mainCharacters: [...storyInfo.mainCharacters, currentChar]
      }));
    }
  };

  const removeCharacter = id => {
    setStoryInfo(_objectSpread(_objectSpread({}, storyInfo), {}, {
      mainCharacters: storyInfo.mainCharacters.filter(c => c !== id)
    }));
  };

  console.log(currentChar);
  return __jsx("div", {
    className: "new-story custom-form",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "inner",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }, __jsx("h2", {
    className: "side-heading",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }, "Add a new story"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    layout: "vertical",
    className: "form-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    gutter: [24, 24],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  }, __jsx(_components_common_Input__WEBPACK_IMPORTED_MODULE_6__["default"], {
    required: true,
    sm: 24,
    xs: 24,
    md: 18,
    lg: 18,
    type: "text",
    name: "title",
    placeholder: "Enter a title",
    value: storyInfo.title,
    onChangeFunc: setStoryInfo,
    storyInfo: storyInfo,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }), __jsx(_components_common_Select__WEBPACK_IMPORTED_MODULE_7__["default"], {
    sm: 24,
    xs: 24,
    lg: 6,
    md: 6,
    name: "categories",
    options: _utils_constants__WEBPACK_IMPORTED_MODULE_3__["CATEGORIES"],
    value: storyInfo.categories,
    onChangeFunc: setStoryInfo,
    storyInfo: storyInfo,
    type: "multiple",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    gutter: [24, 24],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 11
    }
  }, __jsx(_components_common_Select__WEBPACK_IMPORTED_MODULE_7__["default"], {
    md: 8,
    sm: 24,
    xs: 24,
    lg: 8,
    name: "language",
    options: _utils_constants__WEBPACK_IMPORTED_MODULE_3__["LANGUAGES"],
    value: storyInfo.language,
    onChangeFunc: setStoryInfo,
    storyInfo: storyInfo,
    type: "single",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 13
    }
  }), __jsx(_components_common_Select__WEBPACK_IMPORTED_MODULE_7__["default"], {
    md: 8,
    sm: 24,
    xs: 24,
    lg: 8,
    name: "status",
    options: _utils_constants__WEBPACK_IMPORTED_MODULE_3__["STATUS"],
    info: "info about status",
    value: storyInfo.status,
    onChangeFunc: setStoryInfo,
    storyInfo: storyInfo,
    type: "single",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 13
    }
  }), __jsx(_components_common_Select__WEBPACK_IMPORTED_MODULE_7__["default"], {
    md: 8,
    sm: 24,
    xs: 24,
    lg: 8,
    name: "copyright",
    options: _utils_constants__WEBPACK_IMPORTED_MODULE_3__["COPYRIGHTS"],
    info: "info about copyright",
    value: storyInfo.copyright,
    onChangeFunc: setStoryInfo,
    storyInfo: storyInfo,
    type: "single",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "input-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 11
    }
  }, __jsx("label", {
    htmlFor: "summary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 13
    }
  }, "Summary"), __jsx("textarea", {
    rows: "5",
    name: "summary",
    id: "summary",
    className: "form-input",
    placeholder: "Summarize your story here",
    value: storyInfo.summary,
    onChange: e => setStoryInfo(_objectSpread(_objectSpread({}, storyInfo), {}, {
      summary: e.target.value
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 13
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    justify: "space-between",
    gutter: [24, 24],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: 4,
    md: 8,
    sm: 12,
    xs: 24,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "input-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 15
    }
  }, __jsx("fieldset", {
    id: "mature",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 17
    }
  }, __jsx("label", {
    className: "title-label",
    htmlFor: "public",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 19
    }
  }, "Mature content"), __jsx("div", {
    className: "radio",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 19
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Space"], {
    size: 32,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "radio__1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 23
    }
  }, __jsx("input", {
    id: "radio-1",
    type: "radio",
    name: "mature",
    value: true,
    onChange: () => setStoryInfo(_objectSpread(_objectSpread({}, storyInfo), {}, {
      mature: true
    })),
    checked: storyInfo.mature ? true : false,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 25
    }
  }), __jsx("label", {
    htmlFor: "radio-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 25
    }
  }), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 25
    }
  }, "Yes")), __jsx("div", {
    className: "radio__2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 23
    }
  }, __jsx("input", {
    id: "radio-2",
    type: "radio",
    name: "mature",
    value: false,
    onChange: () => setStoryInfo(_objectSpread(_objectSpread({}, storyInfo), {}, {
      mature: false
    })),
    checked: storyInfo.mature ? false : true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 25
    }
  }), __jsx("label", {
    htmlFor: "radio-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 25
    }
  }), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 25
    }
  }, "No"))))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: 4,
    md: 8,
    sm: 12,
    xs: 24,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "input-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 15
    }
  }, __jsx("fieldset", {
    id: "public",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 17
    }
  }, __jsx("label", {
    className: "title-label",
    htmlFor: "public",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 19
    }
  }, "Visibilty"), __jsx("div", {
    className: "radio",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 19
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Space"], {
    size: 32,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "radio__1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 23
    }
  }, __jsx("input", {
    id: "radio-3",
    type: "radio",
    name: "public",
    value: true,
    onChange: () => setStoryInfo(_objectSpread(_objectSpread({}, storyInfo), {}, {
      public: true
    })),
    checked: storyInfo.public ? true : false,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 25
    }
  }), __jsx("label", {
    htmlFor: "radio-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 25
    }
  }), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 25
    }
  }, "Public")), __jsx("div", {
    className: "radio__2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 23
    }
  }, __jsx("input", {
    id: "radio-4",
    type: "radio",
    name: "public",
    value: false,
    onChange: () => setStoryInfo(_objectSpread(_objectSpread({}, storyInfo), {}, {
      public: false
    })),
    checked: storyInfo.public ? false : true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 25
    }
  }), __jsx("label", {
    htmlFor: "radio-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 25
    }
  }), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 25
    }
  }, "Private"))))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: 8,
    md: 12,
    sm: 24,
    xs: 24,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 13
    }
  }, __jsx("label", {
    className: "title-label",
    htmlFor: "tags",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 15
    }
  }, "Tags"), __jsx(_components_forms_Tags__WEBPACK_IMPORTED_MODULE_8__["default"], {
    storyInfo: storyInfo,
    tags: storyInfo.tags,
    setTags: setStoryInfo,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 15
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 11
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    gutter: [16, 16],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: 12,
    md: 12,
    sm: 24,
    xs: 24,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    label: "Main Characters",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "input-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 19
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 22,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 21
    }
  }, __jsx("select", {
    disabled: storyInfo.mainCharacters.length >= 5 ? true : false,
    onChange: e => setCurrentChar(e.target.value),
    className: "form-input select-add-input",
    name: "mainCharacters",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 23
    }
  }, (_props$characters = props.characters) === null || _props$characters === void 0 ? void 0 : _props$characters.filter(c => !storyInfo.mainCharacters.includes(c.id)).map(char => __jsx("option", {
    key: char.id,
    value: char.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 29
    }
  }, `${char.firstname} ${char.lastname}`)))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "form-input select-add-input-iconbox",
    onClick: addCharacter,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 23
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 25
    }
  }, "+"))), __jsx("small", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 21
    }
  }, "You can add up to 5 main characters"))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: 12,
    md: 12,
    sm: 24,
    xs: 24,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304,
      columnNumber: 13
    }
  }, props.characters.filter(c => storyInfo.mainCharacters.indexOf(c.id) !== -1).map(char => __jsx("p", {
    key: char.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 19
    }
  }, `${char.firstname} ${char.lastname}`, " ", __jsx("span", {
    onClick: () => removeCharacter(char.id),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 21
    }
  }, "x"))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 11
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    align: "bottom",
    gutter: [24, 24],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 12,
    sm: 24,
    xs: 24,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "input-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318,
      columnNumber: 15
    }
  }, __jsx("label", {
    htmlFor: "image",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319,
      columnNumber: 17
    }
  }, "Upload a cover"), __jsx(_components_forms_UploadImage__WEBPACK_IMPORTED_MODULE_9__["default"], {
    storyInfo: storyInfo,
    onChangeFunc: setStoryInfo,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 17
    }
  }))), __jsx(_components_common_Input__WEBPACK_IMPORTED_MODULE_6__["default"], {
    required: false,
    sm: 24,
    xs: 24,
    md: 12,
    lg: 12,
    id: "image",
    type: "text",
    name: "image",
    title: "Or submit a link to an image",
    placeholder: "",
    value: storyInfo.image,
    onChangeFunc: setStoryInfo,
    storyInfo: storyInfo,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 13
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343,
      columnNumber: 11
    }
  }), __jsx("button", {
    type: "submit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
      columnNumber: 11
    }
  }, "Create"))));
};

const mapStateToProps = state => ({
  characters: state.characters.userCharacters
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, {
  getUserCharacters: _redux_actions_charactersActions__WEBPACK_IMPORTED_MODULE_5__["getUserCharacters"]
})(newStory));

/***/ }),

/***/ "./redux/actions/charactersActions.js":
/*!********************************************!*\
  !*** ./redux/actions/charactersActions.js ***!
  \********************************************/
/*! exports provided: getUserCharacters, getFavoriteCharacters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserCharacters", function() { return getUserCharacters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFavoriteCharacters", function() { return getFavoriteCharacters; });
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/constants */ "./utils/constants.js");
/* harmony import */ var _fbConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fbConfig */ "./redux/fbConfig.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const getUserCharacters = () => dispatch => {
  _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("characters").where("authorId", "==", _fbConfig__WEBPACK_IMPORTED_MODULE_1__["auth"].currentUser.uid).get().then(docs => {
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
  _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("charactersLikes").where("senderId", "==", _fbConfig__WEBPACK_IMPORTED_MODULE_1__["auth"].currentUser.uid).get().then(docs => {
    let favArr = [];
    docs.forEach(doc => {
      favArr = [...favArr, doc.data().characterId];
    });
    return favArr;
  }).then(users => {
    const result = users.map(user => _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("characters").doc(user).get());
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
/*! exports provided: db, auth, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "db", function() { return db; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return auth; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ "firebase/auth");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ "firebase/firestore");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_2__);



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

/* harmony default export */ __webpack_exports__["default"] = (config);

/***/ }),

/***/ "./utils/constants.js":
/*!****************************!*\
  !*** ./utils/constants.js ***!
  \****************************/
/*! exports provided: CATEGORIES, COPYRIGHTS, LANGUAGES, STATUS, GET_PROFILE, LOGIN, REGISTER, GET_STORY, GET_CHAPTERS, GET_USER_STORIES, GET_FAVORITE_STORIES, GET_USER_CHARACTERS, GET_FAVORITE_CHARACTERS, GET_FAVORITE_AUTHORS, GET_FOLLOWERS */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_CHAPTERS", function() { return GET_CHAPTERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_USER_STORIES", function() { return GET_USER_STORIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_FAVORITE_STORIES", function() { return GET_FAVORITE_STORIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_USER_CHARACTERS", function() { return GET_USER_CHARACTERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_FAVORITE_CHARACTERS", function() { return GET_FAVORITE_CHARACTERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_FAVORITE_AUTHORS", function() { return GET_FAVORITE_AUTHORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_FOLLOWERS", function() { return GET_FOLLOWERS; });
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
const GET_CHAPTERS = "GET_CHAPTERS";
const GET_USER_STORIES = "GET_USER_STORIES";
const GET_FAVORITE_STORIES = "GET_FAVORITE_STORIES";
const GET_USER_CHARACTERS = "GET_USER_CHARACTERS";
const GET_FAVORITE_CHARACTERS = "GET_FAVORITE_CHARACTERS";
const GET_FAVORITE_AUTHORS = "GET_FAVORITE_AUTHORS";
const GET_FOLLOWERS = "GET_FOLLOWERS";

/***/ }),

/***/ "./utils/helpers.js":
/*!**************************!*\
  !*** ./utils/helpers.js ***!
  \**************************/
/*! exports provided: capitalizeFirstLetter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capitalizeFirstLetter", function() { return capitalizeFirstLetter; });
const capitalizeFirstLetter = string => string.charAt(0).toUpperCase() + string.slice(1);

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

/***/ "firebase":
/*!***************************!*\
  !*** external "firebase" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb21tb24vSW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb21tb24vU2VsZWN0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZm9ybXMvVGFncy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvcm1zL1VwbG9hZEltYWdlLmpzIiwid2VicGFjazovLy8uL2hvb2tzL3VzZXJIb29rcy5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9zdG9yeS9uZXcuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWN0aW9ucy9jaGFyYWN0ZXJzQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9mYkNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW50LWRlc2lnbi9pY29uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL2FwcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL2F1dGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9maXJlc3RvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiXSwibmFtZXMiOlsiSW5wdXRHcm91cCIsImxnIiwieHMiLCJzbSIsIm1kIiwidHlwZSIsIm5hbWUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2VGdW5jIiwic3RvcnlJbmZvIiwicmVxdWlyZWQiLCJ0aXRsZSIsImNhcGl0YWxpemVGaXJzdExldHRlciIsImUiLCJ0YXJnZXQiLCJPcHRpb24iLCJTZWxlY3QiLCJTZWxlY3RHcm91cCIsIm9wdGlvbnMiLCJpbmZvIiwid2lkdGgiLCJ2YWwiLCJzb3J0IiwiYSIsImIiLCJrZXlBIiwia2V5QiIsIm1hcCIsIm9wdGlvbiIsInRleHRUcmFuc2Zvcm0iLCJUYWdzIiwidGFncyIsInNldFRhZ3MiLCJpbnB1dEJ1dHRvbiIsIlJlYWN0IiwidXNlUmVmIiwiZWRpdElucHV0QnV0dG9uIiwiaW5wdXRWaXNpYmxlIiwic2V0SW5wdXRWaXNpYmxlIiwidXNlU3RhdGUiLCJpbnB1dFZhbHVlIiwic2V0SW5wdXRWYWx1ZSIsImVkaXRJbnB1dEluZGV4Iiwic2V0RWRpdElucHV0SW5kZXgiLCJlZGl0SW5wdXRWYWx1ZSIsInNldEVkaXRJbnB1dFZhbHVlIiwiaGFuZGxlQ2xvc2UiLCJyZW1vdmVkVGFnIiwiZmlsdGVyIiwidGFnIiwic2hvd0lucHV0IiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJoYW5kbGVJbnB1dENvbmZpcm0iLCJuZXdUYWdzIiwiaW5kZXhPZiIsImhhbmRsZUVkaXRJbnB1dENoYW5nZSIsImhhbmRsZUVkaXRJbnB1dENvbmZpcm0iLCJrZXlQcmVzcyIsImNvbnNvbGUiLCJsb2ciLCJrZXkiLCJpIiwiaXNMb25nVGFnIiwibGVuZ3RoIiwiVGFnRWxlbSIsImZvY3VzIiwicHJldmVudERlZmF1bHQiLCJzbGljZSIsImdldEJhc2U2NCIsImltZyIsImNhbGxiYWNrIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZXN1bHQiLCJyZWFkQXNEYXRhVVJMIiwiYmVmb3JlVXBsb2FkIiwiZmlsZSIsImlzSnBnT3JQbmciLCJtZXNzYWdlIiwiZXJyb3IiLCJpc0x0Mk0iLCJzaXplIiwiVXBsb2FkSW1hZ2UiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImltYWdlVXJsIiwic2V0SW1hZ2VVcmwiLCJoYW5kbGVDaGFuZ2UiLCJzdGF0dXMiLCJvcmlnaW5GaWxlT2JqIiwiaW1hZ2UiLCJ1cGxvYWRCdXR0b24iLCJtYXJnaW5Ub3AiLCJpbWFnZUNvcHlyaWdodCIsImF1dGhDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIlByb3ZpZGVBdXRoIiwiY2hpbGRyZW4iLCJhdXRoIiwidXNlUHJvdmlkZUF1dGgiLCJ1c2VBdXRoIiwidXNlQ29udGV4dCIsInVzZXIiLCJzZXRVc2VyIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwic2lnbmluIiwiZW1haWwiLCJwYXNzd29yZCIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwidGhlbiIsInJlc3BvbnNlIiwic2lnbnVwIiwidXNlcm5hbWUiLCJjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJkYiIsImNvbGxlY3Rpb24iLCJhZGQiLCJiYWRnZXMiLCJiaW9ncmFwaHkiLCJjcmVhdGVkQXQiLCJmaXJlYmFzZSIsImZpcmVzdG9yZSIsIkZpZWxkVmFsdWUiLCJzZXJ2ZXJUaW1lc3RhbXAiLCJzdXNwZW5kZWQiLCJmYWNlYm9vayIsImluc3RhZ3JhbSIsInR3aXR0ZXIiLCJkZXZpYW50YXJ0IiwibGlrZXNDb3VudCIsInNpZ25vdXQiLCJzaWduT3V0Iiwic2VuZFBhc3N3b3JkUmVzZXRFbWFpbCIsImNvbmZpcm1QYXNzd29yZFJlc2V0IiwiY29kZSIsInVzZUVmZmVjdCIsInVuc3Vic2NyaWJlIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwibmV3U3RvcnkiLCJwcm9wcyIsInNldFN0b3J5SW5mbyIsImNhdGVnb3JpZXMiLCJsYW5ndWFnZSIsImNvcHlyaWdodCIsInN1bW1hcnkiLCJtYXR1cmUiLCJwdWJsaWMiLCJtYWluQ2hhcmFjdGVycyIsInNlY29uZGFyeUNoYXJhY3RlcnMiLCJjdXJyZW50Q2hhciIsInNldEN1cnJlbnRDaGFyIiwiZ2V0VXNlckNoYXJhY3RlcnMiLCJhZGRDaGFyYWN0ZXIiLCJyZW1vdmVDaGFyYWN0ZXIiLCJpZCIsImMiLCJDQVRFR09SSUVTIiwiTEFOR1VBR0VTIiwiU1RBVFVTIiwiQ09QWVJJR0hUUyIsImNoYXJhY3RlcnMiLCJpbmNsdWRlcyIsImNoYXIiLCJmaXJzdG5hbWUiLCJsYXN0bmFtZSIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwidXNlckNoYXJhY3RlcnMiLCJjb25uZWN0IiwiZGlzcGF0Y2giLCJ3aGVyZSIsImN1cnJlbnRVc2VyIiwidWlkIiwiZ2V0IiwiZG9jcyIsIml0ZW1zIiwiZm9yRWFjaCIsImRvYyIsImRhdGEiLCJHRVRfVVNFUl9DSEFSQUNURVJTIiwicGF5bG9hZCIsImdldEZhdm9yaXRlQ2hhcmFjdGVycyIsImZhdkFyciIsImNoYXJhY3RlcklkIiwidXNlcnMiLCJQcm9taXNlIiwiYWxsIiwicmVzIiwiZmF2VXNlcnMiLCJHRVRfRkFWT1JJVEVfQ0hBUkFDVEVSUyIsInByb2RDb25maWciLCJhcGlLZXkiLCJwcm9jZXNzIiwiYXV0aERvbWFpbiIsImRhdGFiYXNlVVJMIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJGSVJFQkFTRV9BUFBfSUQiLCJkZXZDb25maWciLCJjb25maWciLCJhcHBzIiwiaW5pdGlhbGl6ZUFwcCIsIkdFVF9QUk9GSUxFIiwiTE9HSU4iLCJSRUdJU1RFUiIsIkdFVF9TVE9SWSIsIkdFVF9DSEFQVEVSUyIsIkdFVF9VU0VSX1NUT1JJRVMiLCJHRVRfRkFWT1JJVEVfU1RPUklFUyIsIkdFVF9GQVZPUklURV9BVVRIT1JTIiwiR0VUX0ZPTExPV0VSUyIsInN0cmluZyIsImNoYXJBdCIsInRvVXBwZXJDYXNlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFF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LE1BQU0xTSxxQkFBcUIsR0FBSTJNLE1BQUQsSUFDbkNBLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLENBQWQsRUFBaUJDLFdBQWpCLEtBQWlDRixNQUFNLENBQUNwSixLQUFQLENBQWEsQ0FBYixDQUQ1QixDOzs7Ozs7Ozs7OztBQ0FQLDhDOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDIiwiZmlsZSI6InBhZ2VzL3N0b3J5L25ldy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvc3RvcnkvbmV3LmpzXCIpO1xuIiwiaW1wb3J0IHsgQ29sLCBGb3JtIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2hlbHBlcnNcIjtcclxuXHJcbmNvbnN0IElucHV0R3JvdXAgPSAoe1xyXG4gIGxnLFxyXG4gIHhzLFxyXG4gIHNtLFxyXG4gIG1kLFxyXG4gIHR5cGUsXHJcbiAgbmFtZSxcclxuICBwbGFjZWhvbGRlcixcclxuICB2YWx1ZSxcclxuICBvbkNoYW5nZUZ1bmMsXHJcbiAgc3RvcnlJbmZvLFxyXG4gIHJlcXVpcmVkLFxyXG4gIHRpdGxlLFxyXG59KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb2wgbGc9e2xnfSB4cz17eHN9IHNtPXtzbX0gbWQ9e21kfT5cclxuICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgIGxhYmVsPXt0aXRsZSA/IHRpdGxlIDogY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKG5hbWUpfVxyXG4gICAgICAgIHJlcXVpcmVkPXtyZXF1aXJlZH1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWlucHV0XCJcclxuICAgICAgICAgICAgdHlwZT17dHlwZX1cclxuICAgICAgICAgICAgaWQ9e25hbWV9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cclxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2VGdW5jKHsgLi4uc3RvcnlJbmZvLCBbbmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgPC9Db2w+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IElucHV0R3JvdXA7XHJcbiIsImltcG9ydCB7IENvbCwgUG9wb3ZlciwgU2VsZWN0LCBGb3JtIH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmltcG9ydCB7IGNhcGl0YWxpemVGaXJzdExldHRlciB9IGZyb20gXCIuLi8uLi91dGlscy9oZWxwZXJzXCI7XHJcblxyXG5jb25zdCB7IE9wdGlvbiB9ID0gU2VsZWN0O1xyXG5cclxuY29uc3QgU2VsZWN0R3JvdXAgPSAoe1xyXG4gIHhzLFxyXG4gIGxnLFxyXG4gIHNtLFxyXG4gIG1kLFxyXG4gIG5hbWUsXHJcbiAgb3B0aW9ucyxcclxuICBpbmZvLFxyXG4gIHZhbHVlLFxyXG4gIG9uQ2hhbmdlRnVuYyxcclxuICBzdG9yeUluZm8sXHJcbiAgdHlwZSxcclxufSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q29sIHhzPXt4c30gc209e3NtfSBtZD17bWR9IGxnPXtsZ30+XHJcbiAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgIGxhYmVsPXtcclxuICAgICAgICAgIGluZm8gPyAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAge2NhcGl0YWxpemVGaXJzdExldHRlcihuYW1lKX1cclxuICAgICAgICAgICAgICA8UG9wb3ZlciB0aXRsZT17aW5mb30gdHJpZ2dlcj1cImNsaWNrXCI+XHJcbiAgICAgICAgICAgICAgICA8aW9uLWljb24gbmFtZT1cImluZm9ybWF0aW9uLWNpcmNsZVwiPjwvaW9uLWljb24+XHJcbiAgICAgICAgICAgICAgPC9Qb3BvdmVyPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIGNhcGl0YWxpemVGaXJzdExldHRlcihuYW1lKVxyXG4gICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb2xvbj17ZmFsc2V9XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImdlbnJlXCI+PC9sYWJlbD5cclxuICAgICAgICAgIHt0eXBlID09PSBcIm11bHRpcGxlXCIgPyAoXHJcbiAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICBtb2RlPVwibXVsdGlwbGVcIlxyXG4gICAgICAgICAgICAgIGFsbG93Q2xlYXJcclxuICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBsZWFzZSBzZWxlY3RcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbCkgPT4gb25DaGFuZ2VGdW5jKHsgLi4uc3RvcnlJbmZvLCBbbmFtZV06IHZhbCB9KX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtvcHRpb25zXHJcbiAgICAgICAgICAgICAgICA/LnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgY29uc3Qga2V5QSA9IGEubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBrZXlCID0gYi5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAvLyBDb21wYXJlIHRoZSAyIGRhdGVzXHJcbiAgICAgICAgICAgICAgICAgIGlmIChrZXlBIDwga2V5QikgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgICAgICAgICBpZiAoa2V5QSA+IGtleUIpIHJldHVybiAxO1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAubWFwKChvcHRpb24pID0+IChcclxuICAgICAgICAgICAgICAgICAgPE9wdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHRleHRUcmFuc2Zvcm06IFwiY2FwaXRhbGl6ZVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtvcHRpb24udmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e29wdGlvbi52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtvcHRpb24ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgYWxsb3dDbGVhclxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGxlYXNlIHNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsKSA9PiBvbkNoYW5nZUZ1bmMoeyAuLi5zdG9yeUluZm8sIFtuYW1lXTogdmFsIH0pfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge29wdGlvbnNcclxuICAgICAgICAgICAgICAgID8uc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBrZXlBID0gYS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGtleUIgPSBiLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgIC8vIENvbXBhcmUgdGhlIDIgZGF0ZXNcclxuICAgICAgICAgICAgICAgICAgaWYgKGtleUEgPCBrZXlCKSByZXR1cm4gLTE7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChrZXlBID4ga2V5QikgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5tYXAoKG9wdGlvbikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8T3B0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgdGV4dFRyYW5zZm9ybTogXCJjYXBpdGFsaXplXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICBrZXk9e29wdGlvbi52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17b3B0aW9uLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge29wdGlvbi5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICA8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgPC9Db2w+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlbGVjdEdyb3VwO1xyXG4iLCJpbXBvcnQgeyBUYWcsIFRvb2x0aXAgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyBQbHVzT3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuXHJcbmNvbnN0IFRhZ3MgPSAoeyB0YWdzLCBzZXRUYWdzLCBzdG9yeUluZm8gfSkgPT4ge1xyXG4gIGNvbnN0IGlucHV0QnV0dG9uID0gUmVhY3QudXNlUmVmKCk7XHJcbiAgY29uc3QgZWRpdElucHV0QnV0dG9uID0gUmVhY3QudXNlUmVmKCk7XHJcbiAgY29uc3QgW2lucHV0VmlzaWJsZSwgc2V0SW5wdXRWaXNpYmxlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaW5wdXRWYWx1ZSwgc2V0SW5wdXRWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZWRpdElucHV0SW5kZXgsIHNldEVkaXRJbnB1dEluZGV4XSA9IFJlYWN0LnVzZVN0YXRlKC0xKTtcclxuICBjb25zdCBbZWRpdElucHV0VmFsdWUsIHNldEVkaXRJbnB1dFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDbG9zZSA9IChyZW1vdmVkVGFnKSA9PlxyXG4gICAgc2V0VGFncyh7IC4uLnN0b3J5SW5mbywgdGFnczogdGFncy5maWx0ZXIoKHRhZykgPT4gdGFnICE9PSByZW1vdmVkVGFnKSB9KTtcclxuXHJcbiAgY29uc3Qgc2hvd0lucHV0ID0gKCkgPT4ge1xyXG4gICAgc2V0SW5wdXRWaXNpYmxlKHRydWUpO1xyXG4gICAgLy9jb25zb2xlLmxvZygpO1xyXG4gICAgLy9lZGl0SW5wdXRCdXR0b24uY3VycmVudC5mb2N1cygpO1xyXG4gICAgLy9pbnB1dEJ1dHRvbi5jdXJyZW50LmZvY3VzKCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZSkgPT4gc2V0SW5wdXRWYWx1ZShlLnRhcmdldC52YWx1ZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUlucHV0Q29uZmlybSA9ICgpID0+IHtcclxuICAgIGxldCBuZXdUYWdzID0gdGFncztcclxuICAgIGlmIChpbnB1dFZhbHVlICYmIHRhZ3MuaW5kZXhPZihpbnB1dFZhbHVlKSA9PT0gLTEpIHtcclxuICAgICAgbmV3VGFncyA9IFsuLi5uZXdUYWdzLCBpbnB1dFZhbHVlXTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRUYWdzKHsgLi4uc3RvcnlJbmZvLCB0YWdzOiBuZXdUYWdzIH0pO1xyXG4gICAgc2V0SW5wdXRWYWx1ZShcIlwiKTtcclxuICAgIHNldElucHV0VmlzaWJsZShmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRWRpdElucHV0Q2hhbmdlID0gKGUpID0+IHNldEVkaXRJbnB1dFZhbHVlKGUudGFyZ2V0LnZhbHVlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRWRpdElucHV0Q29uZmlybSA9ICgpID0+IHtcclxuICAgIGNvbnN0IG5ld1RhZ3MgPSBbLi4udGFnc107XHJcbiAgICBuZXdUYWdzW2VkaXRJbnB1dEluZGV4XSA9IGVkaXRJbnB1dFZhbHVlO1xyXG4gICAgc2V0VGFncyh7IC4uLnN0b3J5SW5mbywgdGFnczogbmV3VGFncyB9KTtcclxuICAgIHNldEVkaXRJbnB1dEluZGV4KC0xKTtcclxuICAgIHNldEVkaXRJbnB1dFZhbHVlKFwiXCIpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGtleVByZXNzID0gKGUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGUua2V5KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge3RhZ3M/Lm1hcCgodGFnLCBpKSA9PiB7XHJcbiAgICAgICAgaWYgKGVkaXRJbnB1dEluZGV4ID09PSBpKSB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUVkaXRJbnB1dENoYW5nZX1cclxuICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUVkaXRJbnB1dENvbmZpcm19XHJcbiAgICAgICAgICAgICAgb25QcmVzc0VudGVyPXtoYW5kbGVFZGl0SW5wdXRDb25maXJtfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtlZGl0SW5wdXRWYWx1ZX1cclxuICAgICAgICAgICAgICByZWY9e2VkaXRJbnB1dEJ1dHRvbn1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWlucHV0XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGlzTG9uZ1RhZyA9IHRhZy5sZW5ndGggPiAyMDtcclxuICAgICAgICBjb25zdCBUYWdFbGVtID0gKFxyXG4gICAgICAgICAgPFRhZ1xyXG4gICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBoYW5kbGVDbG9zZSh0YWcpfVxyXG4gICAgICAgICAgICBjbG9zYWJsZT17dHJ1ZX1cclxuICAgICAgICAgICAga2V5PXt0YWd9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImVkaXQtdGFnXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICBvbkRvdWJsZUNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGkgIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgc2V0RWRpdElucHV0SW5kZXgoaSk7XHJcbiAgICAgICAgICAgICAgICAgIHNldEVkaXRJbnB1dFZhbHVlKHRhZyk7XHJcbiAgICAgICAgICAgICAgICAgIGVkaXRJbnB1dEJ1dHRvbi5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtpc0xvbmdUYWcgPyBgJHt0YWcuc2xpY2UoMCwgMjApfS4uLmAgOiB0YWd9XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvVGFnPlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmV0dXJuIGlzTG9uZ1RhZyA/IChcclxuICAgICAgICAgIDxUb29sdGlwIHRpdGxlPXt0YWd9IGtleT17dGFnfT5cclxuICAgICAgICAgICAge1RhZ0VsZW19XHJcbiAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIFRhZ0VsZW1cclxuICAgICAgICApO1xyXG4gICAgICB9KX1cclxuICAgICAge2lucHV0VmlzaWJsZSAmJiAoXHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICBvbkJsdXI9e2hhbmRsZUlucHV0Q29uZmlybX1cclxuICAgICAgICAgIG9uS2V5RG93bj17KGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcclxuICAgICAgICAgICAgICBoYW5kbGVJbnB1dENvbmZpcm0oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIHZhbHVlPXtpbnB1dFZhbHVlfVxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgcmVmPXtpbnB1dEJ1dHRvbn1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0taW5wdXRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcbiAgICAgIHshaW5wdXRWaXNpYmxlICYmIChcclxuICAgICAgICA8VGFnIGNsYXNzTmFtZT1cInNpdGUtdGFnLXBsdXNcIiBvbkNsaWNrPXtzaG93SW5wdXR9PlxyXG4gICAgICAgICAgPFBsdXNPdXRsaW5lZCAvPiBOZXcgVGFnXHJcbiAgICAgICAgPC9UYWc+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFncztcclxuIiwiaW1wb3J0IHsgVXBsb2FkLCBtZXNzYWdlLCBGb3JtIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgTG9hZGluZ091dGxpbmVkLCBQbHVzT3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuXHJcbmZ1bmN0aW9uIGdldEJhc2U2NChpbWcsIGNhbGxiYWNrKSB7XHJcbiAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICByZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4gY2FsbGJhY2socmVhZGVyLnJlc3VsdCkpO1xyXG4gIHJlYWRlci5yZWFkQXNEYXRhVVJMKGltZyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJlZm9yZVVwbG9hZChmaWxlKSB7XHJcbiAgY29uc3QgaXNKcGdPclBuZyA9IGZpbGUudHlwZSA9PT0gXCJpbWFnZS9qcGVnXCIgfHwgZmlsZS50eXBlID09PSBcImltYWdlL3BuZ1wiO1xyXG4gIGlmICghaXNKcGdPclBuZykge1xyXG4gICAgbWVzc2FnZS5lcnJvcihcIllvdSBjYW4gb25seSB1cGxvYWQgSlBHL1BORyBmaWxlIVwiKTtcclxuICB9XHJcbiAgY29uc3QgaXNMdDJNID0gZmlsZS5zaXplIC8gMTAyNCAvIDEwMjQgPCAyO1xyXG4gIGlmICghaXNMdDJNKSB7XHJcbiAgICBtZXNzYWdlLmVycm9yKFwiSW1hZ2UgbXVzdCBzbWFsbGVyIHRoYW4gMk1CIVwiKTtcclxuICB9XHJcbiAgcmV0dXJuIGlzSnBnT3JQbmcgJiYgaXNMdDJNO1xyXG59XHJcblxyXG5jb25zdCBVcGxvYWRJbWFnZSA9ICh7IHN0b3J5SW5mbywgb25DaGFuZ2VGdW5jIH0pID0+IHtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2ltYWdlVXJsLCBzZXRJbWFnZVVybF0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGluZm8pID0+IHtcclxuICAgIGlmIChpbmZvLmZpbGUuc3RhdHVzID09PSBcInVwbG9hZGluZ1wiKSB7XHJcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmIChpbmZvLmZpbGUuc3RhdHVzID09PSBcImRvbmVcIikge1xyXG4gICAgICAvLyBHZXQgdGhpcyB1cmwgZnJvbSByZXNwb25zZSBpbiByZWFsIHdvcmxkLlxyXG4gICAgICBnZXRCYXNlNjQoaW5mby5maWxlLm9yaWdpbkZpbGVPYmosIChpbWFnZVVybCkgPT4ge1xyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIG9uQ2hhbmdlRnVuYyh7IC4uLnN0b3J5SW5mbywgaW1hZ2U6IGltYWdlVXJsIH0pO1xyXG4gICAgICAgIHNldEltYWdlVXJsKGltYWdlVXJsKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdXBsb2FkQnV0dG9uID0gKFxyXG4gICAgPGRpdj5cclxuICAgICAge2xvYWRpbmcgPyA8TG9hZGluZ091dGxpbmVkIC8+IDogPFBsdXNPdXRsaW5lZCAvPn1cclxuICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IDggfX0+VXBsb2FkPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm0uSXRlbT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1cGxvYWQtaW1hZ2VcIj5cclxuICAgICAgICA8VXBsb2FkXHJcbiAgICAgICAgICBuYW1lPVwiaW1hZ2VcIlxyXG4gICAgICAgICAgbGlzdFR5cGU9XCJwaWN0dXJlLWNhcmRcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY292ZXItdXBsb2FkZXJcIlxyXG4gICAgICAgICAgc2hvd1VwbG9hZExpc3Q9e2ZhbHNlfVxyXG4gICAgICAgICAgYmVmb3JlVXBsb2FkPXtiZWZvcmVVcGxvYWR9XHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtpbWFnZVVybCA/IChcclxuICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlVXJsfSBhbHQ9XCJpbWFnZVwiIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fSAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgdXBsb2FkQnV0dG9uXHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvVXBsb2FkPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZnJvdXBcIj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW1hZ2VDb3B5cmlnaHRcIj5JbWFnZSBjb3B5cmlnaHQ8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgaWQ9XCJpbWFnZUNvcHlyaWdodFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0taW5wdXRcIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2VGdW5jKHsgLi4uc3RvcnlJbmZvLCBpbWFnZUNvcHlyaWdodDogZS50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YWx1ZT17c3RvcnlJbmZvLmltYWdlQ29weXJpZ2h0fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0Zvcm0uSXRlbT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXBsb2FkSW1hZ2U7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0LCBjcmVhdGVDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2VcIjtcclxuaW1wb3J0IHsgYXV0aCwgZGIgfSBmcm9tIFwiLi4vcmVkdXgvZmJDb25maWdcIjtcclxuXHJcbmNvbnN0IGF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFByb3ZpZGVBdXRoKHsgY2hpbGRyZW4gfSkge1xyXG4gIGNvbnN0IGF1dGggPSB1c2VQcm92aWRlQXV0aCgpO1xyXG4gIHJldHVybiA8YXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2F1dGh9PntjaGlsZHJlbn08L2F1dGhDb250ZXh0LlByb3ZpZGVyPjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUF1dGggPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHVzZUNvbnRleHQoYXV0aENvbnRleHQpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gdXNlUHJvdmlkZUF1dGgoKSB7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICAvLyBXcmFwIGFueSBGaXJlYmFzZSBtZXRob2RzIHdlIHdhbnQgdG8gdXNlIG1ha2luZyBzdXJlIC4uLlxyXG4gIC8vIC4uLiB0byBzYXZlIHRoZSB1c2VyIHRvIHN0YXRlLlxyXG4gIGNvbnN0IHNpZ25pbiA9IChlbWFpbCwgcGFzc3dvcmQpID0+IHtcclxuICAgIHJldHVybiBhdXRoLnNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgc2V0VXNlcihyZXNwb25zZS51c2VyKTtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLnVzZXI7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzaWdudXAgPSAoZW1haWwsIHBhc3N3b3JkLCB1c2VybmFtZSkgPT4ge1xyXG4gICAgcmV0dXJuIGF1dGhcclxuICAgICAgLmNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHNldFVzZXIocmVzcG9uc2UudXNlcik7XHJcbiAgICAgICAgZGIuY29sbGVjdGlvbihcInVzZXJzXCIpLmFkZCh7XHJcbiAgICAgICAgICBiYWRnZXM6IFtdLFxyXG4gICAgICAgICAgYmlvZ3JhcGh5OiBcIlwiLFxyXG4gICAgICAgICAgY3JlYXRlZEF0OiBmaXJlYmFzZS5maXJlc3RvcmUuRmllbGRWYWx1ZS5zZXJ2ZXJUaW1lc3RhbXAoKSxcclxuICAgICAgICAgIHN1c3BlbmRlZDogZmFsc2UsXHJcbiAgICAgICAgICBmYWNlYm9vazogXCJcIixcclxuICAgICAgICAgIGluc3RhZ3JhbTogXCJcIixcclxuICAgICAgICAgIHR3aXR0ZXI6IFwiXCIsXHJcbiAgICAgICAgICBkZXZpYW50YXJ0OiBcIlwiLFxyXG4gICAgICAgICAgbGlrZXNDb3VudDogXCJcIixcclxuICAgICAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSxcclxuICAgICAgICAgIGltYWdlOiBcIlwiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZS51c2VyO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzaWdub3V0ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGF1dGguc2lnbk91dCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICBzZXRVc2VyKGZhbHNlKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNlbmRQYXNzd29yZFJlc2V0RW1haWwgPSAoZW1haWwpID0+IHtcclxuICAgIHJldHVybiBhdXRoLnNlbmRQYXNzd29yZFJlc2V0RW1haWwoZW1haWwpLnRoZW4oKCkgPT4ge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNvbmZpcm1QYXNzd29yZFJlc2V0ID0gKGNvZGUsIHBhc3N3b3JkKSA9PiB7XHJcbiAgICByZXR1cm4gYXV0aC5jb25maXJtUGFzc3dvcmRSZXNldChjb2RlLCBwYXNzd29yZCkudGhlbigoKSA9PiB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHVuc3Vic2NyaWJlID0gYXV0aC5vbkF1dGhTdGF0ZUNoYW5nZWQoKHVzZXIpID0+IHtcclxuICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICBzZXRVc2VyKHVzZXIpO1xyXG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0VXNlcihmYWxzZSk7XHJcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQ2xlYW51cCBzdWJzY3JpcHRpb24gb24gdW5tb3VudFxyXG4gICAgcmV0dXJuICgpID0+IHVuc3Vic2NyaWJlKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICAvLyBSZXR1cm4gdGhlIHVzZXIgb2JqZWN0IGFuZCBhdXRoIG1ldGhvZHNcclxuICByZXR1cm4ge1xyXG4gICAgaXNMb2FkaW5nLFxyXG4gICAgdXNlcixcclxuICAgIHNpZ25pbixcclxuICAgIHNpZ251cCxcclxuICAgIHNpZ25vdXQsXHJcbiAgICBzZW5kUGFzc3dvcmRSZXNldEVtYWlsLFxyXG4gICAgY29uZmlybVBhc3N3b3JkUmVzZXQsXHJcbiAgfTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFJvdywgQ29sLCBTcGFjZSwgRGl2aWRlciwgRm9ybSB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgQ0FURUdPUklFUyxcclxuICBDT1BZUklHSFRTLFxyXG4gIExBTkdVQUdFUyxcclxuICBTVEFUVVMsXHJcbn0gZnJvbSBcIi4uLy4uL3V0aWxzL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSBcIi4uLy4uL2hvb2tzL3VzZXJIb29rc1wiO1xyXG5pbXBvcnQgeyBnZXRVc2VyQ2hhcmFjdGVycyB9IGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25zL2NoYXJhY3RlcnNBY3Rpb25zXCI7XHJcblxyXG5pbXBvcnQgSW5wdXRHcm91cCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jb21tb24vSW5wdXRcIjtcclxuaW1wb3J0IFNlbGVjdEdyb3VwIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2NvbW1vbi9TZWxlY3RcIjtcclxuaW1wb3J0IFRhZ3MgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZm9ybXMvVGFnc1wiO1xyXG5pbXBvcnQgVXBsb2FkSW1hZ2UgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZm9ybXMvVXBsb2FkSW1hZ2VcIjtcclxuXHJcbmNvbnN0IG5ld1N0b3J5ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW3N0b3J5SW5mbywgc2V0U3RvcnlJbmZvXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgIHRpdGxlOiBcIlwiLFxyXG4gICAgY2F0ZWdvcmllczogW10sXHJcbiAgICBsYW5ndWFnZTogXCJcIixcclxuICAgIHN0YXR1czogXCJcIixcclxuICAgIGNvcHlyaWdodDogXCJcIixcclxuICAgIHN1bW1hcnk6IFwiXCIsXHJcbiAgICBtYXR1cmU6IGZhbHNlLFxyXG4gICAgcHVibGljOiB0cnVlLFxyXG4gICAgdGFnczogW10sXHJcbiAgICBtYWluQ2hhcmFjdGVyczogW10sXHJcbiAgICBzZWNvbmRhcnlDaGFyYWN0ZXJzOiBbXSxcclxuICAgIGltYWdlOiBcIlwiLFxyXG4gICAgaW1hZ2VDb3B5cmlnaHQ6IFwiXCIsXHJcbiAgfSk7XHJcbiAgY29uc3QgW2N1cnJlbnRDaGFyLCBzZXRDdXJyZW50Q2hhcl0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBhdXRoID0gdXNlQXV0aCgpO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGF1dGgudXNlcikge1xyXG4gICAgICBwcm9wcy5nZXRVc2VyQ2hhcmFjdGVycygpO1xyXG4gICAgfVxyXG4gIH0sIFthdXRoXSk7XHJcblxyXG4gIGNvbnN0IGFkZENoYXJhY3RlciA9ICgpID0+IHtcclxuICAgIGlmIChcclxuICAgICAgY3VycmVudENoYXIgJiZcclxuICAgICAgc3RvcnlJbmZvLm1haW5DaGFyYWN0ZXJzLmluZGV4T2YoY3VycmVudENoYXIpID09PSAtMSAmJlxyXG4gICAgICBzdG9yeUluZm8ubWFpbkNoYXJhY3RlcnMubGVuZ3RoIDwgNVxyXG4gICAgKSB7XHJcbiAgICAgIHNldFN0b3J5SW5mbyh7XHJcbiAgICAgICAgLi4uc3RvcnlJbmZvLFxyXG4gICAgICAgIG1haW5DaGFyYWN0ZXJzOiBbLi4uc3RvcnlJbmZvLm1haW5DaGFyYWN0ZXJzLCBjdXJyZW50Q2hhcl0sXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbW92ZUNoYXJhY3RlciA9IChpZCkgPT4ge1xyXG4gICAgc2V0U3RvcnlJbmZvKHtcclxuICAgICAgLi4uc3RvcnlJbmZvLFxyXG4gICAgICBtYWluQ2hhcmFjdGVyczogc3RvcnlJbmZvLm1haW5DaGFyYWN0ZXJzLmZpbHRlcigoYykgPT4gYyAhPT0gaWQpLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc29sZS5sb2coY3VycmVudENoYXIpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ldy1zdG9yeSBjdXN0b20tZm9ybVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyXCI+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInNpZGUtaGVhZGluZ1wiPkFkZCBhIG5ldyBzdG9yeTwvaDI+XHJcbiAgICAgICAgPEZvcm0gbGF5b3V0PVwidmVydGljYWxcIiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICA8Um93IGd1dHRlcj17WzI0LCAyNF19PlxyXG4gICAgICAgICAgICA8SW5wdXRHcm91cFxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgIHNtPXsyNH1cclxuICAgICAgICAgICAgICB4cz17MjR9XHJcbiAgICAgICAgICAgICAgbWQ9ezE4fVxyXG4gICAgICAgICAgICAgIGxnPXsxOH1cclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cInRpdGxlXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGEgdGl0bGVcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtzdG9yeUluZm8udGl0bGV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2VGdW5jPXtzZXRTdG9yeUluZm99XHJcbiAgICAgICAgICAgICAgc3RvcnlJbmZvPXtzdG9yeUluZm99XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxTZWxlY3RHcm91cFxyXG4gICAgICAgICAgICAgIHNtPXsyNH1cclxuICAgICAgICAgICAgICB4cz17MjR9XHJcbiAgICAgICAgICAgICAgbGc9ezZ9XHJcbiAgICAgICAgICAgICAgbWQ9ezZ9XHJcbiAgICAgICAgICAgICAgbmFtZT1cImNhdGVnb3JpZXNcIlxyXG4gICAgICAgICAgICAgIG9wdGlvbnM9e0NBVEVHT1JJRVN9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e3N0b3J5SW5mby5jYXRlZ29yaWVzfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlRnVuYz17c2V0U3RvcnlJbmZvfVxyXG4gICAgICAgICAgICAgIHN0b3J5SW5mbz17c3RvcnlJbmZvfVxyXG4gICAgICAgICAgICAgIHR5cGU9XCJtdWx0aXBsZVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgIDxSb3cgZ3V0dGVyPXtbMjQsIDI0XX0+XHJcbiAgICAgICAgICAgIDxTZWxlY3RHcm91cFxyXG4gICAgICAgICAgICAgIG1kPXs4fVxyXG4gICAgICAgICAgICAgIHNtPXsyNH1cclxuICAgICAgICAgICAgICB4cz17MjR9XHJcbiAgICAgICAgICAgICAgbGc9ezh9XHJcbiAgICAgICAgICAgICAgbmFtZT1cImxhbmd1YWdlXCJcclxuICAgICAgICAgICAgICBvcHRpb25zPXtMQU5HVUFHRVN9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e3N0b3J5SW5mby5sYW5ndWFnZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZUZ1bmM9e3NldFN0b3J5SW5mb31cclxuICAgICAgICAgICAgICBzdG9yeUluZm89e3N0b3J5SW5mb31cclxuICAgICAgICAgICAgICB0eXBlPVwic2luZ2xlXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFNlbGVjdEdyb3VwXHJcbiAgICAgICAgICAgICAgbWQ9ezh9XHJcbiAgICAgICAgICAgICAgc209ezI0fVxyXG4gICAgICAgICAgICAgIHhzPXsyNH1cclxuICAgICAgICAgICAgICBsZz17OH1cclxuICAgICAgICAgICAgICBuYW1lPVwic3RhdHVzXCJcclxuICAgICAgICAgICAgICBvcHRpb25zPXtTVEFUVVN9XHJcbiAgICAgICAgICAgICAgaW5mbz17XCJpbmZvIGFib3V0IHN0YXR1c1wifVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtzdG9yeUluZm8uc3RhdHVzfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlRnVuYz17c2V0U3RvcnlJbmZvfVxyXG4gICAgICAgICAgICAgIHN0b3J5SW5mbz17c3RvcnlJbmZvfVxyXG4gICAgICAgICAgICAgIHR5cGU9XCJzaW5nbGVcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8U2VsZWN0R3JvdXBcclxuICAgICAgICAgICAgICBtZD17OH1cclxuICAgICAgICAgICAgICBzbT17MjR9XHJcbiAgICAgICAgICAgICAgeHM9ezI0fVxyXG4gICAgICAgICAgICAgIGxnPXs4fVxyXG4gICAgICAgICAgICAgIG5hbWU9XCJjb3B5cmlnaHRcIlxyXG4gICAgICAgICAgICAgIG9wdGlvbnM9e0NPUFlSSUdIVFN9XHJcbiAgICAgICAgICAgICAgaW5mbz17XCJpbmZvIGFib3V0IGNvcHlyaWdodFwifVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtzdG9yeUluZm8uY29weXJpZ2h0fVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlRnVuYz17c2V0U3RvcnlJbmZvfVxyXG4gICAgICAgICAgICAgIHN0b3J5SW5mbz17c3RvcnlJbmZvfVxyXG4gICAgICAgICAgICAgIHR5cGU9XCJzaW5nbGVcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic3VtbWFyeVwiPlN1bW1hcnk8L2xhYmVsPlxyXG4gICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICByb3dzPVwiNVwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cInN1bW1hcnlcIlxyXG4gICAgICAgICAgICAgIGlkPVwic3VtbWFyeVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTdW1tYXJpemUgeW91ciBzdG9yeSBoZXJlXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17c3RvcnlJbmZvLnN1bW1hcnl9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxyXG4gICAgICAgICAgICAgICAgc2V0U3RvcnlJbmZvKHsgLi4uc3RvcnlJbmZvLCBzdW1tYXJ5OiBlLnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxSb3cganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIiBndXR0ZXI9e1syNCwgMjRdfT5cclxuICAgICAgICAgICAgPENvbCBsZz17NH0gbWQ9ezh9IHNtPXsxMn0geHM9ezI0fT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8ZmllbGRzZXQgaWQ9XCJtYXR1cmVcIj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRpdGxlLWxhYmVsXCIgaHRtbEZvcj1cInB1YmxpY1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIE1hdHVyZSBjb250ZW50XHJcbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhZGlvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNwYWNlIHNpemU9ezMyfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmFkaW9fXzFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJyYWRpby0xXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJtYXR1cmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3RvcnlJbmZvKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uc3RvcnlJbmZvLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXR1cmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtzdG9yeUluZm8ubWF0dXJlID8gdHJ1ZSA6IGZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInJhZGlvLTFcIj48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5ZZXM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhZGlvX18yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicmFkaW8tMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibWF0dXJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTdG9yeUluZm8oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5zdG9yeUluZm8sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdHVyZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtzdG9yeUluZm8ubWF0dXJlID8gZmFsc2UgOiB0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInJhZGlvLTJcIj48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5ObzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU3BhY2U+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9maWVsZHNldD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgbGc9ezR9IG1kPXs4fSBzbT17MTJ9IHhzPXsyNH0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGZpZWxkc2V0IGlkPVwicHVibGljXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0aXRsZS1sYWJlbFwiIGh0bWxGb3I9XCJwdWJsaWNcIj5cclxuICAgICAgICAgICAgICAgICAgICBWaXNpYmlsdHlcclxuICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYWRpb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTcGFjZSBzaXplPXszMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhZGlvX18xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicmFkaW8tM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicHVibGljXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFN0b3J5SW5mbyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnN0b3J5SW5mbyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHVibGljOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17c3RvcnlJbmZvLnB1YmxpYyA/IHRydWUgOiBmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJyYWRpby0zXCI+PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+UHVibGljPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYWRpb19fMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInJhZGlvLTRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInB1YmxpY1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3RvcnlJbmZvKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uc3RvcnlJbmZvLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdWJsaWM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17c3RvcnlJbmZvLnB1YmxpYyA/IGZhbHNlIDogdHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJyYWRpby00XCI+PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+UHJpdmF0ZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU3BhY2U+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9maWVsZHNldD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgICAgICA8Q29sIGxnPXs4fSBtZD17MTJ9IHNtPXsyNH0geHM9ezI0fT5cclxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGl0bGUtbGFiZWxcIiBodG1sRm9yPVwidGFnc1wiPlxyXG4gICAgICAgICAgICAgICAgVGFnc1xyXG4gICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPFRhZ3NcclxuICAgICAgICAgICAgICAgIHN0b3J5SW5mbz17c3RvcnlJbmZvfVxyXG4gICAgICAgICAgICAgICAgdGFncz17c3RvcnlJbmZvLnRhZ3N9XHJcbiAgICAgICAgICAgICAgICBzZXRUYWdzPXtzZXRTdG9yeUluZm99XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICA8Um93IGd1dHRlcj17WzE2LCAxNl19PlxyXG4gICAgICAgICAgICA8Q29sIGxnPXsxMn0gbWQ9ezEyfSBzbT17MjR9IHhzPXsyNH0+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD1cIk1haW4gQ2hhcmFjdGVyc1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17MjJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcnlJbmZvLm1haW5DaGFyYWN0ZXJzLmxlbmd0aCA+PSA1ID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDdXJyZW50Q2hhcihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0taW5wdXQgc2VsZWN0LWFkZC1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJtYWluQ2hhcmFjdGVyc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8b3B0aW9uIHNlbGVjdGVkIHZhbHVlPVwibm9uZVwiIGRpc2FibGVkIGhpZGRlbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBDaG9vc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuY2hhcmFjdGVyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8uZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGMpID0+ICFzdG9yeUluZm8ubWFpbkNoYXJhY3RlcnMuaW5jbHVkZXMoYy5pZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgoY2hhcikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2NoYXIuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjaGFyLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPntgJHtjaGFyLmZpcnN0bmFtZX0gJHtjaGFyLmxhc3RuYW1lfWB9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWlucHV0IHNlbGVjdC1hZGQtaW5wdXQtaWNvbmJveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2FkZENoYXJhY3Rlcn1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Kzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzbWFsbD5Zb3UgY2FuIGFkZCB1cCB0byA1IG1haW4gY2hhcmFjdGVyczwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIGxnPXsxMn0gbWQ9ezEyfSBzbT17MjR9IHhzPXsyNH0+XHJcbiAgICAgICAgICAgICAge3Byb3BzLmNoYXJhY3RlcnNcclxuICAgICAgICAgICAgICAgIC5maWx0ZXIoKGMpID0+IHN0b3J5SW5mby5tYWluQ2hhcmFjdGVycy5pbmRleE9mKGMuaWQpICE9PSAtMSlcclxuICAgICAgICAgICAgICAgIC5tYXAoKGNoYXIpID0+IChcclxuICAgICAgICAgICAgICAgICAgPHAga2V5PXtjaGFyLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICB7YCR7Y2hhci5maXJzdG5hbWV9ICR7Y2hhci5sYXN0bmFtZX1gfXtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiByZW1vdmVDaGFyYWN0ZXIoY2hhci5pZCl9Png8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgIDxSb3cgYWxpZ249XCJib3R0b21cIiBndXR0ZXI9e1syNCwgMjRdfT5cclxuICAgICAgICAgICAgPENvbCBtZD17MTJ9IHNtPXsyNH0geHM9ezI0fT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImltYWdlXCI+VXBsb2FkIGEgY292ZXI8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPFVwbG9hZEltYWdlXHJcbiAgICAgICAgICAgICAgICAgIHN0b3J5SW5mbz17c3RvcnlJbmZvfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZUZ1bmM9e3NldFN0b3J5SW5mb31cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICAgICAgPElucHV0R3JvdXBcclxuICAgICAgICAgICAgICByZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgc209ezI0fVxyXG4gICAgICAgICAgICAgIHhzPXsyNH1cclxuICAgICAgICAgICAgICBtZD17MTJ9XHJcbiAgICAgICAgICAgICAgbGc9ezEyfVxyXG4gICAgICAgICAgICAgIGlkPVwiaW1hZ2VcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBuYW1lPVwiaW1hZ2VcIlxyXG4gICAgICAgICAgICAgIHRpdGxlPVwiT3Igc3VibWl0IGEgbGluayB0byBhbiBpbWFnZVwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtzdG9yeUluZm8uaW1hZ2V9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2VGdW5jPXtzZXRTdG9yeUluZm99XHJcbiAgICAgICAgICAgICAgc3RvcnlJbmZvPXtzdG9yeUluZm99XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5DcmVhdGU8L2J1dHRvbj5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcclxuICBjaGFyYWN0ZXJzOiBzdGF0ZS5jaGFyYWN0ZXJzLnVzZXJDaGFyYWN0ZXJzLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7IGdldFVzZXJDaGFyYWN0ZXJzIH0pKG5ld1N0b3J5KTtcclxuIiwiaW1wb3J0IHtcclxuICBHRVRfVVNFUl9DSEFSQUNURVJTLFxyXG4gIEdFVF9GQVZPUklURV9DSEFSQUNURVJTLFxyXG59IGZyb20gXCIuLi8uLi91dGlscy9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgZGIsIGF1dGggfSBmcm9tIFwiLi4vZmJDb25maWdcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyQ2hhcmFjdGVycyA9ICgpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzXCIpXHJcbiAgICAud2hlcmUoXCJhdXRob3JJZFwiLCBcIj09XCIsIGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigoZG9jcykgPT4ge1xyXG4gICAgICBsZXQgaXRlbXMgPSBbXTtcclxuICAgICAgZG9jcy5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgICAgICBpdGVtcyA9IFsuLi5pdGVtcywgeyBpZDogZG9jLmlkLCAuLi5kb2MuZGF0YSgpIH1dO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGl0ZW1zO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChpdGVtcykgPT4ge1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IEdFVF9VU0VSX0NIQVJBQ1RFUlMsIHBheWxvYWQ6IGl0ZW1zIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0RmF2b3JpdGVDaGFyYWN0ZXJzID0gKCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGIuY29sbGVjdGlvbihcImNoYXJhY3RlcnNMaWtlc1wiKVxyXG4gICAgLndoZXJlKFwic2VuZGVySWRcIiwgXCI9PVwiLCBhdXRoLmN1cnJlbnRVc2VyLnVpZClcclxuICAgIC5nZXQoKVxyXG4gICAgLnRoZW4oKGRvY3MpID0+IHtcclxuICAgICAgbGV0IGZhdkFyciA9IFtdO1xyXG4gICAgICBkb2NzLmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgICAgIGZhdkFyciA9IFsuLi5mYXZBcnIsIGRvYy5kYXRhKCkuY2hhcmFjdGVySWRdO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGZhdkFycjtcclxuICAgIH0pXHJcbiAgICAudGhlbigodXNlcnMpID0+IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gdXNlcnMubWFwKCh1c2VyKSA9PlxyXG4gICAgICAgIGRiLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzXCIpLmRvYyh1c2VyKS5nZXQoKVxyXG4gICAgICApO1xyXG4gICAgICBQcm9taXNlLmFsbChyZXN1bHQpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGxldCBmYXZVc2VycyA9IFtdO1xyXG4gICAgICAgIHJlcy5mb3JFYWNoKFxyXG4gICAgICAgICAgKGRvYykgPT4gKGZhdlVzZXJzID0gWy4uLmZhdlVzZXJzLCB7IGlkOiBkb2MuaWQsIC4uLmRvYy5kYXRhKCkgfV0pXHJcbiAgICAgICAgKTtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiBHRVRfRkFWT1JJVEVfQ0hBUkFDVEVSUyxcclxuICAgICAgICAgIHBheWxvYWQ6IGZhdlVzZXJzLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG4iLCJpbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlL2FwcFwiO1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9hdXRoXCI7XHJcbmltcG9ydCBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xyXG5cclxuY29uc3QgcHJvZENvbmZpZyA9IHtcclxuICBhcGlLZXk6IHByb2Nlc3MuZW52LkZJUkVCQVNFX0FQSV9LRVksXHJcbiAgYXV0aERvbWFpbjogcHJvY2Vzcy5lbnYuRklSRUJBU0VfQVVUSF9ET01BSU4sXHJcbiAgZGF0YWJhc2VVUkw6IHByb2Nlc3MuZW52LkZJUkVCQVNFX0RBVEFCQVNFX1VSTCxcclxuICBwcm9qZWN0SWQ6IHByb2Nlc3MuZW52LkZJUkVCQVNFX1BST0pFQ1RfSUQsXHJcbiAgc3RvcmFnZUJ1Y2tldDogcHJvY2Vzcy5lbnYuRklSRUJBU0VfU1RPUkFHRV9CVUNLRVQsXHJcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IHByb2Nlc3MuZW52LkZJUkVCQVNFX01FU1NBR0lOR19TRU5ERVJfSUQsXHJcbiAgYXBwSWQ6IHByb2Nlc3MuZW52LkZJUkVCQVNFX0FQUF9JRCxcclxufTtcclxuXHJcbmNvbnN0IGRldkNvbmZpZyA9IHtcclxuICBhcGlLZXk6IHByb2Nlc3MuZW52LkZJUkVCQVNFX0FQSV9LRVksXHJcbiAgYXV0aERvbWFpbjogcHJvY2Vzcy5lbnYuRklSRUJBU0VfQVVUSF9ET01BSU4sXHJcbiAgZGF0YWJhc2VVUkw6IHByb2Nlc3MuZW52LkZJUkVCQVNFX0RBVEFCQVNFX1VSTCxcclxuICBwcm9qZWN0SWQ6IHByb2Nlc3MuZW52LkZJUkVCQVNFX1BST0pFQ1RfSUQsXHJcbiAgc3RvcmFnZUJ1Y2tldDogcHJvY2Vzcy5lbnYuRklSRUJBU0VfU1RPUkFHRV9CVUNLRVQsXHJcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IHByb2Nlc3MuZW52LkZJUkVCQVNFX01FU1NBR0lOR19TRU5ERVJfSUQsXHJcbiAgYXBwSWQ6IHByb2Nlc3MuZW52LkZJUkVCQVNFX0FQUF9JRCxcclxufTtcclxuXHJcbmNvbnN0IGNvbmZpZyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IHByb2RDb25maWcgOiBkZXZDb25maWc7XHJcblxyXG5pZiAoIWZpcmViYXNlLmFwcHMubGVuZ3RoKSB7XHJcbiAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChjb25maWcpO1xyXG59XHJcblxyXG5jb25zdCBkYiA9IGZpcmViYXNlLmZpcmVzdG9yZSgpO1xyXG5jb25zdCBhdXRoID0gZmlyZWJhc2UuYXV0aCgpO1xyXG5cclxuZXhwb3J0IHsgZGIsIGF1dGggfTtcclxuZXhwb3J0IGRlZmF1bHQgY29uZmlnO1xyXG4iLCJleHBvcnQgY29uc3QgQ0FURUdPUklFUyA9IFtcclxuICB7IG5hbWU6IFwiRHJhbWFcIiwgdmFsdWU6IFwiZHJhbWFcIiB9LFxyXG4gIHsgbmFtZTogXCJDb21lZHlcIiwgdmFsdWU6IFwiY29tZWR5XCIgfSxcclxuICB7IG5hbWU6IFwiSG9ycm9yXCIsIHZhbHVlOiBcImhvcnJvclwiIH0sXHJcbiAgeyBuYW1lOiBcIlJvbWFuY2VcIiwgdmFsdWU6IFwicm9tYW5jZVwiIH0sXHJcbiAgeyBuYW1lOiBcIlNjaS1maVwiLCB2YWx1ZTogXCJzY2ktZmlcIiB9LFxyXG4gIHsgbmFtZTogXCJGYW50YXN5XCIsIHZhbHVlOiBcImZhbnRhc3lcIiB9LFxyXG4gIHsgbmFtZTogXCJIdW1vclwiLCB2YWx1ZTogXCJodW1vclwiIH0sXHJcbiAgeyBuYW1lOiBcIkFjdGlvblwiLCB2YWx1ZTogXCJhY3Rpb25cIiB9LFxyXG4gIHsgbmFtZTogXCJUaHJpbGxlclwiLCB2YWx1ZTogXCJ0aHJpbGxlclwiIH0sXHJcbiAgeyBuYW1lOiBcIlN1cGVybmF0dXJhbFwiLCB2YWx1ZTogXCJzdXBlcm5hdHVyYWxcIiB9LFxyXG4gIHsgbmFtZTogXCJBZHZlbnR1cmVcIiwgdmFsdWU6IFwiYWR2ZW50dXJlXCIgfSxcclxuICB7IG5hbWU6IFwiTXlzdGVyeVwiLCB2YWx1ZTogXCJteXN0ZXJ5XCIgfSxcclxuICB7IG5hbWU6IFwiV2VzdGVyblwiLCB2YWx1ZTogXCJ3ZXN0ZXJuXCIgfSxcclxuICB7IG5hbWU6IFwiSGlzdG9yeVwiLCB2YWx1ZTogXCJoaXN0b3J5XCIgfSxcclxuICB7IG5hbWU6IFwiQ3JpbWVcIiwgdmFsdWU6IFwiY3JpbWVcIiB9LFxyXG4gIHsgbmFtZTogXCJGYW5maWN0aW9uXCIsIHZhbHVlOiBcImZhbmZpY3Rpb25cIiB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IENPUFlSSUdIVFMgPSBbXHJcbiAgeyBuYW1lOiBcIlB1YmxpYyBEb21haW5cIiwgdmFsdWU6IFwicHVibGljIGRvbWFpblwiIH0sXHJcbiAgeyBuYW1lOiBcIkFsbCBSaWdodHMgUmVzZXJ2ZWRcIiwgdmFsdWU6IFwiYWxsIHJpZ2h0cyByZXNlcnZlZFwiIH0sXHJcbiAgeyBuYW1lOiBcIkNyZWF0aXZlIENvbW1vbnNcIiwgdmFsdWU6IFwiY3JlYXRpdmUgY29tbW9uc1wiIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgTEFOR1VBR0VTID0gW1xyXG4gIHsgbmFtZTogXCJBZmFyXCIsIHZhbHVlOiBcImFhXCIgfSxcclxuICB7IG5hbWU6IFwiQWJraGF6aWFuXCIsIHZhbHVlOiBcImFiXCIgfSxcclxuICB7IG5hbWU6IFwiQXZlc3RhblwiLCB2YWx1ZTogXCJhZVwiIH0sXHJcbiAgeyBuYW1lOiBcIkFmcmlrYWFuc1wiLCB2YWx1ZTogXCJhZlwiIH0sXHJcbiAgeyBuYW1lOiBcIkFrYW5cIiwgdmFsdWU6IFwiYWtcIiB9LFxyXG4gIHsgbmFtZTogXCJBbWhhcmljXCIsIHZhbHVlOiBcImFtXCIgfSxcclxuICB7IG5hbWU6IFwiQXJhZ29uZXNlXCIsIHZhbHVlOiBcImFuXCIgfSxcclxuICB7IG5hbWU6IFwiQXJhYmljXCIsIHZhbHVlOiBcImFyXCIgfSxcclxuICB7IG5hbWU6IFwiQXNzYW1lc2VcIiwgdmFsdWU6IFwiYXNcIiB9LFxyXG4gIHsgbmFtZTogXCJBdmFyaWNcIiwgdmFsdWU6IFwiYXZcIiB9LFxyXG4gIHsgbmFtZTogXCJBeW1hcmFcIiwgdmFsdWU6IFwiYXlcIiB9LFxyXG4gIHsgbmFtZTogXCJBemVyYmFpamFuaVwiLCB2YWx1ZTogXCJhelwiIH0sXHJcbiAgeyBuYW1lOiBcIkJhc2hraXJcIiwgdmFsdWU6IFwiYmFcIiB9LFxyXG4gIHsgbmFtZTogXCJCZWxhcnVzaWFuXCIsIHZhbHVlOiBcImJlXCIgfSxcclxuICB7IG5hbWU6IFwiQnVsZ2FyaWFuXCIsIHZhbHVlOiBcImJnXCIgfSxcclxuICB7IG5hbWU6IFwiQmloYXJpXCIsIHZhbHVlOiBcImJoXCIgfSxcclxuICB7IG5hbWU6IFwiQmlzbGFtYVwiLCB2YWx1ZTogXCJiaVwiIH0sXHJcbiAgeyBuYW1lOiBcIkJhbWJhcmFcIiwgdmFsdWU6IFwiYm1cIiB9LFxyXG4gIHsgbmFtZTogXCJCZW5nYWxpXCIsIHZhbHVlOiBcImJuXCIgfSxcclxuICB7IG5hbWU6IFwiVGliZXRhblwiLCB2YWx1ZTogXCJib1wiIH0sXHJcbiAgeyBuYW1lOiBcIkJyZXRvblwiLCB2YWx1ZTogXCJiclwiIH0sXHJcbiAgeyBuYW1lOiBcIkJvc25pYW5cIiwgdmFsdWU6IFwiYnNcIiB9LFxyXG4gIHsgbmFtZTogXCJDYXRhbGFuXCIsIHZhbHVlOiBcImNhXCIgfSxcclxuICB7IG5hbWU6IFwiQ2hlY2hlblwiLCB2YWx1ZTogXCJjZVwiIH0sXHJcbiAgeyBuYW1lOiBcIkNoYW1vcnJvXCIsIHZhbHVlOiBcImNoXCIgfSxcclxuICB7IG5hbWU6IFwiQ29yc2ljYW5cIiwgdmFsdWU6IFwiY29cIiB9LFxyXG4gIHsgbmFtZTogXCJDcmVlXCIsIHZhbHVlOiBcImNyXCIgfSxcclxuICB7IG5hbWU6IFwiQ3plY2hcIiwgdmFsdWU6IFwiY3NcIiB9LFxyXG4gIHsgbmFtZTogXCJPbGQgQ2h1cmNoIFNsYXZvbmljXCIsIHZhbHVlOiBcImN1XCIgfSxcclxuICB7IG5hbWU6IFwiQ2h1dmFzaFwiLCB2YWx1ZTogXCJjdlwiIH0sXHJcbiAgeyBuYW1lOiBcIldlbHNoXCIsIHZhbHVlOiBcImN5XCIgfSxcclxuICB7IG5hbWU6IFwiRGFuaXNoXCIsIHZhbHVlOiBcImRhXCIgfSxcclxuICB7IG5hbWU6IFwiR2VybWFuXCIsIHZhbHVlOiBcImRlXCIgfSxcclxuICB7IG5hbWU6IFwiRGl2ZWhpXCIsIHZhbHVlOiBcImR2XCIgfSxcclxuICB7IG5hbWU6IFwiRHpvbmdraGFcdFwiLCB2YWx1ZTogXCJkelwiIH0sXHJcbiAgeyBuYW1lOiBcIkV3ZVwiLCB2YWx1ZTogXCJlZVwiIH0sXHJcbiAgeyBuYW1lOiBcIkdyZWVrXCIsIHZhbHVlOiBcImVsXCIgfSxcclxuICB7IG5hbWU6IFwiRW5nbGlzaFwiLCB2YWx1ZTogXCJlblwiIH0sXHJcbiAgeyBuYW1lOiBcIkVzcGVyYW50b1wiLCB2YWx1ZTogXCJlb1wiIH0sXHJcbiAgeyBuYW1lOiBcIlNwYW5pc2hcIiwgdmFsdWU6IFwiZXNcIiB9LFxyXG4gIHsgbmFtZTogXCJFc3RvbmlhblwiLCB2YWx1ZTogXCJldFwiIH0sXHJcbiAgeyBuYW1lOiBcIkJhc3F1ZVwiLCB2YWx1ZTogXCJldVwiIH0sXHJcbiAgeyBuYW1lOiBcIlBlcnNpYW5cIiwgdmFsdWU6IFwiZmFcIiB9LFxyXG4gIHsgbmFtZTogXCJGdWxhaFwiLCB2YWx1ZTogXCJmZlwiIH0sXHJcbiAgeyBuYW1lOiBcIkZpbm5pc2hcIiwgdmFsdWU6IFwiZmlcIiB9LFxyXG4gIHsgbmFtZTogXCJGaWppYW5cIiwgdmFsdWU6IFwiZmpcIiB9LFxyXG4gIHsgbmFtZTogXCJGYXJvZXNlXCIsIHZhbHVlOiBcImZvXCIgfSxcclxuICB7IG5hbWU6IFwiRnJlbmNoXCIsIHZhbHVlOiBcImZyXCIgfSxcclxuICB7IG5hbWU6IFwiV2VzdGVybiBGcmlzaWFuXCIsIHZhbHVlOiBcImZ5XCIgfSxcclxuICB7IG5hbWU6IFwiSXJpc2hcIiwgdmFsdWU6IFwiZ2FcIiB9LFxyXG4gIHsgbmFtZTogXCJTY290dGlzaCBHYWVsaWNcIiwgdmFsdWU6IFwiZ2RcIiB9LFxyXG4gIHsgbmFtZTogXCJHYWxpY2lhblwiLCB2YWx1ZTogXCJnbFwiIH0sXHJcbiAgeyBuYW1lOiBcIkd1YXJhbmlcIiwgdmFsdWU6IFwiZ25cIiB9LFxyXG4gIHsgbmFtZTogXCJHdWphcmF0aVwiLCB2YWx1ZTogXCJndVwiIH0sXHJcbiAgeyBuYW1lOiBcIk1hbnhcIiwgdmFsdWU6IFwiZ3ZcIiB9LFxyXG4gIHsgbmFtZTogXCJIYXVzYVwiLCB2YWx1ZTogXCJoYVwiIH0sXHJcbiAgeyBuYW1lOiBcIkhlYnJld1wiLCB2YWx1ZTogXCJoZVwiIH0sXHJcbiAgeyBuYW1lOiBcIkhpbmRpXCIsIHZhbHVlOiBcImhpXCIgfSxcclxuICB7IG5hbWU6IFwiSGlyaSBNb3R1XCIsIHZhbHVlOiBcImhvXCIgfSxcclxuICB7IG5hbWU6IFwiQ3JvYXRpYW5cIiwgdmFsdWU6IFwiaHJcIiB9LFxyXG4gIHsgbmFtZTogXCJIYWl0aWFuXCIsIHZhbHVlOiBcImh0XCIgfSxcclxuICB7IG5hbWU6IFwiSHVuZ2FyaWFuXCIsIHZhbHVlOiBcImh1XCIgfSxcclxuICB7IG5hbWU6IFwiQXJtZW5pYW5cIiwgdmFsdWU6IFwiaHlcIiB9LFxyXG4gIHsgbmFtZTogXCJIZXJlcm9cIiwgdmFsdWU6IFwiaHpcIiB9LFxyXG4gIHsgbmFtZTogXCJJbnRlcmxpbmd1YVwiLCB2YWx1ZTogXCJpYVwiIH0sXHJcbiAgeyBuYW1lOiBcIkluZG9uZXNpYW5cIiwgdmFsdWU6IFwiaWRcIiB9LFxyXG4gIHsgbmFtZTogXCJJbnRlcmxpbmd1ZVwiLCB2YWx1ZTogXCJpZVwiIH0sXHJcbiAgeyBuYW1lOiBcIklnYm9cIiwgdmFsdWU6IFwiaWdcIiB9LFxyXG4gIHsgbmFtZTogXCJTaWNodWFuIFlpXCIsIHZhbHVlOiBcImlpXCIgfSxcclxuICB7IG5hbWU6IFwiSW51cGlhcVwiLCB2YWx1ZTogXCJpa1wiIH0sXHJcbiAgeyBuYW1lOiBcIklkb1wiLCB2YWx1ZTogXCJpb1wiIH0sXHJcbiAgeyBuYW1lOiBcIkljZWxhbmRpY1wiLCB2YWx1ZTogXCJpc1wiIH0sXHJcbiAgeyBuYW1lOiBcIkl0YWxpYW5cIiwgdmFsdWU6IFwiaXRcIiB9LFxyXG4gIHsgbmFtZTogXCJJbnVrdGl0dXRcIiwgdmFsdWU6IFwiaXVcIiB9LFxyXG4gIHsgbmFtZTogXCJKYXBhbmVzZVwiLCB2YWx1ZTogXCJqYVwiIH0sXHJcbiAgeyBuYW1lOiBcIkphdmFuZXNlXCIsIHZhbHVlOiBcImp2XCIgfSxcclxuICB7IG5hbWU6IFwiR2VvcmdpYW5cIiwgdmFsdWU6IFwia2FcIiB9LFxyXG4gIHsgbmFtZTogXCJLb25nb1wiLCB2YWx1ZTogXCJrZ1wiIH0sXHJcbiAgeyBuYW1lOiBcIktpa3V5dVwiLCB2YWx1ZTogXCJraVwiIH0sXHJcbiAgeyBuYW1lOiBcIkt3YW55YW1hXCIsIHZhbHVlOiBcImtqXCIgfSxcclxuICB7IG5hbWU6IFwiS2F6YWtoXCIsIHZhbHVlOiBcImtrXCIgfSxcclxuICB7IG5hbWU6IFwiR3JlZW5sYW5kaWNcIiwgdmFsdWU6IFwia2xcIiB9LFxyXG4gIHsgbmFtZTogXCJLaG1lclwiLCB2YWx1ZTogXCJrbVwiIH0sXHJcbiAgeyBuYW1lOiBcIkthbm5hZGFcIiwgdmFsdWU6IFwia25cIiB9LFxyXG4gIHsgbmFtZTogXCJLb3JlYW5cIiwgdmFsdWU6IFwia29cIiB9LFxyXG4gIHsgbmFtZTogXCJLYW51cmlcIiwgdmFsdWU6IFwia3JcIiB9LFxyXG4gIHsgbmFtZTogXCJLYXNobWlyaVwiLCB2YWx1ZTogXCJrc1wiIH0sXHJcbiAgeyBuYW1lOiBcIkt1cmRpc2hcIiwgdmFsdWU6IFwia3VcIiB9LFxyXG4gIHsgbmFtZTogXCJLb21pXCIsIHZhbHVlOiBcImt2XCIgfSxcclxuICB7IG5hbWU6IFwiQ29ybmlzaFwiLCB2YWx1ZTogXCJrd1wiIH0sXHJcbiAgeyBuYW1lOiBcIktpcmdoaXpcIiwgdmFsdWU6IFwia3lcIiB9LFxyXG4gIHsgbmFtZTogXCJMYXRpblwiLCB2YWx1ZTogXCJsYVwiIH0sXHJcbiAgeyBuYW1lOiBcIkx1eGVtYm91cmdpc2hcIiwgdmFsdWU6IFwibGJcIiB9LFxyXG4gIHsgbmFtZTogXCJHYW5kYVwiLCB2YWx1ZTogXCJsZ1wiIH0sXHJcbiAgeyBuYW1lOiBcIkxpbWJ1cmdpc2hcIiwgdmFsdWU6IFwibGlcIiB9LFxyXG4gIHsgbmFtZTogXCJMaW5nYWxhXCIsIHZhbHVlOiBcImxuXCIgfSxcclxuICB7IG5hbWU6IFwiTGFvXCIsIHZhbHVlOiBcImxvXCIgfSxcclxuICB7IG5hbWU6IFwiTGl0aHVhbmlhblwiLCB2YWx1ZTogXCJsdFwiIH0sXHJcbiAgeyBuYW1lOiBcIkx1YmFcIiwgdmFsdWU6IFwibHVcIiB9LFxyXG4gIHsgbmFtZTogXCJMYXR2aWFuXCIsIHZhbHVlOiBcImx2XCIgfSxcclxuICB7IG5hbWU6IFwiTWFsYWdhc3lcIiwgdmFsdWU6IFwibWdcIiB9LFxyXG4gIHsgbmFtZTogXCJNYXJzaGFsbGVzZVwiLCB2YWx1ZTogXCJtaFwiIH0sXHJcbiAgeyBuYW1lOiBcIk3EgW9yaVwiLCB2YWx1ZTogXCJtaVwiIH0sXHJcbiAgeyBuYW1lOiBcIk1hY2Vkb25pYW5cIiwgdmFsdWU6IFwibWtcIiB9LFxyXG4gIHsgbmFtZTogXCJNYWxheWFsYW1cIiwgdmFsdWU6IFwibWxcIiB9LFxyXG4gIHsgbmFtZTogXCJNb25nb2xpYW5cIiwgdmFsdWU6IFwibW5cIiB9LFxyXG4gIHsgbmFtZTogXCJNb2xkYXZpYW5cIiwgdmFsdWU6IFwibW9cIiB9LFxyXG4gIHsgbmFtZTogXCJNYXJhdGhpXCIsIHZhbHVlOiBcIm1yXCIgfSxcclxuICB7IG5hbWU6IFwiTWFsYXlcIiwgdmFsdWU6IFwibXNcIiB9LFxyXG4gIHsgbmFtZTogXCJNYWx0ZXNlXCIsIHZhbHVlOiBcIm10XCIgfSxcclxuICB7IG5hbWU6IFwiQnVybWVzZVwiLCB2YWx1ZTogXCJteVwiIH0sXHJcbiAgeyBuYW1lOiBcIk5hdXJ1XCIsIHZhbHVlOiBcIm5hXCIgfSxcclxuICB7IG5hbWU6IFwiTm9yd2VnaWFuIEJva23DpWxcIiwgdmFsdWU6IFwibmJcIiB9LFxyXG4gIHsgbmFtZTogXCJOb3J0aCBOZGViZWxlXCIsIHZhbHVlOiBcIm5kXCIgfSxcclxuICB7IG5hbWU6IFwiTmVwYWxpXCIsIHZhbHVlOiBcIm5lXCIgfSxcclxuICB7IG5hbWU6IFwiTmRvbmdhXCIsIHZhbHVlOiBcIm5nXCIgfSxcclxuICB7IG5hbWU6IFwiRHV0Y2hcIiwgdmFsdWU6IFwibmxcIiB9LFxyXG4gIHsgbmFtZTogXCJOb3J3ZWdpYW4gTnlub3Jza1wiLCB2YWx1ZTogXCJublwiIH0sXHJcbiAgeyBuYW1lOiBcIk5vcndlZ2lhblwiLCB2YWx1ZTogXCJub1wiIH0sXHJcbiAgeyBuYW1lOiBcIlNvdXRoIE5kZWJlbGVcIiwgdmFsdWU6IFwibnJcIiB9LFxyXG4gIHsgbmFtZTogXCJOYXZham9cIiwgdmFsdWU6IFwibnZcIiB9LFxyXG4gIHsgbmFtZTogXCJDaGljaGV3YVwiLCB2YWx1ZTogXCJueVwiIH0sXHJcbiAgeyBuYW1lOiBcIk9jY2l0YW5cIiwgdmFsdWU6IFwib2NcIiB9LFxyXG4gIHsgbmFtZTogXCJPamlid2FcIiwgdmFsdWU6IFwib2pcIiB9LFxyXG4gIHsgbmFtZTogXCJPcm9tb1wiLCB2YWx1ZTogXCJvbVwiIH0sXHJcbiAgeyBuYW1lOiBcIk9yaXlhXCIsIHZhbHVlOiBcIm9yXCIgfSxcclxuICB7IG5hbWU6IFwiT3NzZXRpYW5cIiwgdmFsdWU6IFwib3NcIiB9LFxyXG4gIHsgbmFtZTogXCJQYW5qYWJpXCIsIHZhbHVlOiBcInBhXCIgfSxcclxuICB7IG5hbWU6IFwiUMSBbGlcIiwgdmFsdWU6IFwicGlcIiB9LFxyXG4gIHsgbmFtZTogXCJQb2xpc2hcIiwgdmFsdWU6IFwicGxcIiB9LFxyXG4gIHsgbmFtZTogXCJQYXNodG9cIiwgdmFsdWU6IFwicHNcIiB9LFxyXG4gIHsgbmFtZTogXCJQb3J0dWd1ZXNlXCIsIHZhbHVlOiBcInB0XCIgfSxcclxuICB7IG5hbWU6IFwiUXVlY2h1YVwiLCB2YWx1ZTogXCJxdVwiIH0sXHJcbiAgeyBuYW1lOiBcIlJldW5pb25lc2VcIiwgdmFsdWU6IFwicmNcIiB9LFxyXG4gIHsgbmFtZTogXCJSb21hbnNoXCIsIHZhbHVlOiBcInJtXCIgfSxcclxuICB7IG5hbWU6IFwiS2lydW5kaVwiLCB2YWx1ZTogXCJyblwiIH0sXHJcbiAgeyBuYW1lOiBcIlJvbWFuaWFuXCIsIHZhbHVlOiBcInJvXCIgfSxcclxuICB7IG5hbWU6IFwiUnVzc2lhblwiLCB2YWx1ZTogXCJydVwiIH0sXHJcbiAgeyBuYW1lOiBcIktpbnlhcndhbmRhXCIsIHZhbHVlOiBcInJ3XCIgfSxcclxuICB7IG5hbWU6IFwiU2Fuc2tyaXRcIiwgdmFsdWU6IFwic2FcIiB9LFxyXG4gIHsgbmFtZTogXCJTYXJkaW5pYW5cIiwgdmFsdWU6IFwic2NcIiB9LFxyXG4gIHsgbmFtZTogXCJTaW5kaGlcIiwgdmFsdWU6IFwic2RcIiB9LFxyXG4gIHsgbmFtZTogXCJOb3J0aGVybiBTYW1pXCIsIHZhbHVlOiBcInNlXCIgfSxcclxuICB7IG5hbWU6IFwiU2FuZ29cIiwgdmFsdWU6IFwic2dcIiB9LFxyXG4gIHsgbmFtZTogXCJTZXJiby1Dcm9hdGlhblwiLCB2YWx1ZTogXCJzaFwiIH0sXHJcbiAgeyBuYW1lOiBcIlNpbmhhbGVzZVwiLCB2YWx1ZTogXCJzaVwiIH0sXHJcbiAgeyBuYW1lOiBcIlNsb3Zha1wiLCB2YWx1ZTogXCJza1wiIH0sXHJcbiAgeyBuYW1lOiBcIlNsb3ZlbmlhblwiLCB2YWx1ZTogXCJzbFwiIH0sXHJcbiAgeyBuYW1lOiBcIlNhbW9hblwiLCB2YWx1ZTogXCJzbVwiIH0sXHJcbiAgeyBuYW1lOiBcIlNob25hXCIsIHZhbHVlOiBcInNuXCIgfSxcclxuICB7IG5hbWU6IFwiU29tYWxpXCIsIHZhbHVlOiBcInNvXCIgfSxcclxuICB7IG5hbWU6IFwiQWxiYW5pYW5cIiwgdmFsdWU6IFwic3FcIiB9LFxyXG4gIHsgbmFtZTogXCJTZXJiaWFuXCIsIHZhbHVlOiBcInNyXCIgfSxcclxuICB7IG5hbWU6IFwiU3dhdGlcIiwgdmFsdWU6IFwic3NcIiB9LFxyXG4gIHsgbmFtZTogXCJTb3Rob1wiLCB2YWx1ZTogXCJzdFwiIH0sXHJcbiAgeyBuYW1lOiBcIlN1bmRhbmVzZVwiLCB2YWx1ZTogXCJzdVwiIH0sXHJcbiAgeyBuYW1lOiBcIlN3ZWRpc2hcIiwgdmFsdWU6IFwic3ZcIiB9LFxyXG4gIHsgbmFtZTogXCJTd2FoaWxpXCIsIHZhbHVlOiBcInN3XCIgfSxcclxuICB7IG5hbWU6IFwiVGFtaWxcIiwgdmFsdWU6IFwidGFcIiB9LFxyXG4gIHsgbmFtZTogXCJUZWx1Z3VcIiwgdmFsdWU6IFwidGVcIiB9LFxyXG4gIHsgbmFtZTogXCJUYWppa1wiLCB2YWx1ZTogXCJ0Z1wiIH0sXHJcbiAgeyBuYW1lOiBcIlRoYWlcIiwgdmFsdWU6IFwidGhcIiB9LFxyXG4gIHsgbmFtZTogXCJUaWdyaW55YVwiLCB2YWx1ZTogXCJ0aVwiIH0sXHJcbiAgeyBuYW1lOiBcIlR1cmttZW5cIiwgdmFsdWU6IFwidGtcIiB9LFxyXG4gIHsgbmFtZTogXCJUYWdhbG9nXCIsIHZhbHVlOiBcInRsXCIgfSxcclxuICB7IG5hbWU6IFwiVHN3YW5hXCIsIHZhbHVlOiBcInRuXCIgfSxcclxuICB7IG5hbWU6IFwiVG9uZ2FcIiwgdmFsdWU6IFwidG9cIiB9LFxyXG4gIHsgbmFtZTogXCJUdXJraXNoXCIsIHZhbHVlOiBcInRyXCIgfSxcclxuICB7IG5hbWU6IFwiVHNvbmdhXCIsIHZhbHVlOiBcInRzXCIgfSxcclxuICB7IG5hbWU6IFwiVGF0YXJcIiwgdmFsdWU6IFwidHRcIiB9LFxyXG4gIHsgbmFtZTogXCJUd2lcIiwgdmFsdWU6IFwidHdcIiB9LFxyXG4gIHsgbmFtZTogXCJUYWhpdGlhblwiLCB2YWx1ZTogXCJ0eVwiIH0sXHJcbiAgeyBuYW1lOiBcIlVpZ2h1clwiLCB2YWx1ZTogXCJ1Z1wiIH0sXHJcbiAgeyBuYW1lOiBcIlVrcmFpbmlhblwiLCB2YWx1ZTogXCJ1a1wiIH0sXHJcbiAgeyBuYW1lOiBcIlVyZHVcIiwgdmFsdWU6IFwidXJcIiB9LFxyXG4gIHsgbmFtZTogXCJVemJla1wiLCB2YWx1ZTogXCJ1elwiIH0sXHJcbiAgeyBuYW1lOiBcIlZlbmRhXCIsIHZhbHVlOiBcInZlXCIgfSxcclxuICB7IG5hbWU6IFwiVmnDqnQgTmFtZXNlXCIsIHZhbHVlOiBcInZpXCIgfSxcclxuICB7IG5hbWU6IFwiVm9sYXDDvGtcIiwgdmFsdWU6IFwidm9cIiB9LFxyXG4gIHsgbmFtZTogXCJXYWxsb29uXCIsIHZhbHVlOiBcIndhXCIgfSxcclxuICB7IG5hbWU6IFwiV29sb2ZcIiwgdmFsdWU6IFwid29cIiB9LFxyXG4gIHsgbmFtZTogXCJYaG9zYVwiLCB2YWx1ZTogXCJ4aFwiIH0sXHJcbiAgeyBuYW1lOiBcIllpZGRpc2hcIiwgdmFsdWU6IFwieWlcIiB9LFxyXG4gIHsgbmFtZTogXCJZb3J1YmFcIiwgdmFsdWU6IFwieW9cIiB9LFxyXG4gIHsgbmFtZTogXCJaaHVhbmdcIiwgdmFsdWU6IFwiemFcIiB9LFxyXG4gIHsgbmFtZTogXCJDaGluZXNlXCIsIHZhbHVlOiBcInpoXCIgfSxcclxuICB7IG5hbWU6IFwiWnVsdVwiLCB2YWx1ZTogXCJ6dVwiIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgU1RBVFVTID0gW1xyXG4gIHsgbmFtZTogXCJJbiBQcm9ncmVzc1wiLCB2YWx1ZTogXCJpbiBwcm9ncmVzc1wiIH0sXHJcbiAgeyBuYW1lOiBcIkluIEhpYXR1c1wiLCB2YWx1ZTogXCJpbiBoaWF0dXNcIiB9LFxyXG4gIHsgbmFtZTogXCJDb21wbGV0ZWRcIiwgdmFsdWU6IFwiY29tcGxldGVkXCIgfSxcclxuXTtcclxuXHJcbi8vIFRZUEVTXHJcbmV4cG9ydCBjb25zdCBHRVRfUFJPRklMRSA9IFwiR0VUX1BST0ZJTEVcIjtcclxuZXhwb3J0IGNvbnN0IExPR0lOID0gXCJMT0dJTlwiO1xyXG5leHBvcnQgY29uc3QgUkVHSVNURVIgPSBcIlJFR0lTVEVSXCI7XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX1NUT1JZID0gXCJHRVRfU1RPUllcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9DSEFQVEVSUyA9IFwiR0VUX0NIQVBURVJTXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfVVNFUl9TVE9SSUVTID0gXCJHRVRfVVNFUl9TVE9SSUVTXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfRkFWT1JJVEVfU1RPUklFUyA9IFwiR0VUX0ZBVk9SSVRFX1NUT1JJRVNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfVVNFUl9DSEFSQUNURVJTID0gXCJHRVRfVVNFUl9DSEFSQUNURVJTXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfRkFWT1JJVEVfQ0hBUkFDVEVSUyA9IFwiR0VUX0ZBVk9SSVRFX0NIQVJBQ1RFUlNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfRkFWT1JJVEVfQVVUSE9SUyA9IFwiR0VUX0ZBVk9SSVRFX0FVVEhPUlNcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9GT0xMT1dFUlMgPSBcIkdFVF9GT0xMT1dFUlNcIjtcclxuIiwiZXhwb3J0IGNvbnN0IGNhcGl0YWxpemVGaXJzdExldHRlciA9IChzdHJpbmcpID0+XHJcbiAgc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2FwcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9hdXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2ZpcmVzdG9yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9