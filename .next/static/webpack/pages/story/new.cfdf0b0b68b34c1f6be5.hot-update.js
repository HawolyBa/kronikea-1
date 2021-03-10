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
      status: "",
      imageCopyright: ""
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
      lineNumber: 128,
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
      lineNumber: 129,
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
      lineNumber: 130,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
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
      lineNumber: 145,
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
      lineNumber: 146,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Select"], {
    mode: "multiple",
    allowClear: true,
    maxTagCount: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
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
        lineNumber: 170,
        columnNumber: 21
      }
    }, cat.name);
  }))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    gutter: [24, 24],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
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
      lineNumber: 179,
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
      lineNumber: 180,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Select"], {
    filterSort: filterSort,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 17
    }
  }, _utils_constants__WEBPACK_IMPORTED_MODULE_7__["LANGUAGES"] === null || _utils_constants__WEBPACK_IMPORTED_MODULE_7__["LANGUAGES"] === void 0 ? void 0 : _utils_constants__WEBPACK_IMPORTED_MODULE_7__["LANGUAGES"].map(function (lang) {
    return __jsx(Option, {
      value: lang.value,
      key: lang.value,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192,
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
      lineNumber: 199,
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
      lineNumber: 200,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Select"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 17
    }
  }, _utils_constants__WEBPACK_IMPORTED_MODULE_7__["STATUS"].map(function (stat) {
    return __jsx(Option, {
      value: stat.value,
      key: stat.value,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212,
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
      lineNumber: 219,
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
      lineNumber: 220,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Select"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 17
    }
  }, _utils_constants__WEBPACK_IMPORTED_MODULE_7__["COPYRIGHTS"].map(function (copy) {
    return __jsx(Option, {
      value: copy.value,
      key: copy.value,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232,
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
      lineNumber: 240,
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
      lineNumber: 250,
      columnNumber: 13
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    justify: "space-between",
    gutter: [24, 24],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
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
      lineNumber: 257,
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
      lineNumber: 271,
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
      lineNumber: 285,
      columnNumber: 13
    }
  }, __jsx(_components_forms_Tags__WEBPACK_IMPORTED_MODULE_11__["default"], {
    form: form,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 15
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 11
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    name: "mainCharacters",
    label: "Main Characters",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    gutter: [24, 24],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
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
      lineNumber: 292,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    gutter: 16,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    span: 22,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 19
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    name: "currentChar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
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
      lineNumber: 296,
      columnNumber: 23
    }
  }, __jsx(Option, {
    value: "none",
    disabled: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304,
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
        lineNumber: 323,
        columnNumber: 29
      }
    }, "".concat(_char.firstname, " ").concat(_char.lastname));
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    span: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "select-add-input-iconbox",
    onClick: addCharacter,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332,
      columnNumber: 21
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336,
      columnNumber: 23
    }
  }, "+"))), __jsx("small", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339,
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
      lineNumber: 342,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    gutter: [16, 24],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343,
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
        lineNumber: 351,
        columnNumber: 23
      }
    }, __jsx("div", {
      key: _char2.id,
      className: "main-selected",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 352,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "main-avatar",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 353,
        columnNumber: 27
      }
    }, __jsx("img", {
      src: _char2.image,
      alt: _char2.firstname,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 354,
        columnNumber: 29
      }
    })), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 356,
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
        lineNumber: 357,
        columnNumber: 27
      }
    })));
  }))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 368,
      columnNumber: 11
    }
  }), !uploadVisible && !linkVisible && __jsx("div", {
    className: "upload-btns",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370,
      columnNumber: 13
    }
  }, __jsx("button", {
    onClick: showUpload,
    type: "button",
    className: "upload-btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 371,
      columnNumber: 15
    }
  }, "Upload a cover"), __jsx("button", {
    onClick: showLink,
    type: "button",
    className: "upload-btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 375,
      columnNumber: 15
    }
  }, "Submit a link to a cover")), uploadVisible && __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    align: "bottom",
    gutter: [24, 24],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 381,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: 12,
    sm: 24,
    xs: 24,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 382,
      columnNumber: 15
    }
  }, __jsx(_components_forms_UploadImage__WEBPACK_IMPORTED_MODULE_12__["default"], {
    form: form,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383,
      columnNumber: 17
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: 12,
    sm: 24,
    xs: 24,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 385,
      columnNumber: 15
    }
  }, __jsx("button", {
    onClick: showLink,
    type: "button",
    className: "upload-btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 386,
      columnNumber: 17
    }
  }, "OR Submit a link to a cover"))), linkVisible && __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    align: "bottom",
    gutter: [24, 24],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 393,
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
      lineNumber: 394,
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
      lineNumber: 395,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 415,
      columnNumber: 19
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: 12,
    sm: 24,
    xs: 24,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 418,
      columnNumber: 15
    }
  }, __jsx("button", {
    onClick: showUpload,
    type: "button",
    className: "upload-btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 419,
      columnNumber: 17
    }
  }, "Upload a cover"))), __jsx("button", {
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 429,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3RvcnkvbmV3LmpzIl0sIm5hbWVzIjpbIk9wdGlvbiIsIlNlbGVjdCIsIk5ld1N0b3J5IiwicHJvcHMiLCJhdXRoIiwidXNlQXV0aCIsIkZvcm0iLCJ1c2VGb3JtIiwiZm9ybSIsInJvdXRlciIsInVzZVJvdXRlciIsIlJlYWN0IiwidXNlU3RhdGUiLCJsaW5rVmlzaWJsZSIsInNldExpbmtWaXNpYmxlIiwidXBsb2FkVmlzaWJsZSIsInNldFVwbG9hZFZpc2libGUiLCJtYXR1cmUiLCJzZXRNYXR1cmUiLCJ2aXNpYmlsaXR5Iiwic2V0VmlzaWJpbGl0eSIsImN1cnJlbnRDaGFyIiwic2V0Q3VycmVudENoYXIiLCJhZGRDaGFyYWN0ZXIiLCJnZXRGaWVsZFZhbHVlIiwiaW5kZXhPZiIsImxlbmd0aCIsInNldEZpZWxkc1ZhbHVlIiwibWFpbkNoYXJhY3RlcnMiLCJzdWJtaXQiLCJ2YWx1ZXMiLCJjb25zb2xlIiwibG9nIiwib25GYWlsZWQiLCJlcnJvciIsImVycm9yTmFtZSIsImVycm9yRmllbGRzIiwibmFtZSIsInRvU3RyaW5nIiwic2Nyb2xsVG9GaWVsZCIsInVzZUVmZmVjdCIsInVzZXIiLCJnZXRVc2VyQ2hhcmFjdGVycyIsImZpbHRlclNvcnQiLCJhIiwiYiIsImtleUEiLCJrZXlCIiwic2hvd0xpbmsiLCJiYW5uZXIiLCJzaG93VXBsb2FkIiwiZ2V0RmllbGRzVmFsdWUiLCJzdW1tYXJ5IiwidGFncyIsInRpdGxlIiwiY2F0ZWdvcmllcyIsImNvcHlyaWdodCIsImxhbmd1YWdlIiwic3RhdHVzIiwiaW1hZ2VDb3B5cmlnaHQiLCJyZXF1aXJlZCIsIm1lc3NhZ2UiLCJtYXgiLCJ0eXBlIiwiQ0FURUdPUklFUyIsInNvcnQiLCJtYXAiLCJjYXQiLCJ2YWx1ZSIsIkxBTkdVQUdFUyIsImxhbmciLCJTVEFUVVMiLCJzdGF0IiwiQ09QWVJJR0hUUyIsImNvcHkiLCJtaW5Sb3dzIiwidmFsIiwiY2hhcmFjdGVycyIsImZpbHRlciIsImMiLCJpZCIsImZpcnN0bmFtZSIsImNoYXIiLCJsYXN0bmFtZSIsImltYWdlIiwicmVtb3ZlQ2hhcmFjdGVyIiwidmFsaWRhdG9yIiwiXyIsImlzSW1hZ2VVcmwiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIkVycm9yIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJ1c2VyQ2hhcmFjdGVycyIsImNvbmZpcm1NZXNzYWdlIiwic3RvcmllcyIsInN0b3J5SWQiLCJsb2FkaW5nIiwibG9hZGluZ1N0b3J5IiwiY29ubmVjdCIsImFkZFN0b3J5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQVdBO0FBQ0E7QUFDQTtBQUVBO0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7SUFFUUEsTSxHQUFXQywyQyxDQUFYRCxNOztBQUVSLElBQU1FLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBOztBQUMxQixNQUFNQyxJQUFJLEdBQUdDLGdFQUFPLEVBQXBCOztBQUQwQixzQkFFWEMseUNBQUksQ0FBQ0MsT0FBTCxFQUZXO0FBQUE7QUFBQSxNQUVuQkMsSUFGbUI7O0FBRzFCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBSDBCLHdCQUlZQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsS0FBZixDQUpaO0FBQUE7QUFBQSxNQUluQkMsV0FKbUI7QUFBQSxNQUlOQyxjQUpNOztBQUFBLHlCQUtnQkgsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEtBQWYsQ0FMaEI7QUFBQTtBQUFBLE1BS25CRyxhQUxtQjtBQUFBLE1BS0pDLGdCQUxJOztBQUFBLHlCQU1FTCw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsS0FBZixDQU5GO0FBQUE7QUFBQSxNQU1uQkssTUFObUI7QUFBQSxNQU1YQyxTQU5XOztBQUFBLHlCQU9VUCw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsSUFBZixDQVBW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YWNrL3BhZ2VzL3N0b3J5L25ldy5jZmRmMGIwYjY4YjM0YzFmNmJlNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIFJvdyxcclxuICBDb2wsXHJcbiAgU3BhY2UsXHJcbiAgRGl2aWRlcixcclxuICBGb3JtLFxyXG4gIFNwaW4sXHJcbiAgbWVzc2FnZSxcclxuICBJbnB1dCxcclxuICBTZWxlY3QsXHJcbn0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IGlzSW1hZ2VVcmwgZnJvbSBcImlzLWltYWdlLXVybFwiO1xyXG5cclxuaW1wb3J0IHtcclxuICBDQVRFR09SSUVTLFxyXG4gIENPUFlSSUdIVFMsXHJcbiAgTEFOR1VBR0VTLFxyXG4gIFNUQVRVUyxcclxufSBmcm9tIFwiLi4vLi4vdXRpbHMvY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tIFwiLi4vLi4vaG9va3MvdXNlckhvb2tzXCI7XHJcbmltcG9ydCB7IGdldFVzZXJDaGFyYWN0ZXJzIH0gZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvbnMvY2hhcmFjdGVyc0FjdGlvbnNcIjtcclxuaW1wb3J0IHsgYWRkU3RvcnkgfSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9ucy9zdG9yaWVzQWN0aW9uc1wiO1xyXG5cclxuaW1wb3J0IFRhZ3MgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZm9ybXMvVGFnc1wiO1xyXG5pbXBvcnQgVXBsb2FkSW1hZ2UgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZm9ybXMvVXBsb2FkSW1hZ2VcIjtcclxuaW1wb3J0IExvYWRlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jb21tb24vTG9hZGVyXCI7XHJcbmltcG9ydCBSYWRpb0J1dHRvbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9mb3Jtcy9SYWRpb0J1dHRvblwiO1xyXG5cclxuY29uc3QgeyBPcHRpb24gfSA9IFNlbGVjdDtcclxuXHJcbmNvbnN0IE5ld1N0b3J5ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgYXV0aCA9IHVzZUF1dGgoKTtcclxuICBjb25zdCBbZm9ybV0gPSBGb3JtLnVzZUZvcm0oKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbbGlua1Zpc2libGUsIHNldExpbmtWaXNpYmxlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdXBsb2FkVmlzaWJsZSwgc2V0VXBsb2FkVmlzaWJsZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW21hdHVyZSwgc2V0TWF0dXJlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdmlzaWJpbGl0eSwgc2V0VmlzaWJpbGl0eV0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbY3VycmVudENoYXIsIHNldEN1cnJlbnRDaGFyXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBhZGRDaGFyYWN0ZXIgPSAoKSA9PiB7XHJcbiAgICBpZiAoXHJcbiAgICAgIGN1cnJlbnRDaGFyICYmXHJcbiAgICAgIGZvcm0uZ2V0RmllbGRWYWx1ZShcIm1haW5DaGFyYWN0ZXJzXCIpPy5pbmRleE9mKGN1cnJlbnRDaGFyKSA9PT0gLTEgJiZcclxuICAgICAgZm9ybS5nZXRGaWVsZFZhbHVlKFwibWFpbkNoYXJhY3RlcnNcIik/Lmxlbmd0aCA8IDVcclxuICAgICkge1xyXG4gICAgICBmb3JtLnNldEZpZWxkc1ZhbHVlKHtcclxuICAgICAgICBtYWluQ2hhcmFjdGVyczogWy4uLmZvcm0uZ2V0RmllbGRWYWx1ZShcIm1haW5DaGFyYWN0ZXJzXCIpLCBjdXJyZW50Q2hhcl0sXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc2V0Q3VycmVudENoYXIoXCJcIik7XHJcbiAgICBmb3JtLnNldEZpZWxkc1ZhbHVlKHsgY3VycmVudENoYXI6IFwiXCIgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc3VibWl0ID0gKHZhbHVlcykgPT4ge1xyXG4gICAgZGVsZXRlIHZhbHVlcy5jdXJyZW50Q2hhcjtcclxuICAgIGNvbnNvbGUubG9nKHZhbHVlcyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25GYWlsZWQgPSAoZXJyb3IpID0+IHtcclxuICAgIGNvbnN0IGVycm9yTmFtZSA9IGVycm9yLmVycm9yRmllbGRzWzBdLm5hbWUudG9TdHJpbmcoKTtcclxuICAgIGZvcm0uc2Nyb2xsVG9GaWVsZChlcnJvck5hbWUpO1xyXG4gIH07XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoYXV0aC51c2VyKSB7XHJcbiAgICAgIHByb3BzLmdldFVzZXJDaGFyYWN0ZXJzKCk7XHJcbiAgICB9XHJcbiAgfSwgW2F1dGhdKTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZvcm0uc2V0RmllbGRzVmFsdWUoeyBtYXR1cmUgfSk7XHJcbiAgfSwgW21hdHVyZV0pO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZm9ybS5zZXRGaWVsZHNWYWx1ZSh7IHB1YmxpYzogdmlzaWJpbGl0eSB9KTtcclxuICB9LCBbdmlzaWJpbGl0eV0pO1xyXG5cclxuICBjb25zdCBmaWx0ZXJTb3J0ID0gKGEsIGIpID0+IHtcclxuICAgIGNvbnN0IGtleUEgPSBhLm5hbWUsXHJcbiAgICAgIGtleUIgPSBiLm5hbWU7XHJcbiAgICBpZiAoa2V5QSA8IGtleUIpIHJldHVybiAtMTtcclxuICAgIGlmIChrZXlBID4ga2V5QikgcmV0dXJuIDE7XHJcbiAgICByZXR1cm4gMDtcclxuICB9O1xyXG5cclxuICBjb25zdCBzaG93TGluayA9ICgpID0+IHtcclxuICAgIGZvcm0uc2V0RmllbGRzVmFsdWUoeyBiYW5uZXI6IG51bGwgfSk7XHJcbiAgICBzZXRMaW5rVmlzaWJsZSh0cnVlKTtcclxuICAgIHNldFVwbG9hZFZpc2libGUoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNob3dVcGxvYWQgPSAoKSA9PiB7XHJcbiAgICBmb3JtLnNldEZpZWxkc1ZhbHVlKHsgYmFubmVyOiBudWxsIH0pO1xyXG4gICAgc2V0TGlua1Zpc2libGUoZmFsc2UpO1xyXG4gICAgc2V0VXBsb2FkVmlzaWJsZSh0cnVlKTtcclxuICB9O1xyXG5cclxuICBjb25zb2xlLmxvZyhmb3JtLmdldEZpZWxkc1ZhbHVlKCkpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ldy1zdG9yeSBjdXN0b20tZm9ybVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyXCI+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInNpZGUtaGVhZGluZ1wiPkFkZCBhIG5ldyBzdG9yeTwvaDI+XHJcbiAgICAgICAgPEZvcm1cclxuICAgICAgICAgIGxheW91dD1cInZlcnRpY2FsXCJcclxuICAgICAgICAgIHNjcm9sbFRvRmlyc3RFcnJvclxyXG4gICAgICAgICAgb25GaW5pc2hGYWlsZWQ9e29uRmFpbGVkfVxyXG4gICAgICAgICAgb25GaW5pc2g9e3N1Ym1pdH1cclxuICAgICAgICAgIGZvcm09e2Zvcm19XHJcbiAgICAgICAgICBpbml0aWFsVmFsdWVzPXt7XHJcbiAgICAgICAgICAgIHN1bW1hcnk6IFwiXCIsXHJcbiAgICAgICAgICAgIG1hdHVyZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHB1YmxpYzogdHJ1ZSxcclxuICAgICAgICAgICAgYmFubmVyOiBcIlwiLFxyXG4gICAgICAgICAgICBtYWluQ2hhcmFjdGVyczogW10sXHJcbiAgICAgICAgICAgIHRhZ3M6IFtdLFxyXG4gICAgICAgICAgICB0aXRsZTogXCJcIixcclxuICAgICAgICAgICAgY2F0ZWdvcmllczogW10sXHJcbiAgICAgICAgICAgIGNvcHlyaWdodDogXCJcIixcclxuICAgICAgICAgICAgbGFuZ3VhZ2U6IFwiXCIsXHJcbiAgICAgICAgICAgIHN0YXR1czogXCJcIixcclxuICAgICAgICAgICAgaW1hZ2VDb3B5cmlnaHQ6IFwiXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxSb3cgZ3V0dGVyPXtbMjQsIDI0XX0+XHJcbiAgICAgICAgICAgIDxDb2wgc209ezI0fSB4cz17MjR9IG1kPXsxOH0gbGc9ezE4fT5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICBjb2xvbj17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICBuYW1lPVwidGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiQSB0aXRsZSBpcyByZXF1aXJlZFwiLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICB7IG1heDogNjUgfSxcclxuICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlRpdGxlXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgc209ezI0fSB4cz17MjR9IGxnPXs2fSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImNhdGVnb3JpZXNcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJDYXRlZ29yaWVzXCJcclxuICAgICAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkF0IGxlYXN0IDEgY2F0ZWdvcnkgaXMgcmVxdWlyZWRcIixcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG1heDogMixcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFycmF5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJZb3UgY2FuIG9ubHkgc2VsZWN0IHVwIHRvIDIgY2F0ZWdvcmllc1wiLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0IG1vZGU9XCJtdWx0aXBsZVwiIGFsbG93Q2xlYXIgbWF4VGFnQ291bnQ9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICB7Q0FURUdPUklFUz8uc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleUEgPSBhLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICBrZXlCID0gYi5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIENvbXBhcmUgdGhlIDIgZGF0ZXNcclxuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5QSA8IGtleUIpIHJldHVybiAtMTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5QSA+IGtleUIpIHJldHVybiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICAgICAgICB9KS5tYXAoKGNhdCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9e2NhdC52YWx1ZX0ga2V5PXtjYXQudmFsdWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAge2NhdC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgPFJvdyBndXR0ZXI9e1syNCwgMjRdfT5cclxuICAgICAgICAgICAgPENvbCBtZD17OH0gc209ezI0fSB4cz17MjR9IGxnPXs4fT5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwibGFuZ3VhZ2VcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJMYW5ndWFnZVwiXHJcbiAgICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJBIGxhbmd1YWdlIGlzIHJlcXVpcmVkXCIsXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3QgZmlsdGVyU29ydD17ZmlsdGVyU29ydH0+XHJcbiAgICAgICAgICAgICAgICAgIHtMQU5HVUFHRVM/Lm1hcCgobGFuZykgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9e2xhbmcudmFsdWV9IGtleT17bGFuZy52YWx1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7bGFuZy5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPENvbCBtZD17OH0gc209ezI0fSB4cz17MjR9IGxnPXs4fT5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwic3RhdHVzXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiU3RhdHVzXCJcclxuICAgICAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkEgc3RhdHVzIGlzIHJlcXVpcmVkXCIsXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgIHtTVEFUVVMubWFwKChzdGF0KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT17c3RhdC52YWx1ZX0ga2V5PXtzdGF0LnZhbHVlfT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtzdGF0Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIG1kPXs4fSBzbT17MjR9IHhzPXsyNH0gbGc9ezh9PlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJjb3B5cmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJDb3B5cmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiQSBjb3B5cmlnaHQgaXMgcmVxdWlyZWRcIixcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFNlbGVjdD5cclxuICAgICAgICAgICAgICAgICAge0NPUFlSSUdIVFMubWFwKChjb3B5KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT17Y29weS52YWx1ZX0ga2V5PXtjb3B5LnZhbHVlfT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtjb3B5Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgIGxhYmVsPVwiU3VtbWFyeVwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJzdW1tYXJ5XCJcclxuICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBtYXg6IDE4MCxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiWW91ciBzdW1tYXJ5IGNhbm5vdCBleGNlZWQgMTgwIGNoYXJhY3RlcnNcIixcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SW5wdXQuVGV4dEFyZWFcclxuICAgICAgICAgICAgICBhdXRvU2l6ZT17eyBtaW5Sb3dzOiA1IH19XHJcbiAgICAgICAgICAgICAgc2hvd0NvdW50PXt0cnVlfVxyXG4gICAgICAgICAgICAgIG1heExlbmd0aD17MTgwfVxyXG4gICAgICAgICAgICA+PC9JbnB1dC5UZXh0QXJlYT5cclxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgPFJvdyBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiIGd1dHRlcj17WzI0LCAyNF19PlxyXG4gICAgICAgICAgICA8UmFkaW9CdXR0b25cclxuICAgICAgICAgICAgICBsZz17NH1cclxuICAgICAgICAgICAgICBzbT17MTJ9XHJcbiAgICAgICAgICAgICAgeHM9ezI0fVxyXG4gICAgICAgICAgICAgIG1kPXs4fVxyXG4gICAgICAgICAgICAgIG5hbWU9XCJwdWJsaWNcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiVmlzaWJpbGl0eVwiXHJcbiAgICAgICAgICAgICAgc2V0RnVuYz17c2V0VmlzaWJpbGl0eX1cclxuICAgICAgICAgICAgICBudW0xPVwiM1wiXHJcbiAgICAgICAgICAgICAgbnVtMj1cIjRcIlxyXG4gICAgICAgICAgICAgIGxhYmVsMT1cIlB1YmxpY1wiXHJcbiAgICAgICAgICAgICAgbGFiZWwyPVwiUHJpdmF0ZVwiXHJcbiAgICAgICAgICAgICAgdmFsPXt2aXNpYmlsaXR5fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8UmFkaW9CdXR0b25cclxuICAgICAgICAgICAgICBsZz17NH1cclxuICAgICAgICAgICAgICBzbT17MTJ9XHJcbiAgICAgICAgICAgICAgeHM9ezI0fVxyXG4gICAgICAgICAgICAgIG1kPXs4fVxyXG4gICAgICAgICAgICAgIHZhbD17bWF0dXJlfVxyXG4gICAgICAgICAgICAgIHNldEZ1bmM9e3NldE1hdHVyZX1cclxuICAgICAgICAgICAgICBuYW1lPVwibWF0dXJlXCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIk1hdHVyZSBjb250ZW50ID9cIlxyXG4gICAgICAgICAgICAgIG51bTE9XCIxXCJcclxuICAgICAgICAgICAgICBudW0yPVwiMlwiXHJcbiAgICAgICAgICAgICAgbGFiZWwxPVwiWWVzXCJcclxuICAgICAgICAgICAgICBsYWJlbDI9XCJOb1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxDb2wgbGc9ezh9IG1kPXsxMn0gc209ezI0fSB4cz17MjR9PlxyXG4gICAgICAgICAgICAgIDxUYWdzIGZvcm09e2Zvcm19IC8+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgPEZvcm0uSXRlbSBuYW1lPVwibWFpbkNoYXJhY3RlcnNcIiBsYWJlbD1cIk1haW4gQ2hhcmFjdGVyc1wiPlxyXG4gICAgICAgICAgICA8Um93IGd1dHRlcj17WzI0LCAyNF19PlxyXG4gICAgICAgICAgICAgIDxDb2wgbGc9ezEyfSBtZD17MjR9IHNtPXsyNH0geHM9ezI0fT5cclxuICAgICAgICAgICAgICAgIDxSb3cgZ3V0dGVyPXsxNn0+XHJcbiAgICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17MjJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0gbmFtZT1cImN1cnJlbnRDaGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtLmdldEZpZWxkVmFsdWUoXCJtYWluQ2hhcmFjdGVyc1wiKT8ubGVuZ3RoID49IDVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsKSA9PiBzZXRDdXJyZW50Q2hhcih2YWwpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwibm9uZVwiIGRpc2FibGVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIENob29zZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmNoYXJhY3RlcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGMpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZ2V0RmllbGRWYWx1ZShcIm1haW5DaGFyYWN0ZXJzXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPy5pbmRleE9mKGMuaWQpID09PSAtMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/LnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleUEgPSBhLmZpcnN0bmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5QiA9IGIuZmlyc3RuYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ29tcGFyZSB0aGUgMiBkYXRlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGtleUEgPCBrZXlCKSByZXR1cm4gLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoa2V5QSA+IGtleUIpIHJldHVybiAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKChjaGFyKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Y2hhci5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NoYXIuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+e2Ake2NoYXIuZmlyc3RuYW1lfSAke2NoYXIubGFzdG5hbWV9YH08L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgPENvbCBzcGFuPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZWxlY3QtYWRkLWlucHV0LWljb25ib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17YWRkQ2hhcmFjdGVyfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPis8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICA8c21hbGw+WW91IGNhbiBhZGQgdXAgdG8gNSBtYWluIGNoYXJhY3RlcnM8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPENvbCBsZz17MTJ9IG1kPXsyNH0gc209ezI0fSB4cz17MjR9PlxyXG4gICAgICAgICAgICAgICAgPFJvdyBndXR0ZXI9e1sxNiwgMjRdfT5cclxuICAgICAgICAgICAgICAgICAge3Byb3BzLmNoYXJhY3RlcnNcclxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgKGMpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm0uZ2V0RmllbGRWYWx1ZShcIm1haW5DaGFyYWN0ZXJzXCIpPy5pbmRleE9mKGMuaWQpICE9PVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAubWFwKChjaGFyKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q29sIG1kPXsxMn0gc209ezI0fSBrZXk9e2NoYXIuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17Y2hhci5pZH0gY2xhc3NOYW1lPVwibWFpbi1zZWxlY3RlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1hdmF0YXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtjaGFyLmltYWdlfSBhbHQ9e2NoYXIuZmlyc3RuYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntgJHtjaGFyLmZpcnN0bmFtZX0gJHtjaGFyLmxhc3RuYW1lfWB9IDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW9uLWljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJlbW92ZUNoYXJhY3RlcihjaGFyLmlkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjbG9zZS1jaXJjbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID48L2lvbi1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgeyF1cGxvYWRWaXNpYmxlICYmICFsaW5rVmlzaWJsZSAmJiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXBsb2FkLWJ0bnNcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Nob3dVcGxvYWR9IHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJ1cGxvYWQtYnRuXCI+XHJcbiAgICAgICAgICAgICAgICBVcGxvYWQgYSBjb3ZlclxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Nob3dMaW5rfSB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwidXBsb2FkLWJ0blwiPlxyXG4gICAgICAgICAgICAgICAgU3VibWl0IGEgbGluayB0byBhIGNvdmVyXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIHt1cGxvYWRWaXNpYmxlICYmIChcclxuICAgICAgICAgICAgPFJvdyBhbGlnbj1cImJvdHRvbVwiIGd1dHRlcj17WzI0LCAyNF19PlxyXG4gICAgICAgICAgICAgIDxDb2wgbWQ9ezEyfSBzbT17MjR9IHhzPXsyNH0+XHJcbiAgICAgICAgICAgICAgICA8VXBsb2FkSW1hZ2UgZm9ybT17Zm9ybX0gLz5cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8Q29sIG1kPXsxMn0gc209ezI0fSB4cz17MjR9PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzaG93TGlua30gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cInVwbG9hZC1idG5cIj5cclxuICAgICAgICAgICAgICAgICAgT1IgU3VibWl0IGEgbGluayB0byBhIGNvdmVyXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAge2xpbmtWaXNpYmxlICYmIChcclxuICAgICAgICAgICAgPFJvdyBhbGlnbj1cImJvdHRvbVwiIGd1dHRlcj17WzI0LCAyNF19PlxyXG4gICAgICAgICAgICAgIDxDb2wgc209ezI0fSB4cz17MjR9IG1kPXsxMn0gbGc9ezEyfT5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInVybFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJUaGlzIGZpZWxkIG11c3QgYmUgYSB2YWxpZCB1cmwuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAoKSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yKF8sIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0ltYWdlVXJsKHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVycm9yKFwiVGhlIGxpbmsgbmVlZHMgdG8gYmUgYW4gaW1hZ2VcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU3VibWl0IGEgbGluayB0byB5b3VyIGltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cImJhbm5lclwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPENvbCBtZD17MTJ9IHNtPXsyNH0geHM9ezI0fT5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17c2hvd1VwbG9hZH1cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInVwbG9hZC1idG5cIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBVcGxvYWQgYSBjb3ZlclxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkNyZWF0ZTwvYnV0dG9uPlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG4gIGNoYXJhY3RlcnM6IHN0YXRlLmNoYXJhY3RlcnMudXNlckNoYXJhY3RlcnMsXHJcbiAgY29uZmlybU1lc3NhZ2U6IHN0YXRlLnN0b3JpZXMubWVzc2FnZSxcclxuICBzdG9yeUlkOiBzdGF0ZS5zdG9yaWVzLnN0b3J5SWQsXHJcbiAgbG9hZGluZzogc3RhdGUuc3Rvcmllcy5sb2FkaW5nU3RvcnksXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHsgZ2V0VXNlckNoYXJhY3RlcnMsIGFkZFN0b3J5IH0pKFxyXG4gIE5ld1N0b3J5XHJcbik7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=