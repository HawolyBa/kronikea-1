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

    var newVal = _objectSpread(_objectSpread({}, values), {}, {
      authorName: auth.user.username,
      banner: form.getFieldValue("banner") ? form.getFieldValue("banner") : ""
    });

    props.addStory(newVal);
  };

  var onFailed = function onFailed(error) {
    var errorName = error.errorFields[0].name.toString();
    form.scrollToField(errorName);
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

  console.log(form.getFieldsValue());
  return __jsx("div", {
    className: "new-story custom-form",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }
  }, __jsx("h2", {
    className: "side-heading",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
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
      lineNumber: 113,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    gutter: [24, 24],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
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
      lineNumber: 135,
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
      lineNumber: 136,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
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
      lineNumber: 151,
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
      lineNumber: 152,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Select"], {
    mode: "multiple",
    allowClear: true,
    maxTagCount: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
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
        lineNumber: 176,
        columnNumber: 21
      }
    }, cat.name);
  }))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    gutter: [24, 24],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
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
      lineNumber: 185,
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
      lineNumber: 186,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Select"], {
    filterSort: filterSort,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 17
    }
  }, _utils_constants__WEBPACK_IMPORTED_MODULE_8__["LANGUAGES"] === null || _utils_constants__WEBPACK_IMPORTED_MODULE_8__["LANGUAGES"] === void 0 ? void 0 : _utils_constants__WEBPACK_IMPORTED_MODULE_8__["LANGUAGES"].map(function (lang) {
    return __jsx(Option, {
      value: lang.value,
      key: lang.value,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198,
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
      lineNumber: 205,
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
      lineNumber: 206,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Select"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 17
    }
  }, _utils_constants__WEBPACK_IMPORTED_MODULE_8__["STATUS"].map(function (stat) {
    return __jsx(Option, {
      value: stat.value,
      key: stat.value,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218,
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
      lineNumber: 225,
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
      lineNumber: 226,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Select"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 17
    }
  }, _utils_constants__WEBPACK_IMPORTED_MODULE_8__["COPYRIGHTS"].map(function (copy) {
    return __jsx(Option, {
      value: copy.value,
      key: copy.value,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238,
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
      lineNumber: 246,
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
      lineNumber: 256,
      columnNumber: 13
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    justify: "space-between",
    gutter: [24, 24],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
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
      lineNumber: 263,
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
      lineNumber: 277,
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
      lineNumber: 291,
      columnNumber: 13
    }
  }, __jsx(_components_forms_Tags__WEBPACK_IMPORTED_MODULE_12__["default"], {
    form: form,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 15
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Divider"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 11
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Form"].Item, {
    name: "mainCharacters",
    label: "Main Characters",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    gutter: [24, 24],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
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
      lineNumber: 298,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    gutter: 16,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    span: 22,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 19
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Form"].Item, {
    name: "currentChar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
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
      lineNumber: 302,
      columnNumber: 23
    }
  }, __jsx(Option, {
    value: "none",
    disabled: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
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
        lineNumber: 329,
        columnNumber: 29
      }
    }, "".concat(_char.firstname, " ").concat(_char.lastname));
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    span: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "select-add-input-iconbox",
    onClick: addCharacter,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338,
      columnNumber: 21
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342,
      columnNumber: 23
    }
  }, "+"))), __jsx("small", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345,
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
      lineNumber: 348,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    gutter: [16, 24],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 349,
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
        lineNumber: 357,
        columnNumber: 23
      }
    }, __jsx("div", {
      key: _char2.id,
      className: "main-selected",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 358,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "main-avatar",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 359,
        columnNumber: 27
      }
    }, __jsx("img", {
      src: _char2.image,
      alt: _char2.firstname,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 360,
        columnNumber: 29
      }
    })), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 362,
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
        lineNumber: 363,
        columnNumber: 27
      }
    })));
  }))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Divider"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374,
      columnNumber: 11
    }
  }), !uploadVisible && !linkVisible && __jsx("div", {
    className: "upload-btns",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 376,
      columnNumber: 13
    }
  }, __jsx("button", {
    onClick: showUpload,
    type: "button",
    className: "upload-btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377,
      columnNumber: 15
    }
  }, "Upload a cover"), __jsx("button", {
    onClick: showLink,
    type: "button",
    className: "upload-btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 381,
      columnNumber: 15
    }
  }, "Submit a link to a cover")), uploadVisible && __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    align: "bottom",
    gutter: [24, 24],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 387,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    md: 12,
    sm: 24,
    xs: 24,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388,
      columnNumber: 15
    }
  }, __jsx(_components_forms_UploadImage__WEBPACK_IMPORTED_MODULE_13__["default"], {
    form: form,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 389,
      columnNumber: 17
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    md: 12,
    sm: 24,
    xs: 24,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391,
      columnNumber: 15
    }
  }, __jsx("button", {
    onClick: showLink,
    type: "button",
    className: "upload-btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 392,
      columnNumber: 17
    }
  }, "OR Submit a link to a cover"))), linkVisible && __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    align: "bottom",
    gutter: [24, 24],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399,
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
      lineNumber: 400,
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
      lineNumber: 401,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 421,
      columnNumber: 19
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    md: 12,
    sm: 24,
    xs: 24,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 424,
      columnNumber: 15
    }
  }, __jsx("button", {
    onClick: showUpload,
    type: "button",
    className: "upload-btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 425,
      columnNumber: 17
    }
  }, "Upload a cover"))), __jsx("button", {
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 435,
      columnNumber: 11
    }
  }, "Create"))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3RvcnkvbmV3LmpzIl0sIm5hbWVzIjpbIk9wdGlvbiIsIlNlbGVjdCIsIk5ld1N0b3J5IiwicHJvcHMiLCJhdXRoIiwidXNlQXV0aCIsIkZvcm0iLCJ1c2VGb3JtIiwiZm9ybSIsInJvdXRlciIsInVzZVJvdXRlciIsIlJlYWN0IiwidXNlU3RhdGUiLCJsaW5rVmlzaWJsZSIsInNldExpbmtWaXNpYmxlIiwidXBsb2FkVmlzaWJsZSIsInNldFVwbG9hZFZpc2libGUiLCJtYXR1cmUiLCJzZXRNYXR1cmUiLCJ2aXNpYmlsaXR5Iiwic2V0VmlzaWJpbGl0eSIsImN1cnJlbnRDaGFyIiwic2V0Q3VycmVudENoYXIiLCJhZGRDaGFyYWN0ZXIiLCJnZXRGaWVsZFZhbHVlIiwiaW5kZXhPZiIsImxlbmd0aCIsInNldEZpZWxkc1ZhbHVlIiwibWFpbkNoYXJhY3RlcnMiLCJzdWJtaXQiLCJ2YWx1ZXMiLCJuZXdWYWwiLCJhdXRob3JOYW1lIiwidXNlciIsInVzZXJuYW1lIiwiYmFubmVyIiwiYWRkU3RvcnkiLCJvbkZhaWxlZCIsImVycm9yIiwiZXJyb3JOYW1lIiwiZXJyb3JGaWVsZHMiLCJuYW1lIiwidG9TdHJpbmciLCJzY3JvbGxUb0ZpZWxkIiwidXNlRWZmZWN0IiwiZ2V0VXNlckNoYXJhY3RlcnMiLCJmaWx0ZXJTb3J0IiwiYSIsImIiLCJrZXlBIiwia2V5QiIsInNob3dMaW5rIiwic2hvd1VwbG9hZCIsImNvbnNvbGUiLCJsb2ciLCJnZXRGaWVsZHNWYWx1ZSIsInN1bW1hcnkiLCJ0YWdzIiwidGl0bGUiLCJjYXRlZ29yaWVzIiwiY29weXJpZ2h0IiwibGFuZ3VhZ2UiLCJzdGF0dXMiLCJpbWFnZUNvcHlyaWdodCIsInJlcXVpcmVkIiwibWVzc2FnZSIsIm1heCIsInR5cGUiLCJDQVRFR09SSUVTIiwic29ydCIsIm1hcCIsImNhdCIsInZhbHVlIiwiTEFOR1VBR0VTIiwibGFuZyIsIlNUQVRVUyIsInN0YXQiLCJDT1BZUklHSFRTIiwiY29weSIsIm1pblJvd3MiLCJ2YWwiLCJjaGFyYWN0ZXJzIiwiZmlsdGVyIiwiYyIsImlkIiwiZmlyc3RuYW1lIiwiY2hhciIsImxhc3RuYW1lIiwiaW1hZ2UiLCJyZW1vdmVDaGFyYWN0ZXIiLCJ2YWxpZGF0b3IiLCJfIiwiaXNJbWFnZVVybCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiRXJyb3IiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsInVzZXJDaGFyYWN0ZXJzIiwiY29uZmlybU1lc3NhZ2UiLCJzdG9yaWVzIiwic3RvcnlJZCIsImxvYWRpbmciLCJsb2FkaW5nU3RvcnkiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFXQTtBQUNBO0FBQ0E7QUFFQTtBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0lBRVFBLE0sR0FBV0MsMkMsQ0FBWEQsTTs7QUFFUixJQUFNRSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQTs7QUFDMUIsTUFBTUMsSUFBSSxHQUFHQyxnRUFBTyxFQUFwQjs7QUFEMEIsc0JBRVhDLHlDQUFJLENBQUNDLE9BQUwsRUFGVztBQUFBO0FBQUEsTUFFbkJDLElBRm1COztBQUcxQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUgwQix3QkFJWUMsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEtBQWYsQ0FKWjtBQUFBO0FBQUEsTUFJbkJDLFdBSm1CO0FBQUEsTUFJTkMsY0FKTTs7QUFBQSx5QkFLZ0JILDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBTGhCO0FBQUE7QUFBQSxNQUtuQkcsYUFMbUI7QUFBQSxNQUtKQyxnQkFMSTs7QUFBQSx5QkFNRUwsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEtBQWYsQ0FORjtBQUFBO0FBQUEsTUFNbkJLLE1BTm1CO0FBQUEsTUFNWEMsU0FOVzs7QUFB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QUFLLENBQUNHLE9BQU4sQ0FBY0MsT0FIVztBQUlsQ0MsV0FBTyxFQUFFTCxLQUFLLENBQUNHLE9BQU4sQ0FBY0c7QUFKVyxHQUFaO0FBQUEsQ0FBeEI7O0FBT2VDLDBIQUFPLENBQUNSLGVBQUQsRUFBa0I7QUFBRXBELG1CQUFpQixFQUFqQkEsbUZBQUY7QUFBcUJULFVBQVEsRUFBUkEsdUVBQVFBO0FBQTdCLENBQWxCLENBQVAsQ0FDYmxDLFFBRGEsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zdG9yeS9uZXcuNDBlNmIzY2ZmY2FkYjdkYmZhNTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBSb3csXHJcbiAgQ29sLFxyXG4gIFNwYWNlLFxyXG4gIERpdmlkZXIsXHJcbiAgRm9ybSxcclxuICBTcGluLFxyXG4gIG1lc3NhZ2UsXHJcbiAgSW5wdXQsXHJcbiAgU2VsZWN0LFxyXG59IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBpc0ltYWdlVXJsIGZyb20gXCJpcy1pbWFnZS11cmxcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgQ0FURUdPUklFUyxcclxuICBDT1BZUklHSFRTLFxyXG4gIExBTkdVQUdFUyxcclxuICBTVEFUVVMsXHJcbn0gZnJvbSBcIi4uLy4uL3V0aWxzL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSBcIi4uLy4uL2hvb2tzL3VzZXJIb29rc1wiO1xyXG5pbXBvcnQgeyBnZXRVc2VyQ2hhcmFjdGVycyB9IGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25zL2NoYXJhY3RlcnNBY3Rpb25zXCI7XHJcbmltcG9ydCB7IGFkZFN0b3J5IH0gZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvbnMvc3Rvcmllc0FjdGlvbnNcIjtcclxuXHJcbmltcG9ydCBUYWdzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2Zvcm1zL1RhZ3NcIjtcclxuaW1wb3J0IFVwbG9hZEltYWdlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2Zvcm1zL1VwbG9hZEltYWdlXCI7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvY29tbW9uL0xvYWRlclwiO1xyXG5pbXBvcnQgUmFkaW9CdXR0b24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZm9ybXMvUmFkaW9CdXR0b25cIjtcclxuXHJcbmNvbnN0IHsgT3B0aW9uIH0gPSBTZWxlY3Q7XHJcblxyXG5jb25zdCBOZXdTdG9yeSA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IGF1dGggPSB1c2VBdXRoKCk7XHJcbiAgY29uc3QgW2Zvcm1dID0gRm9ybS51c2VGb3JtKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW2xpbmtWaXNpYmxlLCBzZXRMaW5rVmlzaWJsZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3VwbG9hZFZpc2libGUsIHNldFVwbG9hZFZpc2libGVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFttYXR1cmUsIHNldE1hdHVyZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Zpc2liaWxpdHksIHNldFZpc2liaWxpdHldID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW2N1cnJlbnRDaGFyLCBzZXRDdXJyZW50Q2hhcl0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgYWRkQ2hhcmFjdGVyID0gKCkgPT4ge1xyXG4gICAgaWYgKFxyXG4gICAgICBjdXJyZW50Q2hhciAmJlxyXG4gICAgICBmb3JtLmdldEZpZWxkVmFsdWUoXCJtYWluQ2hhcmFjdGVyc1wiKT8uaW5kZXhPZihjdXJyZW50Q2hhcikgPT09IC0xICYmXHJcbiAgICAgIGZvcm0uZ2V0RmllbGRWYWx1ZShcIm1haW5DaGFyYWN0ZXJzXCIpPy5sZW5ndGggPCA1XHJcbiAgICApIHtcclxuICAgICAgZm9ybS5zZXRGaWVsZHNWYWx1ZSh7XHJcbiAgICAgICAgbWFpbkNoYXJhY3RlcnM6IFsuLi5mb3JtLmdldEZpZWxkVmFsdWUoXCJtYWluQ2hhcmFjdGVyc1wiKSwgY3VycmVudENoYXJdLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHNldEN1cnJlbnRDaGFyKFwiXCIpO1xyXG4gICAgZm9ybS5zZXRGaWVsZHNWYWx1ZSh7IGN1cnJlbnRDaGFyOiBcIlwiIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHN1Ym1pdCA9ICh2YWx1ZXMpID0+IHtcclxuICAgIGRlbGV0ZSB2YWx1ZXMuY3VycmVudENoYXI7XHJcbiAgICBjb25zdCBuZXdWYWwgPSB7XHJcbiAgICAgIC4uLnZhbHVlcyxcclxuICAgICAgYXV0aG9yTmFtZTogYXV0aC51c2VyLnVzZXJuYW1lLFxyXG4gICAgICBiYW5uZXI6IGZvcm0uZ2V0RmllbGRWYWx1ZShcImJhbm5lclwiKSA/IGZvcm0uZ2V0RmllbGRWYWx1ZShcImJhbm5lclwiKSA6IFwiXCIsXHJcbiAgICB9O1xyXG5cclxuICAgIHByb3BzLmFkZFN0b3J5KG5ld1ZhbCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25GYWlsZWQgPSAoZXJyb3IpID0+IHtcclxuICAgIGNvbnN0IGVycm9yTmFtZSA9IGVycm9yLmVycm9yRmllbGRzWzBdLm5hbWUudG9TdHJpbmcoKTtcclxuICAgIGZvcm0uc2Nyb2xsVG9GaWVsZChlcnJvck5hbWUpO1xyXG4gIH07XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoYXV0aC51c2VyKSB7XHJcbiAgICAgIHByb3BzLmdldFVzZXJDaGFyYWN0ZXJzKCk7XHJcbiAgICB9XHJcbiAgfSwgW2F1dGhdKTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZvcm0uc2V0RmllbGRzVmFsdWUoeyBtYXR1cmUgfSk7XHJcbiAgfSwgW21hdHVyZV0pO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZm9ybS5zZXRGaWVsZHNWYWx1ZSh7IHB1YmxpYzogdmlzaWJpbGl0eSB9KTtcclxuICB9LCBbdmlzaWJpbGl0eV0pO1xyXG5cclxuICBjb25zdCBmaWx0ZXJTb3J0ID0gKGEsIGIpID0+IHtcclxuICAgIGNvbnN0IGtleUEgPSBhLm5hbWUsXHJcbiAgICAgIGtleUIgPSBiLm5hbWU7XHJcbiAgICBpZiAoa2V5QSA8IGtleUIpIHJldHVybiAtMTtcclxuICAgIGlmIChrZXlBID4ga2V5QikgcmV0dXJuIDE7XHJcbiAgICByZXR1cm4gMDtcclxuICB9O1xyXG5cclxuICBjb25zdCBzaG93TGluayA9ICgpID0+IHtcclxuICAgIGZvcm0uc2V0RmllbGRzVmFsdWUoeyBiYW5uZXI6IG51bGwgfSk7XHJcbiAgICBzZXRMaW5rVmlzaWJsZSh0cnVlKTtcclxuICAgIHNldFVwbG9hZFZpc2libGUoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNob3dVcGxvYWQgPSAoKSA9PiB7XHJcbiAgICBmb3JtLnNldEZpZWxkc1ZhbHVlKHsgYmFubmVyOiBudWxsIH0pO1xyXG4gICAgc2V0TGlua1Zpc2libGUoZmFsc2UpO1xyXG4gICAgc2V0VXBsb2FkVmlzaWJsZSh0cnVlKTtcclxuICB9O1xyXG5cclxuICBjb25zb2xlLmxvZyhmb3JtLmdldEZpZWxkc1ZhbHVlKCkpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ldy1zdG9yeSBjdXN0b20tZm9ybVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyXCI+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInNpZGUtaGVhZGluZ1wiPkFkZCBhIG5ldyBzdG9yeTwvaDI+XHJcbiAgICAgICAgPEZvcm1cclxuICAgICAgICAgIGxheW91dD1cInZlcnRpY2FsXCJcclxuICAgICAgICAgIHNjcm9sbFRvRmlyc3RFcnJvclxyXG4gICAgICAgICAgb25GaW5pc2hGYWlsZWQ9e29uRmFpbGVkfVxyXG4gICAgICAgICAgb25GaW5pc2g9e3N1Ym1pdH1cclxuICAgICAgICAgIGZvcm09e2Zvcm19XHJcbiAgICAgICAgICBpbml0aWFsVmFsdWVzPXt7XHJcbiAgICAgICAgICAgIHN1bW1hcnk6IFwiXCIsXHJcbiAgICAgICAgICAgIG1hdHVyZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHB1YmxpYzogdHJ1ZSxcclxuICAgICAgICAgICAgYmFubmVyOiBcIlwiLFxyXG4gICAgICAgICAgICBtYWluQ2hhcmFjdGVyczogW10sXHJcbiAgICAgICAgICAgIHRhZ3M6IFtdLFxyXG4gICAgICAgICAgICB0aXRsZTogXCJcIixcclxuICAgICAgICAgICAgY2F0ZWdvcmllczogW10sXHJcbiAgICAgICAgICAgIGNvcHlyaWdodDogXCJcIixcclxuICAgICAgICAgICAgbGFuZ3VhZ2U6IFwiXCIsXHJcbiAgICAgICAgICAgIHN0YXR1czogXCJcIixcclxuICAgICAgICAgICAgaW1hZ2VDb3B5cmlnaHQ6IFwiXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxSb3cgZ3V0dGVyPXtbMjQsIDI0XX0+XHJcbiAgICAgICAgICAgIDxDb2wgc209ezI0fSB4cz17MjR9IG1kPXsxOH0gbGc9ezE4fT5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICBjb2xvbj17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICBuYW1lPVwidGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiQSB0aXRsZSBpcyByZXF1aXJlZFwiLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICB7IG1heDogNjUgfSxcclxuICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlRpdGxlXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgc209ezI0fSB4cz17MjR9IGxnPXs2fSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImNhdGVnb3JpZXNcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJDYXRlZ29yaWVzXCJcclxuICAgICAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkF0IGxlYXN0IDEgY2F0ZWdvcnkgaXMgcmVxdWlyZWRcIixcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG1heDogMixcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFycmF5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJZb3UgY2FuIG9ubHkgc2VsZWN0IHVwIHRvIDIgY2F0ZWdvcmllc1wiLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0IG1vZGU9XCJtdWx0aXBsZVwiIGFsbG93Q2xlYXIgbWF4VGFnQ291bnQ9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICB7Q0FURUdPUklFUz8uc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleUEgPSBhLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICBrZXlCID0gYi5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIENvbXBhcmUgdGhlIDIgZGF0ZXNcclxuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5QSA8IGtleUIpIHJldHVybiAtMTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5QSA+IGtleUIpIHJldHVybiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICAgICAgICB9KS5tYXAoKGNhdCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9e2NhdC52YWx1ZX0ga2V5PXtjYXQudmFsdWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAge2NhdC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgPFJvdyBndXR0ZXI9e1syNCwgMjRdfT5cclxuICAgICAgICAgICAgPENvbCBtZD17OH0gc209ezI0fSB4cz17MjR9IGxnPXs4fT5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwibGFuZ3VhZ2VcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJMYW5ndWFnZVwiXHJcbiAgICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJBIGxhbmd1YWdlIGlzIHJlcXVpcmVkXCIsXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3QgZmlsdGVyU29ydD17ZmlsdGVyU29ydH0+XHJcbiAgICAgICAgICAgICAgICAgIHtMQU5HVUFHRVM/Lm1hcCgobGFuZykgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9e2xhbmcudmFsdWV9IGtleT17bGFuZy52YWx1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7bGFuZy5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPENvbCBtZD17OH0gc209ezI0fSB4cz17MjR9IGxnPXs4fT5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwic3RhdHVzXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiU3RhdHVzXCJcclxuICAgICAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkEgc3RhdHVzIGlzIHJlcXVpcmVkXCIsXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgIHtTVEFUVVMubWFwKChzdGF0KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT17c3RhdC52YWx1ZX0ga2V5PXtzdGF0LnZhbHVlfT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtzdGF0Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIG1kPXs4fSBzbT17MjR9IHhzPXsyNH0gbGc9ezh9PlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJjb3B5cmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJDb3B5cmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiQSBjb3B5cmlnaHQgaXMgcmVxdWlyZWRcIixcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFNlbGVjdD5cclxuICAgICAgICAgICAgICAgICAge0NPUFlSSUdIVFMubWFwKChjb3B5KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT17Y29weS52YWx1ZX0ga2V5PXtjb3B5LnZhbHVlfT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtjb3B5Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgIGxhYmVsPVwiU3VtbWFyeVwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJzdW1tYXJ5XCJcclxuICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBtYXg6IDE4MCxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiWW91ciBzdW1tYXJ5IGNhbm5vdCBleGNlZWQgMTgwIGNoYXJhY3RlcnNcIixcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SW5wdXQuVGV4dEFyZWFcclxuICAgICAgICAgICAgICBhdXRvU2l6ZT17eyBtaW5Sb3dzOiA1IH19XHJcbiAgICAgICAgICAgICAgc2hvd0NvdW50PXt0cnVlfVxyXG4gICAgICAgICAgICAgIG1heExlbmd0aD17MTgwfVxyXG4gICAgICAgICAgICA+PC9JbnB1dC5UZXh0QXJlYT5cclxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgPFJvdyBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiIGd1dHRlcj17WzI0LCAyNF19PlxyXG4gICAgICAgICAgICA8UmFkaW9CdXR0b25cclxuICAgICAgICAgICAgICBsZz17NH1cclxuICAgICAgICAgICAgICBzbT17MTJ9XHJcbiAgICAgICAgICAgICAgeHM9ezI0fVxyXG4gICAgICAgICAgICAgIG1kPXs4fVxyXG4gICAgICAgICAgICAgIG5hbWU9XCJwdWJsaWNcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiVmlzaWJpbGl0eVwiXHJcbiAgICAgICAgICAgICAgc2V0RnVuYz17c2V0VmlzaWJpbGl0eX1cclxuICAgICAgICAgICAgICBudW0xPVwiM1wiXHJcbiAgICAgICAgICAgICAgbnVtMj1cIjRcIlxyXG4gICAgICAgICAgICAgIGxhYmVsMT1cIlB1YmxpY1wiXHJcbiAgICAgICAgICAgICAgbGFiZWwyPVwiUHJpdmF0ZVwiXHJcbiAgICAgICAgICAgICAgdmFsPXt2aXNpYmlsaXR5fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8UmFkaW9CdXR0b25cclxuICAgICAgICAgICAgICBsZz17NH1cclxuICAgICAgICAgICAgICBzbT17MTJ9XHJcbiAgICAgICAgICAgICAgeHM9ezI0fVxyXG4gICAgICAgICAgICAgIG1kPXs4fVxyXG4gICAgICAgICAgICAgIHZhbD17bWF0dXJlfVxyXG4gICAgICAgICAgICAgIHNldEZ1bmM9e3NldE1hdHVyZX1cclxuICAgICAgICAgICAgICBuYW1lPVwibWF0dXJlXCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIk1hdHVyZSBjb250ZW50ID9cIlxyXG4gICAgICAgICAgICAgIG51bTE9XCIxXCJcclxuICAgICAgICAgICAgICBudW0yPVwiMlwiXHJcbiAgICAgICAgICAgICAgbGFiZWwxPVwiWWVzXCJcclxuICAgICAgICAgICAgICBsYWJlbDI9XCJOb1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxDb2wgbGc9ezh9IG1kPXsxMn0gc209ezI0fSB4cz17MjR9PlxyXG4gICAgICAgICAgICAgIDxUYWdzIGZvcm09e2Zvcm19IC8+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgPEZvcm0uSXRlbSBuYW1lPVwibWFpbkNoYXJhY3RlcnNcIiBsYWJlbD1cIk1haW4gQ2hhcmFjdGVyc1wiPlxyXG4gICAgICAgICAgICA8Um93IGd1dHRlcj17WzI0LCAyNF19PlxyXG4gICAgICAgICAgICAgIDxDb2wgbGc9ezEyfSBtZD17MjR9IHNtPXsyNH0geHM9ezI0fT5cclxuICAgICAgICAgICAgICAgIDxSb3cgZ3V0dGVyPXsxNn0+XHJcbiAgICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17MjJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0gbmFtZT1cImN1cnJlbnRDaGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtLmdldEZpZWxkVmFsdWUoXCJtYWluQ2hhcmFjdGVyc1wiKT8ubGVuZ3RoID49IDVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsKSA9PiBzZXRDdXJyZW50Q2hhcih2YWwpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwibm9uZVwiIGRpc2FibGVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIENob29zZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmNoYXJhY3RlcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGMpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZ2V0RmllbGRWYWx1ZShcIm1haW5DaGFyYWN0ZXJzXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPy5pbmRleE9mKGMuaWQpID09PSAtMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/LnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleUEgPSBhLmZpcnN0bmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5QiA9IGIuZmlyc3RuYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ29tcGFyZSB0aGUgMiBkYXRlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGtleUEgPCBrZXlCKSByZXR1cm4gLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoa2V5QSA+IGtleUIpIHJldHVybiAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKChjaGFyKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Y2hhci5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NoYXIuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+e2Ake2NoYXIuZmlyc3RuYW1lfSAke2NoYXIubGFzdG5hbWV9YH08L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgPENvbCBzcGFuPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZWxlY3QtYWRkLWlucHV0LWljb25ib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17YWRkQ2hhcmFjdGVyfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPis8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICA8c21hbGw+WW91IGNhbiBhZGQgdXAgdG8gNSBtYWluIGNoYXJhY3RlcnM8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPENvbCBsZz17MTJ9IG1kPXsyNH0gc209ezI0fSB4cz17MjR9PlxyXG4gICAgICAgICAgICAgICAgPFJvdyBndXR0ZXI9e1sxNiwgMjRdfT5cclxuICAgICAgICAgICAgICAgICAge3Byb3BzLmNoYXJhY3RlcnNcclxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgKGMpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm0uZ2V0RmllbGRWYWx1ZShcIm1haW5DaGFyYWN0ZXJzXCIpPy5pbmRleE9mKGMuaWQpICE9PVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAubWFwKChjaGFyKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q29sIG1kPXsxMn0gc209ezI0fSBrZXk9e2NoYXIuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17Y2hhci5pZH0gY2xhc3NOYW1lPVwibWFpbi1zZWxlY3RlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1hdmF0YXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtjaGFyLmltYWdlfSBhbHQ9e2NoYXIuZmlyc3RuYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntgJHtjaGFyLmZpcnN0bmFtZX0gJHtjaGFyLmxhc3RuYW1lfWB9IDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW9uLWljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJlbW92ZUNoYXJhY3RlcihjaGFyLmlkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjbG9zZS1jaXJjbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID48L2lvbi1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgeyF1cGxvYWRWaXNpYmxlICYmICFsaW5rVmlzaWJsZSAmJiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXBsb2FkLWJ0bnNcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Nob3dVcGxvYWR9IHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJ1cGxvYWQtYnRuXCI+XHJcbiAgICAgICAgICAgICAgICBVcGxvYWQgYSBjb3ZlclxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Nob3dMaW5rfSB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwidXBsb2FkLWJ0blwiPlxyXG4gICAgICAgICAgICAgICAgU3VibWl0IGEgbGluayB0byBhIGNvdmVyXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIHt1cGxvYWRWaXNpYmxlICYmIChcclxuICAgICAgICAgICAgPFJvdyBhbGlnbj1cImJvdHRvbVwiIGd1dHRlcj17WzI0LCAyNF19PlxyXG4gICAgICAgICAgICAgIDxDb2wgbWQ9ezEyfSBzbT17MjR9IHhzPXsyNH0+XHJcbiAgICAgICAgICAgICAgICA8VXBsb2FkSW1hZ2UgZm9ybT17Zm9ybX0gLz5cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8Q29sIG1kPXsxMn0gc209ezI0fSB4cz17MjR9PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzaG93TGlua30gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cInVwbG9hZC1idG5cIj5cclxuICAgICAgICAgICAgICAgICAgT1IgU3VibWl0IGEgbGluayB0byBhIGNvdmVyXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAge2xpbmtWaXNpYmxlICYmIChcclxuICAgICAgICAgICAgPFJvdyBhbGlnbj1cImJvdHRvbVwiIGd1dHRlcj17WzI0LCAyNF19PlxyXG4gICAgICAgICAgICAgIDxDb2wgc209ezI0fSB4cz17MjR9IG1kPXsxMn0gbGc9ezEyfT5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInVybFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJUaGlzIGZpZWxkIG11c3QgYmUgYSB2YWxpZCB1cmwuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAoKSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yKF8sIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0ltYWdlVXJsKHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVycm9yKFwiVGhlIGxpbmsgbmVlZHMgdG8gYmUgYW4gaW1hZ2VcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU3VibWl0IGEgbGluayB0byB5b3VyIGltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cImJhbm5lclwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPENvbCBtZD17MTJ9IHNtPXsyNH0geHM9ezI0fT5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17c2hvd1VwbG9hZH1cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInVwbG9hZC1idG5cIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBVcGxvYWQgYSBjb3ZlclxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkNyZWF0ZTwvYnV0dG9uPlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG4gIGNoYXJhY3RlcnM6IHN0YXRlLmNoYXJhY3RlcnMudXNlckNoYXJhY3RlcnMsXHJcbiAgY29uZmlybU1lc3NhZ2U6IHN0YXRlLnN0b3JpZXMubWVzc2FnZSxcclxuICBzdG9yeUlkOiBzdGF0ZS5zdG9yaWVzLnN0b3J5SWQsXHJcbiAgbG9hZGluZzogc3RhdGUuc3Rvcmllcy5sb2FkaW5nU3RvcnksXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHsgZ2V0VXNlckNoYXJhY3RlcnMsIGFkZFN0b3J5IH0pKFxyXG4gIE5ld1N0b3J5XHJcbik7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=