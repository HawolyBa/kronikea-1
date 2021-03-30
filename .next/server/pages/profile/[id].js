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
    getProfile(router.query.id);
    getUserStories(router.query.id, "profile");
    getUserCharacters(router.query.id);
    getFavoriteAuthors(router.query.id);
    getFollowers(router.query.id);
    getFavoriteCharacters(router.query.id);
    getFavoriteStories(router.query.id);
    getUserLocations(router.query.id);
  }, [router.query.id]);
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
      lineNumber: 108,
      columnNumber: 5
    }
  }, __jsx(_components_hoc_LoadingScreen__WEBPACK_IMPORTED_MODULE_15__["default"], {
    loading: auth.isLoading,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 7
    }
  }, auth.user && auth.user.uid === router.query.id ? __jsx(_index__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
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
      lineNumber: 114,
      columnNumber: 13
    }
  }), __jsx("section", {
    className: "profile-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 13
    }
  }, __jsx(_components_profile_Tabs__WEBPACK_IMPORTED_MODULE_6__["default"], {
    currentTab: currentTab,
    tabs: tabs,
    changeTab: changeTab,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
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
      lineNumber: 131,
      columnNumber: 17
    }
  }), currentTab === "characters" && __jsx(_components_profile_Characters__WEBPACK_IMPORTED_MODULE_8__["default"], {
    context: "public",
    characters: characters,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 17
    }
  }), currentTab === "locations" && __jsx(_components_profile_Locations__WEBPACK_IMPORTED_MODULE_10__["default"], {
    context: "public",
    locations: locations,
    type: "profile",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 17
    }
  }), currentTab === "favorites stories" && __jsx(_components_profile_Stories__WEBPACK_IMPORTED_MODULE_7__["default"], {
    type: "favorites",
    loading: loading,
    stories: favoriteStories,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 17
    }
  }), currentTab === "favorites characters" && __jsx(_components_profile_Characters__WEBPACK_IMPORTED_MODULE_8__["default"], {
    type: "favorites",
    characters: favoriteCharacters,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 17
    }
  }), currentTab === "followers" && __jsx(_components_profile_Followers__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
      lineNumber: 161,
      columnNumber: 17
    }
  }), currentTab === "followings" && __jsx(_components_profile_Followers__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
      lineNumber: 172,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29tbW9uL0NhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb21tb24vQ2hhcmFjdGVyQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbW1vbi9HcmlkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29tbW9uL0xvY2F0aW9uQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbW1vbi9QYWdpbmF0aW9uLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29tbW9uL1VzZXJDYXJkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaG9jL0xvYWRpbmdTY3JlZW4uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9ob2MvUmVkaXJlY3RDb21wLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcHJvZmlsZS9CYW5uZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wcm9maWxlL0NoYXJhY3RlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wcm9maWxlL0Zhdm9yaXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Byb2ZpbGUvRm9sbG93ZXJzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcHJvZmlsZS9Mb2NhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wcm9maWxlL1NldHRpbmdzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcHJvZmlsZS9Tb3J0SW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wcm9maWxlL1N0b3JpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wcm9maWxlL1RhYnMuanMiLCJ3ZWJwYWNrOi8vLy4vaG9va3MvdXNlckhvb2tzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9lc2NhcGUtcGF0aC1kZWxpbWl0ZXJzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGF0aC1tYXRjaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wcmVwYXJlLWRlc3RpbmF0aW9uLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL3Byb2ZpbGUvL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL3Byb2ZpbGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWN0aW9ucy9jaGFyYWN0ZXJzQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25zL3N0b3JpZXNBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3JlZHV4L2FjdGlvbnMvdXNlckFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvZmJDb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2R1bW15LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbnQtZGVzaWduL2ljb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL2FwcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL2F1dGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9maXJlc3RvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9zdG9yYWdlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZXNwb25zaXZlLW1hc29ucnlcIiJdLCJuYW1lcyI6WyJDYXJkIiwic3RvcnkiLCJ0eXBlIiwiYmFubmVyIiwiZHVtbXkiLCJub0ltYWdlIiwiYXV0aG9yTmFtZSIsInRpdGxlIiwic3VtbWFyeSIsImxlbmd0aCIsInNsaWNlIiwiY2hhcHRlcnNDb3VudCIsInNlY29uZGFyeUFyciIsIm1haW5DaGFyYWN0ZXJzIiwiY29tbWVudHNDb3VudCIsIkNoYXJhY3RlckNhcmQiLCJjaGFyYWN0ZXIiLCJyZW1vdmVDaGFyYWN0ZXIiLCJpZCIsImltYWdlIiwiZmlyc3RuYW1lIiwibGFzdG5hbWUiLCJyZWxhdGlvbiIsIlN0b3JpZXNHcmlkIiwic3RvcmllcyIsImd1dHRlciIsImNvbHVtbnNDb3VudEJyZWFrUG9pbnRzIiwibWFwIiwiRW1wdHkiLCJQUkVTRU5URURfSU1BR0VfU0lNUExFIiwiVXNlckdyaWQiLCJ1c2VycyIsImxnIiwieHMiLCJzbSIsIm1kIiwidSIsIkxvY2F0aW9uR3JpZCIsImxvY2F0aW9ucyIsInhsIiwieHhsIiwiYyIsIkNoYXJhY3RlckdyaWQiLCJjaGFyYWN0ZXJzIiwiTG9jYXRpb25DYXJkIiwibG9jYXRpb24iLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJuYW1lIiwic3RvcnlUaXRsZSIsImRlc2NyaXB0aW9uIiwic3RvcnlJZCIsIlBhZ2luYXRpb24iLCJkYXRhIiwiaXRlbVR5cGUiLCJwYWdpbmF0aW9uIiwic2V0UGFnaW5hdGlvbiIsImN1cnJlbnRQYWdlIiwiZGF0YXNQZXJQYWdlIiwiaW5kZXhPZkxhc3REYXRhIiwiaW5kZXhPZkZpcnN0RGF0YSIsImN1cnJlbnREYXRhcyIsImhhbmRsZUNsaWNrIiwiZSIsIndpbmRvdyIsInNjcm9sbFRvIiwiTnVtYmVyIiwicmVuZGVyRGF0YXMiLCJwYWdlTnVtYmVycyIsImkiLCJNYXRoIiwiY2VpbCIsInB1c2giLCJ0b3RhbCIsIlVzZXJDYXJkIiwidXNlciIsInVzZXJuYW1lIiwiTG9hZGluZ1NjcmVlbiIsImNoaWxkcmVuIiwibG9hZGluZyIsIlJlZGlyZWN0Q29tcCIsImNvbmRpdGlvbiIsImhyZWYiLCJCYW5uZXIiLCJvcGVuU2V0dGluZ3MiLCJwcm9maWxlIiwiZmF2QXV0aG9ycyIsImZvbGxvd2VycyIsImNoYW5nZUZhdlRhYiIsImZhdlRhYiIsInNldEN1cnJlbnRUYWIiLCJjb250ZXh0IiwiaXNGb2xsb3dpbmciLCJmb2xsb3dVc2VyIiwidW5mb2xsb3dVc2VyIiwiYXV0aCIsImF2YXRhciIsImF1dGhvcnMiLCJiaW9ncmFwaHkiLCJmYWNlYm9vayIsInR3aXR0ZXIiLCJpbnN0YWdyYW0iLCJkZXZpYW50YXJ0IiwiQ2hhcmFjdGVycyIsInNldERhdGEiLCJ1c2VFZmZlY3QiLCJvcHRpb25zIiwidmFsdWUiLCJGYXZvcml0ZXMiLCJmYXZzIiwiaXNMb2FkaW5nIiwiZmF2IiwiRm9sbG93ZXJzIiwiaXRlbXMiLCJMb2NhdGlvbnMiLCJUYWJQYW5lIiwiVGFicyIsIlNldHRpbmdzIiwiU29ydElucHV0IiwiaXRlbURhdGEiLCJzb3J0QXJyYXkiLCJuZXdBcnIiLCJzb3J0IiwiYSIsImIiLCJjcmVhdGVkQXQiLCJEYXRlIiwic2Vjb25kcyIsImtleUEiLCJ0b0xvd2VyQ2FzZSIsImtleUIiLCJjb25zb2xlIiwibG9nIiwidmFsIiwib3B0aW9uIiwiU3RvcmllcyIsInRhYnMiLCJjaGFuZ2VUYWIiLCJjdXJyZW50VGFiIiwidGFiIiwiYXV0aENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiUHJvdmlkZUF1dGgiLCJ1c2VQcm92aWRlQXV0aCIsInVzZUF1dGgiLCJ1c2VDb250ZXh0Iiwic2V0VXNlciIsInNldElzTG9hZGluZyIsInNpZ25pbiIsImVtYWlsIiwicGFzc3dvcmQiLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsInRoZW4iLCJyZXNwb25zZSIsInNpZ251cCIsImNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCIsImRiIiwiY29sbGVjdGlvbiIsImRvYyIsInVpZCIsInNldCIsImxpa2VzQ291bnQiLCJiYWRnZXMiLCJmaXJlYmFzZSIsImZpcmVzdG9yZSIsIkZpZWxkVmFsdWUiLCJzZXJ2ZXJUaW1lc3RhbXAiLCJzdXNwZW5kZWQiLCJzaWdub3V0Iiwic2lnbk91dCIsInNlbmRQYXNzd29yZFJlc2V0RW1haWwiLCJjb25maXJtUGFzc3dvcmRSZXNldCIsImNvZGUiLCJ1bnN1YnNjcmliZSIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsIm9uU25hcHNob3QiLCJsaXN0ZW5lcnMiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsInByZWZldGNoZWQiLCJjYWNoZWRPYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImNiIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsIm9ic2VydmVyIiwiZ2V0T2JzZXJ2ZXIiLCJyb3V0ZXIiLCJlcnIiLCJldmVudCIsInRhcmdldCIsIm5vZGVOYW1lIiwiaXNNb2RpZmllZEV2ZW50Iiwic2Nyb2xsIiwiYXMiLCJyZXBsYWNlIiwic3VjY2VzcyIsImRvY3VtZW50IiwiYXJncyIsImtleSIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsIk9iamVjdCIsInByb3BzIiwiY3JlYXRlUHJvcEVycm9yIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInNoYWxsb3ciLCJwYXNzSHJlZiIsInByZWZldGNoIiwib3B0aW9uYWxQcm9wcyIsImhhc1dhcm5lZCIsInAiLCJwYXRobmFtZSIsInJlc29sdmVkQXMiLCJjaGlsZEVsbSIsImlzUHJlZmV0Y2hlZCIsImNoaWxkIiwiQ2hpbGRyZW4iLCJjaGlsZFByb3BzIiwicmVmIiwiZWwiLCJzZXRDaGlsZEVsbSIsIm9uQ2xpY2siLCJsaW5rQ2xpY2tlZCIsInByaW9yaXR5IiwiTGluayIsInBhdGgiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInByb2Nlc3MiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZ2V0IiwiUm91dGVyIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJldmVudEZpZWxkIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJBcnJheSIsIkNvbXBvc2VkQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiV2l0aFJvdXRlcldyYXBwZXIiLCJhbGwiLCJvbiIsIm9mZiIsImVtaXQiLCJoYW5kbGVyIiwiYmFzZVBhdGgiLCJjYW5jZWxsZWQiLCJwcmVmaXgiLCJhZGRQYXRoUHJlZml4IiwidXJsIiwibG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsImhhc0Jhc2VQYXRoIiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJhc1BhdGhuYW1lIiwicGFyYW1zIiwicGFyYW0iLCJyZXBsYWNlZCIsInJlcGVhdCIsIm9wdGlvbmFsIiwiZXNjYXBlUGF0aERlbGltaXRlcnMiLCJyZXN1bHQiLCJmaWx0ZXJlZFF1ZXJ5IiwicXVlcnkiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmaW5hbFVybCIsImludGVycG9sYXRlZEFzIiwiaW50ZXJwb2xhdGVBcyIsImhhc2giLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJyZXNvbHZlZEhyZWYiLCJyZXNvbHZlQXMiLCJQQUdFX0xPQURfRVJST1IiLCJTeW1ib2wiLCJhZGRCYXNlUGF0aCIsInJlc29sdmVIcmVmIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJjcmVkZW50aWFscyIsInJlcyIsImF0dGVtcHRzIiwiZmV0Y2hSZXRyeSIsImlzU2VydmVyUmVuZGVyIiwibWFya0xvYWRpbmdFcnJvciIsImNvbnN0cnVjdG9yIiwicm91dGUiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIl9pbkZsaWdodFJvdXRlIiwiX3NoYWxsb3ciLCJsb2NhbGUiLCJsb2NhbGVzIiwiZGVmYXVsdExvY2FsZSIsInN0YXRlIiwic3R5bGVTaGVldHMiLCJfX05fU1NHIiwiaW5pdGlhbFByb3BzIiwiX19OX1NTUCIsIkNvbXBvbmVudCIsIl9fTkVYVF9EQVRBX18iLCJyZWxvYWQiLCJiYWNrIiwicHJlcGFyZVVybEFzIiwiaXNMb2NhbFVSTCIsIlNUIiwicGVyZm9ybWFuY2UiLCJhZGRMb2NhbGUiLCJjbGVhbmVkQXMiLCJkZWxMb2NhbGUiLCJkZWxCYXNlUGF0aCIsInBhZ2VzIiwiX19yZXdyaXRlcyIsInBhcnNlZCIsIm1ldGhvZCIsInBvdGVudGlhbEhyZWYiLCJwYXJzZWRBcyIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwicm91dGVJbmZvIiwiZGVzdGluYXRpb24iLCJwYXJzZWRIcmVmIiwiYXBwQ29tcCIsImVycm9yIiwiY2hhbmdlU3RhdGUiLCJfX04iLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwicGFnZSIsImNhY2hlZFJvdXRlSW5mbyIsInJlcXVpcmUiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJkYXRhSHJlZiIsImJlZm9yZVBvcFN0YXRlIiwib25seUFIYXNoQ2hhbmdlIiwibmV3SGFzaCIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzY3JvbGxUb0hhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJfcmVzb2x2ZUhyZWYiLCJhcHBseUJhc2VQYXRoIiwiY2xlYW5QYXRobmFtZSIsIlByb21pc2UiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJfZ2V0RGF0YSIsImZuIiwiX2dldFN0YXRpY0RhdGEiLCJmZXRjaE5leHREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5Iiwic2VnbWVudCIsImNoYXIiLCJlbmNvZGVVUklDb21wb25lbnQiLCJzbGFzaGVkUHJvdG9jb2xzIiwicHJvdG9jb2wiLCJ1cmxPYmoiLCJob3N0IiwiaG9zdG5hbWUiLCJTdHJpbmciLCJxdWVyeXN0cmluZyIsInNlYXJjaCIsIlRFU1RfUk9VVEUiLCJEVU1NWV9CQVNFIiwicmVzb2x2ZWRCYXNlIiwib3JpZ2luIiwibWF0Y2hlck9wdGlvbnMiLCJzZW5zaXRpdmUiLCJkZWxpbWl0ZXIiLCJjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zIiwic3RyaWN0IiwiY3VzdG9tUm91dGUiLCJrZXlzIiwibWF0Y2hlclJlZ2V4IiwicGF0aFRvUmVnZXhwIiwibWF0Y2hlciIsInBhcnNlZERlc3RpbmF0aW9uIiwiZGVzdFF1ZXJ5IiwiZGVzdFBhdGgiLCJkZXN0UGF0aFBhcmFtS2V5cyIsImRlc3RQYXRoUGFyYW1zIiwiZGVzdGluYXRpb25Db21waWxlciIsInZhbGlkYXRlIiwic3RyT3JBcnJheSIsInF1ZXJ5Q29tcGlsZXIiLCJwYXJhbUtleXMiLCJhcHBlbmRQYXJhbXNUb1F1ZXJ5Iiwic2hvdWxkQWRkQmFzZVBhdGgiLCJuZXdVcmwiLCJzZWFyY2hQYXJhbXMiLCJpc05hTiIsIml0ZW0iLCJzdHJpbmdpZnlVcmxRdWVyeVBhcmFtIiwic2VhcmNoUGFyYW1zTGlzdCIsImN1c3RvbVJvdXRlTWF0Y2hlciIsInJld3JpdGUiLCJkZXN0UmVzIiwicmUiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJzbHVnTmFtZSIsImciLCJncm91cHMiLCJtIiwic3RyIiwic2VnbWVudHMiLCJub3JtYWxpemVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwicGFyc2VQYXJhbWV0ZXIiLCJwb3MiLCJlc2NhcGVSZWdleCIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJwYXJzZUludCIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiUHJvZmlsZSIsImdldFByb2ZpbGUiLCJnZXRVc2VyU3RvcmllcyIsImdldElzRm9sbG93aW5nIiwiZ2V0VXNlckNoYXJhY3RlcnMiLCJnZXRGYXZvcml0ZUF1dGhvcnMiLCJnZXRGYXZvcml0ZUNoYXJhY3RlcnMiLCJnZXRGYXZvcml0ZVN0b3JpZXMiLCJnZXRVc2VyTG9jYXRpb25zIiwiZ2V0Rm9sbG93ZXJzIiwiZmF2Q2hhcmFjdGVycyIsImZhdlN0b3JpZXMiLCJzZXRGYXZUYWIiLCJmYXZvcml0ZVN0b3JpZXMiLCJzZXRGYXZvcml0ZVN0b3JpZXMiLCJmYXZvcml0ZUNoYXJhY3RlcnMiLCJzZXRGYXZvcml0ZUNoYXJhY3RlcnMiLCJ1c2VSb3V0ZXIiLCJmaWx0ZXIiLCJzIiwicHVibGljIiwiYXV0aG9ySWQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJvd25Qcm9wcyIsInVzZXJTdG9yaWVzIiwidXNlckNoYXJhY3RlcnMiLCJ1c2VyTG9jYXRpb25zIiwiY29ubmVjdCIsInNldHRpbmdzIiwiZ2V0Q2hhcmFjdGVyIiwiZGlzcGF0Y2giLCJyZWxBcnIiLCJzdG9yeUFyciIsImV4aXN0cyIsInJlbGF0aXZlcyIsInJlbGF0aXZlc0FyciIsInJlbFF1ZXJpZXMiLCJmb3JFYWNoIiwicmVsIiwiZmluZCIsImNoYXJhY3Rlcl9pZCIsIm1haW5RdWVyeSIsIndoZXJlIiwic2Vjb25kYXJ5UXVlcnkiLCJhbGxTdG9yeSIsImRvY3MiLCJjb25jYXQiLCJ0eXBlcyIsIkdFVF9DSEFSQUNURVIiLCJwYXlsb2FkIiwiciIsImN1cnJlbnRVc2VyIiwiY2hhcmFFeGlzdHMiLCJhZGRDaGFyYWN0ZXIiLCJBRERfQ0hBUkFDVEVSIiwiY2hhcmFJZCIsImFkZCIsImxpa2VzIiwiZGlzbGlrZXMiLCJpbWFnZU5hbWUiLCJzdG9yYWdlIiwicHV0IiwiZ2V0RG93bmxvYWRVUkwiLCJ1cGRhdGUiLCJjaGFyYWN0ZXJJZCIsImNhdGNoIiwiZWRpdENoYXJhY3RlciIsIkVESVRfQ0hBUkFDVEVSIiwibG9hZGluZ0NoYXJhY3RlciIsImRlbGV0ZUNoYXJhY3RlciIsIkRFTEVURV9DSEFSQUNURVIiLCJiYXRjaCIsImRlbGV0ZSIsInNlY29uZGFyeUNoYXJhY3RlcnMiLCJsaWtlIiwiY29tbWl0IiwiZGVsZXRlZCIsInVzZXJJZCIsIkdFVF9VU0VSX0NIQVJBQ1RFUlMiLCJmYXZBcnIiLCJmYXZVc2VycyIsIkdFVF9GQVZPUklURV9DSEFSQUNURVJTIiwiZ2V0Q2hhcmFjdGVyc0luU3RvcnkiLCJHRVRfU1RPUllfQ0hBUkFDVEVSUyIsIm1haW5BcnIiLCJzdWJtaXRDaGFyYXRlckZlZWRiYWNrIiwiaW5mbyIsImFscmVhZHlQb3N0ZWQiLCJlbWFpbFZlcmlmaWVkIiwiY29udGVudCIsIlNVQk1JVF9DT01NRU5UIiwiZ2V0Q2hhcmFjdGVyQ29tbWVudHMiLCJjb21tZW50cyIsIm9yZGVyQnkiLCJjb21tIiwidXNlclF1ZXJpZXMiLCJjb21tZW50IiwidXNlckltYWdlIiwiZCIsInVzZXJDb21tZW50IiwiR0VUX0NPTU1FTlRTIiwibG9hZGluZ0NvbW1lbnRzIiwiZGVsZXRlQ2hhcmFjdGVyQ29tbWVudCIsInJhdGVDb21tZW50IiwiY29tbWVudElkIiwiUkFURV9DT01NRU5UIiwicmF0ZWQiLCJpc0xpa2VkIiwibGlrZWRCeSIsImluY2x1ZGVzIiwiaXNEaXNsaWtlZCIsImRpc2xpa2VkQnkiLCJnZXRTdG9yeSIsIm1haW4iLCJzZWNvbmRhcnkiLCJtYWluUmVzIiwic2Vjb25kYXJ5UmVzIiwiZG9jdSIsIkdFVF9TVE9SWSIsInN0b3J5RXhpc3RzIiwiRElTUEFUQ0hfRVJST1IiLCJhZGRTdG9yeSIsIkFERF9TVE9SWSIsIm9uZVNob3QiLCJmZWF0dXJlZCIsIm5vdGUiLCJsYXN0VXBkYXRlZCIsInNwbGl0Iiwiam9pbiIsImVkaXRTdG9yeSIsIkVESVRfU1RPUlkiLCJsb2FkaW5nU3RvcnkiLCJsb2NhdGlvblF1ZXJ5IiwiZGVsZXRlU3RvcnkiLCJERUxFVEVfU1RPUlkiLCJjaGFwdGVyc1RvRGVsZXRlIiwibGlrZXNUb0RlbGV0ZSIsImxvY2F0aW9uc1RvRGVsZXRlIiwiY2hhcCIsImxvYyIsIkdFVF9VU0VSX1NUT1JJRVMiLCJHRVRfRkFWT1JJVEVfU1RPUklFUyIsImlzU3RvcnlGYXZvcml0ZSIsInNuYXBzaG90IiwiYW5zd2VyIiwiSVNfU1RPUllfRkFWT1JJVEUiLCJsb2FkaW5nRmF2IiwiYWRkU3RvcnlUb0Zhdm9yaXRlIiwic2VuZGVyIiwic2VuZGVySWQiLCJyZW1vdmVTdG9yeUZyb21GYXZvcml0ZSIsImdldFN0b3J5Q2hhcmFjdGVycyIsImFkZENoYXB0ZXIiLCJjaGFwSWQiLCJBRERfQ0hBUFRFUiIsInZvdGVycyIsInZvdGVzQ291bnQiLCJlZGl0Q2hhcHRlciIsImNoYXBpZCIsIkVESVRfQ0hBUFRFUiIsImRlbGV0ZUNoYXB0ZXIiLCJERUxFVEVfQ0hBUFRFUiIsImxvYWRpbmdDaGFwdGVyIiwiY29tbWVudHNUb0RlbGV0ZSIsImNoYXB0ZXIiLCJjaGFyYWN0ZXJzRnJvbUNoYXB0ZXIiLCJjaGFyYWN0ZXJzRnJvbVN0b3J5IiwidGltZXMiLCJnZXRDaGFwdGVyIiwiY2hhcmFRdWVyeSIsImxvY1F1ZXJ5IiwiY2hhcmFjdGVyc0luQ2hhcGVyIiwibG9jYXRpb25zSW5DaGFwZXIiLCJsIiwiR0VUX0NIQVBURVIiLCJjaGFwdGVyRXhpc3RzIiwiZ2V0Q2hhcHRlcnMiLCJhcnIiLCJudW1iZXIiLCJHRVRfQ0hBUFRFUlMiLCJhZGRMb2NhdGlvbiIsIkFERF9MT0NBVElPTiIsImxvYWRpbmdMb2MiLCJsb2NJZCIsImVkaXRMb2NhdGlvbiIsImdldExvY2F0aW9uIiwiR0VUX0xPQ0FUSU9OIiwibG9jYXRpb25FeGlzdHMiLCJkZWxldGVMb2NhdGlvbiIsIkdFVF9VU0VSX0xPQ0FUSU9OUyIsImdldFN0b3J5TG9jYXRpb25zIiwiR0VUX1NUT1JZX0xPQ0FUSU9OUyIsImdldENvbW1lbnRzIiwic25hcCIsInF1ZXJpZXMiLCJzdWJtaXRDb21tZW50IiwiY2hhcHRlcklkIiwiZGVsZXRlQ29tbWVudCIsImxvZ19pbiIsIkdFVF9QUk9GSUxFIiwiYWRkZWRPbiIsInJlY2lwaWVudCIsIkdFVF9GQVZPUklURV9BVVRIT1JTIiwiR0VUX0ZPTExPV0VSUyIsIklTX0ZPTExPV0lORyIsImlzRmF2b3JpdGUiLCJuZXdGb2xsb3dlciIsIndhcm5pbmciLCJwcm9kQ29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsImRhdGFiYXNlVVJMIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJGSVJFQkFTRV9BUFBfSUQiLCJkZXZDb25maWciLCJjb25maWciLCJhcHBzIiwiaW5pdGlhbGl6ZUFwcCIsIkNBVEVHT1JJRVMiLCJDT1BZUklHSFRTIiwiTEFOR1VBR0VTIiwiU1RBVFVTIiwiTE9HSU4iLCJSRUdJU1RFUiIsIkdFVF9DSEFSQUNURVJfQ09NTUVOVFMiLCJFRElUX0xPQ0FUSU9OIiwiREVMRVRFX0xPQ0FUSU9OIiwicGVyc29uIiwiY292ZXIiLCJwb3N0ZXIiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ3hGQSx3RTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOztBQUNBLE1BQU1BLElBQUksR0FBRyxDQUFDO0FBQUVDLE9BQUY7QUFBU0M7QUFBVCxDQUFELEtBQXFCO0FBQUE7O0FBQ2hDLFNBQ0U7QUFBUSxhQUFTLEVBQUMsaUJBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7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O0FBUW5CN0YsU0FBTyxFQUFFO0FBUlUsQ0FBZCxDOzs7Ozs7Ozs7OztBQ0FQLDhDOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHFEIiwiZmlsZSI6InBhZ2VzL3Byb2ZpbGUvW2lkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvcHJvZmlsZS9baWRdL2luZGV4LmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJpbXBvcnQgeyBkdW1teSB9IGZyb20gXCIuLi8uLi91dGlscy9kdW1teVwiO1xyXG5jb25zdCBDYXJkID0gKHsgc3RvcnksIHR5cGUgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZmlndXJlIGNsYXNzTmFtZT1cImNhcmQgc3RvcnktY2FyZFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZy1jb250YWluZXJcIj5cclxuICAgICAgICA8aW1nIHNyYz17c3RvcnkuYmFubmVyID8gc3RvcnkuYmFubmVyIDogZHVtbXkubm9JbWFnZX0gYWx0PVwiaW1hZ2VcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGZpZ2NhcHRpb24+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGFnXCI+RHJhbWE8L3NwYW4+XHJcbiAgICAgICAge3R5cGUgIT09IFwicHJpdmF0ZVByb2ZpbGVcIiAmJiAoXHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhdXRob3JcIj5BdXRob3I6IHtzdG9yeS5hdXRob3JOYW1lfTwvc3Bhbj5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxoMz57c3Rvcnk/LnRpdGxlfTwvaDM+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgIHtzdG9yeT8uc3VtbWFyeT8ubGVuZ3RoID4gMTUwXHJcbiAgICAgICAgICAgID8gYCR7c3Rvcnkuc3VtbWFyeS5zbGljZSgwLCAxNTApfS4uLmBcclxuICAgICAgICAgICAgOiBzdG9yeS5zdW1tYXJ5fVxyXG4gICAgICAgICAgeyFzdG9yeS5zdW1tYXJ5ICYmIFwiTm8gc3VtbWFyeSB5ZXRcIn1cclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3VudFwiPlxyXG4gICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm51bWJlclwiPntzdG9yeS5jaGFwdGVyc0NvdW50fSA8L3A+e1wiIFwifVxyXG4gICAgICAgICAgICA8aW9uLWljb24gbmFtZT1cImJvb2tcIj48L2lvbi1pY29uPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm51bWJlclwiPlxyXG4gICAgICAgICAgICAgIHtzdG9yeS5zZWNvbmRhcnlBcnIubGVuZ3RoICsgc3RvcnkubWFpbkNoYXJhY3RlcnMubGVuZ3RofXtcIiBcIn1cclxuICAgICAgICAgICAgPC9wPntcIiBcIn1cclxuICAgICAgICAgICAgPGlvbi1pY29uIG5hbWU9XCJwZW9wbGVcIj48L2lvbi1pY29uPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm51bWJlclwiPntzdG9yeS5jb21tZW50c0NvdW50fSA8L3A+e1wiIFwifVxyXG4gICAgICAgICAgICA8aW9uLWljb24gbmFtZT1cImNoYXRidWJibGVcIj48L2lvbi1pY29uPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2ZpZ2NhcHRpb24+XHJcbiAgICA8L2ZpZ3VyZT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHsgZHVtbXkgfSBmcm9tIFwiLi4vLi4vdXRpbHMvZHVtbXlcIjtcclxuXHJcbmNvbnN0IENoYXJhY3RlckNhcmQgPSAoeyBjaGFyYWN0ZXIsIHR5cGUsIHJlbW92ZUNoYXJhY3RlciB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxmaWd1cmVcclxuICAgICAgY2xhc3NOYW1lPXtgY2FyZCBjaGFyYWN0ZXItY2FyZCAke3R5cGUgPyB0eXBlIDogXCJcIn1gfVxyXG4gICAgICBkYXRhLWFvcz1cInpvb20taW4tdXBcIlxyXG4gICAgPlxyXG4gICAgICB7dHlwZSA9PT0gXCJhZGRcIiAmJiAoXHJcbiAgICAgICAgPHNwYW5cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJlbW92ZUNoYXJhY3RlcihjaGFyYWN0ZXIuaWQpfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwicmVtb3ZlLWJ0blwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgeFxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgKX1cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGltZyBzcmM9e2NoYXJhY3Rlcj8uaW1hZ2UgPyBjaGFyYWN0ZXIuaW1hZ2UgOiBkdW1teS5ub0ltYWdlfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGZpZ2NhcHRpb24+XHJcbiAgICAgICAgPGgzPntgJHtjaGFyYWN0ZXI/LmZpcnN0bmFtZX0gJHtjaGFyYWN0ZXI/Lmxhc3RuYW1lfWB9PC9oMz5cclxuICAgICAgICB7KHR5cGUgPT09IFwiZmF2b3JpdGVzXCIgfHwgdHlwZSA9PT0gXCJzdG9yeVwiKSAmJiAoXHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhdXRob3JcIj5BdXRob3I6IHtjaGFyYWN0ZXI/LmF1dGhvck5hbWV9PC9zcGFuPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgeyh0eXBlID09PSBcImFkZFwiIHx8IHR5cGUgPT09IFwic2hvd1wiKSAmJiAoXHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhdXRob3JcIj5SZWxhdGlvbjoge2NoYXJhY3Rlcj8ucmVsYXRpb259PC9zcGFuPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZmlnY2FwdGlvbj5cclxuICAgIDwvZmlndXJlPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGFyYWN0ZXJDYXJkO1xyXG4iLCJpbXBvcnQgeyBSb3csIENvbCwgRW1wdHkgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBNYXNvbnJ5LCB7IFJlc3BvbnNpdmVNYXNvbnJ5IH0gZnJvbSBcInJlYWN0LXJlc3BvbnNpdmUtbWFzb25yeVwiO1xyXG5cclxuaW1wb3J0IENhcmQgZnJvbSBcIi4uL2NvbW1vbi9DYXJkXCI7XHJcbmltcG9ydCBVc2VyQ2FyZCBmcm9tIFwiLi4vY29tbW9uL1VzZXJDYXJkXCI7XHJcbmltcG9ydCBDaGFyYWN0ZXJDYXJkIGZyb20gXCIuLi9jb21tb24vQ2hhcmFjdGVyQ2FyZFwiO1xyXG5pbXBvcnQgTG9jYXRpb25DYXJkIGZyb20gXCIuLi9jb21tb24vTG9jYXRpb25DYXJkXCI7XHJcblxyXG5jb25zdCBTdG9yaWVzR3JpZCA9ICh7IHN0b3JpZXMsIHR5cGUsIGd1dHRlciwgY29sdW1uc0NvdW50QnJlYWtQb2ludHMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8UmVzcG9uc2l2ZU1hc29ucnkgY29sdW1uc0NvdW50QnJlYWtQb2ludHM9e2NvbHVtbnNDb3VudEJyZWFrUG9pbnRzfT5cclxuICAgICAgPE1hc29ucnkgZ3V0dGVyPXtndXR0ZXJ9PlxyXG4gICAgICAgIHtzdG9yaWVzLmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgICBzdG9yaWVzLm1hcCgoc3RvcnkpID0+IChcclxuICAgICAgICAgICAgPExpbmsga2V5PXtzdG9yeS5pZH0gaHJlZj17YC9zdG9yeS8ke3N0b3J5LmlkfWB9PlxyXG4gICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgPENhcmQgc3Rvcnk9e3N0b3J5fSB0eXBlPXt0eXBlfSAvPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgKSlcclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPEVtcHR5XHJcbiAgICAgICAgICAgIGltYWdlPXtFbXB0eS5QUkVTRU5URURfSU1BR0VfU0lNUExFfVxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj1cIk5vIHN0b3JpZXMgeWV0XCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9NYXNvbnJ5PlxyXG4gICAgPC9SZXNwb25zaXZlTWFzb25yeT5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgVXNlckdyaWQgPSAoeyB1c2VycywgbGcsIHhzLCBzbSwgbWQsIGd1dHRlciB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxSb3cgZ3V0dGVyPXtndXR0ZXJ9PlxyXG4gICAgICB7dXNlcnMubGVuZ3RoID4gMCA/IChcclxuICAgICAgICB1c2Vycy5tYXAoKHUpID0+IChcclxuICAgICAgICAgIDxDb2wga2V5PXt1LmlkfSBsZz17bGd9IG1kPXttZH0gc209e3NtfSB4cz17eHN9PlxyXG4gICAgICAgICAgICA8VXNlckNhcmQgdXNlcj17dX0gLz5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICkpXHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPEVtcHR5XHJcbiAgICAgICAgICBpbWFnZT17RW1wdHkuUFJFU0VOVEVEX0lNQUdFX1NJTVBMRX1cclxuICAgICAgICAgIGRlc2NyaXB0aW9uPVwiTm8gZm9sbG93ZXJzIHlldFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgKX1cclxuICAgIDwvUm93PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBMb2NhdGlvbkdyaWQgPSAoe1xyXG4gIGxvY2F0aW9ucyxcclxuICBndXR0ZXIsXHJcbiAgeGwsXHJcbiAgeHhsLFxyXG4gIGxnLFxyXG4gIG1kLFxyXG4gIHNtLFxyXG4gIHhzLFxyXG4gIHR5cGUsXHJcbiAgY29sdW1uc0NvdW50QnJlYWtQb2ludHMsXHJcbn0pID0+IHtcclxuICByZXR1cm4gbG9jYXRpb25zLmxlbmd0aCA+IDAgPyAoXHJcbiAgICA8UmVzcG9uc2l2ZU1hc29ucnkgY29sdW1uc0NvdW50QnJlYWtQb2ludHM9e2NvbHVtbnNDb3VudEJyZWFrUG9pbnRzfT5cclxuICAgICAgPE1hc29ucnkgZ3V0dGVyPXtndXR0ZXJ9PlxyXG4gICAgICAgIHtsb2NhdGlvbnMubGVuZ3RoID4gMCA/IChcclxuICAgICAgICAgIGxvY2F0aW9ucy5tYXAoKGMpID0+IDxMb2NhdGlvbkNhcmQgbG9jYXRpb249e2N9IHR5cGU9e3R5cGV9IC8+KVxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8RW1wdHlcclxuICAgICAgICAgICAgaW1hZ2U9e0VtcHR5LlBSRVNFTlRFRF9JTUFHRV9TSU1QTEV9XHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiTm8gY2hhcmFjdGVycyB5ZXRcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApfVxyXG4gICAgICA8L01hc29ucnk+XHJcbiAgICA8L1Jlc3BvbnNpdmVNYXNvbnJ5PlxyXG4gICkgOiAoXHJcbiAgICAvLyAgIDxSb3cgZ3V0dGVyPXtndXR0ZXJ9PlxyXG4gICAgLy8gICAgIHtsb2NhdGlvbnMubWFwKChsb2MpID0+IChcclxuICAgIC8vICAgICAgIDxDb2wgeGw9e3hsfSB4eGw9e3h4bH0geHM9e3hzfSBzbT17c219IG1kPXttZH0gbGc9e2xnfSBrZXk9e2xvYy5pZH0+XHJcbiAgICAvLyAgICAgICAgIDxMb2NhdGlvbkNhcmQgdHlwZT17dHlwZX0gbG9jYXRpb249e2xvY30gLz5cclxuICAgIC8vICAgICAgIDwvQ29sPlxyXG4gICAgLy8gICAgICkpfVxyXG4gICAgLy8gICA8L1Jvdz5cclxuICAgIDxFbXB0eVxyXG4gICAgICBpbWFnZT17RW1wdHkuUFJFU0VOVEVEX0lNQUdFX1NJTVBMRX1cclxuICAgICAgZGVzY3JpcHRpb249XCJObyBsb2NhdGlvbnMgeWV0XCJcclxuICAgIC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IENoYXJhY3RlckdyaWQgPSAoe1xyXG4gIGd1dHRlcixcclxuICB4eGwsXHJcbiAgeGwsXHJcbiAgbGcsXHJcbiAgbWQsXHJcbiAgc20sXHJcbiAgeHMsXHJcbiAgY2hhcmFjdGVycyxcclxuICB0eXBlLFxyXG4gIGNvbHVtbnNDb3VudEJyZWFrUG9pbnRzLFxyXG59KSA9PiB7XHJcbiAgcmV0dXJuIGNoYXJhY3RlcnMubGVuZ3RoID4gMCA/IChcclxuICAgIDxSZXNwb25zaXZlTWFzb25yeSBjb2x1bW5zQ291bnRCcmVha1BvaW50cz17Y29sdW1uc0NvdW50QnJlYWtQb2ludHN9PlxyXG4gICAgICA8TWFzb25yeSBndXR0ZXI9e2d1dHRlcn0+XHJcbiAgICAgICAge2NoYXJhY3RlcnMubGVuZ3RoID4gMCA/IChcclxuICAgICAgICAgIGNoYXJhY3RlcnMubWFwKChjKSA9PiAoXHJcbiAgICAgICAgICAgIDxMaW5rIGtleT17Yy5pZH0gaHJlZj17YC9jaGFyYWN0ZXIvJHtjLmlkfWB9PlxyXG4gICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgPENoYXJhY3RlckNhcmQgY2hhcmFjdGVyPXtjfSB0eXBlPXt0eXBlfSAvPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgKSlcclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPEVtcHR5XHJcbiAgICAgICAgICAgIGltYWdlPXtFbXB0eS5QUkVTRU5URURfSU1BR0VfU0lNUExFfVxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj1cIk5vIGNoYXJhY3RlcnMgeWV0XCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9NYXNvbnJ5PlxyXG4gICAgPC9SZXNwb25zaXZlTWFzb25yeT5cclxuICApIDogKFxyXG4gICAgLy8gPFJvdyBndXR0ZXI9e2d1dHRlcn0+XHJcbiAgICAvLyAgIHtjaGFyYWN0ZXJzPy5tYXAoKGMpID0+IChcclxuICAgIC8vICAgICA8Q29sIGtleT17Yy5pZH0geHhsPXt4eGx9IHhsPXt4bH0gbGc9e2xnfSBtZD17bWR9IHNtPXtzbX0geHM9e3hzfT5cclxuICAgIC8vICAgICAgIHt0eXBlID09PSBcInNob3dcIiA/IChcclxuICAgIC8vICAgICAgICAgPExpbmsgaHJlZj17YC9jaGFyYWN0ZXIvJHtjLmlkfWB9PlxyXG4gICAgLy8gICAgICAgICAgIDxhPlxyXG4gICAgLy8gICAgICAgICAgICAgPENoYXJhY3RlckNhcmQgY2hhcmFjdGVyPXtjfSB0eXBlPXt0eXBlfSAvPlxyXG4gICAgLy8gICAgICAgICAgIDwvYT5cclxuICAgIC8vICAgICAgICAgPC9MaW5rPlxyXG4gICAgLy8gICAgICAgKSA6IChcclxuICAgIC8vICAgICAgICAgPENoYXJhY3RlckNhcmQgY2hhcmFjdGVyPXtjfSB0eXBlPXt0eXBlfSAvPlxyXG4gICAgLy8gICAgICAgKX1cclxuICAgIC8vICAgICA8L0NvbD5cclxuICAgIC8vICAgKSl9XHJcbiAgICAvLyA8L1Jvdz5cclxuICAgIDxFbXB0eVxyXG4gICAgICBpbWFnZT17RW1wdHkuUFJFU0VOVEVEX0lNQUdFX1NJTVBMRX1cclxuICAgICAgZGVzY3JpcHRpb249XCJObyBjaGFyYWN0ZXJzIHlldFwiXHJcbiAgICAvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgeyBTdG9yaWVzR3JpZCwgQ2hhcmFjdGVyR3JpZCwgVXNlckdyaWQsIExvY2F0aW9uR3JpZCB9O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IE1vZGFsLCBCdXR0b24gfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5pbXBvcnQgeyBkdW1teSB9IGZyb20gXCIuLi8uLi91dGlscy9kdW1teVwiO1xyXG5cclxuY29uc3QgTG9jYXRpb25DYXJkID0gKHsgbG9jYXRpb24sIHR5cGUgfSkgPT4ge1xyXG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGZpZ3VyZVxyXG4gICAgICAgIGNsYXNzTmFtZT1cImNhcmQgY2hhcmFjdGVyLWNhcmRcIlxyXG4gICAgICAgIGRhdGEtYW9zPVwiem9vbS1pbi11cFwiXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VmlzaWJsZSh0cnVlKX1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGltZyBzcmM9e2xvY2F0aW9uLmltYWdlID8gbG9jYXRpb24uaW1hZ2UgOiBkdW1teS5ub0ltYWdlfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxmaWdjYXB0aW9uPlxyXG4gICAgICAgICAgPGgzPntsb2NhdGlvbi5uYW1lfTwvaDM+XHJcbiAgICAgICAgICB7dHlwZSAhPT0gXCJzdG9yeVwiICYmIChcclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYXV0aG9yXCI+U3Rvcnk6IHtsb2NhdGlvbi5zdG9yeVRpdGxlfTwvc3Bhbj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9maWdjYXB0aW9uPlxyXG4gICAgICA8L2ZpZ3VyZT5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgdGl0bGU9e2xvY2F0aW9uLm5hbWV9XHJcbiAgICAgICAgdmlzaWJsZT17dmlzaWJsZX1cclxuICAgICAgICBvbkNhbmNlbD17KCkgPT4gc2V0VmlzaWJsZShmYWxzZSl9XHJcbiAgICAgICAgZm9vdGVyPXtbXHJcbiAgICAgICAgICA8QnV0dG9uIGtleT1cInN1Ym1pdFwiIHR5cGU9XCJwcmltYXJ5XCIgb25DbGljaz17KCkgPT4gc2V0VmlzaWJsZShmYWxzZSl9PlxyXG4gICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgPC9CdXR0b24+LFxyXG4gICAgICAgIF19XHJcbiAgICAgID5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJtb2RhbC1pbWdcIlxyXG4gICAgICAgICAgc3JjPXtsb2NhdGlvbi5pbWFnZSA/IGxvY2F0aW9uLmltYWdlIDogZHVtbXkubm9JbWFnZX1cclxuICAgICAgICAgIGFsdD17bG9jYXRpb24ubmFtZX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxwPntsb2NhdGlvbi5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAge3R5cGUgIT09IFwic3RvcnlcIiAmJiAoXHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtb2RhbC1zdG9yeS1saW5rXCI+XHJcbiAgICAgICAgICAgIFN0b3J5OntcIiBcIn1cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC9zdG9yeS8ke2xvY2F0aW9uLnN0b3J5SWR9YH0+XHJcbiAgICAgICAgICAgICAgPGE+e2xvY2F0aW9uLnN0b3J5VGl0bGV9PC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9Nb2RhbD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2NhdGlvbkNhcmQ7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgUGFnaW5hdGlvbiBhcyBQYWdpbmF0ZSwgRGl2aWRlciB9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5pbXBvcnQgeyBDaGFyYWN0ZXJHcmlkLCBMb2NhdGlvbkdyaWQsIFN0b3JpZXNHcmlkLCBVc2VyR3JpZCB9IGZyb20gXCIuL0dyaWRcIjtcclxuXHJcbmNvbnN0IFBhZ2luYXRpb24gPSAoe1xyXG4gIGRhdGEsXHJcbiAgeHMsXHJcbiAgc20sXHJcbiAgbGcsXHJcbiAgeGwsXHJcbiAgbWQsXHJcbiAgdHlwZSxcclxuICBndXR0ZXIsXHJcbiAgY29sdW1uc0NvdW50QnJlYWtQb2ludHMsXHJcbiAgaXRlbVR5cGUsXHJcbn0pID0+IHtcclxuICBjb25zdCBbcGFnaW5hdGlvbiwgc2V0UGFnaW5hdGlvbl0gPSBSZWFjdC51c2VTdGF0ZSh7XHJcbiAgICBjdXJyZW50UGFnZTogMSxcclxuICAgIGRhdGFzUGVyUGFnZTogMTIsXHJcbiAgfSk7XHJcbiAgY29uc3QgeyBjdXJyZW50UGFnZSwgZGF0YXNQZXJQYWdlIH0gPSBwYWdpbmF0aW9uO1xyXG4gIGNvbnN0IGluZGV4T2ZMYXN0RGF0YSA9IGN1cnJlbnRQYWdlICogZGF0YXNQZXJQYWdlO1xyXG4gIGNvbnN0IGluZGV4T2ZGaXJzdERhdGEgPSBpbmRleE9mTGFzdERhdGEgLSBkYXRhc1BlclBhZ2U7XHJcblxyXG4gIFJlYWN0LnVzZVN0YXRlKCgpID0+IHt9LCBbZGF0YV0pO1xyXG5cclxuICBjb25zdCBjdXJyZW50RGF0YXMgPSBkYXRhLnNsaWNlKGluZGV4T2ZGaXJzdERhdGEsIGluZGV4T2ZMYXN0RGF0YSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUpID0+IHtcclxuICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxuICAgIHNldFBhZ2luYXRpb24oeyAuLi5wYWdpbmF0aW9uLCBjdXJyZW50UGFnZTogTnVtYmVyKGUpIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlckRhdGFzID1cclxuICAgIGl0ZW1UeXBlID09PSBcInN0b3JpZXNcIiA/IChcclxuICAgICAgPFN0b3JpZXNHcmlkXHJcbiAgICAgICAgZ3V0dGVyPXtndXR0ZXJ9XHJcbiAgICAgICAgdHlwZT17dHlwZX1cclxuICAgICAgICBzdG9yaWVzPXtjdXJyZW50RGF0YXN9XHJcbiAgICAgICAgY29sdW1uc0NvdW50QnJlYWtQb2ludHM9e2NvbHVtbnNDb3VudEJyZWFrUG9pbnRzfVxyXG4gICAgICAvPlxyXG4gICAgKSA6IGl0ZW1UeXBlID09PSBcImNoYXJhY3RlcnNcIiA/IChcclxuICAgICAgPENoYXJhY3RlckdyaWRcclxuICAgICAgICBjb2x1bW5zQ291bnRCcmVha1BvaW50cz17Y29sdW1uc0NvdW50QnJlYWtQb2ludHN9XHJcbiAgICAgICAgZ3V0dGVyPXtndXR0ZXJ9XHJcbiAgICAgICAgdHlwZT17dHlwZX1cclxuICAgICAgICBjaGFyYWN0ZXJzPXtjdXJyZW50RGF0YXN9XHJcbiAgICAgIC8+XHJcbiAgICApIDogaXRlbVR5cGUgPT09IFwibG9jYXRpb25zXCIgPyAoXHJcbiAgICAgIDxMb2NhdGlvbkdyaWRcclxuICAgICAgICBsb2NhdGlvbnM9e2N1cnJlbnREYXRhc31cclxuICAgICAgICBndXR0ZXI9e2d1dHRlcn1cclxuICAgICAgICB0eXBlPXt0eXBlfVxyXG4gICAgICAgIGNvbHVtbnNDb3VudEJyZWFrUG9pbnRzPXtjb2x1bW5zQ291bnRCcmVha1BvaW50c31cclxuICAgICAgLz5cclxuICAgICkgOiBpdGVtVHlwZSA9PT0gXCJmb2xsb3dlcnNcIiA/IChcclxuICAgICAgPFVzZXJHcmlkXHJcbiAgICAgICAgZ3V0dGVyPXtndXR0ZXJ9XHJcbiAgICAgICAgdHlwZT17dHlwZX1cclxuICAgICAgICB4cz17eHN9XHJcbiAgICAgICAgc209e3NtfVxyXG4gICAgICAgIGxnPXtsZ31cclxuICAgICAgICBtZD17bWR9XHJcbiAgICAgICAgdXNlcnM9e2N1cnJlbnREYXRhc31cclxuICAgICAgLz5cclxuICAgICkgOiBudWxsO1xyXG5cclxuICBsZXQgcGFnZU51bWJlcnMgPSBbXTtcclxuICBmb3IgKGxldCBpID0gMTsgaSA8PSBNYXRoLmNlaWwoZGF0YS5sZW5ndGggLyBkYXRhc1BlclBhZ2UpOyBpKyspIHtcclxuICAgIHBhZ2VOdW1iZXJzLnB1c2goaSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICB7cmVuZGVyRGF0YXN9XHJcbiAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgIDxQYWdpbmF0ZVxyXG4gICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgc2hvd1F1aWNrSnVtcGVyXHJcbiAgICAgICAgaGlkZU9uU2luZ2xlUGFnZVxyXG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDbGlja31cclxuICAgICAgICB0b3RhbD17ZGF0YS5sZW5ndGh9XHJcbiAgICAgICAgcGFnZVNpemU9e2RhdGFzUGVyUGFnZX1cclxuICAgICAgICBzaG93VG90YWw9eyh0b3RhbCkgPT4gYFRvdGFsICR7dG90YWx9IGl0ZW1zYH1cclxuICAgICAgLz5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2luYXRpb247XHJcbiIsImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgU3BhY2UgfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuY29uc3QgVXNlckNhcmQgPSAoeyB1c2VyIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPExpbmsgaHJlZj17YC9wcm9maWxlLyR7dXNlci5pZH1gfT5cclxuICAgICAgPGE+XHJcbiAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJ1c2VyLWNhcmRcIiBkYXRhLWFvcz1cImZsaXAtbGVmdFwiPlxyXG4gICAgICAgICAgPFNwYWNlIGRpcmVjdGlvbj1cInZlcnRpY2FsXCIgc2l6ZT17MTJ9IGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIHt1c2VyLmltYWdlID8gKFxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e3VzZXIuaW1hZ2V9IGFsdD17YHBob3RvICR7dXNlci51c2VybmFtZX1gfSAvPlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8aW9uLWljb24gbmFtZT1cInBlcnNvblwiPjwvaW9uLWljb24+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxmaWdjYXB0aW9uPnt1c2VyLnVzZXJuYW1lfTwvZmlnY2FwdGlvbj5cclxuICAgICAgICAgIDwvU3BhY2U+XHJcbiAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgIDwvYT5cclxuICAgIDwvTGluaz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlckNhcmQ7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IExvYWRpbmdTY3JlZW4gPSAoeyBjaGlsZHJlbiwgbG9hZGluZyB9KSA9PiB7XHJcbiAgcmV0dXJuICFsb2FkaW5nID8gKFxyXG4gICAgY2hpbGRyZW5cclxuICApIDogKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkZXItY29udGFpbmVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGVyXCI+XHJcbiAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvYWRpbmdTY3JlZW47XHJcbiIsImltcG9ydCB7IFJlc3VsdCwgQnV0dG9uIH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmNvbnN0IFJlZGlyZWN0Q29tcCA9ICh7IGNvbmRpdGlvbiwgdHlwZSwgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIHJldHVybiBjb25kaXRpb24gPyAoXHJcbiAgICBjaGlsZHJlblxyXG4gICkgOiB0eXBlID09PSBcIjQwNFwiID8gKFxyXG4gICAgPFJlc3VsdFxyXG4gICAgICBzdGF0dXM9XCI0MDRcIlxyXG4gICAgICB0aXRsZT1cIjQwNFwiXHJcbiAgICAgIHN1YlRpdGxlPVwiU29ycnksIHRoZSBwYWdlIHlvdSB2aXNpdGVkIGRvZXMgbm90IGV4aXN0LlwiXHJcbiAgICAgIGV4dHJhPXs8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCI+QmFjayBIb21lPC9CdXR0b24+fVxyXG4gICAgLz5cclxuICApIDogdHlwZSA9PT0gXCI0MDNcIiA/IChcclxuICAgIDxSZXN1bHRcclxuICAgICAgc3RhdHVzPVwiNDAzXCJcclxuICAgICAgdGl0bGU9XCI0MDNcIlxyXG4gICAgICBzdWJUaXRsZT1cIlNvcnJ5LCB5b3UgYXJlIG5vdCBhdXRob3JpemVkIHRvIGFjY2VzcyB0aGlzIHBhZ2UuXCJcclxuICAgICAgZXh0cmE9ezxCdXR0b24gdHlwZT1cInByaW1hcnlcIj5CYWNrIEhvbWU8L0J1dHRvbj59XHJcbiAgICAvPlxyXG4gICkgOiB0eXBlID09PSBcInJlZGlyZWN0XCIgPyAoXHJcbiAgICAod2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9hdXRoXCIpXHJcbiAgKSA6IChcclxuICAgIDxkaXY+PC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZGlyZWN0Q29tcDtcclxuIiwiaW1wb3J0IHsgUm93LCBDb2wsIFNwYWNlLCBUb29sdGlwLCBJbWFnZSB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgZHVtbXkgfSBmcm9tIFwiLi4vLi4vdXRpbHMvZHVtbXlcIjtcclxuXHJcbmltcG9ydCBGYXZvcml0ZXMgZnJvbSBcIi4vRmF2b3JpdGVzXCI7XHJcblxyXG5jb25zdCBCYW5uZXIgPSAoe1xyXG4gIG9wZW5TZXR0aW5ncyxcclxuICBwcm9maWxlLFxyXG4gIGZhdkF1dGhvcnMsXHJcbiAgZm9sbG93ZXJzLFxyXG4gIGNoYW5nZUZhdlRhYixcclxuICBmYXZUYWIsXHJcbiAgc2V0Q3VycmVudFRhYixcclxuICBjb250ZXh0LFxyXG4gIGlzRm9sbG93aW5nLFxyXG4gIGZvbGxvd1VzZXIsXHJcbiAgdW5mb2xsb3dVc2VyLFxyXG4gIGF1dGgsXHJcbiAgaWQsXHJcbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiYW5uZXJcIj5cclxuICAgICAgPFJvdyBndXR0ZXI9ezE2fT5cclxuICAgICAgICA8Q29sIHhsPXsxOH0gbGc9ezI0fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS10b3BcIj5cclxuICAgICAgICAgICAgPFJvdyBndXR0ZXI9ezMyfSBhbGlnbj1cIm1pZGRsZVwiPlxyXG4gICAgICAgICAgICAgIDxDb2wgeHM9ezI0fSBzbT17OH0gbWQ9ezl9IGxnPXs3fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1pY29uPVwiaW1hZ2VcIiBjbGFzc05hbWU9XCJhdmF0YXJcIj5cclxuICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtwcm9maWxlPy5pbWFnZSA/IHByb2ZpbGUuaW1hZ2UgOiBkdW1teS5hdmF0YXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiYWlzaHdhcmF5YVwiXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezIzMH1cclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezIzMH1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDxDb2wgbWQ9ezE1fSBsZz17MTd9IHNtPXsxNn0geHM9ezI0fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICB7Y29udGV4dCA9PT0gXCJwcml2YXRlXCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb24gY3VzdG9tLWljb24gc2V0dGluZ3MtaWNvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29wZW5TZXR0aW5nc31cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlvbi1pY29uIG5hbWU9XCJzZXR0aW5nc1wiPjwvaW9uLWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApIDogYXV0aC51c2VyID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlzRm9sbG93aW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHVuZm9sbG93VXNlcihpZCwgaXNGb2xsb3dpbmcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGZvbGxvd1VzZXIoaWQsIGlzRm9sbG93aW5nLCBhdXRoLnVzZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9sbG93LWJ0biBhZGQtYnRuLWNpcmNsZSAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlzRm9sbG93aW5nID8gXCJmb2xsb3dlZFwiIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlvbi1pY29uIG5hbWU9XCJhZGQtY2lyY2xlXCI+PC9pb24taWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2Ake1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlzRm9sbG93aW5nID8gXCJVbmZvbGxvd1wiIDogXCJGb2xsb3dcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IHRoaXMgYXV0aG9yYH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICA8aDI+e3Byb2ZpbGU/LnVzZXJuYW1lfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNwYWNlIHNpemU9ezMwfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbGxvdy1jb3VudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Zm9sbG93ZXJzPy5hdXRob3JzLmxlbmd0aH0gZm9sbG93ZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb2xsb3ctY291bnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2ZhdkF1dGhvcnM/LmF1dGhvcnMubGVuZ3RofSBmb2xsb3dpbmdzXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TcGFjZT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJiaW9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHtwcm9maWxlLmJpb2dyYXBoeSAmJiBwcm9maWxlPy5iaW9ncmFwaHkubGVuZ3RoID4gMTQwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gYCR7cHJvZmlsZT8uYmlvZ3JhcGh5LnNsaWNlKDAsIDE0MCl9Li4uYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHByb2ZpbGU/LmJpb2dyYXBoeX1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxTcGFjZSBzaXplPXszMH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9maWxlLmZhY2Vib29rICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtwcm9maWxlPy5mYWNlYm9va30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uIGN1c3RvbS1pY29uIGZiLWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW9uLWljb24gbmFtZT1cImxvZ28tZmFjZWJvb2tcIj48L2lvbi1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9maWxlLnR3aXR0ZXIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3Byb2ZpbGU/LnR3aXR0ZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbiBjdXN0b20taWNvbiB0d2l0dGVyLWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW9uLWljb24gbmFtZT1cImxvZ28tdHdpdHRlclwiPjwvaW9uLWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb2ZpbGUuaW5zdGFncmFtICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtwcm9maWxlPy5pbnN0YWdyYW19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbiBjdXN0b20taWNvbiBpbnN0YWdyYW0taWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpb24taWNvbiBuYW1lPVwibG9nby1pbnN0YWdyYW1cIj48L2lvbi1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9maWxlLmRldmlhbnRhcnQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3Byb2ZpbGU/LmRldmlhbnRhcnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbiBjdXN0b20taWNvbiBkZXZpYW50YXJ0LWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW9uLWljb24gbmFtZT1cImxvZ28tZGV2aWFudGFydFwiPjwvaW9uLWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvU3BhY2U+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPENvbCBmbGV4PVwiYXV0b1wiIHhsPXs2fSBsZz17MjR9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiaW9cIj5cclxuICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtb3JlXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgZmF2VGFiID09PSBcImZhdmF1dGhvcnNcIlxyXG4gICAgICAgICAgICAgICAgICA/IHNldEN1cnJlbnRUYWIoXCJmb2xsb3dpbmdzXCIpXHJcbiAgICAgICAgICAgICAgICAgIDogc2V0Q3VycmVudFRhYihcImZvbGxvd2Vyc1wiKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFNlZSBhbGwgPj4+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWdtZW50ZWQtY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJyYWRpbzJcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9XCIzXCJcclxuICAgICAgICAgICAgICAgIGlkPVwidGFiLTFcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2hhbmdlRmF2VGFiKFwiZmF2YXV0aG9yc1wiKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGFiLTFcIiBjbGFzc05hbWU9XCJzZWdtZW50ZWQtY29udHJvbF9fMVwiPlxyXG4gICAgICAgICAgICAgICAgPHA+UmVjZW50IEZvbGxvd2luZ3M8L3A+XHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuXHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInJhZGlvMlwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT1cIjRcIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJ0YWItMlwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VGYXZUYWIoXCJmb2xsb3dlcnNcIil9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRhYi0yXCIgY2xhc3NOYW1lPVwic2VnbWVudGVkLWNvbnRyb2xfXzJcIj5cclxuICAgICAgICAgICAgICAgIDxwPlJlY2VudCBGb2xsb3dlcnM8L3A+XHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWdtZW50ZWQtY29udHJvbF9fY29sb3JcIj48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtmYXZUYWIgPT09IFwiZmF2YXV0aG9yc1wiICYmIChcclxuICAgICAgICAgICAgICA8RmF2b3JpdGVzIHNldEN1cnJlbnRUYWI9e3NldEN1cnJlbnRUYWJ9IGZhdnM9e2ZhdkF1dGhvcnN9IC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHtmYXZUYWIgPT09IFwiZm9sbG93ZXJzXCIgJiYgKFxyXG4gICAgICAgICAgICAgIDxGYXZvcml0ZXMgc2V0Q3VycmVudFRhYj17c2V0Q3VycmVudFRhYn0gZmF2cz17Zm9sbG93ZXJzfSAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgIDwvUm93PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhbm5lcjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBEaXZpZGVyIH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gXCIuLi9jb21tb24vUGFnaW5hdGlvblwiO1xyXG5pbXBvcnQgU29ydElucHV0IGZyb20gXCIuL1NvcnRJbnB1dFwiO1xyXG5cclxuY29uc3QgQ2hhcmFjdGVycyA9ICh7IGNoYXJhY3RlcnMsIHR5cGUsIGNvbnRleHQgfSkgPT4ge1xyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldERhdGEoY2hhcmFjdGVycyk7XHJcbiAgfSwgW2NoYXJhY3RlcnNdKTtcclxuXHJcbiAgY29uc3Qgb3B0aW9ucyA9IFtcclxuICAgIHsgbmFtZTogXCJEYXRlIChhc2NlbmRpbmcpXCIsIHZhbHVlOiBcImRhdGUtYXNjXCIgfSxcclxuICAgIHsgbmFtZTogXCJEYXRlIChkZXNjZW5kaW5nKVwiLCB2YWx1ZTogXCJkYXRlLWRlc2NcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkZpcnN0bmFtZSAoYXNjZW5kaW5nKVwiLCB2YWx1ZTogXCJmaXJzdG5hbWUtYXNjXCIgfSxcclxuICAgIHsgbmFtZTogXCJGaXJzdG5hbWUgKGRlc2NlbmRpbmcpXCIsIHZhbHVlOiBcImZpcnN0bmFtZS1kZXNjXCIgfSxcclxuICAgIHsgbmFtZTogXCJMYXN0bmFtZSAoYXNjZW5kaW5nKVwiLCB2YWx1ZTogXCJsYXN0bmFtZS1hc2NcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkxhc3RuYW1lIChkZXNjZW5kaW5nKVwiLCB2YWx1ZTogXCJsYXN0bmFtZS1kZXNjXCIgfSxcclxuICBdO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWNoYXJhY3RlcnNcIj5cclxuICAgICAgPFNvcnRJbnB1dFxyXG4gICAgICAgIHR5cGU9XCJjaGFyYWN0ZXJzXCJcclxuICAgICAgICBpdGVtRGF0YT17Y2hhcmFjdGVyc31cclxuICAgICAgICB0aXRsZT17dHlwZSAhPT0gXCJmYXZvcml0ZXNcIiA/IFwiQ2hhcmFjdGVyc1wiIDogXCJGYXZvcml0ZSBDaGFyYWN0ZXJzXCJ9XHJcbiAgICAgICAgc2V0RGF0YT17c2V0RGF0YX1cclxuICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxyXG4gICAgICAgIGNvbnRleHQ9e2NvbnRleHR9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgIDxQYWdpbmF0aW9uXHJcbiAgICAgICAgZGF0YT17ZGF0YX1cclxuICAgICAgICB0eXBlPXt0eXBlfVxyXG4gICAgICAgIGd1dHRlcj17XCIxNnB4XCJ9XHJcbiAgICAgICAgaXRlbVR5cGU9XCJjaGFyYWN0ZXJzXCJcclxuICAgICAgICBjb2x1bW5zQ291bnRCcmVha1BvaW50cz17eyAzNTA6IDEsIDc1MDogMiwgOTAwOiAzLCAxMjAwOiA0LCAxNjAwOiA2IH19XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhcmFjdGVycztcclxuIiwiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBSb3csIENvbCwgVG9vbHRpcCwgU3BpbiB9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5jb25zdCBGYXZvcml0ZXMgPSAoeyBmYXZzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmYXZvcml0ZXNcIj5cclxuICAgICAgPFJvdyBndXR0ZXI9e1sxNSwgMTBdfT5cclxuICAgICAgICB7ZmF2cy5pc0xvYWRpbmcgPyAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICA8U3BpbiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIGZhdnMuYXV0aG9ycy5zbGljZSgwLCAxMikubWFwKChmYXYpID0+IChcclxuICAgICAgICAgICAgPENvbCBrZXk9e2Zhdi5pZH0gc3Bhbj17Nn0+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9wcm9maWxlLyR7ZmF2LmlkfWB9PlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgdGl0bGU9e2Zhdi51c2VybmFtZX0gY29sb3I9e1wiIzZkNWRmY1wifT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZy1jb250YWluZXItYm9yZGVyIGltZy1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHtmYXYuaW1hZ2UgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtmYXYuaW1hZ2V9IGFsdD17YHBob3RvICR7ZmF2LnVzZXJuYW1lfWB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW9uLWljb24gbmFtZT1cInBlcnNvblwiPjwvaW9uLWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICkpXHJcbiAgICAgICAgKX1cclxuICAgICAgPC9Sb3c+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmF2b3JpdGVzO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IERpdmlkZXIgfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSBcIi4uL2NvbW1vbi9QYWdpbmF0aW9uXCI7XHJcbmltcG9ydCBTb3J0SW5wdXQgZnJvbSBcIi4vU29ydElucHV0XCI7XHJcblxyXG5jb25zdCBGb2xsb3dlcnMgPSAoeyBtZCwgc20sIHhzLCBsZywgaXRlbXMsIHRpdGxlLCB0eXBlIH0pID0+IHtcclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSBSZWFjdC51c2VTdGF0ZShbXSk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXREYXRhKGl0ZW1zKTtcclxuICB9LCBbaXRlbXNdKTtcclxuXHJcbiAgY29uc3Qgb3B0aW9ucyA9IFtcclxuICAgIHsgbmFtZTogXCJEYXRlIChhc2NlbmRpbmcpXCIsIHZhbHVlOiBcImRhdGUtYXNjXCIgfSxcclxuICAgIHsgbmFtZTogXCJEYXRlIChkZXNjZW5kaW5nKVwiLCB2YWx1ZTogXCJkYXRlLWRlc2NcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlVzZXJuYW1lIChhc2NlbmRpbmcpXCIsIHZhbHVlOiBcInVzZXJuYW1lLWFzY1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiVXNlcm5hbWUgKGRlc2NlbmRpbmcpXCIsIHZhbHVlOiBcInVzZXJuYW1lLWRlc2NcIiB9LFxyXG4gIF07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbGxvd2Vyc1wiPlxyXG4gICAgICA8U29ydElucHV0XHJcbiAgICAgICAgdHlwZT1cImZvbGxvd2Vyc1wiXHJcbiAgICAgICAgaXRlbURhdGE9e2l0ZW1zfVxyXG4gICAgICAgIHRpdGxlPXt0aXRsZX1cclxuICAgICAgICBzZXREYXRhPXtzZXREYXRhfVxyXG4gICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgIDxQYWdpbmF0aW9uXHJcbiAgICAgICAgZGF0YT17ZGF0YX1cclxuICAgICAgICBndXR0ZXI9e1syMCwgMzBdfVxyXG4gICAgICAgIGl0ZW1UeXBlPVwiZm9sbG93ZXJzXCJcclxuICAgICAgICBtZD17bWR9XHJcbiAgICAgICAgc209e3NtfVxyXG4gICAgICAgIHhzPXt4c31cclxuICAgICAgICBsZz17bGd9XHJcbiAgICAgICAgdHlwZT17dHlwZX1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb2xsb3dlcnM7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRGl2aWRlciB9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tIFwiLi4vY29tbW9uL1BhZ2luYXRpb25cIjtcclxuaW1wb3J0IFNvcnRJbnB1dCBmcm9tIFwiLi9Tb3J0SW5wdXRcIjtcclxuXHJcbmNvbnN0IExvY2F0aW9ucyA9ICh7IGxvY2F0aW9ucywgdHlwZSwgY29udGV4dCB9KSA9PiB7XHJcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gUmVhY3QudXNlU3RhdGUoW10pO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0RGF0YShsb2NhdGlvbnMpO1xyXG4gIH0sIFtsb2NhdGlvbnNdKTtcclxuXHJcbiAgY29uc3Qgb3B0aW9ucyA9IFtcclxuICAgIHsgbmFtZTogXCJEYXRlIChhc2NlbmRpbmcpXCIsIHZhbHVlOiBcImRhdGUtYXNjXCIgfSxcclxuICAgIHsgbmFtZTogXCJEYXRlIChkZXNjZW5kaW5nKVwiLCB2YWx1ZTogXCJkYXRlLWRlc2NcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk5hbWUgKGFzY2VuZGluZylcIiwgdmFsdWU6IFwibmFtZS1hc2NcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk5hbWUgKGRlc2NlbmRpbmcpXCIsIHZhbHVlOiBcIm5hbWUtZGVzY1wiIH0sXHJcbiAgXTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1jaGFyYWN0ZXJzXCI+XHJcbiAgICAgIDxTb3J0SW5wdXRcclxuICAgICAgICB0eXBlPVwibG9jYXRpb25zXCJcclxuICAgICAgICBpdGVtRGF0YT17bG9jYXRpb25zfVxyXG4gICAgICAgIHRpdGxlPVwiTG9jYXRpb25zXCJcclxuICAgICAgICBzZXREYXRhPXtzZXREYXRhfVxyXG4gICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XHJcbiAgICAgICAgY29udGV4dD17Y29udGV4dH1cclxuICAgICAgLz5cclxuICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgPFBhZ2luYXRpb25cclxuICAgICAgICBkYXRhPXtkYXRhfVxyXG4gICAgICAgIHR5cGU9e3R5cGV9XHJcbiAgICAgICAgZ3V0dGVyPXtcIjE2cHhcIn1cclxuICAgICAgICBpdGVtVHlwZT1cImxvY2F0aW9uc1wiXHJcbiAgICAgICAgY29sdW1uc0NvdW50QnJlYWtQb2ludHM9e3sgMzUwOiAxLCA3NTA6IDIsIDkwMDogMywgMTIwMDogNCwgMTYwMDogNiB9fVxyXG4gICAgICAvPlxyXG4gICAgICB7LyogPExvY2F0aW9uR3JpZFxyXG4gICAgICAgIGxvY2F0aW9ucz17bG9jYXRpb25zfVxyXG4gICAgICAgIHh4bD17NH1cclxuICAgICAgICBzbT17MTJ9XHJcbiAgICAgICAgc3g9ezEyfVxyXG4gICAgICAgIG1kPXs4fVxyXG4gICAgICAgIHhsPXs2fVxyXG4gICAgICAgIGxnPXs4fVxyXG4gICAgICAgIGd1dHRlcj17WzE2LCAxNl19XHJcbiAgICAgICAgdHlwZT17dHlwZX1cclxuICAgICAgLz4gKi99XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9jYXRpb25zO1xyXG4iLCJpbXBvcnQgeyBGb3JtLCBUYWJzLCBJbnB1dCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IGR1bW15IH0gZnJvbSBcIi4uLy4uL3V0aWxzL2R1bW15XCI7XHJcbmltcG9ydCB7XHJcbiAgTG9ja091dGxpbmVkLFxyXG4gIFVzZXJPdXRsaW5lZCxcclxuICBMaW5rT3V0bGluZWQsXHJcbiAgRmlsZUltYWdlT3V0bGluZWQsXHJcbn0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XHJcblxyXG5jb25zdCB7IFRhYlBhbmUgfSA9IFRhYnM7XHJcblxyXG5jb25zdCBTZXR0aW5ncyA9ICh7IHVzZXIgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmdzXCI+XHJcbiAgICAgIDxGb3JtIGxheW91dD1cInZlcnRpY2FsXCIgaW5pdGlhbFZhbHVlcz17eyB1c2VybmFtZTogdXNlci51c2VybmFtZSB9fT5cclxuICAgICAgICA8VGFicyBkZWZhdWx0QWN0aXZlS2V5PVwiMVwiPlxyXG4gICAgICAgICAgPFRhYlBhbmVcclxuICAgICAgICAgICAgdGFiPXtcclxuICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgIDxVc2VyT3V0bGluZWQgLz5cclxuICAgICAgICAgICAgICAgIFVzZXJuYW1lXHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGtleT1cIjFcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8Rm9ybS5JdGVtIG5hbWU9XCJ1c2VybmFtZVwiIGxhYmVsPVwiQ2hhbmdlIHlvdXIgdXNlcm5hbWVcIj5cclxuICAgICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICA8L1RhYlBhbmU+XHJcbiAgICAgICAgICA8VGFiUGFuZVxyXG4gICAgICAgICAgICB0YWI9e1xyXG4gICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgPExvY2tPdXRsaW5lZCAvPlxyXG4gICAgICAgICAgICAgICAgUGFzc3dvcmRcclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAga2V5PVwiMlwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCJBY3R1YWwgcGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIj5cclxuICAgICAgICAgICAgICA8SW5wdXQuUGFzc3dvcmQgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCJOZXcgcGFzc3dvcmRcIiBuYW1lPVwiY29uZmlybS1wYXNzd29yZFwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dC5QYXNzd29yZCAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgIDwvVGFiUGFuZT5cclxuICAgICAgICAgIDxUYWJQYW5lXHJcbiAgICAgICAgICAgIHRhYj17XHJcbiAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICA8TGlua091dGxpbmVkIC8+XHJcbiAgICAgICAgICAgICAgICBMaW5rc1xyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBrZXk9XCIzXCJcclxuICAgICAgICAgID48L1RhYlBhbmU+XHJcbiAgICAgICAgICA8VGFiUGFuZVxyXG4gICAgICAgICAgICB0YWI9e1xyXG4gICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgPEZpbGVJbWFnZU91dGxpbmVkIC8+XHJcbiAgICAgICAgICAgICAgICBBdmF0YXJcclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAga2V5PVwiNFwiXHJcbiAgICAgICAgICA+PC9UYWJQYW5lPlxyXG4gICAgICAgIDwvVGFicz5cclxuICAgICAgPC9Gb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNldHRpbmdzO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgRm9ybSwgU2VsZWN0LCBQYWdlSGVhZGVyIH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmNvbnN0IFNvcnRJbnB1dCA9ICh7IHRpdGxlLCBpdGVtRGF0YSwgc2V0RGF0YSwgdHlwZSwgb3B0aW9ucywgY29udGV4dCB9KSA9PiB7XHJcbiAgY29uc3Qgc29ydEFycmF5ID0gKHZhbHVlKSA9PiB7XHJcbiAgICBsZXQgbmV3QXJyID0gW107XHJcblxyXG4gICAgaWYgKHZhbHVlID09PSBcImRhdGUtYXNjXCIpIHtcclxuICAgICAgbmV3QXJyID0gWy4uLml0ZW1EYXRhXS5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBhLmNyZWF0ZWRBdCA9PT0gXCJvYmplY3RcIlxyXG4gICAgICAgICAgPyBuZXcgRGF0ZShhLmNyZWF0ZWRBdC5zZWNvbmRzICogMTAwMCkgLVxyXG4gICAgICAgICAgICAgIG5ldyBEYXRlKGIuY3JlYXRlZEF0LnNlY29uZHMgKiAxMDAwKVxyXG4gICAgICAgICAgOiBuZXcgRGF0ZShhLmNyZWF0ZWRBdCkgLSBuZXcgRGF0ZShiLmNyZWF0ZWRBdCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gXCJkYXRlLWRlc2NcIikge1xyXG4gICAgICBuZXdBcnIgPSBbLi4uaXRlbURhdGFdLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICByZXR1cm4gdHlwZW9mIGEuY3JlYXRlZEF0ID09PSBcIm9iamVjdFwiXHJcbiAgICAgICAgICA/IG5ldyBEYXRlKGIuY3JlYXRlZEF0LnNlY29uZHMgKiAxMDAwKSAtXHJcbiAgICAgICAgICAgICAgbmV3IERhdGUoYS5jcmVhdGVkQXQuc2Vjb25kcyAqIDEwMDApXHJcbiAgICAgICAgICA6IG5ldyBEYXRlKGIuY3JlYXRlZEF0KSAtIG5ldyBEYXRlKGEuY3JlYXRlZEF0KTtcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2UgaWYgKHZhbHVlID09PSBcIm5hbWUtZGVzY1wiKSB7XHJcbiAgICAgIGlmICh0eXBlID09PSBcImxvY2F0aW9uc1wiKSB7XHJcbiAgICAgICAgbmV3QXJyID0gWy4uLml0ZW1EYXRhXS5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBrZXlBID0gYS5uYW1lLnRvTG93ZXJDYXNlKCksXHJcbiAgICAgICAgICAgIGtleUIgPSBiLm5hbWUudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICAgICAgICBpZiAoa2V5QSA+IGtleUIpIHJldHVybiAtMTtcclxuICAgICAgICAgIGlmIChrZXlBIDwga2V5QikgcmV0dXJuIDE7XHJcbiAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSBcInN0b3JpZXNcIikge1xyXG4gICAgICAgIG5ld0FyciA9IFsuLi5pdGVtRGF0YV0uc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgY29uc3Qga2V5QSA9IGEudGl0bGUudG9Mb3dlckNhc2UoKSxcclxuICAgICAgICAgICAga2V5QiA9IGIudGl0bGUudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICAgICAgICBpZiAoa2V5QSA+IGtleUIpIHJldHVybiAtMTtcclxuICAgICAgICAgIGlmIChrZXlBIDwga2V5QikgcmV0dXJuIDE7XHJcbiAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gXCJuYW1lLWFzY1wiKSB7XHJcbiAgICAgIGlmICh0eXBlID09PSBcImxvY2F0aW9uc1wiKSB7XHJcbiAgICAgICAgbmV3QXJyID0gWy4uLml0ZW1EYXRhXS5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBrZXlBID0gYS5uYW1lLnRvTG93ZXJDYXNlKCksXHJcbiAgICAgICAgICAgIGtleUIgPSBiLm5hbWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgIGlmIChrZXlBIDwga2V5QikgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgaWYgKGtleUEgPiBrZXlCKSByZXR1cm4gMTtcclxuICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwic3Rvcmllc1wiKSB7XHJcbiAgICAgICAgbmV3QXJyID0gWy4uLml0ZW1EYXRhXS5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBrZXlBID0gYS50aXRsZS50b0xvd2VyQ2FzZSgpLFxyXG4gICAgICAgICAgICBrZXlCID0gYi50aXRsZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgaWYgKGtleUEgPCBrZXlCKSByZXR1cm4gLTE7XHJcbiAgICAgICAgICBpZiAoa2V5QSA+IGtleUIpIHJldHVybiAxO1xyXG4gICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IFwiZmlyc3RuYW1lLWFzY1wiKSB7XHJcbiAgICAgIG5ld0FyciA9IFsuLi5pdGVtRGF0YV0uc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgIGNvbnN0IGtleUEgPSBhLmZpcnN0bmFtZS50b0xvd2VyQ2FzZSgpLFxyXG4gICAgICAgICAga2V5QiA9IGIuZmlyc3RuYW1lLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgaWYgKGtleUEgPCBrZXlCKSByZXR1cm4gLTE7XHJcbiAgICAgICAgaWYgKGtleUEgPiBrZXlCKSByZXR1cm4gMTtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2UgaWYgKHZhbHVlID09PSBcImZpcnN0bmFtZS1kZXNjXCIpIHtcclxuICAgICAgbmV3QXJyID0gWy4uLml0ZW1EYXRhXS5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgY29uc3Qga2V5QSA9IGEuZmlyc3RuYW1lLnRvTG93ZXJDYXNlKCksXHJcbiAgICAgICAgICBrZXlCID0gYi5maXJzdG5hbWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBpZiAoa2V5QSA+IGtleUIpIHJldHVybiAtMTtcclxuICAgICAgICBpZiAoa2V5QSA8IGtleUIpIHJldHVybiAxO1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IFwibGFzdG5hbWUtYXNjXCIpIHtcclxuICAgICAgbmV3QXJyID0gWy4uLml0ZW1EYXRhXS5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgY29uc3Qga2V5QSA9IGEubGFzdG5hbWUudG9Mb3dlckNhc2UoKSxcclxuICAgICAgICAgIGtleUIgPSBiLmxhc3RuYW1lLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgaWYgKGtleUEgPCBrZXlCKSByZXR1cm4gLTE7XHJcbiAgICAgICAgaWYgKGtleUEgPiBrZXlCKSByZXR1cm4gMTtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2UgaWYgKHZhbHVlID09PSBcImxhc3RuYW1lLWRlc2NcIikge1xyXG4gICAgICBuZXdBcnIgPSBbLi4uaXRlbURhdGFdLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICBjb25zdCBrZXlBID0gYS5sYXN0bmFtZS50b0xvd2VyQ2FzZSgpLFxyXG4gICAgICAgICAga2V5QiA9IGIubGFzdG5hbWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBpZiAoa2V5QSA+IGtleUIpIHJldHVybiAtMTtcclxuICAgICAgICBpZiAoa2V5QSA8IGtleUIpIHJldHVybiAxO1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IFwidXNlcm5hbWUtYXNjXCIpIHtcclxuICAgICAgbmV3QXJyID0gWy4uLml0ZW1EYXRhXS5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgY29uc3Qga2V5QSA9IGEudXNlcm5hbWUudG9Mb3dlckNhc2UoKSxcclxuICAgICAgICAgIGtleUIgPSBiLnVzZXJuYW1lLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coa2V5QSk7XHJcbiAgICAgICAgaWYgKGtleUEgPCBrZXlCKSByZXR1cm4gLTE7XHJcbiAgICAgICAgaWYgKGtleUEgPiBrZXlCKSByZXR1cm4gMTtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2UgaWYgKHZhbHVlID09PSBcInVzZXJuYW1lLWRlc2NcIikge1xyXG4gICAgICBuZXdBcnIgPSBbLi4uaXRlbURhdGFdLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICBjb25zdCBrZXlBID0gYS51c2VybmFtZS50b0xvd2VyQ2FzZSgpLFxyXG4gICAgICAgICAga2V5QiA9IGIudXNlcm5hbWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBpZiAoa2V5QSA+IGtleUIpIHJldHVybiAtMTtcclxuICAgICAgICBpZiAoa2V5QSA8IGtleUIpIHJldHVybiAxO1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG5ld0FyciA9IGl0ZW1EYXRhO1xyXG4gICAgfVxyXG4gICAgc2V0RGF0YShuZXdBcnIpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8UGFnZUhlYWRlclxyXG4gICAgICAgIHRpdGxlPXtgJHtpdGVtRGF0YS5sZW5ndGh9ICR7dGl0bGV9YH1cclxuICAgICAgICBleHRyYT17XHJcbiAgICAgICAgICA8Rm9ybSBpbml0aWFsVmFsdWVzPXt7IHNvcnQ6IFwiZGF0ZS1kZXNjXCIgfX0+XHJcbiAgICAgICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCJTb3J0IGJ5XCIgbmFtZT1cInNvcnRcIj5cclxuICAgICAgICAgICAgICA8U2VsZWN0IG9uQ2hhbmdlPXsodmFsKSA9PiBzb3J0QXJyYXkodmFsKX0+XHJcbiAgICAgICAgICAgICAgICB7b3B0aW9ucy5tYXAoKG9wdGlvbiwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiBrZXk9e2l9IHZhbHVlPXtvcHRpb24udmFsdWV9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtvcHRpb24ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgPC9TZWxlY3QuT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgIH1cclxuICAgICAgPlxyXG4gICAgICAgIHtjb250ZXh0ID09PSBcInByaXZhdGVcIiAmJiB0eXBlID09PSBcInN0b3JpZXNcIiA/IChcclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc3RvcnkvbmV3XCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImFkZC1idG4tY2lyY2xlXCI+XHJcbiAgICAgICAgICAgICAgPGlvbi1pY29uIG5hbWU9XCJhZGQtY2lyY2xlXCI+PC9pb24taWNvbj5cclxuICAgICAgICAgICAgICA8c3Bhbj5BZGQgYSBuZXcgc3Rvcnk8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICApIDogY29udGV4dCA9PT0gXCJwcml2YXRlXCIgJiYgdHlwZSA9PT0gXCJsb2NhdGlvbnNcIiA/IChcclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbG9jYXRpb24vbmV3XCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImFkZC1idG4tY2lyY2xlXCI+XHJcbiAgICAgICAgICAgICAgPGlvbi1pY29uIG5hbWU9XCJhZGQtY2lyY2xlXCI+PC9pb24taWNvbj5cclxuICAgICAgICAgICAgICA8c3Bhbj5BZGQgYSBuZXcgbG9jYXRpb248L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICApIDogY29udGV4dCA9PT0gXCJwcml2YXRlXCIgJiYgdHlwZSA9PT0gXCJjaGFyYWN0ZXJzXCIgPyAoXHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2NoYXJhY3Rlci9uZXdcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYWRkLWJ0bi1jaXJjbGVcIj5cclxuICAgICAgICAgICAgICA8aW9uLWljb24gbmFtZT1cImFkZC1jaXJjbGVcIj48L2lvbi1pY29uPlxyXG4gICAgICAgICAgICAgIDxzcGFuPkFkZCBhIG5ldyBjaGFyYWN0ZXI8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICApIDogbnVsbH1cclxuICAgICAgPC9QYWdlSGVhZGVyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNvcnRJbnB1dDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBEaXZpZGVyIH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gXCIuLi9jb21tb24vUGFnaW5hdGlvblwiO1xyXG5pbXBvcnQgTG9hZGluZ1NjcmVlbiBmcm9tIFwiLi4vaG9jL0xvYWRpbmdTY3JlZW5cIjtcclxuaW1wb3J0IFNvcnRJbnB1dCBmcm9tIFwiLi9Tb3J0SW5wdXRcIjtcclxuXHJcbmNvbnN0IFN0b3JpZXMgPSAoeyBzdG9yaWVzLCBsb2FkaW5nLCB0eXBlLCBjb250ZXh0IH0pID0+IHtcclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSBSZWFjdC51c2VTdGF0ZShbXSk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXREYXRhKHN0b3JpZXMpO1xyXG4gIH0sIFtzdG9yaWVzXSk7XHJcblxyXG4gIGNvbnN0IG9wdGlvbnMgPSBbXHJcbiAgICB7IG5hbWU6IFwiRGF0ZSAoYXNjZW5kaW5nKVwiLCB2YWx1ZTogXCJkYXRlLWFzY1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiRGF0ZSAoZGVzY2VuZGluZylcIiwgdmFsdWU6IFwiZGF0ZS1kZXNjXCIgfSxcclxuICAgIHsgbmFtZTogXCJOYW1lIChhc2NlbmRpbmcpXCIsIHZhbHVlOiBcIm5hbWUtYXNjXCIgfSxcclxuICAgIHsgbmFtZTogXCJOYW1lIChkZXNjZW5kaW5nKVwiLCB2YWx1ZTogXCJuYW1lLWRlc2NcIiB9LFxyXG4gIF07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtc3Rvcmllc1wiPlxyXG4gICAgICA8TG9hZGluZ1NjcmVlbiBsb2FkaW5nPXtsb2FkaW5nfT5cclxuICAgICAgICA8U29ydElucHV0XHJcbiAgICAgICAgICB0eXBlPVwic3Rvcmllc1wiXHJcbiAgICAgICAgICBpdGVtRGF0YT17c3Rvcmllc31cclxuICAgICAgICAgIHRpdGxlPXt0eXBlICE9PSBcImZhdm9yaXRlc1wiID8gXCJTdG9yaWVzXCIgOiBcIkZhdm9yaXRlIFN0b3JpZXNcIn1cclxuICAgICAgICAgIHNldERhdGE9e3NldERhdGF9XHJcbiAgICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxyXG4gICAgICAgICAgY29udGV4dD17Y29udGV4dH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgPFBhZ2luYXRpb25cclxuICAgICAgICAgIGRhdGE9e2RhdGF9XHJcbiAgICAgICAgICB0eXBlPXt0eXBlfVxyXG4gICAgICAgICAgZ3V0dGVyPXtcIjE2cHhcIn1cclxuICAgICAgICAgIHR5cGU9e3R5cGV9XHJcbiAgICAgICAgICBpdGVtVHlwZT1cInN0b3JpZXNcIlxyXG4gICAgICAgICAgY29sdW1uc0NvdW50QnJlYWtQb2ludHM9e3sgMzUwOiAxLCA3NTA6IDIsIDkwMDogMywgMTIwMDogNCB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvTG9hZGluZ1NjcmVlbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdG9yaWVzO1xyXG4iLCJpbXBvcnQgeyBSb3csIENvbCB9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5jb25zdCBUYWJzID0gKHsgdGFicywgY2hhbmdlVGFiLCBjdXJyZW50VGFiIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLXRhYnNcIiBkYXRhLWFvcz1cInpvb20taW5cIj5cclxuICAgICAgPFJvdyBndXR0ZXI9ezQwfSBhbGlnbj1cIm1pZGRsZVwiIGp1c3RpZnk9XCJjZW50ZXJcIj5cclxuICAgICAgICB7dGFicy5tYXAoKHRhYikgPT4gKFxyXG4gICAgICAgICAgPENvbCBrZXk9e3RhYn0+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2B0YWIgJHtjdXJyZW50VGFiID09PSB0YWIgPyBcImFjdGl2ZVwiIDogXCJcIn1gfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNoYW5nZVRhYih0YWIpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHNwYW4+e3RhYn08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvUm93PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhYnM7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0LCBjcmVhdGVDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcbmltcG9ydCB7IGF1dGgsIGRiIH0gZnJvbSBcIi4uL3JlZHV4L2ZiQ29uZmlnXCI7XHJcblxyXG5jb25zdCBhdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQcm92aWRlQXV0aCh7IGNoaWxkcmVuIH0pIHtcclxuICBjb25zdCBhdXRoID0gdXNlUHJvdmlkZUF1dGgoKTtcclxuICByZXR1cm4gPGF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXthdXRofT57Y2hpbGRyZW59PC9hdXRoQ29udGV4dC5Qcm92aWRlcj47XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1c2VBdXRoID0gKCkgPT4ge1xyXG4gIHJldHVybiB1c2VDb250ZXh0KGF1dGhDb250ZXh0KTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIHVzZVByb3ZpZGVBdXRoKCkge1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgLy8gV3JhcCBhbnkgRmlyZWJhc2UgbWV0aG9kcyB3ZSB3YW50IHRvIHVzZSBtYWtpbmcgc3VyZSAuLi5cclxuICAvLyAuLi4gdG8gc2F2ZSB0aGUgdXNlciB0byBzdGF0ZS5cclxuICBjb25zdCBzaWduaW4gPSAoZW1haWwsIHBhc3N3b3JkKSA9PiB7XHJcbiAgICByZXR1cm4gYXV0aC5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHNldFVzZXIocmVzcG9uc2UudXNlcik7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS51c2VyO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2lnbnVwID0gKGVtYWlsLCBwYXNzd29yZCwgdXNlcm5hbWUpID0+IHtcclxuICAgIHJldHVybiBhdXRoXHJcbiAgICAgIC5jcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBzZXRVc2VyKHJlc3BvbnNlLnVzZXIpO1xyXG4gICAgICAgIGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKVxyXG4gICAgICAgICAgLmRvYyhyZXNwb25zZS51c2VyLnVpZClcclxuICAgICAgICAgIC5zZXQoe1xyXG4gICAgICAgICAgICB1c2VybmFtZSxcclxuICAgICAgICAgICAgbGlrZXNDb3VudDogMCxcclxuICAgICAgICAgICAgdHdpdHRlcjogXCJcIixcclxuICAgICAgICAgICAgZmFjZWJvb2s6IFwiXCIsXHJcbiAgICAgICAgICAgIGluc3RhZ3JhbTogXCJcIixcclxuICAgICAgICAgICAgZGV2aWFudGFydDogXCJcIixcclxuICAgICAgICAgICAgYmlvZ3JhcGh5OiBcIlwiLFxyXG4gICAgICAgICAgICBiYWRnZXM6IFtdLFxyXG4gICAgICAgICAgICBjcmVhdGVkQXQ6IGZpcmViYXNlLmZpcmVzdG9yZS5GaWVsZFZhbHVlLnNlcnZlclRpbWVzdGFtcCgpLFxyXG4gICAgICAgICAgICBpbWFnZTogXCJcIixcclxuICAgICAgICAgICAgc3VzcGVuZGVkOiBmYWxzZSxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFVzZXIoeyAuLi51c2VyLCB1c2VybmFtZTogdXNlcm5hbWUgfSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UudXNlcjtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2lnbm91dCA9ICgpID0+IHtcclxuICAgIHJldHVybiBhdXRoLnNpZ25PdXQoKS50aGVuKCgpID0+IHtcclxuICAgICAgc2V0VXNlcihmYWxzZSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzZW5kUGFzc3dvcmRSZXNldEVtYWlsID0gKGVtYWlsKSA9PiB7XHJcbiAgICByZXR1cm4gYXV0aC5zZW5kUGFzc3dvcmRSZXNldEVtYWlsKGVtYWlsKS50aGVuKCgpID0+IHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjb25maXJtUGFzc3dvcmRSZXNldCA9IChjb2RlLCBwYXNzd29yZCkgPT4ge1xyXG4gICAgcmV0dXJuIGF1dGguY29uZmlybVBhc3N3b3JkUmVzZXQoY29kZSwgcGFzc3dvcmQpLnRoZW4oKCkgPT4ge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB1bnN1YnNjcmliZSA9IGF1dGgub25BdXRoU3RhdGVDaGFuZ2VkKCh1c2VyKSA9PiB7XHJcbiAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgc2V0VXNlcih1c2VyKTtcclxuICAgICAgICBpZiAodXNlci51aWQpIHtcclxuICAgICAgICAgIGxldCB1c2VybmFtZSA9IFwiXCI7XHJcbiAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgZGIuY29sbGVjdGlvbihcInVzZXJzXCIpXHJcbiAgICAgICAgICAgIC5kb2ModXNlci51aWQpXHJcbiAgICAgICAgICAgIC5vblNuYXBzaG90KChkb2MpID0+IHtcclxuICAgICAgICAgICAgICB1c2VybmFtZSA9IGRvYy5kYXRhKCkudXNlcm5hbWU7XHJcbiAgICAgICAgICAgICAgc2V0VXNlcih7IC4uLnVzZXIsIHVzZXJuYW1lLCBpbWFnZTogZG9jLmRhdGEoKS5pbWFnZSB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldFVzZXIoZmFsc2UpO1xyXG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIENsZWFudXAgc3Vic2NyaXB0aW9uIG9uIHVubW91bnRcclxuICAgIHJldHVybiAoKSA9PiB1bnN1YnNjcmliZSgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgLy8gUmV0dXJuIHRoZSB1c2VyIG9iamVjdCBhbmQgYXV0aCBtZXRob2RzXHJcbiAgcmV0dXJuIHtcclxuICAgIGlzTG9hZGluZyxcclxuICAgIHVzZXIsXHJcbiAgICBzaWduaW4sXHJcbiAgICBzaWdudXAsXHJcbiAgICBzaWdub3V0LFxyXG4gICAgc2VuZFBhc3N3b3JkUmVzZXRFbWFpbCxcclxuICAgIGNvbmZpcm1QYXNzd29yZFJlc2V0LFxyXG4gIH07XHJcbn1cclxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBhZGRCYXNlUGF0aCxcbiAgYWRkTG9jYWxlLFxuICBpc0xvY2FsVVJMLFxuICBOZXh0Um91dGVyLFxuICBQcmVmZXRjaE9wdGlvbnMsXG4gIHJlc29sdmVIcmVmLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBSZXF1aXJlZEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IG5ldmVyIDogS1xufVtrZXlvZiBUXVxudHlwZSBPcHRpb25hbEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IEsgOiBuZXZlclxufVtrZXlvZiBUXVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbn1cbnR5cGUgTGlua1Byb3BzUmVxdWlyZWQgPSBSZXF1aXJlZEtleXM8TGlua1Byb3BzPlxudHlwZSBMaW5rUHJvcHNPcHRpb25hbCA9IE9wdGlvbmFsS2V5czxMaW5rUHJvcHM+XG5cbmxldCBjYWNoZWRPYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbmNvbnN0IGxpc3RlbmVycyA9IG5ldyBNYXA8RWxlbWVudCwgKCkgPT4gdm9pZD4oKVxuY29uc3QgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlciA6IG51bGxcbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBnZXRPYnNlcnZlcigpOiBJbnRlcnNlY3Rpb25PYnNlcnZlciB8IHVuZGVmaW5lZCB7XG4gIC8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG4gIGlmIChjYWNoZWRPYnNlcnZlcikge1xuICAgIHJldHVybiBjYWNoZWRPYnNlcnZlclxuICB9XG5cbiAgLy8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG4gIGlmICghSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICByZXR1cm4gKGNhY2hlZE9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgIChlbnRyaWVzKSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGlmICghbGlzdGVuZXJzLmhhcyhlbnRyeS50YXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYiA9IGxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KSFcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMCkge1xuICAgICAgICAgIGNhY2hlZE9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgbGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgY2IoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgeyByb290TWFyZ2luOiAnMjAwcHgnIH1cbiAgKSlcbn1cblxuY29uc3QgbGlzdGVuVG9JbnRlcnNlY3Rpb25zID0gKGVsOiBFbGVtZW50LCBjYjogKCkgPT4gdm9pZCkgPT4ge1xuICBjb25zdCBvYnNlcnZlciA9IGdldE9ic2VydmVyKClcbiAgaWYgKCFvYnNlcnZlcikge1xuICAgIHJldHVybiAoKSA9PiB7fVxuICB9XG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbClcbiAgbGlzdGVuZXJzLnNldChlbCwgY2IpXG4gIHJldHVybiAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbClcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgIH1cbiAgICBsaXN0ZW5lcnMuZGVsZXRlKGVsKVxuICB9XG59XG5cbmZ1bmN0aW9uIHByZWZldGNoKFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgb3B0aW9ucz86IFByZWZldGNoT3B0aW9uc1xuKTogdm9pZCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuXG4gIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG4gIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXSA9IHRydWVcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KSB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gIHJldHVybiAoXG4gICAgKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgZXZlbnQubWV0YUtleSB8fFxuICAgIGV2ZW50LmN0cmxLZXkgfHxcbiAgICBldmVudC5zaGlmdEtleSB8fFxuICAgIGV2ZW50LmFsdEtleSB8fCAvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuICAgIChldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMilcbiAgKVxufVxuXG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChcbiAgZTogUmVhY3QuTW91c2VFdmVudCxcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIHJlcGxhY2U/OiBib29sZWFuLFxuICBzaGFsbG93PzogYm9vbGVhbixcbiAgc2Nyb2xsPzogYm9vbGVhblxuKTogdm9pZCB7XG4gIGNvbnN0IHsgbm9kZU5hbWUgfSA9IGUuY3VycmVudFRhcmdldFxuXG4gIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgIWlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgcmV0dXJuXG4gIH1cblxuICBlLnByZXZlbnREZWZhdWx0KClcblxuICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICB9XG5cbiAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywgeyBzaGFsbG93IH0pLnRoZW4oXG4gICAgKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmICghc3VjY2VzcykgcmV0dXJuXG4gICAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKClcbiAgICAgIH1cbiAgICB9XG4gIClcbn1cblxuZnVuY3Rpb24gTGluayhwcm9wczogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48TGlua1Byb3BzPikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzOiB7XG4gICAgICBrZXk6IHN0cmluZ1xuICAgICAgZXhwZWN0ZWQ6IHN0cmluZ1xuICAgICAgYWN0dWFsOiBzdHJpbmdcbiAgICB9KSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgICBgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArXG4gICAgICAgICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIlxuICAgICAgICAgICAgOiAnJylcbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc1JlcXVpcmVkLCB0cnVlPiA9IHtcbiAgICAgIGhyZWY6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHM6IExpbmtQcm9wc1JlcXVpcmVkW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIHJlcXVpcmVkUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzUmVxdWlyZWRbXVxuICAgIHJlcXVpcmVkUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNSZXF1aXJlZCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2hyZWYnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldID09IG51bGwgfHxcbiAgICAgICAgICAodHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0JylcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc09wdGlvbmFsLCB0cnVlPiA9IHtcbiAgICAgIGFzOiB0cnVlLFxuICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgIHNoYWxsb3c6IHRydWUsXG4gICAgICBwYXNzSHJlZjogdHJ1ZSxcbiAgICAgIHByZWZldGNoOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCBvcHRpb25hbFByb3BzOiBMaW5rUHJvcHNPcHRpb25hbFtdID0gT2JqZWN0LmtleXMoXG4gICAgICBvcHRpb25hbFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc09wdGlvbmFsW11cbiAgICBvcHRpb25hbFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzT3B0aW9uYWwpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdhcycpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gJiZcbiAgICAgICAgICB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiZcbiAgICAgICAgICB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCdcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBrZXkgPT09ICdyZXBsYWNlJyB8fFxuICAgICAgICBrZXkgPT09ICdzY3JvbGwnIHx8XG4gICAgICAgIGtleSA9PT0gJ3NoYWxsb3cnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Bhc3NIcmVmJyB8fFxuICAgICAgICBrZXkgPT09ICdwcmVmZXRjaCdcbiAgICAgICkge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgYWN0dWFsOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgY29uc3QgaGFzV2FybmVkID0gUmVhY3QudXNlUmVmKGZhbHNlKVxuICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICApXG4gICAgfVxuICB9XG4gIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcblxuICBjb25zdCBbY2hpbGRFbG0sIHNldENoaWxkRWxtXSA9IFJlYWN0LnVzZVN0YXRlPEVsZW1lbnQ+KClcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBwYXRobmFtZSA9IChyb3V0ZXIgJiYgcm91dGVyLnBhdGhuYW1lKSB8fCAnLydcblxuICBjb25zdCB7IGhyZWYsIGFzIH0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5ocmVmLCB0cnVlKVxuICAgIHJldHVybiB7XG4gICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICBhczogcHJvcHMuYXNcbiAgICAgICAgPyByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuYXMpXG4gICAgICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWYsXG4gICAgfVxuICB9LCBbcGF0aG5hbWUsIHByb3BzLmhyZWYsIHByb3BzLmFzXSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChcbiAgICAgIHAgJiZcbiAgICAgIEludGVyc2VjdGlvbk9ic2VydmVyICYmXG4gICAgICBjaGlsZEVsbSAmJlxuICAgICAgY2hpbGRFbG0udGFnTmFtZSAmJlxuICAgICAgaXNMb2NhbFVSTChocmVmKVxuICAgICkge1xuICAgICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9IHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXVxuICAgICAgaWYgKCFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RlblRvSW50ZXJzZWN0aW9ucyhjaGlsZEVsbSwgKCkgPT4ge1xuICAgICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9LCBbcCwgY2hpbGRFbG0sIGhyZWYsIGFzLCByb3V0ZXJdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwgfSA9IHByb3BzXG4gIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgfVxuXG4gIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiAoZWw6IGFueSkgPT4ge1xuICAgICAgaWYgKGVsKSBzZXRDaGlsZEVsbShlbClcblxuICAgICAgaWYgKGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZC5yZWYoZWwpXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGQucmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbClcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgaWYgKHApIHtcbiAgICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgICB9XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gICAgfVxuICB9XG5cbiAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICBpZiAocHJvcHMucGFzc0hyZWYgfHwgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpKSB7XG4gICAgY2hpbGRQcm9wcy5ocmVmID0gYWRkQmFzZVBhdGgoXG4gICAgICBhZGRMb2NhbGUoYXMsIHJvdXRlciAmJiByb3V0ZXIubG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmRlZmF1bHRMb2NhbGUpXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcylcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aFxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSFxuICA/IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKVxuICAgICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nXG4gICAgICB9XG4gICAgfVxuICA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbiAgJ2xvY2FsZScsXG4gICdsb2NhbGVzJyxcbiAgJ2RlZmF1bHRMb2NhbGUnLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIEFycmF5LmlzQXJyYXkoX3JvdXRlcltwcm9wZXJ0eV0pID8gW10gOiB7fSxcbiAgICAgICAgX3JvdXRlcltwcm9wZXJ0eV1cbiAgICAgICkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KSB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIFRva2VuaXplIGlucHV0IHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gbGV4ZXIoc3RyKSB7XG4gICAgdmFyIHRva2VucyA9IFtdO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSBzdHJbaV07XG4gICAgICAgIGlmIChjaGFyID09PSBcIipcIiB8fCBjaGFyID09PSBcIitcIiB8fCBjaGFyID09PSBcIj9cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk1PRElGSUVSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFU0NBUEVEX0NIQVJcIiwgaW5kZXg6IGkrKywgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwie1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiT1BFTlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwifVwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0xPU0VcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIjpcIikge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhciBjb2RlID0gc3RyLmNoYXJDb2RlQXQoaik7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIC8vIGAwLTlgXG4gICAgICAgICAgICAgICAgKGNvZGUgPj0gNDggJiYgY29kZSA8PSA1NykgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYEEtWmBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gNjUgJiYgY29kZSA8PSA5MCkgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYGEtemBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gOTcgJiYgY29kZSA8PSAxMjIpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBfYFxuICAgICAgICAgICAgICAgICAgICBjb2RlID09PSA5NSkge1xuICAgICAgICAgICAgICAgICAgICBuYW1lICs9IHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIW5hbWUpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGFyYW1ldGVyIG5hbWUgYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJOQU1FXCIsIGluZGV4OiBpLCB2YWx1ZTogbmFtZSB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKFwiKSB7XG4gICAgICAgICAgICB2YXIgY291bnQgPSAxO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm4gPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlBhdHRlcm4gY2Fubm90IHN0YXJ0IHdpdGggXFxcIj9cXFwiIGF0IFwiICsgaik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdICsgc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIilcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudC0tO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHN0cltqXSA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cltqICsgMV0gIT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2FwdHVyaW5nIGdyb3VwcyBhcmUgbm90IGFsbG93ZWQgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvdW50KVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmJhbGFuY2VkIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIGlmICghcGF0dGVybilcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiUEFUVEVSTlwiLCBpbmRleDogaSwgdmFsdWU6IHBhdHRlcm4gfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDSEFSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgfVxuICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFTkRcIiwgaW5kZXg6IGksIHZhbHVlOiBcIlwiIH0pO1xuICAgIHJldHVybiB0b2tlbnM7XG59XG4vKipcbiAqIFBhcnNlIGEgc3RyaW5nIGZvciB0aGUgcmF3IHRva2Vucy5cbiAqL1xuZnVuY3Rpb24gcGFyc2Uoc3RyLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgdG9rZW5zID0gbGV4ZXIoc3RyKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLnByZWZpeGVzLCBwcmVmaXhlcyA9IF9hID09PSB2b2lkIDAgPyBcIi4vXCIgOiBfYTtcbiAgICB2YXIgZGVmYXVsdFBhdHRlcm4gPSBcIlteXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl0rP1wiO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIga2V5ID0gMDtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHBhdGggPSBcIlwiO1xuICAgIHZhciB0cnlDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgaWYgKGkgPCB0b2tlbnMubGVuZ3RoICYmIHRva2Vuc1tpXS50eXBlID09PSB0eXBlKVxuICAgICAgICAgICAgcmV0dXJuIHRva2Vuc1tpKytdLnZhbHVlO1xuICAgIH07XG4gICAgdmFyIG11c3RDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdHJ5Q29uc3VtZSh0eXBlKTtcbiAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIHZhciBfYSA9IHRva2Vuc1tpXSwgbmV4dFR5cGUgPSBfYS50eXBlLCBpbmRleCA9IF9hLmluZGV4O1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5leHBlY3RlZCBcIiArIG5leHRUeXBlICsgXCIgYXQgXCIgKyBpbmRleCArIFwiLCBleHBlY3RlZCBcIiArIHR5cGUpO1xuICAgIH07XG4gICAgdmFyIGNvbnN1bWVUZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gXCJcIjtcbiAgICAgICAgdmFyIHZhbHVlO1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgd2hpbGUgKCh2YWx1ZSA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIikpKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIHdoaWxlIChpIDwgdG9rZW5zLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpO1xuICAgICAgICB2YXIgbmFtZSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpO1xuICAgICAgICB2YXIgcGF0dGVybiA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpO1xuICAgICAgICBpZiAobmFtZSB8fCBwYXR0ZXJuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY2hhciB8fCBcIlwiO1xuICAgICAgICAgICAgaWYgKHByZWZpeGVzLmluZGV4T2YocHJlZml4KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHByZWZpeDtcbiAgICAgICAgICAgICAgICBwcmVmaXggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lIHx8IGtleSsrLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBwYXR0ZXJuIHx8IGRlZmF1bHRQYXR0ZXJuLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdmFsdWUgPSBjaGFyIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIik7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgcGF0aCArPSB2YWx1ZTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvcGVuID0gdHJ5Q29uc3VtZShcIk9QRU5cIik7XG4gICAgICAgIGlmIChvcGVuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIHZhciBuYW1lXzEgPSB0cnlDb25zdW1lKFwiTkFNRVwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm5fMSA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIG11c3RDb25zdW1lKFwiQ0xPU0VcIik7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZV8xIHx8IChwYXR0ZXJuXzEgPyBrZXkrKyA6IFwiXCIpLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IG5hbWVfMSAmJiAhcGF0dGVybl8xID8gZGVmYXVsdFBhdHRlcm4gOiBwYXR0ZXJuXzEsXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBzdWZmaXgsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIG11c3RDb25zdW1lKFwiRU5EXCIpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0cy5wYXJzZSA9IHBhcnNlO1xuLyoqXG4gKiBDb21waWxlIGEgc3RyaW5nIHRvIGEgdGVtcGxhdGUgZnVuY3Rpb24gZm9yIHRoZSBwYXRoLlxuICovXG5mdW5jdGlvbiBjb21waWxlKHN0ciwgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb0Z1bmN0aW9uKHBhcnNlKHN0ciwgb3B0aW9ucyksIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5jb21waWxlID0gY29tcGlsZTtcbi8qKlxuICogRXhwb3NlIGEgbWV0aG9kIGZvciB0cmFuc2Zvcm1pbmcgdG9rZW5zIGludG8gdGhlIHBhdGggZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvRnVuY3Rpb24odG9rZW5zLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgcmVGbGFncyA9IGZsYWdzKG9wdGlvbnMpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYSwgX2IgPSBvcHRpb25zLnZhbGlkYXRlLCB2YWxpZGF0ZSA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2I7XG4gICAgLy8gQ29tcGlsZSBhbGwgdGhlIHRva2VucyBpbnRvIHJlZ2V4cHMuXG4gICAgdmFyIG1hdGNoZXMgPSB0b2tlbnMubWFwKGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChcIl4oPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikkXCIsIHJlRmxhZ3MpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc1tpXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHZhbHVlID0gZGF0YSA/IGRhdGFbdG9rZW4ubmFtZV0gOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB2YXIgb3B0aW9uYWwgPSB0b2tlbi5tb2RpZmllciA9PT0gXCI/XCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiO1xuICAgICAgICAgICAgdmFyIHJlcGVhdCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIrXCI7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcGVhdCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgYmUgZW1wdHlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsdWUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUodmFsdWVbal0sIHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBhbGwgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUoU3RyaW5nKHZhbHVlKSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgdmFyIHR5cGVPZk1lc3NhZ2UgPSByZXBlYXQgPyBcImFuIGFycmF5XCIgOiBcImEgc3RyaW5nXCI7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBiZSBcIiArIHR5cGVPZk1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH07XG59XG5leHBvcnRzLnRva2Vuc1RvRnVuY3Rpb24gPSB0b2tlbnNUb0Z1bmN0aW9uO1xuLyoqXG4gKiBDcmVhdGUgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgc3BlYy5cbiAqL1xuZnVuY3Rpb24gbWF0Y2goc3RyLCBvcHRpb25zKSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICB2YXIgcmUgPSBwYXRoVG9SZWdleHAoc3RyLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLm1hdGNoID0gbWF0Y2g7XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIG91dHB1dC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5kZWNvZGUsIGRlY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hO1xuICAgIHJldHVybiBmdW5jdGlvbiAocGF0aG5hbWUpIHtcbiAgICAgICAgdmFyIG0gPSByZS5leGVjKHBhdGhuYW1lKTtcbiAgICAgICAgaWYgKCFtKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgcGF0aCA9IG1bMF0sIGluZGV4ID0gbS5pbmRleDtcbiAgICAgICAgdmFyIHBhcmFtcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgaWYgKG1baV0gPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJjb250aW51ZVwiO1xuICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbaSAtIDFdO1xuICAgICAgICAgICAgaWYgKGtleS5tb2RpZmllciA9PT0gXCIqXCIgfHwga2V5Lm1vZGlmaWVyID09PSBcIitcIikge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBtW2ldLnNwbGl0KGtleS5wcmVmaXggKyBrZXkuc3VmZml4KS5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWNvZGUodmFsdWUsIGtleSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gZGVjb2RlKG1baV0sIGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgX2xvb3BfMShpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBwYXRoOiBwYXRoLCBpbmRleDogaW5kZXgsIHBhcmFtczogcGFyYW1zIH07XG4gICAgfTtcbn1cbmV4cG9ydHMucmVnZXhwVG9GdW5jdGlvbiA9IHJlZ2V4cFRvRnVuY3Rpb247XG4vKipcbiAqIEVzY2FwZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGVzY2FwZVN0cmluZyhzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbLisqPz1eIToke30oKVtcXF18L1xcXFxdKS9nLCBcIlxcXFwkMVwiKTtcbn1cbi8qKlxuICogR2V0IHRoZSBmbGFncyBmb3IgYSByZWdleHAgZnJvbSB0aGUgb3B0aW9ucy5cbiAqL1xuZnVuY3Rpb24gZmxhZ3Mob3B0aW9ucykge1xuICAgIHJldHVybiBvcHRpb25zICYmIG9wdGlvbnMuc2Vuc2l0aXZlID8gXCJcIiA6IFwiaVwiO1xufVxuLyoqXG4gKiBQdWxsIG91dCBrZXlzIGZyb20gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpIHtcbiAgICBpZiAoIWtleXMpXG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIC8vIFVzZSBhIG5lZ2F0aXZlIGxvb2thaGVhZCB0byBtYXRjaCBvbmx5IGNhcHR1cmluZyBncm91cHMuXG4gICAgdmFyIGdyb3VwcyA9IHBhdGguc291cmNlLm1hdGNoKC9cXCgoPyFcXD8pL2cpO1xuICAgIGlmIChncm91cHMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBncm91cHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGtleXMucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogaSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuLyoqXG4gKiBUcmFuc2Zvcm0gYW4gYXJyYXkgaW50byBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlUb1JlZ2V4cChwYXRocywga2V5cywgb3B0aW9ucykge1xuICAgIHZhciBwYXJ0cyA9IHBhdGhzLm1hcChmdW5jdGlvbiAocGF0aCkgeyByZXR1cm4gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpLnNvdXJjZTsgfSk7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXCIoPzpcIiArIHBhcnRzLmpvaW4oXCJ8XCIpICsgXCIpXCIsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbi8qKlxuICogQ3JlYXRlIGEgcGF0aCByZWdleHAgZnJvbSBzdHJpbmcgaW5wdXQuXG4gKi9cbmZ1bmN0aW9uIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9SZWdleHAocGFyc2UocGF0aCwgb3B0aW9ucyksIGtleXMsIG9wdGlvbnMpO1xufVxuLyoqXG4gKiBFeHBvc2UgYSBmdW5jdGlvbiBmb3IgdGFraW5nIHRva2VucyBhbmQgcmV0dXJuaW5nIGEgUmVnRXhwLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb1JlZ2V4cCh0b2tlbnMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuc3RyaWN0LCBzdHJpY3QgPSBfYSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYSwgX2IgPSBvcHRpb25zLnN0YXJ0LCBzdGFydCA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2IsIF9jID0gb3B0aW9ucy5lbmQsIGVuZCA9IF9jID09PSB2b2lkIDAgPyB0cnVlIDogX2MsIF9kID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9kID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9kO1xuICAgIHZhciBlbmRzV2l0aCA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZW5kc1dpdGggfHwgXCJcIikgKyBcIl18JFwiO1xuICAgIHZhciBkZWxpbWl0ZXIgPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXVwiO1xuICAgIHZhciByb3V0ZSA9IHN0YXJ0ID8gXCJeXCIgOiBcIlwiO1xuICAgIC8vIEl0ZXJhdGUgb3ZlciB0aGUgdG9rZW5zIGFuZCBjcmVhdGUgb3VyIHJlZ2V4cCBzdHJpbmcuXG4gICAgZm9yICh2YXIgX2kgPSAwLCB0b2tlbnNfMSA9IHRva2VuczsgX2kgPCB0b2tlbnNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zXzFbX2ldO1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5wcmVmaXgpKTtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnN1ZmZpeCkpO1xuICAgICAgICAgICAgaWYgKHRva2VuLnBhdHRlcm4pIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5cylcbiAgICAgICAgICAgICAgICAgICAga2V5cy5wdXNoKHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAocHJlZml4IHx8IHN1ZmZpeCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1vZCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiA/IFwiP1wiIDogXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIigoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikoPzpcIiArIHN1ZmZpeCArIHByZWZpeCArIFwiKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKSopXCIgKyBzdWZmaXggKyBcIilcIiArIG1vZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVuZCkge1xuICAgICAgICBpZiAoIXN0cmljdClcbiAgICAgICAgICAgIHJvdXRlICs9IGRlbGltaXRlciArIFwiP1wiO1xuICAgICAgICByb3V0ZSArPSAhb3B0aW9ucy5lbmRzV2l0aCA/IFwiJFwiIDogXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgZW5kVG9rZW4gPSB0b2tlbnNbdG9rZW5zLmxlbmd0aCAtIDFdO1xuICAgICAgICB2YXIgaXNFbmREZWxpbWl0ZWQgPSB0eXBlb2YgZW5kVG9rZW4gPT09IFwic3RyaW5nXCJcbiAgICAgICAgICAgID8gZGVsaW1pdGVyLmluZGV4T2YoZW5kVG9rZW5bZW5kVG9rZW4ubGVuZ3RoIC0gMV0pID4gLTFcbiAgICAgICAgICAgIDogLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICAgICAgZW5kVG9rZW4gPT09IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKCFzdHJpY3QpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBkZWxpbWl0ZXIgKyBcIig/PVwiICsgZW5kc1dpdGggKyBcIikpP1wiO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNFbmREZWxpbWl0ZWQpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD89XCIgKyBkZWxpbWl0ZXIgKyBcInxcIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAocm91dGUsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbmV4cG9ydHMudG9rZW5zVG9SZWdleHAgPSB0b2tlbnNUb1JlZ2V4cDtcbi8qKlxuICogTm9ybWFsaXplIHRoZSBnaXZlbiBwYXRoIHN0cmluZywgcmV0dXJuaW5nIGEgcmVndWxhciBleHByZXNzaW9uLlxuICpcbiAqIEFuIGVtcHR5IGFycmF5IGNhbiBiZSBwYXNzZWQgaW4gZm9yIHRoZSBrZXlzLCB3aGljaCB3aWxsIGhvbGQgdGhlXG4gKiBwbGFjZWhvbGRlciBrZXkgZGVzY3JpcHRpb25zLiBGb3IgZXhhbXBsZSwgdXNpbmcgYC91c2VyLzppZGAsIGBrZXlzYCB3aWxsXG4gKiBjb250YWluIGBbeyBuYW1lOiAnaWQnLCBkZWxpbWl0ZXI6ICcvJywgb3B0aW9uYWw6IGZhbHNlLCByZXBlYXQ6IGZhbHNlIH1dYC5cbiAqL1xuZnVuY3Rpb24gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAocGF0aCBpbnN0YW5jZW9mIFJlZ0V4cClcbiAgICAgICAgcmV0dXJuIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHBhdGgpKVxuICAgICAgICByZXR1cm4gYXJyYXlUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLnBhdGhUb1JlZ2V4cCA9IHBhdGhUb1JlZ2V4cDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5pbXBvcnQgeyBHb29kUGFnZUNhY2hlLCBTdHlsZVNoZWV0VHVwbGUgfSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcGFnZS1sb2FkZXInXG5pbXBvcnQgeyBkZW5vcm1hbGl6ZVBhZ2VQYXRoIH0gZnJvbSAnLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3V0aWxzL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHJlc29sdmVSZXdyaXRlcyBmcm9tICcuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcbmltcG9ydCBlc2NhcGVQYXRoRGVsaW1pdGVycyBmcm9tICcuL3V0aWxzL2VzY2FwZS1wYXRoLWRlbGltaXRlcnMnXG5cbmludGVyZmFjZSBUcmFuc2l0aW9uT3B0aW9ucyB7XG4gIHNoYWxsb3c/OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBOZXh0SGlzdG9yeVN0YXRlIHtcbiAgdXJsOiBzdHJpbmdcbiAgYXM6IHN0cmluZ1xuICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xufVxuXG50eXBlIEhpc3RvcnlTdGF0ZSA9IG51bGwgfCB7IF9fTjogZmFsc2UgfSB8ICh7IF9fTjogdHJ1ZSB9ICYgTmV4dEhpc3RvcnlTdGF0ZSlcblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICBjYW5jZWxsZWQ6IHRydWUsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aDogc3RyaW5nLCBwcmVmaXg/OiBzdHJpbmcpIHtcbiAgcmV0dXJuIHByZWZpeCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKVxuICAgID8gcGF0aCA9PT0gJy8nXG4gICAgICA/IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKHByZWZpeClcbiAgICAgIDogYCR7cHJlZml4fSR7cGF0aH1gXG4gICAgOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRMb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nLFxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9pMThuX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmIGxvY2FsZSAhPT0gZGVmYXVsdExvY2FsZSAmJiAhcGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSlcbiAgICAgID8gYWRkUGF0aFByZWZpeChwYXRoLCAnLycgKyBsb2NhbGUpXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGg6IHN0cmluZywgbG9jYWxlPzogc3RyaW5nKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfaTE4bl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlKVxuICAgICAgPyBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSkgfHwgJy8nXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICByZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLCBiYXNlUGF0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG59XG5cbi8qKlxuICogRGV0ZWN0cyB3aGV0aGVyIGEgZ2l2ZW4gdXJsIGlzIHJvdXRhYmxlIGJ5IHRoZSBOZXh0LmpzIHJvdXRlciAoYnJvd3NlciBvbmx5KS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTG9jYWxVUkwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykpIHJldHVybiB0cnVlXG4gIHRyeSB7XG4gICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pXG4gICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhcbiAgcm91dGU6IHN0cmluZyxcbiAgYXNQYXRobmFtZTogc3RyaW5nLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbikge1xuICBsZXQgaW50ZXJwb2xhdGVkUm91dGUgPSAnJ1xuXG4gIGNvbnN0IGR5bmFtaWNSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gIGNvbnN0IGR5bmFtaWNHcm91cHMgPSBkeW5hbWljUmVnZXguZ3JvdXBzXG4gIGNvbnN0IGR5bmFtaWNNYXRjaGVzID1cbiAgICAvLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4gICAgKGFzUGF0aG5hbWUgIT09IHJvdXRlID8gZ2V0Um91dGVNYXRjaGVyKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSkgOiAnJykgfHxcbiAgICAvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbiAgICAvLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG4gICAgcXVlcnlcblxuICBpbnRlcnBvbGF0ZWRSb3V0ZSA9IHJvdXRlXG4gIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpXG5cbiAgaWYgKFxuICAgICFwYXJhbXMuZXZlcnkoKHBhcmFtKSA9PiB7XG4gICAgICBsZXQgdmFsdWUgPSBkeW5hbWljTWF0Y2hlc1twYXJhbV0gfHwgJydcbiAgICAgIGNvbnN0IHsgcmVwZWF0LCBvcHRpb25hbCB9ID0gZHluYW1pY0dyb3Vwc1twYXJhbV1cblxuICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4gICAgICAvLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG4gICAgICBsZXQgcmVwbGFjZWQgPSBgWyR7cmVwZWF0ID8gJy4uLicgOiAnJ30ke3BhcmFtfV1gXG4gICAgICBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgcmVwbGFjZWQgPSBgJHshdmFsdWUgPyAnLycgOiAnJ31bJHtyZXBsYWNlZH1dYFxuICAgICAgfVxuICAgICAgaWYgKHJlcGVhdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gW3ZhbHVlXVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmXG4gICAgICAgIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuICAgICAgICAoaW50ZXJwb2xhdGVkUm91dGUgPVxuICAgICAgICAgIGludGVycG9sYXRlZFJvdXRlIS5yZXBsYWNlKFxuICAgICAgICAgICAgcmVwbGFjZWQsXG4gICAgICAgICAgICByZXBlYXRcbiAgICAgICAgICAgICAgPyAodmFsdWUgYXMgc3RyaW5nW10pLm1hcChlc2NhcGVQYXRoRGVsaW1pdGVycykuam9pbignLycpXG4gICAgICAgICAgICAgIDogZXNjYXBlUGF0aERlbGltaXRlcnModmFsdWUgYXMgc3RyaW5nKVxuICAgICAgICAgICkgfHwgJy8nKVxuICAgICAgKVxuICAgIH0pXG4gICkge1xuICAgIGludGVycG9sYXRlZFJvdXRlID0gJycgLy8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcblxuICAgIC8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4gICAgLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbiAgfVxuICByZXR1cm4ge1xuICAgIHBhcmFtcyxcbiAgICByZXN1bHQ6IGludGVycG9sYXRlZFJvdXRlLFxuICB9XG59XG5cbmZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTogUGFyc2VkVXJsUXVlcnksIHBhcmFtczogc3RyaW5nW10pIHtcbiAgY29uc3QgZmlsdGVyZWRRdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuXG4gIE9iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICBmaWx0ZXJlZFF1ZXJ5W2tleV0gPSBxdWVyeVtrZXldXG4gICAgfVxuICB9KVxuICByZXR1cm4gZmlsdGVyZWRRdWVyeVxufVxuXG4vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUhyZWYoXG4gIGN1cnJlbnRQYXRoOiBzdHJpbmcsXG4gIGhyZWY6IFVybCxcbiAgcmVzb2x2ZUFzPzogYm9vbGVhblxuKTogc3RyaW5nIHtcbiAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgY29uc3QgYmFzZSA9IG5ldyBVUkwoY3VycmVudFBhdGgsICdodHRwOi8vbicpXG4gIGNvbnN0IHVybEFzU3RyaW5nID1cbiAgICB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZilcbiAgdHJ5IHtcbiAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpXG4gICAgZmluYWxVcmwucGF0aG5hbWUgPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSlcbiAgICBsZXQgaW50ZXJwb2xhdGVkQXMgPSAnJ1xuXG4gICAgaWYgKFxuICAgICAgaXNEeW5hbWljUm91dGUoZmluYWxVcmwucGF0aG5hbWUpICYmXG4gICAgICBmaW5hbFVybC5zZWFyY2hQYXJhbXMgJiZcbiAgICAgIHJlc29sdmVBc1xuICAgICkge1xuICAgICAgY29uc3QgcXVlcnkgPSBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KGZpbmFsVXJsLnNlYXJjaFBhcmFtcylcblxuICAgICAgY29uc3QgeyByZXN1bHQsIHBhcmFtcyB9ID0gaW50ZXJwb2xhdGVBcyhcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBxdWVyeVxuICAgICAgKVxuXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIGludGVycG9sYXRlZEFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgIHBhdGhuYW1lOiByZXN1bHQsXG4gICAgICAgICAgaGFzaDogZmluYWxVcmwuaGFzaCxcbiAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID1cbiAgICAgIGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW5cbiAgICAgICAgPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpXG4gICAgICAgIDogZmluYWxVcmwuaHJlZlxuXG4gICAgcmV0dXJuIChyZXNvbHZlQXNcbiAgICAgID8gW3Jlc29sdmVkSHJlZiwgaW50ZXJwb2xhdGVkQXMgfHwgcmVzb2x2ZWRIcmVmXVxuICAgICAgOiByZXNvbHZlZEhyZWYpIGFzIHN0cmluZ1xuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIChyZXNvbHZlQXMgPyBbdXJsQXNTdHJpbmddIDogdXJsQXNTdHJpbmcpIGFzIHN0cmluZ1xuICB9XG59XG5cbmNvbnN0IFBBR0VfTE9BRF9FUlJPUiA9IFN5bWJvbCgnUEFHRV9MT0FEX0VSUk9SJylcbmV4cG9ydCBmdW5jdGlvbiBtYXJrTG9hZGluZ0Vycm9yKGVycjogRXJyb3IpOiBFcnJvciB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBQQUdFX0xPQURfRVJST1IsIHt9KVxufVxuXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyOiBOZXh0Um91dGVyLCB1cmw6IFVybCwgYXM6IFVybCkge1xuICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgcmV0dXJuIHtcbiAgICB1cmw6IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgdXJsKSksXG4gICAgYXM6IGFzID8gYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCBhcykpIDogYXMsXG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBQcml2YXRlUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogUmVjb3JkPHN0cmluZywgYW55PlxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wcyA9IFBpY2s8UHJpdmF0ZVJvdXRlSW5mbywgJ0NvbXBvbmVudCcgfCAnZXJyJz4gJiB7XG4gIHJvdXRlcjogUm91dGVyXG59ICYgUmVjb3JkPHN0cmluZywgYW55PlxuZXhwb3J0IHR5cGUgQXBwQ29tcG9uZW50ID0gQ29tcG9uZW50VHlwZTxBcHBQcm9wcz5cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbywgQXBwOiBBcHBDb21wb25lbnQpID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBOZXh0SGlzdG9yeVN0YXRlKSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9XG4gIHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiZcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeVxuXG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybDogc3RyaW5nLCBhdHRlbXB0czogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgIC8vXG4gICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgIC8vID4gb3B0aW9uLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAvL1xuICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcy5qc29uKClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZjogc3RyaW5nLCBpc1NlcnZlclJlbmRlcjogYm9vbGVhbikge1xuICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgIC8vIGxvb3AuXG4gICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgbWFya0xvYWRpbmdFcnJvcihlcnIpXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBQcml2YXRlUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcbiAgX3NoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGluaXRpYWxTdHlsZVNoZWV0cyxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgICBsb2NhbGUsXG4gICAgICBsb2NhbGVzLFxuICAgICAgZGVmYXVsdExvY2FsZSxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBpbml0aWFsU3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gICAgICBBcHA6IEFwcENvbXBvbmVudFxuICAgICAgd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgICBsb2NhbGU/OiBzdHJpbmdcbiAgICAgIGxvY2FsZXM/OiBzdHJpbmdbXVxuICAgICAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0czogaW5pdGlhbFN0eWxlU2hlZXRzLFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgIENvbXBvbmVudDogQXBwIGFzIENvbXBvbmVudFR5cGUsXG4gICAgICBzdHlsZVNoZWV0czogW1xuICAgICAgICAvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXG4gICAgICBdLFxuICAgIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgdGhpcy5hc1BhdGggPVxuICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfaTE4bl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVxuICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlc1xuICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKClcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG5cbiAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCdcblxuICAgICAgICAgIGxldCBzY3JvbGxEZWJvdW5jZVRpbWVvdXQ6IHVuZGVmaW5lZCB8IE5vZGVKUy5UaW1lb3V0XG5cbiAgICAgICAgICBjb25zdCBkZWJvdW5jZWRTY3JvbGxTYXZlID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNjcm9sbERlYm91bmNlVGltZW91dCkgY2xlYXJUaW1lb3V0KHNjcm9sbERlYm91bmNlVGltZW91dClcblxuICAgICAgICAgICAgc2Nyb2xsRGVib3VuY2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgdXJsLCBhczogY3VyQXMsIG9wdGlvbnMgfSA9IGhpc3Rvcnkuc3RhdGVcbiAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgY3VyQXMsXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICAgICAgICAgICAgX05fWDogd2luZG93LnNjcm9sbFgsXG4gICAgICAgICAgICAgICAgICBfTl9ZOiB3aW5kb3cuc2Nyb2xsWSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9LCAxMClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZGVib3VuY2VkU2Nyb2xsU2F2ZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZSBhcyBIaXN0b3J5U3RhdGVcblxuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zIH0gPSBzdGF0ZVxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAodGhpcy5pc1NzciAmJiBhcyA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlKFxuICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICB1cmwsXG4gICAgICBhcyxcbiAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICB9KVxuICAgIClcbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgYXN5bmMgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybFxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICB9XG4gICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgIGlmIChTVCkge1xuICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlKVxuICAgIH1cblxuICAgIGFzID0gYWRkTG9jYWxlKGFzLCB0aGlzLmxvY2FsZSwgdGhpcy5kZWZhdWx0TG9jYWxlKVxuICAgIGNvbnN0IGNsZWFuZWRBcyA9IGRlbExvY2FsZShcbiAgICAgIGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLFxuICAgICAgdGhpcy5sb2NhbGVcbiAgICApXG4gICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzXG5cbiAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpIHtcbiAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzKVxuICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKVxuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcylcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgIGNvbnN0IHsgX19yZXdyaXRlczogcmV3cml0ZXMgfSA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5wcm9taXNlZEJ1aWxkTWFuaWZlc3RcblxuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gcGFyc2VkXG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgPyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZSkpXG4gICAgICA6IHBhdGhuYW1lXG5cbiAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSkge1xuICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICB9XG5cbiAgICBsZXQgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuXG4gICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbiAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgbGV0IHJlc29sdmVkQXMgPSBhc1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpIHtcbiAgICAgIHJlc29sdmVkQXMgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgIHBhcnNlUmVsYXRpdmVVcmwoYXMpLnBhdGhuYW1lLFxuICAgICAgICBwYWdlcyxcbiAgICAgICAgYmFzZVBhdGgsXG4gICAgICAgIHJld3JpdGVzLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgKHA6IHN0cmluZykgPT4gdGhpcy5fcmVzb2x2ZUhyZWYoeyBwYXRobmFtZTogcCB9LCBwYWdlcykucGF0aG5hbWUhXG4gICAgICApXG5cbiAgICAgIGlmIChyZXNvbHZlZEFzICE9PSBhcykge1xuICAgICAgICBjb25zdCBwb3RlbnRpYWxIcmVmID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goXG4gICAgICAgICAgdGhpcy5fcmVzb2x2ZUhyZWYoXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWQsIHsgcGF0aG5hbWU6IHJlc29sdmVkQXMgfSksXG4gICAgICAgICAgICBwYWdlcyxcbiAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgKS5wYXRobmFtZSFcbiAgICAgICAgKVxuXG4gICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBvdGVudGlhbEhyZWYpKSB7XG4gICAgICAgICAgcm91dGUgPSBwb3RlbnRpYWxIcmVmXG4gICAgICAgICAgcGF0aG5hbWUgPSBwb3RlbnRpYWxIcmVmXG4gICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSwgdGhpcy5sb2NhbGUpXG5cbiAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcylcbiAgICAgIGNvbnN0IGFzUGF0aG5hbWUgPSBwYXJzZWRBcy5wYXRobmFtZVxuXG4gICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWVcbiAgICAgIGNvbnN0IGludGVycG9sYXRlZEFzID0gc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgPyBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeSlcbiAgICAgICAgOiAoe30gYXMgeyByZXN1bHQ6IHVuZGVmaW5lZDsgcGFyYW1zOiB1bmRlZmluZWQgfSlcblxuICAgICAgaWYgKCFyb3V0ZU1hdGNoIHx8IChzaG91bGRJbnRlcnBvbGF0ZSAmJiAhaW50ZXJwb2xhdGVkQXMucmVzdWx0KSkge1xuICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyBgSW50ZXJwb2xhdGluZyBocmVmYFxuICAgICAgICAgICAgICAgICAgOiBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgXG4gICAgICAgICAgICAgIH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgKHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgXG4gICAgICAgICAgICAgIDogYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkgK1xuICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy8ke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJ1xuICAgICAgICAgICAgICAgICAgOiAnaW5jb21wYXRpYmxlLWhyZWYtYXMnXG4gICAgICAgICAgICAgIH1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNob3VsZEludGVycG9sYXRlKSB7XG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkQXMsIHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiBpbnRlcnBvbGF0ZWRBcy5yZXN1bHQsXG4gICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBpbnRlcnBvbGF0ZWRBcy5wYXJhbXMhKSxcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgfVxuICAgIH1cblxuICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzKVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgc2hhbGxvd1xuICAgICAgKVxuICAgICAgbGV0IHsgZXJyb3IsIHByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgLy8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG4gICAgICBpZiAoXG4gICAgICAgIChfX05fU1NHIHx8IF9fTl9TU1ApICYmXG4gICAgICAgIHByb3BzICYmXG4gICAgICAgIChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcyAmJlxuICAgICAgICAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG5cbiAgICAgICAgLy8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbiAgICAgICAgLy8gY2xpZW50LW5hdmlnYXRpb24gaWYgaXQgaXMgZmFsbGluZyBiYWNrIHRvIGhhcmQgbmF2aWdhdGlvbiBpZlxuICAgICAgICAvLyBpdCdzIG5vdFxuICAgICAgICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgY29uc3QgcGFyc2VkSHJlZiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gICAgICAgICAgdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkSHJlZiwgcGFnZXMpXG5cbiAgICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocGFyc2VkSHJlZi5wYXRobmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZShcbiAgICAgICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgICBkZXN0aW5hdGlvbixcbiAgICAgICAgICAgICAgb3B0aW9uc1xuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZGVzdGluYXRpb25cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgfVxuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcylcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgIG1ldGhvZCxcbiAgICAgICAgdXJsLFxuICAgICAgICBhZGRMb2NhbGUoYXMsIHRoaXMubG9jYWxlLCB0aGlzLmRlZmF1bHRMb2NhbGUpLFxuICAgICAgICBvcHRpb25zXG4gICAgICApXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgIH1cblxuICAgICAgYXdhaXQgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lISwgcXVlcnksIGNsZWFuZWRBcywgcm91dGVJbmZvKS5jYXRjaChcbiAgICAgICAgKGUpID0+IHtcbiAgICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZVxuICAgICAgICAgIGVsc2UgdGhyb3cgZVxuICAgICAgICB9XG4gICAgICApXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gJiYgJ19OX1gnIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oKG9wdGlvbnMgYXMgYW55KS5fTl9YLCAob3B0aW9ucyBhcyBhbnkpLl9OX1kpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICB9IGFzIEhpc3RvcnlTdGF0ZSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIGlmIChQQUdFX0xPQURfRVJST1IgaW4gZXJyIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50LCBzdHlsZVNoZWV0cyB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChcbiAgICAgICAgJy9fZXJyb3InXG4gICAgICApXG4gICAgICBjb25zdCByb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgIGVycixcbiAgICAgICAgZXJyb3I6IGVycixcbiAgICAgIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgZXJyLFxuICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICB9IGFzIGFueSlcbiAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpXG4gICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgdHJ1ZSlcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBzaGFsbG93OiBib29sZWFuID0gZmFsc2VcbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cblxuICAgICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBjYWNoZWRSb3V0ZUluZm9cbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgID8gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKSA9PiAoe1xuICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgfSkpXG5cbiAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGFIcmVmOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICBkZWxCYXNlUGF0aChhcyksXG4gICAgICAgICAgX19OX1NTRyxcbiAgICAgICAgICB0aGlzLmxvY2FsZSxcbiAgICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGE8UHJpdmF0ZVJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgKVxuICAgICAgKVxuXG4gICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzKVxuICAgIH1cbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mb1xuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIF9yZXNvbHZlSHJlZihwYXJzZWRIcmVmOiBVcmxPYmplY3QsIHBhZ2VzOiBzdHJpbmdbXSwgYXBwbHlCYXNlUGF0aCA9IHRydWUpIHtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRIcmVmXG4gICAgY29uc3QgY2xlYW5QYXRobmFtZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKFxuICAgICAgZGVub3JtYWxpemVQYWdlUGF0aChhcHBseUJhc2VQYXRoID8gZGVsQmFzZVBhdGgocGF0aG5hbWUhKSA6IHBhdGhuYW1lISlcbiAgICApXG5cbiAgICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgICB9XG5cbiAgICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gICAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lISkpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIHBhZ2VzLnNvbWUoKHBhZ2UpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGlzRHluYW1pY1JvdXRlKHBhZ2UpICYmXG4gICAgICAgICAgZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUhKVxuICAgICAgICApIHtcbiAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gYXBwbHlCYXNlUGF0aCA/IGFkZEJhc2VQYXRoKHBhZ2UpIDogcGFnZVxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiBwYXJzZWRIcmVmXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBhc3luYyBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSB9ID0gcGFyc2VkXG5cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgdGhpcy5wYWdlTG9hZGVyLnByZWZldGNoRGF0YShcbiAgICAgICAgdXJsLFxuICAgICAgICBhc1BhdGgsXG4gICAgICAgIHRoaXMubG9jYWxlLFxuICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICksXG4gICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgXSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPEdvb2RQYWdlQ2FjaGU+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1tjYWNoZUtleV0pIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKVxuICAgIH1cbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwIGFzIEFwcENvbXBvbmVudClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksIGFzKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KGRhdGE6IFByaXZhdGVSb3V0ZUluZm8pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCBhcyBBcHBDb21wb25lbnQpXG4gIH1cbn1cbiIsIi8vIGVzY2FwZSBkZWxpbWl0ZXJzIHVzZWQgYnkgcGF0aC10by1yZWdleHBcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVzY2FwZVBhdGhEZWxpbWl0ZXJzKHNlZ21lbnQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBzZWdtZW50LnJlcGxhY2UoL1svIz9dL2csIChjaGFyOiBzdHJpbmcpID0+IGVuY29kZVVSSUNvbXBvbmVudChjaGFyKSlcbn1cbiIsIi8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgKiBhcyBxdWVyeXN0cmluZyBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzID0gL2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqOiBVcmxPYmplY3QpIHtcbiAgbGV0IHsgYXV0aCwgaG9zdG5hbWUgfSA9IHVybE9ialxuICBsZXQgcHJvdG9jb2wgPSB1cmxPYmoucHJvdG9jb2wgfHwgJydcbiAgbGV0IHBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lIHx8ICcnXG4gIGxldCBoYXNoID0gdXJsT2JqLmhhc2ggfHwgJydcbiAgbGV0IHF1ZXJ5ID0gdXJsT2JqLnF1ZXJ5IHx8ICcnXG4gIGxldCBob3N0OiBzdHJpbmcgfCBmYWxzZSA9IGZhbHNlXG5cbiAgYXV0aCA9IGF1dGggPyBlbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksICc6JykgKyAnQCcgOiAnJ1xuXG4gIGlmICh1cmxPYmouaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdXJsT2JqLmhvc3RcbiAgfSBlbHNlIGlmIChob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKH5ob3N0bmFtZS5pbmRleE9mKCc6JykgPyBgWyR7aG9zdG5hbWV9XWAgOiBob3N0bmFtZSlcbiAgICBpZiAodXJsT2JqLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gJzonICsgdXJsT2JqLnBvcnRcbiAgICB9XG4gIH1cblxuICBpZiAocXVlcnkgJiYgdHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgIHF1ZXJ5ID0gU3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkgYXMgUGFyc2VkVXJsUXVlcnkpKVxuICB9XG5cbiAgbGV0IHNlYXJjaCA9IHVybE9iai5zZWFyY2ggfHwgKHF1ZXJ5ICYmIGA/JHtxdWVyeX1gKSB8fCAnJ1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6J1xuXG4gIGlmIChcbiAgICB1cmxPYmouc2xhc2hlcyB8fFxuICAgICgoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpICYmIGhvc3QgIT09IGZhbHNlKVxuICApIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKVxuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZVswXSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lXG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJydcbiAgfVxuXG4gIGlmIChoYXNoICYmIGhhc2hbMF0gIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2hcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2hbMF0gIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoXG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGVuY29kZVVSSUNvbXBvbmVudClcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJyMnLCAnJTIzJylcblxuICByZXR1cm4gYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWBcbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0TG9jYXRpb25PcmlnaW4gfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBEVU1NWV9CQVNFID0gbmV3IFVSTChcbiAgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyAnaHR0cDovL24nIDogZ2V0TG9jYXRpb25PcmlnaW4oKVxuKVxuXG4vKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKSB7XG4gIGNvbnN0IHJlc29sdmVkQmFzZSA9IGJhc2UgPyBuZXcgVVJMKGJhc2UsIERVTU1ZX0JBU0UpIDogRFVNTVlfQkFTRVxuICBjb25zdCB7XG4gICAgcGF0aG5hbWUsXG4gICAgc2VhcmNoUGFyYW1zLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWYsXG4gICAgb3JpZ2luLFxuICAgIHByb3RvY29sLFxuICB9ID0gbmV3IFVSTCh1cmwsIHJlc29sdmVkQmFzZSlcbiAgaWYgKFxuICAgIG9yaWdpbiAhPT0gRFVNTVlfQkFTRS5vcmlnaW4gfHxcbiAgICAocHJvdG9jb2wgIT09ICdodHRwOicgJiYgcHJvdG9jb2wgIT09ICdodHRwczonKVxuICApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwnKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmOiBocmVmLnNsaWNlKERVTU1ZX0JBU0Uub3JpZ2luLmxlbmd0aCksXG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbmV4cG9ydCB7IHBhdGhUb1JlZ2V4cCB9XG5cbmV4cG9ydCBjb25zdCBtYXRjaGVyT3B0aW9uczogcGF0aFRvUmVnZXhwLlRva2Vuc1RvUmVnZXhwT3B0aW9ucyAmXG4gIHBhdGhUb1JlZ2V4cC5QYXJzZU9wdGlvbnMgPSB7XG4gIHNlbnNpdGl2ZTogZmFsc2UsXG4gIGRlbGltaXRlcjogJy8nLFxufVxuXG5leHBvcnQgY29uc3QgY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9uczogcGF0aFRvUmVnZXhwLlRva2Vuc1RvUmVnZXhwT3B0aW9ucyAmXG4gIHBhdGhUb1JlZ2V4cC5QYXJzZU9wdGlvbnMgPSB7XG4gIC4uLm1hdGNoZXJPcHRpb25zLFxuICBzdHJpY3Q6IHRydWUsXG59XG5cbmV4cG9ydCBkZWZhdWx0IChjdXN0b21Sb3V0ZSA9IGZhbHNlKSA9PiB7XG4gIHJldHVybiAocGF0aDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3Qga2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgICBjb25zdCBtYXRjaGVyUmVnZXggPSBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKFxuICAgICAgcGF0aCxcbiAgICAgIGtleXMsXG4gICAgICBjdXN0b21Sb3V0ZSA/IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMgOiBtYXRjaGVyT3B0aW9uc1xuICAgIClcbiAgICBjb25zdCBtYXRjaGVyID0gcGF0aFRvUmVnZXhwLnJlZ2V4cFRvRnVuY3Rpb24obWF0Y2hlclJlZ2V4LCBrZXlzKVxuXG4gICAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCwgcGFyYW1zPzogYW55KSA9PiB7XG4gICAgICBjb25zdCByZXMgPSBwYXRobmFtZSA9PSBudWxsID8gZmFsc2UgOiBtYXRjaGVyKHBhdGhuYW1lKVxuICAgICAgaWYgKCFyZXMpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGlmIChjdXN0b21Sb3V0ZSkge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgICAgLy8gdW5uYW1lZCBwYXJhbXMgc2hvdWxkIGJlIHJlbW92ZWQgYXMgdGhleVxuICAgICAgICAgIC8vIGFyZSBub3QgYWxsb3dlZCB0byBiZSB1c2VkIGluIHRoZSBkZXN0aW5hdGlvblxuICAgICAgICAgIGlmICh0eXBlb2Yga2V5Lm5hbWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBkZWxldGUgKHJlcy5wYXJhbXMgYXMgYW55KVtrZXkubmFtZV1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsgLi4ucGFyYW1zLCAuLi5yZXMucGFyYW1zIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbnR5cGUgUGFyYW1zID0geyBbcGFyYW06IHN0cmluZ106IGFueSB9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByZXBhcmVEZXN0aW5hdGlvbihcbiAgZGVzdGluYXRpb246IHN0cmluZyxcbiAgcGFyYW1zOiBQYXJhbXMsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgYXBwZW5kUGFyYW1zVG9RdWVyeTogYm9vbGVhbixcbiAgYmFzZVBhdGg6IHN0cmluZ1xuKSB7XG4gIGxldCBwYXJzZWREZXN0aW5hdGlvbjoge1xuICAgIHF1ZXJ5PzogUGFyc2VkVXJsUXVlcnlcbiAgICBwcm90b2NvbD86IHN0cmluZ1xuICAgIGhvc3RuYW1lPzogc3RyaW5nXG4gICAgcG9ydD86IHN0cmluZ1xuICB9ICYgUmV0dXJuVHlwZTx0eXBlb2YgcGFyc2VSZWxhdGl2ZVVybD4gPSB7fSBhcyBhbnlcblxuICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgc2VhcmNoUGFyYW1zLFxuICAgICAgaGFzaCxcbiAgICAgIGhvc3RuYW1lLFxuICAgICAgcG9ydCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9ID0gbmV3IFVSTChkZXN0aW5hdGlvbilcblxuICAgIHBhcnNlZERlc3RpbmF0aW9uID0ge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgICAgaGFzaCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9XG4gIH1cblxuICBjb25zdCBkZXN0UXVlcnkgPSBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeVxuICBjb25zdCBkZXN0UGF0aCA9IGAke3BhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lIX0ke1xuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggfHwgJydcbiAgfWBcbiAgY29uc3QgZGVzdFBhdGhQYXJhbUtleXM6IHBhdGhUb1JlZ2V4cC5LZXlbXSA9IFtdXG4gIHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoZGVzdFBhdGgsIGRlc3RQYXRoUGFyYW1LZXlzKVxuXG4gIGNvbnN0IGRlc3RQYXRoUGFyYW1zID0gZGVzdFBhdGhQYXJhbUtleXMubWFwKChrZXkpID0+IGtleS5uYW1lKVxuXG4gIGxldCBkZXN0aW5hdGlvbkNvbXBpbGVyID0gcGF0aFRvUmVnZXhwLmNvbXBpbGUoXG4gICAgZGVzdFBhdGgsXG4gICAgLy8gd2UgZG9uJ3QgdmFsaWRhdGUgd2hpbGUgY29tcGlsaW5nIHRoZSBkZXN0aW5hdGlvbiBzaW5jZSB3ZSBzaG91bGRcbiAgICAvLyBoYXZlIGFscmVhZHkgdmFsaWRhdGVkIGJlZm9yZSB3ZSBnb3QgdG8gdGhpcyBwb2ludCBhbmQgdmFsaWRhdGluZ1xuICAgIC8vIGJyZWFrcyBjb21waWxpbmcgZGVzdGluYXRpb25zIHdpdGggbmFtZWQgcGF0dGVybiBwYXJhbXMgZnJvbSB0aGUgc291cmNlXG4gICAgLy8gZS5nLiAvc29tZXRoaW5nOmhlbGxvKC4qKSAtPiAvYW5vdGhlci86aGVsbG8gaXMgYnJva2VuIHdpdGggdmFsaWRhdGlvblxuICAgIC8vIHNpbmNlIGNvbXBpbGUgdmFsaWRhdGlvbiBpcyBtZWFudCBmb3IgcmV2ZXJzaW5nIGFuZCBub3QgZm9yIGluc2VydGluZ1xuICAgIC8vIHBhcmFtcyBmcm9tIGEgc2VwYXJhdGUgcGF0aC1yZWdleCBpbnRvIGFub3RoZXJcbiAgICB7IHZhbGlkYXRlOiBmYWxzZSB9XG4gIClcbiAgbGV0IG5ld1VybFxuXG4gIC8vIHVwZGF0ZSBhbnkgcGFyYW1zIGluIHF1ZXJ5IHZhbHVlc1xuICBmb3IgKGNvbnN0IFtrZXksIHN0ck9yQXJyYXldIG9mIE9iamVjdC5lbnRyaWVzKGRlc3RRdWVyeSkpIHtcbiAgICBsZXQgdmFsdWUgPSBBcnJheS5pc0FycmF5KHN0ck9yQXJyYXkpID8gc3RyT3JBcnJheVswXSA6IHN0ck9yQXJyYXlcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIC8vIHRoZSB2YWx1ZSBuZWVkcyB0byBzdGFydCB3aXRoIGEgZm9yd2FyZC1zbGFzaCB0byBiZSBjb21waWxlZFxuICAgICAgLy8gY29ycmVjdGx5XG4gICAgICB2YWx1ZSA9IGAvJHt2YWx1ZX1gXG4gICAgICBjb25zdCBxdWVyeUNvbXBpbGVyID0gcGF0aFRvUmVnZXhwLmNvbXBpbGUodmFsdWUsIHsgdmFsaWRhdGU6IGZhbHNlIH0pXG4gICAgICB2YWx1ZSA9IHF1ZXJ5Q29tcGlsZXIocGFyYW1zKS5zdWJzdHIoMSlcbiAgICB9XG4gICAgZGVzdFF1ZXJ5W2tleV0gPSB2YWx1ZVxuICB9XG5cbiAgLy8gYWRkIHBhdGggcGFyYW1zIHRvIHF1ZXJ5IGlmIGl0J3Mgbm90IGEgcmVkaXJlY3QgYW5kIG5vdFxuICAvLyBhbHJlYWR5IGRlZmluZWQgaW4gZGVzdGluYXRpb24gcXVlcnkgb3IgcGF0aFxuICBjb25zdCBwYXJhbUtleXMgPSBPYmplY3Qua2V5cyhwYXJhbXMpXG5cbiAgaWYgKFxuICAgIGFwcGVuZFBhcmFtc1RvUXVlcnkgJiZcbiAgICAhcGFyYW1LZXlzLnNvbWUoKGtleSkgPT4gZGVzdFBhdGhQYXJhbXMuaW5jbHVkZXMoa2V5KSlcbiAgKSB7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgcGFyYW1LZXlzKSB7XG4gICAgICBpZiAoIShrZXkgaW4gZGVzdFF1ZXJ5KSkge1xuICAgICAgICBkZXN0UXVlcnlba2V5XSA9IHBhcmFtc1trZXldXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc2hvdWxkQWRkQmFzZVBhdGggPSBkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykgJiYgYmFzZVBhdGhcblxuICB0cnkge1xuICAgIG5ld1VybCA9IGAke3Nob3VsZEFkZEJhc2VQYXRoID8gYmFzZVBhdGggOiAnJ30ke2Rlc3RpbmF0aW9uQ29tcGlsZXIoXG4gICAgICBwYXJhbXNcbiAgICApfWBcblxuICAgIGNvbnN0IFtwYXRobmFtZSwgaGFzaF0gPSBuZXdVcmwuc3BsaXQoJyMnKVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5oYXNoID0gYCR7aGFzaCA/ICcjJyA6ICcnfSR7aGFzaCB8fCAnJ31gXG4gICAgZGVsZXRlIHBhcnNlZERlc3RpbmF0aW9uLnNlYXJjaFxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBpZiAoZXJyLm1lc3NhZ2UubWF0Y2goL0V4cGVjdGVkIC4qPyB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5LykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYFRvIHVzZSBhIG11bHRpLW1hdGNoIGluIHRoZSBkZXN0aW5hdGlvbiB5b3UgbXVzdCBhZGQgXFxgKlxcYCBhdCB0aGUgZW5kIG9mIHRoZSBwYXJhbSBuYW1lIHRvIHNpZ25pZnkgaXQgc2hvdWxkIHJlcGVhdC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW52YWxpZC1tdWx0aS1tYXRjaGBcbiAgICAgIClcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH1cblxuICAvLyBRdWVyeSBtZXJnZSBvcmRlciBsb3dlc3QgcHJpb3JpdHkgdG8gaGlnaGVzdFxuICAvLyAxLiBpbml0aWFsIFVSTCBxdWVyeSB2YWx1ZXNcbiAgLy8gMi4gcGF0aCBzZWdtZW50IHZhbHVlc1xuICAvLyAzLiBkZXN0aW5hdGlvbiBzcGVjaWZpZWQgcXVlcnkgdmFsdWVzXG4gIHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5ID0ge1xuICAgIC4uLnF1ZXJ5LFxuICAgIC4uLnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5LFxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBuZXdVcmwsXG4gICAgcGFyc2VkRGVzdGluYXRpb24sXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICBzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtc1xuKTogUGFyc2VkVXJsUXVlcnkge1xuICBjb25zdCBxdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgIGlmICh0eXBlb2YgcXVlcnlba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgOyhxdWVyeVtrZXldIGFzIHN0cmluZ1tdKS5wdXNoKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0gYXMgc3RyaW5nLCB2YWx1ZV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBxdWVyeVxufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHBhcmFtOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoXG4gICAgdHlwZW9mIHBhcmFtID09PSAnc3RyaW5nJyB8fFxuICAgICh0eXBlb2YgcGFyYW0gPT09ICdudW1iZXInICYmICFpc05hTihwYXJhbSkpIHx8XG4gICAgdHlwZW9mIHBhcmFtID09PSAnYm9vbGVhbidcbiAgKSB7XG4gICAgcmV0dXJuIFN0cmluZyhwYXJhbSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJydcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhcbiAgdXJsUXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBjb25zdCByZXN1bHQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcbiAgT2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4gcmVzdWx0LmFwcGVuZChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0oaXRlbSkpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQuc2V0KGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbSh2YWx1ZSkpXG4gICAgfVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24oXG4gIHRhcmdldDogVVJMU2VhcmNoUGFyYW1zLFxuICAuLi5zZWFyY2hQYXJhbXNMaXN0OiBVUkxTZWFyY2hQYXJhbXNbXVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgc2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKChzZWFyY2hQYXJhbXMpID0+IHtcbiAgICBBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goKGtleSkgPT4gdGFyZ2V0LmRlbGV0ZShrZXkpKVxuICAgIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB0YXJnZXQuYXBwZW5kKGtleSwgdmFsdWUpKVxuICB9KVxuICByZXR1cm4gdGFyZ2V0XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHBhdGhNYXRjaCBmcm9tICcuL3BhdGgtbWF0Y2gnXG5pbXBvcnQgcHJlcGFyZURlc3RpbmF0aW9uIGZyb20gJy4vcHJlcGFyZS1kZXN0aW5hdGlvbidcbmltcG9ydCB7IFJld3JpdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvbG9hZC1jdXN0b20tcm91dGVzJ1xuaW1wb3J0IHsgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2ggfSBmcm9tICcuLi8uLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuXG5jb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXIgPSBwYXRoTWF0Y2godHJ1ZSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzb2x2ZVJld3JpdGVzKFxuICBhc1BhdGg6IHN0cmluZyxcbiAgcGFnZXM6IHN0cmluZ1tdLFxuICBiYXNlUGF0aDogc3RyaW5nLFxuICByZXdyaXRlczogUmV3cml0ZVtdLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gIHJlc29sdmVIcmVmOiAocGF0aDogc3RyaW5nKSA9PiBzdHJpbmdcbikge1xuICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGFzUGF0aCkpIHtcbiAgICBmb3IgKGNvbnN0IHJld3JpdGUgb2YgcmV3cml0ZXMpIHtcbiAgICAgIGNvbnN0IG1hdGNoZXIgPSBjdXN0b21Sb3V0ZU1hdGNoZXIocmV3cml0ZS5zb3VyY2UpXG4gICAgICBjb25zdCBwYXJhbXMgPSBtYXRjaGVyKGFzUGF0aClcblxuICAgICAgaWYgKHBhcmFtcykge1xuICAgICAgICBpZiAoIXJld3JpdGUuZGVzdGluYXRpb24pIHtcbiAgICAgICAgICAvLyB0aGlzIGlzIGEgcHJveGllZCByZXdyaXRlIHdoaWNoIGlzbid0IGhhbmRsZWQgb24gdGhlIGNsaWVudFxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGVzdFJlcyA9IHByZXBhcmVEZXN0aW5hdGlvbihcbiAgICAgICAgICByZXdyaXRlLmRlc3RpbmF0aW9uLFxuICAgICAgICAgIHBhcmFtcyxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICB0cnVlLFxuICAgICAgICAgIHJld3JpdGUuYmFzZVBhdGggPT09IGZhbHNlID8gJycgOiBiYXNlUGF0aFxuICAgICAgICApXG4gICAgICAgIGFzUGF0aCA9IGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucXVlcnkpXG5cbiAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGFzUGF0aCkpKSB7XG4gICAgICAgICAgLy8gY2hlY2sgaWYgd2Ugbm93IG1hdGNoIGEgcGFnZSBhcyB0aGlzIG1lYW5zIHdlIGFyZSBkb25lXG4gICAgICAgICAgLy8gcmVzb2x2aW5nIHRoZSByZXdyaXRlc1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cblxuICAgICAgICAvLyBjaGVjayBpZiB3ZSBtYXRjaCBhIGR5bmFtaWMtcm91dGUsIGlmIHNvIHdlIGJyZWFrIHRoZSByZXdyaXRlcyBjaGFpblxuICAgICAgICBjb25zdCByZXNvbHZlZEhyZWYgPSByZXNvbHZlSHJlZihhc1BhdGgpXG5cbiAgICAgICAgaWYgKHJlc29sdmVkSHJlZiAhPT0gYXNQYXRoICYmIHBhZ2VzLmluY2x1ZGVzKHJlc29sdmVkSHJlZikpIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBhc1BhdGhcbn1cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiaW50ZXJmYWNlIEdyb3VwIHtcbiAgcG9zOiBudW1iZXJcbiAgcmVwZWF0OiBib29sZWFuXG4gIG9wdGlvbmFsOiBib29sZWFuXG59XG5cbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3B0aW9uYWwgPSBwYXJhbS5zdGFydHNXaXRoKCdbJykgJiYgcGFyYW0uZW5kc1dpdGgoJ10nKVxuICBpZiAob3B0aW9uYWwpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDEsIC0xKVxuICB9XG4gIGNvbnN0IHJlcGVhdCA9IHBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpXG4gIGlmIChyZXBlYXQpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDMpXG4gIH1cbiAgcmV0dXJuIHsga2V5OiBwYXJhbSwgcmVwZWF0LCBvcHRpb25hbCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgcm91dGVLZXlzPzogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9XG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9XG59IHtcbiAgY29uc3Qgc2VnbWVudHMgPSAobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuICAgIC5zbGljZSgxKVxuICAgIC5zcGxpdCgnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgZ3JvdXBzW2tleV0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQsIG9wdGlvbmFsIH1cbiAgICAgICAgcmV0dXJuIHJlcGVhdCA/IChvcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJylcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgIGxldCByb3V0ZUtleUNoYXJMZW5ndGggPSAxXG5cbiAgICAvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICAgY29uc3QgZ2V0U2FmZVJvdXRlS2V5ID0gKCkgPT4ge1xuICAgICAgbGV0IHJvdXRlS2V5ID0gJydcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZUtleUNoYXJMZW5ndGg7IGkrKykge1xuICAgICAgICByb3V0ZUtleSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpXG4gICAgICAgIHJvdXRlS2V5Q2hhckNvZGUrK1xuXG4gICAgICAgIGlmIChyb3V0ZUtleUNoYXJDb2RlID4gMTIyKSB7XG4gICAgICAgICAgcm91dGVLZXlDaGFyTGVuZ3RoKytcbiAgICAgICAgICByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlS2V5XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVLZXlzOiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuXG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgICAvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4gICAgICAgICAgLy8gdGhlIG5hbWVkIHJlZ2V4XG4gICAgICAgICAgbGV0IGNsZWFuZWRLZXkgPSBrZXkucmVwbGFjZSgvXFxXL2csICcnKVxuICAgICAgICAgIGxldCBpbnZhbGlkS2V5ID0gZmFsc2VcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuICAgICAgICAgIC8vIHNhZmUga2V5XG4gICAgICAgICAgaWYgKGNsZWFuZWRLZXkubGVuZ3RoID09PSAwIHx8IGNsZWFuZWRLZXkubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwgMSkpKSkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW52YWxpZEtleSkge1xuICAgICAgICAgICAgY2xlYW5lZEtleSA9IGdldFNhZmVSb3V0ZUtleSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVLZXlzW2NsZWFuZWRLZXldID0ga2V5XG4gICAgICAgICAgcmV0dXJuIHJlcGVhdFxuICAgICAgICAgICAgPyBvcHRpb25hbFxuICAgICAgICAgICAgICA/IGAoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gXG4gICAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgXG4gICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgICBncm91cHMsXG4gICAgICByb3V0ZUtleXMsXG4gICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICBncm91cHMsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gJy4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJ0BuZXh0L2VudidcbmltcG9ydCB7IEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG4vKipcbiAqIFdlYiB2aXRhbHMgcHJvdmlkZWQgdG8gX2FwcC5yZXBvcnRXZWJWaXRhbHMgYnkgQ29yZSBXZWIgVml0YWxzIHBsdWdpbiBkZXZlbG9wZWQgYnkgR29vZ2xlIENocm9tZSB0ZWFtLlxuICogaHR0cHM6Ly9uZXh0anMub3JnL2Jsb2cvbmV4dC05LTQjaW50ZWdyYXRlZC13ZWItdml0YWxzLXJlcG9ydGluZ1xuICovXG5leHBvcnQgdHlwZSBOZXh0V2ViVml0YWxzTWV0cmljID0ge1xuICBpZDogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHN0YXJ0VGltZTogbnVtYmVyXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBIZWFkRW50cnkgPSBbc3RyaW5nLCB7IFtrZXk6IHN0cmluZ106IGFueSB9XVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiBzdHJpbmdbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbiAgaGVhZDogSGVhZEVudHJ5W11cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBkb2NDb21wb25lbnRzUmVuZGVyZWQ6IHtcbiAgICBIdG1sPzogYm9vbGVhblxuICAgIE1haW4/OiBib29sZWFuXG4gICAgSGVhZD86IGJvb2xlYW5cbiAgICBOZXh0U2NyaXB0PzogYm9vbGVhblxuICB9XG4gIGJ1aWxkTWFuaWZlc3Q6IEJ1aWxkTWFuaWZlc3RcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkeW5hbWljSW1wb3J0czogTWFuaWZlc3RJdGVtW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxuICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZzogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxuXG4gIHByZXZpZXc/OiBib29sZWFuXG4gIC8qKlxuICAgKiBQcmV2aWV3IGRhdGEgc2V0IG9uIHRoZSByZXF1ZXN0LCBpZiBhbnlcbiAgICogKi9cbiAgcHJldmlld0RhdGE/OiBhbnlcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdCh1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdChzdGF0dXM6IG51bWJlciwgdXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsOiBVcmxPYmplY3QpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VXJsKHVybClcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IE1vZGFsLCBCdXR0b24gfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuaW1wb3J0IFByb2ZpbGVQcml2ZSBmcm9tIFwiLi4vaW5kZXhcIjtcclxuaW1wb3J0IEJhbm5lciBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9wcm9maWxlL0Jhbm5lclwiO1xyXG5pbXBvcnQgVGFicyBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9wcm9maWxlL1RhYnNcIjtcclxuaW1wb3J0IFN0b3JpZXMgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvcHJvZmlsZS9TdG9yaWVzXCI7XHJcbmltcG9ydCBDaGFyYWN0ZXJzIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL3Byb2ZpbGUvQ2hhcmFjdGVyc1wiO1xyXG5pbXBvcnQgRm9sbG93ZXJzIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL3Byb2ZpbGUvRm9sbG93ZXJzXCI7XHJcbmltcG9ydCBMb2NhdGlvbnMgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvcHJvZmlsZS9Mb2NhdGlvbnNcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgZ2V0UHJvZmlsZSxcclxuICBmb2xsb3dVc2VyLFxyXG4gIHVuZm9sbG93VXNlcixcclxuICBnZXRJc0ZvbGxvd2luZyxcclxufSBmcm9tIFwiLi4vLi4vLi4vcmVkdXgvYWN0aW9ucy91c2VyQWN0aW9uc1wiO1xyXG5pbXBvcnQge1xyXG4gIGdldFVzZXJTdG9yaWVzLFxyXG4gIGdldEZhdm9yaXRlU3RvcmllcyxcclxuICBnZXRVc2VyTG9jYXRpb25zLFxyXG59IGZyb20gXCIuLi8uLi8uLi9yZWR1eC9hY3Rpb25zL3N0b3JpZXNBY3Rpb25zXCI7XHJcbmltcG9ydCB7XHJcbiAgZ2V0VXNlckNoYXJhY3RlcnMsXHJcbiAgZ2V0RmF2b3JpdGVDaGFyYWN0ZXJzLFxyXG59IGZyb20gXCIuLi8uLi8uLi9yZWR1eC9hY3Rpb25zL2NoYXJhY3RlcnNBY3Rpb25zXCI7XHJcbmltcG9ydCB7XHJcbiAgZ2V0RmF2b3JpdGVBdXRob3JzLFxyXG4gIGdldEZvbGxvd2VycyxcclxufSBmcm9tIFwiLi4vLi4vLi4vcmVkdXgvYWN0aW9ucy91c2VyQWN0aW9uc1wiO1xyXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSBcIi4uLy4uLy4uL2hvb2tzL3VzZXJIb29rc1wiO1xyXG5pbXBvcnQgTG9hZGluZ1NjcmVlbiBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9ob2MvTG9hZGluZ1NjcmVlblwiO1xyXG5pbXBvcnQgUmVkaXJlY3RDb21wIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2hvYy9SZWRpcmVjdENvbXBcIjtcclxuXHJcbmNvbnN0IFByb2ZpbGUgPSAoe1xyXG4gIGdldFByb2ZpbGUsXHJcbiAgcHJvZmlsZSxcclxuICBzdG9yaWVzLFxyXG4gIGxvY2F0aW9ucyxcclxuICBnZXRVc2VyU3RvcmllcyxcclxuICBmb2xsb3dVc2VyLFxyXG4gIHVuZm9sbG93VXNlcixcclxuICBnZXRJc0ZvbGxvd2luZyxcclxuICBnZXRVc2VyQ2hhcmFjdGVycyxcclxuICBnZXRGYXZvcml0ZUF1dGhvcnMsXHJcbiAgZ2V0RmF2b3JpdGVDaGFyYWN0ZXJzLFxyXG4gIGdldEZhdm9yaXRlU3RvcmllcyxcclxuICBnZXRVc2VyTG9jYXRpb25zLFxyXG4gIGdldEZvbGxvd2VycyxcclxuICBjaGFyYWN0ZXJzLFxyXG4gIGlzRm9sbG93aW5nLFxyXG4gIGZhdkF1dGhvcnMsXHJcbiAgZm9sbG93ZXJzLFxyXG4gIGZhdkNoYXJhY3RlcnMsXHJcbiAgZmF2U3RvcmllcyxcclxuICBsb2FkaW5nLFxyXG59KSA9PiB7XHJcbiAgY29uc3QgW3RhYnNdID0gdXNlU3RhdGUoW1xyXG4gICAgXCJzdG9yaWVzXCIsXHJcbiAgICBcImNoYXJhY3RlcnNcIixcclxuICAgIFwibG9jYXRpb25zXCIsXHJcbiAgICBcImZhdm9yaXRlcyBzdG9yaWVzXCIsXHJcbiAgICBcImZhdm9yaXRlcyBjaGFyYWN0ZXJzXCIsXHJcbiAgICBcImZvbGxvd2Vyc1wiLFxyXG4gICAgXCJmb2xsb3dpbmdzXCIsXHJcbiAgXSk7XHJcbiAgY29uc3QgW2N1cnJlbnRUYWIsIHNldEN1cnJlbnRUYWJdID0gdXNlU3RhdGUoXCJzdG9yaWVzXCIpO1xyXG4gIGNvbnN0IFtmYXZUYWIsIHNldEZhdlRhYl0gPSB1c2VTdGF0ZShcImZhdmF1dGhvcnNcIik7XHJcbiAgY29uc3QgW2Zhdm9yaXRlU3Rvcmllcywgc2V0RmF2b3JpdGVTdG9yaWVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbZmF2b3JpdGVDaGFyYWN0ZXJzLCBzZXRGYXZvcml0ZUNoYXJhY3RlcnNdID0gdXNlU3RhdGUoZmF2Q2hhcmFjdGVycyk7XHJcbiAgY29uc3QgY2hhbmdlVGFiID0gKHRhYikgPT4gc2V0Q3VycmVudFRhYih0YWIpO1xyXG5cclxuICBjb25zdCBhdXRoID0gdXNlQXV0aCgpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0UHJvZmlsZShyb3V0ZXIucXVlcnkuaWQpO1xyXG5cclxuICAgIGdldFVzZXJTdG9yaWVzKHJvdXRlci5xdWVyeS5pZCwgXCJwcm9maWxlXCIpO1xyXG4gICAgZ2V0VXNlckNoYXJhY3RlcnMocm91dGVyLnF1ZXJ5LmlkKTtcclxuICAgIGdldEZhdm9yaXRlQXV0aG9ycyhyb3V0ZXIucXVlcnkuaWQpO1xyXG4gICAgZ2V0Rm9sbG93ZXJzKHJvdXRlci5xdWVyeS5pZCk7XHJcbiAgICBnZXRGYXZvcml0ZUNoYXJhY3RlcnMocm91dGVyLnF1ZXJ5LmlkKTtcclxuICAgIGdldEZhdm9yaXRlU3Rvcmllcyhyb3V0ZXIucXVlcnkuaWQpO1xyXG4gICAgZ2V0VXNlckxvY2F0aW9ucyhyb3V0ZXIucXVlcnkuaWQpO1xyXG4gIH0sIFtyb3V0ZXIucXVlcnkuaWRdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChhdXRoLnVzZXIpIHtcclxuICAgICAgZ2V0SXNGb2xsb3dpbmcocm91dGVyLnF1ZXJ5LmlkKTtcclxuICAgIH1cclxuICB9LCBbYXV0aF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0RmF2b3JpdGVTdG9yaWVzKFxyXG4gICAgICBmYXZTdG9yaWVzLmZpbHRlcigocykgPT4gcy5wdWJsaWMgfHwgcy5hdXRob3JJZCA9PT0gYXV0aC51c2VyLnVpZClcclxuICAgICk7XHJcbiAgICBzZXRGYXZvcml0ZUNoYXJhY3RlcnMoXHJcbiAgICAgIGZhdkNoYXJhY3RlcnMuZmlsdGVyKChzKSA9PiBzLnB1YmxpYyB8fCBzLmF1dGhvcklkID09PSBhdXRoLnVzZXIudWlkKVxyXG4gICAgKTtcclxuICB9LCBbYXV0aCwgZmF2U3RvcmllcywgZmF2Q2hhcmFjdGVyc10pO1xyXG5cclxuICBjb25zdCBjaGFuZ2VGYXZUYWIgPSAodGFiKSA9PiBzZXRGYXZUYWIodGFiKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZVwiPlxyXG4gICAgICA8TG9hZGluZ1NjcmVlbiBsb2FkaW5nPXthdXRoLmlzTG9hZGluZ30+XHJcbiAgICAgICAge2F1dGgudXNlciAmJiBhdXRoLnVzZXIudWlkID09PSByb3V0ZXIucXVlcnkuaWQgPyAoXHJcbiAgICAgICAgICA8UHJvZmlsZVByaXZlIC8+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxCYW5uZXJcclxuICAgICAgICAgICAgICBjb250ZXh0PVwicHVibGljXCJcclxuICAgICAgICAgICAgICBwcm9maWxlPXtwcm9maWxlfVxyXG4gICAgICAgICAgICAgIGZhdkF1dGhvcnM9e2ZhdkF1dGhvcnN9XHJcbiAgICAgICAgICAgICAgZm9sbG93ZXJzPXtmb2xsb3dlcnN9XHJcbiAgICAgICAgICAgICAgY2hhbmdlRmF2VGFiPXtjaGFuZ2VGYXZUYWJ9XHJcbiAgICAgICAgICAgICAgZmF2VGFiPXtmYXZUYWJ9XHJcbiAgICAgICAgICAgICAgc2V0Q3VycmVudFRhYj17c2V0Q3VycmVudFRhYn1cclxuICAgICAgICAgICAgICBpc0ZvbGxvd2luZz17aXNGb2xsb3dpbmd9XHJcbiAgICAgICAgICAgICAgZm9sbG93VXNlcj17Zm9sbG93VXNlcn1cclxuICAgICAgICAgICAgICB1bmZvbGxvd1VzZXI9e3VuZm9sbG93VXNlcn1cclxuICAgICAgICAgICAgICBhdXRoPXthdXRofVxyXG4gICAgICAgICAgICAgIGlkPXtyb3V0ZXIucXVlcnkuaWR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInByb2ZpbGUtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgIDxUYWJzIGN1cnJlbnRUYWI9e2N1cnJlbnRUYWJ9IHRhYnM9e3RhYnN9IGNoYW5nZVRhYj17Y2hhbmdlVGFifSAvPlxyXG4gICAgICAgICAgICAgIHtjdXJyZW50VGFiID09PSBcInN0b3JpZXNcIiAmJiAoXHJcbiAgICAgICAgICAgICAgICA8U3Rvcmllc1xyXG4gICAgICAgICAgICAgICAgICBhdXRoPXthdXRofVxyXG4gICAgICAgICAgICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxyXG4gICAgICAgICAgICAgICAgICB0eXBlPXtcInNob3dcIn1cclxuICAgICAgICAgICAgICAgICAgc3Rvcmllcz17c3Rvcmllc31cclxuICAgICAgICAgICAgICAgICAgdHlwZT17XCJwcml2YXRlUHJvZmlsZVwifVxyXG4gICAgICAgICAgICAgICAgICBjb250ZXh0PVwicHVibGljXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICB7Y3VycmVudFRhYiA9PT0gXCJjaGFyYWN0ZXJzXCIgJiYgKFxyXG4gICAgICAgICAgICAgICAgPENoYXJhY3RlcnMgY29udGV4dD1cInB1YmxpY1wiIGNoYXJhY3RlcnM9e2NoYXJhY3RlcnN9IC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICB7Y3VycmVudFRhYiA9PT0gXCJsb2NhdGlvbnNcIiAmJiAoXHJcbiAgICAgICAgICAgICAgICA8TG9jYXRpb25zXHJcbiAgICAgICAgICAgICAgICAgIGNvbnRleHQ9XCJwdWJsaWNcIlxyXG4gICAgICAgICAgICAgICAgICBsb2NhdGlvbnM9e2xvY2F0aW9uc31cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInByb2ZpbGVcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIHtjdXJyZW50VGFiID09PSBcImZhdm9yaXRlcyBzdG9yaWVzXCIgJiYgKFxyXG4gICAgICAgICAgICAgICAgPFN0b3JpZXNcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cImZhdm9yaXRlc1wiXHJcbiAgICAgICAgICAgICAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICAgIHN0b3JpZXM9e2Zhdm9yaXRlU3Rvcmllc31cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICB7Y3VycmVudFRhYiA9PT0gXCJmYXZvcml0ZXMgY2hhcmFjdGVyc1wiICYmIChcclxuICAgICAgICAgICAgICAgIDxDaGFyYWN0ZXJzIHR5cGU9XCJmYXZvcml0ZXNcIiBjaGFyYWN0ZXJzPXtmYXZvcml0ZUNoYXJhY3RlcnN9IC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICB7Y3VycmVudFRhYiA9PT0gXCJmb2xsb3dlcnNcIiAmJiAoXHJcbiAgICAgICAgICAgICAgICA8Rm9sbG93ZXJzXHJcbiAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRm9sbG93ZXJzXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT17XCJmb2xsb3dlcnNcIn1cclxuICAgICAgICAgICAgICAgICAgbGc9ezR9XHJcbiAgICAgICAgICAgICAgICAgIG1kPXs2fVxyXG4gICAgICAgICAgICAgICAgICBzbT17OH1cclxuICAgICAgICAgICAgICAgICAgeHM9ezEyfVxyXG4gICAgICAgICAgICAgICAgICBpdGVtcz17Zm9sbG93ZXJzLmF1dGhvcnN9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAge2N1cnJlbnRUYWIgPT09IFwiZm9sbG93aW5nc1wiICYmIChcclxuICAgICAgICAgICAgICAgIDxGb2xsb3dlcnNcclxuICAgICAgICAgICAgICAgICAgdGl0bGU9XCJGb2xsb3dpbmdzXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT17XCJmb2xsb3dpbmdzXCJ9XHJcbiAgICAgICAgICAgICAgICAgIGxnPXs0fVxyXG4gICAgICAgICAgICAgICAgICBtZD17Nn1cclxuICAgICAgICAgICAgICAgICAgc209ezh9XHJcbiAgICAgICAgICAgICAgICAgIHhzPXsxMn1cclxuICAgICAgICAgICAgICAgICAgaXRlbXM9e2ZhdkF1dGhvcnMuYXV0aG9yc31cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9Mb2FkaW5nU2NyZWVuPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgb3duUHJvcHMpID0+ICh7XHJcbiAgcHJvZmlsZTogc3RhdGUuYXV0aC5wcm9maWxlLFxyXG4gIHN0b3JpZXM6IHN0YXRlLnN0b3JpZXMudXNlclN0b3JpZXMsXHJcbiAgY2hhcmFjdGVyczogc3RhdGUuY2hhcmFjdGVycy51c2VyQ2hhcmFjdGVycyxcclxuICBmYXZBdXRob3JzOiBzdGF0ZS5hdXRoLmZhdkF1dGhvcnMsXHJcbiAgZm9sbG93ZXJzOiBzdGF0ZS5hdXRoLmZvbGxvd2VycyxcclxuICBmYXZDaGFyYWN0ZXJzOiBzdGF0ZS5jaGFyYWN0ZXJzLmZhdkNoYXJhY3RlcnMsXHJcbiAgZmF2U3Rvcmllczogc3RhdGUuc3Rvcmllcy5mYXZTdG9yaWVzLFxyXG4gIGxvY2F0aW9uczogc3RhdGUuc3Rvcmllcy51c2VyTG9jYXRpb25zLFxyXG4gIGxvYWRpbmc6IHN0YXRlLnN0b3JpZXMubG9hZGluZyxcclxuICBpc0ZvbGxvd2luZzogc3RhdGUuYXV0aC5pc0ZvbGxvd2luZyxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywge1xyXG4gIGdldFByb2ZpbGUsXHJcbiAgZ2V0VXNlclN0b3JpZXMsXHJcbiAgZ2V0VXNlckNoYXJhY3RlcnMsXHJcbiAgZ2V0RmF2b3JpdGVBdXRob3JzLFxyXG4gIGdldEZvbGxvd2VycyxcclxuICBnZXRGYXZvcml0ZUNoYXJhY3RlcnMsXHJcbiAgZ2V0RmF2b3JpdGVTdG9yaWVzLFxyXG4gIGdldFVzZXJMb2NhdGlvbnMsXHJcbiAgZm9sbG93VXNlcixcclxuICB1bmZvbGxvd1VzZXIsXHJcbiAgZ2V0SXNGb2xsb3dpbmcsXHJcbn0pKFByb2ZpbGUpO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IE1vZGFsLCBCdXR0b24gfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuaW1wb3J0IEJhbm5lciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9wcm9maWxlL0Jhbm5lclwiO1xyXG5pbXBvcnQgVGFicyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9wcm9maWxlL1RhYnNcIjtcclxuaW1wb3J0IFN0b3JpZXMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcHJvZmlsZS9TdG9yaWVzXCI7XHJcbmltcG9ydCBDaGFyYWN0ZXJzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3Byb2ZpbGUvQ2hhcmFjdGVyc1wiO1xyXG5pbXBvcnQgRm9sbG93ZXJzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3Byb2ZpbGUvRm9sbG93ZXJzXCI7XHJcbmltcG9ydCBMb2NhdGlvbnMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcHJvZmlsZS9Mb2NhdGlvbnNcIjtcclxuaW1wb3J0IFNldHRpbmdzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3Byb2ZpbGUvU2V0dGluZ3NcIjtcclxuXHJcbmltcG9ydCB7IGdldFByb2ZpbGUgfSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9ucy91c2VyQWN0aW9uc1wiO1xyXG5pbXBvcnQge1xyXG4gIGdldFVzZXJTdG9yaWVzLFxyXG4gIGdldEZhdm9yaXRlU3RvcmllcyxcclxuICBnZXRVc2VyTG9jYXRpb25zLFxyXG59IGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25zL3N0b3JpZXNBY3Rpb25zXCI7XHJcbmltcG9ydCB7XHJcbiAgZ2V0VXNlckNoYXJhY3RlcnMsXHJcbiAgZ2V0RmF2b3JpdGVDaGFyYWN0ZXJzLFxyXG59IGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25zL2NoYXJhY3RlcnNBY3Rpb25zXCI7XHJcbmltcG9ydCB7XHJcbiAgZ2V0RmF2b3JpdGVBdXRob3JzLFxyXG4gIGdldEZvbGxvd2VycyxcclxufSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9ucy91c2VyQWN0aW9uc1wiO1xyXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSBcIi4uLy4uL2hvb2tzL3VzZXJIb29rc1wiO1xyXG5pbXBvcnQgTG9hZGluZ1NjcmVlbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9ob2MvTG9hZGluZ1NjcmVlblwiO1xyXG5pbXBvcnQgUmVkaXJlY3RDb21wIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2hvYy9SZWRpcmVjdENvbXBcIjtcclxuXHJcbmNvbnN0IFByb2ZpbGUgPSAoe1xyXG4gIGdldFByb2ZpbGUsXHJcbiAgcHJvZmlsZSxcclxuICBzdG9yaWVzLFxyXG4gIGxvY2F0aW9ucyxcclxuICBnZXRVc2VyU3RvcmllcyxcclxuICBnZXRVc2VyQ2hhcmFjdGVycyxcclxuICBnZXRGYXZvcml0ZUF1dGhvcnMsXHJcbiAgZ2V0RmF2b3JpdGVDaGFyYWN0ZXJzLFxyXG4gIGdldEZhdm9yaXRlU3RvcmllcyxcclxuICBnZXRVc2VyTG9jYXRpb25zLFxyXG4gIGdldEZvbGxvd2VycyxcclxuICBjaGFyYWN0ZXJzLFxyXG4gIGZhdkF1dGhvcnMsXHJcbiAgZm9sbG93ZXJzLFxyXG4gIGZhdkNoYXJhY3RlcnMsXHJcbiAgZmF2U3RvcmllcyxcclxuICBsb2FkaW5nLFxyXG59KSA9PiB7XHJcbiAgY29uc3QgW3RhYnNdID0gdXNlU3RhdGUoW1xyXG4gICAgXCJzdG9yaWVzXCIsXHJcbiAgICBcImNoYXJhY3RlcnNcIixcclxuICAgIFwibG9jYXRpb25zXCIsXHJcbiAgICBcImZhdm9yaXRlcyBzdG9yaWVzXCIsXHJcbiAgICBcImZhdm9yaXRlcyBjaGFyYWN0ZXJzXCIsXHJcbiAgICBcImZvbGxvd2Vyc1wiLFxyXG4gICAgXCJmb2xsb3dpbmdzXCIsXHJcbiAgXSk7XHJcbiAgY29uc3QgW3NldHRpbmdzLCBvcGVuU2V0dGluZ3NdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtjdXJyZW50VGFiLCBzZXRDdXJyZW50VGFiXSA9IHVzZVN0YXRlKFwic3Rvcmllc1wiKTtcclxuICBjb25zdCBbZmF2VGFiLCBzZXRGYXZUYWJdID0gdXNlU3RhdGUoXCJmYXZhdXRob3JzXCIpO1xyXG4gIGNvbnN0IFtmYXZvcml0ZVN0b3JpZXMsIHNldEZhdm9yaXRlU3Rvcmllc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2Zhdm9yaXRlQ2hhcmFjdGVycywgc2V0RmF2b3JpdGVDaGFyYWN0ZXJzXSA9IHVzZVN0YXRlKGZhdkNoYXJhY3RlcnMpO1xyXG4gIGNvbnN0IGNoYW5nZVRhYiA9ICh0YWIpID0+IHNldEN1cnJlbnRUYWIodGFiKTtcclxuXHJcbiAgY29uc3QgYXV0aCA9IHVzZUF1dGgoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChhdXRoLnVzZXIpIHtcclxuICAgICAgZ2V0UHJvZmlsZSgpO1xyXG4gICAgICBnZXRVc2VyU3RvcmllcyhudWxsLCBcInByb2ZpbGVcIik7XHJcbiAgICAgIGdldFVzZXJDaGFyYWN0ZXJzKCk7XHJcbiAgICAgIGdldEZhdm9yaXRlQXV0aG9ycygpO1xyXG4gICAgICBnZXRGb2xsb3dlcnMoKTtcclxuICAgICAgZ2V0RmF2b3JpdGVDaGFyYWN0ZXJzKCk7XHJcbiAgICAgIGdldEZhdm9yaXRlU3RvcmllcygpO1xyXG4gICAgICBnZXRVc2VyTG9jYXRpb25zKCk7XHJcbiAgICB9XHJcbiAgfSwgW2F1dGhdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldEZhdm9yaXRlU3RvcmllcyhcclxuICAgICAgZmF2U3Rvcmllcy5maWx0ZXIoKHMpID0+IHMucHVibGljIHx8IHMuYXV0aG9ySWQgPT09IGF1dGgudXNlci51aWQpXHJcbiAgICApO1xyXG4gICAgc2V0RmF2b3JpdGVDaGFyYWN0ZXJzKFxyXG4gICAgICBmYXZDaGFyYWN0ZXJzLmZpbHRlcigocykgPT4gcy5wdWJsaWMgfHwgcy5hdXRob3JJZCA9PT0gYXV0aC51c2VyLnVpZClcclxuICAgICk7XHJcbiAgfSwgW2F1dGgsIGZhdlN0b3JpZXMsIGZhdkNoYXJhY3RlcnNdKTtcclxuXHJcbiAgY29uc3QgY2hhbmdlRmF2VGFiID0gKHRhYikgPT4gc2V0RmF2VGFiKHRhYik7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGVcIj5cclxuICAgICAgPExvYWRpbmdTY3JlZW4gbG9hZGluZz17YXV0aC5pc0xvYWRpbmd9PlxyXG4gICAgICAgIDxSZWRpcmVjdENvbXAgY29uZGl0aW9uPXthdXRoLnVzZXJ9IHR5cGU9XCJyZWRpcmVjdFwiPlxyXG4gICAgICAgICAgPEJhbm5lclxyXG4gICAgICAgICAgICBjb250ZXh0PVwicHJpdmF0ZVwiXHJcbiAgICAgICAgICAgIHByb2ZpbGU9e3Byb2ZpbGV9XHJcbiAgICAgICAgICAgIG9wZW5TZXR0aW5ncz17b3BlblNldHRpbmdzfVxyXG4gICAgICAgICAgICBmYXZBdXRob3JzPXtmYXZBdXRob3JzfVxyXG4gICAgICAgICAgICBmb2xsb3dlcnM9e2ZvbGxvd2Vyc31cclxuICAgICAgICAgICAgY2hhbmdlRmF2VGFiPXtjaGFuZ2VGYXZUYWJ9XHJcbiAgICAgICAgICAgIGZhdlRhYj17ZmF2VGFifVxyXG4gICAgICAgICAgICBzZXRDdXJyZW50VGFiPXtzZXRDdXJyZW50VGFifVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInByb2ZpbGUtY29udGVudFwiPlxyXG4gICAgICAgICAgICA8VGFicyBjdXJyZW50VGFiPXtjdXJyZW50VGFifSB0YWJzPXt0YWJzfSBjaGFuZ2VUYWI9e2NoYW5nZVRhYn0gLz5cclxuICAgICAgICAgICAge2N1cnJlbnRUYWIgPT09IFwic3Rvcmllc1wiICYmIChcclxuICAgICAgICAgICAgICA8U3Rvcmllc1xyXG4gICAgICAgICAgICAgICAgYXV0aD17YXV0aH1cclxuICAgICAgICAgICAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICB0eXBlPXtcInNob3dcIn1cclxuICAgICAgICAgICAgICAgIHN0b3JpZXM9e3N0b3JpZXN9XHJcbiAgICAgICAgICAgICAgICB0eXBlPXtcInByaXZhdGVQcm9maWxlXCJ9XHJcbiAgICAgICAgICAgICAgICBjb250ZXh0PVwicHJpdmF0ZVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAge2N1cnJlbnRUYWIgPT09IFwiY2hhcmFjdGVyc1wiICYmIChcclxuICAgICAgICAgICAgICA8Q2hhcmFjdGVycyBjb250ZXh0PVwicHJpdmF0ZVwiIGNoYXJhY3RlcnM9e2NoYXJhY3RlcnN9IC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHtjdXJyZW50VGFiID09PSBcImxvY2F0aW9uc1wiICYmIChcclxuICAgICAgICAgICAgICA8TG9jYXRpb25zXHJcbiAgICAgICAgICAgICAgICBjb250ZXh0PVwicHJpdmF0ZVwiXHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbnM9e2xvY2F0aW9uc31cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJwcm9maWxlXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7Y3VycmVudFRhYiA9PT0gXCJmYXZvcml0ZXMgc3Rvcmllc1wiICYmIChcclxuICAgICAgICAgICAgICA8U3Rvcmllc1xyXG4gICAgICAgICAgICAgICAgbG9hZGluZz17bG9hZGluZ31cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJmYXZvcml0ZXNcIlxyXG4gICAgICAgICAgICAgICAgc3Rvcmllcz17ZmF2b3JpdGVTdG9yaWVzfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHtjdXJyZW50VGFiID09PSBcImZhdm9yaXRlcyBjaGFyYWN0ZXJzXCIgJiYgKFxyXG4gICAgICAgICAgICAgIDxDaGFyYWN0ZXJzIHR5cGU9XCJmYXZvcml0ZXNcIiBjaGFyYWN0ZXJzPXtmYXZvcml0ZUNoYXJhY3RlcnN9IC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHtjdXJyZW50VGFiID09PSBcImZvbGxvd2Vyc1wiICYmIChcclxuICAgICAgICAgICAgICA8Rm9sbG93ZXJzXHJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIkZvbGxvd2Vyc1wiXHJcbiAgICAgICAgICAgICAgICB0eXBlPXtcImZvbGxvd2Vyc1wifVxyXG4gICAgICAgICAgICAgICAgbGc9ezR9XHJcbiAgICAgICAgICAgICAgICBtZD17Nn1cclxuICAgICAgICAgICAgICAgIHNtPXs4fVxyXG4gICAgICAgICAgICAgICAgeHM9ezEyfVxyXG4gICAgICAgICAgICAgICAgaXRlbXM9e2ZvbGxvd2Vycy5hdXRob3JzfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHtjdXJyZW50VGFiID09PSBcImZvbGxvd2luZ3NcIiAmJiAoXHJcbiAgICAgICAgICAgICAgPEZvbGxvd2Vyc1xyXG4gICAgICAgICAgICAgICAgdGl0bGU9XCJGb2xsb3dpbmdzXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9e1wiZm9sbG93aW5nc1wifVxyXG4gICAgICAgICAgICAgICAgbGc9ezR9XHJcbiAgICAgICAgICAgICAgICBtZD17Nn1cclxuICAgICAgICAgICAgICAgIHNtPXs4fVxyXG4gICAgICAgICAgICAgICAgeHM9ezEyfVxyXG4gICAgICAgICAgICAgICAgaXRlbXM9e2ZhdkF1dGhvcnMuYXV0aG9yc31cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgIHRpdGxlPVwiU2V0dGluZ3NcIlxyXG4gICAgICAgICAgICB2aXNpYmxlPXtzZXR0aW5nc31cclxuICAgICAgICAgICAgb25Paz17KCkgPT4gb3BlblNldHRpbmdzKGZhbHNlKX1cclxuICAgICAgICAgICAgb25DYW5jZWw9eygpID0+IG9wZW5TZXR0aW5ncyhmYWxzZSl9XHJcbiAgICAgICAgICAgIGZvb3Rlcj17W1xyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIGtleT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvcGVuU2V0dGluZ3MoZmFsc2UpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFN1Ym1pdFxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPixcclxuICAgICAgICAgICAgXX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPFNldHRpbmdzIHVzZXI9e2F1dGgudXNlcn0gLz5cclxuICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgPC9SZWRpcmVjdENvbXA+XHJcbiAgICAgIDwvTG9hZGluZ1NjcmVlbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIG93blByb3BzKSA9PiAoe1xyXG4gIHByb2ZpbGU6IHN0YXRlLmF1dGgucHJvZmlsZSxcclxuICBzdG9yaWVzOiBzdGF0ZS5zdG9yaWVzLnVzZXJTdG9yaWVzLFxyXG4gIGNoYXJhY3RlcnM6IHN0YXRlLmNoYXJhY3RlcnMudXNlckNoYXJhY3RlcnMsXHJcbiAgZmF2QXV0aG9yczogc3RhdGUuYXV0aC5mYXZBdXRob3JzLFxyXG4gIGZvbGxvd2Vyczogc3RhdGUuYXV0aC5mb2xsb3dlcnMsXHJcbiAgZmF2Q2hhcmFjdGVyczogc3RhdGUuY2hhcmFjdGVycy5mYXZDaGFyYWN0ZXJzLFxyXG4gIGZhdlN0b3JpZXM6IHN0YXRlLnN0b3JpZXMuZmF2U3RvcmllcyxcclxuICBsb2NhdGlvbnM6IHN0YXRlLnN0b3JpZXMudXNlckxvY2F0aW9ucyxcclxuICBsb2FkaW5nOiBzdGF0ZS5zdG9yaWVzLmxvYWRpbmcsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHtcclxuICBnZXRQcm9maWxlLFxyXG4gIGdldFVzZXJTdG9yaWVzLFxyXG4gIGdldFVzZXJDaGFyYWN0ZXJzLFxyXG4gIGdldEZhdm9yaXRlQXV0aG9ycyxcclxuICBnZXRGb2xsb3dlcnMsXHJcbiAgZ2V0RmF2b3JpdGVDaGFyYWN0ZXJzLFxyXG4gIGdldEZhdm9yaXRlU3RvcmllcyxcclxuICBnZXRVc2VyTG9jYXRpb25zLFxyXG59KShQcm9maWxlKTtcclxuIiwiaW1wb3J0IHsgdHlwZXMgfSBmcm9tIFwiLi4vLi4vdXRpbHMvY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IG1lc3NhZ2UgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyBkYiwgYXV0aCwgc3RvcmFnZSB9IGZyb20gXCIuLi9mYkNvbmZpZ1wiO1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlL2FwcFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldENoYXJhY3RlciA9IChpZCwgdHlwZSkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgbGV0IHJlbEFyciA9IFtdO1xyXG4gIGxldCBzdG9yeUFyciA9IFtdO1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzXCIpXHJcbiAgICAuZG9jKGlkKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigoZG9jKSA9PiB7XHJcbiAgICAgIGlmIChkb2MuZXhpc3RzKSB7XHJcbiAgICAgICAgaWYgKHR5cGUgPT09IFwic2hvd1wiKSB7XHJcbiAgICAgICAgICBjb25zdCByZWxhdGl2ZXMgPSBkb2MuZGF0YSgpLnJlbGF0aXZlc0FycjtcclxuICAgICAgICAgIGxldCByZWxRdWVyaWVzID0gW107XHJcbiAgICAgICAgICByZWxhdGl2ZXMuZm9yRWFjaCgocmVsKSA9PiB7XHJcbiAgICAgICAgICAgIHJlbFF1ZXJpZXMucHVzaChkYi5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc1wiKS5kb2MocmVsKS5nZXQoKSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIFByb21pc2UuYWxsKHJlbFF1ZXJpZXMpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICByZXMuZm9yRWFjaCgoY2hhcikgPT5cclxuICAgICAgICAgICAgICByZWxBcnIucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAuLi5jaGFyLmRhdGEoKSxcclxuICAgICAgICAgICAgICAgIGlkOiBjaGFyLmlkLFxyXG4gICAgICAgICAgICAgICAgcmVsYXRpb246IGRvY1xyXG4gICAgICAgICAgICAgICAgICAuZGF0YSgpXHJcbiAgICAgICAgICAgICAgICAgIC5yZWxhdGl2ZXMuZmluZCgoYykgPT4gYy5jaGFyYWN0ZXJfaWQgPT09IGNoYXIuaWQpLnJlbGF0aW9uLFxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBtYWluUXVlcnkgPSBkYlxyXG4gICAgICAgICAgICAgIC5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKVxyXG4gICAgICAgICAgICAgIC53aGVyZShcIm1haW5DaGFyYWN0ZXJzXCIsIFwiYXJyYXktY29udGFpbnNcIiwgaWQpXHJcbiAgICAgICAgICAgICAgLmdldCgpO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc2Vjb25kYXJ5UXVlcnkgPSBkYlxyXG4gICAgICAgICAgICAgIC5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKVxyXG4gICAgICAgICAgICAgIC53aGVyZShcInNlY29uZGFyeUFyclwiLCBcImFycmF5LWNvbnRhaW5zXCIsIGlkKVxyXG4gICAgICAgICAgICAgIC5nZXQoKTtcclxuXHJcbiAgICAgICAgICAgIFByb21pc2UuYWxsKFttYWluUXVlcnksIHNlY29uZGFyeVF1ZXJ5XSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgYWxsU3RvcnkgPSByZXN1bHRbMF0uZG9jcy5jb25jYXQocmVzdWx0WzFdLmRvY3MpO1xyXG4gICAgICAgICAgICAgIGFsbFN0b3J5LmZvckVhY2goKHN0b3J5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzdG9yeUFyci5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgaWQ6IHN0b3J5LmlkLFxyXG4gICAgICAgICAgICAgICAgICB0aXRsZTogc3RvcnkuZGF0YSgpLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICBhdXRob3JJZDogc3RvcnkuZGF0YSgpLmF1dGhvcklkLFxyXG4gICAgICAgICAgICAgICAgICBiYW5uZXI6IHN0b3J5LmRhdGEoKS5iYW5uZXIsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiB0eXBlcy5HRVRfQ0hBUkFDVEVSLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgICAgICBjaGFyYWN0ZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5kb2MuZGF0YSgpLFxyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBkb2MuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVsYXRpdmVzOiByZWxBcnIuZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgKHIpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChhdXRoLmN1cnJlbnRVc2VyICYmIGF1dGguY3VycmVudFVzZXIudWlkKSA9PT1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICByLmF1dGhvcklkIHx8IHIucHVibGljXHJcbiAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICBzdG9yaWVzOiBzdG9yeUFyci5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAocikgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKGF1dGguY3VycmVudFVzZXIgJiYgYXV0aC5jdXJyZW50VXNlci51aWQpID09PVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHIuYXV0aG9ySWQgfHwgci5wdWJsaWNcclxuICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICBjaGFyYUV4aXN0czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IHR5cGVzLkdFVF9DSEFSQUNURVIsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICBjaGFyYWN0ZXI6IHsgLi4uZG9jLmRhdGEoKSwgaWQ6IGRvYy5pZCB9LFxyXG4gICAgICAgICAgICAgIGNoYXJhRXhpc3RzOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IHR5cGVzLkdFVF9DSEFSQUNURVIsXHJcbiAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgIGNoYXJhRXhpc3RzOiBmYWxzZSxcclxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRDaGFyYWN0ZXIgPSAoZGF0YSkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGlzcGF0Y2goeyB0eXBlOiB0eXBlcy5BRERfQ0hBUkFDVEVSLCBwYXlsb2FkOiB7IGxvYWRpbmc6IHRydWUgfSB9KTtcclxuXHJcbiAgbGV0IGNoYXJhSWQgPSBcIlwiO1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzXCIpXHJcbiAgICAuYWRkKHtcclxuICAgICAgLi4uZGF0YSxcclxuICAgICAgaW1hZ2U6IHR5cGVvZiBkYXRhLmltYWdlID09PSBcInN0cmluZ1wiID8gZGF0YS5pbWFnZSA6IFwiXCIsXHJcbiAgICAgIGNyZWF0ZWRBdDogZmlyZWJhc2UuZmlyZXN0b3JlLkZpZWxkVmFsdWUuc2VydmVyVGltZXN0YW1wKCksXHJcbiAgICAgIGxpa2VzQ291bnQ6IDAsXHJcbiAgICAgIGxpa2VzOiBbXSxcclxuICAgICAgZGlzbGlrZXM6IFtdLFxyXG4gICAgfSlcclxuICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgY2hhcmFJZCA9IHJlcy5pZDtcclxuICAgICAgY29uc3QgaW1hZ2VOYW1lID0gYCR7cmVzLmlkfSR7XCJfXCJ9JHtkYXRhLmZpcnN0bmFtZS50b0xvd2VyQ2FzZSgpfSR7XHJcbiAgICAgICAgZGF0YS5sYXN0bmFtZSAmJiBcIl9cIlxyXG4gICAgICB9JHtkYXRhLmxhc3RuYW1lICYmIGRhdGEubGFzdG5hbWUudG9Mb3dlckNhc2UoKX1gO1xyXG5cclxuICAgICAgaWYgKHR5cGVvZiBkYXRhLmltYWdlID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgc3RvcmFnZVxyXG4gICAgICAgICAgLnJlZihgJHthdXRoLmN1cnJlbnRVc2VyLnVpZH0vJHtpbWFnZU5hbWV9YClcclxuICAgICAgICAgIC5wdXQoZGF0YS5pbWFnZSlcclxuICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHN0b3JhZ2VcclxuICAgICAgICAgICAgICAucmVmKGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gICAgICAgICAgICAgIC5jaGlsZChpbWFnZU5hbWUpXHJcbiAgICAgICAgICAgICAgLmdldERvd25sb2FkVVJMKCk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4oKHVybCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gZGJcclxuICAgICAgICAgICAgICAuY29sbGVjdGlvbihcImNoYXJhY3RlcnNcIilcclxuICAgICAgICAgICAgICAuZG9jKGNoYXJhSWQpXHJcbiAgICAgICAgICAgICAgLnVwZGF0ZSh7IGltYWdlOiB1cmwgfSk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoXCJDaGFyYWN0ZXIgYWRkZWQgc3VjY2Vzc2Z1bGx5XCIpO1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgdHlwZTogdHlwZXMuQUREX0NIQVJBQ1RFUixcclxuICAgICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkNoYXJhY3RlciBhZGRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgICAgICAgIGNoYXJhY3RlcklkOiBjaGFyYUlkLFxyXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoXCJDaGFyYWN0ZXIgYWRkZWQgc3VjY2Vzc2Z1bGx5XCIpO1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IHR5cGVzLkFERF9DSEFSQUNURVIsXHJcbiAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiQ2hhcmFjdGVyIGFkZGVkIHN1Y2Nlc3NmdWxseVwiLFxyXG4gICAgICAgICAgICBjaGFyYWN0ZXJJZDogY2hhcmFJZCxcclxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgbWVzc2FnZS5lcnJvcihlcnIubWVzc2FnZSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBlZGl0Q2hhcmFjdGVyID0gKGRhdGEsIGlkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkaXNwYXRjaCh7IHR5cGU6IHR5cGVzLkVESVRfQ0hBUkFDVEVSLCBwYXlsb2FkOiB7IGxvYWRpbmdDaGFyYWN0ZXI6IHRydWUgfSB9KTtcclxuXHJcbiAgY29uc3QgaW1hZ2VOYW1lID0gYCR7aWR9JHtcIl9cIn0ke2RhdGEuZmlyc3RuYW1lLnRvTG93ZXJDYXNlKCl9JHtcclxuICAgIGRhdGEubGFzdG5hbWUgJiYgXCJfXCJcclxuICB9JHtkYXRhLmxhc3RuYW1lICYmIGRhdGEubGFzdG5hbWUudG9Mb3dlckNhc2UoKX1gO1xyXG5cclxuICBpZiAoZGF0YS5pbWFnZSAmJiB0eXBlb2YgZGF0YS5pbWFnZSA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgc3RvcmFnZVxyXG4gICAgICAucmVmKGAke2F1dGguY3VycmVudFVzZXIudWlkfS8ke2ltYWdlTmFtZX1gKVxyXG4gICAgICAucHV0KGRhdGEuaW1hZ2UpXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICByZXR1cm4gc3RvcmFnZVxyXG4gICAgICAgICAgLnJlZihhdXRoLmN1cnJlbnRVc2VyLnVpZClcclxuICAgICAgICAgIC5jaGlsZChpbWFnZU5hbWUpXHJcbiAgICAgICAgICAuZ2V0RG93bmxvYWRVUkwoKTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKHVybCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBkYlxyXG4gICAgICAgICAgLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzXCIpXHJcbiAgICAgICAgICAuZG9jKGlkKVxyXG4gICAgICAgICAgLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgIC4uLmRhdGEsXHJcbiAgICAgICAgICAgIGltYWdlOiB1cmwsXHJcbiAgICAgICAgICAgIHJlbGF0aXZlc0FycjogZGF0YS5yZWxhdGl2ZXMubWFwKChjKSA9PiBjLmNoYXJhY3Rlcl9pZCksXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IHR5cGVzLkVESVRfQ0hBUkFDVEVSLFxyXG4gICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkNoYXJhY3RlciBlZGl0ZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICAgIGxvYWRpbmdDaGFyYWN0ZXI6IGZhbHNlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBtZXNzYWdlLmVycm9yKGVyci5tZXNzYWdlKTtcclxuICAgICAgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGRiLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzXCIpXHJcbiAgICAgIC5kb2MoaWQpXHJcbiAgICAgIC51cGRhdGUoe1xyXG4gICAgICAgIC4uLmRhdGEsXHJcbiAgICAgICAgcmVsYXRpdmVzQXJyOiBkYXRhLnJlbGF0aXZlcy5tYXAoKGMpID0+IGMuY2hhcmFjdGVyX2lkKSxcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IHR5cGVzLkVESVRfQ0hBUkFDVEVSLFxyXG4gICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkNoYXJhY3RlciBlZGl0ZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICAgIGxvYWRpbmdDaGFyYWN0ZXI6IGZhbHNlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBtZXNzYWdlLmVycm9yKGVyci5tZXNzYWdlKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlbGV0ZUNoYXJhY3RlciA9IChpZCwgZmlyc3RuYW1lLCBsYXN0bmFtZSkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGlzcGF0Y2goeyB0eXBlOiB0eXBlcy5ERUxFVEVfQ0hBUkFDVEVSLCBwYXlsb2FkOiB7IGxvYWRpbmc6IHRydWUgfSB9KTtcclxuICBjb25zdCBpbWFnZU5hbWUgPSBgJHtpZH0ke1wiX1wifSR7Zmlyc3RuYW1lLnRvTG93ZXJDYXNlKCl9JHtsYXN0bmFtZSAmJiBcIl9cIn0ke1xyXG4gICAgbGFzdG5hbWUgJiYgbGFzdG5hbWUudG9Mb3dlckNhc2UoKVxyXG4gIH1gO1xyXG4gIGNvbnN0IGJhdGNoID0gZGIuYmF0Y2goKTtcclxuICBkYi5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc1wiKVxyXG4gICAgLmRvYyhpZClcclxuICAgIC5kZWxldGUoKVxyXG4gICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICBpZiAoc3RvcmFnZS5yZWYoYCR7YXV0aC5jdXJyZW50VXNlci51aWR9LyR7aW1hZ2VOYW1lfWApKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0b3JhZ2UucmVmKGAke2F1dGguY3VycmVudFVzZXIudWlkfS8ke2ltYWdlTmFtZX1gKS5kZWxldGUoKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgZGIuY29sbGVjdGlvbihcImNoYXB0ZXJzXCIpXHJcbiAgICAgICAgLndoZXJlKFwiY2hhcmFjdGVyc1wiLCBcImFycmF5LWNvbnRhaW5zXCIsIGlkKVxyXG4gICAgICAgIC5nZXQoKVxyXG4gICAgICAgIC50aGVuKChkb2NzKSA9PiB7XHJcbiAgICAgICAgICBkb2NzLmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgICAgICAgICBiYXRjaC51cGRhdGUoZGIuY29sbGVjdGlvbihcImNoYXB0ZXJzXCIpLmRvYyhkb2MuaWQpLCB7XHJcbiAgICAgICAgICAgICAgY2hhcmFjdGVyczogZG9jLmRhdGEoKS5jaGFyYWN0ZXJzLmZpbHRlcigoYykgPT4gYyAhPT0gaWQpLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgZGIuY29sbGVjdGlvbihcInN0b3JpZXNcIilcclxuICAgICAgICAgICAgLndoZXJlKFwic2Vjb25kYXJ5QXJyXCIsIFwiYXJyYXktY29udGFpbnNcIiwgaWQpXHJcbiAgICAgICAgICAgIC5nZXQoKVxyXG4gICAgICAgICAgICAudGhlbigoc3RvcmllcykgPT4ge1xyXG4gICAgICAgICAgICAgIHN0b3JpZXMuZm9yRWFjaCgoc3RvcnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGJhdGNoLnVwZGF0ZShkYi5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKS5kb2Moc3RvcnkuaWQpLCB7XHJcbiAgICAgICAgICAgICAgICAgIG1haW5DaGFyYWN0ZXJzOiBzdG9yeVxyXG4gICAgICAgICAgICAgICAgICAgIC5kYXRhKClcclxuICAgICAgICAgICAgICAgICAgICAubWFpbkNoYXJhY3RlcnMuZmlsdGVyKChjKSA9PiBjICE9PSBpZCksXHJcbiAgICAgICAgICAgICAgICAgIHNlY29uZGFyeUFycjogc3RvcnlcclxuICAgICAgICAgICAgICAgICAgICAuZGF0YSgpXHJcbiAgICAgICAgICAgICAgICAgICAgLnNlY29uZGFyeUFyci5maWx0ZXIoKGMpID0+IGMgIT09IGlkKSxcclxuICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5Q2hhcmFjdGVyczogc3RvcnlcclxuICAgICAgICAgICAgICAgICAgICAuZGF0YSgpXHJcbiAgICAgICAgICAgICAgICAgICAgLnNlY29uZGFyeUNoYXJhY3RlcnMuZmlsdGVyKChjKSA9PiBjLmlkICE9PSBpZCksXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGRiLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzXCIpXHJcbiAgICAgICAgICAgICAgICAud2hlcmUoXCJyZWxhdGl2ZXNBcnJcIiwgXCJhcnJheS1jb250YWluc1wiLCBpZClcclxuICAgICAgICAgICAgICAgIC5nZXQoKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKGNoYXJhY3RlcnMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgY2hhcmFjdGVycy5mb3JFYWNoKChjaGFyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmF0Y2gudXBkYXRlKGRiLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzXCIpLmRvYyhjaGFyLmlkKSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmVsYXRpdmVzQXJyOiBjaGFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5kYXRhKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbGF0aXZlc0Fyci5maWx0ZXIoKGMpID0+IGMgIT09IGlkKSxcclxuICAgICAgICAgICAgICAgICAgICAgIHJlbGF0aXZlczogY2hhclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZGF0YSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZWxhdGl2ZXMuZmlsdGVyKChjKSA9PiBjLmNoYXJhY3Rlcl9pZCAhPT0gaWQpLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGRiLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzTGlrZXNcIilcclxuICAgICAgICAgICAgICAgICAgICAud2hlcmUoXCJjaGFyYWN0ZXJJZFwiLCBcIj09XCIsIGlkKVxyXG4gICAgICAgICAgICAgICAgICAgIC5nZXQoKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChsaWtlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGlrZXMuZm9yRWFjaCgobGlrZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYXRjaC5kZWxldGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGIuY29sbGVjdGlvbihcImNoYXJhY3RlcnNMaWtlc1wiKS5kb2MobGlrZS5pZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgYmF0Y2guY29tbWl0KCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiB0eXBlcy5ERUxFVEVfQ0hBUkFDVEVSLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiQ2hhcmFjdGVyIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFyYUV4aXN0czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFVzZXJDaGFyYWN0ZXJzID0gKGlkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBjb25zdCB1c2VySWQgPSBpZCA/IGlkIDogYXV0aC5jdXJyZW50VXNlci51aWQ7XHJcbiAgZGIuY29sbGVjdGlvbihcImNoYXJhY3RlcnNcIilcclxuICAgIC53aGVyZShcImF1dGhvcklkXCIsIFwiPT1cIiwgdXNlcklkKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigoZG9jcykgPT4ge1xyXG4gICAgICBsZXQgaXRlbXMgPSBbXTtcclxuICAgICAgZG9jcy5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgICAgICBpdGVtcyA9IFsuLi5pdGVtcywgeyBpZDogZG9jLmlkLCAuLi5kb2MuZGF0YSgpIH1dLmZpbHRlcigoYykgPT5cclxuICAgICAgICAgIGlkID8gYy5wdWJsaWMgOiBjXHJcbiAgICAgICAgKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBpdGVtcztcclxuICAgIH0pXHJcbiAgICAudGhlbigoaXRlbXMpID0+IHtcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiB0eXBlcy5HRVRfVVNFUl9DSEFSQUNURVJTLCBwYXlsb2FkOiBpdGVtcyB9KTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEZhdm9yaXRlQ2hhcmFjdGVycyA9IChpZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgY29uc3QgdXNlcklkID0gaWQgPyBpZCA6IGF1dGguY3VycmVudFVzZXIudWlkO1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzTGlrZXNcIilcclxuICAgIC53aGVyZShcInNlbmRlcklkXCIsIFwiPT1cIiwgdXNlcklkKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigoZG9jcykgPT4ge1xyXG4gICAgICBsZXQgZmF2QXJyID0gW107XHJcbiAgICAgIGRvY3MuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICAgICAgZmF2QXJyID0gWy4uLmZhdkFyciwgZG9jLmRhdGEoKS5jaGFyYWN0ZXJJZF07XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gZmF2QXJyO1xyXG4gICAgfSlcclxuICAgIC50aGVuKCh1c2VycykgPT4ge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSB1c2Vycy5tYXAoKHVzZXIpID0+XHJcbiAgICAgICAgZGIuY29sbGVjdGlvbihcImNoYXJhY3RlcnNcIikuZG9jKHVzZXIpLmdldCgpXHJcbiAgICAgICk7XHJcbiAgICAgIFByb21pc2UuYWxsKHJlc3VsdCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgbGV0IGZhdlVzZXJzID0gW107XHJcbiAgICAgICAgcmVzLmZvckVhY2goXHJcbiAgICAgICAgICAoZG9jKSA9PiAoZmF2VXNlcnMgPSBbLi4uZmF2VXNlcnMsIHsgaWQ6IGRvYy5pZCwgLi4uZG9jLmRhdGEoKSB9XSlcclxuICAgICAgICApO1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IHR5cGVzLkdFVF9GQVZPUklURV9DSEFSQUNURVJTLFxyXG4gICAgICAgICAgcGF5bG9hZDogZmF2VXNlcnMsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q2hhcmFjdGVyc0luU3RvcnkgPSAoaWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpXHJcbiAgICAuZG9jKGlkKVxyXG4gICAgLm9uU25hcHNob3QoKGRvYykgPT4ge1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogdHlwZXMuR0VUX1NUT1JZX0NIQVJBQ1RFUlMsXHJcbiAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgc2Vjb25kYXJ5Q2hhcmFjdGVyczogZG9jLmRhdGEoKS5zZWNvbmRhcnlDaGFyYWN0ZXJzLFxyXG4gICAgICAgICAgbWFpbkFycjogZG9jLmRhdGEoKS5tYWluQ2hhcmFjdGVycyxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHN1Ym1pdENoYXJhdGVyRmVlZGJhY2sgPSAoaW5mbywgYWxyZWFkeVBvc3RlZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgaWYgKCFhdXRoLmN1cnJlbnRVc2VyLmVtYWlsVmVyaWZpZWQpXHJcbiAgICByZXR1cm4gbWVzc2FnZS5lcnJvcihcIllvdSBuZWVkIHRvIHZlcmlmeSB5b3VyIGVtYWlsIGZpcnN0XCIpO1xyXG4gIGlmICghaW5mby5jb250ZW50KSByZXR1cm4gbWVzc2FnZS5lcnJvcihcIkNvbnRlbnQgbXVzdCBub3QgYmUgZW1wdHlcIik7XHJcbiAgaWYgKGFscmVhZHlQb3N0ZWQpIHJldHVybiBtZXNzYWdlLmVycm9yKFwiWW91IGhhdmUgYWxyZWFkeSBzZW50IGZlZWRiYWNrXCIpO1xyXG5cclxuICBkYi5jb2xsZWN0aW9uKFwiY29tbWVudHNcIilcclxuICAgIC5hZGQoe1xyXG4gICAgICAuLi5pbmZvLFxyXG4gICAgICBjcmVhdGVkQXQ6IGZpcmViYXNlLmZpcmVzdG9yZS5GaWVsZFZhbHVlLnNlcnZlclRpbWVzdGFtcCgpLFxyXG4gICAgfSlcclxuICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IHR5cGVzLlNVQk1JVF9DT01NRU5ULFxyXG4gICAgICAgIG1lc3NhZ2U6IFwiQ29tbWVudCBwb3N0ZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgIH0pO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiBtZXNzYWdlLmVycm9yKGVyci5tZXNzYWdlKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q2hhcmFjdGVyQ29tbWVudHMgPSAoaWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGxldCBjb21tZW50cyA9IFtdO1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJjb21tZW50c1wiKVxyXG4gICAgLndoZXJlKFwiY2hhcmFjdGVySWRcIiwgXCI9PVwiLCBpZClcclxuICAgIC5vcmRlckJ5KFwiY3JlYXRlZEF0XCIsIFwiYXNjXCIpXHJcbiAgICAuZ2V0KClcclxuICAgIC50aGVuKChjb21tKSA9PiB7XHJcbiAgICAgIGxldCB1c2VyUXVlcmllcyA9IFtdO1xyXG4gICAgICBjb21tLmZvckVhY2goKGMpID0+IGNvbW1lbnRzLnB1c2goeyAuLi5jLmRhdGEoKSwgaWQ6IGMuaWQgfSkpO1xyXG4gICAgICBjb21tZW50cy5mb3JFYWNoKChjb21tZW50KSA9PiB7XHJcbiAgICAgICAgdXNlclF1ZXJpZXMucHVzaChkYi5jb2xsZWN0aW9uKFwidXNlcnNcIikuZG9jKGNvbW1lbnQudXNlcklkKS5nZXQoKSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgUHJvbWlzZS5hbGwodXNlclF1ZXJpZXMpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGNvbW1lbnRzID0gY29tbWVudHMubWFwKChjKSA9PiAoe1xyXG4gICAgICAgICAgLi4uYyxcclxuICAgICAgICAgIHVzZXJJbWFnZTogcmVzLmZpbmQoKGQpID0+IGQuaWQgPT09IGMudXNlcklkKS5kYXRhKCkuaW1hZ2UsXHJcbiAgICAgICAgfSkpO1xyXG4gICAgICAgIGNvbnN0IHVzZXJDb21tZW50ID0gYXV0aC5jdXJyZW50VXNlclxyXG4gICAgICAgICAgPyBjb21tZW50cy5maW5kKChjKSA9PiBjLnVzZXJJZCA9PT0gYXV0aC5jdXJyZW50VXNlci51aWQpXHJcbiAgICAgICAgICA6IG51bGw7XHJcbiAgICAgICAgY29tbWVudHMgPSBhdXRoLmN1cnJlbnRVc2VyXHJcbiAgICAgICAgICA/IGNvbW1lbnRzLmZpbHRlcigoYykgPT4gYy51c2VySWQgIT09IGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gICAgICAgICAgOiBjb21tZW50cztcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiB0eXBlcy5HRVRfQ09NTUVOVFMsXHJcbiAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgIGNvbW1lbnRzLFxyXG4gICAgICAgICAgICB1c2VyQ29tbWVudCxcclxuICAgICAgICAgICAgbG9hZGluZ0NvbW1lbnRzOiBmYWxzZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlQ2hhcmFjdGVyQ29tbWVudCA9IChpZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGIuY29sbGVjdGlvbihcImNvbW1lbnRzXCIpXHJcbiAgICAuZG9jKGlkKVxyXG4gICAgLmRlbGV0ZSgpXHJcbiAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiB0eXBlcy5TVUJNSVRfQ09NTUVOVCxcclxuICAgICAgICBtZXNzYWdlOiBcIkNvbW1lbnQgZGVsZXRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCByYXRlQ29tbWVudCA9IChjb21tZW50SWQsIHR5cGUpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRpc3BhdGNoKHsgdHlwZTogdHlwZXMuUkFURV9DT01NRU5ULCByYXRlZDogdHJ1ZSB9KTtcclxuICBkYi5jb2xsZWN0aW9uKFwiY29tbWVudHNcIilcclxuICAgIC5kb2MoY29tbWVudElkKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigoZG9jKSA9PiB7XHJcbiAgICAgIGNvbnN0IGlzTGlrZWQgPSBkb2MuZGF0YSgpLmxpa2VkQnkuaW5jbHVkZXMoYXV0aC5jdXJyZW50VXNlci51aWQpO1xyXG4gICAgICBjb25zdCBpc0Rpc2xpa2VkID0gZG9jLmRhdGEoKS5kaXNsaWtlZEJ5LmluY2x1ZGVzKGF1dGguY3VycmVudFVzZXIudWlkKTtcclxuICAgICAgaWYgKCh0eXBlID09PSBcImxpa2VcIiAmJiBpc0xpa2VkKSB8fCAodHlwZSA9PT0gXCJkaXNsaWtlXCIgJiYgaXNEaXNsaWtlZCkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHR5cGUgPT09IFwibGlrZVwiKSB7XHJcbiAgICAgICAgZGIuY29sbGVjdGlvbihcImNvbW1lbnRzXCIpXHJcbiAgICAgICAgICAuZG9jKGNvbW1lbnRJZClcclxuICAgICAgICAgIC51cGRhdGUoe1xyXG4gICAgICAgICAgICBkaXNsaWtlZEJ5OiBpc0Rpc2xpa2VkXHJcbiAgICAgICAgICAgICAgPyBkb2MuZGF0YSgpLmRpc2xpa2VkQnkuZmlsdGVyKChkKSA9PiBkICE9PSBhdXRoLmN1cnJlbnRVc2VyLnVpZClcclxuICAgICAgICAgICAgICA6IGRvYy5kYXRhKCkuZGlzbGlrZWRCeSxcclxuICAgICAgICAgICAgbGlrZWRCeTogWy4uLmRvYy5kYXRhKCkubGlrZWRCeSwgYXV0aC5jdXJyZW50VXNlci51aWRdLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiB0eXBlcy5TVUJNSVRfQ09NTUVOVCwgbWVzc2FnZTogXCJWb2lsb3VcIiB9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiZGlzbGlrZVwiKSB7XHJcbiAgICAgICAgZGIuY29sbGVjdGlvbihcImNvbW1lbnRzXCIpXHJcbiAgICAgICAgICAuZG9jKGNvbW1lbnRJZClcclxuICAgICAgICAgIC51cGRhdGUoe1xyXG4gICAgICAgICAgICBsaWtlZEJ5OiBpc0xpa2VkXHJcbiAgICAgICAgICAgICAgPyBkb2MuZGF0YSgpLmxpa2VkQnkuZmlsdGVyKChkKSA9PiBkICE9PSBhdXRoLmN1cnJlbnRVc2VyLnVpZClcclxuICAgICAgICAgICAgICA6IGRvYy5kYXRhKCkubGlrZWRCeSxcclxuICAgICAgICAgICAgZGlzbGlrZWRCeTogWy4uLmRvYy5kYXRhKCkuZGlzbGlrZWRCeSwgYXV0aC5jdXJyZW50VXNlci51aWRdLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiB0eXBlcy5SQVRFX0NPTU1FTlQsIHJhdGVkOiBmYWxzZSB9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxufTtcclxuIiwiaW1wb3J0IHsgdHlwZXMgfSBmcm9tIFwiLi4vLi4vdXRpbHMvY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IGRiLCBhdXRoLCBzdG9yYWdlIH0gZnJvbSBcIi4uL2ZiQ29uZmlnXCI7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcbmltcG9ydCB7IG1lc3NhZ2UgfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuLy8gU1RPUklFU1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0b3J5ID0gKGlkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKVxyXG4gICAgLmRvYyhpZClcclxuICAgIC5nZXQoKVxyXG4gICAgLnRoZW4oKGRvYykgPT4ge1xyXG4gICAgICBpZiAoZG9jLmV4aXN0cykge1xyXG4gICAgICAgIGNvbnN0IG1haW4gPSBkb2MuZGF0YSgpLm1haW5DaGFyYWN0ZXJzO1xyXG4gICAgICAgIGNvbnN0IHNlY29uZGFyeSA9IGRvYy5kYXRhKCkuc2Vjb25kYXJ5Q2hhcmFjdGVycztcclxuICAgICAgICBsZXQgbWFpbkFyciA9IFtdO1xyXG4gICAgICAgIGxldCBzZWNvbmRhcnlBcnIgPSBbXTtcclxuICAgICAgICBjb25zdCBtYWluUXVlcnkgPSBtYWluLm1hcCgoYykgPT5cclxuICAgICAgICAgIGRiLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzXCIpLmRvYyhjKS5nZXQoKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3Qgc2Vjb25kYXJ5UXVlcnkgPSBzZWNvbmRhcnkubWFwKChjKSA9PlxyXG4gICAgICAgICAgZGIuY29sbGVjdGlvbihcImNoYXJhY3RlcnNcIikuZG9jKGMuaWQpLmdldCgpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBtYWluUmVzID0gUHJvbWlzZS5hbGwobWFpblF1ZXJ5KTtcclxuICAgICAgICBjb25zdCBzZWNvbmRhcnlSZXMgPSBQcm9taXNlLmFsbChzZWNvbmRhcnlRdWVyeSk7XHJcbiAgICAgICAgUHJvbWlzZS5hbGwoW21haW5SZXMsIHNlY29uZGFyeVJlc10pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgcmVzdWx0WzBdLmZvckVhY2goKGRvY3UpID0+IHtcclxuICAgICAgICAgICAgbWFpbkFyciA9IFsuLi5tYWluQXJyLCB7IC4uLmRvY3UuZGF0YSgpLCBpZDogZG9jdS5pZCB9XTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgcmVzdWx0WzFdLmZvckVhY2goKGRvY3UpID0+IHtcclxuICAgICAgICAgICAgc2Vjb25kYXJ5QXJyID0gWy4uLnNlY29uZGFyeUFyciwgeyAuLi5kb2N1LmRhdGEoKSwgaWQ6IGRvY3UuaWQgfV07XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogdHlwZXMuR0VUX1NUT1JZLFxyXG4gICAgICAgICAgICBzdG9yeUV4aXN0czogdHJ1ZSxcclxuICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgIC4uLmRvYy5kYXRhKCksXHJcbiAgICAgICAgICAgICAgaWQ6IGRvYy5pZCxcclxuICAgICAgICAgICAgICBzZWNvbmRhcnlDaGFyYWN0ZXJzOiBzZWNvbmRhcnlBcnIsXHJcbiAgICAgICAgICAgICAgbWFpbkNoYXJhY3RlcnM6IG1haW5BcnIsXHJcbiAgICAgICAgICAgICAgbWFpbkFycjogZG9jLmRhdGEoKS5tYWluQ2hhcmFjdGVycyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IHR5cGVzLkRJU1BBVENIX0VSUk9SLFxyXG4gICAgICAgICAgc3RvcnlFeGlzdHM6IGZhbHNlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFN0b3J5ID0gKGRhdGEpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRpc3BhdGNoKHsgdHlwZTogdHlwZXMuQUREX1NUT1JZLCBwYXlsb2FkOiB7IGxvYWRpbmc6IHRydWUgfSB9KTtcclxuICBsZXQgc3RvcnlJZCA9IFwiXCI7XHJcblxyXG4gIGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpXHJcbiAgICAuYWRkKHtcclxuICAgICAgLi4uZGF0YSxcclxuICAgICAgYXV0aG9ySWQ6IGF1dGguY3VycmVudFVzZXIudWlkLFxyXG4gICAgICBhdXRob3JOYW1lOiBkYXRhLmF1dGhvck5hbWUsXHJcbiAgICAgIG9uZVNob3Q6IGZhbHNlLFxyXG4gICAgICBiYW5uZXI6IHR5cGVvZiBkYXRhLmJhbm5lciA9PT0gXCJzdHJpbmdcIiA/IGRhdGEuYmFubmVyIDogXCJcIixcclxuICAgICAgY3JlYXRlZEF0OiBmaXJlYmFzZS5maXJlc3RvcmUuRmllbGRWYWx1ZS5zZXJ2ZXJUaW1lc3RhbXAoKSxcclxuICAgICAgbGlrZXNDb3VudDogMCxcclxuICAgICAgY2hhcHRlcnNDb3VudDogMCxcclxuICAgICAgc2Vjb25kYXJ5Q2hhcmFjdGVyczogW10sXHJcbiAgICAgIHNlY29uZGFyeUFycjogW10sXHJcbiAgICAgIGZlYXR1cmVkOiBmYWxzZSxcclxuICAgICAgbm90ZTogMCxcclxuICAgICAgY2hhcHRlcnNDb3VudDogMCxcclxuICAgICAgY29tbWVudHNDb3VudDogMCxcclxuICAgICAgbGFzdFVwZGF0ZWQ6IGZpcmViYXNlLmZpcmVzdG9yZS5GaWVsZFZhbHVlLnNlcnZlclRpbWVzdGFtcCgpLFxyXG4gICAgfSlcclxuICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgc3RvcnlJZCA9IHJlcy5pZDtcclxuICAgICAgaWYgKHR5cGVvZiBkYXRhLmJhbm5lciA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgIGNvbnN0IGltYWdlTmFtZSA9IGAke3Jlcy5pZH1fJHtkYXRhLnRpdGxlXHJcbiAgICAgICAgICAudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgICAgLnNwbGl0KFwiIFwiKVxyXG4gICAgICAgICAgLmpvaW4oXCJfXCIpfWA7XHJcbiAgICAgICAgc3RvcmFnZVxyXG4gICAgICAgICAgLnJlZihgJHthdXRoLmN1cnJlbnRVc2VyLnVpZH0vJHtpbWFnZU5hbWV9YClcclxuICAgICAgICAgIC5wdXQoZGF0YS5iYW5uZXIpXHJcbiAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdG9yYWdlXHJcbiAgICAgICAgICAgICAgLnJlZihhdXRoLmN1cnJlbnRVc2VyLnVpZClcclxuICAgICAgICAgICAgICAuY2hpbGQoaW1hZ2VOYW1lKVxyXG4gICAgICAgICAgICAgIC5nZXREb3dubG9hZFVSTCgpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKCh1cmwpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGRiXHJcbiAgICAgICAgICAgICAgLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpXHJcbiAgICAgICAgICAgICAgLmRvYyhzdG9yeUlkKVxyXG4gICAgICAgICAgICAgIC51cGRhdGUoeyBiYW5uZXI6IHVybCB9KTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICB0eXBlOiB0eXBlcy5BRERfU1RPUlksXHJcbiAgICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJTdG9yeSBhZGRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgICAgICAgIHN0b3J5SWQ6IHN0b3J5SWQsXHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IHR5cGVzLkFERF9TVE9SWSxcclxuICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJTdG9yeSBhZGRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgICAgc3RvcnlJZDogc3RvcnlJZCxcclxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgbWVzc2FnZS5lcnJvcihlcnIubWVzc2FnZSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBlZGl0U3RvcnkgPSAoZGF0YSwgc3RvcnlJZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGlzcGF0Y2goeyB0eXBlOiB0eXBlcy5FRElUX1NUT1JZLCBwYXlsb2FkOiB7IGxvYWRpbmdTdG9yeTogdHJ1ZSB9IH0pO1xyXG4gIGNvbnN0IGltYWdlTmFtZSA9IGRhdGEudGl0bGUudG9Mb3dlckNhc2UoKS5zcGxpdChcIiBcIikuam9pbihcIl9cIik7XHJcblxyXG4gIGlmICh0eXBlb2YgZGF0YS5iYW5uZXIgPT09IFwib2JqZWN0XCIpIHtcclxuICAgIHN0b3JhZ2VcclxuICAgICAgLnJlZihgJHthdXRoLmN1cnJlbnRVc2VyLnVpZH0vJHtpbWFnZU5hbWV9YClcclxuICAgICAgLnB1dChkYXRhLmJhbm5lcilcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBzdG9yYWdlXHJcbiAgICAgICAgICAucmVmKGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gICAgICAgICAgLmNoaWxkKGltYWdlTmFtZSlcclxuICAgICAgICAgIC5nZXREb3dubG9hZFVSTCgpO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigodXJsKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGRiXHJcbiAgICAgICAgICAuY29sbGVjdGlvbihcInN0b3JpZXNcIilcclxuICAgICAgICAgIC5kb2Moc3RvcnlJZClcclxuICAgICAgICAgIC51cGRhdGUoe1xyXG4gICAgICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgICAgICBiYW5uZXI6IHVybCxcclxuICAgICAgICAgICAgbGFzdFVwZGF0ZWQ6IGZpcmViYXNlLmZpcmVzdG9yZS5GaWVsZFZhbHVlLnNlcnZlclRpbWVzdGFtcCgpLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICBkYi5jb2xsZWN0aW9uKFwibG9jYXRpb25zXCIpXHJcbiAgICAgICAgICAud2hlcmUoXCJzdG9yeUlkXCIsIFwiPT1cIiwgc3RvcnlJZClcclxuICAgICAgICAgIC5nZXQoKVxyXG4gICAgICAgICAgLnRoZW4oKGRvY3MpID0+IHtcclxuICAgICAgICAgICAgbGV0IGxvY2F0aW9uUXVlcnkgPSBbXTtcclxuICAgICAgICAgICAgZG9jcy5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgICAgICAgICAgICBsb2NhdGlvblF1ZXJ5ID0gW1xyXG4gICAgICAgICAgICAgICAgLi4ubG9jYXRpb25RdWVyeSxcclxuICAgICAgICAgICAgICAgIGRiXHJcbiAgICAgICAgICAgICAgICAgIC5jb2xsZWN0aW9uKFwibG9jYXRpb25zXCIpXHJcbiAgICAgICAgICAgICAgICAgIC5kb2MoZG9jLmlkKVxyXG4gICAgICAgICAgICAgICAgICAudXBkYXRlKHsgc3RvcnlUaXRsZTogZGF0YS50aXRsZSB9KSxcclxuICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgUHJvbWlzZS5hbGwobG9jYXRpb25RdWVyeSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogdHlwZXMuRURJVF9TVE9SWSxcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJTdG9yeSBlZGl0ZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoZXJyLm1lc3NhZ2UpO1xyXG4gICAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgZGIuY29sbGVjdGlvbihcInN0b3JpZXNcIilcclxuICAgICAgLmRvYyhzdG9yeUlkKVxyXG4gICAgICAudXBkYXRlKHtcclxuICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgIGxhc3RVcGRhdGVkOiBmaXJlYmFzZS5maXJlc3RvcmUuRmllbGRWYWx1ZS5zZXJ2ZXJUaW1lc3RhbXAoKSxcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIGRiLmNvbGxlY3Rpb24oXCJsb2NhdGlvbnNcIilcclxuICAgICAgICAgIC53aGVyZShcInN0b3J5SWRcIiwgXCI9PVwiLCBzdG9yeUlkKVxyXG4gICAgICAgICAgLmdldCgpXHJcbiAgICAgICAgICAudGhlbigoZG9jcykgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbG9jYXRpb25RdWVyeSA9IFtdO1xyXG4gICAgICAgICAgICBkb2NzLmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgICAgICAgICAgIGxvY2F0aW9uUXVlcnkgPSBbXHJcbiAgICAgICAgICAgICAgICAuLi5sb2NhdGlvblF1ZXJ5LFxyXG4gICAgICAgICAgICAgICAgZGJcclxuICAgICAgICAgICAgICAgICAgLmNvbGxlY3Rpb24oXCJsb2NhdGlvbnNcIilcclxuICAgICAgICAgICAgICAgICAgLmRvYyhkb2MuaWQpXHJcbiAgICAgICAgICAgICAgICAgIC51cGRhdGUoeyBzdG9yeVRpdGxlOiBkYXRhLnRpdGxlIH0pLFxyXG4gICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBQcm9taXNlLmFsbChsb2NhdGlvblF1ZXJ5KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiB0eXBlcy5FRElUX1NUT1JZLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIlN0b3J5IGVkaXRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihlcnIubWVzc2FnZSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkZWxldGVTdG9yeSA9IChpZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGlzcGF0Y2goeyB0eXBlOiB0eXBlcy5ERUxFVEVfU1RPUlksIHBheWxvYWQ6IHsgbG9hZGluZzogdHJ1ZSB9IH0pO1xyXG4gIGNvbnN0IGJhdGNoID0gZGIuYmF0Y2goKTtcclxuICBiYXRjaC5kZWxldGUoZGIuY29sbGVjdGlvbihcInN0b3JpZXNcIikuZG9jKGlkKSk7XHJcbiAgY29uc3QgY2hhcHRlcnNUb0RlbGV0ZSA9IGRiXHJcbiAgICAuY29sbGVjdGlvbihcImNoYXB0ZXJzXCIpXHJcbiAgICAud2hlcmUoXCJzdG9yeUlkXCIsIFwiPT1cIiwgaWQpXHJcbiAgICAuZ2V0KCk7XHJcbiAgY29uc3QgbGlrZXNUb0RlbGV0ZSA9IGRiXHJcbiAgICAuY29sbGVjdGlvbihcInN0b3JpZXNMaWtlc1wiKVxyXG4gICAgLndoZXJlKFwic3RvcnlJZFwiLCBcIj09XCIsIGlkKVxyXG4gICAgLmdldCgpO1xyXG4gIGNvbnN0IGxvY2F0aW9uc1RvRGVsZXRlID0gZGJcclxuICAgIC5jb2xsZWN0aW9uKFwibG9jYXRpb25zXCIpXHJcbiAgICAud2hlcmUoXCJzdG9yeUlkXCIsIFwiPT1cIiwgaWQpXHJcbiAgICAuZ2V0KCk7XHJcbiAgUHJvbWlzZS5hbGwoW2NoYXB0ZXJzVG9EZWxldGUsIGxpa2VzVG9EZWxldGUsIGxvY2F0aW9uc1RvRGVsZXRlXSkudGhlbihcclxuICAgIChyZXMpID0+IHtcclxuICAgICAgcmVzWzBdLmZvckVhY2goKGNoYXApID0+IHtcclxuICAgICAgICBiYXRjaC5kZWxldGUoZGIuY29sbGVjdGlvbihcImNoYXB0ZXJzXCIpLmRvYyhjaGFwLmlkKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXNbMV0uZm9yRWFjaCgobGlrZSkgPT4ge1xyXG4gICAgICAgIGJhdGNoLmRlbGV0ZShkYi5jb2xsZWN0aW9uKFwic3Rvcmllc0xpa2VzXCIpLmRvYyhsaWtlLmlkKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXNbMl0uZm9yRWFjaCgobG9jKSA9PiB7XHJcbiAgICAgICAgYmF0Y2guZGVsZXRlKGRiLmNvbGxlY3Rpb24oXCJsb2NhdGlvbnNcIikuZG9jKGxvYy5pZCkpO1xyXG4gICAgICB9KTtcclxuICAgICAgYmF0Y2guY29tbWl0KCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogdHlwZXMuREVMRVRFX1NUT1JZLFxyXG4gICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIlN0b3J5IGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICAgIGxvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgIGRlbGV0ZWQ6IHRydWUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFVzZXJTdG9yaWVzID0gKGlkLCB0eXBlKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBjb25zdCB1c2VySWQgPSBpZCA/IGlkIDogYXV0aC5jdXJyZW50VXNlci51aWQ7XHJcbiAgZGIuY29sbGVjdGlvbihcInN0b3JpZXNcIilcclxuICAgIC53aGVyZShcImF1dGhvcklkXCIsIFwiPT1cIiwgdXNlcklkKVxyXG4gICAgLm9yZGVyQnkoXCJjcmVhdGVkQXRcIiwgXCJkZXNjXCIpXHJcbiAgICAuZ2V0KClcclxuICAgIC50aGVuKChkb2NzKSA9PiB7XHJcbiAgICAgIGxldCBpdGVtcyA9IFtdO1xyXG4gICAgICBkb2NzLmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgICAgIGl0ZW1zID0gWy4uLml0ZW1zLCB7IGlkOiBkb2MuaWQsIC4uLmRvYy5kYXRhKCkgfV0uZmlsdGVyKChzKSA9PlxyXG4gICAgICAgICAgaWQgPyBzLnB1YmxpYyA6IHNcclxuICAgICAgICApO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGl0ZW1zO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChpdGVtcykgPT4ge1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IHR5cGVzLkdFVF9VU0VSX1NUT1JJRVMsIHBheWxvYWQ6IGl0ZW1zIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0RmF2b3JpdGVTdG9yaWVzID0gKGlkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBjb25zdCB1c2VySWQgPSBpZCA/IGlkIDogYXV0aC5jdXJyZW50VXNlci51aWQ7XHJcbiAgZGIuY29sbGVjdGlvbihcInN0b3JpZXNMaWtlc1wiKVxyXG4gICAgLndoZXJlKFwic2VuZGVySWRcIiwgXCI9PVwiLCB1c2VySWQpXHJcbiAgICAub3JkZXJCeShcImNyZWF0ZWRBdFwiLCBcImRlc2NcIilcclxuICAgIC5nZXQoKVxyXG4gICAgLnRoZW4oKGRvY3MpID0+IHtcclxuICAgICAgbGV0IGZhdkFyciA9IFtdO1xyXG4gICAgICBkb2NzLmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgICAgIGZhdkFyciA9IFsuLi5mYXZBcnIsIGRvYy5kYXRhKCkuc3RvcnlJZF07XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gZmF2QXJyO1xyXG4gICAgfSlcclxuICAgIC50aGVuKCh1c2VycykgPT4ge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSB1c2Vycy5tYXAoKHVzZXIpID0+XHJcbiAgICAgICAgZGIuY29sbGVjdGlvbihcInN0b3JpZXNcIikuZG9jKHVzZXIpLmdldCgpXHJcbiAgICAgICk7XHJcbiAgICAgIFByb21pc2UuYWxsKHJlc3VsdCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgbGV0IGZhdlVzZXJzID0gW107XHJcbiAgICAgICAgcmVzLmZvckVhY2goXHJcbiAgICAgICAgICAoZG9jKSA9PiAoZmF2VXNlcnMgPSBbLi4uZmF2VXNlcnMsIHsgaWQ6IGRvYy5pZCwgLi4uZG9jLmRhdGEoKSB9XSlcclxuICAgICAgICApO1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IHR5cGVzLkdFVF9GQVZPUklURV9TVE9SSUVTLFxyXG4gICAgICAgICAgcGF5bG9hZDogZmF2VXNlcnMsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgaXNTdG9yeUZhdm9yaXRlID0gKHN0b3J5SWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGlmIChhdXRoLmN1cnJlbnRVc2VyKSB7XHJcbiAgICBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc0xpa2VzXCIpXHJcbiAgICAgIC53aGVyZShcInNlbmRlcklkXCIsIFwiPT1cIiwgYXV0aC5jdXJyZW50VXNlci51aWQpXHJcbiAgICAgIC53aGVyZShcInN0b3J5SWRcIiwgXCI9PVwiLCBzdG9yeUlkKVxyXG4gICAgICAub25TbmFwc2hvdCgoc25hcHNob3QpID0+IHtcclxuICAgICAgICBjb25zdCBhbnN3ZXIgPSBzbmFwc2hvdC5kb2NzWzBdID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgIHJldHVybiBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiB0eXBlcy5JU19TVE9SWV9GQVZPUklURSxcclxuICAgICAgICAgIHBheWxvYWQ6IGFuc3dlcixcclxuICAgICAgICAgIGxvYWRpbmdGYXY6IGZhbHNlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYWRkU3RvcnlUb0Zhdm9yaXRlID0gKGlkLCB1c2VybmFtZSwgc3RvcnlUaXRsZSkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgLy8gaWYgKGlzRmF2b3JpdGUpIHJldHVybiBtZXNzYWdlLndhcm5pbmcoXCJZb3UndmUgYWxyZWFkeSBsaWtlZCB0aGlzIHN0b3J5XCIpO1xyXG4gIGlmICghYXV0aC5jdXJyZW50VXNlcilcclxuICAgIHJldHVybiBtZXNzYWdlLmVycm9yKFwiWW91IG5lZWQgdG8gYmUgbG9nZ2VkIGluIHRvIGxpa2UgYSBzdG9yeVwiKTtcclxuICBpZiAoIWF1dGguY3VycmVudFVzZXIuZW1haWxWZXJpZmllZClcclxuICAgIHJldHVybiBtZXNzYWdlLmVycm9yKFwiWW91IG5lZWQgdG8gdmVyaWZ5IHlvdXIgZW1haWwgZmlyc3RcIik7XHJcblxyXG4gIGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzTGlrZXNcIilcclxuICAgIC5hZGQoe1xyXG4gICAgICBzZW5kZXI6IHVzZXJuYW1lLFxyXG4gICAgICBzZW5kZXJJZDogYXV0aC5jdXJyZW50VXNlci51aWQsXHJcbiAgICAgIHN0b3J5SWQ6IGlkLFxyXG4gICAgICBjcmVhdGVkQXQ6IGZpcmViYXNlLmZpcmVzdG9yZS5GaWVsZFZhbHVlLnNlcnZlclRpbWVzdGFtcCgpLFxyXG4gICAgfSlcclxuICAgIC50aGVuKCgpID0+IG1lc3NhZ2Uuc3VjY2VzcyhgJHtzdG9yeVRpdGxlfSBhZGRlZCB0byB5b3VyIGZhdm9yaXRlc2ApKVxyXG4gICAgLmNhdGNoKChlcnIpID0+IG1lc3NhZ2UuZXJyb3IoXCJUaGVyZSBoYXMgYmVlbiBhIHByb2JsZW1cIikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZVN0b3J5RnJvbUZhdm9yaXRlID0gKGlkLCBzdG9yeVRpdGxlKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc0xpa2VzXCIpXHJcbiAgICAud2hlcmUoXCJzdG9yeUlkXCIsIFwiPT1cIiwgaWQpXHJcbiAgICAud2hlcmUoXCJzZW5kZXJJZFwiLCBcIj09XCIsIGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGIuY29sbGVjdGlvbihcInN0b3JpZXNMaWtlc1wiKS5kb2MoZGF0YS5kb2NzWzBdLmlkKS5kZWxldGUoKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoKSA9PiBtZXNzYWdlLnN1Y2Nlc3MoYCR7c3RvcnlUaXRsZX0gcmVtb3ZlZCBmcm9tIHlvdXIgZmF2b3JpdGVzYCkpXHJcbiAgICAuY2F0Y2goKGVycikgPT4gbWVzc2FnZS5lcnJvcihcIlRoZXJlIGhhcyBiZWVuIGEgcHJvYmxlbVwiKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RvcnlDaGFyYWN0ZXJzID0gKCkgPT4gKGRpc3BhdGNoKSA9PiB7fTtcclxuXHJcbi8vIENIQVBURVJzXHJcblxyXG5leHBvcnQgY29uc3QgYWRkQ2hhcHRlciA9IChkYXRhLCBzZWNvbmRhcnlDaGFyYWN0ZXJzKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBsZXQgY2hhcElkID0gXCJcIjtcclxuICBkaXNwYXRjaCh7IHR5cGU6IHR5cGVzLkFERF9DSEFQVEVSLCBwYXlsb2FkOiB7IGxvYWRpbmc6IHRydWUgfSB9KTtcclxuXHJcbiAgcmV0dXJuIGRiXHJcbiAgICAuY29sbGVjdGlvbihcImNoYXB0ZXJzXCIpXHJcbiAgICAuYWRkKHtcclxuICAgICAgLi4uZGF0YSxcclxuICAgICAgYXV0aG9ySWQ6IGF1dGguY3VycmVudFVzZXIudWlkLFxyXG4gICAgICBjb21tZW50c0NvdW50OiAwLFxyXG4gICAgICBub3RlOiAwLFxyXG4gICAgICB2b3RlcnM6IFtdLFxyXG4gICAgICB2b3Rlc0NvdW50OiAwLFxyXG4gICAgICBjcmVhdGVkQXQ6IGZpcmViYXNlLmZpcmVzdG9yZS5GaWVsZFZhbHVlLnNlcnZlclRpbWVzdGFtcCgpLFxyXG4gICAgfSlcclxuICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgY2hhcElkID0gcmVzLmlkO1xyXG4gICAgICBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKVxyXG4gICAgICAgIC5kb2MoZGF0YS5zdG9yeUlkKVxyXG4gICAgICAgIC5nZXQoKVxyXG4gICAgICAgIC50aGVuKChzdG9yeSkgPT4ge1xyXG4gICAgICAgICAgZGIuY29sbGVjdGlvbihcInN0b3JpZXNcIilcclxuICAgICAgICAgICAgLmRvYyhkYXRhLnN0b3J5SWQpXHJcbiAgICAgICAgICAgIC51cGRhdGUoe1xyXG4gICAgICAgICAgICAgIGNoYXB0ZXJzQ291bnQ6IHN0b3J5LmRhdGEoKS5jaGFwdGVyc0NvdW50ICsgMSxcclxuICAgICAgICAgICAgICBzZWNvbmRhcnlDaGFyYWN0ZXJzOiBzZWNvbmRhcnlDaGFyYWN0ZXJzLFxyXG4gICAgICAgICAgICAgIHNlY29uZGFyeUFycjogc2Vjb25kYXJ5Q2hhcmFjdGVycy5tYXAoKGMpID0+IGMuaWQpLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogdHlwZXMuQUREX0NIQVBURVIsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiQ2hhcHRlciBhZGRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgICAgICAgICAgY2hhcElkOiBjaGFwSWQsXHJcbiAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBlZGl0Q2hhcHRlciA9IChkYXRhLCBzdG9yeUlkLCBjaGFwaWQsIHNlY29uZGFyeUNoYXJhY3RlcnMpID0+IChcclxuICBkaXNwYXRjaFxyXG4pID0+IHtcclxuICBkaXNwYXRjaCh7IHR5cGU6IHR5cGVzLkVESVRfQ0hBUFRFUiwgcGF5bG9hZDogeyBsb2FkaW5nOiB0cnVlIH0gfSk7XHJcbiAgZGIuY29sbGVjdGlvbihcImNoYXB0ZXJzXCIpXHJcbiAgICAuZG9jKGNoYXBpZClcclxuICAgIC51cGRhdGUoeyAuLi5kYXRhIH0pXHJcbiAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgIGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpXHJcbiAgICAgICAgLmRvYyhzdG9yeUlkKVxyXG4gICAgICAgIC5nZXQoKVxyXG4gICAgICAgIC50aGVuKChkb2MpID0+IHtcclxuICAgICAgICAgIGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpXHJcbiAgICAgICAgICAgIC5kb2Moc3RvcnlJZClcclxuICAgICAgICAgICAgLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgc2Vjb25kYXJ5Q2hhcmFjdGVycyxcclxuICAgICAgICAgICAgICBzZWNvbmRhcnlBcnI6IHNlY29uZGFyeUNoYXJhY3RlcnMubWFwKChjKSA9PiBjLmlkKSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IHR5cGVzLkVESVRfQ0hBUFRFUixcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJDaGFwdGVyIGVkaXRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlbGV0ZUNoYXB0ZXIgPSAoaWQsIHN0b3J5SWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRpc3BhdGNoKHsgdHlwZTogdHlwZXMuREVMRVRFX0NIQVBURVIsIHBheWxvYWQ6IHsgbG9hZGluZ0NoYXB0ZXI6IHRydWUgfSB9KTtcclxuICBjb25zdCBiYXRjaCA9IGRiLmJhdGNoKCk7XHJcblxyXG4gIGNvbnN0IGNvbW1lbnRzVG9EZWxldGUgPSBkYlxyXG4gICAgLmNvbGxlY3Rpb24oXCJjb21tZW50c1wiKVxyXG4gICAgLndoZXJlKFwiY2hhcHRlcklkXCIsIFwiPT1cIiwgaWQpXHJcbiAgICAuZ2V0KCk7XHJcbiAgY29uc3QgY2hhcHRlciA9IGRiLmNvbGxlY3Rpb24oXCJjaGFwdGVyc1wiKS5kb2MoaWQpLmdldCgpO1xyXG4gIGNvbnN0IHN0b3J5ID0gZGIuY29sbGVjdGlvbihcInN0b3JpZXNcIikuZG9jKHN0b3J5SWQpLmdldCgpO1xyXG5cclxuICBQcm9taXNlLmFsbChbY2hhcHRlciwgc3RvcnksIGNvbW1lbnRzVG9EZWxldGVdKS50aGVuKChyZXMpID0+IHtcclxuICAgIGNvbnN0IGNoYXJhY3RlcnNGcm9tQ2hhcHRlciA9IHJlc1swXS5kYXRhKCkuY2hhcmFjdGVycztcclxuICAgIGNvbnN0IGNoYXJhY3RlcnNGcm9tU3RvcnkgPSByZXNbMV0uZGF0YSgpLnNlY29uZGFyeUNoYXJhY3RlcnM7XHJcbiAgICBsZXQgbmV3QXJyID0gY2hhcmFjdGVyc0Zyb21TdG9yeVxyXG4gICAgICAubWFwKChjKSA9PiB7XHJcbiAgICAgICAgaWYgKGNoYXJhY3RlcnNGcm9tQ2hhcHRlci5pbmNsdWRlcyhjLmlkKSkge1xyXG4gICAgICAgICAgcmV0dXJuIHsgLi4uYywgdGltZXM6IGMudGltZXMgLSAxIH07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiBjO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmZpbHRlcigoYykgPT4gYy50aW1lcyA+IDApO1xyXG4gICAgYmF0Y2gudXBkYXRlKGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpLmRvYyhzdG9yeUlkKSwge1xyXG4gICAgICBjaGFwdGVyc0NvdW50OiByZXNbMV0uZGF0YSgpLmNoYXB0ZXJzQ291bnQgLSAxLFxyXG4gICAgICBzZWNvbmRhcnlDaGFyYWN0ZXJzOiBuZXdBcnIsXHJcbiAgICAgIHNlY29uZGFyeUFycjogbmV3QXJyLm1hcCgoYykgPT4gYy5pZCksXHJcbiAgICB9KTtcclxuICAgIHJlc1syXS5mb3JFYWNoKChjb21tKSA9PlxyXG4gICAgICBiYXRjaC5kZWxldGUoZGIuY29sbGVjdGlvbihcImNvbW1lbnRzXCIpLmRvYyhjb21tLmlkKSlcclxuICAgICk7XHJcbiAgICBiYXRjaC5kZWxldGUoZGIuY29sbGVjdGlvbihcImNoYXB0ZXJzXCIpLmRvYyhpZCkpO1xyXG4gICAgYmF0Y2guY29tbWl0KCkudGhlbigoKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiB0eXBlcy5ERUxFVEVfQ0hBUFRFUixcclxuICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICBtZXNzYWdlOiBcIkNoYXB0ZXIgZGVsZXRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgIGxvYWRpbmdDaGFwdGVyOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldENoYXB0ZXIgPSAoc3RvcnlJZCwgaWQsIHR5cGUpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpXHJcbiAgICAuZG9jKHN0b3J5SWQpXHJcbiAgICAuZ2V0KClcclxuICAgIC50aGVuKChkb2MpID0+IHtcclxuICAgICAgaWYgKGRvYy5leGlzdHMpIHtcclxuICAgICAgICBkYi5jb2xsZWN0aW9uKFwiY2hhcHRlcnNcIilcclxuICAgICAgICAgIC5kb2MoaWQpXHJcbiAgICAgICAgICAuZ2V0KClcclxuICAgICAgICAgIC50aGVuKChjaGFwKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjaGFwLmV4aXN0cykge1xyXG4gICAgICAgICAgICAgIGlmICh0eXBlID09PSBcInNob3dcIikge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNoYXJhY3RlcnMgPSBbXTtcclxuICAgICAgICAgICAgICAgIGxldCBsb2NhdGlvbnMgPSBbXTtcclxuICAgICAgICAgICAgICAgIGxldCBjaGFyYVF1ZXJ5ID0gW107XHJcbiAgICAgICAgICAgICAgICBsZXQgbG9jUXVlcnkgPSBbXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNoYXJhY3RlcnNJbkNoYXBlciA9IGNoYXAuZGF0YSgpLmNoYXJhY3RlcnM7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhdGlvbnNJbkNoYXBlciA9IGNoYXAuZGF0YSgpLmxvY2F0aW9ucztcclxuICAgICAgICAgICAgICAgIGNoYXJhY3RlcnNJbkNoYXBlci5mb3JFYWNoKChjaGFyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNoYXJhUXVlcnkucHVzaChkYi5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc1wiKS5kb2MoY2hhcikuZ2V0KCkpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbnNJbkNoYXBlci5mb3JFYWNoKChsb2MpID0+IHtcclxuICAgICAgICAgICAgICAgICAgbG9jUXVlcnkucHVzaChkYi5jb2xsZWN0aW9uKFwibG9jYXRpb25zXCIpLmRvYyhsb2MpLmdldCgpKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgY2hhcmFRdWVyeSA9IFByb21pc2UuYWxsKGNoYXJhUXVlcnkpO1xyXG4gICAgICAgICAgICAgICAgbG9jUXVlcnkgPSBQcm9taXNlLmFsbChsb2NRdWVyeSk7XHJcbiAgICAgICAgICAgICAgICBQcm9taXNlLmFsbChbY2hhcmFRdWVyeSwgbG9jUXVlcnldKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgcmVzWzBdLmZvckVhY2goKGMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjaGFyYWN0ZXJzLnB1c2goeyAuLi5jLmRhdGEoKSwgaWQ6IGMuaWQgfSk7XHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICByZXNbMV0uZm9yRWFjaCgobCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9ucy5wdXNoKHsgLi4ubC5kYXRhKCksIGlkOiBsLmlkIH0pO1xyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IHR5cGVzLkdFVF9DSEFQVEVSLFxyXG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGNoYXB0ZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uY2hhcC5kYXRhKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBjaGFwLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJhY3RlcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1YmxpYzogZG9jLmRhdGEoKS5wdWJsaWMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3J5VGl0bGU6IGRvYy5kYXRhKCkudGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgY2hhcHRlckV4aXN0czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU6IHR5cGVzLkdFVF9DSEFQVEVSLFxyXG4gICAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hhcHRlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgLi4uY2hhcC5kYXRhKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZDogY2hhcC5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgIHB1YmxpYzogZG9jLmRhdGEoKS5wdWJsaWMsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBjaGFwdGVyRXhpc3RzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IHR5cGVzLkdFVF9DSEFQVEVSLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogeyBjaGFwdGVyRXhpc3RzOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiB0eXBlcy5HRVRfQ0hBUFRFUixcclxuICAgICAgICAgIHBheWxvYWQ6IHsgY2hhcHRlckV4aXN0czogZmFsc2UgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q2hhcHRlcnMgPSAoaWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJjaGFwdGVyc1wiKVxyXG4gICAgLndoZXJlKFwic3RvcnlJZFwiLCBcIj09XCIsIGlkKVxyXG4gICAgLm9yZGVyQnkoXCJudW1iZXJcIiwgXCJhc2NcIilcclxuICAgIC5vblNuYXBzaG90KChkb2NzKSA9PiB7XHJcbiAgICAgIGxldCBhcnIgPSBbXTtcclxuICAgICAgZG9jcy5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgICAgICBhcnIucHVzaCh7XHJcbiAgICAgICAgICBhdXRob3JJZDogZG9jLmRhdGEoKS5hdXRob3JJZCxcclxuICAgICAgICAgIGlkOiBkb2MuaWQsXHJcbiAgICAgICAgICBjcmVhdGVkQXQ6IGRvYy5kYXRhKCkuY3JlYXRlZEF0LFxyXG4gICAgICAgICAgbnVtYmVyOiBkb2MuZGF0YSgpLm51bWJlcixcclxuICAgICAgICAgIHRpdGxlOiBkb2MuZGF0YSgpLnRpdGxlLFxyXG4gICAgICAgICAgY29tbWVudHNDb3VudDogZG9jLmRhdGEoKS5jb21tZW50c0NvdW50LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IHR5cGVzLkdFVF9DSEFQVEVSUyxcclxuICAgICAgICBwYXlsb2FkOiBhcnIsXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG4vLyBMT0NBVElPTlNcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRMb2NhdGlvbiA9IChkYXRhKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkaXNwYXRjaCh7IHR5cGU6IHR5cGVzLkFERF9MT0NBVElPTiwgcGF5bG9hZDogeyBsb2FkaW5nTG9jOiB0cnVlIH0gfSk7XHJcbiAgbGV0IGxvY0lkID0gXCJcIjtcclxuXHJcbiAgZGIuY29sbGVjdGlvbihcImxvY2F0aW9uc1wiKVxyXG4gICAgLmFkZCh7XHJcbiAgICAgIC4uLmRhdGEsXHJcbiAgICAgIGltYWdlOiB0eXBlb2YgZGF0YS5pbWFnZSA9PT0gXCJzdHJpbmdcIiA/IGRhdGEuaW1hZ2UgOiBcIlwiLFxyXG4gICAgICBjcmVhdGVkQXQ6IGZpcmViYXNlLmZpcmVzdG9yZS5GaWVsZFZhbHVlLnNlcnZlclRpbWVzdGFtcCgpLFxyXG4gICAgfSlcclxuICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgbG9jSWQgPSByZXMuaWQ7XHJcbiAgICAgIGlmICh0eXBlb2YgZGF0YS5pbWFnZSA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgIGNvbnN0IGltYWdlTmFtZSA9IGAke2xvY0lkfV8ke2RhdGEubmFtZVxyXG4gICAgICAgICAgLnRvTG93ZXJDYXNlKClcclxuICAgICAgICAgIC5zcGxpdChcIiBcIilcclxuICAgICAgICAgIC5qb2luKFwiX1wiKX1gO1xyXG4gICAgICAgIHN0b3JhZ2VcclxuICAgICAgICAgIC5yZWYoYCR7YXV0aC5jdXJyZW50VXNlci51aWR9LyR7aW1hZ2VOYW1lfWApXHJcbiAgICAgICAgICAucHV0KGRhdGEuaW1hZ2UpXHJcbiAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdG9yYWdlXHJcbiAgICAgICAgICAgICAgLnJlZihhdXRoLmN1cnJlbnRVc2VyLnVpZClcclxuICAgICAgICAgICAgICAuY2hpbGQoaW1hZ2VOYW1lKVxyXG4gICAgICAgICAgICAgIC5nZXREb3dubG9hZFVSTCgpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKCh1cmwpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGRiLmNvbGxlY3Rpb24oXCJsb2NhdGlvbnNcIikuZG9jKGxvY0lkKS51cGRhdGUoeyBpbWFnZTogdXJsIH0pO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgIHR5cGU6IHR5cGVzLkFERF9MT0NBVElPTixcclxuICAgICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkxvY2F0aW9uIGFkZGVkIHN1Y2Nlc3NmdWxseVwiLFxyXG4gICAgICAgICAgICAgICAgbG9jSWQ6IHJlcy5pZCxcclxuICAgICAgICAgICAgICAgIGxvYWRpbmdMb2M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogdHlwZXMuQUREX0xPQ0FUSU9OLFxyXG4gICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkxvY2F0aW9uIGFkZGVkIHN1Y2Nlc3NmdWxseVwiLFxyXG4gICAgICAgICAgICBsb2NJZDogcmVzLmlkLFxyXG4gICAgICAgICAgICBsb2FkaW5nTG9jOiBmYWxzZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBtZXNzYWdlLmVycm9yKGVyci5tZXNzYWdlKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGVkaXRMb2NhdGlvbiA9IChkYXRhKSA9PiAoZGlzcGF0Y2gpID0+IHt9O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldExvY2F0aW9uID0gKGlkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkYi5jb2xsZWN0aW9uKFwibG9jYXRpb25zXCIpXHJcbiAgICAuZG9jKGlkKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigoZG9jKSA9PiB7XHJcbiAgICAgIGlmIChkb2MuZXhpc3RzKSB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogdHlwZXMuR0VUX0xPQ0FUSU9OLFxyXG4gICAgICAgICAgcGF5bG9hZDogeyAuLi5kb2MuZGF0YSgpLCBpZDogZG9jLmlkIH0sXHJcbiAgICAgICAgICBsb2NhdGlvbkV4aXN0czogdHJ1ZSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiB0eXBlcy5HRVRfTE9DQVRJT04sXHJcbiAgICAgICAgICBsb2NhdGlvbkV4aXN0czogZmFsc2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlbGV0ZUxvY2F0aW9uID0gKGlkLCBuYW1lKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkaXNwYXRjaCh7IHR5cGU6IHR5cGVzLkRFTEVURV9DSEFQVEVSLCBwYXlsb2FkOiB7IGxvYWRpbmc6IHRydWUgfSB9KTtcclxuICBjb25zdCBiYXRjaCA9IGRiLmJhdGNoKCk7XHJcbiAgY29uc3QgaW1hZ2VOYW1lID0gYCR7aWR9XyR7bmFtZS50b0xvd2VyQ2FzZSgpLnNwbGl0KFwiIFwiKS5qb2luKFwiX1wiKX1gO1xyXG5cclxuICBiYXRjaC5kZWxldGUoZGIuY29sbGVjdGlvbihcImxvY2F0aW9uc1wiKS5kb2MoaWQpKTtcclxuICBkYi5jb2xsZWN0aW9uKFwiY2hhcHRlcnNcIilcclxuICAgIC53aGVyZShcImxvY2F0aW9uc1wiLCBcImFycmF5LWNvbnRhaW5zXCIsIGlkKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIHJlcy5mb3JFYWNoKChjaGFwKSA9PlxyXG4gICAgICAgIGJhdGNoLnVwZGF0ZShkYi5jb2xsZWN0aW9uKFwiY2hhcHRlcnNcIikuZG9jKGNoYXAuaWQpLCB7XHJcbiAgICAgICAgICBsb2NhdGlvbnM6IGNoYXAuZGF0YSgpLmxvY2F0aW9ucy5maWx0ZXIoKGMpID0+IGMgIT09IGlkKSxcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG5cclxuICAgICAgc3RvcmFnZVxyXG4gICAgICAgIC5yZWYoYCR7YXV0aC5jdXJyZW50VXNlci51aWR9LyR7aW1hZ2VOYW1lfWApXHJcbiAgICAgICAgLmRlbGV0ZSgpXHJcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgYmF0Y2guY29tbWl0KCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICB0eXBlOiB0eXBlcy5ERUxFVEVfQ0hBUFRFUixcclxuICAgICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiTG9jYXRpb24gZGVsZXRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgICAgICAgIGRlbGV0ZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgYmF0Y2guY29tbWl0KCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICB0eXBlOiB0eXBlcy5ERUxFVEVfQ0hBUFRFUixcclxuICAgICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiTG9jYXRpb24gZGVsZXRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgICAgICAgIGRlbGV0ZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VXNlckxvY2F0aW9ucyA9IChpZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgY29uc3QgdXNlcklkID0gaWQgPyBpZCA6IGF1dGguY3VycmVudFVzZXIudWlkO1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJsb2NhdGlvbnNcIilcclxuICAgIC53aGVyZShcImF1dGhvcklkXCIsIFwiPT1cIiwgdXNlcklkKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigoZG9jcykgPT4ge1xyXG4gICAgICBsZXQgbG9jYXRpb25zID0gW107XHJcbiAgICAgIGRvY3MuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICAgICAgbG9jYXRpb25zID0gWy4uLmxvY2F0aW9ucywgeyBpZDogZG9jLmlkLCAuLi5kb2MuZGF0YSgpIH1dO1xyXG4gICAgICB9KTtcclxuICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IHR5cGVzLkdFVF9VU0VSX0xPQ0FUSU9OUyxcclxuICAgICAgICBwYXlsb2FkOiBsb2NhdGlvbnMsXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RvcnlMb2NhdGlvbnMgPSAoc3RvcnlJZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGIuY29sbGVjdGlvbihcImxvY2F0aW9uc1wiKVxyXG4gICAgLndoZXJlKFwic3RvcnlJZFwiLCBcIj09XCIsIHN0b3J5SWQpXHJcbiAgICAuZ2V0KClcclxuICAgIC50aGVuKChkb2NzKSA9PiB7XHJcbiAgICAgIGNvbnN0IGxvY2F0aW9ucyA9IGRvY3MuZG9jcy5tYXAoKGRvYykgPT4gKHsgLi4uZG9jLmRhdGEoKSwgaWQ6IGRvYy5pZCB9KSk7XHJcbiAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiB0eXBlcy5HRVRfU1RPUllfTE9DQVRJT05TLFxyXG4gICAgICAgIHBheWxvYWQ6IGxvY2F0aW9ucyxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbi8vIENPTU1FTlRTXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q29tbWVudHMgPSAoaWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJjb21tZW50c1wiKVxyXG4gICAgLndoZXJlKFwiY2hhcHRlcklkXCIsIFwiPT1cIiwgaWQpXHJcbiAgICAub3JkZXJCeShcImNyZWF0ZWRBdFwiLCBcImRlc2NcIilcclxuICAgIC5vblNuYXBzaG90KChzbmFwKSA9PiB7XHJcbiAgICAgIGxldCBjb21tZW50cyA9IHNuYXAuZG9jcy5tYXAoKGNvbW1lbnQpID0+ICh7XHJcbiAgICAgICAgLi4uY29tbWVudC5kYXRhKCksXHJcbiAgICAgICAgaWQ6IGNvbW1lbnQuaWQsXHJcbiAgICAgIH0pKTtcclxuICAgICAgbGV0IHF1ZXJpZXMgPSBbXTtcclxuICAgICAgY29tbWVudHMuZm9yRWFjaCgoY29tbSkgPT4ge1xyXG4gICAgICAgIHF1ZXJpZXMucHVzaChkYi5jb2xsZWN0aW9uKFwidXNlcnNcIikuZG9jKGNvbW0udXNlcklkKS5nZXQoKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBQcm9taXNlLmFsbChxdWVyaWVzKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBjb21tZW50cyA9IGNvbW1lbnRzLm1hcCgoY29tbSkgPT4gKHtcclxuICAgICAgICAgIC4uLmNvbW0sXHJcbiAgICAgICAgICB1c2VySW1hZ2U6IHJlcy5maW5kKChkKSA9PiBkLmlkID09PSBjb21tLnVzZXJJZCkuZGF0YSgpLmltYWdlLFxyXG4gICAgICAgIH0pKTtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiB0eXBlcy5HRVRfQ09NTUVOVFMsXHJcbiAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgIGxvYWRpbmdDb21tZW50czogZmFsc2UsXHJcbiAgICAgICAgICAgIGNvbW1lbnRzLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzdWJtaXRDb21tZW50ID0gKGluZm8pID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGlmICghYXV0aC5jdXJyZW50VXNlci5lbWFpbFZlcmlmaWVkKVxyXG4gICAgcmV0dXJuIG1lc3NhZ2UuZXJyb3IoXCJZb3UgbmVlZCB0byB2ZXJpZnkgeW91ciBlbWFpbCBmaXJzdFwiKTtcclxuICBpZiAoIWluZm8uY29udGVudCkgcmV0dXJuIG1lc3NhZ2UuZXJyb3IoXCJDb250ZW50IG11c3Qgbm90IGJlIGVtcHR5XCIpO1xyXG5cclxuICBjb25zdCBiYXRjaCA9IGRiLmJhdGNoKCk7XHJcbiAgY29uc3Qgc3RvcnkgPSBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKS5kb2MoaW5mby5zdG9yeUlkKS5nZXQoKTtcclxuICBjb25zdCBjaGFwdGVyID0gZGIuY29sbGVjdGlvbihcImNoYXB0ZXJzXCIpLmRvYyhpbmZvLmNoYXB0ZXJJZCkuZ2V0KCk7XHJcblxyXG4gIFByb21pc2UuYWxsKFtzdG9yeSwgY2hhcHRlcl0pXHJcbiAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIGJhdGNoLnVwZGF0ZShkYi5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKS5kb2MoaW5mby5zdG9yeUlkKSwge1xyXG4gICAgICAgIGNvbW1lbnRzQ291bnQ6IHJlc1swXS5kYXRhKCkuY29tbWVudHNDb3VudCArIDEsXHJcbiAgICAgIH0pO1xyXG4gICAgICBiYXRjaC51cGRhdGUoZGIuY29sbGVjdGlvbihcImNoYXB0ZXJzXCIpLmRvYyhpbmZvLmNoYXB0ZXJJZCksIHtcclxuICAgICAgICBjb21tZW50c0NvdW50OiByZXNbMV0uZGF0YSgpLmNvbW1lbnRzQ291bnQgKyAxLFxyXG4gICAgICB9KTtcclxuICAgICAgYmF0Y2guY29tbWl0KCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgZGIuY29sbGVjdGlvbihcImNvbW1lbnRzXCIpXHJcbiAgICAgICAgICAuYWRkKHtcclxuICAgICAgICAgICAgLi4uaW5mbyxcclxuICAgICAgICAgICAgY3JlYXRlZEF0OiBmaXJlYmFzZS5maXJlc3RvcmUuRmllbGRWYWx1ZS5zZXJ2ZXJUaW1lc3RhbXAoKSxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbigoKSA9PiBtZXNzYWdlLnN1Y2Nlc3MoXCJDb21tZW50IHBvc3RlZCBzdWNjZXNzZnVsbHlcIikpO1xyXG4gICAgICB9KTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4gbWVzc2FnZS5lcnJvcihlcnIubWVzc2FnZSkpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlbGV0ZUNvbW1lbnQgPSAoaWQsIGNoYXBpZCwgc3RvcnlJZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgY29uc3QgYmF0Y2ggPSBkYi5iYXRjaCgpO1xyXG4gIGNvbnN0IHN0b3J5ID0gZGIuY29sbGVjdGlvbihcInN0b3JpZXNcIikuZG9jKHN0b3J5SWQpLmdldCgpO1xyXG4gIGNvbnN0IGNoYXB0ZXIgPSBkYi5jb2xsZWN0aW9uKFwiY2hhcHRlcnNcIikuZG9jKGNoYXBpZCkuZ2V0KCk7XHJcblxyXG4gIFByb21pc2UuYWxsKFtzdG9yeSwgY2hhcHRlcl0pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgYmF0Y2gudXBkYXRlKGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpLmRvYyhzdG9yeUlkKSwge1xyXG4gICAgICBjb21tZW50c0NvdW50OiByZXNbMF0uZGF0YSgpLmNvbW1lbnRzQ291bnQgLSAxLFxyXG4gICAgfSk7XHJcbiAgICBiYXRjaC51cGRhdGUoZGIuY29sbGVjdGlvbihcImNoYXB0ZXJzXCIpLmRvYyhjaGFwaWQpLCB7XHJcbiAgICAgIGNvbW1lbnRzQ291bnQ6IHJlc1sxXS5kYXRhKCkuY29tbWVudHNDb3VudCAtIDEsXHJcbiAgICB9KTtcclxuICAgIGJhdGNoLmNvbW1pdCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICBkYi5jb2xsZWN0aW9uKFwiY29tbWVudHNcIikuZG9jKGlkKS5kZWxldGUoKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBkYiwgYXV0aCB9IGZyb20gXCIuLi9mYkNvbmZpZ1wiO1xyXG5pbXBvcnQgeyB0eXBlcyB9IGZyb20gXCIuLi8uLi91dGlscy9jb25zdGFudHNcIjtcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcclxuaW1wb3J0IHsgbWVzc2FnZSB9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5leHBvcnQgY29uc3QgbG9nX2luID0gKGVtYWlsLCBwYXNzd29yZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgY29uc29sZS5sb2coZW1haWwsIHBhc3N3b3JkKTtcclxuICBhdXRoLnNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UHJvZmlsZSA9IChpZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGIuY29sbGVjdGlvbihcInVzZXJzXCIpXHJcbiAgICAuZG9jKGlkID8gaWQgOiBhdXRoLmN1cnJlbnRVc2VyLnVpZClcclxuICAgIC5vblNuYXBzaG90KChkb2MpID0+IHtcclxuICAgICAgcmV0dXJuIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiB0eXBlcy5HRVRfUFJPRklMRSxcclxuICAgICAgICBwYXlsb2FkOiB7IGlkOiBkb2MuaWQsIC4uLmRvYy5kYXRhKCkgfSxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRGYXZvcml0ZUF1dGhvcnMgPSAoaWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGxldCBhZGRlZE9uO1xyXG4gIGNvbnN0IHVzZXJJZCA9IGlkID8gaWQgOiBhdXRoLmN1cnJlbnRVc2VyLnVpZDtcclxuICBkYi5jb2xsZWN0aW9uKFwidXNlcnNMaWtlc1wiKVxyXG4gICAgLndoZXJlKFwic2VuZGVySWRcIiwgXCI9PVwiLCB1c2VySWQpXHJcbiAgICAuZ2V0KClcclxuICAgIC50aGVuKChkb2NzKSA9PiB7XHJcbiAgICAgIGxldCBmYXZBcnIgPSBbXTtcclxuICAgICAgZG9jcy5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgICAgICBhZGRlZE9uID0gZG9jLmRhdGEoKS5jcmVhdGVkQXQ7XHJcbiAgICAgICAgZmF2QXJyID0gWy4uLmZhdkFyciwgZG9jLmRhdGEoKS5yZWNpcGllbnRdO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGZhdkFycjtcclxuICAgIH0pXHJcbiAgICAudGhlbigodXNlcnMpID0+IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gdXNlcnMubWFwKCh1c2VyKSA9PlxyXG4gICAgICAgIGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKS5kb2ModXNlcikuZ2V0KClcclxuICAgICAgKTtcclxuICAgICAgUHJvbWlzZS5hbGwocmVzdWx0KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBsZXQgZmF2VXNlcnMgPSBbXTtcclxuICAgICAgICByZXMuZm9yRWFjaChcclxuICAgICAgICAgIChkb2MpID0+XHJcbiAgICAgICAgICAgIChmYXZVc2VycyA9IFsuLi5mYXZVc2VycywgeyBhZGRlZE9uLCBpZDogZG9jLmlkLCAuLi5kb2MuZGF0YSgpIH1dKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogdHlwZXMuR0VUX0ZBVk9SSVRFX0FVVEhPUlMsXHJcbiAgICAgICAgICBwYXlsb2FkOiBmYXZVc2VycyxcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRGb2xsb3dlcnMgPSAoaWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGxldCBhZGRlZE9uO1xyXG4gIGNvbnN0IHVzZXJJZCA9IGlkID8gaWQgOiBhdXRoLmN1cnJlbnRVc2VyLnVpZDtcclxuICBkYi5jb2xsZWN0aW9uKFwidXNlcnNMaWtlc1wiKVxyXG4gICAgLndoZXJlKFwicmVjaXBpZW50XCIsIFwiPT1cIiwgdXNlcklkKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigoZG9jcykgPT4ge1xyXG4gICAgICBsZXQgZmF2QXJyID0gW107XHJcbiAgICAgIGRvY3MuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICAgICAgYWRkZWRPbiA9IGRvYy5kYXRhKCkuY3JlYXRlZEF0O1xyXG4gICAgICAgIGZhdkFyciA9IFsuLi5mYXZBcnIsIGRvYy5kYXRhKCkuc2VuZGVySWRdO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGZhdkFycjtcclxuICAgIH0pXHJcbiAgICAudGhlbigodXNlcnMpID0+IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gdXNlcnMubWFwKCh1c2VyKSA9PlxyXG4gICAgICAgIGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKS5kb2ModXNlcikuZ2V0KClcclxuICAgICAgKTtcclxuICAgICAgUHJvbWlzZS5hbGwocmVzdWx0KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBsZXQgZmF2VXNlcnMgPSBbXTtcclxuICAgICAgICByZXMuZm9yRWFjaChcclxuICAgICAgICAgIChkb2MpID0+XHJcbiAgICAgICAgICAgIChmYXZVc2VycyA9IFsuLi5mYXZVc2VycywgeyBhZGRlZE9uLCBpZDogZG9jLmlkLCAuLi5kb2MuZGF0YSgpIH1dKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogdHlwZXMuR0VUX0ZPTExPV0VSUyxcclxuICAgICAgICAgIHBheWxvYWQ6IGZhdlVzZXJzLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldElzRm9sbG93aW5nID0gKHVzZXJJZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgaWYgKGF1dGguY3VycmVudFVzZXIpIHtcclxuICAgIGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc0xpa2VzXCIpXHJcbiAgICAgIC53aGVyZShcInJlY2lwaWVudFwiLCBcIj09XCIsIHVzZXJJZClcclxuICAgICAgLndoZXJlKFwic2VuZGVySWRcIiwgXCI9PVwiLCBhdXRoLmN1cnJlbnRVc2VyLnVpZClcclxuICAgICAgLm9uU25hcHNob3QoKHNuYXBzaG90KSA9PiB7XHJcbiAgICAgICAgY29uc3QgYW5zd2VyID0gc25hcHNob3QuZG9jcy5sZW5ndGggPiAwID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgIHJldHVybiBkaXNwYXRjaCh7IHR5cGU6IHR5cGVzLklTX0ZPTExPV0lORywgcGF5bG9hZDogYW5zd2VyIH0pO1xyXG4gICAgICB9KTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZm9sbG93VXNlciA9IChpZCwgaXNGYXZvcml0ZSwgbmV3Rm9sbG93ZXIpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGlmIChpc0Zhdm9yaXRlKSByZXR1cm4gbWVzc2FnZS53YXJuaW5nKFwiWW91IGFyZSBhbHJlYWR5IGZvbGxvd2luZyB0aGlzIHVzZXJcIik7XHJcbiAgaWYgKCFhdXRoLmN1cnJlbnRVc2VyKVxyXG4gICAgcmV0dXJuIG1lc3NhZ2UuZXJyb3IoXCJZb3UgbmVlZCB0byBiZSBsb2dnZWQgaW4gdG8gZm9sbG93IHVzZXJzXCIpO1xyXG4gIGlmICghYXV0aC5jdXJyZW50VXNlci5lbWFpbFZlcmlmaWVkKVxyXG4gICAgcmV0dXJuIG1lc3NhZ2UuZXJyb3IoXCJZb3UgbmVlZCB0byB2ZXJpZnkgeW91ciBlbWFpbCBmaXJzdFwiKTtcclxuXHJcbiAgZGIuY29sbGVjdGlvbihcInVzZXJzTGlrZXNcIilcclxuICAgIC5hZGQoe1xyXG4gICAgICBzZW5kZXI6IG5ld0ZvbGxvd2VyLnVzZXJuYW1lLFxyXG4gICAgICBzZW5kZXJJZDogbmV3Rm9sbG93ZXIudWlkLFxyXG4gICAgICByZWNpcGllbnQ6IGlkLFxyXG4gICAgICBjcmVhdGVkQXQ6IGZpcmViYXNlLmZpcmVzdG9yZS5GaWVsZFZhbHVlLnNlcnZlclRpbWVzdGFtcCgpLFxyXG4gICAgfSlcclxuICAgIC50aGVuKCgpID0+IG1lc3NhZ2Uuc3VjY2VzcyhcIllvdSBhcmUgbm93IGZvbGxvd2luZyB0aGlzIHVzZXJcIikpXHJcbiAgICAuY2F0Y2goKGVycikgPT4gbWVzc2FnZS5lcnJvcihcIlRoZXJlIGhhcyBiZWVuIGEgcHJvYmxlbVwiKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdW5mb2xsb3dVc2VyID0gKGlkLCBpc0Zhdm9yaXRlKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBpZiAoIWlzRmF2b3JpdGUpXHJcbiAgICByZXR1cm4gbWVzc2FnZS53YXJuaW5nKFwiWW91IGFyZSBub3QgZm9sbG93aW5nIHRoaXMgdXNlciB5ZXRcIik7XHJcblxyXG4gIGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc0xpa2VzXCIpXHJcbiAgICAud2hlcmUoXCJyZWNpcGllbnRcIiwgXCI9PVwiLCBpZClcclxuICAgIC53aGVyZShcInNlbmRlcklkXCIsIFwiPT1cIiwgYXV0aC5jdXJyZW50VXNlci51aWQpXHJcbiAgICAuZ2V0KClcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiBkYi5jb2xsZWN0aW9uKFwidXNlcnNMaWtlc1wiKS5kb2MoZGF0YS5kb2NzWzBdLmlkKS5kZWxldGUoKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoKSA9PiBtZXNzYWdlLnN1Y2Nlc3MoXCJVc2VyIHN1Y2Nlc3NmdWxseSB1bmZvbGxvd2VkXCIpKVxyXG4gICAgLmNhdGNoKChlcnIpID0+IG1lc3NhZ2UuZXJyb3IoXCJUaGVyZSBoYXMgYmVlbiBhIHByb2JsZW1cIikpO1xyXG59O1xyXG4iLCJpbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlL2FwcFwiO1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9hdXRoXCI7XHJcbmltcG9ydCBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9zdG9yYWdlXCI7XHJcblxyXG5jb25zdCBwcm9kQ29uZmlnID0ge1xyXG4gIGFwaUtleTogcHJvY2Vzcy5lbnYuRklSRUJBU0VfQVBJX0tFWSxcclxuICBhdXRoRG9tYWluOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9BVVRIX0RPTUFJTixcclxuICBkYXRhYmFzZVVSTDogcHJvY2Vzcy5lbnYuRklSRUJBU0VfREFUQUJBU0VfVVJMLFxyXG4gIHByb2plY3RJZDogcHJvY2Vzcy5lbnYuRklSRUJBU0VfUFJPSkVDVF9JRCxcclxuICBzdG9yYWdlQnVja2V0OiBwcm9jZXNzLmVudi5GSVJFQkFTRV9TVE9SQUdFX0JVQ0tFVCxcclxuICBtZXNzYWdpbmdTZW5kZXJJZDogcHJvY2Vzcy5lbnYuRklSRUJBU0VfTUVTU0FHSU5HX1NFTkRFUl9JRCxcclxuICBhcHBJZDogcHJvY2Vzcy5lbnYuRklSRUJBU0VfQVBQX0lELFxyXG59O1xyXG5cclxuY29uc3QgZGV2Q29uZmlnID0ge1xyXG4gIGFwaUtleTogcHJvY2Vzcy5lbnYuRklSRUJBU0VfQVBJX0tFWSxcclxuICBhdXRoRG9tYWluOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9BVVRIX0RPTUFJTixcclxuICBkYXRhYmFzZVVSTDogcHJvY2Vzcy5lbnYuRklSRUJBU0VfREFUQUJBU0VfVVJMLFxyXG4gIHByb2plY3RJZDogcHJvY2Vzcy5lbnYuRklSRUJBU0VfUFJPSkVDVF9JRCxcclxuICBzdG9yYWdlQnVja2V0OiBwcm9jZXNzLmVudi5GSVJFQkFTRV9TVE9SQUdFX0JVQ0tFVCxcclxuICBtZXNzYWdpbmdTZW5kZXJJZDogcHJvY2Vzcy5lbnYuRklSRUJBU0VfTUVTU0FHSU5HX1NFTkRFUl9JRCxcclxuICBhcHBJZDogcHJvY2Vzcy5lbnYuRklSRUJBU0VfQVBQX0lELFxyXG59O1xyXG5cclxuY29uc3QgY29uZmlnID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gcHJvZENvbmZpZyA6IGRldkNvbmZpZztcclxuXHJcbmlmICghZmlyZWJhc2UuYXBwcy5sZW5ndGgpIHtcclxuICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGNvbmZpZyk7XHJcbn1cclxuXHJcbmNvbnN0IGRiID0gZmlyZWJhc2UuZmlyZXN0b3JlKCk7XHJcbmNvbnN0IGF1dGggPSBmaXJlYmFzZS5hdXRoKCk7XHJcbmNvbnN0IHN0b3JhZ2UgPSBmaXJlYmFzZS5zdG9yYWdlKCk7XHJcblxyXG5leHBvcnQgeyBkYiwgYXV0aCwgc3RvcmFnZSB9O1xyXG5leHBvcnQgZGVmYXVsdCBjb25maWc7XHJcbiIsImV4cG9ydCBjb25zdCBDQVRFR09SSUVTID0gW1xyXG4gIHsgbmFtZTogXCJEcmFtYVwiLCB2YWx1ZTogXCJkcmFtYVwiIH0sXHJcbiAgeyBuYW1lOiBcIkNvbWVkeVwiLCB2YWx1ZTogXCJjb21lZHlcIiB9LFxyXG4gIHsgbmFtZTogXCJIb3Jyb3JcIiwgdmFsdWU6IFwiaG9ycm9yXCIgfSxcclxuICB7IG5hbWU6IFwiUm9tYW5jZVwiLCB2YWx1ZTogXCJyb21hbmNlXCIgfSxcclxuICB7IG5hbWU6IFwiU2NpLWZpXCIsIHZhbHVlOiBcInNjaS1maVwiIH0sXHJcbiAgeyBuYW1lOiBcIkZhbnRhc3lcIiwgdmFsdWU6IFwiZmFudGFzeVwiIH0sXHJcbiAgeyBuYW1lOiBcIkh1bW9yXCIsIHZhbHVlOiBcImh1bW9yXCIgfSxcclxuICB7IG5hbWU6IFwiQWN0aW9uXCIsIHZhbHVlOiBcImFjdGlvblwiIH0sXHJcbiAgeyBuYW1lOiBcIlRocmlsbGVyXCIsIHZhbHVlOiBcInRocmlsbGVyXCIgfSxcclxuICB7IG5hbWU6IFwiU3VwZXJuYXR1cmFsXCIsIHZhbHVlOiBcInN1cGVybmF0dXJhbFwiIH0sXHJcbiAgeyBuYW1lOiBcIkFkdmVudHVyZVwiLCB2YWx1ZTogXCJhZHZlbnR1cmVcIiB9LFxyXG4gIHsgbmFtZTogXCJNeXN0ZXJ5XCIsIHZhbHVlOiBcIm15c3RlcnlcIiB9LFxyXG4gIHsgbmFtZTogXCJXZXN0ZXJuXCIsIHZhbHVlOiBcIndlc3Rlcm5cIiB9LFxyXG4gIHsgbmFtZTogXCJIaXN0b3J5XCIsIHZhbHVlOiBcImhpc3RvcnlcIiB9LFxyXG4gIHsgbmFtZTogXCJDcmltZVwiLCB2YWx1ZTogXCJjcmltZVwiIH0sXHJcbiAgeyBuYW1lOiBcIkZhbmZpY3Rpb25cIiwgdmFsdWU6IFwiZmFuZmljdGlvblwiIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgQ09QWVJJR0hUUyA9IFtcclxuICB7IG5hbWU6IFwiUHVibGljIERvbWFpblwiLCB2YWx1ZTogXCJwdWJsaWMgZG9tYWluXCIgfSxcclxuICB7IG5hbWU6IFwiQWxsIFJpZ2h0cyBSZXNlcnZlZFwiLCB2YWx1ZTogXCJhbGwgcmlnaHRzIHJlc2VydmVkXCIgfSxcclxuICB7IG5hbWU6IFwiQ3JlYXRpdmUgQ29tbW9uc1wiLCB2YWx1ZTogXCJjcmVhdGl2ZSBjb21tb25zXCIgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBMQU5HVUFHRVMgPSBbXHJcbiAgeyBuYW1lOiBcIkFmYXJcIiwgdmFsdWU6IFwiYWFcIiB9LFxyXG4gIHsgbmFtZTogXCJBYmtoYXppYW5cIiwgdmFsdWU6IFwiYWJcIiB9LFxyXG4gIHsgbmFtZTogXCJBdmVzdGFuXCIsIHZhbHVlOiBcImFlXCIgfSxcclxuICB7IG5hbWU6IFwiQWZyaWthYW5zXCIsIHZhbHVlOiBcImFmXCIgfSxcclxuICB7IG5hbWU6IFwiQWthblwiLCB2YWx1ZTogXCJha1wiIH0sXHJcbiAgeyBuYW1lOiBcIkFtaGFyaWNcIiwgdmFsdWU6IFwiYW1cIiB9LFxyXG4gIHsgbmFtZTogXCJBcmFnb25lc2VcIiwgdmFsdWU6IFwiYW5cIiB9LFxyXG4gIHsgbmFtZTogXCJBcmFiaWNcIiwgdmFsdWU6IFwiYXJcIiB9LFxyXG4gIHsgbmFtZTogXCJBc3NhbWVzZVwiLCB2YWx1ZTogXCJhc1wiIH0sXHJcbiAgeyBuYW1lOiBcIkF2YXJpY1wiLCB2YWx1ZTogXCJhdlwiIH0sXHJcbiAgeyBuYW1lOiBcIkF5bWFyYVwiLCB2YWx1ZTogXCJheVwiIH0sXHJcbiAgeyBuYW1lOiBcIkF6ZXJiYWlqYW5pXCIsIHZhbHVlOiBcImF6XCIgfSxcclxuICB7IG5hbWU6IFwiQmFzaGtpclwiLCB2YWx1ZTogXCJiYVwiIH0sXHJcbiAgeyBuYW1lOiBcIkJlbGFydXNpYW5cIiwgdmFsdWU6IFwiYmVcIiB9LFxyXG4gIHsgbmFtZTogXCJCdWxnYXJpYW5cIiwgdmFsdWU6IFwiYmdcIiB9LFxyXG4gIHsgbmFtZTogXCJCaWhhcmlcIiwgdmFsdWU6IFwiYmhcIiB9LFxyXG4gIHsgbmFtZTogXCJCaXNsYW1hXCIsIHZhbHVlOiBcImJpXCIgfSxcclxuICB7IG5hbWU6IFwiQmFtYmFyYVwiLCB2YWx1ZTogXCJibVwiIH0sXHJcbiAgeyBuYW1lOiBcIkJlbmdhbGlcIiwgdmFsdWU6IFwiYm5cIiB9LFxyXG4gIHsgbmFtZTogXCJUaWJldGFuXCIsIHZhbHVlOiBcImJvXCIgfSxcclxuICB7IG5hbWU6IFwiQnJldG9uXCIsIHZhbHVlOiBcImJyXCIgfSxcclxuICB7IG5hbWU6IFwiQm9zbmlhblwiLCB2YWx1ZTogXCJic1wiIH0sXHJcbiAgeyBuYW1lOiBcIkNhdGFsYW5cIiwgdmFsdWU6IFwiY2FcIiB9LFxyXG4gIHsgbmFtZTogXCJDaGVjaGVuXCIsIHZhbHVlOiBcImNlXCIgfSxcclxuICB7IG5hbWU6IFwiQ2hhbW9ycm9cIiwgdmFsdWU6IFwiY2hcIiB9LFxyXG4gIHsgbmFtZTogXCJDb3JzaWNhblwiLCB2YWx1ZTogXCJjb1wiIH0sXHJcbiAgeyBuYW1lOiBcIkNyZWVcIiwgdmFsdWU6IFwiY3JcIiB9LFxyXG4gIHsgbmFtZTogXCJDemVjaFwiLCB2YWx1ZTogXCJjc1wiIH0sXHJcbiAgeyBuYW1lOiBcIk9sZCBDaHVyY2ggU2xhdm9uaWNcIiwgdmFsdWU6IFwiY3VcIiB9LFxyXG4gIHsgbmFtZTogXCJDaHV2YXNoXCIsIHZhbHVlOiBcImN2XCIgfSxcclxuICB7IG5hbWU6IFwiV2Vsc2hcIiwgdmFsdWU6IFwiY3lcIiB9LFxyXG4gIHsgbmFtZTogXCJEYW5pc2hcIiwgdmFsdWU6IFwiZGFcIiB9LFxyXG4gIHsgbmFtZTogXCJHZXJtYW5cIiwgdmFsdWU6IFwiZGVcIiB9LFxyXG4gIHsgbmFtZTogXCJEaXZlaGlcIiwgdmFsdWU6IFwiZHZcIiB9LFxyXG4gIHsgbmFtZTogXCJEem9uZ2toYVx0XCIsIHZhbHVlOiBcImR6XCIgfSxcclxuICB7IG5hbWU6IFwiRXdlXCIsIHZhbHVlOiBcImVlXCIgfSxcclxuICB7IG5hbWU6IFwiR3JlZWtcIiwgdmFsdWU6IFwiZWxcIiB9LFxyXG4gIHsgbmFtZTogXCJFbmdsaXNoXCIsIHZhbHVlOiBcImVuXCIgfSxcclxuICB7IG5hbWU6IFwiRXNwZXJhbnRvXCIsIHZhbHVlOiBcImVvXCIgfSxcclxuICB7IG5hbWU6IFwiU3BhbmlzaFwiLCB2YWx1ZTogXCJlc1wiIH0sXHJcbiAgeyBuYW1lOiBcIkVzdG9uaWFuXCIsIHZhbHVlOiBcImV0XCIgfSxcclxuICB7IG5hbWU6IFwiQmFzcXVlXCIsIHZhbHVlOiBcImV1XCIgfSxcclxuICB7IG5hbWU6IFwiUGVyc2lhblwiLCB2YWx1ZTogXCJmYVwiIH0sXHJcbiAgeyBuYW1lOiBcIkZ1bGFoXCIsIHZhbHVlOiBcImZmXCIgfSxcclxuICB7IG5hbWU6IFwiRmlubmlzaFwiLCB2YWx1ZTogXCJmaVwiIH0sXHJcbiAgeyBuYW1lOiBcIkZpamlhblwiLCB2YWx1ZTogXCJmalwiIH0sXHJcbiAgeyBuYW1lOiBcIkZhcm9lc2VcIiwgdmFsdWU6IFwiZm9cIiB9LFxyXG4gIHsgbmFtZTogXCJGcmVuY2hcIiwgdmFsdWU6IFwiZnJcIiB9LFxyXG4gIHsgbmFtZTogXCJXZXN0ZXJuIEZyaXNpYW5cIiwgdmFsdWU6IFwiZnlcIiB9LFxyXG4gIHsgbmFtZTogXCJJcmlzaFwiLCB2YWx1ZTogXCJnYVwiIH0sXHJcbiAgeyBuYW1lOiBcIlNjb3R0aXNoIEdhZWxpY1wiLCB2YWx1ZTogXCJnZFwiIH0sXHJcbiAgeyBuYW1lOiBcIkdhbGljaWFuXCIsIHZhbHVlOiBcImdsXCIgfSxcclxuICB7IG5hbWU6IFwiR3VhcmFuaVwiLCB2YWx1ZTogXCJnblwiIH0sXHJcbiAgeyBuYW1lOiBcIkd1amFyYXRpXCIsIHZhbHVlOiBcImd1XCIgfSxcclxuICB7IG5hbWU6IFwiTWFueFwiLCB2YWx1ZTogXCJndlwiIH0sXHJcbiAgeyBuYW1lOiBcIkhhdXNhXCIsIHZhbHVlOiBcImhhXCIgfSxcclxuICB7IG5hbWU6IFwiSGVicmV3XCIsIHZhbHVlOiBcImhlXCIgfSxcclxuICB7IG5hbWU6IFwiSGluZGlcIiwgdmFsdWU6IFwiaGlcIiB9LFxyXG4gIHsgbmFtZTogXCJIaXJpIE1vdHVcIiwgdmFsdWU6IFwiaG9cIiB9LFxyXG4gIHsgbmFtZTogXCJDcm9hdGlhblwiLCB2YWx1ZTogXCJoclwiIH0sXHJcbiAgeyBuYW1lOiBcIkhhaXRpYW5cIiwgdmFsdWU6IFwiaHRcIiB9LFxyXG4gIHsgbmFtZTogXCJIdW5nYXJpYW5cIiwgdmFsdWU6IFwiaHVcIiB9LFxyXG4gIHsgbmFtZTogXCJBcm1lbmlhblwiLCB2YWx1ZTogXCJoeVwiIH0sXHJcbiAgeyBuYW1lOiBcIkhlcmVyb1wiLCB2YWx1ZTogXCJoelwiIH0sXHJcbiAgeyBuYW1lOiBcIkludGVybGluZ3VhXCIsIHZhbHVlOiBcImlhXCIgfSxcclxuICB7IG5hbWU6IFwiSW5kb25lc2lhblwiLCB2YWx1ZTogXCJpZFwiIH0sXHJcbiAgeyBuYW1lOiBcIkludGVybGluZ3VlXCIsIHZhbHVlOiBcImllXCIgfSxcclxuICB7IG5hbWU6IFwiSWdib1wiLCB2YWx1ZTogXCJpZ1wiIH0sXHJcbiAgeyBuYW1lOiBcIlNpY2h1YW4gWWlcIiwgdmFsdWU6IFwiaWlcIiB9LFxyXG4gIHsgbmFtZTogXCJJbnVwaWFxXCIsIHZhbHVlOiBcImlrXCIgfSxcclxuICB7IG5hbWU6IFwiSWRvXCIsIHZhbHVlOiBcImlvXCIgfSxcclxuICB7IG5hbWU6IFwiSWNlbGFuZGljXCIsIHZhbHVlOiBcImlzXCIgfSxcclxuICB7IG5hbWU6IFwiSXRhbGlhblwiLCB2YWx1ZTogXCJpdFwiIH0sXHJcbiAgeyBuYW1lOiBcIkludWt0aXR1dFwiLCB2YWx1ZTogXCJpdVwiIH0sXHJcbiAgeyBuYW1lOiBcIkphcGFuZXNlXCIsIHZhbHVlOiBcImphXCIgfSxcclxuICB7IG5hbWU6IFwiSmF2YW5lc2VcIiwgdmFsdWU6IFwianZcIiB9LFxyXG4gIHsgbmFtZTogXCJHZW9yZ2lhblwiLCB2YWx1ZTogXCJrYVwiIH0sXHJcbiAgeyBuYW1lOiBcIktvbmdvXCIsIHZhbHVlOiBcImtnXCIgfSxcclxuICB7IG5hbWU6IFwiS2lrdXl1XCIsIHZhbHVlOiBcImtpXCIgfSxcclxuICB7IG5hbWU6IFwiS3dhbnlhbWFcIiwgdmFsdWU6IFwia2pcIiB9LFxyXG4gIHsgbmFtZTogXCJLYXpha2hcIiwgdmFsdWU6IFwia2tcIiB9LFxyXG4gIHsgbmFtZTogXCJHcmVlbmxhbmRpY1wiLCB2YWx1ZTogXCJrbFwiIH0sXHJcbiAgeyBuYW1lOiBcIktobWVyXCIsIHZhbHVlOiBcImttXCIgfSxcclxuICB7IG5hbWU6IFwiS2FubmFkYVwiLCB2YWx1ZTogXCJrblwiIH0sXHJcbiAgeyBuYW1lOiBcIktvcmVhblwiLCB2YWx1ZTogXCJrb1wiIH0sXHJcbiAgeyBuYW1lOiBcIkthbnVyaVwiLCB2YWx1ZTogXCJrclwiIH0sXHJcbiAgeyBuYW1lOiBcIkthc2htaXJpXCIsIHZhbHVlOiBcImtzXCIgfSxcclxuICB7IG5hbWU6IFwiS3VyZGlzaFwiLCB2YWx1ZTogXCJrdVwiIH0sXHJcbiAgeyBuYW1lOiBcIktvbWlcIiwgdmFsdWU6IFwia3ZcIiB9LFxyXG4gIHsgbmFtZTogXCJDb3JuaXNoXCIsIHZhbHVlOiBcImt3XCIgfSxcclxuICB7IG5hbWU6IFwiS2lyZ2hpelwiLCB2YWx1ZTogXCJreVwiIH0sXHJcbiAgeyBuYW1lOiBcIkxhdGluXCIsIHZhbHVlOiBcImxhXCIgfSxcclxuICB7IG5hbWU6IFwiTHV4ZW1ib3VyZ2lzaFwiLCB2YWx1ZTogXCJsYlwiIH0sXHJcbiAgeyBuYW1lOiBcIkdhbmRhXCIsIHZhbHVlOiBcImxnXCIgfSxcclxuICB7IG5hbWU6IFwiTGltYnVyZ2lzaFwiLCB2YWx1ZTogXCJsaVwiIH0sXHJcbiAgeyBuYW1lOiBcIkxpbmdhbGFcIiwgdmFsdWU6IFwibG5cIiB9LFxyXG4gIHsgbmFtZTogXCJMYW9cIiwgdmFsdWU6IFwibG9cIiB9LFxyXG4gIHsgbmFtZTogXCJMaXRodWFuaWFuXCIsIHZhbHVlOiBcImx0XCIgfSxcclxuICB7IG5hbWU6IFwiTHViYVwiLCB2YWx1ZTogXCJsdVwiIH0sXHJcbiAgeyBuYW1lOiBcIkxhdHZpYW5cIiwgdmFsdWU6IFwibHZcIiB9LFxyXG4gIHsgbmFtZTogXCJNYWxhZ2FzeVwiLCB2YWx1ZTogXCJtZ1wiIH0sXHJcbiAgeyBuYW1lOiBcIk1hcnNoYWxsZXNlXCIsIHZhbHVlOiBcIm1oXCIgfSxcclxuICB7IG5hbWU6IFwiTcSBb3JpXCIsIHZhbHVlOiBcIm1pXCIgfSxcclxuICB7IG5hbWU6IFwiTWFjZWRvbmlhblwiLCB2YWx1ZTogXCJta1wiIH0sXHJcbiAgeyBuYW1lOiBcIk1hbGF5YWxhbVwiLCB2YWx1ZTogXCJtbFwiIH0sXHJcbiAgeyBuYW1lOiBcIk1vbmdvbGlhblwiLCB2YWx1ZTogXCJtblwiIH0sXHJcbiAgeyBuYW1lOiBcIk1vbGRhdmlhblwiLCB2YWx1ZTogXCJtb1wiIH0sXHJcbiAgeyBuYW1lOiBcIk1hcmF0aGlcIiwgdmFsdWU6IFwibXJcIiB9LFxyXG4gIHsgbmFtZTogXCJNYWxheVwiLCB2YWx1ZTogXCJtc1wiIH0sXHJcbiAgeyBuYW1lOiBcIk1hbHRlc2VcIiwgdmFsdWU6IFwibXRcIiB9LFxyXG4gIHsgbmFtZTogXCJCdXJtZXNlXCIsIHZhbHVlOiBcIm15XCIgfSxcclxuICB7IG5hbWU6IFwiTmF1cnVcIiwgdmFsdWU6IFwibmFcIiB9LFxyXG4gIHsgbmFtZTogXCJOb3J3ZWdpYW4gQm9rbcOlbFwiLCB2YWx1ZTogXCJuYlwiIH0sXHJcbiAgeyBuYW1lOiBcIk5vcnRoIE5kZWJlbGVcIiwgdmFsdWU6IFwibmRcIiB9LFxyXG4gIHsgbmFtZTogXCJOZXBhbGlcIiwgdmFsdWU6IFwibmVcIiB9LFxyXG4gIHsgbmFtZTogXCJOZG9uZ2FcIiwgdmFsdWU6IFwibmdcIiB9LFxyXG4gIHsgbmFtZTogXCJEdXRjaFwiLCB2YWx1ZTogXCJubFwiIH0sXHJcbiAgeyBuYW1lOiBcIk5vcndlZ2lhbiBOeW5vcnNrXCIsIHZhbHVlOiBcIm5uXCIgfSxcclxuICB7IG5hbWU6IFwiTm9yd2VnaWFuXCIsIHZhbHVlOiBcIm5vXCIgfSxcclxuICB7IG5hbWU6IFwiU291dGggTmRlYmVsZVwiLCB2YWx1ZTogXCJuclwiIH0sXHJcbiAgeyBuYW1lOiBcIk5hdmFqb1wiLCB2YWx1ZTogXCJudlwiIH0sXHJcbiAgeyBuYW1lOiBcIkNoaWNoZXdhXCIsIHZhbHVlOiBcIm55XCIgfSxcclxuICB7IG5hbWU6IFwiT2NjaXRhblwiLCB2YWx1ZTogXCJvY1wiIH0sXHJcbiAgeyBuYW1lOiBcIk9qaWJ3YVwiLCB2YWx1ZTogXCJvalwiIH0sXHJcbiAgeyBuYW1lOiBcIk9yb21vXCIsIHZhbHVlOiBcIm9tXCIgfSxcclxuICB7IG5hbWU6IFwiT3JpeWFcIiwgdmFsdWU6IFwib3JcIiB9LFxyXG4gIHsgbmFtZTogXCJPc3NldGlhblwiLCB2YWx1ZTogXCJvc1wiIH0sXHJcbiAgeyBuYW1lOiBcIlBhbmphYmlcIiwgdmFsdWU6IFwicGFcIiB9LFxyXG4gIHsgbmFtZTogXCJQxIFsaVwiLCB2YWx1ZTogXCJwaVwiIH0sXHJcbiAgeyBuYW1lOiBcIlBvbGlzaFwiLCB2YWx1ZTogXCJwbFwiIH0sXHJcbiAgeyBuYW1lOiBcIlBhc2h0b1wiLCB2YWx1ZTogXCJwc1wiIH0sXHJcbiAgeyBuYW1lOiBcIlBvcnR1Z3Vlc2VcIiwgdmFsdWU6IFwicHRcIiB9LFxyXG4gIHsgbmFtZTogXCJRdWVjaHVhXCIsIHZhbHVlOiBcInF1XCIgfSxcclxuICB7IG5hbWU6IFwiUmV1bmlvbmVzZVwiLCB2YWx1ZTogXCJyY1wiIH0sXHJcbiAgeyBuYW1lOiBcIlJvbWFuc2hcIiwgdmFsdWU6IFwicm1cIiB9LFxyXG4gIHsgbmFtZTogXCJLaXJ1bmRpXCIsIHZhbHVlOiBcInJuXCIgfSxcclxuICB7IG5hbWU6IFwiUm9tYW5pYW5cIiwgdmFsdWU6IFwicm9cIiB9LFxyXG4gIHsgbmFtZTogXCJSdXNzaWFuXCIsIHZhbHVlOiBcInJ1XCIgfSxcclxuICB7IG5hbWU6IFwiS2lueWFyd2FuZGFcIiwgdmFsdWU6IFwicndcIiB9LFxyXG4gIHsgbmFtZTogXCJTYW5za3JpdFwiLCB2YWx1ZTogXCJzYVwiIH0sXHJcbiAgeyBuYW1lOiBcIlNhcmRpbmlhblwiLCB2YWx1ZTogXCJzY1wiIH0sXHJcbiAgeyBuYW1lOiBcIlNpbmRoaVwiLCB2YWx1ZTogXCJzZFwiIH0sXHJcbiAgeyBuYW1lOiBcIk5vcnRoZXJuIFNhbWlcIiwgdmFsdWU6IFwic2VcIiB9LFxyXG4gIHsgbmFtZTogXCJTYW5nb1wiLCB2YWx1ZTogXCJzZ1wiIH0sXHJcbiAgeyBuYW1lOiBcIlNlcmJvLUNyb2F0aWFuXCIsIHZhbHVlOiBcInNoXCIgfSxcclxuICB7IG5hbWU6IFwiU2luaGFsZXNlXCIsIHZhbHVlOiBcInNpXCIgfSxcclxuICB7IG5hbWU6IFwiU2xvdmFrXCIsIHZhbHVlOiBcInNrXCIgfSxcclxuICB7IG5hbWU6IFwiU2xvdmVuaWFuXCIsIHZhbHVlOiBcInNsXCIgfSxcclxuICB7IG5hbWU6IFwiU2Ftb2FuXCIsIHZhbHVlOiBcInNtXCIgfSxcclxuICB7IG5hbWU6IFwiU2hvbmFcIiwgdmFsdWU6IFwic25cIiB9LFxyXG4gIHsgbmFtZTogXCJTb21hbGlcIiwgdmFsdWU6IFwic29cIiB9LFxyXG4gIHsgbmFtZTogXCJBbGJhbmlhblwiLCB2YWx1ZTogXCJzcVwiIH0sXHJcbiAgeyBuYW1lOiBcIlNlcmJpYW5cIiwgdmFsdWU6IFwic3JcIiB9LFxyXG4gIHsgbmFtZTogXCJTd2F0aVwiLCB2YWx1ZTogXCJzc1wiIH0sXHJcbiAgeyBuYW1lOiBcIlNvdGhvXCIsIHZhbHVlOiBcInN0XCIgfSxcclxuICB7IG5hbWU6IFwiU3VuZGFuZXNlXCIsIHZhbHVlOiBcInN1XCIgfSxcclxuICB7IG5hbWU6IFwiU3dlZGlzaFwiLCB2YWx1ZTogXCJzdlwiIH0sXHJcbiAgeyBuYW1lOiBcIlN3YWhpbGlcIiwgdmFsdWU6IFwic3dcIiB9LFxyXG4gIHsgbmFtZTogXCJUYW1pbFwiLCB2YWx1ZTogXCJ0YVwiIH0sXHJcbiAgeyBuYW1lOiBcIlRlbHVndVwiLCB2YWx1ZTogXCJ0ZVwiIH0sXHJcbiAgeyBuYW1lOiBcIlRhamlrXCIsIHZhbHVlOiBcInRnXCIgfSxcclxuICB7IG5hbWU6IFwiVGhhaVwiLCB2YWx1ZTogXCJ0aFwiIH0sXHJcbiAgeyBuYW1lOiBcIlRpZ3JpbnlhXCIsIHZhbHVlOiBcInRpXCIgfSxcclxuICB7IG5hbWU6IFwiVHVya21lblwiLCB2YWx1ZTogXCJ0a1wiIH0sXHJcbiAgeyBuYW1lOiBcIlRhZ2Fsb2dcIiwgdmFsdWU6IFwidGxcIiB9LFxyXG4gIHsgbmFtZTogXCJUc3dhbmFcIiwgdmFsdWU6IFwidG5cIiB9LFxyXG4gIHsgbmFtZTogXCJUb25nYVwiLCB2YWx1ZTogXCJ0b1wiIH0sXHJcbiAgeyBuYW1lOiBcIlR1cmtpc2hcIiwgdmFsdWU6IFwidHJcIiB9LFxyXG4gIHsgbmFtZTogXCJUc29uZ2FcIiwgdmFsdWU6IFwidHNcIiB9LFxyXG4gIHsgbmFtZTogXCJUYXRhclwiLCB2YWx1ZTogXCJ0dFwiIH0sXHJcbiAgeyBuYW1lOiBcIlR3aVwiLCB2YWx1ZTogXCJ0d1wiIH0sXHJcbiAgeyBuYW1lOiBcIlRhaGl0aWFuXCIsIHZhbHVlOiBcInR5XCIgfSxcclxuICB7IG5hbWU6IFwiVWlnaHVyXCIsIHZhbHVlOiBcInVnXCIgfSxcclxuICB7IG5hbWU6IFwiVWtyYWluaWFuXCIsIHZhbHVlOiBcInVrXCIgfSxcclxuICB7IG5hbWU6IFwiVXJkdVwiLCB2YWx1ZTogXCJ1clwiIH0sXHJcbiAgeyBuYW1lOiBcIlV6YmVrXCIsIHZhbHVlOiBcInV6XCIgfSxcclxuICB7IG5hbWU6IFwiVmVuZGFcIiwgdmFsdWU6IFwidmVcIiB9LFxyXG4gIHsgbmFtZTogXCJWacOqdCBOYW1lc2VcIiwgdmFsdWU6IFwidmlcIiB9LFxyXG4gIHsgbmFtZTogXCJWb2xhcMO8a1wiLCB2YWx1ZTogXCJ2b1wiIH0sXHJcbiAgeyBuYW1lOiBcIldhbGxvb25cIiwgdmFsdWU6IFwid2FcIiB9LFxyXG4gIHsgbmFtZTogXCJXb2xvZlwiLCB2YWx1ZTogXCJ3b1wiIH0sXHJcbiAgeyBuYW1lOiBcIlhob3NhXCIsIHZhbHVlOiBcInhoXCIgfSxcclxuICB7IG5hbWU6IFwiWWlkZGlzaFwiLCB2YWx1ZTogXCJ5aVwiIH0sXHJcbiAgeyBuYW1lOiBcIllvcnViYVwiLCB2YWx1ZTogXCJ5b1wiIH0sXHJcbiAgeyBuYW1lOiBcIlpodWFuZ1wiLCB2YWx1ZTogXCJ6YVwiIH0sXHJcbiAgeyBuYW1lOiBcIkNoaW5lc2VcIiwgdmFsdWU6IFwiemhcIiB9LFxyXG4gIHsgbmFtZTogXCJadWx1XCIsIHZhbHVlOiBcInp1XCIgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBTVEFUVVMgPSBbXHJcbiAgeyBuYW1lOiBcIkluIFByb2dyZXNzXCIsIHZhbHVlOiBcImluIHByb2dyZXNzXCIgfSxcclxuICB7IG5hbWU6IFwiSW4gSGlhdHVzXCIsIHZhbHVlOiBcImluIGhpYXR1c1wiIH0sXHJcbiAgeyBuYW1lOiBcIkNvbXBsZXRlZFwiLCB2YWx1ZTogXCJjb21wbGV0ZWRcIiB9LFxyXG5dO1xyXG5cclxuLy8gVFlQRVNcclxuZXhwb3J0IGNvbnN0IHR5cGVzID0ge1xyXG4gIEdFVF9QUk9GSUxFOiBcIkdFVF9QUk9GSUxFXCIsXHJcbiAgTE9HSU46IFwiTE9HSU5cIixcclxuICBSRUdJU1RFUjogXCJSRUdJU1RFUlwiLFxyXG4gIEdFVF9TVE9SWTogXCJHRVRfU1RPUllcIixcclxuICBHRVRfVVNFUl9TVE9SSUVTOiBcIkdFVF9VU0VSX1NUT1JJRVNcIixcclxuICBHRVRfRkFWT1JJVEVfU1RPUklFUzogXCJHRVRfRkFWT1JJVEVfU1RPUklFU1wiLFxyXG4gIEFERF9TVE9SWTogXCJBRERfU1RPUllcIixcclxuICBFRElUX1NUT1JZOiBcIkVESVRfU1RPUllcIixcclxuICBERUxFVEVfU1RPUlk6IFwiREVMRVRFX1NUT1JZXCIsXHJcbiAgSVNfU1RPUllfRkFWT1JJVEU6IFwiSVNfU1RPUllfRkFWT1JJVEVcIixcclxuICBJU19GT0xMT1dJTkc6IFwiSVNfRk9MTE9XSU5HXCIsXHJcbiAgR0VUX0NIQVBURVI6IFwiR0VUX0NIQVBURVJcIixcclxuICBBRERfQ0hBUFRFUjogXCJBRERfQ0hBUFRFUlwiLFxyXG4gIEVESVRfQ0hBUFRFUjogXCJFRElUX0NIQVBURVJcIixcclxuICBERUxFVEVfQ0hBUFRFUjogXCJERUxFVEVfQ0hBUFRFUlwiLFxyXG4gIEdFVF9DSEFQVEVSUzogXCJHRVRfQ0hBUFRFUlNcIixcclxuICBBRERfQ0hBUkFDVEVSOiBcIkFERF9DSEFSQUNURVJcIixcclxuICBHRVRfQ0hBUkFDVEVSOiBcIkdFVF9DSEFSQUNURVJcIixcclxuICBFRElUX0NIQVJBQ1RFUjogXCJFRElUX0NIQVJBQ1RFUlwiLFxyXG4gIERFTEVURV9DSEFSQUNURVI6IFwiREVMRVRFX0NIQVJBQ1RFUlwiLFxyXG4gIEdFVF9VU0VSX0NIQVJBQ1RFUlM6IFwiR0VUX1VTRVJfQ0hBUkFDVEVSU1wiLFxyXG4gIEdFVF9DSEFSQUNURVJfQ09NTUVOVFM6IFwiR0VUX0NIQVJBQ1RFUl9DT01NRU5UU1wiLFxyXG4gIEdFVF9VU0VSX0xPQ0FUSU9OUzogXCJHRVRfVVNFUl9MT0NBVElPTlNcIixcclxuICBHRVRfRkFWT1JJVEVfQ0hBUkFDVEVSUzogXCJHRVRfRkFWT1JJVEVfQ0hBUkFDVEVSU1wiLFxyXG4gIEdFVF9TVE9SWV9DSEFSQUNURVJTOiBcIkdFVF9TVE9SWV9DSEFSQUNURVJTXCIsXHJcbiAgQUREX0xPQ0FUSU9OOiBcIkFERF9MT0NBVElPTlwiLFxyXG4gIEdFVF9MT0NBVElPTjogXCJHRVRfTE9DQVRJT05cIixcclxuICBFRElUX0xPQ0FUSU9OOiBcIkVESVRfTE9DQVRJT05cIixcclxuICBERUxFVEVfTE9DQVRJT046IFwiREVMRVRFX0xPQ0FUSU9OXCIsXHJcbiAgR0VUX0NPTU1FTlRTOiBcIkdFVF9DT01NRU5UU1wiLFxyXG4gIEdFVF9GQVZPUklURV9BVVRIT1JTOiBcIkdFVF9GQVZPUklURV9BVVRIT1JTXCIsXHJcbiAgR0VUX1NUT1JZX0xPQ0FUSU9OUzogXCJHRVRfU1RPUllfTE9DQVRJT05TXCIsXHJcbiAgR0VUX0ZPTExPV0VSUzogXCJHRVRfRk9MTE9XRVJTXCIsXHJcbiAgRElTUEFUQ0hfRVJST1I6IFwiRElTUEFUQ0hfRVJST1JcIixcclxuICBTVUJNSVRfQ09NTUVOVDogXCJTVUJNSVRfQ09NTUVOVFwiLFxyXG4gIFJBVEVfQ09NTUVOVDogXCJSQVRFX0NPTU1FTlRcIixcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfUFJPRklMRSA9IFwiR0VUX1BST0ZJTEVcIjtcclxuZXhwb3J0IGNvbnN0IExPR0lOID0gXCJMT0dJTlwiO1xyXG5leHBvcnQgY29uc3QgUkVHSVNURVIgPSBcIlJFR0lTVEVSXCI7XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX1NUT1JZID0gXCJHRVRfU1RPUllcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9VU0VSX1NUT1JJRVMgPSBcIkdFVF9VU0VSX1NUT1JJRVNcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9GQVZPUklURV9TVE9SSUVTID0gXCJHRVRfRkFWT1JJVEVfU1RPUklFU1wiO1xyXG5leHBvcnQgY29uc3QgQUREX1NUT1JZID0gXCJBRERfU1RPUllcIjtcclxuZXhwb3J0IGNvbnN0IEVESVRfU1RPUlkgPSBcIkVESVRfU1RPUllcIjtcclxuZXhwb3J0IGNvbnN0IERFTEVURV9TVE9SWSA9IFwiREVMRVRFX1NUT1JZXCI7XHJcbmV4cG9ydCBjb25zdCBJU19TVE9SWV9GQVZPUklURSA9IFwiSVNfU1RPUllfRkFWT1JJVEVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfQ0hBUFRFUiA9IFwiR0VUX0NIQVBURVJcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9DSEFQVEVSID0gXCJBRERfQ0hBUFRFUlwiO1xyXG5leHBvcnQgY29uc3QgRURJVF9DSEFQVEVSID0gXCJFRElUX0NIQVBURVJcIjtcclxuZXhwb3J0IGNvbnN0IERFTEVURV9DSEFQVEVSID0gXCJERUxFVEVfQ0hBUFRFUlwiO1xyXG5leHBvcnQgY29uc3QgR0VUX0NIQVBURVJTID0gXCJHRVRfQ0hBUFRFUlNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfQ0hBUkFDVEVSID0gXCJBRERfQ0hBUkFDVEVSXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfQ0hBUkFDVEVSID0gXCJHRVRfQ0hBUkFDVEVSXCI7XHJcbmV4cG9ydCBjb25zdCBFRElUX0NIQVJBQ1RFUiA9IFwiRURJVF9DSEFSQUNURVJcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9VU0VSX0NIQVJBQ1RFUlMgPSBcIkdFVF9VU0VSX0NIQVJBQ1RFUlNcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9VU0VSX0xPQ0FUSU9OUyA9IFwiR0VUX1VTRVJfTE9DQVRJT05TXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfRkFWT1JJVEVfQ0hBUkFDVEVSUyA9IFwiR0VUX0ZBVk9SSVRFX0NIQVJBQ1RFUlNcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9TVE9SWV9DSEFSQUNURVJTID0gXCJHRVRfU1RPUllfQ0hBUkFDVEVSU1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9MT0NBVElPTiA9IFwiQUREX0xPQ0FUSU9OXCI7XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX0ZBVk9SSVRFX0FVVEhPUlMgPSBcIkdFVF9GQVZPUklURV9BVVRIT1JTXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfRk9MTE9XRVJTID0gXCJHRVRfRk9MTE9XRVJTXCI7XHJcblxyXG5leHBvcnQgY29uc3QgRElTUEFUQ0hfRVJST1IgPSBcIkRJU1BBVENIX0VSUk9SXCI7XHJcbiIsImV4cG9ydCBjb25zdCBkdW1teSA9IHtcclxuICBwZXJzb246XHJcbiAgICBcImh0dHBzOi8vaS5waW5pbWcuY29tLzU2NHgvNzAvNTAvYTMvNzA1MGEzMGNjNjFlOGE3ZjNmODY3N2ViZjk1MDVkYjcuanBnXCIsXHJcbiAgY292ZXI6XHJcbiAgICBcImh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzM4ODExMDQvcGV4ZWxzLXBob3RvLTM4ODExMDQuanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJmRwcj0yJmg9NjUwJnc9OTQwXCIsXHJcbiAgbmFtZTogXCJBaXNod2FyeWEgUmFpXCIsXHJcbiAgcG9zdGVyOiBcImh0dHBzOi8vaW1hZ2VzLW5hLnNzbC1pbWFnZXMtYW1hem9uLmNvbS9pbWFnZXMvSS84MWgyZ1dQVFlKTC5qcGdcIixcclxuICBhdmF0YXI6IFwiaHR0cHM6Ly9iaXAuY25ycy5mci93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8xMS91c2VyLmpwZ1wiLFxyXG4gIG5vSW1hZ2U6IFwiaHR0cHM6Ly9pLnN0YWNrLmltZ3VyLmNvbS95OURwVC5qcGdcIixcclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9hcHBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvYXV0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9maXJlc3RvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2Uvc3RvcmFnZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZXNwb25zaXZlLW1hc29ucnlcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==