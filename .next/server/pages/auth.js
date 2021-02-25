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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/auth.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/auth/Login.js":
/*!**********************************!*\
  !*** ./components/auth/Login.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\components\\auth\\Login.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Login = ({
  email,
  password,
  handleClick,
  setPassword,
  setEmail,
  signin
}) => {
  return __jsx("div", {
    className: "inner-auth",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, "Welcome back to Kronikea"), __jsx("form", {
    className: "auth-form",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "form-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx("label", {
    htmlFor: "email",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }, "Email address"), __jsx("div", {
    className: "input-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }, __jsx("input", {
    onChange: e => setEmail(e.target.value),
    value: email,
    className: "form-input",
    type: "email",
    id: "email",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "input-group__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, __jsx("ion-icon", {
    name: "mail",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 15
    }
  })))), __jsx("div", {
    className: "form-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx("label", {
    htmlFor: "password",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, "Password"), __jsx("div", {
    className: "input-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, __jsx("input", {
    onChange: e => setPassword(e.target.value),
    value: password,
    className: "form-input",
    type: "password",
    id: "password",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "input-group__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, __jsx("ion-icon", {
    name: "key",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 15
    }
  })))), __jsx("div", {
    className: "login-btn custom-btn",
    onClick: signin,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, "Login"))), __jsx("p", {
    onClick: handleClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, "Don't have an account yet ? Register here"));
};

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ "./components/auth/Register.js":
/*!*************************************!*\
  !*** ./components/auth/Register.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\components\\auth\\Register.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Register = ({
  handleClick
}) => {
  return __jsx("div", {
    className: "inner-auth",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, "Welcome to Kronikea"), __jsx("form", {
    className: "auth-form",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "form-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("label", {
    htmlFor: "email",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 11
    }
  }, "Email address"), __jsx("div", {
    className: "input-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 11
    }
  }, __jsx("input", {
    className: "form-input",
    type: "email",
    id: "email",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "input-group__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, __jsx("ion-icon", {
    name: "mail",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 15
    }
  })))), __jsx("div", {
    className: "form-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx("label", {
    htmlFor: "email",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }, "Username"), __jsx("div", {
    className: "input-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, __jsx("input", {
    className: "form-input",
    type: "text",
    id: "username",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "input-group__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, __jsx("ion-icon", {
    name: "person",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 15
    }
  })))), __jsx("div", {
    className: "form-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx("label", {
    htmlFor: "password",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, "Password"), __jsx("div", {
    className: "input-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, __jsx("input", {
    className: "form-input",
    type: "password",
    id: "password",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "input-group__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, __jsx("ion-icon", {
    name: "key",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 15
    }
  })))), __jsx("div", {
    className: "form-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, __jsx("label", {
    htmlFor: "confirm-password",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, "Confirm Password"), __jsx("div", {
    className: "input-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, __jsx("input", {
    className: "form-input",
    type: "password",
    id: "confirm-password",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "input-group__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, __jsx("ion-icon", {
    name: "key",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 15
    }
  })))), __jsx("div", {
    className: "login-btn custom-btn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }, "Create account"))), __jsx("p", {
    onClick: handleClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, "Already have an account ? Login here"));
};

/* harmony default export */ __webpack_exports__["default"] = (Register);

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
/* harmony import */ var _redux_fbConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../redux/fbConfig */ "./redux/fbConfig.js");
var _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\hooks\\userHooks.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


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
      lineNumber: 8,
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
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null); // Wrap any Firebase methods we want to use making sure ...
  // ... to save the user to state.

  const signin = (email, password) => {
    return _redux_fbConfig__WEBPACK_IMPORTED_MODULE_1__["auth"].signInWithEmailAndPassword(email, password).then(response => {
      setUser(response.user);
      return response.user;
    });
  };

  const signup = (email, password) => {
    return _redux_fbConfig__WEBPACK_IMPORTED_MODULE_1__["auth"].createUserWithEmailAndPassword(email, password).then(response => {
      setUser(response.user);
      return response.user;
    });
  };

  const signout = () => {
    return _redux_fbConfig__WEBPACK_IMPORTED_MODULE_1__["auth"].signOut().then(() => {
      setUser(false);
    });
  };

  const sendPasswordResetEmail = email => {
    return _redux_fbConfig__WEBPACK_IMPORTED_MODULE_1__["auth"].sendPasswordResetEmail(email).then(() => {
      return true;
    });
  };

  const confirmPasswordReset = (code, password) => {
    return _redux_fbConfig__WEBPACK_IMPORTED_MODULE_1__["auth"].confirmPasswordReset(code, password).then(() => {
      return true;
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const unsubscribe = _redux_fbConfig__WEBPACK_IMPORTED_MODULE_1__["auth"].onAuthStateChanged(user => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
    }); // Cleanup subscription on unmount

    return () => unsubscribe();
  }, []); // Return the user object and auth methods

  return {
    user,
    signin,
    signup,
    signout,
    sendPasswordResetEmail,
    confirmPasswordReset
  };
}

/***/ }),

/***/ "./pages/auth.js":
/*!***********************!*\
  !*** ./pages/auth.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_card_flip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-card-flip */ "react-card-flip");
/* harmony import */ var react_card_flip__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_card_flip__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_auth_Login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/auth/Login */ "./components/auth/Login.js");
/* harmony import */ var _components_auth_Register__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/auth/Register */ "./components/auth/Register.js");
/* harmony import */ var _redux_actions_userActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/actions/userActions */ "./redux/actions/userActions.js");
/* harmony import */ var _hooks_userHooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/userHooks */ "./hooks/userHooks.js");
var _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\pages\\auth.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const auth = ({
  log_in
}) => {
  const {
    0: isFlipped,
    1: setIsFlipped
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: username,
    1: setUsername
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: email,
    1: setEmail
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: password,
    1: setPassword
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: confirmPassword,
    1: setConfirmPassword
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const auth = Object(_hooks_userHooks__WEBPACK_IMPORTED_MODULE_6__["useAuth"])();

  const handleClick = e => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };

  const signin = () => log_in(email, password);

  return __jsx("div", {
    className: "authentication",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, __jsx(react_card_flip__WEBPACK_IMPORTED_MODULE_1___default.a, {
    isFlipped: isFlipped,
    flipDirection: "horizontal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, __jsx(_components_auth_Login__WEBPACK_IMPORTED_MODULE_3__["default"], {
    signin: signin,
    setPassword: setPassword,
    setEmail: setEmail,
    email: email,
    password: password,
    handleClick: handleClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }), __jsx(_components_auth_Register__WEBPACK_IMPORTED_MODULE_4__["default"], {
    handleClick: handleClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  })));
};

const mapStateToProps = state => ({});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, {
  log_in: _redux_actions_userActions__WEBPACK_IMPORTED_MODULE_5__["log_in"]
})(auth));

/***/ }),

/***/ "./redux/actions/userActions.js":
/*!**************************************!*\
  !*** ./redux/actions/userActions.js ***!
  \**************************************/
/*! exports provided: log_in, getProfile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log_in", function() { return log_in; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProfile", function() { return getProfile; });
/* harmony import */ var _fbConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fbConfig */ "./redux/fbConfig.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/constants */ "./utils/constants.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const log_in = (email, password) => dispatch => {
  console.log(email, password);
  _fbConfig__WEBPACK_IMPORTED_MODULE_0__["auth"].signInWithEmailAndPassword(email, password);
};
const getProfile = () => dispatch => {
  _fbConfig__WEBPACK_IMPORTED_MODULE_0__["db"].collection("users").doc("0K9FO3KtCZOm2VCItZrssTJ8xbE3").onSnapshot(doc => {
    console.log("coucou");
    return dispatch({
      type: _utils_constants__WEBPACK_IMPORTED_MODULE_1__["GET_PROFILE"],
      payload: _objectSpread({
        id: doc.id
      }, doc.data())
    });
  });
};

/***/ }),

/***/ "./redux/fbConfig.js":
/*!***************************!*\
  !*** ./redux/fbConfig.js ***!
  \***************************/
/*! exports provided: db, auth, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "db", function() { return db; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return auth; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ "firebase/auth");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ "firebase/firestore");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_2__);



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

/* harmony default export */ __webpack_exports__["default"] = (config);

/***/ }),

/***/ "./utils/constants.js":
/*!****************************!*\
  !*** ./utils/constants.js ***!
  \****************************/
/*! exports provided: CATEGORIES, COPYRIGHTS, LANGUAGES, STATUS, GET_PROFILE, LOGIN, REISTER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CATEGORIES", function() { return CATEGORIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COPYRIGHTS", function() { return COPYRIGHTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANGUAGES", function() { return LANGUAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATUS", function() { return STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PROFILE", function() { return GET_PROFILE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN", function() { return LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REISTER", function() { return REISTER; });
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

const GET_PROFILE = "GET_PROFILE";
const LOGIN = "LOGIN";
const REISTER = "REGISTER";

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

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-card-flip":
/*!**********************************!*\
  !*** external "react-card-flip" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-card-flip");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hdXRoL0xvZ2luLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYXV0aC9SZWdpc3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9ob29rcy91c2VySG9va3MuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXV0aC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25zL3VzZXJBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3JlZHV4L2ZiQ29uZmlnLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9hcHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9hdXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1jYXJkLWZsaXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIl0sIm5hbWVzIjpbIkxvZ2luIiwiZW1haWwiLCJwYXNzd29yZCIsImhhbmRsZUNsaWNrIiwic2V0UGFzc3dvcmQiLCJzZXRFbWFpbCIsInNpZ25pbiIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIlJlZ2lzdGVyIiwiYXV0aENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiUHJvdmlkZUF1dGgiLCJjaGlsZHJlbiIsImF1dGgiLCJ1c2VQcm92aWRlQXV0aCIsInVzZUF1dGgiLCJ1c2VDb250ZXh0IiwidXNlciIsInNldFVzZXIiLCJ1c2VTdGF0ZSIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwidGhlbiIsInJlc3BvbnNlIiwic2lnbnVwIiwiY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwic2lnbm91dCIsInNpZ25PdXQiLCJzZW5kUGFzc3dvcmRSZXNldEVtYWlsIiwiY29uZmlybVBhc3N3b3JkUmVzZXQiLCJjb2RlIiwidXNlRWZmZWN0IiwidW5zdWJzY3JpYmUiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJsb2dfaW4iLCJpc0ZsaXBwZWQiLCJzZXRJc0ZsaXBwZWQiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwiY29uZmlybVBhc3N3b3JkIiwic2V0Q29uZmlybVBhc3N3b3JkIiwicHJldmVudERlZmF1bHQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImNvbm5lY3QiLCJkaXNwYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJnZXRQcm9maWxlIiwiZGIiLCJjb2xsZWN0aW9uIiwiZG9jIiwib25TbmFwc2hvdCIsInR5cGUiLCJHRVRfUFJPRklMRSIsInBheWxvYWQiLCJpZCIsImRhdGEiLCJwcm9kQ29uZmlnIiwiYXBpS2V5IiwicHJvY2VzcyIsImF1dGhEb21haW4iLCJkYXRhYmFzZVVSTCIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwiRklSRUJBU0VfQVBQX0lEIiwiZGV2Q29uZmlnIiwiY29uZmlnIiwiZmlyZWJhc2UiLCJhcHBzIiwibGVuZ3RoIiwiaW5pdGlhbGl6ZUFwcCIsImZpcmVzdG9yZSIsIkNBVEVHT1JJRVMiLCJuYW1lIiwiQ09QWVJJR0hUUyIsIkxBTkdVQUdFUyIsIlNUQVRVUyIsIkxPR0lOIiwiUkVJU1RFUiJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBOztBQUVBLE1BQU1BLEtBQUssR0FBRyxDQUFDO0FBQ2JDLE9BRGE7QUFFYkMsVUFGYTtBQUdiQyxhQUhhO0FBSWJDLGFBSmE7QUFLYkMsVUFMYTtBQU1iQztBQU5hLENBQUQsS0FPUjtBQUNKLFNBQ0U7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FERixFQUVFO0FBQU0sYUFBUyxFQUFDLFdBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFPLFdBQU8sRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsRUFFRTtBQUFLLGFBQVMsRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLFlBQVEsRUFBR0MsQ0FBRCxJQUFPRixRQUFRLENBQUNFLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBRDNCO0FBRUUsU0FBSyxFQUFFUixLQUZUO0FBR0UsYUFBUyxFQUFDLFlBSFo7QUFJRSxRQUFJLEVBQUMsT0FKUDtBQUtFLE1BQUUsRUFBQyxPQUxMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQVFFO0FBQUssYUFBUyxFQUFDLG1CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFVLFFBQUksRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQVJGLENBRkYsQ0FERixFQWdCRTtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFPLFdBQU8sRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsRUFFRTtBQUFLLGFBQVMsRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLFlBQVEsRUFBR00sQ0FBRCxJQUFPSCxXQUFXLENBQUNHLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBRDlCO0FBRUUsU0FBSyxFQUFFUCxRQUZUO0FBR0UsYUFBUyxFQUFDLFlBSFo7QUFJRSxRQUFJLEVBQUMsVUFKUDtBQUtFLE1BQUUsRUFBQyxVQUxMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQVFFO0FBQUssYUFBUyxFQUFDLG1CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFVLFFBQUksRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQVJGLENBRkYsQ0FoQkYsRUErQkU7QUFBSyxhQUFTLEVBQUMsc0JBQWY7QUFBc0MsV0FBTyxFQUFFSSxNQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLENBL0JGLENBRkYsRUFxQ0U7QUFBRyxXQUFPLEVBQUVILFdBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpREFyQ0YsQ0FERjtBQXlDRCxDQWpERDs7QUFtRGVILG9FQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckRBOztBQUVBLE1BQU1VLFFBQVEsR0FBRyxDQUFDO0FBQUVQO0FBQUYsQ0FBRCxLQUFxQjtBQUNwQyxTQUNFO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREYsRUFFRTtBQUFNLGFBQVMsRUFBQyxXQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTyxXQUFPLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLEVBRUU7QUFBSyxhQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTyxhQUFTLEVBQUMsWUFBakI7QUFBOEIsUUFBSSxFQUFDLE9BQW5DO0FBQTJDLE1BQUUsRUFBQyxPQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFLLGFBQVMsRUFBQyxtQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBVSxRQUFJLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FGRixDQUZGLENBREYsRUFVRTtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFPLFdBQU8sRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsRUFFRTtBQUFLLGFBQVMsRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFPLGFBQVMsRUFBQyxZQUFqQjtBQUE4QixRQUFJLEVBQUMsTUFBbkM7QUFBMEMsTUFBRSxFQUFDLFVBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUssYUFBUyxFQUFDLG1CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFVLFFBQUksRUFBQyxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUZGLENBRkYsQ0FWRixFQW1CRTtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFPLFdBQU8sRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsRUFFRTtBQUFLLGFBQVMsRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFPLGFBQVMsRUFBQyxZQUFqQjtBQUE4QixRQUFJLEVBQUMsVUFBbkM7QUFBOEMsTUFBRSxFQUFDLFVBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUssYUFBUyxFQUFDLG1CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFVLFFBQUksRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUZGLENBRkYsQ0FuQkYsRUE0QkU7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTyxXQUFPLEVBQUMsa0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFERixFQUVFO0FBQUssYUFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsYUFBUyxFQUFDLFlBRFo7QUFFRSxRQUFJLEVBQUMsVUFGUDtBQUdFLE1BQUUsRUFBQyxrQkFITDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFNRTtBQUFLLGFBQVMsRUFBQyxtQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBVSxRQUFJLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FORixDQUZGLENBNUJGLEVBeUNFO0FBQUssYUFBUyxFQUFDLHNCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLENBekNGLENBRkYsRUErQ0U7QUFBRyxXQUFPLEVBQUVBLFdBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0Q0EvQ0YsQ0FERjtBQW1ERCxDQXBERDs7QUFzRGVPLHVFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeERBO0FBQ0E7QUFFQSxNQUFNQyxXQUFXLGdCQUFHQywyREFBYSxFQUFqQztBQUVPLFNBQVNDLFdBQVQsQ0FBcUI7QUFBRUM7QUFBRixDQUFyQixFQUFtQztBQUN4QyxRQUFNQyxJQUFJLEdBQUdDLGNBQWMsRUFBM0I7QUFDQSxTQUFPLE1BQUMsV0FBRCxDQUFhLFFBQWI7QUFBc0IsU0FBSyxFQUFFRCxJQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQW9DRCxRQUFwQyxDQUFQO0FBQ0Q7QUFFTSxNQUFNRyxPQUFPLEdBQUcsTUFBTTtBQUMzQixTQUFPQyx3REFBVSxDQUFDUCxXQUFELENBQWpCO0FBQ0QsQ0FGTTs7QUFJUCxTQUFTSyxjQUFULEdBQTBCO0FBQ3hCLFFBQU07QUFBQSxPQUFDRyxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQkMsc0RBQVEsQ0FBQyxJQUFELENBQWhDLENBRHdCLENBR3hCO0FBQ0E7O0FBQ0EsUUFBTWYsTUFBTSxHQUFHLENBQUNMLEtBQUQsRUFBUUMsUUFBUixLQUFxQjtBQUNsQyxXQUFPYSxvREFBSSxDQUFDTywwQkFBTCxDQUFnQ3JCLEtBQWhDLEVBQXVDQyxRQUF2QyxFQUFpRHFCLElBQWpELENBQXVEQyxRQUFELElBQWM7QUFDekVKLGFBQU8sQ0FBQ0ksUUFBUSxDQUFDTCxJQUFWLENBQVA7QUFDQSxhQUFPSyxRQUFRLENBQUNMLElBQWhCO0FBQ0QsS0FITSxDQUFQO0FBSUQsR0FMRDs7QUFPQSxRQUFNTSxNQUFNLEdBQUcsQ0FBQ3hCLEtBQUQsRUFBUUMsUUFBUixLQUFxQjtBQUNsQyxXQUFPYSxvREFBSSxDQUNSVyw4QkFESSxDQUMyQnpCLEtBRDNCLEVBQ2tDQyxRQURsQyxFQUVKcUIsSUFGSSxDQUVFQyxRQUFELElBQWM7QUFDbEJKLGFBQU8sQ0FBQ0ksUUFBUSxDQUFDTCxJQUFWLENBQVA7QUFDQSxhQUFPSyxRQUFRLENBQUNMLElBQWhCO0FBQ0QsS0FMSSxDQUFQO0FBTUQsR0FQRDs7QUFTQSxRQUFNUSxPQUFPLEdBQUcsTUFBTTtBQUNwQixXQUFPWixvREFBSSxDQUFDYSxPQUFMLEdBQWVMLElBQWYsQ0FBb0IsTUFBTTtBQUMvQkgsYUFBTyxDQUFDLEtBQUQsQ0FBUDtBQUNELEtBRk0sQ0FBUDtBQUdELEdBSkQ7O0FBTUEsUUFBTVMsc0JBQXNCLEdBQUk1QixLQUFELElBQVc7QUFDeEMsV0FBT2Msb0RBQUksQ0FBQ2Msc0JBQUwsQ0FBNEI1QixLQUE1QixFQUFtQ3NCLElBQW5DLENBQXdDLE1BQU07QUFDbkQsYUFBTyxJQUFQO0FBQ0QsS0FGTSxDQUFQO0FBR0QsR0FKRDs7QUFNQSxRQUFNTyxvQkFBb0IsR0FBRyxDQUFDQyxJQUFELEVBQU83QixRQUFQLEtBQW9CO0FBQy9DLFdBQU9hLG9EQUFJLENBQUNlLG9CQUFMLENBQTBCQyxJQUExQixFQUFnQzdCLFFBQWhDLEVBQTBDcUIsSUFBMUMsQ0FBK0MsTUFBTTtBQUMxRCxhQUFPLElBQVA7QUFDRCxLQUZNLENBQVA7QUFHRCxHQUpEOztBQU1BUyx5REFBUyxDQUFDLE1BQU07QUFDZCxVQUFNQyxXQUFXLEdBQUdsQixvREFBSSxDQUFDbUIsa0JBQUwsQ0FBeUJmLElBQUQsSUFBVTtBQUNwRCxVQUFJQSxJQUFKLEVBQVU7QUFDUkMsZUFBTyxDQUFDRCxJQUFELENBQVA7QUFDRCxPQUZELE1BRU87QUFDTEMsZUFBTyxDQUFDLEtBQUQsQ0FBUDtBQUNEO0FBQ0YsS0FObUIsQ0FBcEIsQ0FEYyxDQVNkOztBQUNBLFdBQU8sTUFBTWEsV0FBVyxFQUF4QjtBQUNELEdBWFEsRUFXTixFQVhNLENBQVQsQ0F2Q3dCLENBb0R4Qjs7QUFDQSxTQUFPO0FBQ0xkLFFBREs7QUFFTGIsVUFGSztBQUdMbUIsVUFISztBQUlMRSxXQUpLO0FBS0xFLDBCQUxLO0FBTUxDO0FBTkssR0FBUDtBQVFELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRUQ7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTWYsSUFBSSxHQUFHLENBQUM7QUFBRW9CO0FBQUYsQ0FBRCxLQUFnQjtBQUMzQixRQUFNO0FBQUEsT0FBQ0MsU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBNEJoQixzREFBUSxDQUFDLEtBQUQsQ0FBMUM7QUFDQSxRQUFNO0FBQUEsT0FBQ2lCLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCbEIsc0RBQVEsQ0FBQyxFQUFELENBQXhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNwQixLQUFEO0FBQUEsT0FBUUk7QUFBUixNQUFvQmdCLHNEQUFRLENBQUMsRUFBRCxDQUFsQztBQUNBLFFBQU07QUFBQSxPQUFDbkIsUUFBRDtBQUFBLE9BQVdFO0FBQVgsTUFBMEJpQixzREFBUSxDQUFDLEVBQUQsQ0FBeEM7QUFDQSxRQUFNO0FBQUEsT0FBQ21CLGVBQUQ7QUFBQSxPQUFrQkM7QUFBbEIsTUFBd0NwQixzREFBUSxDQUFDLEVBQUQsQ0FBdEQ7QUFDQSxRQUFNTixJQUFJLEdBQUdFLGdFQUFPLEVBQXBCOztBQUVBLFFBQU1kLFdBQVcsR0FBSUksQ0FBRCxJQUFPO0FBQ3pCQSxLQUFDLENBQUNtQyxjQUFGO0FBQ0FMLGdCQUFZLENBQUMsQ0FBQ0QsU0FBRixDQUFaO0FBQ0QsR0FIRDs7QUFLQSxRQUFNOUIsTUFBTSxHQUFHLE1BQU02QixNQUFNLENBQUNsQyxLQUFELEVBQVFDLFFBQVIsQ0FBM0I7O0FBRUEsU0FDRTtBQUFLLGFBQVMsRUFBQyxnQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxzREFBRDtBQUFlLGFBQVMsRUFBRWtDLFNBQTFCO0FBQXFDLGlCQUFhLEVBQUMsWUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsOERBQUQ7QUFDRSxVQUFNLEVBQUU5QixNQURWO0FBRUUsZUFBVyxFQUFFRixXQUZmO0FBR0UsWUFBUSxFQUFFQyxRQUhaO0FBSUUsU0FBSyxFQUFFSixLQUpUO0FBS0UsWUFBUSxFQUFFQyxRQUxaO0FBTUUsZUFBVyxFQUFFQyxXQU5mO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQVNFLE1BQUMsaUVBQUQ7QUFBVSxlQUFXLEVBQUVBLFdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFURixDQURGLENBREY7QUFlRCxDQTlCRDs7QUFnQ0EsTUFBTXdDLGVBQWUsR0FBSUMsS0FBRCxLQUFZLEVBQVosQ0FBeEI7O0FBRWVDLDBIQUFPLENBQUNGLGVBQUQsRUFBa0I7QUFBRVIsMkVBQU1BO0FBQVIsQ0FBbEIsQ0FBUCxDQUFxQ3BCLElBQXJDLENBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQ0E7QUFFQTtBQUVPLE1BQU1vQixNQUFNLEdBQUcsQ0FBQ2xDLEtBQUQsRUFBUUMsUUFBUixLQUFzQjRDLFFBQUQsSUFBYztBQUN2REMsU0FBTyxDQUFDQyxHQUFSLENBQVkvQyxLQUFaLEVBQW1CQyxRQUFuQjtBQUNBYSxnREFBSSxDQUFDTywwQkFBTCxDQUFnQ3JCLEtBQWhDLEVBQXVDQyxRQUF2QztBQUNELENBSE07QUFLQSxNQUFNK0MsVUFBVSxHQUFHLE1BQU9ILFFBQUQsSUFBYztBQUM1Q0ksOENBQUUsQ0FBQ0MsVUFBSCxDQUFjLE9BQWQsRUFDR0MsR0FESCxDQUNPLDhCQURQLEVBRUdDLFVBRkgsQ0FFZUQsR0FBRCxJQUFTO0FBQ25CTCxXQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaO0FBQ0EsV0FBT0YsUUFBUSxDQUFDO0FBQ2RRLFVBQUksRUFBRUMsNERBRFE7QUFFZEMsYUFBTztBQUFJQyxVQUFFLEVBQUVMLEdBQUcsQ0FBQ0s7QUFBWixTQUFtQkwsR0FBRyxDQUFDTSxJQUFKLEVBQW5CO0FBRk8sS0FBRCxDQUFmO0FBSUQsR0FSSDtBQVNELENBVk0sQzs7Ozs7Ozs7Ozs7O0FDVFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUEsTUFBTUMsVUFBVSxHQUFHO0FBQ2pCQyxRQUFNLEVBQUVDLHlDQURTO0FBRWpCQyxZQUFVLEVBQUVELDhCQUZLO0FBR2pCRSxhQUFXLEVBQUVGLHFDQUhJO0FBSWpCRyxXQUFTLEVBQUVILGNBSk07QUFLakJJLGVBQWEsRUFBRUosMEJBTEU7QUFNakJLLG1CQUFpQixFQUFFTCxlQU5GO0FBT2pCTSxPQUFLLEVBQUVOLDRDQUEyQk87QUFQakIsQ0FBbkI7QUFVQSxNQUFNQyxTQUFTLEdBQUc7QUFDaEJULFFBQU0sRUFBRUMseUNBRFE7QUFFaEJDLFlBQVUsRUFBRUQsOEJBRkk7QUFHaEJFLGFBQVcsRUFBRUYscUNBSEc7QUFJaEJHLFdBQVMsRUFBRUgsY0FKSztBQUtoQkksZUFBYSxFQUFFSiwwQkFMQztBQU1oQkssbUJBQWlCLEVBQUVMLGVBTkg7QUFPaEJNLE9BQUssRUFBRU4sNENBQTJCTztBQVBsQixDQUFsQjtBQVVBLE1BQU1FLE1BQU0sR0FBRyxRQUF3Q1gsU0FBeEMsR0FBcURVLFNBQXBFOztBQUVBLElBQUksQ0FBQ0UsbURBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxNQUFuQixFQUEyQjtBQUN6QkYscURBQVEsQ0FBQ0csYUFBVCxDQUF1QkosTUFBdkI7QUFDRDs7QUFFRCxNQUFNcEIsRUFBRSxHQUFHcUIsbURBQVEsQ0FBQ0ksU0FBVCxFQUFYO0FBQ0EsTUFBTTVELElBQUksR0FBR3dELG1EQUFRLENBQUN4RCxJQUFULEVBQWI7QUFFQTtBQUNldUQscUVBQWYsRTs7Ozs7Ozs7Ozs7O0FDbENBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTyxNQUFNTSxVQUFVLEdBQUcsQ0FDeEI7QUFBRUMsTUFBSSxFQUFFLE9BQVI7QUFBaUJwRSxPQUFLLEVBQUU7QUFBeEIsQ0FEd0IsRUFFeEI7QUFBRW9FLE1BQUksRUFBRSxRQUFSO0FBQWtCcEUsT0FBSyxFQUFFO0FBQXpCLENBRndCLEVBR3hCO0FBQUVvRSxNQUFJLEVBQUUsUUFBUjtBQUFrQnBFLE9BQUssRUFBRTtBQUF6QixDQUh3QixFQUl4QjtBQUFFb0UsTUFBSSxFQUFFLFNBQVI7QUFBbUJwRSxPQUFLLEVBQUU7QUFBMUIsQ0FKd0IsRUFLeEI7QUFBRW9FLE1BQUksRUFBRSxRQUFSO0FBQWtCcEUsT0FBSyxFQUFFO0FBQXpCLENBTHdCLEVBTXhCO0FBQUVvRSxNQUFJLEVBQUUsU0FBUjtBQUFtQnBFLE9BQUssRUFBRTtBQUExQixDQU53QixFQU94QjtBQUFFb0UsTUFBSSxFQUFFLE9BQVI7QUFBaUJwRSxPQUFLLEVBQUU7QUFBeEIsQ0FQd0IsRUFReEI7QUFBRW9FLE1BQUksRUFBRSxRQUFSO0FBQWtCcEUsT0FBSyxFQUFFO0FBQXpCLENBUndCLEVBU3hCO0FBQUVvRSxNQUFJLEVBQUUsVUFBUjtBQUFvQnBFLE9BQUssRUFBRTtBQUEzQixDQVR3QixFQVV4QjtBQUFFb0UsTUFBSSxFQUFFLGNBQVI7QUFBd0JwRSxPQUFLLEVBQUU7QUFBL0IsQ0FWd0IsRUFXeEI7QUFBRW9FLE1BQUksRUFBRSxXQUFSO0FBQXFCcEUsT0FBSyxFQUFFO0FBQTVCLENBWHdCLEVBWXhCO0FBQUVvRSxNQUFJLEVBQUUsU0FBUjtBQUFtQnBFLE9BQUssRUFBRTtBQUExQixDQVp3QixFQWF4QjtBQUFFb0UsTUFBSSxFQUFFLFNBQVI7QUFBbUJwRSxPQUFLLEVBQUU7QUFBMUIsQ0Fid0IsRUFjeEI7QUFBRW9FLE1BQUksRUFBRSxTQUFSO0FBQW1CcEUsT0FBSyxFQUFFO0FBQTFCLENBZHdCLEVBZXhCO0FBQUVvRSxNQUFJLEVBQUUsT0FBUjtBQUFpQnBFLE9BQUssRUFBRTtBQUF4QixDQWZ3QixFQWdCeEI7QUFBRW9FLE1BQUksRUFBRSxZQUFSO0FBQXNCcEUsT0FBSyxFQUFFO0FBQTdCLENBaEJ3QixDQUFuQjtBQW1CQSxNQUFNcUUsVUFBVSxHQUFHLENBQ3hCO0FBQUVELE1BQUksRUFBRSxlQUFSO0FBQXlCcEUsT0FBSyxFQUFFO0FBQWhDLENBRHdCLEVBRXhCO0FBQUVvRSxNQUFJLEVBQUUscUJBQVI7QUFBK0JwRSxPQUFLLEVBQUU7QUFBdEMsQ0FGd0IsRUFHeEI7QUFBRW9FLE1BQUksRUFBRSxrQkFBUjtBQUE0QnBFLE9BQUssRUFBRTtBQUFuQyxDQUh3QixDQUFuQjtBQU1BLE1BQU1zRSxTQUFTLEdBQUcsQ0FDdkI7QUFBRUYsTUFBSSxFQUFFLE1BQVI7QUFBZ0JwRSxPQUFLLEVBQUU7QUFBdkIsQ0FEdUIsRUFFdkI7QUFBRW9FLE1BQUksRUFBRSxXQUFSO0FBQXFCcEUsT0FBSyxFQUFFO0FBQTVCLENBRnVCLEVBR3ZCO0FBQUVvRSxNQUFJLEVBQUUsU0FBUjtBQUFtQnBFLE9BQUssRUFBRTtBQUExQixDQUh1QixFQUl2QjtBQUFFb0UsTUFBSSxFQUFFLFdBQVI7QUFBcUJwRSxPQUFLLEVBQUU7QUFBNUIsQ0FKdUIsRUFLdkI7QUFBRW9FLE1BQUksRUFBRSxNQUFSO0FBQWdCcEUsT0FBSyxFQUFFO0FBQXZCLENBTHVCLEVBTXZCO0FBQUVvRSxNQUFJLEVBQUUsU0FBUjtBQUFtQnBFLE9BQUssRUFBRTtBQUExQixDQU51QixFQU92QjtBQUFFb0UsTUFBSSxFQUFFLFdBQVI7QUFBcUJwRSxPQUFLLEVBQUU7QUFBNUIsQ0FQdUIsRUFRdkI7QUFBRW9FLE1BQUksRUFBRSxRQUFSO0FBQWtCcEUsT0FBSyxFQUFFO0FBQXpCLENBUnVCLEVBU3ZCO0FBQUVvRSxNQUFJLEVBQUUsVUFBUjtBQUFvQnBFLE9BQUssRUFBRTtBQUEzQixDQVR1QixFQVV2QjtBQUFFb0UsTUFBSSxFQUFFLFFBQVI7QUFBa0JwRSxPQUFLLEVBQUU7QUFBekIsQ0FWdUIsRUFXdkI7QUFBRW9FLE1BQUksRUFBRSxRQUFSO0FBQWtCcEUsT0FBSyxFQUFFO0FBQXpCLENBWHVCLEVBWXZCO0FBQUVvRSxNQUFJLEVBQUUsYUFBUjtBQUF1QnBFLE9BQUssRUFBRTtBQUE5QixDQVp1QixFQWF2QjtBQUFFb0UsTUFBSSxFQUFFLFNBQVI7QUFBbUJwRSxPQUFLLEVBQUU7QUFBMUIsQ0FidUIsRUFjdkI7QUFBRW9FLE1BQUksRUFBRSxZQUFSO0FBQXNCcEUsT0FBSyxFQUFFO0FBQTdCLENBZHVCLEVBZXZCO0FBQUVvRSxNQUFJLEVBQUUsV0FBUjtBQUFxQnBFLE9BQUssRUFBRTtBQUE1QixDQWZ1QixFQWdCdkI7QUFBRW9FLE1BQUksRUFBRSxRQUFSO0FBQWtCcEUsT0FBSyxFQUFFO0FBQXpCLENBaEJ1QixFQWlCdkI7QUFBRW9FLE1BQUksRUFBRSxTQUFSO0FBQW1CcEUsT0FBSyxFQUFFO0FBQTFCLENBakJ1QixFQWtCdkI7QUFBRW9FLE1BQUksRUFBRSxTQUFSO0FBQW1CcEUsT0FBSyxFQUFFO0FBQTFCLENBbEJ1QixFQW1CdkI7QUFBRW9FLE1BQUksRUFBRSxTQUFSO0FBQW1CcEUsT0FBSyxFQUFFO0FBQTFCLENBbkJ1QixFQW9CdkI7QUFBRW9FLE1BQUksRUFBRSxTQUFSO0FBQW1CcEUsT0FBSyxFQUFFO0FBQTFCLENBcEJ1QixFQXFCdkI7QUFBRW9FLE1BQUksRUFBRSxRQUFSO0FBQWtCcEUsT0FBSyxFQUFFO0FBQXpCLENBckJ1QixFQXNCdkI7QUFBRW9FLE1BQUksRUFBRSxTQUFSO0FBQW1CcEUsT0FBSyxFQUFFO0FBQTFCLENBdEJ1QixFQXVCdkI7QUFBRW9FLE1BQUksRUFBRSxTQUFSO0FBQW1CcEUsT0FBSyxFQUFFO0FBQTFCLENBdkJ1QixFQXdCdkI7QUFBRW9FLE1BQUksRUFBRSxTQUFSO0FBQW1CcEUsT0FBSyxFQUFFO0FBQTFCLENBeEJ1QixFQXlCdkI7QUFBRW9FLE1BQUksRUFBRSxVQUFSO0FBQW9CcEUsT0FBSyxFQUFFO0FBQTNCLENBekJ1QixFQTBCdkI7QUFBRW9FLE1BQUksRUFBRSxVQUFSO0FBQW9CcEUsT0FBSyxFQUFFO0FBQTNCLENBMUJ1QixFQTJCdkI7QUFBRW9FLE1BQUksRUFBRSxNQUFSO0FBQWdCcEUsT0FBSyxFQUFFO0FBQXZCLENBM0J1QixFQTRCdkI7QUFBRW9FLE1BQUksRUFBRSxPQUFSO0FBQWlCcEUsT0FBSyxFQUFFO0FBQXhCLENBNUJ1QixFQTZCdkI7QUFBRW9FLE1BQUksRUFBRSxxQkFBUjtBQUErQnBFLE9BQUssRUFBRTtBQUF0QyxDQTdCdUIsRUE4QnZCO0FBQUVvRSxNQUFJLEVBQUUsU0FBUjtBQUFtQnBFLE9BQUssRUFBRTtBQUExQixDQTlCdUIsRUErQnZCO0FBQUVvRSxNQUFJLEVBQUUsT0FBUjtBQUFpQnBFLE9BQUssRUFBRTtBQUF4QixDQS9CdUIsRUFnQ3ZCO0FBQUVvRSxNQUFJLEVBQUUsUUFBUjtBQUFrQnBFLE9BQUssRUFBRTtBQUF6QixDQWhDdUIsRUFpQ3ZCO0FBQUVvRSxNQUFJLEVBQUUsUUFBUjtBQUFrQnBFLE9BQUssRUFBRTtBQUF6QixDQWpDdUIsRUFrQ3ZCO0FBQUVvRSxNQUFJLEVBQUUsUUFBUjtBQUFrQnBFLE9BQUssRUFBRTtBQUF6QixDQWxDdUIsRUFtQ3ZCO0FBQUVvRSxNQUFJLEVBQUUsV0FBUjtBQUFxQnBFLE9BQUssRUFBRTtBQUE1QixDQW5DdUIsRUFvQ3ZCO0FBQUVvRSxNQUFJLEVBQUUsS0FBUjtBQUFlcEUsT0FBSyxFQUFFO0FBQXRCLENBcEN1QixFQXFDdkI7QUFBRW9FLE1BQUksRUFBRSxPQUFSO0FBQWlCcEUsT0FBSyxFQUFFO0FBQXhCLENBckN1QixFQXNDdkI7QUFBRW9FLE1BQUksRUFBRSxTQUFSO0FBQW1CcEUsT0FBSyxFQUFFO0FBQTFCLENBdEN1QixFQXVDdkI7QUFBRW9FLE1BQUksRUFBRSxXQUFSO0FBQXFCcEUsT0FBSyxFQUFFO0FBQTVCLENBdkN1QixFQXdDdkI7QUFBRW9FLE1BQUksRUFBRSxTQUFSO0FBQW1CcEUsT0FBSyxFQUFFO0FBQTFCLENBeEN1QixFQXlDdkI7QUFBRW9FLE1BQUksRUFBRSxVQUFSO0FBQW9CcEUsT0FBSyxFQUFFO0FBQTNCLENBekN1QixFQTBDdkI7QUFBRW9FLE1BQUksRUFBRSxRQUFSO0FBQWtCcEUsT0FBSyxFQUFFO0FBQXpCLENBMUN1QixFQTJDdkI7QUFBRW9FLE1BQUksRUFBRSxTQUFSO0FBQW1CcEUsT0FBSyxFQUFFO0FBQTFCLENBM0N1QixFQTRDdkI7QUFBRW9FLE1BQUksRUFBRSxPQUFSO0FBQWlCcEUsT0FBSyxFQUFFO0FBQXhCLENBNUN1QixFQTZDdkI7QUFBRW9FLE1BQUksRUFBRSxTQUFSO0FBQW1CcEUsT0FBSyxFQUFFO0FBQTFCLENBN0N1QixFQThDdkI7QUFBRW9FLE1BQUksRUFBRSxRQUFSO0FBQWtCcEUsT0FBSyxFQUFFO0FBQXpCLENBOUN1QixFQStDdkI7QUFBRW9FLE1BQUksRUFBRSxTQUFSO0FBQW1CcEUsT0FBSyxFQUFFO0FBQTFCLENBL0N1QixFQWdEdkI7QUFBRW9FLE1BQUksRUFBRSxRQUFSO0FBQWtCcEUsT0FBSyxFQUFFO0FBQXpCLENBaER1QixFQWlEdkI7QUFBRW9FLE1BQUksRUFBRSxpQkFBUjtBQUEyQnBFLE9BQUssRUFBRTtBQUFsQyxDQWpEdUIsRUFrRHZCO0FBQUVvRSxNQUFJLEVBQUUsT0FBUjtBQUFpQnBFLE9BQUssRUFBRTtBQUF4QixDQWxEdUIsRUFtRHZCO0FBQUVvRSxNQUFJLEVBQUUsaUJBQVI7QUFBMkJwRSxPQUFLLEVBQUU7QUFBbEMsQ0FuRHVCLEVBb0R2QjtBQUFFb0UsTUFBSSxFQUFFLFVBQVI7QUFBb0JwRSxPQUFLLEVBQUU7QUFBM0IsQ0FwRHVCLEVBcUR2QjtBQUFFb0UsTUFBSSxFQUFFLFNBQVI7QUFBbUJwRSxPQUFLLEVBQUU7QUFBMUIsQ0FyRHVCLEVBc0R2QjtBQUFFb0UsTUFBSSxFQUFFLFVBQVI7QUFBb0JwRSxPQUFLLEVBQUU7QUFBM0IsQ0F0RHVCLEVBdUR2QjtBQUFFb0UsTUFBSSxFQUFFLE1BQVI7QUFBZ0JwRSxPQUFLLEVBQUU7QUFBdkIsQ0F2RHVCLEVBd0R2QjtBQUFFb0UsTUFBSSxFQUFFLE9BQVI7QUFBaUJwRSxPQUFLLEVBQUU7QUFBeEIsQ0F4RHVCLEVBeUR2QjtBQUFFb0UsTUFBSSxFQUFFLFFBQVI7QUFBa0JwRSxPQUFLLEVBQUU7QUFBekIsQ0F6RHVCLEVBMER2QjtBQUFFb0UsTUFBSSxFQUFFLE9BQVI7QUFBaUJwRSxPQUFLLEVBQUU7QUFBeEIsQ0ExRHVCLEVBMkR2QjtBQUFFb0UsTUFBSSxFQUFFLFdBQVI7QUFBcUJwRSxPQUFLLEVBQUU7QUFBNUIsQ0EzRHVCLEVBNER2QjtBQUFFb0UsTUFBSSxFQUFFLFVBQVI7QUFBb0JwRSxPQUFLLEVBQUU7QUFBM0IsQ0E1RHVCLEVBNkR2QjtBQUFFb0UsTUFBSSxFQUFFLFNBQVI7QUFBbUJwRSxPQUFLLEVBQUU7QUFBMUIsQ0E3RHVCLEVBOER2QjtBQUFFb0UsTUFBSSxFQUFFLFdBQVI7QUFBcUJwRSxPQUFLLEVBQUU7QUFBNUIsQ0E5RHVCLEVBK0R2QjtBQUFFb0UsTUFBSSxFQUFFLFVBQVI7QUFBb0JwRSxPQUFLLEVBQUU7QUFBM0IsQ0EvRHVCLEVBZ0V2QjtBQUFFb0UsTUFBSSxFQUFFLFFBQVI7QUFBa0JwRSxPQUFLLEVBQUU7QUFBekIsQ0FoRXVCLEVBaUV2QjtBQUFFb0UsTUFBSSxFQUFFLGFBQVI7QUFBdUJwRSxPQUFLLEVBQUU7QUFBOUIsQ0FqRXVCLEVBa0V2QjtBQUFFb0UsTUFBSSxFQUFFLFlBQVI7QUFBc0JwRSxPQUFLLEVBQUU7QUFBN0IsQ0FsRXVCLEVBbUV2QjtBQUFFb0UsTUFBSSxFQUFFLGFBQVI7QUFBdUJwRSxPQUFLLEVBQUU7QUFBOUIsQ0FuRXVCLEVBb0V2QjtBQUFFb0UsTUFBSSxFQUFFLE1BQVI7QUFBZ0JwRSxPQUFLLEVBQUU7QUFBdkIsQ0FwRXVCLEVBcUV2QjtBQUFFb0UsTUFBSSxFQUFFLFlBQVI7QUFBc0JwRSxPQUFLLEVBQUU7QUFBN0IsQ0FyRXVCLEVBc0V2QjtBQUFFb0UsTUFBSSxFQUFFLFNBQVI7QUFBbUJwRSxPQUFLLEVBQUU7QUFBMUIsQ0F0RXVCLEVBdUV2QjtBQUFFb0UsTUFBSSxFQUFFLEtBQVI7QUFBZXBFLE9BQUssRUFBRTtBQUF0QixDQXZFdUIsRUF3RXZCO0FBQUVvRSxNQUFJLEVBQUUsV0FBUjtBQUFxQnBFLE9BQUssRUFBRTtBQUE1QixDQXhFdUIsRUF5RXZCO0FBQUVvRSxNQUFJLEVBQUUsU0FBUjtBQUFtQnBFLE9BQUssRUFBRTtBQUExQixDQXpFdUIsRUEwRXZCO0FBQUVvRSxNQUFJLEVBQUUsV0FBUjtBQUFxQnBFLE9BQUssRUFBRTtBQUE1QixDQTFFdUIsRUEyRXZCO0FBQUVvRSxNQUFJLEVBQUUsVUFBUjtBQUFvQnBFLE9BQUssRUFBRTtBQUEzQixDQTNFdUIsRUE0RXZCO0FBQUVvRSxNQUFJLEVBQUUsVUFBUjtBQUFvQnBFLE9BQUssRUFBRTtBQUEzQixDQTVFdUIsRUE2RXZCO0FBQUVvRSxNQUFJLEVBQUUsVUFBUjtBQUFvQnBFLE9BQUssRUFBRTtBQUEzQixDQTdFdUIsRUE4RXZCO0FBQUVvRSxNQUFJLEVBQUUsT0FBUjtBQUFpQnBFLE9BQUssRUFBRTtBQUF4QixDQTlFdUIsRUErRXZCO0FBQUVvRSxNQUFJLEVBQUUsUUFBUjtBQUFrQnBFLE9BQUssRUFBRTtBQUF6QixDQS9FdUIsRUFnRnZCO0FBQUVvRSxNQUFJLEVBQUUsVUFBUjtBQUFvQnBFLE9BQUssRUFBRTtBQUEzQixDQWhGdUIsRUFpRnZCO0FBQUVvRSxNQUFJLEVBQUUsUUFBUjtBQUFrQnBFLE9BQUssRUFBRTtBQUF6QixDQWpGdUIsRUFrRnZCO0FBQUVvRSxNQUFJLEVBQUUsYUFBUjtBQUF1QnBFLE9BQUssRUFBRTtBQUE5QixDQWxGdUIsRUFtRnZCO0FBQUVvRSxNQUFJLEVBQUUsT0FBUjtBQUFpQnBFLE9BQUssRUFBRTtBQUF4QixDQW5GdUIsRUFvRnZCO0FBQUVvRSxNQUFJLEVBQUUsU0FBUjtBQUFtQnBFLE9BQUssRUFBRTtBQUExQixDQXBGdUIsRUFxRnZCO0FBQUVvRSxNQUFJLEVBQUUsUUFBUjtBQUFrQnBFLE9BQUssRUFBRTtBQUF6QixDQXJGdUIsRUFzRnZCO0FBQUVvRSxNQUFJLEVBQUUsUUFBUjtBQUFrQnBFLE9BQUssRUFBRTtBQUF6QixDQXRGdUIsRUF1RnZCO0FBQUVvRSxNQUFJLEVBQUUsVUFBUjtBQUFvQnBFLE9BQUssRUFBRTtBQUEzQixDQXZGdUIsRUF3RnZCO0FBQUVvRSxNQUFJLEVBQUUsU0FBUjtBQUFtQnBFLE9BQUssRUFBRTtBQUExQixDQXhGdUIsRUF5RnZCO0FBQUVvRSxNQUFJLEVBQUUsTUFBUjtBQUFnQnBFLE9BQUssRUFBRTtBQUF2QixDQXpGdUIsRUEwRnZCO0FBQUVvRSxNQUFJLEVBQUUsU0FBUjtBQUFtQnBFLE9BQUssRUFBRTtBQUExQixDQTFGdUIsRUEyRnZCO0FBQUVvRSxNQUFJLEVBQUUsU0FBUjtBQUFtQnBFLE9BQUssRUFBRTtBQUExQixDQTNGdUIsRUE0RnZCO0FBQUVvRSxNQUFJLEVBQUUsT0FBUjtBQUFpQnBFLE9BQUssRUFBRTtBQUF4QixDQTVGdUIsRUE2RnZCO0FBQUVvRSxNQUFJLEVBQUUsZUFBUjtBQUF5QnBFLE9BQUssRUFBRTtBQUFoQyxDQTdGdUIsRUE4RnZCO0FBQUVvRSxNQUFJLEVBQUUsT0FBUjtBQUFpQnBFLE9BQUssRUFBRTtBQUF4QixDQTlGdUIsRUErRnZCO0FBQUVvRSxNQUFJLEVBQUUsWUFBUjtBQUFzQnBFLE9BQUssRUFBRTtBQUE3QixDQS9GdUIsRUFnR3ZCO0FBQUVvRSxNQUFJLEVBQUUsU0FBUjtBQUFtQnBFLE9BQUssRUFBRTtBQUExQixDQWhHdUIsRUFpR3ZCO0FBQUVvRSxNQUFJLEVBQUUsS0FBUjtBQUFlcEUsT0FBSyxFQUFFO0FBQXRCLENBakd1QixFQWtHdkI7QUFBRW9FLE1BQUksRUFBRSxZQUFSO0FBQXNCcEUsT0FBSyxFQUFFO0FBQTdCLENBbEd1QixFQW1HdkI7QUFBRW9FLE1BQUksRUFBRSxNQUFSO0FBQWdCcEUsT0FBSyxFQUFFO0FBQXZCLENBbkd1QixFQW9HdkI7QUFBRW9FLE1BQUksRUFBRSxTQUFSO0FBQW1CcEUsT0FBSyxFQUFFO0FBQTFCLENBcEd1QixFQXFHdkI7QUFBRW9FLE1BQUksRUFBRSxVQUFSO0FBQW9CcEUsT0FBSyxFQUFFO0FBQTNCLENBckd1QixFQXNHdkI7QUFBRW9FLE1BQUksRUFBRSxhQUFSO0FBQXVCcEUsT0FBSyxFQUFFO0FBQTlCLENBdEd1QixFQXVHdkI7QUFBRW9FLE1BQUksRUFBRSxPQUFSO0FBQWlCcEUsT0FBSyxFQUFFO0FBQXhCLENBdkd1QixFQXdHdkI7QUFBRW9FLE1BQUksRUFBRSxZQUFSO0FBQXNCcEUsT0FBSyxFQUFFO0FBQTdCLENBeEd1QixFQXlHdkI7QUFBRW9FLE1BQUksRUFBRSxXQUFSO0FBQXFCcEUsT0FBSyxFQUFFO0FBQTVCLENBekd1QixFQTBHdkI7QUFBRW9FLE1BQUksRUFBRSxXQUFSO0FBQXFCcEUsT0FBSyxFQUFFO0FBQTVCLENBMUd1QixFQTJHdkI7QUFBRW9FLE1BQUksRUFBRSxXQUFSO0FBQXFCcEUsT0FBSyxFQUFFO0FBQTVCLENBM0d1QixFQTRHdkI7QUFBRW9FLE1BQUksRUFBRSxTQUFSO0FBQW1CcEUsT0FBSyxFQUFFO0FBQTFCLENBNUd1QixFQTZHdkI7QUFBRW9FLE1BQUksRUFBRSxPQUFSO0FBQWlCcEUsT0FBSyxFQUFFO0FBQXhCLENBN0d1QixFQThHdkI7QUFBRW9FLE1BQUksRUFBRSxTQUFSO0FBQW1CcEUsT0FBSyxFQUFFO0FBQTFCLENBOUd1QixFQStHdkI7QUFBRW9FLE1BQUksRUFBRSxTQUFSO0FBQW1CcEUsT0FBSyxFQUFFO0FBQTFCLENBL0d1QixFQWdIdkI7QUFBRW9FLE1BQUksRUFBRSxPQUFSO0FBQWlCcEUsT0FBSyxF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LEVBQUU7QUFBdkIsQ0EzTHVCLENBQWxCO0FBOExBLE1BQU11RSxNQUFNLEdBQUcsQ0FDcEI7QUFBRUgsTUFBSSxFQUFFLGFBQVI7QUFBdUJwRSxPQUFLLEVBQUU7QUFBOUIsQ0FEb0IsRUFFcEI7QUFBRW9FLE1BQUksRUFBRSxXQUFSO0FBQXFCcEUsT0FBSyxFQUFFO0FBQTVCLENBRm9CLEVBR3BCO0FBQUVvRSxNQUFJLEVBQUUsV0FBUjtBQUFxQnBFLE9BQUssRUFBRTtBQUE1QixDQUhvQixDQUFmLEMsQ0FNUDs7QUFDTyxNQUFNOEMsV0FBVyxHQUFHLGFBQXBCO0FBQ0EsTUFBTTBCLEtBQUssR0FBRyxPQUFkO0FBQ0EsTUFBTUMsT0FBTyxHQUFHLFVBQWhCLEM7Ozs7Ozs7Ozs7O0FDaE9QLHlDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLHdDIiwiZmlsZSI6InBhZ2VzL2F1dGguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2F1dGguanNcIik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBMb2dpbiA9ICh7XHJcbiAgZW1haWwsXHJcbiAgcGFzc3dvcmQsXHJcbiAgaGFuZGxlQ2xpY2ssXHJcbiAgc2V0UGFzc3dvcmQsXHJcbiAgc2V0RW1haWwsXHJcbiAgc2lnbmluLFxyXG59KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXItYXV0aFwiPlxyXG4gICAgICA8aDI+V2VsY29tZSBiYWNrIHRvIEtyb25pa2VhPC9oMj5cclxuICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiYXV0aC1mb3JtXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+RW1haWwgYWRkcmVzczwvbGFiZWw+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWlucHV0XCJcclxuICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwX19pY29uXCI+XHJcbiAgICAgICAgICAgICAgPGlvbi1pY29uIG5hbWU9XCJtYWlsXCI+PC9pb24taWNvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWlucHV0XCJcclxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwX19pY29uXCI+XHJcbiAgICAgICAgICAgICAgPGlvbi1pY29uIG5hbWU9XCJrZXlcIj48L2lvbi1pY29uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4tYnRuIGN1c3RvbS1idG5cIiBvbkNsaWNrPXtzaWduaW59PlxyXG4gICAgICAgICAgPHNwYW4+TG9naW48L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICAgPHAgb25DbGljaz17aGFuZGxlQ2xpY2t9PkRvbid0IGhhdmUgYW4gYWNjb3VudCB5ZXQgPyBSZWdpc3RlciBoZXJlPC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBSZWdpc3RlciA9ICh7IGhhbmRsZUNsaWNrIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lci1hdXRoXCI+XHJcbiAgICAgIDxoMj5XZWxjb21lIHRvIEtyb25pa2VhPC9oMj5cclxuICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiYXV0aC1mb3JtXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+RW1haWwgYWRkcmVzczwvbGFiZWw+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWlucHV0XCIgdHlwZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBfX2ljb25cIj5cclxuICAgICAgICAgICAgICA8aW9uLWljb24gbmFtZT1cIm1haWxcIj48L2lvbi1pY29uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPlVzZXJuYW1lPC9sYWJlbD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0taW5wdXRcIiB0eXBlPVwidGV4dFwiIGlkPVwidXNlcm5hbWVcIiAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwX19pY29uXCI+XHJcbiAgICAgICAgICAgICAgPGlvbi1pY29uIG5hbWU9XCJwZXJzb25cIj48L2lvbi1pY29uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0taW5wdXRcIiB0eXBlPVwicGFzc3dvcmRcIiBpZD1cInBhc3N3b3JkXCIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cF9faWNvblwiPlxyXG4gICAgICAgICAgICAgIDxpb24taWNvbiBuYW1lPVwia2V5XCI+PC9pb24taWNvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY29uZmlybS1wYXNzd29yZFwiPkNvbmZpcm0gUGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWlucHV0XCJcclxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIGlkPVwiY29uZmlybS1wYXNzd29yZFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBfX2ljb25cIj5cclxuICAgICAgICAgICAgICA8aW9uLWljb24gbmFtZT1cImtleVwiPjwvaW9uLWljb24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbi1idG4gY3VzdG9tLWJ0blwiPlxyXG4gICAgICAgICAgPHNwYW4+Q3JlYXRlIGFjY291bnQ8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICAgPHAgb25DbGljaz17aGFuZGxlQ2xpY2t9PkFscmVhZHkgaGF2ZSBhbiBhY2NvdW50ID8gTG9naW4gaGVyZTwvcD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RlcjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQsIGNyZWF0ZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgYXV0aCB9IGZyb20gXCIuLi9yZWR1eC9mYkNvbmZpZ1wiO1xyXG5cclxuY29uc3QgYXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUHJvdmlkZUF1dGgoeyBjaGlsZHJlbiB9KSB7XHJcbiAgY29uc3QgYXV0aCA9IHVzZVByb3ZpZGVBdXRoKCk7XHJcbiAgcmV0dXJuIDxhdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17YXV0aH0+e2NoaWxkcmVufTwvYXV0aENvbnRleHQuUHJvdmlkZXI+O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXNlQXV0aCA9ICgpID0+IHtcclxuICByZXR1cm4gdXNlQ29udGV4dChhdXRoQ29udGV4dCk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiB1c2VQcm92aWRlQXV0aCgpIHtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgLy8gV3JhcCBhbnkgRmlyZWJhc2UgbWV0aG9kcyB3ZSB3YW50IHRvIHVzZSBtYWtpbmcgc3VyZSAuLi5cclxuICAvLyAuLi4gdG8gc2F2ZSB0aGUgdXNlciB0byBzdGF0ZS5cclxuICBjb25zdCBzaWduaW4gPSAoZW1haWwsIHBhc3N3b3JkKSA9PiB7XHJcbiAgICByZXR1cm4gYXV0aC5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHNldFVzZXIocmVzcG9uc2UudXNlcik7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS51c2VyO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2lnbnVwID0gKGVtYWlsLCBwYXNzd29yZCkgPT4ge1xyXG4gICAgcmV0dXJuIGF1dGhcclxuICAgICAgLmNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHNldFVzZXIocmVzcG9uc2UudXNlcik7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnVzZXI7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNpZ25vdXQgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gYXV0aC5zaWduT3V0KCkudGhlbigoKSA9PiB7XHJcbiAgICAgIHNldFVzZXIoZmFsc2UpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2VuZFBhc3N3b3JkUmVzZXRFbWFpbCA9IChlbWFpbCkgPT4ge1xyXG4gICAgcmV0dXJuIGF1dGguc2VuZFBhc3N3b3JkUmVzZXRFbWFpbChlbWFpbCkudGhlbigoKSA9PiB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY29uZmlybVBhc3N3b3JkUmVzZXQgPSAoY29kZSwgcGFzc3dvcmQpID0+IHtcclxuICAgIHJldHVybiBhdXRoLmNvbmZpcm1QYXNzd29yZFJlc2V0KGNvZGUsIHBhc3N3b3JkKS50aGVuKCgpID0+IHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdW5zdWJzY3JpYmUgPSBhdXRoLm9uQXV0aFN0YXRlQ2hhbmdlZCgodXNlcikgPT4ge1xyXG4gICAgICBpZiAodXNlcikge1xyXG4gICAgICAgIHNldFVzZXIodXNlcik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0VXNlcihmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIENsZWFudXAgc3Vic2NyaXB0aW9uIG9uIHVubW91bnRcclxuICAgIHJldHVybiAoKSA9PiB1bnN1YnNjcmliZSgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgLy8gUmV0dXJuIHRoZSB1c2VyIG9iamVjdCBhbmQgYXV0aCBtZXRob2RzXHJcbiAgcmV0dXJuIHtcclxuICAgIHVzZXIsXHJcbiAgICBzaWduaW4sXHJcbiAgICBzaWdudXAsXHJcbiAgICBzaWdub3V0LFxyXG4gICAgc2VuZFBhc3N3b3JkUmVzZXRFbWFpbCxcclxuICAgIGNvbmZpcm1QYXNzd29yZFJlc2V0LFxyXG4gIH07XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSZWFjdENhcmRGbGlwIGZyb20gXCJyZWFjdC1jYXJkLWZsaXBcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuaW1wb3J0IExvZ2luIGZyb20gXCIuLi9jb21wb25lbnRzL2F1dGgvTG9naW5cIjtcclxuaW1wb3J0IFJlZ2lzdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2F1dGgvUmVnaXN0ZXJcIjtcclxuaW1wb3J0IHsgbG9nX2luIH0gZnJvbSBcIi4uL3JlZHV4L2FjdGlvbnMvdXNlckFjdGlvbnNcIjtcclxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gXCIuLi9ob29rcy91c2VySG9va3NcIjtcclxuXHJcbmNvbnN0IGF1dGggPSAoeyBsb2dfaW4gfSkgPT4ge1xyXG4gIGNvbnN0IFtpc0ZsaXBwZWQsIHNldElzRmxpcHBlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2NvbmZpcm1QYXNzd29yZCwgc2V0Q29uZmlybVBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IGF1dGggPSB1c2VBdXRoKCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldElzRmxpcHBlZCghaXNGbGlwcGVkKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzaWduaW4gPSAoKSA9PiBsb2dfaW4oZW1haWwsIHBhc3N3b3JkKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYXV0aGVudGljYXRpb25cIj5cclxuICAgICAgPFJlYWN0Q2FyZEZsaXAgaXNGbGlwcGVkPXtpc0ZsaXBwZWR9IGZsaXBEaXJlY3Rpb249XCJob3Jpem9udGFsXCI+XHJcbiAgICAgICAgPExvZ2luXHJcbiAgICAgICAgICBzaWduaW49e3NpZ25pbn1cclxuICAgICAgICAgIHNldFBhc3N3b3JkPXtzZXRQYXNzd29yZH1cclxuICAgICAgICAgIHNldEVtYWlsPXtzZXRFbWFpbH1cclxuICAgICAgICAgIGVtYWlsPXtlbWFpbH1cclxuICAgICAgICAgIHBhc3N3b3JkPXtwYXNzd29yZH1cclxuICAgICAgICAgIGhhbmRsZUNsaWNrPXtoYW5kbGVDbGlja31cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxSZWdpc3RlciBoYW5kbGVDbGljaz17aGFuZGxlQ2xpY2t9IC8+XHJcbiAgICAgIDwvUmVhY3RDYXJkRmxpcD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7fSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgeyBsb2dfaW4gfSkoYXV0aCk7XHJcbiIsImltcG9ydCB7IGRiLCBhdXRoIH0gZnJvbSBcIi4uL2ZiQ29uZmlnXCI7XHJcblxyXG5pbXBvcnQgeyBHRVRfUFJPRklMRSB9IGZyb20gXCIuLi8uLi91dGlscy9jb25zdGFudHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dfaW4gPSAoZW1haWwsIHBhc3N3b3JkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBjb25zb2xlLmxvZyhlbWFpbCwgcGFzc3dvcmQpO1xyXG4gIGF1dGguc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRQcm9maWxlID0gKCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGIuY29sbGVjdGlvbihcInVzZXJzXCIpXHJcbiAgICAuZG9jKFwiMEs5Rk8zS3RDWk9tMlZDSXRacnNzVEo4eGJFM1wiKVxyXG4gICAgLm9uU25hcHNob3QoKGRvYykgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImNvdWNvdVwiKTtcclxuICAgICAgcmV0dXJuIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiBHRVRfUFJPRklMRSxcclxuICAgICAgICBwYXlsb2FkOiB7IGlkOiBkb2MuaWQsIC4uLmRvYy5kYXRhKCkgfSxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuIiwiaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcclxuaW1wb3J0IFwiZmlyZWJhc2UvYXV0aFwiO1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcclxuXHJcbmNvbnN0IHByb2RDb25maWcgPSB7XHJcbiAgYXBpS2V5OiBwcm9jZXNzLmVudi5GSVJFQkFTRV9BUElfS0VZLFxyXG4gIGF1dGhEb21haW46IHByb2Nlc3MuZW52LkZJUkVCQVNFX0FVVEhfRE9NQUlOLFxyXG4gIGRhdGFiYXNlVVJMOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9EQVRBQkFTRV9VUkwsXHJcbiAgcHJvamVjdElkOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9QUk9KRUNUX0lELFxyXG4gIHN0b3JhZ2VCdWNrZXQ6IHByb2Nlc3MuZW52LkZJUkVCQVNFX1NUT1JBR0VfQlVDS0VULFxyXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9NRVNTQUdJTkdfU0VOREVSX0lELFxyXG4gIGFwcElkOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9BUFBfSUQsXHJcbn07XHJcblxyXG5jb25zdCBkZXZDb25maWcgPSB7XHJcbiAgYXBpS2V5OiBwcm9jZXNzLmVudi5GSVJFQkFTRV9BUElfS0VZLFxyXG4gIGF1dGhEb21haW46IHByb2Nlc3MuZW52LkZJUkVCQVNFX0FVVEhfRE9NQUlOLFxyXG4gIGRhdGFiYXNlVVJMOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9EQVRBQkFTRV9VUkwsXHJcbiAgcHJvamVjdElkOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9QUk9KRUNUX0lELFxyXG4gIHN0b3JhZ2VCdWNrZXQ6IHByb2Nlc3MuZW52LkZJUkVCQVNFX1NUT1JBR0VfQlVDS0VULFxyXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9NRVNTQUdJTkdfU0VOREVSX0lELFxyXG4gIGFwcElkOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9BUFBfSUQsXHJcbn07XHJcblxyXG5jb25zdCBjb25maWcgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBwcm9kQ29uZmlnIDogZGV2Q29uZmlnO1xyXG5cclxuaWYgKCFmaXJlYmFzZS5hcHBzLmxlbmd0aCkge1xyXG4gIGZpcmViYXNlLmluaXRpYWxpemVBcHAoY29uZmlnKTtcclxufVxyXG5cclxuY29uc3QgZGIgPSBmaXJlYmFzZS5maXJlc3RvcmUoKTtcclxuY29uc3QgYXV0aCA9IGZpcmViYXNlLmF1dGgoKTtcclxuXHJcbmV4cG9ydCB7IGRiLCBhdXRoIH07XHJcbmV4cG9ydCBkZWZhdWx0IGNvbmZpZztcclxuIiwiZXhwb3J0IGNvbnN0IENBVEVHT1JJRVMgPSBbXHJcbiAgeyBuYW1lOiBcIkRyYW1hXCIsIHZhbHVlOiBcImRyYW1hXCIgfSxcclxuICB7IG5hbWU6IFwiQ29tZWR5XCIsIHZhbHVlOiBcImNvbWVkeVwiIH0sXHJcbiAgeyBuYW1lOiBcIkhvcnJvclwiLCB2YWx1ZTogXCJob3Jyb3JcIiB9LFxyXG4gIHsgbmFtZTogXCJSb21hbmNlXCIsIHZhbHVlOiBcInJvbWFuY2VcIiB9LFxyXG4gIHsgbmFtZTogXCJTY2ktZmlcIiwgdmFsdWU6IFwic2NpLWZpXCIgfSxcclxuICB7IG5hbWU6IFwiRmFudGFzeVwiLCB2YWx1ZTogXCJmYW50YXN5XCIgfSxcclxuICB7IG5hbWU6IFwiSHVtb3JcIiwgdmFsdWU6IFwiaHVtb3JcIiB9LFxyXG4gIHsgbmFtZTogXCJBY3Rpb25cIiwgdmFsdWU6IFwiYWN0aW9uXCIgfSxcclxuICB7IG5hbWU6IFwiVGhyaWxsZXJcIiwgdmFsdWU6IFwidGhyaWxsZXJcIiB9LFxyXG4gIHsgbmFtZTogXCJTdXBlcm5hdHVyYWxcIiwgdmFsdWU6IFwic3VwZXJuYXR1cmFsXCIgfSxcclxuICB7IG5hbWU6IFwiQWR2ZW50dXJlXCIsIHZhbHVlOiBcImFkdmVudHVyZVwiIH0sXHJcbiAgeyBuYW1lOiBcIk15c3RlcnlcIiwgdmFsdWU6IFwibXlzdGVyeVwiIH0sXHJcbiAgeyBuYW1lOiBcIldlc3Rlcm5cIiwgdmFsdWU6IFwid2VzdGVyblwiIH0sXHJcbiAgeyBuYW1lOiBcIkhpc3RvcnlcIiwgdmFsdWU6IFwiaGlzdG9yeVwiIH0sXHJcbiAgeyBuYW1lOiBcIkNyaW1lXCIsIHZhbHVlOiBcImNyaW1lXCIgfSxcclxuICB7IG5hbWU6IFwiRmFuZmljdGlvblwiLCB2YWx1ZTogXCJmYW5maWN0aW9uXCIgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBDT1BZUklHSFRTID0gW1xyXG4gIHsgbmFtZTogXCJQdWJsaWMgRG9tYWluXCIsIHZhbHVlOiBcInB1YmxpYyBkb21haW5cIiB9LFxyXG4gIHsgbmFtZTogXCJBbGwgUmlnaHRzIFJlc2VydmVkXCIsIHZhbHVlOiBcImFsbCByaWdodHMgcmVzZXJ2ZWRcIiB9LFxyXG4gIHsgbmFtZTogXCJDcmVhdGl2ZSBDb21tb25zXCIsIHZhbHVlOiBcImNyZWF0aXZlIGNvbW1vbnNcIiB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IExBTkdVQUdFUyA9IFtcclxuICB7IG5hbWU6IFwiQWZhclwiLCB2YWx1ZTogXCJhYVwiIH0sXHJcbiAgeyBuYW1lOiBcIkFia2hhemlhblwiLCB2YWx1ZTogXCJhYlwiIH0sXHJcbiAgeyBuYW1lOiBcIkF2ZXN0YW5cIiwgdmFsdWU6IFwiYWVcIiB9LFxyXG4gIHsgbmFtZTogXCJBZnJpa2FhbnNcIiwgdmFsdWU6IFwiYWZcIiB9LFxyXG4gIHsgbmFtZTogXCJBa2FuXCIsIHZhbHVlOiBcImFrXCIgfSxcclxuICB7IG5hbWU6IFwiQW1oYXJpY1wiLCB2YWx1ZTogXCJhbVwiIH0sXHJcbiAgeyBuYW1lOiBcIkFyYWdvbmVzZVwiLCB2YWx1ZTogXCJhblwiIH0sXHJcbiAgeyBuYW1lOiBcIkFyYWJpY1wiLCB2YWx1ZTogXCJhclwiIH0sXHJcbiAgeyBuYW1lOiBcIkFzc2FtZXNlXCIsIHZhbHVlOiBcImFzXCIgfSxcclxuICB7IG5hbWU6IFwiQXZhcmljXCIsIHZhbHVlOiBcImF2XCIgfSxcclxuICB7IG5hbWU6IFwiQXltYXJhXCIsIHZhbHVlOiBcImF5XCIgfSxcclxuICB7IG5hbWU6IFwiQXplcmJhaWphbmlcIiwgdmFsdWU6IFwiYXpcIiB9LFxyXG4gIHsgbmFtZTogXCJCYXNoa2lyXCIsIHZhbHVlOiBcImJhXCIgfSxcclxuICB7IG5hbWU6IFwiQmVsYXJ1c2lhblwiLCB2YWx1ZTogXCJiZVwiIH0sXHJcbiAgeyBuYW1lOiBcIkJ1bGdhcmlhblwiLCB2YWx1ZTogXCJiZ1wiIH0sXHJcbiAgeyBuYW1lOiBcIkJpaGFyaVwiLCB2YWx1ZTogXCJiaFwiIH0sXHJcbiAgeyBuYW1lOiBcIkJpc2xhbWFcIiwgdmFsdWU6IFwiYmlcIiB9LFxyXG4gIHsgbmFtZTogXCJCYW1iYXJhXCIsIHZhbHVlOiBcImJtXCIgfSxcclxuICB7IG5hbWU6IFwiQmVuZ2FsaVwiLCB2YWx1ZTogXCJiblwiIH0sXHJcbiAgeyBuYW1lOiBcIlRpYmV0YW5cIiwgdmFsdWU6IFwiYm9cIiB9LFxyXG4gIHsgbmFtZTogXCJCcmV0b25cIiwgdmFsdWU6IFwiYnJcIiB9LFxyXG4gIHsgbmFtZTogXCJCb3NuaWFuXCIsIHZhbHVlOiBcImJzXCIgfSxcclxuICB7IG5hbWU6IFwiQ2F0YWxhblwiLCB2YWx1ZTogXCJjYVwiIH0sXHJcbiAgeyBuYW1lOiBcIkNoZWNoZW5cIiwgdmFsdWU6IFwiY2VcIiB9LFxyXG4gIHsgbmFtZTogXCJDaGFtb3Jyb1wiLCB2YWx1ZTogXCJjaFwiIH0sXHJcbiAgeyBuYW1lOiBcIkNvcnNpY2FuXCIsIHZhbHVlOiBcImNvXCIgfSxcclxuICB7IG5hbWU6IFwiQ3JlZVwiLCB2YWx1ZTogXCJjclwiIH0sXHJcbiAgeyBuYW1lOiBcIkN6ZWNoXCIsIHZhbHVlOiBcImNzXCIgfSxcclxuICB7IG5hbWU6IFwiT2xkIENodXJjaCBTbGF2b25pY1wiLCB2YWx1ZTogXCJjdVwiIH0sXHJcbiAgeyBuYW1lOiBcIkNodXZhc2hcIiwgdmFsdWU6IFwiY3ZcIiB9LFxyXG4gIHsgbmFtZTogXCJXZWxzaFwiLCB2YWx1ZTogXCJjeVwiIH0sXHJcbiAgeyBuYW1lOiBcIkRhbmlzaFwiLCB2YWx1ZTogXCJkYVwiIH0sXHJcbiAgeyBuYW1lOiBcIkdlcm1hblwiLCB2YWx1ZTogXCJkZVwiIH0sXHJcbiAgeyBuYW1lOiBcIkRpdmVoaVwiLCB2YWx1ZTogXCJkdlwiIH0sXHJcbiAgeyBuYW1lOiBcIkR6b25na2hhXHRcIiwgdmFsdWU6IFwiZHpcIiB9LFxyXG4gIHsgbmFtZTogXCJFd2VcIiwgdmFsdWU6IFwiZWVcIiB9LFxyXG4gIHsgbmFtZTogXCJHcmVla1wiLCB2YWx1ZTogXCJlbFwiIH0sXHJcbiAgeyBuYW1lOiBcIkVuZ2xpc2hcIiwgdmFsdWU6IFwiZW5cIiB9LFxyXG4gIHsgbmFtZTogXCJFc3BlcmFudG9cIiwgdmFsdWU6IFwiZW9cIiB9LFxyXG4gIHsgbmFtZTogXCJTcGFuaXNoXCIsIHZhbHVlOiBcImVzXCIgfSxcclxuICB7IG5hbWU6IFwiRXN0b25pYW5cIiwgdmFsdWU6IFwiZXRcIiB9LFxyXG4gIHsgbmFtZTogXCJCYXNxdWVcIiwgdmFsdWU6IFwiZXVcIiB9LFxyXG4gIHsgbmFtZTogXCJQZXJzaWFuXCIsIHZhbHVlOiBcImZhXCIgfSxcclxuICB7IG5hbWU6IFwiRnVsYWhcIiwgdmFsdWU6IFwiZmZcIiB9LFxyXG4gIHsgbmFtZTogXCJGaW5uaXNoXCIsIHZhbHVlOiBcImZpXCIgfSxcclxuICB7IG5hbWU6IFwiRmlqaWFuXCIsIHZhbHVlOiBcImZqXCIgfSxcclxuICB7IG5hbWU6IFwiRmFyb2VzZVwiLCB2YWx1ZTogXCJmb1wiIH0sXHJcbiAgeyBuYW1lOiBcIkZyZW5jaFwiLCB2YWx1ZTogXCJmclwiIH0sXHJcbiAgeyBuYW1lOiBcIldlc3Rlcm4gRnJpc2lhblwiLCB2YWx1ZTogXCJmeVwiIH0sXHJcbiAgeyBuYW1lOiBcIklyaXNoXCIsIHZhbHVlOiBcImdhXCIgfSxcclxuICB7IG5hbWU6IFwiU2NvdHRpc2ggR2FlbGljXCIsIHZhbHVlOiBcImdkXCIgfSxcclxuICB7IG5hbWU6IFwiR2FsaWNpYW5cIiwgdmFsdWU6IFwiZ2xcIiB9LFxyXG4gIHsgbmFtZTogXCJHdWFyYW5pXCIsIHZhbHVlOiBcImduXCIgfSxcclxuICB7IG5hbWU6IFwiR3VqYXJhdGlcIiwgdmFsdWU6IFwiZ3VcIiB9LFxyXG4gIHsgbmFtZTogXCJNYW54XCIsIHZhbHVlOiBcImd2XCIgfSxcclxuICB7IG5hbWU6IFwiSGF1c2FcIiwgdmFsdWU6IFwiaGFcIiB9LFxyXG4gIHsgbmFtZTogXCJIZWJyZXdcIiwgdmFsdWU6IFwiaGVcIiB9LFxyXG4gIHsgbmFtZTogXCJIaW5kaVwiLCB2YWx1ZTogXCJoaVwiIH0sXHJcbiAgeyBuYW1lOiBcIkhpcmkgTW90dVwiLCB2YWx1ZTogXCJob1wiIH0sXHJcbiAgeyBuYW1lOiBcIkNyb2F0aWFuXCIsIHZhbHVlOiBcImhyXCIgfSxcclxuICB7IG5hbWU6IFwiSGFpdGlhblwiLCB2YWx1ZTogXCJodFwiIH0sXHJcbiAgeyBuYW1lOiBcIkh1bmdhcmlhblwiLCB2YWx1ZTogXCJodVwiIH0sXHJcbiAgeyBuYW1lOiBcIkFybWVuaWFuXCIsIHZhbHVlOiBcImh5XCIgfSxcclxuICB7IG5hbWU6IFwiSGVyZXJvXCIsIHZhbHVlOiBcImh6XCIgfSxcclxuICB7IG5hbWU6IFwiSW50ZXJsaW5ndWFcIiwgdmFsdWU6IFwiaWFcIiB9LFxyXG4gIHsgbmFtZTogXCJJbmRvbmVzaWFuXCIsIHZhbHVlOiBcImlkXCIgfSxcclxuICB7IG5hbWU6IFwiSW50ZXJsaW5ndWVcIiwgdmFsdWU6IFwiaWVcIiB9LFxyXG4gIHsgbmFtZTogXCJJZ2JvXCIsIHZhbHVlOiBcImlnXCIgfSxcclxuICB7IG5hbWU6IFwiU2ljaHVhbiBZaVwiLCB2YWx1ZTogXCJpaVwiIH0sXHJcbiAgeyBuYW1lOiBcIkludXBpYXFcIiwgdmFsdWU6IFwiaWtcIiB9LFxyXG4gIHsgbmFtZTogXCJJZG9cIiwgdmFsdWU6IFwiaW9cIiB9LFxyXG4gIHsgbmFtZTogXCJJY2VsYW5kaWNcIiwgdmFsdWU6IFwiaXNcIiB9LFxyXG4gIHsgbmFtZTogXCJJdGFsaWFuXCIsIHZhbHVlOiBcIml0XCIgfSxcclxuICB7IG5hbWU6IFwiSW51a3RpdHV0XCIsIHZhbHVlOiBcIml1XCIgfSxcclxuICB7IG5hbWU6IFwiSmFwYW5lc2VcIiwgdmFsdWU6IFwiamFcIiB9LFxyXG4gIHsgbmFtZTogXCJKYXZhbmVzZVwiLCB2YWx1ZTogXCJqdlwiIH0sXHJcbiAgeyBuYW1lOiBcIkdlb3JnaWFuXCIsIHZhbHVlOiBcImthXCIgfSxcclxuICB7IG5hbWU6IFwiS29uZ29cIiwgdmFsdWU6IFwia2dcIiB9LFxyXG4gIHsgbmFtZTogXCJLaWt1eXVcIiwgdmFsdWU6IFwia2lcIiB9LFxyXG4gIHsgbmFtZTogXCJLd2FueWFtYVwiLCB2YWx1ZTogXCJralwiIH0sXHJcbiAgeyBuYW1lOiBcIkthemFraFwiLCB2YWx1ZTogXCJra1wiIH0sXHJcbiAgeyBuYW1lOiBcIkdyZWVubGFuZGljXCIsIHZhbHVlOiBcImtsXCIgfSxcclxuICB7IG5hbWU6IFwiS2htZXJcIiwgdmFsdWU6IFwia21cIiB9LFxyXG4gIHsgbmFtZTogXCJLYW5uYWRhXCIsIHZhbHVlOiBcImtuXCIgfSxcclxuICB7IG5hbWU6IFwiS29yZWFuXCIsIHZhbHVlOiBcImtvXCIgfSxcclxuICB7IG5hbWU6IFwiS2FudXJpXCIsIHZhbHVlOiBcImtyXCIgfSxcclxuICB7IG5hbWU6IFwiS2FzaG1pcmlcIiwgdmFsdWU6IFwia3NcIiB9LFxyXG4gIHsgbmFtZTogXCJLdXJkaXNoXCIsIHZhbHVlOiBcImt1XCIgfSxcclxuICB7IG5hbWU6IFwiS29taVwiLCB2YWx1ZTogXCJrdlwiIH0sXHJcbiAgeyBuYW1lOiBcIkNvcm5pc2hcIiwgdmFsdWU6IFwia3dcIiB9LFxyXG4gIHsgbmFtZTogXCJLaXJnaGl6XCIsIHZhbHVlOiBcImt5XCIgfSxcclxuICB7IG5hbWU6IFwiTGF0aW5cIiwgdmFsdWU6IFwibGFcIiB9LFxyXG4gIHsgbmFtZTogXCJMdXhlbWJvdXJnaXNoXCIsIHZhbHVlOiBcImxiXCIgfSxcclxuICB7IG5hbWU6IFwiR2FuZGFcIiwgdmFsdWU6IFwibGdcIiB9LFxyXG4gIHsgbmFtZTogXCJMaW1idXJnaXNoXCIsIHZhbHVlOiBcImxpXCIgfSxcclxuICB7IG5hbWU6IFwiTGluZ2FsYVwiLCB2YWx1ZTogXCJsblwiIH0sXHJcbiAgeyBuYW1lOiBcIkxhb1wiLCB2YWx1ZTogXCJsb1wiIH0sXHJcbiAgeyBuYW1lOiBcIkxpdGh1YW5pYW5cIiwgdmFsdWU6IFwibHRcIiB9LFxyXG4gIHsgbmFtZTogXCJMdWJhXCIsIHZhbHVlOiBcImx1XCIgfSxcclxuICB7IG5hbWU6IFwiTGF0dmlhblwiLCB2YWx1ZTogXCJsdlwiIH0sXHJcbiAgeyBuYW1lOiBcIk1hbGFnYXN5XCIsIHZhbHVlOiBcIm1nXCIgfSxcclxuICB7IG5hbWU6IFwiTWFyc2hhbGxlc2VcIiwgdmFsdWU6IFwibWhcIiB9LFxyXG4gIHsgbmFtZTogXCJNxIFvcmlcIiwgdmFsdWU6IFwibWlcIiB9LFxyXG4gIHsgbmFtZTogXCJNYWNlZG9uaWFuXCIsIHZhbHVlOiBcIm1rXCIgfSxcclxuICB7IG5hbWU6IFwiTWFsYXlhbGFtXCIsIHZhbHVlOiBcIm1sXCIgfSxcclxuICB7IG5hbWU6IFwiTW9uZ29saWFuXCIsIHZhbHVlOiBcIm1uXCIgfSxcclxuICB7IG5hbWU6IFwiTW9sZGF2aWFuXCIsIHZhbHVlOiBcIm1vXCIgfSxcclxuICB7IG5hbWU6IFwiTWFyYXRoaVwiLCB2YWx1ZTogXCJtclwiIH0sXHJcbiAgeyBuYW1lOiBcIk1hbGF5XCIsIHZhbHVlOiBcIm1zXCIgfSxcclxuICB7IG5hbWU6IFwiTWFsdGVzZVwiLCB2YWx1ZTogXCJtdFwiIH0sXHJcbiAgeyBuYW1lOiBcIkJ1cm1lc2VcIiwgdmFsdWU6IFwibXlcIiB9LFxyXG4gIHsgbmFtZTogXCJOYXVydVwiLCB2YWx1ZTogXCJuYVwiIH0sXHJcbiAgeyBuYW1lOiBcIk5vcndlZ2lhbiBCb2ttw6VsXCIsIHZhbHVlOiBcIm5iXCIgfSxcclxuICB7IG5hbWU6IFwiTm9ydGggTmRlYmVsZVwiLCB2YWx1ZTogXCJuZFwiIH0sXHJcbiAgeyBuYW1lOiBcIk5lcGFsaVwiLCB2YWx1ZTogXCJuZVwiIH0sXHJcbiAgeyBuYW1lOiBcIk5kb25nYVwiLCB2YWx1ZTogXCJuZ1wiIH0sXHJcbiAgeyBuYW1lOiBcIkR1dGNoXCIsIHZhbHVlOiBcIm5sXCIgfSxcclxuICB7IG5hbWU6IFwiTm9yd2VnaWFuIE55bm9yc2tcIiwgdmFsdWU6IFwibm5cIiB9LFxyXG4gIHsgbmFtZTogXCJOb3J3ZWdpYW5cIiwgdmFsdWU6IFwibm9cIiB9LFxyXG4gIHsgbmFtZTogXCJTb3V0aCBOZGViZWxlXCIsIHZhbHVlOiBcIm5yXCIgfSxcclxuICB7IG5hbWU6IFwiTmF2YWpvXCIsIHZhbHVlOiBcIm52XCIgfSxcclxuICB7IG5hbWU6IFwiQ2hpY2hld2FcIiwgdmFsdWU6IFwibnlcIiB9LFxyXG4gIHsgbmFtZTogXCJPY2NpdGFuXCIsIHZhbHVlOiBcIm9jXCIgfSxcclxuICB7IG5hbWU6IFwiT2ppYndhXCIsIHZhbHVlOiBcIm9qXCIgfSxcclxuICB7IG5hbWU6IFwiT3JvbW9cIiwgdmFsdWU6IFwib21cIiB9LFxyXG4gIHsgbmFtZTogXCJPcml5YVwiLCB2YWx1ZTogXCJvclwiIH0sXHJcbiAgeyBuYW1lOiBcIk9zc2V0aWFuXCIsIHZhbHVlOiBcIm9zXCIgfSxcclxuICB7IG5hbWU6IFwiUGFuamFiaVwiLCB2YWx1ZTogXCJwYVwiIH0sXHJcbiAgeyBuYW1lOiBcIlDEgWxpXCIsIHZhbHVlOiBcInBpXCIgfSxcclxuICB7IG5hbWU6IFwiUG9saXNoXCIsIHZhbHVlOiBcInBsXCIgfSxcclxuICB7IG5hbWU6IFwiUGFzaHRvXCIsIHZhbHVlOiBcInBzXCIgfSxcclxuICB7IG5hbWU6IFwiUG9ydHVndWVzZVwiLCB2YWx1ZTogXCJwdFwiIH0sXHJcbiAgeyBuYW1lOiBcIlF1ZWNodWFcIiwgdmFsdWU6IFwicXVcIiB9LFxyXG4gIHsgbmFtZTogXCJSZXVuaW9uZXNlXCIsIHZhbHVlOiBcInJjXCIgfSxcclxuICB7IG5hbWU6IFwiUm9tYW5zaFwiLCB2YWx1ZTogXCJybVwiIH0sXHJcbiAgeyBuYW1lOiBcIktpcnVuZGlcIiwgdmFsdWU6IFwicm5cIiB9LFxyXG4gIHsgbmFtZTogXCJSb21hbmlhblwiLCB2YWx1ZTogXCJyb1wiIH0sXHJcbiAgeyBuYW1lOiBcIlJ1c3NpYW5cIiwgdmFsdWU6IFwicnVcIiB9LFxyXG4gIHsgbmFtZTogXCJLaW55YXJ3YW5kYVwiLCB2YWx1ZTogXCJyd1wiIH0sXHJcbiAgeyBuYW1lOiBcIlNhbnNrcml0XCIsIHZhbHVlOiBcInNhXCIgfSxcclxuICB7IG5hbWU6IFwiU2FyZGluaWFuXCIsIHZhbHVlOiBcInNjXCIgfSxcclxuICB7IG5hbWU6IFwiU2luZGhpXCIsIHZhbHVlOiBcInNkXCIgfSxcclxuICB7IG5hbWU6IFwiTm9ydGhlcm4gU2FtaVwiLCB2YWx1ZTogXCJzZVwiIH0sXHJcbiAgeyBuYW1lOiBcIlNhbmdvXCIsIHZhbHVlOiBcInNnXCIgfSxcclxuICB7IG5hbWU6IFwiU2VyYm8tQ3JvYXRpYW5cIiwgdmFsdWU6IFwic2hcIiB9LFxyXG4gIHsgbmFtZTogXCJTaW5oYWxlc2VcIiwgdmFsdWU6IFwic2lcIiB9LFxyXG4gIHsgbmFtZTogXCJTbG92YWtcIiwgdmFsdWU6IFwic2tcIiB9LFxyXG4gIHsgbmFtZTogXCJTbG92ZW5pYW5cIiwgdmFsdWU6IFwic2xcIiB9LFxyXG4gIHsgbmFtZTogXCJTYW1vYW5cIiwgdmFsdWU6IFwic21cIiB9LFxyXG4gIHsgbmFtZTogXCJTaG9uYVwiLCB2YWx1ZTogXCJzblwiIH0sXHJcbiAgeyBuYW1lOiBcIlNvbWFsaVwiLCB2YWx1ZTogXCJzb1wiIH0sXHJcbiAgeyBuYW1lOiBcIkFsYmFuaWFuXCIsIHZhbHVlOiBcInNxXCIgfSxcclxuICB7IG5hbWU6IFwiU2VyYmlhblwiLCB2YWx1ZTogXCJzclwiIH0sXHJcbiAgeyBuYW1lOiBcIlN3YXRpXCIsIHZhbHVlOiBcInNzXCIgfSxcclxuICB7IG5hbWU6IFwiU290aG9cIiwgdmFsdWU6IFwic3RcIiB9LFxyXG4gIHsgbmFtZTogXCJTdW5kYW5lc2VcIiwgdmFsdWU6IFwic3VcIiB9LFxyXG4gIHsgbmFtZTogXCJTd2VkaXNoXCIsIHZhbHVlOiBcInN2XCIgfSxcclxuICB7IG5hbWU6IFwiU3dhaGlsaVwiLCB2YWx1ZTogXCJzd1wiIH0sXHJcbiAgeyBuYW1lOiBcIlRhbWlsXCIsIHZhbHVlOiBcInRhXCIgfSxcclxuICB7IG5hbWU6IFwiVGVsdWd1XCIsIHZhbHVlOiBcInRlXCIgfSxcclxuICB7IG5hbWU6IFwiVGFqaWtcIiwgdmFsdWU6IFwidGdcIiB9LFxyXG4gIHsgbmFtZTogXCJUaGFpXCIsIHZhbHVlOiBcInRoXCIgfSxcclxuICB7IG5hbWU6IFwiVGlncmlueWFcIiwgdmFsdWU6IFwidGlcIiB9LFxyXG4gIHsgbmFtZTogXCJUdXJrbWVuXCIsIHZhbHVlOiBcInRrXCIgfSxcclxuICB7IG5hbWU6IFwiVGFnYWxvZ1wiLCB2YWx1ZTogXCJ0bFwiIH0sXHJcbiAgeyBuYW1lOiBcIlRzd2FuYVwiLCB2YWx1ZTogXCJ0blwiIH0sXHJcbiAgeyBuYW1lOiBcIlRvbmdhXCIsIHZhbHVlOiBcInRvXCIgfSxcclxuICB7IG5hbWU6IFwiVHVya2lzaFwiLCB2YWx1ZTogXCJ0clwiIH0sXHJcbiAgeyBuYW1lOiBcIlRzb25nYVwiLCB2YWx1ZTogXCJ0c1wiIH0sXHJcbiAgeyBuYW1lOiBcIlRhdGFyXCIsIHZhbHVlOiBcInR0XCIgfSxcclxuICB7IG5hbWU6IFwiVHdpXCIsIHZhbHVlOiBcInR3XCIgfSxcclxuICB7IG5hbWU6IFwiVGFoaXRpYW5cIiwgdmFsdWU6IFwidHlcIiB9LFxyXG4gIHsgbmFtZTogXCJVaWdodXJcIiwgdmFsdWU6IFwidWdcIiB9LFxyXG4gIHsgbmFtZTogXCJVa3JhaW5pYW5cIiwgdmFsdWU6IFwidWtcIiB9LFxyXG4gIHsgbmFtZTogXCJVcmR1XCIsIHZhbHVlOiBcInVyXCIgfSxcclxuICB7IG5hbWU6IFwiVXpiZWtcIiwgdmFsdWU6IFwidXpcIiB9LFxyXG4gIHsgbmFtZTogXCJWZW5kYVwiLCB2YWx1ZTogXCJ2ZVwiIH0sXHJcbiAgeyBuYW1lOiBcIlZpw6p0IE5hbWVzZVwiLCB2YWx1ZTogXCJ2aVwiIH0sXHJcbiAgeyBuYW1lOiBcIlZvbGFww7xrXCIsIHZhbHVlOiBcInZvXCIgfSxcclxuICB7IG5hbWU6IFwiV2FsbG9vblwiLCB2YWx1ZTogXCJ3YVwiIH0sXHJcbiAgeyBuYW1lOiBcIldvbG9mXCIsIHZhbHVlOiBcIndvXCIgfSxcclxuICB7IG5hbWU6IFwiWGhvc2FcIiwgdmFsdWU6IFwieGhcIiB9LFxyXG4gIHsgbmFtZTogXCJZaWRkaXNoXCIsIHZhbHVlOiBcInlpXCIgfSxcclxuICB7IG5hbWU6IFwiWW9ydWJhXCIsIHZhbHVlOiBcInlvXCIgfSxcclxuICB7IG5hbWU6IFwiWmh1YW5nXCIsIHZhbHVlOiBcInphXCIgfSxcclxuICB7IG5hbWU6IFwiQ2hpbmVzZVwiLCB2YWx1ZTogXCJ6aFwiIH0sXHJcbiAgeyBuYW1lOiBcIlp1bHVcIiwgdmFsdWU6IFwienVcIiB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNUQVRVUyA9IFtcclxuICB7IG5hbWU6IFwiSW4gUHJvZ3Jlc3NcIiwgdmFsdWU6IFwiaW4gcHJvZ3Jlc3NcIiB9LFxyXG4gIHsgbmFtZTogXCJJbiBIaWF0dXNcIiwgdmFsdWU6IFwiaW4gaGlhdHVzXCIgfSxcclxuICB7IG5hbWU6IFwiQ29tcGxldGVkXCIsIHZhbHVlOiBcImNvbXBsZXRlZFwiIH0sXHJcbl07XHJcblxyXG4vLyBUWVBFU1xyXG5leHBvcnQgY29uc3QgR0VUX1BST0ZJTEUgPSBcIkdFVF9QUk9GSUxFXCI7XHJcbmV4cG9ydCBjb25zdCBMT0dJTiA9IFwiTE9HSU5cIjtcclxuZXhwb3J0IGNvbnN0IFJFSVNURVIgPSBcIlJFR0lTVEVSXCI7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2FwcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9hdXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2ZpcmVzdG9yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1jYXJkLWZsaXBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==