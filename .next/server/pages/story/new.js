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

/***/ "./components/common/Loader.js":
/*!*************************************!*\
  !*** ./components/common/Loader.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\components\\common\\Loader.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Loader = () => {
  return __jsx("div", {
    className: "loader-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "loader",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Loader);

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
  form
}) => {
  const [loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const [imageUrl, setImageUrl] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("");

  const handleChange = info => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }

    if (info.file.status === "done") {
      form.setFieldsValue({
        banner: info.file.originFileObj
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
    name: "banner",
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
        onClick: e => console.log(e, "custom removeIcon event"),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 15
        }
      })
    },
    name: "cover",
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
      lineNumber: 68,
      columnNumber: 13
    }
  }) : uploadButton)), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    label: "Image Copyright",
    name: "imageCopyright",
    rules: [{
      required: form.getFieldValue("banner") ? true : false,
      message: "An image copyright is required"
    }],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var is_image_url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! is-image-url */ "is-image-url");
/* harmony import */ var is_image_url__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(is_image_url__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/constants */ "./utils/constants.js");
/* harmony import */ var _hooks_userHooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/userHooks */ "./hooks/userHooks.js");
/* harmony import */ var _redux_actions_charactersActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../redux/actions/charactersActions */ "./redux/actions/charactersActions.js");
/* harmony import */ var _redux_actions_storiesActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../redux/actions/storiesActions */ "./redux/actions/storiesActions.js");
/* harmony import */ var _components_forms_Tags__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/forms/Tags */ "./components/forms/Tags.js");
/* harmony import */ var _components_forms_UploadImage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/forms/UploadImage */ "./components/forms/UploadImage.js");
/* harmony import */ var _components_common_Loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/common/Loader */ "./components/common/Loader.js");
/* harmony import */ var _components_forms_RadioButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/forms/RadioButton */ "./components/forms/RadioButton.js");
var _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\pages\\story\\new.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














const {
  Option
} = antd__WEBPACK_IMPORTED_MODULE_1__["Select"];

const NewStory = props => {
  var _form$getFieldValue3, _props$characters$fil;

  const auth = Object(_hooks_userHooks__WEBPACK_IMPORTED_MODULE_6__["useAuth"])();
  const [form] = antd__WEBPACK_IMPORTED_MODULE_1__["Form"].useForm();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const [linkVisible, setLinkVisible] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const [uploadVisible, setUploadVisible] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const [mature, setMature] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const [visibility, setVisibility] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(true);
  const [currentChar, setCurrentChar] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("");

  const addCharacter = () => {
    var _form$getFieldValue, _form$getFieldValue2;

    if (currentChar && ((_form$getFieldValue = form.getFieldValue("mainCharacters")) === null || _form$getFieldValue === void 0 ? void 0 : _form$getFieldValue.indexOf(currentChar)) === -1 && ((_form$getFieldValue2 = form.getFieldValue("mainCharacters")) === null || _form$getFieldValue2 === void 0 ? void 0 : _form$getFieldValue2.length) < 5) {
      form.setFieldsValue({
        mainCharacters: [...form.getFieldValue("mainCharacters"), currentChar]
      });
    }

    setCurrentChar("");
    form.setFieldsValue({
      currentChar: ""
    });
  };

  const submit = values => {
    delete values.currentChar;
    props.addStory(_objectSpread(_objectSpread({}, values), {}, {
      authorName: auth.user.username,
      banner: form.getFieldValue("banner") ? form.getFieldValue("banner") : ""
    }));
  };

  const onFailed = error => {
    window.scrollTo(0, 0);
    antd__WEBPACK_IMPORTED_MODULE_1__["message"].error("There are some errors");
  };

  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    if (auth.user) {
      props.getUserCharacters();
    }
  }, [auth]);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    form.setFieldsValue({
      mature
    });
  }, [mature]);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    form.setFieldsValue({
      public: visibility
    });
  }, [visibility]);

  const filterSort = (a, b) => {
    const keyA = a.name,
          keyB = b.name;
    if (keyA < keyB) return -1;
    if (keyA > keyB) return 1;
    return 0;
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

  return auth.isLoading ? __jsx(_components_common_Loader__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 5
    }
  }) : auth.user.uid ? __jsx("div", {
    className: "new-story custom-form",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "inner",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }
  }, __jsx("h2", {
    className: "side-heading",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 9
    }
  }, "Add a new story"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    layout: "vertical",
    scrollToFirstError: true,
    onFinishFailed: onFailed,
    onFinish: submit,
    form: form,
    initialValues: {
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
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    gutter: [24, 24],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
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
      lineNumber: 124,
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
      lineNumber: 125,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
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
      lineNumber: 140,
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
      lineNumber: 141,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    mode: "multiple",
    allowClear: true,
    maxTagCount: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 17
    }
  }, _utils_constants__WEBPACK_IMPORTED_MODULE_5__["CATEGORIES"] === null || _utils_constants__WEBPACK_IMPORTED_MODULE_5__["CATEGORIES"] === void 0 ? void 0 : _utils_constants__WEBPACK_IMPORTED_MODULE_5__["CATEGORIES"].sort((a, b) => {
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
      lineNumber: 165,
      columnNumber: 21
    }
  }, cat.name)))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    gutter: [24, 24],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
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
      lineNumber: 174,
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
      lineNumber: 175,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    filterSort: filterSort,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 17
    }
  }, _utils_constants__WEBPACK_IMPORTED_MODULE_5__["LANGUAGES"] === null || _utils_constants__WEBPACK_IMPORTED_MODULE_5__["LANGUAGES"] === void 0 ? void 0 : _utils_constants__WEBPACK_IMPORTED_MODULE_5__["LANGUAGES"].map(lang => __jsx(Option, {
    value: lang.value,
    key: lang.value,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
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
      lineNumber: 194,
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
      lineNumber: 195,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 17
    }
  }, _utils_constants__WEBPACK_IMPORTED_MODULE_5__["STATUS"].map(stat => __jsx(Option, {
    value: stat.value,
    key: stat.value,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
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
      lineNumber: 214,
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
      lineNumber: 215,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 17
    }
  }, _utils_constants__WEBPACK_IMPORTED_MODULE_5__["COPYRIGHTS"].map(copy => __jsx(Option, {
    value: copy.value,
    key: copy.value,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
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
      lineNumber: 235,
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
      lineNumber: 245,
      columnNumber: 13
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    justify: "space-between",
    gutter: [24, 24],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 11
    }
  }, __jsx(_components_forms_RadioButton__WEBPACK_IMPORTED_MODULE_12__["default"], {
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
      lineNumber: 252,
      columnNumber: 13
    }
  }), __jsx(_components_forms_RadioButton__WEBPACK_IMPORTED_MODULE_12__["default"], {
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
      lineNumber: 266,
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
      lineNumber: 280,
      columnNumber: 13
    }
  }, __jsx(_components_forms_Tags__WEBPACK_IMPORTED_MODULE_9__["default"], {
    form: form,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 15
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 11
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "mainCharacters",
    label: "Main Characters",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    gutter: [24, 24],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: 12,
    md: 24,
    sm: 24,
    xs: 24,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    gutter: 16,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 22,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 19
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "currentChar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 21
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    disabled: ((_form$getFieldValue3 = form.getFieldValue("mainCharacters")) === null || _form$getFieldValue3 === void 0 ? void 0 : _form$getFieldValue3.length) >= 5 ? true : false,
    onChange: val => setCurrentChar(val),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 23
    }
  }, __jsx(Option, {
    value: "none",
    disabled: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 25
    }
  }, "Choose"), (_props$characters$fil = props.characters.filter(c => {
    var _form$getFieldValue4;

    return ((_form$getFieldValue4 = form.getFieldValue("mainCharacters")) === null || _form$getFieldValue4 === void 0 ? void 0 : _form$getFieldValue4.indexOf(c.id)) === -1;
  })) === null || _props$characters$fil === void 0 ? void 0 : _props$characters$fil.sort((a, b) => {
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
      lineNumber: 318,
      columnNumber: 29
    }
  }, `${char.firstname} ${char.lastname}`))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "select-add-input-iconbox",
    onClick: addCharacter,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 21
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
      columnNumber: 23
    }
  }, "+"))), __jsx("small", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 19
    }
  }, "You can add up to 5 main characters"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: 12,
    md: 24,
    sm: 24,
    xs: 24,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    gutter: [16, 24],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338,
      columnNumber: 17
    }
  }, props.characters.filter(c => {
    var _form$getFieldValue5;

    return ((_form$getFieldValue5 = form.getFieldValue("mainCharacters")) === null || _form$getFieldValue5 === void 0 ? void 0 : _form$getFieldValue5.indexOf(c.id)) !== -1;
  }).map(char => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 12,
    sm: 24,
    key: char.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346,
      columnNumber: 23
    }
  }, __jsx("div", {
    key: char.id,
    className: "main-selected",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "main-avatar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348,
      columnNumber: 27
    }
  }, __jsx("img", {
    src: char.image,
    alt: char.firstname,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 349,
      columnNumber: 29
    }
  })), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351,
      columnNumber: 27
    }
  }, `${char.firstname} ${char.lastname}`, " "), __jsx("ion-icon", {
    onClick: () => removeCharacter(char.id),
    name: "close-circle",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352,
      columnNumber: 27
    }
  })))))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363,
      columnNumber: 11
    }
  }), !uploadVisible && !linkVisible && __jsx("div", {
    className: "upload-btns",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365,
      columnNumber: 13
    }
  }, __jsx("button", {
    onClick: showUpload,
    type: "button",
    className: "upload-btn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 366,
      columnNumber: 15
    }
  }, "Upload a cover"), __jsx("button", {
    onClick: showLink,
    type: "button",
    className: "upload-btn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370,
      columnNumber: 15
    }
  }, "Submit a link to a cover")), uploadVisible && __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    align: "bottom",
    gutter: [24, 24],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 376,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 12,
    sm: 24,
    xs: 24,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377,
      columnNumber: 15
    }
  }, __jsx(_components_forms_UploadImage__WEBPACK_IMPORTED_MODULE_10__["default"], {
    form: form,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378,
      columnNumber: 17
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 12,
    sm: 24,
    xs: 24,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 380,
      columnNumber: 15
    }
  }, __jsx("button", {
    onClick: showLink,
    type: "button",
    className: "upload-btn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 381,
      columnNumber: 17
    }
  }, "OR Submit a link to a cover"))), linkVisible && __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    align: "bottom",
    gutter: [24, 24],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 24,
    xs: 24,
    md: 12,
    lg: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 389,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    rules: [{
      type: "url",
      message: "This field must be a valid url."
    }, () => ({
      validator(_, value) {
        if (is_image_url__WEBPACK_IMPORTED_MODULE_4___default()(value)) {
          return Promise.resolve();
        }

        return Promise.reject(new Error("The link needs to be an image"));
      }

    })],
    label: "Submit a link to your image",
    name: "banner",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 390,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 410,
      columnNumber: 19
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 12,
    sm: 24,
    xs: 24,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 413,
      columnNumber: 15
    }
  }, __jsx("button", {
    onClick: showUpload,
    type: "button",
    className: "upload-btn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 414,
      columnNumber: 17
    }
  }, "Upload a cover"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 424,
      columnNumber: 11
    }
  }), props.loading || props.storyId ? __jsx("button", {
    disabled: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 426,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Spin"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 427,
      columnNumber: 15
    }
  })) : __jsx("button", {
    type: "submit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430,
      columnNumber: 13
    }
  }, "Create")))) : router.push("/auth");
};

const mapStateToProps = state => ({
  characters: state.characters.userCharacters,
  confirmMessage: state.stories.message,
  storyId: state.stories.storyId,
  loading: state.stories.loadingStory
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, {
  getUserCharacters: _redux_actions_charactersActions__WEBPACK_IMPORTED_MODULE_7__["getUserCharacters"],
  addStory: _redux_actions_storiesActions__WEBPACK_IMPORTED_MODULE_8__["addStory"]
})(NewStory));

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

/***/ "./redux/actions/storiesActions.js":
/*!*****************************************!*\
  !*** ./redux/actions/storiesActions.js ***!
  \*****************************************/
/*! exports provided: getStory, addStory, getChapters, getStoryCharacters, getUserStories, getFavoriteStories */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStory", function() { return getStory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addStory", function() { return addStory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChapters", function() { return getChapters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStoryCharacters", function() { return getStoryCharacters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserStories", function() { return getUserStories; });
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
    dispatch({
      type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["GET_STORY"],
      payload: _objectSpread(_objectSpread({}, doc.data()), {}, {
        id: doc.id
      })
    });
  });
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
            storyId: res.id
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
            storyId: res.id
          }
        });
      }, 1000);
    }).catch(err => {
      antd__WEBPACK_IMPORTED_MODULE_3__["message"].error(err.message);
    });
  }
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
/*! exports provided: CATEGORIES, COPYRIGHTS, LANGUAGES, STATUS, GET_PROFILE, LOGIN, REGISTER, GET_STORY, GET_CHAPTERS, GET_USER_STORIES, GET_FAVORITE_STORIES, ADD_STORY, GET_USER_CHARACTERS, GET_FAVORITE_CHARACTERS, GET_FAVORITE_AUTHORS, GET_FOLLOWERS */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_STORY", function() { return ADD_STORY; });
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
const ADD_STORY = "ADD_STORY";
const GET_USER_CHARACTERS = "GET_USER_CHARACTERS";
const GET_FAVORITE_CHARACTERS = "GET_FAVORITE_CHARACTERS";
const GET_FAVORITE_AUTHORS = "GET_FAVORITE_AUTHORS";
const GET_FOLLOWERS = "GET_FOLLOWERS";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb21tb24vTG9hZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZm9ybXMvUmFkaW9CdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mb3Jtcy9UYWdzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZm9ybXMvVXBsb2FkSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vaG9va3MvdXNlckhvb2tzLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL3N0b3J5L25ldy5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25zL2NoYXJhY3RlcnNBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3JlZHV4L2FjdGlvbnMvc3Rvcmllc0FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvZmJDb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbnQtZGVzaWduL2ljb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL2FwcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL2F1dGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9maXJlc3RvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9zdG9yYWdlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaXMtaW1hZ2UtdXJsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiXSwibmFtZXMiOlsiTG9hZGVyIiwiUmFkaW9CdXRvbiIsImxnIiwic20iLCJ4cyIsIm1kIiwibmFtZSIsImxhYmVsIiwibnVtMSIsIm51bTIiLCJsYWJlbDEiLCJsYWJlbDIiLCJmb3JtIiwic2V0RnVuYyIsInZhbCIsIlRhZ3MiLCJpbnB1dEJ1dHRvbiIsIlJlYWN0IiwidXNlUmVmIiwiZWRpdElucHV0QnV0dG9uIiwiaW5wdXRWaXNpYmxlIiwic2V0SW5wdXRWaXNpYmxlIiwidXNlU3RhdGUiLCJpbnB1dFZhbHVlIiwic2V0SW5wdXRWYWx1ZSIsImVkaXRJbnB1dEluZGV4Iiwic2V0RWRpdElucHV0SW5kZXgiLCJlZGl0SW5wdXRWYWx1ZSIsInNldEVkaXRJbnB1dFZhbHVlIiwiaGFuZGxlQ2xvc2UiLCJyZW1vdmVkVGFnIiwic2V0RmllbGRzVmFsdWUiLCJ0YWdzIiwiZ2V0RmllbGRWYWx1ZSIsImZpbHRlciIsInRhZyIsInNob3dJbnB1dCIsImN1cnJlbnQiLCJmb2N1cyIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlSW5wdXRDb25maXJtIiwibmV3VGFncyIsImluZGV4T2YiLCJoYW5kbGVFZGl0SW5wdXRDaGFuZ2UiLCJoYW5kbGVFZGl0SW5wdXRDb25maXJtIiwia2V5UHJlc3MiLCJjb25zb2xlIiwibG9nIiwia2V5IiwibWFwIiwiaSIsImlzTG9uZ1RhZyIsImxlbmd0aCIsIlRhZ0VsZW0iLCJwcmV2ZW50RGVmYXVsdCIsInNsaWNlIiwiZ2V0QmFzZTY0IiwiaW1nIiwiY2FsbGJhY2siLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlc3VsdCIsInJlYWRBc0RhdGFVUkwiLCJiZWZvcmVVcGxvYWQiLCJmaWxlIiwiaXNKcGdPclBuZyIsInR5cGUiLCJtZXNzYWdlIiwiZXJyb3IiLCJpc0x0Mk0iLCJzaXplIiwiVXBsb2FkSW1hZ2UiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImltYWdlVXJsIiwic2V0SW1hZ2VVcmwiLCJoYW5kbGVDaGFuZ2UiLCJpbmZvIiwic3RhdHVzIiwiYmFubmVyIiwib3JpZ2luRmlsZU9iaiIsInVwbG9hZEJ1dHRvbiIsIm1hcmdpblRvcCIsInNob3dSZW1vdmVJY29uIiwicmVtb3ZlSWNvbiIsIndpZHRoIiwiaGVpZ2h0Iiwib2JqZWN0Rml0IiwicmVxdWlyZWQiLCJhdXRoQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJQcm92aWRlQXV0aCIsImNoaWxkcmVuIiwiYXV0aCIsInVzZVByb3ZpZGVBdXRoIiwidXNlQXV0aCIsInVzZUNvbnRleHQiLCJ1c2VyIiwic2V0VXNlciIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsInNpZ25pbiIsImVtYWlsIiwicGFzc3dvcmQiLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsInRoZW4iLCJyZXNwb25zZSIsInNpZ251cCIsInVzZXJuYW1lIiwiY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwiZGIiLCJjb2xsZWN0aW9uIiwiYWRkIiwiYmFkZ2VzIiwiYmlvZ3JhcGh5IiwiY3JlYXRlZEF0IiwiZmlyZWJhc2UiLCJmaXJlc3RvcmUiLCJGaWVsZFZhbHVlIiwic2VydmVyVGltZXN0YW1wIiwic3VzcGVuZGVkIiwiZmFjZWJvb2siLCJpbnN0YWdyYW0iLCJ0d2l0dGVyIiwiZGV2aWFudGFydCIsImxpa2VzQ291bnQiLCJpbWFnZSIsInNpZ25vdXQiLCJzaWduT3V0Iiwic2VuZFBhc3N3b3JkUmVzZXRFbWFpbCIsImNvbmZpcm1QYXNzd29yZFJlc2V0IiwiY29kZSIsInVzZUVmZmVjdCIsInVuc3Vic2NyaWJlIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwidWlkIiwiZG9jIiwib25TbmFwc2hvdCIsImRhdGEiLCJPcHRpb24iLCJTZWxlY3QiLCJOZXdTdG9yeSIsInByb3BzIiwiRm9ybSIsInVzZUZvcm0iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJsaW5rVmlzaWJsZSIsInNldExpbmtWaXNpYmxlIiwidXBsb2FkVmlzaWJsZSIsInNldFVwbG9hZFZpc2libGUiLCJtYXR1cmUiLCJzZXRNYXR1cmUiLCJ2aXNpYmlsaXR5Iiwic2V0VmlzaWJpbGl0eSIsImN1cnJlbnRDaGFyIiwic2V0Q3VycmVudENoYXIiLCJhZGRDaGFyYWN0ZXIiLCJtYWluQ2hhcmFjdGVycyIsInN1Ym1pdCIsInZhbHVlcyIsImFkZFN0b3J5IiwiYXV0aG9yTmFtZSIsIm9uRmFpbGVkIiwid2luZG93Iiwic2Nyb2xsVG8iLCJnZXRVc2VyQ2hhcmFjdGVycyIsInB1YmxpYyIsImZpbHRlclNvcnQiLCJhIiwiYiIsImtleUEiLCJrZXlCIiwic2hvd0xpbmsiLCJzaG93VXBsb2FkIiwic3VtbWFyeSIsInRpdGxlIiwiY2F0ZWdvcmllcyIsImNvcHlyaWdodCIsImxhbmd1YWdlIiwiaW1hZ2VDb3B5cmlnaHQiLCJtYXgiLCJDQVRFR09SSUVTIiwic29ydCIsImNhdCIsIkxBTkdVQUdFUyIsImxhbmciLCJTVEFUVVMiLCJzdGF0IiwiQ09QWVJJR0hUUyIsImNvcHkiLCJtaW5Sb3dzIiwiY2hhcmFjdGVycyIsImMiLCJpZCIsImZpcnN0bmFtZSIsImNoYXIiLCJsYXN0bmFtZSIsInJlbW92ZUNoYXJhY3RlciIsInZhbGlkYXRvciIsIl8iLCJpc0ltYWdlVXJsIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJFcnJvciIsInN0b3J5SWQiLCJwdXNoIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJ1c2VyQ2hhcmFjdGVycyIsImNvbmZpcm1NZXNzYWdlIiwic3RvcmllcyIsImxvYWRpbmdTdG9yeSIsImNvbm5lY3QiLCJkaXNwYXRjaCIsIndoZXJlIiwiY3VycmVudFVzZXIiLCJnZXQiLCJkb2NzIiwiaXRlbXMiLCJmb3JFYWNoIiwiR0VUX1VTRVJfQ0hBUkFDVEVSUyIsInBheWxvYWQiLCJnZXRGYXZvcml0ZUNoYXJhY3RlcnMiLCJmYXZBcnIiLCJjaGFyYWN0ZXJJZCIsInVzZXJzIiwiYWxsIiwicmVzIiwiZmF2VXNlcnMiLCJHRVRfRkFWT1JJVEVfQ0hBUkFDVEVSUyIsImdldFN0b3J5IiwiR0VUX1NUT1JZIiwiQUREX1NUT1JZIiwiaW1hZ2VOYW1lIiwidG9Mb3dlckNhc2UiLCJzcGxpdCIsImpvaW4iLCJzdG9yYWdlIiwicmVmIiwicHV0IiwiY2hpbGQiLCJnZXREb3dubG9hZFVSTCIsInVybCIsImF1dGhvcklkIiwib25lU2hvdCIsImNoYXB0ZXJzQ291bnQiLCJsb2NhdGlvbnNDb3VudCIsInNlY29uZGFyeUNoYXJhY3RlcnMiLCJmZWF0dXJlZCIsIm5vdGUiLCJzdWNjZXNzIiwic2V0VGltZW91dCIsIlJvdXRlciIsImNhdGNoIiwiZXJyIiwiZ2V0Q2hhcHRlcnMiLCJvcmRlckJ5IiwiYXJyIiwibnVtYmVyIiwiY29tbWVudHNDb3VudCIsIkdFVF9DSEFQVEVSUyIsImdldFN0b3J5Q2hhcmFjdGVycyIsImdldFVzZXJTdG9yaWVzIiwiR0VUX1VTRVJfU1RPUklFUyIsImdldEZhdm9yaXRlU3RvcmllcyIsIkdFVF9GQVZPUklURV9TVE9SSUVTIiwicHJvZENvbmZpZyIsImFwaUtleSIsInByb2Nlc3MiLCJhdXRoRG9tYWluIiwiZGF0YWJhc2VVUkwiLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIkZJUkVCQVNFX0FQUF9JRCIsImRldkNvbmZpZyIsImNvbmZpZyIsImFwcHMiLCJpbml0aWFsaXplQXBwIiwiR0VUX1BST0ZJTEUiLCJMT0dJTiIsIlJFR0lTVEVSIiwiR0VUX0ZBVk9SSVRFX0FVVEhPUlMiLCJHRVRfRk9MTE9XRVJTIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdE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b0MsT0FBSyxFQUFFO0FBQTFCLENBM0h1QixFQTRIdkI7QUFBRXBDLE1BQUksRUFBRSxRQUFSO0FBQWtCb0MsT0FBSyxFQUFFO0FBQXpCLENBNUh1QixFQTZIdkI7QUFBRXBDLE1BQUksRUFBRSxPQUFSO0FBQWlCb0MsT0FBSyxFQUFFO0FBQXhCLENBN0h1QixFQThIdkI7QUFBRXBDLE1BQUksRUFBRSxPQUFSO0FBQWlCb0MsT0FBSyxFQUFFO0FBQXhCLENBOUh1QixFQStIdkI7QUFBRXBDLE1BQUksRUFBRSxVQUFSO0FBQW9Cb0MsT0FBSyxFQUFFO0FBQTNCLENBL0h1QixFQWdJdkI7QUFBRXBDLE1BQUksRUFBRSxTQUFSO0FBQW1Cb0MsT0FBSyxFQUFFO0FBQTFCLENBaEl1QixFQWlJdkI7QUFBRXBDLE1BQUksRUFBRSxNQUFSO0FBQWdCb0MsT0FBSyxFQUFFO0FBQXZCLENBakl1QixFQWtJdkI7QUFBRXBDLE1BQUksRUFBRSxRQUFSO0FBQWtCb0MsT0FBSyxFQUFFO0FBQXpCLENBbEl1QixFQW1JdkI7QUFBRXBDLE1BQUksRUFBRSxRQUFSO0FBQWtCb0MsT0FBSyxFQUFFO0FBQXpCLENBbkl1QixFQW9JdkI7QUFBRXBDLE1BQUksRUFBRSxZQUFSO0FBQXNCb0MsT0FBSyxFQUFFO0FBQTdCLENBcEl1QixFQXFJdkI7QUFBRXBDLE1BQUksRUFBRSxTQUFSO0FBQW1Cb0MsT0FBSyxFQUFFO0FBQTFCLENBckl1QixFQXNJdkI7QUFBRXBDLE1BQUksRUFBRSxZQUFSO0FBQXNCb0MsT0FBSyxFQUFFO0FBQTdCLENBdEl1QixFQXVJdkI7QUFBRXBDLE1BQUksRUFBRSxTQUFSO0FBQW1Cb0MsT0FBSyxFQUFFO0FBQTFCLENBdkl1QixFQXdJdkI7QUFBRXBDLE1BQUksRUFBRSxTQUFSO0FBQW1Cb0MsT0FBSyxFQUFFO0FBQTFCLENBeEl1QixFQXlJdkI7QUFBRXBDLE1BQUksRUFBRSxVQUFSO0FBQW9Cb0MsT0FBSyxFQUFFO0FBQTNCLENBekl1QixFQTBJdkI7QUFBRXBDLE1BQUksRUFBRSxTQUFSO0FBQW1C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Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0MiLCJmaWxlIjoicGFnZXMvc3RvcnkvbmV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9zdG9yeS9uZXcuanNcIik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBMb2FkZXIgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGVyLWNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRlclwiPlxyXG4gICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2FkZXI7XHJcbiIsImltcG9ydCB7IENvbCwgU3BhY2UsIEZvcm0sIFJhZGlvIH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmNvbnN0IFJhZGlvQnV0b24gPSAoe1xyXG4gIGxnLFxyXG4gIHNtLFxyXG4gIHhzLFxyXG4gIG1kLFxyXG4gIG5hbWUsXHJcbiAgbGFiZWwsXHJcbiAgbnVtMSxcclxuICBudW0yLFxyXG4gIGxhYmVsMSxcclxuICBsYWJlbDIsXHJcbiAgZm9ybSxcclxuICBzZXRGdW5jLFxyXG4gIHZhbCxcclxufSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q29sIGxnPXtsZ30gbWQ9e21kfSBzbT17c219IHhzPXt4c30+XHJcbiAgICAgIDxGb3JtLkl0ZW0gbmFtZT17bmFtZX0gbGFiZWw9e2xhYmVsfT5cclxuICAgICAgICA8ZmllbGRzZXQgaWQ9e25hbWV9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYWRpb1wiPlxyXG4gICAgICAgICAgICA8UmFkaW8uR3JvdXA+XHJcbiAgICAgICAgICAgICAgPFNwYWNlIHNpemU9ezMyfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmFkaW9fXzFcIj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9e2ByYWRpby0ke251bTF9YH1cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBzZXRGdW5jKHRydWUpfVxyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3ZhbCA/IHRydWUgOiBmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e2ByYWRpby0ke251bTF9YH0+PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPHA+e2xhYmVsMX08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmFkaW9fXzJcIj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9e2ByYWRpby0ke251bTJ9YH1cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gc2V0RnVuYyhmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dmFsID8gZmFsc2UgOiB0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17YHJhZGlvLSR7bnVtMn1gfT48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8cD57bGFiZWwyfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvU3BhY2U+XHJcbiAgICAgICAgICAgIDwvUmFkaW8uR3JvdXA+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2ZpZWxkc2V0PlxyXG4gICAgICA8L0Zvcm0uSXRlbT5cclxuICAgIDwvQ29sPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSYWRpb0J1dG9uO1xyXG4iLCJpbXBvcnQgeyBUYWcsIFRvb2x0aXAsIEZvcm0gfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyBQbHVzT3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuXHJcbmNvbnN0IFRhZ3MgPSAoeyBmb3JtIH0pID0+IHtcclxuICBjb25zdCBpbnB1dEJ1dHRvbiA9IFJlYWN0LnVzZVJlZigpO1xyXG4gIGNvbnN0IGVkaXRJbnB1dEJ1dHRvbiA9IFJlYWN0LnVzZVJlZigpO1xyXG4gIGNvbnN0IFtpbnB1dFZpc2libGUsIHNldElucHV0VmlzaWJsZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lucHV0VmFsdWUsIHNldElucHV0VmFsdWVdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2VkaXRJbnB1dEluZGV4LCBzZXRFZGl0SW5wdXRJbmRleF0gPSBSZWFjdC51c2VTdGF0ZSgtMSk7XHJcbiAgY29uc3QgW2VkaXRJbnB1dFZhbHVlLCBzZXRFZGl0SW5wdXRWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAocmVtb3ZlZFRhZykgPT4ge1xyXG4gICAgZm9ybS5zZXRGaWVsZHNWYWx1ZSh7XHJcbiAgICAgIHRhZ3M6IGZvcm0uZ2V0RmllbGRWYWx1ZShcInRhZ3NcIik/LmZpbHRlcigodGFnKSA9PiB0YWcgIT09IHJlbW92ZWRUYWcpLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2hvd0lucHV0ID0gKCkgPT4ge1xyXG4gICAgc2V0SW5wdXRWaXNpYmxlKHRydWUpO1xyXG4gICAgaW5wdXRCdXR0b24/LmN1cnJlbnQ/LmZvY3VzKCk7XHJcbiAgICAvL2VkaXRJbnB1dEJ1dHRvbi5jdXJyZW50LmZvY3VzKCk7XHJcbiAgICAvLztcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChlKSA9PiBzZXRJbnB1dFZhbHVlKGUudGFyZ2V0LnZhbHVlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlSW5wdXRDb25maXJtID0gKCkgPT4ge1xyXG4gICAgbGV0IG5ld1RhZ3MgPSBmb3JtLmdldEZpZWxkVmFsdWUoXCJ0YWdzXCIpO1xyXG4gICAgaWYgKGlucHV0VmFsdWUgJiYgZm9ybS5nZXRGaWVsZFZhbHVlKFwidGFnc1wiKT8uaW5kZXhPZihpbnB1dFZhbHVlKSA9PT0gLTEpIHtcclxuICAgICAgbmV3VGFncyA9IFsuLi5uZXdUYWdzLCBpbnB1dFZhbHVlXTtcclxuICAgIH1cclxuICAgIGZvcm0uc2V0RmllbGRzVmFsdWUoeyB0YWdzOiBuZXdUYWdzIH0pO1xyXG4gICAgc2V0SW5wdXRWYWx1ZShcIlwiKTtcclxuICAgIHNldElucHV0VmlzaWJsZShmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRWRpdElucHV0Q2hhbmdlID0gKGUpID0+IHNldEVkaXRJbnB1dFZhbHVlKGUudGFyZ2V0LnZhbHVlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRWRpdElucHV0Q29uZmlybSA9ICgpID0+IHtcclxuICAgIGNvbnN0IG5ld1RhZ3MgPSBbLi4uZm9ybS5nZXRGaWVsZFZhbHVlKFwidGFnc1wiKV07XHJcbiAgICBuZXdUYWdzW2VkaXRJbnB1dEluZGV4XSA9IGVkaXRJbnB1dFZhbHVlO1xyXG4gICAgZm9ybS5zZXRGaWVsZHNWYWx1ZSh7IHRhZ3M6IG5ld1RhZ3MgfSk7XHJcbiAgICBzZXRFZGl0SW5wdXRJbmRleCgtMSk7XHJcbiAgICBzZXRFZGl0SW5wdXRWYWx1ZShcIlwiKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBrZXlQcmVzcyA9IChlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhlLmtleSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCJUYWdzXCIgbmFtZT1cInRhZ3NcIj5cclxuICAgICAge2Zvcm0uZ2V0RmllbGRWYWx1ZShcInRhZ3NcIik/Lm1hcCgodGFnLCBpKSA9PiB7XHJcbiAgICAgICAgaWYgKGVkaXRJbnB1dEluZGV4ID09PSBpKSB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUVkaXRJbnB1dENoYW5nZX1cclxuICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUVkaXRJbnB1dENvbmZpcm19XHJcbiAgICAgICAgICAgICAgb25QcmVzc0VudGVyPXtoYW5kbGVFZGl0SW5wdXRDb25maXJtfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtlZGl0SW5wdXRWYWx1ZX1cclxuICAgICAgICAgICAgICByZWY9e2VkaXRJbnB1dEJ1dHRvbn1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWlucHV0XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGlzTG9uZ1RhZyA9IHRhZy5sZW5ndGggPiAyMDtcclxuICAgICAgICBjb25zdCBUYWdFbGVtID0gKFxyXG4gICAgICAgICAgPFRhZ1xyXG4gICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBoYW5kbGVDbG9zZSh0YWcpfVxyXG4gICAgICAgICAgICBjbG9zYWJsZT17dHJ1ZX1cclxuICAgICAgICAgICAga2V5PXt0YWd9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImVkaXQtdGFnXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICBvbkRvdWJsZUNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGkgIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgc2V0RWRpdElucHV0SW5kZXgoaSk7XHJcbiAgICAgICAgICAgICAgICAgIHNldEVkaXRJbnB1dFZhbHVlKHRhZyk7XHJcbiAgICAgICAgICAgICAgICAgIGVkaXRJbnB1dEJ1dHRvbi5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtpc0xvbmdUYWcgPyBgIyR7dGFnLnNsaWNlKDAsIDIwKX0uLi5gIDogYCMke3RhZ31gfVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L1RhZz5cclxuICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiBpc0xvbmdUYWcgPyAoXHJcbiAgICAgICAgICA8VG9vbHRpcCB0aXRsZT17dGFnfSBrZXk9e3RhZ30+XHJcbiAgICAgICAgICAgIHtUYWdFbGVtfVxyXG4gICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICBUYWdFbGVtXHJcbiAgICAgICAgKTtcclxuICAgICAgfSl9XHJcbiAgICAgIHtpbnB1dFZpc2libGUgJiYgKFxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgb25CbHVyPXtoYW5kbGVJbnB1dENvbmZpcm19XHJcbiAgICAgICAgICBvbktleURvd249eyhlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XHJcbiAgICAgICAgICAgICAgaGFuZGxlSW5wdXRDb25maXJtKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICB2YWx1ZT17aW5wdXRWYWx1ZX1cclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIHJlZj17aW5wdXRCdXR0b259XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ0YWctaW5wdXRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcbiAgICAgIHshaW5wdXRWaXNpYmxlICYmIChcclxuICAgICAgICA8VGFnIGNsYXNzTmFtZT1cInNpdGUtdGFnLXBsdXNcIiBvbkNsaWNrPXtzaG93SW5wdXR9PlxyXG4gICAgICAgICAgPFBsdXNPdXRsaW5lZCAvPiBOZXcgVGFnXHJcbiAgICAgICAgPC9UYWc+XHJcbiAgICAgICl9XHJcbiAgICA8L0Zvcm0uSXRlbT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFncztcclxuIiwiaW1wb3J0IHsgVXBsb2FkLCBtZXNzYWdlLCBGb3JtLCBJbnB1dCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IExvYWRpbmdPdXRsaW5lZCwgUGx1c091dGxpbmVkLCBTdGFyT3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuXHJcbmZ1bmN0aW9uIGdldEJhc2U2NChpbWcsIGNhbGxiYWNrKSB7XHJcbiAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICByZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4gY2FsbGJhY2socmVhZGVyLnJlc3VsdCkpO1xyXG4gIHJlYWRlci5yZWFkQXNEYXRhVVJMKGltZyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJlZm9yZVVwbG9hZChmaWxlKSB7XHJcbiAgY29uc3QgaXNKcGdPclBuZyA9IGZpbGUudHlwZSA9PT0gXCJpbWFnZS9qcGVnXCIgfHwgZmlsZS50eXBlID09PSBcImltYWdlL3BuZ1wiO1xyXG4gIGlmICghaXNKcGdPclBuZykge1xyXG4gICAgbWVzc2FnZS5lcnJvcihcIllvdSBjYW4gb25seSB1cGxvYWQgSlBHL1BORyBmaWxlIVwiKTtcclxuICB9XHJcbiAgY29uc3QgaXNMdDJNID0gZmlsZS5zaXplIC8gMTAyNCAvIDEwMjQgPCAyO1xyXG4gIGlmICghaXNMdDJNKSB7XHJcbiAgICBtZXNzYWdlLmVycm9yKFwiSW1hZ2UgbXVzdCBzbWFsbGVyIHRoYW4gMk1CIVwiKTtcclxuICB9XHJcbiAgcmV0dXJuIGlzSnBnT3JQbmcgJiYgaXNMdDJNO1xyXG59XHJcblxyXG5jb25zdCBVcGxvYWRJbWFnZSA9ICh7IGZvcm0gfSkgPT4ge1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaW1hZ2VVcmwsIHNldEltYWdlVXJsXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoaW5mbykgPT4ge1xyXG4gICAgaWYgKGluZm8uZmlsZS5zdGF0dXMgPT09IFwidXBsb2FkaW5nXCIpIHtcclxuICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKGluZm8uZmlsZS5zdGF0dXMgPT09IFwiZG9uZVwiKSB7XHJcbiAgICAgIGZvcm0uc2V0RmllbGRzVmFsdWUoeyBiYW5uZXI6IGluZm8uZmlsZS5vcmlnaW5GaWxlT2JqIH0pO1xyXG4gICAgICAvLyBzZXRJbWFnZShpbmZvLmZpbGUub3JpZ2luRmlsZU9iaik7XHJcbiAgICAgIGdldEJhc2U2NChpbmZvLmZpbGUub3JpZ2luRmlsZU9iaiwgKGltYWdlVXJsKSA9PiB7XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgc2V0SW1hZ2VVcmwoaW1hZ2VVcmwpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCB1cGxvYWRCdXR0b24gPSAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7bG9hZGluZyA/IDxMb2FkaW5nT3V0bGluZWQgLz4gOiA8UGx1c091dGxpbmVkIC8+fVxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogOCB9fT5VcGxvYWQ8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxGb3JtLkl0ZW0gbmFtZT1cImJhbm5lclwiIGxhYmVsPVwiVXBsb2FkIGEgY292ZXJcIj5cclxuICAgICAgICA8VXBsb2FkXHJcbiAgICAgICAgICBzaG93VXBsb2FkTGlzdD17e1xyXG4gICAgICAgICAgICBzaG93UmVtb3ZlSWNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgcmVtb3ZlSWNvbjogKFxyXG4gICAgICAgICAgICAgIDxTdGFyT3V0bGluZWRcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBjb25zb2xlLmxvZyhlLCBcImN1c3RvbSByZW1vdmVJY29uIGV2ZW50XCIpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgbmFtZT1cImNvdmVyXCJcclxuICAgICAgICAgIGxpc3RUeXBlPVwicGljdHVyZS1jYXJkXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImNvdmVyLXVwbG9hZGVyXCJcclxuICAgICAgICAgIHNob3dVcGxvYWRMaXN0PXt0cnVlfVxyXG4gICAgICAgICAgYmVmb3JlVXBsb2FkPXtiZWZvcmVVcGxvYWR9XHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgbWF4Q291bnQ9ezF9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2ltYWdlVXJsID8gKFxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPXtpbWFnZVVybH1cclxuICAgICAgICAgICAgICBhbHQ9XCJpbWFnZVwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBvYmplY3RGaXQ6IFwiY292ZXJcIiB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgdXBsb2FkQnV0dG9uXHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvVXBsb2FkPlxyXG4gICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgIGxhYmVsPVwiSW1hZ2UgQ29weXJpZ2h0XCJcclxuICAgICAgICBuYW1lPVwiaW1hZ2VDb3B5cmlnaHRcIlxyXG4gICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHJlcXVpcmVkOiBmb3JtLmdldEZpZWxkVmFsdWUoXCJiYW5uZXJcIikgPyB0cnVlIDogZmFsc2UsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiQW4gaW1hZ2UgY29weXJpZ2h0IGlzIHJlcXVpcmVkXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF19XHJcbiAgICAgID5cclxuICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXBsb2FkSW1hZ2U7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0LCBjcmVhdGVDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcbmltcG9ydCB7IGF1dGgsIGRiIH0gZnJvbSBcIi4uL3JlZHV4L2ZiQ29uZmlnXCI7XHJcblxyXG5jb25zdCBhdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQcm92aWRlQXV0aCh7IGNoaWxkcmVuIH0pIHtcclxuICBjb25zdCBhdXRoID0gdXNlUHJvdmlkZUF1dGgoKTtcclxuICByZXR1cm4gPGF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXthdXRofT57Y2hpbGRyZW59PC9hdXRoQ29udGV4dC5Qcm92aWRlcj47XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1c2VBdXRoID0gKCkgPT4ge1xyXG4gIHJldHVybiB1c2VDb250ZXh0KGF1dGhDb250ZXh0KTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIHVzZVByb3ZpZGVBdXRoKCkge1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgLy8gV3JhcCBhbnkgRmlyZWJhc2UgbWV0aG9kcyB3ZSB3YW50IHRvIHVzZSBtYWtpbmcgc3VyZSAuLi5cclxuICAvLyAuLi4gdG8gc2F2ZSB0aGUgdXNlciB0byBzdGF0ZS5cclxuICBjb25zdCBzaWduaW4gPSAoZW1haWwsIHBhc3N3b3JkKSA9PiB7XHJcbiAgICByZXR1cm4gYXV0aC5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHNldFVzZXIocmVzcG9uc2UudXNlcik7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS51c2VyO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2lnbnVwID0gKGVtYWlsLCBwYXNzd29yZCwgdXNlcm5hbWUpID0+IHtcclxuICAgIHJldHVybiBhdXRoXHJcbiAgICAgIC5jcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBzZXRVc2VyKHJlc3BvbnNlLnVzZXIpO1xyXG4gICAgICAgIGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKS5hZGQoe1xyXG4gICAgICAgICAgYmFkZ2VzOiBbXSxcclxuICAgICAgICAgIGJpb2dyYXBoeTogXCJcIixcclxuICAgICAgICAgIGNyZWF0ZWRBdDogZmlyZWJhc2UuZmlyZXN0b3JlLkZpZWxkVmFsdWUuc2VydmVyVGltZXN0YW1wKCksXHJcbiAgICAgICAgICBzdXNwZW5kZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgZmFjZWJvb2s6IFwiXCIsXHJcbiAgICAgICAgICBpbnN0YWdyYW06IFwiXCIsXHJcbiAgICAgICAgICB0d2l0dGVyOiBcIlwiLFxyXG4gICAgICAgICAgZGV2aWFudGFydDogXCJcIixcclxuICAgICAgICAgIGxpa2VzQ291bnQ6IFwiXCIsXHJcbiAgICAgICAgICB1c2VybmFtZTogdXNlcm5hbWUsXHJcbiAgICAgICAgICBpbWFnZTogXCJcIixcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UudXNlcjtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2lnbm91dCA9ICgpID0+IHtcclxuICAgIHJldHVybiBhdXRoLnNpZ25PdXQoKS50aGVuKCgpID0+IHtcclxuICAgICAgc2V0VXNlcihmYWxzZSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzZW5kUGFzc3dvcmRSZXNldEVtYWlsID0gKGVtYWlsKSA9PiB7XHJcbiAgICByZXR1cm4gYXV0aC5zZW5kUGFzc3dvcmRSZXNldEVtYWlsKGVtYWlsKS50aGVuKCgpID0+IHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjb25maXJtUGFzc3dvcmRSZXNldCA9IChjb2RlLCBwYXNzd29yZCkgPT4ge1xyXG4gICAgcmV0dXJuIGF1dGguY29uZmlybVBhc3N3b3JkUmVzZXQoY29kZSwgcGFzc3dvcmQpLnRoZW4oKCkgPT4ge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB1bnN1YnNjcmliZSA9IGF1dGgub25BdXRoU3RhdGVDaGFuZ2VkKCh1c2VyKSA9PiB7XHJcbiAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgc2V0VXNlcih1c2VyKTtcclxuICAgICAgICBpZiAodXNlci51aWQpIHtcclxuICAgICAgICAgIGxldCB1c2VybmFtZSA9IFwiXCI7XHJcbiAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgZGIuY29sbGVjdGlvbihcInVzZXJzXCIpXHJcbiAgICAgICAgICAgIC5kb2ModXNlci51aWQpXHJcbiAgICAgICAgICAgIC5vblNuYXBzaG90KChkb2MpID0+IHtcclxuICAgICAgICAgICAgICB1c2VybmFtZSA9IGRvYy5kYXRhKCkudXNlcm5hbWU7XHJcbiAgICAgICAgICAgICAgc2V0VXNlcih7IC4uLnVzZXIsIHVzZXJuYW1lIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0VXNlcihmYWxzZSk7XHJcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQ2xlYW51cCBzdWJzY3JpcHRpb24gb24gdW5tb3VudFxyXG4gICAgcmV0dXJuICgpID0+IHVuc3Vic2NyaWJlKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICAvLyBSZXR1cm4gdGhlIHVzZXIgb2JqZWN0IGFuZCBhdXRoIG1ldGhvZHNcclxuICByZXR1cm4ge1xyXG4gICAgaXNMb2FkaW5nLFxyXG4gICAgdXNlcixcclxuICAgIHNpZ25pbixcclxuICAgIHNpZ251cCxcclxuICAgIHNpZ25vdXQsXHJcbiAgICBzZW5kUGFzc3dvcmRSZXNldEVtYWlsLFxyXG4gICAgY29uZmlybVBhc3N3b3JkUmVzZXQsXHJcbiAgfTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFJvdywgQ29sLCBEaXZpZGVyLCBGb3JtLCBTcGluLCBtZXNzYWdlLCBJbnB1dCwgU2VsZWN0IH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IGlzSW1hZ2VVcmwgZnJvbSBcImlzLWltYWdlLXVybFwiO1xyXG5cclxuaW1wb3J0IHtcclxuICBDQVRFR09SSUVTLFxyXG4gIENPUFlSSUdIVFMsXHJcbiAgTEFOR1VBR0VTLFxyXG4gIFNUQVRVUyxcclxufSBmcm9tIFwiLi4vLi4vdXRpbHMvY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tIFwiLi4vLi4vaG9va3MvdXNlckhvb2tzXCI7XHJcbmltcG9ydCB7IGdldFVzZXJDaGFyYWN0ZXJzIH0gZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvbnMvY2hhcmFjdGVyc0FjdGlvbnNcIjtcclxuaW1wb3J0IHsgYWRkU3RvcnkgfSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9ucy9zdG9yaWVzQWN0aW9uc1wiO1xyXG5cclxuaW1wb3J0IFRhZ3MgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZm9ybXMvVGFnc1wiO1xyXG5pbXBvcnQgVXBsb2FkSW1hZ2UgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZm9ybXMvVXBsb2FkSW1hZ2VcIjtcclxuaW1wb3J0IExvYWRlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jb21tb24vTG9hZGVyXCI7XHJcbmltcG9ydCBSYWRpb0J1dHRvbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9mb3Jtcy9SYWRpb0J1dHRvblwiO1xyXG5cclxuY29uc3QgeyBPcHRpb24gfSA9IFNlbGVjdDtcclxuXHJcbmNvbnN0IE5ld1N0b3J5ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgYXV0aCA9IHVzZUF1dGgoKTtcclxuICBjb25zdCBbZm9ybV0gPSBGb3JtLnVzZUZvcm0oKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbbGlua1Zpc2libGUsIHNldExpbmtWaXNpYmxlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdXBsb2FkVmlzaWJsZSwgc2V0VXBsb2FkVmlzaWJsZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW21hdHVyZSwgc2V0TWF0dXJlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdmlzaWJpbGl0eSwgc2V0VmlzaWJpbGl0eV0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbY3VycmVudENoYXIsIHNldEN1cnJlbnRDaGFyXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBhZGRDaGFyYWN0ZXIgPSAoKSA9PiB7XHJcbiAgICBpZiAoXHJcbiAgICAgIGN1cnJlbnRDaGFyICYmXHJcbiAgICAgIGZvcm0uZ2V0RmllbGRWYWx1ZShcIm1haW5DaGFyYWN0ZXJzXCIpPy5pbmRleE9mKGN1cnJlbnRDaGFyKSA9PT0gLTEgJiZcclxuICAgICAgZm9ybS5nZXRGaWVsZFZhbHVlKFwibWFpbkNoYXJhY3RlcnNcIik/Lmxlbmd0aCA8IDVcclxuICAgICkge1xyXG4gICAgICBmb3JtLnNldEZpZWxkc1ZhbHVlKHtcclxuICAgICAgICBtYWluQ2hhcmFjdGVyczogWy4uLmZvcm0uZ2V0RmllbGRWYWx1ZShcIm1haW5DaGFyYWN0ZXJzXCIpLCBjdXJyZW50Q2hhcl0sXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc2V0Q3VycmVudENoYXIoXCJcIik7XHJcbiAgICBmb3JtLnNldEZpZWxkc1ZhbHVlKHsgY3VycmVudENoYXI6IFwiXCIgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc3VibWl0ID0gKHZhbHVlcykgPT4ge1xyXG4gICAgZGVsZXRlIHZhbHVlcy5jdXJyZW50Q2hhcjtcclxuICAgIHByb3BzLmFkZFN0b3J5KHtcclxuICAgICAgLi4udmFsdWVzLFxyXG4gICAgICBhdXRob3JOYW1lOiBhdXRoLnVzZXIudXNlcm5hbWUsXHJcbiAgICAgIGJhbm5lcjogZm9ybS5nZXRGaWVsZFZhbHVlKFwiYmFubmVyXCIpID8gZm9ybS5nZXRGaWVsZFZhbHVlKFwiYmFubmVyXCIpIDogXCJcIixcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uRmFpbGVkID0gKGVycm9yKSA9PiB7XHJcbiAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcbiAgICBtZXNzYWdlLmVycm9yKFwiVGhlcmUgYXJlIHNvbWUgZXJyb3JzXCIpO1xyXG4gIH07XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoYXV0aC51c2VyKSB7XHJcbiAgICAgIHByb3BzLmdldFVzZXJDaGFyYWN0ZXJzKCk7XHJcbiAgICB9XHJcbiAgfSwgW2F1dGhdKTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZvcm0uc2V0RmllbGRzVmFsdWUoeyBtYXR1cmUgfSk7XHJcbiAgfSwgW21hdHVyZV0pO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZm9ybS5zZXRGaWVsZHNWYWx1ZSh7IHB1YmxpYzogdmlzaWJpbGl0eSB9KTtcclxuICB9LCBbdmlzaWJpbGl0eV0pO1xyXG5cclxuICBjb25zdCBmaWx0ZXJTb3J0ID0gKGEsIGIpID0+IHtcclxuICAgIGNvbnN0IGtleUEgPSBhLm5hbWUsXHJcbiAgICAgIGtleUIgPSBiLm5hbWU7XHJcbiAgICBpZiAoa2V5QSA8IGtleUIpIHJldHVybiAtMTtcclxuICAgIGlmIChrZXlBID4ga2V5QikgcmV0dXJuIDE7XHJcbiAgICByZXR1cm4gMDtcclxuICB9O1xyXG5cclxuICBjb25zdCBzaG93TGluayA9ICgpID0+IHtcclxuICAgIGZvcm0uc2V0RmllbGRzVmFsdWUoeyBiYW5uZXI6IG51bGwgfSk7XHJcbiAgICBzZXRMaW5rVmlzaWJsZSh0cnVlKTtcclxuICAgIHNldFVwbG9hZFZpc2libGUoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNob3dVcGxvYWQgPSAoKSA9PiB7XHJcbiAgICBmb3JtLnNldEZpZWxkc1ZhbHVlKHsgYmFubmVyOiBudWxsIH0pO1xyXG4gICAgc2V0TGlua1Zpc2libGUoZmFsc2UpO1xyXG4gICAgc2V0VXBsb2FkVmlzaWJsZSh0cnVlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gYXV0aC5pc0xvYWRpbmcgPyAoXHJcbiAgICA8TG9hZGVyIC8+XHJcbiAgKSA6IGF1dGgudXNlci51aWQgPyAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ldy1zdG9yeSBjdXN0b20tZm9ybVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyXCI+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInNpZGUtaGVhZGluZ1wiPkFkZCBhIG5ldyBzdG9yeTwvaDI+XHJcbiAgICAgICAgPEZvcm1cclxuICAgICAgICAgIGxheW91dD1cInZlcnRpY2FsXCJcclxuICAgICAgICAgIHNjcm9sbFRvRmlyc3RFcnJvclxyXG4gICAgICAgICAgb25GaW5pc2hGYWlsZWQ9e29uRmFpbGVkfVxyXG4gICAgICAgICAgb25GaW5pc2g9e3N1Ym1pdH1cclxuICAgICAgICAgIGZvcm09e2Zvcm19XHJcbiAgICAgICAgICBpbml0aWFsVmFsdWVzPXt7XHJcbiAgICAgICAgICAgIHN1bW1hcnk6IFwiXCIsXHJcbiAgICAgICAgICAgIG1hdHVyZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHB1YmxpYzogdHJ1ZSxcclxuICAgICAgICAgICAgYmFubmVyOiBcIlwiLFxyXG4gICAgICAgICAgICBtYWluQ2hhcmFjdGVyczogW10sXHJcbiAgICAgICAgICAgIHRhZ3M6IFtdLFxyXG4gICAgICAgICAgICB0aXRsZTogXCJcIixcclxuICAgICAgICAgICAgY2F0ZWdvcmllczogW10sXHJcbiAgICAgICAgICAgIGNvcHlyaWdodDogXCJcIixcclxuICAgICAgICAgICAgbGFuZ3VhZ2U6IFwiXCIsXHJcbiAgICAgICAgICAgIHN0YXR1czogXCJcIixcclxuICAgICAgICAgICAgaW1hZ2VDb3B5cmlnaHQ6IFwiXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxSb3cgZ3V0dGVyPXtbMjQsIDI0XX0+XHJcbiAgICAgICAgICAgIDxDb2wgc209ezI0fSB4cz17MjR9IG1kPXsxOH0gbGc9ezE4fT5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICBjb2xvbj17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICBuYW1lPVwidGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiQSB0aXRsZSBpcyByZXF1aXJlZFwiLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICB7IG1heDogNjUgfSxcclxuICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlRpdGxlXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgc209ezI0fSB4cz17MjR9IGxnPXs2fSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImNhdGVnb3JpZXNcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJDYXRlZ29yaWVzXCJcclxuICAgICAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkF0IGxlYXN0IDEgY2F0ZWdvcnkgaXMgcmVxdWlyZWRcIixcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG1heDogMixcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFycmF5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJZb3UgY2FuIG9ubHkgc2VsZWN0IHVwIHRvIDIgY2F0ZWdvcmllc1wiLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0IG1vZGU9XCJtdWx0aXBsZVwiIGFsbG93Q2xlYXIgbWF4VGFnQ291bnQ9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICB7Q0FURUdPUklFUz8uc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleUEgPSBhLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICBrZXlCID0gYi5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIENvbXBhcmUgdGhlIDIgZGF0ZXNcclxuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5QSA8IGtleUIpIHJldHVybiAtMTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5QSA+IGtleUIpIHJldHVybiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICAgICAgICB9KS5tYXAoKGNhdCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9e2NhdC52YWx1ZX0ga2V5PXtjYXQudmFsdWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAge2NhdC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgPFJvdyBndXR0ZXI9e1syNCwgMjRdfT5cclxuICAgICAgICAgICAgPENvbCBtZD17OH0gc209ezI0fSB4cz17MjR9IGxnPXs4fT5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwibGFuZ3VhZ2VcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJMYW5ndWFnZVwiXHJcbiAgICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJBIGxhbmd1YWdlIGlzIHJlcXVpcmVkXCIsXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3QgZmlsdGVyU29ydD17ZmlsdGVyU29ydH0+XHJcbiAgICAgICAgICAgICAgICAgIHtMQU5HVUFHRVM/Lm1hcCgobGFuZykgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9e2xhbmcudmFsdWV9IGtleT17bGFuZy52YWx1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7bGFuZy5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPENvbCBtZD17OH0gc209ezI0fSB4cz17MjR9IGxnPXs4fT5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwic3RhdHVzXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiU3RhdHVzXCJcclxuICAgICAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkEgc3RhdHVzIGlzIHJlcXVpcmVkXCIsXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgIHtTVEFUVVMubWFwKChzdGF0KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT17c3RhdC52YWx1ZX0ga2V5PXtzdGF0LnZhbHVlfT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtzdGF0Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIG1kPXs4fSBzbT17MjR9IHhzPXsyNH0gbGc9ezh9PlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJjb3B5cmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJDb3B5cmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiQSBjb3B5cmlnaHQgaXMgcmVxdWlyZWRcIixcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFNlbGVjdD5cclxuICAgICAgICAgICAgICAgICAge0NPUFlSSUdIVFMubWFwKChjb3B5KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT17Y29weS52YWx1ZX0ga2V5PXtjb3B5LnZhbHVlfT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtjb3B5Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgIGxhYmVsPVwiU3VtbWFyeVwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJzdW1tYXJ5XCJcclxuICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBtYXg6IDE4MCxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiWW91ciBzdW1tYXJ5IGNhbm5vdCBleGNlZWQgMTgwIGNoYXJhY3RlcnNcIixcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SW5wdXQuVGV4dEFyZWFcclxuICAgICAgICAgICAgICBhdXRvU2l6ZT17eyBtaW5Sb3dzOiA1IH19XHJcbiAgICAgICAgICAgICAgc2hvd0NvdW50PXt0cnVlfVxyXG4gICAgICAgICAgICAgIG1heExlbmd0aD17MTgwfVxyXG4gICAgICAgICAgICA+PC9JbnB1dC5UZXh0QXJlYT5cclxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgPFJvdyBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiIGd1dHRlcj17WzI0LCAyNF19PlxyXG4gICAgICAgICAgICA8UmFkaW9CdXR0b25cclxuICAgICAgICAgICAgICBsZz17NH1cclxuICAgICAgICAgICAgICBzbT17MTJ9XHJcbiAgICAgICAgICAgICAgeHM9ezI0fVxyXG4gICAgICAgICAgICAgIG1kPXs4fVxyXG4gICAgICAgICAgICAgIG5hbWU9XCJwdWJsaWNcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiVmlzaWJpbGl0eVwiXHJcbiAgICAgICAgICAgICAgc2V0RnVuYz17c2V0VmlzaWJpbGl0eX1cclxuICAgICAgICAgICAgICBudW0xPVwiM1wiXHJcbiAgICAgICAgICAgICAgbnVtMj1cIjRcIlxyXG4gICAgICAgICAgICAgIGxhYmVsMT1cIlB1YmxpY1wiXHJcbiAgICAgICAgICAgICAgbGFiZWwyPVwiUHJpdmF0ZVwiXHJcbiAgICAgICAgICAgICAgdmFsPXt2aXNpYmlsaXR5fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8UmFkaW9CdXR0b25cclxuICAgICAgICAgICAgICBsZz17NH1cclxuICAgICAgICAgICAgICBzbT17MTJ9XHJcbiAgICAgICAgICAgICAgeHM9ezI0fVxyXG4gICAgICAgICAgICAgIG1kPXs4fVxyXG4gICAgICAgICAgICAgIHZhbD17bWF0dXJlfVxyXG4gICAgICAgICAgICAgIHNldEZ1bmM9e3NldE1hdHVyZX1cclxuICAgICAgICAgICAgICBuYW1lPVwibWF0dXJlXCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIk1hdHVyZSBjb250ZW50ID9cIlxyXG4gICAgICAgICAgICAgIG51bTE9XCIxXCJcclxuICAgICAgICAgICAgICBudW0yPVwiMlwiXHJcbiAgICAgICAgICAgICAgbGFiZWwxPVwiWWVzXCJcclxuICAgICAgICAgICAgICBsYWJlbDI9XCJOb1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxDb2wgbGc9ezh9IG1kPXsxMn0gc209ezI0fSB4cz17MjR9PlxyXG4gICAgICAgICAgICAgIDxUYWdzIGZvcm09e2Zvcm19IC8+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgPEZvcm0uSXRlbSBuYW1lPVwibWFpbkNoYXJhY3RlcnNcIiBsYWJlbD1cIk1haW4gQ2hhcmFjdGVyc1wiPlxyXG4gICAgICAgICAgICA8Um93IGd1dHRlcj17WzI0LCAyNF19PlxyXG4gICAgICAgICAgICAgIDxDb2wgbGc9ezEyfSBtZD17MjR9IHNtPXsyNH0geHM9ezI0fT5cclxuICAgICAgICAgICAgICAgIDxSb3cgZ3V0dGVyPXsxNn0+XHJcbiAgICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17MjJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0gbmFtZT1cImN1cnJlbnRDaGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtLmdldEZpZWxkVmFsdWUoXCJtYWluQ2hhcmFjdGVyc1wiKT8ubGVuZ3RoID49IDVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsKSA9PiBzZXRDdXJyZW50Q2hhcih2YWwpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwibm9uZVwiIGRpc2FibGVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIENob29zZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmNoYXJhY3RlcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGMpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZ2V0RmllbGRWYWx1ZShcIm1haW5DaGFyYWN0ZXJzXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPy5pbmRleE9mKGMuaWQpID09PSAtMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/LnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleUEgPSBhLmZpcnN0bmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5QiA9IGIuZmlyc3RuYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ29tcGFyZSB0aGUgMiBkYXRlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGtleUEgPCBrZXlCKSByZXR1cm4gLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoa2V5QSA+IGtleUIpIHJldHVybiAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKChjaGFyKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Y2hhci5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NoYXIuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+e2Ake2NoYXIuZmlyc3RuYW1lfSAke2NoYXIubGFzdG5hbWV9YH08L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgPENvbCBzcGFuPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZWxlY3QtYWRkLWlucHV0LWljb25ib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17YWRkQ2hhcmFjdGVyfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPis8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICA8c21hbGw+WW91IGNhbiBhZGQgdXAgdG8gNSBtYWluIGNoYXJhY3RlcnM8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPENvbCBsZz17MTJ9IG1kPXsyNH0gc209ezI0fSB4cz17MjR9PlxyXG4gICAgICAgICAgICAgICAgPFJvdyBndXR0ZXI9e1sxNiwgMjRdfT5cclxuICAgICAgICAgICAgICAgICAge3Byb3BzLmNoYXJhY3RlcnNcclxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgKGMpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm0uZ2V0RmllbGRWYWx1ZShcIm1haW5DaGFyYWN0ZXJzXCIpPy5pbmRleE9mKGMuaWQpICE9PVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAubWFwKChjaGFyKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q29sIG1kPXsxMn0gc209ezI0fSBrZXk9e2NoYXIuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17Y2hhci5pZH0gY2xhc3NOYW1lPVwibWFpbi1zZWxlY3RlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1hdmF0YXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtjaGFyLmltYWdlfSBhbHQ9e2NoYXIuZmlyc3RuYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntgJHtjaGFyLmZpcnN0bmFtZX0gJHtjaGFyLmxhc3RuYW1lfWB9IDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW9uLWljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJlbW92ZUNoYXJhY3RlcihjaGFyLmlkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjbG9zZS1jaXJjbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID48L2lvbi1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgeyF1cGxvYWRWaXNpYmxlICYmICFsaW5rVmlzaWJsZSAmJiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXBsb2FkLWJ0bnNcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Nob3dVcGxvYWR9IHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJ1cGxvYWQtYnRuXCI+XHJcbiAgICAgICAgICAgICAgICBVcGxvYWQgYSBjb3ZlclxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Nob3dMaW5rfSB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwidXBsb2FkLWJ0blwiPlxyXG4gICAgICAgICAgICAgICAgU3VibWl0IGEgbGluayB0byBhIGNvdmVyXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIHt1cGxvYWRWaXNpYmxlICYmIChcclxuICAgICAgICAgICAgPFJvdyBhbGlnbj1cImJvdHRvbVwiIGd1dHRlcj17WzI0LCAyNF19PlxyXG4gICAgICAgICAgICAgIDxDb2wgbWQ9ezEyfSBzbT17MjR9IHhzPXsyNH0+XHJcbiAgICAgICAgICAgICAgICA8VXBsb2FkSW1hZ2UgZm9ybT17Zm9ybX0gLz5cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8Q29sIG1kPXsxMn0gc209ezI0fSB4cz17MjR9PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzaG93TGlua30gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cInVwbG9hZC1idG5cIj5cclxuICAgICAgICAgICAgICAgICAgT1IgU3VibWl0IGEgbGluayB0byBhIGNvdmVyXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAge2xpbmtWaXNpYmxlICYmIChcclxuICAgICAgICAgICAgPFJvdyBhbGlnbj1cImJvdHRvbVwiIGd1dHRlcj17WzI0LCAyNF19PlxyXG4gICAgICAgICAgICAgIDxDb2wgc209ezI0fSB4cz17MjR9IG1kPXsxMn0gbGc9ezEyfT5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInVybFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJUaGlzIGZpZWxkIG11c3QgYmUgYSB2YWxpZCB1cmwuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAoKSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yKF8sIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0ltYWdlVXJsKHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVycm9yKFwiVGhlIGxpbmsgbmVlZHMgdG8gYmUgYW4gaW1hZ2VcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU3VibWl0IGEgbGluayB0byB5b3VyIGltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cImJhbm5lclwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPENvbCBtZD17MTJ9IHNtPXsyNH0geHM9ezI0fT5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17c2hvd1VwbG9hZH1cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInVwbG9hZC1idG5cIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBVcGxvYWQgYSBjb3ZlclxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICB7cHJvcHMubG9hZGluZyB8fCBwcm9wcy5zdG9yeUlkID8gKFxyXG4gICAgICAgICAgICA8YnV0dG9uIGRpc2FibGVkPlxyXG4gICAgICAgICAgICAgIDxTcGluIC8+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+Q3JlYXRlPC9idXR0b24+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApIDogKFxyXG4gICAgcm91dGVyLnB1c2goXCIvYXV0aFwiKVxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XHJcbiAgY2hhcmFjdGVyczogc3RhdGUuY2hhcmFjdGVycy51c2VyQ2hhcmFjdGVycyxcclxuICBjb25maXJtTWVzc2FnZTogc3RhdGUuc3Rvcmllcy5tZXNzYWdlLFxyXG4gIHN0b3J5SWQ6IHN0YXRlLnN0b3JpZXMuc3RvcnlJZCxcclxuICBsb2FkaW5nOiBzdGF0ZS5zdG9yaWVzLmxvYWRpbmdTdG9yeSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgeyBnZXRVc2VyQ2hhcmFjdGVycywgYWRkU3RvcnkgfSkoXHJcbiAgTmV3U3RvcnlcclxuKTtcclxuIiwiaW1wb3J0IHtcclxuICBHRVRfVVNFUl9DSEFSQUNURVJTLFxyXG4gIEdFVF9GQVZPUklURV9DSEFSQUNURVJTLFxyXG59IGZyb20gXCIuLi8uLi91dGlscy9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgZGIsIGF1dGggfSBmcm9tIFwiLi4vZmJDb25maWdcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyQ2hhcmFjdGVycyA9ICgpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzXCIpXHJcbiAgICAud2hlcmUoXCJhdXRob3JJZFwiLCBcIj09XCIsIGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigoZG9jcykgPT4ge1xyXG4gICAgICBsZXQgaXRlbXMgPSBbXTtcclxuICAgICAgZG9jcy5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgICAgICBpdGVtcyA9IFsuLi5pdGVtcywgeyBpZDogZG9jLmlkLCAuLi5kb2MuZGF0YSgpIH1dO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGl0ZW1zO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChpdGVtcykgPT4ge1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IEdFVF9VU0VSX0NIQVJBQ1RFUlMsIHBheWxvYWQ6IGl0ZW1zIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0RmF2b3JpdGVDaGFyYWN0ZXJzID0gKCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGIuY29sbGVjdGlvbihcImNoYXJhY3RlcnNMaWtlc1wiKVxyXG4gICAgLndoZXJlKFwic2VuZGVySWRcIiwgXCI9PVwiLCBhdXRoLmN1cnJlbnRVc2VyLnVpZClcclxuICAgIC5nZXQoKVxyXG4gICAgLnRoZW4oKGRvY3MpID0+IHtcclxuICAgICAgbGV0IGZhdkFyciA9IFtdO1xyXG4gICAgICBkb2NzLmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgICAgIGZhdkFyciA9IFsuLi5mYXZBcnIsIGRvYy5kYXRhKCkuY2hhcmFjdGVySWRdO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGZhdkFycjtcclxuICAgIH0pXHJcbiAgICAudGhlbigodXNlcnMpID0+IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gdXNlcnMubWFwKCh1c2VyKSA9PlxyXG4gICAgICAgIGRiLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzXCIpLmRvYyh1c2VyKS5nZXQoKVxyXG4gICAgICApO1xyXG4gICAgICBQcm9taXNlLmFsbChyZXN1bHQpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGxldCBmYXZVc2VycyA9IFtdO1xyXG4gICAgICAgIHJlcy5mb3JFYWNoKFxyXG4gICAgICAgICAgKGRvYykgPT4gKGZhdlVzZXJzID0gWy4uLmZhdlVzZXJzLCB7IGlkOiBkb2MuaWQsIC4uLmRvYy5kYXRhKCkgfV0pXHJcbiAgICAgICAgKTtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiBHRVRfRkFWT1JJVEVfQ0hBUkFDVEVSUyxcclxuICAgICAgICAgIHBheWxvYWQ6IGZhdlVzZXJzLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG4iLCJpbXBvcnQge1xyXG4gIEdFVF9VU0VSX1NUT1JJRVMsXHJcbiAgR0VUX0ZBVk9SSVRFX1NUT1JJRVMsXHJcbiAgR0VUX1NUT1JZLFxyXG4gIEdFVF9DSEFQVEVSUyxcclxuICBBRERfU1RPUlksXHJcbn0gZnJvbSBcIi4uLy4uL3V0aWxzL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBkYiwgYXV0aCwgc3RvcmFnZSB9IGZyb20gXCIuLi9mYkNvbmZpZ1wiO1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlL2FwcFwiO1xyXG5pbXBvcnQgeyBtZXNzYWdlIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdG9yeSA9IChpZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGIuY29sbGVjdGlvbihcInN0b3JpZXNcIilcclxuICAgIC5kb2MoaWQpXHJcbiAgICAuZ2V0KClcclxuICAgIC50aGVuKChkb2MpID0+IHtcclxuICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IEdFVF9TVE9SWSxcclxuICAgICAgICBwYXlsb2FkOiB7IC4uLmRvYy5kYXRhKCksIGlkOiBkb2MuaWQgfSxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRTdG9yeSA9IChkYXRhKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkaXNwYXRjaCh7IHR5cGU6IEFERF9TVE9SWSwgcGF5bG9hZDogeyBsb2FkaW5nOiB0cnVlIH0gfSk7XHJcbiAgY29uc3QgaW1hZ2VOYW1lID0gZGF0YS50aXRsZS50b0xvd2VyQ2FzZSgpLnNwbGl0KFwiIFwiKS5qb2luKFwiX1wiKTtcclxuICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICBpZiAodHlwZW9mIGRhdGEuYmFubmVyID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICBzdG9yYWdlXHJcbiAgICAgIC5yZWYoYCR7YXV0aC5jdXJyZW50VXNlci51aWR9LyR7aW1hZ2VOYW1lfWApXHJcbiAgICAgIC5wdXQoZGF0YS5iYW5uZXIpXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICByZXR1cm4gc3RvcmFnZVxyXG4gICAgICAgICAgLnJlZihhdXRoLmN1cnJlbnRVc2VyLnVpZClcclxuICAgICAgICAgIC5jaGlsZChpbWFnZU5hbWUpXHJcbiAgICAgICAgICAuZ2V0RG93bmxvYWRVUkwoKTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKHVybCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKS5hZGQoe1xyXG4gICAgICAgICAgLi4uZGF0YSxcclxuICAgICAgICAgIGF1dGhvcklkOiBhdXRoLmN1cnJlbnRVc2VyLnVpZCxcclxuICAgICAgICAgIGF1dGhvck5hbWU6IGRhdGEuYXV0aG9yTmFtZSxcclxuICAgICAgICAgIG9uZVNob3Q6IGZhbHNlLFxyXG4gICAgICAgICAgYmFubmVyOiB1cmwsXHJcbiAgICAgICAgICBjcmVhdGVkQXQ6IGZpcmViYXNlLmZpcmVzdG9yZS5GaWVsZFZhbHVlLnNlcnZlclRpbWVzdGFtcCgpLFxyXG4gICAgICAgICAgbGlrZXNDb3VudDogMCxcclxuICAgICAgICAgIGNoYXB0ZXJzQ291bnQ6IDAsXHJcbiAgICAgICAgICBsb2NhdGlvbnNDb3VudDogMCxcclxuICAgICAgICAgIHNlY29uZGFyeUNoYXJhY3RlcnM6IFtdLFxyXG4gICAgICAgICAgZmVhdHVyZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgbm90ZTogMCxcclxuICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhcIlN0b3J5IGFkZGVkIHN1Y2Nlc3NmdWxseVwiKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIFJvdXRlci5wdXNoKGAvc3RvcnkvJHtyZXMuaWR9YCk7XHJcbiAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9TVE9SWSxcclxuICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgIG1lc3NhZ2U6IFwiU3RvcnkgYWRkZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICAgICAgc3RvcnlJZDogcmVzLmlkLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihlcnIubWVzc2FnZSk7XHJcbiAgICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKVxyXG4gICAgICAuYWRkKHtcclxuICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgIGF1dGhvcklkOiBhdXRoLmN1cnJlbnRVc2VyLnVpZCxcclxuICAgICAgICBhdXRob3JOYW1lOiBkYXRhLmF1dGhvck5hbWUsXHJcbiAgICAgICAgb25lU2hvdDogZmFsc2UsXHJcbiAgICAgICAgY3JlYXRlZEF0OiBmaXJlYmFzZS5maXJlc3RvcmUuRmllbGRWYWx1ZS5zZXJ2ZXJUaW1lc3RhbXAoKSxcclxuICAgICAgICBsaWtlc0NvdW50OiAwLFxyXG4gICAgICAgIGNoYXB0ZXJzQ291bnQ6IDAsXHJcbiAgICAgICAgbG9jYXRpb25zQ291bnQ6IDAsXHJcbiAgICAgICAgZmVhdHVyZWQ6IGZhbHNlLFxyXG4gICAgICAgIHNlY29uZGFyeUNoYXJhY3RlcnM6IFtdLFxyXG4gICAgICAgIG5vdGU6IDAsXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoXCJTdG9yeSBhZGRlZCBzdWNjZXNzZnVsbHlcIik7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBSb3V0ZXIucHVzaChgL3N0b3J5LyR7cmVzLmlkfWApO1xyXG4gICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBBRERfU1RPUlksXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICBtZXNzYWdlOiBcIlN0b3J5IGFkZGVkIHN1Y2Nlc3NmdWxseVwiLFxyXG4gICAgICAgICAgICAgIHN0b3J5SWQ6IHJlcy5pZCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoZXJyLm1lc3NhZ2UpO1xyXG4gICAgICB9KTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q2hhcHRlcnMgPSAoaWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJjaGFwdGVyc1wiKVxyXG4gICAgLndoZXJlKFwic3RvcnlJZFwiLCBcIj09XCIsIGlkKVxyXG4gICAgLm9yZGVyQnkoXCJudW1iZXJcIiwgXCJhc2NcIilcclxuICAgIC5vblNuYXBzaG90KChkb2NzKSA9PiB7XHJcbiAgICAgIGxldCBhcnIgPSBbXTtcclxuICAgICAgZG9jcy5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgICAgICBhcnIucHVzaCh7XHJcbiAgICAgICAgICBhdXRob3JJZDogZG9jLmRhdGEoKS5hdXRob3JJZCxcclxuICAgICAgICAgIGlkOiBkb2MuaWQsXHJcbiAgICAgICAgICBjcmVhdGVkQXQ6IGRvYy5kYXRhKCkuY3JlYXRlZEF0LFxyXG4gICAgICAgICAgbnVtYmVyOiBkb2MuZGF0YSgpLm51bWJlcixcclxuICAgICAgICAgIHRpdGxlOiBkb2MuZGF0YSgpLnRpdGxlLFxyXG4gICAgICAgICAgY29tbWVudHNDb3VudDogZG9jLmRhdGEoKS5jb21tZW50c0NvdW50LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IEdFVF9DSEFQVEVSUyxcclxuICAgICAgICBwYXlsb2FkOiBhcnIsXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RvcnlDaGFyYWN0ZXJzID0gKGlkKSA9PiAoZGlzcGF0Y2gpID0+IHt9O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFVzZXJTdG9yaWVzID0gKCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGIuY29sbGVjdGlvbihcInN0b3JpZXNcIilcclxuICAgIC53aGVyZShcImF1dGhvcklkXCIsIFwiPT1cIiwgYXV0aC5jdXJyZW50VXNlci51aWQpXHJcbiAgICAuZ2V0KClcclxuICAgIC50aGVuKChkb2NzKSA9PiB7XHJcbiAgICAgIGxldCBpdGVtcyA9IFtdO1xyXG4gICAgICBkb2NzLmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgICAgIGl0ZW1zID0gWy4uLml0ZW1zLCB7IGlkOiBkb2MuaWQsIC4uLmRvYy5kYXRhKCkgfV07XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gaXRlbXM7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGl0ZW1zKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogR0VUX1VTRVJfU1RPUklFUywgcGF5bG9hZDogaXRlbXMgfSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRGYXZvcml0ZVN0b3JpZXMgPSAoKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc0xpa2VzXCIpXHJcbiAgICAud2hlcmUoXCJzZW5kZXJJZFwiLCBcIj09XCIsIGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigoZG9jcykgPT4ge1xyXG4gICAgICBsZXQgZmF2QXJyID0gW107XHJcbiAgICAgIGRvY3MuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICAgICAgZmF2QXJyID0gWy4uLmZhdkFyciwgZG9jLmRhdGEoKS5zdG9yeUlkXTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBmYXZBcnI7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKHVzZXJzKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHVzZXJzLm1hcCgodXNlcikgPT5cclxuICAgICAgICBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKS5kb2ModXNlcikuZ2V0KClcclxuICAgICAgKTtcclxuICAgICAgUHJvbWlzZS5hbGwocmVzdWx0KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBsZXQgZmF2VXNlcnMgPSBbXTtcclxuICAgICAgICByZXMuZm9yRWFjaChcclxuICAgICAgICAgIChkb2MpID0+IChmYXZVc2VycyA9IFsuLi5mYXZVc2VycywgeyBpZDogZG9jLmlkLCAuLi5kb2MuZGF0YSgpIH1dKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogR0VUX0ZBVk9SSVRFX1NUT1JJRVMsXHJcbiAgICAgICAgICBwYXlsb2FkOiBmYXZVc2VycyxcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuIiwiaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcclxuaW1wb3J0IFwiZmlyZWJhc2UvYXV0aFwiO1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcclxuaW1wb3J0IFwiZmlyZWJhc2Uvc3RvcmFnZVwiO1xyXG5cclxuY29uc3QgcHJvZENvbmZpZyA9IHtcclxuICBhcGlLZXk6IHByb2Nlc3MuZW52LkZJUkVCQVNFX0FQSV9LRVksXHJcbiAgYXV0aERvbWFpbjogcHJvY2Vzcy5lbnYuRklSRUJBU0VfQVVUSF9ET01BSU4sXHJcbiAgZGF0YWJhc2VVUkw6IHByb2Nlc3MuZW52LkZJUkVCQVNFX0RBVEFCQVNFX1VSTCxcclxuICBwcm9qZWN0SWQ6IHByb2Nlc3MuZW52LkZJUkVCQVNFX1BST0pFQ1RfSUQsXHJcbiAgc3RvcmFnZUJ1Y2tldDogcHJvY2Vzcy5lbnYuRklSRUJBU0VfU1RPUkFHRV9CVUNLRVQsXHJcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IHByb2Nlc3MuZW52LkZJUkVCQVNFX01FU1NBR0lOR19TRU5ERVJfSUQsXHJcbiAgYXBwSWQ6IHByb2Nlc3MuZW52LkZJUkVCQVNFX0FQUF9JRCxcclxufTtcclxuXHJcbmNvbnN0IGRldkNvbmZpZyA9IHtcclxuICBhcGlLZXk6IHByb2Nlc3MuZW52LkZJUkVCQVNFX0FQSV9LRVksXHJcbiAgYXV0aERvbWFpbjogcHJvY2Vzcy5lbnYuRklSRUJBU0VfQVVUSF9ET01BSU4sXHJcbiAgZGF0YWJhc2VVUkw6IHByb2Nlc3MuZW52LkZJUkVCQVNFX0RBVEFCQVNFX1VSTCxcclxuICBwcm9qZWN0SWQ6IHByb2Nlc3MuZW52LkZJUkVCQVNFX1BST0pFQ1RfSUQsXHJcbiAgc3RvcmFnZUJ1Y2tldDogcHJvY2Vzcy5lbnYuRklSRUJBU0VfU1RPUkFHRV9CVUNLRVQsXHJcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IHByb2Nlc3MuZW52LkZJUkVCQVNFX01FU1NBR0lOR19TRU5ERVJfSUQsXHJcbiAgYXBwSWQ6IHByb2Nlc3MuZW52LkZJUkVCQVNFX0FQUF9JRCxcclxufTtcclxuXHJcbmNvbnN0IGNvbmZpZyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IHByb2RDb25maWcgOiBkZXZDb25maWc7XHJcblxyXG5pZiAoIWZpcmViYXNlLmFwcHMubGVuZ3RoKSB7XHJcbiAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChjb25maWcpO1xyXG59XHJcblxyXG5jb25zdCBkYiA9IGZpcmViYXNlLmZpcmVzdG9yZSgpO1xyXG5jb25zdCBhdXRoID0gZmlyZWJhc2UuYXV0aCgpO1xyXG5jb25zdCBzdG9yYWdlID0gZmlyZWJhc2Uuc3RvcmFnZSgpO1xyXG5cclxuZXhwb3J0IHsgZGIsIGF1dGgsIHN0b3JhZ2UgfTtcclxuZXhwb3J0IGRlZmF1bHQgY29uZmlnO1xyXG4iLCJleHBvcnQgY29uc3QgQ0FURUdPUklFUyA9IFtcclxuICB7IG5hbWU6IFwiRHJhbWFcIiwgdmFsdWU6IFwiZHJhbWFcIiB9LFxyXG4gIHsgbmFtZTogXCJDb21lZHlcIiwgdmFsdWU6IFwiY29tZWR5XCIgfSxcclxuICB7IG5hbWU6IFwiSG9ycm9yXCIsIHZhbHVlOiBcImhvcnJvclwiIH0sXHJcbiAgeyBuYW1lOiBcIlJvbWFuY2VcIiwgdmFsdWU6IFwicm9tYW5jZVwiIH0sXHJcbiAgeyBuYW1lOiBcIlNjaS1maVwiLCB2YWx1ZTogXCJzY2ktZmlcIiB9LFxyXG4gIHsgbmFtZTogXCJGYW50YXN5XCIsIHZhbHVlOiBcImZhbnRhc3lcIiB9LFxyXG4gIHsgbmFtZTogXCJIdW1vclwiLCB2YWx1ZTogXCJodW1vclwiIH0sXHJcbiAgeyBuYW1lOiBcIkFjdGlvblwiLCB2YWx1ZTogXCJhY3Rpb25cIiB9LFxyXG4gIHsgbmFtZTogXCJUaHJpbGxlclwiLCB2YWx1ZTogXCJ0aHJpbGxlclwiIH0sXHJcbiAgeyBuYW1lOiBcIlN1cGVybmF0dXJhbFwiLCB2YWx1ZTogXCJzdXBlcm5hdHVyYWxcIiB9LFxyXG4gIHsgbmFtZTogXCJBZHZlbnR1cmVcIiwgdmFsdWU6IFwiYWR2ZW50dXJlXCIgfSxcclxuICB7IG5hbWU6IFwiTXlzdGVyeVwiLCB2YWx1ZTogXCJteXN0ZXJ5XCIgfSxcclxuICB7IG5hbWU6IFwiV2VzdGVyblwiLCB2YWx1ZTogXCJ3ZXN0ZXJuXCIgfSxcclxuICB7IG5hbWU6IFwiSGlzdG9yeVwiLCB2YWx1ZTogXCJoaXN0b3J5XCIgfSxcclxuICB7IG5hbWU6IFwiQ3JpbWVcIiwgdmFsdWU6IFwiY3JpbWVcIiB9LFxyXG4gIHsgbmFtZTogXCJGYW5maWN0aW9uXCIsIHZhbHVlOiBcImZhbmZpY3Rpb25cIiB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IENPUFlSSUdIVFMgPSBbXHJcbiAgeyBuYW1lOiBcIlB1YmxpYyBEb21haW5cIiwgdmFsdWU6IFwicHVibGljIGRvbWFpblwiIH0sXHJcbiAgeyBuYW1lOiBcIkFsbCBSaWdodHMgUmVzZXJ2ZWRcIiwgdmFsdWU6IFwiYWxsIHJpZ2h0cyByZXNlcnZlZFwiIH0sXHJcbiAgeyBuYW1lOiBcIkNyZWF0aXZlIENvbW1vbnNcIiwgdmFsdWU6IFwiY3JlYXRpdmUgY29tbW9uc1wiIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgTEFOR1VBR0VTID0gW1xyXG4gIHsgbmFtZTogXCJBZmFyXCIsIHZhbHVlOiBcImFhXCIgfSxcclxuICB7IG5hbWU6IFwiQWJraGF6aWFuXCIsIHZhbHVlOiBcImFiXCIgfSxcclxuICB7IG5hbWU6IFwiQXZlc3RhblwiLCB2YWx1ZTogXCJhZVwiIH0sXHJcbiAgeyBuYW1lOiBcIkFmcmlrYWFuc1wiLCB2YWx1ZTogXCJhZlwiIH0sXHJcbiAgeyBuYW1lOiBcIkFrYW5cIiwgdmFsdWU6IFwiYWtcIiB9LFxyXG4gIHsgbmFtZTogXCJBbWhhcmljXCIsIHZhbHVlOiBcImFtXCIgfSxcclxuICB7IG5hbWU6IFwiQXJhZ29uZXNlXCIsIHZhbHVlOiBcImFuXCIgfSxcclxuICB7IG5hbWU6IFwiQXJhYmljXCIsIHZhbHVlOiBcImFyXCIgfSxcclxuICB7IG5hbWU6IFwiQXNzYW1lc2VcIiwgdmFsdWU6IFwiYXNcIiB9LFxyXG4gIHsgbmFtZTogXCJBdmFyaWNcIiwgdmFsdWU6IFwiYXZcIiB9LFxyXG4gIHsgbmFtZTogXCJBeW1hcmFcIiwgdmFsdWU6IFwiYXlcIiB9LFxyXG4gIHsgbmFtZTogXCJBemVyYmFpamFuaVwiLCB2YWx1ZTogXCJhelwiIH0sXHJcbiAgeyBuYW1lOiBcIkJhc2hraXJcIiwgdmFsdWU6IFwiYmFcIiB9LFxyXG4gIHsgbmFtZTogXCJCZWxhcnVzaWFuXCIsIHZhbHVlOiBcImJlXCIgfSxcclxuICB7IG5hbWU6IFwiQnVsZ2FyaWFuXCIsIHZhbHVlOiBcImJnXCIgfSxcclxuICB7IG5hbWU6IFwiQmloYXJpXCIsIHZhbHVlOiBcImJoXCIgfSxcclxuICB7IG5hbWU6IFwiQmlzbGFtYVwiLCB2YWx1ZTogXCJiaVwiIH0sXHJcbiAgeyBuYW1lOiBcIkJhbWJhcmFcIiwgdmFsdWU6IFwiYm1cIiB9LFxyXG4gIHsgbmFtZTogXCJCZW5nYWxpXCIsIHZhbHVlOiBcImJuXCIgfSxcclxuICB7IG5hbWU6IFwiVGliZXRhblwiLCB2YWx1ZTogXCJib1wiIH0sXHJcbiAgeyBuYW1lOiBcIkJyZXRvblwiLCB2YWx1ZTogXCJiclwiIH0sXHJcbiAgeyBuYW1lOiBcIkJvc25pYW5cIiwgdmFsdWU6IFwiYnNcIiB9LFxyXG4gIHsgbmFtZTogXCJDYXRhbGFuXCIsIHZhbHVlOiBcImNhXCIgfSxcclxuICB7IG5hbWU6IFwiQ2hlY2hlblwiLCB2YWx1ZTogXCJjZVwiIH0sXHJcbiAgeyBuYW1lOiBcIkNoYW1vcnJvXCIsIHZhbHVlOiBcImNoXCIgfSxcclxuICB7IG5hbWU6IFwiQ29yc2ljYW5cIiwgdmFsdWU6IFwiY29cIiB9LFxyXG4gIHsgbmFtZTogXCJDcmVlXCIsIHZhbHVlOiBcImNyXCIgfSxcclxuICB7IG5hbWU6IFwiQ3plY2hcIiwgdmFsdWU6IFwiY3NcIiB9LFxyXG4gIHsgbmFtZTogXCJPbGQgQ2h1cmNoIFNsYXZvbmljXCIsIHZhbHVlOiBcImN1XCIgfSxcclxuICB7IG5hbWU6IFwiQ2h1dmFzaFwiLCB2YWx1ZTogXCJjdlwiIH0sXHJcbiAgeyBuYW1lOiBcIldlbHNoXCIsIHZhbHVlOiBcImN5XCIgfSxcclxuICB7IG5hbWU6IFwiRGFuaXNoXCIsIHZhbHVlOiBcImRhXCIgfSxcclxuICB7IG5hbWU6IFwiR2VybWFuXCIsIHZhbHVlOiBcImRlXCIgfSxcclxuICB7IG5hbWU6IFwiRGl2ZWhpXCIsIHZhbHVlOiBcImR2XCIgfSxcclxuICB7IG5hbWU6IFwiRHpvbmdraGFcdFwiLCB2YWx1ZTogXCJkelwiIH0sXHJcbiAgeyBuYW1lOiBcIkV3ZVwiLCB2YWx1ZTogXCJlZVwiIH0sXHJcbiAgeyBuYW1lOiBcIkdyZWVrXCIsIHZhbHVlOiBcImVsXCIgfSxcclxuICB7IG5hbWU6IFwiRW5nbGlzaFwiLCB2YWx1ZTogXCJlblwiIH0sXHJcbiAgeyBuYW1lOiBcIkVzcGVyYW50b1wiLCB2YWx1ZTogXCJlb1wiIH0sXHJcbiAgeyBuYW1lOiBcIlNwYW5pc2hcIiwgdmFsdWU6IFwiZXNcIiB9LFxyXG4gIHsgbmFtZTogXCJFc3RvbmlhblwiLCB2YWx1ZTogXCJldFwiIH0sXHJcbiAgeyBuYW1lOiBcIkJhc3F1ZVwiLCB2YWx1ZTogXCJldVwiIH0sXHJcbiAgeyBuYW1lOiBcIlBlcnNpYW5cIiwgdmFsdWU6IFwiZmFcIiB9LFxyXG4gIHsgbmFtZTogXCJGdWxhaFwiLCB2YWx1ZTogXCJmZlwiIH0sXHJcbiAgeyBuYW1lOiBcIkZpbm5pc2hcIiwgdmFsdWU6IFwiZmlcIiB9LFxyXG4gIHsgbmFtZTogXCJGaWppYW5cIiwgdmFsdWU6IFwiZmpcIiB9LFxyXG4gIHsgbmFtZTogXCJGYXJvZXNlXCIsIHZhbHVlOiBcImZvXCIgfSxcclxuICB7IG5hbWU6IFwiRnJlbmNoXCIsIHZhbHVlOiBcImZyXCIgfSxcclxuICB7IG5hbWU6IFwiV2VzdGVybiBGcmlzaWFuXCIsIHZhbHVlOiBcImZ5XCIgfSxcclxuICB7IG5hbWU6IFwiSXJpc2hcIiwgdmFsdWU6IFwiZ2FcIiB9LFxyXG4gIHsgbmFtZTogXCJTY290dGlzaCBHYWVsaWNcIiwgdmFsdWU6IFwiZ2RcIiB9LFxyXG4gIHsgbmFtZTogXCJHYWxpY2lhblwiLCB2YWx1ZTogXCJnbFwiIH0sXHJcbiAgeyBuYW1lOiBcIkd1YXJhbmlcIiwgdmFsdWU6IFwiZ25cIiB9LFxyXG4gIHsgbmFtZTogXCJHdWphcmF0aVwiLCB2YWx1ZTogXCJndVwiIH0sXHJcbiAgeyBuYW1lOiBcIk1hbnhcIiwgdmFsdWU6IFwiZ3ZcIiB9LFxyXG4gIHsgbmFtZTogXCJIYXVzYVwiLCB2YWx1ZTogXCJoYVwiIH0sXHJcbiAgeyBuYW1lOiBcIkhlYnJld1wiLCB2YWx1ZTogXCJoZVwiIH0sXHJcbiAgeyBuYW1lOiBcIkhpbmRpXCIsIHZhbHVlOiBcImhpXCIgfSxcclxuICB7IG5hbWU6IFwiSGlyaSBNb3R1XCIsIHZhbHVlOiBcImhvXCIgfSxcclxuICB7IG5hbWU6IFwiQ3JvYXRpYW5cIiwgdmFsdWU6IFwiaHJcIiB9LFxyXG4gIHsgbmFtZTogXCJIYWl0aWFuXCIsIHZhbHVlOiBcImh0XCIgfSxcclxuICB7IG5hbWU6IFwiSHVuZ2FyaWFuXCIsIHZhbHVlOiBcImh1XCIgfSxcclxuICB7IG5hbWU6IFwiQXJtZW5pYW5cIiwgdmFsdWU6IFwiaHlcIiB9LFxyXG4gIHsgbmFtZTogXCJIZXJlcm9cIiwgdmFsdWU6IFwiaHpcIiB9LFxyXG4gIHsgbmFtZTogXCJJbnRlcmxpbmd1YVwiLCB2YWx1ZTogXCJpYVwiIH0sXHJcbiAgeyBuYW1lOiBcIkluZG9uZXNpYW5cIiwgdmFsdWU6IFwiaWRcIiB9LFxyXG4gIHsgbmFtZTogXCJJbnRlcmxpbmd1ZVwiLCB2YWx1ZTogXCJpZVwiIH0sXHJcbiAgeyBuYW1lOiBcIklnYm9cIiwgdmFsdWU6IFwiaWdcIiB9LFxyXG4gIHsgbmFtZTogXCJTaWNodWFuIFlpXCIsIHZhbHVlOiBcImlpXCIgfSxcclxuICB7IG5hbWU6IFwiSW51cGlhcVwiLCB2YWx1ZTogXCJpa1wiIH0sXHJcbiAgeyBuYW1lOiBcIklkb1wiLCB2YWx1ZTogXCJpb1wiIH0sXHJcbiAgeyBuYW1lOiBcIkljZWxhbmRpY1wiLCB2YWx1ZTogXCJpc1wiIH0sXHJcbiAgeyBuYW1lOiBcIkl0YWxpYW5cIiwgdmFsdWU6IFwiaXRcIiB9LFxyXG4gIHsgbmFtZTogXCJJbnVrdGl0dXRcIiwgdmFsdWU6IFwiaXVcIiB9LFxyXG4gIHsgbmFtZTogXCJKYXBhbmVzZVwiLCB2YWx1ZTogXCJqYVwiIH0sXHJcbiAgeyBuYW1lOiBcIkphdmFuZXNlXCIsIHZhbHVlOiBcImp2XCIgfSxcclxuICB7IG5hbWU6IFwiR2VvcmdpYW5cIiwgdmFsdWU6IFwia2FcIiB9LFxyXG4gIHsgbmFtZTogXCJLb25nb1wiLCB2YWx1ZTogXCJrZ1wiIH0sXHJcbiAgeyBuYW1lOiBcIktpa3V5dVwiLCB2YWx1ZTogXCJraVwiIH0sXHJcbiAgeyBuYW1lOiBcIkt3YW55YW1hXCIsIHZhbHVlOiBcImtqXCIgfSxcclxuICB7IG5hbWU6IFwiS2F6YWtoXCIsIHZhbHVlOiBcImtrXCIgfSxcclxuICB7IG5hbWU6IFwiR3JlZW5sYW5kaWNcIiwgdmFsdWU6IFwia2xcIiB9LFxyXG4gIHsgbmFtZTogXCJLaG1lclwiLCB2YWx1ZTogXCJrbVwiIH0sXHJcbiAgeyBuYW1lOiBcIkthbm5hZGFcIiwgdmFsdWU6IFwia25cIiB9LFxyXG4gIHsgbmFtZTogXCJLb3JlYW5cIiwgdmFsdWU6IFwia29cIiB9LFxyXG4gIHsgbmFtZTogXCJLYW51cmlcIiwgdmFsdWU6IFwia3JcIiB9LFxyXG4gIHsgbmFtZTogXCJLYXNobWlyaVwiLCB2YWx1ZTogXCJrc1wiIH0sXHJcbiAgeyBuYW1lOiBcIkt1cmRpc2hcIiwgdmFsdWU6IFwia3VcIiB9LFxyXG4gIHsgbmFtZTogXCJLb21pXCIsIHZhbHVlOiBcImt2XCIgfSxcclxuICB7IG5hbWU6IFwiQ29ybmlzaFwiLCB2YWx1ZTogXCJrd1wiIH0sXHJcbiAgeyBuYW1lOiBcIktpcmdoaXpcIiwgdmFsdWU6IFwia3lcIiB9LFxyXG4gIHsgbmFtZTogXCJMYXRpblwiLCB2YWx1ZTogXCJsYVwiIH0sXHJcbiAgeyBuYW1lOiBcIkx1eGVtYm91cmdpc2hcIiwgdmFsdWU6IFwibGJcIiB9LFxyXG4gIHsgbmFtZTogXCJHYW5kYVwiLCB2YWx1ZTogXCJsZ1wiIH0sXHJcbiAgeyBuYW1lOiBcIkxpbWJ1cmdpc2hcIiwgdmFsdWU6IFwibGlcIiB9LFxyXG4gIHsgbmFtZTogXCJMaW5nYWxhXCIsIHZhbHVlOiBcImxuXCIgfSxcclxuICB7IG5hbWU6IFwiTGFvXCIsIHZhbHVlOiBcImxvXCIgfSxcclxuICB7IG5hbWU6IFwiTGl0aHVhbmlhblwiLCB2YWx1ZTogXCJsdFwiIH0sXHJcbiAgeyBuYW1lOiBcIkx1YmFcIiwgdmFsdWU6IFwibHVcIiB9LFxyXG4gIHsgbmFtZTogXCJMYXR2aWFuXCIsIHZhbHVlOiBcImx2XCIgfSxcclxuICB7IG5hbWU6IFwiTWFsYWdhc3lcIiwgdmFsdWU6IFwibWdcIiB9LFxyXG4gIHsgbmFtZTogXCJNYXJzaGFsbGVzZVwiLCB2YWx1ZTogXCJtaFwiIH0sXHJcbiAgeyBuYW1lOiBcIk3EgW9yaVwiLCB2YWx1ZTogXCJtaVwiIH0sXHJcbiAgeyBuYW1lOiBcIk1hY2Vkb25pYW5cIiwgdmFsdWU6IFwibWtcIiB9LFxyXG4gIHsgbmFtZTogXCJNYWxheWFsYW1cIiwgdmFsdWU6IFwibWxcIiB9LFxyXG4gIHsgbmFtZTogXCJNb25nb2xpYW5cIiwgdmFsdWU6IFwibW5cIiB9LFxyXG4gIHsgbmFtZTogXCJNb2xkYXZpYW5cIiwgdmFsdWU6IFwibW9cIiB9LFxyXG4gIHsgbmFtZTogXCJNYXJhdGhpXCIsIHZhbHVlOiBcIm1yXCIgfSxcclxuICB7IG5hbWU6IFwiTWFsYXlcIiwgdmFsdWU6IFwibXNcIiB9LFxyXG4gIHsgbmFtZTogXCJNYWx0ZXNlXCIsIHZhbHVlOiBcIm10XCIgfSxcclxuICB7IG5hbWU6IFwiQnVybWVzZVwiLCB2YWx1ZTogXCJteVwiIH0sXHJcbiAgeyBuYW1lOiBcIk5hdXJ1XCIsIHZhbHVlOiBcIm5hXCIgfSxcclxuICB7IG5hbWU6IFwiTm9yd2VnaWFuIEJva23DpWxcIiwgdmFsdWU6IFwibmJcIiB9LFxyXG4gIHsgbmFtZTogXCJOb3J0aCBOZGViZWxlXCIsIHZhbHVlOiBcIm5kXCIgfSxcclxuICB7IG5hbWU6IFwiTmVwYWxpXCIsIHZhbHVlOiBcIm5lXCIgfSxcclxuICB7IG5hbWU6IFwiTmRvbmdhXCIsIHZhbHVlOiBcIm5nXCIgfSxcclxuICB7IG5hbWU6IFwiRHV0Y2hcIiwgdmFsdWU6IFwibmxcIiB9LFxyXG4gIHsgbmFtZTogXCJOb3J3ZWdpYW4gTnlub3Jza1wiLCB2YWx1ZTogXCJublwiIH0sXHJcbiAgeyBuYW1lOiBcIk5vcndlZ2lhblwiLCB2YWx1ZTogXCJub1wiIH0sXHJcbiAgeyBuYW1lOiBcIlNvdXRoIE5kZWJlbGVcIiwgdmFsdWU6IFwibnJcIiB9LFxyXG4gIHsgbmFtZTogXCJOYXZham9cIiwgdmFsdWU6IFwibnZcIiB9LFxyXG4gIHsgbmFtZTogXCJDaGljaGV3YVwiLCB2YWx1ZTogXCJueVwiIH0sXHJcbiAgeyBuYW1lOiBcIk9jY2l0YW5cIiwgdmFsdWU6IFwib2NcIiB9LFxyXG4gIHsgbmFtZTogXCJPamlid2FcIiwgdmFsdWU6IFwib2pcIiB9LFxyXG4gIHsgbmFtZTogXCJPcm9tb1wiLCB2YWx1ZTogXCJvbVwiIH0sXHJcbiAgeyBuYW1lOiBcIk9yaXlhXCIsIHZhbHVlOiBcIm9yXCIgfSxcclxuICB7IG5hbWU6IFwiT3NzZXRpYW5cIiwgdmFsdWU6IFwib3NcIiB9LFxyXG4gIHsgbmFtZTogXCJQYW5qYWJpXCIsIHZhbHVlOiBcInBhXCIgfSxcclxuICB7IG5hbWU6IFwiUMSBbGlcIiwgdmFsdWU6IFwicGlcIiB9LFxyXG4gIHsgbmFtZTogXCJQb2xpc2hcIiwgdmFsdWU6IFwicGxcIiB9LFxyXG4gIHsgbmFtZTogXCJQYXNodG9cIiwgdmFsdWU6IFwicHNcIiB9LFxyXG4gIHsgbmFtZTogXCJQb3J0dWd1ZXNlXCIsIHZhbHVlOiBcInB0XCIgfSxcclxuICB7IG5hbWU6IFwiUXVlY2h1YVwiLCB2YWx1ZTogXCJxdVwiIH0sXHJcbiAgeyBuYW1lOiBcIlJldW5pb25lc2VcIiwgdmFsdWU6IFwicmNcIiB9LFxyXG4gIHsgbmFtZTogXCJSb21hbnNoXCIsIHZhbHVlOiBcInJtXCIgfSxcclxuICB7IG5hbWU6IFwiS2lydW5kaVwiLCB2YWx1ZTogXCJyblwiIH0sXHJcbiAgeyBuYW1lOiBcIlJvbWFuaWFuXCIsIHZhbHVlOiBcInJvXCIgfSxcclxuICB7IG5hbWU6IFwiUnVzc2lhblwiLCB2YWx1ZTogXCJydVwiIH0sXHJcbiAgeyBuYW1lOiBcIktpbnlhcndhbmRhXCIsIHZhbHVlOiBcInJ3XCIgfSxcclxuICB7IG5hbWU6IFwiU2Fuc2tyaXRcIiwgdmFsdWU6IFwic2FcIiB9LFxyXG4gIHsgbmFtZTogXCJTYXJkaW5pYW5cIiwgdmFsdWU6IFwic2NcIiB9LFxyXG4gIHsgbmFtZTogXCJTaW5kaGlcIiwgdmFsdWU6IFwic2RcIiB9LFxyXG4gIHsgbmFtZTogXCJOb3J0aGVybiBTYW1pXCIsIHZhbHVlOiBcInNlXCIgfSxcclxuICB7IG5hbWU6IFwiU2FuZ29cIiwgdmFsdWU6IFwic2dcIiB9LFxyXG4gIHsgbmFtZTogXCJTZXJiby1Dcm9hdGlhblwiLCB2YWx1ZTogXCJzaFwiIH0sXHJcbiAgeyBuYW1lOiBcIlNpbmhhbGVzZVwiLCB2YWx1ZTogXCJzaVwiIH0sXHJcbiAgeyBuYW1lOiBcIlNsb3Zha1wiLCB2YWx1ZTogXCJza1wiIH0sXHJcbiAgeyBuYW1lOiBcIlNsb3ZlbmlhblwiLCB2YWx1ZTogXCJzbFwiIH0sXHJcbiAgeyBuYW1lOiBcIlNhbW9hblwiLCB2YWx1ZTogXCJzbVwiIH0sXHJcbiAgeyBuYW1lOiBcIlNob25hXCIsIHZhbHVlOiBcInNuXCIgfSxcclxuICB7IG5hbWU6IFwiU29tYWxpXCIsIHZhbHVlOiBcInNvXCIgfSxcclxuICB7IG5hbWU6IFwiQWxiYW5pYW5cIiwgdmFsdWU6IFwic3FcIiB9LFxyXG4gIHsgbmFtZTogXCJTZXJiaWFuXCIsIHZhbHVlOiBcInNyXCIgfSxcclxuICB7IG5hbWU6IFwiU3dhdGlcIiwgdmFsdWU6IFwic3NcIiB9LFxyXG4gIHsgbmFtZTogXCJTb3Rob1wiLCB2YWx1ZTogXCJzdFwiIH0sXHJcbiAgeyBuYW1lOiBcIlN1bmRhbmVzZVwiLCB2YWx1ZTogXCJzdVwiIH0sXHJcbiAgeyBuYW1lOiBcIlN3ZWRpc2hcIiwgdmFsdWU6IFwic3ZcIiB9LFxyXG4gIHsgbmFtZTogXCJTd2FoaWxpXCIsIHZhbHVlOiBcInN3XCIgfSxcclxuICB7IG5hbWU6IFwiVGFtaWxcIiwgdmFsdWU6IFwidGFcIiB9LFxyXG4gIHsgbmFtZTogXCJUZWx1Z3VcIiwgdmFsdWU6IFwidGVcIiB9LFxyXG4gIHsgbmFtZTogXCJUYWppa1wiLCB2YWx1ZTogXCJ0Z1wiIH0sXHJcbiAgeyBuYW1lOiBcIlRoYWlcIiwgdmFsdWU6IFwidGhcIiB9LFxyXG4gIHsgbmFtZTogXCJUaWdyaW55YVwiLCB2YWx1ZTogXCJ0aVwiIH0sXHJcbiAgeyBuYW1lOiBcIlR1cmttZW5cIiwgdmFsdWU6IFwidGtcIiB9LFxyXG4gIHsgbmFtZTogXCJUYWdhbG9nXCIsIHZhbHVlOiBcInRsXCIgfSxcclxuICB7IG5hbWU6IFwiVHN3YW5hXCIsIHZhbHVlOiBcInRuXCIgfSxcclxuICB7IG5hbWU6IFwiVG9uZ2FcIiwgdmFsdWU6IFwidG9cIiB9LFxyXG4gIHsgbmFtZTogXCJUdXJraXNoXCIsIHZhbHVlOiBcInRyXCIgfSxcclxuICB7IG5hbWU6IFwiVHNvbmdhXCIsIHZhbHVlOiBcInRzXCIgfSxcclxuICB7IG5hbWU6IFwiVGF0YXJcIiwgdmFsdWU6IFwidHRcIiB9LFxyXG4gIHsgbmFtZTogXCJUd2lcIiwgdmFsdWU6IFwidHdcIiB9LFxyXG4gIHsgbmFtZTogXCJUYWhpdGlhblwiLCB2YWx1ZTogXCJ0eVwiIH0sXHJcbiAgeyBuYW1lOiBcIlVpZ2h1clwiLCB2YWx1ZTogXCJ1Z1wiIH0sXHJcbiAgeyBuYW1lOiBcIlVrcmFpbmlhblwiLCB2YWx1ZTogXCJ1a1wiIH0sXHJcbiAgeyBuYW1lOiBcIlVyZHVcIiwgdmFsdWU6IFwidXJcIiB9LFxyXG4gIHsgbmFtZTogXCJVemJla1wiLCB2YWx1ZTogXCJ1elwiIH0sXHJcbiAgeyBuYW1lOiBcIlZlbmRhXCIsIHZhbHVlOiBcInZlXCIgfSxcclxuICB7IG5hbWU6IFwiVmnDqnQgTmFtZXNlXCIsIHZhbHVlOiBcInZpXCIgfSxcclxuICB7IG5hbWU6IFwiVm9sYXDDvGtcIiwgdmFsdWU6IFwidm9cIiB9LFxyXG4gIHsgbmFtZTogXCJXYWxsb29uXCIsIHZhbHVlOiBcIndhXCIgfSxcclxuICB7IG5hbWU6IFwiV29sb2ZcIiwgdmFsdWU6IFwid29cIiB9LFxyXG4gIHsgbmFtZTogXCJYaG9zYVwiLCB2YWx1ZTogXCJ4aFwiIH0sXHJcbiAgeyBuYW1lOiBcIllpZGRpc2hcIiwgdmFsdWU6IFwieWlcIiB9LFxyXG4gIHsgbmFtZTogXCJZb3J1YmFcIiwgdmFsdWU6IFwieW9cIiB9LFxyXG4gIHsgbmFtZTogXCJaaHVhbmdcIiwgdmFsdWU6IFwiemFcIiB9LFxyXG4gIHsgbmFtZTogXCJDaGluZXNlXCIsIHZhbHVlOiBcInpoXCIgfSxcclxuICB7IG5hbWU6IFwiWnVsdVwiLCB2YWx1ZTogXCJ6dVwiIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgU1RBVFVTID0gW1xyXG4gIHsgbmFtZTogXCJJbiBQcm9ncmVzc1wiLCB2YWx1ZTogXCJpbiBwcm9ncmVzc1wiIH0sXHJcbiAgeyBuYW1lOiBcIkluIEhpYXR1c1wiLCB2YWx1ZTogXCJpbiBoaWF0dXNcIiB9LFxyXG4gIHsgbmFtZTogXCJDb21wbGV0ZWRcIiwgdmFsdWU6IFwiY29tcGxldGVkXCIgfSxcclxuXTtcclxuXHJcbi8vIFRZUEVTXHJcbmV4cG9ydCBjb25zdCBHRVRfUFJPRklMRSA9IFwiR0VUX1BST0ZJTEVcIjtcclxuZXhwb3J0IGNvbnN0IExPR0lOID0gXCJMT0dJTlwiO1xyXG5leHBvcnQgY29uc3QgUkVHSVNURVIgPSBcIlJFR0lTVEVSXCI7XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX1NUT1JZID0gXCJHRVRfU1RPUllcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9DSEFQVEVSUyA9IFwiR0VUX0NIQVBURVJTXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfVVNFUl9TVE9SSUVTID0gXCJHRVRfVVNFUl9TVE9SSUVTXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfRkFWT1JJVEVfU1RPUklFUyA9IFwiR0VUX0ZBVk9SSVRFX1NUT1JJRVNcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9TVE9SWSA9IFwiQUREX1NUT1JZXCI7XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX1VTRVJfQ0hBUkFDVEVSUyA9IFwiR0VUX1VTRVJfQ0hBUkFDVEVSU1wiO1xyXG5leHBvcnQgY29uc3QgR0VUX0ZBVk9SSVRFX0NIQVJBQ1RFUlMgPSBcIkdFVF9GQVZPUklURV9DSEFSQUNURVJTXCI7XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX0ZBVk9SSVRFX0FVVEhPUlMgPSBcIkdFVF9GQVZPUklURV9BVVRIT1JTXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfRk9MTE9XRVJTID0gXCJHRVRfRk9MTE9XRVJTXCI7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvYXBwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2F1dGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvZmlyZXN0b3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL3N0b3JhZ2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaXMtaW1hZ2UtdXJsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=