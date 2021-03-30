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
  }, __jsx("span", {
    className: "tag",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, "Drama"), type !== "privateProfile" && __jsx("span", {
    className: "author",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 11
    }
  }, "Author: ", story.authorName), __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, story === null || story === void 0 ? void 0 : story.title), __jsx("p", {
    className: "description",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, (story === null || story === void 0 ? void 0 : (_story$summary = story.summary) === null || _story$summary === void 0 ? void 0 : _story$summary.length) > 150 ? `${story.summary.slice(0, 150)}...` : story.summary, !story.summary && "No summary yet"), __jsx("div", {
    className: "count",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "number",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, story.chaptersCount, " "), " ", __jsx("ion-icon", {
    name: "book",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  })), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "number",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, story.secondaryArr.length + story.mainCharacters.length, " "), " ", __jsx("ion-icon", {
    name: "people",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  })), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "number",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, story.commentsCount, " "), " ", __jsx("ion-icon", {
    name: "chatbubble",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
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
/*! exports provided: StoriesGrid, CharacterGrid, UserGrid, LocationGrid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoriesGrid", function() { return StoriesGrid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterGrid", function() { return CharacterGrid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserGrid", function() { return UserGrid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationGrid", function() { return LocationGrid; });
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
var _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\components\\common\\Grid.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const StoriesGrid = ({
  stories,
  type,
  gutter,
  columnsCountBreakPoints
}) => {
  return __jsx(react_responsive_masonry__WEBPACK_IMPORTED_MODULE_3__["ResponsiveMasonry"], {
    columnsCountBreakPoints: columnsCountBreakPoints,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx(react_responsive_masonry__WEBPACK_IMPORTED_MODULE_3___default.a, {
    gutter: gutter,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, stories.length > 0 ? stories.map(story => __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    key: story.id,
    href: `/story/${story.id}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 15
    }
  }, __jsx(_common_Card__WEBPACK_IMPORTED_MODULE_4__["default"], {
    story: story,
    type: type,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  })))) : __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Empty"], {
    image: antd__WEBPACK_IMPORTED_MODULE_1__["Empty"].PRESENTED_IMAGE_SIMPLE,
    description: "No stories yet",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  })));
};

const UserGrid = ({
  users,
  lg,
  xs,
  sm,
  md,
  gutter
}) => {
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    gutter: gutter,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, users.length > 0 ? users.map(u => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    key: u.id,
    lg: lg,
    md: md,
    sm: sm,
    xs: xs,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, __jsx(_common_UserCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
    user: u,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }))) : __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Empty"], {
    image: antd__WEBPACK_IMPORTED_MODULE_1__["Empty"].PRESENTED_IMAGE_SIMPLE,
    description: "No followers yet",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }));
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
      lineNumber: 65,
      columnNumber: 5
    }
  }, __jsx(react_responsive_masonry__WEBPACK_IMPORTED_MODULE_3___default.a, {
    gutter: gutter,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }, locations.length > 0 ? locations.map(c => __jsx(_common_LocationCard__WEBPACK_IMPORTED_MODULE_7__["default"], {
    location: c,
    type: type,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 32
    }
  })) : __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Empty"], {
    image: antd__WEBPACK_IMPORTED_MODULE_1__["Empty"].PRESENTED_IMAGE_SIMPLE,
    description: "No characters yet",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  }))) : //   <Row gutter={gutter}>
  //     {locations.map((loc) => (
  //       <Col xl={xl} xxl={xxl} xs={xs} sm={sm} md={md} lg={lg} key={loc.id}>
  //         <LocationCard type={type} location={loc} />
  //       </Col>
  //     ))}
  //   </Row>
  __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Empty"], {
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
  }, characters.length > 0 ? characters.map(c => __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    key: c.id,
    href: `/character/${c.id}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 15
    }
  }, __jsx(_common_CharacterCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
    character: c,
    type: type,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 17
    }
  })))) : __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Empty"], {
    image: antd__WEBPACK_IMPORTED_MODULE_1__["Empty"].PRESENTED_IMAGE_SIMPLE,
    description: "No characters yet",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 11
    }
  }))) : // <Row gutter={gutter}>
  //   {characters?.map((c) => (
  //     <Col key={c.id} xxl={xxl} xl={xl} lg={lg} md={md} sm={sm} xs={xs}>
  //       {type === "show" ? (
  //         <Link href={`/character/${c.id}`}>
  //           <a>
  //             <CharacterCard character={c} type={type} />
  //           </a>
  //         </Link>
  //       ) : (
  //         <CharacterCard character={c} type={type} />
  //       )}
  //     </Col>
  //   ))}
  // </Row>
  __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Empty"], {
    image: antd__WEBPACK_IMPORTED_MODULE_1__["Empty"].PRESENTED_IMAGE_SIMPLE,
    description: "No characters yet",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
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
  }) : itemType === "followers" ? __jsx(_Grid__WEBPACK_IMPORTED_MODULE_2__["UserGrid"], {
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
  children
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
  }) : type === "redirect" ? window.location.href = "/auth" : __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
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
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: profile !== null && profile !== void 0 && profile.image ? profile.image : _utils_dummy__WEBPACK_IMPORTED_MODULE_3__["dummy"].avatar,
    alt: "aishwaraya",
    width: 230,
    height: 230,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 19
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 15,
    lg: 17,
    sm: 16,
    xs: 24,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "profile-details",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "inner",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 19
    }
  }, context === "private" ? __jsx("div", {
    className: "icon custom-icon settings-icon",
    onClick: openSettings,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 23
    }
  }, __jsx("ion-icon", {
    name: "settings",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 25
    }
  })) : auth.user ? __jsx("div", {
    onClick: () => isFollowing ? unfollowUser(id, isFollowing) : followUser(id, isFollowing, auth.user),
    className: `follow-btn add-btn-circle ${isFollowing ? "followed" : ""}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 23
    }
  }, __jsx("ion-icon", {
    name: "add-circle",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 25
    }
  }), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 25
    }
  }, `${isFollowing ? "Unfollow" : "Follow"} this author`)) : null, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 21
    }
  }, profile === null || profile === void 0 ? void 0 : profile.username), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Space"], {
    size: 30,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "follow-count",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 23
    }
  }, followers === null || followers === void 0 ? void 0 : followers.authors.length, " followers"), __jsx("span", {
    className: "follow-count",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 23
    }
  }, favAuthors === null || favAuthors === void 0 ? void 0 : favAuthors.authors.length, " followings")), __jsx("p", {
    className: "bio",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 21
    }
  }, profile.biography && (profile === null || profile === void 0 ? void 0 : profile.biography.length) > 140 ? `${profile === null || profile === void 0 ? void 0 : profile.biography.slice(0, 140)}...` : profile === null || profile === void 0 ? void 0 : profile.biography), __jsx("div", {
    className: "social",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 21
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Space"], {
    size: 30,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 23
    }
  }, profile.facebook && __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: profile === null || profile === void 0 ? void 0 : profile.facebook,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 27
    }
  }, __jsx("a", {
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "icon custom-icon fb-icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 31
    }
  }, __jsx("ion-icon", {
    name: "logo-facebook",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 33
    }
  })))), profile.twitter && __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: profile === null || profile === void 0 ? void 0 : profile.twitter,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 27
    }
  }, __jsx("a", {
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "icon custom-icon twitter-icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 31
    }
  }, __jsx("ion-icon", {
    name: "logo-twitter",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 33
    }
  })))), profile.instagram && __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: profile === null || profile === void 0 ? void 0 : profile.instagram,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 27
    }
  }, __jsx("a", {
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "icon custom-icon instagram-icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 31
    }
  }, __jsx("ion-icon", {
    name: "logo-instagram",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 33
    }
  })))), profile.deviantart && __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: profile === null || profile === void 0 ? void 0 : profile.deviantart,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 27
    }
  }, __jsx("a", {
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "icon custom-icon deviantart-icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 31
    }
  }, __jsx("ion-icon", {
    name: "logo-deviantart",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 33
    }
  })))))))))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    flex: "auto",
    xl: 6,
    lg: 24,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "bio",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "more",
    onClick: () => favTab === "favauthors" ? setCurrentTab("followings") : setCurrentTab("followers"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 13
    }
  }, "See all >>>"), __jsx("div", {
    className: "segmented-control",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
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
      lineNumber: 138,
      columnNumber: 15
    }
  }), __jsx("label", {
    htmlFor: "tab-1",
    className: "segmented-control__1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 15
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
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
      lineNumber: 149,
      columnNumber: 15
    }
  }), __jsx("label", {
    htmlFor: "tab-2",
    className: "segmented-control__2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 15
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 17
    }
  }, "Recent Followers")), __jsx("div", {
    className: "segmented-control__color",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 15
    }
  })), favTab === "favauthors" && __jsx(_Favorites__WEBPACK_IMPORTED_MODULE_4__["default"], {
    setCurrentTab: setCurrentTab,
    favs: favAuthors,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 15
    }
  }), favTab === "followers" && __jsx(_Favorites__WEBPACK_IMPORTED_MODULE_4__["default"], {
    setCurrentTab: setCurrentTab,
    favs: followers,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
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
    title: type !== "favorites" ? "Characters" : "Favorite Characters",
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
      lineNumber: 33,
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
      lineNumber: 34,
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
    title: "Locations",
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
/* harmony import */ var _utils_dummy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/dummy */ "./utils/dummy.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\components\\profile\\Settings.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const {
  TabPane
} = antd__WEBPACK_IMPORTED_MODULE_1__["Tabs"];

const Settings = ({
  user
}) => {
  return __jsx("div", {
    className: "settings",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    layout: "vertical",
    initialValues: {
      username: user.username
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Tabs"], {
    defaultActiveKey: "1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx(TabPane, {
    tab: __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 15
      }
    }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["UserOutlined"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }
    }), "Username"),
    key: "1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "username",
    label: "Change your username",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 15
    }
  }))), __jsx(TabPane, {
    tab: __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 15
      }
    }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["LockOutlined"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }
    }), "Password"),
    key: "2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    label: "Actual password",
    name: "password",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].Password, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 15
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    label: "New password",
    name: "confirm-password",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].Password, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 15
    }
  }))), __jsx(TabPane, {
    tab: __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 15
      }
    }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["LinkOutlined"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }
    }), "Links"),
    key: "3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }), __jsx(TabPane, {
    tab: __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 15
      }
    }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["FileImageOutlined"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }
    }), "Avatar"),
    key: "4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }))));
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
    title: type !== "favorites" ? "Stories" : "Favorite Stories",
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
      lineNumber: 33,
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
      lineNumber: 34,
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
      lineNumber: 9,
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
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true); // Wrap any Firebase methods we want to use making sure ...
  // ... to save the user to state.

  const signin = (email, password) => {
    return _redux_fbConfig__WEBPACK_IMPORTED_MODULE_2__["auth"].signInWithEmailAndPassword(email, password).then(response => {
      setUser(response.user);
      return response.user;
    });
  };

  const signup = (email, password, username) => {
    return _redux_fbConfig__WEBPACK_IMPORTED_MODULE_2__["auth"].createUserWithEmailAndPassword(email, password).then(response => {
      setUser(response.user);
      _redux_fbConfig__WEBPACK_IMPORTED_MODULE_2__["db"].collection("users").doc(response.user.uid).set({
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
      }).then(() => {
        setUser(_objectSpread(_objectSpread({}, user), {}, {
          username: username
        }));
      });
      return response.user;
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

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const unsubscribe = _redux_fbConfig__WEBPACK_IMPORTED_MODULE_2__["auth"].onAuthStateChanged(user => {
      if (user) {
        setUser(user);

        if (user.uid) {
          let username = "";
          setIsLoading(false);
          _redux_fbConfig__WEBPACK_IMPORTED_MODULE_2__["db"].collection("users").doc(user.uid).onSnapshot(doc => {
            username = doc.data().username;
            setUser(_objectSpread(_objectSpread({}, user), {}, {
              username,
              image: doc.data().image
            }));
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
    isLoading,
    user,
    signin,
    signup,
    signout,
    sendPasswordResetEmail,
    confirmPasswordReset
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
    0: settings,
    1: openSettings
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
      lineNumber: 93,
      columnNumber: 5
    }
  }, __jsx(_components_hoc_LoadingScreen__WEBPACK_IMPORTED_MODULE_14__["default"], {
    loading: auth.isLoading,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }
  }, __jsx(_components_hoc_RedirectComp__WEBPACK_IMPORTED_MODULE_15__["default"], {
    condition: auth.user,
    type: "redirect",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 9
    }
  }, __jsx(_components_profile_Banner__WEBPACK_IMPORTED_MODULE_3__["default"], {
    context: "private",
    profile: profile,
    openSettings: openSettings,
    favAuthors: favAuthors,
    followers: followers,
    changeFavTab: changeFavTab,
    favTab: favTab,
    setCurrentTab: setCurrentTab,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 11
    }
  }), __jsx("section", {
    className: "profile-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 11
    }
  }, __jsx(_components_profile_Tabs__WEBPACK_IMPORTED_MODULE_4__["default"], {
    currentTab: currentTab,
    tabs: tabs,
    changeTab: changeTab,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
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
      lineNumber: 109,
      columnNumber: 15
    }
  }), currentTab === "characters" && __jsx(_components_profile_Characters__WEBPACK_IMPORTED_MODULE_6__["default"], {
    context: "private",
    characters: characters,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 15
    }
  }), currentTab === "locations" && __jsx(_components_profile_Locations__WEBPACK_IMPORTED_MODULE_8__["default"], {
    context: "private",
    locations: locations,
    type: "profile",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 15
    }
  }), currentTab === "favorites stories" && __jsx(_components_profile_Stories__WEBPACK_IMPORTED_MODULE_5__["default"], {
    loading: loading,
    type: "favorites",
    stories: favoriteStories,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 15
    }
  }), currentTab === "favorites characters" && __jsx(_components_profile_Characters__WEBPACK_IMPORTED_MODULE_6__["default"], {
    type: "favorites",
    characters: favoriteCharacters,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 15
    }
  }), currentTab === "followers" && __jsx(_components_profile_Followers__WEBPACK_IMPORTED_MODULE_7__["default"], {
    title: "Followers",
    type: "followers",
    lg: 4,
    md: 6,
    sm: 8,
    xs: 12,
    items: followers.authors,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 15
    }
  }), currentTab === "followings" && __jsx(_components_profile_Followers__WEBPACK_IMPORTED_MODULE_7__["default"], {
    title: "Followings",
    type: "followings",
    lg: 4,
    md: 6,
    sm: 8,
    xs: 12,
    items: favAuthors.authors,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 15
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
    title: "Settings",
    visible: settings,
    onOk: () => openSettings(false),
    onCancel: () => openSettings(false),
    footer: [__jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      key: "submit",
      type: "primary",
      onClick: () => openSettings(false),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 15
      }
    }, "Submit")],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 11
    }
  }, __jsx(_components_profile_Settings__WEBPACK_IMPORTED_MODULE_9__["default"], {
    user: auth.user,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 13
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
  getUserLocations: _redux_actions_storiesActions__WEBPACK_IMPORTED_MODULE_11__["getUserLocations"]
})(Profile));

/***/ }),

/***/ "./redux/actions/charactersActions.js":
/*!********************************************!*\
  !*** ./redux/actions/charactersActions.js ***!
  \********************************************/
/*! exports provided: getCharacter, addCharacter, editCharacter, deleteCharacter, getUserCharacters, getFavoriteCharacters, getCharactersInStory, submitCharaterFeedback, getCharacterComments, deleteCharacterComment, rateComment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCharacter", function() { return getCharacter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCharacter", function() { return addCharacter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editCharacter", function() { return editCharacter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteCharacter", function() { return deleteCharacter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserCharacters", function() { return getUserCharacters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFavoriteCharacters", function() { return getFavoriteCharacters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCharactersInStory", function() { return getCharactersInStory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submitCharaterFeedback", function() { return submitCharaterFeedback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCharacterComments", function() { return getCharacterComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteCharacterComment", function() { return deleteCharacterComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rateComment", function() { return rateComment; });
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/constants */ "./utils/constants.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fbConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fbConfig */ "./redux/fbConfig.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);
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
  const imageName = `${id}${"_"}${firstname.toLowerCase()}${lastname && "_"}${lastname && lastname.toLowerCase()}`;
  const batch = _fbConfig__WEBPACK_IMPORTED_MODULE_2__["db"].batch();
  _fbConfig__WEBPACK_IMPORTED_MODULE_2__["db"].collection("characters").doc(id).delete().then(() => {
    if (_fbConfig__WEBPACK_IMPORTED_MODULE_2__["storage"].ref(`${_fbConfig__WEBPACK_IMPORTED_MODULE_2__["auth"].currentUser.uid}/${imageName}`)) {
      return _fbConfig__WEBPACK_IMPORTED_MODULE_2__["storage"].ref(`${_fbConfig__WEBPACK_IMPORTED_MODULE_2__["auth"].currentUser.uid}/${imageName}`).delete();
    }
  }).then(() => {
    _fbConfig__WEBPACK_IMPORTED_MODULE_2__["db"].collection("chapters").where("characters", "array-contains", id).get().then(docs => {
      docs.forEach(doc => {
        batch.update(_fbConfig__WEBPACK_IMPORTED_MODULE_2__["db"].collection("chapters").doc(doc.id), {
          characters: doc.data().characters.filter(c => c !== id)
        });
      });
    }).then(() => {
      _fbConfig__WEBPACK_IMPORTED_MODULE_2__["db"].collection("stories").where("secondaryArr", "array-contains", id).get().then(stories => {
        stories.forEach(story => {
          batch.update(_fbConfig__WEBPACK_IMPORTED_MODULE_2__["db"].collection("stories").doc(story.id), {
            mainCharacters: story.data().mainCharacters.filter(c => c !== id),
            secondaryArr: story.data().secondaryArr.filter(c => c !== id),
            secondaryCharacters: story.data().secondaryCharacters.filter(c => c.id !== id)
          });
        });
      }).then(() => {
        _fbConfig__WEBPACK_IMPORTED_MODULE_2__["db"].collection("characters").where("relativesArr", "array-contains", id).get().then(characters => {
          characters.forEach(char => {
            batch.update(_fbConfig__WEBPACK_IMPORTED_MODULE_2__["db"].collection("characters").doc(char.id), {
              relativesArr: char.data().relativesArr.filter(c => c !== id),
              relatives: char.data().relatives.filter(c => c.character_id !== id)
            });
          });
        }).then(() => {
          _fbConfig__WEBPACK_IMPORTED_MODULE_2__["db"].collection("charactersLikes").where("characterId", "==", id).get().then(likes => {
            likes.forEach(like => {
              batch.delete(_fbConfig__WEBPACK_IMPORTED_MODULE_2__["db"].collection("charactersLikes").doc(like.id));
            });
            batch.commit().then(() => {
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
          });
        });
      });
    });
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
const submitCharaterFeedback = (info, alreadyPosted) => dispatch => {
  if (!_fbConfig__WEBPACK_IMPORTED_MODULE_2__["auth"].currentUser.emailVerified) return antd__WEBPACK_IMPORTED_MODULE_1__["message"].error("You need to verify your email first");
  if (!info.content) return antd__WEBPACK_IMPORTED_MODULE_1__["message"].error("Content must not be empty");
  if (alreadyPosted) return antd__WEBPACK_IMPORTED_MODULE_1__["message"].error("You have already sent feedback");
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

/***/ }),

/***/ "./redux/actions/storiesActions.js":
/*!*****************************************!*\
  !*** ./redux/actions/storiesActions.js ***!
  \*****************************************/
/*! exports provided: getStory, addStory, editStory, deleteStory, getUserStories, getFavoriteStories, isStoryFavorite, addStoryToFavorite, removeStoryFromFavorite, getStoryCharacters, addChapter, editChapter, deleteChapter, getChapter, getChapters, addLocation, editLocation, getLocation, deleteLocation, getUserLocations, getStoryLocations, getComments, submitComment, deleteComment */
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
  const batch = _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].batch();
  batch.delete(_fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("stories").doc(id));
  const chaptersToDelete = _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("chapters").where("storyId", "==", id).get();
  const likesToDelete = _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("storiesLikes").where("storyId", "==", id).get();
  const locationsToDelete = _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("locations").where("storyId", "==", id).get();
  Promise.all([chaptersToDelete, likesToDelete, locationsToDelete]).then(res => {
    res[0].forEach(chap => {
      batch.delete(_fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("chapters").doc(chap.id));
    });
    res[1].forEach(like => {
      batch.delete(_fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("storiesLikes").doc(like.id));
    });
    res[2].forEach(loc => {
      batch.delete(_fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("locations").doc(loc.id));
    });
    batch.commit().then(() => {
      dispatch({
        type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].DELETE_STORY,
        payload: {
          message: "Story deleted successfully",
          loading: true,
          deleted: true
        }
      });
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
  }
};
const addStoryToFavorite = (id, username, storyTitle) => dispatch => {
  // if (isFavorite) return message.warning("You've already liked this story");
  if (!_fbConfig__WEBPACK_IMPORTED_MODULE_1__["auth"].currentUser) return antd__WEBPACK_IMPORTED_MODULE_3__["message"].error("You need to be logged in to like a story");
  if (!_fbConfig__WEBPACK_IMPORTED_MODULE_1__["auth"].currentUser.emailVerified) return antd__WEBPACK_IMPORTED_MODULE_3__["message"].error("You need to verify your email first");
  _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("storiesLikes").add({
    sender: username,
    senderId: _fbConfig__WEBPACK_IMPORTED_MODULE_1__["auth"].currentUser.uid,
    storyId: id,
    createdAt: firebase_app__WEBPACK_IMPORTED_MODULE_2___default.a.firestore.FieldValue.serverTimestamp()
  }).then(() => antd__WEBPACK_IMPORTED_MODULE_3__["message"].success(`${storyTitle} added to your favorites`)).catch(err => antd__WEBPACK_IMPORTED_MODULE_3__["message"].error("There has been a problem"));
};
const removeStoryFromFavorite = (id, storyTitle) => dispatch => {
  _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("storiesLikes").where("storyId", "==", id).where("senderId", "==", _fbConfig__WEBPACK_IMPORTED_MODULE_1__["auth"].currentUser.uid).get().then(data => {
    return _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("storiesLikes").doc(data.docs[0].id).delete();
  }).then(() => antd__WEBPACK_IMPORTED_MODULE_3__["message"].success(`${storyTitle} removed from your favorites`)).catch(err => antd__WEBPACK_IMPORTED_MODULE_3__["message"].error("There has been a problem"));
};
const getStoryCharacters = () => dispatch => {}; // CHAPTERs

const addChapter = (data, secondaryCharacters) => dispatch => {
  let chapId = "";
  dispatch({
    type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].ADD_CHAPTER,
    payload: {
      loading: true
    }
  });
  return _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("chapters").add(_objectSpread(_objectSpread({}, data), {}, {
    authorId: _fbConfig__WEBPACK_IMPORTED_MODULE_1__["auth"].currentUser.uid,
    commentsCount: 0,
    note: 0,
    voters: [],
    votesCount: 0,
    createdAt: firebase_app__WEBPACK_IMPORTED_MODULE_2___default.a.firestore.FieldValue.serverTimestamp()
  })).then(res => {
    chapId = res.id;
    _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("stories").doc(data.storyId).get().then(story => {
      _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("stories").doc(data.storyId).update({
        chaptersCount: story.data().chaptersCount + 1,
        secondaryCharacters: secondaryCharacters,
        secondaryArr: secondaryCharacters.map(c => c.id)
      }).then(() => {
        dispatch({
          type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].ADD_CHAPTER,
          payload: {
            message: "Chapter added successfully",
            chapId: chapId,
            loading: false
          }
        });
      });
    });
  });
};
const editChapter = (data, storyId, chapid, secondaryCharacters) => dispatch => {
  dispatch({
    type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].EDIT_CHAPTER,
    payload: {
      loading: true
    }
  });
  _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("chapters").doc(chapid).update(_objectSpread({}, data)).then(() => {
    _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("stories").doc(storyId).get().then(doc => {
      _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("stories").doc(storyId).update({
        secondaryCharacters,
        secondaryArr: secondaryCharacters.map(c => c.id)
      }).then(() => {
        dispatch({
          type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].EDIT_CHAPTER,
          payload: {
            message: "Chapter edited successfully",
            loading: false
          }
        });
      });
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
  const batch = _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].batch();
  const commentsToDelete = _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("comments").where("chapterId", "==", id).get();
  const chapter = _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("chapters").doc(id).get();
  const story = _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("stories").doc(storyId).get();
  Promise.all([chapter, story, commentsToDelete]).then(res => {
    const charactersFromChapter = res[0].data().characters;
    const charactersFromStory = res[1].data().secondaryCharacters;
    let newArr = charactersFromStory.map(c => {
      if (charactersFromChapter.includes(c.id)) {
        return _objectSpread(_objectSpread({}, c), {}, {
          times: c.times - 1
        });
      } else {
        return c;
      }
    }).filter(c => c.times > 0);
    batch.update(_fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("stories").doc(storyId), {
      chaptersCount: res[1].data().chaptersCount - 1,
      secondaryCharacters: newArr,
      secondaryArr: newArr.map(c => c.id)
    });
    res[2].forEach(comm => batch.delete(_fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("comments").doc(comm.id)));
    batch.delete(_fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("chapters").doc(id));
    batch.commit().then(() => {
      dispatch({
        type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].DELETE_CHAPTER,
        payload: {
          message: "Chapter deleted successfully",
          loadingChapter: false
        }
      });
    });
  });
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
            charactersInChaper.forEach(char => {
              charaQuery.push(_fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("characters").doc(char).get());
            });
            locationsInChaper.forEach(loc => {
              locQuery.push(_fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("locations").doc(loc).get());
            });
            charaQuery = Promise.all(charaQuery);
            locQuery = Promise.all(locQuery);
            Promise.all([charaQuery, locQuery]).then(res => {
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
        commentsCount: doc.data().commentsCount
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
      comments = comments.map(comm => _objectSpread(_objectSpread({}, comm), {}, {
        userImage: res.find(d => d.id === comm.userId).data().image
      }));
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
      })).then(() => antd__WEBPACK_IMPORTED_MODULE_3__["message"].success("Comment posted successfully"));
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
};

/***/ }),

/***/ "./redux/actions/userActions.js":
/*!**************************************!*\
  !*** ./redux/actions/userActions.js ***!
  \**************************************/
/*! exports provided: log_in, getProfile, getFavoriteAuthors, getFollowers, getIsFollowing, followUser, unfollowUser */
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
/* harmony import */ var _fbConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fbConfig */ "./redux/fbConfig.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/constants */ "./utils/constants.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
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
  GET_FAVORITE_STORIES: "GET_FAVORITE_STORIES",
  ADD_STORY: "ADD_STORY",
  EDIT_STORY: "EDIT_STORY",
  DELETE_STORY: "DELETE_STORY",
  IS_STORY_FAVORITE: "IS_STORY_FAVORITE",
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
  RATE_COMMENT: "RATE_COMMENT"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29tbW9uL0NhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb21tb24vQ2hhcmFjdGVyQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbW1vbi9HcmlkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29tbW9uL0xvY2F0aW9uQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbW1vbi9QYWdpbmF0aW9uLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29tbW9uL1VzZXJDYXJkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaG9jL0xvYWRpbmdTY3JlZW4uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9ob2MvUmVkaXJlY3RDb21wLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcHJvZmlsZS9CYW5uZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wcm9maWxlL0NoYXJhY3RlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wcm9maWxlL0Zhdm9yaXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Byb2ZpbGUvRm9sbG93ZXJzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcHJvZmlsZS9Mb2NhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wcm9maWxlL1NldHRpbmdzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcHJvZmlsZS9Tb3J0SW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wcm9maWxlL1N0b3JpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wcm9maWxlL1RhYnMuanMiLCJ3ZWJwYWNrOi8vLy4vaG9va3MvdXNlckhvb2tzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9lc2NhcGUtcGF0aC1kZWxpbWl0ZXJzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGF0aC1tYXRjaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wcmVwYXJlLWRlc3RpbmF0aW9uLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL3Byb2ZpbGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWN0aW9ucy9jaGFyYWN0ZXJzQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25zL3N0b3JpZXNBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3JlZHV4L2FjdGlvbnMvdXNlckFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvZmJDb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2R1bW15LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbnQtZGVzaWduL2ljb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL2FwcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL2F1dGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9maXJlc3RvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9zdG9yYWdlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVzcG9uc2l2ZS1tYXNvbnJ5XCIiXSwibmFtZXMiOlsiQ2FyZCIsInN0b3J5IiwidHlwZSIsImJhbm5lciIsImR1bW15Iiwibm9JbWFnZSIsImF1dGhvck5hbWUiLCJ0aXRsZSIsInN1bW1hcnkiLCJsZW5ndGgiLCJzbGljZSIsImNoYXB0ZXJzQ291bnQiLCJzZWNvbmRhcnlBcnIiLCJtYWluQ2hhcmFjdGVycyIsImNvbW1lbnRzQ291bnQiLCJDaGFyYWN0ZXJDYXJkIiwiY2hhcmFjdGVyIiwicmVtb3ZlQ2hhcmFjdGVyIiwiaWQiLCJpbWFnZSIsImZpcnN0bmFtZSIsImxhc3RuYW1lIiwicmVsYXRpb24iLCJTdG9yaWVzR3JpZCIsInN0b3JpZXMiLCJndXR0ZXIiLCJjb2x1bW5zQ291bnRCcmVha1BvaW50cyIsIm1hcCIsIkVtcHR5IiwiUFJFU0VOVEVEX0lNQUdFX1NJTVBMRSIsIlVzZXJHcmlkIiwidXNlcnMiLCJsZyIsInhzIiwic20iLCJtZCIsInUiLCJMb2NhdGlvbkdyaWQiLCJsb2NhdGlvbnMiLCJ4bCIsInh4bCIsImMiLCJDaGFyYWN0ZXJHcmlkIiwiY2hhcmFjdGVycyIsIkxvY2F0aW9uQ2FyZCIsImxvY2F0aW9uIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJSZWFjdCIsInVzZVN0YXRlIiwibmFtZSIsInN0b3J5VGl0bGUiLCJkZXNjcmlwdGlvbiIsInN0b3J5SWQiLCJQYWdpbmF0aW9uIiwiZGF0YSIsIml0ZW1UeXBlIiwicGFnaW5hdGlvbiIsInNldFBhZ2luYXRpb24iLCJjdXJyZW50UGFnZSIsImRhdGFzUGVyUGFnZSIsImluZGV4T2ZMYXN0RGF0YSIsImluZGV4T2ZGaXJzdERhdGEiLCJjdXJyZW50RGF0YXMiLCJoYW5kbGVDbGljayIsImUiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsIk51bWJlciIsInJlbmRlckRhdGFzIiwicGFnZU51bWJlcnMiLCJpIiwiTWF0aCIsImNlaWwiLCJwdXNoIiwidG90YWwiLCJVc2VyQ2FyZCIsInVzZXIiLCJ1c2VybmFtZSIsIkxvYWRpbmdTY3JlZW4iLCJjaGlsZHJlbiIsImxvYWRpbmciLCJSZWRpcmVjdENvbXAiLCJjb25kaXRpb24iLCJocmVmIiwiQmFubmVyIiwib3BlblNldHRpbmdzIiwicHJvZmlsZSIsImZhdkF1dGhvcnMiLCJmb2xsb3dlcnMiLCJjaGFuZ2VGYXZUYWIiLCJmYXZUYWIiLCJzZXRDdXJyZW50VGFiIiwiY29udGV4dCIsImlzRm9sbG93aW5nIiwiZm9sbG93VXNlciIsInVuZm9sbG93VXNlciIsImF1dGgiLCJhdmF0YXIiLCJhdXRob3JzIiwiYmlvZ3JhcGh5IiwiZmFjZWJvb2siLCJ0d2l0dGVyIiwiaW5zdGFncmFtIiwiZGV2aWFudGFydCIsIkNoYXJhY3RlcnMiLCJzZXREYXRhIiwidXNlRWZmZWN0Iiwib3B0aW9ucyIsInZhbHVlIiwiRmF2b3JpdGVzIiwiZmF2cyIsImlzTG9hZGluZyIsImZhdiIsIkZvbGxvd2VycyIsIml0ZW1zIiwiTG9jYXRpb25zIiwiVGFiUGFuZSIsIlRhYnMiLCJTZXR0aW5ncyIsIlNvcnRJbnB1dCIsIml0ZW1EYXRhIiwic29ydEFycmF5IiwibmV3QXJyIiwic29ydCIsImEiLCJiIiwiY3JlYXRlZEF0IiwiRGF0ZSIsInNlY29uZHMiLCJrZXlBIiwidG9Mb3dlckNhc2UiLCJrZXlCIiwiY29uc29sZSIsImxvZyIsInZhbCIsIm9wdGlvbiIsIlN0b3JpZXMiLCJ0YWJzIiwiY2hhbmdlVGFiIiwiY3VycmVudFRhYiIsInRhYiIsImF1dGhDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIlByb3ZpZGVBdXRoIiwidXNlUHJvdmlkZUF1dGgiLCJ1c2VBdXRoIiwidXNlQ29udGV4dCIsInNldFVzZXIiLCJzZXRJc0xvYWRpbmciLCJzaWduaW4iLCJlbWFpbCIsInBhc3N3b3JkIiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJ0aGVuIiwicmVzcG9uc2UiLCJzaWdudXAiLCJjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJkYiIsImNvbGxlY3Rpb24iLCJkb2MiLCJ1aWQiLCJzZXQiLCJsaWtlc0NvdW50IiwiYmFkZ2VzIiwiZmlyZWJhc2UiLCJmaXJlc3RvcmUiLCJGaWVsZFZhbHVlIiwic2VydmVyVGltZXN0YW1wIiwic3VzcGVuZGVkIiwic2lnbm91dCIsInNpZ25PdXQiLCJzZW5kUGFzc3dvcmRSZXNldEVtYWlsIiwiY29uZmlybVBhc3N3b3JkUmVzZXQiLCJjb2RlIiwidW5zdWJzY3JpYmUiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJvblNuYXBzaG90IiwibGlzdGVuZXJzIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJwcmVmZXRjaGVkIiwiY2FjaGVkT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJjYiIsInJvb3RNYXJnaW4iLCJsaXN0ZW5Ub0ludGVyc2VjdGlvbnMiLCJvYnNlcnZlciIsImdldE9ic2VydmVyIiwicm91dGVyIiwiZXJyIiwiZXZlbnQiLCJ0YXJnZXQiLCJub2RlTmFtZSIsImlzTW9kaWZpZWRFdmVudCIsInNjcm9sbCIsImFzIiwicmVwbGFjZSIsInN1Y2Nlc3MiLCJkb2N1bWVudCIsImFyZ3MiLCJrZXkiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJPYmplY3QiLCJwcm9wcyIsImNyZWF0ZVByb3BFcnJvciIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJzaGFsbG93IiwicGFzc0hyZWYiLCJwcmVmZXRjaCIsIm9wdGlvbmFsUHJvcHMiLCJoYXNXYXJuZWQiLCJwIiwicGF0aG5hbWUiLCJyZXNvbHZlZEFzIiwiY2hpbGRFbG0iLCJpc1ByZWZldGNoZWQiLCJjaGlsZCIsIkNoaWxkcmVuIiwiY2hpbGRQcm9wcyIsInJlZiIsImVsIiwic2V0Q2hpbGRFbG0iLCJvbkNsaWNrIiwibGlua0NsaWNrZWQiLCJwcmlvcml0eSIsIkxpbmsiLCJwYXRoIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJwcm9jZXNzIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImdldCIsIlJvdXRlciIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiX3JvdXRlciIsImluc3RhbmNlIiwiQXJyYXkiLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwiYWxsIiwib24iLCJvZmYiLCJlbWl0IiwiaGFuZGxlciIsImJhc2VQYXRoIiwiY2FuY2VsbGVkIiwicHJlZml4IiwiYWRkUGF0aFByZWZpeCIsInVybCIsImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJoYXNCYXNlUGF0aCIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiYXNQYXRobmFtZSIsInBhcmFtcyIsInBhcmFtIiwicmVwbGFjZWQiLCJyZXBlYXQiLCJvcHRpb25hbCIsImVzY2FwZVBhdGhEZWxpbWl0ZXJzIiwicmVzdWx0IiwiZmlsdGVyZWRRdWVyeSIsInF1ZXJ5IiwiYmFzZSIsInVybEFzU3RyaW5nIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImludGVycG9sYXRlQXMiLCJoYXNoIiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwicmVzb2x2ZWRIcmVmIiwicmVzb2x2ZUFzIiwiUEFHRV9MT0FEX0VSUk9SIiwiU3ltYm9sIiwiYWRkQmFzZVBhdGgiLCJyZXNvbHZlSHJlZiIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiY3JlZGVudGlhbHMiLCJyZXMiLCJhdHRlbXB0cyIsImZldGNoUmV0cnkiLCJpc1NlcnZlclJlbmRlciIsIm1hcmtMb2FkaW5nRXJyb3IiLCJjb25zdHJ1Y3RvciIsInJvdXRlIiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93IiwibG9jYWxlIiwibG9jYWxlcyIsImRlZmF1bHRMb2NhbGUiLCJzdGF0ZSIsInN0eWxlU2hlZXRzIiwiX19OX1NTRyIsImluaXRpYWxQcm9wcyIsIl9fTl9TU1AiLCJDb21wb25lbnQiLCJfX05FWFRfREFUQV9fIiwicmVsb2FkIiwiYmFjayIsInByZXBhcmVVcmxBcyIsImlzTG9jYWxVUkwiLCJTVCIsInBlcmZvcm1hbmNlIiwiYWRkTG9jYWxlIiwiY2xlYW5lZEFzIiwiZGVsTG9jYWxlIiwiZGVsQmFzZVBhdGgiLCJwYWdlcyIsIl9fcmV3cml0ZXMiLCJwYXJzZWQiLCJtZXRob2QiLCJwb3RlbnRpYWxIcmVmIiwicGFyc2VkQXMiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsInJvdXRlSW5mbyIsImRlc3RpbmF0aW9uIiwicGFyc2VkSHJlZiIsImFwcENvbXAiLCJlcnJvciIsImNoYW5nZVN0YXRlIiwiX19OIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsInBhZ2UiLCJjYWNoZWRSb3V0ZUluZm8iLCJyZXF1aXJlIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZGF0YUhyZWYiLCJiZWZvcmVQb3BTdGF0ZSIsIm9ubHlBSGFzaENoYW5nZSIsIm5ld0hhc2giLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic2Nyb2xsVG9IYXNoIiwiaWRFbCIsIm5hbWVFbCIsInVybElzTmV3IiwiX3Jlc29sdmVIcmVmIiwiYXBwbHlCYXNlUGF0aCIsImNsZWFuUGF0aG5hbWUiLCJQcm9taXNlIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwiX2dldERhdGEiLCJmbiIsIl9nZXRTdGF0aWNEYXRhIiwiZmV0Y2hOZXh0RGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiQXBwVHJlZSIsImN0eCIsImFib3J0Q29tcG9uZW50TG9hZCIsIm5vdGlmeSIsInNlZ21lbnQiLCJjaGFyIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwic2xhc2hlZFByb3RvY29scyIsInByb3RvY29sIiwidXJsT2JqIiwiaG9zdCIsImhvc3RuYW1lIiwiU3RyaW5nIiwicXVlcnlzdHJpbmciLCJzZWFyY2giLCJURVNUX1JPVVRFIiwiRFVNTVlfQkFTRSIsInJlc29sdmVkQmFzZSIsIm9yaWdpbiIsIm1hdGNoZXJPcHRpb25zIiwic2Vuc2l0aXZlIiwiZGVsaW1pdGVyIiwiY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyIsInN0cmljdCIsImN1c3RvbVJvdXRlIiwia2V5cyIsIm1hdGNoZXJSZWdleCIsInBhdGhUb1JlZ2V4cCIsIm1hdGNoZXIiLCJwYXJzZWREZXN0aW5hdGlvbiIsImRlc3RRdWVyeSIsImRlc3RQYXRoIiwiZGVzdFBhdGhQYXJhbUtleXMiLCJkZXN0UGF0aFBhcmFtcyIsImRlc3RpbmF0aW9uQ29tcGlsZXIiLCJ2YWxpZGF0ZSIsInN0ck9yQXJyYXkiLCJxdWVyeUNvbXBpbGVyIiwicGFyYW1LZXlzIiwiYXBwZW5kUGFyYW1zVG9RdWVyeSIsInNob3VsZEFkZEJhc2VQYXRoIiwibmV3VXJsIiwic2VhcmNoUGFyYW1zIiwiaXNOYU4iLCJpdGVtIiwic3RyaW5naWZ5VXJsUXVlcnlQYXJhbSIsInNlYXJjaFBhcmFtc0xpc3QiLCJjdXN0b21Sb3V0ZU1hdGNoZXIiLCJyZXdyaXRlIiwiZGVzdFJlcyIsInJlIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwibSIsInN0ciIsInNlZ21lbnRzIiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInBhcnNlUGFyYW1ldGVyIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJyb3V0ZUtleXMiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImNsZWFuZWRLZXkiLCJpbnZhbGlkS2V5IiwicGFyc2VJbnQiLCJuYW1lZFJlZ2V4IiwidXNlZCIsInBvcnQiLCJnZXRMb2NhdGlvbk9yaWdpbiIsIkFwcCIsImdldERpc3BsYXlOYW1lIiwicGFnZVByb3BzIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImlzUmVzU2VudCIsInVybE9iamVjdEtleXMiLCJTUCIsIlByb2ZpbGUiLCJnZXRQcm9maWxlIiwiZ2V0VXNlclN0b3JpZXMiLCJnZXRVc2VyQ2hhcmFjdGVycyIsImdldEZhdm9yaXRlQXV0aG9ycyIsImdldEZhdm9yaXRlQ2hhcmFjdGVycyIsImdldEZhdm9yaXRlU3RvcmllcyIsImdldFVzZXJMb2NhdGlvbnMiLCJnZXRGb2xsb3dlcnMiLCJmYXZDaGFyYWN0ZXJzIiwiZmF2U3RvcmllcyIsInNldHRpbmdzIiwic2V0RmF2VGFiIiwiZmF2b3JpdGVTdG9yaWVzIiwic2V0RmF2b3JpdGVTdG9yaWVzIiwiZmF2b3JpdGVDaGFyYWN0ZXJzIiwic2V0RmF2b3JpdGVDaGFyYWN0ZXJzIiwiZmlsdGVyIiwicyIsInB1YmxpYyIsImF1dGhvcklkIiwibWFwU3RhdGVUb1Byb3BzIiwib3duUHJvcHMiLCJ1c2VyU3RvcmllcyIsInVzZXJDaGFyYWN0ZXJzIiwidXNlckxvY2F0aW9ucyIsImNvbm5lY3QiLCJnZXRDaGFyYWN0ZXIiLCJkaXNwYXRjaCIsInJlbEFyciIsInN0b3J5QXJyIiwiZXhpc3RzIiwicmVsYXRpdmVzIiwicmVsYXRpdmVzQXJyIiwicmVsUXVlcmllcyIsImZvckVhY2giLCJyZWwiLCJmaW5kIiwiY2hhcmFjdGVyX2lkIiwibWFpblF1ZXJ5Iiwid2hlcmUiLCJzZWNvbmRhcnlRdWVyeSIsImFsbFN0b3J5IiwiZG9jcyIsImNvbmNhdCIsInR5cGVzIiwiR0VUX0NIQVJBQ1RFUiIsInBheWxvYWQiLCJyIiwiY3VycmVudFVzZXIiLCJjaGFyYUV4aXN0cyIsImFkZENoYXJhY3RlciIsIkFERF9DSEFSQUNURVIiLCJjaGFyYUlkIiwiYWRkIiwibGlrZXMiLCJkaXNsaWtlcyIsImltYWdlTmFtZSIsInN0b3JhZ2UiLCJwdXQiLCJnZXREb3dubG9hZFVSTCIsInVwZGF0ZSIsImNoYXJhY3RlcklkIiwiY2F0Y2giLCJlZGl0Q2hhcmFjdGVyIiwiRURJVF9DSEFSQUNURVIiLCJsb2FkaW5nQ2hhcmFjdGVyIiwiZGVsZXRlQ2hhcmFjdGVyIiwiREVMRVRFX0NIQVJBQ1RFUiIsImJhdGNoIiwiZGVsZXRlIiwic2Vjb25kYXJ5Q2hhcmFjdGVycyIsImxpa2UiLCJjb21taXQiLCJkZWxldGVkIiwidXNlcklkIiwiR0VUX1VTRVJfQ0hBUkFDVEVSUyIsImZhdkFyciIsImZhdlVzZXJzIiwiR0VUX0ZBVk9SSVRFX0NIQVJBQ1RFUlMiLCJnZXRDaGFyYWN0ZXJzSW5TdG9yeSIsIkdFVF9TVE9SWV9DSEFSQUNURVJTIiwibWFpbkFyciIsInN1Ym1pdENoYXJhdGVyRmVlZGJhY2siLCJpbmZvIiwiYWxyZWFkeVBvc3RlZCIsImVtYWlsVmVyaWZpZWQiLCJjb250ZW50IiwiU1VCTUlUX0NPTU1FTlQiLCJnZXRDaGFyYWN0ZXJDb21tZW50cyIsImNvbW1lbnRzIiwib3JkZXJCeSIsImNvbW0iLCJ1c2VyUXVlcmllcyIsImNvbW1lbnQiLCJ1c2VySW1hZ2UiLCJkIiwidXNlckNvbW1lbnQiLCJHRVRfQ09NTUVOVFMiLCJsb2FkaW5nQ29tbWVudHMiLCJkZWxldGVDaGFyYWN0ZXJDb21tZW50IiwicmF0ZUNvbW1lbnQiLCJjb21tZW50SWQiLCJSQVRFX0NPTU1FTlQiLCJyYXRlZCIsImlzTGlrZWQiLCJsaWtlZEJ5IiwiaW5jbHVkZXMiLCJpc0Rpc2xpa2VkIiwiZGlzbGlrZWRCeSIsImdldFN0b3J5IiwibWFpbiIsInNlY29uZGFyeSIsIm1haW5SZXMiLCJzZWNvbmRhcnlSZXMiLCJkb2N1IiwiR0VUX1NUT1JZIiwic3RvcnlFeGlzdHMiLCJESVNQQVRDSF9FUlJPUiIsImFkZFN0b3J5IiwiQUREX1NUT1JZIiwib25lU2hvdCIsImZlYXR1cmVkIiwibm90ZSIsImxhc3RVcGRhdGVkIiwic3BsaXQiLCJqb2luIiwiZWRpdFN0b3J5IiwiRURJVF9TVE9SWSIsImxvYWRpbmdTdG9yeSIsImxvY2F0aW9uUXVlcnkiLCJkZWxldGVTdG9yeSIsIkRFTEVURV9TVE9SWSIsImNoYXB0ZXJzVG9EZWxldGUiLCJsaWtlc1RvRGVsZXRlIiwibG9jYXRpb25zVG9EZWxldGUiLCJjaGFwIiwibG9jIiwiR0VUX1VTRVJfU1RPUklFUyIsIkdFVF9GQVZPUklURV9TVE9SSUVTIiwiaXNTdG9yeUZhdm9yaXRlIiwic25hcHNob3QiLCJhbnN3ZXIiLCJJU19TVE9SWV9GQVZPUklURSIsImxvYWRpbmdGYXYiLCJhZGRTdG9yeVRvRmF2b3JpdGUiLCJzZW5kZXIiLCJzZW5kZXJJZCIsInJlbW92ZVN0b3J5RnJvbUZhdm9yaXRlIiwiZ2V0U3RvcnlDaGFyYWN0ZXJzIiwiYWRkQ2hhcHRlciIsImNoYXBJZCIsIkFERF9DSEFQVEVSIiwidm90ZXJzIiwidm90ZXNDb3VudCIsImVkaXRDaGFwdGVyIiwiY2hhcGlkIiwiRURJVF9DSEFQVEVSIiwiZGVsZXRlQ2hhcHRlciIsIkRFTEVURV9DSEFQVEVSIiwibG9hZGluZ0NoYXB0ZXIiLCJjb21tZW50c1RvRGVsZXRlIiwiY2hhcHRlciIsImNoYXJhY3RlcnNGcm9tQ2hhcHRlciIsImNoYXJhY3RlcnNGcm9tU3RvcnkiLCJ0aW1lcyIsImdldENoYXB0ZXIiLCJjaGFyYVF1ZXJ5IiwibG9jUXVlcnkiLCJjaGFyYWN0ZXJzSW5DaGFwZXIiLCJsb2NhdGlvbnNJbkNoYXBlciIsImwiLCJHRVRfQ0hBUFRFUiIsImNoYXB0ZXJFeGlzdHMiLCJnZXRDaGFwdGVycyIsImFyciIsIm51bWJlciIsIkdFVF9DSEFQVEVSUyIsImFkZExvY2F0aW9uIiwiQUREX0xPQ0FUSU9OIiwibG9hZGluZ0xvYyIsImxvY0lkIiwiZWRpdExvY2F0aW9uIiwiZ2V0TG9jYXRpb24iLCJHRVRfTE9DQVRJT04iLCJsb2NhdGlvbkV4aXN0cyIsImRlbGV0ZUxvY2F0aW9uIiwiR0VUX1VTRVJfTE9DQVRJT05TIiwiZ2V0U3RvcnlMb2NhdGlvbnMiLCJHRVRfU1RPUllfTE9DQVRJT05TIiwiZ2V0Q29tbWVudHMiLCJzbmFwIiwicXVlcmllcyIsInN1Ym1pdENvbW1lbnQiLCJjaGFwdGVySWQiLCJkZWxldGVDb21tZW50IiwibG9nX2luIiwiR0VUX1BST0ZJTEUiLCJhZGRlZE9uIiwicmVjaXBpZW50IiwiR0VUX0ZBVk9SSVRFX0FVVEhPUlMiLCJHRVRfRk9MTE9XRVJTIiwiZ2V0SXNGb2xsb3dpbmciLCJJU19GT0xMT1dJTkciLCJpc0Zhdm9yaXRlIiwibmV3Rm9sbG93ZXIiLCJ3YXJuaW5nIiwicHJvZENvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJkYXRhYmFzZVVSTCIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwiRklSRUJBU0VfQVBQX0lEIiwiZGV2Q29uZmlnIiwiY29uZmlnIiwiYXBwcyIsImluaXRpYWxpemVBcHAiLCJDQVRFR09SSUVTIiwiQ09QWVJJR0hUUyIsIkxBTkdVQUdFUyIsIlNUQVRVUyIsIkxPR0lOIiwiUkVHSVNURVIiLCJHRVRfQ0hBUkFDVEVSX0NPTU1FTlRTIiwiRURJVF9MT0NBVElPTiIsIkRFTEVURV9MT0NBVElPTiIsInBlcnNvbiIsImNvdmVyIiwicG9zdGVyIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUN4RkEsd0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7QUFDQSxNQUFNQSxJQUFJLEdBQUcsQ0FBQztBQUFFQyxPQUFGO0FBQVNDO0FBQVQsQ0FBRCxLQUFxQjtBQUFBOztBQUNoQyxTQUNFO0FBQVEsYUFBUyxFQUFDLGlCQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxPQUFH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QUFFO0FBQWxDLENBbkR1QixFQW9EdkI7QUFBRTNELE1BQUksRUFBRSxVQUFSO0FBQW9CMkQsT0FBSyxFQUFFO0FBQTNCLENBcER1QixFQXFEdkI7QUFBRTNELE1BQUksRUFBRSxTQUFSO0FBQW1CMkQsT0FBSyxFQUFFO0FBQTFCLENBckR1QixFQXNEdkI7QUFBRTNELE1BQUksRUFBRSxVQUFSO0FBQW9CMkQsT0FBSyxFQUFFO0FBQTNCLENBdER1QixFQXVEdkI7QUFBRTNELE1BQUksRUFBRSxNQUFSO0FBQWdCMkQsT0FBSyxFQUFFO0FBQXZCLENBdkR1QixFQXdEdkI7QUFBRTNELE1BQUksRUFBRSxPQUFSO0FBQWlCMkQsT0FBSyxFQUFFO0FBQXhCLENBeER1QixFQXlEdkI7QUFBRTNELE1BQUksRUFBRSxRQUFSO0FBQWtCMkQsT0FBSyxFQUFFO0FBQXpCLENBekR1QixFQTBEdkI7QUFBRTNELE1BQUksRUFBRSxPQUFSO0FBQWlCMkQsT0FBSyxFQUFFO0FBQXhCLENBMUR1QixFQTJEdkI7QUFBRTNELE1BQUksRUFBRSxXQUFSO0FBQXFCMkQsT0FBSyxFQUFFO0FBQTVCLENBM0R1QixFQTREdkI7QUFBRTNELE1BQUksRUFBRSxVQUFSO0FBQW9CMkQsT0FBSyxFQUFFO0FBQTNCLENBNUR1QixFQTZEdkI7QUFBRTNELE1BQUksRUFBRSxTQUFSO0FBQW1CMkQsT0FBSyxFQUFFO0FBQTFCLENBN0R1QixFQThEdkI7QUFBRTNELE1BQUksRUFBRSxXQUFSO0FBQXFCMkQsT0FBSyxFQUFFO0FBQTVCLENBOUR1QixFQStEdkI7QUFBRTNELE1BQUksRUFBRSxVQUFSO0FBQW9CMkQsT0FBSyxFQUFFO0FBQTNCLENBL0R1QixFQWdFdkI7QUFBRTNELE1BQUksRUFBRSxRQUFSO0FBQWtCMkQsT0FBSyxFQUFFO0FBQXpCLENBaEV1QixFQWlFdkI7QUFBRTNELE1BQUksRUFBRSxhQUFSO0FBQXVCMkQsT0FBSyxFQUFFO0FBQTlCLENBakV1QixFQWtFdkI7QUFBRTNELE1BQUksRUFBRSxZQUFSO0FBQXNCMkQsT0FBSyxF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QUFFO0FBQXhCLENBOUh1QixFQStIdkI7QUFBRTNELE1BQUksRUFBRSxVQUFSO0FBQW9CMkQsT0FBSyxFQUFFO0FBQTNCLENBL0h1QixFQWdJdkI7QUFBRTNELE1BQUksRUFBRSxTQUFSO0FBQW1CMkQsT0FBSyxFQUFFO0FBQTFCLENBaEl1QixFQWlJdkI7QUFBRTNELE1BQUksRUFBRSxNQUFSO0FBQWdCMkQsT0FBSyxFQUFFO0FBQXZCLENBakl1QixFQWtJdkI7QUFBRTNELE1BQUksRUFBRSxRQUFSO0FBQWtCMkQsT0FBSyxFQUFFO0FBQXpCLENBbEl1QixFQW1JdkI7QUFBRTNELE1BQUksRUFBRSxRQUFSO0FBQWtCMkQsT0FBSyxFQUFFO0FBQXpCLENBbkl1QixFQW9JdkI7QUFBRTNELE1BQUksRUFBRSxZQUFSO0FBQXNCMkQsT0FBSyxFQUFFO0FBQTdCLENBcEl1QixFQXFJdkI7QUFBRTNELE1BQUksRUFBRSxTQUFSO0FBQW1CMkQsT0FBSyxFQUFFO0FBQTFCLENBckl1QixFQXNJdkI7QUFBRTNELE1BQUksRUFBRSxZQUFSO0FBQXNCMkQsT0FBSyxFQUFFO0FBQTdCLENBdEl1QixFQXVJdkI7QUFBRTNELE1BQUksRUFBRSxTQUFSO0FBQW1CMkQsT0FBSyxFQUFFO0FBQTFCLENBdkl1QixFQXdJdkI7QUFBRTNELE1BQUksRUFBRSxTQUFSO0FBQW1CMkQsT0FBSyxFQUFFO0FBQTFCLENBeEl1QixFQXlJdkI7QUFBRTNELE1BQUksRUFBRSxVQUFSO0FBQW9CMkQsT0FBSyxFQUFFO0FBQTNCLENBekl1QixFQTBJdkI7QUFBRTNELE1BQUksRUFBRSxTQUFSO0FBQW1CMkQsT0FBSyxFQUFFO0FBQTFCLENBMUl1QixFQTJJdkI7QUFBRTNELE1BQUksRUFBRSxhQUFSO0FBQXVCMkQsT0FBSyxFQUFFO0FBQTlCLENBM0l1QixFQTRJdkI7QUFBRTNELE1BQUksRUFBRSxVQUFSO0FBQW9CMkQsT0FBSyxFQUFFO0FBQTNCLENBNUl1QixFQTZJdkI7QUFBRTNELE1BQUksRUFBRSxXQUFSO0FBQXFCMkQsT0FBSyxF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QUFFO0FBQXRCLENBM0t1QixFQTRLdkI7QUFBRTNELE1BQUksRUFBRSxVQUFSO0FBQW9CMkQsT0FBSyxFQUFFO0FBQTNCLENBNUt1QixFQTZLdkI7QUFBRTNELE1BQUksRUFBRSxRQUFSO0FBQWtCMkQsT0FBSyxFQUFFO0FBQXpCLENBN0t1QixFQThLdkI7QUFBRTNELE1BQUksRUFBRSxXQUFSO0FBQXFCMkQsT0FBSyxFQUFFO0FBQTVCLENBOUt1QixFQStLdkI7QUFBRTNELE1BQUksRUFBRSxNQUFSO0FBQWdCMkQsT0FBSyxFQUFFO0FBQXZCLENBL0t1QixFQWdMdkI7QUFBRTNELE1BQUksRUFBRSxPQUFSO0FBQWlCMkQsT0FBSyxFQUFFO0FBQXhCLENBaEx1QixFQWlMdkI7QUFBRTNELE1BQUksRUFBRSxPQUFSO0FBQWlCMkQsT0FBSyxFQUFFO0FBQXhCLENBakx1QixFQWtMdkI7QUFBRTNELE1BQUksRUFBRSxhQUFSO0FBQXVCMkQsT0FBSyxFQUFFO0FBQTlCLENBbEx1QixFQW1MdkI7QUFBRTNELE1BQUksRUFBRSxTQUFSO0FBQW1CMkQsT0FBSyxFQUFFO0FBQTFCLENBbkx1QixFQW9MdkI7QUFBRTNELE1BQUksRUFBRSxTQUFSO0FBQW1CMkQsT0FBSyxFQUFFO0FBQTFCLENBcEx1QixFQXFMdkI7QUFBRTNELE1BQUksRUFBRSxPQUFSO0FBQWlCMkQsT0FBSyxFQUFFO0FBQXhCLENBckx1QixFQXNMdkI7QUFBRTNELE1BQUksRUFBRSxPQUFSO0FBQWlCMkQsT0FBSyxFQUFFO0FBQXhCLENBdEx1QixFQXVMdkI7QUFBRTNELE1BQUksRUFBRSxTQUFSO0FBQW1CMkQsT0FBSyxFQUFFO0FBQTFCLENBdkx1QixFQXdMdkI7QUFBRTNELE1BQUksRUFBRSxRQUFSO0FBQWtCMkQsT0FBSyxFQUFFO0FBQXpCLENBeEx1QixFQXlMdkI7QUFBRTNELE1BQUksRUFBRSxRQUFSO0FBQWtCMkQsT0FBSyxFQUFFO0FBQXpCLENBekx1QixFQTBMdkI7QUFBRTNELE1BQUksRUFBRSxTQUFSO0FBQW1CMkQsT0FBSyxFQUFFO0FBQTFCLENBMUx1QixFQTJMdkI7QUFBRTNELE1BQUksRUFBRSxNQUFSO0FBQWdCMkQsT0FBSyxFQUFFO0FBQXZCLENBM0x1QixDQUFsQjtBQThMQSxNQUFNb2tCLE1BQU0sR0FBRyxDQUNwQjtBQUFFL25CLE1BQUksRUFBRSxhQUFSO0FBQXVCMkQsT0FBSyxFQUFFO0FBQTlCLENBRG9CLEVBRXBCO0FBQUUzRCxNQUFJLEVBQUUsV0FBUjtBQUFxQjJELE9BQUssRUFBRTtBQUE1QixDQUZvQixFQUdwQjtBQUFFM0QsTUFBSSxFQUFFLFdBQVI7QUFBcUIyRCxPQUFLLEVBQUU7QUFBNUIsQ0FIb0IsQ0FBZixDLENBTVA7O0FBQ08sTUFBTWtaLEtBQUssR0FBRztBQUNuQndKLGFBQVcsRUFBRSxhQURNO0FBRW5CMkIsT0FBSyxFQUFFLE9BRlk7QUFHbkJDLFVBQVEsRUFBRSxVQUhTO0FBSW5CN0csV0FBUyxFQUFFLFdBSlE7QUFLbkJzQixrQkFBZ0IsRUFBRSxrQkFMQztBQU1uQkMsc0JBQW9CLEVBQUUsc0JBTkg7QUFPbkJuQixXQUFTLEVBQUUsV0FQUTtBQVFuQlEsWUFBVSxFQUFFLFlBUk87QUFTbkJJLGNBQVksRUFBRSxjQVRLO0FBVW5CVyxtQkFBaUIsRUFBRSxtQkFWQTtBQVduQjRELGNBQVksRUFBRSxjQVhLO0FBWW5CL0IsYUFBVyxFQUFFLGFBWk07QUFhbkJwQixhQUFXLEVBQUUsYUFiTTtBQWNuQkssY0FBWSxFQUFFLGNBZEs7QUFlbkJFLGdCQUFjLEVBQUUsZ0JBZkc7QUFnQm5Ca0IsY0FBWSxFQUFFLGNBaEJLO0FBaUJuQjdILGVBQWEsRUFBRSxlQWpCSTtBQWtCbkJOLGVBQWEsRUFBRSxlQWxCSTtBQW1CbkJtQixnQkFBYyxFQUFFLGdCQW5CRztBQW9CbkJHLGtCQUFnQixFQUFFLGtCQXBCQztBQXFCbkJRLHFCQUFtQixFQUFFLHFCQXJCRjtBQXNCbkJzSix3QkFBc0IsRUFBRSx3QkF0Qkw7QUF1Qm5CdkMsb0JBQWtCLEVBQUUsb0JBdkJEO0FBd0JuQjVHLHlCQUF1QixFQUFFLHlCQXhCTjtBQXlCbkJFLHNCQUFvQixFQUFFLHNCQXpCSDtBQTBCbkJrRyxjQUFZLEVBQUUsY0ExQks7QUEyQm5CSyxjQUFZLEVBQUUsY0EzQks7QUE0Qm5CMkMsZUFBYSxFQUFFLGVBNUJJO0FBNkJuQkMsaUJBQWUsRUFBRSxpQkE3QkU7QUE4Qm5CbEksY0FBWSxFQUFFLGNBOUJLO0FBK0JuQnNHLHNCQUFvQixFQUFFLHNCQS9CSDtBQWdDbkJYLHFCQUFtQixFQUFFLHFCQWhDRjtBQWlDbkJZLGVBQWEsRUFBRSxlQWpDSTtBQWtDbkJuRixnQkFBYyxFQUFFLGdCQWxDRztBQW1DbkI5QixnQkFBYyxFQUFFLGdCQW5DRztBQW9DbkJlLGNBQVksRUFBRTtBQXBDSyxDQUFkO0FBdUNBLE1BQU04RixXQUFXLEdBQUcsYUFBcEI7QUFDQSxNQUFNMkIsS0FBSyxHQUFHLE9BQWQ7QUFDQSxNQUFNQyxRQUFRLEdBQUcsVUFBakI7QUFFQSxNQUFNN0csU0FBUyxHQUFHLFdBQWxCO0FBQ0EsTUFBTXNCLGdCQUFnQixHQUFHLGtCQUF6QjtBQUNBLE1BQU1DLG9CQUFvQixHQUFHLHNCQUE3QjtBQUNBLE1BQU1uQixTQUFTLEdBQUcsV0FBbEI7QUFDQSxNQUFNUSxVQUFVLEdBQUcsWUFBbkI7QUFDQSxNQUFNSSxZQUFZLEdBQUcsY0FBckI7QUFDQSxNQUFNVyxpQkFBaUIsR0FBRyxtQkFBMUI7QUFFQSxNQUFNNkIsV0FBVyxHQUFHLGFBQXBCO0FBQ0EsTUFBTXBCLFdBQVcsR0FBRyxhQUFwQjtBQUNBLE1BQU1LLFlBQVksR0FBRyxjQUFyQjtBQUNBLE1BQU1FLGNBQWMsR0FBRyxnQkFBdkI7QUFDQSxNQUFNa0IsWUFBWSxHQUFHLGNBQXJCO0FBRUEsTUFBTTdILGFBQWEsR0FBRyxlQUF0QjtBQUNBLE1BQU1OLGFBQWEsR0FBRyxlQUF0QjtBQUNBLE1BQU1tQixjQUFjLEdBQUcsZ0JBQXZCO0FBQ0EsTUFBTVcsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsTUFBTStHLGtCQUFrQixHQUFHLG9CQUEzQjtBQUNBLE1BQU01Ryx1QkFBdUIsR0FBRyx5QkFBaEM7QUFDQSxNQUFNRSxvQkFBb0IsR0FBRyxzQkFBN0I7QUFFQSxNQUFNa0csWUFBWSxHQUFHLGNBQXJCO0FBRUEsTUFBTXFCLG9CQUFvQixHQUFHLHNCQUE3QjtBQUNBLE1BQU1DLGFBQWEsR0FBRyxlQUF0QjtBQUVBLE1BQU1uRixjQUFjLEdBQUcsZ0JBQXZCLEM7Ozs7Ozs7Ozs7OztBQ3BTUDtBQUFBO0FBQU8sTUFBTXBrQixLQUFLLEdBQUc7QUFDbkJtckIsUUFBTSxFQUNKLHlFQUZpQjtBQUduQkMsT0FBSyxFQUNILGdIQUppQjtBQUtuQnRvQixNQUFJLEVBQUUsZUFMYTtBQU1uQnVvQixRQUFNLEVBQUUsa0VBTlc7QUFPbkJ2bEIsUUFBTSxFQUFFLHlEQVBXO0FBUW5CN0YsU0FBTyxFQUFFO0FBUlUsQ0FBZCxDOzs7Ozs7Ozs7OztBQ0FQLDhDOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHFEIiwiZmlsZSI6InBhZ2VzL3Byb2ZpbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL3Byb2ZpbGUvaW5kZXguanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsImltcG9ydCB7IGR1bW15IH0gZnJvbSBcIi4uLy4uL3V0aWxzL2R1bW15XCI7XHJcbmNvbnN0IENhcmQgPSAoeyBzdG9yeSwgdHlwZSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwiY2FyZCBzdG9yeS1jYXJkXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxpbWcgc3JjPXtzdG9yeS5iYW5uZXIgPyBzdG9yeS5iYW5uZXIgOiBkdW1teS5ub0ltYWdlfSBhbHQ9XCJpbWFnZVwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZmlnY2FwdGlvbj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0YWdcIj5EcmFtYTwvc3Bhbj5cclxuICAgICAgICB7dHlwZSAhPT0gXCJwcml2YXRlUHJvZmlsZVwiICYmIChcclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImF1dGhvclwiPkF1dGhvcjoge3N0b3J5LmF1dGhvck5hbWV9PC9zcGFuPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPGgzPntzdG9yeT8udGl0bGV9PC9oMz5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAge3N0b3J5Py5zdW1tYXJ5Py5sZW5ndGggPiAxNTBcclxuICAgICAgICAgICAgPyBgJHtzdG9yeS5zdW1tYXJ5LnNsaWNlKDAsIDE1MCl9Li4uYFxyXG4gICAgICAgICAgICA6IHN0b3J5LnN1bW1hcnl9XHJcbiAgICAgICAgICB7IXN0b3J5LnN1bW1hcnkgJiYgXCJObyBzdW1tYXJ5IHlldFwifVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdW50XCI+XHJcbiAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibnVtYmVyXCI+e3N0b3J5LmNoYXB0ZXJzQ291bnR9IDwvcD57XCIgXCJ9XHJcbiAgICAgICAgICAgIDxpb24taWNvbiBuYW1lPVwiYm9va1wiPjwvaW9uLWljb24+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibnVtYmVyXCI+XHJcbiAgICAgICAgICAgICAge3N0b3J5LnNlY29uZGFyeUFyci5sZW5ndGggKyBzdG9yeS5tYWluQ2hhcmFjdGVycy5sZW5ndGh9e1wiIFwifVxyXG4gICAgICAgICAgICA8L3A+e1wiIFwifVxyXG4gICAgICAgICAgICA8aW9uLWljb24gbmFtZT1cInBlb3BsZVwiPjwvaW9uLWljb24+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibnVtYmVyXCI+e3N0b3J5LmNvbW1lbnRzQ291bnR9IDwvcD57XCIgXCJ9XHJcbiAgICAgICAgICAgIDxpb24taWNvbiBuYW1lPVwiY2hhdGJ1YmJsZVwiPjwvaW9uLWljb24+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZmlnY2FwdGlvbj5cclxuICAgIDwvZmlndXJlPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgeyBkdW1teSB9IGZyb20gXCIuLi8uLi91dGlscy9kdW1teVwiO1xyXG5cclxuY29uc3QgQ2hhcmFjdGVyQ2FyZCA9ICh7IGNoYXJhY3RlciwgdHlwZSwgcmVtb3ZlQ2hhcmFjdGVyIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGZpZ3VyZVxyXG4gICAgICBjbGFzc05hbWU9e2BjYXJkIGNoYXJhY3Rlci1jYXJkICR7dHlwZSA/IHR5cGUgOiBcIlwifWB9XHJcbiAgICAgIGRhdGEtYW9zPVwiem9vbS1pbi11cFwiXHJcbiAgICA+XHJcbiAgICAgIHt0eXBlID09PSBcImFkZFwiICYmIChcclxuICAgICAgICA8c3BhblxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gcmVtb3ZlQ2hhcmFjdGVyKGNoYXJhY3Rlci5pZCl9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJyZW1vdmUtYnRuXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICB4XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICApfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZy1jb250YWluZXJcIj5cclxuICAgICAgICA8aW1nIHNyYz17Y2hhcmFjdGVyPy5pbWFnZSA/IGNoYXJhY3Rlci5pbWFnZSA6IGR1bW15Lm5vSW1hZ2V9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZmlnY2FwdGlvbj5cclxuICAgICAgICA8aDM+e2Ake2NoYXJhY3Rlcj8uZmlyc3RuYW1lfSAke2NoYXJhY3Rlcj8ubGFzdG5hbWV9YH08L2gzPlxyXG4gICAgICAgIHsodHlwZSA9PT0gXCJmYXZvcml0ZXNcIiB8fCB0eXBlID09PSBcInN0b3J5XCIpICYmIChcclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImF1dGhvclwiPkF1dGhvcjoge2NoYXJhY3Rlcj8uYXV0aG9yTmFtZX08L3NwYW4+XHJcbiAgICAgICAgKX1cclxuICAgICAgICB7KHR5cGUgPT09IFwiYWRkXCIgfHwgdHlwZSA9PT0gXCJzaG93XCIpICYmIChcclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImF1dGhvclwiPlJlbGF0aW9uOiB7Y2hhcmFjdGVyPy5yZWxhdGlvbn08L3NwYW4+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9maWdjYXB0aW9uPlxyXG4gICAgPC9maWd1cmU+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXJhY3RlckNhcmQ7XHJcbiIsImltcG9ydCB7IFJvdywgQ29sLCBFbXB0eSB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IE1hc29ucnksIHsgUmVzcG9uc2l2ZU1hc29ucnkgfSBmcm9tIFwicmVhY3QtcmVzcG9uc2l2ZS1tYXNvbnJ5XCI7XHJcblxyXG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi4vY29tbW9uL0NhcmRcIjtcclxuaW1wb3J0IFVzZXJDYXJkIGZyb20gXCIuLi9jb21tb24vVXNlckNhcmRcIjtcclxuaW1wb3J0IENoYXJhY3RlckNhcmQgZnJvbSBcIi4uL2NvbW1vbi9DaGFyYWN0ZXJDYXJkXCI7XHJcbmltcG9ydCBMb2NhdGlvbkNhcmQgZnJvbSBcIi4uL2NvbW1vbi9Mb2NhdGlvbkNhcmRcIjtcclxuXHJcbmNvbnN0IFN0b3JpZXNHcmlkID0gKHsgc3RvcmllcywgdHlwZSwgZ3V0dGVyLCBjb2x1bW5zQ291bnRCcmVha1BvaW50cyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxSZXNwb25zaXZlTWFzb25yeSBjb2x1bW5zQ291bnRCcmVha1BvaW50cz17Y29sdW1uc0NvdW50QnJlYWtQb2ludHN9PlxyXG4gICAgICA8TWFzb25yeSBndXR0ZXI9e2d1dHRlcn0+XHJcbiAgICAgICAge3N0b3JpZXMubGVuZ3RoID4gMCA/IChcclxuICAgICAgICAgIHN0b3JpZXMubWFwKChzdG9yeSkgPT4gKFxyXG4gICAgICAgICAgICA8TGluayBrZXk9e3N0b3J5LmlkfSBocmVmPXtgL3N0b3J5LyR7c3RvcnkuaWR9YH0+XHJcbiAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZCBzdG9yeT17c3Rvcnl9IHR5cGU9e3R5cGV9IC8+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICApKVxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8RW1wdHlcclxuICAgICAgICAgICAgaW1hZ2U9e0VtcHR5LlBSRVNFTlRFRF9JTUFHRV9TSU1QTEV9XHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiTm8gc3RvcmllcyB5ZXRcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApfVxyXG4gICAgICA8L01hc29ucnk+XHJcbiAgICA8L1Jlc3BvbnNpdmVNYXNvbnJ5PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBVc2VyR3JpZCA9ICh7IHVzZXJzLCBsZywgeHMsIHNtLCBtZCwgZ3V0dGVyIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFJvdyBndXR0ZXI9e2d1dHRlcn0+XHJcbiAgICAgIHt1c2Vycy5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgIHVzZXJzLm1hcCgodSkgPT4gKFxyXG4gICAgICAgICAgPENvbCBrZXk9e3UuaWR9IGxnPXtsZ30gbWQ9e21kfSBzbT17c219IHhzPXt4c30+XHJcbiAgICAgICAgICAgIDxVc2VyQ2FyZCB1c2VyPXt1fSAvPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgKSlcclxuICAgICAgKSA6IChcclxuICAgICAgICA8RW1wdHlcclxuICAgICAgICAgIGltYWdlPXtFbXB0eS5QUkVTRU5URURfSU1BR0VfU0lNUExFfVxyXG4gICAgICAgICAgZGVzY3JpcHRpb249XCJObyBmb2xsb3dlcnMgeWV0XCJcclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG4gICAgPC9Sb3c+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IExvY2F0aW9uR3JpZCA9ICh7XHJcbiAgbG9jYXRpb25zLFxyXG4gIGd1dHRlcixcclxuICB4bCxcclxuICB4eGwsXHJcbiAgbGcsXHJcbiAgbWQsXHJcbiAgc20sXHJcbiAgeHMsXHJcbiAgdHlwZSxcclxuICBjb2x1bW5zQ291bnRCcmVha1BvaW50cyxcclxufSkgPT4ge1xyXG4gIHJldHVybiBsb2NhdGlvbnMubGVuZ3RoID4gMCA/IChcclxuICAgIDxSZXNwb25zaXZlTWFzb25yeSBjb2x1bW5zQ291bnRCcmVha1BvaW50cz17Y29sdW1uc0NvdW50QnJlYWtQb2ludHN9PlxyXG4gICAgICA8TWFzb25yeSBndXR0ZXI9e2d1dHRlcn0+XHJcbiAgICAgICAge2xvY2F0aW9ucy5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgICAgbG9jYXRpb25zLm1hcCgoYykgPT4gPExvY2F0aW9uQ2FyZCBsb2NhdGlvbj17Y30gdHlwZT17dHlwZX0gLz4pXHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxFbXB0eVxyXG4gICAgICAgICAgICBpbWFnZT17RW1wdHkuUFJFU0VOVEVEX0lNQUdFX1NJTVBMRX1cclxuICAgICAgICAgICAgZGVzY3JpcHRpb249XCJObyBjaGFyYWN0ZXJzIHlldFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvTWFzb25yeT5cclxuICAgIDwvUmVzcG9uc2l2ZU1hc29ucnk+XHJcbiAgKSA6IChcclxuICAgIC8vICAgPFJvdyBndXR0ZXI9e2d1dHRlcn0+XHJcbiAgICAvLyAgICAge2xvY2F0aW9ucy5tYXAoKGxvYykgPT4gKFxyXG4gICAgLy8gICAgICAgPENvbCB4bD17eGx9IHh4bD17eHhsfSB4cz17eHN9IHNtPXtzbX0gbWQ9e21kfSBsZz17bGd9IGtleT17bG9jLmlkfT5cclxuICAgIC8vICAgICAgICAgPExvY2F0aW9uQ2FyZCB0eXBlPXt0eXBlfSBsb2NhdGlvbj17bG9jfSAvPlxyXG4gICAgLy8gICAgICAgPC9Db2w+XHJcbiAgICAvLyAgICAgKSl9XHJcbiAgICAvLyAgIDwvUm93PlxyXG4gICAgPEVtcHR5XHJcbiAgICAgIGltYWdlPXtFbXB0eS5QUkVTRU5URURfSU1BR0VfU0lNUExFfVxyXG4gICAgICBkZXNjcmlwdGlvbj1cIk5vIGxvY2F0aW9ucyB5ZXRcIlxyXG4gICAgLz5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgQ2hhcmFjdGVyR3JpZCA9ICh7XHJcbiAgZ3V0dGVyLFxyXG4gIHh4bCxcclxuICB4bCxcclxuICBsZyxcclxuICBtZCxcclxuICBzbSxcclxuICB4cyxcclxuICBjaGFyYWN0ZXJzLFxyXG4gIHR5cGUsXHJcbiAgY29sdW1uc0NvdW50QnJlYWtQb2ludHMsXHJcbn0pID0+IHtcclxuICByZXR1cm4gY2hhcmFjdGVycy5sZW5ndGggPiAwID8gKFxyXG4gICAgPFJlc3BvbnNpdmVNYXNvbnJ5IGNvbHVtbnNDb3VudEJyZWFrUG9pbnRzPXtjb2x1bW5zQ291bnRCcmVha1BvaW50c30+XHJcbiAgICAgIDxNYXNvbnJ5IGd1dHRlcj17Z3V0dGVyfT5cclxuICAgICAgICB7Y2hhcmFjdGVycy5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgICAgY2hhcmFjdGVycy5tYXAoKGMpID0+IChcclxuICAgICAgICAgICAgPExpbmsga2V5PXtjLmlkfSBocmVmPXtgL2NoYXJhY3Rlci8ke2MuaWR9YH0+XHJcbiAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICA8Q2hhcmFjdGVyQ2FyZCBjaGFyYWN0ZXI9e2N9IHR5cGU9e3R5cGV9IC8+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICApKVxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8RW1wdHlcclxuICAgICAgICAgICAgaW1hZ2U9e0VtcHR5LlBSRVNFTlRFRF9JTUFHRV9TSU1QTEV9XHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiTm8gY2hhcmFjdGVycyB5ZXRcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApfVxyXG4gICAgICA8L01hc29ucnk+XHJcbiAgICA8L1Jlc3BvbnNpdmVNYXNvbnJ5PlxyXG4gICkgOiAoXHJcbiAgICAvLyA8Um93IGd1dHRlcj17Z3V0dGVyfT5cclxuICAgIC8vICAge2NoYXJhY3RlcnM/Lm1hcCgoYykgPT4gKFxyXG4gICAgLy8gICAgIDxDb2wga2V5PXtjLmlkfSB4eGw9e3h4bH0geGw9e3hsfSBsZz17bGd9IG1kPXttZH0gc209e3NtfSB4cz17eHN9PlxyXG4gICAgLy8gICAgICAge3R5cGUgPT09IFwic2hvd1wiID8gKFxyXG4gICAgLy8gICAgICAgICA8TGluayBocmVmPXtgL2NoYXJhY3Rlci8ke2MuaWR9YH0+XHJcbiAgICAvLyAgICAgICAgICAgPGE+XHJcbiAgICAvLyAgICAgICAgICAgICA8Q2hhcmFjdGVyQ2FyZCBjaGFyYWN0ZXI9e2N9IHR5cGU9e3R5cGV9IC8+XHJcbiAgICAvLyAgICAgICAgICAgPC9hPlxyXG4gICAgLy8gICAgICAgICA8L0xpbms+XHJcbiAgICAvLyAgICAgICApIDogKFxyXG4gICAgLy8gICAgICAgICA8Q2hhcmFjdGVyQ2FyZCBjaGFyYWN0ZXI9e2N9IHR5cGU9e3R5cGV9IC8+XHJcbiAgICAvLyAgICAgICApfVxyXG4gICAgLy8gICAgIDwvQ29sPlxyXG4gICAgLy8gICApKX1cclxuICAgIC8vIDwvUm93PlxyXG4gICAgPEVtcHR5XHJcbiAgICAgIGltYWdlPXtFbXB0eS5QUkVTRU5URURfSU1BR0VfU0lNUExFfVxyXG4gICAgICBkZXNjcmlwdGlvbj1cIk5vIGNoYXJhY3RlcnMgeWV0XCJcclxuICAgIC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCB7IFN0b3JpZXNHcmlkLCBDaGFyYWN0ZXJHcmlkLCBVc2VyR3JpZCwgTG9jYXRpb25HcmlkIH07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTW9kYWwsIEJ1dHRvbiB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmltcG9ydCB7IGR1bW15IH0gZnJvbSBcIi4uLy4uL3V0aWxzL2R1bW15XCI7XHJcblxyXG5jb25zdCBMb2NhdGlvbkNhcmQgPSAoeyBsb2NhdGlvbiwgdHlwZSB9KSA9PiB7XHJcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZmlndXJlXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiY2FyZCBjaGFyYWN0ZXItY2FyZFwiXHJcbiAgICAgICAgZGF0YS1hb3M9XCJ6b29tLWluLXVwXCJcclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRWaXNpYmxlKHRydWUpfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz17bG9jYXRpb24uaW1hZ2UgPyBsb2NhdGlvbi5pbWFnZSA6IGR1bW15Lm5vSW1hZ2V9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGZpZ2NhcHRpb24+XHJcbiAgICAgICAgICA8aDM+e2xvY2F0aW9uLm5hbWV9PC9oMz5cclxuICAgICAgICAgIHt0eXBlICE9PSBcInN0b3J5XCIgJiYgKFxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhdXRob3JcIj5TdG9yeToge2xvY2F0aW9uLnN0b3J5VGl0bGV9PC9zcGFuPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2ZpZ2NhcHRpb24+XHJcbiAgICAgIDwvZmlndXJlPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICB0aXRsZT17bG9jYXRpb24ubmFtZX1cclxuICAgICAgICB2aXNpYmxlPXt2aXNpYmxlfVxyXG4gICAgICAgIG9uQ2FuY2VsPXsoKSA9PiBzZXRWaXNpYmxlKGZhbHNlKX1cclxuICAgICAgICBmb290ZXI9e1tcclxuICAgICAgICAgIDxCdXR0b24ga2V5PVwic3VibWl0XCIgdHlwZT1cInByaW1hcnlcIiBvbkNsaWNrPXsoKSA9PiBzZXRWaXNpYmxlKGZhbHNlKX0+XHJcbiAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICA8L0J1dHRvbj4sXHJcbiAgICAgICAgXX1cclxuICAgICAgPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm1vZGFsLWltZ1wiXHJcbiAgICAgICAgICBzcmM9e2xvY2F0aW9uLmltYWdlID8gbG9jYXRpb24uaW1hZ2UgOiBkdW1teS5ub0ltYWdlfVxyXG4gICAgICAgICAgYWx0PXtsb2NhdGlvbi5uYW1lfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHA+e2xvY2F0aW9uLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICB7dHlwZSAhPT0gXCJzdG9yeVwiICYmIChcclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1vZGFsLXN0b3J5LWxpbmtcIj5cclxuICAgICAgICAgICAgU3Rvcnk6e1wiIFwifVxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtgL3N0b3J5LyR7bG9jYXRpb24uc3RvcnlJZH1gfT5cclxuICAgICAgICAgICAgICA8YT57bG9jYXRpb24uc3RvcnlUaXRsZX08L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICApfVxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvY2F0aW9uQ2FyZDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBQYWdpbmF0aW9uIGFzIFBhZ2luYXRlLCBEaXZpZGVyIH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmltcG9ydCB7IENoYXJhY3RlckdyaWQsIExvY2F0aW9uR3JpZCwgU3Rvcmllc0dyaWQsIFVzZXJHcmlkIH0gZnJvbSBcIi4vR3JpZFwiO1xyXG5cclxuY29uc3QgUGFnaW5hdGlvbiA9ICh7XHJcbiAgZGF0YSxcclxuICB4cyxcclxuICBzbSxcclxuICBsZyxcclxuICB4bCxcclxuICBtZCxcclxuICB0eXBlLFxyXG4gIGd1dHRlcixcclxuICBjb2x1bW5zQ291bnRCcmVha1BvaW50cyxcclxuICBpdGVtVHlwZSxcclxufSkgPT4ge1xyXG4gIGNvbnN0IFtwYWdpbmF0aW9uLCBzZXRQYWdpbmF0aW9uXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgIGN1cnJlbnRQYWdlOiAxLFxyXG4gICAgZGF0YXNQZXJQYWdlOiAxMixcclxuICB9KTtcclxuICBjb25zdCB7IGN1cnJlbnRQYWdlLCBkYXRhc1BlclBhZ2UgfSA9IHBhZ2luYXRpb247XHJcbiAgY29uc3QgaW5kZXhPZkxhc3REYXRhID0gY3VycmVudFBhZ2UgKiBkYXRhc1BlclBhZ2U7XHJcbiAgY29uc3QgaW5kZXhPZkZpcnN0RGF0YSA9IGluZGV4T2ZMYXN0RGF0YSAtIGRhdGFzUGVyUGFnZTtcclxuXHJcbiAgUmVhY3QudXNlU3RhdGUoKCkgPT4ge30sIFtkYXRhXSk7XHJcblxyXG4gIGNvbnN0IGN1cnJlbnREYXRhcyA9IGRhdGEuc2xpY2UoaW5kZXhPZkZpcnN0RGF0YSwgaW5kZXhPZkxhc3REYXRhKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG4gICAgc2V0UGFnaW5hdGlvbih7IC4uLnBhZ2luYXRpb24sIGN1cnJlbnRQYWdlOiBOdW1iZXIoZSkgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyRGF0YXMgPVxyXG4gICAgaXRlbVR5cGUgPT09IFwic3Rvcmllc1wiID8gKFxyXG4gICAgICA8U3Rvcmllc0dyaWRcclxuICAgICAgICBndXR0ZXI9e2d1dHRlcn1cclxuICAgICAgICB0eXBlPXt0eXBlfVxyXG4gICAgICAgIHN0b3JpZXM9e2N1cnJlbnREYXRhc31cclxuICAgICAgICBjb2x1bW5zQ291bnRCcmVha1BvaW50cz17Y29sdW1uc0NvdW50QnJlYWtQb2ludHN9XHJcbiAgICAgIC8+XHJcbiAgICApIDogaXRlbVR5cGUgPT09IFwiY2hhcmFjdGVyc1wiID8gKFxyXG4gICAgICA8Q2hhcmFjdGVyR3JpZFxyXG4gICAgICAgIGNvbHVtbnNDb3VudEJyZWFrUG9pbnRzPXtjb2x1bW5zQ291bnRCcmVha1BvaW50c31cclxuICAgICAgICBndXR0ZXI9e2d1dHRlcn1cclxuICAgICAgICB0eXBlPXt0eXBlfVxyXG4gICAgICAgIGNoYXJhY3RlcnM9e2N1cnJlbnREYXRhc31cclxuICAgICAgLz5cclxuICAgICkgOiBpdGVtVHlwZSA9PT0gXCJsb2NhdGlvbnNcIiA/IChcclxuICAgICAgPExvY2F0aW9uR3JpZFxyXG4gICAgICAgIGxvY2F0aW9ucz17Y3VycmVudERhdGFzfVxyXG4gICAgICAgIGd1dHRlcj17Z3V0dGVyfVxyXG4gICAgICAgIHR5cGU9e3R5cGV9XHJcbiAgICAgICAgY29sdW1uc0NvdW50QnJlYWtQb2ludHM9e2NvbHVtbnNDb3VudEJyZWFrUG9pbnRzfVxyXG4gICAgICAvPlxyXG4gICAgKSA6IGl0ZW1UeXBlID09PSBcImZvbGxvd2Vyc1wiID8gKFxyXG4gICAgICA8VXNlckdyaWRcclxuICAgICAgICBndXR0ZXI9e2d1dHRlcn1cclxuICAgICAgICB0eXBlPXt0eXBlfVxyXG4gICAgICAgIHhzPXt4c31cclxuICAgICAgICBzbT17c219XHJcbiAgICAgICAgbGc9e2xnfVxyXG4gICAgICAgIG1kPXttZH1cclxuICAgICAgICB1c2Vycz17Y3VycmVudERhdGFzfVxyXG4gICAgICAvPlxyXG4gICAgKSA6IG51bGw7XHJcblxyXG4gIGxldCBwYWdlTnVtYmVycyA9IFtdO1xyXG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IE1hdGguY2VpbChkYXRhLmxlbmd0aCAvIGRhdGFzUGVyUGFnZSk7IGkrKykge1xyXG4gICAgcGFnZU51bWJlcnMucHVzaChpKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIHtyZW5kZXJEYXRhc31cclxuICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgPFBhZ2luYXRlXHJcbiAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICBzaG93UXVpY2tKdW1wZXJcclxuICAgICAgICBoaWRlT25TaW5nbGVQYWdlXHJcbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNsaWNrfVxyXG4gICAgICAgIHRvdGFsPXtkYXRhLmxlbmd0aH1cclxuICAgICAgICBwYWdlU2l6ZT17ZGF0YXNQZXJQYWdlfVxyXG4gICAgICAgIHNob3dUb3RhbD17KHRvdGFsKSA9PiBgVG90YWwgJHt0b3RhbH0gaXRlbXNgfVxyXG4gICAgICAvPlxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnaW5hdGlvbjtcclxuIiwiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBTcGFjZSB9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5jb25zdCBVc2VyQ2FyZCA9ICh7IHVzZXIgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGluayBocmVmPXtgL3Byb2ZpbGUvJHt1c2VyLmlkfWB9PlxyXG4gICAgICA8YT5cclxuICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cInVzZXItY2FyZFwiIGRhdGEtYW9zPVwiZmxpcC1sZWZ0XCI+XHJcbiAgICAgICAgICA8U3BhY2UgZGlyZWN0aW9uPVwidmVydGljYWxcIiBzaXplPXsxMn0gYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAge3VzZXIuaW1hZ2UgPyAoXHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17dXNlci5pbWFnZX0gYWx0PXtgcGhvdG8gJHt1c2VyLnVzZXJuYW1lfWB9IC8+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxpb24taWNvbiBuYW1lPVwicGVyc29uXCI+PC9pb24taWNvbj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGZpZ2NhcHRpb24+e3VzZXIudXNlcm5hbWV9PC9maWdjYXB0aW9uPlxyXG4gICAgICAgICAgPC9TcGFjZT5cclxuICAgICAgICA8L2ZpZ3VyZT5cclxuICAgICAgPC9hPlxyXG4gICAgPC9MaW5rPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyQ2FyZDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgTG9hZGluZ1NjcmVlbiA9ICh7IGNoaWxkcmVuLCBsb2FkaW5nIH0pID0+IHtcclxuICByZXR1cm4gIWxvYWRpbmcgPyAoXHJcbiAgICBjaGlsZHJlblxyXG4gICkgOiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRlci1jb250YWluZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkZXJcIj5cclxuICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9hZGluZ1NjcmVlbjtcclxuIiwiaW1wb3J0IHsgUmVzdWx0LCBCdXR0b24gfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuY29uc3QgUmVkaXJlY3RDb21wID0gKHsgY29uZGl0aW9uLCB0eXBlLCBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgcmV0dXJuIGNvbmRpdGlvbiA/IChcclxuICAgIGNoaWxkcmVuXHJcbiAgKSA6IHR5cGUgPT09IFwiNDA0XCIgPyAoXHJcbiAgICA8UmVzdWx0XHJcbiAgICAgIHN0YXR1cz1cIjQwNFwiXHJcbiAgICAgIHRpdGxlPVwiNDA0XCJcclxuICAgICAgc3ViVGl0bGU9XCJTb3JyeSwgdGhlIHBhZ2UgeW91IHZpc2l0ZWQgZG9lcyBub3QgZXhpc3QuXCJcclxuICAgICAgZXh0cmE9ezxCdXR0b24gdHlwZT1cInByaW1hcnlcIj5CYWNrIEhvbWU8L0J1dHRvbj59XHJcbiAgICAvPlxyXG4gICkgOiB0eXBlID09PSBcIjQwM1wiID8gKFxyXG4gICAgPFJlc3VsdFxyXG4gICAgICBzdGF0dXM9XCI0MDNcIlxyXG4gICAgICB0aXRsZT1cIjQwM1wiXHJcbiAgICAgIHN1YlRpdGxlPVwiU29ycnksIHlvdSBhcmUgbm90IGF1dGhvcml6ZWQgdG8gYWNjZXNzIHRoaXMgcGFnZS5cIlxyXG4gICAgICBleHRyYT17PEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiPkJhY2sgSG9tZTwvQnV0dG9uPn1cclxuICAgIC8+XHJcbiAgKSA6IHR5cGUgPT09IFwicmVkaXJlY3RcIiA/IChcclxuICAgICh3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL2F1dGhcIilcclxuICApIDogKFxyXG4gICAgPGRpdj48L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVkaXJlY3RDb21wO1xyXG4iLCJpbXBvcnQgeyBSb3csIENvbCwgU3BhY2UsIFRvb2x0aXAsIEltYWdlIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBkdW1teSB9IGZyb20gXCIuLi8uLi91dGlscy9kdW1teVwiO1xyXG5cclxuaW1wb3J0IEZhdm9yaXRlcyBmcm9tIFwiLi9GYXZvcml0ZXNcIjtcclxuXHJcbmNvbnN0IEJhbm5lciA9ICh7XHJcbiAgb3BlblNldHRpbmdzLFxyXG4gIHByb2ZpbGUsXHJcbiAgZmF2QXV0aG9ycyxcclxuICBmb2xsb3dlcnMsXHJcbiAgY2hhbmdlRmF2VGFiLFxyXG4gIGZhdlRhYixcclxuICBzZXRDdXJyZW50VGFiLFxyXG4gIGNvbnRleHQsXHJcbiAgaXNGb2xsb3dpbmcsXHJcbiAgZm9sbG93VXNlcixcclxuICB1bmZvbGxvd1VzZXIsXHJcbiAgYXV0aCxcclxuICBpZCxcclxufSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lclwiPlxyXG4gICAgICA8Um93IGd1dHRlcj17MTZ9PlxyXG4gICAgICAgIDxDb2wgeGw9ezE4fSBsZz17MjR9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLXRvcFwiPlxyXG4gICAgICAgICAgICA8Um93IGd1dHRlcj17MzJ9IGFsaWduPVwibWlkZGxlXCI+XHJcbiAgICAgICAgICAgICAgPENvbCB4cz17MjR9IHNtPXs4fSBtZD17OX0gbGc9ezd9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBkYXRhLWljb249XCJpbWFnZVwiIGNsYXNzTmFtZT1cImF2YXRhclwiPlxyXG4gICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICBzcmM9e3Byb2ZpbGU/LmltYWdlID8gcHJvZmlsZS5pbWFnZSA6IGR1bW15LmF2YXRhcn1cclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJhaXNod2FyYXlhXCJcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17MjMwfVxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17MjMwfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPENvbCBtZD17MTV9IGxnPXsxN30gc209ezE2fSB4cz17MjR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjb250ZXh0ID09PSBcInByaXZhdGVcIiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbiBjdXN0b20taWNvbiBzZXR0aW5ncy1pY29uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b3BlblNldHRpbmdzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW9uLWljb24gbmFtZT1cInNldHRpbmdzXCI+PC9pb24taWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiBhdXRoLnVzZXIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXNGb2xsb3dpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdW5mb2xsb3dVc2VyKGlkLCBpc0ZvbGxvd2luZylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZm9sbG93VXNlcihpZCwgaXNGb2xsb3dpbmcsIGF1dGgudXNlcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb2xsb3ctYnRuIGFkZC1idG4tY2lyY2xlICR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXNGb2xsb3dpbmcgPyBcImZvbGxvd2VkXCIgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW9uLWljb24gbmFtZT1cImFkZC1jaXJjbGVcIj48L2lvbi1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57YCR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXNGb2xsb3dpbmcgPyBcIlVuZm9sbG93XCIgOiBcIkZvbGxvd1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gdGhpcyBhdXRob3JgfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj57cHJvZmlsZT8udXNlcm5hbWV9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8U3BhY2Ugc2l6ZT17MzB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9sbG93LWNvdW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtmb2xsb3dlcnM/LmF1dGhvcnMubGVuZ3RofSBmb2xsb3dlcnNcclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbGxvdy1jb3VudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZmF2QXV0aG9ycz8uYXV0aG9ycy5sZW5ndGh9IGZvbGxvd2luZ3NcclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L1NwYWNlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImJpb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3Byb2ZpbGUuYmlvZ3JhcGh5ICYmIHByb2ZpbGU/LmJpb2dyYXBoeS5sZW5ndGggPiAxNDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBgJHtwcm9maWxlPy5iaW9ncmFwaHkuc2xpY2UoMCwgMTQwKX0uLi5gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogcHJvZmlsZT8uYmlvZ3JhcGh5fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFNwYWNlIHNpemU9ezMwfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb2ZpbGUuZmFjZWJvb2sgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3Byb2ZpbGU/LmZhY2Vib29rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24gY3VzdG9tLWljb24gZmItaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpb24taWNvbiBuYW1lPVwibG9nby1mYWNlYm9va1wiPjwvaW9uLWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb2ZpbGUudHdpdHRlciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17cHJvZmlsZT8udHdpdHRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uIGN1c3RvbS1pY29uIHR3aXR0ZXItaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpb24taWNvbiBuYW1lPVwibG9nby10d2l0dGVyXCI+PC9pb24taWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvZmlsZS5pbnN0YWdyYW0gJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3Byb2ZpbGU/Lmluc3RhZ3JhbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uIGN1c3RvbS1pY29uIGluc3RhZ3JhbS1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlvbi1pY29uIG5hbWU9XCJsb2dvLWluc3RhZ3JhbVwiPjwvaW9uLWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb2ZpbGUuZGV2aWFudGFydCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17cHJvZmlsZT8uZGV2aWFudGFydH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uIGN1c3RvbS1pY29uIGRldmlhbnRhcnQtaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpb24taWNvbiBuYW1lPVwibG9nby1kZXZpYW50YXJ0XCI+PC9pb24taWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9TcGFjZT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgICA8Q29sIGZsZXg9XCJhdXRvXCIgeGw9ezZ9IGxnPXsyNH0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJpb1wiPlxyXG4gICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1vcmVcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgICBmYXZUYWIgPT09IFwiZmF2YXV0aG9yc1wiXHJcbiAgICAgICAgICAgICAgICAgID8gc2V0Q3VycmVudFRhYihcImZvbGxvd2luZ3NcIilcclxuICAgICAgICAgICAgICAgICAgOiBzZXRDdXJyZW50VGFiKFwiZm9sbG93ZXJzXCIpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgU2VlIGFsbCA+Pj5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlZ21lbnRlZC1jb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInJhZGlvMlwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT1cIjNcIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJ0YWItMVwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VGYXZUYWIoXCJmYXZhdXRob3JzXCIpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0YWItMVwiIGNsYXNzTmFtZT1cInNlZ21lbnRlZC1jb250cm9sX18xXCI+XHJcbiAgICAgICAgICAgICAgICA8cD5SZWNlbnQgRm9sbG93aW5nczwvcD5cclxuICAgICAgICAgICAgICA8L2xhYmVsPlxyXG5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwicmFkaW8yXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPVwiNFwiXHJcbiAgICAgICAgICAgICAgICBpZD1cInRhYi0yXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNoYW5nZUZhdlRhYihcImZvbGxvd2Vyc1wiKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGFiLTJcIiBjbGFzc05hbWU9XCJzZWdtZW50ZWQtY29udHJvbF9fMlwiPlxyXG4gICAgICAgICAgICAgICAgPHA+UmVjZW50IEZvbGxvd2VyczwvcD5cclxuICAgICAgICAgICAgICA8L2xhYmVsPlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlZ21lbnRlZC1jb250cm9sX19jb2xvclwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge2ZhdlRhYiA9PT0gXCJmYXZhdXRob3JzXCIgJiYgKFxyXG4gICAgICAgICAgICAgIDxGYXZvcml0ZXMgc2V0Q3VycmVudFRhYj17c2V0Q3VycmVudFRhYn0gZmF2cz17ZmF2QXV0aG9yc30gLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAge2ZhdlRhYiA9PT0gXCJmb2xsb3dlcnNcIiAmJiAoXHJcbiAgICAgICAgICAgICAgPEZhdm9yaXRlcyBzZXRDdXJyZW50VGFiPXtzZXRDdXJyZW50VGFifSBmYXZzPXtmb2xsb3dlcnN9IC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgPC9Sb3c+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmFubmVyO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IERpdmlkZXIgfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSBcIi4uL2NvbW1vbi9QYWdpbmF0aW9uXCI7XHJcbmltcG9ydCBTb3J0SW5wdXQgZnJvbSBcIi4vU29ydElucHV0XCI7XHJcblxyXG5jb25zdCBDaGFyYWN0ZXJzID0gKHsgY2hhcmFjdGVycywgdHlwZSwgY29udGV4dCB9KSA9PiB7XHJcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gUmVhY3QudXNlU3RhdGUoW10pO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0RGF0YShjaGFyYWN0ZXJzKTtcclxuICB9LCBbY2hhcmFjdGVyc10pO1xyXG5cclxuICBjb25zdCBvcHRpb25zID0gW1xyXG4gICAgeyBuYW1lOiBcIkRhdGUgKGFzY2VuZGluZylcIiwgdmFsdWU6IFwiZGF0ZS1hc2NcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkRhdGUgKGRlc2NlbmRpbmcpXCIsIHZhbHVlOiBcImRhdGUtZGVzY1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiRmlyc3RuYW1lIChhc2NlbmRpbmcpXCIsIHZhbHVlOiBcImZpcnN0bmFtZS1hc2NcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkZpcnN0bmFtZSAoZGVzY2VuZGluZylcIiwgdmFsdWU6IFwiZmlyc3RuYW1lLWRlc2NcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkxhc3RuYW1lIChhc2NlbmRpbmcpXCIsIHZhbHVlOiBcImxhc3RuYW1lLWFzY1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiTGFzdG5hbWUgKGRlc2NlbmRpbmcpXCIsIHZhbHVlOiBcImxhc3RuYW1lLWRlc2NcIiB9LFxyXG4gIF07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtY2hhcmFjdGVyc1wiPlxyXG4gICAgICA8U29ydElucHV0XHJcbiAgICAgICAgdHlwZT1cImNoYXJhY3RlcnNcIlxyXG4gICAgICAgIGl0ZW1EYXRhPXtjaGFyYWN0ZXJzfVxyXG4gICAgICAgIHRpdGxlPXt0eXBlICE9PSBcImZhdm9yaXRlc1wiID8gXCJDaGFyYWN0ZXJzXCIgOiBcIkZhdm9yaXRlIENoYXJhY3RlcnNcIn1cclxuICAgICAgICBzZXREYXRhPXtzZXREYXRhfVxyXG4gICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XHJcbiAgICAgICAgY29udGV4dD17Y29udGV4dH1cclxuICAgICAgLz5cclxuICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgPFBhZ2luYXRpb25cclxuICAgICAgICBkYXRhPXtkYXRhfVxyXG4gICAgICAgIHR5cGU9e3R5cGV9XHJcbiAgICAgICAgZ3V0dGVyPXtcIjE2cHhcIn1cclxuICAgICAgICBpdGVtVHlwZT1cImNoYXJhY3RlcnNcIlxyXG4gICAgICAgIGNvbHVtbnNDb3VudEJyZWFrUG9pbnRzPXt7IDM1MDogMSwgNzUwOiAyLCA5MDA6IDMsIDEyMDA6IDQsIDE2MDA6IDYgfX1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGFyYWN0ZXJzO1xyXG4iLCJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IFJvdywgQ29sLCBUb29sdGlwLCBTcGluIH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmNvbnN0IEZhdm9yaXRlcyA9ICh7IGZhdnMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZhdm9yaXRlc1wiPlxyXG4gICAgICA8Um93IGd1dHRlcj17WzE1LCAxMF19PlxyXG4gICAgICAgIHtmYXZzLmlzTG9hZGluZyA/IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxTcGluIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgZmF2cy5hdXRob3JzLnNsaWNlKDAsIDEyKS5tYXAoKGZhdikgPT4gKFxyXG4gICAgICAgICAgICA8Q29sIGtleT17ZmF2LmlkfSBzcGFuPXs2fT5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3Byb2ZpbGUvJHtmYXYuaWR9YH0+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJmYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICA8VG9vbHRpcCB0aXRsZT17ZmF2LnVzZXJuYW1lfSBjb2xvcj17XCIjNmQ1ZGZjXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nLWNvbnRhaW5lci1ib3JkZXIgaW1nLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2Zhdi5pbWFnZSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Zhdi5pbWFnZX0gYWx0PXtgcGhvdG8gJHtmYXYudXNlcm5hbWV9YH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpb24taWNvbiBuYW1lPVwicGVyc29uXCI+PC9pb24taWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgKSlcclxuICAgICAgICApfVxyXG4gICAgICA8L1Jvdz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGYXZvcml0ZXM7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRGl2aWRlciB9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tIFwiLi4vY29tbW9uL1BhZ2luYXRpb25cIjtcclxuaW1wb3J0IFNvcnRJbnB1dCBmcm9tIFwiLi9Tb3J0SW5wdXRcIjtcclxuXHJcbmNvbnN0IEZvbGxvd2VycyA9ICh7IG1kLCBzbSwgeHMsIGxnLCBpdGVtcywgdGl0bGUsIHR5cGUgfSkgPT4ge1xyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldERhdGEoaXRlbXMpO1xyXG4gIH0sIFtpdGVtc10pO1xyXG5cclxuICBjb25zdCBvcHRpb25zID0gW1xyXG4gICAgeyBuYW1lOiBcIkRhdGUgKGFzY2VuZGluZylcIiwgdmFsdWU6IFwiZGF0ZS1hc2NcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkRhdGUgKGRlc2NlbmRpbmcpXCIsIHZhbHVlOiBcImRhdGUtZGVzY1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiVXNlcm5hbWUgKGFzY2VuZGluZylcIiwgdmFsdWU6IFwidXNlcm5hbWUtYXNjXCIgfSxcclxuICAgIHsgbmFtZTogXCJVc2VybmFtZSAoZGVzY2VuZGluZylcIiwgdmFsdWU6IFwidXNlcm5hbWUtZGVzY1wiIH0sXHJcbiAgXTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9sbG93ZXJzXCI+XHJcbiAgICAgIDxTb3J0SW5wdXRcclxuICAgICAgICB0eXBlPVwiZm9sbG93ZXJzXCJcclxuICAgICAgICBpdGVtRGF0YT17aXRlbXN9XHJcbiAgICAgICAgdGl0bGU9e3RpdGxlfVxyXG4gICAgICAgIHNldERhdGE9e3NldERhdGF9XHJcbiAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cclxuICAgICAgLz5cclxuICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgPFBhZ2luYXRpb25cclxuICAgICAgICBkYXRhPXtkYXRhfVxyXG4gICAgICAgIGd1dHRlcj17WzIwLCAzMF19XHJcbiAgICAgICAgaXRlbVR5cGU9XCJmb2xsb3dlcnNcIlxyXG4gICAgICAgIG1kPXttZH1cclxuICAgICAgICBzbT17c219XHJcbiAgICAgICAgeHM9e3hzfVxyXG4gICAgICAgIGxnPXtsZ31cclxuICAgICAgICB0eXBlPXt0eXBlfVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvbGxvd2VycztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBEaXZpZGVyIH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gXCIuLi9jb21tb24vUGFnaW5hdGlvblwiO1xyXG5pbXBvcnQgU29ydElucHV0IGZyb20gXCIuL1NvcnRJbnB1dFwiO1xyXG5cclxuY29uc3QgTG9jYXRpb25zID0gKHsgbG9jYXRpb25zLCB0eXBlLCBjb250ZXh0IH0pID0+IHtcclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSBSZWFjdC51c2VTdGF0ZShbXSk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXREYXRhKGxvY2F0aW9ucyk7XHJcbiAgfSwgW2xvY2F0aW9uc10pO1xyXG5cclxuICBjb25zdCBvcHRpb25zID0gW1xyXG4gICAgeyBuYW1lOiBcIkRhdGUgKGFzY2VuZGluZylcIiwgdmFsdWU6IFwiZGF0ZS1hc2NcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkRhdGUgKGRlc2NlbmRpbmcpXCIsIHZhbHVlOiBcImRhdGUtZGVzY1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiTmFtZSAoYXNjZW5kaW5nKVwiLCB2YWx1ZTogXCJuYW1lLWFzY1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiTmFtZSAoZGVzY2VuZGluZylcIiwgdmFsdWU6IFwibmFtZS1kZXNjXCIgfSxcclxuICBdO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWNoYXJhY3RlcnNcIj5cclxuICAgICAgPFNvcnRJbnB1dFxyXG4gICAgICAgIHR5cGU9XCJsb2NhdGlvbnNcIlxyXG4gICAgICAgIGl0ZW1EYXRhPXtsb2NhdGlvbnN9XHJcbiAgICAgICAgdGl0bGU9XCJMb2NhdGlvbnNcIlxyXG4gICAgICAgIHNldERhdGE9e3NldERhdGF9XHJcbiAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cclxuICAgICAgICBjb250ZXh0PXtjb250ZXh0fVxyXG4gICAgICAvPlxyXG4gICAgICA8RGl2aWRlciAvPlxyXG4gICAgICA8UGFnaW5hdGlvblxyXG4gICAgICAgIGRhdGE9e2RhdGF9XHJcbiAgICAgICAgdHlwZT17dHlwZX1cclxuICAgICAgICBndXR0ZXI9e1wiMTZweFwifVxyXG4gICAgICAgIGl0ZW1UeXBlPVwibG9jYXRpb25zXCJcclxuICAgICAgICBjb2x1bW5zQ291bnRCcmVha1BvaW50cz17eyAzNTA6IDEsIDc1MDogMiwgOTAwOiAzLCAxMjAwOiA0LCAxNjAwOiA2IH19XHJcbiAgICAgIC8+XHJcbiAgICAgIHsvKiA8TG9jYXRpb25HcmlkXHJcbiAgICAgICAgbG9jYXRpb25zPXtsb2NhdGlvbnN9XHJcbiAgICAgICAgeHhsPXs0fVxyXG4gICAgICAgIHNtPXsxMn1cclxuICAgICAgICBzeD17MTJ9XHJcbiAgICAgICAgbWQ9ezh9XHJcbiAgICAgICAgeGw9ezZ9XHJcbiAgICAgICAgbGc9ezh9XHJcbiAgICAgICAgZ3V0dGVyPXtbMTYsIDE2XX1cclxuICAgICAgICB0eXBlPXt0eXBlfVxyXG4gICAgICAvPiAqL31cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2NhdGlvbnM7XHJcbiIsImltcG9ydCB7IEZvcm0sIFRhYnMsIElucHV0IH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgZHVtbXkgfSBmcm9tIFwiLi4vLi4vdXRpbHMvZHVtbXlcIjtcclxuaW1wb3J0IHtcclxuICBMb2NrT3V0bGluZWQsXHJcbiAgVXNlck91dGxpbmVkLFxyXG4gIExpbmtPdXRsaW5lZCxcclxuICBGaWxlSW1hZ2VPdXRsaW5lZCxcclxufSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuXHJcbmNvbnN0IHsgVGFiUGFuZSB9ID0gVGFicztcclxuXHJcbmNvbnN0IFNldHRpbmdzID0gKHsgdXNlciB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZ3NcIj5cclxuICAgICAgPEZvcm0gbGF5b3V0PVwidmVydGljYWxcIiBpbml0aWFsVmFsdWVzPXt7IHVzZXJuYW1lOiB1c2VyLnVzZXJuYW1lIH19PlxyXG4gICAgICAgIDxUYWJzIGRlZmF1bHRBY3RpdmVLZXk9XCIxXCI+XHJcbiAgICAgICAgICA8VGFiUGFuZVxyXG4gICAgICAgICAgICB0YWI9e1xyXG4gICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgPFVzZXJPdXRsaW5lZCAvPlxyXG4gICAgICAgICAgICAgICAgVXNlcm5hbWVcclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAga2V5PVwiMVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxGb3JtLkl0ZW0gbmFtZT1cInVzZXJuYW1lXCIgbGFiZWw9XCJDaGFuZ2UgeW91ciB1c2VybmFtZVwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgIDwvVGFiUGFuZT5cclxuICAgICAgICAgIDxUYWJQYW5lXHJcbiAgICAgICAgICAgIHRhYj17XHJcbiAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICA8TG9ja091dGxpbmVkIC8+XHJcbiAgICAgICAgICAgICAgICBQYXNzd29yZFxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBrZXk9XCIyXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD1cIkFjdHVhbCBwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dC5QYXNzd29yZCAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD1cIk5ldyBwYXNzd29yZFwiIG5hbWU9XCJjb25maXJtLXBhc3N3b3JkXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0LlBhc3N3b3JkIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgPC9UYWJQYW5lPlxyXG4gICAgICAgICAgPFRhYlBhbmVcclxuICAgICAgICAgICAgdGFiPXtcclxuICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgIDxMaW5rT3V0bGluZWQgLz5cclxuICAgICAgICAgICAgICAgIExpbmtzXHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGtleT1cIjNcIlxyXG4gICAgICAgICAgPjwvVGFiUGFuZT5cclxuICAgICAgICAgIDxUYWJQYW5lXHJcbiAgICAgICAgICAgIHRhYj17XHJcbiAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICA8RmlsZUltYWdlT3V0bGluZWQgLz5cclxuICAgICAgICAgICAgICAgIEF2YXRhclxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBrZXk9XCI0XCJcclxuICAgICAgICAgID48L1RhYlBhbmU+XHJcbiAgICAgICAgPC9UYWJzPlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2V0dGluZ3M7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBGb3JtLCBTZWxlY3QsIFBhZ2VIZWFkZXIgfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuY29uc3QgU29ydElucHV0ID0gKHsgdGl0bGUsIGl0ZW1EYXRhLCBzZXREYXRhLCB0eXBlLCBvcHRpb25zLCBjb250ZXh0IH0pID0+IHtcclxuICBjb25zdCBzb3J0QXJyYXkgPSAodmFsdWUpID0+IHtcclxuICAgIGxldCBuZXdBcnIgPSBbXTtcclxuXHJcbiAgICBpZiAodmFsdWUgPT09IFwiZGF0ZS1hc2NcIikge1xyXG4gICAgICBuZXdBcnIgPSBbLi4uaXRlbURhdGFdLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICByZXR1cm4gdHlwZW9mIGEuY3JlYXRlZEF0ID09PSBcIm9iamVjdFwiXHJcbiAgICAgICAgICA/IG5ldyBEYXRlKGEuY3JlYXRlZEF0LnNlY29uZHMgKiAxMDAwKSAtXHJcbiAgICAgICAgICAgICAgbmV3IERhdGUoYi5jcmVhdGVkQXQuc2Vjb25kcyAqIDEwMDApXHJcbiAgICAgICAgICA6IG5ldyBEYXRlKGEuY3JlYXRlZEF0KSAtIG5ldyBEYXRlKGIuY3JlYXRlZEF0KTtcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2UgaWYgKHZhbHVlID09PSBcImRhdGUtZGVzY1wiKSB7XHJcbiAgICAgIG5ld0FyciA9IFsuLi5pdGVtRGF0YV0uc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgIHJldHVybiB0eXBlb2YgYS5jcmVhdGVkQXQgPT09IFwib2JqZWN0XCJcclxuICAgICAgICAgID8gbmV3IERhdGUoYi5jcmVhdGVkQXQuc2Vjb25kcyAqIDEwMDApIC1cclxuICAgICAgICAgICAgICBuZXcgRGF0ZShhLmNyZWF0ZWRBdC5zZWNvbmRzICogMTAwMClcclxuICAgICAgICAgIDogbmV3IERhdGUoYi5jcmVhdGVkQXQpIC0gbmV3IERhdGUoYS5jcmVhdGVkQXQpO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IFwibmFtZS1kZXNjXCIpIHtcclxuICAgICAgaWYgKHR5cGUgPT09IFwibG9jYXRpb25zXCIpIHtcclxuICAgICAgICBuZXdBcnIgPSBbLi4uaXRlbURhdGFdLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgIGNvbnN0IGtleUEgPSBhLm5hbWUudG9Mb3dlckNhc2UoKSxcclxuICAgICAgICAgICAga2V5QiA9IGIubmFtZS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgICAgICAgIGlmIChrZXlBID4ga2V5QikgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgaWYgKGtleUEgPCBrZXlCKSByZXR1cm4gMTtcclxuICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwic3Rvcmllc1wiKSB7XHJcbiAgICAgICAgbmV3QXJyID0gWy4uLml0ZW1EYXRhXS5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBrZXlBID0gYS50aXRsZS50b0xvd2VyQ2FzZSgpLFxyXG4gICAgICAgICAgICBrZXlCID0gYi50aXRsZS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgICAgICAgIGlmIChrZXlBID4ga2V5QikgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgaWYgKGtleUEgPCBrZXlCKSByZXR1cm4gMTtcclxuICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKHZhbHVlID09PSBcIm5hbWUtYXNjXCIpIHtcclxuICAgICAgaWYgKHR5cGUgPT09IFwibG9jYXRpb25zXCIpIHtcclxuICAgICAgICBuZXdBcnIgPSBbLi4uaXRlbURhdGFdLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgIGNvbnN0IGtleUEgPSBhLm5hbWUudG9Mb3dlckNhc2UoKSxcclxuICAgICAgICAgICAga2V5QiA9IGIubmFtZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgaWYgKGtleUEgPCBrZXlCKSByZXR1cm4gLTE7XHJcbiAgICAgICAgICBpZiAoa2V5QSA+IGtleUIpIHJldHVybiAxO1xyXG4gICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJzdG9yaWVzXCIpIHtcclxuICAgICAgICBuZXdBcnIgPSBbLi4uaXRlbURhdGFdLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgIGNvbnN0IGtleUEgPSBhLnRpdGxlLnRvTG93ZXJDYXNlKCksXHJcbiAgICAgICAgICAgIGtleUIgPSBiLnRpdGxlLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICBpZiAoa2V5QSA8IGtleUIpIHJldHVybiAtMTtcclxuICAgICAgICAgIGlmIChrZXlBID4ga2V5QikgcmV0dXJuIDE7XHJcbiAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gXCJmaXJzdG5hbWUtYXNjXCIpIHtcclxuICAgICAgbmV3QXJyID0gWy4uLml0ZW1EYXRhXS5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgY29uc3Qga2V5QSA9IGEuZmlyc3RuYW1lLnRvTG93ZXJDYXNlKCksXHJcbiAgICAgICAgICBrZXlCID0gYi5maXJzdG5hbWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBpZiAoa2V5QSA8IGtleUIpIHJldHVybiAtMTtcclxuICAgICAgICBpZiAoa2V5QSA+IGtleUIpIHJldHVybiAxO1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IFwiZmlyc3RuYW1lLWRlc2NcIikge1xyXG4gICAgICBuZXdBcnIgPSBbLi4uaXRlbURhdGFdLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICBjb25zdCBrZXlBID0gYS5maXJzdG5hbWUudG9Mb3dlckNhc2UoKSxcclxuICAgICAgICAgIGtleUIgPSBiLmZpcnN0bmFtZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGlmIChrZXlBID4ga2V5QikgcmV0dXJuIC0xO1xyXG4gICAgICAgIGlmIChrZXlBIDwga2V5QikgcmV0dXJuIDE7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gXCJsYXN0bmFtZS1hc2NcIikge1xyXG4gICAgICBuZXdBcnIgPSBbLi4uaXRlbURhdGFdLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICBjb25zdCBrZXlBID0gYS5sYXN0bmFtZS50b0xvd2VyQ2FzZSgpLFxyXG4gICAgICAgICAga2V5QiA9IGIubGFzdG5hbWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBpZiAoa2V5QSA8IGtleUIpIHJldHVybiAtMTtcclxuICAgICAgICBpZiAoa2V5QSA+IGtleUIpIHJldHVybiAxO1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IFwibGFzdG5hbWUtZGVzY1wiKSB7XHJcbiAgICAgIG5ld0FyciA9IFsuLi5pdGVtRGF0YV0uc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgIGNvbnN0IGtleUEgPSBhLmxhc3RuYW1lLnRvTG93ZXJDYXNlKCksXHJcbiAgICAgICAgICBrZXlCID0gYi5sYXN0bmFtZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGlmIChrZXlBID4ga2V5QikgcmV0dXJuIC0xO1xyXG4gICAgICAgIGlmIChrZXlBIDwga2V5QikgcmV0dXJuIDE7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gXCJ1c2VybmFtZS1hc2NcIikge1xyXG4gICAgICBuZXdBcnIgPSBbLi4uaXRlbURhdGFdLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICBjb25zdCBrZXlBID0gYS51c2VybmFtZS50b0xvd2VyQ2FzZSgpLFxyXG4gICAgICAgICAga2V5QiA9IGIudXNlcm5hbWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhrZXlBKTtcclxuICAgICAgICBpZiAoa2V5QSA8IGtleUIpIHJldHVybiAtMTtcclxuICAgICAgICBpZiAoa2V5QSA+IGtleUIpIHJldHVybiAxO1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IFwidXNlcm5hbWUtZGVzY1wiKSB7XHJcbiAgICAgIG5ld0FyciA9IFsuLi5pdGVtRGF0YV0uc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgIGNvbnN0IGtleUEgPSBhLnVzZXJuYW1lLnRvTG93ZXJDYXNlKCksXHJcbiAgICAgICAgICBrZXlCID0gYi51c2VybmFtZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGlmIChrZXlBID4ga2V5QikgcmV0dXJuIC0xO1xyXG4gICAgICAgIGlmIChrZXlBIDwga2V5QikgcmV0dXJuIDE7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbmV3QXJyID0gaXRlbURhdGE7XHJcbiAgICB9XHJcbiAgICBzZXREYXRhKG5ld0Fycik7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxQYWdlSGVhZGVyXHJcbiAgICAgICAgdGl0bGU9e2Ake2l0ZW1EYXRhLmxlbmd0aH0gJHt0aXRsZX1gfVxyXG4gICAgICAgIGV4dHJhPXtcclxuICAgICAgICAgIDxGb3JtIGluaXRpYWxWYWx1ZXM9e3sgc29ydDogXCJkYXRlLWRlc2NcIiB9fT5cclxuICAgICAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD1cIlNvcnQgYnlcIiBuYW1lPVwic29ydFwiPlxyXG4gICAgICAgICAgICAgIDxTZWxlY3Qgb25DaGFuZ2U9eyh2YWwpID0+IHNvcnRBcnJheSh2YWwpfT5cclxuICAgICAgICAgICAgICAgIHtvcHRpb25zLm1hcCgob3B0aW9uLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxTZWxlY3QuT3B0aW9uIGtleT17aX0gdmFsdWU9e29wdGlvbi52YWx1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAge29wdGlvbi5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICA8L1NlbGVjdC5PcHRpb24+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgfVxyXG4gICAgICA+XHJcbiAgICAgICAge2NvbnRleHQgPT09IFwicHJpdmF0ZVwiICYmIHR5cGUgPT09IFwic3Rvcmllc1wiID8gKFxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9zdG9yeS9uZXdcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYWRkLWJ0bi1jaXJjbGVcIj5cclxuICAgICAgICAgICAgICA8aW9uLWljb24gbmFtZT1cImFkZC1jaXJjbGVcIj48L2lvbi1pY29uPlxyXG4gICAgICAgICAgICAgIDxzcGFuPkFkZCBhIG5ldyBzdG9yeTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICkgOiBjb250ZXh0ID09PSBcInByaXZhdGVcIiAmJiB0eXBlID09PSBcImxvY2F0aW9uc1wiID8gKFxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9sb2NhdGlvbi9uZXdcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYWRkLWJ0bi1jaXJjbGVcIj5cclxuICAgICAgICAgICAgICA8aW9uLWljb24gbmFtZT1cImFkZC1jaXJjbGVcIj48L2lvbi1pY29uPlxyXG4gICAgICAgICAgICAgIDxzcGFuPkFkZCBhIG5ldyBsb2NhdGlvbjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICkgOiBjb250ZXh0ID09PSBcInByaXZhdGVcIiAmJiB0eXBlID09PSBcImNoYXJhY3RlcnNcIiA/IChcclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY2hhcmFjdGVyL25ld1wiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJhZGQtYnRuLWNpcmNsZVwiPlxyXG4gICAgICAgICAgICAgIDxpb24taWNvbiBuYW1lPVwiYWRkLWNpcmNsZVwiPjwvaW9uLWljb24+XHJcbiAgICAgICAgICAgICAgPHNwYW4+QWRkIGEgbmV3IGNoYXJhY3Rlcjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICkgOiBudWxsfVxyXG4gICAgICA8L1BhZ2VIZWFkZXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU29ydElucHV0O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IERpdmlkZXIgfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSBcIi4uL2NvbW1vbi9QYWdpbmF0aW9uXCI7XHJcbmltcG9ydCBMb2FkaW5nU2NyZWVuIGZyb20gXCIuLi9ob2MvTG9hZGluZ1NjcmVlblwiO1xyXG5pbXBvcnQgU29ydElucHV0IGZyb20gXCIuL1NvcnRJbnB1dFwiO1xyXG5cclxuY29uc3QgU3RvcmllcyA9ICh7IHN0b3JpZXMsIGxvYWRpbmcsIHR5cGUsIGNvbnRleHQgfSkgPT4ge1xyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldERhdGEoc3Rvcmllcyk7XHJcbiAgfSwgW3N0b3JpZXNdKTtcclxuXHJcbiAgY29uc3Qgb3B0aW9ucyA9IFtcclxuICAgIHsgbmFtZTogXCJEYXRlIChhc2NlbmRpbmcpXCIsIHZhbHVlOiBcImRhdGUtYXNjXCIgfSxcclxuICAgIHsgbmFtZTogXCJEYXRlIChkZXNjZW5kaW5nKVwiLCB2YWx1ZTogXCJkYXRlLWRlc2NcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk5hbWUgKGFzY2VuZGluZylcIiwgdmFsdWU6IFwibmFtZS1hc2NcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk5hbWUgKGRlc2NlbmRpbmcpXCIsIHZhbHVlOiBcIm5hbWUtZGVzY1wiIH0sXHJcbiAgXTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1zdG9yaWVzXCI+XHJcbiAgICAgIDxMb2FkaW5nU2NyZWVuIGxvYWRpbmc9e2xvYWRpbmd9PlxyXG4gICAgICAgIDxTb3J0SW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJzdG9yaWVzXCJcclxuICAgICAgICAgIGl0ZW1EYXRhPXtzdG9yaWVzfVxyXG4gICAgICAgICAgdGl0bGU9e3R5cGUgIT09IFwiZmF2b3JpdGVzXCIgPyBcIlN0b3JpZXNcIiA6IFwiRmF2b3JpdGUgU3Rvcmllc1wifVxyXG4gICAgICAgICAgc2V0RGF0YT17c2V0RGF0YX1cclxuICAgICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XHJcbiAgICAgICAgICBjb250ZXh0PXtjb250ZXh0fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICA8UGFnaW5hdGlvblxyXG4gICAgICAgICAgZGF0YT17ZGF0YX1cclxuICAgICAgICAgIHR5cGU9e3R5cGV9XHJcbiAgICAgICAgICBndXR0ZXI9e1wiMTZweFwifVxyXG4gICAgICAgICAgdHlwZT17dHlwZX1cclxuICAgICAgICAgIGl0ZW1UeXBlPVwic3Rvcmllc1wiXHJcbiAgICAgICAgICBjb2x1bW5zQ291bnRCcmVha1BvaW50cz17eyAzNTA6IDEsIDc1MDogMiwgOTAwOiAzLCAxMjAwOiA0IH19XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9Mb2FkaW5nU2NyZWVuPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0b3JpZXM7XHJcbiIsImltcG9ydCB7IFJvdywgQ29sIH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmNvbnN0IFRhYnMgPSAoeyB0YWJzLCBjaGFuZ2VUYWIsIGN1cnJlbnRUYWIgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtdGFic1wiIGRhdGEtYW9zPVwiem9vbS1pblwiPlxyXG4gICAgICA8Um93IGd1dHRlcj17NDB9IGFsaWduPVwibWlkZGxlXCIganVzdGlmeT1cImNlbnRlclwiPlxyXG4gICAgICAgIHt0YWJzLm1hcCgodGFiKSA9PiAoXHJcbiAgICAgICAgICA8Q29sIGtleT17dGFifT5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHRhYiAke2N1cnJlbnRUYWIgPT09IHRhYiA/IFwiYWN0aXZlXCIgOiBcIlwifWB9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2hhbmdlVGFiKHRhYil9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8c3Bhbj57dGFifTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICApKX1cclxuICAgICAgPC9Sb3c+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFicztcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQsIGNyZWF0ZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcclxuaW1wb3J0IHsgYXV0aCwgZGIgfSBmcm9tIFwiLi4vcmVkdXgvZmJDb25maWdcIjtcclxuXHJcbmNvbnN0IGF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFByb3ZpZGVBdXRoKHsgY2hpbGRyZW4gfSkge1xyXG4gIGNvbnN0IGF1dGggPSB1c2VQcm92aWRlQXV0aCgpO1xyXG4gIHJldHVybiA8YXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2F1dGh9PntjaGlsZHJlbn08L2F1dGhDb250ZXh0LlByb3ZpZGVyPjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUF1dGggPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHVzZUNvbnRleHQoYXV0aENvbnRleHQpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gdXNlUHJvdmlkZUF1dGgoKSB7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICAvLyBXcmFwIGFueSBGaXJlYmFzZSBtZXRob2RzIHdlIHdhbnQgdG8gdXNlIG1ha2luZyBzdXJlIC4uLlxyXG4gIC8vIC4uLiB0byBzYXZlIHRoZSB1c2VyIHRvIHN0YXRlLlxyXG4gIGNvbnN0IHNpZ25pbiA9IChlbWFpbCwgcGFzc3dvcmQpID0+IHtcclxuICAgIHJldHVybiBhdXRoLnNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgc2V0VXNlcihyZXNwb25zZS51c2VyKTtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLnVzZXI7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzaWdudXAgPSAoZW1haWwsIHBhc3N3b3JkLCB1c2VybmFtZSkgPT4ge1xyXG4gICAgcmV0dXJuIGF1dGhcclxuICAgICAgLmNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHNldFVzZXIocmVzcG9uc2UudXNlcik7XHJcbiAgICAgICAgZGIuY29sbGVjdGlvbihcInVzZXJzXCIpXHJcbiAgICAgICAgICAuZG9jKHJlc3BvbnNlLnVzZXIudWlkKVxyXG4gICAgICAgICAgLnNldCh7XHJcbiAgICAgICAgICAgIHVzZXJuYW1lLFxyXG4gICAgICAgICAgICBsaWtlc0NvdW50OiAwLFxyXG4gICAgICAgICAgICB0d2l0dGVyOiBcIlwiLFxyXG4gICAgICAgICAgICBmYWNlYm9vazogXCJcIixcclxuICAgICAgICAgICAgaW5zdGFncmFtOiBcIlwiLFxyXG4gICAgICAgICAgICBkZXZpYW50YXJ0OiBcIlwiLFxyXG4gICAgICAgICAgICBiaW9ncmFwaHk6IFwiXCIsXHJcbiAgICAgICAgICAgIGJhZGdlczogW10sXHJcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogZmlyZWJhc2UuZmlyZXN0b3JlLkZpZWxkVmFsdWUuc2VydmVyVGltZXN0YW1wKCksXHJcbiAgICAgICAgICAgIGltYWdlOiBcIlwiLFxyXG4gICAgICAgICAgICBzdXNwZW5kZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgc2V0VXNlcih7IC4uLnVzZXIsIHVzZXJuYW1lOiB1c2VybmFtZSB9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZS51c2VyO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzaWdub3V0ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGF1dGguc2lnbk91dCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICBzZXRVc2VyKGZhbHNlKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNlbmRQYXNzd29yZFJlc2V0RW1haWwgPSAoZW1haWwpID0+IHtcclxuICAgIHJldHVybiBhdXRoLnNlbmRQYXNzd29yZFJlc2V0RW1haWwoZW1haWwpLnRoZW4oKCkgPT4ge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNvbmZpcm1QYXNzd29yZFJlc2V0ID0gKGNvZGUsIHBhc3N3b3JkKSA9PiB7XHJcbiAgICByZXR1cm4gYXV0aC5jb25maXJtUGFzc3dvcmRSZXNldChjb2RlLCBwYXNzd29yZCkudGhlbigoKSA9PiB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHVuc3Vic2NyaWJlID0gYXV0aC5vbkF1dGhTdGF0ZUNoYW5nZWQoKHVzZXIpID0+IHtcclxuICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICBzZXRVc2VyKHVzZXIpO1xyXG4gICAgICAgIGlmICh1c2VyLnVpZCkge1xyXG4gICAgICAgICAgbGV0IHVzZXJuYW1lID0gXCJcIjtcclxuICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICBkYi5jb2xsZWN0aW9uKFwidXNlcnNcIilcclxuICAgICAgICAgICAgLmRvYyh1c2VyLnVpZClcclxuICAgICAgICAgICAgLm9uU25hcHNob3QoKGRvYykgPT4ge1xyXG4gICAgICAgICAgICAgIHVzZXJuYW1lID0gZG9jLmRhdGEoKS51c2VybmFtZTtcclxuICAgICAgICAgICAgICBzZXRVc2VyKHsgLi4udXNlciwgdXNlcm5hbWUsIGltYWdlOiBkb2MuZGF0YSgpLmltYWdlIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0VXNlcihmYWxzZSk7XHJcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQ2xlYW51cCBzdWJzY3JpcHRpb24gb24gdW5tb3VudFxyXG4gICAgcmV0dXJuICgpID0+IHVuc3Vic2NyaWJlKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICAvLyBSZXR1cm4gdGhlIHVzZXIgb2JqZWN0IGFuZCBhdXRoIG1ldGhvZHNcclxuICByZXR1cm4ge1xyXG4gICAgaXNMb2FkaW5nLFxyXG4gICAgdXNlcixcclxuICAgIHNpZ25pbixcclxuICAgIHNpZ251cCxcclxuICAgIHNpZ25vdXQsXHJcbiAgICBzZW5kUGFzc3dvcmRSZXNldEVtYWlsLFxyXG4gICAgY29uZmlybVBhc3N3b3JkUmVzZXQsXHJcbiAgfTtcclxufVxyXG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIGFkZEJhc2VQYXRoLFxuICBhZGRMb2NhbGUsXG4gIGlzTG9jYWxVUkwsXG4gIE5leHRSb3V0ZXIsXG4gIFByZWZldGNoT3B0aW9ucyxcbiAgcmVzb2x2ZUhyZWYsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIFJlcXVpcmVkS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gbmV2ZXIgOiBLXG59W2tleW9mIFRdXG50eXBlIE9wdGlvbmFsS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gSyA6IG5ldmVyXG59W2tleW9mIFRdXG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxufVxudHlwZSBMaW5rUHJvcHNSZXF1aXJlZCA9IFJlcXVpcmVkS2V5czxMaW5rUHJvcHM+XG50eXBlIExpbmtQcm9wc09wdGlvbmFsID0gT3B0aW9uYWxLZXlzPExpbmtQcm9wcz5cblxubGV0IGNhY2hlZE9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuY29uc3QgbGlzdGVuZXJzID0gbmV3IE1hcDxFbGVtZW50LCAoKSA9PiB2b2lkPigpXG5jb25zdCBJbnRlcnNlY3Rpb25PYnNlcnZlciA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyIDogbnVsbFxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIGdldE9ic2VydmVyKCk6IEludGVyc2VjdGlvbk9ic2VydmVyIHwgdW5kZWZpbmVkIHtcbiAgLy8gUmV0dXJuIHNoYXJlZCBpbnN0YW5jZSBvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBhbHJlYWR5IGNyZWF0ZWRcbiAgaWYgKGNhY2hlZE9ic2VydmVyKSB7XG4gICAgcmV0dXJuIGNhY2hlZE9ic2VydmVyXG4gIH1cblxuICAvLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbiAgaWYgKCFJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHJldHVybiAoY2FjaGVkT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgKGVudHJpZXMpID0+IHtcbiAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgaWYgKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNiID0gbGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpIVxuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwKSB7XG4gICAgICAgICAgY2FjaGVkT2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBjYigpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICB7IHJvb3RNYXJnaW46ICcyMDBweCcgfVxuICApKVxufVxuXG5jb25zdCBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMgPSAoZWw6IEVsZW1lbnQsIGNiOiAoKSA9PiB2b2lkKSA9PiB7XG4gIGNvbnN0IG9ic2VydmVyID0gZ2V0T2JzZXJ2ZXIoKVxuICBpZiAoIW9ic2VydmVyKSB7XG4gICAgcmV0dXJuICgpID0+IHt9XG4gIH1cblxuICBvYnNlcnZlci5vYnNlcnZlKGVsKVxuICBsaXN0ZW5lcnMuc2V0KGVsLCBjYilcbiAgcmV0dXJuICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgfVxuICAgIGxpc3RlbmVycy5kZWxldGUoZWwpXG4gIH1cbn1cblxuZnVuY3Rpb24gcHJlZmV0Y2goXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zXG4pOiB2b2lkIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm5cbiAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfSlcbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgcmV0dXJuIChcbiAgICAodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICBldmVudC5tZXRhS2V5IHx8XG4gICAgZXZlbnQuY3RybEtleSB8fFxuICAgIGV2ZW50LnNoaWZ0S2V5IHx8XG4gICAgZXZlbnQuYWx0S2V5IHx8IC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG4gICAgKGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKVxuICApXG59XG5cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKFxuICBlOiBSZWFjdC5Nb3VzZUV2ZW50LFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgcmVwbGFjZT86IGJvb2xlYW4sXG4gIHNoYWxsb3c/OiBib29sZWFuLFxuICBzY3JvbGw/OiBib29sZWFuXG4pOiB2b2lkIHtcbiAgY29uc3QgeyBub2RlTmFtZSB9ID0gZS5jdXJyZW50VGFyZ2V0XG5cbiAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICByZXR1cm5cbiAgfVxuXG4gIGUucHJldmVudERlZmF1bHQoKVxuXG4gIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gIH1cblxuICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7IHNoYWxsb3cgfSkudGhlbihcbiAgICAoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKCFzdWNjZXNzKSByZXR1cm5cbiAgICAgIGlmIChzY3JvbGwpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKVxuICAgICAgfVxuICAgIH1cbiAgKVxufVxuXG5mdW5jdGlvbiBMaW5rKHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxMaW5rUHJvcHM+KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3M6IHtcbiAgICAgIGtleTogc3RyaW5nXG4gICAgICBleHBlY3RlZDogc3RyaW5nXG4gICAgICBhY3R1YWw6IHN0cmluZ1xuICAgIH0pIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICtcbiAgICAgICAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiXG4gICAgICAgICAgICA6ICcnKVxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzUmVxdWlyZWQsIHRydWU+ID0ge1xuICAgICAgaHJlZjogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wczogTGlua1Byb3BzUmVxdWlyZWRbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgcmVxdWlyZWRQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNSZXF1aXJlZFtdXG4gICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc1JlcXVpcmVkKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gPT0gbnVsbCB8fFxuICAgICAgICAgICh0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzT3B0aW9uYWwsIHRydWU+ID0ge1xuICAgICAgYXM6IHRydWUsXG4gICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHM6IExpbmtQcm9wc09wdGlvbmFsW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIG9wdGlvbmFsUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzT3B0aW9uYWxbXVxuICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNPcHRpb25hbCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSAmJlxuICAgICAgICAgIHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJlxuICAgICAgICAgIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0J1xuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGtleSA9PT0gJ3JlcGxhY2UnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Njcm9sbCcgfHxcbiAgICAgICAga2V5ID09PSAnc2hhbGxvdycgfHxcbiAgICAgICAga2V5ID09PSAncGFzc0hyZWYnIHx8XG4gICAgICAgIGtleSA9PT0gJ3ByZWZldGNoJ1xuICAgICAgKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdib29sZWFuJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IFtjaGlsZEVsbSwgc2V0Q2hpbGRFbG1dID0gUmVhY3QudXNlU3RhdGU8RWxlbWVudD4oKVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIucGF0aG5hbWUpIHx8ICcvJ1xuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYsIHRydWUpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hc1xuICAgICAgICA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcylcbiAgICAgICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZixcbiAgICB9XG4gIH0sIFtwYXRobmFtZSwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKFxuICAgICAgcCAmJlxuICAgICAgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgJiZcbiAgICAgIGNoaWxkRWxtICYmXG4gICAgICBjaGlsZEVsbS50YWdOYW1lICYmXG4gICAgICBpc0xvY2FsVVJMKGhyZWYpXG4gICAgKSB7XG4gICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgY29uc3QgaXNQcmVmZXRjaGVkID0gcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdXG4gICAgICBpZiAoIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgICByZXR1cm4gbGlzdGVuVG9JbnRlcnNlY3Rpb25zKGNoaWxkRWxtLCAoKSA9PiB7XG4gICAgICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcylcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtwLCBjaGlsZEVsbSwgaHJlZiwgYXMsIHJvdXRlcl0pXG5cbiAgbGV0IHsgY2hpbGRyZW4sIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCB9ID0gcHJvcHNcbiAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICB9XG5cbiAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICBjb25zdCBjaGlsZFByb3BzOiB7XG4gICAgb25Nb3VzZUVudGVyPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIGhyZWY/OiBzdHJpbmdcbiAgICByZWY/OiBhbnlcbiAgfSA9IHtcbiAgICByZWY6IChlbDogYW55KSA9PiB7XG4gICAgICBpZiAoZWwpIHNldENoaWxkRWxtKGVsKVxuXG4gICAgICBpZiAoY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkLnJlZihlbClcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjaGlsZC5yZWYuY3VycmVudCA9IGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgfVxuICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsKVxuICAgICAgfVxuICAgIH0sXG4gIH1cblxuICBpZiAocCkge1xuICAgIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICAgIH1cbiAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgICB9XG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjaGlsZFByb3BzLmhyZWYgPSBhZGRCYXNlUGF0aChcbiAgICAgIGFkZExvY2FsZShhcywgcm91dGVyICYmIHJvdXRlci5sb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZSlcbiAgICApXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoXG59XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIXG4gID8gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpXG4gICAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLydcbiAgICAgIH1cbiAgICB9XG4gIDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2hcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuICAnbG9jYWxlJyxcbiAgJ2xvY2FsZXMnLFxuICAnZGVmYXVsdExvY2FsZScsXG5dXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICdoYXNoQ2hhbmdlQ29tcGxldGUnLFxuXVxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgJ3B1c2gnLFxuICAncmVwbGFjZScsXG4gICdyZWxvYWQnLFxuICAnYmFjaycsXG4gICdwcmVmZXRjaCcsXG4gICdiZWZvcmVQb3BTdGF0ZScsXG5dXG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUm91dGVyLmV2ZW50c1xuICB9LFxufSlcblxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoXG4gICAgICAgIDFcbiAgICAgICl9YFxuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnlcbiAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25Sb3V0ZXIgYXMgU2luZ2xldG9uUm91dGVyXG5cbi8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhSb3V0ZXIgfSBmcm9tICcuL3dpdGgtcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUm91dGVyKCk6IE5leHRSb3V0ZXIge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChSb3V0ZXJDb250ZXh0KVxufVxuXG4vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcblxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY29uc3QgY3JlYXRlUm91dGVyID0gKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgQXJyYXkuaXNBcnJheShfcm91dGVyW3Byb3BlcnR5XSkgPyBbXSA6IHt9LFxuICAgICAgICBfcm91dGVyW3Byb3BlcnR5XVxuICAgICAgKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpIHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogVG9rZW5pemUgaW5wdXQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBsZXhlcihzdHIpIHtcbiAgICB2YXIgdG9rZW5zID0gW107XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHN0cltpXTtcbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKlwiIHx8IGNoYXIgPT09IFwiK1wiIHx8IGNoYXIgPT09IFwiP1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTU9ESUZJRVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVTQ0FQRURfQ0hBUlwiLCBpbmRleDogaSsrLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ7XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJPUEVOXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ9XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDTE9TRVwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiOlwiKSB7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvZGUgPSBzdHIuY2hhckNvZGVBdChqKTtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgLy8gYDAtOWBcbiAgICAgICAgICAgICAgICAoY29kZSA+PSA0OCAmJiBjb2RlIDw9IDU3KSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgQS1aYFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA2NSAmJiBjb2RlIDw9IDkwKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgYS16YFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA5NyAmJiBjb2RlIDw9IDEyMikgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYF9gXG4gICAgICAgICAgICAgICAgICAgIGNvZGUgPT09IDk1KSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUgKz0gc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghbmFtZSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXJhbWV0ZXIgbmFtZSBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk5BTUVcIiwgaW5kZXg6IGksIHZhbHVlOiBuYW1lIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgIHZhciBjb3VudCA9IDE7XG4gICAgICAgICAgICB2YXIgcGF0dGVybiA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUGF0dGVybiBjYW5ub3Qgc3RhcnQgd2l0aCBcXFwiP1xcXCIgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK10gKyBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiKVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50LS07XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc3RyW2pdID09PSBcIihcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RyW2ogKyAxXSAhPT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYXB0dXJpbmcgZ3JvdXBzIGFyZSBub3QgYWxsb3dlZCBhdCBcIiArIGopO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY291bnQpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuYmFsYW5jZWQgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgaWYgKCFwYXR0ZXJuKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJQQVRURVJOXCIsIGluZGV4OiBpLCB2YWx1ZTogcGF0dGVybiB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNIQVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICB9XG4gICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVORFwiLCBpbmRleDogaSwgdmFsdWU6IFwiXCIgfSk7XG4gICAgcmV0dXJuIHRva2Vucztcbn1cbi8qKlxuICogUGFyc2UgYSBzdHJpbmcgZm9yIHRoZSByYXcgdG9rZW5zLlxuICovXG5mdW5jdGlvbiBwYXJzZShzdHIsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciB0b2tlbnMgPSBsZXhlcihzdHIpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMucHJlZml4ZXMsIHByZWZpeGVzID0gX2EgPT09IHZvaWQgMCA/IFwiLi9cIiA6IF9hO1xuICAgIHZhciBkZWZhdWx0UGF0dGVybiA9IFwiW15cIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXSs/XCI7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBrZXkgPSAwO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgdmFyIHRyeUNvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICBpZiAoaSA8IHRva2Vucy5sZW5ndGggJiYgdG9rZW5zW2ldLnR5cGUgPT09IHR5cGUpXG4gICAgICAgICAgICByZXR1cm4gdG9rZW5zW2krK10udmFsdWU7XG4gICAgfTtcbiAgICB2YXIgbXVzdENvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICB2YXIgdmFsdWUgPSB0cnlDb25zdW1lKHR5cGUpO1xuICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgdmFyIF9hID0gdG9rZW5zW2ldLCBuZXh0VHlwZSA9IF9hLnR5cGUsIGluZGV4ID0gX2EuaW5kZXg7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmV4cGVjdGVkIFwiICsgbmV4dFR5cGUgKyBcIiBhdCBcIiArIGluZGV4ICsgXCIsIGV4cGVjdGVkIFwiICsgdHlwZSk7XG4gICAgfTtcbiAgICB2YXIgY29uc3VtZVRleHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBcIlwiO1xuICAgICAgICB2YXIgdmFsdWU7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICB3aGlsZSAoKHZhbHVlID0gdHJ5Q29uc3VtZShcIkNIQVJcIikgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKSkpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgd2hpbGUgKGkgPCB0b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gdHJ5Q29uc3VtZShcIkNIQVJcIik7XG4gICAgICAgIHZhciBuYW1lID0gdHJ5Q29uc3VtZShcIk5BTUVcIik7XG4gICAgICAgIHZhciBwYXR0ZXJuID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIik7XG4gICAgICAgIGlmIChuYW1lIHx8IHBhdHRlcm4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjaGFyIHx8IFwiXCI7XG4gICAgICAgICAgICBpZiAocHJlZml4ZXMuaW5kZXhPZihwcmVmaXgpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gcHJlZml4O1xuICAgICAgICAgICAgICAgIHByZWZpeCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUgfHwga2V5KyssXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IHBhdHRlcm4gfHwgZGVmYXVsdFBhdHRlcm4sXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciB2YWx1ZSA9IGNoYXIgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKTtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBwYXRoICs9IHZhbHVlO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG9wZW4gPSB0cnlDb25zdW1lKFwiT1BFTlwiKTtcbiAgICAgICAgaWYgKG9wZW4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgdmFyIG5hbWVfMSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgcGF0dGVybl8xID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgbXVzdENvbnN1bWUoXCJDTE9TRVwiKTtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lXzEgfHwgKHBhdHRlcm5fMSA/IGtleSsrIDogXCJcIiksXG4gICAgICAgICAgICAgICAgcGF0dGVybjogbmFtZV8xICYmICFwYXR0ZXJuXzEgPyBkZWZhdWx0UGF0dGVybiA6IHBhdHRlcm5fMSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IHN1ZmZpeCxcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgbXVzdENvbnN1bWUoXCJFTkRcIik7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnRzLnBhcnNlID0gcGFyc2U7XG4vKipcbiAqIENvbXBpbGUgYSBzdHJpbmcgdG8gYSB0ZW1wbGF0ZSBmdW5jdGlvbiBmb3IgdGhlIHBhdGguXG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGUoc3RyLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvRnVuY3Rpb24ocGFyc2Uoc3RyLCBvcHRpb25zKSwgb3B0aW9ucyk7XG59XG5leHBvcnRzLmNvbXBpbGUgPSBjb21waWxlO1xuLyoqXG4gKiBFeHBvc2UgYSBtZXRob2QgZm9yIHRyYW5zZm9ybWluZyB0b2tlbnMgaW50byB0aGUgcGF0aCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9GdW5jdGlvbih0b2tlbnMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciByZUZsYWdzID0gZmxhZ3Mob3B0aW9ucyk7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hLCBfYiA9IG9wdGlvbnMudmFsaWRhdGUsIHZhbGlkYXRlID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYjtcbiAgICAvLyBDb21waWxlIGFsbCB0aGUgdG9rZW5zIGludG8gcmVnZXhwcy5cbiAgICB2YXIgbWF0Y2hlcyA9IHRva2Vucy5tYXAoZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKFwiXig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSRcIiwgcmVGbGFncyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgdmFyIHBhdGggPSBcIlwiO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zW2ldO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW47XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBkYXRhID8gZGF0YVt0b2tlbi5uYW1lXSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHZhciBvcHRpb25hbCA9IHRva2VuLm1vZGlmaWVyID09PSBcIj9cIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCI7XG4gICAgICAgICAgICB2YXIgcmVwZWF0ID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIitcIjtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGlmICghcmVwZWF0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCBiZSBlbXB0eVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB2YWx1ZS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZSh2YWx1ZVtqXSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIGFsbCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZShTdHJpbmcodmFsdWUpLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB2YXIgdHlwZU9mTWVzc2FnZSA9IHJlcGVhdCA/IFwiYW4gYXJyYXlcIiA6IFwiYSBzdHJpbmdcIjtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIGJlIFwiICsgdHlwZU9mTWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfTtcbn1cbmV4cG9ydHMudG9rZW5zVG9GdW5jdGlvbiA9IHRva2Vuc1RvRnVuY3Rpb247XG4vKipcbiAqIENyZWF0ZSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBzcGVjLlxuICovXG5mdW5jdGlvbiBtYXRjaChzdHIsIG9wdGlvbnMpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIHZhciByZSA9IHBhdGhUb1JlZ2V4cChzdHIsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMubWF0Y2ggPSBtYXRjaDtcbi8qKlxuICogQ3JlYXRlIGEgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgb3V0cHV0LlxuICovXG5mdW5jdGlvbiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLmRlY29kZSwgZGVjb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2E7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwYXRobmFtZSkge1xuICAgICAgICB2YXIgbSA9IHJlLmV4ZWMocGF0aG5hbWUpO1xuICAgICAgICBpZiAoIW0pXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHZhciBwYXRoID0gbVswXSwgaW5kZXggPSBtLmluZGV4O1xuICAgICAgICB2YXIgcGFyYW1zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICBpZiAobVtpXSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIHJldHVybiBcImNvbnRpbnVlXCI7XG4gICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tpIC0gMV07XG4gICAgICAgICAgICBpZiAoa2V5Lm1vZGlmaWVyID09PSBcIipcIiB8fCBrZXkubW9kaWZpZXIgPT09IFwiK1wiKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IG1baV0uc3BsaXQoa2V5LnByZWZpeCArIGtleS5zdWZmaXgpLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZSh2YWx1ZSwga2V5KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBkZWNvZGUobVtpXSwga2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBtLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBfbG9vcF8xKGkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHBhdGg6IHBhdGgsIGluZGV4OiBpbmRleCwgcGFyYW1zOiBwYXJhbXMgfTtcbiAgICB9O1xufVxuZXhwb3J0cy5yZWdleHBUb0Z1bmN0aW9uID0gcmVnZXhwVG9GdW5jdGlvbjtcbi8qKlxuICogRXNjYXBlIGEgcmVndWxhciBleHByZXNzaW9uIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gZXNjYXBlU3RyaW5nKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFsuKyo/PV4hOiR7fSgpW1xcXXwvXFxcXF0pL2csIFwiXFxcXCQxXCIpO1xufVxuLyoqXG4gKiBHZXQgdGhlIGZsYWdzIGZvciBhIHJlZ2V4cCBmcm9tIHRoZSBvcHRpb25zLlxuICovXG5mdW5jdGlvbiBmbGFncyhvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMgJiYgb3B0aW9ucy5zZW5zaXRpdmUgPyBcIlwiIDogXCJpXCI7XG59XG4vKipcbiAqIFB1bGwgb3V0IGtleXMgZnJvbSBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cykge1xuICAgIGlmICgha2V5cylcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgLy8gVXNlIGEgbmVnYXRpdmUgbG9va2FoZWFkIHRvIG1hdGNoIG9ubHkgY2FwdHVyaW5nIGdyb3Vwcy5cbiAgICB2YXIgZ3JvdXBzID0gcGF0aC5zb3VyY2UubWF0Y2goL1xcKCg/IVxcPykvZyk7XG4gICAgaWYgKGdyb3Vwcykge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdyb3Vwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAga2V5cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBpLFxuICAgICAgICAgICAgICAgIHByZWZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG4vKipcbiAqIFRyYW5zZm9ybSBhbiBhcnJheSBpbnRvIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiBhcnJheVRvUmVnZXhwKHBhdGhzLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgdmFyIHBhcnRzID0gcGF0aHMubWFwKGZ1bmN0aW9uIChwYXRoKSB7IHJldHVybiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykuc291cmNlOyB9KTtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChcIig/OlwiICsgcGFydHMuam9pbihcInxcIikgKyBcIilcIiwgZmxhZ3Mob3B0aW9ucykpO1xufVxuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIHJlZ2V4cCBmcm9tIHN0cmluZyBpbnB1dC5cbiAqL1xuZnVuY3Rpb24gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb1JlZ2V4cChwYXJzZShwYXRoLCBvcHRpb25zKSwga2V5cywgb3B0aW9ucyk7XG59XG4vKipcbiAqIEV4cG9zZSBhIGZ1bmN0aW9uIGZvciB0YWtpbmcgdG9rZW5zIGFuZCByZXR1cm5pbmcgYSBSZWdFeHAuXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvUmVnZXhwKHRva2Vucywga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5zdHJpY3QsIHN0cmljdCA9IF9hID09PSB2b2lkIDAgPyBmYWxzZSA6IF9hLCBfYiA9IG9wdGlvbnMuc3RhcnQsIHN0YXJ0ID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYiwgX2MgPSBvcHRpb25zLmVuZCwgZW5kID0gX2MgPT09IHZvaWQgMCA/IHRydWUgOiBfYywgX2QgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2QgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2Q7XG4gICAgdmFyIGVuZHNXaXRoID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5lbmRzV2l0aCB8fCBcIlwiKSArIFwiXXwkXCI7XG4gICAgdmFyIGRlbGltaXRlciA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdXCI7XG4gICAgdmFyIHJvdXRlID0gc3RhcnQgPyBcIl5cIiA6IFwiXCI7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIHRoZSB0b2tlbnMgYW5kIGNyZWF0ZSBvdXIgcmVnZXhwIHN0cmluZy5cbiAgICBmb3IgKHZhciBfaSA9IDAsIHRva2Vuc18xID0gdG9rZW5zOyBfaSA8IHRva2Vuc18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNfMVtfaV07XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4pKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnByZWZpeCkpO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4uc3VmZml4KSk7XG4gICAgICAgICAgICBpZiAodG9rZW4ucGF0dGVybikge1xuICAgICAgICAgICAgICAgIGlmIChrZXlzKVxuICAgICAgICAgICAgICAgICAgICBrZXlzLnB1c2godG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmIChwcmVmaXggfHwgc3VmZml4KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbi5tb2RpZmllciA9PT0gXCIrXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbW9kID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiID8gXCI/XCIgOiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKCg/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSg/OlwiICsgc3VmZml4ICsgcHJlZml4ICsgXCIoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikpKilcIiArIHN1ZmZpeCArIFwiKVwiICsgbW9kO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZW5kKSB7XG4gICAgICAgIGlmICghc3RyaWN0KVxuICAgICAgICAgICAgcm91dGUgKz0gZGVsaW1pdGVyICsgXCI/XCI7XG4gICAgICAgIHJvdXRlICs9ICFvcHRpb25zLmVuZHNXaXRoID8gXCIkXCIgOiBcIig/PVwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBlbmRUb2tlbiA9IHRva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMV07XG4gICAgICAgIHZhciBpc0VuZERlbGltaXRlZCA9IHR5cGVvZiBlbmRUb2tlbiA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgICAgPyBkZWxpbWl0ZXIuaW5kZXhPZihlbmRUb2tlbltlbmRUb2tlbi5sZW5ndGggLSAxXSkgPiAtMVxuICAgICAgICAgICAgOiAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgICAgICBlbmRUb2tlbiA9PT0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAoIXN0cmljdCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIGRlbGltaXRlciArIFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKSk/XCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc0VuZERlbGltaXRlZCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPz1cIiArIGRlbGltaXRlciArIFwifFwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3IFJlZ0V4cChyb3V0ZSwgZmxhZ3Mob3B0aW9ucykpO1xufVxuZXhwb3J0cy50b2tlbnNUb1JlZ2V4cCA9IHRva2Vuc1RvUmVnZXhwO1xuLyoqXG4gKiBOb3JtYWxpemUgdGhlIGdpdmVuIHBhdGggc3RyaW5nLCByZXR1cm5pbmcgYSByZWd1bGFyIGV4cHJlc3Npb24uXG4gKlxuICogQW4gZW1wdHkgYXJyYXkgY2FuIGJlIHBhc3NlZCBpbiBmb3IgdGhlIGtleXMsIHdoaWNoIHdpbGwgaG9sZCB0aGVcbiAqIHBsYWNlaG9sZGVyIGtleSBkZXNjcmlwdGlvbnMuIEZvciBleGFtcGxlLCB1c2luZyBgL3VzZXIvOmlkYCwgYGtleXNgIHdpbGxcbiAqIGNvbnRhaW4gYFt7IG5hbWU6ICdpZCcsIGRlbGltaXRlcjogJy8nLCBvcHRpb25hbDogZmFsc2UsIHJlcGVhdDogZmFsc2UgfV1gLlxuICovXG5mdW5jdGlvbiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChwYXRoIGluc3RhbmNlb2YgUmVnRXhwKVxuICAgICAgICByZXR1cm4gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cyk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocGF0aCkpXG4gICAgICAgIHJldHVybiBhcnJheVRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMucGF0aFRvUmVnZXhwID0gcGF0aFRvUmVnZXhwO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqL1xuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoLFxuICByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCxcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcbmltcG9ydCB7IEdvb2RQYWdlQ2FjaGUsIFN0eWxlU2hlZXRUdXBsZSB9IGZyb20gJy4uLy4uLy4uL2NsaWVudC9wYWdlLWxvYWRlcidcbmltcG9ydCB7IGRlbm9ybWFsaXplUGFnZVBhdGggfSBmcm9tICcuLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vdXRpbHMvcXVlcnlzdHJpbmcnXG5pbXBvcnQgcmVzb2x2ZVJld3JpdGVzIGZyb20gJy4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuaW1wb3J0IGVzY2FwZVBhdGhEZWxpbWl0ZXJzIGZyb20gJy4vdXRpbHMvZXNjYXBlLXBhdGgtZGVsaW1pdGVycydcblxuaW50ZXJmYWNlIFRyYW5zaXRpb25PcHRpb25zIHtcbiAgc2hhbGxvdz86IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIE5leHRIaXN0b3J5U3RhdGUge1xuICB1cmw6IHN0cmluZ1xuICBhczogc3RyaW5nXG4gIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG59XG5cbnR5cGUgSGlzdG9yeVN0YXRlID0gbnVsbCB8IHsgX19OOiBmYWxzZSB9IHwgKHsgX19OOiB0cnVlIH0gJiBOZXh0SGlzdG9yeVN0YXRlKVxuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgIGNhbmNlbGxlZDogdHJ1ZSxcbiAgfSlcbn1cblxuZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoOiBzdHJpbmcsIHByZWZpeD86IHN0cmluZykge1xuICByZXR1cm4gcHJlZml4ICYmIHBhdGguc3RhcnRzV2l0aCgnLycpXG4gICAgPyBwYXRoID09PSAnLydcbiAgICAgID8gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gocHJlZml4KVxuICAgICAgOiBgJHtwcmVmaXh9JHtwYXRofWBcbiAgICA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZExvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcsXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX2kxOG5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiYgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmICFwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlKVxuICAgICAgPyBhZGRQYXRoUHJlZml4KHBhdGgsICcvJyArIGxvY2FsZSlcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxMb2NhbGUocGF0aDogc3RyaW5nLCBsb2NhbGU/OiBzdHJpbmcpIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9pMThuX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmIHBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUpXG4gICAgICA/IHBhdGguc3Vic3RyKGxvY2FsZS5sZW5ndGggKyAxKSB8fCAnLydcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbn1cblxuLyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSkgcmV0dXJuIHRydWVcbiAgdHJ5IHtcbiAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSlcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKFxuICByb3V0ZTogc3RyaW5nLFxuICBhc1BhdGhuYW1lOiBzdHJpbmcsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKSB7XG4gIGxldCBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnXG5cbiAgY29uc3QgZHluYW1pY1JlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgY29uc3QgZHluYW1pY0dyb3VwcyA9IGR5bmFtaWNSZWdleC5ncm91cHNcbiAgY29uc3QgZHluYW1pY01hdGNoZXMgPVxuICAgIC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyBnZXRSb3V0ZU1hdGNoZXIoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKSA6ICcnKSB8fFxuICAgIC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuICAgIC8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbiAgICBxdWVyeVxuXG4gIGludGVycG9sYXRlZFJvdXRlID0gcm91dGVcbiAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3VwcylcblxuICBpZiAoXG4gICAgIXBhcmFtcy5ldmVyeSgocGFyYW0pID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IGR5bmFtaWNNYXRjaGVzW3BhcmFtXSB8fCAnJ1xuICAgICAgY29uc3QgeyByZXBlYXQsIG9wdGlvbmFsIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXVxuXG4gICAgICAvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbiAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgIGxldCByZXBsYWNlZCA9IGBbJHtyZXBlYXQgPyAnLi4uJyA6ICcnfSR7cGFyYW19XWBcbiAgICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gXG4gICAgICB9XG4gICAgICBpZiAocmVwZWF0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSBbdmFsdWVdXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIChvcHRpb25hbCB8fCBwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykgJiZcbiAgICAgICAgLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG4gICAgICAgIChpbnRlcnBvbGF0ZWRSb3V0ZSA9XG4gICAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUhLnJlcGxhY2UoXG4gICAgICAgICAgICByZXBsYWNlZCxcbiAgICAgICAgICAgIHJlcGVhdFxuICAgICAgICAgICAgICA/ICh2YWx1ZSBhcyBzdHJpbmdbXSkubWFwKGVzY2FwZVBhdGhEZWxpbWl0ZXJzKS5qb2luKCcvJylcbiAgICAgICAgICAgICAgOiBlc2NhcGVQYXRoRGVsaW1pdGVycyh2YWx1ZSBhcyBzdHJpbmcpXG4gICAgICAgICAgKSB8fCAnLycpXG4gICAgICApXG4gICAgfSlcbiAgKSB7XG4gICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuXG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICB9XG4gIHJldHVybiB7XG4gICAgcGFyYW1zLFxuICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGUsXG4gIH1cbn1cblxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSwgcGFyYW1zOiBzdHJpbmdbXSkge1xuICBjb25zdCBmaWx0ZXJlZFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG5cbiAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmICghcGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgIGZpbHRlcmVkUXVlcnlba2V5XSA9IHF1ZXJ5W2tleV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBmaWx0ZXJlZFF1ZXJ5XG59XG5cbi8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSHJlZihcbiAgY3VycmVudFBhdGg6IHN0cmluZyxcbiAgaHJlZjogVXJsLFxuICByZXNvbHZlQXM/OiBib29sZWFuXG4pOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBjb25zdCBiYXNlID0gbmV3IFVSTChjdXJyZW50UGF0aCwgJ2h0dHA6Ly9uJylcbiAgY29uc3QgdXJsQXNTdHJpbmcgPVxuICAgIHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnXG5cbiAgICBpZiAoXG4gICAgICBpc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiZcbiAgICAgIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJlxuICAgICAgcmVzb2x2ZUFzXG4gICAgKSB7XG4gICAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKVxuXG4gICAgICBjb25zdCB7IHJlc3VsdCwgcGFyYW1zIH0gPSBpbnRlcnBvbGF0ZUFzKFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5XG4gICAgICApXG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcyksXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPVxuICAgICAgZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICAgICAgOiBmaW5hbFVybC5ocmVmXG5cbiAgICByZXR1cm4gKHJlc29sdmVBc1xuICAgICAgPyBbcmVzb2x2ZWRIcmVmLCBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZdXG4gICAgICA6IHJlc29sdmVkSHJlZikgYXMgc3RyaW5nXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbn1cblxuY29uc3QgUEFHRV9MT0FEX0VSUk9SID0gU3ltYm9sKCdQQUdFX0xPQURfRVJST1InKVxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtMb2FkaW5nRXJyb3IoZXJyOiBFcnJvcik6IEVycm9yIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIFBBR0VfTE9BRF9FUlJPUiwge30pXG59XG5cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXI6IE5leHRSb3V0ZXIsIHVybDogVXJsLCBhczogVXJsKSB7XG4gIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICByZXR1cm4ge1xuICAgIHVybDogYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCB1cmwpKSxcbiAgICBhczogYXMgPyBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIGFzKSkgOiBhcyxcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzID0gUGljazxQcml2YXRlUm91dGVJbmZvLCAnQ29tcG9uZW50JyB8ICdlcnInPiAmIHtcbiAgcm91dGVyOiBSb3V0ZXJcbn0gJiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5leHBvcnQgdHlwZSBBcHBDb21wb25lbnQgPSBDb21wb25lbnRUeXBlPEFwcFByb3BzPlxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChkYXRhOiBQcml2YXRlUm91dGVJbmZvLCBBcHA6IEFwcENvbXBvbmVudCkgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IE5leHRIaXN0b3J5U3RhdGUpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5XG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzLmpzb24oKVxuICB9KVxufVxuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmOiBzdHJpbmcsIGlzU2VydmVyUmVuZGVyOiBib29sZWFuKSB7XG4gIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgLy8gbG9vcC5cbiAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICBtYXJrTG9hZGluZ0Vycm9yKGVycilcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFByaXZhdGVSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuICBfaW5GbGlnaHRSb3V0ZT86IHN0cmluZ1xuICBfc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgaW5pdGlhbFN0eWxlU2hlZXRzLFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICAgIGxvY2FsZSxcbiAgICAgIGxvY2FsZXMsXG4gICAgICBkZWZhdWx0TG9jYWxlLFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIGluaXRpYWxTdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgICAgIEFwcDogQXBwQ29tcG9uZW50XG4gICAgICB3cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICAgIGxvY2FsZT86IHN0cmluZ1xuICAgICAgbG9jYWxlcz86IHN0cmluZ1tdXG4gICAgICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzOiBpbml0aWFsU3R5bGVTaGVldHMsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgQ29tcG9uZW50OiBBcHAgYXMgQ29tcG9uZW50VHlwZSxcbiAgICAgIHN0eWxlU2hlZXRzOiBbXG4gICAgICAgIC8qIC9fYXBwIGRvZXMgbm90IG5lZWQgaXRzIHN0eWxlc2hlZXRzIG1hbmFnZWQgKi9cbiAgICAgIF0sXG4gICAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICB0aGlzLmFzUGF0aCA9XG4gICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0ID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9pMThuX1NVUFBPUlQpIHtcbiAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlXG4gICAgICB0aGlzLmxvY2FsZXMgPSBsb2NhbGVzXG4gICAgICB0aGlzLmRlZmF1bHRMb2NhbGUgPSBkZWZhdWx0TG9jYWxlXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgICBnZXRVUkwoKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcblxuICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuXG4gICAgICAgICAgbGV0IHNjcm9sbERlYm91bmNlVGltZW91dDogdW5kZWZpbmVkIHwgTm9kZUpTLlRpbWVvdXRcblxuICAgICAgICAgIGNvbnN0IGRlYm91bmNlZFNjcm9sbFNhdmUgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KSBjbGVhclRpbWVvdXQoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KVxuXG4gICAgICAgICAgICBzY3JvbGxEZWJvdW5jZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeyB1cmwsIGFzOiBjdXJBcywgb3B0aW9ucyB9ID0gaGlzdG9yeS5zdGF0ZVxuICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBjdXJBcyxcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgICBfTl9YOiB3aW5kb3cuc2Nyb2xsWCxcbiAgICAgICAgICAgICAgICAgIF9OX1k6IHdpbmRvdy5zY3JvbGxZLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0sIDEwKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBkZWJvdW5jZWRTY3JvbGxTYXZlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlIGFzIEhpc3RvcnlTdGF0ZVxuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMgfSA9IHN0YXRlXG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmICh0aGlzLmlzU3NyICYmIGFzID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UoXG4gICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgIHVybCxcbiAgICAgIGFzLFxuICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgIH0pXG4gICAgKVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBhc3luYyBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgIH1cbiAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgaWYgKFNUKSB7XG4gICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUpXG4gICAgfVxuXG4gICAgYXMgPSBhZGRMb2NhbGUoYXMsIHRoaXMubG9jYWxlLCB0aGlzLmRlZmF1bHRMb2NhbGUpXG4gICAgY29uc3QgY2xlYW5lZEFzID0gZGVsTG9jYWxlKFxuICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICB0aGlzLmxvY2FsZVxuICAgIClcbiAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXNcblxuICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSkge1xuICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXNcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpXG4gICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpXG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4gICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgLy8gd2hlbiByZXdyaXR0ZW4gdG9cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG4gICAgY29uc3QgeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLnByb21pc2VkQnVpbGRNYW5pZmVzdFxuXG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSBwYXJzZWRcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICA/IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSlcbiAgICAgIDogcGF0aG5hbWVcblxuICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpKSB7XG4gICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgIH1cblxuICAgIGxldCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG5cbiAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUykge1xuICAgICAgcmVzb2x2ZWRBcyA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgcGFyc2VSZWxhdGl2ZVVybChhcykucGF0aG5hbWUsXG4gICAgICAgIHBhZ2VzLFxuICAgICAgICBiYXNlUGF0aCxcbiAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICAocDogc3RyaW5nKSA9PiB0aGlzLl9yZXNvbHZlSHJlZih7IHBhdGhuYW1lOiBwIH0sIHBhZ2VzKS5wYXRobmFtZSFcbiAgICAgIClcblxuICAgICAgaWYgKHJlc29sdmVkQXMgIT09IGFzKSB7XG4gICAgICAgIGNvbnN0IHBvdGVudGlhbEhyZWYgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChcbiAgICAgICAgICB0aGlzLl9yZXNvbHZlSHJlZihcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZCwgeyBwYXRobmFtZTogcmVzb2x2ZWRBcyB9KSxcbiAgICAgICAgICAgIHBhZ2VzLFxuICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICApLnBhdGhuYW1lIVxuICAgICAgICApXG5cbiAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocG90ZW50aWFsSHJlZikpIHtcbiAgICAgICAgICByb3V0ZSA9IHBvdGVudGlhbEhyZWZcbiAgICAgICAgICBwYXRobmFtZSA9IHBvdGVudGlhbEhyZWZcbiAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLCB0aGlzLmxvY2FsZSlcblxuICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKVxuICAgICAgY29uc3QgYXNQYXRobmFtZSA9IHBhcnNlZEFzLnBhdGhuYW1lXG5cbiAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgY29uc3Qgc2hvdWxkSW50ZXJwb2xhdGUgPSByb3V0ZSA9PT0gYXNQYXRobmFtZVxuICAgICAgY29uc3QgaW50ZXJwb2xhdGVkQXMgPSBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICA/IGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5KVxuICAgICAgICA6ICh7fSBhcyB7IHJlc3VsdDogdW5kZWZpbmVkOyBwYXJhbXM6IHVuZGVmaW5lZCB9KVxuXG4gICAgICBpZiAoIXJvdXRlTWF0Y2ggfHwgKHNob3VsZEludGVycG9sYXRlICYmICFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/IGBJbnRlcnBvbGF0aW5nIGhyZWZgXG4gICAgICAgICAgICAgICAgICA6IGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGBcbiAgICAgICAgICAgICAgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAoc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgPyBgVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGBcbiAgICAgICAgICAgICAgOiBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKSArXG4gICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzLyR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gJ2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnXG4gICAgICAgICAgICAgICAgICA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcydcbiAgICAgICAgICAgICAgfWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc2hvdWxkSW50ZXJwb2xhdGUpIHtcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWRBcywge1xuICAgICAgICAgICAgcGF0aG5hbWU6IGludGVycG9sYXRlZEFzLnJlc3VsdCxcbiAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIGludGVycG9sYXRlZEFzLnBhcmFtcyEpLFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICB9XG4gICAgfVxuXG4gICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpXG5cbiAgICB0cnkge1xuICAgICAgY29uc3Qgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICBzaGFsbG93XG4gICAgICApXG4gICAgICBsZXQgeyBlcnJvciwgcHJvcHMsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbiAgICAgIGlmIChcbiAgICAgICAgKF9fTl9TU0cgfHwgX19OX1NTUCkgJiZcbiAgICAgICAgcHJvcHMgJiZcbiAgICAgICAgKHByb3BzIGFzIGFueSkucGFnZVByb3BzICYmXG4gICAgICAgIChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1RcbiAgICAgICkge1xuICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1RcblxuICAgICAgICAvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuICAgICAgICAvLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4gICAgICAgIC8vIGl0J3Mgbm90XG4gICAgICAgIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICBjb25zdCBwYXJzZWRIcmVmID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgICAgICAgICB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWRIcmVmLCBwYWdlcylcblxuICAgICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwYXJzZWRIcmVmLnBhdGhuYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKFxuICAgICAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICAgICAgZGVzdGluYXRpb24sXG4gICAgICAgICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgICBvcHRpb25zXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICB9XG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgbWV0aG9kLFxuICAgICAgICB1cmwsXG4gICAgICAgIGFkZExvY2FsZShhcywgdGhpcy5sb2NhbGUsIHRoaXMuZGVmYXVsdExvY2FsZSksXG4gICAgICAgIG9wdGlvbnNcbiAgICAgIClcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUhLCBxdWVyeSwgY2xlYW5lZEFzLCByb3V0ZUluZm8pLmNhdGNoKFxuICAgICAgICAoZSkgPT4ge1xuICAgICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlXG4gICAgICAgICAgZWxzZSB0aHJvdyBlXG4gICAgICAgIH1cbiAgICAgIClcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMpXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiAmJiAnX05fWCcgaW4gb3B0aW9ucykge1xuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygob3B0aW9ucyBhcyBhbnkpLl9OX1gsIChvcHRpb25zIGFzIGFueSkuX05fWSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3dcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgIH0gYXMgSGlzdG9yeVN0YXRlLFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuXG4gICAgaWYgKFBBR0VfTE9BRF9FUlJPUiBpbiBlcnIgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcylcblxuICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKClcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBwYWdlOiBDb21wb25lbnQsIHN0eWxlU2hlZXRzIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KFxuICAgICAgICAnL19lcnJvcidcbiAgICAgIClcbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgZXJyLFxuICAgICAgICBlcnJvcjogZXJyLFxuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICBlcnIsXG4gICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgIH0gYXMgYW55KVxuICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycilcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3Iocm91dGVJbmZvRXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCB0cnVlKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHNoYWxsb3c6IGJvb2xlYW4gPSBmYWxzZVxuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuXG4gICAgICBpZiAoc2hhbGxvdyAmJiBjYWNoZWRSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlZFJvdXRlSW5mb1xuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgPyBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpID0+ICh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSlcblxuICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YUhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIGRlbEJhc2VQYXRoKGFzKSxcbiAgICAgICAgICBfX05fU1NHLFxuICAgICAgICAgIHRoaXMubG9jYWxlLFxuICAgICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YTxQcml2YXRlUm91dGVJbmZvPigoKSA9PlxuICAgICAgICBfX05fU1NHXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICApXG4gICAgICApXG5cbiAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMpXG4gICAgfVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWY6IFVybE9iamVjdCwgcGFnZXM6IHN0cmluZ1tdLCBhcHBseUJhc2VQYXRoID0gdHJ1ZSkge1xuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZEhyZWZcbiAgICBjb25zdCBjbGVhblBhdGhuYW1lID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goXG4gICAgICBkZW5vcm1hbGl6ZVBhZ2VQYXRoKGFwcGx5QmFzZVBhdGggPyBkZWxCYXNlUGF0aChwYXRobmFtZSEpIDogcGF0aG5hbWUhKVxuICAgIClcblxuICAgIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgICByZXR1cm4gcGFyc2VkSHJlZlxuICAgIH1cblxuICAgIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUhKSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgcGFnZXMuc29tZSgocGFnZSkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgaXNEeW5hbWljUm91dGUocGFnZSkgJiZcbiAgICAgICAgICBnZXRSb3V0ZVJlZ2V4KHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSEpXG4gICAgICAgICkge1xuICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSBhcHBseUJhc2VQYXRoID8gYWRkQmFzZVBhdGgocGFnZSkgOiBwYWdlXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKFxuICAgICAgICB1cmwsXG4gICAgICAgIGFzUGF0aCxcbiAgICAgICAgdGhpcy5sb2NhbGUsXG4gICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgKSxcbiAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICBdKVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8R29vZFBhZ2VDYWNoZT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW2NhY2hlS2V5XSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAgYXMgQXBwQ29tcG9uZW50KVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSwgYXMpXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50IGFzIEFwcENvbXBvbmVudClcbiAgfVxufVxuIiwiLy8gZXNjYXBlIGRlbGltaXRlcnMgdXNlZCBieSBwYXRoLXRvLXJlZ2V4cFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXNjYXBlUGF0aERlbGltaXRlcnMoc2VnbWVudDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHNlZ21lbnQucmVwbGFjZSgvWy8jP10vZywgKGNoYXI6IHN0cmluZykgPT4gZW5jb2RlVVJJQ29tcG9uZW50KGNoYXIpKVxufVxuIiwiLy8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCAqIGFzIHF1ZXJ5c3RyaW5nIGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHMgPSAvaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS9cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmo6IFVybE9iamVjdCkge1xuICBsZXQgeyBhdXRoLCBob3N0bmFtZSB9ID0gdXJsT2JqXG4gIGxldCBwcm90b2NvbCA9IHVybE9iai5wcm90b2NvbCB8fCAnJ1xuICBsZXQgcGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUgfHwgJydcbiAgbGV0IGhhc2ggPSB1cmxPYmouaGFzaCB8fCAnJ1xuICBsZXQgcXVlcnkgPSB1cmxPYmoucXVlcnkgfHwgJydcbiAgbGV0IGhvc3Q6IHN0cmluZyB8IGZhbHNlID0gZmFsc2VcblxuICBhdXRoID0gYXV0aCA/IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwgJzonKSArICdAJyA6ICcnXG5cbiAgaWYgKHVybE9iai5ob3N0KSB7XG4gICAgaG9zdCA9IGF1dGggKyB1cmxPYmouaG9zdFxuICB9IGVsc2UgaWYgKGhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAofmhvc3RuYW1lLmluZGV4T2YoJzonKSA/IGBbJHtob3N0bmFtZX1dYCA6IGhvc3RuYW1lKVxuICAgIGlmICh1cmxPYmoucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB1cmxPYmoucG9ydFxuICAgIH1cbiAgfVxuXG4gIGlmIChxdWVyeSAmJiB0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgcXVlcnkgPSBTdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSBhcyBQYXJzZWRVcmxRdWVyeSkpXG4gIH1cblxuICBsZXQgc2VhcmNoID0gdXJsT2JqLnNlYXJjaCB8fCAocXVlcnkgJiYgYD8ke3F1ZXJ5fWApIHx8ICcnXG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonXG5cbiAgaWYgKFxuICAgIHVybE9iai5zbGFzaGVzIHx8XG4gICAgKCghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkgJiYgaG9zdCAhPT0gZmFsc2UpXG4gICkge1xuICAgIGhvc3QgPSAnLy8nICsgKGhvc3QgfHwgJycpXG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lWzBdICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWVcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSAnJ1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaFswXSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaFxuICBpZiAoc2VhcmNoICYmIHNlYXJjaFswXSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2hcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZW5jb2RlVVJJQ29tcG9uZW50KVxuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YFxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRMb2NhdGlvbk9yaWdpbiB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IERVTU1ZX0JBU0UgPSBuZXcgVVJMKFxuICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/ICdodHRwOi8vbicgOiBnZXRMb2NhdGlvbk9yaWdpbigpXG4pXG5cbi8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsOiBzdHJpbmcsIGJhc2U/OiBzdHJpbmcpIHtcbiAgY29uc3QgcmVzb2x2ZWRCYXNlID0gYmFzZSA/IG5ldyBVUkwoYmFzZSwgRFVNTVlfQkFTRSkgOiBEVU1NWV9CQVNFXG4gIGNvbnN0IHtcbiAgICBwYXRobmFtZSxcbiAgICBzZWFyY2hQYXJhbXMsXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZixcbiAgICBvcmlnaW4sXG4gICAgcHJvdG9jb2wsXG4gIH0gPSBuZXcgVVJMKHVybCwgcmVzb2x2ZWRCYXNlKVxuICBpZiAoXG4gICAgb3JpZ2luICE9PSBEVU1NWV9CQVNFLm9yaWdpbiB8fFxuICAgIChwcm90b2NvbCAhPT0gJ2h0dHA6JyAmJiBwcm90b2NvbCAhPT0gJ2h0dHBzOicpXG4gICkge1xuICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCcpXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWY6IGhyZWYuc2xpY2UoRFVNTVlfQkFTRS5vcmlnaW4ubGVuZ3RoKSxcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxuZXhwb3J0IHsgcGF0aFRvUmVnZXhwIH1cblxuZXhwb3J0IGNvbnN0IG1hdGNoZXJPcHRpb25zOiBwYXRoVG9SZWdleHAuVG9rZW5zVG9SZWdleHBPcHRpb25zICZcbiAgcGF0aFRvUmVnZXhwLlBhcnNlT3B0aW9ucyA9IHtcbiAgc2Vuc2l0aXZlOiBmYWxzZSxcbiAgZGVsaW1pdGVyOiAnLycsXG59XG5cbmV4cG9ydCBjb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zOiBwYXRoVG9SZWdleHAuVG9rZW5zVG9SZWdleHBPcHRpb25zICZcbiAgcGF0aFRvUmVnZXhwLlBhcnNlT3B0aW9ucyA9IHtcbiAgLi4ubWF0Y2hlck9wdGlvbnMsXG4gIHN0cmljdDogdHJ1ZSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgKGN1c3RvbVJvdXRlID0gZmFsc2UpID0+IHtcbiAgcmV0dXJuIChwYXRoOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBrZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICAgIGNvbnN0IG1hdGNoZXJSZWdleCA9IHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoXG4gICAgICBwYXRoLFxuICAgICAga2V5cyxcbiAgICAgIGN1c3RvbVJvdXRlID8gY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyA6IG1hdGNoZXJPcHRpb25zXG4gICAgKVxuICAgIGNvbnN0IG1hdGNoZXIgPSBwYXRoVG9SZWdleHAucmVnZXhwVG9GdW5jdGlvbihtYXRjaGVyUmVnZXgsIGtleXMpXG5cbiAgICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkLCBwYXJhbXM/OiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHJlcyA9IHBhdGhuYW1lID09IG51bGwgPyBmYWxzZSA6IG1hdGNoZXIocGF0aG5hbWUpXG4gICAgICBpZiAoIXJlcykge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cblxuICAgICAgaWYgKGN1c3RvbVJvdXRlKSB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgICAvLyB1bm5hbWVkIHBhcmFtcyBzaG91bGQgYmUgcmVtb3ZlZCBhcyB0aGV5XG4gICAgICAgICAgLy8gYXJlIG5vdCBhbGxvd2VkIHRvIGJlIHVzZWQgaW4gdGhlIGRlc3RpbmF0aW9uXG4gICAgICAgICAgaWYgKHR5cGVvZiBrZXkubmFtZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGRlbGV0ZSAocmVzLnBhcmFtcyBhcyBhbnkpW2tleS5uYW1lXVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4geyAuLi5wYXJhbXMsIC4uLnJlcy5wYXJhbXMgfVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxudHlwZSBQYXJhbXMgPSB7IFtwYXJhbTogc3RyaW5nXTogYW55IH1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJlcGFyZURlc3RpbmF0aW9uKFxuICBkZXN0aW5hdGlvbjogc3RyaW5nLFxuICBwYXJhbXM6IFBhcmFtcyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICBhcHBlbmRQYXJhbXNUb1F1ZXJ5OiBib29sZWFuLFxuICBiYXNlUGF0aDogc3RyaW5nXG4pIHtcbiAgbGV0IHBhcnNlZERlc3RpbmF0aW9uOiB7XG4gICAgcXVlcnk/OiBQYXJzZWRVcmxRdWVyeVxuICAgIHByb3RvY29sPzogc3RyaW5nXG4gICAgaG9zdG5hbWU/OiBzdHJpbmdcbiAgICBwb3J0Pzogc3RyaW5nXG4gIH0gJiBSZXR1cm5UeXBlPHR5cGVvZiBwYXJzZVJlbGF0aXZlVXJsPiA9IHt9IGFzIGFueVxuXG4gIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBzZWFyY2hQYXJhbXMsXG4gICAgICBoYXNoLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH0gPSBuZXcgVVJMKGRlc3RpbmF0aW9uKVxuXG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHF1ZXJ5OiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgICBoYXNoLFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGRlc3RRdWVyeSA9IHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5XG4gIGNvbnN0IGRlc3RQYXRoID0gYCR7cGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhfSR7XG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCB8fCAnJ1xuICB9YFxuICBjb25zdCBkZXN0UGF0aFBhcmFtS2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChkZXN0UGF0aCwgZGVzdFBhdGhQYXJhbUtleXMpXG5cbiAgY29uc3QgZGVzdFBhdGhQYXJhbXMgPSBkZXN0UGF0aFBhcmFtS2V5cy5tYXAoKGtleSkgPT4ga2V5Lm5hbWUpXG5cbiAgbGV0IGRlc3RpbmF0aW9uQ29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZShcbiAgICBkZXN0UGF0aCxcbiAgICAvLyB3ZSBkb24ndCB2YWxpZGF0ZSB3aGlsZSBjb21waWxpbmcgdGhlIGRlc3RpbmF0aW9uIHNpbmNlIHdlIHNob3VsZFxuICAgIC8vIGhhdmUgYWxyZWFkeSB2YWxpZGF0ZWQgYmVmb3JlIHdlIGdvdCB0byB0aGlzIHBvaW50IGFuZCB2YWxpZGF0aW5nXG4gICAgLy8gYnJlYWtzIGNvbXBpbGluZyBkZXN0aW5hdGlvbnMgd2l0aCBuYW1lZCBwYXR0ZXJuIHBhcmFtcyBmcm9tIHRoZSBzb3VyY2VcbiAgICAvLyBlLmcuIC9zb21ldGhpbmc6aGVsbG8oLiopIC0+IC9hbm90aGVyLzpoZWxsbyBpcyBicm9rZW4gd2l0aCB2YWxpZGF0aW9uXG4gICAgLy8gc2luY2UgY29tcGlsZSB2YWxpZGF0aW9uIGlzIG1lYW50IGZvciByZXZlcnNpbmcgYW5kIG5vdCBmb3IgaW5zZXJ0aW5nXG4gICAgLy8gcGFyYW1zIGZyb20gYSBzZXBhcmF0ZSBwYXRoLXJlZ2V4IGludG8gYW5vdGhlclxuICAgIHsgdmFsaWRhdGU6IGZhbHNlIH1cbiAgKVxuICBsZXQgbmV3VXJsXG5cbiAgLy8gdXBkYXRlIGFueSBwYXJhbXMgaW4gcXVlcnkgdmFsdWVzXG4gIGZvciAoY29uc3QgW2tleSwgc3RyT3JBcnJheV0gb2YgT2JqZWN0LmVudHJpZXMoZGVzdFF1ZXJ5KSkge1xuICAgIGxldCB2YWx1ZSA9IEFycmF5LmlzQXJyYXkoc3RyT3JBcnJheSkgPyBzdHJPckFycmF5WzBdIDogc3RyT3JBcnJheVxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgLy8gdGhlIHZhbHVlIG5lZWRzIHRvIHN0YXJ0IHdpdGggYSBmb3J3YXJkLXNsYXNoIHRvIGJlIGNvbXBpbGVkXG4gICAgICAvLyBjb3JyZWN0bHlcbiAgICAgIHZhbHVlID0gYC8ke3ZhbHVlfWBcbiAgICAgIGNvbnN0IHF1ZXJ5Q29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZSh2YWx1ZSwgeyB2YWxpZGF0ZTogZmFsc2UgfSlcbiAgICAgIHZhbHVlID0gcXVlcnlDb21waWxlcihwYXJhbXMpLnN1YnN0cigxKVxuICAgIH1cbiAgICBkZXN0UXVlcnlba2V5XSA9IHZhbHVlXG4gIH1cblxuICAvLyBhZGQgcGF0aCBwYXJhbXMgdG8gcXVlcnkgaWYgaXQncyBub3QgYSByZWRpcmVjdCBhbmQgbm90XG4gIC8vIGFscmVhZHkgZGVmaW5lZCBpbiBkZXN0aW5hdGlvbiBxdWVyeSBvciBwYXRoXG4gIGNvbnN0IHBhcmFtS2V5cyA9IE9iamVjdC5rZXlzKHBhcmFtcylcblxuICBpZiAoXG4gICAgYXBwZW5kUGFyYW1zVG9RdWVyeSAmJlxuICAgICFwYXJhbUtleXMuc29tZSgoa2V5KSA9PiBkZXN0UGF0aFBhcmFtcy5pbmNsdWRlcyhrZXkpKVxuICApIHtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBwYXJhbUtleXMpIHtcbiAgICAgIGlmICghKGtleSBpbiBkZXN0UXVlcnkpKSB7XG4gICAgICAgIGRlc3RRdWVyeVtrZXldID0gcGFyYW1zW2tleV1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBzaG91bGRBZGRCYXNlUGF0aCA9IGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSAmJiBiYXNlUGF0aFxuXG4gIHRyeSB7XG4gICAgbmV3VXJsID0gYCR7c2hvdWxkQWRkQmFzZVBhdGggPyBiYXNlUGF0aCA6ICcnfSR7ZGVzdGluYXRpb25Db21waWxlcihcbiAgICAgIHBhcmFtc1xuICAgICl9YFxuXG4gICAgY29uc3QgW3BhdGhuYW1lLCBoYXNoXSA9IG5ld1VybC5zcGxpdCgnIycpXG4gICAgcGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggPSBgJHtoYXNoID8gJyMnIDogJyd9JHtoYXNoIHx8ICcnfWBcbiAgICBkZWxldGUgcGFyc2VkRGVzdGluYXRpb24uc2VhcmNoXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGlmIChlcnIubWVzc2FnZS5tYXRjaCgvRXhwZWN0ZWQgLio/IHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXkvKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgVG8gdXNlIGEgbXVsdGktbWF0Y2ggaW4gdGhlIGRlc3RpbmF0aW9uIHlvdSBtdXN0IGFkZCBcXGAqXFxgIGF0IHRoZSBlbmQgb2YgdGhlIHBhcmFtIG5hbWUgdG8gc2lnbmlmeSBpdCBzaG91bGQgcmVwZWF0LiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLW11bHRpLW1hdGNoYFxuICAgICAgKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfVxuXG4gIC8vIFF1ZXJ5IG1lcmdlIG9yZGVyIGxvd2VzdCBwcmlvcml0eSB0byBoaWdoZXN0XG4gIC8vIDEuIGluaXRpYWwgVVJMIHF1ZXJ5IHZhbHVlc1xuICAvLyAyLiBwYXRoIHNlZ21lbnQgdmFsdWVzXG4gIC8vIDMuIGRlc3RpbmF0aW9uIHNwZWNpZmllZCBxdWVyeSB2YWx1ZXNcbiAgcGFyc2VkRGVzdGluYXRpb24ucXVlcnkgPSB7XG4gICAgLi4ucXVlcnksXG4gICAgLi4ucGFyc2VkRGVzdGluYXRpb24ucXVlcnksXG4gIH1cblxuICByZXR1cm4ge1xuICAgIG5ld1VybCxcbiAgICBwYXJzZWREZXN0aW5hdGlvbixcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW06IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnIHx8XG4gICAgKHR5cGVvZiBwYXJhbSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHBhcmFtKSkgfHxcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdib29sZWFuJ1xuICApIHtcbiAgICByZXR1cm4gU3RyaW5nKHBhcmFtKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKFxuICB1cmxRdWVyeTogUGFyc2VkVXJsUXVlcnlcbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxuICBPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiByZXN1bHQuYXBwZW5kKGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShpdGVtKSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihcbiAgdGFyZ2V0OiBVUkxTZWFyY2hQYXJhbXMsXG4gIC4uLnNlYXJjaFBhcmFtc0xpc3Q6IFVSTFNlYXJjaFBhcmFtc1tdXG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goKHNlYXJjaFBhcmFtcykgPT4ge1xuICAgIEFycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB0YXJnZXQuZGVsZXRlKGtleSkpXG4gICAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHRhcmdldC5hcHBlbmQoa2V5LCB2YWx1ZSkpXG4gIH0pXG4gIHJldHVybiB0YXJnZXRcbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgcGF0aE1hdGNoIGZyb20gJy4vcGF0aC1tYXRjaCdcbmltcG9ydCBwcmVwYXJlRGVzdGluYXRpb24gZnJvbSAnLi9wcmVwYXJlLWRlc3RpbmF0aW9uJ1xuaW1wb3J0IHsgUmV3cml0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9sb2FkLWN1c3RvbS1yb3V0ZXMnXG5pbXBvcnQgeyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCB9IGZyb20gJy4uLy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5cbmNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlciA9IHBhdGhNYXRjaCh0cnVlKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlUmV3cml0ZXMoXG4gIGFzUGF0aDogc3RyaW5nLFxuICBwYWdlczogc3RyaW5nW10sXG4gIGJhc2VQYXRoOiBzdHJpbmcsXG4gIHJld3JpdGVzOiBSZXdyaXRlW10sXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgcmVzb2x2ZUhyZWY6IChwYXRoOiBzdHJpbmcpID0+IHN0cmluZ1xuKSB7XG4gIGlmICghcGFnZXMuaW5jbHVkZXMoYXNQYXRoKSkge1xuICAgIGZvciAoY29uc3QgcmV3cml0ZSBvZiByZXdyaXRlcykge1xuICAgICAgY29uc3QgbWF0Y2hlciA9IGN1c3RvbVJvdXRlTWF0Y2hlcihyZXdyaXRlLnNvdXJjZSlcbiAgICAgIGNvbnN0IHBhcmFtcyA9IG1hdGNoZXIoYXNQYXRoKVxuXG4gICAgICBpZiAocGFyYW1zKSB7XG4gICAgICAgIGlmICghcmV3cml0ZS5kZXN0aW5hdGlvbikge1xuICAgICAgICAgIC8vIHRoaXMgaXMgYSBwcm94aWVkIHJld3JpdGUgd2hpY2ggaXNuJ3QgaGFuZGxlZCBvbiB0aGUgY2xpZW50XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZXN0UmVzID0gcHJlcGFyZURlc3RpbmF0aW9uKFxuICAgICAgICAgIHJld3JpdGUuZGVzdGluYXRpb24sXG4gICAgICAgICAgcGFyYW1zLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIHRydWUsXG4gICAgICAgICAgcmV3cml0ZS5iYXNlUGF0aCA9PT0gZmFsc2UgPyAnJyA6IGJhc2VQYXRoXG4gICAgICAgIClcbiAgICAgICAgYXNQYXRoID0gZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSFcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSlcblxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goYXNQYXRoKSkpIHtcbiAgICAgICAgICAvLyBjaGVjayBpZiB3ZSBub3cgbWF0Y2ggYSBwYWdlIGFzIHRoaXMgbWVhbnMgd2UgYXJlIGRvbmVcbiAgICAgICAgICAvLyByZXNvbHZpbmcgdGhlIHJld3JpdGVzXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNoZWNrIGlmIHdlIG1hdGNoIGEgZHluYW1pYy1yb3V0ZSwgaWYgc28gd2UgYnJlYWsgdGhlIHJld3JpdGVzIGNoYWluXG4gICAgICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IHJlc29sdmVIcmVmKGFzUGF0aClcblxuICAgICAgICBpZiAocmVzb2x2ZWRIcmVmICE9PSBhc1BhdGggJiYgcGFnZXMuaW5jbHVkZXMocmVzb2x2ZWRIcmVmKSkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFzUGF0aFxufVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJpbnRlcmZhY2UgR3JvdXAge1xuICBwb3M6IG51bWJlclxuICByZXBlYXQ6IGJvb2xlYW5cbiAgb3B0aW9uYWw6IGJvb2xlYW5cbn1cblxuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW06IHN0cmluZykge1xuICBjb25zdCBvcHRpb25hbCA9IHBhcmFtLnN0YXJ0c1dpdGgoJ1snKSAmJiBwYXJhbS5lbmRzV2l0aCgnXScpXG4gIGlmIChvcHRpb25hbCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMSwgLTEpXG4gIH1cbiAgY29uc3QgcmVwZWF0ID0gcGFyYW0uc3RhcnRzV2l0aCgnLi4uJylcbiAgaWYgKHJlcGVhdCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMylcbiAgfVxuICByZXR1cm4geyBrZXk6IHBhcmFtLCByZXBlYXQsIG9wdGlvbmFsIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICByb3V0ZUtleXM/OiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH1cbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH1cbn0ge1xuICBjb25zdCBzZWdtZW50cyA9IChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG4gICAgLnNsaWNlKDEpXG4gICAgLnNwbGl0KCcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICBncm91cHNba2V5XSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdCwgb3B0aW9uYWwgfVxuICAgICAgICByZXR1cm4gcmVwZWF0ID8gKG9wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKCcnKVxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgbGV0IHJvdXRlS2V5Q2hhckxlbmd0aCA9IDFcblxuICAgIC8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAgICBjb25zdCBnZXRTYWZlUm91dGVLZXkgPSAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVLZXkgPSAnJ1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlS2V5Q2hhckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdXRlS2V5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSlcbiAgICAgICAgcm91dGVLZXlDaGFyQ29kZSsrXG5cbiAgICAgICAgaWYgKHJvdXRlS2V5Q2hhckNvZGUgPiAxMjIpIHtcbiAgICAgICAgICByb3V0ZUtleUNoYXJMZW5ndGgrK1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91dGVLZXlcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUtleXM6IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5cbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICAgIC8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbiAgICAgICAgICAvLyB0aGUgbmFtZWQgcmVnZXhcbiAgICAgICAgICBsZXQgY2xlYW5lZEtleSA9IGtleS5yZXBsYWNlKC9cXFcvZywgJycpXG4gICAgICAgICAgbGV0IGludmFsaWRLZXkgPSBmYWxzZVxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4gICAgICAgICAgLy8gc2FmZSBrZXlcbiAgICAgICAgICBpZiAoY2xlYW5lZEtleS5sZW5ndGggPT09IDAgfHwgY2xlYW5lZEtleS5sZW5ndGggPiAzMCkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLCAxKSkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnZhbGlkS2V5KSB7XG4gICAgICAgICAgICBjbGVhbmVkS2V5ID0gZ2V0U2FmZVJvdXRlS2V5KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUtleXNbY2xlYW5lZEtleV0gPSBrZXlcbiAgICAgICAgICByZXR1cm4gcmVwZWF0XG4gICAgICAgICAgICA/IG9wdGlvbmFsXG4gICAgICAgICAgICAgID8gYCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2BcbiAgICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWBcbiAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJylcblxuICAgIHJldHVybiB7XG4gICAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgIGdyb3VwcyxcbiAgICAgIHJvdXRlS2V5cyxcbiAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgIGdyb3VwcyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZm9ybWF0VXJsIH0gZnJvbSAnLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybCdcbmltcG9ydCB7IE1hbmlmZXN0SXRlbSB9IGZyb20gJy4uL3NlcnZlci9sb2FkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnQG5leHQvZW52J1xuaW1wb3J0IHsgQnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL3NlcnZlci9nZXQtcGFnZS1maWxlcydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKiBodHRwczovL25leHRqcy5vcmcvYmxvZy9uZXh0LTktNCNpbnRlZ3JhdGVkLXdlYi12aXRhbHMtcmVwb3J0aW5nXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRXZWJWaXRhbHNNZXRyaWMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIEhlYWRFbnRyeSA9IFtzdHJpbmcsIHsgW2tleTogc3RyaW5nXTogYW55IH1dXG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxuICBoZWFkOiBIZWFkRW50cnlbXVxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZDoge1xuICAgIEh0bWw/OiBib29sZWFuXG4gICAgTWFpbj86IGJvb2xlYW5cbiAgICBIZWFkPzogYm9vbGVhblxuICAgIE5leHRTY3JpcHQ/OiBib29sZWFuXG4gIH1cbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG4gIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG5cbiAgcHJldmlldz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFByZXZpZXcgZGF0YSBzZXQgb24gdGhlIHJlcXVlc3QsIGlmIGFueVxuICAgKiAqL1xuICBwcmV2aWV3RGF0YT86IGFueVxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHN0YXR1czogbnVtYmVyLCB1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmw6IFVybE9iamVjdCk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXRVcmwodXJsKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVQYXRoU2VwPW5vcm1hbGl6ZVBhdGhTZXA7ZXhwb3J0cy5kZW5vcm1hbGl6ZVBhZ2VQYXRoPWRlbm9ybWFsaXplUGFnZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplUGF0aFNlcChwYXRoKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXFxcL2csJy8nKTt9ZnVuY3Rpb24gZGVub3JtYWxpemVQYWdlUGF0aChwYWdlKXtwYWdlPW5vcm1hbGl6ZVBhdGhTZXAocGFnZSk7aWYocGFnZS5zdGFydHNXaXRoKCcvaW5kZXgvJykpe3BhZ2U9cGFnZS5zbGljZSg2KTt9ZWxzZSBpZihwYWdlPT09Jy9pbmRleCcpe3BhZ2U9Jy8nO31yZXR1cm4gcGFnZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBNb2RhbCwgQnV0dG9uIH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmltcG9ydCBCYW5uZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcHJvZmlsZS9CYW5uZXJcIjtcclxuaW1wb3J0IFRhYnMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcHJvZmlsZS9UYWJzXCI7XHJcbmltcG9ydCBTdG9yaWVzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3Byb2ZpbGUvU3Rvcmllc1wiO1xyXG5pbXBvcnQgQ2hhcmFjdGVycyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9wcm9maWxlL0NoYXJhY3RlcnNcIjtcclxuaW1wb3J0IEZvbGxvd2VycyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9wcm9maWxlL0ZvbGxvd2Vyc1wiO1xyXG5pbXBvcnQgTG9jYXRpb25zIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3Byb2ZpbGUvTG9jYXRpb25zXCI7XHJcbmltcG9ydCBTZXR0aW5ncyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9wcm9maWxlL1NldHRpbmdzXCI7XHJcblxyXG5pbXBvcnQgeyBnZXRQcm9maWxlIH0gZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvbnMvdXNlckFjdGlvbnNcIjtcclxuaW1wb3J0IHtcclxuICBnZXRVc2VyU3RvcmllcyxcclxuICBnZXRGYXZvcml0ZVN0b3JpZXMsXHJcbiAgZ2V0VXNlckxvY2F0aW9ucyxcclxufSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9ucy9zdG9yaWVzQWN0aW9uc1wiO1xyXG5pbXBvcnQge1xyXG4gIGdldFVzZXJDaGFyYWN0ZXJzLFxyXG4gIGdldEZhdm9yaXRlQ2hhcmFjdGVycyxcclxufSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9ucy9jaGFyYWN0ZXJzQWN0aW9uc1wiO1xyXG5pbXBvcnQge1xyXG4gIGdldEZhdm9yaXRlQXV0aG9ycyxcclxuICBnZXRGb2xsb3dlcnMsXHJcbn0gZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvbnMvdXNlckFjdGlvbnNcIjtcclxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gXCIuLi8uLi9ob29rcy91c2VySG9va3NcIjtcclxuaW1wb3J0IExvYWRpbmdTY3JlZW4gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvaG9jL0xvYWRpbmdTY3JlZW5cIjtcclxuaW1wb3J0IFJlZGlyZWN0Q29tcCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9ob2MvUmVkaXJlY3RDb21wXCI7XHJcblxyXG5jb25zdCBQcm9maWxlID0gKHtcclxuICBnZXRQcm9maWxlLFxyXG4gIHByb2ZpbGUsXHJcbiAgc3RvcmllcyxcclxuICBsb2NhdGlvbnMsXHJcbiAgZ2V0VXNlclN0b3JpZXMsXHJcbiAgZ2V0VXNlckNoYXJhY3RlcnMsXHJcbiAgZ2V0RmF2b3JpdGVBdXRob3JzLFxyXG4gIGdldEZhdm9yaXRlQ2hhcmFjdGVycyxcclxuICBnZXRGYXZvcml0ZVN0b3JpZXMsXHJcbiAgZ2V0VXNlckxvY2F0aW9ucyxcclxuICBnZXRGb2xsb3dlcnMsXHJcbiAgY2hhcmFjdGVycyxcclxuICBmYXZBdXRob3JzLFxyXG4gIGZvbGxvd2VycyxcclxuICBmYXZDaGFyYWN0ZXJzLFxyXG4gIGZhdlN0b3JpZXMsXHJcbiAgbG9hZGluZyxcclxufSkgPT4ge1xyXG4gIGNvbnN0IFt0YWJzXSA9IHVzZVN0YXRlKFtcclxuICAgIFwic3Rvcmllc1wiLFxyXG4gICAgXCJjaGFyYWN0ZXJzXCIsXHJcbiAgICBcImxvY2F0aW9uc1wiLFxyXG4gICAgXCJmYXZvcml0ZXMgc3Rvcmllc1wiLFxyXG4gICAgXCJmYXZvcml0ZXMgY2hhcmFjdGVyc1wiLFxyXG4gICAgXCJmb2xsb3dlcnNcIixcclxuICAgIFwiZm9sbG93aW5nc1wiLFxyXG4gIF0pO1xyXG4gIGNvbnN0IFtzZXR0aW5ncywgb3BlblNldHRpbmdzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbY3VycmVudFRhYiwgc2V0Q3VycmVudFRhYl0gPSB1c2VTdGF0ZShcInN0b3JpZXNcIik7XHJcbiAgY29uc3QgW2ZhdlRhYiwgc2V0RmF2VGFiXSA9IHVzZVN0YXRlKFwiZmF2YXV0aG9yc1wiKTtcclxuICBjb25zdCBbZmF2b3JpdGVTdG9yaWVzLCBzZXRGYXZvcml0ZVN0b3JpZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtmYXZvcml0ZUNoYXJhY3RlcnMsIHNldEZhdm9yaXRlQ2hhcmFjdGVyc10gPSB1c2VTdGF0ZShmYXZDaGFyYWN0ZXJzKTtcclxuICBjb25zdCBjaGFuZ2VUYWIgPSAodGFiKSA9PiBzZXRDdXJyZW50VGFiKHRhYik7XHJcblxyXG4gIGNvbnN0IGF1dGggPSB1c2VBdXRoKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoYXV0aC51c2VyKSB7XHJcbiAgICAgIGdldFByb2ZpbGUoKTtcclxuICAgICAgZ2V0VXNlclN0b3JpZXMobnVsbCwgXCJwcm9maWxlXCIpO1xyXG4gICAgICBnZXRVc2VyQ2hhcmFjdGVycygpO1xyXG4gICAgICBnZXRGYXZvcml0ZUF1dGhvcnMoKTtcclxuICAgICAgZ2V0Rm9sbG93ZXJzKCk7XHJcbiAgICAgIGdldEZhdm9yaXRlQ2hhcmFjdGVycygpO1xyXG4gICAgICBnZXRGYXZvcml0ZVN0b3JpZXMoKTtcclxuICAgICAgZ2V0VXNlckxvY2F0aW9ucygpO1xyXG4gICAgfVxyXG4gIH0sIFthdXRoXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRGYXZvcml0ZVN0b3JpZXMoXHJcbiAgICAgIGZhdlN0b3JpZXMuZmlsdGVyKChzKSA9PiBzLnB1YmxpYyB8fCBzLmF1dGhvcklkID09PSBhdXRoLnVzZXIudWlkKVxyXG4gICAgKTtcclxuICAgIHNldEZhdm9yaXRlQ2hhcmFjdGVycyhcclxuICAgICAgZmF2Q2hhcmFjdGVycy5maWx0ZXIoKHMpID0+IHMucHVibGljIHx8IHMuYXV0aG9ySWQgPT09IGF1dGgudXNlci51aWQpXHJcbiAgICApO1xyXG4gIH0sIFthdXRoLCBmYXZTdG9yaWVzLCBmYXZDaGFyYWN0ZXJzXSk7XHJcblxyXG4gIGNvbnN0IGNoYW5nZUZhdlRhYiA9ICh0YWIpID0+IHNldEZhdlRhYih0YWIpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlXCI+XHJcbiAgICAgIDxMb2FkaW5nU2NyZWVuIGxvYWRpbmc9e2F1dGguaXNMb2FkaW5nfT5cclxuICAgICAgICA8UmVkaXJlY3RDb21wIGNvbmRpdGlvbj17YXV0aC51c2VyfSB0eXBlPVwicmVkaXJlY3RcIj5cclxuICAgICAgICAgIDxCYW5uZXJcclxuICAgICAgICAgICAgY29udGV4dD1cInByaXZhdGVcIlxyXG4gICAgICAgICAgICBwcm9maWxlPXtwcm9maWxlfVxyXG4gICAgICAgICAgICBvcGVuU2V0dGluZ3M9e29wZW5TZXR0aW5nc31cclxuICAgICAgICAgICAgZmF2QXV0aG9ycz17ZmF2QXV0aG9yc31cclxuICAgICAgICAgICAgZm9sbG93ZXJzPXtmb2xsb3dlcnN9XHJcbiAgICAgICAgICAgIGNoYW5nZUZhdlRhYj17Y2hhbmdlRmF2VGFifVxyXG4gICAgICAgICAgICBmYXZUYWI9e2ZhdlRhYn1cclxuICAgICAgICAgICAgc2V0Q3VycmVudFRhYj17c2V0Q3VycmVudFRhYn1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwcm9maWxlLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPFRhYnMgY3VycmVudFRhYj17Y3VycmVudFRhYn0gdGFicz17dGFic30gY2hhbmdlVGFiPXtjaGFuZ2VUYWJ9IC8+XHJcbiAgICAgICAgICAgIHtjdXJyZW50VGFiID09PSBcInN0b3JpZXNcIiAmJiAoXHJcbiAgICAgICAgICAgICAgPFN0b3JpZXNcclxuICAgICAgICAgICAgICAgIGF1dGg9e2F1dGh9XHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxyXG4gICAgICAgICAgICAgICAgdHlwZT17XCJzaG93XCJ9XHJcbiAgICAgICAgICAgICAgICBzdG9yaWVzPXtzdG9yaWVzfVxyXG4gICAgICAgICAgICAgICAgdHlwZT17XCJwcml2YXRlUHJvZmlsZVwifVxyXG4gICAgICAgICAgICAgICAgY29udGV4dD1cInByaXZhdGVcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHtjdXJyZW50VGFiID09PSBcImNoYXJhY3RlcnNcIiAmJiAoXHJcbiAgICAgICAgICAgICAgPENoYXJhY3RlcnMgY29udGV4dD1cInByaXZhdGVcIiBjaGFyYWN0ZXJzPXtjaGFyYWN0ZXJzfSAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7Y3VycmVudFRhYiA9PT0gXCJsb2NhdGlvbnNcIiAmJiAoXHJcbiAgICAgICAgICAgICAgPExvY2F0aW9uc1xyXG4gICAgICAgICAgICAgICAgY29udGV4dD1cInByaXZhdGVcIlxyXG4gICAgICAgICAgICAgICAgbG9jYXRpb25zPXtsb2NhdGlvbnN9XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwicHJvZmlsZVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAge2N1cnJlbnRUYWIgPT09IFwiZmF2b3JpdGVzIHN0b3JpZXNcIiAmJiAoXHJcbiAgICAgICAgICAgICAgPFN0b3JpZXNcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiZmF2b3JpdGVzXCJcclxuICAgICAgICAgICAgICAgIHN0b3JpZXM9e2Zhdm9yaXRlU3Rvcmllc31cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7Y3VycmVudFRhYiA9PT0gXCJmYXZvcml0ZXMgY2hhcmFjdGVyc1wiICYmIChcclxuICAgICAgICAgICAgICA8Q2hhcmFjdGVycyB0eXBlPVwiZmF2b3JpdGVzXCIgY2hhcmFjdGVycz17ZmF2b3JpdGVDaGFyYWN0ZXJzfSAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7Y3VycmVudFRhYiA9PT0gXCJmb2xsb3dlcnNcIiAmJiAoXHJcbiAgICAgICAgICAgICAgPEZvbGxvd2Vyc1xyXG4gICAgICAgICAgICAgICAgdGl0bGU9XCJGb2xsb3dlcnNcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT17XCJmb2xsb3dlcnNcIn1cclxuICAgICAgICAgICAgICAgIGxnPXs0fVxyXG4gICAgICAgICAgICAgICAgbWQ9ezZ9XHJcbiAgICAgICAgICAgICAgICBzbT17OH1cclxuICAgICAgICAgICAgICAgIHhzPXsxMn1cclxuICAgICAgICAgICAgICAgIGl0ZW1zPXtmb2xsb3dlcnMuYXV0aG9yc31cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7Y3VycmVudFRhYiA9PT0gXCJmb2xsb3dpbmdzXCIgJiYgKFxyXG4gICAgICAgICAgICAgIDxGb2xsb3dlcnNcclxuICAgICAgICAgICAgICAgIHRpdGxlPVwiRm9sbG93aW5nc1wiXHJcbiAgICAgICAgICAgICAgICB0eXBlPXtcImZvbGxvd2luZ3NcIn1cclxuICAgICAgICAgICAgICAgIGxnPXs0fVxyXG4gICAgICAgICAgICAgICAgbWQ9ezZ9XHJcbiAgICAgICAgICAgICAgICBzbT17OH1cclxuICAgICAgICAgICAgICAgIHhzPXsxMn1cclxuICAgICAgICAgICAgICAgIGl0ZW1zPXtmYXZBdXRob3JzLmF1dGhvcnN9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICB0aXRsZT1cIlNldHRpbmdzXCJcclxuICAgICAgICAgICAgdmlzaWJsZT17c2V0dGluZ3N9XHJcbiAgICAgICAgICAgIG9uT2s9eygpID0+IG9wZW5TZXR0aW5ncyhmYWxzZSl9XHJcbiAgICAgICAgICAgIG9uQ2FuY2VsPXsoKSA9PiBvcGVuU2V0dGluZ3MoZmFsc2UpfVxyXG4gICAgICAgICAgICBmb290ZXI9e1tcclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBrZXk9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb3BlblNldHRpbmdzKGZhbHNlKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBTdWJtaXRcclxuICAgICAgICAgICAgICA8L0J1dHRvbj4sXHJcbiAgICAgICAgICAgIF19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxTZXR0aW5ncyB1c2VyPXthdXRoLnVzZXJ9IC8+XHJcbiAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgIDwvUmVkaXJlY3RDb21wPlxyXG4gICAgICA8L0xvYWRpbmdTY3JlZW4+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCBvd25Qcm9wcykgPT4gKHtcclxuICBwcm9maWxlOiBzdGF0ZS5hdXRoLnByb2ZpbGUsXHJcbiAgc3Rvcmllczogc3RhdGUuc3Rvcmllcy51c2VyU3RvcmllcyxcclxuICBjaGFyYWN0ZXJzOiBzdGF0ZS5jaGFyYWN0ZXJzLnVzZXJDaGFyYWN0ZXJzLFxyXG4gIGZhdkF1dGhvcnM6IHN0YXRlLmF1dGguZmF2QXV0aG9ycyxcclxuICBmb2xsb3dlcnM6IHN0YXRlLmF1dGguZm9sbG93ZXJzLFxyXG4gIGZhdkNoYXJhY3RlcnM6IHN0YXRlLmNoYXJhY3RlcnMuZmF2Q2hhcmFjdGVycyxcclxuICBmYXZTdG9yaWVzOiBzdGF0ZS5zdG9yaWVzLmZhdlN0b3JpZXMsXHJcbiAgbG9jYXRpb25zOiBzdGF0ZS5zdG9yaWVzLnVzZXJMb2NhdGlvbnMsXHJcbiAgbG9hZGluZzogc3RhdGUuc3Rvcmllcy5sb2FkaW5nLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7XHJcbiAgZ2V0UHJvZmlsZSxcclxuICBnZXRVc2VyU3RvcmllcyxcclxuICBnZXRVc2VyQ2hhcmFjdGVycyxcclxuICBnZXRGYXZvcml0ZUF1dGhvcnMsXHJcbiAgZ2V0Rm9sbG93ZXJzLFxyXG4gIGdldEZhdm9yaXRlQ2hhcmFjdGVycyxcclxuICBnZXRGYXZvcml0ZVN0b3JpZXMsXHJcbiAgZ2V0VXNlckxvY2F0aW9ucyxcclxufSkoUHJvZmlsZSk7XHJcbiIsImltcG9ydCB7IHR5cGVzIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBtZXNzYWdlIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgZGIsIGF1dGgsIHN0b3JhZ2UgfSBmcm9tIFwiLi4vZmJDb25maWdcIjtcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDaGFyYWN0ZXIgPSAoaWQsIHR5cGUpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGxldCByZWxBcnIgPSBbXTtcclxuICBsZXQgc3RvcnlBcnIgPSBbXTtcclxuICBkYi5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc1wiKVxyXG4gICAgLmRvYyhpZClcclxuICAgIC5nZXQoKVxyXG4gICAgLnRoZW4oKGRvYykgPT4ge1xyXG4gICAgICBpZiAoZG9jLmV4aXN0cykge1xyXG4gICAgICAgIGlmICh0eXBlID09PSBcInNob3dcIikge1xyXG4gICAgICAgICAgY29uc3QgcmVsYXRpdmVzID0gZG9jLmRhdGEoKS5yZWxhdGl2ZXNBcnI7XHJcbiAgICAgICAgICBsZXQgcmVsUXVlcmllcyA9IFtdO1xyXG4gICAgICAgICAgcmVsYXRpdmVzLmZvckVhY2goKHJlbCkgPT4ge1xyXG4gICAgICAgICAgICByZWxRdWVyaWVzLnB1c2goZGIuY29sbGVjdGlvbihcImNoYXJhY3RlcnNcIikuZG9jKHJlbCkuZ2V0KCkpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBQcm9taXNlLmFsbChyZWxRdWVyaWVzKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgcmVzLmZvckVhY2goKGNoYXIpID0+XHJcbiAgICAgICAgICAgICAgcmVsQXJyLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgLi4uY2hhci5kYXRhKCksXHJcbiAgICAgICAgICAgICAgICBpZDogY2hhci5pZCxcclxuICAgICAgICAgICAgICAgIHJlbGF0aW9uOiBkb2NcclxuICAgICAgICAgICAgICAgICAgLmRhdGEoKVxyXG4gICAgICAgICAgICAgICAgICAucmVsYXRpdmVzLmZpbmQoKGMpID0+IGMuY2hhcmFjdGVyX2lkID09PSBjaGFyLmlkKS5yZWxhdGlvbixcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbWFpblF1ZXJ5ID0gZGJcclxuICAgICAgICAgICAgICAuY29sbGVjdGlvbihcInN0b3JpZXNcIilcclxuICAgICAgICAgICAgICAud2hlcmUoXCJtYWluQ2hhcmFjdGVyc1wiLCBcImFycmF5LWNvbnRhaW5zXCIsIGlkKVxyXG4gICAgICAgICAgICAgIC5nZXQoKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNlY29uZGFyeVF1ZXJ5ID0gZGJcclxuICAgICAgICAgICAgICAuY29sbGVjdGlvbihcInN0b3JpZXNcIilcclxuICAgICAgICAgICAgICAud2hlcmUoXCJzZWNvbmRhcnlBcnJcIiwgXCJhcnJheS1jb250YWluc1wiLCBpZClcclxuICAgICAgICAgICAgICAuZ2V0KCk7XHJcblxyXG4gICAgICAgICAgICBQcm9taXNlLmFsbChbbWFpblF1ZXJ5LCBzZWNvbmRhcnlRdWVyeV0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGFsbFN0b3J5ID0gcmVzdWx0WzBdLmRvY3MuY29uY2F0KHJlc3VsdFsxXS5kb2NzKTtcclxuICAgICAgICAgICAgICBhbGxTdG9yeS5mb3JFYWNoKChzdG9yeSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc3RvcnlBcnIucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgIGlkOiBzdG9yeS5pZCxcclxuICAgICAgICAgICAgICAgICAgdGl0bGU6IHN0b3J5LmRhdGEoKS50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgYXV0aG9ySWQ6IHN0b3J5LmRhdGEoKS5hdXRob3JJZCxcclxuICAgICAgICAgICAgICAgICAgYmFubmVyOiBzdG9yeS5kYXRhKCkuYmFubmVyLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogdHlwZXMuR0VUX0NIQVJBQ1RFUixcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAgICAgY2hhcmFjdGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uZG9jLmRhdGEoKSxcclxuICAgICAgICAgICAgICAgICAgICBpZDogZG9jLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlbGF0aXZlczogcmVsQXJyLmZpbHRlcihcclxuICAgICAgICAgICAgICAgICAgICAgIChyKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoYXV0aC5jdXJyZW50VXNlciAmJiBhdXRoLmN1cnJlbnRVc2VyLnVpZCkgPT09XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgci5hdXRob3JJZCB8fCByLnB1YmxpY1xyXG4gICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgc3Rvcmllczogc3RvcnlBcnIuZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgKHIpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChhdXRoLmN1cnJlbnRVc2VyICYmIGF1dGguY3VycmVudFVzZXIudWlkKSA9PT1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICByLmF1dGhvcklkIHx8IHIucHVibGljXHJcbiAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgY2hhcmFFeGlzdHM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiB0eXBlcy5HRVRfQ0hBUkFDVEVSLFxyXG4gICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgY2hhcmFjdGVyOiB7IC4uLmRvYy5kYXRhKCksIGlkOiBkb2MuaWQgfSxcclxuICAgICAgICAgICAgICBjaGFyYUV4aXN0czogdHJ1ZSxcclxuICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiB0eXBlcy5HRVRfQ0hBUkFDVEVSLFxyXG4gICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICBjaGFyYUV4aXN0czogZmFsc2UsXHJcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYWRkQ2hhcmFjdGVyID0gKGRhdGEpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRpc3BhdGNoKHsgdHlwZTogdHlwZXMuQUREX0NIQVJBQ1RFUiwgcGF5bG9hZDogeyBsb2FkaW5nOiB0cnVlIH0gfSk7XHJcblxyXG4gIGxldCBjaGFyYUlkID0gXCJcIjtcclxuICBkYi5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc1wiKVxyXG4gICAgLmFkZCh7XHJcbiAgICAgIC4uLmRhdGEsXHJcbiAgICAgIGltYWdlOiB0eXBlb2YgZGF0YS5pbWFnZSA9PT0gXCJzdHJpbmdcIiA/IGRhdGEuaW1hZ2UgOiBcIlwiLFxyXG4gICAgICBjcmVhdGVkQXQ6IGZpcmViYXNlLmZpcmVzdG9yZS5GaWVsZFZhbHVlLnNlcnZlclRpbWVzdGFtcCgpLFxyXG4gICAgICBsaWtlc0NvdW50OiAwLFxyXG4gICAgICBsaWtlczogW10sXHJcbiAgICAgIGRpc2xpa2VzOiBbXSxcclxuICAgIH0pXHJcbiAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIGNoYXJhSWQgPSByZXMuaWQ7XHJcbiAgICAgIGNvbnN0IGltYWdlTmFtZSA9IGAke3Jlcy5pZH0ke1wiX1wifSR7ZGF0YS5maXJzdG5hbWUudG9Mb3dlckNhc2UoKX0ke1xyXG4gICAgICAgIGRhdGEubGFzdG5hbWUgJiYgXCJfXCJcclxuICAgICAgfSR7ZGF0YS5sYXN0bmFtZSAmJiBkYXRhLmxhc3RuYW1lLnRvTG93ZXJDYXNlKCl9YDtcclxuXHJcbiAgICAgIGlmICh0eXBlb2YgZGF0YS5pbWFnZSA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgIHN0b3JhZ2VcclxuICAgICAgICAgIC5yZWYoYCR7YXV0aC5jdXJyZW50VXNlci51aWR9LyR7aW1hZ2VOYW1lfWApXHJcbiAgICAgICAgICAucHV0KGRhdGEuaW1hZ2UpXHJcbiAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdG9yYWdlXHJcbiAgICAgICAgICAgICAgLnJlZihhdXRoLmN1cnJlbnRVc2VyLnVpZClcclxuICAgICAgICAgICAgICAuY2hpbGQoaW1hZ2VOYW1lKVxyXG4gICAgICAgICAgICAgIC5nZXREb3dubG9hZFVSTCgpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKCh1cmwpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGRiXHJcbiAgICAgICAgICAgICAgLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzXCIpXHJcbiAgICAgICAgICAgICAgLmRvYyhjaGFyYUlkKVxyXG4gICAgICAgICAgICAgIC51cGRhdGUoeyBpbWFnZTogdXJsIH0pO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgbWVzc2FnZS5zdWNjZXNzKFwiQ2hhcmFjdGVyIGFkZGVkIHN1Y2Nlc3NmdWxseVwiKTtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgIHR5cGU6IHR5cGVzLkFERF9DSEFSQUNURVIsXHJcbiAgICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJDaGFyYWN0ZXIgYWRkZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICAgICAgICBjaGFyYWN0ZXJJZDogY2hhcmFJZCxcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWVzc2FnZS5zdWNjZXNzKFwiQ2hhcmFjdGVyIGFkZGVkIHN1Y2Nlc3NmdWxseVwiKTtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiB0eXBlcy5BRERfQ0hBUkFDVEVSLFxyXG4gICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkNoYXJhY3RlciBhZGRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgICAgY2hhcmFjdGVySWQ6IGNoYXJhSWQsXHJcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIG1lc3NhZ2UuZXJyb3IoZXJyLm1lc3NhZ2UpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZWRpdENoYXJhY3RlciA9IChkYXRhLCBpZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGlzcGF0Y2goeyB0eXBlOiB0eXBlcy5FRElUX0NIQVJBQ1RFUiwgcGF5bG9hZDogeyBsb2FkaW5nQ2hhcmFjdGVyOiB0cnVlIH0gfSk7XHJcblxyXG4gIGNvbnN0IGltYWdlTmFtZSA9IGAke2lkfSR7XCJfXCJ9JHtkYXRhLmZpcnN0bmFtZS50b0xvd2VyQ2FzZSgpfSR7XHJcbiAgICBkYXRhLmxhc3RuYW1lICYmIFwiX1wiXHJcbiAgfSR7ZGF0YS5sYXN0bmFtZSAmJiBkYXRhLmxhc3RuYW1lLnRvTG93ZXJDYXNlKCl9YDtcclxuXHJcbiAgaWYgKGRhdGEuaW1hZ2UgJiYgdHlwZW9mIGRhdGEuaW1hZ2UgPT09IFwib2JqZWN0XCIpIHtcclxuICAgIHN0b3JhZ2VcclxuICAgICAgLnJlZihgJHthdXRoLmN1cnJlbnRVc2VyLnVpZH0vJHtpbWFnZU5hbWV9YClcclxuICAgICAgLnB1dChkYXRhLmltYWdlKVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHN0b3JhZ2VcclxuICAgICAgICAgIC5yZWYoYXV0aC5jdXJyZW50VXNlci51aWQpXHJcbiAgICAgICAgICAuY2hpbGQoaW1hZ2VOYW1lKVxyXG4gICAgICAgICAgLmdldERvd25sb2FkVVJMKCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKCh1cmwpID0+IHtcclxuICAgICAgICByZXR1cm4gZGJcclxuICAgICAgICAgIC5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc1wiKVxyXG4gICAgICAgICAgLmRvYyhpZClcclxuICAgICAgICAgIC51cGRhdGUoe1xyXG4gICAgICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgICAgICBpbWFnZTogdXJsLFxyXG4gICAgICAgICAgICByZWxhdGl2ZXNBcnI6IGRhdGEucmVsYXRpdmVzLm1hcCgoYykgPT4gYy5jaGFyYWN0ZXJfaWQpLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiB0eXBlcy5FRElUX0NIQVJBQ1RFUixcclxuICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJDaGFyYWN0ZXIgZWRpdGVkIHN1Y2Nlc3NmdWxseVwiLFxyXG4gICAgICAgICAgICBsb2FkaW5nQ2hhcmFjdGVyOiBmYWxzZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihlcnIubWVzc2FnZSk7XHJcbiAgICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBkYi5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc1wiKVxyXG4gICAgICAuZG9jKGlkKVxyXG4gICAgICAudXBkYXRlKHtcclxuICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgIHJlbGF0aXZlc0FycjogZGF0YS5yZWxhdGl2ZXMubWFwKChjKSA9PiBjLmNoYXJhY3Rlcl9pZCksXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiB0eXBlcy5FRElUX0NIQVJBQ1RFUixcclxuICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJDaGFyYWN0ZXIgZWRpdGVkIHN1Y2Nlc3NmdWxseVwiLFxyXG4gICAgICAgICAgICBsb2FkaW5nQ2hhcmFjdGVyOiBmYWxzZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihlcnIubWVzc2FnZSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkZWxldGVDaGFyYWN0ZXIgPSAoaWQsIGZpcnN0bmFtZSwgbGFzdG5hbWUpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRpc3BhdGNoKHsgdHlwZTogdHlwZXMuREVMRVRFX0NIQVJBQ1RFUiwgcGF5bG9hZDogeyBsb2FkaW5nOiB0cnVlIH0gfSk7XHJcbiAgY29uc3QgaW1hZ2VOYW1lID0gYCR7aWR9JHtcIl9cIn0ke2ZpcnN0bmFtZS50b0xvd2VyQ2FzZSgpfSR7bGFzdG5hbWUgJiYgXCJfXCJ9JHtcclxuICAgIGxhc3RuYW1lICYmIGxhc3RuYW1lLnRvTG93ZXJDYXNlKClcclxuICB9YDtcclxuICBjb25zdCBiYXRjaCA9IGRiLmJhdGNoKCk7XHJcbiAgZGIuY29sbGVjdGlvbihcImNoYXJhY3RlcnNcIilcclxuICAgIC5kb2MoaWQpXHJcbiAgICAuZGVsZXRlKClcclxuICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgaWYgKHN0b3JhZ2UucmVmKGAke2F1dGguY3VycmVudFVzZXIudWlkfS8ke2ltYWdlTmFtZX1gKSkge1xyXG4gICAgICAgIHJldHVybiBzdG9yYWdlLnJlZihgJHthdXRoLmN1cnJlbnRVc2VyLnVpZH0vJHtpbWFnZU5hbWV9YCkuZGVsZXRlKCk7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgIGRiLmNvbGxlY3Rpb24oXCJjaGFwdGVyc1wiKVxyXG4gICAgICAgIC53aGVyZShcImNoYXJhY3RlcnNcIiwgXCJhcnJheS1jb250YWluc1wiLCBpZClcclxuICAgICAgICAuZ2V0KClcclxuICAgICAgICAudGhlbigoZG9jcykgPT4ge1xyXG4gICAgICAgICAgZG9jcy5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgICAgICAgICAgYmF0Y2gudXBkYXRlKGRiLmNvbGxlY3Rpb24oXCJjaGFwdGVyc1wiKS5kb2MoZG9jLmlkKSwge1xyXG4gICAgICAgICAgICAgIGNoYXJhY3RlcnM6IGRvYy5kYXRhKCkuY2hhcmFjdGVycy5maWx0ZXIoKGMpID0+IGMgIT09IGlkKSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgIGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpXHJcbiAgICAgICAgICAgIC53aGVyZShcInNlY29uZGFyeUFyclwiLCBcImFycmF5LWNvbnRhaW5zXCIsIGlkKVxyXG4gICAgICAgICAgICAuZ2V0KClcclxuICAgICAgICAgICAgLnRoZW4oKHN0b3JpZXMpID0+IHtcclxuICAgICAgICAgICAgICBzdG9yaWVzLmZvckVhY2goKHN0b3J5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBiYXRjaC51cGRhdGUoZGIuY29sbGVjdGlvbihcInN0b3JpZXNcIikuZG9jKHN0b3J5LmlkKSwge1xyXG4gICAgICAgICAgICAgICAgICBtYWluQ2hhcmFjdGVyczogc3RvcnlcclxuICAgICAgICAgICAgICAgICAgICAuZGF0YSgpXHJcbiAgICAgICAgICAgICAgICAgICAgLm1haW5DaGFyYWN0ZXJzLmZpbHRlcigoYykgPT4gYyAhPT0gaWQpLFxyXG4gICAgICAgICAgICAgICAgICBzZWNvbmRhcnlBcnI6IHN0b3J5XHJcbiAgICAgICAgICAgICAgICAgICAgLmRhdGEoKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zZWNvbmRhcnlBcnIuZmlsdGVyKChjKSA9PiBjICE9PSBpZCksXHJcbiAgICAgICAgICAgICAgICAgIHNlY29uZGFyeUNoYXJhY3RlcnM6IHN0b3J5XHJcbiAgICAgICAgICAgICAgICAgICAgLmRhdGEoKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zZWNvbmRhcnlDaGFyYWN0ZXJzLmZpbHRlcigoYykgPT4gYy5pZCAhPT0gaWQpLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICBkYi5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc1wiKVxyXG4gICAgICAgICAgICAgICAgLndoZXJlKFwicmVsYXRpdmVzQXJyXCIsIFwiYXJyYXktY29udGFpbnNcIiwgaWQpXHJcbiAgICAgICAgICAgICAgICAuZ2V0KClcclxuICAgICAgICAgICAgICAgIC50aGVuKChjaGFyYWN0ZXJzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNoYXJhY3RlcnMuZm9yRWFjaCgoY2hhcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhdGNoLnVwZGF0ZShkYi5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc1wiKS5kb2MoY2hhci5pZCksIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHJlbGF0aXZlc0FycjogY2hhclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZGF0YSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZWxhdGl2ZXNBcnIuZmlsdGVyKChjKSA9PiBjICE9PSBpZCksXHJcbiAgICAgICAgICAgICAgICAgICAgICByZWxhdGl2ZXM6IGNoYXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmRhdGEoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVsYXRpdmVzLmZpbHRlcigoYykgPT4gYy5jaGFyYWN0ZXJfaWQgIT09IGlkKSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBkYi5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc0xpa2VzXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgLndoZXJlKFwiY2hhcmFjdGVySWRcIiwgXCI9PVwiLCBpZClcclxuICAgICAgICAgICAgICAgICAgICAuZ2V0KClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigobGlrZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGxpa2VzLmZvckVhY2goKGxpa2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmF0Y2guZGVsZXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRiLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzTGlrZXNcIikuZG9jKGxpa2UuaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgIGJhdGNoLmNvbW1pdCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogdHlwZXMuREVMRVRFX0NIQVJBQ1RFUixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkNoYXJhY3RlciBkZWxldGVkIHN1Y2Nlc3NmdWxseVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhcmFFeGlzdHM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyQ2hhcmFjdGVycyA9IChpZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgY29uc3QgdXNlcklkID0gaWQgPyBpZCA6IGF1dGguY3VycmVudFVzZXIudWlkO1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzXCIpXHJcbiAgICAud2hlcmUoXCJhdXRob3JJZFwiLCBcIj09XCIsIHVzZXJJZClcclxuICAgIC5nZXQoKVxyXG4gICAgLnRoZW4oKGRvY3MpID0+IHtcclxuICAgICAgbGV0IGl0ZW1zID0gW107XHJcbiAgICAgIGRvY3MuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICAgICAgaXRlbXMgPSBbLi4uaXRlbXMsIHsgaWQ6IGRvYy5pZCwgLi4uZG9jLmRhdGEoKSB9XS5maWx0ZXIoKGMpID0+XHJcbiAgICAgICAgICBpZCA/IGMucHVibGljIDogY1xyXG4gICAgICAgICk7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gaXRlbXM7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGl0ZW1zKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogdHlwZXMuR0VUX1VTRVJfQ0hBUkFDVEVSUywgcGF5bG9hZDogaXRlbXMgfSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRGYXZvcml0ZUNoYXJhY3RlcnMgPSAoaWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGNvbnN0IHVzZXJJZCA9IGlkID8gaWQgOiBhdXRoLmN1cnJlbnRVc2VyLnVpZDtcclxuICBkYi5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc0xpa2VzXCIpXHJcbiAgICAud2hlcmUoXCJzZW5kZXJJZFwiLCBcIj09XCIsIHVzZXJJZClcclxuICAgIC5nZXQoKVxyXG4gICAgLnRoZW4oKGRvY3MpID0+IHtcclxuICAgICAgbGV0IGZhdkFyciA9IFtdO1xyXG4gICAgICBkb2NzLmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgICAgIGZhdkFyciA9IFsuLi5mYXZBcnIsIGRvYy5kYXRhKCkuY2hhcmFjdGVySWRdO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGZhdkFycjtcclxuICAgIH0pXHJcbiAgICAudGhlbigodXNlcnMpID0+IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gdXNlcnMubWFwKCh1c2VyKSA9PlxyXG4gICAgICAgIGRiLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzXCIpLmRvYyh1c2VyKS5nZXQoKVxyXG4gICAgICApO1xyXG4gICAgICBQcm9taXNlLmFsbChyZXN1bHQpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGxldCBmYXZVc2VycyA9IFtdO1xyXG4gICAgICAgIHJlcy5mb3JFYWNoKFxyXG4gICAgICAgICAgKGRvYykgPT4gKGZhdlVzZXJzID0gWy4uLmZhdlVzZXJzLCB7IGlkOiBkb2MuaWQsIC4uLmRvYy5kYXRhKCkgfV0pXHJcbiAgICAgICAgKTtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiB0eXBlcy5HRVRfRkFWT1JJVEVfQ0hBUkFDVEVSUyxcclxuICAgICAgICAgIHBheWxvYWQ6IGZhdlVzZXJzLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldENoYXJhY3RlcnNJblN0b3J5ID0gKGlkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKVxyXG4gICAgLmRvYyhpZClcclxuICAgIC5vblNuYXBzaG90KChkb2MpID0+IHtcclxuICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IHR5cGVzLkdFVF9TVE9SWV9DSEFSQUNURVJTLFxyXG4gICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgIHNlY29uZGFyeUNoYXJhY3RlcnM6IGRvYy5kYXRhKCkuc2Vjb25kYXJ5Q2hhcmFjdGVycyxcclxuICAgICAgICAgIG1haW5BcnI6IGRvYy5kYXRhKCkubWFpbkNoYXJhY3RlcnMsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzdWJtaXRDaGFyYXRlckZlZWRiYWNrID0gKGluZm8sIGFscmVhZHlQb3N0ZWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGlmICghYXV0aC5jdXJyZW50VXNlci5lbWFpbFZlcmlmaWVkKVxyXG4gICAgcmV0dXJuIG1lc3NhZ2UuZXJyb3IoXCJZb3UgbmVlZCB0byB2ZXJpZnkgeW91ciBlbWFpbCBmaXJzdFwiKTtcclxuICBpZiAoIWluZm8uY29udGVudCkgcmV0dXJuIG1lc3NhZ2UuZXJyb3IoXCJDb250ZW50IG11c3Qgbm90IGJlIGVtcHR5XCIpO1xyXG4gIGlmIChhbHJlYWR5UG9zdGVkKSByZXR1cm4gbWVzc2FnZS5lcnJvcihcIllvdSBoYXZlIGFscmVhZHkgc2VudCBmZWVkYmFja1wiKTtcclxuXHJcbiAgZGIuY29sbGVjdGlvbihcImNvbW1lbnRzXCIpXHJcbiAgICAuYWRkKHtcclxuICAgICAgLi4uaW5mbyxcclxuICAgICAgY3JlYXRlZEF0OiBmaXJlYmFzZS5maXJlc3RvcmUuRmllbGRWYWx1ZS5zZXJ2ZXJUaW1lc3RhbXAoKSxcclxuICAgIH0pXHJcbiAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiB0eXBlcy5TVUJNSVRfQ09NTUVOVCxcclxuICAgICAgICBtZXNzYWdlOiBcIkNvbW1lbnQgcG9zdGVkIHN1Y2Nlc3NmdWxseVwiLFxyXG4gICAgICB9KTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4gbWVzc2FnZS5lcnJvcihlcnIubWVzc2FnZSkpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldENoYXJhY3RlckNvbW1lbnRzID0gKGlkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBsZXQgY29tbWVudHMgPSBbXTtcclxuICBkYi5jb2xsZWN0aW9uKFwiY29tbWVudHNcIilcclxuICAgIC53aGVyZShcImNoYXJhY3RlcklkXCIsIFwiPT1cIiwgaWQpXHJcbiAgICAub3JkZXJCeShcImNyZWF0ZWRBdFwiLCBcImFzY1wiKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigoY29tbSkgPT4ge1xyXG4gICAgICBsZXQgdXNlclF1ZXJpZXMgPSBbXTtcclxuICAgICAgY29tbS5mb3JFYWNoKChjKSA9PiBjb21tZW50cy5wdXNoKHsgLi4uYy5kYXRhKCksIGlkOiBjLmlkIH0pKTtcclxuICAgICAgY29tbWVudHMuZm9yRWFjaCgoY29tbWVudCkgPT4ge1xyXG4gICAgICAgIHVzZXJRdWVyaWVzLnB1c2goZGIuY29sbGVjdGlvbihcInVzZXJzXCIpLmRvYyhjb21tZW50LnVzZXJJZCkuZ2V0KCkpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIFByb21pc2UuYWxsKHVzZXJRdWVyaWVzKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBjb21tZW50cyA9IGNvbW1lbnRzLm1hcCgoYykgPT4gKHtcclxuICAgICAgICAgIC4uLmMsXHJcbiAgICAgICAgICB1c2VySW1hZ2U6IHJlcy5maW5kKChkKSA9PiBkLmlkID09PSBjLnVzZXJJZCkuZGF0YSgpLmltYWdlLFxyXG4gICAgICAgIH0pKTtcclxuICAgICAgICBjb25zdCB1c2VyQ29tbWVudCA9IGF1dGguY3VycmVudFVzZXJcclxuICAgICAgICAgID8gY29tbWVudHMuZmluZCgoYykgPT4gYy51c2VySWQgPT09IGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gICAgICAgICAgOiBudWxsO1xyXG4gICAgICAgIGNvbW1lbnRzID0gYXV0aC5jdXJyZW50VXNlclxyXG4gICAgICAgICAgPyBjb21tZW50cy5maWx0ZXIoKGMpID0+IGMudXNlcklkICE9PSBhdXRoLmN1cnJlbnRVc2VyLnVpZClcclxuICAgICAgICAgIDogY29tbWVudHM7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogdHlwZXMuR0VUX0NPTU1FTlRTLFxyXG4gICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICBjb21tZW50cyxcclxuICAgICAgICAgICAgdXNlckNvbW1lbnQsXHJcbiAgICAgICAgICAgIGxvYWRpbmdDb21tZW50czogZmFsc2UsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlbGV0ZUNoYXJhY3RlckNvbW1lbnQgPSAoaWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJjb21tZW50c1wiKVxyXG4gICAgLmRvYyhpZClcclxuICAgIC5kZWxldGUoKVxyXG4gICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogdHlwZXMuU1VCTUlUX0NPTU1FTlQsXHJcbiAgICAgICAgbWVzc2FnZTogXCJDb21tZW50IGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmF0ZUNvbW1lbnQgPSAoY29tbWVudElkLCB0eXBlKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkaXNwYXRjaCh7IHR5cGU6IHR5cGVzLlJBVEVfQ09NTUVOVCwgcmF0ZWQ6IHRydWUgfSk7XHJcbiAgZGIuY29sbGVjdGlvbihcImNvbW1lbnRzXCIpXHJcbiAgICAuZG9jKGNvbW1lbnRJZClcclxuICAgIC5nZXQoKVxyXG4gICAgLnRoZW4oKGRvYykgPT4ge1xyXG4gICAgICBjb25zdCBpc0xpa2VkID0gZG9jLmRhdGEoKS5saWtlZEJ5LmluY2x1ZGVzKGF1dGguY3VycmVudFVzZXIudWlkKTtcclxuICAgICAgY29uc3QgaXNEaXNsaWtlZCA9IGRvYy5kYXRhKCkuZGlzbGlrZWRCeS5pbmNsdWRlcyhhdXRoLmN1cnJlbnRVc2VyLnVpZCk7XHJcbiAgICAgIGlmICgodHlwZSA9PT0gXCJsaWtlXCIgJiYgaXNMaWtlZCkgfHwgKHR5cGUgPT09IFwiZGlzbGlrZVwiICYmIGlzRGlzbGlrZWQpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0eXBlID09PSBcImxpa2VcIikge1xyXG4gICAgICAgIGRiLmNvbGxlY3Rpb24oXCJjb21tZW50c1wiKVxyXG4gICAgICAgICAgLmRvYyhjb21tZW50SWQpXHJcbiAgICAgICAgICAudXBkYXRlKHtcclxuICAgICAgICAgICAgZGlzbGlrZWRCeTogaXNEaXNsaWtlZFxyXG4gICAgICAgICAgICAgID8gZG9jLmRhdGEoKS5kaXNsaWtlZEJ5LmZpbHRlcigoZCkgPT4gZCAhPT0gYXV0aC5jdXJyZW50VXNlci51aWQpXHJcbiAgICAgICAgICAgICAgOiBkb2MuZGF0YSgpLmRpc2xpa2VkQnksXHJcbiAgICAgICAgICAgIGxpa2VkQnk6IFsuLi5kb2MuZGF0YSgpLmxpa2VkQnksIGF1dGguY3VycmVudFVzZXIudWlkXSxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogdHlwZXMuU1VCTUlUX0NPTU1FTlQsIG1lc3NhZ2U6IFwiVm9pbG91XCIgfSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSBcImRpc2xpa2VcIikge1xyXG4gICAgICAgIGRiLmNvbGxlY3Rpb24oXCJjb21tZW50c1wiKVxyXG4gICAgICAgICAgLmRvYyhjb21tZW50SWQpXHJcbiAgICAgICAgICAudXBkYXRlKHtcclxuICAgICAgICAgICAgbGlrZWRCeTogaXNMaWtlZFxyXG4gICAgICAgICAgICAgID8gZG9jLmRhdGEoKS5saWtlZEJ5LmZpbHRlcigoZCkgPT4gZCAhPT0gYXV0aC5jdXJyZW50VXNlci51aWQpXHJcbiAgICAgICAgICAgICAgOiBkb2MuZGF0YSgpLmxpa2VkQnksXHJcbiAgICAgICAgICAgIGRpc2xpa2VkQnk6IFsuLi5kb2MuZGF0YSgpLmRpc2xpa2VkQnksIGF1dGguY3VycmVudFVzZXIudWlkXSxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogdHlwZXMuUkFURV9DT01NRU5ULCByYXRlZDogZmFsc2UgfSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbn07XHJcbiIsImltcG9ydCB7IHR5cGVzIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBkYiwgYXV0aCwgc3RvcmFnZSB9IGZyb20gXCIuLi9mYkNvbmZpZ1wiO1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlL2FwcFwiO1xyXG5pbXBvcnQgeyBtZXNzYWdlIH0gZnJvbSBcImFudGRcIjtcclxuXHJcbi8vIFNUT1JJRVNcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdG9yeSA9IChpZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGIuY29sbGVjdGlvbihcInN0b3JpZXNcIilcclxuICAgIC5kb2MoaWQpXHJcbiAgICAuZ2V0KClcclxuICAgIC50aGVuKChkb2MpID0+IHtcclxuICAgICAgaWYgKGRvYy5leGlzdHMpIHtcclxuICAgICAgICBjb25zdCBtYWluID0gZG9jLmRhdGEoKS5tYWluQ2hhcmFjdGVycztcclxuICAgICAgICBjb25zdCBzZWNvbmRhcnkgPSBkb2MuZGF0YSgpLnNlY29uZGFyeUNoYXJhY3RlcnM7XHJcbiAgICAgICAgbGV0IG1haW5BcnIgPSBbXTtcclxuICAgICAgICBsZXQgc2Vjb25kYXJ5QXJyID0gW107XHJcbiAgICAgICAgY29uc3QgbWFpblF1ZXJ5ID0gbWFpbi5tYXAoKGMpID0+XHJcbiAgICAgICAgICBkYi5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc1wiKS5kb2MoYykuZ2V0KClcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IHNlY29uZGFyeVF1ZXJ5ID0gc2Vjb25kYXJ5Lm1hcCgoYykgPT5cclxuICAgICAgICAgIGRiLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzXCIpLmRvYyhjLmlkKS5nZXQoKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgbWFpblJlcyA9IFByb21pc2UuYWxsKG1haW5RdWVyeSk7XHJcbiAgICAgICAgY29uc3Qgc2Vjb25kYXJ5UmVzID0gUHJvbWlzZS5hbGwoc2Vjb25kYXJ5UXVlcnkpO1xyXG4gICAgICAgIFByb21pc2UuYWxsKFttYWluUmVzLCBzZWNvbmRhcnlSZXNdKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgIHJlc3VsdFswXS5mb3JFYWNoKChkb2N1KSA9PiB7XHJcbiAgICAgICAgICAgIG1haW5BcnIgPSBbLi4ubWFpbkFyciwgeyAuLi5kb2N1LmRhdGEoKSwgaWQ6IGRvY3UuaWQgfV07XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHJlc3VsdFsxXS5mb3JFYWNoKChkb2N1KSA9PiB7XHJcbiAgICAgICAgICAgIHNlY29uZGFyeUFyciA9IFsuLi5zZWNvbmRhcnlBcnIsIHsgLi4uZG9jdS5kYXRhKCksIGlkOiBkb2N1LmlkIH1dO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IHR5cGVzLkdFVF9TVE9SWSxcclxuICAgICAgICAgICAgc3RvcnlFeGlzdHM6IHRydWUsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAuLi5kb2MuZGF0YSgpLFxyXG4gICAgICAgICAgICAgIGlkOiBkb2MuaWQsXHJcbiAgICAgICAgICAgICAgc2Vjb25kYXJ5Q2hhcmFjdGVyczogc2Vjb25kYXJ5QXJyLFxyXG4gICAgICAgICAgICAgIG1haW5DaGFyYWN0ZXJzOiBtYWluQXJyLFxyXG4gICAgICAgICAgICAgIG1haW5BcnI6IGRvYy5kYXRhKCkubWFpbkNoYXJhY3RlcnMsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiB0eXBlcy5ESVNQQVRDSF9FUlJPUixcclxuICAgICAgICAgIHN0b3J5RXhpc3RzOiBmYWxzZSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRTdG9yeSA9IChkYXRhKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkaXNwYXRjaCh7IHR5cGU6IHR5cGVzLkFERF9TVE9SWSwgcGF5bG9hZDogeyBsb2FkaW5nOiB0cnVlIH0gfSk7XHJcbiAgbGV0IHN0b3J5SWQgPSBcIlwiO1xyXG5cclxuICBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKVxyXG4gICAgLmFkZCh7XHJcbiAgICAgIC4uLmRhdGEsXHJcbiAgICAgIGF1dGhvcklkOiBhdXRoLmN1cnJlbnRVc2VyLnVpZCxcclxuICAgICAgYXV0aG9yTmFtZTogZGF0YS5hdXRob3JOYW1lLFxyXG4gICAgICBvbmVTaG90OiBmYWxzZSxcclxuICAgICAgYmFubmVyOiB0eXBlb2YgZGF0YS5iYW5uZXIgPT09IFwic3RyaW5nXCIgPyBkYXRhLmJhbm5lciA6IFwiXCIsXHJcbiAgICAgIGNyZWF0ZWRBdDogZmlyZWJhc2UuZmlyZXN0b3JlLkZpZWxkVmFsdWUuc2VydmVyVGltZXN0YW1wKCksXHJcbiAgICAgIGxpa2VzQ291bnQ6IDAsXHJcbiAgICAgIGNoYXB0ZXJzQ291bnQ6IDAsXHJcbiAgICAgIHNlY29uZGFyeUNoYXJhY3RlcnM6IFtdLFxyXG4gICAgICBzZWNvbmRhcnlBcnI6IFtdLFxyXG4gICAgICBmZWF0dXJlZDogZmFsc2UsXHJcbiAgICAgIG5vdGU6IDAsXHJcbiAgICAgIGNoYXB0ZXJzQ291bnQ6IDAsXHJcbiAgICAgIGNvbW1lbnRzQ291bnQ6IDAsXHJcbiAgICAgIGxhc3RVcGRhdGVkOiBmaXJlYmFzZS5maXJlc3RvcmUuRmllbGRWYWx1ZS5zZXJ2ZXJUaW1lc3RhbXAoKSxcclxuICAgIH0pXHJcbiAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIHN0b3J5SWQgPSByZXMuaWQ7XHJcbiAgICAgIGlmICh0eXBlb2YgZGF0YS5iYW5uZXIgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICBjb25zdCBpbWFnZU5hbWUgPSBgJHtyZXMuaWR9XyR7ZGF0YS50aXRsZVxyXG4gICAgICAgICAgLnRvTG93ZXJDYXNlKClcclxuICAgICAgICAgIC5zcGxpdChcIiBcIilcclxuICAgICAgICAgIC5qb2luKFwiX1wiKX1gO1xyXG4gICAgICAgIHN0b3JhZ2VcclxuICAgICAgICAgIC5yZWYoYCR7YXV0aC5jdXJyZW50VXNlci51aWR9LyR7aW1hZ2VOYW1lfWApXHJcbiAgICAgICAgICAucHV0KGRhdGEuYmFubmVyKVxyXG4gICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gc3RvcmFnZVxyXG4gICAgICAgICAgICAgIC5yZWYoYXV0aC5jdXJyZW50VXNlci51aWQpXHJcbiAgICAgICAgICAgICAgLmNoaWxkKGltYWdlTmFtZSlcclxuICAgICAgICAgICAgICAuZ2V0RG93bmxvYWRVUkwoKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbigodXJsKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBkYlxyXG4gICAgICAgICAgICAgIC5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKVxyXG4gICAgICAgICAgICAgIC5kb2Moc3RvcnlJZClcclxuICAgICAgICAgICAgICAudXBkYXRlKHsgYmFubmVyOiB1cmwgfSk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgdHlwZTogdHlwZXMuQUREX1NUT1JZLFxyXG4gICAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiU3RvcnkgYWRkZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICAgICAgICBzdG9yeUlkOiBzdG9yeUlkLFxyXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiB0eXBlcy5BRERfU1RPUlksXHJcbiAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiU3RvcnkgYWRkZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICAgIHN0b3J5SWQ6IHN0b3J5SWQsXHJcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIG1lc3NhZ2UuZXJyb3IoZXJyLm1lc3NhZ2UpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZWRpdFN0b3J5ID0gKGRhdGEsIHN0b3J5SWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRpc3BhdGNoKHsgdHlwZTogdHlwZXMuRURJVF9TVE9SWSwgcGF5bG9hZDogeyBsb2FkaW5nU3Rvcnk6IHRydWUgfSB9KTtcclxuICBjb25zdCBpbWFnZU5hbWUgPSBkYXRhLnRpdGxlLnRvTG93ZXJDYXNlKCkuc3BsaXQoXCIgXCIpLmpvaW4oXCJfXCIpO1xyXG5cclxuICBpZiAodHlwZW9mIGRhdGEuYmFubmVyID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICBzdG9yYWdlXHJcbiAgICAgIC5yZWYoYCR7YXV0aC5jdXJyZW50VXNlci51aWR9LyR7aW1hZ2VOYW1lfWApXHJcbiAgICAgIC5wdXQoZGF0YS5iYW5uZXIpXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICByZXR1cm4gc3RvcmFnZVxyXG4gICAgICAgICAgLnJlZihhdXRoLmN1cnJlbnRVc2VyLnVpZClcclxuICAgICAgICAgIC5jaGlsZChpbWFnZU5hbWUpXHJcbiAgICAgICAgICAuZ2V0RG93bmxvYWRVUkwoKTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKHVybCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBkYlxyXG4gICAgICAgICAgLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpXHJcbiAgICAgICAgICAuZG9jKHN0b3J5SWQpXHJcbiAgICAgICAgICAudXBkYXRlKHtcclxuICAgICAgICAgICAgLi4uZGF0YSxcclxuICAgICAgICAgICAgYmFubmVyOiB1cmwsXHJcbiAgICAgICAgICAgIGxhc3RVcGRhdGVkOiBmaXJlYmFzZS5maXJlc3RvcmUuRmllbGRWYWx1ZS5zZXJ2ZXJUaW1lc3RhbXAoKSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgZGIuY29sbGVjdGlvbihcImxvY2F0aW9uc1wiKVxyXG4gICAgICAgICAgLndoZXJlKFwic3RvcnlJZFwiLCBcIj09XCIsIHN0b3J5SWQpXHJcbiAgICAgICAgICAuZ2V0KClcclxuICAgICAgICAgIC50aGVuKChkb2NzKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBsb2NhdGlvblF1ZXJ5ID0gW107XHJcbiAgICAgICAgICAgIGRvY3MuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICAgICAgICAgICAgbG9jYXRpb25RdWVyeSA9IFtcclxuICAgICAgICAgICAgICAgIC4uLmxvY2F0aW9uUXVlcnksXHJcbiAgICAgICAgICAgICAgICBkYlxyXG4gICAgICAgICAgICAgICAgICAuY29sbGVjdGlvbihcImxvY2F0aW9uc1wiKVxyXG4gICAgICAgICAgICAgICAgICAuZG9jKGRvYy5pZClcclxuICAgICAgICAgICAgICAgICAgLnVwZGF0ZSh7IHN0b3J5VGl0bGU6IGRhdGEudGl0bGUgfSksXHJcbiAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFByb21pc2UuYWxsKGxvY2F0aW9uUXVlcnkpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IHR5cGVzLkVESVRfU1RPUlksXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiU3RvcnkgZWRpdGVkIHN1Y2Nlc3NmdWxseVwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBtZXNzYWdlLmVycm9yKGVyci5tZXNzYWdlKTtcclxuICAgICAgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpXHJcbiAgICAgIC5kb2Moc3RvcnlJZClcclxuICAgICAgLnVwZGF0ZSh7XHJcbiAgICAgICAgLi4uZGF0YSxcclxuICAgICAgICBsYXN0VXBkYXRlZDogZmlyZWJhc2UuZmlyZXN0b3JlLkZpZWxkVmFsdWUuc2VydmVyVGltZXN0YW1wKCksXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICBkYi5jb2xsZWN0aW9uKFwibG9jYXRpb25zXCIpXHJcbiAgICAgICAgICAud2hlcmUoXCJzdG9yeUlkXCIsIFwiPT1cIiwgc3RvcnlJZClcclxuICAgICAgICAgIC5nZXQoKVxyXG4gICAgICAgICAgLnRoZW4oKGRvY3MpID0+IHtcclxuICAgICAgICAgICAgbGV0IGxvY2F0aW9uUXVlcnkgPSBbXTtcclxuICAgICAgICAgICAgZG9jcy5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgICAgICAgICAgICBsb2NhdGlvblF1ZXJ5ID0gW1xyXG4gICAgICAgICAgICAgICAgLi4ubG9jYXRpb25RdWVyeSxcclxuICAgICAgICAgICAgICAgIGRiXHJcbiAgICAgICAgICAgICAgICAgIC5jb2xsZWN0aW9uKFwibG9jYXRpb25zXCIpXHJcbiAgICAgICAgICAgICAgICAgIC5kb2MoZG9jLmlkKVxyXG4gICAgICAgICAgICAgICAgICAudXBkYXRlKHsgc3RvcnlUaXRsZTogZGF0YS50aXRsZSB9KSxcclxuICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgUHJvbWlzZS5hbGwobG9jYXRpb25RdWVyeSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogdHlwZXMuRURJVF9TVE9SWSxcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJTdG9yeSBlZGl0ZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoZXJyLm1lc3NhZ2UpO1xyXG4gICAgICB9KTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlU3RvcnkgPSAoaWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRpc3BhdGNoKHsgdHlwZTogdHlwZXMuREVMRVRFX1NUT1JZLCBwYXlsb2FkOiB7IGxvYWRpbmc6IHRydWUgfSB9KTtcclxuICBjb25zdCBiYXRjaCA9IGRiLmJhdGNoKCk7XHJcbiAgYmF0Y2guZGVsZXRlKGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpLmRvYyhpZCkpO1xyXG4gIGNvbnN0IGNoYXB0ZXJzVG9EZWxldGUgPSBkYlxyXG4gICAgLmNvbGxlY3Rpb24oXCJjaGFwdGVyc1wiKVxyXG4gICAgLndoZXJlKFwic3RvcnlJZFwiLCBcIj09XCIsIGlkKVxyXG4gICAgLmdldCgpO1xyXG4gIGNvbnN0IGxpa2VzVG9EZWxldGUgPSBkYlxyXG4gICAgLmNvbGxlY3Rpb24oXCJzdG9yaWVzTGlrZXNcIilcclxuICAgIC53aGVyZShcInN0b3J5SWRcIiwgXCI9PVwiLCBpZClcclxuICAgIC5nZXQoKTtcclxuICBjb25zdCBsb2NhdGlvbnNUb0RlbGV0ZSA9IGRiXHJcbiAgICAuY29sbGVjdGlvbihcImxvY2F0aW9uc1wiKVxyXG4gICAgLndoZXJlKFwic3RvcnlJZFwiLCBcIj09XCIsIGlkKVxyXG4gICAgLmdldCgpO1xyXG4gIFByb21pc2UuYWxsKFtjaGFwdGVyc1RvRGVsZXRlLCBsaWtlc1RvRGVsZXRlLCBsb2NhdGlvbnNUb0RlbGV0ZV0pLnRoZW4oXHJcbiAgICAocmVzKSA9PiB7XHJcbiAgICAgIHJlc1swXS5mb3JFYWNoKChjaGFwKSA9PiB7XHJcbiAgICAgICAgYmF0Y2guZGVsZXRlKGRiLmNvbGxlY3Rpb24oXCJjaGFwdGVyc1wiKS5kb2MoY2hhcC5pZCkpO1xyXG4gICAgICB9KTtcclxuICAgICAgcmVzWzFdLmZvckVhY2goKGxpa2UpID0+IHtcclxuICAgICAgICBiYXRjaC5kZWxldGUoZGIuY29sbGVjdGlvbihcInN0b3JpZXNMaWtlc1wiKS5kb2MobGlrZS5pZCkpO1xyXG4gICAgICB9KTtcclxuICAgICAgcmVzWzJdLmZvckVhY2goKGxvYykgPT4ge1xyXG4gICAgICAgIGJhdGNoLmRlbGV0ZShkYi5jb2xsZWN0aW9uKFwibG9jYXRpb25zXCIpLmRvYyhsb2MuaWQpKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGJhdGNoLmNvbW1pdCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IHR5cGVzLkRFTEVURV9TVE9SWSxcclxuICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJTdG9yeSBkZWxldGVkIHN1Y2Nlc3NmdWxseVwiLFxyXG4gICAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICBkZWxldGVkOiB0cnVlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyU3RvcmllcyA9IChpZCwgdHlwZSkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgY29uc3QgdXNlcklkID0gaWQgPyBpZCA6IGF1dGguY3VycmVudFVzZXIudWlkO1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpXHJcbiAgICAud2hlcmUoXCJhdXRob3JJZFwiLCBcIj09XCIsIHVzZXJJZClcclxuICAgIC5vcmRlckJ5KFwiY3JlYXRlZEF0XCIsIFwiZGVzY1wiKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigoZG9jcykgPT4ge1xyXG4gICAgICBsZXQgaXRlbXMgPSBbXTtcclxuICAgICAgZG9jcy5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgICAgICBpdGVtcyA9IFsuLi5pdGVtcywgeyBpZDogZG9jLmlkLCAuLi5kb2MuZGF0YSgpIH1dLmZpbHRlcigocykgPT5cclxuICAgICAgICAgIGlkID8gcy5wdWJsaWMgOiBzXHJcbiAgICAgICAgKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBpdGVtcztcclxuICAgIH0pXHJcbiAgICAudGhlbigoaXRlbXMpID0+IHtcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiB0eXBlcy5HRVRfVVNFUl9TVE9SSUVTLCBwYXlsb2FkOiBpdGVtcyB9KTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEZhdm9yaXRlU3RvcmllcyA9IChpZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgY29uc3QgdXNlcklkID0gaWQgPyBpZCA6IGF1dGguY3VycmVudFVzZXIudWlkO1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzTGlrZXNcIilcclxuICAgIC53aGVyZShcInNlbmRlcklkXCIsIFwiPT1cIiwgdXNlcklkKVxyXG4gICAgLm9yZGVyQnkoXCJjcmVhdGVkQXRcIiwgXCJkZXNjXCIpXHJcbiAgICAuZ2V0KClcclxuICAgIC50aGVuKChkb2NzKSA9PiB7XHJcbiAgICAgIGxldCBmYXZBcnIgPSBbXTtcclxuICAgICAgZG9jcy5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgICAgICBmYXZBcnIgPSBbLi4uZmF2QXJyLCBkb2MuZGF0YSgpLnN0b3J5SWRdO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGZhdkFycjtcclxuICAgIH0pXHJcbiAgICAudGhlbigodXNlcnMpID0+IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gdXNlcnMubWFwKCh1c2VyKSA9PlxyXG4gICAgICAgIGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpLmRvYyh1c2VyKS5nZXQoKVxyXG4gICAgICApO1xyXG4gICAgICBQcm9taXNlLmFsbChyZXN1bHQpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGxldCBmYXZVc2VycyA9IFtdO1xyXG4gICAgICAgIHJlcy5mb3JFYWNoKFxyXG4gICAgICAgICAgKGRvYykgPT4gKGZhdlVzZXJzID0gWy4uLmZhdlVzZXJzLCB7IGlkOiBkb2MuaWQsIC4uLmRvYy5kYXRhKCkgfV0pXHJcbiAgICAgICAgKTtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiB0eXBlcy5HRVRfRkFWT1JJVEVfU1RPUklFUyxcclxuICAgICAgICAgIHBheWxvYWQ6IGZhdlVzZXJzLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGlzU3RvcnlGYXZvcml0ZSA9IChzdG9yeUlkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBpZiAoYXV0aC5jdXJyZW50VXNlcikge1xyXG4gICAgZGIuY29sbGVjdGlvbihcInN0b3JpZXNMaWtlc1wiKVxyXG4gICAgICAud2hlcmUoXCJzZW5kZXJJZFwiLCBcIj09XCIsIGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gICAgICAud2hlcmUoXCJzdG9yeUlkXCIsIFwiPT1cIiwgc3RvcnlJZClcclxuICAgICAgLm9uU25hcHNob3QoKHNuYXBzaG90KSA9PiB7XHJcbiAgICAgICAgY29uc3QgYW5zd2VyID0gc25hcHNob3QuZG9jc1swXSA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICByZXR1cm4gZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogdHlwZXMuSVNfU1RPUllfRkFWT1JJVEUsXHJcbiAgICAgICAgICBwYXlsb2FkOiBhbnN3ZXIsXHJcbiAgICAgICAgICBsb2FkaW5nRmF2OiBmYWxzZSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFN0b3J5VG9GYXZvcml0ZSA9IChpZCwgdXNlcm5hbWUsIHN0b3J5VGl0bGUpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIC8vIGlmIChpc0Zhdm9yaXRlKSByZXR1cm4gbWVzc2FnZS53YXJuaW5nKFwiWW91J3ZlIGFscmVhZHkgbGlrZWQgdGhpcyBzdG9yeVwiKTtcclxuICBpZiAoIWF1dGguY3VycmVudFVzZXIpXHJcbiAgICByZXR1cm4gbWVzc2FnZS5lcnJvcihcIllvdSBuZWVkIHRvIGJlIGxvZ2dlZCBpbiB0byBsaWtlIGEgc3RvcnlcIik7XHJcbiAgaWYgKCFhdXRoLmN1cnJlbnRVc2VyLmVtYWlsVmVyaWZpZWQpXHJcbiAgICByZXR1cm4gbWVzc2FnZS5lcnJvcihcIllvdSBuZWVkIHRvIHZlcmlmeSB5b3VyIGVtYWlsIGZpcnN0XCIpO1xyXG5cclxuICBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc0xpa2VzXCIpXHJcbiAgICAuYWRkKHtcclxuICAgICAgc2VuZGVyOiB1c2VybmFtZSxcclxuICAgICAgc2VuZGVySWQ6IGF1dGguY3VycmVudFVzZXIudWlkLFxyXG4gICAgICBzdG9yeUlkOiBpZCxcclxuICAgICAgY3JlYXRlZEF0OiBmaXJlYmFzZS5maXJlc3RvcmUuRmllbGRWYWx1ZS5zZXJ2ZXJUaW1lc3RhbXAoKSxcclxuICAgIH0pXHJcbiAgICAudGhlbigoKSA9PiBtZXNzYWdlLnN1Y2Nlc3MoYCR7c3RvcnlUaXRsZX0gYWRkZWQgdG8geW91ciBmYXZvcml0ZXNgKSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiBtZXNzYWdlLmVycm9yKFwiVGhlcmUgaGFzIGJlZW4gYSBwcm9ibGVtXCIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCByZW1vdmVTdG9yeUZyb21GYXZvcml0ZSA9IChpZCwgc3RvcnlUaXRsZSkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGIuY29sbGVjdGlvbihcInN0b3JpZXNMaWtlc1wiKVxyXG4gICAgLndoZXJlKFwic3RvcnlJZFwiLCBcIj09XCIsIGlkKVxyXG4gICAgLndoZXJlKFwic2VuZGVySWRcIiwgXCI9PVwiLCBhdXRoLmN1cnJlbnRVc2VyLnVpZClcclxuICAgIC5nZXQoKVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzTGlrZXNcIikuZG9jKGRhdGEuZG9jc1swXS5pZCkuZGVsZXRlKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKCkgPT4gbWVzc2FnZS5zdWNjZXNzKGAke3N0b3J5VGl0bGV9IHJlbW92ZWQgZnJvbSB5b3VyIGZhdm9yaXRlc2ApKVxyXG4gICAgLmNhdGNoKChlcnIpID0+IG1lc3NhZ2UuZXJyb3IoXCJUaGVyZSBoYXMgYmVlbiBhIHByb2JsZW1cIikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0b3J5Q2hhcmFjdGVycyA9ICgpID0+IChkaXNwYXRjaCkgPT4ge307XHJcblxyXG4vLyBDSEFQVEVSc1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZENoYXB0ZXIgPSAoZGF0YSwgc2Vjb25kYXJ5Q2hhcmFjdGVycykgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgbGV0IGNoYXBJZCA9IFwiXCI7XHJcbiAgZGlzcGF0Y2goeyB0eXBlOiB0eXBlcy5BRERfQ0hBUFRFUiwgcGF5bG9hZDogeyBsb2FkaW5nOiB0cnVlIH0gfSk7XHJcblxyXG4gIHJldHVybiBkYlxyXG4gICAgLmNvbGxlY3Rpb24oXCJjaGFwdGVyc1wiKVxyXG4gICAgLmFkZCh7XHJcbiAgICAgIC4uLmRhdGEsXHJcbiAgICAgIGF1dGhvcklkOiBhdXRoLmN1cnJlbnRVc2VyLnVpZCxcclxuICAgICAgY29tbWVudHNDb3VudDogMCxcclxuICAgICAgbm90ZTogMCxcclxuICAgICAgdm90ZXJzOiBbXSxcclxuICAgICAgdm90ZXNDb3VudDogMCxcclxuICAgICAgY3JlYXRlZEF0OiBmaXJlYmFzZS5maXJlc3RvcmUuRmllbGRWYWx1ZS5zZXJ2ZXJUaW1lc3RhbXAoKSxcclxuICAgIH0pXHJcbiAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIGNoYXBJZCA9IHJlcy5pZDtcclxuICAgICAgZGIuY29sbGVjdGlvbihcInN0b3JpZXNcIilcclxuICAgICAgICAuZG9jKGRhdGEuc3RvcnlJZClcclxuICAgICAgICAuZ2V0KClcclxuICAgICAgICAudGhlbigoc3RvcnkpID0+IHtcclxuICAgICAgICAgIGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpXHJcbiAgICAgICAgICAgIC5kb2MoZGF0YS5zdG9yeUlkKVxyXG4gICAgICAgICAgICAudXBkYXRlKHtcclxuICAgICAgICAgICAgICBjaGFwdGVyc0NvdW50OiBzdG9yeS5kYXRhKCkuY2hhcHRlcnNDb3VudCArIDEsXHJcbiAgICAgICAgICAgICAgc2Vjb25kYXJ5Q2hhcmFjdGVyczogc2Vjb25kYXJ5Q2hhcmFjdGVycyxcclxuICAgICAgICAgICAgICBzZWNvbmRhcnlBcnI6IHNlY29uZGFyeUNoYXJhY3RlcnMubWFwKChjKSA9PiBjLmlkKSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IHR5cGVzLkFERF9DSEFQVEVSLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkNoYXB0ZXIgYWRkZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICAgICAgICAgIGNoYXBJZDogY2hhcElkLFxyXG4gICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZWRpdENoYXB0ZXIgPSAoZGF0YSwgc3RvcnlJZCwgY2hhcGlkLCBzZWNvbmRhcnlDaGFyYWN0ZXJzKSA9PiAoXHJcbiAgZGlzcGF0Y2hcclxuKSA9PiB7XHJcbiAgZGlzcGF0Y2goeyB0eXBlOiB0eXBlcy5FRElUX0NIQVBURVIsIHBheWxvYWQ6IHsgbG9hZGluZzogdHJ1ZSB9IH0pO1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJjaGFwdGVyc1wiKVxyXG4gICAgLmRvYyhjaGFwaWQpXHJcbiAgICAudXBkYXRlKHsgLi4uZGF0YSB9KVxyXG4gICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKVxyXG4gICAgICAgIC5kb2Moc3RvcnlJZClcclxuICAgICAgICAuZ2V0KClcclxuICAgICAgICAudGhlbigoZG9jKSA9PiB7XHJcbiAgICAgICAgICBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKVxyXG4gICAgICAgICAgICAuZG9jKHN0b3J5SWQpXHJcbiAgICAgICAgICAgIC51cGRhdGUoe1xyXG4gICAgICAgICAgICAgIHNlY29uZGFyeUNoYXJhY3RlcnMsXHJcbiAgICAgICAgICAgICAgc2Vjb25kYXJ5QXJyOiBzZWNvbmRhcnlDaGFyYWN0ZXJzLm1hcCgoYykgPT4gYy5pZCksXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiB0eXBlcy5FRElUX0NIQVBURVIsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiQ2hhcHRlciBlZGl0ZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkZWxldGVDaGFwdGVyID0gKGlkLCBzdG9yeUlkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkaXNwYXRjaCh7IHR5cGU6IHR5cGVzLkRFTEVURV9DSEFQVEVSLCBwYXlsb2FkOiB7IGxvYWRpbmdDaGFwdGVyOiB0cnVlIH0gfSk7XHJcbiAgY29uc3QgYmF0Y2ggPSBkYi5iYXRjaCgpO1xyXG5cclxuICBjb25zdCBjb21tZW50c1RvRGVsZXRlID0gZGJcclxuICAgIC5jb2xsZWN0aW9uKFwiY29tbWVudHNcIilcclxuICAgIC53aGVyZShcImNoYXB0ZXJJZFwiLCBcIj09XCIsIGlkKVxyXG4gICAgLmdldCgpO1xyXG4gIGNvbnN0IGNoYXB0ZXIgPSBkYi5jb2xsZWN0aW9uKFwiY2hhcHRlcnNcIikuZG9jKGlkKS5nZXQoKTtcclxuICBjb25zdCBzdG9yeSA9IGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpLmRvYyhzdG9yeUlkKS5nZXQoKTtcclxuXHJcbiAgUHJvbWlzZS5hbGwoW2NoYXB0ZXIsIHN0b3J5LCBjb21tZW50c1RvRGVsZXRlXSkudGhlbigocmVzKSA9PiB7XHJcbiAgICBjb25zdCBjaGFyYWN0ZXJzRnJvbUNoYXB0ZXIgPSByZXNbMF0uZGF0YSgpLmNoYXJhY3RlcnM7XHJcbiAgICBjb25zdCBjaGFyYWN0ZXJzRnJvbVN0b3J5ID0gcmVzWzFdLmRhdGEoKS5zZWNvbmRhcnlDaGFyYWN0ZXJzO1xyXG4gICAgbGV0IG5ld0FyciA9IGNoYXJhY3RlcnNGcm9tU3RvcnlcclxuICAgICAgLm1hcCgoYykgPT4ge1xyXG4gICAgICAgIGlmIChjaGFyYWN0ZXJzRnJvbUNoYXB0ZXIuaW5jbHVkZXMoYy5pZCkpIHtcclxuICAgICAgICAgIHJldHVybiB7IC4uLmMsIHRpbWVzOiBjLnRpbWVzIC0gMSB9O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gYztcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5maWx0ZXIoKGMpID0+IGMudGltZXMgPiAwKTtcclxuICAgIGJhdGNoLnVwZGF0ZShkYi5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKS5kb2Moc3RvcnlJZCksIHtcclxuICAgICAgY2hhcHRlcnNDb3VudDogcmVzWzFdLmRhdGEoKS5jaGFwdGVyc0NvdW50IC0gMSxcclxuICAgICAgc2Vjb25kYXJ5Q2hhcmFjdGVyczogbmV3QXJyLFxyXG4gICAgICBzZWNvbmRhcnlBcnI6IG5ld0Fyci5tYXAoKGMpID0+IGMuaWQpLFxyXG4gICAgfSk7XHJcbiAgICByZXNbMl0uZm9yRWFjaCgoY29tbSkgPT5cclxuICAgICAgYmF0Y2guZGVsZXRlKGRiLmNvbGxlY3Rpb24oXCJjb21tZW50c1wiKS5kb2MoY29tbS5pZCkpXHJcbiAgICApO1xyXG4gICAgYmF0Y2guZGVsZXRlKGRiLmNvbGxlY3Rpb24oXCJjaGFwdGVyc1wiKS5kb2MoaWQpKTtcclxuICAgIGJhdGNoLmNvbW1pdCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogdHlwZXMuREVMRVRFX0NIQVBURVIsXHJcbiAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgbWVzc2FnZTogXCJDaGFwdGVyIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICBsb2FkaW5nQ2hhcHRlcjogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDaGFwdGVyID0gKHN0b3J5SWQsIGlkLCB0eXBlKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKVxyXG4gICAgLmRvYyhzdG9yeUlkKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigoZG9jKSA9PiB7XHJcbiAgICAgIGlmIChkb2MuZXhpc3RzKSB7XHJcbiAgICAgICAgZGIuY29sbGVjdGlvbihcImNoYXB0ZXJzXCIpXHJcbiAgICAgICAgICAuZG9jKGlkKVxyXG4gICAgICAgICAgLmdldCgpXHJcbiAgICAgICAgICAudGhlbigoY2hhcCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY2hhcC5leGlzdHMpIHtcclxuICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gXCJzaG93XCIpIHtcclxuICAgICAgICAgICAgICAgIGxldCBjaGFyYWN0ZXJzID0gW107XHJcbiAgICAgICAgICAgICAgICBsZXQgbG9jYXRpb25zID0gW107XHJcbiAgICAgICAgICAgICAgICBsZXQgY2hhcmFRdWVyeSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgbGV0IGxvY1F1ZXJ5ID0gW107XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjaGFyYWN0ZXJzSW5DaGFwZXIgPSBjaGFwLmRhdGEoKS5jaGFyYWN0ZXJzO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYXRpb25zSW5DaGFwZXIgPSBjaGFwLmRhdGEoKS5sb2NhdGlvbnM7XHJcbiAgICAgICAgICAgICAgICBjaGFyYWN0ZXJzSW5DaGFwZXIuZm9yRWFjaCgoY2hhcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBjaGFyYVF1ZXJ5LnB1c2goZGIuY29sbGVjdGlvbihcImNoYXJhY3RlcnNcIikuZG9jKGNoYXIpLmdldCgpKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgbG9jYXRpb25zSW5DaGFwZXIuZm9yRWFjaCgobG9jKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGxvY1F1ZXJ5LnB1c2goZGIuY29sbGVjdGlvbihcImxvY2F0aW9uc1wiKS5kb2MobG9jKS5nZXQoKSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGNoYXJhUXVlcnkgPSBQcm9taXNlLmFsbChjaGFyYVF1ZXJ5KTtcclxuICAgICAgICAgICAgICAgIGxvY1F1ZXJ5ID0gUHJvbWlzZS5hbGwobG9jUXVlcnkpO1xyXG4gICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwoW2NoYXJhUXVlcnksIGxvY1F1ZXJ5XSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHJlc1swXS5mb3JFYWNoKChjKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hhcmFjdGVycy5wdXNoKHsgLi4uYy5kYXRhKCksIGlkOiBjLmlkIH0pO1xyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgcmVzWzFdLmZvckVhY2goKGwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbnMucHVzaCh7IC4uLmwuZGF0YSgpLCBpZDogbC5pZCB9KTtcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiB0eXBlcy5HRVRfQ0hBUFRFUixcclxuICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjaGFwdGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLmNoYXAuZGF0YSgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogY2hhcC5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFyYWN0ZXJzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwdWJsaWM6IGRvYy5kYXRhKCkucHVibGljLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yeVRpdGxlOiBkb2MuZGF0YSgpLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgIGNoYXB0ZXJFeGlzdHM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgICB0eXBlOiB0eXBlcy5HRVRfQ0hBUFRFUixcclxuICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoYXB0ZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIC4uLmNoYXAuZGF0YSgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ6IGNoYXAuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICBwdWJsaWM6IGRvYy5kYXRhKCkucHVibGljLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgY2hhcHRlckV4aXN0czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiB0eXBlcy5HRVRfQ0hBUFRFUixcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHsgY2hhcHRlckV4aXN0czogZmFsc2UgfSxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogdHlwZXMuR0VUX0NIQVBURVIsXHJcbiAgICAgICAgICBwYXlsb2FkOiB7IGNoYXB0ZXJFeGlzdHM6IGZhbHNlIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldENoYXB0ZXJzID0gKGlkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkYi5jb2xsZWN0aW9uKFwiY2hhcHRlcnNcIilcclxuICAgIC53aGVyZShcInN0b3J5SWRcIiwgXCI9PVwiLCBpZClcclxuICAgIC5vcmRlckJ5KFwibnVtYmVyXCIsIFwiYXNjXCIpXHJcbiAgICAub25TbmFwc2hvdCgoZG9jcykgPT4ge1xyXG4gICAgICBsZXQgYXJyID0gW107XHJcbiAgICAgIGRvY3MuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICAgICAgYXJyLnB1c2goe1xyXG4gICAgICAgICAgYXV0aG9ySWQ6IGRvYy5kYXRhKCkuYXV0aG9ySWQsXHJcbiAgICAgICAgICBpZDogZG9jLmlkLFxyXG4gICAgICAgICAgY3JlYXRlZEF0OiBkb2MuZGF0YSgpLmNyZWF0ZWRBdCxcclxuICAgICAgICAgIG51bWJlcjogZG9jLmRhdGEoKS5udW1iZXIsXHJcbiAgICAgICAgICB0aXRsZTogZG9jLmRhdGEoKS50aXRsZSxcclxuICAgICAgICAgIGNvbW1lbnRzQ291bnQ6IGRvYy5kYXRhKCkuY29tbWVudHNDb3VudCxcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiB0eXBlcy5HRVRfQ0hBUFRFUlMsXHJcbiAgICAgICAgcGF5bG9hZDogYXJyLFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuLy8gTE9DQVRJT05TXHJcblxyXG5leHBvcnQgY29uc3QgYWRkTG9jYXRpb24gPSAoZGF0YSkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGlzcGF0Y2goeyB0eXBlOiB0eXBlcy5BRERfTE9DQVRJT04sIHBheWxvYWQ6IHsgbG9hZGluZ0xvYzogdHJ1ZSB9IH0pO1xyXG4gIGxldCBsb2NJZCA9IFwiXCI7XHJcblxyXG4gIGRiLmNvbGxlY3Rpb24oXCJsb2NhdGlvbnNcIilcclxuICAgIC5hZGQoe1xyXG4gICAgICAuLi5kYXRhLFxyXG4gICAgICBpbWFnZTogdHlwZW9mIGRhdGEuaW1hZ2UgPT09IFwic3RyaW5nXCIgPyBkYXRhLmltYWdlIDogXCJcIixcclxuICAgICAgY3JlYXRlZEF0OiBmaXJlYmFzZS5maXJlc3RvcmUuRmllbGRWYWx1ZS5zZXJ2ZXJUaW1lc3RhbXAoKSxcclxuICAgIH0pXHJcbiAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIGxvY0lkID0gcmVzLmlkO1xyXG4gICAgICBpZiAodHlwZW9mIGRhdGEuaW1hZ2UgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICBjb25zdCBpbWFnZU5hbWUgPSBgJHtsb2NJZH1fJHtkYXRhLm5hbWVcclxuICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgICAuc3BsaXQoXCIgXCIpXHJcbiAgICAgICAgICAuam9pbihcIl9cIil9YDtcclxuICAgICAgICBzdG9yYWdlXHJcbiAgICAgICAgICAucmVmKGAke2F1dGguY3VycmVudFVzZXIudWlkfS8ke2ltYWdlTmFtZX1gKVxyXG4gICAgICAgICAgLnB1dChkYXRhLmltYWdlKVxyXG4gICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gc3RvcmFnZVxyXG4gICAgICAgICAgICAgIC5yZWYoYXV0aC5jdXJyZW50VXNlci51aWQpXHJcbiAgICAgICAgICAgICAgLmNoaWxkKGltYWdlTmFtZSlcclxuICAgICAgICAgICAgICAuZ2V0RG93bmxvYWRVUkwoKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbigodXJsKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBkYi5jb2xsZWN0aW9uKFwibG9jYXRpb25zXCIpLmRvYyhsb2NJZCkudXBkYXRlKHsgaW1hZ2U6IHVybCB9KTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICB0eXBlOiB0eXBlcy5BRERfTE9DQVRJT04sXHJcbiAgICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJMb2NhdGlvbiBhZGRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgICAgICAgIGxvY0lkOiByZXMuaWQsXHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nTG9jOiBmYWxzZSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IHR5cGVzLkFERF9MT0NBVElPTixcclxuICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJMb2NhdGlvbiBhZGRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgICAgbG9jSWQ6IHJlcy5pZCxcclxuICAgICAgICAgICAgbG9hZGluZ0xvYzogZmFsc2UsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgbWVzc2FnZS5lcnJvcihlcnIubWVzc2FnZSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBlZGl0TG9jYXRpb24gPSAoZGF0YSkgPT4gKGRpc3BhdGNoKSA9PiB7fTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRMb2NhdGlvbiA9IChpZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGIuY29sbGVjdGlvbihcImxvY2F0aW9uc1wiKVxyXG4gICAgLmRvYyhpZClcclxuICAgIC5nZXQoKVxyXG4gICAgLnRoZW4oKGRvYykgPT4ge1xyXG4gICAgICBpZiAoZG9jLmV4aXN0cykge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IHR5cGVzLkdFVF9MT0NBVElPTixcclxuICAgICAgICAgIHBheWxvYWQ6IHsgLi4uZG9jLmRhdGEoKSwgaWQ6IGRvYy5pZCB9LFxyXG4gICAgICAgICAgbG9jYXRpb25FeGlzdHM6IHRydWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogdHlwZXMuR0VUX0xPQ0FUSU9OLFxyXG4gICAgICAgICAgbG9jYXRpb25FeGlzdHM6IGZhbHNlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkZWxldGVMb2NhdGlvbiA9IChpZCwgbmFtZSkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGlzcGF0Y2goeyB0eXBlOiB0eXBlcy5ERUxFVEVfQ0hBUFRFUiwgcGF5bG9hZDogeyBsb2FkaW5nOiB0cnVlIH0gfSk7XHJcbiAgY29uc3QgYmF0Y2ggPSBkYi5iYXRjaCgpO1xyXG4gIGNvbnN0IGltYWdlTmFtZSA9IGAke2lkfV8ke25hbWUudG9Mb3dlckNhc2UoKS5zcGxpdChcIiBcIikuam9pbihcIl9cIil9YDtcclxuXHJcbiAgYmF0Y2guZGVsZXRlKGRiLmNvbGxlY3Rpb24oXCJsb2NhdGlvbnNcIikuZG9jKGlkKSk7XHJcbiAgZGIuY29sbGVjdGlvbihcImNoYXB0ZXJzXCIpXHJcbiAgICAud2hlcmUoXCJsb2NhdGlvbnNcIiwgXCJhcnJheS1jb250YWluc1wiLCBpZClcclxuICAgIC5nZXQoKVxyXG4gICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICByZXMuZm9yRWFjaCgoY2hhcCkgPT5cclxuICAgICAgICBiYXRjaC51cGRhdGUoZGIuY29sbGVjdGlvbihcImNoYXB0ZXJzXCIpLmRvYyhjaGFwLmlkKSwge1xyXG4gICAgICAgICAgbG9jYXRpb25zOiBjaGFwLmRhdGEoKS5sb2NhdGlvbnMuZmlsdGVyKChjKSA9PiBjICE9PSBpZCksXHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuXHJcbiAgICAgIHN0b3JhZ2VcclxuICAgICAgICAucmVmKGAke2F1dGguY3VycmVudFVzZXIudWlkfS8ke2ltYWdlTmFtZX1gKVxyXG4gICAgICAgIC5kZWxldGUoKVxyXG4gICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgIGJhdGNoLmNvbW1pdCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgdHlwZTogdHlwZXMuREVMRVRFX0NIQVBURVIsXHJcbiAgICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkxvY2F0aW9uIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICAgICAgICBkZWxldGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgIGJhdGNoLmNvbW1pdCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgdHlwZTogdHlwZXMuREVMRVRFX0NIQVBURVIsXHJcbiAgICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkxvY2F0aW9uIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICAgICAgICBkZWxldGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFVzZXJMb2NhdGlvbnMgPSAoaWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGNvbnN0IHVzZXJJZCA9IGlkID8gaWQgOiBhdXRoLmN1cnJlbnRVc2VyLnVpZDtcclxuICBkYi5jb2xsZWN0aW9uKFwibG9jYXRpb25zXCIpXHJcbiAgICAud2hlcmUoXCJhdXRob3JJZFwiLCBcIj09XCIsIHVzZXJJZClcclxuICAgIC5nZXQoKVxyXG4gICAgLnRoZW4oKGRvY3MpID0+IHtcclxuICAgICAgbGV0IGxvY2F0aW9ucyA9IFtdO1xyXG4gICAgICBkb2NzLmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgICAgIGxvY2F0aW9ucyA9IFsuLi5sb2NhdGlvbnMsIHsgaWQ6IGRvYy5pZCwgLi4uZG9jLmRhdGEoKSB9XTtcclxuICAgICAgfSk7XHJcbiAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiB0eXBlcy5HRVRfVVNFUl9MT0NBVElPTlMsXHJcbiAgICAgICAgcGF5bG9hZDogbG9jYXRpb25zLFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0b3J5TG9jYXRpb25zID0gKHN0b3J5SWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJsb2NhdGlvbnNcIilcclxuICAgIC53aGVyZShcInN0b3J5SWRcIiwgXCI9PVwiLCBzdG9yeUlkKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigoZG9jcykgPT4ge1xyXG4gICAgICBjb25zdCBsb2NhdGlvbnMgPSBkb2NzLmRvY3MubWFwKChkb2MpID0+ICh7IC4uLmRvYy5kYXRhKCksIGlkOiBkb2MuaWQgfSkpO1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogdHlwZXMuR0VUX1NUT1JZX0xPQ0FUSU9OUyxcclxuICAgICAgICBwYXlsb2FkOiBsb2NhdGlvbnMsXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG4vLyBDT01NRU5UU1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldENvbW1lbnRzID0gKGlkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkYi5jb2xsZWN0aW9uKFwiY29tbWVudHNcIilcclxuICAgIC53aGVyZShcImNoYXB0ZXJJZFwiLCBcIj09XCIsIGlkKVxyXG4gICAgLm9yZGVyQnkoXCJjcmVhdGVkQXRcIiwgXCJkZXNjXCIpXHJcbiAgICAub25TbmFwc2hvdCgoc25hcCkgPT4ge1xyXG4gICAgICBsZXQgY29tbWVudHMgPSBzbmFwLmRvY3MubWFwKChjb21tZW50KSA9PiAoe1xyXG4gICAgICAgIC4uLmNvbW1lbnQuZGF0YSgpLFxyXG4gICAgICAgIGlkOiBjb21tZW50LmlkLFxyXG4gICAgICB9KSk7XHJcbiAgICAgIGxldCBxdWVyaWVzID0gW107XHJcbiAgICAgIGNvbW1lbnRzLmZvckVhY2goKGNvbW0pID0+IHtcclxuICAgICAgICBxdWVyaWVzLnB1c2goZGIuY29sbGVjdGlvbihcInVzZXJzXCIpLmRvYyhjb21tLnVzZXJJZCkuZ2V0KCkpO1xyXG4gICAgICB9KTtcclxuICAgICAgUHJvbWlzZS5hbGwocXVlcmllcykudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgY29tbWVudHMgPSBjb21tZW50cy5tYXAoKGNvbW0pID0+ICh7XHJcbiAgICAgICAgICAuLi5jb21tLFxyXG4gICAgICAgICAgdXNlckltYWdlOiByZXMuZmluZCgoZCkgPT4gZC5pZCA9PT0gY29tbS51c2VySWQpLmRhdGEoKS5pbWFnZSxcclxuICAgICAgICB9KSk7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogdHlwZXMuR0VUX0NPTU1FTlRTLFxyXG4gICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICBsb2FkaW5nQ29tbWVudHM6IGZhbHNlLFxyXG4gICAgICAgICAgICBjb21tZW50cyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc3VibWl0Q29tbWVudCA9IChpbmZvKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBpZiAoIWF1dGguY3VycmVudFVzZXIuZW1haWxWZXJpZmllZClcclxuICAgIHJldHVybiBtZXNzYWdlLmVycm9yKFwiWW91IG5lZWQgdG8gdmVyaWZ5IHlvdXIgZW1haWwgZmlyc3RcIik7XHJcbiAgaWYgKCFpbmZvLmNvbnRlbnQpIHJldHVybiBtZXNzYWdlLmVycm9yKFwiQ29udGVudCBtdXN0IG5vdCBiZSBlbXB0eVwiKTtcclxuXHJcbiAgY29uc3QgYmF0Y2ggPSBkYi5iYXRjaCgpO1xyXG4gIGNvbnN0IHN0b3J5ID0gZGIuY29sbGVjdGlvbihcInN0b3JpZXNcIikuZG9jKGluZm8uc3RvcnlJZCkuZ2V0KCk7XHJcbiAgY29uc3QgY2hhcHRlciA9IGRiLmNvbGxlY3Rpb24oXCJjaGFwdGVyc1wiKS5kb2MoaW5mby5jaGFwdGVySWQpLmdldCgpO1xyXG5cclxuICBQcm9taXNlLmFsbChbc3RvcnksIGNoYXB0ZXJdKVxyXG4gICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBiYXRjaC51cGRhdGUoZGIuY29sbGVjdGlvbihcInN0b3JpZXNcIikuZG9jKGluZm8uc3RvcnlJZCksIHtcclxuICAgICAgICBjb21tZW50c0NvdW50OiByZXNbMF0uZGF0YSgpLmNvbW1lbnRzQ291bnQgKyAxLFxyXG4gICAgICB9KTtcclxuICAgICAgYmF0Y2gudXBkYXRlKGRiLmNvbGxlY3Rpb24oXCJjaGFwdGVyc1wiKS5kb2MoaW5mby5jaGFwdGVySWQpLCB7XHJcbiAgICAgICAgY29tbWVudHNDb3VudDogcmVzWzFdLmRhdGEoKS5jb21tZW50c0NvdW50ICsgMSxcclxuICAgICAgfSk7XHJcbiAgICAgIGJhdGNoLmNvbW1pdCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIGRiLmNvbGxlY3Rpb24oXCJjb21tZW50c1wiKVxyXG4gICAgICAgICAgLmFkZCh7XHJcbiAgICAgICAgICAgIC4uLmluZm8sXHJcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogZmlyZWJhc2UuZmlyZXN0b3JlLkZpZWxkVmFsdWUuc2VydmVyVGltZXN0YW1wKCksXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4oKCkgPT4gbWVzc2FnZS5zdWNjZXNzKFwiQ29tbWVudCBwb3N0ZWQgc3VjY2Vzc2Z1bGx5XCIpKTtcclxuICAgICAgfSk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IG1lc3NhZ2UuZXJyb3IoZXJyLm1lc3NhZ2UpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkZWxldGVDb21tZW50ID0gKGlkLCBjaGFwaWQsIHN0b3J5SWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGNvbnN0IGJhdGNoID0gZGIuYmF0Y2goKTtcclxuICBjb25zdCBzdG9yeSA9IGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpLmRvYyhzdG9yeUlkKS5nZXQoKTtcclxuICBjb25zdCBjaGFwdGVyID0gZGIuY29sbGVjdGlvbihcImNoYXB0ZXJzXCIpLmRvYyhjaGFwaWQpLmdldCgpO1xyXG5cclxuICBQcm9taXNlLmFsbChbc3RvcnksIGNoYXB0ZXJdKS50aGVuKChyZXMpID0+IHtcclxuICAgIGJhdGNoLnVwZGF0ZShkYi5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKS5kb2Moc3RvcnlJZCksIHtcclxuICAgICAgY29tbWVudHNDb3VudDogcmVzWzBdLmRhdGEoKS5jb21tZW50c0NvdW50IC0gMSxcclxuICAgIH0pO1xyXG4gICAgYmF0Y2gudXBkYXRlKGRiLmNvbGxlY3Rpb24oXCJjaGFwdGVyc1wiKS5kb2MoY2hhcGlkKSwge1xyXG4gICAgICBjb21tZW50c0NvdW50OiByZXNbMV0uZGF0YSgpLmNvbW1lbnRzQ291bnQgLSAxLFxyXG4gICAgfSk7XHJcbiAgICBiYXRjaC5jb21taXQoKS50aGVuKCgpID0+IHtcclxuICAgICAgZGIuY29sbGVjdGlvbihcImNvbW1lbnRzXCIpLmRvYyhpZCkuZGVsZXRlKCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufTtcclxuIiwiaW1wb3J0IHsgZGIsIGF1dGggfSBmcm9tIFwiLi4vZmJDb25maWdcIjtcclxuaW1wb3J0IHsgdHlwZXMgfSBmcm9tIFwiLi4vLi4vdXRpbHMvY29uc3RhbnRzXCI7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcbmltcG9ydCB7IG1lc3NhZ2UgfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ19pbiA9IChlbWFpbCwgcGFzc3dvcmQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGVtYWlsLCBwYXNzd29yZCk7XHJcbiAgYXV0aC5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFByb2ZpbGUgPSAoaWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKVxyXG4gICAgLmRvYyhpZCA/IGlkIDogYXV0aC5jdXJyZW50VXNlci51aWQpXHJcbiAgICAub25TbmFwc2hvdCgoZG9jKSA9PiB7XHJcbiAgICAgIHJldHVybiBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogdHlwZXMuR0VUX1BST0ZJTEUsXHJcbiAgICAgICAgcGF5bG9hZDogeyBpZDogZG9jLmlkLCAuLi5kb2MuZGF0YSgpIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0RmF2b3JpdGVBdXRob3JzID0gKGlkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBsZXQgYWRkZWRPbjtcclxuICBjb25zdCB1c2VySWQgPSBpZCA/IGlkIDogYXV0aC5jdXJyZW50VXNlci51aWQ7XHJcbiAgZGIuY29sbGVjdGlvbihcInVzZXJzTGlrZXNcIilcclxuICAgIC53aGVyZShcInNlbmRlcklkXCIsIFwiPT1cIiwgdXNlcklkKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigoZG9jcykgPT4ge1xyXG4gICAgICBsZXQgZmF2QXJyID0gW107XHJcbiAgICAgIGRvY3MuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICAgICAgYWRkZWRPbiA9IGRvYy5kYXRhKCkuY3JlYXRlZEF0O1xyXG4gICAgICAgIGZhdkFyciA9IFsuLi5mYXZBcnIsIGRvYy5kYXRhKCkucmVjaXBpZW50XTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBmYXZBcnI7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKHVzZXJzKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHVzZXJzLm1hcCgodXNlcikgPT5cclxuICAgICAgICBkYi5jb2xsZWN0aW9uKFwidXNlcnNcIikuZG9jKHVzZXIpLmdldCgpXHJcbiAgICAgICk7XHJcbiAgICAgIFByb21pc2UuYWxsKHJlc3VsdCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgbGV0IGZhdlVzZXJzID0gW107XHJcbiAgICAgICAgcmVzLmZvckVhY2goXHJcbiAgICAgICAgICAoZG9jKSA9PlxyXG4gICAgICAgICAgICAoZmF2VXNlcnMgPSBbLi4uZmF2VXNlcnMsIHsgYWRkZWRPbiwgaWQ6IGRvYy5pZCwgLi4uZG9jLmRhdGEoKSB9XSlcclxuICAgICAgICApO1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IHR5cGVzLkdFVF9GQVZPUklURV9BVVRIT1JTLFxyXG4gICAgICAgICAgcGF5bG9hZDogZmF2VXNlcnMsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Rm9sbG93ZXJzID0gKGlkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBsZXQgYWRkZWRPbjtcclxuICBjb25zdCB1c2VySWQgPSBpZCA/IGlkIDogYXV0aC5jdXJyZW50VXNlci51aWQ7XHJcbiAgZGIuY29sbGVjdGlvbihcInVzZXJzTGlrZXNcIilcclxuICAgIC53aGVyZShcInJlY2lwaWVudFwiLCBcIj09XCIsIHVzZXJJZClcclxuICAgIC5nZXQoKVxyXG4gICAgLnRoZW4oKGRvY3MpID0+IHtcclxuICAgICAgbGV0IGZhdkFyciA9IFtdO1xyXG4gICAgICBkb2NzLmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgICAgIGFkZGVkT24gPSBkb2MuZGF0YSgpLmNyZWF0ZWRBdDtcclxuICAgICAgICBmYXZBcnIgPSBbLi4uZmF2QXJyLCBkb2MuZGF0YSgpLnNlbmRlcklkXTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBmYXZBcnI7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKHVzZXJzKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHVzZXJzLm1hcCgodXNlcikgPT5cclxuICAgICAgICBkYi5jb2xsZWN0aW9uKFwidXNlcnNcIikuZG9jKHVzZXIpLmdldCgpXHJcbiAgICAgICk7XHJcbiAgICAgIFByb21pc2UuYWxsKHJlc3VsdCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgbGV0IGZhdlVzZXJzID0gW107XHJcbiAgICAgICAgcmVzLmZvckVhY2goXHJcbiAgICAgICAgICAoZG9jKSA9PlxyXG4gICAgICAgICAgICAoZmF2VXNlcnMgPSBbLi4uZmF2VXNlcnMsIHsgYWRkZWRPbiwgaWQ6IGRvYy5pZCwgLi4uZG9jLmRhdGEoKSB9XSlcclxuICAgICAgICApO1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IHR5cGVzLkdFVF9GT0xMT1dFUlMsXHJcbiAgICAgICAgICBwYXlsb2FkOiBmYXZVc2VycyxcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRJc0ZvbGxvd2luZyA9ICh1c2VySWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGlmIChhdXRoLmN1cnJlbnRVc2VyKSB7XHJcbiAgICBkYi5jb2xsZWN0aW9uKFwidXNlcnNMaWtlc1wiKVxyXG4gICAgICAud2hlcmUoXCJyZWNpcGllbnRcIiwgXCI9PVwiLCB1c2VySWQpXHJcbiAgICAgIC53aGVyZShcInNlbmRlcklkXCIsIFwiPT1cIiwgYXV0aC5jdXJyZW50VXNlci51aWQpXHJcbiAgICAgIC5vblNuYXBzaG90KChzbmFwc2hvdCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFuc3dlciA9IHNuYXBzaG90LmRvY3MubGVuZ3RoID4gMCA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICByZXR1cm4gZGlzcGF0Y2goeyB0eXBlOiB0eXBlcy5JU19GT0xMT1dJTkcsIHBheWxvYWQ6IGFuc3dlciB9KTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZvbGxvd1VzZXIgPSAoaWQsIGlzRmF2b3JpdGUsIG5ld0ZvbGxvd2VyKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBpZiAoaXNGYXZvcml0ZSkgcmV0dXJuIG1lc3NhZ2Uud2FybmluZyhcIllvdSBhcmUgYWxyZWFkeSBmb2xsb3dpbmcgdGhpcyB1c2VyXCIpO1xyXG4gIGlmICghYXV0aC5jdXJyZW50VXNlcilcclxuICAgIHJldHVybiBtZXNzYWdlLmVycm9yKFwiWW91IG5lZWQgdG8gYmUgbG9nZ2VkIGluIHRvIGZvbGxvdyB1c2Vyc1wiKTtcclxuICBpZiAoIWF1dGguY3VycmVudFVzZXIuZW1haWxWZXJpZmllZClcclxuICAgIHJldHVybiBtZXNzYWdlLmVycm9yKFwiWW91IG5lZWQgdG8gdmVyaWZ5IHlvdXIgZW1haWwgZmlyc3RcIik7XHJcblxyXG4gIGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc0xpa2VzXCIpXHJcbiAgICAuYWRkKHtcclxuICAgICAgc2VuZGVyOiBuZXdGb2xsb3dlci51c2VybmFtZSxcclxuICAgICAgc2VuZGVySWQ6IG5ld0ZvbGxvd2VyLnVpZCxcclxuICAgICAgcmVjaXBpZW50OiBpZCxcclxuICAgICAgY3JlYXRlZEF0OiBmaXJlYmFzZS5maXJlc3RvcmUuRmllbGRWYWx1ZS5zZXJ2ZXJUaW1lc3RhbXAoKSxcclxuICAgIH0pXHJcbiAgICAudGhlbigoKSA9PiBtZXNzYWdlLnN1Y2Nlc3MoXCJZb3UgYXJlIG5vdyBmb2xsb3dpbmcgdGhpcyB1c2VyXCIpKVxyXG4gICAgLmNhdGNoKChlcnIpID0+IG1lc3NhZ2UuZXJyb3IoXCJUaGVyZSBoYXMgYmVlbiBhIHByb2JsZW1cIikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVuZm9sbG93VXNlciA9IChpZCwgaXNGYXZvcml0ZSkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgaWYgKCFpc0Zhdm9yaXRlKVxyXG4gICAgcmV0dXJuIG1lc3NhZ2Uud2FybmluZyhcIllvdSBhcmUgbm90IGZvbGxvd2luZyB0aGlzIHVzZXIgeWV0XCIpO1xyXG5cclxuICBkYi5jb2xsZWN0aW9uKFwidXNlcnNMaWtlc1wiKVxyXG4gICAgLndoZXJlKFwicmVjaXBpZW50XCIsIFwiPT1cIiwgaWQpXHJcbiAgICAud2hlcmUoXCJzZW5kZXJJZFwiLCBcIj09XCIsIGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGIuY29sbGVjdGlvbihcInVzZXJzTGlrZXNcIikuZG9jKGRhdGEuZG9jc1swXS5pZCkuZGVsZXRlKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKCkgPT4gbWVzc2FnZS5zdWNjZXNzKFwiVXNlciBzdWNjZXNzZnVsbHkgdW5mb2xsb3dlZFwiKSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiBtZXNzYWdlLmVycm9yKFwiVGhlcmUgaGFzIGJlZW4gYSBwcm9ibGVtXCIpKTtcclxufTtcclxuIiwiaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcclxuaW1wb3J0IFwiZmlyZWJhc2UvYXV0aFwiO1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcclxuaW1wb3J0IFwiZmlyZWJhc2Uvc3RvcmFnZVwiO1xyXG5cclxuY29uc3QgcHJvZENvbmZpZyA9IHtcclxuICBhcGlLZXk6IHByb2Nlc3MuZW52LkZJUkVCQVNFX0FQSV9LRVksXHJcbiAgYXV0aERvbWFpbjogcHJvY2Vzcy5lbnYuRklSRUJBU0VfQVVUSF9ET01BSU4sXHJcbiAgZGF0YWJhc2VVUkw6IHByb2Nlc3MuZW52LkZJUkVCQVNFX0RBVEFCQVNFX1VSTCxcclxuICBwcm9qZWN0SWQ6IHByb2Nlc3MuZW52LkZJUkVCQVNFX1BST0pFQ1RfSUQsXHJcbiAgc3RvcmFnZUJ1Y2tldDogcHJvY2Vzcy5lbnYuRklSRUJBU0VfU1RPUkFHRV9CVUNLRVQsXHJcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IHByb2Nlc3MuZW52LkZJUkVCQVNFX01FU1NBR0lOR19TRU5ERVJfSUQsXHJcbiAgYXBwSWQ6IHByb2Nlc3MuZW52LkZJUkVCQVNFX0FQUF9JRCxcclxufTtcclxuXHJcbmNvbnN0IGRldkNvbmZpZyA9IHtcclxuICBhcGlLZXk6IHByb2Nlc3MuZW52LkZJUkVCQVNFX0FQSV9LRVksXHJcbiAgYXV0aERvbWFpbjogcHJvY2Vzcy5lbnYuRklSRUJBU0VfQVVUSF9ET01BSU4sXHJcbiAgZGF0YWJhc2VVUkw6IHByb2Nlc3MuZW52LkZJUkVCQVNFX0RBVEFCQVNFX1VSTCxcclxuICBwcm9qZWN0SWQ6IHByb2Nlc3MuZW52LkZJUkVCQVNFX1BST0pFQ1RfSUQsXHJcbiAgc3RvcmFnZUJ1Y2tldDogcHJvY2Vzcy5lbnYuRklSRUJBU0VfU1RPUkFHRV9CVUNLRVQsXHJcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IHByb2Nlc3MuZW52LkZJUkVCQVNFX01FU1NBR0lOR19TRU5ERVJfSUQsXHJcbiAgYXBwSWQ6IHByb2Nlc3MuZW52LkZJUkVCQVNFX0FQUF9JRCxcclxufTtcclxuXHJcbmNvbnN0IGNvbmZpZyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IHByb2RDb25maWcgOiBkZXZDb25maWc7XHJcblxyXG5pZiAoIWZpcmViYXNlLmFwcHMubGVuZ3RoKSB7XHJcbiAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChjb25maWcpO1xyXG59XHJcblxyXG5jb25zdCBkYiA9IGZpcmViYXNlLmZpcmVzdG9yZSgpO1xyXG5jb25zdCBhdXRoID0gZmlyZWJhc2UuYXV0aCgpO1xyXG5jb25zdCBzdG9yYWdlID0gZmlyZWJhc2Uuc3RvcmFnZSgpO1xyXG5cclxuZXhwb3J0IHsgZGIsIGF1dGgsIHN0b3JhZ2UgfTtcclxuZXhwb3J0IGRlZmF1bHQgY29uZmlnO1xyXG4iLCJleHBvcnQgY29uc3QgQ0FURUdPUklFUyA9IFtcclxuICB7IG5hbWU6IFwiRHJhbWFcIiwgdmFsdWU6IFwiZHJhbWFcIiB9LFxyXG4gIHsgbmFtZTogXCJDb21lZHlcIiwgdmFsdWU6IFwiY29tZWR5XCIgfSxcclxuICB7IG5hbWU6IFwiSG9ycm9yXCIsIHZhbHVlOiBcImhvcnJvclwiIH0sXHJcbiAgeyBuYW1lOiBcIlJvbWFuY2VcIiwgdmFsdWU6IFwicm9tYW5jZVwiIH0sXHJcbiAgeyBuYW1lOiBcIlNjaS1maVwiLCB2YWx1ZTogXCJzY2ktZmlcIiB9LFxyXG4gIHsgbmFtZTogXCJGYW50YXN5XCIsIHZhbHVlOiBcImZhbnRhc3lcIiB9LFxyXG4gIHsgbmFtZTogXCJIdW1vclwiLCB2YWx1ZTogXCJodW1vclwiIH0sXHJcbiAgeyBuYW1lOiBcIkFjdGlvblwiLCB2YWx1ZTogXCJhY3Rpb25cIiB9LFxyXG4gIHsgbmFtZTogXCJUaHJpbGxlclwiLCB2YWx1ZTogXCJ0aHJpbGxlclwiIH0sXHJcbiAgeyBuYW1lOiBcIlN1cGVybmF0dXJhbFwiLCB2YWx1ZTogXCJzdXBlcm5hdHVyYWxcIiB9LFxyXG4gIHsgbmFtZTogXCJBZHZlbnR1cmVcIiwgdmFsdWU6IFwiYWR2ZW50dXJlXCIgfSxcclxuICB7IG5hbWU6IFwiTXlzdGVyeVwiLCB2YWx1ZTogXCJteXN0ZXJ5XCIgfSxcclxuICB7IG5hbWU6IFwiV2VzdGVyblwiLCB2YWx1ZTogXCJ3ZXN0ZXJuXCIgfSxcclxuICB7IG5hbWU6IFwiSGlzdG9yeVwiLCB2YWx1ZTogXCJoaXN0b3J5XCIgfSxcclxuICB7IG5hbWU6IFwiQ3JpbWVcIiwgdmFsdWU6IFwiY3JpbWVcIiB9LFxyXG4gIHsgbmFtZTogXCJGYW5maWN0aW9uXCIsIHZhbHVlOiBcImZhbmZpY3Rpb25cIiB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IENPUFlSSUdIVFMgPSBbXHJcbiAgeyBuYW1lOiBcIlB1YmxpYyBEb21haW5cIiwgdmFsdWU6IFwicHVibGljIGRvbWFpblwiIH0sXHJcbiAgeyBuYW1lOiBcIkFsbCBSaWdodHMgUmVzZXJ2ZWRcIiwgdmFsdWU6IFwiYWxsIHJpZ2h0cyByZXNlcnZlZFwiIH0sXHJcbiAgeyBuYW1lOiBcIkNyZWF0aXZlIENvbW1vbnNcIiwgdmFsdWU6IFwiY3JlYXRpdmUgY29tbW9uc1wiIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgTEFOR1VBR0VTID0gW1xyXG4gIHsgbmFtZTogXCJBZmFyXCIsIHZhbHVlOiBcImFhXCIgfSxcclxuICB7IG5hbWU6IFwiQWJraGF6aWFuXCIsIHZhbHVlOiBcImFiXCIgfSxcclxuICB7IG5hbWU6IFwiQXZlc3RhblwiLCB2YWx1ZTogXCJhZVwiIH0sXHJcbiAgeyBuYW1lOiBcIkFmcmlrYWFuc1wiLCB2YWx1ZTogXCJhZlwiIH0sXHJcbiAgeyBuYW1lOiBcIkFrYW5cIiwgdmFsdWU6IFwiYWtcIiB9LFxyXG4gIHsgbmFtZTogXCJBbWhhcmljXCIsIHZhbHVlOiBcImFtXCIgfSxcclxuICB7IG5hbWU6IFwiQXJhZ29uZXNlXCIsIHZhbHVlOiBcImFuXCIgfSxcclxuICB7IG5hbWU6IFwiQXJhYmljXCIsIHZhbHVlOiBcImFyXCIgfSxcclxuICB7IG5hbWU6IFwiQXNzYW1lc2VcIiwgdmFsdWU6IFwiYXNcIiB9LFxyXG4gIHsgbmFtZTogXCJBdmFyaWNcIiwgdmFsdWU6IFwiYXZcIiB9LFxyXG4gIHsgbmFtZTogXCJBeW1hcmFcIiwgdmFsdWU6IFwiYXlcIiB9LFxyXG4gIHsgbmFtZTogXCJBemVyYmFpamFuaVwiLCB2YWx1ZTogXCJhelwiIH0sXHJcbiAgeyBuYW1lOiBcIkJhc2hraXJcIiwgdmFsdWU6IFwiYmFcIiB9LFxyXG4gIHsgbmFtZTogXCJCZWxhcnVzaWFuXCIsIHZhbHVlOiBcImJlXCIgfSxcclxuICB7IG5hbWU6IFwiQnVsZ2FyaWFuXCIsIHZhbHVlOiBcImJnXCIgfSxcclxuICB7IG5hbWU6IFwiQmloYXJpXCIsIHZhbHVlOiBcImJoXCIgfSxcclxuICB7IG5hbWU6IFwiQmlzbGFtYVwiLCB2YWx1ZTogXCJiaVwiIH0sXHJcbiAgeyBuYW1lOiBcIkJhbWJhcmFcIiwgdmFsdWU6IFwiYm1cIiB9LFxyXG4gIHsgbmFtZTogXCJCZW5nYWxpXCIsIHZhbHVlOiBcImJuXCIgfSxcclxuICB7IG5hbWU6IFwiVGliZXRhblwiLCB2YWx1ZTogXCJib1wiIH0sXHJcbiAgeyBuYW1lOiBcIkJyZXRvblwiLCB2YWx1ZTogXCJiclwiIH0sXHJcbiAgeyBuYW1lOiBcIkJvc25pYW5cIiwgdmFsdWU6IFwiYnNcIiB9LFxyXG4gIHsgbmFtZTogXCJDYXRhbGFuXCIsIHZhbHVlOiBcImNhXCIgfSxcclxuICB7IG5hbWU6IFwiQ2hlY2hlblwiLCB2YWx1ZTogXCJjZVwiIH0sXHJcbiAgeyBuYW1lOiBcIkNoYW1vcnJvXCIsIHZhbHVlOiBcImNoXCIgfSxcclxuICB7IG5hbWU6IFwiQ29yc2ljYW5cIiwgdmFsdWU6IFwiY29cIiB9LFxyXG4gIHsgbmFtZTogXCJDcmVlXCIsIHZhbHVlOiBcImNyXCIgfSxcclxuICB7IG5hbWU6IFwiQ3plY2hcIiwgdmFsdWU6IFwiY3NcIiB9LFxyXG4gIHsgbmFtZTogXCJPbGQgQ2h1cmNoIFNsYXZvbmljXCIsIHZhbHVlOiBcImN1XCIgfSxcclxuICB7IG5hbWU6IFwiQ2h1dmFzaFwiLCB2YWx1ZTogXCJjdlwiIH0sXHJcbiAgeyBuYW1lOiBcIldlbHNoXCIsIHZhbHVlOiBcImN5XCIgfSxcclxuICB7IG5hbWU6IFwiRGFuaXNoXCIsIHZhbHVlOiBcImRhXCIgfSxcclxuICB7IG5hbWU6IFwiR2VybWFuXCIsIHZhbHVlOiBcImRlXCIgfSxcclxuICB7IG5hbWU6IFwiRGl2ZWhpXCIsIHZhbHVlOiBcImR2XCIgfSxcclxuICB7IG5hbWU6IFwiRHpvbmdraGFcdFwiLCB2YWx1ZTogXCJkelwiIH0sXHJcbiAgeyBuYW1lOiBcIkV3ZVwiLCB2YWx1ZTogXCJlZVwiIH0sXHJcbiAgeyBuYW1lOiBcIkdyZWVrXCIsIHZhbHVlOiBcImVsXCIgfSxcclxuICB7IG5hbWU6IFwiRW5nbGlzaFwiLCB2YWx1ZTogXCJlblwiIH0sXHJcbiAgeyBuYW1lOiBcIkVzcGVyYW50b1wiLCB2YWx1ZTogXCJlb1wiIH0sXHJcbiAgeyBuYW1lOiBcIlNwYW5pc2hcIiwgdmFsdWU6IFwiZXNcIiB9LFxyXG4gIHsgbmFtZTogXCJFc3RvbmlhblwiLCB2YWx1ZTogXCJldFwiIH0sXHJcbiAgeyBuYW1lOiBcIkJhc3F1ZVwiLCB2YWx1ZTogXCJldVwiIH0sXHJcbiAgeyBuYW1lOiBcIlBlcnNpYW5cIiwgdmFsdWU6IFwiZmFcIiB9LFxyXG4gIHsgbmFtZTogXCJGdWxhaFwiLCB2YWx1ZTogXCJmZlwiIH0sXHJcbiAgeyBuYW1lOiBcIkZpbm5pc2hcIiwgdmFsdWU6IFwiZmlcIiB9LFxyXG4gIHsgbmFtZTogXCJGaWppYW5cIiwgdmFsdWU6IFwiZmpcIiB9LFxyXG4gIHsgbmFtZTogXCJGYXJvZXNlXCIsIHZhbHVlOiBcImZvXCIgfSxcclxuICB7IG5hbWU6IFwiRnJlbmNoXCIsIHZhbHVlOiBcImZyXCIgfSxcclxuICB7IG5hbWU6IFwiV2VzdGVybiBGcmlzaWFuXCIsIHZhbHVlOiBcImZ5XCIgfSxcclxuICB7IG5hbWU6IFwiSXJpc2hcIiwgdmFsdWU6IFwiZ2FcIiB9LFxyXG4gIHsgbmFtZTogXCJTY290dGlzaCBHYWVsaWNcIiwgdmFsdWU6IFwiZ2RcIiB9LFxyXG4gIHsgbmFtZTogXCJHYWxpY2lhblwiLCB2YWx1ZTogXCJnbFwiIH0sXHJcbiAgeyBuYW1lOiBcIkd1YXJhbmlcIiwgdmFsdWU6IFwiZ25cIiB9LFxyXG4gIHsgbmFtZTogXCJHdWphcmF0aVwiLCB2YWx1ZTogXCJndVwiIH0sXHJcbiAgeyBuYW1lOiBcIk1hbnhcIiwgdmFsdWU6IFwiZ3ZcIiB9LFxyXG4gIHsgbmFtZTogXCJIYXVzYVwiLCB2YWx1ZTogXCJoYVwiIH0sXHJcbiAgeyBuYW1lOiBcIkhlYnJld1wiLCB2YWx1ZTogXCJoZVwiIH0sXHJcbiAgeyBuYW1lOiBcIkhpbmRpXCIsIHZhbHVlOiBcImhpXCIgfSxcclxuICB7IG5hbWU6IFwiSGlyaSBNb3R1XCIsIHZhbHVlOiBcImhvXCIgfSxcclxuICB7IG5hbWU6IFwiQ3JvYXRpYW5cIiwgdmFsdWU6IFwiaHJcIiB9LFxyXG4gIHsgbmFtZTogXCJIYWl0aWFuXCIsIHZhbHVlOiBcImh0XCIgfSxcclxuICB7IG5hbWU6IFwiSHVuZ2FyaWFuXCIsIHZhbHVlOiBcImh1XCIgfSxcclxuICB7IG5hbWU6IFwiQXJtZW5pYW5cIiwgdmFsdWU6IFwiaHlcIiB9LFxyXG4gIHsgbmFtZTogXCJIZXJlcm9cIiwgdmFsdWU6IFwiaHpcIiB9LFxyXG4gIHsgbmFtZTogXCJJbnRlcmxpbmd1YVwiLCB2YWx1ZTogXCJpYVwiIH0sXHJcbiAgeyBuYW1lOiBcIkluZG9uZXNpYW5cIiwgdmFsdWU6IFwiaWRcIiB9LFxyXG4gIHsgbmFtZTogXCJJbnRlcmxpbmd1ZVwiLCB2YWx1ZTogXCJpZVwiIH0sXHJcbiAgeyBuYW1lOiBcIklnYm9cIiwgdmFsdWU6IFwiaWdcIiB9LFxyXG4gIHsgbmFtZTogXCJTaWNodWFuIFlpXCIsIHZhbHVlOiBcImlpXCIgfSxcclxuICB7IG5hbWU6IFwiSW51cGlhcVwiLCB2YWx1ZTogXCJpa1wiIH0sXHJcbiAgeyBuYW1lOiBcIklkb1wiLCB2YWx1ZTogXCJpb1wiIH0sXHJcbiAgeyBuYW1lOiBcIkljZWxhbmRpY1wiLCB2YWx1ZTogXCJpc1wiIH0sXHJcbiAgeyBuYW1lOiBcIkl0YWxpYW5cIiwgdmFsdWU6IFwiaXRcIiB9LFxyXG4gIHsgbmFtZTogXCJJbnVrdGl0dXRcIiwgdmFsdWU6IFwiaXVcIiB9LFxyXG4gIHsgbmFtZTogXCJKYXBhbmVzZVwiLCB2YWx1ZTogXCJqYVwiIH0sXHJcbiAgeyBuYW1lOiBcIkphdmFuZXNlXCIsIHZhbHVlOiBcImp2XCIgfSxcclxuICB7IG5hbWU6IFwiR2VvcmdpYW5cIiwgdmFsdWU6IFwia2FcIiB9LFxyXG4gIHsgbmFtZTogXCJLb25nb1wiLCB2YWx1ZTogXCJrZ1wiIH0sXHJcbiAgeyBuYW1lOiBcIktpa3V5dVwiLCB2YWx1ZTogXCJraVwiIH0sXHJcbiAgeyBuYW1lOiBcIkt3YW55YW1hXCIsIHZhbHVlOiBcImtqXCIgfSxcclxuICB7IG5hbWU6IFwiS2F6YWtoXCIsIHZhbHVlOiBcImtrXCIgfSxcclxuICB7IG5hbWU6IFwiR3JlZW5sYW5kaWNcIiwgdmFsdWU6IFwia2xcIiB9LFxyXG4gIHsgbmFtZTogXCJLaG1lclwiLCB2YWx1ZTogXCJrbVwiIH0sXHJcbiAgeyBuYW1lOiBcIkthbm5hZGFcIiwgdmFsdWU6IFwia25cIiB9LFxyXG4gIHsgbmFtZTogXCJLb3JlYW5cIiwgdmFsdWU6IFwia29cIiB9LFxyXG4gIHsgbmFtZTogXCJLYW51cmlcIiwgdmFsdWU6IFwia3JcIiB9LFxyXG4gIHsgbmFtZTogXCJLYXNobWlyaVwiLCB2YWx1ZTogXCJrc1wiIH0sXHJcbiAgeyBuYW1lOiBcIkt1cmRpc2hcIiwgdmFsdWU6IFwia3VcIiB9LFxyXG4gIHsgbmFtZTogXCJLb21pXCIsIHZhbHVlOiBcImt2XCIgfSxcclxuICB7IG5hbWU6IFwiQ29ybmlzaFwiLCB2YWx1ZTogXCJrd1wiIH0sXHJcbiAgeyBuYW1lOiBcIktpcmdoaXpcIiwgdmFsdWU6IFwia3lcIiB9LFxyXG4gIHsgbmFtZTogXCJMYXRpblwiLCB2YWx1ZTogXCJsYVwiIH0sXHJcbiAgeyBuYW1lOiBcIkx1eGVtYm91cmdpc2hcIiwgdmFsdWU6IFwibGJcIiB9LFxyXG4gIHsgbmFtZTogXCJHYW5kYVwiLCB2YWx1ZTogXCJsZ1wiIH0sXHJcbiAgeyBuYW1lOiBcIkxpbWJ1cmdpc2hcIiwgdmFsdWU6IFwibGlcIiB9LFxyXG4gIHsgbmFtZTogXCJMaW5nYWxhXCIsIHZhbHVlOiBcImxuXCIgfSxcclxuICB7IG5hbWU6IFwiTGFvXCIsIHZhbHVlOiBcImxvXCIgfSxcclxuICB7IG5hbWU6IFwiTGl0aHVhbmlhblwiLCB2YWx1ZTogXCJsdFwiIH0sXHJcbiAgeyBuYW1lOiBcIkx1YmFcIiwgdmFsdWU6IFwibHVcIiB9LFxyXG4gIHsgbmFtZTogXCJMYXR2aWFuXCIsIHZhbHVlOiBcImx2XCIgfSxcclxuICB7IG5hbWU6IFwiTWFsYWdhc3lcIiwgdmFsdWU6IFwibWdcIiB9LFxyXG4gIHsgbmFtZTogXCJNYXJzaGFsbGVzZVwiLCB2YWx1ZTogXCJtaFwiIH0sXHJcbiAgeyBuYW1lOiBcIk3EgW9yaVwiLCB2YWx1ZTogXCJtaVwiIH0sXHJcbiAgeyBuYW1lOiBcIk1hY2Vkb25pYW5cIiwgdmFsdWU6IFwibWtcIiB9LFxyXG4gIHsgbmFtZTogXCJNYWxheWFsYW1cIiwgdmFsdWU6IFwibWxcIiB9LFxyXG4gIHsgbmFtZTogXCJNb25nb2xpYW5cIiwgdmFsdWU6IFwibW5cIiB9LFxyXG4gIHsgbmFtZTogXCJNb2xkYXZpYW5cIiwgdmFsdWU6IFwibW9cIiB9LFxyXG4gIHsgbmFtZTogXCJNYXJhdGhpXCIsIHZhbHVlOiBcIm1yXCIgfSxcclxuICB7IG5hbWU6IFwiTWFsYXlcIiwgdmFsdWU6IFwibXNcIiB9LFxyXG4gIHsgbmFtZTogXCJNYWx0ZXNlXCIsIHZhbHVlOiBcIm10XCIgfSxcclxuICB7IG5hbWU6IFwiQnVybWVzZVwiLCB2YWx1ZTogXCJteVwiIH0sXHJcbiAgeyBuYW1lOiBcIk5hdXJ1XCIsIHZhbHVlOiBcIm5hXCIgfSxcclxuICB7IG5hbWU6IFwiTm9yd2VnaWFuIEJva23DpWxcIiwgdmFsdWU6IFwibmJcIiB9LFxyXG4gIHsgbmFtZTogXCJOb3J0aCBOZGViZWxlXCIsIHZhbHVlOiBcIm5kXCIgfSxcclxuICB7IG5hbWU6IFwiTmVwYWxpXCIsIHZhbHVlOiBcIm5lXCIgfSxcclxuICB7IG5hbWU6IFwiTmRvbmdhXCIsIHZhbHVlOiBcIm5nXCIgfSxcclxuICB7IG5hbWU6IFwiRHV0Y2hcIiwgdmFsdWU6IFwibmxcIiB9LFxyXG4gIHsgbmFtZTogXCJOb3J3ZWdpYW4gTnlub3Jza1wiLCB2YWx1ZTogXCJublwiIH0sXHJcbiAgeyBuYW1lOiBcIk5vcndlZ2lhblwiLCB2YWx1ZTogXCJub1wiIH0sXHJcbiAgeyBuYW1lOiBcIlNvdXRoIE5kZWJlbGVcIiwgdmFsdWU6IFwibnJcIiB9LFxyXG4gIHsgbmFtZTogXCJOYXZham9cIiwgdmFsdWU6IFwibnZcIiB9LFxyXG4gIHsgbmFtZTogXCJDaGljaGV3YVwiLCB2YWx1ZTogXCJueVwiIH0sXHJcbiAgeyBuYW1lOiBcIk9jY2l0YW5cIiwgdmFsdWU6IFwib2NcIiB9LFxyXG4gIHsgbmFtZTogXCJPamlid2FcIiwgdmFsdWU6IFwib2pcIiB9LFxyXG4gIHsgbmFtZTogXCJPcm9tb1wiLCB2YWx1ZTogXCJvbVwiIH0sXHJcbiAgeyBuYW1lOiBcIk9yaXlhXCIsIHZhbHVlOiBcIm9yXCIgfSxcclxuICB7IG5hbWU6IFwiT3NzZXRpYW5cIiwgdmFsdWU6IFwib3NcIiB9LFxyXG4gIHsgbmFtZTogXCJQYW5qYWJpXCIsIHZhbHVlOiBcInBhXCIgfSxcclxuICB7IG5hbWU6IFwiUMSBbGlcIiwgdmFsdWU6IFwicGlcIiB9LFxyXG4gIHsgbmFtZTogXCJQb2xpc2hcIiwgdmFsdWU6IFwicGxcIiB9LFxyXG4gIHsgbmFtZTogXCJQYXNodG9cIiwgdmFsdWU6IFwicHNcIiB9LFxyXG4gIHsgbmFtZTogXCJQb3J0dWd1ZXNlXCIsIHZhbHVlOiBcInB0XCIgfSxcclxuICB7IG5hbWU6IFwiUXVlY2h1YVwiLCB2YWx1ZTogXCJxdVwiIH0sXHJcbiAgeyBuYW1lOiBcIlJldW5pb25lc2VcIiwgdmFsdWU6IFwicmNcIiB9LFxyXG4gIHsgbmFtZTogXCJSb21hbnNoXCIsIHZhbHVlOiBcInJtXCIgfSxcclxuICB7IG5hbWU6IFwiS2lydW5kaVwiLCB2YWx1ZTogXCJyblwiIH0sXHJcbiAgeyBuYW1lOiBcIlJvbWFuaWFuXCIsIHZhbHVlOiBcInJvXCIgfSxcclxuICB7IG5hbWU6IFwiUnVzc2lhblwiLCB2YWx1ZTogXCJydVwiIH0sXHJcbiAgeyBuYW1lOiBcIktpbnlhcndhbmRhXCIsIHZhbHVlOiBcInJ3XCIgfSxcclxuICB7IG5hbWU6IFwiU2Fuc2tyaXRcIiwgdmFsdWU6IFwic2FcIiB9LFxyXG4gIHsgbmFtZTogXCJTYXJkaW5pYW5cIiwgdmFsdWU6IFwic2NcIiB9LFxyXG4gIHsgbmFtZTogXCJTaW5kaGlcIiwgdmFsdWU6IFwic2RcIiB9LFxyXG4gIHsgbmFtZTogXCJOb3J0aGVybiBTYW1pXCIsIHZhbHVlOiBcInNlXCIgfSxcclxuICB7IG5hbWU6IFwiU2FuZ29cIiwgdmFsdWU6IFwic2dcIiB9LFxyXG4gIHsgbmFtZTogXCJTZXJiby1Dcm9hdGlhblwiLCB2YWx1ZTogXCJzaFwiIH0sXHJcbiAgeyBuYW1lOiBcIlNpbmhhbGVzZVwiLCB2YWx1ZTogXCJzaVwiIH0sXHJcbiAgeyBuYW1lOiBcIlNsb3Zha1wiLCB2YWx1ZTogXCJza1wiIH0sXHJcbiAgeyBuYW1lOiBcIlNsb3ZlbmlhblwiLCB2YWx1ZTogXCJzbFwiIH0sXHJcbiAgeyBuYW1lOiBcIlNhbW9hblwiLCB2YWx1ZTogXCJzbVwiIH0sXHJcbiAgeyBuYW1lOiBcIlNob25hXCIsIHZhbHVlOiBcInNuXCIgfSxcclxuICB7IG5hbWU6IFwiU29tYWxpXCIsIHZhbHVlOiBcInNvXCIgfSxcclxuICB7IG5hbWU6IFwiQWxiYW5pYW5cIiwgdmFsdWU6IFwic3FcIiB9LFxyXG4gIHsgbmFtZTogXCJTZXJiaWFuXCIsIHZhbHVlOiBcInNyXCIgfSxcclxuICB7IG5hbWU6IFwiU3dhdGlcIiwgdmFsdWU6IFwic3NcIiB9LFxyXG4gIHsgbmFtZTogXCJTb3Rob1wiLCB2YWx1ZTogXCJzdFwiIH0sXHJcbiAgeyBuYW1lOiBcIlN1bmRhbmVzZVwiLCB2YWx1ZTogXCJzdVwiIH0sXHJcbiAgeyBuYW1lOiBcIlN3ZWRpc2hcIiwgdmFsdWU6IFwic3ZcIiB9LFxyXG4gIHsgbmFtZTogXCJTd2FoaWxpXCIsIHZhbHVlOiBcInN3XCIgfSxcclxuICB7IG5hbWU6IFwiVGFtaWxcIiwgdmFsdWU6IFwidGFcIiB9LFxyXG4gIHsgbmFtZTogXCJUZWx1Z3VcIiwgdmFsdWU6IFwidGVcIiB9LFxyXG4gIHsgbmFtZTogXCJUYWppa1wiLCB2YWx1ZTogXCJ0Z1wiIH0sXHJcbiAgeyBuYW1lOiBcIlRoYWlcIiwgdmFsdWU6IFwidGhcIiB9LFxyXG4gIHsgbmFtZTogXCJUaWdyaW55YVwiLCB2YWx1ZTogXCJ0aVwiIH0sXHJcbiAgeyBuYW1lOiBcIlR1cmttZW5cIiwgdmFsdWU6IFwidGtcIiB9LFxyXG4gIHsgbmFtZTogXCJUYWdhbG9nXCIsIHZhbHVlOiBcInRsXCIgfSxcclxuICB7IG5hbWU6IFwiVHN3YW5hXCIsIHZhbHVlOiBcInRuXCIgfSxcclxuICB7IG5hbWU6IFwiVG9uZ2FcIiwgdmFsdWU6IFwidG9cIiB9LFxyXG4gIHsgbmFtZTogXCJUdXJraXNoXCIsIHZhbHVlOiBcInRyXCIgfSxcclxuICB7IG5hbWU6IFwiVHNvbmdhXCIsIHZhbHVlOiBcInRzXCIgfSxcclxuICB7IG5hbWU6IFwiVGF0YXJcIiwgdmFsdWU6IFwidHRcIiB9LFxyXG4gIHsgbmFtZTogXCJUd2lcIiwgdmFsdWU6IFwidHdcIiB9LFxyXG4gIHsgbmFtZTogXCJUYWhpdGlhblwiLCB2YWx1ZTogXCJ0eVwiIH0sXHJcbiAgeyBuYW1lOiBcIlVpZ2h1clwiLCB2YWx1ZTogXCJ1Z1wiIH0sXHJcbiAgeyBuYW1lOiBcIlVrcmFpbmlhblwiLCB2YWx1ZTogXCJ1a1wiIH0sXHJcbiAgeyBuYW1lOiBcIlVyZHVcIiwgdmFsdWU6IFwidXJcIiB9LFxyXG4gIHsgbmFtZTogXCJVemJla1wiLCB2YWx1ZTogXCJ1elwiIH0sXHJcbiAgeyBuYW1lOiBcIlZlbmRhXCIsIHZhbHVlOiBcInZlXCIgfSxcclxuICB7IG5hbWU6IFwiVmnDqnQgTmFtZXNlXCIsIHZhbHVlOiBcInZpXCIgfSxcclxuICB7IG5hbWU6IFwiVm9sYXDDvGtcIiwgdmFsdWU6IFwidm9cIiB9LFxyXG4gIHsgbmFtZTogXCJXYWxsb29uXCIsIHZhbHVlOiBcIndhXCIgfSxcclxuICB7IG5hbWU6IFwiV29sb2ZcIiwgdmFsdWU6IFwid29cIiB9LFxyXG4gIHsgbmFtZTogXCJYaG9zYVwiLCB2YWx1ZTogXCJ4aFwiIH0sXHJcbiAgeyBuYW1lOiBcIllpZGRpc2hcIiwgdmFsdWU6IFwieWlcIiB9LFxyXG4gIHsgbmFtZTogXCJZb3J1YmFcIiwgdmFsdWU6IFwieW9cIiB9LFxyXG4gIHsgbmFtZTogXCJaaHVhbmdcIiwgdmFsdWU6IFwiemFcIiB9LFxyXG4gIHsgbmFtZTogXCJDaGluZXNlXCIsIHZhbHVlOiBcInpoXCIgfSxcclxuICB7IG5hbWU6IFwiWnVsdVwiLCB2YWx1ZTogXCJ6dVwiIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgU1RBVFVTID0gW1xyXG4gIHsgbmFtZTogXCJJbiBQcm9ncmVzc1wiLCB2YWx1ZTogXCJpbiBwcm9ncmVzc1wiIH0sXHJcbiAgeyBuYW1lOiBcIkluIEhpYXR1c1wiLCB2YWx1ZTogXCJpbiBoaWF0dXNcIiB9LFxyXG4gIHsgbmFtZTogXCJDb21wbGV0ZWRcIiwgdmFsdWU6IFwiY29tcGxldGVkXCIgfSxcclxuXTtcclxuXHJcbi8vIFRZUEVTXHJcbmV4cG9ydCBjb25zdCB0eXBlcyA9IHtcclxuICBHRVRfUFJPRklMRTogXCJHRVRfUFJPRklMRVwiLFxyXG4gIExPR0lOOiBcIkxPR0lOXCIsXHJcbiAgUkVHSVNURVI6IFwiUkVHSVNURVJcIixcclxuICBHRVRfU1RPUlk6IFwiR0VUX1NUT1JZXCIsXHJcbiAgR0VUX1VTRVJfU1RPUklFUzogXCJHRVRfVVNFUl9TVE9SSUVTXCIsXHJcbiAgR0VUX0ZBVk9SSVRFX1NUT1JJRVM6IFwiR0VUX0ZBVk9SSVRFX1NUT1JJRVNcIixcclxuICBBRERfU1RPUlk6IFwiQUREX1NUT1JZXCIsXHJcbiAgRURJVF9TVE9SWTogXCJFRElUX1NUT1JZXCIsXHJcbiAgREVMRVRFX1NUT1JZOiBcIkRFTEVURV9TVE9SWVwiLFxyXG4gIElTX1NUT1JZX0ZBVk9SSVRFOiBcIklTX1NUT1JZX0ZBVk9SSVRFXCIsXHJcbiAgSVNfRk9MTE9XSU5HOiBcIklTX0ZPTExPV0lOR1wiLFxyXG4gIEdFVF9DSEFQVEVSOiBcIkdFVF9DSEFQVEVSXCIsXHJcbiAgQUREX0NIQVBURVI6IFwiQUREX0NIQVBURVJcIixcclxuICBFRElUX0NIQVBURVI6IFwiRURJVF9DSEFQVEVSXCIsXHJcbiAgREVMRVRFX0NIQVBURVI6IFwiREVMRVRFX0NIQVBURVJcIixcclxuICBHRVRfQ0hBUFRFUlM6IFwiR0VUX0NIQVBURVJTXCIsXHJcbiAgQUREX0NIQVJBQ1RFUjogXCJBRERfQ0hBUkFDVEVSXCIsXHJcbiAgR0VUX0NIQVJBQ1RFUjogXCJHRVRfQ0hBUkFDVEVSXCIsXHJcbiAgRURJVF9DSEFSQUNURVI6IFwiRURJVF9DSEFSQUNURVJcIixcclxuICBERUxFVEVfQ0hBUkFDVEVSOiBcIkRFTEVURV9DSEFSQUNURVJcIixcclxuICBHRVRfVVNFUl9DSEFSQUNURVJTOiBcIkdFVF9VU0VSX0NIQVJBQ1RFUlNcIixcclxuICBHRVRfQ0hBUkFDVEVSX0NPTU1FTlRTOiBcIkdFVF9DSEFSQUNURVJfQ09NTUVOVFNcIixcclxuICBHRVRfVVNFUl9MT0NBVElPTlM6IFwiR0VUX1VTRVJfTE9DQVRJT05TXCIsXHJcbiAgR0VUX0ZBVk9SSVRFX0NIQVJBQ1RFUlM6IFwiR0VUX0ZBVk9SSVRFX0NIQVJBQ1RFUlNcIixcclxuICBHRVRfU1RPUllfQ0hBUkFDVEVSUzogXCJHRVRfU1RPUllfQ0hBUkFDVEVSU1wiLFxyXG4gIEFERF9MT0NBVElPTjogXCJBRERfTE9DQVRJT05cIixcclxuICBHRVRfTE9DQVRJT046IFwiR0VUX0xPQ0FUSU9OXCIsXHJcbiAgRURJVF9MT0NBVElPTjogXCJFRElUX0xPQ0FUSU9OXCIsXHJcbiAgREVMRVRFX0xPQ0FUSU9OOiBcIkRFTEVURV9MT0NBVElPTlwiLFxyXG4gIEdFVF9DT01NRU5UUzogXCJHRVRfQ09NTUVOVFNcIixcclxuICBHRVRfRkFWT1JJVEVfQVVUSE9SUzogXCJHRVRfRkFWT1JJVEVfQVVUSE9SU1wiLFxyXG4gIEdFVF9TVE9SWV9MT0NBVElPTlM6IFwiR0VUX1NUT1JZX0xPQ0FUSU9OU1wiLFxyXG4gIEdFVF9GT0xMT1dFUlM6IFwiR0VUX0ZPTExPV0VSU1wiLFxyXG4gIERJU1BBVENIX0VSUk9SOiBcIkRJU1BBVENIX0VSUk9SXCIsXHJcbiAgU1VCTUlUX0NPTU1FTlQ6IFwiU1VCTUlUX0NPTU1FTlRcIixcclxuICBSQVRFX0NPTU1FTlQ6IFwiUkFURV9DT01NRU5UXCIsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX1BST0ZJTEUgPSBcIkdFVF9QUk9GSUxFXCI7XHJcbmV4cG9ydCBjb25zdCBMT0dJTiA9IFwiTE9HSU5cIjtcclxuZXhwb3J0IGNvbnN0IFJFR0lTVEVSID0gXCJSRUdJU1RFUlwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9TVE9SWSA9IFwiR0VUX1NUT1JZXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfVVNFUl9TVE9SSUVTID0gXCJHRVRfVVNFUl9TVE9SSUVTXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfRkFWT1JJVEVfU1RPUklFUyA9IFwiR0VUX0ZBVk9SSVRFX1NUT1JJRVNcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9TVE9SWSA9IFwiQUREX1NUT1JZXCI7XHJcbmV4cG9ydCBjb25zdCBFRElUX1NUT1JZID0gXCJFRElUX1NUT1JZXCI7XHJcbmV4cG9ydCBjb25zdCBERUxFVEVfU1RPUlkgPSBcIkRFTEVURV9TVE9SWVwiO1xyXG5leHBvcnQgY29uc3QgSVNfU1RPUllfRkFWT1JJVEUgPSBcIklTX1NUT1JZX0ZBVk9SSVRFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX0NIQVBURVIgPSBcIkdFVF9DSEFQVEVSXCI7XHJcbmV4cG9ydCBjb25zdCBBRERfQ0hBUFRFUiA9IFwiQUREX0NIQVBURVJcIjtcclxuZXhwb3J0IGNvbnN0IEVESVRfQ0hBUFRFUiA9IFwiRURJVF9DSEFQVEVSXCI7XHJcbmV4cG9ydCBjb25zdCBERUxFVEVfQ0hBUFRFUiA9IFwiREVMRVRFX0NIQVBURVJcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9DSEFQVEVSUyA9IFwiR0VUX0NIQVBURVJTXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX0NIQVJBQ1RFUiA9IFwiQUREX0NIQVJBQ1RFUlwiO1xyXG5leHBvcnQgY29uc3QgR0VUX0NIQVJBQ1RFUiA9IFwiR0VUX0NIQVJBQ1RFUlwiO1xyXG5leHBvcnQgY29uc3QgRURJVF9DSEFSQUNURVIgPSBcIkVESVRfQ0hBUkFDVEVSXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfVVNFUl9DSEFSQUNURVJTID0gXCJHRVRfVVNFUl9DSEFSQUNURVJTXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfVVNFUl9MT0NBVElPTlMgPSBcIkdFVF9VU0VSX0xPQ0FUSU9OU1wiO1xyXG5leHBvcnQgY29uc3QgR0VUX0ZBVk9SSVRFX0NIQVJBQ1RFUlMgPSBcIkdFVF9GQVZPUklURV9DSEFSQUNURVJTXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfU1RPUllfQ0hBUkFDVEVSUyA9IFwiR0VUX1NUT1JZX0NIQVJBQ1RFUlNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfTE9DQVRJT04gPSBcIkFERF9MT0NBVElPTlwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9GQVZPUklURV9BVVRIT1JTID0gXCJHRVRfRkFWT1JJVEVfQVVUSE9SU1wiO1xyXG5leHBvcnQgY29uc3QgR0VUX0ZPTExPV0VSUyA9IFwiR0VUX0ZPTExPV0VSU1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IERJU1BBVENIX0VSUk9SID0gXCJESVNQQVRDSF9FUlJPUlwiO1xyXG4iLCJleHBvcnQgY29uc3QgZHVtbXkgPSB7XHJcbiAgcGVyc29uOlxyXG4gICAgXCJodHRwczovL2kucGluaW1nLmNvbS81NjR4LzcwLzUwL2EzLzcwNTBhMzBjYzYxZThhN2YzZjg2NzdlYmY5NTA1ZGI3LmpwZ1wiLFxyXG4gIGNvdmVyOlxyXG4gICAgXCJodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy8zODgxMTA0L3BleGVscy1waG90by0zODgxMTA0LmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZkcHI9MiZoPTY1MCZ3PTk0MFwiLFxyXG4gIG5hbWU6IFwiQWlzaHdhcnlhIFJhaVwiLFxyXG4gIHBvc3RlcjogXCJodHRwczovL2ltYWdlcy1uYS5zc2wtaW1hZ2VzLWFtYXpvbi5jb20vaW1hZ2VzL0kvODFoMmdXUFRZSkwuanBnXCIsXHJcbiAgYXZhdGFyOiBcImh0dHBzOi8vYmlwLmNucnMuZnIvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMTEvdXNlci5qcGdcIixcclxuICBub0ltYWdlOiBcImh0dHBzOi8vaS5zdGFjay5pbWd1ci5jb20veTlEcFQuanBnXCIsXHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvYXBwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2F1dGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvZmlyZXN0b3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL3N0b3JhZ2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVzcG9uc2l2ZS1tYXNvbnJ5XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=