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
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var is_image_url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! is-image-url */ "./node_modules/is-image-url/index.js");
/* harmony import */ var is_image_url__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(is_image_url__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/constants */ "./utils/constants.js");
/* harmony import */ var _hooks_userHooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/userHooks */ "./hooks/userHooks.js");
/* harmony import */ var _redux_actions_charactersActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../redux/actions/charactersActions */ "./redux/actions/charactersActions.js");
/* harmony import */ var _redux_actions_storiesActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../redux/actions/storiesActions */ "./redux/actions/storiesActions.js");
/* harmony import */ var _components_forms_Tags__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/forms/Tags */ "./components/forms/Tags.js");
/* harmony import */ var _components_forms_UploadImage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/forms/UploadImage */ "./components/forms/UploadImage.js");
/* harmony import */ var _components_common_Loader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/common/Loader */ "./components/common/Loader.js");
/* harmony import */ var _components_forms_RadioButton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/forms/RadioButton */ "./components/forms/RadioButton.js");



var _this = undefined,
    _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\pages\\story\\new.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;













var Option = antd__WEBPACK_IMPORTED_MODULE_3__["Select"].Option;

var NewStory = function NewStory(props) {
  _s();

  var _form$getFieldValue3, _props$characters$fil;

  var auth = Object(_hooks_userHooks__WEBPACK_IMPORTED_MODULE_8__["useAuth"])();

  var _Form$useForm = antd__WEBPACK_IMPORTED_MODULE_3__["Form"].useForm(),
      _Form$useForm2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      linkVisible = _React$useState2[0],
      setLinkVisible = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState3, 2),
      uploadVisible = _React$useState4[0],
      setUploadVisible = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState5, 2),
      mature = _React$useState6[0],
      setMature = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(true),
      _React$useState8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState7, 2),
      visibility = _React$useState8[0],
      setVisibility = _React$useState8[1];

  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(""),
      _React$useState10 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState9, 2),
      currentChar = _React$useState10[0],
      setCurrentChar = _React$useState10[1];

  var addCharacter = function addCharacter() {
    var _form$getFieldValue, _form$getFieldValue2;

    if (currentChar && ((_form$getFieldValue = form.getFieldValue("mainCharacters")) === null || _form$getFieldValue === void 0 ? void 0 : _form$getFieldValue.indexOf(currentChar)) === -1 && ((_form$getFieldValue2 = form.getFieldValue("mainCharacters")) === null || _form$getFieldValue2 === void 0 ? void 0 : _form$getFieldValue2.length) < 5) {
      form.setFieldsValue({
        mainCharacters: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(form.getFieldValue("mainCharacters")), [currentChar])
      });
    }

    setCurrentChar("");
    form.setFieldsValue({
      currentChar: ""
    });
  };

  var submit = function submit(values) {
    delete values.currentChar;
    console.log(values);
  };

  var onFailed = function onFailed(error) {
    var errorName = error.errorFields[0].name.toString();
    form.scrollToField(errorName);
  };

  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    if (auth.user) {
      props.getUserCharacters();
    }
  }, [auth]);
  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    form.setFieldsValue({
      mature: mature
    });
  }, [mature]);
  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
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
      lineNumber: 104,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }
  }, __jsx("h2", {
    className: "side-heading",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 9
    }
  }, "Add a new story"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"], {
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
      status: ""
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    gutter: [24, 24],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    sm: 24,
    xs: 24,
    md: 18,
    lg: 18,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
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
      lineNumber: 129,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 17
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    sm: 24,
    xs: 24,
    lg: 6,
    md: 6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
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
      lineNumber: 145,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Select"], {
    mode: "multiple",
    allowClear: true,
    maxTagCount: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 17
    }
  }, _utils_constants__WEBPACK_IMPORTED_MODULE_7__["CATEGORIES"] === null || _utils_constants__WEBPACK_IMPORTED_MODULE_7__["CATEGORIES"] === void 0 ? void 0 : _utils_constants__WEBPACK_IMPORTED_MODULE_7__["CATEGORIES"].sort(function (a, b) {
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
        lineNumber: 169,
        columnNumber: 21
      }
    }, cat.name);
  }))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    gutter: [24, 24],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: 8,
    sm: 24,
    xs: 24,
    lg: 8,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    name: "language",
    label: "Language",
    rules: [{
      required: true,
      message: "A language is required"
    }],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Select"], {
    filterSort: filterSort,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 17
    }
  }, _utils_constants__WEBPACK_IMPORTED_MODULE_7__["LANGUAGES"] === null || _utils_constants__WEBPACK_IMPORTED_MODULE_7__["LANGUAGES"] === void 0 ? void 0 : _utils_constants__WEBPACK_IMPORTED_MODULE_7__["LANGUAGES"].map(function (lang) {
    return __jsx(Option, {
      value: lang.value,
      key: lang.value,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 21
      }
    }, lang.name);
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: 8,
    sm: 24,
    xs: 24,
    lg: 8,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    name: "status",
    label: "Status",
    rules: [{
      required: true,
      message: "A status is required"
    }],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Select"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 17
    }
  }, _utils_constants__WEBPACK_IMPORTED_MODULE_7__["STATUS"].map(function (stat) {
    return __jsx(Option, {
      value: stat.value,
      key: stat.value,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 21
      }
    }, stat.name);
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: 8,
    sm: 24,
    xs: 24,
    lg: 8,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    name: "copyright",
    label: "Copyright",
    rules: [{
      required: true,
      message: "A copyright is required"
    }],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Select"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 17
    }
  }, _utils_constants__WEBPACK_IMPORTED_MODULE_7__["COPYRIGHTS"].map(function (copy) {
    return __jsx(Option, {
      value: copy.value,
      key: copy.value,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 231,
        columnNumber: 21
      }
    }, copy.name);
  }))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    label: "Summary",
    name: "summary",
    rules: [{
      max: 180,
      message: "Your summary cannot exceed 180 characters"
    }],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"].TextArea, {
    autoSize: {
      minRows: 5
    },
    showCount: true,
    maxLength: 180,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 13
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    justify: "space-between",
    gutter: [24, 24],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 11
    }
  }, __jsx(_components_forms_RadioButton__WEBPACK_IMPORTED_MODULE_14__["default"], {
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
      lineNumber: 256,
      columnNumber: 13
    }
  }), __jsx(_components_forms_RadioButton__WEBPACK_IMPORTED_MODULE_14__["default"], {
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
      lineNumber: 270,
      columnNumber: 13
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    lg: 8,
    md: 12,
    sm: 24,
    xs: 24,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 13
    }
  }, __jsx(_components_forms_Tags__WEBPACK_IMPORTED_MODULE_11__["default"], {
    form: form,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 15
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 11
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    name: "mainCharacters",
    label: "Main Characters",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    gutter: [24, 24],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    lg: 12,
    md: 24,
    sm: 24,
    xs: 24,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    gutter: 16,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    span: 22,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 19
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    name: "currentChar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 21
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Select"], {
    disabled: ((_form$getFieldValue3 = form.getFieldValue("mainCharacters")) === null || _form$getFieldValue3 === void 0 ? void 0 : _form$getFieldValue3.length) >= 5 ? true : false,
    onChange: function onChange(val) {
      return setCurrentChar(val);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 23
    }
  }, __jsx(Option, {
    value: "none",
    disabled: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
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
        lineNumber: 322,
        columnNumber: 29
      }
    }, "".concat(_char.firstname, " ").concat(_char.lastname));
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    span: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "select-add-input-iconbox",
    onClick: addCharacter,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
      columnNumber: 21
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335,
      columnNumber: 23
    }
  }, "+"))), __jsx("small", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338,
      columnNumber: 19
    }
  }, "You can add up to 5 main characters"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    lg: 12,
    md: 24,
    sm: 24,
    xs: 24,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    gutter: [16, 24],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342,
      columnNumber: 17
    }
  }, props.characters.filter(function (c) {
    var _form$getFieldValue5;

    return ((_form$getFieldValue5 = form.getFieldValue("mainCharacters")) === null || _form$getFieldValue5 === void 0 ? void 0 : _form$getFieldValue5.indexOf(c.id)) !== -1;
  }).map(function (_char2) {
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      md: 12,
      sm: 24,
      key: _char2.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 350,
        columnNumber: 23
      }
    }, __jsx("div", {
      key: _char2.id,
      className: "main-selected",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 351,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "main-avatar",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 352,
        columnNumber: 27
      }
    }, __jsx("img", {
      src: _char2.image,
      alt: _char2.firstname,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 353,
        columnNumber: 29
      }
    })), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 355,
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
        lineNumber: 356,
        columnNumber: 27
      }
    })));
  }))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 367,
      columnNumber: 11
    }
  }), !uploadVisible && !linkVisible && __jsx("div", {
    className: "upload-btns",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 369,
      columnNumber: 13
    }
  }, __jsx("button", {
    onClick: showUpload,
    type: "button",
    className: "upload-btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370,
      columnNumber: 15
    }
  }, "Upload a cover"), __jsx("button", {
    onClick: showLink,
    type: "button",
    className: "upload-btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374,
      columnNumber: 15
    }
  }, "Submit a link to a cover")), uploadVisible && __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    align: "bottom",
    gutter: [24, 24],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 380,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: 12,
    sm: 24,
    xs: 24,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 381,
      columnNumber: 15
    }
  }, __jsx(_components_forms_UploadImage__WEBPACK_IMPORTED_MODULE_12__["default"], {
    form: form,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 382,
      columnNumber: 17
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: 12,
    sm: 24,
    xs: 24,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 384,
      columnNumber: 15
    }
  }, __jsx("button", {
    onClick: showLink,
    type: "button",
    className: "upload-btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 385,
      columnNumber: 17
    }
  }, "OR Submit a link to a cover"))), linkVisible && __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    align: "bottom",
    gutter: [24, 24],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 392,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    sm: 24,
    xs: 24,
    md: 12,
    lg: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 393,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    rules: [{
      type: "url",
      message: "This field must be a valid url."
    }, function () {
      return {
        validator: function validator(_, value) {
          if (is_image_url__WEBPACK_IMPORTED_MODULE_6___default()(value)) {
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
      lineNumber: 394,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 414,
      columnNumber: 19
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: 12,
    sm: 24,
    xs: 24,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 417,
      columnNumber: 15
    }
  }, __jsx("button", {
    onClick: showUpload,
    type: "button",
    className: "upload-btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 418,
      columnNumber: 17
    }
  }, "Upload a cover"))), __jsx("button", {
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 428,
      columnNumber: 11
    }
  }, "Create"))));
};

_s(NewStory, "wVDBiPa+RQ/DOMGrL2MlV5O0uKE=", false, function () {
  return [_hooks_userHooks__WEBPACK_IMPORTED_MODULE_8__["useAuth"], antd__WEBPACK_IMPORTED_MODULE_3__["Form"].useForm, next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
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

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, {
  getUserCharacters: _redux_actions_charactersActions__WEBPACK_IMPORTED_MODULE_9__["getUserCharacters"],
  addStory: _redux_actions_storiesActions__WEBPACK_IMPORTED_MODULE_10__["addStory"]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3RvcnkvbmV3LmpzIl0sIm5hbWVzIjpbIk9wdGlvbiIsIlNlbGVjdCIsIk5ld1N0b3J5IiwicHJvcHMiLCJhdXRoIiwidXNlQXV0aCIsIkZvcm0iLCJ1c2VGb3JtIiwiZm9ybSIsInJvdXRlciIsInVzZVJvdXRlciIsIlJlYWN0IiwidXNlU3RhdGUiLCJsaW5rVmlzaWJsZSIsInNldExpbmtWaXNpYmxlIiwidXBsb2FkVmlzaWJsZSIsInNldFVwbG9hZFZpc2libGUiLCJtYXR1cmUiLCJzZXRNYXR1cmUiLCJ2aXNpYmlsaXR5Iiwic2V0VmlzaWJpbGl0eSIsImN1cnJlbnRDaGFyIiwic2V0Q3VycmVudENoYXIiLCJhZGRDaGFyYWN0ZXIiLCJnZXRGaWVsZFZhbHVlIiwiaW5kZXhPZiIsImxlbmd0aCIsInNldEZpZWxkc1ZhbHVlIiwibWFpbkNoYXJhY3RlcnMiLCJzdWJtaXQiLCJ2YWx1ZXMiLCJjb25zb2xlIiwibG9nIiwib25GYWlsZWQiLCJlcnJvciIsImVycm9yTmFtZSIsImVycm9yRmllbGRzIiwibmFtZSIsInRvU3RyaW5nIiwic2Nyb2xsVG9GaWVsZCIsInVzZUVmZmVjdCIsInVzZXIiLCJnZXRVc2VyQ2hhcmFjdGVycyIsImZpbHRlclNvcnQiLCJhIiwiYiIsImtleUEiLCJrZXlCIiwic2hvd0xpbmsiLCJiYW5uZXIiLCJzaG93VXBsb2FkIiwiZ2V0RmllbGRzVmFsdWUiLCJzdW1tYXJ5IiwidGFncyIsInRpdGxlIiwiY2F0ZWdvcmllcyIsImNvcHlyaWdodCIsImxhbmd1YWdlIiwic3RhdHVzIiwicmVxdWlyZWQiLCJtZXNzYWdlIiwibWF4IiwidHlwZSIsIkNBVEVHT1JJRVMiLCJzb3J0IiwibWFwIiwiY2F0IiwidmFsdWUiLCJMQU5HVUFHRVMiLCJsYW5nIiwiU1RBVFVTIiwic3RhdCIsIkNPUFlSSUdIVFMiLCJjb3B5IiwibWluUm93cyIsInZhbCIsImNoYXJhY3RlcnMiLCJmaWx0ZXIiLCJjIiwiaWQiLCJmaXJzdG5hbWUiLCJjaGFyIiwibGFzdG5hbWUiLCJpbWFnZSIsInJlbW92ZUNoYXJhY3RlciIsInZhbGlkYXRvciIsIl8iLCJpc0ltYWdlVXJsIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJFcnJvciIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwidXNlckNoYXJhY3RlcnMiLCJjb25maXJtTWVzc2FnZSIsInN0b3JpZXMiLCJzdG9yeUlkIiwibG9hZGluZyIsImxvYWRpbmdTdG9yeSIsImNvbm5lY3QiLCJhZGRTdG9yeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFXQTtBQUNBO0FBQ0E7QUFFQTtBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0lBRVFBLE0sR0FBV0MsMkMsQ0FBWEQsTTs7QUFFUixJQUFNRSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQTs7QUFDMUIsTUFBTUMsSUFBSSxHQUFHQyxnRUFBTyxFQUFwQjs7QUFEMEIsc0JBRVhDLHlDQUFJLENBQUNDLE9BQUwsRUFGVztBQUFBO0FBQUEsTUFFbkJDLElBRm1COztBQUcxQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUgwQix3QkFJWUMsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEtBQWYsQ0FKWjtBQUFBO0FBQUEsTUFJbkJDLFdBSm1CO0FBQUEsTUFJTkMsY0FKTTs7QUFBQSx5QkFLZ0JILDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBTGhCO0FBQUE7QUFBQSxNQUtuQkcsYUFMbUI7QUFBQSxNQUtKQyxnQkFMSTs7QUFBQSx5QkFNRUwsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEtBQWYsQ0FORjtBQUFBO0FBQUEsTUFNbkJLLE1BTm1CO0FBQUEsTUFNWEMsU0FOVzs7QUFBQSx5QkFPVVAsNENBQUssQ0FBQ0MsUUFBTixDQUFlLElBQWYsQ0FQVjtBQUFBO0FBQUEsTUFPbkJP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Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIFJvdyxcclxuICBDb2wsXHJcbiAgU3BhY2UsXHJcbiAgRGl2aWRlcixcclxuICBGb3JtLFxyXG4gIFNwaW4sXHJcbiAgbWVzc2FnZSxcclxuICBJbnB1dCxcclxuICBTZWxlY3QsXHJcbn0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IGlzSW1hZ2VVcmwgZnJvbSBcImlzLWltYWdlLXVybFwiO1xyXG5cclxuaW1wb3J0IHtcclxuICBDQVRFR09SSUVTLFxyXG4gIENPUFlSSUdIVFMsXHJcbiAgTEFOR1VBR0VTLFxyXG4gIFNUQVRVUyxcclxufSBmcm9tIFwiLi4vLi4vdXRpbHMvY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tIFwiLi4vLi4vaG9va3MvdXNlckhvb2tzXCI7XHJcbmltcG9ydCB7IGdldFVzZXJDaGFyYWN0ZXJzIH0gZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvbnMvY2hhcmFjdGVyc0FjdGlvbnNcIjtcclxuaW1wb3J0IHsgYWRkU3RvcnkgfSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9ucy9zdG9yaWVzQWN0aW9uc1wiO1xyXG5cclxuaW1wb3J0IFRhZ3MgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZm9ybXMvVGFnc1wiO1xyXG5pbXBvcnQgVXBsb2FkSW1hZ2UgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZm9ybXMvVXBsb2FkSW1hZ2VcIjtcclxuaW1wb3J0IExvYWRlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jb21tb24vTG9hZGVyXCI7XHJcbmltcG9ydCBSYWRpb0J1dHRvbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9mb3Jtcy9SYWRpb0J1dHRvblwiO1xyXG5cclxuY29uc3QgeyBPcHRpb24gfSA9IFNlbGVjdDtcclxuXHJcbmNvbnN0IE5ld1N0b3J5ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgYXV0aCA9IHVzZUF1dGgoKTtcclxuICBjb25zdCBbZm9ybV0gPSBGb3JtLnVzZUZvcm0oKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbbGlua1Zpc2libGUsIHNldExpbmtWaXNpYmxlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdXBsb2FkVmlzaWJsZSwgc2V0VXBsb2FkVmlzaWJsZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW21hdHVyZSwgc2V0TWF0dXJlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdmlzaWJpbGl0eSwgc2V0VmlzaWJpbGl0eV0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbY3VycmVudENoYXIsIHNldEN1cnJlbnRDaGFyXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBhZGRDaGFyYWN0ZXIgPSAoKSA9PiB7XHJcbiAgICBpZiAoXHJcbiAgICAgIGN1cnJlbnRDaGFyICYmXHJcbiAgICAgIGZvcm0uZ2V0RmllbGRWYWx1ZShcIm1haW5DaGFyYWN0ZXJzXCIpPy5pbmRleE9mKGN1cnJlbnRDaGFyKSA9PT0gLTEgJiZcclxuICAgICAgZm9ybS5nZXRGaWVsZFZhbHVlKFwibWFpbkNoYXJhY3RlcnNcIik/Lmxlbmd0aCA8IDVcclxuICAgICkge1xyXG4gICAgICBmb3JtLnNldEZpZWxkc1ZhbHVlKHtcclxuICAgICAgICBtYWluQ2hhcmFjdGVyczogWy4uLmZvcm0uZ2V0RmllbGRWYWx1ZShcIm1haW5DaGFyYWN0ZXJzXCIpLCBjdXJyZW50Q2hhcl0sXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc2V0Q3VycmVudENoYXIoXCJcIik7XHJcbiAgICBmb3JtLnNldEZpZWxkc1ZhbHVlKHsgY3VycmVudENoYXI6IFwiXCIgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc3VibWl0ID0gKHZhbHVlcykgPT4ge1xyXG4gICAgZGVsZXRlIHZhbHVlcy5jdXJyZW50Q2hhcjtcclxuICAgIGNvbnNvbGUubG9nKHZhbHVlcyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25GYWlsZWQgPSAoZXJyb3IpID0+IHtcclxuICAgIGNvbnN0IGVycm9yTmFtZSA9IGVycm9yLmVycm9yRmllbGRzWzBdLm5hbWUudG9TdHJpbmcoKTtcclxuICAgIGZvcm0uc2Nyb2xsVG9GaWVsZChlcnJvck5hbWUpO1xyXG4gIH07XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoYXV0aC51c2VyKSB7XHJcbiAgICAgIHByb3BzLmdldFVzZXJDaGFyYWN0ZXJzKCk7XHJcbiAgICB9XHJcbiAgfSwgW2F1dGhdKTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZvcm0uc2V0RmllbGRzVmFsdWUoeyBtYXR1cmUgfSk7XHJcbiAgfSwgW21hdHVyZV0pO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZm9ybS5zZXRGaWVsZHNWYWx1ZSh7IHB1YmxpYzogdmlzaWJpbGl0eSB9KTtcclxuICB9LCBbdmlzaWJpbGl0eV0pO1xyXG5cclxuICBjb25zdCBmaWx0ZXJTb3J0ID0gKGEsIGIpID0+IHtcclxuICAgIGNvbnN0IGtleUEgPSBhLm5hbWUsXHJcbiAgICAgIGtleUIgPSBiLm5hbWU7XHJcbiAgICBpZiAoa2V5QSA8IGtleUIpIHJldHVybiAtMTtcclxuICAgIGlmIChrZXlBID4ga2V5QikgcmV0dXJuIDE7XHJcbiAgICByZXR1cm4gMDtcclxuICB9O1xyXG5cclxuICBjb25zdCBzaG93TGluayA9ICgpID0+IHtcclxuICAgIGZvcm0uc2V0RmllbGRzVmFsdWUoeyBiYW5uZXI6IG51bGwgfSk7XHJcbiAgICBzZXRMaW5rVmlzaWJsZSh0cnVlKTtcclxuICAgIHNldFVwbG9hZFZpc2libGUoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNob3dVcGxvYWQgPSAoKSA9PiB7XHJcbiAgICBmb3JtLnNldEZpZWxkc1ZhbHVlKHsgYmFubmVyOiBudWxsIH0pO1xyXG4gICAgc2V0TGlua1Zpc2libGUoZmFsc2UpO1xyXG4gICAgc2V0VXBsb2FkVmlzaWJsZSh0cnVlKTtcclxuICB9O1xyXG5cclxuICBjb25zb2xlLmxvZyhmb3JtLmdldEZpZWxkc1ZhbHVlKCkpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ldy1zdG9yeSBjdXN0b20tZm9ybVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyXCI+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInNpZGUtaGVhZGluZ1wiPkFkZCBhIG5ldyBzdG9yeTwvaDI+XHJcbiAgICAgICAgPEZvcm1cclxuICAgICAgICAgIGxheW91dD1cInZlcnRpY2FsXCJcclxuICAgICAgICAgIHNjcm9sbFRvRmlyc3RFcnJvclxyXG4gICAgICAgICAgb25GaW5pc2hGYWlsZWQ9e29uRmFpbGVkfVxyXG4gICAgICAgICAgb25GaW5pc2g9e3N1Ym1pdH1cclxuICAgICAgICAgIGZvcm09e2Zvcm19XHJcbiAgICAgICAgICBpbml0aWFsVmFsdWVzPXt7XHJcbiAgICAgICAgICAgIHN1bW1hcnk6IFwiXCIsXHJcbiAgICAgICAgICAgIG1hdHVyZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHB1YmxpYzogdHJ1ZSxcclxuICAgICAgICAgICAgYmFubmVyOiBcIlwiLFxyXG4gICAgICAgICAgICBtYWluQ2hhcmFjdGVyczogW10sXHJcbiAgICAgICAgICAgIHRhZ3M6IFtdLFxyXG4gICAgICAgICAgICB0aXRsZTogXCJcIixcclxuICAgICAgICAgICAgY2F0ZWdvcmllczogW10sXHJcbiAgICAgICAgICAgIGNvcHlyaWdodDogXCJcIixcclxuICAgICAgICAgICAgbGFuZ3VhZ2U6IFwiXCIsXHJcbiAgICAgICAgICAgIHN0YXR1czogXCJcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFJvdyBndXR0ZXI9e1syNCwgMjRdfT5cclxuICAgICAgICAgICAgPENvbCBzbT17MjR9IHhzPXsyNH0gbWQ9ezE4fSBsZz17MTh9PlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIGNvbG9uPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXHJcbiAgICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJBIHRpdGxlIGlzIHJlcXVpcmVkXCIsXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIHsgbWF4OiA2NSB9LFxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiVGl0bGVcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPENvbCBzbT17MjR9IHhzPXsyNH0gbGc9ezZ9IG1kPXs2fT5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiY2F0ZWdvcmllc1wiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkNhdGVnb3JpZXNcIlxyXG4gICAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiQXQgbGVhc3QgMSBjYXRlZ29yeSBpcyByZXF1aXJlZFwiLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4OiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYXJyYXlcIixcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIllvdSBjYW4gb25seSBzZWxlY3QgdXAgdG8gMiBjYXRlZ29yaWVzXCIsXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3QgbW9kZT1cIm11bHRpcGxlXCIgYWxsb3dDbGVhciBtYXhUYWdDb3VudD17Mn0+XHJcbiAgICAgICAgICAgICAgICAgIHtDQVRFR09SSUVTPy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5QSA9IGEubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgIGtleUIgPSBiLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQ29tcGFyZSB0aGUgMiBkYXRlc1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChrZXlBIDwga2V5QikgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChrZXlBID4ga2V5QikgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgICAgICAgIH0pLm1hcCgoY2F0KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT17Y2F0LnZhbHVlfSBrZXk9e2NhdC52YWx1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7Y2F0Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICA8Um93IGd1dHRlcj17WzI0LCAyNF19PlxyXG4gICAgICAgICAgICA8Q29sIG1kPXs4fSBzbT17MjR9IHhzPXsyNH0gbGc9ezh9PlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJsYW5ndWFnZVwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkxhbmd1YWdlXCJcclxuICAgICAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkEgbGFuZ3VhZ2UgaXMgcmVxdWlyZWRcIixcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFNlbGVjdCBmaWx0ZXJTb3J0PXtmaWx0ZXJTb3J0fT5cclxuICAgICAgICAgICAgICAgICAge0xBTkdVQUdFUz8ubWFwKChsYW5nKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT17bGFuZy52YWx1ZX0ga2V5PXtsYW5nLnZhbHVlfT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtsYW5nLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIG1kPXs4fSBzbT17MjR9IHhzPXsyNH0gbGc9ezh9PlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJzdGF0dXNcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJTdGF0dXNcIlxyXG4gICAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiQSBzdGF0dXMgaXMgcmVxdWlyZWRcIixcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFNlbGVjdD5cclxuICAgICAgICAgICAgICAgICAge1NUQVRVUy5tYXAoKHN0YXQpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPXtzdGF0LnZhbHVlfSBrZXk9e3N0YXQudmFsdWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAge3N0YXQubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICA8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgbWQ9ezh9IHNtPXsyNH0geHM9ezI0fSBsZz17OH0+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImNvcHlyaWdodFwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkNvcHlyaWdodFwiXHJcbiAgICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJBIGNvcHlyaWdodCBpcyByZXF1aXJlZFwiLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICB7Q09QWVJJR0hUUy5tYXAoKGNvcHkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPXtjb3B5LnZhbHVlfSBrZXk9e2NvcHkudmFsdWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAge2NvcHkubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICA8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgbGFiZWw9XCJTdW1tYXJ5XCJcclxuICAgICAgICAgICAgbmFtZT1cInN1bW1hcnlcIlxyXG4gICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG1heDogMTgwLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJZb3VyIHN1bW1hcnkgY2Fubm90IGV4Y2VlZCAxODAgY2hhcmFjdGVyc1wiLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJbnB1dC5UZXh0QXJlYVxyXG4gICAgICAgICAgICAgIGF1dG9TaXplPXt7IG1pblJvd3M6IDUgfX1cclxuICAgICAgICAgICAgICBzaG93Q291bnQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgbWF4TGVuZ3RoPXsxODB9XHJcbiAgICAgICAgICAgID48L0lucHV0LlRleHRBcmVhPlxyXG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICA8Um93IGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCIgZ3V0dGVyPXtbMjQsIDI0XX0+XHJcbiAgICAgICAgICAgIDxSYWRpb0J1dHRvblxyXG4gICAgICAgICAgICAgIGxnPXs0fVxyXG4gICAgICAgICAgICAgIHNtPXsxMn1cclxuICAgICAgICAgICAgICB4cz17MjR9XHJcbiAgICAgICAgICAgICAgbWQ9ezh9XHJcbiAgICAgICAgICAgICAgbmFtZT1cInB1YmxpY1wiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJWaXNpYmlsaXR5XCJcclxuICAgICAgICAgICAgICBzZXRGdW5jPXtzZXRWaXNpYmlsaXR5fVxyXG4gICAgICAgICAgICAgIG51bTE9XCIzXCJcclxuICAgICAgICAgICAgICBudW0yPVwiNFwiXHJcbiAgICAgICAgICAgICAgbGFiZWwxPVwiUHVibGljXCJcclxuICAgICAgICAgICAgICBsYWJlbDI9XCJQcml2YXRlXCJcclxuICAgICAgICAgICAgICB2YWw9e3Zpc2liaWxpdHl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxSYWRpb0J1dHRvblxyXG4gICAgICAgICAgICAgIGxnPXs0fVxyXG4gICAgICAgICAgICAgIHNtPXsxMn1cclxuICAgICAgICAgICAgICB4cz17MjR9XHJcbiAgICAgICAgICAgICAgbWQ9ezh9XHJcbiAgICAgICAgICAgICAgdmFsPXttYXR1cmV9XHJcbiAgICAgICAgICAgICAgc2V0RnVuYz17c2V0TWF0dXJlfVxyXG4gICAgICAgICAgICAgIG5hbWU9XCJtYXR1cmVcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiTWF0dXJlIGNvbnRlbnQgP1wiXHJcbiAgICAgICAgICAgICAgbnVtMT1cIjFcIlxyXG4gICAgICAgICAgICAgIG51bTI9XCIyXCJcclxuICAgICAgICAgICAgICBsYWJlbDE9XCJZZXNcIlxyXG4gICAgICAgICAgICAgIGxhYmVsMj1cIk5vXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPENvbCBsZz17OH0gbWQ9ezEyfSBzbT17MjR9IHhzPXsyNH0+XHJcbiAgICAgICAgICAgICAgPFRhZ3MgZm9ybT17Zm9ybX0gLz5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICA8Rm9ybS5JdGVtIG5hbWU9XCJtYWluQ2hhcmFjdGVyc1wiIGxhYmVsPVwiTWFpbiBDaGFyYWN0ZXJzXCI+XHJcbiAgICAgICAgICAgIDxSb3cgZ3V0dGVyPXtbMjQsIDI0XX0+XHJcbiAgICAgICAgICAgICAgPENvbCBsZz17MTJ9IG1kPXsyNH0gc209ezI0fSB4cz17MjR9PlxyXG4gICAgICAgICAgICAgICAgPFJvdyBndXR0ZXI9ezE2fT5cclxuICAgICAgICAgICAgICAgICAgPENvbCBzcGFuPXsyMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbSBuYW1lPVwiY3VycmVudENoYXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm0uZ2V0RmllbGRWYWx1ZShcIm1haW5DaGFyYWN0ZXJzXCIpPy5sZW5ndGggPj0gNVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWwpID0+IHNldEN1cnJlbnRDaGFyKHZhbCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJub25lXCIgZGlzYWJsZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgQ2hvb3NlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuY2hhcmFjdGVyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYykgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5nZXRGaWVsZFZhbHVlKFwibWFpbkNoYXJhY3RlcnNcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/LmluZGV4T2YoYy5pZCkgPT09IC0xXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8uc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5QSA9IGEuZmlyc3RuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlCID0gYi5maXJzdG5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDb21wYXJlIHRoZSAyIGRhdGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoa2V5QSA8IGtleUIpIHJldHVybiAtMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChrZXlBID4ga2V5QikgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKGNoYXIpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtjaGFyLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y2hhci5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID57YCR7Y2hhci5maXJzdG5hbWV9ICR7Y2hhci5sYXN0bmFtZX1gfTwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlbGVjdC1hZGQtaW5wdXQtaWNvbmJveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXthZGRDaGFyYWN0ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Kzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgIDxzbWFsbD5Zb3UgY2FuIGFkZCB1cCB0byA1IG1haW4gY2hhcmFjdGVyczwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8Q29sIGxnPXsxMn0gbWQ9ezI0fSBzbT17MjR9IHhzPXsyNH0+XHJcbiAgICAgICAgICAgICAgICA8Um93IGd1dHRlcj17WzE2LCAyNF19PlxyXG4gICAgICAgICAgICAgICAgICB7cHJvcHMuY2hhcmFjdGVyc1xyXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAoYykgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybS5nZXRGaWVsZFZhbHVlKFwibWFpbkNoYXJhY3RlcnNcIik/LmluZGV4T2YoYy5pZCkgIT09XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0xXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoKGNoYXIpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxDb2wgbWQ9ezEyfSBzbT17MjR9IGtleT17Y2hhci5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtjaGFyLmlkfSBjbGFzc05hbWU9XCJtYWluLXNlbGVjdGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWF2YXRhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2NoYXIuaW1hZ2V9IGFsdD17Y2hhci5maXJzdG5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2Ake2NoYXIuZmlyc3RuYW1lfSAke2NoYXIubGFzdG5hbWV9YH0gPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpb24taWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcmVtb3ZlQ2hhcmFjdGVyKGNoYXIuaWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNsb3NlLWNpcmNsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvaW9uLWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICB7IXVwbG9hZFZpc2libGUgJiYgIWxpbmtWaXNpYmxlICYmIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1cGxvYWQtYnRuc1wiPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17c2hvd1VwbG9hZH0gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cInVwbG9hZC1idG5cIj5cclxuICAgICAgICAgICAgICAgIFVwbG9hZCBhIGNvdmVyXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17c2hvd0xpbmt9IHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJ1cGxvYWQtYnRuXCI+XHJcbiAgICAgICAgICAgICAgICBTdWJtaXQgYSBsaW5rIHRvIGEgY292ZXJcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAge3VwbG9hZFZpc2libGUgJiYgKFxyXG4gICAgICAgICAgICA8Um93IGFsaWduPVwiYm90dG9tXCIgZ3V0dGVyPXtbMjQsIDI0XX0+XHJcbiAgICAgICAgICAgICAgPENvbCBtZD17MTJ9IHNtPXsyNH0geHM9ezI0fT5cclxuICAgICAgICAgICAgICAgIDxVcGxvYWRJbWFnZSBmb3JtPXtmb3JtfSAvPlxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDxDb2wgbWQ9ezEyfSBzbT17MjR9IHhzPXsyNH0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Nob3dMaW5rfSB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwidXBsb2FkLWJ0blwiPlxyXG4gICAgICAgICAgICAgICAgICBPUiBTdWJtaXQgYSBsaW5rIHRvIGEgY292ZXJcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICB7bGlua1Zpc2libGUgJiYgKFxyXG4gICAgICAgICAgICA8Um93IGFsaWduPVwiYm90dG9tXCIgZ3V0dGVyPXtbMjQsIDI0XX0+XHJcbiAgICAgICAgICAgICAgPENvbCBzbT17MjR9IHhzPXsyNH0gbWQ9ezEyfSBsZz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidXJsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIlRoaXMgZmllbGQgbXVzdCBiZSBhIHZhbGlkIHVybC5cIixcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICgpID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3IoXywgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzSW1hZ2VVcmwodmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRXJyb3IoXCJUaGUgbGluayBuZWVkcyB0byBiZSBhbiBpbWFnZVwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTdWJtaXQgYSBsaW5rIHRvIHlvdXIgaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiYmFubmVyXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8Q29sIG1kPXsxMn0gc209ezI0fSB4cz17MjR9PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtzaG93VXBsb2FkfVxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidXBsb2FkLWJ0blwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIFVwbG9hZCBhIGNvdmVyXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+Q3JlYXRlPC9idXR0b24+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XHJcbiAgY2hhcmFjdGVyczogc3RhdGUuY2hhcmFjdGVycy51c2VyQ2hhcmFjdGVycyxcclxuICBjb25maXJtTWVzc2FnZTogc3RhdGUuc3Rvcmllcy5tZXNzYWdlLFxyXG4gIHN0b3J5SWQ6IHN0YXRlLnN0b3JpZXMuc3RvcnlJZCxcclxuICBsb2FkaW5nOiBzdGF0ZS5zdG9yaWVzLmxvYWRpbmdTdG9yeSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgeyBnZXRVc2VyQ2hhcmFjdGVycywgYWRkU3RvcnkgfSkoXHJcbiAgTmV3U3RvcnlcclxuKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==