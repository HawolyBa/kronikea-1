webpackHotUpdate_N_E("pages/story/new",{

/***/ "./pages/story/new.js":
/*!****************************!*\
  !*** ./pages/story/new.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/constants */ "./utils/constants.js");
/* harmony import */ var _hooks_userHooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/userHooks */ "./hooks/userHooks.js");
/* harmony import */ var _redux_actions_charactersActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../redux/actions/charactersActions */ "./redux/actions/charactersActions.js");
/* harmony import */ var _components_common_Input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/common/Input */ "./components/common/Input.js");
/* harmony import */ var _components_common_Select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/common/Select */ "./components/common/Select.js");
/* harmony import */ var _components_forms_Tags__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/forms/Tags */ "./components/forms/Tags.js");
/* harmony import */ var _components_forms_UploadImage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/forms/UploadImage */ "./components/forms/UploadImage.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");




var _this = undefined,
    _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\pages\\story\\new.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }













var newStory = function newStory(props) {
  _s();

  var _props$characters;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState({
    title: "",
    categories: [],
    language: "",
    status: "",
    copyright: "",
    summary: "",
    mature: false,
    "public": true,
    tags: [],
    mainCharacters: [],
    secondaryCharacters: [],
    image: "",
    imageCopyright: ""
  }),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState, 2),
      storyInfo = _React$useState2[0],
      setStoryInfo = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(""),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState3, 2),
      currentChar = _React$useState4[0],
      setCurrentChar = _React$useState4[1];

  var auth = Object(_hooks_userHooks__WEBPACK_IMPORTED_MODULE_7__["useAuth"])();
  react__WEBPACK_IMPORTED_MODULE_3___default.a.useEffect(function () {
    if (auth.user) {
      props.getUserCharacters();
    }
  }, [auth]);

  var addCharacter = function addCharacter() {
    if (currentChar && storyInfo.mainCharacters.indexOf(currentChar) === -1) {
      setStoryInfo(_objectSpread(_objectSpread({}, storyInfo), {}, {
        mainCharacters: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(storyInfo.mainCharacters), [currentChar])
      }));
    }
  };

  console.log(storyInfo.mainCharacters);
  return __jsx("div", {
    className: "new-story custom-form",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }, __jsx("h2", {
    className: "side-heading",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, "Add a new story"), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Form"], {
    layout: "vertical",
    className: "form-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    gutter: [24, 24],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  }, __jsx(_components_common_Input__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }), __jsx(_components_common_Select__WEBPACK_IMPORTED_MODULE_10__["default"], {
    sm: 24,
    xs: 24,
    lg: 6,
    md: 6,
    name: "categories",
    options: _utils_constants__WEBPACK_IMPORTED_MODULE_6__["CATEGORIES"],
    value: storyInfo.categories,
    onChangeFunc: setStoryInfo,
    storyInfo: storyInfo,
    type: "multiple",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    gutter: [24, 24],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 11
    }
  }, __jsx(_components_common_Select__WEBPACK_IMPORTED_MODULE_10__["default"], {
    md: 8,
    sm: 24,
    xs: 24,
    lg: 8,
    name: "language",
    options: _utils_constants__WEBPACK_IMPORTED_MODULE_6__["LANGUAGES"],
    value: storyInfo.language,
    onChangeFunc: setStoryInfo,
    storyInfo: storyInfo,
    type: "single",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }), __jsx(_components_common_Select__WEBPACK_IMPORTED_MODULE_10__["default"], {
    md: 8,
    sm: 24,
    xs: 24,
    lg: 8,
    name: "status",
    options: _utils_constants__WEBPACK_IMPORTED_MODULE_6__["STATUS"],
    info: "info about status",
    value: storyInfo.status,
    onChangeFunc: setStoryInfo,
    storyInfo: storyInfo,
    type: "single",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }
  }), __jsx(_components_common_Select__WEBPACK_IMPORTED_MODULE_10__["default"], {
    md: 8,
    sm: 24,
    xs: 24,
    lg: 8,
    name: "copyright",
    options: _utils_constants__WEBPACK_IMPORTED_MODULE_6__["COPYRIGHTS"],
    info: "info about copyright",
    value: storyInfo.copyright,
    onChangeFunc: setStoryInfo,
    storyInfo: storyInfo,
    type: "single",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "input-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 11
    }
  }, __jsx("label", {
    htmlFor: "summary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 13
    }
  }, "Summary"), __jsx("textarea", {
    rows: "5",
    name: "summary",
    id: "summary",
    className: "form-input",
    placeholder: "Summarize your story here",
    value: storyInfo.summary,
    onChange: function onChange(e) {
      return setStoryInfo(_objectSpread(_objectSpread({}, storyInfo), {}, {
        summary: e.target.value
      }));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 13
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    justify: "space-between",
    gutter: [24, 24],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    lg: 4,
    md: 8,
    sm: 12,
    xs: 24,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "input-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 15
    }
  }, __jsx("fieldset", {
    id: "mature",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 17
    }
  }, __jsx("label", {
    className: "title-label",
    htmlFor: "public",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 19
    }
  }, "Mature content"), __jsx("div", {
    className: "radio",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 19
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Space"], {
    size: 32,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "radio__1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 23
    }
  }, __jsx("input", {
    id: "radio-1",
    type: "radio",
    name: "mature",
    value: true,
    onChange: function onChange() {
      return setStoryInfo(_objectSpread(_objectSpread({}, storyInfo), {}, {
        mature: true
      }));
    },
    checked: storyInfo.mature ? true : false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 25
    }
  }), __jsx("label", {
    htmlFor: "radio-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 25
    }
  }), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 25
    }
  }, "Yes")), __jsx("div", {
    className: "radio__2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 23
    }
  }, __jsx("input", {
    id: "radio-2",
    type: "radio",
    name: "mature",
    value: false,
    onChange: function onChange() {
      return setStoryInfo(_objectSpread(_objectSpread({}, storyInfo), {}, {
        mature: false
      }));
    },
    checked: storyInfo.mature ? false : true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 25
    }
  }), __jsx("label", {
    htmlFor: "radio-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 25
    }
  }), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 25
    }
  }, "No"))))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    lg: 4,
    md: 8,
    sm: 12,
    xs: 24,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "input-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 15
    }
  }, __jsx("fieldset", {
    id: "public",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 17
    }
  }, __jsx("label", {
    className: "title-label",
    htmlFor: "public",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 19
    }
  }, "Visibilty"), __jsx("div", {
    className: "radio",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 19
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Space"], {
    size: 32,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "radio__1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 23
    }
  }, __jsx("input", {
    id: "radio-3",
    type: "radio",
    name: "public",
    value: true,
    onChange: function onChange() {
      return setStoryInfo(_objectSpread(_objectSpread({}, storyInfo), {}, {
        "public": true
      }));
    },
    checked: storyInfo["public"] ? true : false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 25
    }
  }), __jsx("label", {
    htmlFor: "radio-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 25
    }
  }), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 25
    }
  }, "Public")), __jsx("div", {
    className: "radio__2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 23
    }
  }, __jsx("input", {
    id: "radio-4",
    type: "radio",
    name: "public",
    value: false,
    onChange: function onChange() {
      return setStoryInfo(_objectSpread(_objectSpread({}, storyInfo), {}, {
        "public": false
      }));
    },
    checked: storyInfo["public"] ? false : true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 25
    }
  }), __jsx("label", {
    htmlFor: "radio-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 25
    }
  }), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 25
    }
  }, "Private"))))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    lg: 8,
    md: 12,
    sm: 24,
    xs: 24,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 13
    }
  }, __jsx("label", {
    className: "title-label",
    htmlFor: "tags",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 15
    }
  }, "Tags"), __jsx(_components_forms_Tags__WEBPACK_IMPORTED_MODULE_11__["default"], {
    storyInfo: storyInfo,
    tags: storyInfo.tags,
    setTags: setStoryInfo,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 15
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Divider"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 11
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    lg: 8,
    md: 12,
    sm: 24,
    xs: 24,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Form"].Item, {
    label: "Main Characters",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "input-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 19
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    span: 22,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 21
    }
  }, __jsx("select", {
    onChange: function onChange(e) {
      return setCurrentChar(e.target.value);
    },
    className: "form-input select-add-input",
    name: "mainCharacters",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 23
    }
  }, (_props$characters = props.characters) === null || _props$characters === void 0 ? void 0 : _props$characters.filter(function (c) {
    return !storyInfo.mainCharacters.includes(c.id);
  }).map(function (_char) {
    return __jsx("option", {
      key: _char.id,
      value: _char.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 268,
        columnNumber: 29
      }
    }, "".concat(_char.firstname, " ").concat(_char.lastname));
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    span: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "form-input select-add-input-iconbox",
    onClick: addCharacter,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 23
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 25
    }
  }, "+"))), __jsx("small", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 21
    }
  }, "You can add up to 5 main characters"))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    lg: 16,
    md: 12,
    sm: 24,
    xs: 24,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 13
    }
  }, props.characters.filter(function (c) {
    return storyInfo.mainCharacters.indexOf(c.id) !== -1;
  }).map(function (_char2) {
    return __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 292,
        columnNumber: 19
      }
    }, "".concat(_char2.firstname, " ").concat(_char2.lastname), " ", __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 293,
        columnNumber: 60
      }
    }, "x"));
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Divider"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 11
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    align: "bottom",
    gutter: [24, 24],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    md: 12,
    sm: 24,
    xs: 24,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "input-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 15
    }
  }, __jsx("label", {
    htmlFor: "image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 17
    }
  }, "Upload a cover"), __jsx(_components_forms_UploadImage__WEBPACK_IMPORTED_MODULE_12__["default"], {
    storyInfo: storyInfo,
    onChangeFunc: setStoryInfo,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 17
    }
  }))), __jsx(_components_common_Input__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 13
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Divider"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 11
    }
  }), __jsx("button", {
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 11
    }
  }, "Create"))));
};

_s(newStory, "v+mbpiMN3677SMwrEIgEteEyuOU=", false, function () {
  return [_hooks_userHooks__WEBPACK_IMPORTED_MODULE_7__["useAuth"]];
});

var mapStateToProps = function mapStateToProps(state) {
  return {
    characters: state.characters.userCharacters
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps, {
  getUserCharacters: _redux_actions_charactersActions__WEBPACK_IMPORTED_MODULE_8__["getUserCharacters"]
})(newStory));

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3RvcnkvbmV3LmpzIl0sIm5hbWVzIjpbIm5ld1N0b3J5IiwicHJvcHMiLCJSZWFjdCIsInVzZVN0YXRlIiwidGl0bGUiLCJjYXRlZ29yaWVzIiwibGFuZ3VhZ2UiLCJzdGF0dXMiLCJjb3B5cmlnaHQiLCJzdW1tYXJ5IiwibWF0dXJlIiwidGFncyIsIm1haW5DaGFyYWN0ZXJzIiwic2Vjb25kYXJ5Q2hhcmFjdGVycyIsImltYWdlIiwiaW1hZ2VDb3B5cmlnaHQiLCJzdG9yeUluZm8iLCJzZXRTdG9yeUluZm8iLCJjdXJyZW50Q2hhciIsInNldEN1cnJlbnRDaGFyIiwiYXV0aCIsInVzZUF1dGgiLCJ1c2VFZmZlY3QiLCJ1c2VyIiwiZ2V0VXNlckNoYXJhY3RlcnMiLCJhZGRDaGFyYWN0ZXIiLCJpbmRleE9mIiwiY29uc29sZSIsImxvZyIsIkNBVEVHT1JJRVMiLCJMQU5HVUFHRVMiLCJTVEFUVVMiLCJDT1BZUklHSFRTIiwiZSIsInRhcmdldCIsInZhbHVlIiwiY2hhcmFjdGVycyIsImZpbHRlciIsImMiLCJpbmNsdWRlcyIsImlkIiwibWFwIiwiY2hhciIsImZpcnN0bmFtZSIsImxhc3RuYW1lIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJ1c2VyQ2hhcmFjdGVycyIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQU1BO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBOztBQUFBLHdCQUNRQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWU7QUFDL0NDLFNBQUssRUFBRSxFQUR3QztBQUUvQ0MsY0FBVSxFQUFFLEVBRm1DO0FBRy9DQyxZQUFRLEVBQUUsRUFIcUM7QUFJL0NDLFVBQU0sRUFBRSxFQUp1QztBQUsvQ0MsYUFBUyxFQUFFLEVBTG9DO0FBTS9DQyxXQUFPLEVBQUUsRUFOc0M7QUFPL0NDLFVBQU0sRUFBRSxLQVB1QztBQVEvQyxjQUFRLElBUnVDO0FBUy9DQyxRQUFJLEVBQUUsRUFUeUM7QUFVL0NDLGtCQUFjLEVBQUUsRUFWK0I7QUFXL0NDLHVCQUFtQixFQUFFLEVBWDBCO0FBWS9DQyxTQUFLLEVBQUUsRUFad0M7QUFhL0NDLGtCQUFjLEVBQUU7QUFiK0IsR0FBZixDQURSO0FBQUE7QUFBQSxNQUNuQkMsU0FEbUI7QUFBQSxNQUNSQyxZQURROztBQUFBLHlCQWdCWWYsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEVBQWYsQ0FoQlo7QUFBQTtBQUFBLE1BZ0JuQmUsV0FoQm1CO0FBQUEsTUFnQk5DLGNBaEJNOztBQWlCMUIsTUFBTUMsSUFBSSxHQUFHQyxnRUFBTyxFQUFwQjtBQUVBbkIsOENBQUssQ0FBQ29CLFNBQU4sQ0FBZ0IsWUFBTTtBQUNwQixRQUFJRixJQUFJLENBQUNHLElBQVQsRUFBZTtBQUNidEIsV0FBSyxDQUFDdUIsaUJBQU47QUFDRDtBQUNGLEdBSkQsRUFJRyxDQUFDSixJQUFELENBSkg7O0FBTUEsTUFBTUssWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN6QixRQUFJUCxXQUFXLElBQUlGLFNBQVMsQ0FBQ0osY0FBVixDQUF5QmMsT0FBekIsQ0FBaUNSLFdBQWpDLE1BQWtELENBQUMsQ0FBdEUsRUFBeUU7QUFDdkVELGtCQUFZLGlDQUNQRCxTQURPO0FBRVZKLHNCQUFjLHlHQUFNSSxTQUFTLENBQUNKLGNBQWhCLElBQWdDTSxXQUFoQztBQUZKLFNBQVo7QUFJRDtBQUNGLEdBUEQ7O0FBU0FTLFNBQU8sQ0FBQ0MsR0FBUixDQUFZWixTQUFTLENBQUNKLGNBQXRCO0FBQ0EsU0FDRTtBQUFLLGFBQVMsRUFBQyx1QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsY0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLEVBRUUsTUFBQyx5Q0FBRDtBQUFNLFVBQU0sRUFBQyxVQUFiO0FBQXdCLGFBQVMsRUFBQyxZQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3Q0FBRDtBQUFLLFVBQU0sRUFBRSxDQUFDLEVBQUQsRUFBSyxFQUFMLENBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0VBQUQ7QUFDRSxZQUFRLEVBQUUsSUFEWjtBQUVFLE1BQUUsRUFBRSxFQUZOO0FBR0UsTUFBRSxFQUFFLEVBSE47QUFJRSxNQUFFLEVBQUUsRUFKTjtBQUtFLE1BQUUsRUFBRSxFQUxOO0FBTUUsUUFBSSxFQUFDLE1BTlA7QUFPRSxRQUFJLEVBQUMsT0FQUDtBQVFFLGVBQVcsRUFBQyxlQVJkO0FBU0UsU0FBSyxFQUFFSSxTQUFTLENBQUNaLEtBVG5CO0FBVUUsZ0JBQVksRUFBRWEsWUFWaEI7QUFXRSxhQUFTLEVBQUVELFNBWGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBY0UsTUFBQyxrRUFBRDtBQUNFLE1BQUUsRUFBRSxFQUROO0FBRUUsTUFBRSxFQUFFLEVBRk47QUFHRSxNQUFFLEVBQUUsQ0FITjtBQUlFLE1BQUUsRUFBRSxDQUpOO0FBS0UsUUFBSSxFQUFDLFlBTFA7QUFNRSxXQUFPLEVBQUVhLDJEQU5YO0FBT0UsU0FBSyxFQUFFYixTQUFTLENBQUNYLFVBUG5CO0FBUUUsZ0JBQVksRUFBRVksWUFSaEI7QUFTRSxhQUFTLEVBQUVELFNBVGI7QUFVRSxRQUFJLEVBQUMsVUFWUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZEYsQ0FERixFQTRCRSxNQUFDLHdDQUFEO0FBQUssVUFBTSxFQUFFLENBQUMsRUFBRCxFQUFLLEVBQUwsQ0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxrRUFBRDtBQUNFLE1BQUUsRUFBRSxDQUROO0FBRUUsTUFBRSxFQUFFLEVBRk47QUFHRSxNQUFFLEVBQUUsRUFITjtBQUlFLE1BQUUsRUFBRSxDQUpOO0FBS0UsUUFBSSxFQUFDLFVBTFA7QUFNRSxXQUFPLEVBQUVjLDBEQU5YO0FBT0UsU0FBSyxFQUFFZCxTQUFTLENBQUNWLFFBUG5CO0FBUUUsZ0JBQVksRUFBRVcsWUFSaEI7QUFTRSxhQUFTLEVBQUVELFNBVGI7QUFVRSxRQUFJLEVBQUMsUUFWUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFhRSxNQUFDLGtFQUFEO0FBQ0UsTUFBRSxFQUFFLENBRE47QUFFRSxNQUFFLEVBQUUsRUFGTjtBQUdFLE1BQUUsRUFBRSxFQUhOO0FBSUUsTUFBRSxFQUFFLENBSk47QUFLRSxRQUFJLEVBQUMsUUFMUDtBQU1FLFdBQU8sRUFBRWUsdURBTlg7QUFPRSxRQUFJLEVBQUUsbUJBUFI7QUFRRSxTQUFLLEVBQUVmLFNBQVMsQ0FBQ1QsTUFSbkI7QUFTRSxnQkFBWSxFQUFFVSxZQVRoQjtBQVVFLGFBQVMsRUFBRUQsU0FWYjtBQVdFLFFBQUksRUFBQyxRQVhQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFiRixFQTBCRSxNQUFDLGtFQUFEO0FBQ0UsTUFBRSxFQUFFLENBRE47QUFFRSxNQUFFLEVBQUUsRUFGTjtBQUdFLE1BQUUsRUFBRSxFQUhOO0FBSUUsTUFBRSxFQUFFLENBSk47QUFLRSxRQUFJLEVBQUMsV0FMUDtBQU1FLFdBQU8sRUFBRWdCLDJEQU5YO0FBT0UsUUFBSSxFQUFFLHNCQVBSO0FBUUUsU0FBSyxFQUFFaEIsU0FBUyxDQUFDUixTQVJuQjtBQVNFLGdCQUFZLEVBQUVTLFlBVGhCO0FBVUUsYUFBUyxFQUFFRCxTQVZiO0FBV0UsUUFBSSxFQUFDLFFBWFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTFCRixDQTVCRixFQW9FRTtBQUFLLGFBQVMsRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFPLFdBQU8sRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixFQUVFO0FBQ0UsUUFBSSxFQUFDLEdBRFA7QUFFRSxRQUFJLEVBQUMsU0FGUDtBQUdFLE1BQUUsRUFBQyxTQUhMO0FBSUUsYUFBUyxFQUFDLFlBSlo7QUFLRSxlQUFXLEVBQUMsMkJBTGQ7QUFNRSxTQUFLLEVBQUVBLFNBQVMsQ0FBQ1AsT0FObkI7QUFPRSxZQUFRLEVBQUUsa0JBQUN3QixDQUFEO0FBQUEsYUFDUmhCLFlBQVksaUNBQU1ELFNBQU47QUFBaUJQLGVBQU8sRUFBRXdCLENBQUMsQ0FBQ0MsTUFBRixDQUFTQztBQUFuQyxTQURKO0FBQUEsS0FQWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FwRUYsRUFrRkUsTUFBQyx3Q0FBRDtBQUFLLFdBQU8sRUFBQyxlQUFiO0FBQTZCLFVBQU0sRUFBRSxDQUFDLEVBQUQsRUFBSyxFQUFMLENBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdDQUFEO0FBQUssTUFBRSxFQUFFLENBQVQ7QUFBWSxNQUFFLEVBQUUsQ0FBaEI7QUFBbUIsTUFBRSxFQUFFLEVBQXZCO0FBQTJCLE1BQUUsRUFBRSxFQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBVSxNQUFFLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTyxhQUFTLEVBQUMsYUFBakI7QUFBK0IsV0FBTyxFQUFDLFFBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsRUFLRTtBQUFLLGFBQVMsRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDBDQUFEO0FBQU8sUUFBSSxFQUFFLEVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsTUFBRSxFQUFDLFNBREw7QUFFRSxRQUFJLEVBQUMsT0FGUDtBQUdFLFFBQUksRUFBQyxRQUhQO0FBSUUsU0FBSyxFQUFFLElBSlQ7QUFLRSxZQUFRLEVBQUU7QUFBQSxhQUNSbEIsWUFBWSxpQ0FDUEQsU0FETztBQUVWTixjQUFNLEVBQUU7QUFGRSxTQURKO0FBQUEsS0FMWjtBQVdFLFdBQU8sRUFBRU0sU0FBUyxDQUFDTixNQUFWLEdBQW1CLElBQW5CLEdBQTBCLEtBWHJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQWNFO0FBQU8sV0FBTyxFQUFDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWRGLEVBZUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQWZGLENBREYsRUFtQkU7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxNQUFFLEVBQUMsU0FETDtBQUVFLFFBQUksRUFBQyxPQUZQO0FBR0UsUUFBSSxFQUFDLFFBSFA7QUFJRSxTQUFLLEVBQUUsS0FKVDtBQUtFLFlBQVEsRUFBRTtBQUFBLGFBQ1JPLFlBQVksaUNBQ1BELFNBRE87QUFFVk4sY0FBTSxFQUFFO0FBRkUsU0FESjtBQUFBLEtBTFo7QUFXRSxXQUFPLEVBQUVNLFNBQVMsQ0FBQ04sTUFBVixHQUFtQixLQUFuQixHQUEyQixJQVh0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFjRTtBQUFPLFdBQU8sRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFkRixFQWVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFmRixDQW5CRixDQURGLENBTEYsQ0FERixDQURGLENBREYsRUFrREUsTUFBQyx3Q0FBRDtBQUFLLE1BQUUsRUFBRSxDQUFUO0FBQVksTUFBRSxFQUFFLENBQWhCO0FBQW1CLE1BQUUsRUFBRSxFQUF2QjtBQUEyQixNQUFFLEVBQUUsRUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQVUsTUFBRSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU8sYUFBUyxFQUFDLGFBQWpCO0FBQStCLFdBQU8sRUFBQyxRQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLEVBSUU7QUFBSyxhQUFTLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywwQ0FBRDtBQUFPLFFBQUksRUFBRSxFQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLE1BQUUsRUFBQyxTQURMO0FBRUUsUUFBSSxFQUFDLE9BRlA7QUFHRSxRQUFJLEVBQUMsUUFIUDtBQUlFLFNBQUssRUFBRSxJQUpUO0FBS0UsWUFBUSxFQUFFO0FBQUEsYUFDUk8sWUFBWSxpQ0FDUEQsU0FETztBQUVWLGtCQUFRO0FBRkUsU0FESjtBQUFBLEtBTFo7QUFXRSxXQUFPLEVBQUVBLFNBQVMsVUFBVCxHQUFtQixJQUFuQixHQUEwQixLQVhyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFjRTtBQUFPLFdBQU8sRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFkRixFQWVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FmRixDQURGLEVBbUJFO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsTUFBRSxFQUFDLFNBREw7QUFFRSxRQUFJLEVBQUMsT0FGUDtBQUdFLFFBQUksRUFBQyxRQUhQO0FBSUUsU0FBSyxFQUFFLEtBSlQ7QUFLRSxZQUFRLEVBQUU7QUFBQSxhQUNSQyxZQUFZLGlDQUNQRCxTQURPO0FBRVYsa0JBQVE7QUFGRSxTQURKO0FBQUEsS0FMWjtBQVdFLFdBQU8sRUFBRUEsU0FBUyxVQUFULEdBQW1CLEtBQW5CLEdBQTJCLElBWHRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQWNFO0FBQU8sV0FBTyxFQUFDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWRGLEVBZUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWZGLENBbkJGLENBREYsQ0FKRixDQURGLENBREYsQ0FsREYsRUFtR0UsTUFBQyx3Q0FBRDtBQUFLLE1BQUUsRUFBRSxDQUFUO0FBQVksTUFBRSxFQUFFLEVBQWhCO0FBQW9CLE1BQUUsRUFBRSxFQUF4QjtBQUE0QixNQUFFLEVBQUUsRUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU8sYUFBUyxFQUFDLGFBQWpCO0FBQStCLFdBQU8sRUFBQyxNQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsRUFJRSxNQUFDLCtEQUFEO0FBQ0UsYUFBUyxFQUFFQSxTQURiO0FBRUUsUUFBSSxFQUFFQSxTQUFTLENBQUNMLElBRmxCO0FBR0UsV0FBTyxFQUFFTSxZQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixDQW5HRixDQWxGRixFQWdNRSxNQUFDLDRDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFoTUYsRUFpTUUsTUFBQyx3Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3Q0FBRDtBQUFLLE1BQUUsRUFBRSxDQUFUO0FBQVksTUFBRSxFQUFFLEVBQWhCO0FBQW9CLE1BQUUsRUFBRSxFQUF4QjtBQUE0QixNQUFFLEVBQUUsRUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQVcsU0FBSyxFQUFDLGlCQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3Q0FBRDtBQUFLLFFBQUksRUFBRSxFQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLFlBQVEsRUFBRSxrQkFBQ2dCLENBQUQ7QUFBQSxhQUFPZCxjQUFjLENBQUNjLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQXJCO0FBQUEsS0FEWjtBQUVFLGFBQVMsRUFBQyw2QkFGWjtBQUdFLFFBQUksRUFBQyxnQkFIUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUtHbEMsS0FBSyxDQUFDbUMsVUFMVCxzREFLRyxrQkFDR0MsTUFESCxDQUVHLFVBQUNDLENBQUQ7QUFBQSxXQUFPLENBQUN0QixTQUFTLENBQUNKLGNBQVYsQ0FBeUIyQixRQUF6QixDQUFrQ0QsQ0FBQyxDQUFDRSxFQUFwQyxDQUFSO0FBQUEsR0FGSCxFQUlFQyxHQUpGLENBSU0sVUFBQ0MsS0FBRDtBQUFBLFdBQ0g7QUFDRSxTQUFHLEVBQUVBLEtBQUksQ0FBQ0YsRUFEWjtBQUVFLFdBQUssRUFBRUUsS0FBSSxDQUFDRixFQUZkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBR0tFLEtBQUksQ0FBQ0MsU0FIVixjQUd1QkQsS0FBSSxDQUFDRSxRQUg1QixFQURHO0FBQUEsR0FKTixDQUxILENBREYsQ0FERixFQW1CRSxNQUFDLHdDQUFEO0FBQUssUUFBSSxFQUFFLENBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsYUFBUyxFQUFDLHFDQURaO0FBRUUsV0FBTyxFQUFFbkIsWUFGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUpGLENBREYsQ0FuQkYsRUEyQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQ0EzQkYsQ0FERixDQURGLENBREYsQ0FERixFQW9DRSxNQUFDLHdDQUFEO0FBQUssTUFBRSxFQUFFLEVBQVQ7QUFBYSxNQUFFLEVBQUUsRUFBakI7QUFBcUIsTUFBRSxFQUFFLEVBQXpCO0FBQTZCLE1BQUUsRUFBRSxFQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0d4QixLQUFLLENBQUNtQyxVQUFOLENBQ0VDLE1BREYsQ0FDUyxVQUFDQyxDQUFEO0FBQUEsV0FBT3RCLFNBQVMsQ0FBQ0osY0FBVixDQUF5QmMsT0FBekIsQ0FBaUNZLENBQUMsQ0FBQ0UsRUFBbkMsTUFBMkMsQ0FBQyxDQUFuRDtBQUFBLEdBRFQsRUFFRUMsR0FGRixDQUVNLFVBQUNDLE1BQUQ7QUFBQSxXQUNIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQ01BLE1BQUksQ0FBQ0MsU0FEWCxjQUN3QkQsTUFBSSxDQUFDRSxRQUQ3QixRQUN5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRHpDLENBREc7QUFBQSxHQUZOLENBREgsQ0FwQ0YsQ0FqTUYsRUErT0UsTUFBQyw0Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBL09GLEVBZ1BFLE1BQUMsd0NBQUQ7QUFBSyxTQUFLLEVBQUMsUUFBWDtBQUFvQixVQUFNLEVBQUUsQ0FBQyxFQUFELEVBQUssRUFBTCxDQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3Q0FBRDtBQUFLLE1BQUUsRUFBRSxFQUFUO0FBQWEsTUFBRSxFQUFFLEVBQWpCO0FBQXFCLE1BQUUsRUFBRSxFQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTyxXQUFPLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLEVBRUUsTUFBQyxzRUFBRDtBQUNFLGFBQVMsRUFBRTVCLFNBRGI7QUFFRSxnQkFBWSxFQUFFQyxZQUZoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixDQURGLEVBV0UsTUFBQyxnRUFBRDtBQUNFLFlBQVEsRUFBRSxLQURaO0FBRUUsTUFBRSxFQUFFLEVBRk47QUFHRSxNQUFFLEVBQUUsRUFITjtBQUlFLE1BQUUsRUFBRSxFQUpOO0FBS0UsTUFBRSxFQUFFLEVBTE47QUFNRSxNQUFFLEVBQUMsT0FOTDtBQU9FLFFBQUksRUFBQyxNQVBQO0FBUUUsUUFBSSxFQUFDLE9BUlA7QUFTRSxTQUFLLEVBQUMsOEJBVFI7QUFVRSxlQUFXLEVBQUMsRUFWZDtBQVdFLFNBQUssRUFBRUQsU0FBUyxDQUFDRixLQVhuQjtBQVlFLGdCQUFZLEVBQUVHLFlBWmhCO0FBYUUsYUFBUyxFQUFFRCxTQWJiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFYRixDQWhQRixFQTJRRSxNQUFDLDRDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUEzUUYsRUE0UUU7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBNVFGLENBRkYsQ0FERixDQURGO0FBcVJELENBeFREOztHQUFNaEIsUTtVQWlCU3FCLHdEOzs7QUF5U2YsSUFBTXdCLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDbENWLGNBQVUsRUFBRVUsS0FBSyxDQUFDVixVQUFOLENBQWlCVztBQURLLEdBQVo7QUFBQSxDQUF4Qjs7QUFJZUMsMEhBQU8sQ0FBQ0gsZUFBRCxFQUFrQjtBQUFFckIsbUJBQWlCLEVBQWpCQSxrRkFBaUJBO0FBQW5CLENBQWxCLENBQVAsQ0FBZ0R4QixRQUFoRCxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3N0b3J5L25ldy5lMzQwNjQ4MTBmZWViMGQ4M2I4YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBSb3csIENvbCwgU3BhY2UsIERpdmlkZXIsIEZvcm0gfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIENBVEVHT1JJRVMsXHJcbiAgQ09QWVJJR0hUUyxcclxuICBMQU5HVUFHRVMsXHJcbiAgU1RBVFVTLFxyXG59IGZyb20gXCIuLi8uLi91dGlscy9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gXCIuLi8uLi9ob29rcy91c2VySG9va3NcIjtcclxuaW1wb3J0IHsgZ2V0VXNlckNoYXJhY3RlcnMgfSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9ucy9jaGFyYWN0ZXJzQWN0aW9uc1wiO1xyXG5cclxuaW1wb3J0IElucHV0R3JvdXAgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvY29tbW9uL0lucHV0XCI7XHJcbmltcG9ydCBTZWxlY3RHcm91cCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jb21tb24vU2VsZWN0XCI7XHJcbmltcG9ydCBUYWdzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2Zvcm1zL1RhZ3NcIjtcclxuaW1wb3J0IFVwbG9hZEltYWdlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2Zvcm1zL1VwbG9hZEltYWdlXCI7XHJcbmltcG9ydCB7IFNlbGVjdCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5cclxuY29uc3QgbmV3U3RvcnkgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBbc3RvcnlJbmZvLCBzZXRTdG9yeUluZm9dID0gUmVhY3QudXNlU3RhdGUoe1xyXG4gICAgdGl0bGU6IFwiXCIsXHJcbiAgICBjYXRlZ29yaWVzOiBbXSxcclxuICAgIGxhbmd1YWdlOiBcIlwiLFxyXG4gICAgc3RhdHVzOiBcIlwiLFxyXG4gICAgY29weXJpZ2h0OiBcIlwiLFxyXG4gICAgc3VtbWFyeTogXCJcIixcclxuICAgIG1hdHVyZTogZmFsc2UsXHJcbiAgICBwdWJsaWM6IHRydWUsXHJcbiAgICB0YWdzOiBbXSxcclxuICAgIG1haW5DaGFyYWN0ZXJzOiBbXSxcclxuICAgIHNlY29uZGFyeUNoYXJhY3RlcnM6IFtdLFxyXG4gICAgaW1hZ2U6IFwiXCIsXHJcbiAgICBpbWFnZUNvcHlyaWdodDogXCJcIixcclxuICB9KTtcclxuICBjb25zdCBbY3VycmVudENoYXIsIHNldEN1cnJlbnRDaGFyXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IGF1dGggPSB1c2VBdXRoKCk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoYXV0aC51c2VyKSB7XHJcbiAgICAgIHByb3BzLmdldFVzZXJDaGFyYWN0ZXJzKCk7XHJcbiAgICB9XHJcbiAgfSwgW2F1dGhdKTtcclxuXHJcbiAgY29uc3QgYWRkQ2hhcmFjdGVyID0gKCkgPT4ge1xyXG4gICAgaWYgKGN1cnJlbnRDaGFyICYmIHN0b3J5SW5mby5tYWluQ2hhcmFjdGVycy5pbmRleE9mKGN1cnJlbnRDaGFyKSA9PT0gLTEpIHtcclxuICAgICAgc2V0U3RvcnlJbmZvKHtcclxuICAgICAgICAuLi5zdG9yeUluZm8sXHJcbiAgICAgICAgbWFpbkNoYXJhY3RlcnM6IFsuLi5zdG9yeUluZm8ubWFpbkNoYXJhY3RlcnMsIGN1cnJlbnRDaGFyXSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc29sZS5sb2coc3RvcnlJbmZvLm1haW5DaGFyYWN0ZXJzKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJuZXctc3RvcnkgY3VzdG9tLWZvcm1cIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lclwiPlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJzaWRlLWhlYWRpbmdcIj5BZGQgYSBuZXcgc3Rvcnk8L2gyPlxyXG4gICAgICAgIDxGb3JtIGxheW91dD1cInZlcnRpY2FsXCIgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgPFJvdyBndXR0ZXI9e1syNCwgMjRdfT5cclxuICAgICAgICAgICAgPElucHV0R3JvdXBcclxuICAgICAgICAgICAgICByZXF1aXJlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICBzbT17MjR9XHJcbiAgICAgICAgICAgICAgeHM9ezI0fVxyXG4gICAgICAgICAgICAgIG1kPXsxOH1cclxuICAgICAgICAgICAgICBsZz17MTh9XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBhIHRpdGxlXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17c3RvcnlJbmZvLnRpdGxlfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlRnVuYz17c2V0U3RvcnlJbmZvfVxyXG4gICAgICAgICAgICAgIHN0b3J5SW5mbz17c3RvcnlJbmZvfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8U2VsZWN0R3JvdXBcclxuICAgICAgICAgICAgICBzbT17MjR9XHJcbiAgICAgICAgICAgICAgeHM9ezI0fVxyXG4gICAgICAgICAgICAgIGxnPXs2fVxyXG4gICAgICAgICAgICAgIG1kPXs2fVxyXG4gICAgICAgICAgICAgIG5hbWU9XCJjYXRlZ29yaWVzXCJcclxuICAgICAgICAgICAgICBvcHRpb25zPXtDQVRFR09SSUVTfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtzdG9yeUluZm8uY2F0ZWdvcmllc31cclxuICAgICAgICAgICAgICBvbkNoYW5nZUZ1bmM9e3NldFN0b3J5SW5mb31cclxuICAgICAgICAgICAgICBzdG9yeUluZm89e3N0b3J5SW5mb31cclxuICAgICAgICAgICAgICB0eXBlPVwibXVsdGlwbGVcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICA8Um93IGd1dHRlcj17WzI0LCAyNF19PlxyXG4gICAgICAgICAgICA8U2VsZWN0R3JvdXBcclxuICAgICAgICAgICAgICBtZD17OH1cclxuICAgICAgICAgICAgICBzbT17MjR9XHJcbiAgICAgICAgICAgICAgeHM9ezI0fVxyXG4gICAgICAgICAgICAgIGxnPXs4fVxyXG4gICAgICAgICAgICAgIG5hbWU9XCJsYW5ndWFnZVwiXHJcbiAgICAgICAgICAgICAgb3B0aW9ucz17TEFOR1VBR0VTfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtzdG9yeUluZm8ubGFuZ3VhZ2V9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2VGdW5jPXtzZXRTdG9yeUluZm99XHJcbiAgICAgICAgICAgICAgc3RvcnlJbmZvPXtzdG9yeUluZm99XHJcbiAgICAgICAgICAgICAgdHlwZT1cInNpbmdsZVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxTZWxlY3RHcm91cFxyXG4gICAgICAgICAgICAgIG1kPXs4fVxyXG4gICAgICAgICAgICAgIHNtPXsyNH1cclxuICAgICAgICAgICAgICB4cz17MjR9XHJcbiAgICAgICAgICAgICAgbGc9ezh9XHJcbiAgICAgICAgICAgICAgbmFtZT1cInN0YXR1c1wiXHJcbiAgICAgICAgICAgICAgb3B0aW9ucz17U1RBVFVTfVxyXG4gICAgICAgICAgICAgIGluZm89e1wiaW5mbyBhYm91dCBzdGF0dXNcIn1cclxuICAgICAgICAgICAgICB2YWx1ZT17c3RvcnlJbmZvLnN0YXR1c31cclxuICAgICAgICAgICAgICBvbkNoYW5nZUZ1bmM9e3NldFN0b3J5SW5mb31cclxuICAgICAgICAgICAgICBzdG9yeUluZm89e3N0b3J5SW5mb31cclxuICAgICAgICAgICAgICB0eXBlPVwic2luZ2xlXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFNlbGVjdEdyb3VwXHJcbiAgICAgICAgICAgICAgbWQ9ezh9XHJcbiAgICAgICAgICAgICAgc209ezI0fVxyXG4gICAgICAgICAgICAgIHhzPXsyNH1cclxuICAgICAgICAgICAgICBsZz17OH1cclxuICAgICAgICAgICAgICBuYW1lPVwiY29weXJpZ2h0XCJcclxuICAgICAgICAgICAgICBvcHRpb25zPXtDT1BZUklHSFRTfVxyXG4gICAgICAgICAgICAgIGluZm89e1wiaW5mbyBhYm91dCBjb3B5cmlnaHRcIn1cclxuICAgICAgICAgICAgICB2YWx1ZT17c3RvcnlJbmZvLmNvcHlyaWdodH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZUZ1bmM9e3NldFN0b3J5SW5mb31cclxuICAgICAgICAgICAgICBzdG9yeUluZm89e3N0b3J5SW5mb31cclxuICAgICAgICAgICAgICB0eXBlPVwic2luZ2xlXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInN1bW1hcnlcIj5TdW1tYXJ5PC9sYWJlbD5cclxuICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgcm93cz1cIjVcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJzdW1tYXJ5XCJcclxuICAgICAgICAgICAgICBpZD1cInN1bW1hcnlcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0taW5wdXRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU3VtbWFyaXplIHlvdXIgc3RvcnkgaGVyZVwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3N0b3J5SW5mby5zdW1tYXJ5fVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cclxuICAgICAgICAgICAgICAgIHNldFN0b3J5SW5mbyh7IC4uLnN0b3J5SW5mbywgc3VtbWFyeTogZS50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID48L3RleHRhcmVhPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8Um93IGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCIgZ3V0dGVyPXtbMjQsIDI0XX0+XHJcbiAgICAgICAgICAgIDxDb2wgbGc9ezR9IG1kPXs4fSBzbT17MTJ9IHhzPXsyNH0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGZpZWxkc2V0IGlkPVwibWF0dXJlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0aXRsZS1sYWJlbFwiIGh0bWxGb3I9XCJwdWJsaWNcIj5cclxuICAgICAgICAgICAgICAgICAgICBNYXR1cmUgY29udGVudFxyXG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYWRpb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTcGFjZSBzaXplPXszMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhZGlvX18xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicmFkaW8tMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibWF0dXJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFN0b3J5SW5mbyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnN0b3J5SW5mbyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0dXJlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17c3RvcnlJbmZvLm1hdHVyZSA/IHRydWUgOiBmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJyYWRpby0xXCI+PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+WWVzPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYWRpb19fMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInJhZGlvLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm1hdHVyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3RvcnlJbmZvKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uc3RvcnlJbmZvLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXR1cmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17c3RvcnlJbmZvLm1hdHVyZSA/IGZhbHNlIDogdHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJyYWRpby0yXCI+PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+Tm88L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L1NwYWNlPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZmllbGRzZXQ+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIGxnPXs0fSBtZD17OH0gc209ezEyfSB4cz17MjR9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxmaWVsZHNldCBpZD1cInB1YmxpY1wiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGl0bGUtbGFiZWxcIiBodG1sRm9yPVwicHVibGljXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgVmlzaWJpbHR5XHJcbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmFkaW9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8U3BhY2Ugc2l6ZT17MzJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYWRpb19fMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInJhZGlvLTNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInB1YmxpY1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTdG9yeUluZm8oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5zdG9yeUluZm8sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB1YmxpYzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3N0b3J5SW5mby5wdWJsaWMgPyB0cnVlIDogZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicmFkaW8tM1wiPjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlB1YmxpYzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmFkaW9fXzJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJyYWRpby00XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwdWJsaWNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFN0b3J5SW5mbyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnN0b3J5SW5mbyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHVibGljOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3N0b3J5SW5mby5wdWJsaWMgPyBmYWxzZSA6IHRydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicmFkaW8tNFwiPjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlByaXZhdGU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L1NwYWNlPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZmllbGRzZXQ+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICAgICAgPENvbCBsZz17OH0gbWQ9ezEyfSBzbT17MjR9IHhzPXsyNH0+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRpdGxlLWxhYmVsXCIgaHRtbEZvcj1cInRhZ3NcIj5cclxuICAgICAgICAgICAgICAgIFRhZ3NcclxuICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxUYWdzXHJcbiAgICAgICAgICAgICAgICBzdG9yeUluZm89e3N0b3J5SW5mb31cclxuICAgICAgICAgICAgICAgIHRhZ3M9e3N0b3J5SW5mby50YWdzfVxyXG4gICAgICAgICAgICAgICAgc2V0VGFncz17c2V0U3RvcnlJbmZvfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgPENvbCBsZz17OH0gbWQ9ezEyfSBzbT17MjR9IHhzPXsyNH0+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD1cIk1haW4gQ2hhcmFjdGVyc1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17MjJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEN1cnJlbnRDaGFyKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1pbnB1dCBzZWxlY3QtYWRkLWlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm1haW5DaGFyYWN0ZXJzXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmNoYXJhY3RlcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/LmZpbHRlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjKSA9PiAhc3RvcnlJbmZvLm1haW5DaGFyYWN0ZXJzLmluY2x1ZGVzKGMuaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKGNoYXIpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtjaGFyLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y2hhci5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID57YCR7Y2hhci5maXJzdG5hbWV9ICR7Y2hhci5sYXN0bmFtZX1gfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBzcGFuPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1pbnB1dCBzZWxlY3QtYWRkLWlucHV0LWljb25ib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXthZGRDaGFyYWN0ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPis8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8c21hbGw+WW91IGNhbiBhZGQgdXAgdG8gNSBtYWluIGNoYXJhY3RlcnM8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPENvbCBsZz17MTZ9IG1kPXsxMn0gc209ezI0fSB4cz17MjR9PlxyXG4gICAgICAgICAgICAgIHtwcm9wcy5jaGFyYWN0ZXJzXHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyKChjKSA9PiBzdG9yeUluZm8ubWFpbkNoYXJhY3RlcnMuaW5kZXhPZihjLmlkKSAhPT0gLTEpXHJcbiAgICAgICAgICAgICAgICAubWFwKChjaGFyKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIHtgJHtjaGFyLmZpcnN0bmFtZX0gJHtjaGFyLmxhc3RuYW1lfWB9IDxzcGFuPng8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgIDxSb3cgYWxpZ249XCJib3R0b21cIiBndXR0ZXI9e1syNCwgMjRdfT5cclxuICAgICAgICAgICAgPENvbCBtZD17MTJ9IHNtPXsyNH0geHM9ezI0fT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImltYWdlXCI+VXBsb2FkIGEgY292ZXI8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPFVwbG9hZEltYWdlXHJcbiAgICAgICAgICAgICAgICAgIHN0b3J5SW5mbz17c3RvcnlJbmZvfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZUZ1bmM9e3NldFN0b3J5SW5mb31cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICAgICAgPElucHV0R3JvdXBcclxuICAgICAgICAgICAgICByZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgc209ezI0fVxyXG4gICAgICAgICAgICAgIHhzPXsyNH1cclxuICAgICAgICAgICAgICBtZD17MTJ9XHJcbiAgICAgICAgICAgICAgbGc9ezEyfVxyXG4gICAgICAgICAgICAgIGlkPVwiaW1hZ2VcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBuYW1lPVwiaW1hZ2VcIlxyXG4gICAgICAgICAgICAgIHRpdGxlPVwiT3Igc3VibWl0IGEgbGluayB0byBhbiBpbWFnZVwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtzdG9yeUluZm8uaW1hZ2V9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2VGdW5jPXtzZXRTdG9yeUluZm99XHJcbiAgICAgICAgICAgICAgc3RvcnlJbmZvPXtzdG9yeUluZm99XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5DcmVhdGU8L2J1dHRvbj5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcclxuICBjaGFyYWN0ZXJzOiBzdGF0ZS5jaGFyYWN0ZXJzLnVzZXJDaGFyYWN0ZXJzLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7IGdldFVzZXJDaGFyYWN0ZXJzIH0pKG5ld1N0b3J5KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==