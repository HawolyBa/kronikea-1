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

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(""),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState3, 2),
      currentChar = _React$useState4[0],
      setCurrentChar = _React$useState4[1];

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

  console.log(form.getFieldValue("currentChar"));
  return __jsx("div", {
    className: "new-story custom-form",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }
  }, __jsx("h2", {
    className: "side-heading",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
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
      lineNumber: 97,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    gutter: [24, 24],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
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
      lineNumber: 105,
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
      lineNumber: 106,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
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
      lineNumber: 121,
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
      lineNumber: 122,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Select"], {
    mode: "multiple",
    allowClear: true,
    maxTagCount: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
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
        lineNumber: 146,
        columnNumber: 21
      }
    }, cat.name);
  }))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    gutter: [24, 24],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
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
      lineNumber: 155,
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
      lineNumber: 156,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Select"], {
    filterSort: filterSort,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 17
    }
  }, _utils_constants__WEBPACK_IMPORTED_MODULE_6__["LANGUAGES"] === null || _utils_constants__WEBPACK_IMPORTED_MODULE_6__["LANGUAGES"] === void 0 ? void 0 : _utils_constants__WEBPACK_IMPORTED_MODULE_6__["LANGUAGES"].map(function (lang) {
    return __jsx(Option, {
      value: lang.value,
      key: lang.value,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
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
      lineNumber: 175,
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
      lineNumber: 176,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Select"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 17
    }
  }, _utils_constants__WEBPACK_IMPORTED_MODULE_6__["STATUS"].map(function (stat) {
    return __jsx(Option, {
      value: stat.value,
      key: stat.value,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188,
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
      lineNumber: 195,
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
      lineNumber: 196,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Select"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 17
    }
  }, _utils_constants__WEBPACK_IMPORTED_MODULE_6__["COPYRIGHTS"].map(function (copy) {
    return __jsx(Option, {
      value: copy.value,
      key: copy.value,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208,
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
      lineNumber: 216,
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
      lineNumber: 226,
      columnNumber: 13
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    justify: "space-between",
    gutter: [24, 24],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
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
      lineNumber: 233,
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
      lineNumber: 246,
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
      lineNumber: 259,
      columnNumber: 13
    }
  }, __jsx("label", {
    htmlFor: "tags",
    className: "tags-label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 15
    }
  }, "Tags"), __jsx(_components_forms_Tags__WEBPACK_IMPORTED_MODULE_12__["default"], {
    form: form,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 15
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 11
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    name: "mainCharacters",
    label: "Main Characters",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    gutter: [24, 24],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
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
      lineNumber: 269,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    gutter: 16,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    span: 22,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 19
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    name: "currentChar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
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
      lineNumber: 273,
      columnNumber: 23
    }
  }, __jsx(Option, {
    value: "none",
    disabled: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
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
        lineNumber: 300,
        columnNumber: 29
      }
    }, "".concat(_char.firstname, " ").concat(_char.lastname));
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    span: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "select-add-input-iconbox",
    onClick: addCharacter,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 21
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 23
    }
  }, "+"))), __jsx("small", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
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
      lineNumber: 319,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    gutter: [16, 24],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
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
        lineNumber: 328,
        columnNumber: 23
      }
    }, __jsx("div", {
      key: _char2.id,
      className: "main-selected",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 329,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "main-avatar",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 330,
        columnNumber: 27
      }
    }, __jsx("img", {
      src: _char2.image,
      alt: _char2.firstname,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 331,
        columnNumber: 29
      }
    })), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 333,
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
        lineNumber: 334,
        columnNumber: 27
      }
    })));
  }))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345,
      columnNumber: 11
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    align: "bottom",
    gutter: [24, 24],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: 12,
    sm: 24,
    xs: 24,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "input-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348,
      columnNumber: 15
    }
  }, __jsx("label", {
    htmlFor: "banner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 349,
      columnNumber: 17
    }
  }, "Upload a cover"), __jsx(_components_forms_UploadImage__WEBPACK_IMPORTED_MODULE_13__["default"], {
    image: image,
    setImage: setImage,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 350,
      columnNumber: 17
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    sm: 24,
    xs: 24,
    md: 12,
    lg: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    label: "Or submit a link to your image",
    name: "image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 354,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    onChange: function onChange(val) {
      return console.log(val);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355,
      columnNumber: 17
    }
  })))), __jsx("button", {
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377,
      columnNumber: 11
    }
  }, "Create"))));
};

_s(NewStory, "M7ps6SZoaPNDb3SVRnwioNS8EZ8=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3RvcnkvbmV3LmpzIl0sIm5hbWVzIjpbIk9wdGlvbiIsIlNlbGVjdCIsIk5ld1N0b3J5IiwicHJvcHMiLCJhdXRoIiwidXNlQXV0aCIsIkZvcm0iLCJ1c2VGb3JtIiwiZm9ybSIsInJvdXRlciIsInVzZVJvdXRlciIsIlJlYWN0IiwidXNlU3RhdGUiLCJpbWFnZSIsInNldEltYWdlIiwiY3VycmVudENoYXIiLCJzZXRDdXJyZW50Q2hhciIsImFkZENoYXJhY3RlciIsImdldEZpZWxkVmFsdWUiLCJpbmRleE9mIiwibGVuZ3RoIiwic2V0RmllbGRzVmFsdWUiLCJtYWluQ2hhcmFjdGVycyIsImNvbnNvbGUiLCJsb2ciLCJzdWJtaXQiLCJ2YWx1ZXMiLCJvbkZhaWxlZCIsImVycm9yIiwiZXJyb3JOYW1lIiwiZXJyb3JGaWVsZHMiLCJuYW1lIiwidG9TdHJpbmciLCJzY3JvbGxUb0ZpZWxkIiwidXNlRWZmZWN0IiwidXNlciIsImdldFVzZXJDaGFyYWN0ZXJzIiwidGFncyIsIm1hdHVyZSIsImZpbHRlclNvcnQiLCJhIiwiYiIsImtleUEiLCJrZXlCIiwicmVxdWlyZWQiLCJtZXNzYWdlIiwibWF4IiwidHlwZSIsIkNBVEVHT1JJRVMiLCJzb3J0IiwibWFwIiwiY2F0IiwidmFsdWUiLCJMQU5HVUFHRVMiLCJsYW5nIiwiU1RBVFVTIiwic3RhdCIsIkNPUFlSSUdIVFMiLCJjb3B5IiwibWluUm93cyIsInZhbCIsImNoYXJhY3RlcnMiLCJmaWx0ZXIiLCJjIiwiaWQiLCJmaXJzdG5hbWUiLCJjaGFyIiwibGFzdG5hbWUiLCJyZW1vdmVDaGFyYWN0ZXIiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsInVzZXJDaGFyYWN0ZXJzIiwiY29uZmlybU1lc3NhZ2UiLCJzdG9yaWVzIiwic3RvcnlJZCIsImxvYWRpbmciLCJsb2FkaW5nU3RvcnkiLCJjb25uZWN0IiwiYWRkU3RvcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7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SSxFQUFDLE9BQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDBDQUFEO0FBQU8sWUFBUSxFQUFFLGtCQUFDOEMsR0FBRDtBQUFBLGFBQVNyQyxPQUFPLENBQUNDLEdBQVIsQ0FBWW9DLEdBQVosQ0FBVDtBQUFBLEtBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLENBUEYsQ0F6UEYsRUF3UkU7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBeFJGLENBRkYsQ0FERixDQURGO0FBaVNELENBM1ZEOztHQUFNMUQsUTtVQUNTRyx3RCxFQUNFQyx5Q0FBSSxDQUFDQyxPLEVBQ0xHLHFEOzs7S0FIWFIsUTs7QUE2Vk4sSUFBTW1FLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDbENULGNBQVUsRUFBRVMsS0FBSyxDQUFDVCxVQUFOLENBQWlCVSxjQURLO0FBRWxDQyxrQkFBYyxFQUFFRixLQUFLLENBQUNHLE9BQU4sQ0FBYzVCLE9BRkk7QUFHbEM2QixXQUFPLEVBQUVKLEtBQUssQ0FBQ0csT0FBTixDQUFjQyxPQUhXO0FBSWxDQyxXQUFPLEVBQUVMLEtBQUssQ0FBQ0csT0FBTixDQUFjRztBQUpXLEdBQVo7QUFBQSxDQUF4Qjs7QUFPZUMsMEhBQU8sQ0FBQ1IsZUFBRCxFQUFrQjtBQUFFakMsbUJBQWlCLEVBQWpCQSxrRkFBRjtBQUFxQjBDLFVBQVEsRUFBUkEsc0VBQVFBO0FBQTdCLENBQWxCLENBQVAsQ0FDYjVFLFFBRGEsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zdG9yeS9uZXcuYWY3NzQxZDc0N2ZiOGZhZTA2NWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBSb3csXHJcbiAgQ29sLFxyXG4gIFNwYWNlLFxyXG4gIERpdmlkZXIsXHJcbiAgRm9ybSxcclxuICBTcGluLFxyXG4gIG1lc3NhZ2UsXHJcbiAgSW5wdXQsXHJcbiAgU2VsZWN0LFxyXG59IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIENBVEVHT1JJRVMsXHJcbiAgQ09QWVJJR0hUUyxcclxuICBMQU5HVUFHRVMsXHJcbiAgU1RBVFVTLFxyXG59IGZyb20gXCIuLi8uLi91dGlscy9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gXCIuLi8uLi9ob29rcy91c2VySG9va3NcIjtcclxuaW1wb3J0IHsgZ2V0VXNlckNoYXJhY3RlcnMgfSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9ucy9jaGFyYWN0ZXJzQWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBhZGRTdG9yeSB9IGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25zL3N0b3JpZXNBY3Rpb25zXCI7XHJcblxyXG5pbXBvcnQgSW5wdXRHcm91cCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jb21tb24vSW5wdXRcIjtcclxuaW1wb3J0IFNlbGVjdEdyb3VwIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2NvbW1vbi9TZWxlY3RcIjtcclxuaW1wb3J0IFRhZ3MgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZm9ybXMvVGFnc1wiO1xyXG5pbXBvcnQgVXBsb2FkSW1hZ2UgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZm9ybXMvVXBsb2FkSW1hZ2VcIjtcclxuaW1wb3J0IExvYWRlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jb21tb24vTG9hZGVyXCI7XHJcbmltcG9ydCBSYWRpb0J1dHRvbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9mb3Jtcy9SYWRpb0J1dHRvblwiO1xyXG5cclxuY29uc3QgeyBPcHRpb24gfSA9IFNlbGVjdDtcclxuXHJcbmNvbnN0IE5ld1N0b3J5ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgYXV0aCA9IHVzZUF1dGgoKTtcclxuICBjb25zdCBbZm9ybV0gPSBGb3JtLnVzZUZvcm0oKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbaW1hZ2UsIHNldEltYWdlXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBbY3VycmVudENoYXIsIHNldEN1cnJlbnRDaGFyXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBhZGRDaGFyYWN0ZXIgPSAoKSA9PiB7XHJcbiAgICBpZiAoXHJcbiAgICAgIGN1cnJlbnRDaGFyICYmXHJcbiAgICAgIGZvcm0uZ2V0RmllbGRWYWx1ZShcIm1haW5DaGFyYWN0ZXJzXCIpPy5pbmRleE9mKGN1cnJlbnRDaGFyKSA9PT0gLTEgJiZcclxuICAgICAgZm9ybS5nZXRGaWVsZFZhbHVlKFwibWFpbkNoYXJhY3RlcnNcIik/Lmxlbmd0aCA8IDVcclxuICAgICkge1xyXG4gICAgICBmb3JtLnNldEZpZWxkc1ZhbHVlKHtcclxuICAgICAgICBtYWluQ2hhcmFjdGVyczogWy4uLmZvcm0uZ2V0RmllbGRWYWx1ZShcIm1haW5DaGFyYWN0ZXJzXCIpLCBjdXJyZW50Q2hhcl0sXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc2V0Q3VycmVudENoYXIoXCJcIik7XHJcbiAgICBmb3JtLnNldEZpZWxkc1ZhbHVlKHsgY3VycmVudENoYXI6IFwiXCIgfSk7XHJcbiAgICBjb25zb2xlLmxvZyhmb3JtLmdldEZpZWxkVmFsdWUoXCJtYWluQ2hhcmFjdGVyc1wiKSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc3VibWl0ID0gKHZhbHVlcykgPT4ge1xyXG4gICAgY29uc29sZS5sb2codmFsdWVzKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkZhaWxlZCA9IChlcnJvcikgPT4ge1xyXG4gICAgY29uc3QgZXJyb3JOYW1lID0gZXJyb3IuZXJyb3JGaWVsZHNbMF0ubmFtZS50b1N0cmluZygpO1xyXG4gICAgZm9ybS5zY3JvbGxUb0ZpZWxkKGVycm9yTmFtZSk7XHJcbiAgICAvL21lc3NhZ2UuZXJyb3IoXCJUaGVyZSBhcmUgZXJyb3JzXCIpO1xyXG4gIH07XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoYXV0aC51c2VyKSB7XHJcbiAgICAgIHByb3BzLmdldFVzZXJDaGFyYWN0ZXJzKCk7XHJcbiAgICB9XHJcbiAgfSwgW2F1dGhdKTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZvcm0uc2V0RmllbGRzVmFsdWUoeyB0YWdzOiBbXSB9KTtcclxuICAgIGZvcm0uc2V0RmllbGRzVmFsdWUoeyBtYWluQ2hhcmFjdGVyczogW10gfSk7XHJcbiAgICBmb3JtLnNldEZpZWxkc1ZhbHVlKHsgbWF0dXJlOiBmYWxzZSB9KTtcclxuICAgIGZvcm0uc2V0RmllbGRzVmFsdWUoeyBwdWJsaWM6IHRydWUgfSk7XHJcbiAgICAvLyBmb3JtLnNldEZpZWxkc1ZhbHVlKHsgY3VycmVudENoYXI6IFwiXCIgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBmaWx0ZXJTb3J0ID0gKGEsIGIpID0+IHtcclxuICAgIGNvbnN0IGtleUEgPSBhLm5hbWUsXHJcbiAgICAgIGtleUIgPSBiLm5hbWU7XHJcbiAgICAvLyBDb21wYXJlIHRoZSAyIGRhdGVzXHJcbiAgICBpZiAoa2V5QSA8IGtleUIpIHJldHVybiAtMTtcclxuICAgIGlmIChrZXlBID4ga2V5QikgcmV0dXJuIDE7XHJcbiAgICByZXR1cm4gMDtcclxuICB9O1xyXG5cclxuICBjb25zb2xlLmxvZyhmb3JtLmdldEZpZWxkVmFsdWUoXCJjdXJyZW50Q2hhclwiKSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ldy1zdG9yeSBjdXN0b20tZm9ybVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyXCI+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInNpZGUtaGVhZGluZ1wiPkFkZCBhIG5ldyBzdG9yeTwvaDI+XHJcbiAgICAgICAgPEZvcm1cclxuICAgICAgICAgIGxheW91dD1cInZlcnRpY2FsXCJcclxuICAgICAgICAgIHNjcm9sbFRvRmlyc3RFcnJvclxyXG4gICAgICAgICAgb25GaW5pc2hGYWlsZWQ9e29uRmFpbGVkfVxyXG4gICAgICAgICAgb25GaW5pc2g9e3N1Ym1pdH1cclxuICAgICAgICAgIGZvcm09e2Zvcm19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFJvdyBndXR0ZXI9e1syNCwgMjRdfT5cclxuICAgICAgICAgICAgPENvbCBzbT17MjR9IHhzPXsyNH0gbWQ9ezE4fSBsZz17MTh9PlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIGNvbG9uPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXHJcbiAgICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJBIHRpdGxlIGlzIHJlcXVpcmVkXCIsXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIHsgbWF4OiA2NSB9LFxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiVGl0bGVcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPENvbCBzbT17MjR9IHhzPXsyNH0gbGc9ezZ9IG1kPXs2fT5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiY2F0ZWdvcmllc1wiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkNhdGVnb3JpZXNcIlxyXG4gICAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiQXQgbGVhc3QgMSBjYXRlZ29yeSBpcyByZXF1aXJlZFwiLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4OiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYXJyYXlcIixcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIllvdSBjYW4gb25seSBzZWxlY3QgdXAgdG8gMiBjYXRlZ29yaWVzXCIsXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3QgbW9kZT1cIm11bHRpcGxlXCIgYWxsb3dDbGVhciBtYXhUYWdDb3VudD17Mn0+XHJcbiAgICAgICAgICAgICAgICAgIHtDQVRFR09SSUVTPy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5QSA9IGEubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgIGtleUIgPSBiLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQ29tcGFyZSB0aGUgMiBkYXRlc1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChrZXlBIDwga2V5QikgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChrZXlBID4ga2V5QikgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgICAgICAgIH0pLm1hcCgoY2F0KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT17Y2F0LnZhbHVlfSBrZXk9e2NhdC52YWx1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7Y2F0Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICA8Um93IGd1dHRlcj17WzI0LCAyNF19PlxyXG4gICAgICAgICAgICA8Q29sIG1kPXs4fSBzbT17MjR9IHhzPXsyNH0gbGc9ezh9PlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJsYW5ndWFnZVwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkxhbmd1YWdlXCJcclxuICAgICAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkEgbGFuZ3VhZ2UgaXMgcmVxdWlyZWRcIixcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFNlbGVjdCBmaWx0ZXJTb3J0PXtmaWx0ZXJTb3J0fT5cclxuICAgICAgICAgICAgICAgICAge0xBTkdVQUdFUz8ubWFwKChsYW5nKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT17bGFuZy52YWx1ZX0ga2V5PXtsYW5nLnZhbHVlfT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtsYW5nLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIG1kPXs4fSBzbT17MjR9IHhzPXsyNH0gbGc9ezh9PlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJzdGF0dXNcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJTdGF0dXNcIlxyXG4gICAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiQSBzdGF0dXMgaXMgcmVxdWlyZWRcIixcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFNlbGVjdD5cclxuICAgICAgICAgICAgICAgICAge1NUQVRVUy5tYXAoKHN0YXQpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPXtzdGF0LnZhbHVlfSBrZXk9e3N0YXQudmFsdWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAge3N0YXQubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICA8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgbWQ9ezh9IHNtPXsyNH0geHM9ezI0fSBsZz17OH0+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImNvcHlyaWdodFwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkNvcHlyaWdodFwiXHJcbiAgICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJBIGNvcHlyaWdodCBpcyByZXF1aXJlZFwiLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICB7Q09QWVJJR0hUUy5tYXAoKGNvcHkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPXtjb3B5LnZhbHVlfSBrZXk9e2NvcHkudmFsdWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAge2NvcHkubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICA8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgbGFiZWw9XCJTdW1tYXJ5XCJcclxuICAgICAgICAgICAgbmFtZT1cInN1bW1hcnlcIlxyXG4gICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG1heDogMTgwLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJZb3VyIHN1bW1hcnkgY2Fubm90IGV4Y2VlZCAxODAgY2hhcmFjdGVyc1wiLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJbnB1dC5UZXh0QXJlYVxyXG4gICAgICAgICAgICAgIGF1dG9TaXplPXt7IG1pblJvd3M6IDUgfX1cclxuICAgICAgICAgICAgICBzaG93Q291bnQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgbWF4TGVuZ3RoPXsxODB9XHJcbiAgICAgICAgICAgID48L0lucHV0LlRleHRBcmVhPlxyXG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICA8Um93IGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCIgZ3V0dGVyPXtbMjQsIDI0XX0+XHJcbiAgICAgICAgICAgIDxSYWRpb0J1dHRvblxyXG4gICAgICAgICAgICAgIGxnPXs0fVxyXG4gICAgICAgICAgICAgIHNtPXsxMn1cclxuICAgICAgICAgICAgICB4cz17MjR9XHJcbiAgICAgICAgICAgICAgbWQ9ezh9XHJcbiAgICAgICAgICAgICAgbmFtZT1cInB1YmxpY1wiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJWaXNpYmlsaXR5XCJcclxuICAgICAgICAgICAgICBudW0xPVwiM1wiXHJcbiAgICAgICAgICAgICAgbnVtMj1cIjRcIlxyXG4gICAgICAgICAgICAgIGxhYmVsMT1cIlB1YmxpY1wiXHJcbiAgICAgICAgICAgICAgbGFiZWwyPVwiUHJpdmF0ZVwiXHJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtmb3JtLmdldEZpZWxkVmFsdWUoXCJwdWJsaWNcIil9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxSYWRpb0J1dHRvblxyXG4gICAgICAgICAgICAgIGxnPXs0fVxyXG4gICAgICAgICAgICAgIHNtPXsxMn1cclxuICAgICAgICAgICAgICB4cz17MjR9XHJcbiAgICAgICAgICAgICAgbWQ9ezh9XHJcbiAgICAgICAgICAgICAgbmFtZT1cIm1hdHVyZVwiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJNYXR1cmUgY29udGVudCA/XCJcclxuICAgICAgICAgICAgICBudW0xPVwiMVwiXHJcbiAgICAgICAgICAgICAgbnVtMj1cIjJcIlxyXG4gICAgICAgICAgICAgIGxhYmVsMT1cIlllc1wiXHJcbiAgICAgICAgICAgICAgbGFiZWwyPVwiTm9cIlxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17Zm9ybS5nZXRGaWVsZFZhbHVlKFwibWF0dXJlXCIpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Q29sIGxnPXs4fSBtZD17MTJ9IHNtPXsyNH0geHM9ezI0fT5cclxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRhZ3NcIiBjbGFzc05hbWU9XCJ0YWdzLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICBUYWdzXHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8VGFncyBmb3JtPXtmb3JtfSAvPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgIDxGb3JtLkl0ZW0gbmFtZT1cIm1haW5DaGFyYWN0ZXJzXCIgbGFiZWw9XCJNYWluIENoYXJhY3RlcnNcIj5cclxuICAgICAgICAgICAgPFJvdyBndXR0ZXI9e1syNCwgMjRdfT5cclxuICAgICAgICAgICAgICA8Q29sIGxnPXsxMn0gbWQ9ezI0fSBzbT17MjR9IHhzPXsyNH0+XHJcbiAgICAgICAgICAgICAgICA8Um93IGd1dHRlcj17MTZ9PlxyXG4gICAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezIyfT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtIG5hbWU9XCJjdXJyZW50Q2hhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybS5nZXRGaWVsZFZhbHVlKFwibWFpbkNoYXJhY3RlcnNcIik/Lmxlbmd0aCA+PSA1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbCkgPT4gc2V0Q3VycmVudENoYXIodmFsKX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIm5vbmVcIiBkaXNhYmxlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBDaG9vc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5jaGFyYWN0ZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmdldEZpZWxkVmFsdWUoXCJtYWluQ2hhcmFjdGVyc1wiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8uaW5kZXhPZihjLmlkKSA9PT0gLTFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXlBID0gYS5maXJzdG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleUIgPSBiLmZpcnN0bmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENvbXBhcmUgdGhlIDIgZGF0ZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChrZXlBIDwga2V5QikgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGtleUEgPiBrZXlCKSByZXR1cm4gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgoY2hhcikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2NoYXIuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjaGFyLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPntgJHtjaGFyLmZpcnN0bmFtZX0gJHtjaGFyLmxhc3RuYW1lfWB9PC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VsZWN0LWFkZC1pbnB1dC1pY29uYm94XCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2FkZENoYXJhY3Rlcn1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4rPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgPHNtYWxsPllvdSBjYW4gYWRkIHVwIHRvIDUgbWFpbiBjaGFyYWN0ZXJzPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDxDb2wgbGc9ezEyfSBtZD17MjR9IHNtPXsyNH0geHM9ezI0fT5cclxuICAgICAgICAgICAgICAgIDxSb3cgZ3V0dGVyPXtbMTYsIDI0XX0+XHJcbiAgICAgICAgICAgICAgICAgIHtwcm9wcy5jaGFyYWN0ZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihcclxuICAgICAgICAgICAgICAgICAgICAgIChjKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtLmdldEZpZWxkVmFsdWUoXCJtYWluQ2hhcmFjdGVyc1wiKT8uaW5kZXhPZihjLmlkKSAhPT1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLTFcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgLm1hcCgoY2hhcikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPENvbCBtZD17MTJ9IHNtPXsyNH0ga2V5PXtjaGFyLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2NoYXIuaWR9IGNsYXNzTmFtZT1cIm1haW4tc2VsZWN0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tYXZhdGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Y2hhci5pbWFnZX0gYWx0PXtjaGFyLmZpcnN0bmFtZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57YCR7Y2hhci5maXJzdG5hbWV9ICR7Y2hhci5sYXN0bmFtZX1gfSA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGlvbi1pY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByZW1vdmVDaGFyYWN0ZXIoY2hhci5pZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY2xvc2UtY2lyY2xlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9pb24taWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgIDxSb3cgYWxpZ249XCJib3R0b21cIiBndXR0ZXI9e1syNCwgMjRdfT5cclxuICAgICAgICAgICAgPENvbCBtZD17MTJ9IHNtPXsyNH0geHM9ezI0fT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImJhbm5lclwiPlVwbG9hZCBhIGNvdmVyPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxVcGxvYWRJbWFnZSBpbWFnZT17aW1hZ2V9IHNldEltYWdlPXtzZXRJbWFnZX0gLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgc209ezI0fSB4cz17MjR9IG1kPXsxMn0gbGc9ezEyfT5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwiT3Igc3VibWl0IGEgbGluayB0byB5b3VyIGltYWdlXCIgbmFtZT1cImltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgb25DaGFuZ2U9eyh2YWwpID0+IGNvbnNvbGUubG9nKHZhbCl9IC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICAgICAgey8qIDxJbnB1dEdyb3VwXHJcbiAgICAgICAgICAgICAgcmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgIHNtPXsyNH1cclxuICAgICAgICAgICAgICB4cz17MjR9XHJcbiAgICAgICAgICAgICAgbWQ9ezEyfVxyXG4gICAgICAgICAgICAgIGxnPXsxMn1cclxuICAgICAgICAgICAgICBpZD1cImJhbm5lclwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJiYW5uZXJcIlxyXG4gICAgICAgICAgICAgIHRpdGxlPVwiT3Igc3VibWl0IGEgbGluayB0byBhbiBpbWFnZVwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtcclxuICAgICAgICAgICAgICAgIHR5cGVvZiBzdG9yeUluZm8uYmFubmVyICE9PSBcIm9iamVjdFwiID8gc3RvcnlJbmZvLmJhbm5lciA6IFwiXCJcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2VGdW5jPXtzZXRTdG9yeUluZm99XHJcbiAgICAgICAgICAgICAgc3RvcnlJbmZvPXtzdG9yeUluZm99XHJcbiAgICAgICAgICAgIC8+ICovfVxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5DcmVhdGU8L2J1dHRvbj5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcclxuICBjaGFyYWN0ZXJzOiBzdGF0ZS5jaGFyYWN0ZXJzLnVzZXJDaGFyYWN0ZXJzLFxyXG4gIGNvbmZpcm1NZXNzYWdlOiBzdGF0ZS5zdG9yaWVzLm1lc3NhZ2UsXHJcbiAgc3RvcnlJZDogc3RhdGUuc3Rvcmllcy5zdG9yeUlkLFxyXG4gIGxvYWRpbmc6IHN0YXRlLnN0b3JpZXMubG9hZGluZ1N0b3J5LFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7IGdldFVzZXJDaGFyYWN0ZXJzLCBhZGRTdG9yeSB9KShcclxuICBOZXdTdG9yeVxyXG4pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9