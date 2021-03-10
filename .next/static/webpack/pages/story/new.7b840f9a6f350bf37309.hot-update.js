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

  console.log(form.getFieldValue("currentChar"));
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
  }, "Submit a link to a cover")), uploadVisible || linkVisible && __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    align: "bottom",
    gutter: [24, 24],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 371,
      columnNumber: 15
    }
  }, uploadVisible && __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: 12,
    sm: 24,
    xs: 24,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "input-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374,
      columnNumber: 21
    }
  }, __jsx(_components_forms_UploadImage__WEBPACK_IMPORTED_MODULE_13__["default"], {
    form: form,
    image: image,
    setImage: setImage,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 375,
      columnNumber: 23
    }
  }))), linkVisible && __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    sm: 24,
    xs: 24,
    md: 12,
    lg: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 384,
      columnNumber: 19
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    label: "Or submit a link to your image",
    name: "image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 385,
      columnNumber: 21
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 389,
      columnNumber: 23
    }
  })))), __jsx("button", {
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 395,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3RvcnkvbmV3LmpzIl0sIm5hbWVzIjpbIk9wdGlvbiIsIlNlbGVjdCIsIk5ld1N0b3J5IiwicHJvcHMiLCJhdXRoIiwidXNlQXV0aCIsIkZvcm0iLCJ1c2VGb3JtIiwiZm9ybSIsInJvdXRlciIsInVzZVJvdXRlciIsIlJlYWN0IiwidXNlU3RhdGUiLCJpbWFnZSIsInNldEltYWdlIiwibGlua1Zpc2libGUiLCJzZXRMaW5rVmlzaWJsZSIsInVwbG9hZFZpc2libGUiLCJzZXRVcGxvYWRWaXNpYmxlIiwiY3VycmVudENoYXIiLCJzZXRDdXJyZW50Q2hhciIsImFkZENoYXJhY3RlciIsImdldEZpZWxkVmFsdWUiLCJpbmRleE9mIiwibGVuZ3RoIiwic2V0RmllbGRzVmFsdWUiLCJtYWluQ2hhcmFjdGVycyIsImNvbnNvbGUiLCJsb2ciLCJzdWJtaXQiLCJ2YWx1ZXMiLCJvbkZhaWxlZCIsImVycm9yIiwiZXJyb3JOYW1lIiwiZXJyb3JGaWVsZHMiLCJuYW1lIiwidG9TdHJpbmciLCJzY3JvbGxUb0ZpZWxkIiwidXNlRWZmZWN0IiwidXNlciIsImdldFVzZXJDaGFyYWN0ZXJzIiwidGFncyIsIm1hdHVyZSIsImZpbHRlclNvcnQiLCJhIiwiYiIsImtleUEiLCJrZXlCIiwic2hvd0xpbmsiLCJzaG93VXBsb2FkIiwicmVxdWlyZWQiLCJtZXNzYWdlIiwibWF4IiwidHlwZSIsIkNBVEVHT1JJRVMiLCJzb3J0IiwibWFwIiwiY2F0IiwidmFsdWUiLCJMQU5HVUFHRVMiLCJsYW5nIiwiU1RBVFVTIiwic3RhdCIsIkNPUFlSSUdIVFMiLCJjb3B5IiwibWluUm93cyIsInZhbCIsImNoYXJhY3RlcnMiLCJmaWx0ZXIiLCJjIiwiaWQiLCJmaXJzdG5hbWUiLCJjaGFyIiwibGFzdG5hbWUiLCJyZW1vdmVDaGFyYWN0ZXIiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsInVzZXJDaGFyYWN0ZXJzIiwiY29uZmlybU1lc3NhZ2UiLCJzdG9yaWVzIiwic3RvcnlJZCIsImxvYWRpbmciLCJsb2FkaW5nU3RvcnkiLCJjb25uZWN0IiwiYWRkU3RvcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBV0E7QUFDQTtBQUVBO0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0lBRVFBLE0sR0FBV0MsMkMsQ0FBWEQsTTs7QUFFUixJQUFNRSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQTs7QUFDMUIsTUFBTUMsSUFBSSxHQUFHQyxnRUFBTyxFQUFwQjs7QUFEMEIsc0JBRVhDLHlDQUFJLENBQUNDLE9BQUwsRUFGVztBQUFBO0FBQUEsTUFFbkJDLElBRm1COztBQUcxQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUgwQix3QkFJQUMsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEVBQWYsQ0FKQTtBQUFBO0FBQUEsTUFJbkJDLEtBSm1CO0FBQUEsTUFJWkMsUUFKWTs7QUFBQSx5QkFLWUgsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEtBQWYsQ0FMWjtBQUFBO0FBQUEsTUFLbkJHLFdBTG1CO0FBQUEsTUFLTkMsY0FMTTs7QUFBQSx5QkFNZ0JMLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBTmhCO0FBQUE7QUFBQSxNQU1uQkssYUFObUI7QUFBQSxNQU1KQyxnQkFOSTs7QUFBQSx5QkFRWVAsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEVBQWYsQ0FSWjtBQUFBO0FBQUEsTUFRbkJPLFdBUm1CO0FBQUEsTUFRTkMsY0FSTTs7QUFVMUIsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUFBOztBQUN6QixRQUNFRixXQUFXLElBQ1gsd0JBQUFYLElBQUksQ0FBQ2MsYUFBTCxDQUFtQixnQkFBbkIsNkVBQXNDQyxPQUF0QyxDQUE4Q0osV0FBOUMsT0FBK0QsQ0FBQyxDQURoRSxJQUVBLHlCQUFB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QUFBLElBSkYsQ0FERixDQWJKLENBdFFOLEVBOFJFO0FBQVEsUUFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTlSRixDQUZGLENBREYsQ0FERjtBQXVTRCxDQTdXRDs7R0FBTWIsUTtVQUNTRyx3RCxFQUNFQyx5Q0FBSSxDQUFDQyxPLEVBQ0xHLHFEOzs7S0FIWFIsUTs7QUErV04sSUFBTXlFLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDbENULGNBQVUsRUFBRVMsS0FBSyxDQUFDVCxVQUFOLENBQWlCVSxjQURLO0FBRWxDQyxrQkFBYyxFQUFFRixLQUFLLENBQUNHLE9BQU4sQ0FBYzVCLE9BRkk7QUFHbEM2QixXQUFPLEVBQUVKLEtBQUssQ0FBQ0csT0FBTixDQUFjQyxPQUhXO0FBSWxDQyxXQUFPLEVBQUVMLEtBQUssQ0FBQ0csT0FBTixDQUFjRztBQUpXLEdBQVo7QUFBQSxDQUF4Qjs7QUFPZUMsMEhBQU8sQ0FBQ1IsZUFBRCxFQUFrQjtBQUFFbkMsbUJBQWlCLEVBQWpCQSxrRkFBRjtBQUFxQjRDLFVBQVEsRUFBUkEsc0VBQVFBO0FBQTdCLENBQWxCLENBQVAsQ0FDYmxGLFFBRGEsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zdG9yeS9uZXcuN2I4NDBmOWE2ZjM1MGJmMzczMDkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBSb3csXHJcbiAgQ29sLFxyXG4gIFNwYWNlLFxyXG4gIERpdmlkZXIsXHJcbiAgRm9ybSxcclxuICBTcGluLFxyXG4gIG1lc3NhZ2UsXHJcbiAgSW5wdXQsXHJcbiAgU2VsZWN0LFxyXG59IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIENBVEVHT1JJRVMsXHJcbiAgQ09QWVJJR0hUUyxcclxuICBMQU5HVUFHRVMsXHJcbiAgU1RBVFVTLFxyXG59IGZyb20gXCIuLi8uLi91dGlscy9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gXCIuLi8uLi9ob29rcy91c2VySG9va3NcIjtcclxuaW1wb3J0IHsgZ2V0VXNlckNoYXJhY3RlcnMgfSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9ucy9jaGFyYWN0ZXJzQWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBhZGRTdG9yeSB9IGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25zL3N0b3JpZXNBY3Rpb25zXCI7XHJcblxyXG5pbXBvcnQgSW5wdXRHcm91cCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jb21tb24vSW5wdXRcIjtcclxuaW1wb3J0IFNlbGVjdEdyb3VwIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2NvbW1vbi9TZWxlY3RcIjtcclxuaW1wb3J0IFRhZ3MgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZm9ybXMvVGFnc1wiO1xyXG5pbXBvcnQgVXBsb2FkSW1hZ2UgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZm9ybXMvVXBsb2FkSW1hZ2VcIjtcclxuaW1wb3J0IExvYWRlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jb21tb24vTG9hZGVyXCI7XHJcbmltcG9ydCBSYWRpb0J1dHRvbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9mb3Jtcy9SYWRpb0J1dHRvblwiO1xyXG5cclxuY29uc3QgeyBPcHRpb24gfSA9IFNlbGVjdDtcclxuXHJcbmNvbnN0IE5ld1N0b3J5ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgYXV0aCA9IHVzZUF1dGgoKTtcclxuICBjb25zdCBbZm9ybV0gPSBGb3JtLnVzZUZvcm0oKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbaW1hZ2UsIHNldEltYWdlXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtsaW5rVmlzaWJsZSwgc2V0TGlua1Zpc2libGVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt1cGxvYWRWaXNpYmxlLCBzZXRVcGxvYWRWaXNpYmxlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgW2N1cnJlbnRDaGFyLCBzZXRDdXJyZW50Q2hhcl0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgYWRkQ2hhcmFjdGVyID0gKCkgPT4ge1xyXG4gICAgaWYgKFxyXG4gICAgICBjdXJyZW50Q2hhciAmJlxyXG4gICAgICBmb3JtLmdldEZpZWxkVmFsdWUoXCJtYWluQ2hhcmFjdGVyc1wiKT8uaW5kZXhPZihjdXJyZW50Q2hhcikgPT09IC0xICYmXHJcbiAgICAgIGZvcm0uZ2V0RmllbGRWYWx1ZShcIm1haW5DaGFyYWN0ZXJzXCIpPy5sZW5ndGggPCA1XHJcbiAgICApIHtcclxuICAgICAgZm9ybS5zZXRGaWVsZHNWYWx1ZSh7XHJcbiAgICAgICAgbWFpbkNoYXJhY3RlcnM6IFsuLi5mb3JtLmdldEZpZWxkVmFsdWUoXCJtYWluQ2hhcmFjdGVyc1wiKSwgY3VycmVudENoYXJdLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHNldEN1cnJlbnRDaGFyKFwiXCIpO1xyXG4gICAgZm9ybS5zZXRGaWVsZHNWYWx1ZSh7IGN1cnJlbnRDaGFyOiBcIlwiIH0pO1xyXG4gICAgY29uc29sZS5sb2coZm9ybS5nZXRGaWVsZFZhbHVlKFwibWFpbkNoYXJhY3RlcnNcIikpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHN1Ym1pdCA9ICh2YWx1ZXMpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHZhbHVlcyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25GYWlsZWQgPSAoZXJyb3IpID0+IHtcclxuICAgIGNvbnN0IGVycm9yTmFtZSA9IGVycm9yLmVycm9yRmllbGRzWzBdLm5hbWUudG9TdHJpbmcoKTtcclxuICAgIGZvcm0uc2Nyb2xsVG9GaWVsZChlcnJvck5hbWUpO1xyXG4gICAgLy9tZXNzYWdlLmVycm9yKFwiVGhlcmUgYXJlIGVycm9yc1wiKTtcclxuICB9O1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGF1dGgudXNlcikge1xyXG4gICAgICBwcm9wcy5nZXRVc2VyQ2hhcmFjdGVycygpO1xyXG4gICAgfVxyXG4gIH0sIFthdXRoXSk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmb3JtLnNldEZpZWxkc1ZhbHVlKHsgdGFnczogW10gfSk7XHJcbiAgICBmb3JtLnNldEZpZWxkc1ZhbHVlKHsgbWFpbkNoYXJhY3RlcnM6IFtdIH0pO1xyXG4gICAgZm9ybS5zZXRGaWVsZHNWYWx1ZSh7IG1hdHVyZTogZmFsc2UgfSk7XHJcbiAgICBmb3JtLnNldEZpZWxkc1ZhbHVlKHsgcHVibGljOiB0cnVlIH0pO1xyXG4gICAgLy8gZm9ybS5zZXRGaWVsZHNWYWx1ZSh7IGN1cnJlbnRDaGFyOiBcIlwiIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgZmlsdGVyU29ydCA9IChhLCBiKSA9PiB7XHJcbiAgICBjb25zdCBrZXlBID0gYS5uYW1lLFxyXG4gICAgICBrZXlCID0gYi5uYW1lO1xyXG4gICAgLy8gQ29tcGFyZSB0aGUgMiBkYXRlc1xyXG4gICAgaWYgKGtleUEgPCBrZXlCKSByZXR1cm4gLTE7XHJcbiAgICBpZiAoa2V5QSA+IGtleUIpIHJldHVybiAxO1xyXG4gICAgcmV0dXJuIDA7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2hvd0xpbmsgPSAoKSA9PiB7XHJcbiAgICBzZXRMaW5rVmlzaWJsZSh0cnVlKTtcclxuICAgIHNldFVwbG9hZFZpc2libGUoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNob3dVcGxvYWQgPSAoKSA9PiB7XHJcbiAgICBzZXRMaW5rVmlzaWJsZShmYWxzZSk7XHJcbiAgICBzZXRVcGxvYWRWaXNpYmxlKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnNvbGUubG9nKGZvcm0uZ2V0RmllbGRWYWx1ZShcImN1cnJlbnRDaGFyXCIpKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3LXN0b3J5IGN1c3RvbS1mb3JtXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXJcIj5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwic2lkZS1oZWFkaW5nXCI+QWRkIGEgbmV3IHN0b3J5PC9oMj5cclxuICAgICAgICA8Rm9ybVxyXG4gICAgICAgICAgbGF5b3V0PVwidmVydGljYWxcIlxyXG4gICAgICAgICAgc2Nyb2xsVG9GaXJzdEVycm9yXHJcbiAgICAgICAgICBvbkZpbmlzaEZhaWxlZD17b25GYWlsZWR9XHJcbiAgICAgICAgICBvbkZpbmlzaD17c3VibWl0fVxyXG4gICAgICAgICAgZm9ybT17Zm9ybX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8Um93IGd1dHRlcj17WzI0LCAyNF19PlxyXG4gICAgICAgICAgICA8Q29sIHNtPXsyNH0geHM9ezI0fSBtZD17MTh9IGxnPXsxOH0+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgY29sb249e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInRpdGxlXCJcclxuICAgICAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkEgdGl0bGUgaXMgcmVxdWlyZWRcIixcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgeyBtYXg6IDY1IH0sXHJcbiAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJUaXRsZVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIHNtPXsyNH0geHM9ezI0fSBsZz17Nn0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJjYXRlZ29yaWVzXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiQ2F0ZWdvcmllc1wiXHJcbiAgICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJBdCBsZWFzdCAxIGNhdGVnb3J5IGlzIHJlcXVpcmVkXCIsXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXg6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhcnJheVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiWW91IGNhbiBvbmx5IHNlbGVjdCB1cCB0byAyIGNhdGVnb3JpZXNcIixcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFNlbGVjdCBtb2RlPVwibXVsdGlwbGVcIiBhbGxvd0NsZWFyIG1heFRhZ0NvdW50PXsyfT5cclxuICAgICAgICAgICAgICAgICAge0NBVEVHT1JJRVM/LnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXlBID0gYS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAga2V5QiA9IGIubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBDb21wYXJlIHRoZSAyIGRhdGVzXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleUEgPCBrZXlCKSByZXR1cm4gLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleUEgPiBrZXlCKSByZXR1cm4gMTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgICAgICAgfSkubWFwKChjYXQpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPXtjYXQudmFsdWV9IGtleT17Y2F0LnZhbHVlfT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtjYXQubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICA8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgIDxSb3cgZ3V0dGVyPXtbMjQsIDI0XX0+XHJcbiAgICAgICAgICAgIDxDb2wgbWQ9ezh9IHNtPXsyNH0geHM9ezI0fSBsZz17OH0+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImxhbmd1YWdlXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiTGFuZ3VhZ2VcIlxyXG4gICAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiQSBsYW5ndWFnZSBpcyByZXF1aXJlZFwiLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0IGZpbHRlclNvcnQ9e2ZpbHRlclNvcnR9PlxyXG4gICAgICAgICAgICAgICAgICB7TEFOR1VBR0VTPy5tYXAoKGxhbmcpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPXtsYW5nLnZhbHVlfSBrZXk9e2xhbmcudmFsdWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAge2xhbmcubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICA8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgbWQ9ezh9IHNtPXsyNH0geHM9ezI0fSBsZz17OH0+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInN0YXR1c1wiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlN0YXR1c1wiXHJcbiAgICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJBIHN0YXR1cyBpcyByZXF1aXJlZFwiLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICB7U1RBVFVTLm1hcCgoc3RhdCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9e3N0YXQudmFsdWV9IGtleT17c3RhdC52YWx1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7c3RhdC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPENvbCBtZD17OH0gc209ezI0fSB4cz17MjR9IGxnPXs4fT5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiY29weXJpZ2h0XCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiQ29weXJpZ2h0XCJcclxuICAgICAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkEgY29weXJpZ2h0IGlzIHJlcXVpcmVkXCIsXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgIHtDT1BZUklHSFRTLm1hcCgoY29weSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9e2NvcHkudmFsdWV9IGtleT17Y29weS52YWx1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7Y29weS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICBsYWJlbD1cIlN1bW1hcnlcIlxyXG4gICAgICAgICAgICBuYW1lPVwic3VtbWFyeVwiXHJcbiAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbWF4OiAxODAsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIllvdXIgc3VtbWFyeSBjYW5ub3QgZXhjZWVkIDE4MCBjaGFyYWN0ZXJzXCIsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPElucHV0LlRleHRBcmVhXHJcbiAgICAgICAgICAgICAgYXV0b1NpemU9e3sgbWluUm93czogNSB9fVxyXG4gICAgICAgICAgICAgIHNob3dDb3VudD17dHJ1ZX1cclxuICAgICAgICAgICAgICBtYXhMZW5ndGg9ezE4MH1cclxuICAgICAgICAgICAgPjwvSW5wdXQuVGV4dEFyZWE+XHJcbiAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgIDxSb3cganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIiBndXR0ZXI9e1syNCwgMjRdfT5cclxuICAgICAgICAgICAgPFJhZGlvQnV0dG9uXHJcbiAgICAgICAgICAgICAgbGc9ezR9XHJcbiAgICAgICAgICAgICAgc209ezEyfVxyXG4gICAgICAgICAgICAgIHhzPXsyNH1cclxuICAgICAgICAgICAgICBtZD17OH1cclxuICAgICAgICAgICAgICBuYW1lPVwicHVibGljXCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIlZpc2liaWxpdHlcIlxyXG4gICAgICAgICAgICAgIG51bTE9XCIzXCJcclxuICAgICAgICAgICAgICBudW0yPVwiNFwiXHJcbiAgICAgICAgICAgICAgbGFiZWwxPVwiUHVibGljXCJcclxuICAgICAgICAgICAgICBsYWJlbDI9XCJQcml2YXRlXCJcclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2Zvcm0uZ2V0RmllbGRWYWx1ZShcInB1YmxpY1wiKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFJhZGlvQnV0dG9uXHJcbiAgICAgICAgICAgICAgbGc9ezR9XHJcbiAgICAgICAgICAgICAgc209ezEyfVxyXG4gICAgICAgICAgICAgIHhzPXsyNH1cclxuICAgICAgICAgICAgICBtZD17OH1cclxuICAgICAgICAgICAgICBuYW1lPVwibWF0dXJlXCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIk1hdHVyZSBjb250ZW50ID9cIlxyXG4gICAgICAgICAgICAgIG51bTE9XCIxXCJcclxuICAgICAgICAgICAgICBudW0yPVwiMlwiXHJcbiAgICAgICAgICAgICAgbGFiZWwxPVwiWWVzXCJcclxuICAgICAgICAgICAgICBsYWJlbDI9XCJOb1wiXHJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtmb3JtLmdldEZpZWxkVmFsdWUoXCJtYXR1cmVcIil9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxDb2wgbGc9ezh9IG1kPXsxMn0gc209ezI0fSB4cz17MjR9PlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGFnc1wiIGNsYXNzTmFtZT1cInRhZ3MtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgIFRhZ3NcclxuICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxUYWdzIGZvcm09e2Zvcm19IC8+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgPEZvcm0uSXRlbSBuYW1lPVwibWFpbkNoYXJhY3RlcnNcIiBsYWJlbD1cIk1haW4gQ2hhcmFjdGVyc1wiPlxyXG4gICAgICAgICAgICA8Um93IGd1dHRlcj17WzI0LCAyNF19PlxyXG4gICAgICAgICAgICAgIDxDb2wgbGc9ezEyfSBtZD17MjR9IHNtPXsyNH0geHM9ezI0fT5cclxuICAgICAgICAgICAgICAgIDxSb3cgZ3V0dGVyPXsxNn0+XHJcbiAgICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17MjJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0gbmFtZT1cImN1cnJlbnRDaGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtLmdldEZpZWxkVmFsdWUoXCJtYWluQ2hhcmFjdGVyc1wiKT8ubGVuZ3RoID49IDVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsKSA9PiBzZXRDdXJyZW50Q2hhcih2YWwpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwibm9uZVwiIGRpc2FibGVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIENob29zZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmNoYXJhY3RlcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGMpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZ2V0RmllbGRWYWx1ZShcIm1haW5DaGFyYWN0ZXJzXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPy5pbmRleE9mKGMuaWQpID09PSAtMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/LnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleUEgPSBhLmZpcnN0bmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5QiA9IGIuZmlyc3RuYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ29tcGFyZSB0aGUgMiBkYXRlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGtleUEgPCBrZXlCKSByZXR1cm4gLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoa2V5QSA+IGtleUIpIHJldHVybiAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKChjaGFyKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Y2hhci5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NoYXIuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+e2Ake2NoYXIuZmlyc3RuYW1lfSAke2NoYXIubGFzdG5hbWV9YH08L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgPENvbCBzcGFuPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZWxlY3QtYWRkLWlucHV0LWljb25ib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17YWRkQ2hhcmFjdGVyfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPis8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICA8c21hbGw+WW91IGNhbiBhZGQgdXAgdG8gNSBtYWluIGNoYXJhY3RlcnM8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPENvbCBsZz17MTJ9IG1kPXsyNH0gc209ezI0fSB4cz17MjR9PlxyXG4gICAgICAgICAgICAgICAgPFJvdyBndXR0ZXI9e1sxNiwgMjRdfT5cclxuICAgICAgICAgICAgICAgICAge3Byb3BzLmNoYXJhY3RlcnNcclxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgKGMpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm0uZ2V0RmllbGRWYWx1ZShcIm1haW5DaGFyYWN0ZXJzXCIpPy5pbmRleE9mKGMuaWQpICE9PVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAubWFwKChjaGFyKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q29sIG1kPXsxMn0gc209ezI0fSBrZXk9e2NoYXIuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17Y2hhci5pZH0gY2xhc3NOYW1lPVwibWFpbi1zZWxlY3RlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1hdmF0YXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtjaGFyLmltYWdlfSBhbHQ9e2NoYXIuZmlyc3RuYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntgJHtjaGFyLmZpcnN0bmFtZX0gJHtjaGFyLmxhc3RuYW1lfWB9IDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW9uLWljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJlbW92ZUNoYXJhY3RlcihjaGFyLmlkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjbG9zZS1jaXJjbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID48L2lvbi1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgeyF1cGxvYWRWaXNpYmxlICYmICFsaW5rVmlzaWJsZSAmJiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXBsb2FkLWJ0bnNcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Nob3dVcGxvYWR9IHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJ1cGxvYWQtYnRuXCI+XHJcbiAgICAgICAgICAgICAgICBVcGxvYWQgYSBjb3ZlclxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Nob3dMaW5rfSB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwidXBsb2FkLWJ0blwiPlxyXG4gICAgICAgICAgICAgICAgU3VibWl0IGEgbGluayB0byBhIGNvdmVyXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIHt1cGxvYWRWaXNpYmxlIHx8XHJcbiAgICAgICAgICAgIChsaW5rVmlzaWJsZSAmJiAoXHJcbiAgICAgICAgICAgICAgPFJvdyBhbGlnbj1cImJvdHRvbVwiIGd1dHRlcj17WzI0LCAyNF19PlxyXG4gICAgICAgICAgICAgICAge3VwbG9hZFZpc2libGUgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8Q29sIG1kPXsxMn0gc209ezI0fSB4cz17MjR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxVcGxvYWRJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtPXtmb3JtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZT17aW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEltYWdlPXtzZXRJbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIHtsaW5rVmlzaWJsZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxDb2wgc209ezI0fSB4cz17MjR9IG1kPXsxMn0gbGc9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk9yIHN1Ym1pdCBhIGxpbmsgdG8geW91ciBpbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+Q3JlYXRlPC9idXR0b24+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XHJcbiAgY2hhcmFjdGVyczogc3RhdGUuY2hhcmFjdGVycy51c2VyQ2hhcmFjdGVycyxcclxuICBjb25maXJtTWVzc2FnZTogc3RhdGUuc3Rvcmllcy5tZXNzYWdlLFxyXG4gIHN0b3J5SWQ6IHN0YXRlLnN0b3JpZXMuc3RvcnlJZCxcclxuICBsb2FkaW5nOiBzdGF0ZS5zdG9yaWVzLmxvYWRpbmdTdG9yeSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgeyBnZXRVc2VyQ2hhcmFjdGVycywgYWRkU3RvcnkgfSkoXHJcbiAgTmV3U3RvcnlcclxuKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==