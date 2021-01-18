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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/story/new.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/common/Input.js":
/*!************************************!*\
  !*** ./components/common/Input.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\components\\common\\Input.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const InputGroup = ({
  title,
  type,
  placeholder,
  required
}) => {
  return __jsx("div", {
    class: "w-full md:w-full px-3 mb-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("label", {
    class: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
    for: "grid-text-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, title), __jsx("input", {
    class: "appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500",
    id: "grid-text-1",
    type: type,
    placeholder: placeholder,
    required: required,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (InputGroup);

/***/ }),

/***/ "./pages/story/new.js":
/*!****************************!*\
  !*** ./pages/story/new.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_common_Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/common/Input */ "./components/common/Input.js");
var _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\pages\\story\\new.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const newStory = () => {
  return __jsx("div", {
    className: "new__story",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx("div", {
    class: "bg-gray-200 min-h-screen pt-2 my-16",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx("div", {
    class: "container mx-auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("div", {
    class: "inputs w-full max-w-2xl p-6 mx-auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 11
    }
  }, __jsx("h2", {
    class: "text-2xl text-gray-900",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, "Add a new story"), __jsx("form", {
    class: "mt-6 border-t border-gray-400 pt-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, __jsx("div", {
    class: "flex flex-wrap -mx-3 mb-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 15
    }
  }, __jsx(_components_common_Input__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Title",
    required: true,
    placeholder: "Enter a title",
    type: "text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }), __jsx("div", {
    class: "w-full md:w-full px-3 mb-6 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }, __jsx("label", {
    class: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 19
    }
  }, "password"), __jsx("button", {
    class: "appearance-none bg-gray-200 text-gray-900 px-2 py-1 shadow-sm border border-gray-400 rounded-md ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 19
    }
  }, "change your password")), __jsx("div", {
    class: "w-full md:w-full px-3 mb-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }, __jsx("label", {
    class: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 19
    }
  }, "pick your country"), __jsx("div", {
    class: "flex-shrink w-full inline-block relative",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 19
    }
  }, __jsx("select", {
    class: "block appearance-none text-gray-600 w-full bg-white border border-gray-400 shadow-inner px-4 py-2 pr-8 rounded",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 21
    }
  }, __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 23
    }
  }, "choose ..."), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 23
    }
  }, "USA"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 23
    }
  }, "France"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 23
    }
  }, "Spain"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 23
    }
  }, "UK")), __jsx("div", {
    class: "pointer-events-none absolute top-0 mt-3  right-0 flex items-center px-2 text-gray-600",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 21
    }
  }, __jsx("svg", {
    class: "fill-current h-4 w-4",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 23
    }
  }, __jsx("path", {
    d: "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 25
    }
  }))))), __jsx("div", {
    class: "w-full md:w-full px-3 mb-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }, __jsx("label", {
    class: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 19
    }
  }, "fav language"), __jsx("div", {
    class: "flex-shrink w-full inline-block relative",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 19
    }
  }, __jsx("select", {
    class: "block appearance-none text-gray-600 w-full bg-white border border-gray-400 shadow-inner px-4 py-2 pr-8 rounded",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 21
    }
  }, __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 23
    }
  }, "choose ..."), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 23
    }
  }, "English"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 23
    }
  }, "France"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 23
    }
  }, "Spanish")), __jsx("div", {
    class: "pointer-events-none absolute top-0 mt-3  right-0 flex items-center px-2 text-gray-600",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 21
    }
  }, __jsx("svg", {
    class: "fill-current h-4 w-4",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 23
    }
  }, __jsx("path", {
    d: "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 25
    }
  }))))), __jsx("div", {
    class: "personal w-full border-t border-gray-400 pt-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  }, __jsx("h2", {
    class: "text-2xl text-gray-900",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 19
    }
  }, "Personal info:"), __jsx("div", {
    class: "flex items-center justify-between mt-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 19
    }
  }, __jsx("div", {
    class: "w-full md:w-1/2 px-3 mb-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 21
    }
  }, __jsx("label", {
    class: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 23
    }
  }, "first name"), __jsx("input", {
    class: "appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500",
    type: "text",
    required: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 23
    }
  })), __jsx("div", {
    class: "w-full md:w-1/2 px-3 mb-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 21
    }
  }, __jsx("label", {
    class: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 23
    }
  }, "last name"), __jsx("input", {
    class: "appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500",
    type: "text",
    required: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 23
    }
  }))), __jsx("div", {
    class: "w-full md:w-full px-3 mb-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 19
    }
  }, __jsx("label", {
    class: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 21
    }
  }, "user name"), __jsx("input", {
    class: "appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500",
    type: "text",
    required: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 21
    }
  })), __jsx("div", {
    class: "w-full md:w-full px-3 mb-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 19
    }
  }, __jsx("label", {
    class: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 21
    }
  }, "Bio"), __jsx("textarea", {
    class: "bg-gray-100 rounded-md border leading-normal resize-none w-full h-20 py-2 px-3 shadow-inner border border-gray-400 font-medium placeholder-gray-700 focus:outline-none focus:bg-white",
    required: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 21
    }
  })), __jsx("div", {
    class: "flex justify-end",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 19
    }
  }, __jsx("button", {
    class: "appearance-none bg-gray-200 text-gray-900 px-2 py-1 shadow-sm border border-gray-400 rounded-md mr-3",
    type: "submit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 21
    }
  }, "save changes")))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (newStory);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb21tb24vSW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvc3RvcnkvbmV3LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiXSwibmFtZXMiOlsiSW5wdXRHcm91cCIsInRpdGxlIiwidHlwZSIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJuZXdTdG9yeSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBOztBQUVBLE1BQU1BLFVBQVUsR0FBRyxDQUFDO0FBQUNDLE9BQUQ7QUFBUUMsTUFBUjtBQUFjQyxhQUFkO0FBQTJCQztBQUEzQixDQUFELEtBQTBDO0FBQzNELFNBQ0U7QUFBSyxTQUFLLEVBQUMsNEJB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SUU7QUFDRSxTQUFLLEVBQUMsdUxBRFI7QUFFRSxZQUFRLE1BRlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLENBbENGLEVBMkNFO0FBQUssU0FBSyxFQUFDLGtCQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLFNBQUssRUFBQyxzR0FEUjtBQUVFLFFBQUksRUFBQyxRQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsQ0EzQ0YsQ0E1REYsQ0FERixDQUZGLENBREYsQ0FERixDQURGLENBREY7QUE4SEQsQ0EvSEQ7O0FBaUllQSx1RUFBZixFOzs7Ozs7Ozs7OztBQ3BJQSxrQyIsImZpbGUiOiJwYWdlcy9zdG9yeS9uZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL3N0b3J5L25ldy5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IElucHV0R3JvdXAgPSAoe3RpdGxlLCB0eXBlLCBwbGFjZWhvbGRlciwgcmVxdWlyZWR9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3M9J3ctZnVsbCBtZDp3LWZ1bGwgcHgtMyBtYi02Jz5cclxuICAgICAgICA8bGFiZWwgY2xhc3M9J2Jsb2NrIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtZ3JheS03MDAgdGV4dC14cyBmb250LWJvbGQgbWItMicgZm9yPSdncmlkLXRleHQtMSc+e3RpdGxlfTwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IGNsYXNzPSdhcHBlYXJhbmNlLW5vbmUgYmxvY2sgdy1mdWxsIGJnLXdoaXRlIHRleHQtZ3JheS03MDAgYm9yZGVyIGJvcmRlci1ncmF5LTQwMCBzaGFkb3ctaW5uZXIgcm91bmRlZC1tZCBweS0zIHB4LTQgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgIGZvY3VzOmJvcmRlci1ncmF5LTUwMCcgaWQ9J2dyaWQtdGV4dC0xJyB0eXBlPXt0eXBlfSBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9ICByZXF1aXJlZD17cmVxdWlyZWR9Lz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5wdXRHcm91cFxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbnB1dEdyb3VwIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2NvbW1vbi9JbnB1dFwiO1xyXG5cclxuY29uc3QgbmV3U3RvcnkgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3X19zdG9yeVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYmctZ3JheS0yMDAgbWluLWgtc2NyZWVuIHB0LTIgbXktMTZcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIG14LWF1dG9cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dHMgdy1mdWxsIG1heC13LTJ4bCBwLTYgbXgtYXV0b1wiPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3M9XCJ0ZXh0LTJ4bCB0ZXh0LWdyYXktOTAwXCI+QWRkIGEgbmV3IHN0b3J5PC9oMj5cclxuICAgICAgICAgICAgPGZvcm0gY2xhc3M9XCJtdC02IGJvcmRlci10IGJvcmRlci1ncmF5LTQwMCBwdC00XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC13cmFwIC1teC0zIG1iLTZcIj5cclxuICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwXHJcbiAgICAgICAgICAgICAgICAgIHRpdGxlPVwiVGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBhIHRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGwgbWQ6dy1mdWxsIHB4LTMgbWItNiBcIj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiYmxvY2sgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgdGV4dC1ncmF5LTcwMCB0ZXh0LXhzIGZvbnQtYm9sZCBtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmRcclxuICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImFwcGVhcmFuY2Utbm9uZSBiZy1ncmF5LTIwMCB0ZXh0LWdyYXktOTAwIHB4LTIgcHktMSBzaGFkb3ctc20gYm9yZGVyIGJvcmRlci1ncmF5LTQwMCByb3VuZGVkLW1kIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZSB5b3VyIHBhc3N3b3JkXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIG1kOnctZnVsbCBweC0zIG1iLTZcIj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiYmxvY2sgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgdGV4dC1ncmF5LTcwMCB0ZXh0LXhzIGZvbnQtYm9sZCBtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgcGljayB5b3VyIGNvdW50cnlcclxuICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgtc2hyaW5rIHctZnVsbCBpbmxpbmUtYmxvY2sgcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwiYmxvY2sgYXBwZWFyYW5jZS1ub25lIHRleHQtZ3JheS02MDAgdy1mdWxsIGJnLXdoaXRlIGJvcmRlciBib3JkZXItZ3JheS00MDAgc2hhZG93LWlubmVyIHB4LTQgcHktMiBwci04IHJvdW5kZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+Y2hvb3NlIC4uLjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5VU0E8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+RnJhbmNlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPlNwYWluPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPlVLPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvaW50ZXItZXZlbnRzLW5vbmUgYWJzb2x1dGUgdG9wLTAgbXQtMyAgcmlnaHQtMCBmbGV4IGl0ZW1zLWNlbnRlciBweC0yIHRleHQtZ3JheS02MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmaWxsLWN1cnJlbnQgaC00IHctNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk05LjI5MyAxMi45NWwuNzA3LjcwN0wxNS42NTcgOGwtMS40MTQtMS40MTRMMTAgMTAuODI4IDUuNzU3IDYuNTg2IDQuMzQzIDh6XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctZnVsbCBtZDp3LWZ1bGwgcHgtMyBtYi02XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImJsb2NrIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtZ3JheS03MDAgdGV4dC14cyBmb250LWJvbGQgbWItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIGZhdiBsYW5ndWFnZVxyXG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleC1zaHJpbmsgdy1mdWxsIGlubGluZS1ibG9jayByZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJibG9jayBhcHBlYXJhbmNlLW5vbmUgdGV4dC1ncmF5LTYwMCB3LWZ1bGwgYmctd2hpdGUgYm9yZGVyIGJvcmRlci1ncmF5LTQwMCBzaGFkb3ctaW5uZXIgcHgtNCBweS0yIHByLTggcm91bmRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5jaG9vc2UgLi4uPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPkVuZ2xpc2g8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+RnJhbmNlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPlNwYW5pc2g8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9pbnRlci1ldmVudHMtbm9uZSBhYnNvbHV0ZSB0b3AtMCBtdC0zICByaWdodC0wIGZsZXggaXRlbXMtY2VudGVyIHB4LTIgdGV4dC1ncmF5LTYwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZpbGwtY3VycmVudCBoLTQgdy00XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjAgMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTkuMjkzIDEyLjk1bC43MDcuNzA3TDE1LjY1NyA4bC0xLjQxNC0xLjQxNEwxMCAxMC44MjggNS43NTcgNi41ODYgNC4zNDMgOHpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGVyc29uYWwgdy1mdWxsIGJvcmRlci10IGJvcmRlci1ncmF5LTQwMCBwdC00XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cInRleHQtMnhsIHRleHQtZ3JheS05MDBcIj5QZXJzb25hbCBpbmZvOjwvaDI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gbXQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGwgbWQ6dy0xLzIgcHgtMyBtYi02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJibG9jayB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LWdyYXktNzAwIHRleHQteHMgZm9udC1ib2xkIG1iLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3QgbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImFwcGVhcmFuY2Utbm9uZSBibG9jayB3LWZ1bGwgYmctd2hpdGUgdGV4dC1ncmF5LTcwMCBib3JkZXIgYm9yZGVyLWdyYXktNDAwIHNoYWRvdy1pbm5lciByb3VuZGVkLW1kIHB5LTMgcHgtNCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSAgZm9jdXM6Ym9yZGVyLWdyYXktNTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIG1kOnctMS8yIHB4LTMgbWItNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiYmxvY2sgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgdGV4dC1ncmF5LTcwMCB0ZXh0LXhzIGZvbnQtYm9sZCBtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3QgbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImFwcGVhcmFuY2Utbm9uZSBibG9jayB3LWZ1bGwgYmctd2hpdGUgdGV4dC1ncmF5LTcwMCBib3JkZXIgYm9yZGVyLWdyYXktNDAwIHNoYWRvdy1pbm5lciByb3VuZGVkLW1kIHB5LTMgcHgtNCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSAgZm9jdXM6Ym9yZGVyLWdyYXktNTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGwgbWQ6dy1mdWxsIHB4LTMgbWItNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImJsb2NrIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtZ3JheS03MDAgdGV4dC14cyBmb250LWJvbGQgbWItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgdXNlciBuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYXBwZWFyYW5jZS1ub25lIGJsb2NrIHctZnVsbCBiZy13aGl0ZSB0ZXh0LWdyYXktNzAwIGJvcmRlciBib3JkZXItZ3JheS00MDAgc2hhZG93LWlubmVyIHJvdW5kZWQtbWQgcHktMyBweC00IGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lICBmb2N1czpib3JkZXItZ3JheS01MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctZnVsbCBtZDp3LWZ1bGwgcHgtMyBtYi02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiYmxvY2sgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgdGV4dC1ncmF5LTcwMCB0ZXh0LXhzIGZvbnQtYm9sZCBtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBCaW9cclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJiZy1ncmF5LTEwMCByb3VuZGVkLW1kIGJvcmRlciBsZWFkaW5nLW5vcm1hbCByZXNpemUtbm9uZSB3LWZ1bGwgaC0yMCBweS0yIHB4LTMgc2hhZG93LWlubmVyIGJvcmRlciBib3JkZXItZ3JheS00MDAgZm9udC1tZWRpdW0gcGxhY2Vob2xkZXItZ3JheS03MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJnLXdoaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBqdXN0aWZ5LWVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYXBwZWFyYW5jZS1ub25lIGJnLWdyYXktMjAwIHRleHQtZ3JheS05MDAgcHgtMiBweS0xIHNoYWRvdy1zbSBib3JkZXIgYm9yZGVyLWdyYXktNDAwIHJvdW5kZWQtbWQgbXItM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBzYXZlIGNoYW5nZXNcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ld1N0b3J5O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9