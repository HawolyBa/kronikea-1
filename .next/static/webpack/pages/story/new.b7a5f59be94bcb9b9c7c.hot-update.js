webpackHotUpdate_N_E("pages/story/new",{

/***/ "./pages/story/new.js":
/*!****************************!*\
  !*** ./pages/story/new.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var is_image_url__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! is-image-url */ "./node_modules/is-image-url/index.js");
/* harmony import */ var is_image_url__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(is_image_url__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/constants */ "./utils/constants.js");
/* harmony import */ var _hooks_userHooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hooks/userHooks */ "./hooks/userHooks.js");
/* harmony import */ var _redux_actions_charactersActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../redux/actions/charactersActions */ "./redux/actions/charactersActions.js");
/* harmony import */ var _redux_actions_storiesActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../redux/actions/storiesActions */ "./redux/actions/storiesActions.js");
/* harmony import */ var _components_forms_Tags__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/forms/Tags */ "./components/forms/Tags.js");
/* harmony import */ var _components_forms_UploadImage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/forms/UploadImage */ "./components/forms/UploadImage.js");
/* harmony import */ var _components_common_Loader__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/common/Loader */ "./components/common/Loader.js");
/* harmony import */ var _components_forms_RadioButton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/forms/RadioButton */ "./components/forms/RadioButton.js");




var _this = undefined,
    _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\pages\\story\\new.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }














var Option = antd__WEBPACK_IMPORTED_MODULE_4__["Select"].Option;

var NewStory = function NewStory(props) {
  _s();

  var _form$getFieldValue3, _props$characters$fil;

  var auth = Object(_hooks_userHooks__WEBPACK_IMPORTED_MODULE_9__["useAuth"])();

  var _Form$useForm = antd__WEBPACK_IMPORTED_MODULE_4__["Form"].useForm(),
      _Form$useForm2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState, 2),
      linkVisible = _React$useState2[0],
      setLinkVisible = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(false),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState3, 2),
      uploadVisible = _React$useState4[0],
      setUploadVisible = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(false),
      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState5, 2),
      mature = _React$useState6[0],
      setMature = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(true),
      _React$useState8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState7, 2),
      visibility = _React$useState8[0],
      setVisibility = _React$useState8[1];

  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(""),
      _React$useState10 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState9, 2),
      currentChar = _React$useState10[0],
      setCurrentChar = _React$useState10[1];

  var addCharacter = function addCharacter() {
    var _form$getFieldValue, _form$getFieldValue2;

    if (currentChar && ((_form$getFieldValue = form.getFieldValue("mainCharacters")) === null || _form$getFieldValue === void 0 ? void 0 : _form$getFieldValue.indexOf(currentChar)) === -1 && ((_form$getFieldValue2 = form.getFieldValue("mainCharacters")) === null || _form$getFieldValue2 === void 0 ? void 0 : _form$getFieldValue2.length) < 5) {
      form.setFieldsValue({
        mainCharacters: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(form.getFieldValue("mainCharacters")), [currentChar])
      });
    }

    setCurrentChar("");
    form.setFieldsValue({
      currentChar: ""
    });
  };

  var submit = function submit(values) {
    delete values.currentChar;
    props.addStory(_objectSpread(_objectSpread({}, values), {}, {
      authorName: auth.user.username,
      banner: form.getFieldValue("banner") ? form.getFieldValue("banner") : ""
    }));
  };

  var onFailed = function onFailed(error) {
    var errorName = error.errorFields[0].name.toString();
    window.scrollTo(0, 0);
  };

  react__WEBPACK_IMPORTED_MODULE_3___default.a.useEffect(function () {
    if (auth.user) {
      props.getUserCharacters();
    }
  }, [auth]);
  react__WEBPACK_IMPORTED_MODULE_3___default.a.useEffect(function () {
    form.setFieldsValue({
      mature: mature
    });
  }, [mature]);
  react__WEBPACK_IMPORTED_MODULE_3___default.a.useEffect(function () {
    form.setFieldsValue({
      "public": visibility
    });
  }, [visibility]);

  var filterSort = function filterSort(a, b) {
    var keyA = a.name,
        keyB = b.name;
    if (keyA < keyB) return -1;
    if (keyA > keyB) return 1;
    return 0;
  };

  var showLink = function showLink() {
    form.setFieldsValue({
      banner: null
    });
    setLinkVisible(true);
    setUploadVisible(false);
  };

  var showUpload = function showUpload() {
    form.setFieldsValue({
      banner: null
    });
    setLinkVisible(false);
    setUploadVisible(true);
  };

  return auth.isLoading ? __jsx(_components_common_Loader__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 5
    }
  }) : auth.user.uid ? __jsx("div", {
    className: "new-story custom-form",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }
  }, __jsx("h2", {
    className: "side-heading",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 9
    }
  }, "Add a new story"), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Form"], {
    layout: "vertical",
    scrollToFirstError: true,
    onFinishFailed: onFailed,
    onFinish: submit,
    form: form,
    initialValues: {
      summary: "",
      mature: false,
      "public": true,
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
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    gutter: [24, 24],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    sm: 24,
    xs: 24,
    md: 18,
    lg: 18,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Form"].Item, {
    colon: false,
    name: "title",
    rules: [{
      required: true,
      message: "A title is required"
    }, {
      max: 65
    }],
    label: "Title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 17
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    sm: 24,
    xs: 24,
    lg: 6,
    md: 6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Form"].Item, {
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
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Select"], {
    mode: "multiple",
    allowClear: true,
    maxTagCount: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 17
    }
  }, _utils_constants__WEBPACK_IMPORTED_MODULE_8__["CATEGORIES"] === null || _utils_constants__WEBPACK_IMPORTED_MODULE_8__["CATEGORIES"] === void 0 ? void 0 : _utils_constants__WEBPACK_IMPORTED_MODULE_8__["CATEGORIES"].sort(function (a, b) {
    var keyA = a.name,
        keyB = b.name; // Compare the 2 dates

    if (keyA < keyB) return -1;
    if (keyA > keyB) return 1;
    return 0;
  }).map(function (cat) {
    return __jsx(Option, {
      value: cat.value,
      key: cat.value,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 21
      }
    }, cat.name);
  }))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    gutter: [24, 24],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    md: 8,
    sm: 24,
    xs: 24,
    lg: 8,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Form"].Item, {
    name: "language",
    label: "Language",
    rules: [{
      required: true,
      message: "A language is required"
    }],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Select"], {
    filterSort: filterSort,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 17
    }
  }, _utils_constants__WEBPACK_IMPORTED_MODULE_8__["LANGUAGES"] === null || _utils_constants__WEBPACK_IMPORTED_MODULE_8__["LANGUAGES"] === void 0 ? void 0 : _utils_constants__WEBPACK_IMPORTED_MODULE_8__["LANGUAGES"].map(function (lang) {
    return __jsx(Option, {
      value: lang.value,
      key: lang.value,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 21
      }
    }, lang.name);
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    md: 8,
    sm: 24,
    xs: 24,
    lg: 8,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Form"].Item, {
    name: "status",
    label: "Status",
    rules: [{
      required: true,
      message: "A status is required"
    }],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Select"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 17
    }
  }, _utils_constants__WEBPACK_IMPORTED_MODULE_8__["STATUS"].map(function (stat) {
    return __jsx(Option, {
      value: stat.value,
      key: stat.value,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 21
      }
    }, stat.name);
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    md: 8,
    sm: 24,
    xs: 24,
    lg: 8,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Form"].Item, {
    name: "copyright",
    label: "Copyright",
    rules: [{
      required: true,
      message: "A copyright is required"
    }],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Select"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 17
    }
  }, _utils_constants__WEBPACK_IMPORTED_MODULE_8__["COPYRIGHTS"].map(function (copy) {
    return __jsx(Option, {
      value: copy.value,
      key: copy.value,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 21
      }
    }, copy.name);
  }))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Form"].Item, {
    label: "Summary",
    name: "summary",
    rules: [{
      max: 180,
      message: "Your summary cannot exceed 180 characters"
    }],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Input"].TextArea, {
    autoSize: {
      minRows: 5
    },
    showCount: true,
    maxLength: 180,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 13
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    justify: "space-between",
    gutter: [24, 24],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 11
    }
  }, __jsx(_components_forms_RadioButton__WEBPACK_IMPORTED_MODULE_15__["default"], {
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
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 13
    }
  }), __jsx(_components_forms_RadioButton__WEBPACK_IMPORTED_MODULE_15__["default"], {
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
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 13
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    lg: 8,
    md: 12,
    sm: 24,
    xs: 24,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 13
    }
  }, __jsx(_components_forms_Tags__WEBPACK_IMPORTED_MODULE_12__["default"], {
    form: form,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 15
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Divider"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 11
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Form"].Item, {
    name: "mainCharacters",
    label: "Main Characters",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    gutter: [24, 24],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    lg: 12,
    md: 24,
    sm: 24,
    xs: 24,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    gutter: 16,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    span: 22,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 19
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Form"].Item, {
    name: "currentChar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 21
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Select"], {
    disabled: ((_form$getFieldValue3 = form.getFieldValue("mainCharacters")) === null || _form$getFieldValue3 === void 0 ? void 0 : _form$getFieldValue3.length) >= 5 ? true : false,
    onChange: function onChange(val) {
      return setCurrentChar(val);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 23
    }
  }, __jsx(Option, {
    value: "none",
    disabled: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 25
    }
  }, "Choose"), (_props$characters$fil = props.characters.filter(function (c) {
    var _form$getFieldValue4;

    return ((_form$getFieldValue4 = form.getFieldValue("mainCharacters")) === null || _form$getFieldValue4 === void 0 ? void 0 : _form$getFieldValue4.indexOf(c.id)) === -1;
  })) === null || _props$characters$fil === void 0 ? void 0 : _props$characters$fil.sort(function (a, b) {
    var keyA = a.firstname,
        keyB = b.firstname; // Compare the 2 dates

    if (keyA < keyB) return -1;
    if (keyA > keyB) return 1;
    return 0;
  }).map(function (_char) {
    return __jsx(Option, {
      key: _char.id,
      value: _char.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 328,
        columnNumber: 29
      }
    }, "".concat(_char.firstname, " ").concat(_char.lastname));
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    span: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "select-add-input-iconbox",
    onClick: addCharacter,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337,
      columnNumber: 21
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341,
      columnNumber: 23
    }
  }, "+"))), __jsx("small", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
      columnNumber: 19
    }
  }, "You can add up to 5 main characters"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    lg: 12,
    md: 24,
    sm: 24,
    xs: 24,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    gutter: [16, 24],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348,
      columnNumber: 17
    }
  }, props.characters.filter(function (c) {
    var _form$getFieldValue5;

    return ((_form$getFieldValue5 = form.getFieldValue("mainCharacters")) === null || _form$getFieldValue5 === void 0 ? void 0 : _form$getFieldValue5.indexOf(c.id)) !== -1;
  }).map(function (_char2) {
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
      md: 12,
      sm: 24,
      key: _char2.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 356,
        columnNumber: 23
      }
    }, __jsx("div", {
      key: _char2.id,
      className: "main-selected",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 357,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "main-avatar",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 358,
        columnNumber: 27
      }
    }, __jsx("img", {
      src: _char2.image,
      alt: _char2.firstname,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 359,
        columnNumber: 29
      }
    })), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 361,
        columnNumber: 27
      }
    }, "".concat(_char2.firstname, " ").concat(_char2.lastname), " "), __jsx("ion-icon", {
      onClick: function onClick() {
        return removeCharacter(_char2.id);
      },
      name: "close-circle",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 362,
        columnNumber: 27
      }
    })));
  }))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Divider"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373,
      columnNumber: 11
    }
  }), !uploadVisible && !linkVisible && __jsx("div", {
    className: "upload-btns",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 375,
      columnNumber: 13
    }
  }, __jsx("button", {
    onClick: showUpload,
    type: "button",
    className: "upload-btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 376,
      columnNumber: 15
    }
  }, "Upload a cover"), __jsx("button", {
    onClick: showLink,
    type: "button",
    className: "upload-btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 380,
      columnNumber: 15
    }
  }, "Submit a link to a cover")), uploadVisible && __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    align: "bottom",
    gutter: [24, 24],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 386,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    md: 12,
    sm: 24,
    xs: 24,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 387,
      columnNumber: 15
    }
  }, __jsx(_components_forms_UploadImage__WEBPACK_IMPORTED_MODULE_13__["default"], {
    form: form,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388,
      columnNumber: 17
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    md: 12,
    sm: 24,
    xs: 24,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 390,
      columnNumber: 15
    }
  }, __jsx("button", {
    onClick: showLink,
    type: "button",
    className: "upload-btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391,
      columnNumber: 17
    }
  }, "OR Submit a link to a cover"))), linkVisible && __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    align: "bottom",
    gutter: [24, 24],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 398,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    sm: 24,
    xs: 24,
    md: 12,
    lg: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Form"].Item, {
    rules: [{
      type: "url",
      message: "This field must be a valid url."
    }, function () {
      return {
        validator: function validator(_, value) {
          if (is_image_url__WEBPACK_IMPORTED_MODULE_7___default()(value)) {
            return Promise.resolve();
          }

          return Promise.reject(new Error("The link needs to be an image"));
        }
      };
    }],
    label: "Submit a link to your image",
    name: "banner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 400,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 420,
      columnNumber: 19
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    md: 12,
    sm: 24,
    xs: 24,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 423,
      columnNumber: 15
    }
  }, __jsx("button", {
    onClick: showUpload,
    type: "button",
    className: "upload-btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 424,
      columnNumber: 17
    }
  }, "Upload a cover"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Divider"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 434,
      columnNumber: 11
    }
  }), props.loading || props.storyId ? __jsx("button", {
    disabled: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 436,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Spin"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 437,
      columnNumber: 15
    }
  })) : __jsx("button", {
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 440,
      columnNumber: 13
    }
  }, "Create")))) : router.push("/auth");
};

_s(NewStory, "wVDBiPa+RQ/DOMGrL2MlV5O0uKE=", false, function () {
  return [_hooks_userHooks__WEBPACK_IMPORTED_MODULE_9__["useAuth"], antd__WEBPACK_IMPORTED_MODULE_4__["Form"].useForm, next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"]];
});

_c = NewStory;

var mapStateToProps = function mapStateToProps(state) {
  return {
    characters: state.characters.userCharacters,
    confirmMessage: state.stories.message,
    storyId: state.stories.storyId,
    loading: state.stories.loadingStory
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps, {
  getUserCharacters: _redux_actions_charactersActions__WEBPACK_IMPORTED_MODULE_10__["getUserCharacters"],
  addStory: _redux_actions_storiesActions__WEBPACK_IMPORTED_MODULE_11__["addStory"]
})(NewStory));

var _c;

$RefreshReg$(_c, "NewStory");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3RvcnkvbmV3LmpzIl0sIm5hbWVzIjpbIk9wdGlvbiIsIlNlbGVjdCIsIk5ld1N0b3J5IiwicHJvcHMiLCJhdXRoIiwidXNlQXV0aCIsIkZvcm0iLCJ1c2VGb3JtIiwiZm9ybSIsInJvdXRlciIsInVzZVJvdXRlciIsIlJlYWN0IiwidXNlU3RhdGUiLCJsaW5rVmlzaWJsZSIsInNldExpbmtWaXNpYmxlIiwidXBsb2FkVmlzaWJsZSIsInNldFVwbG9hZFZpc2libGUiLCJtYXR1cmUiLCJzZXRNYXR1cmUiLCJ2aXNpYmlsaXR5Iiwic2V0VmlzaWJpbGl0eSIsImN1cnJlbnRDaGFyIiwic2V0Q3VycmVudENoYXIiLCJhZGRDaGFyYWN0ZXIiLCJnZXRGaWVsZFZhbHVlIiwiaW5kZXhPZiIsImxlbmd0aCIsInNldEZpZWxkc1ZhbHVlIiwibWFpbkNoYXJhY3RlcnMiLCJzdWJtaXQiLCJ2YWx1ZXMiLCJhZGRTdG9yeSIsImF1dGhvck5hbWUiLCJ1c2VyIiwidXNlcm5hbWUiLCJiYW5uZXIiLCJvbkZhaWxlZCIsImVycm9yIiwiZXJyb3JOYW1lIiwiZXJyb3JGaWVsZHMiLCJuYW1lIiwidG9TdHJpbmciLCJ3aW5kb3ciLCJzY3JvbGxUbyIsInVzZUVmZmVjdCIsImdldFVzZXJDaGFyYWN0ZXJzIiwiZmlsdGVyU29ydCIsImEiLCJiIiwia2V5QSIsImtleUIiLCJzaG93TGluayIsInNob3dVcGxvYWQiLCJpc0xvYWRpbmciLCJ1aWQiLCJzdW1tYXJ5IiwidGFncyIsInRpdGxlIiwiY2F0ZWdvcmllcyIsImNvcHlyaWdodCIsImxhbmd1YWdlIiwic3RhdHVzIiwiaW1hZ2VDb3B5cmlnaHQiLCJyZXF1aXJlZCIsIm1lc3NhZ2UiLCJtYXgiLCJ0eXBlIiwiQ0FURUdPUklFUyIsInNvcnQiLCJtYXAiLCJjYXQiLCJ2YWx1ZSIsIkxBTkdVQUdFUyIsImxhbmciLCJTVEFUVVMiLCJzdGF0IiwiQ09QWVJJR0hUUyIsImNvcHkiLCJtaW5Sb3dzIiwidmFsIiwiY2hhcmFjdGVycyIsImZpbHRlciIsImMiLCJpZCIsImZpcnN0bmFtZSIsImNoYXIiLCJsYXN0bmFtZSIsImltYWdlIiwicmVtb3ZlQ2hhcmFjdGVyIiwidmFsaWRhdG9yIiwiXyIsImlzSW1hZ2VVcmwiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIkVycm9yIiwibG9hZGluZyIsInN0b3J5SWQiLCJwdXNoIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJ1c2VyQ2hhcmFjdGVycyIsImNvbmZpcm1NZXNzYWdlIiwic3RvcmllcyIsImxvYWRpbmdTdG9yeSIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQVdBO0FBQ0E7QUFDQTtBQUVBO0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7SUFFUUEsTSxHQUFXQywyQyxDQUFYRCxNOztBQUVSLElBQU1FLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBOztBQUMxQixNQUFNQyxJQUFJLEdBQUdDLGdFQUFPLEVBQXBCOztBQUQwQixzQkFFWEMseUNBQUksQ0FBQ0MsT0FBTCxFQUZXO0FBQUE7QUFBQSxNQUVuQkMsSUFGbUI7O0FBRzFCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBSDBCLHdCQUlZQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsS0FBZixDQUpaO0FBQUE7QUFBQSxNQUluQkMsV0FKbUI7QUFBQSxNQUlOQyxjQUpNOztBQUFBLHlCQUtnQkgsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEtBQWYsQ0FMaEI7QUFBQTtBQUFBLE1BS25CRyxhQUxtQjtBQUFBLE1BS0pDLGdCQUxJOztBQUFBLHlCQU1FTCw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsS0FBZixDQU5GO0FBQUE7QUFBQSxNQU1uQkssTUFObUI7QUFBQSxNQU1YQyxTQU5XOztBQUFBLHlCQU9VUCw0Q0FB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LENBREUsR0FrVkZ4RixNQUFNLENBQUN5RixJQUFQLENBQVksT0FBWixDQXBWRjtBQXNWRCxDQTlaRDs7R0FBTWhHLFE7VUFDU0csd0QsRUFDRUMseUNBQUksQ0FBQ0MsTyxFQUNMRyxxRDs7O0tBSFhSLFE7O0FBZ2FOLElBQU1pRyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ2xDcEIsY0FBVSxFQUFFb0IsS0FBSyxDQUFDcEIsVUFBTixDQUFpQnFCLGNBREs7QUFFbENDLGtCQUFjLEVBQUVGLEtBQUssQ0FBQ0csT0FBTixDQUFjdkMsT0FGSTtBQUdsQ2lDLFdBQU8sRUFBRUcsS0FBSyxDQUFDRyxPQUFOLENBQWNOLE9BSFc7QUFJbENELFdBQU8sRUFBRUksS0FBSyxDQUFDRyxPQUFOLENBQWNDO0FBSlcsR0FBWjtBQUFBLENBQXhCOztBQU9lQywwSEFBTyxDQUFDTixlQUFELEVBQWtCO0FBQUV0RCxtQkFBaUIsRUFBakJBLG1GQUFGO0FBQXFCZCxVQUFRLEVBQVJBLHVFQUFRQTtBQUE3QixDQUFsQixDQUFQLENBQ2I3QixRQURhLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3RvcnkvbmV3LmI3YTVmNTliZTk0YmNiOWI5YzdjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgUm93LFxyXG4gIENvbCxcclxuICBTcGFjZSxcclxuICBEaXZpZGVyLFxyXG4gIEZvcm0sXHJcbiAgU3BpbixcclxuICBtZXNzYWdlLFxyXG4gIElucHV0LFxyXG4gIFNlbGVjdCxcclxufSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgaXNJbWFnZVVybCBmcm9tIFwiaXMtaW1hZ2UtdXJsXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIENBVEVHT1JJRVMsXHJcbiAgQ09QWVJJR0hUUyxcclxuICBMQU5HVUFHRVMsXHJcbiAgU1RBVFVTLFxyXG59IGZyb20gXCIuLi8uLi91dGlscy9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gXCIuLi8uLi9ob29rcy91c2VySG9va3NcIjtcclxuaW1wb3J0IHsgZ2V0VXNlckNoYXJhY3RlcnMgfSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9ucy9jaGFyYWN0ZXJzQWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBhZGRTdG9yeSB9IGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25zL3N0b3JpZXNBY3Rpb25zXCI7XHJcblxyXG5pbXBvcnQgVGFncyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9mb3Jtcy9UYWdzXCI7XHJcbmltcG9ydCBVcGxvYWRJbWFnZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9mb3Jtcy9VcGxvYWRJbWFnZVwiO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2NvbW1vbi9Mb2FkZXJcIjtcclxuaW1wb3J0IFJhZGlvQnV0dG9uIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2Zvcm1zL1JhZGlvQnV0dG9uXCI7XHJcblxyXG5jb25zdCB7IE9wdGlvbiB9ID0gU2VsZWN0O1xyXG5cclxuY29uc3QgTmV3U3RvcnkgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBhdXRoID0gdXNlQXV0aCgpO1xyXG4gIGNvbnN0IFtmb3JtXSA9IEZvcm0udXNlRm9ybSgpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFtsaW5rVmlzaWJsZSwgc2V0TGlua1Zpc2libGVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt1cGxvYWRWaXNpYmxlLCBzZXRVcGxvYWRWaXNpYmxlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbWF0dXJlLCBzZXRNYXR1cmVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt2aXNpYmlsaXR5LCBzZXRWaXNpYmlsaXR5XSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtjdXJyZW50Q2hhciwgc2V0Q3VycmVudENoYXJdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IGFkZENoYXJhY3RlciA9ICgpID0+IHtcclxuICAgIGlmIChcclxuICAgICAgY3VycmVudENoYXIgJiZcclxuICAgICAgZm9ybS5nZXRGaWVsZFZhbHVlKFwibWFpbkNoYXJhY3RlcnNcIik/LmluZGV4T2YoY3VycmVudENoYXIpID09PSAtMSAmJlxyXG4gICAgICBmb3JtLmdldEZpZWxkVmFsdWUoXCJtYWluQ2hhcmFjdGVyc1wiKT8ubGVuZ3RoIDwgNVxyXG4gICAgKSB7XHJcbiAgICAgIGZvcm0uc2V0RmllbGRzVmFsdWUoe1xyXG4gICAgICAgIG1haW5DaGFyYWN0ZXJzOiBbLi4uZm9ybS5nZXRGaWVsZFZhbHVlKFwibWFpbkNoYXJhY3RlcnNcIiksIGN1cnJlbnRDaGFyXSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzZXRDdXJyZW50Q2hhcihcIlwiKTtcclxuICAgIGZvcm0uc2V0RmllbGRzVmFsdWUoeyBjdXJyZW50Q2hhcjogXCJcIiB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzdWJtaXQgPSAodmFsdWVzKSA9PiB7XHJcbiAgICBkZWxldGUgdmFsdWVzLmN1cnJlbnRDaGFyO1xyXG4gICAgcHJvcHMuYWRkU3Rvcnkoe1xyXG4gICAgICAuLi52YWx1ZXMsXHJcbiAgICAgIGF1dGhvck5hbWU6IGF1dGgudXNlci51c2VybmFtZSxcclxuICAgICAgYmFubmVyOiBmb3JtLmdldEZpZWxkVmFsdWUoXCJiYW5uZXJcIikgPyBmb3JtLmdldEZpZWxkVmFsdWUoXCJiYW5uZXJcIikgOiBcIlwiLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25GYWlsZWQgPSAoZXJyb3IpID0+IHtcclxuICAgIGNvbnN0IGVycm9yTmFtZSA9IGVycm9yLmVycm9yRmllbGRzWzBdLm5hbWUudG9TdHJpbmcoKTtcclxuICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxuICB9O1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGF1dGgudXNlcikge1xyXG4gICAgICBwcm9wcy5nZXRVc2VyQ2hhcmFjdGVycygpO1xyXG4gICAgfVxyXG4gIH0sIFthdXRoXSk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmb3JtLnNldEZpZWxkc1ZhbHVlKHsgbWF0dXJlIH0pO1xyXG4gIH0sIFttYXR1cmVdKTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZvcm0uc2V0RmllbGRzVmFsdWUoeyBwdWJsaWM6IHZpc2liaWxpdHkgfSk7XHJcbiAgfSwgW3Zpc2liaWxpdHldKTtcclxuXHJcbiAgY29uc3QgZmlsdGVyU29ydCA9IChhLCBiKSA9PiB7XHJcbiAgICBjb25zdCBrZXlBID0gYS5uYW1lLFxyXG4gICAgICBrZXlCID0gYi5uYW1lO1xyXG4gICAgaWYgKGtleUEgPCBrZXlCKSByZXR1cm4gLTE7XHJcbiAgICBpZiAoa2V5QSA+IGtleUIpIHJldHVybiAxO1xyXG4gICAgcmV0dXJuIDA7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2hvd0xpbmsgPSAoKSA9PiB7XHJcbiAgICBmb3JtLnNldEZpZWxkc1ZhbHVlKHsgYmFubmVyOiBudWxsIH0pO1xyXG4gICAgc2V0TGlua1Zpc2libGUodHJ1ZSk7XHJcbiAgICBzZXRVcGxvYWRWaXNpYmxlKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzaG93VXBsb2FkID0gKCkgPT4ge1xyXG4gICAgZm9ybS5zZXRGaWVsZHNWYWx1ZSh7IGJhbm5lcjogbnVsbCB9KTtcclxuICAgIHNldExpbmtWaXNpYmxlKGZhbHNlKTtcclxuICAgIHNldFVwbG9hZFZpc2libGUodHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIGF1dGguaXNMb2FkaW5nID8gKFxyXG4gICAgPExvYWRlciAvPlxyXG4gICkgOiBhdXRoLnVzZXIudWlkID8gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJuZXctc3RvcnkgY3VzdG9tLWZvcm1cIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lclwiPlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJzaWRlLWhlYWRpbmdcIj5BZGQgYSBuZXcgc3Rvcnk8L2gyPlxyXG4gICAgICAgIDxGb3JtXHJcbiAgICAgICAgICBsYXlvdXQ9XCJ2ZXJ0aWNhbFwiXHJcbiAgICAgICAgICBzY3JvbGxUb0ZpcnN0RXJyb3JcclxuICAgICAgICAgIG9uRmluaXNoRmFpbGVkPXtvbkZhaWxlZH1cclxuICAgICAgICAgIG9uRmluaXNoPXtzdWJtaXR9XHJcbiAgICAgICAgICBmb3JtPXtmb3JtfVxyXG4gICAgICAgICAgaW5pdGlhbFZhbHVlcz17e1xyXG4gICAgICAgICAgICBzdW1tYXJ5OiBcIlwiLFxyXG4gICAgICAgICAgICBtYXR1cmU6IGZhbHNlLFxyXG4gICAgICAgICAgICBwdWJsaWM6IHRydWUsXHJcbiAgICAgICAgICAgIGJhbm5lcjogXCJcIixcclxuICAgICAgICAgICAgbWFpbkNoYXJhY3RlcnM6IFtdLFxyXG4gICAgICAgICAgICB0YWdzOiBbXSxcclxuICAgICAgICAgICAgdGl0bGU6IFwiXCIsXHJcbiAgICAgICAgICAgIGNhdGVnb3JpZXM6IFtdLFxyXG4gICAgICAgICAgICBjb3B5cmlnaHQ6IFwiXCIsXHJcbiAgICAgICAgICAgIGxhbmd1YWdlOiBcIlwiLFxyXG4gICAgICAgICAgICBzdGF0dXM6IFwiXCIsXHJcbiAgICAgICAgICAgIGltYWdlQ29weXJpZ2h0OiBcIlwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8Um93IGd1dHRlcj17WzI0LCAyNF19PlxyXG4gICAgICAgICAgICA8Q29sIHNtPXsyNH0geHM9ezI0fSBtZD17MTh9IGxnPXsxOH0+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgY29sb249e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInRpdGxlXCJcclxuICAgICAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkEgdGl0bGUgaXMgcmVxdWlyZWRcIixcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgeyBtYXg6IDY1IH0sXHJcbiAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJUaXRsZVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIHNtPXsyNH0geHM9ezI0fSBsZz17Nn0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJjYXRlZ29yaWVzXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiQ2F0ZWdvcmllc1wiXHJcbiAgICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJBdCBsZWFzdCAxIGNhdGVnb3J5IGlzIHJlcXVpcmVkXCIsXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXg6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhcnJheVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiWW91IGNhbiBvbmx5IHNlbGVjdCB1cCB0byAyIGNhdGVnb3JpZXNcIixcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFNlbGVjdCBtb2RlPVwibXVsdGlwbGVcIiBhbGxvd0NsZWFyIG1heFRhZ0NvdW50PXsyfT5cclxuICAgICAgICAgICAgICAgICAge0NBVEVHT1JJRVM/LnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXlBID0gYS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAga2V5QiA9IGIubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBDb21wYXJlIHRoZSAyIGRhdGVzXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleUEgPCBrZXlCKSByZXR1cm4gLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleUEgPiBrZXlCKSByZXR1cm4gMTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgICAgICAgfSkubWFwKChjYXQpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPXtjYXQudmFsdWV9IGtleT17Y2F0LnZhbHVlfT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtjYXQubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICA8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgIDxSb3cgZ3V0dGVyPXtbMjQsIDI0XX0+XHJcbiAgICAgICAgICAgIDxDb2wgbWQ9ezh9IHNtPXsyNH0geHM9ezI0fSBsZz17OH0+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImxhbmd1YWdlXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiTGFuZ3VhZ2VcIlxyXG4gICAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiQSBsYW5ndWFnZSBpcyByZXF1aXJlZFwiLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0IGZpbHRlclNvcnQ9e2ZpbHRlclNvcnR9PlxyXG4gICAgICAgICAgICAgICAgICB7TEFOR1VBR0VTPy5tYXAoKGxhbmcpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPXtsYW5nLnZhbHVlfSBrZXk9e2xhbmcudmFsdWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAge2xhbmcubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICA8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgbWQ9ezh9IHNtPXsyNH0geHM9ezI0fSBsZz17OH0+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInN0YXR1c1wiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlN0YXR1c1wiXHJcbiAgICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJBIHN0YXR1cyBpcyByZXF1aXJlZFwiLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICB7U1RBVFVTLm1hcCgoc3RhdCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9e3N0YXQudmFsdWV9IGtleT17c3RhdC52YWx1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7c3RhdC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPENvbCBtZD17OH0gc209ezI0fSB4cz17MjR9IGxnPXs4fT5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiY29weXJpZ2h0XCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiQ29weXJpZ2h0XCJcclxuICAgICAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkEgY29weXJpZ2h0IGlzIHJlcXVpcmVkXCIsXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgIHtDT1BZUklHSFRTLm1hcCgoY29weSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9e2NvcHkudmFsdWV9IGtleT17Y29weS52YWx1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7Y29weS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICBsYWJlbD1cIlN1bW1hcnlcIlxyXG4gICAgICAgICAgICBuYW1lPVwic3VtbWFyeVwiXHJcbiAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbWF4OiAxODAsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIllvdXIgc3VtbWFyeSBjYW5ub3QgZXhjZWVkIDE4MCBjaGFyYWN0ZXJzXCIsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPElucHV0LlRleHRBcmVhXHJcbiAgICAgICAgICAgICAgYXV0b1NpemU9e3sgbWluUm93czogNSB9fVxyXG4gICAgICAgICAgICAgIHNob3dDb3VudD17dHJ1ZX1cclxuICAgICAgICAgICAgICBtYXhMZW5ndGg9ezE4MH1cclxuICAgICAgICAgICAgPjwvSW5wdXQuVGV4dEFyZWE+XHJcbiAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgIDxSb3cganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIiBndXR0ZXI9e1syNCwgMjRdfT5cclxuICAgICAgICAgICAgPFJhZGlvQnV0dG9uXHJcbiAgICAgICAgICAgICAgbGc9ezR9XHJcbiAgICAgICAgICAgICAgc209ezEyfVxyXG4gICAgICAgICAgICAgIHhzPXsyNH1cclxuICAgICAgICAgICAgICBtZD17OH1cclxuICAgICAgICAgICAgICBuYW1lPVwicHVibGljXCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIlZpc2liaWxpdHlcIlxyXG4gICAgICAgICAgICAgIHNldEZ1bmM9e3NldFZpc2liaWxpdHl9XHJcbiAgICAgICAgICAgICAgbnVtMT1cIjNcIlxyXG4gICAgICAgICAgICAgIG51bTI9XCI0XCJcclxuICAgICAgICAgICAgICBsYWJlbDE9XCJQdWJsaWNcIlxyXG4gICAgICAgICAgICAgIGxhYmVsMj1cIlByaXZhdGVcIlxyXG4gICAgICAgICAgICAgIHZhbD17dmlzaWJpbGl0eX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFJhZGlvQnV0dG9uXHJcbiAgICAgICAgICAgICAgbGc9ezR9XHJcbiAgICAgICAgICAgICAgc209ezEyfVxyXG4gICAgICAgICAgICAgIHhzPXsyNH1cclxuICAgICAgICAgICAgICBtZD17OH1cclxuICAgICAgICAgICAgICB2YWw9e21hdHVyZX1cclxuICAgICAgICAgICAgICBzZXRGdW5jPXtzZXRNYXR1cmV9XHJcbiAgICAgICAgICAgICAgbmFtZT1cIm1hdHVyZVwiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJNYXR1cmUgY29udGVudCA/XCJcclxuICAgICAgICAgICAgICBudW0xPVwiMVwiXHJcbiAgICAgICAgICAgICAgbnVtMj1cIjJcIlxyXG4gICAgICAgICAgICAgIGxhYmVsMT1cIlllc1wiXHJcbiAgICAgICAgICAgICAgbGFiZWwyPVwiTm9cIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Q29sIGxnPXs4fSBtZD17MTJ9IHNtPXsyNH0geHM9ezI0fT5cclxuICAgICAgICAgICAgICA8VGFncyBmb3JtPXtmb3JtfSAvPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgIDxGb3JtLkl0ZW0gbmFtZT1cIm1haW5DaGFyYWN0ZXJzXCIgbGFiZWw9XCJNYWluIENoYXJhY3RlcnNcIj5cclxuICAgICAgICAgICAgPFJvdyBndXR0ZXI9e1syNCwgMjRdfT5cclxuICAgICAgICAgICAgICA8Q29sIGxnPXsxMn0gbWQ9ezI0fSBzbT17MjR9IHhzPXsyNH0+XHJcbiAgICAgICAgICAgICAgICA8Um93IGd1dHRlcj17MTZ9PlxyXG4gICAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezIyfT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtIG5hbWU9XCJjdXJyZW50Q2hhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybS5nZXRGaWVsZFZhbHVlKFwibWFpbkNoYXJhY3RlcnNcIik/Lmxlbmd0aCA+PSA1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbCkgPT4gc2V0Q3VycmVudENoYXIodmFsKX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIm5vbmVcIiBkaXNhYmxlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBDaG9vc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5jaGFyYWN0ZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmdldEZpZWxkVmFsdWUoXCJtYWluQ2hhcmFjdGVyc1wiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8uaW5kZXhPZihjLmlkKSA9PT0gLTFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXlBID0gYS5maXJzdG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleUIgPSBiLmZpcnN0bmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENvbXBhcmUgdGhlIDIgZGF0ZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChrZXlBIDwga2V5QikgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGtleUEgPiBrZXlCKSByZXR1cm4gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgoY2hhcikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2NoYXIuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjaGFyLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPntgJHtjaGFyLmZpcnN0bmFtZX0gJHtjaGFyLmxhc3RuYW1lfWB9PC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VsZWN0LWFkZC1pbnB1dC1pY29uYm94XCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2FkZENoYXJhY3Rlcn1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4rPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgPHNtYWxsPllvdSBjYW4gYWRkIHVwIHRvIDUgbWFpbiBjaGFyYWN0ZXJzPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDxDb2wgbGc9ezEyfSBtZD17MjR9IHNtPXsyNH0geHM9ezI0fT5cclxuICAgICAgICAgICAgICAgIDxSb3cgZ3V0dGVyPXtbMTYsIDI0XX0+XHJcbiAgICAgICAgICAgICAgICAgIHtwcm9wcy5jaGFyYWN0ZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihcclxuICAgICAgICAgICAgICAgICAgICAgIChjKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtLmdldEZpZWxkVmFsdWUoXCJtYWluQ2hhcmFjdGVyc1wiKT8uaW5kZXhPZihjLmlkKSAhPT1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLTFcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgLm1hcCgoY2hhcikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPENvbCBtZD17MTJ9IHNtPXsyNH0ga2V5PXtjaGFyLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2NoYXIuaWR9IGNsYXNzTmFtZT1cIm1haW4tc2VsZWN0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tYXZhdGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Y2hhci5pbWFnZX0gYWx0PXtjaGFyLmZpcnN0bmFtZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57YCR7Y2hhci5maXJzdG5hbWV9ICR7Y2hhci5sYXN0bmFtZX1gfSA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGlvbi1pY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByZW1vdmVDaGFyYWN0ZXIoY2hhci5pZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY2xvc2UtY2lyY2xlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9pb24taWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgIHshdXBsb2FkVmlzaWJsZSAmJiAhbGlua1Zpc2libGUgJiYgKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVwbG9hZC1idG5zXCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzaG93VXBsb2FkfSB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwidXBsb2FkLWJ0blwiPlxyXG4gICAgICAgICAgICAgICAgVXBsb2FkIGEgY292ZXJcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzaG93TGlua30gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cInVwbG9hZC1idG5cIj5cclxuICAgICAgICAgICAgICAgIFN1Ym1pdCBhIGxpbmsgdG8gYSBjb3ZlclxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICB7dXBsb2FkVmlzaWJsZSAmJiAoXHJcbiAgICAgICAgICAgIDxSb3cgYWxpZ249XCJib3R0b21cIiBndXR0ZXI9e1syNCwgMjRdfT5cclxuICAgICAgICAgICAgICA8Q29sIG1kPXsxMn0gc209ezI0fSB4cz17MjR9PlxyXG4gICAgICAgICAgICAgICAgPFVwbG9hZEltYWdlIGZvcm09e2Zvcm19IC8+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPENvbCBtZD17MTJ9IHNtPXsyNH0geHM9ezI0fT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17c2hvd0xpbmt9IHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJ1cGxvYWQtYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgIE9SIFN1Ym1pdCBhIGxpbmsgdG8gYSBjb3ZlclxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIHtsaW5rVmlzaWJsZSAmJiAoXHJcbiAgICAgICAgICAgIDxSb3cgYWxpZ249XCJib3R0b21cIiBndXR0ZXI9e1syNCwgMjRdfT5cclxuICAgICAgICAgICAgICA8Q29sIHNtPXsyNH0geHM9ezI0fSBtZD17MTJ9IGxnPXsxMn0+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ1cmxcIixcclxuICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiVGhpcyBmaWVsZCBtdXN0IGJlIGEgdmFsaWQgdXJsLlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgKCkgPT4gKHtcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcihfLCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNJbWFnZVVybCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFcnJvcihcIlRoZSBsaW5rIG5lZWRzIHRvIGJlIGFuIGltYWdlXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIlN1Ym1pdCBhIGxpbmsgdG8geW91ciBpbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJiYW5uZXJcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDxDb2wgbWQ9ezEyfSBzbT17MjR9IHhzPXsyNH0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Nob3dVcGxvYWR9XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1cGxvYWQtYnRuXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgVXBsb2FkIGEgY292ZXJcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAge3Byb3BzLmxvYWRpbmcgfHwgcHJvcHMuc3RvcnlJZCA/IChcclxuICAgICAgICAgICAgPGJ1dHRvbiBkaXNhYmxlZD5cclxuICAgICAgICAgICAgICA8U3BpbiAvPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkNyZWF0ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKSA6IChcclxuICAgIHJvdXRlci5wdXNoKFwiL2F1dGhcIilcclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG4gIGNoYXJhY3RlcnM6IHN0YXRlLmNoYXJhY3RlcnMudXNlckNoYXJhY3RlcnMsXHJcbiAgY29uZmlybU1lc3NhZ2U6IHN0YXRlLnN0b3JpZXMubWVzc2FnZSxcclxuICBzdG9yeUlkOiBzdGF0ZS5zdG9yaWVzLnN0b3J5SWQsXHJcbiAgbG9hZGluZzogc3RhdGUuc3Rvcmllcy5sb2FkaW5nU3RvcnksXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHsgZ2V0VXNlckNoYXJhY3RlcnMsIGFkZFN0b3J5IH0pKFxyXG4gIE5ld1N0b3J5XHJcbik7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=