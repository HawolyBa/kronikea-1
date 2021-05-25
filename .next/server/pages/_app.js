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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
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

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./components/common/Footer.js":
/*!*************************************!*\
  !*** ./components/common/Footer.js ***!
  \*************************************/
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
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/constants */ "./utils/constants.js");
var _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\components\\common\\Footer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Footer = () => {
  return __jsx("footer", {
    className: "main-footer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "inner-footer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    gutter: 42,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xl: 6,
    lg: 8,
    md: 12,
    sm: 24,
    xs: 24,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 11
    }
  }, __jsx("section", {
    className: "links",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 15
    }
  }, "Links"), __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 15
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 19
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 21
    }
  }, "Home")), __jsx("span", {
    className: "dot",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 19
    }
  }, "\u2022")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/profile",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 19
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 21
    }
  }, "Profile")), __jsx("span", {
    className: "dot",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 19
    }
  }, "\u2022")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/explore",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 19
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 21
    }
  }, "Explore")))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xl: 6,
    lg: 9,
    md: 12,
    sm: 24,
    xs: 24,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, __jsx("section", {
    className: "about",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 15
    }
  }, "About Kronikea"), __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 15
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/about",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 19
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 21
    }
  }, "About")), __jsx("span", {
    className: "dot",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 19
    }
  }, "\u2022")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/rules",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 19
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 21
    }
  }, "Rules")), __jsx("span", {
    className: "dot",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 19
    }
  }, "\u2022")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/feedback",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 19
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 21
    }
  }, "Feedback")), __jsx("span", {
    className: "dot",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 19
    }
  }, "\u2022")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/contact",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 19
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 21
    }
  }, "Contact")))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xl: 9,
    lg: 7,
    md: 12,
    sm: 24,
    xs: 24,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 11
    }
  }, __jsx("section", {
    className: "categories",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }, __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 15
    }
  }, "Categories"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Select"], {
    value: "none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Select"].Option, {
    value: "none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  }, "Choose a category"), _utils_constants__WEBPACK_IMPORTED_MODULE_3__["CATEGORIES"].map(c => __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Select"].Option, {
    value: c.calue,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 19
    }
  }, c.name))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xl: 3,
    lg: 8,
    md: 12,
    sm: 24,
    xs: 24,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 11
    }
  }, __jsx("section", {
    className: "socials",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }
  }, __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 15
    }
  }, "Social Links"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Space"], {
    align: "center",
    size: 16,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 15
    }
  }, __jsx("a", {
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "icon custom-icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 19
    }
  }, __jsx("ion-icon", {
    name: "logo-facebook",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 21
    }
  }))), __jsx("a", {
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "icon custom-icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 19
    }
  }, __jsx("ion-icon", {
    name: "logo-twitter",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 21
    }
  }))), __jsx("a", {
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "icon custom-icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 19
    }
  }, __jsx("ion-icon", {
    name: "logo-instagram",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 21
    }
  })))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/common/FullMenu.js":
/*!***************************************!*\
  !*** ./components/common/FullMenu.js ***!
  \***************************************/
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
/* harmony import */ var _MenuBloc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MenuBloc */ "./components/common/MenuBloc.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/constants */ "./utils/constants.js");
var _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\components\\common\\FullMenu.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const FullMenu = ({
  menuVisible,
  toggleMenu
}) => {
  return __jsx("div", {
    className: `fullscreen-menu ${menuVisible ? "visible" : ""}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "close-btn custom-btn",
    onClick: toggleMenu,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx("ion-icon", {
    name: "close",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "menu-inner",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "menu-side",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx("nav", {
    className: "menu-nav",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, __jsx(_MenuBloc__WEBPACK_IMPORTED_MODULE_3__["default"], {
    toggleMenu: toggleMenu,
    title: "Home",
    link: "/",
    icon: "home",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }), __jsx(_MenuBloc__WEBPACK_IMPORTED_MODULE_3__["default"], {
    toggleMenu: toggleMenu,
    title: "Profile",
    link: "/profile",
    icon: "person",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }), __jsx(_MenuBloc__WEBPACK_IMPORTED_MODULE_3__["default"], {
    toggleMenu: toggleMenu,
    title: "Browse",
    link: "/browse",
    icon: "folder-open",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }), __jsx(_MenuBloc__WEBPACK_IMPORTED_MODULE_3__["default"], {
    toggleMenu: toggleMenu,
    title: "Resume reading",
    link: "/",
    icon: "book",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }), __jsx(_MenuBloc__WEBPACK_IMPORTED_MODULE_3__["default"], {
    toggleMenu: toggleMenu,
    title: "About",
    link: "/about",
    icon: "information-circle",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }), __jsx(_MenuBloc__WEBPACK_IMPORTED_MODULE_3__["default"], {
    toggleMenu: toggleMenu,
    title: "Feedback",
    link: "/feedback",
    icon: "chatbubbles",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }))), __jsx("div", {
    className: "cat-bloc",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, "Categories"), __jsx("nav", {
    className: "cat-nav",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, _utils_constants__WEBPACK_IMPORTED_MODULE_4__["CATEGORIES"].map(cat => __jsx("li", {
    key: cat.value,
    onClick: toggleMenu,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: `/category/${cat.value}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 19
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 21
    }
  }, cat.name)))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (FullMenu);

/***/ }),

/***/ "./components/common/Header.js":
/*!*************************************!*\
  !*** ./components/common/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Menu */ "./components/common/Menu.js");
var _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\components\\common\\Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// import SearchSharpIcon from '@material-ui/icons/SearchSharp';


const Header = ({
  menuRef,
  isOpen,
  openMenu
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx("header", {
    id: "main-header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx("div", {
    id: "menu-btn",
    onClick: openMenu,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "bar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "bar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "bar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 11
    }
  })), __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, "Kronikea")), __jsx(_Menu__WEBPACK_IMPORTED_MODULE_1__["default"], {
    isOpen: isOpen,
    menuRef: menuRef,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/common/Layout.js":
/*!*************************************!*\
  !*** ./components/common/Layout.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./components/common/Header.js");
/* harmony import */ var _StickyMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StickyMenu */ "./components/common/StickyMenu.js");
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Navbar */ "./components/common/Navbar.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flag_icon_css_css_flag_icon_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flag-icon-css/css/flag-icon.min.css */ "./node_modules/flag-icon-css/css/flag-icon.min.css");
/* harmony import */ var flag_icon_css_css_flag_icon_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flag_icon_css_css_flag_icon_min_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _notifications_Notifications__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../notifications/Notifications */ "./components/notifications/Notifications.js");
/* harmony import */ var _hooks_notificationsHooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/notificationsHooks */ "./hooks/notificationsHooks.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Footer */ "./components/common/Footer.js");
/* harmony import */ var _FullMenu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./FullMenu */ "./components/common/FullMenu.js");
var _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\components\\common\\Layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











const Layout = ({
  children
}) => {
  // Reference to side menu
  const menuRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef();
  const notifications = Object(_hooks_notificationsHooks__WEBPACK_IMPORTED_MODULE_8__["useNotifcations"])();
  const [isOpen, setOpen] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const [visible, setVisible] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const [openLanguage, setOpenLanguage] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const [locale, setLocale] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("en");

  const toggleNotifications = () => setVisible(!visible);

  const openMenu = e => {
    setOpen(!isOpen);
  };

  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    document.addEventListener("mousedown", clickOutsideMenu);
  }, [menuRef.current]);

  const clickOutsideMenu = e => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setOpen(false);
    }
  };

  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  }, __jsx(_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    openMenu: setOpen,
    setOpenLanguage: setOpenLanguage,
    toggleNotifications: toggleNotifications,
    notificationsCount: notifications.count && notifications.count,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }), __jsx("main", {
    className: `main-content ${isOpen ? "content-menu-open" : ""} ${router.pathname === "/" ? "home-content" : ""}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, children)), __jsx(_Footer__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Drawer"], {
    title: "Notifications",
    placement: "right",
    closable: false,
    onClose: () => setVisible(false),
    visible: visible,
    width: 800,
    headerStyle: {
      fontWeight: 300,
      textTransform: "uppercase",
      color: "#acb9d7"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }, __jsx(_notifications_Notifications__WEBPACK_IMPORTED_MODULE_7__["default"], {
    setVisible: setVisible,
    notif: notifications,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Modal"], {
    title: "Change Language",
    visible: openLanguage,
    width: 500,
    footer: null,
    centered: true,
    closable: false,
    onOk: () => setOpenLanguage(false),
    onCancel: () => setOpenLanguage(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }
  }, __jsx("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Radio"].Group, {
    value: locale,
    onChange: e => setLocale(e.target.value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Radio"].Button, {
    key: "en",
    value: "en",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "flag-icon flag-icon-gb",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 15
    }
  }), " English"), __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Radio"].Button, {
    key: "fr",
    value: "fr",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "flag-icon flag-icon-fr",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 15
    }
  }), " Fran\xE7ais")))), __jsx(_FullMenu__WEBPACK_IMPORTED_MODULE_10__["default"], {
    toggleMenu: openMenu,
    menuVisible: isOpen,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/common/Menu.js":
/*!***********************************!*\
  !*** ./components/common/Menu.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\components\\common\\Menu.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // import HomeIcon from "@material-ui/icons/Home";
// import ExploreIcon from "@material-ui/icons/Explore";
// import SettingsIcon from "@material-ui/icons/Settings";
// import InfoIcon from "@material-ui/icons/Info";
// import EmailIcon from "@material-ui/icons/Email";
// import GavelIcon from "@material-ui/icons/Gavel";
// import AccountCircleIcon from "@material-ui/icons/AccountCircle";
// import { Switch } from "@material-ui/core";
// import { withStyles } from "@material-ui/core/styles";
// import { red } from "@material-ui/core/colors";
// import FeedbackSharpIcon from "@material-ui/icons/FeedbackSharp";
// const CustomSwitch = withStyles({
//   switchBase: {
//     color: red[300],
//     "&$checked": {
//       color: red[500],
//     },
//     "&$checked + $track": {
//       backgroundColor: red[500],
//     },
//   },
//   checked: {},
//   track: {},
// })(Switch);

const Menu = ({
  isOpen,
  menuRef
}) => {
  return __jsx("div", {
    ref: menuRef,
    className: isOpen ? "open" : "closed",
    id: "side-menu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "./components/common/MenuBloc.js":
/*!***************************************!*\
  !*** ./components/common/MenuBloc.js ***!
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
var _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\components\\common\\MenuBloc.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const MenuBloc = ({
  link,
  title,
  icon,
  toggleMenu
}) => {
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: link,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx("a", {
    className: "menu-bloc",
    onClick: toggleMenu,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Space"], {
    align: "baseline",
    size: 16,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("ion-icon", {
    name: icon,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 11
    }
  }), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 11
    }
  }, title))));
};

/* harmony default export */ __webpack_exports__["default"] = (MenuBloc);

/***/ }),

/***/ "./components/common/Navbar.js":
/*!*************************************!*\
  !*** ./components/common/Navbar.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _forms_Search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../forms/Search */ "./components/forms/Search.js");
/* harmony import */ var _hooks_userHooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/userHooks */ "./hooks/userHooks.js");
/* harmony import */ var _utils_dummy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/dummy */ "./utils/dummy.js");
var _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\components\\common\\Navbar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const Navbar = ({
  toggleNotifications,
  notificationsCount,
  setOpenLanguage,
  openMenu
}) => {
  const {
    0: searchVisible,
    1: setSearchVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: menuVisible,
    1: setMenuVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: ctaVisible,
    1: setCtaVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const auth = Object(_hooks_userHooks__WEBPACK_IMPORTED_MODULE_6__["useAuth"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

  const toggleMenu = () => setMenuVisible(!menuVisible);

  const logout = () => {
    auth.signout();
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("section", {
    className: "navbar-header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, __jsx("header", {
    id: "main-navbar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "inner-header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }, __jsx("h1", {
    id: "title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 15
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }, "Kronikea"))), __jsx(_forms_Search__WEBPACK_IMPORTED_MODULE_5__["default"], {
    router: router,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "header-icons",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Space"], {
    align: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], {
    title: "Home",
    placement: "bottom",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "header-icon icon__home",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 23
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 25
    }
  }, __jsx("ion-icon", {
    name: "home",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 27
    }
  }))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], {
    title: "Explore",
    placement: "bottom",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "header-icon icon__home",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/explore",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 23
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 25
    }
  }, __jsx("ion-icon", {
    name: "eye",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 27
    }
  }))))), !auth.isLoading && auth.user && __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], {
    title: `Profile - ${auth.user && auth.user.username}`,
    placement: "bottom",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "header-icon icon__account",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 23
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/profile",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 25
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 27
    }
  }, __jsx("img", {
    src: auth.user.image ? auth.user.image : _utils_dummy__WEBPACK_IMPORTED_MODULE_7__["dummy"].avatar,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 29
    }
  }))))), !auth.isLoading && auth.user && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], {
    title: "Add a new item",
    placement: "bottom",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 23
    }
  }, __jsx("div", {
    onClick: () => setCtaVisible(true),
    className: "header-icon icon__settings",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 25
    }
  }, __jsx("ion-icon", {
    name: "add",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 27
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], {
    title: "Notifications",
    placement: "bottom",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 23
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Badge"], {
    size: "default",
    count: notificationsCount,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "header-icon icon__notif icon__settings",
    onClick: toggleNotifications,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 27
    }
  }, __jsx("ion-icon", {
    name: "notifications",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 29
    }
  }))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], {
    title: "Change Language",
    placement: "bottom",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 19
    }
  }, __jsx("div", {
    onClick: () => setOpenLanguage(true),
    className: "header-icon icon__settings",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 21
    }
  }, __jsx("ion-icon", {
    name: "globe-outline",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 23
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], {
    title: "Night/Day mode",
    placement: "bottom",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "header-icon icon__settings",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 21
    }
  }, __jsx("ion-icon", {
    name: "contrast",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 23
    }
  }))), !auth.isLoading && auth.user ? __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Popconfirm"], {
    title: "Do you really want to log out ?",
    onConfirm: logout,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 21
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], {
    title: "Log out",
    placement: "bottom",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 23
    }
  }, __jsx("div", {
    className: "header-icon icon__settings",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 25
    }
  }, __jsx("ion-icon", {
    name: "log-out",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 27
    }
  })))) : __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], {
    title: "Log out",
    placement: "bottom",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/auth",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 23
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "header-icon icon__settings",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 27
    }
  }, __jsx("ion-icon", {
    name: "log-in",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 29
    }
  }))))), __jsx("div", {
    className: "mobile-icon icon__home",
    onClick: () => setSearchVisible(true),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 19
    }
  }, __jsx("ion-icon", {
    name: "search",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "menu-btn",
    onClick: openMenu,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "bar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: "bar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: "bar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 21
    }
  }))))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Modal"], {
    closable: false,
    visible: searchVisible,
    onOk: () => setSearchVisible(false),
    onCancel: () => setSearchVisible(false),
    footer: [__jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      key: "submit",
      type: "primary",
      onClick: () => setSearchVisible(false),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 13
      }
    }, "Search")],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 9
    }
  }, __jsx("input", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 11
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Modal"], {
    closable: false,
    visible: ctaVisible,
    onOk: () => setCtaVisible(false),
    onCancel: () => setCtaVisible(false),
    footer: null,
    width: 700,
    centered: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    gutter: 16,
    justify: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    span: 8,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    block: true,
    htmlType: "button",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["UserOutlined"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 23
      }
    }),
    onClick: () => {
      router.push("/character/new");
      setCtaVisible(false);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 15
    }
  }, "Add a new character")), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    span: 8,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    block: true,
    htmlType: "button",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["BookOutlined"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 23
      }
    }),
    onClick: () => {
      router.push("/story/new");
      setCtaVisible(false);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 15
    }
  }, "Add a new story")), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    span: 8,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    block: true,
    htmlType: "button",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["EnvironmentOutlined"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246,
        columnNumber: 23
      }
    }),
    onClick: () => {
      router.push("/location/new");
      setCtaVisible(false);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 15
    }
  }, "Add a new location"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./components/common/StickyMenu.js":
/*!*****************************************!*\
  !*** ./components/common/StickyMenu.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\components\\common\\StickyMenu.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // import HomeIcon from '@material-ui/icons/Home';
// import ExploreIcon from '@material-ui/icons/Explore';
// import PersonIcon from '@material-ui/icons/Person';
// import AddCircleIcon from '@material-ui/icons/AddCircle';
// import { grey } from '@material-ui/core/colors';

const StickyMenu = () => {
  return __jsx("nav", {
    className: "sticky-menu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (StickyMenu);

/***/ }),

/***/ "./components/forms/Search.js":
/*!************************************!*\
  !*** ./components/forms/Search.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\components\\forms\\Search.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const Search = ({
  router
}) => {
  const [type, setType] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("stories");
  const [loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false);

  const submitSearch = search => {
    setLoading(true);
    router.push(`/search/${type}/${search}`);
  };

  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    setLoading(false);
  }, [router.query]);
  return __jsx("div", {
    className: "search",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Input"].Search, {
    loading: loading,
    enterButton: true,
    onSearch: submitSearch,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }), __jsx("select", {
    value: type,
    onChange: e => setType(e.target.value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx("option", {
    value: "stories",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, "Stories"), __jsx("option", {
    value: "characters",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, "Characters"), __jsx("option", {
    value: "users",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, "Users")));
};

/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ }),

/***/ "./components/notifications/NotifItem.js":
/*!***********************************************!*\
  !*** ./components/notifications/NotifItem.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\components\\notifications\\NotifItem.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const NotifItem = ({
  n,
  notif,
  router,
  setVisible
}) => {
  const link = n.type === "storyLike" ? `/story/${n.storyId}` : n.type === "characterLike" || n.type === "characterComment" ? `/character/${n.characterId}` : n.type === "comment" || n.type === "newChapter" ? `/story/${n.storyId}/chapter/${n.chapterId}` : n.type === "follow" ? `/profile/${n.sender}` : null;

  const openLink = () => {
    setVisible(false);
    notif.markAsRead(n.id);
    router.push(link);
  };

  return __jsx("div", {
    className: `notification ${n.read ? "notif-read" : ""}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    align: "middle",
    gutter: 60,
    justify: "space-between",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 16,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx("div", {
    onClick: openLink,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: "notification-desc",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Space"], {
    size: 16,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 15
    }
  }, n.user.image && __jsx("div", {
    className: "notification-avatar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: n.user.image,
    alt: n.user.username,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 21
    }
  })), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }, n.message))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 8,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "notifications-buttons",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Space"], {
    size: 20,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "btn mark-read-btn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 15
    }
  }, n.read ? __jsx("ion-icon", {
    name: "checkmark",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 19
    }
  }) : __jsx("span", {
    style: {
      cursor: "pointer"
    },
    onClick: () => notif.markAsRead(n.id),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 19
    }
  }, "Mark as Read")), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
    title: "DELETE",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 15
    }
  }, __jsx("span", {
    onClick: () => notif.deleteOne(n.id),
    className: "btn delete-btn",
    style: {
      cursor: "pointer"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  }, __jsx("ion-icon", {
    name: "trash-outline",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 19
    }
  }))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (NotifItem);

/***/ }),

/***/ "./components/notifications/Notifications.js":
/*!***************************************************!*\
  !*** ./components/notifications/Notifications.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NotifItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NotifItem */ "./components/notifications/NotifItem.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\components\\notifications\\Notifications.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Notifications = ({
  notif,
  setVisible
}) => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  return __jsx("div", {
    className: "notifications",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "cta-btns",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "cta-btn read-all",
    onClick: notif.markAllAsRead,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, "Mark all as read"), __jsx("div", {
    className: "cta-btn delete-all",
    onClick: notif.deleteAll,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, "Delete all")), notif.items.length > 0 ? notif.items.map(n => __jsx(_NotifItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    setVisible: setVisible,
    router: router,
    key: n.id,
    n: n,
    notif: notif,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  })) : __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Empty"], {
    image: antd__WEBPACK_IMPORTED_MODULE_1__["Empty"].PRESENTED_IMAGE_SIMPLE,
    description: "No notifications yet",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Notifications);

/***/ }),

/***/ "./hooks/notificationsHooks.js":
/*!*************************************!*\
  !*** ./hooks/notificationsHooks.js ***!
  \*************************************/
/*! exports provided: ProvideNotification, useNotifcations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProvideNotification", function() { return ProvideNotification; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useNotifcations", function() { return useNotifcations; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_fbConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../redux/fbConfig */ "./redux/fbConfig.js");
var _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\hooks\\notificationsHooks.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const notificationContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
function ProvideNotification({
  children
}) {
  const notifications = useProvideNotification();
  return __jsx(notificationContext.Provider, {
    value: notifications,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, children);
}
const useNotifcations = () => {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(notificationContext);
};

function useProvideNotification() {
  const {
    0: notifications,
    1: setNotifications
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: isLoading,
    1: setIsLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const {
    0: count,
    1: setCount
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);

  const markAsRead = id => _redux_fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("notifications").doc(id).update({
    read: true
  });

  const deleteOne = id => _redux_fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("notifications").doc(id).delete();

  const markAllAsRead = () => {
    const batch = _redux_fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].batch();
    const userId = _redux_fbConfig__WEBPACK_IMPORTED_MODULE_1__["auth"].currentUser.uid;
    _redux_fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("notifications").where("recipient", "==", userId).where("read", "==", false).get().then(data => {
      data.forEach(doc => {
        batch.update(_redux_fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("notifications").doc(doc.id), {
          read: true
        });
      });
      return batch.commit();
    });
  };

  const deleteAll = () => {
    const batch = _redux_fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].batch();
    const userId = _redux_fbConfig__WEBPACK_IMPORTED_MODULE_1__["auth"].currentUser.uid;
    _redux_fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("notifications").where("recipient", "==", userId).get().then(data => {
      data.forEach(doc => {
        batch.delete(_redux_fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("notifications").doc(doc.id));
      });
      return batch.commit();
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const unsubscribe = _redux_fbConfig__WEBPACK_IMPORTED_MODULE_1__["auth"].onAuthStateChanged(user => {
      if (user && user.uid) {
        _redux_fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("notifications").where("recipient", "==", user.uid).onSnapshot(async docs => {
          let items = [];
          items = docs.docs.map(doc => _objectSpread(_objectSpread({}, doc.data()), {}, {
            id: doc.id
          })).sort((a, b) => {
            a = typeof a.createdAt !== "object" ? new Date(a.createdAt) : new Date(a.createdAt.seconds);
            b = typeof b.createdAt !== "object" ? new Date(b.createdAt) : new Date(b.createdAt.seconds);
            return b > a ? -1 : b < a ? 1 : 0;
          });
          const getUsers = await _redux_fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("users").get();
          const users = await getUsers.docs.map(u => _objectSpread(_objectSpread({}, u.data()), {}, {
            id: u.id
          }));
          items = items.map(notif => {
            const user = users.find(u => u.id === notif.sender);
            return _objectSpread(_objectSpread({}, notif), {}, {
              user: user ? user : {}
            });
          });
          setNotifications(items);
        });
        setIsLoading(false);
      } else return;
    }); // Cleanup subscription on unmount

    return () => unsubscribe();
  }, [_redux_fbConfig__WEBPACK_IMPORTED_MODULE_1__["auth"]]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setCount(notifications.filter(n => !n.read).length);
  }, [notifications]);
  return {
    isLoading,
    items: notifications,
    markAsRead,
    count,
    deleteOne,
    markAllAsRead,
    deleteAll
  };
}

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

/***/ "./node_modules/aos/dist/aos.css":
/*!***************************************!*\
  !*** ./node_modules/aos/dist/aos.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/flag-icon-css/css/flag-icon.min.css":
/*!**********************************************************!*\
  !*** ./node_modules/flag-icon-css/css/flag-icon.min.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


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

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.AppInitialProps = _utils.AppInitialProps;
exports.NextWebVitalsMetric = _utils.NextWebVitalsMetric;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn(`Warning: the \`Container\` in \`_app\` has been deprecated and should be removed. https://err.sh/vercel/next.js/app-container-deprecated`);
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error(`Warning: the 'url' property is deprecated. https://err.sh/vercel/next.js/url-deprecated`);
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aos */ "aos");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var redux_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-firestore */ "redux-firestore");
/* harmony import */ var redux_firestore__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux_firestore__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux_firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux-firebase */ "react-redux-firebase");
/* harmony import */ var react_redux_firebase__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux_firebase__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../redux/store */ "./redux/store.js");
/* harmony import */ var _hooks_userHooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../hooks/userHooks */ "./hooks/userHooks.js");
/* harmony import */ var _style_custom_antd_less__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../style/custom-antd.less */ "./style/custom-antd.less");
/* harmony import */ var _style_custom_antd_less__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_style_custom_antd_less__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! aos/dist/aos.css */ "./node_modules/aos/dist/aos.css");
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _style_main_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../style/main.scss */ "./style/main.scss");
/* harmony import */ var _style_main_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_style_main_scss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_common_Layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/common/Layout */ "./components/common/Layout.js");
/* harmony import */ var _hooks_notificationsHooks__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../hooks/notificationsHooks */ "./hooks/notificationsHooks.js");
var _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\pages\\_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




 //REDUX













const MyApp = ({
  Component,
  pageProps
}) => {
  const rrfConfig = {
    userProfile: "users",
    useFirestoreForProfile: true
  };
  const store = Object(_redux_store__WEBPACK_IMPORTED_MODULE_8__["newStore"])();
  const rrfProps = {
    firebase: (firebase_app__WEBPACK_IMPORTED_MODULE_7___default()),
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance: redux_firestore__WEBPACK_IMPORTED_MODULE_5__["createFirestoreInstance"]
  };
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    aos__WEBPACK_IMPORTED_MODULE_3___default.a.init({
      duration: 600,
      once: true
    });
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, __jsx("script", {
    type: "module",
    src: "https://unpkg.com/ionicons@5.4.0/dist/ionicons/ionicons.esm.js",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/icon?family=Material+Icons",
    rel: "stylesheet",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }), __jsx("meta", {
    charset: "utf-8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  })), __jsx(react_redux__WEBPACK_IMPORTED_MODULE_4__["Provider"], {
    store: store,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, __jsx(react_redux_firebase__WEBPACK_IMPORTED_MODULE_6__["ReactReduxFirebaseProvider"], _extends({}, rrfProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }), __jsx(_hooks_userHooks__WEBPACK_IMPORTED_MODULE_9__["ProvideAuth"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }, __jsx(_hooks_notificationsHooks__WEBPACK_IMPORTED_MODULE_14__["ProvideNotification"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, __jsx(_components_common_Layout__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 15
    }
  }, __jsx(Component, _extends({}, pageProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }))))))));
};

MyApp.getInitialProps = async appContext => {
  const appProps = await next_app__WEBPACK_IMPORTED_MODULE_1___default.a.getInitialProps(appContext);
  return _objectSpread({}, appProps);
};

/* harmony default export */ __webpack_exports__["default"] = (_redux_store__WEBPACK_IMPORTED_MODULE_8__["wrapper"].withRedux(MyApp));

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

/***/ "./redux/reducers/authReducer.js":
/*!***************************************!*\
  !*** ./redux/reducers/authReducer.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/constants */ "./utils/constants.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  profile: {},
  favAuthors: {
    isLoading: true,
    authors: []
  },
  followers: {
    isLoading: true,
    authors: []
  },
  isFollowing: false,
  notifications: [],
  loading: true,
  usersFromSearch: [],
  popularUsers: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case _utils_constants__WEBPACK_IMPORTED_MODULE_0__["GET_PROFILE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        profile: action.payload
      });

    case _utils_constants__WEBPACK_IMPORTED_MODULE_0__["GET_FAVORITE_AUTHORS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        favAuthors: {
          isLoading: false,
          authors: action.payload
        }
      });

    case _utils_constants__WEBPACK_IMPORTED_MODULE_0__["GET_FOLLOWERS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        followers: {
          isLoading: false,
          authors: action.payload
        }
      });

    case _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].IS_FOLLOWING:
      return _objectSpread(_objectSpread({}, state), {}, {
        isFollowing: action.payload
      });

    case _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].GET_NOTIFICATIONS:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        notifications: action.payload
      });

    case _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].GET_USERS_FROM_SEARCH:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: action.loading,
        usersFromSearch: action.payload ? action.payload : state.usersFromSearch
      });

    case _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].GET_POPULAR_USERS:
      return _objectSpread(_objectSpread({}, state), {}, {
        popularUsers: action.payload
      });
  }

  return state;
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./redux/reducers/charactersReducer.js":
/*!*********************************************!*\
  !*** ./redux/reducers/charactersReducer.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/constants */ "./utils/constants.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  userCharacters: [],
  favCharacters: [],
  loading: true,
  loadingCharacter: false,
  characterId: "",
  message: "",
  character: {
    id: "",
    authorId: "",
    firstname: "",
    lastname: "",
    age: 0,
    public: true,
    ethnicity: "",
    group: "",
    residence: "",
    description: "",
    nickname: "",
    occupation: "",
    relatives: []
  },
  charaExists: false,
  secondaryCharacters: [],
  mainArr: [],
  deleted: false,
  isFavorite: false,
  loadingFav: true,
  charactersFromSearch: [],
  popularCharacters: []
};

const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].ADD_CHARACTER:
      return _objectSpread(_objectSpread({}, state), {}, {
        message: action.payload.message,
        characterId: action.payload.characterId,
        loadingCharacter: action.payload.loading
      });

    case _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].EDIT_CHARACTER:
      return _objectSpread(_objectSpread({}, state), {}, {
        message: action.payload.message,
        loadingCharacter: action.payload.loading
      });

    case _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].DELETE_CHARACTER:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: action.payload.loading,
        message: action.payload.message ? action.payload.message : state.message,
        deleted: action.payload.deleted ? action.payload.deleted : state.deleted,
        charaExists: action.payload.charaExists ? action.payload.charaExists : state.charaExists
      });

    case _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].GET_CHARACTER:
      return _objectSpread(_objectSpread({}, state), {}, {
        charaExists: action.payload.charaExists,
        character: action.payload.charaExists ? action.payload.character : state.character,
        loading: action.payload.loading
      });

    case _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].GET_USER_CHARACTERS:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        userCharacters: action.payload
      });

    case _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].GET_FAVORITE_CHARACTERS:
      return _objectSpread(_objectSpread({}, state), {}, {
        favCharacters: action.payload
      });

    case _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].GET_STORY_CHARACTERS:
      return _objectSpread(_objectSpread({}, state), {}, {
        secondaryCharacters: action.payload.secondaryCharacters,
        mainArr: action.payload.mainArr
      });

    case _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].IS_CHARACTER_FAVORITE:
      return _objectSpread(_objectSpread({}, state), {}, {
        isFavorite: action.payload,
        loadingFav: action.loadingFav
      });

    case _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].GET_CHARACTERS_FROM_SEARCH:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: action.loading,
        charactersFromSearch: action.payload ? action.payload : state.charactersFromSearch
      });

    case _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].GET_POPULAR_CHARACTERS:
      return _objectSpread(_objectSpread({}, state), {}, {
        popularCharacters: action.payload
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (charactersReducer);

/***/ }),

/***/ "./redux/reducers/index.js":
/*!*********************************!*\
  !*** ./redux/reducers/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-firestore */ "redux-firestore");
/* harmony import */ var redux_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_firestore__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux_firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux-firebase */ "react-redux-firebase");
/* harmony import */ var react_redux_firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux_firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _authReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authReducer */ "./redux/reducers/authReducer.js");
/* harmony import */ var _storiesReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./storiesReducer */ "./redux/reducers/storiesReducer.js");
/* harmony import */ var _charactersReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./charactersReducer */ "./redux/reducers/charactersReducer.js");






const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  auth: _authReducer__WEBPACK_IMPORTED_MODULE_3__["default"],
  firebase: react_redux_firebase__WEBPACK_IMPORTED_MODULE_2__["firebaseReducer"],
  firestore: redux_firestore__WEBPACK_IMPORTED_MODULE_1__["firestoreReducer"],
  stories: _storiesReducer__WEBPACK_IMPORTED_MODULE_4__["default"],
  characters: _charactersReducer__WEBPACK_IMPORTED_MODULE_5__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./redux/reducers/storiesReducer.js":
/*!******************************************!*\
  !*** ./redux/reducers/storiesReducer.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/constants */ "./utils/constants.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  userStories: [],
  homeStories: [],
  favStories: [],
  storyLocations: [],
  story: {
    id: "",
    banner: "",
    title: "",
    summary: "",
    authorName: "",
    authorId: "",
    tags: [],
    mainCharacters: []
  },
  loading: true,
  chapters: {
    loading: true,
    items: []
  },
  message: "",
  storyId: "",
  loadingStory: false,
  loadingChapter: false,
  storyExists: true,
  userLocations: [],
  storyLocations: [],
  chapId: "",
  locId: "",
  chapter: {
    id: "",
    title: "",
    number: 0,
    body: "",
    characters: [],
    locations: [],
    storyId: "",
    authorId: "",
    authorName: "",
    status: true
  },
  location: {
    id: "",
    name: "",
    authorId: "",
    storyId: "",
    description: "",
    image: "",
    imageCopyright: ""
  },
  comments: [],
  loadingComments: true,
  chapterExists: true,
  isFavorite: false,
  loadingFav: true,
  loadingLoc: false,
  locationExists: true,
  deleted: false,
  userComment: {
    id: "",
    content: ""
  },
  rated: false,
  storiesFromSearch: [],
  featuredStories: [],
  userNote: 0
};

const storiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].DISPATCH_ERROR:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          storyExists: action.storyExists,
          loading: false
        });
      }

    case _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].GET_STORY:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        story: action.payload,
        storyExists: action.storyExists
      });

    case _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].GET_CHAPTER:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        chapter: action.payload.chapter ? action.payload.chapter : state.chapter,
        chapterExists: action.payload.chapterExists
      });

    case _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].ADD_STORY:
      return _objectSpread(_objectSpread({}, state), {}, {
        message: action.payload.message,
        storyId: action.payload.storyId,
        loadingStory: action.payload.loading
      });

    case _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].ADD_CHAPTER:
      return _objectSpread(_objectSpread({}, state), {}, {
        message: action.payload.message,
        chapId: action.payload.chapId,
        loadingChapter: action.payload.loading
      });

    case _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].EDIT_CHAPTER:
      return _objectSpread(_objectSpread({}, state), {}, {
        message: action.payload.message,
        loadingChapter: action.payload.loading
      });

    case _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].DELETE_CHAPTER:
      return _objectSpread(_objectSpread({}, state), {}, {
        message: action.payload.message,
        loadingChapter: action.payload.loadingChapter
      });

    case _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].EDIT_STORY:
      return _objectSpread(_objectSpread({}, state), {}, {
        message: action.payload.message,
        loadingStory: action.payload.loadingStory
      });

    case _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].DELETE_STORY:
      return _objectSpread(_objectSpread({}, state), {}, {
        message: action.payload.message ? action.payload.message : state.message,
        deleted: action.payload.deleted ? action.payload.deleted : state.deleted,
        loading: action.payload.loading
      });

    case _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].ADD_LOCATION:
      return _objectSpread(_objectSpread({}, state), {}, {
        locId: action.payload.locId,
        message: action.payload.message,
        loadingLoc: action.payload.loadingLoc
      });

    case _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].GET_LOCATION:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        location: action.payload ? action.payload : state.location,
        locationExists: action.locationExists
      });

    case _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].DELETE_LOCATION:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        deleted: action.payload.deleted ? action.payload.deleted : state.deleted,
        message: action.payload.message ? action.payload.message : state.message
      });

    case _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].GET_USER_STORIES:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        userStories: action.payload
      });

    case _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].GET_USER_LOCATIONS:
      return _objectSpread(_objectSpread({}, state), {}, {
        userLocations: action.payload
      });

    case _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].GET_STORY_LOCATIONS:
      return _objectSpread(_objectSpread({}, state), {}, {
        storyLocations: action.payload
      });

    case _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].GET_FAVORITE_STORIES:
      return _objectSpread(_objectSpread({}, state), {}, {
        favStories: action.payload
      });

    case _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].GET_CHAPTERS:
      return _objectSpread(_objectSpread({}, state), {}, {
        chapters: {
          loading: false,
          items: action.payload
        }
      });

    case _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].IS_STORY_FAVORITE:
      return _objectSpread(_objectSpread({}, state), {}, {
        isFavorite: action.payload,
        loadingFav: action.loadingFav
      });

    case _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].GET_STORY_LOCATIONS:
      return _objectSpread(_objectSpread({}, state), {}, {
        storyLocations: action.payload
      });

    case _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].GET_COMMENTS:
      return _objectSpread(_objectSpread({}, state), {}, {
        comments: action.payload.comments,
        userComment: action.payload.userComment,
        loadingComments: action.payload.loadingComments
      });

    case _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].SUBMIT_COMMENT:
      return _objectSpread(_objectSpread({}, state), {}, {
        message: action.message
      });

    case _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].RATE_COMMENT:
      return _objectSpread(_objectSpread({}, state), {}, {
        rated: action.rated
      });

    case _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].GET_STORIES_FROM_SEARCH:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: action.loading,
        storiesFromSearch: action.payload ? action.payload : state.storiesFromSearch
      });

    case _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].GET_HOME_STORIES:
      return _objectSpread(_objectSpread({}, state), {}, {
        homeStories: action.payload
      });

    case _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].GET_FEATURED_STORIES:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: action.loading,
        featuredStories: action.payload
      });

    case _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].GET_USER_RATE:
      return _objectSpread(_objectSpread({}, state), {}, {
        userNote: action.payload
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (storiesReducer);

/***/ }),

/***/ "./redux/store.js":
/*!************************!*\
  !*** ./redux/store.js ***!
  \************************/
/*! exports provided: newStore, wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newStore", function() { return newStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapper", function() { return wrapper; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-firestore */ "redux-firestore");
/* harmony import */ var redux_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux-firebase */ "react-redux-firebase");
/* harmony import */ var react_redux_firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux_firebase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reducers */ "./redux/reducers/index.js");
/* harmony import */ var _fbConfig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fbConfig */ "./redux/fbConfig.js");







const initialState = {};
const newStore = () => {
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_5__["default"], initialState, Object(redux__WEBPACK_IMPORTED_MODULE_0__["compose"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_4___default.a.withExtraArgument({
    getFirebase: react_redux_firebase__WEBPACK_IMPORTED_MODULE_3__["getFirebase"],
    getFirestore: redux_firestore__WEBPACK_IMPORTED_MODULE_2__["getFirestore"]
  })), Object(redux_firestore__WEBPACK_IMPORTED_MODULE_2__["reduxFirestore"])(_fbConfig__WEBPACK_IMPORTED_MODULE_6__["default"])));
};
const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__["createWrapper"])(newStore, {
  debug: true
});

/***/ }),

/***/ "./style/custom-antd.less":
/*!********************************!*\
  !*** ./style/custom-antd.less ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./style/main.scss":
/*!*************************!*\
  !*** ./style/main.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {



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

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


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

/***/ "aos":
/*!**********************!*\
  !*** external "aos" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("aos");

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

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

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

/***/ "react-redux-firebase":
/*!***************************************!*\
  !*** external "react-redux-firebase" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux-firebase");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-firestore":
/*!**********************************!*\
  !*** external "redux-firestore" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-firestore");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbW1vbi9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb21tb24vRnVsbE1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb21tb24vSGVhZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29tbW9uL0xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbW1vbi9NZW51LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29tbW9uL01lbnVCbG9jLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29tbW9uL05hdmJhci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbW1vbi9TdGlja3lNZW51LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZm9ybXMvU2VhcmNoLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbm90aWZpY2F0aW9ucy9Ob3RpZkl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9ub3RpZmljYXRpb25zL05vdGlmaWNhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vaG9va3Mvbm90aWZpY2F0aW9uc0hvb2tzLmpzIiwid2VicGFjazovLy8uL2hvb2tzL3VzZXJIb29rcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvYXBwLmpzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbGluay50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2VzY2FwZS1wYXRoLWRlbGltaXRlcnMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXRoLW1hdGNoLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3ByZXBhcmUtZGVzdGluYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzIiwid2VicGFjazovLy8uLi8uLi9wYWdlcy9fYXBwLnRzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvZmJDb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvcmVkdWNlcnMvYXV0aFJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvcmVkdWNlcnMvY2hhcmFjdGVyc1JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvcmVkdWNlcnMvc3Rvcmllc1JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2R1bW15LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbnQtZGVzaWduL2ljb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL2FwcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL2F1dGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9maXJlc3RvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9zdG9yYWdlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eC1maXJlYmFzZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtZmlyZXN0b3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtdGh1bmtcIiJdLCJuYW1lcyI6WyJGb290ZXIiLCJDQVRFR09SSUVTIiwibWFwIiwiYyIsImNhbHVlIiwibmFtZSIsIkZ1bGxNZW51IiwibWVudVZpc2libGUiLCJ0b2dnbGVNZW51IiwiY2F0IiwidmFsdWUiLCJIZWFkZXIiLCJtZW51UmVmIiwiaXNPcGVuIiwib3Blbk1lbnUiLCJMYXlvdXQiLCJjaGlsZHJlbiIsIlJlYWN0IiwidXNlUmVmIiwibm90aWZpY2F0aW9ucyIsInVzZU5vdGlmY2F0aW9ucyIsInNldE9wZW4iLCJ1c2VTdGF0ZSIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwib3Blbkxhbmd1YWdlIiwic2V0T3Blbkxhbmd1YWdlIiwibG9jYWxlIiwic2V0TG9jYWxlIiwidG9nZ2xlTm90aWZpY2F0aW9ucyIsImUiLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGlja091dHNpZGVNZW51IiwiY3VycmVudCIsImNvbnRhaW5zIiwidGFyZ2V0Iiwicm91dGVyIiwidXNlUm91dGVyIiwiY291bnQiLCJwYXRobmFtZSIsImZvbnRXZWlnaHQiLCJ0ZXh0VHJhbnNmb3JtIiwiY29sb3IiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiTWVudSIsIk1lbnVCbG9jIiwibGluayIsInRpdGxlIiwiaWNvbiIsIk5hdmJhciIsIm5vdGlmaWNhdGlvbnNDb3VudCIsInNlYXJjaFZpc2libGUiLCJzZXRTZWFyY2hWaXNpYmxlIiwic2V0TWVudVZpc2libGUiLCJjdGFWaXNpYmxlIiwic2V0Q3RhVmlzaWJsZSIsImF1dGgiLCJ1c2VBdXRoIiwibG9nb3V0Iiwic2lnbm91dCIsImlzTG9hZGluZyIsInVzZXIiLCJ1c2VybmFtZSIsImltYWdlIiwiZHVtbXkiLCJhdmF0YXIiLCJwdXNoIiwiU3RpY2t5TWVudSIsIlNlYXJjaCIsInR5cGUiLCJzZXRUeXBlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJzdWJtaXRTZWFyY2giLCJzZWFyY2giLCJxdWVyeSIsIk5vdGlmSXRlbSIsIm4iLCJub3RpZiIsInN0b3J5SWQiLCJjaGFyYWN0ZXJJZCIsImNoYXB0ZXJJZCIsInNlbmRlciIsIm9wZW5MaW5rIiwibWFya0FzUmVhZCIsImlkIiwicmVhZCIsIm1lc3NhZ2UiLCJjdXJzb3IiLCJkZWxldGVPbmUiLCJOb3RpZmljYXRpb25zIiwibWFya0FsbEFzUmVhZCIsImRlbGV0ZUFsbCIsIml0ZW1zIiwibGVuZ3RoIiwiRW1wdHkiLCJQUkVTRU5URURfSU1BR0VfU0lNUExFIiwibm90aWZpY2F0aW9uQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJQcm92aWRlTm90aWZpY2F0aW9uIiwidXNlUHJvdmlkZU5vdGlmaWNhdGlvbiIsInVzZUNvbnRleHQiLCJzZXROb3RpZmljYXRpb25zIiwic2V0SXNMb2FkaW5nIiwic2V0Q291bnQiLCJkYiIsImNvbGxlY3Rpb24iLCJkb2MiLCJ1cGRhdGUiLCJkZWxldGUiLCJiYXRjaCIsInVzZXJJZCIsImN1cnJlbnRVc2VyIiwidWlkIiwid2hlcmUiLCJnZXQiLCJ0aGVuIiwiZGF0YSIsImZvckVhY2giLCJjb21taXQiLCJ1bnN1YnNjcmliZSIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsIm9uU25hcHNob3QiLCJkb2NzIiwic29ydCIsImEiLCJiIiwiY3JlYXRlZEF0IiwiRGF0ZSIsInNlY29uZHMiLCJnZXRVc2VycyIsInVzZXJzIiwidSIsImZpbmQiLCJmaWx0ZXIiLCJhdXRoQ29udGV4dCIsIlByb3ZpZGVBdXRoIiwidXNlUHJvdmlkZUF1dGgiLCJzZXRVc2VyIiwiZXJyb3JzIiwic2V0RXJyb3JzIiwicGFzc3dvcmQiLCJlbWFpbCIsInNpZ25pbiIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwicmVzcG9uc2UiLCJjYXRjaCIsImVyciIsImNvZGUiLCJzaWduSW5XaXRoR29vZ2xlIiwic2lnbkluV2l0aFBvcHVwIiwicHJvdmlkZXIiLCJjb25zb2xlIiwibG9nIiwic2lnbnVwIiwiY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwic2V0IiwibGlrZXNDb3VudCIsInR3aXR0ZXIiLCJmYWNlYm9vayIsImluc3RhZ3JhbSIsImRldmlhbnRhcnQiLCJiaW9ncmFwaHkiLCJiYWRnZXMiLCJmaXJlYmFzZSIsImZpcmVzdG9yZSIsIkZpZWxkVmFsdWUiLCJzZXJ2ZXJUaW1lc3RhbXAiLCJzdXNwZW5kZWQiLCJzZW5kRW1haWxWZXJpZmljYXRpb24iLCJzaWduT3V0Iiwic2VuZFBhc3N3b3JkUmVzZXRFbWFpbCIsImNvbmZpcm1QYXNzd29yZFJlc2V0IiwiY2hhbmdlVXNlcm5hbWUiLCJ2ZXJpZnlFbWFpbCIsImluZm8iLCJlcnJvciIsImRlbGV0ZUFjY291bnQiLCJleGlzdHMiLCJsaXN0ZW5lcnMiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIndpbmRvdyIsInByZWZldGNoZWQiLCJjYWNoZWRPYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImNiIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsIm9ic2VydmVyIiwiZ2V0T2JzZXJ2ZXIiLCJocmVmIiwiZXZlbnQiLCJub2RlTmFtZSIsImlzTW9kaWZpZWRFdmVudCIsInNjcm9sbCIsImFzIiwicmVwbGFjZSIsInN1Y2Nlc3MiLCJhcmdzIiwia2V5IiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwiT2JqZWN0IiwicHJvcHMiLCJjcmVhdGVQcm9wRXJyb3IiLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwic2hhbGxvdyIsInBhc3NIcmVmIiwicHJlZmV0Y2giLCJvcHRpb25hbFByb3BzIiwiaGFzV2FybmVkIiwicCIsInJlc29sdmVkQXMiLCJjaGlsZEVsbSIsImlzUHJlZmV0Y2hlZCIsImNoaWxkIiwiQ2hpbGRyZW4iLCJjaGlsZFByb3BzIiwicmVmIiwiZWwiLCJzZXRDaGlsZEVsbSIsIm9uQ2xpY2siLCJsaW5rQ2xpY2tlZCIsInByaW9yaXR5IiwiTGluayIsInBhdGgiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInByb2Nlc3MiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiUm91dGVyIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJldmVudEZpZWxkIiwiX3NpbmdsZXRvblJvdXRlciIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsIkFycmF5IiwiQ29tcG9zZWRDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJXaXRoUm91dGVyV3JhcHBlciIsImFsbCIsIm9uIiwib2ZmIiwiZW1pdCIsImhhbmRsZXIiLCJiYXNlUGF0aCIsImNhbmNlbGxlZCIsInByZWZpeCIsImFkZFBhdGhQcmVmaXgiLCJ1cmwiLCJsb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiaGFzQmFzZVBhdGgiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImR5bmFtaWNHcm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsImFzUGF0aG5hbWUiLCJwYXJhbXMiLCJwYXJhbSIsInJlcGxhY2VkIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJlc2NhcGVQYXRoRGVsaW1pdGVycyIsInJlc3VsdCIsImZpbHRlcmVkUXVlcnkiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmaW5hbFVybCIsImludGVycG9sYXRlZEFzIiwiaW50ZXJwb2xhdGVBcyIsImhhc2giLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJyZXNvbHZlZEhyZWYiLCJyZXNvbHZlQXMiLCJQQUdFX0xPQURfRVJST1IiLCJTeW1ib2wiLCJhZGRCYXNlUGF0aCIsInJlc29sdmVIcmVmIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJjcmVkZW50aWFscyIsInJlcyIsImF0dGVtcHRzIiwiZmV0Y2hSZXRyeSIsImlzU2VydmVyUmVuZGVyIiwibWFya0xvYWRpbmdFcnJvciIsImNvbnN0cnVjdG9yIiwicm91dGUiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIl9pbkZsaWdodFJvdXRlIiwiX3NoYWxsb3ciLCJsb2NhbGVzIiwiZGVmYXVsdExvY2FsZSIsInN0YXRlIiwib3B0aW9ucyIsInN0eWxlU2hlZXRzIiwiX19OX1NTRyIsImluaXRpYWxQcm9wcyIsIl9fTl9TU1AiLCJDb21wb25lbnQiLCJfX05FWFRfREFUQV9fIiwicmVsb2FkIiwiYmFjayIsInByZXBhcmVVcmxBcyIsImlzTG9jYWxVUkwiLCJTVCIsInBlcmZvcm1hbmNlIiwiYWRkTG9jYWxlIiwiY2xlYW5lZEFzIiwiZGVsTG9jYWxlIiwiZGVsQmFzZVBhdGgiLCJwYWdlcyIsIl9fcmV3cml0ZXMiLCJwYXJzZWQiLCJtZXRob2QiLCJwb3RlbnRpYWxIcmVmIiwicGFyc2VkQXMiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsInJvdXRlSW5mbyIsImRlc3RpbmF0aW9uIiwicGFyc2VkSHJlZiIsImFwcENvbXAiLCJjaGFuZ2VTdGF0ZSIsIl9fTiIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJwYWdlIiwiY2FjaGVkUm91dGVJbmZvIiwicmVxdWlyZSIsImlzVmFsaWRFbGVtZW50VHlwZSIsImRhdGFIcmVmIiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImlkRWwiLCJuYW1lRWwiLCJ1cmxJc05ldyIsIl9yZXNvbHZlSHJlZiIsImFwcGx5QmFzZVBhdGgiLCJjbGVhblBhdGhuYW1lIiwiUHJvbWlzZSIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiZm4iLCJfZ2V0U3RhdGljRGF0YSIsImZldGNoTmV4dERhdGEiLCJfZ2V0U2VydmVyRGF0YSIsIkFwcFRyZWUiLCJjdHgiLCJhYm9ydENvbXBvbmVudExvYWQiLCJub3RpZnkiLCJzZWdtZW50IiwiY2hhciIsImVuY29kZVVSSUNvbXBvbmVudCIsInNsYXNoZWRQcm90b2NvbHMiLCJwcm90b2NvbCIsInVybE9iaiIsImhvc3QiLCJob3N0bmFtZSIsIlN0cmluZyIsInF1ZXJ5c3RyaW5nIiwiVEVTVF9ST1VURSIsIkRVTU1ZX0JBU0UiLCJyZXNvbHZlZEJhc2UiLCJvcmlnaW4iLCJtYXRjaGVyT3B0aW9ucyIsInNlbnNpdGl2ZSIsImRlbGltaXRlciIsImN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMiLCJzdHJpY3QiLCJjdXN0b21Sb3V0ZSIsImtleXMiLCJtYXRjaGVyUmVnZXgiLCJwYXRoVG9SZWdleHAiLCJtYXRjaGVyIiwicGFyc2VkRGVzdGluYXRpb24iLCJkZXN0UXVlcnkiLCJkZXN0UGF0aCIsImRlc3RQYXRoUGFyYW1LZXlzIiwiZGVzdFBhdGhQYXJhbXMiLCJkZXN0aW5hdGlvbkNvbXBpbGVyIiwidmFsaWRhdGUiLCJzdHJPckFycmF5IiwicXVlcnlDb21waWxlciIsInBhcmFtS2V5cyIsImFwcGVuZFBhcmFtc1RvUXVlcnkiLCJzaG91bGRBZGRCYXNlUGF0aCIsIm5ld1VybCIsInNlYXJjaFBhcmFtcyIsImlzTmFOIiwiaXRlbSIsInN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0iLCJzZWFyY2hQYXJhbXNMaXN0IiwiY3VzdG9tUm91dGVNYXRjaGVyIiwicmV3cml0ZSIsImRlc3RSZXMiLCJyZSIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsInNsdWdOYW1lIiwiZyIsImdyb3VwcyIsIm0iLCJzdHIiLCJzZWdtZW50cyIsIm5vcm1hbGl6ZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJwYXJzZVBhcmFtZXRlciIsInBvcyIsImVzY2FwZVJlZ2V4Iiwicm91dGVLZXlDaGFyQ29kZSIsInJvdXRlS2V5Q2hhckxlbmd0aCIsImdldFNhZmVSb3V0ZUtleSIsInJvdXRlS2V5IiwiaSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJwYXJzZUludCIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiY29tcG9uZW50RGlkQ2F0Y2giLCJyZW5kZXIiLCJjcmVhdGVVcmwiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwiYXBwR2V0SW5pdGlhbFByb3BzIiwid2FybkNvbnRhaW5lciIsIndhcm5VcmwiLCJwdXNoVG8iLCJwdXNoUm91dGUiLCJwdXNoVXJsIiwicmVwbGFjZVRvIiwicmVwbGFjZVJvdXRlIiwicmVwbGFjZVVybCIsIk15QXBwIiwicnJmQ29uZmlnIiwidXNlclByb2ZpbGUiLCJ1c2VGaXJlc3RvcmVGb3JQcm9maWxlIiwic3RvcmUiLCJuZXdTdG9yZSIsInJyZlByb3BzIiwiY29uZmlnIiwiZGlzcGF0Y2giLCJjcmVhdGVGaXJlc3RvcmVJbnN0YW5jZSIsIkFPUyIsImluaXQiLCJkdXJhdGlvbiIsIm9uY2UiLCJhcHBDb250ZXh0IiwiYXBwUHJvcHMiLCJ3cmFwcGVyIiwid2l0aFJlZHV4IiwicHJvZENvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJkYXRhYmFzZVVSTCIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwiRklSRUJBU0VfQVBQX0lEIiwiZGV2Q29uZmlnIiwiYXBwcyIsImluaXRpYWxpemVBcHAiLCJzdG9yYWdlIiwiR29vZ2xlQXV0aFByb3ZpZGVyIiwiaW5pdGlhbFN0YXRlIiwicHJvZmlsZSIsImZhdkF1dGhvcnMiLCJhdXRob3JzIiwiZm9sbG93ZXJzIiwiaXNGb2xsb3dpbmciLCJ1c2Vyc0Zyb21TZWFyY2giLCJwb3B1bGFyVXNlcnMiLCJyZWR1Y2VyIiwiYWN0aW9uIiwiR0VUX1BST0ZJTEUiLCJwYXlsb2FkIiwiR0VUX0ZBVk9SSVRFX0FVVEhPUlMiLCJHRVRfRk9MTE9XRVJTIiwidHlwZXMiLCJJU19GT0xMT1dJTkciLCJHRVRfTk9USUZJQ0FUSU9OUyIsIkdFVF9VU0VSU19GUk9NX1NFQVJDSCIsIkdFVF9QT1BVTEFSX1VTRVJTIiwidXNlckNoYXJhY3RlcnMiLCJmYXZDaGFyYWN0ZXJzIiwibG9hZGluZ0NoYXJhY3RlciIsImNoYXJhY3RlciIsImF1dGhvcklkIiwiZmlyc3RuYW1lIiwibGFzdG5hbWUiLCJhZ2UiLCJwdWJsaWMiLCJldGhuaWNpdHkiLCJncm91cCIsInJlc2lkZW5jZSIsImRlc2NyaXB0aW9uIiwibmlja25hbWUiLCJvY2N1cGF0aW9uIiwicmVsYXRpdmVzIiwiY2hhcmFFeGlzdHMiLCJzZWNvbmRhcnlDaGFyYWN0ZXJzIiwibWFpbkFyciIsImRlbGV0ZWQiLCJpc0Zhdm9yaXRlIiwibG9hZGluZ0ZhdiIsImNoYXJhY3RlcnNGcm9tU2VhcmNoIiwicG9wdWxhckNoYXJhY3RlcnMiLCJjaGFyYWN0ZXJzUmVkdWNlciIsIkFERF9DSEFSQUNURVIiLCJFRElUX0NIQVJBQ1RFUiIsIkRFTEVURV9DSEFSQUNURVIiLCJHRVRfQ0hBUkFDVEVSIiwiR0VUX1VTRVJfQ0hBUkFDVEVSUyIsIkdFVF9GQVZPUklURV9DSEFSQUNURVJTIiwiR0VUX1NUT1JZX0NIQVJBQ1RFUlMiLCJJU19DSEFSQUNURVJfRkFWT1JJVEUiLCJHRVRfQ0hBUkFDVEVSU19GUk9NX1NFQVJDSCIsIkdFVF9QT1BVTEFSX0NIQVJBQ1RFUlMiLCJyb290UmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsImF1dGhSZWR1Y2VyIiwiZmlyZWJhc2VSZWR1Y2VyIiwiZmlyZXN0b3JlUmVkdWNlciIsInN0b3JpZXMiLCJzdG9yaWVzUmVkdWNlciIsImNoYXJhY3RlcnMiLCJ1c2VyU3RvcmllcyIsImhvbWVTdG9yaWVzIiwiZmF2U3RvcmllcyIsInN0b3J5TG9jYXRpb25zIiwic3RvcnkiLCJiYW5uZXIiLCJzdW1tYXJ5IiwiYXV0aG9yTmFtZSIsInRhZ3MiLCJtYWluQ2hhcmFjdGVycyIsImNoYXB0ZXJzIiwibG9hZGluZ1N0b3J5IiwibG9hZGluZ0NoYXB0ZXIiLCJzdG9yeUV4aXN0cyIsInVzZXJMb2NhdGlvbnMiLCJjaGFwSWQiLCJsb2NJZCIsImNoYXB0ZXIiLCJudW1iZXIiLCJib2R5IiwibG9jYXRpb25zIiwic3RhdHVzIiwibG9jYXRpb24iLCJpbWFnZUNvcHlyaWdodCIsImNvbW1lbnRzIiwibG9hZGluZ0NvbW1lbnRzIiwiY2hhcHRlckV4aXN0cyIsImxvYWRpbmdMb2MiLCJsb2NhdGlvbkV4aXN0cyIsInVzZXJDb21tZW50IiwiY29udGVudCIsInJhdGVkIiwic3Rvcmllc0Zyb21TZWFyY2giLCJmZWF0dXJlZFN0b3JpZXMiLCJ1c2VyTm90ZSIsIkRJU1BBVENIX0VSUk9SIiwiR0VUX1NUT1JZIiwiR0VUX0NIQVBURVIiLCJBRERfU1RPUlkiLCJBRERfQ0hBUFRFUiIsIkVESVRfQ0hBUFRFUiIsIkRFTEVURV9DSEFQVEVSIiwiRURJVF9TVE9SWSIsIkRFTEVURV9TVE9SWSIsIkFERF9MT0NBVElPTiIsIkdFVF9MT0NBVElPTiIsIkRFTEVURV9MT0NBVElPTiIsIkdFVF9VU0VSX1NUT1JJRVMiLCJHRVRfVVNFUl9MT0NBVElPTlMiLCJHRVRfU1RPUllfTE9DQVRJT05TIiwiR0VUX0ZBVk9SSVRFX1NUT1JJRVMiLCJHRVRfQ0hBUFRFUlMiLCJJU19TVE9SWV9GQVZPUklURSIsIkdFVF9DT01NRU5UUyIsIlNVQk1JVF9DT01NRU5UIiwiUkFURV9DT01NRU5UIiwiR0VUX1NUT1JJRVNfRlJPTV9TRUFSQ0giLCJHRVRfSE9NRV9TVE9SSUVTIiwiR0VUX0ZFQVRVUkVEX1NUT1JJRVMiLCJHRVRfVVNFUl9SQVRFIiwiY3JlYXRlU3RvcmUiLCJjb21wb3NlIiwiYXBwbHlNaWRkbGV3YXJlIiwidGh1bmsiLCJ3aXRoRXh0cmFBcmd1bWVudCIsImdldEZpcmViYXNlIiwiZ2V0RmlyZXN0b3JlIiwicmVkdXhGaXJlc3RvcmUiLCJmYkNvbmZpZyIsImNyZWF0ZVdyYXBwZXIiLCJkZWJ1ZyIsIkNPUFlSSUdIVFMiLCJMQU5HVUFHRVMiLCJTVEFUVVMiLCJMT0dJTiIsIlJFR0lTVEVSIiwiUkFURV9TVE9SWSIsIkdFVF9DSEFSQUNURVJfQ09NTUVOVFMiLCJFRElUX0xPQ0FUSU9OIiwicGVyc29uIiwiY292ZXIiLCJwb3N0ZXIiLCJub0ltYWdlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7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dmtCLFFBQU0sRUFBRSx5REFQVztBQVFuQndrQixTQUFPLEVBQUU7QUFSVSxDQUFkLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQVAsOEM7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsZ0M7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsaUQ7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsd0MiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgU2VsZWN0LCBTcGFjZSwgRGl2aWRlciwgUm93LCBDb2wgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyBDQVRFR09SSUVTIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2NvbnN0YW50c1wiO1xyXG5cclxuY29uc3QgRm9vdGVyID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cIm1haW4tZm9vdGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXItZm9vdGVyXCI+XHJcbiAgICAgICAgPFJvdyBndXR0ZXI9ezQyfT5cclxuICAgICAgICAgIDxDb2wgeGw9ezZ9IGxnPXs4fSBtZD17MTJ9IHNtPXsyNH0geHM9ezI0fT5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibGlua3NcIj5cclxuICAgICAgICAgICAgICA8aDQ+TGlua3M8L2g0PlxyXG4gICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8YT5Ib21lPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRvdFwiPiZidWxsOzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZmlsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPlByb2ZpbGU8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZG90XCI+JmJ1bGw7PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9leHBsb3JlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+RXhwbG9yZTwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIHsvKiA8RGl2aWRlciAvPiAqL31cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgICAgPENvbCB4bD17Nn0gbGc9ezl9IG1kPXsxMn0gc209ezI0fSB4cz17MjR9PlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJhYm91dFwiPlxyXG4gICAgICAgICAgICAgIDxoND5BYm91dCBLcm9uaWtlYTwvaDQ+XHJcbiAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+QWJvdXQ8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZG90XCI+JmJ1bGw7PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ydWxlc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPlJ1bGVzPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRvdFwiPiZidWxsOzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZmVlZGJhY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YT5GZWVkYmFjazwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkb3RcIj4mYnVsbDs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbnRhY3RcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YT5Db250YWN0PC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgey8qIDxEaXZpZGVyIC8+ICovfVxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDxDb2wgeGw9ezl9IGxnPXs3fSBtZD17MTJ9IHNtPXsyNH0geHM9ezI0fT5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY2F0ZWdvcmllc1wiPlxyXG4gICAgICAgICAgICAgIDxoND5DYXRlZ29yaWVzPC9oND5cclxuICAgICAgICAgICAgICA8U2VsZWN0IHZhbHVlPVwibm9uZVwiPlxyXG4gICAgICAgICAgICAgICAgPFNlbGVjdC5PcHRpb24gdmFsdWU9XCJub25lXCI+Q2hvb3NlIGEgY2F0ZWdvcnk8L1NlbGVjdC5PcHRpb24+XHJcbiAgICAgICAgICAgICAgICB7Q0FURUdPUklFUy5tYXAoKGMpID0+IChcclxuICAgICAgICAgICAgICAgICAgPFNlbGVjdC5PcHRpb24gdmFsdWU9e2MuY2FsdWV9PntjLm5hbWV9PC9TZWxlY3QuT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgey8qIDxEaXZpZGVyIC8+ICovfVxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDxDb2wgeGw9ezN9IGxnPXs4fSBtZD17MTJ9IHNtPXsyNH0geHM9ezI0fT5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic29jaWFsc1wiPlxyXG4gICAgICAgICAgICAgIDxoND5Tb2NpYWwgTGlua3M8L2g0PlxyXG4gICAgICAgICAgICAgIDxTcGFjZSBhbGlnbj1cImNlbnRlclwiIHNpemU9ezE2fT5cclxuICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24gY3VzdG9tLWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW9uLWljb24gbmFtZT1cImxvZ28tZmFjZWJvb2tcIj48L2lvbi1pY29uPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24gY3VzdG9tLWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW9uLWljb24gbmFtZT1cImxvZ28tdHdpdHRlclwiPjwvaW9uLWljb24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbiBjdXN0b20taWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpb24taWNvbiBuYW1lPVwibG9nby1pbnN0YWdyYW1cIj48L2lvbi1pY29uPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L1NwYWNlPlxyXG4gICAgICAgICAgICAgIHsvKiA8RGl2aWRlciAvPiAqL31cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9mb290ZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcclxuIiwiaW1wb3J0IHsgRGl2aWRlciB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmltcG9ydCBNZW51QmxvYyBmcm9tIFwiLi9NZW51QmxvY1wiO1xyXG5pbXBvcnQgeyBDQVRFR09SSUVTIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2NvbnN0YW50c1wiO1xyXG5cclxuY29uc3QgRnVsbE1lbnUgPSAoeyBtZW51VmlzaWJsZSwgdG9nZ2xlTWVudSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtgZnVsbHNjcmVlbi1tZW51ICR7bWVudVZpc2libGUgPyBcInZpc2libGVcIiA6IFwiXCJ9YH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xvc2UtYnRuIGN1c3RvbS1idG5cIiBvbkNsaWNrPXt0b2dnbGVNZW51fT5cclxuICAgICAgICA8aW9uLWljb24gbmFtZT1cImNsb3NlXCI+PC9pb24taWNvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS1pbm5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS1zaWRlXCI+XHJcbiAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm1lbnUtbmF2XCI+XHJcbiAgICAgICAgICAgIDxNZW51QmxvY1xyXG4gICAgICAgICAgICAgIHRvZ2dsZU1lbnU9e3RvZ2dsZU1lbnV9XHJcbiAgICAgICAgICAgICAgdGl0bGU9XCJIb21lXCJcclxuICAgICAgICAgICAgICBsaW5rPVwiL1wiXHJcbiAgICAgICAgICAgICAgaWNvbj1cImhvbWVcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8TWVudUJsb2NcclxuICAgICAgICAgICAgICB0b2dnbGVNZW51PXt0b2dnbGVNZW51fVxyXG4gICAgICAgICAgICAgIHRpdGxlPVwiUHJvZmlsZVwiXHJcbiAgICAgICAgICAgICAgbGluaz1cIi9wcm9maWxlXCJcclxuICAgICAgICAgICAgICBpY29uPVwicGVyc29uXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPE1lbnVCbG9jXHJcbiAgICAgICAgICAgICAgdG9nZ2xlTWVudT17dG9nZ2xlTWVudX1cclxuICAgICAgICAgICAgICB0aXRsZT1cIkJyb3dzZVwiXHJcbiAgICAgICAgICAgICAgbGluaz1cIi9icm93c2VcIlxyXG4gICAgICAgICAgICAgIGljb249XCJmb2xkZXItb3BlblwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxNZW51QmxvY1xyXG4gICAgICAgICAgICAgIHRvZ2dsZU1lbnU9e3RvZ2dsZU1lbnV9XHJcbiAgICAgICAgICAgICAgdGl0bGU9XCJSZXN1bWUgcmVhZGluZ1wiXHJcbiAgICAgICAgICAgICAgbGluaz1cIi9cIlxyXG4gICAgICAgICAgICAgIGljb249XCJib29rXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPE1lbnVCbG9jXHJcbiAgICAgICAgICAgICAgdG9nZ2xlTWVudT17dG9nZ2xlTWVudX1cclxuICAgICAgICAgICAgICB0aXRsZT1cIkFib3V0XCJcclxuICAgICAgICAgICAgICBsaW5rPVwiL2Fib3V0XCJcclxuICAgICAgICAgICAgICBpY29uPVwiaW5mb3JtYXRpb24tY2lyY2xlXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPE1lbnVCbG9jXHJcbiAgICAgICAgICAgICAgdG9nZ2xlTWVudT17dG9nZ2xlTWVudX1cclxuICAgICAgICAgICAgICB0aXRsZT1cIkZlZWRiYWNrXCJcclxuICAgICAgICAgICAgICBsaW5rPVwiL2ZlZWRiYWNrXCJcclxuICAgICAgICAgICAgICBpY29uPVwiY2hhdGJ1YmJsZXNcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXQtYmxvY1wiPlxyXG4gICAgICAgICAgPGgyPkNhdGVnb3JpZXM8L2gyPlxyXG4gICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJjYXQtbmF2XCI+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICB7Q0FURUdPUklFUy5tYXAoKGNhdCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGxpIGtleT17Y2F0LnZhbHVlfSBvbkNsaWNrPXt0b2dnbGVNZW51fT5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9jYXRlZ29yeS8ke2NhdC52YWx1ZX1gfT5cclxuICAgICAgICAgICAgICAgICAgICA8YT57Y2F0Lm5hbWV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZ1bGxNZW51O1xyXG4iLCIvLyBpbXBvcnQgU2VhcmNoU2hhcnBJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TZWFyY2hTaGFycCc7XHJcbmltcG9ydCBNZW51IGZyb20gXCIuL01lbnVcIjtcclxuXHJcbmNvbnN0IEhlYWRlciA9ICh7IG1lbnVSZWYsIGlzT3Blbiwgb3Blbk1lbnUgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIDxoZWFkZXIgaWQ9XCJtYWluLWhlYWRlclwiPlxyXG4gICAgICAgIDxkaXYgaWQ9XCJtZW51LWJ0blwiIG9uQ2xpY2s9e29wZW5NZW51fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyXCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhclwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXJcIj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8aDE+S3JvbmlrZWE8L2gxPlxyXG4gICAgICAgIHsvKiA8U2VhcmNoU2hhcnBJY29uIGZvbnRTaXplPVwibWVkaXVtXCIgLz4gKi99XHJcbiAgICAgIDwvaGVhZGVyPlxyXG4gICAgICA8TWVudSBpc09wZW49e2lzT3Blbn0gbWVudVJlZj17bWVudVJlZn0gLz5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIiwiaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9IZWFkZXJcIjtcclxuaW1wb3J0IFN0aWNreU1lbnUgZnJvbSBcIi4vU3RpY2t5TWVudVwiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuL05hdmJhclwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFwiZmxhZy1pY29uLWNzcy9jc3MvZmxhZy1pY29uLm1pbi5jc3NcIjtcclxuXHJcbmltcG9ydCB7IERyYXdlciwgTW9kYWwsIFJhZGlvIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IE5vdGlmaWNhdGlvbnMgZnJvbSBcIi4uL25vdGlmaWNhdGlvbnMvTm90aWZpY2F0aW9uc1wiO1xyXG5pbXBvcnQgeyB1c2VOb3RpZmNhdGlvbnMgfSBmcm9tIFwiLi4vLi4vaG9va3Mvbm90aWZpY2F0aW9uc0hvb2tzXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vRm9vdGVyXCI7XHJcbmltcG9ydCBGdWxsTWVudSBmcm9tIFwiLi9GdWxsTWVudVwiO1xyXG5cclxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIC8vIFJlZmVyZW5jZSB0byBzaWRlIG1lbnVcclxuICBjb25zdCBtZW51UmVmID0gUmVhY3QudXNlUmVmKCk7XHJcbiAgY29uc3Qgbm90aWZpY2F0aW9ucyA9IHVzZU5vdGlmY2F0aW9ucygpO1xyXG5cclxuICBjb25zdCBbaXNPcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW29wZW5MYW5ndWFnZSwgc2V0T3Blbkxhbmd1YWdlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbG9jYWxlLCBzZXRMb2NhbGVdID0gUmVhY3QudXNlU3RhdGUoXCJlblwiKTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlTm90aWZpY2F0aW9ucyA9ICgpID0+IHNldFZpc2libGUoIXZpc2libGUpO1xyXG5cclxuICBjb25zdCBvcGVuTWVudSA9IChlKSA9PiB7XHJcbiAgICBzZXRPcGVuKCFpc09wZW4pO1xyXG4gIH07XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGNsaWNrT3V0c2lkZU1lbnUpO1xyXG4gIH0sIFttZW51UmVmLmN1cnJlbnRdKTtcclxuXHJcbiAgY29uc3QgY2xpY2tPdXRzaWRlTWVudSA9IChlKSA9PiB7XHJcbiAgICBpZiAobWVudVJlZi5jdXJyZW50ICYmICFtZW51UmVmLmN1cnJlbnQuY29udGFpbnMoZS50YXJnZXQpKSB7XHJcbiAgICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICA8TmF2YmFyXHJcbiAgICAgICAgb3Blbk1lbnU9e3NldE9wZW59XHJcbiAgICAgICAgc2V0T3Blbkxhbmd1YWdlPXtzZXRPcGVuTGFuZ3VhZ2V9XHJcbiAgICAgICAgdG9nZ2xlTm90aWZpY2F0aW9ucz17dG9nZ2xlTm90aWZpY2F0aW9uc31cclxuICAgICAgICBub3RpZmljYXRpb25zQ291bnQ9e25vdGlmaWNhdGlvbnMuY291bnQgJiYgbm90aWZpY2F0aW9ucy5jb3VudH1cclxuICAgICAgLz5cclxuICAgICAgPG1haW5cclxuICAgICAgICBjbGFzc05hbWU9e2BtYWluLWNvbnRlbnQgJHtpc09wZW4gPyBcImNvbnRlbnQtbWVudS1vcGVuXCIgOiBcIlwifSAke1xyXG4gICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09PSBcIi9cIiA/IFwiaG9tZS1jb250ZW50XCIgOiBcIlwiXHJcbiAgICAgICAgfWB9XHJcbiAgICAgID5cclxuICAgICAgICB7LyogPEhlYWRlciBtZW51UmVmPXttZW51UmVmfSBpc09wZW49e2lzT3Blbn0gb3Blbk1lbnU9e29wZW5NZW51fSAvPiAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj57Y2hpbGRyZW59PC9kaXY+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgICAgPEZvb3RlciAvPlxyXG4gICAgICB7LyogPFN0aWNreU1lbnUgLz4gKi99XHJcbiAgICAgIDxEcmF3ZXJcclxuICAgICAgICB0aXRsZT1cIk5vdGlmaWNhdGlvbnNcIlxyXG4gICAgICAgIHBsYWNlbWVudD1cInJpZ2h0XCJcclxuICAgICAgICBjbG9zYWJsZT17ZmFsc2V9XHJcbiAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0VmlzaWJsZShmYWxzZSl9XHJcbiAgICAgICAgdmlzaWJsZT17dmlzaWJsZX1cclxuICAgICAgICB3aWR0aD17ODAwfVxyXG4gICAgICAgIGhlYWRlclN0eWxlPXt7XHJcbiAgICAgICAgICBmb250V2VpZ2h0OiAzMDAsXHJcbiAgICAgICAgICB0ZXh0VHJhbnNmb3JtOiBcInVwcGVyY2FzZVwiLFxyXG4gICAgICAgICAgY29sb3I6IFwiI2FjYjlkN1wiLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8Tm90aWZpY2F0aW9ucyBzZXRWaXNpYmxlPXtzZXRWaXNpYmxlfSBub3RpZj17bm90aWZpY2F0aW9uc30gLz5cclxuICAgICAgPC9EcmF3ZXI+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIHRpdGxlPVwiQ2hhbmdlIExhbmd1YWdlXCJcclxuICAgICAgICB2aXNpYmxlPXtvcGVuTGFuZ3VhZ2V9XHJcbiAgICAgICAgd2lkdGg9ezUwMH1cclxuICAgICAgICBmb290ZXI9e251bGx9XHJcbiAgICAgICAgY2VudGVyZWQ9e3RydWV9XHJcbiAgICAgICAgY2xvc2FibGU9e2ZhbHNlfVxyXG4gICAgICAgIG9uT2s9eygpID0+IHNldE9wZW5MYW5ndWFnZShmYWxzZSl9XHJcbiAgICAgICAgb25DYW5jZWw9eygpID0+IHNldE9wZW5MYW5ndWFnZShmYWxzZSl9XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxSYWRpby5Hcm91cFxyXG4gICAgICAgICAgICB2YWx1ZT17bG9jYWxlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldExvY2FsZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxSYWRpby5CdXR0b24ga2V5PVwiZW5cIiB2YWx1ZT17XCJlblwifT5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGFnLWljb24gZmxhZy1pY29uLWdiXCI+PC9zcGFuPiBFbmdsaXNoXHJcbiAgICAgICAgICAgIDwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICA8UmFkaW8uQnV0dG9uIGtleT1cImZyXCIgdmFsdWU9e1wiZnJcIn0+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxhZy1pY29uIGZsYWctaWNvbi1mclwiPjwvc3Bhbj4gRnJhbsOnYWlzXHJcbiAgICAgICAgICAgIDwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgPC9SYWRpby5Hcm91cD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgPEZ1bGxNZW51IHRvZ2dsZU1lbnU9e29wZW5NZW51fSBtZW51VmlzaWJsZT17aXNPcGVufSAvPlxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xyXG4iLCJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbi8vIGltcG9ydCBIb21lSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0hvbWVcIjtcclxuLy8gaW1wb3J0IEV4cGxvcmVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRXhwbG9yZVwiO1xyXG4vLyBpbXBvcnQgU2V0dGluZ3NJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2V0dGluZ3NcIjtcclxuLy8gaW1wb3J0IEluZm9JY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvSW5mb1wiO1xyXG4vLyBpbXBvcnQgRW1haWxJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRW1haWxcIjtcclxuLy8gaW1wb3J0IEdhdmVsSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0dhdmVsXCI7XHJcbi8vIGltcG9ydCBBY2NvdW50Q2lyY2xlSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0FjY291bnRDaXJjbGVcIjtcclxuLy8gaW1wb3J0IHsgU3dpdGNoIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbi8vIGltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbi8vIGltcG9ydCB7IHJlZCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnNcIjtcclxuLy8gaW1wb3J0IEZlZWRiYWNrU2hhcnBJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRmVlZGJhY2tTaGFycFwiO1xyXG5cclxuLy8gY29uc3QgQ3VzdG9tU3dpdGNoID0gd2l0aFN0eWxlcyh7XHJcbi8vICAgc3dpdGNoQmFzZToge1xyXG4vLyAgICAgY29sb3I6IHJlZFszMDBdLFxyXG4vLyAgICAgXCImJGNoZWNrZWRcIjoge1xyXG4vLyAgICAgICBjb2xvcjogcmVkWzUwMF0sXHJcbi8vICAgICB9LFxyXG4vLyAgICAgXCImJGNoZWNrZWQgKyAkdHJhY2tcIjoge1xyXG4vLyAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHJlZFs1MDBdLFxyXG4vLyAgICAgfSxcclxuLy8gICB9LFxyXG4vLyAgIGNoZWNrZWQ6IHt9LFxyXG4vLyAgIHRyYWNrOiB7fSxcclxuLy8gfSkoU3dpdGNoKTtcclxuXHJcbmNvbnN0IE1lbnUgPSAoeyBpc09wZW4sIG1lbnVSZWYgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHJlZj17bWVudVJlZn0gY2xhc3NOYW1lPXtpc09wZW4gPyBcIm9wZW5cIiA6IFwiY2xvc2VkXCJ9IGlkPVwic2lkZS1tZW51XCI+XHJcbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInVzZXItYXZhdGFyXCI+XHJcbiAgICAgICAgPEFjY291bnRDaXJjbGVJY29uIGZvbnRTaXplPVwibGFyZ2VcIiAvPiA8aDI+UmF2YXZhPC9oMj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgICA8dWwgaWQ9XCJtZW51LXNpZGUtbWVudVwiPlxyXG4gICAgICAgICA8bGk+PExpbmsgaHJlZj1cIi9cIj48YT48SG9tZUljb24vPiBIb21lPC9hPjwvTGluaz48L2xpPlxyXG4gICAgICAgICA8bGk+PExpbmsgaHJlZj1cIi9cIj48YT48RXhwbG9yZUljb24vPiBFeHBsb3JlPC9hPjwvTGluaz48L2xpPlxyXG4gICAgICAgICA8bGk+PExpbmsgaHJlZj1cIi9cIj48YT48U2V0dGluZ3NJY29uLz4gU2V0dGluZ3M8L2E+PC9MaW5rPjwvbGk+XHJcbiAgICAgICAgIDxsaT48TGluayBocmVmPVwiL1wiPjxhPjxGZWVkYmFja1NoYXJwSWNvbi8+IEZlZWRiYWNrPC9hPjwvTGluaz48L2xpPlxyXG4gICAgICAgICA8bGk+PExpbmsgaHJlZj1cIi9cIj48YT48SW5mb0ljb24vPiBBYm91dDwvYT48L0xpbms+PC9saT5cclxuICAgICAgICAgPGxpPjxMaW5rIGhyZWY9XCIvXCI+PGE+PEVtYWlsSWNvbi8+IENvbnRhY3Q8L2E+PC9MaW5rPjwvbGk+XHJcbiAgICAgICAgIDxsaT48TGluayBocmVmPVwiL1wiPjxhPjxHYXZlbEljb24vPiBQcml2YWN5IFBvbGljaXk8L2E+PC9MaW5rPjwvbGk+XHJcbiAgICAgICA8L3VsPlxyXG4gICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2dnbGUtZGFyay1tb2RlXCI+XHJcbiAgICAgICAgIDxzcGFuPkVuYWJsZSBkYXJrIG1vZGUgPzwvc3Bhbj5cclxuICAgICAgICAgPEN1c3RvbVN3aXRjaC8+XHJcbiAgICAgICA8L2Rpdj4gKi99XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVudTtcclxuIiwiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBTcGFjZSB9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5jb25zdCBNZW51QmxvYyA9ICh7IGxpbmssIHRpdGxlLCBpY29uLCB0b2dnbGVNZW51IH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPExpbmsgaHJlZj17bGlua30+XHJcbiAgICAgIDxhIGNsYXNzTmFtZT1cIm1lbnUtYmxvY1wiIG9uQ2xpY2s9e3RvZ2dsZU1lbnV9PlxyXG4gICAgICAgIDxTcGFjZSBhbGlnbj1cImJhc2VsaW5lXCIgc2l6ZT17MTZ9PlxyXG4gICAgICAgICAgPGlvbi1pY29uIG5hbWU9e2ljb259PjwvaW9uLWljb24+XHJcbiAgICAgICAgICA8c3Bhbj57dGl0bGV9PC9zcGFuPlxyXG4gICAgICAgIDwvU3BhY2U+XHJcbiAgICAgIDwvYT5cclxuICAgIDwvTGluaz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVudUJsb2M7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQge1xyXG4gIE1vZGFsLFxyXG4gIFNwYWNlLFxyXG4gIFRvb2x0aXAsXHJcbiAgQnV0dG9uLFxyXG4gIFBvcGNvbmZpcm0sXHJcbiAgQmFkZ2UsXHJcbiAgUm93LFxyXG4gIENvbCxcclxufSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQge1xyXG4gIFVzZXJPdXRsaW5lZCxcclxuICBFbnZpcm9ubWVudE91dGxpbmVkLFxyXG4gIEJvb2tPdXRsaW5lZCxcclxufSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuXHJcbmltcG9ydCBTZWFyY2ggZnJvbSBcIi4uL2Zvcm1zL1NlYXJjaFwiO1xyXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSBcIi4uLy4uL2hvb2tzL3VzZXJIb29rc1wiO1xyXG5pbXBvcnQgeyBkdW1teSB9IGZyb20gXCIuLi8uLi91dGlscy9kdW1teVwiO1xyXG5cclxuY29uc3QgTmF2YmFyID0gKHtcclxuICB0b2dnbGVOb3RpZmljYXRpb25zLFxyXG4gIG5vdGlmaWNhdGlvbnNDb3VudCxcclxuICBzZXRPcGVuTGFuZ3VhZ2UsXHJcbiAgb3Blbk1lbnUsXHJcbn0pID0+IHtcclxuICBjb25zdCBbc2VhcmNoVmlzaWJsZSwgc2V0U2VhcmNoVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW21lbnVWaXNpYmxlLCBzZXRNZW51VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2N0YVZpc2libGUsIHNldEN0YVZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGF1dGggPSB1c2VBdXRoKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IHRvZ2dsZU1lbnUgPSAoKSA9PiBzZXRNZW51VmlzaWJsZSghbWVudVZpc2libGUpO1xyXG4gIGNvbnN0IGxvZ291dCA9ICgpID0+IHtcclxuICAgIGF1dGguc2lnbm91dCgpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJuYXZiYXItaGVhZGVyXCI+XHJcbiAgICAgICAgPGhlYWRlciBpZD1cIm1haW4tbmF2YmFyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyLWhlYWRlclwiPlxyXG4gICAgICAgICAgICA8aDEgaWQ9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICA8YT5Lcm9uaWtlYTwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIDxTZWFyY2ggcm91dGVyPXtyb3V0ZXJ9IC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWljb25zXCI+XHJcbiAgICAgICAgICAgICAgPFNwYWNlIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJjdXN0b20tYnRuIGN1c3RvbS1idG4tcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgPHA+TG9naW4gLyBTaWduIFVwPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICA8VG9vbHRpcCB0aXRsZT1cIkhvbWVcIiBwbGFjZW1lbnQ9XCJib3R0b21cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1pY29uIGljb25fX2hvbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpb24taWNvbiBuYW1lPVwiaG9tZVwiPjwvaW9uLWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICA8VG9vbHRpcCB0aXRsZT1cIkV4cGxvcmVcIiBwbGFjZW1lbnQ9XCJib3R0b21cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1pY29uIGljb25fX2hvbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZXhwbG9yZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW9uLWljb24gbmFtZT1cImV5ZVwiPjwvaW9uLWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICB7IWF1dGguaXNMb2FkaW5nICYmIGF1dGgudXNlciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBcclxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtgUHJvZmlsZSAtICR7YXV0aC51c2VyICYmIGF1dGgudXNlci51c2VybmFtZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50PVwiYm90dG9tXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1pY29uIGljb25fX2FjY291bnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9maWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0aC51c2VyLmltYWdlID8gYXV0aC51c2VyLmltYWdlIDogZHVtbXkuYXZhdGFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIHshYXV0aC5pc0xvYWRpbmcgJiYgYXV0aC51c2VyICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgdGl0bGU9XCJBZGQgYSBuZXcgaXRlbVwiIHBsYWNlbWVudD1cImJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0Q3RhVmlzaWJsZSh0cnVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoZWFkZXItaWNvbiBpY29uX19zZXR0aW5nc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW9uLWljb24gbmFtZT1cImFkZFwiPjwvaW9uLWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgdGl0bGU9XCJOb3RpZmljYXRpb25zXCIgcGxhY2VtZW50PVwiYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCYWRnZSBzaXplPVwiZGVmYXVsdFwiIGNvdW50PXtub3RpZmljYXRpb25zQ291bnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhlYWRlci1pY29uIGljb25fX25vdGlmIGljb25fX3NldHRpbmdzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZU5vdGlmaWNhdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlvbi1pY29uIG5hbWU9XCJub3RpZmljYXRpb25zXCI+PC9pb24taWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CYWRnZT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgdGl0bGU9XCJDaGFuZ2UgTGFuZ3VhZ2VcIiBwbGFjZW1lbnQ9XCJib3R0b21cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuTGFuZ3VhZ2UodHJ1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoZWFkZXItaWNvbiBpY29uX19zZXR0aW5nc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlvbi1pY29uIG5hbWU9XCJnbG9iZS1vdXRsaW5lXCI+PC9pb24taWNvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICA8VG9vbHRpcCB0aXRsZT1cIk5pZ2h0L0RheSBtb2RlXCIgcGxhY2VtZW50PVwiYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItaWNvbiBpY29uX19zZXR0aW5nc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlvbi1pY29uIG5hbWU9XCJjb250cmFzdFwiPjwvaW9uLWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgeyFhdXRoLmlzTG9hZGluZyAmJiBhdXRoLnVzZXIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFBvcGNvbmZpcm1cclxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRG8geW91IHJlYWxseSB3YW50IHRvIGxvZyBvdXQgP1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNvbmZpcm09e2xvZ291dH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCB0aXRsZT1cIkxvZyBvdXRcIiBwbGFjZW1lbnQ9XCJib3R0b21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItaWNvbiBpY29uX19zZXR0aW5nc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpb24taWNvbiBuYW1lPVwibG9nLW91dFwiPjwvaW9uLWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUG9wY29uZmlybT5cclxuICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCB0aXRsZT1cIkxvZyBvdXRcIiBwbGFjZW1lbnQ9XCJib3R0b21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYXV0aFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1pY29uIGljb25fX3NldHRpbmdzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW9uLWljb24gbmFtZT1cImxvZy1pblwiPjwvaW9uLWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtb2JpbGUtaWNvbiBpY29uX19ob21lXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTZWFyY2hWaXNpYmxlKHRydWUpfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlvbi1pY29uIG5hbWU9XCJzZWFyY2hcIj48L2lvbi1pY29uPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS1idG5cIiBvbkNsaWNrPXtvcGVuTWVudX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9TcGFjZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICB7LyogPGhlYWRlciBjbGFzc05hbWU9XCJjYXRlZ29yaWVzXCI+XHJcbiAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIDxsaT5EcmFtYTwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5Db21lZHk8L2xpPlxyXG4gICAgICAgICAgICA8bGk+SG9ycm9yPC9saT5cclxuICAgICAgICAgICAgPGxpPlJvbWFuY2U8L2xpPlxyXG4gICAgICAgICAgICA8bGk+U2NpLWZpPC9saT5cclxuICAgICAgICAgICAgPGxpPkZhbnRhc3k8L2xpPlxyXG4gICAgICAgICAgICA8bGk+SHVtb3I8L2xpPlxyXG4gICAgICAgICAgICA8bGk+QWN0aW9uPC9saT5cclxuICAgICAgICAgICAgPGxpPlRocmlsbGVyPC9saT5cclxuICAgICAgICAgICAgPGxpPlN1cGVybmF0dXJhbDwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5BZHZlbnR1cmU8L2xpPlxyXG4gICAgICAgICAgICA8bGk+TXlzdGVyeTwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5XZXN0ZXJuPC9saT5cclxuICAgICAgICAgICAgPGxpPkhpc3Rvcnk8L2xpPlxyXG4gICAgICAgICAgICA8bGk+Q3JpbWU8L2xpPlxyXG4gICAgICAgICAgICA8bGk+RmFuZmljdGlvbjwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvaGVhZGVyPiAqL31cclxuXHJcbiAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICBjbG9zYWJsZT17ZmFsc2V9XHJcbiAgICAgICAgICB2aXNpYmxlPXtzZWFyY2hWaXNpYmxlfVxyXG4gICAgICAgICAgb25Paz17KCkgPT4gc2V0U2VhcmNoVmlzaWJsZShmYWxzZSl9XHJcbiAgICAgICAgICBvbkNhbmNlbD17KCkgPT4gc2V0U2VhcmNoVmlzaWJsZShmYWxzZSl9XHJcbiAgICAgICAgICBmb290ZXI9e1tcclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIGtleT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlYXJjaFZpc2libGUoZmFsc2UpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgU2VhcmNoXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPixcclxuICAgICAgICAgIF19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGlucHV0IC8+XHJcbiAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICA8TW9kYWxcclxuICAgICAgICAgIGNsb3NhYmxlPXtmYWxzZX1cclxuICAgICAgICAgIHZpc2libGU9e2N0YVZpc2libGV9XHJcbiAgICAgICAgICBvbk9rPXsoKSA9PiBzZXRDdGFWaXNpYmxlKGZhbHNlKX1cclxuICAgICAgICAgIG9uQ2FuY2VsPXsoKSA9PiBzZXRDdGFWaXNpYmxlKGZhbHNlKX1cclxuICAgICAgICAgIGZvb3Rlcj17bnVsbH1cclxuICAgICAgICAgIHdpZHRoPXs3MDB9XHJcbiAgICAgICAgICBjZW50ZXJlZFxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxSb3cgZ3V0dGVyPXsxNn0ganVzdGlmeT1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICA8Q29sIHNwYW49ezh9PlxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIGJsb2NrXHJcbiAgICAgICAgICAgICAgICBodG1sVHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBpY29uPXs8VXNlck91dGxpbmVkIC8+fVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChcIi9jaGFyYWN0ZXIvbmV3XCIpO1xyXG4gICAgICAgICAgICAgICAgICBzZXRDdGFWaXNpYmxlKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQWRkIGEgbmV3IGNoYXJhY3RlclxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPENvbCBzcGFuPXs4fT5cclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBibG9ja1xyXG4gICAgICAgICAgICAgICAgaHRtbFR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgaWNvbj17PEJvb2tPdXRsaW5lZCAvPn1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvc3RvcnkvbmV3XCIpO1xyXG4gICAgICAgICAgICAgICAgICBzZXRDdGFWaXNpYmxlKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQWRkIGEgbmV3IHN0b3J5XHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIHNwYW49ezh9PlxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIGJsb2NrXHJcbiAgICAgICAgICAgICAgICBodG1sVHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBpY29uPXs8RW52aXJvbm1lbnRPdXRsaW5lZCAvPn1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvbG9jYXRpb24vbmV3XCIpO1xyXG4gICAgICAgICAgICAgICAgICBzZXRDdGFWaXNpYmxlKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQWRkIGEgbmV3IGxvY2F0aW9uXHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICB7LyogPEZ1bGxNZW51IHRvZ2dsZU1lbnU9e3RvZ2dsZU1lbnV9IG1lbnVWaXNpYmxlPXttZW51VmlzaWJsZX0gLz4gKi99XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbi8vIGltcG9ydCBIb21lSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvSG9tZSc7XHJcbi8vIGltcG9ydCBFeHBsb3JlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRXhwbG9yZSc7XHJcbi8vIGltcG9ydCBQZXJzb25JY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9QZXJzb24nO1xyXG4vLyBpbXBvcnQgQWRkQ2lyY2xlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQWRkQ2lyY2xlJztcclxuLy8gaW1wb3J0IHsgZ3JleSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL2NvbG9ycyc7XHJcblxyXG5jb25zdCBTdGlja3lNZW51ID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8bmF2IGNsYXNzTmFtZT1cInN0aWNreS1tZW51XCI+XHJcbiAgICAgIHsvKiA8SG9tZUljb24gZm9udFNpemU9XCJsYXJnZVwiIHN0eWxlPXt7IGNvbG9yOiBncmV5WzUwXSB9fS8+XHJcbiAgICAgIDxFeHBsb3JlSWNvbiBmb250U2l6ZT1cImxhcmdlXCIgc3R5bGU9e3sgY29sb3I6IGdyZXlbNTBdIH19Lz5cclxuICAgICAgPFBlcnNvbkljb24gZm9udFNpemU9XCJsYXJnZVwiIHN0eWxlPXt7IGNvbG9yOiBncmV5WzUwXSB9fS8+XHJcbiAgICAgIDxBZGRDaXJjbGVJY29uIGZvbnRTaXplPVwibGFyZ2VcIiBzdHlsZT17eyBjb2xvcjogZ3JleVs1MF0gfX0vPiAqL31cclxuICAgIDwvbmF2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdGlja3lNZW51O1xyXG4iLCJpbXBvcnQgeyBJbnB1dCwgU2VsZWN0IH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgU2VhcmNoID0gKHsgcm91dGVyIH0pID0+IHtcclxuICBjb25zdCBbdHlwZSwgc2V0VHlwZV0gPSBSZWFjdC51c2VTdGF0ZShcInN0b3JpZXNcIik7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBzdWJtaXRTZWFyY2ggPSAoc2VhcmNoKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgcm91dGVyLnB1c2goYC9zZWFyY2gvJHt0eXBlfS8ke3NlYXJjaH1gKTtcclxuICB9O1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgfSwgW3JvdXRlci5xdWVyeV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2hcIj5cclxuICAgICAgPElucHV0LlNlYXJjaCBsb2FkaW5nPXtsb2FkaW5nfSBlbnRlckJ1dHRvbiBvblNlYXJjaD17c3VibWl0U2VhcmNofSAvPlxyXG4gICAgICA8c2VsZWN0IHZhbHVlPXt0eXBlfSBvbkNoYW5nZT17KGUpID0+IHNldFR5cGUoZS50YXJnZXQudmFsdWUpfT5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwic3Rvcmllc1wiPlN0b3JpZXM8L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiY2hhcmFjdGVyc1wiPkNoYXJhY3RlcnM8L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwidXNlcnNcIj5Vc2Vyczwvb3B0aW9uPlxyXG4gICAgICA8L3NlbGVjdD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2g7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgUm93LCBDb2wsIFNwYWNlLCBUb29sdGlwIH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmNvbnN0IE5vdGlmSXRlbSA9ICh7IG4sIG5vdGlmLCByb3V0ZXIsIHNldFZpc2libGUgfSkgPT4ge1xyXG4gIGNvbnN0IGxpbmsgPVxyXG4gICAgbi50eXBlID09PSBcInN0b3J5TGlrZVwiXHJcbiAgICAgID8gYC9zdG9yeS8ke24uc3RvcnlJZH1gXHJcbiAgICAgIDogbi50eXBlID09PSBcImNoYXJhY3Rlckxpa2VcIiB8fCBuLnR5cGUgPT09IFwiY2hhcmFjdGVyQ29tbWVudFwiXHJcbiAgICAgID8gYC9jaGFyYWN0ZXIvJHtuLmNoYXJhY3RlcklkfWBcclxuICAgICAgOiBuLnR5cGUgPT09IFwiY29tbWVudFwiIHx8IG4udHlwZSA9PT0gXCJuZXdDaGFwdGVyXCJcclxuICAgICAgPyBgL3N0b3J5LyR7bi5zdG9yeUlkfS9jaGFwdGVyLyR7bi5jaGFwdGVySWR9YFxyXG4gICAgICA6IG4udHlwZSA9PT0gXCJmb2xsb3dcIlxyXG4gICAgICA/IGAvcHJvZmlsZS8ke24uc2VuZGVyfWBcclxuICAgICAgOiBudWxsO1xyXG5cclxuICBjb25zdCBvcGVuTGluayA9ICgpID0+IHtcclxuICAgIHNldFZpc2libGUoZmFsc2UpO1xyXG4gICAgbm90aWYubWFya0FzUmVhZChuLmlkKTtcclxuICAgIHJvdXRlci5wdXNoKGxpbmspO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtgbm90aWZpY2F0aW9uICR7bi5yZWFkID8gXCJub3RpZi1yZWFkXCIgOiBcIlwifWB9PlxyXG4gICAgICA8Um93IGFsaWduPVwibWlkZGxlXCIgZ3V0dGVyPXs2MH0ganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIj5cclxuICAgICAgICA8Q29sIHNwYW49ezE2fT5cclxuICAgICAgICAgIDxkaXYgb25DbGljaz17b3Blbkxpbmt9PlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJub3RpZmljYXRpb24tZGVzY1wiPlxyXG4gICAgICAgICAgICAgIDxTcGFjZSBzaXplPXsxNn0+XHJcbiAgICAgICAgICAgICAgICB7bi51c2VyLmltYWdlICYmIChcclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJub3RpZmljYXRpb24tYXZhdGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e24udXNlci5pbWFnZX0gYWx0PXtuLnVzZXIudXNlcm5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDxwPntuLm1lc3NhZ2V9PC9wPlxyXG4gICAgICAgICAgICAgIDwvU3BhY2U+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICA8Q29sIHNwYW49ezh9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJub3RpZmljYXRpb25zLWJ1dHRvbnNcIj5cclxuICAgICAgICAgICAgPFNwYWNlIHNpemU9ezIwfT5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJidG4gbWFyay1yZWFkLWJ0blwiPlxyXG4gICAgICAgICAgICAgICAge24ucmVhZCA/IChcclxuICAgICAgICAgICAgICAgICAgPGlvbi1pY29uIG5hbWU9XCJjaGVja21hcmtcIj48L2lvbi1pY29uPlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gbm90aWYubWFya0FzUmVhZChuLmlkKX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIE1hcmsgYXMgUmVhZFxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8VG9vbHRpcCB0aXRsZT1cIkRFTEVURVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gbm90aWYuZGVsZXRlT25lKG4uaWQpfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gZGVsZXRlLWJ0blwiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGN1cnNvcjogXCJwb2ludGVyXCIgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGlvbi1pY29uIG5hbWU9XCJ0cmFzaC1vdXRsaW5lXCI+PC9pb24taWNvbj5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgIDwvU3BhY2U+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgPC9Sb3c+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTm90aWZJdGVtO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEVtcHR5IH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IE5vdGlmSXRlbSBmcm9tIFwiLi9Ob3RpZkl0ZW1cIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCBOb3RpZmljYXRpb25zID0gKHsgbm90aWYsIHNldFZpc2libGUgfSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vdGlmaWNhdGlvbnNcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdGEtYnRuc1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3RhLWJ0biByZWFkLWFsbFwiIG9uQ2xpY2s9e25vdGlmLm1hcmtBbGxBc1JlYWR9PlxyXG4gICAgICAgICAgTWFyayBhbGwgYXMgcmVhZFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3RhLWJ0biBkZWxldGUtYWxsXCIgb25DbGljaz17bm90aWYuZGVsZXRlQWxsfT5cclxuICAgICAgICAgIERlbGV0ZSBhbGxcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtub3RpZi5pdGVtcy5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgIG5vdGlmLml0ZW1zLm1hcCgobikgPT4gKFxyXG4gICAgICAgICAgPE5vdGlmSXRlbVxyXG4gICAgICAgICAgICBzZXRWaXNpYmxlPXtzZXRWaXNpYmxlfVxyXG4gICAgICAgICAgICByb3V0ZXI9e3JvdXRlcn1cclxuICAgICAgICAgICAga2V5PXtuLmlkfVxyXG4gICAgICAgICAgICBuPXtufVxyXG4gICAgICAgICAgICBub3RpZj17bm90aWZ9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkpXHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPEVtcHR5XHJcbiAgICAgICAgICBpbWFnZT17RW1wdHkuUFJFU0VOVEVEX0lNQUdFX1NJTVBMRX1cclxuICAgICAgICAgIGRlc2NyaXB0aW9uPVwiTm8gbm90aWZpY2F0aW9ucyB5ZXRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTm90aWZpY2F0aW9ucztcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQsIGNyZWF0ZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgYXV0aCwgZGIgfSBmcm9tIFwiLi4vcmVkdXgvZmJDb25maWdcIjtcclxuXHJcbmNvbnN0IG5vdGlmaWNhdGlvbkNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUHJvdmlkZU5vdGlmaWNhdGlvbih7IGNoaWxkcmVuIH0pIHtcclxuICBjb25zdCBub3RpZmljYXRpb25zID0gdXNlUHJvdmlkZU5vdGlmaWNhdGlvbigpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8bm90aWZpY2F0aW9uQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17bm90aWZpY2F0aW9uc30+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvbm90aWZpY2F0aW9uQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXNlTm90aWZjYXRpb25zID0gKCkgPT4ge1xyXG4gIHJldHVybiB1c2VDb250ZXh0KG5vdGlmaWNhdGlvbkNvbnRleHQpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gdXNlUHJvdmlkZU5vdGlmaWNhdGlvbigpIHtcclxuICBjb25zdCBbbm90aWZpY2F0aW9ucywgc2V0Tm90aWZpY2F0aW9uc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIGNvbnN0IG1hcmtBc1JlYWQgPSAoaWQpID0+XHJcbiAgICBkYi5jb2xsZWN0aW9uKFwibm90aWZpY2F0aW9uc1wiKS5kb2MoaWQpLnVwZGF0ZSh7IHJlYWQ6IHRydWUgfSk7XHJcblxyXG4gIGNvbnN0IGRlbGV0ZU9uZSA9IChpZCkgPT4gZGIuY29sbGVjdGlvbihcIm5vdGlmaWNhdGlvbnNcIikuZG9jKGlkKS5kZWxldGUoKTtcclxuXHJcbiAgY29uc3QgbWFya0FsbEFzUmVhZCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGJhdGNoID0gZGIuYmF0Y2goKTtcclxuICAgIGNvbnN0IHVzZXJJZCA9IGF1dGguY3VycmVudFVzZXIudWlkO1xyXG5cclxuICAgIGRiLmNvbGxlY3Rpb24oXCJub3RpZmljYXRpb25zXCIpXHJcbiAgICAgIC53aGVyZShcInJlY2lwaWVudFwiLCBcIj09XCIsIHVzZXJJZClcclxuICAgICAgLndoZXJlKFwicmVhZFwiLCBcIj09XCIsIGZhbHNlKVxyXG4gICAgICAuZ2V0KClcclxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICBkYXRhLmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgICAgICAgYmF0Y2gudXBkYXRlKGRiLmNvbGxlY3Rpb24oXCJub3RpZmljYXRpb25zXCIpLmRvYyhkb2MuaWQpLCB7XHJcbiAgICAgICAgICAgIHJlYWQ6IHRydWUsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gYmF0Y2guY29tbWl0KCk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRlbGV0ZUFsbCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGJhdGNoID0gZGIuYmF0Y2goKTtcclxuICAgIGNvbnN0IHVzZXJJZCA9IGF1dGguY3VycmVudFVzZXIudWlkO1xyXG5cclxuICAgIGRiLmNvbGxlY3Rpb24oXCJub3RpZmljYXRpb25zXCIpXHJcbiAgICAgIC53aGVyZShcInJlY2lwaWVudFwiLCBcIj09XCIsIHVzZXJJZClcclxuICAgICAgLmdldCgpXHJcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgZGF0YS5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgICAgICAgIGJhdGNoLmRlbGV0ZShkYi5jb2xsZWN0aW9uKFwibm90aWZpY2F0aW9uc1wiKS5kb2MoZG9jLmlkKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGJhdGNoLmNvbW1pdCgpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdW5zdWJzY3JpYmUgPSBhdXRoLm9uQXV0aFN0YXRlQ2hhbmdlZCgodXNlcikgPT4ge1xyXG4gICAgICBpZiAodXNlciAmJiB1c2VyLnVpZCkge1xyXG4gICAgICAgIGRiLmNvbGxlY3Rpb24oXCJub3RpZmljYXRpb25zXCIpXHJcbiAgICAgICAgICAud2hlcmUoXCJyZWNpcGllbnRcIiwgXCI9PVwiLCB1c2VyLnVpZClcclxuICAgICAgICAgIC5vblNuYXBzaG90KGFzeW5jIChkb2NzKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBpdGVtcyA9IFtdO1xyXG4gICAgICAgICAgICBpdGVtcyA9IGRvY3MuZG9jc1xyXG4gICAgICAgICAgICAgIC5tYXAoKGRvYykgPT4gKHsgLi4uZG9jLmRhdGEoKSwgaWQ6IGRvYy5pZCB9KSlcclxuICAgICAgICAgICAgICAuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgYSA9XHJcbiAgICAgICAgICAgICAgICAgIHR5cGVvZiBhLmNyZWF0ZWRBdCAhPT0gXCJvYmplY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgID8gbmV3IERhdGUoYS5jcmVhdGVkQXQpXHJcbiAgICAgICAgICAgICAgICAgICAgOiBuZXcgRGF0ZShhLmNyZWF0ZWRBdC5zZWNvbmRzKTtcclxuICAgICAgICAgICAgICAgIGIgPVxyXG4gICAgICAgICAgICAgICAgICB0eXBlb2YgYi5jcmVhdGVkQXQgIT09IFwib2JqZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICA/IG5ldyBEYXRlKGIuY3JlYXRlZEF0KVxyXG4gICAgICAgICAgICAgICAgICAgIDogbmV3IERhdGUoYi5jcmVhdGVkQXQuc2Vjb25kcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGIgPiBhID8gLTEgOiBiIDwgYSA/IDEgOiAwO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zdCBnZXRVc2VycyA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKS5nZXQoKTtcclxuICAgICAgICAgICAgY29uc3QgdXNlcnMgPSBhd2FpdCBnZXRVc2Vycy5kb2NzLm1hcCgodSkgPT4gKHtcclxuICAgICAgICAgICAgICAuLi51LmRhdGEoKSxcclxuICAgICAgICAgICAgICBpZDogdS5pZCxcclxuICAgICAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICAgICAgaXRlbXMgPSBpdGVtcy5tYXAoKG5vdGlmKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgdXNlciA9IHVzZXJzLmZpbmQoKHUpID0+IHUuaWQgPT09IG5vdGlmLnNlbmRlcik7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLm5vdGlmLFxyXG4gICAgICAgICAgICAgICAgdXNlcjogdXNlciA/IHVzZXIgOiB7fSxcclxuICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc2V0Tm90aWZpY2F0aW9ucyhpdGVtcyk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICB9IGVsc2UgcmV0dXJuO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQ2xlYW51cCBzdWJzY3JpcHRpb24gb24gdW5tb3VudFxyXG4gICAgcmV0dXJuICgpID0+IHVuc3Vic2NyaWJlKCk7XHJcbiAgfSwgW2F1dGhdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldENvdW50KG5vdGlmaWNhdGlvbnMuZmlsdGVyKChuKSA9PiAhbi5yZWFkKS5sZW5ndGgpO1xyXG4gIH0sIFtub3RpZmljYXRpb25zXSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBpc0xvYWRpbmcsXHJcbiAgICBpdGVtczogbm90aWZpY2F0aW9ucyxcclxuICAgIG1hcmtBc1JlYWQsXHJcbiAgICBjb3VudCxcclxuICAgIGRlbGV0ZU9uZSxcclxuICAgIG1hcmtBbGxBc1JlYWQsXHJcbiAgICBkZWxldGVBbGwsXHJcbiAgfTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCwgY3JlYXRlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlL2FwcFwiO1xyXG5pbXBvcnQgeyBhdXRoLCBkYiwgcHJvdmlkZXIgfSBmcm9tIFwiLi4vcmVkdXgvZmJDb25maWdcIjtcclxuaW1wb3J0IHsgbWVzc2FnZSB9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5jb25zdCBhdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQcm92aWRlQXV0aCh7IGNoaWxkcmVuIH0pIHtcclxuICBjb25zdCBhdXRoID0gdXNlUHJvdmlkZUF1dGgoKTtcclxuICByZXR1cm4gPGF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXthdXRofT57Y2hpbGRyZW59PC9hdXRoQ29udGV4dC5Qcm92aWRlcj47XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1c2VBdXRoID0gKCkgPT4ge1xyXG4gIHJldHVybiB1c2VDb250ZXh0KGF1dGhDb250ZXh0KTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIHVzZVByb3ZpZGVBdXRoKCkge1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbZXJyb3JzLCBzZXRFcnJvcnNdID0gdXNlU3RhdGUoe1xyXG4gICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICBlbWFpbDogXCJcIixcclxuICAgIHVzZXJuYW1lOiBcIlwiLFxyXG4gIH0pO1xyXG5cclxuICAvLyBXcmFwIGFueSBGaXJlYmFzZSBtZXRob2RzIHdlIHdhbnQgdG8gdXNlIG1ha2luZyBzdXJlIC4uLlxyXG4gIC8vIC4uLiB0byBzYXZlIHRoZSB1c2VyIHRvIHN0YXRlLlxyXG4gIGNvbnN0IHNpZ25pbiA9IChlbWFpbCwgcGFzc3dvcmQpID0+IHtcclxuICAgIHJldHVybiBhdXRoXHJcbiAgICAgIC5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHNldEVycm9ycyh7IHBhc3N3b3JkOiBcIlwiLCBlbWFpbDogXCJcIiB9KTtcclxuICAgICAgICBzZXRVc2VyKHJlc3BvbnNlLnVzZXIpO1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZS51c2VyO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGlmIChlcnIuY29kZSA9PT0gXCJhdXRoL3dyb25nLXBhc3N3b3JkXCIpIHtcclxuICAgICAgICAgIHNldEVycm9ycyh7IC4uLmVycm9ycywgcGFzc3dvcmQ6IGVyci5tZXNzYWdlIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZXJyLmNvZGUgPT09IFwiYXV0aC91c2VyLW5vdC1mb3VuZFwiKSB7XHJcbiAgICAgICAgICBzZXRFcnJvcnMoeyAuLi5lcnJvcnMsIGVtYWlsOiBlcnIubWVzc2FnZSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNpZ25JbldpdGhHb29nbGUgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gYXV0aFxyXG4gICAgICAuc2lnbkluV2l0aFBvcHVwKHByb3ZpZGVyKVxyXG4gICAgICAudGhlbihhc3luYyAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBzZXRVc2VyKHJlc3BvbnNlLnVzZXIpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzaWdudXAgPSAoZW1haWwsIHBhc3N3b3JkLCB1c2VybmFtZSkgPT4ge1xyXG4gICAgYXV0aFxyXG4gICAgICAuY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZClcclxuICAgICAgLnRoZW4oYXN5bmMgKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgc2V0RXJyb3JzKHtcclxuICAgICAgICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgICAgICB1c2VybmFtZTogXCJcIixcclxuICAgICAgICB9KTtcclxuICAgICAgICBzZXRVc2VyKHsgLi4ucmVzcG9uc2UudXNlciwgdXNlcm5hbWU6IHVzZXJuYW1lIH0pO1xyXG4gICAgICAgIHJldHVybiBhd2FpdCBkYi5jb2xsZWN0aW9uKFwidXNlcnNcIikuZG9jKHJlc3BvbnNlLnVzZXIudWlkKS5zZXQoe1xyXG4gICAgICAgICAgdXNlcm5hbWUsXHJcbiAgICAgICAgICBsaWtlc0NvdW50OiAwLFxyXG4gICAgICAgICAgdHdpdHRlcjogXCJcIixcclxuICAgICAgICAgIGZhY2Vib29rOiBcIlwiLFxyXG4gICAgICAgICAgaW5zdGFncmFtOiBcIlwiLFxyXG4gICAgICAgICAgZGV2aWFudGFydDogXCJcIixcclxuICAgICAgICAgIGJpb2dyYXBoeTogXCJcIixcclxuICAgICAgICAgIGJhZGdlczogW10sXHJcbiAgICAgICAgICBjcmVhdGVkQXQ6IGZpcmViYXNlLmZpcmVzdG9yZS5GaWVsZFZhbHVlLnNlcnZlclRpbWVzdGFtcCgpLFxyXG4gICAgICAgICAgaW1hZ2U6IFwiXCIsXHJcbiAgICAgICAgICBzdXNwZW5kZWQ6IGZhbHNlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGF1dGguY3VycmVudFVzZXIuc2VuZEVtYWlsVmVyaWZpY2F0aW9uKCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgZXJyLmNvZGUgPT09IFwiYXV0aC9lbWFpbC1hbHJlYWR5LWluLXVzZVwiIHx8XHJcbiAgICAgICAgICBlcnIuY29kZSA9PT0gXCJhdXRoL2ludmFsaWQtZW1haWxcIlxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgc2V0RXJyb3JzKHsgLi4uZXJyb3JzLCBlbWFpbDogZXJyLm1lc3NhZ2UgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChlcnIuY29kZSA9PT0gXCJhdXRoL3dlYWstcGFzc3dvcmRcIikge1xyXG4gICAgICAgICAgc2V0RXJyb3JzKHsgLi4uZXJyb3JzLCBwYXNzd29yZDogZXJyLm1lc3NhZ2UgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzaWdub3V0ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGF1dGguc2lnbk91dCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICBzZXRVc2VyKGZhbHNlKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNlbmRQYXNzd29yZFJlc2V0RW1haWwgPSAoZW1haWwpID0+IHtcclxuICAgIHJldHVybiBhdXRoLnNlbmRQYXNzd29yZFJlc2V0RW1haWwoZW1haWwpLnRoZW4oKCkgPT4ge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNvbmZpcm1QYXNzd29yZFJlc2V0ID0gKGNvZGUsIHBhc3N3b3JkKSA9PiB7XHJcbiAgICByZXR1cm4gYXV0aC5jb25maXJtUGFzc3dvcmRSZXNldChjb2RlLCBwYXNzd29yZCkudGhlbigoKSA9PiB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2hhbmdlVXNlcm5hbWUgPSAodXNlcm5hbWUpID0+IHtcclxuICAgIHJldHVybiBkYlxyXG4gICAgICAuY29sbGVjdGlvbihcInVzZXJzXCIpXHJcbiAgICAgIC5kb2MoYXV0aC5jdXJyZW50VXNlci51aWQpXHJcbiAgICAgIC51cGRhdGUoeyB1c2VybmFtZSB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCB2ZXJpZnlFbWFpbCA9ICgpID0+IHtcclxuICAgIGF1dGguY3VycmVudFVzZXJcclxuICAgICAgLnNlbmRFbWFpbFZlcmlmaWNhdGlvbigpXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICBtZXNzYWdlLmluZm8oXCJWZXJpZmljYXRpb24gRW1haWwgc2VudC4gQ2hlY2sgeW91ciBpbmJveCAhXCIpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoZXJyLm1lc3NhZ2UpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBkZWxldGVBY2NvdW50ID0gKCkgPT4ge1xyXG4gICAgYXV0aC5jdXJyZW50VXNlci5kZWxldGUoKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdW5zdWJzY3JpYmUgPSBhdXRoLm9uQXV0aFN0YXRlQ2hhbmdlZCgodXNlcikgPT4ge1xyXG4gICAgICBpZiAodXNlcikge1xyXG4gICAgICAgIHNldFVzZXIodXNlcik7XHJcbiAgICAgICAgaWYgKHVzZXIudWlkKSB7XHJcbiAgICAgICAgICBsZXQgdXNlcm5hbWUgPSBcIlwiO1xyXG4gICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgIGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKVxyXG4gICAgICAgICAgICAuZG9jKHVzZXIudWlkKVxyXG4gICAgICAgICAgICAub25TbmFwc2hvdCgoZG9jKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKGRvYy5leGlzdHMpIHtcclxuICAgICAgICAgICAgICAgIHVzZXJuYW1lID0gZG9jLmRhdGEoKS51c2VybmFtZTtcclxuICAgICAgICAgICAgICAgIHNldFVzZXIoeyAuLi51c2VyLCB1c2VybmFtZSwgaW1hZ2U6IGRvYy5kYXRhKCkuaW1hZ2UgfSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0VXNlcihmYWxzZSk7XHJcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQ2xlYW51cCBzdWJzY3JpcHRpb24gb24gdW5tb3VudFxyXG4gICAgcmV0dXJuICgpID0+IHVuc3Vic2NyaWJlKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICAvLyBSZXR1cm4gdGhlIHVzZXIgb2JqZWN0IGFuZCBhdXRoIG1ldGhvZHNcclxuICByZXR1cm4ge1xyXG4gICAgZGVsZXRlQWNjb3VudCxcclxuICAgIGlzTG9hZGluZyxcclxuICAgIGVycm9ycyxcclxuICAgIHVzZXIsXHJcbiAgICBzaWduaW4sXHJcbiAgICBzaWdudXAsXHJcbiAgICBzaWdub3V0LFxyXG4gICAgc2VuZFBhc3N3b3JkUmVzZXRFbWFpbCxcclxuICAgIGNvbmZpcm1QYXNzd29yZFJlc2V0LFxyXG4gICAgdmVyaWZ5RW1haWwsXHJcbiAgICBzaWduSW5XaXRoR29vZ2xlLFxyXG4gICAgY2hhbmdlVXNlcm5hbWUsXHJcbiAgfTtcclxufVxyXG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9wYWdlcy9fYXBwJylcbiIsImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgYWRkQmFzZVBhdGgsXG4gIGFkZExvY2FsZSxcbiAgaXNMb2NhbFVSTCxcbiAgTmV4dFJvdXRlcixcbiAgUHJlZmV0Y2hPcHRpb25zLFxuICByZXNvbHZlSHJlZixcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcbnR5cGUgUmVxdWlyZWRLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBuZXZlciA6IEtcbn1ba2V5b2YgVF1cbnR5cGUgT3B0aW9uYWxLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBLIDogbmV2ZXJcbn1ba2V5b2YgVF1cblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG59XG50eXBlIExpbmtQcm9wc1JlcXVpcmVkID0gUmVxdWlyZWRLZXlzPExpbmtQcm9wcz5cbnR5cGUgTGlua1Byb3BzT3B0aW9uYWwgPSBPcHRpb25hbEtleXM8TGlua1Byb3BzPlxuXG5sZXQgY2FjaGVkT2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG5jb25zdCBsaXN0ZW5lcnMgPSBuZXcgTWFwPEVsZW1lbnQsICgpID0+IHZvaWQ+KClcbmNvbnN0IEludGVyc2VjdGlvbk9ic2VydmVyID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgOiBudWxsXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIoKTogSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgfCB1bmRlZmluZWQge1xuICAvLyBSZXR1cm4gc2hhcmVkIGluc3RhbmNlIG9mIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIGFscmVhZHkgY3JlYXRlZFxuICBpZiAoY2FjaGVkT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gY2FjaGVkT2JzZXJ2ZXJcbiAgfVxuXG4gIC8vIE9ubHkgY3JlYXRlIHNoYXJlZCBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBzdXBwb3J0ZWQgaW4gYnJvd3NlclxuICBpZiAoIUludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgcmV0dXJuIChjYWNoZWRPYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAoZW50cmllcykgPT4ge1xuICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICBpZiAoIWxpc3RlbmVycy5oYXMoZW50cnkudGFyZ2V0KSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2IgPSBsaXN0ZW5lcnMuZ2V0KGVudHJ5LnRhcmdldCkhXG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDApIHtcbiAgICAgICAgICBjYWNoZWRPYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGxpc3RlbmVycy5kZWxldGUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGNiKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHsgcm9vdE1hcmdpbjogJzIwMHB4JyB9XG4gICkpXG59XG5cbmNvbnN0IGxpc3RlblRvSW50ZXJzZWN0aW9ucyA9IChlbDogRWxlbWVudCwgY2I6ICgpID0+IHZvaWQpID0+IHtcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBnZXRPYnNlcnZlcigpXG4gIGlmICghb2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gKCkgPT4ge31cbiAgfVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWwpXG4gIGxpc3RlbmVycy5zZXQoZWwsIGNiKVxuICByZXR1cm4gKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBvYnNlcnZlci51bm9ic2VydmUoZWwpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICB9XG4gICAgbGlzdGVuZXJzLmRlbGV0ZShlbClcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmVmZXRjaChcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnNcbik6IHZvaWQge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVyblxuICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9KVxuICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc10gPSB0cnVlXG59XG5cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudDogUmVhY3QuTW91c2VFdmVudCkge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICByZXR1cm4gKFxuICAgICh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB8fFxuICAgIGV2ZW50Lm1ldGFLZXkgfHxcbiAgICBldmVudC5jdHJsS2V5IHx8XG4gICAgZXZlbnQuc2hpZnRLZXkgfHxcbiAgICBldmVudC5hbHRLZXkgfHwgLy8gdHJpZ2dlcnMgcmVzb3VyY2UgZG93bmxvYWRcbiAgICAoZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpXG4gIClcbn1cblxuZnVuY3Rpb24gbGlua0NsaWNrZWQoXG4gIGU6IFJlYWN0Lk1vdXNlRXZlbnQsXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICByZXBsYWNlPzogYm9vbGVhbixcbiAgc2hhbGxvdz86IGJvb2xlYW4sXG4gIHNjcm9sbD86IGJvb2xlYW5cbik6IHZvaWQge1xuICBjb25zdCB7IG5vZGVOYW1lIH0gPSBlLmN1cnJlbnRUYXJnZXRcblxuICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICFpc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgIHJldHVyblxuICB9XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgfVxuXG4gIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHsgc2hhbGxvdyB9KS50aGVuKFxuICAgIChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAoIXN1Y2Nlc3MpIHJldHVyblxuICAgICAgaWYgKHNjcm9sbCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpXG4gICAgICB9XG4gICAgfVxuICApXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJnczoge1xuICAgICAga2V5OiBzdHJpbmdcbiAgICAgIGV4cGVjdGVkOiBzdHJpbmdcbiAgICAgIGFjdHVhbDogc3RyaW5nXG4gICAgfSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgK1xuICAgICAgICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCJcbiAgICAgICAgICAgIDogJycpXG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNSZXF1aXJlZCwgdHJ1ZT4gPSB7XG4gICAgICBocmVmOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCByZXF1aXJlZFByb3BzOiBMaW5rUHJvcHNSZXF1aXJlZFtdID0gT2JqZWN0LmtleXMoXG4gICAgICByZXF1aXJlZFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc1JlcXVpcmVkW11cbiAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzUmVxdWlyZWQpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSA9PSBudWxsIHx8XG4gICAgICAgICAgKHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNPcHRpb25hbCwgdHJ1ZT4gPSB7XG4gICAgICBhczogdHJ1ZSxcbiAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICBzY3JvbGw6IHRydWUsXG4gICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wczogTGlua1Byb3BzT3B0aW9uYWxbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgb3B0aW9uYWxQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNPcHRpb25hbFtdXG4gICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc09wdGlvbmFsKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnYXMnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldICYmXG4gICAgICAgICAgdHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmXG4gICAgICAgICAgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAga2V5ID09PSAncmVwbGFjZScgfHxcbiAgICAgICAga2V5ID09PSAnc2Nyb2xsJyB8fFxuICAgICAgICBrZXkgPT09ICdzaGFsbG93JyB8fFxuICAgICAgICBrZXkgPT09ICdwYXNzSHJlZicgfHxcbiAgICAgICAga2V5ID09PSAncHJlZmV0Y2gnXG4gICAgICApIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYGJvb2xlYW5gJyxcbiAgICAgICAgICAgIGFjdHVhbDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIGNvbnN0IGhhc1dhcm5lZCA9IFJlYWN0LnVzZVJlZihmYWxzZSlcbiAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgKVxuICAgIH1cbiAgfVxuICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG5cbiAgY29uc3QgW2NoaWxkRWxtLCBzZXRDaGlsZEVsbV0gPSBSZWFjdC51c2VTdGF0ZTxFbGVtZW50PigpXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcGF0aG5hbWUgPSAocm91dGVyICYmIHJvdXRlci5wYXRobmFtZSkgfHwgJy8nXG5cbiAgY29uc3QgeyBocmVmLCBhcyB9ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuaHJlZiwgdHJ1ZSlcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgYXM6IHByb3BzLmFzXG4gICAgICAgID8gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmFzKVxuICAgICAgICA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmLFxuICAgIH1cbiAgfSwgW3BhdGhuYW1lLCBwcm9wcy5ocmVmLCBwcm9wcy5hc10pXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoXG4gICAgICBwICYmXG4gICAgICBJbnRlcnNlY3Rpb25PYnNlcnZlciAmJlxuICAgICAgY2hpbGRFbG0gJiZcbiAgICAgIGNoaWxkRWxtLnRhZ05hbWUgJiZcbiAgICAgIGlzTG9jYWxVUkwoaHJlZilcbiAgICApIHtcbiAgICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgICBjb25zdCBpc1ByZWZldGNoZWQgPSBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc11cbiAgICAgIGlmICghaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgIHJldHVybiBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMoY2hpbGRFbG0sICgpID0+IHtcbiAgICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW3AsIGNoaWxkRWxtLCBocmVmLCBhcywgcm91dGVyXSlcblxuICBsZXQgeyBjaGlsZHJlbiwgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsIH0gPSBwcm9wc1xuICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gIH1cblxuICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gIGNvbnN0IGNoaWxkUHJvcHM6IHtcbiAgICBvbk1vdXNlRW50ZXI/OiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgaHJlZj86IHN0cmluZ1xuICAgIHJlZj86IGFueVxuICB9ID0ge1xuICAgIHJlZjogKGVsOiBhbnkpID0+IHtcbiAgICAgIGlmIChlbCkgc2V0Q2hpbGRFbG0oZWwpXG5cbiAgICAgIGlmIChjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZikge1xuICAgICAgICBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGQucmVmKGVsKVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGNoaWxkLnJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICB9XG4gICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwpXG4gICAgICB9XG4gICAgfSxcbiAgfVxuXG4gIGlmIChwKSB7XG4gICAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgICAgfVxuICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgeyBwcmlvcml0eTogdHJ1ZSB9KVxuICAgIH1cbiAgfVxuXG4gIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSkge1xuICAgIGNoaWxkUHJvcHMuaHJlZiA9IGFkZEJhc2VQYXRoKFxuICAgICAgYWRkTG9jYWxlKGFzLCByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZSwgcm91dGVyICYmIHJvdXRlci5kZWZhdWx0TG9jYWxlKVxuICAgIClcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGhcbn1cblxuLyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0hcbiAgPyAocGF0aDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aClcbiAgICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBwYXRoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArICcvJ1xuICAgICAgfVxuICAgIH1cbiAgOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaFxuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG4gICdsb2NhbGUnLFxuICAnbG9jYWxlcycsXG4gICdkZWZhdWx0TG9jYWxlJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKFxuICAgICAgICBBcnJheS5pc0FycmF5KF9yb3V0ZXJbcHJvcGVydHldKSA/IFtdIDoge30sXG4gICAgICAgIF9yb3V0ZXJbcHJvcGVydHldXG4gICAgICApIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSkge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBUb2tlbml6ZSBpbnB1dCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGxleGVyKHN0cikge1xuICAgIHZhciB0b2tlbnMgPSBbXTtcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gc3RyW2ldO1xuICAgICAgICBpZiAoY2hhciA9PT0gXCIqXCIgfHwgY2hhciA9PT0gXCIrXCIgfHwgY2hhciA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJNT0RJRklFUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRVNDQVBFRF9DSEFSXCIsIGluZGV4OiBpKyssIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIntcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk9QRU5cIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIn1cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNMT1NFXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCI6XCIpIHtcbiAgICAgICAgICAgIHZhciBuYW1lID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29kZSA9IHN0ci5jaGFyQ29kZUF0KGopO1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAvLyBgMC05YFxuICAgICAgICAgICAgICAgIChjb2RlID49IDQ4ICYmIGNvZGUgPD0gNTcpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBBLVpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDY1ICYmIGNvZGUgPD0gOTApIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBhLXpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDk3ICYmIGNvZGUgPD0gMTIyKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgX2BcbiAgICAgICAgICAgICAgICAgICAgY29kZSA9PT0gOTUpIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZSArPSBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFuYW1lKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhcmFtZXRlciBuYW1lIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTkFNRVwiLCBpbmRleDogaSwgdmFsdWU6IG5hbWUgfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIihcIikge1xuICAgICAgICAgICAgdmFyIGNvdW50ID0gMTtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIj9cIikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQYXR0ZXJuIGNhbm5vdCBzdGFydCB3aXRoIFxcXCI/XFxcIiBhdCBcIiArIGopO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXSArIHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCIpXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQtLTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBqKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzdHJbal0gPT09IFwiKFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHJbaiArIDFdICE9PSBcIj9cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhcHR1cmluZyBncm91cHMgYXJlIG5vdCBhbGxvd2VkIGF0IFwiICsgaik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb3VudClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5iYWxhbmNlZCBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICBpZiAoIXBhdHRlcm4pXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIlBBVFRFUk5cIiwgaW5kZXg6IGksIHZhbHVlOiBwYXR0ZXJuIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0hBUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgIH1cbiAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRU5EXCIsIGluZGV4OiBpLCB2YWx1ZTogXCJcIiB9KTtcbiAgICByZXR1cm4gdG9rZW5zO1xufVxuLyoqXG4gKiBQYXJzZSBhIHN0cmluZyBmb3IgdGhlIHJhdyB0b2tlbnMuXG4gKi9cbmZ1bmN0aW9uIHBhcnNlKHN0ciwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHRva2VucyA9IGxleGVyKHN0cik7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5wcmVmaXhlcywgcHJlZml4ZXMgPSBfYSA9PT0gdm9pZCAwID8gXCIuL1wiIDogX2E7XG4gICAgdmFyIGRlZmF1bHRQYXR0ZXJuID0gXCJbXlwiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdKz9cIjtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIGtleSA9IDA7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICB2YXIgdHJ5Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIGlmIChpIDwgdG9rZW5zLmxlbmd0aCAmJiB0b2tlbnNbaV0udHlwZSA9PT0gdHlwZSlcbiAgICAgICAgICAgIHJldHVybiB0b2tlbnNbaSsrXS52YWx1ZTtcbiAgICB9O1xuICAgIHZhciBtdXN0Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRyeUNvbnN1bWUodHlwZSk7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB2YXIgX2EgPSB0b2tlbnNbaV0sIG5leHRUeXBlID0gX2EudHlwZSwgaW5kZXggPSBfYS5pbmRleDtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuZXhwZWN0ZWQgXCIgKyBuZXh0VHlwZSArIFwiIGF0IFwiICsgaW5kZXggKyBcIiwgZXhwZWN0ZWQgXCIgKyB0eXBlKTtcbiAgICB9O1xuICAgIHZhciBjb25zdW1lVGV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFwiXCI7XG4gICAgICAgIHZhciB2YWx1ZTtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIHdoaWxlICgodmFsdWUgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKSB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpKSkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICB3aGlsZSAoaSA8IHRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKTtcbiAgICAgICAgdmFyIG5hbWUgPSB0cnlDb25zdW1lKFwiTkFNRVwiKTtcbiAgICAgICAgdmFyIHBhdHRlcm4gPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKTtcbiAgICAgICAgaWYgKG5hbWUgfHwgcGF0dGVybikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNoYXIgfHwgXCJcIjtcbiAgICAgICAgICAgIGlmIChwcmVmaXhlcy5pbmRleE9mKHByZWZpeCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSBwcmVmaXg7XG4gICAgICAgICAgICAgICAgcHJlZml4ID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSB8fCBrZXkrKyxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogcGF0dGVybiB8fCBkZWZhdWx0UGF0dGVybixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHZhbHVlID0gY2hhciB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpO1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHBhdGggKz0gdmFsdWU7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgb3BlbiA9IHRyeUNvbnN1bWUoXCJPUEVOXCIpO1xuICAgICAgICBpZiAob3Blbikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICB2YXIgbmFtZV8xID0gdHJ5Q29uc3VtZShcIk5BTUVcIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuXzEgPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICBtdXN0Q29uc3VtZShcIkNMT1NFXCIpO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWVfMSB8fCAocGF0dGVybl8xID8ga2V5KysgOiBcIlwiKSxcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBuYW1lXzEgJiYgIXBhdHRlcm5fMSA/IGRlZmF1bHRQYXR0ZXJuIDogcGF0dGVybl8xLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogc3VmZml4LFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBtdXN0Q29uc3VtZShcIkVORFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydHMucGFyc2UgPSBwYXJzZTtcbi8qKlxuICogQ29tcGlsZSBhIHN0cmluZyB0byBhIHRlbXBsYXRlIGZ1bmN0aW9uIGZvciB0aGUgcGF0aC5cbiAqL1xuZnVuY3Rpb24gY29tcGlsZShzdHIsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9GdW5jdGlvbihwYXJzZShzdHIsIG9wdGlvbnMpLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMuY29tcGlsZSA9IGNvbXBpbGU7XG4vKipcbiAqIEV4cG9zZSBhIG1ldGhvZCBmb3IgdHJhbnNmb3JtaW5nIHRva2VucyBpbnRvIHRoZSBwYXRoIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb0Z1bmN0aW9uKHRva2Vucywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHJlRmxhZ3MgPSBmbGFncyhvcHRpb25zKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2EsIF9iID0gb3B0aW9ucy52YWxpZGF0ZSwgdmFsaWRhdGUgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iO1xuICAgIC8vIENvbXBpbGUgYWxsIHRoZSB0b2tlbnMgaW50byByZWdleHBzLlxuICAgIHZhciBtYXRjaGVzID0gdG9rZW5zLm1hcChmdW5jdGlvbiAodG9rZW4pIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoXCJeKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpJFwiLCByZUZsYWdzKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV07XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbjtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGRhdGEgPyBkYXRhW3Rva2VuLm5hbWVdIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgdmFyIG9wdGlvbmFsID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiP1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIjtcbiAgICAgICAgICAgIHZhciByZXBlYXQgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXBlYXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhbiBhcnJheVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IGJlIGVtcHR5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHZhbHVlLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKHZhbHVlW2pdLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgYWxsIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKFN0cmluZyh2YWx1ZSksIHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIHZhciB0eXBlT2ZNZXNzYWdlID0gcmVwZWF0ID8gXCJhbiBhcnJheVwiIDogXCJhIHN0cmluZ1wiO1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gYmUgXCIgKyB0eXBlT2ZNZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9O1xufVxuZXhwb3J0cy50b2tlbnNUb0Z1bmN0aW9uID0gdG9rZW5zVG9GdW5jdGlvbjtcbi8qKlxuICogQ3JlYXRlIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIHNwZWMuXG4gKi9cbmZ1bmN0aW9uIG1hdGNoKHN0ciwgb3B0aW9ucykge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgdmFyIHJlID0gcGF0aFRvUmVnZXhwKHN0ciwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5tYXRjaCA9IG1hdGNoO1xuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBvdXRwdXQuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuZGVjb2RlLCBkZWNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHBhdGhuYW1lKSB7XG4gICAgICAgIHZhciBtID0gcmUuZXhlYyhwYXRobmFtZSk7XG4gICAgICAgIGlmICghbSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIHBhdGggPSBtWzBdLCBpbmRleCA9IG0uaW5kZXg7XG4gICAgICAgIHZhciBwYXJhbXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgIGlmIChtW2ldID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiY29udGludWVcIjtcbiAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2kgLSAxXTtcbiAgICAgICAgICAgIGlmIChrZXkubW9kaWZpZXIgPT09IFwiKlwiIHx8IGtleS5tb2RpZmllciA9PT0gXCIrXCIpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gbVtpXS5zcGxpdChrZXkucHJlZml4ICsga2V5LnN1ZmZpeCkubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVjb2RlKHZhbHVlLCBrZXkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IGRlY29kZShtW2ldLCBrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IG0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIF9sb29wXzEoaSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgcGF0aDogcGF0aCwgaW5kZXg6IGluZGV4LCBwYXJhbXM6IHBhcmFtcyB9O1xuICAgIH07XG59XG5leHBvcnRzLnJlZ2V4cFRvRnVuY3Rpb24gPSByZWdleHBUb0Z1bmN0aW9uO1xuLyoqXG4gKiBFc2NhcGUgYSByZWd1bGFyIGV4cHJlc3Npb24gc3RyaW5nLlxuICovXG5mdW5jdGlvbiBlc2NhcGVTdHJpbmcoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oWy4rKj89XiE6JHt9KClbXFxdfC9cXFxcXSkvZywgXCJcXFxcJDFcIik7XG59XG4vKipcbiAqIEdldCB0aGUgZmxhZ3MgZm9yIGEgcmVnZXhwIGZyb20gdGhlIG9wdGlvbnMuXG4gKi9cbmZ1bmN0aW9uIGZsYWdzKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gb3B0aW9ucyAmJiBvcHRpb25zLnNlbnNpdGl2ZSA/IFwiXCIgOiBcImlcIjtcbn1cbi8qKlxuICogUHVsbCBvdXQga2V5cyBmcm9tIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKSB7XG4gICAgaWYgKCFrZXlzKVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICAvLyBVc2UgYSBuZWdhdGl2ZSBsb29rYWhlYWQgdG8gbWF0Y2ggb25seSBjYXB0dXJpbmcgZ3JvdXBzLlxuICAgIHZhciBncm91cHMgPSBwYXRoLnNvdXJjZS5tYXRjaCgvXFwoKD8hXFw/KS9nKTtcbiAgICBpZiAoZ3JvdXBzKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ3JvdXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBrZXlzLnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IGksXG4gICAgICAgICAgICAgICAgcHJlZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbi8qKlxuICogVHJhbnNmb3JtIGFuIGFycmF5IGludG8gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5VG9SZWdleHAocGF0aHMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICB2YXIgcGFydHMgPSBwYXRocy5tYXAoZnVuY3Rpb24gKHBhdGgpIHsgcmV0dXJuIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKS5zb3VyY2U7IH0pO1xuICAgIHJldHVybiBuZXcgUmVnRXhwKFwiKD86XCIgKyBwYXJ0cy5qb2luKFwifFwiKSArIFwiKVwiLCBmbGFncyhvcHRpb25zKSk7XG59XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggcmVnZXhwIGZyb20gc3RyaW5nIGlucHV0LlxuICovXG5mdW5jdGlvbiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvUmVnZXhwKHBhcnNlKHBhdGgsIG9wdGlvbnMpLCBrZXlzLCBvcHRpb25zKTtcbn1cbi8qKlxuICogRXhwb3NlIGEgZnVuY3Rpb24gZm9yIHRha2luZyB0b2tlbnMgYW5kIHJldHVybmluZyBhIFJlZ0V4cC5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9SZWdleHAodG9rZW5zLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLnN0cmljdCwgc3RyaWN0ID0gX2EgPT09IHZvaWQgMCA/IGZhbHNlIDogX2EsIF9iID0gb3B0aW9ucy5zdGFydCwgc3RhcnQgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iLCBfYyA9IG9wdGlvbnMuZW5kLCBlbmQgPSBfYyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9jLCBfZCA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfZCA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfZDtcbiAgICB2YXIgZW5kc1dpdGggPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmVuZHNXaXRoIHx8IFwiXCIpICsgXCJdfCRcIjtcbiAgICB2YXIgZGVsaW1pdGVyID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl1cIjtcbiAgICB2YXIgcm91dGUgPSBzdGFydCA/IFwiXlwiIDogXCJcIjtcbiAgICAvLyBJdGVyYXRlIG92ZXIgdGhlIHRva2VucyBhbmQgY3JlYXRlIG91ciByZWdleHAgc3RyaW5nLlxuICAgIGZvciAodmFyIF9pID0gMCwgdG9rZW5zXzEgPSB0b2tlbnM7IF9pIDwgdG9rZW5zXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc18xW19pXTtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcm91dGUgKz0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbikpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4ucHJlZml4KSk7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5zdWZmaXgpKTtcbiAgICAgICAgICAgIGlmICh0b2tlbi5wYXR0ZXJuKSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleXMpXG4gICAgICAgICAgICAgICAgICAgIGtleXMucHVzaCh0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHByZWZpeCB8fCBzdWZmaXgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRva2VuLm1vZGlmaWVyID09PSBcIitcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtb2QgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgPyBcIj9cIiA6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKD86XCIgKyBzdWZmaXggKyBwcmVmaXggKyBcIig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSkqKVwiICsgc3VmZml4ICsgXCIpXCIgKyBtb2Q7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChlbmQpIHtcbiAgICAgICAgaWYgKCFzdHJpY3QpXG4gICAgICAgICAgICByb3V0ZSArPSBkZWxpbWl0ZXIgKyBcIj9cIjtcbiAgICAgICAgcm91dGUgKz0gIW9wdGlvbnMuZW5kc1dpdGggPyBcIiRcIiA6IFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIGVuZFRva2VuID0gdG9rZW5zW3Rva2Vucy5sZW5ndGggLSAxXTtcbiAgICAgICAgdmFyIGlzRW5kRGVsaW1pdGVkID0gdHlwZW9mIGVuZFRva2VuID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgICA/IGRlbGltaXRlci5pbmRleE9mKGVuZFRva2VuW2VuZFRva2VuLmxlbmd0aCAtIDFdKSA+IC0xXG4gICAgICAgICAgICA6IC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgICAgIGVuZFRva2VuID09PSB1bmRlZmluZWQ7XG4gICAgICAgIGlmICghc3RyaWN0KSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgZGVsaW1pdGVyICsgXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpKT9cIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzRW5kRGVsaW1pdGVkKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/PVwiICsgZGVsaW1pdGVyICsgXCJ8XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXcgUmVnRXhwKHJvdXRlLCBmbGFncyhvcHRpb25zKSk7XG59XG5leHBvcnRzLnRva2Vuc1RvUmVnZXhwID0gdG9rZW5zVG9SZWdleHA7XG4vKipcbiAqIE5vcm1hbGl6ZSB0aGUgZ2l2ZW4gcGF0aCBzdHJpbmcsIHJldHVybmluZyBhIHJlZ3VsYXIgZXhwcmVzc2lvbi5cbiAqXG4gKiBBbiBlbXB0eSBhcnJheSBjYW4gYmUgcGFzc2VkIGluIGZvciB0aGUga2V5cywgd2hpY2ggd2lsbCBob2xkIHRoZVxuICogcGxhY2Vob2xkZXIga2V5IGRlc2NyaXB0aW9ucy4gRm9yIGV4YW1wbGUsIHVzaW5nIGAvdXNlci86aWRgLCBga2V5c2Agd2lsbFxuICogY29udGFpbiBgW3sgbmFtZTogJ2lkJywgZGVsaW1pdGVyOiAnLycsIG9wdGlvbmFsOiBmYWxzZSwgcmVwZWF0OiBmYWxzZSB9XWAuXG4gKi9cbmZ1bmN0aW9uIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKHBhdGggaW5zdGFuY2VvZiBSZWdFeHApXG4gICAgICAgIHJldHVybiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwYXRoKSlcbiAgICAgICAgcmV0dXJuIGFycmF5VG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5wYXRoVG9SZWdleHAgPSBwYXRoVG9SZWdleHA7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBfX05FWFRfREFUQV9fICovXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gsXG4gIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuaW1wb3J0IHsgR29vZFBhZ2VDYWNoZSwgU3R5bGVTaGVldFR1cGxlIH0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3BhZ2UtbG9hZGVyJ1xuaW1wb3J0IHsgZGVub3JtYWxpemVQYWdlUGF0aCB9IGZyb20gJy4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGgnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldExvY2F0aW9uT3JpZ2luLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG59IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgaXNEeW5hbWljUm91dGUgfSBmcm9tICcuL3V0aWxzL2lzLWR5bmFtaWMnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi91dGlscy9xdWVyeXN0cmluZydcbmltcG9ydCByZXNvbHZlUmV3cml0ZXMgZnJvbSAnLi91dGlscy9yZXNvbHZlLXJld3JpdGVzJ1xuaW1wb3J0IHsgZ2V0Um91dGVNYXRjaGVyIH0gZnJvbSAnLi91dGlscy9yb3V0ZS1tYXRjaGVyJ1xuaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vdXRpbHMvcm91dGUtcmVnZXgnXG5pbXBvcnQgZXNjYXBlUGF0aERlbGltaXRlcnMgZnJvbSAnLi91dGlscy9lc2NhcGUtcGF0aC1kZWxpbWl0ZXJzJ1xuXG5pbnRlcmZhY2UgVHJhbnNpdGlvbk9wdGlvbnMge1xuICBzaGFsbG93PzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgTmV4dEhpc3RvcnlTdGF0ZSB7XG4gIHVybDogc3RyaW5nXG4gIGFzOiBzdHJpbmdcbiAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbn1cblxudHlwZSBIaXN0b3J5U3RhdGUgPSBudWxsIHwgeyBfX046IGZhbHNlIH0gfCAoeyBfX046IHRydWUgfSAmIE5leHRIaXN0b3J5U3RhdGUpXG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgY2FuY2VsbGVkOiB0cnVlLFxuICB9KVxufVxuXG5mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGg6IHN0cmluZywgcHJlZml4Pzogc3RyaW5nKSB7XG4gIHJldHVybiBwcmVmaXggJiYgcGF0aC5zdGFydHNXaXRoKCcvJylcbiAgICA/IHBhdGggPT09ICcvJ1xuICAgICAgPyBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChwcmVmaXgpXG4gICAgICA6IGAke3ByZWZpeH0ke3BhdGh9YFxuICAgIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTG9jYWxlKFxuICBwYXRoOiBzdHJpbmcsXG4gIGxvY2FsZT86IHN0cmluZyxcbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfaTE4bl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJiBsb2NhbGUgIT09IGRlZmF1bHRMb2NhbGUgJiYgIXBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUpXG4gICAgICA/IGFkZFBhdGhQcmVmaXgocGF0aCwgJy8nICsgbG9jYWxlKVxuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbExvY2FsZShwYXRoOiBzdHJpbmcsIGxvY2FsZT86IHN0cmluZykge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX2kxOG5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiYgcGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSlcbiAgICAgID8gcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCArIDEpIHx8ICcvJ1xuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gcGF0aCA9PT0gYmFzZVBhdGggfHwgcGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoICsgJy8nKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbiAgcmV0dXJuIGFkZFBhdGhQcmVmaXgocGF0aCwgYmFzZVBhdGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpIHx8ICcvJ1xufVxuXG4vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0xvY2FsVVJMKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpKSByZXR1cm4gdHJ1ZVxuICB0cnkge1xuICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKVxuICAgIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luICYmIGhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKVxuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxuZXhwb3J0IGZ1bmN0aW9uIGludGVycG9sYXRlQXMoXG4gIHJvdXRlOiBzdHJpbmcsXG4gIGFzUGF0aG5hbWU6IHN0cmluZyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pIHtcbiAgbGV0IGludGVycG9sYXRlZFJvdXRlID0gJydcblxuICBjb25zdCBkeW5hbWljUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICBjb25zdCBkeW5hbWljR3JvdXBzID0gZHluYW1pY1JlZ2V4Lmdyb3Vwc1xuICBjb25zdCBkeW5hbWljTWF0Y2hlcyA9XG4gICAgLy8gVHJ5IHRvIG1hdGNoIHRoZSBkeW5hbWljIHJvdXRlIGFnYWluc3QgdGhlIGFzUGF0aFxuICAgIChhc1BhdGhuYW1lICE9PSByb3V0ZSA/IGdldFJvdXRlTWF0Y2hlcihkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpIDogJycpIHx8XG4gICAgLy8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4gICAgLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxuICAgIHF1ZXJ5XG5cbiAgaW50ZXJwb2xhdGVkUm91dGUgPSByb3V0ZVxuICBjb25zdCBwYXJhbXMgPSBPYmplY3Qua2V5cyhkeW5hbWljR3JvdXBzKVxuXG4gIGlmIChcbiAgICAhcGFyYW1zLmV2ZXJ5KChwYXJhbSkgPT4ge1xuICAgICAgbGV0IHZhbHVlID0gZHluYW1pY01hdGNoZXNbcGFyYW1dIHx8ICcnXG4gICAgICBjb25zdCB7IHJlcGVhdCwgb3B0aW9uYWwgfSA9IGR5bmFtaWNHcm91cHNbcGFyYW1dXG5cbiAgICAgIC8vIHN1cHBvcnQgc2luZ2xlLWxldmVsIGNhdGNoLWFsbFxuICAgICAgLy8gVE9ETzogbW9yZSByb2J1c3QgaGFuZGxpbmcgZm9yIHVzZXItZXJyb3IgKHBhc3NpbmcgYC9gKVxuICAgICAgbGV0IHJlcGxhY2VkID0gYFske3JlcGVhdCA/ICcuLi4nIDogJyd9JHtwYXJhbX1dYFxuICAgICAgaWYgKG9wdGlvbmFsKSB7XG4gICAgICAgIHJlcGxhY2VkID0gYCR7IXZhbHVlID8gJy8nIDogJyd9WyR7cmVwbGFjZWR9XWBcbiAgICAgIH1cbiAgICAgIGlmIChyZXBlYXQgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB2YWx1ZSA9IFt2YWx1ZV1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgKG9wdGlvbmFsIHx8IHBhcmFtIGluIGR5bmFtaWNNYXRjaGVzKSAmJlxuICAgICAgICAvLyBJbnRlcnBvbGF0ZSBncm91cCBpbnRvIGRhdGEgVVJMIGlmIHByZXNlbnRcbiAgICAgICAgKGludGVycG9sYXRlZFJvdXRlID1cbiAgICAgICAgICBpbnRlcnBvbGF0ZWRSb3V0ZSEucmVwbGFjZShcbiAgICAgICAgICAgIHJlcGxhY2VkLFxuICAgICAgICAgICAgcmVwZWF0XG4gICAgICAgICAgICAgID8gKHZhbHVlIGFzIHN0cmluZ1tdKS5tYXAoZXNjYXBlUGF0aERlbGltaXRlcnMpLmpvaW4oJy8nKVxuICAgICAgICAgICAgICA6IGVzY2FwZVBhdGhEZWxpbWl0ZXJzKHZhbHVlIGFzIHN0cmluZylcbiAgICAgICAgICApIHx8ICcvJylcbiAgICAgIClcbiAgICB9KVxuICApIHtcbiAgICBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnIC8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG5cbiAgICAvLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuICAgIC8vIGRldmVsb3BtZW50IGluIHRoZSBgPExpbms+YCBjb21wb25lbnQgZGlyZWN0bHkuXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXJhbXMsXG4gICAgcmVzdWx0OiBpbnRlcnBvbGF0ZWRSb3V0ZSxcbiAgfVxufVxuXG5mdW5jdGlvbiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnk6IFBhcnNlZFVybFF1ZXJ5LCBwYXJhbXM6IHN0cmluZ1tdKSB7XG4gIGNvbnN0IGZpbHRlcmVkUXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cblxuICBPYmplY3Qua2V5cyhxdWVyeSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaWYgKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgZmlsdGVyZWRRdWVyeVtrZXldID0gcXVlcnlba2V5XVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIGZpbHRlcmVkUXVlcnlcbn1cblxuLyoqXG4gKiBSZXNvbHZlcyBhIGdpdmVuIGh5cGVybGluayB3aXRoIGEgY2VydGFpbiByb3V0ZXIgc3RhdGUgKGJhc2VQYXRoIG5vdCBpbmNsdWRlZCkuXG4gKiBQcmVzZXJ2ZXMgYWJzb2x1dGUgdXJscy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVIcmVmKFxuICBjdXJyZW50UGF0aDogc3RyaW5nLFxuICBocmVmOiBVcmwsXG4gIHJlc29sdmVBcz86IGJvb2xlYW5cbik6IHN0cmluZyB7XG4gIC8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG4gIGNvbnN0IGJhc2UgPSBuZXcgVVJMKGN1cnJlbnRQYXRoLCAnaHR0cDovL24nKVxuICBjb25zdCB1cmxBc1N0cmluZyA9XG4gICAgdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnID8gaHJlZiA6IGZvcm1hdFdpdGhWYWxpZGF0aW9uKGhyZWYpXG4gIHRyeSB7XG4gICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKVxuICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpXG4gICAgbGV0IGludGVycG9sYXRlZEFzID0gJydcblxuICAgIGlmIChcbiAgICAgIGlzRHluYW1pY1JvdXRlKGZpbmFsVXJsLnBhdGhuYW1lKSAmJlxuICAgICAgZmluYWxVcmwuc2VhcmNoUGFyYW1zICYmXG4gICAgICByZXNvbHZlQXNcbiAgICApIHtcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShmaW5hbFVybC5zZWFyY2hQYXJhbXMpXG5cbiAgICAgIGNvbnN0IHsgcmVzdWx0LCBwYXJhbXMgfSA9IGludGVycG9sYXRlQXMoXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgcXVlcnlcbiAgICAgIClcblxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBpbnRlcnBvbGF0ZWRBcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICBwYXRobmFtZTogcmVzdWx0LFxuICAgICAgICAgIGhhc2g6IGZpbmFsVXJsLmhhc2gsXG4gICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKSxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9XG4gICAgICBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luXG4gICAgICAgID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKVxuICAgICAgICA6IGZpbmFsVXJsLmhyZWZcblxuICAgIHJldHVybiAocmVzb2x2ZUFzXG4gICAgICA/IFtyZXNvbHZlZEhyZWYsIGludGVycG9sYXRlZEFzIHx8IHJlc29sdmVkSHJlZl1cbiAgICAgIDogcmVzb2x2ZWRIcmVmKSBhcyBzdHJpbmdcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxufVxuXG5jb25zdCBQQUdFX0xPQURfRVJST1IgPSBTeW1ib2woJ1BBR0VfTE9BRF9FUlJPUicpXG5leHBvcnQgZnVuY3Rpb24gbWFya0xvYWRpbmdFcnJvcihlcnI6IEVycm9yKTogRXJyb3Ige1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgUEFHRV9MT0FEX0VSUk9SLCB7fSlcbn1cblxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlcjogTmV4dFJvdXRlciwgdXJsOiBVcmwsIGFzOiBVcmwpIHtcbiAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gIHJldHVybiB7XG4gICAgdXJsOiBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIHVybCkpLFxuICAgIGFzOiBhcyA/IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgYXMpKSA6IGFzLFxuICB9XG59XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxuICBwcm9wcz86IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgZXJyPzogRXJyb3JcbiAgZXJyb3I/OiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHMgPSBQaWNrPFByaXZhdGVSb3V0ZUluZm8sICdDb21wb25lbnQnIHwgJ2Vycic+ICYge1xuICByb3V0ZXI6IFJvdXRlclxufSAmIFJlY29yZDxzdHJpbmcsIGFueT5cbmV4cG9ydCB0eXBlIEFwcENvbXBvbmVudCA9IENvbXBvbmVudFR5cGU8QXBwUHJvcHM+XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sIEFwcDogQXBwQ29tcG9uZW50KSA9PiBQcm9taXNlPHZvaWQ+XG5cbnR5cGUgQmVmb3JlUG9wU3RhdGVDYWxsYmFjayA9IChzdGF0ZTogTmV4dEhpc3RvcnlTdGF0ZSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPVxuICBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmXG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnlcblxuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmw6IHN0cmluZywgYXR0ZW1wdHM6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAvL1xuICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAvLyA+IG9wdGlvbi5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgLy9cbiAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKVxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgIH1cblxuICAgIHJldHVybiByZXMuanNvbigpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWY6IHN0cmluZywgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAvLyBsb29wLlxuICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgIG1hcmtMb2FkaW5nRXJyb3IoZXJyKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUHJpdmF0ZVJvdXRlSW5mbyB9XG4gIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gIHNkYzogeyBbYXNQYXRoOiBzdHJpbmddOiBvYmplY3QgfSA9IHt9XG4gIHN1YjogU3Vic2NyaXB0aW9uXG4gIGNsYzogQ29tcG9uZW50TG9hZENhbmNlbFxuICBwYWdlTG9hZGVyOiBhbnlcbiAgX2JwczogQmVmb3JlUG9wU3RhdGVDYWxsYmFjayB8IHVuZGVmaW5lZFxuICBldmVudHM6IE1pdHRFbWl0dGVyXG4gIF93cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gIF9pbkZsaWdodFJvdXRlPzogc3RyaW5nXG4gIF9zaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBpbml0aWFsU3R5bGVTaGVldHMsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgICAgbG9jYWxlLFxuICAgICAgbG9jYWxlcyxcbiAgICAgIGRlZmF1bHRMb2NhbGUsXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgaW5pdGlhbFN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICAgICAgQXBwOiBBcHBDb21wb25lbnRcbiAgICAgIHdyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gICAgICBlcnI/OiBFcnJvclxuICAgICAgaXNGYWxsYmFjazogYm9vbGVhblxuICAgICAgbG9jYWxlPzogc3RyaW5nXG4gICAgICBsb2NhbGVzPzogc3RyaW5nW11cbiAgICAgIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHM6IGluaXRpYWxTdHlsZVNoZWV0cyxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7XG4gICAgICBDb21wb25lbnQ6IEFwcCBhcyBDb21wb25lbnRUeXBlLFxuICAgICAgc3R5bGVTaGVldHM6IFtcbiAgICAgICAgLyogL19hcHAgZG9lcyBub3QgbmVlZCBpdHMgc3R5bGVzaGVldHMgbWFuYWdlZCAqL1xuICAgICAgXSxcbiAgICB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIHRoaXMuYXNQYXRoID1cbiAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBfX05FWFRfREFUQV9fLmF1dG9FeHBvcnQgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX2kxOG5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVcbiAgICAgIHRoaXMubG9jYWxlcyA9IGxvY2FsZXNcbiAgICAgIHRoaXMuZGVmYXVsdExvY2FsZSA9IGRlZmF1bHRMb2NhbGVcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICAgIGdldFVSTCgpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuXG4gICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnXG5cbiAgICAgICAgICBsZXQgc2Nyb2xsRGVib3VuY2VUaW1lb3V0OiB1bmRlZmluZWQgfCBOb2RlSlMuVGltZW91dFxuXG4gICAgICAgICAgY29uc3QgZGVib3VuY2VkU2Nyb2xsU2F2ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChzY3JvbGxEZWJvdW5jZVRpbWVvdXQpIGNsZWFyVGltZW91dChzY3JvbGxEZWJvdW5jZVRpbWVvdXQpXG5cbiAgICAgICAgICAgIHNjcm9sbERlYm91bmNlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB7IHVybCwgYXM6IGN1ckFzLCBvcHRpb25zIH0gPSBoaXN0b3J5LnN0YXRlXG4gICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGN1ckFzLFxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgICAgIF9OX1g6IHdpbmRvdy5zY3JvbGxYLFxuICAgICAgICAgICAgICAgICAgX05fWTogd2luZG93LnNjcm9sbFksXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSwgMTApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGRlYm91bmNlZFNjcm9sbFNhdmUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IGUuc3RhdGUgYXMgSGlzdG9yeVN0YXRlXG5cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFzdGF0ZS5fX04pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucyB9ID0gc3RhdGVcblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZShcbiAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgdXJsLFxuICAgICAgYXMsXG4gICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgIHNoYWxsb3c6IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLl9zaGFsbG93LFxuICAgICAgfSlcbiAgICApXG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIGFzeW5jIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmxcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgfVxuICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICBpZiAoU1QpIHtcbiAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSlcbiAgICB9XG5cbiAgICBhcyA9IGFkZExvY2FsZShhcywgdGhpcy5sb2NhbGUsIHRoaXMuZGVmYXVsdExvY2FsZSlcbiAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxMb2NhbGUoXG4gICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgIHRoaXMubG9jYWxlXG4gICAgKVxuICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhc1xuXG4gICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKSB7XG4gICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBc1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcylcbiAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcylcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSlcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAvLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbiAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICBjb25zdCB7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIucHJvbWlzZWRCdWlsZE1hbmlmZXN0XG5cbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHBhcnNlZFxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcykgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgIHBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgID8gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUpKVxuICAgICAgOiBwYXRobmFtZVxuXG4gICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykpIHtcbiAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgfVxuXG4gICAgbGV0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcblxuICAgIC8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4gICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKSB7XG4gICAgICByZXNvbHZlZEFzID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICBwYXJzZVJlbGF0aXZlVXJsKGFzKS5wYXRobmFtZSxcbiAgICAgICAgcGFnZXMsXG4gICAgICAgIGJhc2VQYXRoLFxuICAgICAgICByZXdyaXRlcyxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIChwOiBzdHJpbmcpID0+IHRoaXMuX3Jlc29sdmVIcmVmKHsgcGF0aG5hbWU6IHAgfSwgcGFnZXMpLnBhdGhuYW1lIVxuICAgICAgKVxuXG4gICAgICBpZiAocmVzb2x2ZWRBcyAhPT0gYXMpIHtcbiAgICAgICAgY29uc3QgcG90ZW50aWFsSHJlZiA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKFxuICAgICAgICAgIHRoaXMuX3Jlc29sdmVIcmVmKFxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkLCB7IHBhdGhuYW1lOiByZXNvbHZlZEFzIH0pLFxuICAgICAgICAgICAgcGFnZXMsXG4gICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICkucGF0aG5hbWUhXG4gICAgICAgIClcblxuICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwb3RlbnRpYWxIcmVmKSkge1xuICAgICAgICAgIHJvdXRlID0gcG90ZW50aWFsSHJlZlxuICAgICAgICAgIHBhdGhuYW1lID0gcG90ZW50aWFsSHJlZlxuICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksIHRoaXMubG9jYWxlKVxuXG4gICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgY29uc3QgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpXG4gICAgICBjb25zdCBhc1BhdGhuYW1lID0gcGFyc2VkQXMucGF0aG5hbWVcblxuICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICBjb25zdCBzaG91bGRJbnRlcnBvbGF0ZSA9IHJvdXRlID09PSBhc1BhdGhuYW1lXG4gICAgICBjb25zdCBpbnRlcnBvbGF0ZWRBcyA9IHNob3VsZEludGVycG9sYXRlXG4gICAgICAgID8gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkpXG4gICAgICAgIDogKHt9IGFzIHsgcmVzdWx0OiB1bmRlZmluZWQ7IHBhcmFtczogdW5kZWZpbmVkIH0pXG5cbiAgICAgIGlmICghcm91dGVNYXRjaCB8fCAoc2hvdWxkSW50ZXJwb2xhdGUgJiYgIWludGVycG9sYXRlZEFzLnJlc3VsdCkpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgIClcblxuICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgYCR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gYEludGVycG9sYXRpbmcgaHJlZmBcbiAgICAgICAgICAgICAgICAgIDogYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgYFxuICAgICAgICAgICAgICB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIChzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICA/IGBUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYFxuICAgICAgICAgICAgICA6IGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApICtcbiAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyAnaHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCdcbiAgICAgICAgICAgICAgICAgIDogJ2luY29tcGF0aWJsZS1ocmVmLWFzJ1xuICAgICAgICAgICAgICB9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzaG91bGRJbnRlcnBvbGF0ZSkge1xuICAgICAgICBhcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZEFzLCB7XG4gICAgICAgICAgICBwYXRobmFtZTogaW50ZXJwb2xhdGVkQXMucmVzdWx0LFxuICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgaW50ZXJwb2xhdGVkQXMucGFyYW1zISksXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcylcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHNoYWxsb3dcbiAgICAgIClcbiAgICAgIGxldCB7IGVycm9yLCBwcm9wcywgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIC8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuICAgICAgaWYgKFxuICAgICAgICAoX19OX1NTRyB8fCBfX05fU1NQKSAmJlxuICAgICAgICBwcm9wcyAmJlxuICAgICAgICAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMgJiZcbiAgICAgICAgKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuXG4gICAgICAgIC8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4gICAgICAgIC8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbiAgICAgICAgLy8gaXQncyBub3RcbiAgICAgICAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgIGNvbnN0IHBhcnNlZEhyZWYgPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICAgICAgICAgIHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWYsIHBhZ2VzKVxuXG4gICAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBhcnNlZEhyZWYucGF0aG5hbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoXG4gICAgICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgICAgICBkZXN0aW5hdGlvbixcbiAgICAgICAgICAgICAgZGVzdGluYXRpb24sXG4gICAgICAgICAgICAgIG9wdGlvbnNcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRlc3RpbmF0aW9uXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7fSlcbiAgICAgIH1cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICBtZXRob2QsXG4gICAgICAgIHVybCxcbiAgICAgICAgYWRkTG9jYWxlKGFzLCB0aGlzLmxvY2FsZSwgdGhpcy5kZWZhdWx0TG9jYWxlKSxcbiAgICAgICAgb3B0aW9uc1xuICAgICAgKVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBhcHBDb21wOiBhbnkgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50XG4gICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgIShyb3V0ZUluZm8uQ29tcG9uZW50IGFzIGFueSkuZ2V0SW5pdGlhbFByb3BzXG4gICAgICB9XG5cbiAgICAgIGF3YWl0IHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZSEsIHF1ZXJ5LCBjbGVhbmVkQXMsIHJvdXRlSW5mbykuY2F0Y2goXG4gICAgICAgIChlKSA9PiB7XG4gICAgICAgICAgaWYgKGUuY2FuY2VsbGVkKSBlcnJvciA9IGVycm9yIHx8IGVcbiAgICAgICAgICBlbHNlIHRocm93IGVcbiAgICAgICAgfVxuICAgICAgKVxuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGNsZWFuZWRBcylcbiAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uICYmICdfTl9YJyBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgd2luZG93LnNjcm9sbFRvKChvcHRpb25zIGFzIGFueSkuX05fWCwgKG9wdGlvbnMgYXMgYW55KS5fTl9ZKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcylcblxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgdGhpcy5fc2hhbGxvdyA9IG9wdGlvbnMuc2hhbGxvd1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgfSBhcyBIaXN0b3J5U3RhdGUsXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICBlcnI6IEVycm9yICYgeyBjb2RlOiBhbnk7IGNhbmNlbGxlZDogYm9vbGVhbiB9LFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgIC8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG5cbiAgICBpZiAoUEFHRV9MT0FEX0VSUk9SIGluIGVyciB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzKVxuXG4gICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcblxuICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IHBhZ2U6IENvbXBvbmVudCwgc3R5bGVTaGVldHMgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoXG4gICAgICAgICcvX2Vycm9yJ1xuICAgICAgKVxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICBlcnIsXG4gICAgICAgIGVycm9yOiBlcnIsXG4gICAgICB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IGF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgIGVycixcbiAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgfSBhcyBhbnkpXG4gICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKVxuICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihyb3V0ZUluZm9FcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHRydWUpXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgc2hhbGxvdzogYm9vbGVhbiA9IGZhbHNlXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG5cbiAgICAgIGlmIChzaGFsbG93ICYmIGNhY2hlZFJvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICByZXR1cm4gY2FjaGVkUm91dGVJbmZvXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA/IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oKHJlcykgPT4gKHtcbiAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogcmVzLnN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pKVxuXG4gICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBkYXRhSHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgZGVsQmFzZVBhdGgoYXMpLFxuICAgICAgICAgIF9fTl9TU0csXG4gICAgICAgICAgdGhpcy5sb2NhbGUsXG4gICAgICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhPFByaXZhdGVSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgIF9fTl9TU0dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgIClcbiAgICAgIClcblxuICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcylcbiAgICB9XG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm9cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSlcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICBfcmVzb2x2ZUhyZWYocGFyc2VkSHJlZjogVXJsT2JqZWN0LCBwYWdlczogc3RyaW5nW10sIGFwcGx5QmFzZVBhdGggPSB0cnVlKSB7XG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VkSHJlZlxuICAgIGNvbnN0IGNsZWFuUGF0aG5hbWUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChcbiAgICAgIGRlbm9ybWFsaXplUGFnZVBhdGgoYXBwbHlCYXNlUGF0aCA/IGRlbEJhc2VQYXRoKHBhdGhuYW1lISkgOiBwYXRobmFtZSEpXG4gICAgKVxuXG4gICAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICAgIHJldHVybiBwYXJzZWRIcmVmXG4gICAgfVxuXG4gICAgLy8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuICAgIGlmICghcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSEpKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICBwYWdlcy5zb21lKChwYWdlKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBpc0R5bmFtaWNSb3V0ZShwYWdlKSAmJlxuICAgICAgICAgIGdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lISlcbiAgICAgICAgKSB7XG4gICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IGFwcGx5QmFzZVBhdGggPyBhZGRCYXNlUGF0aChwYWdlKSA6IHBhZ2VcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gcGFyc2VkSHJlZlxuICB9XG5cbiAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9cbiAgYXN5bmMgcHJlZmV0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXNQYXRoOiBzdHJpbmcgPSB1cmwsXG4gICAgb3B0aW9uczogUHJlZmV0Y2hPcHRpb25zID0ge31cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZFxuXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcykgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIHRoaXMucGFnZUxvYWRlci5wcmVmZXRjaERhdGEoXG4gICAgICAgIHVybCxcbiAgICAgICAgYXNQYXRoLFxuICAgICAgICB0aGlzLmxvY2FsZSxcbiAgICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICApLFxuICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgIF0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxHb29kUGFnZUNhY2hlPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbY2FjaGVLZXldKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSlcbiAgICB9XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGFcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCBhcyBBcHBDb21wb25lbnQpXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLCBhcylcbiAgICAgIHRoaXMuY2xjKClcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeShkYXRhOiBQcml2YXRlUm91dGVJbmZvKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQgYXMgQXBwQ29tcG9uZW50KVxuICB9XG59XG4iLCIvLyBlc2NhcGUgZGVsaW1pdGVycyB1c2VkIGJ5IHBhdGgtdG8tcmVnZXhwXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlc2NhcGVQYXRoRGVsaW1pdGVycyhzZWdtZW50OiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gc2VnbWVudC5yZXBsYWNlKC9bLyM/XS9nLCAoY2hhcjogc3RyaW5nKSA9PiBlbmNvZGVVUklDb21wb25lbnQoY2hhcikpXG59XG4iLCIvLyBGb3JtYXQgZnVuY3Rpb24gbW9kaWZpZWQgZnJvbSBub2RlanNcbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0ICogYXMgcXVlcnlzdHJpbmcgZnJvbSAnLi9xdWVyeXN0cmluZydcblxuY29uc3Qgc2xhc2hlZFByb3RvY29scyA9IC9odHRwcz98ZnRwfGdvcGhlcnxmaWxlL1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VXJsKHVybE9iajogVXJsT2JqZWN0KSB7XG4gIGxldCB7IGF1dGgsIGhvc3RuYW1lIH0gPSB1cmxPYmpcbiAgbGV0IHByb3RvY29sID0gdXJsT2JqLnByb3RvY29sIHx8ICcnXG4gIGxldCBwYXRobmFtZSA9IHVybE9iai5wYXRobmFtZSB8fCAnJ1xuICBsZXQgaGFzaCA9IHVybE9iai5oYXNoIHx8ICcnXG4gIGxldCBxdWVyeSA9IHVybE9iai5xdWVyeSB8fCAnJ1xuICBsZXQgaG9zdDogc3RyaW5nIHwgZmFsc2UgPSBmYWxzZVxuXG4gIGF1dGggPSBhdXRoID8gZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpLnJlcGxhY2UoLyUzQS9pLCAnOicpICsgJ0AnIDogJydcblxuICBpZiAodXJsT2JqLmhvc3QpIHtcbiAgICBob3N0ID0gYXV0aCArIHVybE9iai5ob3N0XG4gIH0gZWxzZSBpZiAoaG9zdG5hbWUpIHtcbiAgICBob3N0ID0gYXV0aCArICh+aG9zdG5hbWUuaW5kZXhPZignOicpID8gYFske2hvc3RuYW1lfV1gIDogaG9zdG5hbWUpXG4gICAgaWYgKHVybE9iai5wb3J0KSB7XG4gICAgICBob3N0ICs9ICc6JyArIHVybE9iai5wb3J0XG4gICAgfVxuICB9XG5cbiAgaWYgKHF1ZXJ5ICYmIHR5cGVvZiBxdWVyeSA9PT0gJ29iamVjdCcpIHtcbiAgICBxdWVyeSA9IFN0cmluZyhxdWVyeXN0cmluZy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHF1ZXJ5IGFzIFBhcnNlZFVybFF1ZXJ5KSlcbiAgfVxuXG4gIGxldCBzZWFyY2ggPSB1cmxPYmouc2VhcmNoIHx8IChxdWVyeSAmJiBgPyR7cXVlcnl9YCkgfHwgJydcblxuICBpZiAocHJvdG9jb2wgJiYgcHJvdG9jb2wuc3Vic3RyKC0xKSAhPT0gJzonKSBwcm90b2NvbCArPSAnOidcblxuICBpZiAoXG4gICAgdXJsT2JqLnNsYXNoZXMgfHxcbiAgICAoKCFwcm90b2NvbCB8fCBzbGFzaGVkUHJvdG9jb2xzLnRlc3QocHJvdG9jb2wpKSAmJiBob3N0ICE9PSBmYWxzZSlcbiAgKSB7XG4gICAgaG9zdCA9ICcvLycgKyAoaG9zdCB8fCAnJylcbiAgICBpZiAocGF0aG5hbWUgJiYgcGF0aG5hbWVbMF0gIT09ICcvJykgcGF0aG5hbWUgPSAnLycgKyBwYXRobmFtZVxuICB9IGVsc2UgaWYgKCFob3N0KSB7XG4gICAgaG9zdCA9ICcnXG4gIH1cblxuICBpZiAoaGFzaCAmJiBoYXNoWzBdICE9PSAnIycpIGhhc2ggPSAnIycgKyBoYXNoXG4gIGlmIChzZWFyY2ggJiYgc2VhcmNoWzBdICE9PSAnPycpIHNlYXJjaCA9ICc/JyArIHNlYXJjaFxuXG4gIHBhdGhuYW1lID0gcGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLCBlbmNvZGVVUklDb21wb25lbnQpXG4gIHNlYXJjaCA9IHNlYXJjaC5yZXBsYWNlKCcjJywgJyUyMycpXG5cbiAgcmV0dXJuIGAke3Byb3RvY29sfSR7aG9zdH0ke3BhdGhuYW1lfSR7c2VhcmNofSR7aGFzaH1gXG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImltcG9ydCB7IGdldExvY2F0aW9uT3JpZ2luIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcblxuY29uc3QgRFVNTVlfQkFTRSA9IG5ldyBVUkwoXG4gIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gJ2h0dHA6Ly9uJyA6IGdldExvY2F0aW9uT3JpZ2luKClcbilcblxuLyoqXG4gKiBQYXJzZXMgcGF0aC1yZWxhdGl2ZSB1cmxzIChlLmcuIGAvaGVsbG8vd29ybGQ/Zm9vPWJhcmApLiBJZiB1cmwgaXNuJ3QgcGF0aC1yZWxhdGl2ZVxuICogKGUuZy4gYC4vaGVsbG9gKSB0aGVuIGF0IGxlYXN0IGJhc2UgbXVzdCBiZS5cbiAqIEFic29sdXRlIHVybHMgYXJlIHJlamVjdGVkIHdpdGggb25lIGV4Y2VwdGlvbiwgaW4gdGhlIGJyb3dzZXIsIGFic29sdXRlIHVybHMgdGhhdCBhcmUgb25cbiAqIHRoZSBjdXJyZW50IG9yaWdpbiB3aWxsIGJlIHBhcnNlZCBhcyByZWxhdGl2ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VSZWxhdGl2ZVVybCh1cmw6IHN0cmluZywgYmFzZT86IHN0cmluZykge1xuICBjb25zdCByZXNvbHZlZEJhc2UgPSBiYXNlID8gbmV3IFVSTChiYXNlLCBEVU1NWV9CQVNFKSA6IERVTU1ZX0JBU0VcbiAgY29uc3Qge1xuICAgIHBhdGhuYW1lLFxuICAgIHNlYXJjaFBhcmFtcyxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmLFxuICAgIG9yaWdpbixcbiAgICBwcm90b2NvbCxcbiAgfSA9IG5ldyBVUkwodXJsLCByZXNvbHZlZEJhc2UpXG4gIGlmIChcbiAgICBvcmlnaW4gIT09IERVTU1ZX0JBU0Uub3JpZ2luIHx8XG4gICAgKHByb3RvY29sICE9PSAnaHR0cDonICYmIHByb3RvY29sICE9PSAnaHR0cHM6JylcbiAgKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQ6IGludmFsaWQgcmVsYXRpdmUgVVJMJylcbiAgfVxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIHF1ZXJ5OiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZjogaHJlZi5zbGljZShEVU1NWV9CQVNFLm9yaWdpbi5sZW5ndGgpLFxuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBwYXRoVG9SZWdleHAgZnJvbSAnbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwJ1xuXG5leHBvcnQgeyBwYXRoVG9SZWdleHAgfVxuXG5leHBvcnQgY29uc3QgbWF0Y2hlck9wdGlvbnM6IHBhdGhUb1JlZ2V4cC5Ub2tlbnNUb1JlZ2V4cE9wdGlvbnMgJlxuICBwYXRoVG9SZWdleHAuUGFyc2VPcHRpb25zID0ge1xuICBzZW5zaXRpdmU6IGZhbHNlLFxuICBkZWxpbWl0ZXI6ICcvJyxcbn1cblxuZXhwb3J0IGNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnM6IHBhdGhUb1JlZ2V4cC5Ub2tlbnNUb1JlZ2V4cE9wdGlvbnMgJlxuICBwYXRoVG9SZWdleHAuUGFyc2VPcHRpb25zID0ge1xuICAuLi5tYXRjaGVyT3B0aW9ucyxcbiAgc3RyaWN0OiB0cnVlLFxufVxuXG5leHBvcnQgZGVmYXVsdCAoY3VzdG9tUm91dGUgPSBmYWxzZSkgPT4ge1xuICByZXR1cm4gKHBhdGg6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IGtleXM6IHBhdGhUb1JlZ2V4cC5LZXlbXSA9IFtdXG4gICAgY29uc3QgbWF0Y2hlclJlZ2V4ID0gcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChcbiAgICAgIHBhdGgsXG4gICAgICBrZXlzLFxuICAgICAgY3VzdG9tUm91dGUgPyBjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zIDogbWF0Y2hlck9wdGlvbnNcbiAgICApXG4gICAgY29uc3QgbWF0Y2hlciA9IHBhdGhUb1JlZ2V4cC5yZWdleHBUb0Z1bmN0aW9uKG1hdGNoZXJSZWdleCwga2V5cylcblxuICAgIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQsIHBhcmFtcz86IGFueSkgPT4ge1xuICAgICAgY29uc3QgcmVzID0gcGF0aG5hbWUgPT0gbnVsbCA/IGZhbHNlIDogbWF0Y2hlcihwYXRobmFtZSlcbiAgICAgIGlmICghcmVzKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuXG4gICAgICBpZiAoY3VzdG9tUm91dGUpIHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgICAgICAgIC8vIHVubmFtZWQgcGFyYW1zIHNob3VsZCBiZSByZW1vdmVkIGFzIHRoZXlcbiAgICAgICAgICAvLyBhcmUgbm90IGFsbG93ZWQgdG8gYmUgdXNlZCBpbiB0aGUgZGVzdGluYXRpb25cbiAgICAgICAgICBpZiAodHlwZW9mIGtleS5uYW1lID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgZGVsZXRlIChyZXMucGFyYW1zIGFzIGFueSlba2V5Lm5hbWVdXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7IC4uLnBhcmFtcywgLi4ucmVzLnBhcmFtcyB9XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgKiBhcyBwYXRoVG9SZWdleHAgZnJvbSAnbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwJ1xuXG50eXBlIFBhcmFtcyA9IHsgW3BhcmFtOiBzdHJpbmddOiBhbnkgfVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmVwYXJlRGVzdGluYXRpb24oXG4gIGRlc3RpbmF0aW9uOiBzdHJpbmcsXG4gIHBhcmFtczogUGFyYW1zLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gIGFwcGVuZFBhcmFtc1RvUXVlcnk6IGJvb2xlYW4sXG4gIGJhc2VQYXRoOiBzdHJpbmdcbikge1xuICBsZXQgcGFyc2VkRGVzdGluYXRpb246IHtcbiAgICBxdWVyeT86IFBhcnNlZFVybFF1ZXJ5XG4gICAgcHJvdG9jb2w/OiBzdHJpbmdcbiAgICBob3N0bmFtZT86IHN0cmluZ1xuICAgIHBvcnQ/OiBzdHJpbmdcbiAgfSAmIFJldHVyblR5cGU8dHlwZW9mIHBhcnNlUmVsYXRpdmVVcmw+ID0ge30gYXMgYW55XG5cbiAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgIHBhcnNlZERlc3RpbmF0aW9uID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHNlYXJjaFBhcmFtcyxcbiAgICAgIGhhc2gsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBwcm90b2NvbCxcbiAgICAgIHNlYXJjaCxcbiAgICAgIGhyZWYsXG4gICAgfSA9IG5ldyBVUkwoZGVzdGluYXRpb24pXG5cbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICAgIGhhc2gsXG4gICAgICBwcm90b2NvbCxcbiAgICAgIGhvc3RuYW1lLFxuICAgICAgcG9ydCxcbiAgICAgIHNlYXJjaCxcbiAgICAgIGhyZWYsXG4gICAgfVxuICB9XG5cbiAgY29uc3QgZGVzdFF1ZXJ5ID0gcGFyc2VkRGVzdGluYXRpb24ucXVlcnlcbiAgY29uc3QgZGVzdFBhdGggPSBgJHtwYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSF9JHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5oYXNoIHx8ICcnXG4gIH1gXG4gIGNvbnN0IGRlc3RQYXRoUGFyYW1LZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKGRlc3RQYXRoLCBkZXN0UGF0aFBhcmFtS2V5cylcblxuICBjb25zdCBkZXN0UGF0aFBhcmFtcyA9IGRlc3RQYXRoUGFyYW1LZXlzLm1hcCgoa2V5KSA9PiBrZXkubmFtZSlcblxuICBsZXQgZGVzdGluYXRpb25Db21waWxlciA9IHBhdGhUb1JlZ2V4cC5jb21waWxlKFxuICAgIGRlc3RQYXRoLFxuICAgIC8vIHdlIGRvbid0IHZhbGlkYXRlIHdoaWxlIGNvbXBpbGluZyB0aGUgZGVzdGluYXRpb24gc2luY2Ugd2Ugc2hvdWxkXG4gICAgLy8gaGF2ZSBhbHJlYWR5IHZhbGlkYXRlZCBiZWZvcmUgd2UgZ290IHRvIHRoaXMgcG9pbnQgYW5kIHZhbGlkYXRpbmdcbiAgICAvLyBicmVha3MgY29tcGlsaW5nIGRlc3RpbmF0aW9ucyB3aXRoIG5hbWVkIHBhdHRlcm4gcGFyYW1zIGZyb20gdGhlIHNvdXJjZVxuICAgIC8vIGUuZy4gL3NvbWV0aGluZzpoZWxsbyguKikgLT4gL2Fub3RoZXIvOmhlbGxvIGlzIGJyb2tlbiB3aXRoIHZhbGlkYXRpb25cbiAgICAvLyBzaW5jZSBjb21waWxlIHZhbGlkYXRpb24gaXMgbWVhbnQgZm9yIHJldmVyc2luZyBhbmQgbm90IGZvciBpbnNlcnRpbmdcbiAgICAvLyBwYXJhbXMgZnJvbSBhIHNlcGFyYXRlIHBhdGgtcmVnZXggaW50byBhbm90aGVyXG4gICAgeyB2YWxpZGF0ZTogZmFsc2UgfVxuICApXG4gIGxldCBuZXdVcmxcblxuICAvLyB1cGRhdGUgYW55IHBhcmFtcyBpbiBxdWVyeSB2YWx1ZXNcbiAgZm9yIChjb25zdCBba2V5LCBzdHJPckFycmF5XSBvZiBPYmplY3QuZW50cmllcyhkZXN0UXVlcnkpKSB7XG4gICAgbGV0IHZhbHVlID0gQXJyYXkuaXNBcnJheShzdHJPckFycmF5KSA/IHN0ck9yQXJyYXlbMF0gOiBzdHJPckFycmF5XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICAvLyB0aGUgdmFsdWUgbmVlZHMgdG8gc3RhcnQgd2l0aCBhIGZvcndhcmQtc2xhc2ggdG8gYmUgY29tcGlsZWRcbiAgICAgIC8vIGNvcnJlY3RseVxuICAgICAgdmFsdWUgPSBgLyR7dmFsdWV9YFxuICAgICAgY29uc3QgcXVlcnlDb21waWxlciA9IHBhdGhUb1JlZ2V4cC5jb21waWxlKHZhbHVlLCB7IHZhbGlkYXRlOiBmYWxzZSB9KVxuICAgICAgdmFsdWUgPSBxdWVyeUNvbXBpbGVyKHBhcmFtcykuc3Vic3RyKDEpXG4gICAgfVxuICAgIGRlc3RRdWVyeVtrZXldID0gdmFsdWVcbiAgfVxuXG4gIC8vIGFkZCBwYXRoIHBhcmFtcyB0byBxdWVyeSBpZiBpdCdzIG5vdCBhIHJlZGlyZWN0IGFuZCBub3RcbiAgLy8gYWxyZWFkeSBkZWZpbmVkIGluIGRlc3RpbmF0aW9uIHF1ZXJ5IG9yIHBhdGhcbiAgY29uc3QgcGFyYW1LZXlzID0gT2JqZWN0LmtleXMocGFyYW1zKVxuXG4gIGlmIChcbiAgICBhcHBlbmRQYXJhbXNUb1F1ZXJ5ICYmXG4gICAgIXBhcmFtS2V5cy5zb21lKChrZXkpID0+IGRlc3RQYXRoUGFyYW1zLmluY2x1ZGVzKGtleSkpXG4gICkge1xuICAgIGZvciAoY29uc3Qga2V5IG9mIHBhcmFtS2V5cykge1xuICAgICAgaWYgKCEoa2V5IGluIGRlc3RRdWVyeSkpIHtcbiAgICAgICAgZGVzdFF1ZXJ5W2tleV0gPSBwYXJhbXNba2V5XVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHNob3VsZEFkZEJhc2VQYXRoID0gZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpICYmIGJhc2VQYXRoXG5cbiAgdHJ5IHtcbiAgICBuZXdVcmwgPSBgJHtzaG91bGRBZGRCYXNlUGF0aCA/IGJhc2VQYXRoIDogJyd9JHtkZXN0aW5hdGlvbkNvbXBpbGVyKFxuICAgICAgcGFyYW1zXG4gICAgKX1gXG5cbiAgICBjb25zdCBbcGF0aG5hbWUsIGhhc2hdID0gbmV3VXJsLnNwbGl0KCcjJylcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCA9IGAke2hhc2ggPyAnIycgOiAnJ30ke2hhc2ggfHwgJyd9YFxuICAgIGRlbGV0ZSBwYXJzZWREZXN0aW5hdGlvbi5zZWFyY2hcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgaWYgKGVyci5tZXNzYWdlLm1hdGNoKC9FeHBlY3RlZCAuKj8gdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhbiBhcnJheS8pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBUbyB1c2UgYSBtdWx0aS1tYXRjaCBpbiB0aGUgZGVzdGluYXRpb24geW91IG11c3QgYWRkIFxcYCpcXGAgYXQgdGhlIGVuZCBvZiB0aGUgcGFyYW0gbmFtZSB0byBzaWduaWZ5IGl0IHNob3VsZCByZXBlYXQuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2ludmFsaWQtbXVsdGktbWF0Y2hgXG4gICAgICApXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9XG5cbiAgLy8gUXVlcnkgbWVyZ2Ugb3JkZXIgbG93ZXN0IHByaW9yaXR5IHRvIGhpZ2hlc3RcbiAgLy8gMS4gaW5pdGlhbCBVUkwgcXVlcnkgdmFsdWVzXG4gIC8vIDIuIHBhdGggc2VnbWVudCB2YWx1ZXNcbiAgLy8gMy4gZGVzdGluYXRpb24gc3BlY2lmaWVkIHF1ZXJ5IHZhbHVlc1xuICBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeSA9IHtcbiAgICAuLi5xdWVyeSxcbiAgICAuLi5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSxcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbmV3VXJsLFxuICAgIHBhcnNlZERlc3RpbmF0aW9uLFxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShcbiAgc2VhcmNoUGFyYW1zOiBVUkxTZWFyY2hQYXJhbXNcbik6IFBhcnNlZFVybFF1ZXJ5IHtcbiAgY29uc3QgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cbiAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICBpZiAodHlwZW9mIHF1ZXJ5W2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBxdWVyeVtrZXldID0gdmFsdWVcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpIHtcbiAgICAgIDsocXVlcnlba2V5XSBhcyBzdHJpbmdbXSkucHVzaCh2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgcXVlcnlba2V5XSA9IFtxdWVyeVtrZXldIGFzIHN0cmluZywgdmFsdWVdXG4gICAgfVxuICB9KVxuICByZXR1cm4gcXVlcnlcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShwYXJhbTogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKFxuICAgIHR5cGVvZiBwYXJhbSA9PT0gJ3N0cmluZycgfHxcbiAgICAodHlwZW9mIHBhcmFtID09PSAnbnVtYmVyJyAmJiAhaXNOYU4ocGFyYW0pKSB8fFxuICAgIHR5cGVvZiBwYXJhbSA9PT0gJ2Jvb2xlYW4nXG4gICkge1xuICAgIHJldHVybiBTdHJpbmcocGFyYW0pXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICcnXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMoXG4gIHVybFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgY29uc3QgcmVzdWx0ID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpXG4gIE9iamVjdC5lbnRyaWVzKHVybFF1ZXJ5KS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlLmZvckVhY2goKGl0ZW0pID0+IHJlc3VsdC5hcHBlbmQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKGl0ZW0pKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0LnNldChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0odmFsdWUpKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduKFxuICB0YXJnZXQ6IFVSTFNlYXJjaFBhcmFtcyxcbiAgLi4uc2VhcmNoUGFyYW1zTGlzdDogVVJMU2VhcmNoUGFyYW1zW11cbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIHNlYXJjaFBhcmFtc0xpc3QuZm9yRWFjaCgoc2VhcmNoUGFyYW1zKSA9PiB7XG4gICAgQXJyYXkuZnJvbShzZWFyY2hQYXJhbXMua2V5cygpKS5mb3JFYWNoKChrZXkpID0+IHRhcmdldC5kZWxldGUoa2V5KSlcbiAgICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4gdGFyZ2V0LmFwcGVuZChrZXksIHZhbHVlKSlcbiAgfSlcbiAgcmV0dXJuIHRhcmdldFxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCBwYXRoTWF0Y2ggZnJvbSAnLi9wYXRoLW1hdGNoJ1xuaW1wb3J0IHByZXBhcmVEZXN0aW5hdGlvbiBmcm9tICcuL3ByZXBhcmUtZGVzdGluYXRpb24nXG5pbXBvcnQgeyBSZXdyaXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL2xvYWQtY3VzdG9tLXJvdXRlcydcbmltcG9ydCB7IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoIH0gZnJvbSAnLi4vLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcblxuY29uc3QgY3VzdG9tUm91dGVNYXRjaGVyID0gcGF0aE1hdGNoKHRydWUpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc29sdmVSZXdyaXRlcyhcbiAgYXNQYXRoOiBzdHJpbmcsXG4gIHBhZ2VzOiBzdHJpbmdbXSxcbiAgYmFzZVBhdGg6IHN0cmluZyxcbiAgcmV3cml0ZXM6IFJld3JpdGVbXSxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICByZXNvbHZlSHJlZjogKHBhdGg6IHN0cmluZykgPT4gc3RyaW5nXG4pIHtcbiAgaWYgKCFwYWdlcy5pbmNsdWRlcyhhc1BhdGgpKSB7XG4gICAgZm9yIChjb25zdCByZXdyaXRlIG9mIHJld3JpdGVzKSB7XG4gICAgICBjb25zdCBtYXRjaGVyID0gY3VzdG9tUm91dGVNYXRjaGVyKHJld3JpdGUuc291cmNlKVxuICAgICAgY29uc3QgcGFyYW1zID0gbWF0Y2hlcihhc1BhdGgpXG5cbiAgICAgIGlmIChwYXJhbXMpIHtcbiAgICAgICAgaWYgKCFyZXdyaXRlLmRlc3RpbmF0aW9uKSB7XG4gICAgICAgICAgLy8gdGhpcyBpcyBhIHByb3hpZWQgcmV3cml0ZSB3aGljaCBpc24ndCBoYW5kbGVkIG9uIHRoZSBjbGllbnRcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRlc3RSZXMgPSBwcmVwYXJlRGVzdGluYXRpb24oXG4gICAgICAgICAgcmV3cml0ZS5kZXN0aW5hdGlvbixcbiAgICAgICAgICBwYXJhbXMsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICByZXdyaXRlLmJhc2VQYXRoID09PSBmYWxzZSA/ICcnIDogYmFzZVBhdGhcbiAgICAgICAgKVxuICAgICAgICBhc1BhdGggPSBkZXN0UmVzLnBhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lIVxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCBkZXN0UmVzLnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5KVxuXG4gICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhyZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChhc1BhdGgpKSkge1xuICAgICAgICAgIC8vIGNoZWNrIGlmIHdlIG5vdyBtYXRjaCBhIHBhZ2UgYXMgdGhpcyBtZWFucyB3ZSBhcmUgZG9uZVxuICAgICAgICAgIC8vIHJlc29sdmluZyB0aGUgcmV3cml0ZXNcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY2hlY2sgaWYgd2UgbWF0Y2ggYSBkeW5hbWljLXJvdXRlLCBpZiBzbyB3ZSBicmVhayB0aGUgcmV3cml0ZXMgY2hhaW5cbiAgICAgICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gcmVzb2x2ZUhyZWYoYXNQYXRoKVxuXG4gICAgICAgIGlmIChyZXNvbHZlZEhyZWYgIT09IGFzUGF0aCAmJiBwYWdlcy5pbmNsdWRlcyhyZXNvbHZlZEhyZWYpKSB7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gYXNQYXRoXG59XG4iLCJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi9yb3V0ZS1yZWdleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXhcbiAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lISlcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nXG4gICAgICAgIClcbiAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV1cbiAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXVxuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKChlbnRyeSkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgIDogZGVjb2RlKG0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcGFyYW1zXG4gIH1cbn1cbiIsImludGVyZmFjZSBHcm91cCB7XG4gIHBvczogbnVtYmVyXG4gIHJlcGVhdDogYm9vbGVhblxuICBvcHRpb25hbDogYm9vbGVhblxufVxuXG4vLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKVxufVxuXG5mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcihwYXJhbTogc3RyaW5nKSB7XG4gIGNvbnN0IG9wdGlvbmFsID0gcGFyYW0uc3RhcnRzV2l0aCgnWycpICYmIHBhcmFtLmVuZHNXaXRoKCddJylcbiAgaWYgKG9wdGlvbmFsKSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgxLCAtMSlcbiAgfVxuICBjb25zdCByZXBlYXQgPSBwYXJhbS5zdGFydHNXaXRoKCcuLi4nKVxuICBpZiAocmVwZWF0KSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgzKVxuICB9XG4gIHJldHVybiB7IGtleTogcGFyYW0sIHJlcGVhdCwgb3B0aW9uYWwgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVSZWdleChcbiAgbm9ybWFsaXplZFJvdXRlOiBzdHJpbmdcbik6IHtcbiAgcmU6IFJlZ0V4cFxuICBuYW1lZFJlZ2V4Pzogc3RyaW5nXG4gIHJvdXRlS2V5cz86IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfVxuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfVxufSB7XG4gIGNvbnN0IHNlZ21lbnRzID0gKG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJylcbiAgICAuc2xpY2UoMSlcbiAgICAuc3BsaXQoJy8nKVxuXG4gIGNvbnN0IGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9ID0ge31cbiAgbGV0IGdyb3VwSW5kZXggPSAxXG4gIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgIGdyb3Vwc1trZXldID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0LCBvcHRpb25hbCB9XG4gICAgICAgIHJldHVybiByZXBlYXQgPyAob3B0aW9uYWwgPyAnKD86LyguKz8pKT8nIDogJy8oLis/KScpIDogJy8oW14vXSs/KSdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgfVxuICAgIH0pXG4gICAgLmpvaW4oJycpXG5cbiAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIGxldCByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICBsZXQgcm91dGVLZXlDaGFyTGVuZ3RoID0gMVxuXG4gICAgLy8gYnVpbGRzIGEgbWluaW1hbCByb3V0ZUtleSB1c2luZyBvbmx5IGEteiBhbmQgbWluaW1hbCBudW1iZXIgb2YgY2hhcmFjdGVyc1xuICAgIGNvbnN0IGdldFNhZmVSb3V0ZUtleSA9ICgpID0+IHtcbiAgICAgIGxldCByb3V0ZUtleSA9ICcnXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm91dGVLZXlDaGFyTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcm91dGVLZXkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShyb3V0ZUtleUNoYXJDb2RlKVxuICAgICAgICByb3V0ZUtleUNoYXJDb2RlKytcblxuICAgICAgICBpZiAocm91dGVLZXlDaGFyQ29kZSA+IDEyMikge1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckxlbmd0aCsrXG4gICAgICAgICAgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByb3V0ZUtleVxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlS2V5czogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9ID0ge31cblxuICAgIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgICAgLy8gcmVwbGFjZSBhbnkgbm9uLXdvcmQgY2hhcmFjdGVycyBzaW5jZSB0aGV5IGNhbiBicmVha1xuICAgICAgICAgIC8vIHRoZSBuYW1lZCByZWdleFxuICAgICAgICAgIGxldCBjbGVhbmVkS2V5ID0ga2V5LnJlcGxhY2UoL1xcVy9nLCAnJylcbiAgICAgICAgICBsZXQgaW52YWxpZEtleSA9IGZhbHNlXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiB0aGUga2V5IGlzIHN0aWxsIGludmFsaWQgYW5kIGZhbGxiYWNrIHRvIHVzaW5nIGEga25vd25cbiAgICAgICAgICAvLyBzYWZlIGtleVxuICAgICAgICAgIGlmIChjbGVhbmVkS2V5Lmxlbmd0aCA9PT0gMCB8fCBjbGVhbmVkS2V5Lmxlbmd0aCA+IDMwKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWlzTmFOKHBhcnNlSW50KGNsZWFuZWRLZXkuc3Vic3RyKDAsIDEpKSkpIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGludmFsaWRLZXkpIHtcbiAgICAgICAgICAgIGNsZWFuZWRLZXkgPSBnZXRTYWZlUm91dGVLZXkoKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlS2V5c1tjbGVhbmVkS2V5XSA9IGtleVxuICAgICAgICAgIHJldHVybiByZXBlYXRcbiAgICAgICAgICAgID8gb3B0aW9uYWxcbiAgICAgICAgICAgICAgPyBgKD86Lyg/PCR7Y2xlYW5lZEtleX0+Lis/KSk/YFxuICAgICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT4uKz8pYFxuICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+W14vXSs/KWBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5qb2luKCcnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgICAgZ3JvdXBzLFxuICAgICAgcm91dGVLZXlzLFxuICAgICAgbmFtZWRSZWdleDogYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgLFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgZ3JvdXBzLFxuICB9XG59XG4iLCJpbXBvcnQgeyBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSAnaHR0cCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBmb3JtYXRVcmwgfSBmcm9tICcuL3JvdXRlci91dGlscy9mb3JtYXQtdXJsJ1xuaW1wb3J0IHsgTWFuaWZlc3RJdGVtIH0gZnJvbSAnLi4vc2VydmVyL2xvYWQtY29tcG9uZW50cydcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICdAbmV4dC9lbnYnXG5pbXBvcnQgeyBCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vc2VydmVyL2dldC1wYWdlLWZpbGVzJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuLyoqXG4gKiBXZWIgdml0YWxzIHByb3ZpZGVkIHRvIF9hcHAucmVwb3J0V2ViVml0YWxzIGJ5IENvcmUgV2ViIFZpdGFscyBwbHVnaW4gZGV2ZWxvcGVkIGJ5IEdvb2dsZSBDaHJvbWUgdGVhbS5cbiAqIGh0dHBzOi8vbmV4dGpzLm9yZy9ibG9nL25leHQtOS00I2ludGVncmF0ZWQtd2ViLXZpdGFscy1yZXBvcnRpbmdcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dFdlYlZpdGFsc01ldHJpYyA9IHtcbiAgaWQ6IHN0cmluZ1xuICBsYWJlbDogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBzdGFydFRpbWU6IG51bWJlclxuICB2YWx1ZTogbnVtYmVyXG59XG5cbmV4cG9ydCB0eXBlIEVuaGFuY2VyPEM+ID0gKENvbXBvbmVudDogQykgPT4gQ1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRzRW5oYW5jZXIgPVxuICB8IHtcbiAgICAgIGVuaGFuY2VBcHA/OiBFbmhhbmNlcjxBcHBUeXBlPlxuICAgICAgZW5oYW5jZUNvbXBvbmVudD86IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuICAgIH1cbiAgfCBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZVJlc3VsdCA9IHtcbiAgaHRtbDogc3RyaW5nXG4gIGhlYWQ/OiBBcnJheTxKU1guRWxlbWVudCB8IG51bGw+XG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2UgPSAoXG4gIG9wdGlvbnM/OiBDb21wb25lbnRzRW5oYW5jZXJcbikgPT4gUmVuZGVyUGFnZVJlc3VsdCB8IFByb21pc2U8UmVuZGVyUGFnZVJlc3VsdD5cblxuZXhwb3J0IHR5cGUgQmFzZUNvbnRleHQgPSB7XG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgSGVhZEVudHJ5ID0gW3N0cmluZywgeyBba2V5OiBzdHJpbmddOiBhbnkgfV1cblxuZXhwb3J0IHR5cGUgTkVYVF9EQVRBID0ge1xuICBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PlxuICBwYWdlOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGJ1aWxkSWQ6IHN0cmluZ1xuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICBuZXh0RXhwb3J0PzogYm9vbGVhblxuICBhdXRvRXhwb3J0PzogYm9vbGVhblxuICBpc0ZhbGxiYWNrPzogYm9vbGVhblxuICBkeW5hbWljSWRzPzogc3RyaW5nW11cbiAgZXJyPzogRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfVxuICBnc3A/OiBib29sZWFuXG4gIGdzc3A/OiBib29sZWFuXG4gIGN1c3RvbVNlcnZlcj86IGJvb2xlYW5cbiAgZ2lwPzogYm9vbGVhblxuICBhcHBHaXA/OiBib29sZWFuXG4gIGhlYWQ6IEhlYWRFbnRyeVtdXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogYENvbXBvbmVudGAgdGhlIHRyZWUgb2YgdGhlIEFwcCB0byB1c2UgaWYgbmVlZGluZyB0byByZW5kZXIgc2VwYXJhdGVseVxuICAgKi9cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyPiA9IHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+XG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG4gIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gIHJvdXRlcjogUlxufVxuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsUHJvcHMgPSB7XG4gIHBhZ2VQcm9wczogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzVHlwZTxcbiAgUiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyLFxuICBQID0ge31cbj4gPSBBcHBJbml0aWFsUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIFA+XG4gIHJvdXRlcjogUlxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQgJiB7XG4gIHJlbmRlclBhZ2U6IFJlbmRlclBhZ2Vcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMgPSBSZW5kZXJQYWdlUmVzdWx0ICYge1xuICBzdHlsZXM/OiBSZWFjdC5SZWFjdEVsZW1lbnRbXSB8IFJlYWN0LlJlYWN0RnJhZ21lbnRcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgZGFuZ2Vyb3VzQXNQYXRoOiBzdHJpbmdcbiAgZG9jQ29tcG9uZW50c1JlbmRlcmVkOiB7XG4gICAgSHRtbD86IGJvb2xlYW5cbiAgICBNYWluPzogYm9vbGVhblxuICAgIEhlYWQ/OiBib29sZWFuXG4gICAgTmV4dFNjcmlwdD86IGJvb2xlYW5cbiAgfVxuICBidWlsZE1hbmlmZXN0OiBCdWlsZE1hbmlmZXN0XG4gIGFtcFBhdGg6IHN0cmluZ1xuICBpbkFtcE1vZGU6IGJvb2xlYW5cbiAgaHlicmlkQW1wOiBib29sZWFuXG4gIGlzRGV2ZWxvcG1lbnQ6IGJvb2xlYW5cbiAgZHluYW1pY0ltcG9ydHM6IE1hbmlmZXN0SXRlbVtdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2VcbiAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmc6IHN0cmluZ1xuICBsb2NhbGU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcblxuICBwcmV2aWV3PzogYm9vbGVhblxuICAvKipcbiAgICogUHJldmlldyBkYXRhIHNldCBvbiB0aGUgcmVxdWVzdCwgaWYgYW55XG4gICAqICovXG4gIHByZXZpZXdEYXRhPzogYW55XG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3QodXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3Qoc3RhdHVzOiBudW1iZXIsIHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybDogVXJsT2JqZWN0KTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFVybCh1cmwpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZVBhdGhTZXA9bm9ybWFsaXplUGF0aFNlcDtleHBvcnRzLmRlbm9ybWFsaXplUGFnZVBhdGg9ZGVub3JtYWxpemVQYWdlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVQYXRoU2VwKHBhdGgpe3JldHVybiBwYXRoLnJlcGxhY2UoL1xcXFwvZywnLycpO31mdW5jdGlvbiBkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhZ2Upe3BhZ2U9bm9ybWFsaXplUGF0aFNlcChwYWdlKTtpZihwYWdlLnN0YXJ0c1dpdGgoJy9pbmRleC8nKSl7cGFnZT1wYWdlLnNsaWNlKDYpO31lbHNlIGlmKHBhZ2U9PT0nL2luZGV4Jyl7cGFnZT0nLyc7fXJldHVybiBwYWdlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcy5tYXAiLCJpbXBvcnQgUmVhY3QsIHsgRXJyb3JJbmZvIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICBleGVjT25jZSxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlLFxuICBOZXh0V2ViVml0YWxzTWV0cmljLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICcuLi9jbGllbnQvcm91dGVyJ1xuXG5leHBvcnQgeyBBcHBJbml0aWFsUHJvcHMgfVxuXG5leHBvcnQgeyBOZXh0V2ViVml0YWxzTWV0cmljIH1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dCA9IEFwcENvbnRleHRUeXBlPFJvdXRlcj5cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHM8UCA9IHt9PiA9IEFwcFByb3BzVHlwZTxSb3V0ZXIsIFA+XG5cbi8qKlxuICogYEFwcGAgY29tcG9uZW50IGlzIHVzZWQgZm9yIGluaXRpYWxpemUgb2YgcGFnZXMuIEl0IGFsbG93cyBmb3Igb3ZlcndyaXRpbmcgYW5kIGZ1bGwgY29udHJvbCBvZiB0aGUgYHBhZ2VgIGluaXRpYWxpemF0aW9uLlxuICogVGhpcyBhbGxvd3MgZm9yIGtlZXBpbmcgc3RhdGUgYmV0d2VlbiBuYXZpZ2F0aW9uLCBjdXN0b20gZXJyb3IgaGFuZGxpbmcsIGluamVjdGluZyBhZGRpdGlvbmFsIGRhdGEuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGFwcEdldEluaXRpYWxQcm9wcyh7XG4gIENvbXBvbmVudCxcbiAgY3R4LFxufTogQXBwQ29udGV4dCk6IFByb21pc2U8QXBwSW5pdGlhbFByb3BzPiB7XG4gIGNvbnN0IHBhZ2VQcm9wcyA9IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBjdHgpXG4gIHJldHVybiB7IHBhZ2VQcm9wcyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcDxQID0ge30sIENQID0ge30sIFMgPSB7fT4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8XG4gIFAgJiBBcHBQcm9wczxDUD4sXG4gIFNcbj4ge1xuICBzdGF0aWMgb3JpZ0dldEluaXRpYWxQcm9wcyA9IGFwcEdldEluaXRpYWxQcm9wc1xuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzID0gYXBwR2V0SW5pdGlhbFByb3BzXG5cbiAgLy8gS2VwdCBoZXJlIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cbiAgLy8gV2hlbiBzb21lb25lIGVuZGVkIEFwcCB0aGV5IGNvdWxkIGNhbGwgYHN1cGVyLmNvbXBvbmVudERpZENhdGNoYC5cbiAgLy8gQGRlcHJlY2F0ZWQgVGhpcyBtZXRob2QgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gRXJyb3JzIGFyZSBjYXVnaHQgYXQgdGhlIHRvcCBsZXZlbFxuICBjb21wb25lbnREaWRDYXRjaChlcnJvcjogRXJyb3IsIF9lcnJvckluZm86IEVycm9ySW5mbyk6IHZvaWQge1xuICAgIHRocm93IGVycm9yXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyByb3V0ZXIsIENvbXBvbmVudCwgcGFnZVByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSB0aGlzXG4gICAgICAucHJvcHMgYXMgQXBwUHJvcHM8Q1A+XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBvbmVudFxuICAgICAgICB7Li4ucGFnZVByb3BzfVxuICAgICAgICB7XG4gICAgICAgICAgLy8gd2UgZG9uJ3QgYWRkIHRoZSBsZWdhY3kgVVJMIHByb3AgaWYgaXQncyB1c2luZyBub24tbGVnYWN5XG4gICAgICAgICAgLy8gbWV0aG9kcyBsaWtlIGdldFN0YXRpY1Byb3BzIGFuZCBnZXRTZXJ2ZXJTaWRlUHJvcHNcbiAgICAgICAgICAuLi4oIShfX05fU1NHIHx8IF9fTl9TU1ApID8geyB1cmw6IGNyZWF0ZVVybChyb3V0ZXIpIH0gOiB7fSlcbiAgICAgICAgfVxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cblxubGV0IHdhcm5Db250YWluZXI6ICgpID0+IHZvaWRcbmxldCB3YXJuVXJsOiAoKSA9PiB2b2lkXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHdhcm5Db250YWluZXIgPSBleGVjT25jZSgoKSA9PiB7XG4gICAgY29uc29sZS53YXJuKFxuICAgICAgYFdhcm5pbmc6IHRoZSBcXGBDb250YWluZXJcXGAgaW4gXFxgX2FwcFxcYCBoYXMgYmVlbiBkZXByZWNhdGVkIGFuZCBzaG91bGQgYmUgcmVtb3ZlZC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvYXBwLWNvbnRhaW5lci1kZXByZWNhdGVkYFxuICAgIClcbiAgfSlcblxuICB3YXJuVXJsID0gZXhlY09uY2UoKCkgPT4ge1xuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICBgV2FybmluZzogdGhlICd1cmwnIHByb3BlcnR5IGlzIGRlcHJlY2F0ZWQuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3VybC1kZXByZWNhdGVkYFxuICAgIClcbiAgfSlcbn1cblxuLy8gQGRlcHJlY2F0ZWQgbm9vcCBmb3Igbm93IHVudGlsIHJlbW92YWxcbmV4cG9ydCBmdW5jdGlvbiBDb250YWluZXIocDogYW55KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuQ29udGFpbmVyKClcbiAgcmV0dXJuIHAuY2hpbGRyZW5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVVybChyb3V0ZXI6IFJvdXRlcikge1xuICAvLyBUaGlzIGlzIHRvIG1ha2Ugc3VyZSB3ZSBkb24ndCByZWZlcmVuY2VzIHRoZSByb3V0ZXIgb2JqZWN0IGF0IGNhbGwgdGltZVxuICBjb25zdCB7IHBhdGhuYW1lLCBhc1BhdGgsIHF1ZXJ5IH0gPSByb3V0ZXJcbiAgcmV0dXJuIHtcbiAgICBnZXQgcXVlcnkoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcXVlcnlcbiAgICB9LFxuICAgIGdldCBwYXRobmFtZSgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBwYXRobmFtZVxuICAgIH0sXG4gICAgZ2V0IGFzUGF0aCgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBhc1BhdGhcbiAgICB9LFxuICAgIGJhY2s6ICgpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJvdXRlci5iYWNrKClcbiAgICB9LFxuICAgIHB1c2g6ICh1cmw6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiByb3V0ZXIucHVzaCh1cmwsIGFzKVxuICAgIH0sXG4gICAgcHVzaFRvOiAoaHJlZjogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgY29uc3QgcHVzaFJvdXRlID0gYXMgPyBocmVmIDogJydcbiAgICAgIGNvbnN0IHB1c2hVcmwgPSBhcyB8fCBocmVmXG5cbiAgICAgIHJldHVybiByb3V0ZXIucHVzaChwdXNoUm91dGUsIHB1c2hVcmwpXG4gICAgfSxcbiAgICByZXBsYWNlOiAodXJsOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcm91dGVyLnJlcGxhY2UodXJsLCBhcylcbiAgICB9LFxuICAgIHJlcGxhY2VUbzogKGhyZWY6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIGNvbnN0IHJlcGxhY2VSb3V0ZSA9IGFzID8gaHJlZiA6ICcnXG4gICAgICBjb25zdCByZXBsYWNlVXJsID0gYXMgfHwgaHJlZlxuXG4gICAgICByZXR1cm4gcm91dGVyLnJlcGxhY2UocmVwbGFjZVJvdXRlLCByZXBsYWNlVXJsKVxuICAgIH0sXG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFwcCBmcm9tIFwibmV4dC9hcHBcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgQU9TIGZyb20gXCJhb3NcIjtcclxuXHJcbi8vUkVEVVhcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgY3JlYXRlRmlyZXN0b3JlSW5zdGFuY2UgfSBmcm9tIFwicmVkdXgtZmlyZXN0b3JlXCI7XHJcbmltcG9ydCB7IFJlYWN0UmVkdXhGaXJlYmFzZVByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJlZHV4LWZpcmViYXNlXCI7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcbmltcG9ydCB7IHdyYXBwZXIsIG5ld1N0b3JlIH0gZnJvbSBcIi4uL3JlZHV4L3N0b3JlXCI7XHJcbmltcG9ydCB7IFByb3ZpZGVBdXRoIH0gZnJvbSBcIi4uL2hvb2tzL3VzZXJIb29rc1wiO1xyXG5cclxuaW1wb3J0IFwiLi4vc3R5bGUvY3VzdG9tLWFudGQubGVzc1wiO1xyXG5pbXBvcnQgXCJhb3MvZGlzdC9hb3MuY3NzXCI7XHJcbmltcG9ydCBcIi4uL3N0eWxlL21haW4uc2Nzc1wiO1xyXG5cclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9jb21tb24vTGF5b3V0XCI7XHJcbmltcG9ydCB7IFByb3ZpZGVOb3RpZmljYXRpb24gfSBmcm9tIFwiLi4vaG9va3Mvbm90aWZpY2F0aW9uc0hvb2tzXCI7XHJcblxyXG5jb25zdCBNeUFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcclxuICBjb25zdCBycmZDb25maWcgPSB7IHVzZXJQcm9maWxlOiBcInVzZXJzXCIsIHVzZUZpcmVzdG9yZUZvclByb2ZpbGU6IHRydWUgfTtcclxuXHJcbiAgY29uc3Qgc3RvcmUgPSBuZXdTdG9yZSgpO1xyXG4gIGNvbnN0IHJyZlByb3BzID0ge1xyXG4gICAgZmlyZWJhc2UsXHJcbiAgICBjb25maWc6IHJyZkNvbmZpZyxcclxuICAgIGRpc3BhdGNoOiBzdG9yZS5kaXNwYXRjaCxcclxuICAgIGNyZWF0ZUZpcmVzdG9yZUluc3RhbmNlLFxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBBT1MuaW5pdCh7XHJcbiAgICAgIGR1cmF0aW9uOiA2MDAsXHJcbiAgICAgIG9uY2U6IHRydWUsXHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8c2NyaXB0XHJcbiAgICAgICAgICB0eXBlPVwibW9kdWxlXCJcclxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vdW5wa2cuY29tL2lvbmljb25zQDUuNC4wL2Rpc3QvaW9uaWNvbnMvaW9uaWNvbnMuZXNtLmpzXCJcclxuICAgICAgICA+PC9zY3JpcHQ+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2ljb24/ZmFtaWx5PU1hdGVyaWFsK0ljb25zXCJcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPG1ldGEgY2hhcnNldD1cInV0Zi04XCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgICA8UmVhY3RSZWR1eEZpcmViYXNlUHJvdmlkZXIgey4uLnJyZlByb3BzfT5cclxuICAgICAgICAgIDxQcm92aWRlQXV0aD5cclxuICAgICAgICAgICAgPFByb3ZpZGVOb3RpZmljYXRpb24+XHJcbiAgICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICAgICAgPC9Qcm92aWRlTm90aWZpY2F0aW9uPlxyXG4gICAgICAgICAgPC9Qcm92aWRlQXV0aD5cclxuICAgICAgICA8L1JlYWN0UmVkdXhGaXJlYmFzZVByb3ZpZGVyPlxyXG4gICAgICA8L1Byb3ZpZGVyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbk15QXBwLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChhcHBDb250ZXh0KSA9PiB7XHJcbiAgY29uc3QgYXBwUHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGFwcENvbnRleHQpO1xyXG4gIHJldHVybiB7IC4uLmFwcFByb3BzIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eChNeUFwcCk7XHJcbiIsImltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcbmltcG9ydCBcImZpcmViYXNlL2F1dGhcIjtcclxuaW1wb3J0IFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XHJcbmltcG9ydCBcImZpcmViYXNlL3N0b3JhZ2VcIjtcclxuXHJcbmNvbnN0IHByb2RDb25maWcgPSB7XHJcbiAgYXBpS2V5OiBwcm9jZXNzLmVudi5GSVJFQkFTRV9BUElfS0VZLFxyXG4gIGF1dGhEb21haW46IHByb2Nlc3MuZW52LkZJUkVCQVNFX0FVVEhfRE9NQUlOLFxyXG4gIGRhdGFiYXNlVVJMOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9EQVRBQkFTRV9VUkwsXHJcbiAgcHJvamVjdElkOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9QUk9KRUNUX0lELFxyXG4gIHN0b3JhZ2VCdWNrZXQ6IHByb2Nlc3MuZW52LkZJUkVCQVNFX1NUT1JBR0VfQlVDS0VULFxyXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9NRVNTQUdJTkdfU0VOREVSX0lELFxyXG4gIGFwcElkOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9BUFBfSUQsXHJcbn07XHJcblxyXG5jb25zdCBkZXZDb25maWcgPSB7XHJcbiAgYXBpS2V5OiBwcm9jZXNzLmVudi5GSVJFQkFTRV9BUElfS0VZLFxyXG4gIGF1dGhEb21haW46IHByb2Nlc3MuZW52LkZJUkVCQVNFX0FVVEhfRE9NQUlOLFxyXG4gIGRhdGFiYXNlVVJMOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9EQVRBQkFTRV9VUkwsXHJcbiAgcHJvamVjdElkOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9QUk9KRUNUX0lELFxyXG4gIHN0b3JhZ2VCdWNrZXQ6IHByb2Nlc3MuZW52LkZJUkVCQVNFX1NUT1JBR0VfQlVDS0VULFxyXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9NRVNTQUdJTkdfU0VOREVSX0lELFxyXG4gIGFwcElkOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9BUFBfSUQsXHJcbn07XHJcblxyXG5jb25zdCBjb25maWcgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBwcm9kQ29uZmlnIDogZGV2Q29uZmlnO1xyXG5cclxuaWYgKCFmaXJlYmFzZS5hcHBzLmxlbmd0aCkge1xyXG4gIGZpcmViYXNlLmluaXRpYWxpemVBcHAoY29uZmlnKTtcclxufVxyXG5cclxuY29uc3QgZGIgPSBmaXJlYmFzZS5maXJlc3RvcmUoKTtcclxuY29uc3QgYXV0aCA9IGZpcmViYXNlLmF1dGgoKTtcclxuY29uc3Qgc3RvcmFnZSA9IGZpcmViYXNlLnN0b3JhZ2UoKTtcclxuY29uc3QgcHJvdmlkZXIgPSBuZXcgZmlyZWJhc2UuYXV0aC5Hb29nbGVBdXRoUHJvdmlkZXIoKTtcclxuXHJcbmV4cG9ydCB7IGRiLCBhdXRoLCBzdG9yYWdlLCBwcm92aWRlciB9O1xyXG5leHBvcnQgZGVmYXVsdCBjb25maWc7XHJcbiIsImltcG9ydCB7XHJcbiAgR0VUX1BST0ZJTEUsXHJcbiAgR0VUX0ZBVk9SSVRFX0FVVEhPUlMsXHJcbiAgR0VUX0ZPTExPV0VSUyxcclxuICB0eXBlcyxcclxufSBmcm9tIFwiLi4vLi4vdXRpbHMvY29uc3RhbnRzXCI7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgcHJvZmlsZToge30sXHJcbiAgZmF2QXV0aG9yczoge1xyXG4gICAgaXNMb2FkaW5nOiB0cnVlLFxyXG4gICAgYXV0aG9yczogW10sXHJcbiAgfSxcclxuICBmb2xsb3dlcnM6IHtcclxuICAgIGlzTG9hZGluZzogdHJ1ZSxcclxuICAgIGF1dGhvcnM6IFtdLFxyXG4gIH0sXHJcbiAgaXNGb2xsb3dpbmc6IGZhbHNlLFxyXG4gIG5vdGlmaWNhdGlvbnM6IFtdLFxyXG4gIGxvYWRpbmc6IHRydWUsXHJcbiAgdXNlcnNGcm9tU2VhcmNoOiBbXSxcclxuICBwb3B1bGFyVXNlcnM6IFtdLFxyXG59O1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBHRVRfUFJPRklMRTpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBwcm9maWxlOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgfTtcclxuICAgIGNhc2UgR0VUX0ZBVk9SSVRFX0FVVEhPUlM6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgZmF2QXV0aG9yczoge1xyXG4gICAgICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIGF1dGhvcnM6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIEdFVF9GT0xMT1dFUlM6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgZm9sbG93ZXJzOiB7XHJcbiAgICAgICAgICBpc0xvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgYXV0aG9yczogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgdHlwZXMuSVNfRk9MTE9XSU5HOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlzRm9sbG93aW5nOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgfTtcclxuICAgIGNhc2UgdHlwZXMuR0VUX05PVElGSUNBVElPTlM6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgbm90aWZpY2F0aW9uczogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIHR5cGVzLkdFVF9VU0VSU19GUk9NX1NFQVJDSDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBsb2FkaW5nOiBhY3Rpb24ubG9hZGluZyxcclxuICAgICAgICB1c2Vyc0Zyb21TZWFyY2g6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgICA/IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgICA6IHN0YXRlLnVzZXJzRnJvbVNlYXJjaCxcclxuICAgICAgfTtcclxuICAgIGNhc2UgdHlwZXMuR0VUX1BPUFVMQVJfVVNFUlM6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgcG9wdWxhclVzZXJzOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgfTtcclxuICB9XHJcbiAgcmV0dXJuIHN0YXRlO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuIiwiaW1wb3J0IHsgdHlwZXMgfSBmcm9tIFwiLi4vLi4vdXRpbHMvY29uc3RhbnRzXCI7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgdXNlckNoYXJhY3RlcnM6IFtdLFxyXG4gIGZhdkNoYXJhY3RlcnM6IFtdLFxyXG4gIGxvYWRpbmc6IHRydWUsXHJcbiAgbG9hZGluZ0NoYXJhY3RlcjogZmFsc2UsXHJcbiAgY2hhcmFjdGVySWQ6IFwiXCIsXHJcbiAgbWVzc2FnZTogXCJcIixcclxuICBjaGFyYWN0ZXI6IHtcclxuICAgIGlkOiBcIlwiLFxyXG4gICAgYXV0aG9ySWQ6IFwiXCIsXHJcbiAgICBmaXJzdG5hbWU6IFwiXCIsXHJcbiAgICBsYXN0bmFtZTogXCJcIixcclxuICAgIGFnZTogMCxcclxuICAgIHB1YmxpYzogdHJ1ZSxcclxuICAgIGV0aG5pY2l0eTogXCJcIixcclxuICAgIGdyb3VwOiBcIlwiLFxyXG4gICAgcmVzaWRlbmNlOiBcIlwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiXCIsXHJcbiAgICBuaWNrbmFtZTogXCJcIixcclxuICAgIG9jY3VwYXRpb246IFwiXCIsXHJcbiAgICByZWxhdGl2ZXM6IFtdLFxyXG4gIH0sXHJcbiAgY2hhcmFFeGlzdHM6IGZhbHNlLFxyXG4gIHNlY29uZGFyeUNoYXJhY3RlcnM6IFtdLFxyXG4gIG1haW5BcnI6IFtdLFxyXG4gIGRlbGV0ZWQ6IGZhbHNlLFxyXG4gIGlzRmF2b3JpdGU6IGZhbHNlLFxyXG4gIGxvYWRpbmdGYXY6IHRydWUsXHJcbiAgY2hhcmFjdGVyc0Zyb21TZWFyY2g6IFtdLFxyXG4gIHBvcHVsYXJDaGFyYWN0ZXJzOiBbXSxcclxufTtcclxuXHJcbmNvbnN0IGNoYXJhY3RlcnNSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIHR5cGVzLkFERF9DSEFSQUNURVI6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbWVzc2FnZTogYWN0aW9uLnBheWxvYWQubWVzc2FnZSxcclxuICAgICAgICBjaGFyYWN0ZXJJZDogYWN0aW9uLnBheWxvYWQuY2hhcmFjdGVySWQsXHJcbiAgICAgICAgbG9hZGluZ0NoYXJhY3RlcjogYWN0aW9uLnBheWxvYWQubG9hZGluZyxcclxuICAgICAgfTtcclxuICAgIGNhc2UgdHlwZXMuRURJVF9DSEFSQUNURVI6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbWVzc2FnZTogYWN0aW9uLnBheWxvYWQubWVzc2FnZSxcclxuICAgICAgICBsb2FkaW5nQ2hhcmFjdGVyOiBhY3Rpb24ucGF5bG9hZC5sb2FkaW5nLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSB0eXBlcy5ERUxFVEVfQ0hBUkFDVEVSOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGxvYWRpbmc6IGFjdGlvbi5wYXlsb2FkLmxvYWRpbmcsXHJcbiAgICAgICAgbWVzc2FnZTogYWN0aW9uLnBheWxvYWQubWVzc2FnZVxyXG4gICAgICAgICAgPyBhY3Rpb24ucGF5bG9hZC5tZXNzYWdlXHJcbiAgICAgICAgICA6IHN0YXRlLm1lc3NhZ2UsXHJcbiAgICAgICAgZGVsZXRlZDogYWN0aW9uLnBheWxvYWQuZGVsZXRlZFxyXG4gICAgICAgICAgPyBhY3Rpb24ucGF5bG9hZC5kZWxldGVkXHJcbiAgICAgICAgICA6IHN0YXRlLmRlbGV0ZWQsXHJcbiAgICAgICAgY2hhcmFFeGlzdHM6IGFjdGlvbi5wYXlsb2FkLmNoYXJhRXhpc3RzXHJcbiAgICAgICAgICA/IGFjdGlvbi5wYXlsb2FkLmNoYXJhRXhpc3RzXHJcbiAgICAgICAgICA6IHN0YXRlLmNoYXJhRXhpc3RzLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSB0eXBlcy5HRVRfQ0hBUkFDVEVSOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGNoYXJhRXhpc3RzOiBhY3Rpb24ucGF5bG9hZC5jaGFyYUV4aXN0cyxcclxuICAgICAgICBjaGFyYWN0ZXI6IGFjdGlvbi5wYXlsb2FkLmNoYXJhRXhpc3RzXHJcbiAgICAgICAgICA/IGFjdGlvbi5wYXlsb2FkLmNoYXJhY3RlclxyXG4gICAgICAgICAgOiBzdGF0ZS5jaGFyYWN0ZXIsXHJcbiAgICAgICAgbG9hZGluZzogYWN0aW9uLnBheWxvYWQubG9hZGluZyxcclxuICAgICAgfTtcclxuICAgIGNhc2UgdHlwZXMuR0VUX1VTRVJfQ0hBUkFDVEVSUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICB1c2VyQ2hhcmFjdGVyczogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIHR5cGVzLkdFVF9GQVZPUklURV9DSEFSQUNURVJTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGZhdkNoYXJhY3RlcnM6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSB0eXBlcy5HRVRfU1RPUllfQ0hBUkFDVEVSUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBzZWNvbmRhcnlDaGFyYWN0ZXJzOiBhY3Rpb24ucGF5bG9hZC5zZWNvbmRhcnlDaGFyYWN0ZXJzLFxyXG4gICAgICAgIG1haW5BcnI6IGFjdGlvbi5wYXlsb2FkLm1haW5BcnIsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIHR5cGVzLklTX0NIQVJBQ1RFUl9GQVZPUklURTpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBpc0Zhdm9yaXRlOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgICBsb2FkaW5nRmF2OiBhY3Rpb24ubG9hZGluZ0ZhdixcclxuICAgICAgfTtcclxuICAgIGNhc2UgdHlwZXMuR0VUX0NIQVJBQ1RFUlNfRlJPTV9TRUFSQ0g6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbG9hZGluZzogYWN0aW9uLmxvYWRpbmcsXHJcbiAgICAgICAgY2hhcmFjdGVyc0Zyb21TZWFyY2g6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgICA/IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgICA6IHN0YXRlLmNoYXJhY3RlcnNGcm9tU2VhcmNoLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSB0eXBlcy5HRVRfUE9QVUxBUl9DSEFSQUNURVJTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHBvcHVsYXJDaGFyYWN0ZXJzOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgfTtcclxuXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2hhcmFjdGVyc1JlZHVjZXI7XHJcbiIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJyZWR1eFwiO1xyXG5cclxuaW1wb3J0IHsgZmlyZXN0b3JlUmVkdWNlciB9IGZyb20gXCJyZWR1eC1maXJlc3RvcmVcIjtcclxuaW1wb3J0IHsgZmlyZWJhc2VSZWR1Y2VyIH0gZnJvbSBcInJlYWN0LXJlZHV4LWZpcmViYXNlXCI7XHJcblxyXG5pbXBvcnQgYXV0aFJlZHVjZXIgZnJvbSBcIi4vYXV0aFJlZHVjZXJcIjtcclxuaW1wb3J0IHN0b3JpZXNSZWR1Y2VyIGZyb20gXCIuL3N0b3JpZXNSZWR1Y2VyXCI7XHJcbmltcG9ydCBjaGFyYWN0ZXJzUmVkdWNlciBmcm9tIFwiLi9jaGFyYWN0ZXJzUmVkdWNlclwiO1xyXG5cclxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gIGF1dGg6IGF1dGhSZWR1Y2VyLFxyXG4gIGZpcmViYXNlOiBmaXJlYmFzZVJlZHVjZXIsXHJcbiAgZmlyZXN0b3JlOiBmaXJlc3RvcmVSZWR1Y2VyLFxyXG4gIHN0b3JpZXM6IHN0b3JpZXNSZWR1Y2VyLFxyXG4gIGNoYXJhY3RlcnM6IGNoYXJhY3RlcnNSZWR1Y2VyLFxyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XHJcbiIsImltcG9ydCB7IHR5cGVzIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2NvbnN0YW50c1wiO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIHVzZXJTdG9yaWVzOiBbXSxcclxuICBob21lU3RvcmllczogW10sXHJcbiAgZmF2U3RvcmllczogW10sXHJcbiAgc3RvcnlMb2NhdGlvbnM6IFtdLFxyXG4gIHN0b3J5OiB7XHJcbiAgICBpZDogXCJcIixcclxuICAgIGJhbm5lcjogXCJcIixcclxuICAgIHRpdGxlOiBcIlwiLFxyXG4gICAgc3VtbWFyeTogXCJcIixcclxuICAgIGF1dGhvck5hbWU6IFwiXCIsXHJcbiAgICBhdXRob3JJZDogXCJcIixcclxuICAgIHRhZ3M6IFtdLFxyXG4gICAgbWFpbkNoYXJhY3RlcnM6IFtdLFxyXG4gIH0sXHJcbiAgbG9hZGluZzogdHJ1ZSxcclxuICBjaGFwdGVyczoge1xyXG4gICAgbG9hZGluZzogdHJ1ZSxcclxuICAgIGl0ZW1zOiBbXSxcclxuICB9LFxyXG4gIG1lc3NhZ2U6IFwiXCIsXHJcbiAgc3RvcnlJZDogXCJcIixcclxuICBsb2FkaW5nU3Rvcnk6IGZhbHNlLFxyXG4gIGxvYWRpbmdDaGFwdGVyOiBmYWxzZSxcclxuICBzdG9yeUV4aXN0czogdHJ1ZSxcclxuICB1c2VyTG9jYXRpb25zOiBbXSxcclxuICBzdG9yeUxvY2F0aW9uczogW10sXHJcbiAgY2hhcElkOiBcIlwiLFxyXG4gIGxvY0lkOiBcIlwiLFxyXG4gIGNoYXB0ZXI6IHtcclxuICAgIGlkOiBcIlwiLFxyXG4gICAgdGl0bGU6IFwiXCIsXHJcbiAgICBudW1iZXI6IDAsXHJcbiAgICBib2R5OiBcIlwiLFxyXG4gICAgY2hhcmFjdGVyczogW10sXHJcbiAgICBsb2NhdGlvbnM6IFtdLFxyXG4gICAgc3RvcnlJZDogXCJcIixcclxuICAgIGF1dGhvcklkOiBcIlwiLFxyXG4gICAgYXV0aG9yTmFtZTogXCJcIixcclxuICAgIHN0YXR1czogdHJ1ZSxcclxuICB9LFxyXG4gIGxvY2F0aW9uOiB7XHJcbiAgICBpZDogXCJcIixcclxuICAgIG5hbWU6IFwiXCIsXHJcbiAgICBhdXRob3JJZDogXCJcIixcclxuICAgIHN0b3J5SWQ6IFwiXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJcIixcclxuICAgIGltYWdlOiBcIlwiLFxyXG4gICAgaW1hZ2VDb3B5cmlnaHQ6IFwiXCIsXHJcbiAgfSxcclxuICBjb21tZW50czogW10sXHJcbiAgbG9hZGluZ0NvbW1lbnRzOiB0cnVlLFxyXG4gIGNoYXB0ZXJFeGlzdHM6IHRydWUsXHJcbiAgaXNGYXZvcml0ZTogZmFsc2UsXHJcbiAgbG9hZGluZ0ZhdjogdHJ1ZSxcclxuICBsb2FkaW5nTG9jOiBmYWxzZSxcclxuICBsb2NhdGlvbkV4aXN0czogdHJ1ZSxcclxuICBkZWxldGVkOiBmYWxzZSxcclxuICB1c2VyQ29tbWVudDoge1xyXG4gICAgaWQ6IFwiXCIsXHJcbiAgICBjb250ZW50OiBcIlwiLFxyXG4gIH0sXHJcbiAgcmF0ZWQ6IGZhbHNlLFxyXG4gIHN0b3JpZXNGcm9tU2VhcmNoOiBbXSxcclxuICBmZWF0dXJlZFN0b3JpZXM6IFtdLFxyXG4gIHVzZXJOb3RlOiAwLFxyXG59O1xyXG5cclxuY29uc3Qgc3Rvcmllc1JlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgdHlwZXMuRElTUEFUQ0hfRVJST1I6IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBzdG9yeUV4aXN0czogYWN0aW9uLnN0b3J5RXhpc3RzLFxyXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgY2FzZSB0eXBlcy5HRVRfU1RPUlk6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgc3Rvcnk6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICAgIHN0b3J5RXhpc3RzOiBhY3Rpb24uc3RvcnlFeGlzdHMsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIHR5cGVzLkdFVF9DSEFQVEVSOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIGNoYXB0ZXI6IGFjdGlvbi5wYXlsb2FkLmNoYXB0ZXJcclxuICAgICAgICAgID8gYWN0aW9uLnBheWxvYWQuY2hhcHRlclxyXG4gICAgICAgICAgOiBzdGF0ZS5jaGFwdGVyLFxyXG4gICAgICAgIGNoYXB0ZXJFeGlzdHM6IGFjdGlvbi5wYXlsb2FkLmNoYXB0ZXJFeGlzdHMsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIHR5cGVzLkFERF9TVE9SWTpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBtZXNzYWdlOiBhY3Rpb24ucGF5bG9hZC5tZXNzYWdlLFxyXG4gICAgICAgIHN0b3J5SWQ6IGFjdGlvbi5wYXlsb2FkLnN0b3J5SWQsXHJcbiAgICAgICAgbG9hZGluZ1N0b3J5OiBhY3Rpb24ucGF5bG9hZC5sb2FkaW5nLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSB0eXBlcy5BRERfQ0hBUFRFUjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBtZXNzYWdlOiBhY3Rpb24ucGF5bG9hZC5tZXNzYWdlLFxyXG4gICAgICAgIGNoYXBJZDogYWN0aW9uLnBheWxvYWQuY2hhcElkLFxyXG4gICAgICAgIGxvYWRpbmdDaGFwdGVyOiBhY3Rpb24ucGF5bG9hZC5sb2FkaW5nLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSB0eXBlcy5FRElUX0NIQVBURVI6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbWVzc2FnZTogYWN0aW9uLnBheWxvYWQubWVzc2FnZSxcclxuICAgICAgICBsb2FkaW5nQ2hhcHRlcjogYWN0aW9uLnBheWxvYWQubG9hZGluZyxcclxuICAgICAgfTtcclxuICAgIGNhc2UgdHlwZXMuREVMRVRFX0NIQVBURVI6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbWVzc2FnZTogYWN0aW9uLnBheWxvYWQubWVzc2FnZSxcclxuICAgICAgICBsb2FkaW5nQ2hhcHRlcjogYWN0aW9uLnBheWxvYWQubG9hZGluZ0NoYXB0ZXIsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIHR5cGVzLkVESVRfU1RPUlk6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbWVzc2FnZTogYWN0aW9uLnBheWxvYWQubWVzc2FnZSxcclxuICAgICAgICBsb2FkaW5nU3Rvcnk6IGFjdGlvbi5wYXlsb2FkLmxvYWRpbmdTdG9yeSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgdHlwZXMuREVMRVRFX1NUT1JZOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIG1lc3NhZ2U6IGFjdGlvbi5wYXlsb2FkLm1lc3NhZ2VcclxuICAgICAgICAgID8gYWN0aW9uLnBheWxvYWQubWVzc2FnZVxyXG4gICAgICAgICAgOiBzdGF0ZS5tZXNzYWdlLFxyXG4gICAgICAgIGRlbGV0ZWQ6IGFjdGlvbi5wYXlsb2FkLmRlbGV0ZWRcclxuICAgICAgICAgID8gYWN0aW9uLnBheWxvYWQuZGVsZXRlZFxyXG4gICAgICAgICAgOiBzdGF0ZS5kZWxldGVkLFxyXG4gICAgICAgIGxvYWRpbmc6IGFjdGlvbi5wYXlsb2FkLmxvYWRpbmcsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIHR5cGVzLkFERF9MT0NBVElPTjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBsb2NJZDogYWN0aW9uLnBheWxvYWQubG9jSWQsXHJcbiAgICAgICAgbWVzc2FnZTogYWN0aW9uLnBheWxvYWQubWVzc2FnZSxcclxuICAgICAgICBsb2FkaW5nTG9jOiBhY3Rpb24ucGF5bG9hZC5sb2FkaW5nTG9jLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSB0eXBlcy5HRVRfTE9DQVRJT046XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgbG9jYXRpb246IGFjdGlvbi5wYXlsb2FkID8gYWN0aW9uLnBheWxvYWQgOiBzdGF0ZS5sb2NhdGlvbixcclxuICAgICAgICBsb2NhdGlvbkV4aXN0czogYWN0aW9uLmxvY2F0aW9uRXhpc3RzLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSB0eXBlcy5ERUxFVEVfTE9DQVRJT046XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgZGVsZXRlZDogYWN0aW9uLnBheWxvYWQuZGVsZXRlZFxyXG4gICAgICAgICAgPyBhY3Rpb24ucGF5bG9hZC5kZWxldGVkXHJcbiAgICAgICAgICA6IHN0YXRlLmRlbGV0ZWQsXHJcbiAgICAgICAgbWVzc2FnZTogYWN0aW9uLnBheWxvYWQubWVzc2FnZVxyXG4gICAgICAgICAgPyBhY3Rpb24ucGF5bG9hZC5tZXNzYWdlXHJcbiAgICAgICAgICA6IHN0YXRlLm1lc3NhZ2UsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIHR5cGVzLkdFVF9VU0VSX1NUT1JJRVM6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgdXNlclN0b3JpZXM6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSB0eXBlcy5HRVRfVVNFUl9MT0NBVElPTlM6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgdXNlckxvY2F0aW9uczogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIHR5cGVzLkdFVF9TVE9SWV9MT0NBVElPTlM6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgc3RvcnlMb2NhdGlvbnM6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSB0eXBlcy5HRVRfRkFWT1JJVEVfU1RPUklFUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBmYXZTdG9yaWVzOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgfTtcclxuICAgIGNhc2UgdHlwZXMuR0VUX0NIQVBURVJTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGNoYXB0ZXJzOiB7XHJcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIGl0ZW1zOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSB0eXBlcy5JU19TVE9SWV9GQVZPUklURTpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBpc0Zhdm9yaXRlOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgICBsb2FkaW5nRmF2OiBhY3Rpb24ubG9hZGluZ0ZhdixcclxuICAgICAgfTtcclxuICAgIGNhc2UgdHlwZXMuR0VUX1NUT1JZX0xPQ0FUSU9OUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBzdG9yeUxvY2F0aW9uczogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIHR5cGVzLkdFVF9DT01NRU5UUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjb21tZW50czogYWN0aW9uLnBheWxvYWQuY29tbWVudHMsXHJcbiAgICAgICAgdXNlckNvbW1lbnQ6IGFjdGlvbi5wYXlsb2FkLnVzZXJDb21tZW50LFxyXG4gICAgICAgIGxvYWRpbmdDb21tZW50czogYWN0aW9uLnBheWxvYWQubG9hZGluZ0NvbW1lbnRzLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSB0eXBlcy5TVUJNSVRfQ09NTUVOVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBtZXNzYWdlOiBhY3Rpb24ubWVzc2FnZSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgdHlwZXMuUkFURV9DT01NRU5UOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHJhdGVkOiBhY3Rpb24ucmF0ZWQsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIHR5cGVzLkdFVF9TVE9SSUVTX0ZST01fU0VBUkNIOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGxvYWRpbmc6IGFjdGlvbi5sb2FkaW5nLFxyXG4gICAgICAgIHN0b3JpZXNGcm9tU2VhcmNoOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgICAgPyBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgICAgOiBzdGF0ZS5zdG9yaWVzRnJvbVNlYXJjaCxcclxuICAgICAgfTtcclxuICAgIGNhc2UgdHlwZXMuR0VUX0hPTUVfU1RPUklFUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuXHJcbiAgICAgICAgaG9tZVN0b3JpZXM6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSB0eXBlcy5HRVRfRkVBVFVSRURfU1RPUklFUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBsb2FkaW5nOiBhY3Rpb24ubG9hZGluZyxcclxuICAgICAgICBmZWF0dXJlZFN0b3JpZXM6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSB0eXBlcy5HRVRfVVNFUl9SQVRFOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHVzZXJOb3RlOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgfTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdG9yaWVzUmVkdWNlcjtcclxuIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVXcmFwcGVyIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xyXG5pbXBvcnQgeyByZWR1eEZpcmVzdG9yZSwgZ2V0RmlyZXN0b3JlIH0gZnJvbSBcInJlZHV4LWZpcmVzdG9yZVwiO1xyXG5pbXBvcnQgeyBnZXRGaXJlYmFzZSB9IGZyb20gXCJyZWFjdC1yZWR1eC1maXJlYmFzZVwiO1xyXG5pbXBvcnQgdGh1bmsgZnJvbSBcInJlZHV4LXRodW5rXCI7XHJcbmltcG9ydCByb290UmVkdWNlciBmcm9tIFwiLi9yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgZmJDb25maWcgZnJvbSBcIi4vZmJDb25maWdcIjtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHt9O1xyXG5cclxuZXhwb3J0IGNvbnN0IG5ld1N0b3JlID0gKCkgPT4ge1xyXG4gIHJldHVybiBjcmVhdGVTdG9yZShcclxuICAgIHJvb3RSZWR1Y2VyLFxyXG4gICAgaW5pdGlhbFN0YXRlLFxyXG4gICAgY29tcG9zZShcclxuICAgICAgYXBwbHlNaWRkbGV3YXJlKFxyXG4gICAgICAgIHRodW5rLndpdGhFeHRyYUFyZ3VtZW50KHtcclxuICAgICAgICAgIGdldEZpcmViYXNlLFxyXG4gICAgICAgICAgZ2V0RmlyZXN0b3JlLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICksXHJcbiAgICAgIHJlZHV4RmlyZXN0b3JlKGZiQ29uZmlnKVxyXG4gICAgKVxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIobmV3U3RvcmUsIHsgZGVidWc6IHRydWUgfSk7XHJcbiIsImV4cG9ydCBjb25zdCBDQVRFR09SSUVTID0gW1xyXG4gIHsgbmFtZTogXCJEcmFtYVwiLCB2YWx1ZTogXCJkcmFtYVwiLCBpZDogXCJNS09SYVNZNG0xUm5LM2tTU0xEVFwiIH0sXHJcbiAgeyBuYW1lOiBcIkNvbWVkeVwiLCB2YWx1ZTogXCJjb21lZHlcIiwgaWQ6IFwiYkRYWXpxblV0cExaRE52OTlYVHFcIiB9LFxyXG4gIHsgbmFtZTogXCJIb3Jyb3JcIiwgdmFsdWU6IFwiaG9ycm9yXCIsIGlkOiBcIndIRXVVbVhqSllaVXQ0dW9ldTJuXCIgfSxcclxuICB7IG5hbWU6IFwiUm9tYW5jZVwiLCB2YWx1ZTogXCJyb21hbmNlXCIsIGlkOiBcIjZHQ1JTTUpIY21GbFR2ZmJ0TXRKXCIgfSxcclxuICB7IG5hbWU6IFwiU2NpLWZpXCIsIHZhbHVlOiBcInNjaS1maVwiLCBpZDogXCJyQlU4TmQzNUFNcG5kMW9rOTRIQ1wiIH0sXHJcbiAgeyBuYW1lOiBcIkZhbnRhc3lcIiwgdmFsdWU6IFwiZmFudGFzeVwiLCBpZDogXCJlQUxGYzd0ZWF2empVTWpWZHF0OFwiIH0sXHJcbiAgeyBuYW1lOiBcIkh1bW9yXCIsIHZhbHVlOiBcImh1bW9yXCIsIGlkOiBcIkI1RWZveDJqRWpOcHl3eHVvM0tSXCIgfSxcclxuICB7IG5hbWU6IFwiQWN0aW9uXCIsIHZhbHVlOiBcImFjdGlvblwiLCBpZDogXCJFSGdDazg4V2wxWTRhM0xXMEpjcFwiIH0sXHJcbiAgeyBuYW1lOiBcIlRocmlsbGVyXCIsIHZhbHVlOiBcInRocmlsbGVyXCIsIGlkOiBcIkYwU0ppOE5xYnRRbFQ5SVBpcXhmXCIgfSxcclxuICB7IG5hbWU6IFwiU3VwZXJuYXR1cmFsXCIsIHZhbHVlOiBcInN1cGVybmF0dXJhbFwiLCBpZDogXCJJY2JMTlNPRmdWQmJjVTRlODg0blwiIH0sXHJcbiAgeyBuYW1lOiBcIkFkdmVudHVyZVwiLCB2YWx1ZTogXCJhZHZlbnR1cmVcIiwgaWQ6IFwiTFBnM3VOdWpMazZqYUJGZmpNUVlcIiB9LFxyXG4gIHsgbmFtZTogXCJNeXN0ZXJ5XCIsIHZhbHVlOiBcIm15c3RlcnlcIiwgaWQ6IFwiWnJ4OFYyNGlhYUMwalRuZHFWN0dcIiB9LFxyXG4gIHsgbmFtZTogXCJXZXN0ZXJuXCIsIHZhbHVlOiBcIndlc3Rlcm5cIiwgaWQ6IFwiYklGNEd3cEtTSkZwc3Q4YmlySHJcIiB9LFxyXG4gIHsgbmFtZTogXCJIaXN0b3J5XCIsIHZhbHVlOiBcImhpc3RvcnlcIiwgaWQ6IFwiZGE0ZGJ2d3ZERGFKZEdQT1c3UUZcIiB9LFxyXG4gIHsgbmFtZTogXCJDcmltZVwiLCB2YWx1ZTogXCJjcmltZVwiLCBpZDogXCJvSUJHQlV5REdIMGRqY1FTU253c1wiIH0sXHJcbiAgeyBuYW1lOiBcIkZhbmZpY3Rpb25cIiwgdmFsdWU6IFwiZmFuZmljdGlvblwiLCBpZDogXCJ6QXIxZUhuaUZnV1cweEFxajF0aVwiIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgQ09QWVJJR0hUUyA9IFtcclxuICB7IG5hbWU6IFwiUHVibGljIERvbWFpblwiLCB2YWx1ZTogXCJwdWJsaWMgZG9tYWluXCIgfSxcclxuICB7IG5hbWU6IFwiQWxsIFJpZ2h0cyBSZXNlcnZlZFwiLCB2YWx1ZTogXCJhbGwgcmlnaHRzIHJlc2VydmVkXCIgfSxcclxuICB7IG5hbWU6IFwiQ3JlYXRpdmUgQ29tbW9uc1wiLCB2YWx1ZTogXCJjcmVhdGl2ZSBjb21tb25zXCIgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBMQU5HVUFHRVMgPSBbXHJcbiAgeyBuYW1lOiBcIkFmYXJcIiwgdmFsdWU6IFwiYWFcIiB9LFxyXG4gIHsgbmFtZTogXCJBYmtoYXppYW5cIiwgdmFsdWU6IFwiYWJcIiB9LFxyXG4gIHsgbmFtZTogXCJBdmVzdGFuXCIsIHZhbHVlOiBcImFlXCIgfSxcclxuICB7IG5hbWU6IFwiQWZyaWthYW5zXCIsIHZhbHVlOiBcImFmXCIgfSxcclxuICB7IG5hbWU6IFwiQWthblwiLCB2YWx1ZTogXCJha1wiIH0sXHJcbiAgeyBuYW1lOiBcIkFtaGFyaWNcIiwgdmFsdWU6IFwiYW1cIiB9LFxyXG4gIHsgbmFtZTogXCJBcmFnb25lc2VcIiwgdmFsdWU6IFwiYW5cIiB9LFxyXG4gIHsgbmFtZTogXCJBcmFiaWNcIiwgdmFsdWU6IFwiYXJcIiB9LFxyXG4gIHsgbmFtZTogXCJBc3NhbWVzZVwiLCB2YWx1ZTogXCJhc1wiIH0sXHJcbiAgeyBuYW1lOiBcIkF2YXJpY1wiLCB2YWx1ZTogXCJhdlwiIH0sXHJcbiAgeyBuYW1lOiBcIkF5bWFyYVwiLCB2YWx1ZTogXCJheVwiIH0sXHJcbiAgeyBuYW1lOiBcIkF6ZXJiYWlqYW5pXCIsIHZhbHVlOiBcImF6XCIgfSxcclxuICB7IG5hbWU6IFwiQmFzaGtpclwiLCB2YWx1ZTogXCJiYVwiIH0sXHJcbiAgeyBuYW1lOiBcIkJlbGFydXNpYW5cIiwgdmFsdWU6IFwiYmVcIiB9LFxyXG4gIHsgbmFtZTogXCJCdWxnYXJpYW5cIiwgdmFsdWU6IFwiYmdcIiB9LFxyXG4gIHsgbmFtZTogXCJCaWhhcmlcIiwgdmFsdWU6IFwiYmhcIiB9LFxyXG4gIHsgbmFtZTogXCJCaXNsYW1hXCIsIHZhbHVlOiBcImJpXCIgfSxcclxuICB7IG5hbWU6IFwiQmFtYmFyYVwiLCB2YWx1ZTogXCJibVwiIH0sXHJcbiAgeyBuYW1lOiBcIkJlbmdhbGlcIiwgdmFsdWU6IFwiYm5cIiB9LFxyXG4gIHsgbmFtZTogXCJUaWJldGFuXCIsIHZhbHVlOiBcImJvXCIgfSxcclxuICB7IG5hbWU6IFwiQnJldG9uXCIsIHZhbHVlOiBcImJyXCIgfSxcclxuICB7IG5hbWU6IFwiQm9zbmlhblwiLCB2YWx1ZTogXCJic1wiIH0sXHJcbiAgeyBuYW1lOiBcIkNhdGFsYW5cIiwgdmFsdWU6IFwiY2FcIiB9LFxyXG4gIHsgbmFtZTogXCJDaGVjaGVuXCIsIHZhbHVlOiBcImNlXCIgfSxcclxuICB7IG5hbWU6IFwiQ2hhbW9ycm9cIiwgdmFsdWU6IFwiY2hcIiB9LFxyXG4gIHsgbmFtZTogXCJDb3JzaWNhblwiLCB2YWx1ZTogXCJjb1wiIH0sXHJcbiAgeyBuYW1lOiBcIkNyZWVcIiwgdmFsdWU6IFwiY3JcIiB9LFxyXG4gIHsgbmFtZTogXCJDemVjaFwiLCB2YWx1ZTogXCJjc1wiIH0sXHJcbiAgeyBuYW1lOiBcIk9sZCBDaHVyY2ggU2xhdm9uaWNcIiwgdmFsdWU6IFwiY3VcIiB9LFxyXG4gIHsgbmFtZTogXCJDaHV2YXNoXCIsIHZhbHVlOiBcImN2XCIgfSxcclxuICB7IG5hbWU6IFwiV2Vsc2hcIiwgdmFsdWU6IFwiY3lcIiB9LFxyXG4gIHsgbmFtZTogXCJEYW5pc2hcIiwgdmFsdWU6IFwiZGFcIiB9LFxyXG4gIHsgbmFtZTogXCJHZXJtYW5cIiwgdmFsdWU6IFwiZGVcIiB9LFxyXG4gIHsgbmFtZTogXCJEaXZlaGlcIiwgdmFsdWU6IFwiZHZcIiB9LFxyXG4gIHsgbmFtZTogXCJEem9uZ2toYVx0XCIsIHZhbHVlOiBcImR6XCIgfSxcclxuICB7IG5hbWU6IFwiRXdlXCIsIHZhbHVlOiBcImVlXCIgfSxcclxuICB7IG5hbWU6IFwiR3JlZWtcIiwgdmFsdWU6IFwiZWxcIiB9LFxyXG4gIHsgbmFtZTogXCJFbmdsaXNoXCIsIHZhbHVlOiBcImVuXCIgfSxcclxuICB7IG5hbWU6IFwiRXNwZXJhbnRvXCIsIHZhbHVlOiBcImVvXCIgfSxcclxuICB7IG5hbWU6IFwiU3BhbmlzaFwiLCB2YWx1ZTogXCJlc1wiIH0sXHJcbiAgeyBuYW1lOiBcIkVzdG9uaWFuXCIsIHZhbHVlOiBcImV0XCIgfSxcclxuICB7IG5hbWU6IFwiQmFzcXVlXCIsIHZhbHVlOiBcImV1XCIgfSxcclxuICB7IG5hbWU6IFwiUGVyc2lhblwiLCB2YWx1ZTogXCJmYVwiIH0sXHJcbiAgeyBuYW1lOiBcIkZ1bGFoXCIsIHZhbHVlOiBcImZmXCIgfSxcclxuICB7IG5hbWU6IFwiRmlubmlzaFwiLCB2YWx1ZTogXCJmaVwiIH0sXHJcbiAgeyBuYW1lOiBcIkZpamlhblwiLCB2YWx1ZTogXCJmalwiIH0sXHJcbiAgeyBuYW1lOiBcIkZhcm9lc2VcIiwgdmFsdWU6IFwiZm9cIiB9LFxyXG4gIHsgbmFtZTogXCJGcmVuY2hcIiwgdmFsdWU6IFwiZnJcIiB9LFxyXG4gIHsgbmFtZTogXCJXZXN0ZXJuIEZyaXNpYW5cIiwgdmFsdWU6IFwiZnlcIiB9LFxyXG4gIHsgbmFtZTogXCJJcmlzaFwiLCB2YWx1ZTogXCJnYVwiIH0sXHJcbiAgeyBuYW1lOiBcIlNjb3R0aXNoIEdhZWxpY1wiLCB2YWx1ZTogXCJnZFwiIH0sXHJcbiAgeyBuYW1lOiBcIkdhbGljaWFuXCIsIHZhbHVlOiBcImdsXCIgfSxcclxuICB7IG5hbWU6IFwiR3VhcmFuaVwiLCB2YWx1ZTogXCJnblwiIH0sXHJcbiAgeyBuYW1lOiBcIkd1amFyYXRpXCIsIHZhbHVlOiBcImd1XCIgfSxcclxuICB7IG5hbWU6IFwiTWFueFwiLCB2YWx1ZTogXCJndlwiIH0sXHJcbiAgeyBuYW1lOiBcIkhhdXNhXCIsIHZhbHVlOiBcImhhXCIgfSxcclxuICB7IG5hbWU6IFwiSGVicmV3XCIsIHZhbHVlOiBcImhlXCIgfSxcclxuICB7IG5hbWU6IFwiSGluZGlcIiwgdmFsdWU6IFwiaGlcIiB9LFxyXG4gIHsgbmFtZTogXCJIaXJpIE1vdHVcIiwgdmFsdWU6IFwiaG9cIiB9LFxyXG4gIHsgbmFtZTogXCJDcm9hdGlhblwiLCB2YWx1ZTogXCJoclwiIH0sXHJcbiAgeyBuYW1lOiBcIkhhaXRpYW5cIiwgdmFsdWU6IFwiaHRcIiB9LFxyXG4gIHsgbmFtZTogXCJIdW5nYXJpYW5cIiwgdmFsdWU6IFwiaHVcIiB9LFxyXG4gIHsgbmFtZTogXCJBcm1lbmlhblwiLCB2YWx1ZTogXCJoeVwiIH0sXHJcbiAgeyBuYW1lOiBcIkhlcmVyb1wiLCB2YWx1ZTogXCJoelwiIH0sXHJcbiAgeyBuYW1lOiBcIkludGVybGluZ3VhXCIsIHZhbHVlOiBcImlhXCIgfSxcclxuICB7IG5hbWU6IFwiSW5kb25lc2lhblwiLCB2YWx1ZTogXCJpZFwiIH0sXHJcbiAgeyBuYW1lOiBcIkludGVybGluZ3VlXCIsIHZhbHVlOiBcImllXCIgfSxcclxuICB7IG5hbWU6IFwiSWdib1wiLCB2YWx1ZTogXCJpZ1wiIH0sXHJcbiAgeyBuYW1lOiBcIlNpY2h1YW4gWWlcIiwgdmFsdWU6IFwiaWlcIiB9LFxyXG4gIHsgbmFtZTogXCJJbnVwaWFxXCIsIHZhbHVlOiBcImlrXCIgfSxcclxuICB7IG5hbWU6IFwiSWRvXCIsIHZhbHVlOiBcImlvXCIgfSxcclxuICB7IG5hbWU6IFwiSWNlbGFuZGljXCIsIHZhbHVlOiBcImlzXCIgfSxcclxuICB7IG5hbWU6IFwiSXRhbGlhblwiLCB2YWx1ZTogXCJpdFwiIH0sXHJcbiAgeyBuYW1lOiBcIkludWt0aXR1dFwiLCB2YWx1ZTogXCJpdVwiIH0sXHJcbiAgeyBuYW1lOiBcIkphcGFuZXNlXCIsIHZhbHVlOiBcImphXCIgfSxcclxuICB7IG5hbWU6IFwiSmF2YW5lc2VcIiwgdmFsdWU6IFwianZcIiB9LFxyXG4gIHsgbmFtZTogXCJHZW9yZ2lhblwiLCB2YWx1ZTogXCJrYVwiIH0sXHJcbiAgeyBuYW1lOiBcIktvbmdvXCIsIHZhbHVlOiBcImtnXCIgfSxcclxuICB7IG5hbWU6IFwiS2lrdXl1XCIsIHZhbHVlOiBcImtpXCIgfSxcclxuICB7IG5hbWU6IFwiS3dhbnlhbWFcIiwgdmFsdWU6IFwia2pcIiB9LFxyXG4gIHsgbmFtZTogXCJLYXpha2hcIiwgdmFsdWU6IFwia2tcIiB9LFxyXG4gIHsgbmFtZTogXCJHcmVlbmxhbmRpY1wiLCB2YWx1ZTogXCJrbFwiIH0sXHJcbiAgeyBuYW1lOiBcIktobWVyXCIsIHZhbHVlOiBcImttXCIgfSxcclxuICB7IG5hbWU6IFwiS2FubmFkYVwiLCB2YWx1ZTogXCJrblwiIH0sXHJcbiAgeyBuYW1lOiBcIktvcmVhblwiLCB2YWx1ZTogXCJrb1wiIH0sXHJcbiAgeyBuYW1lOiBcIkthbnVyaVwiLCB2YWx1ZTogXCJrclwiIH0sXHJcbiAgeyBuYW1lOiBcIkthc2htaXJpXCIsIHZhbHVlOiBcImtzXCIgfSxcclxuICB7IG5hbWU6IFwiS3VyZGlzaFwiLCB2YWx1ZTogXCJrdVwiIH0sXHJcbiAgeyBuYW1lOiBcIktvbWlcIiwgdmFsdWU6IFwia3ZcIiB9LFxyXG4gIHsgbmFtZTogXCJDb3JuaXNoXCIsIHZhbHVlOiBcImt3XCIgfSxcclxuICB7IG5hbWU6IFwiS2lyZ2hpelwiLCB2YWx1ZTogXCJreVwiIH0sXHJcbiAgeyBuYW1lOiBcIkxhdGluXCIsIHZhbHVlOiBcImxhXCIgfSxcclxuICB7IG5hbWU6IFwiTHV4ZW1ib3VyZ2lzaFwiLCB2YWx1ZTogXCJsYlwiIH0sXHJcbiAgeyBuYW1lOiBcIkdhbmRhXCIsIHZhbHVlOiBcImxnXCIgfSxcclxuICB7IG5hbWU6IFwiTGltYnVyZ2lzaFwiLCB2YWx1ZTogXCJsaVwiIH0sXHJcbiAgeyBuYW1lOiBcIkxpbmdhbGFcIiwgdmFsdWU6IFwibG5cIiB9LFxyXG4gIHsgbmFtZTogXCJMYW9cIiwgdmFsdWU6IFwibG9cIiB9LFxyXG4gIHsgbmFtZTogXCJMaXRodWFuaWFuXCIsIHZhbHVlOiBcImx0XCIgfSxcclxuICB7IG5hbWU6IFwiTHViYVwiLCB2YWx1ZTogXCJsdVwiIH0sXHJcbiAgeyBuYW1lOiBcIkxhdHZpYW5cIiwgdmFsdWU6IFwibHZcIiB9LFxyXG4gIHsgbmFtZTogXCJNYWxhZ2FzeVwiLCB2YWx1ZTogXCJtZ1wiIH0sXHJcbiAgeyBuYW1lOiBcIk1hcnNoYWxsZXNlXCIsIHZhbHVlOiBcIm1oXCIgfSxcclxuICB7IG5hbWU6IFwiTcSBb3JpXCIsIHZhbHVlOiBcIm1pXCIgfSxcclxuICB7IG5hbWU6IFwiTWFjZWRvbmlhblwiLCB2YWx1ZTogXCJta1wiIH0sXHJcbiAgeyBuYW1lOiBcIk1hbGF5YWxhbVwiLCB2YWx1ZTogXCJtbFwiIH0sXHJcbiAgeyBuYW1lOiBcIk1vbmdvbGlhblwiLCB2YWx1ZTogXCJtblwiIH0sXHJcbiAgeyBuYW1lOiBcIk1vbGRhdmlhblwiLCB2YWx1ZTogXCJtb1wiIH0sXHJcbiAgeyBuYW1lOiBcIk1hcmF0aGlcIiwgdmFsdWU6IFwibXJcIiB9LFxyXG4gIHsgbmFtZTogXCJNYWxheVwiLCB2YWx1ZTogXCJtc1wiIH0sXHJcbiAgeyBuYW1lOiBcIk1hbHRlc2VcIiwgdmFsdWU6IFwibXRcIiB9LFxyXG4gIHsgbmFtZTogXCJCdXJtZXNlXCIsIHZhbHVlOiBcIm15XCIgfSxcclxuICB7IG5hbWU6IFwiTmF1cnVcIiwgdmFsdWU6IFwibmFcIiB9LFxyXG4gIHsgbmFtZTogXCJOb3J3ZWdpYW4gQm9rbcOlbFwiLCB2YWx1ZTogXCJuYlwiIH0sXHJcbiAgeyBuYW1lOiBcIk5vcnRoIE5kZWJlbGVcIiwgdmFsdWU6IFwibmRcIiB9LFxyXG4gIHsgbmFtZTogXCJOZXBhbGlcIiwgdmFsdWU6IFwibmVcIiB9LFxyXG4gIHsgbmFtZTogXCJOZG9uZ2FcIiwgdmFsdWU6IFwibmdcIiB9LFxyXG4gIHsgbmFtZTogXCJEdXRjaFwiLCB2YWx1ZTogXCJubFwiIH0sXHJcbiAgeyBuYW1lOiBcIk5vcndlZ2lhbiBOeW5vcnNrXCIsIHZhbHVlOiBcIm5uXCIgfSxcclxuICB7IG5hbWU6IFwiTm9yd2VnaWFuXCIsIHZhbHVlOiBcIm5vXCIgfSxcclxuICB7IG5hbWU6IFwiU291dGggTmRlYmVsZVwiLCB2YWx1ZTogXCJuclwiIH0sXHJcbiAgeyBuYW1lOiBcIk5hdmFqb1wiLCB2YWx1ZTogXCJudlwiIH0sXHJcbiAgeyBuYW1lOiBcIkNoaWNoZXdhXCIsIHZhbHVlOiBcIm55XCIgfSxcclxuICB7IG5hbWU6IFwiT2NjaXRhblwiLCB2YWx1ZTogXCJvY1wiIH0sXHJcbiAgeyBuYW1lOiBcIk9qaWJ3YVwiLCB2YWx1ZTogXCJvalwiIH0sXHJcbiAgeyBuYW1lOiBcIk9yb21vXCIsIHZhbHVlOiBcIm9tXCIgfSxcclxuICB7IG5hbWU6IFwiT3JpeWFcIiwgdmFsdWU6IFwib3JcIiB9LFxyXG4gIHsgbmFtZTogXCJPc3NldGlhblwiLCB2YWx1ZTogXCJvc1wiIH0sXHJcbiAgeyBuYW1lOiBcIlBhbmphYmlcIiwgdmFsdWU6IFwicGFcIiB9LFxyXG4gIHsgbmFtZTogXCJQxIFsaVwiLCB2YWx1ZTogXCJwaVwiIH0sXHJcbiAgeyBuYW1lOiBcIlBvbGlzaFwiLCB2YWx1ZTogXCJwbFwiIH0sXHJcbiAgeyBuYW1lOiBcIlBhc2h0b1wiLCB2YWx1ZTogXCJwc1wiIH0sXHJcbiAgeyBuYW1lOiBcIlBvcnR1Z3Vlc2VcIiwgdmFsdWU6IFwicHRcIiB9LFxyXG4gIHsgbmFtZTogXCJRdWVjaHVhXCIsIHZhbHVlOiBcInF1XCIgfSxcclxuICB7IG5hbWU6IFwiUmV1bmlvbmVzZVwiLCB2YWx1ZTogXCJyY1wiIH0sXHJcbiAgeyBuYW1lOiBcIlJvbWFuc2hcIiwgdmFsdWU6IFwicm1cIiB9LFxyXG4gIHsgbmFtZTogXCJLaXJ1bmRpXCIsIHZhbHVlOiBcInJuXCIgfSxcclxuICB7IG5hbWU6IFwiUm9tYW5pYW5cIiwgdmFsdWU6IFwicm9cIiB9LFxyXG4gIHsgbmFtZTogXCJSdXNzaWFuXCIsIHZhbHVlOiBcInJ1XCIgfSxcclxuICB7IG5hbWU6IFwiS2lueWFyd2FuZGFcIiwgdmFsdWU6IFwicndcIiB9LFxyXG4gIHsgbmFtZTogXCJTYW5za3JpdFwiLCB2YWx1ZTogXCJzYVwiIH0sXHJcbiAgeyBuYW1lOiBcIlNhcmRpbmlhblwiLCB2YWx1ZTogXCJzY1wiIH0sXHJcbiAgeyBuYW1lOiBcIlNpbmRoaVwiLCB2YWx1ZTogXCJzZFwiIH0sXHJcbiAgeyBuYW1lOiBcIk5vcnRoZXJuIFNhbWlcIiwgdmFsdWU6IFwic2VcIiB9LFxyXG4gIHsgbmFtZTogXCJTYW5nb1wiLCB2YWx1ZTogXCJzZ1wiIH0sXHJcbiAgeyBuYW1lOiBcIlNlcmJvLUNyb2F0aWFuXCIsIHZhbHVlOiBcInNoXCIgfSxcclxuICB7IG5hbWU6IFwiU2luaGFsZXNlXCIsIHZhbHVlOiBcInNpXCIgfSxcclxuICB7IG5hbWU6IFwiU2xvdmFrXCIsIHZhbHVlOiBcInNrXCIgfSxcclxuICB7IG5hbWU6IFwiU2xvdmVuaWFuXCIsIHZhbHVlOiBcInNsXCIgfSxcclxuICB7IG5hbWU6IFwiU2Ftb2FuXCIsIHZhbHVlOiBcInNtXCIgfSxcclxuICB7IG5hbWU6IFwiU2hvbmFcIiwgdmFsdWU6IFwic25cIiB9LFxyXG4gIHsgbmFtZTogXCJTb21hbGlcIiwgdmFsdWU6IFwic29cIiB9LFxyXG4gIHsgbmFtZTogXCJBbGJhbmlhblwiLCB2YWx1ZTogXCJzcVwiIH0sXHJcbiAgeyBuYW1lOiBcIlNlcmJpYW5cIiwgdmFsdWU6IFwic3JcIiB9LFxyXG4gIHsgbmFtZTogXCJTd2F0aVwiLCB2YWx1ZTogXCJzc1wiIH0sXHJcbiAgeyBuYW1lOiBcIlNvdGhvXCIsIHZhbHVlOiBcInN0XCIgfSxcclxuICB7IG5hbWU6IFwiU3VuZGFuZXNlXCIsIHZhbHVlOiBcInN1XCIgfSxcclxuICB7IG5hbWU6IFwiU3dlZGlzaFwiLCB2YWx1ZTogXCJzdlwiIH0sXHJcbiAgeyBuYW1lOiBcIlN3YWhpbGlcIiwgdmFsdWU6IFwic3dcIiB9LFxyXG4gIHsgbmFtZTogXCJUYW1pbFwiLCB2YWx1ZTogXCJ0YVwiIH0sXHJcbiAgeyBuYW1lOiBcIlRlbHVndVwiLCB2YWx1ZTogXCJ0ZVwiIH0sXHJcbiAgeyBuYW1lOiBcIlRhamlrXCIsIHZhbHVlOiBcInRnXCIgfSxcclxuICB7IG5hbWU6IFwiVGhhaVwiLCB2YWx1ZTogXCJ0aFwiIH0sXHJcbiAgeyBuYW1lOiBcIlRpZ3JpbnlhXCIsIHZhbHVlOiBcInRpXCIgfSxcclxuICB7IG5hbWU6IFwiVHVya21lblwiLCB2YWx1ZTogXCJ0a1wiIH0sXHJcbiAgeyBuYW1lOiBcIlRhZ2Fsb2dcIiwgdmFsdWU6IFwidGxcIiB9LFxyXG4gIHsgbmFtZTogXCJUc3dhbmFcIiwgdmFsdWU6IFwidG5cIiB9LFxyXG4gIHsgbmFtZTogXCJUb25nYVwiLCB2YWx1ZTogXCJ0b1wiIH0sXHJcbiAgeyBuYW1lOiBcIlR1cmtpc2hcIiwgdmFsdWU6IFwidHJcIiB9LFxyXG4gIHsgbmFtZTogXCJUc29uZ2FcIiwgdmFsdWU6IFwidHNcIiB9LFxyXG4gIHsgbmFtZTogXCJUYXRhclwiLCB2YWx1ZTogXCJ0dFwiIH0sXHJcbiAgeyBuYW1lOiBcIlR3aVwiLCB2YWx1ZTogXCJ0d1wiIH0sXHJcbiAgeyBuYW1lOiBcIlRhaGl0aWFuXCIsIHZhbHVlOiBcInR5XCIgfSxcclxuICB7IG5hbWU6IFwiVWlnaHVyXCIsIHZhbHVlOiBcInVnXCIgfSxcclxuICB7IG5hbWU6IFwiVWtyYWluaWFuXCIsIHZhbHVlOiBcInVrXCIgfSxcclxuICB7IG5hbWU6IFwiVXJkdVwiLCB2YWx1ZTogXCJ1clwiIH0sXHJcbiAgeyBuYW1lOiBcIlV6YmVrXCIsIHZhbHVlOiBcInV6XCIgfSxcclxuICB7IG5hbWU6IFwiVmVuZGFcIiwgdmFsdWU6IFwidmVcIiB9LFxyXG4gIHsgbmFtZTogXCJWacOqdCBOYW1lc2VcIiwgdmFsdWU6IFwidmlcIiB9LFxyXG4gIHsgbmFtZTogXCJWb2xhcMO8a1wiLCB2YWx1ZTogXCJ2b1wiIH0sXHJcbiAgeyBuYW1lOiBcIldhbGxvb25cIiwgdmFsdWU6IFwid2FcIiB9LFxyXG4gIHsgbmFtZTogXCJXb2xvZlwiLCB2YWx1ZTogXCJ3b1wiIH0sXHJcbiAgeyBuYW1lOiBcIlhob3NhXCIsIHZhbHVlOiBcInhoXCIgfSxcclxuICB7IG5hbWU6IFwiWWlkZGlzaFwiLCB2YWx1ZTogXCJ5aVwiIH0sXHJcbiAgeyBuYW1lOiBcIllvcnViYVwiLCB2YWx1ZTogXCJ5b1wiIH0sXHJcbiAgeyBuYW1lOiBcIlpodWFuZ1wiLCB2YWx1ZTogXCJ6YVwiIH0sXHJcbiAgeyBuYW1lOiBcIkNoaW5lc2VcIiwgdmFsdWU6IFwiemhcIiB9LFxyXG4gIHsgbmFtZTogXCJadWx1XCIsIHZhbHVlOiBcInp1XCIgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBTVEFUVVMgPSBbXHJcbiAgeyBuYW1lOiBcIkluIFByb2dyZXNzXCIsIHZhbHVlOiBcImluIHByb2dyZXNzXCIgfSxcclxuICB7IG5hbWU6IFwiSW4gSGlhdHVzXCIsIHZhbHVlOiBcImluIGhpYXR1c1wiIH0sXHJcbiAgeyBuYW1lOiBcIkNvbXBsZXRlZFwiLCB2YWx1ZTogXCJjb21wbGV0ZWRcIiB9LFxyXG5dO1xyXG5cclxuLy8gVFlQRVNcclxuZXhwb3J0IGNvbnN0IHR5cGVzID0ge1xyXG4gIEdFVF9QUk9GSUxFOiBcIkdFVF9QUk9GSUxFXCIsXHJcbiAgTE9HSU46IFwiTE9HSU5cIixcclxuICBSRUdJU1RFUjogXCJSRUdJU1RFUlwiLFxyXG4gIEdFVF9TVE9SWTogXCJHRVRfU1RPUllcIixcclxuICBHRVRfVVNFUl9TVE9SSUVTOiBcIkdFVF9VU0VSX1NUT1JJRVNcIixcclxuICBHRVRfSE9NRV9TVE9SSUVTOiBcIkdFVF9IT01FX1NUT1JJRVNcIixcclxuICBHRVRfRkVBVFVSRURfU1RPUklFUzogXCJHRVRfRkVBVFVSRURfU1RPUklFU1wiLFxyXG4gIEdFVF9VU0VSU19GUk9NX1NFQVJDSDogXCJHRVRfVVNFUlNfRlJPTV9TRUFSQ0hcIixcclxuICBHRVRfUE9QVUxBUl9VU0VSUzogXCJHRVRfUE9QVUxBUl9VU0VSU1wiLFxyXG4gIEdFVF9GQVZPUklURV9TVE9SSUVTOiBcIkdFVF9GQVZPUklURV9TVE9SSUVTXCIsXHJcbiAgQUREX1NUT1JZOiBcIkFERF9TVE9SWVwiLFxyXG4gIEVESVRfU1RPUlk6IFwiRURJVF9TVE9SWVwiLFxyXG4gIERFTEVURV9TVE9SWTogXCJERUxFVEVfU1RPUllcIixcclxuICBSQVRFX1NUT1JZOiBcIlJBVEVfU1RPUllcIixcclxuICBHRVRfVVNFUl9SQVRFOiBcIkdFVF9VU0VSX1JBVEVcIixcclxuICBHRVRfU1RPUklFU19GUk9NX1NFQVJDSDogXCJHRVRfU1RPUklFU19GUk9NX1NFQVJDSFwiLFxyXG4gIElTX1NUT1JZX0ZBVk9SSVRFOiBcIklTX1NUT1JZX0ZBVk9SSVRFXCIsXHJcbiAgSVNfQ0hBUkFDVEVSX0ZBVk9SSVRFOiBcIklTX0NIQVJBQ1RFUl9GQVZPUklURVwiLFxyXG4gIElTX0ZPTExPV0lORzogXCJJU19GT0xMT1dJTkdcIixcclxuICBHRVRfQ0hBUFRFUjogXCJHRVRfQ0hBUFRFUlwiLFxyXG4gIEFERF9DSEFQVEVSOiBcIkFERF9DSEFQVEVSXCIsXHJcbiAgRURJVF9DSEFQVEVSOiBcIkVESVRfQ0hBUFRFUlwiLFxyXG4gIERFTEVURV9DSEFQVEVSOiBcIkRFTEVURV9DSEFQVEVSXCIsXHJcbiAgR0VUX0NIQVBURVJTOiBcIkdFVF9DSEFQVEVSU1wiLFxyXG4gIEFERF9DSEFSQUNURVI6IFwiQUREX0NIQVJBQ1RFUlwiLFxyXG4gIEdFVF9DSEFSQUNURVI6IFwiR0VUX0NIQVJBQ1RFUlwiLFxyXG4gIEVESVRfQ0hBUkFDVEVSOiBcIkVESVRfQ0hBUkFDVEVSXCIsXHJcbiAgREVMRVRFX0NIQVJBQ1RFUjogXCJERUxFVEVfQ0hBUkFDVEVSXCIsXHJcbiAgR0VUX1VTRVJfQ0hBUkFDVEVSUzogXCJHRVRfVVNFUl9DSEFSQUNURVJTXCIsXHJcbiAgR0VUX1BPUFVMQVJfQ0hBUkFDVEVSUzogXCJHRVRfUE9QVUxBUl9DSEFSQUNURVJTXCIsXHJcbiAgR0VUX0NIQVJBQ1RFUl9DT01NRU5UUzogXCJHRVRfQ0hBUkFDVEVSX0NPTU1FTlRTXCIsXHJcbiAgR0VUX0NIQVJBQ1RFUlNfRlJPTV9TRUFSQ0g6IFwiR0VUX0NIQVJBQ1RFUlNfRlJPTV9TRUFSQ0hcIixcclxuICBHRVRfVVNFUl9MT0NBVElPTlM6IFwiR0VUX1VTRVJfTE9DQVRJT05TXCIsXHJcbiAgR0VUX0ZBVk9SSVRFX0NIQVJBQ1RFUlM6IFwiR0VUX0ZBVk9SSVRFX0NIQVJBQ1RFUlNcIixcclxuICBHRVRfU1RPUllfQ0hBUkFDVEVSUzogXCJHRVRfU1RPUllfQ0hBUkFDVEVSU1wiLFxyXG4gIEFERF9MT0NBVElPTjogXCJBRERfTE9DQVRJT05cIixcclxuICBHRVRfTE9DQVRJT046IFwiR0VUX0xPQ0FUSU9OXCIsXHJcbiAgRURJVF9MT0NBVElPTjogXCJFRElUX0xPQ0FUSU9OXCIsXHJcbiAgREVMRVRFX0xPQ0FUSU9OOiBcIkRFTEVURV9MT0NBVElPTlwiLFxyXG4gIEdFVF9DT01NRU5UUzogXCJHRVRfQ09NTUVOVFNcIixcclxuICBHRVRfRkFWT1JJVEVfQVVUSE9SUzogXCJHRVRfRkFWT1JJVEVfQVVUSE9SU1wiLFxyXG4gIEdFVF9TVE9SWV9MT0NBVElPTlM6IFwiR0VUX1NUT1JZX0xPQ0FUSU9OU1wiLFxyXG4gIEdFVF9GT0xMT1dFUlM6IFwiR0VUX0ZPTExPV0VSU1wiLFxyXG4gIERJU1BBVENIX0VSUk9SOiBcIkRJU1BBVENIX0VSUk9SXCIsXHJcbiAgU1VCTUlUX0NPTU1FTlQ6IFwiU1VCTUlUX0NPTU1FTlRcIixcclxuICBSQVRFX0NPTU1FTlQ6IFwiUkFURV9DT01NRU5UXCIsXHJcbiAgR0VUX05PVElGSUNBVElPTlM6IFwiR0VUX05PVElGSUNBVElPTlNcIixcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfUFJPRklMRSA9IFwiR0VUX1BST0ZJTEVcIjtcclxuZXhwb3J0IGNvbnN0IExPR0lOID0gXCJMT0dJTlwiO1xyXG5leHBvcnQgY29uc3QgUkVHSVNURVIgPSBcIlJFR0lTVEVSXCI7XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX1NUT1JZID0gXCJHRVRfU1RPUllcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9VU0VSX1NUT1JJRVMgPSBcIkdFVF9VU0VSX1NUT1JJRVNcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9GQVZPUklURV9TVE9SSUVTID0gXCJHRVRfRkFWT1JJVEVfU1RPUklFU1wiO1xyXG5leHBvcnQgY29uc3QgQUREX1NUT1JZID0gXCJBRERfU1RPUllcIjtcclxuZXhwb3J0IGNvbnN0IEVESVRfU1RPUlkgPSBcIkVESVRfU1RPUllcIjtcclxuZXhwb3J0IGNvbnN0IERFTEVURV9TVE9SWSA9IFwiREVMRVRFX1NUT1JZXCI7XHJcbmV4cG9ydCBjb25zdCBJU19TVE9SWV9GQVZPUklURSA9IFwiSVNfU1RPUllfRkFWT1JJVEVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfQ0hBUFRFUiA9IFwiR0VUX0NIQVBURVJcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9DSEFQVEVSID0gXCJBRERfQ0hBUFRFUlwiO1xyXG5leHBvcnQgY29uc3QgRURJVF9DSEFQVEVSID0gXCJFRElUX0NIQVBURVJcIjtcclxuZXhwb3J0IGNvbnN0IERFTEVURV9DSEFQVEVSID0gXCJERUxFVEVfQ0hBUFRFUlwiO1xyXG5leHBvcnQgY29uc3QgR0VUX0NIQVBURVJTID0gXCJHRVRfQ0hBUFRFUlNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfQ0hBUkFDVEVSID0gXCJBRERfQ0hBUkFDVEVSXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfQ0hBUkFDVEVSID0gXCJHRVRfQ0hBUkFDVEVSXCI7XHJcbmV4cG9ydCBjb25zdCBFRElUX0NIQVJBQ1RFUiA9IFwiRURJVF9DSEFSQUNURVJcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9VU0VSX0NIQVJBQ1RFUlMgPSBcIkdFVF9VU0VSX0NIQVJBQ1RFUlNcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9VU0VSX0xPQ0FUSU9OUyA9IFwiR0VUX1VTRVJfTE9DQVRJT05TXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfRkFWT1JJVEVfQ0hBUkFDVEVSUyA9IFwiR0VUX0ZBVk9SSVRFX0NIQVJBQ1RFUlNcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9TVE9SWV9DSEFSQUNURVJTID0gXCJHRVRfU1RPUllfQ0hBUkFDVEVSU1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9MT0NBVElPTiA9IFwiQUREX0xPQ0FUSU9OXCI7XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX0ZBVk9SSVRFX0FVVEhPUlMgPSBcIkdFVF9GQVZPUklURV9BVVRIT1JTXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfRk9MTE9XRVJTID0gXCJHRVRfRk9MTE9XRVJTXCI7XHJcblxyXG5leHBvcnQgY29uc3QgRElTUEFUQ0hfRVJST1IgPSBcIkRJU1BBVENIX0VSUk9SXCI7XHJcbiIsImV4cG9ydCBjb25zdCBkdW1teSA9IHtcclxuICBwZXJzb246XHJcbiAgICBcImh0dHBzOi8vaS5waW5pbWcuY29tLzU2NHgvNzAvNTAvYTMvNzA1MGEzMGNjNjFlOGE3ZjNmODY3N2ViZjk1MDVkYjcuanBnXCIsXHJcbiAgY292ZXI6XHJcbiAgICBcImh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzM4ODExMDQvcGV4ZWxzLXBob3RvLTM4ODExMDQuanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJmRwcj0yJmg9NjUwJnc9OTQwXCIsXHJcbiAgbmFtZTogXCJBaXNod2FyeWEgUmFpXCIsXHJcbiAgcG9zdGVyOiBcImh0dHBzOi8vaW1hZ2VzLW5hLnNzbC1pbWFnZXMtYW1hem9uLmNvbS9pbWFnZXMvSS84MWgyZ1dQVFlKTC5qcGdcIixcclxuICBhdmF0YXI6IFwiaHR0cHM6Ly9iaXAuY25ycy5mci93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8xMS91c2VyLmpwZ1wiLFxyXG4gIG5vSW1hZ2U6IFwiaHR0cHM6Ly9pLnN0YWNrLmltZ3VyLmNvbS95OURwVC5qcGdcIixcclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvYXBwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2F1dGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvZmlyZXN0b3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL3N0b3JhZ2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eC1maXJlYmFzZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1maXJlc3RvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtdGh1bmtcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==