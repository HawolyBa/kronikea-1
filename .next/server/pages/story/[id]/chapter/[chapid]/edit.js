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
  };

  return __jsx(_components_hoc_LoadingScreen__WEBPACK_IMPORTED_MODULE_8__["default"], {
    loading: loading,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 5
    }
  }, __jsx(_components_hoc_RedirectComp__WEBPACK_IMPORTED_MODULE_9__["default"], {
    type: "404",
    condition: chapterExists,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }, __jsx(_components_hoc_RedirectComp__WEBPACK_IMPORTED_MODULE_9__["default"], {
    type: "403",
    condition: auth.user && auth.user.uid === chapter.authorId,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "custom-form",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "inner",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }, __jsx("h2", {
    className: "side-heading",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
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
      lineNumber: 75,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mb3Jtcy9DaGFwdGVyRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvcm1zL0l0ZW1TZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvcm1zL1JhZGlvQnV0dG9uLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaG9jL0xvYWRpbmdTY3JlZW4uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9ob2MvUmVkaXJlY3RDb21wLmpzIiwid2VicGFjazovLy8uL2hvb2tzL3VzZXJIb29rcy5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9zdG9yeS8vY2hhcHRlci9bY2hhcGlkXS9lZGl0LmpzIiwid2VicGFjazovLy8uL3JlZHV4L2FjdGlvbnMvY2hhcmFjdGVyc0FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWN0aW9ucy9zdG9yaWVzQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9mYkNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImRyYWZ0LWNvbnZlcnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkcmFmdC1qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL2FwcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL2F1dGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9maXJlc3RvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9zdG9yYWdlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9keW5hbWljXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRyYWZ0LXd5c2l3eWdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIl0sIm5hbWVzIjpbIkVkaXRvciIsImR5bmFtaWMiLCJ0aGVuIiwibW9kIiwic3NyIiwiQ2hhcHRlckZvcm0iLCJmb3JtIiwic3VibWl0IiwiY2hhcmFjdGVycyIsImxvY2F0aW9ucyIsInNldEJvZHkiLCJsb2FkaW5nQ2hhcHRlciIsInR5cGUiLCJjaGFwdGVyIiwic3RhdHVzIiwic2V0U3RhdHVzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImVkaXRvclN0YXRlIiwic2V0RWRpdG9yU3RhdGUiLCJFZGl0b3JTdGF0ZSIsImNyZWF0ZUVtcHR5IiwiY3JlYXRlV2l0aENvbnRlbnQiLCJjb252ZXJ0RnJvbUhUTUwiLCJib2R5Iiwib25FZGl0b3JTdGF0ZUNoYW5nZSIsInN0YXRlIiwiaHRtbCIsImNvbnZlcnRUb0hUTUwiLCJnZXRDdXJyZW50Q29udGVudCIsIm51bWJlciIsInRpdGxlIiwicmVxdWlyZWQiLCJtZXNzYWdlIiwiT3B0aW9uIiwiU2VsZWN0IiwiSXRlbVNlbGVjdG9yIiwiaXRlbSIsInN1YmplY3QiLCJhcnJJbkZvcm0iLCJsYWJlbCIsImxnMSIsInN1YmplY3RUeXBlIiwiY3VycmVudENoYXIiLCJzZXRDdXJyZW50Q2hhciIsImN1cnJlbnRMb2MiLCJzZXRDdXJyZW50TG9jIiwic2VsZWN0ZWRTdWJqZWN0cyIsInNldFNlbGVjdGVkU3ViamVjdHMiLCJmaWx0ZXIiLCJjIiwiaW5jbHVkZXMiLCJpZCIsImFkZENoYXJhY3RlciIsImN1cnJlbnQiLCJzZXRDdXJyZW50IiwiZ2V0RmllbGRWYWx1ZSIsImxlbmd0aCIsImluZGV4T2YiLCJmaW5kIiwic2V0RmllbGRzVmFsdWUiLCJyZW1vdmVDaGFyYWN0ZXIiLCJ2YWwiLCJzb3J0IiwiYSIsImIiLCJrZXlBIiwiZmlyc3RuYW1lIiwia2V5QiIsIm1hcCIsImNoYXIiLCJsYXN0bmFtZSIsIm5hbWUiLCJpbWFnZSIsIm1hcmdpbiIsIlJhZGlvQnV0b24iLCJsZyIsInNtIiwieHMiLCJtZCIsIm51bTEiLCJudW0yIiwibGFiZWwxIiwibGFiZWwyIiwic2V0RnVuYyIsIkxvYWRpbmdTY3JlZW4iLCJjaGlsZHJlbiIsImxvYWRpbmciLCJSZWRpcmVjdENvbXAiLCJjb25kaXRpb24iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJhdXRoQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJQcm92aWRlQXV0aCIsImF1dGgiLCJ1c2VQcm92aWRlQXV0aCIsInVzZUF1dGgiLCJ1c2VDb250ZXh0IiwidXNlciIsInNldFVzZXIiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJzaWduaW4iLCJlbWFpbCIsInBhc3N3b3JkIiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJyZXNwb25zZSIsInNpZ251cCIsInVzZXJuYW1lIiwiY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwiZGIiLCJjb2xsZWN0aW9uIiwiYWRkIiwiYmFkZ2VzIiwiYmlvZ3JhcGh5IiwiY3JlYXRlZEF0IiwiZmlyZWJhc2UiLCJmaXJlc3RvcmUiLCJGaWVsZFZhbHVlIiwic2VydmVyVGltZXN0YW1wIiwic3VzcGVuZGVkIiwiZmFjZWJvb2siLCJpbnN0YWdyYW0iLCJ0d2l0dGVyIiwiZGV2aWFudGFydCIsImxpa2VzQ291bnQiLCJzaWdub3V0Iiwic2lnbk91dCIsInNlbmRQYXNzd29yZFJlc2V0RW1haWwiLCJjb25maXJtUGFzc3dvcmRSZXNldCIsImNvZGUiLCJ1c2VFZmZlY3QiLCJ1bnN1YnNjcmliZSIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsInVpZCIsImRvYyIsIm9uU25hcHNob3QiLCJkYXRhIiwiRWRpdENoYXB0ZXIiLCJwcm9wcyIsIkZvcm0iLCJ1c2VGb3JtIiwiY2hhcHRlckV4aXN0cyIsImVkaXRNZXNzYWdlIiwicm91dGVyIiwidXNlUm91dGVyIiwiZ2V0Q2hhcHRlciIsInF1ZXJ5IiwiY2hhcGlkIiwic3VjY2VzcyIsImdldFVzZXJDaGFyYWN0ZXJzIiwiZ2V0VXNlckxvY2F0aW9ucyIsInZhbHVlcyIsImVkaXRDaGFwdGVyIiwiYXV0aG9ySWQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdG9yaWVzIiwidXNlckNoYXJhY3RlcnMiLCJ1c2VyTG9jYXRpb25zIiwiY29ubmVjdCIsImdldENoYXJhY3RlciIsImRpc3BhdGNoIiwiZ2V0IiwiZXhpc3RzIiwiR0VUX0NIQVJBQ1RFUiIsInBheWxvYWQiLCJjaGFyYWN0ZXIiLCJjaGFyYUV4aXN0cyIsIkFERF9DSEFSQUNURVIiLCJpbWFnZU5hbWUiLCJ0b0xvd2VyQ2FzZSIsInN0b3JhZ2UiLCJyZWYiLCJjdXJyZW50VXNlciIsInB1dCIsImNoaWxkIiwiZ2V0RG93bmxvYWRVUkwiLCJ1cmwiLCJsaWtlcyIsImRpc2xpa2VzIiwicmVzIiwiY2hhcmFjdGVySWQiLCJjYXRjaCIsImVyciIsImVycm9yIiwiZWRpdENoYXJhY3RlciIsIkVESVRfQ0hBUkFDVEVSIiwibG9hZGluZ0NoYXJhY3RlciIsInVwZGF0ZSIsInVzZXJJZCIsIndoZXJlIiwiZG9jcyIsIml0ZW1zIiwiZm9yRWFjaCIsIkdFVF9VU0VSX0NIQVJBQ1RFUlMiLCJnZXRGYXZvcml0ZUNoYXJhY3RlcnMiLCJmYXZBcnIiLCJ1c2VycyIsInJlc3VsdCIsIlByb21pc2UiLCJhbGwiLCJmYXZVc2VycyIsIkdFVF9GQVZPUklURV9DSEFSQUNURVJTIiwiZ2V0U3RvcnkiLCJHRVRfU1RPUlkiLCJzdG9yeUV4aXN0cyIsIkRJU1BBVENIX0VSUk9SIiwiY29uc29sZSIsImxvZyIsImFkZFN0b3J5IiwiQUREX1NUT1JZIiwic3BsaXQiLCJqb2luIiwiYmFubmVyIiwiYXV0aG9yTmFtZSIsIm9uZVNob3QiLCJjaGFwdGVyc0NvdW50IiwibG9jYXRpb25zQ291bnQiLCJzZWNvbmRhcnlDaGFyYWN0ZXJzIiwiZmVhdHVyZWQiLCJub3RlIiwic2V0VGltZW91dCIsIlJvdXRlciIsInB1c2giLCJzdG9yeUlkIiwiZWRpdFN0b3J5IiwiRURJVF9TVE9SWSIsImxvYWRpbmdTdG9yeSIsImFkZENoYXB0ZXIiLCJBRERfQ0hBUFRFUiIsImNvbW1lbnRzQ291bnQiLCJ2b3RlcnMiLCJ2b3Rlc0NvdW50IiwibWFpbiIsIm1haW5DaGFyYWN0ZXJzIiwiU2V0IiwiY2hhcElkIiwiR0VUX0NIQVBURVIiLCJFRElUX0NIQVBURVIiLCJnZXRDaGFwdGVycyIsIm9yZGVyQnkiLCJhcnIiLCJHRVRfQ0hBUFRFUlMiLCJnZXRTdG9yeUNoYXJhY3RlcnMiLCJnZXRVc2VyU3RvcmllcyIsIkdFVF9VU0VSX1NUT1JJRVMiLCJHRVRfVVNFUl9MT0NBVElPTlMiLCJnZXRGYXZvcml0ZVN0b3JpZXMiLCJHRVRfRkFWT1JJVEVfU1RPUklFUyIsInByb2RDb25maWciLCJhcGlLZXkiLCJwcm9jZXNzIiwiYXV0aERvbWFpbiIsImRhdGFiYXNlVVJMIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJGSVJFQkFTRV9BUFBfSUQiLCJkZXZDb25maWciLCJjb25maWciLCJhcHBzIiwiaW5pdGlhbGl6ZUFwcCIsIkNBVEVHT1JJRVMiLCJ2YWx1ZSIsIkNPUFlSSUdIVFMiLCJMQU5HVUFHRVMiLCJTVEFUVVMiLCJHRVRfUFJPRklMRSIsIkxPR0lOIiwiUkVHSVNURVIiLCJHRVRfRkFWT1JJVEVfQVVUSE9SUyIsIkdFVF9GT0xMT1dFUlMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFn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O0FBQTFCLENBM0h1QixFQTRIdkI7QUFBRWxNLE1BQUksRUFBRSxRQUFSO0FBQWtCa00sT0FBSyxFQUFFO0FBQXpCLENBNUh1QixFQTZIdkI7QUFBRWxNLE1BQUksRUFBRSxPQUFSO0FBQWlCa00sT0FBSyxFQUFFO0FBQXhCLENBN0h1QixFQThIdkI7QUFBRWxNLE1BQUksRUFBRSxPQUFSO0FBQWlCa00sT0FBSyxFQUFFO0FBQXhCLENBOUh1QixFQStIdkI7QUFBRWxNLE1BQUksRUFBRSxVQUFSO0FBQW9Ca00sT0FBSyxFQUFFO0FBQTNCLENBL0h1QixFQWdJdkI7QUFBRWxNLE1BQUksRUFBRSxTQUFSO0FBQW1Ca00sT0FBSyxFQUFFO0FBQTFCLENBaEl1QixFQWlJdkI7QUFBRWxNLE1BQUksRUFBRSxNQUFSO0FBQWdCa00sT0FBSyxFQUFFO0FBQXZCLENBakl1QixFQWtJdkI7QUFBRWxNLE1BQUksRUFBRSxRQUFSO0FBQWtCa00sT0FBSyxFQUFFO0FBQXpCLENBbEl1QixFQW1JdkI7QUFBRWxNLE1BQUksRUFBRSxRQUFSO0FBQWtCa00sT0FBSyxFQUFFO0FBQXpCLENBbkl1QixFQW9JdkI7QUFBRWxNLE1BQUksRUFBRSxZQUFSO0FBQXNCa00sT0FBSyxFQUFFO0FBQTdCLENBcEl1QixFQXFJdkI7QUFBRWxNLE1BQUksRUFBRSxTQUFSO0FBQW1Ca00sT0FBSyxFQUFFO0FBQTFCLENBckl1QixFQXNJdkI7QUFBRWxNLE1BQUksRUFBRSxZQUFSO0FBQXNCa00sT0FBSyxFQUFFO0FBQTdCLENBdEl1QixFQXVJdkI7QUFBRWxNLE1BQUksRUFBRSxTQUFSO0FBQW1Ca00sT0FBSyxFQUFFO0FBQTFCLENBdkl1QixFQXdJdkI7QUFBRWxNLE1BQUksRUFBRSxTQUFSO0FBQW1Ca00sT0FBSyxFQUFFO0FBQTFCLENBeEl1QixFQXlJdkI7QUFBRWxNLE1BQUksRUFBRSxVQUFSO0FBQW9Ca00sT0FBSyxFQUFFO0FBQTNCLENBekl1QixFQTBJdkI7QUFBRWxNLE1BQUksRUFBRSxTQUFSO0FBQW1Ca00sT0FBSyxFQUFF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QW1CLEdBQUcscUJBQTVCO0FBQ0EsTUFBTW9ELGtCQUFrQixHQUFHLG9CQUEzQjtBQUNBLE1BQU01Qyx1QkFBdUIsR0FBRyx5QkFBaEM7QUFFQSxNQUFNcUUsb0JBQW9CLEdBQUcsc0JBQTdCO0FBQ0EsTUFBTUMsYUFBYSxHQUFHLGVBQXRCO0FBRUEsTUFBTWxFLGNBQWMsR0FBRyxnQkFBdkIsQzs7Ozs7Ozs7Ozs7QUN2UFAsaUM7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsZ0Q7Ozs7Ozs7Ozs7O0FDQUEsd0MiLCJmaWxlIjoicGFnZXMvc3RvcnkvW2lkXS9jaGFwdGVyL1tjaGFwaWRdL2VkaXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBjaHVua3NcbiBcdC8vIFwiMFwiIG1lYW5zIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJwYWdlcy9zdG9yeS9baWRdL2NoYXB0ZXIvW2NoYXBpZF0vZWRpdFwiOiAwXG4gXHR9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIHVuY2F1Z2h0IGVycm9yIGhhbmRsZXIgZm9yIHdlYnBhY2sgcnVudGltZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikge1xuIFx0XHRwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uKCkge1xuIFx0XHRcdHRocm93IGVycjsgLy8gY2F0Y2ggdGhpcyBlcnJvciBieSB1c2luZyBpbXBvcnQoKS5jYXRjaCgpXG4gXHRcdH0pO1xuIFx0fTtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9zdG9yeS9baWRdL2NoYXB0ZXIvW2NoYXBpZF0vZWRpdC5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xyXG5pbXBvcnQgeyBGb3JtLCBSb3csIENvbCwgSW5wdXROdW1iZXIsIElucHV0LCBEaXZpZGVyLCBTcGluIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgRWRpdG9yU3RhdGUgfSBmcm9tIFwiZHJhZnQtanNcIjtcclxuaW1wb3J0IHsgY29udmVydFRvSFRNTCwgY29udmVydEZyb21IVE1MIH0gZnJvbSBcImRyYWZ0LWNvbnZlcnRcIjtcclxuaW1wb3J0IFwicmVhY3QtZHJhZnQtd3lzaXd5Zy9kaXN0L3JlYWN0LWRyYWZ0LXd5c2l3eWcuY3NzXCI7XHJcblxyXG5pbXBvcnQgSXRlbVNlbGVjdG9yIGZyb20gXCIuL0l0ZW1TZWxlY3RvclwiO1xyXG5pbXBvcnQgUmFkaW9CdXR0b24gZnJvbSBcIi4vUmFkaW9CdXR0b25cIjtcclxuY29uc3QgRWRpdG9yID0gZHluYW1pYyhcclxuICAoKSA9PiBpbXBvcnQoXCJyZWFjdC1kcmFmdC13eXNpd3lnXCIpLnRoZW4oKG1vZCkgPT4gbW9kLkVkaXRvciksXHJcbiAgeyBzc3I6IGZhbHNlIH1cclxuKTtcclxuXHJcbmNvbnN0IENoYXB0ZXJGb3JtID0gKHtcclxuICBmb3JtLFxyXG4gIHN1Ym1pdCxcclxuICBjaGFyYWN0ZXJzLFxyXG4gIGxvY2F0aW9ucyxcclxuICBzZXRCb2R5LFxyXG4gIGxvYWRpbmdDaGFwdGVyLFxyXG4gIHR5cGUsXHJcbiAgY2hhcHRlcixcclxufSkgPT4ge1xyXG4gIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSBSZWFjdC51c2VTdGF0ZShcInRydWVcIik7XHJcblxyXG4gIGNvbnN0IFtlZGl0b3JTdGF0ZSwgc2V0RWRpdG9yU3RhdGVdID0gUmVhY3QudXNlU3RhdGUoXHJcbiAgICB0eXBlID09PSBcImFkZFwiXHJcbiAgICAgID8gRWRpdG9yU3RhdGUuY3JlYXRlRW1wdHkoKVxyXG4gICAgICA6IEVkaXRvclN0YXRlLmNyZWF0ZVdpdGhDb250ZW50KGNvbnZlcnRGcm9tSFRNTChjaGFwdGVyICYmIGNoYXB0ZXIuYm9keSkpXHJcbiAgKTtcclxuXHJcbiAgY29uc3Qgb25FZGl0b3JTdGF0ZUNoYW5nZSA9IChzdGF0ZSkgPT4ge1xyXG4gICAgc2V0RWRpdG9yU3RhdGUoc3RhdGUpO1xyXG4gICAgY29uc3QgaHRtbCA9IGNvbnZlcnRUb0hUTUwoZWRpdG9yU3RhdGUuZ2V0Q3VycmVudENvbnRlbnQoKSk7XHJcbiAgICBzZXRCb2R5KGh0bWwpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybVxyXG4gICAgICBsYXlvdXQ9XCJ2ZXJ0aWNhbFwiXHJcbiAgICAgIGZvcm09e2Zvcm19XHJcbiAgICAgIG9uRmluaXNoPXtzdWJtaXR9XHJcbiAgICAgIGluaXRpYWxWYWx1ZXM9e1xyXG4gICAgICAgIHR5cGUgPT09IFwiYWRkXCJcclxuICAgICAgICAgID8ge1xyXG4gICAgICAgICAgICAgIG51bWJlcjogMCxcclxuICAgICAgICAgICAgICB0aXRsZTogXCJcIixcclxuICAgICAgICAgICAgICBib2R5OiBcIlwiLFxyXG4gICAgICAgICAgICAgIHN0YXR1czogXCJ0cnVlXCIsXHJcbiAgICAgICAgICAgICAgbG9jYXRpb25zOiBbXSxcclxuICAgICAgICAgICAgICBjaGFyYWN0ZXJzOiBbXSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgOiB7IC4uLmNoYXB0ZXIgfVxyXG4gICAgICB9XHJcbiAgICA+XHJcbiAgICAgIDxSb3cgZ3V0dGVyPXtbMjQsIDI0XX0+XHJcbiAgICAgICAgPENvbCBsZz17MTZ9IG1kPXsxNn0gc209ezI0fSB4cz17MjR9PlxyXG4gICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJBIHRpdGxlIGlzIHJlcXVpcmVkXCIsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgbmFtZT1cInRpdGxlXCJcclxuICAgICAgICAgICAgbGFiZWw9XCJUaXRsZVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPENvbCBsZz17NH0gbWQ9ezR9IHNtPXsyNH0geHM9ezI0fT5cclxuICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiQSBudW1iZXIgaXMgcmVxdWlyZWRcIixcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICBsYWJlbD1cIk51bWJlclwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SW5wdXROdW1iZXIgbWluPXsxfSAvPlxyXG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPFJhZGlvQnV0dG9uXHJcbiAgICAgICAgICBsZz17NH1cclxuICAgICAgICAgIG1kPXs0fVxyXG4gICAgICAgICAgeHM9ezI0fVxyXG4gICAgICAgICAgc209ezI0fVxyXG4gICAgICAgICAgbmFtZT1cInN0YXR1c1wiXHJcbiAgICAgICAgICBsYWJlbD1cIlN0YXR1c1wiXHJcbiAgICAgICAgICBudW0xPXsxfVxyXG4gICAgICAgICAgbnVtMj17Mn1cclxuICAgICAgICAgIGxhYmVsMT1cIlB1Ymxpc2hcIlxyXG4gICAgICAgICAgbGFiZWwyPVwiRHJhZnRcIlxyXG4gICAgICAgICAgZm9ybT17Zm9ybX1cclxuICAgICAgICAgIHNldEZ1bmM9e3NldFN0YXR1c31cclxuICAgICAgICAgIHZhbD17c3RhdHVzfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvUm93PlxyXG4gICAgICA8Rm9ybS5JdGVtIG5hbWU9XCJib2R5XCI+XHJcbiAgICAgICAgPEVkaXRvclxyXG4gICAgICAgICAgZWRpdG9yS2V5PVwiZWRpdG9yXCJcclxuICAgICAgICAgIGRlZmF1bHRFZGl0b3JTdGF0ZT17ZWRpdG9yU3RhdGV9XHJcbiAgICAgICAgICBlZGl0b3JTdGF0ZT17ZWRpdG9yU3RhdGV9XHJcbiAgICAgICAgICBvbkVkaXRvclN0YXRlQ2hhbmdlPXtvbkVkaXRvclN0YXRlQ2hhbmdlfVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJTdGFydCB3cml0aW5nIHlvdXIgc3RvcnkuLi5cIlxyXG4gICAgICAgICAgd3JhcHBlckNsYXNzTmFtZT1cIndyYXBwZXItY2xhc3NcIlxyXG4gICAgICAgICAgZWRpdG9yQ2xhc3NOYW1lPVwiZWRpdG9yLWNsYXNzXCJcclxuICAgICAgICAgIHRvb2xiYXJDbGFzc05hbWU9XCJ0b29sYmFyLWNsYXNzXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgPFJvdyBndXR0ZXI9ezI0fT5cclxuICAgICAgICA8Q29sIG1kPXsxMn0geHM9ezI0fSBzbT17MjR9PlxyXG4gICAgICAgICAgPEl0ZW1TZWxlY3RvclxyXG4gICAgICAgICAgICBsYWJlbD17XCJDaGFyYWN0ZXJzIGluIHRoaXMgY2hhcHRlclwifVxyXG4gICAgICAgICAgICBhcnJJbkZvcm09e1wiY2hhcmFjdGVyc1wifVxyXG4gICAgICAgICAgICBmb3JtPXtmb3JtfVxyXG4gICAgICAgICAgICB0eXBlPVwiY2hhcHRlclwiXHJcbiAgICAgICAgICAgIHN1YmplY3Q9e2NoYXJhY3RlcnN9XHJcbiAgICAgICAgICAgIGxnMT17MjR9XHJcbiAgICAgICAgICAgIHN1YmplY3RUeXBlPVwiY2hhcmFjdGVyc1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDxDb2wgbWQ9ezEyfSB4cz17MjR9IHNtPXsyNH0+XHJcbiAgICAgICAgICA8SXRlbVNlbGVjdG9yXHJcbiAgICAgICAgICAgIGxhYmVsPXtcIkxvY2F0aW9ucyBpbiB0aGlzIGNoYXB0ZXJcIn1cclxuICAgICAgICAgICAgYXJySW5Gb3JtPXtcImxvY2F0aW9uc1wifVxyXG4gICAgICAgICAgICBmb3JtPXtmb3JtfVxyXG4gICAgICAgICAgICB0eXBlPVwiY2hhcHRlclwiXHJcbiAgICAgICAgICAgIHN1YmplY3Q9e2xvY2F0aW9uc31cclxuICAgICAgICAgICAgbGcxPXsyNH1cclxuICAgICAgICAgICAgc3ViamVjdFR5cGU9XCJsb2NhdGlvbnNcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgPC9Sb3c+XHJcbiAgICAgIHt0eXBlID09PSBcImFkZFwiID8gKFxyXG4gICAgICAgIGxvYWRpbmdDaGFwdGVyID8gKFxyXG4gICAgICAgICAgPGJ1dHRvbiBkaXNhYmxlZCBjbGFzc05hbWU9XCJzcGluLWJ0blwiPlxyXG4gICAgICAgICAgICA8U3BpbiAvPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkNyZWF0ZTwvYnV0dG9uPlxyXG4gICAgICAgIClcclxuICAgICAgKSA6IGxvYWRpbmdDaGFwdGVyID8gKFxyXG4gICAgICAgIDxidXR0b24gZGlzYWJsZWQgY2xhc3NOYW1lPVwic3Bpbi1idG5cIj5cclxuICAgICAgICAgIDxTcGluIC8+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+RWRpdDwvYnV0dG9uPlxyXG4gICAgICApfVxyXG4gICAgPC9Gb3JtPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGFwdGVyRm9ybTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGb3JtLCBDb2wsIFJvdywgU2VsZWN0LCBEaXZpZGVyIH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmNvbnN0IHsgT3B0aW9uIH0gPSBTZWxlY3Q7XHJcblxyXG5jb25zdCBJdGVtU2VsZWN0b3IgPSAoe1xyXG4gIGl0ZW0sXHJcbiAgc3ViamVjdCxcclxuICBmb3JtLFxyXG4gIGFyckluRm9ybSxcclxuICBsYWJlbCxcclxuICB0eXBlLFxyXG4gIGxnMSxcclxuICBzdWJqZWN0VHlwZSxcclxufSkgPT4ge1xyXG4gIGNvbnN0IFtjdXJyZW50Q2hhciwgc2V0Q3VycmVudENoYXJdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2N1cnJlbnRMb2MsIHNldEN1cnJlbnRMb2NdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3NlbGVjdGVkU3ViamVjdHMsIHNldFNlbGVjdGVkU3ViamVjdHNdID0gUmVhY3QudXNlU3RhdGUoXHJcbiAgICBpdGVtID8gc3ViamVjdC5maWx0ZXIoKGMpID0+IGl0ZW0uaW5jbHVkZXMoYy5pZCkpIDogW11cclxuICApO1xyXG5cclxuICBjb25zdCBhZGRDaGFyYWN0ZXIgPSAoY3VycmVudCwgc2V0Q3VycmVudCkgPT4ge1xyXG4gICAgaWYgKHR5cGUgPT09IFwic3RvcnlcIiAmJiBmb3JtLmdldEZpZWxkVmFsdWUoYXJySW5Gb3JtKT8ubGVuZ3RoID09PSA1KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY3VycmVudCAmJiBmb3JtLmdldEZpZWxkVmFsdWUoYXJySW5Gb3JtKT8uaW5kZXhPZihjdXJyZW50KSA9PT0gLTEpIHtcclxuICAgICAgc2V0U2VsZWN0ZWRTdWJqZWN0cyhbXHJcbiAgICAgICAgLi4uc2VsZWN0ZWRTdWJqZWN0cyxcclxuICAgICAgICBzdWJqZWN0LmZpbmQoKGMpID0+IGMuaWQgPT09IGN1cnJlbnQpLFxyXG4gICAgICBdKTtcclxuICAgICAgZm9ybS5zZXRGaWVsZHNWYWx1ZSh7XHJcbiAgICAgICAgW2FyckluRm9ybV06IFsuLi5mb3JtLmdldEZpZWxkVmFsdWUoYXJySW5Gb3JtKSwgY3VycmVudF0sXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEN1cnJlbnQoXCJcIik7XHJcbiAgICBmb3JtLnNldEZpZWxkc1ZhbHVlKHsgW2N1cnJlbnRdOiBcIlwiIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbW92ZUNoYXJhY3RlciA9IChpZCkgPT4ge1xyXG4gICAgZm9ybS5zZXRGaWVsZHNWYWx1ZSh7XHJcbiAgICAgIFthcnJJbkZvcm1dOiBmb3JtLmdldEZpZWxkVmFsdWUoYXJySW5Gb3JtKS5maWx0ZXIoKGMpID0+IGMgIT09IGlkKSxcclxuICAgIH0pO1xyXG4gICAgc2V0U2VsZWN0ZWRTdWJqZWN0cyhzZWxlY3RlZFN1YmplY3RzLmZpbHRlcigoYykgPT4gYy5pZCAhPT0gaWQpKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm0uSXRlbSBuYW1lPXthcnJJbkZvcm19IGxhYmVsPXtsYWJlbH0+XHJcbiAgICAgIDxSb3cgZ3V0dGVyPXtbMjQsIDI0XX0+XHJcbiAgICAgICAgPENvbCBsZz17bGcxfSBtZD17MjR9IHNtPXsyNH0geHM9ezI0fT5cclxuICAgICAgICAgIDxSb3cgZ3V0dGVyPXsxNn0+XHJcbiAgICAgICAgICAgIDxDb2wgc3Bhbj17MjJ9PlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIG5hbWU9e1xyXG4gICAgICAgICAgICAgICAgICBzdWJqZWN0VHlwZSA9PT0gXCJjaGFyYWN0ZXJzXCIgPyBcImN1cnJlbnRDaGFyXCIgOiBcImN1cnJlbnRMb2NcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm0uZ2V0RmllbGRWYWx1ZShhcnJJbkZvcm0pPy5sZW5ndGggPj0gNSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPT09IFwic3RvcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPyB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICA6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWwpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgc3ViamVjdFR5cGUgPT09IFwiY2hhcmFjdGVyc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICA/IHNldEN1cnJlbnRDaGFyKHZhbClcclxuICAgICAgICAgICAgICAgICAgICAgIDogc2V0Q3VycmVudExvYyh2YWwpXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIm5vbmVcIiBkaXNhYmxlZD5cclxuICAgICAgICAgICAgICAgICAgICBDaG9vc2VcclxuICAgICAgICAgICAgICAgICAgPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIHtzdWJqZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihcclxuICAgICAgICAgICAgICAgICAgICAgIChjKSA9PiBmb3JtLmdldEZpZWxkVmFsdWUoYXJySW5Gb3JtKT8uaW5kZXhPZihjLmlkKSA9PT0gLTFcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgPy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXlBID0gYS5maXJzdG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleUIgPSBiLmZpcnN0bmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgIC8vIENvbXBhcmUgdGhlIDIgZGF0ZXNcclxuICAgICAgICAgICAgICAgICAgICAgIGlmIChrZXlBIDwga2V5QikgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGtleUEgPiBrZXlCKSByZXR1cm4gMTtcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLm1hcCgoY2hhcikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiBrZXk9e2NoYXIuaWR9IHZhbHVlPXtjaGFyLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3N1YmplY3RUeXBlID09PSBcImNoYXJhY3RlcnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gYCR7Y2hhci5maXJzdG5hbWV9ICR7Y2hhci5sYXN0bmFtZX1gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjaGFyLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPENvbCBzcGFuPXsyfT5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZWxlY3QtYWRkLWlucHV0LWljb25ib3hcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgc3ViamVjdFR5cGUgPT09IFwiY2hhcmFjdGVyc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgPyBhZGRDaGFyYWN0ZXIoY3VycmVudENoYXIsIHNldEN1cnJlbnRDaGFyKVxyXG4gICAgICAgICAgICAgICAgICAgIDogYWRkQ2hhcmFjdGVyKGN1cnJlbnRMb2MsIHNldEN1cnJlbnRMb2MpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+Kzwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIHt0eXBlID09PSBcInN0b3J5XCIgJiYgKFxyXG4gICAgICAgICAgICAgIDxzbWFsbD5Zb3UgY2FuIGFkZCB1cCB0byA1IG1haW4gY2hhcmFjdGVyczwvc21hbGw+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgICB7c3ViamVjdC5sZW5ndGggPiAwICYmIChcclxuICAgICAgICAgIDxDb2wgbGc9e2xnMX0gbWQ9ezI0fSBzbT17MjR9IHhzPXsyNH0+XHJcbiAgICAgICAgICAgIDxSb3cgZ3V0dGVyPXsxNn0+XHJcbiAgICAgICAgICAgICAge3N1YmplY3RcclxuICAgICAgICAgICAgICAgIC5maWx0ZXIoKGMpID0+IGZvcm0uZ2V0RmllbGRWYWx1ZShhcnJJbkZvcm0pLmluY2x1ZGVzKGMuaWQpKVxyXG4gICAgICAgICAgICAgICAgLm1hcCgoY2hhcikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8Q29sIG1kPXsxMn0gc209ezI0fSBrZXk9e2NoYXIuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtjaGFyLmlkfSBjbGFzc05hbWU9XCJtYWluLXNlbGVjdGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tYXZhdGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2NoYXIuaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YmplY3RUeXBlID09PSBcImNoYXJhY3RlcnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGNoYXIuZmlyc3RuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogY2hhci5uYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3N1YmplY3RUeXBlID09PSBcImNoYXJhY3RlcnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gYCR7Y2hhci5maXJzdG5hbWV9ICR7Y2hhci5sYXN0bmFtZX1gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjaGFyLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW9uLWljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcmVtb3ZlQ2hhcmFjdGVyKGNoYXIuaWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY2xvc2UtY2lyY2xlXCJcclxuICAgICAgICAgICAgICAgICAgICAgID48L2lvbi1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIHN0eWxlPXt7IG1hcmdpbjogXCIxNXB4IDBcIiB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvUm93PlxyXG4gICAgPC9Gb3JtLkl0ZW0+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEl0ZW1TZWxlY3RvcjtcclxuIiwiaW1wb3J0IHsgQ29sLCBTcGFjZSwgRm9ybSwgUmFkaW8gfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuY29uc3QgUmFkaW9CdXRvbiA9ICh7XHJcbiAgbGcsXHJcbiAgc20sXHJcbiAgeHMsXHJcbiAgbWQsXHJcbiAgbmFtZSxcclxuICBsYWJlbCxcclxuICBudW0xLFxyXG4gIG51bTIsXHJcbiAgbGFiZWwxLFxyXG4gIGxhYmVsMixcclxuICBmb3JtLFxyXG4gIHNldEZ1bmMsXHJcbiAgdmFsLFxyXG59KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb2wgbGc9e2xnfSBtZD17bWR9IHNtPXtzbX0geHM9e3hzfT5cclxuICAgICAgPEZvcm0uSXRlbSBuYW1lPXtuYW1lfSBsYWJlbD17bGFiZWx9PlxyXG4gICAgICAgIDxmaWVsZHNldCBpZD17bmFtZX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhZGlvXCI+XHJcbiAgICAgICAgICAgIDxSYWRpby5Hcm91cD5cclxuICAgICAgICAgICAgICA8U3BhY2Ugc2l6ZT17MzJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYWRpb19fMVwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICBpZD17YHJhZGlvLSR7bnVtMX1gfVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHNldEZ1bmModHJ1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dmFsID8gdHJ1ZSA6IGZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17YHJhZGlvLSR7bnVtMX1gfT48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8cD57bGFiZWwxfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYWRpb19fMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBpZD17YHJhZGlvLSR7bnVtMn1gfVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBzZXRGdW5jKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt2YWwgPyBmYWxzZSA6IHRydWV9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtgcmFkaW8tJHtudW0yfWB9PjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxwPntsYWJlbDJ9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9TcGFjZT5cclxuICAgICAgICAgICAgPC9SYWRpby5Hcm91cD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZmllbGRzZXQ+XHJcbiAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgPC9Db2w+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJhZGlvQnV0b247XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IExvYWRpbmdTY3JlZW4gPSAoeyBjaGlsZHJlbiwgbG9hZGluZyB9KSA9PiB7XHJcbiAgcmV0dXJuICFsb2FkaW5nID8gKFxyXG4gICAgY2hpbGRyZW5cclxuICApIDogKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkZXItY29udGFpbmVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGVyXCI+XHJcbiAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvYWRpbmdTY3JlZW47XHJcbiIsImltcG9ydCB7IFJlc3VsdCwgQnV0dG9uIH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmNvbnN0IFJlZGlyZWN0Q29tcCA9ICh7IGNvbmRpdGlvbiwgdHlwZSwgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIHJldHVybiBjb25kaXRpb24gPyAoXHJcbiAgICBjaGlsZHJlblxyXG4gICkgOiB0eXBlID09PSBcIjQwNFwiID8gKFxyXG4gICAgPFJlc3VsdFxyXG4gICAgICBzdGF0dXM9XCI0MDRcIlxyXG4gICAgICB0aXRsZT1cIjQwNFwiXHJcbiAgICAgIHN1YlRpdGxlPVwiU29ycnksIHRoZSBwYWdlIHlvdSB2aXNpdGVkIGRvZXMgbm90IGV4aXN0LlwiXHJcbiAgICAgIGV4dHJhPXs8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCI+QmFjayBIb21lPC9CdXR0b24+fVxyXG4gICAgLz5cclxuICApIDogdHlwZSA9PT0gXCI0MDNcIiA/IChcclxuICAgIDxSZXN1bHRcclxuICAgICAgc3RhdHVzPVwiNDAzXCJcclxuICAgICAgdGl0bGU9XCI0MDNcIlxyXG4gICAgICBzdWJUaXRsZT1cIlNvcnJ5LCB5b3UgYXJlIG5vdCBhdXRob3JpemVkIHRvIGFjY2VzcyB0aGlzIHBhZ2UuXCJcclxuICAgICAgZXh0cmE9ezxCdXR0b24gdHlwZT1cInByaW1hcnlcIj5CYWNrIEhvbWU8L0J1dHRvbj59XHJcbiAgICAvPlxyXG4gICkgOiB0eXBlID09PSBcInJlZGlyZWN0XCIgPyAoXHJcbiAgICAod2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9hdXRoXCIpXHJcbiAgKSA6IChcclxuICAgIDxkaXY+PC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZGlyZWN0Q29tcDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQsIGNyZWF0ZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcclxuaW1wb3J0IHsgYXV0aCwgZGIgfSBmcm9tIFwiLi4vcmVkdXgvZmJDb25maWdcIjtcclxuXHJcbmNvbnN0IGF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFByb3ZpZGVBdXRoKHsgY2hpbGRyZW4gfSkge1xyXG4gIGNvbnN0IGF1dGggPSB1c2VQcm92aWRlQXV0aCgpO1xyXG4gIHJldHVybiA8YXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2F1dGh9PntjaGlsZHJlbn08L2F1dGhDb250ZXh0LlByb3ZpZGVyPjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUF1dGggPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHVzZUNvbnRleHQoYXV0aENvbnRleHQpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gdXNlUHJvdmlkZUF1dGgoKSB7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICAvLyBXcmFwIGFueSBGaXJlYmFzZSBtZXRob2RzIHdlIHdhbnQgdG8gdXNlIG1ha2luZyBzdXJlIC4uLlxyXG4gIC8vIC4uLiB0byBzYXZlIHRoZSB1c2VyIHRvIHN0YXRlLlxyXG4gIGNvbnN0IHNpZ25pbiA9IChlbWFpbCwgcGFzc3dvcmQpID0+IHtcclxuICAgIHJldHVybiBhdXRoLnNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgc2V0VXNlcihyZXNwb25zZS51c2VyKTtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLnVzZXI7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzaWdudXAgPSAoZW1haWwsIHBhc3N3b3JkLCB1c2VybmFtZSkgPT4ge1xyXG4gICAgcmV0dXJuIGF1dGhcclxuICAgICAgLmNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHNldFVzZXIocmVzcG9uc2UudXNlcik7XHJcbiAgICAgICAgZGIuY29sbGVjdGlvbihcInVzZXJzXCIpLmFkZCh7XHJcbiAgICAgICAgICBiYWRnZXM6IFtdLFxyXG4gICAgICAgICAgYmlvZ3JhcGh5OiBcIlwiLFxyXG4gICAgICAgICAgY3JlYXRlZEF0OiBmaXJlYmFzZS5maXJlc3RvcmUuRmllbGRWYWx1ZS5zZXJ2ZXJUaW1lc3RhbXAoKSxcclxuICAgICAgICAgIHN1c3BlbmRlZDogZmFsc2UsXHJcbiAgICAgICAgICBmYWNlYm9vazogXCJcIixcclxuICAgICAgICAgIGluc3RhZ3JhbTogXCJcIixcclxuICAgICAgICAgIHR3aXR0ZXI6IFwiXCIsXHJcbiAgICAgICAgICBkZXZpYW50YXJ0OiBcIlwiLFxyXG4gICAgICAgICAgbGlrZXNDb3VudDogXCJcIixcclxuICAgICAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSxcclxuICAgICAgICAgIGltYWdlOiBcIlwiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZS51c2VyO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzaWdub3V0ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGF1dGguc2lnbk91dCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICBzZXRVc2VyKGZhbHNlKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNlbmRQYXNzd29yZFJlc2V0RW1haWwgPSAoZW1haWwpID0+IHtcclxuICAgIHJldHVybiBhdXRoLnNlbmRQYXNzd29yZFJlc2V0RW1haWwoZW1haWwpLnRoZW4oKCkgPT4ge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNvbmZpcm1QYXNzd29yZFJlc2V0ID0gKGNvZGUsIHBhc3N3b3JkKSA9PiB7XHJcbiAgICByZXR1cm4gYXV0aC5jb25maXJtUGFzc3dvcmRSZXNldChjb2RlLCBwYXNzd29yZCkudGhlbigoKSA9PiB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHVuc3Vic2NyaWJlID0gYXV0aC5vbkF1dGhTdGF0ZUNoYW5nZWQoKHVzZXIpID0+IHtcclxuICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICBzZXRVc2VyKHVzZXIpO1xyXG4gICAgICAgIGlmICh1c2VyLnVpZCkge1xyXG4gICAgICAgICAgbGV0IHVzZXJuYW1lID0gXCJcIjtcclxuICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICBkYi5jb2xsZWN0aW9uKFwidXNlcnNcIilcclxuICAgICAgICAgICAgLmRvYyh1c2VyLnVpZClcclxuICAgICAgICAgICAgLm9uU25hcHNob3QoKGRvYykgPT4ge1xyXG4gICAgICAgICAgICAgIHVzZXJuYW1lID0gZG9jLmRhdGEoKS51c2VybmFtZTtcclxuICAgICAgICAgICAgICBzZXRVc2VyKHsgLi4udXNlciwgdXNlcm5hbWUgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRVc2VyKGZhbHNlKTtcclxuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBDbGVhbnVwIHN1YnNjcmlwdGlvbiBvbiB1bm1vdW50XHJcbiAgICByZXR1cm4gKCkgPT4gdW5zdWJzY3JpYmUoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8vIFJldHVybiB0aGUgdXNlciBvYmplY3QgYW5kIGF1dGggbWV0aG9kc1xyXG4gIHJldHVybiB7XHJcbiAgICBpc0xvYWRpbmcsXHJcbiAgICB1c2VyLFxyXG4gICAgc2lnbmluLFxyXG4gICAgc2lnbnVwLFxyXG4gICAgc2lnbm91dCxcclxuICAgIHNlbmRQYXNzd29yZFJlc2V0RW1haWwsXHJcbiAgICBjb25maXJtUGFzc3dvcmRSZXNldCxcclxuICB9O1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBGb3JtLCBtZXNzYWdlIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL2hvb2tzL3VzZXJIb29rc1wiO1xyXG5pbXBvcnQge1xyXG4gIGdldENoYXB0ZXIsXHJcbiAgZWRpdENoYXB0ZXIsXHJcbiAgZ2V0VXNlckxvY2F0aW9ucyxcclxufSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vcmVkdXgvYWN0aW9ucy9zdG9yaWVzQWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBnZXRVc2VyQ2hhcmFjdGVycyB9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi9yZWR1eC9hY3Rpb25zL2NoYXJhY3RlcnNBY3Rpb25zXCI7XHJcblxyXG5pbXBvcnQgQ2hhcHRlckZvcm0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvZm9ybXMvQ2hhcHRlckZvcm1cIjtcclxuaW1wb3J0IExvYWRpbmdTY3JlZW4gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvaG9jL0xvYWRpbmdTY3JlZW5cIjtcclxuaW1wb3J0IFJlZGlyZWN0Q29tcCBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy9ob2MvUmVkaXJlY3RDb21wXCI7XHJcblxyXG5jb25zdCBFZGl0Q2hhcHRlciA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtmb3JtXSA9IEZvcm0udXNlRm9ybSgpO1xyXG4gIGNvbnN0IHtcclxuICAgIGNoYXJhY3RlcnMsXHJcbiAgICBsb2FkaW5nLFxyXG4gICAgbG9jYXRpb25zLFxyXG4gICAgbG9hZGluZ0NoYXB0ZXIsXHJcbiAgICBjaGFwdGVyLFxyXG4gICAgY2hhcHRlckV4aXN0cyxcclxuICAgIGVkaXRNZXNzYWdlLFxyXG4gIH0gPSBwcm9wcztcclxuICBjb25zdCBhdXRoID0gdXNlQXV0aCgpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFtib2R5LCBzZXRCb2R5XSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgcHJvcHMuZ2V0Q2hhcHRlcihyb3V0ZXIucXVlcnkuaWQsIHJvdXRlci5xdWVyeS5jaGFwaWQpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChlZGl0TWVzc2FnZSkge1xyXG4gICAgICBtZXNzYWdlLnN1Y2Nlc3MoZWRpdE1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH0sIFtlZGl0TWVzc2FnZV0pO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGF1dGgudXNlcikge1xyXG4gICAgICBwcm9wcy5nZXRVc2VyQ2hhcmFjdGVycyhhdXRoLnVzZXIudWlkKTtcclxuICAgICAgcHJvcHMuZ2V0VXNlckxvY2F0aW9ucyhhdXRoLnVzZXIudWlkKTtcclxuICAgIH1cclxuICB9LCBbYXV0aF0pO1xyXG5cclxuICBjb25zdCBzdWJtaXQgPSAodmFsdWVzKSA9PiB7XHJcbiAgICBkZWxldGUgdmFsdWVzLmN1cnJlbnRDaGFyO1xyXG4gICAgZGVsZXRlIHZhbHVlcy5jdXJyZW50TG9jO1xyXG5cclxuICAgIHByb3BzLmVkaXRDaGFwdGVyKFxyXG4gICAgICB7XHJcbiAgICAgICAgLi4udmFsdWVzLFxyXG4gICAgICAgIGJvZHksXHJcbiAgICAgICAgc3RhdHVzOiB2YWx1ZXMuc3RhdHVzID09PSBcInRydWVcIixcclxuICAgICAgfSxcclxuICAgICAgcm91dGVyLnF1ZXJ5LmlkLFxyXG4gICAgICByb3V0ZXIucXVlcnkuY2hhcGlkXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TG9hZGluZ1NjcmVlbiBsb2FkaW5nPXtsb2FkaW5nfT5cclxuICAgICAgPFJlZGlyZWN0Q29tcCB0eXBlPVwiNDA0XCIgY29uZGl0aW9uPXtjaGFwdGVyRXhpc3RzfT5cclxuICAgICAgICA8UmVkaXJlY3RDb21wXHJcbiAgICAgICAgICB0eXBlPVwiNDAzXCJcclxuICAgICAgICAgIGNvbmRpdGlvbj17YXV0aC51c2VyICYmIGF1dGgudXNlci51aWQgPT09IGNoYXB0ZXIuYXV0aG9ySWR9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXN0b20tZm9ybVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyXCI+XHJcbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInNpZGUtaGVhZGluZ1wiPkFkZCBhIG5ldyBjaGFwdGVyPC9oMj5cclxuICAgICAgICAgICAgICA8Q2hhcHRlckZvcm1cclxuICAgICAgICAgICAgICAgIHN1Ym1pdD17c3VibWl0fVxyXG4gICAgICAgICAgICAgICAgZm9ybT17Zm9ybX1cclxuICAgICAgICAgICAgICAgIGNoYXJhY3RlcnM9e2NoYXJhY3RlcnN9XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbnM9e2xvY2F0aW9uc31cclxuICAgICAgICAgICAgICAgIGJvZHk9e2JvZHl9XHJcbiAgICAgICAgICAgICAgICBzZXRCb2R5PXtzZXRCb2R5fVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImVkaXRcIlxyXG4gICAgICAgICAgICAgICAgbG9hZGluZ0NoYXB0ZXI9e2xvYWRpbmdDaGFwdGVyfVxyXG4gICAgICAgICAgICAgICAgbG9hZGluZz17bG9hZGluZ31cclxuICAgICAgICAgICAgICAgIGNoYXB0ZXI9e2NoYXB0ZXJ9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1JlZGlyZWN0Q29tcD5cclxuICAgICAgPC9SZWRpcmVjdENvbXA+XHJcbiAgICA8L0xvYWRpbmdTY3JlZW4+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcclxuICBjaGFwdGVyOiBzdGF0ZS5zdG9yaWVzLmNoYXB0ZXIsXHJcbiAgY2hhcmFjdGVyczogc3RhdGUuY2hhcmFjdGVycy51c2VyQ2hhcmFjdGVycyxcclxuICBsb2FkaW5nOiBzdGF0ZS5zdG9yaWVzLmxvYWRpbmcsXHJcbiAgbG9jYXRpb25zOiBzdGF0ZS5zdG9yaWVzLnVzZXJMb2NhdGlvbnMsXHJcbiAgbG9hZGluZ0NoYXB0ZXI6IHN0YXRlLnN0b3JpZXMubG9hZGluZ0NoYXB0ZXIsXHJcbiAgY2hhcHRlckV4aXN0czogc3RhdGUuc3Rvcmllcy5jaGFwdGVyRXhpc3RzLFxyXG4gIGVkaXRNZXNzYWdlOiBzdGF0ZS5zdG9yaWVzLm1lc3NhZ2UsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHtcclxuICBnZXRDaGFwdGVyLFxyXG4gIGdldFVzZXJDaGFyYWN0ZXJzLFxyXG4gIGdldFVzZXJMb2NhdGlvbnMsXHJcbiAgZWRpdENoYXB0ZXIsXHJcbn0pKEVkaXRDaGFwdGVyKTtcclxuIiwiaW1wb3J0IHtcclxuICBHRVRfVVNFUl9DSEFSQUNURVJTLFxyXG4gIEdFVF9GQVZPUklURV9DSEFSQUNURVJTLFxyXG4gIEFERF9DSEFSQUNURVIsXHJcbiAgRURJVF9DSEFSQUNURVIsXHJcbiAgR0VUX0NIQVJBQ1RFUixcclxufSBmcm9tIFwiLi4vLi4vdXRpbHMvY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IG1lc3NhZ2UgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyBkYiwgYXV0aCB9IGZyb20gXCIuLi9mYkNvbmZpZ1wiO1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlL2FwcFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldENoYXJhY3RlciA9IChpZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGIuY29sbGVjdGlvbihcImNoYXJhY3RlcnNcIilcclxuICAgIC5kb2MoaWQpXHJcbiAgICAuZ2V0KClcclxuICAgIC50aGVuKChkb2MpID0+IHtcclxuICAgICAgaWYgKGRvYy5leGlzdHMpIHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiBHRVRfQ0hBUkFDVEVSLFxyXG4gICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICBjaGFyYWN0ZXI6IHsgLi4uZG9jLmRhdGEoKSwgaWQ6IGRvYy5pZCB9LFxyXG4gICAgICAgICAgICBjaGFyYUV4aXN0czogdHJ1ZSxcclxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IEdFVF9DSEFSQUNURVIsXHJcbiAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgIGNoYXJhRXhpc3RzOiBmYWxzZSxcclxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRDaGFyYWN0ZXIgPSAoZGF0YSkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGlzcGF0Y2goeyB0eXBlOiBBRERfQ0hBUkFDVEVSLCBwYXlsb2FkOiB7IGxvYWRpbmc6IHRydWUgfSB9KTtcclxuICBjb25zdCBpbWFnZU5hbWUgPSBgJHtkYXRhLmZpcnN0bmFtZS50b0xvd2VyQ2FzZSgpfSR7ZGF0YS5sYXN0bmFtZSAmJiBcIl9cIn0ke1xyXG4gICAgZGF0YS5sYXN0bmFtZSAmJiBkYXRhLmxhc3RuYW1lLnRvTG93ZXJDYXNlKClcclxuICB9YDtcclxuICBpZiAodHlwZW9mIGRhdGEuaW1hZ2UgPT09IFwib2JqZWN0XCIpIHtcclxuICAgIHN0b3JhZ2VcclxuICAgICAgLnJlZihgJHthdXRoLmN1cnJlbnRVc2VyLnVpZH0vJHtpbWFnZU5hbWV9YClcclxuICAgICAgLnB1dChkYXRhLmltYWdlKVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHN0b3JhZ2VcclxuICAgICAgICAgIC5yZWYoYXV0aC5jdXJyZW50VXNlci51aWQpXHJcbiAgICAgICAgICAuY2hpbGQoaW1hZ2VOYW1lKVxyXG4gICAgICAgICAgLmdldERvd25sb2FkVVJMKCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKCh1cmwpID0+IHtcclxuICAgICAgICByZXR1cm4gZGIuY29sbGVjdGlvbihcImNoYXJhY3RlcnNcIikuYWRkKHtcclxuICAgICAgICAgIC4uLmRhdGEsXHJcbiAgICAgICAgICBpbWFnZTogdXJsLFxyXG4gICAgICAgICAgY3JlYXRlZEF0OiBmaXJlYmFzZS5maXJlc3RvcmUuRmllbGRWYWx1ZS5zZXJ2ZXJUaW1lc3RhbXAoKSxcclxuICAgICAgICAgIGxpa2VzQ291bnQ6IDAsXHJcbiAgICAgICAgICBsaWtlczogW10sXHJcbiAgICAgICAgICBkaXNsaWtlczogW10sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoXCJDaGFyYWN0ZXIgYWRkZWQgc3VjY2Vzc2Z1bGx5XCIpO1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IEFERF9DSEFSQUNURVIsXHJcbiAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiQ2hhcmFjdGVyIGFkZGVkIHN1Y2Nlc3NmdWxseVwiLFxyXG4gICAgICAgICAgICBjaGFyYWN0ZXJJZDogcmVzLmlkLFxyXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihlcnIubWVzc2FnZSk7XHJcbiAgICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBkYi5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc1wiKVxyXG4gICAgICAuYWRkKHtcclxuICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgIGNyZWF0ZWRBdDogZmlyZWJhc2UuZmlyZXN0b3JlLkZpZWxkVmFsdWUuc2VydmVyVGltZXN0YW1wKCksXHJcbiAgICAgICAgbGlrZXNDb3VudDogMCxcclxuICAgICAgICBsaWtlczogW10sXHJcbiAgICAgICAgZGlzbGlrZXM6IFtdLFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgbWVzc2FnZS5zdWNjZXNzKFwiQ2hhcmFjdGVyIGFkZGVkIHN1Y2Nlc3NmdWxseVwiKTtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiBBRERfQ0hBUkFDVEVSLFxyXG4gICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkNoYXJhY3RlciBhZGRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgICAgY2hhcmFjdGVySWQ6IHJlcy5pZCxcclxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoZXJyLm1lc3NhZ2UpO1xyXG4gICAgICB9KTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZWRpdENoYXJhY3RlciA9IChkYXRhLCBpZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGlzcGF0Y2goeyB0eXBlOiBFRElUX0NIQVJBQ1RFUiwgcGF5bG9hZDogeyBsb2FkaW5nQ2hhcmFjdGVyOiB0cnVlIH0gfSk7XHJcbiAgY29uc3QgaW1hZ2VOYW1lID0gYCR7ZGF0YS5maXJzdG5hbWUudG9Mb3dlckNhc2UoKX0ke2RhdGEubGFzdG5hbWUgJiYgXCJfXCJ9JHtcclxuICAgIGRhdGEubGFzdG5hbWUgJiYgZGF0YS5sYXN0bmFtZS50b0xvd2VyQ2FzZSgpXHJcbiAgfWA7XHJcbiAgaWYgKGRhdGEuaW1hZ2UgJiYgdHlwZW9mIGRhdGEuaW1hZ2UgPT09IFwib2JqZWN0XCIpIHtcclxuICAgIHN0b3JhZ2VcclxuICAgICAgLnJlZihgJHthdXRoLmN1cnJlbnRVc2VyLnVpZH0vJHtpbWFnZU5hbWV9YClcclxuICAgICAgLnB1dChkYXRhLmltYWdlKVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHN0b3JhZ2VcclxuICAgICAgICAgIC5yZWYoYXV0aC5jdXJyZW50VXNlci51aWQpXHJcbiAgICAgICAgICAuY2hpbGQoaW1hZ2VOYW1lKVxyXG4gICAgICAgICAgLmdldERvd25sb2FkVVJMKCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKCh1cmwpID0+IHtcclxuICAgICAgICByZXR1cm4gZGJcclxuICAgICAgICAgIC5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc1wiKVxyXG4gICAgICAgICAgLmRvYyhpZClcclxuICAgICAgICAgIC51cGRhdGUoe1xyXG4gICAgICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgICAgICBpbWFnZTogdXJsLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiBFRElUX0NIQVJBQ1RFUixcclxuICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJDaGFyYWN0ZXIgZWRpdGVkIHN1Y2Nlc3NmdWxseVwiLFxyXG4gICAgICAgICAgICBsb2FkaW5nQ2hhcmFjdGVyOiBmYWxzZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihlcnIubWVzc2FnZSk7XHJcbiAgICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBkYi5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc1wiKVxyXG4gICAgICAuZG9jKGlkKVxyXG4gICAgICAudXBkYXRlKHtcclxuICAgICAgICAuLi5kYXRhLFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogRURJVF9DSEFSQUNURVIsXHJcbiAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiQ2hhcmFjdGVyIGVkaXRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgICAgbG9hZGluZ0NoYXJhY3RlcjogZmFsc2UsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoZXJyLm1lc3NhZ2UpO1xyXG4gICAgICB9KTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VXNlckNoYXJhY3RlcnMgPSAodXNlcklkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkYi5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc1wiKVxyXG4gICAgLndoZXJlKFwiYXV0aG9ySWRcIiwgXCI9PVwiLCB1c2VySWQpXHJcbiAgICAuZ2V0KClcclxuICAgIC50aGVuKChkb2NzKSA9PiB7XHJcbiAgICAgIGxldCBpdGVtcyA9IFtdO1xyXG4gICAgICBkb2NzLmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgICAgIGl0ZW1zID0gWy4uLml0ZW1zLCB7IGlkOiBkb2MuaWQsIC4uLmRvYy5kYXRhKCkgfV07XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gaXRlbXM7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGl0ZW1zKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogR0VUX1VTRVJfQ0hBUkFDVEVSUywgcGF5bG9hZDogaXRlbXMgfSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRGYXZvcml0ZUNoYXJhY3RlcnMgPSAoKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkYi5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc0xpa2VzXCIpXHJcbiAgICAud2hlcmUoXCJzZW5kZXJJZFwiLCBcIj09XCIsIGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigoZG9jcykgPT4ge1xyXG4gICAgICBsZXQgZmF2QXJyID0gW107XHJcbiAgICAgIGRvY3MuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICAgICAgZmF2QXJyID0gWy4uLmZhdkFyciwgZG9jLmRhdGEoKS5jaGFyYWN0ZXJJZF07XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gZmF2QXJyO1xyXG4gICAgfSlcclxuICAgIC50aGVuKCh1c2VycykgPT4ge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSB1c2Vycy5tYXAoKHVzZXIpID0+XHJcbiAgICAgICAgZGIuY29sbGVjdGlvbihcImNoYXJhY3RlcnNcIikuZG9jKHVzZXIpLmdldCgpXHJcbiAgICAgICk7XHJcbiAgICAgIFByb21pc2UuYWxsKHJlc3VsdCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgbGV0IGZhdlVzZXJzID0gW107XHJcbiAgICAgICAgcmVzLmZvckVhY2goXHJcbiAgICAgICAgICAoZG9jKSA9PiAoZmF2VXNlcnMgPSBbLi4uZmF2VXNlcnMsIHsgaWQ6IGRvYy5pZCwgLi4uZG9jLmRhdGEoKSB9XSlcclxuICAgICAgICApO1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IEdFVF9GQVZPUklURV9DSEFSQUNURVJTLFxyXG4gICAgICAgICAgcGF5bG9hZDogZmF2VXNlcnMsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcbiIsImltcG9ydCB7XHJcbiAgR0VUX1VTRVJfU1RPUklFUyxcclxuICBHRVRfRkFWT1JJVEVfU1RPUklFUyxcclxuICBHRVRfVVNFUl9MT0NBVElPTlMsXHJcbiAgR0VUX1NUT1JZLFxyXG4gIEdFVF9DSEFQVEVSUyxcclxuICBBRERfU1RPUlksXHJcbiAgQUREX0NIQVBURVIsXHJcbiAgRURJVF9DSEFQVEVSLFxyXG4gIEdFVF9DSEFQVEVSLFxyXG4gIEVESVRfU1RPUlksXHJcbiAgRElTUEFUQ0hfRVJST1IsXHJcbn0gZnJvbSBcIi4uLy4uL3V0aWxzL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBkYiwgYXV0aCwgc3RvcmFnZSB9IGZyb20gXCIuLi9mYkNvbmZpZ1wiO1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlL2FwcFwiO1xyXG5pbXBvcnQgeyBtZXNzYWdlIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdG9yeSA9IChpZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGIuY29sbGVjdGlvbihcInN0b3JpZXNcIilcclxuICAgIC5kb2MoaWQpXHJcbiAgICAuZ2V0KClcclxuICAgIC50aGVuKChkb2MpID0+IHtcclxuICAgICAgaWYgKGRvYy5leGlzdHMpIHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiBHRVRfU1RPUlksXHJcbiAgICAgICAgICBzdG9yeUV4aXN0czogdHJ1ZSxcclxuICAgICAgICAgIHBheWxvYWQ6IHsgLi4uZG9jLmRhdGEoKSwgaWQ6IGRvYy5pZCB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IERJU1BBVENIX0VSUk9SLFxyXG4gICAgICAgICAgc3RvcnlFeGlzdHM6IGZhbHNlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFN0b3J5ID0gKGRhdGEpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRpc3BhdGNoKHsgdHlwZTogQUREX1NUT1JZLCBwYXlsb2FkOiB7IGxvYWRpbmc6IHRydWUgfSB9KTtcclxuICBjb25zdCBpbWFnZU5hbWUgPSBkYXRhLnRpdGxlLnRvTG93ZXJDYXNlKCkuc3BsaXQoXCIgXCIpLmpvaW4oXCJfXCIpO1xyXG4gIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gIGlmICh0eXBlb2YgZGF0YS5iYW5uZXIgPT09IFwib2JqZWN0XCIpIHtcclxuICAgIHN0b3JhZ2VcclxuICAgICAgLnJlZihgJHthdXRoLmN1cnJlbnRVc2VyLnVpZH0vJHtpbWFnZU5hbWV9YClcclxuICAgICAgLnB1dChkYXRhLmJhbm5lcilcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBzdG9yYWdlXHJcbiAgICAgICAgICAucmVmKGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gICAgICAgICAgLmNoaWxkKGltYWdlTmFtZSlcclxuICAgICAgICAgIC5nZXREb3dubG9hZFVSTCgpO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigodXJsKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpLmFkZCh7XHJcbiAgICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgICAgYXV0aG9ySWQ6IGF1dGguY3VycmVudFVzZXIudWlkLFxyXG4gICAgICAgICAgYXV0aG9yTmFtZTogZGF0YS5hdXRob3JOYW1lLFxyXG4gICAgICAgICAgb25lU2hvdDogZmFsc2UsXHJcbiAgICAgICAgICBiYW5uZXI6IHVybCxcclxuICAgICAgICAgIGNyZWF0ZWRBdDogZmlyZWJhc2UuZmlyZXN0b3JlLkZpZWxkVmFsdWUuc2VydmVyVGltZXN0YW1wKCksXHJcbiAgICAgICAgICBsaWtlc0NvdW50OiAwLFxyXG4gICAgICAgICAgY2hhcHRlcnNDb3VudDogMCxcclxuICAgICAgICAgIGxvY2F0aW9uc0NvdW50OiAwLFxyXG4gICAgICAgICAgc2Vjb25kYXJ5Q2hhcmFjdGVyczogW10sXHJcbiAgICAgICAgICBmZWF0dXJlZDogZmFsc2UsXHJcbiAgICAgICAgICBub3RlOiAwLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgbWVzc2FnZS5zdWNjZXNzKFwiU3RvcnkgYWRkZWQgc3VjY2Vzc2Z1bGx5XCIpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgUm91dGVyLnB1c2goYC9zdG9yeS8ke3Jlcy5pZH1gKTtcclxuICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogQUREX1NUT1JZLFxyXG4gICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgbWVzc2FnZTogXCJTdG9yeSBhZGRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgICAgICBzdG9yeUlkOiByZXMuaWQsXHJcbiAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBtZXNzYWdlLmVycm9yKGVyci5tZXNzYWdlKTtcclxuICAgICAgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpXHJcbiAgICAgIC5hZGQoe1xyXG4gICAgICAgIC4uLmRhdGEsXHJcbiAgICAgICAgYXV0aG9ySWQ6IGF1dGguY3VycmVudFVzZXIudWlkLFxyXG4gICAgICAgIGF1dGhvck5hbWU6IGRhdGEuYXV0aG9yTmFtZSxcclxuICAgICAgICBvbmVTaG90OiBmYWxzZSxcclxuICAgICAgICBjcmVhdGVkQXQ6IGZpcmViYXNlLmZpcmVzdG9yZS5GaWVsZFZhbHVlLnNlcnZlclRpbWVzdGFtcCgpLFxyXG4gICAgICAgIGxpa2VzQ291bnQ6IDAsXHJcbiAgICAgICAgY2hhcHRlcnNDb3VudDogMCxcclxuICAgICAgICBsb2NhdGlvbnNDb3VudDogMCxcclxuICAgICAgICBmZWF0dXJlZDogZmFsc2UsXHJcbiAgICAgICAgc2Vjb25kYXJ5Q2hhcmFjdGVyczogW10sXHJcbiAgICAgICAgbm90ZTogMCxcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhcIlN0b3J5IGFkZGVkIHN1Y2Nlc3NmdWxseVwiKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIFJvdXRlci5wdXNoKGAvc3RvcnkvJHtyZXMuaWR9YCk7XHJcbiAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9TVE9SWSxcclxuICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgIG1lc3NhZ2U6IFwiU3RvcnkgYWRkZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICAgICAgc3RvcnlJZDogcmVzLmlkLFxyXG4gICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihlcnIubWVzc2FnZSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBlZGl0U3RvcnkgPSAoZGF0YSwgc3RvcnlJZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGlzcGF0Y2goeyB0eXBlOiBFRElUX1NUT1JZLCBwYXlsb2FkOiB7IGxvYWRpbmdTdG9yeTogdHJ1ZSB9IH0pO1xyXG4gIGNvbnN0IGltYWdlTmFtZSA9IGRhdGEudGl0bGUudG9Mb3dlckNhc2UoKS5zcGxpdChcIiBcIikuam9pbihcIl9cIik7XHJcblxyXG4gIGlmICh0eXBlb2YgZGF0YS5iYW5uZXIgPT09IFwib2JqZWN0XCIpIHtcclxuICAgIHN0b3JhZ2VcclxuICAgICAgLnJlZihgJHthdXRoLmN1cnJlbnRVc2VyLnVpZH0vJHtpbWFnZU5hbWV9YClcclxuICAgICAgLnB1dChkYXRhLmJhbm5lcilcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBzdG9yYWdlXHJcbiAgICAgICAgICAucmVmKGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gICAgICAgICAgLmNoaWxkKGltYWdlTmFtZSlcclxuICAgICAgICAgIC5nZXREb3dubG9hZFVSTCgpO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigodXJsKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGRiXHJcbiAgICAgICAgICAuY29sbGVjdGlvbihcInN0b3JpZXNcIilcclxuICAgICAgICAgIC5kb2Moc3RvcnlJZClcclxuICAgICAgICAgIC51cGRhdGUoe1xyXG4gICAgICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgICAgICBiYW5uZXI6IHVybCxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgbWVzc2FnZS5zdWNjZXNzKFwiU3RvcnkgYWRkZWQgc3VjY2Vzc2Z1bGx5XCIpO1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IEVESVRfU1RPUlksXHJcbiAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiU3RvcnkgZWRpdGVkIHN1Y2Nlc3NmdWxseVwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBtZXNzYWdlLmVycm9yKGVyci5tZXNzYWdlKTtcclxuICAgICAgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpXHJcbiAgICAgIC5kb2Moc3RvcnlJZClcclxuICAgICAgLnVwZGF0ZSh7XHJcbiAgICAgICAgLi4uZGF0YSxcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhcIlN0b3J5IGFkZGVkIHN1Y2Nlc3NmdWxseVwiKTtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiBFRElUX1NUT1JZLFxyXG4gICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIlN0b3J5IGVkaXRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihlcnIubWVzc2FnZSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRDaGFwdGVyID0gKGRhdGEpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRpc3BhdGNoKHsgdHlwZTogQUREX0NIQVBURVIsIHBheWxvYWQ6IHsgbG9hZGluZzogdHJ1ZSB9IH0pO1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJjaGFwdGVyc1wiKVxyXG4gICAgLmFkZCh7XHJcbiAgICAgIC4uLmRhdGEsXHJcbiAgICAgIGF1dGhvcklkOiBhdXRoLmN1cnJlbnRVc2VyLnVpZCxcclxuICAgICAgY29tbWVudHNDb3VudDogMCxcclxuICAgICAgbm90ZTogMCxcclxuICAgICAgdm90ZXJzOiBbXSxcclxuICAgICAgdm90ZXNDb3VudDogMCxcclxuICAgICAgY3JlYXRlZEF0OiBmaXJlYmFzZS5maXJlc3RvcmUuRmllbGRWYWx1ZS5zZXJ2ZXJUaW1lc3RhbXAoKSxcclxuICAgIH0pXHJcbiAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpXHJcbiAgICAgICAgLmRvYyhkYXRhLnN0b3J5SWQpXHJcbiAgICAgICAgLmdldCgpXHJcbiAgICAgICAgLnRoZW4oKGRvYykgPT4ge1xyXG4gICAgICAgICAgY29uc3QgY2hhcmFjdGVycyA9IGRvYy5kYXRhKCkuc2Vjb25kYXJ5Q2hhcmFjdGVycztcclxuICAgICAgICAgIGNvbnN0IG1haW4gPSBkb2MuZGF0YSgpLm1haW5DaGFyYWN0ZXJzO1xyXG4gICAgICAgICAgZGIuY29sbGVjdGlvbihcInN0b3JpZXNcIilcclxuICAgICAgICAgICAgLmRvYyhkYXRhLnN0b3J5SWQpXHJcbiAgICAgICAgICAgIC51cGRhdGUoe1xyXG4gICAgICAgICAgICAgIHNlY29uZGFyeUNoYXJhY3RlcnM6IFtcclxuICAgICAgICAgICAgICAgIC4uLm5ldyBTZXQoW1xyXG4gICAgICAgICAgICAgICAgICAuLi5jaGFyYWN0ZXJzLFxyXG4gICAgICAgICAgICAgICAgICAuLi5kYXRhLmNoYXJhY3RlcnMuZmlsdGVyKChjKSA9PiAhbWFpbi5pbmNsdWRlcyhjKSksXHJcbiAgICAgICAgICAgICAgICBdKSxcclxuICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogQUREX0NIQVBURVIsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiQ2hhcHRlciBhZGRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgICAgICAgICAgY2hhcElkOiByZXMuaWQsXHJcbiAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAvLyAudGhlbigocmVzKSA9PiB7XHJcbiAgLy8gICBkaXNwYXRjaCh7XHJcbiAgLy8gICAgIHR5cGU6IEFERF9DSEFQVEVSLFxyXG4gIC8vICAgICBwYXlsb2FkOiB7XHJcbiAgLy8gICAgICAgbWVzc2FnZTogXCJDaGFwdGVyIGFkZGVkIHN1Y2Nlc3NmdWxseVwiLFxyXG4gIC8vICAgICAgIGNoYXBJZDogcmVzLmlkLFxyXG4gIC8vICAgICB9LFxyXG4gIC8vICAgfSk7XHJcbiAgLy8gfSlcclxuICAvLyAuY2F0Y2goKGVycikgPT5cclxuICAvLyAgIGRpc3BhdGNoKHtcclxuICAvLyAgICAgdHlwZTogQUREX0NIQVBURVIsXHJcbiAgLy8gICAgIHBheWxvYWQ6IHsgbWVzc2FnZTogZXJyLm1lc3NhZ2UsIGNoYXBJZDogXCJcIiB9LFxyXG4gIC8vICAgfSlcclxuICAvLyApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldENoYXB0ZXIgPSAoc3RvcnlJZCwgaWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpXHJcbiAgICAuZG9jKHN0b3J5SWQpXHJcbiAgICAuZ2V0KClcclxuICAgIC50aGVuKChkb2MpID0+IHtcclxuICAgICAgaWYgKGRvYy5leGlzdHMpIHtcclxuICAgICAgICBkYi5jb2xsZWN0aW9uKFwiY2hhcHRlcnNcIilcclxuICAgICAgICAgIC5kb2MoaWQpXHJcbiAgICAgICAgICAuZ2V0KClcclxuICAgICAgICAgIC50aGVuKChkb2MpID0+IHtcclxuICAgICAgICAgICAgaWYgKGRvYy5leGlzdHMpIHtcclxuICAgICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBHRVRfQ0hBUFRFUixcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAgICAgY2hhcHRlcjogeyAuLi5kb2MuZGF0YSgpLCBpZDogZG9jLmlkIH0sXHJcbiAgICAgICAgICAgICAgICAgIGNoYXB0ZXJFeGlzdHM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IEdFVF9DSEFQVEVSLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogeyBjaGFwdGVyRXhpc3RzOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiBHRVRfQ0hBUFRFUixcclxuICAgICAgICAgIHBheWxvYWQ6IHsgY2hhcHRlckV4aXN0czogZmFsc2UgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZWRpdENoYXB0ZXIgPSAoZGF0YSwgc3RvcnlJZCwgY2hhcGlkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkaXNwYXRjaCh7IHR5cGU6IEVESVRfQ0hBUFRFUiwgcGF5bG9hZDogeyBsb2FkaW5nOiB0cnVlIH0gfSk7XHJcbiAgZGIuY29sbGVjdGlvbihcImNoYXB0ZXJzXCIpXHJcbiAgICAuZG9jKGNoYXBpZClcclxuICAgIC51cGRhdGUoeyAuLi5kYXRhIH0pXHJcbiAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgIGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpXHJcbiAgICAgICAgLmRvYyhzdG9yeUlkKVxyXG4gICAgICAgIC5nZXQoKVxyXG4gICAgICAgIC50aGVuKChkb2MpID0+IHtcclxuICAgICAgICAgIGNvbnN0IGNoYXJhY3RlcnMgPSBkb2MuZGF0YSgpLnNlY29uZGFyeUNoYXJhY3RlcnM7XHJcbiAgICAgICAgICBjb25zdCBtYWluID0gZG9jLmRhdGEoKS5tYWluQ2hhcmFjdGVycztcclxuICAgICAgICAgIGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpXHJcbiAgICAgICAgICAgIC5kb2Moc3RvcnlJZClcclxuICAgICAgICAgICAgLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgc2Vjb25kYXJ5Q2hhcmFjdGVyczogZGF0YS5jaGFyYWN0ZXJzXHJcbiAgICAgICAgICAgICAgICA/IFtcclxuICAgICAgICAgICAgICAgICAgICAuLi5uZXcgU2V0KFtcclxuICAgICAgICAgICAgICAgICAgICAgIC4uLmNoYXJhY3RlcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAuLi5kYXRhLmNoYXJhY3RlcnMuZmlsdGVyKChjKSA9PiAhbWFpbi5pbmNsdWRlcyhjKSksXHJcbiAgICAgICAgICAgICAgICAgICAgXSksXHJcbiAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIDogY2hhcmFjdGVycyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IEVESVRfQ0hBUFRFUixcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJDaGFwdGVyIGVkaXRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldENoYXB0ZXJzID0gKGlkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkYi5jb2xsZWN0aW9uKFwiY2hhcHRlcnNcIilcclxuICAgIC53aGVyZShcInN0b3J5SWRcIiwgXCI9PVwiLCBpZClcclxuICAgIC5vcmRlckJ5KFwibnVtYmVyXCIsIFwiYXNjXCIpXHJcbiAgICAub25TbmFwc2hvdCgoZG9jcykgPT4ge1xyXG4gICAgICBsZXQgYXJyID0gW107XHJcbiAgICAgIGRvY3MuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICAgICAgYXJyLnB1c2goe1xyXG4gICAgICAgICAgYXV0aG9ySWQ6IGRvYy5kYXRhKCkuYXV0aG9ySWQsXHJcbiAgICAgICAgICBpZDogZG9jLmlkLFxyXG4gICAgICAgICAgY3JlYXRlZEF0OiBkb2MuZGF0YSgpLmNyZWF0ZWRBdCxcclxuICAgICAgICAgIG51bWJlcjogZG9jLmRhdGEoKS5udW1iZXIsXHJcbiAgICAgICAgICB0aXRsZTogZG9jLmRhdGEoKS50aXRsZSxcclxuICAgICAgICAgIGNvbW1lbnRzQ291bnQ6IGRvYy5kYXRhKCkuY29tbWVudHNDb3VudCxcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiBHRVRfQ0hBUFRFUlMsXHJcbiAgICAgICAgcGF5bG9hZDogYXJyLFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0b3J5Q2hhcmFjdGVycyA9IChpZCkgPT4gKGRpc3BhdGNoKSA9PiB7fTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyU3RvcmllcyA9ICgpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpXHJcbiAgICAud2hlcmUoXCJhdXRob3JJZFwiLCBcIj09XCIsIGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigoZG9jcykgPT4ge1xyXG4gICAgICBsZXQgaXRlbXMgPSBbXTtcclxuICAgICAgZG9jcy5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgICAgICBpdGVtcyA9IFsuLi5pdGVtcywgeyBpZDogZG9jLmlkLCAuLi5kb2MuZGF0YSgpIH1dO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGl0ZW1zO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChpdGVtcykgPT4ge1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IEdFVF9VU0VSX1NUT1JJRVMsIHBheWxvYWQ6IGl0ZW1zIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VXNlckxvY2F0aW9ucyA9ICgpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJsb2NhdGlvbnNcIilcclxuICAgIC53aGVyZShcImF1dGhvcklkXCIsIFwiPT1cIiwgYXV0aC5jdXJyZW50VXNlci51aWQpXHJcbiAgICAuZ2V0KClcclxuICAgIC50aGVuKChkb2NzKSA9PiB7XHJcbiAgICAgIGxldCBsb2NhdGlvbnMgPSBbXTtcclxuICAgICAgZG9jcy5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgICAgICBsb2NhdGlvbnMgPSBbLi4ubG9jYXRpb25zLCB7IGlkOiBkb2MuaWQsIC4uLmRvYy5kYXRhKCkgfV07XHJcbiAgICAgIH0pO1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogR0VUX1VTRVJfTE9DQVRJT05TLFxyXG4gICAgICAgIHBheWxvYWQ6IGxvY2F0aW9ucyxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRGYXZvcml0ZVN0b3JpZXMgPSAoKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc0xpa2VzXCIpXHJcbiAgICAud2hlcmUoXCJzZW5kZXJJZFwiLCBcIj09XCIsIGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigoZG9jcykgPT4ge1xyXG4gICAgICBsZXQgZmF2QXJyID0gW107XHJcbiAgICAgIGRvY3MuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICAgICAgZmF2QXJyID0gWy4uLmZhdkFyciwgZG9jLmRhdGEoKS5zdG9yeUlkXTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBmYXZBcnI7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKHVzZXJzKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHVzZXJzLm1hcCgodXNlcikgPT5cclxuICAgICAgICBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKS5kb2ModXNlcikuZ2V0KClcclxuICAgICAgKTtcclxuICAgICAgUHJvbWlzZS5hbGwocmVzdWx0KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBsZXQgZmF2VXNlcnMgPSBbXTtcclxuICAgICAgICByZXMuZm9yRWFjaChcclxuICAgICAgICAgIChkb2MpID0+IChmYXZVc2VycyA9IFsuLi5mYXZVc2VycywgeyBpZDogZG9jLmlkLCAuLi5kb2MuZGF0YSgpIH1dKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogR0VUX0ZBVk9SSVRFX1NUT1JJRVMsXHJcbiAgICAgICAgICBwYXlsb2FkOiBmYXZVc2VycyxcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuIiwiaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcclxuaW1wb3J0IFwiZmlyZWJhc2UvYXV0aFwiO1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcclxuaW1wb3J0IFwiZmlyZWJhc2Uvc3RvcmFnZVwiO1xyXG5cclxuY29uc3QgcHJvZENvbmZpZyA9IHtcclxuICBhcGlLZXk6IHByb2Nlc3MuZW52LkZJUkVCQVNFX0FQSV9LRVksXHJcbiAgYXV0aERvbWFpbjogcHJvY2Vzcy5lbnYuRklSRUJBU0VfQVVUSF9ET01BSU4sXHJcbiAgZGF0YWJhc2VVUkw6IHByb2Nlc3MuZW52LkZJUkVCQVNFX0RBVEFCQVNFX1VSTCxcclxuICBwcm9qZWN0SWQ6IHByb2Nlc3MuZW52LkZJUkVCQVNFX1BST0pFQ1RfSUQsXHJcbiAgc3RvcmFnZUJ1Y2tldDogcHJvY2Vzcy5lbnYuRklSRUJBU0VfU1RPUkFHRV9CVUNLRVQsXHJcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IHByb2Nlc3MuZW52LkZJUkVCQVNFX01FU1NBR0lOR19TRU5ERVJfSUQsXHJcbiAgYXBwSWQ6IHByb2Nlc3MuZW52LkZJUkVCQVNFX0FQUF9JRCxcclxufTtcclxuXHJcbmNvbnN0IGRldkNvbmZpZyA9IHtcclxuICBhcGlLZXk6IHByb2Nlc3MuZW52LkZJUkVCQVNFX0FQSV9LRVksXHJcbiAgYXV0aERvbWFpbjogcHJvY2Vzcy5lbnYuRklSRUJBU0VfQVVUSF9ET01BSU4sXHJcbiAgZGF0YWJhc2VVUkw6IHByb2Nlc3MuZW52LkZJUkVCQVNFX0RBVEFCQVNFX1VSTCxcclxuICBwcm9qZWN0SWQ6IHByb2Nlc3MuZW52LkZJUkVCQVNFX1BST0pFQ1RfSUQsXHJcbiAgc3RvcmFnZUJ1Y2tldDogcHJvY2Vzcy5lbnYuRklSRUJBU0VfU1RPUkFHRV9CVUNLRVQsXHJcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IHByb2Nlc3MuZW52LkZJUkVCQVNFX01FU1NBR0lOR19TRU5ERVJfSUQsXHJcbiAgYXBwSWQ6IHByb2Nlc3MuZW52LkZJUkVCQVNFX0FQUF9JRCxcclxufTtcclxuXHJcbmNvbnN0IGNvbmZpZyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IHByb2RDb25maWcgOiBkZXZDb25maWc7XHJcblxyXG5pZiAoIWZpcmViYXNlLmFwcHMubGVuZ3RoKSB7XHJcbiAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChjb25maWcpO1xyXG59XHJcblxyXG5jb25zdCBkYiA9IGZpcmViYXNlLmZpcmVzdG9yZSgpO1xyXG5jb25zdCBhdXRoID0gZmlyZWJhc2UuYXV0aCgpO1xyXG5jb25zdCBzdG9yYWdlID0gZmlyZWJhc2Uuc3RvcmFnZSgpO1xyXG5cclxuZXhwb3J0IHsgZGIsIGF1dGgsIHN0b3JhZ2UgfTtcclxuZXhwb3J0IGRlZmF1bHQgY29uZmlnO1xyXG4iLCJleHBvcnQgY29uc3QgQ0FURUdPUklFUyA9IFtcclxuICB7IG5hbWU6IFwiRHJhbWFcIiwgdmFsdWU6IFwiZHJhbWFcIiB9LFxyXG4gIHsgbmFtZTogXCJDb21lZHlcIiwgdmFsdWU6IFwiY29tZWR5XCIgfSxcclxuICB7IG5hbWU6IFwiSG9ycm9yXCIsIHZhbHVlOiBcImhvcnJvclwiIH0sXHJcbiAgeyBuYW1lOiBcIlJvbWFuY2VcIiwgdmFsdWU6IFwicm9tYW5jZVwiIH0sXHJcbiAgeyBuYW1lOiBcIlNjaS1maVwiLCB2YWx1ZTogXCJzY2ktZmlcIiB9LFxyXG4gIHsgbmFtZTogXCJGYW50YXN5XCIsIHZhbHVlOiBcImZhbnRhc3lcIiB9LFxyXG4gIHsgbmFtZTogXCJIdW1vclwiLCB2YWx1ZTogXCJodW1vclwiIH0sXHJcbiAgeyBuYW1lOiBcIkFjdGlvblwiLCB2YWx1ZTogXCJhY3Rpb25cIiB9LFxyXG4gIHsgbmFtZTogXCJUaHJpbGxlclwiLCB2YWx1ZTogXCJ0aHJpbGxlclwiIH0sXHJcbiAgeyBuYW1lOiBcIlN1cGVybmF0dXJhbFwiLCB2YWx1ZTogXCJzdXBlcm5hdHVyYWxcIiB9LFxyXG4gIHsgbmFtZTogXCJBZHZlbnR1cmVcIiwgdmFsdWU6IFwiYWR2ZW50dXJlXCIgfSxcclxuICB7IG5hbWU6IFwiTXlzdGVyeVwiLCB2YWx1ZTogXCJteXN0ZXJ5XCIgfSxcclxuICB7IG5hbWU6IFwiV2VzdGVyblwiLCB2YWx1ZTogXCJ3ZXN0ZXJuXCIgfSxcclxuICB7IG5hbWU6IFwiSGlzdG9yeVwiLCB2YWx1ZTogXCJoaXN0b3J5XCIgfSxcclxuICB7IG5hbWU6IFwiQ3JpbWVcIiwgdmFsdWU6IFwiY3JpbWVcIiB9LFxyXG4gIHsgbmFtZTogXCJGYW5maWN0aW9uXCIsIHZhbHVlOiBcImZhbmZpY3Rpb25cIiB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IENPUFlSSUdIVFMgPSBbXHJcbiAgeyBuYW1lOiBcIlB1YmxpYyBEb21haW5cIiwgdmFsdWU6IFwicHVibGljIGRvbWFpblwiIH0sXHJcbiAgeyBuYW1lOiBcIkFsbCBSaWdodHMgUmVzZXJ2ZWRcIiwgdmFsdWU6IFwiYWxsIHJpZ2h0cyByZXNlcnZlZFwiIH0sXHJcbiAgeyBuYW1lOiBcIkNyZWF0aXZlIENvbW1vbnNcIiwgdmFsdWU6IFwiY3JlYXRpdmUgY29tbW9uc1wiIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgTEFOR1VBR0VTID0gW1xyXG4gIHsgbmFtZTogXCJBZmFyXCIsIHZhbHVlOiBcImFhXCIgfSxcclxuICB7IG5hbWU6IFwiQWJraGF6aWFuXCIsIHZhbHVlOiBcImFiXCIgfSxcclxuICB7IG5hbWU6IFwiQXZlc3RhblwiLCB2YWx1ZTogXCJhZVwiIH0sXHJcbiAgeyBuYW1lOiBcIkFmcmlrYWFuc1wiLCB2YWx1ZTogXCJhZlwiIH0sXHJcbiAgeyBuYW1lOiBcIkFrYW5cIiwgdmFsdWU6IFwiYWtcIiB9LFxyXG4gIHsgbmFtZTogXCJBbWhhcmljXCIsIHZhbHVlOiBcImFtXCIgfSxcclxuICB7IG5hbWU6IFwiQXJhZ29uZXNlXCIsIHZhbHVlOiBcImFuXCIgfSxcclxuICB7IG5hbWU6IFwiQXJhYmljXCIsIHZhbHVlOiBcImFyXCIgfSxcclxuICB7IG5hbWU6IFwiQXNzYW1lc2VcIiwgdmFsdWU6IFwiYXNcIiB9LFxyXG4gIHsgbmFtZTogXCJBdmFyaWNcIiwgdmFsdWU6IFwiYXZcIiB9LFxyXG4gIHsgbmFtZTogXCJBeW1hcmFcIiwgdmFsdWU6IFwiYXlcIiB9LFxyXG4gIHsgbmFtZTogXCJBemVyYmFpamFuaVwiLCB2YWx1ZTogXCJhelwiIH0sXHJcbiAgeyBuYW1lOiBcIkJhc2hraXJcIiwgdmFsdWU6IFwiYmFcIiB9LFxyXG4gIHsgbmFtZTogXCJCZWxhcnVzaWFuXCIsIHZhbHVlOiBcImJlXCIgfSxcclxuICB7IG5hbWU6IFwiQnVsZ2FyaWFuXCIsIHZhbHVlOiBcImJnXCIgfSxcclxuICB7IG5hbWU6IFwiQmloYXJpXCIsIHZhbHVlOiBcImJoXCIgfSxcclxuICB7IG5hbWU6IFwiQmlzbGFtYVwiLCB2YWx1ZTogXCJiaVwiIH0sXHJcbiAgeyBuYW1lOiBcIkJhbWJhcmFcIiwgdmFsdWU6IFwiYm1cIiB9LFxyXG4gIHsgbmFtZTogXCJCZW5nYWxpXCIsIHZhbHVlOiBcImJuXCIgfSxcclxuICB7IG5hbWU6IFwiVGliZXRhblwiLCB2YWx1ZTogXCJib1wiIH0sXHJcbiAgeyBuYW1lOiBcIkJyZXRvblwiLCB2YWx1ZTogXCJiclwiIH0sXHJcbiAgeyBuYW1lOiBcIkJvc25pYW5cIiwgdmFsdWU6IFwiYnNcIiB9LFxyXG4gIHsgbmFtZTogXCJDYXRhbGFuXCIsIHZhbHVlOiBcImNhXCIgfSxcclxuICB7IG5hbWU6IFwiQ2hlY2hlblwiLCB2YWx1ZTogXCJjZVwiIH0sXHJcbiAgeyBuYW1lOiBcIkNoYW1vcnJvXCIsIHZhbHVlOiBcImNoXCIgfSxcclxuICB7IG5hbWU6IFwiQ29yc2ljYW5cIiwgdmFsdWU6IFwiY29cIiB9LFxyXG4gIHsgbmFtZTogXCJDcmVlXCIsIHZhbHVlOiBcImNyXCIgfSxcclxuICB7IG5hbWU6IFwiQ3plY2hcIiwgdmFsdWU6IFwiY3NcIiB9LFxyXG4gIHsgbmFtZTogXCJPbGQgQ2h1cmNoIFNsYXZvbmljXCIsIHZhbHVlOiBcImN1XCIgfSxcclxuICB7IG5hbWU6IFwiQ2h1dmFzaFwiLCB2YWx1ZTogXCJjdlwiIH0sXHJcbiAgeyBuYW1lOiBcIldlbHNoXCIsIHZhbHVlOiBcImN5XCIgfSxcclxuICB7IG5hbWU6IFwiRGFuaXNoXCIsIHZhbHVlOiBcImRhXCIgfSxcclxuICB7IG5hbWU6IFwiR2VybWFuXCIsIHZhbHVlOiBcImRlXCIgfSxcclxuICB7IG5hbWU6IFwiRGl2ZWhpXCIsIHZhbHVlOiBcImR2XCIgfSxcclxuICB7IG5hbWU6IFwiRHpvbmdraGFcdFwiLCB2YWx1ZTogXCJkelwiIH0sXHJcbiAgeyBuYW1lOiBcIkV3ZVwiLCB2YWx1ZTogXCJlZVwiIH0sXHJcbiAgeyBuYW1lOiBcIkdyZWVrXCIsIHZhbHVlOiBcImVsXCIgfSxcclxuICB7IG5hbWU6IFwiRW5nbGlzaFwiLCB2YWx1ZTogXCJlblwiIH0sXHJcbiAgeyBuYW1lOiBcIkVzcGVyYW50b1wiLCB2YWx1ZTogXCJlb1wiIH0sXHJcbiAgeyBuYW1lOiBcIlNwYW5pc2hcIiwgdmFsdWU6IFwiZXNcIiB9LFxyXG4gIHsgbmFtZTogXCJFc3RvbmlhblwiLCB2YWx1ZTogXCJldFwiIH0sXHJcbiAgeyBuYW1lOiBcIkJhc3F1ZVwiLCB2YWx1ZTogXCJldVwiIH0sXHJcbiAgeyBuYW1lOiBcIlBlcnNpYW5cIiwgdmFsdWU6IFwiZmFcIiB9LFxyXG4gIHsgbmFtZTogXCJGdWxhaFwiLCB2YWx1ZTogXCJmZlwiIH0sXHJcbiAgeyBuYW1lOiBcIkZpbm5pc2hcIiwgdmFsdWU6IFwiZmlcIiB9LFxyXG4gIHsgbmFtZTogXCJGaWppYW5cIiwgdmFsdWU6IFwiZmpcIiB9LFxyXG4gIHsgbmFtZTogXCJGYXJvZXNlXCIsIHZhbHVlOiBcImZvXCIgfSxcclxuICB7IG5hbWU6IFwiRnJlbmNoXCIsIHZhbHVlOiBcImZyXCIgfSxcclxuICB7IG5hbWU6IFwiV2VzdGVybiBGcmlzaWFuXCIsIHZhbHVlOiBcImZ5XCIgfSxcclxuICB7IG5hbWU6IFwiSXJpc2hcIiwgdmFsdWU6IFwiZ2FcIiB9LFxyXG4gIHsgbmFtZTogXCJTY290dGlzaCBHYWVsaWNcIiwgdmFsdWU6IFwiZ2RcIiB9LFxyXG4gIHsgbmFtZTogXCJHYWxpY2lhblwiLCB2YWx1ZTogXCJnbFwiIH0sXHJcbiAgeyBuYW1lOiBcIkd1YXJhbmlcIiwgdmFsdWU6IFwiZ25cIiB9LFxyXG4gIHsgbmFtZTogXCJHdWphcmF0aVwiLCB2YWx1ZTogXCJndVwiIH0sXHJcbiAgeyBuYW1lOiBcIk1hbnhcIiwgdmFsdWU6IFwiZ3ZcIiB9LFxyXG4gIHsgbmFtZTogXCJIYXVzYVwiLCB2YWx1ZTogXCJoYVwiIH0sXHJcbiAgeyBuYW1lOiBcIkhlYnJld1wiLCB2YWx1ZTogXCJoZVwiIH0sXHJcbiAgeyBuYW1lOiBcIkhpbmRpXCIsIHZhbHVlOiBcImhpXCIgfSxcclxuICB7IG5hbWU6IFwiSGlyaSBNb3R1XCIsIHZhbHVlOiBcImhvXCIgfSxcclxuICB7IG5hbWU6IFwiQ3JvYXRpYW5cIiwgdmFsdWU6IFwiaHJcIiB9LFxyXG4gIHsgbmFtZTogXCJIYWl0aWFuXCIsIHZhbHVlOiBcImh0XCIgfSxcclxuICB7IG5hbWU6IFwiSHVuZ2FyaWFuXCIsIHZhbHVlOiBcImh1XCIgfSxcclxuICB7IG5hbWU6IFwiQXJtZW5pYW5cIiwgdmFsdWU6IFwiaHlcIiB9LFxyXG4gIHsgbmFtZTogXCJIZXJlcm9cIiwgdmFsdWU6IFwiaHpcIiB9LFxyXG4gIHsgbmFtZTogXCJJbnRlcmxpbmd1YVwiLCB2YWx1ZTogXCJpYVwiIH0sXHJcbiAgeyBuYW1lOiBcIkluZG9uZXNpYW5cIiwgdmFsdWU6IFwiaWRcIiB9LFxyXG4gIHsgbmFtZTogXCJJbnRlcmxpbmd1ZVwiLCB2YWx1ZTogXCJpZVwiIH0sXHJcbiAgeyBuYW1lOiBcIklnYm9cIiwgdmFsdWU6IFwiaWdcIiB9LFxyXG4gIHsgbmFtZTogXCJTaWNodWFuIFlpXCIsIHZhbHVlOiBcImlpXCIgfSxcclxuICB7IG5hbWU6IFwiSW51cGlhcVwiLCB2YWx1ZTogXCJpa1wiIH0sXHJcbiAgeyBuYW1lOiBcIklkb1wiLCB2YWx1ZTogXCJpb1wiIH0sXHJcbiAgeyBuYW1lOiBcIkljZWxhbmRpY1wiLCB2YWx1ZTogXCJpc1wiIH0sXHJcbiAgeyBuYW1lOiBcIkl0YWxpYW5cIiwgdmFsdWU6IFwiaXRcIiB9LFxyXG4gIHsgbmFtZTogXCJJbnVrdGl0dXRcIiwgdmFsdWU6IFwiaXVcIiB9LFxyXG4gIHsgbmFtZTogXCJKYXBhbmVzZVwiLCB2YWx1ZTogXCJqYVwiIH0sXHJcbiAgeyBuYW1lOiBcIkphdmFuZXNlXCIsIHZhbHVlOiBcImp2XCIgfSxcclxuICB7IG5hbWU6IFwiR2VvcmdpYW5cIiwgdmFsdWU6IFwia2FcIiB9LFxyXG4gIHsgbmFtZTogXCJLb25nb1wiLCB2YWx1ZTogXCJrZ1wiIH0sXHJcbiAgeyBuYW1lOiBcIktpa3V5dVwiLCB2YWx1ZTogXCJraVwiIH0sXHJcbiAgeyBuYW1lOiBcIkt3YW55YW1hXCIsIHZhbHVlOiBcImtqXCIgfSxcclxuICB7IG5hbWU6IFwiS2F6YWtoXCIsIHZhbHVlOiBcImtrXCIgfSxcclxuICB7IG5hbWU6IFwiR3JlZW5sYW5kaWNcIiwgdmFsdWU6IFwia2xcIiB9LFxyXG4gIHsgbmFtZTogXCJLaG1lclwiLCB2YWx1ZTogXCJrbVwiIH0sXHJcbiAgeyBuYW1lOiBcIkthbm5hZGFcIiwgdmFsdWU6IFwia25cIiB9LFxyXG4gIHsgbmFtZTogXCJLb3JlYW5cIiwgdmFsdWU6IFwia29cIiB9LFxyXG4gIHsgbmFtZTogXCJLYW51cmlcIiwgdmFsdWU6IFwia3JcIiB9LFxyXG4gIHsgbmFtZTogXCJLYXNobWlyaVwiLCB2YWx1ZTogXCJrc1wiIH0sXHJcbiAgeyBuYW1lOiBcIkt1cmRpc2hcIiwgdmFsdWU6IFwia3VcIiB9LFxyXG4gIHsgbmFtZTogXCJLb21pXCIsIHZhbHVlOiBcImt2XCIgfSxcclxuICB7IG5hbWU6IFwiQ29ybmlzaFwiLCB2YWx1ZTogXCJrd1wiIH0sXHJcbiAgeyBuYW1lOiBcIktpcmdoaXpcIiwgdmFsdWU6IFwia3lcIiB9LFxyXG4gIHsgbmFtZTogXCJMYXRpblwiLCB2YWx1ZTogXCJsYVwiIH0sXHJcbiAgeyBuYW1lOiBcIkx1eGVtYm91cmdpc2hcIiwgdmFsdWU6IFwibGJcIiB9LFxyXG4gIHsgbmFtZTogXCJHYW5kYVwiLCB2YWx1ZTogXCJsZ1wiIH0sXHJcbiAgeyBuYW1lOiBcIkxpbWJ1cmdpc2hcIiwgdmFsdWU6IFwibGlcIiB9LFxyXG4gIHsgbmFtZTogXCJMaW5nYWxhXCIsIHZhbHVlOiBcImxuXCIgfSxcclxuICB7IG5hbWU6IFwiTGFvXCIsIHZhbHVlOiBcImxvXCIgfSxcclxuICB7IG5hbWU6IFwiTGl0aHVhbmlhblwiLCB2YWx1ZTogXCJsdFwiIH0sXHJcbiAgeyBuYW1lOiBcIkx1YmFcIiwgdmFsdWU6IFwibHVcIiB9LFxyXG4gIHsgbmFtZTogXCJMYXR2aWFuXCIsIHZhbHVlOiBcImx2XCIgfSxcclxuICB7IG5hbWU6IFwiTWFsYWdhc3lcIiwgdmFsdWU6IFwibWdcIiB9LFxyXG4gIHsgbmFtZTogXCJNYXJzaGFsbGVzZVwiLCB2YWx1ZTogXCJtaFwiIH0sXHJcbiAgeyBuYW1lOiBcIk3EgW9yaVwiLCB2YWx1ZTogXCJtaVwiIH0sXHJcbiAgeyBuYW1lOiBcIk1hY2Vkb25pYW5cIiwgdmFsdWU6IFwibWtcIiB9LFxyXG4gIHsgbmFtZTogXCJNYWxheWFsYW1cIiwgdmFsdWU6IFwibWxcIiB9LFxyXG4gIHsgbmFtZTogXCJNb25nb2xpYW5cIiwgdmFsdWU6IFwibW5cIiB9LFxyXG4gIHsgbmFtZTogXCJNb2xkYXZpYW5cIiwgdmFsdWU6IFwibW9cIiB9LFxyXG4gIHsgbmFtZTogXCJNYXJhdGhpXCIsIHZhbHVlOiBcIm1yXCIgfSxcclxuICB7IG5hbWU6IFwiTWFsYXlcIiwgdmFsdWU6IFwibXNcIiB9LFxyXG4gIHsgbmFtZTogXCJNYWx0ZXNlXCIsIHZhbHVlOiBcIm10XCIgfSxcclxuICB7IG5hbWU6IFwiQnVybWVzZVwiLCB2YWx1ZTogXCJteVwiIH0sXHJcbiAgeyBuYW1lOiBcIk5hdXJ1XCIsIHZhbHVlOiBcIm5hXCIgfSxcclxuICB7IG5hbWU6IFwiTm9yd2VnaWFuIEJva23DpWxcIiwgdmFsdWU6IFwibmJcIiB9LFxyXG4gIHsgbmFtZTogXCJOb3J0aCBOZGViZWxlXCIsIHZhbHVlOiBcIm5kXCIgfSxcclxuICB7IG5hbWU6IFwiTmVwYWxpXCIsIHZhbHVlOiBcIm5lXCIgfSxcclxuICB7IG5hbWU6IFwiTmRvbmdhXCIsIHZhbHVlOiBcIm5nXCIgfSxcclxuICB7IG5hbWU6IFwiRHV0Y2hcIiwgdmFsdWU6IFwibmxcIiB9LFxyXG4gIHsgbmFtZTogXCJOb3J3ZWdpYW4gTnlub3Jza1wiLCB2YWx1ZTogXCJublwiIH0sXHJcbiAgeyBuYW1lOiBcIk5vcndlZ2lhblwiLCB2YWx1ZTogXCJub1wiIH0sXHJcbiAgeyBuYW1lOiBcIlNvdXRoIE5kZWJlbGVcIiwgdmFsdWU6IFwibnJcIiB9LFxyXG4gIHsgbmFtZTogXCJOYXZham9cIiwgdmFsdWU6IFwibnZcIiB9LFxyXG4gIHsgbmFtZTogXCJDaGljaGV3YVwiLCB2YWx1ZTogXCJueVwiIH0sXHJcbiAgeyBuYW1lOiBcIk9jY2l0YW5cIiwgdmFsdWU6IFwib2NcIiB9LFxyXG4gIHsgbmFtZTogXCJPamlid2FcIiwgdmFsdWU6IFwib2pcIiB9LFxyXG4gIHsgbmFtZTogXCJPcm9tb1wiLCB2YWx1ZTogXCJvbVwiIH0sXHJcbiAgeyBuYW1lOiBcIk9yaXlhXCIsIHZhbHVlOiBcIm9yXCIgfSxcclxuICB7IG5hbWU6IFwiT3NzZXRpYW5cIiwgdmFsdWU6IFwib3NcIiB9LFxyXG4gIHsgbmFtZTogXCJQYW5qYWJpXCIsIHZhbHVlOiBcInBhXCIgfSxcclxuICB7IG5hbWU6IFwiUMSBbGlcIiwgdmFsdWU6IFwicGlcIiB9LFxyXG4gIHsgbmFtZTogXCJQb2xpc2hcIiwgdmFsdWU6IFwicGxcIiB9LFxyXG4gIHsgbmFtZTogXCJQYXNodG9cIiwgdmFsdWU6IFwicHNcIiB9LFxyXG4gIHsgbmFtZTogXCJQb3J0dWd1ZXNlXCIsIHZhbHVlOiBcInB0XCIgfSxcclxuICB7IG5hbWU6IFwiUXVlY2h1YVwiLCB2YWx1ZTogXCJxdVwiIH0sXHJcbiAgeyBuYW1lOiBcIlJldW5pb25lc2VcIiwgdmFsdWU6IFwicmNcIiB9LFxyXG4gIHsgbmFtZTogXCJSb21hbnNoXCIsIHZhbHVlOiBcInJtXCIgfSxcclxuICB7IG5hbWU6IFwiS2lydW5kaVwiLCB2YWx1ZTogXCJyblwiIH0sXHJcbiAgeyBuYW1lOiBcIlJvbWFuaWFuXCIsIHZhbHVlOiBcInJvXCIgfSxcclxuICB7IG5hbWU6IFwiUnVzc2lhblwiLCB2YWx1ZTogXCJydVwiIH0sXHJcbiAgeyBuYW1lOiBcIktpbnlhcndhbmRhXCIsIHZhbHVlOiBcInJ3XCIgfSxcclxuICB7IG5hbWU6IFwiU2Fuc2tyaXRcIiwgdmFsdWU6IFwic2FcIiB9LFxyXG4gIHsgbmFtZTogXCJTYXJkaW5pYW5cIiwgdmFsdWU6IFwic2NcIiB9LFxyXG4gIHsgbmFtZTogXCJTaW5kaGlcIiwgdmFsdWU6IFwic2RcIiB9LFxyXG4gIHsgbmFtZTogXCJOb3J0aGVybiBTYW1pXCIsIHZhbHVlOiBcInNlXCIgfSxcclxuICB7IG5hbWU6IFwiU2FuZ29cIiwgdmFsdWU6IFwic2dcIiB9LFxyXG4gIHsgbmFtZTogXCJTZXJiby1Dcm9hdGlhblwiLCB2YWx1ZTogXCJzaFwiIH0sXHJcbiAgeyBuYW1lOiBcIlNpbmhhbGVzZVwiLCB2YWx1ZTogXCJzaVwiIH0sXHJcbiAgeyBuYW1lOiBcIlNsb3Zha1wiLCB2YWx1ZTogXCJza1wiIH0sXHJcbiAgeyBuYW1lOiBcIlNsb3ZlbmlhblwiLCB2YWx1ZTogXCJzbFwiIH0sXHJcbiAgeyBuYW1lOiBcIlNhbW9hblwiLCB2YWx1ZTogXCJzbVwiIH0sXHJcbiAgeyBuYW1lOiBcIlNob25hXCIsIHZhbHVlOiBcInNuXCIgfSxcclxuICB7IG5hbWU6IFwiU29tYWxpXCIsIHZhbHVlOiBcInNvXCIgfSxcclxuICB7IG5hbWU6IFwiQWxiYW5pYW5cIiwgdmFsdWU6IFwic3FcIiB9LFxyXG4gIHsgbmFtZTogXCJTZXJiaWFuXCIsIHZhbHVlOiBcInNyXCIgfSxcclxuICB7IG5hbWU6IFwiU3dhdGlcIiwgdmFsdWU6IFwic3NcIiB9LFxyXG4gIHsgbmFtZTogXCJTb3Rob1wiLCB2YWx1ZTogXCJzdFwiIH0sXHJcbiAgeyBuYW1lOiBcIlN1bmRhbmVzZVwiLCB2YWx1ZTogXCJzdVwiIH0sXHJcbiAgeyBuYW1lOiBcIlN3ZWRpc2hcIiwgdmFsdWU6IFwic3ZcIiB9LFxyXG4gIHsgbmFtZTogXCJTd2FoaWxpXCIsIHZhbHVlOiBcInN3XCIgfSxcclxuICB7IG5hbWU6IFwiVGFtaWxcIiwgdmFsdWU6IFwidGFcIiB9LFxyXG4gIHsgbmFtZTogXCJUZWx1Z3VcIiwgdmFsdWU6IFwidGVcIiB9LFxyXG4gIHsgbmFtZTogXCJUYWppa1wiLCB2YWx1ZTogXCJ0Z1wiIH0sXHJcbiAgeyBuYW1lOiBcIlRoYWlcIiwgdmFsdWU6IFwidGhcIiB9LFxyXG4gIHsgbmFtZTogXCJUaWdyaW55YVwiLCB2YWx1ZTogXCJ0aVwiIH0sXHJcbiAgeyBuYW1lOiBcIlR1cmttZW5cIiwgdmFsdWU6IFwidGtcIiB9LFxyXG4gIHsgbmFtZTogXCJUYWdhbG9nXCIsIHZhbHVlOiBcInRsXCIgfSxcclxuICB7IG5hbWU6IFwiVHN3YW5hXCIsIHZhbHVlOiBcInRuXCIgfSxcclxuICB7IG5hbWU6IFwiVG9uZ2FcIiwgdmFsdWU6IFwidG9cIiB9LFxyXG4gIHsgbmFtZTogXCJUdXJraXNoXCIsIHZhbHVlOiBcInRyXCIgfSxcclxuICB7IG5hbWU6IFwiVHNvbmdhXCIsIHZhbHVlOiBcInRzXCIgfSxcclxuICB7IG5hbWU6IFwiVGF0YXJcIiwgdmFsdWU6IFwidHRcIiB9LFxyXG4gIHsgbmFtZTogXCJUd2lcIiwgdmFsdWU6IFwidHdcIiB9LFxyXG4gIHsgbmFtZTogXCJUYWhpdGlhblwiLCB2YWx1ZTogXCJ0eVwiIH0sXHJcbiAgeyBuYW1lOiBcIlVpZ2h1clwiLCB2YWx1ZTogXCJ1Z1wiIH0sXHJcbiAgeyBuYW1lOiBcIlVrcmFpbmlhblwiLCB2YWx1ZTogXCJ1a1wiIH0sXHJcbiAgeyBuYW1lOiBcIlVyZHVcIiwgdmFsdWU6IFwidXJcIiB9LFxyXG4gIHsgbmFtZTogXCJVemJla1wiLCB2YWx1ZTogXCJ1elwiIH0sXHJcbiAgeyBuYW1lOiBcIlZlbmRhXCIsIHZhbHVlOiBcInZlXCIgfSxcclxuICB7IG5hbWU6IFwiVmnDqnQgTmFtZXNlXCIsIHZhbHVlOiBcInZpXCIgfSxcclxuICB7IG5hbWU6IFwiVm9sYXDDvGtcIiwgdmFsdWU6IFwidm9cIiB9LFxyXG4gIHsgbmFtZTogXCJXYWxsb29uXCIsIHZhbHVlOiBcIndhXCIgfSxcclxuICB7IG5hbWU6IFwiV29sb2ZcIiwgdmFsdWU6IFwid29cIiB9LFxyXG4gIHsgbmFtZTogXCJYaG9zYVwiLCB2YWx1ZTogXCJ4aFwiIH0sXHJcbiAgeyBuYW1lOiBcIllpZGRpc2hcIiwgdmFsdWU6IFwieWlcIiB9LFxyXG4gIHsgbmFtZTogXCJZb3J1YmFcIiwgdmFsdWU6IFwieW9cIiB9LFxyXG4gIHsgbmFtZTogXCJaaHVhbmdcIiwgdmFsdWU6IFwiemFcIiB9LFxyXG4gIHsgbmFtZTogXCJDaGluZXNlXCIsIHZhbHVlOiBcInpoXCIgfSxcclxuICB7IG5hbWU6IFwiWnVsdVwiLCB2YWx1ZTogXCJ6dVwiIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgU1RBVFVTID0gW1xyXG4gIHsgbmFtZTogXCJJbiBQcm9ncmVzc1wiLCB2YWx1ZTogXCJpbiBwcm9ncmVzc1wiIH0sXHJcbiAgeyBuYW1lOiBcIkluIEhpYXR1c1wiLCB2YWx1ZTogXCJpbiBoaWF0dXNcIiB9LFxyXG4gIHsgbmFtZTogXCJDb21wbGV0ZWRcIiwgdmFsdWU6IFwiY29tcGxldGVkXCIgfSxcclxuXTtcclxuXHJcbi8vIFRZUEVTXHJcbmV4cG9ydCBjb25zdCBHRVRfUFJPRklMRSA9IFwiR0VUX1BST0ZJTEVcIjtcclxuZXhwb3J0IGNvbnN0IExPR0lOID0gXCJMT0dJTlwiO1xyXG5leHBvcnQgY29uc3QgUkVHSVNURVIgPSBcIlJFR0lTVEVSXCI7XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX1NUT1JZID0gXCJHRVRfU1RPUllcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9VU0VSX1NUT1JJRVMgPSBcIkdFVF9VU0VSX1NUT1JJRVNcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9GQVZPUklURV9TVE9SSUVTID0gXCJHRVRfRkFWT1JJVEVfU1RPUklFU1wiO1xyXG5leHBvcnQgY29uc3QgQUREX1NUT1JZID0gXCJBRERfU1RPUllcIjtcclxuZXhwb3J0IGNvbnN0IEVESVRfU1RPUlkgPSBcIkVESVRfU1RPUllcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfQ0hBUFRFUiA9IFwiR0VUX0NIQVBURVJcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9DSEFQVEVSID0gXCJBRERfQ0hBUFRFUlwiO1xyXG5leHBvcnQgY29uc3QgRURJVF9DSEFQVEVSID0gXCJFRElUX0NIQVBURVJcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9DSEFQVEVSUyA9IFwiR0VUX0NIQVBURVJTXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX0NIQVJBQ1RFUiA9IFwiQUREX0NIQVJBQ1RFUlwiO1xyXG5leHBvcnQgY29uc3QgR0VUX0NIQVJBQ1RFUiA9IFwiR0VUX0NIQVJBQ1RFUlwiO1xyXG5leHBvcnQgY29uc3QgRURJVF9DSEFSQUNURVIgPSBcIkVESVRfQ0hBUkFDVEVSXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfVVNFUl9DSEFSQUNURVJTID0gXCJHRVRfVVNFUl9DSEFSQUNURVJTXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfVVNFUl9MT0NBVElPTlMgPSBcIkdFVF9VU0VSX0xPQ0FUSU9OU1wiO1xyXG5leHBvcnQgY29uc3QgR0VUX0ZBVk9SSVRFX0NIQVJBQ1RFUlMgPSBcIkdFVF9GQVZPUklURV9DSEFSQUNURVJTXCI7XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX0ZBVk9SSVRFX0FVVEhPUlMgPSBcIkdFVF9GQVZPUklURV9BVVRIT1JTXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfRk9MTE9XRVJTID0gXCJHRVRfRk9MTE9XRVJTXCI7XHJcblxyXG5leHBvcnQgY29uc3QgRElTUEFUQ0hfRVJST1IgPSBcIkRJU1BBVENIX0VSUk9SXCI7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZHJhZnQtY29udmVydFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkcmFmdC1qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9hcHBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvYXV0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9maXJlc3RvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2Uvc3RvcmFnZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2R5bmFtaWNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZHJhZnQtd3lzaXd5Z1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9