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
  email,
  password,
  confirmPassword,
  username,
  setEmail,
  setUsername,
  setPassword,
  setConfirmPassword,
  handleClick,
  signup
}) => {
  return __jsx("div", {
    className: "inner-auth",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, "Welcome to Kronikea"), __jsx("form", {
    className: "auth-form",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "form-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx("label", {
    htmlFor: "email",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, "Email address"), __jsx("div", {
    className: "input-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
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
      lineNumber: 22,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "input-group__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, __jsx("ion-icon", {
    name: "mail",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 15
    }
  })))), __jsx("div", {
    className: "form-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx("label", {
    htmlFor: "username",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, "Username"), __jsx("div", {
    className: "input-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, __jsx("input", {
    onChange: e => setUsername(e.target.value),
    value: username,
    className: "form-input",
    type: "text",
    id: "username",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "input-group__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, __jsx("ion-icon", {
    name: "person",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 15
    }
  })))), __jsx("div", {
    className: "form-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, __jsx("label", {
    htmlFor: "password",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }, "Password"), __jsx("div", {
    className: "input-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
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
      lineNumber: 52,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "input-group__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, __jsx("ion-icon", {
    name: "key",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 15
    }
  })))), __jsx("div", {
    className: "form-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }, __jsx("label", {
    htmlFor: "confirm-password",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 11
    }
  }, "Confirm Password"), __jsx("div", {
    className: "input-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 11
    }
  }, __jsx("input", {
    onChange: e => setConfirmPassword(e.target.value),
    value: confirmPassword,
    className: "form-input",
    type: "password",
    id: "confirm-password",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "input-group__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }, __jsx("ion-icon", {
    name: "key",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 15
    }
  })))), __jsx("div", {
    className: "login-btn custom-btn",
    onClick: signup,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 11
    }
  }, "Create account"))), __jsx("p", {
    onClick: handleClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }
  }, "Already have an account ? Login here"));
};

/* harmony default export */ __webpack_exports__["default"] = (Register);

/***/ }),

/***/ "./components/common/Loader.js":
/*!*************************************!*\
  !*** ./components/common/Loader.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\components\\common\\Loader.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Loader = () => {
  return __jsx("div", {
    className: "loader",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Loader);

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
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase */ "firebase");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_fbConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/fbConfig */ "./redux/fbConfig.js");
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
      _redux_fbConfig__WEBPACK_IMPORTED_MODULE_2__["db"].collection("users").add({
        badges: [],
        biography: "",
        createdAt: firebase__WEBPACK_IMPORTED_MODULE_1___default.a.firestore.FieldValue.serverTimestamp(),
        suspended: false,
        facebook: "",
        instagram: "",
        twitter: "",
        deviantart: "",
        likesCount: "",
        username: username,
        image: ""
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
        setIsLoading(false);
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_auth_Login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/auth/Login */ "./components/auth/Login.js");
/* harmony import */ var _components_auth_Register__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/auth/Register */ "./components/auth/Register.js");
/* harmony import */ var _redux_actions_userActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../redux/actions/userActions */ "./redux/actions/userActions.js");
/* harmony import */ var _hooks_userHooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/userHooks */ "./hooks/userHooks.js");
/* harmony import */ var _components_common_Loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/common/Loader */ "./components/common/Loader.js");
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
  const auth = Object(_hooks_userHooks__WEBPACK_IMPORTED_MODULE_7__["useAuth"])();
  const Router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

  const handleClick = e => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (auth.user) {
      Router.push("/profile");
    }
  }, [auth.user]);

  const signin = () => auth.signin(email, password);

  const signup = () => auth.signup(email, password, username);

  return __jsx("div", {
    className: "authentication",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, !auth.isLoading && !auth.user ? __jsx(react_card_flip__WEBPACK_IMPORTED_MODULE_1___default.a, {
    isFlipped: isFlipped,
    flipDirection: "horizontal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, __jsx(_components_auth_Login__WEBPACK_IMPORTED_MODULE_4__["default"], {
    signin: signin,
    setPassword: setPassword,
    setEmail: setEmail,
    email: email,
    password: password,
    handleClick: handleClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }), __jsx(_components_auth_Register__WEBPACK_IMPORTED_MODULE_5__["default"], {
    setPassword: setPassword,
    setEmail: setEmail,
    signup: signup,
    email: email,
    password: password,
    username: username,
    setUsername: setUsername,
    confirmPassword: confirmPassword,
    setConfirmPassword: setConfirmPassword,
    handleClick: handleClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  })) : __jsx(_components_common_Loader__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }));
};

const mapStateToProps = state => ({});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, {
  log_in: _redux_actions_userActions__WEBPACK_IMPORTED_MODULE_6__["log_in"]
})(auth));

/***/ }),

/***/ "./redux/actions/userActions.js":
/*!**************************************!*\
  !*** ./redux/actions/userActions.js ***!
  \**************************************/
/*! exports provided: log_in, getProfile, getFavoriteAuthors, getFollowers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log_in", function() { return log_in; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProfile", function() { return getProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFavoriteAuthors", function() { return getFavoriteAuthors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFollowers", function() { return getFollowers; });
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
  _fbConfig__WEBPACK_IMPORTED_MODULE_0__["db"].collection("users").doc(_fbConfig__WEBPACK_IMPORTED_MODULE_0__["auth"].currentUser.uid).onSnapshot(doc => {
    return dispatch({
      type: _utils_constants__WEBPACK_IMPORTED_MODULE_1__["GET_PROFILE"],
      payload: _objectSpread({
        id: doc.id
      }, doc.data())
    });
  });
};
const getFavoriteAuthors = () => dispatch => {
  _fbConfig__WEBPACK_IMPORTED_MODULE_0__["db"].collection("usersLikes").where("senderId", "==", _fbConfig__WEBPACK_IMPORTED_MODULE_0__["auth"].currentUser.uid).get().then(docs => {
    let favArr = [];
    docs.forEach(doc => {
      favArr = [...favArr, doc.data().recipient];
    });
    return favArr;
  }).then(users => {
    const result = users.map(user => _fbConfig__WEBPACK_IMPORTED_MODULE_0__["db"].collection("users").doc(user).get());
    Promise.all(result).then(res => {
      let favUsers = [];
      res.forEach(doc => favUsers = [...favUsers, _objectSpread({
        id: doc.id
      }, doc.data())]);
      dispatch({
        type: _utils_constants__WEBPACK_IMPORTED_MODULE_1__["GET_FAVORITE_AUTHORS"],
        payload: favUsers
      });
    });
  });
};
const getFollowers = () => dispatch => {
  _fbConfig__WEBPACK_IMPORTED_MODULE_0__["db"].collection("usersLikes").where("recipient", "==", _fbConfig__WEBPACK_IMPORTED_MODULE_0__["auth"].currentUser.uid).get().then(docs => {
    let favArr = [];
    docs.forEach(doc => {
      favArr = [...favArr, doc.data().senderId];
    });
    return favArr;
  }).then(users => {
    const result = users.map(user => _fbConfig__WEBPACK_IMPORTED_MODULE_0__["db"].collection("users").doc(user).get());
    Promise.all(result).then(res => {
      let favUsers = [];
      res.forEach(doc => favUsers = [...favUsers, _objectSpread({
        id: doc.id
      }, doc.data())]);
      dispatch({
        type: _utils_constants__WEBPACK_IMPORTED_MODULE_1__["GET_FOLLOWERS"],
        payload: favUsers
      });
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
/*! exports provided: CATEGORIES, COPYRIGHTS, LANGUAGES, STATUS, GET_PROFILE, LOGIN, REGISTER, GET_STORY, GET_CHAPTERS, GET_USER_STORIES, GET_FAVORITE_STORIES, GET_USER_CHARACTERS, GET_FAVORITE_CHARACTERS, GET_FAVORITE_AUTHORS, GET_FOLLOWERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CATEGORIES", function() { return CATEGORIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COPYRIGHTS", function() { return COPYRIGHTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANGUAGES", function() { return LANGUAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATUS", function() { return STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PROFILE", function() { return GET_PROFILE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN", function() { return LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER", function() { return REGISTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_STORY", function() { return GET_STORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_CHAPTERS", function() { return GET_CHAPTERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_USER_STORIES", function() { return GET_USER_STORIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_FAVORITE_STORIES", function() { return GET_FAVORITE_STORIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_USER_CHARACTERS", function() { return GET_USER_CHARACTERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_FAVORITE_CHARACTERS", function() { return GET_FAVORITE_CHARACTERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_FAVORITE_AUTHORS", function() { return GET_FAVORITE_AUTHORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_FOLLOWERS", function() { return GET_FOLLOWERS; });
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
const REGISTER = "REGISTER";
const GET_STORY = "GET_STORY";
const GET_CHAPTERS = "GET_CHAPTERS";
const GET_USER_STORIES = "GET_USER_STORIES";
const GET_FAVORITE_STORIES = "GET_FAVORITE_STORIES";
const GET_USER_CHARACTERS = "GET_USER_CHARACTERS";
const GET_FAVORITE_CHARACTERS = "GET_FAVORITE_CHARACTERS";
const GET_FAVORITE_AUTHORS = "GET_FAVORITE_AUTHORS";
const GET_FOLLOWERS = "GET_FOLLOWERS";

/***/ }),

/***/ "firebase":
/*!***************************!*\
  !*** external "firebase" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hdXRoL0xvZ2luLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYXV0aC9SZWdpc3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbW1vbi9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vaG9va3MvdXNlckhvb2tzLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2F1dGguanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWN0aW9ucy91c2VyQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9mYkNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9hcHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9hdXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWNhcmQtZmxpcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiXSwibmFtZXMiOlsiTG9naW4iLCJlbWFpbCIsInBhc3N3b3JkIiwiaGFuZGxlQ2xpY2siLCJzZXRQYXNzd29yZCIsInNldEVtYWlsIiwic2lnbmluIiwiZSIsInRhcmdldCIsInZhbHVlIiwiUmVnaXN0ZXIiLCJjb25maXJtUGFzc3dvcmQiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwic2V0Q29uZmlybVBhc3N3b3JkIiwic2lnbnVwIiwiTG9hZGVyIiwiYXV0aENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiUHJvdmlkZUF1dGgiLCJjaGlsZHJlbiIsImF1dGgiLCJ1c2VQcm92aWRlQXV0aCIsInVzZUF1dGgiLCJ1c2VDb250ZXh0IiwidXNlciIsInNldFVzZXIiLCJ1c2VTdGF0ZSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwidGhlbiIsInJlc3BvbnNlIiwiY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwiZGIiLCJjb2xsZWN0aW9uIiwiYWRkIiwiYmFkZ2VzIiwiYmlvZ3JhcGh5IiwiY3JlYXRlZEF0IiwiZmlyZWJhc2UiLCJmaXJlc3RvcmUiLCJGaWVsZFZhbHVlIiwic2VydmVyVGltZXN0YW1wIiwic3VzcGVuZGVkIiwiZmFjZWJvb2siLCJpbnN0YWdyYW0iLCJ0d2l0dGVyIiwiZGV2aWFudGFydCIsImxpa2VzQ291bnQiLCJpbWFnZSIsInNpZ25vdXQiLCJzaWduT3V0Iiwic2VuZFBhc3N3b3JkUmVzZXRFbWFpbCIsImNvbmZpcm1QYXNzd29yZFJlc2V0IiwiY29kZSIsInVzZUVmZmVjdCIsInVuc3Vic2NyaWJlIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwibG9nX2luIiwiaXNGbGlwcGVkIiwic2V0SXNGbGlwcGVkIiwiUm91dGVyIiwidXNlUm91dGVyIiwicHJldmVudERlZmF1bHQiLCJwdXNoIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJjb25uZWN0IiwiZGlzcGF0Y2giLCJjb25zb2xlIiwibG9nIiwiZ2V0UHJvZmlsZSIsImRvYyIsImN1cnJlbnRVc2VyIiwidWlkIiwib25TbmFwc2hvdCIsInR5cGUiLCJHRVRfUFJPRklMRSIsInBheWxvYWQiLCJpZCIsImRhdGEiLCJnZXRGYXZvcml0ZUF1dGhvcnMiLCJ3aGVyZSIsImdldCIsImRvY3MiLCJmYXZBcnIiLCJmb3JFYWNoIiwicmVjaXBpZW50IiwidXNlcnMiLCJyZXN1bHQiLCJtYXAiLCJQcm9taXNlIiwiYWxsIiwicmVzIiwiZmF2VXNlcnMiLCJHRVRfRkFWT1JJVEVfQVVUSE9SUyIsImdldEZvbGxvd2VycyIsInNlbmRlcklkIiwiR0VUX0ZPTExPV0VSUyIsInByb2RDb25maWciLCJhcGlLZXkiLCJwcm9jZXNzIiwiYXV0aERvbWFpbiIsImRhdGFiYXNlVVJMIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJGSVJFQkFTRV9BUFBfSUQiLCJkZXZDb25maWciLCJjb25maWciLCJhcHBzIiwibGVuZ3RoIiwiaW5pdGlhbGl6ZUFwcCIsIkNBVEVHT1JJRVMiLCJuYW1lIiwiQ09QWVJJR0hUUyIsIkxBTkdVQUdFUyIsIlNUQVRVUyIsIkxPR0lOIiwiUkVHSVNURVIiLCJHRVRfU1RPUlkiLCJHRVRfQ0hBUFRFUlMiLCJHRVRfVVNFUl9TVE9SSUVTIiwiR0VUX0ZBVk9SSVRFX1NUT1JJRVMiLCJHRVRfVVNFUl9DSEFSQUNURVJTIiwiR0VUX0ZBVk9SSVRFX0NIQVJBQ1RFUlMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7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O0FBQWdCM0csT0FBSyxFQUFFO0FBQXZCLENBdkR1QixFQXdEdkI7QUFBRTJHLE1BQUksRUFBRSxPQUFSO0FBQWlCM0csT0FBSyxFQUFFO0FBQXhCLENBeER1QixFQXlEdkI7QUFBRTJHLE1BQUksRUFBRSxRQUFSO0FBQWtCM0csT0FBSyxFQUFFO0FBQXpCLENBekR1QixFQTBEdkI7QUFBRTJHLE1BQUksRUFBRSxPQUFSO0FBQWlCM0csT0FBSyxFQUFFO0FBQXhCLENBMUR1QixFQTJEdkI7QUFBRTJHLE1BQUksRUFBRSxXQUFSO0FBQXFCM0csT0FBSyxFQUFFO0FBQTVCLENBM0R1QixFQTREdkI7QUFBRTJHLE1BQUksRUFBRSxVQUFSO0FBQW9CM0csT0FBSyxFQUFFO0FBQTNCLENBNUR1QixFQTZEdkI7QUFBRTJHLE1BQUksRUFBRSxTQUFSO0FBQW1CM0csT0FBSyxFQUFFO0FBQTFCLENBN0R1QixFQThEdkI7QUFBRTJHLE1BQUksRUFBRSxXQUFSO0FBQXFCM0csT0FBSyxFQUFFO0FBQTVCLENBOUR1QixFQStEdkI7QUFBRTJHLE1BQUksRUFBRSxVQUFSO0FBQW9CM0csT0FBSyxFQUFFO0FBQTNCLENBL0R1QixFQWdFdkI7QUFBRTJHLE1BQUksRUFBRSxRQUFSO0FBQWtCM0csT0FBSyxFQUFFO0FBQXpCLENBaEV1QixFQWlFdkI7QUFBRTJHLE1BQUksRUFBRSxhQUFSO0FBQXVCM0csT0FBSyxFQUFFO0FBQTlCLENBakV1QixFQWtFdkI7QUFBRTJHLE1BQUksRUFBRSxZQUFSO0FBQXNCM0csT0FBSyxFQUFFO0FBQTdCLENBbEV1QixFQW1FdkI7QUFBRTJHLE1BQUksRUFBRSxhQUFSO0FBQXVCM0csT0FBSyxFQUFFO0FBQTlCLENBbkV1QixFQW9FdkI7QUFBRTJHLE1BQUksRUFBRSxNQUFSO0FBQWdCM0csT0FBSyxFQUFFO0FBQXZCLENBcEV1QixFQXFFdkI7QUFBRTJHLE1BQUksRUFBRSxZQUFSO0FBQXNCM0csT0FBSyxFQUFFO0FBQTdCLENBckV1QixFQXNFdkI7QUFBRTJHLE1BQUksRUFBRSxTQUFS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QjtBQUFFMkcsTUFBSSxFQUFFLFdBQVI7QUFBcUIzRyxPQUFLLEVBQUU7QUFBNUIsQ0FIb0IsQ0FBZixDLENBTVA7O0FBQ08sTUFBTXFFLFdBQVcsR0FBRyxhQUFwQjtBQUNBLE1BQU0wQyxLQUFLLEdBQUcsT0FBZDtBQUNBLE1BQU1DLFFBQVEsR0FBRyxVQUFqQjtBQUVBLE1BQU1DLFNBQVMsR0FBRyxXQUFsQjtBQUNBLE1BQU1DLFlBQVksR0FBRyxjQUFyQjtBQUNBLE1BQU1DLGdCQUFnQixHQUFHLGtCQUF6QjtBQUNBLE1BQU1DLG9CQUFvQixHQUFHLHNCQUE3QjtBQUVBLE1BQU1DLG1CQUFtQixHQUFHLHFCQUE1QjtBQUNBLE1BQU1DLHVCQUF1QixHQUFHLHlCQUFoQztBQUVBLE1BQU0vQixvQkFBb0IsR0FBRyxzQkFBN0I7QUFDQSxNQUFNRyxhQUFhLEdBQUcsZUFBdEIsQzs7Ozs7Ozs7Ozs7QUMzT1AscUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsd0MiLCJmaWxlIjoicGFnZXMvYXV0aC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYXV0aC5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IExvZ2luID0gKHtcclxuICBlbWFpbCxcclxuICBwYXNzd29yZCxcclxuICBoYW5kbGVDbGljayxcclxuICBzZXRQYXNzd29yZCxcclxuICBzZXRFbWFpbCxcclxuICBzaWduaW4sXHJcbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lci1hdXRoXCI+XHJcbiAgICAgIDxoMj5XZWxjb21lIGJhY2sgdG8gS3JvbmlrZWE8L2gyPlxyXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9XCJhdXRoLWZvcm1cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5FbWFpbCBhZGRyZXNzPC9sYWJlbD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0taW5wdXRcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBfX2ljb25cIj5cclxuICAgICAgICAgICAgICA8aW9uLWljb24gbmFtZT1cIm1haWxcIj48L2lvbi1pY29uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0taW5wdXRcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBfX2ljb25cIj5cclxuICAgICAgICAgICAgICA8aW9uLWljb24gbmFtZT1cImtleVwiPjwvaW9uLWljb24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbi1idG4gY3VzdG9tLWJ0blwiIG9uQ2xpY2s9e3NpZ25pbn0+XHJcbiAgICAgICAgICA8c3Bhbj5Mb2dpbjwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgICA8cCBvbkNsaWNrPXtoYW5kbGVDbGlja30+RG9uJ3QgaGF2ZSBhbiBhY2NvdW50IHlldCA/IFJlZ2lzdGVyIGhlcmU8L3A+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW47XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFJlZ2lzdGVyID0gKHtcclxuICBlbWFpbCxcclxuICBwYXNzd29yZCxcclxuICBjb25maXJtUGFzc3dvcmQsXHJcbiAgdXNlcm5hbWUsXHJcbiAgc2V0RW1haWwsXHJcbiAgc2V0VXNlcm5hbWUsXHJcbiAgc2V0UGFzc3dvcmQsXHJcbiAgc2V0Q29uZmlybVBhc3N3b3JkLFxyXG4gIGhhbmRsZUNsaWNrLFxyXG4gIHNpZ251cCxcclxufSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyLWF1dGhcIj5cclxuICAgICAgPGgyPldlbGNvbWUgdG8gS3JvbmlrZWE8L2gyPlxyXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9XCJhdXRoLWZvcm1cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5FbWFpbCBhZGRyZXNzPC9sYWJlbD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0taW5wdXRcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBfX2ljb25cIj5cclxuICAgICAgICAgICAgICA8aW9uLWljb24gbmFtZT1cIm1haWxcIj48L2lvbi1pY29uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VybmFtZVwiPlVzZXJuYW1lPC9sYWJlbD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e3VzZXJuYW1lfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0taW5wdXRcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBpZD1cInVzZXJuYW1lXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cF9faWNvblwiPlxyXG4gICAgICAgICAgICAgIDxpb24taWNvbiBuYW1lPVwicGVyc29uXCI+PC9pb24taWNvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWlucHV0XCJcclxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwX19pY29uXCI+XHJcbiAgICAgICAgICAgICAgPGlvbi1pY29uIG5hbWU9XCJrZXlcIj48L2lvbi1pY29uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb25maXJtLXBhc3N3b3JkXCI+Q29uZmlybSBQYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q29uZmlybVBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICB2YWx1ZT17Y29uZmlybVBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0taW5wdXRcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJjb25maXJtLXBhc3N3b3JkXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cF9faWNvblwiPlxyXG4gICAgICAgICAgICAgIDxpb24taWNvbiBuYW1lPVwia2V5XCI+PC9pb24taWNvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLWJ0biBjdXN0b20tYnRuXCIgb25DbGljaz17c2lnbnVwfT5cclxuICAgICAgICAgIDxzcGFuPkNyZWF0ZSBhY2NvdW50PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICAgIDxwIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5BbHJlYWR5IGhhdmUgYW4gYWNjb3VudCA/IExvZ2luIGhlcmU8L3A+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXI7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IExvYWRlciA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkZXJcIj5cclxuICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgPGRpdj48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2FkZXI7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0LCBjcmVhdGVDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2VcIjtcclxuaW1wb3J0IHsgYXV0aCwgZGIgfSBmcm9tIFwiLi4vcmVkdXgvZmJDb25maWdcIjtcclxuXHJcbmNvbnN0IGF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFByb3ZpZGVBdXRoKHsgY2hpbGRyZW4gfSkge1xyXG4gIGNvbnN0IGF1dGggPSB1c2VQcm92aWRlQXV0aCgpO1xyXG4gIHJldHVybiA8YXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2F1dGh9PntjaGlsZHJlbn08L2F1dGhDb250ZXh0LlByb3ZpZGVyPjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUF1dGggPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHVzZUNvbnRleHQoYXV0aENvbnRleHQpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gdXNlUHJvdmlkZUF1dGgoKSB7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICAvLyBXcmFwIGFueSBGaXJlYmFzZSBtZXRob2RzIHdlIHdhbnQgdG8gdXNlIG1ha2luZyBzdXJlIC4uLlxyXG4gIC8vIC4uLiB0byBzYXZlIHRoZSB1c2VyIHRvIHN0YXRlLlxyXG4gIGNvbnN0IHNpZ25pbiA9IChlbWFpbCwgcGFzc3dvcmQpID0+IHtcclxuICAgIHJldHVybiBhdXRoLnNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgc2V0VXNlcihyZXNwb25zZS51c2VyKTtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLnVzZXI7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzaWdudXAgPSAoZW1haWwsIHBhc3N3b3JkLCB1c2VybmFtZSkgPT4ge1xyXG4gICAgcmV0dXJuIGF1dGhcclxuICAgICAgLmNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHNldFVzZXIocmVzcG9uc2UudXNlcik7XHJcbiAgICAgICAgZGIuY29sbGVjdGlvbihcInVzZXJzXCIpLmFkZCh7XHJcbiAgICAgICAgICBiYWRnZXM6IFtdLFxyXG4gICAgICAgICAgYmlvZ3JhcGh5OiBcIlwiLFxyXG4gICAgICAgICAgY3JlYXRlZEF0OiBmaXJlYmFzZS5maXJlc3RvcmUuRmllbGRWYWx1ZS5zZXJ2ZXJUaW1lc3RhbXAoKSxcclxuICAgICAgICAgIHN1c3BlbmRlZDogZmFsc2UsXHJcbiAgICAgICAgICBmYWNlYm9vazogXCJcIixcclxuICAgICAgICAgIGluc3RhZ3JhbTogXCJcIixcclxuICAgICAgICAgIHR3aXR0ZXI6IFwiXCIsXHJcbiAgICAgICAgICBkZXZpYW50YXJ0OiBcIlwiLFxyXG4gICAgICAgICAgbGlrZXNDb3VudDogXCJcIixcclxuICAgICAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSxcclxuICAgICAgICAgIGltYWdlOiBcIlwiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZS51c2VyO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzaWdub3V0ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGF1dGguc2lnbk91dCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICBzZXRVc2VyKGZhbHNlKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNlbmRQYXNzd29yZFJlc2V0RW1haWwgPSAoZW1haWwpID0+IHtcclxuICAgIHJldHVybiBhdXRoLnNlbmRQYXNzd29yZFJlc2V0RW1haWwoZW1haWwpLnRoZW4oKCkgPT4ge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNvbmZpcm1QYXNzd29yZFJlc2V0ID0gKGNvZGUsIHBhc3N3b3JkKSA9PiB7XHJcbiAgICByZXR1cm4gYXV0aC5jb25maXJtUGFzc3dvcmRSZXNldChjb2RlLCBwYXNzd29yZCkudGhlbigoKSA9PiB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHVuc3Vic2NyaWJlID0gYXV0aC5vbkF1dGhTdGF0ZUNoYW5nZWQoKHVzZXIpID0+IHtcclxuICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICBzZXRVc2VyKHVzZXIpO1xyXG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0VXNlcihmYWxzZSk7XHJcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQ2xlYW51cCBzdWJzY3JpcHRpb24gb24gdW5tb3VudFxyXG4gICAgcmV0dXJuICgpID0+IHVuc3Vic2NyaWJlKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICAvLyBSZXR1cm4gdGhlIHVzZXIgb2JqZWN0IGFuZCBhdXRoIG1ldGhvZHNcclxuICByZXR1cm4ge1xyXG4gICAgaXNMb2FkaW5nLFxyXG4gICAgdXNlcixcclxuICAgIHNpZ25pbixcclxuICAgIHNpZ251cCxcclxuICAgIHNpZ25vdXQsXHJcbiAgICBzZW5kUGFzc3dvcmRSZXNldEVtYWlsLFxyXG4gICAgY29uZmlybVBhc3N3b3JkUmVzZXQsXHJcbiAgfTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3RDYXJkRmxpcCBmcm9tIFwicmVhY3QtY2FyZC1mbGlwXCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgTG9naW4gZnJvbSBcIi4uL2NvbXBvbmVudHMvYXV0aC9Mb2dpblwiO1xyXG5pbXBvcnQgUmVnaXN0ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvYXV0aC9SZWdpc3RlclwiO1xyXG5pbXBvcnQgeyBsb2dfaW4gfSBmcm9tIFwiLi4vcmVkdXgvYWN0aW9ucy91c2VyQWN0aW9uc1wiO1xyXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSBcIi4uL2hvb2tzL3VzZXJIb29rc1wiO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2NvbW1vbi9Mb2FkZXJcIjtcclxuXHJcbmNvbnN0IGF1dGggPSAoeyBsb2dfaW4gfSkgPT4ge1xyXG4gIGNvbnN0IFtpc0ZsaXBwZWQsIHNldElzRmxpcHBlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2NvbmZpcm1QYXNzd29yZCwgc2V0Q29uZmlybVBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IGF1dGggPSB1c2VBdXRoKCk7XHJcbiAgY29uc3QgUm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldElzRmxpcHBlZCghaXNGbGlwcGVkKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGF1dGgudXNlcikge1xyXG4gICAgICBSb3V0ZXIucHVzaChcIi9wcm9maWxlXCIpO1xyXG4gICAgfVxyXG4gIH0sIFthdXRoLnVzZXJdKTtcclxuXHJcbiAgY29uc3Qgc2lnbmluID0gKCkgPT4gYXV0aC5zaWduaW4oZW1haWwsIHBhc3N3b3JkKTtcclxuICBjb25zdCBzaWdudXAgPSAoKSA9PiBhdXRoLnNpZ251cChlbWFpbCwgcGFzc3dvcmQsIHVzZXJuYW1lKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYXV0aGVudGljYXRpb25cIj5cclxuICAgICAgeyFhdXRoLmlzTG9hZGluZyAmJiAhYXV0aC51c2VyID8gKFxyXG4gICAgICAgIDxSZWFjdENhcmRGbGlwIGlzRmxpcHBlZD17aXNGbGlwcGVkfSBmbGlwRGlyZWN0aW9uPVwiaG9yaXpvbnRhbFwiPlxyXG4gICAgICAgICAgPExvZ2luXHJcbiAgICAgICAgICAgIHNpZ25pbj17c2lnbmlufVxyXG4gICAgICAgICAgICBzZXRQYXNzd29yZD17c2V0UGFzc3dvcmR9XHJcbiAgICAgICAgICAgIHNldEVtYWlsPXtzZXRFbWFpbH1cclxuICAgICAgICAgICAgZW1haWw9e2VtYWlsfVxyXG4gICAgICAgICAgICBwYXNzd29yZD17cGFzc3dvcmR9XHJcbiAgICAgICAgICAgIGhhbmRsZUNsaWNrPXtoYW5kbGVDbGlja31cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8UmVnaXN0ZXJcclxuICAgICAgICAgICAgc2V0UGFzc3dvcmQ9e3NldFBhc3N3b3JkfVxyXG4gICAgICAgICAgICBzZXRFbWFpbD17c2V0RW1haWx9XHJcbiAgICAgICAgICAgIHNpZ251cD17c2lnbnVwfVxyXG4gICAgICAgICAgICBlbWFpbD17ZW1haWx9XHJcbiAgICAgICAgICAgIHBhc3N3b3JkPXtwYXNzd29yZH1cclxuICAgICAgICAgICAgdXNlcm5hbWU9e3VzZXJuYW1lfVxyXG4gICAgICAgICAgICBzZXRVc2VybmFtZT17c2V0VXNlcm5hbWV9XHJcbiAgICAgICAgICAgIGNvbmZpcm1QYXNzd29yZD17Y29uZmlybVBhc3N3b3JkfVxyXG4gICAgICAgICAgICBzZXRDb25maXJtUGFzc3dvcmQ9e3NldENvbmZpcm1QYXNzd29yZH1cclxuICAgICAgICAgICAgaGFuZGxlQ2xpY2s9e2hhbmRsZUNsaWNrfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L1JlYWN0Q2FyZEZsaXA+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPExvYWRlciAvPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHt9KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7IGxvZ19pbiB9KShhdXRoKTtcclxuIiwiaW1wb3J0IHsgZGIsIGF1dGggfSBmcm9tIFwiLi4vZmJDb25maWdcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgR0VUX1BST0ZJTEUsXHJcbiAgR0VUX0ZBVk9SSVRFX0FVVEhPUlMsXHJcbiAgR0VUX0ZPTExPV0VSUyxcclxufSBmcm9tIFwiLi4vLi4vdXRpbHMvY29uc3RhbnRzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgbG9nX2luID0gKGVtYWlsLCBwYXNzd29yZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgY29uc29sZS5sb2coZW1haWwsIHBhc3N3b3JkKTtcclxuICBhdXRoLnNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UHJvZmlsZSA9ICgpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKVxyXG4gICAgLmRvYyhhdXRoLmN1cnJlbnRVc2VyLnVpZClcclxuICAgIC5vblNuYXBzaG90KChkb2MpID0+IHtcclxuICAgICAgcmV0dXJuIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiBHRVRfUFJPRklMRSxcclxuICAgICAgICBwYXlsb2FkOiB7IGlkOiBkb2MuaWQsIC4uLmRvYy5kYXRhKCkgfSxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRGYXZvcml0ZUF1dGhvcnMgPSAoKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkYi5jb2xsZWN0aW9uKFwidXNlcnNMaWtlc1wiKVxyXG4gICAgLndoZXJlKFwic2VuZGVySWRcIiwgXCI9PVwiLCBhdXRoLmN1cnJlbnRVc2VyLnVpZClcclxuICAgIC5nZXQoKVxyXG4gICAgLnRoZW4oKGRvY3MpID0+IHtcclxuICAgICAgbGV0IGZhdkFyciA9IFtdO1xyXG4gICAgICBkb2NzLmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgICAgIGZhdkFyciA9IFsuLi5mYXZBcnIsIGRvYy5kYXRhKCkucmVjaXBpZW50XTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBmYXZBcnI7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKHVzZXJzKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHVzZXJzLm1hcCgodXNlcikgPT5cclxuICAgICAgICBkYi5jb2xsZWN0aW9uKFwidXNlcnNcIikuZG9jKHVzZXIpLmdldCgpXHJcbiAgICAgICk7XHJcbiAgICAgIFByb21pc2UuYWxsKHJlc3VsdCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgbGV0IGZhdlVzZXJzID0gW107XHJcbiAgICAgICAgcmVzLmZvckVhY2goXHJcbiAgICAgICAgICAoZG9jKSA9PiAoZmF2VXNlcnMgPSBbLi4uZmF2VXNlcnMsIHsgaWQ6IGRvYy5pZCwgLi4uZG9jLmRhdGEoKSB9XSlcclxuICAgICAgICApO1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IEdFVF9GQVZPUklURV9BVVRIT1JTLFxyXG4gICAgICAgICAgcGF5bG9hZDogZmF2VXNlcnMsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Rm9sbG93ZXJzID0gKCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGIuY29sbGVjdGlvbihcInVzZXJzTGlrZXNcIilcclxuICAgIC53aGVyZShcInJlY2lwaWVudFwiLCBcIj09XCIsIGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigoZG9jcykgPT4ge1xyXG4gICAgICBsZXQgZmF2QXJyID0gW107XHJcbiAgICAgIGRvY3MuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICAgICAgZmF2QXJyID0gWy4uLmZhdkFyciwgZG9jLmRhdGEoKS5zZW5kZXJJZF07XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gZmF2QXJyO1xyXG4gICAgfSlcclxuICAgIC50aGVuKCh1c2VycykgPT4ge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSB1c2Vycy5tYXAoKHVzZXIpID0+XHJcbiAgICAgICAgZGIuY29sbGVjdGlvbihcInVzZXJzXCIpLmRvYyh1c2VyKS5nZXQoKVxyXG4gICAgICApO1xyXG4gICAgICBQcm9taXNlLmFsbChyZXN1bHQpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGxldCBmYXZVc2VycyA9IFtdO1xyXG4gICAgICAgIHJlcy5mb3JFYWNoKFxyXG4gICAgICAgICAgKGRvYykgPT4gKGZhdlVzZXJzID0gWy4uLmZhdlVzZXJzLCB7IGlkOiBkb2MuaWQsIC4uLmRvYy5kYXRhKCkgfV0pXHJcbiAgICAgICAgKTtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiBHRVRfRk9MTE9XRVJTLFxyXG4gICAgICAgICAgcGF5bG9hZDogZmF2VXNlcnMsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcbiIsImltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcbmltcG9ydCBcImZpcmViYXNlL2F1dGhcIjtcclxuaW1wb3J0IFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XHJcblxyXG5jb25zdCBwcm9kQ29uZmlnID0ge1xyXG4gIGFwaUtleTogcHJvY2Vzcy5lbnYuRklSRUJBU0VfQVBJX0tFWSxcclxuICBhdXRoRG9tYWluOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9BVVRIX0RPTUFJTixcclxuICBkYXRhYmFzZVVSTDogcHJvY2Vzcy5lbnYuRklSRUJBU0VfREFUQUJBU0VfVVJMLFxyXG4gIHByb2plY3RJZDogcHJvY2Vzcy5lbnYuRklSRUJBU0VfUFJPSkVDVF9JRCxcclxuICBzdG9yYWdlQnVja2V0OiBwcm9jZXNzLmVudi5GSVJFQkFTRV9TVE9SQUdFX0JVQ0tFVCxcclxuICBtZXNzYWdpbmdTZW5kZXJJZDogcHJvY2Vzcy5lbnYuRklSRUJBU0VfTUVTU0FHSU5HX1NFTkRFUl9JRCxcclxuICBhcHBJZDogcHJvY2Vzcy5lbnYuRklSRUJBU0VfQVBQX0lELFxyXG59O1xyXG5cclxuY29uc3QgZGV2Q29uZmlnID0ge1xyXG4gIGFwaUtleTogcHJvY2Vzcy5lbnYuRklSRUJBU0VfQVBJX0tFWSxcclxuICBhdXRoRG9tYWluOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9BVVRIX0RPTUFJTixcclxuICBkYXRhYmFzZVVSTDogcHJvY2Vzcy5lbnYuRklSRUJBU0VfREFUQUJBU0VfVVJMLFxyXG4gIHByb2plY3RJZDogcHJvY2Vzcy5lbnYuRklSRUJBU0VfUFJPSkVDVF9JRCxcclxuICBzdG9yYWdlQnVja2V0OiBwcm9jZXNzLmVudi5GSVJFQkFTRV9TVE9SQUdFX0JVQ0tFVCxcclxuICBtZXNzYWdpbmdTZW5kZXJJZDogcHJvY2Vzcy5lbnYuRklSRUJBU0VfTUVTU0FHSU5HX1NFTkRFUl9JRCxcclxuICBhcHBJZDogcHJvY2Vzcy5lbnYuRklSRUJBU0VfQVBQX0lELFxyXG59O1xyXG5cclxuY29uc3QgY29uZmlnID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gcHJvZENvbmZpZyA6IGRldkNvbmZpZztcclxuXHJcbmlmICghZmlyZWJhc2UuYXBwcy5sZW5ndGgpIHtcclxuICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGNvbmZpZyk7XHJcbn1cclxuXHJcbmNvbnN0IGRiID0gZmlyZWJhc2UuZmlyZXN0b3JlKCk7XHJcbmNvbnN0IGF1dGggPSBmaXJlYmFzZS5hdXRoKCk7XHJcblxyXG5leHBvcnQgeyBkYiwgYXV0aCB9O1xyXG5leHBvcnQgZGVmYXVsdCBjb25maWc7XHJcbiIsImV4cG9ydCBjb25zdCBDQVRFR09SSUVTID0gW1xyXG4gIHsgbmFtZTogXCJEcmFtYVwiLCB2YWx1ZTogXCJkcmFtYVwiIH0sXHJcbiAgeyBuYW1lOiBcIkNvbWVkeVwiLCB2YWx1ZTogXCJjb21lZHlcIiB9LFxyXG4gIHsgbmFtZTogXCJIb3Jyb3JcIiwgdmFsdWU6IFwiaG9ycm9yXCIgfSxcclxuICB7IG5hbWU6IFwiUm9tYW5jZVwiLCB2YWx1ZTogXCJyb21hbmNlXCIgfSxcclxuICB7IG5hbWU6IFwiU2NpLWZpXCIsIHZhbHVlOiBcInNjaS1maVwiIH0sXHJcbiAgeyBuYW1lOiBcIkZhbnRhc3lcIiwgdmFsdWU6IFwiZmFudGFzeVwiIH0sXHJcbiAgeyBuYW1lOiBcIkh1bW9yXCIsIHZhbHVlOiBcImh1bW9yXCIgfSxcclxuICB7IG5hbWU6IFwiQWN0aW9uXCIsIHZhbHVlOiBcImFjdGlvblwiIH0sXHJcbiAgeyBuYW1lOiBcIlRocmlsbGVyXCIsIHZhbHVlOiBcInRocmlsbGVyXCIgfSxcclxuICB7IG5hbWU6IFwiU3VwZXJuYXR1cmFsXCIsIHZhbHVlOiBcInN1cGVybmF0dXJhbFwiIH0sXHJcbiAgeyBuYW1lOiBcIkFkdmVudHVyZVwiLCB2YWx1ZTogXCJhZHZlbnR1cmVcIiB9LFxyXG4gIHsgbmFtZTogXCJNeXN0ZXJ5XCIsIHZhbHVlOiBcIm15c3RlcnlcIiB9LFxyXG4gIHsgbmFtZTogXCJXZXN0ZXJuXCIsIHZhbHVlOiBcIndlc3Rlcm5cIiB9LFxyXG4gIHsgbmFtZTogXCJIaXN0b3J5XCIsIHZhbHVlOiBcImhpc3RvcnlcIiB9LFxyXG4gIHsgbmFtZTogXCJDcmltZVwiLCB2YWx1ZTogXCJjcmltZVwiIH0sXHJcbiAgeyBuYW1lOiBcIkZhbmZpY3Rpb25cIiwgdmFsdWU6IFwiZmFuZmljdGlvblwiIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgQ09QWVJJR0hUUyA9IFtcclxuICB7IG5hbWU6IFwiUHVibGljIERvbWFpblwiLCB2YWx1ZTogXCJwdWJsaWMgZG9tYWluXCIgfSxcclxuICB7IG5hbWU6IFwiQWxsIFJpZ2h0cyBSZXNlcnZlZFwiLCB2YWx1ZTogXCJhbGwgcmlnaHRzIHJlc2VydmVkXCIgfSxcclxuICB7IG5hbWU6IFwiQ3JlYXRpdmUgQ29tbW9uc1wiLCB2YWx1ZTogXCJjcmVhdGl2ZSBjb21tb25zXCIgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBMQU5HVUFHRVMgPSBbXHJcbiAgeyBuYW1lOiBcIkFmYXJcIiwgdmFsdWU6IFwiYWFcIiB9LFxyXG4gIHsgbmFtZTogXCJBYmtoYXppYW5cIiwgdmFsdWU6IFwiYWJcIiB9LFxyXG4gIHsgbmFtZTogXCJBdmVzdGFuXCIsIHZhbHVlOiBcImFlXCIgfSxcclxuICB7IG5hbWU6IFwiQWZyaWthYW5zXCIsIHZhbHVlOiBcImFmXCIgfSxcclxuICB7IG5hbWU6IFwiQWthblwiLCB2YWx1ZTogXCJha1wiIH0sXHJcbiAgeyBuYW1lOiBcIkFtaGFyaWNcIiwgdmFsdWU6IFwiYW1cIiB9LFxyXG4gIHsgbmFtZTogXCJBcmFnb25lc2VcIiwgdmFsdWU6IFwiYW5cIiB9LFxyXG4gIHsgbmFtZTogXCJBcmFiaWNcIiwgdmFsdWU6IFwiYXJcIiB9LFxyXG4gIHsgbmFtZTogXCJBc3NhbWVzZVwiLCB2YWx1ZTogXCJhc1wiIH0sXHJcbiAgeyBuYW1lOiBcIkF2YXJpY1wiLCB2YWx1ZTogXCJhdlwiIH0sXHJcbiAgeyBuYW1lOiBcIkF5bWFyYVwiLCB2YWx1ZTogXCJheVwiIH0sXHJcbiAgeyBuYW1lOiBcIkF6ZXJiYWlqYW5pXCIsIHZhbHVlOiBcImF6XCIgfSxcclxuICB7IG5hbWU6IFwiQmFzaGtpclwiLCB2YWx1ZTogXCJiYVwiIH0sXHJcbiAgeyBuYW1lOiBcIkJlbGFydXNpYW5cIiwgdmFsdWU6IFwiYmVcIiB9LFxyXG4gIHsgbmFtZTogXCJCdWxnYXJpYW5cIiwgdmFsdWU6IFwiYmdcIiB9LFxyXG4gIHsgbmFtZTogXCJCaWhhcmlcIiwgdmFsdWU6IFwiYmhcIiB9LFxyXG4gIHsgbmFtZTogXCJCaXNsYW1hXCIsIHZhbHVlOiBcImJpXCIgfSxcclxuICB7IG5hbWU6IFwiQmFtYmFyYVwiLCB2YWx1ZTogXCJibVwiIH0sXHJcbiAgeyBuYW1lOiBcIkJlbmdhbGlcIiwgdmFsdWU6IFwiYm5cIiB9LFxyXG4gIHsgbmFtZTogXCJUaWJldGFuXCIsIHZhbHVlOiBcImJvXCIgfSxcclxuICB7IG5hbWU6IFwiQnJldG9uXCIsIHZhbHVlOiBcImJyXCIgfSxcclxuICB7IG5hbWU6IFwiQm9zbmlhblwiLCB2YWx1ZTogXCJic1wiIH0sXHJcbiAgeyBuYW1lOiBcIkNhdGFsYW5cIiwgdmFsdWU6IFwiY2FcIiB9LFxyXG4gIHsgbmFtZTogXCJDaGVjaGVuXCIsIHZhbHVlOiBcImNlXCIgfSxcclxuICB7IG5hbWU6IFwiQ2hhbW9ycm9cIiwgdmFsdWU6IFwiY2hcIiB9LFxyXG4gIHsgbmFtZTogXCJDb3JzaWNhblwiLCB2YWx1ZTogXCJjb1wiIH0sXHJcbiAgeyBuYW1lOiBcIkNyZWVcIiwgdmFsdWU6IFwiY3JcIiB9LFxyXG4gIHsgbmFtZTogXCJDemVjaFwiLCB2YWx1ZTogXCJjc1wiIH0sXHJcbiAgeyBuYW1lOiBcIk9sZCBDaHVyY2ggU2xhdm9uaWNcIiwgdmFsdWU6IFwiY3VcIiB9LFxyXG4gIHsgbmFtZTogXCJDaHV2YXNoXCIsIHZhbHVlOiBcImN2XCIgfSxcclxuICB7IG5hbWU6IFwiV2Vsc2hcIiwgdmFsdWU6IFwiY3lcIiB9LFxyXG4gIHsgbmFtZTogXCJEYW5pc2hcIiwgdmFsdWU6IFwiZGFcIiB9LFxyXG4gIHsgbmFtZTogXCJHZXJtYW5cIiwgdmFsdWU6IFwiZGVcIiB9LFxyXG4gIHsgbmFtZTogXCJEaXZlaGlcIiwgdmFsdWU6IFwiZHZcIiB9LFxyXG4gIHsgbmFtZTogXCJEem9uZ2toYVx0XCIsIHZhbHVlOiBcImR6XCIgfSxcclxuICB7IG5hbWU6IFwiRXdlXCIsIHZhbHVlOiBcImVlXCIgfSxcclxuICB7IG5hbWU6IFwiR3JlZWtcIiwgdmFsdWU6IFwiZWxcIiB9LFxyXG4gIHsgbmFtZTogXCJFbmdsaXNoXCIsIHZhbHVlOiBcImVuXCIgfSxcclxuICB7IG5hbWU6IFwiRXNwZXJhbnRvXCIsIHZhbHVlOiBcImVvXCIgfSxcclxuICB7IG5hbWU6IFwiU3BhbmlzaFwiLCB2YWx1ZTogXCJlc1wiIH0sXHJcbiAgeyBuYW1lOiBcIkVzdG9uaWFuXCIsIHZhbHVlOiBcImV0XCIgfSxcclxuICB7IG5hbWU6IFwiQmFzcXVlXCIsIHZhbHVlOiBcImV1XCIgfSxcclxuICB7IG5hbWU6IFwiUGVyc2lhblwiLCB2YWx1ZTogXCJmYVwiIH0sXHJcbiAgeyBuYW1lOiBcIkZ1bGFoXCIsIHZhbHVlOiBcImZmXCIgfSxcclxuICB7IG5hbWU6IFwiRmlubmlzaFwiLCB2YWx1ZTogXCJmaVwiIH0sXHJcbiAgeyBuYW1lOiBcIkZpamlhblwiLCB2YWx1ZTogXCJmalwiIH0sXHJcbiAgeyBuYW1lOiBcIkZhcm9lc2VcIiwgdmFsdWU6IFwiZm9cIiB9LFxyXG4gIHsgbmFtZTogXCJGcmVuY2hcIiwgdmFsdWU6IFwiZnJcIiB9LFxyXG4gIHsgbmFtZTogXCJXZXN0ZXJuIEZyaXNpYW5cIiwgdmFsdWU6IFwiZnlcIiB9LFxyXG4gIHsgbmFtZTogXCJJcmlzaFwiLCB2YWx1ZTogXCJnYVwiIH0sXHJcbiAgeyBuYW1lOiBcIlNjb3R0aXNoIEdhZWxpY1wiLCB2YWx1ZTogXCJnZFwiIH0sXHJcbiAgeyBuYW1lOiBcIkdhbGljaWFuXCIsIHZhbHVlOiBcImdsXCIgfSxcclxuICB7IG5hbWU6IFwiR3VhcmFuaVwiLCB2YWx1ZTogXCJnblwiIH0sXHJcbiAgeyBuYW1lOiBcIkd1amFyYXRpXCIsIHZhbHVlOiBcImd1XCIgfSxcclxuICB7IG5hbWU6IFwiTWFueFwiLCB2YWx1ZTogXCJndlwiIH0sXHJcbiAgeyBuYW1lOiBcIkhhdXNhXCIsIHZhbHVlOiBcImhhXCIgfSxcclxuICB7IG5hbWU6IFwiSGVicmV3XCIsIHZhbHVlOiBcImhlXCIgfSxcclxuICB7IG5hbWU6IFwiSGluZGlcIiwgdmFsdWU6IFwiaGlcIiB9LFxyXG4gIHsgbmFtZTogXCJIaXJpIE1vdHVcIiwgdmFsdWU6IFwiaG9cIiB9LFxyXG4gIHsgbmFtZTogXCJDcm9hdGlhblwiLCB2YWx1ZTogXCJoclwiIH0sXHJcbiAgeyBuYW1lOiBcIkhhaXRpYW5cIiwgdmFsdWU6IFwiaHRcIiB9LFxyXG4gIHsgbmFtZTogXCJIdW5nYXJpYW5cIiwgdmFsdWU6IFwiaHVcIiB9LFxyXG4gIHsgbmFtZTogXCJBcm1lbmlhblwiLCB2YWx1ZTogXCJoeVwiIH0sXHJcbiAgeyBuYW1lOiBcIkhlcmVyb1wiLCB2YWx1ZTogXCJoelwiIH0sXHJcbiAgeyBuYW1lOiBcIkludGVybGluZ3VhXCIsIHZhbHVlOiBcImlhXCIgfSxcclxuICB7IG5hbWU6IFwiSW5kb25lc2lhblwiLCB2YWx1ZTogXCJpZFwiIH0sXHJcbiAgeyBuYW1lOiBcIkludGVybGluZ3VlXCIsIHZhbHVlOiBcImllXCIgfSxcclxuICB7IG5hbWU6IFwiSWdib1wiLCB2YWx1ZTogXCJpZ1wiIH0sXHJcbiAgeyBuYW1lOiBcIlNpY2h1YW4gWWlcIiwgdmFsdWU6IFwiaWlcIiB9LFxyXG4gIHsgbmFtZTogXCJJbnVwaWFxXCIsIHZhbHVlOiBcImlrXCIgfSxcclxuICB7IG5hbWU6IFwiSWRvXCIsIHZhbHVlOiBcImlvXCIgfSxcclxuICB7IG5hbWU6IFwiSWNlbGFuZGljXCIsIHZhbHVlOiBcImlzXCIgfSxcclxuICB7IG5hbWU6IFwiSXRhbGlhblwiLCB2YWx1ZTogXCJpdFwiIH0sXHJcbiAgeyBuYW1lOiBcIkludWt0aXR1dFwiLCB2YWx1ZTogXCJpdVwiIH0sXHJcbiAgeyBuYW1lOiBcIkphcGFuZXNlXCIsIHZhbHVlOiBcImphXCIgfSxcclxuICB7IG5hbWU6IFwiSmF2YW5lc2VcIiwgdmFsdWU6IFwianZcIiB9LFxyXG4gIHsgbmFtZTogXCJHZW9yZ2lhblwiLCB2YWx1ZTogXCJrYVwiIH0sXHJcbiAgeyBuYW1lOiBcIktvbmdvXCIsIHZhbHVlOiBcImtnXCIgfSxcclxuICB7IG5hbWU6IFwiS2lrdXl1XCIsIHZhbHVlOiBcImtpXCIgfSxcclxuICB7IG5hbWU6IFwiS3dhbnlhbWFcIiwgdmFsdWU6IFwia2pcIiB9LFxyXG4gIHsgbmFtZTogXCJLYXpha2hcIiwgdmFsdWU6IFwia2tcIiB9LFxyXG4gIHsgbmFtZTogXCJHcmVlbmxhbmRpY1wiLCB2YWx1ZTogXCJrbFwiIH0sXHJcbiAgeyBuYW1lOiBcIktobWVyXCIsIHZhbHVlOiBcImttXCIgfSxcclxuICB7IG5hbWU6IFwiS2FubmFkYVwiLCB2YWx1ZTogXCJrblwiIH0sXHJcbiAgeyBuYW1lOiBcIktvcmVhblwiLCB2YWx1ZTogXCJrb1wiIH0sXHJcbiAgeyBuYW1lOiBcIkthbnVyaVwiLCB2YWx1ZTogXCJrclwiIH0sXHJcbiAgeyBuYW1lOiBcIkthc2htaXJpXCIsIHZhbHVlOiBcImtzXCIgfSxcclxuICB7IG5hbWU6IFwiS3VyZGlzaFwiLCB2YWx1ZTogXCJrdVwiIH0sXHJcbiAgeyBuYW1lOiBcIktvbWlcIiwgdmFsdWU6IFwia3ZcIiB9LFxyXG4gIHsgbmFtZTogXCJDb3JuaXNoXCIsIHZhbHVlOiBcImt3XCIgfSxcclxuICB7IG5hbWU6IFwiS2lyZ2hpelwiLCB2YWx1ZTogXCJreVwiIH0sXHJcbiAgeyBuYW1lOiBcIkxhdGluXCIsIHZhbHVlOiBcImxhXCIgfSxcclxuICB7IG5hbWU6IFwiTHV4ZW1ib3VyZ2lzaFwiLCB2YWx1ZTogXCJsYlwiIH0sXHJcbiAgeyBuYW1lOiBcIkdhbmRhXCIsIHZhbHVlOiBcImxnXCIgfSxcclxuICB7IG5hbWU6IFwiTGltYnVyZ2lzaFwiLCB2YWx1ZTogXCJsaVwiIH0sXHJcbiAgeyBuYW1lOiBcIkxpbmdhbGFcIiwgdmFsdWU6IFwibG5cIiB9LFxyXG4gIHsgbmFtZTogXCJMYW9cIiwgdmFsdWU6IFwibG9cIiB9LFxyXG4gIHsgbmFtZTogXCJMaXRodWFuaWFuXCIsIHZhbHVlOiBcImx0XCIgfSxcclxuICB7IG5hbWU6IFwiTHViYVwiLCB2YWx1ZTogXCJsdVwiIH0sXHJcbiAgeyBuYW1lOiBcIkxhdHZpYW5cIiwgdmFsdWU6IFwibHZcIiB9LFxyXG4gIHsgbmFtZTogXCJNYWxhZ2FzeVwiLCB2YWx1ZTogXCJtZ1wiIH0sXHJcbiAgeyBuYW1lOiBcIk1hcnNoYWxsZXNlXCIsIHZhbHVlOiBcIm1oXCIgfSxcclxuICB7IG5hbWU6IFwiTcSBb3JpXCIsIHZhbHVlOiBcIm1pXCIgfSxcclxuICB7IG5hbWU6IFwiTWFjZWRvbmlhblwiLCB2YWx1ZTogXCJta1wiIH0sXHJcbiAgeyBuYW1lOiBcIk1hbGF5YWxhbVwiLCB2YWx1ZTogXCJtbFwiIH0sXHJcbiAgeyBuYW1lOiBcIk1vbmdvbGlhblwiLCB2YWx1ZTogXCJtblwiIH0sXHJcbiAgeyBuYW1lOiBcIk1vbGRhdmlhblwiLCB2YWx1ZTogXCJtb1wiIH0sXHJcbiAgeyBuYW1lOiBcIk1hcmF0aGlcIiwgdmFsdWU6IFwibXJcIiB9LFxyXG4gIHsgbmFtZTogXCJNYWxheVwiLCB2YWx1ZTogXCJtc1wiIH0sXHJcbiAgeyBuYW1lOiBcIk1hbHRlc2VcIiwgdmFsdWU6IFwibXRcIiB9LFxyXG4gIHsgbmFtZTogXCJCdXJtZXNlXCIsIHZhbHVlOiBcIm15XCIgfSxcclxuICB7IG5hbWU6IFwiTmF1cnVcIiwgdmFsdWU6IFwibmFcIiB9LFxyXG4gIHsgbmFtZTogXCJOb3J3ZWdpYW4gQm9rbcOlbFwiLCB2YWx1ZTogXCJuYlwiIH0sXHJcbiAgeyBuYW1lOiBcIk5vcnRoIE5kZWJlbGVcIiwgdmFsdWU6IFwibmRcIiB9LFxyXG4gIHsgbmFtZTogXCJOZXBhbGlcIiwgdmFsdWU6IFwibmVcIiB9LFxyXG4gIHsgbmFtZTogXCJOZG9uZ2FcIiwgdmFsdWU6IFwibmdcIiB9LFxyXG4gIHsgbmFtZTogXCJEdXRjaFwiLCB2YWx1ZTogXCJubFwiIH0sXHJcbiAgeyBuYW1lOiBcIk5vcndlZ2lhbiBOeW5vcnNrXCIsIHZhbHVlOiBcIm5uXCIgfSxcclxuICB7IG5hbWU6IFwiTm9yd2VnaWFuXCIsIHZhbHVlOiBcIm5vXCIgfSxcclxuICB7IG5hbWU6IFwiU291dGggTmRlYmVsZVwiLCB2YWx1ZTogXCJuclwiIH0sXHJcbiAgeyBuYW1lOiBcIk5hdmFqb1wiLCB2YWx1ZTogXCJudlwiIH0sXHJcbiAgeyBuYW1lOiBcIkNoaWNoZXdhXCIsIHZhbHVlOiBcIm55XCIgfSxcclxuICB7IG5hbWU6IFwiT2NjaXRhblwiLCB2YWx1ZTogXCJvY1wiIH0sXHJcbiAgeyBuYW1lOiBcIk9qaWJ3YVwiLCB2YWx1ZTogXCJvalwiIH0sXHJcbiAgeyBuYW1lOiBcIk9yb21vXCIsIHZhbHVlOiBcIm9tXCIgfSxcclxuICB7IG5hbWU6IFwiT3JpeWFcIiwgdmFsdWU6IFwib3JcIiB9LFxyXG4gIHsgbmFtZTogXCJPc3NldGlhblwiLCB2YWx1ZTogXCJvc1wiIH0sXHJcbiAgeyBuYW1lOiBcIlBhbmphYmlcIiwgdmFsdWU6IFwicGFcIiB9LFxyXG4gIHsgbmFtZTogXCJQxIFsaVwiLCB2YWx1ZTogXCJwaVwiIH0sXHJcbiAgeyBuYW1lOiBcIlBvbGlzaFwiLCB2YWx1ZTogXCJwbFwiIH0sXHJcbiAgeyBuYW1lOiBcIlBhc2h0b1wiLCB2YWx1ZTogXCJwc1wiIH0sXHJcbiAgeyBuYW1lOiBcIlBvcnR1Z3Vlc2VcIiwgdmFsdWU6IFwicHRcIiB9LFxyXG4gIHsgbmFtZTogXCJRdWVjaHVhXCIsIHZhbHVlOiBcInF1XCIgfSxcclxuICB7IG5hbWU6IFwiUmV1bmlvbmVzZVwiLCB2YWx1ZTogXCJyY1wiIH0sXHJcbiAgeyBuYW1lOiBcIlJvbWFuc2hcIiwgdmFsdWU6IFwicm1cIiB9LFxyXG4gIHsgbmFtZTogXCJLaXJ1bmRpXCIsIHZhbHVlOiBcInJuXCIgfSxcclxuICB7IG5hbWU6IFwiUm9tYW5pYW5cIiwgdmFsdWU6IFwicm9cIiB9LFxyXG4gIHsgbmFtZTogXCJSdXNzaWFuXCIsIHZhbHVlOiBcInJ1XCIgfSxcclxuICB7IG5hbWU6IFwiS2lueWFyd2FuZGFcIiwgdmFsdWU6IFwicndcIiB9LFxyXG4gIHsgbmFtZTogXCJTYW5za3JpdFwiLCB2YWx1ZTogXCJzYVwiIH0sXHJcbiAgeyBuYW1lOiBcIlNhcmRpbmlhblwiLCB2YWx1ZTogXCJzY1wiIH0sXHJcbiAgeyBuYW1lOiBcIlNpbmRoaVwiLCB2YWx1ZTogXCJzZFwiIH0sXHJcbiAgeyBuYW1lOiBcIk5vcnRoZXJuIFNhbWlcIiwgdmFsdWU6IFwic2VcIiB9LFxyXG4gIHsgbmFtZTogXCJTYW5nb1wiLCB2YWx1ZTogXCJzZ1wiIH0sXHJcbiAgeyBuYW1lOiBcIlNlcmJvLUNyb2F0aWFuXCIsIHZhbHVlOiBcInNoXCIgfSxcclxuICB7IG5hbWU6IFwiU2luaGFsZXNlXCIsIHZhbHVlOiBcInNpXCIgfSxcclxuICB7IG5hbWU6IFwiU2xvdmFrXCIsIHZhbHVlOiBcInNrXCIgfSxcclxuICB7IG5hbWU6IFwiU2xvdmVuaWFuXCIsIHZhbHVlOiBcInNsXCIgfSxcclxuICB7IG5hbWU6IFwiU2Ftb2FuXCIsIHZhbHVlOiBcInNtXCIgfSxcclxuICB7IG5hbWU6IFwiU2hvbmFcIiwgdmFsdWU6IFwic25cIiB9LFxyXG4gIHsgbmFtZTogXCJTb21hbGlcIiwgdmFsdWU6IFwic29cIiB9LFxyXG4gIHsgbmFtZTogXCJBbGJhbmlhblwiLCB2YWx1ZTogXCJzcVwiIH0sXHJcbiAgeyBuYW1lOiBcIlNlcmJpYW5cIiwgdmFsdWU6IFwic3JcIiB9LFxyXG4gIHsgbmFtZTogXCJTd2F0aVwiLCB2YWx1ZTogXCJzc1wiIH0sXHJcbiAgeyBuYW1lOiBcIlNvdGhvXCIsIHZhbHVlOiBcInN0XCIgfSxcclxuICB7IG5hbWU6IFwiU3VuZGFuZXNlXCIsIHZhbHVlOiBcInN1XCIgfSxcclxuICB7IG5hbWU6IFwiU3dlZGlzaFwiLCB2YWx1ZTogXCJzdlwiIH0sXHJcbiAgeyBuYW1lOiBcIlN3YWhpbGlcIiwgdmFsdWU6IFwic3dcIiB9LFxyXG4gIHsgbmFtZTogXCJUYW1pbFwiLCB2YWx1ZTogXCJ0YVwiIH0sXHJcbiAgeyBuYW1lOiBcIlRlbHVndVwiLCB2YWx1ZTogXCJ0ZVwiIH0sXHJcbiAgeyBuYW1lOiBcIlRhamlrXCIsIHZhbHVlOiBcInRnXCIgfSxcclxuICB7IG5hbWU6IFwiVGhhaVwiLCB2YWx1ZTogXCJ0aFwiIH0sXHJcbiAgeyBuYW1lOiBcIlRpZ3JpbnlhXCIsIHZhbHVlOiBcInRpXCIgfSxcclxuICB7IG5hbWU6IFwiVHVya21lblwiLCB2YWx1ZTogXCJ0a1wiIH0sXHJcbiAgeyBuYW1lOiBcIlRhZ2Fsb2dcIiwgdmFsdWU6IFwidGxcIiB9LFxyXG4gIHsgbmFtZTogXCJUc3dhbmFcIiwgdmFsdWU6IFwidG5cIiB9LFxyXG4gIHsgbmFtZTogXCJUb25nYVwiLCB2YWx1ZTogXCJ0b1wiIH0sXHJcbiAgeyBuYW1lOiBcIlR1cmtpc2hcIiwgdmFsdWU6IFwidHJcIiB9LFxyXG4gIHsgbmFtZTogXCJUc29uZ2FcIiwgdmFsdWU6IFwidHNcIiB9LFxyXG4gIHsgbmFtZTogXCJUYXRhclwiLCB2YWx1ZTogXCJ0dFwiIH0sXHJcbiAgeyBuYW1lOiBcIlR3aVwiLCB2YWx1ZTogXCJ0d1wiIH0sXHJcbiAgeyBuYW1lOiBcIlRhaGl0aWFuXCIsIHZhbHVlOiBcInR5XCIgfSxcclxuICB7IG5hbWU6IFwiVWlnaHVyXCIsIHZhbHVlOiBcInVnXCIgfSxcclxuICB7IG5hbWU6IFwiVWtyYWluaWFuXCIsIHZhbHVlOiBcInVrXCIgfSxcclxuICB7IG5hbWU6IFwiVXJkdVwiLCB2YWx1ZTogXCJ1clwiIH0sXHJcbiAgeyBuYW1lOiBcIlV6YmVrXCIsIHZhbHVlOiBcInV6XCIgfSxcclxuICB7IG5hbWU6IFwiVmVuZGFcIiwgdmFsdWU6IFwidmVcIiB9LFxyXG4gIHsgbmFtZTogXCJWacOqdCBOYW1lc2VcIiwgdmFsdWU6IFwidmlcIiB9LFxyXG4gIHsgbmFtZTogXCJWb2xhcMO8a1wiLCB2YWx1ZTogXCJ2b1wiIH0sXHJcbiAgeyBuYW1lOiBcIldhbGxvb25cIiwgdmFsdWU6IFwid2FcIiB9LFxyXG4gIHsgbmFtZTogXCJXb2xvZlwiLCB2YWx1ZTogXCJ3b1wiIH0sXHJcbiAgeyBuYW1lOiBcIlhob3NhXCIsIHZhbHVlOiBcInhoXCIgfSxcclxuICB7IG5hbWU6IFwiWWlkZGlzaFwiLCB2YWx1ZTogXCJ5aVwiIH0sXHJcbiAgeyBuYW1lOiBcIllvcnViYVwiLCB2YWx1ZTogXCJ5b1wiIH0sXHJcbiAgeyBuYW1lOiBcIlpodWFuZ1wiLCB2YWx1ZTogXCJ6YVwiIH0sXHJcbiAgeyBuYW1lOiBcIkNoaW5lc2VcIiwgdmFsdWU6IFwiemhcIiB9LFxyXG4gIHsgbmFtZTogXCJadWx1XCIsIHZhbHVlOiBcInp1XCIgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBTVEFUVVMgPSBbXHJcbiAgeyBuYW1lOiBcIkluIFByb2dyZXNzXCIsIHZhbHVlOiBcImluIHByb2dyZXNzXCIgfSxcclxuICB7IG5hbWU6IFwiSW4gSGlhdHVzXCIsIHZhbHVlOiBcImluIGhpYXR1c1wiIH0sXHJcbiAgeyBuYW1lOiBcIkNvbXBsZXRlZFwiLCB2YWx1ZTogXCJjb21wbGV0ZWRcIiB9LFxyXG5dO1xyXG5cclxuLy8gVFlQRVNcclxuZXhwb3J0IGNvbnN0IEdFVF9QUk9GSUxFID0gXCJHRVRfUFJPRklMRVwiO1xyXG5leHBvcnQgY29uc3QgTE9HSU4gPSBcIkxPR0lOXCI7XHJcbmV4cG9ydCBjb25zdCBSRUdJU1RFUiA9IFwiUkVHSVNURVJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfU1RPUlkgPSBcIkdFVF9TVE9SWVwiO1xyXG5leHBvcnQgY29uc3QgR0VUX0NIQVBURVJTID0gXCJHRVRfQ0hBUFRFUlNcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9VU0VSX1NUT1JJRVMgPSBcIkdFVF9VU0VSX1NUT1JJRVNcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9GQVZPUklURV9TVE9SSUVTID0gXCJHRVRfRkFWT1JJVEVfU1RPUklFU1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9VU0VSX0NIQVJBQ1RFUlMgPSBcIkdFVF9VU0VSX0NIQVJBQ1RFUlNcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9GQVZPUklURV9DSEFSQUNURVJTID0gXCJHRVRfRkFWT1JJVEVfQ0hBUkFDVEVSU1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9GQVZPUklURV9BVVRIT1JTID0gXCJHRVRfRkFWT1JJVEVfQVVUSE9SU1wiO1xyXG5leHBvcnQgY29uc3QgR0VUX0ZPTExPV0VSUyA9IFwiR0VUX0ZPTExPV0VSU1wiO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9hcHBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvYXV0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9maXJlc3RvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtY2FyZC1mbGlwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=