module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/profile/[id]/index.js");
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
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_dummy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/dummy */ "./utils/dummy.js");
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
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "img-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: story.banner ? story.banner : _utils_dummy__WEBPACK_IMPORTED_MODULE_2__["dummy"].noImage,
    alt: "image",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  })), __jsx("figcaption", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "cat-block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }, story.category ? __jsx("span", {
    className: "tag",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 15
    }
  }, story.category) : story.categories.map(cat => __jsx("span", {
    className: "tag",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 45
    }
  }, cat))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Space"], {
    align: "center",
    size: 8,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, story.mature && __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
    title: "Mature content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 15
    }
  }, __jsx("span", {
    className: "mature",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }, "M")), !story.public && __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
    title: "Private Story",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 15
    }
  }, __jsx("span", {
    className: "mature",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }, "P")))), __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, story === null || story === void 0 ? void 0 : story.title), type !== "mini" && __jsx("p", {
    className: "description",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, (story === null || story === void 0 ? void 0 : (_story$summary = story.summary) === null || _story$summary === void 0 ? void 0 : _story$summary.length) > 150 ? `${story.summary.slice(0, 150)}...` : story.summary, !story.summary && "No summary yet"), type !== "privateProfile" && __jsx("span", {
    className: "author",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }, "Author: ", story.authorName), __jsx("div", {
    className: "count",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "number",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, story.chaptersCount, " "), " ", __jsx("ion-icon", {
    name: "book",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  })), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "number",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, story.likesCount, " "), " ", __jsx("ion-icon", {
    name: "heart",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  })), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "number",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, story.commentsCount, " "), " ", __jsx("ion-icon", {
    name: "chatbubble",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
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

  const signInWithGoogle = () => {
    return _redux_fbConfig__WEBPACK_IMPORTED_MODULE_2__["auth"].signInWithPopup(_redux_fbConfig__WEBPACK_IMPORTED_MODULE_2__["provider"]).then(async response => {
      setUser(response.user);
    }).catch(err => console.log(err.message));
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

  const changeUsername = username => {
    return _redux_fbConfig__WEBPACK_IMPORTED_MODULE_2__["db"].collection("users").doc(_redux_fbConfig__WEBPACK_IMPORTED_MODULE_2__["auth"].currentUser.uid).update({
      username
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
    _redux_fbConfig__WEBPACK_IMPORTED_MODULE_2__["auth"].currentUser.delete();
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
    verifyEmail,
    signInWithGoogle,
    changeUsername
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

/***/ "./pages/profile/[id]/index.js":
/*!*************************************!*\
  !*** ./pages/profile/[id]/index.js ***!
  \*************************************/
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
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../index */ "./pages/profile/index.js");
/* harmony import */ var _components_profile_Banner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/profile/Banner */ "./components/profile/Banner.js");
/* harmony import */ var _components_profile_Tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/profile/Tabs */ "./components/profile/Tabs.js");
/* harmony import */ var _components_profile_Stories__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/profile/Stories */ "./components/profile/Stories.js");
/* harmony import */ var _components_profile_Characters__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/profile/Characters */ "./components/profile/Characters.js");
/* harmony import */ var _components_profile_Followers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/profile/Followers */ "./components/profile/Followers.js");
/* harmony import */ var _components_profile_Locations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/profile/Locations */ "./components/profile/Locations.js");
/* harmony import */ var _redux_actions_userActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../redux/actions/userActions */ "./redux/actions/userActions.js");
/* harmony import */ var _redux_actions_storiesActions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../redux/actions/storiesActions */ "./redux/actions/storiesActions.js");
/* harmony import */ var _redux_actions_charactersActions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../redux/actions/charactersActions */ "./redux/actions/charactersActions.js");
/* harmony import */ var _hooks_userHooks__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../hooks/userHooks */ "./hooks/userHooks.js");
/* harmony import */ var _components_hoc_LoadingScreen__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../components/hoc/LoadingScreen */ "./components/hoc/LoadingScreen.js");
/* harmony import */ var _components_hoc_RedirectComp__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../components/hoc/RedirectComp */ "./components/hoc/RedirectComp.js");
var _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\pages\\profile\\[id]\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



















const Profile = ({
  getProfile,
  profile,
  stories,
  locations,
  getUserStories,
  followUser,
  unfollowUser,
  getIsFollowing,
  getUserCharacters,
  getFavoriteAuthors,
  getFavoriteCharacters,
  getFavoriteStories,
  getUserLocations,
  getFollowers,
  characters,
  isFollowing,
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
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (auth.user && auth.user.uid !== router.query.id || !auth.isLoading && !auth.user) {
      getProfile(router.query.id);
      getUserStories(router.query.id);
      getUserCharacters(router.query.id);
      getFavoriteAuthors(router.query.id);
      getFollowers(router.query.id);
      getFavoriteCharacters(router.query.id);
      getFavoriteStories(router.query.id);
      getUserLocations(router.query.id);
      setCurrentTab("stories");
    }
  }, [router.query.id, auth]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (auth.user) {
      getIsFollowing(router.query.id);
    }
  }, [auth]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setFavoriteStories(favStories.filter(s => s.public || s.authorId === auth.user.uid));
    setFavoriteCharacters(favCharacters.filter(s => s.public || s.authorId === auth.user.uid));
  }, [auth, favStories, favCharacters]);

  const changeFavTab = tab => setFavTab(tab);

  return __jsx("div", {
    className: "profile",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 5
    }
  }, __jsx(_components_hoc_LoadingScreen__WEBPACK_IMPORTED_MODULE_15__["default"], {
    loading: auth.isLoading,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 7
    }
  }, auth.user && auth.user.uid === router.query.id ? __jsx(_index__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 11
    }
  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_profile_Banner__WEBPACK_IMPORTED_MODULE_5__["default"], {
    context: "public",
    profile: profile,
    favAuthors: favAuthors,
    followers: followers,
    changeFavTab: changeFavTab,
    favTab: favTab,
    setCurrentTab: setCurrentTab,
    isFollowing: isFollowing,
    followUser: followUser,
    unfollowUser: unfollowUser,
    auth: auth,
    id: router.query.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 13
    }
  }), __jsx("section", {
    className: "profile-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 13
    }
  }, __jsx(_components_profile_Tabs__WEBPACK_IMPORTED_MODULE_6__["default"], {
    currentTab: currentTab,
    tabs: tabs,
    changeTab: changeTab,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 15
    }
  }), currentTab === "stories" && __jsx(_components_profile_Stories__WEBPACK_IMPORTED_MODULE_7__["default"], {
    auth: auth,
    loading: loading,
    type: "show",
    stories: stories,
    type: "privateProfile",
    context: "public",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 17
    }
  }), currentTab === "characters" && __jsx(_components_profile_Characters__WEBPACK_IMPORTED_MODULE_8__["default"], {
    context: "public",
    characters: characters,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 17
    }
  }), currentTab === "locations" && __jsx(_components_profile_Locations__WEBPACK_IMPORTED_MODULE_10__["default"], {
    context: "public",
    locations: locations,
    type: "profile",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 17
    }
  }), currentTab === "favorites stories" && __jsx(_components_profile_Stories__WEBPACK_IMPORTED_MODULE_7__["default"], {
    type: "favorites",
    loading: loading,
    stories: favoriteStories,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 17
    }
  }), currentTab === "favorites characters" && __jsx(_components_profile_Characters__WEBPACK_IMPORTED_MODULE_8__["default"], {
    type: "favorites",
    characters: favoriteCharacters,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 17
    }
  }), currentTab === "followers" && __jsx(_components_profile_Followers__WEBPACK_IMPORTED_MODULE_9__["default"], {
    title: followers.authors.length > 1 ? "Followers" : "Follower",
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
      columnNumber: 17
    }
  }), currentTab === "followings" && __jsx(_components_profile_Followers__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
      lineNumber: 180,
      columnNumber: 17
    }
  })))));
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
  loading: state.stories.loading,
  isFollowing: state.auth.isFollowing
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
  followUser: _redux_actions_userActions__WEBPACK_IMPORTED_MODULE_11__["followUser"],
  unfollowUser: _redux_actions_userActions__WEBPACK_IMPORTED_MODULE_11__["unfollowUser"],
  getIsFollowing: _redux_actions_userActions__WEBPACK_IMPORTED_MODULE_11__["getIsFollowing"]
})(Profile));

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
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_profile_Banner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/profile/Banner */ "./components/profile/Banner.js");
/* harmony import */ var _components_profile_Tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/profile/Tabs */ "./components/profile/Tabs.js");
/* harmony import */ var _components_profile_Stories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/profile/Stories */ "./components/profile/Stories.js");
/* harmony import */ var _components_profile_Characters__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/profile/Characters */ "./components/profile/Characters.js");
/* harmony import */ var _components_profile_Followers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/profile/Followers */ "./components/profile/Followers.js");
/* harmony import */ var _components_profile_Locations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/profile/Locations */ "./components/profile/Locations.js");
/* harmony import */ var _components_profile_Settings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/profile/Settings */ "./components/profile/Settings.js");
/* harmony import */ var _redux_actions_userActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../redux/actions/userActions */ "./redux/actions/userActions.js");
/* harmony import */ var _redux_actions_storiesActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../redux/actions/storiesActions */ "./redux/actions/storiesActions.js");
/* harmony import */ var _redux_actions_charactersActions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../redux/actions/charactersActions */ "./redux/actions/charactersActions.js");
/* harmony import */ var _hooks_userHooks__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../hooks/userHooks */ "./hooks/userHooks.js");
/* harmony import */ var _components_hoc_LoadingScreen__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/hoc/LoadingScreen */ "./components/hoc/LoadingScreen.js");
/* harmony import */ var _components_hoc_RedirectComp__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/hoc/RedirectComp */ "./components/hoc/RedirectComp.js");
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

  const auth = Object(_hooks_userHooks__WEBPACK_IMPORTED_MODULE_13__["useAuth"])();
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
      lineNumber: 101,
      columnNumber: 5
    }
  }, __jsx(_components_hoc_LoadingScreen__WEBPACK_IMPORTED_MODULE_14__["default"], {
    loading: auth.isLoading,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }
  }, __jsx(_components_hoc_RedirectComp__WEBPACK_IMPORTED_MODULE_15__["default"], {
    condition: auth.user,
    type: "redirect",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 9
    }
  }, auth.user && !auth.user.emailVerified && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Alert"], {
    closable: true,
    message: "You need to verify your email to enjoy all benefits of Kronikea",
    type: "error",
    action: __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      size: "small",
      type: "primary",
      onClick: auth.verifyEmail,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 19
      }
    }, "Click here to send a new email"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 15
    }
  }), __jsx("div", {
    style: {
      marginBottom: "24px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 15
    }
  })), __jsx(_components_profile_Banner__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
      lineNumber: 123,
      columnNumber: 11
    }
  }), __jsx("section", {
    className: "profile-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 11
    }
  }, __jsx(_components_profile_Tabs__WEBPACK_IMPORTED_MODULE_4__["default"], {
    currentTab: currentTab,
    tabs: tabs,
    changeTab: changeTab,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 13
    }
  }), currentTab === "stories" && __jsx(_components_profile_Stories__WEBPACK_IMPORTED_MODULE_5__["default"], {
    auth: auth,
    loading: loading,
    type: "show",
    stories: stories,
    type: "privateProfile",
    context: "private",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 15
    }
  }), currentTab === "characters" && __jsx(_components_profile_Characters__WEBPACK_IMPORTED_MODULE_6__["default"], {
    context: "private",
    characters: characters,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 15
    }
  }), currentTab === "locations" && __jsx(_components_profile_Locations__WEBPACK_IMPORTED_MODULE_8__["default"], {
    context: "private",
    locations: locations,
    type: "profile",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 15
    }
  }), currentTab === "favorites stories" && __jsx(_components_profile_Stories__WEBPACK_IMPORTED_MODULE_5__["default"], {
    loading: loading,
    type: "favorites",
    stories: favoriteStories,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 15
    }
  }), currentTab === "favorites characters" && __jsx(_components_profile_Characters__WEBPACK_IMPORTED_MODULE_6__["default"], {
    type: "favorites",
    characters: favoriteCharacters,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 15
    }
  }), currentTab === "followers" && __jsx(_components_profile_Followers__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
      lineNumber: 166,
      columnNumber: 15
    }
  }), currentTab === "followings" && __jsx(_components_profile_Followers__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
      lineNumber: 177,
      columnNumber: 15
    }
  })), __jsx(_components_profile_Settings__WEBPACK_IMPORTED_MODULE_9__["default"], {
    deleteAccount: deleteAccount,
    changeProfile: changeProfile,
    profile: profile,
    openSettings: openSettings,
    setOpenSettings: setOpenSettings,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
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
  getProfile: _redux_actions_userActions__WEBPACK_IMPORTED_MODULE_10__["getProfile"],
  getUserStories: _redux_actions_storiesActions__WEBPACK_IMPORTED_MODULE_11__["getUserStories"],
  getUserCharacters: _redux_actions_charactersActions__WEBPACK_IMPORTED_MODULE_12__["getUserCharacters"],
  getFavoriteAuthors: _redux_actions_userActions__WEBPACK_IMPORTED_MODULE_10__["getFavoriteAuthors"],
  getFollowers: _redux_actions_userActions__WEBPACK_IMPORTED_MODULE_10__["getFollowers"],
  getFavoriteCharacters: _redux_actions_charactersActions__WEBPACK_IMPORTED_MODULE_12__["getFavoriteCharacters"],
  getFavoriteStories: _redux_actions_storiesActions__WEBPACK_IMPORTED_MODULE_11__["getFavoriteStories"],
  getUserLocations: _redux_actions_storiesActions__WEBPACK_IMPORTED_MODULE_11__["getUserLocations"],
  changeProfile: _redux_actions_userActions__WEBPACK_IMPORTED_MODULE_10__["changeProfile"]
})(Profile));

/***/ }),

/***/ "./redux/actions/charactersActions.js":
/*!********************************************!*\
  !*** ./redux/actions/charactersActions.js ***!
  \********************************************/
/*! exports provided: getCharacter, addCharacter, editCharacter, deleteCharacter, getUserCharacters, getFavoriteCharacters, isCharacterFavorite, addCharacterToFavorite, removeCharacterFromFavorite, getCharactersInStory, submitCharaterFeedback, getCharacterComments, deleteCharacterComment, rateComment, getCharactersFromSearch, getPopularCharacters */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPopularCharacters", function() { return getPopularCharacters; });
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
  });
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
  _fbConfig__WEBPACK_IMPORTED_MODULE_2__["db"].collection("comments").add(_objectSpread(_objectSpread({}, info), {}, {
    createdAt: firebase_app__WEBPACK_IMPORTED_MODULE_3___default.a.firestore.FieldValue.serverTimestamp()
  })).then(() => {
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
const getPopularCharacters = () => dispatch => {
  _fbConfig__WEBPACK_IMPORTED_MODULE_2__["db"].collection("characters").where("public", "==", true).orderBy("likesCount", "desc").limit(12).get().then(docs => {
    let res = [];
    docs.forEach(doc => {
      res = [...res, _objectSpread(_objectSpread({}, doc.data()), {}, {
        id: doc.id
      })];
    });
    dispatch({
      type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].GET_POPULAR_CHARACTERS,
      payload: res
    });
  });
};

/***/ }),

/***/ "./redux/actions/storiesActions.js":
/*!*****************************************!*\
  !*** ./redux/actions/storiesActions.js ***!
  \*****************************************/
/*! exports provided: getStory, addStory, editStory, deleteStory, getUserStories, getFavoriteStories, isStoryFavorite, addStoryToFavorite, removeStoryFromFavorite, getStoryCharacters, getHomeStories, getFeaturedStories, getStoriesByLetter, getStoriesByCategory, addChapter, editChapter, deleteChapter, getChapter, getChapters, addLocation, editLocation, getLocation, deleteLocation, getUserLocations, getStoryLocations, getComments, submitComment, deleteComment, rateStory, getUserNote, getStoriesFromSearch */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFeaturedStories", function() { return getFeaturedStories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStoriesByLetter", function() { return getStoriesByLetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStoriesByCategory", function() { return getStoriesByCategory; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rateStory", function() { return rateStory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserNote", function() { return getUserNote; });
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
  return _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("storiesLikes").add({
    sender: username,
    senderId: _fbConfig__WEBPACK_IMPORTED_MODULE_1__["auth"].currentUser.uid,
    storyId: id,
    createdAt: firebase_app__WEBPACK_IMPORTED_MODULE_2___default.a.firestore.FieldValue.serverTimestamp()
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
  _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("stories").where("public", "==", true).orderBy("note", "desc").limit(4).get().then(docs => {
    docs.forEach(doc => result.push(_objectSpread({
      id: doc.id
    }, doc.data())));
    dispatch({
      type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].GET_HOME_STORIES,
      payload: result
    });
  });
};
const getFeaturedStories = () => dispatch => {
  _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("stories").where("public", "==", true).where("featured", "==", true).limit(10).get().then(docs => {
    let result = [];
    docs.forEach(doc => result.push(_objectSpread({
      id: doc.id
    }, doc.data())));
    dispatch({
      type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].GET_FEATURED_STORIES,
      payload: result,
      loading: false
    });
  });
};
const getStoriesByLetter = (letter, alphabet) => dispatch => {
  dispatch({
    type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].GET_STORIES_FROM_SEARCH,
    loading: true
  });
  const end = alphabet.findIndex(a => a === letter);
  _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("stories").where("public", "==", true).orderBy("title", "asc").startAt(letter.toUpperCase()).endAt(letter === "z" ? "Z" : alphabet[end + 1].toUpperCase()).get().then(docs => {
    let result = [];
    docs.forEach(doc => result.push(_objectSpread(_objectSpread({}, doc.data()), {}, {
      id: doc.id
    })));
    dispatch({
      type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].GET_STORIES_FROM_SEARCH,
      loading: false,
      payload: result
    });
  });
};
const getStoriesByCategory = cat => dispatch => {
  _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("stories").where("public", "==", true).where("categories", "array-contains", cat).get().then(docs => {
    let result = [];
    docs.forEach(doc => result.push(_objectSpread(_objectSpread({}, doc.data()), {}, {
      id: doc.id
    })));
    dispatch({
      type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].GET_STORIES_FROM_SEARCH,
      loading: false,
      payload: result
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
                    storyTitle: doc.data().title,
                    note: doc.data().note
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
  _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("comments").add(_objectSpread(_objectSpread({}, info), {}, {
    userDeleted: false,
    suspended: false,
    createdAt: firebase_app__WEBPACK_IMPORTED_MODULE_2___default.a.firestore.FieldValue.serverTimestamp()
  })).then(() => antd__WEBPACK_IMPORTED_MODULE_3__["message"].success("Comment posted successfully")).catch(err => antd__WEBPACK_IMPORTED_MODULE_3__["message"].error(err.message));
};
const deleteComment = id => dispatch => {
  _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("comments").doc(id).delete();
}; // RATE

const rateStory = data => dispatch => {
  _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("stars").doc(`${_fbConfig__WEBPACK_IMPORTED_MODULE_1__["auth"].currentUser.uid}${data.storyId}`).set({
    value: data.value,
    userId: _fbConfig__WEBPACK_IMPORTED_MODULE_1__["auth"].currentUser.uid,
    storyId: data.storyId
  }).then(() => antd__WEBPACK_IMPORTED_MODULE_3__["message"].success("Story rated successfully")).catch(err => console.log(err));
};
const getUserNote = storyId => dispatch => {
  _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("stars").doc(`${_fbConfig__WEBPACK_IMPORTED_MODULE_1__["auth"].currentUser.uid}${storyId}`).onSnapshot(doc => dispatch({
    type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].GET_USER_RATE,
    payload: doc.exists ? doc.data().value : 0
  }));
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
/*! exports provided: log_in, getProfile, getFavoriteAuthors, getFollowers, getIsFollowing, followUser, unfollowUser, changeProfile, getUsersFromSearch, getPopularUsers */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPopularUsers", function() { return getPopularUsers; });
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
const getPopularUsers = () => dispatch => {
  _fbConfig__WEBPACK_IMPORTED_MODULE_0__["db"].collection("users").orderBy("likesCount", "desc").limit(4).get().then(docs => {
    let result = [];
    docs.forEach(doc => {
      result = [...result, _objectSpread(_objectSpread({}, doc.data()), {}, {
        id: doc.id
      })];
    });
    dispatch({
      type: _utils_constants__WEBPACK_IMPORTED_MODULE_1__["types"].GET_POPULAR_USERS,
      payload: result
    });
  });
};

/***/ }),

/***/ "./redux/fbConfig.js":
/*!***************************!*\
  !*** ./redux/fbConfig.js ***!
  \***************************/
/*! exports provided: db, auth, storage, provider, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "db", function() { return db; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return auth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storage", function() { return storage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "provider", function() { return provider; });
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
const provider = new firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.auth.GoogleAuthProvider();

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
  value: "drama",
  id: "MKORaSY4m1RnK3kSSLDT"
}, {
  name: "Comedy",
  value: "comedy",
  id: "bDXYzqnUtpLZDNv99XTq"
}, {
  name: "Horror",
  value: "horror",
  id: "wHEuUmXjJYZUt4uoeu2n"
}, {
  name: "Romance",
  value: "romance",
  id: "6GCRSMJHcmFlTvfbtMtJ"
}, {
  name: "Sci-fi",
  value: "sci-fi",
  id: "rBU8Nd35AMpnd1ok94HC"
}, {
  name: "Fantasy",
  value: "fantasy",
  id: "eALFc7teavzjUMjVdqt8"
}, {
  name: "Humor",
  value: "humor",
  id: "B5Efox2jEjNpywxuo3KR"
}, {
  name: "Action",
  value: "action",
  id: "EHgCk88Wl1Y4a3LW0Jcp"
}, {
  name: "Thriller",
  value: "thriller",
  id: "F0SJi8NqbtQlT9IPiqxf"
}, {
  name: "Supernatural",
  value: "supernatural",
  id: "IcbLNSOFgVBbcU4e884n"
}, {
  name: "Adventure",
  value: "adventure",
  id: "LPg3uNujLk6jaBFfjMQY"
}, {
  name: "Mystery",
  value: "mystery",
  id: "Zrx8V24iaaC0jTndqV7G"
}, {
  name: "Western",
  value: "western",
  id: "bIF4GwpKSJFpst8birHr"
}, {
  name: "History",
  value: "history",
  id: "da4dbvwvDDaJdGPOW7QF"
}, {
  name: "Crime",
  value: "crime",
  id: "oIBGBUyDGH0djcQSSnws"
}, {
  name: "Fanfiction",
  value: "fanfiction",
  id: "zAr1eHniFgWW0xAqj1ti"
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
  GET_FEATURED_STORIES: "GET_FEATURED_STORIES",
  GET_USERS_FROM_SEARCH: "GET_USERS_FROM_SEARCH",
  GET_POPULAR_USERS: "GET_POPULAR_USERS",
  GET_FAVORITE_STORIES: "GET_FAVORITE_STORIES",
  ADD_STORY: "ADD_STORY",
  EDIT_STORY: "EDIT_STORY",
  DELETE_STORY: "DELETE_STORY",
  RATE_STORY: "RATE_STORY",
  GET_USER_RATE: "GET_USER_RATE",
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
  GET_POPULAR_CHARACTERS: "GET_POPULAR_CHARACTERS",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29tbW9uL0NhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb21tb24vQ2hhcmFjdGVyQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbW1vbi9HcmlkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29tbW9uL0xvY2F0aW9uQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbW1vbi9QYWdpbmF0aW9uLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29tbW9uL1VzZXJDYXJkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaG9jL0xvYWRpbmdTY3JlZW4uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9ob2MvUmVkaXJlY3RDb21wLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcHJvZmlsZS9CYW5uZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wcm9maWxlL0NoYXJhY3RlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wcm9maWxlL0Zhdm9yaXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Byb2ZpbGUvRm9sbG93ZXJzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcHJvZmlsZS9MaW5rQ29tcC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Byb2ZpbGUvTG9jYXRpb25zLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcHJvZmlsZS9TZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Byb2ZpbGUvU29ydElucHV0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcHJvZmlsZS9TdG9yaWVzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcHJvZmlsZS9UYWJzLmpzIiwid2VicGFjazovLy8uL2hvb2tzL3VzZXJIb29rcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3dpdGgtcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwL2luZGV4LmpzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbWl0dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZXNjYXBlLXBhdGgtZGVsaW1pdGVycy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhdGgtbWF0Y2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcHJlcGFyZS1kZXN0aW5hdGlvbi50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yZXNvbHZlLXJld3JpdGVzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9wcm9maWxlLy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9wcm9maWxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3JlZHV4L2FjdGlvbnMvY2hhcmFjdGVyc0FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWN0aW9ucy9zdG9yaWVzQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25zL3VzZXJBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3JlZHV4L2ZiQ29uZmlnLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9kdW1teS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW50LWRlc2lnbi9pY29uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9hcHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9hdXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2Uvc3RvcmFnZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVzcG9uc2l2ZS1tYXNvbnJ5XCIiXSwibmFtZXMiOlsiQ2FyZCIsInN0b3J5IiwidHlwZSIsImJhbm5lciIsImR1bW15Iiwibm9JbWFnZSIsImNhdGVnb3J5IiwiY2F0ZWdvcmllcyIsIm1hcCIsImNhdCIsIm1hdHVyZSIsInB1YmxpYyIsInRpdGxlIiwic3VtbWFyeSIsImxlbmd0aCIsInNsaWNlIiwiYXV0aG9yTmFtZSIsImNoYXB0ZXJzQ291bnQiLCJsaWtlc0NvdW50IiwiY29tbWVudHNDb3VudCIsIkNoYXJhY3RlckNhcmQiLCJjaGFyYWN0ZXIiLCJyZW1vdmVDaGFyYWN0ZXIiLCJpZCIsImltYWdlIiwiZmlyc3RuYW1lIiwibGFzdG5hbWUiLCJyZWxhdGlvbiIsIlN0b3JpZXNHcmlkIiwic3RvcmllcyIsImd1dHRlciIsImNvbHVtbnNDb3VudEJyZWFrUG9pbnRzIiwiRW1wdHkiLCJQUkVTRU5URURfSU1BR0VfU0lNUExFIiwiTWluaUdyaWQiLCJjb3ZlciIsIlVzZXJHcmlkIiwidXNlcnMiLCJ4bCIsImxnIiwieHMiLCJzbSIsIm1kIiwidSIsIkxvY2F0aW9uR3JpZCIsImxvY2F0aW9ucyIsInh4bCIsImMiLCJDaGFyYWN0ZXJHcmlkIiwiY2hhcmFjdGVycyIsIkxvY2F0aW9uQ2FyZCIsImxvY2F0aW9uIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJSZWFjdCIsInVzZVN0YXRlIiwibmFtZSIsInN0b3J5VGl0bGUiLCJkZXNjcmlwdGlvbiIsInN0b3J5SWQiLCJQYWdpbmF0aW9uIiwiZGF0YSIsIml0ZW1UeXBlIiwicGFnaW5hdGlvbiIsInNldFBhZ2luYXRpb24iLCJjdXJyZW50UGFnZSIsImRhdGFzUGVyUGFnZSIsImluZGV4T2ZMYXN0RGF0YSIsImluZGV4T2ZGaXJzdERhdGEiLCJjdXJyZW50RGF0YXMiLCJoYW5kbGVDbGljayIsImUiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsIk51bWJlciIsInJlbmRlckRhdGFzIiwicGFnZU51bWJlcnMiLCJpIiwiTWF0aCIsImNlaWwiLCJwdXNoIiwidG90YWwiLCJVc2VyQ2FyZCIsInVzZXIiLCJ1c2VybmFtZSIsIkxvYWRpbmdTY3JlZW4iLCJjaGlsZHJlbiIsImxvYWRpbmciLCJSZWRpcmVjdENvbXAiLCJjb25kaXRpb24iLCJ2ZXJpZnlFbWFpbCIsImhyZWYiLCJCYW5uZXIiLCJvcGVuU2V0dGluZ3MiLCJwcm9maWxlIiwiZmF2QXV0aG9ycyIsImZvbGxvd2VycyIsImNoYW5nZUZhdlRhYiIsImZhdlRhYiIsInNldEN1cnJlbnRUYWIiLCJjb250ZXh0IiwiaXNGb2xsb3dpbmciLCJmb2xsb3dVc2VyIiwidW5mb2xsb3dVc2VyIiwiYXV0aCIsImF1dGhvcnMiLCJiaW9ncmFwaHkiLCJmYWNlYm9vayIsInR3aXR0ZXIiLCJpbnN0YWdyYW0iLCJkZXZpYW50YXJ0IiwiQ2hhcmFjdGVycyIsInNldERhdGEiLCJ1c2VFZmZlY3QiLCJvcHRpb25zIiwidmFsdWUiLCJGYXZvcml0ZXMiLCJmYXZzIiwiaXNMb2FkaW5nIiwiZmF2IiwiRm9sbG93ZXJzIiwiaXRlbXMiLCJMaW5rQ29tcCIsImxhYmVsIiwiaW5mbyIsInNldEluZm8iLCJ2YWxpZGF0ZV91cmwiLCJ1cmwiLCJ0ZXN0IiwiZXJyb3JzIiwidGFyZ2V0IiwiTG9jYXRpb25zIiwiVGFiUGFuZSIsIlRhYnMiLCJnZXRCYXNlNjQiLCJpbWciLCJjYWxsYmFjayIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJhZGRFdmVudExpc3RlbmVyIiwicmVzdWx0IiwicmVhZEFzRGF0YVVSTCIsImJlZm9yZVVwbG9hZCIsImZpbGUiLCJpc0pwZ09yUG5nIiwibWVzc2FnZSIsImVycm9yIiwiaXNMdDJNIiwic2l6ZSIsIlNldHRpbmdzIiwiZGVsZXRlQWNjb3VudCIsInNldE9wZW5TZXR0aW5ncyIsImNoYW5nZVByb2ZpbGUiLCJmb3JtIiwiRm9ybSIsInVzZUZvcm0iLCJpbWFnZVVybCIsInNldEltYWdlVXJsIiwic2V0TG9hZGluZyIsImhhbmRsZUNoYW5nZSIsImltYWdlSW5mbyIsInN0YXR1cyIsIm9yaWdpbkZpbGVPYmoiLCJ1cGxvYWRCdXR0b24iLCJtYXJnaW5Ub3AiLCJzdWJtaXQiLCJwYXNzd29yZEVycm9ycyIsImdldEZpZWxkc0Vycm9yIiwibmV3UGFzc3dvcmQiLCJnZXRGaWVsZFZhbHVlIiwiYWN0dWFsUGFzc3dvcmQiLCJjbG9zZU1vZGFsIiwicmVxdWlyZWQiLCJ2YWxpZGF0b3IiLCJfIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJFcnJvciIsIm1hcmdpbiIsInNob3dSZW1vdmVJY29uIiwicmVtb3ZlSWNvbiIsIndpZHRoIiwiaGVpZ2h0Iiwib2JqZWN0Rml0IiwiU29ydElucHV0IiwiaXRlbURhdGEiLCJzb3J0QXJyYXkiLCJuZXdBcnIiLCJzb3J0IiwiYSIsImIiLCJjcmVhdGVkQXQiLCJEYXRlIiwic2Vjb25kcyIsImtleUEiLCJ0b0xvd2VyQ2FzZSIsImtleUIiLCJjb25zb2xlIiwibG9nIiwidmFsIiwib3B0aW9uIiwiU3RvcmllcyIsInRhYnMiLCJjaGFuZ2VUYWIiLCJjdXJyZW50VGFiIiwidGFiIiwiYXV0aENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiUHJvdmlkZUF1dGgiLCJ1c2VQcm92aWRlQXV0aCIsInVzZUF1dGgiLCJ1c2VDb250ZXh0Iiwic2V0VXNlciIsInNldElzTG9hZGluZyIsInNldEVycm9ycyIsInBhc3N3b3JkIiwiZW1haWwiLCJzaWduaW4iLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsInRoZW4iLCJyZXNwb25zZSIsImNhdGNoIiwiZXJyIiwiY29kZSIsInNpZ25JbldpdGhHb29nbGUiLCJzaWduSW5XaXRoUG9wdXAiLCJwcm92aWRlciIsInNpZ251cCIsImNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCIsImRiIiwiY29sbGVjdGlvbiIsImRvYyIsInVpZCIsInNldCIsImJhZGdlcyIsImZpcmViYXNlIiwiZmlyZXN0b3JlIiwiRmllbGRWYWx1ZSIsInNlcnZlclRpbWVzdGFtcCIsInN1c3BlbmRlZCIsImN1cnJlbnRVc2VyIiwic2VuZEVtYWlsVmVyaWZpY2F0aW9uIiwic2lnbm91dCIsInNpZ25PdXQiLCJzZW5kUGFzc3dvcmRSZXNldEVtYWlsIiwiY29uZmlybVBhc3N3b3JkUmVzZXQiLCJjaGFuZ2VVc2VybmFtZSIsInVwZGF0ZSIsImRlbGV0ZSIsInVuc3Vic2NyaWJlIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwib25TbmFwc2hvdCIsImV4aXN0cyIsImxpc3RlbmVycyIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwicHJlZmV0Y2hlZCIsImNhY2hlZE9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiY2IiLCJyb290TWFyZ2luIiwibGlzdGVuVG9JbnRlcnNlY3Rpb25zIiwib2JzZXJ2ZXIiLCJnZXRPYnNlcnZlciIsInJvdXRlciIsImV2ZW50Iiwibm9kZU5hbWUiLCJpc01vZGlmaWVkRXZlbnQiLCJzY3JvbGwiLCJhcyIsInJlcGxhY2UiLCJzdWNjZXNzIiwiZG9jdW1lbnQiLCJhcmdzIiwia2V5IiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwiT2JqZWN0IiwicHJvcHMiLCJjcmVhdGVQcm9wRXJyb3IiLCJvcHRpb25hbFByb3BzR3VhcmQiLCJzaGFsbG93IiwicGFzc0hyZWYiLCJwcmVmZXRjaCIsIm9wdGlvbmFsUHJvcHMiLCJoYXNXYXJuZWQiLCJwIiwicGF0aG5hbWUiLCJyZXNvbHZlZEFzIiwiY2hpbGRFbG0iLCJpc1ByZWZldGNoZWQiLCJjaGlsZCIsIkNoaWxkcmVuIiwiY2hpbGRQcm9wcyIsInJlZiIsImVsIiwic2V0Q2hpbGRFbG0iLCJvbkNsaWNrIiwibGlua0NsaWNrZWQiLCJwcmlvcml0eSIsIkxpbmsiLCJwYXRoIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJwcm9jZXNzIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImdldCIsIlJvdXRlciIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJBcnJheSIsIkNvbXBvc2VkQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiV2l0aFJvdXRlcldyYXBwZXIiLCJhbGwiLCJvbiIsIm9mZiIsImVtaXQiLCJoYW5kbGVyIiwiYmFzZVBhdGgiLCJjYW5jZWxsZWQiLCJwcmVmaXgiLCJhZGRQYXRoUHJlZml4IiwibG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsImhhc0Jhc2VQYXRoIiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJhc1BhdGhuYW1lIiwicGFyYW1zIiwicGFyYW0iLCJyZXBsYWNlZCIsInJlcGVhdCIsIm9wdGlvbmFsIiwiZXNjYXBlUGF0aERlbGltaXRlcnMiLCJmaWx0ZXJlZFF1ZXJ5IiwicXVlcnkiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmaW5hbFVybCIsImludGVycG9sYXRlZEFzIiwiaW50ZXJwb2xhdGVBcyIsImhhc2giLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJyZXNvbHZlZEhyZWYiLCJyZXNvbHZlQXMiLCJQQUdFX0xPQURfRVJST1IiLCJTeW1ib2wiLCJhZGRCYXNlUGF0aCIsInJlc29sdmVIcmVmIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJjcmVkZW50aWFscyIsInJlcyIsImF0dGVtcHRzIiwiZmV0Y2hSZXRyeSIsImlzU2VydmVyUmVuZGVyIiwibWFya0xvYWRpbmdFcnJvciIsImNvbnN0cnVjdG9yIiwicm91dGUiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIl9pbkZsaWdodFJvdXRlIiwiX3NoYWxsb3ciLCJsb2NhbGUiLCJsb2NhbGVzIiwiZGVmYXVsdExvY2FsZSIsInN0YXRlIiwic3R5bGVTaGVldHMiLCJfX05fU1NHIiwiaW5pdGlhbFByb3BzIiwiX19OX1NTUCIsIkNvbXBvbmVudCIsIl9fTkVYVF9EQVRBX18iLCJyZWxvYWQiLCJiYWNrIiwicHJlcGFyZVVybEFzIiwiaXNMb2NhbFVSTCIsIlNUIiwicGVyZm9ybWFuY2UiLCJhZGRMb2NhbGUiLCJjbGVhbmVkQXMiLCJkZWxMb2NhbGUiLCJkZWxCYXNlUGF0aCIsInBhZ2VzIiwiX19yZXdyaXRlcyIsInBhcnNlZCIsIm1ldGhvZCIsInBvdGVudGlhbEhyZWYiLCJwYXJzZWRBcyIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwicm91dGVJbmZvIiwiZGVzdGluYXRpb24iLCJwYXJzZWRIcmVmIiwiYXBwQ29tcCIsImNoYW5nZVN0YXRlIiwiX19OIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsInBhZ2UiLCJjYWNoZWRSb3V0ZUluZm8iLCJyZXF1aXJlIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZGF0YUhyZWYiLCJiZWZvcmVQb3BTdGF0ZSIsIm9ubHlBSGFzaENoYW5nZSIsIm5ld0hhc2giLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic2Nyb2xsVG9IYXNoIiwiaWRFbCIsIm5hbWVFbCIsInVybElzTmV3IiwiX3Jlc29sdmVIcmVmIiwiYXBwbHlCYXNlUGF0aCIsImNsZWFuUGF0aG5hbWUiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJfZ2V0RGF0YSIsImZuIiwiX2dldFN0YXRpY0RhdGEiLCJmZXRjaE5leHREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5Iiwic2VnbWVudCIsImNoYXIiLCJlbmNvZGVVUklDb21wb25lbnQiLCJzbGFzaGVkUHJvdG9jb2xzIiwicHJvdG9jb2wiLCJ1cmxPYmoiLCJob3N0IiwiaG9zdG5hbWUiLCJTdHJpbmciLCJxdWVyeXN0cmluZyIsInNlYXJjaCIsIlRFU1RfUk9VVEUiLCJEVU1NWV9CQVNFIiwicmVzb2x2ZWRCYXNlIiwib3JpZ2luIiwibWF0Y2hlck9wdGlvbnMiLCJzZW5zaXRpdmUiLCJkZWxpbWl0ZXIiLCJjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zIiwic3RyaWN0IiwiY3VzdG9tUm91dGUiLCJrZXlzIiwibWF0Y2hlclJlZ2V4IiwicGF0aFRvUmVnZXhwIiwibWF0Y2hlciIsInBhcnNlZERlc3RpbmF0aW9uIiwiZGVzdFF1ZXJ5IiwiZGVzdFBhdGgiLCJkZXN0UGF0aFBhcmFtS2V5cyIsImRlc3RQYXRoUGFyYW1zIiwiZGVzdGluYXRpb25Db21waWxlciIsInZhbGlkYXRlIiwic3RyT3JBcnJheSIsInF1ZXJ5Q29tcGlsZXIiLCJwYXJhbUtleXMiLCJhcHBlbmRQYXJhbXNUb1F1ZXJ5Iiwic2hvdWxkQWRkQmFzZVBhdGgiLCJuZXdVcmwiLCJzZWFyY2hQYXJhbXMiLCJpc05hTiIsIml0ZW0iLCJzdHJpbmdpZnlVcmxRdWVyeVBhcmFtIiwic2VhcmNoUGFyYW1zTGlzdCIsImN1c3RvbVJvdXRlTWF0Y2hlciIsInJld3JpdGUiLCJkZXN0UmVzIiwicmUiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJzbHVnTmFtZSIsImciLCJncm91cHMiLCJtIiwic3RyIiwic2VnbWVudHMiLCJub3JtYWxpemVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwicGFyc2VQYXJhbWV0ZXIiLCJwb3MiLCJlc2NhcGVSZWdleCIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJwYXJzZUludCIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiUHJvZmlsZSIsImdldFByb2ZpbGUiLCJnZXRVc2VyU3RvcmllcyIsImdldElzRm9sbG93aW5nIiwiZ2V0VXNlckNoYXJhY3RlcnMiLCJnZXRGYXZvcml0ZUF1dGhvcnMiLCJnZXRGYXZvcml0ZUNoYXJhY3RlcnMiLCJnZXRGYXZvcml0ZVN0b3JpZXMiLCJnZXRVc2VyTG9jYXRpb25zIiwiZ2V0Rm9sbG93ZXJzIiwiZmF2Q2hhcmFjdGVycyIsImZhdlN0b3JpZXMiLCJzZXRGYXZUYWIiLCJmYXZvcml0ZVN0b3JpZXMiLCJzZXRGYXZvcml0ZVN0b3JpZXMiLCJmYXZvcml0ZUNoYXJhY3RlcnMiLCJzZXRGYXZvcml0ZUNoYXJhY3RlcnMiLCJ1c2VSb3V0ZXIiLCJmaWx0ZXIiLCJzIiwiYXV0aG9ySWQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJvd25Qcm9wcyIsInVzZXJTdG9yaWVzIiwidXNlckNoYXJhY3RlcnMiLCJ1c2VyTG9jYXRpb25zIiwiY29ubmVjdCIsImVtYWlsVmVyaWZpZWQiLCJtYXJnaW5Cb3R0b20iLCJnZXRDaGFyYWN0ZXIiLCJkaXNwYXRjaCIsInJlbEFyciIsInN0b3J5QXJyIiwicmVsYXRpdmVzIiwicmVsYXRpdmVzQXJyIiwicmVsUXVlcmllcyIsImZvckVhY2giLCJyZWwiLCJmaW5kIiwiY2hhcmFjdGVyX2lkIiwibWFpblF1ZXJ5Iiwid2hlcmUiLCJzZWNvbmRhcnlRdWVyeSIsImFsbFN0b3J5IiwiZG9jcyIsImNvbmNhdCIsInR5cGVzIiwiR0VUX0NIQVJBQ1RFUiIsInBheWxvYWQiLCJyIiwiY2hhcmFFeGlzdHMiLCJhZGRDaGFyYWN0ZXIiLCJBRERfQ0hBUkFDVEVSIiwiY2hhcmFJZCIsImFkZCIsImxpa2VzIiwiZGlzbGlrZXMiLCJpbWFnZU5hbWUiLCJzdG9yYWdlIiwicHV0IiwiZ2V0RG93bmxvYWRVUkwiLCJjaGFyYWN0ZXJJZCIsImVkaXRDaGFyYWN0ZXIiLCJFRElUX0NIQVJBQ1RFUiIsImxvYWRpbmdDaGFyYWN0ZXIiLCJkZWxldGVDaGFyYWN0ZXIiLCJERUxFVEVfQ0hBUkFDVEVSIiwiZGVsZXRlZCIsInVzZXJJZCIsIkdFVF9VU0VSX0NIQVJBQ1RFUlMiLCJmYXZBcnIiLCJmYXZVc2VycyIsIkdFVF9GQVZPUklURV9DSEFSQUNURVJTIiwiaXNDaGFyYWN0ZXJGYXZvcml0ZSIsImNoYXJJZCIsInNuYXBzaG90IiwiYW5zd2VyIiwiSVNfQ0hBUkFDVEVSX0ZBVk9SSVRFIiwibG9hZGluZ0ZhdiIsImFkZENoYXJhY3RlclRvRmF2b3JpdGUiLCJjaGFyYWN0ZXJOYW1lIiwic2VuZGVyIiwic2VuZGVySWQiLCJyZW1vdmVDaGFyYWN0ZXJGcm9tRmF2b3JpdGUiLCJnZXRDaGFyYWN0ZXJzSW5TdG9yeSIsIkdFVF9TVE9SWV9DSEFSQUNURVJTIiwic2Vjb25kYXJ5Q2hhcmFjdGVycyIsIm1haW5BcnIiLCJtYWluQ2hhcmFjdGVycyIsInN1Ym1pdENoYXJhdGVyRmVlZGJhY2siLCJ1c2VyQ29tbWVudCIsImFsbEluZm8iLCJjb250ZW50IiwiU1VCTUlUX0NPTU1FTlQiLCJnZXRDaGFyYWN0ZXJDb21tZW50cyIsImNvbW1lbnRzIiwib3JkZXJCeSIsImNvbW0iLCJ1c2VyUXVlcmllcyIsImNvbW1lbnQiLCJ1c2VySW1hZ2UiLCJkIiwiR0VUX0NPTU1FTlRTIiwibG9hZGluZ0NvbW1lbnRzIiwiZGVsZXRlQ2hhcmFjdGVyQ29tbWVudCIsInJhdGVDb21tZW50IiwiY29tbWVudElkIiwiUkFURV9DT01NRU5UIiwicmF0ZWQiLCJpc0xpa2VkIiwibGlrZWRCeSIsImluY2x1ZGVzIiwiaXNEaXNsaWtlZCIsImRpc2xpa2VkQnkiLCJnZXRDaGFyYWN0ZXJzRnJvbVNlYXJjaCIsIkdFVF9DSEFSQUNURVJTX0ZST01fU0VBUkNIIiwic3BsaXQiLCJzZWFyY2hUZXJtIiwiZmlyc3RuYW1lSW5jbHVkZWQiLCJzb21lIiwid29yZCIsImluZGV4T2YiLCJsYXN0bmFtZUluY2x1ZGVkIiwiYXV0aG9ySW5jbHVkZWQiLCJldmVyeSIsIm9yQXV0aG9ySW5jbHVkZWQiLCJnZXRQb3B1bGFyQ2hhcmFjdGVycyIsImxpbWl0IiwiR0VUX1BPUFVMQVJfQ0hBUkFDVEVSUyIsImdldFN0b3J5IiwibWFpbiIsInNlY29uZGFyeSIsInNlY29uZGFyeUFyciIsIm1haW5SZXMiLCJzZWNvbmRhcnlSZXMiLCJkb2N1IiwiR0VUX1NUT1JZIiwic3RvcnlFeGlzdHMiLCJESVNQQVRDSF9FUlJPUiIsImFkZFN0b3J5IiwiQUREX1NUT1JZIiwib25lU2hvdCIsImZlYXR1cmVkIiwibm90ZSIsImxhc3RVcGRhdGVkIiwiam9pbiIsImVkaXRTdG9yeSIsIkVESVRfU1RPUlkiLCJsb2FkaW5nU3RvcnkiLCJsb2NhdGlvblF1ZXJ5IiwiZGVsZXRlU3RvcnkiLCJERUxFVEVfU1RPUlkiLCJHRVRfVVNFUl9TVE9SSUVTIiwiR0VUX0ZBVk9SSVRFX1NUT1JJRVMiLCJpc1N0b3J5RmF2b3JpdGUiLCJJU19TVE9SWV9GQVZPUklURSIsImFkZFN0b3J5VG9GYXZvcml0ZSIsInJlbW92ZVN0b3J5RnJvbUZhdm9yaXRlIiwiZ2V0U3RvcnlDaGFyYWN0ZXJzIiwiZ2V0SG9tZVN0b3JpZXMiLCJHRVRfSE9NRV9TVE9SSUVTIiwiZ2V0RmVhdHVyZWRTdG9yaWVzIiwiR0VUX0ZFQVRVUkVEX1NUT1JJRVMiLCJnZXRTdG9yaWVzQnlMZXR0ZXIiLCJsZXR0ZXIiLCJhbHBoYWJldCIsIkdFVF9TVE9SSUVTX0ZST01fU0VBUkNIIiwiZW5kIiwiZmluZEluZGV4Iiwic3RhcnRBdCIsInRvVXBwZXJDYXNlIiwiZW5kQXQiLCJnZXRTdG9yaWVzQnlDYXRlZ29yeSIsImFkZENoYXB0ZXIiLCJBRERfQ0hBUFRFUiIsIm51bWJlclVzZWQiLCJjaGFwdGVyIiwibnVtYmVyIiwidm90ZXJzIiwidm90ZXNDb3VudCIsImNoYXBJZCIsImVkaXRDaGFwdGVyIiwiY2hhcGlkIiwiRURJVF9DSEFQVEVSIiwiZGVsZXRlQ2hhcHRlciIsIkRFTEVURV9DSEFQVEVSIiwibG9hZGluZ0NoYXB0ZXIiLCJnZXRDaGFwdGVyIiwiY2hhcCIsImNoYXJhUXVlcnkiLCJsb2NRdWVyeSIsImNoYXJhY3RlcnNJbkNoYXBlciIsImxvY2F0aW9uc0luQ2hhcGVyIiwiY2hhcE51bWJlciIsInByZXZDaGFwIiwibmV4dENoYXAiLCJsb2MiLCJwcmV2IiwibmV4dCIsImwiLCJHRVRfQ0hBUFRFUiIsImNoYXB0ZXJFeGlzdHMiLCJnZXRDaGFwdGVycyIsImFyciIsIkdFVF9DSEFQVEVSUyIsImFkZExvY2F0aW9uIiwiQUREX0xPQ0FUSU9OIiwibG9hZGluZ0xvYyIsImxvY0lkIiwiZWRpdExvY2F0aW9uIiwiZ2V0TG9jYXRpb24iLCJHRVRfTE9DQVRJT04iLCJsb2NhdGlvbkV4aXN0cyIsImRlbGV0ZUxvY2F0aW9uIiwiYmF0Y2giLCJjb21taXQiLCJHRVRfVVNFUl9MT0NBVElPTlMiLCJnZXRTdG9yeUxvY2F0aW9ucyIsIkdFVF9TVE9SWV9MT0NBVElPTlMiLCJnZXRDb21tZW50cyIsInNuYXAiLCJxdWVyaWVzIiwic3VibWl0Q29tbWVudCIsInVzZXJEZWxldGVkIiwiZGVsZXRlQ29tbWVudCIsInJhdGVTdG9yeSIsImdldFVzZXJOb3RlIiwiR0VUX1VTRVJfUkFURSIsImdldFN0b3JpZXNGcm9tU2VhcmNoIiwiaXNJbmNsdWRlZCIsIm9ySW5jbHVkZWQiLCJsb2dfaW4iLCJHRVRfUFJPRklMRSIsImFkZGVkT24iLCJyZWNpcGllbnQiLCJHRVRfRkFWT1JJVEVfQVVUSE9SUyIsIkdFVF9GT0xMT1dFUlMiLCJJU19GT0xMT1dJTkciLCJpc0Zhdm9yaXRlIiwibmV3Rm9sbG93ZXIiLCJ3YXJuaW5nIiwic2V0T3BlbiIsIm5ld0luZm8iLCJyZWF1dGhlbnRpY2F0ZVdpdGhDcmVkZW50aWFsIiwiRW1haWxBdXRoUHJvdmlkZXIiLCJjcmVkZW50aWFsIiwidXBkYXRlUGFzc3dvcmQiLCJnZXRVc2Vyc0Zyb21TZWFyY2giLCJHRVRfVVNFUlNfRlJPTV9TRUFSQ0giLCJnZXRQb3B1bGFyVXNlcnMiLCJHRVRfUE9QVUxBUl9VU0VSUyIsInByb2RDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwiZGF0YWJhc2VVUkwiLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIkZJUkVCQVNFX0FQUF9JRCIsImRldkNvbmZpZyIsImNvbmZpZyIsImFwcHMiLCJpbml0aWFsaXplQXBwIiwiR29vZ2xlQXV0aFByb3ZpZGVyIiwiQ0FURUdPUklFUyIsIkNPUFlSSUdIVFMiLCJMQU5HVUFHRVMiLCJTVEFUVVMiLCJMT0dJTiIsIlJFR0lTVEVSIiwiUkFURV9TVE9SWSIsIkdFVF9DSEFSQUNURVJfQ09NTUVOVFMiLCJFRElUX0xPQ0FUSU9OIiwiREVMRVRFX0xPQ0FUSU9OIiwiR0VUX05PVElGSUNBVElPTlMiLCJwZXJzb24iLCJwb3N0ZXIiLCJhdmF0YXIiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ3hGQSx3RTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTs7QUFFQSxNQUFNQSxJQUFJLEdBQUcsQ0FBQztBQUFFQyxPQUFGO0FBQVNDO0FBQVQsQ0FBRCxLQUFxQjtBQUFBOztBQUNoQyxTQUNFO0FBQVEsYUFBUyxFQUFDLGlCQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxPQUFHLEVBQUVELEtBQUssQ0FBQ0UsTUFBTixHQUFlRixLQUFLLENBQUNFLE1BQXJCLEdBQThC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QUFSO0FBQWlCMkQsT0FBSyxFQUFFO0FBQXhCLENBeER1QixFQXlEdkI7QUFBRTNELE1BQUksRUFBRSxRQUFSO0FBQWtCMkQsT0FBSyxFQUFFO0FBQXpCLENBekR1QixFQTBEdkI7QUFBRTNELE1BQUksRUFBRSxPQUFSO0FBQWlCMkQsT0FBSyxFQUFFO0FBQXhCLENBMUR1QixFQTJEdkI7QUFBRTNELE1BQUksRUFBRSxXQUFSO0FBQXFCMkQsT0FBSyxFQUFFO0FBQTVCLENBM0R1QixFQTREdkI7QUFBRTNELE1BQUksRUFBRSxVQUFSO0FBQW9CMkQsT0FBSyxFQUFFO0FBQTNCLENBNUR1QixFQTZEdkI7QUFBRTNELE1BQUksRUFBRSxTQUFSO0FBQW1CMkQsT0FBSyxFQUFFO0FBQTFCLENBN0R1QixFQThEdkI7QUFBRTNELE1BQUksRUFBRSxXQUFSO0FBQXFCMkQsT0FBSyxFQUFFO0FBQTVCLENBOUR1QixFQStEdkI7QUFBRTNELE1BQUksRUFBRSxVQUFSO0FBQW9CMkQsT0FBSyxFQUFFO0FBQTNCLENBL0R1QixFQWdFdkI7QUFBRTNELE1BQUksRUFBRSxRQUFSO0FBQWtCMkQsT0FBSyxFQUFFO0FBQXpCLENBaEV1QixFQWlFdkI7QUFBRTNELE1BQUksRUFBRSxhQUFSO0FBQXVCMkQsT0FBSyxFQUFFO0FBQTlCLENBakV1QixFQWtFdkI7QUFBRTNELE1BQUksRUFBRSxZQUFSO0FBQXNCMkQsT0FBSyxFQUFFO0FBQTdCLENBbEV1QixFQW1FdkI7QUFBRTNELE1BQUksRUFBRSxhQUFSO0FBQXVCMkQsT0FBSyxFQUFFO0FBQTlCLENBbkV1QixFQW9FdkI7QUFBRTNELE1BQUksRUFBRSxNQUFSO0FBQWdCMkQsT0FBSyxFQUFFO0FBQXZCLENBcEV1QixFQXFFdkI7QUFBRTNELE1BQUksRUFBRSxZQUFSO0FBQXNCMkQsT0FBSyxFQUFFO0FBQTdCLENBckV1QixFQXNFdkI7QUFBRTNELE1BQUksRUFBRSxTQUFSO0FBQW1CMkQsT0FBSyxFQUFFO0FBQTFCLENBdEV1QixFQXVFdkI7QUFBRTNELE1BQUksRUFBRSxL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QTNCO0FBQ0EsTUFBTWhKLHVCQUF1QixHQUFHLHlCQUFoQztBQUNBLE1BQU1hLG9CQUFvQixHQUFHLHNCQUE3QjtBQUVBLE1BQU15SCxZQUFZLEdBQUcsY0FBckI7QUFFQSxNQUFNNkIsb0JBQW9CLEdBQUcsc0JBQTdCO0FBQ0EsTUFBTUMsYUFBYSxHQUFHLGVBQXRCO0FBRUEsTUFBTWxHLGNBQWMsR0FBRyxnQkFBdkIsQzs7Ozs7Ozs7Ozs7O0FDL1NQO0FBQUE7QUFBTyxNQUFNNXBCLEtBQUssR0FBRztBQUNuQnN5QixRQUFNLEVBQ0oseUVBRmlCO0FBR25CdndCLE9BQUssRUFDSCxnSEFKaUI7QUFLbkJxQixNQUFJLEVBQUUsZUFMYTtBQU1uQm12QixRQUFNLEVBQUUsa0VBTlc7QUFPbkJDLFFBQU0sRUFBRSx5REFQVztBQVFuQnZ5QixTQUFPLEVBQUU7QUFSVSxDQUFkLEM7Ozs7Ozs7Ozs7O0FDQVAsOEM7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEscUQiLCJmaWxlIjoicGFnZXMvcHJvZmlsZS9baWRdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9wcm9maWxlL1tpZF0vaW5kZXguanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsImltcG9ydCB7IFRvb2x0aXAsIFNwYWNlIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgZHVtbXkgfSBmcm9tIFwiLi4vLi4vdXRpbHMvZHVtbXlcIjtcclxuXHJcbmNvbnN0IENhcmQgPSAoeyBzdG9yeSwgdHlwZSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwiY2FyZCBzdG9yeS1jYXJkXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxpbWcgc3JjPXtzdG9yeS5iYW5uZXIgPyBzdG9yeS5iYW5uZXIgOiBkdW1teS5ub0ltYWdlfSBhbHQ9XCJpbWFnZVwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZmlnY2FwdGlvbj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdC1ibG9ja1wiPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge3N0b3J5LmNhdGVnb3J5ID8gKFxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRhZ1wiPntzdG9yeS5jYXRlZ29yeX08L3NwYW4+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgc3RvcnkuY2F0ZWdvcmllcy5tYXAoKGNhdCkgPT4gPHNwYW4gY2xhc3NOYW1lPVwidGFnXCI+e2NhdH08L3NwYW4+KVxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8U3BhY2UgYWxpZ249XCJjZW50ZXJcIiBzaXplPXs4fT5cclxuICAgICAgICAgICAge3N0b3J5Lm1hdHVyZSAmJiAoXHJcbiAgICAgICAgICAgICAgPFRvb2x0aXAgdGl0bGU9XCJNYXR1cmUgY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWF0dXJlXCI+TTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHshc3RvcnkucHVibGljICYmIChcclxuICAgICAgICAgICAgICA8VG9vbHRpcCB0aXRsZT1cIlByaXZhdGUgU3RvcnlcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1hdHVyZVwiPlA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9TcGFjZT5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGgzPntzdG9yeT8udGl0bGV9PC9oMz5cclxuICAgICAgICB7dHlwZSAhPT0gXCJtaW5pXCIgJiYgKFxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAge3N0b3J5Py5zdW1tYXJ5Py5sZW5ndGggPiAxNTBcclxuICAgICAgICAgICAgICA/IGAke3N0b3J5LnN1bW1hcnkuc2xpY2UoMCwgMTUwKX0uLi5gXHJcbiAgICAgICAgICAgICAgOiBzdG9yeS5zdW1tYXJ5fVxyXG4gICAgICAgICAgICB7IXN0b3J5LnN1bW1hcnkgJiYgXCJObyBzdW1tYXJ5IHlldFwifVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAge3R5cGUgIT09IFwicHJpdmF0ZVByb2ZpbGVcIiAmJiAoXHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhdXRob3JcIj5BdXRob3I6IHtzdG9yeS5hdXRob3JOYW1lfTwvc3Bhbj5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdW50XCI+XHJcbiAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibnVtYmVyXCI+e3N0b3J5LmNoYXB0ZXJzQ291bnR9IDwvcD57XCIgXCJ9XHJcbiAgICAgICAgICAgIDxpb24taWNvbiBuYW1lPVwiYm9va1wiPjwvaW9uLWljb24+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibnVtYmVyXCI+e3N0b3J5Lmxpa2VzQ291bnR9IDwvcD57XCIgXCJ9XHJcbiAgICAgICAgICAgIDxpb24taWNvbiBuYW1lPVwiaGVhcnRcIj48L2lvbi1pY29uPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm51bWJlclwiPntzdG9yeS5jb21tZW50c0NvdW50fSA8L3A+e1wiIFwifVxyXG4gICAgICAgICAgICA8aW9uLWljb24gbmFtZT1cImNoYXRidWJibGVcIj48L2lvbi1pY29uPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2ZpZ2NhcHRpb24+XHJcbiAgICA8L2ZpZ3VyZT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHsgZHVtbXkgfSBmcm9tIFwiLi4vLi4vdXRpbHMvZHVtbXlcIjtcclxuXHJcbmNvbnN0IENoYXJhY3RlckNhcmQgPSAoeyBjaGFyYWN0ZXIsIHR5cGUsIHJlbW92ZUNoYXJhY3RlciB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxmaWd1cmVcclxuICAgICAgY2xhc3NOYW1lPXtgY2FyZCBjaGFyYWN0ZXItY2FyZCAke3R5cGUgPyB0eXBlIDogXCJcIn1gfVxyXG4gICAgICBkYXRhLWFvcz1cInpvb20taW4tdXBcIlxyXG4gICAgPlxyXG4gICAgICB7dHlwZSA9PT0gXCJhZGRcIiAmJiAoXHJcbiAgICAgICAgPHNwYW5cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJlbW92ZUNoYXJhY3RlcihjaGFyYWN0ZXIuaWQpfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwicmVtb3ZlLWJ0blwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgeFxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgKX1cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGltZyBzcmM9e2NoYXJhY3Rlcj8uaW1hZ2UgPyBjaGFyYWN0ZXIuaW1hZ2UgOiBkdW1teS5ub0ltYWdlfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGZpZ2NhcHRpb24+XHJcbiAgICAgICAgPGgzPntgJHtjaGFyYWN0ZXI/LmZpcnN0bmFtZX0gJHtjaGFyYWN0ZXI/Lmxhc3RuYW1lfWB9PC9oMz5cclxuICAgICAgICB7KHR5cGUgPT09IFwiZmF2b3JpdGVzXCIgfHwgdHlwZSA9PT0gXCJzdG9yeVwiKSAmJiAoXHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhdXRob3JcIj5BdXRob3I6IHtjaGFyYWN0ZXI/LmF1dGhvck5hbWV9PC9zcGFuPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgeyh0eXBlID09PSBcImFkZFwiIHx8IHR5cGUgPT09IFwic2hvd1wiKSAmJiAoXHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhdXRob3JcIj5SZWxhdGlvbjoge2NoYXJhY3Rlcj8ucmVsYXRpb259PC9zcGFuPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZmlnY2FwdGlvbj5cclxuICAgIDwvZmlndXJlPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGFyYWN0ZXJDYXJkO1xyXG4iLCJpbXBvcnQgeyBSb3csIENvbCwgRW1wdHkgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBNYXNvbnJ5LCB7IFJlc3BvbnNpdmVNYXNvbnJ5IH0gZnJvbSBcInJlYWN0LXJlc3BvbnNpdmUtbWFzb25yeVwiO1xyXG5cclxuaW1wb3J0IENhcmQgZnJvbSBcIi4uL2NvbW1vbi9DYXJkXCI7XHJcbmltcG9ydCBVc2VyQ2FyZCBmcm9tIFwiLi4vY29tbW9uL1VzZXJDYXJkXCI7XHJcbmltcG9ydCBDaGFyYWN0ZXJDYXJkIGZyb20gXCIuLi9jb21tb24vQ2hhcmFjdGVyQ2FyZFwiO1xyXG5pbXBvcnQgTG9jYXRpb25DYXJkIGZyb20gXCIuLi9jb21tb24vTG9jYXRpb25DYXJkXCI7XHJcbmltcG9ydCB7IGR1bW15IH0gZnJvbSBcIi4uLy4uL3V0aWxzL2R1bW15XCI7XHJcblxyXG5jb25zdCBTdG9yaWVzR3JpZCA9ICh7IHN0b3JpZXMsIHR5cGUsIGd1dHRlciwgY29sdW1uc0NvdW50QnJlYWtQb2ludHMgfSkgPT4ge1xyXG4gIHJldHVybiBzdG9yaWVzLmxlbmd0aCA+IDAgPyAoXHJcbiAgICA8UmVzcG9uc2l2ZU1hc29ucnkgY29sdW1uc0NvdW50QnJlYWtQb2ludHM9e2NvbHVtbnNDb3VudEJyZWFrUG9pbnRzfT5cclxuICAgICAgPE1hc29ucnkgZ3V0dGVyPXtndXR0ZXJ9PlxyXG4gICAgICAgIHtzdG9yaWVzLm1hcCgoc3RvcnkpID0+IChcclxuICAgICAgICAgIDxMaW5rIGtleT17c3RvcnkuaWR9IGhyZWY9e2Avc3RvcnkvJHtzdG9yeS5pZH1gfT5cclxuICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgPENhcmQgc3Rvcnk9e3N0b3J5fSB0eXBlPXt0eXBlfSAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvTWFzb25yeT5cclxuICAgIDwvUmVzcG9uc2l2ZU1hc29ucnk+XHJcbiAgKSA6IChcclxuICAgIDxFbXB0eSBpbWFnZT17RW1wdHkuUFJFU0VOVEVEX0lNQUdFX1NJTVBMRX0gZGVzY3JpcHRpb249XCJObyBzdG9yaWVzIHlldFwiIC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IE1pbmlHcmlkID0gKHsgc3RvcmllcywgdHlwZSwgZ3V0dGVyLCBjb2x1bW5zQ291bnRCcmVha1BvaW50cyB9KSA9PiB7XHJcbiAgcmV0dXJuIHN0b3JpZXMubGVuZ3RoID4gMCA/IChcclxuICAgIHN0b3JpZXMubWFwKChzdG9yeSkgPT4gKFxyXG4gICAgICA8ZmlndXJlIGtleT17c3RvcnkuaWR9IGNsYXNzTmFtZT1cIm1pbmktY2FyZFwiPlxyXG4gICAgICAgIDxpbWcgc3JjPXtzdG9yeS5iYW5uZXIgPyBzdG9yeS5iYW5uZXIgOiBkdW1teS5jb3Zlcn0gYWx0PVwiaW1hZ2VcIiAvPlxyXG4gICAgICAgIDxmaWdjYXB0aW9uPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXQtYmxvY2tcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2F0XCI+RHJhbWE8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxoMz57c3RvcnkudGl0bGV9PC9oMz5cclxuICAgICAgICA8L2ZpZ2NhcHRpb24+XHJcbiAgICAgIDwvZmlndXJlPlxyXG4gICAgKSlcclxuICApIDogKFxyXG4gICAgPEVtcHR5IGltYWdlPXtFbXB0eS5QUkVTRU5URURfSU1BR0VfU0lNUExFfSBkZXNjcmlwdGlvbj1cIk5vIHN0b3JpZXMgeWV0XCIgLz5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgVXNlckdyaWQgPSAoeyB1c2VycywgeGwsIGxnLCB4cywgc20sIG1kLCBndXR0ZXIgfSkgPT4ge1xyXG4gIHJldHVybiB1c2Vycy5sZW5ndGggPiAwID8gKFxyXG4gICAgPFJvdyBndXR0ZXI9e2d1dHRlcn0+XHJcbiAgICAgIHt1c2Vycy5tYXAoKHUpID0+IChcclxuICAgICAgICA8Q29sIGtleT17dS5pZH0geGw9e3hsfSBsZz17bGd9IG1kPXttZH0gc209e3NtfSB4cz17eHN9PlxyXG4gICAgICAgICAgPFVzZXJDYXJkIHVzZXI9e3V9IC8+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgICkpfVxyXG4gICAgPC9Sb3c+XHJcbiAgKSA6IChcclxuICAgIDxFbXB0eVxyXG4gICAgICBpbWFnZT17RW1wdHkuUFJFU0VOVEVEX0lNQUdFX1NJTVBMRX1cclxuICAgICAgZGVzY3JpcHRpb249XCJObyBmb2xsb3dlcnMgeWV0XCJcclxuICAgIC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IExvY2F0aW9uR3JpZCA9ICh7XHJcbiAgbG9jYXRpb25zLFxyXG4gIGd1dHRlcixcclxuICB4bCxcclxuICB4eGwsXHJcbiAgbGcsXHJcbiAgbWQsXHJcbiAgc20sXHJcbiAgeHMsXHJcbiAgdHlwZSxcclxuICBjb2x1bW5zQ291bnRCcmVha1BvaW50cyxcclxufSkgPT4ge1xyXG4gIHJldHVybiBsb2NhdGlvbnMubGVuZ3RoID4gMCA/IChcclxuICAgIDxSZXNwb25zaXZlTWFzb25yeSBjb2x1bW5zQ291bnRCcmVha1BvaW50cz17Y29sdW1uc0NvdW50QnJlYWtQb2ludHN9PlxyXG4gICAgICA8TWFzb25yeSBndXR0ZXI9e2d1dHRlcn0+XHJcbiAgICAgICAge2xvY2F0aW9ucy5tYXAoKGMpID0+IChcclxuICAgICAgICAgIDxMb2NhdGlvbkNhcmQga2V5PXtjLmlkfSBsb2NhdGlvbj17Y30gdHlwZT17dHlwZX0gLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9NYXNvbnJ5PlxyXG4gICAgPC9SZXNwb25zaXZlTWFzb25yeT5cclxuICApIDogKFxyXG4gICAgPEVtcHR5XHJcbiAgICAgIGltYWdlPXtFbXB0eS5QUkVTRU5URURfSU1BR0VfU0lNUExFfVxyXG4gICAgICBkZXNjcmlwdGlvbj1cIk5vIGxvY2F0aW9ucyB5ZXRcIlxyXG4gICAgLz5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgQ2hhcmFjdGVyR3JpZCA9ICh7XHJcbiAgZ3V0dGVyLFxyXG4gIHh4bCxcclxuICB4bCxcclxuICBsZyxcclxuICBtZCxcclxuICBzbSxcclxuICB4cyxcclxuICBjaGFyYWN0ZXJzLFxyXG4gIHR5cGUsXHJcbiAgY29sdW1uc0NvdW50QnJlYWtQb2ludHMsXHJcbn0pID0+IHtcclxuICByZXR1cm4gY2hhcmFjdGVycy5sZW5ndGggPiAwID8gKFxyXG4gICAgPFJlc3BvbnNpdmVNYXNvbnJ5IGNvbHVtbnNDb3VudEJyZWFrUG9pbnRzPXtjb2x1bW5zQ291bnRCcmVha1BvaW50c30+XHJcbiAgICAgIDxNYXNvbnJ5IGd1dHRlcj17Z3V0dGVyfT5cclxuICAgICAgICB7Y2hhcmFjdGVycy5tYXAoKGMpID0+IChcclxuICAgICAgICAgIDxMaW5rIGtleT17Yy5pZH0gaHJlZj17YC9jaGFyYWN0ZXIvJHtjLmlkfWB9PlxyXG4gICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICA8Q2hhcmFjdGVyQ2FyZCBjaGFyYWN0ZXI9e2N9IHR5cGU9e3R5cGV9IC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9NYXNvbnJ5PlxyXG4gICAgPC9SZXNwb25zaXZlTWFzb25yeT5cclxuICApIDogKFxyXG4gICAgPEVtcHR5XHJcbiAgICAgIGltYWdlPXtFbXB0eS5QUkVTRU5URURfSU1BR0VfU0lNUExFfVxyXG4gICAgICBkZXNjcmlwdGlvbj1cIk5vIGNoYXJhY3RlcnMgeWV0XCJcclxuICAgIC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCB7IFN0b3JpZXNHcmlkLCBDaGFyYWN0ZXJHcmlkLCBVc2VyR3JpZCwgTG9jYXRpb25HcmlkLCBNaW5pR3JpZCB9O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IE1vZGFsLCBCdXR0b24gfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5pbXBvcnQgeyBkdW1teSB9IGZyb20gXCIuLi8uLi91dGlscy9kdW1teVwiO1xyXG5cclxuY29uc3QgTG9jYXRpb25DYXJkID0gKHsgbG9jYXRpb24sIHR5cGUgfSkgPT4ge1xyXG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGZpZ3VyZVxyXG4gICAgICAgIGNsYXNzTmFtZT1cImNhcmQgY2hhcmFjdGVyLWNhcmRcIlxyXG4gICAgICAgIGRhdGEtYW9zPVwiem9vbS1pbi11cFwiXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VmlzaWJsZSh0cnVlKX1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGltZyBzcmM9e2xvY2F0aW9uLmltYWdlID8gbG9jYXRpb24uaW1hZ2UgOiBkdW1teS5ub0ltYWdlfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxmaWdjYXB0aW9uPlxyXG4gICAgICAgICAgPGgzPntsb2NhdGlvbi5uYW1lfTwvaDM+XHJcbiAgICAgICAgICB7dHlwZSAhPT0gXCJzdG9yeVwiICYmIChcclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYXV0aG9yXCI+U3Rvcnk6IHtsb2NhdGlvbi5zdG9yeVRpdGxlfTwvc3Bhbj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9maWdjYXB0aW9uPlxyXG4gICAgICA8L2ZpZ3VyZT5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgdGl0bGU9e2xvY2F0aW9uLm5hbWV9XHJcbiAgICAgICAgdmlzaWJsZT17dmlzaWJsZX1cclxuICAgICAgICBvbkNhbmNlbD17KCkgPT4gc2V0VmlzaWJsZShmYWxzZSl9XHJcbiAgICAgICAgZm9vdGVyPXtbXHJcbiAgICAgICAgICA8QnV0dG9uIGtleT1cInN1Ym1pdFwiIHR5cGU9XCJwcmltYXJ5XCIgb25DbGljaz17KCkgPT4gc2V0VmlzaWJsZShmYWxzZSl9PlxyXG4gICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgPC9CdXR0b24+LFxyXG4gICAgICAgIF19XHJcbiAgICAgID5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJtb2RhbC1pbWdcIlxyXG4gICAgICAgICAgc3JjPXtsb2NhdGlvbi5pbWFnZSA/IGxvY2F0aW9uLmltYWdlIDogZHVtbXkubm9JbWFnZX1cclxuICAgICAgICAgIGFsdD17bG9jYXRpb24ubmFtZX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxwPntsb2NhdGlvbi5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAge3R5cGUgIT09IFwic3RvcnlcIiAmJiAoXHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtb2RhbC1zdG9yeS1saW5rXCI+XHJcbiAgICAgICAgICAgIFN0b3J5OntcIiBcIn1cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC9zdG9yeS8ke2xvY2F0aW9uLnN0b3J5SWR9YH0+XHJcbiAgICAgICAgICAgICAgPGE+e2xvY2F0aW9uLnN0b3J5VGl0bGV9PC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9Nb2RhbD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2NhdGlvbkNhcmQ7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgUGFnaW5hdGlvbiBhcyBQYWdpbmF0ZSwgRGl2aWRlciB9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5pbXBvcnQgeyBDaGFyYWN0ZXJHcmlkLCBMb2NhdGlvbkdyaWQsIFN0b3JpZXNHcmlkLCBVc2VyR3JpZCB9IGZyb20gXCIuL0dyaWRcIjtcclxuXHJcbmNvbnN0IFBhZ2luYXRpb24gPSAoe1xyXG4gIGRhdGEsXHJcbiAgeHMsXHJcbiAgc20sXHJcbiAgbGcsXHJcbiAgeGwsXHJcbiAgbWQsXHJcbiAgdHlwZSxcclxuICBndXR0ZXIsXHJcbiAgY29sdW1uc0NvdW50QnJlYWtQb2ludHMsXHJcbiAgaXRlbVR5cGUsXHJcbn0pID0+IHtcclxuICBjb25zdCBbcGFnaW5hdGlvbiwgc2V0UGFnaW5hdGlvbl0gPSBSZWFjdC51c2VTdGF0ZSh7XHJcbiAgICBjdXJyZW50UGFnZTogMSxcclxuICAgIGRhdGFzUGVyUGFnZTogMTIsXHJcbiAgfSk7XHJcbiAgY29uc3QgeyBjdXJyZW50UGFnZSwgZGF0YXNQZXJQYWdlIH0gPSBwYWdpbmF0aW9uO1xyXG4gIGNvbnN0IGluZGV4T2ZMYXN0RGF0YSA9IGN1cnJlbnRQYWdlICogZGF0YXNQZXJQYWdlO1xyXG4gIGNvbnN0IGluZGV4T2ZGaXJzdERhdGEgPSBpbmRleE9mTGFzdERhdGEgLSBkYXRhc1BlclBhZ2U7XHJcblxyXG4gIFJlYWN0LnVzZVN0YXRlKCgpID0+IHt9LCBbZGF0YV0pO1xyXG5cclxuICBjb25zdCBjdXJyZW50RGF0YXMgPSBkYXRhLnNsaWNlKGluZGV4T2ZGaXJzdERhdGEsIGluZGV4T2ZMYXN0RGF0YSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUpID0+IHtcclxuICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxuICAgIHNldFBhZ2luYXRpb24oeyAuLi5wYWdpbmF0aW9uLCBjdXJyZW50UGFnZTogTnVtYmVyKGUpIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlckRhdGFzID1cclxuICAgIGl0ZW1UeXBlID09PSBcInN0b3JpZXNcIiA/IChcclxuICAgICAgPFN0b3JpZXNHcmlkXHJcbiAgICAgICAgZ3V0dGVyPXtndXR0ZXJ9XHJcbiAgICAgICAgdHlwZT17dHlwZX1cclxuICAgICAgICBzdG9yaWVzPXtjdXJyZW50RGF0YXN9XHJcbiAgICAgICAgY29sdW1uc0NvdW50QnJlYWtQb2ludHM9e2NvbHVtbnNDb3VudEJyZWFrUG9pbnRzfVxyXG4gICAgICAvPlxyXG4gICAgKSA6IGl0ZW1UeXBlID09PSBcImNoYXJhY3RlcnNcIiA/IChcclxuICAgICAgPENoYXJhY3RlckdyaWRcclxuICAgICAgICBjb2x1bW5zQ291bnRCcmVha1BvaW50cz17Y29sdW1uc0NvdW50QnJlYWtQb2ludHN9XHJcbiAgICAgICAgZ3V0dGVyPXtndXR0ZXJ9XHJcbiAgICAgICAgdHlwZT17dHlwZX1cclxuICAgICAgICBjaGFyYWN0ZXJzPXtjdXJyZW50RGF0YXN9XHJcbiAgICAgIC8+XHJcbiAgICApIDogaXRlbVR5cGUgPT09IFwibG9jYXRpb25zXCIgPyAoXHJcbiAgICAgIDxMb2NhdGlvbkdyaWRcclxuICAgICAgICBsb2NhdGlvbnM9e2N1cnJlbnREYXRhc31cclxuICAgICAgICBndXR0ZXI9e2d1dHRlcn1cclxuICAgICAgICB0eXBlPXt0eXBlfVxyXG4gICAgICAgIGNvbHVtbnNDb3VudEJyZWFrUG9pbnRzPXtjb2x1bW5zQ291bnRCcmVha1BvaW50c31cclxuICAgICAgLz5cclxuICAgICkgOiBpdGVtVHlwZSA9PT0gXCJmb2xsb3dlcnNcIiB8fCBpdGVtVHlwZSA9PT0gXCJ1c2Vyc1wiID8gKFxyXG4gICAgICA8VXNlckdyaWRcclxuICAgICAgICBndXR0ZXI9e2d1dHRlcn1cclxuICAgICAgICB0eXBlPXt0eXBlfVxyXG4gICAgICAgIHhzPXt4c31cclxuICAgICAgICBzbT17c219XHJcbiAgICAgICAgbGc9e2xnfVxyXG4gICAgICAgIG1kPXttZH1cclxuICAgICAgICB1c2Vycz17Y3VycmVudERhdGFzfVxyXG4gICAgICAvPlxyXG4gICAgKSA6IG51bGw7XHJcblxyXG4gIGxldCBwYWdlTnVtYmVycyA9IFtdO1xyXG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IE1hdGguY2VpbChkYXRhLmxlbmd0aCAvIGRhdGFzUGVyUGFnZSk7IGkrKykge1xyXG4gICAgcGFnZU51bWJlcnMucHVzaChpKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIHtyZW5kZXJEYXRhc31cclxuICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgPFBhZ2luYXRlXHJcbiAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICBzaG93UXVpY2tKdW1wZXJcclxuICAgICAgICBoaWRlT25TaW5nbGVQYWdlXHJcbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNsaWNrfVxyXG4gICAgICAgIHRvdGFsPXtkYXRhLmxlbmd0aH1cclxuICAgICAgICBwYWdlU2l6ZT17ZGF0YXNQZXJQYWdlfVxyXG4gICAgICAgIHNob3dUb3RhbD17KHRvdGFsKSA9PiBgVG90YWwgJHt0b3RhbH0gaXRlbXNgfVxyXG4gICAgICAvPlxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnaW5hdGlvbjtcclxuIiwiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBTcGFjZSB9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5jb25zdCBVc2VyQ2FyZCA9ICh7IHVzZXIgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGluayBocmVmPXtgL3Byb2ZpbGUvJHt1c2VyLmlkfWB9PlxyXG4gICAgICA8YT5cclxuICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cInVzZXItY2FyZFwiIGRhdGEtYW9zPVwiZmxpcC1sZWZ0XCI+XHJcbiAgICAgICAgICA8U3BhY2UgZGlyZWN0aW9uPVwidmVydGljYWxcIiBzaXplPXsxMn0gYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAge3VzZXIuaW1hZ2UgPyAoXHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17dXNlci5pbWFnZX0gYWx0PXtgcGhvdG8gJHt1c2VyLnVzZXJuYW1lfWB9IC8+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxpb24taWNvbiBuYW1lPVwicGVyc29uXCI+PC9pb24taWNvbj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGZpZ2NhcHRpb24+e3VzZXIudXNlcm5hbWV9PC9maWdjYXB0aW9uPlxyXG4gICAgICAgICAgPC9TcGFjZT5cclxuICAgICAgICA8L2ZpZ3VyZT5cclxuICAgICAgPC9hPlxyXG4gICAgPC9MaW5rPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyQ2FyZDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgTG9hZGluZ1NjcmVlbiA9ICh7IGNoaWxkcmVuLCBsb2FkaW5nIH0pID0+IHtcclxuICByZXR1cm4gIWxvYWRpbmcgPyAoXHJcbiAgICBjaGlsZHJlblxyXG4gICkgOiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRlci1jb250YWluZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkZXJcIj5cclxuICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9hZGluZ1NjcmVlbjtcclxuIiwiaW1wb3J0IHsgUmVzdWx0LCBCdXR0b24gfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuY29uc3QgUmVkaXJlY3RDb21wID0gKHsgY29uZGl0aW9uLCB0eXBlLCBjaGlsZHJlbiwgdmVyaWZ5RW1haWwgfSkgPT4ge1xyXG4gIHJldHVybiBjb25kaXRpb24gPyAoXHJcbiAgICBjaGlsZHJlblxyXG4gICkgOiB0eXBlID09PSBcIjQwNFwiID8gKFxyXG4gICAgPFJlc3VsdFxyXG4gICAgICBzdGF0dXM9XCI0MDRcIlxyXG4gICAgICB0aXRsZT1cIjQwNFwiXHJcbiAgICAgIHN1YlRpdGxlPVwiU29ycnksIHRoZSBwYWdlIHlvdSB2aXNpdGVkIGRvZXMgbm90IGV4aXN0LlwiXHJcbiAgICAgIGV4dHJhPXs8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCI+QmFjayBIb21lPC9CdXR0b24+fVxyXG4gICAgLz5cclxuICApIDogdHlwZSA9PT0gXCI0MDNcIiA/IChcclxuICAgIDxSZXN1bHRcclxuICAgICAgc3RhdHVzPVwiNDAzXCJcclxuICAgICAgdGl0bGU9XCI0MDNcIlxyXG4gICAgICBzdWJUaXRsZT1cIlNvcnJ5LCB5b3UgYXJlIG5vdCBhdXRob3JpemVkIHRvIGFjY2VzcyB0aGlzIHBhZ2UuXCJcclxuICAgICAgZXh0cmE9ezxCdXR0b24gdHlwZT1cInByaW1hcnlcIj5CYWNrIEhvbWU8L0J1dHRvbj59XHJcbiAgICAvPlxyXG4gICkgOiB0eXBlID09PSBcInJlZGlyZWN0XCIgPyAoXHJcbiAgICAod2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9hdXRoXCIpXHJcbiAgKSA6IHR5cGUgPT09IFwidmVyaWZ5XCIgPyAoXHJcbiAgICA8UmVzdWx0XHJcbiAgICAgIHN0YXR1cz1cIjQwM1wiXHJcbiAgICAgIHRpdGxlPVwiNDAzXCJcclxuICAgICAgc3ViVGl0bGU9XCJTb3JyeSwgeW91IGNhbm5vdCBwb3N0IHVudGlsIHlvdSB2ZXJpZnkgeW91ciBlbWFpbFwiXHJcbiAgICAgIGV4dHJhPXtcclxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgb25DbGljaz17KCkgPT4gdmVyaWZ5RW1haWwoKX0+XHJcbiAgICAgICAgICBTZW5kIGEgbmV3IGVtYWlsXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIH1cclxuICAgIC8+XHJcbiAgKSA6IChcclxuICAgIDxkaXY+PC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZGlyZWN0Q29tcDtcclxuIiwiaW1wb3J0IHsgUm93LCBDb2wsIFNwYWNlLCBUb29sdGlwLCBJbWFnZSB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgZHVtbXkgfSBmcm9tIFwiLi4vLi4vdXRpbHMvZHVtbXlcIjtcclxuXHJcbmltcG9ydCBGYXZvcml0ZXMgZnJvbSBcIi4vRmF2b3JpdGVzXCI7XHJcblxyXG5jb25zdCBCYW5uZXIgPSAoe1xyXG4gIG9wZW5TZXR0aW5ncyxcclxuICBwcm9maWxlLFxyXG4gIGZhdkF1dGhvcnMsXHJcbiAgZm9sbG93ZXJzLFxyXG4gIGNoYW5nZUZhdlRhYixcclxuICBmYXZUYWIsXHJcbiAgc2V0Q3VycmVudFRhYixcclxuICBjb250ZXh0LFxyXG4gIGlzRm9sbG93aW5nLFxyXG4gIGZvbGxvd1VzZXIsXHJcbiAgdW5mb2xsb3dVc2VyLFxyXG4gIGF1dGgsXHJcbiAgaWQsXHJcbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiYW5uZXJcIj5cclxuICAgICAgPFJvdyBndXR0ZXI9ezE2fT5cclxuICAgICAgICA8Q29sIHhsPXsxOH0gbGc9ezI0fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS10b3BcIj5cclxuICAgICAgICAgICAgPFJvdyBndXR0ZXI9ezMyfSBhbGlnbj1cIm1pZGRsZVwiPlxyXG4gICAgICAgICAgICAgIDxDb2wgeHM9ezI0fSBzbT17OH0gbWQ9ezl9IGxnPXs3fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1pY29uPVwiaW1hZ2VcIiBjbGFzc05hbWU9XCJhdmF0YXJcIj5cclxuICAgICAgICAgICAgICAgICAge3Byb2ZpbGUuaW1hZ2UgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e3Byb2ZpbGU/LmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PXtwcm9maWxlLnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezIzMH1cclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MjMwfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGlvbi1pY29uIG5hbWU9XCJwZXJzb25cIj48L2lvbi1pY29uPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPENvbCBtZD17MTV9IGxnPXsxN30gc209ezE2fSB4cz17MjR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjb250ZXh0ID09PSBcInByaXZhdGVcIiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbiBjdXN0b20taWNvbiBzZXR0aW5ncy1pY29uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b3BlblNldHRpbmdzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW9uLWljb24gbmFtZT1cInNldHRpbmdzXCI+PC9pb24taWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiBhdXRoLnVzZXIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXNGb2xsb3dpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdW5mb2xsb3dVc2VyKGlkLCBpc0ZvbGxvd2luZylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZm9sbG93VXNlcihpZCwgaXNGb2xsb3dpbmcsIGF1dGgudXNlcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb2xsb3ctYnRuIGFkZC1idG4tY2lyY2xlICR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXNGb2xsb3dpbmcgPyBcImZvbGxvd2VkXCIgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW9uLWljb24gbmFtZT1cImFkZC1jaXJjbGVcIj48L2lvbi1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57YCR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXNGb2xsb3dpbmcgPyBcIlVuZm9sbG93XCIgOiBcIkZvbGxvd1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gdGhpcyBhdXRob3JgfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj57cHJvZmlsZT8udXNlcm5hbWV9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8U3BhY2Ugc2l6ZT17MzB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9sbG93LWNvdW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtmb2xsb3dlcnM/LmF1dGhvcnMubGVuZ3RofSBmb2xsb3dlcnNcclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbGxvdy1jb3VudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZmF2QXV0aG9ycz8uYXV0aG9ycy5sZW5ndGh9IGZvbGxvd2luZ3NcclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L1NwYWNlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImJpb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3Byb2ZpbGUuYmlvZ3JhcGh5ICYmIHByb2ZpbGU/LmJpb2dyYXBoeX1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxTcGFjZSBzaXplPXszMH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9maWxlLmZhY2Vib29rICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtwcm9maWxlPy5mYWNlYm9va30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uIGN1c3RvbS1pY29uIGZiLWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW9uLWljb24gbmFtZT1cImxvZ28tZmFjZWJvb2tcIj48L2lvbi1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9maWxlLnR3aXR0ZXIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3Byb2ZpbGU/LnR3aXR0ZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbiBjdXN0b20taWNvbiB0d2l0dGVyLWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW9uLWljb24gbmFtZT1cImxvZ28tdHdpdHRlclwiPjwvaW9uLWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb2ZpbGUuaW5zdGFncmFtICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtwcm9maWxlPy5pbnN0YWdyYW19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbiBjdXN0b20taWNvbiBpbnN0YWdyYW0taWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpb24taWNvbiBuYW1lPVwibG9nby1pbnN0YWdyYW1cIj48L2lvbi1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9maWxlLmRldmlhbnRhcnQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3Byb2ZpbGU/LmRldmlhbnRhcnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbiBjdXN0b20taWNvbiBkZXZpYW50YXJ0LWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW9uLWljb24gbmFtZT1cImxvZ28tZGV2aWFudGFydFwiPjwvaW9uLWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvU3BhY2U+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPENvbCBmbGV4PVwiYXV0b1wiIHhsPXs2fSBsZz17MjR9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiaW9cIj5cclxuICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtb3JlXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgZmF2VGFiID09PSBcImZhdmF1dGhvcnNcIlxyXG4gICAgICAgICAgICAgICAgICA/IHNldEN1cnJlbnRUYWIoXCJmb2xsb3dpbmdzXCIpXHJcbiAgICAgICAgICAgICAgICAgIDogc2V0Q3VycmVudFRhYihcImZvbGxvd2Vyc1wiKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxzcGFuPlNlZSBhbGwgJmd0OyZndDsmZ3Q7PC9zcGFuPlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VnbWVudGVkLWNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwicmFkaW8yXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPVwiM1wiXHJcbiAgICAgICAgICAgICAgICBpZD1cInRhYi0xXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNoYW5nZUZhdlRhYihcImZhdmF1dGhvcnNcIil9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRhYi0xXCIgY2xhc3NOYW1lPVwic2VnbWVudGVkLWNvbnRyb2xfXzFcIj5cclxuICAgICAgICAgICAgICAgIDxwPlJlY2VudCBGb2xsb3dpbmdzPC9wPlxyXG4gICAgICAgICAgICAgIDwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJyYWRpbzJcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9XCI0XCJcclxuICAgICAgICAgICAgICAgIGlkPVwidGFiLTJcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2hhbmdlRmF2VGFiKFwiZm9sbG93ZXJzXCIpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0YWItMlwiIGNsYXNzTmFtZT1cInNlZ21lbnRlZC1jb250cm9sX18yXCI+XHJcbiAgICAgICAgICAgICAgICA8cD5SZWNlbnQgRm9sbG93ZXJzPC9wPlxyXG4gICAgICAgICAgICAgIDwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VnbWVudGVkLWNvbnRyb2xfX2NvbG9yXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7ZmF2VGFiID09PSBcImZhdmF1dGhvcnNcIiAmJiAoXHJcbiAgICAgICAgICAgICAgPEZhdm9yaXRlcyBzZXRDdXJyZW50VGFiPXtzZXRDdXJyZW50VGFifSBmYXZzPXtmYXZBdXRob3JzfSAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7ZmF2VGFiID09PSBcImZvbGxvd2Vyc1wiICYmIChcclxuICAgICAgICAgICAgICA8RmF2b3JpdGVzIHNldEN1cnJlbnRUYWI9e3NldEN1cnJlbnRUYWJ9IGZhdnM9e2ZvbGxvd2Vyc30gLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICA8L1Jvdz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYW5uZXI7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRGl2aWRlciB9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tIFwiLi4vY29tbW9uL1BhZ2luYXRpb25cIjtcclxuaW1wb3J0IFNvcnRJbnB1dCBmcm9tIFwiLi9Tb3J0SW5wdXRcIjtcclxuXHJcbmNvbnN0IENoYXJhY3RlcnMgPSAoeyBjaGFyYWN0ZXJzLCB0eXBlLCBjb250ZXh0IH0pID0+IHtcclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSBSZWFjdC51c2VTdGF0ZShbXSk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXREYXRhKGNoYXJhY3RlcnMpO1xyXG4gIH0sIFtjaGFyYWN0ZXJzXSk7XHJcblxyXG4gIGNvbnN0IG9wdGlvbnMgPSBbXHJcbiAgICB7IG5hbWU6IFwiRGF0ZSAoYXNjZW5kaW5nKVwiLCB2YWx1ZTogXCJkYXRlLWFzY1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiRGF0ZSAoZGVzY2VuZGluZylcIiwgdmFsdWU6IFwiZGF0ZS1kZXNjXCIgfSxcclxuICAgIHsgbmFtZTogXCJGaXJzdG5hbWUgKGFzY2VuZGluZylcIiwgdmFsdWU6IFwiZmlyc3RuYW1lLWFzY1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiRmlyc3RuYW1lIChkZXNjZW5kaW5nKVwiLCB2YWx1ZTogXCJmaXJzdG5hbWUtZGVzY1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiTGFzdG5hbWUgKGFzY2VuZGluZylcIiwgdmFsdWU6IFwibGFzdG5hbWUtYXNjXCIgfSxcclxuICAgIHsgbmFtZTogXCJMYXN0bmFtZSAoZGVzY2VuZGluZylcIiwgdmFsdWU6IFwibGFzdG5hbWUtZGVzY1wiIH0sXHJcbiAgXTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1jaGFyYWN0ZXJzXCI+XHJcbiAgICAgIDxTb3J0SW5wdXRcclxuICAgICAgICB0eXBlPVwiY2hhcmFjdGVyc1wiXHJcbiAgICAgICAgaXRlbURhdGE9e2NoYXJhY3RlcnN9XHJcbiAgICAgICAgdGl0bGU9e1xyXG4gICAgICAgICAgdHlwZSAhPT0gXCJmYXZvcml0ZXNcIlxyXG4gICAgICAgICAgICA/IGNoYXJhY3RlcnMubGVuZ3RoID4gMVxyXG4gICAgICAgICAgICAgID8gXCJDaGFyYWN0ZXJzXCJcclxuICAgICAgICAgICAgICA6IFwiQ2hhcmFjdGVyXCJcclxuICAgICAgICAgICAgOiBjaGFyYWN0ZXJzLmxlbmd0aCA+IDFcclxuICAgICAgICAgICAgPyBcIkZhdm9yaXRlIENoYXJhY3RlcnNcIlxyXG4gICAgICAgICAgICA6IFwiRmF2b3JpdGUgQ2hhcmFjdGVyXCJcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0RGF0YT17c2V0RGF0YX1cclxuICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxyXG4gICAgICAgIGNvbnRleHQ9e2NvbnRleHR9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgIDxQYWdpbmF0aW9uXHJcbiAgICAgICAgZGF0YT17ZGF0YX1cclxuICAgICAgICB0eXBlPXt0eXBlfVxyXG4gICAgICAgIGd1dHRlcj17XCIxNnB4XCJ9XHJcbiAgICAgICAgaXRlbVR5cGU9XCJjaGFyYWN0ZXJzXCJcclxuICAgICAgICBjb2x1bW5zQ291bnRCcmVha1BvaW50cz17eyAzNTA6IDEsIDc1MDogMiwgOTAwOiAzLCAxMjAwOiA0LCAxNjAwOiA2IH19XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhcmFjdGVycztcclxuIiwiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBSb3csIENvbCwgVG9vbHRpcCwgU3BpbiB9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5jb25zdCBGYXZvcml0ZXMgPSAoeyBmYXZzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmYXZvcml0ZXNcIj5cclxuICAgICAgPFJvdyBndXR0ZXI9e1sxNSwgMTBdfT5cclxuICAgICAgICB7ZmF2cy5pc0xvYWRpbmcgPyAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICA8U3BpbiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIGZhdnMuYXV0aG9ycy5zbGljZSgwLCAxMikubWFwKChmYXYpID0+IChcclxuICAgICAgICAgICAgPENvbCBrZXk9e2Zhdi5pZH0gc3Bhbj17Nn0+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9wcm9maWxlLyR7ZmF2LmlkfWB9PlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgdGl0bGU9e2Zhdi51c2VybmFtZX0gY29sb3I9e1wiIzZkNWRmY1wifT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZy1jb250YWluZXItYm9yZGVyIGltZy1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHtmYXYuaW1hZ2UgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtmYXYuaW1hZ2V9IGFsdD17YHBob3RvICR7ZmF2LnVzZXJuYW1lfWB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW9uLWljb24gbmFtZT1cInBlcnNvblwiPjwvaW9uLWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICkpXHJcbiAgICAgICAgKX1cclxuICAgICAgPC9Sb3c+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmF2b3JpdGVzO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IERpdmlkZXIgfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSBcIi4uL2NvbW1vbi9QYWdpbmF0aW9uXCI7XHJcbmltcG9ydCBTb3J0SW5wdXQgZnJvbSBcIi4vU29ydElucHV0XCI7XHJcblxyXG5jb25zdCBGb2xsb3dlcnMgPSAoeyBtZCwgc20sIHhzLCBsZywgaXRlbXMsIHRpdGxlLCB0eXBlIH0pID0+IHtcclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSBSZWFjdC51c2VTdGF0ZShbXSk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXREYXRhKGl0ZW1zKTtcclxuICB9LCBbaXRlbXNdKTtcclxuXHJcbiAgY29uc3Qgb3B0aW9ucyA9IFtcclxuICAgIHsgbmFtZTogXCJEYXRlIChhc2NlbmRpbmcpXCIsIHZhbHVlOiBcImRhdGUtYXNjXCIgfSxcclxuICAgIHsgbmFtZTogXCJEYXRlIChkZXNjZW5kaW5nKVwiLCB2YWx1ZTogXCJkYXRlLWRlc2NcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlVzZXJuYW1lIChhc2NlbmRpbmcpXCIsIHZhbHVlOiBcInVzZXJuYW1lLWFzY1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiVXNlcm5hbWUgKGRlc2NlbmRpbmcpXCIsIHZhbHVlOiBcInVzZXJuYW1lLWRlc2NcIiB9LFxyXG4gIF07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbGxvd2Vyc1wiPlxyXG4gICAgICA8U29ydElucHV0XHJcbiAgICAgICAgdHlwZT1cImZvbGxvd2Vyc1wiXHJcbiAgICAgICAgaXRlbURhdGE9e2l0ZW1zfVxyXG4gICAgICAgIHRpdGxlPXt0aXRsZX1cclxuICAgICAgICBzZXREYXRhPXtzZXREYXRhfVxyXG4gICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgIDxQYWdpbmF0aW9uXHJcbiAgICAgICAgZGF0YT17ZGF0YX1cclxuICAgICAgICBndXR0ZXI9e1syMCwgMzBdfVxyXG4gICAgICAgIGl0ZW1UeXBlPVwiZm9sbG93ZXJzXCJcclxuICAgICAgICBtZD17bWR9XHJcbiAgICAgICAgc209e3NtfVxyXG4gICAgICAgIHhzPXt4c31cclxuICAgICAgICBsZz17bGd9XHJcbiAgICAgICAgdHlwZT17dHlwZX1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb2xsb3dlcnM7XHJcbiIsImltcG9ydCB7IEZvcm0sIElucHV0LCBUb29sdGlwLCBTcGFjZSB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IExpbmtDb21wID0gKHsgbmFtZSwgbGFiZWwsIGluZm8sIHNldEluZm8gfSkgPT4ge1xyXG4gIGNvbnN0IHZhbGlkYXRlX3VybCA9ICh1cmwsIG5hbWUpID0+IHtcclxuICAgIGlmIChuYW1lID09PSBcInR3aXR0ZXJcIiAmJiB1cmwpIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIC9eKGh0dHBzPzpcXC9cXC8pPygod3szfVxcLik/KXR3aXR0ZXJcXC5jb21cXC8oIyFcXC8pP1thLXowLTlfXSskL2kudGVzdCh1cmwpXHJcbiAgICAgICkge1xyXG4gICAgICAgIHNldEluZm8oe1xyXG4gICAgICAgICAgLi4uaW5mbyxcclxuICAgICAgICAgIGVycm9yczoge1xyXG4gICAgICAgICAgICAuLi5pbmZvLmVycm9ycyxcclxuICAgICAgICAgICAgdHdpdHRlcjogXCJcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0SW5mbyh7XHJcbiAgICAgICAgICAuLi5pbmZvLFxyXG4gICAgICAgICAgZXJyb3JzOiB7XHJcbiAgICAgICAgICAgIC4uLmluZm8uZXJyb3JzLFxyXG4gICAgICAgICAgICB0d2l0dGVyOiBgVGhlIGxpbmsgaXMgbm90IGEgdmFsaWQgVHdpdHRlciB1cmxgLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChuYW1lID09PSBcImZhY2Vib29rXCIgJiYgdXJsKSB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICAvXihodHRwcz86XFwvXFwvKT8oKHd7M31cXC4pPylmYWNlYm9va1xcLmNvbVxcLygjIVxcLyk/W2EtejAtOV9dKyQvaS50ZXN0KHVybClcclxuICAgICAgKSB7XHJcbiAgICAgICAgc2V0SW5mbyh7XHJcbiAgICAgICAgICAuLi5pbmZvLFxyXG4gICAgICAgICAgZXJyb3JzOiB7XHJcbiAgICAgICAgICAgIC4uLmluZm8uZXJyb3JzLFxyXG4gICAgICAgICAgICBmYWNlYm9vazogXCJcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0SW5mbyh7XHJcbiAgICAgICAgICAuLi5pbmZvLFxyXG4gICAgICAgICAgZXJyb3JzOiB7XHJcbiAgICAgICAgICAgIC4uLmluZm8uZXJyb3JzLFxyXG4gICAgICAgICAgICBmYWNlYm9vazogYFRoZSBsaW5rIGlzIG5vdCBhIHZhbGlkIEZhY2Vib29rIHVybGAsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKG5hbWUgPT09IFwiaW5zdGFncmFtXCIgJiYgdXJsKSB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICAvXihodHRwcz86XFwvXFwvKT8oKHd7M31cXC4pPylpbnN0YWdyYW1cXC5jb21cXC8oIyFcXC8pP1thLXowLTlfXSskL2kudGVzdChcclxuICAgICAgICAgIHVybFxyXG4gICAgICAgIClcclxuICAgICAgKSB7XHJcbiAgICAgICAgc2V0SW5mbyh7XHJcbiAgICAgICAgICAuLi5pbmZvLFxyXG4gICAgICAgICAgZXJyb3JzOiB7XHJcbiAgICAgICAgICAgIC4uLmluZm8uZXJyb3JzLFxyXG4gICAgICAgICAgICBpbnN0YWdyYW06IFwiXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldEluZm8oe1xyXG4gICAgICAgICAgLi4uaW5mbyxcclxuICAgICAgICAgIGVycm9yczoge1xyXG4gICAgICAgICAgICAuLi5pbmZvLmVycm9ycyxcclxuICAgICAgICAgICAgaW5zdGFncmFtOiBgVGhlIGxpbmsgaXMgbm90IGEgdmFsaWQgSW5zdGFncmFtIHVybGAsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKG5hbWUgPT09IFwiZGV2aWFudGFydFwiICYmIHVybCkge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgL14oaHR0cHM/OlxcL1xcLyk/KCh3ezN9XFwuKT8pZGV2aWFudGFydFxcLmNvbVxcLygjIVxcLyk/W2EtejAtOV9dKyQvaS50ZXN0KFxyXG4gICAgICAgICAgdXJsXHJcbiAgICAgICAgKVxyXG4gICAgICApIHtcclxuICAgICAgICBzZXRJbmZvKHtcclxuICAgICAgICAgIC4uLmluZm8sXHJcbiAgICAgICAgICBlcnJvcnM6IHtcclxuICAgICAgICAgICAgLi4uaW5mby5lcnJvcnMsXHJcbiAgICAgICAgICAgIGRldmlhbnRhcnQ6IFwiXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldEluZm8oe1xyXG4gICAgICAgICAgLi4uaW5mbyxcclxuICAgICAgICAgIGVycm9yczoge1xyXG4gICAgICAgICAgICAuLi5pbmZvLmVycm9ycyxcclxuICAgICAgICAgICAgZGV2aWFudGFydDogYFRoZSBsaW5rIGlzIG5vdCBhIHZhbGlkIERldmlhbnRhcnQgdXJsYCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoIXVybCkge1xyXG4gICAgICBzZXRJbmZvKHtcclxuICAgICAgICAuLi5pbmZvLFxyXG4gICAgICAgIGVycm9yczoge1xyXG4gICAgICAgICAgLi4uaW5mby5lcnJvcnMsXHJcbiAgICAgICAgICBbbmFtZV06IGBgLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB2YWxpZGF0ZV91cmwoaW5mby5mYWNlYm9vaywgXCJmYWNlYm9va1wiKTtcclxuICB9LCBbaW5mby5mYWNlYm9va10pO1xyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB2YWxpZGF0ZV91cmwoaW5mby50d2l0dGVyLCBcInR3aXR0ZXJcIik7XHJcbiAgfSwgW2luZm8udHdpdHRlcl0pO1xyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB2YWxpZGF0ZV91cmwoaW5mby5pbnN0YWdyYW0sIFwiaW5zdGFncmFtXCIpO1xyXG4gIH0sIFtpbmZvLmluc3RhZ3JhbV0pO1xyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB2YWxpZGF0ZV91cmwoaW5mby5kZXZpYW50YXJ0LCBcImRldmlhbnRhcnRcIik7XHJcbiAgfSwgW2luZm8uZGV2aWFudGFydF0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SW5wdXRcclxuICAgICAgICBhZGRvbkJlZm9yZT17XHJcbiAgICAgICAgICA8VG9vbHRpcCB0aXRsZT17bGFiZWx9PlxyXG4gICAgICAgICAgICA8aW9uLWljb24gbmFtZT17YGxvZ28tJHtuYW1lfWB9PjwvaW9uLWljb24+XHJcbiAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFkZG9uQWZ0ZXI9e1xyXG4gICAgICAgICAgIWluZm8uZXJyb3JzW25hbWVdICYmXHJcbiAgICAgICAgICBpbmZvW25hbWVdICYmIDxpb24taWNvbiBuYW1lPVwiY2hlY2ttYXJrXCI+PC9pb24taWNvbj5cclxuICAgICAgICB9XHJcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICBzZXRJbmZvKHtcclxuICAgICAgICAgICAgLi4uaW5mbyxcclxuICAgICAgICAgICAgW25hbWVdOiBlLnRhcmdldC52YWx1ZSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH19XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9e2BFbnRlciBhIGxpbmsuIEV4OiBodHRwczovLyR7bmFtZX0uY29tL0phbmVEb2VgfVxyXG4gICAgICAgIHZhbHVlPXtpbmZvW25hbWVdfVxyXG4gICAgICAvPlxyXG4gICAgICB7aW5mby5lcnJvcnNbbmFtZV0gJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW50LWZvcm0taXRlbS1leHBsYWluIGFudC1mb3JtLWl0ZW0tZXhwbGFpbi1lcnJvclwiPlxyXG4gICAgICAgICAgPGRpdiByb2xlPVwiYWxlcnRcIj57aW5mby5lcnJvcnNbbmFtZV19PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlua0NvbXA7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRGl2aWRlciB9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tIFwiLi4vY29tbW9uL1BhZ2luYXRpb25cIjtcclxuaW1wb3J0IFNvcnRJbnB1dCBmcm9tIFwiLi9Tb3J0SW5wdXRcIjtcclxuXHJcbmNvbnN0IExvY2F0aW9ucyA9ICh7IGxvY2F0aW9ucywgdHlwZSwgY29udGV4dCB9KSA9PiB7XHJcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gUmVhY3QudXNlU3RhdGUoW10pO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0RGF0YShsb2NhdGlvbnMpO1xyXG4gIH0sIFtsb2NhdGlvbnNdKTtcclxuXHJcbiAgY29uc3Qgb3B0aW9ucyA9IFtcclxuICAgIHsgbmFtZTogXCJEYXRlIChhc2NlbmRpbmcpXCIsIHZhbHVlOiBcImRhdGUtYXNjXCIgfSxcclxuICAgIHsgbmFtZTogXCJEYXRlIChkZXNjZW5kaW5nKVwiLCB2YWx1ZTogXCJkYXRlLWRlc2NcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk5hbWUgKGFzY2VuZGluZylcIiwgdmFsdWU6IFwibmFtZS1hc2NcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk5hbWUgKGRlc2NlbmRpbmcpXCIsIHZhbHVlOiBcIm5hbWUtZGVzY1wiIH0sXHJcbiAgXTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1jaGFyYWN0ZXJzXCI+XHJcbiAgICAgIDxTb3J0SW5wdXRcclxuICAgICAgICB0eXBlPVwibG9jYXRpb25zXCJcclxuICAgICAgICBpdGVtRGF0YT17bG9jYXRpb25zfVxyXG4gICAgICAgIHRpdGxlPXtsb2NhdGlvbnMubGVuZ3RoID4gMSA/IFwiTG9jYXRpb25zXCIgOiBcIkxvY2F0aW9uXCJ9XHJcbiAgICAgICAgc2V0RGF0YT17c2V0RGF0YX1cclxuICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxyXG4gICAgICAgIGNvbnRleHQ9e2NvbnRleHR9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgIDxQYWdpbmF0aW9uXHJcbiAgICAgICAgZGF0YT17ZGF0YX1cclxuICAgICAgICB0eXBlPXt0eXBlfVxyXG4gICAgICAgIGd1dHRlcj17XCIxNnB4XCJ9XHJcbiAgICAgICAgaXRlbVR5cGU9XCJsb2NhdGlvbnNcIlxyXG4gICAgICAgIGNvbHVtbnNDb3VudEJyZWFrUG9pbnRzPXt7IDM1MDogMSwgNzUwOiAyLCA5MDA6IDMsIDEyMDA6IDQsIDE2MDA6IDYgfX1cclxuICAgICAgLz5cclxuICAgICAgey8qIDxMb2NhdGlvbkdyaWRcclxuICAgICAgICBsb2NhdGlvbnM9e2xvY2F0aW9uc31cclxuICAgICAgICB4eGw9ezR9XHJcbiAgICAgICAgc209ezEyfVxyXG4gICAgICAgIHN4PXsxMn1cclxuICAgICAgICBtZD17OH1cclxuICAgICAgICB4bD17Nn1cclxuICAgICAgICBsZz17OH1cclxuICAgICAgICBndXR0ZXI9e1sxNiwgMTZdfVxyXG4gICAgICAgIHR5cGU9e3R5cGV9XHJcbiAgICAgIC8+ICovfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvY2F0aW9ucztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIFRhYnMsXHJcbiAgRm9ybSxcclxuICBJbnB1dCxcclxuICBNb2RhbCxcclxuICBVcGxvYWQsXHJcbiAgbWVzc2FnZSxcclxuICBCdXR0b24sXHJcbiAgUG9wY29uZmlybSxcclxufSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQge1xyXG4gIExvY2tPdXRsaW5lZCxcclxuICBVc2VyT3V0bGluZWQsXHJcbiAgTGlua091dGxpbmVkLFxyXG4gIEZpbGVJbWFnZU91dGxpbmVkLFxyXG4gIExvYWRpbmdPdXRsaW5lZCxcclxuICBQbHVzT3V0bGluZWQsXHJcbiAgU3Rhck91dGxpbmVkLFxyXG4gIEVkaXRPdXRsaW5lZCxcclxuICBEZWxldGVPdXRsaW5lZCxcclxufSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuXHJcbmltcG9ydCBMaW5rQ29tcCBmcm9tIFwiLi9MaW5rQ29tcFwiO1xyXG5pbXBvcnQgeyBhdXRoIH0gZnJvbSBcIi4uLy4uL3JlZHV4L2ZiQ29uZmlnXCI7XHJcblxyXG5jb25zdCB7IFRhYlBhbmUgfSA9IFRhYnM7XHJcblxyXG5mdW5jdGlvbiBnZXRCYXNlNjQoaW1nLCBjYWxsYmFjaykge1xyXG4gIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgcmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IGNhbGxiYWNrKHJlYWRlci5yZXN1bHQpKTtcclxuICByZWFkZXIucmVhZEFzRGF0YVVSTChpbWcpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBiZWZvcmVVcGxvYWQoZmlsZSkge1xyXG4gIGNvbnN0IGlzSnBnT3JQbmcgPSBmaWxlLnR5cGUgPT09IFwiaW1hZ2UvanBlZ1wiIHx8IGZpbGUudHlwZSA9PT0gXCJpbWFnZS9wbmdcIjtcclxuICBpZiAoIWlzSnBnT3JQbmcpIHtcclxuICAgIG1lc3NhZ2UuZXJyb3IoXCJZb3UgY2FuIG9ubHkgdXBsb2FkIEpQRy9QTkcgZmlsZSFcIik7XHJcbiAgfVxyXG4gIGNvbnN0IGlzTHQyTSA9IGZpbGUuc2l6ZSAvIDEwMjQgLyAxMDI0IDwgMjtcclxuICBpZiAoIWlzTHQyTSkge1xyXG4gICAgbWVzc2FnZS5lcnJvcihcIkltYWdlIG11c3Qgc21hbGxlciB0aGFuIDJNQiFcIik7XHJcbiAgfVxyXG4gIHJldHVybiBpc0pwZ09yUG5nICYmIGlzTHQyTTtcclxufVxyXG5cclxuY29uc3QgU2V0dGluZ3MgPSAoe1xyXG4gIGRlbGV0ZUFjY291bnQsXHJcbiAgcHJvZmlsZSxcclxuICBvcGVuU2V0dGluZ3MsXHJcbiAgc2V0T3BlblNldHRpbmdzLFxyXG4gIGNoYW5nZVByb2ZpbGUsXHJcbn0pID0+IHtcclxuICBjb25zdCBbZm9ybV0gPSBGb3JtLnVzZUZvcm0oKTtcclxuICBjb25zdCBbaW5mbywgc2V0SW5mb10gPSBSZWFjdC51c2VTdGF0ZSh7XHJcbiAgICB1c2VybmFtZTogXCJcIixcclxuICAgIGRldmlhbnRhcnQ6IFwiXCIsXHJcbiAgICBmYWNlYm9vazogXCJcIixcclxuICAgIGluc3RhZ3JhbTogXCJcIixcclxuICAgIHR3aXR0ZXI6IFwiXCIsXHJcbiAgICBiaW9ncmFwaHk6IFwiXCIsXHJcbiAgICBlcnJvcnM6IHtcclxuICAgICAgaW5zdGFncmFtOiBcIlwiLFxyXG4gICAgICBkZXZpYW50YXJ0OiBcIlwiLFxyXG4gICAgICBmYWNlYm9vazogXCJcIixcclxuICAgICAgdHdpdHRlcjogXCJcIixcclxuICAgICAgdXNlcm5hbWU6IFwiXCIsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIGNvbnN0IFtpbWFnZVVybCwgc2V0SW1hZ2VVcmxdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoaW1hZ2VJbmZvKSA9PiB7XHJcbiAgICBpZiAoaW1hZ2VJbmZvLmZpbGUuc3RhdHVzID09PSBcInVwbG9hZGluZ1wiKSB7XHJcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmIChpbWFnZUluZm8uZmlsZS5zdGF0dXMgPT09IFwiZG9uZVwiKSB7XHJcbiAgICAgIHNldEluZm8oeyAuLi5pbmZvLCBpbWFnZTogaW1hZ2VJbmZvLmZpbGUub3JpZ2luRmlsZU9iaiB9KTtcclxuICAgICAgZ2V0QmFzZTY0KGltYWdlSW5mby5maWxlLm9yaWdpbkZpbGVPYmosIChpbWFnZVVybCkgPT4ge1xyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG5cclxuICAgICAgICBzZXRJbWFnZVVybChpbWFnZVVybCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHVwbG9hZEJ1dHRvbiA9IChcclxuICAgIDxkaXY+XHJcbiAgICAgIHtsb2FkaW5nID8gPExvYWRpbmdPdXRsaW5lZCAvPiA6IDxQbHVzT3V0bGluZWQgLz59XHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiA4IH19PlVwbG9hZDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChwcm9maWxlKSB7XHJcbiAgICAgIHNldEltYWdlVXJsKHByb2ZpbGUuaW1hZ2UpO1xyXG4gICAgICBzZXRJbmZvKHtcclxuICAgICAgICAuLi5pbmZvLFxyXG4gICAgICAgIGJpb2dyYXBoeTogcHJvZmlsZS5iaW9ncmFwaHksXHJcbiAgICAgICAgdXNlcm5hbWU6IHByb2ZpbGUudXNlcm5hbWUsXHJcbiAgICAgICAgaW5zdGFncmFtOiBwcm9maWxlLmluc3RhZ3JhbSxcclxuICAgICAgICBmYWNlYm9vazogcHJvZmlsZS5mYWNlYm9vayxcclxuICAgICAgICB0d2l0dGVyOiBwcm9maWxlLnR3aXR0ZXIsXHJcbiAgICAgICAgZGV2aWFudGFydDogcHJvZmlsZS5kZXZpYW50YXJ0LFxyXG4gICAgICAgIGltYWdlOiBwcm9maWxlLmltYWdlLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9LCBbcHJvZmlsZV0pO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKFxyXG4gICAgICBpbmZvLnVzZXJuYW1lICYmXHJcbiAgICAgIGluZm8udXNlcm5hbWUubGVuZ3RoID49IDAgJiZcclxuICAgICAgaW5mby51c2VybmFtZS5sZW5ndGggPCA0XHJcbiAgICApIHtcclxuICAgICAgc2V0SW5mbyh7XHJcbiAgICAgICAgLi4uaW5mbyxcclxuICAgICAgICBlcnJvcnM6IHtcclxuICAgICAgICAgIC4uLmluZm8uZXJyb3JzLFxyXG4gICAgICAgICAgdXNlcm5hbWU6IFwiWW91ciB1c2VybmFtZSBuZWVkcyB0byBiZSBhdCBsZWFzdCA0IGNoYXJhY3RlcnMgbG9uZ1wiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmIChpbmZvLnVzZXJuYW1lLmxlbmd0aCA+IDE1KSB7XHJcbiAgICAgIHNldEluZm8oe1xyXG4gICAgICAgIC4uLmluZm8sXHJcbiAgICAgICAgZXJyb3JzOiB7XHJcbiAgICAgICAgICAuLi5pbmZvLmVycm9ycyxcclxuICAgICAgICAgIHVzZXJuYW1lOiBcIllvdXIgdXNlcm5hbWUgY2Fubm90IGV4Y2VlZCAxNSBjaGFyYWN0ZXJzXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRJbmZvKHtcclxuICAgICAgICAuLi5pbmZvLFxyXG4gICAgICAgIGVycm9yczoge1xyXG4gICAgICAgICAgLi4uaW5mby5lcnJvcnMsXHJcbiAgICAgICAgICB1c2VybmFtZTogXCJcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9LCBbaW5mby51c2VybmFtZV0pO1xyXG5cclxuICBjb25zdCBzdWJtaXQgPSAoKSA9PiB7XHJcbiAgICBsZXQgZXJyb3JzID0gW107XHJcbiAgICBjb25zdCBwYXNzd29yZEVycm9ycyA9IGZvcm0uZ2V0RmllbGRzRXJyb3IoKTtcclxuXHJcbiAgICBmb3IgKGxldCBpIGluIHBhc3N3b3JkRXJyb3JzKSB7XHJcbiAgICAgIGlmIChwYXNzd29yZEVycm9yc1tpXS5lcnJvcnMubGVuZ3RoID4gMClcclxuICAgICAgICBlcnJvcnMucHVzaChbLi4ucGFzc3dvcmRFcnJvcnNbaV0uZXJyb3JzXSk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgaSBpbiBpbmZvLmVycm9ycykge1xyXG4gICAgICBpZiAoaW5mby5lcnJvcnNbaV0pIGVycm9ycy5wdXNoKGluZm8uZXJyb3JzW2ldKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZXJyb3JzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBjaGFuZ2VQcm9maWxlKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHVzZXJuYW1lOiBpbmZvLnVzZXJuYW1lLFxyXG4gICAgICAgICAgdHdpdHRlcjogaW5mby50d2l0dGVyLFxyXG4gICAgICAgICAgaW5zdGFncmFtOiBpbmZvLmluc3RhZ3JhbSxcclxuICAgICAgICAgIGRldmlhbnRhcnQ6IGluZm8uZGV2aWFudGFydCxcclxuICAgICAgICAgIGZhY2Vib29rOiBpbmZvLmZhY2Vib29rLFxyXG4gICAgICAgICAgbmV3UGFzc3dvcmQ6IGZvcm0uZ2V0RmllbGRWYWx1ZShcIm5ld1Bhc3N3b3JkXCIpLFxyXG4gICAgICAgICAgYWN0dWFsUGFzc3dvcmQ6IGZvcm0uZ2V0RmllbGRWYWx1ZShcImFjdHVhbFBhc3N3b3JkXCIpLFxyXG4gICAgICAgICAgaW1hZ2U6IGluZm8uaW1hZ2UsXHJcbiAgICAgICAgICBiaW9ncmFwaHk6IGluZm8uYmlvZ3JhcGh5LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0T3BlblNldHRpbmdzXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBtZXNzYWdlLmVycm9yKFwiVGhlcmUgYXJlIHNvbWUgZXJyb3JzIGluIHRoZSBzZXR0aW5nc1wiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBjbG9zZU1vZGFsID0gKCkgPT4ge1xyXG4gICAgc2V0SW1hZ2VVcmwocHJvZmlsZS5pbWFnZSk7XHJcbiAgICBzZXRJbmZvKHtcclxuICAgICAgLi4uaW5mbyxcclxuICAgICAgZXJyb3JzOiB7XHJcbiAgICAgICAgaW5zdGFncmFtOiBcIlwiLFxyXG4gICAgICAgIGRldmlhbnRhcnQ6IFwiXCIsXHJcbiAgICAgICAgZmFjZWJvb2s6IFwiXCIsXHJcbiAgICAgICAgdHdpdHRlcjogXCJcIixcclxuICAgICAgICB1c2VybmFtZTogXCJcIixcclxuICAgICAgfSxcclxuICAgICAgdXNlcm5hbWU6IHByb2ZpbGUudXNlcm5hbWUsXHJcbiAgICAgIGJpb2dyYXBoeTogcHJvZmlsZS5iaW9ncmFwaHksXHJcbiAgICAgIGluc3RhZ3JhbTogcHJvZmlsZS5pbnN0YWdyYW0sXHJcbiAgICAgIGZhY2Vib29rOiBwcm9maWxlLmZhY2Vib29rLFxyXG4gICAgICB0d2l0dGVyOiBwcm9maWxlLnR3aXR0ZXIsXHJcbiAgICAgIGRldmlhbnRhcnQ6IHByb2ZpbGUuZGV2aWFudGFydCxcclxuICAgICAgaW1hZ2U6IHByb2ZpbGUuaW1hZ2UsXHJcbiAgICB9KTtcclxuICAgIHNldE9wZW5TZXR0aW5ncyhmYWxzZSk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgd2lkdGg9XCI1MCVcIlxyXG4gICAgICAgIHRpdGxlPVwiU2V0dGluZ3NcIlxyXG4gICAgICAgIHZpc2libGU9e29wZW5TZXR0aW5nc31cclxuICAgICAgICBvbk9rPXtzdWJtaXR9XHJcbiAgICAgICAgb2tUZXh0PVwiU3VibWl0IGNoYW5nZXNcIlxyXG4gICAgICAgIG9uQ2FuY2VsPXtjbG9zZU1vZGFsfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nc1wiPlxyXG4gICAgICAgICAgPFRhYnMgdGFiUG9zaXRpb249XCJsZWZ0XCIgZGVmYXVsdEFjdGl2ZUtleT1cIjFcIj5cclxuICAgICAgICAgICAgPFRhYlBhbmVcclxuICAgICAgICAgICAgICB0YWI9e1xyXG4gICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxVc2VyT3V0bGluZWQgLz5cclxuICAgICAgICAgICAgICAgICAgVXNlcm5hbWVcclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAga2V5PVwiMVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIG1heExlbmd0aD17MTV9XHJcbiAgICAgICAgICAgICAgICBhZGRvbkJlZm9yZT17XCJVc2VybmFtZVwifVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRJbmZvKHsgLi4uaW5mbywgdXNlcm5hbWU6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2luZm8udXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICB7aW5mby5lcnJvcnMudXNlcm5hbWUgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbnQtZm9ybS1pdGVtLWV4cGxhaW4gYW50LWZvcm0taXRlbS1leHBsYWluLWVycm9yXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgcm9sZT1cImFsZXJ0XCI+e2luZm8uZXJyb3JzLnVzZXJuYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9UYWJQYW5lPlxyXG4gICAgICAgICAgICA8VGFiUGFuZVxyXG4gICAgICAgICAgICAgIHRhYj17XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPExvY2tPdXRsaW5lZCAvPlxyXG4gICAgICAgICAgICAgICAgICBQYXNzd29yZFxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBrZXk9XCIyXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxGb3JtXHJcbiAgICAgICAgICAgICAgICBmb3JtPXtmb3JtfVxyXG4gICAgICAgICAgICAgICAgbGF5b3V0PVwidmVydGljYWxcIlxyXG4gICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17eyBhY3R1YWxQYXNzd29yZDogXCJcIiwgbmV3UGFzc3dvcmQ6IFwiXCIgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQWN0dWFsIFBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJhY3R1YWxQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJQbGVhc2UgaW5wdXQgeW91ciBhY3R1YWwgcGFzc3dvcmQhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dC5QYXNzd29yZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk5ldyBQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmV3UGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiUGxlYXNlIGlucHV0IHlvdXIgbmV3IHBhc3N3b3JkIVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQuUGFzc3dvcmQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNvbmZpcm1QYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkNvbmZpcm0gTmV3IFBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGRlcGVuZGVuY2llcz17W1wicGFzc3dvcmRcIl19XHJcbiAgICAgICAgICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJQbGVhc2UgY29uZmlybSB5b3VyIHBhc3N3b3JkIVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoeyBnZXRGaWVsZFZhbHVlIH0pID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yKF8sIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICF2YWx1ZSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRGaWVsZFZhbHVlKFwibmV3UGFzc3dvcmRcIikgPT09IHZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRXJyb3IoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJUaGUgdHdvIHBhc3N3b3JkcyB0aGF0IHlvdSBlbnRlcmVkIGRvIG5vdCBtYXRjaCFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQuUGFzc3dvcmQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgIDwvVGFiUGFuZT5cclxuICAgICAgICAgICAgPFRhYlBhbmVcclxuICAgICAgICAgICAgICB0YWI9e1xyXG4gICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxFZGl0T3V0bGluZWQgLz5cclxuICAgICAgICAgICAgICAgICAgQmlvXHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGtleT1cIjNcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPElucHV0LlRleHRBcmVhXHJcbiAgICAgICAgICAgICAgICBtYXhMZW5ndGg9ezE0MH1cclxuICAgICAgICAgICAgICAgIGF1dG9TaXplXHJcbiAgICAgICAgICAgICAgICBzaG93Q291bnRcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtpbmZvLmJpb2dyYXBoeX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cclxuICAgICAgICAgICAgICAgICAgc2V0SW5mbyh7IC4uLmluZm8sIGJpb2dyYXBoeTogZS50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA+PC9JbnB1dC5UZXh0QXJlYT5cclxuICAgICAgICAgICAgPC9UYWJQYW5lPlxyXG4gICAgICAgICAgICA8VGFiUGFuZVxyXG4gICAgICAgICAgICAgIHRhYj17XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPExpbmtPdXRsaW5lZCAvPlxyXG4gICAgICAgICAgICAgICAgICBMaW5rc1xyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBrZXk9XCI0XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxMaW5rQ29tcFxyXG4gICAgICAgICAgICAgICAgc2V0SW5mbz17c2V0SW5mb31cclxuICAgICAgICAgICAgICAgIGluZm89e2luZm99XHJcbiAgICAgICAgICAgICAgICBuYW1lPXtcImZhY2Vib29rXCJ9XHJcbiAgICAgICAgICAgICAgICBsYWJlbD17XCJGYWNlYm9va1wifVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMTBweCAwXCIgfX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPExpbmtDb21wXHJcbiAgICAgICAgICAgICAgICBzZXRJbmZvPXtzZXRJbmZvfVxyXG4gICAgICAgICAgICAgICAgaW5mbz17aW5mb31cclxuICAgICAgICAgICAgICAgIG5hbWU9e1widHdpdHRlclwifVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9e1wiVHdpdHRlclwifVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMTBweCAwXCIgfX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPExpbmtDb21wXHJcbiAgICAgICAgICAgICAgICBzZXRJbmZvPXtzZXRJbmZvfVxyXG4gICAgICAgICAgICAgICAgaW5mbz17aW5mb31cclxuICAgICAgICAgICAgICAgIG5hbWU9e1wiaW5zdGFncmFtXCJ9XHJcbiAgICAgICAgICAgICAgICBsYWJlbD17XCJJbnN0YWdyYW1cIn1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjEwcHggMFwiIH19PjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxMaW5rQ29tcFxyXG4gICAgICAgICAgICAgICAgc2V0SW5mbz17c2V0SW5mb31cclxuICAgICAgICAgICAgICAgIGluZm89e2luZm99XHJcbiAgICAgICAgICAgICAgICBuYW1lPXtcImRldmlhbnRhcnRcIn1cclxuICAgICAgICAgICAgICAgIGxhYmVsPXtcIkRldmlhbnRhcnRcIn1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjEwcHggMFwiIH19PjwvZGl2PlxyXG4gICAgICAgICAgICA8L1RhYlBhbmU+XHJcbiAgICAgICAgICAgIDxUYWJQYW5lXHJcbiAgICAgICAgICAgICAgdGFiPXtcclxuICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8RmlsZUltYWdlT3V0bGluZWQgLz5cclxuICAgICAgICAgICAgICAgICAgQXZhdGFyXHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGtleT1cIjVcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPFVwbG9hZFxyXG4gICAgICAgICAgICAgICAgc2hvd1VwbG9hZExpc3Q9e3tcclxuICAgICAgICAgICAgICAgICAgc2hvd1JlbW92ZUljb246IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgIHJlbW92ZUljb246IDxTdGFyT3V0bGluZWQgLz4sXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgbGlzdFR5cGU9XCJwaWN0dXJlLWNhcmRcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY292ZXItdXBsb2FkZXJcIlxyXG4gICAgICAgICAgICAgICAgc2hvd1VwbG9hZExpc3Q9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBiZWZvcmVVcGxvYWQ9e2JlZm9yZVVwbG9hZH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBtYXhDb3VudD17MX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7aW1hZ2VVcmwgPyAoXHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBzcmM9e2ltYWdlVXJsfVxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cImltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdDogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICB1cGxvYWRCdXR0b25cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9VcGxvYWQ+XHJcbiAgICAgICAgICAgIDwvVGFiUGFuZT5cclxuICAgICAgICAgICAgPFRhYlBhbmVcclxuICAgICAgICAgICAgICB0YWI9e1xyXG4gICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxEZWxldGVPdXRsaW5lZCAvPlxyXG4gICAgICAgICAgICAgICAgICBEZWxldGUgbXkgYWNjb3VudFxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBrZXk9XCI2XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxQb3Bjb25maXJtXHJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIkJlIGNhcmVmdWwgISBUaGlzIGFjdGlvbiBpcyBub3QgcmV2ZXJzaWJsZSAhXCJcclxuICAgICAgICAgICAgICAgIG9uQ29uZmlybT17ZGVsZXRlQWNjb3VudH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGRhbmdlcj5DbGljayBoZXJlIHRvIGRlbGV0ZSB5b3VyIGFjY291bnQ8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8L1BvcGNvbmZpcm0+XHJcbiAgICAgICAgICAgIDwvVGFiUGFuZT5cclxuICAgICAgICAgIDwvVGFicz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZXR0aW5ncztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IEZvcm0sIFNlbGVjdCwgUGFnZUhlYWRlciB9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5jb25zdCBTb3J0SW5wdXQgPSAoeyB0aXRsZSwgaXRlbURhdGEsIHNldERhdGEsIHR5cGUsIG9wdGlvbnMsIGNvbnRleHQgfSkgPT4ge1xyXG4gIGNvbnN0IHNvcnRBcnJheSA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgbGV0IG5ld0FyciA9IFtdO1xyXG5cclxuICAgIGlmICh2YWx1ZSA9PT0gXCJkYXRlLWFzY1wiKSB7XHJcbiAgICAgIG5ld0FyciA9IFsuLi5pdGVtRGF0YV0uc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgIHJldHVybiB0eXBlb2YgYS5jcmVhdGVkQXQgPT09IFwib2JqZWN0XCJcclxuICAgICAgICAgID8gbmV3IERhdGUoYS5jcmVhdGVkQXQuc2Vjb25kcyAqIDEwMDApIC1cclxuICAgICAgICAgICAgICBuZXcgRGF0ZShiLmNyZWF0ZWRBdC5zZWNvbmRzICogMTAwMClcclxuICAgICAgICAgIDogbmV3IERhdGUoYS5jcmVhdGVkQXQpIC0gbmV3IERhdGUoYi5jcmVhdGVkQXQpO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IFwiZGF0ZS1kZXNjXCIpIHtcclxuICAgICAgbmV3QXJyID0gWy4uLml0ZW1EYXRhXS5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBhLmNyZWF0ZWRBdCA9PT0gXCJvYmplY3RcIlxyXG4gICAgICAgICAgPyBuZXcgRGF0ZShiLmNyZWF0ZWRBdC5zZWNvbmRzICogMTAwMCkgLVxyXG4gICAgICAgICAgICAgIG5ldyBEYXRlKGEuY3JlYXRlZEF0LnNlY29uZHMgKiAxMDAwKVxyXG4gICAgICAgICAgOiBuZXcgRGF0ZShiLmNyZWF0ZWRBdCkgLSBuZXcgRGF0ZShhLmNyZWF0ZWRBdCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gXCJuYW1lLWRlc2NcIikge1xyXG4gICAgICBpZiAodHlwZSA9PT0gXCJsb2NhdGlvbnNcIikge1xyXG4gICAgICAgIG5ld0FyciA9IFsuLi5pdGVtRGF0YV0uc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgY29uc3Qga2V5QSA9IGEubmFtZS50b0xvd2VyQ2FzZSgpLFxyXG4gICAgICAgICAgICBrZXlCID0gYi5uYW1lLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgICAgICAgaWYgKGtleUEgPiBrZXlCKSByZXR1cm4gLTE7XHJcbiAgICAgICAgICBpZiAoa2V5QSA8IGtleUIpIHJldHVybiAxO1xyXG4gICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJzdG9yaWVzXCIpIHtcclxuICAgICAgICBuZXdBcnIgPSBbLi4uaXRlbURhdGFdLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgIGNvbnN0IGtleUEgPSBhLnRpdGxlLnRvTG93ZXJDYXNlKCksXHJcbiAgICAgICAgICAgIGtleUIgPSBiLnRpdGxlLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgICAgICAgaWYgKGtleUEgPiBrZXlCKSByZXR1cm4gLTE7XHJcbiAgICAgICAgICBpZiAoa2V5QSA8IGtleUIpIHJldHVybiAxO1xyXG4gICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IFwibmFtZS1hc2NcIikge1xyXG4gICAgICBpZiAodHlwZSA9PT0gXCJsb2NhdGlvbnNcIikge1xyXG4gICAgICAgIG5ld0FyciA9IFsuLi5pdGVtRGF0YV0uc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgY29uc3Qga2V5QSA9IGEubmFtZS50b0xvd2VyQ2FzZSgpLFxyXG4gICAgICAgICAgICBrZXlCID0gYi5uYW1lLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICBpZiAoa2V5QSA8IGtleUIpIHJldHVybiAtMTtcclxuICAgICAgICAgIGlmIChrZXlBID4ga2V5QikgcmV0dXJuIDE7XHJcbiAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSBcInN0b3JpZXNcIikge1xyXG4gICAgICAgIG5ld0FyciA9IFsuLi5pdGVtRGF0YV0uc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgY29uc3Qga2V5QSA9IGEudGl0bGUudG9Mb3dlckNhc2UoKSxcclxuICAgICAgICAgICAga2V5QiA9IGIudGl0bGUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgIGlmIChrZXlBIDwga2V5QikgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgaWYgKGtleUEgPiBrZXlCKSByZXR1cm4gMTtcclxuICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKHZhbHVlID09PSBcImZpcnN0bmFtZS1hc2NcIikge1xyXG4gICAgICBuZXdBcnIgPSBbLi4uaXRlbURhdGFdLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICBjb25zdCBrZXlBID0gYS5maXJzdG5hbWUudG9Mb3dlckNhc2UoKSxcclxuICAgICAgICAgIGtleUIgPSBiLmZpcnN0bmFtZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGlmIChrZXlBIDwga2V5QikgcmV0dXJuIC0xO1xyXG4gICAgICAgIGlmIChrZXlBID4ga2V5QikgcmV0dXJuIDE7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gXCJmaXJzdG5hbWUtZGVzY1wiKSB7XHJcbiAgICAgIG5ld0FyciA9IFsuLi5pdGVtRGF0YV0uc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgIGNvbnN0IGtleUEgPSBhLmZpcnN0bmFtZS50b0xvd2VyQ2FzZSgpLFxyXG4gICAgICAgICAga2V5QiA9IGIuZmlyc3RuYW1lLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgaWYgKGtleUEgPiBrZXlCKSByZXR1cm4gLTE7XHJcbiAgICAgICAgaWYgKGtleUEgPCBrZXlCKSByZXR1cm4gMTtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2UgaWYgKHZhbHVlID09PSBcImxhc3RuYW1lLWFzY1wiKSB7XHJcbiAgICAgIG5ld0FyciA9IFsuLi5pdGVtRGF0YV0uc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgIGNvbnN0IGtleUEgPSBhLmxhc3RuYW1lLnRvTG93ZXJDYXNlKCksXHJcbiAgICAgICAgICBrZXlCID0gYi5sYXN0bmFtZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGlmIChrZXlBIDwga2V5QikgcmV0dXJuIC0xO1xyXG4gICAgICAgIGlmIChrZXlBID4ga2V5QikgcmV0dXJuIDE7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gXCJsYXN0bmFtZS1kZXNjXCIpIHtcclxuICAgICAgbmV3QXJyID0gWy4uLml0ZW1EYXRhXS5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgY29uc3Qga2V5QSA9IGEubGFzdG5hbWUudG9Mb3dlckNhc2UoKSxcclxuICAgICAgICAgIGtleUIgPSBiLmxhc3RuYW1lLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgaWYgKGtleUEgPiBrZXlCKSByZXR1cm4gLTE7XHJcbiAgICAgICAgaWYgKGtleUEgPCBrZXlCKSByZXR1cm4gMTtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2UgaWYgKHZhbHVlID09PSBcInVzZXJuYW1lLWFzY1wiKSB7XHJcbiAgICAgIG5ld0FyciA9IFsuLi5pdGVtRGF0YV0uc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgIGNvbnN0IGtleUEgPSBhLnVzZXJuYW1lLnRvTG93ZXJDYXNlKCksXHJcbiAgICAgICAgICBrZXlCID0gYi51c2VybmFtZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGtleUEpO1xyXG4gICAgICAgIGlmIChrZXlBIDwga2V5QikgcmV0dXJuIC0xO1xyXG4gICAgICAgIGlmIChrZXlBID4ga2V5QikgcmV0dXJuIDE7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gXCJ1c2VybmFtZS1kZXNjXCIpIHtcclxuICAgICAgbmV3QXJyID0gWy4uLml0ZW1EYXRhXS5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgY29uc3Qga2V5QSA9IGEudXNlcm5hbWUudG9Mb3dlckNhc2UoKSxcclxuICAgICAgICAgIGtleUIgPSBiLnVzZXJuYW1lLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgaWYgKGtleUEgPiBrZXlCKSByZXR1cm4gLTE7XHJcbiAgICAgICAgaWYgKGtleUEgPCBrZXlCKSByZXR1cm4gMTtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBuZXdBcnIgPSBpdGVtRGF0YTtcclxuICAgIH1cclxuICAgIHNldERhdGEobmV3QXJyKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFBhZ2VIZWFkZXJcclxuICAgICAgICB0aXRsZT17YCR7aXRlbURhdGEubGVuZ3RofSAke3RpdGxlfWB9XHJcbiAgICAgICAgZXh0cmE9e1xyXG4gICAgICAgICAgPEZvcm0gaW5pdGlhbFZhbHVlcz17eyBzb3J0OiBcImRhdGUtZGVzY1wiIH19PlxyXG4gICAgICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwiU29ydCBieVwiIG5hbWU9XCJzb3J0XCI+XHJcbiAgICAgICAgICAgICAgPFNlbGVjdCBvbkNoYW5nZT17KHZhbCkgPT4gc29ydEFycmF5KHZhbCl9PlxyXG4gICAgICAgICAgICAgICAge29wdGlvbnMubWFwKChvcHRpb24sIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgPFNlbGVjdC5PcHRpb24ga2V5PXtpfSB2YWx1ZT17b3B0aW9uLnZhbHVlfT5cclxuICAgICAgICAgICAgICAgICAgICB7b3B0aW9uLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIDwvU2VsZWN0Lk9wdGlvbj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICB9XHJcbiAgICAgID5cclxuICAgICAgICB7Y29udGV4dCA9PT0gXCJwcml2YXRlXCIgJiYgdHlwZSA9PT0gXCJzdG9yaWVzXCIgPyAoXHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL3N0b3J5L25ld1wiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJhZGQtYnRuLWNpcmNsZVwiPlxyXG4gICAgICAgICAgICAgIDxpb24taWNvbiBuYW1lPVwiYWRkLWNpcmNsZVwiPjwvaW9uLWljb24+XHJcbiAgICAgICAgICAgICAgPHNwYW4+QWRkIGEgbmV3IHN0b3J5PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgKSA6IGNvbnRleHQgPT09IFwicHJpdmF0ZVwiICYmIHR5cGUgPT09IFwibG9jYXRpb25zXCIgPyAoXHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2xvY2F0aW9uL25ld1wiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJhZGQtYnRuLWNpcmNsZVwiPlxyXG4gICAgICAgICAgICAgIDxpb24taWNvbiBuYW1lPVwiYWRkLWNpcmNsZVwiPjwvaW9uLWljb24+XHJcbiAgICAgICAgICAgICAgPHNwYW4+QWRkIGEgbmV3IGxvY2F0aW9uPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgKSA6IGNvbnRleHQgPT09IFwicHJpdmF0ZVwiICYmIHR5cGUgPT09IFwiY2hhcmFjdGVyc1wiID8gKFxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9jaGFyYWN0ZXIvbmV3XCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImFkZC1idG4tY2lyY2xlXCI+XHJcbiAgICAgICAgICAgICAgPGlvbi1pY29uIG5hbWU9XCJhZGQtY2lyY2xlXCI+PC9pb24taWNvbj5cclxuICAgICAgICAgICAgICA8c3Bhbj5BZGQgYSBuZXcgY2hhcmFjdGVyPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgIDwvUGFnZUhlYWRlcj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTb3J0SW5wdXQ7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRGl2aWRlciB9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tIFwiLi4vY29tbW9uL1BhZ2luYXRpb25cIjtcclxuaW1wb3J0IExvYWRpbmdTY3JlZW4gZnJvbSBcIi4uL2hvYy9Mb2FkaW5nU2NyZWVuXCI7XHJcbmltcG9ydCBTb3J0SW5wdXQgZnJvbSBcIi4vU29ydElucHV0XCI7XHJcblxyXG5jb25zdCBTdG9yaWVzID0gKHsgc3RvcmllcywgbG9hZGluZywgdHlwZSwgY29udGV4dCB9KSA9PiB7XHJcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gUmVhY3QudXNlU3RhdGUoW10pO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0RGF0YShzdG9yaWVzKTtcclxuICB9LCBbc3Rvcmllc10pO1xyXG5cclxuICBjb25zdCBvcHRpb25zID0gW1xyXG4gICAgeyBuYW1lOiBcIkRhdGUgKGFzY2VuZGluZylcIiwgdmFsdWU6IFwiZGF0ZS1hc2NcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkRhdGUgKGRlc2NlbmRpbmcpXCIsIHZhbHVlOiBcImRhdGUtZGVzY1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiTmFtZSAoYXNjZW5kaW5nKVwiLCB2YWx1ZTogXCJuYW1lLWFzY1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiTmFtZSAoZGVzY2VuZGluZylcIiwgdmFsdWU6IFwibmFtZS1kZXNjXCIgfSxcclxuICBdO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLXN0b3JpZXNcIj5cclxuICAgICAgPExvYWRpbmdTY3JlZW4gbG9hZGluZz17bG9hZGluZ30+XHJcbiAgICAgICAgPFNvcnRJbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInN0b3JpZXNcIlxyXG4gICAgICAgICAgaXRlbURhdGE9e3N0b3JpZXN9XHJcbiAgICAgICAgICB0aXRsZT17XHJcbiAgICAgICAgICAgIHR5cGUgIT09IFwiZmF2b3JpdGVzXCJcclxuICAgICAgICAgICAgICA/IHN0b3JpZXMubGVuZ3RoID4gMVxyXG4gICAgICAgICAgICAgICAgPyBcIlN0b3JpZXNcIlxyXG4gICAgICAgICAgICAgICAgOiBcIlN0b3J5XCJcclxuICAgICAgICAgICAgICA6IHN0b3JpZXMubGVuZ3RoID4gMVxyXG4gICAgICAgICAgICAgID8gXCJGYXZvcml0ZSBTdG9yaWVzXCJcclxuICAgICAgICAgICAgICA6IFwiRmF2b3JpdGUgU3RvcnlcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc2V0RGF0YT17c2V0RGF0YX1cclxuICAgICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XHJcbiAgICAgICAgICBjb250ZXh0PXtjb250ZXh0fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICA8UGFnaW5hdGlvblxyXG4gICAgICAgICAgZGF0YT17ZGF0YX1cclxuICAgICAgICAgIHR5cGU9e3R5cGV9XHJcbiAgICAgICAgICBndXR0ZXI9e1wiMTZweFwifVxyXG4gICAgICAgICAgdHlwZT17dHlwZX1cclxuICAgICAgICAgIGl0ZW1UeXBlPVwic3Rvcmllc1wiXHJcbiAgICAgICAgICBjb2x1bW5zQ291bnRCcmVha1BvaW50cz17eyAzNTA6IDEsIDc1MDogMiwgOTAwOiAzLCAxMjAwOiA0IH19XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9Mb2FkaW5nU2NyZWVuPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0b3JpZXM7XHJcbiIsImltcG9ydCB7IFJvdywgQ29sIH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmNvbnN0IFRhYnMgPSAoeyB0YWJzLCBjaGFuZ2VUYWIsIGN1cnJlbnRUYWIgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtdGFic1wiIGRhdGEtYW9zPVwiem9vbS1pblwiPlxyXG4gICAgICA8Um93IGd1dHRlcj17NDB9IGFsaWduPVwibWlkZGxlXCIganVzdGlmeT1cImNlbnRlclwiPlxyXG4gICAgICAgIHt0YWJzLm1hcCgodGFiKSA9PiAoXHJcbiAgICAgICAgICA8Q29sIGtleT17dGFifT5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHRhYiAke2N1cnJlbnRUYWIgPT09IHRhYiA/IFwiYWN0aXZlXCIgOiBcIlwifWB9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2hhbmdlVGFiKHRhYil9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8c3Bhbj57dGFifTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICApKX1cclxuICAgICAgPC9Sb3c+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFicztcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQsIGNyZWF0ZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcclxuaW1wb3J0IHsgYXV0aCwgZGIsIHByb3ZpZGVyIH0gZnJvbSBcIi4uL3JlZHV4L2ZiQ29uZmlnXCI7XHJcbmltcG9ydCB7IG1lc3NhZ2UgfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuY29uc3QgYXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUHJvdmlkZUF1dGgoeyBjaGlsZHJlbiB9KSB7XHJcbiAgY29uc3QgYXV0aCA9IHVzZVByb3ZpZGVBdXRoKCk7XHJcbiAgcmV0dXJuIDxhdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17YXV0aH0+e2NoaWxkcmVufTwvYXV0aENvbnRleHQuUHJvdmlkZXI+O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXNlQXV0aCA9ICgpID0+IHtcclxuICByZXR1cm4gdXNlQ29udGV4dChhdXRoQ29udGV4dCk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiB1c2VQcm92aWRlQXV0aCgpIHtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW2Vycm9ycywgc2V0RXJyb3JzXSA9IHVzZVN0YXRlKHtcclxuICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgZW1haWw6IFwiXCIsXHJcbiAgICB1c2VybmFtZTogXCJcIixcclxuICB9KTtcclxuXHJcbiAgLy8gV3JhcCBhbnkgRmlyZWJhc2UgbWV0aG9kcyB3ZSB3YW50IHRvIHVzZSBtYWtpbmcgc3VyZSAuLi5cclxuICAvLyAuLi4gdG8gc2F2ZSB0aGUgdXNlciB0byBzdGF0ZS5cclxuICBjb25zdCBzaWduaW4gPSAoZW1haWwsIHBhc3N3b3JkKSA9PiB7XHJcbiAgICByZXR1cm4gYXV0aFxyXG4gICAgICAuc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBzZXRFcnJvcnMoeyBwYXNzd29yZDogXCJcIiwgZW1haWw6IFwiXCIgfSk7XHJcbiAgICAgICAgc2V0VXNlcihyZXNwb25zZS51c2VyKTtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UudXNlcjtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBpZiAoZXJyLmNvZGUgPT09IFwiYXV0aC93cm9uZy1wYXNzd29yZFwiKSB7XHJcbiAgICAgICAgICBzZXRFcnJvcnMoeyAuLi5lcnJvcnMsIHBhc3N3b3JkOiBlcnIubWVzc2FnZSB9KTtcclxuICAgICAgICB9IGVsc2UgaWYgKGVyci5jb2RlID09PSBcImF1dGgvdXNlci1ub3QtZm91bmRcIikge1xyXG4gICAgICAgICAgc2V0RXJyb3JzKHsgLi4uZXJyb3JzLCBlbWFpbDogZXJyLm1lc3NhZ2UgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzaWduSW5XaXRoR29vZ2xlID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGF1dGhcclxuICAgICAgLnNpZ25JbldpdGhQb3B1cChwcm92aWRlcilcclxuICAgICAgLnRoZW4oYXN5bmMgKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgc2V0VXNlcihyZXNwb25zZS51c2VyKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2lnbnVwID0gKGVtYWlsLCBwYXNzd29yZCwgdXNlcm5hbWUpID0+IHtcclxuICAgIGF1dGhcclxuICAgICAgLmNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpXHJcbiAgICAgIC50aGVuKGFzeW5jIChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHNldEVycm9ycyh7XHJcbiAgICAgICAgICBwYXNzd29yZDogXCJcIixcclxuICAgICAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICAgICAgdXNlcm5hbWU6IFwiXCIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2V0VXNlcih7IC4uLnJlc3BvbnNlLnVzZXIsIHVzZXJuYW1lOiB1c2VybmFtZSB9KTtcclxuICAgICAgICByZXR1cm4gYXdhaXQgZGIuY29sbGVjdGlvbihcInVzZXJzXCIpLmRvYyhyZXNwb25zZS51c2VyLnVpZCkuc2V0KHtcclxuICAgICAgICAgIHVzZXJuYW1lLFxyXG4gICAgICAgICAgbGlrZXNDb3VudDogMCxcclxuICAgICAgICAgIHR3aXR0ZXI6IFwiXCIsXHJcbiAgICAgICAgICBmYWNlYm9vazogXCJcIixcclxuICAgICAgICAgIGluc3RhZ3JhbTogXCJcIixcclxuICAgICAgICAgIGRldmlhbnRhcnQ6IFwiXCIsXHJcbiAgICAgICAgICBiaW9ncmFwaHk6IFwiXCIsXHJcbiAgICAgICAgICBiYWRnZXM6IFtdLFxyXG4gICAgICAgICAgY3JlYXRlZEF0OiBmaXJlYmFzZS5maXJlc3RvcmUuRmllbGRWYWx1ZS5zZXJ2ZXJUaW1lc3RhbXAoKSxcclxuICAgICAgICAgIGltYWdlOiBcIlwiLFxyXG4gICAgICAgICAgc3VzcGVuZGVkOiBmYWxzZSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBhdXRoLmN1cnJlbnRVc2VyLnNlbmRFbWFpbFZlcmlmaWNhdGlvbigpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIGVyci5jb2RlID09PSBcImF1dGgvZW1haWwtYWxyZWFkeS1pbi11c2VcIiB8fFxyXG4gICAgICAgICAgZXJyLmNvZGUgPT09IFwiYXV0aC9pbnZhbGlkLWVtYWlsXCJcclxuICAgICAgICApIHtcclxuICAgICAgICAgIHNldEVycm9ycyh7IC4uLmVycm9ycywgZW1haWw6IGVyci5tZXNzYWdlIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZXJyLmNvZGUgPT09IFwiYXV0aC93ZWFrLXBhc3N3b3JkXCIpIHtcclxuICAgICAgICAgIHNldEVycm9ycyh7IC4uLmVycm9ycywgcGFzc3dvcmQ6IGVyci5tZXNzYWdlIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2lnbm91dCA9ICgpID0+IHtcclxuICAgIHJldHVybiBhdXRoLnNpZ25PdXQoKS50aGVuKCgpID0+IHtcclxuICAgICAgc2V0VXNlcihmYWxzZSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzZW5kUGFzc3dvcmRSZXNldEVtYWlsID0gKGVtYWlsKSA9PiB7XHJcbiAgICByZXR1cm4gYXV0aC5zZW5kUGFzc3dvcmRSZXNldEVtYWlsKGVtYWlsKS50aGVuKCgpID0+IHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjb25maXJtUGFzc3dvcmRSZXNldCA9IChjb2RlLCBwYXNzd29yZCkgPT4ge1xyXG4gICAgcmV0dXJuIGF1dGguY29uZmlybVBhc3N3b3JkUmVzZXQoY29kZSwgcGFzc3dvcmQpLnRoZW4oKCkgPT4ge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNoYW5nZVVzZXJuYW1lID0gKHVzZXJuYW1lKSA9PiB7XHJcbiAgICByZXR1cm4gZGJcclxuICAgICAgLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKVxyXG4gICAgICAuZG9jKGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gICAgICAudXBkYXRlKHsgdXNlcm5hbWUgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdmVyaWZ5RW1haWwgPSAoKSA9PiB7XHJcbiAgICBhdXRoLmN1cnJlbnRVc2VyXHJcbiAgICAgIC5zZW5kRW1haWxWZXJpZmljYXRpb24oKVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgbWVzc2FnZS5pbmZvKFwiVmVyaWZpY2F0aW9uIEVtYWlsIHNlbnQuIENoZWNrIHlvdXIgaW5ib3ggIVwiKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBtZXNzYWdlLmVycm9yKGVyci5tZXNzYWdlKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGVsZXRlQWNjb3VudCA9ICgpID0+IHtcclxuICAgIGF1dGguY3VycmVudFVzZXIuZGVsZXRlKCk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHVuc3Vic2NyaWJlID0gYXV0aC5vbkF1dGhTdGF0ZUNoYW5nZWQoKHVzZXIpID0+IHtcclxuICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICBzZXRVc2VyKHVzZXIpO1xyXG4gICAgICAgIGlmICh1c2VyLnVpZCkge1xyXG4gICAgICAgICAgbGV0IHVzZXJuYW1lID0gXCJcIjtcclxuICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICBkYi5jb2xsZWN0aW9uKFwidXNlcnNcIilcclxuICAgICAgICAgICAgLmRvYyh1c2VyLnVpZClcclxuICAgICAgICAgICAgLm9uU25hcHNob3QoKGRvYykgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChkb2MuZXhpc3RzKSB7XHJcbiAgICAgICAgICAgICAgICB1c2VybmFtZSA9IGRvYy5kYXRhKCkudXNlcm5hbWU7XHJcbiAgICAgICAgICAgICAgICBzZXRVc2VyKHsgLi4udXNlciwgdXNlcm5hbWUsIGltYWdlOiBkb2MuZGF0YSgpLmltYWdlIH0pO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldFVzZXIoZmFsc2UpO1xyXG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIENsZWFudXAgc3Vic2NyaXB0aW9uIG9uIHVubW91bnRcclxuICAgIHJldHVybiAoKSA9PiB1bnN1YnNjcmliZSgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgLy8gUmV0dXJuIHRoZSB1c2VyIG9iamVjdCBhbmQgYXV0aCBtZXRob2RzXHJcbiAgcmV0dXJuIHtcclxuICAgIGRlbGV0ZUFjY291bnQsXHJcbiAgICBpc0xvYWRpbmcsXHJcbiAgICBlcnJvcnMsXHJcbiAgICB1c2VyLFxyXG4gICAgc2lnbmluLFxyXG4gICAgc2lnbnVwLFxyXG4gICAgc2lnbm91dCxcclxuICAgIHNlbmRQYXNzd29yZFJlc2V0RW1haWwsXHJcbiAgICBjb25maXJtUGFzc3dvcmRSZXNldCxcclxuICAgIHZlcmlmeUVtYWlsLFxyXG4gICAgc2lnbkluV2l0aEdvb2dsZSxcclxuICAgIGNoYW5nZVVzZXJuYW1lLFxyXG4gIH07XHJcbn1cclxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBhZGRCYXNlUGF0aCxcbiAgYWRkTG9jYWxlLFxuICBpc0xvY2FsVVJMLFxuICBOZXh0Um91dGVyLFxuICBQcmVmZXRjaE9wdGlvbnMsXG4gIHJlc29sdmVIcmVmLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBSZXF1aXJlZEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IG5ldmVyIDogS1xufVtrZXlvZiBUXVxudHlwZSBPcHRpb25hbEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IEsgOiBuZXZlclxufVtrZXlvZiBUXVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbn1cbnR5cGUgTGlua1Byb3BzUmVxdWlyZWQgPSBSZXF1aXJlZEtleXM8TGlua1Byb3BzPlxudHlwZSBMaW5rUHJvcHNPcHRpb25hbCA9IE9wdGlvbmFsS2V5czxMaW5rUHJvcHM+XG5cbmxldCBjYWNoZWRPYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbmNvbnN0IGxpc3RlbmVycyA9IG5ldyBNYXA8RWxlbWVudCwgKCkgPT4gdm9pZD4oKVxuY29uc3QgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlciA6IG51bGxcbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBnZXRPYnNlcnZlcigpOiBJbnRlcnNlY3Rpb25PYnNlcnZlciB8IHVuZGVmaW5lZCB7XG4gIC8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG4gIGlmIChjYWNoZWRPYnNlcnZlcikge1xuICAgIHJldHVybiBjYWNoZWRPYnNlcnZlclxuICB9XG5cbiAgLy8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG4gIGlmICghSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICByZXR1cm4gKGNhY2hlZE9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgIChlbnRyaWVzKSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGlmICghbGlzdGVuZXJzLmhhcyhlbnRyeS50YXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYiA9IGxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KSFcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMCkge1xuICAgICAgICAgIGNhY2hlZE9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgbGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgY2IoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgeyByb290TWFyZ2luOiAnMjAwcHgnIH1cbiAgKSlcbn1cblxuY29uc3QgbGlzdGVuVG9JbnRlcnNlY3Rpb25zID0gKGVsOiBFbGVtZW50LCBjYjogKCkgPT4gdm9pZCkgPT4ge1xuICBjb25zdCBvYnNlcnZlciA9IGdldE9ic2VydmVyKClcbiAgaWYgKCFvYnNlcnZlcikge1xuICAgIHJldHVybiAoKSA9PiB7fVxuICB9XG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbClcbiAgbGlzdGVuZXJzLnNldChlbCwgY2IpXG4gIHJldHVybiAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbClcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgIH1cbiAgICBsaXN0ZW5lcnMuZGVsZXRlKGVsKVxuICB9XG59XG5cbmZ1bmN0aW9uIHByZWZldGNoKFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgb3B0aW9ucz86IFByZWZldGNoT3B0aW9uc1xuKTogdm9pZCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuXG4gIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG4gIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXSA9IHRydWVcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KSB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gIHJldHVybiAoXG4gICAgKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgZXZlbnQubWV0YUtleSB8fFxuICAgIGV2ZW50LmN0cmxLZXkgfHxcbiAgICBldmVudC5zaGlmdEtleSB8fFxuICAgIGV2ZW50LmFsdEtleSB8fCAvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuICAgIChldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMilcbiAgKVxufVxuXG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChcbiAgZTogUmVhY3QuTW91c2VFdmVudCxcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIHJlcGxhY2U/OiBib29sZWFuLFxuICBzaGFsbG93PzogYm9vbGVhbixcbiAgc2Nyb2xsPzogYm9vbGVhblxuKTogdm9pZCB7XG4gIGNvbnN0IHsgbm9kZU5hbWUgfSA9IGUuY3VycmVudFRhcmdldFxuXG4gIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgIWlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgcmV0dXJuXG4gIH1cblxuICBlLnByZXZlbnREZWZhdWx0KClcblxuICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICB9XG5cbiAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywgeyBzaGFsbG93IH0pLnRoZW4oXG4gICAgKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmICghc3VjY2VzcykgcmV0dXJuXG4gICAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKClcbiAgICAgIH1cbiAgICB9XG4gIClcbn1cblxuZnVuY3Rpb24gTGluayhwcm9wczogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48TGlua1Byb3BzPikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzOiB7XG4gICAgICBrZXk6IHN0cmluZ1xuICAgICAgZXhwZWN0ZWQ6IHN0cmluZ1xuICAgICAgYWN0dWFsOiBzdHJpbmdcbiAgICB9KSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgICBgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArXG4gICAgICAgICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIlxuICAgICAgICAgICAgOiAnJylcbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc1JlcXVpcmVkLCB0cnVlPiA9IHtcbiAgICAgIGhyZWY6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHM6IExpbmtQcm9wc1JlcXVpcmVkW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIHJlcXVpcmVkUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzUmVxdWlyZWRbXVxuICAgIHJlcXVpcmVkUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNSZXF1aXJlZCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2hyZWYnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldID09IG51bGwgfHxcbiAgICAgICAgICAodHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0JylcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc09wdGlvbmFsLCB0cnVlPiA9IHtcbiAgICAgIGFzOiB0cnVlLFxuICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgIHNoYWxsb3c6IHRydWUsXG4gICAgICBwYXNzSHJlZjogdHJ1ZSxcbiAgICAgIHByZWZldGNoOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCBvcHRpb25hbFByb3BzOiBMaW5rUHJvcHNPcHRpb25hbFtdID0gT2JqZWN0LmtleXMoXG4gICAgICBvcHRpb25hbFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc09wdGlvbmFsW11cbiAgICBvcHRpb25hbFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzT3B0aW9uYWwpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdhcycpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gJiZcbiAgICAgICAgICB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiZcbiAgICAgICAgICB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCdcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBrZXkgPT09ICdyZXBsYWNlJyB8fFxuICAgICAgICBrZXkgPT09ICdzY3JvbGwnIHx8XG4gICAgICAgIGtleSA9PT0gJ3NoYWxsb3cnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Bhc3NIcmVmJyB8fFxuICAgICAgICBrZXkgPT09ICdwcmVmZXRjaCdcbiAgICAgICkge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgYWN0dWFsOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgY29uc3QgaGFzV2FybmVkID0gUmVhY3QudXNlUmVmKGZhbHNlKVxuICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICApXG4gICAgfVxuICB9XG4gIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcblxuICBjb25zdCBbY2hpbGRFbG0sIHNldENoaWxkRWxtXSA9IFJlYWN0LnVzZVN0YXRlPEVsZW1lbnQ+KClcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBwYXRobmFtZSA9IChyb3V0ZXIgJiYgcm91dGVyLnBhdGhuYW1lKSB8fCAnLydcblxuICBjb25zdCB7IGhyZWYsIGFzIH0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5ocmVmLCB0cnVlKVxuICAgIHJldHVybiB7XG4gICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICBhczogcHJvcHMuYXNcbiAgICAgICAgPyByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuYXMpXG4gICAgICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWYsXG4gICAgfVxuICB9LCBbcGF0aG5hbWUsIHByb3BzLmhyZWYsIHByb3BzLmFzXSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChcbiAgICAgIHAgJiZcbiAgICAgIEludGVyc2VjdGlvbk9ic2VydmVyICYmXG4gICAgICBjaGlsZEVsbSAmJlxuICAgICAgY2hpbGRFbG0udGFnTmFtZSAmJlxuICAgICAgaXNMb2NhbFVSTChocmVmKVxuICAgICkge1xuICAgICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9IHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXVxuICAgICAgaWYgKCFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RlblRvSW50ZXJzZWN0aW9ucyhjaGlsZEVsbSwgKCkgPT4ge1xuICAgICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9LCBbcCwgY2hpbGRFbG0sIGhyZWYsIGFzLCByb3V0ZXJdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwgfSA9IHByb3BzXG4gIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgfVxuXG4gIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiAoZWw6IGFueSkgPT4ge1xuICAgICAgaWYgKGVsKSBzZXRDaGlsZEVsbShlbClcblxuICAgICAgaWYgKGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZC5yZWYoZWwpXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGQucmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbClcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgaWYgKHApIHtcbiAgICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgICB9XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gICAgfVxuICB9XG5cbiAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICBpZiAocHJvcHMucGFzc0hyZWYgfHwgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpKSB7XG4gICAgY2hpbGRQcm9wcy5ocmVmID0gYWRkQmFzZVBhdGgoXG4gICAgICBhZGRMb2NhbGUoYXMsIHJvdXRlciAmJiByb3V0ZXIubG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmRlZmF1bHRMb2NhbGUpXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcylcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aFxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSFxuICA/IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKVxuICAgICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nXG4gICAgICB9XG4gICAgfVxuICA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbiAgJ2xvY2FsZScsXG4gICdsb2NhbGVzJyxcbiAgJ2RlZmF1bHRMb2NhbGUnLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIEFycmF5LmlzQXJyYXkoX3JvdXRlcltwcm9wZXJ0eV0pID8gW10gOiB7fSxcbiAgICAgICAgX3JvdXRlcltwcm9wZXJ0eV1cbiAgICAgICkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KSB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIFRva2VuaXplIGlucHV0IHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gbGV4ZXIoc3RyKSB7XG4gICAgdmFyIHRva2VucyA9IFtdO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSBzdHJbaV07XG4gICAgICAgIGlmIChjaGFyID09PSBcIipcIiB8fCBjaGFyID09PSBcIitcIiB8fCBjaGFyID09PSBcIj9cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk1PRElGSUVSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFU0NBUEVEX0NIQVJcIiwgaW5kZXg6IGkrKywgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwie1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiT1BFTlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwifVwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0xPU0VcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIjpcIikge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhciBjb2RlID0gc3RyLmNoYXJDb2RlQXQoaik7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIC8vIGAwLTlgXG4gICAgICAgICAgICAgICAgKGNvZGUgPj0gNDggJiYgY29kZSA8PSA1NykgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYEEtWmBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gNjUgJiYgY29kZSA8PSA5MCkgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYGEtemBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gOTcgJiYgY29kZSA8PSAxMjIpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBfYFxuICAgICAgICAgICAgICAgICAgICBjb2RlID09PSA5NSkge1xuICAgICAgICAgICAgICAgICAgICBuYW1lICs9IHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIW5hbWUpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGFyYW1ldGVyIG5hbWUgYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJOQU1FXCIsIGluZGV4OiBpLCB2YWx1ZTogbmFtZSB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKFwiKSB7XG4gICAgICAgICAgICB2YXIgY291bnQgPSAxO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm4gPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlBhdHRlcm4gY2Fubm90IHN0YXJ0IHdpdGggXFxcIj9cXFwiIGF0IFwiICsgaik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdICsgc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIilcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudC0tO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHN0cltqXSA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cltqICsgMV0gIT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2FwdHVyaW5nIGdyb3VwcyBhcmUgbm90IGFsbG93ZWQgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvdW50KVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmJhbGFuY2VkIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIGlmICghcGF0dGVybilcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiUEFUVEVSTlwiLCBpbmRleDogaSwgdmFsdWU6IHBhdHRlcm4gfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDSEFSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgfVxuICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFTkRcIiwgaW5kZXg6IGksIHZhbHVlOiBcIlwiIH0pO1xuICAgIHJldHVybiB0b2tlbnM7XG59XG4vKipcbiAqIFBhcnNlIGEgc3RyaW5nIGZvciB0aGUgcmF3IHRva2Vucy5cbiAqL1xuZnVuY3Rpb24gcGFyc2Uoc3RyLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgdG9rZW5zID0gbGV4ZXIoc3RyKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLnByZWZpeGVzLCBwcmVmaXhlcyA9IF9hID09PSB2b2lkIDAgPyBcIi4vXCIgOiBfYTtcbiAgICB2YXIgZGVmYXVsdFBhdHRlcm4gPSBcIlteXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl0rP1wiO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIga2V5ID0gMDtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHBhdGggPSBcIlwiO1xuICAgIHZhciB0cnlDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgaWYgKGkgPCB0b2tlbnMubGVuZ3RoICYmIHRva2Vuc1tpXS50eXBlID09PSB0eXBlKVxuICAgICAgICAgICAgcmV0dXJuIHRva2Vuc1tpKytdLnZhbHVlO1xuICAgIH07XG4gICAgdmFyIG11c3RDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdHJ5Q29uc3VtZSh0eXBlKTtcbiAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIHZhciBfYSA9IHRva2Vuc1tpXSwgbmV4dFR5cGUgPSBfYS50eXBlLCBpbmRleCA9IF9hLmluZGV4O1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5leHBlY3RlZCBcIiArIG5leHRUeXBlICsgXCIgYXQgXCIgKyBpbmRleCArIFwiLCBleHBlY3RlZCBcIiArIHR5cGUpO1xuICAgIH07XG4gICAgdmFyIGNvbnN1bWVUZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gXCJcIjtcbiAgICAgICAgdmFyIHZhbHVlO1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgd2hpbGUgKCh2YWx1ZSA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIikpKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIHdoaWxlIChpIDwgdG9rZW5zLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpO1xuICAgICAgICB2YXIgbmFtZSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpO1xuICAgICAgICB2YXIgcGF0dGVybiA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpO1xuICAgICAgICBpZiAobmFtZSB8fCBwYXR0ZXJuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY2hhciB8fCBcIlwiO1xuICAgICAgICAgICAgaWYgKHByZWZpeGVzLmluZGV4T2YocHJlZml4KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHByZWZpeDtcbiAgICAgICAgICAgICAgICBwcmVmaXggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lIHx8IGtleSsrLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBwYXR0ZXJuIHx8IGRlZmF1bHRQYXR0ZXJuLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdmFsdWUgPSBjaGFyIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIik7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgcGF0aCArPSB2YWx1ZTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvcGVuID0gdHJ5Q29uc3VtZShcIk9QRU5cIik7XG4gICAgICAgIGlmIChvcGVuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIHZhciBuYW1lXzEgPSB0cnlDb25zdW1lKFwiTkFNRVwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm5fMSA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIG11c3RDb25zdW1lKFwiQ0xPU0VcIik7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZV8xIHx8IChwYXR0ZXJuXzEgPyBrZXkrKyA6IFwiXCIpLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IG5hbWVfMSAmJiAhcGF0dGVybl8xID8gZGVmYXVsdFBhdHRlcm4gOiBwYXR0ZXJuXzEsXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBzdWZmaXgsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIG11c3RDb25zdW1lKFwiRU5EXCIpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0cy5wYXJzZSA9IHBhcnNlO1xuLyoqXG4gKiBDb21waWxlIGEgc3RyaW5nIHRvIGEgdGVtcGxhdGUgZnVuY3Rpb24gZm9yIHRoZSBwYXRoLlxuICovXG5mdW5jdGlvbiBjb21waWxlKHN0ciwgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb0Z1bmN0aW9uKHBhcnNlKHN0ciwgb3B0aW9ucyksIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5jb21waWxlID0gY29tcGlsZTtcbi8qKlxuICogRXhwb3NlIGEgbWV0aG9kIGZvciB0cmFuc2Zvcm1pbmcgdG9rZW5zIGludG8gdGhlIHBhdGggZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvRnVuY3Rpb24odG9rZW5zLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgcmVGbGFncyA9IGZsYWdzKG9wdGlvbnMpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYSwgX2IgPSBvcHRpb25zLnZhbGlkYXRlLCB2YWxpZGF0ZSA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2I7XG4gICAgLy8gQ29tcGlsZSBhbGwgdGhlIHRva2VucyBpbnRvIHJlZ2V4cHMuXG4gICAgdmFyIG1hdGNoZXMgPSB0b2tlbnMubWFwKGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChcIl4oPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikkXCIsIHJlRmxhZ3MpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc1tpXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHZhbHVlID0gZGF0YSA/IGRhdGFbdG9rZW4ubmFtZV0gOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB2YXIgb3B0aW9uYWwgPSB0b2tlbi5tb2RpZmllciA9PT0gXCI/XCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiO1xuICAgICAgICAgICAgdmFyIHJlcGVhdCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIrXCI7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcGVhdCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgYmUgZW1wdHlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsdWUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUodmFsdWVbal0sIHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBhbGwgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUoU3RyaW5nKHZhbHVlKSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgdmFyIHR5cGVPZk1lc3NhZ2UgPSByZXBlYXQgPyBcImFuIGFycmF5XCIgOiBcImEgc3RyaW5nXCI7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBiZSBcIiArIHR5cGVPZk1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH07XG59XG5leHBvcnRzLnRva2Vuc1RvRnVuY3Rpb24gPSB0b2tlbnNUb0Z1bmN0aW9uO1xuLyoqXG4gKiBDcmVhdGUgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgc3BlYy5cbiAqL1xuZnVuY3Rpb24gbWF0Y2goc3RyLCBvcHRpb25zKSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICB2YXIgcmUgPSBwYXRoVG9SZWdleHAoc3RyLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLm1hdGNoID0gbWF0Y2g7XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIG91dHB1dC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5kZWNvZGUsIGRlY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hO1xuICAgIHJldHVybiBmdW5jdGlvbiAocGF0aG5hbWUpIHtcbiAgICAgICAgdmFyIG0gPSByZS5leGVjKHBhdGhuYW1lKTtcbiAgICAgICAgaWYgKCFtKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgcGF0aCA9IG1bMF0sIGluZGV4ID0gbS5pbmRleDtcbiAgICAgICAgdmFyIHBhcmFtcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgaWYgKG1baV0gPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJjb250aW51ZVwiO1xuICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbaSAtIDFdO1xuICAgICAgICAgICAgaWYgKGtleS5tb2RpZmllciA9PT0gXCIqXCIgfHwga2V5Lm1vZGlmaWVyID09PSBcIitcIikge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBtW2ldLnNwbGl0KGtleS5wcmVmaXggKyBrZXkuc3VmZml4KS5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWNvZGUodmFsdWUsIGtleSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gZGVjb2RlKG1baV0sIGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgX2xvb3BfMShpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBwYXRoOiBwYXRoLCBpbmRleDogaW5kZXgsIHBhcmFtczogcGFyYW1zIH07XG4gICAgfTtcbn1cbmV4cG9ydHMucmVnZXhwVG9GdW5jdGlvbiA9IHJlZ2V4cFRvRnVuY3Rpb247XG4vKipcbiAqIEVzY2FwZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGVzY2FwZVN0cmluZyhzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbLisqPz1eIToke30oKVtcXF18L1xcXFxdKS9nLCBcIlxcXFwkMVwiKTtcbn1cbi8qKlxuICogR2V0IHRoZSBmbGFncyBmb3IgYSByZWdleHAgZnJvbSB0aGUgb3B0aW9ucy5cbiAqL1xuZnVuY3Rpb24gZmxhZ3Mob3B0aW9ucykge1xuICAgIHJldHVybiBvcHRpb25zICYmIG9wdGlvbnMuc2Vuc2l0aXZlID8gXCJcIiA6IFwiaVwiO1xufVxuLyoqXG4gKiBQdWxsIG91dCBrZXlzIGZyb20gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpIHtcbiAgICBpZiAoIWtleXMpXG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIC8vIFVzZSBhIG5lZ2F0aXZlIGxvb2thaGVhZCB0byBtYXRjaCBvbmx5IGNhcHR1cmluZyBncm91cHMuXG4gICAgdmFyIGdyb3VwcyA9IHBhdGguc291cmNlLm1hdGNoKC9cXCgoPyFcXD8pL2cpO1xuICAgIGlmIChncm91cHMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBncm91cHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGtleXMucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogaSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuLyoqXG4gKiBUcmFuc2Zvcm0gYW4gYXJyYXkgaW50byBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlUb1JlZ2V4cChwYXRocywga2V5cywgb3B0aW9ucykge1xuICAgIHZhciBwYXJ0cyA9IHBhdGhzLm1hcChmdW5jdGlvbiAocGF0aCkgeyByZXR1cm4gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpLnNvdXJjZTsgfSk7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXCIoPzpcIiArIHBhcnRzLmpvaW4oXCJ8XCIpICsgXCIpXCIsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbi8qKlxuICogQ3JlYXRlIGEgcGF0aCByZWdleHAgZnJvbSBzdHJpbmcgaW5wdXQuXG4gKi9cbmZ1bmN0aW9uIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9SZWdleHAocGFyc2UocGF0aCwgb3B0aW9ucyksIGtleXMsIG9wdGlvbnMpO1xufVxuLyoqXG4gKiBFeHBvc2UgYSBmdW5jdGlvbiBmb3IgdGFraW5nIHRva2VucyBhbmQgcmV0dXJuaW5nIGEgUmVnRXhwLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb1JlZ2V4cCh0b2tlbnMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuc3RyaWN0LCBzdHJpY3QgPSBfYSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYSwgX2IgPSBvcHRpb25zLnN0YXJ0LCBzdGFydCA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2IsIF9jID0gb3B0aW9ucy5lbmQsIGVuZCA9IF9jID09PSB2b2lkIDAgPyB0cnVlIDogX2MsIF9kID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9kID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9kO1xuICAgIHZhciBlbmRzV2l0aCA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZW5kc1dpdGggfHwgXCJcIikgKyBcIl18JFwiO1xuICAgIHZhciBkZWxpbWl0ZXIgPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXVwiO1xuICAgIHZhciByb3V0ZSA9IHN0YXJ0ID8gXCJeXCIgOiBcIlwiO1xuICAgIC8vIEl0ZXJhdGUgb3ZlciB0aGUgdG9rZW5zIGFuZCBjcmVhdGUgb3VyIHJlZ2V4cCBzdHJpbmcuXG4gICAgZm9yICh2YXIgX2kgPSAwLCB0b2tlbnNfMSA9IHRva2VuczsgX2kgPCB0b2tlbnNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zXzFbX2ldO1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5wcmVmaXgpKTtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnN1ZmZpeCkpO1xuICAgICAgICAgICAgaWYgKHRva2VuLnBhdHRlcm4pIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5cylcbiAgICAgICAgICAgICAgICAgICAga2V5cy5wdXNoKHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAocHJlZml4IHx8IHN1ZmZpeCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1vZCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiA/IFwiP1wiIDogXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIigoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikoPzpcIiArIHN1ZmZpeCArIHByZWZpeCArIFwiKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKSopXCIgKyBzdWZmaXggKyBcIilcIiArIG1vZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVuZCkge1xuICAgICAgICBpZiAoIXN0cmljdClcbiAgICAgICAgICAgIHJvdXRlICs9IGRlbGltaXRlciArIFwiP1wiO1xuICAgICAgICByb3V0ZSArPSAhb3B0aW9ucy5lbmRzV2l0aCA/IFwiJFwiIDogXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgZW5kVG9rZW4gPSB0b2tlbnNbdG9rZW5zLmxlbmd0aCAtIDFdO1xuICAgICAgICB2YXIgaXNFbmREZWxpbWl0ZWQgPSB0eXBlb2YgZW5kVG9rZW4gPT09IFwic3RyaW5nXCJcbiAgICAgICAgICAgID8gZGVsaW1pdGVyLmluZGV4T2YoZW5kVG9rZW5bZW5kVG9rZW4ubGVuZ3RoIC0gMV0pID4gLTFcbiAgICAgICAgICAgIDogLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICAgICAgZW5kVG9rZW4gPT09IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKCFzdHJpY3QpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBkZWxpbWl0ZXIgKyBcIig/PVwiICsgZW5kc1dpdGggKyBcIikpP1wiO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNFbmREZWxpbWl0ZWQpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD89XCIgKyBkZWxpbWl0ZXIgKyBcInxcIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAocm91dGUsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbmV4cG9ydHMudG9rZW5zVG9SZWdleHAgPSB0b2tlbnNUb1JlZ2V4cDtcbi8qKlxuICogTm9ybWFsaXplIHRoZSBnaXZlbiBwYXRoIHN0cmluZywgcmV0dXJuaW5nIGEgcmVndWxhciBleHByZXNzaW9uLlxuICpcbiAqIEFuIGVtcHR5IGFycmF5IGNhbiBiZSBwYXNzZWQgaW4gZm9yIHRoZSBrZXlzLCB3aGljaCB3aWxsIGhvbGQgdGhlXG4gKiBwbGFjZWhvbGRlciBrZXkgZGVzY3JpcHRpb25zLiBGb3IgZXhhbXBsZSwgdXNpbmcgYC91c2VyLzppZGAsIGBrZXlzYCB3aWxsXG4gKiBjb250YWluIGBbeyBuYW1lOiAnaWQnLCBkZWxpbWl0ZXI6ICcvJywgb3B0aW9uYWw6IGZhbHNlLCByZXBlYXQ6IGZhbHNlIH1dYC5cbiAqL1xuZnVuY3Rpb24gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAocGF0aCBpbnN0YW5jZW9mIFJlZ0V4cClcbiAgICAgICAgcmV0dXJuIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHBhdGgpKVxuICAgICAgICByZXR1cm4gYXJyYXlUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLnBhdGhUb1JlZ2V4cCA9IHBhdGhUb1JlZ2V4cDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5pbXBvcnQgeyBHb29kUGFnZUNhY2hlLCBTdHlsZVNoZWV0VHVwbGUgfSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcGFnZS1sb2FkZXInXG5pbXBvcnQgeyBkZW5vcm1hbGl6ZVBhZ2VQYXRoIH0gZnJvbSAnLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3V0aWxzL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHJlc29sdmVSZXdyaXRlcyBmcm9tICcuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcbmltcG9ydCBlc2NhcGVQYXRoRGVsaW1pdGVycyBmcm9tICcuL3V0aWxzL2VzY2FwZS1wYXRoLWRlbGltaXRlcnMnXG5cbmludGVyZmFjZSBUcmFuc2l0aW9uT3B0aW9ucyB7XG4gIHNoYWxsb3c/OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBOZXh0SGlzdG9yeVN0YXRlIHtcbiAgdXJsOiBzdHJpbmdcbiAgYXM6IHN0cmluZ1xuICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xufVxuXG50eXBlIEhpc3RvcnlTdGF0ZSA9IG51bGwgfCB7IF9fTjogZmFsc2UgfSB8ICh7IF9fTjogdHJ1ZSB9ICYgTmV4dEhpc3RvcnlTdGF0ZSlcblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICBjYW5jZWxsZWQ6IHRydWUsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aDogc3RyaW5nLCBwcmVmaXg/OiBzdHJpbmcpIHtcbiAgcmV0dXJuIHByZWZpeCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKVxuICAgID8gcGF0aCA9PT0gJy8nXG4gICAgICA/IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKHByZWZpeClcbiAgICAgIDogYCR7cHJlZml4fSR7cGF0aH1gXG4gICAgOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRMb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nLFxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9pMThuX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmIGxvY2FsZSAhPT0gZGVmYXVsdExvY2FsZSAmJiAhcGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSlcbiAgICAgID8gYWRkUGF0aFByZWZpeChwYXRoLCAnLycgKyBsb2NhbGUpXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGg6IHN0cmluZywgbG9jYWxlPzogc3RyaW5nKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfaTE4bl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlKVxuICAgICAgPyBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSkgfHwgJy8nXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICByZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLCBiYXNlUGF0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG59XG5cbi8qKlxuICogRGV0ZWN0cyB3aGV0aGVyIGEgZ2l2ZW4gdXJsIGlzIHJvdXRhYmxlIGJ5IHRoZSBOZXh0LmpzIHJvdXRlciAoYnJvd3NlciBvbmx5KS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTG9jYWxVUkwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykpIHJldHVybiB0cnVlXG4gIHRyeSB7XG4gICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pXG4gICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhcbiAgcm91dGU6IHN0cmluZyxcbiAgYXNQYXRobmFtZTogc3RyaW5nLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbikge1xuICBsZXQgaW50ZXJwb2xhdGVkUm91dGUgPSAnJ1xuXG4gIGNvbnN0IGR5bmFtaWNSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gIGNvbnN0IGR5bmFtaWNHcm91cHMgPSBkeW5hbWljUmVnZXguZ3JvdXBzXG4gIGNvbnN0IGR5bmFtaWNNYXRjaGVzID1cbiAgICAvLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4gICAgKGFzUGF0aG5hbWUgIT09IHJvdXRlID8gZ2V0Um91dGVNYXRjaGVyKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSkgOiAnJykgfHxcbiAgICAvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbiAgICAvLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG4gICAgcXVlcnlcblxuICBpbnRlcnBvbGF0ZWRSb3V0ZSA9IHJvdXRlXG4gIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpXG5cbiAgaWYgKFxuICAgICFwYXJhbXMuZXZlcnkoKHBhcmFtKSA9PiB7XG4gICAgICBsZXQgdmFsdWUgPSBkeW5hbWljTWF0Y2hlc1twYXJhbV0gfHwgJydcbiAgICAgIGNvbnN0IHsgcmVwZWF0LCBvcHRpb25hbCB9ID0gZHluYW1pY0dyb3Vwc1twYXJhbV1cblxuICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4gICAgICAvLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG4gICAgICBsZXQgcmVwbGFjZWQgPSBgWyR7cmVwZWF0ID8gJy4uLicgOiAnJ30ke3BhcmFtfV1gXG4gICAgICBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgcmVwbGFjZWQgPSBgJHshdmFsdWUgPyAnLycgOiAnJ31bJHtyZXBsYWNlZH1dYFxuICAgICAgfVxuICAgICAgaWYgKHJlcGVhdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gW3ZhbHVlXVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmXG4gICAgICAgIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuICAgICAgICAoaW50ZXJwb2xhdGVkUm91dGUgPVxuICAgICAgICAgIGludGVycG9sYXRlZFJvdXRlIS5yZXBsYWNlKFxuICAgICAgICAgICAgcmVwbGFjZWQsXG4gICAgICAgICAgICByZXBlYXRcbiAgICAgICAgICAgICAgPyAodmFsdWUgYXMgc3RyaW5nW10pLm1hcChlc2NhcGVQYXRoRGVsaW1pdGVycykuam9pbignLycpXG4gICAgICAgICAgICAgIDogZXNjYXBlUGF0aERlbGltaXRlcnModmFsdWUgYXMgc3RyaW5nKVxuICAgICAgICAgICkgfHwgJy8nKVxuICAgICAgKVxuICAgIH0pXG4gICkge1xuICAgIGludGVycG9sYXRlZFJvdXRlID0gJycgLy8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcblxuICAgIC8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4gICAgLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbiAgfVxuICByZXR1cm4ge1xuICAgIHBhcmFtcyxcbiAgICByZXN1bHQ6IGludGVycG9sYXRlZFJvdXRlLFxuICB9XG59XG5cbmZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTogUGFyc2VkVXJsUXVlcnksIHBhcmFtczogc3RyaW5nW10pIHtcbiAgY29uc3QgZmlsdGVyZWRRdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuXG4gIE9iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICBmaWx0ZXJlZFF1ZXJ5W2tleV0gPSBxdWVyeVtrZXldXG4gICAgfVxuICB9KVxuICByZXR1cm4gZmlsdGVyZWRRdWVyeVxufVxuXG4vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUhyZWYoXG4gIGN1cnJlbnRQYXRoOiBzdHJpbmcsXG4gIGhyZWY6IFVybCxcbiAgcmVzb2x2ZUFzPzogYm9vbGVhblxuKTogc3RyaW5nIHtcbiAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgY29uc3QgYmFzZSA9IG5ldyBVUkwoY3VycmVudFBhdGgsICdodHRwOi8vbicpXG4gIGNvbnN0IHVybEFzU3RyaW5nID1cbiAgICB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZilcbiAgdHJ5IHtcbiAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpXG4gICAgZmluYWxVcmwucGF0aG5hbWUgPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSlcbiAgICBsZXQgaW50ZXJwb2xhdGVkQXMgPSAnJ1xuXG4gICAgaWYgKFxuICAgICAgaXNEeW5hbWljUm91dGUoZmluYWxVcmwucGF0aG5hbWUpICYmXG4gICAgICBmaW5hbFVybC5zZWFyY2hQYXJhbXMgJiZcbiAgICAgIHJlc29sdmVBc1xuICAgICkge1xuICAgICAgY29uc3QgcXVlcnkgPSBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KGZpbmFsVXJsLnNlYXJjaFBhcmFtcylcblxuICAgICAgY29uc3QgeyByZXN1bHQsIHBhcmFtcyB9ID0gaW50ZXJwb2xhdGVBcyhcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBxdWVyeVxuICAgICAgKVxuXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIGludGVycG9sYXRlZEFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgIHBhdGhuYW1lOiByZXN1bHQsXG4gICAgICAgICAgaGFzaDogZmluYWxVcmwuaGFzaCxcbiAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID1cbiAgICAgIGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW5cbiAgICAgICAgPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpXG4gICAgICAgIDogZmluYWxVcmwuaHJlZlxuXG4gICAgcmV0dXJuIChyZXNvbHZlQXNcbiAgICAgID8gW3Jlc29sdmVkSHJlZiwgaW50ZXJwb2xhdGVkQXMgfHwgcmVzb2x2ZWRIcmVmXVxuICAgICAgOiByZXNvbHZlZEhyZWYpIGFzIHN0cmluZ1xuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIChyZXNvbHZlQXMgPyBbdXJsQXNTdHJpbmddIDogdXJsQXNTdHJpbmcpIGFzIHN0cmluZ1xuICB9XG59XG5cbmNvbnN0IFBBR0VfTE9BRF9FUlJPUiA9IFN5bWJvbCgnUEFHRV9MT0FEX0VSUk9SJylcbmV4cG9ydCBmdW5jdGlvbiBtYXJrTG9hZGluZ0Vycm9yKGVycjogRXJyb3IpOiBFcnJvciB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBQQUdFX0xPQURfRVJST1IsIHt9KVxufVxuXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyOiBOZXh0Um91dGVyLCB1cmw6IFVybCwgYXM6IFVybCkge1xuICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgcmV0dXJuIHtcbiAgICB1cmw6IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgdXJsKSksXG4gICAgYXM6IGFzID8gYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCBhcykpIDogYXMsXG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBQcml2YXRlUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogUmVjb3JkPHN0cmluZywgYW55PlxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wcyA9IFBpY2s8UHJpdmF0ZVJvdXRlSW5mbywgJ0NvbXBvbmVudCcgfCAnZXJyJz4gJiB7XG4gIHJvdXRlcjogUm91dGVyXG59ICYgUmVjb3JkPHN0cmluZywgYW55PlxuZXhwb3J0IHR5cGUgQXBwQ29tcG9uZW50ID0gQ29tcG9uZW50VHlwZTxBcHBQcm9wcz5cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbywgQXBwOiBBcHBDb21wb25lbnQpID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBOZXh0SGlzdG9yeVN0YXRlKSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9XG4gIHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiZcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeVxuXG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybDogc3RyaW5nLCBhdHRlbXB0czogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgIC8vXG4gICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgIC8vID4gb3B0aW9uLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAvL1xuICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcy5qc29uKClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZjogc3RyaW5nLCBpc1NlcnZlclJlbmRlcjogYm9vbGVhbikge1xuICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgIC8vIGxvb3AuXG4gICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgbWFya0xvYWRpbmdFcnJvcihlcnIpXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBQcml2YXRlUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcbiAgX3NoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGluaXRpYWxTdHlsZVNoZWV0cyxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgICBsb2NhbGUsXG4gICAgICBsb2NhbGVzLFxuICAgICAgZGVmYXVsdExvY2FsZSxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBpbml0aWFsU3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gICAgICBBcHA6IEFwcENvbXBvbmVudFxuICAgICAgd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgICBsb2NhbGU/OiBzdHJpbmdcbiAgICAgIGxvY2FsZXM/OiBzdHJpbmdbXVxuICAgICAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0czogaW5pdGlhbFN0eWxlU2hlZXRzLFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgIENvbXBvbmVudDogQXBwIGFzIENvbXBvbmVudFR5cGUsXG4gICAgICBzdHlsZVNoZWV0czogW1xuICAgICAgICAvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXG4gICAgICBdLFxuICAgIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgdGhpcy5hc1BhdGggPVxuICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfaTE4bl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVxuICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlc1xuICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKClcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG5cbiAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCdcblxuICAgICAgICAgIGxldCBzY3JvbGxEZWJvdW5jZVRpbWVvdXQ6IHVuZGVmaW5lZCB8IE5vZGVKUy5UaW1lb3V0XG5cbiAgICAgICAgICBjb25zdCBkZWJvdW5jZWRTY3JvbGxTYXZlID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNjcm9sbERlYm91bmNlVGltZW91dCkgY2xlYXJUaW1lb3V0KHNjcm9sbERlYm91bmNlVGltZW91dClcblxuICAgICAgICAgICAgc2Nyb2xsRGVib3VuY2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgdXJsLCBhczogY3VyQXMsIG9wdGlvbnMgfSA9IGhpc3Rvcnkuc3RhdGVcbiAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgY3VyQXMsXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICAgICAgICAgICAgX05fWDogd2luZG93LnNjcm9sbFgsXG4gICAgICAgICAgICAgICAgICBfTl9ZOiB3aW5kb3cuc2Nyb2xsWSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9LCAxMClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZGVib3VuY2VkU2Nyb2xsU2F2ZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZSBhcyBIaXN0b3J5U3RhdGVcblxuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zIH0gPSBzdGF0ZVxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAodGhpcy5pc1NzciAmJiBhcyA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlKFxuICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICB1cmwsXG4gICAgICBhcyxcbiAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICB9KVxuICAgIClcbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgYXN5bmMgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybFxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICB9XG4gICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgIGlmIChTVCkge1xuICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlKVxuICAgIH1cblxuICAgIGFzID0gYWRkTG9jYWxlKGFzLCB0aGlzLmxvY2FsZSwgdGhpcy5kZWZhdWx0TG9jYWxlKVxuICAgIGNvbnN0IGNsZWFuZWRBcyA9IGRlbExvY2FsZShcbiAgICAgIGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLFxuICAgICAgdGhpcy5sb2NhbGVcbiAgICApXG4gICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzXG5cbiAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpIHtcbiAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzKVxuICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKVxuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcylcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgIGNvbnN0IHsgX19yZXdyaXRlczogcmV3cml0ZXMgfSA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5wcm9taXNlZEJ1aWxkTWFuaWZlc3RcblxuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gcGFyc2VkXG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgPyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZSkpXG4gICAgICA6IHBhdGhuYW1lXG5cbiAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSkge1xuICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICB9XG5cbiAgICBsZXQgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuXG4gICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbiAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgbGV0IHJlc29sdmVkQXMgPSBhc1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpIHtcbiAgICAgIHJlc29sdmVkQXMgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgIHBhcnNlUmVsYXRpdmVVcmwoYXMpLnBhdGhuYW1lLFxuICAgICAgICBwYWdlcyxcbiAgICAgICAgYmFzZVBhdGgsXG4gICAgICAgIHJld3JpdGVzLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgKHA6IHN0cmluZykgPT4gdGhpcy5fcmVzb2x2ZUhyZWYoeyBwYXRobmFtZTogcCB9LCBwYWdlcykucGF0aG5hbWUhXG4gICAgICApXG5cbiAgICAgIGlmIChyZXNvbHZlZEFzICE9PSBhcykge1xuICAgICAgICBjb25zdCBwb3RlbnRpYWxIcmVmID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goXG4gICAgICAgICAgdGhpcy5fcmVzb2x2ZUhyZWYoXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWQsIHsgcGF0aG5hbWU6IHJlc29sdmVkQXMgfSksXG4gICAgICAgICAgICBwYWdlcyxcbiAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgKS5wYXRobmFtZSFcbiAgICAgICAgKVxuXG4gICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBvdGVudGlhbEhyZWYpKSB7XG4gICAgICAgICAgcm91dGUgPSBwb3RlbnRpYWxIcmVmXG4gICAgICAgICAgcGF0aG5hbWUgPSBwb3RlbnRpYWxIcmVmXG4gICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSwgdGhpcy5sb2NhbGUpXG5cbiAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcylcbiAgICAgIGNvbnN0IGFzUGF0aG5hbWUgPSBwYXJzZWRBcy5wYXRobmFtZVxuXG4gICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWVcbiAgICAgIGNvbnN0IGludGVycG9sYXRlZEFzID0gc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgPyBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeSlcbiAgICAgICAgOiAoe30gYXMgeyByZXN1bHQ6IHVuZGVmaW5lZDsgcGFyYW1zOiB1bmRlZmluZWQgfSlcblxuICAgICAgaWYgKCFyb3V0ZU1hdGNoIHx8IChzaG91bGRJbnRlcnBvbGF0ZSAmJiAhaW50ZXJwb2xhdGVkQXMucmVzdWx0KSkge1xuICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyBgSW50ZXJwb2xhdGluZyBocmVmYFxuICAgICAgICAgICAgICAgICAgOiBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgXG4gICAgICAgICAgICAgIH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgKHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgXG4gICAgICAgICAgICAgIDogYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkgK1xuICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy8ke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJ1xuICAgICAgICAgICAgICAgICAgOiAnaW5jb21wYXRpYmxlLWhyZWYtYXMnXG4gICAgICAgICAgICAgIH1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNob3VsZEludGVycG9sYXRlKSB7XG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkQXMsIHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiBpbnRlcnBvbGF0ZWRBcy5yZXN1bHQsXG4gICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBpbnRlcnBvbGF0ZWRBcy5wYXJhbXMhKSxcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgfVxuICAgIH1cblxuICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzKVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgc2hhbGxvd1xuICAgICAgKVxuICAgICAgbGV0IHsgZXJyb3IsIHByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgLy8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG4gICAgICBpZiAoXG4gICAgICAgIChfX05fU1NHIHx8IF9fTl9TU1ApICYmXG4gICAgICAgIHByb3BzICYmXG4gICAgICAgIChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcyAmJlxuICAgICAgICAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG5cbiAgICAgICAgLy8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbiAgICAgICAgLy8gY2xpZW50LW5hdmlnYXRpb24gaWYgaXQgaXMgZmFsbGluZyBiYWNrIHRvIGhhcmQgbmF2aWdhdGlvbiBpZlxuICAgICAgICAvLyBpdCdzIG5vdFxuICAgICAgICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgY29uc3QgcGFyc2VkSHJlZiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gICAgICAgICAgdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkSHJlZiwgcGFnZXMpXG5cbiAgICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocGFyc2VkSHJlZi5wYXRobmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZShcbiAgICAgICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgICBkZXN0aW5hdGlvbixcbiAgICAgICAgICAgICAgb3B0aW9uc1xuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZGVzdGluYXRpb25cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgfVxuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcylcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgIG1ldGhvZCxcbiAgICAgICAgdXJsLFxuICAgICAgICBhZGRMb2NhbGUoYXMsIHRoaXMubG9jYWxlLCB0aGlzLmRlZmF1bHRMb2NhbGUpLFxuICAgICAgICBvcHRpb25zXG4gICAgICApXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgIH1cblxuICAgICAgYXdhaXQgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lISwgcXVlcnksIGNsZWFuZWRBcywgcm91dGVJbmZvKS5jYXRjaChcbiAgICAgICAgKGUpID0+IHtcbiAgICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZVxuICAgICAgICAgIGVsc2UgdGhyb3cgZVxuICAgICAgICB9XG4gICAgICApXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gJiYgJ19OX1gnIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oKG9wdGlvbnMgYXMgYW55KS5fTl9YLCAob3B0aW9ucyBhcyBhbnkpLl9OX1kpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICB9IGFzIEhpc3RvcnlTdGF0ZSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIGlmIChQQUdFX0xPQURfRVJST1IgaW4gZXJyIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50LCBzdHlsZVNoZWV0cyB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChcbiAgICAgICAgJy9fZXJyb3InXG4gICAgICApXG4gICAgICBjb25zdCByb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgIGVycixcbiAgICAgICAgZXJyb3I6IGVycixcbiAgICAgIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgZXJyLFxuICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICB9IGFzIGFueSlcbiAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpXG4gICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgdHJ1ZSlcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBzaGFsbG93OiBib29sZWFuID0gZmFsc2VcbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cblxuICAgICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBjYWNoZWRSb3V0ZUluZm9cbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgID8gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKSA9PiAoe1xuICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgfSkpXG5cbiAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGFIcmVmOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICBkZWxCYXNlUGF0aChhcyksXG4gICAgICAgICAgX19OX1NTRyxcbiAgICAgICAgICB0aGlzLmxvY2FsZSxcbiAgICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGE8UHJpdmF0ZVJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgKVxuICAgICAgKVxuXG4gICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzKVxuICAgIH1cbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mb1xuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIF9yZXNvbHZlSHJlZihwYXJzZWRIcmVmOiBVcmxPYmplY3QsIHBhZ2VzOiBzdHJpbmdbXSwgYXBwbHlCYXNlUGF0aCA9IHRydWUpIHtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRIcmVmXG4gICAgY29uc3QgY2xlYW5QYXRobmFtZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKFxuICAgICAgZGVub3JtYWxpemVQYWdlUGF0aChhcHBseUJhc2VQYXRoID8gZGVsQmFzZVBhdGgocGF0aG5hbWUhKSA6IHBhdGhuYW1lISlcbiAgICApXG5cbiAgICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgICB9XG5cbiAgICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gICAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lISkpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIHBhZ2VzLnNvbWUoKHBhZ2UpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGlzRHluYW1pY1JvdXRlKHBhZ2UpICYmXG4gICAgICAgICAgZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUhKVxuICAgICAgICApIHtcbiAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gYXBwbHlCYXNlUGF0aCA/IGFkZEJhc2VQYXRoKHBhZ2UpIDogcGFnZVxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiBwYXJzZWRIcmVmXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBhc3luYyBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSB9ID0gcGFyc2VkXG5cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgdGhpcy5wYWdlTG9hZGVyLnByZWZldGNoRGF0YShcbiAgICAgICAgdXJsLFxuICAgICAgICBhc1BhdGgsXG4gICAgICAgIHRoaXMubG9jYWxlLFxuICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICksXG4gICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgXSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPEdvb2RQYWdlQ2FjaGU+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1tjYWNoZUtleV0pIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKVxuICAgIH1cbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwIGFzIEFwcENvbXBvbmVudClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksIGFzKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KGRhdGE6IFByaXZhdGVSb3V0ZUluZm8pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCBhcyBBcHBDb21wb25lbnQpXG4gIH1cbn1cbiIsIi8vIGVzY2FwZSBkZWxpbWl0ZXJzIHVzZWQgYnkgcGF0aC10by1yZWdleHBcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVzY2FwZVBhdGhEZWxpbWl0ZXJzKHNlZ21lbnQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBzZWdtZW50LnJlcGxhY2UoL1svIz9dL2csIChjaGFyOiBzdHJpbmcpID0+IGVuY29kZVVSSUNvbXBvbmVudChjaGFyKSlcbn1cbiIsIi8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgKiBhcyBxdWVyeXN0cmluZyBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzID0gL2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqOiBVcmxPYmplY3QpIHtcbiAgbGV0IHsgYXV0aCwgaG9zdG5hbWUgfSA9IHVybE9ialxuICBsZXQgcHJvdG9jb2wgPSB1cmxPYmoucHJvdG9jb2wgfHwgJydcbiAgbGV0IHBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lIHx8ICcnXG4gIGxldCBoYXNoID0gdXJsT2JqLmhhc2ggfHwgJydcbiAgbGV0IHF1ZXJ5ID0gdXJsT2JqLnF1ZXJ5IHx8ICcnXG4gIGxldCBob3N0OiBzdHJpbmcgfCBmYWxzZSA9IGZhbHNlXG5cbiAgYXV0aCA9IGF1dGggPyBlbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksICc6JykgKyAnQCcgOiAnJ1xuXG4gIGlmICh1cmxPYmouaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdXJsT2JqLmhvc3RcbiAgfSBlbHNlIGlmIChob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKH5ob3N0bmFtZS5pbmRleE9mKCc6JykgPyBgWyR7aG9zdG5hbWV9XWAgOiBob3N0bmFtZSlcbiAgICBpZiAodXJsT2JqLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gJzonICsgdXJsT2JqLnBvcnRcbiAgICB9XG4gIH1cblxuICBpZiAocXVlcnkgJiYgdHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgIHF1ZXJ5ID0gU3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkgYXMgUGFyc2VkVXJsUXVlcnkpKVxuICB9XG5cbiAgbGV0IHNlYXJjaCA9IHVybE9iai5zZWFyY2ggfHwgKHF1ZXJ5ICYmIGA/JHtxdWVyeX1gKSB8fCAnJ1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6J1xuXG4gIGlmIChcbiAgICB1cmxPYmouc2xhc2hlcyB8fFxuICAgICgoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpICYmIGhvc3QgIT09IGZhbHNlKVxuICApIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKVxuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZVswXSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lXG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJydcbiAgfVxuXG4gIGlmIChoYXNoICYmIGhhc2hbMF0gIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2hcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2hbMF0gIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoXG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGVuY29kZVVSSUNvbXBvbmVudClcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJyMnLCAnJTIzJylcblxuICByZXR1cm4gYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWBcbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0TG9jYXRpb25PcmlnaW4gfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBEVU1NWV9CQVNFID0gbmV3IFVSTChcbiAgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyAnaHR0cDovL24nIDogZ2V0TG9jYXRpb25PcmlnaW4oKVxuKVxuXG4vKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKSB7XG4gIGNvbnN0IHJlc29sdmVkQmFzZSA9IGJhc2UgPyBuZXcgVVJMKGJhc2UsIERVTU1ZX0JBU0UpIDogRFVNTVlfQkFTRVxuICBjb25zdCB7XG4gICAgcGF0aG5hbWUsXG4gICAgc2VhcmNoUGFyYW1zLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWYsXG4gICAgb3JpZ2luLFxuICAgIHByb3RvY29sLFxuICB9ID0gbmV3IFVSTCh1cmwsIHJlc29sdmVkQmFzZSlcbiAgaWYgKFxuICAgIG9yaWdpbiAhPT0gRFVNTVlfQkFTRS5vcmlnaW4gfHxcbiAgICAocHJvdG9jb2wgIT09ICdodHRwOicgJiYgcHJvdG9jb2wgIT09ICdodHRwczonKVxuICApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwnKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmOiBocmVmLnNsaWNlKERVTU1ZX0JBU0Uub3JpZ2luLmxlbmd0aCksXG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbmV4cG9ydCB7IHBhdGhUb1JlZ2V4cCB9XG5cbmV4cG9ydCBjb25zdCBtYXRjaGVyT3B0aW9uczogcGF0aFRvUmVnZXhwLlRva2Vuc1RvUmVnZXhwT3B0aW9ucyAmXG4gIHBhdGhUb1JlZ2V4cC5QYXJzZU9wdGlvbnMgPSB7XG4gIHNlbnNpdGl2ZTogZmFsc2UsXG4gIGRlbGltaXRlcjogJy8nLFxufVxuXG5leHBvcnQgY29uc3QgY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9uczogcGF0aFRvUmVnZXhwLlRva2Vuc1RvUmVnZXhwT3B0aW9ucyAmXG4gIHBhdGhUb1JlZ2V4cC5QYXJzZU9wdGlvbnMgPSB7XG4gIC4uLm1hdGNoZXJPcHRpb25zLFxuICBzdHJpY3Q6IHRydWUsXG59XG5cbmV4cG9ydCBkZWZhdWx0IChjdXN0b21Sb3V0ZSA9IGZhbHNlKSA9PiB7XG4gIHJldHVybiAocGF0aDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3Qga2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgICBjb25zdCBtYXRjaGVyUmVnZXggPSBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKFxuICAgICAgcGF0aCxcbiAgICAgIGtleXMsXG4gICAgICBjdXN0b21Sb3V0ZSA/IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMgOiBtYXRjaGVyT3B0aW9uc1xuICAgIClcbiAgICBjb25zdCBtYXRjaGVyID0gcGF0aFRvUmVnZXhwLnJlZ2V4cFRvRnVuY3Rpb24obWF0Y2hlclJlZ2V4LCBrZXlzKVxuXG4gICAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCwgcGFyYW1zPzogYW55KSA9PiB7XG4gICAgICBjb25zdCByZXMgPSBwYXRobmFtZSA9PSBudWxsID8gZmFsc2UgOiBtYXRjaGVyKHBhdGhuYW1lKVxuICAgICAgaWYgKCFyZXMpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGlmIChjdXN0b21Sb3V0ZSkge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgICAgLy8gdW5uYW1lZCBwYXJhbXMgc2hvdWxkIGJlIHJlbW92ZWQgYXMgdGhleVxuICAgICAgICAgIC8vIGFyZSBub3QgYWxsb3dlZCB0byBiZSB1c2VkIGluIHRoZSBkZXN0aW5hdGlvblxuICAgICAgICAgIGlmICh0eXBlb2Yga2V5Lm5hbWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBkZWxldGUgKHJlcy5wYXJhbXMgYXMgYW55KVtrZXkubmFtZV1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsgLi4ucGFyYW1zLCAuLi5yZXMucGFyYW1zIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbnR5cGUgUGFyYW1zID0geyBbcGFyYW06IHN0cmluZ106IGFueSB9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByZXBhcmVEZXN0aW5hdGlvbihcbiAgZGVzdGluYXRpb246IHN0cmluZyxcbiAgcGFyYW1zOiBQYXJhbXMsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgYXBwZW5kUGFyYW1zVG9RdWVyeTogYm9vbGVhbixcbiAgYmFzZVBhdGg6IHN0cmluZ1xuKSB7XG4gIGxldCBwYXJzZWREZXN0aW5hdGlvbjoge1xuICAgIHF1ZXJ5PzogUGFyc2VkVXJsUXVlcnlcbiAgICBwcm90b2NvbD86IHN0cmluZ1xuICAgIGhvc3RuYW1lPzogc3RyaW5nXG4gICAgcG9ydD86IHN0cmluZ1xuICB9ICYgUmV0dXJuVHlwZTx0eXBlb2YgcGFyc2VSZWxhdGl2ZVVybD4gPSB7fSBhcyBhbnlcblxuICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgc2VhcmNoUGFyYW1zLFxuICAgICAgaGFzaCxcbiAgICAgIGhvc3RuYW1lLFxuICAgICAgcG9ydCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9ID0gbmV3IFVSTChkZXN0aW5hdGlvbilcblxuICAgIHBhcnNlZERlc3RpbmF0aW9uID0ge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgICAgaGFzaCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9XG4gIH1cblxuICBjb25zdCBkZXN0UXVlcnkgPSBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeVxuICBjb25zdCBkZXN0UGF0aCA9IGAke3BhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lIX0ke1xuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggfHwgJydcbiAgfWBcbiAgY29uc3QgZGVzdFBhdGhQYXJhbUtleXM6IHBhdGhUb1JlZ2V4cC5LZXlbXSA9IFtdXG4gIHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoZGVzdFBhdGgsIGRlc3RQYXRoUGFyYW1LZXlzKVxuXG4gIGNvbnN0IGRlc3RQYXRoUGFyYW1zID0gZGVzdFBhdGhQYXJhbUtleXMubWFwKChrZXkpID0+IGtleS5uYW1lKVxuXG4gIGxldCBkZXN0aW5hdGlvbkNvbXBpbGVyID0gcGF0aFRvUmVnZXhwLmNvbXBpbGUoXG4gICAgZGVzdFBhdGgsXG4gICAgLy8gd2UgZG9uJ3QgdmFsaWRhdGUgd2hpbGUgY29tcGlsaW5nIHRoZSBkZXN0aW5hdGlvbiBzaW5jZSB3ZSBzaG91bGRcbiAgICAvLyBoYXZlIGFscmVhZHkgdmFsaWRhdGVkIGJlZm9yZSB3ZSBnb3QgdG8gdGhpcyBwb2ludCBhbmQgdmFsaWRhdGluZ1xuICAgIC8vIGJyZWFrcyBjb21waWxpbmcgZGVzdGluYXRpb25zIHdpdGggbmFtZWQgcGF0dGVybiBwYXJhbXMgZnJvbSB0aGUgc291cmNlXG4gICAgLy8gZS5nLiAvc29tZXRoaW5nOmhlbGxvKC4qKSAtPiAvYW5vdGhlci86aGVsbG8gaXMgYnJva2VuIHdpdGggdmFsaWRhdGlvblxuICAgIC8vIHNpbmNlIGNvbXBpbGUgdmFsaWRhdGlvbiBpcyBtZWFudCBmb3IgcmV2ZXJzaW5nIGFuZCBub3QgZm9yIGluc2VydGluZ1xuICAgIC8vIHBhcmFtcyBmcm9tIGEgc2VwYXJhdGUgcGF0aC1yZWdleCBpbnRvIGFub3RoZXJcbiAgICB7IHZhbGlkYXRlOiBmYWxzZSB9XG4gIClcbiAgbGV0IG5ld1VybFxuXG4gIC8vIHVwZGF0ZSBhbnkgcGFyYW1zIGluIHF1ZXJ5IHZhbHVlc1xuICBmb3IgKGNvbnN0IFtrZXksIHN0ck9yQXJyYXldIG9mIE9iamVjdC5lbnRyaWVzKGRlc3RRdWVyeSkpIHtcbiAgICBsZXQgdmFsdWUgPSBBcnJheS5pc0FycmF5KHN0ck9yQXJyYXkpID8gc3RyT3JBcnJheVswXSA6IHN0ck9yQXJyYXlcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIC8vIHRoZSB2YWx1ZSBuZWVkcyB0byBzdGFydCB3aXRoIGEgZm9yd2FyZC1zbGFzaCB0byBiZSBjb21waWxlZFxuICAgICAgLy8gY29ycmVjdGx5XG4gICAgICB2YWx1ZSA9IGAvJHt2YWx1ZX1gXG4gICAgICBjb25zdCBxdWVyeUNvbXBpbGVyID0gcGF0aFRvUmVnZXhwLmNvbXBpbGUodmFsdWUsIHsgdmFsaWRhdGU6IGZhbHNlIH0pXG4gICAgICB2YWx1ZSA9IHF1ZXJ5Q29tcGlsZXIocGFyYW1zKS5zdWJzdHIoMSlcbiAgICB9XG4gICAgZGVzdFF1ZXJ5W2tleV0gPSB2YWx1ZVxuICB9XG5cbiAgLy8gYWRkIHBhdGggcGFyYW1zIHRvIHF1ZXJ5IGlmIGl0J3Mgbm90IGEgcmVkaXJlY3QgYW5kIG5vdFxuICAvLyBhbHJlYWR5IGRlZmluZWQgaW4gZGVzdGluYXRpb24gcXVlcnkgb3IgcGF0aFxuICBjb25zdCBwYXJhbUtleXMgPSBPYmplY3Qua2V5cyhwYXJhbXMpXG5cbiAgaWYgKFxuICAgIGFwcGVuZFBhcmFtc1RvUXVlcnkgJiZcbiAgICAhcGFyYW1LZXlzLnNvbWUoKGtleSkgPT4gZGVzdFBhdGhQYXJhbXMuaW5jbHVkZXMoa2V5KSlcbiAgKSB7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgcGFyYW1LZXlzKSB7XG4gICAgICBpZiAoIShrZXkgaW4gZGVzdFF1ZXJ5KSkge1xuICAgICAgICBkZXN0UXVlcnlba2V5XSA9IHBhcmFtc1trZXldXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc2hvdWxkQWRkQmFzZVBhdGggPSBkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykgJiYgYmFzZVBhdGhcblxuICB0cnkge1xuICAgIG5ld1VybCA9IGAke3Nob3VsZEFkZEJhc2VQYXRoID8gYmFzZVBhdGggOiAnJ30ke2Rlc3RpbmF0aW9uQ29tcGlsZXIoXG4gICAgICBwYXJhbXNcbiAgICApfWBcblxuICAgIGNvbnN0IFtwYXRobmFtZSwgaGFzaF0gPSBuZXdVcmwuc3BsaXQoJyMnKVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5oYXNoID0gYCR7aGFzaCA/ICcjJyA6ICcnfSR7aGFzaCB8fCAnJ31gXG4gICAgZGVsZXRlIHBhcnNlZERlc3RpbmF0aW9uLnNlYXJjaFxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBpZiAoZXJyLm1lc3NhZ2UubWF0Y2goL0V4cGVjdGVkIC4qPyB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5LykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYFRvIHVzZSBhIG11bHRpLW1hdGNoIGluIHRoZSBkZXN0aW5hdGlvbiB5b3UgbXVzdCBhZGQgXFxgKlxcYCBhdCB0aGUgZW5kIG9mIHRoZSBwYXJhbSBuYW1lIHRvIHNpZ25pZnkgaXQgc2hvdWxkIHJlcGVhdC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW52YWxpZC1tdWx0aS1tYXRjaGBcbiAgICAgIClcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH1cblxuICAvLyBRdWVyeSBtZXJnZSBvcmRlciBsb3dlc3QgcHJpb3JpdHkgdG8gaGlnaGVzdFxuICAvLyAxLiBpbml0aWFsIFVSTCBxdWVyeSB2YWx1ZXNcbiAgLy8gMi4gcGF0aCBzZWdtZW50IHZhbHVlc1xuICAvLyAzLiBkZXN0aW5hdGlvbiBzcGVjaWZpZWQgcXVlcnkgdmFsdWVzXG4gIHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5ID0ge1xuICAgIC4uLnF1ZXJ5LFxuICAgIC4uLnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5LFxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBuZXdVcmwsXG4gICAgcGFyc2VkRGVzdGluYXRpb24sXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICBzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtc1xuKTogUGFyc2VkVXJsUXVlcnkge1xuICBjb25zdCBxdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgIGlmICh0eXBlb2YgcXVlcnlba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgOyhxdWVyeVtrZXldIGFzIHN0cmluZ1tdKS5wdXNoKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0gYXMgc3RyaW5nLCB2YWx1ZV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBxdWVyeVxufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHBhcmFtOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoXG4gICAgdHlwZW9mIHBhcmFtID09PSAnc3RyaW5nJyB8fFxuICAgICh0eXBlb2YgcGFyYW0gPT09ICdudW1iZXInICYmICFpc05hTihwYXJhbSkpIHx8XG4gICAgdHlwZW9mIHBhcmFtID09PSAnYm9vbGVhbidcbiAgKSB7XG4gICAgcmV0dXJuIFN0cmluZyhwYXJhbSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJydcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhcbiAgdXJsUXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBjb25zdCByZXN1bHQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcbiAgT2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4gcmVzdWx0LmFwcGVuZChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0oaXRlbSkpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQuc2V0KGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbSh2YWx1ZSkpXG4gICAgfVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24oXG4gIHRhcmdldDogVVJMU2VhcmNoUGFyYW1zLFxuICAuLi5zZWFyY2hQYXJhbXNMaXN0OiBVUkxTZWFyY2hQYXJhbXNbXVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgc2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKChzZWFyY2hQYXJhbXMpID0+IHtcbiAgICBBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goKGtleSkgPT4gdGFyZ2V0LmRlbGV0ZShrZXkpKVxuICAgIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB0YXJnZXQuYXBwZW5kKGtleSwgdmFsdWUpKVxuICB9KVxuICByZXR1cm4gdGFyZ2V0XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHBhdGhNYXRjaCBmcm9tICcuL3BhdGgtbWF0Y2gnXG5pbXBvcnQgcHJlcGFyZURlc3RpbmF0aW9uIGZyb20gJy4vcHJlcGFyZS1kZXN0aW5hdGlvbidcbmltcG9ydCB7IFJld3JpdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvbG9hZC1jdXN0b20tcm91dGVzJ1xuaW1wb3J0IHsgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2ggfSBmcm9tICcuLi8uLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuXG5jb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXIgPSBwYXRoTWF0Y2godHJ1ZSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzb2x2ZVJld3JpdGVzKFxuICBhc1BhdGg6IHN0cmluZyxcbiAgcGFnZXM6IHN0cmluZ1tdLFxuICBiYXNlUGF0aDogc3RyaW5nLFxuICByZXdyaXRlczogUmV3cml0ZVtdLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gIHJlc29sdmVIcmVmOiAocGF0aDogc3RyaW5nKSA9PiBzdHJpbmdcbikge1xuICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGFzUGF0aCkpIHtcbiAgICBmb3IgKGNvbnN0IHJld3JpdGUgb2YgcmV3cml0ZXMpIHtcbiAgICAgIGNvbnN0IG1hdGNoZXIgPSBjdXN0b21Sb3V0ZU1hdGNoZXIocmV3cml0ZS5zb3VyY2UpXG4gICAgICBjb25zdCBwYXJhbXMgPSBtYXRjaGVyKGFzUGF0aClcblxuICAgICAgaWYgKHBhcmFtcykge1xuICAgICAgICBpZiAoIXJld3JpdGUuZGVzdGluYXRpb24pIHtcbiAgICAgICAgICAvLyB0aGlzIGlzIGEgcHJveGllZCByZXdyaXRlIHdoaWNoIGlzbid0IGhhbmRsZWQgb24gdGhlIGNsaWVudFxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGVzdFJlcyA9IHByZXBhcmVEZXN0aW5hdGlvbihcbiAgICAgICAgICByZXdyaXRlLmRlc3RpbmF0aW9uLFxuICAgICAgICAgIHBhcmFtcyxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICB0cnVlLFxuICAgICAgICAgIHJld3JpdGUuYmFzZVBhdGggPT09IGZhbHNlID8gJycgOiBiYXNlUGF0aFxuICAgICAgICApXG4gICAgICAgIGFzUGF0aCA9IGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucXVlcnkpXG5cbiAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGFzUGF0aCkpKSB7XG4gICAgICAgICAgLy8gY2hlY2sgaWYgd2Ugbm93IG1hdGNoIGEgcGFnZSBhcyB0aGlzIG1lYW5zIHdlIGFyZSBkb25lXG4gICAgICAgICAgLy8gcmVzb2x2aW5nIHRoZSByZXdyaXRlc1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cblxuICAgICAgICAvLyBjaGVjayBpZiB3ZSBtYXRjaCBhIGR5bmFtaWMtcm91dGUsIGlmIHNvIHdlIGJyZWFrIHRoZSByZXdyaXRlcyBjaGFpblxuICAgICAgICBjb25zdCByZXNvbHZlZEhyZWYgPSByZXNvbHZlSHJlZihhc1BhdGgpXG5cbiAgICAgICAgaWYgKHJlc29sdmVkSHJlZiAhPT0gYXNQYXRoICYmIHBhZ2VzLmluY2x1ZGVzKHJlc29sdmVkSHJlZikpIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBhc1BhdGhcbn1cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiaW50ZXJmYWNlIEdyb3VwIHtcbiAgcG9zOiBudW1iZXJcbiAgcmVwZWF0OiBib29sZWFuXG4gIG9wdGlvbmFsOiBib29sZWFuXG59XG5cbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3B0aW9uYWwgPSBwYXJhbS5zdGFydHNXaXRoKCdbJykgJiYgcGFyYW0uZW5kc1dpdGgoJ10nKVxuICBpZiAob3B0aW9uYWwpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDEsIC0xKVxuICB9XG4gIGNvbnN0IHJlcGVhdCA9IHBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpXG4gIGlmIChyZXBlYXQpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDMpXG4gIH1cbiAgcmV0dXJuIHsga2V5OiBwYXJhbSwgcmVwZWF0LCBvcHRpb25hbCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgcm91dGVLZXlzPzogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9XG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9XG59IHtcbiAgY29uc3Qgc2VnbWVudHMgPSAobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuICAgIC5zbGljZSgxKVxuICAgIC5zcGxpdCgnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgZ3JvdXBzW2tleV0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQsIG9wdGlvbmFsIH1cbiAgICAgICAgcmV0dXJuIHJlcGVhdCA/IChvcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJylcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgIGxldCByb3V0ZUtleUNoYXJMZW5ndGggPSAxXG5cbiAgICAvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICAgY29uc3QgZ2V0U2FmZVJvdXRlS2V5ID0gKCkgPT4ge1xuICAgICAgbGV0IHJvdXRlS2V5ID0gJydcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZUtleUNoYXJMZW5ndGg7IGkrKykge1xuICAgICAgICByb3V0ZUtleSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpXG4gICAgICAgIHJvdXRlS2V5Q2hhckNvZGUrK1xuXG4gICAgICAgIGlmIChyb3V0ZUtleUNoYXJDb2RlID4gMTIyKSB7XG4gICAgICAgICAgcm91dGVLZXlDaGFyTGVuZ3RoKytcbiAgICAgICAgICByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlS2V5XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVLZXlzOiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuXG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgICAvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4gICAgICAgICAgLy8gdGhlIG5hbWVkIHJlZ2V4XG4gICAgICAgICAgbGV0IGNsZWFuZWRLZXkgPSBrZXkucmVwbGFjZSgvXFxXL2csICcnKVxuICAgICAgICAgIGxldCBpbnZhbGlkS2V5ID0gZmFsc2VcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuICAgICAgICAgIC8vIHNhZmUga2V5XG4gICAgICAgICAgaWYgKGNsZWFuZWRLZXkubGVuZ3RoID09PSAwIHx8IGNsZWFuZWRLZXkubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwgMSkpKSkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW52YWxpZEtleSkge1xuICAgICAgICAgICAgY2xlYW5lZEtleSA9IGdldFNhZmVSb3V0ZUtleSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVLZXlzW2NsZWFuZWRLZXldID0ga2V5XG4gICAgICAgICAgcmV0dXJuIHJlcGVhdFxuICAgICAgICAgICAgPyBvcHRpb25hbFxuICAgICAgICAgICAgICA/IGAoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gXG4gICAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgXG4gICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgICBncm91cHMsXG4gICAgICByb3V0ZUtleXMsXG4gICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICBncm91cHMsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gJy4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJ0BuZXh0L2VudidcbmltcG9ydCB7IEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG4vKipcbiAqIFdlYiB2aXRhbHMgcHJvdmlkZWQgdG8gX2FwcC5yZXBvcnRXZWJWaXRhbHMgYnkgQ29yZSBXZWIgVml0YWxzIHBsdWdpbiBkZXZlbG9wZWQgYnkgR29vZ2xlIENocm9tZSB0ZWFtLlxuICogaHR0cHM6Ly9uZXh0anMub3JnL2Jsb2cvbmV4dC05LTQjaW50ZWdyYXRlZC13ZWItdml0YWxzLXJlcG9ydGluZ1xuICovXG5leHBvcnQgdHlwZSBOZXh0V2ViVml0YWxzTWV0cmljID0ge1xuICBpZDogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHN0YXJ0VGltZTogbnVtYmVyXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBIZWFkRW50cnkgPSBbc3RyaW5nLCB7IFtrZXk6IHN0cmluZ106IGFueSB9XVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiBzdHJpbmdbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbiAgaGVhZDogSGVhZEVudHJ5W11cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBkb2NDb21wb25lbnRzUmVuZGVyZWQ6IHtcbiAgICBIdG1sPzogYm9vbGVhblxuICAgIE1haW4/OiBib29sZWFuXG4gICAgSGVhZD86IGJvb2xlYW5cbiAgICBOZXh0U2NyaXB0PzogYm9vbGVhblxuICB9XG4gIGJ1aWxkTWFuaWZlc3Q6IEJ1aWxkTWFuaWZlc3RcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkeW5hbWljSW1wb3J0czogTWFuaWZlc3RJdGVtW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxuICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZzogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxuXG4gIHByZXZpZXc/OiBib29sZWFuXG4gIC8qKlxuICAgKiBQcmV2aWV3IGRhdGEgc2V0IG9uIHRoZSByZXF1ZXN0LCBpZiBhbnlcbiAgICogKi9cbiAgcHJldmlld0RhdGE/OiBhbnlcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdCh1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdChzdGF0dXM6IG51bWJlciwgdXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsOiBVcmxPYmplY3QpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VXJsKHVybClcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IE1vZGFsLCBCdXR0b24gfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuaW1wb3J0IFByb2ZpbGVQcml2ZSBmcm9tIFwiLi4vaW5kZXhcIjtcclxuaW1wb3J0IEJhbm5lciBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9wcm9maWxlL0Jhbm5lclwiO1xyXG5pbXBvcnQgVGFicyBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9wcm9maWxlL1RhYnNcIjtcclxuaW1wb3J0IFN0b3JpZXMgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvcHJvZmlsZS9TdG9yaWVzXCI7XHJcbmltcG9ydCBDaGFyYWN0ZXJzIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL3Byb2ZpbGUvQ2hhcmFjdGVyc1wiO1xyXG5pbXBvcnQgRm9sbG93ZXJzIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL3Byb2ZpbGUvRm9sbG93ZXJzXCI7XHJcbmltcG9ydCBMb2NhdGlvbnMgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvcHJvZmlsZS9Mb2NhdGlvbnNcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgZ2V0UHJvZmlsZSxcclxuICBmb2xsb3dVc2VyLFxyXG4gIHVuZm9sbG93VXNlcixcclxuICBnZXRJc0ZvbGxvd2luZyxcclxufSBmcm9tIFwiLi4vLi4vLi4vcmVkdXgvYWN0aW9ucy91c2VyQWN0aW9uc1wiO1xyXG5pbXBvcnQge1xyXG4gIGdldFVzZXJTdG9yaWVzLFxyXG4gIGdldEZhdm9yaXRlU3RvcmllcyxcclxuICBnZXRVc2VyTG9jYXRpb25zLFxyXG59IGZyb20gXCIuLi8uLi8uLi9yZWR1eC9hY3Rpb25zL3N0b3JpZXNBY3Rpb25zXCI7XHJcbmltcG9ydCB7XHJcbiAgZ2V0VXNlckNoYXJhY3RlcnMsXHJcbiAgZ2V0RmF2b3JpdGVDaGFyYWN0ZXJzLFxyXG59IGZyb20gXCIuLi8uLi8uLi9yZWR1eC9hY3Rpb25zL2NoYXJhY3RlcnNBY3Rpb25zXCI7XHJcbmltcG9ydCB7XHJcbiAgZ2V0RmF2b3JpdGVBdXRob3JzLFxyXG4gIGdldEZvbGxvd2VycyxcclxufSBmcm9tIFwiLi4vLi4vLi4vcmVkdXgvYWN0aW9ucy91c2VyQWN0aW9uc1wiO1xyXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSBcIi4uLy4uLy4uL2hvb2tzL3VzZXJIb29rc1wiO1xyXG5pbXBvcnQgTG9hZGluZ1NjcmVlbiBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9ob2MvTG9hZGluZ1NjcmVlblwiO1xyXG5pbXBvcnQgUmVkaXJlY3RDb21wIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2hvYy9SZWRpcmVjdENvbXBcIjtcclxuXHJcbmNvbnN0IFByb2ZpbGUgPSAoe1xyXG4gIGdldFByb2ZpbGUsXHJcbiAgcHJvZmlsZSxcclxuICBzdG9yaWVzLFxyXG4gIGxvY2F0aW9ucyxcclxuICBnZXRVc2VyU3RvcmllcyxcclxuICBmb2xsb3dVc2VyLFxyXG4gIHVuZm9sbG93VXNlcixcclxuICBnZXRJc0ZvbGxvd2luZyxcclxuICBnZXRVc2VyQ2hhcmFjdGVycyxcclxuICBnZXRGYXZvcml0ZUF1dGhvcnMsXHJcbiAgZ2V0RmF2b3JpdGVDaGFyYWN0ZXJzLFxyXG4gIGdldEZhdm9yaXRlU3RvcmllcyxcclxuICBnZXRVc2VyTG9jYXRpb25zLFxyXG4gIGdldEZvbGxvd2VycyxcclxuICBjaGFyYWN0ZXJzLFxyXG4gIGlzRm9sbG93aW5nLFxyXG4gIGZhdkF1dGhvcnMsXHJcbiAgZm9sbG93ZXJzLFxyXG4gIGZhdkNoYXJhY3RlcnMsXHJcbiAgZmF2U3RvcmllcyxcclxuICBsb2FkaW5nLFxyXG59KSA9PiB7XHJcbiAgY29uc3QgW3RhYnNdID0gdXNlU3RhdGUoW1xyXG4gICAgXCJzdG9yaWVzXCIsXHJcbiAgICBcImNoYXJhY3RlcnNcIixcclxuICAgIFwibG9jYXRpb25zXCIsXHJcbiAgICBcImZhdm9yaXRlcyBzdG9yaWVzXCIsXHJcbiAgICBcImZhdm9yaXRlcyBjaGFyYWN0ZXJzXCIsXHJcbiAgICBcImZvbGxvd2Vyc1wiLFxyXG4gICAgXCJmb2xsb3dpbmdzXCIsXHJcbiAgXSk7XHJcbiAgY29uc3QgW2N1cnJlbnRUYWIsIHNldEN1cnJlbnRUYWJdID0gdXNlU3RhdGUoXCJzdG9yaWVzXCIpO1xyXG4gIGNvbnN0IFtmYXZUYWIsIHNldEZhdlRhYl0gPSB1c2VTdGF0ZShcImZhdmF1dGhvcnNcIik7XHJcbiAgY29uc3QgW2Zhdm9yaXRlU3Rvcmllcywgc2V0RmF2b3JpdGVTdG9yaWVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbZmF2b3JpdGVDaGFyYWN0ZXJzLCBzZXRGYXZvcml0ZUNoYXJhY3RlcnNdID0gdXNlU3RhdGUoZmF2Q2hhcmFjdGVycyk7XHJcbiAgY29uc3QgY2hhbmdlVGFiID0gKHRhYikgPT4gc2V0Q3VycmVudFRhYih0YWIpO1xyXG5cclxuICBjb25zdCBhdXRoID0gdXNlQXV0aCgpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKFxyXG4gICAgICAoYXV0aC51c2VyICYmIGF1dGgudXNlci51aWQgIT09IHJvdXRlci5xdWVyeS5pZCkgfHxcclxuICAgICAgKCFhdXRoLmlzTG9hZGluZyAmJiAhYXV0aC51c2VyKVxyXG4gICAgKSB7XHJcbiAgICAgIGdldFByb2ZpbGUocm91dGVyLnF1ZXJ5LmlkKTtcclxuXHJcbiAgICAgIGdldFVzZXJTdG9yaWVzKHJvdXRlci5xdWVyeS5pZCk7XHJcbiAgICAgIGdldFVzZXJDaGFyYWN0ZXJzKHJvdXRlci5xdWVyeS5pZCk7XHJcbiAgICAgIGdldEZhdm9yaXRlQXV0aG9ycyhyb3V0ZXIucXVlcnkuaWQpO1xyXG4gICAgICBnZXRGb2xsb3dlcnMocm91dGVyLnF1ZXJ5LmlkKTtcclxuICAgICAgZ2V0RmF2b3JpdGVDaGFyYWN0ZXJzKHJvdXRlci5xdWVyeS5pZCk7XHJcbiAgICAgIGdldEZhdm9yaXRlU3Rvcmllcyhyb3V0ZXIucXVlcnkuaWQpO1xyXG4gICAgICBnZXRVc2VyTG9jYXRpb25zKHJvdXRlci5xdWVyeS5pZCk7XHJcbiAgICAgIHNldEN1cnJlbnRUYWIoXCJzdG9yaWVzXCIpO1xyXG4gICAgfVxyXG4gIH0sIFtyb3V0ZXIucXVlcnkuaWQsIGF1dGhdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChhdXRoLnVzZXIpIHtcclxuICAgICAgZ2V0SXNGb2xsb3dpbmcocm91dGVyLnF1ZXJ5LmlkKTtcclxuICAgIH1cclxuICB9LCBbYXV0aF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0RmF2b3JpdGVTdG9yaWVzKFxyXG4gICAgICBmYXZTdG9yaWVzLmZpbHRlcigocykgPT4gcy5wdWJsaWMgfHwgcy5hdXRob3JJZCA9PT0gYXV0aC51c2VyLnVpZClcclxuICAgICk7XHJcbiAgICBzZXRGYXZvcml0ZUNoYXJhY3RlcnMoXHJcbiAgICAgIGZhdkNoYXJhY3RlcnMuZmlsdGVyKChzKSA9PiBzLnB1YmxpYyB8fCBzLmF1dGhvcklkID09PSBhdXRoLnVzZXIudWlkKVxyXG4gICAgKTtcclxuICB9LCBbYXV0aCwgZmF2U3RvcmllcywgZmF2Q2hhcmFjdGVyc10pO1xyXG5cclxuICBjb25zdCBjaGFuZ2VGYXZUYWIgPSAodGFiKSA9PiBzZXRGYXZUYWIodGFiKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZVwiPlxyXG4gICAgICA8TG9hZGluZ1NjcmVlbiBsb2FkaW5nPXthdXRoLmlzTG9hZGluZ30+XHJcbiAgICAgICAge2F1dGgudXNlciAmJiBhdXRoLnVzZXIudWlkID09PSByb3V0ZXIucXVlcnkuaWQgPyAoXHJcbiAgICAgICAgICA8UHJvZmlsZVByaXZlIC8+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxCYW5uZXJcclxuICAgICAgICAgICAgICBjb250ZXh0PVwicHVibGljXCJcclxuICAgICAgICAgICAgICBwcm9maWxlPXtwcm9maWxlfVxyXG4gICAgICAgICAgICAgIGZhdkF1dGhvcnM9e2ZhdkF1dGhvcnN9XHJcbiAgICAgICAgICAgICAgZm9sbG93ZXJzPXtmb2xsb3dlcnN9XHJcbiAgICAgICAgICAgICAgY2hhbmdlRmF2VGFiPXtjaGFuZ2VGYXZUYWJ9XHJcbiAgICAgICAgICAgICAgZmF2VGFiPXtmYXZUYWJ9XHJcbiAgICAgICAgICAgICAgc2V0Q3VycmVudFRhYj17c2V0Q3VycmVudFRhYn1cclxuICAgICAgICAgICAgICBpc0ZvbGxvd2luZz17aXNGb2xsb3dpbmd9XHJcbiAgICAgICAgICAgICAgZm9sbG93VXNlcj17Zm9sbG93VXNlcn1cclxuICAgICAgICAgICAgICB1bmZvbGxvd1VzZXI9e3VuZm9sbG93VXNlcn1cclxuICAgICAgICAgICAgICBhdXRoPXthdXRofVxyXG4gICAgICAgICAgICAgIGlkPXtyb3V0ZXIucXVlcnkuaWR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInByb2ZpbGUtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgIDxUYWJzIGN1cnJlbnRUYWI9e2N1cnJlbnRUYWJ9IHRhYnM9e3RhYnN9IGNoYW5nZVRhYj17Y2hhbmdlVGFifSAvPlxyXG4gICAgICAgICAgICAgIHtjdXJyZW50VGFiID09PSBcInN0b3JpZXNcIiAmJiAoXHJcbiAgICAgICAgICAgICAgICA8U3Rvcmllc1xyXG4gICAgICAgICAgICAgICAgICBhdXRoPXthdXRofVxyXG4gICAgICAgICAgICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxyXG4gICAgICAgICAgICAgICAgICB0eXBlPXtcInNob3dcIn1cclxuICAgICAgICAgICAgICAgICAgc3Rvcmllcz17c3Rvcmllc31cclxuICAgICAgICAgICAgICAgICAgdHlwZT17XCJwcml2YXRlUHJvZmlsZVwifVxyXG4gICAgICAgICAgICAgICAgICBjb250ZXh0PVwicHVibGljXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICB7Y3VycmVudFRhYiA9PT0gXCJjaGFyYWN0ZXJzXCIgJiYgKFxyXG4gICAgICAgICAgICAgICAgPENoYXJhY3RlcnMgY29udGV4dD1cInB1YmxpY1wiIGNoYXJhY3RlcnM9e2NoYXJhY3RlcnN9IC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICB7Y3VycmVudFRhYiA9PT0gXCJsb2NhdGlvbnNcIiAmJiAoXHJcbiAgICAgICAgICAgICAgICA8TG9jYXRpb25zXHJcbiAgICAgICAgICAgICAgICAgIGNvbnRleHQ9XCJwdWJsaWNcIlxyXG4gICAgICAgICAgICAgICAgICBsb2NhdGlvbnM9e2xvY2F0aW9uc31cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInByb2ZpbGVcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIHtjdXJyZW50VGFiID09PSBcImZhdm9yaXRlcyBzdG9yaWVzXCIgJiYgKFxyXG4gICAgICAgICAgICAgICAgPFN0b3JpZXNcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cImZhdm9yaXRlc1wiXHJcbiAgICAgICAgICAgICAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICAgIHN0b3JpZXM9e2Zhdm9yaXRlU3Rvcmllc31cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICB7Y3VycmVudFRhYiA9PT0gXCJmYXZvcml0ZXMgY2hhcmFjdGVyc1wiICYmIChcclxuICAgICAgICAgICAgICAgIDxDaGFyYWN0ZXJzIHR5cGU9XCJmYXZvcml0ZXNcIiBjaGFyYWN0ZXJzPXtmYXZvcml0ZUNoYXJhY3RlcnN9IC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICB7Y3VycmVudFRhYiA9PT0gXCJmb2xsb3dlcnNcIiAmJiAoXHJcbiAgICAgICAgICAgICAgICA8Rm9sbG93ZXJzXHJcbiAgICAgICAgICAgICAgICAgIHRpdGxlPXtcclxuICAgICAgICAgICAgICAgICAgICBmb2xsb3dlcnMuYXV0aG9ycy5sZW5ndGggPiAxID8gXCJGb2xsb3dlcnNcIiA6IFwiRm9sbG93ZXJcIlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9e1wiZm9sbG93ZXJzXCJ9XHJcbiAgICAgICAgICAgICAgICAgIGxnPXs0fVxyXG4gICAgICAgICAgICAgICAgICBtZD17Nn1cclxuICAgICAgICAgICAgICAgICAgc209ezh9XHJcbiAgICAgICAgICAgICAgICAgIHhzPXsxMn1cclxuICAgICAgICAgICAgICAgICAgaXRlbXM9e2ZvbGxvd2Vycy5hdXRob3JzfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIHtjdXJyZW50VGFiID09PSBcImZvbGxvd2luZ3NcIiAmJiAoXHJcbiAgICAgICAgICAgICAgICA8Rm9sbG93ZXJzXHJcbiAgICAgICAgICAgICAgICAgIHRpdGxlPXtcclxuICAgICAgICAgICAgICAgICAgICBmYXZBdXRob3JzLmF1dGhvcnMubGVuZ3RoID4gMSA/IFwiRm9sbG93aW5nc1wiIDogXCJGb2xsb3dpbmdcIlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9e1wiZm9sbG93aW5nc1wifVxyXG4gICAgICAgICAgICAgICAgICBsZz17NH1cclxuICAgICAgICAgICAgICAgICAgbWQ9ezZ9XHJcbiAgICAgICAgICAgICAgICAgIHNtPXs4fVxyXG4gICAgICAgICAgICAgICAgICB4cz17MTJ9XHJcbiAgICAgICAgICAgICAgICAgIGl0ZW1zPXtmYXZBdXRob3JzLmF1dGhvcnN9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvTG9hZGluZ1NjcmVlbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIG93blByb3BzKSA9PiAoe1xyXG4gIHByb2ZpbGU6IHN0YXRlLmF1dGgucHJvZmlsZSxcclxuICBzdG9yaWVzOiBzdGF0ZS5zdG9yaWVzLnVzZXJTdG9yaWVzLFxyXG4gIGNoYXJhY3RlcnM6IHN0YXRlLmNoYXJhY3RlcnMudXNlckNoYXJhY3RlcnMsXHJcbiAgZmF2QXV0aG9yczogc3RhdGUuYXV0aC5mYXZBdXRob3JzLFxyXG4gIGZvbGxvd2Vyczogc3RhdGUuYXV0aC5mb2xsb3dlcnMsXHJcbiAgZmF2Q2hhcmFjdGVyczogc3RhdGUuY2hhcmFjdGVycy5mYXZDaGFyYWN0ZXJzLFxyXG4gIGZhdlN0b3JpZXM6IHN0YXRlLnN0b3JpZXMuZmF2U3RvcmllcyxcclxuICBsb2NhdGlvbnM6IHN0YXRlLnN0b3JpZXMudXNlckxvY2F0aW9ucyxcclxuICBsb2FkaW5nOiBzdGF0ZS5zdG9yaWVzLmxvYWRpbmcsXHJcbiAgaXNGb2xsb3dpbmc6IHN0YXRlLmF1dGguaXNGb2xsb3dpbmcsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHtcclxuICBnZXRQcm9maWxlLFxyXG4gIGdldFVzZXJTdG9yaWVzLFxyXG4gIGdldFVzZXJDaGFyYWN0ZXJzLFxyXG4gIGdldEZhdm9yaXRlQXV0aG9ycyxcclxuICBnZXRGb2xsb3dlcnMsXHJcbiAgZ2V0RmF2b3JpdGVDaGFyYWN0ZXJzLFxyXG4gIGdldEZhdm9yaXRlU3RvcmllcyxcclxuICBnZXRVc2VyTG9jYXRpb25zLFxyXG4gIGZvbGxvd1VzZXIsXHJcbiAgdW5mb2xsb3dVc2VyLFxyXG4gIGdldElzRm9sbG93aW5nLFxyXG59KShQcm9maWxlKTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBBbGVydCwgQnV0dG9uIH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmltcG9ydCBCYW5uZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcHJvZmlsZS9CYW5uZXJcIjtcclxuaW1wb3J0IFRhYnMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcHJvZmlsZS9UYWJzXCI7XHJcbmltcG9ydCBTdG9yaWVzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3Byb2ZpbGUvU3Rvcmllc1wiO1xyXG5pbXBvcnQgQ2hhcmFjdGVycyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9wcm9maWxlL0NoYXJhY3RlcnNcIjtcclxuaW1wb3J0IEZvbGxvd2VycyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9wcm9maWxlL0ZvbGxvd2Vyc1wiO1xyXG5pbXBvcnQgTG9jYXRpb25zIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3Byb2ZpbGUvTG9jYXRpb25zXCI7XHJcbmltcG9ydCBTZXR0aW5ncyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9wcm9maWxlL1NldHRpbmdzXCI7XHJcblxyXG5pbXBvcnQgeyBnZXRQcm9maWxlLCBjaGFuZ2VQcm9maWxlIH0gZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvbnMvdXNlckFjdGlvbnNcIjtcclxuaW1wb3J0IHtcclxuICBnZXRVc2VyU3RvcmllcyxcclxuICBnZXRGYXZvcml0ZVN0b3JpZXMsXHJcbiAgZ2V0VXNlckxvY2F0aW9ucyxcclxufSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9ucy9zdG9yaWVzQWN0aW9uc1wiO1xyXG5pbXBvcnQge1xyXG4gIGdldFVzZXJDaGFyYWN0ZXJzLFxyXG4gIGdldEZhdm9yaXRlQ2hhcmFjdGVycyxcclxufSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9ucy9jaGFyYWN0ZXJzQWN0aW9uc1wiO1xyXG5pbXBvcnQge1xyXG4gIGdldEZhdm9yaXRlQXV0aG9ycyxcclxuICBnZXRGb2xsb3dlcnMsXHJcbn0gZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvbnMvdXNlckFjdGlvbnNcIjtcclxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gXCIuLi8uLi9ob29rcy91c2VySG9va3NcIjtcclxuaW1wb3J0IExvYWRpbmdTY3JlZW4gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvaG9jL0xvYWRpbmdTY3JlZW5cIjtcclxuaW1wb3J0IFJlZGlyZWN0Q29tcCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9ob2MvUmVkaXJlY3RDb21wXCI7XHJcblxyXG5jb25zdCBQcm9maWxlID0gKHtcclxuICBnZXRQcm9maWxlLFxyXG4gIHByb2ZpbGUsXHJcbiAgc3RvcmllcyxcclxuICBsb2NhdGlvbnMsXHJcbiAgZ2V0VXNlclN0b3JpZXMsXHJcbiAgZ2V0VXNlckNoYXJhY3RlcnMsXHJcbiAgZ2V0RmF2b3JpdGVBdXRob3JzLFxyXG4gIGdldEZhdm9yaXRlQ2hhcmFjdGVycyxcclxuICBnZXRGYXZvcml0ZVN0b3JpZXMsXHJcbiAgZ2V0VXNlckxvY2F0aW9ucyxcclxuICBjaGFuZ2VQcm9maWxlLFxyXG4gIGdldEZvbGxvd2VycyxcclxuICBjaGFyYWN0ZXJzLFxyXG4gIGZhdkF1dGhvcnMsXHJcbiAgZm9sbG93ZXJzLFxyXG4gIGZhdkNoYXJhY3RlcnMsXHJcbiAgZmF2U3RvcmllcyxcclxuICBsb2FkaW5nLFxyXG59KSA9PiB7XHJcbiAgY29uc3QgW3RhYnNdID0gdXNlU3RhdGUoW1xyXG4gICAgXCJzdG9yaWVzXCIsXHJcbiAgICBcImNoYXJhY3RlcnNcIixcclxuICAgIFwibG9jYXRpb25zXCIsXHJcbiAgICBcImZhdm9yaXRlcyBzdG9yaWVzXCIsXHJcbiAgICBcImZhdm9yaXRlcyBjaGFyYWN0ZXJzXCIsXHJcbiAgICBcImZvbGxvd2Vyc1wiLFxyXG4gICAgXCJmb2xsb3dpbmdzXCIsXHJcbiAgXSk7XHJcbiAgY29uc3QgW29wZW5TZXR0aW5ncywgc2V0T3BlblNldHRpbmdzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbY3VycmVudFRhYiwgc2V0Q3VycmVudFRhYl0gPSB1c2VTdGF0ZShcInN0b3JpZXNcIik7XHJcbiAgY29uc3QgW2ZhdlRhYiwgc2V0RmF2VGFiXSA9IHVzZVN0YXRlKFwiZmF2YXV0aG9yc1wiKTtcclxuICBjb25zdCBbZmF2b3JpdGVTdG9yaWVzLCBzZXRGYXZvcml0ZVN0b3JpZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtmYXZvcml0ZUNoYXJhY3RlcnMsIHNldEZhdm9yaXRlQ2hhcmFjdGVyc10gPSB1c2VTdGF0ZShmYXZDaGFyYWN0ZXJzKTtcclxuICBjb25zdCBjaGFuZ2VUYWIgPSAodGFiKSA9PiBzZXRDdXJyZW50VGFiKHRhYik7XHJcblxyXG4gIGNvbnN0IGF1dGggPSB1c2VBdXRoKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB1bnN1YnNjcmliZSA9ICgpID0+IHtcclxuICAgICAgaWYgKGF1dGgudXNlcikge1xyXG4gICAgICAgIGdldFByb2ZpbGUoKTtcclxuICAgICAgICBnZXRVc2VyU3RvcmllcyhudWxsLCBcInByb2ZpbGVcIik7XHJcbiAgICAgICAgZ2V0VXNlckNoYXJhY3RlcnMoKTtcclxuICAgICAgICBnZXRGYXZvcml0ZUF1dGhvcnMoKTtcclxuICAgICAgICBnZXRGb2xsb3dlcnMoKTtcclxuICAgICAgICBnZXRGYXZvcml0ZUNoYXJhY3RlcnMoKTtcclxuICAgICAgICBnZXRGYXZvcml0ZVN0b3JpZXMoKTtcclxuICAgICAgICBnZXRVc2VyTG9jYXRpb25zKCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gdW5zdWJzY3JpYmUoKTtcclxuICB9LCBbYXV0aF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0RmF2b3JpdGVTdG9yaWVzKFxyXG4gICAgICBmYXZTdG9yaWVzLmZpbHRlcigocykgPT4gcy5wdWJsaWMgfHwgcy5hdXRob3JJZCA9PT0gYXV0aC51c2VyLnVpZClcclxuICAgICk7XHJcbiAgICBzZXRGYXZvcml0ZUNoYXJhY3RlcnMoXHJcbiAgICAgIGZhdkNoYXJhY3RlcnMuZmlsdGVyKChzKSA9PiBzLnB1YmxpYyB8fCBzLmF1dGhvcklkID09PSBhdXRoLnVzZXIudWlkKVxyXG4gICAgKTtcclxuICB9LCBbYXV0aCwgZmF2U3RvcmllcywgZmF2Q2hhcmFjdGVyc10pO1xyXG5cclxuICBjb25zdCBjaGFuZ2VGYXZUYWIgPSAodGFiKSA9PiBzZXRGYXZUYWIodGFiKTtcclxuXHJcbiAgY29uc3QgZGVsZXRlQWNjb3VudCA9ICgpID0+IHtcclxuICAgIGF1dGguZGVsZXRlQWNjb3VudCgpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGVcIj5cclxuICAgICAgPExvYWRpbmdTY3JlZW4gbG9hZGluZz17YXV0aC5pc0xvYWRpbmd9PlxyXG4gICAgICAgIDxSZWRpcmVjdENvbXAgY29uZGl0aW9uPXthdXRoLnVzZXJ9IHR5cGU9XCJyZWRpcmVjdFwiPlxyXG4gICAgICAgICAge2F1dGgudXNlciAmJiAhYXV0aC51c2VyLmVtYWlsVmVyaWZpZWQgJiYgKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxBbGVydFxyXG4gICAgICAgICAgICAgICAgY2xvc2FibGVcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U9XCJZb3UgbmVlZCB0byB2ZXJpZnkgeW91ciBlbWFpbCB0byBlbmpveSBhbGwgYmVuZWZpdHMgb2YgS3JvbmlrZWFcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImVycm9yXCJcclxuICAgICAgICAgICAgICAgIGFjdGlvbj17XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXthdXRoLnZlcmlmeUVtYWlsfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgQ2xpY2sgaGVyZSB0byBzZW5kIGEgbmV3IGVtYWlsXHJcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMjRweFwiIH19PjwvZGl2PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICA8QmFubmVyXHJcbiAgICAgICAgICAgIGNvbnRleHQ9XCJwcml2YXRlXCJcclxuICAgICAgICAgICAgcHJvZmlsZT17cHJvZmlsZX1cclxuICAgICAgICAgICAgb3BlblNldHRpbmdzPXtzZXRPcGVuU2V0dGluZ3N9XHJcbiAgICAgICAgICAgIGZhdkF1dGhvcnM9e2ZhdkF1dGhvcnN9XHJcbiAgICAgICAgICAgIGZvbGxvd2Vycz17Zm9sbG93ZXJzfVxyXG4gICAgICAgICAgICBjaGFuZ2VGYXZUYWI9e2NoYW5nZUZhdlRhYn1cclxuICAgICAgICAgICAgZmF2VGFiPXtmYXZUYWJ9XHJcbiAgICAgICAgICAgIHNldEN1cnJlbnRUYWI9e3NldEN1cnJlbnRUYWJ9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHJvZmlsZS1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxUYWJzIGN1cnJlbnRUYWI9e2N1cnJlbnRUYWJ9IHRhYnM9e3RhYnN9IGNoYW5nZVRhYj17Y2hhbmdlVGFifSAvPlxyXG4gICAgICAgICAgICB7Y3VycmVudFRhYiA9PT0gXCJzdG9yaWVzXCIgJiYgKFxyXG4gICAgICAgICAgICAgIDxTdG9yaWVzXHJcbiAgICAgICAgICAgICAgICBhdXRoPXthdXRofVxyXG4gICAgICAgICAgICAgICAgbG9hZGluZz17bG9hZGluZ31cclxuICAgICAgICAgICAgICAgIHR5cGU9e1wic2hvd1wifVxyXG4gICAgICAgICAgICAgICAgc3Rvcmllcz17c3Rvcmllc31cclxuICAgICAgICAgICAgICAgIHR5cGU9e1wicHJpdmF0ZVByb2ZpbGVcIn1cclxuICAgICAgICAgICAgICAgIGNvbnRleHQ9XCJwcml2YXRlXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7Y3VycmVudFRhYiA9PT0gXCJjaGFyYWN0ZXJzXCIgJiYgKFxyXG4gICAgICAgICAgICAgIDxDaGFyYWN0ZXJzIGNvbnRleHQ9XCJwcml2YXRlXCIgY2hhcmFjdGVycz17Y2hhcmFjdGVyc30gLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAge2N1cnJlbnRUYWIgPT09IFwibG9jYXRpb25zXCIgJiYgKFxyXG4gICAgICAgICAgICAgIDxMb2NhdGlvbnNcclxuICAgICAgICAgICAgICAgIGNvbnRleHQ9XCJwcml2YXRlXCJcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9ucz17bG9jYXRpb25zfVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInByb2ZpbGVcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHtjdXJyZW50VGFiID09PSBcImZhdm9yaXRlcyBzdG9yaWVzXCIgJiYgKFxyXG4gICAgICAgICAgICAgIDxTdG9yaWVzXHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImZhdm9yaXRlc1wiXHJcbiAgICAgICAgICAgICAgICBzdG9yaWVzPXtmYXZvcml0ZVN0b3JpZXN9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAge2N1cnJlbnRUYWIgPT09IFwiZmF2b3JpdGVzIGNoYXJhY3RlcnNcIiAmJiAoXHJcbiAgICAgICAgICAgICAgPENoYXJhY3RlcnMgdHlwZT1cImZhdm9yaXRlc1wiIGNoYXJhY3RlcnM9e2Zhdm9yaXRlQ2hhcmFjdGVyc30gLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAge2N1cnJlbnRUYWIgPT09IFwiZm9sbG93ZXJzXCIgJiYgKFxyXG4gICAgICAgICAgICAgIDxGb2xsb3dlcnNcclxuICAgICAgICAgICAgICAgIHRpdGxlPXtmYXZBdXRob3JzLmF1dGhvcnMubGVuZ3RoID4gMSA/IFwiRm9sbG93ZXJzXCIgOiBcIkZvbGxvd2VyXCJ9XHJcbiAgICAgICAgICAgICAgICB0eXBlPXtcImZvbGxvd2Vyc1wifVxyXG4gICAgICAgICAgICAgICAgbGc9ezR9XHJcbiAgICAgICAgICAgICAgICBtZD17Nn1cclxuICAgICAgICAgICAgICAgIHNtPXs4fVxyXG4gICAgICAgICAgICAgICAgeHM9ezEyfVxyXG4gICAgICAgICAgICAgICAgaXRlbXM9e2ZvbGxvd2Vycy5hdXRob3JzfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHtjdXJyZW50VGFiID09PSBcImZvbGxvd2luZ3NcIiAmJiAoXHJcbiAgICAgICAgICAgICAgPEZvbGxvd2Vyc1xyXG4gICAgICAgICAgICAgICAgdGl0bGU9e1xyXG4gICAgICAgICAgICAgICAgICBmYXZBdXRob3JzLmF1dGhvcnMubGVuZ3RoID4gMSA/IFwiRm9sbG93aW5nc1wiIDogXCJGb2xsb3dpbmdcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdHlwZT17XCJmb2xsb3dpbmdzXCJ9XHJcbiAgICAgICAgICAgICAgICBsZz17NH1cclxuICAgICAgICAgICAgICAgIG1kPXs2fVxyXG4gICAgICAgICAgICAgICAgc209ezh9XHJcbiAgICAgICAgICAgICAgICB4cz17MTJ9XHJcbiAgICAgICAgICAgICAgICBpdGVtcz17ZmF2QXV0aG9ycy5hdXRob3JzfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICA8U2V0dGluZ3NcclxuICAgICAgICAgICAgZGVsZXRlQWNjb3VudD17ZGVsZXRlQWNjb3VudH1cclxuICAgICAgICAgICAgY2hhbmdlUHJvZmlsZT17Y2hhbmdlUHJvZmlsZX1cclxuICAgICAgICAgICAgcHJvZmlsZT17cHJvZmlsZX1cclxuICAgICAgICAgICAgb3BlblNldHRpbmdzPXtvcGVuU2V0dGluZ3N9XHJcbiAgICAgICAgICAgIHNldE9wZW5TZXR0aW5ncz17c2V0T3BlblNldHRpbmdzfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L1JlZGlyZWN0Q29tcD5cclxuICAgICAgPC9Mb2FkaW5nU2NyZWVuPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgb3duUHJvcHMpID0+ICh7XHJcbiAgcHJvZmlsZTogc3RhdGUuYXV0aC5wcm9maWxlLFxyXG4gIHN0b3JpZXM6IHN0YXRlLnN0b3JpZXMudXNlclN0b3JpZXMsXHJcbiAgY2hhcmFjdGVyczogc3RhdGUuY2hhcmFjdGVycy51c2VyQ2hhcmFjdGVycyxcclxuICBmYXZBdXRob3JzOiBzdGF0ZS5hdXRoLmZhdkF1dGhvcnMsXHJcbiAgZm9sbG93ZXJzOiBzdGF0ZS5hdXRoLmZvbGxvd2VycyxcclxuICBmYXZDaGFyYWN0ZXJzOiBzdGF0ZS5jaGFyYWN0ZXJzLmZhdkNoYXJhY3RlcnMsXHJcbiAgZmF2U3Rvcmllczogc3RhdGUuc3Rvcmllcy5mYXZTdG9yaWVzLFxyXG4gIGxvY2F0aW9uczogc3RhdGUuc3Rvcmllcy51c2VyTG9jYXRpb25zLFxyXG4gIGxvYWRpbmc6IHN0YXRlLnN0b3JpZXMubG9hZGluZyxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywge1xyXG4gIGdldFByb2ZpbGUsXHJcbiAgZ2V0VXNlclN0b3JpZXMsXHJcbiAgZ2V0VXNlckNoYXJhY3RlcnMsXHJcbiAgZ2V0RmF2b3JpdGVBdXRob3JzLFxyXG4gIGdldEZvbGxvd2VycyxcclxuICBnZXRGYXZvcml0ZUNoYXJhY3RlcnMsXHJcbiAgZ2V0RmF2b3JpdGVTdG9yaWVzLFxyXG4gIGdldFVzZXJMb2NhdGlvbnMsXHJcbiAgY2hhbmdlUHJvZmlsZSxcclxufSkoUHJvZmlsZSk7XHJcbiIsImltcG9ydCB7IHR5cGVzIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBtZXNzYWdlIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgZGIsIGF1dGgsIHN0b3JhZ2UgfSBmcm9tIFwiLi4vZmJDb25maWdcIjtcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDaGFyYWN0ZXIgPSAoaWQsIHR5cGUpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGxldCByZWxBcnIgPSBbXTtcclxuICBsZXQgc3RvcnlBcnIgPSBbXTtcclxuICBkYi5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc1wiKVxyXG4gICAgLmRvYyhpZClcclxuICAgIC5nZXQoKVxyXG4gICAgLnRoZW4oKGRvYykgPT4ge1xyXG4gICAgICBpZiAoZG9jLmV4aXN0cykge1xyXG4gICAgICAgIGlmICh0eXBlID09PSBcInNob3dcIikge1xyXG4gICAgICAgICAgY29uc3QgcmVsYXRpdmVzID0gZG9jLmRhdGEoKS5yZWxhdGl2ZXNBcnI7XHJcbiAgICAgICAgICBsZXQgcmVsUXVlcmllcyA9IFtdO1xyXG4gICAgICAgICAgcmVsYXRpdmVzLmZvckVhY2goKHJlbCkgPT4ge1xyXG4gICAgICAgICAgICByZWxRdWVyaWVzLnB1c2goZGIuY29sbGVjdGlvbihcImNoYXJhY3RlcnNcIikuZG9jKHJlbCkuZ2V0KCkpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBQcm9taXNlLmFsbChyZWxRdWVyaWVzKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgcmVzLmZvckVhY2goKGNoYXIpID0+XHJcbiAgICAgICAgICAgICAgcmVsQXJyLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgLi4uY2hhci5kYXRhKCksXHJcbiAgICAgICAgICAgICAgICBpZDogY2hhci5pZCxcclxuICAgICAgICAgICAgICAgIHJlbGF0aW9uOiBkb2NcclxuICAgICAgICAgICAgICAgICAgLmRhdGEoKVxyXG4gICAgICAgICAgICAgICAgICAucmVsYXRpdmVzLmZpbmQoKGMpID0+IGMuY2hhcmFjdGVyX2lkID09PSBjaGFyLmlkKS5yZWxhdGlvbixcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbWFpblF1ZXJ5ID0gZGJcclxuICAgICAgICAgICAgICAuY29sbGVjdGlvbihcInN0b3JpZXNcIilcclxuICAgICAgICAgICAgICAud2hlcmUoXCJtYWluQ2hhcmFjdGVyc1wiLCBcImFycmF5LWNvbnRhaW5zXCIsIGlkKVxyXG4gICAgICAgICAgICAgIC5nZXQoKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNlY29uZGFyeVF1ZXJ5ID0gZGJcclxuICAgICAgICAgICAgICAuY29sbGVjdGlvbihcInN0b3JpZXNcIilcclxuICAgICAgICAgICAgICAud2hlcmUoXCJzZWNvbmRhcnlBcnJcIiwgXCJhcnJheS1jb250YWluc1wiLCBpZClcclxuICAgICAgICAgICAgICAuZ2V0KCk7XHJcblxyXG4gICAgICAgICAgICBQcm9taXNlLmFsbChbbWFpblF1ZXJ5LCBzZWNvbmRhcnlRdWVyeV0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGFsbFN0b3J5ID0gcmVzdWx0WzBdLmRvY3MuY29uY2F0KHJlc3VsdFsxXS5kb2NzKTtcclxuICAgICAgICAgICAgICBhbGxTdG9yeS5mb3JFYWNoKChzdG9yeSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc3RvcnlBcnIucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgIGlkOiBzdG9yeS5pZCxcclxuICAgICAgICAgICAgICAgICAgdGl0bGU6IHN0b3J5LmRhdGEoKS50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgYXV0aG9ySWQ6IHN0b3J5LmRhdGEoKS5hdXRob3JJZCxcclxuICAgICAgICAgICAgICAgICAgYmFubmVyOiBzdG9yeS5kYXRhKCkuYmFubmVyLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogdHlwZXMuR0VUX0NIQVJBQ1RFUixcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAgICAgY2hhcmFjdGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uZG9jLmRhdGEoKSxcclxuICAgICAgICAgICAgICAgICAgICBpZDogZG9jLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlbGF0aXZlczogcmVsQXJyLmZpbHRlcihcclxuICAgICAgICAgICAgICAgICAgICAgIChyKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoYXV0aC5jdXJyZW50VXNlciAmJiBhdXRoLmN1cnJlbnRVc2VyLnVpZCkgPT09XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgci5hdXRob3JJZCB8fCByLnB1YmxpY1xyXG4gICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgc3Rvcmllczogc3RvcnlBcnIuZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgKHIpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChhdXRoLmN1cnJlbnRVc2VyICYmIGF1dGguY3VycmVudFVzZXIudWlkKSA9PT1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICByLmF1dGhvcklkIHx8IHIucHVibGljXHJcbiAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgY2hhcmFFeGlzdHM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiB0eXBlcy5HRVRfQ0hBUkFDVEVSLFxyXG4gICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgY2hhcmFjdGVyOiB7IC4uLmRvYy5kYXRhKCksIGlkOiBkb2MuaWQgfSxcclxuICAgICAgICAgICAgICBjaGFyYUV4aXN0czogdHJ1ZSxcclxuICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiB0eXBlcy5HRVRfQ0hBUkFDVEVSLFxyXG4gICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICBjaGFyYUV4aXN0czogZmFsc2UsXHJcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYWRkQ2hhcmFjdGVyID0gKGRhdGEpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRpc3BhdGNoKHsgdHlwZTogdHlwZXMuQUREX0NIQVJBQ1RFUiwgcGF5bG9hZDogeyBsb2FkaW5nOiB0cnVlIH0gfSk7XHJcblxyXG4gIGxldCBjaGFyYUlkID0gXCJcIjtcclxuICBkYi5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc1wiKVxyXG4gICAgLmFkZCh7XHJcbiAgICAgIC4uLmRhdGEsXHJcbiAgICAgIGltYWdlOiB0eXBlb2YgZGF0YS5pbWFnZSA9PT0gXCJzdHJpbmdcIiA/IGRhdGEuaW1hZ2UgOiBcIlwiLFxyXG4gICAgICBjcmVhdGVkQXQ6IGZpcmViYXNlLmZpcmVzdG9yZS5GaWVsZFZhbHVlLnNlcnZlclRpbWVzdGFtcCgpLFxyXG4gICAgICBsaWtlc0NvdW50OiAwLFxyXG4gICAgICBsaWtlczogW10sXHJcbiAgICAgIGRpc2xpa2VzOiBbXSxcclxuICAgIH0pXHJcbiAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIGNoYXJhSWQgPSByZXMuaWQ7XHJcbiAgICAgIGNvbnN0IGltYWdlTmFtZSA9IGAke3Jlcy5pZH0ke1wiX1wifSR7ZGF0YS5maXJzdG5hbWUudG9Mb3dlckNhc2UoKX0ke1xyXG4gICAgICAgIGRhdGEubGFzdG5hbWUgJiYgXCJfXCJcclxuICAgICAgfSR7ZGF0YS5sYXN0bmFtZSAmJiBkYXRhLmxhc3RuYW1lLnRvTG93ZXJDYXNlKCl9YDtcclxuXHJcbiAgICAgIGlmICh0eXBlb2YgZGF0YS5pbWFnZSA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgIHN0b3JhZ2VcclxuICAgICAgICAgIC5yZWYoYCR7YXV0aC5jdXJyZW50VXNlci51aWR9LyR7aW1hZ2VOYW1lfWApXHJcbiAgICAgICAgICAucHV0KGRhdGEuaW1hZ2UpXHJcbiAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdG9yYWdlXHJcbiAgICAgICAgICAgICAgLnJlZihhdXRoLmN1cnJlbnRVc2VyLnVpZClcclxuICAgICAgICAgICAgICAuY2hpbGQoaW1hZ2VOYW1lKVxyXG4gICAgICAgICAgICAgIC5nZXREb3dubG9hZFVSTCgpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKCh1cmwpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGRiXHJcbiAgICAgICAgICAgICAgLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzXCIpXHJcbiAgICAgICAgICAgICAgLmRvYyhjaGFyYUlkKVxyXG4gICAgICAgICAgICAgIC51cGRhdGUoeyBpbWFnZTogdXJsIH0pO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgbWVzc2FnZS5zdWNjZXNzKFwiQ2hhcmFjdGVyIGFkZGVkIHN1Y2Nlc3NmdWxseVwiKTtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgIHR5cGU6IHR5cGVzLkFERF9DSEFSQUNURVIsXHJcbiAgICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJDaGFyYWN0ZXIgYWRkZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICAgICAgICBjaGFyYWN0ZXJJZDogY2hhcmFJZCxcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWVzc2FnZS5zdWNjZXNzKFwiQ2hhcmFjdGVyIGFkZGVkIHN1Y2Nlc3NmdWxseVwiKTtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiB0eXBlcy5BRERfQ0hBUkFDVEVSLFxyXG4gICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkNoYXJhY3RlciBhZGRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgICAgY2hhcmFjdGVySWQ6IGNoYXJhSWQsXHJcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIG1lc3NhZ2UuZXJyb3IoZXJyLm1lc3NhZ2UpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZWRpdENoYXJhY3RlciA9IChkYXRhLCBpZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGlzcGF0Y2goeyB0eXBlOiB0eXBlcy5FRElUX0NIQVJBQ1RFUiwgcGF5bG9hZDogeyBsb2FkaW5nQ2hhcmFjdGVyOiB0cnVlIH0gfSk7XHJcblxyXG4gIGNvbnN0IGltYWdlTmFtZSA9IGAke2lkfSR7XCJfXCJ9JHtkYXRhLmZpcnN0bmFtZS50b0xvd2VyQ2FzZSgpfSR7XHJcbiAgICBkYXRhLmxhc3RuYW1lICYmIFwiX1wiXHJcbiAgfSR7ZGF0YS5sYXN0bmFtZSAmJiBkYXRhLmxhc3RuYW1lLnRvTG93ZXJDYXNlKCl9YDtcclxuXHJcbiAgaWYgKGRhdGEuaW1hZ2UgJiYgdHlwZW9mIGRhdGEuaW1hZ2UgPT09IFwib2JqZWN0XCIpIHtcclxuICAgIHN0b3JhZ2VcclxuICAgICAgLnJlZihgJHthdXRoLmN1cnJlbnRVc2VyLnVpZH0vJHtpbWFnZU5hbWV9YClcclxuICAgICAgLnB1dChkYXRhLmltYWdlKVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHN0b3JhZ2VcclxuICAgICAgICAgIC5yZWYoYXV0aC5jdXJyZW50VXNlci51aWQpXHJcbiAgICAgICAgICAuY2hpbGQoaW1hZ2VOYW1lKVxyXG4gICAgICAgICAgLmdldERvd25sb2FkVVJMKCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKCh1cmwpID0+IHtcclxuICAgICAgICByZXR1cm4gZGJcclxuICAgICAgICAgIC5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc1wiKVxyXG4gICAgICAgICAgLmRvYyhpZClcclxuICAgICAgICAgIC51cGRhdGUoe1xyXG4gICAgICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgICAgICBpbWFnZTogdXJsLFxyXG4gICAgICAgICAgICByZWxhdGl2ZXNBcnI6IGRhdGEucmVsYXRpdmVzLm1hcCgoYykgPT4gYy5jaGFyYWN0ZXJfaWQpLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiB0eXBlcy5FRElUX0NIQVJBQ1RFUixcclxuICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJDaGFyYWN0ZXIgZWRpdGVkIHN1Y2Nlc3NmdWxseVwiLFxyXG4gICAgICAgICAgICBsb2FkaW5nQ2hhcmFjdGVyOiBmYWxzZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihlcnIubWVzc2FnZSk7XHJcbiAgICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBkYi5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc1wiKVxyXG4gICAgICAuZG9jKGlkKVxyXG4gICAgICAudXBkYXRlKHtcclxuICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgIHJlbGF0aXZlc0FycjogZGF0YS5yZWxhdGl2ZXMubWFwKChjKSA9PiBjLmNoYXJhY3Rlcl9pZCksXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiB0eXBlcy5FRElUX0NIQVJBQ1RFUixcclxuICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJDaGFyYWN0ZXIgZWRpdGVkIHN1Y2Nlc3NmdWxseVwiLFxyXG4gICAgICAgICAgICBsb2FkaW5nQ2hhcmFjdGVyOiBmYWxzZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihlcnIubWVzc2FnZSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkZWxldGVDaGFyYWN0ZXIgPSAoaWQsIGZpcnN0bmFtZSwgbGFzdG5hbWUpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRpc3BhdGNoKHsgdHlwZTogdHlwZXMuREVMRVRFX0NIQVJBQ1RFUiwgcGF5bG9hZDogeyBsb2FkaW5nOiB0cnVlIH0gfSk7XHJcbiAgY29uc3QgaW1hZ2VOYW1lID0gYCR7aWR9JHtcIl9cIn0ke2ZpcnN0bmFtZS50b0xvd2VyQ2FzZSgpfSR7bGFzdG5hbWUgJiYgXCJfXCJ9JHtcclxuICAgIGxhc3RuYW1lICYmIGxhc3RuYW1lLnRvTG93ZXJDYXNlKClcclxuICB9YDtcclxuICAvL2NvbnN0IGJhdGNoID0gZGIuYmF0Y2goKTtcclxuICBkYi5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc1wiKVxyXG4gICAgLmRvYyhpZClcclxuICAgIC5kZWxldGUoKVxyXG4gICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICBpZiAoc3RvcmFnZS5yZWYoYCR7YXV0aC5jdXJyZW50VXNlci51aWR9LyR7aW1hZ2VOYW1lfWApKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0b3JhZ2VcclxuICAgICAgICAgIC5yZWYoYCR7YXV0aC5jdXJyZW50VXNlci51aWR9LyR7aW1hZ2VOYW1lfWApXHJcbiAgICAgICAgICAuZGVsZXRlKClcclxuICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgIHR5cGU6IHR5cGVzLkRFTEVURV9DSEFSQUNURVIsXHJcbiAgICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJDaGFyYWN0ZXIgZGVsZXRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZGVsZXRlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNoYXJhRXhpc3RzOiBmYWxzZSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyQ2hhcmFjdGVycyA9IChpZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgY29uc3QgdXNlcklkID0gaWQgPyBpZCA6IGF1dGguY3VycmVudFVzZXIudWlkO1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzXCIpXHJcbiAgICAud2hlcmUoXCJhdXRob3JJZFwiLCBcIj09XCIsIHVzZXJJZClcclxuICAgIC5nZXQoKVxyXG4gICAgLnRoZW4oKGRvY3MpID0+IHtcclxuICAgICAgbGV0IGl0ZW1zID0gW107XHJcbiAgICAgIGRvY3MuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICAgICAgaXRlbXMgPSBbLi4uaXRlbXMsIHsgaWQ6IGRvYy5pZCwgLi4uZG9jLmRhdGEoKSB9XS5maWx0ZXIoKGMpID0+XHJcbiAgICAgICAgICBpZCA/IGMucHVibGljIDogY1xyXG4gICAgICAgICk7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gaXRlbXM7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGl0ZW1zKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogdHlwZXMuR0VUX1VTRVJfQ0hBUkFDVEVSUywgcGF5bG9hZDogaXRlbXMgfSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRGYXZvcml0ZUNoYXJhY3RlcnMgPSAoaWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGNvbnN0IHVzZXJJZCA9IGlkID8gaWQgOiBhdXRoLmN1cnJlbnRVc2VyLnVpZDtcclxuICBkYi5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc0xpa2VzXCIpXHJcbiAgICAud2hlcmUoXCJzZW5kZXJJZFwiLCBcIj09XCIsIHVzZXJJZClcclxuICAgIC5nZXQoKVxyXG4gICAgLnRoZW4oKGRvY3MpID0+IHtcclxuICAgICAgbGV0IGZhdkFyciA9IFtdO1xyXG4gICAgICBkb2NzLmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgICAgIGZhdkFyciA9IFsuLi5mYXZBcnIsIGRvYy5kYXRhKCkuY2hhcmFjdGVySWRdO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGZhdkFycjtcclxuICAgIH0pXHJcbiAgICAudGhlbigodXNlcnMpID0+IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gdXNlcnMubWFwKCh1c2VyKSA9PlxyXG4gICAgICAgIGRiLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzXCIpLmRvYyh1c2VyKS5nZXQoKVxyXG4gICAgICApO1xyXG4gICAgICBQcm9taXNlLmFsbChyZXN1bHQpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGxldCBmYXZVc2VycyA9IFtdO1xyXG4gICAgICAgIHJlcy5mb3JFYWNoKFxyXG4gICAgICAgICAgKGRvYykgPT4gKGZhdlVzZXJzID0gWy4uLmZhdlVzZXJzLCB7IGlkOiBkb2MuaWQsIC4uLmRvYy5kYXRhKCkgfV0pXHJcbiAgICAgICAgKTtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiB0eXBlcy5HRVRfRkFWT1JJVEVfQ0hBUkFDVEVSUyxcclxuICAgICAgICAgIHBheWxvYWQ6IGZhdlVzZXJzLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGlzQ2hhcmFjdGVyRmF2b3JpdGUgPSAoY2hhcklkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBpZiAoYXV0aC5jdXJyZW50VXNlcikge1xyXG4gICAgZGIuY29sbGVjdGlvbihcImNoYXJhY3RlcnNMaWtlc1wiKVxyXG4gICAgICAud2hlcmUoXCJzZW5kZXJJZFwiLCBcIj09XCIsIGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gICAgICAud2hlcmUoXCJjaGFyYWN0ZXJJZFwiLCBcIj09XCIsIGNoYXJJZClcclxuICAgICAgLm9uU25hcHNob3QoKHNuYXBzaG90KSA9PiB7XHJcbiAgICAgICAgY29uc3QgYW5zd2VyID0gc25hcHNob3QuZG9jc1swXSA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICByZXR1cm4gZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogdHlwZXMuSVNfQ0hBUkFDVEVSX0ZBVk9SSVRFLFxyXG4gICAgICAgICAgcGF5bG9hZDogYW5zd2VyLFxyXG4gICAgICAgICAgbG9hZGluZ0ZhdjogZmFsc2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRDaGFyYWN0ZXJUb0Zhdm9yaXRlID0gKFxyXG4gIGlkLFxyXG4gIHVzZXJuYW1lLFxyXG4gIGNoYXJhY3Rlck5hbWUsXHJcbiAgYXV0aG9ySWRcclxuKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICAvLyBpZiAoaXNGYXZvcml0ZSkgcmV0dXJuIG1lc3NhZ2Uud2FybmluZyhcIllvdSd2ZSBhbHJlYWR5IGxpa2VkIHRoaXMgc3RvcnlcIik7XHJcbiAgaWYgKCFhdXRoLmN1cnJlbnRVc2VyKVxyXG4gICAgcmV0dXJuIG1lc3NhZ2UuZXJyb3IoXCJZb3UgbmVlZCB0byBiZSBsb2dnZWQgaW4gdG8gbGlrZSBhIGNoYXJhY3RlclwiKTtcclxuICBpZiAoIWF1dGguY3VycmVudFVzZXIuZW1haWxWZXJpZmllZClcclxuICAgIHJldHVybiBtZXNzYWdlLmVycm9yKFwiWW91IG5lZWQgdG8gdmVyaWZ5IHlvdXIgZW1haWwgZmlyc3RcIik7XHJcblxyXG4gIGRiLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzTGlrZXNcIilcclxuICAgIC5hZGQoe1xyXG4gICAgICBzZW5kZXI6IHVzZXJuYW1lLFxyXG4gICAgICBzZW5kZXJJZDogYXV0aC5jdXJyZW50VXNlci51aWQsXHJcbiAgICAgIGNoYXJhY3RlcklkOiBpZCxcclxuICAgICAgY3JlYXRlZEF0OiBmaXJlYmFzZS5maXJlc3RvcmUuRmllbGRWYWx1ZS5zZXJ2ZXJUaW1lc3RhbXAoKSxcclxuICAgIH0pXHJcbiAgICAudGhlbigoKSA9PiBtZXNzYWdlLnN1Y2Nlc3MoYCR7Y2hhcmFjdGVyTmFtZX0gYWRkZWQgdG8geW91ciBmYXZvcml0ZXNgKSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiBtZXNzYWdlLmVycm9yKFwiVGhlcmUgaGFzIGJlZW4gYSBwcm9ibGVtXCIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCByZW1vdmVDaGFyYWN0ZXJGcm9tRmF2b3JpdGUgPSAoaWQsIGNoYXJhY3Rlck5hbWUpID0+IChcclxuICBkaXNwYXRjaFxyXG4pID0+IHtcclxuICBkYi5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc0xpa2VzXCIpXHJcbiAgICAud2hlcmUoXCJjaGFyYWN0ZXJJZFwiLCBcIj09XCIsIGlkKVxyXG4gICAgLndoZXJlKFwic2VuZGVySWRcIiwgXCI9PVwiLCBhdXRoLmN1cnJlbnRVc2VyLnVpZClcclxuICAgIC5nZXQoKVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRiLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzTGlrZXNcIikuZG9jKGRhdGEuZG9jc1swXS5pZCkuZGVsZXRlKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKCkgPT4gbWVzc2FnZS5zdWNjZXNzKGAke2NoYXJhY3Rlck5hbWV9IHJlbW92ZWQgZnJvbSB5b3VyIGZhdm9yaXRlc2ApKVxyXG4gICAgLmNhdGNoKChlcnIpID0+IG1lc3NhZ2UuZXJyb3IoXCJUaGVyZSBoYXMgYmVlbiBhIHByb2JsZW1cIikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldENoYXJhY3RlcnNJblN0b3J5ID0gKGlkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKVxyXG4gICAgLmRvYyhpZClcclxuICAgIC5vblNuYXBzaG90KChkb2MpID0+IHtcclxuICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IHR5cGVzLkdFVF9TVE9SWV9DSEFSQUNURVJTLFxyXG4gICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgIHNlY29uZGFyeUNoYXJhY3RlcnM6IGRvYy5kYXRhKCkuc2Vjb25kYXJ5Q2hhcmFjdGVycyxcclxuICAgICAgICAgIG1haW5BcnI6IGRvYy5kYXRhKCkubWFpbkNoYXJhY3RlcnMsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzdWJtaXRDaGFyYXRlckZlZWRiYWNrID0gKGluZm8sIHVzZXJDb21tZW50KSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBjb25zdCB7IGNoYXJhY3Rlck5hbWUsIC4uLmFsbEluZm8gfSA9IGluZm87XHJcbiAgaWYgKCFhdXRoLmN1cnJlbnRVc2VyLmVtYWlsVmVyaWZpZWQpXHJcbiAgICByZXR1cm4gbWVzc2FnZS5lcnJvcihcIllvdSBuZWVkIHRvIHZlcmlmeSB5b3VyIGVtYWlsIGZpcnN0XCIpO1xyXG4gIGlmICghaW5mby5jb250ZW50KSByZXR1cm4gbWVzc2FnZS5lcnJvcihcIkNvbnRlbnQgbXVzdCBub3QgYmUgZW1wdHlcIik7XHJcbiAgaWYgKHVzZXJDb21tZW50KSByZXR1cm4gbWVzc2FnZS5lcnJvcihcIllvdSBoYXZlIGFscmVhZHkgc2VudCBmZWVkYmFja1wiKTtcclxuXHJcbiAgZGIuY29sbGVjdGlvbihcImNvbW1lbnRzXCIpXHJcbiAgICAuYWRkKHtcclxuICAgICAgLi4uaW5mbyxcclxuICAgICAgY3JlYXRlZEF0OiBmaXJlYmFzZS5maXJlc3RvcmUuRmllbGRWYWx1ZS5zZXJ2ZXJUaW1lc3RhbXAoKSxcclxuICAgIH0pXHJcbiAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiB0eXBlcy5TVUJNSVRfQ09NTUVOVCxcclxuICAgICAgICBtZXNzYWdlOiBcIkNvbW1lbnQgcG9zdGVkIHN1Y2Nlc3NmdWxseVwiLFxyXG4gICAgICB9KTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4gbWVzc2FnZS5lcnJvcihlcnIubWVzc2FnZSkpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldENoYXJhY3RlckNvbW1lbnRzID0gKGlkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBsZXQgY29tbWVudHMgPSBbXTtcclxuICBkYi5jb2xsZWN0aW9uKFwiY29tbWVudHNcIilcclxuICAgIC53aGVyZShcImNoYXJhY3RlcklkXCIsIFwiPT1cIiwgaWQpXHJcbiAgICAub3JkZXJCeShcImNyZWF0ZWRBdFwiLCBcImFzY1wiKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigoY29tbSkgPT4ge1xyXG4gICAgICBsZXQgdXNlclF1ZXJpZXMgPSBbXTtcclxuICAgICAgY29tbS5mb3JFYWNoKChjKSA9PiBjb21tZW50cy5wdXNoKHsgLi4uYy5kYXRhKCksIGlkOiBjLmlkIH0pKTtcclxuICAgICAgY29tbWVudHMuZm9yRWFjaCgoY29tbWVudCkgPT4ge1xyXG4gICAgICAgIHVzZXJRdWVyaWVzLnB1c2goZGIuY29sbGVjdGlvbihcInVzZXJzXCIpLmRvYyhjb21tZW50LnVzZXJJZCkuZ2V0KCkpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIFByb21pc2UuYWxsKHVzZXJRdWVyaWVzKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBjb21tZW50cyA9IGNvbW1lbnRzLm1hcCgoYykgPT4gKHtcclxuICAgICAgICAgIC4uLmMsXHJcbiAgICAgICAgICB1c2VySW1hZ2U6IHJlcy5maW5kKChkKSA9PiBkLmlkID09PSBjLnVzZXJJZCkuZGF0YSgpLmltYWdlLFxyXG4gICAgICAgIH0pKTtcclxuICAgICAgICBjb25zdCB1c2VyQ29tbWVudCA9IGF1dGguY3VycmVudFVzZXJcclxuICAgICAgICAgID8gY29tbWVudHMuZmluZCgoYykgPT4gYy51c2VySWQgPT09IGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gICAgICAgICAgOiBudWxsO1xyXG4gICAgICAgIGNvbW1lbnRzID0gYXV0aC5jdXJyZW50VXNlclxyXG4gICAgICAgICAgPyBjb21tZW50cy5maWx0ZXIoKGMpID0+IGMudXNlcklkICE9PSBhdXRoLmN1cnJlbnRVc2VyLnVpZClcclxuICAgICAgICAgIDogY29tbWVudHM7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogdHlwZXMuR0VUX0NPTU1FTlRTLFxyXG4gICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICBjb21tZW50cyxcclxuICAgICAgICAgICAgdXNlckNvbW1lbnQsXHJcbiAgICAgICAgICAgIGxvYWRpbmdDb21tZW50czogZmFsc2UsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlbGV0ZUNoYXJhY3RlckNvbW1lbnQgPSAoaWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJjb21tZW50c1wiKVxyXG4gICAgLmRvYyhpZClcclxuICAgIC5kZWxldGUoKVxyXG4gICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogdHlwZXMuU1VCTUlUX0NPTU1FTlQsXHJcbiAgICAgICAgbWVzc2FnZTogXCJDb21tZW50IGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmF0ZUNvbW1lbnQgPSAoY29tbWVudElkLCB0eXBlKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkaXNwYXRjaCh7IHR5cGU6IHR5cGVzLlJBVEVfQ09NTUVOVCwgcmF0ZWQ6IHRydWUgfSk7XHJcbiAgaWYgKCFhdXRoLmN1cnJlbnRVc2VyKVxyXG4gICAgcmV0dXJuIG1lc3NhZ2UuZXJyb3IoXCJZb3UgbmVlZCB0byBiZSBsb2dnZWQgaW4gdG8gcmF0ZSBhIGNvbW1lbnRcIik7XHJcbiAgZGIuY29sbGVjdGlvbihcImNvbW1lbnRzXCIpXHJcbiAgICAuZG9jKGNvbW1lbnRJZClcclxuICAgIC5nZXQoKVxyXG4gICAgLnRoZW4oKGRvYykgPT4ge1xyXG4gICAgICBjb25zdCBpc0xpa2VkID0gZG9jLmRhdGEoKS5saWtlZEJ5LmluY2x1ZGVzKGF1dGguY3VycmVudFVzZXIudWlkKTtcclxuICAgICAgY29uc3QgaXNEaXNsaWtlZCA9IGRvYy5kYXRhKCkuZGlzbGlrZWRCeS5pbmNsdWRlcyhhdXRoLmN1cnJlbnRVc2VyLnVpZCk7XHJcbiAgICAgIGlmICgodHlwZSA9PT0gXCJsaWtlXCIgJiYgaXNMaWtlZCkgfHwgKHR5cGUgPT09IFwiZGlzbGlrZVwiICYmIGlzRGlzbGlrZWQpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0eXBlID09PSBcImxpa2VcIikge1xyXG4gICAgICAgIGRiLmNvbGxlY3Rpb24oXCJjb21tZW50c1wiKVxyXG4gICAgICAgICAgLmRvYyhjb21tZW50SWQpXHJcbiAgICAgICAgICAudXBkYXRlKHtcclxuICAgICAgICAgICAgZGlzbGlrZWRCeTogaXNEaXNsaWtlZFxyXG4gICAgICAgICAgICAgID8gZG9jLmRhdGEoKS5kaXNsaWtlZEJ5LmZpbHRlcigoZCkgPT4gZCAhPT0gYXV0aC5jdXJyZW50VXNlci51aWQpXHJcbiAgICAgICAgICAgICAgOiBkb2MuZGF0YSgpLmRpc2xpa2VkQnksXHJcbiAgICAgICAgICAgIGxpa2VkQnk6IFsuLi5kb2MuZGF0YSgpLmxpa2VkQnksIGF1dGguY3VycmVudFVzZXIudWlkXSxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogdHlwZXMuU1VCTUlUX0NPTU1FTlQsIG1lc3NhZ2U6IFwiVm9pbG91XCIgfSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSBcImRpc2xpa2VcIikge1xyXG4gICAgICAgIGRiLmNvbGxlY3Rpb24oXCJjb21tZW50c1wiKVxyXG4gICAgICAgICAgLmRvYyhjb21tZW50SWQpXHJcbiAgICAgICAgICAudXBkYXRlKHtcclxuICAgICAgICAgICAgbGlrZWRCeTogaXNMaWtlZFxyXG4gICAgICAgICAgICAgID8gZG9jLmRhdGEoKS5saWtlZEJ5LmZpbHRlcigoZCkgPT4gZCAhPT0gYXV0aC5jdXJyZW50VXNlci51aWQpXHJcbiAgICAgICAgICAgICAgOiBkb2MuZGF0YSgpLmxpa2VkQnksXHJcbiAgICAgICAgICAgIGRpc2xpa2VkQnk6IFsuLi5kb2MuZGF0YSgpLmRpc2xpa2VkQnksIGF1dGguY3VycmVudFVzZXIudWlkXSxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogdHlwZXMuUkFURV9DT01NRU5ULCByYXRlZDogZmFsc2UgfSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q2hhcmFjdGVyc0Zyb21TZWFyY2ggPSAoc2VhcmNoKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBsZXQgcmVzdWx0ID0gW107XHJcbiAgZGlzcGF0Y2goeyB0eXBlOiB0eXBlcy5HRVRfQ0hBUkFDVEVSU19GUk9NX1NFQVJDSCwgbG9hZGluZzogdHJ1ZSB9KTtcclxuICBkYi5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc1wiKVxyXG4gICAgLndoZXJlKFwicHVibGljXCIsIFwiPT1cIiwgdHJ1ZSlcclxuICAgIC5nZXQoKVxyXG4gICAgLnRoZW4oKGRvY3MpID0+IHtcclxuICAgICAgZG9jcy5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgICAgICBjb25zdCBmaXJzdG5hbWUgPSBkb2MuZGF0YSgpLmZpcnN0bmFtZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGNvbnN0IGxhc3RuYW1lID0gZG9jLmRhdGEoKS5sYXN0bmFtZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGNvbnN0IGF1dGhvck5hbWUgPSBkb2MuZGF0YSgpLmF1dGhvck5hbWUudG9Mb3dlckNhc2UoKS5zcGxpdChcIiBcIik7XHJcbiAgICAgICAgY29uc3Qgc2VhcmNoVGVybSA9IHNlYXJjaC5zcGxpdChcIi1cIik7XHJcblxyXG4gICAgICAgIGNvbnN0IGZpcnN0bmFtZUluY2x1ZGVkID0gc2VhcmNoVGVybS5zb21lKFxyXG4gICAgICAgICAgKHdvcmQpID0+IGZpcnN0bmFtZS5pbmRleE9mKHdvcmQpICE9PSAtMVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgbGFzdG5hbWVJbmNsdWRlZCA9IHNlYXJjaFRlcm0uc29tZShcclxuICAgICAgICAgICh3b3JkKSA9PiBsYXN0bmFtZS5pbmRleE9mKHdvcmQpICE9PSAtMVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgYXV0aG9ySW5jbHVkZWQgPSBzZWFyY2hUZXJtLmV2ZXJ5KCh3b3JkKSA9PlxyXG4gICAgICAgICAgYXV0aG9yTmFtZS5pbmNsdWRlcyh3b3JkKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3Qgb3JBdXRob3JJbmNsdWRlZCA9IHNlYXJjaFRlcm0uc29tZShcclxuICAgICAgICAgICh3b3JkKSA9PiBkb2MuZGF0YSgpLmF1dGhvck5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKHdvcmQpICE9PSAtMVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgZmlyc3RuYW1lSW5jbHVkZWQgfHxcclxuICAgICAgICAgIGxhc3RuYW1lSW5jbHVkZWQgfHxcclxuICAgICAgICAgIGF1dGhvckluY2x1ZGVkIHx8XHJcbiAgICAgICAgICBvckF1dGhvckluY2x1ZGVkXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICByZXN1bHQucHVzaCh7IC4uLmRvYy5kYXRhKCksIGlkOiBkb2MuaWQgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgIH0pO1xyXG4gICAgfSlcclxuICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IHR5cGVzLkdFVF9DSEFSQUNURVJTX0ZST01fU0VBUkNILFxyXG4gICAgICAgIHBheWxvYWQ6IHJlc3VsdCxcclxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgfSk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IG1lc3NhZ2UuZXJyb3IoZXJyLm1lc3NhZ2UpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRQb3B1bGFyQ2hhcmFjdGVycyA9ICgpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzXCIpXHJcbiAgICAud2hlcmUoXCJwdWJsaWNcIiwgXCI9PVwiLCB0cnVlKVxyXG4gICAgLm9yZGVyQnkoXCJsaWtlc0NvdW50XCIsIFwiZGVzY1wiKVxyXG4gICAgLmxpbWl0KDEyKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigoZG9jcykgPT4ge1xyXG4gICAgICBsZXQgcmVzID0gW107XHJcbiAgICAgIGRvY3MuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICAgICAgcmVzID0gWy4uLnJlcywgeyAuLi5kb2MuZGF0YSgpLCBpZDogZG9jLmlkIH1dO1xyXG4gICAgICB9KTtcclxuICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IHR5cGVzLkdFVF9QT1BVTEFSX0NIQVJBQ1RFUlMsXHJcbiAgICAgICAgcGF5bG9hZDogcmVzLFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG4iLCJpbXBvcnQgeyB0eXBlcyB9IGZyb20gXCIuLi8uLi91dGlscy9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgZGIsIGF1dGgsIHN0b3JhZ2UgfSBmcm9tIFwiLi4vZmJDb25maWdcIjtcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcclxuaW1wb3J0IHsgbWVzc2FnZSB9IGZyb20gXCJhbnRkXCI7XHJcblxyXG4vLyBTVE9SSUVTXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RvcnkgPSAoaWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpXHJcbiAgICAuZG9jKGlkKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigoZG9jKSA9PiB7XHJcbiAgICAgIGlmIChkb2MuZXhpc3RzKSB7XHJcbiAgICAgICAgY29uc3QgbWFpbiA9IGRvYy5kYXRhKCkubWFpbkNoYXJhY3RlcnM7XHJcbiAgICAgICAgY29uc3Qgc2Vjb25kYXJ5ID0gZG9jLmRhdGEoKS5zZWNvbmRhcnlDaGFyYWN0ZXJzO1xyXG4gICAgICAgIGxldCBtYWluQXJyID0gW107XHJcbiAgICAgICAgbGV0IHNlY29uZGFyeUFyciA9IFtdO1xyXG4gICAgICAgIGNvbnN0IG1haW5RdWVyeSA9IG1haW4ubWFwKChjKSA9PlxyXG4gICAgICAgICAgZGIuY29sbGVjdGlvbihcImNoYXJhY3RlcnNcIikuZG9jKGMpLmdldCgpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBzZWNvbmRhcnlRdWVyeSA9IHNlY29uZGFyeS5tYXAoKGMpID0+XHJcbiAgICAgICAgICBkYi5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc1wiKS5kb2MoYy5pZCkuZ2V0KClcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IG1haW5SZXMgPSBQcm9taXNlLmFsbChtYWluUXVlcnkpO1xyXG4gICAgICAgIGNvbnN0IHNlY29uZGFyeVJlcyA9IFByb21pc2UuYWxsKHNlY29uZGFyeVF1ZXJ5KTtcclxuICAgICAgICBQcm9taXNlLmFsbChbbWFpblJlcywgc2Vjb25kYXJ5UmVzXSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICByZXN1bHRbMF0uZm9yRWFjaCgoZG9jdSkgPT4ge1xyXG4gICAgICAgICAgICBtYWluQXJyID0gWy4uLm1haW5BcnIsIHsgLi4uZG9jdS5kYXRhKCksIGlkOiBkb2N1LmlkIH1dO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICByZXN1bHRbMV0uZm9yRWFjaCgoZG9jdSkgPT4ge1xyXG4gICAgICAgICAgICBzZWNvbmRhcnlBcnIgPSBbLi4uc2Vjb25kYXJ5QXJyLCB7IC4uLmRvY3UuZGF0YSgpLCBpZDogZG9jdS5pZCB9XTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiB0eXBlcy5HRVRfU1RPUlksXHJcbiAgICAgICAgICAgIHN0b3J5RXhpc3RzOiB0cnVlLFxyXG4gICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgLi4uZG9jLmRhdGEoKSxcclxuICAgICAgICAgICAgICBpZDogZG9jLmlkLFxyXG4gICAgICAgICAgICAgIHNlY29uZGFyeUNoYXJhY3RlcnM6IHNlY29uZGFyeUFycixcclxuICAgICAgICAgICAgICBtYWluQ2hhcmFjdGVyczogbWFpbkFycixcclxuICAgICAgICAgICAgICBtYWluQXJyOiBkb2MuZGF0YSgpLm1haW5DaGFyYWN0ZXJzLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogdHlwZXMuRElTUEFUQ0hfRVJST1IsXHJcbiAgICAgICAgICBzdG9yeUV4aXN0czogZmFsc2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYWRkU3RvcnkgPSAoZGF0YSkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGlzcGF0Y2goeyB0eXBlOiB0eXBlcy5BRERfU1RPUlksIHBheWxvYWQ6IHsgbG9hZGluZzogdHJ1ZSB9IH0pO1xyXG4gIGxldCBzdG9yeUlkID0gXCJcIjtcclxuXHJcbiAgZGIuY29sbGVjdGlvbihcInN0b3JpZXNcIilcclxuICAgIC5hZGQoe1xyXG4gICAgICAuLi5kYXRhLFxyXG4gICAgICBhdXRob3JJZDogYXV0aC5jdXJyZW50VXNlci51aWQsXHJcbiAgICAgIGF1dGhvck5hbWU6IGRhdGEuYXV0aG9yTmFtZSxcclxuICAgICAgb25lU2hvdDogZmFsc2UsXHJcbiAgICAgIGJhbm5lcjogdHlwZW9mIGRhdGEuYmFubmVyID09PSBcInN0cmluZ1wiID8gZGF0YS5iYW5uZXIgOiBcIlwiLFxyXG4gICAgICBjcmVhdGVkQXQ6IGZpcmViYXNlLmZpcmVzdG9yZS5GaWVsZFZhbHVlLnNlcnZlclRpbWVzdGFtcCgpLFxyXG4gICAgICBsaWtlc0NvdW50OiAwLFxyXG4gICAgICBjaGFwdGVyc0NvdW50OiAwLFxyXG4gICAgICBzZWNvbmRhcnlDaGFyYWN0ZXJzOiBbXSxcclxuICAgICAgc2Vjb25kYXJ5QXJyOiBbXSxcclxuICAgICAgZmVhdHVyZWQ6IGZhbHNlLFxyXG4gICAgICBub3RlOiAwLFxyXG4gICAgICBjaGFwdGVyc0NvdW50OiAwLFxyXG4gICAgICBjb21tZW50c0NvdW50OiAwLFxyXG4gICAgICBsYXN0VXBkYXRlZDogZmlyZWJhc2UuZmlyZXN0b3JlLkZpZWxkVmFsdWUuc2VydmVyVGltZXN0YW1wKCksXHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBzdG9yeUlkID0gcmVzLmlkO1xyXG4gICAgICBpZiAodHlwZW9mIGRhdGEuYmFubmVyID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgY29uc3QgaW1hZ2VOYW1lID0gYCR7cmVzLmlkfV8ke2RhdGEudGl0bGVcclxuICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgICAuc3BsaXQoXCIgXCIpXHJcbiAgICAgICAgICAuam9pbihcIl9cIil9YDtcclxuICAgICAgICBzdG9yYWdlXHJcbiAgICAgICAgICAucmVmKGAke2F1dGguY3VycmVudFVzZXIudWlkfS8ke2ltYWdlTmFtZX1gKVxyXG4gICAgICAgICAgLnB1dChkYXRhLmJhbm5lcilcclxuICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHN0b3JhZ2VcclxuICAgICAgICAgICAgICAucmVmKGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gICAgICAgICAgICAgIC5jaGlsZChpbWFnZU5hbWUpXHJcbiAgICAgICAgICAgICAgLmdldERvd25sb2FkVVJMKCk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4oKHVybCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gZGJcclxuICAgICAgICAgICAgICAuY29sbGVjdGlvbihcInN0b3JpZXNcIilcclxuICAgICAgICAgICAgICAuZG9jKHN0b3J5SWQpXHJcbiAgICAgICAgICAgICAgLnVwZGF0ZSh7IGJhbm5lcjogdXJsIH0pO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgIHR5cGU6IHR5cGVzLkFERF9TVE9SWSxcclxuICAgICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIlN0b3J5IGFkZGVkIHN1Y2Nlc3NmdWxseVwiLFxyXG4gICAgICAgICAgICAgICAgc3RvcnlJZDogc3RvcnlJZCxcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogdHlwZXMuQUREX1NUT1JZLFxyXG4gICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIlN0b3J5IGFkZGVkIHN1Y2Nlc3NmdWxseVwiLFxyXG4gICAgICAgICAgICBzdG9yeUlkOiBzdG9yeUlkLFxyXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBtZXNzYWdlLmVycm9yKGVyci5tZXNzYWdlKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGVkaXRTdG9yeSA9IChkYXRhLCBzdG9yeUlkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkaXNwYXRjaCh7IHR5cGU6IHR5cGVzLkVESVRfU1RPUlksIHBheWxvYWQ6IHsgbG9hZGluZ1N0b3J5OiB0cnVlIH0gfSk7XHJcbiAgY29uc3QgaW1hZ2VOYW1lID0gZGF0YS50aXRsZS50b0xvd2VyQ2FzZSgpLnNwbGl0KFwiIFwiKS5qb2luKFwiX1wiKTtcclxuXHJcbiAgaWYgKHR5cGVvZiBkYXRhLmJhbm5lciA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgc3RvcmFnZVxyXG4gICAgICAucmVmKGAke2F1dGguY3VycmVudFVzZXIudWlkfS8ke2ltYWdlTmFtZX1gKVxyXG4gICAgICAucHV0KGRhdGEuYmFubmVyKVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHN0b3JhZ2VcclxuICAgICAgICAgIC5yZWYoYXV0aC5jdXJyZW50VXNlci51aWQpXHJcbiAgICAgICAgICAuY2hpbGQoaW1hZ2VOYW1lKVxyXG4gICAgICAgICAgLmdldERvd25sb2FkVVJMKCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKCh1cmwpID0+IHtcclxuICAgICAgICByZXR1cm4gZGJcclxuICAgICAgICAgIC5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKVxyXG4gICAgICAgICAgLmRvYyhzdG9yeUlkKVxyXG4gICAgICAgICAgLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgIC4uLmRhdGEsXHJcbiAgICAgICAgICAgIGJhbm5lcjogdXJsLFxyXG4gICAgICAgICAgICBsYXN0VXBkYXRlZDogZmlyZWJhc2UuZmlyZXN0b3JlLkZpZWxkVmFsdWUuc2VydmVyVGltZXN0YW1wKCksXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIGRiLmNvbGxlY3Rpb24oXCJsb2NhdGlvbnNcIilcclxuICAgICAgICAgIC53aGVyZShcInN0b3J5SWRcIiwgXCI9PVwiLCBzdG9yeUlkKVxyXG4gICAgICAgICAgLmdldCgpXHJcbiAgICAgICAgICAudGhlbigoZG9jcykgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbG9jYXRpb25RdWVyeSA9IFtdO1xyXG4gICAgICAgICAgICBkb2NzLmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgICAgICAgICAgIGxvY2F0aW9uUXVlcnkgPSBbXHJcbiAgICAgICAgICAgICAgICAuLi5sb2NhdGlvblF1ZXJ5LFxyXG4gICAgICAgICAgICAgICAgZGJcclxuICAgICAgICAgICAgICAgICAgLmNvbGxlY3Rpb24oXCJsb2NhdGlvbnNcIilcclxuICAgICAgICAgICAgICAgICAgLmRvYyhkb2MuaWQpXHJcbiAgICAgICAgICAgICAgICAgIC51cGRhdGUoeyBzdG9yeVRpdGxlOiBkYXRhLnRpdGxlIH0pLFxyXG4gICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBQcm9taXNlLmFsbChsb2NhdGlvblF1ZXJ5KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiB0eXBlcy5FRElUX1NUT1JZLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIlN0b3J5IGVkaXRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihlcnIubWVzc2FnZSk7XHJcbiAgICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKVxyXG4gICAgICAuZG9jKHN0b3J5SWQpXHJcbiAgICAgIC51cGRhdGUoe1xyXG4gICAgICAgIC4uLmRhdGEsXHJcbiAgICAgICAgbGFzdFVwZGF0ZWQ6IGZpcmViYXNlLmZpcmVzdG9yZS5GaWVsZFZhbHVlLnNlcnZlclRpbWVzdGFtcCgpLFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgZGIuY29sbGVjdGlvbihcImxvY2F0aW9uc1wiKVxyXG4gICAgICAgICAgLndoZXJlKFwic3RvcnlJZFwiLCBcIj09XCIsIHN0b3J5SWQpXHJcbiAgICAgICAgICAuZ2V0KClcclxuICAgICAgICAgIC50aGVuKChkb2NzKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBsb2NhdGlvblF1ZXJ5ID0gW107XHJcbiAgICAgICAgICAgIGRvY3MuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICAgICAgICAgICAgbG9jYXRpb25RdWVyeSA9IFtcclxuICAgICAgICAgICAgICAgIC4uLmxvY2F0aW9uUXVlcnksXHJcbiAgICAgICAgICAgICAgICBkYlxyXG4gICAgICAgICAgICAgICAgICAuY29sbGVjdGlvbihcImxvY2F0aW9uc1wiKVxyXG4gICAgICAgICAgICAgICAgICAuZG9jKGRvYy5pZClcclxuICAgICAgICAgICAgICAgICAgLnVwZGF0ZSh7IHN0b3J5VGl0bGU6IGRhdGEudGl0bGUgfSksXHJcbiAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFByb21pc2UuYWxsKGxvY2F0aW9uUXVlcnkpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IHR5cGVzLkVESVRfU1RPUlksXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiU3RvcnkgZWRpdGVkIHN1Y2Nlc3NmdWxseVwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBtZXNzYWdlLmVycm9yKGVyci5tZXNzYWdlKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlbGV0ZVN0b3J5ID0gKGlkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkaXNwYXRjaCh7IHR5cGU6IHR5cGVzLkRFTEVURV9TVE9SWSwgcGF5bG9hZDogeyBsb2FkaW5nOiB0cnVlIH0gfSk7XHJcbiAgZGIuY29sbGVjdGlvbihcInN0b3JpZXNcIilcclxuICAgIC5kb2MoaWQpXHJcbiAgICAuZGVsZXRlKClcclxuICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IHR5cGVzLkRFTEVURV9TVE9SWSxcclxuICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICBtZXNzYWdlOiBcIlN0b3J5IGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgZGVsZXRlZDogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFVzZXJTdG9yaWVzID0gKGlkLCB0eXBlKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBjb25zdCB1c2VySWQgPSBpZCA/IGlkIDogYXV0aC5jdXJyZW50VXNlci51aWQ7XHJcbiAgZGIuY29sbGVjdGlvbihcInN0b3JpZXNcIilcclxuICAgIC53aGVyZShcImF1dGhvcklkXCIsIFwiPT1cIiwgdXNlcklkKVxyXG4gICAgLm9yZGVyQnkoXCJjcmVhdGVkQXRcIiwgXCJkZXNjXCIpXHJcbiAgICAuZ2V0KClcclxuICAgIC50aGVuKChkb2NzKSA9PiB7XHJcbiAgICAgIGxldCBpdGVtcyA9IFtdO1xyXG4gICAgICBkb2NzLmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgICAgIGl0ZW1zID0gWy4uLml0ZW1zLCB7IGlkOiBkb2MuaWQsIC4uLmRvYy5kYXRhKCkgfV0uZmlsdGVyKChzKSA9PlxyXG4gICAgICAgICAgaWQgPyBzLnB1YmxpYyA6IHNcclxuICAgICAgICApO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGl0ZW1zO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChpdGVtcykgPT4ge1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IHR5cGVzLkdFVF9VU0VSX1NUT1JJRVMsIHBheWxvYWQ6IGl0ZW1zIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0RmF2b3JpdGVTdG9yaWVzID0gKGlkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBjb25zdCB1c2VySWQgPSBpZCA/IGlkIDogYXV0aC5jdXJyZW50VXNlci51aWQ7XHJcbiAgZGIuY29sbGVjdGlvbihcInN0b3JpZXNMaWtlc1wiKVxyXG4gICAgLndoZXJlKFwic2VuZGVySWRcIiwgXCI9PVwiLCB1c2VySWQpXHJcbiAgICAub3JkZXJCeShcImNyZWF0ZWRBdFwiLCBcImRlc2NcIilcclxuICAgIC5nZXQoKVxyXG4gICAgLnRoZW4oKGRvY3MpID0+IHtcclxuICAgICAgbGV0IGZhdkFyciA9IFtdO1xyXG4gICAgICBkb2NzLmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgICAgIGZhdkFyciA9IFsuLi5mYXZBcnIsIGRvYy5kYXRhKCkuc3RvcnlJZF07XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gZmF2QXJyO1xyXG4gICAgfSlcclxuICAgIC50aGVuKCh1c2VycykgPT4ge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSB1c2Vycy5tYXAoKHVzZXIpID0+XHJcbiAgICAgICAgZGIuY29sbGVjdGlvbihcInN0b3JpZXNcIikuZG9jKHVzZXIpLmdldCgpXHJcbiAgICAgICk7XHJcbiAgICAgIFByb21pc2UuYWxsKHJlc3VsdCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgbGV0IGZhdlVzZXJzID0gW107XHJcbiAgICAgICAgcmVzLmZvckVhY2goXHJcbiAgICAgICAgICAoZG9jKSA9PiAoZmF2VXNlcnMgPSBbLi4uZmF2VXNlcnMsIHsgaWQ6IGRvYy5pZCwgLi4uZG9jLmRhdGEoKSB9XSlcclxuICAgICAgICApO1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IHR5cGVzLkdFVF9GQVZPUklURV9TVE9SSUVTLFxyXG4gICAgICAgICAgcGF5bG9hZDogZmF2VXNlcnMsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgaXNTdG9yeUZhdm9yaXRlID0gKHN0b3J5SWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGlmIChhdXRoLmN1cnJlbnRVc2VyKSB7XHJcbiAgICBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc0xpa2VzXCIpXHJcbiAgICAgIC53aGVyZShcInNlbmRlcklkXCIsIFwiPT1cIiwgYXV0aC5jdXJyZW50VXNlci51aWQpXHJcbiAgICAgIC53aGVyZShcInN0b3J5SWRcIiwgXCI9PVwiLCBzdG9yeUlkKVxyXG4gICAgICAub25TbmFwc2hvdCgoc25hcHNob3QpID0+IHtcclxuICAgICAgICBjb25zdCBhbnN3ZXIgPSBzbmFwc2hvdC5kb2NzWzBdID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgIHJldHVybiBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiB0eXBlcy5JU19TVE9SWV9GQVZPUklURSxcclxuICAgICAgICAgIHBheWxvYWQ6IGFuc3dlcixcclxuICAgICAgICAgIGxvYWRpbmdGYXY6IGZhbHNlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogdHlwZXMuSVNfU1RPUllfRkFWT1JJVEUsXHJcbiAgICAgIHBheWxvYWQ6IGZhbHNlLFxyXG4gICAgICBsb2FkaW5nRmF2OiBmYWxzZSxcclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRTdG9yeVRvRmF2b3JpdGUgPSAoaWQsIHVzZXJuYW1lLCBzdG9yeVRpdGxlLCBhdXRob3JJZCkgPT4gKFxyXG4gIGRpc3BhdGNoXHJcbikgPT4ge1xyXG4gIC8vIGlmIChpc0Zhdm9yaXRlKSByZXR1cm4gbWVzc2FnZS53YXJuaW5nKFwiWW91J3ZlIGFscmVhZHkgbGlrZWQgdGhpcyBzdG9yeVwiKTtcclxuICBpZiAoIWF1dGguY3VycmVudFVzZXIpXHJcbiAgICByZXR1cm4gbWVzc2FnZS5lcnJvcihcIllvdSBuZWVkIHRvIGJlIGxvZ2dlZCBpbiB0byBsaWtlIGEgc3RvcnlcIik7XHJcbiAgaWYgKCFhdXRoLmN1cnJlbnRVc2VyLmVtYWlsVmVyaWZpZWQpXHJcbiAgICByZXR1cm4gbWVzc2FnZS5lcnJvcihcIllvdSBuZWVkIHRvIHZlcmlmeSB5b3VyIGVtYWlsIGZpcnN0XCIpO1xyXG5cclxuICByZXR1cm4gZGJcclxuICAgIC5jb2xsZWN0aW9uKFwic3Rvcmllc0xpa2VzXCIpXHJcbiAgICAuYWRkKHtcclxuICAgICAgc2VuZGVyOiB1c2VybmFtZSxcclxuICAgICAgc2VuZGVySWQ6IGF1dGguY3VycmVudFVzZXIudWlkLFxyXG4gICAgICBzdG9yeUlkOiBpZCxcclxuICAgICAgY3JlYXRlZEF0OiBmaXJlYmFzZS5maXJlc3RvcmUuRmllbGRWYWx1ZS5zZXJ2ZXJUaW1lc3RhbXAoKSxcclxuICAgIH0pXHJcbiAgICAudGhlbigoKSA9PiBtZXNzYWdlLnN1Y2Nlc3MoYCR7c3RvcnlUaXRsZX0gYWRkZWQgdG8geW91ciBmYXZvcml0ZXNgKSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiBtZXNzYWdlLmVycm9yKGVyci5tZXNzYWdlKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlU3RvcnlGcm9tRmF2b3JpdGUgPSAoaWQsIHN0b3J5VGl0bGUpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzTGlrZXNcIilcclxuICAgIC53aGVyZShcInN0b3J5SWRcIiwgXCI9PVwiLCBpZClcclxuICAgIC53aGVyZShcInNlbmRlcklkXCIsIFwiPT1cIiwgYXV0aC5jdXJyZW50VXNlci51aWQpXHJcbiAgICAuZ2V0KClcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc0xpa2VzXCIpLmRvYyhkYXRhLmRvY3NbMF0uaWQpLmRlbGV0ZSgpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKCgpID0+IG1lc3NhZ2Uuc3VjY2VzcyhgJHtzdG9yeVRpdGxlfSByZW1vdmVkIGZyb20geW91ciBmYXZvcml0ZXNgKSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiBtZXNzYWdlLmVycm9yKFwiVGhlcmUgaGFzIGJlZW4gYSBwcm9ibGVtXCIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdG9yeUNoYXJhY3RlcnMgPSAoKSA9PiAoZGlzcGF0Y2gpID0+IHt9O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEhvbWVTdG9yaWVzID0gKCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgbGV0IHJlc3VsdCA9IFtdO1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpXHJcbiAgICAud2hlcmUoXCJwdWJsaWNcIiwgXCI9PVwiLCB0cnVlKVxyXG4gICAgLm9yZGVyQnkoXCJub3RlXCIsIFwiZGVzY1wiKVxyXG4gICAgLmxpbWl0KDQpXHJcbiAgICAuZ2V0KClcclxuICAgIC50aGVuKChkb2NzKSA9PiB7XHJcbiAgICAgIGRvY3MuZm9yRWFjaCgoZG9jKSA9PiByZXN1bHQucHVzaCh7IGlkOiBkb2MuaWQsIC4uLmRvYy5kYXRhKCkgfSkpO1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogdHlwZXMuR0VUX0hPTUVfU1RPUklFUyxcclxuICAgICAgICBwYXlsb2FkOiByZXN1bHQsXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0RmVhdHVyZWRTdG9yaWVzID0gKCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGIuY29sbGVjdGlvbihcInN0b3JpZXNcIilcclxuICAgIC53aGVyZShcInB1YmxpY1wiLCBcIj09XCIsIHRydWUpXHJcbiAgICAud2hlcmUoXCJmZWF0dXJlZFwiLCBcIj09XCIsIHRydWUpXHJcbiAgICAubGltaXQoMTApXHJcbiAgICAuZ2V0KClcclxuICAgIC50aGVuKChkb2NzKSA9PiB7XHJcbiAgICAgIGxldCByZXN1bHQgPSBbXTtcclxuICAgICAgZG9jcy5mb3JFYWNoKChkb2MpID0+IHJlc3VsdC5wdXNoKHsgaWQ6IGRvYy5pZCwgLi4uZG9jLmRhdGEoKSB9KSk7XHJcbiAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiB0eXBlcy5HRVRfRkVBVFVSRURfU1RPUklFUyxcclxuICAgICAgICBwYXlsb2FkOiByZXN1bHQsXHJcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3Rvcmllc0J5TGV0dGVyID0gKGxldHRlciwgYWxwaGFiZXQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRpc3BhdGNoKHsgdHlwZTogdHlwZXMuR0VUX1NUT1JJRVNfRlJPTV9TRUFSQ0gsIGxvYWRpbmc6IHRydWUgfSk7XHJcblxyXG4gIGNvbnN0IGVuZCA9IGFscGhhYmV0LmZpbmRJbmRleCgoYSkgPT4gYSA9PT0gbGV0dGVyKTtcclxuICBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKVxyXG4gICAgLndoZXJlKFwicHVibGljXCIsIFwiPT1cIiwgdHJ1ZSlcclxuICAgIC5vcmRlckJ5KFwidGl0bGVcIiwgXCJhc2NcIilcclxuICAgIC5zdGFydEF0KGxldHRlci50b1VwcGVyQ2FzZSgpKVxyXG4gICAgLmVuZEF0KGxldHRlciA9PT0gXCJ6XCIgPyBcIlpcIiA6IGFscGhhYmV0W2VuZCArIDFdLnRvVXBwZXJDYXNlKCkpXHJcbiAgICAuZ2V0KClcclxuICAgIC50aGVuKChkb2NzKSA9PiB7XHJcbiAgICAgIGxldCByZXN1bHQgPSBbXTtcclxuICAgICAgZG9jcy5mb3JFYWNoKChkb2MpID0+IHJlc3VsdC5wdXNoKHsgLi4uZG9jLmRhdGEoKSwgaWQ6IGRvYy5pZCB9KSk7XHJcbiAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiB0eXBlcy5HRVRfU1RPUklFU19GUk9NX1NFQVJDSCxcclxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICBwYXlsb2FkOiByZXN1bHQsXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3Rvcmllc0J5Q2F0ZWdvcnkgPSAoY2F0KSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKVxyXG4gICAgLndoZXJlKFwicHVibGljXCIsIFwiPT1cIiwgdHJ1ZSlcclxuICAgIC53aGVyZShcImNhdGVnb3JpZXNcIiwgXCJhcnJheS1jb250YWluc1wiLCBjYXQpXHJcbiAgICAuZ2V0KClcclxuICAgIC50aGVuKChkb2NzKSA9PiB7XHJcbiAgICAgIGxldCByZXN1bHQgPSBbXTtcclxuICAgICAgZG9jcy5mb3JFYWNoKChkb2MpID0+IHJlc3VsdC5wdXNoKHsgLi4uZG9jLmRhdGEoKSwgaWQ6IGRvYy5pZCB9KSk7XHJcbiAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiB0eXBlcy5HRVRfU1RPUklFU19GUk9NX1NFQVJDSCxcclxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICBwYXlsb2FkOiByZXN1bHQsXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG4vLyBDSEFQVEVSc1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZENoYXB0ZXIgPSAoZGF0YSkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGlzcGF0Y2goeyB0eXBlOiB0eXBlcy5BRERfQ0hBUFRFUiwgcGF5bG9hZDogeyBsb2FkaW5nOiB0cnVlIH0gfSk7XHJcblxyXG4gIGRiLmNvbGxlY3Rpb24oXCJjaGFwdGVyc1wiKVxyXG4gICAgLndoZXJlKFwic3RvcnlJZFwiLCBcIj09XCIsIGRhdGEuc3RvcnlJZClcclxuICAgIC5nZXQoKVxyXG4gICAgLnRoZW4oKGRvY3MpID0+IHtcclxuICAgICAgbGV0IG51bWJlclVzZWQgPSBbXTtcclxuICAgICAgZG9jcy5mb3JFYWNoKChjaGFwdGVyKSA9PiB7XHJcbiAgICAgICAgbnVtYmVyVXNlZC5wdXNoKGNoYXB0ZXIuZGF0YSgpLm51bWJlcik7XHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAobnVtYmVyVXNlZC5pbmNsdWRlcyhkYXRhLm51bWJlcikpIHtcclxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IHR5cGVzLkFERF9DSEFQVEVSLCBwYXlsb2FkOiB7IGxvYWRpbmc6IGZhbHNlIH0gfSk7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihgWW91IGFscmVhZHkgaGF2ZSBhIGNoYXB0ZXIgbnVtYmVyZWQ6ICR7ZGF0YS5udW1iZXJ9YCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGRiXHJcbiAgICAgICAgICAuY29sbGVjdGlvbihcImNoYXB0ZXJzXCIpXHJcbiAgICAgICAgICAuYWRkKHtcclxuICAgICAgICAgICAgLi4uZGF0YSxcclxuICAgICAgICAgICAgYXV0aG9ySWQ6IGF1dGguY3VycmVudFVzZXIudWlkLFxyXG4gICAgICAgICAgICBjb21tZW50c0NvdW50OiAwLFxyXG4gICAgICAgICAgICBub3RlOiAwLFxyXG4gICAgICAgICAgICB2b3RlcnM6IFtdLFxyXG4gICAgICAgICAgICB2b3Rlc0NvdW50OiAwLFxyXG4gICAgICAgICAgICBjcmVhdGVkQXQ6IGZpcmViYXNlLmZpcmVzdG9yZS5GaWVsZFZhbHVlLnNlcnZlclRpbWVzdGFtcCgpLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgIHR5cGU6IHR5cGVzLkFERF9DSEFQVEVSLFxyXG4gICAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiQ2hhcHRlciBhZGRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgICAgICAgIGNoYXBJZDogcmVzLmlkLFxyXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZWRpdENoYXB0ZXIgPSAoZGF0YSwgY2hhcGlkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkaXNwYXRjaCh7IHR5cGU6IHR5cGVzLkVESVRfQ0hBUFRFUiwgcGF5bG9hZDogeyBsb2FkaW5nOiB0cnVlIH0gfSk7XHJcbiAgZGIuY29sbGVjdGlvbihcImNoYXB0ZXJzXCIpXHJcbiAgICAuZG9jKGNoYXBpZClcclxuICAgIC51cGRhdGUoeyAuLi5kYXRhIH0pXHJcbiAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiB0eXBlcy5FRElUX0NIQVBURVIsXHJcbiAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgbWVzc2FnZTogXCJDaGFwdGVyIGVkaXRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlQ2hhcHRlciA9IChpZCwgc3RvcnlJZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGlzcGF0Y2goeyB0eXBlOiB0eXBlcy5ERUxFVEVfQ0hBUFRFUiwgcGF5bG9hZDogeyBsb2FkaW5nQ2hhcHRlcjogdHJ1ZSB9IH0pO1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJjaGFwdGVyc1wiKVxyXG4gICAgLmRvYyhpZClcclxuICAgIC5kZWxldGUoKVxyXG4gICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogdHlwZXMuREVMRVRFX0NIQVBURVIsXHJcbiAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgbWVzc2FnZTogXCJDaGFwdGVyIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICBsb2FkaW5nQ2hhcHRlcjogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldENoYXB0ZXIgPSAoc3RvcnlJZCwgaWQsIHR5cGUpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpXHJcbiAgICAuZG9jKHN0b3J5SWQpXHJcbiAgICAuZ2V0KClcclxuICAgIC50aGVuKChkb2MpID0+IHtcclxuICAgICAgaWYgKGRvYy5leGlzdHMpIHtcclxuICAgICAgICBkYi5jb2xsZWN0aW9uKFwiY2hhcHRlcnNcIilcclxuICAgICAgICAgIC5kb2MoaWQpXHJcbiAgICAgICAgICAuZ2V0KClcclxuICAgICAgICAgIC50aGVuKChjaGFwKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjaGFwLmV4aXN0cykge1xyXG4gICAgICAgICAgICAgIGlmICh0eXBlID09PSBcInNob3dcIikge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNoYXJhY3RlcnMgPSBbXTtcclxuICAgICAgICAgICAgICAgIGxldCBsb2NhdGlvbnMgPSBbXTtcclxuICAgICAgICAgICAgICAgIGxldCBjaGFyYVF1ZXJ5ID0gW107XHJcbiAgICAgICAgICAgICAgICBsZXQgbG9jUXVlcnkgPSBbXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNoYXJhY3RlcnNJbkNoYXBlciA9IGNoYXAuZGF0YSgpLmNoYXJhY3RlcnM7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhdGlvbnNJbkNoYXBlciA9IGNoYXAuZGF0YSgpLmxvY2F0aW9ucztcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNoYXBOdW1iZXIgPSBjaGFwLmRhdGEoKS5udW1iZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJldkNoYXAgPSBkYlxyXG4gICAgICAgICAgICAgICAgICAuY29sbGVjdGlvbihcImNoYXB0ZXJzXCIpXHJcbiAgICAgICAgICAgICAgICAgIC53aGVyZShcInN0b3J5SWRcIiwgXCI9PVwiLCBzdG9yeUlkKVxyXG4gICAgICAgICAgICAgICAgICAud2hlcmUoXCJudW1iZXJcIiwgXCI9PVwiLCBjaGFwTnVtYmVyIC0gMSlcclxuICAgICAgICAgICAgICAgICAgLmdldCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV4dENoYXAgPSBkYlxyXG4gICAgICAgICAgICAgICAgICAuY29sbGVjdGlvbihcImNoYXB0ZXJzXCIpXHJcbiAgICAgICAgICAgICAgICAgIC53aGVyZShcInN0b3J5SWRcIiwgXCI9PVwiLCBzdG9yeUlkKVxyXG4gICAgICAgICAgICAgICAgICAud2hlcmUoXCJudW1iZXJcIiwgXCI9PVwiLCBjaGFwTnVtYmVyICsgMSlcclxuICAgICAgICAgICAgICAgICAgLmdldCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNoYXJhY3RlcnNJbkNoYXBlci5mb3JFYWNoKChjaGFyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNoYXJhUXVlcnkucHVzaChkYi5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc1wiKS5kb2MoY2hhcikuZ2V0KCkpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbnNJbkNoYXBlci5mb3JFYWNoKChsb2MpID0+IHtcclxuICAgICAgICAgICAgICAgICAgbG9jUXVlcnkucHVzaChkYi5jb2xsZWN0aW9uKFwibG9jYXRpb25zXCIpLmRvYyhsb2MpLmdldCgpKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgY2hhcmFRdWVyeSA9IFByb21pc2UuYWxsKGNoYXJhUXVlcnkpO1xyXG4gICAgICAgICAgICAgICAgbG9jUXVlcnkgPSBQcm9taXNlLmFsbChsb2NRdWVyeSk7XHJcbiAgICAgICAgICAgICAgICBQcm9taXNlLmFsbChbY2hhcmFRdWVyeSwgbG9jUXVlcnksIHByZXZDaGFwLCBuZXh0Q2hhcF0pLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAgIChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcHJldiA9IHJlc1syXS5kb2NzWzBdID8gcmVzWzJdLmRvY3NbMF0uaWQgOiBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXh0ID0gcmVzWzNdLmRvY3NbMF0gPyByZXNbM10uZG9jc1swXS5pZCA6IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzWzBdLmZvckVhY2goKGMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGNoYXJhY3RlcnMucHVzaCh7IC4uLmMuZGF0YSgpLCBpZDogYy5pZCB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICByZXNbMV0uZm9yRWFjaCgobCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25zLnB1c2goeyAuLi5sLmRhdGEoKSwgaWQ6IGwuaWQgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogdHlwZXMuR0VUX0NIQVBURVIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYXB0ZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5jaGFwLmRhdGEoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogY2hhcC5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5leHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJhY3RlcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHVibGljOiBkb2MuZGF0YSgpLnB1YmxpYyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9yeVRpdGxlOiBkb2MuZGF0YSgpLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGU6IGRvYy5kYXRhKCkubm90ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhcHRlckV4aXN0czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgICAgdHlwZTogdHlwZXMuR0VUX0NIQVBURVIsXHJcbiAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBjaGFwdGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAuLi5jaGFwLmRhdGEoKSxcclxuICAgICAgICAgICAgICAgICAgICAgIGlkOiBjaGFwLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgcHVibGljOiBkb2MuZGF0YSgpLnB1YmxpYyxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGNoYXB0ZXJFeGlzdHM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogdHlwZXMuR0VUX0NIQVBURVIsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiB7IGNoYXB0ZXJFeGlzdHM6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IHR5cGVzLkdFVF9DSEFQVEVSLFxyXG4gICAgICAgICAgcGF5bG9hZDogeyBjaGFwdGVyRXhpc3RzOiBmYWxzZSB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDaGFwdGVycyA9IChpZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGIuY29sbGVjdGlvbihcImNoYXB0ZXJzXCIpXHJcbiAgICAud2hlcmUoXCJzdG9yeUlkXCIsIFwiPT1cIiwgaWQpXHJcbiAgICAub3JkZXJCeShcIm51bWJlclwiLCBcImFzY1wiKVxyXG4gICAgLm9uU25hcHNob3QoKGRvY3MpID0+IHtcclxuICAgICAgbGV0IGFyciA9IFtdO1xyXG4gICAgICBkb2NzLmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgICAgIGFyci5wdXNoKHtcclxuICAgICAgICAgIGF1dGhvcklkOiBkb2MuZGF0YSgpLmF1dGhvcklkLFxyXG4gICAgICAgICAgaWQ6IGRvYy5pZCxcclxuICAgICAgICAgIGNyZWF0ZWRBdDogZG9jLmRhdGEoKS5jcmVhdGVkQXQsXHJcbiAgICAgICAgICBudW1iZXI6IGRvYy5kYXRhKCkubnVtYmVyLFxyXG4gICAgICAgICAgdGl0bGU6IGRvYy5kYXRhKCkudGl0bGUsXHJcbiAgICAgICAgICBjb21tZW50c0NvdW50OiBkb2MuZGF0YSgpLmNvbW1lbnRzQ291bnQsXHJcbiAgICAgICAgICBzdGF0dXM6IGRvYy5kYXRhKCkuc3RhdHVzLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IHR5cGVzLkdFVF9DSEFQVEVSUyxcclxuICAgICAgICBwYXlsb2FkOiBhcnIsXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG4vLyBMT0NBVElPTlNcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRMb2NhdGlvbiA9IChkYXRhKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkaXNwYXRjaCh7IHR5cGU6IHR5cGVzLkFERF9MT0NBVElPTiwgcGF5bG9hZDogeyBsb2FkaW5nTG9jOiB0cnVlIH0gfSk7XHJcbiAgbGV0IGxvY0lkID0gXCJcIjtcclxuXHJcbiAgZGIuY29sbGVjdGlvbihcImxvY2F0aW9uc1wiKVxyXG4gICAgLmFkZCh7XHJcbiAgICAgIC4uLmRhdGEsXHJcbiAgICAgIGltYWdlOiB0eXBlb2YgZGF0YS5pbWFnZSA9PT0gXCJzdHJpbmdcIiA/IGRhdGEuaW1hZ2UgOiBcIlwiLFxyXG4gICAgICBjcmVhdGVkQXQ6IGZpcmViYXNlLmZpcmVzdG9yZS5GaWVsZFZhbHVlLnNlcnZlclRpbWVzdGFtcCgpLFxyXG4gICAgfSlcclxuICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgbG9jSWQgPSByZXMuaWQ7XHJcbiAgICAgIGlmICh0eXBlb2YgZGF0YS5pbWFnZSA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgIGNvbnN0IGltYWdlTmFtZSA9IGAke2xvY0lkfV8ke2RhdGEubmFtZVxyXG4gICAgICAgICAgLnRvTG93ZXJDYXNlKClcclxuICAgICAgICAgIC5zcGxpdChcIiBcIilcclxuICAgICAgICAgIC5qb2luKFwiX1wiKX1gO1xyXG4gICAgICAgIHN0b3JhZ2VcclxuICAgICAgICAgIC5yZWYoYCR7YXV0aC5jdXJyZW50VXNlci51aWR9LyR7aW1hZ2VOYW1lfWApXHJcbiAgICAgICAgICAucHV0KGRhdGEuaW1hZ2UpXHJcbiAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdG9yYWdlXHJcbiAgICAgICAgICAgICAgLnJlZihhdXRoLmN1cnJlbnRVc2VyLnVpZClcclxuICAgICAgICAgICAgICAuY2hpbGQoaW1hZ2VOYW1lKVxyXG4gICAgICAgICAgICAgIC5nZXREb3dubG9hZFVSTCgpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKCh1cmwpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGRiLmNvbGxlY3Rpb24oXCJsb2NhdGlvbnNcIikuZG9jKGxvY0lkKS51cGRhdGUoeyBpbWFnZTogdXJsIH0pO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgIHR5cGU6IHR5cGVzLkFERF9MT0NBVElPTixcclxuICAgICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkxvY2F0aW9uIGFkZGVkIHN1Y2Nlc3NmdWxseVwiLFxyXG4gICAgICAgICAgICAgICAgbG9jSWQ6IHJlcy5pZCxcclxuICAgICAgICAgICAgICAgIGxvYWRpbmdMb2M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogdHlwZXMuQUREX0xPQ0FUSU9OLFxyXG4gICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkxvY2F0aW9uIGFkZGVkIHN1Y2Nlc3NmdWxseVwiLFxyXG4gICAgICAgICAgICBsb2NJZDogcmVzLmlkLFxyXG4gICAgICAgICAgICBsb2FkaW5nTG9jOiBmYWxzZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBtZXNzYWdlLmVycm9yKGVyci5tZXNzYWdlKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGVkaXRMb2NhdGlvbiA9IChkYXRhKSA9PiAoZGlzcGF0Y2gpID0+IHt9O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldExvY2F0aW9uID0gKGlkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkYi5jb2xsZWN0aW9uKFwibG9jYXRpb25zXCIpXHJcbiAgICAuZG9jKGlkKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigoZG9jKSA9PiB7XHJcbiAgICAgIGlmIChkb2MuZXhpc3RzKSB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogdHlwZXMuR0VUX0xPQ0FUSU9OLFxyXG4gICAgICAgICAgcGF5bG9hZDogeyAuLi5kb2MuZGF0YSgpLCBpZDogZG9jLmlkIH0sXHJcbiAgICAgICAgICBsb2NhdGlvbkV4aXN0czogdHJ1ZSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiB0eXBlcy5HRVRfTE9DQVRJT04sXHJcbiAgICAgICAgICBsb2NhdGlvbkV4aXN0czogZmFsc2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlbGV0ZUxvY2F0aW9uID0gKGlkLCBuYW1lKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkaXNwYXRjaCh7IHR5cGU6IHR5cGVzLkRFTEVURV9DSEFQVEVSLCBwYXlsb2FkOiB7IGxvYWRpbmc6IHRydWUgfSB9KTtcclxuICBjb25zdCBiYXRjaCA9IGRiLmJhdGNoKCk7XHJcbiAgY29uc3QgaW1hZ2VOYW1lID0gYCR7aWR9XyR7bmFtZS50b0xvd2VyQ2FzZSgpLnNwbGl0KFwiIFwiKS5qb2luKFwiX1wiKX1gO1xyXG5cclxuICBiYXRjaC5kZWxldGUoZGIuY29sbGVjdGlvbihcImxvY2F0aW9uc1wiKS5kb2MoaWQpKTtcclxuICBkYi5jb2xsZWN0aW9uKFwiY2hhcHRlcnNcIilcclxuICAgIC53aGVyZShcImxvY2F0aW9uc1wiLCBcImFycmF5LWNvbnRhaW5zXCIsIGlkKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIHJlcy5mb3JFYWNoKChjaGFwKSA9PlxyXG4gICAgICAgIGJhdGNoLnVwZGF0ZShkYi5jb2xsZWN0aW9uKFwiY2hhcHRlcnNcIikuZG9jKGNoYXAuaWQpLCB7XHJcbiAgICAgICAgICBsb2NhdGlvbnM6IGNoYXAuZGF0YSgpLmxvY2F0aW9ucy5maWx0ZXIoKGMpID0+IGMgIT09IGlkKSxcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG5cclxuICAgICAgc3RvcmFnZVxyXG4gICAgICAgIC5yZWYoYCR7YXV0aC5jdXJyZW50VXNlci51aWR9LyR7aW1hZ2VOYW1lfWApXHJcbiAgICAgICAgLmRlbGV0ZSgpXHJcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgYmF0Y2guY29tbWl0KCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICB0eXBlOiB0eXBlcy5ERUxFVEVfQ0hBUFRFUixcclxuICAgICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiTG9jYXRpb24gZGVsZXRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgICAgICAgIGRlbGV0ZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgYmF0Y2guY29tbWl0KCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICB0eXBlOiB0eXBlcy5ERUxFVEVfQ0hBUFRFUixcclxuICAgICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiTG9jYXRpb24gZGVsZXRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgICAgICAgIGRlbGV0ZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VXNlckxvY2F0aW9ucyA9IChpZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgY29uc3QgdXNlcklkID0gaWQgPyBpZCA6IGF1dGguY3VycmVudFVzZXIudWlkO1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJsb2NhdGlvbnNcIilcclxuICAgIC53aGVyZShcImF1dGhvcklkXCIsIFwiPT1cIiwgdXNlcklkKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigoZG9jcykgPT4ge1xyXG4gICAgICBsZXQgbG9jYXRpb25zID0gW107XHJcbiAgICAgIGRvY3MuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICAgICAgbG9jYXRpb25zID0gWy4uLmxvY2F0aW9ucywgeyBpZDogZG9jLmlkLCAuLi5kb2MuZGF0YSgpIH1dO1xyXG4gICAgICB9KTtcclxuICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IHR5cGVzLkdFVF9VU0VSX0xPQ0FUSU9OUyxcclxuICAgICAgICBwYXlsb2FkOiBsb2NhdGlvbnMsXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RvcnlMb2NhdGlvbnMgPSAoc3RvcnlJZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGIuY29sbGVjdGlvbihcImxvY2F0aW9uc1wiKVxyXG4gICAgLndoZXJlKFwic3RvcnlJZFwiLCBcIj09XCIsIHN0b3J5SWQpXHJcbiAgICAuZ2V0KClcclxuICAgIC50aGVuKChkb2NzKSA9PiB7XHJcbiAgICAgIGNvbnN0IGxvY2F0aW9ucyA9IGRvY3MuZG9jcy5tYXAoKGRvYykgPT4gKHsgLi4uZG9jLmRhdGEoKSwgaWQ6IGRvYy5pZCB9KSk7XHJcbiAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiB0eXBlcy5HRVRfU1RPUllfTE9DQVRJT05TLFxyXG4gICAgICAgIHBheWxvYWQ6IGxvY2F0aW9ucyxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbi8vIENPTU1FTlRTXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q29tbWVudHMgPSAoaWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJjb21tZW50c1wiKVxyXG4gICAgLndoZXJlKFwiY2hhcHRlcklkXCIsIFwiPT1cIiwgaWQpXHJcbiAgICAub3JkZXJCeShcImNyZWF0ZWRBdFwiLCBcImRlc2NcIilcclxuICAgIC5vblNuYXBzaG90KChzbmFwKSA9PiB7XHJcbiAgICAgIGxldCBjb21tZW50cyA9IHNuYXAuZG9jcy5tYXAoKGNvbW1lbnQpID0+ICh7XHJcbiAgICAgICAgLi4uY29tbWVudC5kYXRhKCksXHJcbiAgICAgICAgaWQ6IGNvbW1lbnQuaWQsXHJcbiAgICAgIH0pKTtcclxuICAgICAgbGV0IHF1ZXJpZXMgPSBbXTtcclxuICAgICAgY29tbWVudHMuZm9yRWFjaCgoY29tbSkgPT4ge1xyXG4gICAgICAgIHF1ZXJpZXMucHVzaChkYi5jb2xsZWN0aW9uKFwidXNlcnNcIikuZG9jKGNvbW0udXNlcklkKS5nZXQoKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBQcm9taXNlLmFsbChxdWVyaWVzKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBjb21tZW50cyA9IGNvbW1lbnRzLm1hcCgoY29tbSkgPT4gKHtcclxuICAgICAgICAgIC4uLmNvbW0sXHJcbiAgICAgICAgICAvL3VzZXJJbWFnZTogcmVzLmZpbmQoKGQpID0+IGQuaWQgPT09IGNvbW0udXNlcklkKS5kYXRhKCkuaW1hZ2UsXHJcbiAgICAgICAgfSkpO1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IHR5cGVzLkdFVF9DT01NRU5UUyxcclxuICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgbG9hZGluZ0NvbW1lbnRzOiBmYWxzZSxcclxuICAgICAgICAgICAgY29tbWVudHMsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHN1Ym1pdENvbW1lbnQgPSAoaW5mbykgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgaWYgKCFhdXRoLmN1cnJlbnRVc2VyLmVtYWlsVmVyaWZpZWQpXHJcbiAgICByZXR1cm4gbWVzc2FnZS5lcnJvcihcIllvdSBuZWVkIHRvIHZlcmlmeSB5b3VyIGVtYWlsIGZpcnN0XCIpO1xyXG4gIGlmICghaW5mby5jb250ZW50KSByZXR1cm4gbWVzc2FnZS5lcnJvcihcIkNvbnRlbnQgbXVzdCBub3QgYmUgZW1wdHlcIik7XHJcblxyXG4gIGRiLmNvbGxlY3Rpb24oXCJjb21tZW50c1wiKVxyXG4gICAgLmFkZCh7XHJcbiAgICAgIC4uLmluZm8sXHJcbiAgICAgIHVzZXJEZWxldGVkOiBmYWxzZSxcclxuICAgICAgc3VzcGVuZGVkOiBmYWxzZSxcclxuICAgICAgY3JlYXRlZEF0OiBmaXJlYmFzZS5maXJlc3RvcmUuRmllbGRWYWx1ZS5zZXJ2ZXJUaW1lc3RhbXAoKSxcclxuICAgIH0pXHJcbiAgICAudGhlbigoKSA9PiBtZXNzYWdlLnN1Y2Nlc3MoXCJDb21tZW50IHBvc3RlZCBzdWNjZXNzZnVsbHlcIikpXHJcbiAgICAuY2F0Y2goKGVycikgPT4gbWVzc2FnZS5lcnJvcihlcnIubWVzc2FnZSkpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlbGV0ZUNvbW1lbnQgPSAoaWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJjb21tZW50c1wiKS5kb2MoaWQpLmRlbGV0ZSgpO1xyXG59O1xyXG5cclxuLy8gUkFURVxyXG5cclxuZXhwb3J0IGNvbnN0IHJhdGVTdG9yeSA9IChkYXRhKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkYi5jb2xsZWN0aW9uKFwic3RhcnNcIilcclxuICAgIC5kb2MoYCR7YXV0aC5jdXJyZW50VXNlci51aWR9JHtkYXRhLnN0b3J5SWR9YClcclxuICAgIC5zZXQoe1xyXG4gICAgICB2YWx1ZTogZGF0YS52YWx1ZSxcclxuICAgICAgdXNlcklkOiBhdXRoLmN1cnJlbnRVc2VyLnVpZCxcclxuICAgICAgc3RvcnlJZDogZGF0YS5zdG9yeUlkLFxyXG4gICAgfSlcclxuICAgIC50aGVuKCgpID0+IG1lc3NhZ2Uuc3VjY2VzcyhcIlN0b3J5IHJhdGVkIHN1Y2Nlc3NmdWxseVwiKSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyTm90ZSA9IChzdG9yeUlkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkYi5jb2xsZWN0aW9uKFwic3RhcnNcIilcclxuICAgIC5kb2MoYCR7YXV0aC5jdXJyZW50VXNlci51aWR9JHtzdG9yeUlkfWApXHJcbiAgICAub25TbmFwc2hvdCgoZG9jKSA9PlxyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogdHlwZXMuR0VUX1VTRVJfUkFURSxcclxuICAgICAgICBwYXlsb2FkOiBkb2MuZXhpc3RzID8gZG9jLmRhdGEoKS52YWx1ZSA6IDAsXHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG59O1xyXG5cclxuLy8gQVJDSElWRVNcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdG9yaWVzRnJvbVNlYXJjaCA9IChzZWFyY2gpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGxldCByZXN1bHQgPSBbXTtcclxuICBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKVxyXG4gICAgLndoZXJlKFwicHVibGljXCIsIFwiPT1cIiwgdHJ1ZSlcclxuICAgIC5nZXQoKVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgZGF0YS5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvYy5kYXRhKCkudGl0bGUudG9Mb3dlckNhc2UoKS5zcGxpdChcIiBcIik7XHJcbiAgICAgICAgY29uc3QgYXV0aG9yTmFtZSA9IGRvYy5kYXRhKCkuYXV0aG9yTmFtZS50b0xvd2VyQ2FzZSgpLnNwbGl0KFwiIFwiKTtcclxuICAgICAgICBjb25zdCBzZWFyY2hUZXJtID0gc2VhcmNoLnNwbGl0KFwiLVwiKTtcclxuICAgICAgICBjb25zdCBpc0luY2x1ZGVkID0gc2VhcmNoVGVybS5ldmVyeSgod29yZCkgPT4gdGl0bGUuaW5jbHVkZXMod29yZCkpO1xyXG4gICAgICAgIGNvbnN0IG9ySW5jbHVkZWQgPSBzZWFyY2hUZXJtLnNvbWUoXHJcbiAgICAgICAgICAod29yZCkgPT4gZG9jLmRhdGEoKS50aXRsZS50b0xvd2VyQ2FzZSgpLmluZGV4T2Yod29yZCkgIT09IC0xXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBhdXRob3JJbmNsdWRlZCA9IHNlYXJjaFRlcm0uZXZlcnkoKHdvcmQpID0+XHJcbiAgICAgICAgICBhdXRob3JOYW1lLmluY2x1ZGVzKHdvcmQpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBvckF1dGhvckluY2x1ZGVkID0gc2VhcmNoVGVybS5zb21lKFxyXG4gICAgICAgICAgKHdvcmQpID0+IGRvYy5kYXRhKCkuYXV0aG9yTmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2Yod29yZCkgIT09IC0xXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpZiAoaXNJbmNsdWRlZCB8fCBvckluY2x1ZGVkIHx8IGF1dGhvckluY2x1ZGVkIHx8IG9yQXV0aG9ySW5jbHVkZWQpIHtcclxuICAgICAgICAgIHJlc3VsdC5wdXNoKHsgLi4uZG9jLmRhdGEoKSwgaWQ6IGRvYy5pZCB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfSlcclxuICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IHR5cGVzLkdFVF9TVE9SSUVTX0ZST01fU0VBUkNILFxyXG4gICAgICAgIHBheWxvYWQ6IHJlc3VsdCxcclxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuIiwiaW1wb3J0IHsgZGIsIGF1dGgsIHN0b3JhZ2UgfSBmcm9tIFwiLi4vZmJDb25maWdcIjtcclxuaW1wb3J0IHsgdHlwZXMgfSBmcm9tIFwiLi4vLi4vdXRpbHMvY29uc3RhbnRzXCI7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcbmltcG9ydCB7IG1lc3NhZ2UgfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ19pbiA9IChlbWFpbCwgcGFzc3dvcmQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGVtYWlsLCBwYXNzd29yZCk7XHJcbiAgYXV0aC5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFByb2ZpbGUgPSAoaWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKVxyXG4gICAgLmRvYyhpZCA/IGlkIDogYXV0aC5jdXJyZW50VXNlci51aWQpXHJcbiAgICAub25TbmFwc2hvdCgoZG9jKSA9PiB7XHJcbiAgICAgIHJldHVybiBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogdHlwZXMuR0VUX1BST0ZJTEUsXHJcbiAgICAgICAgcGF5bG9hZDogeyBpZDogZG9jLmlkLCAuLi5kb2MuZGF0YSgpIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0RmF2b3JpdGVBdXRob3JzID0gKGlkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBsZXQgYWRkZWRPbjtcclxuICBjb25zdCB1c2VySWQgPSBpZCA/IGlkIDogYXV0aC5jdXJyZW50VXNlci51aWQ7XHJcbiAgZGIuY29sbGVjdGlvbihcInVzZXJzTGlrZXNcIilcclxuICAgIC53aGVyZShcInNlbmRlcklkXCIsIFwiPT1cIiwgdXNlcklkKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigoZG9jcykgPT4ge1xyXG4gICAgICBsZXQgZmF2QXJyID0gW107XHJcbiAgICAgIGRvY3MuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICAgICAgYWRkZWRPbiA9IGRvYy5kYXRhKCkuY3JlYXRlZEF0O1xyXG4gICAgICAgIGZhdkFyciA9IFsuLi5mYXZBcnIsIGRvYy5kYXRhKCkucmVjaXBpZW50XTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBmYXZBcnI7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKHVzZXJzKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHVzZXJzLm1hcCgodXNlcikgPT5cclxuICAgICAgICBkYi5jb2xsZWN0aW9uKFwidXNlcnNcIikuZG9jKHVzZXIpLmdldCgpXHJcbiAgICAgICk7XHJcbiAgICAgIFByb21pc2UuYWxsKHJlc3VsdCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgbGV0IGZhdlVzZXJzID0gW107XHJcbiAgICAgICAgcmVzLmZvckVhY2goXHJcbiAgICAgICAgICAoZG9jKSA9PlxyXG4gICAgICAgICAgICAoZmF2VXNlcnMgPSBbLi4uZmF2VXNlcnMsIHsgYWRkZWRPbiwgaWQ6IGRvYy5pZCwgLi4uZG9jLmRhdGEoKSB9XSlcclxuICAgICAgICApO1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IHR5cGVzLkdFVF9GQVZPUklURV9BVVRIT1JTLFxyXG4gICAgICAgICAgcGF5bG9hZDogZmF2VXNlcnMsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Rm9sbG93ZXJzID0gKGlkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBsZXQgYWRkZWRPbjtcclxuICBjb25zdCB1c2VySWQgPSBpZCA/IGlkIDogYXV0aC5jdXJyZW50VXNlci51aWQ7XHJcbiAgZGIuY29sbGVjdGlvbihcInVzZXJzTGlrZXNcIilcclxuICAgIC53aGVyZShcInJlY2lwaWVudFwiLCBcIj09XCIsIHVzZXJJZClcclxuICAgIC5nZXQoKVxyXG4gICAgLnRoZW4oKGRvY3MpID0+IHtcclxuICAgICAgbGV0IGZhdkFyciA9IFtdO1xyXG4gICAgICBkb2NzLmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgICAgIGFkZGVkT24gPSBkb2MuZGF0YSgpLmNyZWF0ZWRBdDtcclxuICAgICAgICBmYXZBcnIgPSBbLi4uZmF2QXJyLCBkb2MuZGF0YSgpLnNlbmRlcklkXTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBmYXZBcnI7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKHVzZXJzKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHVzZXJzLm1hcCgodXNlcikgPT5cclxuICAgICAgICBkYi5jb2xsZWN0aW9uKFwidXNlcnNcIikuZG9jKHVzZXIpLmdldCgpXHJcbiAgICAgICk7XHJcbiAgICAgIFByb21pc2UuYWxsKHJlc3VsdCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgbGV0IGZhdlVzZXJzID0gW107XHJcbiAgICAgICAgcmVzLmZvckVhY2goXHJcbiAgICAgICAgICAoZG9jKSA9PlxyXG4gICAgICAgICAgICAoZmF2VXNlcnMgPSBbLi4uZmF2VXNlcnMsIHsgYWRkZWRPbiwgaWQ6IGRvYy5pZCwgLi4uZG9jLmRhdGEoKSB9XSlcclxuICAgICAgICApO1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IHR5cGVzLkdFVF9GT0xMT1dFUlMsXHJcbiAgICAgICAgICBwYXlsb2FkOiBmYXZVc2VycyxcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRJc0ZvbGxvd2luZyA9ICh1c2VySWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGlmIChhdXRoLmN1cnJlbnRVc2VyKSB7XHJcbiAgICBkYi5jb2xsZWN0aW9uKFwidXNlcnNMaWtlc1wiKVxyXG4gICAgICAud2hlcmUoXCJyZWNpcGllbnRcIiwgXCI9PVwiLCB1c2VySWQpXHJcbiAgICAgIC53aGVyZShcInNlbmRlcklkXCIsIFwiPT1cIiwgYXV0aC5jdXJyZW50VXNlci51aWQpXHJcbiAgICAgIC5vblNuYXBzaG90KChzbmFwc2hvdCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFuc3dlciA9IHNuYXBzaG90LmRvY3MubGVuZ3RoID4gMCA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICByZXR1cm4gZGlzcGF0Y2goeyB0eXBlOiB0eXBlcy5JU19GT0xMT1dJTkcsIHBheWxvYWQ6IGFuc3dlciB9KTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZvbGxvd1VzZXIgPSAoaWQsIGlzRmF2b3JpdGUsIG5ld0ZvbGxvd2VyKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBpZiAoaXNGYXZvcml0ZSkgcmV0dXJuIG1lc3NhZ2Uud2FybmluZyhcIllvdSBhcmUgYWxyZWFkeSBmb2xsb3dpbmcgdGhpcyB1c2VyXCIpO1xyXG4gIGlmICghYXV0aC5jdXJyZW50VXNlcilcclxuICAgIHJldHVybiBtZXNzYWdlLmVycm9yKFwiWW91IG5lZWQgdG8gYmUgbG9nZ2VkIGluIHRvIGZvbGxvdyB1c2Vyc1wiKTtcclxuICBpZiAoIWF1dGguY3VycmVudFVzZXIuZW1haWxWZXJpZmllZClcclxuICAgIHJldHVybiBtZXNzYWdlLmVycm9yKFwiWW91IG5lZWQgdG8gdmVyaWZ5IHlvdXIgZW1haWwgZmlyc3RcIik7XHJcblxyXG4gIGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc0xpa2VzXCIpXHJcbiAgICAuYWRkKHtcclxuICAgICAgc2VuZGVyOiBuZXdGb2xsb3dlci51c2VybmFtZSxcclxuICAgICAgc2VuZGVySWQ6IG5ld0ZvbGxvd2VyLnVpZCxcclxuICAgICAgcmVjaXBpZW50OiBpZCxcclxuICAgICAgY3JlYXRlZEF0OiBmaXJlYmFzZS5maXJlc3RvcmUuRmllbGRWYWx1ZS5zZXJ2ZXJUaW1lc3RhbXAoKSxcclxuICAgIH0pXHJcbiAgICAudGhlbigoKSA9PiBtZXNzYWdlLnN1Y2Nlc3MoXCJZb3UgYXJlIG5vdyBmb2xsb3dpbmcgdGhpcyB1c2VyXCIpKVxyXG4gICAgLmNhdGNoKChlcnIpID0+IG1lc3NhZ2UuZXJyb3IoXCJUaGVyZSBoYXMgYmVlbiBhIHByb2JsZW1cIikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVuZm9sbG93VXNlciA9IChpZCwgaXNGYXZvcml0ZSkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgaWYgKCFpc0Zhdm9yaXRlKVxyXG4gICAgcmV0dXJuIG1lc3NhZ2Uud2FybmluZyhcIllvdSBhcmUgbm90IGZvbGxvd2luZyB0aGlzIHVzZXIgeWV0XCIpO1xyXG5cclxuICBkYi5jb2xsZWN0aW9uKFwidXNlcnNMaWtlc1wiKVxyXG4gICAgLndoZXJlKFwicmVjaXBpZW50XCIsIFwiPT1cIiwgaWQpXHJcbiAgICAud2hlcmUoXCJzZW5kZXJJZFwiLCBcIj09XCIsIGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGIuY29sbGVjdGlvbihcInVzZXJzTGlrZXNcIikuZG9jKGRhdGEuZG9jc1swXS5pZCkuZGVsZXRlKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKCkgPT4gbWVzc2FnZS5zdWNjZXNzKFwiVXNlciBzdWNjZXNzZnVsbHkgdW5mb2xsb3dlZFwiKSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiBtZXNzYWdlLmVycm9yKFwiVGhlcmUgaGFzIGJlZW4gYSBwcm9ibGVtXCIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjaGFuZ2VQcm9maWxlID0gKGRhdGEsIHNldE9wZW4pID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGNvbnN0IHsgbmV3UGFzc3dvcmQsIGFjdHVhbFBhc3N3b3JkLCAuLi5uZXdJbmZvIH0gPSBkYXRhO1xyXG4gIGNvbnN0IGltYWdlTmFtZSA9IGAke2F1dGguY3VycmVudFVzZXIudWlkfV8ke25ld0luZm8udXNlcm5hbWV9YDtcclxuXHJcbiAgaWYgKG5ld1Bhc3N3b3JkKSB7XHJcbiAgICBhdXRoLmN1cnJlbnRVc2VyXHJcbiAgICAgIC5yZWF1dGhlbnRpY2F0ZVdpdGhDcmVkZW50aWFsKFxyXG4gICAgICAgIGZpcmViYXNlLmF1dGguRW1haWxBdXRoUHJvdmlkZXIuY3JlZGVudGlhbChcclxuICAgICAgICAgIGF1dGguY3VycmVudFVzZXIuZW1haWwsXHJcbiAgICAgICAgICBhY3R1YWxQYXNzd29yZFxyXG4gICAgICAgIClcclxuICAgICAgKVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGF1dGguY3VycmVudFVzZXIudXBkYXRlUGFzc3dvcmQobmV3UGFzc3dvcmQpO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBuZXdJbmZvLmltYWdlID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICBzdG9yYWdlXHJcbiAgICAgICAgICAgIC5yZWYoYCR7YXV0aC5jdXJyZW50VXNlci51aWR9LyR7aW1hZ2VOYW1lfWApXHJcbiAgICAgICAgICAgIC5wdXQobmV3SW5mby5pbWFnZSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiBzdG9yYWdlXHJcbiAgICAgICAgICAgICAgICAucmVmKGAke2F1dGguY3VycmVudFVzZXIudWlkfS8ke2ltYWdlTmFtZX1gKVxyXG4gICAgICAgICAgICAgICAgLmdldERvd25sb2FkVVJMKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKGFzeW5jICh1cmwpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gZGJcclxuICAgICAgICAgICAgICAgIC5jb2xsZWN0aW9uKFwidXNlcnNcIilcclxuICAgICAgICAgICAgICAgIC5kb2MoYXV0aC5jdXJyZW50VXNlci51aWQpXHJcbiAgICAgICAgICAgICAgICAudXBkYXRlKHtcclxuICAgICAgICAgICAgICAgICAgLi4ubmV3SW5mbyxcclxuICAgICAgICAgICAgICAgICAgaW1hZ2U6IHVybCxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoXCJQcm9maWxlIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5XCIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gZGJcclxuICAgICAgICAgICAgLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKVxyXG4gICAgICAgICAgICAuZG9jKGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gICAgICAgICAgICAudXBkYXRlKHtcclxuICAgICAgICAgICAgICAuLi5uZXdJbmZvLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgICAgICAgICAgICAgbWVzc2FnZS5zdWNjZXNzKFwiUHJvZmlsZSB1cGRhdGVkIHN1Y2Nlc3NmdWxseVwiKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4gbWVzc2FnZS5lcnJvcihlcnIubWVzc2FnZSkpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBpZiAodHlwZW9mIG5ld0luZm8uaW1hZ2UgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgc3RvcmFnZVxyXG4gICAgICAgIC5yZWYoYCR7YXV0aC5jdXJyZW50VXNlci51aWR9LyR7aW1hZ2VOYW1lfWApXHJcbiAgICAgICAgLnB1dChuZXdJbmZvLmltYWdlKVxyXG4gICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgIHJldHVybiBzdG9yYWdlXHJcbiAgICAgICAgICAgIC5yZWYoYCR7YXV0aC5jdXJyZW50VXNlci51aWR9LyR7aW1hZ2VOYW1lfWApXHJcbiAgICAgICAgICAgIC5nZXREb3dubG9hZFVSTCgpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oYXN5bmMgKHVybCkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIGRiXHJcbiAgICAgICAgICAgIC5jb2xsZWN0aW9uKFwidXNlcnNcIilcclxuICAgICAgICAgICAgLmRvYyhhdXRoLmN1cnJlbnRVc2VyLnVpZClcclxuICAgICAgICAgICAgLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgLi4ubmV3SW5mbyxcclxuICAgICAgICAgICAgICBpbWFnZTogdXJsLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgICAgICAgICAgICAgbWVzc2FnZS5zdWNjZXNzKFwiUHJvZmlsZSB1cGRhdGVkIHN1Y2Nlc3NmdWxseVwiKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkYi5jb2xsZWN0aW9uKFwidXNlcnNcIilcclxuICAgICAgICAuZG9jKGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gICAgICAgIC51cGRhdGUoe1xyXG4gICAgICAgICAgLi4ubmV3SW5mbyxcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gICAgICAgICAgbWVzc2FnZS5zdWNjZXNzKFwiUHJvZmlsZSB1cGRhdGVkIHN1Y2Nlc3NmdWxseVwiKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VXNlcnNGcm9tU2VhcmNoID0gKHNlYXJjaCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgbGV0IHJlc3VsdCA9IFtdO1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICBkYXRhLmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgICAgIGNvbnN0IHVzZXJuYW1lID0gZG9jLmRhdGEoKS51c2VybmFtZS50b0xvd2VyQ2FzZSgpLnNwbGl0KFwiIFwiKTtcclxuICAgICAgICBjb25zdCBzZWFyY2hUZXJtID0gc2VhcmNoLnNwbGl0KFwiLVwiKTtcclxuICAgICAgICBjb25zdCBpc0luY2x1ZGVkID0gc2VhcmNoVGVybS5ldmVyeSgod29yZCkgPT4gdXNlcm5hbWUuaW5jbHVkZXMod29yZCkpO1xyXG4gICAgICAgIGNvbnN0IG9ySW5jbHVkZWQgPSBzZWFyY2hUZXJtLnNvbWUoXHJcbiAgICAgICAgICAod29yZCkgPT4gZG9jLmRhdGEoKS51c2VybmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2Yod29yZCkgIT09IC0xXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpZiAoaXNJbmNsdWRlZCB8fCBvckluY2x1ZGVkKSB7XHJcbiAgICAgICAgICByZXN1bHQucHVzaCh7IC4uLmRvYy5kYXRhKCksIGlkOiBkb2MuaWQgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiB0eXBlcy5HRVRfVVNFUlNfRlJPTV9TRUFSQ0gsXHJcbiAgICAgICAgcGF5bG9hZDogcmVzdWx0LFxyXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFBvcHVsYXJVc2VycyA9ICgpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKVxyXG4gICAgLm9yZGVyQnkoXCJsaWtlc0NvdW50XCIsIFwiZGVzY1wiKVxyXG4gICAgLmxpbWl0KDQpXHJcbiAgICAuZ2V0KClcclxuICAgIC50aGVuKChkb2NzKSA9PiB7XHJcbiAgICAgIGxldCByZXN1bHQgPSBbXTtcclxuICAgICAgZG9jcy5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgICAgICByZXN1bHQgPSBbLi4ucmVzdWx0LCB7IC4uLmRvYy5kYXRhKCksIGlkOiBkb2MuaWQgfV07XHJcbiAgICAgIH0pO1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogdHlwZXMuR0VUX1BPUFVMQVJfVVNFUlMsXHJcbiAgICAgICAgcGF5bG9hZDogcmVzdWx0LFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG4iLCJpbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlL2FwcFwiO1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9hdXRoXCI7XHJcbmltcG9ydCBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9zdG9yYWdlXCI7XHJcblxyXG5jb25zdCBwcm9kQ29uZmlnID0ge1xyXG4gIGFwaUtleTogcHJvY2Vzcy5lbnYuRklSRUJBU0VfQVBJX0tFWSxcclxuICBhdXRoRG9tYWluOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9BVVRIX0RPTUFJTixcclxuICBkYXRhYmFzZVVSTDogcHJvY2Vzcy5lbnYuRklSRUJBU0VfREFUQUJBU0VfVVJMLFxyXG4gIHByb2plY3RJZDogcHJvY2Vzcy5lbnYuRklSRUJBU0VfUFJPSkVDVF9JRCxcclxuICBzdG9yYWdlQnVja2V0OiBwcm9jZXNzLmVudi5GSVJFQkFTRV9TVE9SQUdFX0JVQ0tFVCxcclxuICBtZXNzYWdpbmdTZW5kZXJJZDogcHJvY2Vzcy5lbnYuRklSRUJBU0VfTUVTU0FHSU5HX1NFTkRFUl9JRCxcclxuICBhcHBJZDogcHJvY2Vzcy5lbnYuRklSRUJBU0VfQVBQX0lELFxyXG59O1xyXG5cclxuY29uc3QgZGV2Q29uZmlnID0ge1xyXG4gIGFwaUtleTogcHJvY2Vzcy5lbnYuRklSRUJBU0VfQVBJX0tFWSxcclxuICBhdXRoRG9tYWluOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9BVVRIX0RPTUFJTixcclxuICBkYXRhYmFzZVVSTDogcHJvY2Vzcy5lbnYuRklSRUJBU0VfREFUQUJBU0VfVVJMLFxyXG4gIHByb2plY3RJZDogcHJvY2Vzcy5lbnYuRklSRUJBU0VfUFJPSkVDVF9JRCxcclxuICBzdG9yYWdlQnVja2V0OiBwcm9jZXNzLmVudi5GSVJFQkFTRV9TVE9SQUdFX0JVQ0tFVCxcclxuICBtZXNzYWdpbmdTZW5kZXJJZDogcHJvY2Vzcy5lbnYuRklSRUJBU0VfTUVTU0FHSU5HX1NFTkRFUl9JRCxcclxuICBhcHBJZDogcHJvY2Vzcy5lbnYuRklSRUJBU0VfQVBQX0lELFxyXG59O1xyXG5cclxuY29uc3QgY29uZmlnID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gcHJvZENvbmZpZyA6IGRldkNvbmZpZztcclxuXHJcbmlmICghZmlyZWJhc2UuYXBwcy5sZW5ndGgpIHtcclxuICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGNvbmZpZyk7XHJcbn1cclxuXHJcbmNvbnN0IGRiID0gZmlyZWJhc2UuZmlyZXN0b3JlKCk7XHJcbmNvbnN0IGF1dGggPSBmaXJlYmFzZS5hdXRoKCk7XHJcbmNvbnN0IHN0b3JhZ2UgPSBmaXJlYmFzZS5zdG9yYWdlKCk7XHJcbmNvbnN0IHByb3ZpZGVyID0gbmV3IGZpcmViYXNlLmF1dGguR29vZ2xlQXV0aFByb3ZpZGVyKCk7XHJcblxyXG5leHBvcnQgeyBkYiwgYXV0aCwgc3RvcmFnZSwgcHJvdmlkZXIgfTtcclxuZXhwb3J0IGRlZmF1bHQgY29uZmlnO1xyXG4iLCJleHBvcnQgY29uc3QgQ0FURUdPUklFUyA9IFtcclxuICB7IG5hbWU6IFwiRHJhbWFcIiwgdmFsdWU6IFwiZHJhbWFcIiwgaWQ6IFwiTUtPUmFTWTRtMVJuSzNrU1NMRFRcIiB9LFxyXG4gIHsgbmFtZTogXCJDb21lZHlcIiwgdmFsdWU6IFwiY29tZWR5XCIsIGlkOiBcImJEWFl6cW5VdHBMWkROdjk5WFRxXCIgfSxcclxuICB7IG5hbWU6IFwiSG9ycm9yXCIsIHZhbHVlOiBcImhvcnJvclwiLCBpZDogXCJ3SEV1VW1YakpZWlV0NHVvZXUyblwiIH0sXHJcbiAgeyBuYW1lOiBcIlJvbWFuY2VcIiwgdmFsdWU6IFwicm9tYW5jZVwiLCBpZDogXCI2R0NSU01KSGNtRmxUdmZidE10SlwiIH0sXHJcbiAgeyBuYW1lOiBcIlNjaS1maVwiLCB2YWx1ZTogXCJzY2ktZmlcIiwgaWQ6IFwickJVOE5kMzVBTXBuZDFvazk0SENcIiB9LFxyXG4gIHsgbmFtZTogXCJGYW50YXN5XCIsIHZhbHVlOiBcImZhbnRhc3lcIiwgaWQ6IFwiZUFMRmM3dGVhdnpqVU1qVmRxdDhcIiB9LFxyXG4gIHsgbmFtZTogXCJIdW1vclwiLCB2YWx1ZTogXCJodW1vclwiLCBpZDogXCJCNUVmb3gyakVqTnB5d3h1bzNLUlwiIH0sXHJcbiAgeyBuYW1lOiBcIkFjdGlvblwiLCB2YWx1ZTogXCJhY3Rpb25cIiwgaWQ6IFwiRUhnQ2s4OFdsMVk0YTNMVzBKY3BcIiB9LFxyXG4gIHsgbmFtZTogXCJUaHJpbGxlclwiLCB2YWx1ZTogXCJ0aHJpbGxlclwiLCBpZDogXCJGMFNKaThOcWJ0UWxUOUlQaXF4ZlwiIH0sXHJcbiAgeyBuYW1lOiBcIlN1cGVybmF0dXJhbFwiLCB2YWx1ZTogXCJzdXBlcm5hdHVyYWxcIiwgaWQ6IFwiSWNiTE5TT0ZnVkJiY1U0ZTg4NG5cIiB9LFxyXG4gIHsgbmFtZTogXCJBZHZlbnR1cmVcIiwgdmFsdWU6IFwiYWR2ZW50dXJlXCIsIGlkOiBcIkxQZzN1TnVqTGs2amFCRmZqTVFZXCIgfSxcclxuICB7IG5hbWU6IFwiTXlzdGVyeVwiLCB2YWx1ZTogXCJteXN0ZXJ5XCIsIGlkOiBcIlpyeDhWMjRpYWFDMGpUbmRxVjdHXCIgfSxcclxuICB7IG5hbWU6IFwiV2VzdGVyblwiLCB2YWx1ZTogXCJ3ZXN0ZXJuXCIsIGlkOiBcImJJRjRHd3BLU0pGcHN0OGJpckhyXCIgfSxcclxuICB7IG5hbWU6IFwiSGlzdG9yeVwiLCB2YWx1ZTogXCJoaXN0b3J5XCIsIGlkOiBcImRhNGRidnd2RERhSmRHUE9XN1FGXCIgfSxcclxuICB7IG5hbWU6IFwiQ3JpbWVcIiwgdmFsdWU6IFwiY3JpbWVcIiwgaWQ6IFwib0lCR0JVeURHSDBkamNRU1Nud3NcIiB9LFxyXG4gIHsgbmFtZTogXCJGYW5maWN0aW9uXCIsIHZhbHVlOiBcImZhbmZpY3Rpb25cIiwgaWQ6IFwiekFyMWVIbmlGZ1dXMHhBcWoxdGlcIiB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IENPUFlSSUdIVFMgPSBbXHJcbiAgeyBuYW1lOiBcIlB1YmxpYyBEb21haW5cIiwgdmFsdWU6IFwicHVibGljIGRvbWFpblwiIH0sXHJcbiAgeyBuYW1lOiBcIkFsbCBSaWdodHMgUmVzZXJ2ZWRcIiwgdmFsdWU6IFwiYWxsIHJpZ2h0cyByZXNlcnZlZFwiIH0sXHJcbiAgeyBuYW1lOiBcIkNyZWF0aXZlIENvbW1vbnNcIiwgdmFsdWU6IFwiY3JlYXRpdmUgY29tbW9uc1wiIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgTEFOR1VBR0VTID0gW1xyXG4gIHsgbmFtZTogXCJBZmFyXCIsIHZhbHVlOiBcImFhXCIgfSxcclxuICB7IG5hbWU6IFwiQWJraGF6aWFuXCIsIHZhbHVlOiBcImFiXCIgfSxcclxuICB7IG5hbWU6IFwiQXZlc3RhblwiLCB2YWx1ZTogXCJhZVwiIH0sXHJcbiAgeyBuYW1lOiBcIkFmcmlrYWFuc1wiLCB2YWx1ZTogXCJhZlwiIH0sXHJcbiAgeyBuYW1lOiBcIkFrYW5cIiwgdmFsdWU6IFwiYWtcIiB9LFxyXG4gIHsgbmFtZTogXCJBbWhhcmljXCIsIHZhbHVlOiBcImFtXCIgfSxcclxuICB7IG5hbWU6IFwiQXJhZ29uZXNlXCIsIHZhbHVlOiBcImFuXCIgfSxcclxuICB7IG5hbWU6IFwiQXJhYmljXCIsIHZhbHVlOiBcImFyXCIgfSxcclxuICB7IG5hbWU6IFwiQXNzYW1lc2VcIiwgdmFsdWU6IFwiYXNcIiB9LFxyXG4gIHsgbmFtZTogXCJBdmFyaWNcIiwgdmFsdWU6IFwiYXZcIiB9LFxyXG4gIHsgbmFtZTogXCJBeW1hcmFcIiwgdmFsdWU6IFwiYXlcIiB9LFxyXG4gIHsgbmFtZTogXCJBemVyYmFpamFuaVwiLCB2YWx1ZTogXCJhelwiIH0sXHJcbiAgeyBuYW1lOiBcIkJhc2hraXJcIiwgdmFsdWU6IFwiYmFcIiB9LFxyXG4gIHsgbmFtZTogXCJCZWxhcnVzaWFuXCIsIHZhbHVlOiBcImJlXCIgfSxcclxuICB7IG5hbWU6IFwiQnVsZ2FyaWFuXCIsIHZhbHVlOiBcImJnXCIgfSxcclxuICB7IG5hbWU6IFwiQmloYXJpXCIsIHZhbHVlOiBcImJoXCIgfSxcclxuICB7IG5hbWU6IFwiQmlzbGFtYVwiLCB2YWx1ZTogXCJiaVwiIH0sXHJcbiAgeyBuYW1lOiBcIkJhbWJhcmFcIiwgdmFsdWU6IFwiYm1cIiB9LFxyXG4gIHsgbmFtZTogXCJCZW5nYWxpXCIsIHZhbHVlOiBcImJuXCIgfSxcclxuICB7IG5hbWU6IFwiVGliZXRhblwiLCB2YWx1ZTogXCJib1wiIH0sXHJcbiAgeyBuYW1lOiBcIkJyZXRvblwiLCB2YWx1ZTogXCJiclwiIH0sXHJcbiAgeyBuYW1lOiBcIkJvc25pYW5cIiwgdmFsdWU6IFwiYnNcIiB9LFxyXG4gIHsgbmFtZTogXCJDYXRhbGFuXCIsIHZhbHVlOiBcImNhXCIgfSxcclxuICB7IG5hbWU6IFwiQ2hlY2hlblwiLCB2YWx1ZTogXCJjZVwiIH0sXHJcbiAgeyBuYW1lOiBcIkNoYW1vcnJvXCIsIHZhbHVlOiBcImNoXCIgfSxcclxuICB7IG5hbWU6IFwiQ29yc2ljYW5cIiwgdmFsdWU6IFwiY29cIiB9LFxyXG4gIHsgbmFtZTogXCJDcmVlXCIsIHZhbHVlOiBcImNyXCIgfSxcclxuICB7IG5hbWU6IFwiQ3plY2hcIiwgdmFsdWU6IFwiY3NcIiB9LFxyXG4gIHsgbmFtZTogXCJPbGQgQ2h1cmNoIFNsYXZvbmljXCIsIHZhbHVlOiBcImN1XCIgfSxcclxuICB7IG5hbWU6IFwiQ2h1dmFzaFwiLCB2YWx1ZTogXCJjdlwiIH0sXHJcbiAgeyBuYW1lOiBcIldlbHNoXCIsIHZhbHVlOiBcImN5XCIgfSxcclxuICB7IG5hbWU6IFwiRGFuaXNoXCIsIHZhbHVlOiBcImRhXCIgfSxcclxuICB7IG5hbWU6IFwiR2VybWFuXCIsIHZhbHVlOiBcImRlXCIgfSxcclxuICB7IG5hbWU6IFwiRGl2ZWhpXCIsIHZhbHVlOiBcImR2XCIgfSxcclxuICB7IG5hbWU6IFwiRHpvbmdraGFcdFwiLCB2YWx1ZTogXCJkelwiIH0sXHJcbiAgeyBuYW1lOiBcIkV3ZVwiLCB2YWx1ZTogXCJlZVwiIH0sXHJcbiAgeyBuYW1lOiBcIkdyZWVrXCIsIHZhbHVlOiBcImVsXCIgfSxcclxuICB7IG5hbWU6IFwiRW5nbGlzaFwiLCB2YWx1ZTogXCJlblwiIH0sXHJcbiAgeyBuYW1lOiBcIkVzcGVyYW50b1wiLCB2YWx1ZTogXCJlb1wiIH0sXHJcbiAgeyBuYW1lOiBcIlNwYW5pc2hcIiwgdmFsdWU6IFwiZXNcIiB9LFxyXG4gIHsgbmFtZTogXCJFc3RvbmlhblwiLCB2YWx1ZTogXCJldFwiIH0sXHJcbiAgeyBuYW1lOiBcIkJhc3F1ZVwiLCB2YWx1ZTogXCJldVwiIH0sXHJcbiAgeyBuYW1lOiBcIlBlcnNpYW5cIiwgdmFsdWU6IFwiZmFcIiB9LFxyXG4gIHsgbmFtZTogXCJGdWxhaFwiLCB2YWx1ZTogXCJmZlwiIH0sXHJcbiAgeyBuYW1lOiBcIkZpbm5pc2hcIiwgdmFsdWU6IFwiZmlcIiB9LFxyXG4gIHsgbmFtZTogXCJGaWppYW5cIiwgdmFsdWU6IFwiZmpcIiB9LFxyXG4gIHsgbmFtZTogXCJGYXJvZXNlXCIsIHZhbHVlOiBcImZvXCIgfSxcclxuICB7IG5hbWU6IFwiRnJlbmNoXCIsIHZhbHVlOiBcImZyXCIgfSxcclxuICB7IG5hbWU6IFwiV2VzdGVybiBGcmlzaWFuXCIsIHZhbHVlOiBcImZ5XCIgfSxcclxuICB7IG5hbWU6IFwiSXJpc2hcIiwgdmFsdWU6IFwiZ2FcIiB9LFxyXG4gIHsgbmFtZTogXCJTY290dGlzaCBHYWVsaWNcIiwgdmFsdWU6IFwiZ2RcIiB9LFxyXG4gIHsgbmFtZTogXCJHYWxpY2lhblwiLCB2YWx1ZTogXCJnbFwiIH0sXHJcbiAgeyBuYW1lOiBcIkd1YXJhbmlcIiwgdmFsdWU6IFwiZ25cIiB9LFxyXG4gIHsgbmFtZTogXCJHdWphcmF0aVwiLCB2YWx1ZTogXCJndVwiIH0sXHJcbiAgeyBuYW1lOiBcIk1hbnhcIiwgdmFsdWU6IFwiZ3ZcIiB9LFxyXG4gIHsgbmFtZTogXCJIYXVzYVwiLCB2YWx1ZTogXCJoYVwiIH0sXHJcbiAgeyBuYW1lOiBcIkhlYnJld1wiLCB2YWx1ZTogXCJoZVwiIH0sXHJcbiAgeyBuYW1lOiBcIkhpbmRpXCIsIHZhbHVlOiBcImhpXCIgfSxcclxuICB7IG5hbWU6IFwiSGlyaSBNb3R1XCIsIHZhbHVlOiBcImhvXCIgfSxcclxuICB7IG5hbWU6IFwiQ3JvYXRpYW5cIiwgdmFsdWU6IFwiaHJcIiB9LFxyXG4gIHsgbmFtZTogXCJIYWl0aWFuXCIsIHZhbHVlOiBcImh0XCIgfSxcclxuICB7IG5hbWU6IFwiSHVuZ2FyaWFuXCIsIHZhbHVlOiBcImh1XCIgfSxcclxuICB7IG5hbWU6IFwiQXJtZW5pYW5cIiwgdmFsdWU6IFwiaHlcIiB9LFxyXG4gIHsgbmFtZTogXCJIZXJlcm9cIiwgdmFsdWU6IFwiaHpcIiB9LFxyXG4gIHsgbmFtZTogXCJJbnRlcmxpbmd1YVwiLCB2YWx1ZTogXCJpYVwiIH0sXHJcbiAgeyBuYW1lOiBcIkluZG9uZXNpYW5cIiwgdmFsdWU6IFwiaWRcIiB9LFxyXG4gIHsgbmFtZTogXCJJbnRlcmxpbmd1ZVwiLCB2YWx1ZTogXCJpZVwiIH0sXHJcbiAgeyBuYW1lOiBcIklnYm9cIiwgdmFsdWU6IFwiaWdcIiB9LFxyXG4gIHsgbmFtZTogXCJTaWNodWFuIFlpXCIsIHZhbHVlOiBcImlpXCIgfSxcclxuICB7IG5hbWU6IFwiSW51cGlhcVwiLCB2YWx1ZTogXCJpa1wiIH0sXHJcbiAgeyBuYW1lOiBcIklkb1wiLCB2YWx1ZTogXCJpb1wiIH0sXHJcbiAgeyBuYW1lOiBcIkljZWxhbmRpY1wiLCB2YWx1ZTogXCJpc1wiIH0sXHJcbiAgeyBuYW1lOiBcIkl0YWxpYW5cIiwgdmFsdWU6IFwiaXRcIiB9LFxyXG4gIHsgbmFtZTogXCJJbnVrdGl0dXRcIiwgdmFsdWU6IFwiaXVcIiB9LFxyXG4gIHsgbmFtZTogXCJKYXBhbmVzZVwiLCB2YWx1ZTogXCJqYVwiIH0sXHJcbiAgeyBuYW1lOiBcIkphdmFuZXNlXCIsIHZhbHVlOiBcImp2XCIgfSxcclxuICB7IG5hbWU6IFwiR2VvcmdpYW5cIiwgdmFsdWU6IFwia2FcIiB9LFxyXG4gIHsgbmFtZTogXCJLb25nb1wiLCB2YWx1ZTogXCJrZ1wiIH0sXHJcbiAgeyBuYW1lOiBcIktpa3V5dVwiLCB2YWx1ZTogXCJraVwiIH0sXHJcbiAgeyBuYW1lOiBcIkt3YW55YW1hXCIsIHZhbHVlOiBcImtqXCIgfSxcclxuICB7IG5hbWU6IFwiS2F6YWtoXCIsIHZhbHVlOiBcImtrXCIgfSxcclxuICB7IG5hbWU6IFwiR3JlZW5sYW5kaWNcIiwgdmFsdWU6IFwia2xcIiB9LFxyXG4gIHsgbmFtZTogXCJLaG1lclwiLCB2YWx1ZTogXCJrbVwiIH0sXHJcbiAgeyBuYW1lOiBcIkthbm5hZGFcIiwgdmFsdWU6IFwia25cIiB9LFxyXG4gIHsgbmFtZTogXCJLb3JlYW5cIiwgdmFsdWU6IFwia29cIiB9LFxyXG4gIHsgbmFtZTogXCJLYW51cmlcIiwgdmFsdWU6IFwia3JcIiB9LFxyXG4gIHsgbmFtZTogXCJLYXNobWlyaVwiLCB2YWx1ZTogXCJrc1wiIH0sXHJcbiAgeyBuYW1lOiBcIkt1cmRpc2hcIiwgdmFsdWU6IFwia3VcIiB9LFxyXG4gIHsgbmFtZTogXCJLb21pXCIsIHZhbHVlOiBcImt2XCIgfSxcclxuICB7IG5hbWU6IFwiQ29ybmlzaFwiLCB2YWx1ZTogXCJrd1wiIH0sXHJcbiAgeyBuYW1lOiBcIktpcmdoaXpcIiwgdmFsdWU6IFwia3lcIiB9LFxyXG4gIHsgbmFtZTogXCJMYXRpblwiLCB2YWx1ZTogXCJsYVwiIH0sXHJcbiAgeyBuYW1lOiBcIkx1eGVtYm91cmdpc2hcIiwgdmFsdWU6IFwibGJcIiB9LFxyXG4gIHsgbmFtZTogXCJHYW5kYVwiLCB2YWx1ZTogXCJsZ1wiIH0sXHJcbiAgeyBuYW1lOiBcIkxpbWJ1cmdpc2hcIiwgdmFsdWU6IFwibGlcIiB9LFxyXG4gIHsgbmFtZTogXCJMaW5nYWxhXCIsIHZhbHVlOiBcImxuXCIgfSxcclxuICB7IG5hbWU6IFwiTGFvXCIsIHZhbHVlOiBcImxvXCIgfSxcclxuICB7IG5hbWU6IFwiTGl0aHVhbmlhblwiLCB2YWx1ZTogXCJsdFwiIH0sXHJcbiAgeyBuYW1lOiBcIkx1YmFcIiwgdmFsdWU6IFwibHVcIiB9LFxyXG4gIHsgbmFtZTogXCJMYXR2aWFuXCIsIHZhbHVlOiBcImx2XCIgfSxcclxuICB7IG5hbWU6IFwiTWFsYWdhc3lcIiwgdmFsdWU6IFwibWdcIiB9LFxyXG4gIHsgbmFtZTogXCJNYXJzaGFsbGVzZVwiLCB2YWx1ZTogXCJtaFwiIH0sXHJcbiAgeyBuYW1lOiBcIk3EgW9yaVwiLCB2YWx1ZTogXCJtaVwiIH0sXHJcbiAgeyBuYW1lOiBcIk1hY2Vkb25pYW5cIiwgdmFsdWU6IFwibWtcIiB9LFxyXG4gIHsgbmFtZTogXCJNYWxheWFsYW1cIiwgdmFsdWU6IFwibWxcIiB9LFxyXG4gIHsgbmFtZTogXCJNb25nb2xpYW5cIiwgdmFsdWU6IFwibW5cIiB9LFxyXG4gIHsgbmFtZTogXCJNb2xkYXZpYW5cIiwgdmFsdWU6IFwibW9cIiB9LFxyXG4gIHsgbmFtZTogXCJNYXJhdGhpXCIsIHZhbHVlOiBcIm1yXCIgfSxcclxuICB7IG5hbWU6IFwiTWFsYXlcIiwgdmFsdWU6IFwibXNcIiB9LFxyXG4gIHsgbmFtZTogXCJNYWx0ZXNlXCIsIHZhbHVlOiBcIm10XCIgfSxcclxuICB7IG5hbWU6IFwiQnVybWVzZVwiLCB2YWx1ZTogXCJteVwiIH0sXHJcbiAgeyBuYW1lOiBcIk5hdXJ1XCIsIHZhbHVlOiBcIm5hXCIgfSxcclxuICB7IG5hbWU6IFwiTm9yd2VnaWFuIEJva23DpWxcIiwgdmFsdWU6IFwibmJcIiB9LFxyXG4gIHsgbmFtZTogXCJOb3J0aCBOZGViZWxlXCIsIHZhbHVlOiBcIm5kXCIgfSxcclxuICB7IG5hbWU6IFwiTmVwYWxpXCIsIHZhbHVlOiBcIm5lXCIgfSxcclxuICB7IG5hbWU6IFwiTmRvbmdhXCIsIHZhbHVlOiBcIm5nXCIgfSxcclxuICB7IG5hbWU6IFwiRHV0Y2hcIiwgdmFsdWU6IFwibmxcIiB9LFxyXG4gIHsgbmFtZTogXCJOb3J3ZWdpYW4gTnlub3Jza1wiLCB2YWx1ZTogXCJublwiIH0sXHJcbiAgeyBuYW1lOiBcIk5vcndlZ2lhblwiLCB2YWx1ZTogXCJub1wiIH0sXHJcbiAgeyBuYW1lOiBcIlNvdXRoIE5kZWJlbGVcIiwgdmFsdWU6IFwibnJcIiB9LFxyXG4gIHsgbmFtZTogXCJOYXZham9cIiwgdmFsdWU6IFwibnZcIiB9LFxyXG4gIHsgbmFtZTogXCJDaGljaGV3YVwiLCB2YWx1ZTogXCJueVwiIH0sXHJcbiAgeyBuYW1lOiBcIk9jY2l0YW5cIiwgdmFsdWU6IFwib2NcIiB9LFxyXG4gIHsgbmFtZTogXCJPamlid2FcIiwgdmFsdWU6IFwib2pcIiB9LFxyXG4gIHsgbmFtZTogXCJPcm9tb1wiLCB2YWx1ZTogXCJvbVwiIH0sXHJcbiAgeyBuYW1lOiBcIk9yaXlhXCIsIHZhbHVlOiBcIm9yXCIgfSxcclxuICB7IG5hbWU6IFwiT3NzZXRpYW5cIiwgdmFsdWU6IFwib3NcIiB9LFxyXG4gIHsgbmFtZTogXCJQYW5qYWJpXCIsIHZhbHVlOiBcInBhXCIgfSxcclxuICB7IG5hbWU6IFwiUMSBbGlcIiwgdmFsdWU6IFwicGlcIiB9LFxyXG4gIHsgbmFtZTogXCJQb2xpc2hcIiwgdmFsdWU6IFwicGxcIiB9LFxyXG4gIHsgbmFtZTogXCJQYXNodG9cIiwgdmFsdWU6IFwicHNcIiB9LFxyXG4gIHsgbmFtZTogXCJQb3J0dWd1ZXNlXCIsIHZhbHVlOiBcInB0XCIgfSxcclxuICB7IG5hbWU6IFwiUXVlY2h1YVwiLCB2YWx1ZTogXCJxdVwiIH0sXHJcbiAgeyBuYW1lOiBcIlJldW5pb25lc2VcIiwgdmFsdWU6IFwicmNcIiB9LFxyXG4gIHsgbmFtZTogXCJSb21hbnNoXCIsIHZhbHVlOiBcInJtXCIgfSxcclxuICB7IG5hbWU6IFwiS2lydW5kaVwiLCB2YWx1ZTogXCJyblwiIH0sXHJcbiAgeyBuYW1lOiBcIlJvbWFuaWFuXCIsIHZhbHVlOiBcInJvXCIgfSxcclxuICB7IG5hbWU6IFwiUnVzc2lhblwiLCB2YWx1ZTogXCJydVwiIH0sXHJcbiAgeyBuYW1lOiBcIktpbnlhcndhbmRhXCIsIHZhbHVlOiBcInJ3XCIgfSxcclxuICB7IG5hbWU6IFwiU2Fuc2tyaXRcIiwgdmFsdWU6IFwic2FcIiB9LFxyXG4gIHsgbmFtZTogXCJTYXJkaW5pYW5cIiwgdmFsdWU6IFwic2NcIiB9LFxyXG4gIHsgbmFtZTogXCJTaW5kaGlcIiwgdmFsdWU6IFwic2RcIiB9LFxyXG4gIHsgbmFtZTogXCJOb3J0aGVybiBTYW1pXCIsIHZhbHVlOiBcInNlXCIgfSxcclxuICB7IG5hbWU6IFwiU2FuZ29cIiwgdmFsdWU6IFwic2dcIiB9LFxyXG4gIHsgbmFtZTogXCJTZXJiby1Dcm9hdGlhblwiLCB2YWx1ZTogXCJzaFwiIH0sXHJcbiAgeyBuYW1lOiBcIlNpbmhhbGVzZVwiLCB2YWx1ZTogXCJzaVwiIH0sXHJcbiAgeyBuYW1lOiBcIlNsb3Zha1wiLCB2YWx1ZTogXCJza1wiIH0sXHJcbiAgeyBuYW1lOiBcIlNsb3ZlbmlhblwiLCB2YWx1ZTogXCJzbFwiIH0sXHJcbiAgeyBuYW1lOiBcIlNhbW9hblwiLCB2YWx1ZTogXCJzbVwiIH0sXHJcbiAgeyBuYW1lOiBcIlNob25hXCIsIHZhbHVlOiBcInNuXCIgfSxcclxuICB7IG5hbWU6IFwiU29tYWxpXCIsIHZhbHVlOiBcInNvXCIgfSxcclxuICB7IG5hbWU6IFwiQWxiYW5pYW5cIiwgdmFsdWU6IFwic3FcIiB9LFxyXG4gIHsgbmFtZTogXCJTZXJiaWFuXCIsIHZhbHVlOiBcInNyXCIgfSxcclxuICB7IG5hbWU6IFwiU3dhdGlcIiwgdmFsdWU6IFwic3NcIiB9LFxyXG4gIHsgbmFtZTogXCJTb3Rob1wiLCB2YWx1ZTogXCJzdFwiIH0sXHJcbiAgeyBuYW1lOiBcIlN1bmRhbmVzZVwiLCB2YWx1ZTogXCJzdVwiIH0sXHJcbiAgeyBuYW1lOiBcIlN3ZWRpc2hcIiwgdmFsdWU6IFwic3ZcIiB9LFxyXG4gIHsgbmFtZTogXCJTd2FoaWxpXCIsIHZhbHVlOiBcInN3XCIgfSxcclxuICB7IG5hbWU6IFwiVGFtaWxcIiwgdmFsdWU6IFwidGFcIiB9LFxyXG4gIHsgbmFtZTogXCJUZWx1Z3VcIiwgdmFsdWU6IFwidGVcIiB9LFxyXG4gIHsgbmFtZTogXCJUYWppa1wiLCB2YWx1ZTogXCJ0Z1wiIH0sXHJcbiAgeyBuYW1lOiBcIlRoYWlcIiwgdmFsdWU6IFwidGhcIiB9LFxyXG4gIHsgbmFtZTogXCJUaWdyaW55YVwiLCB2YWx1ZTogXCJ0aVwiIH0sXHJcbiAgeyBuYW1lOiBcIlR1cmttZW5cIiwgdmFsdWU6IFwidGtcIiB9LFxyXG4gIHsgbmFtZTogXCJUYWdhbG9nXCIsIHZhbHVlOiBcInRsXCIgfSxcclxuICB7IG5hbWU6IFwiVHN3YW5hXCIsIHZhbHVlOiBcInRuXCIgfSxcclxuICB7IG5hbWU6IFwiVG9uZ2FcIiwgdmFsdWU6IFwidG9cIiB9LFxyXG4gIHsgbmFtZTogXCJUdXJraXNoXCIsIHZhbHVlOiBcInRyXCIgfSxcclxuICB7IG5hbWU6IFwiVHNvbmdhXCIsIHZhbHVlOiBcInRzXCIgfSxcclxuICB7IG5hbWU6IFwiVGF0YXJcIiwgdmFsdWU6IFwidHRcIiB9LFxyXG4gIHsgbmFtZTogXCJUd2lcIiwgdmFsdWU6IFwidHdcIiB9LFxyXG4gIHsgbmFtZTogXCJUYWhpdGlhblwiLCB2YWx1ZTogXCJ0eVwiIH0sXHJcbiAgeyBuYW1lOiBcIlVpZ2h1clwiLCB2YWx1ZTogXCJ1Z1wiIH0sXHJcbiAgeyBuYW1lOiBcIlVrcmFpbmlhblwiLCB2YWx1ZTogXCJ1a1wiIH0sXHJcbiAgeyBuYW1lOiBcIlVyZHVcIiwgdmFsdWU6IFwidXJcIiB9LFxyXG4gIHsgbmFtZTogXCJVemJla1wiLCB2YWx1ZTogXCJ1elwiIH0sXHJcbiAgeyBuYW1lOiBcIlZlbmRhXCIsIHZhbHVlOiBcInZlXCIgfSxcclxuICB7IG5hbWU6IFwiVmnDqnQgTmFtZXNlXCIsIHZhbHVlOiBcInZpXCIgfSxcclxuICB7IG5hbWU6IFwiVm9sYXDDvGtcIiwgdmFsdWU6IFwidm9cIiB9LFxyXG4gIHsgbmFtZTogXCJXYWxsb29uXCIsIHZhbHVlOiBcIndhXCIgfSxcclxuICB7IG5hbWU6IFwiV29sb2ZcIiwgdmFsdWU6IFwid29cIiB9LFxyXG4gIHsgbmFtZTogXCJYaG9zYVwiLCB2YWx1ZTogXCJ4aFwiIH0sXHJcbiAgeyBuYW1lOiBcIllpZGRpc2hcIiwgdmFsdWU6IFwieWlcIiB9LFxyXG4gIHsgbmFtZTogXCJZb3J1YmFcIiwgdmFsdWU6IFwieW9cIiB9LFxyXG4gIHsgbmFtZTogXCJaaHVhbmdcIiwgdmFsdWU6IFwiemFcIiB9LFxyXG4gIHsgbmFtZTogXCJDaGluZXNlXCIsIHZhbHVlOiBcInpoXCIgfSxcclxuICB7IG5hbWU6IFwiWnVsdVwiLCB2YWx1ZTogXCJ6dVwiIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgU1RBVFVTID0gW1xyXG4gIHsgbmFtZTogXCJJbiBQcm9ncmVzc1wiLCB2YWx1ZTogXCJpbiBwcm9ncmVzc1wiIH0sXHJcbiAgeyBuYW1lOiBcIkluIEhpYXR1c1wiLCB2YWx1ZTogXCJpbiBoaWF0dXNcIiB9LFxyXG4gIHsgbmFtZTogXCJDb21wbGV0ZWRcIiwgdmFsdWU6IFwiY29tcGxldGVkXCIgfSxcclxuXTtcclxuXHJcbi8vIFRZUEVTXHJcbmV4cG9ydCBjb25zdCB0eXBlcyA9IHtcclxuICBHRVRfUFJPRklMRTogXCJHRVRfUFJPRklMRVwiLFxyXG4gIExPR0lOOiBcIkxPR0lOXCIsXHJcbiAgUkVHSVNURVI6IFwiUkVHSVNURVJcIixcclxuICBHRVRfU1RPUlk6IFwiR0VUX1NUT1JZXCIsXHJcbiAgR0VUX1VTRVJfU1RPUklFUzogXCJHRVRfVVNFUl9TVE9SSUVTXCIsXHJcbiAgR0VUX0hPTUVfU1RPUklFUzogXCJHRVRfSE9NRV9TVE9SSUVTXCIsXHJcbiAgR0VUX0ZFQVRVUkVEX1NUT1JJRVM6IFwiR0VUX0ZFQVRVUkVEX1NUT1JJRVNcIixcclxuICBHRVRfVVNFUlNfRlJPTV9TRUFSQ0g6IFwiR0VUX1VTRVJTX0ZST01fU0VBUkNIXCIsXHJcbiAgR0VUX1BPUFVMQVJfVVNFUlM6IFwiR0VUX1BPUFVMQVJfVVNFUlNcIixcclxuICBHRVRfRkFWT1JJVEVfU1RPUklFUzogXCJHRVRfRkFWT1JJVEVfU1RPUklFU1wiLFxyXG4gIEFERF9TVE9SWTogXCJBRERfU1RPUllcIixcclxuICBFRElUX1NUT1JZOiBcIkVESVRfU1RPUllcIixcclxuICBERUxFVEVfU1RPUlk6IFwiREVMRVRFX1NUT1JZXCIsXHJcbiAgUkFURV9TVE9SWTogXCJSQVRFX1NUT1JZXCIsXHJcbiAgR0VUX1VTRVJfUkFURTogXCJHRVRfVVNFUl9SQVRFXCIsXHJcbiAgR0VUX1NUT1JJRVNfRlJPTV9TRUFSQ0g6IFwiR0VUX1NUT1JJRVNfRlJPTV9TRUFSQ0hcIixcclxuICBJU19TVE9SWV9GQVZPUklURTogXCJJU19TVE9SWV9GQVZPUklURVwiLFxyXG4gIElTX0NIQVJBQ1RFUl9GQVZPUklURTogXCJJU19DSEFSQUNURVJfRkFWT1JJVEVcIixcclxuICBJU19GT0xMT1dJTkc6IFwiSVNfRk9MTE9XSU5HXCIsXHJcbiAgR0VUX0NIQVBURVI6IFwiR0VUX0NIQVBURVJcIixcclxuICBBRERfQ0hBUFRFUjogXCJBRERfQ0hBUFRFUlwiLFxyXG4gIEVESVRfQ0hBUFRFUjogXCJFRElUX0NIQVBURVJcIixcclxuICBERUxFVEVfQ0hBUFRFUjogXCJERUxFVEVfQ0hBUFRFUlwiLFxyXG4gIEdFVF9DSEFQVEVSUzogXCJHRVRfQ0hBUFRFUlNcIixcclxuICBBRERfQ0hBUkFDVEVSOiBcIkFERF9DSEFSQUNURVJcIixcclxuICBHRVRfQ0hBUkFDVEVSOiBcIkdFVF9DSEFSQUNURVJcIixcclxuICBFRElUX0NIQVJBQ1RFUjogXCJFRElUX0NIQVJBQ1RFUlwiLFxyXG4gIERFTEVURV9DSEFSQUNURVI6IFwiREVMRVRFX0NIQVJBQ1RFUlwiLFxyXG4gIEdFVF9VU0VSX0NIQVJBQ1RFUlM6IFwiR0VUX1VTRVJfQ0hBUkFDVEVSU1wiLFxyXG4gIEdFVF9QT1BVTEFSX0NIQVJBQ1RFUlM6IFwiR0VUX1BPUFVMQVJfQ0hBUkFDVEVSU1wiLFxyXG4gIEdFVF9DSEFSQUNURVJfQ09NTUVOVFM6IFwiR0VUX0NIQVJBQ1RFUl9DT01NRU5UU1wiLFxyXG4gIEdFVF9DSEFSQUNURVJTX0ZST01fU0VBUkNIOiBcIkdFVF9DSEFSQUNURVJTX0ZST01fU0VBUkNIXCIsXHJcbiAgR0VUX1VTRVJfTE9DQVRJT05TOiBcIkdFVF9VU0VSX0xPQ0FUSU9OU1wiLFxyXG4gIEdFVF9GQVZPUklURV9DSEFSQUNURVJTOiBcIkdFVF9GQVZPUklURV9DSEFSQUNURVJTXCIsXHJcbiAgR0VUX1NUT1JZX0NIQVJBQ1RFUlM6IFwiR0VUX1NUT1JZX0NIQVJBQ1RFUlNcIixcclxuICBBRERfTE9DQVRJT046IFwiQUREX0xPQ0FUSU9OXCIsXHJcbiAgR0VUX0xPQ0FUSU9OOiBcIkdFVF9MT0NBVElPTlwiLFxyXG4gIEVESVRfTE9DQVRJT046IFwiRURJVF9MT0NBVElPTlwiLFxyXG4gIERFTEVURV9MT0NBVElPTjogXCJERUxFVEVfTE9DQVRJT05cIixcclxuICBHRVRfQ09NTUVOVFM6IFwiR0VUX0NPTU1FTlRTXCIsXHJcbiAgR0VUX0ZBVk9SSVRFX0FVVEhPUlM6IFwiR0VUX0ZBVk9SSVRFX0FVVEhPUlNcIixcclxuICBHRVRfU1RPUllfTE9DQVRJT05TOiBcIkdFVF9TVE9SWV9MT0NBVElPTlNcIixcclxuICBHRVRfRk9MTE9XRVJTOiBcIkdFVF9GT0xMT1dFUlNcIixcclxuICBESVNQQVRDSF9FUlJPUjogXCJESVNQQVRDSF9FUlJPUlwiLFxyXG4gIFNVQk1JVF9DT01NRU5UOiBcIlNVQk1JVF9DT01NRU5UXCIsXHJcbiAgUkFURV9DT01NRU5UOiBcIlJBVEVfQ09NTUVOVFwiLFxyXG4gIEdFVF9OT1RJRklDQVRJT05TOiBcIkdFVF9OT1RJRklDQVRJT05TXCIsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX1BST0ZJTEUgPSBcIkdFVF9QUk9GSUxFXCI7XHJcbmV4cG9ydCBjb25zdCBMT0dJTiA9IFwiTE9HSU5cIjtcclxuZXhwb3J0IGNvbnN0IFJFR0lTVEVSID0gXCJSRUdJU1RFUlwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9TVE9SWSA9IFwiR0VUX1NUT1JZXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfVVNFUl9TVE9SSUVTID0gXCJHRVRfVVNFUl9TVE9SSUVTXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfRkFWT1JJVEVfU1RPUklFUyA9IFwiR0VUX0ZBVk9SSVRFX1NUT1JJRVNcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9TVE9SWSA9IFwiQUREX1NUT1JZXCI7XHJcbmV4cG9ydCBjb25zdCBFRElUX1NUT1JZID0gXCJFRElUX1NUT1JZXCI7XHJcbmV4cG9ydCBjb25zdCBERUxFVEVfU1RPUlkgPSBcIkRFTEVURV9TVE9SWVwiO1xyXG5leHBvcnQgY29uc3QgSVNfU1RPUllfRkFWT1JJVEUgPSBcIklTX1NUT1JZX0ZBVk9SSVRFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX0NIQVBURVIgPSBcIkdFVF9DSEFQVEVSXCI7XHJcbmV4cG9ydCBjb25zdCBBRERfQ0hBUFRFUiA9IFwiQUREX0NIQVBURVJcIjtcclxuZXhwb3J0IGNvbnN0IEVESVRfQ0hBUFRFUiA9IFwiRURJVF9DSEFQVEVSXCI7XHJcbmV4cG9ydCBjb25zdCBERUxFVEVfQ0hBUFRFUiA9IFwiREVMRVRFX0NIQVBURVJcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9DSEFQVEVSUyA9IFwiR0VUX0NIQVBURVJTXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX0NIQVJBQ1RFUiA9IFwiQUREX0NIQVJBQ1RFUlwiO1xyXG5leHBvcnQgY29uc3QgR0VUX0NIQVJBQ1RFUiA9IFwiR0VUX0NIQVJBQ1RFUlwiO1xyXG5leHBvcnQgY29uc3QgRURJVF9DSEFSQUNURVIgPSBcIkVESVRfQ0hBUkFDVEVSXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfVVNFUl9DSEFSQUNURVJTID0gXCJHRVRfVVNFUl9DSEFSQUNURVJTXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfVVNFUl9MT0NBVElPTlMgPSBcIkdFVF9VU0VSX0xPQ0FUSU9OU1wiO1xyXG5leHBvcnQgY29uc3QgR0VUX0ZBVk9SSVRFX0NIQVJBQ1RFUlMgPSBcIkdFVF9GQVZPUklURV9DSEFSQUNURVJTXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfU1RPUllfQ0hBUkFDVEVSUyA9IFwiR0VUX1NUT1JZX0NIQVJBQ1RFUlNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfTE9DQVRJT04gPSBcIkFERF9MT0NBVElPTlwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9GQVZPUklURV9BVVRIT1JTID0gXCJHRVRfRkFWT1JJVEVfQVVUSE9SU1wiO1xyXG5leHBvcnQgY29uc3QgR0VUX0ZPTExPV0VSUyA9IFwiR0VUX0ZPTExPV0VSU1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IERJU1BBVENIX0VSUk9SID0gXCJESVNQQVRDSF9FUlJPUlwiO1xyXG4iLCJleHBvcnQgY29uc3QgZHVtbXkgPSB7XHJcbiAgcGVyc29uOlxyXG4gICAgXCJodHRwczovL2kucGluaW1nLmNvbS81NjR4LzcwLzUwL2EzLzcwNTBhMzBjYzYxZThhN2YzZjg2NzdlYmY5NTA1ZGI3LmpwZ1wiLFxyXG4gIGNvdmVyOlxyXG4gICAgXCJodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy8zODgxMTA0L3BleGVscy1waG90by0zODgxMTA0LmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZkcHI9MiZoPTY1MCZ3PTk0MFwiLFxyXG4gIG5hbWU6IFwiQWlzaHdhcnlhIFJhaVwiLFxyXG4gIHBvc3RlcjogXCJodHRwczovL2ltYWdlcy1uYS5zc2wtaW1hZ2VzLWFtYXpvbi5jb20vaW1hZ2VzL0kvODFoMmdXUFRZSkwuanBnXCIsXHJcbiAgYXZhdGFyOiBcImh0dHBzOi8vYmlwLmNucnMuZnIvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMTEvdXNlci5qcGdcIixcclxuICBub0ltYWdlOiBcImh0dHBzOi8vaS5zdGFjay5pbWd1ci5jb20veTlEcFQuanBnXCIsXHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvYXBwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2F1dGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvZmlyZXN0b3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL3N0b3JhZ2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVzcG9uc2l2ZS1tYXNvbnJ5XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=