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
    console.log(form.getFieldValue("mainCharacters"));
  };

  var submit = function submit(values) {
    delete values.currentChar; // props.addStory({
    //   ...values,
    //   authorName: auth.user.username,
    // });

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
  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    form.setFieldsValue({
      tags: []
    });
    form.setFieldsValue({
      mainCharacters: []
    });
    form.setFieldsValue({
      mainCharacters: []
    });
    form.setFieldsValue({
      mature: false
    });
    form.setFieldsValue({
      "public": true
    });
    form.setFieldsValue({
      banner: null
    });
  }, []);

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

  return __jsx("div", {
    className: "new-story custom-form",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 7
    }
  }, __jsx("h2", {
    className: "side-heading",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 9
    }
  }, "Add a new story"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    layout: "vertical",
    scrollToFirstError: true,
    onFinishFailed: onFailed,
    onFinish: submit,
    form: form,
    initialValues: {
      summary: ""
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    gutter: [24, 24],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
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
      lineNumber: 134,
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
      lineNumber: 135,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
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
      lineNumber: 150,
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
      lineNumber: 151,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Select"], {
    mode: "multiple",
    allowClear: true,
    maxTagCount: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
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
        lineNumber: 175,
        columnNumber: 21
      }
    }, cat.name);
  }))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    gutter: [24, 24],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
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
      lineNumber: 184,
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
      lineNumber: 185,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Select"], {
    filterSort: filterSort,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 17
    }
  }, _utils_constants__WEBPACK_IMPORTED_MODULE_7__["LANGUAGES"] === null || _utils_constants__WEBPACK_IMPORTED_MODULE_7__["LANGUAGES"] === void 0 ? void 0 : _utils_constants__WEBPACK_IMPORTED_MODULE_7__["LANGUAGES"].map(function (lang) {
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
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
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
      lineNumber: 205,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Select"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 17
    }
  }, _utils_constants__WEBPACK_IMPORTED_MODULE_7__["STATUS"].map(function (stat) {
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
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
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
      lineNumber: 225,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Select"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 17
    }
  }, _utils_constants__WEBPACK_IMPORTED_MODULE_7__["COPYRIGHTS"].map(function (copy) {
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
      lineNumber: 245,
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
      lineNumber: 255,
      columnNumber: 13
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    justify: "space-between",
    gutter: [24, 24],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
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
      lineNumber: 262,
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
      lineNumber: 276,
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
      lineNumber: 290,
      columnNumber: 13
    }
  }, __jsx("label", {
    htmlFor: "tags",
    className: "tags-label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 15
    }
  }, "Tags"), __jsx(_components_forms_Tags__WEBPACK_IMPORTED_MODULE_11__["default"], {
    form: form,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 15
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 11
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    name: "mainCharacters",
    label: "Main Characters",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    gutter: [24, 24],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
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
      lineNumber: 300,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    gutter: 16,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    span: 22,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 19
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    name: "currentChar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
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
      lineNumber: 304,
      columnNumber: 23
    }
  }, __jsx(Option, {
    value: "none",
    disabled: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
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
        lineNumber: 331,
        columnNumber: 29
      }
    }, "".concat(_char.firstname, " ").concat(_char.lastname));
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    span: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "select-add-input-iconbox",
    onClick: addCharacter,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340,
      columnNumber: 21
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
      columnNumber: 23
    }
  }, "+"))), __jsx("small", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347,
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
      lineNumber: 350,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    gutter: [16, 24],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351,
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
        lineNumber: 359,
        columnNumber: 23
      }
    }, __jsx("div", {
      key: _char2.id,
      className: "main-selected",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 360,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "main-avatar",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 361,
        columnNumber: 27
      }
    }, __jsx("img", {
      src: _char2.image,
      alt: _char2.firstname,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 362,
        columnNumber: 29
      }
    })), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 364,
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
        lineNumber: 365,
        columnNumber: 27
      }
    })));
  }))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 376,
      columnNumber: 11
    }
  }), !uploadVisible && !linkVisible && __jsx("div", {
    className: "upload-btns",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378,
      columnNumber: 13
    }
  }, __jsx("button", {
    onClick: showUpload,
    type: "button",
    className: "upload-btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379,
      columnNumber: 15
    }
  }, "Upload a cover"), __jsx("button", {
    onClick: showLink,
    type: "button",
    className: "upload-btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383,
      columnNumber: 15
    }
  }, "Submit a link to a cover")), uploadVisible && __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    align: "bottom",
    gutter: [24, 24],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 389,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: 12,
    sm: 24,
    xs: 24,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 390,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "input-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391,
      columnNumber: 17
    }
  }, __jsx(_components_forms_UploadImage__WEBPACK_IMPORTED_MODULE_12__["default"], {
    form: form,
    image: image,
    setImage: setImage,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 392,
      columnNumber: 19
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: 12,
    sm: 24,
    xs: 24,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 395,
      columnNumber: 15
    }
  }, __jsx("button", {
    onClick: showLink,
    type: "button",
    className: "upload-btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 396,
      columnNumber: 17
    }
  }, "OR Submit a link to a cover"))), linkVisible && __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    align: "bottom",
    gutter: [24, 24],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 403,
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
      lineNumber: 404,
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
      lineNumber: 405,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 425,
      columnNumber: 19
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: 12,
    sm: 24,
    xs: 24,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 428,
      columnNumber: 15
    }
  }, __jsx("button", {
    onClick: showUpload,
    type: "button",
    className: "upload-btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 429,
      columnNumber: 17
    }
  }, "Upload a cover"))), __jsx("button", {
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 439,
      columnNumber: 11
    }
  }, "Create"))));
};

_s(NewStory, "T4f7ZF1gTQJzQOWphx//FDBChBw=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3RvcnkvbmV3LmpzIl0sIm5hbWVzIjpbIk9wdGlvbiIsIlNlbGVjdCIsIk5ld1N0b3J5IiwicHJvcHMiLCJhdXRoIiwidXNlQXV0aCIsIkZvcm0iLCJ1c2VGb3JtIiwiZm9ybSIsInJvdXRlciIsInVzZVJvdXRlciIsIlJlYWN0IiwidXNlU3RhdGUiLCJpbWFnZSIsInNldEltYWdlIiwibGlua1Zpc2libGUiLCJzZXRMaW5rVmlzaWJsZSIsInVwbG9hZFZpc2libGUiLCJzZXRVcGxvYWRWaXNpYmxlIiwibWF0dXJlIiwic2V0TWF0dXJlIiwidmlzaWJpbGl0eSIsInNldFZpc2liaWxpdHkiLCJjdXJyZW50Q2hhciIsInNldEN1cnJlbnRDaGFyIiwiYWRkQ2hhcmFjdGVyIiwiZ2V0RmllbGRWYWx1ZSIsImluZGV4T2YiLCJsZW5ndGgiLCJzZXRGaWVsZHNWYWx1ZSIsIm1haW5DaGFyYWN0ZXJzIiwiY29uc29sZSIsImxvZyIsInN1Ym1pdCIsInZhbHVlcyIsIm9uRmFpbGVkIiwiZXJyb3IiLCJlcnJvck5hbWUiLCJlcnJvckZpZWxkcyIsIm5hbWUiLCJ0b1N0cmluZyIsInNjcm9sbFRvRmllbGQiLCJ1c2VFZmZlY3QiLCJ1c2VyIiwiZ2V0VXNlckNoYXJhY3RlcnMiLCJ0YWdzIiwiYmFubmVyIiwiZmlsdGVyU29ydCIsImEiLCJiIiwia2V5QSIsImtleUIiLCJzaG93TGluayIsInNob3dVcGxvYWQiLCJzdW1tYXJ5IiwicmVxdWlyZWQiLCJtZXNzYWdlIiwibWF4IiwidHlwZSIsIkNBVEVHT1JJRVMiLCJzb3J0IiwibWFwIiwiY2F0IiwidmFsdWUiLCJMQU5HVUFHRVMiLCJsYW5nIiwiU1RBVFVTIiwic3RhdCIsIkNPUFlSSUdIVFMiLCJjb3B5IiwibWluUm93cyIsInZhbCIsImNoYXJhY3RlcnMiLCJmaWx0ZXIiLCJjIiwiaWQiLCJmaXJzdG5hbWUiLCJjaGFyIiwibGFzdG5hbWUiLCJyZW1vdmVDaGFyYWN0ZXIiLCJ2YWxpZGF0b3IiLCJfIiwiaXNJbWFnZVVybCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiRXJyb3IiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsInVzZXJDaGFyYWN0ZXJzIiwiY29uZmlybU1lc3NhZ2UiLCJzdG9yaWVzIiwic3RvcnlJZCIsImxvYWRpbmciLCJsb2FkaW5nU3RvcnkiLCJjb25uZWN0IiwiYWRkU3RvcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBV0E7QUFDQTtBQUNBO0FBRUE7QUFNQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtJQUVRQSxNLEdBQVdDLDJDLENBQVhELE07O0FBRVIsSUFBTUUsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUE7O0FBQzFCLE1BQU1DLElBQUksR0FBR0MsZ0VBQU8sRUFBcEI7O0FBRDBCLHNCQUVYQyx5Q0FBSSxDQUFDQyxPQUFMLEVBRlc7QUFBQTtBQUFBLE1BRW5CQyxJQUZtQjs7QUFHMUIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFIMEIsd0JBSUFDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxFQUFmLENBSkE7QUFBQTtBQUFBLE1BSW5CQyxLQUptQjtBQUFBLE1BSVpDLFFBSlk7O0FBQUEseUJBS1lILDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBTFo7QUFBQTtBQUFBLE1BS25CRyxXQUxtQjtBQUFBLE1BS05DLGNBTE07O0FBQUEseUJBTWdCTCw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsS0FBZixDQU5oQjtBQUFBO0FBQUEsTUFNbkJLLGFBTm1CO0FBQUEsTUFNSkMsZ0JBTkk7O0FBQUEseUJBT0VQLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBUEY7QUFBQTtBQUFBLE1BT25CTyxNQVBtQjtBQUFBLE1BT1hDLFNBUFc7O0FBQUEseUJBUVVULDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxJ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Q0FBSSxDQUFDQyxPLEVBQ0xHLHFEOzs7S0FIWFIsUTs7QUE0Wk4sSUFBTXFGLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDbENoQixjQUFVLEVBQUVnQixLQUFLLENBQUNoQixVQUFOLENBQWlCaUIsY0FESztBQUVsQ0Msa0JBQWMsRUFBRUYsS0FBSyxDQUFDRyxPQUFOLENBQWNuQyxPQUZJO0FBR2xDb0MsV0FBTyxFQUFFSixLQUFLLENBQUNHLE9BQU4sQ0FBY0MsT0FIVztBQUlsQ0MsV0FBTyxFQUFFTCxLQUFLLENBQUNHLE9BQU4sQ0FBY0c7QUFKVyxHQUFaO0FBQUEsQ0FBeEI7O0FBT2VDLDBIQUFPLENBQUNSLGVBQUQsRUFBa0I7QUFBRTNDLG1CQUFpQixFQUFqQkEsa0ZBQUY7QUFBcUJvRCxVQUFRLEVBQVJBLHVFQUFRQTtBQUE3QixDQUFsQixDQUFQLENBQ2I5RixRQURhLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3RvcnkvbmV3LmZhNTQ5YzQwYzdiOTM3ZTVhMmRjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgUm93LFxyXG4gIENvbCxcclxuICBTcGFjZSxcclxuICBEaXZpZGVyLFxyXG4gIEZvcm0sXHJcbiAgU3BpbixcclxuICBtZXNzYWdlLFxyXG4gIElucHV0LFxyXG4gIFNlbGVjdCxcclxufSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgaXNJbWFnZVVybCBmcm9tIFwiaXMtaW1hZ2UtdXJsXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIENBVEVHT1JJRVMsXHJcbiAgQ09QWVJJR0hUUyxcclxuICBMQU5HVUFHRVMsXHJcbiAgU1RBVFVTLFxyXG59IGZyb20gXCIuLi8uLi91dGlscy9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gXCIuLi8uLi9ob29rcy91c2VySG9va3NcIjtcclxuaW1wb3J0IHsgZ2V0VXNlckNoYXJhY3RlcnMgfSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9ucy9jaGFyYWN0ZXJzQWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBhZGRTdG9yeSB9IGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25zL3N0b3JpZXNBY3Rpb25zXCI7XHJcblxyXG5pbXBvcnQgVGFncyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9mb3Jtcy9UYWdzXCI7XHJcbmltcG9ydCBVcGxvYWRJbWFnZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9mb3Jtcy9VcGxvYWRJbWFnZVwiO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2NvbW1vbi9Mb2FkZXJcIjtcclxuaW1wb3J0IFJhZGlvQnV0dG9uIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2Zvcm1zL1JhZGlvQnV0dG9uXCI7XHJcblxyXG5jb25zdCB7IE9wdGlvbiB9ID0gU2VsZWN0O1xyXG5cclxuY29uc3QgTmV3U3RvcnkgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBhdXRoID0gdXNlQXV0aCgpO1xyXG4gIGNvbnN0IFtmb3JtXSA9IEZvcm0udXNlRm9ybSgpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFtpbWFnZSwgc2V0SW1hZ2VdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xpbmtWaXNpYmxlLCBzZXRMaW5rVmlzaWJsZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3VwbG9hZFZpc2libGUsIHNldFVwbG9hZFZpc2libGVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFttYXR1cmUsIHNldE1hdHVyZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Zpc2liaWxpdHksIHNldFZpc2liaWxpdHldID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIGNvbnN0IFtjdXJyZW50Q2hhciwgc2V0Q3VycmVudENoYXJdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IGFkZENoYXJhY3RlciA9ICgpID0+IHtcclxuICAgIGlmIChcclxuICAgICAgY3VycmVudENoYXIgJiZcclxuICAgICAgZm9ybS5nZXRGaWVsZFZhbHVlKFwibWFpbkNoYXJhY3RlcnNcIik/LmluZGV4T2YoY3VycmVudENoYXIpID09PSAtMSAmJlxyXG4gICAgICBmb3JtLmdldEZpZWxkVmFsdWUoXCJtYWluQ2hhcmFjdGVyc1wiKT8ubGVuZ3RoIDwgNVxyXG4gICAgKSB7XHJcbiAgICAgIGZvcm0uc2V0RmllbGRzVmFsdWUoe1xyXG4gICAgICAgIG1haW5DaGFyYWN0ZXJzOiBbLi4uZm9ybS5nZXRGaWVsZFZhbHVlKFwibWFpbkNoYXJhY3RlcnNcIiksIGN1cnJlbnRDaGFyXSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzZXRDdXJyZW50Q2hhcihcIlwiKTtcclxuICAgIGZvcm0uc2V0RmllbGRzVmFsdWUoeyBjdXJyZW50Q2hhcjogXCJcIiB9KTtcclxuICAgIGNvbnNvbGUubG9nKGZvcm0uZ2V0RmllbGRWYWx1ZShcIm1haW5DaGFyYWN0ZXJzXCIpKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzdWJtaXQgPSAodmFsdWVzKSA9PiB7XHJcbiAgICBkZWxldGUgdmFsdWVzLmN1cnJlbnRDaGFyO1xyXG4gICAgLy8gcHJvcHMuYWRkU3Rvcnkoe1xyXG4gICAgLy8gICAuLi52YWx1ZXMsXHJcbiAgICAvLyAgIGF1dGhvck5hbWU6IGF1dGgudXNlci51c2VybmFtZSxcclxuICAgIC8vIH0pO1xyXG4gICAgY29uc29sZS5sb2codmFsdWVzKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkZhaWxlZCA9IChlcnJvcikgPT4ge1xyXG4gICAgY29uc3QgZXJyb3JOYW1lID0gZXJyb3IuZXJyb3JGaWVsZHNbMF0ubmFtZS50b1N0cmluZygpO1xyXG4gICAgZm9ybS5zY3JvbGxUb0ZpZWxkKGVycm9yTmFtZSk7XHJcbiAgfTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChhdXRoLnVzZXIpIHtcclxuICAgICAgcHJvcHMuZ2V0VXNlckNoYXJhY3RlcnMoKTtcclxuICAgIH1cclxuICB9LCBbYXV0aF0pO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZm9ybS5zZXRGaWVsZHNWYWx1ZSh7IG1hdHVyZSB9KTtcclxuICB9LCBbbWF0dXJlXSk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmb3JtLnNldEZpZWxkc1ZhbHVlKHsgcHVibGljOiB2aXNpYmlsaXR5IH0pO1xyXG4gIH0sIFt2aXNpYmlsaXR5XSk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmb3JtLnNldEZpZWxkc1ZhbHVlKHsgdGFnczogW10gfSk7XHJcbiAgICBmb3JtLnNldEZpZWxkc1ZhbHVlKHsgbWFpbkNoYXJhY3RlcnM6IFtdIH0pO1xyXG4gICAgZm9ybS5zZXRGaWVsZHNWYWx1ZSh7IG1haW5DaGFyYWN0ZXJzOiBbXSB9KTtcclxuICAgIGZvcm0uc2V0RmllbGRzVmFsdWUoeyBtYXR1cmU6IGZhbHNlIH0pO1xyXG4gICAgZm9ybS5zZXRGaWVsZHNWYWx1ZSh7IHB1YmxpYzogdHJ1ZSB9KTtcclxuICAgIGZvcm0uc2V0RmllbGRzVmFsdWUoeyBiYW5uZXI6IG51bGwgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBmaWx0ZXJTb3J0ID0gKGEsIGIpID0+IHtcclxuICAgIGNvbnN0IGtleUEgPSBhLm5hbWUsXHJcbiAgICAgIGtleUIgPSBiLm5hbWU7XHJcbiAgICBpZiAoa2V5QSA8IGtleUIpIHJldHVybiAtMTtcclxuICAgIGlmIChrZXlBID4ga2V5QikgcmV0dXJuIDE7XHJcbiAgICByZXR1cm4gMDtcclxuICB9O1xyXG5cclxuICBjb25zdCBzaG93TGluayA9ICgpID0+IHtcclxuICAgIGZvcm0uc2V0RmllbGRzVmFsdWUoeyBpbWFnZTogbnVsbCB9KTtcclxuICAgIHNldExpbmtWaXNpYmxlKHRydWUpO1xyXG4gICAgc2V0VXBsb2FkVmlzaWJsZShmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2hvd1VwbG9hZCA9ICgpID0+IHtcclxuICAgIGZvcm0uc2V0RmllbGRzVmFsdWUoeyBpbWFnZTogbnVsbCB9KTtcclxuICAgIHNldEltYWdlKFwiXCIpO1xyXG4gICAgc2V0TGlua1Zpc2libGUoZmFsc2UpO1xyXG4gICAgc2V0VXBsb2FkVmlzaWJsZSh0cnVlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJuZXctc3RvcnkgY3VzdG9tLWZvcm1cIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lclwiPlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJzaWRlLWhlYWRpbmdcIj5BZGQgYSBuZXcgc3Rvcnk8L2gyPlxyXG4gICAgICAgIDxGb3JtXHJcbiAgICAgICAgICBsYXlvdXQ9XCJ2ZXJ0aWNhbFwiXHJcbiAgICAgICAgICBzY3JvbGxUb0ZpcnN0RXJyb3JcclxuICAgICAgICAgIG9uRmluaXNoRmFpbGVkPXtvbkZhaWxlZH1cclxuICAgICAgICAgIG9uRmluaXNoPXtzdWJtaXR9XHJcbiAgICAgICAgICBmb3JtPXtmb3JtfVxyXG4gICAgICAgICAgaW5pdGlhbFZhbHVlcz17e1xyXG4gICAgICAgICAgICBzdW1tYXJ5OiBcIlwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8Um93IGd1dHRlcj17WzI0LCAyNF19PlxyXG4gICAgICAgICAgICA8Q29sIHNtPXsyNH0geHM9ezI0fSBtZD17MTh9IGxnPXsxOH0+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgY29sb249e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInRpdGxlXCJcclxuICAgICAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkEgdGl0bGUgaXMgcmVxdWlyZWRcIixcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgeyBtYXg6IDY1IH0sXHJcbiAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJUaXRsZVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIHNtPXsyNH0geHM9ezI0fSBsZz17Nn0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJjYXRlZ29yaWVzXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiQ2F0ZWdvcmllc1wiXHJcbiAgICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJBdCBsZWFzdCAxIGNhdGVnb3J5IGlzIHJlcXVpcmVkXCIsXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXg6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhcnJheVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiWW91IGNhbiBvbmx5IHNlbGVjdCB1cCB0byAyIGNhdGVnb3JpZXNcIixcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFNlbGVjdCBtb2RlPVwibXVsdGlwbGVcIiBhbGxvd0NsZWFyIG1heFRhZ0NvdW50PXsyfT5cclxuICAgICAgICAgICAgICAgICAge0NBVEVHT1JJRVM/LnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXlBID0gYS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAga2V5QiA9IGIubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBDb21wYXJlIHRoZSAyIGRhdGVzXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleUEgPCBrZXlCKSByZXR1cm4gLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleUEgPiBrZXlCKSByZXR1cm4gMTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgICAgICAgfSkubWFwKChjYXQpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPXtjYXQudmFsdWV9IGtleT17Y2F0LnZhbHVlfT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtjYXQubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICA8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgIDxSb3cgZ3V0dGVyPXtbMjQsIDI0XX0+XHJcbiAgICAgICAgICAgIDxDb2wgbWQ9ezh9IHNtPXsyNH0geHM9ezI0fSBsZz17OH0+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImxhbmd1YWdlXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiTGFuZ3VhZ2VcIlxyXG4gICAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiQSBsYW5ndWFnZSBpcyByZXF1aXJlZFwiLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0IGZpbHRlclNvcnQ9e2ZpbHRlclNvcnR9PlxyXG4gICAgICAgICAgICAgICAgICB7TEFOR1VBR0VTPy5tYXAoKGxhbmcpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPXtsYW5nLnZhbHVlfSBrZXk9e2xhbmcudmFsdWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAge2xhbmcubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICA8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgbWQ9ezh9IHNtPXsyNH0geHM9ezI0fSBsZz17OH0+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInN0YXR1c1wiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlN0YXR1c1wiXHJcbiAgICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJBIHN0YXR1cyBpcyByZXF1aXJlZFwiLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICB7U1RBVFVTLm1hcCgoc3RhdCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9e3N0YXQudmFsdWV9IGtleT17c3RhdC52YWx1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7c3RhdC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPENvbCBtZD17OH0gc209ezI0fSB4cz17MjR9IGxnPXs4fT5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiY29weXJpZ2h0XCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiQ29weXJpZ2h0XCJcclxuICAgICAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkEgY29weXJpZ2h0IGlzIHJlcXVpcmVkXCIsXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgIHtDT1BZUklHSFRTLm1hcCgoY29weSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9e2NvcHkudmFsdWV9IGtleT17Y29weS52YWx1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7Y29weS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICBsYWJlbD1cIlN1bW1hcnlcIlxyXG4gICAgICAgICAgICBuYW1lPVwic3VtbWFyeVwiXHJcbiAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbWF4OiAxODAsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIllvdXIgc3VtbWFyeSBjYW5ub3QgZXhjZWVkIDE4MCBjaGFyYWN0ZXJzXCIsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPElucHV0LlRleHRBcmVhXHJcbiAgICAgICAgICAgICAgYXV0b1NpemU9e3sgbWluUm93czogNSB9fVxyXG4gICAgICAgICAgICAgIHNob3dDb3VudD17dHJ1ZX1cclxuICAgICAgICAgICAgICBtYXhMZW5ndGg9ezE4MH1cclxuICAgICAgICAgICAgPjwvSW5wdXQuVGV4dEFyZWE+XHJcbiAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgIDxSb3cganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIiBndXR0ZXI9e1syNCwgMjRdfT5cclxuICAgICAgICAgICAgPFJhZGlvQnV0dG9uXHJcbiAgICAgICAgICAgICAgbGc9ezR9XHJcbiAgICAgICAgICAgICAgc209ezEyfVxyXG4gICAgICAgICAgICAgIHhzPXsyNH1cclxuICAgICAgICAgICAgICBtZD17OH1cclxuICAgICAgICAgICAgICBuYW1lPVwicHVibGljXCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIlZpc2liaWxpdHlcIlxyXG4gICAgICAgICAgICAgIHNldEZ1bmM9e3NldFZpc2liaWxpdHl9XHJcbiAgICAgICAgICAgICAgbnVtMT1cIjNcIlxyXG4gICAgICAgICAgICAgIG51bTI9XCI0XCJcclxuICAgICAgICAgICAgICBsYWJlbDE9XCJQdWJsaWNcIlxyXG4gICAgICAgICAgICAgIGxhYmVsMj1cIlByaXZhdGVcIlxyXG4gICAgICAgICAgICAgIHZhbD17dmlzaWJpbGl0eX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFJhZGlvQnV0dG9uXHJcbiAgICAgICAgICAgICAgbGc9ezR9XHJcbiAgICAgICAgICAgICAgc209ezEyfVxyXG4gICAgICAgICAgICAgIHhzPXsyNH1cclxuICAgICAgICAgICAgICBtZD17OH1cclxuICAgICAgICAgICAgICB2YWw9e21hdHVyZX1cclxuICAgICAgICAgICAgICBzZXRGdW5jPXtzZXRNYXR1cmV9XHJcbiAgICAgICAgICAgICAgbmFtZT1cIm1hdHVyZVwiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJNYXR1cmUgY29udGVudCA/XCJcclxuICAgICAgICAgICAgICBudW0xPVwiMVwiXHJcbiAgICAgICAgICAgICAgbnVtMj1cIjJcIlxyXG4gICAgICAgICAgICAgIGxhYmVsMT1cIlllc1wiXHJcbiAgICAgICAgICAgICAgbGFiZWwyPVwiTm9cIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Q29sIGxnPXs4fSBtZD17MTJ9IHNtPXsyNH0geHM9ezI0fT5cclxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRhZ3NcIiBjbGFzc05hbWU9XCJ0YWdzLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICBUYWdzXHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8VGFncyBmb3JtPXtmb3JtfSAvPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgIDxGb3JtLkl0ZW0gbmFtZT1cIm1haW5DaGFyYWN0ZXJzXCIgbGFiZWw9XCJNYWluIENoYXJhY3RlcnNcIj5cclxuICAgICAgICAgICAgPFJvdyBndXR0ZXI9e1syNCwgMjRdfT5cclxuICAgICAgICAgICAgICA8Q29sIGxnPXsxMn0gbWQ9ezI0fSBzbT17MjR9IHhzPXsyNH0+XHJcbiAgICAgICAgICAgICAgICA8Um93IGd1dHRlcj17MTZ9PlxyXG4gICAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezIyfT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtIG5hbWU9XCJjdXJyZW50Q2hhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybS5nZXRGaWVsZFZhbHVlKFwibWFpbkNoYXJhY3RlcnNcIik/Lmxlbmd0aCA+PSA1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbCkgPT4gc2V0Q3VycmVudENoYXIodmFsKX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIm5vbmVcIiBkaXNhYmxlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBDaG9vc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5jaGFyYWN0ZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmdldEZpZWxkVmFsdWUoXCJtYWluQ2hhcmFjdGVyc1wiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8uaW5kZXhPZihjLmlkKSA9PT0gLTFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXlBID0gYS5maXJzdG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleUIgPSBiLmZpcnN0bmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENvbXBhcmUgdGhlIDIgZGF0ZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChrZXlBIDwga2V5QikgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGtleUEgPiBrZXlCKSByZXR1cm4gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgoY2hhcikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2NoYXIuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjaGFyLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPntgJHtjaGFyLmZpcnN0bmFtZX0gJHtjaGFyLmxhc3RuYW1lfWB9PC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VsZWN0LWFkZC1pbnB1dC1pY29uYm94XCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2FkZENoYXJhY3Rlcn1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4rPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgPHNtYWxsPllvdSBjYW4gYWRkIHVwIHRvIDUgbWFpbiBjaGFyYWN0ZXJzPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDxDb2wgbGc9ezEyfSBtZD17MjR9IHNtPXsyNH0geHM9ezI0fT5cclxuICAgICAgICAgICAgICAgIDxSb3cgZ3V0dGVyPXtbMTYsIDI0XX0+XHJcbiAgICAgICAgICAgICAgICAgIHtwcm9wcy5jaGFyYWN0ZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihcclxuICAgICAgICAgICAgICAgICAgICAgIChjKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtLmdldEZpZWxkVmFsdWUoXCJtYWluQ2hhcmFjdGVyc1wiKT8uaW5kZXhPZihjLmlkKSAhPT1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLTFcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgLm1hcCgoY2hhcikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPENvbCBtZD17MTJ9IHNtPXsyNH0ga2V5PXtjaGFyLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2NoYXIuaWR9IGNsYXNzTmFtZT1cIm1haW4tc2VsZWN0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tYXZhdGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Y2hhci5pbWFnZX0gYWx0PXtjaGFyLmZpcnN0bmFtZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57YCR7Y2hhci5maXJzdG5hbWV9ICR7Y2hhci5sYXN0bmFtZX1gfSA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGlvbi1pY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByZW1vdmVDaGFyYWN0ZXIoY2hhci5pZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY2xvc2UtY2lyY2xlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9pb24taWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgIHshdXBsb2FkVmlzaWJsZSAmJiAhbGlua1Zpc2libGUgJiYgKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVwbG9hZC1idG5zXCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzaG93VXBsb2FkfSB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwidXBsb2FkLWJ0blwiPlxyXG4gICAgICAgICAgICAgICAgVXBsb2FkIGEgY292ZXJcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzaG93TGlua30gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cInVwbG9hZC1idG5cIj5cclxuICAgICAgICAgICAgICAgIFN1Ym1pdCBhIGxpbmsgdG8gYSBjb3ZlclxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICB7dXBsb2FkVmlzaWJsZSAmJiAoXHJcbiAgICAgICAgICAgIDxSb3cgYWxpZ249XCJib3R0b21cIiBndXR0ZXI9e1syNCwgMjRdfT5cclxuICAgICAgICAgICAgICA8Q29sIG1kPXsxMn0gc209ezI0fSB4cz17MjR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICA8VXBsb2FkSW1hZ2UgZm9ybT17Zm9ybX0gaW1hZ2U9e2ltYWdlfSBzZXRJbWFnZT17c2V0SW1hZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8Q29sIG1kPXsxMn0gc209ezI0fSB4cz17MjR9PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzaG93TGlua30gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cInVwbG9hZC1idG5cIj5cclxuICAgICAgICAgICAgICAgICAgT1IgU3VibWl0IGEgbGluayB0byBhIGNvdmVyXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAge2xpbmtWaXNpYmxlICYmIChcclxuICAgICAgICAgICAgPFJvdyBhbGlnbj1cImJvdHRvbVwiIGd1dHRlcj17WzI0LCAyNF19PlxyXG4gICAgICAgICAgICAgIDxDb2wgc209ezI0fSB4cz17MjR9IG1kPXsxMn0gbGc9ezEyfT5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInVybFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJUaGlzIGZpZWxkIG11c3QgYmUgYSB2YWxpZCB1cmwuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAoKSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yKF8sIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0ltYWdlVXJsKHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVycm9yKFwiVGhlIGxpbmsgbmVlZHMgdG8gYmUgYW4gaW1hZ2VcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU3VibWl0IGEgbGluayB0byB5b3VyIGltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cImJhbm5lclwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPENvbCBtZD17MTJ9IHNtPXsyNH0geHM9ezI0fT5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17c2hvd1VwbG9hZH1cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInVwbG9hZC1idG5cIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBVcGxvYWQgYSBjb3ZlclxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkNyZWF0ZTwvYnV0dG9uPlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG4gIGNoYXJhY3RlcnM6IHN0YXRlLmNoYXJhY3RlcnMudXNlckNoYXJhY3RlcnMsXHJcbiAgY29uZmlybU1lc3NhZ2U6IHN0YXRlLnN0b3JpZXMubWVzc2FnZSxcclxuICBzdG9yeUlkOiBzdGF0ZS5zdG9yaWVzLnN0b3J5SWQsXHJcbiAgbG9hZGluZzogc3RhdGUuc3Rvcmllcy5sb2FkaW5nU3RvcnksXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHsgZ2V0VXNlckNoYXJhY3RlcnMsIGFkZFN0b3J5IH0pKFxyXG4gIE5ld1N0b3J5XHJcbik7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=