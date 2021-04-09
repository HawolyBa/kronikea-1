module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/profile/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "./components/common/Card.js":
/*!***********************************!*\
  !*** ./components/common/Card.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_dummy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/dummy */ "./utils/dummy.js");
var _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\components\\common\\Card.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Card = ({
  story,
  type
}) => {
  var _story$summary;

  return __jsx("figure", {
    className: "card story-card",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "img-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: story.banner ? story.banner : _utils_dummy__WEBPACK_IMPORTED_MODULE_1__["dummy"].noImage,
    alt: "image",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  })), __jsx("figcaption", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "cat-block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: "tag",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 11
    }
  }, "Drama")), __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, story === null || story === void 0 ? void 0 : story.title), type !== "mini" && __jsx("p", {
    className: "description",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, (story === null || story === void 0 ? void 0 : (_story$summary = story.summary) === null || _story$summary === void 0 ? void 0 : _story$summary.length) > 150 ? `${story.summary.slice(0, 150)}...` : story.summary, !story.summary && "No summary yet"), type !== "privateProfile" && __jsx("span", {
    className: "author",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, "Author: ", story.authorName), __jsx("div", {
    className: "count",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "number",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, story.chaptersCount, " "), " ", __jsx("ion-icon", {
    name: "book",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  })), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "number",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, story.secondaryArr.length + story.mainCharacters.length, " "), " ", __jsx("ion-icon", {
    name: "people",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  })), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "number",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, story.commentsCount, " "), " ", __jsx("ion-icon", {
    name: "chatbubble",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./components/common/CharacterCard.js":
/*!********************************************!*\
  !*** ./components/common/CharacterCard.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_dummy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/dummy */ "./utils/dummy.js");
var _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\components\\common\\CharacterCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const CharacterCard = ({
  character,
  type,
  removeCharacter
}) => {
  return __jsx("figure", {
    className: `card character-card ${type ? type : ""}`,
    "data-aos": "zoom-in-up",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, type === "add" && __jsx("span", {
    onClick: () => removeCharacter(character.id),
    className: "remove-btn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, "x"), __jsx("div", {
    className: "img-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: character !== null && character !== void 0 && character.image ? character.image : _utils_dummy__WEBPACK_IMPORTED_MODULE_1__["dummy"].noImage,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  })), __jsx("figcaption", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, `${character === null || character === void 0 ? void 0 : character.firstname} ${character === null || character === void 0 ? void 0 : character.lastname}`), (type === "favorites" || type === "story") && __jsx("span", {
    className: "author",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, "Author: ", character === null || character === void 0 ? void 0 : character.authorName), (type === "add" || type === "show") && __jsx("span", {
    className: "author",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, "Relation: ", character === null || character === void 0 ? void 0 : character.relation)));
};

/* harmony default export */ __webpack_exports__["default"] = (CharacterCard);

/***/ }),

/***/ "./components/common/Grid.js":
/*!***********************************!*\
  !*** ./components/common/Grid.js ***!
  \***********************************/
/*! exports provided: StoriesGrid, CharacterGrid, UserGrid, LocationGrid, MiniGrid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoriesGrid", function() { return StoriesGrid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterGrid", function() { return CharacterGrid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserGrid", function() { return UserGrid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationGrid", function() { return LocationGrid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiniGrid", function() { return MiniGrid; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_responsive_masonry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-responsive-masonry */ "react-responsive-masonry");
/* harmony import */ var react_responsive_masonry__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_responsive_masonry__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/Card */ "./components/common/Card.js");
/* harmony import */ var _common_UserCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/UserCard */ "./components/common/UserCard.js");
/* harmony import */ var _common_CharacterCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/CharacterCard */ "./components/common/CharacterCard.js");
/* harmony import */ var _common_LocationCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/LocationCard */ "./components/common/LocationCard.js");
/* harmony import */ var _utils_dummy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/dummy */ "./utils/dummy.js");
var _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\components\\common\\Grid.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const StoriesGrid = ({
  stories,
  type,
  gutter,
  columnsCountBreakPoints
}) => {
  return stories.length > 0 ? __jsx(react_responsive_masonry__WEBPACK_IMPORTED_MODULE_3__["ResponsiveMasonry"], {
    columnsCountBreakPoints: columnsCountBreakPoints,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx(react_responsive_masonry__WEBPACK_IMPORTED_MODULE_3___default.a, {
    gutter: gutter,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, stories.map(story => __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    key: story.id,
    href: `/story/${story.id}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, __jsx(_common_Card__WEBPACK_IMPORTED_MODULE_4__["default"], {
    story: story,
    type: type,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 15
    }
  })))))) : __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Empty"], {
    image: antd__WEBPACK_IMPORTED_MODULE_1__["Empty"].PRESENTED_IMAGE_SIMPLE,
    description: "No stories yet",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  });
};

const MiniGrid = ({
  stories,
  type,
  gutter,
  columnsCountBreakPoints
}) => {
  return stories.length > 0 ? stories.map(story => __jsx("figure", {
    key: story.id,
    className: "mini-card",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: story.banner ? story.banner : _utils_dummy__WEBPACK_IMPORTED_MODULE_8__["dummy"].cover,
    alt: "image",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }), __jsx("figcaption", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "cat-block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: "cat",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, "Drama")), __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, story.title)))) : __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Empty"], {
    image: antd__WEBPACK_IMPORTED_MODULE_1__["Empty"].PRESENTED_IMAGE_SIMPLE,
    description: "No stories yet",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  });
};

const UserGrid = ({
  users,
  xl,
  lg,
  xs,
  sm,
  md,
  gutter
}) => {
  return users.length > 0 ? __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    gutter: gutter,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }, users.map(u => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    key: u.id,
    xl: xl,
    lg: lg,
    md: md,
    sm: sm,
    xs: xs,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, __jsx(_common_UserCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
    user: u,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  })))) : __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Empty"], {
    image: antd__WEBPACK_IMPORTED_MODULE_1__["Empty"].PRESENTED_IMAGE_SIMPLE,
    description: "No followers yet",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 5
    }
  });
};

const LocationGrid = ({
  locations,
  gutter,
  xl,
  xxl,
  lg,
  md,
  sm,
  xs,
  type,
  columnsCountBreakPoints
}) => {
  return locations.length > 0 ? __jsx(react_responsive_masonry__WEBPACK_IMPORTED_MODULE_3__["ResponsiveMasonry"], {
    columnsCountBreakPoints: columnsCountBreakPoints,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 5
    }
  }, __jsx(react_responsive_masonry__WEBPACK_IMPORTED_MODULE_3___default.a, {
    gutter: gutter,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }
  }, locations.map(c => __jsx(_common_LocationCard__WEBPACK_IMPORTED_MODULE_7__["default"], {
    key: c.id,
    location: c,
    type: type,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 11
    }
  })))) : __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Empty"], {
    image: antd__WEBPACK_IMPORTED_MODULE_1__["Empty"].PRESENTED_IMAGE_SIMPLE,
    description: "No locations yet",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 5
    }
  });
};

const CharacterGrid = ({
  gutter,
  xxl,
  xl,
  lg,
  md,
  sm,
  xs,
  characters,
  type,
  columnsCountBreakPoints
}) => {
  return characters.length > 0 ? __jsx(react_responsive_masonry__WEBPACK_IMPORTED_MODULE_3__["ResponsiveMasonry"], {
    columnsCountBreakPoints: columnsCountBreakPoints,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 5
    }
  }, __jsx(react_responsive_masonry__WEBPACK_IMPORTED_MODULE_3___default.a, {
    gutter: gutter,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 7
    }
  }, characters.map(c => __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    key: c.id,
    href: `/character/${c.id}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 11
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 13
    }
  }, __jsx(_common_CharacterCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
    character: c,
    type: type,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 15
    }
  })))))) : __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Empty"], {
    image: antd__WEBPACK_IMPORTED_MODULE_1__["Empty"].PRESENTED_IMAGE_SIMPLE,
    description: "No characters yet",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 5
    }
  });
};



/***/ }),

/***/ "./components/common/LocationCard.js":
/*!*******************************************!*\
  !*** ./components/common/LocationCard.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_dummy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/dummy */ "./utils/dummy.js");
var _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\components\\common\\LocationCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const LocationCard = ({
  location,
  type
}) => {
  const [visible, setVisible] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("figure", {
    className: "card character-card",
    "data-aos": "zoom-in-up",
    onClick: () => setVisible(true),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "img-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: location.image ? location.image : _utils_dummy__WEBPACK_IMPORTED_MODULE_3__["dummy"].noImage,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  })), __jsx("figcaption", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, location.name), type !== "story" && __jsx("span", {
    className: "author",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, "Story: ", location.storyTitle))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    title: location.name,
    visible: visible,
    onCancel: () => setVisible(false),
    footer: [__jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      key: "submit",
      type: "primary",
      onClick: () => setVisible(false),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 11
      }
    }, "Close")],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx("img", {
    className: "modal-img",
    src: location.image ? location.image : _utils_dummy__WEBPACK_IMPORTED_MODULE_3__["dummy"].noImage,
    alt: location.name,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, location.description), type !== "story" && __jsx("p", {
    className: "modal-story-link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }, "Story:", " ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: `/story/${location.storyId}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 15
    }
  }, location.storyTitle)))));
};

/* harmony default export */ __webpack_exports__["default"] = (LocationCard);

/***/ }),

/***/ "./components/common/Pagination.js":
/*!*****************************************!*\
  !*** ./components/common/Pagination.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Grid */ "./components/common/Grid.js");
var _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\components\\common\\Pagination.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const Pagination = ({
  data,
  xs,
  sm,
  lg,
  xl,
  md,
  type,
  gutter,
  columnsCountBreakPoints,
  itemType
}) => {
  const [pagination, setPagination] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({
    currentPage: 1,
    datasPerPage: 12
  });
  const {
    currentPage,
    datasPerPage
  } = pagination;
  const indexOfLastData = currentPage * datasPerPage;
  const indexOfFirstData = indexOfLastData - datasPerPage;
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(() => {}, [data]);
  const currentDatas = data.slice(indexOfFirstData, indexOfLastData);

  const handleClick = e => {
    window.scrollTo(0, 0);
    setPagination(_objectSpread(_objectSpread({}, pagination), {}, {
      currentPage: Number(e)
    }));
  };

  const renderDatas = itemType === "stories" ? __jsx(_Grid__WEBPACK_IMPORTED_MODULE_2__["StoriesGrid"], {
    gutter: gutter,
    type: type,
    stories: currentDatas,
    columnsCountBreakPoints: columnsCountBreakPoints,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }) : itemType === "characters" ? __jsx(_Grid__WEBPACK_IMPORTED_MODULE_2__["CharacterGrid"], {
    columnsCountBreakPoints: columnsCountBreakPoints,
    gutter: gutter,
    type: type,
    characters: currentDatas,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }) : itemType === "locations" ? __jsx(_Grid__WEBPACK_IMPORTED_MODULE_2__["LocationGrid"], {
    locations: currentDatas,
    gutter: gutter,
    type: type,
    columnsCountBreakPoints: columnsCountBreakPoints,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }) : itemType === "followers" || itemType === "users" ? __jsx(_Grid__WEBPACK_IMPORTED_MODULE_2__["UserGrid"], {
    gutter: gutter,
    type: type,
    xs: xs,
    sm: sm,
    lg: lg,
    md: md,
    users: currentDatas,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }) : null;
  let pageNumbers = [];

  for (let i = 1; i <= Math.ceil(data.length / datasPerPage); i++) {
    pageNumbers.push(i);
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 5
    }
  }, renderDatas, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Pagination"], {
    size: "small",
    showQuickJumper: true,
    hideOnSinglePage: true,
    onChange: handleClick,
    total: data.length,
    pageSize: datasPerPage,
    showTotal: total => `Total ${total} items`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Pagination);

/***/ }),

/***/ "./components/common/UserCard.js":
/*!***************************************!*\
  !*** ./components/common/UserCard.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\components\\common\\UserCard.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const UserCard = ({
  user
}) => {
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: `/profile/${user.id}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx("figure", {
    className: "user-card",
    "data-aos": "flip-left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Space"], {
    direction: "vertical",
    size: 12,
    align: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "img-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, user.image ? __jsx("img", {
    src: user.image,
    alt: `photo ${user.username}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }) : __jsx("ion-icon", {
    name: "person",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  })), __jsx("figcaption", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, user.username)))));
};

/* harmony default export */ __webpack_exports__["default"] = (UserCard);

/***/ }),

/***/ "./components/hoc/LoadingScreen.js":
/*!*****************************************!*\
  !*** ./components/hoc/LoadingScreen.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\components\\hoc\\LoadingScreen.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const LoadingScreen = ({
  children,
  loading
}) => {
  return !loading ? children : __jsx("div", {
    className: "loader-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "loader",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (LoadingScreen);

/***/ }),

/***/ "./components/hoc/RedirectComp.js":
/*!****************************************!*\
  !*** ./components/hoc/RedirectComp.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\components\\hoc\\RedirectComp.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const RedirectComp = ({
  condition,
  type,
  children,
  verifyEmail
}) => {
  return condition ? children : type === "404" ? __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Result"], {
    status: "404",
    title: "404",
    subTitle: "Sorry, the page you visited does not exist.",
    extra: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      type: "primary",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 14
      }
    }, "Back Home"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }) : type === "403" ? __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Result"], {
    status: "403",
    title: "403",
    subTitle: "Sorry, you are not authorized to access this page.",
    extra: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      type: "primary",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 14
      }
    }, "Back Home"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }) : type === "redirect" ? window.location.href = "/auth" : type === "verify" ? __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Result"], {
    status: "403",
    title: "403",
    subTitle: "Sorry, you cannot post until you verify your email",
    extra: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      type: "primary",
      onClick: () => verifyEmail(),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }
    }, "Send a new email"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }) : __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (RedirectComp);

/***/ }),

/***/ "./components/profile/Banner.js":
/*!**************************************!*\
  !*** ./components/profile/Banner.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_dummy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/dummy */ "./utils/dummy.js");
/* harmony import */ var _Favorites__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Favorites */ "./components/profile/Favorites.js");
var _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\components\\profile\\Banner.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Banner = ({
  openSettings,
  profile,
  favAuthors,
  followers,
  changeFavTab,
  favTab,
  setCurrentTab,
  context,
  isFollowing,
  followUser,
  unfollowUser,
  auth,
  id
}) => {
  return __jsx("div", {
    className: "banner",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    gutter: 16,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xl: 18,
    lg: 24,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "profile-top",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    gutter: 32,
    align: "middle",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 24,
    sm: 8,
    md: 9,
    lg: 7,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 15
    }
  }, __jsx("div", {
    "data-icon": "image",
    className: "avatar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }, profile.image ? __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: profile === null || profile === void 0 ? void 0 : profile.image,
    alt: profile.username,
    width: 230,
    height: 230,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 21
    }
  }) : __jsx("ion-icon", {
    name: "person",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 21
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 15,
    lg: 17,
    sm: 16,
    xs: 24,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "profile-details",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "inner",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 19
    }
  }, context === "private" ? __jsx("div", {
    className: "icon custom-icon settings-icon",
    onClick: openSettings,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 23
    }
  }, __jsx("ion-icon", {
    name: "settings",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 25
    }
  })) : auth.user ? __jsx("div", {
    onClick: () => isFollowing ? unfollowUser(id, isFollowing) : followUser(id, isFollowing, auth.user),
    className: `follow-btn add-btn-circle ${isFollowing ? "followed" : ""}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 23
    }
  }, __jsx("ion-icon", {
    name: "add-circle",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 25
    }
  }), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 25
    }
  }, `${isFollowing ? "Unfollow" : "Follow"} this author`)) : null, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 21
    }
  }, profile === null || profile === void 0 ? void 0 : profile.username), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Space"], {
    size: 30,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "follow-count",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 23
    }
  }, followers === null || followers === void 0 ? void 0 : followers.authors.length, " followers"), __jsx("span", {
    className: "follow-count",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 23
    }
  }, favAuthors === null || favAuthors === void 0 ? void 0 : favAuthors.authors.length, " followings")), __jsx("p", {
    className: "bio",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 21
    }
  }, profile.biography && (profile === null || profile === void 0 ? void 0 : profile.biography)), __jsx("div", {
    className: "social",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 21
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Space"], {
    size: 30,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 23
    }
  }, profile.facebook && __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: profile === null || profile === void 0 ? void 0 : profile.facebook,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 27
    }
  }, __jsx("a", {
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "icon custom-icon fb-icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 31
    }
  }, __jsx("ion-icon", {
    name: "logo-facebook",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 33
    }
  })))), profile.twitter && __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: profile === null || profile === void 0 ? void 0 : profile.twitter,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 27
    }
  }, __jsx("a", {
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "icon custom-icon twitter-icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 31
    }
  }, __jsx("ion-icon", {
    name: "logo-twitter",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 33
    }
  })))), profile.instagram && __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: profile === null || profile === void 0 ? void 0 : profile.instagram,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 27
    }
  }, __jsx("a", {
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "icon custom-icon instagram-icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 31
    }
  }, __jsx("ion-icon", {
    name: "logo-instagram",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 33
    }
  })))), profile.deviantart && __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: profile === null || profile === void 0 ? void 0 : profile.deviantart,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 27
    }
  }, __jsx("a", {
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "icon custom-icon deviantart-icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 31
    }
  }, __jsx("ion-icon", {
    name: "logo-deviantart",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 33
    }
  })))))))))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    flex: "auto",
    xl: 6,
    lg: 24,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "bio",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "more",
    onClick: () => favTab === "favauthors" ? setCurrentTab("followings") : setCurrentTab("followers"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 13
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 15
    }
  }, "See all >>>")), __jsx("div", {
    className: "segmented-control",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 13
    }
  }, __jsx("input", {
    type: "radio",
    name: "radio2",
    value: "3",
    id: "tab-1",
    onClick: () => changeFavTab("favauthors"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 15
    }
  }), __jsx("label", {
    htmlFor: "tab-1",
    className: "segmented-control__1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 15
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 17
    }
  }, "Recent Followings")), __jsx("input", {
    type: "radio",
    name: "radio2",
    value: "4",
    id: "tab-2",
    onClick: () => changeFavTab("followers"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 15
    }
  }), __jsx("label", {
    htmlFor: "tab-2",
    className: "segmented-control__2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 15
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 17
    }
  }, "Recent Followers")), __jsx("div", {
    className: "segmented-control__color",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 15
    }
  })), favTab === "favauthors" && __jsx(_Favorites__WEBPACK_IMPORTED_MODULE_4__["default"], {
    setCurrentTab: setCurrentTab,
    favs: favAuthors,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 15
    }
  }), favTab === "followers" && __jsx(_Favorites__WEBPACK_IMPORTED_MODULE_4__["default"], {
    setCurrentTab: setCurrentTab,
    favs: followers,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 15
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Banner);

/***/ }),

/***/ "./components/profile/Characters.js":
/*!******************************************!*\
  !*** ./components/profile/Characters.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_Pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/Pagination */ "./components/common/Pagination.js");
/* harmony import */ var _SortInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SortInput */ "./components/profile/SortInput.js");
var _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\components\\profile\\Characters.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Characters = ({
  characters,
  type,
  context
}) => {
  const [data, setData] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState([]);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    setData(characters);
  }, [characters]);
  const options = [{
    name: "Date (ascending)",
    value: "date-asc"
  }, {
    name: "Date (descending)",
    value: "date-desc"
  }, {
    name: "Firstname (ascending)",
    value: "firstname-asc"
  }, {
    name: "Firstname (descending)",
    value: "firstname-desc"
  }, {
    name: "Lastname (ascending)",
    value: "lastname-asc"
  }, {
    name: "Lastname (descending)",
    value: "lastname-desc"
  }];
  return __jsx("div", {
    className: "profile-characters",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, __jsx(_SortInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "characters",
    itemData: characters,
    title: type !== "favorites" ? characters.length > 1 ? "Characters" : "Character" : characters.length > 1 ? "Favorite Characters" : "Favorite Character",
    setData: setData,
    options: options,
    context: context,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }), __jsx(_common_Pagination__WEBPACK_IMPORTED_MODULE_2__["default"], {
    data: data,
    type: type,
    gutter: "16px",
    itemType: "characters",
    columnsCountBreakPoints: {
      350: 1,
      750: 2,
      900: 3,
      1200: 4,
      1600: 6
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Characters);

/***/ }),

/***/ "./components/profile/Favorites.js":
/*!*****************************************!*\
  !*** ./components/profile/Favorites.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\components\\profile\\Favorites.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Favorites = ({
  favs
}) => {
  return __jsx("div", {
    className: "favorites",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    gutter: [15, 10],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, favs.isLoading ? __jsx("div", {
    className: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Spin"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  })) : favs.authors.slice(0, 12).map(fav => __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    key: fav.id,
    span: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: `/profile/${fav.id}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: "fav-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
    title: fav.username,
    color: "#6d5dfc",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "img-container-border img-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 21
    }
  }, fav.image ? __jsx("img", {
    src: fav.image,
    alt: `photo ${fav.username}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 25
    }
  }) : __jsx("ion-icon", {
    name: "person",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 25
    }
  })))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Favorites);

/***/ }),

/***/ "./components/profile/Followers.js":
/*!*****************************************!*\
  !*** ./components/profile/Followers.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_Pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/Pagination */ "./components/common/Pagination.js");
/* harmony import */ var _SortInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SortInput */ "./components/profile/SortInput.js");
var _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\components\\profile\\Followers.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Followers = ({
  md,
  sm,
  xs,
  lg,
  items,
  title,
  type
}) => {
  const [data, setData] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState([]);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    setData(items);
  }, [items]);
  const options = [{
    name: "Date (ascending)",
    value: "date-asc"
  }, {
    name: "Date (descending)",
    value: "date-desc"
  }, {
    name: "Username (ascending)",
    value: "username-asc"
  }, {
    name: "Username (descending)",
    value: "username-desc"
  }];
  return __jsx("div", {
    className: "followers",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, __jsx(_SortInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "followers",
    itemData: items,
    title: title,
    setData: setData,
    options: options,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }), __jsx(_common_Pagination__WEBPACK_IMPORTED_MODULE_2__["default"], {
    data: data,
    gutter: [20, 30],
    itemType: "followers",
    md: md,
    sm: sm,
    xs: xs,
    lg: lg,
    type: type,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Followers);

/***/ }),

/***/ "./components/profile/LinkComp.js":
/*!****************************************!*\
  !*** ./components/profile/LinkComp.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\components\\profile\\LinkComp.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const LinkComp = ({
  name,
  label,
  info,
  setInfo
}) => {
  const validate_url = (url, name) => {
    if (name === "twitter" && url) {
      if (/^(https?:\/\/)?((w{3}\.)?)twitter\.com\/(#!\/)?[a-z0-9_]+$/i.test(url)) {
        setInfo(_objectSpread(_objectSpread({}, info), {}, {
          errors: _objectSpread(_objectSpread({}, info.errors), {}, {
            twitter: ""
          })
        }));
      } else {
        setInfo(_objectSpread(_objectSpread({}, info), {}, {
          errors: _objectSpread(_objectSpread({}, info.errors), {}, {
            twitter: `The link is not a valid Twitter url`
          })
        }));
      }
    } else if (name === "facebook" && url) {
      if (/^(https?:\/\/)?((w{3}\.)?)facebook\.com\/(#!\/)?[a-z0-9_]+$/i.test(url)) {
        setInfo(_objectSpread(_objectSpread({}, info), {}, {
          errors: _objectSpread(_objectSpread({}, info.errors), {}, {
            facebook: ""
          })
        }));
      } else {
        setInfo(_objectSpread(_objectSpread({}, info), {}, {
          errors: _objectSpread(_objectSpread({}, info.errors), {}, {
            facebook: `The link is not a valid Facebook url`
          })
        }));
      }
    } else if (name === "instagram" && url) {
      if (/^(https?:\/\/)?((w{3}\.)?)instagram\.com\/(#!\/)?[a-z0-9_]+$/i.test(url)) {
        setInfo(_objectSpread(_objectSpread({}, info), {}, {
          errors: _objectSpread(_objectSpread({}, info.errors), {}, {
            instagram: ""
          })
        }));
      } else {
        setInfo(_objectSpread(_objectSpread({}, info), {}, {
          errors: _objectSpread(_objectSpread({}, info.errors), {}, {
            instagram: `The link is not a valid Instagram url`
          })
        }));
      }
    } else if (name === "deviantart" && url) {
      if (/^(https?:\/\/)?((w{3}\.)?)deviantart\.com\/(#!\/)?[a-z0-9_]+$/i.test(url)) {
        setInfo(_objectSpread(_objectSpread({}, info), {}, {
          errors: _objectSpread(_objectSpread({}, info.errors), {}, {
            deviantart: ""
          })
        }));
      } else {
        setInfo(_objectSpread(_objectSpread({}, info), {}, {
          errors: _objectSpread(_objectSpread({}, info.errors), {}, {
            deviantart: `The link is not a valid Deviantart url`
          })
        }));
      }
    } else if (!url) {
      setInfo(_objectSpread(_objectSpread({}, info), {}, {
        errors: _objectSpread(_objectSpread({}, info.errors), {}, {
          [name]: ``
        })
      }));
    }
  };

  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    validate_url(info.facebook, "facebook");
  }, [info.facebook]);
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    validate_url(info.twitter, "twitter");
  }, [info.twitter]);
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    validate_url(info.instagram, "instagram");
  }, [info.instagram]);
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    validate_url(info.deviantart, "deviantart");
  }, [info.deviantart]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Input"], {
    addonBefore: __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Tooltip"], {
      title: label,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 11
      }
    }, __jsx("ion-icon", {
      name: `logo-${name}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 13
      }
    })),
    addonAfter: !info.errors[name] && info[name] && __jsx("ion-icon", {
      name: "checkmark",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 25
      }
    }),
    onChange: e => {
      setInfo(_objectSpread(_objectSpread({}, info), {}, {
        [name]: e.target.value
      }));
    },
    placeholder: `Enter a link. Ex: https://${name}.com/JaneDoe`,
    value: info[name],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 7
    }
  }), info.errors[name] && __jsx("div", {
    className: "ant-form-item-explain ant-form-item-explain-error",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 9
    }
  }, __jsx("div", {
    role: "alert",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 11
    }
  }, info.errors[name])));
};

/* harmony default export */ __webpack_exports__["default"] = (LinkComp);

/***/ }),

/***/ "./components/profile/Locations.js":
/*!*****************************************!*\
  !*** ./components/profile/Locations.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_Pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/Pagination */ "./components/common/Pagination.js");
/* harmony import */ var _SortInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SortInput */ "./components/profile/SortInput.js");
var _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\components\\profile\\Locations.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Locations = ({
  locations,
  type,
  context
}) => {
  const [data, setData] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState([]);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    setData(locations);
  }, [locations]);
  const options = [{
    name: "Date (ascending)",
    value: "date-asc"
  }, {
    name: "Date (descending)",
    value: "date-desc"
  }, {
    name: "Name (ascending)",
    value: "name-asc"
  }, {
    name: "Name (descending)",
    value: "name-desc"
  }];
  return __jsx("div", {
    className: "profile-characters",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, __jsx(_SortInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "locations",
    itemData: locations,
    title: locations.length > 1 ? "Locations" : "Location",
    setData: setData,
    options: options,
    context: context,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }), __jsx(_common_Pagination__WEBPACK_IMPORTED_MODULE_2__["default"], {
    data: data,
    type: type,
    gutter: "16px",
    itemType: "locations",
    columnsCountBreakPoints: {
      350: 1,
      750: 2,
      900: 3,
      1200: 4,
      1600: 6
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Locations);

/***/ }),

/***/ "./components/profile/Settings.js":
/*!****************************************!*\
  !*** ./components/profile/Settings.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _LinkComp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LinkComp */ "./components/profile/LinkComp.js");
/* harmony import */ var _redux_fbConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/fbConfig */ "./redux/fbConfig.js");
var _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\components\\profile\\Settings.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const {
  TabPane
} = antd__WEBPACK_IMPORTED_MODULE_1__["Tabs"];

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";

  if (!isJpgOrPng) {
    antd__WEBPACK_IMPORTED_MODULE_1__["message"].error("You can only upload JPG/PNG file!");
  }

  const isLt2M = file.size / 1024 / 1024 < 2;

  if (!isLt2M) {
    antd__WEBPACK_IMPORTED_MODULE_1__["message"].error("Image must smaller than 2MB!");
  }

  return isJpgOrPng && isLt2M;
}

const Settings = ({
  deleteAccount,
  profile,
  openSettings,
  setOpenSettings,
  changeProfile
}) => {
  const [form] = antd__WEBPACK_IMPORTED_MODULE_1__["Form"].useForm();
  const [info, setInfo] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({
    username: "",
    deviantart: "",
    facebook: "",
    instagram: "",
    twitter: "",
    biography: "",
    errors: {
      instagram: "",
      deviantart: "",
      facebook: "",
      twitter: "",
      username: ""
    }
  });
  const [imageUrl, setImageUrl] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("");
  const [loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);

  const handleChange = imageInfo => {
    if (imageInfo.file.status === "uploading") {
      setLoading(true);
      return;
    }

    if (imageInfo.file.status === "done") {
      setInfo(_objectSpread(_objectSpread({}, info), {}, {
        image: imageInfo.file.originFileObj
      }));
      getBase64(imageInfo.file.originFileObj, imageUrl => {
        setLoading(false);
        setImageUrl(imageUrl);
      });
    }
  };

  const uploadButton = __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 5
    }
  }, loading ? __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["LoadingOutlined"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 18
    }
  }) : __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["PlusOutlined"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 40
    }
  }), __jsx("div", {
    style: {
      marginTop: 8
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }
  }, "Upload"));

  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    if (profile) {
      setImageUrl(profile.image);
      setInfo(_objectSpread(_objectSpread({}, info), {}, {
        biography: profile.biography,
        username: profile.username,
        instagram: profile.instagram,
        facebook: profile.facebook,
        twitter: profile.twitter,
        deviantart: profile.deviantart,
        image: profile.image
      }));
    }
  }, [profile]);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    if (info.username && info.username.length >= 0 && info.username.length < 4) {
      setInfo(_objectSpread(_objectSpread({}, info), {}, {
        errors: _objectSpread(_objectSpread({}, info.errors), {}, {
          username: "Your username needs to be at least 4 characters long"
        })
      }));
    } else if (info.username.length > 15) {
      setInfo(_objectSpread(_objectSpread({}, info), {}, {
        errors: _objectSpread(_objectSpread({}, info.errors), {}, {
          username: "Your username cannot exceed 15 characters"
        })
      }));
    } else {
      setInfo(_objectSpread(_objectSpread({}, info), {}, {
        errors: _objectSpread(_objectSpread({}, info.errors), {}, {
          username: ""
        })
      }));
    }
  }, [info.username]);

  const submit = () => {
    let errors = [];
    const passwordErrors = form.getFieldsError();

    for (let i in passwordErrors) {
      if (passwordErrors[i].errors.length > 0) errors.push([...passwordErrors[i].errors]);
    }

    for (let i in info.errors) {
      if (info.errors[i]) errors.push(info.errors[i]);
    }

    if (errors.length === 0) {
      changeProfile({
        username: info.username,
        twitter: info.twitter,
        instagram: info.instagram,
        deviantart: info.deviantart,
        facebook: info.facebook,
        newPassword: form.getFieldValue("newPassword"),
        actualPassword: form.getFieldValue("actualPassword"),
        image: info.image,
        biography: info.biography
      }, setOpenSettings);
    } else {
      antd__WEBPACK_IMPORTED_MODULE_1__["message"].error("There are some errors in the settings");
    }
  };

  const closeModal = () => {
    setImageUrl(profile.image);
    setInfo(_objectSpread(_objectSpread({}, info), {}, {
      errors: {
        instagram: "",
        deviantart: "",
        facebook: "",
        twitter: "",
        username: ""
      },
      username: profile.username,
      biography: profile.biography,
      instagram: profile.instagram,
      facebook: profile.facebook,
      twitter: profile.twitter,
      deviantart: profile.deviantart,
      image: profile.image
    }));
    setOpenSettings(false);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    width: "50%",
    title: "Settings",
    visible: openSettings,
    onOk: submit,
    okText: "Submit changes",
    onCancel: closeModal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "settings",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Tabs"], {
    tabPosition: "left",
    defaultActiveKey: "1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 11
    }
  }, __jsx(TabPane, {
    tab: __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 17
      }
    }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["UserOutlined"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 19
      }
    }), "Username"),
    key: "1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    maxLength: 15,
    addonBefore: "Username",
    onChange: e => setInfo(_objectSpread(_objectSpread({}, info), {}, {
      username: e.target.value
    })),
    value: info.username,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 15
    }
  }), info.errors.username && __jsx("div", {
    className: "ant-form-item-explain ant-form-item-explain-error",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 17
    }
  }, __jsx("div", {
    role: "alert",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 19
    }
  }, info.errors.username))), __jsx(TabPane, {
    tab: __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232,
        columnNumber: 17
      }
    }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["LockOutlined"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 19
      }
    }), "Password"),
    key: "2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    form: form,
    layout: "vertical",
    initialValues: {
      actualPassword: "",
      newPassword: ""
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "form-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "input-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 19
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    label: "Actual Password",
    name: "actualPassword",
    rules: [{
      required: true,
      message: "Please input your actual password!"
    }],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 21
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].Password, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 23
    }
  })))), __jsx("div", {
    className: "form-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "input-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 19
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    label: "New Password",
    name: "newPassword",
    rules: [{
      required: true,
      message: "Please input your new password!"
    }],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 21
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].Password, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 23
    }
  })))), __jsx("div", {
    className: "form-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "input-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 19
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "confirmPassword",
    label: "Confirm New Password",
    dependencies: ["password"],
    rules: [{
      required: true,
      message: "Please confirm your password!"
    }, ({
      getFieldValue
    }) => ({
      validator(_, value) {
        if (!value || getFieldValue("newPassword") === value) {
          return Promise.resolve();
        }

        return Promise.reject(new Error("The two passwords that you entered do not match!"));
      }

    })],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 21
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].Password, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304,
      columnNumber: 23
    }
  })))))), __jsx(TabPane, {
    tab: __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 312,
        columnNumber: 17
      }
    }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["EditOutlined"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 313,
        columnNumber: 19
      }
    }), "Bio"),
    key: "3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].TextArea, {
    maxLength: 140,
    autoSize: true,
    showCount: true,
    value: info.biography,
    onChange: e => setInfo(_objectSpread(_objectSpread({}, info), {}, {
      biography: e.target.value
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319,
      columnNumber: 15
    }
  })), __jsx(TabPane, {
    tab: __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 331,
        columnNumber: 17
      }
    }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["LinkOutlined"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 332,
        columnNumber: 19
      }
    }), "Links"),
    key: "4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 13
    }
  }, __jsx(_LinkComp__WEBPACK_IMPORTED_MODULE_3__["default"], {
    setInfo: setInfo,
    info: info,
    name: "facebook",
    label: "Facebook",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338,
      columnNumber: 15
    }
  }), __jsx("div", {
    style: {
      margin: "10px 0"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
      columnNumber: 15
    }
  }), __jsx(_LinkComp__WEBPACK_IMPORTED_MODULE_3__["default"], {
    setInfo: setInfo,
    info: info,
    name: "twitter",
    label: "Twitter",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345,
      columnNumber: 15
    }
  }), __jsx("div", {
    style: {
      margin: "10px 0"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351,
      columnNumber: 15
    }
  }), __jsx(_LinkComp__WEBPACK_IMPORTED_MODULE_3__["default"], {
    setInfo: setInfo,
    info: info,
    name: "instagram",
    label: "Instagram",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352,
      columnNumber: 15
    }
  }), __jsx("div", {
    style: {
      margin: "10px 0"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358,
      columnNumber: 15
    }
  }), __jsx(_LinkComp__WEBPACK_IMPORTED_MODULE_3__["default"], {
    setInfo: setInfo,
    info: info,
    name: "deviantart",
    label: "Deviantart",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359,
      columnNumber: 15
    }
  }), __jsx("div", {
    style: {
      margin: "10px 0"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365,
      columnNumber: 15
    }
  })), __jsx(TabPane, {
    tab: __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 369,
        columnNumber: 17
      }
    }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["FileImageOutlined"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 370,
        columnNumber: 19
      }
    }), "Avatar"),
    key: "5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 367,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Upload"], {
    showUploadList: {
      showRemoveIcon: true,
      removeIcon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["StarOutlined"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 379,
          columnNumber: 31
        }
      })
    },
    listType: "picture-card",
    className: "cover-uploader",
    showUploadList: true,
    beforeUpload: beforeUpload,
    onChange: handleChange,
    maxCount: 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 376,
      columnNumber: 15
    }
  }, imageUrl ? __jsx("img", {
    src: imageUrl,
    alt: "image",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 389,
      columnNumber: 19
    }
  }) : uploadButton)), __jsx(TabPane, {
    tab: __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 405,
        columnNumber: 17
      }
    }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["DeleteOutlined"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 406,
        columnNumber: 19
      }
    }), "Delete my account"),
    key: "6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 403,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popconfirm"], {
    title: "Be careful ! This action is not reversible !",
    onConfirm: deleteAccount,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 412,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    danger: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 416,
      columnNumber: 17
    }
  }, "Click here to delete your account")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Settings);

/***/ }),

/***/ "./components/profile/SortInput.js":
/*!*****************************************!*\
  !*** ./components/profile/SortInput.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\components\\profile\\SortInput.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const SortInput = ({
  title,
  itemData,
  setData,
  type,
  options,
  context
}) => {
  const sortArray = value => {
    let newArr = [];

    if (value === "date-asc") {
      newArr = [...itemData].sort((a, b) => {
        return typeof a.createdAt === "object" ? new Date(a.createdAt.seconds * 1000) - new Date(b.createdAt.seconds * 1000) : new Date(a.createdAt) - new Date(b.createdAt);
      });
    } else if (value === "date-desc") {
      newArr = [...itemData].sort((a, b) => {
        return typeof a.createdAt === "object" ? new Date(b.createdAt.seconds * 1000) - new Date(a.createdAt.seconds * 1000) : new Date(b.createdAt) - new Date(a.createdAt);
      });
    } else if (value === "name-desc") {
      if (type === "locations") {
        newArr = [...itemData].sort((a, b) => {
          const keyA = a.name.toLowerCase(),
                keyB = b.name.toLowerCase();
          if (keyA > keyB) return -1;
          if (keyA < keyB) return 1;
          return 0;
        });
      } else if (type === "stories") {
        newArr = [...itemData].sort((a, b) => {
          const keyA = a.title.toLowerCase(),
                keyB = b.title.toLowerCase();
          if (keyA > keyB) return -1;
          if (keyA < keyB) return 1;
          return 0;
        });
      }
    } else if (value === "name-asc") {
      if (type === "locations") {
        newArr = [...itemData].sort((a, b) => {
          const keyA = a.name.toLowerCase(),
                keyB = b.name.toLowerCase();
          if (keyA < keyB) return -1;
          if (keyA > keyB) return 1;
          return 0;
        });
      } else if (type === "stories") {
        newArr = [...itemData].sort((a, b) => {
          const keyA = a.title.toLowerCase(),
                keyB = b.title.toLowerCase();
          if (keyA < keyB) return -1;
          if (keyA > keyB) return 1;
          return 0;
        });
      }
    } else if (value === "firstname-asc") {
      newArr = [...itemData].sort((a, b) => {
        const keyA = a.firstname.toLowerCase(),
              keyB = b.firstname.toLowerCase();
        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        return 0;
      });
    } else if (value === "firstname-desc") {
      newArr = [...itemData].sort((a, b) => {
        const keyA = a.firstname.toLowerCase(),
              keyB = b.firstname.toLowerCase();
        if (keyA > keyB) return -1;
        if (keyA < keyB) return 1;
        return 0;
      });
    } else if (value === "lastname-asc") {
      newArr = [...itemData].sort((a, b) => {
        const keyA = a.lastname.toLowerCase(),
              keyB = b.lastname.toLowerCase();
        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        return 0;
      });
    } else if (value === "lastname-desc") {
      newArr = [...itemData].sort((a, b) => {
        const keyA = a.lastname.toLowerCase(),
              keyB = b.lastname.toLowerCase();
        if (keyA > keyB) return -1;
        if (keyA < keyB) return 1;
        return 0;
      });
    } else if (value === "username-asc") {
      newArr = [...itemData].sort((a, b) => {
        const keyA = a.username.toLowerCase(),
              keyB = b.username.toLowerCase();
        console.log(keyA);
        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        return 0;
      });
    } else if (value === "username-desc") {
      newArr = [...itemData].sort((a, b) => {
        const keyA = a.username.toLowerCase(),
              keyB = b.username.toLowerCase();
        if (keyA > keyB) return -1;
        if (keyA < keyB) return 1;
        return 0;
      });
    } else {
      newArr = itemData;
    }

    setData(newArr);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["PageHeader"], {
    title: `${itemData.length} ${title}`,
    extra: __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"], {
      initialValues: {
        sort: "date-desc"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 11
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
      label: "Sort by",
      name: "sort",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 13
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Select"], {
      onChange: val => sortArray(val),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 15
      }
    }, options.map((option, i) => __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Select"].Option, {
      key: i,
      value: option.value,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 19
      }
    }, option.name))))),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 7
    }
  }, context === "private" && type === "stories" ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/story/new",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: "add-btn-circle",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 13
    }
  }, __jsx("ion-icon", {
    name: "add-circle",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 15
    }
  }), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 15
    }
  }, "Add a new story"))) : context === "private" && type === "locations" ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/location/new",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: "add-btn-circle",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 13
    }
  }, __jsx("ion-icon", {
    name: "add-circle",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 15
    }
  }), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 15
    }
  }, "Add a new location"))) : context === "private" && type === "characters" ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/character/new",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: "add-btn-circle",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 13
    }
  }, __jsx("ion-icon", {
    name: "add-circle",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 15
    }
  }), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 15
    }
  }, "Add a new character"))) : null));
};

/* harmony default export */ __webpack_exports__["default"] = (SortInput);

/***/ }),

/***/ "./components/profile/Stories.js":
/*!***************************************!*\
  !*** ./components/profile/Stories.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_Pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/Pagination */ "./components/common/Pagination.js");
/* harmony import */ var _hoc_LoadingScreen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hoc/LoadingScreen */ "./components/hoc/LoadingScreen.js");
/* harmony import */ var _SortInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SortInput */ "./components/profile/SortInput.js");
var _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\components\\profile\\Stories.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Stories = ({
  stories,
  loading,
  type,
  context
}) => {
  const [data, setData] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState([]);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    setData(stories);
  }, [stories]);
  const options = [{
    name: "Date (ascending)",
    value: "date-asc"
  }, {
    name: "Date (descending)",
    value: "date-desc"
  }, {
    name: "Name (ascending)",
    value: "name-asc"
  }, {
    name: "Name (descending)",
    value: "name-desc"
  }];
  return __jsx("div", {
    className: "profile-stories",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx(_hoc_LoadingScreen__WEBPACK_IMPORTED_MODULE_3__["default"], {
    loading: loading,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx(_SortInput__WEBPACK_IMPORTED_MODULE_4__["default"], {
    type: "stories",
    itemData: stories,
    title: type !== "favorites" ? stories.length > 1 ? "Stories" : "Story" : stories.length > 1 ? "Favorite Stories" : "Favorite Story",
    setData: setData,
    options: options,
    context: context,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }), __jsx(_common_Pagination__WEBPACK_IMPORTED_MODULE_2__["default"], {
    data: data,
    type: type,
    gutter: "16px",
    type: type,
    itemType: "stories",
    columnsCountBreakPoints: {
      350: 1,
      750: 2,
      900: 3,
      1200: 4
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Stories);

/***/ }),

/***/ "./components/profile/Tabs.js":
/*!************************************!*\
  !*** ./components/profile/Tabs.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\components\\profile\\Tabs.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Tabs = ({
  tabs,
  changeTab,
  currentTab
}) => {
  return __jsx("div", {
    className: "profile-tabs",
    "data-aos": "zoom-in",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    gutter: 40,
    align: "middle",
    justify: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, tabs.map(tab => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    key: tab,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: `tab ${currentTab === tab ? "active" : ""}`,
    onClick: () => changeTab(tab),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 15
    }
  }, tab))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Tabs);

/***/ }),

/***/ "./hooks/userHooks.js":
/*!****************************!*\
  !*** ./hooks/userHooks.js ***!
  \****************************/
/*! exports provided: ProvideAuth, useAuth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProvideAuth", function() { return ProvideAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAuth", function() { return useAuth; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_fbConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/fbConfig */ "./redux/fbConfig.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\hooks\\userHooks.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const authContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
function ProvideAuth({
  children
}) {
  const auth = useProvideAuth();
  return __jsx(authContext.Provider, {
    value: auth,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 10
    }
  }, children);
}
const useAuth = () => {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(authContext);
};

function useProvideAuth() {
  const {
    0: user,
    1: setUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: isLoading,
    1: setIsLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const {
    0: errors,
    1: setErrors
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    password: "",
    email: "",
    username: ""
  }); // Wrap any Firebase methods we want to use making sure ...
  // ... to save the user to state.

  const signin = (email, password) => {
    return _redux_fbConfig__WEBPACK_IMPORTED_MODULE_2__["auth"].signInWithEmailAndPassword(email, password).then(response => {
      setErrors({
        password: "",
        email: ""
      });
      setUser(response.user);
      return response.user;
    }).catch(err => {
      if (err.code === "auth/wrong-password") {
        setErrors(_objectSpread(_objectSpread({}, errors), {}, {
          password: err.message
        }));
      } else if (err.code === "auth/user-not-found") {
        setErrors(_objectSpread(_objectSpread({}, errors), {}, {
          email: err.message
        }));
      }
    });
  };

  const signup = (email, password, username) => {
    _redux_fbConfig__WEBPACK_IMPORTED_MODULE_2__["auth"].createUserWithEmailAndPassword(email, password).then(async response => {
      setErrors({
        password: "",
        email: "",
        username: ""
      });
      setUser(_objectSpread(_objectSpread({}, response.user), {}, {
        username: username
      }));
      return await _redux_fbConfig__WEBPACK_IMPORTED_MODULE_2__["db"].collection("users").doc(response.user.uid).set({
        username,
        likesCount: 0,
        twitter: "",
        facebook: "",
        instagram: "",
        deviantart: "",
        biography: "",
        badges: [],
        createdAt: firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a.firestore.FieldValue.serverTimestamp(),
        image: "",
        suspended: false
      });
    }).then(() => {
      return _redux_fbConfig__WEBPACK_IMPORTED_MODULE_2__["auth"].currentUser.sendEmailVerification();
    }).catch(err => {
      if (err.code === "auth/email-already-in-use" || err.code === "auth/invalid-email") {
        setErrors(_objectSpread(_objectSpread({}, errors), {}, {
          email: err.message
        }));
      } else if (err.code === "auth/weak-password") {
        setErrors(_objectSpread(_objectSpread({}, errors), {}, {
          password: err.message
        }));
      }
    });
  };

  const signout = () => {
    return _redux_fbConfig__WEBPACK_IMPORTED_MODULE_2__["auth"].signOut().then(() => {
      setUser(false);
    });
  };

  const sendPasswordResetEmail = email => {
    return _redux_fbConfig__WEBPACK_IMPORTED_MODULE_2__["auth"].sendPasswordResetEmail(email).then(() => {
      return true;
    });
  };

  const confirmPasswordReset = (code, password) => {
    return _redux_fbConfig__WEBPACK_IMPORTED_MODULE_2__["auth"].confirmPasswordReset(code, password).then(() => {
      return true;
    });
  };

  const verifyEmail = () => {
    _redux_fbConfig__WEBPACK_IMPORTED_MODULE_2__["auth"].currentUser.sendEmailVerification().then(() => {
      antd__WEBPACK_IMPORTED_MODULE_3__["message"].info("Verification Email sent. Check your inbox !");
    }).catch(err => {
      antd__WEBPACK_IMPORTED_MODULE_3__["message"].error(err.message);
    });
  };

  const deleteAccount = () => {
    _redux_fbConfig__WEBPACK_IMPORTED_MODULE_2__["auth"].currentUser.delete(); // const batch = db.batch();
    // const userId = auth.currentUser.uid;
    // const allStories = db
    //   .collection("stories")
    //   .where("authorId", "==", userId)
    //   .get();
    // const allCharacters = db
    //   .collection("characters")
    //   .where("authorId", "==", userId)
    //   .get();
    // const allChapters = db
    //   .collection("chapters")
    //   .where("authorId", "==", userId)
    //   .get();
    // const allLocations = db
    //   .collection("locations")
    //   .where("authorId", "==", userId)
    //   .get();
    // const allNotifications = db
    //   .collection("characters")
    //   .where("recipient", "==", userId)
    //   .get();
    // const allUserLikes = db
    //   .collection("usersLikes")
    //   .where("sender", "==", userId)
    //   .get();
    // const allStoryLikes = db
    //   .collection("storiesLikes")
    //   .where("sender", "==", userId)
    //   .get();
    // const allCharactersLikes = db
    //   .collection("charactersLikes")
    //   .where("sender", "==", userId)
    //   .get();
    // const allComments = db
    //   .collection("comments")
    //   .where("userId", "==", userId)
    //   .get();
    // const allFollowers = db
    //   .collection("usersLikes")
    //   .where("recipient", "==", userId)
    //   .get();
    // const allStoryLiked = db
    //   .collection("storiesLikes")
    //   .where("recipient", "==", userId)
    //   .get();
    // const allCharactersLiked = db
    //   .collection("charactersLikes")
    //   .where("recipient", "==", userId)
    //   .get();
    // Promise.all([
    //   allStories,
    //   allCharacters,
    //   allNotifications,
    //   allUserLikes,
    //   allStoryLikes,
    //   allCharactersLikes,
    //   allComments,
    //   allChapters,
    //   allLocations,
    //   allFollowers,
    //   allStoryLiked,
    //   allCharactersLiked,
    // ])
    //   .then((res) => {
    //     res[0].forEach((story) =>
    //       batch.delete(db.collection("stories").doc(story.id))
    //     );
    //     res[1].forEach((chara) =>
    //       batch.delete(db.collection("characters").doc(chara.id))
    //     );
    //     res[2].forEach((notif) =>
    //       batch.delete(db.collection("notifications").doc(notif.id))
    //     );
    //     res[3].forEach((like) =>
    //       batch.delete(db.collection("usersLikes").doc(like.id))
    //     );
    //     res[4].forEach((like) =>
    //       batch.delete(db.collection("storiesLikes").doc(like.id))
    //     );
    //     res[5].forEach((like) =>
    //       batch.delete(db.collection("charactersLikes").doc(like.id))
    //     );
    //     res[6].forEach((comment) =>
    //       batch.update(db.collection("comments").doc(comment.id), {
    //         userDeleted: true,
    //       })
    //     );
    //     res[7].forEach((chap) =>
    //       batch.delete(db.collection("chapters").doc(chap.id))
    //     );
    //     res[7].forEach((loc) =>
    //       batch.delete(db.collection("locations").doc(loc.id))
    //     );
    //     res[7].forEach((like) =>
    //       batch.delete(db.collection("usersLikes").doc(like.id))
    //     );
    //     res[8].forEach((like) =>
    //       batch.delete(db.collection("storiesLikes").doc(like.id))
    //     );
    //     res[9].forEach((like) =>
    //       batch.delete(db.collection("charactersLikes").doc(like.id))
    //     );
    //     batch.delete(db.collection("users").doc(userId));
    //     auth.currentUser
    //       .delete()
    //       .then(() => {
    //         batch.commit();
    //       })
    //       .catch((err) => console.log(err));
    //   })
    //   .catch((err) => console.log(err));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const unsubscribe = _redux_fbConfig__WEBPACK_IMPORTED_MODULE_2__["auth"].onAuthStateChanged(user => {
      if (user) {
        setUser(user);

        if (user.uid) {
          let username = "";
          setIsLoading(false);
          _redux_fbConfig__WEBPACK_IMPORTED_MODULE_2__["db"].collection("users").doc(user.uid).onSnapshot(doc => {
            if (doc.exists) {
              username = doc.data().username;
              setUser(_objectSpread(_objectSpread({}, user), {}, {
                username,
                image: doc.data().image
              }));
            }
          });
        }
      } else {
        setUser(false);
        setIsLoading(false);
      }
    }); // Cleanup subscription on unmount

    return () => unsubscribe();
  }, []); // Return the user object and auth methods

  return {
    deleteAccount,
    isLoading,
    errors,
    user,
    signin,
    signup,
    signout,
    sendPasswordResetEmail,
    confirmPasswordReset,
    verifyEmail
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      if (key === 'as') {
        if (props[key] && typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: typeof props[key]
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && typeof props[key] !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, router && router.locale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/compiled/path-to-regexp/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__(/*! ./utils/escape-path-delimiters */ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    as = addLocale(as, this.locale, this.defaultLocale);
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to


    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed;
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (true) {
      resolvedAs = (0, _resolveRewrites.default)((0, _parseRelativeUrl.parseRelativeUrl)(as).pathname, pages, basePath, rewrites, query, p => this._resolveHref({
        pathname: p
      }, pages).pathname);

      if (resolvedAs !== as) {
        const potentialHref = (0, _normalizeTrailingSlash.removePathTrailingSlash)(this._resolveHref(Object.assign({}, parsed, {
          pathname: resolvedAs
        }), pages, false).pathname); // if this directly matches a page we need to update the href to
        // allow the correct page chunk to be loaded

        if (pages.includes(potentialHref)) {
          route = potentialHref;
          pathname = potentialHref;
          parsed.pathname = pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not

        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

          this._resolveHref(parsedHref, pages);

          if (pages.includes(parsedHref.pathname)) {
            return this.change('replaceState', destination, destination, options);
          }
        }

        window.location.href = destination;
        return new Promise(() => {});
      }

      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, addLocale(as, this.locale, this.defaultLocale), options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component,
        styleSheets
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        styleSheets,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale, this.defaultLocale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (true) {
      return;
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath, this.locale, this.defaultLocale), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/path-match.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.pathToRegexp = exports.default = exports.customRouteMatcherOptions = exports.matcherOptions = void 0;

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

exports.pathToRegexp = pathToRegexp;

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

const matcherOptions = {
  sensitive: false,
  delimiter: '/'
};
exports.matcherOptions = matcherOptions;

const customRouteMatcherOptions = _objectSpread(_objectSpread({}, matcherOptions), {}, {
  strict: true
});

exports.customRouteMatcherOptions = customRouteMatcherOptions;

var _default = (customRoute = false) => {
  return path => {
    const keys = [];
    const matcherRegex = pathToRegexp.pathToRegexp(path, keys, customRoute ? customRouteMatcherOptions : matcherOptions);
    const matcher = pathToRegexp.regexpToFunction(matcherRegex, keys);
    return (pathname, params) => {
      const res = pathname == null ? false : matcher(pathname);

      if (!res) {
        return false;
      }

      if (customRoute) {
        for (const key of keys) {
          // unnamed params should be removed as they
          // are not allowed to be used in the destination
          if (typeof key.name === 'number') {
            delete res.params[key.name];
          }
        }
      }

      return _objectSpread(_objectSpread({}, params), res.params);
    };
  };
};

exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.default = prepareDestination;

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _parseRelativeUrl = __webpack_require__(/*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function prepareDestination(destination, params, query, appendParamsToQuery, basePath) {
  let parsedDestination = {};

  if (destination.startsWith('/')) {
    parsedDestination = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
  } else {
    const {
      pathname,
      searchParams,
      hash,
      hostname,
      port,
      protocol,
      search,
      href
    } = new URL(destination);
    parsedDestination = {
      pathname,
      query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
      hash,
      protocol,
      hostname,
      port,
      search,
      href
    };
  }

  const destQuery = parsedDestination.query;
  const destPath = `${parsedDestination.pathname}${parsedDestination.hash || ''}`;
  const destPathParamKeys = [];
  pathToRegexp.pathToRegexp(destPath, destPathParamKeys);
  const destPathParams = destPathParamKeys.map(key => key.name);
  let destinationCompiler = pathToRegexp.compile(destPath, // we don't validate while compiling the destination since we should
  // have already validated before we got to this point and validating
  // breaks compiling destinations with named pattern params from the source
  // e.g. /something:hello(.*) -> /another/:hello is broken with validation
  // since compile validation is meant for reversing and not for inserting
  // params from a separate path-regex into another
  {
    validate: false
  });
  let newUrl; // update any params in query values

  for (const [key, strOrArray] of Object.entries(destQuery)) {
    let value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;

    if (value) {
      // the value needs to start with a forward-slash to be compiled
      // correctly
      value = `/${value}`;
      const queryCompiler = pathToRegexp.compile(value, {
        validate: false
      });
      value = queryCompiler(params).substr(1);
    }

    destQuery[key] = value;
  } // add path params to query if it's not a redirect and not
  // already defined in destination query or path


  const paramKeys = Object.keys(params);

  if (appendParamsToQuery && !paramKeys.some(key => destPathParams.includes(key))) {
    for (const key of paramKeys) {
      if (!(key in destQuery)) {
        destQuery[key] = params[key];
      }
    }
  }

  const shouldAddBasePath = destination.startsWith('/') && basePath;

  try {
    newUrl = `${shouldAddBasePath ? basePath : ''}${destinationCompiler(params)}`;
    const [pathname, hash] = newUrl.split('#');
    parsedDestination.pathname = pathname;
    parsedDestination.hash = `${hash ? '#' : ''}${hash || ''}`;
    delete parsedDestination.search;
  } catch (err) {
    if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
      throw new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://err.sh/vercel/next.js/invalid-multi-match`);
    }

    throw err;
  } // Query merge order lowest priority to highest
  // 1. initial URL query values
  // 2. path segment values
  // 3. destination specified query values


  parsedDestination.query = _objectSpread(_objectSpread({}, query), parsedDestination.query);
  return {
    newUrl,
    parsedDestination
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

var _pathMatch = _interopRequireDefault(__webpack_require__(/*! ./path-match */ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js"));

var _prepareDestination = _interopRequireDefault(__webpack_require__(/*! ./prepare-destination */ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js"));

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const customRouteMatcher = (0, _pathMatch.default)(true);

function resolveRewrites(asPath, pages, basePath, rewrites, query, resolveHref) {
  if (!pages.includes(asPath)) {
    for (const rewrite of rewrites) {
      const matcher = customRouteMatcher(rewrite.source);
      const params = matcher(asPath);

      if (params) {
        if (!rewrite.destination) {
          // this is a proxied rewrite which isn't handled on the client
          break;
        }

        const destRes = (0, _prepareDestination.default)(rewrite.destination, params, query, true, rewrite.basePath === false ? '' : basePath);
        asPath = destRes.parsedDestination.pathname;
        Object.assign(query, destRes.parsedDestination.query);

        if (pages.includes((0, _normalizeTrailingSlash.removePathTrailingSlash)(asPath))) {
          // check if we now match a page as this means we are done
          // resolving the rewrites
          break;
        } // check if we match a dynamic-route, if so we break the rewrites chain


        const resolvedHref = resolveHref(asPath);

        if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
          break;
        }
      }
    }
  }

  return asPath;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) == null ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/profile/index.js":
/*!********************************!*\
  !*** ./pages/profile/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_profile_Banner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/profile/Banner */ "./components/profile/Banner.js");
/* harmony import */ var _components_profile_Tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/profile/Tabs */ "./components/profile/Tabs.js");
/* harmony import */ var _components_profile_Stories__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/profile/Stories */ "./components/profile/Stories.js");
/* harmony import */ var _components_profile_Characters__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/profile/Characters */ "./components/profile/Characters.js");
/* harmony import */ var _components_profile_Followers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/profile/Followers */ "./components/profile/Followers.js");
/* harmony import */ var _components_profile_Locations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/profile/Locations */ "./components/profile/Locations.js");
/* harmony import */ var _components_profile_Settings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/profile/Settings */ "./components/profile/Settings.js");
/* harmony import */ var _redux_actions_userActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../redux/actions/userActions */ "./redux/actions/userActions.js");
/* harmony import */ var _redux_actions_storiesActions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../redux/actions/storiesActions */ "./redux/actions/storiesActions.js");
/* harmony import */ var _redux_actions_charactersActions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../redux/actions/charactersActions */ "./redux/actions/charactersActions.js");
/* harmony import */ var _hooks_userHooks__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../hooks/userHooks */ "./hooks/userHooks.js");
/* harmony import */ var _components_hoc_LoadingScreen__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/hoc/LoadingScreen */ "./components/hoc/LoadingScreen.js");
/* harmony import */ var _components_hoc_RedirectComp__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/hoc/RedirectComp */ "./components/hoc/RedirectComp.js");
var _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\pages\\profile\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



















const Profile = ({
  getProfile,
  profile,
  stories,
  locations,
  getUserStories,
  getUserCharacters,
  getFavoriteAuthors,
  getFavoriteCharacters,
  getFavoriteStories,
  getUserLocations,
  changeProfile,
  getFollowers,
  characters,
  favAuthors,
  followers,
  favCharacters,
  favStories,
  loading
}) => {
  const {
    0: tabs
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(["stories", "characters", "locations", "favorites stories", "favorites characters", "followers", "followings"]);
  const {
    0: openSettings,
    1: setOpenSettings
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: currentTab,
    1: setCurrentTab
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("stories");
  const {
    0: favTab,
    1: setFavTab
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("favauthors");
  const {
    0: favoriteStories,
    1: setFavoriteStories
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: favoriteCharacters,
    1: setFavoriteCharacters
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(favCharacters);

  const changeTab = tab => setCurrentTab(tab);

  const auth = Object(_hooks_userHooks__WEBPACK_IMPORTED_MODULE_14__["useAuth"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const unsubscribe = () => {
      if (auth.user) {
        getProfile();
        getUserStories(null, "profile");
        getUserCharacters();
        getFavoriteAuthors();
        getFollowers();
        getFavoriteCharacters();
        getFavoriteStories();
        getUserLocations();
      }
    };

    return unsubscribe();
  }, [auth]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setFavoriteStories(favStories.filter(s => s.public || s.authorId === auth.user.uid));
    setFavoriteCharacters(favCharacters.filter(s => s.public || s.authorId === auth.user.uid));
  }, [auth, favStories, favCharacters]);

  const changeFavTab = tab => setFavTab(tab);

  const deleteAccount = () => {
    auth.deleteAccount();
  };

  return __jsx("div", {
    className: "profile",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 5
    }
  }, __jsx(_components_hoc_LoadingScreen__WEBPACK_IMPORTED_MODULE_15__["default"], {
    loading: auth.isLoading,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }
  }, __jsx(_components_hoc_RedirectComp__WEBPACK_IMPORTED_MODULE_16__["default"], {
    condition: auth.user,
    type: "redirect",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 9
    }
  }, auth.user && !auth.user.emailVerified && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Alert"], {
    closable: true,
    message: "You need to verify your email to enjoy all benefits of Kronikea",
    type: "error",
    action: __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      size: "small",
      type: "primary",
      onClick: auth.verifyEmail,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 19
      }
    }, "Click here to send a new email"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 15
    }
  }), __jsx("div", {
    style: {
      marginBottom: "24px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 15
    }
  })), __jsx(_components_profile_Banner__WEBPACK_IMPORTED_MODULE_4__["default"], {
    context: "private",
    profile: profile,
    openSettings: setOpenSettings,
    favAuthors: favAuthors,
    followers: followers,
    changeFavTab: changeFavTab,
    favTab: favTab,
    setCurrentTab: setCurrentTab,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 11
    }
  }), __jsx("section", {
    className: "profile-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 11
    }
  }, __jsx(_components_profile_Tabs__WEBPACK_IMPORTED_MODULE_5__["default"], {
    currentTab: currentTab,
    tabs: tabs,
    changeTab: changeTab,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 13
    }
  }), currentTab === "stories" && __jsx(_components_profile_Stories__WEBPACK_IMPORTED_MODULE_6__["default"], {
    auth: auth,
    loading: loading,
    type: "show",
    stories: stories,
    type: "privateProfile",
    context: "private",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 15
    }
  }), currentTab === "characters" && __jsx(_components_profile_Characters__WEBPACK_IMPORTED_MODULE_7__["default"], {
    context: "private",
    characters: characters,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 15
    }
  }), currentTab === "locations" && __jsx(_components_profile_Locations__WEBPACK_IMPORTED_MODULE_9__["default"], {
    context: "private",
    locations: locations,
    type: "profile",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 15
    }
  }), currentTab === "favorites stories" && __jsx(_components_profile_Stories__WEBPACK_IMPORTED_MODULE_6__["default"], {
    loading: loading,
    type: "favorites",
    stories: favoriteStories,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 15
    }
  }), currentTab === "favorites characters" && __jsx(_components_profile_Characters__WEBPACK_IMPORTED_MODULE_7__["default"], {
    type: "favorites",
    characters: favoriteCharacters,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 15
    }
  }), currentTab === "followers" && __jsx(_components_profile_Followers__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: favAuthors.authors.length > 1 ? "Followers" : "Follower",
    type: "followers",
    lg: 4,
    md: 6,
    sm: 8,
    xs: 12,
    items: followers.authors,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 15
    }
  }), currentTab === "followings" && __jsx(_components_profile_Followers__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: favAuthors.authors.length > 1 ? "Followings" : "Following",
    type: "followings",
    lg: 4,
    md: 6,
    sm: 8,
    xs: 12,
    items: favAuthors.authors,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 15
    }
  })), __jsx(_components_profile_Settings__WEBPACK_IMPORTED_MODULE_10__["default"], {
    deleteAccount: deleteAccount,
    changeProfile: changeProfile,
    profile: profile,
    openSettings: openSettings,
    setOpenSettings: setOpenSettings,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 11
    }
  }))));
};

const mapStateToProps = (state, ownProps) => ({
  profile: state.auth.profile,
  stories: state.stories.userStories,
  characters: state.characters.userCharacters,
  favAuthors: state.auth.favAuthors,
  followers: state.auth.followers,
  favCharacters: state.characters.favCharacters,
  favStories: state.stories.favStories,
  locations: state.stories.userLocations,
  loading: state.stories.loading
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  getProfile: _redux_actions_userActions__WEBPACK_IMPORTED_MODULE_11__["getProfile"],
  getUserStories: _redux_actions_storiesActions__WEBPACK_IMPORTED_MODULE_12__["getUserStories"],
  getUserCharacters: _redux_actions_charactersActions__WEBPACK_IMPORTED_MODULE_13__["getUserCharacters"],
  getFavoriteAuthors: _redux_actions_userActions__WEBPACK_IMPORTED_MODULE_11__["getFavoriteAuthors"],
  getFollowers: _redux_actions_userActions__WEBPACK_IMPORTED_MODULE_11__["getFollowers"],
  getFavoriteCharacters: _redux_actions_charactersActions__WEBPACK_IMPORTED_MODULE_13__["getFavoriteCharacters"],
  getFavoriteStories: _redux_actions_storiesActions__WEBPACK_IMPORTED_MODULE_12__["getFavoriteStories"],
  getUserLocations: _redux_actions_storiesActions__WEBPACK_IMPORTED_MODULE_12__["getUserLocations"],
  changeProfile: _redux_actions_userActions__WEBPACK_IMPORTED_MODULE_11__["changeProfile"]
})(Profile));

/***/ }),

/***/ "./redux/actions/charactersActions.js":
/*!********************************************!*\
  !*** ./redux/actions/charactersActions.js ***!
  \********************************************/
/*! exports provided: getCharacter, addCharacter, editCharacter, deleteCharacter, getUserCharacters, getFavoriteCharacters, isCharacterFavorite, addCharacterToFavorite, removeCharacterFromFavorite, getCharactersInStory, submitCharaterFeedback, getCharacterComments, deleteCharacterComment, rateComment, getCharactersFromSearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCharacter", function() { return getCharacter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCharacter", function() { return addCharacter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editCharacter", function() { return editCharacter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteCharacter", function() { return deleteCharacter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserCharacters", function() { return getUserCharacters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFavoriteCharacters", function() { return getFavoriteCharacters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCharacterFavorite", function() { return isCharacterFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCharacterToFavorite", function() { return addCharacterToFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeCharacterFromFavorite", function() { return removeCharacterFromFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCharactersInStory", function() { return getCharactersInStory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submitCharaterFeedback", function() { return submitCharaterFeedback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCharacterComments", function() { return getCharacterComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteCharacterComment", function() { return deleteCharacterComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rateComment", function() { return rateComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCharactersFromSearch", function() { return getCharactersFromSearch; });
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/constants */ "./utils/constants.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fbConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fbConfig */ "./redux/fbConfig.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const getCharacter = (id, type) => dispatch => {
  let relArr = [];
  let storyArr = [];
  _fbConfig__WEBPACK_IMPORTED_MODULE_2__["db"].collection("characters").doc(id).get().then(doc => {
    if (doc.exists) {
      if (type === "show") {
        const relatives = doc.data().relativesArr;
        let relQueries = [];
        relatives.forEach(rel => {
          relQueries.push(_fbConfig__WEBPACK_IMPORTED_MODULE_2__["db"].collection("characters").doc(rel).get());
        });
        Promise.all(relQueries).then(res => {
          res.forEach(char => relArr.push(_objectSpread(_objectSpread({}, char.data()), {}, {
            id: char.id,
            relation: doc.data().relatives.find(c => c.character_id === char.id).relation
          })));
          const mainQuery = _fbConfig__WEBPACK_IMPORTED_MODULE_2__["db"].collection("stories").where("mainCharacters", "array-contains", id).get();
          const secondaryQuery = _fbConfig__WEBPACK_IMPORTED_MODULE_2__["db"].collection("stories").where("secondaryArr", "array-contains", id).get();
          Promise.all([mainQuery, secondaryQuery]).then(result => {
            const allStory = result[0].docs.concat(result[1].docs);
            allStory.forEach(story => {
              storyArr.push({
                id: story.id,
                title: story.data().title,
                authorId: story.data().authorId,
                banner: story.data().banner
              });
            });
            dispatch({
              type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].GET_CHARACTER,
              payload: {
                character: _objectSpread(_objectSpread({}, doc.data()), {}, {
                  id: doc.id,
                  relatives: relArr.filter(r => (_fbConfig__WEBPACK_IMPORTED_MODULE_2__["auth"].currentUser && _fbConfig__WEBPACK_IMPORTED_MODULE_2__["auth"].currentUser.uid) === r.authorId || r.public),
                  stories: storyArr.filter(r => (_fbConfig__WEBPACK_IMPORTED_MODULE_2__["auth"].currentUser && _fbConfig__WEBPACK_IMPORTED_MODULE_2__["auth"].currentUser.uid) === r.authorId || r.public)
                }),
                charaExists: true,
                loading: false
              }
            });
          });
        });
      } else {
        dispatch({
          type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].GET_CHARACTER,
          payload: {
            character: _objectSpread(_objectSpread({}, doc.data()), {}, {
              id: doc.id
            }),
            charaExists: true,
            loading: false
          }
        });
      }
    } else {
      dispatch({
        type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].GET_CHARACTER,
        payload: {
          charaExists: false,
          loading: false
        }
      });
    }
  });
};
const addCharacter = data => dispatch => {
  dispatch({
    type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].ADD_CHARACTER,
    payload: {
      loading: true
    }
  });
  let charaId = "";
  _fbConfig__WEBPACK_IMPORTED_MODULE_2__["db"].collection("characters").add(_objectSpread(_objectSpread({}, data), {}, {
    image: typeof data.image === "string" ? data.image : "",
    createdAt: firebase_app__WEBPACK_IMPORTED_MODULE_3___default.a.firestore.FieldValue.serverTimestamp(),
    likesCount: 0,
    likes: [],
    dislikes: []
  })).then(res => {
    charaId = res.id;
    const imageName = `${res.id}${"_"}${data.firstname.toLowerCase()}${data.lastname && "_"}${data.lastname && data.lastname.toLowerCase()}`;

    if (typeof data.image === "object") {
      _fbConfig__WEBPACK_IMPORTED_MODULE_2__["storage"].ref(`${_fbConfig__WEBPACK_IMPORTED_MODULE_2__["auth"].currentUser.uid}/${imageName}`).put(data.image).then(() => {
        return _fbConfig__WEBPACK_IMPORTED_MODULE_2__["storage"].ref(_fbConfig__WEBPACK_IMPORTED_MODULE_2__["auth"].currentUser.uid).child(imageName).getDownloadURL();
      }).then(url => {
        return _fbConfig__WEBPACK_IMPORTED_MODULE_2__["db"].collection("characters").doc(charaId).update({
          image: url
        });
      }).then(() => {
        antd__WEBPACK_IMPORTED_MODULE_1__["message"].success("Character added successfully");
        dispatch({
          type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].ADD_CHARACTER,
          payload: {
            message: "Character added successfully",
            characterId: charaId,
            loading: false
          }
        });
      });
    } else {
      antd__WEBPACK_IMPORTED_MODULE_1__["message"].success("Character added successfully");
      dispatch({
        type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].ADD_CHARACTER,
        payload: {
          message: "Character added successfully",
          characterId: charaId,
          loading: false
        }
      });
    }
  }).catch(err => {
    antd__WEBPACK_IMPORTED_MODULE_1__["message"].error(err.message);
  });
};
const editCharacter = (data, id) => dispatch => {
  dispatch({
    type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].EDIT_CHARACTER,
    payload: {
      loadingCharacter: true
    }
  });
  const imageName = `${id}${"_"}${data.firstname.toLowerCase()}${data.lastname && "_"}${data.lastname && data.lastname.toLowerCase()}`;

  if (data.image && typeof data.image === "object") {
    _fbConfig__WEBPACK_IMPORTED_MODULE_2__["storage"].ref(`${_fbConfig__WEBPACK_IMPORTED_MODULE_2__["auth"].currentUser.uid}/${imageName}`).put(data.image).then(() => {
      return _fbConfig__WEBPACK_IMPORTED_MODULE_2__["storage"].ref(_fbConfig__WEBPACK_IMPORTED_MODULE_2__["auth"].currentUser.uid).child(imageName).getDownloadURL();
    }).then(url => {
      return _fbConfig__WEBPACK_IMPORTED_MODULE_2__["db"].collection("characters").doc(id).update(_objectSpread(_objectSpread({}, data), {}, {
        image: url,
        relativesArr: data.relatives.map(c => c.character_id)
      }));
    }).then(() => {
      dispatch({
        type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].EDIT_CHARACTER,
        payload: {
          message: "Character edited successfully",
          loadingCharacter: false
        }
      });
    }).catch(err => {
      antd__WEBPACK_IMPORTED_MODULE_1__["message"].error(err.message);
    });
  } else {
    _fbConfig__WEBPACK_IMPORTED_MODULE_2__["db"].collection("characters").doc(id).update(_objectSpread(_objectSpread({}, data), {}, {
      relativesArr: data.relatives.map(c => c.character_id)
    })).then(() => {
      dispatch({
        type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].EDIT_CHARACTER,
        payload: {
          message: "Character edited successfully",
          loadingCharacter: false
        }
      });
    }).catch(err => {
      antd__WEBPACK_IMPORTED_MODULE_1__["message"].error(err.message);
    });
  }
};
const deleteCharacter = (id, firstname, lastname) => dispatch => {
  dispatch({
    type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].DELETE_CHARACTER,
    payload: {
      loading: true
    }
  });
  const imageName = `${id}${"_"}${firstname.toLowerCase()}${lastname && "_"}${lastname && lastname.toLowerCase()}`; //const batch = db.batch();

  _fbConfig__WEBPACK_IMPORTED_MODULE_2__["db"].collection("characters").doc(id).delete().then(() => {
    if (_fbConfig__WEBPACK_IMPORTED_MODULE_2__["storage"].ref(`${_fbConfig__WEBPACK_IMPORTED_MODULE_2__["auth"].currentUser.uid}/${imageName}`)) {
      return _fbConfig__WEBPACK_IMPORTED_MODULE_2__["storage"].ref(`${_fbConfig__WEBPACK_IMPORTED_MODULE_2__["auth"].currentUser.uid}/${imageName}`).delete().then(() => {
        dispatch({
          type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].DELETE_CHARACTER,
          payload: {
            message: "Character deleted successfully",
            loading: false,
            deleted: true,
            charaExists: false
          }
        });
      });
    }
  }); // .then(() => {
  //   db.collection("chapters")
  //     .where("characters", "array-contains", id)
  //     .get()
  //     .then((docs) => {
  //       docs.forEach((doc) => {
  //         batch.update(db.collection("chapters").doc(doc.id), {
  //           characters: doc.data().characters.filter((c) => c !== id),
  //         });
  //       });
  //     })
  //     .then(() => {
  //       db.collection("stories")
  //         .where("secondaryArr", "array-contains", id)
  //         .get()
  //         .then((stories) => {
  //           stories.forEach((story) => {
  //             batch.update(db.collection("stories").doc(story.id), {
  //               mainCharacters: story
  //                 .data()
  //                 .mainCharacters.filter((c) => c !== id),
  //               secondaryArr: story
  //                 .data()
  //                 .secondaryArr.filter((c) => c !== id),
  //               secondaryCharacters: story
  //                 .data()
  //                 .secondaryCharacters.filter((c) => c.id !== id),
  //             });
  //           });
  //         })
  //         .then(() => {
  //           db.collection("characters")
  //             .where("relativesArr", "array-contains", id)
  //             .get()
  //             .then((characters) => {
  //               characters.forEach((char) => {
  //                 batch.update(db.collection("characters").doc(char.id), {
  //                   relativesArr: char
  //                     .data()
  //                     .relativesArr.filter((c) => c !== id),
  //                   relatives: char
  //                     .data()
  //                     .relatives.filter((c) => c.character_id !== id),
  //                 });
  //               });
  //             })
  //             .then(() => {
  //               db.collection("charactersLikes")
  //                 .where("characterId", "==", id)
  //                 .get()
  //                 .then((likes) => {
  //                   likes.forEach((like) => {
  //                     batch.delete(
  //                       db.collection("charactersLikes").doc(like.id)
  //                     );
  //                   });
  //                   batch.commit().then(() => {
  //                   });
  //                 });
  //             });
  //         });
  //     });
  // });
};
const getUserCharacters = id => dispatch => {
  const userId = id ? id : _fbConfig__WEBPACK_IMPORTED_MODULE_2__["auth"].currentUser.uid;
  _fbConfig__WEBPACK_IMPORTED_MODULE_2__["db"].collection("characters").where("authorId", "==", userId).get().then(docs => {
    let items = [];
    docs.forEach(doc => {
      items = [...items, _objectSpread({
        id: doc.id
      }, doc.data())].filter(c => id ? c.public : c);
    });
    return items;
  }).then(items => {
    dispatch({
      type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].GET_USER_CHARACTERS,
      payload: items
    });
  });
};
const getFavoriteCharacters = id => dispatch => {
  const userId = id ? id : _fbConfig__WEBPACK_IMPORTED_MODULE_2__["auth"].currentUser.uid;
  _fbConfig__WEBPACK_IMPORTED_MODULE_2__["db"].collection("charactersLikes").where("senderId", "==", userId).get().then(docs => {
    let favArr = [];
    docs.forEach(doc => {
      favArr = [...favArr, doc.data().characterId];
    });
    return favArr;
  }).then(users => {
    const result = users.map(user => _fbConfig__WEBPACK_IMPORTED_MODULE_2__["db"].collection("characters").doc(user).get());
    Promise.all(result).then(res => {
      let favUsers = [];
      res.forEach(doc => favUsers = [...favUsers, _objectSpread({
        id: doc.id
      }, doc.data())]);
      dispatch({
        type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].GET_FAVORITE_CHARACTERS,
        payload: favUsers
      });
    });
  });
};
const isCharacterFavorite = charId => dispatch => {
  if (_fbConfig__WEBPACK_IMPORTED_MODULE_2__["auth"].currentUser) {
    _fbConfig__WEBPACK_IMPORTED_MODULE_2__["db"].collection("charactersLikes").where("senderId", "==", _fbConfig__WEBPACK_IMPORTED_MODULE_2__["auth"].currentUser.uid).where("characterId", "==", charId).onSnapshot(snapshot => {
      const answer = snapshot.docs[0] ? true : false;
      return dispatch({
        type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].IS_CHARACTER_FAVORITE,
        payload: answer,
        loadingFav: false
      });
    });
  }
};
const addCharacterToFavorite = (id, username, characterName, authorId) => dispatch => {
  // if (isFavorite) return message.warning("You've already liked this story");
  if (!_fbConfig__WEBPACK_IMPORTED_MODULE_2__["auth"].currentUser) return antd__WEBPACK_IMPORTED_MODULE_1__["message"].error("You need to be logged in to like a character");
  if (!_fbConfig__WEBPACK_IMPORTED_MODULE_2__["auth"].currentUser.emailVerified) return antd__WEBPACK_IMPORTED_MODULE_1__["message"].error("You need to verify your email first");
  _fbConfig__WEBPACK_IMPORTED_MODULE_2__["db"].collection("charactersLikes").add({
    sender: username,
    senderId: _fbConfig__WEBPACK_IMPORTED_MODULE_2__["auth"].currentUser.uid,
    characterId: id,
    createdAt: firebase_app__WEBPACK_IMPORTED_MODULE_3___default.a.firestore.FieldValue.serverTimestamp()
  }).then(() => {
    if (authorId !== _fbConfig__WEBPACK_IMPORTED_MODULE_2__["auth"].currentUser.uid) {
      return _fbConfig__WEBPACK_IMPORTED_MODULE_2__["db"].collection("notifications").doc(`${_fbConfig__WEBPACK_IMPORTED_MODULE_2__["auth"].currentUser.uid}${id}`).set({
        type: "characterLike",
        read: false,
        recipient: authorId,
        sender: _fbConfig__WEBPACK_IMPORTED_MODULE_2__["auth"].currentUser.uid,
        characterId: id,
        createdAt: firebase_app__WEBPACK_IMPORTED_MODULE_3___default.a.firestore.FieldValue.serverTimestamp(),
        message: `${username} liked your character ${characterName}`
      });
    }
  }).then(() => antd__WEBPACK_IMPORTED_MODULE_1__["message"].success(`${characterName} added to your favorites`)).catch(err => antd__WEBPACK_IMPORTED_MODULE_1__["message"].error("There has been a problem"));
};
const removeCharacterFromFavorite = (id, characterName) => dispatch => {
  _fbConfig__WEBPACK_IMPORTED_MODULE_2__["db"].collection("charactersLikes").where("characterId", "==", id).where("senderId", "==", _fbConfig__WEBPACK_IMPORTED_MODULE_2__["auth"].currentUser.uid).get().then(data => {
    return _fbConfig__WEBPACK_IMPORTED_MODULE_2__["db"].collection("charactersLikes").doc(data.docs[0].id).delete();
  }).then(() => antd__WEBPACK_IMPORTED_MODULE_1__["message"].success(`${characterName} removed from your favorites`)).catch(err => antd__WEBPACK_IMPORTED_MODULE_1__["message"].error("There has been a problem"));
};
const getCharactersInStory = id => dispatch => {
  _fbConfig__WEBPACK_IMPORTED_MODULE_2__["db"].collection("stories").doc(id).onSnapshot(doc => {
    dispatch({
      type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].GET_STORY_CHARACTERS,
      payload: {
        secondaryCharacters: doc.data().secondaryCharacters,
        mainArr: doc.data().mainCharacters
      }
    });
  });
};
const submitCharaterFeedback = (info, userComment) => dispatch => {
  const {
    characterName
  } = info,
        allInfo = _objectWithoutProperties(info, ["characterName"]);

  if (!_fbConfig__WEBPACK_IMPORTED_MODULE_2__["auth"].currentUser.emailVerified) return antd__WEBPACK_IMPORTED_MODULE_1__["message"].error("You need to verify your email first");
  if (!info.content) return antd__WEBPACK_IMPORTED_MODULE_1__["message"].error("Content must not be empty");
  if (userComment) return antd__WEBPACK_IMPORTED_MODULE_1__["message"].error("You have already sent feedback");
  _fbConfig__WEBPACK_IMPORTED_MODULE_2__["db"].collection("comments").add(_objectSpread(_objectSpread({}, allInfo), {}, {
    createdAt: firebase_app__WEBPACK_IMPORTED_MODULE_3___default.a.firestore.FieldValue.serverTimestamp()
  })).then(() => {
    if (_fbConfig__WEBPACK_IMPORTED_MODULE_2__["auth"].currentUser.uid !== info.authorId) {
      return _fbConfig__WEBPACK_IMPORTED_MODULE_2__["db"].collection("notifications").doc(`${_fbConfig__WEBPACK_IMPORTED_MODULE_2__["auth"].currentUser.uid}${info.characterId}`).set({
        type: "characterComment",
        read: false,
        recipient: info.authorId,
        sender: _fbConfig__WEBPACK_IMPORTED_MODULE_2__["auth"].currentUser.uid,
        characterId: info.characterId,
        createdAt: firebase_app__WEBPACK_IMPORTED_MODULE_3___default.a.firestore.FieldValue.serverTimestamp(),
        message: `${info.username} left a feedback on your character ${characterName}`
      });
    }
  }).then(() => {
    dispatch({
      type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].SUBMIT_COMMENT,
      message: "Comment posted successfully"
    });
  }).catch(err => antd__WEBPACK_IMPORTED_MODULE_1__["message"].error(err.message));
};
const getCharacterComments = id => dispatch => {
  let comments = [];
  _fbConfig__WEBPACK_IMPORTED_MODULE_2__["db"].collection("comments").where("characterId", "==", id).orderBy("createdAt", "asc").get().then(comm => {
    let userQueries = [];
    comm.forEach(c => comments.push(_objectSpread(_objectSpread({}, c.data()), {}, {
      id: c.id
    })));
    comments.forEach(comment => {
      userQueries.push(_fbConfig__WEBPACK_IMPORTED_MODULE_2__["db"].collection("users").doc(comment.userId).get());
    });
    Promise.all(userQueries).then(res => {
      comments = comments.map(c => _objectSpread(_objectSpread({}, c), {}, {
        userImage: res.find(d => d.id === c.userId).data().image
      }));
      const userComment = _fbConfig__WEBPACK_IMPORTED_MODULE_2__["auth"].currentUser ? comments.find(c => c.userId === _fbConfig__WEBPACK_IMPORTED_MODULE_2__["auth"].currentUser.uid) : null;
      comments = _fbConfig__WEBPACK_IMPORTED_MODULE_2__["auth"].currentUser ? comments.filter(c => c.userId !== _fbConfig__WEBPACK_IMPORTED_MODULE_2__["auth"].currentUser.uid) : comments;
      dispatch({
        type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].GET_COMMENTS,
        payload: {
          comments,
          userComment,
          loadingComments: false
        }
      });
    });
  });
};
const deleteCharacterComment = id => dispatch => {
  _fbConfig__WEBPACK_IMPORTED_MODULE_2__["db"].collection("comments").doc(id).delete().then(() => {
    dispatch({
      type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].SUBMIT_COMMENT,
      message: "Comment deleted successfully"
    });
  });
};
const rateComment = (commentId, type) => dispatch => {
  dispatch({
    type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].RATE_COMMENT,
    rated: true
  });
  if (!_fbConfig__WEBPACK_IMPORTED_MODULE_2__["auth"].currentUser) return antd__WEBPACK_IMPORTED_MODULE_1__["message"].error("You need to be logged in to rate a comment");
  _fbConfig__WEBPACK_IMPORTED_MODULE_2__["db"].collection("comments").doc(commentId).get().then(doc => {
    const isLiked = doc.data().likedBy.includes(_fbConfig__WEBPACK_IMPORTED_MODULE_2__["auth"].currentUser.uid);
    const isDisliked = doc.data().dislikedBy.includes(_fbConfig__WEBPACK_IMPORTED_MODULE_2__["auth"].currentUser.uid);

    if (type === "like" && isLiked || type === "dislike" && isDisliked) {
      return;
    }

    if (type === "like") {
      _fbConfig__WEBPACK_IMPORTED_MODULE_2__["db"].collection("comments").doc(commentId).update({
        dislikedBy: isDisliked ? doc.data().dislikedBy.filter(d => d !== _fbConfig__WEBPACK_IMPORTED_MODULE_2__["auth"].currentUser.uid) : doc.data().dislikedBy,
        likedBy: [...doc.data().likedBy, _fbConfig__WEBPACK_IMPORTED_MODULE_2__["auth"].currentUser.uid]
      }).then(() => {
        dispatch({
          type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].SUBMIT_COMMENT,
          message: "Voilou"
        });
      });
    } else if (type === "dislike") {
      _fbConfig__WEBPACK_IMPORTED_MODULE_2__["db"].collection("comments").doc(commentId).update({
        likedBy: isLiked ? doc.data().likedBy.filter(d => d !== _fbConfig__WEBPACK_IMPORTED_MODULE_2__["auth"].currentUser.uid) : doc.data().likedBy,
        dislikedBy: [...doc.data().dislikedBy, _fbConfig__WEBPACK_IMPORTED_MODULE_2__["auth"].currentUser.uid]
      }).then(() => {
        dispatch({
          type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].RATE_COMMENT,
          rated: false
        });
      });
    }
  });
};
const getCharactersFromSearch = search => dispatch => {
  let result = [];
  dispatch({
    type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].GET_CHARACTERS_FROM_SEARCH,
    loading: true
  });
  _fbConfig__WEBPACK_IMPORTED_MODULE_2__["db"].collection("characters").where("public", "==", true).get().then(docs => {
    docs.forEach(doc => {
      const firstname = doc.data().firstname.toLowerCase();
      const lastname = doc.data().lastname.toLowerCase();
      const authorName = doc.data().authorName.toLowerCase().split(" ");
      const searchTerm = search.split("-");
      const firstnameIncluded = searchTerm.some(word => firstname.indexOf(word) !== -1);
      const lastnameIncluded = searchTerm.some(word => lastname.indexOf(word) !== -1);
      const authorIncluded = searchTerm.every(word => authorName.includes(word));
      const orAuthorIncluded = searchTerm.some(word => doc.data().authorName.toLowerCase().indexOf(word) !== -1);

      if (firstnameIncluded || lastnameIncluded || authorIncluded || orAuthorIncluded) {
        result.push(_objectSpread(_objectSpread({}, doc.data()), {}, {
          id: doc.id
        }));
      }

      return result;
    });
  }).then(() => {
    dispatch({
      type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].GET_CHARACTERS_FROM_SEARCH,
      payload: result,
      loading: false
    });
  }).catch(err => antd__WEBPACK_IMPORTED_MODULE_1__["message"].error(err.message));
};

/***/ }),

/***/ "./redux/actions/storiesActions.js":
/*!*****************************************!*\
  !*** ./redux/actions/storiesActions.js ***!
  \*****************************************/
/*! exports provided: getStory, addStory, editStory, deleteStory, getUserStories, getFavoriteStories, isStoryFavorite, addStoryToFavorite, removeStoryFromFavorite, getStoryCharacters, getHomeStories, addChapter, editChapter, deleteChapter, getChapter, getChapters, addLocation, editLocation, getLocation, deleteLocation, getUserLocations, getStoryLocations, getComments, submitComment, deleteComment, getStoriesFromSearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStory", function() { return getStory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addStory", function() { return addStory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editStory", function() { return editStory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteStory", function() { return deleteStory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserStories", function() { return getUserStories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFavoriteStories", function() { return getFavoriteStories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isStoryFavorite", function() { return isStoryFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addStoryToFavorite", function() { return addStoryToFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeStoryFromFavorite", function() { return removeStoryFromFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStoryCharacters", function() { return getStoryCharacters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHomeStories", function() { return getHomeStories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addChapter", function() { return addChapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editChapter", function() { return editChapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteChapter", function() { return deleteChapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChapter", function() { return getChapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChapters", function() { return getChapters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addLocation", function() { return addLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editLocation", function() { return editLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocation", function() { return getLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteLocation", function() { return deleteLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserLocations", function() { return getUserLocations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStoryLocations", function() { return getStoryLocations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getComments", function() { return getComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submitComment", function() { return submitComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteComment", function() { return deleteComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStoriesFromSearch", function() { return getStoriesFromSearch; });
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/constants */ "./utils/constants.js");
/* harmony import */ var _fbConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fbConfig */ "./redux/fbConfig.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // STORIES

const getStory = id => dispatch => {
  _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("stories").doc(id).get().then(doc => {
    if (doc.exists) {
      const main = doc.data().mainCharacters;
      const secondary = doc.data().secondaryCharacters;
      let mainArr = [];
      let secondaryArr = [];
      const mainQuery = main.map(c => _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("characters").doc(c).get());
      const secondaryQuery = secondary.map(c => _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("characters").doc(c.id).get());
      const mainRes = Promise.all(mainQuery);
      const secondaryRes = Promise.all(secondaryQuery);
      Promise.all([mainRes, secondaryRes]).then(result => {
        result[0].forEach(docu => {
          mainArr = [...mainArr, _objectSpread(_objectSpread({}, docu.data()), {}, {
            id: docu.id
          })];
        });
        result[1].forEach(docu => {
          secondaryArr = [...secondaryArr, _objectSpread(_objectSpread({}, docu.data()), {}, {
            id: docu.id
          })];
        });
        dispatch({
          type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].GET_STORY,
          storyExists: true,
          payload: _objectSpread(_objectSpread({}, doc.data()), {}, {
            id: doc.id,
            secondaryCharacters: secondaryArr,
            mainCharacters: mainArr,
            mainArr: doc.data().mainCharacters
          })
        });
      });
    } else {
      dispatch({
        type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].DISPATCH_ERROR,
        storyExists: false
      });
    }
  }).catch(err => console.log(err));
};
const addStory = data => dispatch => {
  dispatch({
    type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].ADD_STORY,
    payload: {
      loading: true
    }
  });
  let storyId = "";
  _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("stories").add(_objectSpread(_objectSpread({}, data), {}, {
    authorId: _fbConfig__WEBPACK_IMPORTED_MODULE_1__["auth"].currentUser.uid,
    authorName: data.authorName,
    oneShot: false,
    banner: typeof data.banner === "string" ? data.banner : "",
    createdAt: firebase_app__WEBPACK_IMPORTED_MODULE_2___default.a.firestore.FieldValue.serverTimestamp(),
    likesCount: 0,
    chaptersCount: 0,
    secondaryCharacters: [],
    secondaryArr: [],
    featured: false,
    note: 0,
    chaptersCount: 0,
    commentsCount: 0,
    lastUpdated: firebase_app__WEBPACK_IMPORTED_MODULE_2___default.a.firestore.FieldValue.serverTimestamp()
  })).then(res => {
    storyId = res.id;

    if (typeof data.banner === "object") {
      const imageName = `${res.id}_${data.title.toLowerCase().split(" ").join("_")}`;
      _fbConfig__WEBPACK_IMPORTED_MODULE_1__["storage"].ref(`${_fbConfig__WEBPACK_IMPORTED_MODULE_1__["auth"].currentUser.uid}/${imageName}`).put(data.banner).then(() => {
        return _fbConfig__WEBPACK_IMPORTED_MODULE_1__["storage"].ref(_fbConfig__WEBPACK_IMPORTED_MODULE_1__["auth"].currentUser.uid).child(imageName).getDownloadURL();
      }).then(url => {
        return _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("stories").doc(storyId).update({
          banner: url
        });
      }).then(() => {
        dispatch({
          type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].ADD_STORY,
          payload: {
            message: "Story added successfully",
            storyId: storyId,
            loading: false
          }
        });
      });
    } else {
      dispatch({
        type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].ADD_STORY,
        payload: {
          message: "Story added successfully",
          storyId: storyId,
          loading: false
        }
      });
    }
  }).catch(err => {
    antd__WEBPACK_IMPORTED_MODULE_3__["message"].error(err.message);
  });
};
const editStory = (data, storyId) => dispatch => {
  dispatch({
    type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].EDIT_STORY,
    payload: {
      loadingStory: true
    }
  });
  const imageName = data.title.toLowerCase().split(" ").join("_");

  if (typeof data.banner === "object") {
    _fbConfig__WEBPACK_IMPORTED_MODULE_1__["storage"].ref(`${_fbConfig__WEBPACK_IMPORTED_MODULE_1__["auth"].currentUser.uid}/${imageName}`).put(data.banner).then(() => {
      return _fbConfig__WEBPACK_IMPORTED_MODULE_1__["storage"].ref(_fbConfig__WEBPACK_IMPORTED_MODULE_1__["auth"].currentUser.uid).child(imageName).getDownloadURL();
    }).then(url => {
      return _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("stories").doc(storyId).update(_objectSpread(_objectSpread({}, data), {}, {
        banner: url,
        lastUpdated: firebase_app__WEBPACK_IMPORTED_MODULE_2___default.a.firestore.FieldValue.serverTimestamp()
      }));
    }).then(() => {
      _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("locations").where("storyId", "==", storyId).get().then(docs => {
        let locationQuery = [];
        docs.forEach(doc => {
          locationQuery = [...locationQuery, _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("locations").doc(doc.id).update({
            storyTitle: data.title
          })];
        });
        Promise.all(locationQuery).then(() => {
          dispatch({
            type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].EDIT_STORY,
            payload: {
              message: "Story edited successfully"
            }
          });
        });
      });
    }).catch(err => {
      antd__WEBPACK_IMPORTED_MODULE_3__["message"].error(err.message);
    });
  } else {
    _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("stories").doc(storyId).update(_objectSpread(_objectSpread({}, data), {}, {
      lastUpdated: firebase_app__WEBPACK_IMPORTED_MODULE_2___default.a.firestore.FieldValue.serverTimestamp()
    })).then(() => {
      _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("locations").where("storyId", "==", storyId).get().then(docs => {
        let locationQuery = [];
        docs.forEach(doc => {
          locationQuery = [...locationQuery, _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("locations").doc(doc.id).update({
            storyTitle: data.title
          })];
        });
        Promise.all(locationQuery).then(() => {
          dispatch({
            type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].EDIT_STORY,
            payload: {
              message: "Story edited successfully"
            }
          });
        });
      });
    }).catch(err => {
      antd__WEBPACK_IMPORTED_MODULE_3__["message"].error(err.message);
    });
  }
};
const deleteStory = id => dispatch => {
  dispatch({
    type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].DELETE_STORY,
    payload: {
      loading: true
    }
  });
  _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("stories").doc(id).delete().then(() => {
    dispatch({
      type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].DELETE_STORY,
      payload: {
        message: "Story deleted successfully",
        loading: true,
        deleted: true
      }
    });
  });
};
const getUserStories = (id, type) => dispatch => {
  const userId = id ? id : _fbConfig__WEBPACK_IMPORTED_MODULE_1__["auth"].currentUser.uid;
  _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("stories").where("authorId", "==", userId).orderBy("createdAt", "desc").get().then(docs => {
    let items = [];
    docs.forEach(doc => {
      items = [...items, _objectSpread({
        id: doc.id
      }, doc.data())].filter(s => id ? s.public : s);
    });
    return items;
  }).then(items => {
    dispatch({
      type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].GET_USER_STORIES,
      payload: items
    });
  });
};
const getFavoriteStories = id => dispatch => {
  const userId = id ? id : _fbConfig__WEBPACK_IMPORTED_MODULE_1__["auth"].currentUser.uid;
  _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("storiesLikes").where("senderId", "==", userId).orderBy("createdAt", "desc").get().then(docs => {
    let favArr = [];
    docs.forEach(doc => {
      favArr = [...favArr, doc.data().storyId];
    });
    return favArr;
  }).then(users => {
    const result = users.map(user => _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("stories").doc(user).get());
    Promise.all(result).then(res => {
      let favUsers = [];
      res.forEach(doc => favUsers = [...favUsers, _objectSpread({
        id: doc.id
      }, doc.data())]);
      dispatch({
        type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].GET_FAVORITE_STORIES,
        payload: favUsers
      });
    });
  });
};
const isStoryFavorite = storyId => dispatch => {
  if (_fbConfig__WEBPACK_IMPORTED_MODULE_1__["auth"].currentUser) {
    _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("storiesLikes").where("senderId", "==", _fbConfig__WEBPACK_IMPORTED_MODULE_1__["auth"].currentUser.uid).where("storyId", "==", storyId).onSnapshot(snapshot => {
      const answer = snapshot.docs[0] ? true : false;
      return dispatch({
        type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].IS_STORY_FAVORITE,
        payload: answer,
        loadingFav: false
      });
    });
  } else {
    return dispatch({
      type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].IS_STORY_FAVORITE,
      payload: false,
      loadingFav: false
    });
  }
};
const addStoryToFavorite = (id, username, storyTitle, authorId) => dispatch => {
  // if (isFavorite) return message.warning("You've already liked this story");
  if (!_fbConfig__WEBPACK_IMPORTED_MODULE_1__["auth"].currentUser) return antd__WEBPACK_IMPORTED_MODULE_3__["message"].error("You need to be logged in to like a story");
  if (!_fbConfig__WEBPACK_IMPORTED_MODULE_1__["auth"].currentUser.emailVerified) return antd__WEBPACK_IMPORTED_MODULE_3__["message"].error("You need to verify your email first");
  _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("storiesLikes").add({
    sender: username,
    senderId: _fbConfig__WEBPACK_IMPORTED_MODULE_1__["auth"].currentUser.uid,
    storyId: id,
    createdAt: firebase_app__WEBPACK_IMPORTED_MODULE_2___default.a.firestore.FieldValue.serverTimestamp()
  }).then(() => {
    if (authorId !== _fbConfig__WEBPACK_IMPORTED_MODULE_1__["auth"].currentUser.uid) {
      return _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("notifications").doc(`${_fbConfig__WEBPACK_IMPORTED_MODULE_1__["auth"].currentUser.uid}${id}`).set({
        type: "storyLike",
        read: false,
        recipient: authorId,
        sender: _fbConfig__WEBPACK_IMPORTED_MODULE_1__["auth"].currentUser.uid,
        storyId: id,
        createdAt: firebase_app__WEBPACK_IMPORTED_MODULE_2___default.a.firestore.FieldValue.serverTimestamp(),
        message: `${username} liked your story ${storyTitle}`
      });
    }
  }).then(() => antd__WEBPACK_IMPORTED_MODULE_3__["message"].success(`${storyTitle} added to your favorites`)).catch(err => antd__WEBPACK_IMPORTED_MODULE_3__["message"].error(err.message));
};
const removeStoryFromFavorite = (id, storyTitle) => dispatch => {
  _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("storiesLikes").where("storyId", "==", id).where("senderId", "==", _fbConfig__WEBPACK_IMPORTED_MODULE_1__["auth"].currentUser.uid).get().then(data => {
    return _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("storiesLikes").doc(data.docs[0].id).delete();
  }).then(() => antd__WEBPACK_IMPORTED_MODULE_3__["message"].success(`${storyTitle} removed from your favorites`)).catch(err => antd__WEBPACK_IMPORTED_MODULE_3__["message"].error("There has been a problem"));
};
const getStoryCharacters = () => dispatch => {};
const getHomeStories = () => dispatch => {
  let result = [];
  _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("stories").where("public", "==", true).limit(4).get().then(docs => {
    docs.forEach(doc => result.push(_objectSpread({
      id: doc.id
    }, doc.data())));
    dispatch({
      type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].GET_HOME_STORIES,
      payload: result,
      loading: false
    });
  });
}; // CHAPTERs

const addChapter = data => dispatch => {
  dispatch({
    type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].ADD_CHAPTER,
    payload: {
      loading: true
    }
  });
  _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("chapters").where("storyId", "==", data.storyId).get().then(docs => {
    let numberUsed = [];
    docs.forEach(chapter => {
      numberUsed.push(chapter.data().number);
    });

    if (numberUsed.includes(data.number)) {
      dispatch({
        type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].ADD_CHAPTER,
        payload: {
          loading: false
        }
      });
      antd__WEBPACK_IMPORTED_MODULE_3__["message"].error(`You already have a chapter numbered: ${data.number}`);
    } else {
      return _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("chapters").add(_objectSpread(_objectSpread({}, data), {}, {
        authorId: _fbConfig__WEBPACK_IMPORTED_MODULE_1__["auth"].currentUser.uid,
        commentsCount: 0,
        note: 0,
        voters: [],
        votesCount: 0,
        createdAt: firebase_app__WEBPACK_IMPORTED_MODULE_2___default.a.firestore.FieldValue.serverTimestamp()
      })).then(res => {
        dispatch({
          type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].ADD_CHAPTER,
          payload: {
            message: "Chapter added successfully",
            chapId: res.id,
            loading: false
          }
        });
      });
    }
  });
};
const editChapter = (data, chapid) => dispatch => {
  dispatch({
    type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].EDIT_CHAPTER,
    payload: {
      loading: true
    }
  });
  _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("chapters").doc(chapid).update(_objectSpread({}, data)).then(() => {
    dispatch({
      type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].EDIT_CHAPTER,
      payload: {
        message: "Chapter edited successfully",
        loading: false
      }
    });
  });
};
const deleteChapter = (id, storyId) => dispatch => {
  dispatch({
    type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].DELETE_CHAPTER,
    payload: {
      loadingChapter: true
    }
  });
  _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("chapters").doc(id).delete().then(() => {
    dispatch({
      type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].DELETE_CHAPTER,
      payload: {
        message: "Chapter deleted successfully",
        loadingChapter: false
      }
    });
  }).catch(err => console.log(err));
};
const getChapter = (storyId, id, type) => dispatch => {
  _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("stories").doc(storyId).get().then(doc => {
    if (doc.exists) {
      _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("chapters").doc(id).get().then(chap => {
        if (chap.exists) {
          if (type === "show") {
            let characters = [];
            let locations = [];
            let charaQuery = [];
            let locQuery = [];
            const charactersInChaper = chap.data().characters;
            const locationsInChaper = chap.data().locations;
            const chapNumber = chap.data().number;
            const prevChap = _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("chapters").where("storyId", "==", storyId).where("number", "==", chapNumber - 1).get();
            const nextChap = _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("chapters").where("storyId", "==", storyId).where("number", "==", chapNumber + 1).get();
            charactersInChaper.forEach(char => {
              charaQuery.push(_fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("characters").doc(char).get());
            });
            locationsInChaper.forEach(loc => {
              locQuery.push(_fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("locations").doc(loc).get());
            });
            charaQuery = Promise.all(charaQuery);
            locQuery = Promise.all(locQuery);
            Promise.all([charaQuery, locQuery, prevChap, nextChap]).then(res => {
              let prev = res[2].docs[0] ? res[2].docs[0].id : null;
              let next = res[3].docs[0] ? res[3].docs[0].id : null;
              res[0].forEach(c => {
                characters.push(_objectSpread(_objectSpread({}, c.data()), {}, {
                  id: c.id
                }));
              });
              res[1].forEach(l => {
                locations.push(_objectSpread(_objectSpread({}, l.data()), {}, {
                  id: l.id
                }));
              });
              dispatch({
                type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].GET_CHAPTER,
                payload: {
                  chapter: _objectSpread(_objectSpread({}, chap.data()), {}, {
                    id: chap.id,
                    prev,
                    next,
                    locations,
                    characters,
                    public: doc.data().public,
                    storyTitle: doc.data().title
                  }),
                  chapterExists: true
                }
              });
            });
          } else {
            dispatch({
              type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].GET_CHAPTER,
              payload: {
                chapter: _objectSpread(_objectSpread({}, chap.data()), {}, {
                  id: chap.id,
                  public: doc.data().public
                }),
                chapterExists: true
              }
            });
          }
        } else {
          dispatch({
            type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].GET_CHAPTER,
            payload: {
              chapterExists: false
            }
          });
        }
      });
    } else {
      dispatch({
        type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].GET_CHAPTER,
        payload: {
          chapterExists: false
        }
      });
    }
  });
};
const getChapters = id => dispatch => {
  _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("chapters").where("storyId", "==", id).orderBy("number", "asc").onSnapshot(docs => {
    let arr = [];
    docs.forEach(doc => {
      arr.push({
        authorId: doc.data().authorId,
        id: doc.id,
        createdAt: doc.data().createdAt,
        number: doc.data().number,
        title: doc.data().title,
        commentsCount: doc.data().commentsCount,
        status: doc.data().status
      });
    });
    dispatch({
      type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].GET_CHAPTERS,
      payload: arr
    });
  });
}; // LOCATIONS

const addLocation = data => dispatch => {
  dispatch({
    type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].ADD_LOCATION,
    payload: {
      loadingLoc: true
    }
  });
  let locId = "";
  _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("locations").add(_objectSpread(_objectSpread({}, data), {}, {
    image: typeof data.image === "string" ? data.image : "",
    createdAt: firebase_app__WEBPACK_IMPORTED_MODULE_2___default.a.firestore.FieldValue.serverTimestamp()
  })).then(res => {
    locId = res.id;

    if (typeof data.image === "object") {
      const imageName = `${locId}_${data.name.toLowerCase().split(" ").join("_")}`;
      _fbConfig__WEBPACK_IMPORTED_MODULE_1__["storage"].ref(`${_fbConfig__WEBPACK_IMPORTED_MODULE_1__["auth"].currentUser.uid}/${imageName}`).put(data.image).then(() => {
        return _fbConfig__WEBPACK_IMPORTED_MODULE_1__["storage"].ref(_fbConfig__WEBPACK_IMPORTED_MODULE_1__["auth"].currentUser.uid).child(imageName).getDownloadURL();
      }).then(url => {
        return _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("locations").doc(locId).update({
          image: url
        });
      }).then(() => {
        dispatch({
          type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].ADD_LOCATION,
          payload: {
            message: "Location added successfully",
            locId: res.id,
            loadingLoc: false
          }
        });
      });
    } else {
      dispatch({
        type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].ADD_LOCATION,
        payload: {
          message: "Location added successfully",
          locId: res.id,
          loadingLoc: false
        }
      });
    }
  }).catch(err => {
    antd__WEBPACK_IMPORTED_MODULE_3__["message"].error(err.message);
  });
};
const editLocation = data => dispatch => {};
const getLocation = id => dispatch => {
  _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("locations").doc(id).get().then(doc => {
    if (doc.exists) {
      dispatch({
        type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].GET_LOCATION,
        payload: _objectSpread(_objectSpread({}, doc.data()), {}, {
          id: doc.id
        }),
        locationExists: true
      });
    } else {
      dispatch({
        type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].GET_LOCATION,
        locationExists: false
      });
    }
  });
};
const deleteLocation = (id, name) => dispatch => {
  dispatch({
    type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].DELETE_CHAPTER,
    payload: {
      loading: true
    }
  });
  const batch = _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].batch();
  const imageName = `${id}_${name.toLowerCase().split(" ").join("_")}`;
  batch.delete(_fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("locations").doc(id));
  _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("chapters").where("locations", "array-contains", id).get().then(res => {
    res.forEach(chap => batch.update(_fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("chapters").doc(chap.id), {
      locations: chap.data().locations.filter(c => c !== id)
    }));
    _fbConfig__WEBPACK_IMPORTED_MODULE_1__["storage"].ref(`${_fbConfig__WEBPACK_IMPORTED_MODULE_1__["auth"].currentUser.uid}/${imageName}`).delete().then(() => {
      batch.commit().then(() => {
        dispatch({
          type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].DELETE_CHAPTER,
          payload: {
            loading: false,
            message: "Location deleted successfully",
            deleted: true
          }
        });
      });
    }).catch(err => {
      console.log(err);
      batch.commit().then(() => {
        dispatch({
          type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].DELETE_CHAPTER,
          payload: {
            loading: false,
            message: "Location deleted successfully",
            deleted: true
          }
        });
      });
    });
  }).catch(err => console.log(err));
};
const getUserLocations = id => dispatch => {
  const userId = id ? id : _fbConfig__WEBPACK_IMPORTED_MODULE_1__["auth"].currentUser.uid;
  _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("locations").where("authorId", "==", userId).get().then(docs => {
    let locations = [];
    docs.forEach(doc => {
      locations = [...locations, _objectSpread({
        id: doc.id
      }, doc.data())];
    });
    dispatch({
      type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].GET_USER_LOCATIONS,
      payload: locations
    });
  });
};
const getStoryLocations = storyId => dispatch => {
  _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("locations").where("storyId", "==", storyId).get().then(docs => {
    const locations = docs.docs.map(doc => _objectSpread(_objectSpread({}, doc.data()), {}, {
      id: doc.id
    }));
    dispatch({
      type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].GET_STORY_LOCATIONS,
      payload: locations
    });
  });
}; // COMMENTS

const getComments = id => dispatch => {
  _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("comments").where("chapterId", "==", id).orderBy("createdAt", "desc").onSnapshot(snap => {
    let comments = snap.docs.map(comment => _objectSpread(_objectSpread({}, comment.data()), {}, {
      id: comment.id
    }));
    let queries = [];
    comments.forEach(comm => {
      queries.push(_fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("users").doc(comm.userId).get());
    });
    Promise.all(queries).then(res => {
      comments = comments.map(comm => _objectSpread({}, comm));
      dispatch({
        type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].GET_COMMENTS,
        payload: {
          loadingComments: false,
          comments
        }
      });
    });
  });
};
const submitComment = info => dispatch => {
  if (!_fbConfig__WEBPACK_IMPORTED_MODULE_1__["auth"].currentUser.emailVerified) return antd__WEBPACK_IMPORTED_MODULE_3__["message"].error("You need to verify your email first");
  if (!info.content) return antd__WEBPACK_IMPORTED_MODULE_3__["message"].error("Content must not be empty");
  const batch = _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].batch();
  const story = _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("stories").doc(info.storyId).get();
  const chapter = _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("chapters").doc(info.chapterId).get();
  Promise.all([story, chapter]).then(res => {
    batch.update(_fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("stories").doc(info.storyId), {
      commentsCount: res[0].data().commentsCount + 1
    });
    batch.update(_fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("chapters").doc(info.chapterId), {
      commentsCount: res[1].data().commentsCount + 1
    });
    batch.commit().then(() => {
      _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("comments").add(_objectSpread(_objectSpread({}, info), {}, {
        createdAt: firebase_app__WEBPACK_IMPORTED_MODULE_2___default.a.firestore.FieldValue.serverTimestamp()
      })).then(() => {
        if (_fbConfig__WEBPACK_IMPORTED_MODULE_1__["auth"].currentUser.uid !== info.authorId) {
          return _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("notifications").add({
            type: "comment",
            read: false,
            recipient: info.authorId,
            sender: _fbConfig__WEBPACK_IMPORTED_MODULE_1__["auth"].currentUser.uid,
            chapterId: info.chapterId,
            storyId: info.storyId,
            userDeleted: false,
            suspended: false,
            createdAt: firebase_app__WEBPACK_IMPORTED_MODULE_2___default.a.firestore.FieldValue.serverTimestamp(),
            message: `${info.username} posted a commented on your story ${info.title}`
          });
        }
      }).then(() => antd__WEBPACK_IMPORTED_MODULE_3__["message"].success("Comment posted successfully"));
    });
  }).catch(err => antd__WEBPACK_IMPORTED_MODULE_3__["message"].error(err.message));
};
const deleteComment = (id, chapid, storyId) => dispatch => {
  const batch = _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].batch();
  const story = _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("stories").doc(storyId).get();
  const chapter = _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("chapters").doc(chapid).get();
  Promise.all([story, chapter]).then(res => {
    batch.update(_fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("stories").doc(storyId), {
      commentsCount: res[0].data().commentsCount - 1
    });
    batch.update(_fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("chapters").doc(chapid), {
      commentsCount: res[1].data().commentsCount - 1
    });
    batch.commit().then(() => {
      _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("comments").doc(id).delete();
    });
  });
}; // ARCHIVES

const getStoriesFromSearch = search => dispatch => {
  let result = [];
  _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("stories").where("public", "==", true).get().then(data => {
    data.forEach(doc => {
      const title = doc.data().title.toLowerCase().split(" ");
      const authorName = doc.data().authorName.toLowerCase().split(" ");
      const searchTerm = search.split("-");
      const isIncluded = searchTerm.every(word => title.includes(word));
      const orIncluded = searchTerm.some(word => doc.data().title.toLowerCase().indexOf(word) !== -1);
      const authorIncluded = searchTerm.every(word => authorName.includes(word));
      const orAuthorIncluded = searchTerm.some(word => doc.data().authorName.toLowerCase().indexOf(word) !== -1);

      if (isIncluded || orIncluded || authorIncluded || orAuthorIncluded) {
        result.push(_objectSpread(_objectSpread({}, doc.data()), {}, {
          id: doc.id
        }));
      }
    });
    return result;
  }).then(() => {
    dispatch({
      type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].GET_STORIES_FROM_SEARCH,
      payload: result,
      loading: false
    });
  });
};

/***/ }),

/***/ "./redux/actions/userActions.js":
/*!**************************************!*\
  !*** ./redux/actions/userActions.js ***!
  \**************************************/
/*! exports provided: log_in, getProfile, getFavoriteAuthors, getFollowers, getIsFollowing, followUser, unfollowUser, changeProfile, getUsersFromSearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log_in", function() { return log_in; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProfile", function() { return getProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFavoriteAuthors", function() { return getFavoriteAuthors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFollowers", function() { return getFollowers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsFollowing", function() { return getIsFollowing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "followUser", function() { return followUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unfollowUser", function() { return unfollowUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeProfile", function() { return changeProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUsersFromSearch", function() { return getUsersFromSearch; });
/* harmony import */ var _fbConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fbConfig */ "./redux/fbConfig.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/constants */ "./utils/constants.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const log_in = (email, password) => dispatch => {
  console.log(email, password);
  _fbConfig__WEBPACK_IMPORTED_MODULE_0__["auth"].signInWithEmailAndPassword(email, password);
};
const getProfile = id => dispatch => {
  _fbConfig__WEBPACK_IMPORTED_MODULE_0__["db"].collection("users").doc(id ? id : _fbConfig__WEBPACK_IMPORTED_MODULE_0__["auth"].currentUser.uid).onSnapshot(doc => {
    return dispatch({
      type: _utils_constants__WEBPACK_IMPORTED_MODULE_1__["types"].GET_PROFILE,
      payload: _objectSpread({
        id: doc.id
      }, doc.data())
    });
  });
};
const getFavoriteAuthors = id => dispatch => {
  let addedOn;
  const userId = id ? id : _fbConfig__WEBPACK_IMPORTED_MODULE_0__["auth"].currentUser.uid;
  _fbConfig__WEBPACK_IMPORTED_MODULE_0__["db"].collection("usersLikes").where("senderId", "==", userId).get().then(docs => {
    let favArr = [];
    docs.forEach(doc => {
      addedOn = doc.data().createdAt;
      favArr = [...favArr, doc.data().recipient];
    });
    return favArr;
  }).then(users => {
    const result = users.map(user => _fbConfig__WEBPACK_IMPORTED_MODULE_0__["db"].collection("users").doc(user).get());
    Promise.all(result).then(res => {
      let favUsers = [];
      res.forEach(doc => favUsers = [...favUsers, _objectSpread({
        addedOn,
        id: doc.id
      }, doc.data())]);
      dispatch({
        type: _utils_constants__WEBPACK_IMPORTED_MODULE_1__["types"].GET_FAVORITE_AUTHORS,
        payload: favUsers
      });
    });
  });
};
const getFollowers = id => dispatch => {
  let addedOn;
  const userId = id ? id : _fbConfig__WEBPACK_IMPORTED_MODULE_0__["auth"].currentUser.uid;
  _fbConfig__WEBPACK_IMPORTED_MODULE_0__["db"].collection("usersLikes").where("recipient", "==", userId).get().then(docs => {
    let favArr = [];
    docs.forEach(doc => {
      addedOn = doc.data().createdAt;
      favArr = [...favArr, doc.data().senderId];
    });
    return favArr;
  }).then(users => {
    const result = users.map(user => _fbConfig__WEBPACK_IMPORTED_MODULE_0__["db"].collection("users").doc(user).get());
    Promise.all(result).then(res => {
      let favUsers = [];
      res.forEach(doc => favUsers = [...favUsers, _objectSpread({
        addedOn,
        id: doc.id
      }, doc.data())]);
      dispatch({
        type: _utils_constants__WEBPACK_IMPORTED_MODULE_1__["types"].GET_FOLLOWERS,
        payload: favUsers
      });
    });
  });
};
const getIsFollowing = userId => dispatch => {
  if (_fbConfig__WEBPACK_IMPORTED_MODULE_0__["auth"].currentUser) {
    _fbConfig__WEBPACK_IMPORTED_MODULE_0__["db"].collection("usersLikes").where("recipient", "==", userId).where("senderId", "==", _fbConfig__WEBPACK_IMPORTED_MODULE_0__["auth"].currentUser.uid).onSnapshot(snapshot => {
      const answer = snapshot.docs.length > 0 ? true : false;
      return dispatch({
        type: _utils_constants__WEBPACK_IMPORTED_MODULE_1__["types"].IS_FOLLOWING,
        payload: answer
      });
    });
  }
};
const followUser = (id, isFavorite, newFollower) => dispatch => {
  if (isFavorite) return antd__WEBPACK_IMPORTED_MODULE_3__["message"].warning("You are already following this user");
  if (!_fbConfig__WEBPACK_IMPORTED_MODULE_0__["auth"].currentUser) return antd__WEBPACK_IMPORTED_MODULE_3__["message"].error("You need to be logged in to follow users");
  if (!_fbConfig__WEBPACK_IMPORTED_MODULE_0__["auth"].currentUser.emailVerified) return antd__WEBPACK_IMPORTED_MODULE_3__["message"].error("You need to verify your email first");
  _fbConfig__WEBPACK_IMPORTED_MODULE_0__["db"].collection("usersLikes").add({
    sender: newFollower.username,
    senderId: newFollower.uid,
    recipient: id,
    createdAt: firebase_app__WEBPACK_IMPORTED_MODULE_2___default.a.firestore.FieldValue.serverTimestamp()
  }).then(() => {
    return _fbConfig__WEBPACK_IMPORTED_MODULE_0__["db"].collection("notifications").doc(`${_fbConfig__WEBPACK_IMPORTED_MODULE_0__["auth"].currentUser.uid}${id}`).set({
      createdAt: firebase_app__WEBPACK_IMPORTED_MODULE_2___default.a.firestore.FieldValue.serverTimestamp(),
      recipient: id,
      sender: newFollower.uid,
      read: false,
      type: "follow",
      message: `${newFollower.username} started following you`
    });
  }).then(() => antd__WEBPACK_IMPORTED_MODULE_3__["message"].success("You are now following this user")).catch(err => antd__WEBPACK_IMPORTED_MODULE_3__["message"].error("There has been a problem"));
};
const unfollowUser = (id, isFavorite) => dispatch => {
  if (!isFavorite) return antd__WEBPACK_IMPORTED_MODULE_3__["message"].warning("You are not following this user yet");
  _fbConfig__WEBPACK_IMPORTED_MODULE_0__["db"].collection("usersLikes").where("recipient", "==", id).where("senderId", "==", _fbConfig__WEBPACK_IMPORTED_MODULE_0__["auth"].currentUser.uid).get().then(data => {
    return _fbConfig__WEBPACK_IMPORTED_MODULE_0__["db"].collection("usersLikes").doc(data.docs[0].id).delete();
  }).then(() => antd__WEBPACK_IMPORTED_MODULE_3__["message"].success("User successfully unfollowed")).catch(err => antd__WEBPACK_IMPORTED_MODULE_3__["message"].error("There has been a problem"));
};
const changeProfile = (data, setOpen) => dispatch => {
  const {
    newPassword,
    actualPassword
  } = data,
        newInfo = _objectWithoutProperties(data, ["newPassword", "actualPassword"]);

  const imageName = `${_fbConfig__WEBPACK_IMPORTED_MODULE_0__["auth"].currentUser.uid}_${newInfo.username}`;

  if (newPassword) {
    _fbConfig__WEBPACK_IMPORTED_MODULE_0__["auth"].currentUser.reauthenticateWithCredential(firebase_app__WEBPACK_IMPORTED_MODULE_2___default.a.auth.EmailAuthProvider.credential(_fbConfig__WEBPACK_IMPORTED_MODULE_0__["auth"].currentUser.email, actualPassword)).then(() => {
      return _fbConfig__WEBPACK_IMPORTED_MODULE_0__["auth"].currentUser.updatePassword(newPassword);
    }).then(async () => {
      if (typeof newInfo.image === "object") {
        _fbConfig__WEBPACK_IMPORTED_MODULE_0__["storage"].ref(`${_fbConfig__WEBPACK_IMPORTED_MODULE_0__["auth"].currentUser.uid}/${imageName}`).put(newInfo.image).then(() => {
          return _fbConfig__WEBPACK_IMPORTED_MODULE_0__["storage"].ref(`${_fbConfig__WEBPACK_IMPORTED_MODULE_0__["auth"].currentUser.uid}/${imageName}`).getDownloadURL();
        }).then(async url => {
          return _fbConfig__WEBPACK_IMPORTED_MODULE_0__["db"].collection("users").doc(_fbConfig__WEBPACK_IMPORTED_MODULE_0__["auth"].currentUser.uid).update(_objectSpread(_objectSpread({}, newInfo), {}, {
            image: url
          })).then(() => {
            setOpen(false);
            antd__WEBPACK_IMPORTED_MODULE_3__["message"].success("Profile updated successfully");
          });
        });
      } else {
        return _fbConfig__WEBPACK_IMPORTED_MODULE_0__["db"].collection("users").doc(_fbConfig__WEBPACK_IMPORTED_MODULE_0__["auth"].currentUser.uid).update(_objectSpread({}, newInfo)).then(() => {
          setOpen(false);
          antd__WEBPACK_IMPORTED_MODULE_3__["message"].success("Profile updated successfully");
        });
      }
    }).catch(err => antd__WEBPACK_IMPORTED_MODULE_3__["message"].error(err.message));
  } else {
    if (typeof newInfo.image === "object") {
      _fbConfig__WEBPACK_IMPORTED_MODULE_0__["storage"].ref(`${_fbConfig__WEBPACK_IMPORTED_MODULE_0__["auth"].currentUser.uid}/${imageName}`).put(newInfo.image).then(() => {
        return _fbConfig__WEBPACK_IMPORTED_MODULE_0__["storage"].ref(`${_fbConfig__WEBPACK_IMPORTED_MODULE_0__["auth"].currentUser.uid}/${imageName}`).getDownloadURL();
      }).then(async url => {
        return _fbConfig__WEBPACK_IMPORTED_MODULE_0__["db"].collection("users").doc(_fbConfig__WEBPACK_IMPORTED_MODULE_0__["auth"].currentUser.uid).update(_objectSpread(_objectSpread({}, newInfo), {}, {
          image: url
        })).then(() => {
          setOpen(false);
          antd__WEBPACK_IMPORTED_MODULE_3__["message"].success("Profile updated successfully");
        });
      });
    } else {
      _fbConfig__WEBPACK_IMPORTED_MODULE_0__["db"].collection("users").doc(_fbConfig__WEBPACK_IMPORTED_MODULE_0__["auth"].currentUser.uid).update(_objectSpread({}, newInfo)).then(() => {
        setOpen(false);
        antd__WEBPACK_IMPORTED_MODULE_3__["message"].success("Profile updated successfully");
      });
    }
  }
};
const getUsersFromSearch = search => dispatch => {
  let result = [];
  _fbConfig__WEBPACK_IMPORTED_MODULE_0__["db"].collection("users").get().then(data => {
    data.forEach(doc => {
      const username = doc.data().username.toLowerCase().split(" ");
      const searchTerm = search.split("-");
      const isIncluded = searchTerm.every(word => username.includes(word));
      const orIncluded = searchTerm.some(word => doc.data().username.toLowerCase().indexOf(word) !== -1);

      if (isIncluded || orIncluded) {
        result.push(_objectSpread(_objectSpread({}, doc.data()), {}, {
          id: doc.id
        }));
      }
    });
    return dispatch({
      type: _utils_constants__WEBPACK_IMPORTED_MODULE_1__["types"].GET_USERS_FROM_SEARCH,
      payload: result,
      loading: false
    });
  });
};

/***/ }),

/***/ "./redux/fbConfig.js":
/*!***************************!*\
  !*** ./redux/fbConfig.js ***!
  \***************************/
/*! exports provided: db, auth, storage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "db", function() { return db; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return auth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storage", function() { return storage; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ "firebase/auth");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ "firebase/firestore");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/storage */ "firebase/storage");
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_storage__WEBPACK_IMPORTED_MODULE_3__);




const prodConfig = {
  apiKey: "AIzaSyBI9ITjYUCZ6YedemNiY9EXmKMLEx6yCys",
  authDomain: "story-center.firebaseapp.com",
  databaseURL: "https://story-center.firebaseio.com",
  projectId: "story-center",
  storageBucket: "story-center.appspot.com",
  messagingSenderId: "1095246518275",
  appId: "1:1095246518275:web:de42acc0aab573506e5636"
};
const devConfig = {
  apiKey: "AIzaSyBI9ITjYUCZ6YedemNiY9EXmKMLEx6yCys",
  authDomain: "story-center.firebaseapp.com",
  databaseURL: "https://story-center.firebaseio.com",
  projectId: "story-center",
  storageBucket: "story-center.appspot.com",
  messagingSenderId: "1095246518275",
  appId: "1:1095246518275:web:de42acc0aab573506e5636"
};
const config = false ? undefined : devConfig;

if (!firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length) {
  firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(config);
}

const db = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.firestore();
const auth = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.auth();
const storage = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.storage();

/* harmony default export */ __webpack_exports__["default"] = (config);

/***/ }),

/***/ "./utils/constants.js":
/*!****************************!*\
  !*** ./utils/constants.js ***!
  \****************************/
/*! exports provided: CATEGORIES, COPYRIGHTS, LANGUAGES, STATUS, types, GET_PROFILE, LOGIN, REGISTER, GET_STORY, GET_USER_STORIES, GET_FAVORITE_STORIES, ADD_STORY, EDIT_STORY, DELETE_STORY, IS_STORY_FAVORITE, GET_CHAPTER, ADD_CHAPTER, EDIT_CHAPTER, DELETE_CHAPTER, GET_CHAPTERS, ADD_CHARACTER, GET_CHARACTER, EDIT_CHARACTER, GET_USER_CHARACTERS, GET_USER_LOCATIONS, GET_FAVORITE_CHARACTERS, GET_STORY_CHARACTERS, ADD_LOCATION, GET_FAVORITE_AUTHORS, GET_FOLLOWERS, DISPATCH_ERROR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CATEGORIES", function() { return CATEGORIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COPYRIGHTS", function() { return COPYRIGHTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANGUAGES", function() { return LANGUAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATUS", function() { return STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "types", function() { return types; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PROFILE", function() { return GET_PROFILE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN", function() { return LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER", function() { return REGISTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_STORY", function() { return GET_STORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_USER_STORIES", function() { return GET_USER_STORIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_FAVORITE_STORIES", function() { return GET_FAVORITE_STORIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_STORY", function() { return ADD_STORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_STORY", function() { return EDIT_STORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_STORY", function() { return DELETE_STORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_STORY_FAVORITE", function() { return IS_STORY_FAVORITE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_CHAPTER", function() { return GET_CHAPTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_CHAPTER", function() { return ADD_CHAPTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_CHAPTER", function() { return EDIT_CHAPTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_CHAPTER", function() { return DELETE_CHAPTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_CHAPTERS", function() { return GET_CHAPTERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_CHARACTER", function() { return ADD_CHARACTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_CHARACTER", function() { return GET_CHARACTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_CHARACTER", function() { return EDIT_CHARACTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_USER_CHARACTERS", function() { return GET_USER_CHARACTERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_USER_LOCATIONS", function() { return GET_USER_LOCATIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_FAVORITE_CHARACTERS", function() { return GET_FAVORITE_CHARACTERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_STORY_CHARACTERS", function() { return GET_STORY_CHARACTERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_LOCATION", function() { return ADD_LOCATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_FAVORITE_AUTHORS", function() { return GET_FAVORITE_AUTHORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_FOLLOWERS", function() { return GET_FOLLOWERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DISPATCH_ERROR", function() { return DISPATCH_ERROR; });
const CATEGORIES = [{
  name: "Drama",
  value: "drama"
}, {
  name: "Comedy",
  value: "comedy"
}, {
  name: "Horror",
  value: "horror"
}, {
  name: "Romance",
  value: "romance"
}, {
  name: "Sci-fi",
  value: "sci-fi"
}, {
  name: "Fantasy",
  value: "fantasy"
}, {
  name: "Humor",
  value: "humor"
}, {
  name: "Action",
  value: "action"
}, {
  name: "Thriller",
  value: "thriller"
}, {
  name: "Supernatural",
  value: "supernatural"
}, {
  name: "Adventure",
  value: "adventure"
}, {
  name: "Mystery",
  value: "mystery"
}, {
  name: "Western",
  value: "western"
}, {
  name: "History",
  value: "history"
}, {
  name: "Crime",
  value: "crime"
}, {
  name: "Fanfiction",
  value: "fanfiction"
}];
const COPYRIGHTS = [{
  name: "Public Domain",
  value: "public domain"
}, {
  name: "All Rights Reserved",
  value: "all rights reserved"
}, {
  name: "Creative Commons",
  value: "creative commons"
}];
const LANGUAGES = [{
  name: "Afar",
  value: "aa"
}, {
  name: "Abkhazian",
  value: "ab"
}, {
  name: "Avestan",
  value: "ae"
}, {
  name: "Afrikaans",
  value: "af"
}, {
  name: "Akan",
  value: "ak"
}, {
  name: "Amharic",
  value: "am"
}, {
  name: "Aragonese",
  value: "an"
}, {
  name: "Arabic",
  value: "ar"
}, {
  name: "Assamese",
  value: "as"
}, {
  name: "Avaric",
  value: "av"
}, {
  name: "Aymara",
  value: "ay"
}, {
  name: "Azerbaijani",
  value: "az"
}, {
  name: "Bashkir",
  value: "ba"
}, {
  name: "Belarusian",
  value: "be"
}, {
  name: "Bulgarian",
  value: "bg"
}, {
  name: "Bihari",
  value: "bh"
}, {
  name: "Bislama",
  value: "bi"
}, {
  name: "Bambara",
  value: "bm"
}, {
  name: "Bengali",
  value: "bn"
}, {
  name: "Tibetan",
  value: "bo"
}, {
  name: "Breton",
  value: "br"
}, {
  name: "Bosnian",
  value: "bs"
}, {
  name: "Catalan",
  value: "ca"
}, {
  name: "Chechen",
  value: "ce"
}, {
  name: "Chamorro",
  value: "ch"
}, {
  name: "Corsican",
  value: "co"
}, {
  name: "Cree",
  value: "cr"
}, {
  name: "Czech",
  value: "cs"
}, {
  name: "Old Church Slavonic",
  value: "cu"
}, {
  name: "Chuvash",
  value: "cv"
}, {
  name: "Welsh",
  value: "cy"
}, {
  name: "Danish",
  value: "da"
}, {
  name: "German",
  value: "de"
}, {
  name: "Divehi",
  value: "dv"
}, {
  name: "Dzongkha	",
  value: "dz"
}, {
  name: "Ewe",
  value: "ee"
}, {
  name: "Greek",
  value: "el"
}, {
  name: "English",
  value: "en"
}, {
  name: "Esperanto",
  value: "eo"
}, {
  name: "Spanish",
  value: "es"
}, {
  name: "Estonian",
  value: "et"
}, {
  name: "Basque",
  value: "eu"
}, {
  name: "Persian",
  value: "fa"
}, {
  name: "Fulah",
  value: "ff"
}, {
  name: "Finnish",
  value: "fi"
}, {
  name: "Fijian",
  value: "fj"
}, {
  name: "Faroese",
  value: "fo"
}, {
  name: "French",
  value: "fr"
}, {
  name: "Western Frisian",
  value: "fy"
}, {
  name: "Irish",
  value: "ga"
}, {
  name: "Scottish Gaelic",
  value: "gd"
}, {
  name: "Galician",
  value: "gl"
}, {
  name: "Guarani",
  value: "gn"
}, {
  name: "Gujarati",
  value: "gu"
}, {
  name: "Manx",
  value: "gv"
}, {
  name: "Hausa",
  value: "ha"
}, {
  name: "Hebrew",
  value: "he"
}, {
  name: "Hindi",
  value: "hi"
}, {
  name: "Hiri Motu",
  value: "ho"
}, {
  name: "Croatian",
  value: "hr"
}, {
  name: "Haitian",
  value: "ht"
}, {
  name: "Hungarian",
  value: "hu"
}, {
  name: "Armenian",
  value: "hy"
}, {
  name: "Herero",
  value: "hz"
}, {
  name: "Interlingua",
  value: "ia"
}, {
  name: "Indonesian",
  value: "id"
}, {
  name: "Interlingue",
  value: "ie"
}, {
  name: "Igbo",
  value: "ig"
}, {
  name: "Sichuan Yi",
  value: "ii"
}, {
  name: "Inupiaq",
  value: "ik"
}, {
  name: "Ido",
  value: "io"
}, {
  name: "Icelandic",
  value: "is"
}, {
  name: "Italian",
  value: "it"
}, {
  name: "Inuktitut",
  value: "iu"
}, {
  name: "Japanese",
  value: "ja"
}, {
  name: "Javanese",
  value: "jv"
}, {
  name: "Georgian",
  value: "ka"
}, {
  name: "Kongo",
  value: "kg"
}, {
  name: "Kikuyu",
  value: "ki"
}, {
  name: "Kwanyama",
  value: "kj"
}, {
  name: "Kazakh",
  value: "kk"
}, {
  name: "Greenlandic",
  value: "kl"
}, {
  name: "Khmer",
  value: "km"
}, {
  name: "Kannada",
  value: "kn"
}, {
  name: "Korean",
  value: "ko"
}, {
  name: "Kanuri",
  value: "kr"
}, {
  name: "Kashmiri",
  value: "ks"
}, {
  name: "Kurdish",
  value: "ku"
}, {
  name: "Komi",
  value: "kv"
}, {
  name: "Cornish",
  value: "kw"
}, {
  name: "Kirghiz",
  value: "ky"
}, {
  name: "Latin",
  value: "la"
}, {
  name: "Luxembourgish",
  value: "lb"
}, {
  name: "Ganda",
  value: "lg"
}, {
  name: "Limburgish",
  value: "li"
}, {
  name: "Lingala",
  value: "ln"
}, {
  name: "Lao",
  value: "lo"
}, {
  name: "Lithuanian",
  value: "lt"
}, {
  name: "Luba",
  value: "lu"
}, {
  name: "Latvian",
  value: "lv"
}, {
  name: "Malagasy",
  value: "mg"
}, {
  name: "Marshallese",
  value: "mh"
}, {
  name: "Māori",
  value: "mi"
}, {
  name: "Macedonian",
  value: "mk"
}, {
  name: "Malayalam",
  value: "ml"
}, {
  name: "Mongolian",
  value: "mn"
}, {
  name: "Moldavian",
  value: "mo"
}, {
  name: "Marathi",
  value: "mr"
}, {
  name: "Malay",
  value: "ms"
}, {
  name: "Maltese",
  value: "mt"
}, {
  name: "Burmese",
  value: "my"
}, {
  name: "Nauru",
  value: "na"
}, {
  name: "Norwegian Bokmål",
  value: "nb"
}, {
  name: "North Ndebele",
  value: "nd"
}, {
  name: "Nepali",
  value: "ne"
}, {
  name: "Ndonga",
  value: "ng"
}, {
  name: "Dutch",
  value: "nl"
}, {
  name: "Norwegian Nynorsk",
  value: "nn"
}, {
  name: "Norwegian",
  value: "no"
}, {
  name: "South Ndebele",
  value: "nr"
}, {
  name: "Navajo",
  value: "nv"
}, {
  name: "Chichewa",
  value: "ny"
}, {
  name: "Occitan",
  value: "oc"
}, {
  name: "Ojibwa",
  value: "oj"
}, {
  name: "Oromo",
  value: "om"
}, {
  name: "Oriya",
  value: "or"
}, {
  name: "Ossetian",
  value: "os"
}, {
  name: "Panjabi",
  value: "pa"
}, {
  name: "Pāli",
  value: "pi"
}, {
  name: "Polish",
  value: "pl"
}, {
  name: "Pashto",
  value: "ps"
}, {
  name: "Portuguese",
  value: "pt"
}, {
  name: "Quechua",
  value: "qu"
}, {
  name: "Reunionese",
  value: "rc"
}, {
  name: "Romansh",
  value: "rm"
}, {
  name: "Kirundi",
  value: "rn"
}, {
  name: "Romanian",
  value: "ro"
}, {
  name: "Russian",
  value: "ru"
}, {
  name: "Kinyarwanda",
  value: "rw"
}, {
  name: "Sanskrit",
  value: "sa"
}, {
  name: "Sardinian",
  value: "sc"
}, {
  name: "Sindhi",
  value: "sd"
}, {
  name: "Northern Sami",
  value: "se"
}, {
  name: "Sango",
  value: "sg"
}, {
  name: "Serbo-Croatian",
  value: "sh"
}, {
  name: "Sinhalese",
  value: "si"
}, {
  name: "Slovak",
  value: "sk"
}, {
  name: "Slovenian",
  value: "sl"
}, {
  name: "Samoan",
  value: "sm"
}, {
  name: "Shona",
  value: "sn"
}, {
  name: "Somali",
  value: "so"
}, {
  name: "Albanian",
  value: "sq"
}, {
  name: "Serbian",
  value: "sr"
}, {
  name: "Swati",
  value: "ss"
}, {
  name: "Sotho",
  value: "st"
}, {
  name: "Sundanese",
  value: "su"
}, {
  name: "Swedish",
  value: "sv"
}, {
  name: "Swahili",
  value: "sw"
}, {
  name: "Tamil",
  value: "ta"
}, {
  name: "Telugu",
  value: "te"
}, {
  name: "Tajik",
  value: "tg"
}, {
  name: "Thai",
  value: "th"
}, {
  name: "Tigrinya",
  value: "ti"
}, {
  name: "Turkmen",
  value: "tk"
}, {
  name: "Tagalog",
  value: "tl"
}, {
  name: "Tswana",
  value: "tn"
}, {
  name: "Tonga",
  value: "to"
}, {
  name: "Turkish",
  value: "tr"
}, {
  name: "Tsonga",
  value: "ts"
}, {
  name: "Tatar",
  value: "tt"
}, {
  name: "Twi",
  value: "tw"
}, {
  name: "Tahitian",
  value: "ty"
}, {
  name: "Uighur",
  value: "ug"
}, {
  name: "Ukrainian",
  value: "uk"
}, {
  name: "Urdu",
  value: "ur"
}, {
  name: "Uzbek",
  value: "uz"
}, {
  name: "Venda",
  value: "ve"
}, {
  name: "Viêt Namese",
  value: "vi"
}, {
  name: "Volapük",
  value: "vo"
}, {
  name: "Walloon",
  value: "wa"
}, {
  name: "Wolof",
  value: "wo"
}, {
  name: "Xhosa",
  value: "xh"
}, {
  name: "Yiddish",
  value: "yi"
}, {
  name: "Yoruba",
  value: "yo"
}, {
  name: "Zhuang",
  value: "za"
}, {
  name: "Chinese",
  value: "zh"
}, {
  name: "Zulu",
  value: "zu"
}];
const STATUS = [{
  name: "In Progress",
  value: "in progress"
}, {
  name: "In Hiatus",
  value: "in hiatus"
}, {
  name: "Completed",
  value: "completed"
}]; // TYPES

const types = {
  GET_PROFILE: "GET_PROFILE",
  LOGIN: "LOGIN",
  REGISTER: "REGISTER",
  GET_STORY: "GET_STORY",
  GET_USER_STORIES: "GET_USER_STORIES",
  GET_HOME_STORIES: "GET_HOME_STORIES",
  GET_USERS_FROM_SEARCH: "GET_USERS_FROM_SEARCH",
  GET_FAVORITE_STORIES: "GET_FAVORITE_STORIES",
  ADD_STORY: "ADD_STORY",
  EDIT_STORY: "EDIT_STORY",
  DELETE_STORY: "DELETE_STORY",
  GET_STORIES_FROM_SEARCH: "GET_STORIES_FROM_SEARCH",
  IS_STORY_FAVORITE: "IS_STORY_FAVORITE",
  IS_CHARACTER_FAVORITE: "IS_CHARACTER_FAVORITE",
  IS_FOLLOWING: "IS_FOLLOWING",
  GET_CHAPTER: "GET_CHAPTER",
  ADD_CHAPTER: "ADD_CHAPTER",
  EDIT_CHAPTER: "EDIT_CHAPTER",
  DELETE_CHAPTER: "DELETE_CHAPTER",
  GET_CHAPTERS: "GET_CHAPTERS",
  ADD_CHARACTER: "ADD_CHARACTER",
  GET_CHARACTER: "GET_CHARACTER",
  EDIT_CHARACTER: "EDIT_CHARACTER",
  DELETE_CHARACTER: "DELETE_CHARACTER",
  GET_USER_CHARACTERS: "GET_USER_CHARACTERS",
  GET_CHARACTER_COMMENTS: "GET_CHARACTER_COMMENTS",
  GET_CHARACTERS_FROM_SEARCH: "GET_CHARACTERS_FROM_SEARCH",
  GET_USER_LOCATIONS: "GET_USER_LOCATIONS",
  GET_FAVORITE_CHARACTERS: "GET_FAVORITE_CHARACTERS",
  GET_STORY_CHARACTERS: "GET_STORY_CHARACTERS",
  ADD_LOCATION: "ADD_LOCATION",
  GET_LOCATION: "GET_LOCATION",
  EDIT_LOCATION: "EDIT_LOCATION",
  DELETE_LOCATION: "DELETE_LOCATION",
  GET_COMMENTS: "GET_COMMENTS",
  GET_FAVORITE_AUTHORS: "GET_FAVORITE_AUTHORS",
  GET_STORY_LOCATIONS: "GET_STORY_LOCATIONS",
  GET_FOLLOWERS: "GET_FOLLOWERS",
  DISPATCH_ERROR: "DISPATCH_ERROR",
  SUBMIT_COMMENT: "SUBMIT_COMMENT",
  RATE_COMMENT: "RATE_COMMENT",
  GET_NOTIFICATIONS: "GET_NOTIFICATIONS"
};
const GET_PROFILE = "GET_PROFILE";
const LOGIN = "LOGIN";
const REGISTER = "REGISTER";
const GET_STORY = "GET_STORY";
const GET_USER_STORIES = "GET_USER_STORIES";
const GET_FAVORITE_STORIES = "GET_FAVORITE_STORIES";
const ADD_STORY = "ADD_STORY";
const EDIT_STORY = "EDIT_STORY";
const DELETE_STORY = "DELETE_STORY";
const IS_STORY_FAVORITE = "IS_STORY_FAVORITE";
const GET_CHAPTER = "GET_CHAPTER";
const ADD_CHAPTER = "ADD_CHAPTER";
const EDIT_CHAPTER = "EDIT_CHAPTER";
const DELETE_CHAPTER = "DELETE_CHAPTER";
const GET_CHAPTERS = "GET_CHAPTERS";
const ADD_CHARACTER = "ADD_CHARACTER";
const GET_CHARACTER = "GET_CHARACTER";
const EDIT_CHARACTER = "EDIT_CHARACTER";
const GET_USER_CHARACTERS = "GET_USER_CHARACTERS";
const GET_USER_LOCATIONS = "GET_USER_LOCATIONS";
const GET_FAVORITE_CHARACTERS = "GET_FAVORITE_CHARACTERS";
const GET_STORY_CHARACTERS = "GET_STORY_CHARACTERS";
const ADD_LOCATION = "ADD_LOCATION";
const GET_FAVORITE_AUTHORS = "GET_FAVORITE_AUTHORS";
const GET_FOLLOWERS = "GET_FOLLOWERS";
const DISPATCH_ERROR = "DISPATCH_ERROR";

/***/ }),

/***/ "./utils/dummy.js":
/*!************************!*\
  !*** ./utils/dummy.js ***!
  \************************/
/*! exports provided: dummy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dummy", function() { return dummy; });
const dummy = {
  person: "https://i.pinimg.com/564x/70/50/a3/7050a30cc61e8a7f3f8677ebf9505db7.jpg",
  cover: "https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  name: "Aishwarya Rai",
  poster: "https://images-na.ssl-images-amazon.com/images/I/81h2gWPTYJL.jpg",
  avatar: "https://bip.cnrs.fr/wp-content/uploads/2019/11/user.jpg",
  noImage: "https://i.stack.imgur.com/y9DpT.jpg"
};

/***/ }),

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/auth");

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/firestore");

/***/ }),

/***/ "firebase/storage":
/*!***********************************!*\
  !*** external "firebase/storage" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/storage");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-responsive-masonry":
/*!*******************************************!*\
  !*** external "react-responsive-masonry" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-responsive-masonry");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29tbW9uL0NhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb21tb24vQ2hhcmFjdGVyQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbW1vbi9HcmlkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29tbW9uL0xvY2F0aW9uQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbW1vbi9QYWdpbmF0aW9uLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29tbW9uL1VzZXJDYXJkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaG9jL0xvYWRpbmdTY3JlZW4uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9ob2MvUmVkaXJlY3RDb21wLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcHJvZmlsZS9CYW5uZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wcm9maWxlL0NoYXJhY3RlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wcm9maWxlL0Zhdm9yaXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Byb2ZpbGUvRm9sbG93ZXJzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcHJvZmlsZS9MaW5rQ29tcC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Byb2ZpbGUvTG9jYXRpb25zLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcHJvZmlsZS9TZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Byb2ZpbGUvU29ydElucHV0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcHJvZmlsZS9TdG9yaWVzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcHJvZmlsZS9UYWJzLmpzIiwid2VicGFjazovLy8uL2hvb2tzL3VzZXJIb29rcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3dpdGgtcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwL2luZGV4LmpzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbWl0dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZXNjYXBlLXBhdGgtZGVsaW1pdGVycy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhdGgtbWF0Y2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcHJlcGFyZS1kZXN0aW5hdGlvbi50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yZXNvbHZlLXJld3JpdGVzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9wcm9maWxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3JlZHV4L2FjdGlvbnMvY2hhcmFjdGVyc0FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWN0aW9ucy9zdG9yaWVzQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25zL3VzZXJBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3JlZHV4L2ZiQ29uZmlnLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9kdW1teS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW50LWRlc2lnbi9pY29uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9hcHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9hdXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2Uvc3RvcmFnZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVzcG9uc2l2ZS1tYXNvbnJ5XCIiXSwibmFtZXMiOlsiQ2FyZCIsInN0b3J5IiwidHlwZSIsImJhbm5lciIsImR1bW15Iiwibm9JbWFnZSIsInRpdGxlIiwic3VtbWFyeSIsImxlbmd0aCIsInNsaWNlIiwiYXV0aG9yTmFtZSIsImNoYXB0ZXJzQ291bnQiLCJzZWNvbmRhcnlBcnIiLCJtYWluQ2hhcmFjdGVycyIsImNvbW1lbnRzQ291bnQiLCJDaGFyYWN0ZXJDYXJkIiwiY2hhcmFjdGVyIiwicmVtb3ZlQ2hhcmFjdGVyIiwiaWQiLCJpbWFnZSIsImZpcnN0bmFtZSIsImxhc3RuYW1lIiwicmVsYXRpb24iLCJTdG9yaWVzR3JpZCIsInN0b3JpZXMiLCJndXR0ZXIiLCJjb2x1bW5zQ291bnRCcmVha1BvaW50cyIsIm1hcCIsIkVtcHR5IiwiUFJFU0VOVEVEX0lNQUdFX1NJTVBMRSIsIk1pbmlHcmlkIiwiY292ZXIiLCJVc2VyR3JpZCIsInVzZXJzIiwieGwiLCJsZyIsInhzIiwic20iLCJtZCIsInUiLCJMb2NhdGlvbkdyaWQiLCJsb2NhdGlvbnMiLCJ4eGwiLCJjIiwiQ2hhcmFjdGVyR3JpZCIsImNoYXJhY3RlcnMiLCJMb2NhdGlvbkNhcmQiLCJsb2NhdGlvbiIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJzdG9yeVRpdGxlIiwiZGVzY3JpcHRpb24iLCJzdG9yeUlkIiwiUGFnaW5hdGlvbiIsImRhdGEiLCJpdGVtVHlwZSIsInBhZ2luYXRpb24iLCJzZXRQYWdpbmF0aW9uIiwiY3VycmVudFBhZ2UiLCJkYXRhc1BlclBhZ2UiLCJpbmRleE9mTGFzdERhdGEiLCJpbmRleE9mRmlyc3REYXRhIiwiY3VycmVudERhdGFzIiwiaGFuZGxlQ2xpY2siLCJlIiwid2luZG93Iiwic2Nyb2xsVG8iLCJOdW1iZXIiLCJyZW5kZXJEYXRhcyIsInBhZ2VOdW1iZXJzIiwiaSIsIk1hdGgiLCJjZWlsIiwicHVzaCIsInRvdGFsIiwiVXNlckNhcmQiLCJ1c2VyIiwidXNlcm5hbWUiLCJMb2FkaW5nU2NyZWVuIiwiY2hpbGRyZW4iLCJsb2FkaW5nIiwiUmVkaXJlY3RDb21wIiwiY29uZGl0aW9uIiwidmVyaWZ5RW1haWwiLCJocmVmIiwiQmFubmVyIiwib3BlblNldHRpbmdzIiwicHJvZmlsZSIsImZhdkF1dGhvcnMiLCJmb2xsb3dlcnMiLCJjaGFuZ2VGYXZUYWIiLCJmYXZUYWIiLCJzZXRDdXJyZW50VGFiIiwiY29udGV4dCIsImlzRm9sbG93aW5nIiwiZm9sbG93VXNlciIsInVuZm9sbG93VXNlciIsImF1dGgiLCJhdXRob3JzIiwiYmlvZ3JhcGh5IiwiZmFjZWJvb2siLCJ0d2l0dGVyIiwiaW5zdGFncmFtIiwiZGV2aWFudGFydCIsIkNoYXJhY3RlcnMiLCJzZXREYXRhIiwidXNlRWZmZWN0Iiwib3B0aW9ucyIsInZhbHVlIiwiRmF2b3JpdGVzIiwiZmF2cyIsImlzTG9hZGluZyIsImZhdiIsIkZvbGxvd2VycyIsIml0ZW1zIiwiTGlua0NvbXAiLCJsYWJlbCIsImluZm8iLCJzZXRJbmZvIiwidmFsaWRhdGVfdXJsIiwidXJsIiwidGVzdCIsImVycm9ycyIsInRhcmdldCIsIkxvY2F0aW9ucyIsIlRhYlBhbmUiLCJUYWJzIiwiZ2V0QmFzZTY0IiwiaW1nIiwiY2FsbGJhY2siLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlc3VsdCIsInJlYWRBc0RhdGFVUkwiLCJiZWZvcmVVcGxvYWQiLCJmaWxlIiwiaXNKcGdPclBuZyIsIm1lc3NhZ2UiLCJlcnJvciIsImlzTHQyTSIsInNpemUiLCJTZXR0aW5ncyIsImRlbGV0ZUFjY291bnQiLCJzZXRPcGVuU2V0dGluZ3MiLCJjaGFuZ2VQcm9maWxlIiwiZm9ybSIsIkZvcm0iLCJ1c2VGb3JtIiwiaW1hZ2VVcmwiLCJzZXRJbWFnZVVybCIsInNldExvYWRpbmciLCJoYW5kbGVDaGFuZ2UiLCJpbWFnZUluZm8iLCJzdGF0dXMiLCJvcmlnaW5GaWxlT2JqIiwidXBsb2FkQnV0dG9uIiwibWFyZ2luVG9wIiwic3VibWl0IiwicGFzc3dvcmRFcnJvcnMiLCJnZXRGaWVsZHNFcnJvciIsIm5ld1Bhc3N3b3JkIiwiZ2V0RmllbGRWYWx1ZSIsImFjdHVhbFBhc3N3b3JkIiwiY2xvc2VNb2RhbCIsInJlcXVpcmVkIiwidmFsaWRhdG9yIiwiXyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiRXJyb3IiLCJtYXJnaW4iLCJzaG93UmVtb3ZlSWNvbiIsInJlbW92ZUljb24iLCJ3aWR0aCIsImhlaWdodCIsIm9iamVjdEZpdCIsIlNvcnRJbnB1dCIsIml0ZW1EYXRhIiwic29ydEFycmF5IiwibmV3QXJyIiwic29ydCIsImEiLCJiIiwiY3JlYXRlZEF0IiwiRGF0ZSIsInNlY29uZHMiLCJrZXlBIiwidG9Mb3dlckNhc2UiLCJrZXlCIiwiY29uc29sZSIsImxvZyIsInZhbCIsIm9wdGlvbiIsIlN0b3JpZXMiLCJ0YWJzIiwiY2hhbmdlVGFiIiwiY3VycmVudFRhYiIsInRhYiIsImF1dGhDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIlByb3ZpZGVBdXRoIiwidXNlUHJvdmlkZUF1dGgiLCJ1c2VBdXRoIiwidXNlQ29udGV4dCIsInNldFVzZXIiLCJzZXRJc0xvYWRpbmciLCJzZXRFcnJvcnMiLCJwYXNzd29yZCIsImVtYWlsIiwic2lnbmluIiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJ0aGVuIiwicmVzcG9uc2UiLCJjYXRjaCIsImVyciIsImNvZGUiLCJzaWdudXAiLCJjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJkYiIsImNvbGxlY3Rpb24iLCJkb2MiLCJ1aWQiLCJzZXQiLCJsaWtlc0NvdW50IiwiYmFkZ2VzIiwiZmlyZWJhc2UiLCJmaXJlc3RvcmUiLCJGaWVsZFZhbHVlIiwic2VydmVyVGltZXN0YW1wIiwic3VzcGVuZGVkIiwiY3VycmVudFVzZXIiLCJzZW5kRW1haWxWZXJpZmljYXRpb24iLCJzaWdub3V0Iiwic2lnbk91dCIsInNlbmRQYXNzd29yZFJlc2V0RW1haWwiLCJjb25maXJtUGFzc3dvcmRSZXNldCIsImRlbGV0ZSIsInVuc3Vic2NyaWJlIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwib25TbmFwc2hvdCIsImV4aXN0cyIsImxpc3RlbmVycyIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwicHJlZmV0Y2hlZCIsImNhY2hlZE9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiY2IiLCJyb290TWFyZ2luIiwibGlzdGVuVG9JbnRlcnNlY3Rpb25zIiwib2JzZXJ2ZXIiLCJnZXRPYnNlcnZlciIsInJvdXRlciIsImV2ZW50Iiwibm9kZU5hbWUiLCJpc01vZGlmaWVkRXZlbnQiLCJzY3JvbGwiLCJhcyIsInJlcGxhY2UiLCJzdWNjZXNzIiwiZG9jdW1lbnQiLCJhcmdzIiwia2V5IiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwiT2JqZWN0IiwicHJvcHMiLCJjcmVhdGVQcm9wRXJyb3IiLCJvcHRpb25hbFByb3BzR3VhcmQiLCJzaGFsbG93IiwicGFzc0hyZWYiLCJwcmVmZXRjaCIsIm9wdGlvbmFsUHJvcHMiLCJoYXNXYXJuZWQiLCJwIiwicGF0aG5hbWUiLCJyZXNvbHZlZEFzIiwiY2hpbGRFbG0iLCJpc1ByZWZldGNoZWQiLCJjaGlsZCIsIkNoaWxkcmVuIiwiY2hpbGRQcm9wcyIsInJlZiIsImVsIiwic2V0Q2hpbGRFbG0iLCJvbkNsaWNrIiwibGlua0NsaWNrZWQiLCJwcmlvcml0eSIsIkxpbmsiLCJwYXRoIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJwcm9jZXNzIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImdldCIsIlJvdXRlciIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJBcnJheSIsIkNvbXBvc2VkQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiV2l0aFJvdXRlcldyYXBwZXIiLCJhbGwiLCJvbiIsIm9mZiIsImVtaXQiLCJoYW5kbGVyIiwiYmFzZVBhdGgiLCJjYW5jZWxsZWQiLCJwcmVmaXgiLCJhZGRQYXRoUHJlZml4IiwibG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsImhhc0Jhc2VQYXRoIiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJhc1BhdGhuYW1lIiwicGFyYW1zIiwicGFyYW0iLCJyZXBsYWNlZCIsInJlcGVhdCIsIm9wdGlvbmFsIiwiZXNjYXBlUGF0aERlbGltaXRlcnMiLCJmaWx0ZXJlZFF1ZXJ5IiwicXVlcnkiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmaW5hbFVybCIsImludGVycG9sYXRlZEFzIiwiaW50ZXJwb2xhdGVBcyIsImhhc2giLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJyZXNvbHZlZEhyZWYiLCJyZXNvbHZlQXMiLCJQQUdFX0xPQURfRVJST1IiLCJTeW1ib2wiLCJhZGRCYXNlUGF0aCIsInJlc29sdmVIcmVmIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJjcmVkZW50aWFscyIsInJlcyIsImF0dGVtcHRzIiwiZmV0Y2hSZXRyeSIsImlzU2VydmVyUmVuZGVyIiwibWFya0xvYWRpbmdFcnJvciIsImNvbnN0cnVjdG9yIiwicm91dGUiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIl9pbkZsaWdodFJvdXRlIiwiX3NoYWxsb3ciLCJsb2NhbGUiLCJsb2NhbGVzIiwiZGVmYXVsdExvY2FsZSIsInN0YXRlIiwic3R5bGVTaGVldHMiLCJfX05fU1NHIiwiaW5pdGlhbFByb3BzIiwiX19OX1NTUCIsIkNvbXBvbmVudCIsIl9fTkVYVF9EQVRBX18iLCJyZWxvYWQiLCJiYWNrIiwicHJlcGFyZVVybEFzIiwiaXNMb2NhbFVSTCIsIlNUIiwicGVyZm9ybWFuY2UiLCJhZGRMb2NhbGUiLCJjbGVhbmVkQXMiLCJkZWxMb2NhbGUiLCJkZWxCYXNlUGF0aCIsInBhZ2VzIiwiX19yZXdyaXRlcyIsInBhcnNlZCIsIm1ldGhvZCIsInBvdGVudGlhbEhyZWYiLCJwYXJzZWRBcyIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwicm91dGVJbmZvIiwiZGVzdGluYXRpb24iLCJwYXJzZWRIcmVmIiwiYXBwQ29tcCIsImNoYW5nZVN0YXRlIiwiX19OIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsInBhZ2UiLCJjYWNoZWRSb3V0ZUluZm8iLCJyZXF1aXJlIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZGF0YUhyZWYiLCJiZWZvcmVQb3BTdGF0ZSIsIm9ubHlBSGFzaENoYW5nZSIsIm5ld0hhc2giLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic2Nyb2xsVG9IYXNoIiwiaWRFbCIsIm5hbWVFbCIsInVybElzTmV3IiwiX3Jlc29sdmVIcmVmIiwiYXBwbHlCYXNlUGF0aCIsImNsZWFuUGF0aG5hbWUiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJfZ2V0RGF0YSIsImZuIiwiX2dldFN0YXRpY0RhdGEiLCJmZXRjaE5leHREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5Iiwic2VnbWVudCIsImNoYXIiLCJlbmNvZGVVUklDb21wb25lbnQiLCJzbGFzaGVkUHJvdG9jb2xzIiwicHJvdG9jb2wiLCJ1cmxPYmoiLCJob3N0IiwiaG9zdG5hbWUiLCJTdHJpbmciLCJxdWVyeXN0cmluZyIsInNlYXJjaCIsIlRFU1RfUk9VVEUiLCJEVU1NWV9CQVNFIiwicmVzb2x2ZWRCYXNlIiwib3JpZ2luIiwibWF0Y2hlck9wdGlvbnMiLCJzZW5zaXRpdmUiLCJkZWxpbWl0ZXIiLCJjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zIiwic3RyaWN0IiwiY3VzdG9tUm91dGUiLCJrZXlzIiwibWF0Y2hlclJlZ2V4IiwicGF0aFRvUmVnZXhwIiwibWF0Y2hlciIsInBhcnNlZERlc3RpbmF0aW9uIiwiZGVzdFF1ZXJ5IiwiZGVzdFBhdGgiLCJkZXN0UGF0aFBhcmFtS2V5cyIsImRlc3RQYXRoUGFyYW1zIiwiZGVzdGluYXRpb25Db21waWxlciIsInZhbGlkYXRlIiwic3RyT3JBcnJheSIsInF1ZXJ5Q29tcGlsZXIiLCJwYXJhbUtleXMiLCJhcHBlbmRQYXJhbXNUb1F1ZXJ5Iiwic2hvdWxkQWRkQmFzZVBhdGgiLCJuZXdVcmwiLCJzZWFyY2hQYXJhbXMiLCJpc05hTiIsIml0ZW0iLCJzdHJpbmdpZnlVcmxRdWVyeVBhcmFtIiwic2VhcmNoUGFyYW1zTGlzdCIsImN1c3RvbVJvdXRlTWF0Y2hlciIsInJld3JpdGUiLCJkZXN0UmVzIiwicmUiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJzbHVnTmFtZSIsImciLCJncm91cHMiLCJtIiwic3RyIiwic2VnbWVudHMiLCJub3JtYWxpemVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwicGFyc2VQYXJhbWV0ZXIiLCJwb3MiLCJlc2NhcGVSZWdleCIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJwYXJzZUludCIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiUHJvZmlsZSIsImdldFByb2ZpbGUiLCJnZXRVc2VyU3RvcmllcyIsImdldFVzZXJDaGFyYWN0ZXJzIiwiZ2V0RmF2b3JpdGVBdXRob3JzIiwiZ2V0RmF2b3JpdGVDaGFyYWN0ZXJzIiwiZ2V0RmF2b3JpdGVTdG9yaWVzIiwiZ2V0VXNlckxvY2F0aW9ucyIsImdldEZvbGxvd2VycyIsImZhdkNoYXJhY3RlcnMiLCJmYXZTdG9yaWVzIiwic2V0RmF2VGFiIiwiZmF2b3JpdGVTdG9yaWVzIiwic2V0RmF2b3JpdGVTdG9yaWVzIiwiZmF2b3JpdGVDaGFyYWN0ZXJzIiwic2V0RmF2b3JpdGVDaGFyYWN0ZXJzIiwiZmlsdGVyIiwicyIsInB1YmxpYyIsImF1dGhvcklkIiwiZW1haWxWZXJpZmllZCIsIm1hcmdpbkJvdHRvbSIsIm1hcFN0YXRlVG9Qcm9wcyIsIm93blByb3BzIiwidXNlclN0b3JpZXMiLCJ1c2VyQ2hhcmFjdGVycyIsInVzZXJMb2NhdGlvbnMiLCJjb25uZWN0IiwiZ2V0Q2hhcmFjdGVyIiwiZGlzcGF0Y2giLCJyZWxBcnIiLCJzdG9yeUFyciIsInJlbGF0aXZlcyIsInJlbGF0aXZlc0FyciIsInJlbFF1ZXJpZXMiLCJmb3JFYWNoIiwicmVsIiwiZmluZCIsImNoYXJhY3Rlcl9pZCIsIm1haW5RdWVyeSIsIndoZXJlIiwic2Vjb25kYXJ5UXVlcnkiLCJhbGxTdG9yeSIsImRvY3MiLCJjb25jYXQiLCJ0eXBlcyIsIkdFVF9DSEFSQUNURVIiLCJwYXlsb2FkIiwiciIsImNoYXJhRXhpc3RzIiwiYWRkQ2hhcmFjdGVyIiwiQUREX0NIQVJBQ1RFUiIsImNoYXJhSWQiLCJhZGQiLCJsaWtlcyIsImRpc2xpa2VzIiwiaW1hZ2VOYW1lIiwic3RvcmFnZSIsInB1dCIsImdldERvd25sb2FkVVJMIiwidXBkYXRlIiwiY2hhcmFjdGVySWQiLCJlZGl0Q2hhcmFjdGVyIiwiRURJVF9DSEFSQUNURVIiLCJsb2FkaW5nQ2hhcmFjdGVyIiwiZGVsZXRlQ2hhcmFjdGVyIiwiREVMRVRFX0NIQVJBQ1RFUiIsImRlbGV0ZWQiLCJ1c2VySWQiLCJHRVRfVVNFUl9DSEFSQUNURVJTIiwiZmF2QXJyIiwiZmF2VXNlcnMiLCJHRVRfRkFWT1JJVEVfQ0hBUkFDVEVSUyIsImlzQ2hhcmFjdGVyRmF2b3JpdGUiLCJjaGFySWQiLCJzbmFwc2hvdCIsImFuc3dlciIsIklTX0NIQVJBQ1RFUl9GQVZPUklURSIsImxvYWRpbmdGYXYiLCJhZGRDaGFyYWN0ZXJUb0Zhdm9yaXRlIiwiY2hhcmFjdGVyTmFtZSIsInNlbmRlciIsInNlbmRlcklkIiwicmVhZCIsInJlY2lwaWVudCIsInJlbW92ZUNoYXJhY3RlckZyb21GYXZvcml0ZSIsImdldENoYXJhY3RlcnNJblN0b3J5IiwiR0VUX1NUT1JZX0NIQVJBQ1RFUlMiLCJzZWNvbmRhcnlDaGFyYWN0ZXJzIiwibWFpbkFyciIsInN1Ym1pdENoYXJhdGVyRmVlZGJhY2siLCJ1c2VyQ29tbWVudCIsImFsbEluZm8iLCJjb250ZW50IiwiU1VCTUlUX0NPTU1FTlQiLCJnZXRDaGFyYWN0ZXJDb21tZW50cyIsImNvbW1lbnRzIiwib3JkZXJCeSIsImNvbW0iLCJ1c2VyUXVlcmllcyIsImNvbW1lbnQiLCJ1c2VySW1hZ2UiLCJkIiwiR0VUX0NPTU1FTlRTIiwibG9hZGluZ0NvbW1lbnRzIiwiZGVsZXRlQ2hhcmFjdGVyQ29tbWVudCIsInJhdGVDb21tZW50IiwiY29tbWVudElkIiwiUkFURV9DT01NRU5UIiwicmF0ZWQiLCJpc0xpa2VkIiwibGlrZWRCeSIsImluY2x1ZGVzIiwiaXNEaXNsaWtlZCIsImRpc2xpa2VkQnkiLCJnZXRDaGFyYWN0ZXJzRnJvbVNlYXJjaCIsIkdFVF9DSEFSQUNURVJTX0ZST01fU0VBUkNIIiwic3BsaXQiLCJzZWFyY2hUZXJtIiwiZmlyc3RuYW1lSW5jbHVkZWQiLCJzb21lIiwid29yZCIsImluZGV4T2YiLCJsYXN0bmFtZUluY2x1ZGVkIiwiYXV0aG9ySW5jbHVkZWQiLCJldmVyeSIsIm9yQXV0aG9ySW5jbHVkZWQiLCJnZXRTdG9yeSIsIm1haW4iLCJzZWNvbmRhcnkiLCJtYWluUmVzIiwic2Vjb25kYXJ5UmVzIiwiZG9jdSIsIkdFVF9TVE9SWSIsInN0b3J5RXhpc3RzIiwiRElTUEFUQ0hfRVJST1IiLCJhZGRTdG9yeSIsIkFERF9TVE9SWSIsIm9uZVNob3QiLCJmZWF0dXJlZCIsIm5vdGUiLCJsYXN0VXBkYXRlZCIsImpvaW4iLCJlZGl0U3RvcnkiLCJFRElUX1NUT1JZIiwibG9hZGluZ1N0b3J5IiwibG9jYXRpb25RdWVyeSIsImRlbGV0ZVN0b3J5IiwiREVMRVRFX1NUT1JZIiwiR0VUX1VTRVJfU1RPUklFUyIsIkdFVF9GQVZPUklURV9TVE9SSUVTIiwiaXNTdG9yeUZhdm9yaXRlIiwiSVNfU1RPUllfRkFWT1JJVEUiLCJhZGRTdG9yeVRvRmF2b3JpdGUiLCJyZW1vdmVTdG9yeUZyb21GYXZvcml0ZSIsImdldFN0b3J5Q2hhcmFjdGVycyIsImdldEhvbWVTdG9yaWVzIiwibGltaXQiLCJHRVRfSE9NRV9TVE9SSUVTIiwiYWRkQ2hhcHRlciIsIkFERF9DSEFQVEVSIiwibnVtYmVyVXNlZCIsImNoYXB0ZXIiLCJudW1iZXIiLCJ2b3RlcnMiLCJ2b3Rlc0NvdW50IiwiY2hhcElkIiwiZWRpdENoYXB0ZXIiLCJjaGFwaWQiLCJFRElUX0NIQVBURVIiLCJkZWxldGVDaGFwdGVyIiwiREVMRVRFX0NIQVBURVIiLCJsb2FkaW5nQ2hhcHRlciIsImdldENoYXB0ZXIiLCJjaGFwIiwiY2hhcmFRdWVyeSIsImxvY1F1ZXJ5IiwiY2hhcmFjdGVyc0luQ2hhcGVyIiwibG9jYXRpb25zSW5DaGFwZXIiLCJjaGFwTnVtYmVyIiwicHJldkNoYXAiLCJuZXh0Q2hhcCIsImxvYyIsInByZXYiLCJuZXh0IiwibCIsIkdFVF9DSEFQVEVSIiwiY2hhcHRlckV4aXN0cyIsImdldENoYXB0ZXJzIiwiYXJyIiwiR0VUX0NIQVBURVJTIiwiYWRkTG9jYXRpb24iLCJBRERfTE9DQVRJT04iLCJsb2FkaW5nTG9jIiwibG9jSWQiLCJlZGl0TG9jYXRpb24iLCJnZXRMb2NhdGlvbiIsIkdFVF9MT0NBVElPTiIsImxvY2F0aW9uRXhpc3RzIiwiZGVsZXRlTG9jYXRpb24iLCJiYXRjaCIsImNvbW1pdCIsIkdFVF9VU0VSX0xPQ0FUSU9OUyIsImdldFN0b3J5TG9jYXRpb25zIiwiR0VUX1NUT1JZX0xPQ0FUSU9OUyIsImdldENvbW1lbnRzIiwic25hcCIsInF1ZXJpZXMiLCJzdWJtaXRDb21tZW50IiwiY2hhcHRlcklkIiwidXNlckRlbGV0ZWQiLCJkZWxldGVDb21tZW50IiwiZ2V0U3Rvcmllc0Zyb21TZWFyY2giLCJpc0luY2x1ZGVkIiwib3JJbmNsdWRlZCIsIkdFVF9TVE9SSUVTX0ZST01fU0VBUkNIIiwibG9nX2luIiwiR0VUX1BST0ZJTEUiLCJhZGRlZE9uIiwiR0VUX0ZBVk9SSVRFX0FVVEhPUlMiLCJHRVRfRk9MTE9XRVJTIiwiZ2V0SXNGb2xsb3dpbmciLCJJU19GT0xMT1dJTkciLCJpc0Zhdm9yaXRlIiwibmV3Rm9sbG93ZXIiLCJ3YXJuaW5nIiwic2V0T3BlbiIsIm5ld0luZm8iLCJyZWF1dGhlbnRpY2F0ZVdpdGhDcmVkZW50aWFsIiwiRW1haWxBdXRoUHJvdmlkZXIiLCJjcmVkZW50aWFsIiwidXBkYXRlUGFzc3dvcmQiLCJnZXRVc2Vyc0Zyb21TZWFyY2giLCJHRVRfVVNFUlNfRlJPTV9TRUFSQ0giLCJwcm9kQ29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsImRhdGFiYXNlVVJMIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJGSVJFQkFTRV9BUFBfSUQiLCJkZXZDb25maWciLCJjb25maWciLCJhcHBzIiwiaW5pdGlhbGl6ZUFwcCIsIkNBVEVHT1JJRVMiLCJDT1BZUklHSFRTIiwiTEFOR1VBR0VTIiwiU1RBVFVTIiwiTE9HSU4iLCJSRUdJU1RFUiIsIkdFVF9DSEFSQUNURVJfQ09NTUVOVFMiLCJFRElUX0xPQ0FUSU9OIiwiREVMRVRFX0xPQ0FUSU9OIiwiR0VUX05PVElGSUNBVElPTlMiLCJwZXJzb24iLCJwb3N0ZXIiLCJhdmF0YXIiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFF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RyxnQkFBdkI7QUFDQSxNQUFNbUIsWUFBWSxHQUFHLGNBQXJCO0FBRUEsTUFBTTNJLGFBQWEsR0FBRyxlQUF0QjtBQUNBLE1BQU1MLGFBQWEsR0FBRyxlQUF0QjtBQUNBLE1BQU1pQixjQUFjLEdBQUcsZ0JBQXZCO0FBQ0EsTUFBTU0sbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsTUFBTXFJLGtCQUFrQixHQUFHLG9CQUEzQjtBQUNBLE1BQU1sSSx1QkFBdUIsR0FBRyx5QkFBaEM7QUFDQSxNQUFNZSxvQkFBb0IsR0FBRyxzQkFBN0I7QUFFQSxNQUFNeUcsWUFBWSxHQUFHLGNBQXJCO0FBRUEsTUFBTTJCLG9CQUFvQixHQUFHLHNCQUE3QjtBQUNBLE1BQU1DLGFBQWEsR0FBRyxlQUF0QjtBQUVBLE1BQU1yRixjQUFjLEdBQUcsZ0JBQXZCLEM7Ozs7Ozs7Ozs7OztBQzFTUDtBQUFBO0FBQU8sTUFBTWpwQixLQUFLLEdBQUc7QUFDbkIyd0IsUUFBTSxFQUNKLHlFQUZpQjtBQUduQmh2QixPQUFLLEVBQ0gsZ0hBSmlCO0FBS25CcUIsTUFBSSxFQUFFLGVBTGE7QUFNbkI0dEIsUUFBTSxFQUFFLGtFQU5XO0FBT25CQyxRQUFNLEVBQUUseURBUFc7QUFRbkI1d0IsU0FBTyxFQUFFO0FBUlUsQ0FBZCxDOzs7Ozs7Ozs7OztBQ0FQLDhDOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHFEIiwiZmlsZSI6InBhZ2VzL3Byb2ZpbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL3Byb2ZpbGUvaW5kZXguanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsImltcG9ydCB7IGR1bW15IH0gZnJvbSBcIi4uLy4uL3V0aWxzL2R1bW15XCI7XHJcbmNvbnN0IENhcmQgPSAoeyBzdG9yeSwgdHlwZSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwiY2FyZCBzdG9yeS1jYXJkXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxpbWcgc3JjPXtzdG9yeS5iYW5uZXIgPyBzdG9yeS5iYW5uZXIgOiBkdW1teS5ub0ltYWdlfSBhbHQ9XCJpbWFnZVwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZmlnY2FwdGlvbj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdC1ibG9ja1wiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGFnXCI+RHJhbWE8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxoMz57c3Rvcnk/LnRpdGxlfTwvaDM+XHJcbiAgICAgICAge3R5cGUgIT09IFwibWluaVwiICYmIChcclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgIHtzdG9yeT8uc3VtbWFyeT8ubGVuZ3RoID4gMTUwXHJcbiAgICAgICAgICAgICAgPyBgJHtzdG9yeS5zdW1tYXJ5LnNsaWNlKDAsIDE1MCl9Li4uYFxyXG4gICAgICAgICAgICAgIDogc3Rvcnkuc3VtbWFyeX1cclxuICAgICAgICAgICAgeyFzdG9yeS5zdW1tYXJ5ICYmIFwiTm8gc3VtbWFyeSB5ZXRcIn1cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICApfVxyXG4gICAgICAgIHt0eXBlICE9PSBcInByaXZhdGVQcm9maWxlXCIgJiYgKFxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYXV0aG9yXCI+QXV0aG9yOiB7c3RvcnkuYXV0aG9yTmFtZX08L3NwYW4+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdW50XCI+XHJcbiAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibnVtYmVyXCI+e3N0b3J5LmNoYXB0ZXJzQ291bnR9IDwvcD57XCIgXCJ9XHJcbiAgICAgICAgICAgIDxpb24taWNvbiBuYW1lPVwiYm9va1wiPjwvaW9uLWljb24+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibnVtYmVyXCI+XHJcbiAgICAgICAgICAgICAge3N0b3J5LnNlY29uZGFyeUFyci5sZW5ndGggKyBzdG9yeS5tYWluQ2hhcmFjdGVycy5sZW5ndGh9e1wiIFwifVxyXG4gICAgICAgICAgICA8L3A+e1wiIFwifVxyXG4gICAgICAgICAgICA8aW9uLWljb24gbmFtZT1cInBlb3BsZVwiPjwvaW9uLWljb24+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibnVtYmVyXCI+e3N0b3J5LmNvbW1lbnRzQ291bnR9IDwvcD57XCIgXCJ9XHJcbiAgICAgICAgICAgIDxpb24taWNvbiBuYW1lPVwiY2hhdGJ1YmJsZVwiPjwvaW9uLWljb24+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZmlnY2FwdGlvbj5cclxuICAgIDwvZmlndXJlPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgeyBkdW1teSB9IGZyb20gXCIuLi8uLi91dGlscy9kdW1teVwiO1xyXG5cclxuY29uc3QgQ2hhcmFjdGVyQ2FyZCA9ICh7IGNoYXJhY3RlciwgdHlwZSwgcmVtb3ZlQ2hhcmFjdGVyIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGZpZ3VyZVxyXG4gICAgICBjbGFzc05hbWU9e2BjYXJkIGNoYXJhY3Rlci1jYXJkICR7dHlwZSA/IHR5cGUgOiBcIlwifWB9XHJcbiAgICAgIGRhdGEtYW9zPVwiem9vbS1pbi11cFwiXHJcbiAgICA+XHJcbiAgICAgIHt0eXBlID09PSBcImFkZFwiICYmIChcclxuICAgICAgICA8c3BhblxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gcmVtb3ZlQ2hhcmFjdGVyKGNoYXJhY3Rlci5pZCl9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJyZW1vdmUtYnRuXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICB4XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICApfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZy1jb250YWluZXJcIj5cclxuICAgICAgICA8aW1nIHNyYz17Y2hhcmFjdGVyPy5pbWFnZSA/IGNoYXJhY3Rlci5pbWFnZSA6IGR1bW15Lm5vSW1hZ2V9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZmlnY2FwdGlvbj5cclxuICAgICAgICA8aDM+e2Ake2NoYXJhY3Rlcj8uZmlyc3RuYW1lfSAke2NoYXJhY3Rlcj8ubGFzdG5hbWV9YH08L2gzPlxyXG4gICAgICAgIHsodHlwZSA9PT0gXCJmYXZvcml0ZXNcIiB8fCB0eXBlID09PSBcInN0b3J5XCIpICYmIChcclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImF1dGhvclwiPkF1dGhvcjoge2NoYXJhY3Rlcj8uYXV0aG9yTmFtZX08L3NwYW4+XHJcbiAgICAgICAgKX1cclxuICAgICAgICB7KHR5cGUgPT09IFwiYWRkXCIgfHwgdHlwZSA9PT0gXCJzaG93XCIpICYmIChcclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImF1dGhvclwiPlJlbGF0aW9uOiB7Y2hhcmFjdGVyPy5yZWxhdGlvbn08L3NwYW4+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9maWdjYXB0aW9uPlxyXG4gICAgPC9maWd1cmU+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXJhY3RlckNhcmQ7XHJcbiIsImltcG9ydCB7IFJvdywgQ29sLCBFbXB0eSB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IE1hc29ucnksIHsgUmVzcG9uc2l2ZU1hc29ucnkgfSBmcm9tIFwicmVhY3QtcmVzcG9uc2l2ZS1tYXNvbnJ5XCI7XHJcblxyXG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi4vY29tbW9uL0NhcmRcIjtcclxuaW1wb3J0IFVzZXJDYXJkIGZyb20gXCIuLi9jb21tb24vVXNlckNhcmRcIjtcclxuaW1wb3J0IENoYXJhY3RlckNhcmQgZnJvbSBcIi4uL2NvbW1vbi9DaGFyYWN0ZXJDYXJkXCI7XHJcbmltcG9ydCBMb2NhdGlvbkNhcmQgZnJvbSBcIi4uL2NvbW1vbi9Mb2NhdGlvbkNhcmRcIjtcclxuaW1wb3J0IHsgZHVtbXkgfSBmcm9tIFwiLi4vLi4vdXRpbHMvZHVtbXlcIjtcclxuXHJcbmNvbnN0IFN0b3JpZXNHcmlkID0gKHsgc3RvcmllcywgdHlwZSwgZ3V0dGVyLCBjb2x1bW5zQ291bnRCcmVha1BvaW50cyB9KSA9PiB7XHJcbiAgcmV0dXJuIHN0b3JpZXMubGVuZ3RoID4gMCA/IChcclxuICAgIDxSZXNwb25zaXZlTWFzb25yeSBjb2x1bW5zQ291bnRCcmVha1BvaW50cz17Y29sdW1uc0NvdW50QnJlYWtQb2ludHN9PlxyXG4gICAgICA8TWFzb25yeSBndXR0ZXI9e2d1dHRlcn0+XHJcbiAgICAgICAge3N0b3JpZXMubWFwKChzdG9yeSkgPT4gKFxyXG4gICAgICAgICAgPExpbmsga2V5PXtzdG9yeS5pZH0gaHJlZj17YC9zdG9yeS8ke3N0b3J5LmlkfWB9PlxyXG4gICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICA8Q2FyZCBzdG9yeT17c3Rvcnl9IHR5cGU9e3R5cGV9IC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9NYXNvbnJ5PlxyXG4gICAgPC9SZXNwb25zaXZlTWFzb25yeT5cclxuICApIDogKFxyXG4gICAgPEVtcHR5IGltYWdlPXtFbXB0eS5QUkVTRU5URURfSU1BR0VfU0lNUExFfSBkZXNjcmlwdGlvbj1cIk5vIHN0b3JpZXMgeWV0XCIgLz5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgTWluaUdyaWQgPSAoeyBzdG9yaWVzLCB0eXBlLCBndXR0ZXIsIGNvbHVtbnNDb3VudEJyZWFrUG9pbnRzIH0pID0+IHtcclxuICByZXR1cm4gc3Rvcmllcy5sZW5ndGggPiAwID8gKFxyXG4gICAgc3Rvcmllcy5tYXAoKHN0b3J5KSA9PiAoXHJcbiAgICAgIDxmaWd1cmUga2V5PXtzdG9yeS5pZH0gY2xhc3NOYW1lPVwibWluaS1jYXJkXCI+XHJcbiAgICAgICAgPGltZyBzcmM9e3N0b3J5LmJhbm5lciA/IHN0b3J5LmJhbm5lciA6IGR1bW15LmNvdmVyfSBhbHQ9XCJpbWFnZVwiIC8+XHJcbiAgICAgICAgPGZpZ2NhcHRpb24+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdC1ibG9ja1wiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjYXRcIj5EcmFtYTwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGgzPntzdG9yeS50aXRsZX08L2gzPlxyXG4gICAgICAgIDwvZmlnY2FwdGlvbj5cclxuICAgICAgPC9maWd1cmU+XHJcbiAgICApKVxyXG4gICkgOiAoXHJcbiAgICA8RW1wdHkgaW1hZ2U9e0VtcHR5LlBSRVNFTlRFRF9JTUFHRV9TSU1QTEV9IGRlc2NyaXB0aW9uPVwiTm8gc3RvcmllcyB5ZXRcIiAvPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBVc2VyR3JpZCA9ICh7IHVzZXJzLCB4bCwgbGcsIHhzLCBzbSwgbWQsIGd1dHRlciB9KSA9PiB7XHJcbiAgcmV0dXJuIHVzZXJzLmxlbmd0aCA+IDAgPyAoXHJcbiAgICA8Um93IGd1dHRlcj17Z3V0dGVyfT5cclxuICAgICAge3VzZXJzLm1hcCgodSkgPT4gKFxyXG4gICAgICAgIDxDb2wga2V5PXt1LmlkfSB4bD17eGx9IGxnPXtsZ30gbWQ9e21kfSBzbT17c219IHhzPXt4c30+XHJcbiAgICAgICAgICA8VXNlckNhcmQgdXNlcj17dX0gLz5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgKSl9XHJcbiAgICA8L1Jvdz5cclxuICApIDogKFxyXG4gICAgPEVtcHR5XHJcbiAgICAgIGltYWdlPXtFbXB0eS5QUkVTRU5URURfSU1BR0VfU0lNUExFfVxyXG4gICAgICBkZXNjcmlwdGlvbj1cIk5vIGZvbGxvd2VycyB5ZXRcIlxyXG4gICAgLz5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgTG9jYXRpb25HcmlkID0gKHtcclxuICBsb2NhdGlvbnMsXHJcbiAgZ3V0dGVyLFxyXG4gIHhsLFxyXG4gIHh4bCxcclxuICBsZyxcclxuICBtZCxcclxuICBzbSxcclxuICB4cyxcclxuICB0eXBlLFxyXG4gIGNvbHVtbnNDb3VudEJyZWFrUG9pbnRzLFxyXG59KSA9PiB7XHJcbiAgcmV0dXJuIGxvY2F0aW9ucy5sZW5ndGggPiAwID8gKFxyXG4gICAgPFJlc3BvbnNpdmVNYXNvbnJ5IGNvbHVtbnNDb3VudEJyZWFrUG9pbnRzPXtjb2x1bW5zQ291bnRCcmVha1BvaW50c30+XHJcbiAgICAgIDxNYXNvbnJ5IGd1dHRlcj17Z3V0dGVyfT5cclxuICAgICAgICB7bG9jYXRpb25zLm1hcCgoYykgPT4gKFxyXG4gICAgICAgICAgPExvY2F0aW9uQ2FyZCBrZXk9e2MuaWR9IGxvY2F0aW9uPXtjfSB0eXBlPXt0eXBlfSAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L01hc29ucnk+XHJcbiAgICA8L1Jlc3BvbnNpdmVNYXNvbnJ5PlxyXG4gICkgOiAoXHJcbiAgICA8RW1wdHlcclxuICAgICAgaW1hZ2U9e0VtcHR5LlBSRVNFTlRFRF9JTUFHRV9TSU1QTEV9XHJcbiAgICAgIGRlc2NyaXB0aW9uPVwiTm8gbG9jYXRpb25zIHlldFwiXHJcbiAgICAvPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBDaGFyYWN0ZXJHcmlkID0gKHtcclxuICBndXR0ZXIsXHJcbiAgeHhsLFxyXG4gIHhsLFxyXG4gIGxnLFxyXG4gIG1kLFxyXG4gIHNtLFxyXG4gIHhzLFxyXG4gIGNoYXJhY3RlcnMsXHJcbiAgdHlwZSxcclxuICBjb2x1bW5zQ291bnRCcmVha1BvaW50cyxcclxufSkgPT4ge1xyXG4gIHJldHVybiBjaGFyYWN0ZXJzLmxlbmd0aCA+IDAgPyAoXHJcbiAgICA8UmVzcG9uc2l2ZU1hc29ucnkgY29sdW1uc0NvdW50QnJlYWtQb2ludHM9e2NvbHVtbnNDb3VudEJyZWFrUG9pbnRzfT5cclxuICAgICAgPE1hc29ucnkgZ3V0dGVyPXtndXR0ZXJ9PlxyXG4gICAgICAgIHtjaGFyYWN0ZXJzLm1hcCgoYykgPT4gKFxyXG4gICAgICAgICAgPExpbmsga2V5PXtjLmlkfSBocmVmPXtgL2NoYXJhY3Rlci8ke2MuaWR9YH0+XHJcbiAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgIDxDaGFyYWN0ZXJDYXJkIGNoYXJhY3Rlcj17Y30gdHlwZT17dHlwZX0gLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L01hc29ucnk+XHJcbiAgICA8L1Jlc3BvbnNpdmVNYXNvbnJ5PlxyXG4gICkgOiAoXHJcbiAgICA8RW1wdHlcclxuICAgICAgaW1hZ2U9e0VtcHR5LlBSRVNFTlRFRF9JTUFHRV9TSU1QTEV9XHJcbiAgICAgIGRlc2NyaXB0aW9uPVwiTm8gY2hhcmFjdGVycyB5ZXRcIlxyXG4gICAgLz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgU3Rvcmllc0dyaWQsIENoYXJhY3RlckdyaWQsIFVzZXJHcmlkLCBMb2NhdGlvbkdyaWQsIE1pbmlHcmlkIH07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTW9kYWwsIEJ1dHRvbiB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmltcG9ydCB7IGR1bW15IH0gZnJvbSBcIi4uLy4uL3V0aWxzL2R1bW15XCI7XHJcblxyXG5jb25zdCBMb2NhdGlvbkNhcmQgPSAoeyBsb2NhdGlvbiwgdHlwZSB9KSA9PiB7XHJcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZmlndXJlXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiY2FyZCBjaGFyYWN0ZXItY2FyZFwiXHJcbiAgICAgICAgZGF0YS1hb3M9XCJ6b29tLWluLXVwXCJcclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRWaXNpYmxlKHRydWUpfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz17bG9jYXRpb24uaW1hZ2UgPyBsb2NhdGlvbi5pbWFnZSA6IGR1bW15Lm5vSW1hZ2V9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGZpZ2NhcHRpb24+XHJcbiAgICAgICAgICA8aDM+e2xvY2F0aW9uLm5hbWV9PC9oMz5cclxuICAgICAgICAgIHt0eXBlICE9PSBcInN0b3J5XCIgJiYgKFxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhdXRob3JcIj5TdG9yeToge2xvY2F0aW9uLnN0b3J5VGl0bGV9PC9zcGFuPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2ZpZ2NhcHRpb24+XHJcbiAgICAgIDwvZmlndXJlPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICB0aXRsZT17bG9jYXRpb24ubmFtZX1cclxuICAgICAgICB2aXNpYmxlPXt2aXNpYmxlfVxyXG4gICAgICAgIG9uQ2FuY2VsPXsoKSA9PiBzZXRWaXNpYmxlKGZhbHNlKX1cclxuICAgICAgICBmb290ZXI9e1tcclxuICAgICAgICAgIDxCdXR0b24ga2V5PVwic3VibWl0XCIgdHlwZT1cInByaW1hcnlcIiBvbkNsaWNrPXsoKSA9PiBzZXRWaXNpYmxlKGZhbHNlKX0+XHJcbiAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICA8L0J1dHRvbj4sXHJcbiAgICAgICAgXX1cclxuICAgICAgPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm1vZGFsLWltZ1wiXHJcbiAgICAgICAgICBzcmM9e2xvY2F0aW9uLmltYWdlID8gbG9jYXRpb24uaW1hZ2UgOiBkdW1teS5ub0ltYWdlfVxyXG4gICAgICAgICAgYWx0PXtsb2NhdGlvbi5uYW1lfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHA+e2xvY2F0aW9uLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICB7dHlwZSAhPT0gXCJzdG9yeVwiICYmIChcclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1vZGFsLXN0b3J5LWxpbmtcIj5cclxuICAgICAgICAgICAgU3Rvcnk6e1wiIFwifVxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtgL3N0b3J5LyR7bG9jYXRpb24uc3RvcnlJZH1gfT5cclxuICAgICAgICAgICAgICA8YT57bG9jYXRpb24uc3RvcnlUaXRsZX08L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICApfVxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvY2F0aW9uQ2FyZDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBQYWdpbmF0aW9uIGFzIFBhZ2luYXRlLCBEaXZpZGVyIH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmltcG9ydCB7IENoYXJhY3RlckdyaWQsIExvY2F0aW9uR3JpZCwgU3Rvcmllc0dyaWQsIFVzZXJHcmlkIH0gZnJvbSBcIi4vR3JpZFwiO1xyXG5cclxuY29uc3QgUGFnaW5hdGlvbiA9ICh7XHJcbiAgZGF0YSxcclxuICB4cyxcclxuICBzbSxcclxuICBsZyxcclxuICB4bCxcclxuICBtZCxcclxuICB0eXBlLFxyXG4gIGd1dHRlcixcclxuICBjb2x1bW5zQ291bnRCcmVha1BvaW50cyxcclxuICBpdGVtVHlwZSxcclxufSkgPT4ge1xyXG4gIGNvbnN0IFtwYWdpbmF0aW9uLCBzZXRQYWdpbmF0aW9uXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgIGN1cnJlbnRQYWdlOiAxLFxyXG4gICAgZGF0YXNQZXJQYWdlOiAxMixcclxuICB9KTtcclxuICBjb25zdCB7IGN1cnJlbnRQYWdlLCBkYXRhc1BlclBhZ2UgfSA9IHBhZ2luYXRpb247XHJcbiAgY29uc3QgaW5kZXhPZkxhc3REYXRhID0gY3VycmVudFBhZ2UgKiBkYXRhc1BlclBhZ2U7XHJcbiAgY29uc3QgaW5kZXhPZkZpcnN0RGF0YSA9IGluZGV4T2ZMYXN0RGF0YSAtIGRhdGFzUGVyUGFnZTtcclxuXHJcbiAgUmVhY3QudXNlU3RhdGUoKCkgPT4ge30sIFtkYXRhXSk7XHJcblxyXG4gIGNvbnN0IGN1cnJlbnREYXRhcyA9IGRhdGEuc2xpY2UoaW5kZXhPZkZpcnN0RGF0YSwgaW5kZXhPZkxhc3REYXRhKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG4gICAgc2V0UGFnaW5hdGlvbih7IC4uLnBhZ2luYXRpb24sIGN1cnJlbnRQYWdlOiBOdW1iZXIoZSkgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyRGF0YXMgPVxyXG4gICAgaXRlbVR5cGUgPT09IFwic3Rvcmllc1wiID8gKFxyXG4gICAgICA8U3Rvcmllc0dyaWRcclxuICAgICAgICBndXR0ZXI9e2d1dHRlcn1cclxuICAgICAgICB0eXBlPXt0eXBlfVxyXG4gICAgICAgIHN0b3JpZXM9e2N1cnJlbnREYXRhc31cclxuICAgICAgICBjb2x1bW5zQ291bnRCcmVha1BvaW50cz17Y29sdW1uc0NvdW50QnJlYWtQb2ludHN9XHJcbiAgICAgIC8+XHJcbiAgICApIDogaXRlbVR5cGUgPT09IFwiY2hhcmFjdGVyc1wiID8gKFxyXG4gICAgICA8Q2hhcmFjdGVyR3JpZFxyXG4gICAgICAgIGNvbHVtbnNDb3VudEJyZWFrUG9pbnRzPXtjb2x1bW5zQ291bnRCcmVha1BvaW50c31cclxuICAgICAgICBndXR0ZXI9e2d1dHRlcn1cclxuICAgICAgICB0eXBlPXt0eXBlfVxyXG4gICAgICAgIGNoYXJhY3RlcnM9e2N1cnJlbnREYXRhc31cclxuICAgICAgLz5cclxuICAgICkgOiBpdGVtVHlwZSA9PT0gXCJsb2NhdGlvbnNcIiA/IChcclxuICAgICAgPExvY2F0aW9uR3JpZFxyXG4gICAgICAgIGxvY2F0aW9ucz17Y3VycmVudERhdGFzfVxyXG4gICAgICAgIGd1dHRlcj17Z3V0dGVyfVxyXG4gICAgICAgIHR5cGU9e3R5cGV9XHJcbiAgICAgICAgY29sdW1uc0NvdW50QnJlYWtQb2ludHM9e2NvbHVtbnNDb3VudEJyZWFrUG9pbnRzfVxyXG4gICAgICAvPlxyXG4gICAgKSA6IGl0ZW1UeXBlID09PSBcImZvbGxvd2Vyc1wiIHx8IGl0ZW1UeXBlID09PSBcInVzZXJzXCIgPyAoXHJcbiAgICAgIDxVc2VyR3JpZFxyXG4gICAgICAgIGd1dHRlcj17Z3V0dGVyfVxyXG4gICAgICAgIHR5cGU9e3R5cGV9XHJcbiAgICAgICAgeHM9e3hzfVxyXG4gICAgICAgIHNtPXtzbX1cclxuICAgICAgICBsZz17bGd9XHJcbiAgICAgICAgbWQ9e21kfVxyXG4gICAgICAgIHVzZXJzPXtjdXJyZW50RGF0YXN9XHJcbiAgICAgIC8+XHJcbiAgICApIDogbnVsbDtcclxuXHJcbiAgbGV0IHBhZ2VOdW1iZXJzID0gW107XHJcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gTWF0aC5jZWlsKGRhdGEubGVuZ3RoIC8gZGF0YXNQZXJQYWdlKTsgaSsrKSB7XHJcbiAgICBwYWdlTnVtYmVycy5wdXNoKGkpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAge3JlbmRlckRhdGFzfVxyXG4gICAgICA8RGl2aWRlciAvPlxyXG4gICAgICA8UGFnaW5hdGVcclxuICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgIHNob3dRdWlja0p1bXBlclxyXG4gICAgICAgIGhpZGVPblNpbmdsZVBhZ2VcclxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2xpY2t9XHJcbiAgICAgICAgdG90YWw9e2RhdGEubGVuZ3RofVxyXG4gICAgICAgIHBhZ2VTaXplPXtkYXRhc1BlclBhZ2V9XHJcbiAgICAgICAgc2hvd1RvdGFsPXsodG90YWwpID0+IGBUb3RhbCAke3RvdGFsfSBpdGVtc2B9XHJcbiAgICAgIC8+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdpbmF0aW9uO1xyXG4iLCJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IFNwYWNlIH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmNvbnN0IFVzZXJDYXJkID0gKHsgdXNlciB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMaW5rIGhyZWY9e2AvcHJvZmlsZS8ke3VzZXIuaWR9YH0+XHJcbiAgICAgIDxhPlxyXG4gICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwidXNlci1jYXJkXCIgZGF0YS1hb3M9XCJmbGlwLWxlZnRcIj5cclxuICAgICAgICAgIDxTcGFjZSBkaXJlY3Rpb249XCJ2ZXJ0aWNhbFwiIHNpemU9ezEyfSBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZy1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICB7dXNlci5pbWFnZSA/IChcclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt1c2VyLmltYWdlfSBhbHQ9e2BwaG90byAke3VzZXIudXNlcm5hbWV9YH0gLz5cclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPGlvbi1pY29uIG5hbWU9XCJwZXJzb25cIj48L2lvbi1pY29uPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZmlnY2FwdGlvbj57dXNlci51c2VybmFtZX08L2ZpZ2NhcHRpb24+XHJcbiAgICAgICAgICA8L1NwYWNlPlxyXG4gICAgICAgIDwvZmlndXJlPlxyXG4gICAgICA8L2E+XHJcbiAgICA8L0xpbms+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJDYXJkO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBMb2FkaW5nU2NyZWVuID0gKHsgY2hpbGRyZW4sIGxvYWRpbmcgfSkgPT4ge1xyXG4gIHJldHVybiAhbG9hZGluZyA/IChcclxuICAgIGNoaWxkcmVuXHJcbiAgKSA6IChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGVyLWNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRlclwiPlxyXG4gICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2FkaW5nU2NyZWVuO1xyXG4iLCJpbXBvcnQgeyBSZXN1bHQsIEJ1dHRvbiB9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5jb25zdCBSZWRpcmVjdENvbXAgPSAoeyBjb25kaXRpb24sIHR5cGUsIGNoaWxkcmVuLCB2ZXJpZnlFbWFpbCB9KSA9PiB7XHJcbiAgcmV0dXJuIGNvbmRpdGlvbiA/IChcclxuICAgIGNoaWxkcmVuXHJcbiAgKSA6IHR5cGUgPT09IFwiNDA0XCIgPyAoXHJcbiAgICA8UmVzdWx0XHJcbiAgICAgIHN0YXR1cz1cIjQwNFwiXHJcbiAgICAgIHRpdGxlPVwiNDA0XCJcclxuICAgICAgc3ViVGl0bGU9XCJTb3JyeSwgdGhlIHBhZ2UgeW91IHZpc2l0ZWQgZG9lcyBub3QgZXhpc3QuXCJcclxuICAgICAgZXh0cmE9ezxCdXR0b24gdHlwZT1cInByaW1hcnlcIj5CYWNrIEhvbWU8L0J1dHRvbj59XHJcbiAgICAvPlxyXG4gICkgOiB0eXBlID09PSBcIjQwM1wiID8gKFxyXG4gICAgPFJlc3VsdFxyXG4gICAgICBzdGF0dXM9XCI0MDNcIlxyXG4gICAgICB0aXRsZT1cIjQwM1wiXHJcbiAgICAgIHN1YlRpdGxlPVwiU29ycnksIHlvdSBhcmUgbm90IGF1dGhvcml6ZWQgdG8gYWNjZXNzIHRoaXMgcGFnZS5cIlxyXG4gICAgICBleHRyYT17PEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiPkJhY2sgSG9tZTwvQnV0dG9uPn1cclxuICAgIC8+XHJcbiAgKSA6IHR5cGUgPT09IFwicmVkaXJlY3RcIiA/IChcclxuICAgICh3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL2F1dGhcIilcclxuICApIDogdHlwZSA9PT0gXCJ2ZXJpZnlcIiA/IChcclxuICAgIDxSZXN1bHRcclxuICAgICAgc3RhdHVzPVwiNDAzXCJcclxuICAgICAgdGl0bGU9XCI0MDNcIlxyXG4gICAgICBzdWJUaXRsZT1cIlNvcnJ5LCB5b3UgY2Fubm90IHBvc3QgdW50aWwgeW91IHZlcmlmeSB5b3VyIGVtYWlsXCJcclxuICAgICAgZXh0cmE9e1xyXG4gICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBvbkNsaWNrPXsoKSA9PiB2ZXJpZnlFbWFpbCgpfT5cclxuICAgICAgICAgIFNlbmQgYSBuZXcgZW1haWxcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgfVxyXG4gICAgLz5cclxuICApIDogKFxyXG4gICAgPGRpdj48L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVkaXJlY3RDb21wO1xyXG4iLCJpbXBvcnQgeyBSb3csIENvbCwgU3BhY2UsIFRvb2x0aXAsIEltYWdlIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBkdW1teSB9IGZyb20gXCIuLi8uLi91dGlscy9kdW1teVwiO1xyXG5cclxuaW1wb3J0IEZhdm9yaXRlcyBmcm9tIFwiLi9GYXZvcml0ZXNcIjtcclxuXHJcbmNvbnN0IEJhbm5lciA9ICh7XHJcbiAgb3BlblNldHRpbmdzLFxyXG4gIHByb2ZpbGUsXHJcbiAgZmF2QXV0aG9ycyxcclxuICBmb2xsb3dlcnMsXHJcbiAgY2hhbmdlRmF2VGFiLFxyXG4gIGZhdlRhYixcclxuICBzZXRDdXJyZW50VGFiLFxyXG4gIGNvbnRleHQsXHJcbiAgaXNGb2xsb3dpbmcsXHJcbiAgZm9sbG93VXNlcixcclxuICB1bmZvbGxvd1VzZXIsXHJcbiAgYXV0aCxcclxuICBpZCxcclxufSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lclwiPlxyXG4gICAgICA8Um93IGd1dHRlcj17MTZ9PlxyXG4gICAgICAgIDxDb2wgeGw9ezE4fSBsZz17MjR9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLXRvcFwiPlxyXG4gICAgICAgICAgICA8Um93IGd1dHRlcj17MzJ9IGFsaWduPVwibWlkZGxlXCI+XHJcbiAgICAgICAgICAgICAgPENvbCB4cz17MjR9IHNtPXs4fSBtZD17OX0gbGc9ezd9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBkYXRhLWljb249XCJpbWFnZVwiIGNsYXNzTmFtZT1cImF2YXRhclwiPlxyXG4gICAgICAgICAgICAgICAgICB7cHJvZmlsZS5pbWFnZSA/IChcclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17cHJvZmlsZT8uaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9e3Byb2ZpbGUudXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MjMwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyMzB9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8aW9uLWljb24gbmFtZT1cInBlcnNvblwiPjwvaW9uLWljb24+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8Q29sIG1kPXsxNX0gbGc9ezE3fSBzbT17MTZ9IHhzPXsyNH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2NvbnRleHQgPT09IFwicHJpdmF0ZVwiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uIGN1c3RvbS1pY29uIHNldHRpbmdzLWljb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvcGVuU2V0dGluZ3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpb24taWNvbiBuYW1lPVwic2V0dGluZ3NcIj48L2lvbi1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IGF1dGgudXNlciA/IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ZvbGxvd2luZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB1bmZvbGxvd1VzZXIoaWQsIGlzRm9sbG93aW5nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBmb2xsb3dVc2VyKGlkLCBpc0ZvbGxvd2luZywgYXV0aC51c2VyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvbGxvdy1idG4gYWRkLWJ0bi1jaXJjbGUgJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ZvbGxvd2luZyA/IFwiZm9sbG93ZWRcIiA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpb24taWNvbiBuYW1lPVwiYWRkLWNpcmNsZVwiPjwvaW9uLWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntgJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ZvbGxvd2luZyA/IFwiVW5mb2xsb3dcIiA6IFwiRm9sbG93XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSB0aGlzIGF1dGhvcmB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyPntwcm9maWxlPy51c2VybmFtZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTcGFjZSBzaXplPXszMH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb2xsb3ctY291bnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2ZvbGxvd2Vycz8uYXV0aG9ycy5sZW5ndGh9IGZvbGxvd2Vyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9sbG93LWNvdW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtmYXZBdXRob3JzPy5hdXRob3JzLmxlbmd0aH0gZm9sbG93aW5nc1xyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU3BhY2U+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYmlvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7cHJvZmlsZS5iaW9ncmFwaHkgJiYgcHJvZmlsZT8uYmlvZ3JhcGh5fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFNwYWNlIHNpemU9ezMwfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb2ZpbGUuZmFjZWJvb2sgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3Byb2ZpbGU/LmZhY2Vib29rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24gY3VzdG9tLWljb24gZmItaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpb24taWNvbiBuYW1lPVwibG9nby1mYWNlYm9va1wiPjwvaW9uLWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb2ZpbGUudHdpdHRlciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17cHJvZmlsZT8udHdpdHRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uIGN1c3RvbS1pY29uIHR3aXR0ZXItaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpb24taWNvbiBuYW1lPVwibG9nby10d2l0dGVyXCI+PC9pb24taWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvZmlsZS5pbnN0YWdyYW0gJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3Byb2ZpbGU/Lmluc3RhZ3JhbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uIGN1c3RvbS1pY29uIGluc3RhZ3JhbS1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlvbi1pY29uIG5hbWU9XCJsb2dvLWluc3RhZ3JhbVwiPjwvaW9uLWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb2ZpbGUuZGV2aWFudGFydCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17cHJvZmlsZT8uZGV2aWFudGFydH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uIGN1c3RvbS1pY29uIGRldmlhbnRhcnQtaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpb24taWNvbiBuYW1lPVwibG9nby1kZXZpYW50YXJ0XCI+PC9pb24taWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9TcGFjZT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgICA8Q29sIGZsZXg9XCJhdXRvXCIgeGw9ezZ9IGxnPXsyNH0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJpb1wiPlxyXG4gICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1vcmVcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgICBmYXZUYWIgPT09IFwiZmF2YXV0aG9yc1wiXHJcbiAgICAgICAgICAgICAgICAgID8gc2V0Q3VycmVudFRhYihcImZvbGxvd2luZ3NcIilcclxuICAgICAgICAgICAgICAgICAgOiBzZXRDdXJyZW50VGFiKFwiZm9sbG93ZXJzXCIpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHNwYW4+U2VlIGFsbCAmZ3Q7Jmd0OyZndDs8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWdtZW50ZWQtY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJyYWRpbzJcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9XCIzXCJcclxuICAgICAgICAgICAgICAgIGlkPVwidGFiLTFcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2hhbmdlRmF2VGFiKFwiZmF2YXV0aG9yc1wiKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGFiLTFcIiBjbGFzc05hbWU9XCJzZWdtZW50ZWQtY29udHJvbF9fMVwiPlxyXG4gICAgICAgICAgICAgICAgPHA+UmVjZW50IEZvbGxvd2luZ3M8L3A+XHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuXHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInJhZGlvMlwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT1cIjRcIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJ0YWItMlwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VGYXZUYWIoXCJmb2xsb3dlcnNcIil9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRhYi0yXCIgY2xhc3NOYW1lPVwic2VnbWVudGVkLWNvbnRyb2xfXzJcIj5cclxuICAgICAgICAgICAgICAgIDxwPlJlY2VudCBGb2xsb3dlcnM8L3A+XHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWdtZW50ZWQtY29udHJvbF9fY29sb3JcIj48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtmYXZUYWIgPT09IFwiZmF2YXV0aG9yc1wiICYmIChcclxuICAgICAgICAgICAgICA8RmF2b3JpdGVzIHNldEN1cnJlbnRUYWI9e3NldEN1cnJlbnRUYWJ9IGZhdnM9e2ZhdkF1dGhvcnN9IC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHtmYXZUYWIgPT09IFwiZm9sbG93ZXJzXCIgJiYgKFxyXG4gICAgICAgICAgICAgIDxGYXZvcml0ZXMgc2V0Q3VycmVudFRhYj17c2V0Q3VycmVudFRhYn0gZmF2cz17Zm9sbG93ZXJzfSAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgIDwvUm93PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhbm5lcjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBEaXZpZGVyIH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gXCIuLi9jb21tb24vUGFnaW5hdGlvblwiO1xyXG5pbXBvcnQgU29ydElucHV0IGZyb20gXCIuL1NvcnRJbnB1dFwiO1xyXG5cclxuY29uc3QgQ2hhcmFjdGVycyA9ICh7IGNoYXJhY3RlcnMsIHR5cGUsIGNvbnRleHQgfSkgPT4ge1xyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldERhdGEoY2hhcmFjdGVycyk7XHJcbiAgfSwgW2NoYXJhY3RlcnNdKTtcclxuXHJcbiAgY29uc3Qgb3B0aW9ucyA9IFtcclxuICAgIHsgbmFtZTogXCJEYXRlIChhc2NlbmRpbmcpXCIsIHZhbHVlOiBcImRhdGUtYXNjXCIgfSxcclxuICAgIHsgbmFtZTogXCJEYXRlIChkZXNjZW5kaW5nKVwiLCB2YWx1ZTogXCJkYXRlLWRlc2NcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkZpcnN0bmFtZSAoYXNjZW5kaW5nKVwiLCB2YWx1ZTogXCJmaXJzdG5hbWUtYXNjXCIgfSxcclxuICAgIHsgbmFtZTogXCJGaXJzdG5hbWUgKGRlc2NlbmRpbmcpXCIsIHZhbHVlOiBcImZpcnN0bmFtZS1kZXNjXCIgfSxcclxuICAgIHsgbmFtZTogXCJMYXN0bmFtZSAoYXNjZW5kaW5nKVwiLCB2YWx1ZTogXCJsYXN0bmFtZS1hc2NcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkxhc3RuYW1lIChkZXNjZW5kaW5nKVwiLCB2YWx1ZTogXCJsYXN0bmFtZS1kZXNjXCIgfSxcclxuICBdO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWNoYXJhY3RlcnNcIj5cclxuICAgICAgPFNvcnRJbnB1dFxyXG4gICAgICAgIHR5cGU9XCJjaGFyYWN0ZXJzXCJcclxuICAgICAgICBpdGVtRGF0YT17Y2hhcmFjdGVyc31cclxuICAgICAgICB0aXRsZT17XHJcbiAgICAgICAgICB0eXBlICE9PSBcImZhdm9yaXRlc1wiXHJcbiAgICAgICAgICAgID8gY2hhcmFjdGVycy5sZW5ndGggPiAxXHJcbiAgICAgICAgICAgICAgPyBcIkNoYXJhY3RlcnNcIlxyXG4gICAgICAgICAgICAgIDogXCJDaGFyYWN0ZXJcIlxyXG4gICAgICAgICAgICA6IGNoYXJhY3RlcnMubGVuZ3RoID4gMVxyXG4gICAgICAgICAgICA/IFwiRmF2b3JpdGUgQ2hhcmFjdGVyc1wiXHJcbiAgICAgICAgICAgIDogXCJGYXZvcml0ZSBDaGFyYWN0ZXJcIlxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXREYXRhPXtzZXREYXRhfVxyXG4gICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XHJcbiAgICAgICAgY29udGV4dD17Y29udGV4dH1cclxuICAgICAgLz5cclxuICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgPFBhZ2luYXRpb25cclxuICAgICAgICBkYXRhPXtkYXRhfVxyXG4gICAgICAgIHR5cGU9e3R5cGV9XHJcbiAgICAgICAgZ3V0dGVyPXtcIjE2cHhcIn1cclxuICAgICAgICBpdGVtVHlwZT1cImNoYXJhY3RlcnNcIlxyXG4gICAgICAgIGNvbHVtbnNDb3VudEJyZWFrUG9pbnRzPXt7IDM1MDogMSwgNzUwOiAyLCA5MDA6IDMsIDEyMDA6IDQsIDE2MDA6IDYgfX1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGFyYWN0ZXJzO1xyXG4iLCJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IFJvdywgQ29sLCBUb29sdGlwLCBTcGluIH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmNvbnN0IEZhdm9yaXRlcyA9ICh7IGZhdnMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZhdm9yaXRlc1wiPlxyXG4gICAgICA8Um93IGd1dHRlcj17WzE1LCAxMF19PlxyXG4gICAgICAgIHtmYXZzLmlzTG9hZGluZyA/IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxTcGluIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgZmF2cy5hdXRob3JzLnNsaWNlKDAsIDEyKS5tYXAoKGZhdikgPT4gKFxyXG4gICAgICAgICAgICA8Q29sIGtleT17ZmF2LmlkfSBzcGFuPXs2fT5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3Byb2ZpbGUvJHtmYXYuaWR9YH0+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJmYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICA8VG9vbHRpcCB0aXRsZT17ZmF2LnVzZXJuYW1lfSBjb2xvcj17XCIjNmQ1ZGZjXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nLWNvbnRhaW5lci1ib3JkZXIgaW1nLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2Zhdi5pbWFnZSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Zhdi5pbWFnZX0gYWx0PXtgcGhvdG8gJHtmYXYudXNlcm5hbWV9YH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpb24taWNvbiBuYW1lPVwicGVyc29uXCI+PC9pb24taWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgKSlcclxuICAgICAgICApfVxyXG4gICAgICA8L1Jvdz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGYXZvcml0ZXM7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRGl2aWRlciB9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tIFwiLi4vY29tbW9uL1BhZ2luYXRpb25cIjtcclxuaW1wb3J0IFNvcnRJbnB1dCBmcm9tIFwiLi9Tb3J0SW5wdXRcIjtcclxuXHJcbmNvbnN0IEZvbGxvd2VycyA9ICh7IG1kLCBzbSwgeHMsIGxnLCBpdGVtcywgdGl0bGUsIHR5cGUgfSkgPT4ge1xyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldERhdGEoaXRlbXMpO1xyXG4gIH0sIFtpdGVtc10pO1xyXG5cclxuICBjb25zdCBvcHRpb25zID0gW1xyXG4gICAgeyBuYW1lOiBcIkRhdGUgKGFzY2VuZGluZylcIiwgdmFsdWU6IFwiZGF0ZS1hc2NcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkRhdGUgKGRlc2NlbmRpbmcpXCIsIHZhbHVlOiBcImRhdGUtZGVzY1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiVXNlcm5hbWUgKGFzY2VuZGluZylcIiwgdmFsdWU6IFwidXNlcm5hbWUtYXNjXCIgfSxcclxuICAgIHsgbmFtZTogXCJVc2VybmFtZSAoZGVzY2VuZGluZylcIiwgdmFsdWU6IFwidXNlcm5hbWUtZGVzY1wiIH0sXHJcbiAgXTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9sbG93ZXJzXCI+XHJcbiAgICAgIDxTb3J0SW5wdXRcclxuICAgICAgICB0eXBlPVwiZm9sbG93ZXJzXCJcclxuICAgICAgICBpdGVtRGF0YT17aXRlbXN9XHJcbiAgICAgICAgdGl0bGU9e3RpdGxlfVxyXG4gICAgICAgIHNldERhdGE9e3NldERhdGF9XHJcbiAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cclxuICAgICAgLz5cclxuICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgPFBhZ2luYXRpb25cclxuICAgICAgICBkYXRhPXtkYXRhfVxyXG4gICAgICAgIGd1dHRlcj17WzIwLCAzMF19XHJcbiAgICAgICAgaXRlbVR5cGU9XCJmb2xsb3dlcnNcIlxyXG4gICAgICAgIG1kPXttZH1cclxuICAgICAgICBzbT17c219XHJcbiAgICAgICAgeHM9e3hzfVxyXG4gICAgICAgIGxnPXtsZ31cclxuICAgICAgICB0eXBlPXt0eXBlfVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvbGxvd2VycztcclxuIiwiaW1wb3J0IHsgRm9ybSwgSW5wdXQsIFRvb2x0aXAsIFNwYWNlIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgTGlua0NvbXAgPSAoeyBuYW1lLCBsYWJlbCwgaW5mbywgc2V0SW5mbyB9KSA9PiB7XHJcbiAgY29uc3QgdmFsaWRhdGVfdXJsID0gKHVybCwgbmFtZSkgPT4ge1xyXG4gICAgaWYgKG5hbWUgPT09IFwidHdpdHRlclwiICYmIHVybCkge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgL14oaHR0cHM/OlxcL1xcLyk/KCh3ezN9XFwuKT8pdHdpdHRlclxcLmNvbVxcLygjIVxcLyk/W2EtejAtOV9dKyQvaS50ZXN0KHVybClcclxuICAgICAgKSB7XHJcbiAgICAgICAgc2V0SW5mbyh7XHJcbiAgICAgICAgICAuLi5pbmZvLFxyXG4gICAgICAgICAgZXJyb3JzOiB7XHJcbiAgICAgICAgICAgIC4uLmluZm8uZXJyb3JzLFxyXG4gICAgICAgICAgICB0d2l0dGVyOiBcIlwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRJbmZvKHtcclxuICAgICAgICAgIC4uLmluZm8sXHJcbiAgICAgICAgICBlcnJvcnM6IHtcclxuICAgICAgICAgICAgLi4uaW5mby5lcnJvcnMsXHJcbiAgICAgICAgICAgIHR3aXR0ZXI6IGBUaGUgbGluayBpcyBub3QgYSB2YWxpZCBUd2l0dGVyIHVybGAsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKG5hbWUgPT09IFwiZmFjZWJvb2tcIiAmJiB1cmwpIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIC9eKGh0dHBzPzpcXC9cXC8pPygod3szfVxcLik/KWZhY2Vib29rXFwuY29tXFwvKCMhXFwvKT9bYS16MC05X10rJC9pLnRlc3QodXJsKVxyXG4gICAgICApIHtcclxuICAgICAgICBzZXRJbmZvKHtcclxuICAgICAgICAgIC4uLmluZm8sXHJcbiAgICAgICAgICBlcnJvcnM6IHtcclxuICAgICAgICAgICAgLi4uaW5mby5lcnJvcnMsXHJcbiAgICAgICAgICAgIGZhY2Vib29rOiBcIlwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRJbmZvKHtcclxuICAgICAgICAgIC4uLmluZm8sXHJcbiAgICAgICAgICBlcnJvcnM6IHtcclxuICAgICAgICAgICAgLi4uaW5mby5lcnJvcnMsXHJcbiAgICAgICAgICAgIGZhY2Vib29rOiBgVGhlIGxpbmsgaXMgbm90IGEgdmFsaWQgRmFjZWJvb2sgdXJsYCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gXCJpbnN0YWdyYW1cIiAmJiB1cmwpIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIC9eKGh0dHBzPzpcXC9cXC8pPygod3szfVxcLik/KWluc3RhZ3JhbVxcLmNvbVxcLygjIVxcLyk/W2EtejAtOV9dKyQvaS50ZXN0KFxyXG4gICAgICAgICAgdXJsXHJcbiAgICAgICAgKVxyXG4gICAgICApIHtcclxuICAgICAgICBzZXRJbmZvKHtcclxuICAgICAgICAgIC4uLmluZm8sXHJcbiAgICAgICAgICBlcnJvcnM6IHtcclxuICAgICAgICAgICAgLi4uaW5mby5lcnJvcnMsXHJcbiAgICAgICAgICAgIGluc3RhZ3JhbTogXCJcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0SW5mbyh7XHJcbiAgICAgICAgICAuLi5pbmZvLFxyXG4gICAgICAgICAgZXJyb3JzOiB7XHJcbiAgICAgICAgICAgIC4uLmluZm8uZXJyb3JzLFxyXG4gICAgICAgICAgICBpbnN0YWdyYW06IGBUaGUgbGluayBpcyBub3QgYSB2YWxpZCBJbnN0YWdyYW0gdXJsYCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gXCJkZXZpYW50YXJ0XCIgJiYgdXJsKSB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICAvXihodHRwcz86XFwvXFwvKT8oKHd7M31cXC4pPylkZXZpYW50YXJ0XFwuY29tXFwvKCMhXFwvKT9bYS16MC05X10rJC9pLnRlc3QoXHJcbiAgICAgICAgICB1cmxcclxuICAgICAgICApXHJcbiAgICAgICkge1xyXG4gICAgICAgIHNldEluZm8oe1xyXG4gICAgICAgICAgLi4uaW5mbyxcclxuICAgICAgICAgIGVycm9yczoge1xyXG4gICAgICAgICAgICAuLi5pbmZvLmVycm9ycyxcclxuICAgICAgICAgICAgZGV2aWFudGFydDogXCJcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0SW5mbyh7XHJcbiAgICAgICAgICAuLi5pbmZvLFxyXG4gICAgICAgICAgZXJyb3JzOiB7XHJcbiAgICAgICAgICAgIC4uLmluZm8uZXJyb3JzLFxyXG4gICAgICAgICAgICBkZXZpYW50YXJ0OiBgVGhlIGxpbmsgaXMgbm90IGEgdmFsaWQgRGV2aWFudGFydCB1cmxgLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmICghdXJsKSB7XHJcbiAgICAgIHNldEluZm8oe1xyXG4gICAgICAgIC4uLmluZm8sXHJcbiAgICAgICAgZXJyb3JzOiB7XHJcbiAgICAgICAgICAuLi5pbmZvLmVycm9ycyxcclxuICAgICAgICAgIFtuYW1lXTogYGAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHZhbGlkYXRlX3VybChpbmZvLmZhY2Vib29rLCBcImZhY2Vib29rXCIpO1xyXG4gIH0sIFtpbmZvLmZhY2Vib29rXSk7XHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHZhbGlkYXRlX3VybChpbmZvLnR3aXR0ZXIsIFwidHdpdHRlclwiKTtcclxuICB9LCBbaW5mby50d2l0dGVyXSk7XHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHZhbGlkYXRlX3VybChpbmZvLmluc3RhZ3JhbSwgXCJpbnN0YWdyYW1cIik7XHJcbiAgfSwgW2luZm8uaW5zdGFncmFtXSk7XHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHZhbGlkYXRlX3VybChpbmZvLmRldmlhbnRhcnQsIFwiZGV2aWFudGFydFwiKTtcclxuICB9LCBbaW5mby5kZXZpYW50YXJ0XSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxJbnB1dFxyXG4gICAgICAgIGFkZG9uQmVmb3JlPXtcclxuICAgICAgICAgIDxUb29sdGlwIHRpdGxlPXtsYWJlbH0+XHJcbiAgICAgICAgICAgIDxpb24taWNvbiBuYW1lPXtgbG9nby0ke25hbWV9YH0+PC9pb24taWNvbj5cclxuICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICB9XHJcbiAgICAgICAgYWRkb25BZnRlcj17XHJcbiAgICAgICAgICAhaW5mby5lcnJvcnNbbmFtZV0gJiZcclxuICAgICAgICAgIGluZm9bbmFtZV0gJiYgPGlvbi1pY29uIG5hbWU9XCJjaGVja21hcmtcIj48L2lvbi1pY29uPlxyXG4gICAgICAgIH1cclxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgIHNldEluZm8oe1xyXG4gICAgICAgICAgICAuLi5pbmZvLFxyXG4gICAgICAgICAgICBbbmFtZV06IGUudGFyZ2V0LnZhbHVlLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfX1cclxuICAgICAgICBwbGFjZWhvbGRlcj17YEVudGVyIGEgbGluay4gRXg6IGh0dHBzOi8vJHtuYW1lfS5jb20vSmFuZURvZWB9XHJcbiAgICAgICAgdmFsdWU9e2luZm9bbmFtZV19XHJcbiAgICAgIC8+XHJcbiAgICAgIHtpbmZvLmVycm9yc1tuYW1lXSAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbnQtZm9ybS1pdGVtLWV4cGxhaW4gYW50LWZvcm0taXRlbS1leHBsYWluLWVycm9yXCI+XHJcbiAgICAgICAgICA8ZGl2IHJvbGU9XCJhbGVydFwiPntpbmZvLmVycm9yc1tuYW1lXX08L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaW5rQ29tcDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBEaXZpZGVyIH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gXCIuLi9jb21tb24vUGFnaW5hdGlvblwiO1xyXG5pbXBvcnQgU29ydElucHV0IGZyb20gXCIuL1NvcnRJbnB1dFwiO1xyXG5cclxuY29uc3QgTG9jYXRpb25zID0gKHsgbG9jYXRpb25zLCB0eXBlLCBjb250ZXh0IH0pID0+IHtcclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSBSZWFjdC51c2VTdGF0ZShbXSk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXREYXRhKGxvY2F0aW9ucyk7XHJcbiAgfSwgW2xvY2F0aW9uc10pO1xyXG5cclxuICBjb25zdCBvcHRpb25zID0gW1xyXG4gICAgeyBuYW1lOiBcIkRhdGUgKGFzY2VuZGluZylcIiwgdmFsdWU6IFwiZGF0ZS1hc2NcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkRhdGUgKGRlc2NlbmRpbmcpXCIsIHZhbHVlOiBcImRhdGUtZGVzY1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiTmFtZSAoYXNjZW5kaW5nKVwiLCB2YWx1ZTogXCJuYW1lLWFzY1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiTmFtZSAoZGVzY2VuZGluZylcIiwgdmFsdWU6IFwibmFtZS1kZXNjXCIgfSxcclxuICBdO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWNoYXJhY3RlcnNcIj5cclxuICAgICAgPFNvcnRJbnB1dFxyXG4gICAgICAgIHR5cGU9XCJsb2NhdGlvbnNcIlxyXG4gICAgICAgIGl0ZW1EYXRhPXtsb2NhdGlvbnN9XHJcbiAgICAgICAgdGl0bGU9e2xvY2F0aW9ucy5sZW5ndGggPiAxID8gXCJMb2NhdGlvbnNcIiA6IFwiTG9jYXRpb25cIn1cclxuICAgICAgICBzZXREYXRhPXtzZXREYXRhfVxyXG4gICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XHJcbiAgICAgICAgY29udGV4dD17Y29udGV4dH1cclxuICAgICAgLz5cclxuICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgPFBhZ2luYXRpb25cclxuICAgICAgICBkYXRhPXtkYXRhfVxyXG4gICAgICAgIHR5cGU9e3R5cGV9XHJcbiAgICAgICAgZ3V0dGVyPXtcIjE2cHhcIn1cclxuICAgICAgICBpdGVtVHlwZT1cImxvY2F0aW9uc1wiXHJcbiAgICAgICAgY29sdW1uc0NvdW50QnJlYWtQb2ludHM9e3sgMzUwOiAxLCA3NTA6IDIsIDkwMDogMywgMTIwMDogNCwgMTYwMDogNiB9fVxyXG4gICAgICAvPlxyXG4gICAgICB7LyogPExvY2F0aW9uR3JpZFxyXG4gICAgICAgIGxvY2F0aW9ucz17bG9jYXRpb25zfVxyXG4gICAgICAgIHh4bD17NH1cclxuICAgICAgICBzbT17MTJ9XHJcbiAgICAgICAgc3g9ezEyfVxyXG4gICAgICAgIG1kPXs4fVxyXG4gICAgICAgIHhsPXs2fVxyXG4gICAgICAgIGxnPXs4fVxyXG4gICAgICAgIGd1dHRlcj17WzE2LCAxNl19XHJcbiAgICAgICAgdHlwZT17dHlwZX1cclxuICAgICAgLz4gKi99XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9jYXRpb25zO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgVGFicyxcclxuICBGb3JtLFxyXG4gIElucHV0LFxyXG4gIE1vZGFsLFxyXG4gIFVwbG9hZCxcclxuICBtZXNzYWdlLFxyXG4gIEJ1dHRvbixcclxuICBQb3Bjb25maXJtLFxyXG59IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7XHJcbiAgTG9ja091dGxpbmVkLFxyXG4gIFVzZXJPdXRsaW5lZCxcclxuICBMaW5rT3V0bGluZWQsXHJcbiAgRmlsZUltYWdlT3V0bGluZWQsXHJcbiAgTG9hZGluZ091dGxpbmVkLFxyXG4gIFBsdXNPdXRsaW5lZCxcclxuICBTdGFyT3V0bGluZWQsXHJcbiAgRWRpdE91dGxpbmVkLFxyXG4gIERlbGV0ZU91dGxpbmVkLFxyXG59IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5cclxuaW1wb3J0IExpbmtDb21wIGZyb20gXCIuL0xpbmtDb21wXCI7XHJcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiLi4vLi4vcmVkdXgvZmJDb25maWdcIjtcclxuXHJcbmNvbnN0IHsgVGFiUGFuZSB9ID0gVGFicztcclxuXHJcbmZ1bmN0aW9uIGdldEJhc2U2NChpbWcsIGNhbGxiYWNrKSB7XHJcbiAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICByZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4gY2FsbGJhY2socmVhZGVyLnJlc3VsdCkpO1xyXG4gIHJlYWRlci5yZWFkQXNEYXRhVVJMKGltZyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJlZm9yZVVwbG9hZChmaWxlKSB7XHJcbiAgY29uc3QgaXNKcGdPclBuZyA9IGZpbGUudHlwZSA9PT0gXCJpbWFnZS9qcGVnXCIgfHwgZmlsZS50eXBlID09PSBcImltYWdlL3BuZ1wiO1xyXG4gIGlmICghaXNKcGdPclBuZykge1xyXG4gICAgbWVzc2FnZS5lcnJvcihcIllvdSBjYW4gb25seSB1cGxvYWQgSlBHL1BORyBmaWxlIVwiKTtcclxuICB9XHJcbiAgY29uc3QgaXNMdDJNID0gZmlsZS5zaXplIC8gMTAyNCAvIDEwMjQgPCAyO1xyXG4gIGlmICghaXNMdDJNKSB7XHJcbiAgICBtZXNzYWdlLmVycm9yKFwiSW1hZ2UgbXVzdCBzbWFsbGVyIHRoYW4gMk1CIVwiKTtcclxuICB9XHJcbiAgcmV0dXJuIGlzSnBnT3JQbmcgJiYgaXNMdDJNO1xyXG59XHJcblxyXG5jb25zdCBTZXR0aW5ncyA9ICh7XHJcbiAgZGVsZXRlQWNjb3VudCxcclxuICBwcm9maWxlLFxyXG4gIG9wZW5TZXR0aW5ncyxcclxuICBzZXRPcGVuU2V0dGluZ3MsXHJcbiAgY2hhbmdlUHJvZmlsZSxcclxufSkgPT4ge1xyXG4gIGNvbnN0IFtmb3JtXSA9IEZvcm0udXNlRm9ybSgpO1xyXG4gIGNvbnN0IFtpbmZvLCBzZXRJbmZvXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgIHVzZXJuYW1lOiBcIlwiLFxyXG4gICAgZGV2aWFudGFydDogXCJcIixcclxuICAgIGZhY2Vib29rOiBcIlwiLFxyXG4gICAgaW5zdGFncmFtOiBcIlwiLFxyXG4gICAgdHdpdHRlcjogXCJcIixcclxuICAgIGJpb2dyYXBoeTogXCJcIixcclxuICAgIGVycm9yczoge1xyXG4gICAgICBpbnN0YWdyYW06IFwiXCIsXHJcbiAgICAgIGRldmlhbnRhcnQ6IFwiXCIsXHJcbiAgICAgIGZhY2Vib29rOiBcIlwiLFxyXG4gICAgICB0d2l0dGVyOiBcIlwiLFxyXG4gICAgICB1c2VybmFtZTogXCJcIixcclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgY29uc3QgW2ltYWdlVXJsLCBzZXRJbWFnZVVybF0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChpbWFnZUluZm8pID0+IHtcclxuICAgIGlmIChpbWFnZUluZm8uZmlsZS5zdGF0dXMgPT09IFwidXBsb2FkaW5nXCIpIHtcclxuICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKGltYWdlSW5mby5maWxlLnN0YXR1cyA9PT0gXCJkb25lXCIpIHtcclxuICAgICAgc2V0SW5mbyh7IC4uLmluZm8sIGltYWdlOiBpbWFnZUluZm8uZmlsZS5vcmlnaW5GaWxlT2JqIH0pO1xyXG4gICAgICBnZXRCYXNlNjQoaW1hZ2VJbmZvLmZpbGUub3JpZ2luRmlsZU9iaiwgKGltYWdlVXJsKSA9PiB7XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcblxyXG4gICAgICAgIHNldEltYWdlVXJsKGltYWdlVXJsKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdXBsb2FkQnV0dG9uID0gKFxyXG4gICAgPGRpdj5cclxuICAgICAge2xvYWRpbmcgPyA8TG9hZGluZ091dGxpbmVkIC8+IDogPFBsdXNPdXRsaW5lZCAvPn1cclxuICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IDggfX0+VXBsb2FkPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHByb2ZpbGUpIHtcclxuICAgICAgc2V0SW1hZ2VVcmwocHJvZmlsZS5pbWFnZSk7XHJcbiAgICAgIHNldEluZm8oe1xyXG4gICAgICAgIC4uLmluZm8sXHJcbiAgICAgICAgYmlvZ3JhcGh5OiBwcm9maWxlLmJpb2dyYXBoeSxcclxuICAgICAgICB1c2VybmFtZTogcHJvZmlsZS51c2VybmFtZSxcclxuICAgICAgICBpbnN0YWdyYW06IHByb2ZpbGUuaW5zdGFncmFtLFxyXG4gICAgICAgIGZhY2Vib29rOiBwcm9maWxlLmZhY2Vib29rLFxyXG4gICAgICAgIHR3aXR0ZXI6IHByb2ZpbGUudHdpdHRlcixcclxuICAgICAgICBkZXZpYW50YXJ0OiBwcm9maWxlLmRldmlhbnRhcnQsXHJcbiAgICAgICAgaW1hZ2U6IHByb2ZpbGUuaW1hZ2UsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sIFtwcm9maWxlXSk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoXHJcbiAgICAgIGluZm8udXNlcm5hbWUgJiZcclxuICAgICAgaW5mby51c2VybmFtZS5sZW5ndGggPj0gMCAmJlxyXG4gICAgICBpbmZvLnVzZXJuYW1lLmxlbmd0aCA8IDRcclxuICAgICkge1xyXG4gICAgICBzZXRJbmZvKHtcclxuICAgICAgICAuLi5pbmZvLFxyXG4gICAgICAgIGVycm9yczoge1xyXG4gICAgICAgICAgLi4uaW5mby5lcnJvcnMsXHJcbiAgICAgICAgICB1c2VybmFtZTogXCJZb3VyIHVzZXJuYW1lIG5lZWRzIHRvIGJlIGF0IGxlYXN0IDQgY2hhcmFjdGVycyBsb25nXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2UgaWYgKGluZm8udXNlcm5hbWUubGVuZ3RoID4gMTUpIHtcclxuICAgICAgc2V0SW5mbyh7XHJcbiAgICAgICAgLi4uaW5mbyxcclxuICAgICAgICBlcnJvcnM6IHtcclxuICAgICAgICAgIC4uLmluZm8uZXJyb3JzLFxyXG4gICAgICAgICAgdXNlcm5hbWU6IFwiWW91ciB1c2VybmFtZSBjYW5ub3QgZXhjZWVkIDE1IGNoYXJhY3RlcnNcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldEluZm8oe1xyXG4gICAgICAgIC4uLmluZm8sXHJcbiAgICAgICAgZXJyb3JzOiB7XHJcbiAgICAgICAgICAuLi5pbmZvLmVycm9ycyxcclxuICAgICAgICAgIHVzZXJuYW1lOiBcIlwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sIFtpbmZvLnVzZXJuYW1lXSk7XHJcblxyXG4gIGNvbnN0IHN1Ym1pdCA9ICgpID0+IHtcclxuICAgIGxldCBlcnJvcnMgPSBbXTtcclxuICAgIGNvbnN0IHBhc3N3b3JkRXJyb3JzID0gZm9ybS5nZXRGaWVsZHNFcnJvcigpO1xyXG5cclxuICAgIGZvciAobGV0IGkgaW4gcGFzc3dvcmRFcnJvcnMpIHtcclxuICAgICAgaWYgKHBhc3N3b3JkRXJyb3JzW2ldLmVycm9ycy5sZW5ndGggPiAwKVxyXG4gICAgICAgIGVycm9ycy5wdXNoKFsuLi5wYXNzd29yZEVycm9yc1tpXS5lcnJvcnNdKTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBpIGluIGluZm8uZXJyb3JzKSB7XHJcbiAgICAgIGlmIChpbmZvLmVycm9yc1tpXSkgZXJyb3JzLnB1c2goaW5mby5lcnJvcnNbaV0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChlcnJvcnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIGNoYW5nZVByb2ZpbGUoXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdXNlcm5hbWU6IGluZm8udXNlcm5hbWUsXHJcbiAgICAgICAgICB0d2l0dGVyOiBpbmZvLnR3aXR0ZXIsXHJcbiAgICAgICAgICBpbnN0YWdyYW06IGluZm8uaW5zdGFncmFtLFxyXG4gICAgICAgICAgZGV2aWFudGFydDogaW5mby5kZXZpYW50YXJ0LFxyXG4gICAgICAgICAgZmFjZWJvb2s6IGluZm8uZmFjZWJvb2ssXHJcbiAgICAgICAgICBuZXdQYXNzd29yZDogZm9ybS5nZXRGaWVsZFZhbHVlKFwibmV3UGFzc3dvcmRcIiksXHJcbiAgICAgICAgICBhY3R1YWxQYXNzd29yZDogZm9ybS5nZXRGaWVsZFZhbHVlKFwiYWN0dWFsUGFzc3dvcmRcIiksXHJcbiAgICAgICAgICBpbWFnZTogaW5mby5pbWFnZSxcclxuICAgICAgICAgIGJpb2dyYXBoeTogaW5mby5iaW9ncmFwaHksXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXRPcGVuU2V0dGluZ3NcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG1lc3NhZ2UuZXJyb3IoXCJUaGVyZSBhcmUgc29tZSBlcnJvcnMgaW4gdGhlIHNldHRpbmdzXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiB7XHJcbiAgICBzZXRJbWFnZVVybChwcm9maWxlLmltYWdlKTtcclxuICAgIHNldEluZm8oe1xyXG4gICAgICAuLi5pbmZvLFxyXG4gICAgICBlcnJvcnM6IHtcclxuICAgICAgICBpbnN0YWdyYW06IFwiXCIsXHJcbiAgICAgICAgZGV2aWFudGFydDogXCJcIixcclxuICAgICAgICBmYWNlYm9vazogXCJcIixcclxuICAgICAgICB0d2l0dGVyOiBcIlwiLFxyXG4gICAgICAgIHVzZXJuYW1lOiBcIlwiLFxyXG4gICAgICB9LFxyXG4gICAgICB1c2VybmFtZTogcHJvZmlsZS51c2VybmFtZSxcclxuICAgICAgYmlvZ3JhcGh5OiBwcm9maWxlLmJpb2dyYXBoeSxcclxuICAgICAgaW5zdGFncmFtOiBwcm9maWxlLmluc3RhZ3JhbSxcclxuICAgICAgZmFjZWJvb2s6IHByb2ZpbGUuZmFjZWJvb2ssXHJcbiAgICAgIHR3aXR0ZXI6IHByb2ZpbGUudHdpdHRlcixcclxuICAgICAgZGV2aWFudGFydDogcHJvZmlsZS5kZXZpYW50YXJ0LFxyXG4gICAgICBpbWFnZTogcHJvZmlsZS5pbWFnZSxcclxuICAgIH0pO1xyXG4gICAgc2V0T3BlblNldHRpbmdzKGZhbHNlKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICB3aWR0aD1cIjUwJVwiXHJcbiAgICAgICAgdGl0bGU9XCJTZXR0aW5nc1wiXHJcbiAgICAgICAgdmlzaWJsZT17b3BlblNldHRpbmdzfVxyXG4gICAgICAgIG9uT2s9e3N1Ym1pdH1cclxuICAgICAgICBva1RleHQ9XCJTdWJtaXQgY2hhbmdlc1wiXHJcbiAgICAgICAgb25DYW5jZWw9e2Nsb3NlTW9kYWx9XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmdzXCI+XHJcbiAgICAgICAgICA8VGFicyB0YWJQb3NpdGlvbj1cImxlZnRcIiBkZWZhdWx0QWN0aXZlS2V5PVwiMVwiPlxyXG4gICAgICAgICAgICA8VGFiUGFuZVxyXG4gICAgICAgICAgICAgIHRhYj17XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPFVzZXJPdXRsaW5lZCAvPlxyXG4gICAgICAgICAgICAgICAgICBVc2VybmFtZVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBrZXk9XCIxXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgbWF4TGVuZ3RoPXsxNX1cclxuICAgICAgICAgICAgICAgIGFkZG9uQmVmb3JlPXtcIlVzZXJuYW1lXCJ9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEluZm8oeyAuLi5pbmZvLCB1c2VybmFtZTogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17aW5mby51c2VybmFtZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIHtpbmZvLmVycm9ycy51c2VybmFtZSAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFudC1mb3JtLWl0ZW0tZXhwbGFpbiBhbnQtZm9ybS1pdGVtLWV4cGxhaW4tZXJyb3JcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiByb2xlPVwiYWxlcnRcIj57aW5mby5lcnJvcnMudXNlcm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L1RhYlBhbmU+XHJcbiAgICAgICAgICAgIDxUYWJQYW5lXHJcbiAgICAgICAgICAgICAgdGFiPXtcclxuICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8TG9ja091dGxpbmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgIFBhc3N3b3JkXHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGtleT1cIjJcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPEZvcm1cclxuICAgICAgICAgICAgICAgIGZvcm09e2Zvcm19XHJcbiAgICAgICAgICAgICAgICBsYXlvdXQ9XCJ2ZXJ0aWNhbFwiXHJcbiAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWVzPXt7IGFjdHVhbFBhc3N3b3JkOiBcIlwiLCBuZXdQYXNzd29yZDogXCJcIiB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJBY3R1YWwgUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImFjdHVhbFBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIlBsZWFzZSBpbnB1dCB5b3VyIGFjdHVhbCBwYXNzd29yZCFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0LlBhc3N3b3JkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTmV3IFBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuZXdQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJQbGVhc2UgaW5wdXQgeW91ciBuZXcgcGFzc3dvcmQhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dC5QYXNzd29yZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY29uZmlybVBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ29uZmlybSBOZXcgUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZGVwZW5kZW5jaWVzPXtbXCJwYXNzd29yZFwiXX1cclxuICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIlBsZWFzZSBjb25maXJtIHlvdXIgcGFzc3dvcmQhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICh7IGdldEZpZWxkVmFsdWUgfSkgPT4gKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3IoXywgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXZhbHVlIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldEZpZWxkVmFsdWUoXCJuZXdQYXNzd29yZFwiKSA9PT0gdmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFcnJvcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlRoZSB0d28gcGFzc3dvcmRzIHRoYXQgeW91IGVudGVyZWQgZG8gbm90IG1hdGNoIVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dC5QYXNzd29yZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgPC9UYWJQYW5lPlxyXG4gICAgICAgICAgICA8VGFiUGFuZVxyXG4gICAgICAgICAgICAgIHRhYj17XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPEVkaXRPdXRsaW5lZCAvPlxyXG4gICAgICAgICAgICAgICAgICBCaW9cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAga2V5PVwiM1wiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8SW5wdXQuVGV4dEFyZWFcclxuICAgICAgICAgICAgICAgIG1heExlbmd0aD17MTQwfVxyXG4gICAgICAgICAgICAgICAgYXV0b1NpemVcclxuICAgICAgICAgICAgICAgIHNob3dDb3VudFxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2luZm8uYmlvZ3JhcGh5fVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxyXG4gICAgICAgICAgICAgICAgICBzZXRJbmZvKHsgLi4uaW5mbywgYmlvZ3JhcGh5OiBlLnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgID48L0lucHV0LlRleHRBcmVhPlxyXG4gICAgICAgICAgICA8L1RhYlBhbmU+XHJcbiAgICAgICAgICAgIDxUYWJQYW5lXHJcbiAgICAgICAgICAgICAgdGFiPXtcclxuICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8TGlua091dGxpbmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgIExpbmtzXHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGtleT1cIjRcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPExpbmtDb21wXHJcbiAgICAgICAgICAgICAgICBzZXRJbmZvPXtzZXRJbmZvfVxyXG4gICAgICAgICAgICAgICAgaW5mbz17aW5mb31cclxuICAgICAgICAgICAgICAgIG5hbWU9e1wiZmFjZWJvb2tcIn1cclxuICAgICAgICAgICAgICAgIGxhYmVsPXtcIkZhY2Vib29rXCJ9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIxMHB4IDBcIiB9fT48L2Rpdj5cclxuICAgICAgICAgICAgICA8TGlua0NvbXBcclxuICAgICAgICAgICAgICAgIHNldEluZm89e3NldEluZm99XHJcbiAgICAgICAgICAgICAgICBpbmZvPXtpbmZvfVxyXG4gICAgICAgICAgICAgICAgbmFtZT17XCJ0d2l0dGVyXCJ9XHJcbiAgICAgICAgICAgICAgICBsYWJlbD17XCJUd2l0dGVyXCJ9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIxMHB4IDBcIiB9fT48L2Rpdj5cclxuICAgICAgICAgICAgICA8TGlua0NvbXBcclxuICAgICAgICAgICAgICAgIHNldEluZm89e3NldEluZm99XHJcbiAgICAgICAgICAgICAgICBpbmZvPXtpbmZvfVxyXG4gICAgICAgICAgICAgICAgbmFtZT17XCJpbnN0YWdyYW1cIn1cclxuICAgICAgICAgICAgICAgIGxhYmVsPXtcIkluc3RhZ3JhbVwifVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMTBweCAwXCIgfX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPExpbmtDb21wXHJcbiAgICAgICAgICAgICAgICBzZXRJbmZvPXtzZXRJbmZvfVxyXG4gICAgICAgICAgICAgICAgaW5mbz17aW5mb31cclxuICAgICAgICAgICAgICAgIG5hbWU9e1wiZGV2aWFudGFydFwifVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9e1wiRGV2aWFudGFydFwifVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMTBweCAwXCIgfX0+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvVGFiUGFuZT5cclxuICAgICAgICAgICAgPFRhYlBhbmVcclxuICAgICAgICAgICAgICB0YWI9e1xyXG4gICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxGaWxlSW1hZ2VPdXRsaW5lZCAvPlxyXG4gICAgICAgICAgICAgICAgICBBdmF0YXJcclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAga2V5PVwiNVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8VXBsb2FkXHJcbiAgICAgICAgICAgICAgICBzaG93VXBsb2FkTGlzdD17e1xyXG4gICAgICAgICAgICAgICAgICBzaG93UmVtb3ZlSWNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgcmVtb3ZlSWNvbjogPFN0YXJPdXRsaW5lZCAvPixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBsaXN0VHlwZT1cInBpY3R1cmUtY2FyZFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb3Zlci11cGxvYWRlclwiXHJcbiAgICAgICAgICAgICAgICBzaG93VXBsb2FkTGlzdD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIGJlZm9yZVVwbG9hZD17YmVmb3JlVXBsb2FkfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgIG1heENvdW50PXsxfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtpbWFnZVVybCA/IChcclxuICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17aW1hZ2VVcmx9XHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0OiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgIHVwbG9hZEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L1VwbG9hZD5cclxuICAgICAgICAgICAgPC9UYWJQYW5lPlxyXG4gICAgICAgICAgICA8VGFiUGFuZVxyXG4gICAgICAgICAgICAgIHRhYj17XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPERlbGV0ZU91dGxpbmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgIERlbGV0ZSBteSBhY2NvdW50XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGtleT1cIjZcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPFBvcGNvbmZpcm1cclxuICAgICAgICAgICAgICAgIHRpdGxlPVwiQmUgY2FyZWZ1bCAhIFRoaXMgYWN0aW9uIGlzIG5vdCByZXZlcnNpYmxlICFcIlxyXG4gICAgICAgICAgICAgICAgb25Db25maXJtPXtkZWxldGVBY2NvdW50fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gZGFuZ2VyPkNsaWNrIGhlcmUgdG8gZGVsZXRlIHlvdXIgYWNjb3VudDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvUG9wY29uZmlybT5cclxuICAgICAgICAgICAgPC9UYWJQYW5lPlxyXG4gICAgICAgICAgPC9UYWJzPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNldHRpbmdzO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgRm9ybSwgU2VsZWN0LCBQYWdlSGVhZGVyIH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmNvbnN0IFNvcnRJbnB1dCA9ICh7IHRpdGxlLCBpdGVtRGF0YSwgc2V0RGF0YSwgdHlwZSwgb3B0aW9ucywgY29udGV4dCB9KSA9PiB7XHJcbiAgY29uc3Qgc29ydEFycmF5ID0gKHZhbHVlKSA9PiB7XHJcbiAgICBsZXQgbmV3QXJyID0gW107XHJcblxyXG4gICAgaWYgKHZhbHVlID09PSBcImRhdGUtYXNjXCIpIHtcclxuICAgICAgbmV3QXJyID0gWy4uLml0ZW1EYXRhXS5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBhLmNyZWF0ZWRBdCA9PT0gXCJvYmplY3RcIlxyXG4gICAgICAgICAgPyBuZXcgRGF0ZShhLmNyZWF0ZWRBdC5zZWNvbmRzICogMTAwMCkgLVxyXG4gICAgICAgICAgICAgIG5ldyBEYXRlKGIuY3JlYXRlZEF0LnNlY29uZHMgKiAxMDAwKVxyXG4gICAgICAgICAgOiBuZXcgRGF0ZShhLmNyZWF0ZWRBdCkgLSBuZXcgRGF0ZShiLmNyZWF0ZWRBdCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gXCJkYXRlLWRlc2NcIikge1xyXG4gICAgICBuZXdBcnIgPSBbLi4uaXRlbURhdGFdLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICByZXR1cm4gdHlwZW9mIGEuY3JlYXRlZEF0ID09PSBcIm9iamVjdFwiXHJcbiAgICAgICAgICA/IG5ldyBEYXRlKGIuY3JlYXRlZEF0LnNlY29uZHMgKiAxMDAwKSAtXHJcbiAgICAgICAgICAgICAgbmV3IERhdGUoYS5jcmVhdGVkQXQuc2Vjb25kcyAqIDEwMDApXHJcbiAgICAgICAgICA6IG5ldyBEYXRlKGIuY3JlYXRlZEF0KSAtIG5ldyBEYXRlKGEuY3JlYXRlZEF0KTtcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2UgaWYgKHZhbHVlID09PSBcIm5hbWUtZGVzY1wiKSB7XHJcbiAgICAgIGlmICh0eXBlID09PSBcImxvY2F0aW9uc1wiKSB7XHJcbiAgICAgICAgbmV3QXJyID0gWy4uLml0ZW1EYXRhXS5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBrZXlBID0gYS5uYW1lLnRvTG93ZXJDYXNlKCksXHJcbiAgICAgICAgICAgIGtleUIgPSBiLm5hbWUudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICAgICAgICBpZiAoa2V5QSA+IGtleUIpIHJldHVybiAtMTtcclxuICAgICAgICAgIGlmIChrZXlBIDwga2V5QikgcmV0dXJuIDE7XHJcbiAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSBcInN0b3JpZXNcIikge1xyXG4gICAgICAgIG5ld0FyciA9IFsuLi5pdGVtRGF0YV0uc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgY29uc3Qga2V5QSA9IGEudGl0bGUudG9Mb3dlckNhc2UoKSxcclxuICAgICAgICAgICAga2V5QiA9IGIudGl0bGUudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICAgICAgICBpZiAoa2V5QSA+IGtleUIpIHJldHVybiAtMTtcclxuICAgICAgICAgIGlmIChrZXlBIDwga2V5QikgcmV0dXJuIDE7XHJcbiAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gXCJuYW1lLWFzY1wiKSB7XHJcbiAgICAgIGlmICh0eXBlID09PSBcImxvY2F0aW9uc1wiKSB7XHJcbiAgICAgICAgbmV3QXJyID0gWy4uLml0ZW1EYXRhXS5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBrZXlBID0gYS5uYW1lLnRvTG93ZXJDYXNlKCksXHJcbiAgICAgICAgICAgIGtleUIgPSBiLm5hbWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgIGlmIChrZXlBIDwga2V5QikgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgaWYgKGtleUEgPiBrZXlCKSByZXR1cm4gMTtcclxuICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwic3Rvcmllc1wiKSB7XHJcbiAgICAgICAgbmV3QXJyID0gWy4uLml0ZW1EYXRhXS5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBrZXlBID0gYS50aXRsZS50b0xvd2VyQ2FzZSgpLFxyXG4gICAgICAgICAgICBrZXlCID0gYi50aXRsZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgaWYgKGtleUEgPCBrZXlCKSByZXR1cm4gLTE7XHJcbiAgICAgICAgICBpZiAoa2V5QSA+IGtleUIpIHJldHVybiAxO1xyXG4gICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IFwiZmlyc3RuYW1lLWFzY1wiKSB7XHJcbiAgICAgIG5ld0FyciA9IFsuLi5pdGVtRGF0YV0uc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgIGNvbnN0IGtleUEgPSBhLmZpcnN0bmFtZS50b0xvd2VyQ2FzZSgpLFxyXG4gICAgICAgICAga2V5QiA9IGIuZmlyc3RuYW1lLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgaWYgKGtleUEgPCBrZXlCKSByZXR1cm4gLTE7XHJcbiAgICAgICAgaWYgKGtleUEgPiBrZXlCKSByZXR1cm4gMTtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2UgaWYgKHZhbHVlID09PSBcImZpcnN0bmFtZS1kZXNjXCIpIHtcclxuICAgICAgbmV3QXJyID0gWy4uLml0ZW1EYXRhXS5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgY29uc3Qga2V5QSA9IGEuZmlyc3RuYW1lLnRvTG93ZXJDYXNlKCksXHJcbiAgICAgICAgICBrZXlCID0gYi5maXJzdG5hbWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBpZiAoa2V5QSA+IGtleUIpIHJldHVybiAtMTtcclxuICAgICAgICBpZiAoa2V5QSA8IGtleUIpIHJldHVybiAxO1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IFwibGFzdG5hbWUtYXNjXCIpIHtcclxuICAgICAgbmV3QXJyID0gWy4uLml0ZW1EYXRhXS5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgY29uc3Qga2V5QSA9IGEubGFzdG5hbWUudG9Mb3dlckNhc2UoKSxcclxuICAgICAgICAgIGtleUIgPSBiLmxhc3RuYW1lLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgaWYgKGtleUEgPCBrZXlCKSByZXR1cm4gLTE7XHJcbiAgICAgICAgaWYgKGtleUEgPiBrZXlCKSByZXR1cm4gMTtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2UgaWYgKHZhbHVlID09PSBcImxhc3RuYW1lLWRlc2NcIikge1xyXG4gICAgICBuZXdBcnIgPSBbLi4uaXRlbURhdGFdLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICBjb25zdCBrZXlBID0gYS5sYXN0bmFtZS50b0xvd2VyQ2FzZSgpLFxyXG4gICAgICAgICAga2V5QiA9IGIubGFzdG5hbWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBpZiAoa2V5QSA+IGtleUIpIHJldHVybiAtMTtcclxuICAgICAgICBpZiAoa2V5QSA8IGtleUIpIHJldHVybiAxO1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IFwidXNlcm5hbWUtYXNjXCIpIHtcclxuICAgICAgbmV3QXJyID0gWy4uLml0ZW1EYXRhXS5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgY29uc3Qga2V5QSA9IGEudXNlcm5hbWUudG9Mb3dlckNhc2UoKSxcclxuICAgICAgICAgIGtleUIgPSBiLnVzZXJuYW1lLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coa2V5QSk7XHJcbiAgICAgICAgaWYgKGtleUEgPCBrZXlCKSByZXR1cm4gLTE7XHJcbiAgICAgICAgaWYgKGtleUEgPiBrZXlCKSByZXR1cm4gMTtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2UgaWYgKHZhbHVlID09PSBcInVzZXJuYW1lLWRlc2NcIikge1xyXG4gICAgICBuZXdBcnIgPSBbLi4uaXRlbURhdGFdLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICBjb25zdCBrZXlBID0gYS51c2VybmFtZS50b0xvd2VyQ2FzZSgpLFxyXG4gICAgICAgICAga2V5QiA9IGIudXNlcm5hbWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBpZiAoa2V5QSA+IGtleUIpIHJldHVybiAtMTtcclxuICAgICAgICBpZiAoa2V5QSA8IGtleUIpIHJldHVybiAxO1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG5ld0FyciA9IGl0ZW1EYXRhO1xyXG4gICAgfVxyXG4gICAgc2V0RGF0YShuZXdBcnIpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8UGFnZUhlYWRlclxyXG4gICAgICAgIHRpdGxlPXtgJHtpdGVtRGF0YS5sZW5ndGh9ICR7dGl0bGV9YH1cclxuICAgICAgICBleHRyYT17XHJcbiAgICAgICAgICA8Rm9ybSBpbml0aWFsVmFsdWVzPXt7IHNvcnQ6IFwiZGF0ZS1kZXNjXCIgfX0+XHJcbiAgICAgICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCJTb3J0IGJ5XCIgbmFtZT1cInNvcnRcIj5cclxuICAgICAgICAgICAgICA8U2VsZWN0IG9uQ2hhbmdlPXsodmFsKSA9PiBzb3J0QXJyYXkodmFsKX0+XHJcbiAgICAgICAgICAgICAgICB7b3B0aW9ucy5tYXAoKG9wdGlvbiwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiBrZXk9e2l9IHZhbHVlPXtvcHRpb24udmFsdWV9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtvcHRpb24ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgPC9TZWxlY3QuT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgIH1cclxuICAgICAgPlxyXG4gICAgICAgIHtjb250ZXh0ID09PSBcInByaXZhdGVcIiAmJiB0eXBlID09PSBcInN0b3JpZXNcIiA/IChcclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc3RvcnkvbmV3XCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImFkZC1idG4tY2lyY2xlXCI+XHJcbiAgICAgICAgICAgICAgPGlvbi1pY29uIG5hbWU9XCJhZGQtY2lyY2xlXCI+PC9pb24taWNvbj5cclxuICAgICAgICAgICAgICA8c3Bhbj5BZGQgYSBuZXcgc3Rvcnk8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICApIDogY29udGV4dCA9PT0gXCJwcml2YXRlXCIgJiYgdHlwZSA9PT0gXCJsb2NhdGlvbnNcIiA/IChcclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbG9jYXRpb24vbmV3XCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImFkZC1idG4tY2lyY2xlXCI+XHJcbiAgICAgICAgICAgICAgPGlvbi1pY29uIG5hbWU9XCJhZGQtY2lyY2xlXCI+PC9pb24taWNvbj5cclxuICAgICAgICAgICAgICA8c3Bhbj5BZGQgYSBuZXcgbG9jYXRpb248L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICApIDogY29udGV4dCA9PT0gXCJwcml2YXRlXCIgJiYgdHlwZSA9PT0gXCJjaGFyYWN0ZXJzXCIgPyAoXHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2NoYXJhY3Rlci9uZXdcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYWRkLWJ0bi1jaXJjbGVcIj5cclxuICAgICAgICAgICAgICA8aW9uLWljb24gbmFtZT1cImFkZC1jaXJjbGVcIj48L2lvbi1pY29uPlxyXG4gICAgICAgICAgICAgIDxzcGFuPkFkZCBhIG5ldyBjaGFyYWN0ZXI8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICApIDogbnVsbH1cclxuICAgICAgPC9QYWdlSGVhZGVyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNvcnRJbnB1dDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBEaXZpZGVyIH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gXCIuLi9jb21tb24vUGFnaW5hdGlvblwiO1xyXG5pbXBvcnQgTG9hZGluZ1NjcmVlbiBmcm9tIFwiLi4vaG9jL0xvYWRpbmdTY3JlZW5cIjtcclxuaW1wb3J0IFNvcnRJbnB1dCBmcm9tIFwiLi9Tb3J0SW5wdXRcIjtcclxuXHJcbmNvbnN0IFN0b3JpZXMgPSAoeyBzdG9yaWVzLCBsb2FkaW5nLCB0eXBlLCBjb250ZXh0IH0pID0+IHtcclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSBSZWFjdC51c2VTdGF0ZShbXSk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXREYXRhKHN0b3JpZXMpO1xyXG4gIH0sIFtzdG9yaWVzXSk7XHJcblxyXG4gIGNvbnN0IG9wdGlvbnMgPSBbXHJcbiAgICB7IG5hbWU6IFwiRGF0ZSAoYXNjZW5kaW5nKVwiLCB2YWx1ZTogXCJkYXRlLWFzY1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiRGF0ZSAoZGVzY2VuZGluZylcIiwgdmFsdWU6IFwiZGF0ZS1kZXNjXCIgfSxcclxuICAgIHsgbmFtZTogXCJOYW1lIChhc2NlbmRpbmcpXCIsIHZhbHVlOiBcIm5hbWUtYXNjXCIgfSxcclxuICAgIHsgbmFtZTogXCJOYW1lIChkZXNjZW5kaW5nKVwiLCB2YWx1ZTogXCJuYW1lLWRlc2NcIiB9LFxyXG4gIF07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtc3Rvcmllc1wiPlxyXG4gICAgICA8TG9hZGluZ1NjcmVlbiBsb2FkaW5nPXtsb2FkaW5nfT5cclxuICAgICAgICA8U29ydElucHV0XHJcbiAgICAgICAgICB0eXBlPVwic3Rvcmllc1wiXHJcbiAgICAgICAgICBpdGVtRGF0YT17c3Rvcmllc31cclxuICAgICAgICAgIHRpdGxlPXtcclxuICAgICAgICAgICAgdHlwZSAhPT0gXCJmYXZvcml0ZXNcIlxyXG4gICAgICAgICAgICAgID8gc3Rvcmllcy5sZW5ndGggPiAxXHJcbiAgICAgICAgICAgICAgICA/IFwiU3Rvcmllc1wiXHJcbiAgICAgICAgICAgICAgICA6IFwiU3RvcnlcIlxyXG4gICAgICAgICAgICAgIDogc3Rvcmllcy5sZW5ndGggPiAxXHJcbiAgICAgICAgICAgICAgPyBcIkZhdm9yaXRlIFN0b3JpZXNcIlxyXG4gICAgICAgICAgICAgIDogXCJGYXZvcml0ZSBTdG9yeVwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzZXREYXRhPXtzZXREYXRhfVxyXG4gICAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cclxuICAgICAgICAgIGNvbnRleHQ9e2NvbnRleHR9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgIDxQYWdpbmF0aW9uXHJcbiAgICAgICAgICBkYXRhPXtkYXRhfVxyXG4gICAgICAgICAgdHlwZT17dHlwZX1cclxuICAgICAgICAgIGd1dHRlcj17XCIxNnB4XCJ9XHJcbiAgICAgICAgICB0eXBlPXt0eXBlfVxyXG4gICAgICAgICAgaXRlbVR5cGU9XCJzdG9yaWVzXCJcclxuICAgICAgICAgIGNvbHVtbnNDb3VudEJyZWFrUG9pbnRzPXt7IDM1MDogMSwgNzUwOiAyLCA5MDA6IDMsIDEyMDA6IDQgfX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L0xvYWRpbmdTY3JlZW4+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RvcmllcztcclxuIiwiaW1wb3J0IHsgUm93LCBDb2wgfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuY29uc3QgVGFicyA9ICh7IHRhYnMsIGNoYW5nZVRhYiwgY3VycmVudFRhYiB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS10YWJzXCIgZGF0YS1hb3M9XCJ6b29tLWluXCI+XHJcbiAgICAgIDxSb3cgZ3V0dGVyPXs0MH0gYWxpZ249XCJtaWRkbGVcIiBqdXN0aWZ5PVwiY2VudGVyXCI+XHJcbiAgICAgICAge3RhYnMubWFwKCh0YWIpID0+IChcclxuICAgICAgICAgIDxDb2wga2V5PXt0YWJ9PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdGFiICR7Y3VycmVudFRhYiA9PT0gdGFiID8gXCJhY3RpdmVcIiA6IFwiXCJ9YH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VUYWIodGFiKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxzcGFuPnt0YWJ9PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L1Jvdz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYWJzO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCwgY3JlYXRlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlL2FwcFwiO1xyXG5pbXBvcnQgeyBhdXRoLCBkYiwgc3RvcmFnZSB9IGZyb20gXCIuLi9yZWR1eC9mYkNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBtZXNzYWdlIH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmNvbnN0IGF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFByb3ZpZGVBdXRoKHsgY2hpbGRyZW4gfSkge1xyXG4gIGNvbnN0IGF1dGggPSB1c2VQcm92aWRlQXV0aCgpO1xyXG4gIHJldHVybiA8YXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2F1dGh9PntjaGlsZHJlbn08L2F1dGhDb250ZXh0LlByb3ZpZGVyPjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUF1dGggPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHVzZUNvbnRleHQoYXV0aENvbnRleHQpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gdXNlUHJvdmlkZUF1dGgoKSB7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtlcnJvcnMsIHNldEVycm9yc10gPSB1c2VTdGF0ZSh7XHJcbiAgICBwYXNzd29yZDogXCJcIixcclxuICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgdXNlcm5hbWU6IFwiXCIsXHJcbiAgfSk7XHJcblxyXG4gIC8vIFdyYXAgYW55IEZpcmViYXNlIG1ldGhvZHMgd2Ugd2FudCB0byB1c2UgbWFraW5nIHN1cmUgLi4uXHJcbiAgLy8gLi4uIHRvIHNhdmUgdGhlIHVzZXIgdG8gc3RhdGUuXHJcbiAgY29uc3Qgc2lnbmluID0gKGVtYWlsLCBwYXNzd29yZCkgPT4ge1xyXG4gICAgcmV0dXJuIGF1dGhcclxuICAgICAgLnNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZClcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgc2V0RXJyb3JzKHsgcGFzc3dvcmQ6IFwiXCIsIGVtYWlsOiBcIlwiIH0pO1xyXG4gICAgICAgIHNldFVzZXIocmVzcG9uc2UudXNlcik7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnVzZXI7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgaWYgKGVyci5jb2RlID09PSBcImF1dGgvd3JvbmctcGFzc3dvcmRcIikge1xyXG4gICAgICAgICAgc2V0RXJyb3JzKHsgLi4uZXJyb3JzLCBwYXNzd29yZDogZXJyLm1lc3NhZ2UgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChlcnIuY29kZSA9PT0gXCJhdXRoL3VzZXItbm90LWZvdW5kXCIpIHtcclxuICAgICAgICAgIHNldEVycm9ycyh7IC4uLmVycm9ycywgZW1haWw6IGVyci5tZXNzYWdlIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2lnbnVwID0gKGVtYWlsLCBwYXNzd29yZCwgdXNlcm5hbWUpID0+IHtcclxuICAgIGF1dGhcclxuICAgICAgLmNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpXHJcbiAgICAgIC50aGVuKGFzeW5jIChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHNldEVycm9ycyh7XHJcbiAgICAgICAgICBwYXNzd29yZDogXCJcIixcclxuICAgICAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICAgICAgdXNlcm5hbWU6IFwiXCIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2V0VXNlcih7IC4uLnJlc3BvbnNlLnVzZXIsIHVzZXJuYW1lOiB1c2VybmFtZSB9KTtcclxuICAgICAgICByZXR1cm4gYXdhaXQgZGIuY29sbGVjdGlvbihcInVzZXJzXCIpLmRvYyhyZXNwb25zZS51c2VyLnVpZCkuc2V0KHtcclxuICAgICAgICAgIHVzZXJuYW1lLFxyXG4gICAgICAgICAgbGlrZXNDb3VudDogMCxcclxuICAgICAgICAgIHR3aXR0ZXI6IFwiXCIsXHJcbiAgICAgICAgICBmYWNlYm9vazogXCJcIixcclxuICAgICAgICAgIGluc3RhZ3JhbTogXCJcIixcclxuICAgICAgICAgIGRldmlhbnRhcnQ6IFwiXCIsXHJcbiAgICAgICAgICBiaW9ncmFwaHk6IFwiXCIsXHJcbiAgICAgICAgICBiYWRnZXM6IFtdLFxyXG4gICAgICAgICAgY3JlYXRlZEF0OiBmaXJlYmFzZS5maXJlc3RvcmUuRmllbGRWYWx1ZS5zZXJ2ZXJUaW1lc3RhbXAoKSxcclxuICAgICAgICAgIGltYWdlOiBcIlwiLFxyXG4gICAgICAgICAgc3VzcGVuZGVkOiBmYWxzZSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBhdXRoLmN1cnJlbnRVc2VyLnNlbmRFbWFpbFZlcmlmaWNhdGlvbigpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIGVyci5jb2RlID09PSBcImF1dGgvZW1haWwtYWxyZWFkeS1pbi11c2VcIiB8fFxyXG4gICAgICAgICAgZXJyLmNvZGUgPT09IFwiYXV0aC9pbnZhbGlkLWVtYWlsXCJcclxuICAgICAgICApIHtcclxuICAgICAgICAgIHNldEVycm9ycyh7IC4uLmVycm9ycywgZW1haWw6IGVyci5tZXNzYWdlIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZXJyLmNvZGUgPT09IFwiYXV0aC93ZWFrLXBhc3N3b3JkXCIpIHtcclxuICAgICAgICAgIHNldEVycm9ycyh7IC4uLmVycm9ycywgcGFzc3dvcmQ6IGVyci5tZXNzYWdlIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2lnbm91dCA9ICgpID0+IHtcclxuICAgIHJldHVybiBhdXRoLnNpZ25PdXQoKS50aGVuKCgpID0+IHtcclxuICAgICAgc2V0VXNlcihmYWxzZSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzZW5kUGFzc3dvcmRSZXNldEVtYWlsID0gKGVtYWlsKSA9PiB7XHJcbiAgICByZXR1cm4gYXV0aC5zZW5kUGFzc3dvcmRSZXNldEVtYWlsKGVtYWlsKS50aGVuKCgpID0+IHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjb25maXJtUGFzc3dvcmRSZXNldCA9IChjb2RlLCBwYXNzd29yZCkgPT4ge1xyXG4gICAgcmV0dXJuIGF1dGguY29uZmlybVBhc3N3b3JkUmVzZXQoY29kZSwgcGFzc3dvcmQpLnRoZW4oKCkgPT4ge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHZlcmlmeUVtYWlsID0gKCkgPT4ge1xyXG4gICAgYXV0aC5jdXJyZW50VXNlclxyXG4gICAgICAuc2VuZEVtYWlsVmVyaWZpY2F0aW9uKClcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIG1lc3NhZ2UuaW5mbyhcIlZlcmlmaWNhdGlvbiBFbWFpbCBzZW50LiBDaGVjayB5b3VyIGluYm94ICFcIik7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihlcnIubWVzc2FnZSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRlbGV0ZUFjY291bnQgPSAoKSA9PiB7XHJcbiAgICBhdXRoLmN1cnJlbnRVc2VyLmRlbGV0ZSgpO1xyXG5cclxuICAgIC8vIGNvbnN0IGJhdGNoID0gZGIuYmF0Y2goKTtcclxuICAgIC8vIGNvbnN0IHVzZXJJZCA9IGF1dGguY3VycmVudFVzZXIudWlkO1xyXG4gICAgLy8gY29uc3QgYWxsU3RvcmllcyA9IGRiXHJcbiAgICAvLyAgIC5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKVxyXG4gICAgLy8gICAud2hlcmUoXCJhdXRob3JJZFwiLCBcIj09XCIsIHVzZXJJZClcclxuICAgIC8vICAgLmdldCgpO1xyXG4gICAgLy8gY29uc3QgYWxsQ2hhcmFjdGVycyA9IGRiXHJcbiAgICAvLyAgIC5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc1wiKVxyXG4gICAgLy8gICAud2hlcmUoXCJhdXRob3JJZFwiLCBcIj09XCIsIHVzZXJJZClcclxuICAgIC8vICAgLmdldCgpO1xyXG4gICAgLy8gY29uc3QgYWxsQ2hhcHRlcnMgPSBkYlxyXG4gICAgLy8gICAuY29sbGVjdGlvbihcImNoYXB0ZXJzXCIpXHJcbiAgICAvLyAgIC53aGVyZShcImF1dGhvcklkXCIsIFwiPT1cIiwgdXNlcklkKVxyXG4gICAgLy8gICAuZ2V0KCk7XHJcbiAgICAvLyBjb25zdCBhbGxMb2NhdGlvbnMgPSBkYlxyXG4gICAgLy8gICAuY29sbGVjdGlvbihcImxvY2F0aW9uc1wiKVxyXG4gICAgLy8gICAud2hlcmUoXCJhdXRob3JJZFwiLCBcIj09XCIsIHVzZXJJZClcclxuICAgIC8vICAgLmdldCgpO1xyXG4gICAgLy8gY29uc3QgYWxsTm90aWZpY2F0aW9ucyA9IGRiXHJcbiAgICAvLyAgIC5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc1wiKVxyXG4gICAgLy8gICAud2hlcmUoXCJyZWNpcGllbnRcIiwgXCI9PVwiLCB1c2VySWQpXHJcbiAgICAvLyAgIC5nZXQoKTtcclxuICAgIC8vIGNvbnN0IGFsbFVzZXJMaWtlcyA9IGRiXHJcbiAgICAvLyAgIC5jb2xsZWN0aW9uKFwidXNlcnNMaWtlc1wiKVxyXG4gICAgLy8gICAud2hlcmUoXCJzZW5kZXJcIiwgXCI9PVwiLCB1c2VySWQpXHJcbiAgICAvLyAgIC5nZXQoKTtcclxuICAgIC8vIGNvbnN0IGFsbFN0b3J5TGlrZXMgPSBkYlxyXG4gICAgLy8gICAuY29sbGVjdGlvbihcInN0b3JpZXNMaWtlc1wiKVxyXG4gICAgLy8gICAud2hlcmUoXCJzZW5kZXJcIiwgXCI9PVwiLCB1c2VySWQpXHJcbiAgICAvLyAgIC5nZXQoKTtcclxuICAgIC8vIGNvbnN0IGFsbENoYXJhY3RlcnNMaWtlcyA9IGRiXHJcbiAgICAvLyAgIC5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc0xpa2VzXCIpXHJcbiAgICAvLyAgIC53aGVyZShcInNlbmRlclwiLCBcIj09XCIsIHVzZXJJZClcclxuICAgIC8vICAgLmdldCgpO1xyXG4gICAgLy8gY29uc3QgYWxsQ29tbWVudHMgPSBkYlxyXG4gICAgLy8gICAuY29sbGVjdGlvbihcImNvbW1lbnRzXCIpXHJcbiAgICAvLyAgIC53aGVyZShcInVzZXJJZFwiLCBcIj09XCIsIHVzZXJJZClcclxuICAgIC8vICAgLmdldCgpO1xyXG4gICAgLy8gY29uc3QgYWxsRm9sbG93ZXJzID0gZGJcclxuICAgIC8vICAgLmNvbGxlY3Rpb24oXCJ1c2Vyc0xpa2VzXCIpXHJcbiAgICAvLyAgIC53aGVyZShcInJlY2lwaWVudFwiLCBcIj09XCIsIHVzZXJJZClcclxuICAgIC8vICAgLmdldCgpO1xyXG4gICAgLy8gY29uc3QgYWxsU3RvcnlMaWtlZCA9IGRiXHJcbiAgICAvLyAgIC5jb2xsZWN0aW9uKFwic3Rvcmllc0xpa2VzXCIpXHJcbiAgICAvLyAgIC53aGVyZShcInJlY2lwaWVudFwiLCBcIj09XCIsIHVzZXJJZClcclxuICAgIC8vICAgLmdldCgpO1xyXG4gICAgLy8gY29uc3QgYWxsQ2hhcmFjdGVyc0xpa2VkID0gZGJcclxuICAgIC8vICAgLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzTGlrZXNcIilcclxuICAgIC8vICAgLndoZXJlKFwicmVjaXBpZW50XCIsIFwiPT1cIiwgdXNlcklkKVxyXG4gICAgLy8gICAuZ2V0KCk7XHJcblxyXG4gICAgLy8gUHJvbWlzZS5hbGwoW1xyXG4gICAgLy8gICBhbGxTdG9yaWVzLFxyXG4gICAgLy8gICBhbGxDaGFyYWN0ZXJzLFxyXG4gICAgLy8gICBhbGxOb3RpZmljYXRpb25zLFxyXG4gICAgLy8gICBhbGxVc2VyTGlrZXMsXHJcbiAgICAvLyAgIGFsbFN0b3J5TGlrZXMsXHJcbiAgICAvLyAgIGFsbENoYXJhY3RlcnNMaWtlcyxcclxuICAgIC8vICAgYWxsQ29tbWVudHMsXHJcbiAgICAvLyAgIGFsbENoYXB0ZXJzLFxyXG4gICAgLy8gICBhbGxMb2NhdGlvbnMsXHJcbiAgICAvLyAgIGFsbEZvbGxvd2VycyxcclxuICAgIC8vICAgYWxsU3RvcnlMaWtlZCxcclxuICAgIC8vICAgYWxsQ2hhcmFjdGVyc0xpa2VkLFxyXG4gICAgLy8gXSlcclxuICAgIC8vICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgLy8gICAgIHJlc1swXS5mb3JFYWNoKChzdG9yeSkgPT5cclxuICAgIC8vICAgICAgIGJhdGNoLmRlbGV0ZShkYi5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKS5kb2Moc3RvcnkuaWQpKVxyXG4gICAgLy8gICAgICk7XHJcbiAgICAvLyAgICAgcmVzWzFdLmZvckVhY2goKGNoYXJhKSA9PlxyXG4gICAgLy8gICAgICAgYmF0Y2guZGVsZXRlKGRiLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzXCIpLmRvYyhjaGFyYS5pZCkpXHJcbiAgICAvLyAgICAgKTtcclxuICAgIC8vICAgICByZXNbMl0uZm9yRWFjaCgobm90aWYpID0+XHJcbiAgICAvLyAgICAgICBiYXRjaC5kZWxldGUoZGIuY29sbGVjdGlvbihcIm5vdGlmaWNhdGlvbnNcIikuZG9jKG5vdGlmLmlkKSlcclxuICAgIC8vICAgICApO1xyXG4gICAgLy8gICAgIHJlc1szXS5mb3JFYWNoKChsaWtlKSA9PlxyXG4gICAgLy8gICAgICAgYmF0Y2guZGVsZXRlKGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc0xpa2VzXCIpLmRvYyhsaWtlLmlkKSlcclxuICAgIC8vICAgICApO1xyXG4gICAgLy8gICAgIHJlc1s0XS5mb3JFYWNoKChsaWtlKSA9PlxyXG4gICAgLy8gICAgICAgYmF0Y2guZGVsZXRlKGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzTGlrZXNcIikuZG9jKGxpa2UuaWQpKVxyXG4gICAgLy8gICAgICk7XHJcbiAgICAvLyAgICAgcmVzWzVdLmZvckVhY2goKGxpa2UpID0+XHJcbiAgICAvLyAgICAgICBiYXRjaC5kZWxldGUoZGIuY29sbGVjdGlvbihcImNoYXJhY3RlcnNMaWtlc1wiKS5kb2MobGlrZS5pZCkpXHJcbiAgICAvLyAgICAgKTtcclxuICAgIC8vICAgICByZXNbNl0uZm9yRWFjaCgoY29tbWVudCkgPT5cclxuICAgIC8vICAgICAgIGJhdGNoLnVwZGF0ZShkYi5jb2xsZWN0aW9uKFwiY29tbWVudHNcIikuZG9jKGNvbW1lbnQuaWQpLCB7XHJcbiAgICAvLyAgICAgICAgIHVzZXJEZWxldGVkOiB0cnVlLFxyXG4gICAgLy8gICAgICAgfSlcclxuICAgIC8vICAgICApO1xyXG4gICAgLy8gICAgIHJlc1s3XS5mb3JFYWNoKChjaGFwKSA9PlxyXG4gICAgLy8gICAgICAgYmF0Y2guZGVsZXRlKGRiLmNvbGxlY3Rpb24oXCJjaGFwdGVyc1wiKS5kb2MoY2hhcC5pZCkpXHJcbiAgICAvLyAgICAgKTtcclxuICAgIC8vICAgICByZXNbN10uZm9yRWFjaCgobG9jKSA9PlxyXG4gICAgLy8gICAgICAgYmF0Y2guZGVsZXRlKGRiLmNvbGxlY3Rpb24oXCJsb2NhdGlvbnNcIikuZG9jKGxvYy5pZCkpXHJcbiAgICAvLyAgICAgKTtcclxuICAgIC8vICAgICByZXNbN10uZm9yRWFjaCgobGlrZSkgPT5cclxuICAgIC8vICAgICAgIGJhdGNoLmRlbGV0ZShkYi5jb2xsZWN0aW9uKFwidXNlcnNMaWtlc1wiKS5kb2MobGlrZS5pZCkpXHJcbiAgICAvLyAgICAgKTtcclxuICAgIC8vICAgICByZXNbOF0uZm9yRWFjaCgobGlrZSkgPT5cclxuICAgIC8vICAgICAgIGJhdGNoLmRlbGV0ZShkYi5jb2xsZWN0aW9uKFwic3Rvcmllc0xpa2VzXCIpLmRvYyhsaWtlLmlkKSlcclxuICAgIC8vICAgICApO1xyXG4gICAgLy8gICAgIHJlc1s5XS5mb3JFYWNoKChsaWtlKSA9PlxyXG4gICAgLy8gICAgICAgYmF0Y2guZGVsZXRlKGRiLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzTGlrZXNcIikuZG9jKGxpa2UuaWQpKVxyXG4gICAgLy8gICAgICk7XHJcbiAgICAvLyAgICAgYmF0Y2guZGVsZXRlKGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKS5kb2ModXNlcklkKSk7XHJcbiAgICAvLyAgICAgYXV0aC5jdXJyZW50VXNlclxyXG4gICAgLy8gICAgICAgLmRlbGV0ZSgpXHJcbiAgICAvLyAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgIGJhdGNoLmNvbW1pdCgpO1xyXG4gICAgLy8gICAgICAgfSlcclxuICAgIC8vICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxuICAgIC8vICAgfSlcclxuICAgIC8vICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB1bnN1YnNjcmliZSA9IGF1dGgub25BdXRoU3RhdGVDaGFuZ2VkKCh1c2VyKSA9PiB7XHJcbiAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgc2V0VXNlcih1c2VyKTtcclxuICAgICAgICBpZiAodXNlci51aWQpIHtcclxuICAgICAgICAgIGxldCB1c2VybmFtZSA9IFwiXCI7XHJcbiAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgZGIuY29sbGVjdGlvbihcInVzZXJzXCIpXHJcbiAgICAgICAgICAgIC5kb2ModXNlci51aWQpXHJcbiAgICAgICAgICAgIC5vblNuYXBzaG90KChkb2MpID0+IHtcclxuICAgICAgICAgICAgICBpZiAoZG9jLmV4aXN0cykge1xyXG4gICAgICAgICAgICAgICAgdXNlcm5hbWUgPSBkb2MuZGF0YSgpLnVzZXJuYW1lO1xyXG4gICAgICAgICAgICAgICAgc2V0VXNlcih7IC4uLnVzZXIsIHVzZXJuYW1lLCBpbWFnZTogZG9jLmRhdGEoKS5pbWFnZSB9KTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRVc2VyKGZhbHNlKTtcclxuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBDbGVhbnVwIHN1YnNjcmlwdGlvbiBvbiB1bm1vdW50XHJcbiAgICByZXR1cm4gKCkgPT4gdW5zdWJzY3JpYmUoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8vIFJldHVybiB0aGUgdXNlciBvYmplY3QgYW5kIGF1dGggbWV0aG9kc1xyXG4gIHJldHVybiB7XHJcbiAgICBkZWxldGVBY2NvdW50LFxyXG4gICAgaXNMb2FkaW5nLFxyXG4gICAgZXJyb3JzLFxyXG4gICAgdXNlcixcclxuICAgIHNpZ25pbixcclxuICAgIHNpZ251cCxcclxuICAgIHNpZ25vdXQsXHJcbiAgICBzZW5kUGFzc3dvcmRSZXNldEVtYWlsLFxyXG4gICAgY29uZmlybVBhc3N3b3JkUmVzZXQsXHJcbiAgICB2ZXJpZnlFbWFpbCxcclxuICB9O1xyXG59XHJcbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgYWRkQmFzZVBhdGgsXG4gIGFkZExvY2FsZSxcbiAgaXNMb2NhbFVSTCxcbiAgTmV4dFJvdXRlcixcbiAgUHJlZmV0Y2hPcHRpb25zLFxuICByZXNvbHZlSHJlZixcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcbnR5cGUgUmVxdWlyZWRLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBuZXZlciA6IEtcbn1ba2V5b2YgVF1cbnR5cGUgT3B0aW9uYWxLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBLIDogbmV2ZXJcbn1ba2V5b2YgVF1cblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG59XG50eXBlIExpbmtQcm9wc1JlcXVpcmVkID0gUmVxdWlyZWRLZXlzPExpbmtQcm9wcz5cbnR5cGUgTGlua1Byb3BzT3B0aW9uYWwgPSBPcHRpb25hbEtleXM8TGlua1Byb3BzPlxuXG5sZXQgY2FjaGVkT2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG5jb25zdCBsaXN0ZW5lcnMgPSBuZXcgTWFwPEVsZW1lbnQsICgpID0+IHZvaWQ+KClcbmNvbnN0IEludGVyc2VjdGlvbk9ic2VydmVyID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgOiBudWxsXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIoKTogSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgfCB1bmRlZmluZWQge1xuICAvLyBSZXR1cm4gc2hhcmVkIGluc3RhbmNlIG9mIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIGFscmVhZHkgY3JlYXRlZFxuICBpZiAoY2FjaGVkT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gY2FjaGVkT2JzZXJ2ZXJcbiAgfVxuXG4gIC8vIE9ubHkgY3JlYXRlIHNoYXJlZCBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBzdXBwb3J0ZWQgaW4gYnJvd3NlclxuICBpZiAoIUludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgcmV0dXJuIChjYWNoZWRPYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAoZW50cmllcykgPT4ge1xuICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICBpZiAoIWxpc3RlbmVycy5oYXMoZW50cnkudGFyZ2V0KSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2IgPSBsaXN0ZW5lcnMuZ2V0KGVudHJ5LnRhcmdldCkhXG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDApIHtcbiAgICAgICAgICBjYWNoZWRPYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGxpc3RlbmVycy5kZWxldGUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGNiKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHsgcm9vdE1hcmdpbjogJzIwMHB4JyB9XG4gICkpXG59XG5cbmNvbnN0IGxpc3RlblRvSW50ZXJzZWN0aW9ucyA9IChlbDogRWxlbWVudCwgY2I6ICgpID0+IHZvaWQpID0+IHtcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBnZXRPYnNlcnZlcigpXG4gIGlmICghb2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gKCkgPT4ge31cbiAgfVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWwpXG4gIGxpc3RlbmVycy5zZXQoZWwsIGNiKVxuICByZXR1cm4gKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBvYnNlcnZlci51bm9ic2VydmUoZWwpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICB9XG4gICAgbGlzdGVuZXJzLmRlbGV0ZShlbClcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmVmZXRjaChcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnNcbik6IHZvaWQge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVyblxuICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9KVxuICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc10gPSB0cnVlXG59XG5cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudDogUmVhY3QuTW91c2VFdmVudCkge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICByZXR1cm4gKFxuICAgICh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB8fFxuICAgIGV2ZW50Lm1ldGFLZXkgfHxcbiAgICBldmVudC5jdHJsS2V5IHx8XG4gICAgZXZlbnQuc2hpZnRLZXkgfHxcbiAgICBldmVudC5hbHRLZXkgfHwgLy8gdHJpZ2dlcnMgcmVzb3VyY2UgZG93bmxvYWRcbiAgICAoZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpXG4gIClcbn1cblxuZnVuY3Rpb24gbGlua0NsaWNrZWQoXG4gIGU6IFJlYWN0Lk1vdXNlRXZlbnQsXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICByZXBsYWNlPzogYm9vbGVhbixcbiAgc2hhbGxvdz86IGJvb2xlYW4sXG4gIHNjcm9sbD86IGJvb2xlYW5cbik6IHZvaWQge1xuICBjb25zdCB7IG5vZGVOYW1lIH0gPSBlLmN1cnJlbnRUYXJnZXRcblxuICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICFpc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgIHJldHVyblxuICB9XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgfVxuXG4gIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHsgc2hhbGxvdyB9KS50aGVuKFxuICAgIChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAoIXN1Y2Nlc3MpIHJldHVyblxuICAgICAgaWYgKHNjcm9sbCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpXG4gICAgICB9XG4gICAgfVxuICApXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJnczoge1xuICAgICAga2V5OiBzdHJpbmdcbiAgICAgIGV4cGVjdGVkOiBzdHJpbmdcbiAgICAgIGFjdHVhbDogc3RyaW5nXG4gICAgfSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgK1xuICAgICAgICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCJcbiAgICAgICAgICAgIDogJycpXG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNSZXF1aXJlZCwgdHJ1ZT4gPSB7XG4gICAgICBocmVmOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCByZXF1aXJlZFByb3BzOiBMaW5rUHJvcHNSZXF1aXJlZFtdID0gT2JqZWN0LmtleXMoXG4gICAgICByZXF1aXJlZFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc1JlcXVpcmVkW11cbiAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzUmVxdWlyZWQpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSA9PSBudWxsIHx8XG4gICAgICAgICAgKHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNPcHRpb25hbCwgdHJ1ZT4gPSB7XG4gICAgICBhczogdHJ1ZSxcbiAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICBzY3JvbGw6IHRydWUsXG4gICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wczogTGlua1Byb3BzT3B0aW9uYWxbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgb3B0aW9uYWxQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNPcHRpb25hbFtdXG4gICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc09wdGlvbmFsKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnYXMnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldICYmXG4gICAgICAgICAgdHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmXG4gICAgICAgICAgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAga2V5ID09PSAncmVwbGFjZScgfHxcbiAgICAgICAga2V5ID09PSAnc2Nyb2xsJyB8fFxuICAgICAgICBrZXkgPT09ICdzaGFsbG93JyB8fFxuICAgICAgICBrZXkgPT09ICdwYXNzSHJlZicgfHxcbiAgICAgICAga2V5ID09PSAncHJlZmV0Y2gnXG4gICAgICApIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYGJvb2xlYW5gJyxcbiAgICAgICAgICAgIGFjdHVhbDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIGNvbnN0IGhhc1dhcm5lZCA9IFJlYWN0LnVzZVJlZihmYWxzZSlcbiAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgKVxuICAgIH1cbiAgfVxuICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG5cbiAgY29uc3QgW2NoaWxkRWxtLCBzZXRDaGlsZEVsbV0gPSBSZWFjdC51c2VTdGF0ZTxFbGVtZW50PigpXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcGF0aG5hbWUgPSAocm91dGVyICYmIHJvdXRlci5wYXRobmFtZSkgfHwgJy8nXG5cbiAgY29uc3QgeyBocmVmLCBhcyB9ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuaHJlZiwgdHJ1ZSlcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgYXM6IHByb3BzLmFzXG4gICAgICAgID8gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmFzKVxuICAgICAgICA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmLFxuICAgIH1cbiAgfSwgW3BhdGhuYW1lLCBwcm9wcy5ocmVmLCBwcm9wcy5hc10pXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoXG4gICAgICBwICYmXG4gICAgICBJbnRlcnNlY3Rpb25PYnNlcnZlciAmJlxuICAgICAgY2hpbGRFbG0gJiZcbiAgICAgIGNoaWxkRWxtLnRhZ05hbWUgJiZcbiAgICAgIGlzTG9jYWxVUkwoaHJlZilcbiAgICApIHtcbiAgICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgICBjb25zdCBpc1ByZWZldGNoZWQgPSBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc11cbiAgICAgIGlmICghaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgIHJldHVybiBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMoY2hpbGRFbG0sICgpID0+IHtcbiAgICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW3AsIGNoaWxkRWxtLCBocmVmLCBhcywgcm91dGVyXSlcblxuICBsZXQgeyBjaGlsZHJlbiwgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsIH0gPSBwcm9wc1xuICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gIH1cblxuICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gIGNvbnN0IGNoaWxkUHJvcHM6IHtcbiAgICBvbk1vdXNlRW50ZXI/OiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgaHJlZj86IHN0cmluZ1xuICAgIHJlZj86IGFueVxuICB9ID0ge1xuICAgIHJlZjogKGVsOiBhbnkpID0+IHtcbiAgICAgIGlmIChlbCkgc2V0Q2hpbGRFbG0oZWwpXG5cbiAgICAgIGlmIChjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZikge1xuICAgICAgICBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGQucmVmKGVsKVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGNoaWxkLnJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICB9XG4gICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwpXG4gICAgICB9XG4gICAgfSxcbiAgfVxuXG4gIGlmIChwKSB7XG4gICAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgICAgfVxuICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgeyBwcmlvcml0eTogdHJ1ZSB9KVxuICAgIH1cbiAgfVxuXG4gIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSkge1xuICAgIGNoaWxkUHJvcHMuaHJlZiA9IGFkZEJhc2VQYXRoKFxuICAgICAgYWRkTG9jYWxlKGFzLCByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZSwgcm91dGVyICYmIHJvdXRlci5kZWZhdWx0TG9jYWxlKVxuICAgIClcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGhcbn1cblxuLyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0hcbiAgPyAocGF0aDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aClcbiAgICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBwYXRoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArICcvJ1xuICAgICAgfVxuICAgIH1cbiAgOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaFxuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG4gICdsb2NhbGUnLFxuICAnbG9jYWxlcycsXG4gICdkZWZhdWx0TG9jYWxlJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKFxuICAgICAgICBBcnJheS5pc0FycmF5KF9yb3V0ZXJbcHJvcGVydHldKSA/IFtdIDoge30sXG4gICAgICAgIF9yb3V0ZXJbcHJvcGVydHldXG4gICAgICApIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSkge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBUb2tlbml6ZSBpbnB1dCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGxleGVyKHN0cikge1xuICAgIHZhciB0b2tlbnMgPSBbXTtcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gc3RyW2ldO1xuICAgICAgICBpZiAoY2hhciA9PT0gXCIqXCIgfHwgY2hhciA9PT0gXCIrXCIgfHwgY2hhciA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJNT0RJRklFUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRVNDQVBFRF9DSEFSXCIsIGluZGV4OiBpKyssIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIntcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk9QRU5cIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIn1cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNMT1NFXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCI6XCIpIHtcbiAgICAgICAgICAgIHZhciBuYW1lID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29kZSA9IHN0ci5jaGFyQ29kZUF0KGopO1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAvLyBgMC05YFxuICAgICAgICAgICAgICAgIChjb2RlID49IDQ4ICYmIGNvZGUgPD0gNTcpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBBLVpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDY1ICYmIGNvZGUgPD0gOTApIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBhLXpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDk3ICYmIGNvZGUgPD0gMTIyKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgX2BcbiAgICAgICAgICAgICAgICAgICAgY29kZSA9PT0gOTUpIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZSArPSBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFuYW1lKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhcmFtZXRlciBuYW1lIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTkFNRVwiLCBpbmRleDogaSwgdmFsdWU6IG5hbWUgfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIihcIikge1xuICAgICAgICAgICAgdmFyIGNvdW50ID0gMTtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIj9cIikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQYXR0ZXJuIGNhbm5vdCBzdGFydCB3aXRoIFxcXCI/XFxcIiBhdCBcIiArIGopO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXSArIHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCIpXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQtLTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBqKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzdHJbal0gPT09IFwiKFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHJbaiArIDFdICE9PSBcIj9cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhcHR1cmluZyBncm91cHMgYXJlIG5vdCBhbGxvd2VkIGF0IFwiICsgaik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb3VudClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5iYWxhbmNlZCBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICBpZiAoIXBhdHRlcm4pXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIlBBVFRFUk5cIiwgaW5kZXg6IGksIHZhbHVlOiBwYXR0ZXJuIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0hBUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgIH1cbiAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRU5EXCIsIGluZGV4OiBpLCB2YWx1ZTogXCJcIiB9KTtcbiAgICByZXR1cm4gdG9rZW5zO1xufVxuLyoqXG4gKiBQYXJzZSBhIHN0cmluZyBmb3IgdGhlIHJhdyB0b2tlbnMuXG4gKi9cbmZ1bmN0aW9uIHBhcnNlKHN0ciwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHRva2VucyA9IGxleGVyKHN0cik7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5wcmVmaXhlcywgcHJlZml4ZXMgPSBfYSA9PT0gdm9pZCAwID8gXCIuL1wiIDogX2E7XG4gICAgdmFyIGRlZmF1bHRQYXR0ZXJuID0gXCJbXlwiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdKz9cIjtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIGtleSA9IDA7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICB2YXIgdHJ5Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIGlmIChpIDwgdG9rZW5zLmxlbmd0aCAmJiB0b2tlbnNbaV0udHlwZSA9PT0gdHlwZSlcbiAgICAgICAgICAgIHJldHVybiB0b2tlbnNbaSsrXS52YWx1ZTtcbiAgICB9O1xuICAgIHZhciBtdXN0Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRyeUNvbnN1bWUodHlwZSk7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB2YXIgX2EgPSB0b2tlbnNbaV0sIG5leHRUeXBlID0gX2EudHlwZSwgaW5kZXggPSBfYS5pbmRleDtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuZXhwZWN0ZWQgXCIgKyBuZXh0VHlwZSArIFwiIGF0IFwiICsgaW5kZXggKyBcIiwgZXhwZWN0ZWQgXCIgKyB0eXBlKTtcbiAgICB9O1xuICAgIHZhciBjb25zdW1lVGV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFwiXCI7XG4gICAgICAgIHZhciB2YWx1ZTtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIHdoaWxlICgodmFsdWUgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKSB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpKSkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICB3aGlsZSAoaSA8IHRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKTtcbiAgICAgICAgdmFyIG5hbWUgPSB0cnlDb25zdW1lKFwiTkFNRVwiKTtcbiAgICAgICAgdmFyIHBhdHRlcm4gPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKTtcbiAgICAgICAgaWYgKG5hbWUgfHwgcGF0dGVybikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNoYXIgfHwgXCJcIjtcbiAgICAgICAgICAgIGlmIChwcmVmaXhlcy5pbmRleE9mKHByZWZpeCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSBwcmVmaXg7XG4gICAgICAgICAgICAgICAgcHJlZml4ID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSB8fCBrZXkrKyxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogcGF0dGVybiB8fCBkZWZhdWx0UGF0dGVybixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHZhbHVlID0gY2hhciB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpO1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHBhdGggKz0gdmFsdWU7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgb3BlbiA9IHRyeUNvbnN1bWUoXCJPUEVOXCIpO1xuICAgICAgICBpZiAob3Blbikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICB2YXIgbmFtZV8xID0gdHJ5Q29uc3VtZShcIk5BTUVcIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuXzEgPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICBtdXN0Q29uc3VtZShcIkNMT1NFXCIpO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWVfMSB8fCAocGF0dGVybl8xID8ga2V5KysgOiBcIlwiKSxcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBuYW1lXzEgJiYgIXBhdHRlcm5fMSA/IGRlZmF1bHRQYXR0ZXJuIDogcGF0dGVybl8xLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogc3VmZml4LFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBtdXN0Q29uc3VtZShcIkVORFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydHMucGFyc2UgPSBwYXJzZTtcbi8qKlxuICogQ29tcGlsZSBhIHN0cmluZyB0byBhIHRlbXBsYXRlIGZ1bmN0aW9uIGZvciB0aGUgcGF0aC5cbiAqL1xuZnVuY3Rpb24gY29tcGlsZShzdHIsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9GdW5jdGlvbihwYXJzZShzdHIsIG9wdGlvbnMpLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMuY29tcGlsZSA9IGNvbXBpbGU7XG4vKipcbiAqIEV4cG9zZSBhIG1ldGhvZCBmb3IgdHJhbnNmb3JtaW5nIHRva2VucyBpbnRvIHRoZSBwYXRoIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb0Z1bmN0aW9uKHRva2Vucywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHJlRmxhZ3MgPSBmbGFncyhvcHRpb25zKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2EsIF9iID0gb3B0aW9ucy52YWxpZGF0ZSwgdmFsaWRhdGUgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iO1xuICAgIC8vIENvbXBpbGUgYWxsIHRoZSB0b2tlbnMgaW50byByZWdleHBzLlxuICAgIHZhciBtYXRjaGVzID0gdG9rZW5zLm1hcChmdW5jdGlvbiAodG9rZW4pIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoXCJeKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpJFwiLCByZUZsYWdzKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV07XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbjtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGRhdGEgPyBkYXRhW3Rva2VuLm5hbWVdIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgdmFyIG9wdGlvbmFsID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiP1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIjtcbiAgICAgICAgICAgIHZhciByZXBlYXQgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXBlYXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhbiBhcnJheVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IGJlIGVtcHR5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHZhbHVlLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKHZhbHVlW2pdLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgYWxsIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKFN0cmluZyh2YWx1ZSksIHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIHZhciB0eXBlT2ZNZXNzYWdlID0gcmVwZWF0ID8gXCJhbiBhcnJheVwiIDogXCJhIHN0cmluZ1wiO1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gYmUgXCIgKyB0eXBlT2ZNZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9O1xufVxuZXhwb3J0cy50b2tlbnNUb0Z1bmN0aW9uID0gdG9rZW5zVG9GdW5jdGlvbjtcbi8qKlxuICogQ3JlYXRlIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIHNwZWMuXG4gKi9cbmZ1bmN0aW9uIG1hdGNoKHN0ciwgb3B0aW9ucykge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgdmFyIHJlID0gcGF0aFRvUmVnZXhwKHN0ciwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5tYXRjaCA9IG1hdGNoO1xuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBvdXRwdXQuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuZGVjb2RlLCBkZWNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHBhdGhuYW1lKSB7XG4gICAgICAgIHZhciBtID0gcmUuZXhlYyhwYXRobmFtZSk7XG4gICAgICAgIGlmICghbSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIHBhdGggPSBtWzBdLCBpbmRleCA9IG0uaW5kZXg7XG4gICAgICAgIHZhciBwYXJhbXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgIGlmIChtW2ldID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiY29udGludWVcIjtcbiAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2kgLSAxXTtcbiAgICAgICAgICAgIGlmIChrZXkubW9kaWZpZXIgPT09IFwiKlwiIHx8IGtleS5tb2RpZmllciA9PT0gXCIrXCIpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gbVtpXS5zcGxpdChrZXkucHJlZml4ICsga2V5LnN1ZmZpeCkubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVjb2RlKHZhbHVlLCBrZXkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IGRlY29kZShtW2ldLCBrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IG0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIF9sb29wXzEoaSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgcGF0aDogcGF0aCwgaW5kZXg6IGluZGV4LCBwYXJhbXM6IHBhcmFtcyB9O1xuICAgIH07XG59XG5leHBvcnRzLnJlZ2V4cFRvRnVuY3Rpb24gPSByZWdleHBUb0Z1bmN0aW9uO1xuLyoqXG4gKiBFc2NhcGUgYSByZWd1bGFyIGV4cHJlc3Npb24gc3RyaW5nLlxuICovXG5mdW5jdGlvbiBlc2NhcGVTdHJpbmcoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oWy4rKj89XiE6JHt9KClbXFxdfC9cXFxcXSkvZywgXCJcXFxcJDFcIik7XG59XG4vKipcbiAqIEdldCB0aGUgZmxhZ3MgZm9yIGEgcmVnZXhwIGZyb20gdGhlIG9wdGlvbnMuXG4gKi9cbmZ1bmN0aW9uIGZsYWdzKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gb3B0aW9ucyAmJiBvcHRpb25zLnNlbnNpdGl2ZSA/IFwiXCIgOiBcImlcIjtcbn1cbi8qKlxuICogUHVsbCBvdXQga2V5cyBmcm9tIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKSB7XG4gICAgaWYgKCFrZXlzKVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICAvLyBVc2UgYSBuZWdhdGl2ZSBsb29rYWhlYWQgdG8gbWF0Y2ggb25seSBjYXB0dXJpbmcgZ3JvdXBzLlxuICAgIHZhciBncm91cHMgPSBwYXRoLnNvdXJjZS5tYXRjaCgvXFwoKD8hXFw/KS9nKTtcbiAgICBpZiAoZ3JvdXBzKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ3JvdXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBrZXlzLnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IGksXG4gICAgICAgICAgICAgICAgcHJlZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbi8qKlxuICogVHJhbnNmb3JtIGFuIGFycmF5IGludG8gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5VG9SZWdleHAocGF0aHMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICB2YXIgcGFydHMgPSBwYXRocy5tYXAoZnVuY3Rpb24gKHBhdGgpIHsgcmV0dXJuIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKS5zb3VyY2U7IH0pO1xuICAgIHJldHVybiBuZXcgUmVnRXhwKFwiKD86XCIgKyBwYXJ0cy5qb2luKFwifFwiKSArIFwiKVwiLCBmbGFncyhvcHRpb25zKSk7XG59XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggcmVnZXhwIGZyb20gc3RyaW5nIGlucHV0LlxuICovXG5mdW5jdGlvbiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvUmVnZXhwKHBhcnNlKHBhdGgsIG9wdGlvbnMpLCBrZXlzLCBvcHRpb25zKTtcbn1cbi8qKlxuICogRXhwb3NlIGEgZnVuY3Rpb24gZm9yIHRha2luZyB0b2tlbnMgYW5kIHJldHVybmluZyBhIFJlZ0V4cC5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9SZWdleHAodG9rZW5zLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLnN0cmljdCwgc3RyaWN0ID0gX2EgPT09IHZvaWQgMCA/IGZhbHNlIDogX2EsIF9iID0gb3B0aW9ucy5zdGFydCwgc3RhcnQgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iLCBfYyA9IG9wdGlvbnMuZW5kLCBlbmQgPSBfYyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9jLCBfZCA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfZCA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfZDtcbiAgICB2YXIgZW5kc1dpdGggPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmVuZHNXaXRoIHx8IFwiXCIpICsgXCJdfCRcIjtcbiAgICB2YXIgZGVsaW1pdGVyID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl1cIjtcbiAgICB2YXIgcm91dGUgPSBzdGFydCA/IFwiXlwiIDogXCJcIjtcbiAgICAvLyBJdGVyYXRlIG92ZXIgdGhlIHRva2VucyBhbmQgY3JlYXRlIG91ciByZWdleHAgc3RyaW5nLlxuICAgIGZvciAodmFyIF9pID0gMCwgdG9rZW5zXzEgPSB0b2tlbnM7IF9pIDwgdG9rZW5zXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc18xW19pXTtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcm91dGUgKz0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbikpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4ucHJlZml4KSk7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5zdWZmaXgpKTtcbiAgICAgICAgICAgIGlmICh0b2tlbi5wYXR0ZXJuKSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleXMpXG4gICAgICAgICAgICAgICAgICAgIGtleXMucHVzaCh0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHByZWZpeCB8fCBzdWZmaXgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRva2VuLm1vZGlmaWVyID09PSBcIitcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtb2QgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgPyBcIj9cIiA6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKD86XCIgKyBzdWZmaXggKyBwcmVmaXggKyBcIig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSkqKVwiICsgc3VmZml4ICsgXCIpXCIgKyBtb2Q7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChlbmQpIHtcbiAgICAgICAgaWYgKCFzdHJpY3QpXG4gICAgICAgICAgICByb3V0ZSArPSBkZWxpbWl0ZXIgKyBcIj9cIjtcbiAgICAgICAgcm91dGUgKz0gIW9wdGlvbnMuZW5kc1dpdGggPyBcIiRcIiA6IFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIGVuZFRva2VuID0gdG9rZW5zW3Rva2Vucy5sZW5ndGggLSAxXTtcbiAgICAgICAgdmFyIGlzRW5kRGVsaW1pdGVkID0gdHlwZW9mIGVuZFRva2VuID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgICA/IGRlbGltaXRlci5pbmRleE9mKGVuZFRva2VuW2VuZFRva2VuLmxlbmd0aCAtIDFdKSA+IC0xXG4gICAgICAgICAgICA6IC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgICAgIGVuZFRva2VuID09PSB1bmRlZmluZWQ7XG4gICAgICAgIGlmICghc3RyaWN0KSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgZGVsaW1pdGVyICsgXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpKT9cIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzRW5kRGVsaW1pdGVkKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/PVwiICsgZGVsaW1pdGVyICsgXCJ8XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXcgUmVnRXhwKHJvdXRlLCBmbGFncyhvcHRpb25zKSk7XG59XG5leHBvcnRzLnRva2Vuc1RvUmVnZXhwID0gdG9rZW5zVG9SZWdleHA7XG4vKipcbiAqIE5vcm1hbGl6ZSB0aGUgZ2l2ZW4gcGF0aCBzdHJpbmcsIHJldHVybmluZyBhIHJlZ3VsYXIgZXhwcmVzc2lvbi5cbiAqXG4gKiBBbiBlbXB0eSBhcnJheSBjYW4gYmUgcGFzc2VkIGluIGZvciB0aGUga2V5cywgd2hpY2ggd2lsbCBob2xkIHRoZVxuICogcGxhY2Vob2xkZXIga2V5IGRlc2NyaXB0aW9ucy4gRm9yIGV4YW1wbGUsIHVzaW5nIGAvdXNlci86aWRgLCBga2V5c2Agd2lsbFxuICogY29udGFpbiBgW3sgbmFtZTogJ2lkJywgZGVsaW1pdGVyOiAnLycsIG9wdGlvbmFsOiBmYWxzZSwgcmVwZWF0OiBmYWxzZSB9XWAuXG4gKi9cbmZ1bmN0aW9uIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKHBhdGggaW5zdGFuY2VvZiBSZWdFeHApXG4gICAgICAgIHJldHVybiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwYXRoKSlcbiAgICAgICAgcmV0dXJuIGFycmF5VG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5wYXRoVG9SZWdleHAgPSBwYXRoVG9SZWdleHA7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBfX05FWFRfREFUQV9fICovXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gsXG4gIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuaW1wb3J0IHsgR29vZFBhZ2VDYWNoZSwgU3R5bGVTaGVldFR1cGxlIH0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3BhZ2UtbG9hZGVyJ1xuaW1wb3J0IHsgZGVub3JtYWxpemVQYWdlUGF0aCB9IGZyb20gJy4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGgnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldExvY2F0aW9uT3JpZ2luLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG59IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgaXNEeW5hbWljUm91dGUgfSBmcm9tICcuL3V0aWxzL2lzLWR5bmFtaWMnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi91dGlscy9xdWVyeXN0cmluZydcbmltcG9ydCByZXNvbHZlUmV3cml0ZXMgZnJvbSAnLi91dGlscy9yZXNvbHZlLXJld3JpdGVzJ1xuaW1wb3J0IHsgZ2V0Um91dGVNYXRjaGVyIH0gZnJvbSAnLi91dGlscy9yb3V0ZS1tYXRjaGVyJ1xuaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vdXRpbHMvcm91dGUtcmVnZXgnXG5pbXBvcnQgZXNjYXBlUGF0aERlbGltaXRlcnMgZnJvbSAnLi91dGlscy9lc2NhcGUtcGF0aC1kZWxpbWl0ZXJzJ1xuXG5pbnRlcmZhY2UgVHJhbnNpdGlvbk9wdGlvbnMge1xuICBzaGFsbG93PzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgTmV4dEhpc3RvcnlTdGF0ZSB7XG4gIHVybDogc3RyaW5nXG4gIGFzOiBzdHJpbmdcbiAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbn1cblxudHlwZSBIaXN0b3J5U3RhdGUgPSBudWxsIHwgeyBfX046IGZhbHNlIH0gfCAoeyBfX046IHRydWUgfSAmIE5leHRIaXN0b3J5U3RhdGUpXG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgY2FuY2VsbGVkOiB0cnVlLFxuICB9KVxufVxuXG5mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGg6IHN0cmluZywgcHJlZml4Pzogc3RyaW5nKSB7XG4gIHJldHVybiBwcmVmaXggJiYgcGF0aC5zdGFydHNXaXRoKCcvJylcbiAgICA/IHBhdGggPT09ICcvJ1xuICAgICAgPyBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChwcmVmaXgpXG4gICAgICA6IGAke3ByZWZpeH0ke3BhdGh9YFxuICAgIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTG9jYWxlKFxuICBwYXRoOiBzdHJpbmcsXG4gIGxvY2FsZT86IHN0cmluZyxcbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfaTE4bl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJiBsb2NhbGUgIT09IGRlZmF1bHRMb2NhbGUgJiYgIXBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUpXG4gICAgICA/IGFkZFBhdGhQcmVmaXgocGF0aCwgJy8nICsgbG9jYWxlKVxuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbExvY2FsZShwYXRoOiBzdHJpbmcsIGxvY2FsZT86IHN0cmluZykge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX2kxOG5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiYgcGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSlcbiAgICAgID8gcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCArIDEpIHx8ICcvJ1xuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gcGF0aCA9PT0gYmFzZVBhdGggfHwgcGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoICsgJy8nKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbiAgcmV0dXJuIGFkZFBhdGhQcmVmaXgocGF0aCwgYmFzZVBhdGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpIHx8ICcvJ1xufVxuXG4vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0xvY2FsVVJMKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpKSByZXR1cm4gdHJ1ZVxuICB0cnkge1xuICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKVxuICAgIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luICYmIGhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKVxuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxuZXhwb3J0IGZ1bmN0aW9uIGludGVycG9sYXRlQXMoXG4gIHJvdXRlOiBzdHJpbmcsXG4gIGFzUGF0aG5hbWU6IHN0cmluZyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pIHtcbiAgbGV0IGludGVycG9sYXRlZFJvdXRlID0gJydcblxuICBjb25zdCBkeW5hbWljUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICBjb25zdCBkeW5hbWljR3JvdXBzID0gZHluYW1pY1JlZ2V4Lmdyb3Vwc1xuICBjb25zdCBkeW5hbWljTWF0Y2hlcyA9XG4gICAgLy8gVHJ5IHRvIG1hdGNoIHRoZSBkeW5hbWljIHJvdXRlIGFnYWluc3QgdGhlIGFzUGF0aFxuICAgIChhc1BhdGhuYW1lICE9PSByb3V0ZSA/IGdldFJvdXRlTWF0Y2hlcihkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpIDogJycpIHx8XG4gICAgLy8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4gICAgLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxuICAgIHF1ZXJ5XG5cbiAgaW50ZXJwb2xhdGVkUm91dGUgPSByb3V0ZVxuICBjb25zdCBwYXJhbXMgPSBPYmplY3Qua2V5cyhkeW5hbWljR3JvdXBzKVxuXG4gIGlmIChcbiAgICAhcGFyYW1zLmV2ZXJ5KChwYXJhbSkgPT4ge1xuICAgICAgbGV0IHZhbHVlID0gZHluYW1pY01hdGNoZXNbcGFyYW1dIHx8ICcnXG4gICAgICBjb25zdCB7IHJlcGVhdCwgb3B0aW9uYWwgfSA9IGR5bmFtaWNHcm91cHNbcGFyYW1dXG5cbiAgICAgIC8vIHN1cHBvcnQgc2luZ2xlLWxldmVsIGNhdGNoLWFsbFxuICAgICAgLy8gVE9ETzogbW9yZSByb2J1c3QgaGFuZGxpbmcgZm9yIHVzZXItZXJyb3IgKHBhc3NpbmcgYC9gKVxuICAgICAgbGV0IHJlcGxhY2VkID0gYFske3JlcGVhdCA/ICcuLi4nIDogJyd9JHtwYXJhbX1dYFxuICAgICAgaWYgKG9wdGlvbmFsKSB7XG4gICAgICAgIHJlcGxhY2VkID0gYCR7IXZhbHVlID8gJy8nIDogJyd9WyR7cmVwbGFjZWR9XWBcbiAgICAgIH1cbiAgICAgIGlmIChyZXBlYXQgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB2YWx1ZSA9IFt2YWx1ZV1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgKG9wdGlvbmFsIHx8IHBhcmFtIGluIGR5bmFtaWNNYXRjaGVzKSAmJlxuICAgICAgICAvLyBJbnRlcnBvbGF0ZSBncm91cCBpbnRvIGRhdGEgVVJMIGlmIHByZXNlbnRcbiAgICAgICAgKGludGVycG9sYXRlZFJvdXRlID1cbiAgICAgICAgICBpbnRlcnBvbGF0ZWRSb3V0ZSEucmVwbGFjZShcbiAgICAgICAgICAgIHJlcGxhY2VkLFxuICAgICAgICAgICAgcmVwZWF0XG4gICAgICAgICAgICAgID8gKHZhbHVlIGFzIHN0cmluZ1tdKS5tYXAoZXNjYXBlUGF0aERlbGltaXRlcnMpLmpvaW4oJy8nKVxuICAgICAgICAgICAgICA6IGVzY2FwZVBhdGhEZWxpbWl0ZXJzKHZhbHVlIGFzIHN0cmluZylcbiAgICAgICAgICApIHx8ICcvJylcbiAgICAgIClcbiAgICB9KVxuICApIHtcbiAgICBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnIC8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG5cbiAgICAvLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuICAgIC8vIGRldmVsb3BtZW50IGluIHRoZSBgPExpbms+YCBjb21wb25lbnQgZGlyZWN0bHkuXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXJhbXMsXG4gICAgcmVzdWx0OiBpbnRlcnBvbGF0ZWRSb3V0ZSxcbiAgfVxufVxuXG5mdW5jdGlvbiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnk6IFBhcnNlZFVybFF1ZXJ5LCBwYXJhbXM6IHN0cmluZ1tdKSB7XG4gIGNvbnN0IGZpbHRlcmVkUXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cblxuICBPYmplY3Qua2V5cyhxdWVyeSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaWYgKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgZmlsdGVyZWRRdWVyeVtrZXldID0gcXVlcnlba2V5XVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIGZpbHRlcmVkUXVlcnlcbn1cblxuLyoqXG4gKiBSZXNvbHZlcyBhIGdpdmVuIGh5cGVybGluayB3aXRoIGEgY2VydGFpbiByb3V0ZXIgc3RhdGUgKGJhc2VQYXRoIG5vdCBpbmNsdWRlZCkuXG4gKiBQcmVzZXJ2ZXMgYWJzb2x1dGUgdXJscy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVIcmVmKFxuICBjdXJyZW50UGF0aDogc3RyaW5nLFxuICBocmVmOiBVcmwsXG4gIHJlc29sdmVBcz86IGJvb2xlYW5cbik6IHN0cmluZyB7XG4gIC8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG4gIGNvbnN0IGJhc2UgPSBuZXcgVVJMKGN1cnJlbnRQYXRoLCAnaHR0cDovL24nKVxuICBjb25zdCB1cmxBc1N0cmluZyA9XG4gICAgdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnID8gaHJlZiA6IGZvcm1hdFdpdGhWYWxpZGF0aW9uKGhyZWYpXG4gIHRyeSB7XG4gICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKVxuICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpXG4gICAgbGV0IGludGVycG9sYXRlZEFzID0gJydcblxuICAgIGlmIChcbiAgICAgIGlzRHluYW1pY1JvdXRlKGZpbmFsVXJsLnBhdGhuYW1lKSAmJlxuICAgICAgZmluYWxVcmwuc2VhcmNoUGFyYW1zICYmXG4gICAgICByZXNvbHZlQXNcbiAgICApIHtcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShmaW5hbFVybC5zZWFyY2hQYXJhbXMpXG5cbiAgICAgIGNvbnN0IHsgcmVzdWx0LCBwYXJhbXMgfSA9IGludGVycG9sYXRlQXMoXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgcXVlcnlcbiAgICAgIClcblxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBpbnRlcnBvbGF0ZWRBcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICBwYXRobmFtZTogcmVzdWx0LFxuICAgICAgICAgIGhhc2g6IGZpbmFsVXJsLmhhc2gsXG4gICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKSxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9XG4gICAgICBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luXG4gICAgICAgID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKVxuICAgICAgICA6IGZpbmFsVXJsLmhyZWZcblxuICAgIHJldHVybiAocmVzb2x2ZUFzXG4gICAgICA/IFtyZXNvbHZlZEhyZWYsIGludGVycG9sYXRlZEFzIHx8IHJlc29sdmVkSHJlZl1cbiAgICAgIDogcmVzb2x2ZWRIcmVmKSBhcyBzdHJpbmdcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxufVxuXG5jb25zdCBQQUdFX0xPQURfRVJST1IgPSBTeW1ib2woJ1BBR0VfTE9BRF9FUlJPUicpXG5leHBvcnQgZnVuY3Rpb24gbWFya0xvYWRpbmdFcnJvcihlcnI6IEVycm9yKTogRXJyb3Ige1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgUEFHRV9MT0FEX0VSUk9SLCB7fSlcbn1cblxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlcjogTmV4dFJvdXRlciwgdXJsOiBVcmwsIGFzOiBVcmwpIHtcbiAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gIHJldHVybiB7XG4gICAgdXJsOiBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIHVybCkpLFxuICAgIGFzOiBhcyA/IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgYXMpKSA6IGFzLFxuICB9XG59XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxuICBwcm9wcz86IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgZXJyPzogRXJyb3JcbiAgZXJyb3I/OiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHMgPSBQaWNrPFByaXZhdGVSb3V0ZUluZm8sICdDb21wb25lbnQnIHwgJ2Vycic+ICYge1xuICByb3V0ZXI6IFJvdXRlclxufSAmIFJlY29yZDxzdHJpbmcsIGFueT5cbmV4cG9ydCB0eXBlIEFwcENvbXBvbmVudCA9IENvbXBvbmVudFR5cGU8QXBwUHJvcHM+XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sIEFwcDogQXBwQ29tcG9uZW50KSA9PiBQcm9taXNlPHZvaWQ+XG5cbnR5cGUgQmVmb3JlUG9wU3RhdGVDYWxsYmFjayA9IChzdGF0ZTogTmV4dEhpc3RvcnlTdGF0ZSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPVxuICBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmXG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnlcblxuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmw6IHN0cmluZywgYXR0ZW1wdHM6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAvL1xuICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAvLyA+IG9wdGlvbi5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgLy9cbiAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKVxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgIH1cblxuICAgIHJldHVybiByZXMuanNvbigpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWY6IHN0cmluZywgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAvLyBsb29wLlxuICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgIG1hcmtMb2FkaW5nRXJyb3IoZXJyKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUHJpdmF0ZVJvdXRlSW5mbyB9XG4gIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gIHNkYzogeyBbYXNQYXRoOiBzdHJpbmddOiBvYmplY3QgfSA9IHt9XG4gIHN1YjogU3Vic2NyaXB0aW9uXG4gIGNsYzogQ29tcG9uZW50TG9hZENhbmNlbFxuICBwYWdlTG9hZGVyOiBhbnlcbiAgX2JwczogQmVmb3JlUG9wU3RhdGVDYWxsYmFjayB8IHVuZGVmaW5lZFxuICBldmVudHM6IE1pdHRFbWl0dGVyXG4gIF93cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gIF9pbkZsaWdodFJvdXRlPzogc3RyaW5nXG4gIF9zaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBpbml0aWFsU3R5bGVTaGVldHMsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgICAgbG9jYWxlLFxuICAgICAgbG9jYWxlcyxcbiAgICAgIGRlZmF1bHRMb2NhbGUsXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgaW5pdGlhbFN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICAgICAgQXBwOiBBcHBDb21wb25lbnRcbiAgICAgIHdyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gICAgICBlcnI/OiBFcnJvclxuICAgICAgaXNGYWxsYmFjazogYm9vbGVhblxuICAgICAgbG9jYWxlPzogc3RyaW5nXG4gICAgICBsb2NhbGVzPzogc3RyaW5nW11cbiAgICAgIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHM6IGluaXRpYWxTdHlsZVNoZWV0cyxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7XG4gICAgICBDb21wb25lbnQ6IEFwcCBhcyBDb21wb25lbnRUeXBlLFxuICAgICAgc3R5bGVTaGVldHM6IFtcbiAgICAgICAgLyogL19hcHAgZG9lcyBub3QgbmVlZCBpdHMgc3R5bGVzaGVldHMgbWFuYWdlZCAqL1xuICAgICAgXSxcbiAgICB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIHRoaXMuYXNQYXRoID1cbiAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBfX05FWFRfREFUQV9fLmF1dG9FeHBvcnQgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX2kxOG5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVcbiAgICAgIHRoaXMubG9jYWxlcyA9IGxvY2FsZXNcbiAgICAgIHRoaXMuZGVmYXVsdExvY2FsZSA9IGRlZmF1bHRMb2NhbGVcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICAgIGdldFVSTCgpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuXG4gICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnXG5cbiAgICAgICAgICBsZXQgc2Nyb2xsRGVib3VuY2VUaW1lb3V0OiB1bmRlZmluZWQgfCBOb2RlSlMuVGltZW91dFxuXG4gICAgICAgICAgY29uc3QgZGVib3VuY2VkU2Nyb2xsU2F2ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChzY3JvbGxEZWJvdW5jZVRpbWVvdXQpIGNsZWFyVGltZW91dChzY3JvbGxEZWJvdW5jZVRpbWVvdXQpXG5cbiAgICAgICAgICAgIHNjcm9sbERlYm91bmNlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB7IHVybCwgYXM6IGN1ckFzLCBvcHRpb25zIH0gPSBoaXN0b3J5LnN0YXRlXG4gICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGN1ckFzLFxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgICAgIF9OX1g6IHdpbmRvdy5zY3JvbGxYLFxuICAgICAgICAgICAgICAgICAgX05fWTogd2luZG93LnNjcm9sbFksXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSwgMTApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGRlYm91bmNlZFNjcm9sbFNhdmUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IGUuc3RhdGUgYXMgSGlzdG9yeVN0YXRlXG5cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFzdGF0ZS5fX04pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucyB9ID0gc3RhdGVcblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZShcbiAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgdXJsLFxuICAgICAgYXMsXG4gICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgIHNoYWxsb3c6IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLl9zaGFsbG93LFxuICAgICAgfSlcbiAgICApXG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIGFzeW5jIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmxcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgfVxuICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICBpZiAoU1QpIHtcbiAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSlcbiAgICB9XG5cbiAgICBhcyA9IGFkZExvY2FsZShhcywgdGhpcy5sb2NhbGUsIHRoaXMuZGVmYXVsdExvY2FsZSlcbiAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxMb2NhbGUoXG4gICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgIHRoaXMubG9jYWxlXG4gICAgKVxuICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhc1xuXG4gICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKSB7XG4gICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBc1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcylcbiAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcylcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSlcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAvLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbiAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICBjb25zdCB7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIucHJvbWlzZWRCdWlsZE1hbmlmZXN0XG5cbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHBhcnNlZFxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcykgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgIHBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgID8gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUpKVxuICAgICAgOiBwYXRobmFtZVxuXG4gICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykpIHtcbiAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgfVxuXG4gICAgbGV0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcblxuICAgIC8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4gICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKSB7XG4gICAgICByZXNvbHZlZEFzID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICBwYXJzZVJlbGF0aXZlVXJsKGFzKS5wYXRobmFtZSxcbiAgICAgICAgcGFnZXMsXG4gICAgICAgIGJhc2VQYXRoLFxuICAgICAgICByZXdyaXRlcyxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIChwOiBzdHJpbmcpID0+IHRoaXMuX3Jlc29sdmVIcmVmKHsgcGF0aG5hbWU6IHAgfSwgcGFnZXMpLnBhdGhuYW1lIVxuICAgICAgKVxuXG4gICAgICBpZiAocmVzb2x2ZWRBcyAhPT0gYXMpIHtcbiAgICAgICAgY29uc3QgcG90ZW50aWFsSHJlZiA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKFxuICAgICAgICAgIHRoaXMuX3Jlc29sdmVIcmVmKFxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkLCB7IHBhdGhuYW1lOiByZXNvbHZlZEFzIH0pLFxuICAgICAgICAgICAgcGFnZXMsXG4gICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICkucGF0aG5hbWUhXG4gICAgICAgIClcblxuICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwb3RlbnRpYWxIcmVmKSkge1xuICAgICAgICAgIHJvdXRlID0gcG90ZW50aWFsSHJlZlxuICAgICAgICAgIHBhdGhuYW1lID0gcG90ZW50aWFsSHJlZlxuICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksIHRoaXMubG9jYWxlKVxuXG4gICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgY29uc3QgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpXG4gICAgICBjb25zdCBhc1BhdGhuYW1lID0gcGFyc2VkQXMucGF0aG5hbWVcblxuICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICBjb25zdCBzaG91bGRJbnRlcnBvbGF0ZSA9IHJvdXRlID09PSBhc1BhdGhuYW1lXG4gICAgICBjb25zdCBpbnRlcnBvbGF0ZWRBcyA9IHNob3VsZEludGVycG9sYXRlXG4gICAgICAgID8gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkpXG4gICAgICAgIDogKHt9IGFzIHsgcmVzdWx0OiB1bmRlZmluZWQ7IHBhcmFtczogdW5kZWZpbmVkIH0pXG5cbiAgICAgIGlmICghcm91dGVNYXRjaCB8fCAoc2hvdWxkSW50ZXJwb2xhdGUgJiYgIWludGVycG9sYXRlZEFzLnJlc3VsdCkpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgIClcblxuICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgYCR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gYEludGVycG9sYXRpbmcgaHJlZmBcbiAgICAgICAgICAgICAgICAgIDogYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgYFxuICAgICAgICAgICAgICB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIChzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICA/IGBUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYFxuICAgICAgICAgICAgICA6IGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApICtcbiAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyAnaHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCdcbiAgICAgICAgICAgICAgICAgIDogJ2luY29tcGF0aWJsZS1ocmVmLWFzJ1xuICAgICAgICAgICAgICB9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzaG91bGRJbnRlcnBvbGF0ZSkge1xuICAgICAgICBhcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZEFzLCB7XG4gICAgICAgICAgICBwYXRobmFtZTogaW50ZXJwb2xhdGVkQXMucmVzdWx0LFxuICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgaW50ZXJwb2xhdGVkQXMucGFyYW1zISksXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcylcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHNoYWxsb3dcbiAgICAgIClcbiAgICAgIGxldCB7IGVycm9yLCBwcm9wcywgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIC8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuICAgICAgaWYgKFxuICAgICAgICAoX19OX1NTRyB8fCBfX05fU1NQKSAmJlxuICAgICAgICBwcm9wcyAmJlxuICAgICAgICAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMgJiZcbiAgICAgICAgKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuXG4gICAgICAgIC8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4gICAgICAgIC8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbiAgICAgICAgLy8gaXQncyBub3RcbiAgICAgICAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgIGNvbnN0IHBhcnNlZEhyZWYgPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICAgICAgICAgIHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWYsIHBhZ2VzKVxuXG4gICAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBhcnNlZEhyZWYucGF0aG5hbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoXG4gICAgICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgICAgICBkZXN0aW5hdGlvbixcbiAgICAgICAgICAgICAgZGVzdGluYXRpb24sXG4gICAgICAgICAgICAgIG9wdGlvbnNcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRlc3RpbmF0aW9uXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7fSlcbiAgICAgIH1cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICBtZXRob2QsXG4gICAgICAgIHVybCxcbiAgICAgICAgYWRkTG9jYWxlKGFzLCB0aGlzLmxvY2FsZSwgdGhpcy5kZWZhdWx0TG9jYWxlKSxcbiAgICAgICAgb3B0aW9uc1xuICAgICAgKVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBhcHBDb21wOiBhbnkgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50XG4gICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgIShyb3V0ZUluZm8uQ29tcG9uZW50IGFzIGFueSkuZ2V0SW5pdGlhbFByb3BzXG4gICAgICB9XG5cbiAgICAgIGF3YWl0IHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZSEsIHF1ZXJ5LCBjbGVhbmVkQXMsIHJvdXRlSW5mbykuY2F0Y2goXG4gICAgICAgIChlKSA9PiB7XG4gICAgICAgICAgaWYgKGUuY2FuY2VsbGVkKSBlcnJvciA9IGVycm9yIHx8IGVcbiAgICAgICAgICBlbHNlIHRocm93IGVcbiAgICAgICAgfVxuICAgICAgKVxuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGNsZWFuZWRBcylcbiAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uICYmICdfTl9YJyBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgd2luZG93LnNjcm9sbFRvKChvcHRpb25zIGFzIGFueSkuX05fWCwgKG9wdGlvbnMgYXMgYW55KS5fTl9ZKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcylcblxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgdGhpcy5fc2hhbGxvdyA9IG9wdGlvbnMuc2hhbGxvd1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgfSBhcyBIaXN0b3J5U3RhdGUsXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICBlcnI6IEVycm9yICYgeyBjb2RlOiBhbnk7IGNhbmNlbGxlZDogYm9vbGVhbiB9LFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgIC8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG5cbiAgICBpZiAoUEFHRV9MT0FEX0VSUk9SIGluIGVyciB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzKVxuXG4gICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcblxuICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IHBhZ2U6IENvbXBvbmVudCwgc3R5bGVTaGVldHMgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoXG4gICAgICAgICcvX2Vycm9yJ1xuICAgICAgKVxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICBlcnIsXG4gICAgICAgIGVycm9yOiBlcnIsXG4gICAgICB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IGF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgIGVycixcbiAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgfSBhcyBhbnkpXG4gICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKVxuICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihyb3V0ZUluZm9FcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHRydWUpXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgc2hhbGxvdzogYm9vbGVhbiA9IGZhbHNlXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG5cbiAgICAgIGlmIChzaGFsbG93ICYmIGNhY2hlZFJvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICByZXR1cm4gY2FjaGVkUm91dGVJbmZvXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA/IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oKHJlcykgPT4gKHtcbiAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogcmVzLnN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pKVxuXG4gICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBkYXRhSHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgZGVsQmFzZVBhdGgoYXMpLFxuICAgICAgICAgIF9fTl9TU0csXG4gICAgICAgICAgdGhpcy5sb2NhbGUsXG4gICAgICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhPFByaXZhdGVSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgIF9fTl9TU0dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgIClcbiAgICAgIClcblxuICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcylcbiAgICB9XG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm9cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSlcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICBfcmVzb2x2ZUhyZWYocGFyc2VkSHJlZjogVXJsT2JqZWN0LCBwYWdlczogc3RyaW5nW10sIGFwcGx5QmFzZVBhdGggPSB0cnVlKSB7XG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VkSHJlZlxuICAgIGNvbnN0IGNsZWFuUGF0aG5hbWUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChcbiAgICAgIGRlbm9ybWFsaXplUGFnZVBhdGgoYXBwbHlCYXNlUGF0aCA/IGRlbEJhc2VQYXRoKHBhdGhuYW1lISkgOiBwYXRobmFtZSEpXG4gICAgKVxuXG4gICAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICAgIHJldHVybiBwYXJzZWRIcmVmXG4gICAgfVxuXG4gICAgLy8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuICAgIGlmICghcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSEpKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICBwYWdlcy5zb21lKChwYWdlKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBpc0R5bmFtaWNSb3V0ZShwYWdlKSAmJlxuICAgICAgICAgIGdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lISlcbiAgICAgICAgKSB7XG4gICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IGFwcGx5QmFzZVBhdGggPyBhZGRCYXNlUGF0aChwYWdlKSA6IHBhZ2VcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gcGFyc2VkSHJlZlxuICB9XG5cbiAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9cbiAgYXN5bmMgcHJlZmV0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXNQYXRoOiBzdHJpbmcgPSB1cmwsXG4gICAgb3B0aW9uczogUHJlZmV0Y2hPcHRpb25zID0ge31cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZFxuXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcykgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIHRoaXMucGFnZUxvYWRlci5wcmVmZXRjaERhdGEoXG4gICAgICAgIHVybCxcbiAgICAgICAgYXNQYXRoLFxuICAgICAgICB0aGlzLmxvY2FsZSxcbiAgICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICApLFxuICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgIF0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxHb29kUGFnZUNhY2hlPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbY2FjaGVLZXldKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSlcbiAgICB9XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGFcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCBhcyBBcHBDb21wb25lbnQpXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLCBhcylcbiAgICAgIHRoaXMuY2xjKClcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeShkYXRhOiBQcml2YXRlUm91dGVJbmZvKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQgYXMgQXBwQ29tcG9uZW50KVxuICB9XG59XG4iLCIvLyBlc2NhcGUgZGVsaW1pdGVycyB1c2VkIGJ5IHBhdGgtdG8tcmVnZXhwXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlc2NhcGVQYXRoRGVsaW1pdGVycyhzZWdtZW50OiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gc2VnbWVudC5yZXBsYWNlKC9bLyM/XS9nLCAoY2hhcjogc3RyaW5nKSA9PiBlbmNvZGVVUklDb21wb25lbnQoY2hhcikpXG59XG4iLCIvLyBGb3JtYXQgZnVuY3Rpb24gbW9kaWZpZWQgZnJvbSBub2RlanNcbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0ICogYXMgcXVlcnlzdHJpbmcgZnJvbSAnLi9xdWVyeXN0cmluZydcblxuY29uc3Qgc2xhc2hlZFByb3RvY29scyA9IC9odHRwcz98ZnRwfGdvcGhlcnxmaWxlL1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VXJsKHVybE9iajogVXJsT2JqZWN0KSB7XG4gIGxldCB7IGF1dGgsIGhvc3RuYW1lIH0gPSB1cmxPYmpcbiAgbGV0IHByb3RvY29sID0gdXJsT2JqLnByb3RvY29sIHx8ICcnXG4gIGxldCBwYXRobmFtZSA9IHVybE9iai5wYXRobmFtZSB8fCAnJ1xuICBsZXQgaGFzaCA9IHVybE9iai5oYXNoIHx8ICcnXG4gIGxldCBxdWVyeSA9IHVybE9iai5xdWVyeSB8fCAnJ1xuICBsZXQgaG9zdDogc3RyaW5nIHwgZmFsc2UgPSBmYWxzZVxuXG4gIGF1dGggPSBhdXRoID8gZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpLnJlcGxhY2UoLyUzQS9pLCAnOicpICsgJ0AnIDogJydcblxuICBpZiAodXJsT2JqLmhvc3QpIHtcbiAgICBob3N0ID0gYXV0aCArIHVybE9iai5ob3N0XG4gIH0gZWxzZSBpZiAoaG9zdG5hbWUpIHtcbiAgICBob3N0ID0gYXV0aCArICh+aG9zdG5hbWUuaW5kZXhPZignOicpID8gYFske2hvc3RuYW1lfV1gIDogaG9zdG5hbWUpXG4gICAgaWYgKHVybE9iai5wb3J0KSB7XG4gICAgICBob3N0ICs9ICc6JyArIHVybE9iai5wb3J0XG4gICAgfVxuICB9XG5cbiAgaWYgKHF1ZXJ5ICYmIHR5cGVvZiBxdWVyeSA9PT0gJ29iamVjdCcpIHtcbiAgICBxdWVyeSA9IFN0cmluZyhxdWVyeXN0cmluZy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHF1ZXJ5IGFzIFBhcnNlZFVybFF1ZXJ5KSlcbiAgfVxuXG4gIGxldCBzZWFyY2ggPSB1cmxPYmouc2VhcmNoIHx8IChxdWVyeSAmJiBgPyR7cXVlcnl9YCkgfHwgJydcblxuICBpZiAocHJvdG9jb2wgJiYgcHJvdG9jb2wuc3Vic3RyKC0xKSAhPT0gJzonKSBwcm90b2NvbCArPSAnOidcblxuICBpZiAoXG4gICAgdXJsT2JqLnNsYXNoZXMgfHxcbiAgICAoKCFwcm90b2NvbCB8fCBzbGFzaGVkUHJvdG9jb2xzLnRlc3QocHJvdG9jb2wpKSAmJiBob3N0ICE9PSBmYWxzZSlcbiAgKSB7XG4gICAgaG9zdCA9ICcvLycgKyAoaG9zdCB8fCAnJylcbiAgICBpZiAocGF0aG5hbWUgJiYgcGF0aG5hbWVbMF0gIT09ICcvJykgcGF0aG5hbWUgPSAnLycgKyBwYXRobmFtZVxuICB9IGVsc2UgaWYgKCFob3N0KSB7XG4gICAgaG9zdCA9ICcnXG4gIH1cblxuICBpZiAoaGFzaCAmJiBoYXNoWzBdICE9PSAnIycpIGhhc2ggPSAnIycgKyBoYXNoXG4gIGlmIChzZWFyY2ggJiYgc2VhcmNoWzBdICE9PSAnPycpIHNlYXJjaCA9ICc/JyArIHNlYXJjaFxuXG4gIHBhdGhuYW1lID0gcGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLCBlbmNvZGVVUklDb21wb25lbnQpXG4gIHNlYXJjaCA9IHNlYXJjaC5yZXBsYWNlKCcjJywgJyUyMycpXG5cbiAgcmV0dXJuIGAke3Byb3RvY29sfSR7aG9zdH0ke3BhdGhuYW1lfSR7c2VhcmNofSR7aGFzaH1gXG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImltcG9ydCB7IGdldExvY2F0aW9uT3JpZ2luIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcblxuY29uc3QgRFVNTVlfQkFTRSA9IG5ldyBVUkwoXG4gIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gJ2h0dHA6Ly9uJyA6IGdldExvY2F0aW9uT3JpZ2luKClcbilcblxuLyoqXG4gKiBQYXJzZXMgcGF0aC1yZWxhdGl2ZSB1cmxzIChlLmcuIGAvaGVsbG8vd29ybGQ/Zm9vPWJhcmApLiBJZiB1cmwgaXNuJ3QgcGF0aC1yZWxhdGl2ZVxuICogKGUuZy4gYC4vaGVsbG9gKSB0aGVuIGF0IGxlYXN0IGJhc2UgbXVzdCBiZS5cbiAqIEFic29sdXRlIHVybHMgYXJlIHJlamVjdGVkIHdpdGggb25lIGV4Y2VwdGlvbiwgaW4gdGhlIGJyb3dzZXIsIGFic29sdXRlIHVybHMgdGhhdCBhcmUgb25cbiAqIHRoZSBjdXJyZW50IG9yaWdpbiB3aWxsIGJlIHBhcnNlZCBhcyByZWxhdGl2ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VSZWxhdGl2ZVVybCh1cmw6IHN0cmluZywgYmFzZT86IHN0cmluZykge1xuICBjb25zdCByZXNvbHZlZEJhc2UgPSBiYXNlID8gbmV3IFVSTChiYXNlLCBEVU1NWV9CQVNFKSA6IERVTU1ZX0JBU0VcbiAgY29uc3Qge1xuICAgIHBhdGhuYW1lLFxuICAgIHNlYXJjaFBhcmFtcyxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmLFxuICAgIG9yaWdpbixcbiAgICBwcm90b2NvbCxcbiAgfSA9IG5ldyBVUkwodXJsLCByZXNvbHZlZEJhc2UpXG4gIGlmIChcbiAgICBvcmlnaW4gIT09IERVTU1ZX0JBU0Uub3JpZ2luIHx8XG4gICAgKHByb3RvY29sICE9PSAnaHR0cDonICYmIHByb3RvY29sICE9PSAnaHR0cHM6JylcbiAgKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQ6IGludmFsaWQgcmVsYXRpdmUgVVJMJylcbiAgfVxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIHF1ZXJ5OiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZjogaHJlZi5zbGljZShEVU1NWV9CQVNFLm9yaWdpbi5sZW5ndGgpLFxuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBwYXRoVG9SZWdleHAgZnJvbSAnbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwJ1xuXG5leHBvcnQgeyBwYXRoVG9SZWdleHAgfVxuXG5leHBvcnQgY29uc3QgbWF0Y2hlck9wdGlvbnM6IHBhdGhUb1JlZ2V4cC5Ub2tlbnNUb1JlZ2V4cE9wdGlvbnMgJlxuICBwYXRoVG9SZWdleHAuUGFyc2VPcHRpb25zID0ge1xuICBzZW5zaXRpdmU6IGZhbHNlLFxuICBkZWxpbWl0ZXI6ICcvJyxcbn1cblxuZXhwb3J0IGNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnM6IHBhdGhUb1JlZ2V4cC5Ub2tlbnNUb1JlZ2V4cE9wdGlvbnMgJlxuICBwYXRoVG9SZWdleHAuUGFyc2VPcHRpb25zID0ge1xuICAuLi5tYXRjaGVyT3B0aW9ucyxcbiAgc3RyaWN0OiB0cnVlLFxufVxuXG5leHBvcnQgZGVmYXVsdCAoY3VzdG9tUm91dGUgPSBmYWxzZSkgPT4ge1xuICByZXR1cm4gKHBhdGg6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IGtleXM6IHBhdGhUb1JlZ2V4cC5LZXlbXSA9IFtdXG4gICAgY29uc3QgbWF0Y2hlclJlZ2V4ID0gcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChcbiAgICAgIHBhdGgsXG4gICAgICBrZXlzLFxuICAgICAgY3VzdG9tUm91dGUgPyBjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zIDogbWF0Y2hlck9wdGlvbnNcbiAgICApXG4gICAgY29uc3QgbWF0Y2hlciA9IHBhdGhUb1JlZ2V4cC5yZWdleHBUb0Z1bmN0aW9uKG1hdGNoZXJSZWdleCwga2V5cylcblxuICAgIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQsIHBhcmFtcz86IGFueSkgPT4ge1xuICAgICAgY29uc3QgcmVzID0gcGF0aG5hbWUgPT0gbnVsbCA/IGZhbHNlIDogbWF0Y2hlcihwYXRobmFtZSlcbiAgICAgIGlmICghcmVzKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuXG4gICAgICBpZiAoY3VzdG9tUm91dGUpIHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgICAgICAgIC8vIHVubmFtZWQgcGFyYW1zIHNob3VsZCBiZSByZW1vdmVkIGFzIHRoZXlcbiAgICAgICAgICAvLyBhcmUgbm90IGFsbG93ZWQgdG8gYmUgdXNlZCBpbiB0aGUgZGVzdGluYXRpb25cbiAgICAgICAgICBpZiAodHlwZW9mIGtleS5uYW1lID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgZGVsZXRlIChyZXMucGFyYW1zIGFzIGFueSlba2V5Lm5hbWVdXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7IC4uLnBhcmFtcywgLi4ucmVzLnBhcmFtcyB9XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgKiBhcyBwYXRoVG9SZWdleHAgZnJvbSAnbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwJ1xuXG50eXBlIFBhcmFtcyA9IHsgW3BhcmFtOiBzdHJpbmddOiBhbnkgfVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmVwYXJlRGVzdGluYXRpb24oXG4gIGRlc3RpbmF0aW9uOiBzdHJpbmcsXG4gIHBhcmFtczogUGFyYW1zLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gIGFwcGVuZFBhcmFtc1RvUXVlcnk6IGJvb2xlYW4sXG4gIGJhc2VQYXRoOiBzdHJpbmdcbikge1xuICBsZXQgcGFyc2VkRGVzdGluYXRpb246IHtcbiAgICBxdWVyeT86IFBhcnNlZFVybFF1ZXJ5XG4gICAgcHJvdG9jb2w/OiBzdHJpbmdcbiAgICBob3N0bmFtZT86IHN0cmluZ1xuICAgIHBvcnQ/OiBzdHJpbmdcbiAgfSAmIFJldHVyblR5cGU8dHlwZW9mIHBhcnNlUmVsYXRpdmVVcmw+ID0ge30gYXMgYW55XG5cbiAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgIHBhcnNlZERlc3RpbmF0aW9uID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHNlYXJjaFBhcmFtcyxcbiAgICAgIGhhc2gsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBwcm90b2NvbCxcbiAgICAgIHNlYXJjaCxcbiAgICAgIGhyZWYsXG4gICAgfSA9IG5ldyBVUkwoZGVzdGluYXRpb24pXG5cbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICAgIGhhc2gsXG4gICAgICBwcm90b2NvbCxcbiAgICAgIGhvc3RuYW1lLFxuICAgICAgcG9ydCxcbiAgICAgIHNlYXJjaCxcbiAgICAgIGhyZWYsXG4gICAgfVxuICB9XG5cbiAgY29uc3QgZGVzdFF1ZXJ5ID0gcGFyc2VkRGVzdGluYXRpb24ucXVlcnlcbiAgY29uc3QgZGVzdFBhdGggPSBgJHtwYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSF9JHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5oYXNoIHx8ICcnXG4gIH1gXG4gIGNvbnN0IGRlc3RQYXRoUGFyYW1LZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKGRlc3RQYXRoLCBkZXN0UGF0aFBhcmFtS2V5cylcblxuICBjb25zdCBkZXN0UGF0aFBhcmFtcyA9IGRlc3RQYXRoUGFyYW1LZXlzLm1hcCgoa2V5KSA9PiBrZXkubmFtZSlcblxuICBsZXQgZGVzdGluYXRpb25Db21waWxlciA9IHBhdGhUb1JlZ2V4cC5jb21waWxlKFxuICAgIGRlc3RQYXRoLFxuICAgIC8vIHdlIGRvbid0IHZhbGlkYXRlIHdoaWxlIGNvbXBpbGluZyB0aGUgZGVzdGluYXRpb24gc2luY2Ugd2Ugc2hvdWxkXG4gICAgLy8gaGF2ZSBhbHJlYWR5IHZhbGlkYXRlZCBiZWZvcmUgd2UgZ290IHRvIHRoaXMgcG9pbnQgYW5kIHZhbGlkYXRpbmdcbiAgICAvLyBicmVha3MgY29tcGlsaW5nIGRlc3RpbmF0aW9ucyB3aXRoIG5hbWVkIHBhdHRlcm4gcGFyYW1zIGZyb20gdGhlIHNvdXJjZVxuICAgIC8vIGUuZy4gL3NvbWV0aGluZzpoZWxsbyguKikgLT4gL2Fub3RoZXIvOmhlbGxvIGlzIGJyb2tlbiB3aXRoIHZhbGlkYXRpb25cbiAgICAvLyBzaW5jZSBjb21waWxlIHZhbGlkYXRpb24gaXMgbWVhbnQgZm9yIHJldmVyc2luZyBhbmQgbm90IGZvciBpbnNlcnRpbmdcbiAgICAvLyBwYXJhbXMgZnJvbSBhIHNlcGFyYXRlIHBhdGgtcmVnZXggaW50byBhbm90aGVyXG4gICAgeyB2YWxpZGF0ZTogZmFsc2UgfVxuICApXG4gIGxldCBuZXdVcmxcblxuICAvLyB1cGRhdGUgYW55IHBhcmFtcyBpbiBxdWVyeSB2YWx1ZXNcbiAgZm9yIChjb25zdCBba2V5LCBzdHJPckFycmF5XSBvZiBPYmplY3QuZW50cmllcyhkZXN0UXVlcnkpKSB7XG4gICAgbGV0IHZhbHVlID0gQXJyYXkuaXNBcnJheShzdHJPckFycmF5KSA/IHN0ck9yQXJyYXlbMF0gOiBzdHJPckFycmF5XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICAvLyB0aGUgdmFsdWUgbmVlZHMgdG8gc3RhcnQgd2l0aCBhIGZvcndhcmQtc2xhc2ggdG8gYmUgY29tcGlsZWRcbiAgICAgIC8vIGNvcnJlY3RseVxuICAgICAgdmFsdWUgPSBgLyR7dmFsdWV9YFxuICAgICAgY29uc3QgcXVlcnlDb21waWxlciA9IHBhdGhUb1JlZ2V4cC5jb21waWxlKHZhbHVlLCB7IHZhbGlkYXRlOiBmYWxzZSB9KVxuICAgICAgdmFsdWUgPSBxdWVyeUNvbXBpbGVyKHBhcmFtcykuc3Vic3RyKDEpXG4gICAgfVxuICAgIGRlc3RRdWVyeVtrZXldID0gdmFsdWVcbiAgfVxuXG4gIC8vIGFkZCBwYXRoIHBhcmFtcyB0byBxdWVyeSBpZiBpdCdzIG5vdCBhIHJlZGlyZWN0IGFuZCBub3RcbiAgLy8gYWxyZWFkeSBkZWZpbmVkIGluIGRlc3RpbmF0aW9uIHF1ZXJ5IG9yIHBhdGhcbiAgY29uc3QgcGFyYW1LZXlzID0gT2JqZWN0LmtleXMocGFyYW1zKVxuXG4gIGlmIChcbiAgICBhcHBlbmRQYXJhbXNUb1F1ZXJ5ICYmXG4gICAgIXBhcmFtS2V5cy5zb21lKChrZXkpID0+IGRlc3RQYXRoUGFyYW1zLmluY2x1ZGVzKGtleSkpXG4gICkge1xuICAgIGZvciAoY29uc3Qga2V5IG9mIHBhcmFtS2V5cykge1xuICAgICAgaWYgKCEoa2V5IGluIGRlc3RRdWVyeSkpIHtcbiAgICAgICAgZGVzdFF1ZXJ5W2tleV0gPSBwYXJhbXNba2V5XVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHNob3VsZEFkZEJhc2VQYXRoID0gZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpICYmIGJhc2VQYXRoXG5cbiAgdHJ5IHtcbiAgICBuZXdVcmwgPSBgJHtzaG91bGRBZGRCYXNlUGF0aCA/IGJhc2VQYXRoIDogJyd9JHtkZXN0aW5hdGlvbkNvbXBpbGVyKFxuICAgICAgcGFyYW1zXG4gICAgKX1gXG5cbiAgICBjb25zdCBbcGF0aG5hbWUsIGhhc2hdID0gbmV3VXJsLnNwbGl0KCcjJylcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCA9IGAke2hhc2ggPyAnIycgOiAnJ30ke2hhc2ggfHwgJyd9YFxuICAgIGRlbGV0ZSBwYXJzZWREZXN0aW5hdGlvbi5zZWFyY2hcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgaWYgKGVyci5tZXNzYWdlLm1hdGNoKC9FeHBlY3RlZCAuKj8gdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhbiBhcnJheS8pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBUbyB1c2UgYSBtdWx0aS1tYXRjaCBpbiB0aGUgZGVzdGluYXRpb24geW91IG11c3QgYWRkIFxcYCpcXGAgYXQgdGhlIGVuZCBvZiB0aGUgcGFyYW0gbmFtZSB0byBzaWduaWZ5IGl0IHNob3VsZCByZXBlYXQuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2ludmFsaWQtbXVsdGktbWF0Y2hgXG4gICAgICApXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9XG5cbiAgLy8gUXVlcnkgbWVyZ2Ugb3JkZXIgbG93ZXN0IHByaW9yaXR5IHRvIGhpZ2hlc3RcbiAgLy8gMS4gaW5pdGlhbCBVUkwgcXVlcnkgdmFsdWVzXG4gIC8vIDIuIHBhdGggc2VnbWVudCB2YWx1ZXNcbiAgLy8gMy4gZGVzdGluYXRpb24gc3BlY2lmaWVkIHF1ZXJ5IHZhbHVlc1xuICBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeSA9IHtcbiAgICAuLi5xdWVyeSxcbiAgICAuLi5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSxcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbmV3VXJsLFxuICAgIHBhcnNlZERlc3RpbmF0aW9uLFxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShcbiAgc2VhcmNoUGFyYW1zOiBVUkxTZWFyY2hQYXJhbXNcbik6IFBhcnNlZFVybFF1ZXJ5IHtcbiAgY29uc3QgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cbiAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICBpZiAodHlwZW9mIHF1ZXJ5W2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBxdWVyeVtrZXldID0gdmFsdWVcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpIHtcbiAgICAgIDsocXVlcnlba2V5XSBhcyBzdHJpbmdbXSkucHVzaCh2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgcXVlcnlba2V5XSA9IFtxdWVyeVtrZXldIGFzIHN0cmluZywgdmFsdWVdXG4gICAgfVxuICB9KVxuICByZXR1cm4gcXVlcnlcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShwYXJhbTogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKFxuICAgIHR5cGVvZiBwYXJhbSA9PT0gJ3N0cmluZycgfHxcbiAgICAodHlwZW9mIHBhcmFtID09PSAnbnVtYmVyJyAmJiAhaXNOYU4ocGFyYW0pKSB8fFxuICAgIHR5cGVvZiBwYXJhbSA9PT0gJ2Jvb2xlYW4nXG4gICkge1xuICAgIHJldHVybiBTdHJpbmcocGFyYW0pXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICcnXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMoXG4gIHVybFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgY29uc3QgcmVzdWx0ID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpXG4gIE9iamVjdC5lbnRyaWVzKHVybFF1ZXJ5KS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlLmZvckVhY2goKGl0ZW0pID0+IHJlc3VsdC5hcHBlbmQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKGl0ZW0pKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0LnNldChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0odmFsdWUpKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduKFxuICB0YXJnZXQ6IFVSTFNlYXJjaFBhcmFtcyxcbiAgLi4uc2VhcmNoUGFyYW1zTGlzdDogVVJMU2VhcmNoUGFyYW1zW11cbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIHNlYXJjaFBhcmFtc0xpc3QuZm9yRWFjaCgoc2VhcmNoUGFyYW1zKSA9PiB7XG4gICAgQXJyYXkuZnJvbShzZWFyY2hQYXJhbXMua2V5cygpKS5mb3JFYWNoKChrZXkpID0+IHRhcmdldC5kZWxldGUoa2V5KSlcbiAgICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4gdGFyZ2V0LmFwcGVuZChrZXksIHZhbHVlKSlcbiAgfSlcbiAgcmV0dXJuIHRhcmdldFxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCBwYXRoTWF0Y2ggZnJvbSAnLi9wYXRoLW1hdGNoJ1xuaW1wb3J0IHByZXBhcmVEZXN0aW5hdGlvbiBmcm9tICcuL3ByZXBhcmUtZGVzdGluYXRpb24nXG5pbXBvcnQgeyBSZXdyaXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL2xvYWQtY3VzdG9tLXJvdXRlcydcbmltcG9ydCB7IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoIH0gZnJvbSAnLi4vLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcblxuY29uc3QgY3VzdG9tUm91dGVNYXRjaGVyID0gcGF0aE1hdGNoKHRydWUpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc29sdmVSZXdyaXRlcyhcbiAgYXNQYXRoOiBzdHJpbmcsXG4gIHBhZ2VzOiBzdHJpbmdbXSxcbiAgYmFzZVBhdGg6IHN0cmluZyxcbiAgcmV3cml0ZXM6IFJld3JpdGVbXSxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICByZXNvbHZlSHJlZjogKHBhdGg6IHN0cmluZykgPT4gc3RyaW5nXG4pIHtcbiAgaWYgKCFwYWdlcy5pbmNsdWRlcyhhc1BhdGgpKSB7XG4gICAgZm9yIChjb25zdCByZXdyaXRlIG9mIHJld3JpdGVzKSB7XG4gICAgICBjb25zdCBtYXRjaGVyID0gY3VzdG9tUm91dGVNYXRjaGVyKHJld3JpdGUuc291cmNlKVxuICAgICAgY29uc3QgcGFyYW1zID0gbWF0Y2hlcihhc1BhdGgpXG5cbiAgICAgIGlmIChwYXJhbXMpIHtcbiAgICAgICAgaWYgKCFyZXdyaXRlLmRlc3RpbmF0aW9uKSB7XG4gICAgICAgICAgLy8gdGhpcyBpcyBhIHByb3hpZWQgcmV3cml0ZSB3aGljaCBpc24ndCBoYW5kbGVkIG9uIHRoZSBjbGllbnRcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRlc3RSZXMgPSBwcmVwYXJlRGVzdGluYXRpb24oXG4gICAgICAgICAgcmV3cml0ZS5kZXN0aW5hdGlvbixcbiAgICAgICAgICBwYXJhbXMsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICByZXdyaXRlLmJhc2VQYXRoID09PSBmYWxzZSA/ICcnIDogYmFzZVBhdGhcbiAgICAgICAgKVxuICAgICAgICBhc1BhdGggPSBkZXN0UmVzLnBhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lIVxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCBkZXN0UmVzLnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5KVxuXG4gICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhyZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChhc1BhdGgpKSkge1xuICAgICAgICAgIC8vIGNoZWNrIGlmIHdlIG5vdyBtYXRjaCBhIHBhZ2UgYXMgdGhpcyBtZWFucyB3ZSBhcmUgZG9uZVxuICAgICAgICAgIC8vIHJlc29sdmluZyB0aGUgcmV3cml0ZXNcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY2hlY2sgaWYgd2UgbWF0Y2ggYSBkeW5hbWljLXJvdXRlLCBpZiBzbyB3ZSBicmVhayB0aGUgcmV3cml0ZXMgY2hhaW5cbiAgICAgICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gcmVzb2x2ZUhyZWYoYXNQYXRoKVxuXG4gICAgICAgIGlmIChyZXNvbHZlZEhyZWYgIT09IGFzUGF0aCAmJiBwYWdlcy5pbmNsdWRlcyhyZXNvbHZlZEhyZWYpKSB7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gYXNQYXRoXG59XG4iLCJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi9yb3V0ZS1yZWdleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXhcbiAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lISlcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nXG4gICAgICAgIClcbiAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV1cbiAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXVxuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKChlbnRyeSkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgIDogZGVjb2RlKG0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcGFyYW1zXG4gIH1cbn1cbiIsImludGVyZmFjZSBHcm91cCB7XG4gIHBvczogbnVtYmVyXG4gIHJlcGVhdDogYm9vbGVhblxuICBvcHRpb25hbDogYm9vbGVhblxufVxuXG4vLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKVxufVxuXG5mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcihwYXJhbTogc3RyaW5nKSB7XG4gIGNvbnN0IG9wdGlvbmFsID0gcGFyYW0uc3RhcnRzV2l0aCgnWycpICYmIHBhcmFtLmVuZHNXaXRoKCddJylcbiAgaWYgKG9wdGlvbmFsKSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgxLCAtMSlcbiAgfVxuICBjb25zdCByZXBlYXQgPSBwYXJhbS5zdGFydHNXaXRoKCcuLi4nKVxuICBpZiAocmVwZWF0KSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgzKVxuICB9XG4gIHJldHVybiB7IGtleTogcGFyYW0sIHJlcGVhdCwgb3B0aW9uYWwgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVSZWdleChcbiAgbm9ybWFsaXplZFJvdXRlOiBzdHJpbmdcbik6IHtcbiAgcmU6IFJlZ0V4cFxuICBuYW1lZFJlZ2V4Pzogc3RyaW5nXG4gIHJvdXRlS2V5cz86IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfVxuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfVxufSB7XG4gIGNvbnN0IHNlZ21lbnRzID0gKG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJylcbiAgICAuc2xpY2UoMSlcbiAgICAuc3BsaXQoJy8nKVxuXG4gIGNvbnN0IGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9ID0ge31cbiAgbGV0IGdyb3VwSW5kZXggPSAxXG4gIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgIGdyb3Vwc1trZXldID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0LCBvcHRpb25hbCB9XG4gICAgICAgIHJldHVybiByZXBlYXQgPyAob3B0aW9uYWwgPyAnKD86LyguKz8pKT8nIDogJy8oLis/KScpIDogJy8oW14vXSs/KSdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgfVxuICAgIH0pXG4gICAgLmpvaW4oJycpXG5cbiAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIGxldCByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICBsZXQgcm91dGVLZXlDaGFyTGVuZ3RoID0gMVxuXG4gICAgLy8gYnVpbGRzIGEgbWluaW1hbCByb3V0ZUtleSB1c2luZyBvbmx5IGEteiBhbmQgbWluaW1hbCBudW1iZXIgb2YgY2hhcmFjdGVyc1xuICAgIGNvbnN0IGdldFNhZmVSb3V0ZUtleSA9ICgpID0+IHtcbiAgICAgIGxldCByb3V0ZUtleSA9ICcnXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm91dGVLZXlDaGFyTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcm91dGVLZXkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShyb3V0ZUtleUNoYXJDb2RlKVxuICAgICAgICByb3V0ZUtleUNoYXJDb2RlKytcblxuICAgICAgICBpZiAocm91dGVLZXlDaGFyQ29kZSA+IDEyMikge1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckxlbmd0aCsrXG4gICAgICAgICAgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByb3V0ZUtleVxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlS2V5czogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9ID0ge31cblxuICAgIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgICAgLy8gcmVwbGFjZSBhbnkgbm9uLXdvcmQgY2hhcmFjdGVycyBzaW5jZSB0aGV5IGNhbiBicmVha1xuICAgICAgICAgIC8vIHRoZSBuYW1lZCByZWdleFxuICAgICAgICAgIGxldCBjbGVhbmVkS2V5ID0ga2V5LnJlcGxhY2UoL1xcVy9nLCAnJylcbiAgICAgICAgICBsZXQgaW52YWxpZEtleSA9IGZhbHNlXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiB0aGUga2V5IGlzIHN0aWxsIGludmFsaWQgYW5kIGZhbGxiYWNrIHRvIHVzaW5nIGEga25vd25cbiAgICAgICAgICAvLyBzYWZlIGtleVxuICAgICAgICAgIGlmIChjbGVhbmVkS2V5Lmxlbmd0aCA9PT0gMCB8fCBjbGVhbmVkS2V5Lmxlbmd0aCA+IDMwKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWlzTmFOKHBhcnNlSW50KGNsZWFuZWRLZXkuc3Vic3RyKDAsIDEpKSkpIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGludmFsaWRLZXkpIHtcbiAgICAgICAgICAgIGNsZWFuZWRLZXkgPSBnZXRTYWZlUm91dGVLZXkoKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlS2V5c1tjbGVhbmVkS2V5XSA9IGtleVxuICAgICAgICAgIHJldHVybiByZXBlYXRcbiAgICAgICAgICAgID8gb3B0aW9uYWxcbiAgICAgICAgICAgICAgPyBgKD86Lyg/PCR7Y2xlYW5lZEtleX0+Lis/KSk/YFxuICAgICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT4uKz8pYFxuICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+W14vXSs/KWBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5qb2luKCcnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgICAgZ3JvdXBzLFxuICAgICAgcm91dGVLZXlzLFxuICAgICAgbmFtZWRSZWdleDogYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgLFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgZ3JvdXBzLFxuICB9XG59XG4iLCJpbXBvcnQgeyBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSAnaHR0cCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBmb3JtYXRVcmwgfSBmcm9tICcuL3JvdXRlci91dGlscy9mb3JtYXQtdXJsJ1xuaW1wb3J0IHsgTWFuaWZlc3RJdGVtIH0gZnJvbSAnLi4vc2VydmVyL2xvYWQtY29tcG9uZW50cydcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICdAbmV4dC9lbnYnXG5pbXBvcnQgeyBCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vc2VydmVyL2dldC1wYWdlLWZpbGVzJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuLyoqXG4gKiBXZWIgdml0YWxzIHByb3ZpZGVkIHRvIF9hcHAucmVwb3J0V2ViVml0YWxzIGJ5IENvcmUgV2ViIFZpdGFscyBwbHVnaW4gZGV2ZWxvcGVkIGJ5IEdvb2dsZSBDaHJvbWUgdGVhbS5cbiAqIGh0dHBzOi8vbmV4dGpzLm9yZy9ibG9nL25leHQtOS00I2ludGVncmF0ZWQtd2ViLXZpdGFscy1yZXBvcnRpbmdcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dFdlYlZpdGFsc01ldHJpYyA9IHtcbiAgaWQ6IHN0cmluZ1xuICBsYWJlbDogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBzdGFydFRpbWU6IG51bWJlclxuICB2YWx1ZTogbnVtYmVyXG59XG5cbmV4cG9ydCB0eXBlIEVuaGFuY2VyPEM+ID0gKENvbXBvbmVudDogQykgPT4gQ1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRzRW5oYW5jZXIgPVxuICB8IHtcbiAgICAgIGVuaGFuY2VBcHA/OiBFbmhhbmNlcjxBcHBUeXBlPlxuICAgICAgZW5oYW5jZUNvbXBvbmVudD86IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuICAgIH1cbiAgfCBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZVJlc3VsdCA9IHtcbiAgaHRtbDogc3RyaW5nXG4gIGhlYWQ/OiBBcnJheTxKU1guRWxlbWVudCB8IG51bGw+XG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2UgPSAoXG4gIG9wdGlvbnM/OiBDb21wb25lbnRzRW5oYW5jZXJcbikgPT4gUmVuZGVyUGFnZVJlc3VsdCB8IFByb21pc2U8UmVuZGVyUGFnZVJlc3VsdD5cblxuZXhwb3J0IHR5cGUgQmFzZUNvbnRleHQgPSB7XG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgSGVhZEVudHJ5ID0gW3N0cmluZywgeyBba2V5OiBzdHJpbmddOiBhbnkgfV1cblxuZXhwb3J0IHR5cGUgTkVYVF9EQVRBID0ge1xuICBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PlxuICBwYWdlOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGJ1aWxkSWQ6IHN0cmluZ1xuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICBuZXh0RXhwb3J0PzogYm9vbGVhblxuICBhdXRvRXhwb3J0PzogYm9vbGVhblxuICBpc0ZhbGxiYWNrPzogYm9vbGVhblxuICBkeW5hbWljSWRzPzogc3RyaW5nW11cbiAgZXJyPzogRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfVxuICBnc3A/OiBib29sZWFuXG4gIGdzc3A/OiBib29sZWFuXG4gIGN1c3RvbVNlcnZlcj86IGJvb2xlYW5cbiAgZ2lwPzogYm9vbGVhblxuICBhcHBHaXA/OiBib29sZWFuXG4gIGhlYWQ6IEhlYWRFbnRyeVtdXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogYENvbXBvbmVudGAgdGhlIHRyZWUgb2YgdGhlIEFwcCB0byB1c2UgaWYgbmVlZGluZyB0byByZW5kZXIgc2VwYXJhdGVseVxuICAgKi9cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyPiA9IHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+XG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG4gIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gIHJvdXRlcjogUlxufVxuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsUHJvcHMgPSB7XG4gIHBhZ2VQcm9wczogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzVHlwZTxcbiAgUiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyLFxuICBQID0ge31cbj4gPSBBcHBJbml0aWFsUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIFA+XG4gIHJvdXRlcjogUlxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQgJiB7XG4gIHJlbmRlclBhZ2U6IFJlbmRlclBhZ2Vcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMgPSBSZW5kZXJQYWdlUmVzdWx0ICYge1xuICBzdHlsZXM/OiBSZWFjdC5SZWFjdEVsZW1lbnRbXSB8IFJlYWN0LlJlYWN0RnJhZ21lbnRcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgZGFuZ2Vyb3VzQXNQYXRoOiBzdHJpbmdcbiAgZG9jQ29tcG9uZW50c1JlbmRlcmVkOiB7XG4gICAgSHRtbD86IGJvb2xlYW5cbiAgICBNYWluPzogYm9vbGVhblxuICAgIEhlYWQ/OiBib29sZWFuXG4gICAgTmV4dFNjcmlwdD86IGJvb2xlYW5cbiAgfVxuICBidWlsZE1hbmlmZXN0OiBCdWlsZE1hbmlmZXN0XG4gIGFtcFBhdGg6IHN0cmluZ1xuICBpbkFtcE1vZGU6IGJvb2xlYW5cbiAgaHlicmlkQW1wOiBib29sZWFuXG4gIGlzRGV2ZWxvcG1lbnQ6IGJvb2xlYW5cbiAgZHluYW1pY0ltcG9ydHM6IE1hbmlmZXN0SXRlbVtdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2VcbiAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmc6IHN0cmluZ1xuICBsb2NhbGU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcblxuICBwcmV2aWV3PzogYm9vbGVhblxuICAvKipcbiAgICogUHJldmlldyBkYXRhIHNldCBvbiB0aGUgcmVxdWVzdCwgaWYgYW55XG4gICAqICovXG4gIHByZXZpZXdEYXRhPzogYW55XG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3QodXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3Qoc3RhdHVzOiBudW1iZXIsIHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybDogVXJsT2JqZWN0KTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFVybCh1cmwpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZVBhdGhTZXA9bm9ybWFsaXplUGF0aFNlcDtleHBvcnRzLmRlbm9ybWFsaXplUGFnZVBhdGg9ZGVub3JtYWxpemVQYWdlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVQYXRoU2VwKHBhdGgpe3JldHVybiBwYXRoLnJlcGxhY2UoL1xcXFwvZywnLycpO31mdW5jdGlvbiBkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhZ2Upe3BhZ2U9bm9ybWFsaXplUGF0aFNlcChwYWdlKTtpZihwYWdlLnN0YXJ0c1dpdGgoJy9pbmRleC8nKSl7cGFnZT1wYWdlLnNsaWNlKDYpO31lbHNlIGlmKHBhZ2U9PT0nL2luZGV4Jyl7cGFnZT0nLyc7fXJldHVybiBwYWdlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBBbGVydCwgQnV0dG9uIH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmltcG9ydCBCYW5uZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcHJvZmlsZS9CYW5uZXJcIjtcclxuaW1wb3J0IFRhYnMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcHJvZmlsZS9UYWJzXCI7XHJcbmltcG9ydCBTdG9yaWVzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3Byb2ZpbGUvU3Rvcmllc1wiO1xyXG5pbXBvcnQgQ2hhcmFjdGVycyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9wcm9maWxlL0NoYXJhY3RlcnNcIjtcclxuaW1wb3J0IEZvbGxvd2VycyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9wcm9maWxlL0ZvbGxvd2Vyc1wiO1xyXG5pbXBvcnQgTG9jYXRpb25zIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3Byb2ZpbGUvTG9jYXRpb25zXCI7XHJcbmltcG9ydCBTZXR0aW5ncyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9wcm9maWxlL1NldHRpbmdzXCI7XHJcblxyXG5pbXBvcnQgeyBnZXRQcm9maWxlLCBjaGFuZ2VQcm9maWxlIH0gZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvbnMvdXNlckFjdGlvbnNcIjtcclxuaW1wb3J0IHtcclxuICBnZXRVc2VyU3RvcmllcyxcclxuICBnZXRGYXZvcml0ZVN0b3JpZXMsXHJcbiAgZ2V0VXNlckxvY2F0aW9ucyxcclxufSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9ucy9zdG9yaWVzQWN0aW9uc1wiO1xyXG5pbXBvcnQge1xyXG4gIGdldFVzZXJDaGFyYWN0ZXJzLFxyXG4gIGdldEZhdm9yaXRlQ2hhcmFjdGVycyxcclxufSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9ucy9jaGFyYWN0ZXJzQWN0aW9uc1wiO1xyXG5pbXBvcnQge1xyXG4gIGdldEZhdm9yaXRlQXV0aG9ycyxcclxuICBnZXRGb2xsb3dlcnMsXHJcbn0gZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvbnMvdXNlckFjdGlvbnNcIjtcclxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gXCIuLi8uLi9ob29rcy91c2VySG9va3NcIjtcclxuaW1wb3J0IExvYWRpbmdTY3JlZW4gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvaG9jL0xvYWRpbmdTY3JlZW5cIjtcclxuaW1wb3J0IFJlZGlyZWN0Q29tcCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9ob2MvUmVkaXJlY3RDb21wXCI7XHJcblxyXG5jb25zdCBQcm9maWxlID0gKHtcclxuICBnZXRQcm9maWxlLFxyXG4gIHByb2ZpbGUsXHJcbiAgc3RvcmllcyxcclxuICBsb2NhdGlvbnMsXHJcbiAgZ2V0VXNlclN0b3JpZXMsXHJcbiAgZ2V0VXNlckNoYXJhY3RlcnMsXHJcbiAgZ2V0RmF2b3JpdGVBdXRob3JzLFxyXG4gIGdldEZhdm9yaXRlQ2hhcmFjdGVycyxcclxuICBnZXRGYXZvcml0ZVN0b3JpZXMsXHJcbiAgZ2V0VXNlckxvY2F0aW9ucyxcclxuICBjaGFuZ2VQcm9maWxlLFxyXG4gIGdldEZvbGxvd2VycyxcclxuICBjaGFyYWN0ZXJzLFxyXG4gIGZhdkF1dGhvcnMsXHJcbiAgZm9sbG93ZXJzLFxyXG4gIGZhdkNoYXJhY3RlcnMsXHJcbiAgZmF2U3RvcmllcyxcclxuICBsb2FkaW5nLFxyXG59KSA9PiB7XHJcbiAgY29uc3QgW3RhYnNdID0gdXNlU3RhdGUoW1xyXG4gICAgXCJzdG9yaWVzXCIsXHJcbiAgICBcImNoYXJhY3RlcnNcIixcclxuICAgIFwibG9jYXRpb25zXCIsXHJcbiAgICBcImZhdm9yaXRlcyBzdG9yaWVzXCIsXHJcbiAgICBcImZhdm9yaXRlcyBjaGFyYWN0ZXJzXCIsXHJcbiAgICBcImZvbGxvd2Vyc1wiLFxyXG4gICAgXCJmb2xsb3dpbmdzXCIsXHJcbiAgXSk7XHJcbiAgY29uc3QgW29wZW5TZXR0aW5ncywgc2V0T3BlblNldHRpbmdzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbY3VycmVudFRhYiwgc2V0Q3VycmVudFRhYl0gPSB1c2VTdGF0ZShcInN0b3JpZXNcIik7XHJcbiAgY29uc3QgW2ZhdlRhYiwgc2V0RmF2VGFiXSA9IHVzZVN0YXRlKFwiZmF2YXV0aG9yc1wiKTtcclxuICBjb25zdCBbZmF2b3JpdGVTdG9yaWVzLCBzZXRGYXZvcml0ZVN0b3JpZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtmYXZvcml0ZUNoYXJhY3RlcnMsIHNldEZhdm9yaXRlQ2hhcmFjdGVyc10gPSB1c2VTdGF0ZShmYXZDaGFyYWN0ZXJzKTtcclxuICBjb25zdCBjaGFuZ2VUYWIgPSAodGFiKSA9PiBzZXRDdXJyZW50VGFiKHRhYik7XHJcblxyXG4gIGNvbnN0IGF1dGggPSB1c2VBdXRoKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB1bnN1YnNjcmliZSA9ICgpID0+IHtcclxuICAgICAgaWYgKGF1dGgudXNlcikge1xyXG4gICAgICAgIGdldFByb2ZpbGUoKTtcclxuICAgICAgICBnZXRVc2VyU3RvcmllcyhudWxsLCBcInByb2ZpbGVcIik7XHJcbiAgICAgICAgZ2V0VXNlckNoYXJhY3RlcnMoKTtcclxuICAgICAgICBnZXRGYXZvcml0ZUF1dGhvcnMoKTtcclxuICAgICAgICBnZXRGb2xsb3dlcnMoKTtcclxuICAgICAgICBnZXRGYXZvcml0ZUNoYXJhY3RlcnMoKTtcclxuICAgICAgICBnZXRGYXZvcml0ZVN0b3JpZXMoKTtcclxuICAgICAgICBnZXRVc2VyTG9jYXRpb25zKCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gdW5zdWJzY3JpYmUoKTtcclxuICB9LCBbYXV0aF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0RmF2b3JpdGVTdG9yaWVzKFxyXG4gICAgICBmYXZTdG9yaWVzLmZpbHRlcigocykgPT4gcy5wdWJsaWMgfHwgcy5hdXRob3JJZCA9PT0gYXV0aC51c2VyLnVpZClcclxuICAgICk7XHJcbiAgICBzZXRGYXZvcml0ZUNoYXJhY3RlcnMoXHJcbiAgICAgIGZhdkNoYXJhY3RlcnMuZmlsdGVyKChzKSA9PiBzLnB1YmxpYyB8fCBzLmF1dGhvcklkID09PSBhdXRoLnVzZXIudWlkKVxyXG4gICAgKTtcclxuICB9LCBbYXV0aCwgZmF2U3RvcmllcywgZmF2Q2hhcmFjdGVyc10pO1xyXG5cclxuICBjb25zdCBjaGFuZ2VGYXZUYWIgPSAodGFiKSA9PiBzZXRGYXZUYWIodGFiKTtcclxuXHJcbiAgY29uc3QgZGVsZXRlQWNjb3VudCA9ICgpID0+IHtcclxuICAgIGF1dGguZGVsZXRlQWNjb3VudCgpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGVcIj5cclxuICAgICAgPExvYWRpbmdTY3JlZW4gbG9hZGluZz17YXV0aC5pc0xvYWRpbmd9PlxyXG4gICAgICAgIDxSZWRpcmVjdENvbXAgY29uZGl0aW9uPXthdXRoLnVzZXJ9IHR5cGU9XCJyZWRpcmVjdFwiPlxyXG4gICAgICAgICAge2F1dGgudXNlciAmJiAhYXV0aC51c2VyLmVtYWlsVmVyaWZpZWQgJiYgKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxBbGVydFxyXG4gICAgICAgICAgICAgICAgY2xvc2FibGVcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U9XCJZb3UgbmVlZCB0byB2ZXJpZnkgeW91ciBlbWFpbCB0byBlbmpveSBhbGwgYmVuZWZpdHMgb2YgS3JvbmlrZWFcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImVycm9yXCJcclxuICAgICAgICAgICAgICAgIGFjdGlvbj17XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXthdXRoLnZlcmlmeUVtYWlsfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgQ2xpY2sgaGVyZSB0byBzZW5kIGEgbmV3IGVtYWlsXHJcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMjRweFwiIH19PjwvZGl2PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICA8QmFubmVyXHJcbiAgICAgICAgICAgIGNvbnRleHQ9XCJwcml2YXRlXCJcclxuICAgICAgICAgICAgcHJvZmlsZT17cHJvZmlsZX1cclxuICAgICAgICAgICAgb3BlblNldHRpbmdzPXtzZXRPcGVuU2V0dGluZ3N9XHJcbiAgICAgICAgICAgIGZhdkF1dGhvcnM9e2ZhdkF1dGhvcnN9XHJcbiAgICAgICAgICAgIGZvbGxvd2Vycz17Zm9sbG93ZXJzfVxyXG4gICAgICAgICAgICBjaGFuZ2VGYXZUYWI9e2NoYW5nZUZhdlRhYn1cclxuICAgICAgICAgICAgZmF2VGFiPXtmYXZUYWJ9XHJcbiAgICAgICAgICAgIHNldEN1cnJlbnRUYWI9e3NldEN1cnJlbnRUYWJ9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHJvZmlsZS1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxUYWJzIGN1cnJlbnRUYWI9e2N1cnJlbnRUYWJ9IHRhYnM9e3RhYnN9IGNoYW5nZVRhYj17Y2hhbmdlVGFifSAvPlxyXG4gICAgICAgICAgICB7Y3VycmVudFRhYiA9PT0gXCJzdG9yaWVzXCIgJiYgKFxyXG4gICAgICAgICAgICAgIDxTdG9yaWVzXHJcbiAgICAgICAgICAgICAgICBhdXRoPXthdXRofVxyXG4gICAgICAgICAgICAgICAgbG9hZGluZz17bG9hZGluZ31cclxuICAgICAgICAgICAgICAgIHR5cGU9e1wic2hvd1wifVxyXG4gICAgICAgICAgICAgICAgc3Rvcmllcz17c3Rvcmllc31cclxuICAgICAgICAgICAgICAgIHR5cGU9e1wicHJpdmF0ZVByb2ZpbGVcIn1cclxuICAgICAgICAgICAgICAgIGNvbnRleHQ9XCJwcml2YXRlXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7Y3VycmVudFRhYiA9PT0gXCJjaGFyYWN0ZXJzXCIgJiYgKFxyXG4gICAgICAgICAgICAgIDxDaGFyYWN0ZXJzIGNvbnRleHQ9XCJwcml2YXRlXCIgY2hhcmFjdGVycz17Y2hhcmFjdGVyc30gLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAge2N1cnJlbnRUYWIgPT09IFwibG9jYXRpb25zXCIgJiYgKFxyXG4gICAgICAgICAgICAgIDxMb2NhdGlvbnNcclxuICAgICAgICAgICAgICAgIGNvbnRleHQ9XCJwcml2YXRlXCJcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9ucz17bG9jYXRpb25zfVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInByb2ZpbGVcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHtjdXJyZW50VGFiID09PSBcImZhdm9yaXRlcyBzdG9yaWVzXCIgJiYgKFxyXG4gICAgICAgICAgICAgIDxTdG9yaWVzXHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImZhdm9yaXRlc1wiXHJcbiAgICAgICAgICAgICAgICBzdG9yaWVzPXtmYXZvcml0ZVN0b3JpZXN9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAge2N1cnJlbnRUYWIgPT09IFwiZmF2b3JpdGVzIGNoYXJhY3RlcnNcIiAmJiAoXHJcbiAgICAgICAgICAgICAgPENoYXJhY3RlcnMgdHlwZT1cImZhdm9yaXRlc1wiIGNoYXJhY3RlcnM9e2Zhdm9yaXRlQ2hhcmFjdGVyc30gLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAge2N1cnJlbnRUYWIgPT09IFwiZm9sbG93ZXJzXCIgJiYgKFxyXG4gICAgICAgICAgICAgIDxGb2xsb3dlcnNcclxuICAgICAgICAgICAgICAgIHRpdGxlPXtmYXZBdXRob3JzLmF1dGhvcnMubGVuZ3RoID4gMSA/IFwiRm9sbG93ZXJzXCIgOiBcIkZvbGxvd2VyXCJ9XHJcbiAgICAgICAgICAgICAgICB0eXBlPXtcImZvbGxvd2Vyc1wifVxyXG4gICAgICAgICAgICAgICAgbGc9ezR9XHJcbiAgICAgICAgICAgICAgICBtZD17Nn1cclxuICAgICAgICAgICAgICAgIHNtPXs4fVxyXG4gICAgICAgICAgICAgICAgeHM9ezEyfVxyXG4gICAgICAgICAgICAgICAgaXRlbXM9e2ZvbGxvd2Vycy5hdXRob3JzfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHtjdXJyZW50VGFiID09PSBcImZvbGxvd2luZ3NcIiAmJiAoXHJcbiAgICAgICAgICAgICAgPEZvbGxvd2Vyc1xyXG4gICAgICAgICAgICAgICAgdGl0bGU9e1xyXG4gICAgICAgICAgICAgICAgICBmYXZBdXRob3JzLmF1dGhvcnMubGVuZ3RoID4gMSA/IFwiRm9sbG93aW5nc1wiIDogXCJGb2xsb3dpbmdcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdHlwZT17XCJmb2xsb3dpbmdzXCJ9XHJcbiAgICAgICAgICAgICAgICBsZz17NH1cclxuICAgICAgICAgICAgICAgIG1kPXs2fVxyXG4gICAgICAgICAgICAgICAgc209ezh9XHJcbiAgICAgICAgICAgICAgICB4cz17MTJ9XHJcbiAgICAgICAgICAgICAgICBpdGVtcz17ZmF2QXV0aG9ycy5hdXRob3JzfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICA8U2V0dGluZ3NcclxuICAgICAgICAgICAgZGVsZXRlQWNjb3VudD17ZGVsZXRlQWNjb3VudH1cclxuICAgICAgICAgICAgY2hhbmdlUHJvZmlsZT17Y2hhbmdlUHJvZmlsZX1cclxuICAgICAgICAgICAgcHJvZmlsZT17cHJvZmlsZX1cclxuICAgICAgICAgICAgb3BlblNldHRpbmdzPXtvcGVuU2V0dGluZ3N9XHJcbiAgICAgICAgICAgIHNldE9wZW5TZXR0aW5ncz17c2V0T3BlblNldHRpbmdzfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L1JlZGlyZWN0Q29tcD5cclxuICAgICAgPC9Mb2FkaW5nU2NyZWVuPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgb3duUHJvcHMpID0+ICh7XHJcbiAgcHJvZmlsZTogc3RhdGUuYXV0aC5wcm9maWxlLFxyXG4gIHN0b3JpZXM6IHN0YXRlLnN0b3JpZXMudXNlclN0b3JpZXMsXHJcbiAgY2hhcmFjdGVyczogc3RhdGUuY2hhcmFjdGVycy51c2VyQ2hhcmFjdGVycyxcclxuICBmYXZBdXRob3JzOiBzdGF0ZS5hdXRoLmZhdkF1dGhvcnMsXHJcbiAgZm9sbG93ZXJzOiBzdGF0ZS5hdXRoLmZvbGxvd2VycyxcclxuICBmYXZDaGFyYWN0ZXJzOiBzdGF0ZS5jaGFyYWN0ZXJzLmZhdkNoYXJhY3RlcnMsXHJcbiAgZmF2U3Rvcmllczogc3RhdGUuc3Rvcmllcy5mYXZTdG9yaWVzLFxyXG4gIGxvY2F0aW9uczogc3RhdGUuc3Rvcmllcy51c2VyTG9jYXRpb25zLFxyXG4gIGxvYWRpbmc6IHN0YXRlLnN0b3JpZXMubG9hZGluZyxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywge1xyXG4gIGdldFByb2ZpbGUsXHJcbiAgZ2V0VXNlclN0b3JpZXMsXHJcbiAgZ2V0VXNlckNoYXJhY3RlcnMsXHJcbiAgZ2V0RmF2b3JpdGVBdXRob3JzLFxyXG4gIGdldEZvbGxvd2VycyxcclxuICBnZXRGYXZvcml0ZUNoYXJhY3RlcnMsXHJcbiAgZ2V0RmF2b3JpdGVTdG9yaWVzLFxyXG4gIGdldFVzZXJMb2NhdGlvbnMsXHJcbiAgY2hhbmdlUHJvZmlsZSxcclxufSkoUHJvZmlsZSk7XHJcbiIsImltcG9ydCB7IHR5cGVzIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBtZXNzYWdlIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgZGIsIGF1dGgsIHN0b3JhZ2UgfSBmcm9tIFwiLi4vZmJDb25maWdcIjtcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDaGFyYWN0ZXIgPSAoaWQsIHR5cGUpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGxldCByZWxBcnIgPSBbXTtcclxuICBsZXQgc3RvcnlBcnIgPSBbXTtcclxuICBkYi5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc1wiKVxyXG4gICAgLmRvYyhpZClcclxuICAgIC5nZXQoKVxyXG4gICAgLnRoZW4oKGRvYykgPT4ge1xyXG4gICAgICBpZiAoZG9jLmV4aXN0cykge1xyXG4gICAgICAgIGlmICh0eXBlID09PSBcInNob3dcIikge1xyXG4gICAgICAgICAgY29uc3QgcmVsYXRpdmVzID0gZG9jLmRhdGEoKS5yZWxhdGl2ZXNBcnI7XHJcbiAgICAgICAgICBsZXQgcmVsUXVlcmllcyA9IFtdO1xyXG4gICAgICAgICAgcmVsYXRpdmVzLmZvckVhY2goKHJlbCkgPT4ge1xyXG4gICAgICAgICAgICByZWxRdWVyaWVzLnB1c2goZGIuY29sbGVjdGlvbihcImNoYXJhY3RlcnNcIikuZG9jKHJlbCkuZ2V0KCkpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBQcm9taXNlLmFsbChyZWxRdWVyaWVzKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgcmVzLmZvckVhY2goKGNoYXIpID0+XHJcbiAgICAgICAgICAgICAgcmVsQXJyLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgLi4uY2hhci5kYXRhKCksXHJcbiAgICAgICAgICAgICAgICBpZDogY2hhci5pZCxcclxuICAgICAgICAgICAgICAgIHJlbGF0aW9uOiBkb2NcclxuICAgICAgICAgICAgICAgICAgLmRhdGEoKVxyXG4gICAgICAgICAgICAgICAgICAucmVsYXRpdmVzLmZpbmQoKGMpID0+IGMuY2hhcmFjdGVyX2lkID09PSBjaGFyLmlkKS5yZWxhdGlvbixcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbWFpblF1ZXJ5ID0gZGJcclxuICAgICAgICAgICAgICAuY29sbGVjdGlvbihcInN0b3JpZXNcIilcclxuICAgICAgICAgICAgICAud2hlcmUoXCJtYWluQ2hhcmFjdGVyc1wiLCBcImFycmF5LWNvbnRhaW5zXCIsIGlkKVxyXG4gICAgICAgICAgICAgIC5nZXQoKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNlY29uZGFyeVF1ZXJ5ID0gZGJcclxuICAgICAgICAgICAgICAuY29sbGVjdGlvbihcInN0b3JpZXNcIilcclxuICAgICAgICAgICAgICAud2hlcmUoXCJzZWNvbmRhcnlBcnJcIiwgXCJhcnJheS1jb250YWluc1wiLCBpZClcclxuICAgICAgICAgICAgICAuZ2V0KCk7XHJcblxyXG4gICAgICAgICAgICBQcm9taXNlLmFsbChbbWFpblF1ZXJ5LCBzZWNvbmRhcnlRdWVyeV0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGFsbFN0b3J5ID0gcmVzdWx0WzBdLmRvY3MuY29uY2F0KHJlc3VsdFsxXS5kb2NzKTtcclxuICAgICAgICAgICAgICBhbGxTdG9yeS5mb3JFYWNoKChzdG9yeSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc3RvcnlBcnIucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgIGlkOiBzdG9yeS5pZCxcclxuICAgICAgICAgICAgICAgICAgdGl0bGU6IHN0b3J5LmRhdGEoKS50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgYXV0aG9ySWQ6IHN0b3J5LmRhdGEoKS5hdXRob3JJZCxcclxuICAgICAgICAgICAgICAgICAgYmFubmVyOiBzdG9yeS5kYXRhKCkuYmFubmVyLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogdHlwZXMuR0VUX0NIQVJBQ1RFUixcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAgICAgY2hhcmFjdGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uZG9jLmRhdGEoKSxcclxuICAgICAgICAgICAgICAgICAgICBpZDogZG9jLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlbGF0aXZlczogcmVsQXJyLmZpbHRlcihcclxuICAgICAgICAgICAgICAgICAgICAgIChyKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoYXV0aC5jdXJyZW50VXNlciAmJiBhdXRoLmN1cnJlbnRVc2VyLnVpZCkgPT09XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgci5hdXRob3JJZCB8fCByLnB1YmxpY1xyXG4gICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgc3Rvcmllczogc3RvcnlBcnIuZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgKHIpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChhdXRoLmN1cnJlbnRVc2VyICYmIGF1dGguY3VycmVudFVzZXIudWlkKSA9PT1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICByLmF1dGhvcklkIHx8IHIucHVibGljXHJcbiAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgY2hhcmFFeGlzdHM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiB0eXBlcy5HRVRfQ0hBUkFDVEVSLFxyXG4gICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgY2hhcmFjdGVyOiB7IC4uLmRvYy5kYXRhKCksIGlkOiBkb2MuaWQgfSxcclxuICAgICAgICAgICAgICBjaGFyYUV4aXN0czogdHJ1ZSxcclxuICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiB0eXBlcy5HRVRfQ0hBUkFDVEVSLFxyXG4gICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICBjaGFyYUV4aXN0czogZmFsc2UsXHJcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYWRkQ2hhcmFjdGVyID0gKGRhdGEpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRpc3BhdGNoKHsgdHlwZTogdHlwZXMuQUREX0NIQVJBQ1RFUiwgcGF5bG9hZDogeyBsb2FkaW5nOiB0cnVlIH0gfSk7XHJcblxyXG4gIGxldCBjaGFyYUlkID0gXCJcIjtcclxuICBkYi5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc1wiKVxyXG4gICAgLmFkZCh7XHJcbiAgICAgIC4uLmRhdGEsXHJcbiAgICAgIGltYWdlOiB0eXBlb2YgZGF0YS5pbWFnZSA9PT0gXCJzdHJpbmdcIiA/IGRhdGEuaW1hZ2UgOiBcIlwiLFxyXG4gICAgICBjcmVhdGVkQXQ6IGZpcmViYXNlLmZpcmVzdG9yZS5GaWVsZFZhbHVlLnNlcnZlclRpbWVzdGFtcCgpLFxyXG4gICAgICBsaWtlc0NvdW50OiAwLFxyXG4gICAgICBsaWtlczogW10sXHJcbiAgICAgIGRpc2xpa2VzOiBbXSxcclxuICAgIH0pXHJcbiAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIGNoYXJhSWQgPSByZXMuaWQ7XHJcbiAgICAgIGNvbnN0IGltYWdlTmFtZSA9IGAke3Jlcy5pZH0ke1wiX1wifSR7ZGF0YS5maXJzdG5hbWUudG9Mb3dlckNhc2UoKX0ke1xyXG4gICAgICAgIGRhdGEubGFzdG5hbWUgJiYgXCJfXCJcclxuICAgICAgfSR7ZGF0YS5sYXN0bmFtZSAmJiBkYXRhLmxhc3RuYW1lLnRvTG93ZXJDYXNlKCl9YDtcclxuXHJcbiAgICAgIGlmICh0eXBlb2YgZGF0YS5pbWFnZSA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgIHN0b3JhZ2VcclxuICAgICAgICAgIC5yZWYoYCR7YXV0aC5jdXJyZW50VXNlci51aWR9LyR7aW1hZ2VOYW1lfWApXHJcbiAgICAgICAgICAucHV0KGRhdGEuaW1hZ2UpXHJcbiAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdG9yYWdlXHJcbiAgICAgICAgICAgICAgLnJlZihhdXRoLmN1cnJlbnRVc2VyLnVpZClcclxuICAgICAgICAgICAgICAuY2hpbGQoaW1hZ2VOYW1lKVxyXG4gICAgICAgICAgICAgIC5nZXREb3dubG9hZFVSTCgpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKCh1cmwpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGRiXHJcbiAgICAgICAgICAgICAgLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzXCIpXHJcbiAgICAgICAgICAgICAgLmRvYyhjaGFyYUlkKVxyXG4gICAgICAgICAgICAgIC51cGRhdGUoeyBpbWFnZTogdXJsIH0pO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgbWVzc2FnZS5zdWNjZXNzKFwiQ2hhcmFjdGVyIGFkZGVkIHN1Y2Nlc3NmdWxseVwiKTtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgIHR5cGU6IHR5cGVzLkFERF9DSEFSQUNURVIsXHJcbiAgICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJDaGFyYWN0ZXIgYWRkZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICAgICAgICBjaGFyYWN0ZXJJZDogY2hhcmFJZCxcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWVzc2FnZS5zdWNjZXNzKFwiQ2hhcmFjdGVyIGFkZGVkIHN1Y2Nlc3NmdWxseVwiKTtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiB0eXBlcy5BRERfQ0hBUkFDVEVSLFxyXG4gICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkNoYXJhY3RlciBhZGRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgICAgY2hhcmFjdGVySWQ6IGNoYXJhSWQsXHJcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIG1lc3NhZ2UuZXJyb3IoZXJyLm1lc3NhZ2UpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZWRpdENoYXJhY3RlciA9IChkYXRhLCBpZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGlzcGF0Y2goeyB0eXBlOiB0eXBlcy5FRElUX0NIQVJBQ1RFUiwgcGF5bG9hZDogeyBsb2FkaW5nQ2hhcmFjdGVyOiB0cnVlIH0gfSk7XHJcblxyXG4gIGNvbnN0IGltYWdlTmFtZSA9IGAke2lkfSR7XCJfXCJ9JHtkYXRhLmZpcnN0bmFtZS50b0xvd2VyQ2FzZSgpfSR7XHJcbiAgICBkYXRhLmxhc3RuYW1lICYmIFwiX1wiXHJcbiAgfSR7ZGF0YS5sYXN0bmFtZSAmJiBkYXRhLmxhc3RuYW1lLnRvTG93ZXJDYXNlKCl9YDtcclxuXHJcbiAgaWYgKGRhdGEuaW1hZ2UgJiYgdHlwZW9mIGRhdGEuaW1hZ2UgPT09IFwib2JqZWN0XCIpIHtcclxuICAgIHN0b3JhZ2VcclxuICAgICAgLnJlZihgJHthdXRoLmN1cnJlbnRVc2VyLnVpZH0vJHtpbWFnZU5hbWV9YClcclxuICAgICAgLnB1dChkYXRhLmltYWdlKVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHN0b3JhZ2VcclxuICAgICAgICAgIC5yZWYoYXV0aC5jdXJyZW50VXNlci51aWQpXHJcbiAgICAgICAgICAuY2hpbGQoaW1hZ2VOYW1lKVxyXG4gICAgICAgICAgLmdldERvd25sb2FkVVJMKCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKCh1cmwpID0+IHtcclxuICAgICAgICByZXR1cm4gZGJcclxuICAgICAgICAgIC5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc1wiKVxyXG4gICAgICAgICAgLmRvYyhpZClcclxuICAgICAgICAgIC51cGRhdGUoe1xyXG4gICAgICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgICAgICBpbWFnZTogdXJsLFxyXG4gICAgICAgICAgICByZWxhdGl2ZXNBcnI6IGRhdGEucmVsYXRpdmVzLm1hcCgoYykgPT4gYy5jaGFyYWN0ZXJfaWQpLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiB0eXBlcy5FRElUX0NIQVJBQ1RFUixcclxuICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJDaGFyYWN0ZXIgZWRpdGVkIHN1Y2Nlc3NmdWxseVwiLFxyXG4gICAgICAgICAgICBsb2FkaW5nQ2hhcmFjdGVyOiBmYWxzZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihlcnIubWVzc2FnZSk7XHJcbiAgICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBkYi5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc1wiKVxyXG4gICAgICAuZG9jKGlkKVxyXG4gICAgICAudXBkYXRlKHtcclxuICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgIHJlbGF0aXZlc0FycjogZGF0YS5yZWxhdGl2ZXMubWFwKChjKSA9PiBjLmNoYXJhY3Rlcl9pZCksXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiB0eXBlcy5FRElUX0NIQVJBQ1RFUixcclxuICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJDaGFyYWN0ZXIgZWRpdGVkIHN1Y2Nlc3NmdWxseVwiLFxyXG4gICAgICAgICAgICBsb2FkaW5nQ2hhcmFjdGVyOiBmYWxzZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihlcnIubWVzc2FnZSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkZWxldGVDaGFyYWN0ZXIgPSAoaWQsIGZpcnN0bmFtZSwgbGFzdG5hbWUpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRpc3BhdGNoKHsgdHlwZTogdHlwZXMuREVMRVRFX0NIQVJBQ1RFUiwgcGF5bG9hZDogeyBsb2FkaW5nOiB0cnVlIH0gfSk7XHJcbiAgY29uc3QgaW1hZ2VOYW1lID0gYCR7aWR9JHtcIl9cIn0ke2ZpcnN0bmFtZS50b0xvd2VyQ2FzZSgpfSR7bGFzdG5hbWUgJiYgXCJfXCJ9JHtcclxuICAgIGxhc3RuYW1lICYmIGxhc3RuYW1lLnRvTG93ZXJDYXNlKClcclxuICB9YDtcclxuICAvL2NvbnN0IGJhdGNoID0gZGIuYmF0Y2goKTtcclxuICBkYi5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc1wiKVxyXG4gICAgLmRvYyhpZClcclxuICAgIC5kZWxldGUoKVxyXG4gICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICBpZiAoc3RvcmFnZS5yZWYoYCR7YXV0aC5jdXJyZW50VXNlci51aWR9LyR7aW1hZ2VOYW1lfWApKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0b3JhZ2VcclxuICAgICAgICAgIC5yZWYoYCR7YXV0aC5jdXJyZW50VXNlci51aWR9LyR7aW1hZ2VOYW1lfWApXHJcbiAgICAgICAgICAuZGVsZXRlKClcclxuICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgIHR5cGU6IHR5cGVzLkRFTEVURV9DSEFSQUNURVIsXHJcbiAgICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJDaGFyYWN0ZXIgZGVsZXRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZGVsZXRlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNoYXJhRXhpc3RzOiBmYWxzZSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAvLyAudGhlbigoKSA9PiB7XHJcbiAgLy8gICBkYi5jb2xsZWN0aW9uKFwiY2hhcHRlcnNcIilcclxuICAvLyAgICAgLndoZXJlKFwiY2hhcmFjdGVyc1wiLCBcImFycmF5LWNvbnRhaW5zXCIsIGlkKVxyXG4gIC8vICAgICAuZ2V0KClcclxuICAvLyAgICAgLnRoZW4oKGRvY3MpID0+IHtcclxuICAvLyAgICAgICBkb2NzLmZvckVhY2goKGRvYykgPT4ge1xyXG4gIC8vICAgICAgICAgYmF0Y2gudXBkYXRlKGRiLmNvbGxlY3Rpb24oXCJjaGFwdGVyc1wiKS5kb2MoZG9jLmlkKSwge1xyXG4gIC8vICAgICAgICAgICBjaGFyYWN0ZXJzOiBkb2MuZGF0YSgpLmNoYXJhY3RlcnMuZmlsdGVyKChjKSA9PiBjICE9PSBpZCksXHJcbiAgLy8gICAgICAgICB9KTtcclxuICAvLyAgICAgICB9KTtcclxuICAvLyAgICAgfSlcclxuICAvLyAgICAgLnRoZW4oKCkgPT4ge1xyXG4gIC8vICAgICAgIGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpXHJcbiAgLy8gICAgICAgICAud2hlcmUoXCJzZWNvbmRhcnlBcnJcIiwgXCJhcnJheS1jb250YWluc1wiLCBpZClcclxuICAvLyAgICAgICAgIC5nZXQoKVxyXG4gIC8vICAgICAgICAgLnRoZW4oKHN0b3JpZXMpID0+IHtcclxuICAvLyAgICAgICAgICAgc3Rvcmllcy5mb3JFYWNoKChzdG9yeSkgPT4ge1xyXG4gIC8vICAgICAgICAgICAgIGJhdGNoLnVwZGF0ZShkYi5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKS5kb2Moc3RvcnkuaWQpLCB7XHJcbiAgLy8gICAgICAgICAgICAgICBtYWluQ2hhcmFjdGVyczogc3RvcnlcclxuICAvLyAgICAgICAgICAgICAgICAgLmRhdGEoKVxyXG4gIC8vICAgICAgICAgICAgICAgICAubWFpbkNoYXJhY3RlcnMuZmlsdGVyKChjKSA9PiBjICE9PSBpZCksXHJcbiAgLy8gICAgICAgICAgICAgICBzZWNvbmRhcnlBcnI6IHN0b3J5XHJcbiAgLy8gICAgICAgICAgICAgICAgIC5kYXRhKClcclxuICAvLyAgICAgICAgICAgICAgICAgLnNlY29uZGFyeUFyci5maWx0ZXIoKGMpID0+IGMgIT09IGlkKSxcclxuICAvLyAgICAgICAgICAgICAgIHNlY29uZGFyeUNoYXJhY3RlcnM6IHN0b3J5XHJcbiAgLy8gICAgICAgICAgICAgICAgIC5kYXRhKClcclxuICAvLyAgICAgICAgICAgICAgICAgLnNlY29uZGFyeUNoYXJhY3RlcnMuZmlsdGVyKChjKSA9PiBjLmlkICE9PSBpZCksXHJcbiAgLy8gICAgICAgICAgICAgfSk7XHJcbiAgLy8gICAgICAgICAgIH0pO1xyXG4gIC8vICAgICAgICAgfSlcclxuICAvLyAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAvLyAgICAgICAgICAgZGIuY29sbGVjdGlvbihcImNoYXJhY3RlcnNcIilcclxuICAvLyAgICAgICAgICAgICAud2hlcmUoXCJyZWxhdGl2ZXNBcnJcIiwgXCJhcnJheS1jb250YWluc1wiLCBpZClcclxuICAvLyAgICAgICAgICAgICAuZ2V0KClcclxuICAvLyAgICAgICAgICAgICAudGhlbigoY2hhcmFjdGVycykgPT4ge1xyXG4gIC8vICAgICAgICAgICAgICAgY2hhcmFjdGVycy5mb3JFYWNoKChjaGFyKSA9PiB7XHJcbiAgLy8gICAgICAgICAgICAgICAgIGJhdGNoLnVwZGF0ZShkYi5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc1wiKS5kb2MoY2hhci5pZCksIHtcclxuICAvLyAgICAgICAgICAgICAgICAgICByZWxhdGl2ZXNBcnI6IGNoYXJcclxuICAvLyAgICAgICAgICAgICAgICAgICAgIC5kYXRhKClcclxuICAvLyAgICAgICAgICAgICAgICAgICAgIC5yZWxhdGl2ZXNBcnIuZmlsdGVyKChjKSA9PiBjICE9PSBpZCksXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgcmVsYXRpdmVzOiBjaGFyXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAuZGF0YSgpXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAucmVsYXRpdmVzLmZpbHRlcigoYykgPT4gYy5jaGFyYWN0ZXJfaWQgIT09IGlkKSxcclxuICAvLyAgICAgICAgICAgICAgICAgfSk7XHJcbiAgLy8gICAgICAgICAgICAgICB9KTtcclxuICAvLyAgICAgICAgICAgICB9KVxyXG4gIC8vICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAvLyAgICAgICAgICAgICAgIGRiLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzTGlrZXNcIilcclxuICAvLyAgICAgICAgICAgICAgICAgLndoZXJlKFwiY2hhcmFjdGVySWRcIiwgXCI9PVwiLCBpZClcclxuICAvLyAgICAgICAgICAgICAgICAgLmdldCgpXHJcbiAgLy8gICAgICAgICAgICAgICAgIC50aGVuKChsaWtlcykgPT4ge1xyXG4gIC8vICAgICAgICAgICAgICAgICAgIGxpa2VzLmZvckVhY2goKGxpa2UpID0+IHtcclxuICAvLyAgICAgICAgICAgICAgICAgICAgIGJhdGNoLmRlbGV0ZShcclxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgZGIuY29sbGVjdGlvbihcImNoYXJhY3RlcnNMaWtlc1wiKS5kb2MobGlrZS5pZClcclxuICAvLyAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgYmF0Y2guY29tbWl0KCkudGhlbigoKSA9PiB7XHJcblxyXG4gIC8vICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gIC8vICAgICAgICAgICAgICAgICB9KTtcclxuICAvLyAgICAgICAgICAgICB9KTtcclxuICAvLyAgICAgICAgIH0pO1xyXG4gIC8vICAgICB9KTtcclxuICAvLyB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyQ2hhcmFjdGVycyA9IChpZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgY29uc3QgdXNlcklkID0gaWQgPyBpZCA6IGF1dGguY3VycmVudFVzZXIudWlkO1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzXCIpXHJcbiAgICAud2hlcmUoXCJhdXRob3JJZFwiLCBcIj09XCIsIHVzZXJJZClcclxuICAgIC5nZXQoKVxyXG4gICAgLnRoZW4oKGRvY3MpID0+IHtcclxuICAgICAgbGV0IGl0ZW1zID0gW107XHJcbiAgICAgIGRvY3MuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICAgICAgaXRlbXMgPSBbLi4uaXRlbXMsIHsgaWQ6IGRvYy5pZCwgLi4uZG9jLmRhdGEoKSB9XS5maWx0ZXIoKGMpID0+XHJcbiAgICAgICAgICBpZCA/IGMucHVibGljIDogY1xyXG4gICAgICAgICk7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gaXRlbXM7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGl0ZW1zKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogdHlwZXMuR0VUX1VTRVJfQ0hBUkFDVEVSUywgcGF5bG9hZDogaXRlbXMgfSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRGYXZvcml0ZUNoYXJhY3RlcnMgPSAoaWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGNvbnN0IHVzZXJJZCA9IGlkID8gaWQgOiBhdXRoLmN1cnJlbnRVc2VyLnVpZDtcclxuICBkYi5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc0xpa2VzXCIpXHJcbiAgICAud2hlcmUoXCJzZW5kZXJJZFwiLCBcIj09XCIsIHVzZXJJZClcclxuICAgIC5nZXQoKVxyXG4gICAgLnRoZW4oKGRvY3MpID0+IHtcclxuICAgICAgbGV0IGZhdkFyciA9IFtdO1xyXG4gICAgICBkb2NzLmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgICAgIGZhdkFyciA9IFsuLi5mYXZBcnIsIGRvYy5kYXRhKCkuY2hhcmFjdGVySWRdO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGZhdkFycjtcclxuICAgIH0pXHJcbiAgICAudGhlbigodXNlcnMpID0+IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gdXNlcnMubWFwKCh1c2VyKSA9PlxyXG4gICAgICAgIGRiLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzXCIpLmRvYyh1c2VyKS5nZXQoKVxyXG4gICAgICApO1xyXG4gICAgICBQcm9taXNlLmFsbChyZXN1bHQpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGxldCBmYXZVc2VycyA9IFtdO1xyXG4gICAgICAgIHJlcy5mb3JFYWNoKFxyXG4gICAgICAgICAgKGRvYykgPT4gKGZhdlVzZXJzID0gWy4uLmZhdlVzZXJzLCB7IGlkOiBkb2MuaWQsIC4uLmRvYy5kYXRhKCkgfV0pXHJcbiAgICAgICAgKTtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiB0eXBlcy5HRVRfRkFWT1JJVEVfQ0hBUkFDVEVSUyxcclxuICAgICAgICAgIHBheWxvYWQ6IGZhdlVzZXJzLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGlzQ2hhcmFjdGVyRmF2b3JpdGUgPSAoY2hhcklkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBpZiAoYXV0aC5jdXJyZW50VXNlcikge1xyXG4gICAgZGIuY29sbGVjdGlvbihcImNoYXJhY3RlcnNMaWtlc1wiKVxyXG4gICAgICAud2hlcmUoXCJzZW5kZXJJZFwiLCBcIj09XCIsIGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gICAgICAud2hlcmUoXCJjaGFyYWN0ZXJJZFwiLCBcIj09XCIsIGNoYXJJZClcclxuICAgICAgLm9uU25hcHNob3QoKHNuYXBzaG90KSA9PiB7XHJcbiAgICAgICAgY29uc3QgYW5zd2VyID0gc25hcHNob3QuZG9jc1swXSA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICByZXR1cm4gZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogdHlwZXMuSVNfQ0hBUkFDVEVSX0ZBVk9SSVRFLFxyXG4gICAgICAgICAgcGF5bG9hZDogYW5zd2VyLFxyXG4gICAgICAgICAgbG9hZGluZ0ZhdjogZmFsc2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRDaGFyYWN0ZXJUb0Zhdm9yaXRlID0gKFxyXG4gIGlkLFxyXG4gIHVzZXJuYW1lLFxyXG4gIGNoYXJhY3Rlck5hbWUsXHJcbiAgYXV0aG9ySWRcclxuKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICAvLyBpZiAoaXNGYXZvcml0ZSkgcmV0dXJuIG1lc3NhZ2Uud2FybmluZyhcIllvdSd2ZSBhbHJlYWR5IGxpa2VkIHRoaXMgc3RvcnlcIik7XHJcbiAgaWYgKCFhdXRoLmN1cnJlbnRVc2VyKVxyXG4gICAgcmV0dXJuIG1lc3NhZ2UuZXJyb3IoXCJZb3UgbmVlZCB0byBiZSBsb2dnZWQgaW4gdG8gbGlrZSBhIGNoYXJhY3RlclwiKTtcclxuICBpZiAoIWF1dGguY3VycmVudFVzZXIuZW1haWxWZXJpZmllZClcclxuICAgIHJldHVybiBtZXNzYWdlLmVycm9yKFwiWW91IG5lZWQgdG8gdmVyaWZ5IHlvdXIgZW1haWwgZmlyc3RcIik7XHJcblxyXG4gIGRiLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzTGlrZXNcIilcclxuICAgIC5hZGQoe1xyXG4gICAgICBzZW5kZXI6IHVzZXJuYW1lLFxyXG4gICAgICBzZW5kZXJJZDogYXV0aC5jdXJyZW50VXNlci51aWQsXHJcbiAgICAgIGNoYXJhY3RlcklkOiBpZCxcclxuICAgICAgY3JlYXRlZEF0OiBmaXJlYmFzZS5maXJlc3RvcmUuRmllbGRWYWx1ZS5zZXJ2ZXJUaW1lc3RhbXAoKSxcclxuICAgIH0pXHJcbiAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgIGlmIChhdXRob3JJZCAhPT0gYXV0aC5jdXJyZW50VXNlci51aWQpIHtcclxuICAgICAgICByZXR1cm4gZGJcclxuICAgICAgICAgIC5jb2xsZWN0aW9uKFwibm90aWZpY2F0aW9uc1wiKVxyXG4gICAgICAgICAgLmRvYyhgJHthdXRoLmN1cnJlbnRVc2VyLnVpZH0ke2lkfWApXHJcbiAgICAgICAgICAuc2V0KHtcclxuICAgICAgICAgICAgdHlwZTogXCJjaGFyYWN0ZXJMaWtlXCIsXHJcbiAgICAgICAgICAgIHJlYWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICByZWNpcGllbnQ6IGF1dGhvcklkLFxyXG4gICAgICAgICAgICBzZW5kZXI6IGF1dGguY3VycmVudFVzZXIudWlkLFxyXG4gICAgICAgICAgICBjaGFyYWN0ZXJJZDogaWQsXHJcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogZmlyZWJhc2UuZmlyZXN0b3JlLkZpZWxkVmFsdWUuc2VydmVyVGltZXN0YW1wKCksXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IGAke3VzZXJuYW1lfSBsaWtlZCB5b3VyIGNoYXJhY3RlciAke2NoYXJhY3Rlck5hbWV9YCxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKCkgPT4gbWVzc2FnZS5zdWNjZXNzKGAke2NoYXJhY3Rlck5hbWV9IGFkZGVkIHRvIHlvdXIgZmF2b3JpdGVzYCkpXHJcbiAgICAuY2F0Y2goKGVycikgPT4gbWVzc2FnZS5lcnJvcihcIlRoZXJlIGhhcyBiZWVuIGEgcHJvYmxlbVwiKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlQ2hhcmFjdGVyRnJvbUZhdm9yaXRlID0gKGlkLCBjaGFyYWN0ZXJOYW1lKSA9PiAoXHJcbiAgZGlzcGF0Y2hcclxuKSA9PiB7XHJcbiAgZGIuY29sbGVjdGlvbihcImNoYXJhY3RlcnNMaWtlc1wiKVxyXG4gICAgLndoZXJlKFwiY2hhcmFjdGVySWRcIiwgXCI9PVwiLCBpZClcclxuICAgIC53aGVyZShcInNlbmRlcklkXCIsIFwiPT1cIiwgYXV0aC5jdXJyZW50VXNlci51aWQpXHJcbiAgICAuZ2V0KClcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiBkYi5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc0xpa2VzXCIpLmRvYyhkYXRhLmRvY3NbMF0uaWQpLmRlbGV0ZSgpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKCgpID0+IG1lc3NhZ2Uuc3VjY2VzcyhgJHtjaGFyYWN0ZXJOYW1lfSByZW1vdmVkIGZyb20geW91ciBmYXZvcml0ZXNgKSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiBtZXNzYWdlLmVycm9yKFwiVGhlcmUgaGFzIGJlZW4gYSBwcm9ibGVtXCIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDaGFyYWN0ZXJzSW5TdG9yeSA9IChpZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGIuY29sbGVjdGlvbihcInN0b3JpZXNcIilcclxuICAgIC5kb2MoaWQpXHJcbiAgICAub25TbmFwc2hvdCgoZG9jKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiB0eXBlcy5HRVRfU1RPUllfQ0hBUkFDVEVSUyxcclxuICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICBzZWNvbmRhcnlDaGFyYWN0ZXJzOiBkb2MuZGF0YSgpLnNlY29uZGFyeUNoYXJhY3RlcnMsXHJcbiAgICAgICAgICBtYWluQXJyOiBkb2MuZGF0YSgpLm1haW5DaGFyYWN0ZXJzLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc3VibWl0Q2hhcmF0ZXJGZWVkYmFjayA9IChpbmZvLCB1c2VyQ29tbWVudCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgY29uc3QgeyBjaGFyYWN0ZXJOYW1lLCAuLi5hbGxJbmZvIH0gPSBpbmZvO1xyXG4gIGlmICghYXV0aC5jdXJyZW50VXNlci5lbWFpbFZlcmlmaWVkKVxyXG4gICAgcmV0dXJuIG1lc3NhZ2UuZXJyb3IoXCJZb3UgbmVlZCB0byB2ZXJpZnkgeW91ciBlbWFpbCBmaXJzdFwiKTtcclxuICBpZiAoIWluZm8uY29udGVudCkgcmV0dXJuIG1lc3NhZ2UuZXJyb3IoXCJDb250ZW50IG11c3Qgbm90IGJlIGVtcHR5XCIpO1xyXG4gIGlmICh1c2VyQ29tbWVudCkgcmV0dXJuIG1lc3NhZ2UuZXJyb3IoXCJZb3UgaGF2ZSBhbHJlYWR5IHNlbnQgZmVlZGJhY2tcIik7XHJcblxyXG4gIGRiLmNvbGxlY3Rpb24oXCJjb21tZW50c1wiKVxyXG4gICAgLmFkZCh7XHJcbiAgICAgIC4uLmFsbEluZm8sXHJcbiAgICAgIGNyZWF0ZWRBdDogZmlyZWJhc2UuZmlyZXN0b3JlLkZpZWxkVmFsdWUuc2VydmVyVGltZXN0YW1wKCksXHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICBpZiAoYXV0aC5jdXJyZW50VXNlci51aWQgIT09IGluZm8uYXV0aG9ySWQpIHtcclxuICAgICAgICByZXR1cm4gZGJcclxuICAgICAgICAgIC5jb2xsZWN0aW9uKFwibm90aWZpY2F0aW9uc1wiKVxyXG4gICAgICAgICAgLmRvYyhgJHthdXRoLmN1cnJlbnRVc2VyLnVpZH0ke2luZm8uY2hhcmFjdGVySWR9YClcclxuICAgICAgICAgIC5zZXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBcImNoYXJhY3RlckNvbW1lbnRcIixcclxuICAgICAgICAgICAgcmVhZDogZmFsc2UsXHJcbiAgICAgICAgICAgIHJlY2lwaWVudDogaW5mby5hdXRob3JJZCxcclxuICAgICAgICAgICAgc2VuZGVyOiBhdXRoLmN1cnJlbnRVc2VyLnVpZCxcclxuICAgICAgICAgICAgY2hhcmFjdGVySWQ6IGluZm8uY2hhcmFjdGVySWQsXHJcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogZmlyZWJhc2UuZmlyZXN0b3JlLkZpZWxkVmFsdWUuc2VydmVyVGltZXN0YW1wKCksXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IGAke2luZm8udXNlcm5hbWV9IGxlZnQgYSBmZWVkYmFjayBvbiB5b3VyIGNoYXJhY3RlciAke2NoYXJhY3Rlck5hbWV9YCxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogdHlwZXMuU1VCTUlUX0NPTU1FTlQsXHJcbiAgICAgICAgbWVzc2FnZTogXCJDb21tZW50IHBvc3RlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgfSk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IG1lc3NhZ2UuZXJyb3IoZXJyLm1lc3NhZ2UpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDaGFyYWN0ZXJDb21tZW50cyA9IChpZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgbGV0IGNvbW1lbnRzID0gW107XHJcbiAgZGIuY29sbGVjdGlvbihcImNvbW1lbnRzXCIpXHJcbiAgICAud2hlcmUoXCJjaGFyYWN0ZXJJZFwiLCBcIj09XCIsIGlkKVxyXG4gICAgLm9yZGVyQnkoXCJjcmVhdGVkQXRcIiwgXCJhc2NcIilcclxuICAgIC5nZXQoKVxyXG4gICAgLnRoZW4oKGNvbW0pID0+IHtcclxuICAgICAgbGV0IHVzZXJRdWVyaWVzID0gW107XHJcbiAgICAgIGNvbW0uZm9yRWFjaCgoYykgPT4gY29tbWVudHMucHVzaCh7IC4uLmMuZGF0YSgpLCBpZDogYy5pZCB9KSk7XHJcbiAgICAgIGNvbW1lbnRzLmZvckVhY2goKGNvbW1lbnQpID0+IHtcclxuICAgICAgICB1c2VyUXVlcmllcy5wdXNoKGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKS5kb2MoY29tbWVudC51c2VySWQpLmdldCgpKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBQcm9taXNlLmFsbCh1c2VyUXVlcmllcykudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgY29tbWVudHMgPSBjb21tZW50cy5tYXAoKGMpID0+ICh7XHJcbiAgICAgICAgICAuLi5jLFxyXG4gICAgICAgICAgdXNlckltYWdlOiByZXMuZmluZCgoZCkgPT4gZC5pZCA9PT0gYy51c2VySWQpLmRhdGEoKS5pbWFnZSxcclxuICAgICAgICB9KSk7XHJcbiAgICAgICAgY29uc3QgdXNlckNvbW1lbnQgPSBhdXRoLmN1cnJlbnRVc2VyXHJcbiAgICAgICAgICA/IGNvbW1lbnRzLmZpbmQoKGMpID0+IGMudXNlcklkID09PSBhdXRoLmN1cnJlbnRVc2VyLnVpZClcclxuICAgICAgICAgIDogbnVsbDtcclxuICAgICAgICBjb21tZW50cyA9IGF1dGguY3VycmVudFVzZXJcclxuICAgICAgICAgID8gY29tbWVudHMuZmlsdGVyKChjKSA9PiBjLnVzZXJJZCAhPT0gYXV0aC5jdXJyZW50VXNlci51aWQpXHJcbiAgICAgICAgICA6IGNvbW1lbnRzO1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IHR5cGVzLkdFVF9DT01NRU5UUyxcclxuICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgY29tbWVudHMsXHJcbiAgICAgICAgICAgIHVzZXJDb21tZW50LFxyXG4gICAgICAgICAgICBsb2FkaW5nQ29tbWVudHM6IGZhbHNlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkZWxldGVDaGFyYWN0ZXJDb21tZW50ID0gKGlkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkYi5jb2xsZWN0aW9uKFwiY29tbWVudHNcIilcclxuICAgIC5kb2MoaWQpXHJcbiAgICAuZGVsZXRlKClcclxuICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IHR5cGVzLlNVQk1JVF9DT01NRU5ULFxyXG4gICAgICAgIG1lc3NhZ2U6IFwiQ29tbWVudCBkZWxldGVkIHN1Y2Nlc3NmdWxseVwiLFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJhdGVDb21tZW50ID0gKGNvbW1lbnRJZCwgdHlwZSkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGlzcGF0Y2goeyB0eXBlOiB0eXBlcy5SQVRFX0NPTU1FTlQsIHJhdGVkOiB0cnVlIH0pO1xyXG4gIGlmICghYXV0aC5jdXJyZW50VXNlcilcclxuICAgIHJldHVybiBtZXNzYWdlLmVycm9yKFwiWW91IG5lZWQgdG8gYmUgbG9nZ2VkIGluIHRvIHJhdGUgYSBjb21tZW50XCIpO1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJjb21tZW50c1wiKVxyXG4gICAgLmRvYyhjb21tZW50SWQpXHJcbiAgICAuZ2V0KClcclxuICAgIC50aGVuKChkb2MpID0+IHtcclxuICAgICAgY29uc3QgaXNMaWtlZCA9IGRvYy5kYXRhKCkubGlrZWRCeS5pbmNsdWRlcyhhdXRoLmN1cnJlbnRVc2VyLnVpZCk7XHJcbiAgICAgIGNvbnN0IGlzRGlzbGlrZWQgPSBkb2MuZGF0YSgpLmRpc2xpa2VkQnkuaW5jbHVkZXMoYXV0aC5jdXJyZW50VXNlci51aWQpO1xyXG4gICAgICBpZiAoKHR5cGUgPT09IFwibGlrZVwiICYmIGlzTGlrZWQpIHx8ICh0eXBlID09PSBcImRpc2xpa2VcIiAmJiBpc0Rpc2xpa2VkKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBpZiAodHlwZSA9PT0gXCJsaWtlXCIpIHtcclxuICAgICAgICBkYi5jb2xsZWN0aW9uKFwiY29tbWVudHNcIilcclxuICAgICAgICAgIC5kb2MoY29tbWVudElkKVxyXG4gICAgICAgICAgLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgIGRpc2xpa2VkQnk6IGlzRGlzbGlrZWRcclxuICAgICAgICAgICAgICA/IGRvYy5kYXRhKCkuZGlzbGlrZWRCeS5maWx0ZXIoKGQpID0+IGQgIT09IGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gICAgICAgICAgICAgIDogZG9jLmRhdGEoKS5kaXNsaWtlZEJ5LFxyXG4gICAgICAgICAgICBsaWtlZEJ5OiBbLi4uZG9jLmRhdGEoKS5saWtlZEJ5LCBhdXRoLmN1cnJlbnRVc2VyLnVpZF0sXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IHR5cGVzLlNVQk1JVF9DT01NRU5ULCBtZXNzYWdlOiBcIlZvaWxvdVwiIH0pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJkaXNsaWtlXCIpIHtcclxuICAgICAgICBkYi5jb2xsZWN0aW9uKFwiY29tbWVudHNcIilcclxuICAgICAgICAgIC5kb2MoY29tbWVudElkKVxyXG4gICAgICAgICAgLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgIGxpa2VkQnk6IGlzTGlrZWRcclxuICAgICAgICAgICAgICA/IGRvYy5kYXRhKCkubGlrZWRCeS5maWx0ZXIoKGQpID0+IGQgIT09IGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gICAgICAgICAgICAgIDogZG9jLmRhdGEoKS5saWtlZEJ5LFxyXG4gICAgICAgICAgICBkaXNsaWtlZEJ5OiBbLi4uZG9jLmRhdGEoKS5kaXNsaWtlZEJ5LCBhdXRoLmN1cnJlbnRVc2VyLnVpZF0sXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IHR5cGVzLlJBVEVfQ09NTUVOVCwgcmF0ZWQ6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldENoYXJhY3RlcnNGcm9tU2VhcmNoID0gKHNlYXJjaCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgbGV0IHJlc3VsdCA9IFtdO1xyXG4gIGRpc3BhdGNoKHsgdHlwZTogdHlwZXMuR0VUX0NIQVJBQ1RFUlNfRlJPTV9TRUFSQ0gsIGxvYWRpbmc6IHRydWUgfSk7XHJcbiAgZGIuY29sbGVjdGlvbihcImNoYXJhY3RlcnNcIilcclxuICAgIC53aGVyZShcInB1YmxpY1wiLCBcIj09XCIsIHRydWUpXHJcbiAgICAuZ2V0KClcclxuICAgIC50aGVuKChkb2NzKSA9PiB7XHJcbiAgICAgIGRvY3MuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmlyc3RuYW1lID0gZG9jLmRhdGEoKS5maXJzdG5hbWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBjb25zdCBsYXN0bmFtZSA9IGRvYy5kYXRhKCkubGFzdG5hbWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBjb25zdCBhdXRob3JOYW1lID0gZG9jLmRhdGEoKS5hdXRob3JOYW1lLnRvTG93ZXJDYXNlKCkuc3BsaXQoXCIgXCIpO1xyXG4gICAgICAgIGNvbnN0IHNlYXJjaFRlcm0gPSBzZWFyY2guc3BsaXQoXCItXCIpO1xyXG5cclxuICAgICAgICBjb25zdCBmaXJzdG5hbWVJbmNsdWRlZCA9IHNlYXJjaFRlcm0uc29tZShcclxuICAgICAgICAgICh3b3JkKSA9PiBmaXJzdG5hbWUuaW5kZXhPZih3b3JkKSAhPT0gLTFcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IGxhc3RuYW1lSW5jbHVkZWQgPSBzZWFyY2hUZXJtLnNvbWUoXHJcbiAgICAgICAgICAod29yZCkgPT4gbGFzdG5hbWUuaW5kZXhPZih3b3JkKSAhPT0gLTFcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IGF1dGhvckluY2x1ZGVkID0gc2VhcmNoVGVybS5ldmVyeSgod29yZCkgPT5cclxuICAgICAgICAgIGF1dGhvck5hbWUuaW5jbHVkZXMod29yZClcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IG9yQXV0aG9ySW5jbHVkZWQgPSBzZWFyY2hUZXJtLnNvbWUoXHJcbiAgICAgICAgICAod29yZCkgPT4gZG9jLmRhdGEoKS5hdXRob3JOYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih3b3JkKSAhPT0gLTFcclxuICAgICAgICApO1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIGZpcnN0bmFtZUluY2x1ZGVkIHx8XHJcbiAgICAgICAgICBsYXN0bmFtZUluY2x1ZGVkIHx8XHJcbiAgICAgICAgICBhdXRob3JJbmNsdWRlZCB8fFxyXG4gICAgICAgICAgb3JBdXRob3JJbmNsdWRlZFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgcmVzdWx0LnB1c2goeyAuLi5kb2MuZGF0YSgpLCBpZDogZG9jLmlkIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICB9KTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiB0eXBlcy5HRVRfQ0hBUkFDVEVSU19GUk9NX1NFQVJDSCxcclxuICAgICAgICBwYXlsb2FkOiByZXN1bHQsXHJcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgIH0pO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiBtZXNzYWdlLmVycm9yKGVyci5tZXNzYWdlKSk7XHJcbn07XHJcbiIsImltcG9ydCB7IHR5cGVzIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBkYiwgYXV0aCwgc3RvcmFnZSB9IGZyb20gXCIuLi9mYkNvbmZpZ1wiO1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlL2FwcFwiO1xyXG5pbXBvcnQgeyBtZXNzYWdlIH0gZnJvbSBcImFudGRcIjtcclxuXHJcbi8vIFNUT1JJRVNcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdG9yeSA9IChpZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGIuY29sbGVjdGlvbihcInN0b3JpZXNcIilcclxuICAgIC5kb2MoaWQpXHJcbiAgICAuZ2V0KClcclxuICAgIC50aGVuKChkb2MpID0+IHtcclxuICAgICAgaWYgKGRvYy5leGlzdHMpIHtcclxuICAgICAgICBjb25zdCBtYWluID0gZG9jLmRhdGEoKS5tYWluQ2hhcmFjdGVycztcclxuICAgICAgICBjb25zdCBzZWNvbmRhcnkgPSBkb2MuZGF0YSgpLnNlY29uZGFyeUNoYXJhY3RlcnM7XHJcbiAgICAgICAgbGV0IG1haW5BcnIgPSBbXTtcclxuICAgICAgICBsZXQgc2Vjb25kYXJ5QXJyID0gW107XHJcbiAgICAgICAgY29uc3QgbWFpblF1ZXJ5ID0gbWFpbi5tYXAoKGMpID0+XHJcbiAgICAgICAgICBkYi5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc1wiKS5kb2MoYykuZ2V0KClcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IHNlY29uZGFyeVF1ZXJ5ID0gc2Vjb25kYXJ5Lm1hcCgoYykgPT5cclxuICAgICAgICAgIGRiLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzXCIpLmRvYyhjLmlkKS5nZXQoKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgbWFpblJlcyA9IFByb21pc2UuYWxsKG1haW5RdWVyeSk7XHJcbiAgICAgICAgY29uc3Qgc2Vjb25kYXJ5UmVzID0gUHJvbWlzZS5hbGwoc2Vjb25kYXJ5UXVlcnkpO1xyXG4gICAgICAgIFByb21pc2UuYWxsKFttYWluUmVzLCBzZWNvbmRhcnlSZXNdKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgIHJlc3VsdFswXS5mb3JFYWNoKChkb2N1KSA9PiB7XHJcbiAgICAgICAgICAgIG1haW5BcnIgPSBbLi4ubWFpbkFyciwgeyAuLi5kb2N1LmRhdGEoKSwgaWQ6IGRvY3UuaWQgfV07XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHJlc3VsdFsxXS5mb3JFYWNoKChkb2N1KSA9PiB7XHJcbiAgICAgICAgICAgIHNlY29uZGFyeUFyciA9IFsuLi5zZWNvbmRhcnlBcnIsIHsgLi4uZG9jdS5kYXRhKCksIGlkOiBkb2N1LmlkIH1dO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IHR5cGVzLkdFVF9TVE9SWSxcclxuICAgICAgICAgICAgc3RvcnlFeGlzdHM6IHRydWUsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAuLi5kb2MuZGF0YSgpLFxyXG4gICAgICAgICAgICAgIGlkOiBkb2MuaWQsXHJcbiAgICAgICAgICAgICAgc2Vjb25kYXJ5Q2hhcmFjdGVyczogc2Vjb25kYXJ5QXJyLFxyXG4gICAgICAgICAgICAgIG1haW5DaGFyYWN0ZXJzOiBtYWluQXJyLFxyXG4gICAgICAgICAgICAgIG1haW5BcnI6IGRvYy5kYXRhKCkubWFpbkNoYXJhY3RlcnMsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiB0eXBlcy5ESVNQQVRDSF9FUlJPUixcclxuICAgICAgICAgIHN0b3J5RXhpc3RzOiBmYWxzZSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRTdG9yeSA9IChkYXRhKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkaXNwYXRjaCh7IHR5cGU6IHR5cGVzLkFERF9TVE9SWSwgcGF5bG9hZDogeyBsb2FkaW5nOiB0cnVlIH0gfSk7XHJcbiAgbGV0IHN0b3J5SWQgPSBcIlwiO1xyXG5cclxuICBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKVxyXG4gICAgLmFkZCh7XHJcbiAgICAgIC4uLmRhdGEsXHJcbiAgICAgIGF1dGhvcklkOiBhdXRoLmN1cnJlbnRVc2VyLnVpZCxcclxuICAgICAgYXV0aG9yTmFtZTogZGF0YS5hdXRob3JOYW1lLFxyXG4gICAgICBvbmVTaG90OiBmYWxzZSxcclxuICAgICAgYmFubmVyOiB0eXBlb2YgZGF0YS5iYW5uZXIgPT09IFwic3RyaW5nXCIgPyBkYXRhLmJhbm5lciA6IFwiXCIsXHJcbiAgICAgIGNyZWF0ZWRBdDogZmlyZWJhc2UuZmlyZXN0b3JlLkZpZWxkVmFsdWUuc2VydmVyVGltZXN0YW1wKCksXHJcbiAgICAgIGxpa2VzQ291bnQ6IDAsXHJcbiAgICAgIGNoYXB0ZXJzQ291bnQ6IDAsXHJcbiAgICAgIHNlY29uZGFyeUNoYXJhY3RlcnM6IFtdLFxyXG4gICAgICBzZWNvbmRhcnlBcnI6IFtdLFxyXG4gICAgICBmZWF0dXJlZDogZmFsc2UsXHJcbiAgICAgIG5vdGU6IDAsXHJcbiAgICAgIGNoYXB0ZXJzQ291bnQ6IDAsXHJcbiAgICAgIGNvbW1lbnRzQ291bnQ6IDAsXHJcbiAgICAgIGxhc3RVcGRhdGVkOiBmaXJlYmFzZS5maXJlc3RvcmUuRmllbGRWYWx1ZS5zZXJ2ZXJUaW1lc3RhbXAoKSxcclxuICAgIH0pXHJcbiAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIHN0b3J5SWQgPSByZXMuaWQ7XHJcbiAgICAgIGlmICh0eXBlb2YgZGF0YS5iYW5uZXIgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICBjb25zdCBpbWFnZU5hbWUgPSBgJHtyZXMuaWR9XyR7ZGF0YS50aXRsZVxyXG4gICAgICAgICAgLnRvTG93ZXJDYXNlKClcclxuICAgICAgICAgIC5zcGxpdChcIiBcIilcclxuICAgICAgICAgIC5qb2luKFwiX1wiKX1gO1xyXG4gICAgICAgIHN0b3JhZ2VcclxuICAgICAgICAgIC5yZWYoYCR7YXV0aC5jdXJyZW50VXNlci51aWR9LyR7aW1hZ2VOYW1lfWApXHJcbiAgICAgICAgICAucHV0KGRhdGEuYmFubmVyKVxyXG4gICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gc3RvcmFnZVxyXG4gICAgICAgICAgICAgIC5yZWYoYXV0aC5jdXJyZW50VXNlci51aWQpXHJcbiAgICAgICAgICAgICAgLmNoaWxkKGltYWdlTmFtZSlcclxuICAgICAgICAgICAgICAuZ2V0RG93bmxvYWRVUkwoKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbigodXJsKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBkYlxyXG4gICAgICAgICAgICAgIC5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKVxyXG4gICAgICAgICAgICAgIC5kb2Moc3RvcnlJZClcclxuICAgICAgICAgICAgICAudXBkYXRlKHsgYmFubmVyOiB1cmwgfSk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgdHlwZTogdHlwZXMuQUREX1NUT1JZLFxyXG4gICAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiU3RvcnkgYWRkZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICAgICAgICBzdG9yeUlkOiBzdG9yeUlkLFxyXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiB0eXBlcy5BRERfU1RPUlksXHJcbiAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiU3RvcnkgYWRkZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICAgIHN0b3J5SWQ6IHN0b3J5SWQsXHJcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIG1lc3NhZ2UuZXJyb3IoZXJyLm1lc3NhZ2UpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZWRpdFN0b3J5ID0gKGRhdGEsIHN0b3J5SWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRpc3BhdGNoKHsgdHlwZTogdHlwZXMuRURJVF9TVE9SWSwgcGF5bG9hZDogeyBsb2FkaW5nU3Rvcnk6IHRydWUgfSB9KTtcclxuICBjb25zdCBpbWFnZU5hbWUgPSBkYXRhLnRpdGxlLnRvTG93ZXJDYXNlKCkuc3BsaXQoXCIgXCIpLmpvaW4oXCJfXCIpO1xyXG5cclxuICBpZiAodHlwZW9mIGRhdGEuYmFubmVyID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICBzdG9yYWdlXHJcbiAgICAgIC5yZWYoYCR7YXV0aC5jdXJyZW50VXNlci51aWR9LyR7aW1hZ2VOYW1lfWApXHJcbiAgICAgIC5wdXQoZGF0YS5iYW5uZXIpXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICByZXR1cm4gc3RvcmFnZVxyXG4gICAgICAgICAgLnJlZihhdXRoLmN1cnJlbnRVc2VyLnVpZClcclxuICAgICAgICAgIC5jaGlsZChpbWFnZU5hbWUpXHJcbiAgICAgICAgICAuZ2V0RG93bmxvYWRVUkwoKTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKHVybCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBkYlxyXG4gICAgICAgICAgLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpXHJcbiAgICAgICAgICAuZG9jKHN0b3J5SWQpXHJcbiAgICAgICAgICAudXBkYXRlKHtcclxuICAgICAgICAgICAgLi4uZGF0YSxcclxuICAgICAgICAgICAgYmFubmVyOiB1cmwsXHJcbiAgICAgICAgICAgIGxhc3RVcGRhdGVkOiBmaXJlYmFzZS5maXJlc3RvcmUuRmllbGRWYWx1ZS5zZXJ2ZXJUaW1lc3RhbXAoKSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgZGIuY29sbGVjdGlvbihcImxvY2F0aW9uc1wiKVxyXG4gICAgICAgICAgLndoZXJlKFwic3RvcnlJZFwiLCBcIj09XCIsIHN0b3J5SWQpXHJcbiAgICAgICAgICAuZ2V0KClcclxuICAgICAgICAgIC50aGVuKChkb2NzKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBsb2NhdGlvblF1ZXJ5ID0gW107XHJcbiAgICAgICAgICAgIGRvY3MuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICAgICAgICAgICAgbG9jYXRpb25RdWVyeSA9IFtcclxuICAgICAgICAgICAgICAgIC4uLmxvY2F0aW9uUXVlcnksXHJcbiAgICAgICAgICAgICAgICBkYlxyXG4gICAgICAgICAgICAgICAgICAuY29sbGVjdGlvbihcImxvY2F0aW9uc1wiKVxyXG4gICAgICAgICAgICAgICAgICAuZG9jKGRvYy5pZClcclxuICAgICAgICAgICAgICAgICAgLnVwZGF0ZSh7IHN0b3J5VGl0bGU6IGRhdGEudGl0bGUgfSksXHJcbiAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFByb21pc2UuYWxsKGxvY2F0aW9uUXVlcnkpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IHR5cGVzLkVESVRfU1RPUlksXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiU3RvcnkgZWRpdGVkIHN1Y2Nlc3NmdWxseVwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBtZXNzYWdlLmVycm9yKGVyci5tZXNzYWdlKTtcclxuICAgICAgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpXHJcbiAgICAgIC5kb2Moc3RvcnlJZClcclxuICAgICAgLnVwZGF0ZSh7XHJcbiAgICAgICAgLi4uZGF0YSxcclxuICAgICAgICBsYXN0VXBkYXRlZDogZmlyZWJhc2UuZmlyZXN0b3JlLkZpZWxkVmFsdWUuc2VydmVyVGltZXN0YW1wKCksXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICBkYi5jb2xsZWN0aW9uKFwibG9jYXRpb25zXCIpXHJcbiAgICAgICAgICAud2hlcmUoXCJzdG9yeUlkXCIsIFwiPT1cIiwgc3RvcnlJZClcclxuICAgICAgICAgIC5nZXQoKVxyXG4gICAgICAgICAgLnRoZW4oKGRvY3MpID0+IHtcclxuICAgICAgICAgICAgbGV0IGxvY2F0aW9uUXVlcnkgPSBbXTtcclxuICAgICAgICAgICAgZG9jcy5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgICAgICAgICAgICBsb2NhdGlvblF1ZXJ5ID0gW1xyXG4gICAgICAgICAgICAgICAgLi4ubG9jYXRpb25RdWVyeSxcclxuICAgICAgICAgICAgICAgIGRiXHJcbiAgICAgICAgICAgICAgICAgIC5jb2xsZWN0aW9uKFwibG9jYXRpb25zXCIpXHJcbiAgICAgICAgICAgICAgICAgIC5kb2MoZG9jLmlkKVxyXG4gICAgICAgICAgICAgICAgICAudXBkYXRlKHsgc3RvcnlUaXRsZTogZGF0YS50aXRsZSB9KSxcclxuICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgUHJvbWlzZS5hbGwobG9jYXRpb25RdWVyeSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogdHlwZXMuRURJVF9TVE9SWSxcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJTdG9yeSBlZGl0ZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoZXJyLm1lc3NhZ2UpO1xyXG4gICAgICB9KTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlU3RvcnkgPSAoaWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRpc3BhdGNoKHsgdHlwZTogdHlwZXMuREVMRVRFX1NUT1JZLCBwYXlsb2FkOiB7IGxvYWRpbmc6IHRydWUgfSB9KTtcclxuICBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKVxyXG4gICAgLmRvYyhpZClcclxuICAgIC5kZWxldGUoKVxyXG4gICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogdHlwZXMuREVMRVRFX1NUT1JZLFxyXG4gICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgIG1lc3NhZ2U6IFwiU3RvcnkgZGVsZXRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgIGxvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgICBkZWxldGVkOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VXNlclN0b3JpZXMgPSAoaWQsIHR5cGUpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGNvbnN0IHVzZXJJZCA9IGlkID8gaWQgOiBhdXRoLmN1cnJlbnRVc2VyLnVpZDtcclxuICBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKVxyXG4gICAgLndoZXJlKFwiYXV0aG9ySWRcIiwgXCI9PVwiLCB1c2VySWQpXHJcbiAgICAub3JkZXJCeShcImNyZWF0ZWRBdFwiLCBcImRlc2NcIilcclxuICAgIC5nZXQoKVxyXG4gICAgLnRoZW4oKGRvY3MpID0+IHtcclxuICAgICAgbGV0IGl0ZW1zID0gW107XHJcbiAgICAgIGRvY3MuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICAgICAgaXRlbXMgPSBbLi4uaXRlbXMsIHsgaWQ6IGRvYy5pZCwgLi4uZG9jLmRhdGEoKSB9XS5maWx0ZXIoKHMpID0+XHJcbiAgICAgICAgICBpZCA/IHMucHVibGljIDogc1xyXG4gICAgICAgICk7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gaXRlbXM7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGl0ZW1zKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogdHlwZXMuR0VUX1VTRVJfU1RPUklFUywgcGF5bG9hZDogaXRlbXMgfSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRGYXZvcml0ZVN0b3JpZXMgPSAoaWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGNvbnN0IHVzZXJJZCA9IGlkID8gaWQgOiBhdXRoLmN1cnJlbnRVc2VyLnVpZDtcclxuICBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc0xpa2VzXCIpXHJcbiAgICAud2hlcmUoXCJzZW5kZXJJZFwiLCBcIj09XCIsIHVzZXJJZClcclxuICAgIC5vcmRlckJ5KFwiY3JlYXRlZEF0XCIsIFwiZGVzY1wiKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigoZG9jcykgPT4ge1xyXG4gICAgICBsZXQgZmF2QXJyID0gW107XHJcbiAgICAgIGRvY3MuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICAgICAgZmF2QXJyID0gWy4uLmZhdkFyciwgZG9jLmRhdGEoKS5zdG9yeUlkXTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBmYXZBcnI7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKHVzZXJzKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHVzZXJzLm1hcCgodXNlcikgPT5cclxuICAgICAgICBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKS5kb2ModXNlcikuZ2V0KClcclxuICAgICAgKTtcclxuICAgICAgUHJvbWlzZS5hbGwocmVzdWx0KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBsZXQgZmF2VXNlcnMgPSBbXTtcclxuICAgICAgICByZXMuZm9yRWFjaChcclxuICAgICAgICAgIChkb2MpID0+IChmYXZVc2VycyA9IFsuLi5mYXZVc2VycywgeyBpZDogZG9jLmlkLCAuLi5kb2MuZGF0YSgpIH1dKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogdHlwZXMuR0VUX0ZBVk9SSVRFX1NUT1JJRVMsXHJcbiAgICAgICAgICBwYXlsb2FkOiBmYXZVc2VycyxcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBpc1N0b3J5RmF2b3JpdGUgPSAoc3RvcnlJZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgaWYgKGF1dGguY3VycmVudFVzZXIpIHtcclxuICAgIGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzTGlrZXNcIilcclxuICAgICAgLndoZXJlKFwic2VuZGVySWRcIiwgXCI9PVwiLCBhdXRoLmN1cnJlbnRVc2VyLnVpZClcclxuICAgICAgLndoZXJlKFwic3RvcnlJZFwiLCBcIj09XCIsIHN0b3J5SWQpXHJcbiAgICAgIC5vblNuYXBzaG90KChzbmFwc2hvdCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFuc3dlciA9IHNuYXBzaG90LmRvY3NbMF0gPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IHR5cGVzLklTX1NUT1JZX0ZBVk9SSVRFLFxyXG4gICAgICAgICAgcGF5bG9hZDogYW5zd2VyLFxyXG4gICAgICAgICAgbG9hZGluZ0ZhdjogZmFsc2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiB0eXBlcy5JU19TVE9SWV9GQVZPUklURSxcclxuICAgICAgcGF5bG9hZDogZmFsc2UsXHJcbiAgICAgIGxvYWRpbmdGYXY6IGZhbHNlLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFN0b3J5VG9GYXZvcml0ZSA9IChpZCwgdXNlcm5hbWUsIHN0b3J5VGl0bGUsIGF1dGhvcklkKSA9PiAoXHJcbiAgZGlzcGF0Y2hcclxuKSA9PiB7XHJcbiAgLy8gaWYgKGlzRmF2b3JpdGUpIHJldHVybiBtZXNzYWdlLndhcm5pbmcoXCJZb3UndmUgYWxyZWFkeSBsaWtlZCB0aGlzIHN0b3J5XCIpO1xyXG4gIGlmICghYXV0aC5jdXJyZW50VXNlcilcclxuICAgIHJldHVybiBtZXNzYWdlLmVycm9yKFwiWW91IG5lZWQgdG8gYmUgbG9nZ2VkIGluIHRvIGxpa2UgYSBzdG9yeVwiKTtcclxuICBpZiAoIWF1dGguY3VycmVudFVzZXIuZW1haWxWZXJpZmllZClcclxuICAgIHJldHVybiBtZXNzYWdlLmVycm9yKFwiWW91IG5lZWQgdG8gdmVyaWZ5IHlvdXIgZW1haWwgZmlyc3RcIik7XHJcblxyXG4gIGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzTGlrZXNcIilcclxuICAgIC5hZGQoe1xyXG4gICAgICBzZW5kZXI6IHVzZXJuYW1lLFxyXG4gICAgICBzZW5kZXJJZDogYXV0aC5jdXJyZW50VXNlci51aWQsXHJcbiAgICAgIHN0b3J5SWQ6IGlkLFxyXG4gICAgICBjcmVhdGVkQXQ6IGZpcmViYXNlLmZpcmVzdG9yZS5GaWVsZFZhbHVlLnNlcnZlclRpbWVzdGFtcCgpLFxyXG4gICAgfSlcclxuICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgaWYgKGF1dGhvcklkICE9PSBhdXRoLmN1cnJlbnRVc2VyLnVpZCkge1xyXG4gICAgICAgIHJldHVybiBkYlxyXG4gICAgICAgICAgLmNvbGxlY3Rpb24oXCJub3RpZmljYXRpb25zXCIpXHJcbiAgICAgICAgICAuZG9jKGAke2F1dGguY3VycmVudFVzZXIudWlkfSR7aWR9YClcclxuICAgICAgICAgIC5zZXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBcInN0b3J5TGlrZVwiLFxyXG4gICAgICAgICAgICByZWFkOiBmYWxzZSxcclxuICAgICAgICAgICAgcmVjaXBpZW50OiBhdXRob3JJZCxcclxuICAgICAgICAgICAgc2VuZGVyOiBhdXRoLmN1cnJlbnRVc2VyLnVpZCxcclxuICAgICAgICAgICAgc3RvcnlJZDogaWQsXHJcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogZmlyZWJhc2UuZmlyZXN0b3JlLkZpZWxkVmFsdWUuc2VydmVyVGltZXN0YW1wKCksXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IGAke3VzZXJuYW1lfSBsaWtlZCB5b3VyIHN0b3J5ICR7c3RvcnlUaXRsZX1gLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAudGhlbigoKSA9PiBtZXNzYWdlLnN1Y2Nlc3MoYCR7c3RvcnlUaXRsZX0gYWRkZWQgdG8geW91ciBmYXZvcml0ZXNgKSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiBtZXNzYWdlLmVycm9yKGVyci5tZXNzYWdlKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlU3RvcnlGcm9tRmF2b3JpdGUgPSAoaWQsIHN0b3J5VGl0bGUpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzTGlrZXNcIilcclxuICAgIC53aGVyZShcInN0b3J5SWRcIiwgXCI9PVwiLCBpZClcclxuICAgIC53aGVyZShcInNlbmRlcklkXCIsIFwiPT1cIiwgYXV0aC5jdXJyZW50VXNlci51aWQpXHJcbiAgICAuZ2V0KClcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc0xpa2VzXCIpLmRvYyhkYXRhLmRvY3NbMF0uaWQpLmRlbGV0ZSgpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKCgpID0+IG1lc3NhZ2Uuc3VjY2VzcyhgJHtzdG9yeVRpdGxlfSByZW1vdmVkIGZyb20geW91ciBmYXZvcml0ZXNgKSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiBtZXNzYWdlLmVycm9yKFwiVGhlcmUgaGFzIGJlZW4gYSBwcm9ibGVtXCIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdG9yeUNoYXJhY3RlcnMgPSAoKSA9PiAoZGlzcGF0Y2gpID0+IHt9O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEhvbWVTdG9yaWVzID0gKCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgbGV0IHJlc3VsdCA9IFtdO1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpXHJcbiAgICAud2hlcmUoXCJwdWJsaWNcIiwgXCI9PVwiLCB0cnVlKVxyXG4gICAgLmxpbWl0KDQpXHJcbiAgICAuZ2V0KClcclxuICAgIC50aGVuKChkb2NzKSA9PiB7XHJcbiAgICAgIGRvY3MuZm9yRWFjaCgoZG9jKSA9PiByZXN1bHQucHVzaCh7IGlkOiBkb2MuaWQsIC4uLmRvYy5kYXRhKCkgfSkpO1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogdHlwZXMuR0VUX0hPTUVfU1RPUklFUyxcclxuICAgICAgICBwYXlsb2FkOiByZXN1bHQsXHJcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG4vLyBDSEFQVEVSc1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZENoYXB0ZXIgPSAoZGF0YSkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGlzcGF0Y2goeyB0eXBlOiB0eXBlcy5BRERfQ0hBUFRFUiwgcGF5bG9hZDogeyBsb2FkaW5nOiB0cnVlIH0gfSk7XHJcblxyXG4gIGRiLmNvbGxlY3Rpb24oXCJjaGFwdGVyc1wiKVxyXG4gICAgLndoZXJlKFwic3RvcnlJZFwiLCBcIj09XCIsIGRhdGEuc3RvcnlJZClcclxuICAgIC5nZXQoKVxyXG4gICAgLnRoZW4oKGRvY3MpID0+IHtcclxuICAgICAgbGV0IG51bWJlclVzZWQgPSBbXTtcclxuICAgICAgZG9jcy5mb3JFYWNoKChjaGFwdGVyKSA9PiB7XHJcbiAgICAgICAgbnVtYmVyVXNlZC5wdXNoKGNoYXB0ZXIuZGF0YSgpLm51bWJlcik7XHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAobnVtYmVyVXNlZC5pbmNsdWRlcyhkYXRhLm51bWJlcikpIHtcclxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IHR5cGVzLkFERF9DSEFQVEVSLCBwYXlsb2FkOiB7IGxvYWRpbmc6IGZhbHNlIH0gfSk7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihgWW91IGFscmVhZHkgaGF2ZSBhIGNoYXB0ZXIgbnVtYmVyZWQ6ICR7ZGF0YS5udW1iZXJ9YCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGRiXHJcbiAgICAgICAgICAuY29sbGVjdGlvbihcImNoYXB0ZXJzXCIpXHJcbiAgICAgICAgICAuYWRkKHtcclxuICAgICAgICAgICAgLi4uZGF0YSxcclxuICAgICAgICAgICAgYXV0aG9ySWQ6IGF1dGguY3VycmVudFVzZXIudWlkLFxyXG4gICAgICAgICAgICBjb21tZW50c0NvdW50OiAwLFxyXG4gICAgICAgICAgICBub3RlOiAwLFxyXG4gICAgICAgICAgICB2b3RlcnM6IFtdLFxyXG4gICAgICAgICAgICB2b3Rlc0NvdW50OiAwLFxyXG4gICAgICAgICAgICBjcmVhdGVkQXQ6IGZpcmViYXNlLmZpcmVzdG9yZS5GaWVsZFZhbHVlLnNlcnZlclRpbWVzdGFtcCgpLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgIHR5cGU6IHR5cGVzLkFERF9DSEFQVEVSLFxyXG4gICAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiQ2hhcHRlciBhZGRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgICAgICAgIGNoYXBJZDogcmVzLmlkLFxyXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZWRpdENoYXB0ZXIgPSAoZGF0YSwgY2hhcGlkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkaXNwYXRjaCh7IHR5cGU6IHR5cGVzLkVESVRfQ0hBUFRFUiwgcGF5bG9hZDogeyBsb2FkaW5nOiB0cnVlIH0gfSk7XHJcbiAgZGIuY29sbGVjdGlvbihcImNoYXB0ZXJzXCIpXHJcbiAgICAuZG9jKGNoYXBpZClcclxuICAgIC51cGRhdGUoeyAuLi5kYXRhIH0pXHJcbiAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiB0eXBlcy5FRElUX0NIQVBURVIsXHJcbiAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgbWVzc2FnZTogXCJDaGFwdGVyIGVkaXRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlQ2hhcHRlciA9IChpZCwgc3RvcnlJZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGlzcGF0Y2goeyB0eXBlOiB0eXBlcy5ERUxFVEVfQ0hBUFRFUiwgcGF5bG9hZDogeyBsb2FkaW5nQ2hhcHRlcjogdHJ1ZSB9IH0pO1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJjaGFwdGVyc1wiKVxyXG4gICAgLmRvYyhpZClcclxuICAgIC5kZWxldGUoKVxyXG4gICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogdHlwZXMuREVMRVRFX0NIQVBURVIsXHJcbiAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgbWVzc2FnZTogXCJDaGFwdGVyIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICBsb2FkaW5nQ2hhcHRlcjogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldENoYXB0ZXIgPSAoc3RvcnlJZCwgaWQsIHR5cGUpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpXHJcbiAgICAuZG9jKHN0b3J5SWQpXHJcbiAgICAuZ2V0KClcclxuICAgIC50aGVuKChkb2MpID0+IHtcclxuICAgICAgaWYgKGRvYy5leGlzdHMpIHtcclxuICAgICAgICBkYi5jb2xsZWN0aW9uKFwiY2hhcHRlcnNcIilcclxuICAgICAgICAgIC5kb2MoaWQpXHJcbiAgICAgICAgICAuZ2V0KClcclxuICAgICAgICAgIC50aGVuKChjaGFwKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjaGFwLmV4aXN0cykge1xyXG4gICAgICAgICAgICAgIGlmICh0eXBlID09PSBcInNob3dcIikge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNoYXJhY3RlcnMgPSBbXTtcclxuICAgICAgICAgICAgICAgIGxldCBsb2NhdGlvbnMgPSBbXTtcclxuICAgICAgICAgICAgICAgIGxldCBjaGFyYVF1ZXJ5ID0gW107XHJcbiAgICAgICAgICAgICAgICBsZXQgbG9jUXVlcnkgPSBbXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNoYXJhY3RlcnNJbkNoYXBlciA9IGNoYXAuZGF0YSgpLmNoYXJhY3RlcnM7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhdGlvbnNJbkNoYXBlciA9IGNoYXAuZGF0YSgpLmxvY2F0aW9ucztcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNoYXBOdW1iZXIgPSBjaGFwLmRhdGEoKS5udW1iZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJldkNoYXAgPSBkYlxyXG4gICAgICAgICAgICAgICAgICAuY29sbGVjdGlvbihcImNoYXB0ZXJzXCIpXHJcbiAgICAgICAgICAgICAgICAgIC53aGVyZShcInN0b3J5SWRcIiwgXCI9PVwiLCBzdG9yeUlkKVxyXG4gICAgICAgICAgICAgICAgICAud2hlcmUoXCJudW1iZXJcIiwgXCI9PVwiLCBjaGFwTnVtYmVyIC0gMSlcclxuICAgICAgICAgICAgICAgICAgLmdldCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV4dENoYXAgPSBkYlxyXG4gICAgICAgICAgICAgICAgICAuY29sbGVjdGlvbihcImNoYXB0ZXJzXCIpXHJcbiAgICAgICAgICAgICAgICAgIC53aGVyZShcInN0b3J5SWRcIiwgXCI9PVwiLCBzdG9yeUlkKVxyXG4gICAgICAgICAgICAgICAgICAud2hlcmUoXCJudW1iZXJcIiwgXCI9PVwiLCBjaGFwTnVtYmVyICsgMSlcclxuICAgICAgICAgICAgICAgICAgLmdldCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNoYXJhY3RlcnNJbkNoYXBlci5mb3JFYWNoKChjaGFyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNoYXJhUXVlcnkucHVzaChkYi5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc1wiKS5kb2MoY2hhcikuZ2V0KCkpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbnNJbkNoYXBlci5mb3JFYWNoKChsb2MpID0+IHtcclxuICAgICAgICAgICAgICAgICAgbG9jUXVlcnkucHVzaChkYi5jb2xsZWN0aW9uKFwibG9jYXRpb25zXCIpLmRvYyhsb2MpLmdldCgpKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgY2hhcmFRdWVyeSA9IFByb21pc2UuYWxsKGNoYXJhUXVlcnkpO1xyXG4gICAgICAgICAgICAgICAgbG9jUXVlcnkgPSBQcm9taXNlLmFsbChsb2NRdWVyeSk7XHJcbiAgICAgICAgICAgICAgICBQcm9taXNlLmFsbChbY2hhcmFRdWVyeSwgbG9jUXVlcnksIHByZXZDaGFwLCBuZXh0Q2hhcF0pLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAgIChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcHJldiA9IHJlc1syXS5kb2NzWzBdID8gcmVzWzJdLmRvY3NbMF0uaWQgOiBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXh0ID0gcmVzWzNdLmRvY3NbMF0gPyByZXNbM10uZG9jc1swXS5pZCA6IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzWzBdLmZvckVhY2goKGMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGNoYXJhY3RlcnMucHVzaCh7IC4uLmMuZGF0YSgpLCBpZDogYy5pZCB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICByZXNbMV0uZm9yRWFjaCgobCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25zLnB1c2goeyAuLi5sLmRhdGEoKSwgaWQ6IGwuaWQgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogdHlwZXMuR0VUX0NIQVBURVIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYXB0ZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5jaGFwLmRhdGEoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogY2hhcC5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5leHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJhY3RlcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHVibGljOiBkb2MuZGF0YSgpLnB1YmxpYyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9yeVRpdGxlOiBkb2MuZGF0YSgpLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFwdGVyRXhpc3RzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgICB0eXBlOiB0eXBlcy5HRVRfQ0hBUFRFUixcclxuICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoYXB0ZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIC4uLmNoYXAuZGF0YSgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ6IGNoYXAuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICBwdWJsaWM6IGRvYy5kYXRhKCkucHVibGljLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgY2hhcHRlckV4aXN0czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiB0eXBlcy5HRVRfQ0hBUFRFUixcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHsgY2hhcHRlckV4aXN0czogZmFsc2UgfSxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogdHlwZXMuR0VUX0NIQVBURVIsXHJcbiAgICAgICAgICBwYXlsb2FkOiB7IGNoYXB0ZXJFeGlzdHM6IGZhbHNlIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldENoYXB0ZXJzID0gKGlkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkYi5jb2xsZWN0aW9uKFwiY2hhcHRlcnNcIilcclxuICAgIC53aGVyZShcInN0b3J5SWRcIiwgXCI9PVwiLCBpZClcclxuICAgIC5vcmRlckJ5KFwibnVtYmVyXCIsIFwiYXNjXCIpXHJcbiAgICAub25TbmFwc2hvdCgoZG9jcykgPT4ge1xyXG4gICAgICBsZXQgYXJyID0gW107XHJcbiAgICAgIGRvY3MuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICAgICAgYXJyLnB1c2goe1xyXG4gICAgICAgICAgYXV0aG9ySWQ6IGRvYy5kYXRhKCkuYXV0aG9ySWQsXHJcbiAgICAgICAgICBpZDogZG9jLmlkLFxyXG4gICAgICAgICAgY3JlYXRlZEF0OiBkb2MuZGF0YSgpLmNyZWF0ZWRBdCxcclxuICAgICAgICAgIG51bWJlcjogZG9jLmRhdGEoKS5udW1iZXIsXHJcbiAgICAgICAgICB0aXRsZTogZG9jLmRhdGEoKS50aXRsZSxcclxuICAgICAgICAgIGNvbW1lbnRzQ291bnQ6IGRvYy5kYXRhKCkuY29tbWVudHNDb3VudCxcclxuICAgICAgICAgIHN0YXR1czogZG9jLmRhdGEoKS5zdGF0dXMsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogdHlwZXMuR0VUX0NIQVBURVJTLFxyXG4gICAgICAgIHBheWxvYWQ6IGFycixcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbi8vIExPQ0FUSU9OU1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZExvY2F0aW9uID0gKGRhdGEpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRpc3BhdGNoKHsgdHlwZTogdHlwZXMuQUREX0xPQ0FUSU9OLCBwYXlsb2FkOiB7IGxvYWRpbmdMb2M6IHRydWUgfSB9KTtcclxuICBsZXQgbG9jSWQgPSBcIlwiO1xyXG5cclxuICBkYi5jb2xsZWN0aW9uKFwibG9jYXRpb25zXCIpXHJcbiAgICAuYWRkKHtcclxuICAgICAgLi4uZGF0YSxcclxuICAgICAgaW1hZ2U6IHR5cGVvZiBkYXRhLmltYWdlID09PSBcInN0cmluZ1wiID8gZGF0YS5pbWFnZSA6IFwiXCIsXHJcbiAgICAgIGNyZWF0ZWRBdDogZmlyZWJhc2UuZmlyZXN0b3JlLkZpZWxkVmFsdWUuc2VydmVyVGltZXN0YW1wKCksXHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBsb2NJZCA9IHJlcy5pZDtcclxuICAgICAgaWYgKHR5cGVvZiBkYXRhLmltYWdlID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgY29uc3QgaW1hZ2VOYW1lID0gYCR7bG9jSWR9XyR7ZGF0YS5uYW1lXHJcbiAgICAgICAgICAudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgICAgLnNwbGl0KFwiIFwiKVxyXG4gICAgICAgICAgLmpvaW4oXCJfXCIpfWA7XHJcbiAgICAgICAgc3RvcmFnZVxyXG4gICAgICAgICAgLnJlZihgJHthdXRoLmN1cnJlbnRVc2VyLnVpZH0vJHtpbWFnZU5hbWV9YClcclxuICAgICAgICAgIC5wdXQoZGF0YS5pbWFnZSlcclxuICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHN0b3JhZ2VcclxuICAgICAgICAgICAgICAucmVmKGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gICAgICAgICAgICAgIC5jaGlsZChpbWFnZU5hbWUpXHJcbiAgICAgICAgICAgICAgLmdldERvd25sb2FkVVJMKCk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4oKHVybCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gZGIuY29sbGVjdGlvbihcImxvY2F0aW9uc1wiKS5kb2MobG9jSWQpLnVwZGF0ZSh7IGltYWdlOiB1cmwgfSk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgdHlwZTogdHlwZXMuQUREX0xPQ0FUSU9OLFxyXG4gICAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiTG9jYXRpb24gYWRkZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICAgICAgICBsb2NJZDogcmVzLmlkLFxyXG4gICAgICAgICAgICAgICAgbG9hZGluZ0xvYzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiB0eXBlcy5BRERfTE9DQVRJT04sXHJcbiAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiTG9jYXRpb24gYWRkZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICAgIGxvY0lkOiByZXMuaWQsXHJcbiAgICAgICAgICAgIGxvYWRpbmdMb2M6IGZhbHNlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIG1lc3NhZ2UuZXJyb3IoZXJyLm1lc3NhZ2UpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZWRpdExvY2F0aW9uID0gKGRhdGEpID0+IChkaXNwYXRjaCkgPT4ge307XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0TG9jYXRpb24gPSAoaWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJsb2NhdGlvbnNcIilcclxuICAgIC5kb2MoaWQpXHJcbiAgICAuZ2V0KClcclxuICAgIC50aGVuKChkb2MpID0+IHtcclxuICAgICAgaWYgKGRvYy5leGlzdHMpIHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiB0eXBlcy5HRVRfTE9DQVRJT04sXHJcbiAgICAgICAgICBwYXlsb2FkOiB7IC4uLmRvYy5kYXRhKCksIGlkOiBkb2MuaWQgfSxcclxuICAgICAgICAgIGxvY2F0aW9uRXhpc3RzOiB0cnVlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IHR5cGVzLkdFVF9MT0NBVElPTixcclxuICAgICAgICAgIGxvY2F0aW9uRXhpc3RzOiBmYWxzZSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlTG9jYXRpb24gPSAoaWQsIG5hbWUpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRpc3BhdGNoKHsgdHlwZTogdHlwZXMuREVMRVRFX0NIQVBURVIsIHBheWxvYWQ6IHsgbG9hZGluZzogdHJ1ZSB9IH0pO1xyXG4gIGNvbnN0IGJhdGNoID0gZGIuYmF0Y2goKTtcclxuICBjb25zdCBpbWFnZU5hbWUgPSBgJHtpZH1fJHtuYW1lLnRvTG93ZXJDYXNlKCkuc3BsaXQoXCIgXCIpLmpvaW4oXCJfXCIpfWA7XHJcblxyXG4gIGJhdGNoLmRlbGV0ZShkYi5jb2xsZWN0aW9uKFwibG9jYXRpb25zXCIpLmRvYyhpZCkpO1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJjaGFwdGVyc1wiKVxyXG4gICAgLndoZXJlKFwibG9jYXRpb25zXCIsIFwiYXJyYXktY29udGFpbnNcIiwgaWQpXHJcbiAgICAuZ2V0KClcclxuICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgcmVzLmZvckVhY2goKGNoYXApID0+XHJcbiAgICAgICAgYmF0Y2gudXBkYXRlKGRiLmNvbGxlY3Rpb24oXCJjaGFwdGVyc1wiKS5kb2MoY2hhcC5pZCksIHtcclxuICAgICAgICAgIGxvY2F0aW9uczogY2hhcC5kYXRhKCkubG9jYXRpb25zLmZpbHRlcigoYykgPT4gYyAhPT0gaWQpLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBzdG9yYWdlXHJcbiAgICAgICAgLnJlZihgJHthdXRoLmN1cnJlbnRVc2VyLnVpZH0vJHtpbWFnZU5hbWV9YClcclxuICAgICAgICAuZGVsZXRlKClcclxuICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICBiYXRjaC5jb21taXQoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgIHR5cGU6IHR5cGVzLkRFTEVURV9DSEFQVEVSLFxyXG4gICAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJMb2NhdGlvbiBkZWxldGVkIHN1Y2Nlc3NmdWxseVwiLFxyXG4gICAgICAgICAgICAgICAgZGVsZXRlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICBiYXRjaC5jb21taXQoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgIHR5cGU6IHR5cGVzLkRFTEVURV9DSEFQVEVSLFxyXG4gICAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJMb2NhdGlvbiBkZWxldGVkIHN1Y2Nlc3NmdWxseVwiLFxyXG4gICAgICAgICAgICAgICAgZGVsZXRlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyTG9jYXRpb25zID0gKGlkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBjb25zdCB1c2VySWQgPSBpZCA/IGlkIDogYXV0aC5jdXJyZW50VXNlci51aWQ7XHJcbiAgZGIuY29sbGVjdGlvbihcImxvY2F0aW9uc1wiKVxyXG4gICAgLndoZXJlKFwiYXV0aG9ySWRcIiwgXCI9PVwiLCB1c2VySWQpXHJcbiAgICAuZ2V0KClcclxuICAgIC50aGVuKChkb2NzKSA9PiB7XHJcbiAgICAgIGxldCBsb2NhdGlvbnMgPSBbXTtcclxuICAgICAgZG9jcy5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgICAgICBsb2NhdGlvbnMgPSBbLi4ubG9jYXRpb25zLCB7IGlkOiBkb2MuaWQsIC4uLmRvYy5kYXRhKCkgfV07XHJcbiAgICAgIH0pO1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogdHlwZXMuR0VUX1VTRVJfTE9DQVRJT05TLFxyXG4gICAgICAgIHBheWxvYWQ6IGxvY2F0aW9ucyxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdG9yeUxvY2F0aW9ucyA9IChzdG9yeUlkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkYi5jb2xsZWN0aW9uKFwibG9jYXRpb25zXCIpXHJcbiAgICAud2hlcmUoXCJzdG9yeUlkXCIsIFwiPT1cIiwgc3RvcnlJZClcclxuICAgIC5nZXQoKVxyXG4gICAgLnRoZW4oKGRvY3MpID0+IHtcclxuICAgICAgY29uc3QgbG9jYXRpb25zID0gZG9jcy5kb2NzLm1hcCgoZG9jKSA9PiAoeyAuLi5kb2MuZGF0YSgpLCBpZDogZG9jLmlkIH0pKTtcclxuICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IHR5cGVzLkdFVF9TVE9SWV9MT0NBVElPTlMsXHJcbiAgICAgICAgcGF5bG9hZDogbG9jYXRpb25zLFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuLy8gQ09NTUVOVFNcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDb21tZW50cyA9IChpZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGIuY29sbGVjdGlvbihcImNvbW1lbnRzXCIpXHJcbiAgICAud2hlcmUoXCJjaGFwdGVySWRcIiwgXCI9PVwiLCBpZClcclxuICAgIC5vcmRlckJ5KFwiY3JlYXRlZEF0XCIsIFwiZGVzY1wiKVxyXG4gICAgLm9uU25hcHNob3QoKHNuYXApID0+IHtcclxuICAgICAgbGV0IGNvbW1lbnRzID0gc25hcC5kb2NzLm1hcCgoY29tbWVudCkgPT4gKHtcclxuICAgICAgICAuLi5jb21tZW50LmRhdGEoKSxcclxuICAgICAgICBpZDogY29tbWVudC5pZCxcclxuICAgICAgfSkpO1xyXG4gICAgICBsZXQgcXVlcmllcyA9IFtdO1xyXG4gICAgICBjb21tZW50cy5mb3JFYWNoKChjb21tKSA9PiB7XHJcbiAgICAgICAgcXVlcmllcy5wdXNoKGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKS5kb2MoY29tbS51c2VySWQpLmdldCgpKTtcclxuICAgICAgfSk7XHJcbiAgICAgIFByb21pc2UuYWxsKHF1ZXJpZXMpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGNvbW1lbnRzID0gY29tbWVudHMubWFwKChjb21tKSA9PiAoe1xyXG4gICAgICAgICAgLi4uY29tbSxcclxuICAgICAgICAgIC8vdXNlckltYWdlOiByZXMuZmluZCgoZCkgPT4gZC5pZCA9PT0gY29tbS51c2VySWQpLmRhdGEoKS5pbWFnZSxcclxuICAgICAgICB9KSk7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogdHlwZXMuR0VUX0NPTU1FTlRTLFxyXG4gICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICBsb2FkaW5nQ29tbWVudHM6IGZhbHNlLFxyXG4gICAgICAgICAgICBjb21tZW50cyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc3VibWl0Q29tbWVudCA9IChpbmZvKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBpZiAoIWF1dGguY3VycmVudFVzZXIuZW1haWxWZXJpZmllZClcclxuICAgIHJldHVybiBtZXNzYWdlLmVycm9yKFwiWW91IG5lZWQgdG8gdmVyaWZ5IHlvdXIgZW1haWwgZmlyc3RcIik7XHJcbiAgaWYgKCFpbmZvLmNvbnRlbnQpIHJldHVybiBtZXNzYWdlLmVycm9yKFwiQ29udGVudCBtdXN0IG5vdCBiZSBlbXB0eVwiKTtcclxuXHJcbiAgY29uc3QgYmF0Y2ggPSBkYi5iYXRjaCgpO1xyXG4gIGNvbnN0IHN0b3J5ID0gZGIuY29sbGVjdGlvbihcInN0b3JpZXNcIikuZG9jKGluZm8uc3RvcnlJZCkuZ2V0KCk7XHJcbiAgY29uc3QgY2hhcHRlciA9IGRiLmNvbGxlY3Rpb24oXCJjaGFwdGVyc1wiKS5kb2MoaW5mby5jaGFwdGVySWQpLmdldCgpO1xyXG5cclxuICBQcm9taXNlLmFsbChbc3RvcnksIGNoYXB0ZXJdKVxyXG4gICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBiYXRjaC51cGRhdGUoZGIuY29sbGVjdGlvbihcInN0b3JpZXNcIikuZG9jKGluZm8uc3RvcnlJZCksIHtcclxuICAgICAgICBjb21tZW50c0NvdW50OiByZXNbMF0uZGF0YSgpLmNvbW1lbnRzQ291bnQgKyAxLFxyXG4gICAgICB9KTtcclxuICAgICAgYmF0Y2gudXBkYXRlKGRiLmNvbGxlY3Rpb24oXCJjaGFwdGVyc1wiKS5kb2MoaW5mby5jaGFwdGVySWQpLCB7XHJcbiAgICAgICAgY29tbWVudHNDb3VudDogcmVzWzFdLmRhdGEoKS5jb21tZW50c0NvdW50ICsgMSxcclxuICAgICAgfSk7XHJcbiAgICAgIGJhdGNoLmNvbW1pdCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIGRiLmNvbGxlY3Rpb24oXCJjb21tZW50c1wiKVxyXG4gICAgICAgICAgLmFkZCh7XHJcbiAgICAgICAgICAgIC4uLmluZm8sXHJcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogZmlyZWJhc2UuZmlyZXN0b3JlLkZpZWxkVmFsdWUuc2VydmVyVGltZXN0YW1wKCksXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoYXV0aC5jdXJyZW50VXNlci51aWQgIT09IGluZm8uYXV0aG9ySWQpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gZGIuY29sbGVjdGlvbihcIm5vdGlmaWNhdGlvbnNcIikuYWRkKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiY29tbWVudFwiLFxyXG4gICAgICAgICAgICAgICAgcmVhZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICByZWNpcGllbnQ6IGluZm8uYXV0aG9ySWQsXHJcbiAgICAgICAgICAgICAgICBzZW5kZXI6IGF1dGguY3VycmVudFVzZXIudWlkLFxyXG4gICAgICAgICAgICAgICAgY2hhcHRlcklkOiBpbmZvLmNoYXB0ZXJJZCxcclxuICAgICAgICAgICAgICAgIHN0b3J5SWQ6IGluZm8uc3RvcnlJZCxcclxuICAgICAgICAgICAgICAgIHVzZXJEZWxldGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHN1c3BlbmRlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVkQXQ6IGZpcmViYXNlLmZpcmVzdG9yZS5GaWVsZFZhbHVlLnNlcnZlclRpbWVzdGFtcCgpLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogYCR7aW5mby51c2VybmFtZX0gcG9zdGVkIGEgY29tbWVudGVkIG9uIHlvdXIgc3RvcnkgJHtpbmZvLnRpdGxlfWAsXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbigoKSA9PiBtZXNzYWdlLnN1Y2Nlc3MoXCJDb21tZW50IHBvc3RlZCBzdWNjZXNzZnVsbHlcIikpO1xyXG4gICAgICB9KTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4gbWVzc2FnZS5lcnJvcihlcnIubWVzc2FnZSkpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlbGV0ZUNvbW1lbnQgPSAoaWQsIGNoYXBpZCwgc3RvcnlJZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgY29uc3QgYmF0Y2ggPSBkYi5iYXRjaCgpO1xyXG4gIGNvbnN0IHN0b3J5ID0gZGIuY29sbGVjdGlvbihcInN0b3JpZXNcIikuZG9jKHN0b3J5SWQpLmdldCgpO1xyXG4gIGNvbnN0IGNoYXB0ZXIgPSBkYi5jb2xsZWN0aW9uKFwiY2hhcHRlcnNcIikuZG9jKGNoYXBpZCkuZ2V0KCk7XHJcblxyXG4gIFByb21pc2UuYWxsKFtzdG9yeSwgY2hhcHRlcl0pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgYmF0Y2gudXBkYXRlKGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpLmRvYyhzdG9yeUlkKSwge1xyXG4gICAgICBjb21tZW50c0NvdW50OiByZXNbMF0uZGF0YSgpLmNvbW1lbnRzQ291bnQgLSAxLFxyXG4gICAgfSk7XHJcbiAgICBiYXRjaC51cGRhdGUoZGIuY29sbGVjdGlvbihcImNoYXB0ZXJzXCIpLmRvYyhjaGFwaWQpLCB7XHJcbiAgICAgIGNvbW1lbnRzQ291bnQ6IHJlc1sxXS5kYXRhKCkuY29tbWVudHNDb3VudCAtIDEsXHJcbiAgICB9KTtcclxuICAgIGJhdGNoLmNvbW1pdCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICBkYi5jb2xsZWN0aW9uKFwiY29tbWVudHNcIikuZG9jKGlkKS5kZWxldGUoKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuLy8gQVJDSElWRVNcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdG9yaWVzRnJvbVNlYXJjaCA9IChzZWFyY2gpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGxldCByZXN1bHQgPSBbXTtcclxuICBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKVxyXG4gICAgLndoZXJlKFwicHVibGljXCIsIFwiPT1cIiwgdHJ1ZSlcclxuICAgIC5nZXQoKVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgZGF0YS5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvYy5kYXRhKCkudGl0bGUudG9Mb3dlckNhc2UoKS5zcGxpdChcIiBcIik7XHJcbiAgICAgICAgY29uc3QgYXV0aG9yTmFtZSA9IGRvYy5kYXRhKCkuYXV0aG9yTmFtZS50b0xvd2VyQ2FzZSgpLnNwbGl0KFwiIFwiKTtcclxuICAgICAgICBjb25zdCBzZWFyY2hUZXJtID0gc2VhcmNoLnNwbGl0KFwiLVwiKTtcclxuICAgICAgICBjb25zdCBpc0luY2x1ZGVkID0gc2VhcmNoVGVybS5ldmVyeSgod29yZCkgPT4gdGl0bGUuaW5jbHVkZXMod29yZCkpO1xyXG4gICAgICAgIGNvbnN0IG9ySW5jbHVkZWQgPSBzZWFyY2hUZXJtLnNvbWUoXHJcbiAgICAgICAgICAod29yZCkgPT4gZG9jLmRhdGEoKS50aXRsZS50b0xvd2VyQ2FzZSgpLmluZGV4T2Yod29yZCkgIT09IC0xXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBhdXRob3JJbmNsdWRlZCA9IHNlYXJjaFRlcm0uZXZlcnkoKHdvcmQpID0+XHJcbiAgICAgICAgICBhdXRob3JOYW1lLmluY2x1ZGVzKHdvcmQpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBvckF1dGhvckluY2x1ZGVkID0gc2VhcmNoVGVybS5zb21lKFxyXG4gICAgICAgICAgKHdvcmQpID0+IGRvYy5kYXRhKCkuYXV0aG9yTmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2Yod29yZCkgIT09IC0xXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpZiAoaXNJbmNsdWRlZCB8fCBvckluY2x1ZGVkIHx8IGF1dGhvckluY2x1ZGVkIHx8IG9yQXV0aG9ySW5jbHVkZWQpIHtcclxuICAgICAgICAgIHJlc3VsdC5wdXNoKHsgLi4uZG9jLmRhdGEoKSwgaWQ6IGRvYy5pZCB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfSlcclxuICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IHR5cGVzLkdFVF9TVE9SSUVTX0ZST01fU0VBUkNILFxyXG4gICAgICAgIHBheWxvYWQ6IHJlc3VsdCxcclxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuIiwiaW1wb3J0IHsgZGIsIGF1dGgsIHN0b3JhZ2UgfSBmcm9tIFwiLi4vZmJDb25maWdcIjtcclxuaW1wb3J0IHsgdHlwZXMgfSBmcm9tIFwiLi4vLi4vdXRpbHMvY29uc3RhbnRzXCI7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcbmltcG9ydCB7IG1lc3NhZ2UgfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ19pbiA9IChlbWFpbCwgcGFzc3dvcmQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGVtYWlsLCBwYXNzd29yZCk7XHJcbiAgYXV0aC5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFByb2ZpbGUgPSAoaWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKVxyXG4gICAgLmRvYyhpZCA/IGlkIDogYXV0aC5jdXJyZW50VXNlci51aWQpXHJcbiAgICAub25TbmFwc2hvdCgoZG9jKSA9PiB7XHJcbiAgICAgIHJldHVybiBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogdHlwZXMuR0VUX1BST0ZJTEUsXHJcbiAgICAgICAgcGF5bG9hZDogeyBpZDogZG9jLmlkLCAuLi5kb2MuZGF0YSgpIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0RmF2b3JpdGVBdXRob3JzID0gKGlkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBsZXQgYWRkZWRPbjtcclxuICBjb25zdCB1c2VySWQgPSBpZCA/IGlkIDogYXV0aC5jdXJyZW50VXNlci51aWQ7XHJcbiAgZGIuY29sbGVjdGlvbihcInVzZXJzTGlrZXNcIilcclxuICAgIC53aGVyZShcInNlbmRlcklkXCIsIFwiPT1cIiwgdXNlcklkKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigoZG9jcykgPT4ge1xyXG4gICAgICBsZXQgZmF2QXJyID0gW107XHJcbiAgICAgIGRvY3MuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICAgICAgYWRkZWRPbiA9IGRvYy5kYXRhKCkuY3JlYXRlZEF0O1xyXG4gICAgICAgIGZhdkFyciA9IFsuLi5mYXZBcnIsIGRvYy5kYXRhKCkucmVjaXBpZW50XTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBmYXZBcnI7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKHVzZXJzKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHVzZXJzLm1hcCgodXNlcikgPT5cclxuICAgICAgICBkYi5jb2xsZWN0aW9uKFwidXNlcnNcIikuZG9jKHVzZXIpLmdldCgpXHJcbiAgICAgICk7XHJcbiAgICAgIFByb21pc2UuYWxsKHJlc3VsdCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgbGV0IGZhdlVzZXJzID0gW107XHJcbiAgICAgICAgcmVzLmZvckVhY2goXHJcbiAgICAgICAgICAoZG9jKSA9PlxyXG4gICAgICAgICAgICAoZmF2VXNlcnMgPSBbLi4uZmF2VXNlcnMsIHsgYWRkZWRPbiwgaWQ6IGRvYy5pZCwgLi4uZG9jLmRhdGEoKSB9XSlcclxuICAgICAgICApO1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IHR5cGVzLkdFVF9GQVZPUklURV9BVVRIT1JTLFxyXG4gICAgICAgICAgcGF5bG9hZDogZmF2VXNlcnMsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Rm9sbG93ZXJzID0gKGlkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBsZXQgYWRkZWRPbjtcclxuICBjb25zdCB1c2VySWQgPSBpZCA/IGlkIDogYXV0aC5jdXJyZW50VXNlci51aWQ7XHJcbiAgZGIuY29sbGVjdGlvbihcInVzZXJzTGlrZXNcIilcclxuICAgIC53aGVyZShcInJlY2lwaWVudFwiLCBcIj09XCIsIHVzZXJJZClcclxuICAgIC5nZXQoKVxyXG4gICAgLnRoZW4oKGRvY3MpID0+IHtcclxuICAgICAgbGV0IGZhdkFyciA9IFtdO1xyXG4gICAgICBkb2NzLmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgICAgIGFkZGVkT24gPSBkb2MuZGF0YSgpLmNyZWF0ZWRBdDtcclxuICAgICAgICBmYXZBcnIgPSBbLi4uZmF2QXJyLCBkb2MuZGF0YSgpLnNlbmRlcklkXTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBmYXZBcnI7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKHVzZXJzKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHVzZXJzLm1hcCgodXNlcikgPT5cclxuICAgICAgICBkYi5jb2xsZWN0aW9uKFwidXNlcnNcIikuZG9jKHVzZXIpLmdldCgpXHJcbiAgICAgICk7XHJcbiAgICAgIFByb21pc2UuYWxsKHJlc3VsdCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgbGV0IGZhdlVzZXJzID0gW107XHJcbiAgICAgICAgcmVzLmZvckVhY2goXHJcbiAgICAgICAgICAoZG9jKSA9PlxyXG4gICAgICAgICAgICAoZmF2VXNlcnMgPSBbLi4uZmF2VXNlcnMsIHsgYWRkZWRPbiwgaWQ6IGRvYy5pZCwgLi4uZG9jLmRhdGEoKSB9XSlcclxuICAgICAgICApO1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IHR5cGVzLkdFVF9GT0xMT1dFUlMsXHJcbiAgICAgICAgICBwYXlsb2FkOiBmYXZVc2VycyxcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRJc0ZvbGxvd2luZyA9ICh1c2VySWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGlmIChhdXRoLmN1cnJlbnRVc2VyKSB7XHJcbiAgICBkYi5jb2xsZWN0aW9uKFwidXNlcnNMaWtlc1wiKVxyXG4gICAgICAud2hlcmUoXCJyZWNpcGllbnRcIiwgXCI9PVwiLCB1c2VySWQpXHJcbiAgICAgIC53aGVyZShcInNlbmRlcklkXCIsIFwiPT1cIiwgYXV0aC5jdXJyZW50VXNlci51aWQpXHJcbiAgICAgIC5vblNuYXBzaG90KChzbmFwc2hvdCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFuc3dlciA9IHNuYXBzaG90LmRvY3MubGVuZ3RoID4gMCA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICByZXR1cm4gZGlzcGF0Y2goeyB0eXBlOiB0eXBlcy5JU19GT0xMT1dJTkcsIHBheWxvYWQ6IGFuc3dlciB9KTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZvbGxvd1VzZXIgPSAoaWQsIGlzRmF2b3JpdGUsIG5ld0ZvbGxvd2VyKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBpZiAoaXNGYXZvcml0ZSkgcmV0dXJuIG1lc3NhZ2Uud2FybmluZyhcIllvdSBhcmUgYWxyZWFkeSBmb2xsb3dpbmcgdGhpcyB1c2VyXCIpO1xyXG4gIGlmICghYXV0aC5jdXJyZW50VXNlcilcclxuICAgIHJldHVybiBtZXNzYWdlLmVycm9yKFwiWW91IG5lZWQgdG8gYmUgbG9nZ2VkIGluIHRvIGZvbGxvdyB1c2Vyc1wiKTtcclxuICBpZiAoIWF1dGguY3VycmVudFVzZXIuZW1haWxWZXJpZmllZClcclxuICAgIHJldHVybiBtZXNzYWdlLmVycm9yKFwiWW91IG5lZWQgdG8gdmVyaWZ5IHlvdXIgZW1haWwgZmlyc3RcIik7XHJcblxyXG4gIGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc0xpa2VzXCIpXHJcbiAgICAuYWRkKHtcclxuICAgICAgc2VuZGVyOiBuZXdGb2xsb3dlci51c2VybmFtZSxcclxuICAgICAgc2VuZGVySWQ6IG5ld0ZvbGxvd2VyLnVpZCxcclxuICAgICAgcmVjaXBpZW50OiBpZCxcclxuICAgICAgY3JlYXRlZEF0OiBmaXJlYmFzZS5maXJlc3RvcmUuRmllbGRWYWx1ZS5zZXJ2ZXJUaW1lc3RhbXAoKSxcclxuICAgIH0pXHJcbiAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgIHJldHVybiBkYlxyXG4gICAgICAgIC5jb2xsZWN0aW9uKFwibm90aWZpY2F0aW9uc1wiKVxyXG4gICAgICAgIC5kb2MoYCR7YXV0aC5jdXJyZW50VXNlci51aWR9JHtpZH1gKVxyXG4gICAgICAgIC5zZXQoe1xyXG4gICAgICAgICAgY3JlYXRlZEF0OiBmaXJlYmFzZS5maXJlc3RvcmUuRmllbGRWYWx1ZS5zZXJ2ZXJUaW1lc3RhbXAoKSxcclxuICAgICAgICAgIHJlY2lwaWVudDogaWQsXHJcbiAgICAgICAgICBzZW5kZXI6IG5ld0ZvbGxvd2VyLnVpZCxcclxuICAgICAgICAgIHJlYWQ6IGZhbHNlLFxyXG4gICAgICAgICAgdHlwZTogXCJmb2xsb3dcIixcclxuICAgICAgICAgIG1lc3NhZ2U6IGAke25ld0ZvbGxvd2VyLnVzZXJuYW1lfSBzdGFydGVkIGZvbGxvd2luZyB5b3VgLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSlcclxuICAgIC50aGVuKCgpID0+IG1lc3NhZ2Uuc3VjY2VzcyhcIllvdSBhcmUgbm93IGZvbGxvd2luZyB0aGlzIHVzZXJcIikpXHJcbiAgICAuY2F0Y2goKGVycikgPT4gbWVzc2FnZS5lcnJvcihcIlRoZXJlIGhhcyBiZWVuIGEgcHJvYmxlbVwiKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdW5mb2xsb3dVc2VyID0gKGlkLCBpc0Zhdm9yaXRlKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBpZiAoIWlzRmF2b3JpdGUpXHJcbiAgICByZXR1cm4gbWVzc2FnZS53YXJuaW5nKFwiWW91IGFyZSBub3QgZm9sbG93aW5nIHRoaXMgdXNlciB5ZXRcIik7XHJcblxyXG4gIGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc0xpa2VzXCIpXHJcbiAgICAud2hlcmUoXCJyZWNpcGllbnRcIiwgXCI9PVwiLCBpZClcclxuICAgIC53aGVyZShcInNlbmRlcklkXCIsIFwiPT1cIiwgYXV0aC5jdXJyZW50VXNlci51aWQpXHJcbiAgICAuZ2V0KClcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiBkYi5jb2xsZWN0aW9uKFwidXNlcnNMaWtlc1wiKS5kb2MoZGF0YS5kb2NzWzBdLmlkKS5kZWxldGUoKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoKSA9PiBtZXNzYWdlLnN1Y2Nlc3MoXCJVc2VyIHN1Y2Nlc3NmdWxseSB1bmZvbGxvd2VkXCIpKVxyXG4gICAgLmNhdGNoKChlcnIpID0+IG1lc3NhZ2UuZXJyb3IoXCJUaGVyZSBoYXMgYmVlbiBhIHByb2JsZW1cIikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNoYW5nZVByb2ZpbGUgPSAoZGF0YSwgc2V0T3BlbikgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgY29uc3QgeyBuZXdQYXNzd29yZCwgYWN0dWFsUGFzc3dvcmQsIC4uLm5ld0luZm8gfSA9IGRhdGE7XHJcbiAgY29uc3QgaW1hZ2VOYW1lID0gYCR7YXV0aC5jdXJyZW50VXNlci51aWR9XyR7bmV3SW5mby51c2VybmFtZX1gO1xyXG5cclxuICBpZiAobmV3UGFzc3dvcmQpIHtcclxuICAgIGF1dGguY3VycmVudFVzZXJcclxuICAgICAgLnJlYXV0aGVudGljYXRlV2l0aENyZWRlbnRpYWwoXHJcbiAgICAgICAgZmlyZWJhc2UuYXV0aC5FbWFpbEF1dGhQcm92aWRlci5jcmVkZW50aWFsKFxyXG4gICAgICAgICAgYXV0aC5jdXJyZW50VXNlci5lbWFpbCxcclxuICAgICAgICAgIGFjdHVhbFBhc3N3b3JkXHJcbiAgICAgICAgKVxyXG4gICAgICApXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICByZXR1cm4gYXV0aC5jdXJyZW50VXNlci51cGRhdGVQYXNzd29yZChuZXdQYXNzd29yZCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKGFzeW5jICgpID0+IHtcclxuICAgICAgICBpZiAodHlwZW9mIG5ld0luZm8uaW1hZ2UgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgIHN0b3JhZ2VcclxuICAgICAgICAgICAgLnJlZihgJHthdXRoLmN1cnJlbnRVc2VyLnVpZH0vJHtpbWFnZU5hbWV9YClcclxuICAgICAgICAgICAgLnB1dChuZXdJbmZvLmltYWdlKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHN0b3JhZ2VcclxuICAgICAgICAgICAgICAgIC5yZWYoYCR7YXV0aC5jdXJyZW50VXNlci51aWR9LyR7aW1hZ2VOYW1lfWApXHJcbiAgICAgICAgICAgICAgICAuZ2V0RG93bmxvYWRVUkwoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oYXN5bmMgKHVybCkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiBkYlxyXG4gICAgICAgICAgICAgICAgLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKVxyXG4gICAgICAgICAgICAgICAgLmRvYyhhdXRoLmN1cnJlbnRVc2VyLnVpZClcclxuICAgICAgICAgICAgICAgIC51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAuLi5uZXdJbmZvLFxyXG4gICAgICAgICAgICAgICAgICBpbWFnZTogdXJsLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhcIlByb2ZpbGUgdXBkYXRlZCBzdWNjZXNzZnVsbHlcIik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiBkYlxyXG4gICAgICAgICAgICAuY29sbGVjdGlvbihcInVzZXJzXCIpXHJcbiAgICAgICAgICAgIC5kb2MoYXV0aC5jdXJyZW50VXNlci51aWQpXHJcbiAgICAgICAgICAgIC51cGRhdGUoe1xyXG4gICAgICAgICAgICAgIC4uLm5ld0luZm8sXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICBzZXRPcGVuKGZhbHNlKTtcclxuICAgICAgICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoXCJQcm9maWxlIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5XCIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiBtZXNzYWdlLmVycm9yKGVyci5tZXNzYWdlKSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGlmICh0eXBlb2YgbmV3SW5mby5pbWFnZSA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICBzdG9yYWdlXHJcbiAgICAgICAgLnJlZihgJHthdXRoLmN1cnJlbnRVc2VyLnVpZH0vJHtpbWFnZU5hbWV9YClcclxuICAgICAgICAucHV0KG5ld0luZm8uaW1hZ2UpXHJcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHN0b3JhZ2VcclxuICAgICAgICAgICAgLnJlZihgJHthdXRoLmN1cnJlbnRVc2VyLnVpZH0vJHtpbWFnZU5hbWV9YClcclxuICAgICAgICAgICAgLmdldERvd25sb2FkVVJMKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihhc3luYyAodXJsKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gZGJcclxuICAgICAgICAgICAgLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKVxyXG4gICAgICAgICAgICAuZG9jKGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gICAgICAgICAgICAudXBkYXRlKHtcclxuICAgICAgICAgICAgICAuLi5uZXdJbmZvLFxyXG4gICAgICAgICAgICAgIGltYWdlOiB1cmwsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICBzZXRPcGVuKGZhbHNlKTtcclxuICAgICAgICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoXCJQcm9maWxlIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5XCIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKVxyXG4gICAgICAgIC5kb2MoYXV0aC5jdXJyZW50VXNlci51aWQpXHJcbiAgICAgICAgLnVwZGF0ZSh7XHJcbiAgICAgICAgICAuLi5uZXdJbmZvLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoXCJQcm9maWxlIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5XCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRVc2Vyc0Zyb21TZWFyY2ggPSAoc2VhcmNoKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBsZXQgcmVzdWx0ID0gW107XHJcbiAgZGIuY29sbGVjdGlvbihcInVzZXJzXCIpXHJcbiAgICAuZ2V0KClcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIGRhdGEuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdXNlcm5hbWUgPSBkb2MuZGF0YSgpLnVzZXJuYW1lLnRvTG93ZXJDYXNlKCkuc3BsaXQoXCIgXCIpO1xyXG4gICAgICAgIGNvbnN0IHNlYXJjaFRlcm0gPSBzZWFyY2guc3BsaXQoXCItXCIpO1xyXG4gICAgICAgIGNvbnN0IGlzSW5jbHVkZWQgPSBzZWFyY2hUZXJtLmV2ZXJ5KCh3b3JkKSA9PiB1c2VybmFtZS5pbmNsdWRlcyh3b3JkKSk7XHJcbiAgICAgICAgY29uc3Qgb3JJbmNsdWRlZCA9IHNlYXJjaFRlcm0uc29tZShcclxuICAgICAgICAgICh3b3JkKSA9PiBkb2MuZGF0YSgpLnVzZXJuYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih3b3JkKSAhPT0gLTFcclxuICAgICAgICApO1xyXG4gICAgICAgIGlmIChpc0luY2x1ZGVkIHx8IG9ySW5jbHVkZWQpIHtcclxuICAgICAgICAgIHJlc3VsdC5wdXNoKHsgLi4uZG9jLmRhdGEoKSwgaWQ6IGRvYy5pZCB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IHR5cGVzLkdFVF9VU0VSU19GUk9NX1NFQVJDSCxcclxuICAgICAgICBwYXlsb2FkOiByZXN1bHQsXHJcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcbiIsImltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcbmltcG9ydCBcImZpcmViYXNlL2F1dGhcIjtcclxuaW1wb3J0IFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XHJcbmltcG9ydCBcImZpcmViYXNlL3N0b3JhZ2VcIjtcclxuXHJcbmNvbnN0IHByb2RDb25maWcgPSB7XHJcbiAgYXBpS2V5OiBwcm9jZXNzLmVudi5GSVJFQkFTRV9BUElfS0VZLFxyXG4gIGF1dGhEb21haW46IHByb2Nlc3MuZW52LkZJUkVCQVNFX0FVVEhfRE9NQUlOLFxyXG4gIGRhdGFiYXNlVVJMOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9EQVRBQkFTRV9VUkwsXHJcbiAgcHJvamVjdElkOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9QUk9KRUNUX0lELFxyXG4gIHN0b3JhZ2VCdWNrZXQ6IHByb2Nlc3MuZW52LkZJUkVCQVNFX1NUT1JBR0VfQlVDS0VULFxyXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9NRVNTQUdJTkdfU0VOREVSX0lELFxyXG4gIGFwcElkOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9BUFBfSUQsXHJcbn07XHJcblxyXG5jb25zdCBkZXZDb25maWcgPSB7XHJcbiAgYXBpS2V5OiBwcm9jZXNzLmVudi5GSVJFQkFTRV9BUElfS0VZLFxyXG4gIGF1dGhEb21haW46IHByb2Nlc3MuZW52LkZJUkVCQVNFX0FVVEhfRE9NQUlOLFxyXG4gIGRhdGFiYXNlVVJMOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9EQVRBQkFTRV9VUkwsXHJcbiAgcHJvamVjdElkOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9QUk9KRUNUX0lELFxyXG4gIHN0b3JhZ2VCdWNrZXQ6IHByb2Nlc3MuZW52LkZJUkVCQVNFX1NUT1JBR0VfQlVDS0VULFxyXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9NRVNTQUdJTkdfU0VOREVSX0lELFxyXG4gIGFwcElkOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9BUFBfSUQsXHJcbn07XHJcblxyXG5jb25zdCBjb25maWcgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBwcm9kQ29uZmlnIDogZGV2Q29uZmlnO1xyXG5cclxuaWYgKCFmaXJlYmFzZS5hcHBzLmxlbmd0aCkge1xyXG4gIGZpcmViYXNlLmluaXRpYWxpemVBcHAoY29uZmlnKTtcclxufVxyXG5cclxuY29uc3QgZGIgPSBmaXJlYmFzZS5maXJlc3RvcmUoKTtcclxuY29uc3QgYXV0aCA9IGZpcmViYXNlLmF1dGgoKTtcclxuY29uc3Qgc3RvcmFnZSA9IGZpcmViYXNlLnN0b3JhZ2UoKTtcclxuXHJcbmV4cG9ydCB7IGRiLCBhdXRoLCBzdG9yYWdlIH07XHJcbmV4cG9ydCBkZWZhdWx0IGNvbmZpZztcclxuIiwiZXhwb3J0IGNvbnN0IENBVEVHT1JJRVMgPSBbXHJcbiAgeyBuYW1lOiBcIkRyYW1hXCIsIHZhbHVlOiBcImRyYW1hXCIgfSxcclxuICB7IG5hbWU6IFwiQ29tZWR5XCIsIHZhbHVlOiBcImNvbWVkeVwiIH0sXHJcbiAgeyBuYW1lOiBcIkhvcnJvclwiLCB2YWx1ZTogXCJob3Jyb3JcIiB9LFxyXG4gIHsgbmFtZTogXCJSb21hbmNlXCIsIHZhbHVlOiBcInJvbWFuY2VcIiB9LFxyXG4gIHsgbmFtZTogXCJTY2ktZmlcIiwgdmFsdWU6IFwic2NpLWZpXCIgfSxcclxuICB7IG5hbWU6IFwiRmFudGFzeVwiLCB2YWx1ZTogXCJmYW50YXN5XCIgfSxcclxuICB7IG5hbWU6IFwiSHVtb3JcIiwgdmFsdWU6IFwiaHVtb3JcIiB9LFxyXG4gIHsgbmFtZTogXCJBY3Rpb25cIiwgdmFsdWU6IFwiYWN0aW9uXCIgfSxcclxuICB7IG5hbWU6IFwiVGhyaWxsZXJcIiwgdmFsdWU6IFwidGhyaWxsZXJcIiB9LFxyXG4gIHsgbmFtZTogXCJTdXBlcm5hdHVyYWxcIiwgdmFsdWU6IFwic3VwZXJuYXR1cmFsXCIgfSxcclxuICB7IG5hbWU6IFwiQWR2ZW50dXJlXCIsIHZhbHVlOiBcImFkdmVudHVyZVwiIH0sXHJcbiAgeyBuYW1lOiBcIk15c3RlcnlcIiwgdmFsdWU6IFwibXlzdGVyeVwiIH0sXHJcbiAgeyBuYW1lOiBcIldlc3Rlcm5cIiwgdmFsdWU6IFwid2VzdGVyblwiIH0sXHJcbiAgeyBuYW1lOiBcIkhpc3RvcnlcIiwgdmFsdWU6IFwiaGlzdG9yeVwiIH0sXHJcbiAgeyBuYW1lOiBcIkNyaW1lXCIsIHZhbHVlOiBcImNyaW1lXCIgfSxcclxuICB7IG5hbWU6IFwiRmFuZmljdGlvblwiLCB2YWx1ZTogXCJmYW5maWN0aW9uXCIgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBDT1BZUklHSFRTID0gW1xyXG4gIHsgbmFtZTogXCJQdWJsaWMgRG9tYWluXCIsIHZhbHVlOiBcInB1YmxpYyBkb21haW5cIiB9LFxyXG4gIHsgbmFtZTogXCJBbGwgUmlnaHRzIFJlc2VydmVkXCIsIHZhbHVlOiBcImFsbCByaWdodHMgcmVzZXJ2ZWRcIiB9LFxyXG4gIHsgbmFtZTogXCJDcmVhdGl2ZSBDb21tb25zXCIsIHZhbHVlOiBcImNyZWF0aXZlIGNvbW1vbnNcIiB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IExBTkdVQUdFUyA9IFtcclxuICB7IG5hbWU6IFwiQWZhclwiLCB2YWx1ZTogXCJhYVwiIH0sXHJcbiAgeyBuYW1lOiBcIkFia2hhemlhblwiLCB2YWx1ZTogXCJhYlwiIH0sXHJcbiAgeyBuYW1lOiBcIkF2ZXN0YW5cIiwgdmFsdWU6IFwiYWVcIiB9LFxyXG4gIHsgbmFtZTogXCJBZnJpa2FhbnNcIiwgdmFsdWU6IFwiYWZcIiB9LFxyXG4gIHsgbmFtZTogXCJBa2FuXCIsIHZhbHVlOiBcImFrXCIgfSxcclxuICB7IG5hbWU6IFwiQW1oYXJpY1wiLCB2YWx1ZTogXCJhbVwiIH0sXHJcbiAgeyBuYW1lOiBcIkFyYWdvbmVzZVwiLCB2YWx1ZTogXCJhblwiIH0sXHJcbiAgeyBuYW1lOiBcIkFyYWJpY1wiLCB2YWx1ZTogXCJhclwiIH0sXHJcbiAgeyBuYW1lOiBcIkFzc2FtZXNlXCIsIHZhbHVlOiBcImFzXCIgfSxcclxuICB7IG5hbWU6IFwiQXZhcmljXCIsIHZhbHVlOiBcImF2XCIgfSxcclxuICB7IG5hbWU6IFwiQXltYXJhXCIsIHZhbHVlOiBcImF5XCIgfSxcclxuICB7IG5hbWU6IFwiQXplcmJhaWphbmlcIiwgdmFsdWU6IFwiYXpcIiB9LFxyXG4gIHsgbmFtZTogXCJCYXNoa2lyXCIsIHZhbHVlOiBcImJhXCIgfSxcclxuICB7IG5hbWU6IFwiQmVsYXJ1c2lhblwiLCB2YWx1ZTogXCJiZVwiIH0sXHJcbiAgeyBuYW1lOiBcIkJ1bGdhcmlhblwiLCB2YWx1ZTogXCJiZ1wiIH0sXHJcbiAgeyBuYW1lOiBcIkJpaGFyaVwiLCB2YWx1ZTogXCJiaFwiIH0sXHJcbiAgeyBuYW1lOiBcIkJpc2xhbWFcIiwgdmFsdWU6IFwiYmlcIiB9LFxyXG4gIHsgbmFtZTogXCJCYW1iYXJhXCIsIHZhbHVlOiBcImJtXCIgfSxcclxuICB7IG5hbWU6IFwiQmVuZ2FsaVwiLCB2YWx1ZTogXCJiblwiIH0sXHJcbiAgeyBuYW1lOiBcIlRpYmV0YW5cIiwgdmFsdWU6IFwiYm9cIiB9LFxyXG4gIHsgbmFtZTogXCJCcmV0b25cIiwgdmFsdWU6IFwiYnJcIiB9LFxyXG4gIHsgbmFtZTogXCJCb3NuaWFuXCIsIHZhbHVlOiBcImJzXCIgfSxcclxuICB7IG5hbWU6IFwiQ2F0YWxhblwiLCB2YWx1ZTogXCJjYVwiIH0sXHJcbiAgeyBuYW1lOiBcIkNoZWNoZW5cIiwgdmFsdWU6IFwiY2VcIiB9LFxyXG4gIHsgbmFtZTogXCJDaGFtb3Jyb1wiLCB2YWx1ZTogXCJjaFwiIH0sXHJcbiAgeyBuYW1lOiBcIkNvcnNpY2FuXCIsIHZhbHVlOiBcImNvXCIgfSxcclxuICB7IG5hbWU6IFwiQ3JlZVwiLCB2YWx1ZTogXCJjclwiIH0sXHJcbiAgeyBuYW1lOiBcIkN6ZWNoXCIsIHZhbHVlOiBcImNzXCIgfSxcclxuICB7IG5hbWU6IFwiT2xkIENodXJjaCBTbGF2b25pY1wiLCB2YWx1ZTogXCJjdVwiIH0sXHJcbiAgeyBuYW1lOiBcIkNodXZhc2hcIiwgdmFsdWU6IFwiY3ZcIiB9LFxyXG4gIHsgbmFtZTogXCJXZWxzaFwiLCB2YWx1ZTogXCJjeVwiIH0sXHJcbiAgeyBuYW1lOiBcIkRhbmlzaFwiLCB2YWx1ZTogXCJkYVwiIH0sXHJcbiAgeyBuYW1lOiBcIkdlcm1hblwiLCB2YWx1ZTogXCJkZVwiIH0sXHJcbiAgeyBuYW1lOiBcIkRpdmVoaVwiLCB2YWx1ZTogXCJkdlwiIH0sXHJcbiAgeyBuYW1lOiBcIkR6b25na2hhXHRcIiwgdmFsdWU6IFwiZHpcIiB9LFxyXG4gIHsgbmFtZTogXCJFd2VcIiwgdmFsdWU6IFwiZWVcIiB9LFxyXG4gIHsgbmFtZTogXCJHcmVla1wiLCB2YWx1ZTogXCJlbFwiIH0sXHJcbiAgeyBuYW1lOiBcIkVuZ2xpc2hcIiwgdmFsdWU6IFwiZW5cIiB9LFxyXG4gIHsgbmFtZTogXCJFc3BlcmFudG9cIiwgdmFsdWU6IFwiZW9cIiB9LFxyXG4gIHsgbmFtZTogXCJTcGFuaXNoXCIsIHZhbHVlOiBcImVzXCIgfSxcclxuICB7IG5hbWU6IFwiRXN0b25pYW5cIiwgdmFsdWU6IFwiZXRcIiB9LFxyXG4gIHsgbmFtZTogXCJCYXNxdWVcIiwgdmFsdWU6IFwiZXVcIiB9LFxyXG4gIHsgbmFtZTogXCJQZXJzaWFuXCIsIHZhbHVlOiBcImZhXCIgfSxcclxuICB7IG5hbWU6IFwiRnVsYWhcIiwgdmFsdWU6IFwiZmZcIiB9LFxyXG4gIHsgbmFtZTogXCJGaW5uaXNoXCIsIHZhbHVlOiBcImZpXCIgfSxcclxuICB7IG5hbWU6IFwiRmlqaWFuXCIsIHZhbHVlOiBcImZqXCIgfSxcclxuICB7IG5hbWU6IFwiRmFyb2VzZVwiLCB2YWx1ZTogXCJmb1wiIH0sXHJcbiAgeyBuYW1lOiBcIkZyZW5jaFwiLCB2YWx1ZTogXCJmclwiIH0sXHJcbiAgeyBuYW1lOiBcIldlc3Rlcm4gRnJpc2lhblwiLCB2YWx1ZTogXCJmeVwiIH0sXHJcbiAgeyBuYW1lOiBcIklyaXNoXCIsIHZhbHVlOiBcImdhXCIgfSxcclxuICB7IG5hbWU6IFwiU2NvdHRpc2ggR2FlbGljXCIsIHZhbHVlOiBcImdkXCIgfSxcclxuICB7IG5hbWU6IFwiR2FsaWNpYW5cIiwgdmFsdWU6IFwiZ2xcIiB9LFxyXG4gIHsgbmFtZTogXCJHdWFyYW5pXCIsIHZhbHVlOiBcImduXCIgfSxcclxuICB7IG5hbWU6IFwiR3VqYXJhdGlcIiwgdmFsdWU6IFwiZ3VcIiB9LFxyXG4gIHsgbmFtZTogXCJNYW54XCIsIHZhbHVlOiBcImd2XCIgfSxcclxuICB7IG5hbWU6IFwiSGF1c2FcIiwgdmFsdWU6IFwiaGFcIiB9LFxyXG4gIHsgbmFtZTogXCJIZWJyZXdcIiwgdmFsdWU6IFwiaGVcIiB9LFxyXG4gIHsgbmFtZTogXCJIaW5kaVwiLCB2YWx1ZTogXCJoaVwiIH0sXHJcbiAgeyBuYW1lOiBcIkhpcmkgTW90dVwiLCB2YWx1ZTogXCJob1wiIH0sXHJcbiAgeyBuYW1lOiBcIkNyb2F0aWFuXCIsIHZhbHVlOiBcImhyXCIgfSxcclxuICB7IG5hbWU6IFwiSGFpdGlhblwiLCB2YWx1ZTogXCJodFwiIH0sXHJcbiAgeyBuYW1lOiBcIkh1bmdhcmlhblwiLCB2YWx1ZTogXCJodVwiIH0sXHJcbiAgeyBuYW1lOiBcIkFybWVuaWFuXCIsIHZhbHVlOiBcImh5XCIgfSxcclxuICB7IG5hbWU6IFwiSGVyZXJvXCIsIHZhbHVlOiBcImh6XCIgfSxcclxuICB7IG5hbWU6IFwiSW50ZXJsaW5ndWFcIiwgdmFsdWU6IFwiaWFcIiB9LFxyXG4gIHsgbmFtZTogXCJJbmRvbmVzaWFuXCIsIHZhbHVlOiBcImlkXCIgfSxcclxuICB7IG5hbWU6IFwiSW50ZXJsaW5ndWVcIiwgdmFsdWU6IFwiaWVcIiB9LFxyXG4gIHsgbmFtZTogXCJJZ2JvXCIsIHZhbHVlOiBcImlnXCIgfSxcclxuICB7IG5hbWU6IFwiU2ljaHVhbiBZaVwiLCB2YWx1ZTogXCJpaVwiIH0sXHJcbiAgeyBuYW1lOiBcIkludXBpYXFcIiwgdmFsdWU6IFwiaWtcIiB9LFxyXG4gIHsgbmFtZTogXCJJZG9cIiwgdmFsdWU6IFwiaW9cIiB9LFxyXG4gIHsgbmFtZTogXCJJY2VsYW5kaWNcIiwgdmFsdWU6IFwiaXNcIiB9LFxyXG4gIHsgbmFtZTogXCJJdGFsaWFuXCIsIHZhbHVlOiBcIml0XCIgfSxcclxuICB7IG5hbWU6IFwiSW51a3RpdHV0XCIsIHZhbHVlOiBcIml1XCIgfSxcclxuICB7IG5hbWU6IFwiSmFwYW5lc2VcIiwgdmFsdWU6IFwiamFcIiB9LFxyXG4gIHsgbmFtZTogXCJKYXZhbmVzZVwiLCB2YWx1ZTogXCJqdlwiIH0sXHJcbiAgeyBuYW1lOiBcIkdlb3JnaWFuXCIsIHZhbHVlOiBcImthXCIgfSxcclxuICB7IG5hbWU6IFwiS29uZ29cIiwgdmFsdWU6IFwia2dcIiB9LFxyXG4gIHsgbmFtZTogXCJLaWt1eXVcIiwgdmFsdWU6IFwia2lcIiB9LFxyXG4gIHsgbmFtZTogXCJLd2FueWFtYVwiLCB2YWx1ZTogXCJralwiIH0sXHJcbiAgeyBuYW1lOiBcIkthemFraFwiLCB2YWx1ZTogXCJra1wiIH0sXHJcbiAgeyBuYW1lOiBcIkdyZWVubGFuZGljXCIsIHZhbHVlOiBcImtsXCIgfSxcclxuICB7IG5hbWU6IFwiS2htZXJcIiwgdmFsdWU6IFwia21cIiB9LFxyXG4gIHsgbmFtZTogXCJLYW5uYWRhXCIsIHZhbHVlOiBcImtuXCIgfSxcclxuICB7IG5hbWU6IFwiS29yZWFuXCIsIHZhbHVlOiBcImtvXCIgfSxcclxuICB7IG5hbWU6IFwiS2FudXJpXCIsIHZhbHVlOiBcImtyXCIgfSxcclxuICB7IG5hbWU6IFwiS2FzaG1pcmlcIiwgdmFsdWU6IFwia3NcIiB9LFxyXG4gIHsgbmFtZTogXCJLdXJkaXNoXCIsIHZhbHVlOiBcImt1XCIgfSxcclxuICB7IG5hbWU6IFwiS29taVwiLCB2YWx1ZTogXCJrdlwiIH0sXHJcbiAgeyBuYW1lOiBcIkNvcm5pc2hcIiwgdmFsdWU6IFwia3dcIiB9LFxyXG4gIHsgbmFtZTogXCJLaXJnaGl6XCIsIHZhbHVlOiBcImt5XCIgfSxcclxuICB7IG5hbWU6IFwiTGF0aW5cIiwgdmFsdWU6IFwibGFcIiB9LFxyXG4gIHsgbmFtZTogXCJMdXhlbWJvdXJnaXNoXCIsIHZhbHVlOiBcImxiXCIgfSxcclxuICB7IG5hbWU6IFwiR2FuZGFcIiwgdmFsdWU6IFwibGdcIiB9LFxyXG4gIHsgbmFtZTogXCJMaW1idXJnaXNoXCIsIHZhbHVlOiBcImxpXCIgfSxcclxuICB7IG5hbWU6IFwiTGluZ2FsYVwiLCB2YWx1ZTogXCJsblwiIH0sXHJcbiAgeyBuYW1lOiBcIkxhb1wiLCB2YWx1ZTogXCJsb1wiIH0sXHJcbiAgeyBuYW1lOiBcIkxpdGh1YW5pYW5cIiwgdmFsdWU6IFwibHRcIiB9LFxyXG4gIHsgbmFtZTogXCJMdWJhXCIsIHZhbHVlOiBcImx1XCIgfSxcclxuICB7IG5hbWU6IFwiTGF0dmlhblwiLCB2YWx1ZTogXCJsdlwiIH0sXHJcbiAgeyBuYW1lOiBcIk1hbGFnYXN5XCIsIHZhbHVlOiBcIm1nXCIgfSxcclxuICB7IG5hbWU6IFwiTWFyc2hhbGxlc2VcIiwgdmFsdWU6IFwibWhcIiB9LFxyXG4gIHsgbmFtZTogXCJNxIFvcmlcIiwgdmFsdWU6IFwibWlcIiB9LFxyXG4gIHsgbmFtZTogXCJNYWNlZG9uaWFuXCIsIHZhbHVlOiBcIm1rXCIgfSxcclxuICB7IG5hbWU6IFwiTWFsYXlhbGFtXCIsIHZhbHVlOiBcIm1sXCIgfSxcclxuICB7IG5hbWU6IFwiTW9uZ29saWFuXCIsIHZhbHVlOiBcIm1uXCIgfSxcclxuICB7IG5hbWU6IFwiTW9sZGF2aWFuXCIsIHZhbHVlOiBcIm1vXCIgfSxcclxuICB7IG5hbWU6IFwiTWFyYXRoaVwiLCB2YWx1ZTogXCJtclwiIH0sXHJcbiAgeyBuYW1lOiBcIk1hbGF5XCIsIHZhbHVlOiBcIm1zXCIgfSxcclxuICB7IG5hbWU6IFwiTWFsdGVzZVwiLCB2YWx1ZTogXCJtdFwiIH0sXHJcbiAgeyBuYW1lOiBcIkJ1cm1lc2VcIiwgdmFsdWU6IFwibXlcIiB9LFxyXG4gIHsgbmFtZTogXCJOYXVydVwiLCB2YWx1ZTogXCJuYVwiIH0sXHJcbiAgeyBuYW1lOiBcIk5vcndlZ2lhbiBCb2ttw6VsXCIsIHZhbHVlOiBcIm5iXCIgfSxcclxuICB7IG5hbWU6IFwiTm9ydGggTmRlYmVsZVwiLCB2YWx1ZTogXCJuZFwiIH0sXHJcbiAgeyBuYW1lOiBcIk5lcGFsaVwiLCB2YWx1ZTogXCJuZVwiIH0sXHJcbiAgeyBuYW1lOiBcIk5kb25nYVwiLCB2YWx1ZTogXCJuZ1wiIH0sXHJcbiAgeyBuYW1lOiBcIkR1dGNoXCIsIHZhbHVlOiBcIm5sXCIgfSxcclxuICB7IG5hbWU6IFwiTm9yd2VnaWFuIE55bm9yc2tcIiwgdmFsdWU6IFwibm5cIiB9LFxyXG4gIHsgbmFtZTogXCJOb3J3ZWdpYW5cIiwgdmFsdWU6IFwibm9cIiB9LFxyXG4gIHsgbmFtZTogXCJTb3V0aCBOZGViZWxlXCIsIHZhbHVlOiBcIm5yXCIgfSxcclxuICB7IG5hbWU6IFwiTmF2YWpvXCIsIHZhbHVlOiBcIm52XCIgfSxcclxuICB7IG5hbWU6IFwiQ2hpY2hld2FcIiwgdmFsdWU6IFwibnlcIiB9LFxyXG4gIHsgbmFtZTogXCJPY2NpdGFuXCIsIHZhbHVlOiBcIm9jXCIgfSxcclxuICB7IG5hbWU6IFwiT2ppYndhXCIsIHZhbHVlOiBcIm9qXCIgfSxcclxuICB7IG5hbWU6IFwiT3JvbW9cIiwgdmFsdWU6IFwib21cIiB9LFxyXG4gIHsgbmFtZTogXCJPcml5YVwiLCB2YWx1ZTogXCJvclwiIH0sXHJcbiAgeyBuYW1lOiBcIk9zc2V0aWFuXCIsIHZhbHVlOiBcIm9zXCIgfSxcclxuICB7IG5hbWU6IFwiUGFuamFiaVwiLCB2YWx1ZTogXCJwYVwiIH0sXHJcbiAgeyBuYW1lOiBcIlDEgWxpXCIsIHZhbHVlOiBcInBpXCIgfSxcclxuICB7IG5hbWU6IFwiUG9saXNoXCIsIHZhbHVlOiBcInBsXCIgfSxcclxuICB7IG5hbWU6IFwiUGFzaHRvXCIsIHZhbHVlOiBcInBzXCIgfSxcclxuICB7IG5hbWU6IFwiUG9ydHVndWVzZVwiLCB2YWx1ZTogXCJwdFwiIH0sXHJcbiAgeyBuYW1lOiBcIlF1ZWNodWFcIiwgdmFsdWU6IFwicXVcIiB9LFxyXG4gIHsgbmFtZTogXCJSZXVuaW9uZXNlXCIsIHZhbHVlOiBcInJjXCIgfSxcclxuICB7IG5hbWU6IFwiUm9tYW5zaFwiLCB2YWx1ZTogXCJybVwiIH0sXHJcbiAgeyBuYW1lOiBcIktpcnVuZGlcIiwgdmFsdWU6IFwicm5cIiB9LFxyXG4gIHsgbmFtZTogXCJSb21hbmlhblwiLCB2YWx1ZTogXCJyb1wiIH0sXHJcbiAgeyBuYW1lOiBcIlJ1c3NpYW5cIiwgdmFsdWU6IFwicnVcIiB9LFxyXG4gIHsgbmFtZTogXCJLaW55YXJ3YW5kYVwiLCB2YWx1ZTogXCJyd1wiIH0sXHJcbiAgeyBuYW1lOiBcIlNhbnNrcml0XCIsIHZhbHVlOiBcInNhXCIgfSxcclxuICB7IG5hbWU6IFwiU2FyZGluaWFuXCIsIHZhbHVlOiBcInNjXCIgfSxcclxuICB7IG5hbWU6IFwiU2luZGhpXCIsIHZhbHVlOiBcInNkXCIgfSxcclxuICB7IG5hbWU6IFwiTm9ydGhlcm4gU2FtaVwiLCB2YWx1ZTogXCJzZVwiIH0sXHJcbiAgeyBuYW1lOiBcIlNhbmdvXCIsIHZhbHVlOiBcInNnXCIgfSxcclxuICB7IG5hbWU6IFwiU2VyYm8tQ3JvYXRpYW5cIiwgdmFsdWU6IFwic2hcIiB9LFxyXG4gIHsgbmFtZTogXCJTaW5oYWxlc2VcIiwgdmFsdWU6IFwic2lcIiB9LFxyXG4gIHsgbmFtZTogXCJTbG92YWtcIiwgdmFsdWU6IFwic2tcIiB9LFxyXG4gIHsgbmFtZTogXCJTbG92ZW5pYW5cIiwgdmFsdWU6IFwic2xcIiB9LFxyXG4gIHsgbmFtZTogXCJTYW1vYW5cIiwgdmFsdWU6IFwic21cIiB9LFxyXG4gIHsgbmFtZTogXCJTaG9uYVwiLCB2YWx1ZTogXCJzblwiIH0sXHJcbiAgeyBuYW1lOiBcIlNvbWFsaVwiLCB2YWx1ZTogXCJzb1wiIH0sXHJcbiAgeyBuYW1lOiBcIkFsYmFuaWFuXCIsIHZhbHVlOiBcInNxXCIgfSxcclxuICB7IG5hbWU6IFwiU2VyYmlhblwiLCB2YWx1ZTogXCJzclwiIH0sXHJcbiAgeyBuYW1lOiBcIlN3YXRpXCIsIHZhbHVlOiBcInNzXCIgfSxcclxuICB7IG5hbWU6IFwiU290aG9cIiwgdmFsdWU6IFwic3RcIiB9LFxyXG4gIHsgbmFtZTogXCJTdW5kYW5lc2VcIiwgdmFsdWU6IFwic3VcIiB9LFxyXG4gIHsgbmFtZTogXCJTd2VkaXNoXCIsIHZhbHVlOiBcInN2XCIgfSxcclxuICB7IG5hbWU6IFwiU3dhaGlsaVwiLCB2YWx1ZTogXCJzd1wiIH0sXHJcbiAgeyBuYW1lOiBcIlRhbWlsXCIsIHZhbHVlOiBcInRhXCIgfSxcclxuICB7IG5hbWU6IFwiVGVsdWd1XCIsIHZhbHVlOiBcInRlXCIgfSxcclxuICB7IG5hbWU6IFwiVGFqaWtcIiwgdmFsdWU6IFwidGdcIiB9LFxyXG4gIHsgbmFtZTogXCJUaGFpXCIsIHZhbHVlOiBcInRoXCIgfSxcclxuICB7IG5hbWU6IFwiVGlncmlueWFcIiwgdmFsdWU6IFwidGlcIiB9LFxyXG4gIHsgbmFtZTogXCJUdXJrbWVuXCIsIHZhbHVlOiBcInRrXCIgfSxcclxuICB7IG5hbWU6IFwiVGFnYWxvZ1wiLCB2YWx1ZTogXCJ0bFwiIH0sXHJcbiAgeyBuYW1lOiBcIlRzd2FuYVwiLCB2YWx1ZTogXCJ0blwiIH0sXHJcbiAgeyBuYW1lOiBcIlRvbmdhXCIsIHZhbHVlOiBcInRvXCIgfSxcclxuICB7IG5hbWU6IFwiVHVya2lzaFwiLCB2YWx1ZTogXCJ0clwiIH0sXHJcbiAgeyBuYW1lOiBcIlRzb25nYVwiLCB2YWx1ZTogXCJ0c1wiIH0sXHJcbiAgeyBuYW1lOiBcIlRhdGFyXCIsIHZhbHVlOiBcInR0XCIgfSxcclxuICB7IG5hbWU6IFwiVHdpXCIsIHZhbHVlOiBcInR3XCIgfSxcclxuICB7IG5hbWU6IFwiVGFoaXRpYW5cIiwgdmFsdWU6IFwidHlcIiB9LFxyXG4gIHsgbmFtZTogXCJVaWdodXJcIiwgdmFsdWU6IFwidWdcIiB9LFxyXG4gIHsgbmFtZTogXCJVa3JhaW5pYW5cIiwgdmFsdWU6IFwidWtcIiB9LFxyXG4gIHsgbmFtZTogXCJVcmR1XCIsIHZhbHVlOiBcInVyXCIgfSxcclxuICB7IG5hbWU6IFwiVXpiZWtcIiwgdmFsdWU6IFwidXpcIiB9LFxyXG4gIHsgbmFtZTogXCJWZW5kYVwiLCB2YWx1ZTogXCJ2ZVwiIH0sXHJcbiAgeyBuYW1lOiBcIlZpw6p0IE5hbWVzZVwiLCB2YWx1ZTogXCJ2aVwiIH0sXHJcbiAgeyBuYW1lOiBcIlZvbGFww7xrXCIsIHZhbHVlOiBcInZvXCIgfSxcclxuICB7IG5hbWU6IFwiV2FsbG9vblwiLCB2YWx1ZTogXCJ3YVwiIH0sXHJcbiAgeyBuYW1lOiBcIldvbG9mXCIsIHZhbHVlOiBcIndvXCIgfSxcclxuICB7IG5hbWU6IFwiWGhvc2FcIiwgdmFsdWU6IFwieGhcIiB9LFxyXG4gIHsgbmFtZTogXCJZaWRkaXNoXCIsIHZhbHVlOiBcInlpXCIgfSxcclxuICB7IG5hbWU6IFwiWW9ydWJhXCIsIHZhbHVlOiBcInlvXCIgfSxcclxuICB7IG5hbWU6IFwiWmh1YW5nXCIsIHZhbHVlOiBcInphXCIgfSxcclxuICB7IG5hbWU6IFwiQ2hpbmVzZVwiLCB2YWx1ZTogXCJ6aFwiIH0sXHJcbiAgeyBuYW1lOiBcIlp1bHVcIiwgdmFsdWU6IFwienVcIiB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNUQVRVUyA9IFtcclxuICB7IG5hbWU6IFwiSW4gUHJvZ3Jlc3NcIiwgdmFsdWU6IFwiaW4gcHJvZ3Jlc3NcIiB9LFxyXG4gIHsgbmFtZTogXCJJbiBIaWF0dXNcIiwgdmFsdWU6IFwiaW4gaGlhdHVzXCIgfSxcclxuICB7IG5hbWU6IFwiQ29tcGxldGVkXCIsIHZhbHVlOiBcImNvbXBsZXRlZFwiIH0sXHJcbl07XHJcblxyXG4vLyBUWVBFU1xyXG5leHBvcnQgY29uc3QgdHlwZXMgPSB7XHJcbiAgR0VUX1BST0ZJTEU6IFwiR0VUX1BST0ZJTEVcIixcclxuICBMT0dJTjogXCJMT0dJTlwiLFxyXG4gIFJFR0lTVEVSOiBcIlJFR0lTVEVSXCIsXHJcbiAgR0VUX1NUT1JZOiBcIkdFVF9TVE9SWVwiLFxyXG4gIEdFVF9VU0VSX1NUT1JJRVM6IFwiR0VUX1VTRVJfU1RPUklFU1wiLFxyXG4gIEdFVF9IT01FX1NUT1JJRVM6IFwiR0VUX0hPTUVfU1RPUklFU1wiLFxyXG4gIEdFVF9VU0VSU19GUk9NX1NFQVJDSDogXCJHRVRfVVNFUlNfRlJPTV9TRUFSQ0hcIixcclxuICBHRVRfRkFWT1JJVEVfU1RPUklFUzogXCJHRVRfRkFWT1JJVEVfU1RPUklFU1wiLFxyXG4gIEFERF9TVE9SWTogXCJBRERfU1RPUllcIixcclxuICBFRElUX1NUT1JZOiBcIkVESVRfU1RPUllcIixcclxuICBERUxFVEVfU1RPUlk6IFwiREVMRVRFX1NUT1JZXCIsXHJcbiAgR0VUX1NUT1JJRVNfRlJPTV9TRUFSQ0g6IFwiR0VUX1NUT1JJRVNfRlJPTV9TRUFSQ0hcIixcclxuICBJU19TVE9SWV9GQVZPUklURTogXCJJU19TVE9SWV9GQVZPUklURVwiLFxyXG4gIElTX0NIQVJBQ1RFUl9GQVZPUklURTogXCJJU19DSEFSQUNURVJfRkFWT1JJVEVcIixcclxuICBJU19GT0xMT1dJTkc6IFwiSVNfRk9MTE9XSU5HXCIsXHJcbiAgR0VUX0NIQVBURVI6IFwiR0VUX0NIQVBURVJcIixcclxuICBBRERfQ0hBUFRFUjogXCJBRERfQ0hBUFRFUlwiLFxyXG4gIEVESVRfQ0hBUFRFUjogXCJFRElUX0NIQVBURVJcIixcclxuICBERUxFVEVfQ0hBUFRFUjogXCJERUxFVEVfQ0hBUFRFUlwiLFxyXG4gIEdFVF9DSEFQVEVSUzogXCJHRVRfQ0hBUFRFUlNcIixcclxuICBBRERfQ0hBUkFDVEVSOiBcIkFERF9DSEFSQUNURVJcIixcclxuICBHRVRfQ0hBUkFDVEVSOiBcIkdFVF9DSEFSQUNURVJcIixcclxuICBFRElUX0NIQVJBQ1RFUjogXCJFRElUX0NIQVJBQ1RFUlwiLFxyXG4gIERFTEVURV9DSEFSQUNURVI6IFwiREVMRVRFX0NIQVJBQ1RFUlwiLFxyXG4gIEdFVF9VU0VSX0NIQVJBQ1RFUlM6IFwiR0VUX1VTRVJfQ0hBUkFDVEVSU1wiLFxyXG4gIEdFVF9DSEFSQUNURVJfQ09NTUVOVFM6IFwiR0VUX0NIQVJBQ1RFUl9DT01NRU5UU1wiLFxyXG4gIEdFVF9DSEFSQUNURVJTX0ZST01fU0VBUkNIOiBcIkdFVF9DSEFSQUNURVJTX0ZST01fU0VBUkNIXCIsXHJcbiAgR0VUX1VTRVJfTE9DQVRJT05TOiBcIkdFVF9VU0VSX0xPQ0FUSU9OU1wiLFxyXG4gIEdFVF9GQVZPUklURV9DSEFSQUNURVJTOiBcIkdFVF9GQVZPUklURV9DSEFSQUNURVJTXCIsXHJcbiAgR0VUX1NUT1JZX0NIQVJBQ1RFUlM6IFwiR0VUX1NUT1JZX0NIQVJBQ1RFUlNcIixcclxuICBBRERfTE9DQVRJT046IFwiQUREX0xPQ0FUSU9OXCIsXHJcbiAgR0VUX0xPQ0FUSU9OOiBcIkdFVF9MT0NBVElPTlwiLFxyXG4gIEVESVRfTE9DQVRJT046IFwiRURJVF9MT0NBVElPTlwiLFxyXG4gIERFTEVURV9MT0NBVElPTjogXCJERUxFVEVfTE9DQVRJT05cIixcclxuICBHRVRfQ09NTUVOVFM6IFwiR0VUX0NPTU1FTlRTXCIsXHJcbiAgR0VUX0ZBVk9SSVRFX0FVVEhPUlM6IFwiR0VUX0ZBVk9SSVRFX0FVVEhPUlNcIixcclxuICBHRVRfU1RPUllfTE9DQVRJT05TOiBcIkdFVF9TVE9SWV9MT0NBVElPTlNcIixcclxuICBHRVRfRk9MTE9XRVJTOiBcIkdFVF9GT0xMT1dFUlNcIixcclxuICBESVNQQVRDSF9FUlJPUjogXCJESVNQQVRDSF9FUlJPUlwiLFxyXG4gIFNVQk1JVF9DT01NRU5UOiBcIlNVQk1JVF9DT01NRU5UXCIsXHJcbiAgUkFURV9DT01NRU5UOiBcIlJBVEVfQ09NTUVOVFwiLFxyXG4gIEdFVF9OT1RJRklDQVRJT05TOiBcIkdFVF9OT1RJRklDQVRJT05TXCIsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX1BST0ZJTEUgPSBcIkdFVF9QUk9GSUxFXCI7XHJcbmV4cG9ydCBjb25zdCBMT0dJTiA9IFwiTE9HSU5cIjtcclxuZXhwb3J0IGNvbnN0IFJFR0lTVEVSID0gXCJSRUdJU1RFUlwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9TVE9SWSA9IFwiR0VUX1NUT1JZXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfVVNFUl9TVE9SSUVTID0gXCJHRVRfVVNFUl9TVE9SSUVTXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfRkFWT1JJVEVfU1RPUklFUyA9IFwiR0VUX0ZBVk9SSVRFX1NUT1JJRVNcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9TVE9SWSA9IFwiQUREX1NUT1JZXCI7XHJcbmV4cG9ydCBjb25zdCBFRElUX1NUT1JZID0gXCJFRElUX1NUT1JZXCI7XHJcbmV4cG9ydCBjb25zdCBERUxFVEVfU1RPUlkgPSBcIkRFTEVURV9TVE9SWVwiO1xyXG5leHBvcnQgY29uc3QgSVNfU1RPUllfRkFWT1JJVEUgPSBcIklTX1NUT1JZX0ZBVk9SSVRFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX0NIQVBURVIgPSBcIkdFVF9DSEFQVEVSXCI7XHJcbmV4cG9ydCBjb25zdCBBRERfQ0hBUFRFUiA9IFwiQUREX0NIQVBURVJcIjtcclxuZXhwb3J0IGNvbnN0IEVESVRfQ0hBUFRFUiA9IFwiRURJVF9DSEFQVEVSXCI7XHJcbmV4cG9ydCBjb25zdCBERUxFVEVfQ0hBUFRFUiA9IFwiREVMRVRFX0NIQVBURVJcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9DSEFQVEVSUyA9IFwiR0VUX0NIQVBURVJTXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX0NIQVJBQ1RFUiA9IFwiQUREX0NIQVJBQ1RFUlwiO1xyXG5leHBvcnQgY29uc3QgR0VUX0NIQVJBQ1RFUiA9IFwiR0VUX0NIQVJBQ1RFUlwiO1xyXG5leHBvcnQgY29uc3QgRURJVF9DSEFSQUNURVIgPSBcIkVESVRfQ0hBUkFDVEVSXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfVVNFUl9DSEFSQUNURVJTID0gXCJHRVRfVVNFUl9DSEFSQUNURVJTXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfVVNFUl9MT0NBVElPTlMgPSBcIkdFVF9VU0VSX0xPQ0FUSU9OU1wiO1xyXG5leHBvcnQgY29uc3QgR0VUX0ZBVk9SSVRFX0NIQVJBQ1RFUlMgPSBcIkdFVF9GQVZPUklURV9DSEFSQUNURVJTXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfU1RPUllfQ0hBUkFDVEVSUyA9IFwiR0VUX1NUT1JZX0NIQVJBQ1RFUlNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfTE9DQVRJT04gPSBcIkFERF9MT0NBVElPTlwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9GQVZPUklURV9BVVRIT1JTID0gXCJHRVRfRkFWT1JJVEVfQVVUSE9SU1wiO1xyXG5leHBvcnQgY29uc3QgR0VUX0ZPTExPV0VSUyA9IFwiR0VUX0ZPTExPV0VSU1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IERJU1BBVENIX0VSUk9SID0gXCJESVNQQVRDSF9FUlJPUlwiO1xyXG4iLCJleHBvcnQgY29uc3QgZHVtbXkgPSB7XHJcbiAgcGVyc29uOlxyXG4gICAgXCJodHRwczovL2kucGluaW1nLmNvbS81NjR4LzcwLzUwL2EzLzcwNTBhMzBjYzYxZThhN2YzZjg2NzdlYmY5NTA1ZGI3LmpwZ1wiLFxyXG4gIGNvdmVyOlxyXG4gICAgXCJodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy8zODgxMTA0L3BleGVscy1waG90by0zODgxMTA0LmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZkcHI9MiZoPTY1MCZ3PTk0MFwiLFxyXG4gIG5hbWU6IFwiQWlzaHdhcnlhIFJhaVwiLFxyXG4gIHBvc3RlcjogXCJodHRwczovL2ltYWdlcy1uYS5zc2wtaW1hZ2VzLWFtYXpvbi5jb20vaW1hZ2VzL0kvODFoMmdXUFRZSkwuanBnXCIsXHJcbiAgYXZhdGFyOiBcImh0dHBzOi8vYmlwLmNucnMuZnIvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMTEvdXNlci5qcGdcIixcclxuICBub0ltYWdlOiBcImh0dHBzOi8vaS5zdGFjay5pbWd1ci5jb20veTlEcFQuanBnXCIsXHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvYXBwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2F1dGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvZmlyZXN0b3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL3N0b3JhZ2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVzcG9uc2l2ZS1tYXNvbnJ5XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=