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
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/constants */ "./utils/constants.js");
/* harmony import */ var _hooks_userHooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/userHooks */ "./hooks/userHooks.js");
/* harmony import */ var _redux_actions_charactersActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../redux/actions/charactersActions */ "./redux/actions/charactersActions.js");
/* harmony import */ var _redux_actions_storiesActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../redux/actions/storiesActions */ "./redux/actions/storiesActions.js");
/* harmony import */ var _components_common_Input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/common/Input */ "./components/common/Input.js");
/* harmony import */ var _components_common_Select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/common/Select */ "./components/common/Select.js");
/* harmony import */ var _components_forms_Tags__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/forms/Tags */ "./components/forms/Tags.js");
/* harmony import */ var _components_forms_UploadImage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/forms/UploadImage */ "./components/forms/UploadImage.js");
/* harmony import */ var _components_common_Loader__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/common/Loader */ "./components/common/Loader.js");
/* harmony import */ var _components_forms_RadioButton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/forms/RadioButton */ "./components/forms/RadioButton.js");



var _this = undefined,
    _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\pages\\story\\new.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;














var Option = antd__WEBPACK_IMPORTED_MODULE_3__["Select"].Option;

var NewStory = function NewStory(props) {
  _s();

  var _form$getFieldValue3, _props$characters$fil;

  var auth = Object(_hooks_userHooks__WEBPACK_IMPORTED_MODULE_7__["useAuth"])();

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

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(""),
      _React$useState8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState7, 2),
      currentChar = _React$useState8[0],
      setCurrentChar = _React$useState8[1];

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
    console.log(values);
  };

  var onFailed = function onFailed(error) {
    var errorName = error.errorFields[0].name.toString();
    form.scrollToField(errorName); //message.error("There are errors");
  };

  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    if (auth.user) {
      props.getUserCharacters();
    }
  }, [auth]);
  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    form.setFieldsValue({
      tags: []
    });
    form.setFieldsValue({
      mainCharacters: []
    });
    form.setFieldsValue({
      mature: false
    });
    form.setFieldsValue({
      "public": true
    }); // form.setFieldsValue({ currentChar: "" });
  }, []);

  var filterSort = function filterSort(a, b) {
    var keyA = a.name,
        keyB = b.name; // Compare the 2 dates

    if (keyA < keyB) return -1;
    if (keyA > keyB) return 1;
    return 0;
  };

  var showLink = function showLink() {
    setLinkVisible(true);
    setUploadVisible(false);
  };

  var showUpload = function showUpload() {
    setLinkVisible(false);
    setUploadVisible(true);
  };

  console.log(linkVisible, uploadVisible);
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
      lineNumber: 116,
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
      lineNumber: 117,
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
      lineNumber: 118,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
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
      lineNumber: 133,
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
      lineNumber: 134,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Select"], {
    mode: "multiple",
    allowClear: true,
    maxTagCount: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 17
    }
  }, _utils_constants__WEBPACK_IMPORTED_MODULE_6__["CATEGORIES"] === null || _utils_constants__WEBPACK_IMPORTED_MODULE_6__["CATEGORIES"] === void 0 ? void 0 : _utils_constants__WEBPACK_IMPORTED_MODULE_6__["CATEGORIES"].sort(function (a, b) {
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
        lineNumber: 158,
        columnNumber: 21
      }
    }, cat.name);
  }))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    gutter: [24, 24],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
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
      lineNumber: 167,
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
      lineNumber: 168,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Select"], {
    filterSort: filterSort,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 17
    }
  }, _utils_constants__WEBPACK_IMPORTED_MODULE_6__["LANGUAGES"] === null || _utils_constants__WEBPACK_IMPORTED_MODULE_6__["LANGUAGES"] === void 0 ? void 0 : _utils_constants__WEBPACK_IMPORTED_MODULE_6__["LANGUAGES"].map(function (lang) {
    return __jsx(Option, {
      value: lang.value,
      key: lang.value,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180,
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
      lineNumber: 187,
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
      lineNumber: 188,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Select"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 17
    }
  }, _utils_constants__WEBPACK_IMPORTED_MODULE_6__["STATUS"].map(function (stat) {
    return __jsx(Option, {
      value: stat.value,
      key: stat.value,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200,
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
      lineNumber: 207,
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
      lineNumber: 208,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Select"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 17
    }
  }, _utils_constants__WEBPACK_IMPORTED_MODULE_6__["COPYRIGHTS"].map(function (copy) {
    return __jsx(Option, {
      value: copy.value,
      key: copy.value,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220,
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
      lineNumber: 228,
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
      lineNumber: 238,
      columnNumber: 13
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    justify: "space-between",
    gutter: [24, 24],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 11
    }
  }, __jsx(_components_forms_RadioButton__WEBPACK_IMPORTED_MODULE_15__["default"], {
    lg: 4,
    sm: 12,
    xs: 24,
    md: 8,
    name: "public",
    label: "Visibility",
    num1: "3",
    num2: "4",
    label1: "Public",
    label2: "Private",
    defaultValue: form.getFieldValue("public"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 13
    }
  }), __jsx(_components_forms_RadioButton__WEBPACK_IMPORTED_MODULE_15__["default"], {
    lg: 4,
    sm: 12,
    xs: 24,
    md: 8,
    name: "mature",
    label: "Mature content ?",
    num1: "1",
    num2: "2",
    label1: "Yes",
    label2: "No",
    defaultValue: form.getFieldValue("mature"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
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
      lineNumber: 271,
      columnNumber: 13
    }
  }, __jsx("label", {
    htmlFor: "tags",
    className: "tags-label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 15
    }
  }, "Tags"), __jsx(_components_forms_Tags__WEBPACK_IMPORTED_MODULE_12__["default"], {
    form: form,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 15
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 11
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    name: "mainCharacters",
    label: "Main Characters",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    gutter: [24, 24],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
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
      lineNumber: 281,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    gutter: 16,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    span: 22,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 19
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    name: "currentChar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
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
      lineNumber: 285,
      columnNumber: 23
    }
  }, __jsx(Option, {
    value: "none",
    disabled: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
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
        lineNumber: 312,
        columnNumber: 29
      }
    }, "".concat(_char.firstname, " ").concat(_char.lastname));
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    span: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "select-add-input-iconbox",
    onClick: addCharacter,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 21
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325,
      columnNumber: 23
    }
  }, "+"))), __jsx("small", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328,
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
      lineNumber: 331,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    gutter: [16, 24],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332,
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
        lineNumber: 340,
        columnNumber: 23
      }
    }, __jsx("div", {
      key: _char2.id,
      className: "main-selected",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 341,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "main-avatar",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 342,
        columnNumber: 27
      }
    }, __jsx("img", {
      src: _char2.image,
      alt: _char2.firstname,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 343,
        columnNumber: 29
      }
    })), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 345,
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
        lineNumber: 346,
        columnNumber: 27
      }
    })));
  }))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357,
      columnNumber: 11
    }
  }), !uploadVisible && !linkVisible && __jsx("div", {
    className: "upload-btns",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359,
      columnNumber: 13
    }
  }, __jsx("button", {
    onClick: showUpload,
    type: "button",
    className: "upload-btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360,
      columnNumber: 15
    }
  }, "Upload a cover"), __jsx("button", {
    onClick: showLink,
    type: "button",
    className: "upload-btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 364,
      columnNumber: 15
    }
  }, "Submit a link to a cover")), uploadVisible && __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    align: "bottom",
    gutter: [24, 24],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: 12,
    sm: 24,
    xs: 24,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 371,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "input-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372,
      columnNumber: 17
    }
  }, __jsx(_components_forms_UploadImage__WEBPACK_IMPORTED_MODULE_13__["default"], {
    form: form,
    image: image,
    setImage: setImage,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373,
      columnNumber: 19
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: 12,
    sm: 24,
    xs: 24,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 376,
      columnNumber: 15
    }
  }, __jsx("button", {
    onClick: showLink,
    type: "button",
    className: "upload-btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377,
      columnNumber: 17
    }
  }, "OR Submit a link to a cover"))), linkVisible && __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    gutter: [24, 24],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 384,
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
      lineNumber: 385,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    label: "Submit a link to your image",
    name: "image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 386,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 387,
      columnNumber: 19
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
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
    onClick: showUpload,
    type: "button",
    className: "upload-btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391,
      columnNumber: 17
    }
  }, "Upload a cover"))), __jsx("button", {
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 401,
      columnNumber: 11
    }
  }, "Create"))));
};

_s(NewStory, "ZbPRdJwAL1Gq9Du9aFhWAm0obHk=", false, function () {
  return [_hooks_userHooks__WEBPACK_IMPORTED_MODULE_7__["useAuth"], antd__WEBPACK_IMPORTED_MODULE_3__["Form"].useForm, next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
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
  getUserCharacters: _redux_actions_charactersActions__WEBPACK_IMPORTED_MODULE_8__["getUserCharacters"],
  addStory: _redux_actions_storiesActions__WEBPACK_IMPORTED_MODULE_9__["addStory"]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3RvcnkvbmV3LmpzIl0sIm5hbWVzIjpbIk9wdGlvbiIsIlNlbGVjdCIsIk5ld1N0b3J5IiwicHJvcHMiLCJhdXRoIiwidXNlQXV0aCIsIkZvcm0iLCJ1c2VGb3JtIiwiZm9ybSIsInJvdXRlciIsInVzZVJvdXRlciIsIlJlYWN0IiwidXNlU3RhdGUiLCJpbWFnZSIsInNldEltYWdlIiwibGlua1Zpc2libGUiLCJzZXRMaW5rVmlzaWJsZSIsInVwbG9hZFZpc2libGUiLCJzZXRVcGxvYWRWaXNpYmxlIiwiY3VycmVudENoYXIiLCJzZXRDdXJyZW50Q2hhciIsImFkZENoYXJhY3RlciIsImdldEZpZWxkVmFsdWUiLCJpbmRleE9mIiwibGVuZ3RoIiwic2V0RmllbGRzVmFsdWUiLCJtYWluQ2hhcmFjdGVycyIsImNvbnNvbGUiLCJsb2ciLCJzdWJtaXQiLCJ2YWx1ZXMiLCJvbkZhaWxlZCIsImVycm9yIiwiZXJyb3JOYW1lIiwiZXJyb3JGaWVsZHMiLCJuYW1lIiwidG9TdHJpbmciLCJzY3JvbGxUb0ZpZWxkIiwidXNlRWZmZWN0IiwidXNlciIsImdldFVzZXJDaGFyYWN0ZXJzIiwidGFncyIsIm1hdHVyZSIsImZpbHRlclNvcnQiLCJhIiwiYiIsImtleUEiLCJrZXlCIiwic2hvd0xpbmsiLCJzaG93VXBsb2FkIiwicmVxdWlyZWQiLCJtZXNzYWdlIiwibWF4IiwidHlwZSIsIkNBVEVHT1JJRVMiLCJzb3J0IiwibWFwIiwiY2F0IiwidmFsdWUiLCJMQU5HVUFHRVMiLCJsYW5nIiwiU1RBVFVTIiwic3RhdCIsIkNPUFlSSUdIVFMiLCJjb3B5IiwibWluUm93cyIsInZhbCIsImNoYXJhY3RlcnMiLCJmaWx0ZXIiLCJjIiwiaWQiLCJmaXJzdG5hbWUiLCJjaGFyIiwibGFzdG5hbWUiLCJyZW1vdmVDaGFyYWN0ZXIiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsInVzZXJDaGFyYWN0ZXJzIiwiY29uZmlybU1lc3NhZ2UiLCJzdG9yaWVzIiwic3RvcnlJZCIsImxvYWRpbmciLCJsb2FkaW5nU3RvcnkiLCJjb25uZWN0IiwiYWRkU3RvcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBV0E7QUFDQTtBQUVBO0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0lBRVFBLE0sR0FBV0MsMkMsQ0FBWEQsTTs7QUFFUixJQUFNRSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQTs7QUFDMUIsTUFBTUMsSUFBSSxHQUFHQyxnRUFBTyxFQUFwQjs7QUFEMEIsc0JBRVhDLHlDQUFJLENBQUNDLE9BQUwsRUFGVztBQUFBO0FBQUEsTUFFbkJDLElBRm1COztBQUcxQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUgwQix3QkFJQUMsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEVBQWYsQ0FKQTtBQUFBO0FBQUEsTUFJbkJDLEtBSm1CO0FBQUEsTUFJWkMsUUFKWTs7QUFBQSx5QkFLWUgsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEtBQWYsQ0FMWjtBQUFBO0FBQUEsTUFLbkJHLFdBTG1CO0FBQUEsTUFLTkMsY0FMTTs7QUFBQSx5QkFNZ0JMLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBTmhCO0FBQUE7QUFBQSxNQU1uQkssYUFObUI7QUFBQSxNQU1KQyxnQkFOSTs7QUFBQSx5QkFRWVAsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEVBQWYsQ0FSWjtBQUFBO0FBQUEsTUFRbkJPLFdBUm1CO0FBQUEsTUFRTkMsY0FSTTs7QUFVMUIsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUFBOztBQUN6QixRQUNFRixXQUFXLElBQ1gsd0JBQUFYLElBQUksQ0FBQ2MsYUFBTCxDQUFtQixnQkFBbkIsNkVBQXNDQyxPQUF0QyxDQUE4Q0osV0FBOUMsT0FBK0QsQ0FBQyxDQURoRSxJQUVBLHlCQUFBWCxJQUFJLENBQUNjLGFBQUwsQ0FBbUIsZ0JBQW5CLCtFQUFzQ0UsTUFBdEMsSUFBK0MsQ0FIakQsRUFJRTtBQUNBaEIsVUFBSSxDQUFDaUIsY0FBTCxDQUFvQjtBQUNsQkMsc0JBQWMseUdBQU1sQixJQUFJLENBQUNjLGFBQUwsQ0FBbUIsZ0JBQW5CLENBQU4sSUFBNENILFdBQTVDO0FBREksT0FBcEI7QUFHRDs7QUFDREMsa0JBQWMsQ0FBQyxFQUFELENBQWQ7QUFDQVosUUFBSSxDQUFDaUIsY0FBTCxDQUFvQjtBQUFFTixpQkFBVyxFQUFFO0FBQWYsS0FBcEI7QUFDQVEsV0FBTyxDQUFDQyxHQUFSLENBQVlwQixJQUFJLENBQUNjLGFBQUwsQ0FBbUIsZ0JBQW5CLENBQVo7QUFDRCxHQWJEOztBQWVBLE1BQU1PLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLE1BQUQsRUFBWTtBQUN6QkgsV0FBTyxDQUFDQyxHQUFSLENBQVlFLE1BQVo7QUFDRCxHQUZEOztBQUlBLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEtBQUQsRUFBVztBQUMxQixRQUFNQyxTQUFTLEdBQUdELEtBQUssQ0FBQ0UsV0FBTixDQUFrQixDQUFsQixFQUFxQkMsSUFBckIsQ0FBMEJDLFFBQTFCLEVBQWxCO0FBQ0E1QixRQUFJLENBQUM2QixhQUFMLENBQW1CSixTQUFuQixFQUYwQixDQUcxQjtBQUNELEdBSkQ7O0FBTUF0Qiw4Q0FBSyxDQUFDMkIsU0FBTixDQUFnQixZQUFNO0FBQ3BCLFFBQUlsQyxJQUFJLENBQUNtQyxJQUFULEVBQWU7QUFDYnBDLFdBQUssQ0FBQ3FDLGlCQUFOO0FBQ0Q7QUFDRixHQUpELEVBSUcsQ0FBQ3BDLElBQUQsQ0FKSDtBQU1BTyw4Q0FBSyxDQUFDMkIsU0FBTixDQUFnQixZQUFNO0FBQ3BCOUIsUUFBSSxDQUFDaUIsY0FBTCxDQUFvQjtBQUFFZ0IsVUFBSSxFQUFFO0FBQVIsS0FBcEI7QUFDQWpDLFFBQUksQ0FBQ2lCLGNBQUwsQ0FBb0I7QUFBRUMsb0JBQWMsRUFBRTtBQUFsQixLQUFwQjtBQUNBbEIsUUFBSSxDQUFDaUIsY0FBTCxDQUFvQjtBQUFFaUIsWUFBTSxFQUFFO0FBQVYsS0FBcEI7QUFDQWxDLFFBQUksQ0FBQ2lCLGNBQUwsQ0FBb0I7QUFBRSxnQkFBUTtBQUFWLEtBQXBCLEVBSm9CLENBS3BCO0FBQ0QsR0FORCxFQU1HLEVBTkg7O0FBUUEsTUFBTWtCLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLENBQUQsRUFBSUMsQ0FBSixFQUFVO0FBQzNCLFFBQU1DLElBQUksR0FBR0YsQ0FBQyxDQUFDVCxJQUFmO0FBQUEsUUFDRVksSUFBSSxHQUFHRixDQUFDLENBQUNWLElBRFgsQ0FEMkIsQ0FHM0I7O0FBQ0EsUUFBSVcsSUFBSSxHQUFHQyxJQUFYLEVBQWlCLE9BQU8sQ0FBQyxDQUFSO0FBQ2pCLFFBQUlELElBQUksR0FBR0MsSUFBWCxFQUFpQixPQUFPLENBQVA7QUFDakIsV0FBTyxDQUFQO0FBQ0QsR0FQRDs7QUFTQSxNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQ3JCaEMsa0JBQWMsQ0FBQyxJQUFELENBQWQ7QUFDQUUsb0JBQWdCLENBQUMsS0FBRCxDQUFoQjtBQUNELEdBSEQ7O0FBS0EsTUFBTStCLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDdkJqQyxrQkFBYyxDQUFDLEtBQUQsQ0FBZDtBQUNBRSxvQkFBZ0IsQ0FBQyxJQUFELENBQWhCO0FBQ0QsR0FIRDs7QUFLQVMsU0FBTyxDQUFDQyxHQUFSLENBQVliLFdBQVosRUFBeUJFLGFBQXpCO0FBRUEsU0FDRTtBQUFLLGFBQVMsRUFBQyx1QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsY0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLEVBRUUsTUFBQyx5Q0FBRDtBQUNFLFVBQU0sRUFBQyxVQURUO0FBRUUsc0JBQWtCLE1BRnBCO0FBR0Usa0JBQWMsRUFBRWMsUUFIbEI7QUFJRSxZQUFRLEVBQUVGLE1BSlo7QUFLRSxRQUFJLEVBQUVyQixJQUxSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FPRSxNQUFDLHdDQUFEO0FBQUssVUFBTSxFQUFFLENBQUMsRUFBRCxFQUFLLEVBQUwsQ0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3Q0FBRDtBQUFLLE1BQUUsRUFBRSxFQUFUO0FBQWEsTUFBRSxFQUFFLEVBQWpCO0FBQXFCLE1BQUUsRUFBRSxFQUF6QjtBQUE2QixNQUFFLEVBQUUsRUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQ0UsU0FBSyxFQUFFLEtBRFQ7QUFFRSxRQUFJLEVBQUMsT0FGUDtBQUdFLFNBQUssRUFBRSxDQUNMO0FBQ0UwQyxjQUFRLEVBQUUsSUFEWjtBQUVFQyxhQUFPLEVBQUU7QUFGWCxLQURLLEVBS0w7QUFBRUMsU0FBRyxFQUFFO0FBQVAsS0FMSyxDQUhUO0FBVUUsU0FBSyxFQUFDLE9BVlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVlFLE1BQUMsMENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVpGLENBREYsQ0FERixFQWlCRSxNQUFDLHdDQUFEO0FBQUssTUFBRSxFQUFFLEVBQVQ7QUFBYSxNQUFFLEVBQUUsRUFBakI7QUFBcUIsTUFBRSxFQUFFLENBQXpCO0FBQTRCLE1BQUUsRUFBRSxDQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFDRSxRQUFJLEVBQUMsWUFEUDtBQUVFLFNBQUssRUFBQyxZQUZSO0FBR0UsU0FBSyxFQUFFLENBQ0w7QUFDRUYsY0FBUSxFQUFFLElBRFo7QUFFRUMsYUFBTyxFQUFFO0FBRlgsS0FESyxFQUtMO0FBQ0VDLFNBQUcsRUFBRSxDQURQO0FBRUVDLFVBQUksRUFBRSxPQUZSO0FBR0VGLGFBQU8sRUFBRTtBQUhYLEtBTEssQ0FIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBZUUsTUFBQywyQ0FBRDtBQUFRLFFBQUksRUFBQyxVQUFiO0FBQXdCLGNBQVUsTUFBbEM7QUFBbUMsZUFBVyxFQUFFLENBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0csMkRBREgsYUFDR0EsMkRBREgsdUJBQ0dBLDJEQUFVLENBQUVDLElBQVosQ0FBaUIsVUFBQ1gsQ0FBRCxFQUFJQyxDQUFKLEVBQVU7QUFDMUIsUUFBTUMsSUFBSSxHQUFHRixDQUFDLENBQUNULElBQWY7QUFBQSxRQUNFWSxJQUFJLEdBQUdGLENBQUMsQ0FBQ1YsSUFEWCxDQUQwQixDQUcxQjs7QUFDQSxRQUFJVyxJQUFJLEdBQUdDLElBQVgsRUFBaUIsT0FBTyxDQUFDLENBQVI7QUFDakIsUUFBSUQsSUFBSSxHQUFHQyxJQUFYLEVBQWlCLE9BQU8sQ0FBUDtBQUNqQixXQUFPLENBQVA7QUFDRCxHQVBBLEVBT0VTLEdBUEYsQ0FPTSxVQUFDQyxHQUFEO0FBQUEsV0FDTCxNQUFDLE1BQUQ7QUFBUSxXQUFLLEVBQUVBLEdBQUcsQ0FBQ0MsS0FBbkI7QUFBMEIsU0FBRyxFQUFFRCxHQUFHLENBQUNDLEtBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR0QsR0FBRyxDQUFDdEIsSUFEUCxDQURLO0FBQUEsR0FQTixDQURILENBZkYsQ0FERixDQWpCRixDQVBGLEVBeURFLE1BQUMsd0NBQUQ7QUFBSyxVQUFNLEVBQUUsQ0FBQyxFQUFELEVBQUssRUFBTCxDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdDQUFEO0FBQUssTUFBRSxFQUFFLENBQVQ7QUFBWSxNQUFFLEVBQUUsRUFBaEI7QUFBb0IsTUFBRSxFQUFFLEVBQXhCO0FBQTRCLE1BQUUsRUFBRSxDQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFDRSxRQUFJLEVBQUMsVUFEUDtBQUVFLFNBQUssRUFBQyxVQUZSO0FBR0UsU0FBSyxFQUFFLENBQ0w7QUFDRWUsY0FBUSxFQUFFLElBRFo7QUFFRUMsYUFBTyxFQUFFO0FBRlgsS0FESyxDQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FVRSxNQUFDLDJDQUFEO0FBQVEsY0FBVSxFQUFFUixVQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dnQiwwREFESCxhQUNHQSwwREFESCx1QkFDR0EsMERBQVMsQ0FBRUgsR0FBWCxDQUFlLFVBQUNJLElBQUQ7QUFBQSxXQUNkLE1BQUMsTUFBRDtBQUFRLFdBQUssRUFBRUEsSUFBSSxDQUFDRixLQUFwQjtBQUEyQixTQUFHLEVBQUVFLElBQUksQ0FBQ0YsS0FBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHRSxJQUFJLENBQUN6QixJQURSLENBRGM7QUFBQSxHQUFmLENBREgsQ0FWRixDQURGLENBREYsRUFxQkUsTUFBQyx3Q0FBRDtBQUFLLE1BQUUsRUFBRSxDQUFUO0FBQVksTUFBRSxFQUFFLEVBQWhCO0FBQW9CLE1BQUUsRUFBRSxFQUF4QjtBQUE0QixNQUFFLEVBQUUsQ0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQ0UsUUFBSSxFQUFDLFFBRFA7QUFFRSxTQUFLLEVBQUMsUUFGUjtBQUdFLFNBQUssRUFBRSxDQUNMO0FBQ0VlLGNBQVEsRUFBRSxJQURaO0FBRUVDLGFBQU8sRUFBRTtBQUZYLEtBREssQ0FIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBVUUsTUFBQywyQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dVLHVEQUFNLENBQUNMLEdBQVAsQ0FBVyxVQUFDTSxJQUFEO0FBQUEsV0FDVixNQUFDLE1BQUQ7QUFBUSxXQUFLLEVBQUVBLElBQUksQ0FBQ0osS0FBcEI7QUFBMkIsU0FBRyxFQUFFSSxJQUFJLENBQUNKLEtBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR0ksSUFBSSxDQUFDM0IsSUFEUixDQURVO0FBQUEsR0FBWCxDQURILENBVkYsQ0FERixDQXJCRixFQXlDRSxNQUFDLHdDQUFEO0FBQUssTUFBRSxFQUFFLENBQVQ7QUFBWSxNQUFFLEVBQUUsRUFBaEI7QUFBb0IsTUFBRSxFQUFFLEVBQXhCO0FBQTRCLE1BQUUsRUFBRSxDQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFDRSxRQUFJLEVBQUMsV0FEUDtBQUVFLFNBQUssRUFBQyxXQUZSO0FBR0UsU0FBSyxFQUFFLENBQ0w7QUFDRWUsY0FBUSxFQUFFLElBRFo7QUFFRUMsYUFBTyxFQUFFO0FBRlgsS0FESyxDQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FVRSxNQUFDLDJDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR1ksMkRBQVUsQ0FBQ1AsR0FBWCxDQUFlLFVBQUNRLElBQUQ7QUFBQSxXQUNkLE1BQUMsTUFBRDtBQUFRLFdBQUssRUFBRUEsSUFBSSxDQUFDTixLQUFwQjtBQUEyQixTQUFHLEVBQUVNLElBQUksQ0FBQ04sS0FBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHTSxJQUFJLENBQUM3QixJQURSLENBRGM7QUFBQSxHQUFmLENBREgsQ0FWRixDQURGLENBekNGLENBekRGLEVBdUhFLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQ0UsU0FBSyxFQUFDLFNBRFI7QUFFRSxRQUFJLEVBQUMsU0FGUDtBQUdFLFNBQUssRUFBRSxDQUNMO0FBQ0VpQixTQUFHLEVBQUUsR0FEUDtBQUVFRCxhQUFPLEVBQUU7QUFGWCxLQURLLENBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVVFLE1BQUMsMENBQUQsQ0FBTyxRQUFQO0FBQ0UsWUFBUSxFQUFFO0FBQUVjLGFBQU8sRUFBRTtBQUFYLEtBRFo7QUFFRSxhQUFTLEVBQUUsSUFGYjtBQUdFLGFBQVMsRUFBRSxHQUhiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWRixDQXZIRixFQXVJRSxNQUFDLHdDQUFEO0FBQUssV0FBTyxFQUFDLGVBQWI7QUFBNkIsVUFBTSxFQUFFLENBQUMsRUFBRCxFQUFLLEVBQUwsQ0FBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsc0VBQUQ7QUFDRSxNQUFFLEVBQUUsQ0FETjtBQUVFLE1BQUUsRUFBRSxFQUZOO0FBR0UsTUFBRSxFQUFFLEVBSE47QUFJRSxNQUFFLEVBQUUsQ0FKTjtBQUtFLFFBQUksRUFBQyxRQUxQO0FBTUUsU0FBSyxFQUFDLFlBTlI7QUFPRSxRQUFJLEVBQUMsR0FQUDtBQVFFLFFBQUksRUFBQyxHQVJQO0FBU0UsVUFBTSxFQUFDLFFBVFQ7QUFVRSxVQUFNLEVBQUMsU0FWVDtBQVdFLGdCQUFZLEVBQUV6RCxJQUFJLENBQUNjLGFBQUwsQ0FBbUIsUUFBbkIsQ0FYaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBY0UsTUFBQyxzRUFBRDtBQUNFLE1BQUUsRUFBRSxDQUROO0FBRUUsTUFBRSxFQUFFLEVBRk47QUFHRSxNQUFFLEVBQUUsRUFITjtBQUlFLE1BQUUsRUFBRSxDQUpOO0FBS0UsUUFBSSxFQUFDLFFBTFA7QUFNRSxTQUFLLEVBQUMsa0JBTlI7QUFPRSxRQUFJLEVBQUMsR0FQUDtBQVFFLFFBQUksRUFBQyxHQVJQO0FBU0UsVUFBTSxFQUFDLEtBVFQ7QUFVRSxVQUFNLEVBQUMsSUFWVDtBQVdFLGdCQUFZLEVBQUVkLElBQUksQ0FBQ2MsYUFBTCxDQUFtQixRQUFuQixDQVhoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZEYsRUEyQkUsTUFBQyx3Q0FBRDtBQUFLLE1BQUUsRUFBRSxDQUFUO0FBQVksTUFBRSxFQUFFLEVBQWhCO0FBQW9CLE1BQUUsRUFBRSxFQUF4QjtBQUE0QixNQUFFLEVBQUUsRUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU8sV0FBTyxFQUFDLE1BQWY7QUFBc0IsYUFBUyxFQUFDLFlBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQUlFLE1BQUMsK0RBQUQ7QUFBTSxRQUFJLEVBQUVkLElBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLENBM0JGLENBdklGLEVBeUtFLE1BQUMsNENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXpLRixFQTBLRSxNQUFDLHlDQUFELENBQU0sSUFBTjtBQUFXLFFBQUksRUFBQyxnQkFBaEI7QUFBaUMsU0FBSyxFQUFDLGlCQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3Q0FBRDtBQUFLLFVBQU0sRUFBRSxDQUFDLEVBQUQsRUFBSyxFQUFMLENBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0NBQUQ7QUFBSyxNQUFFLEVBQUUsRUFBVDtBQUFhLE1BQUUsRUFBRSxFQUFqQjtBQUFxQixNQUFFLEVBQUUsRUFBekI7QUFBNkIsTUFBRSxFQUFFLEVBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdDQUFEO0FBQUssVUFBTSxFQUFFLEVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0NBQUQ7QUFBSyxRQUFJLEVBQUUsRUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBVyxRQUFJLEVBQUMsYUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMkNBQUQ7QUFDRSxZQUFRLEVBQ04seUJBQUFBLElBQUksQ0FBQ2MsYUFBTCxDQUFtQixnQkFBbkIsK0VBQXNDRSxNQUF0QyxLQUFnRCxDQUFoRCxHQUNJLElBREosR0FFSSxLQUpSO0FBTUUsWUFBUSxFQUFFLGtCQUFDMEMsR0FBRDtBQUFBLGFBQVM5QyxjQUFjLENBQUM4QyxHQUFELENBQXZCO0FBQUEsS0FOWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBUUUsTUFBQyxNQUFEO0FBQVEsU0FBSyxFQUFDLE1BQWQ7QUFBcUIsWUFBUSxNQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUkYsMkJBV0cvRCxLQUFLLENBQUNnRSxVQUFOLENBQ0VDLE1BREYsQ0FFRyxVQUFDQyxDQUFEO0FBQUE7O0FBQUEsV0FDRSx5QkFBQTdELElBQUksQ0FDRGMsYUFESCxDQUNpQixnQkFEakIsK0VBRUlDLE9BRkosQ0FFWThDLENBQUMsQ0FBQ0MsRUFGZCxPQUVzQixDQUFDLENBSHpCO0FBQUEsR0FGSCxDQVhILDBEQVdHLHNCQU9HZixJQVBILENBT1EsVUFBQ1gsQ0FBRCxFQUFJQyxDQUFKLEVBQVU7QUFDZixRQUFNQyxJQUFJLEdBQUdGLENBQUMsQ0FBQzJCLFNBQWY7QUFBQSxRQUNFeEIsSUFBSSxHQUFHRixDQUFDLENBQUMwQixTQURYLENBRGUsQ0FHZjs7QUFDQSxRQUFJekIsSUFBSSxHQUFHQyxJQUFYLEVBQWlCLE9BQU8sQ0FBQyxDQUFSO0FBQ2pCLFFBQUlELElBQUksR0FBR0MsSUFBWCxFQUFpQixPQUFPLENBQVA7QUFDakIsV0FBTyxDQUFQO0FBQ0QsR0FkRixFQWVFUyxHQWZGLENBZU0sVUFBQ2dCLEtBQUQ7QUFBQSxXQUNILE1BQUMsTUFBRDtBQUNFLFNBQUcsRUFBRUEsS0FBSSxDQUFDRixFQURaO0FBRUUsV0FBSyxFQUFFRSxLQUFJLENBQUNGLEVBRmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFHS0UsS0FBSSxDQUFDRCxTQUhWLGNBR3VCQyxLQUFJLENBQUNDLFFBSDVCLEVBREc7QUFBQSxHQWZOLENBWEgsQ0FERixDQURGLENBREYsRUFzQ0UsTUFBQyx3Q0FBRDtBQUFLLFFBQUksRUFBRSxDQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLGFBQVMsRUFBQywwQkFEWjtBQUVFLFdBQU8sRUFBRXBELFlBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FKRixDQURGLENBdENGLEVBOENFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkNBOUNGLENBREYsQ0FERixFQW1ERSxNQUFDLHdDQUFEO0FBQUssTUFBRSxFQUFFLEVBQVQ7QUFBYSxNQUFFLEVBQUUsRUFBakI7QUFBcUIsTUFBRSxFQUFFLEVBQXpCO0FBQTZCLE1BQUUsRUFBRSxFQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3Q0FBRDtBQUFLLFVBQU0sRUFBRSxDQUFDLEVBQUQsRUFBSyxFQUFMLENBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHbEIsS0FBSyxDQUFDZ0UsVUFBTixDQUNFQyxNQURGLENBRUcsVUFBQ0MsQ0FBRDtBQUFBOztBQUFBLFdBQ0UseUJBQUE3RCxJQUFJLENBQUNjLGFBQUwsQ0FBbUIsZ0JBQW5CLCtFQUFzQ0MsT0FBdEMsQ0FBOEM4QyxDQUFDLENBQUNDLEVBQWhELE9BQ0EsQ0FBQyxDQUZIO0FBQUEsR0FGSCxFQU1FZCxHQU5GLENBTU0sVUFBQ2dCLE1BQUQ7QUFBQSxXQUNILE1BQUMsd0NBQUQ7QUFBSyxRQUFFLEVBQUUsRUFBVDtBQUFhLFFBQUUsRUFBRSxFQUFqQjtBQUFxQixTQUFHLEVBQUVBLE1BQUksQ0FBQ0YsRUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssU0FBRyxFQUFFRSxNQUFJLENBQUNGLEVBQWY7QUFBbUIsZUFBUyxFQUFDLGVBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLGVBQVMsRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLFNBQUcsRUFBRUUsTUFBSSxDQUFDM0QsS0FBZjtBQUFzQixTQUFHLEVBQUUyRCxNQUFJLENBQUNELFNBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQURGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBT0MsTUFBSSxDQUFDRCxTQUFaLGNBQXlCQyxNQUFJLENBQUNDLFFBQTlCLE9BSkYsRUFLRTtBQUNFLGFBQU8sRUFBRTtBQUFBLGVBQU1DLGVBQWUsQ0FBQ0YsTUFBSSxDQUFDRixFQUFOLENBQXJCO0FBQUEsT0FEWDtBQUVFLFVBQUksRUFBQyxjQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFMRixDQURGLENBREc7QUFBQSxHQU5OLENBREgsQ0FERixDQW5ERixDQURGLENBMUtGLEVBd1BFLE1BQUMsNENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXhQRixFQXlQRyxDQUFDckQsYUFBRCxJQUFrQixDQUFDRixXQUFuQixJQUNDO0FBQUssYUFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQVEsV0FBTyxFQUFFa0MsVUFBakI7QUFBNkIsUUFBSSxFQUFDLFFBQWxDO0FBQTJDLGFBQVMsRUFBQyxZQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLEVBS0U7QUFBUSxXQUFPLEVBQUVELFFBQWpCO0FBQTJCLFFBQUksRUFBQyxRQUFoQztBQUF5QyxhQUFTLEVBQUMsWUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FMRixDQTFQSixFQW9RRy9CLGFBQWEsSUFDWixNQUFDLHdDQUFEO0FBQUssU0FBSyxFQUFDLFFBQVg7QUFBb0IsVUFBTSxFQUFFLENBQUMsRUFBRCxFQUFLLEVBQUwsQ0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0NBQUQ7QUFBSyxNQUFFLEVBQUUsRUFBVDtBQUFhLE1BQUUsRUFBRSxFQUFqQjtBQUFxQixNQUFFLEVBQUUsRUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsc0VBQUQ7QUFBYSxRQUFJLEVBQUVULElBQW5CO0FBQXlCLFNBQUssRUFBRUssS0FBaEM7QUFBdUMsWUFBUSxFQUFFQyxRQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixDQURGLEVBTUUsTUFBQyx3Q0FBRDtBQUFLLE1BQUUsRUFBRSxFQUFUO0FBQWEsTUFBRSxFQUFFLEVBQWpCO0FBQXFCLE1BQUUsRUFBRSxFQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBUSxXQUFPLEVBQUVrQyxRQUFqQjtBQUEyQixRQUFJLEVBQUMsUUFBaEM7QUFBeUMsYUFBUyxFQUFDLFlBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBREYsQ0FORixDQXJRSixFQWtSR2pDLFdBQVcsSUFDVixNQUFDLHdDQUFEO0FBQUssVUFBTSxFQUFFLENBQUMsRUFBRCxFQUFLLEVBQUwsQ0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3Q0FBRDtBQUFLLE1BQUUsRUFBRSxFQUFUO0FBQWEsTUFBRSxFQUFFLEVBQWpCO0FBQXFCLE1BQUUsRUFBRSxFQUF6QjtBQUE2QixNQUFFLEVBQUUsRUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQVcsU0FBSyxFQUFDLDZCQUFqQjtBQUErQyxRQUFJLEVBQUMsT0FBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsQ0FERixFQU1FLE1BQUMsd0NBQUQ7QUFBSyxNQUFFLEVBQUUsRUFBVDtBQUFhLE1BQUUsRUFBRSxFQUFqQjtBQUFxQixNQUFFLEVBQUUsRUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsV0FBTyxFQUFFa0MsVUFEWDtBQUVFLFFBQUksRUFBQyxRQUZQO0FBR0UsYUFBUyxFQUFDLFlBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixDQU5GLENBblJKLEVBb1NFO0FBQVEsUUFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXBTRixDQUZGLENBREYsQ0FERjtBQTZTRCxDQW5YRDs7R0FBTS9DLFE7VUFDU0csd0QsRUFDRUMseUNBQUksQ0FBQ0MsTyxFQUNMRyxxRDs7O0tBSFhSLFE7O0FBcVhOLElBQU15RSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ2xDVCxjQUFVLEVBQUVTLEtBQUssQ0FBQ1QsVUFBTixDQUFpQlUsY0FESztBQUVsQ0Msa0JBQWMsRUFBRUYsS0FBSyxDQUFDRyxPQUFOLENBQWM1QixPQUZJO0FBR2xDNkIsV0FBTyxFQUFFSixLQUFLLENBQUNHLE9BQU4sQ0FBY0MsT0FIVztBQUlsQ0MsV0FBTyxFQUFFTCxLQUFLLENBQUNHLE9BQU4sQ0FBY0c7QUFKVyxHQUFaO0FBQUEsQ0FBeEI7O0FBT2VDLDBIQUFPLENBQUNSLGVBQUQsRUFBa0I7QUFBRW5DLG1CQUFpQixFQUFqQkEsa0ZBQUY7QUFBcUI0QyxVQUFRLEVBQVJBLHNFQUFRQTtBQUE3QixDQUFsQixDQUFQLENBQ2JsRixRQURhLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3RvcnkvbmV3LjZkOTg4MTc5Njk1NWRkMjIzNzBhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgUm93LFxyXG4gIENvbCxcclxuICBTcGFjZSxcclxuICBEaXZpZGVyLFxyXG4gIEZvcm0sXHJcbiAgU3BpbixcclxuICBtZXNzYWdlLFxyXG4gIElucHV0LFxyXG4gIFNlbGVjdCxcclxufSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHtcclxuICBDQVRFR09SSUVTLFxyXG4gIENPUFlSSUdIVFMsXHJcbiAgTEFOR1VBR0VTLFxyXG4gIFNUQVRVUyxcclxufSBmcm9tIFwiLi4vLi4vdXRpbHMvY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tIFwiLi4vLi4vaG9va3MvdXNlckhvb2tzXCI7XHJcbmltcG9ydCB7IGdldFVzZXJDaGFyYWN0ZXJzIH0gZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvbnMvY2hhcmFjdGVyc0FjdGlvbnNcIjtcclxuaW1wb3J0IHsgYWRkU3RvcnkgfSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9ucy9zdG9yaWVzQWN0aW9uc1wiO1xyXG5cclxuaW1wb3J0IElucHV0R3JvdXAgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvY29tbW9uL0lucHV0XCI7XHJcbmltcG9ydCBTZWxlY3RHcm91cCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jb21tb24vU2VsZWN0XCI7XHJcbmltcG9ydCBUYWdzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2Zvcm1zL1RhZ3NcIjtcclxuaW1wb3J0IFVwbG9hZEltYWdlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2Zvcm1zL1VwbG9hZEltYWdlXCI7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvY29tbW9uL0xvYWRlclwiO1xyXG5pbXBvcnQgUmFkaW9CdXR0b24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZm9ybXMvUmFkaW9CdXR0b25cIjtcclxuXHJcbmNvbnN0IHsgT3B0aW9uIH0gPSBTZWxlY3Q7XHJcblxyXG5jb25zdCBOZXdTdG9yeSA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IGF1dGggPSB1c2VBdXRoKCk7XHJcbiAgY29uc3QgW2Zvcm1dID0gRm9ybS51c2VGb3JtKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW2ltYWdlLCBzZXRJbWFnZV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbGlua1Zpc2libGUsIHNldExpbmtWaXNpYmxlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdXBsb2FkVmlzaWJsZSwgc2V0VXBsb2FkVmlzaWJsZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IFtjdXJyZW50Q2hhciwgc2V0Q3VycmVudENoYXJdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IGFkZENoYXJhY3RlciA9ICgpID0+IHtcclxuICAgIGlmIChcclxuICAgICAgY3VycmVudENoYXIgJiZcclxuICAgICAgZm9ybS5nZXRGaWVsZFZhbHVlKFwibWFpbkNoYXJhY3RlcnNcIik/LmluZGV4T2YoY3VycmVudENoYXIpID09PSAtMSAmJlxyXG4gICAgICBmb3JtLmdldEZpZWxkVmFsdWUoXCJtYWluQ2hhcmFjdGVyc1wiKT8ubGVuZ3RoIDwgNVxyXG4gICAgKSB7XHJcbiAgICAgIGZvcm0uc2V0RmllbGRzVmFsdWUoe1xyXG4gICAgICAgIG1haW5DaGFyYWN0ZXJzOiBbLi4uZm9ybS5nZXRGaWVsZFZhbHVlKFwibWFpbkNoYXJhY3RlcnNcIiksIGN1cnJlbnRDaGFyXSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzZXRDdXJyZW50Q2hhcihcIlwiKTtcclxuICAgIGZvcm0uc2V0RmllbGRzVmFsdWUoeyBjdXJyZW50Q2hhcjogXCJcIiB9KTtcclxuICAgIGNvbnNvbGUubG9nKGZvcm0uZ2V0RmllbGRWYWx1ZShcIm1haW5DaGFyYWN0ZXJzXCIpKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzdWJtaXQgPSAodmFsdWVzKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyh2YWx1ZXMpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uRmFpbGVkID0gKGVycm9yKSA9PiB7XHJcbiAgICBjb25zdCBlcnJvck5hbWUgPSBlcnJvci5lcnJvckZpZWxkc1swXS5uYW1lLnRvU3RyaW5nKCk7XHJcbiAgICBmb3JtLnNjcm9sbFRvRmllbGQoZXJyb3JOYW1lKTtcclxuICAgIC8vbWVzc2FnZS5lcnJvcihcIlRoZXJlIGFyZSBlcnJvcnNcIik7XHJcbiAgfTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChhdXRoLnVzZXIpIHtcclxuICAgICAgcHJvcHMuZ2V0VXNlckNoYXJhY3RlcnMoKTtcclxuICAgIH1cclxuICB9LCBbYXV0aF0pO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZm9ybS5zZXRGaWVsZHNWYWx1ZSh7IHRhZ3M6IFtdIH0pO1xyXG4gICAgZm9ybS5zZXRGaWVsZHNWYWx1ZSh7IG1haW5DaGFyYWN0ZXJzOiBbXSB9KTtcclxuICAgIGZvcm0uc2V0RmllbGRzVmFsdWUoeyBtYXR1cmU6IGZhbHNlIH0pO1xyXG4gICAgZm9ybS5zZXRGaWVsZHNWYWx1ZSh7IHB1YmxpYzogdHJ1ZSB9KTtcclxuICAgIC8vIGZvcm0uc2V0RmllbGRzVmFsdWUoeyBjdXJyZW50Q2hhcjogXCJcIiB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGZpbHRlclNvcnQgPSAoYSwgYikgPT4ge1xyXG4gICAgY29uc3Qga2V5QSA9IGEubmFtZSxcclxuICAgICAga2V5QiA9IGIubmFtZTtcclxuICAgIC8vIENvbXBhcmUgdGhlIDIgZGF0ZXNcclxuICAgIGlmIChrZXlBIDwga2V5QikgcmV0dXJuIC0xO1xyXG4gICAgaWYgKGtleUEgPiBrZXlCKSByZXR1cm4gMTtcclxuICAgIHJldHVybiAwO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNob3dMaW5rID0gKCkgPT4ge1xyXG4gICAgc2V0TGlua1Zpc2libGUodHJ1ZSk7XHJcbiAgICBzZXRVcGxvYWRWaXNpYmxlKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzaG93VXBsb2FkID0gKCkgPT4ge1xyXG4gICAgc2V0TGlua1Zpc2libGUoZmFsc2UpO1xyXG4gICAgc2V0VXBsb2FkVmlzaWJsZSh0cnVlKTtcclxuICB9O1xyXG5cclxuICBjb25zb2xlLmxvZyhsaW5rVmlzaWJsZSwgdXBsb2FkVmlzaWJsZSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ldy1zdG9yeSBjdXN0b20tZm9ybVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyXCI+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInNpZGUtaGVhZGluZ1wiPkFkZCBhIG5ldyBzdG9yeTwvaDI+XHJcbiAgICAgICAgPEZvcm1cclxuICAgICAgICAgIGxheW91dD1cInZlcnRpY2FsXCJcclxuICAgICAgICAgIHNjcm9sbFRvRmlyc3RFcnJvclxyXG4gICAgICAgICAgb25GaW5pc2hGYWlsZWQ9e29uRmFpbGVkfVxyXG4gICAgICAgICAgb25GaW5pc2g9e3N1Ym1pdH1cclxuICAgICAgICAgIGZvcm09e2Zvcm19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFJvdyBndXR0ZXI9e1syNCwgMjRdfT5cclxuICAgICAgICAgICAgPENvbCBzbT17MjR9IHhzPXsyNH0gbWQ9ezE4fSBsZz17MTh9PlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIGNvbG9uPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXHJcbiAgICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJBIHRpdGxlIGlzIHJlcXVpcmVkXCIsXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIHsgbWF4OiA2NSB9LFxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiVGl0bGVcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPENvbCBzbT17MjR9IHhzPXsyNH0gbGc9ezZ9IG1kPXs2fT5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiY2F0ZWdvcmllc1wiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkNhdGVnb3JpZXNcIlxyXG4gICAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiQXQgbGVhc3QgMSBjYXRlZ29yeSBpcyByZXF1aXJlZFwiLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4OiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYXJyYXlcIixcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIllvdSBjYW4gb25seSBzZWxlY3QgdXAgdG8gMiBjYXRlZ29yaWVzXCIsXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3QgbW9kZT1cIm11bHRpcGxlXCIgYWxsb3dDbGVhciBtYXhUYWdDb3VudD17Mn0+XHJcbiAgICAgICAgICAgICAgICAgIHtDQVRFR09SSUVTPy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5QSA9IGEubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgIGtleUIgPSBiLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQ29tcGFyZSB0aGUgMiBkYXRlc1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChrZXlBIDwga2V5QikgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChrZXlBID4ga2V5QikgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgICAgICAgIH0pLm1hcCgoY2F0KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT17Y2F0LnZhbHVlfSBrZXk9e2NhdC52YWx1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7Y2F0Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICA8Um93IGd1dHRlcj17WzI0LCAyNF19PlxyXG4gICAgICAgICAgICA8Q29sIG1kPXs4fSBzbT17MjR9IHhzPXsyNH0gbGc9ezh9PlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJsYW5ndWFnZVwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkxhbmd1YWdlXCJcclxuICAgICAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkEgbGFuZ3VhZ2UgaXMgcmVxdWlyZWRcIixcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFNlbGVjdCBmaWx0ZXJTb3J0PXtmaWx0ZXJTb3J0fT5cclxuICAgICAgICAgICAgICAgICAge0xBTkdVQUdFUz8ubWFwKChsYW5nKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT17bGFuZy52YWx1ZX0ga2V5PXtsYW5nLnZhbHVlfT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtsYW5nLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIG1kPXs4fSBzbT17MjR9IHhzPXsyNH0gbGc9ezh9PlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJzdGF0dXNcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJTdGF0dXNcIlxyXG4gICAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiQSBzdGF0dXMgaXMgcmVxdWlyZWRcIixcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFNlbGVjdD5cclxuICAgICAgICAgICAgICAgICAge1NUQVRVUy5tYXAoKHN0YXQpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPXtzdGF0LnZhbHVlfSBrZXk9e3N0YXQudmFsdWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAge3N0YXQubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICA8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgbWQ9ezh9IHNtPXsyNH0geHM9ezI0fSBsZz17OH0+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImNvcHlyaWdodFwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkNvcHlyaWdodFwiXHJcbiAgICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJBIGNvcHlyaWdodCBpcyByZXF1aXJlZFwiLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICB7Q09QWVJJR0hUUy5tYXAoKGNvcHkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPXtjb3B5LnZhbHVlfSBrZXk9e2NvcHkudmFsdWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAge2NvcHkubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICA8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgbGFiZWw9XCJTdW1tYXJ5XCJcclxuICAgICAgICAgICAgbmFtZT1cInN1bW1hcnlcIlxyXG4gICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG1heDogMTgwLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJZb3VyIHN1bW1hcnkgY2Fubm90IGV4Y2VlZCAxODAgY2hhcmFjdGVyc1wiLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJbnB1dC5UZXh0QXJlYVxyXG4gICAgICAgICAgICAgIGF1dG9TaXplPXt7IG1pblJvd3M6IDUgfX1cclxuICAgICAgICAgICAgICBzaG93Q291bnQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgbWF4TGVuZ3RoPXsxODB9XHJcbiAgICAgICAgICAgID48L0lucHV0LlRleHRBcmVhPlxyXG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICA8Um93IGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCIgZ3V0dGVyPXtbMjQsIDI0XX0+XHJcbiAgICAgICAgICAgIDxSYWRpb0J1dHRvblxyXG4gICAgICAgICAgICAgIGxnPXs0fVxyXG4gICAgICAgICAgICAgIHNtPXsxMn1cclxuICAgICAgICAgICAgICB4cz17MjR9XHJcbiAgICAgICAgICAgICAgbWQ9ezh9XHJcbiAgICAgICAgICAgICAgbmFtZT1cInB1YmxpY1wiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJWaXNpYmlsaXR5XCJcclxuICAgICAgICAgICAgICBudW0xPVwiM1wiXHJcbiAgICAgICAgICAgICAgbnVtMj1cIjRcIlxyXG4gICAgICAgICAgICAgIGxhYmVsMT1cIlB1YmxpY1wiXHJcbiAgICAgICAgICAgICAgbGFiZWwyPVwiUHJpdmF0ZVwiXHJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtmb3JtLmdldEZpZWxkVmFsdWUoXCJwdWJsaWNcIil9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxSYWRpb0J1dHRvblxyXG4gICAgICAgICAgICAgIGxnPXs0fVxyXG4gICAgICAgICAgICAgIHNtPXsxMn1cclxuICAgICAgICAgICAgICB4cz17MjR9XHJcbiAgICAgICAgICAgICAgbWQ9ezh9XHJcbiAgICAgICAgICAgICAgbmFtZT1cIm1hdHVyZVwiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJNYXR1cmUgY29udGVudCA/XCJcclxuICAgICAgICAgICAgICBudW0xPVwiMVwiXHJcbiAgICAgICAgICAgICAgbnVtMj1cIjJcIlxyXG4gICAgICAgICAgICAgIGxhYmVsMT1cIlllc1wiXHJcbiAgICAgICAgICAgICAgbGFiZWwyPVwiTm9cIlxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17Zm9ybS5nZXRGaWVsZFZhbHVlKFwibWF0dXJlXCIpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Q29sIGxnPXs4fSBtZD17MTJ9IHNtPXsyNH0geHM9ezI0fT5cclxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRhZ3NcIiBjbGFzc05hbWU9XCJ0YWdzLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICBUYWdzXHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8VGFncyBmb3JtPXtmb3JtfSAvPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgIDxGb3JtLkl0ZW0gbmFtZT1cIm1haW5DaGFyYWN0ZXJzXCIgbGFiZWw9XCJNYWluIENoYXJhY3RlcnNcIj5cclxuICAgICAgICAgICAgPFJvdyBndXR0ZXI9e1syNCwgMjRdfT5cclxuICAgICAgICAgICAgICA8Q29sIGxnPXsxMn0gbWQ9ezI0fSBzbT17MjR9IHhzPXsyNH0+XHJcbiAgICAgICAgICAgICAgICA8Um93IGd1dHRlcj17MTZ9PlxyXG4gICAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezIyfT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtIG5hbWU9XCJjdXJyZW50Q2hhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybS5nZXRGaWVsZFZhbHVlKFwibWFpbkNoYXJhY3RlcnNcIik/Lmxlbmd0aCA+PSA1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbCkgPT4gc2V0Q3VycmVudENoYXIodmFsKX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIm5vbmVcIiBkaXNhYmxlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBDaG9vc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5jaGFyYWN0ZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmdldEZpZWxkVmFsdWUoXCJtYWluQ2hhcmFjdGVyc1wiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8uaW5kZXhPZihjLmlkKSA9PT0gLTFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXlBID0gYS5maXJzdG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleUIgPSBiLmZpcnN0bmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENvbXBhcmUgdGhlIDIgZGF0ZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChrZXlBIDwga2V5QikgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGtleUEgPiBrZXlCKSByZXR1cm4gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgoY2hhcikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2NoYXIuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjaGFyLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPntgJHtjaGFyLmZpcnN0bmFtZX0gJHtjaGFyLmxhc3RuYW1lfWB9PC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VsZWN0LWFkZC1pbnB1dC1pY29uYm94XCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2FkZENoYXJhY3Rlcn1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4rPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgPHNtYWxsPllvdSBjYW4gYWRkIHVwIHRvIDUgbWFpbiBjaGFyYWN0ZXJzPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDxDb2wgbGc9ezEyfSBtZD17MjR9IHNtPXsyNH0geHM9ezI0fT5cclxuICAgICAgICAgICAgICAgIDxSb3cgZ3V0dGVyPXtbMTYsIDI0XX0+XHJcbiAgICAgICAgICAgICAgICAgIHtwcm9wcy5jaGFyYWN0ZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihcclxuICAgICAgICAgICAgICAgICAgICAgIChjKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtLmdldEZpZWxkVmFsdWUoXCJtYWluQ2hhcmFjdGVyc1wiKT8uaW5kZXhPZihjLmlkKSAhPT1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLTFcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgLm1hcCgoY2hhcikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPENvbCBtZD17MTJ9IHNtPXsyNH0ga2V5PXtjaGFyLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2NoYXIuaWR9IGNsYXNzTmFtZT1cIm1haW4tc2VsZWN0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tYXZhdGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Y2hhci5pbWFnZX0gYWx0PXtjaGFyLmZpcnN0bmFtZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57YCR7Y2hhci5maXJzdG5hbWV9ICR7Y2hhci5sYXN0bmFtZX1gfSA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGlvbi1pY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByZW1vdmVDaGFyYWN0ZXIoY2hhci5pZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY2xvc2UtY2lyY2xlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9pb24taWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgIHshdXBsb2FkVmlzaWJsZSAmJiAhbGlua1Zpc2libGUgJiYgKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVwbG9hZC1idG5zXCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzaG93VXBsb2FkfSB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwidXBsb2FkLWJ0blwiPlxyXG4gICAgICAgICAgICAgICAgVXBsb2FkIGEgY292ZXJcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzaG93TGlua30gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cInVwbG9hZC1idG5cIj5cclxuICAgICAgICAgICAgICAgIFN1Ym1pdCBhIGxpbmsgdG8gYSBjb3ZlclxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICB7dXBsb2FkVmlzaWJsZSAmJiAoXHJcbiAgICAgICAgICAgIDxSb3cgYWxpZ249XCJib3R0b21cIiBndXR0ZXI9e1syNCwgMjRdfT5cclxuICAgICAgICAgICAgICA8Q29sIG1kPXsxMn0gc209ezI0fSB4cz17MjR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICA8VXBsb2FkSW1hZ2UgZm9ybT17Zm9ybX0gaW1hZ2U9e2ltYWdlfSBzZXRJbWFnZT17c2V0SW1hZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8Q29sIG1kPXsxMn0gc209ezI0fSB4cz17MjR9PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzaG93TGlua30gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cInVwbG9hZC1idG5cIj5cclxuICAgICAgICAgICAgICAgICAgT1IgU3VibWl0IGEgbGluayB0byBhIGNvdmVyXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAge2xpbmtWaXNpYmxlICYmIChcclxuICAgICAgICAgICAgPFJvdyBndXR0ZXI9e1syNCwgMjRdfT5cclxuICAgICAgICAgICAgICA8Q29sIHNtPXsyNH0geHM9ezI0fSBtZD17MTJ9IGxnPXsxMn0+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwiU3VibWl0IGEgbGluayB0byB5b3VyIGltYWdlXCIgbmFtZT1cImltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPENvbCBtZD17MTJ9IHNtPXsyNH0geHM9ezI0fT5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17c2hvd1VwbG9hZH1cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInVwbG9hZC1idG5cIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBVcGxvYWQgYSBjb3ZlclxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkNyZWF0ZTwvYnV0dG9uPlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG4gIGNoYXJhY3RlcnM6IHN0YXRlLmNoYXJhY3RlcnMudXNlckNoYXJhY3RlcnMsXHJcbiAgY29uZmlybU1lc3NhZ2U6IHN0YXRlLnN0b3JpZXMubWVzc2FnZSxcclxuICBzdG9yeUlkOiBzdGF0ZS5zdG9yaWVzLnN0b3J5SWQsXHJcbiAgbG9hZGluZzogc3RhdGUuc3Rvcmllcy5sb2FkaW5nU3RvcnksXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHsgZ2V0VXNlckNoYXJhY3RlcnMsIGFkZFN0b3J5IH0pKFxyXG4gIE5ld1N0b3J5XHJcbik7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=