module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"pages/story/[id]/chapter/[chapid]/edit": 0
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/story/[id]/chapter/[chapid]/edit.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/forms/ChapterForm.js":
/*!*****************************************!*\
  !*** ./components/forms/ChapterForm.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! draft-js */ "draft-js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var draft_convert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! draft-convert */ "draft-convert");
/* harmony import */ var draft_convert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(draft_convert__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_draft_wysiwyg_dist_react_draft_wysiwyg_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-draft-wysiwyg/dist/react-draft-wysiwyg.css */ "./node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css");
/* harmony import */ var react_draft_wysiwyg_dist_react_draft_wysiwyg_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_draft_wysiwyg_dist_react_draft_wysiwyg_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ItemSelector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ItemSelector */ "./components/forms/ItemSelector.js");
/* harmony import */ var _RadioButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./RadioButton */ "./components/forms/RadioButton.js");
var _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\components\\forms\\ChapterForm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const Editor = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! react-draft-wysiwyg */ "react-draft-wysiwyg", 7)).then(mod => mod.Editor), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! react-draft-wysiwyg */ "react-draft-wysiwyg")],
    modules: ["react-draft-wysiwyg"]
  }
});

const ChapterForm = ({
  form,
  submit,
  characters,
  locations,
  setBody,
  loadingChapter,
  type,
  chapter
}) => {
  const [status, setStatus] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("true");
  const [editorState, setEditorState] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(type === "add" ? draft_js__WEBPACK_IMPORTED_MODULE_3__["EditorState"].createEmpty() : draft_js__WEBPACK_IMPORTED_MODULE_3__["EditorState"].createWithContent(Object(draft_convert__WEBPACK_IMPORTED_MODULE_4__["convertFromHTML"])(chapter && chapter.body)));

  const onEditorStateChange = state => {
    setEditorState(state);
    const html = Object(draft_convert__WEBPACK_IMPORTED_MODULE_4__["convertToHTML"])(editorState.getCurrentContent());
    setBody(html);
  };

  return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    layout: "vertical",
    form: form,
    onFinish: submit,
    initialValues: type === "add" ? {
      number: 0,
      title: "",
      body: "",
      status: "true",
      locations: [],
      characters: []
    } : _objectSpread({}, chapter),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    gutter: [24, 24],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    lg: 16,
    md: 16,
    sm: 24,
    xs: 24,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
    rules: [{
      required: true,
      message: "A title is required"
    }],
    name: "title",
    label: "Title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    lg: 4,
    md: 4,
    sm: 24,
    xs: 24,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
    rules: [{
      required: true,
      message: "A number is required"
    }],
    label: "Number",
    name: "number",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["InputNumber"], {
    min: 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  }))), __jsx(_RadioButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
    lg: 4,
    md: 4,
    xs: 24,
    sm: 24,
    name: "status",
    label: "Status",
    num1: 1,
    num2: 2,
    label1: "Publish",
    label2: "Draft",
    form: form,
    setFunc: setStatus,
    val: status,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
    name: "body",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }
  }, __jsx(Editor, {
    editorKey: "editor",
    defaultEditorState: editorState,
    editorState: editorState,
    onEditorStateChange: onEditorStateChange,
    placeholder: "Start writing your story...",
    wrapperClassName: "wrapper-class",
    editorClassName: "editor-class",
    toolbarClassName: "toolbar-class",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 9
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 7
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    gutter: 24,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    md: 12,
    xs: 24,
    sm: 24,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 9
    }
  }, __jsx(_ItemSelector__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: "Characters in this chapter",
    arrInForm: "characters",
    form: form,
    type: "chapter",
    subject: characters,
    lg1: 24,
    subjectType: "characters",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 11
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    md: 12,
    xs: 24,
    sm: 24,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 9
    }
  }, __jsx(_ItemSelector__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: "Locations in this chapter",
    arrInForm: "locations",
    form: form,
    type: "chapter",
    subject: locations,
    lg1: 24,
    subjectType: "locations",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 11
    }
  }))), type === "add" ? loadingChapter ? __jsx("button", {
    disabled: true,
    className: "spin-btn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Spin"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 13
    }
  })) : __jsx("button", {
    type: "submit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 11
    }
  }, "Create") : loadingChapter ? __jsx("button", {
    disabled: true,
    className: "spin-btn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Spin"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 11
    }
  })) : __jsx("button", {
    type: "submit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 9
    }
  }, "Edit"));
};

/* harmony default export */ __webpack_exports__["default"] = (ChapterForm);

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

/***/ "./node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css":
/*!***********************************************************************!*\
  !*** ./node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/story/[id]/chapter/[chapid]/edit.js":
/*!***************************************************!*\
  !*** ./pages/story/[id]/chapter/[chapid]/edit.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_userHooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../hooks/userHooks */ "./hooks/userHooks.js");
/* harmony import */ var _redux_actions_storiesActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../redux/actions/storiesActions */ "./redux/actions/storiesActions.js");
/* harmony import */ var _redux_actions_charactersActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../redux/actions/charactersActions */ "./redux/actions/charactersActions.js");
/* harmony import */ var _components_forms_ChapterForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../components/forms/ChapterForm */ "./components/forms/ChapterForm.js");
/* harmony import */ var _components_hoc_LoadingScreen__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../components/hoc/LoadingScreen */ "./components/hoc/LoadingScreen.js");
/* harmony import */ var _components_hoc_RedirectComp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../components/hoc/RedirectComp */ "./components/hoc/RedirectComp.js");
var _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\pages\\story\\[id]\\chapter\\[chapid]\\edit.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












const EditChapter = props => {
  const [form] = antd__WEBPACK_IMPORTED_MODULE_2__["Form"].useForm();
  const {
    characters,
    loading,
    locations,
    loadingChapter,
    chapter,
    chapterExists,
    editMessage
  } = props;
  const auth = Object(_hooks_userHooks__WEBPACK_IMPORTED_MODULE_4__["useAuth"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const [body, setBody] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("");
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    props.getChapter(router.query.id, router.query.chapid);
  }, []);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    if (editMessage) {
      antd__WEBPACK_IMPORTED_MODULE_2__["message"].success(editMessage);
    }
  }, [editMessage]);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    if (auth.user) {
      props.getUserCharacters(auth.user.uid);
      props.getUserLocations(auth.user.uid);
    }
  }, [auth]);

  const submit = values => {
    delete values.currentChar;
    delete values.currentLoc;
    props.editChapter(_objectSpread(_objectSpread({}, values), {}, {
      body,
      status: values.status === "true"
    }), router.query.id, router.query.chapid);
  }; // console.log(form.getFieldsValue());


  return __jsx(_components_hoc_LoadingScreen__WEBPACK_IMPORTED_MODULE_8__["default"], {
    loading: loading,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 5
    }
  }, __jsx(_components_hoc_RedirectComp__WEBPACK_IMPORTED_MODULE_9__["default"], {
    type: "404",
    condition: chapterExists,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }
  }, __jsx(_components_hoc_RedirectComp__WEBPACK_IMPORTED_MODULE_9__["default"], {
    type: "403",
    condition: auth.user && auth.user.uid === chapter.authorId,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "custom-form",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "inner",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }, __jsx("h2", {
    className: "side-heading",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 15
    }
  }, "Add a new chapter"), __jsx(_components_forms_ChapterForm__WEBPACK_IMPORTED_MODULE_7__["default"], {
    submit: submit,
    form: form,
    characters: characters,
    locations: locations,
    body: body,
    setBody: setBody,
    type: "edit",
    loadingChapter: loadingChapter,
    loading: loading,
    chapter: chapter,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 15
    }
  }))))));
};

const mapStateToProps = state => ({
  chapter: state.stories.chapter,
  characters: state.characters.userCharacters,
  loading: state.stories.loading,
  locations: state.stories.userLocations,
  loadingChapter: state.stories.loadingChapter,
  chapterExists: state.stories.chapterExists,
  editMessage: state.stories.message
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  getChapter: _redux_actions_storiesActions__WEBPACK_IMPORTED_MODULE_5__["getChapter"],
  getUserCharacters: _redux_actions_charactersActions__WEBPACK_IMPORTED_MODULE_6__["getUserCharacters"],
  getUserLocations: _redux_actions_storiesActions__WEBPACK_IMPORTED_MODULE_5__["getUserLocations"],
  editChapter: _redux_actions_storiesActions__WEBPACK_IMPORTED_MODULE_5__["editChapter"]
})(EditChapter));

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
/*! exports provided: CATEGORIES, COPYRIGHTS, LANGUAGES, STATUS, GET_PROFILE, LOGIN, REGISTER, GET_STORY, GET_USER_STORIES, GET_FAVORITE_STORIES, ADD_STORY, EDIT_STORY, GET_CHAPTER, ADD_CHAPTER, EDIT_CHAPTER, GET_CHAPTERS, GET_USER_CHARACTERS, GET_USER_LOCATIONS, GET_FAVORITE_CHARACTERS, GET_FAVORITE_AUTHORS, GET_FOLLOWERS, DISPATCH_ERROR */
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
const GET_USER_CHARACTERS = "GET_USER_CHARACTERS";
const GET_USER_LOCATIONS = "GET_USER_LOCATIONS";
const GET_FAVORITE_CHARACTERS = "GET_FAVORITE_CHARACTERS";
const GET_FAVORITE_AUTHORS = "GET_FAVORITE_AUTHORS";
const GET_FOLLOWERS = "GET_FOLLOWERS";
const DISPATCH_ERROR = "DISPATCH_ERROR";

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "draft-convert":
/*!********************************!*\
  !*** external "draft-convert" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("draft-convert");

/***/ }),

/***/ "draft-js":
/*!***************************!*\
  !*** external "draft-js" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("draft-js");

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

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

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

/***/ "react-draft-wysiwyg":
/*!**************************************!*\
  !*** external "react-draft-wysiwyg" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-draft-wysiwyg");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mb3Jtcy9DaGFwdGVyRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvcm1zL0l0ZW1TZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvcm1zL1JhZGlvQnV0dG9uLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaG9jL0xvYWRpbmdTY3JlZW4uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9ob2MvUmVkaXJlY3RDb21wLmpzIiwid2VicGFjazovLy8uL2hvb2tzL3VzZXJIb29rcy5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9zdG9yeS8vY2hhcHRlci9bY2hhcGlkXS9lZGl0LmpzIiwid2VicGFjazovLy8uL3JlZHV4L2FjdGlvbnMvY2hhcmFjdGVyc0FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWN0aW9ucy9zdG9yaWVzQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9mYkNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImRyYWZ0LWNvbnZlcnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkcmFmdC1qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL2FwcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL2F1dGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9maXJlc3RvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9zdG9yYWdlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9keW5hbWljXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRyYWZ0LXd5c2l3eWdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIl0sIm5hbWVzIjpbIkVkaXRvciIsImR5bmFtaWMiLCJ0aGVuIiwibW9kIiwic3NyIiwiQ2hhcHRlckZvcm0iLCJmb3JtIiwic3VibWl0IiwiY2hhcmFjdGVycyIsImxvY2F0aW9ucyIsInNldEJvZHkiLCJsb2FkaW5nQ2hhcHRlciIsInR5cGUiLCJjaGFwdGVyIiwic3RhdHVzIiwic2V0U3RhdHVzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImVkaXRvclN0YXRlIiwic2V0RWRpdG9yU3RhdGUiLCJFZGl0b3JTdGF0ZSIsImNyZWF0ZUVtcHR5IiwiY3JlYXRlV2l0aENvbnRlbnQiLCJjb252ZXJ0RnJvbUhUTUwiLCJib2R5Iiwib25FZGl0b3JTdGF0ZUNoYW5nZSIsInN0YXRlIiwiaHRtbCIsImNvbnZlcnRUb0hUTUwiLCJnZXRDdXJyZW50Q29udGVudCIsIm51bWJlciIsInRpdGxlIiwicmVxdWlyZWQiLCJtZXNzYWdlIiwiT3B0aW9uIiwiU2VsZWN0IiwiSXRlbVNlbGVjdG9yIiwiaXRlbSIsInN1YmplY3QiLCJhcnJJbkZvcm0iLCJsYWJlbCIsImxnMSIsInN1YmplY3RUeXBlIiwiY3VycmVudENoYXIiLCJzZXRDdXJyZW50Q2hhciIsImN1cnJlbnRMb2MiLCJzZXRDdXJyZW50TG9jIiwic2VsZWN0ZWRTdWJqZWN0cyIsInNldFNlbGVjdGVkU3ViamVjdHMiLCJmaWx0ZXIiLCJjIiwiaW5jbHVkZXMiLCJpZCIsImFkZENoYXJhY3RlciIsImN1cnJlbnQiLCJzZXRDdXJyZW50IiwiZ2V0RmllbGRWYWx1ZSIsImxlbmd0aCIsImluZGV4T2YiLCJmaW5kIiwic2V0RmllbGRzVmFsdWUiLCJyZW1vdmVDaGFyYWN0ZXIiLCJ2YWwiLCJzb3J0IiwiYSIsImIiLCJrZXlBIiwiZmlyc3RuYW1lIiwia2V5QiIsIm1hcCIsImNoYXIiLCJsYXN0bmFtZSIsIm5hbWUiLCJpbWFnZSIsIm1hcmdpbiIsIlJhZGlvQnV0b24iLCJsZyIsInNtIiwieHMiLCJtZCIsIm51bTEiLCJudW0yIiwibGFiZWwxIiwibGFiZWwyIiwic2V0RnVuYyIsIkxvYWRpbmdTY3JlZW4iLCJjaGlsZHJlbiIsImxvYWRpbmciLCJSZWRpcmVjdENvbXAiLCJjb25kaXRpb24iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJhdXRoQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJQcm92aWRlQXV0aCIsImF1dGgiLCJ1c2VQcm92aWRlQXV0aCIsInVzZUF1dGgiLCJ1c2VDb250ZXh0IiwidXNlciIsInNldFVzZXIiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJzaWduaW4iLCJlbWFpbCIsInBhc3N3b3JkIiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJyZXNwb25zZSIsInNpZ251cCIsInVzZXJuYW1lIiwiY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwiZGIiLCJjb2xsZWN0aW9uIiwiYWRkIiwiYmFkZ2VzIiwiYmlvZ3JhcGh5IiwiY3JlYXRlZEF0IiwiZmlyZWJhc2UiLCJmaXJlc3RvcmUiLCJGaWVsZFZhbHVlIiwic2VydmVyVGltZXN0YW1wIiwic3VzcGVuZGVkIiwiZmFjZWJvb2siLCJpbnN0YWdyYW0iLCJ0d2l0dGVyIiwiZGV2aWFudGFydCIsImxpa2VzQ291bnQiLCJzaWdub3V0Iiwic2lnbk91dCIsInNlbmRQYXNzd29yZFJlc2V0RW1haWwiLCJjb25maXJtUGFzc3dvcmRSZXNldCIsImNvZGUiLCJ1c2VFZmZlY3QiLCJ1bnN1YnNjcmliZSIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsInVpZCIsImRvYyIsIm9uU25hcHNob3QiLCJkYXRhIiwiRWRpdENoYXB0ZXIiLCJwcm9wcyIsIkZvcm0iLCJ1c2VGb3JtIiwiY2hhcHRlckV4aXN0cyIsImVkaXRNZXNzYWdlIiwicm91dGVyIiwidXNlUm91dGVyIiwiZ2V0Q2hhcHRlciIsInF1ZXJ5IiwiY2hhcGlkIiwic3VjY2VzcyIsImdldFVzZXJDaGFyYWN0ZXJzIiwiZ2V0VXNlckxvY2F0aW9ucyIsInZhbHVlcyIsImVkaXRDaGFwdGVyIiwiYXV0aG9ySWQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdG9yaWVzIiwidXNlckNoYXJhY3RlcnMiLCJ1c2VyTG9jYXRpb25zIiwiY29ubmVjdCIsImRpc3BhdGNoIiwid2hlcmUiLCJjdXJyZW50VXNlciIsImdldCIsImRvY3MiLCJpdGVtcyIsImZvckVhY2giLCJHRVRfVVNFUl9DSEFSQUNURVJTIiwicGF5bG9hZCIsImdldEZhdm9yaXRlQ2hhcmFjdGVycyIsImZhdkFyciIsImNoYXJhY3RlcklkIiwidXNlcnMiLCJyZXN1bHQiLCJQcm9taXNlIiwiYWxsIiwicmVzIiwiZmF2VXNlcnMiLCJHRVRfRkFWT1JJVEVfQ0hBUkFDVEVSUyIsImdldFN0b3J5IiwiZXhpc3RzIiwiR0VUX1NUT1JZIiwic3RvcnlFeGlzdHMiLCJESVNQQVRDSF9FUlJPUiIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImFkZFN0b3J5IiwiQUREX1NUT1JZIiwiaW1hZ2VOYW1lIiwidG9Mb3dlckNhc2UiLCJzcGxpdCIsImpvaW4iLCJiYW5uZXIiLCJzdG9yYWdlIiwicmVmIiwicHV0IiwiY2hpbGQiLCJnZXREb3dubG9hZFVSTCIsInVybCIsImF1dGhvck5hbWUiLCJvbmVTaG90IiwiY2hhcHRlcnNDb3VudCIsImxvY2F0aW9uc0NvdW50Iiwic2Vjb25kYXJ5Q2hhcmFjdGVycyIsImZlYXR1cmVkIiwibm90ZSIsInNldFRpbWVvdXQiLCJSb3V0ZXIiLCJwdXNoIiwic3RvcnlJZCIsImVycm9yIiwiZWRpdFN0b3J5IiwiRURJVF9TVE9SWSIsImxvYWRpbmdTdG9yeSIsInVwZGF0ZSIsImFkZENoYXB0ZXIiLCJBRERfQ0hBUFRFUiIsImNvbW1lbnRzQ291bnQiLCJ2b3RlcnMiLCJ2b3Rlc0NvdW50IiwibWFpbiIsIm1haW5DaGFyYWN0ZXJzIiwiU2V0IiwiY2hhcElkIiwiR0VUX0NIQVBURVIiLCJFRElUX0NIQVBURVIiLCJnZXRDaGFwdGVycyIsIm9yZGVyQnkiLCJhcnIiLCJHRVRfQ0hBUFRFUlMiLCJnZXRTdG9yeUNoYXJhY3RlcnMiLCJnZXRVc2VyU3RvcmllcyIsIkdFVF9VU0VSX1NUT1JJRVMiLCJHRVRfVVNFUl9MT0NBVElPTlMiLCJnZXRGYXZvcml0ZVN0b3JpZXMiLCJHRVRfRkFWT1JJVEVfU1RPUklFUyIsInByb2RDb25maWciLCJhcGlLZXkiLCJwcm9jZXNzIiwiYXV0aERvbWFpbiIsImRhdGFiYXNlVVJMIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJGSVJFQkFTRV9BUFBfSUQiLCJkZXZDb25maWciLCJjb25maWciLCJhcHBzIiwiaW5pdGlhbGl6ZUFwcCIsIkNBVEVHT1JJRVMiLCJ2YWx1ZSIsIkNPUFlSSUdIVFMiLCJMQU5HVUFHRVMiLCJTVEFUVVMiLCJHRVRfUFJPRklMRSIsIkxPR0lOIiwiUkVHSVNURVIiLCJHRVRfRkFWT1JJVEVfQVVUSE9SUyIsIkdFVF9GT0xMT1dFUlMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztR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LE1BQUksRUFBRSxVQUFSO0FBQW9CdUwsT0FBSyxFQUFFO0FBQTNCLENBdER1QixFQXVEdkI7QUFBRXZMLE1BQUksRUFBRSxNQUFSO0FBQWdCdUwsT0FBSyxFQUFFO0FBQXZCLENBdkR1QixFQXdEdkI7QUFBRXZMLE1BQUksRUFBRSxPQUFSO0FBQWlCdUwsT0FBSyxFQUFFO0FBQXhCLENBeER1QixFQXlEdkI7QUFBRXZMLE1BQUksRUFBRSxRQUFSO0FBQWtCdUwsT0FBSyxFQUFFO0FBQXpCLENBekR1QixFQTBEdkI7QUFBRXZMLE1BQUksRUFBRSxPQUFSO0FBQWlCdUwsT0FBSyxFQUFFO0FBQXhCLENBMUR1QixFQTJEdkI7QUFBRXZMLE1BQUksRUFBRSxXQUFSO0FBQXFCdUwsT0FBSyxFQUFFO0FBQTVCLENBM0R1QixFQTREdkI7QUFBRXZMLE1BQUksRUFBRSxVQUFSO0FBQW9CdUwsT0FBSyxFQUFFO0FBQTNCLENBNUR1QixFQTZEdkI7QUFBRXZMLE1BQUksRUFBRSxTQUFSO0FBQW1CdUwsT0FBSyxFQUFFO0FBQTFCLENBN0R1QixFQThEdkI7QUFBRXZMLE1BQUksRUFBRSxXQUFSO0FBQXFCdUwsT0FBSyxFQUFFO0FBQTVCLENBOUR1QixFQStEdkI7QUFBRXZMLE1BQUksRUFBRSxVQUFSO0FBQW9CdUwsT0FBSyxFQUFFO0FBQTNCLENBL0R1QixFQWdFdkI7QUFBRXZMLE1BQUksRUFBRSxRQUFSO0FBQWtCdUwsT0FBSyxFQUFFO0FBQXpCLENBaEV1QixFQWlFdkI7QUFBRXZMLE1BQUksRUFBRSxhQUFSO0FBQXVCdUwsT0FBSyxFQUFFO0FBQTlCLENBakV1QixFQWtFdkI7QUFBRXZMLE1BQUksRUFBRSxZQUFSO0FBQXNCdUwsT0FBSyxFQUFFO0FBQTdCLENBbEV1QixFQW1FdkI7QUFBRXZMLE1BQUksRUFBRSxhQUFSO0FBQXVCdUwsT0FBSyxFQUFFO0FBQTlCLENBbkV1QixFQW9FdkI7QUFBRXZMLE1BQUksRUFBRSxNQUFSO0FBQWdCdUwsT0FBSyxFQUFFO0FBQXZCLENBcEV1QixFQXFFdkI7QUFBRXZM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Y2hhcHRlci9bY2hhcGlkXS9lZGl0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgY2h1bmtzXG4gXHQvLyBcIjBcIiBtZWFucyBcImFscmVhZHkgbG9hZGVkXCJcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwicGFnZXMvc3RvcnkvW2lkXS9jaGFwdGVyL1tjaGFwaWRdL2VkaXRcIjogMFxuIFx0fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyB1bmNhdWdodCBlcnJvciBoYW5kbGVyIGZvciB3ZWJwYWNrIHJ1bnRpbWVcbiBcdF9fd2VicGFja19yZXF1aXJlX18ub2UgPSBmdW5jdGlvbihlcnIpIHtcbiBcdFx0cHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbigpIHtcbiBcdFx0XHR0aHJvdyBlcnI7IC8vIGNhdGNoIHRoaXMgZXJyb3IgYnkgdXNpbmcgaW1wb3J0KCkuY2F0Y2goKVxuIFx0XHR9KTtcbiBcdH07XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvc3RvcnkvW2lkXS9jaGFwdGVyL1tjaGFwaWRdL2VkaXQuanNcIik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcclxuaW1wb3J0IHsgRm9ybSwgUm93LCBDb2wsIElucHV0TnVtYmVyLCBJbnB1dCwgRGl2aWRlciwgU3BpbiB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IEVkaXRvclN0YXRlIH0gZnJvbSBcImRyYWZ0LWpzXCI7XHJcbmltcG9ydCB7IGNvbnZlcnRUb0hUTUwsIGNvbnZlcnRGcm9tSFRNTCB9IGZyb20gXCJkcmFmdC1jb252ZXJ0XCI7XHJcbmltcG9ydCBcInJlYWN0LWRyYWZ0LXd5c2l3eWcvZGlzdC9yZWFjdC1kcmFmdC13eXNpd3lnLmNzc1wiO1xyXG5cclxuaW1wb3J0IEl0ZW1TZWxlY3RvciBmcm9tIFwiLi9JdGVtU2VsZWN0b3JcIjtcclxuaW1wb3J0IFJhZGlvQnV0dG9uIGZyb20gXCIuL1JhZGlvQnV0dG9uXCI7XHJcbmNvbnN0IEVkaXRvciA9IGR5bmFtaWMoXHJcbiAgKCkgPT4gaW1wb3J0KFwicmVhY3QtZHJhZnQtd3lzaXd5Z1wiKS50aGVuKChtb2QpID0+IG1vZC5FZGl0b3IpLFxyXG4gIHsgc3NyOiBmYWxzZSB9XHJcbik7XHJcblxyXG5jb25zdCBDaGFwdGVyRm9ybSA9ICh7XHJcbiAgZm9ybSxcclxuICBzdWJtaXQsXHJcbiAgY2hhcmFjdGVycyxcclxuICBsb2NhdGlvbnMsXHJcbiAgc2V0Qm9keSxcclxuICBsb2FkaW5nQ2hhcHRlcixcclxuICB0eXBlLFxyXG4gIGNoYXB0ZXIsXHJcbn0pID0+IHtcclxuICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gUmVhY3QudXNlU3RhdGUoXCJ0cnVlXCIpO1xyXG5cclxuICBjb25zdCBbZWRpdG9yU3RhdGUsIHNldEVkaXRvclN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKFxyXG4gICAgdHlwZSA9PT0gXCJhZGRcIlxyXG4gICAgICA/IEVkaXRvclN0YXRlLmNyZWF0ZUVtcHR5KClcclxuICAgICAgOiBFZGl0b3JTdGF0ZS5jcmVhdGVXaXRoQ29udGVudChjb252ZXJ0RnJvbUhUTUwoY2hhcHRlciAmJiBjaGFwdGVyLmJvZHkpKVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IG9uRWRpdG9yU3RhdGVDaGFuZ2UgPSAoc3RhdGUpID0+IHtcclxuICAgIHNldEVkaXRvclN0YXRlKHN0YXRlKTtcclxuICAgIGNvbnN0IGh0bWwgPSBjb252ZXJ0VG9IVE1MKGVkaXRvclN0YXRlLmdldEN1cnJlbnRDb250ZW50KCkpO1xyXG4gICAgc2V0Qm9keShodG1sKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1cclxuICAgICAgbGF5b3V0PVwidmVydGljYWxcIlxyXG4gICAgICBmb3JtPXtmb3JtfVxyXG4gICAgICBvbkZpbmlzaD17c3VibWl0fVxyXG4gICAgICBpbml0aWFsVmFsdWVzPXtcclxuICAgICAgICB0eXBlID09PSBcImFkZFwiXHJcbiAgICAgICAgICA/IHtcclxuICAgICAgICAgICAgICBudW1iZXI6IDAsXHJcbiAgICAgICAgICAgICAgdGl0bGU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgYm9keTogXCJcIixcclxuICAgICAgICAgICAgICBzdGF0dXM6IFwidHJ1ZVwiLFxyXG4gICAgICAgICAgICAgIGxvY2F0aW9uczogW10sXHJcbiAgICAgICAgICAgICAgY2hhcmFjdGVyczogW10sXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDogeyAuLi5jaGFwdGVyIH1cclxuICAgICAgfVxyXG4gICAgPlxyXG4gICAgICA8Um93IGd1dHRlcj17WzI0LCAyNF19PlxyXG4gICAgICAgIDxDb2wgbGc9ezE2fSBtZD17MTZ9IHNtPXsyNH0geHM9ezI0fT5cclxuICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiQSB0aXRsZSBpcyByZXF1aXJlZFwiLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXHJcbiAgICAgICAgICAgIGxhYmVsPVwiVGl0bGVcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDxDb2wgbGc9ezR9IG1kPXs0fSBzbT17MjR9IHhzPXsyNH0+XHJcbiAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkEgbnVtYmVyIGlzIHJlcXVpcmVkXCIsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgbGFiZWw9XCJOdW1iZXJcIlxyXG4gICAgICAgICAgICBuYW1lPVwibnVtYmVyXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPElucHV0TnVtYmVyIG1pbj17MX0gLz5cclxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDxSYWRpb0J1dHRvblxyXG4gICAgICAgICAgbGc9ezR9XHJcbiAgICAgICAgICBtZD17NH1cclxuICAgICAgICAgIHhzPXsyNH1cclxuICAgICAgICAgIHNtPXsyNH1cclxuICAgICAgICAgIG5hbWU9XCJzdGF0dXNcIlxyXG4gICAgICAgICAgbGFiZWw9XCJTdGF0dXNcIlxyXG4gICAgICAgICAgbnVtMT17MX1cclxuICAgICAgICAgIG51bTI9ezJ9XHJcbiAgICAgICAgICBsYWJlbDE9XCJQdWJsaXNoXCJcclxuICAgICAgICAgIGxhYmVsMj1cIkRyYWZ0XCJcclxuICAgICAgICAgIGZvcm09e2Zvcm19XHJcbiAgICAgICAgICBzZXRGdW5jPXtzZXRTdGF0dXN9XHJcbiAgICAgICAgICB2YWw9e3N0YXR1c31cclxuICAgICAgICAvPlxyXG4gICAgICA8L1Jvdz5cclxuICAgICAgPEZvcm0uSXRlbSBuYW1lPVwiYm9keVwiPlxyXG4gICAgICAgIDxFZGl0b3JcclxuICAgICAgICAgIGVkaXRvcktleT1cImVkaXRvclwiXHJcbiAgICAgICAgICBkZWZhdWx0RWRpdG9yU3RhdGU9e2VkaXRvclN0YXRlfVxyXG4gICAgICAgICAgZWRpdG9yU3RhdGU9e2VkaXRvclN0YXRlfVxyXG4gICAgICAgICAgb25FZGl0b3JTdGF0ZUNoYW5nZT17b25FZGl0b3JTdGF0ZUNoYW5nZX1cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU3RhcnQgd3JpdGluZyB5b3VyIHN0b3J5Li4uXCJcclxuICAgICAgICAgIHdyYXBwZXJDbGFzc05hbWU9XCJ3cmFwcGVyLWNsYXNzXCJcclxuICAgICAgICAgIGVkaXRvckNsYXNzTmFtZT1cImVkaXRvci1jbGFzc1wiXHJcbiAgICAgICAgICB0b29sYmFyQ2xhc3NOYW1lPVwidG9vbGJhci1jbGFzc1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgIDxSb3cgZ3V0dGVyPXsyNH0+XHJcbiAgICAgICAgPENvbCBtZD17MTJ9IHhzPXsyNH0gc209ezI0fT5cclxuICAgICAgICAgIDxJdGVtU2VsZWN0b3JcclxuICAgICAgICAgICAgbGFiZWw9e1wiQ2hhcmFjdGVycyBpbiB0aGlzIGNoYXB0ZXJcIn1cclxuICAgICAgICAgICAgYXJySW5Gb3JtPXtcImNoYXJhY3RlcnNcIn1cclxuICAgICAgICAgICAgZm9ybT17Zm9ybX1cclxuICAgICAgICAgICAgdHlwZT1cImNoYXB0ZXJcIlxyXG4gICAgICAgICAgICBzdWJqZWN0PXtjaGFyYWN0ZXJzfVxyXG4gICAgICAgICAgICBsZzE9ezI0fVxyXG4gICAgICAgICAgICBzdWJqZWN0VHlwZT1cImNoYXJhY3RlcnNcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgICA8Q29sIG1kPXsxMn0geHM9ezI0fSBzbT17MjR9PlxyXG4gICAgICAgICAgPEl0ZW1TZWxlY3RvclxyXG4gICAgICAgICAgICBsYWJlbD17XCJMb2NhdGlvbnMgaW4gdGhpcyBjaGFwdGVyXCJ9XHJcbiAgICAgICAgICAgIGFyckluRm9ybT17XCJsb2NhdGlvbnNcIn1cclxuICAgICAgICAgICAgZm9ybT17Zm9ybX1cclxuICAgICAgICAgICAgdHlwZT1cImNoYXB0ZXJcIlxyXG4gICAgICAgICAgICBzdWJqZWN0PXtsb2NhdGlvbnN9XHJcbiAgICAgICAgICAgIGxnMT17MjR9XHJcbiAgICAgICAgICAgIHN1YmplY3RUeXBlPVwibG9jYXRpb25zXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgIDwvUm93PlxyXG4gICAgICB7dHlwZSA9PT0gXCJhZGRcIiA/IChcclxuICAgICAgICBsb2FkaW5nQ2hhcHRlciA/IChcclxuICAgICAgICAgIDxidXR0b24gZGlzYWJsZWQgY2xhc3NOYW1lPVwic3Bpbi1idG5cIj5cclxuICAgICAgICAgICAgPFNwaW4gLz5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5DcmVhdGU8L2J1dHRvbj5cclxuICAgICAgICApXHJcbiAgICAgICkgOiBsb2FkaW5nQ2hhcHRlciA/IChcclxuICAgICAgICA8YnV0dG9uIGRpc2FibGVkIGNsYXNzTmFtZT1cInNwaW4tYnRuXCI+XHJcbiAgICAgICAgICA8U3BpbiAvPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkVkaXQ8L2J1dHRvbj5cclxuICAgICAgKX1cclxuICAgIDwvRm9ybT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhcHRlckZvcm07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRm9ybSwgQ29sLCBSb3csIFNlbGVjdCwgRGl2aWRlciB9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5jb25zdCB7IE9wdGlvbiB9ID0gU2VsZWN0O1xyXG5cclxuY29uc3QgSXRlbVNlbGVjdG9yID0gKHtcclxuICBpdGVtLFxyXG4gIHN1YmplY3QsXHJcbiAgZm9ybSxcclxuICBhcnJJbkZvcm0sXHJcbiAgbGFiZWwsXHJcbiAgdHlwZSxcclxuICBsZzEsXHJcbiAgc3ViamVjdFR5cGUsXHJcbn0pID0+IHtcclxuICBjb25zdCBbY3VycmVudENoYXIsIHNldEN1cnJlbnRDaGFyXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjdXJyZW50TG9jLCBzZXRDdXJyZW50TG9jXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtzZWxlY3RlZFN1YmplY3RzLCBzZXRTZWxlY3RlZFN1YmplY3RzXSA9IFJlYWN0LnVzZVN0YXRlKFxyXG4gICAgaXRlbSA/IHN1YmplY3QuZmlsdGVyKChjKSA9PiBpdGVtLmluY2x1ZGVzKGMuaWQpKSA6IFtdXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgYWRkQ2hhcmFjdGVyID0gKGN1cnJlbnQsIHNldEN1cnJlbnQpID0+IHtcclxuICAgIGlmICh0eXBlID09PSBcInN0b3J5XCIgJiYgZm9ybS5nZXRGaWVsZFZhbHVlKGFyckluRm9ybSk/Lmxlbmd0aCA9PT0gNSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGN1cnJlbnQgJiYgZm9ybS5nZXRGaWVsZFZhbHVlKGFyckluRm9ybSk/LmluZGV4T2YoY3VycmVudCkgPT09IC0xKSB7XHJcbiAgICAgIHNldFNlbGVjdGVkU3ViamVjdHMoW1xyXG4gICAgICAgIC4uLnNlbGVjdGVkU3ViamVjdHMsXHJcbiAgICAgICAgc3ViamVjdC5maW5kKChjKSA9PiBjLmlkID09PSBjdXJyZW50KSxcclxuICAgICAgXSk7XHJcbiAgICAgIGZvcm0uc2V0RmllbGRzVmFsdWUoe1xyXG4gICAgICAgIFthcnJJbkZvcm1dOiBbLi4uZm9ybS5nZXRGaWVsZFZhbHVlKGFyckluRm9ybSksIGN1cnJlbnRdLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRDdXJyZW50KFwiXCIpO1xyXG4gICAgZm9ybS5zZXRGaWVsZHNWYWx1ZSh7IFtjdXJyZW50XTogXCJcIiB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW1vdmVDaGFyYWN0ZXIgPSAoaWQpID0+IHtcclxuICAgIGZvcm0uc2V0RmllbGRzVmFsdWUoe1xyXG4gICAgICBbYXJySW5Gb3JtXTogZm9ybS5nZXRGaWVsZFZhbHVlKGFyckluRm9ybSkuZmlsdGVyKChjKSA9PiBjICE9PSBpZCksXHJcbiAgICB9KTtcclxuICAgIHNldFNlbGVjdGVkU3ViamVjdHMoc2VsZWN0ZWRTdWJqZWN0cy5maWx0ZXIoKGMpID0+IGMuaWQgIT09IGlkKSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtLkl0ZW0gbmFtZT17YXJySW5Gb3JtfSBsYWJlbD17bGFiZWx9PlxyXG4gICAgICA8Um93IGd1dHRlcj17WzI0LCAyNF19PlxyXG4gICAgICAgIDxDb2wgbGc9e2xnMX0gbWQ9ezI0fSBzbT17MjR9IHhzPXsyNH0+XHJcbiAgICAgICAgICA8Um93IGd1dHRlcj17MTZ9PlxyXG4gICAgICAgICAgICA8Q29sIHNwYW49ezIyfT5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICBuYW1lPXtcclxuICAgICAgICAgICAgICAgICAgc3ViamVjdFR5cGUgPT09IFwiY2hhcmFjdGVyc1wiID8gXCJjdXJyZW50Q2hhclwiIDogXCJjdXJyZW50TG9jXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtLmdldEZpZWxkVmFsdWUoYXJySW5Gb3JtKT8ubGVuZ3RoID49IDUgJiZcclxuICAgICAgICAgICAgICAgICAgICB0eXBlID09PSBcInN0b3J5XCJcclxuICAgICAgICAgICAgICAgICAgICAgID8gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIHN1YmplY3RUeXBlID09PSBcImNoYXJhY3RlcnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPyBzZXRDdXJyZW50Q2hhcih2YWwpXHJcbiAgICAgICAgICAgICAgICAgICAgICA6IHNldEN1cnJlbnRMb2ModmFsKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJub25lXCIgZGlzYWJsZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgQ2hvb3NlXHJcbiAgICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICB7c3ViamVjdFxyXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAoYykgPT4gZm9ybS5nZXRGaWVsZFZhbHVlKGFyckluRm9ybSk/LmluZGV4T2YoYy5pZCkgPT09IC0xXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgID8uc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5QSA9IGEuZmlyc3RuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlCID0gYi5maXJzdG5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAvLyBDb21wYXJlIHRoZSAyIGRhdGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoa2V5QSA8IGtleUIpIHJldHVybiAtMTtcclxuICAgICAgICAgICAgICAgICAgICAgIGlmIChrZXlBID4ga2V5QikgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoKGNoYXIpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24ga2V5PXtjaGFyLmlkfSB2YWx1ZT17Y2hhci5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzdWJqZWN0VHlwZSA9PT0gXCJjaGFyYWN0ZXJzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IGAke2NoYXIuZmlyc3RuYW1lfSAke2NoYXIubGFzdG5hbWV9YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogY2hhci5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgc3Bhbj17Mn0+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VsZWN0LWFkZC1pbnB1dC1pY29uYm94XCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgIHN1YmplY3RUeXBlID09PSBcImNoYXJhY3RlcnNcIlxyXG4gICAgICAgICAgICAgICAgICAgID8gYWRkQ2hhcmFjdGVyKGN1cnJlbnRDaGFyLCBzZXRDdXJyZW50Q2hhcilcclxuICAgICAgICAgICAgICAgICAgICA6IGFkZENoYXJhY3RlcihjdXJyZW50TG9jLCBzZXRDdXJyZW50TG9jKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxzcGFuPis8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICB7dHlwZSA9PT0gXCJzdG9yeVwiICYmIChcclxuICAgICAgICAgICAgICA8c21hbGw+WW91IGNhbiBhZGQgdXAgdG8gNSBtYWluIGNoYXJhY3RlcnM8L3NtYWxsPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgICAge3N1YmplY3QubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgICA8Q29sIGxnPXtsZzF9IG1kPXsyNH0gc209ezI0fSB4cz17MjR9PlxyXG4gICAgICAgICAgICA8Um93IGd1dHRlcj17MTZ9PlxyXG4gICAgICAgICAgICAgIHtzdWJqZWN0XHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyKChjKSA9PiBmb3JtLmdldEZpZWxkVmFsdWUoYXJySW5Gb3JtKS5pbmNsdWRlcyhjLmlkKSlcclxuICAgICAgICAgICAgICAgIC5tYXAoKGNoYXIpID0+IChcclxuICAgICAgICAgICAgICAgICAgPENvbCBtZD17MTJ9IHNtPXsyNH0ga2V5PXtjaGFyLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17Y2hhci5pZH0gY2xhc3NOYW1lPVwibWFpbi1zZWxlY3RlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWF2YXRhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtjaGFyLmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJqZWN0VHlwZSA9PT0gXCJjaGFyYWN0ZXJzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBjaGFyLmZpcnN0bmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGNoYXIubmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzdWJqZWN0VHlwZSA9PT0gXCJjaGFyYWN0ZXJzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IGAke2NoYXIuZmlyc3RuYW1lfSAke2NoYXIubGFzdG5hbWV9YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogY2hhci5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlvbi1pY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJlbW92ZUNoYXJhY3RlcihjaGFyLmlkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNsb3NlLWNpcmNsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+PC9pb24taWNvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8RGl2aWRlciBzdHlsZT17eyBtYXJnaW46IFwiMTVweCAwXCIgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICApfVxyXG4gICAgICA8L1Jvdz5cclxuICAgIDwvRm9ybS5JdGVtPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJdGVtU2VsZWN0b3I7XHJcbiIsImltcG9ydCB7IENvbCwgU3BhY2UsIEZvcm0sIFJhZGlvIH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmNvbnN0IFJhZGlvQnV0b24gPSAoe1xyXG4gIGxnLFxyXG4gIHNtLFxyXG4gIHhzLFxyXG4gIG1kLFxyXG4gIG5hbWUsXHJcbiAgbGFiZWwsXHJcbiAgbnVtMSxcclxuICBudW0yLFxyXG4gIGxhYmVsMSxcclxuICBsYWJlbDIsXHJcbiAgZm9ybSxcclxuICBzZXRGdW5jLFxyXG4gIHZhbCxcclxufSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q29sIGxnPXtsZ30gbWQ9e21kfSBzbT17c219IHhzPXt4c30+XHJcbiAgICAgIDxGb3JtLkl0ZW0gbmFtZT17bmFtZX0gbGFiZWw9e2xhYmVsfT5cclxuICAgICAgICA8ZmllbGRzZXQgaWQ9e25hbWV9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYWRpb1wiPlxyXG4gICAgICAgICAgICA8UmFkaW8uR3JvdXA+XHJcbiAgICAgICAgICAgICAgPFNwYWNlIHNpemU9ezMyfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmFkaW9fXzFcIj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9e2ByYWRpby0ke251bTF9YH1cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBzZXRGdW5jKHRydWUpfVxyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3ZhbCA/IHRydWUgOiBmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e2ByYWRpby0ke251bTF9YH0+PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPHA+e2xhYmVsMX08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmFkaW9fXzJcIj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9e2ByYWRpby0ke251bTJ9YH1cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gc2V0RnVuYyhmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dmFsID8gZmFsc2UgOiB0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17YHJhZGlvLSR7bnVtMn1gfT48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8cD57bGFiZWwyfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvU3BhY2U+XHJcbiAgICAgICAgICAgIDwvUmFkaW8uR3JvdXA+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2ZpZWxkc2V0PlxyXG4gICAgICA8L0Zvcm0uSXRlbT5cclxuICAgIDwvQ29sPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSYWRpb0J1dG9uO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBMb2FkaW5nU2NyZWVuID0gKHsgY2hpbGRyZW4sIGxvYWRpbmcgfSkgPT4ge1xyXG4gIHJldHVybiAhbG9hZGluZyA/IChcclxuICAgIGNoaWxkcmVuXHJcbiAgKSA6IChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGVyLWNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRlclwiPlxyXG4gICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2FkaW5nU2NyZWVuO1xyXG4iLCJpbXBvcnQgeyBSZXN1bHQsIEJ1dHRvbiB9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5jb25zdCBSZWRpcmVjdENvbXAgPSAoeyBjb25kaXRpb24sIHR5cGUsIGNoaWxkcmVuIH0pID0+IHtcclxuICByZXR1cm4gY29uZGl0aW9uID8gKFxyXG4gICAgY2hpbGRyZW5cclxuICApIDogdHlwZSA9PT0gXCI0MDRcIiA/IChcclxuICAgIDxSZXN1bHRcclxuICAgICAgc3RhdHVzPVwiNDA0XCJcclxuICAgICAgdGl0bGU9XCI0MDRcIlxyXG4gICAgICBzdWJUaXRsZT1cIlNvcnJ5LCB0aGUgcGFnZSB5b3UgdmlzaXRlZCBkb2VzIG5vdCBleGlzdC5cIlxyXG4gICAgICBleHRyYT17PEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiPkJhY2sgSG9tZTwvQnV0dG9uPn1cclxuICAgIC8+XHJcbiAgKSA6IHR5cGUgPT09IFwiNDAzXCIgPyAoXHJcbiAgICA8UmVzdWx0XHJcbiAgICAgIHN0YXR1cz1cIjQwM1wiXHJcbiAgICAgIHRpdGxlPVwiNDAzXCJcclxuICAgICAgc3ViVGl0bGU9XCJTb3JyeSwgeW91IGFyZSBub3QgYXV0aG9yaXplZCB0byBhY2Nlc3MgdGhpcyBwYWdlLlwiXHJcbiAgICAgIGV4dHJhPXs8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCI+QmFjayBIb21lPC9CdXR0b24+fVxyXG4gICAgLz5cclxuICApIDogdHlwZSA9PT0gXCJyZWRpcmVjdFwiID8gKFxyXG4gICAgKHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvYXV0aFwiKVxyXG4gICkgOiAoXHJcbiAgICA8ZGl2PjwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWRpcmVjdENvbXA7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0LCBjcmVhdGVDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcbmltcG9ydCB7IGF1dGgsIGRiIH0gZnJvbSBcIi4uL3JlZHV4L2ZiQ29uZmlnXCI7XHJcblxyXG5jb25zdCBhdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQcm92aWRlQXV0aCh7IGNoaWxkcmVuIH0pIHtcclxuICBjb25zdCBhdXRoID0gdXNlUHJvdmlkZUF1dGgoKTtcclxuICByZXR1cm4gPGF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXthdXRofT57Y2hpbGRyZW59PC9hdXRoQ29udGV4dC5Qcm92aWRlcj47XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1c2VBdXRoID0gKCkgPT4ge1xyXG4gIHJldHVybiB1c2VDb250ZXh0KGF1dGhDb250ZXh0KTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIHVzZVByb3ZpZGVBdXRoKCkge1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgLy8gV3JhcCBhbnkgRmlyZWJhc2UgbWV0aG9kcyB3ZSB3YW50IHRvIHVzZSBtYWtpbmcgc3VyZSAuLi5cclxuICAvLyAuLi4gdG8gc2F2ZSB0aGUgdXNlciB0byBzdGF0ZS5cclxuICBjb25zdCBzaWduaW4gPSAoZW1haWwsIHBhc3N3b3JkKSA9PiB7XHJcbiAgICByZXR1cm4gYXV0aC5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHNldFVzZXIocmVzcG9uc2UudXNlcik7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS51c2VyO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2lnbnVwID0gKGVtYWlsLCBwYXNzd29yZCwgdXNlcm5hbWUpID0+IHtcclxuICAgIHJldHVybiBhdXRoXHJcbiAgICAgIC5jcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBzZXRVc2VyKHJlc3BvbnNlLnVzZXIpO1xyXG4gICAgICAgIGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKS5hZGQoe1xyXG4gICAgICAgICAgYmFkZ2VzOiBbXSxcclxuICAgICAgICAgIGJpb2dyYXBoeTogXCJcIixcclxuICAgICAgICAgIGNyZWF0ZWRBdDogZmlyZWJhc2UuZmlyZXN0b3JlLkZpZWxkVmFsdWUuc2VydmVyVGltZXN0YW1wKCksXHJcbiAgICAgICAgICBzdXNwZW5kZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgZmFjZWJvb2s6IFwiXCIsXHJcbiAgICAgICAgICBpbnN0YWdyYW06IFwiXCIsXHJcbiAgICAgICAgICB0d2l0dGVyOiBcIlwiLFxyXG4gICAgICAgICAgZGV2aWFudGFydDogXCJcIixcclxuICAgICAgICAgIGxpa2VzQ291bnQ6IFwiXCIsXHJcbiAgICAgICAgICB1c2VybmFtZTogdXNlcm5hbWUsXHJcbiAgICAgICAgICBpbWFnZTogXCJcIixcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UudXNlcjtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2lnbm91dCA9ICgpID0+IHtcclxuICAgIHJldHVybiBhdXRoLnNpZ25PdXQoKS50aGVuKCgpID0+IHtcclxuICAgICAgc2V0VXNlcihmYWxzZSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzZW5kUGFzc3dvcmRSZXNldEVtYWlsID0gKGVtYWlsKSA9PiB7XHJcbiAgICByZXR1cm4gYXV0aC5zZW5kUGFzc3dvcmRSZXNldEVtYWlsKGVtYWlsKS50aGVuKCgpID0+IHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjb25maXJtUGFzc3dvcmRSZXNldCA9IChjb2RlLCBwYXNzd29yZCkgPT4ge1xyXG4gICAgcmV0dXJuIGF1dGguY29uZmlybVBhc3N3b3JkUmVzZXQoY29kZSwgcGFzc3dvcmQpLnRoZW4oKCkgPT4ge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB1bnN1YnNjcmliZSA9IGF1dGgub25BdXRoU3RhdGVDaGFuZ2VkKCh1c2VyKSA9PiB7XHJcbiAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgc2V0VXNlcih1c2VyKTtcclxuICAgICAgICBpZiAodXNlci51aWQpIHtcclxuICAgICAgICAgIGxldCB1c2VybmFtZSA9IFwiXCI7XHJcbiAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgZGIuY29sbGVjdGlvbihcInVzZXJzXCIpXHJcbiAgICAgICAgICAgIC5kb2ModXNlci51aWQpXHJcbiAgICAgICAgICAgIC5vblNuYXBzaG90KChkb2MpID0+IHtcclxuICAgICAgICAgICAgICB1c2VybmFtZSA9IGRvYy5kYXRhKCkudXNlcm5hbWU7XHJcbiAgICAgICAgICAgICAgc2V0VXNlcih7IC4uLnVzZXIsIHVzZXJuYW1lIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0VXNlcihmYWxzZSk7XHJcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQ2xlYW51cCBzdWJzY3JpcHRpb24gb24gdW5tb3VudFxyXG4gICAgcmV0dXJuICgpID0+IHVuc3Vic2NyaWJlKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICAvLyBSZXR1cm4gdGhlIHVzZXIgb2JqZWN0IGFuZCBhdXRoIG1ldGhvZHNcclxuICByZXR1cm4ge1xyXG4gICAgaXNMb2FkaW5nLFxyXG4gICAgdXNlcixcclxuICAgIHNpZ25pbixcclxuICAgIHNpZ251cCxcclxuICAgIHNpZ25vdXQsXHJcbiAgICBzZW5kUGFzc3dvcmRSZXNldEVtYWlsLFxyXG4gICAgY29uZmlybVBhc3N3b3JkUmVzZXQsXHJcbiAgfTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgRm9ybSwgbWVzc2FnZSB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ob29rcy91c2VySG9va3NcIjtcclxuaW1wb3J0IHtcclxuICBnZXRDaGFwdGVyLFxyXG4gIGVkaXRDaGFwdGVyLFxyXG4gIGdldFVzZXJMb2NhdGlvbnMsXHJcbn0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL3JlZHV4L2FjdGlvbnMvc3Rvcmllc0FjdGlvbnNcIjtcclxuaW1wb3J0IHsgZ2V0VXNlckNoYXJhY3RlcnMgfSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vcmVkdXgvYWN0aW9ucy9jaGFyYWN0ZXJzQWN0aW9uc1wiO1xyXG5cclxuaW1wb3J0IENoYXB0ZXJGb3JtIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL2Zvcm1zL0NoYXB0ZXJGb3JtXCI7XHJcbmltcG9ydCBMb2FkaW5nU2NyZWVuIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL2hvYy9Mb2FkaW5nU2NyZWVuXCI7XHJcbmltcG9ydCBSZWRpcmVjdENvbXAgZnJvbSBcIi4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvaG9jL1JlZGlyZWN0Q29tcFwiO1xyXG5cclxuY29uc3QgRWRpdENoYXB0ZXIgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBbZm9ybV0gPSBGb3JtLnVzZUZvcm0oKTtcclxuICBjb25zdCB7XHJcbiAgICBjaGFyYWN0ZXJzLFxyXG4gICAgbG9hZGluZyxcclxuICAgIGxvY2F0aW9ucyxcclxuICAgIGxvYWRpbmdDaGFwdGVyLFxyXG4gICAgY2hhcHRlcixcclxuICAgIGNoYXB0ZXJFeGlzdHMsXHJcbiAgICBlZGl0TWVzc2FnZSxcclxuICB9ID0gcHJvcHM7XHJcbiAgY29uc3QgYXV0aCA9IHVzZUF1dGgoKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbYm9keSwgc2V0Qm9keV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHByb3BzLmdldENoYXB0ZXIocm91dGVyLnF1ZXJ5LmlkLCByb3V0ZXIucXVlcnkuY2hhcGlkKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoZWRpdE1lc3NhZ2UpIHtcclxuICAgICAgbWVzc2FnZS5zdWNjZXNzKGVkaXRNZXNzYWdlKTtcclxuICAgIH1cclxuICB9LCBbZWRpdE1lc3NhZ2VdKTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChhdXRoLnVzZXIpIHtcclxuICAgICAgcHJvcHMuZ2V0VXNlckNoYXJhY3RlcnMoYXV0aC51c2VyLnVpZCk7XHJcbiAgICAgIHByb3BzLmdldFVzZXJMb2NhdGlvbnMoYXV0aC51c2VyLnVpZCk7XHJcbiAgICB9XHJcbiAgfSwgW2F1dGhdKTtcclxuXHJcbiAgY29uc3Qgc3VibWl0ID0gKHZhbHVlcykgPT4ge1xyXG4gICAgZGVsZXRlIHZhbHVlcy5jdXJyZW50Q2hhcjtcclxuICAgIGRlbGV0ZSB2YWx1ZXMuY3VycmVudExvYztcclxuXHJcbiAgICBwcm9wcy5lZGl0Q2hhcHRlcihcclxuICAgICAge1xyXG4gICAgICAgIC4uLnZhbHVlcyxcclxuICAgICAgICBib2R5LFxyXG4gICAgICAgIHN0YXR1czogdmFsdWVzLnN0YXR1cyA9PT0gXCJ0cnVlXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHJvdXRlci5xdWVyeS5pZCxcclxuICAgICAgcm91dGVyLnF1ZXJ5LmNoYXBpZFxyXG4gICAgKTtcclxuICB9O1xyXG4gIC8vIGNvbnNvbGUubG9nKGZvcm0uZ2V0RmllbGRzVmFsdWUoKSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TG9hZGluZ1NjcmVlbiBsb2FkaW5nPXtsb2FkaW5nfT5cclxuICAgICAgPFJlZGlyZWN0Q29tcCB0eXBlPVwiNDA0XCIgY29uZGl0aW9uPXtjaGFwdGVyRXhpc3RzfT5cclxuICAgICAgICA8UmVkaXJlY3RDb21wXHJcbiAgICAgICAgICB0eXBlPVwiNDAzXCJcclxuICAgICAgICAgIGNvbmRpdGlvbj17YXV0aC51c2VyICYmIGF1dGgudXNlci51aWQgPT09IGNoYXB0ZXIuYXV0aG9ySWR9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXN0b20tZm9ybVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyXCI+XHJcbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInNpZGUtaGVhZGluZ1wiPkFkZCBhIG5ldyBjaGFwdGVyPC9oMj5cclxuICAgICAgICAgICAgICA8Q2hhcHRlckZvcm1cclxuICAgICAgICAgICAgICAgIHN1Ym1pdD17c3VibWl0fVxyXG4gICAgICAgICAgICAgICAgZm9ybT17Zm9ybX1cclxuICAgICAgICAgICAgICAgIGNoYXJhY3RlcnM9e2NoYXJhY3RlcnN9XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbnM9e2xvY2F0aW9uc31cclxuICAgICAgICAgICAgICAgIGJvZHk9e2JvZHl9XHJcbiAgICAgICAgICAgICAgICBzZXRCb2R5PXtzZXRCb2R5fVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImVkaXRcIlxyXG4gICAgICAgICAgICAgICAgbG9hZGluZ0NoYXB0ZXI9e2xvYWRpbmdDaGFwdGVyfVxyXG4gICAgICAgICAgICAgICAgbG9hZGluZz17bG9hZGluZ31cclxuICAgICAgICAgICAgICAgIGNoYXB0ZXI9e2NoYXB0ZXJ9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1JlZGlyZWN0Q29tcD5cclxuICAgICAgPC9SZWRpcmVjdENvbXA+XHJcbiAgICA8L0xvYWRpbmdTY3JlZW4+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcclxuICBjaGFwdGVyOiBzdGF0ZS5zdG9yaWVzLmNoYXB0ZXIsXHJcbiAgY2hhcmFjdGVyczogc3RhdGUuY2hhcmFjdGVycy51c2VyQ2hhcmFjdGVycyxcclxuICBsb2FkaW5nOiBzdGF0ZS5zdG9yaWVzLmxvYWRpbmcsXHJcbiAgbG9jYXRpb25zOiBzdGF0ZS5zdG9yaWVzLnVzZXJMb2NhdGlvbnMsXHJcbiAgbG9hZGluZ0NoYXB0ZXI6IHN0YXRlLnN0b3JpZXMubG9hZGluZ0NoYXB0ZXIsXHJcbiAgY2hhcHRlckV4aXN0czogc3RhdGUuc3Rvcmllcy5jaGFwdGVyRXhpc3RzLFxyXG4gIGVkaXRNZXNzYWdlOiBzdGF0ZS5zdG9yaWVzLm1lc3NhZ2UsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHtcclxuICBnZXRDaGFwdGVyLFxyXG4gIGdldFVzZXJDaGFyYWN0ZXJzLFxyXG4gIGdldFVzZXJMb2NhdGlvbnMsXHJcbiAgZWRpdENoYXB0ZXIsXHJcbn0pKEVkaXRDaGFwdGVyKTtcclxuIiwiaW1wb3J0IHtcclxuICBHRVRfVVNFUl9DSEFSQUNURVJTLFxyXG4gIEdFVF9GQVZPUklURV9DSEFSQUNURVJTLFxyXG59IGZyb20gXCIuLi8uLi91dGlscy9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgZGIsIGF1dGggfSBmcm9tIFwiLi4vZmJDb25maWdcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyQ2hhcmFjdGVycyA9ICgpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzXCIpXHJcbiAgICAud2hlcmUoXCJhdXRob3JJZFwiLCBcIj09XCIsIGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigoZG9jcykgPT4ge1xyXG4gICAgICBsZXQgaXRlbXMgPSBbXTtcclxuICAgICAgZG9jcy5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgICAgICBpdGVtcyA9IFsuLi5pdGVtcywgeyBpZDogZG9jLmlkLCAuLi5kb2MuZGF0YSgpIH1dO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGl0ZW1zO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChpdGVtcykgPT4ge1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IEdFVF9VU0VSX0NIQVJBQ1RFUlMsIHBheWxvYWQ6IGl0ZW1zIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0RmF2b3JpdGVDaGFyYWN0ZXJzID0gKCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGIuY29sbGVjdGlvbihcImNoYXJhY3RlcnNMaWtlc1wiKVxyXG4gICAgLndoZXJlKFwic2VuZGVySWRcIiwgXCI9PVwiLCBhdXRoLmN1cnJlbnRVc2VyLnVpZClcclxuICAgIC5nZXQoKVxyXG4gICAgLnRoZW4oKGRvY3MpID0+IHtcclxuICAgICAgbGV0IGZhdkFyciA9IFtdO1xyXG4gICAgICBkb2NzLmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgICAgIGZhdkFyciA9IFsuLi5mYXZBcnIsIGRvYy5kYXRhKCkuY2hhcmFjdGVySWRdO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGZhdkFycjtcclxuICAgIH0pXHJcbiAgICAudGhlbigodXNlcnMpID0+IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gdXNlcnMubWFwKCh1c2VyKSA9PlxyXG4gICAgICAgIGRiLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzXCIpLmRvYyh1c2VyKS5nZXQoKVxyXG4gICAgICApO1xyXG4gICAgICBQcm9taXNlLmFsbChyZXN1bHQpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGxldCBmYXZVc2VycyA9IFtdO1xyXG4gICAgICAgIHJlcy5mb3JFYWNoKFxyXG4gICAgICAgICAgKGRvYykgPT4gKGZhdlVzZXJzID0gWy4uLmZhdlVzZXJzLCB7IGlkOiBkb2MuaWQsIC4uLmRvYy5kYXRhKCkgfV0pXHJcbiAgICAgICAgKTtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiBHRVRfRkFWT1JJVEVfQ0hBUkFDVEVSUyxcclxuICAgICAgICAgIHBheWxvYWQ6IGZhdlVzZXJzLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG4iLCJpbXBvcnQge1xyXG4gIEdFVF9VU0VSX1NUT1JJRVMsXHJcbiAgR0VUX0ZBVk9SSVRFX1NUT1JJRVMsXHJcbiAgR0VUX1VTRVJfTE9DQVRJT05TLFxyXG4gIEdFVF9TVE9SWSxcclxuICBHRVRfQ0hBUFRFUlMsXHJcbiAgQUREX1NUT1JZLFxyXG4gIEFERF9DSEFQVEVSLFxyXG4gIEVESVRfQ0hBUFRFUixcclxuICBHRVRfQ0hBUFRFUixcclxuICBFRElUX1NUT1JZLFxyXG4gIERJU1BBVENIX0VSUk9SLFxyXG59IGZyb20gXCIuLi8uLi91dGlscy9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgZGIsIGF1dGgsIHN0b3JhZ2UgfSBmcm9tIFwiLi4vZmJDb25maWdcIjtcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcclxuaW1wb3J0IHsgbWVzc2FnZSB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RvcnkgPSAoaWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpXHJcbiAgICAuZG9jKGlkKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigoZG9jKSA9PiB7XHJcbiAgICAgIGlmIChkb2MuZXhpc3RzKSB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogR0VUX1NUT1JZLFxyXG4gICAgICAgICAgc3RvcnlFeGlzdHM6IHRydWUsXHJcbiAgICAgICAgICBwYXlsb2FkOiB7IC4uLmRvYy5kYXRhKCksIGlkOiBkb2MuaWQgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiBESVNQQVRDSF9FUlJPUixcclxuICAgICAgICAgIHN0b3J5RXhpc3RzOiBmYWxzZSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRTdG9yeSA9IChkYXRhKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkaXNwYXRjaCh7IHR5cGU6IEFERF9TVE9SWSwgcGF5bG9hZDogeyBsb2FkaW5nOiB0cnVlIH0gfSk7XHJcbiAgY29uc3QgaW1hZ2VOYW1lID0gZGF0YS50aXRsZS50b0xvd2VyQ2FzZSgpLnNwbGl0KFwiIFwiKS5qb2luKFwiX1wiKTtcclxuICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICBpZiAodHlwZW9mIGRhdGEuYmFubmVyID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICBzdG9yYWdlXHJcbiAgICAgIC5yZWYoYCR7YXV0aC5jdXJyZW50VXNlci51aWR9LyR7aW1hZ2VOYW1lfWApXHJcbiAgICAgIC5wdXQoZGF0YS5iYW5uZXIpXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICByZXR1cm4gc3RvcmFnZVxyXG4gICAgICAgICAgLnJlZihhdXRoLmN1cnJlbnRVc2VyLnVpZClcclxuICAgICAgICAgIC5jaGlsZChpbWFnZU5hbWUpXHJcbiAgICAgICAgICAuZ2V0RG93bmxvYWRVUkwoKTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKHVybCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKS5hZGQoe1xyXG4gICAgICAgICAgLi4uZGF0YSxcclxuICAgICAgICAgIGF1dGhvcklkOiBhdXRoLmN1cnJlbnRVc2VyLnVpZCxcclxuICAgICAgICAgIGF1dGhvck5hbWU6IGRhdGEuYXV0aG9yTmFtZSxcclxuICAgICAgICAgIG9uZVNob3Q6IGZhbHNlLFxyXG4gICAgICAgICAgYmFubmVyOiB1cmwsXHJcbiAgICAgICAgICBjcmVhdGVkQXQ6IGZpcmViYXNlLmZpcmVzdG9yZS5GaWVsZFZhbHVlLnNlcnZlclRpbWVzdGFtcCgpLFxyXG4gICAgICAgICAgbGlrZXNDb3VudDogMCxcclxuICAgICAgICAgIGNoYXB0ZXJzQ291bnQ6IDAsXHJcbiAgICAgICAgICBsb2NhdGlvbnNDb3VudDogMCxcclxuICAgICAgICAgIHNlY29uZGFyeUNoYXJhY3RlcnM6IFtdLFxyXG4gICAgICAgICAgZmVhdHVyZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgbm90ZTogMCxcclxuICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhcIlN0b3J5IGFkZGVkIHN1Y2Nlc3NmdWxseVwiKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIFJvdXRlci5wdXNoKGAvc3RvcnkvJHtyZXMuaWR9YCk7XHJcbiAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9TVE9SWSxcclxuICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgIG1lc3NhZ2U6IFwiU3RvcnkgYWRkZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICAgICAgc3RvcnlJZDogcmVzLmlkLFxyXG4gICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihlcnIubWVzc2FnZSk7XHJcbiAgICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKVxyXG4gICAgICAuYWRkKHtcclxuICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgIGF1dGhvcklkOiBhdXRoLmN1cnJlbnRVc2VyLnVpZCxcclxuICAgICAgICBhdXRob3JOYW1lOiBkYXRhLmF1dGhvck5hbWUsXHJcbiAgICAgICAgb25lU2hvdDogZmFsc2UsXHJcbiAgICAgICAgY3JlYXRlZEF0OiBmaXJlYmFzZS5maXJlc3RvcmUuRmllbGRWYWx1ZS5zZXJ2ZXJUaW1lc3RhbXAoKSxcclxuICAgICAgICBsaWtlc0NvdW50OiAwLFxyXG4gICAgICAgIGNoYXB0ZXJzQ291bnQ6IDAsXHJcbiAgICAgICAgbG9jYXRpb25zQ291bnQ6IDAsXHJcbiAgICAgICAgZmVhdHVyZWQ6IGZhbHNlLFxyXG4gICAgICAgIHNlY29uZGFyeUNoYXJhY3RlcnM6IFtdLFxyXG4gICAgICAgIG5vdGU6IDAsXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoXCJTdG9yeSBhZGRlZCBzdWNjZXNzZnVsbHlcIik7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBSb3V0ZXIucHVzaChgL3N0b3J5LyR7cmVzLmlkfWApO1xyXG4gICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBBRERfU1RPUlksXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICBtZXNzYWdlOiBcIlN0b3J5IGFkZGVkIHN1Y2Nlc3NmdWxseVwiLFxyXG4gICAgICAgICAgICAgIHN0b3J5SWQ6IHJlcy5pZCxcclxuICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoZXJyLm1lc3NhZ2UpO1xyXG4gICAgICB9KTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZWRpdFN0b3J5ID0gKGRhdGEsIHN0b3J5SWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRpc3BhdGNoKHsgdHlwZTogRURJVF9TVE9SWSwgcGF5bG9hZDogeyBsb2FkaW5nU3Rvcnk6IHRydWUgfSB9KTtcclxuICBjb25zdCBpbWFnZU5hbWUgPSBkYXRhLnRpdGxlLnRvTG93ZXJDYXNlKCkuc3BsaXQoXCIgXCIpLmpvaW4oXCJfXCIpO1xyXG5cclxuICBpZiAodHlwZW9mIGRhdGEuYmFubmVyID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICBzdG9yYWdlXHJcbiAgICAgIC5yZWYoYCR7YXV0aC5jdXJyZW50VXNlci51aWR9LyR7aW1hZ2VOYW1lfWApXHJcbiAgICAgIC5wdXQoZGF0YS5iYW5uZXIpXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICByZXR1cm4gc3RvcmFnZVxyXG4gICAgICAgICAgLnJlZihhdXRoLmN1cnJlbnRVc2VyLnVpZClcclxuICAgICAgICAgIC5jaGlsZChpbWFnZU5hbWUpXHJcbiAgICAgICAgICAuZ2V0RG93bmxvYWRVUkwoKTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKHVybCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBkYlxyXG4gICAgICAgICAgLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpXHJcbiAgICAgICAgICAuZG9jKHN0b3J5SWQpXHJcbiAgICAgICAgICAudXBkYXRlKHtcclxuICAgICAgICAgICAgLi4uZGF0YSxcclxuICAgICAgICAgICAgYmFubmVyOiB1cmwsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhcIlN0b3J5IGFkZGVkIHN1Y2Nlc3NmdWxseVwiKTtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiBFRElUX1NUT1JZLFxyXG4gICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIlN0b3J5IGVkaXRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihlcnIubWVzc2FnZSk7XHJcbiAgICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKVxyXG4gICAgICAuZG9jKHN0b3J5SWQpXHJcbiAgICAgIC51cGRhdGUoe1xyXG4gICAgICAgIC4uLmRhdGEsXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoXCJTdG9yeSBhZGRlZCBzdWNjZXNzZnVsbHlcIik7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogRURJVF9TVE9SWSxcclxuICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJTdG9yeSBlZGl0ZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoZXJyLm1lc3NhZ2UpO1xyXG4gICAgICB9KTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYWRkQ2hhcHRlciA9IChkYXRhKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkaXNwYXRjaCh7IHR5cGU6IEFERF9DSEFQVEVSLCBwYXlsb2FkOiB7IGxvYWRpbmc6IHRydWUgfSB9KTtcclxuICBkYi5jb2xsZWN0aW9uKFwiY2hhcHRlcnNcIilcclxuICAgIC5hZGQoe1xyXG4gICAgICAuLi5kYXRhLFxyXG4gICAgICBhdXRob3JJZDogYXV0aC5jdXJyZW50VXNlci51aWQsXHJcbiAgICAgIGNvbW1lbnRzQ291bnQ6IDAsXHJcbiAgICAgIG5vdGU6IDAsXHJcbiAgICAgIHZvdGVyczogW10sXHJcbiAgICAgIHZvdGVzQ291bnQ6IDAsXHJcbiAgICAgIGNyZWF0ZWRBdDogZmlyZWJhc2UuZmlyZXN0b3JlLkZpZWxkVmFsdWUuc2VydmVyVGltZXN0YW1wKCksXHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKVxyXG4gICAgICAgIC5kb2MoZGF0YS5zdG9yeUlkKVxyXG4gICAgICAgIC5nZXQoKVxyXG4gICAgICAgIC50aGVuKChkb2MpID0+IHtcclxuICAgICAgICAgIGNvbnN0IGNoYXJhY3RlcnMgPSBkb2MuZGF0YSgpLnNlY29uZGFyeUNoYXJhY3RlcnM7XHJcbiAgICAgICAgICBjb25zdCBtYWluID0gZG9jLmRhdGEoKS5tYWluQ2hhcmFjdGVycztcclxuICAgICAgICAgIGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpXHJcbiAgICAgICAgICAgIC5kb2MoZGF0YS5zdG9yeUlkKVxyXG4gICAgICAgICAgICAudXBkYXRlKHtcclxuICAgICAgICAgICAgICBzZWNvbmRhcnlDaGFyYWN0ZXJzOiBbXHJcbiAgICAgICAgICAgICAgICAuLi5uZXcgU2V0KFtcclxuICAgICAgICAgICAgICAgICAgLi4uY2hhcmFjdGVycyxcclxuICAgICAgICAgICAgICAgICAgLi4uZGF0YS5jaGFyYWN0ZXJzLmZpbHRlcigoYykgPT4gIW1haW4uaW5jbHVkZXMoYykpLFxyXG4gICAgICAgICAgICAgICAgXSksXHJcbiAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IEFERF9DSEFQVEVSLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkNoYXB0ZXIgYWRkZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICAgICAgICAgIGNoYXBJZDogcmVzLmlkLFxyXG4gICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgLy8gLnRoZW4oKHJlcykgPT4ge1xyXG4gIC8vICAgZGlzcGF0Y2goe1xyXG4gIC8vICAgICB0eXBlOiBBRERfQ0hBUFRFUixcclxuICAvLyAgICAgcGF5bG9hZDoge1xyXG4gIC8vICAgICAgIG1lc3NhZ2U6IFwiQ2hhcHRlciBhZGRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAvLyAgICAgICBjaGFwSWQ6IHJlcy5pZCxcclxuICAvLyAgICAgfSxcclxuICAvLyAgIH0pO1xyXG4gIC8vIH0pXHJcbiAgLy8gLmNhdGNoKChlcnIpID0+XHJcbiAgLy8gICBkaXNwYXRjaCh7XHJcbiAgLy8gICAgIHR5cGU6IEFERF9DSEFQVEVSLFxyXG4gIC8vICAgICBwYXlsb2FkOiB7IG1lc3NhZ2U6IGVyci5tZXNzYWdlLCBjaGFwSWQ6IFwiXCIgfSxcclxuICAvLyAgIH0pXHJcbiAgLy8gKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDaGFwdGVyID0gKHN0b3J5SWQsIGlkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKVxyXG4gICAgLmRvYyhzdG9yeUlkKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigoZG9jKSA9PiB7XHJcbiAgICAgIGlmIChkb2MuZXhpc3RzKSB7XHJcbiAgICAgICAgZGIuY29sbGVjdGlvbihcImNoYXB0ZXJzXCIpXHJcbiAgICAgICAgICAuZG9jKGlkKVxyXG4gICAgICAgICAgLmdldCgpXHJcbiAgICAgICAgICAudGhlbigoZG9jKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkb2MuZXhpc3RzKSB7XHJcbiAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogR0VUX0NIQVBURVIsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgICAgIGNoYXB0ZXI6IHsgLi4uZG9jLmRhdGEoKSwgaWQ6IGRvYy5pZCB9LFxyXG4gICAgICAgICAgICAgICAgICBjaGFwdGVyRXhpc3RzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBHRVRfQ0hBUFRFUixcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHsgY2hhcHRlckV4aXN0czogZmFsc2UgfSxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogR0VUX0NIQVBURVIsXHJcbiAgICAgICAgICBwYXlsb2FkOiB7IGNoYXB0ZXJFeGlzdHM6IGZhbHNlIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGVkaXRDaGFwdGVyID0gKGRhdGEsIHN0b3J5SWQsIGNoYXBpZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGlzcGF0Y2goeyB0eXBlOiBFRElUX0NIQVBURVIsIHBheWxvYWQ6IHsgbG9hZGluZzogdHJ1ZSB9IH0pO1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJjaGFwdGVyc1wiKVxyXG4gICAgLmRvYyhjaGFwaWQpXHJcbiAgICAudXBkYXRlKHsgLi4uZGF0YSB9KVxyXG4gICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKVxyXG4gICAgICAgIC5kb2Moc3RvcnlJZClcclxuICAgICAgICAuZ2V0KClcclxuICAgICAgICAudGhlbigoZG9jKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBjaGFyYWN0ZXJzID0gZG9jLmRhdGEoKS5zZWNvbmRhcnlDaGFyYWN0ZXJzO1xyXG4gICAgICAgICAgY29uc3QgbWFpbiA9IGRvYy5kYXRhKCkubWFpbkNoYXJhY3RlcnM7XHJcbiAgICAgICAgICBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKVxyXG4gICAgICAgICAgICAuZG9jKHN0b3J5SWQpXHJcbiAgICAgICAgICAgIC51cGRhdGUoe1xyXG4gICAgICAgICAgICAgIHNlY29uZGFyeUNoYXJhY3RlcnM6IGRhdGEuY2hhcmFjdGVyc1xyXG4gICAgICAgICAgICAgICAgPyBbXHJcbiAgICAgICAgICAgICAgICAgICAgLi4ubmV3IFNldChbXHJcbiAgICAgICAgICAgICAgICAgICAgICAuLi5jaGFyYWN0ZXJzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgLi4uZGF0YS5jaGFyYWN0ZXJzLmZpbHRlcigoYykgPT4gIW1haW4uaW5jbHVkZXMoYykpLFxyXG4gICAgICAgICAgICAgICAgICAgIF0pLFxyXG4gICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICA6IGNoYXJhY3RlcnMsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBFRElUX0NIQVBURVIsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiQ2hhcHRlciBlZGl0ZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDaGFwdGVycyA9IChpZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGIuY29sbGVjdGlvbihcImNoYXB0ZXJzXCIpXHJcbiAgICAud2hlcmUoXCJzdG9yeUlkXCIsIFwiPT1cIiwgaWQpXHJcbiAgICAub3JkZXJCeShcIm51bWJlclwiLCBcImFzY1wiKVxyXG4gICAgLm9uU25hcHNob3QoKGRvY3MpID0+IHtcclxuICAgICAgbGV0IGFyciA9IFtdO1xyXG4gICAgICBkb2NzLmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgICAgIGFyci5wdXNoKHtcclxuICAgICAgICAgIGF1dGhvcklkOiBkb2MuZGF0YSgpLmF1dGhvcklkLFxyXG4gICAgICAgICAgaWQ6IGRvYy5pZCxcclxuICAgICAgICAgIGNyZWF0ZWRBdDogZG9jLmRhdGEoKS5jcmVhdGVkQXQsXHJcbiAgICAgICAgICBudW1iZXI6IGRvYy5kYXRhKCkubnVtYmVyLFxyXG4gICAgICAgICAgdGl0bGU6IGRvYy5kYXRhKCkudGl0bGUsXHJcbiAgICAgICAgICBjb21tZW50c0NvdW50OiBkb2MuZGF0YSgpLmNvbW1lbnRzQ291bnQsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogR0VUX0NIQVBURVJTLFxyXG4gICAgICAgIHBheWxvYWQ6IGFycixcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdG9yeUNoYXJhY3RlcnMgPSAoaWQpID0+IChkaXNwYXRjaCkgPT4ge307XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VXNlclN0b3JpZXMgPSAoKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKVxyXG4gICAgLndoZXJlKFwiYXV0aG9ySWRcIiwgXCI9PVwiLCBhdXRoLmN1cnJlbnRVc2VyLnVpZClcclxuICAgIC5nZXQoKVxyXG4gICAgLnRoZW4oKGRvY3MpID0+IHtcclxuICAgICAgbGV0IGl0ZW1zID0gW107XHJcbiAgICAgIGRvY3MuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICAgICAgaXRlbXMgPSBbLi4uaXRlbXMsIHsgaWQ6IGRvYy5pZCwgLi4uZG9jLmRhdGEoKSB9XTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBpdGVtcztcclxuICAgIH0pXHJcbiAgICAudGhlbigoaXRlbXMpID0+IHtcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBHRVRfVVNFUl9TVE9SSUVTLCBwYXlsb2FkOiBpdGVtcyB9KTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFVzZXJMb2NhdGlvbnMgPSAoKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkYi5jb2xsZWN0aW9uKFwibG9jYXRpb25zXCIpXHJcbiAgICAud2hlcmUoXCJhdXRob3JJZFwiLCBcIj09XCIsIGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigoZG9jcykgPT4ge1xyXG4gICAgICBsZXQgbG9jYXRpb25zID0gW107XHJcbiAgICAgIGRvY3MuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICAgICAgbG9jYXRpb25zID0gWy4uLmxvY2F0aW9ucywgeyBpZDogZG9jLmlkLCAuLi5kb2MuZGF0YSgpIH1dO1xyXG4gICAgICB9KTtcclxuICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IEdFVF9VU0VSX0xPQ0FUSU9OUyxcclxuICAgICAgICBwYXlsb2FkOiBsb2NhdGlvbnMsXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0RmF2b3JpdGVTdG9yaWVzID0gKCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGIuY29sbGVjdGlvbihcInN0b3JpZXNMaWtlc1wiKVxyXG4gICAgLndoZXJlKFwic2VuZGVySWRcIiwgXCI9PVwiLCBhdXRoLmN1cnJlbnRVc2VyLnVpZClcclxuICAgIC5nZXQoKVxyXG4gICAgLnRoZW4oKGRvY3MpID0+IHtcclxuICAgICAgbGV0IGZhdkFyciA9IFtdO1xyXG4gICAgICBkb2NzLmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgICAgIGZhdkFyciA9IFsuLi5mYXZBcnIsIGRvYy5kYXRhKCkuc3RvcnlJZF07XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gZmF2QXJyO1xyXG4gICAgfSlcclxuICAgIC50aGVuKCh1c2VycykgPT4ge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSB1c2Vycy5tYXAoKHVzZXIpID0+XHJcbiAgICAgICAgZGIuY29sbGVjdGlvbihcInN0b3JpZXNcIikuZG9jKHVzZXIpLmdldCgpXHJcbiAgICAgICk7XHJcbiAgICAgIFByb21pc2UuYWxsKHJlc3VsdCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgbGV0IGZhdlVzZXJzID0gW107XHJcbiAgICAgICAgcmVzLmZvckVhY2goXHJcbiAgICAgICAgICAoZG9jKSA9PiAoZmF2VXNlcnMgPSBbLi4uZmF2VXNlcnMsIHsgaWQ6IGRvYy5pZCwgLi4uZG9jLmRhdGEoKSB9XSlcclxuICAgICAgICApO1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IEdFVF9GQVZPUklURV9TVE9SSUVTLFxyXG4gICAgICAgICAgcGF5bG9hZDogZmF2VXNlcnMsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcbiIsImltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcbmltcG9ydCBcImZpcmViYXNlL2F1dGhcIjtcclxuaW1wb3J0IFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XHJcbmltcG9ydCBcImZpcmViYXNlL3N0b3JhZ2VcIjtcclxuXHJcbmNvbnN0IHByb2RDb25maWcgPSB7XHJcbiAgYXBpS2V5OiBwcm9jZXNzLmVudi5GSVJFQkFTRV9BUElfS0VZLFxyXG4gIGF1dGhEb21haW46IHByb2Nlc3MuZW52LkZJUkVCQVNFX0FVVEhfRE9NQUlOLFxyXG4gIGRhdGFiYXNlVVJMOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9EQVRBQkFTRV9VUkwsXHJcbiAgcHJvamVjdElkOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9QUk9KRUNUX0lELFxyXG4gIHN0b3JhZ2VCdWNrZXQ6IHByb2Nlc3MuZW52LkZJUkVCQVNFX1NUT1JBR0VfQlVDS0VULFxyXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9NRVNTQUdJTkdfU0VOREVSX0lELFxyXG4gIGFwcElkOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9BUFBfSUQsXHJcbn07XHJcblxyXG5jb25zdCBkZXZDb25maWcgPSB7XHJcbiAgYXBpS2V5OiBwcm9jZXNzLmVudi5GSVJFQkFTRV9BUElfS0VZLFxyXG4gIGF1dGhEb21haW46IHByb2Nlc3MuZW52LkZJUkVCQVNFX0FVVEhfRE9NQUlOLFxyXG4gIGRhdGFiYXNlVVJMOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9EQVRBQkFTRV9VUkwsXHJcbiAgcHJvamVjdElkOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9QUk9KRUNUX0lELFxyXG4gIHN0b3JhZ2VCdWNrZXQ6IHByb2Nlc3MuZW52LkZJUkVCQVNFX1NUT1JBR0VfQlVDS0VULFxyXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9NRVNTQUdJTkdfU0VOREVSX0lELFxyXG4gIGFwcElkOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9BUFBfSUQsXHJcbn07XHJcblxyXG5jb25zdCBjb25maWcgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBwcm9kQ29uZmlnIDogZGV2Q29uZmlnO1xyXG5cclxuaWYgKCFmaXJlYmFzZS5hcHBzLmxlbmd0aCkge1xyXG4gIGZpcmViYXNlLmluaXRpYWxpemVBcHAoY29uZmlnKTtcclxufVxyXG5cclxuY29uc3QgZGIgPSBmaXJlYmFzZS5maXJlc3RvcmUoKTtcclxuY29uc3QgYXV0aCA9IGZpcmViYXNlLmF1dGgoKTtcclxuY29uc3Qgc3RvcmFnZSA9IGZpcmViYXNlLnN0b3JhZ2UoKTtcclxuXHJcbmV4cG9ydCB7IGRiLCBhdXRoLCBzdG9yYWdlIH07XHJcbmV4cG9ydCBkZWZhdWx0IGNvbmZpZztcclxuIiwiZXhwb3J0IGNvbnN0IENBVEVHT1JJRVMgPSBbXHJcbiAgeyBuYW1lOiBcIkRyYW1hXCIsIHZhbHVlOiBcImRyYW1hXCIgfSxcclxuICB7IG5hbWU6IFwiQ29tZWR5XCIsIHZhbHVlOiBcImNvbWVkeVwiIH0sXHJcbiAgeyBuYW1lOiBcIkhvcnJvclwiLCB2YWx1ZTogXCJob3Jyb3JcIiB9LFxyXG4gIHsgbmFtZTogXCJSb21hbmNlXCIsIHZhbHVlOiBcInJvbWFuY2VcIiB9LFxyXG4gIHsgbmFtZTogXCJTY2ktZmlcIiwgdmFsdWU6IFwic2NpLWZpXCIgfSxcclxuICB7IG5hbWU6IFwiRmFudGFzeVwiLCB2YWx1ZTogXCJmYW50YXN5XCIgfSxcclxuICB7IG5hbWU6IFwiSHVtb3JcIiwgdmFsdWU6IFwiaHVtb3JcIiB9LFxyXG4gIHsgbmFtZTogXCJBY3Rpb25cIiwgdmFsdWU6IFwiYWN0aW9uXCIgfSxcclxuICB7IG5hbWU6IFwiVGhyaWxsZXJcIiwgdmFsdWU6IFwidGhyaWxsZXJcIiB9LFxyXG4gIHsgbmFtZTogXCJTdXBlcm5hdHVyYWxcIiwgdmFsdWU6IFwic3VwZXJuYXR1cmFsXCIgfSxcclxuICB7IG5hbWU6IFwiQWR2ZW50dXJlXCIsIHZhbHVlOiBcImFkdmVudHVyZVwiIH0sXHJcbiAgeyBuYW1lOiBcIk15c3RlcnlcIiwgdmFsdWU6IFwibXlzdGVyeVwiIH0sXHJcbiAgeyBuYW1lOiBcIldlc3Rlcm5cIiwgdmFsdWU6IFwid2VzdGVyblwiIH0sXHJcbiAgeyBuYW1lOiBcIkhpc3RvcnlcIiwgdmFsdWU6IFwiaGlzdG9yeVwiIH0sXHJcbiAgeyBuYW1lOiBcIkNyaW1lXCIsIHZhbHVlOiBcImNyaW1lXCIgfSxcclxuICB7IG5hbWU6IFwiRmFuZmljdGlvblwiLCB2YWx1ZTogXCJmYW5maWN0aW9uXCIgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBDT1BZUklHSFRTID0gW1xyXG4gIHsgbmFtZTogXCJQdWJsaWMgRG9tYWluXCIsIHZhbHVlOiBcInB1YmxpYyBkb21haW5cIiB9LFxyXG4gIHsgbmFtZTogXCJBbGwgUmlnaHRzIFJlc2VydmVkXCIsIHZhbHVlOiBcImFsbCByaWdodHMgcmVzZXJ2ZWRcIiB9LFxyXG4gIHsgbmFtZTogXCJDcmVhdGl2ZSBDb21tb25zXCIsIHZhbHVlOiBcImNyZWF0aXZlIGNvbW1vbnNcIiB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IExBTkdVQUdFUyA9IFtcclxuICB7IG5hbWU6IFwiQWZhclwiLCB2YWx1ZTogXCJhYVwiIH0sXHJcbiAgeyBuYW1lOiBcIkFia2hhemlhblwiLCB2YWx1ZTogXCJhYlwiIH0sXHJcbiAgeyBuYW1lOiBcIkF2ZXN0YW5cIiwgdmFsdWU6IFwiYWVcIiB9LFxyXG4gIHsgbmFtZTogXCJBZnJpa2FhbnNcIiwgdmFsdWU6IFwiYWZcIiB9LFxyXG4gIHsgbmFtZTogXCJBa2FuXCIsIHZhbHVlOiBcImFrXCIgfSxcclxuICB7IG5hbWU6IFwiQW1oYXJpY1wiLCB2YWx1ZTogXCJhbVwiIH0sXHJcbiAgeyBuYW1lOiBcIkFyYWdvbmVzZVwiLCB2YWx1ZTogXCJhblwiIH0sXHJcbiAgeyBuYW1lOiBcIkFyYWJpY1wiLCB2YWx1ZTogXCJhclwiIH0sXHJcbiAgeyBuYW1lOiBcIkFzc2FtZXNlXCIsIHZhbHVlOiBcImFzXCIgfSxcclxuICB7IG5hbWU6IFwiQXZhcmljXCIsIHZhbHVlOiBcImF2XCIgfSxcclxuICB7IG5hbWU6IFwiQXltYXJhXCIsIHZhbHVlOiBcImF5XCIgfSxcclxuICB7IG5hbWU6IFwiQXplcmJhaWphbmlcIiwgdmFsdWU6IFwiYXpcIiB9LFxyXG4gIHsgbmFtZTogXCJCYXNoa2lyXCIsIHZhbHVlOiBcImJhXCIgfSxcclxuICB7IG5hbWU6IFwiQmVsYXJ1c2lhblwiLCB2YWx1ZTogXCJiZVwiIH0sXHJcbiAgeyBuYW1lOiBcIkJ1bGdhcmlhblwiLCB2YWx1ZTogXCJiZ1wiIH0sXHJcbiAgeyBuYW1lOiBcIkJpaGFyaVwiLCB2YWx1ZTogXCJiaFwiIH0sXHJcbiAgeyBuYW1lOiBcIkJpc2xhbWFcIiwgdmFsdWU6IFwiYmlcIiB9LFxyXG4gIHsgbmFtZTogXCJCYW1iYXJhXCIsIHZhbHVlOiBcImJtXCIgfSxcclxuICB7IG5hbWU6IFwiQmVuZ2FsaVwiLCB2YWx1ZTogXCJiblwiIH0sXHJcbiAgeyBuYW1lOiBcIlRpYmV0YW5cIiwgdmFsdWU6IFwiYm9cIiB9LFxyXG4gIHsgbmFtZTogXCJCcmV0b25cIiwgdmFsdWU6IFwiYnJcIiB9LFxyXG4gIHsgbmFtZTogXCJCb3NuaWFuXCIsIHZhbHVlOiBcImJzXCIgfSxcclxuICB7IG5hbWU6IFwiQ2F0YWxhblwiLCB2YWx1ZTogXCJjYVwiIH0sXHJcbiAgeyBuYW1lOiBcIkNoZWNoZW5cIiwgdmFsdWU6IFwiY2VcIiB9LFxyXG4gIHsgbmFtZTogXCJDaGFtb3Jyb1wiLCB2YWx1ZTogXCJjaFwiIH0sXHJcbiAgeyBuYW1lOiBcIkNvcnNpY2FuXCIsIHZhbHVlOiBcImNvXCIgfSxcclxuICB7IG5hbWU6IFwiQ3JlZVwiLCB2YWx1ZTogXCJjclwiIH0sXHJcbiAgeyBuYW1lOiBcIkN6ZWNoXCIsIHZhbHVlOiBcImNzXCIgfSxcclxuICB7IG5hbWU6IFwiT2xkIENodXJjaCBTbGF2b25pY1wiLCB2YWx1ZTogXCJjdVwiIH0sXHJcbiAgeyBuYW1lOiBcIkNodXZhc2hcIiwgdmFsdWU6IFwiY3ZcIiB9LFxyXG4gIHsgbmFtZTogXCJXZWxzaFwiLCB2YWx1ZTogXCJjeVwiIH0sXHJcbiAgeyBuYW1lOiBcIkRhbmlzaFwiLCB2YWx1ZTogXCJkYVwiIH0sXHJcbiAgeyBuYW1lOiBcIkdlcm1hblwiLCB2YWx1ZTogXCJkZVwiIH0sXHJcbiAgeyBuYW1lOiBcIkRpdmVoaVwiLCB2YWx1ZTogXCJkdlwiIH0sXHJcbiAgeyBuYW1lOiBcIkR6b25na2hhXHRcIiwgdmFsdWU6IFwiZHpcIiB9LFxyXG4gIHsgbmFtZTogXCJFd2VcIiwgdmFsdWU6IFwiZWVcIiB9LFxyXG4gIHsgbmFtZTogXCJHcmVla1wiLCB2YWx1ZTogXCJlbFwiIH0sXHJcbiAgeyBuYW1lOiBcIkVuZ2xpc2hcIiwgdmFsdWU6IFwiZW5cIiB9LFxyXG4gIHsgbmFtZTogXCJFc3BlcmFudG9cIiwgdmFsdWU6IFwiZW9cIiB9LFxyXG4gIHsgbmFtZTogXCJTcGFuaXNoXCIsIHZhbHVlOiBcImVzXCIgfSxcclxuICB7IG5hbWU6IFwiRXN0b25pYW5cIiwgdmFsdWU6IFwiZXRcIiB9LFxyXG4gIHsgbmFtZTogXCJCYXNxdWVcIiwgdmFsdWU6IFwiZXVcIiB9LFxyXG4gIHsgbmFtZTogXCJQZXJzaWFuXCIsIHZhbHVlOiBcImZhXCIgfSxcclxuICB7IG5hbWU6IFwiRnVsYWhcIiwgdmFsdWU6IFwiZmZcIiB9LFxyXG4gIHsgbmFtZTogXCJGaW5uaXNoXCIsIHZhbHVlOiBcImZpXCIgfSxcclxuICB7IG5hbWU6IFwiRmlqaWFuXCIsIHZhbHVlOiBcImZqXCIgfSxcclxuICB7IG5hbWU6IFwiRmFyb2VzZVwiLCB2YWx1ZTogXCJmb1wiIH0sXHJcbiAgeyBuYW1lOiBcIkZyZW5jaFwiLCB2YWx1ZTogXCJmclwiIH0sXHJcbiAgeyBuYW1lOiBcIldlc3Rlcm4gRnJpc2lhblwiLCB2YWx1ZTogXCJmeVwiIH0sXHJcbiAgeyBuYW1lOiBcIklyaXNoXCIsIHZhbHVlOiBcImdhXCIgfSxcclxuICB7IG5hbWU6IFwiU2NvdHRpc2ggR2FlbGljXCIsIHZhbHVlOiBcImdkXCIgfSxcclxuICB7IG5hbWU6IFwiR2FsaWNpYW5cIiwgdmFsdWU6IFwiZ2xcIiB9LFxyXG4gIHsgbmFtZTogXCJHdWFyYW5pXCIsIHZhbHVlOiBcImduXCIgfSxcclxuICB7IG5hbWU6IFwiR3VqYXJhdGlcIiwgdmFsdWU6IFwiZ3VcIiB9LFxyXG4gIHsgbmFtZTogXCJNYW54XCIsIHZhbHVlOiBcImd2XCIgfSxcclxuICB7IG5hbWU6IFwiSGF1c2FcIiwgdmFsdWU6IFwiaGFcIiB9LFxyXG4gIHsgbmFtZTogXCJIZWJyZXdcIiwgdmFsdWU6IFwiaGVcIiB9LFxyXG4gIHsgbmFtZTogXCJIaW5kaVwiLCB2YWx1ZTogXCJoaVwiIH0sXHJcbiAgeyBuYW1lOiBcIkhpcmkgTW90dVwiLCB2YWx1ZTogXCJob1wiIH0sXHJcbiAgeyBuYW1lOiBcIkNyb2F0aWFuXCIsIHZhbHVlOiBcImhyXCIgfSxcclxuICB7IG5hbWU6IFwiSGFpdGlhblwiLCB2YWx1ZTogXCJodFwiIH0sXHJcbiAgeyBuYW1lOiBcIkh1bmdhcmlhblwiLCB2YWx1ZTogXCJodVwiIH0sXHJcbiAgeyBuYW1lOiBcIkFybWVuaWFuXCIsIHZhbHVlOiBcImh5XCIgfSxcclxuICB7IG5hbWU6IFwiSGVyZXJvXCIsIHZhbHVlOiBcImh6XCIgfSxcclxuICB7IG5hbWU6IFwiSW50ZXJsaW5ndWFcIiwgdmFsdWU6IFwiaWFcIiB9LFxyXG4gIHsgbmFtZTogXCJJbmRvbmVzaWFuXCIsIHZhbHVlOiBcImlkXCIgfSxcclxuICB7IG5hbWU6IFwiSW50ZXJsaW5ndWVcIiwgdmFsdWU6IFwiaWVcIiB9LFxyXG4gIHsgbmFtZTogXCJJZ2JvXCIsIHZhbHVlOiBcImlnXCIgfSxcclxuICB7IG5hbWU6IFwiU2ljaHVhbiBZaVwiLCB2YWx1ZTogXCJpaVwiIH0sXHJcbiAgeyBuYW1lOiBcIkludXBpYXFcIiwgdmFsdWU6IFwiaWtcIiB9LFxyXG4gIHsgbmFtZTogXCJJZG9cIiwgdmFsdWU6IFwiaW9cIiB9LFxyXG4gIHsgbmFtZTogXCJJY2VsYW5kaWNcIiwgdmFsdWU6IFwiaXNcIiB9LFxyXG4gIHsgbmFtZTogXCJJdGFsaWFuXCIsIHZhbHVlOiBcIml0XCIgfSxcclxuICB7IG5hbWU6IFwiSW51a3RpdHV0XCIsIHZhbHVlOiBcIml1XCIgfSxcclxuICB7IG5hbWU6IFwiSmFwYW5lc2VcIiwgdmFsdWU6IFwiamFcIiB9LFxyXG4gIHsgbmFtZTogXCJKYXZhbmVzZVwiLCB2YWx1ZTogXCJqdlwiIH0sXHJcbiAgeyBuYW1lOiBcIkdlb3JnaWFuXCIsIHZhbHVlOiBcImthXCIgfSxcclxuICB7IG5hbWU6IFwiS29uZ29cIiwgdmFsdWU6IFwia2dcIiB9LFxyXG4gIHsgbmFtZTogXCJLaWt1eXVcIiwgdmFsdWU6IFwia2lcIiB9LFxyXG4gIHsgbmFtZTogXCJLd2FueWFtYVwiLCB2YWx1ZTogXCJralwiIH0sXHJcbiAgeyBuYW1lOiBcIkthemFraFwiLCB2YWx1ZTogXCJra1wiIH0sXHJcbiAgeyBuYW1lOiBcIkdyZWVubGFuZGljXCIsIHZhbHVlOiBcImtsXCIgfSxcclxuICB7IG5hbWU6IFwiS2htZXJcIiwgdmFsdWU6IFwia21cIiB9LFxyXG4gIHsgbmFtZTogXCJLYW5uYWRhXCIsIHZhbHVlOiBcImtuXCIgfSxcclxuICB7IG5hbWU6IFwiS29yZWFuXCIsIHZhbHVlOiBcImtvXCIgfSxcclxuICB7IG5hbWU6IFwiS2FudXJpXCIsIHZhbHVlOiBcImtyXCIgfSxcclxuICB7IG5hbWU6IFwiS2FzaG1pcmlcIiwgdmFsdWU6IFwia3NcIiB9LFxyXG4gIHsgbmFtZTogXCJLdXJkaXNoXCIsIHZhbHVlOiBcImt1XCIgfSxcclxuICB7IG5hbWU6IFwiS29taVwiLCB2YWx1ZTogXCJrdlwiIH0sXHJcbiAgeyBuYW1lOiBcIkNvcm5pc2hcIiwgdmFsdWU6IFwia3dcIiB9LFxyXG4gIHsgbmFtZTogXCJLaXJnaGl6XCIsIHZhbHVlOiBcImt5XCIgfSxcclxuICB7IG5hbWU6IFwiTGF0aW5cIiwgdmFsdWU6IFwibGFcIiB9LFxyXG4gIHsgbmFtZTogXCJMdXhlbWJvdXJnaXNoXCIsIHZhbHVlOiBcImxiXCIgfSxcclxuICB7IG5hbWU6IFwiR2FuZGFcIiwgdmFsdWU6IFwibGdcIiB9LFxyXG4gIHsgbmFtZTogXCJMaW1idXJnaXNoXCIsIHZhbHVlOiBcImxpXCIgfSxcclxuICB7IG5hbWU6IFwiTGluZ2FsYVwiLCB2YWx1ZTogXCJsblwiIH0sXHJcbiAgeyBuYW1lOiBcIkxhb1wiLCB2YWx1ZTogXCJsb1wiIH0sXHJcbiAgeyBuYW1lOiBcIkxpdGh1YW5pYW5cIiwgdmFsdWU6IFwibHRcIiB9LFxyXG4gIHsgbmFtZTogXCJMdWJhXCIsIHZhbHVlOiBcImx1XCIgfSxcclxuICB7IG5hbWU6IFwiTGF0dmlhblwiLCB2YWx1ZTogXCJsdlwiIH0sXHJcbiAgeyBuYW1lOiBcIk1hbGFnYXN5XCIsIHZhbHVlOiBcIm1nXCIgfSxcclxuICB7IG5hbWU6IFwiTWFyc2hhbGxlc2VcIiwgdmFsdWU6IFwibWhcIiB9LFxyXG4gIHsgbmFtZTogXCJNxIFvcmlcIiwgdmFsdWU6IFwibWlcIiB9LFxyXG4gIHsgbmFtZTogXCJNYWNlZG9uaWFuXCIsIHZhbHVlOiBcIm1rXCIgfSxcclxuICB7IG5hbWU6IFwiTWFsYXlhbGFtXCIsIHZhbHVlOiBcIm1sXCIgfSxcclxuICB7IG5hbWU6IFwiTW9uZ29saWFuXCIsIHZhbHVlOiBcIm1uXCIgfSxcclxuICB7IG5hbWU6IFwiTW9sZGF2aWFuXCIsIHZhbHVlOiBcIm1vXCIgfSxcclxuICB7IG5hbWU6IFwiTWFyYXRoaVwiLCB2YWx1ZTogXCJtclwiIH0sXHJcbiAgeyBuYW1lOiBcIk1hbGF5XCIsIHZhbHVlOiBcIm1zXCIgfSxcclxuICB7IG5hbWU6IFwiTWFsdGVzZVwiLCB2YWx1ZTogXCJtdFwiIH0sXHJcbiAgeyBuYW1lOiBcIkJ1cm1lc2VcIiwgdmFsdWU6IFwibXlcIiB9LFxyXG4gIHsgbmFtZTogXCJOYXVydVwiLCB2YWx1ZTogXCJuYVwiIH0sXHJcbiAgeyBuYW1lOiBcIk5vcndlZ2lhbiBCb2ttw6VsXCIsIHZhbHVlOiBcIm5iXCIgfSxcclxuICB7IG5hbWU6IFwiTm9ydGggTmRlYmVsZVwiLCB2YWx1ZTogXCJuZFwiIH0sXHJcbiAgeyBuYW1lOiBcIk5lcGFsaVwiLCB2YWx1ZTogXCJuZVwiIH0sXHJcbiAgeyBuYW1lOiBcIk5kb25nYVwiLCB2YWx1ZTogXCJuZ1wiIH0sXHJcbiAgeyBuYW1lOiBcIkR1dGNoXCIsIHZhbHVlOiBcIm5sXCIgfSxcclxuICB7IG5hbWU6IFwiTm9yd2VnaWFuIE55bm9yc2tcIiwgdmFsdWU6IFwibm5cIiB9LFxyXG4gIHsgbmFtZTogXCJOb3J3ZWdpYW5cIiwgdmFsdWU6IFwibm9cIiB9LFxyXG4gIHsgbmFtZTogXCJTb3V0aCBOZGViZWxlXCIsIHZhbHVlOiBcIm5yXCIgfSxcclxuICB7IG5hbWU6IFwiTmF2YWpvXCIsIHZhbHVlOiBcIm52XCIgfSxcclxuICB7IG5hbWU6IFwiQ2hpY2hld2FcIiwgdmFsdWU6IFwibnlcIiB9LFxyXG4gIHsgbmFtZTogXCJPY2NpdGFuXCIsIHZhbHVlOiBcIm9jXCIgfSxcclxuICB7IG5hbWU6IFwiT2ppYndhXCIsIHZhbHVlOiBcIm9qXCIgfSxcclxuICB7IG5hbWU6IFwiT3JvbW9cIiwgdmFsdWU6IFwib21cIiB9LFxyXG4gIHsgbmFtZTogXCJPcml5YVwiLCB2YWx1ZTogXCJvclwiIH0sXHJcbiAgeyBuYW1lOiBcIk9zc2V0aWFuXCIsIHZhbHVlOiBcIm9zXCIgfSxcclxuICB7IG5hbWU6IFwiUGFuamFiaVwiLCB2YWx1ZTogXCJwYVwiIH0sXHJcbiAgeyBuYW1lOiBcIlDEgWxpXCIsIHZhbHVlOiBcInBpXCIgfSxcclxuICB7IG5hbWU6IFwiUG9saXNoXCIsIHZhbHVlOiBcInBsXCIgfSxcclxuICB7IG5hbWU6IFwiUGFzaHRvXCIsIHZhbHVlOiBcInBzXCIgfSxcclxuICB7IG5hbWU6IFwiUG9ydHVndWVzZVwiLCB2YWx1ZTogXCJwdFwiIH0sXHJcbiAgeyBuYW1lOiBcIlF1ZWNodWFcIiwgdmFsdWU6IFwicXVcIiB9LFxyXG4gIHsgbmFtZTogXCJSZXVuaW9uZXNlXCIsIHZhbHVlOiBcInJjXCIgfSxcclxuICB7IG5hbWU6IFwiUm9tYW5zaFwiLCB2YWx1ZTogXCJybVwiIH0sXHJcbiAgeyBuYW1lOiBcIktpcnVuZGlcIiwgdmFsdWU6IFwicm5cIiB9LFxyXG4gIHsgbmFtZTogXCJSb21hbmlhblwiLCB2YWx1ZTogXCJyb1wiIH0sXHJcbiAgeyBuYW1lOiBcIlJ1c3NpYW5cIiwgdmFsdWU6IFwicnVcIiB9LFxyXG4gIHsgbmFtZTogXCJLaW55YXJ3YW5kYVwiLCB2YWx1ZTogXCJyd1wiIH0sXHJcbiAgeyBuYW1lOiBcIlNhbnNrcml0XCIsIHZhbHVlOiBcInNhXCIgfSxcclxuICB7IG5hbWU6IFwiU2FyZGluaWFuXCIsIHZhbHVlOiBcInNjXCIgfSxcclxuICB7IG5hbWU6IFwiU2luZGhpXCIsIHZhbHVlOiBcInNkXCIgfSxcclxuICB7IG5hbWU6IFwiTm9ydGhlcm4gU2FtaVwiLCB2YWx1ZTogXCJzZVwiIH0sXHJcbiAgeyBuYW1lOiBcIlNhbmdvXCIsIHZhbHVlOiBcInNnXCIgfSxcclxuICB7IG5hbWU6IFwiU2VyYm8tQ3JvYXRpYW5cIiwgdmFsdWU6IFwic2hcIiB9LFxyXG4gIHsgbmFtZTogXCJTaW5oYWxlc2VcIiwgdmFsdWU6IFwic2lcIiB9LFxyXG4gIHsgbmFtZTogXCJTbG92YWtcIiwgdmFsdWU6IFwic2tcIiB9LFxyXG4gIHsgbmFtZTogXCJTbG92ZW5pYW5cIiwgdmFsdWU6IFwic2xcIiB9LFxyXG4gIHsgbmFtZTogXCJTYW1vYW5cIiwgdmFsdWU6IFwic21cIiB9LFxyXG4gIHsgbmFtZTogXCJTaG9uYVwiLCB2YWx1ZTogXCJzblwiIH0sXHJcbiAgeyBuYW1lOiBcIlNvbWFsaVwiLCB2YWx1ZTogXCJzb1wiIH0sXHJcbiAgeyBuYW1lOiBcIkFsYmFuaWFuXCIsIHZhbHVlOiBcInNxXCIgfSxcclxuICB7IG5hbWU6IFwiU2VyYmlhblwiLCB2YWx1ZTogXCJzclwiIH0sXHJcbiAgeyBuYW1lOiBcIlN3YXRpXCIsIHZhbHVlOiBcInNzXCIgfSxcclxuICB7IG5hbWU6IFwiU290aG9cIiwgdmFsdWU6IFwic3RcIiB9LFxyXG4gIHsgbmFtZTogXCJTdW5kYW5lc2VcIiwgdmFsdWU6IFwic3VcIiB9LFxyXG4gIHsgbmFtZTogXCJTd2VkaXNoXCIsIHZhbHVlOiBcInN2XCIgfSxcclxuICB7IG5hbWU6IFwiU3dhaGlsaVwiLCB2YWx1ZTogXCJzd1wiIH0sXHJcbiAgeyBuYW1lOiBcIlRhbWlsXCIsIHZhbHVlOiBcInRhXCIgfSxcclxuICB7IG5hbWU6IFwiVGVsdWd1XCIsIHZhbHVlOiBcInRlXCIgfSxcclxuICB7IG5hbWU6IFwiVGFqaWtcIiwgdmFsdWU6IFwidGdcIiB9LFxyXG4gIHsgbmFtZTogXCJUaGFpXCIsIHZhbHVlOiBcInRoXCIgfSxcclxuICB7IG5hbWU6IFwiVGlncmlueWFcIiwgdmFsdWU6IFwidGlcIiB9LFxyXG4gIHsgbmFtZTogXCJUdXJrbWVuXCIsIHZhbHVlOiBcInRrXCIgfSxcclxuICB7IG5hbWU6IFwiVGFnYWxvZ1wiLCB2YWx1ZTogXCJ0bFwiIH0sXHJcbiAgeyBuYW1lOiBcIlRzd2FuYVwiLCB2YWx1ZTogXCJ0blwiIH0sXHJcbiAgeyBuYW1lOiBcIlRvbmdhXCIsIHZhbHVlOiBcInRvXCIgfSxcclxuICB7IG5hbWU6IFwiVHVya2lzaFwiLCB2YWx1ZTogXCJ0clwiIH0sXHJcbiAgeyBuYW1lOiBcIlRzb25nYVwiLCB2YWx1ZTogXCJ0c1wiIH0sXHJcbiAgeyBuYW1lOiBcIlRhdGFyXCIsIHZhbHVlOiBcInR0XCIgfSxcclxuICB7IG5hbWU6IFwiVHdpXCIsIHZhbHVlOiBcInR3XCIgfSxcclxuICB7IG5hbWU6IFwiVGFoaXRpYW5cIiwgdmFsdWU6IFwidHlcIiB9LFxyXG4gIHsgbmFtZTogXCJVaWdodXJcIiwgdmFsdWU6IFwidWdcIiB9LFxyXG4gIHsgbmFtZTogXCJVa3JhaW5pYW5cIiwgdmFsdWU6IFwidWtcIiB9LFxyXG4gIHsgbmFtZTogXCJVcmR1XCIsIHZhbHVlOiBcInVyXCIgfSxcclxuICB7IG5hbWU6IFwiVXpiZWtcIiwgdmFsdWU6IFwidXpcIiB9LFxyXG4gIHsgbmFtZTogXCJWZW5kYVwiLCB2YWx1ZTogXCJ2ZVwiIH0sXHJcbiAgeyBuYW1lOiBcIlZpw6p0IE5hbWVzZVwiLCB2YWx1ZTogXCJ2aVwiIH0sXHJcbiAgeyBuYW1lOiBcIlZvbGFww7xrXCIsIHZhbHVlOiBcInZvXCIgfSxcclxuICB7IG5hbWU6IFwiV2FsbG9vblwiLCB2YWx1ZTogXCJ3YVwiIH0sXHJcbiAgeyBuYW1lOiBcIldvbG9mXCIsIHZhbHVlOiBcIndvXCIgfSxcclxuICB7IG5hbWU6IFwiWGhvc2FcIiwgdmFsdWU6IFwieGhcIiB9LFxyXG4gIHsgbmFtZTogXCJZaWRkaXNoXCIsIHZhbHVlOiBcInlpXCIgfSxcclxuICB7IG5hbWU6IFwiWW9ydWJhXCIsIHZhbHVlOiBcInlvXCIgfSxcclxuICB7IG5hbWU6IFwiWmh1YW5nXCIsIHZhbHVlOiBcInphXCIgfSxcclxuICB7IG5hbWU6IFwiQ2hpbmVzZVwiLCB2YWx1ZTogXCJ6aFwiIH0sXHJcbiAgeyBuYW1lOiBcIlp1bHVcIiwgdmFsdWU6IFwienVcIiB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNUQVRVUyA9IFtcclxuICB7IG5hbWU6IFwiSW4gUHJvZ3Jlc3NcIiwgdmFsdWU6IFwiaW4gcHJvZ3Jlc3NcIiB9LFxyXG4gIHsgbmFtZTogXCJJbiBIaWF0dXNcIiwgdmFsdWU6IFwiaW4gaGlhdHVzXCIgfSxcclxuICB7IG5hbWU6IFwiQ29tcGxldGVkXCIsIHZhbHVlOiBcImNvbXBsZXRlZFwiIH0sXHJcbl07XHJcblxyXG4vLyBUWVBFU1xyXG5leHBvcnQgY29uc3QgR0VUX1BST0ZJTEUgPSBcIkdFVF9QUk9GSUxFXCI7XHJcbmV4cG9ydCBjb25zdCBMT0dJTiA9IFwiTE9HSU5cIjtcclxuZXhwb3J0IGNvbnN0IFJFR0lTVEVSID0gXCJSRUdJU1RFUlwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9TVE9SWSA9IFwiR0VUX1NUT1JZXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfVVNFUl9TVE9SSUVTID0gXCJHRVRfVVNFUl9TVE9SSUVTXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfRkFWT1JJVEVfU1RPUklFUyA9IFwiR0VUX0ZBVk9SSVRFX1NUT1JJRVNcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9TVE9SWSA9IFwiQUREX1NUT1JZXCI7XHJcbmV4cG9ydCBjb25zdCBFRElUX1NUT1JZID0gXCJFRElUX1NUT1JZXCI7XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX0NIQVBURVIgPSBcIkdFVF9DSEFQVEVSXCI7XHJcbmV4cG9ydCBjb25zdCBBRERfQ0hBUFRFUiA9IFwiQUREX0NIQVBURVJcIjtcclxuZXhwb3J0IGNvbnN0IEVESVRfQ0hBUFRFUiA9IFwiRURJVF9DSEFQVEVSXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfQ0hBUFRFUlMgPSBcIkdFVF9DSEFQVEVSU1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9VU0VSX0NIQVJBQ1RFUlMgPSBcIkdFVF9VU0VSX0NIQVJBQ1RFUlNcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9VU0VSX0xPQ0FUSU9OUyA9IFwiR0VUX1VTRVJfTE9DQVRJT05TXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfRkFWT1JJVEVfQ0hBUkFDVEVSUyA9IFwiR0VUX0ZBVk9SSVRFX0NIQVJBQ1RFUlNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfRkFWT1JJVEVfQVVUSE9SUyA9IFwiR0VUX0ZBVk9SSVRFX0FVVEhPUlNcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9GT0xMT1dFUlMgPSBcIkdFVF9GT0xMT1dFUlNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBESVNQQVRDSF9FUlJPUiA9IFwiRElTUEFUQ0hfRVJST1JcIjtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkcmFmdC1jb252ZXJ0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRyYWZ0LWpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2FwcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9hdXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2ZpcmVzdG9yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9zdG9yYWdlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZHluYW1pY1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kcmFmdC13eXNpd3lnXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=