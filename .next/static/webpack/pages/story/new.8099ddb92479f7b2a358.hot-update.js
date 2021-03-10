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

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(""),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      image = _React$useState2[0],
      setImage = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState3, 2),
      linkVisible = _React$useState4[0],
      setLinkVisible = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState5, 2),
      uploadVisible = _React$useState6[0],
      setUploadVisible = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      _React$useState8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState7, 2),
      mature = _React$useState8[0],
      setMature = _React$useState8[1];

  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(true),
      _React$useState10 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState9, 2),
      visibility = _React$useState10[0],
      setVisibility = _React$useState10[1];

  var _React$useState11 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(""),
      _React$useState12 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState11, 2),
      currentChar = _React$useState12[0],
      setCurrentChar = _React$useState12[1];

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
      image: null
    });
    setLinkVisible(true);
    setUploadVisible(false);
  };

  var showUpload = function showUpload() {
    form.setFieldsValue({
      image: null
    });
    setImage("");
    setLinkVisible(false);
    setUploadVisible(true);
  };

  console.log(form.getFieldsValue());
  return __jsx("div", {
    className: "new-story custom-form",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 7
    }
  }, __jsx("h2", {
    className: "side-heading",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
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
      copyright: ""
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
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
  }, __jsx("label", {
    htmlFor: "tags",
    className: "tags-label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 15
    }
  }, "Tags"), __jsx(_components_forms_Tags__WEBPACK_IMPORTED_MODULE_11__["default"], {
    form: form,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 15
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 11
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    name: "mainCharacters",
    label: "Main Characters",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    gutter: [24, 24],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
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
      lineNumber: 294,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    gutter: 16,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    span: 22,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 19
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    name: "currentChar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
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
      lineNumber: 298,
      columnNumber: 23
    }
  }, __jsx(Option, {
    value: "none",
    disabled: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
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
        lineNumber: 325,
        columnNumber: 29
      }
    }, "".concat(_char.firstname, " ").concat(_char.lastname));
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    span: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "select-add-input-iconbox",
    onClick: addCharacter,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 21
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338,
      columnNumber: 23
    }
  }, "+"))), __jsx("small", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341,
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
      lineNumber: 344,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    gutter: [16, 24],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345,
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
        lineNumber: 353,
        columnNumber: 23
      }
    }, __jsx("div", {
      key: _char2.id,
      className: "main-selected",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 354,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "main-avatar",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 355,
        columnNumber: 27
      }
    }, __jsx("img", {
      src: _char2.image,
      alt: _char2.firstname,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 356,
        columnNumber: 29
      }
    })), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 358,
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
        lineNumber: 359,
        columnNumber: 27
      }
    })));
  }))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370,
      columnNumber: 11
    }
  }), !uploadVisible && !linkVisible && __jsx("div", {
    className: "upload-btns",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372,
      columnNumber: 13
    }
  }, __jsx("button", {
    onClick: showUpload,
    type: "button",
    className: "upload-btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373,
      columnNumber: 15
    }
  }, "Upload a cover"), __jsx("button", {
    onClick: showLink,
    type: "button",
    className: "upload-btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377,
      columnNumber: 15
    }
  }, "Submit a link to a cover")), uploadVisible && __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    align: "bottom",
    gutter: [24, 24],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: 12,
    sm: 24,
    xs: 24,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 384,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "input-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 385,
      columnNumber: 17
    }
  }, __jsx(_components_forms_UploadImage__WEBPACK_IMPORTED_MODULE_12__["default"], {
    form: form,
    image: image,
    setImage: setImage,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 386,
      columnNumber: 19
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: 12,
    sm: 24,
    xs: 24,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 389,
      columnNumber: 15
    }
  }, __jsx("button", {
    onClick: showLink,
    type: "button",
    className: "upload-btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 390,
      columnNumber: 17
    }
  }, "OR Submit a link to a cover"))), linkVisible && __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    align: "bottom",
    gutter: [24, 24],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 397,
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
      lineNumber: 398,
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
      lineNumber: 399,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 419,
      columnNumber: 19
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: 12,
    sm: 24,
    xs: 24,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 422,
      columnNumber: 15
    }
  }, __jsx("button", {
    onClick: showUpload,
    type: "button",
    className: "upload-btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 423,
      columnNumber: 17
    }
  }, "Upload a cover"))), __jsx("button", {
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 433,
      columnNumber: 11
    }
  }, "Create"))));
};

_s(NewStory, "88KSrNtrlRckmO0ZogsRrSPizIU=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3RvcnkvbmV3LmpzIl0sIm5hbWVzIjpbIk9wdGlvbiIsIlNlbGVjdCIsIk5ld1N0b3J5IiwicHJvcHMiLCJhdXRoIiwidXNlQXV0aCIsIkZvcm0iLCJ1c2VGb3JtIiwiZm9ybSIsInJvdXRlciIsInVzZVJvdXRlciIsIlJlYWN0IiwidXNlU3RhdGUiLCJpbWFnZSIsInNldEltYWdlIiwibGlua1Zpc2libGUiLCJzZXRMaW5rVmlzaWJsZSIsInVwbG9hZFZpc2libGUiLCJzZXRVcGxvYWRWaXNpYmxlIiwibWF0dXJlIiwic2V0TWF0dXJlIiwidmlzaWJpbGl0eSIsInNldFZpc2liaWxpdHkiLCJjdXJyZW50Q2hhciIsInNldEN1cnJlbnRDaGFyIiwiYWRkQ2hhcmFjdGVyIiwiZ2V0RmllbGRWYWx1ZSIsImluZGV4T2YiLCJsZW5ndGgiLCJzZXRGaWVsZHNWYWx1ZSIsIm1haW5DaGFyYWN0ZXJzIiwic3VibWl0IiwidmFsdWVzIiwiY29uc29sZSIsImxvZyIsIm9uRmFpbGVkIiwiZXJyb3IiLCJlcnJvck5hbWUiLCJlcnJvckZpZWxkcyIsIm5hbWUiLCJ0b1N0cmluZyIsInNjcm9sbFRvRmllbGQiLCJ1c2VFZmZlY3QiLCJ1c2VyIiwiZ2V0VXNlckNoYXJhY3RlcnMiLCJmaWx0ZXJTb3J0IiwiYSIsImIiLCJrZXlBIiwia2V5QiIsInNob3dMaW5rIiwic2hvd1VwbG9hZCIsImdldEZpZWxkc1ZhbHVlIiwic3VtbWFyeSIsImJhbm5lciIsInRhZ3MiLCJ0aXRsZSIsImNhdGVnb3JpZXMiLCJjb3B5cmlnaHQiLCJyZXF1aXJlZCIsIm1lc3NhZ2UiLCJtYXgiLCJ0eXBlIiwiQ0FURUdPUklFUyIsInNvcnQiLCJtYXAiLCJjYXQiLCJ2YWx1ZSIsIkxBTkdVQUdFUyIsImxhbmciLCJTVEFUVVMiLCJzdGF0IiwiQ09QWVJJR0hUUyIsImNvcHkiLCJtaW5Sb3dzIiwidmFsIiwiY2hhcmFjdGVycyIsImZpbHRlciIsImMiLCJpZCIsImZpcnN0bmFtZSIsImNoYXIiLCJsYXN0bmFtZSIsInJlbW92ZUNoYXJhY3RlciIsInZhbGlkYXRvciIsIl8iLCJpc0ltYWdlVXJsIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJFcnJvciIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwidXNlckNoYXJhY3RlcnMiLCJjb25maXJtTWVzc2FnZSIsInN0b3JpZXMiLCJzdG9yeUlkIiwibG9hZGluZyIsImxvYWRpbmdTdG9yeSIsImNvbm5lY3QiLCJhZGRTdG9yeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFXQTtBQUNBO0FBQ0E7QUFFQTtBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0lBRVFBLE0sR0FBV0MsMkMsQ0FBWEQsTTs7QUFFUixJQUFNRSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQTs7QUFDMUIsTUFBTUMsSUFBSSxHQUFHQyxnRUFBTyxFQUFwQjs7QUFEMEIsc0JBRVhDLHlDQUFJLENBQUNDLE9BQUwsRUFGVztBQUFBO0FBQUEsTUFFbkJDLElBRm1COztBQUcxQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUgwQix3QkFJQUMsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEVBQWYsQ0FKQTtBQUFBO0FBQUEsTUFJbkJDLEtBSm1CO0FBQUEsTUFJWkMsUUFKWTs7QUFBQSx5QkFLWUgsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEtBQWYsQ0FMWjtBQUFBO0FBQUEsTUFLbkJHLFdBTG1CO0FBQUEsTUFLTkMsY0FMTTs7QUFBQSx5QkFNZ0JMLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBTmhCO0FBQUE7QUFBQSxNQU1uQkssYUFObUI7QUFBQSxNQU1KQyxnQkFOSTs7QUFBQSx5QkFPRVAsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEtBQWYsQ0FQRjtBQUFBO0FBQUEsTUFPbkJPLE1BUG1CO0FB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QUNHLE9BQU4sQ0FBY0MsT0FIVztBQUlsQ0MsV0FBTyxFQUFFTCxLQUFLLENBQUNHLE9BQU4sQ0FBY0c7QUFKVyxHQUFaO0FBQUEsQ0FBeEI7O0FBT2VDLDBIQUFPLENBQUNSLGVBQUQsRUFBa0I7QUFBRS9DLG1CQUFpQixFQUFqQkEsa0ZBQUY7QUFBcUJ3RCxVQUFRLEVBQVJBLHVFQUFRQTtBQUE3QixDQUFsQixDQUFQLENBQ2JsRyxRQURhLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3RvcnkvbmV3LjgwOTlkZGI5MjQ3OWY3YjJhMzU4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgUm93LFxyXG4gIENvbCxcclxuICBTcGFjZSxcclxuICBEaXZpZGVyLFxyXG4gIEZvcm0sXHJcbiAgU3BpbixcclxuICBtZXNzYWdlLFxyXG4gIElucHV0LFxyXG4gIFNlbGVjdCxcclxufSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgaXNJbWFnZVVybCBmcm9tIFwiaXMtaW1hZ2UtdXJsXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIENBVEVHT1JJRVMsXHJcbiAgQ09QWVJJR0hUUyxcclxuICBMQU5HVUFHRVMsXHJcbiAgU1RBVFVTLFxyXG59IGZyb20gXCIuLi8uLi91dGlscy9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gXCIuLi8uLi9ob29rcy91c2VySG9va3NcIjtcclxuaW1wb3J0IHsgZ2V0VXNlckNoYXJhY3RlcnMgfSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9ucy9jaGFyYWN0ZXJzQWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBhZGRTdG9yeSB9IGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25zL3N0b3JpZXNBY3Rpb25zXCI7XHJcblxyXG5pbXBvcnQgVGFncyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9mb3Jtcy9UYWdzXCI7XHJcbmltcG9ydCBVcGxvYWRJbWFnZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9mb3Jtcy9VcGxvYWRJbWFnZVwiO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2NvbW1vbi9Mb2FkZXJcIjtcclxuaW1wb3J0IFJhZGlvQnV0dG9uIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2Zvcm1zL1JhZGlvQnV0dG9uXCI7XHJcblxyXG5jb25zdCB7IE9wdGlvbiB9ID0gU2VsZWN0O1xyXG5cclxuY29uc3QgTmV3U3RvcnkgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBhdXRoID0gdXNlQXV0aCgpO1xyXG4gIGNvbnN0IFtmb3JtXSA9IEZvcm0udXNlRm9ybSgpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFtpbWFnZSwgc2V0SW1hZ2VdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xpbmtWaXNpYmxlLCBzZXRMaW5rVmlzaWJsZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3VwbG9hZFZpc2libGUsIHNldFVwbG9hZFZpc2libGVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFttYXR1cmUsIHNldE1hdHVyZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Zpc2liaWxpdHksIHNldFZpc2liaWxpdHldID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW2N1cnJlbnRDaGFyLCBzZXRDdXJyZW50Q2hhcl0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgYWRkQ2hhcmFjdGVyID0gKCkgPT4ge1xyXG4gICAgaWYgKFxyXG4gICAgICBjdXJyZW50Q2hhciAmJlxyXG4gICAgICBmb3JtLmdldEZpZWxkVmFsdWUoXCJtYWluQ2hhcmFjdGVyc1wiKT8uaW5kZXhPZihjdXJyZW50Q2hhcikgPT09IC0xICYmXHJcbiAgICAgIGZvcm0uZ2V0RmllbGRWYWx1ZShcIm1haW5DaGFyYWN0ZXJzXCIpPy5sZW5ndGggPCA1XHJcbiAgICApIHtcclxuICAgICAgZm9ybS5zZXRGaWVsZHNWYWx1ZSh7XHJcbiAgICAgICAgbWFpbkNoYXJhY3RlcnM6IFsuLi5mb3JtLmdldEZpZWxkVmFsdWUoXCJtYWluQ2hhcmFjdGVyc1wiKSwgY3VycmVudENoYXJdLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHNldEN1cnJlbnRDaGFyKFwiXCIpO1xyXG4gICAgZm9ybS5zZXRGaWVsZHNWYWx1ZSh7IGN1cnJlbnRDaGFyOiBcIlwiIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHN1Ym1pdCA9ICh2YWx1ZXMpID0+IHtcclxuICAgIGRlbGV0ZSB2YWx1ZXMuY3VycmVudENoYXI7XHJcbiAgICBjb25zb2xlLmxvZyh2YWx1ZXMpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uRmFpbGVkID0gKGVycm9yKSA9PiB7XHJcbiAgICBjb25zdCBlcnJvck5hbWUgPSBlcnJvci5lcnJvckZpZWxkc1swXS5uYW1lLnRvU3RyaW5nKCk7XHJcbiAgICBmb3JtLnNjcm9sbFRvRmllbGQoZXJyb3JOYW1lKTtcclxuICB9O1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGF1dGgudXNlcikge1xyXG4gICAgICBwcm9wcy5nZXRVc2VyQ2hhcmFjdGVycygpO1xyXG4gICAgfVxyXG4gIH0sIFthdXRoXSk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmb3JtLnNldEZpZWxkc1ZhbHVlKHsgbWF0dXJlIH0pO1xyXG4gIH0sIFttYXR1cmVdKTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZvcm0uc2V0RmllbGRzVmFsdWUoeyBwdWJsaWM6IHZpc2liaWxpdHkgfSk7XHJcbiAgfSwgW3Zpc2liaWxpdHldKTtcclxuXHJcbiAgY29uc3QgZmlsdGVyU29ydCA9IChhLCBiKSA9PiB7XHJcbiAgICBjb25zdCBrZXlBID0gYS5uYW1lLFxyXG4gICAgICBrZXlCID0gYi5uYW1lO1xyXG4gICAgaWYgKGtleUEgPCBrZXlCKSByZXR1cm4gLTE7XHJcbiAgICBpZiAoa2V5QSA+IGtleUIpIHJldHVybiAxO1xyXG4gICAgcmV0dXJuIDA7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2hvd0xpbmsgPSAoKSA9PiB7XHJcbiAgICBmb3JtLnNldEZpZWxkc1ZhbHVlKHsgaW1hZ2U6IG51bGwgfSk7XHJcbiAgICBzZXRMaW5rVmlzaWJsZSh0cnVlKTtcclxuICAgIHNldFVwbG9hZFZpc2libGUoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNob3dVcGxvYWQgPSAoKSA9PiB7XHJcbiAgICBmb3JtLnNldEZpZWxkc1ZhbHVlKHsgaW1hZ2U6IG51bGwgfSk7XHJcbiAgICBzZXRJbWFnZShcIlwiKTtcclxuICAgIHNldExpbmtWaXNpYmxlKGZhbHNlKTtcclxuICAgIHNldFVwbG9hZFZpc2libGUodHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc29sZS5sb2coZm9ybS5nZXRGaWVsZHNWYWx1ZSgpKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJuZXctc3RvcnkgY3VzdG9tLWZvcm1cIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lclwiPlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJzaWRlLWhlYWRpbmdcIj5BZGQgYSBuZXcgc3Rvcnk8L2gyPlxyXG4gICAgICAgIDxGb3JtXHJcbiAgICAgICAgICBsYXlvdXQ9XCJ2ZXJ0aWNhbFwiXHJcbiAgICAgICAgICBzY3JvbGxUb0ZpcnN0RXJyb3JcclxuICAgICAgICAgIG9uRmluaXNoRmFpbGVkPXtvbkZhaWxlZH1cclxuICAgICAgICAgIG9uRmluaXNoPXtzdWJtaXR9XHJcbiAgICAgICAgICBmb3JtPXtmb3JtfVxyXG4gICAgICAgICAgaW5pdGlhbFZhbHVlcz17e1xyXG4gICAgICAgICAgICBzdW1tYXJ5OiBcIlwiLFxyXG4gICAgICAgICAgICBtYXR1cmU6IGZhbHNlLFxyXG4gICAgICAgICAgICBwdWJsaWM6IHRydWUsXHJcbiAgICAgICAgICAgIGJhbm5lcjogXCJcIixcclxuICAgICAgICAgICAgbWFpbkNoYXJhY3RlcnM6IFtdLFxyXG4gICAgICAgICAgICB0YWdzOiBbXSxcclxuICAgICAgICAgICAgdGl0bGU6IFwiXCIsXHJcbiAgICAgICAgICAgIGNhdGVnb3JpZXM6IFtdLFxyXG4gICAgICAgICAgICBjb3B5cmlnaHQ6IFwiXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxSb3cgZ3V0dGVyPXtbMjQsIDI0XX0+XHJcbiAgICAgICAgICAgIDxDb2wgc209ezI0fSB4cz17MjR9IG1kPXsxOH0gbGc9ezE4fT5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICBjb2xvbj17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICBuYW1lPVwidGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiQSB0aXRsZSBpcyByZXF1aXJlZFwiLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICB7IG1heDogNjUgfSxcclxuICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlRpdGxlXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgc209ezI0fSB4cz17MjR9IGxnPXs2fSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImNhdGVnb3JpZXNcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJDYXRlZ29yaWVzXCJcclxuICAgICAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkF0IGxlYXN0IDEgY2F0ZWdvcnkgaXMgcmVxdWlyZWRcIixcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG1heDogMixcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFycmF5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJZb3UgY2FuIG9ubHkgc2VsZWN0IHVwIHRvIDIgY2F0ZWdvcmllc1wiLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0IG1vZGU9XCJtdWx0aXBsZVwiIGFsbG93Q2xlYXIgbWF4VGFnQ291bnQ9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICB7Q0FURUdPUklFUz8uc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleUEgPSBhLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICBrZXlCID0gYi5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIENvbXBhcmUgdGhlIDIgZGF0ZXNcclxuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5QSA8IGtleUIpIHJldHVybiAtMTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5QSA+IGtleUIpIHJldHVybiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICAgICAgICB9KS5tYXAoKGNhdCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9e2NhdC52YWx1ZX0ga2V5PXtjYXQudmFsdWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAge2NhdC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgPFJvdyBndXR0ZXI9e1syNCwgMjRdfT5cclxuICAgICAgICAgICAgPENvbCBtZD17OH0gc209ezI0fSB4cz17MjR9IGxnPXs4fT5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwibGFuZ3VhZ2VcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJMYW5ndWFnZVwiXHJcbiAgICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJBIGxhbmd1YWdlIGlzIHJlcXVpcmVkXCIsXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3QgZmlsdGVyU29ydD17ZmlsdGVyU29ydH0+XHJcbiAgICAgICAgICAgICAgICAgIHtMQU5HVUFHRVM/Lm1hcCgobGFuZykgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9e2xhbmcudmFsdWV9IGtleT17bGFuZy52YWx1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7bGFuZy5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPENvbCBtZD17OH0gc209ezI0fSB4cz17MjR9IGxnPXs4fT5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwic3RhdHVzXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiU3RhdHVzXCJcclxuICAgICAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkEgc3RhdHVzIGlzIHJlcXVpcmVkXCIsXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgIHtTVEFUVVMubWFwKChzdGF0KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT17c3RhdC52YWx1ZX0ga2V5PXtzdGF0LnZhbHVlfT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtzdGF0Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIG1kPXs4fSBzbT17MjR9IHhzPXsyNH0gbGc9ezh9PlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJjb3B5cmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJDb3B5cmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiQSBjb3B5cmlnaHQgaXMgcmVxdWlyZWRcIixcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFNlbGVjdD5cclxuICAgICAgICAgICAgICAgICAge0NPUFlSSUdIVFMubWFwKChjb3B5KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT17Y29weS52YWx1ZX0ga2V5PXtjb3B5LnZhbHVlfT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtjb3B5Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgIGxhYmVsPVwiU3VtbWFyeVwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJzdW1tYXJ5XCJcclxuICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBtYXg6IDE4MCxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiWW91ciBzdW1tYXJ5IGNhbm5vdCBleGNlZWQgMTgwIGNoYXJhY3RlcnNcIixcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SW5wdXQuVGV4dEFyZWFcclxuICAgICAgICAgICAgICBhdXRvU2l6ZT17eyBtaW5Sb3dzOiA1IH19XHJcbiAgICAgICAgICAgICAgc2hvd0NvdW50PXt0cnVlfVxyXG4gICAgICAgICAgICAgIG1heExlbmd0aD17MTgwfVxyXG4gICAgICAgICAgICA+PC9JbnB1dC5UZXh0QXJlYT5cclxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgPFJvdyBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiIGd1dHRlcj17WzI0LCAyNF19PlxyXG4gICAgICAgICAgICA8UmFkaW9CdXR0b25cclxuICAgICAgICAgICAgICBsZz17NH1cclxuICAgICAgICAgICAgICBzbT17MTJ9XHJcbiAgICAgICAgICAgICAgeHM9ezI0fVxyXG4gICAgICAgICAgICAgIG1kPXs4fVxyXG4gICAgICAgICAgICAgIG5hbWU9XCJwdWJsaWNcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiVmlzaWJpbGl0eVwiXHJcbiAgICAgICAgICAgICAgc2V0RnVuYz17c2V0VmlzaWJpbGl0eX1cclxuICAgICAgICAgICAgICBudW0xPVwiM1wiXHJcbiAgICAgICAgICAgICAgbnVtMj1cIjRcIlxyXG4gICAgICAgICAgICAgIGxhYmVsMT1cIlB1YmxpY1wiXHJcbiAgICAgICAgICAgICAgbGFiZWwyPVwiUHJpdmF0ZVwiXHJcbiAgICAgICAgICAgICAgdmFsPXt2aXNpYmlsaXR5fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8UmFkaW9CdXR0b25cclxuICAgICAgICAgICAgICBsZz17NH1cclxuICAgICAgICAgICAgICBzbT17MTJ9XHJcbiAgICAgICAgICAgICAgeHM9ezI0fVxyXG4gICAgICAgICAgICAgIG1kPXs4fVxyXG4gICAgICAgICAgICAgIHZhbD17bWF0dXJlfVxyXG4gICAgICAgICAgICAgIHNldEZ1bmM9e3NldE1hdHVyZX1cclxuICAgICAgICAgICAgICBuYW1lPVwibWF0dXJlXCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIk1hdHVyZSBjb250ZW50ID9cIlxyXG4gICAgICAgICAgICAgIG51bTE9XCIxXCJcclxuICAgICAgICAgICAgICBudW0yPVwiMlwiXHJcbiAgICAgICAgICAgICAgbGFiZWwxPVwiWWVzXCJcclxuICAgICAgICAgICAgICBsYWJlbDI9XCJOb1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxDb2wgbGc9ezh9IG1kPXsxMn0gc209ezI0fSB4cz17MjR9PlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGFnc1wiIGNsYXNzTmFtZT1cInRhZ3MtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgIFRhZ3NcclxuICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxUYWdzIGZvcm09e2Zvcm19IC8+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgPEZvcm0uSXRlbSBuYW1lPVwibWFpbkNoYXJhY3RlcnNcIiBsYWJlbD1cIk1haW4gQ2hhcmFjdGVyc1wiPlxyXG4gICAgICAgICAgICA8Um93IGd1dHRlcj17WzI0LCAyNF19PlxyXG4gICAgICAgICAgICAgIDxDb2wgbGc9ezEyfSBtZD17MjR9IHNtPXsyNH0geHM9ezI0fT5cclxuICAgICAgICAgICAgICAgIDxSb3cgZ3V0dGVyPXsxNn0+XHJcbiAgICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17MjJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0gbmFtZT1cImN1cnJlbnRDaGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtLmdldEZpZWxkVmFsdWUoXCJtYWluQ2hhcmFjdGVyc1wiKT8ubGVuZ3RoID49IDVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsKSA9PiBzZXRDdXJyZW50Q2hhcih2YWwpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwibm9uZVwiIGRpc2FibGVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIENob29zZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmNoYXJhY3RlcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGMpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZ2V0RmllbGRWYWx1ZShcIm1haW5DaGFyYWN0ZXJzXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPy5pbmRleE9mKGMuaWQpID09PSAtMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/LnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleUEgPSBhLmZpcnN0bmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5QiA9IGIuZmlyc3RuYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ29tcGFyZSB0aGUgMiBkYXRlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGtleUEgPCBrZXlCKSByZXR1cm4gLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoa2V5QSA+IGtleUIpIHJldHVybiAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKChjaGFyKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Y2hhci5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NoYXIuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+e2Ake2NoYXIuZmlyc3RuYW1lfSAke2NoYXIubGFzdG5hbWV9YH08L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgPENvbCBzcGFuPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZWxlY3QtYWRkLWlucHV0LWljb25ib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17YWRkQ2hhcmFjdGVyfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPis8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICA8c21hbGw+WW91IGNhbiBhZGQgdXAgdG8gNSBtYWluIGNoYXJhY3RlcnM8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPENvbCBsZz17MTJ9IG1kPXsyNH0gc209ezI0fSB4cz17MjR9PlxyXG4gICAgICAgICAgICAgICAgPFJvdyBndXR0ZXI9e1sxNiwgMjRdfT5cclxuICAgICAgICAgICAgICAgICAge3Byb3BzLmNoYXJhY3RlcnNcclxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgKGMpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm0uZ2V0RmllbGRWYWx1ZShcIm1haW5DaGFyYWN0ZXJzXCIpPy5pbmRleE9mKGMuaWQpICE9PVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAubWFwKChjaGFyKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q29sIG1kPXsxMn0gc209ezI0fSBrZXk9e2NoYXIuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17Y2hhci5pZH0gY2xhc3NOYW1lPVwibWFpbi1zZWxlY3RlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1hdmF0YXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtjaGFyLmltYWdlfSBhbHQ9e2NoYXIuZmlyc3RuYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntgJHtjaGFyLmZpcnN0bmFtZX0gJHtjaGFyLmxhc3RuYW1lfWB9IDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW9uLWljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJlbW92ZUNoYXJhY3RlcihjaGFyLmlkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjbG9zZS1jaXJjbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID48L2lvbi1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgeyF1cGxvYWRWaXNpYmxlICYmICFsaW5rVmlzaWJsZSAmJiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXBsb2FkLWJ0bnNcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Nob3dVcGxvYWR9IHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJ1cGxvYWQtYnRuXCI+XHJcbiAgICAgICAgICAgICAgICBVcGxvYWQgYSBjb3ZlclxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Nob3dMaW5rfSB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwidXBsb2FkLWJ0blwiPlxyXG4gICAgICAgICAgICAgICAgU3VibWl0IGEgbGluayB0byBhIGNvdmVyXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIHt1cGxvYWRWaXNpYmxlICYmIChcclxuICAgICAgICAgICAgPFJvdyBhbGlnbj1cImJvdHRvbVwiIGd1dHRlcj17WzI0LCAyNF19PlxyXG4gICAgICAgICAgICAgIDxDb2wgbWQ9ezEyfSBzbT17MjR9IHhzPXsyNH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxVcGxvYWRJbWFnZSBmb3JtPXtmb3JtfSBpbWFnZT17aW1hZ2V9IHNldEltYWdlPXtzZXRJbWFnZX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDxDb2wgbWQ9ezEyfSBzbT17MjR9IHhzPXsyNH0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Nob3dMaW5rfSB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwidXBsb2FkLWJ0blwiPlxyXG4gICAgICAgICAgICAgICAgICBPUiBTdWJtaXQgYSBsaW5rIHRvIGEgY292ZXJcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICB7bGlua1Zpc2libGUgJiYgKFxyXG4gICAgICAgICAgICA8Um93IGFsaWduPVwiYm90dG9tXCIgZ3V0dGVyPXtbMjQsIDI0XX0+XHJcbiAgICAgICAgICAgICAgPENvbCBzbT17MjR9IHhzPXsyNH0gbWQ9ezEyfSBsZz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidXJsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIlRoaXMgZmllbGQgbXVzdCBiZSBhIHZhbGlkIHVybC5cIixcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICgpID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3IoXywgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzSW1hZ2VVcmwodmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRXJyb3IoXCJUaGUgbGluayBuZWVkcyB0byBiZSBhbiBpbWFnZVwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTdWJtaXQgYSBsaW5rIHRvIHlvdXIgaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiYmFubmVyXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8Q29sIG1kPXsxMn0gc209ezI0fSB4cz17MjR9PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtzaG93VXBsb2FkfVxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidXBsb2FkLWJ0blwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIFVwbG9hZCBhIGNvdmVyXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+Q3JlYXRlPC9idXR0b24+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XHJcbiAgY2hhcmFjdGVyczogc3RhdGUuY2hhcmFjdGVycy51c2VyQ2hhcmFjdGVycyxcclxuICBjb25maXJtTWVzc2FnZTogc3RhdGUuc3Rvcmllcy5tZXNzYWdlLFxyXG4gIHN0b3J5SWQ6IHN0YXRlLnN0b3JpZXMuc3RvcnlJZCxcclxuICBsb2FkaW5nOiBzdGF0ZS5zdG9yaWVzLmxvYWRpbmdTdG9yeSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgeyBnZXRVc2VyQ2hhcmFjdGVycywgYWRkU3RvcnkgfSkoXHJcbiAgTmV3U3RvcnlcclxuKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==