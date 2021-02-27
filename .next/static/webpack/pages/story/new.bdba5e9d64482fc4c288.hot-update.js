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

  var removeCharacter = function removeCharacter(id) {
    setStoryInfo(_objectSpread(_objectSpread({}, storyInfo), {}, {
      mainCharacters: storyInfo.mainCharacters.filter(function (c) {
        return c !== id;
      })
    }));
  };

  console.log(storyInfo.mainCharacters);
  return __jsx("div", {
    className: "new-story custom-form",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }, __jsx("h2", {
    className: "side-heading",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }, "Add a new story"), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Form"], {
    layout: "vertical",
    className: "form-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    gutter: [24, 24],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
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
      lineNumber: 67,
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
      lineNumber: 80,
      columnNumber: 13
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    gutter: [24, 24],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
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
      lineNumber: 94,
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
      lineNumber: 106,
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
      lineNumber: 119,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "input-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 11
    }
  }, __jsx("label", {
    htmlFor: "summary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
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
      lineNumber: 135,
      columnNumber: 13
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    justify: "space-between",
    gutter: [24, 24],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
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
      lineNumber: 148,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "input-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 15
    }
  }, __jsx("fieldset", {
    id: "mature",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 17
    }
  }, __jsx("label", {
    className: "title-label",
    htmlFor: "public",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 19
    }
  }, "Mature content"), __jsx("div", {
    className: "radio",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 19
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Space"], {
    size: 32,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "radio__1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
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
      lineNumber: 158,
      columnNumber: 25
    }
  }), __jsx("label", {
    htmlFor: "radio-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 25
    }
  }), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 25
    }
  }, "Yes")), __jsx("div", {
    className: "radio__2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
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
      lineNumber: 176,
      columnNumber: 25
    }
  }), __jsx("label", {
    htmlFor: "radio-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 25
    }
  }), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
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
      lineNumber: 197,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "input-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 15
    }
  }, __jsx("fieldset", {
    id: "public",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 17
    }
  }, __jsx("label", {
    className: "title-label",
    htmlFor: "public",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 19
    }
  }, "Visibilty"), __jsx("div", {
    className: "radio",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 19
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Space"], {
    size: 32,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "radio__1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
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
      lineNumber: 206,
      columnNumber: 25
    }
  }), __jsx("label", {
    htmlFor: "radio-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 25
    }
  }), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 25
    }
  }, "Public")), __jsx("div", {
    className: "radio__2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
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
      lineNumber: 224,
      columnNumber: 25
    }
  }), __jsx("label", {
    htmlFor: "radio-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 25
    }
  }), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
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
      lineNumber: 246,
      columnNumber: 13
    }
  }, __jsx("label", {
    className: "title-label",
    htmlFor: "tags",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 15
    }
  }, "Tags"), __jsx(_components_forms_Tags__WEBPACK_IMPORTED_MODULE_11__["default"], {
    storyInfo: storyInfo,
    tags: storyInfo.tags,
    setTags: setStoryInfo,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 15
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Divider"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 11
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    lg: 12,
    md: 12,
    sm: 24,
    xs: 24,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Form"].Item, {
    label: "Main Characters",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "input-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 19
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    span: 22,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
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
      lineNumber: 264,
      columnNumber: 23
    }
  }, __jsx("option", {
    value: "",
    selected: true,
    disabled: true,
    hidden: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 25
    }
  }, "Choose"), (_props$characters = props.characters) === null || _props$characters === void 0 ? void 0 : _props$characters.filter(function (c) {
    return !storyInfo.mainCharacters.includes(c.id);
  }).map(function (_char) {
    return __jsx("option", {
      key: _char.id,
      value: _char.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 277,
        columnNumber: 29
      }
    }, "".concat(_char.firstname, " ").concat(_char.lastname));
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    span: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "form-input select-add-input-iconbox",
    onClick: addCharacter,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 23
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 25
    }
  }, "+"))), __jsx("small", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 21
    }
  }, "You can add up to 5 main characters"))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    lg: 12,
    md: 12,
    sm: 24,
    xs: 24,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 13
    }
  }, props.characters.filter(function (c) {
    return storyInfo.mainCharacters.indexOf(c.id) !== -1;
  }).map(function (_char2) {
    return __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 301,
        columnNumber: 19
      }
    }, "".concat(_char2.firstname, " ").concat(_char2.lastname), " ", __jsx("span", {
      onClick: function onClick() {
        return removeCharacter(_char2.id);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 303,
        columnNumber: 21
      }
    }, "x"));
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Divider"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 11
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    align: "bottom",
    gutter: [24, 24],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    md: 12,
    sm: 24,
    xs: 24,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "input-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 15
    }
  }, __jsx("label", {
    htmlFor: "image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 17
    }
  }, "Upload a cover"), __jsx(_components_forms_UploadImage__WEBPACK_IMPORTED_MODULE_12__["default"], {
    storyInfo: storyInfo,
    onChangeFunc: setStoryInfo,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
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
      lineNumber: 320,
      columnNumber: 13
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Divider"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336,
      columnNumber: 11
    }
  }), __jsx("button", {
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3RvcnkvbmV3LmpzIl0sIm5hbWVzIjpbIm5ld1N0b3J5IiwicHJvcHMiLCJSZWFjdCIsInVzZVN0YXRlIiwidGl0bGUiLCJjYXRlZ29yaWVzIiwibGFuZ3VhZ2UiLCJzdGF0dXMiLCJjb3B5cmlnaHQiLCJzdW1tYXJ5IiwibWF0dXJlIiwidGFncyIsIm1haW5DaGFyYWN0ZXJzIiwic2Vjb25kYXJ5Q2hhcmFjdGVycyIsImltYWdlIiwiaW1hZ2VDb3B5cmlnaHQiLCJzdG9yeUluZm8iLCJzZXRTdG9yeUluZm8iLCJjdXJyZW50Q2hhciIsInNldEN1cnJlbnRDaGFyIiwiYXV0aCIsInVzZUF1dGgiLCJ1c2VFZmZlY3QiLCJ1c2VyIiwiZ2V0VXNlckNoYXJhY3RlcnMiLCJhZGRDaGFyYWN0ZXIiLCJpbmRleE9mIiwicmVtb3ZlQ2hhcmFjdGVyIiwiaWQiLCJmaWx0ZXIiLCJjIiwiY29uc29sZSIsImxvZyIsIkNBVEVHT1JJRVMiLCJMQU5HVUFHRVMiLCJTVEFUVVMiLCJDT1BZUklHSFRTIiwiZSIsInRhcmdldCIsInZhbHVlIiwiY2hhcmFjdGVycyIsImluY2x1ZGVzIiwibWFwIiwiY2hhciIsImZpcnN0bmFtZSIsImxhc3RuYW1lIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJ1c2VyQ2hhcmFjdGVycyIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBTUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBOztBQUFBLHdCQUNRQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWU7QUFDL0NDLFNBQUssRUFBRSxFQUR3QztBQUUvQ0MsY0FBVSxFQUFFLEVBRm1DO0FBRy9DQyxZQUFRLEVBQUUsRUFIcUM7QUFJL0NDLFVB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LFNBRGI7QUFFRSxnQkFBWSxFQUFFQyxZQUZoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixDQURGLEVBV0UsTUFBQyxnRUFBRDtBQUNFLFlBQVEsRUFBRSxLQURaO0FBRUUsTUFBRSxFQUFFLEVBRk47QUFHRSxNQUFFLEVBQUUsRUFITjtBQUlFLE1BQUUsRUFBRSxFQUpOO0FBS0UsTUFBRSxFQUFFLEVBTE47QUFNRSxNQUFFLEVBQUMsT0FOTDtBQU9FLFFBQUksRUFBQyxNQVBQO0FBUUUsUUFBSSxFQUFDLE9BUlA7QUFTRSxTQUFLLEVBQUMsOEJBVFI7QUFVRSxlQUFXLEVBQUMsRUFWZDtBQVdFLFNBQUssRUFBRUQsU0FBUyxDQUFDRixLQVhuQjtBQVlFLGdCQUFZLEVBQUVHLFlBWmhCO0FBYUUsYUFBUyxFQUFFRCxTQWJiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFYRixDQXBQRixFQStRRSxNQUFDLDRDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUEvUUYsRUFnUkU7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBaFJGLENBRkYsQ0FERixDQURGO0FBeVJELENBblVEOztHQUFNaEIsUTtVQWlCU3FCLHdEOzs7QUFvVGYsSUFBTXlCLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDbENQLGNBQVUsRUFBRU8sS0FBSyxDQUFDUCxVQUFOLENBQWlCUTtBQURLLEdBQVo7QUFBQSxDQUF4Qjs7QUFJZUMsMEhBQU8sQ0FBQ0gsZUFBRCxFQUFrQjtBQUFFdEIsbUJBQWlCLEVBQWpCQSxrRkFBaUJBO0FBQW5CLENBQWxCLENBQVAsQ0FBZ0R4QixRQUFoRCxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3N0b3J5L25ldy5iZGJhNWU5ZDY0NDgyZmM0YzI4OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBSb3csIENvbCwgU3BhY2UsIERpdmlkZXIsIEZvcm0gfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIENBVEVHT1JJRVMsXHJcbiAgQ09QWVJJR0hUUyxcclxuICBMQU5HVUFHRVMsXHJcbiAgU1RBVFVTLFxyXG59IGZyb20gXCIuLi8uLi91dGlscy9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gXCIuLi8uLi9ob29rcy91c2VySG9va3NcIjtcclxuaW1wb3J0IHsgZ2V0VXNlckNoYXJhY3RlcnMgfSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9ucy9jaGFyYWN0ZXJzQWN0aW9uc1wiO1xyXG5cclxuaW1wb3J0IElucHV0R3JvdXAgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvY29tbW9uL0lucHV0XCI7XHJcbmltcG9ydCBTZWxlY3RHcm91cCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jb21tb24vU2VsZWN0XCI7XHJcbmltcG9ydCBUYWdzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2Zvcm1zL1RhZ3NcIjtcclxuaW1wb3J0IFVwbG9hZEltYWdlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2Zvcm1zL1VwbG9hZEltYWdlXCI7XHJcblxyXG5jb25zdCBuZXdTdG9yeSA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtzdG9yeUluZm8sIHNldFN0b3J5SW5mb10gPSBSZWFjdC51c2VTdGF0ZSh7XHJcbiAgICB0aXRsZTogXCJcIixcclxuICAgIGNhdGVnb3JpZXM6IFtdLFxyXG4gICAgbGFuZ3VhZ2U6IFwiXCIsXHJcbiAgICBzdGF0dXM6IFwiXCIsXHJcbiAgICBjb3B5cmlnaHQ6IFwiXCIsXHJcbiAgICBzdW1tYXJ5OiBcIlwiLFxyXG4gICAgbWF0dXJlOiBmYWxzZSxcclxuICAgIHB1YmxpYzogdHJ1ZSxcclxuICAgIHRhZ3M6IFtdLFxyXG4gICAgbWFpbkNoYXJhY3RlcnM6IFtdLFxyXG4gICAgc2Vjb25kYXJ5Q2hhcmFjdGVyczogW10sXHJcbiAgICBpbWFnZTogXCJcIixcclxuICAgIGltYWdlQ29weXJpZ2h0OiBcIlwiLFxyXG4gIH0pO1xyXG4gIGNvbnN0IFtjdXJyZW50Q2hhciwgc2V0Q3VycmVudENoYXJdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgYXV0aCA9IHVzZUF1dGgoKTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChhdXRoLnVzZXIpIHtcclxuICAgICAgcHJvcHMuZ2V0VXNlckNoYXJhY3RlcnMoKTtcclxuICAgIH1cclxuICB9LCBbYXV0aF0pO1xyXG5cclxuICBjb25zdCBhZGRDaGFyYWN0ZXIgPSAoKSA9PiB7XHJcbiAgICBpZiAoY3VycmVudENoYXIgJiYgc3RvcnlJbmZvLm1haW5DaGFyYWN0ZXJzLmluZGV4T2YoY3VycmVudENoYXIpID09PSAtMSkge1xyXG4gICAgICBzZXRTdG9yeUluZm8oe1xyXG4gICAgICAgIC4uLnN0b3J5SW5mbyxcclxuICAgICAgICBtYWluQ2hhcmFjdGVyczogWy4uLnN0b3J5SW5mby5tYWluQ2hhcmFjdGVycywgY3VycmVudENoYXJdLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCByZW1vdmVDaGFyYWN0ZXIgPSAoaWQpID0+IHtcclxuICAgIHNldFN0b3J5SW5mbyh7XHJcbiAgICAgIC4uLnN0b3J5SW5mbyxcclxuICAgICAgbWFpbkNoYXJhY3RlcnM6IHN0b3J5SW5mby5tYWluQ2hhcmFjdGVycy5maWx0ZXIoKGMpID0+IGMgIT09IGlkKSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnNvbGUubG9nKHN0b3J5SW5mby5tYWluQ2hhcmFjdGVycyk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3LXN0b3J5IGN1c3RvbS1mb3JtXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXJcIj5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwic2lkZS1oZWFkaW5nXCI+QWRkIGEgbmV3IHN0b3J5PC9oMj5cclxuICAgICAgICA8Rm9ybSBsYXlvdXQ9XCJ2ZXJ0aWNhbFwiIGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgIDxSb3cgZ3V0dGVyPXtbMjQsIDI0XX0+XHJcbiAgICAgICAgICAgIDxJbnB1dEdyb3VwXHJcbiAgICAgICAgICAgICAgcmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgc209ezI0fVxyXG4gICAgICAgICAgICAgIHhzPXsyNH1cclxuICAgICAgICAgICAgICBtZD17MTh9XHJcbiAgICAgICAgICAgICAgbGc9ezE4fVxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBuYW1lPVwidGl0bGVcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgYSB0aXRsZVwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3N0b3J5SW5mby50aXRsZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZUZ1bmM9e3NldFN0b3J5SW5mb31cclxuICAgICAgICAgICAgICBzdG9yeUluZm89e3N0b3J5SW5mb31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFNlbGVjdEdyb3VwXHJcbiAgICAgICAgICAgICAgc209ezI0fVxyXG4gICAgICAgICAgICAgIHhzPXsyNH1cclxuICAgICAgICAgICAgICBsZz17Nn1cclxuICAgICAgICAgICAgICBtZD17Nn1cclxuICAgICAgICAgICAgICBuYW1lPVwiY2F0ZWdvcmllc1wiXHJcbiAgICAgICAgICAgICAgb3B0aW9ucz17Q0FURUdPUklFU31cclxuICAgICAgICAgICAgICB2YWx1ZT17c3RvcnlJbmZvLmNhdGVnb3JpZXN9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2VGdW5jPXtzZXRTdG9yeUluZm99XHJcbiAgICAgICAgICAgICAgc3RvcnlJbmZvPXtzdG9yeUluZm99XHJcbiAgICAgICAgICAgICAgdHlwZT1cIm11bHRpcGxlXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgPFJvdyBndXR0ZXI9e1syNCwgMjRdfT5cclxuICAgICAgICAgICAgPFNlbGVjdEdyb3VwXHJcbiAgICAgICAgICAgICAgbWQ9ezh9XHJcbiAgICAgICAgICAgICAgc209ezI0fVxyXG4gICAgICAgICAgICAgIHhzPXsyNH1cclxuICAgICAgICAgICAgICBsZz17OH1cclxuICAgICAgICAgICAgICBuYW1lPVwibGFuZ3VhZ2VcIlxyXG4gICAgICAgICAgICAgIG9wdGlvbnM9e0xBTkdVQUdFU31cclxuICAgICAgICAgICAgICB2YWx1ZT17c3RvcnlJbmZvLmxhbmd1YWdlfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlRnVuYz17c2V0U3RvcnlJbmZvfVxyXG4gICAgICAgICAgICAgIHN0b3J5SW5mbz17c3RvcnlJbmZvfVxyXG4gICAgICAgICAgICAgIHR5cGU9XCJzaW5nbGVcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8U2VsZWN0R3JvdXBcclxuICAgICAgICAgICAgICBtZD17OH1cclxuICAgICAgICAgICAgICBzbT17MjR9XHJcbiAgICAgICAgICAgICAgeHM9ezI0fVxyXG4gICAgICAgICAgICAgIGxnPXs4fVxyXG4gICAgICAgICAgICAgIG5hbWU9XCJzdGF0dXNcIlxyXG4gICAgICAgICAgICAgIG9wdGlvbnM9e1NUQVRVU31cclxuICAgICAgICAgICAgICBpbmZvPXtcImluZm8gYWJvdXQgc3RhdHVzXCJ9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e3N0b3J5SW5mby5zdGF0dXN9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2VGdW5jPXtzZXRTdG9yeUluZm99XHJcbiAgICAgICAgICAgICAgc3RvcnlJbmZvPXtzdG9yeUluZm99XHJcbiAgICAgICAgICAgICAgdHlwZT1cInNpbmdsZVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxTZWxlY3RHcm91cFxyXG4gICAgICAgICAgICAgIG1kPXs4fVxyXG4gICAgICAgICAgICAgIHNtPXsyNH1cclxuICAgICAgICAgICAgICB4cz17MjR9XHJcbiAgICAgICAgICAgICAgbGc9ezh9XHJcbiAgICAgICAgICAgICAgbmFtZT1cImNvcHlyaWdodFwiXHJcbiAgICAgICAgICAgICAgb3B0aW9ucz17Q09QWVJJR0hUU31cclxuICAgICAgICAgICAgICBpbmZvPXtcImluZm8gYWJvdXQgY29weXJpZ2h0XCJ9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e3N0b3J5SW5mby5jb3B5cmlnaHR9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2VGdW5jPXtzZXRTdG9yeUluZm99XHJcbiAgICAgICAgICAgICAgc3RvcnlJbmZvPXtzdG9yeUluZm99XHJcbiAgICAgICAgICAgICAgdHlwZT1cInNpbmdsZVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzdW1tYXJ5XCI+U3VtbWFyeTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgIHJvd3M9XCI1XCJcclxuICAgICAgICAgICAgICBuYW1lPVwic3VtbWFyeVwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJzdW1tYXJ5XCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWlucHV0XCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlN1bW1hcml6ZSB5b3VyIHN0b3J5IGhlcmVcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtzdG9yeUluZm8uc3VtbWFyeX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XHJcbiAgICAgICAgICAgICAgICBzZXRTdG9yeUluZm8oeyAuLi5zdG9yeUluZm8sIHN1bW1hcnk6IGUudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+PC90ZXh0YXJlYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPFJvdyBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiIGd1dHRlcj17WzI0LCAyNF19PlxyXG4gICAgICAgICAgICA8Q29sIGxnPXs0fSBtZD17OH0gc209ezEyfSB4cz17MjR9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxmaWVsZHNldCBpZD1cIm1hdHVyZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGl0bGUtbGFiZWxcIiBodG1sRm9yPVwicHVibGljXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgTWF0dXJlIGNvbnRlbnRcclxuICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmFkaW9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8U3BhY2Ugc2l6ZT17MzJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYWRpb19fMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInJhZGlvLTFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm1hdHVyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTdG9yeUluZm8oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5zdG9yeUluZm8sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdHVyZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3N0b3J5SW5mby5tYXR1cmUgPyB0cnVlIDogZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicmFkaW8tMVwiPjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlllczwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmFkaW9fXzJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJyYWRpby0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJtYXR1cmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFN0b3J5SW5mbyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnN0b3J5SW5mbyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0dXJlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3N0b3J5SW5mby5tYXR1cmUgPyBmYWxzZSA6IHRydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicmFkaW8tMlwiPjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPk5vPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TcGFjZT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPENvbCBsZz17NH0gbWQ9ezh9IHNtPXsxMn0geHM9ezI0fT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8ZmllbGRzZXQgaWQ9XCJwdWJsaWNcIj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRpdGxlLWxhYmVsXCIgaHRtbEZvcj1cInB1YmxpY1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIFZpc2liaWx0eVxyXG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhZGlvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNwYWNlIHNpemU9ezMyfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmFkaW9fXzFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJyYWRpby0zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwdWJsaWNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3RvcnlJbmZvKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uc3RvcnlJbmZvLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdWJsaWM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtzdG9yeUluZm8ucHVibGljID8gdHJ1ZSA6IGZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInJhZGlvLTNcIj48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5QdWJsaWM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhZGlvX18yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicmFkaW8tNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicHVibGljXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTdG9yeUluZm8oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5zdG9yeUluZm8sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB1YmxpYzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtzdG9yeUluZm8ucHVibGljID8gZmFsc2UgOiB0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInJhZGlvLTRcIj48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5Qcml2YXRlPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TcGFjZT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuXHJcbiAgICAgICAgICAgIDxDb2wgbGc9ezh9IG1kPXsxMn0gc209ezI0fSB4cz17MjR9PlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0aXRsZS1sYWJlbFwiIGh0bWxGb3I9XCJ0YWdzXCI+XHJcbiAgICAgICAgICAgICAgICBUYWdzXHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8VGFnc1xyXG4gICAgICAgICAgICAgICAgc3RvcnlJbmZvPXtzdG9yeUluZm99XHJcbiAgICAgICAgICAgICAgICB0YWdzPXtzdG9yeUluZm8udGFnc31cclxuICAgICAgICAgICAgICAgIHNldFRhZ3M9e3NldFN0b3J5SW5mb31cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgIDxDb2wgbGc9ezEyfSBtZD17MTJ9IHNtPXsyNH0geHM9ezI0fT5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwiTWFpbiBDaGFyYWN0ZXJzXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBzcGFuPXsyMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q3VycmVudENoYXIoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWlucHV0IHNlbGVjdC1hZGQtaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibWFpbkNoYXJhY3RlcnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCIgc2VsZWN0ZWQgZGlzYWJsZWQgaGlkZGVuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIENob29zZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmNoYXJhY3RlcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/LmZpbHRlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjKSA9PiAhc3RvcnlJbmZvLm1haW5DaGFyYWN0ZXJzLmluY2x1ZGVzKGMuaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKGNoYXIpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtjaGFyLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y2hhci5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID57YCR7Y2hhci5maXJzdG5hbWV9ICR7Y2hhci5sYXN0bmFtZX1gfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBzcGFuPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1pbnB1dCBzZWxlY3QtYWRkLWlucHV0LWljb25ib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXthZGRDaGFyYWN0ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPis8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8c21hbGw+WW91IGNhbiBhZGQgdXAgdG8gNSBtYWluIGNoYXJhY3RlcnM8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPENvbCBsZz17MTJ9IG1kPXsxMn0gc209ezI0fSB4cz17MjR9PlxyXG4gICAgICAgICAgICAgIHtwcm9wcy5jaGFyYWN0ZXJzXHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyKChjKSA9PiBzdG9yeUluZm8ubWFpbkNoYXJhY3RlcnMuaW5kZXhPZihjLmlkKSAhPT0gLTEpXHJcbiAgICAgICAgICAgICAgICAubWFwKChjaGFyKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIHtgJHtjaGFyLmZpcnN0bmFtZX0gJHtjaGFyLmxhc3RuYW1lfWB9e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHJlbW92ZUNoYXJhY3RlcihjaGFyLmlkKX0+eDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgPFJvdyBhbGlnbj1cImJvdHRvbVwiIGd1dHRlcj17WzI0LCAyNF19PlxyXG4gICAgICAgICAgICA8Q29sIG1kPXsxMn0gc209ezI0fSB4cz17MjR9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW1hZ2VcIj5VcGxvYWQgYSBjb3ZlcjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8VXBsb2FkSW1hZ2VcclxuICAgICAgICAgICAgICAgICAgc3RvcnlJbmZvPXtzdG9yeUluZm99XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlRnVuYz17c2V0U3RvcnlJbmZvfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgICAgICA8SW5wdXRHcm91cFxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICBzbT17MjR9XHJcbiAgICAgICAgICAgICAgeHM9ezI0fVxyXG4gICAgICAgICAgICAgIG1kPXsxMn1cclxuICAgICAgICAgICAgICBsZz17MTJ9XHJcbiAgICAgICAgICAgICAgaWQ9XCJpbWFnZVwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJpbWFnZVwiXHJcbiAgICAgICAgICAgICAgdGl0bGU9XCJPciBzdWJtaXQgYSBsaW5rIHRvIGFuIGltYWdlXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3N0b3J5SW5mby5pbWFnZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZUZ1bmM9e3NldFN0b3J5SW5mb31cclxuICAgICAgICAgICAgICBzdG9yeUluZm89e3N0b3J5SW5mb31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkNyZWF0ZTwvYnV0dG9uPlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG4gIGNoYXJhY3RlcnM6IHN0YXRlLmNoYXJhY3RlcnMudXNlckNoYXJhY3RlcnMsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHsgZ2V0VXNlckNoYXJhY3RlcnMgfSkobmV3U3RvcnkpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9