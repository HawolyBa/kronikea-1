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
      _redux_fbConfig__WEBPACK_IMPORTED_MODULE_2__["db"].collection("users").add({
        badges: [],
        biography: "",
        createdAt: firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a.firestore.FieldValue.serverTimestamp(),
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
var _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\pages\\auth.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







 //import Loader from "../components/common/Loader";

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
      Router.back();
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
  })) : __jsx("div", {
    className: "loader-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "loader",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }))));
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
  GET_USER_LOCATIONS: "GET_USER_LOCATIONS",
  GET_FAVORITE_CHARACTERS: "GET_FAVORITE_CHARACTERS",
  GET_STORY_CHARACTERS: "GET_STORY_CHARACTERS",
  ADD_LOCATION: "ADD_LOCATION",
  GET_LOCATION: "GET_LOCATION",
  EDIT_LOCATION: "EDIT_LOCATION",
  GET_COMMENTS: "GET_COMMENTS",
  GET_FAVORITE_AUTHORS: "GET_FAVORITE_AUTHORS",
  GET_STORY_LOCATIONS: "GET_STORY_LOCATIONS",
  GET_FOLLOWERS: "GET_FOLLOWERS",
  DISPATCH_ERROR: "DISPATCH_ERROR"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hdXRoL0xvZ2luLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYXV0aC9SZWdpc3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9ob29rcy91c2VySG9va3MuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXV0aC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25zL3VzZXJBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3JlZHV4L2ZiQ29uZmlnLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9hcHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9hdXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2Uvc3RvcmFnZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1jYXJkLWZsaXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIl0sIm5hbWVzIjpbIkxvZ2luIiwiZW1haWwiLCJwYXNzd29yZCIsImhhbmRsZUNsaWNrIiwic2V0UGFzc3dvcmQiLCJzZXRFbWFpbCIsInNpZ25pbiIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIlJlZ2lzdGVyIiwiY29uZmlybVBhc3N3b3JkIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInNldENvbmZpcm1QYXNzd29yZCIsInNpZ251cCIsImF1dGhDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIlByb3ZpZGVBdXRoIiwiY2hpbGRyZW4iLCJhdXRoIiwidXNlUHJvdmlkZUF1dGgiLCJ1c2VBdXRoIiwidXNlQ29udGV4dCIsInVzZXIiLCJzZXRVc2VyIiwidXNlU3RhdGUiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsInRoZW4iLCJyZXNwb25zZSIsImNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCIsImRiIiwiY29sbGVjdGlvbiIsImFkZCIsImJhZGdlcyIsImJpb2dyYXBoeSIsImNyZWF0ZWRBdCIsImZpcmViYXNlIiwiZmlyZXN0b3JlIiwiRmllbGRWYWx1ZSIsInNlcnZlclRpbWVzdGFtcCIsInN1c3BlbmRlZCIsImZhY2Vib29rIiwiaW5zdGFncmFtIiwidHdpdHRlciIsImRldmlhbnRhcnQiLCJsaWtlc0NvdW50IiwiaW1hZ2UiLCJzaWdub3V0Iiwic2lnbk91dCIsInNlbmRQYXNzd29yZFJlc2V0RW1haWwiLCJjb25maXJtUGFzc3dvcmRSZXNldCIsImNvZGUiLCJ1c2VFZmZlY3QiLCJ1bnN1YnNjcmliZSIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsInVpZCIsImRvYyIsIm9uU25hcHNob3QiLCJkYXRhIiwibG9nX2luIiwiaXNGbGlwcGVkIiwic2V0SXNGbGlwcGVkIiwiUm91dGVyIiwidXNlUm91dGVyIiwicHJldmVudERlZmF1bHQiLCJiYWNrIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJjb25uZWN0IiwiZGlzcGF0Y2giLCJjb25zb2xlIiwibG9nIiwiZ2V0UHJvZmlsZSIsImN1cnJlbnRVc2VyIiwidHlwZSIsIkdFVF9QUk9GSUxFIiwicGF5bG9hZCIsImlkIiwiZ2V0RmF2b3JpdGVBdXRob3JzIiwid2hlcmUiLCJnZXQiLCJkb2NzIiwiZmF2QXJyIiwiZm9yRWFjaCIsInJlY2lwaWVudCIsInVzZXJzIiwicmVzdWx0IiwibWFwIiwiUHJvbWlzZSIsImFsbCIsInJlcyIsImZhdlVzZXJzIiwiR0VUX0ZBVk9SSVRFX0FVVEhPUlMiLCJnZXRGb2xsb3dlcnMiLCJzZW5kZXJJZCIsIkdFVF9GT0xMT1dFUlMiLCJwcm9kQ29uZmlnIiwiYXBpS2V5IiwicHJvY2VzcyIsImF1dGhEb21haW4iLCJkYXRhYmFzZVVSTCIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwiRklSRUJBU0VfQVBQX0lEIiwiZGV2Q29uZmlnIiwiY29uZmlnIiwiYXBwcyIsImxlbmd0aCIsImluaXRpYWxpemVBcHAiLCJzdG9yYWdlIiwiQ0FURUdPUklFUyIsIm5hbWUiLCJDT1BZUklHSFRTIiwiTEFOR1VBR0VTIiwiU1RBVFVTIiwidHlwZXMiLCJMT0dJTiIsIlJFR0lTVEVSIiwiR0VUX1NUT1JZIiwiR0VUX1VTRVJfU1RPUklFUyIsIkdFVF9GQVZPUklURV9TVE9SSUVTIiwiQUREX1NUT1JZIiwiRURJVF9TVE9SWSIsIkRFTEVURV9TVE9SWSIsIklTX1NUT1JZX0ZBVk9SSVRFIiwiR0VUX0NIQVBURVIiLCJBRERfQ0hBUFRFUiIsIkVESVRfQ0hBUFRFUiIsIkRFTEVURV9DSEFQVEVSIiwiR0VUX0NIQVBURVJTIiwiQUREX0NIQVJBQ1RFUiIsIkdFVF9DSEFSQUNURVIiLCJFRElUX0NIQVJBQ1RFUiIsIkRFTEVURV9DSEFSQUNURVIiLCJHRVRfVVNFUl9DSEFSQUNURVJTIiwiR0VUX1VTRVJfTE9DQVRJT05TIiwiR0VUX0ZBVk9SSVRFX0NIQVJBQ1RFUlMiLCJHRVRfU1RPUllfQ0hBUkFDVEVSUyIsIkFERF9MT0NBVElPTiIsIkdFVF9MT0NBVElPTiIsIkVESVRfTE9DQVRJT04iLCJHRVRfQ09NTUVOVFMiLCJHRVRfU1RPUllfTE9DQVRJT05TIiwiRElTUEFUQ0hfRVJST1IiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7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QVksR0FBRyxjQUFyQjtBQUNBLE1BQU1DLGlCQUFpQixHQUFHLG1CQUExQjtBQUVBLE1BQU1DLFdBQVcsR0FBRyxhQUFwQjtBQUNBLE1BQU1DLFdBQVcsR0FBRyxhQUFwQjtBQUNBLE1BQU1DLFlBQVksR0FBRyxjQUFyQjtBQUNBLE1BQU1DLGNBQWMsR0FBRyxnQkFBdkI7QUFDQSxNQUFNQyxZQUFZLEdBQUcsY0FBckI7QUFFQSxNQUFNQyxhQUFhLEdBQUcsZUFBdEI7QUFDQSxNQUFNQyxhQUFhLEdBQUcsZUFBdEI7QUFDQSxNQUFNQyxjQUFjLEdBQUcsZ0JBQXZCO0FBQ0EsTUFBTUUsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsTUFBTUMsa0JBQWtCLEdBQUcsb0JBQTNCO0FBQ0EsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBQ0EsTUFBTUMsb0JBQW9CLEdBQUcsc0JBQTdCO0FBRUEsTUFBTUMsWUFBWSxHQUFHLGNBQXJCO0FBRUEsTUFBTWhELG9CQUFvQixHQUFHLHNCQUE3QjtBQUNBLE1BQU1HLGFBQWEsR0FBRyxlQUF0QjtBQUVBLE1BQU1rRCxjQUFjLEdBQUcsZ0JBQXZCLEM7Ozs7Ozs7Ozs7O0FDL1JQLHlDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLHdDIiwiZmlsZSI6InBhZ2VzL2F1dGguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2F1dGguanNcIik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBMb2dpbiA9ICh7XHJcbiAgZW1haWwsXHJcbiAgcGFzc3dvcmQsXHJcbiAgaGFuZGxlQ2xpY2ssXHJcbiAgc2V0UGFzc3dvcmQsXHJcbiAgc2V0RW1haWwsXHJcbiAgc2lnbmluLFxyXG59KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXItYXV0aFwiPlxyXG4gICAgICA8aDI+V2VsY29tZSBiYWNrIHRvIEtyb25pa2VhPC9oMj5cclxuICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiYXV0aC1mb3JtXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+RW1haWwgYWRkcmVzczwvbGFiZWw+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWlucHV0XCJcclxuICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwX19pY29uXCI+XHJcbiAgICAgICAgICAgICAgPGlvbi1pY29uIG5hbWU9XCJtYWlsXCI+PC9pb24taWNvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWlucHV0XCJcclxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwX19pY29uXCI+XHJcbiAgICAgICAgICAgICAgPGlvbi1pY29uIG5hbWU9XCJrZXlcIj48L2lvbi1pY29uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4tYnRuIGN1c3RvbS1idG5cIiBvbkNsaWNrPXtzaWduaW59PlxyXG4gICAgICAgICAgPHNwYW4+TG9naW48L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICAgPHAgb25DbGljaz17aGFuZGxlQ2xpY2t9PkRvbid0IGhhdmUgYW4gYWNjb3VudCB5ZXQgPyBSZWdpc3RlciBoZXJlPC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBSZWdpc3RlciA9ICh7XHJcbiAgZW1haWwsXHJcbiAgcGFzc3dvcmQsXHJcbiAgY29uZmlybVBhc3N3b3JkLFxyXG4gIHVzZXJuYW1lLFxyXG4gIHNldEVtYWlsLFxyXG4gIHNldFVzZXJuYW1lLFxyXG4gIHNldFBhc3N3b3JkLFxyXG4gIHNldENvbmZpcm1QYXNzd29yZCxcclxuICBoYW5kbGVDbGljayxcclxuICBzaWdudXAsXHJcbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lci1hdXRoXCI+XHJcbiAgICAgIDxoMj5XZWxjb21lIHRvIEtyb25pa2VhPC9oMj5cclxuICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiYXV0aC1mb3JtXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+RW1haWwgYWRkcmVzczwvbGFiZWw+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWlucHV0XCJcclxuICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwX19pY29uXCI+XHJcbiAgICAgICAgICAgICAgPGlvbi1pY29uIG5hbWU9XCJtYWlsXCI+PC9pb24taWNvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlcm5hbWVcIj5Vc2VybmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXt1c2VybmFtZX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWlucHV0XCJcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJ1c2VybmFtZVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBfX2ljb25cIj5cclxuICAgICAgICAgICAgICA8aW9uLWljb24gbmFtZT1cInBlcnNvblwiPjwvaW9uLWljb24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cF9faWNvblwiPlxyXG4gICAgICAgICAgICAgIDxpb24taWNvbiBuYW1lPVwia2V5XCI+PC9pb24taWNvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY29uZmlybS1wYXNzd29yZFwiPkNvbmZpcm0gUGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldENvbmZpcm1QYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e2NvbmZpcm1QYXNzd29yZH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWlucHV0XCJcclxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIGlkPVwiY29uZmlybS1wYXNzd29yZFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBfX2ljb25cIj5cclxuICAgICAgICAgICAgICA8aW9uLWljb24gbmFtZT1cImtleVwiPjwvaW9uLWljb24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbi1idG4gY3VzdG9tLWJ0blwiIG9uQ2xpY2s9e3NpZ251cH0+XHJcbiAgICAgICAgICA8c3Bhbj5DcmVhdGUgYWNjb3VudDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgICA8cCBvbkNsaWNrPXtoYW5kbGVDbGlja30+QWxyZWFkeSBoYXZlIGFuIGFjY291bnQgPyBMb2dpbiBoZXJlPC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVyO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCwgY3JlYXRlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlL2FwcFwiO1xyXG5pbXBvcnQgeyBhdXRoLCBkYiB9IGZyb20gXCIuLi9yZWR1eC9mYkNvbmZpZ1wiO1xyXG5cclxuY29uc3QgYXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUHJvdmlkZUF1dGgoeyBjaGlsZHJlbiB9KSB7XHJcbiAgY29uc3QgYXV0aCA9IHVzZVByb3ZpZGVBdXRoKCk7XHJcbiAgcmV0dXJuIDxhdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17YXV0aH0+e2NoaWxkcmVufTwvYXV0aENvbnRleHQuUHJvdmlkZXI+O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXNlQXV0aCA9ICgpID0+IHtcclxuICByZXR1cm4gdXNlQ29udGV4dChhdXRoQ29udGV4dCk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiB1c2VQcm92aWRlQXV0aCgpIHtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIC8vIFdyYXAgYW55IEZpcmViYXNlIG1ldGhvZHMgd2Ugd2FudCB0byB1c2UgbWFraW5nIHN1cmUgLi4uXHJcbiAgLy8gLi4uIHRvIHNhdmUgdGhlIHVzZXIgdG8gc3RhdGUuXHJcbiAgY29uc3Qgc2lnbmluID0gKGVtYWlsLCBwYXNzd29yZCkgPT4ge1xyXG4gICAgcmV0dXJuIGF1dGguc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBzZXRVc2VyKHJlc3BvbnNlLnVzZXIpO1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UudXNlcjtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNpZ251cCA9IChlbWFpbCwgcGFzc3dvcmQsIHVzZXJuYW1lKSA9PiB7XHJcbiAgICByZXR1cm4gYXV0aFxyXG4gICAgICAuY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZClcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgc2V0VXNlcihyZXNwb25zZS51c2VyKTtcclxuICAgICAgICBkYi5jb2xsZWN0aW9uKFwidXNlcnNcIikuYWRkKHtcclxuICAgICAgICAgIGJhZGdlczogW10sXHJcbiAgICAgICAgICBiaW9ncmFwaHk6IFwiXCIsXHJcbiAgICAgICAgICBjcmVhdGVkQXQ6IGZpcmViYXNlLmZpcmVzdG9yZS5GaWVsZFZhbHVlLnNlcnZlclRpbWVzdGFtcCgpLFxyXG4gICAgICAgICAgc3VzcGVuZGVkOiBmYWxzZSxcclxuICAgICAgICAgIGZhY2Vib29rOiBcIlwiLFxyXG4gICAgICAgICAgaW5zdGFncmFtOiBcIlwiLFxyXG4gICAgICAgICAgdHdpdHRlcjogXCJcIixcclxuICAgICAgICAgIGRldmlhbnRhcnQ6IFwiXCIsXHJcbiAgICAgICAgICBsaWtlc0NvdW50OiBcIlwiLFxyXG4gICAgICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLFxyXG4gICAgICAgICAgaW1hZ2U6IFwiXCIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnVzZXI7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNpZ25vdXQgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gYXV0aC5zaWduT3V0KCkudGhlbigoKSA9PiB7XHJcbiAgICAgIHNldFVzZXIoZmFsc2UpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2VuZFBhc3N3b3JkUmVzZXRFbWFpbCA9IChlbWFpbCkgPT4ge1xyXG4gICAgcmV0dXJuIGF1dGguc2VuZFBhc3N3b3JkUmVzZXRFbWFpbChlbWFpbCkudGhlbigoKSA9PiB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY29uZmlybVBhc3N3b3JkUmVzZXQgPSAoY29kZSwgcGFzc3dvcmQpID0+IHtcclxuICAgIHJldHVybiBhdXRoLmNvbmZpcm1QYXNzd29yZFJlc2V0KGNvZGUsIHBhc3N3b3JkKS50aGVuKCgpID0+IHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdW5zdWJzY3JpYmUgPSBhdXRoLm9uQXV0aFN0YXRlQ2hhbmdlZCgodXNlcikgPT4ge1xyXG4gICAgICBpZiAodXNlcikge1xyXG4gICAgICAgIHNldFVzZXIodXNlcik7XHJcbiAgICAgICAgaWYgKHVzZXIudWlkKSB7XHJcbiAgICAgICAgICBsZXQgdXNlcm5hbWUgPSBcIlwiO1xyXG4gICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgIGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKVxyXG4gICAgICAgICAgICAuZG9jKHVzZXIudWlkKVxyXG4gICAgICAgICAgICAub25TbmFwc2hvdCgoZG9jKSA9PiB7XHJcbiAgICAgICAgICAgICAgdXNlcm5hbWUgPSBkb2MuZGF0YSgpLnVzZXJuYW1lO1xyXG4gICAgICAgICAgICAgIHNldFVzZXIoeyAuLi51c2VyLCB1c2VybmFtZSwgaW1hZ2U6IGRvYy5kYXRhKCkuaW1hZ2UgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRVc2VyKGZhbHNlKTtcclxuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBDbGVhbnVwIHN1YnNjcmlwdGlvbiBvbiB1bm1vdW50XHJcbiAgICByZXR1cm4gKCkgPT4gdW5zdWJzY3JpYmUoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8vIFJldHVybiB0aGUgdXNlciBvYmplY3QgYW5kIGF1dGggbWV0aG9kc1xyXG4gIHJldHVybiB7XHJcbiAgICBpc0xvYWRpbmcsXHJcbiAgICB1c2VyLFxyXG4gICAgc2lnbmluLFxyXG4gICAgc2lnbnVwLFxyXG4gICAgc2lnbm91dCxcclxuICAgIHNlbmRQYXNzd29yZFJlc2V0RW1haWwsXHJcbiAgICBjb25maXJtUGFzc3dvcmRSZXNldCxcclxuICB9O1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSZWFjdENhcmRGbGlwIGZyb20gXCJyZWFjdC1jYXJkLWZsaXBcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCBMb2dpbiBmcm9tIFwiLi4vY29tcG9uZW50cy9hdXRoL0xvZ2luXCI7XHJcbmltcG9ydCBSZWdpc3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9hdXRoL1JlZ2lzdGVyXCI7XHJcbmltcG9ydCB7IGxvZ19pbiB9IGZyb20gXCIuLi9yZWR1eC9hY3Rpb25zL3VzZXJBY3Rpb25zXCI7XHJcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tIFwiLi4vaG9va3MvdXNlckhvb2tzXCI7XHJcbi8vaW1wb3J0IExvYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9jb21tb24vTG9hZGVyXCI7XHJcblxyXG5jb25zdCBhdXRoID0gKHsgbG9nX2luIH0pID0+IHtcclxuICBjb25zdCBbaXNGbGlwcGVkLCBzZXRJc0ZsaXBwZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjb25maXJtUGFzc3dvcmQsIHNldENvbmZpcm1QYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBhdXRoID0gdXNlQXV0aCgpO1xyXG4gIGNvbnN0IFJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRJc0ZsaXBwZWQoIWlzRmxpcHBlZCk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChhdXRoLnVzZXIpIHtcclxuICAgICAgUm91dGVyLmJhY2soKTtcclxuICAgIH1cclxuICB9LCBbYXV0aC51c2VyXSk7XHJcblxyXG4gIGNvbnN0IHNpZ25pbiA9ICgpID0+IGF1dGguc2lnbmluKGVtYWlsLCBwYXNzd29yZCk7XHJcbiAgY29uc3Qgc2lnbnVwID0gKCkgPT4gYXV0aC5zaWdudXAoZW1haWwsIHBhc3N3b3JkLCB1c2VybmFtZSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImF1dGhlbnRpY2F0aW9uXCI+XHJcbiAgICAgIHshYXV0aC5pc0xvYWRpbmcgJiYgIWF1dGgudXNlciA/IChcclxuICAgICAgICA8UmVhY3RDYXJkRmxpcCBpc0ZsaXBwZWQ9e2lzRmxpcHBlZH0gZmxpcERpcmVjdGlvbj1cImhvcml6b250YWxcIj5cclxuICAgICAgICAgIDxMb2dpblxyXG4gICAgICAgICAgICBzaWduaW49e3NpZ25pbn1cclxuICAgICAgICAgICAgc2V0UGFzc3dvcmQ9e3NldFBhc3N3b3JkfVxyXG4gICAgICAgICAgICBzZXRFbWFpbD17c2V0RW1haWx9XHJcbiAgICAgICAgICAgIGVtYWlsPXtlbWFpbH1cclxuICAgICAgICAgICAgcGFzc3dvcmQ9e3Bhc3N3b3JkfVxyXG4gICAgICAgICAgICBoYW5kbGVDbGljaz17aGFuZGxlQ2xpY2t9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPFJlZ2lzdGVyXHJcbiAgICAgICAgICAgIHNldFBhc3N3b3JkPXtzZXRQYXNzd29yZH1cclxuICAgICAgICAgICAgc2V0RW1haWw9e3NldEVtYWlsfVxyXG4gICAgICAgICAgICBzaWdudXA9e3NpZ251cH1cclxuICAgICAgICAgICAgZW1haWw9e2VtYWlsfVxyXG4gICAgICAgICAgICBwYXNzd29yZD17cGFzc3dvcmR9XHJcbiAgICAgICAgICAgIHVzZXJuYW1lPXt1c2VybmFtZX1cclxuICAgICAgICAgICAgc2V0VXNlcm5hbWU9e3NldFVzZXJuYW1lfVxyXG4gICAgICAgICAgICBjb25maXJtUGFzc3dvcmQ9e2NvbmZpcm1QYXNzd29yZH1cclxuICAgICAgICAgICAgc2V0Q29uZmlybVBhc3N3b3JkPXtzZXRDb25maXJtUGFzc3dvcmR9XHJcbiAgICAgICAgICAgIGhhbmRsZUNsaWNrPXtoYW5kbGVDbGlja31cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9SZWFjdENhcmRGbGlwPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGVyLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkZXJcIj5cclxuICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHt9KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7IGxvZ19pbiB9KShhdXRoKTtcclxuIiwiaW1wb3J0IHsgZGIsIGF1dGggfSBmcm9tIFwiLi4vZmJDb25maWdcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgR0VUX1BST0ZJTEUsXHJcbiAgR0VUX0ZBVk9SSVRFX0FVVEhPUlMsXHJcbiAgR0VUX0ZPTExPV0VSUyxcclxufSBmcm9tIFwiLi4vLi4vdXRpbHMvY29uc3RhbnRzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgbG9nX2luID0gKGVtYWlsLCBwYXNzd29yZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgY29uc29sZS5sb2coZW1haWwsIHBhc3N3b3JkKTtcclxuICBhdXRoLnNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UHJvZmlsZSA9ICgpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKVxyXG4gICAgLmRvYyhhdXRoLmN1cnJlbnRVc2VyLnVpZClcclxuICAgIC5vblNuYXBzaG90KChkb2MpID0+IHtcclxuICAgICAgcmV0dXJuIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiBHRVRfUFJPRklMRSxcclxuICAgICAgICBwYXlsb2FkOiB7IGlkOiBkb2MuaWQsIC4uLmRvYy5kYXRhKCkgfSxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRGYXZvcml0ZUF1dGhvcnMgPSAoKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkYi5jb2xsZWN0aW9uKFwidXNlcnNMaWtlc1wiKVxyXG4gICAgLndoZXJlKFwic2VuZGVySWRcIiwgXCI9PVwiLCBhdXRoLmN1cnJlbnRVc2VyLnVpZClcclxuICAgIC5nZXQoKVxyXG4gICAgLnRoZW4oKGRvY3MpID0+IHtcclxuICAgICAgbGV0IGZhdkFyciA9IFtdO1xyXG4gICAgICBkb2NzLmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgICAgIGZhdkFyciA9IFsuLi5mYXZBcnIsIGRvYy5kYXRhKCkucmVjaXBpZW50XTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBmYXZBcnI7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKHVzZXJzKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHVzZXJzLm1hcCgodXNlcikgPT5cclxuICAgICAgICBkYi5jb2xsZWN0aW9uKFwidXNlcnNcIikuZG9jKHVzZXIpLmdldCgpXHJcbiAgICAgICk7XHJcbiAgICAgIFByb21pc2UuYWxsKHJlc3VsdCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgbGV0IGZhdlVzZXJzID0gW107XHJcbiAgICAgICAgcmVzLmZvckVhY2goXHJcbiAgICAgICAgICAoZG9jKSA9PiAoZmF2VXNlcnMgPSBbLi4uZmF2VXNlcnMsIHsgaWQ6IGRvYy5pZCwgLi4uZG9jLmRhdGEoKSB9XSlcclxuICAgICAgICApO1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IEdFVF9GQVZPUklURV9BVVRIT1JTLFxyXG4gICAgICAgICAgcGF5bG9hZDogZmF2VXNlcnMsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Rm9sbG93ZXJzID0gKCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGIuY29sbGVjdGlvbihcInVzZXJzTGlrZXNcIilcclxuICAgIC53aGVyZShcInJlY2lwaWVudFwiLCBcIj09XCIsIGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigoZG9jcykgPT4ge1xyXG4gICAgICBsZXQgZmF2QXJyID0gW107XHJcbiAgICAgIGRvY3MuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICAgICAgZmF2QXJyID0gWy4uLmZhdkFyciwgZG9jLmRhdGEoKS5zZW5kZXJJZF07XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gZmF2QXJyO1xyXG4gICAgfSlcclxuICAgIC50aGVuKCh1c2VycykgPT4ge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSB1c2Vycy5tYXAoKHVzZXIpID0+XHJcbiAgICAgICAgZGIuY29sbGVjdGlvbihcInVzZXJzXCIpLmRvYyh1c2VyKS5nZXQoKVxyXG4gICAgICApO1xyXG4gICAgICBQcm9taXNlLmFsbChyZXN1bHQpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGxldCBmYXZVc2VycyA9IFtdO1xyXG4gICAgICAgIHJlcy5mb3JFYWNoKFxyXG4gICAgICAgICAgKGRvYykgPT4gKGZhdlVzZXJzID0gWy4uLmZhdlVzZXJzLCB7IGlkOiBkb2MuaWQsIC4uLmRvYy5kYXRhKCkgfV0pXHJcbiAgICAgICAgKTtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiBHRVRfRk9MTE9XRVJTLFxyXG4gICAgICAgICAgcGF5bG9hZDogZmF2VXNlcnMsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcbiIsImltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcbmltcG9ydCBcImZpcmViYXNlL2F1dGhcIjtcclxuaW1wb3J0IFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XHJcbmltcG9ydCBcImZpcmViYXNlL3N0b3JhZ2VcIjtcclxuXHJcbmNvbnN0IHByb2RDb25maWcgPSB7XHJcbiAgYXBpS2V5OiBwcm9jZXNzLmVudi5GSVJFQkFTRV9BUElfS0VZLFxyXG4gIGF1dGhEb21haW46IHByb2Nlc3MuZW52LkZJUkVCQVNFX0FVVEhfRE9NQUlOLFxyXG4gIGRhdGFiYXNlVVJMOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9EQVRBQkFTRV9VUkwsXHJcbiAgcHJvamVjdElkOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9QUk9KRUNUX0lELFxyXG4gIHN0b3JhZ2VCdWNrZXQ6IHByb2Nlc3MuZW52LkZJUkVCQVNFX1NUT1JBR0VfQlVDS0VULFxyXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9NRVNTQUdJTkdfU0VOREVSX0lELFxyXG4gIGFwcElkOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9BUFBfSUQsXHJcbn07XHJcblxyXG5jb25zdCBkZXZDb25maWcgPSB7XHJcbiAgYXBpS2V5OiBwcm9jZXNzLmVudi5GSVJFQkFTRV9BUElfS0VZLFxyXG4gIGF1dGhEb21haW46IHByb2Nlc3MuZW52LkZJUkVCQVNFX0FVVEhfRE9NQUlOLFxyXG4gIGRhdGFiYXNlVVJMOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9EQVRBQkFTRV9VUkwsXHJcbiAgcHJvamVjdElkOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9QUk9KRUNUX0lELFxyXG4gIHN0b3JhZ2VCdWNrZXQ6IHByb2Nlc3MuZW52LkZJUkVCQVNFX1NUT1JBR0VfQlVDS0VULFxyXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9NRVNTQUdJTkdfU0VOREVSX0lELFxyXG4gIGFwcElkOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9BUFBfSUQsXHJcbn07XHJcblxyXG5jb25zdCBjb25maWcgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBwcm9kQ29uZmlnIDogZGV2Q29uZmlnO1xyXG5cclxuaWYgKCFmaXJlYmFzZS5hcHBzLmxlbmd0aCkge1xyXG4gIGZpcmViYXNlLmluaXRpYWxpemVBcHAoY29uZmlnKTtcclxufVxyXG5cclxuY29uc3QgZGIgPSBmaXJlYmFzZS5maXJlc3RvcmUoKTtcclxuY29uc3QgYXV0aCA9IGZpcmViYXNlLmF1dGgoKTtcclxuY29uc3Qgc3RvcmFnZSA9IGZpcmViYXNlLnN0b3JhZ2UoKTtcclxuXHJcbmV4cG9ydCB7IGRiLCBhdXRoLCBzdG9yYWdlIH07XHJcbmV4cG9ydCBkZWZhdWx0IGNvbmZpZztcclxuIiwiZXhwb3J0IGNvbnN0IENBVEVHT1JJRVMgPSBbXHJcbiAgeyBuYW1lOiBcIkRyYW1hXCIsIHZhbHVlOiBcImRyYW1hXCIgfSxcclxuICB7IG5hbWU6IFwiQ29tZWR5XCIsIHZhbHVlOiBcImNvbWVkeVwiIH0sXHJcbiAgeyBuYW1lOiBcIkhvcnJvclwiLCB2YWx1ZTogXCJob3Jyb3JcIiB9LFxyXG4gIHsgbmFtZTogXCJSb21hbmNlXCIsIHZhbHVlOiBcInJvbWFuY2VcIiB9LFxyXG4gIHsgbmFtZTogXCJTY2ktZmlcIiwgdmFsdWU6IFwic2NpLWZpXCIgfSxcclxuICB7IG5hbWU6IFwiRmFudGFzeVwiLCB2YWx1ZTogXCJmYW50YXN5XCIgfSxcclxuICB7IG5hbWU6IFwiSHVtb3JcIiwgdmFsdWU6IFwiaHVtb3JcIiB9LFxyXG4gIHsgbmFtZTogXCJBY3Rpb25cIiwgdmFsdWU6IFwiYWN0aW9uXCIgfSxcclxuICB7IG5hbWU6IFwiVGhyaWxsZXJcIiwgdmFsdWU6IFwidGhyaWxsZXJcIiB9LFxyXG4gIHsgbmFtZTogXCJTdXBlcm5hdHVyYWxcIiwgdmFsdWU6IFwic3VwZXJuYXR1cmFsXCIgfSxcclxuICB7IG5hbWU6IFwiQWR2ZW50dXJlXCIsIHZhbHVlOiBcImFkdmVudHVyZVwiIH0sXHJcbiAgeyBuYW1lOiBcIk15c3RlcnlcIiwgdmFsdWU6IFwibXlzdGVyeVwiIH0sXHJcbiAgeyBuYW1lOiBcIldlc3Rlcm5cIiwgdmFsdWU6IFwid2VzdGVyblwiIH0sXHJcbiAgeyBuYW1lOiBcIkhpc3RvcnlcIiwgdmFsdWU6IFwiaGlzdG9yeVwiIH0sXHJcbiAgeyBuYW1lOiBcIkNyaW1lXCIsIHZhbHVlOiBcImNyaW1lXCIgfSxcclxuICB7IG5hbWU6IFwiRmFuZmljdGlvblwiLCB2YWx1ZTogXCJmYW5maWN0aW9uXCIgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBDT1BZUklHSFRTID0gW1xyXG4gIHsgbmFtZTogXCJQdWJsaWMgRG9tYWluXCIsIHZhbHVlOiBcInB1YmxpYyBkb21haW5cIiB9LFxyXG4gIHsgbmFtZTogXCJBbGwgUmlnaHRzIFJlc2VydmVkXCIsIHZhbHVlOiBcImFsbCByaWdodHMgcmVzZXJ2ZWRcIiB9LFxyXG4gIHsgbmFtZTogXCJDcmVhdGl2ZSBDb21tb25zXCIsIHZhbHVlOiBcImNyZWF0aXZlIGNvbW1vbnNcIiB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IExBTkdVQUdFUyA9IFtcclxuICB7IG5hbWU6IFwiQWZhclwiLCB2YWx1ZTogXCJhYVwiIH0sXHJcbiAgeyBuYW1lOiBcIkFia2hhemlhblwiLCB2YWx1ZTogXCJhYlwiIH0sXHJcbiAgeyBuYW1lOiBcIkF2ZXN0YW5cIiwgdmFsdWU6IFwiYWVcIiB9LFxyXG4gIHsgbmFtZTogXCJBZnJpa2FhbnNcIiwgdmFsdWU6IFwiYWZcIiB9LFxyXG4gIHsgbmFtZTogXCJBa2FuXCIsIHZhbHVlOiBcImFrXCIgfSxcclxuICB7IG5hbWU6IFwiQW1oYXJpY1wiLCB2YWx1ZTogXCJhbVwiIH0sXHJcbiAgeyBuYW1lOiBcIkFyYWdvbmVzZVwiLCB2YWx1ZTogXCJhblwiIH0sXHJcbiAgeyBuYW1lOiBcIkFyYWJpY1wiLCB2YWx1ZTogXCJhclwiIH0sXHJcbiAgeyBuYW1lOiBcIkFzc2FtZXNlXCIsIHZhbHVlOiBcImFzXCIgfSxcclxuICB7IG5hbWU6IFwiQXZhcmljXCIsIHZhbHVlOiBcImF2XCIgfSxcclxuICB7IG5hbWU6IFwiQXltYXJhXCIsIHZhbHVlOiBcImF5XCIgfSxcclxuICB7IG5hbWU6IFwiQXplcmJhaWphbmlcIiwgdmFsdWU6IFwiYXpcIiB9LFxyXG4gIHsgbmFtZTogXCJCYXNoa2lyXCIsIHZhbHVlOiBcImJhXCIgfSxcclxuICB7IG5hbWU6IFwiQmVsYXJ1c2lhblwiLCB2YWx1ZTogXCJiZVwiIH0sXHJcbiAgeyBuYW1lOiBcIkJ1bGdhcmlhblwiLCB2YWx1ZTogXCJiZ1wiIH0sXHJcbiAgeyBuYW1lOiBcIkJpaGFyaVwiLCB2YWx1ZTogXCJiaFwiIH0sXHJcbiAgeyBuYW1lOiBcIkJpc2xhbWFcIiwgdmFsdWU6IFwiYmlcIiB9LFxyXG4gIHsgbmFtZTogXCJCYW1iYXJhXCIsIHZhbHVlOiBcImJtXCIgfSxcclxuICB7IG5hbWU6IFwiQmVuZ2FsaVwiLCB2YWx1ZTogXCJiblwiIH0sXHJcbiAgeyBuYW1lOiBcIlRpYmV0YW5cIiwgdmFsdWU6IFwiYm9cIiB9LFxyXG4gIHsgbmFtZTogXCJCcmV0b25cIiwgdmFsdWU6IFwiYnJcIiB9LFxyXG4gIHsgbmFtZTogXCJCb3NuaWFuXCIsIHZhbHVlOiBcImJzXCIgfSxcclxuICB7IG5hbWU6IFwiQ2F0YWxhblwiLCB2YWx1ZTogXCJjYVwiIH0sXHJcbiAgeyBuYW1lOiBcIkNoZWNoZW5cIiwgdmFsdWU6IFwiY2VcIiB9LFxyXG4gIHsgbmFtZTogXCJDaGFtb3Jyb1wiLCB2YWx1ZTogXCJjaFwiIH0sXHJcbiAgeyBuYW1lOiBcIkNvcnNpY2FuXCIsIHZhbHVlOiBcImNvXCIgfSxcclxuICB7IG5hbWU6IFwiQ3JlZVwiLCB2YWx1ZTogXCJjclwiIH0sXHJcbiAgeyBuYW1lOiBcIkN6ZWNoXCIsIHZhbHVlOiBcImNzXCIgfSxcclxuICB7IG5hbWU6IFwiT2xkIENodXJjaCBTbGF2b25pY1wiLCB2YWx1ZTogXCJjdVwiIH0sXHJcbiAgeyBuYW1lOiBcIkNodXZhc2hcIiwgdmFsdWU6IFwiY3ZcIiB9LFxyXG4gIHsgbmFtZTogXCJXZWxzaFwiLCB2YWx1ZTogXCJjeVwiIH0sXHJcbiAgeyBuYW1lOiBcIkRhbmlzaFwiLCB2YWx1ZTogXCJkYVwiIH0sXHJcbiAgeyBuYW1lOiBcIkdlcm1hblwiLCB2YWx1ZTogXCJkZVwiIH0sXHJcbiAgeyBuYW1lOiBcIkRpdmVoaVwiLCB2YWx1ZTogXCJkdlwiIH0sXHJcbiAgeyBuYW1lOiBcIkR6b25na2hhXHRcIiwgdmFsdWU6IFwiZHpcIiB9LFxyXG4gIHsgbmFtZTogXCJFd2VcIiwgdmFsdWU6IFwiZWVcIiB9LFxyXG4gIHsgbmFtZTogXCJHcmVla1wiLCB2YWx1ZTogXCJlbFwiIH0sXHJcbiAgeyBuYW1lOiBcIkVuZ2xpc2hcIiwgdmFsdWU6IFwiZW5cIiB9LFxyXG4gIHsgbmFtZTogXCJFc3BlcmFudG9cIiwgdmFsdWU6IFwiZW9cIiB9LFxyXG4gIHsgbmFtZTogXCJTcGFuaXNoXCIsIHZhbHVlOiBcImVzXCIgfSxcclxuICB7IG5hbWU6IFwiRXN0b25pYW5cIiwgdmFsdWU6IFwiZXRcIiB9LFxyXG4gIHsgbmFtZTogXCJCYXNxdWVcIiwgdmFsdWU6IFwiZXVcIiB9LFxyXG4gIHsgbmFtZTogXCJQZXJzaWFuXCIsIHZhbHVlOiBcImZhXCIgfSxcclxuICB7IG5hbWU6IFwiRnVsYWhcIiwgdmFsdWU6IFwiZmZcIiB9LFxyXG4gIHsgbmFtZTogXCJGaW5uaXNoXCIsIHZhbHVlOiBcImZpXCIgfSxcclxuICB7IG5hbWU6IFwiRmlqaWFuXCIsIHZhbHVlOiBcImZqXCIgfSxcclxuICB7IG5hbWU6IFwiRmFyb2VzZVwiLCB2YWx1ZTogXCJmb1wiIH0sXHJcbiAgeyBuYW1lOiBcIkZyZW5jaFwiLCB2YWx1ZTogXCJmclwiIH0sXHJcbiAgeyBuYW1lOiBcIldlc3Rlcm4gRnJpc2lhblwiLCB2YWx1ZTogXCJmeVwiIH0sXHJcbiAgeyBuYW1lOiBcIklyaXNoXCIsIHZhbHVlOiBcImdhXCIgfSxcclxuICB7IG5hbWU6IFwiU2NvdHRpc2ggR2FlbGljXCIsIHZhbHVlOiBcImdkXCIgfSxcclxuICB7IG5hbWU6IFwiR2FsaWNpYW5cIiwgdmFsdWU6IFwiZ2xcIiB9LFxyXG4gIHsgbmFtZTogXCJHdWFyYW5pXCIsIHZhbHVlOiBcImduXCIgfSxcclxuICB7IG5hbWU6IFwiR3VqYXJhdGlcIiwgdmFsdWU6IFwiZ3VcIiB9LFxyXG4gIHsgbmFtZTogXCJNYW54XCIsIHZhbHVlOiBcImd2XCIgfSxcclxuICB7IG5hbWU6IFwiSGF1c2FcIiwgdmFsdWU6IFwiaGFcIiB9LFxyXG4gIHsgbmFtZTogXCJIZWJyZXdcIiwgdmFsdWU6IFwiaGVcIiB9LFxyXG4gIHsgbmFtZTogXCJIaW5kaVwiLCB2YWx1ZTogXCJoaVwiIH0sXHJcbiAgeyBuYW1lOiBcIkhpcmkgTW90dVwiLCB2YWx1ZTogXCJob1wiIH0sXHJcbiAgeyBuYW1lOiBcIkNyb2F0aWFuXCIsIHZhbHVlOiBcImhyXCIgfSxcclxuICB7IG5hbWU6IFwiSGFpdGlhblwiLCB2YWx1ZTogXCJodFwiIH0sXHJcbiAgeyBuYW1lOiBcIkh1bmdhcmlhblwiLCB2YWx1ZTogXCJodVwiIH0sXHJcbiAgeyBuYW1lOiBcIkFybWVuaWFuXCIsIHZhbHVlOiBcImh5XCIgfSxcclxuICB7IG5hbWU6IFwiSGVyZXJvXCIsIHZhbHVlOiBcImh6XCIgfSxcclxuICB7IG5hbWU6IFwiSW50ZXJsaW5ndWFcIiwgdmFsdWU6IFwiaWFcIiB9LFxyXG4gIHsgbmFtZTogXCJJbmRvbmVzaWFuXCIsIHZhbHVlOiBcImlkXCIgfSxcclxuICB7IG5hbWU6IFwiSW50ZXJsaW5ndWVcIiwgdmFsdWU6IFwiaWVcIiB9LFxyXG4gIHsgbmFtZTogXCJJZ2JvXCIsIHZhbHVlOiBcImlnXCIgfSxcclxuICB7IG5hbWU6IFwiU2ljaHVhbiBZaVwiLCB2YWx1ZTogXCJpaVwiIH0sXHJcbiAgeyBuYW1lOiBcIkludXBpYXFcIiwgdmFsdWU6IFwiaWtcIiB9LFxyXG4gIHsgbmFtZTogXCJJZG9cIiwgdmFsdWU6IFwiaW9cIiB9LFxyXG4gIHsgbmFtZTogXCJJY2VsYW5kaWNcIiwgdmFsdWU6IFwiaXNcIiB9LFxyXG4gIHsgbmFtZTogXCJJdGFsaWFuXCIsIHZhbHVlOiBcIml0XCIgfSxcclxuICB7IG5hbWU6IFwiSW51a3RpdHV0XCIsIHZhbHVlOiBcIml1XCIgfSxcclxuICB7IG5hbWU6IFwiSmFwYW5lc2VcIiwgdmFsdWU6IFwiamFcIiB9LFxyXG4gIHsgbmFtZTogXCJKYXZhbmVzZVwiLCB2YWx1ZTogXCJqdlwiIH0sXHJcbiAgeyBuYW1lOiBcIkdlb3JnaWFuXCIsIHZhbHVlOiBcImthXCIgfSxcclxuICB7IG5hbWU6IFwiS29uZ29cIiwgdmFsdWU6IFwia2dcIiB9LFxyXG4gIHsgbmFtZTogXCJLaWt1eXVcIiwgdmFsdWU6IFwia2lcIiB9LFxyXG4gIHsgbmFtZTogXCJLd2FueWFtYVwiLCB2YWx1ZTogXCJralwiIH0sXHJcbiAgeyBuYW1lOiBcIkthemFraFwiLCB2YWx1ZTogXCJra1wiIH0sXHJcbiAgeyBuYW1lOiBcIkdyZWVubGFuZGljXCIsIHZhbHVlOiBcImtsXCIgfSxcclxuICB7IG5hbWU6IFwiS2htZXJcIiwgdmFsdWU6IFwia21cIiB9LFxyXG4gIHsgbmFtZTogXCJLYW5uYWRhXCIsIHZhbHVlOiBcImtuXCIgfSxcclxuICB7IG5hbWU6IFwiS29yZWFuXCIsIHZhbHVlOiBcImtvXCIgfSxcclxuICB7IG5hbWU6IFwiS2FudXJpXCIsIHZhbHVlOiBcImtyXCIgfSxcclxuICB7IG5hbWU6IFwiS2FzaG1pcmlcIiwgdmFsdWU6IFwia3NcIiB9LFxyXG4gIHsgbmFtZTogXCJLdXJkaXNoXCIsIHZhbHVlOiBcImt1XCIgfSxcclxuICB7IG5hbWU6IFwiS29taVwiLCB2YWx1ZTogXCJrdlwiIH0sXHJcbiAgeyBuYW1lOiBcIkNvcm5pc2hcIiwgdmFsdWU6IFwia3dcIiB9LFxyXG4gIHsgbmFtZTogXCJLaXJnaGl6XCIsIHZhbHVlOiBcImt5XCIgfSxcclxuICB7IG5hbWU6IFwiTGF0aW5cIiwgdmFsdWU6IFwibGFcIiB9LFxyXG4gIHsgbmFtZTogXCJMdXhlbWJvdXJnaXNoXCIsIHZhbHVlOiBcImxiXCIgfSxcclxuICB7IG5hbWU6IFwiR2FuZGFcIiwgdmFsdWU6IFwibGdcIiB9LFxyXG4gIHsgbmFtZTogXCJMaW1idXJnaXNoXCIsIHZhbHVlOiBcImxpXCIgfSxcclxuICB7IG5hbWU6IFwiTGluZ2FsYVwiLCB2YWx1ZTogXCJsblwiIH0sXHJcbiAgeyBuYW1lOiBcIkxhb1wiLCB2YWx1ZTogXCJsb1wiIH0sXHJcbiAgeyBuYW1lOiBcIkxpdGh1YW5pYW5cIiwgdmFsdWU6IFwibHRcIiB9LFxyXG4gIHsgbmFtZTogXCJMdWJhXCIsIHZhbHVlOiBcImx1XCIgfSxcclxuICB7IG5hbWU6IFwiTGF0dmlhblwiLCB2YWx1ZTogXCJsdlwiIH0sXHJcbiAgeyBuYW1lOiBcIk1hbGFnYXN5XCIsIHZhbHVlOiBcIm1nXCIgfSxcclxuICB7IG5hbWU6IFwiTWFyc2hhbGxlc2VcIiwgdmFsdWU6IFwibWhcIiB9LFxyXG4gIHsgbmFtZTogXCJNxIFvcmlcIiwgdmFsdWU6IFwibWlcIiB9LFxyXG4gIHsgbmFtZTogXCJNYWNlZG9uaWFuXCIsIHZhbHVlOiBcIm1rXCIgfSxcclxuICB7IG5hbWU6IFwiTWFsYXlhbGFtXCIsIHZhbHVlOiBcIm1sXCIgfSxcclxuICB7IG5hbWU6IFwiTW9uZ29saWFuXCIsIHZhbHVlOiBcIm1uXCIgfSxcclxuICB7IG5hbWU6IFwiTW9sZGF2aWFuXCIsIHZhbHVlOiBcIm1vXCIgfSxcclxuICB7IG5hbWU6IFwiTWFyYXRoaVwiLCB2YWx1ZTogXCJtclwiIH0sXHJcbiAgeyBuYW1lOiBcIk1hbGF5XCIsIHZhbHVlOiBcIm1zXCIgfSxcclxuICB7IG5hbWU6IFwiTWFsdGVzZVwiLCB2YWx1ZTogXCJtdFwiIH0sXHJcbiAgeyBuYW1lOiBcIkJ1cm1lc2VcIiwgdmFsdWU6IFwibXlcIiB9LFxyXG4gIHsgbmFtZTogXCJOYXVydVwiLCB2YWx1ZTogXCJuYVwiIH0sXHJcbiAgeyBuYW1lOiBcIk5vcndlZ2lhbiBCb2ttw6VsXCIsIHZhbHVlOiBcIm5iXCIgfSxcclxuICB7IG5hbWU6IFwiTm9ydGggTmRlYmVsZVwiLCB2YWx1ZTogXCJuZFwiIH0sXHJcbiAgeyBuYW1lOiBcIk5lcGFsaVwiLCB2YWx1ZTogXCJuZVwiIH0sXHJcbiAgeyBuYW1lOiBcIk5kb25nYVwiLCB2YWx1ZTogXCJuZ1wiIH0sXHJcbiAgeyBuYW1lOiBcIkR1dGNoXCIsIHZhbHVlOiBcIm5sXCIgfSxcclxuICB7IG5hbWU6IFwiTm9yd2VnaWFuIE55bm9yc2tcIiwgdmFsdWU6IFwibm5cIiB9LFxyXG4gIHsgbmFtZTogXCJOb3J3ZWdpYW5cIiwgdmFsdWU6IFwibm9cIiB9LFxyXG4gIHsgbmFtZTogXCJTb3V0aCBOZGViZWxlXCIsIHZhbHVlOiBcIm5yXCIgfSxcclxuICB7IG5hbWU6IFwiTmF2YWpvXCIsIHZhbHVlOiBcIm52XCIgfSxcclxuICB7IG5hbWU6IFwiQ2hpY2hld2FcIiwgdmFsdWU6IFwibnlcIiB9LFxyXG4gIHsgbmFtZTogXCJPY2NpdGFuXCIsIHZhbHVlOiBcIm9jXCIgfSxcclxuICB7IG5hbWU6IFwiT2ppYndhXCIsIHZhbHVlOiBcIm9qXCIgfSxcclxuICB7IG5hbWU6IFwiT3JvbW9cIiwgdmFsdWU6IFwib21cIiB9LFxyXG4gIHsgbmFtZTogXCJPcml5YVwiLCB2YWx1ZTogXCJvclwiIH0sXHJcbiAgeyBuYW1lOiBcIk9zc2V0aWFuXCIsIHZhbHVlOiBcIm9zXCIgfSxcclxuICB7IG5hbWU6IFwiUGFuamFiaVwiLCB2YWx1ZTogXCJwYVwiIH0sXHJcbiAgeyBuYW1lOiBcIlDEgWxpXCIsIHZhbHVlOiBcInBpXCIgfSxcclxuICB7IG5hbWU6IFwiUG9saXNoXCIsIHZhbHVlOiBcInBsXCIgfSxcclxuICB7IG5hbWU6IFwiUGFzaHRvXCIsIHZhbHVlOiBcInBzXCIgfSxcclxuICB7IG5hbWU6IFwiUG9ydHVndWVzZVwiLCB2YWx1ZTogXCJwdFwiIH0sXHJcbiAgeyBuYW1lOiBcIlF1ZWNodWFcIiwgdmFsdWU6IFwicXVcIiB9LFxyXG4gIHsgbmFtZTogXCJSZXVuaW9uZXNlXCIsIHZhbHVlOiBcInJjXCIgfSxcclxuICB7IG5hbWU6IFwiUm9tYW5zaFwiLCB2YWx1ZTogXCJybVwiIH0sXHJcbiAgeyBuYW1lOiBcIktpcnVuZGlcIiwgdmFsdWU6IFwicm5cIiB9LFxyXG4gIHsgbmFtZTogXCJSb21hbmlhblwiLCB2YWx1ZTogXCJyb1wiIH0sXHJcbiAgeyBuYW1lOiBcIlJ1c3NpYW5cIiwgdmFsdWU6IFwicnVcIiB9LFxyXG4gIHsgbmFtZTogXCJLaW55YXJ3YW5kYVwiLCB2YWx1ZTogXCJyd1wiIH0sXHJcbiAgeyBuYW1lOiBcIlNhbnNrcml0XCIsIHZhbHVlOiBcInNhXCIgfSxcclxuICB7IG5hbWU6IFwiU2FyZGluaWFuXCIsIHZhbHVlOiBcInNjXCIgfSxcclxuICB7IG5hbWU6IFwiU2luZGhpXCIsIHZhbHVlOiBcInNkXCIgfSxcclxuICB7IG5hbWU6IFwiTm9ydGhlcm4gU2FtaVwiLCB2YWx1ZTogXCJzZVwiIH0sXHJcbiAgeyBuYW1lOiBcIlNhbmdvXCIsIHZhbHVlOiBcInNnXCIgfSxcclxuICB7IG5hbWU6IFwiU2VyYm8tQ3JvYXRpYW5cIiwgdmFsdWU6IFwic2hcIiB9LFxyXG4gIHsgbmFtZTogXCJTaW5oYWxlc2VcIiwgdmFsdWU6IFwic2lcIiB9LFxyXG4gIHsgbmFtZTogXCJTbG92YWtcIiwgdmFsdWU6IFwic2tcIiB9LFxyXG4gIHsgbmFtZTogXCJTbG92ZW5pYW5cIiwgdmFsdWU6IFwic2xcIiB9LFxyXG4gIHsgbmFtZTogXCJTYW1vYW5cIiwgdmFsdWU6IFwic21cIiB9LFxyXG4gIHsgbmFtZTogXCJTaG9uYVwiLCB2YWx1ZTogXCJzblwiIH0sXHJcbiAgeyBuYW1lOiBcIlNvbWFsaVwiLCB2YWx1ZTogXCJzb1wiIH0sXHJcbiAgeyBuYW1lOiBcIkFsYmFuaWFuXCIsIHZhbHVlOiBcInNxXCIgfSxcclxuICB7IG5hbWU6IFwiU2VyYmlhblwiLCB2YWx1ZTogXCJzclwiIH0sXHJcbiAgeyBuYW1lOiBcIlN3YXRpXCIsIHZhbHVlOiBcInNzXCIgfSxcclxuICB7IG5hbWU6IFwiU290aG9cIiwgdmFsdWU6IFwic3RcIiB9LFxyXG4gIHsgbmFtZTogXCJTdW5kYW5lc2VcIiwgdmFsdWU6IFwic3VcIiB9LFxyXG4gIHsgbmFtZTogXCJTd2VkaXNoXCIsIHZhbHVlOiBcInN2XCIgfSxcclxuICB7IG5hbWU6IFwiU3dhaGlsaVwiLCB2YWx1ZTogXCJzd1wiIH0sXHJcbiAgeyBuYW1lOiBcIlRhbWlsXCIsIHZhbHVlOiBcInRhXCIgfSxcclxuICB7IG5hbWU6IFwiVGVsdWd1XCIsIHZhbHVlOiBcInRlXCIgfSxcclxuICB7IG5hbWU6IFwiVGFqaWtcIiwgdmFsdWU6IFwidGdcIiB9LFxyXG4gIHsgbmFtZTogXCJUaGFpXCIsIHZhbHVlOiBcInRoXCIgfSxcclxuICB7IG5hbWU6IFwiVGlncmlueWFcIiwgdmFsdWU6IFwidGlcIiB9LFxyXG4gIHsgbmFtZTogXCJUdXJrbWVuXCIsIHZhbHVlOiBcInRrXCIgfSxcclxuICB7IG5hbWU6IFwiVGFnYWxvZ1wiLCB2YWx1ZTogXCJ0bFwiIH0sXHJcbiAgeyBuYW1lOiBcIlRzd2FuYVwiLCB2YWx1ZTogXCJ0blwiIH0sXHJcbiAgeyBuYW1lOiBcIlRvbmdhXCIsIHZhbHVlOiBcInRvXCIgfSxcclxuICB7IG5hbWU6IFwiVHVya2lzaFwiLCB2YWx1ZTogXCJ0clwiIH0sXHJcbiAgeyBuYW1lOiBcIlRzb25nYVwiLCB2YWx1ZTogXCJ0c1wiIH0sXHJcbiAgeyBuYW1lOiBcIlRhdGFyXCIsIHZhbHVlOiBcInR0XCIgfSxcclxuICB7IG5hbWU6IFwiVHdpXCIsIHZhbHVlOiBcInR3XCIgfSxcclxuICB7IG5hbWU6IFwiVGFoaXRpYW5cIiwgdmFsdWU6IFwidHlcIiB9LFxyXG4gIHsgbmFtZTogXCJVaWdodXJcIiwgdmFsdWU6IFwidWdcIiB9LFxyXG4gIHsgbmFtZTogXCJVa3JhaW5pYW5cIiwgdmFsdWU6IFwidWtcIiB9LFxyXG4gIHsgbmFtZTogXCJVcmR1XCIsIHZhbHVlOiBcInVyXCIgfSxcclxuICB7IG5hbWU6IFwiVXpiZWtcIiwgdmFsdWU6IFwidXpcIiB9LFxyXG4gIHsgbmFtZTogXCJWZW5kYVwiLCB2YWx1ZTogXCJ2ZVwiIH0sXHJcbiAgeyBuYW1lOiBcIlZpw6p0IE5hbWVzZVwiLCB2YWx1ZTogXCJ2aVwiIH0sXHJcbiAgeyBuYW1lOiBcIlZvbGFww7xrXCIsIHZhbHVlOiBcInZvXCIgfSxcclxuICB7IG5hbWU6IFwiV2FsbG9vblwiLCB2YWx1ZTogXCJ3YVwiIH0sXHJcbiAgeyBuYW1lOiBcIldvbG9mXCIsIHZhbHVlOiBcIndvXCIgfSxcclxuICB7IG5hbWU6IFwiWGhvc2FcIiwgdmFsdWU6IFwieGhcIiB9LFxyXG4gIHsgbmFtZTogXCJZaWRkaXNoXCIsIHZhbHVlOiBcInlpXCIgfSxcclxuICB7IG5hbWU6IFwiWW9ydWJhXCIsIHZhbHVlOiBcInlvXCIgfSxcclxuICB7IG5hbWU6IFwiWmh1YW5nXCIsIHZhbHVlOiBcInphXCIgfSxcclxuICB7IG5hbWU6IFwiQ2hpbmVzZVwiLCB2YWx1ZTogXCJ6aFwiIH0sXHJcbiAgeyBuYW1lOiBcIlp1bHVcIiwgdmFsdWU6IFwienVcIiB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNUQVRVUyA9IFtcclxuICB7IG5hbWU6IFwiSW4gUHJvZ3Jlc3NcIiwgdmFsdWU6IFwiaW4gcHJvZ3Jlc3NcIiB9LFxyXG4gIHsgbmFtZTogXCJJbiBIaWF0dXNcIiwgdmFsdWU6IFwiaW4gaGlhdHVzXCIgfSxcclxuICB7IG5hbWU6IFwiQ29tcGxldGVkXCIsIHZhbHVlOiBcImNvbXBsZXRlZFwiIH0sXHJcbl07XHJcblxyXG4vLyBUWVBFU1xyXG5leHBvcnQgY29uc3QgdHlwZXMgPSB7XHJcbiAgR0VUX1BST0ZJTEU6IFwiR0VUX1BST0ZJTEVcIixcclxuICBMT0dJTjogXCJMT0dJTlwiLFxyXG4gIFJFR0lTVEVSOiBcIlJFR0lTVEVSXCIsXHJcbiAgR0VUX1NUT1JZOiBcIkdFVF9TVE9SWVwiLFxyXG4gIEdFVF9VU0VSX1NUT1JJRVM6IFwiR0VUX1VTRVJfU1RPUklFU1wiLFxyXG4gIEdFVF9GQVZPUklURV9TVE9SSUVTOiBcIkdFVF9GQVZPUklURV9TVE9SSUVTXCIsXHJcbiAgQUREX1NUT1JZOiBcIkFERF9TVE9SWVwiLFxyXG4gIEVESVRfU1RPUlk6IFwiRURJVF9TVE9SWVwiLFxyXG4gIERFTEVURV9TVE9SWTogXCJERUxFVEVfU1RPUllcIixcclxuICBJU19TVE9SWV9GQVZPUklURTogXCJJU19TVE9SWV9GQVZPUklURVwiLFxyXG4gIEdFVF9DSEFQVEVSOiBcIkdFVF9DSEFQVEVSXCIsXHJcbiAgQUREX0NIQVBURVI6IFwiQUREX0NIQVBURVJcIixcclxuICBFRElUX0NIQVBURVI6IFwiRURJVF9DSEFQVEVSXCIsXHJcbiAgREVMRVRFX0NIQVBURVI6IFwiREVMRVRFX0NIQVBURVJcIixcclxuICBHRVRfQ0hBUFRFUlM6IFwiR0VUX0NIQVBURVJTXCIsXHJcbiAgQUREX0NIQVJBQ1RFUjogXCJBRERfQ0hBUkFDVEVSXCIsXHJcbiAgR0VUX0NIQVJBQ1RFUjogXCJHRVRfQ0hBUkFDVEVSXCIsXHJcbiAgRURJVF9DSEFSQUNURVI6IFwiRURJVF9DSEFSQUNURVJcIixcclxuICBERUxFVEVfQ0hBUkFDVEVSOiBcIkRFTEVURV9DSEFSQUNURVJcIixcclxuICBHRVRfVVNFUl9DSEFSQUNURVJTOiBcIkdFVF9VU0VSX0NIQVJBQ1RFUlNcIixcclxuICBHRVRfVVNFUl9MT0NBVElPTlM6IFwiR0VUX1VTRVJfTE9DQVRJT05TXCIsXHJcbiAgR0VUX0ZBVk9SSVRFX0NIQVJBQ1RFUlM6IFwiR0VUX0ZBVk9SSVRFX0NIQVJBQ1RFUlNcIixcclxuICBHRVRfU1RPUllfQ0hBUkFDVEVSUzogXCJHRVRfU1RPUllfQ0hBUkFDVEVSU1wiLFxyXG4gIEFERF9MT0NBVElPTjogXCJBRERfTE9DQVRJT05cIixcclxuICBHRVRfTE9DQVRJT046IFwiR0VUX0xPQ0FUSU9OXCIsXHJcbiAgRURJVF9MT0NBVElPTjogXCJFRElUX0xPQ0FUSU9OXCIsXHJcbiAgR0VUX0NPTU1FTlRTOiBcIkdFVF9DT01NRU5UU1wiLFxyXG4gIEdFVF9GQVZPUklURV9BVVRIT1JTOiBcIkdFVF9GQVZPUklURV9BVVRIT1JTXCIsXHJcbiAgR0VUX1NUT1JZX0xPQ0FUSU9OUzogXCJHRVRfU1RPUllfTE9DQVRJT05TXCIsXHJcbiAgR0VUX0ZPTExPV0VSUzogXCJHRVRfRk9MTE9XRVJTXCIsXHJcbiAgRElTUEFUQ0hfRVJST1I6IFwiRElTUEFUQ0hfRVJST1JcIixcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfUFJPRklMRSA9IFwiR0VUX1BST0ZJTEVcIjtcclxuZXhwb3J0IGNvbnN0IExPR0lOID0gXCJMT0dJTlwiO1xyXG5leHBvcnQgY29uc3QgUkVHSVNURVIgPSBcIlJFR0lTVEVSXCI7XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX1NUT1JZID0gXCJHRVRfU1RPUllcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9VU0VSX1NUT1JJRVMgPSBcIkdFVF9VU0VSX1NUT1JJRVNcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9GQVZPUklURV9TVE9SSUVTID0gXCJHRVRfRkFWT1JJVEVfU1RPUklFU1wiO1xyXG5leHBvcnQgY29uc3QgQUREX1NUT1JZID0gXCJBRERfU1RPUllcIjtcclxuZXhwb3J0IGNvbnN0IEVESVRfU1RPUlkgPSBcIkVESVRfU1RPUllcIjtcclxuZXhwb3J0IGNvbnN0IERFTEVURV9TVE9SWSA9IFwiREVMRVRFX1NUT1JZXCI7XHJcbmV4cG9ydCBjb25zdCBJU19TVE9SWV9GQVZPUklURSA9IFwiSVNfU1RPUllfRkFWT1JJVEVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfQ0hBUFRFUiA9IFwiR0VUX0NIQVBURVJcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9DSEFQVEVSID0gXCJBRERfQ0hBUFRFUlwiO1xyXG5leHBvcnQgY29uc3QgRURJVF9DSEFQVEVSID0gXCJFRElUX0NIQVBURVJcIjtcclxuZXhwb3J0IGNvbnN0IERFTEVURV9DSEFQVEVSID0gXCJERUxFVEVfQ0hBUFRFUlwiO1xyXG5leHBvcnQgY29uc3QgR0VUX0NIQVBURVJTID0gXCJHRVRfQ0hBUFRFUlNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfQ0hBUkFDVEVSID0gXCJBRERfQ0hBUkFDVEVSXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfQ0hBUkFDVEVSID0gXCJHRVRfQ0hBUkFDVEVSXCI7XHJcbmV4cG9ydCBjb25zdCBFRElUX0NIQVJBQ1RFUiA9IFwiRURJVF9DSEFSQUNURVJcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9VU0VSX0NIQVJBQ1RFUlMgPSBcIkdFVF9VU0VSX0NIQVJBQ1RFUlNcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9VU0VSX0xPQ0FUSU9OUyA9IFwiR0VUX1VTRVJfTE9DQVRJT05TXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfRkFWT1JJVEVfQ0hBUkFDVEVSUyA9IFwiR0VUX0ZBVk9SSVRFX0NIQVJBQ1RFUlNcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9TVE9SWV9DSEFSQUNURVJTID0gXCJHRVRfU1RPUllfQ0hBUkFDVEVSU1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9MT0NBVElPTiA9IFwiQUREX0xPQ0FUSU9OXCI7XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX0ZBVk9SSVRFX0FVVEhPUlMgPSBcIkdFVF9GQVZPUklURV9BVVRIT1JTXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfRk9MTE9XRVJTID0gXCJHRVRfRk9MTE9XRVJTXCI7XHJcblxyXG5leHBvcnQgY29uc3QgRElTUEFUQ0hfRVJST1IgPSBcIkRJU1BBVENIX0VSUk9SXCI7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2FwcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9hdXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2ZpcmVzdG9yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9zdG9yYWdlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWNhcmQtZmxpcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9