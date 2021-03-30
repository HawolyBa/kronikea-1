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
      lineNumber: 35,
      columnNumber: 5
    }
  }, !auth.isLoading && !auth.user ? __jsx(react_card_flip__WEBPACK_IMPORTED_MODULE_1___default.a, {
    isFlipped: isFlipped,
    flipDirection: "horizontal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
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
      lineNumber: 38,
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
      lineNumber: 46,
      columnNumber: 11
    }
  })) : __jsx("div", {
    className: "loader-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "loader",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }), __jsx("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hdXRoL0xvZ2luLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYXV0aC9SZWdpc3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9ob29rcy91c2VySG9va3MuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXV0aC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25zL3VzZXJBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3JlZHV4L2ZiQ29uZmlnLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2UvYXBwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2UvYXV0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL2ZpcmVzdG9yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL3N0b3JhZ2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtY2FyZC1mbGlwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiJdLCJuYW1lcyI6WyJMb2dpbiIsImVtYWlsIiwicGFzc3dvcmQiLCJoYW5kbGVDbGljayIsInNldFBhc3N3b3JkIiwic2V0RW1haWwiLCJzaWduaW4iLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJSZWdpc3RlciIsImNvbmZpcm1QYXNzd29yZCIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJzZXRDb25maXJtUGFzc3dvcmQiLCJzaWdudXAiLCJhdXRoQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJQcm92aWRlQXV0aCIsImNoaWxkcmVuIiwiYXV0aCIsInVzZVByb3ZpZGVBdXRoIiwidXNlQXV0aCIsInVzZUNvbnRleHQiLCJ1c2VyIiwic2V0VXNlciIsInVzZVN0YXRlIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJ0aGVuIiwicmVzcG9uc2UiLCJjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJkYiIsImNvbGxlY3Rpb24iLCJkb2MiLCJ1aWQiLCJzZXQiLCJsaWtlc0NvdW50IiwidHdpdHRlciIsImZhY2Vib29rIiwiaW5zdGFncmFtIiwiZGV2aWFudGFydCIsImJpb2dyYXBoeSIsImJhZGdlcyIsImNyZWF0ZWRBdCIsImZpcmViYXNlIiwiZmlyZXN0b3JlIiwiRmllbGRWYWx1ZSIsInNlcnZlclRpbWVzdGFtcCIsImltYWdlIiwic3VzcGVuZGVkIiwic2lnbm91dCIsInNpZ25PdXQiLCJzZW5kUGFzc3dvcmRSZXNldEVtYWlsIiwiY29uZmlybVBhc3N3b3JkUmVzZXQiLCJjb2RlIiwidXNlRWZmZWN0IiwidW5zdWJzY3JpYmUiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJvblNuYXBzaG90IiwiZGF0YSIsImxvZ19pbiIsImlzRmxpcHBlZCIsInNldElzRmxpcHBlZCIsIlJvdXRlciIsInVzZVJvdXRlciIsInByZXZlbnREZWZhdWx0IiwiYmFjayIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiY29ubmVjdCIsImRpc3BhdGNoIiwiY29uc29sZSIsImxvZyIsImdldFByb2ZpbGUiLCJpZCIsImN1cnJlbnRVc2VyIiwidHlwZSIsInR5cGVzIiwiR0VUX1BST0ZJTEUiLCJwYXlsb2FkIiwiZ2V0RmF2b3JpdGVBdXRob3JzIiwiYWRkZWRPbiIsInVzZXJJZCIsIndoZXJlIiwiZ2V0IiwiZG9jcyIsImZhdkFyciIsImZvckVhY2giLCJyZWNpcGllbnQiLCJ1c2VycyIsInJlc3VsdCIsIm1hcCIsIlByb21pc2UiLCJhbGwiLCJyZXMiLCJmYXZVc2VycyIsIkdFVF9GQVZPUklURV9BVVRIT1JTIiwiZ2V0Rm9sbG93ZXJzIiwic2VuZGVySWQiLCJHRVRfRk9MTE9XRVJTIiwiZ2V0SXNGb2xsb3dpbmciLCJzbmFwc2hvdCIsImFuc3dlciIsImxlbmd0aCIsIklTX0ZPTExPV0lORyIsImZvbGxvd1VzZXIiLCJpc0Zhdm9yaXRlIiwibmV3Rm9sbG93ZXIiLCJtZXNzYWdlIiwid2FybmluZyIsImVycm9yIiwiZW1haWxWZXJpZmllZCIsImFkZCIsInNlbmRlciIsInN1Y2Nlc3MiLCJjYXRjaCIsImVyciIsInVuZm9sbG93VXNlciIsImRlbGV0ZSIsInByb2RDb25maWciLCJhcGlLZXkiLCJwcm9jZXNzIiwiYXV0aERvbWFpbiIsImRhdGFiYXNlVVJMIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJGSVJFQkFTRV9BUFBfSUQiLCJkZXZDb25maWciLCJjb25maWciLCJhcHBzIiwiaW5pdGlhbGl6ZUFwcCIsInN0b3JhZ2UiLCJDQVRFR09SSUVTIiwibmFtZSIsIkNPUFlSSUdIVFMiLCJMQU5HVUFHRVMiLCJTVEFUVVMiLCJMT0dJTiIsIlJFR0lTVEVSIiwiR0VUX1NUT1JZIiwiR0VUX1VTRVJfU1RPUklFUyIsIkdFVF9GQVZPUklURV9TVE9SSUVTIiwiQUREX1NUT1JZIiwiRURJVF9TVE9SWSIsIkRFTEVURV9TVE9SWSIsIklTX1NUT1JZX0ZBVk9SSVRFIiwiR0VUX0NIQVBURVIiLCJBRERfQ0hBUFRFUiIsIkVESVRfQ0hBUFRFUiIsIkRFTEVURV9DSEFQVEVSIiwiR0VUX0NIQVBURVJTIiwiQUREX0NIQVJBQ1RFUiIsIkdFVF9DSEFSQUNURVIiLCJFRElUX0NIQVJBQ1RFUiIsIkRFTEVURV9DSEFSQUNURVIiLCJHRVRfVVNFUl9DSEFSQUNURVJTIiwiR0VUX0NIQVJBQ1RFUl9DT01NRU5UUyIsIkdFVF9VU0VSX0xPQ0FUSU9OUyIsIkdFVF9GQVZPUklURV9DSEFSQUNURVJTIiwiR0VUX1NUT1JZX0NIQVJBQ1RFUlMiLCJBRERfTE9DQVRJT04iLCJHRVRfTE9DQVRJT04iLCJFRElUX0xPQ0FUSU9OIiwiREVMRVRFX0xPQ0FUSU9OIiwiR0VUX0NPTU1FTlRTIiwiR0VUX1NUT1JZX0xPQ0FUSU9OUyIsIkRJU1BBVENIX0VSUk9SIiwiU1VCTUlUX0NPTU1FTlQiLCJSQVRFX0NPTU1FTlQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTs7QUFFQSxNQUFNQSxLQUFLLEdBQUcsQ0FBQztBQUNiQyxPQURhO0FBRWJDLFVBRmE7QUFHYkMsYUFIYTtBQUliQyxhQUphO0FBS2JDLFVBTGE7QUFNYkM7QUFOYSxDQUFELEtBT1I7QUFDSixTQUNFO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtB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dkp1QixFQXdKdkI7QUFBRWdJLE1BQUksRUFBRSxVQUFSO0FBQW9CaEksT0FBSyxFQUFFO0FBQTNCLENBeEp1QixFQXlKdkI7QUFBRWdJLE1BQUksRUFBRSxTQUFSO0FBQW1CaEksT0FBSyxFQUFFO0FBQTFCLENBekp1QixFQTBKdkI7QUFBRWdJLE1BQUksRUFBRSxPQUFSO0FBQWlCaEksT0FBSyxFQUFFO0FBQXhCLENBMUp1QixFQTJKdkI7QUFBRWdJLE1BQUksRUFBRSxPQUFSO0FBQWlCaEksT0FBSyxFQUFFO0FBQXhCLENBM0p1QixFQTRKdkI7QUFBRWdJLE1BQUksRUFBRSxXQUFSO0FBQXFCaEksT0FBSyxFQUFFO0FBQTVCLENBNUp1QixFQTZKdkI7QUFBRWdJLE1BQUksRUFBRSxTQUFSO0FBQW1CaEksT0FBSyxFQUFFO0FBQTFCLENBN0p1QixFQThKdkI7QUFBRWdJLE1BQUksRUFBRSxTQUFSO0FBQW1CaEksT0FBSyxFQUFFO0FBQTFCLENBOUp1QixFQStKdkI7QUFBRWdJLE1BQUksRUFBRSxPQUFSO0FBQWlCaEksT0FBSyxFQUFFO0FBQXhCLENBL0p1QixFQWdLdkI7QUFBRWdJLE1BQUksRUFBRSxRQUFSO0FBQWtCaEksT0FBSyxFQUFFO0FBQXpCLENBaEt1QixFQWlLdkI7QUFBRWdJLE1BQUksRUFBRSxPQUFSO0FBQWlCaEksT0FBSyxFQUFFO0FBQXhCLENBakt1QixFQWtLdkI7QUFBRWdJLE1BQUksRUFBRSxNQUFSO0FBQWdCaEksT0FBSyxFQUFFO0FBQXZCLENBbEt1QixFQW1LdkI7QUFBRWdJLE1BQUksRUFBRSxVQUFSO0FBQW9CaEksT0FBSyxFQUFFO0FBQTNCLENBbkt1QixFQW9LdkI7QUFBRWdJLE1BQUksRUFBRSxTQUFSO0FBQW1CaEksT0FBSyxFQUFFO0FBQTFCLENBcEt1QixFQXFLdkI7QUFBRWdJLE1BQUksRUFBRSxTQUFSO0FBQW1CaEksT0FBSyxFQUFFO0FBQTFCLENBckt1QixFQXNLdkI7QUFBRWdJLE1BQUksRUFBRSxRQUFSO0FBQWtCaEksT0FBSyxFQUFFO0FBQXpCLENB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Q0EsTUFBTUMsV0FBVyxHQUFHLGFBQXBCO0FBQ0EsTUFBTUMsWUFBWSxHQUFHLGNBQXJCO0FBQ0EsTUFBTUMsY0FBYyxHQUFHLGdCQUF2QjtBQUNBLE1BQU1DLFlBQVksR0FBRyxjQUFyQjtBQUVBLE1BQU1DLGFBQWEsR0FBRyxlQUF0QjtBQUNBLE1BQU1DLGFBQWEsR0FBRyxlQUF0QjtBQUNBLE1BQU1DLGNBQWMsR0FBRyxnQkFBdkI7QUFDQSxNQUFNRSxtQkFBbUIsR0FBRyxxQkFBNUI7QUFDQSxNQUFNRSxrQkFBa0IsR0FBRyxvQkFBM0I7QUFDQSxNQUFNQyx1QkFBdUIsR0FBRyx5QkFBaEM7QUFDQSxNQUFNQyxvQkFBb0IsR0FBRyxzQkFBN0I7QUFFQSxNQUFNQyxZQUFZLEdBQUcsY0FBckI7QUFFQSxNQUFNbEUsb0JBQW9CLEdBQUcsc0JBQTdCO0FBQ0EsTUFBTUcsYUFBYSxHQUFHLGVBQXRCO0FBRUEsTUFBTXFFLGNBQWMsR0FBRyxnQkFBdkIsQzs7Ozs7Ozs7Ozs7QUNwU1AsaUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsd0MiLCJmaWxlIjoicGFnZXMvYXV0aC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYXV0aC5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IExvZ2luID0gKHtcclxuICBlbWFpbCxcclxuICBwYXNzd29yZCxcclxuICBoYW5kbGVDbGljayxcclxuICBzZXRQYXNzd29yZCxcclxuICBzZXRFbWFpbCxcclxuICBzaWduaW4sXHJcbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lci1hdXRoXCI+XHJcbiAgICAgIDxoMj5XZWxjb21lIGJhY2sgdG8gS3JvbmlrZWE8L2gyPlxyXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9XCJhdXRoLWZvcm1cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5FbWFpbCBhZGRyZXNzPC9sYWJlbD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0taW5wdXRcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBfX2ljb25cIj5cclxuICAgICAgICAgICAgICA8aW9uLWljb24gbmFtZT1cIm1haWxcIj48L2lvbi1pY29uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0taW5wdXRcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBfX2ljb25cIj5cclxuICAgICAgICAgICAgICA8aW9uLWljb24gbmFtZT1cImtleVwiPjwvaW9uLWljb24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbi1idG4gY3VzdG9tLWJ0blwiIG9uQ2xpY2s9e3NpZ25pbn0+XHJcbiAgICAgICAgICA8c3Bhbj5Mb2dpbjwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgICA8cCBvbkNsaWNrPXtoYW5kbGVDbGlja30+RG9uJ3QgaGF2ZSBhbiBhY2NvdW50IHlldCA/IFJlZ2lzdGVyIGhlcmU8L3A+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW47XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFJlZ2lzdGVyID0gKHtcclxuICBlbWFpbCxcclxuICBwYXNzd29yZCxcclxuICBjb25maXJtUGFzc3dvcmQsXHJcbiAgdXNlcm5hbWUsXHJcbiAgc2V0RW1haWwsXHJcbiAgc2V0VXNlcm5hbWUsXHJcbiAgc2V0UGFzc3dvcmQsXHJcbiAgc2V0Q29uZmlybVBhc3N3b3JkLFxyXG4gIGhhbmRsZUNsaWNrLFxyXG4gIHNpZ251cCxcclxufSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyLWF1dGhcIj5cclxuICAgICAgPGgyPldlbGNvbWUgdG8gS3JvbmlrZWE8L2gyPlxyXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9XCJhdXRoLWZvcm1cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5FbWFpbCBhZGRyZXNzPC9sYWJlbD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0taW5wdXRcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBfX2ljb25cIj5cclxuICAgICAgICAgICAgICA8aW9uLWljb24gbmFtZT1cIm1haWxcIj48L2lvbi1pY29uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VybmFtZVwiPlVzZXJuYW1lPC9sYWJlbD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e3VzZXJuYW1lfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0taW5wdXRcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBpZD1cInVzZXJuYW1lXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cF9faWNvblwiPlxyXG4gICAgICAgICAgICAgIDxpb24taWNvbiBuYW1lPVwicGVyc29uXCI+PC9pb24taWNvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWlucHV0XCJcclxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwX19pY29uXCI+XHJcbiAgICAgICAgICAgICAgPGlvbi1pY29uIG5hbWU9XCJrZXlcIj48L2lvbi1pY29uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb25maXJtLXBhc3N3b3JkXCI+Q29uZmlybSBQYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q29uZmlybVBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICB2YWx1ZT17Y29uZmlybVBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0taW5wdXRcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJjb25maXJtLXBhc3N3b3JkXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cF9faWNvblwiPlxyXG4gICAgICAgICAgICAgIDxpb24taWNvbiBuYW1lPVwia2V5XCI+PC9pb24taWNvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLWJ0biBjdXN0b20tYnRuXCIgb25DbGljaz17c2lnbnVwfT5cclxuICAgICAgICAgIDxzcGFuPkNyZWF0ZSBhY2NvdW50PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICAgIDxwIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5BbHJlYWR5IGhhdmUgYW4gYWNjb3VudCA/IExvZ2luIGhlcmU8L3A+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXI7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0LCBjcmVhdGVDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcbmltcG9ydCB7IGF1dGgsIGRiIH0gZnJvbSBcIi4uL3JlZHV4L2ZiQ29uZmlnXCI7XHJcblxyXG5jb25zdCBhdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQcm92aWRlQXV0aCh7IGNoaWxkcmVuIH0pIHtcclxuICBjb25zdCBhdXRoID0gdXNlUHJvdmlkZUF1dGgoKTtcclxuICByZXR1cm4gPGF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXthdXRofT57Y2hpbGRyZW59PC9hdXRoQ29udGV4dC5Qcm92aWRlcj47XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1c2VBdXRoID0gKCkgPT4ge1xyXG4gIHJldHVybiB1c2VDb250ZXh0KGF1dGhDb250ZXh0KTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIHVzZVByb3ZpZGVBdXRoKCkge1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgLy8gV3JhcCBhbnkgRmlyZWJhc2UgbWV0aG9kcyB3ZSB3YW50IHRvIHVzZSBtYWtpbmcgc3VyZSAuLi5cclxuICAvLyAuLi4gdG8gc2F2ZSB0aGUgdXNlciB0byBzdGF0ZS5cclxuICBjb25zdCBzaWduaW4gPSAoZW1haWwsIHBhc3N3b3JkKSA9PiB7XHJcbiAgICByZXR1cm4gYXV0aC5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHNldFVzZXIocmVzcG9uc2UudXNlcik7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS51c2VyO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2lnbnVwID0gKGVtYWlsLCBwYXNzd29yZCwgdXNlcm5hbWUpID0+IHtcclxuICAgIHJldHVybiBhdXRoXHJcbiAgICAgIC5jcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBzZXRVc2VyKHJlc3BvbnNlLnVzZXIpO1xyXG4gICAgICAgIGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKVxyXG4gICAgICAgICAgLmRvYyhyZXNwb25zZS51c2VyLnVpZClcclxuICAgICAgICAgIC5zZXQoe1xyXG4gICAgICAgICAgICB1c2VybmFtZSxcclxuICAgICAgICAgICAgbGlrZXNDb3VudDogMCxcclxuICAgICAgICAgICAgdHdpdHRlcjogXCJcIixcclxuICAgICAgICAgICAgZmFjZWJvb2s6IFwiXCIsXHJcbiAgICAgICAgICAgIGluc3RhZ3JhbTogXCJcIixcclxuICAgICAgICAgICAgZGV2aWFudGFydDogXCJcIixcclxuICAgICAgICAgICAgYmlvZ3JhcGh5OiBcIlwiLFxyXG4gICAgICAgICAgICBiYWRnZXM6IFtdLFxyXG4gICAgICAgICAgICBjcmVhdGVkQXQ6IGZpcmViYXNlLmZpcmVzdG9yZS5GaWVsZFZhbHVlLnNlcnZlclRpbWVzdGFtcCgpLFxyXG4gICAgICAgICAgICBpbWFnZTogXCJcIixcclxuICAgICAgICAgICAgc3VzcGVuZGVkOiBmYWxzZSxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFVzZXIoeyAuLi51c2VyLCB1c2VybmFtZTogdXNlcm5hbWUgfSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UudXNlcjtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2lnbm91dCA9ICgpID0+IHtcclxuICAgIHJldHVybiBhdXRoLnNpZ25PdXQoKS50aGVuKCgpID0+IHtcclxuICAgICAgc2V0VXNlcihmYWxzZSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzZW5kUGFzc3dvcmRSZXNldEVtYWlsID0gKGVtYWlsKSA9PiB7XHJcbiAgICByZXR1cm4gYXV0aC5zZW5kUGFzc3dvcmRSZXNldEVtYWlsKGVtYWlsKS50aGVuKCgpID0+IHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjb25maXJtUGFzc3dvcmRSZXNldCA9IChjb2RlLCBwYXNzd29yZCkgPT4ge1xyXG4gICAgcmV0dXJuIGF1dGguY29uZmlybVBhc3N3b3JkUmVzZXQoY29kZSwgcGFzc3dvcmQpLnRoZW4oKCkgPT4ge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB1bnN1YnNjcmliZSA9IGF1dGgub25BdXRoU3RhdGVDaGFuZ2VkKCh1c2VyKSA9PiB7XHJcbiAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgc2V0VXNlcih1c2VyKTtcclxuICAgICAgICBpZiAodXNlci51aWQpIHtcclxuICAgICAgICAgIGxldCB1c2VybmFtZSA9IFwiXCI7XHJcbiAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgZGIuY29sbGVjdGlvbihcInVzZXJzXCIpXHJcbiAgICAgICAgICAgIC5kb2ModXNlci51aWQpXHJcbiAgICAgICAgICAgIC5vblNuYXBzaG90KChkb2MpID0+IHtcclxuICAgICAgICAgICAgICB1c2VybmFtZSA9IGRvYy5kYXRhKCkudXNlcm5hbWU7XHJcbiAgICAgICAgICAgICAgc2V0VXNlcih7IC4uLnVzZXIsIHVzZXJuYW1lLCBpbWFnZTogZG9jLmRhdGEoKS5pbWFnZSB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldFVzZXIoZmFsc2UpO1xyXG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIENsZWFudXAgc3Vic2NyaXB0aW9uIG9uIHVubW91bnRcclxuICAgIHJldHVybiAoKSA9PiB1bnN1YnNjcmliZSgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgLy8gUmV0dXJuIHRoZSB1c2VyIG9iamVjdCBhbmQgYXV0aCBtZXRob2RzXHJcbiAgcmV0dXJuIHtcclxuICAgIGlzTG9hZGluZyxcclxuICAgIHVzZXIsXHJcbiAgICBzaWduaW4sXHJcbiAgICBzaWdudXAsXHJcbiAgICBzaWdub3V0LFxyXG4gICAgc2VuZFBhc3N3b3JkUmVzZXRFbWFpbCxcclxuICAgIGNvbmZpcm1QYXNzd29yZFJlc2V0LFxyXG4gIH07XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0Q2FyZEZsaXAgZnJvbSBcInJlYWN0LWNhcmQtZmxpcFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IExvZ2luIGZyb20gXCIuLi9jb21wb25lbnRzL2F1dGgvTG9naW5cIjtcclxuaW1wb3J0IFJlZ2lzdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2F1dGgvUmVnaXN0ZXJcIjtcclxuaW1wb3J0IHsgbG9nX2luIH0gZnJvbSBcIi4uL3JlZHV4L2FjdGlvbnMvdXNlckFjdGlvbnNcIjtcclxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gXCIuLi9ob29rcy91c2VySG9va3NcIjtcclxuXHJcbmNvbnN0IGF1dGggPSAoeyBsb2dfaW4gfSkgPT4ge1xyXG4gIGNvbnN0IFtpc0ZsaXBwZWQsIHNldElzRmxpcHBlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2NvbmZpcm1QYXNzd29yZCwgc2V0Q29uZmlybVBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IGF1dGggPSB1c2VBdXRoKCk7XHJcbiAgY29uc3QgUm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldElzRmxpcHBlZCghaXNGbGlwcGVkKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGF1dGgudXNlcikge1xyXG4gICAgICBSb3V0ZXIuYmFjaygpO1xyXG4gICAgfVxyXG4gIH0sIFthdXRoLnVzZXJdKTtcclxuXHJcbiAgY29uc3Qgc2lnbmluID0gKCkgPT4gYXV0aC5zaWduaW4oZW1haWwsIHBhc3N3b3JkKTtcclxuICBjb25zdCBzaWdudXAgPSAoKSA9PiBhdXRoLnNpZ251cChlbWFpbCwgcGFzc3dvcmQsIHVzZXJuYW1lKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYXV0aGVudGljYXRpb25cIj5cclxuICAgICAgeyFhdXRoLmlzTG9hZGluZyAmJiAhYXV0aC51c2VyID8gKFxyXG4gICAgICAgIDxSZWFjdENhcmRGbGlwIGlzRmxpcHBlZD17aXNGbGlwcGVkfSBmbGlwRGlyZWN0aW9uPVwiaG9yaXpvbnRhbFwiPlxyXG4gICAgICAgICAgPExvZ2luXHJcbiAgICAgICAgICAgIHNpZ25pbj17c2lnbmlufVxyXG4gICAgICAgICAgICBzZXRQYXNzd29yZD17c2V0UGFzc3dvcmR9XHJcbiAgICAgICAgICAgIHNldEVtYWlsPXtzZXRFbWFpbH1cclxuICAgICAgICAgICAgZW1haWw9e2VtYWlsfVxyXG4gICAgICAgICAgICBwYXNzd29yZD17cGFzc3dvcmR9XHJcbiAgICAgICAgICAgIGhhbmRsZUNsaWNrPXtoYW5kbGVDbGlja31cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8UmVnaXN0ZXJcclxuICAgICAgICAgICAgc2V0UGFzc3dvcmQ9e3NldFBhc3N3b3JkfVxyXG4gICAgICAgICAgICBzZXRFbWFpbD17c2V0RW1haWx9XHJcbiAgICAgICAgICAgIHNpZ251cD17c2lnbnVwfVxyXG4gICAgICAgICAgICBlbWFpbD17ZW1haWx9XHJcbiAgICAgICAgICAgIHBhc3N3b3JkPXtwYXNzd29yZH1cclxuICAgICAgICAgICAgdXNlcm5hbWU9e3VzZXJuYW1lfVxyXG4gICAgICAgICAgICBzZXRVc2VybmFtZT17c2V0VXNlcm5hbWV9XHJcbiAgICAgICAgICAgIGNvbmZpcm1QYXNzd29yZD17Y29uZmlybVBhc3N3b3JkfVxyXG4gICAgICAgICAgICBzZXRDb25maXJtUGFzc3dvcmQ9e3NldENvbmZpcm1QYXNzd29yZH1cclxuICAgICAgICAgICAgaGFuZGxlQ2xpY2s9e2hhbmRsZUNsaWNrfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L1JlYWN0Q2FyZEZsaXA+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkZXItY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe30pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHsgbG9nX2luIH0pKGF1dGgpO1xyXG4iLCJpbXBvcnQgeyBkYiwgYXV0aCB9IGZyb20gXCIuLi9mYkNvbmZpZ1wiO1xyXG5pbXBvcnQgeyB0eXBlcyB9IGZyb20gXCIuLi8uLi91dGlscy9jb25zdGFudHNcIjtcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcclxuaW1wb3J0IHsgbWVzc2FnZSB9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5leHBvcnQgY29uc3QgbG9nX2luID0gKGVtYWlsLCBwYXNzd29yZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgY29uc29sZS5sb2coZW1haWwsIHBhc3N3b3JkKTtcclxuICBhdXRoLnNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UHJvZmlsZSA9IChpZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGIuY29sbGVjdGlvbihcInVzZXJzXCIpXHJcbiAgICAuZG9jKGlkID8gaWQgOiBhdXRoLmN1cnJlbnRVc2VyLnVpZClcclxuICAgIC5vblNuYXBzaG90KChkb2MpID0+IHtcclxuICAgICAgcmV0dXJuIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiB0eXBlcy5HRVRfUFJPRklMRSxcclxuICAgICAgICBwYXlsb2FkOiB7IGlkOiBkb2MuaWQsIC4uLmRvYy5kYXRhKCkgfSxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRGYXZvcml0ZUF1dGhvcnMgPSAoaWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGxldCBhZGRlZE9uO1xyXG4gIGNvbnN0IHVzZXJJZCA9IGlkID8gaWQgOiBhdXRoLmN1cnJlbnRVc2VyLnVpZDtcclxuICBkYi5jb2xsZWN0aW9uKFwidXNlcnNMaWtlc1wiKVxyXG4gICAgLndoZXJlKFwic2VuZGVySWRcIiwgXCI9PVwiLCB1c2VySWQpXHJcbiAgICAuZ2V0KClcclxuICAgIC50aGVuKChkb2NzKSA9PiB7XHJcbiAgICAgIGxldCBmYXZBcnIgPSBbXTtcclxuICAgICAgZG9jcy5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgICAgICBhZGRlZE9uID0gZG9jLmRhdGEoKS5jcmVhdGVkQXQ7XHJcbiAgICAgICAgZmF2QXJyID0gWy4uLmZhdkFyciwgZG9jLmRhdGEoKS5yZWNpcGllbnRdO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGZhdkFycjtcclxuICAgIH0pXHJcbiAgICAudGhlbigodXNlcnMpID0+IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gdXNlcnMubWFwKCh1c2VyKSA9PlxyXG4gICAgICAgIGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKS5kb2ModXNlcikuZ2V0KClcclxuICAgICAgKTtcclxuICAgICAgUHJvbWlzZS5hbGwocmVzdWx0KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBsZXQgZmF2VXNlcnMgPSBbXTtcclxuICAgICAgICByZXMuZm9yRWFjaChcclxuICAgICAgICAgIChkb2MpID0+XHJcbiAgICAgICAgICAgIChmYXZVc2VycyA9IFsuLi5mYXZVc2VycywgeyBhZGRlZE9uLCBpZDogZG9jLmlkLCAuLi5kb2MuZGF0YSgpIH1dKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogdHlwZXMuR0VUX0ZBVk9SSVRFX0FVVEhPUlMsXHJcbiAgICAgICAgICBwYXlsb2FkOiBmYXZVc2VycyxcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRGb2xsb3dlcnMgPSAoaWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGxldCBhZGRlZE9uO1xyXG4gIGNvbnN0IHVzZXJJZCA9IGlkID8gaWQgOiBhdXRoLmN1cnJlbnRVc2VyLnVpZDtcclxuICBkYi5jb2xsZWN0aW9uKFwidXNlcnNMaWtlc1wiKVxyXG4gICAgLndoZXJlKFwicmVjaXBpZW50XCIsIFwiPT1cIiwgdXNlcklkKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigoZG9jcykgPT4ge1xyXG4gICAgICBsZXQgZmF2QXJyID0gW107XHJcbiAgICAgIGRvY3MuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICAgICAgYWRkZWRPbiA9IGRvYy5kYXRhKCkuY3JlYXRlZEF0O1xyXG4gICAgICAgIGZhdkFyciA9IFsuLi5mYXZBcnIsIGRvYy5kYXRhKCkuc2VuZGVySWRdO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGZhdkFycjtcclxuICAgIH0pXHJcbiAgICAudGhlbigodXNlcnMpID0+IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gdXNlcnMubWFwKCh1c2VyKSA9PlxyXG4gICAgICAgIGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKS5kb2ModXNlcikuZ2V0KClcclxuICAgICAgKTtcclxuICAgICAgUHJvbWlzZS5hbGwocmVzdWx0KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBsZXQgZmF2VXNlcnMgPSBbXTtcclxuICAgICAgICByZXMuZm9yRWFjaChcclxuICAgICAgICAgIChkb2MpID0+XHJcbiAgICAgICAgICAgIChmYXZVc2VycyA9IFsuLi5mYXZVc2VycywgeyBhZGRlZE9uLCBpZDogZG9jLmlkLCAuLi5kb2MuZGF0YSgpIH1dKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogdHlwZXMuR0VUX0ZPTExPV0VSUyxcclxuICAgICAgICAgIHBheWxvYWQ6IGZhdlVzZXJzLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldElzRm9sbG93aW5nID0gKHVzZXJJZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgaWYgKGF1dGguY3VycmVudFVzZXIpIHtcclxuICAgIGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc0xpa2VzXCIpXHJcbiAgICAgIC53aGVyZShcInJlY2lwaWVudFwiLCBcIj09XCIsIHVzZXJJZClcclxuICAgICAgLndoZXJlKFwic2VuZGVySWRcIiwgXCI9PVwiLCBhdXRoLmN1cnJlbnRVc2VyLnVpZClcclxuICAgICAgLm9uU25hcHNob3QoKHNuYXBzaG90KSA9PiB7XHJcbiAgICAgICAgY29uc3QgYW5zd2VyID0gc25hcHNob3QuZG9jcy5sZW5ndGggPiAwID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgIHJldHVybiBkaXNwYXRjaCh7IHR5cGU6IHR5cGVzLklTX0ZPTExPV0lORywgcGF5bG9hZDogYW5zd2VyIH0pO1xyXG4gICAgICB9KTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZm9sbG93VXNlciA9IChpZCwgaXNGYXZvcml0ZSwgbmV3Rm9sbG93ZXIpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGlmIChpc0Zhdm9yaXRlKSByZXR1cm4gbWVzc2FnZS53YXJuaW5nKFwiWW91IGFyZSBhbHJlYWR5IGZvbGxvd2luZyB0aGlzIHVzZXJcIik7XHJcbiAgaWYgKCFhdXRoLmN1cnJlbnRVc2VyKVxyXG4gICAgcmV0dXJuIG1lc3NhZ2UuZXJyb3IoXCJZb3UgbmVlZCB0byBiZSBsb2dnZWQgaW4gdG8gZm9sbG93IHVzZXJzXCIpO1xyXG4gIGlmICghYXV0aC5jdXJyZW50VXNlci5lbWFpbFZlcmlmaWVkKVxyXG4gICAgcmV0dXJuIG1lc3NhZ2UuZXJyb3IoXCJZb3UgbmVlZCB0byB2ZXJpZnkgeW91ciBlbWFpbCBmaXJzdFwiKTtcclxuXHJcbiAgZGIuY29sbGVjdGlvbihcInVzZXJzTGlrZXNcIilcclxuICAgIC5hZGQoe1xyXG4gICAgICBzZW5kZXI6IG5ld0ZvbGxvd2VyLnVzZXJuYW1lLFxyXG4gICAgICBzZW5kZXJJZDogbmV3Rm9sbG93ZXIudWlkLFxyXG4gICAgICByZWNpcGllbnQ6IGlkLFxyXG4gICAgICBjcmVhdGVkQXQ6IGZpcmViYXNlLmZpcmVzdG9yZS5GaWVsZFZhbHVlLnNlcnZlclRpbWVzdGFtcCgpLFxyXG4gICAgfSlcclxuICAgIC50aGVuKCgpID0+IG1lc3NhZ2Uuc3VjY2VzcyhcIllvdSBhcmUgbm93IGZvbGxvd2luZyB0aGlzIHVzZXJcIikpXHJcbiAgICAuY2F0Y2goKGVycikgPT4gbWVzc2FnZS5lcnJvcihcIlRoZXJlIGhhcyBiZWVuIGEgcHJvYmxlbVwiKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdW5mb2xsb3dVc2VyID0gKGlkLCBpc0Zhdm9yaXRlKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBpZiAoIWlzRmF2b3JpdGUpXHJcbiAgICByZXR1cm4gbWVzc2FnZS53YXJuaW5nKFwiWW91IGFyZSBub3QgZm9sbG93aW5nIHRoaXMgdXNlciB5ZXRcIik7XHJcblxyXG4gIGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc0xpa2VzXCIpXHJcbiAgICAud2hlcmUoXCJyZWNpcGllbnRcIiwgXCI9PVwiLCBpZClcclxuICAgIC53aGVyZShcInNlbmRlcklkXCIsIFwiPT1cIiwgYXV0aC5jdXJyZW50VXNlci51aWQpXHJcbiAgICAuZ2V0KClcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiBkYi5jb2xsZWN0aW9uKFwidXNlcnNMaWtlc1wiKS5kb2MoZGF0YS5kb2NzWzBdLmlkKS5kZWxldGUoKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoKSA9PiBtZXNzYWdlLnN1Y2Nlc3MoXCJVc2VyIHN1Y2Nlc3NmdWxseSB1bmZvbGxvd2VkXCIpKVxyXG4gICAgLmNhdGNoKChlcnIpID0+IG1lc3NhZ2UuZXJyb3IoXCJUaGVyZSBoYXMgYmVlbiBhIHByb2JsZW1cIikpO1xyXG59O1xyXG4iLCJpbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlL2FwcFwiO1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9hdXRoXCI7XHJcbmltcG9ydCBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9zdG9yYWdlXCI7XHJcblxyXG5jb25zdCBwcm9kQ29uZmlnID0ge1xyXG4gIGFwaUtleTogcHJvY2Vzcy5lbnYuRklSRUJBU0VfQVBJX0tFWSxcclxuICBhdXRoRG9tYWluOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9BVVRIX0RPTUFJTixcclxuICBkYXRhYmFzZVVSTDogcHJvY2Vzcy5lbnYuRklSRUJBU0VfREFUQUJBU0VfVVJMLFxyXG4gIHByb2plY3RJZDogcHJvY2Vzcy5lbnYuRklSRUJBU0VfUFJPSkVDVF9JRCxcclxuICBzdG9yYWdlQnVja2V0OiBwcm9jZXNzLmVudi5GSVJFQkFTRV9TVE9SQUdFX0JVQ0tFVCxcclxuICBtZXNzYWdpbmdTZW5kZXJJZDogcHJvY2Vzcy5lbnYuRklSRUJBU0VfTUVTU0FHSU5HX1NFTkRFUl9JRCxcclxuICBhcHBJZDogcHJvY2Vzcy5lbnYuRklSRUJBU0VfQVBQX0lELFxyXG59O1xyXG5cclxuY29uc3QgZGV2Q29uZmlnID0ge1xyXG4gIGFwaUtleTogcHJvY2Vzcy5lbnYuRklSRUJBU0VfQVBJX0tFWSxcclxuICBhdXRoRG9tYWluOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9BVVRIX0RPTUFJTixcclxuICBkYXRhYmFzZVVSTDogcHJvY2Vzcy5lbnYuRklSRUJBU0VfREFUQUJBU0VfVVJMLFxyXG4gIHByb2plY3RJZDogcHJvY2Vzcy5lbnYuRklSRUJBU0VfUFJPSkVDVF9JRCxcclxuICBzdG9yYWdlQnVja2V0OiBwcm9jZXNzLmVudi5GSVJFQkFTRV9TVE9SQUdFX0JVQ0tFVCxcclxuICBtZXNzYWdpbmdTZW5kZXJJZDogcHJvY2Vzcy5lbnYuRklSRUJBU0VfTUVTU0FHSU5HX1NFTkRFUl9JRCxcclxuICBhcHBJZDogcHJvY2Vzcy5lbnYuRklSRUJBU0VfQVBQX0lELFxyXG59O1xyXG5cclxuY29uc3QgY29uZmlnID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gcHJvZENvbmZpZyA6IGRldkNvbmZpZztcclxuXHJcbmlmICghZmlyZWJhc2UuYXBwcy5sZW5ndGgpIHtcclxuICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGNvbmZpZyk7XHJcbn1cclxuXHJcbmNvbnN0IGRiID0gZmlyZWJhc2UuZmlyZXN0b3JlKCk7XHJcbmNvbnN0IGF1dGggPSBmaXJlYmFzZS5hdXRoKCk7XHJcbmNvbnN0IHN0b3JhZ2UgPSBmaXJlYmFzZS5zdG9yYWdlKCk7XHJcblxyXG5leHBvcnQgeyBkYiwgYXV0aCwgc3RvcmFnZSB9O1xyXG5leHBvcnQgZGVmYXVsdCBjb25maWc7XHJcbiIsImV4cG9ydCBjb25zdCBDQVRFR09SSUVTID0gW1xyXG4gIHsgbmFtZTogXCJEcmFtYVwiLCB2YWx1ZTogXCJkcmFtYVwiIH0sXHJcbiAgeyBuYW1lOiBcIkNvbWVkeVwiLCB2YWx1ZTogXCJjb21lZHlcIiB9LFxyXG4gIHsgbmFtZTogXCJIb3Jyb3JcIiwgdmFsdWU6IFwiaG9ycm9yXCIgfSxcclxuICB7IG5hbWU6IFwiUm9tYW5jZVwiLCB2YWx1ZTogXCJyb21hbmNlXCIgfSxcclxuICB7IG5hbWU6IFwiU2NpLWZpXCIsIHZhbHVlOiBcInNjaS1maVwiIH0sXHJcbiAgeyBuYW1lOiBcIkZhbnRhc3lcIiwgdmFsdWU6IFwiZmFudGFzeVwiIH0sXHJcbiAgeyBuYW1lOiBcIkh1bW9yXCIsIHZhbHVlOiBcImh1bW9yXCIgfSxcclxuICB7IG5hbWU6IFwiQWN0aW9uXCIsIHZhbHVlOiBcImFjdGlvblwiIH0sXHJcbiAgeyBuYW1lOiBcIlRocmlsbGVyXCIsIHZhbHVlOiBcInRocmlsbGVyXCIgfSxcclxuICB7IG5hbWU6IFwiU3VwZXJuYXR1cmFsXCIsIHZhbHVlOiBcInN1cGVybmF0dXJhbFwiIH0sXHJcbiAgeyBuYW1lOiBcIkFkdmVudHVyZVwiLCB2YWx1ZTogXCJhZHZlbnR1cmVcIiB9LFxyXG4gIHsgbmFtZTogXCJNeXN0ZXJ5XCIsIHZhbHVlOiBcIm15c3RlcnlcIiB9LFxyXG4gIHsgbmFtZTogXCJXZXN0ZXJuXCIsIHZhbHVlOiBcIndlc3Rlcm5cIiB9LFxyXG4gIHsgbmFtZTogXCJIaXN0b3J5XCIsIHZhbHVlOiBcImhpc3RvcnlcIiB9LFxyXG4gIHsgbmFtZTogXCJDcmltZVwiLCB2YWx1ZTogXCJjcmltZVwiIH0sXHJcbiAgeyBuYW1lOiBcIkZhbmZpY3Rpb25cIiwgdmFsdWU6IFwiZmFuZmljdGlvblwiIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgQ09QWVJJR0hUUyA9IFtcclxuICB7IG5hbWU6IFwiUHVibGljIERvbWFpblwiLCB2YWx1ZTogXCJwdWJsaWMgZG9tYWluXCIgfSxcclxuICB7IG5hbWU6IFwiQWxsIFJpZ2h0cyBSZXNlcnZlZFwiLCB2YWx1ZTogXCJhbGwgcmlnaHRzIHJlc2VydmVkXCIgfSxcclxuICB7IG5hbWU6IFwiQ3JlYXRpdmUgQ29tbW9uc1wiLCB2YWx1ZTogXCJjcmVhdGl2ZSBjb21tb25zXCIgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBMQU5HVUFHRVMgPSBbXHJcbiAgeyBuYW1lOiBcIkFmYXJcIiwgdmFsdWU6IFwiYWFcIiB9LFxyXG4gIHsgbmFtZTogXCJBYmtoYXppYW5cIiwgdmFsdWU6IFwiYWJcIiB9LFxyXG4gIHsgbmFtZTogXCJBdmVzdGFuXCIsIHZhbHVlOiBcImFlXCIgfSxcclxuICB7IG5hbWU6IFwiQWZyaWthYW5zXCIsIHZhbHVlOiBcImFmXCIgfSxcclxuICB7IG5hbWU6IFwiQWthblwiLCB2YWx1ZTogXCJha1wiIH0sXHJcbiAgeyBuYW1lOiBcIkFtaGFyaWNcIiwgdmFsdWU6IFwiYW1cIiB9LFxyXG4gIHsgbmFtZTogXCJBcmFnb25lc2VcIiwgdmFsdWU6IFwiYW5cIiB9LFxyXG4gIHsgbmFtZTogXCJBcmFiaWNcIiwgdmFsdWU6IFwiYXJcIiB9LFxyXG4gIHsgbmFtZTogXCJBc3NhbWVzZVwiLCB2YWx1ZTogXCJhc1wiIH0sXHJcbiAgeyBuYW1lOiBcIkF2YXJpY1wiLCB2YWx1ZTogXCJhdlwiIH0sXHJcbiAgeyBuYW1lOiBcIkF5bWFyYVwiLCB2YWx1ZTogXCJheVwiIH0sXHJcbiAgeyBuYW1lOiBcIkF6ZXJiYWlqYW5pXCIsIHZhbHVlOiBcImF6XCIgfSxcclxuICB7IG5hbWU6IFwiQmFzaGtpclwiLCB2YWx1ZTogXCJiYVwiIH0sXHJcbiAgeyBuYW1lOiBcIkJlbGFydXNpYW5cIiwgdmFsdWU6IFwiYmVcIiB9LFxyXG4gIHsgbmFtZTogXCJCdWxnYXJpYW5cIiwgdmFsdWU6IFwiYmdcIiB9LFxyXG4gIHsgbmFtZTogXCJCaWhhcmlcIiwgdmFsdWU6IFwiYmhcIiB9LFxyXG4gIHsgbmFtZTogXCJCaXNsYW1hXCIsIHZhbHVlOiBcImJpXCIgfSxcclxuICB7IG5hbWU6IFwiQmFtYmFyYVwiLCB2YWx1ZTogXCJibVwiIH0sXHJcbiAgeyBuYW1lOiBcIkJlbmdhbGlcIiwgdmFsdWU6IFwiYm5cIiB9LFxyXG4gIHsgbmFtZTogXCJUaWJldGFuXCIsIHZhbHVlOiBcImJvXCIgfSxcclxuICB7IG5hbWU6IFwiQnJldG9uXCIsIHZhbHVlOiBcImJyXCIgfSxcclxuICB7IG5hbWU6IFwiQm9zbmlhblwiLCB2YWx1ZTogXCJic1wiIH0sXHJcbiAgeyBuYW1lOiBcIkNhdGFsYW5cIiwgdmFsdWU6IFwiY2FcIiB9LFxyXG4gIHsgbmFtZTogXCJDaGVjaGVuXCIsIHZhbHVlOiBcImNlXCIgfSxcclxuICB7IG5hbWU6IFwiQ2hhbW9ycm9cIiwgdmFsdWU6IFwiY2hcIiB9LFxyXG4gIHsgbmFtZTogXCJDb3JzaWNhblwiLCB2YWx1ZTogXCJjb1wiIH0sXHJcbiAgeyBuYW1lOiBcIkNyZWVcIiwgdmFsdWU6IFwiY3JcIiB9LFxyXG4gIHsgbmFtZTogXCJDemVjaFwiLCB2YWx1ZTogXCJjc1wiIH0sXHJcbiAgeyBuYW1lOiBcIk9sZCBDaHVyY2ggU2xhdm9uaWNcIiwgdmFsdWU6IFwiY3VcIiB9LFxyXG4gIHsgbmFtZTogXCJDaHV2YXNoXCIsIHZhbHVlOiBcImN2XCIgfSxcclxuICB7IG5hbWU6IFwiV2Vsc2hcIiwgdmFsdWU6IFwiY3lcIiB9LFxyXG4gIHsgbmFtZTogXCJEYW5pc2hcIiwgdmFsdWU6IFwiZGFcIiB9LFxyXG4gIHsgbmFtZTogXCJHZXJtYW5cIiwgdmFsdWU6IFwiZGVcIiB9LFxyXG4gIHsgbmFtZTogXCJEaXZlaGlcIiwgdmFsdWU6IFwiZHZcIiB9LFxyXG4gIHsgbmFtZTogXCJEem9uZ2toYVx0XCIsIHZhbHVlOiBcImR6XCIgfSxcclxuICB7IG5hbWU6IFwiRXdlXCIsIHZhbHVlOiBcImVlXCIgfSxcclxuICB7IG5hbWU6IFwiR3JlZWtcIiwgdmFsdWU6IFwiZWxcIiB9LFxyXG4gIHsgbmFtZTogXCJFbmdsaXNoXCIsIHZhbHVlOiBcImVuXCIgfSxcclxuICB7IG5hbWU6IFwiRXNwZXJhbnRvXCIsIHZhbHVlOiBcImVvXCIgfSxcclxuICB7IG5hbWU6IFwiU3BhbmlzaFwiLCB2YWx1ZTogXCJlc1wiIH0sXHJcbiAgeyBuYW1lOiBcIkVzdG9uaWFuXCIsIHZhbHVlOiBcImV0XCIgfSxcclxuICB7IG5hbWU6IFwiQmFzcXVlXCIsIHZhbHVlOiBcImV1XCIgfSxcclxuICB7IG5hbWU6IFwiUGVyc2lhblwiLCB2YWx1ZTogXCJmYVwiIH0sXHJcbiAgeyBuYW1lOiBcIkZ1bGFoXCIsIHZhbHVlOiBcImZmXCIgfSxcclxuICB7IG5hbWU6IFwiRmlubmlzaFwiLCB2YWx1ZTogXCJmaVwiIH0sXHJcbiAgeyBuYW1lOiBcIkZpamlhblwiLCB2YWx1ZTogXCJmalwiIH0sXHJcbiAgeyBuYW1lOiBcIkZhcm9lc2VcIiwgdmFsdWU6IFwiZm9cIiB9LFxyXG4gIHsgbmFtZTogXCJGcmVuY2hcIiwgdmFsdWU6IFwiZnJcIiB9LFxyXG4gIHsgbmFtZTogXCJXZXN0ZXJuIEZyaXNpYW5cIiwgdmFsdWU6IFwiZnlcIiB9LFxyXG4gIHsgbmFtZTogXCJJcmlzaFwiLCB2YWx1ZTogXCJnYVwiIH0sXHJcbiAgeyBuYW1lOiBcIlNjb3R0aXNoIEdhZWxpY1wiLCB2YWx1ZTogXCJnZFwiIH0sXHJcbiAgeyBuYW1lOiBcIkdhbGljaWFuXCIsIHZhbHVlOiBcImdsXCIgfSxcclxuICB7IG5hbWU6IFwiR3VhcmFuaVwiLCB2YWx1ZTogXCJnblwiIH0sXHJcbiAgeyBuYW1lOiBcIkd1amFyYXRpXCIsIHZhbHVlOiBcImd1XCIgfSxcclxuICB7IG5hbWU6IFwiTWFueFwiLCB2YWx1ZTogXCJndlwiIH0sXHJcbiAgeyBuYW1lOiBcIkhhdXNhXCIsIHZhbHVlOiBcImhhXCIgfSxcclxuICB7IG5hbWU6IFwiSGVicmV3XCIsIHZhbHVlOiBcImhlXCIgfSxcclxuICB7IG5hbWU6IFwiSGluZGlcIiwgdmFsdWU6IFwiaGlcIiB9LFxyXG4gIHsgbmFtZTogXCJIaXJpIE1vdHVcIiwgdmFsdWU6IFwiaG9cIiB9LFxyXG4gIHsgbmFtZTogXCJDcm9hdGlhblwiLCB2YWx1ZTogXCJoclwiIH0sXHJcbiAgeyBuYW1lOiBcIkhhaXRpYW5cIiwgdmFsdWU6IFwiaHRcIiB9LFxyXG4gIHsgbmFtZTogXCJIdW5nYXJpYW5cIiwgdmFsdWU6IFwiaHVcIiB9LFxyXG4gIHsgbmFtZTogXCJBcm1lbmlhblwiLCB2YWx1ZTogXCJoeVwiIH0sXHJcbiAgeyBuYW1lOiBcIkhlcmVyb1wiLCB2YWx1ZTogXCJoelwiIH0sXHJcbiAgeyBuYW1lOiBcIkludGVybGluZ3VhXCIsIHZhbHVlOiBcImlhXCIgfSxcclxuICB7IG5hbWU6IFwiSW5kb25lc2lhblwiLCB2YWx1ZTogXCJpZFwiIH0sXHJcbiAgeyBuYW1lOiBcIkludGVybGluZ3VlXCIsIHZhbHVlOiBcImllXCIgfSxcclxuICB7IG5hbWU6IFwiSWdib1wiLCB2YWx1ZTogXCJpZ1wiIH0sXHJcbiAgeyBuYW1lOiBcIlNpY2h1YW4gWWlcIiwgdmFsdWU6IFwiaWlcIiB9LFxyXG4gIHsgbmFtZTogXCJJbnVwaWFxXCIsIHZhbHVlOiBcImlrXCIgfSxcclxuICB7IG5hbWU6IFwiSWRvXCIsIHZhbHVlOiBcImlvXCIgfSxcclxuICB7IG5hbWU6IFwiSWNlbGFuZGljXCIsIHZhbHVlOiBcImlzXCIgfSxcclxuICB7IG5hbWU6IFwiSXRhbGlhblwiLCB2YWx1ZTogXCJpdFwiIH0sXHJcbiAgeyBuYW1lOiBcIkludWt0aXR1dFwiLCB2YWx1ZTogXCJpdVwiIH0sXHJcbiAgeyBuYW1lOiBcIkphcGFuZXNlXCIsIHZhbHVlOiBcImphXCIgfSxcclxuICB7IG5hbWU6IFwiSmF2YW5lc2VcIiwgdmFsdWU6IFwianZcIiB9LFxyXG4gIHsgbmFtZTogXCJHZW9yZ2lhblwiLCB2YWx1ZTogXCJrYVwiIH0sXHJcbiAgeyBuYW1lOiBcIktvbmdvXCIsIHZhbHVlOiBcImtnXCIgfSxcclxuICB7IG5hbWU6IFwiS2lrdXl1XCIsIHZhbHVlOiBcImtpXCIgfSxcclxuICB7IG5hbWU6IFwiS3dhbnlhbWFcIiwgdmFsdWU6IFwia2pcIiB9LFxyXG4gIHsgbmFtZTogXCJLYXpha2hcIiwgdmFsdWU6IFwia2tcIiB9LFxyXG4gIHsgbmFtZTogXCJHcmVlbmxhbmRpY1wiLCB2YWx1ZTogXCJrbFwiIH0sXHJcbiAgeyBuYW1lOiBcIktobWVyXCIsIHZhbHVlOiBcImttXCIgfSxcclxuICB7IG5hbWU6IFwiS2FubmFkYVwiLCB2YWx1ZTogXCJrblwiIH0sXHJcbiAgeyBuYW1lOiBcIktvcmVhblwiLCB2YWx1ZTogXCJrb1wiIH0sXHJcbiAgeyBuYW1lOiBcIkthbnVyaVwiLCB2YWx1ZTogXCJrclwiIH0sXHJcbiAgeyBuYW1lOiBcIkthc2htaXJpXCIsIHZhbHVlOiBcImtzXCIgfSxcclxuICB7IG5hbWU6IFwiS3VyZGlzaFwiLCB2YWx1ZTogXCJrdVwiIH0sXHJcbiAgeyBuYW1lOiBcIktvbWlcIiwgdmFsdWU6IFwia3ZcIiB9LFxyXG4gIHsgbmFtZTogXCJDb3JuaXNoXCIsIHZhbHVlOiBcImt3XCIgfSxcclxuICB7IG5hbWU6IFwiS2lyZ2hpelwiLCB2YWx1ZTogXCJreVwiIH0sXHJcbiAgeyBuYW1lOiBcIkxhdGluXCIsIHZhbHVlOiBcImxhXCIgfSxcclxuICB7IG5hbWU6IFwiTHV4ZW1ib3VyZ2lzaFwiLCB2YWx1ZTogXCJsYlwiIH0sXHJcbiAgeyBuYW1lOiBcIkdhbmRhXCIsIHZhbHVlOiBcImxnXCIgfSxcclxuICB7IG5hbWU6IFwiTGltYnVyZ2lzaFwiLCB2YWx1ZTogXCJsaVwiIH0sXHJcbiAgeyBuYW1lOiBcIkxpbmdhbGFcIiwgdmFsdWU6IFwibG5cIiB9LFxyXG4gIHsgbmFtZTogXCJMYW9cIiwgdmFsdWU6IFwibG9cIiB9LFxyXG4gIHsgbmFtZTogXCJMaXRodWFuaWFuXCIsIHZhbHVlOiBcImx0XCIgfSxcclxuICB7IG5hbWU6IFwiTHViYVwiLCB2YWx1ZTogXCJsdVwiIH0sXHJcbiAgeyBuYW1lOiBcIkxhdHZpYW5cIiwgdmFsdWU6IFwibHZcIiB9LFxyXG4gIHsgbmFtZTogXCJNYWxhZ2FzeVwiLCB2YWx1ZTogXCJtZ1wiIH0sXHJcbiAgeyBuYW1lOiBcIk1hcnNoYWxsZXNlXCIsIHZhbHVlOiBcIm1oXCIgfSxcclxuICB7IG5hbWU6IFwiTcSBb3JpXCIsIHZhbHVlOiBcIm1pXCIgfSxcclxuICB7IG5hbWU6IFwiTWFjZWRvbmlhblwiLCB2YWx1ZTogXCJta1wiIH0sXHJcbiAgeyBuYW1lOiBcIk1hbGF5YWxhbVwiLCB2YWx1ZTogXCJtbFwiIH0sXHJcbiAgeyBuYW1lOiBcIk1vbmdvbGlhblwiLCB2YWx1ZTogXCJtblwiIH0sXHJcbiAgeyBuYW1lOiBcIk1vbGRhdmlhblwiLCB2YWx1ZTogXCJtb1wiIH0sXHJcbiAgeyBuYW1lOiBcIk1hcmF0aGlcIiwgdmFsdWU6IFwibXJcIiB9LFxyXG4gIHsgbmFtZTogXCJNYWxheVwiLCB2YWx1ZTogXCJtc1wiIH0sXHJcbiAgeyBuYW1lOiBcIk1hbHRlc2VcIiwgdmFsdWU6IFwibXRcIiB9LFxyXG4gIHsgbmFtZTogXCJCdXJtZXNlXCIsIHZhbHVlOiBcIm15XCIgfSxcclxuICB7IG5hbWU6IFwiTmF1cnVcIiwgdmFsdWU6IFwibmFcIiB9LFxyXG4gIHsgbmFtZTogXCJOb3J3ZWdpYW4gQm9rbcOlbFwiLCB2YWx1ZTogXCJuYlwiIH0sXHJcbiAgeyBuYW1lOiBcIk5vcnRoIE5kZWJlbGVcIiwgdmFsdWU6IFwibmRcIiB9LFxyXG4gIHsgbmFtZTogXCJOZXBhbGlcIiwgdmFsdWU6IFwibmVcIiB9LFxyXG4gIHsgbmFtZTogXCJOZG9uZ2FcIiwgdmFsdWU6IFwibmdcIiB9LFxyXG4gIHsgbmFtZTogXCJEdXRjaFwiLCB2YWx1ZTogXCJubFwiIH0sXHJcbiAgeyBuYW1lOiBcIk5vcndlZ2lhbiBOeW5vcnNrXCIsIHZhbHVlOiBcIm5uXCIgfSxcclxuICB7IG5hbWU6IFwiTm9yd2VnaWFuXCIsIHZhbHVlOiBcIm5vXCIgfSxcclxuICB7IG5hbWU6IFwiU291dGggTmRlYmVsZVwiLCB2YWx1ZTogXCJuclwiIH0sXHJcbiAgeyBuYW1lOiBcIk5hdmFqb1wiLCB2YWx1ZTogXCJudlwiIH0sXHJcbiAgeyBuYW1lOiBcIkNoaWNoZXdhXCIsIHZhbHVlOiBcIm55XCIgfSxcclxuICB7IG5hbWU6IFwiT2NjaXRhblwiLCB2YWx1ZTogXCJvY1wiIH0sXHJcbiAgeyBuYW1lOiBcIk9qaWJ3YVwiLCB2YWx1ZTogXCJvalwiIH0sXHJcbiAgeyBuYW1lOiBcIk9yb21vXCIsIHZhbHVlOiBcIm9tXCIgfSxcclxuICB7IG5hbWU6IFwiT3JpeWFcIiwgdmFsdWU6IFwib3JcIiB9LFxyXG4gIHsgbmFtZTogXCJPc3NldGlhblwiLCB2YWx1ZTogXCJvc1wiIH0sXHJcbiAgeyBuYW1lOiBcIlBhbmphYmlcIiwgdmFsdWU6IFwicGFcIiB9LFxyXG4gIHsgbmFtZTogXCJQxIFsaVwiLCB2YWx1ZTogXCJwaVwiIH0sXHJcbiAgeyBuYW1lOiBcIlBvbGlzaFwiLCB2YWx1ZTogXCJwbFwiIH0sXHJcbiAgeyBuYW1lOiBcIlBhc2h0b1wiLCB2YWx1ZTogXCJwc1wiIH0sXHJcbiAgeyBuYW1lOiBcIlBvcnR1Z3Vlc2VcIiwgdmFsdWU6IFwicHRcIiB9LFxyXG4gIHsgbmFtZTogXCJRdWVjaHVhXCIsIHZhbHVlOiBcInF1XCIgfSxcclxuICB7IG5hbWU6IFwiUmV1bmlvbmVzZVwiLCB2YWx1ZTogXCJyY1wiIH0sXHJcbiAgeyBuYW1lOiBcIlJvbWFuc2hcIiwgdmFsdWU6IFwicm1cIiB9LFxyXG4gIHsgbmFtZTogXCJLaXJ1bmRpXCIsIHZhbHVlOiBcInJuXCIgfSxcclxuICB7IG5hbWU6IFwiUm9tYW5pYW5cIiwgdmFsdWU6IFwicm9cIiB9LFxyXG4gIHsgbmFtZTogXCJSdXNzaWFuXCIsIHZhbHVlOiBcInJ1XCIgfSxcclxuICB7IG5hbWU6IFwiS2lueWFyd2FuZGFcIiwgdmFsdWU6IFwicndcIiB9LFxyXG4gIHsgbmFtZTogXCJTYW5za3JpdFwiLCB2YWx1ZTogXCJzYVwiIH0sXHJcbiAgeyBuYW1lOiBcIlNhcmRpbmlhblwiLCB2YWx1ZTogXCJzY1wiIH0sXHJcbiAgeyBuYW1lOiBcIlNpbmRoaVwiLCB2YWx1ZTogXCJzZFwiIH0sXHJcbiAgeyBuYW1lOiBcIk5vcnRoZXJuIFNhbWlcIiwgdmFsdWU6IFwic2VcIiB9LFxyXG4gIHsgbmFtZTogXCJTYW5nb1wiLCB2YWx1ZTogXCJzZ1wiIH0sXHJcbiAgeyBuYW1lOiBcIlNlcmJvLUNyb2F0aWFuXCIsIHZhbHVlOiBcInNoXCIgfSxcclxuICB7IG5hbWU6IFwiU2luaGFsZXNlXCIsIHZhbHVlOiBcInNpXCIgfSxcclxuICB7IG5hbWU6IFwiU2xvdmFrXCIsIHZhbHVlOiBcInNrXCIgfSxcclxuICB7IG5hbWU6IFwiU2xvdmVuaWFuXCIsIHZhbHVlOiBcInNsXCIgfSxcclxuICB7IG5hbWU6IFwiU2Ftb2FuXCIsIHZhbHVlOiBcInNtXCIgfSxcclxuICB7IG5hbWU6IFwiU2hvbmFcIiwgdmFsdWU6IFwic25cIiB9LFxyXG4gIHsgbmFtZTogXCJTb21hbGlcIiwgdmFsdWU6IFwic29cIiB9LFxyXG4gIHsgbmFtZTogXCJBbGJhbmlhblwiLCB2YWx1ZTogXCJzcVwiIH0sXHJcbiAgeyBuYW1lOiBcIlNlcmJpYW5cIiwgdmFsdWU6IFwic3JcIiB9LFxyXG4gIHsgbmFtZTogXCJTd2F0aVwiLCB2YWx1ZTogXCJzc1wiIH0sXHJcbiAgeyBuYW1lOiBcIlNvdGhvXCIsIHZhbHVlOiBcInN0XCIgfSxcclxuICB7IG5hbWU6IFwiU3VuZGFuZXNlXCIsIHZhbHVlOiBcInN1XCIgfSxcclxuICB7IG5hbWU6IFwiU3dlZGlzaFwiLCB2YWx1ZTogXCJzdlwiIH0sXHJcbiAgeyBuYW1lOiBcIlN3YWhpbGlcIiwgdmFsdWU6IFwic3dcIiB9LFxyXG4gIHsgbmFtZTogXCJUYW1pbFwiLCB2YWx1ZTogXCJ0YVwiIH0sXHJcbiAgeyBuYW1lOiBcIlRlbHVndVwiLCB2YWx1ZTogXCJ0ZVwiIH0sXHJcbiAgeyBuYW1lOiBcIlRhamlrXCIsIHZhbHVlOiBcInRnXCIgfSxcclxuICB7IG5hbWU6IFwiVGhhaVwiLCB2YWx1ZTogXCJ0aFwiIH0sXHJcbiAgeyBuYW1lOiBcIlRpZ3JpbnlhXCIsIHZhbHVlOiBcInRpXCIgfSxcclxuICB7IG5hbWU6IFwiVHVya21lblwiLCB2YWx1ZTogXCJ0a1wiIH0sXHJcbiAgeyBuYW1lOiBcIlRhZ2Fsb2dcIiwgdmFsdWU6IFwidGxcIiB9LFxyXG4gIHsgbmFtZTogXCJUc3dhbmFcIiwgdmFsdWU6IFwidG5cIiB9LFxyXG4gIHsgbmFtZTogXCJUb25nYVwiLCB2YWx1ZTogXCJ0b1wiIH0sXHJcbiAgeyBuYW1lOiBcIlR1cmtpc2hcIiwgdmFsdWU6IFwidHJcIiB9LFxyXG4gIHsgbmFtZTogXCJUc29uZ2FcIiwgdmFsdWU6IFwidHNcIiB9LFxyXG4gIHsgbmFtZTogXCJUYXRhclwiLCB2YWx1ZTogXCJ0dFwiIH0sXHJcbiAgeyBuYW1lOiBcIlR3aVwiLCB2YWx1ZTogXCJ0d1wiIH0sXHJcbiAgeyBuYW1lOiBcIlRhaGl0aWFuXCIsIHZhbHVlOiBcInR5XCIgfSxcclxuICB7IG5hbWU6IFwiVWlnaHVyXCIsIHZhbHVlOiBcInVnXCIgfSxcclxuICB7IG5hbWU6IFwiVWtyYWluaWFuXCIsIHZhbHVlOiBcInVrXCIgfSxcclxuICB7IG5hbWU6IFwiVXJkdVwiLCB2YWx1ZTogXCJ1clwiIH0sXHJcbiAgeyBuYW1lOiBcIlV6YmVrXCIsIHZhbHVlOiBcInV6XCIgfSxcclxuICB7IG5hbWU6IFwiVmVuZGFcIiwgdmFsdWU6IFwidmVcIiB9LFxyXG4gIHsgbmFtZTogXCJWacOqdCBOYW1lc2VcIiwgdmFsdWU6IFwidmlcIiB9LFxyXG4gIHsgbmFtZTogXCJWb2xhcMO8a1wiLCB2YWx1ZTogXCJ2b1wiIH0sXHJcbiAgeyBuYW1lOiBcIldhbGxvb25cIiwgdmFsdWU6IFwid2FcIiB9LFxyXG4gIHsgbmFtZTogXCJXb2xvZlwiLCB2YWx1ZTogXCJ3b1wiIH0sXHJcbiAgeyBuYW1lOiBcIlhob3NhXCIsIHZhbHVlOiBcInhoXCIgfSxcclxuICB7IG5hbWU6IFwiWWlkZGlzaFwiLCB2YWx1ZTogXCJ5aVwiIH0sXHJcbiAgeyBuYW1lOiBcIllvcnViYVwiLCB2YWx1ZTogXCJ5b1wiIH0sXHJcbiAgeyBuYW1lOiBcIlpodWFuZ1wiLCB2YWx1ZTogXCJ6YVwiIH0sXHJcbiAgeyBuYW1lOiBcIkNoaW5lc2VcIiwgdmFsdWU6IFwiemhcIiB9LFxyXG4gIHsgbmFtZTogXCJadWx1XCIsIHZhbHVlOiBcInp1XCIgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBTVEFUVVMgPSBbXHJcbiAgeyBuYW1lOiBcIkluIFByb2dyZXNzXCIsIHZhbHVlOiBcImluIHByb2dyZXNzXCIgfSxcclxuICB7IG5hbWU6IFwiSW4gSGlhdHVzXCIsIHZhbHVlOiBcImluIGhpYXR1c1wiIH0sXHJcbiAgeyBuYW1lOiBcIkNvbXBsZXRlZFwiLCB2YWx1ZTogXCJjb21wbGV0ZWRcIiB9LFxyXG5dO1xyXG5cclxuLy8gVFlQRVNcclxuZXhwb3J0IGNvbnN0IHR5cGVzID0ge1xyXG4gIEdFVF9QUk9GSUxFOiBcIkdFVF9QUk9GSUxFXCIsXHJcbiAgTE9HSU46IFwiTE9HSU5cIixcclxuICBSRUdJU1RFUjogXCJSRUdJU1RFUlwiLFxyXG4gIEdFVF9TVE9SWTogXCJHRVRfU1RPUllcIixcclxuICBHRVRfVVNFUl9TVE9SSUVTOiBcIkdFVF9VU0VSX1NUT1JJRVNcIixcclxuICBHRVRfRkFWT1JJVEVfU1RPUklFUzogXCJHRVRfRkFWT1JJVEVfU1RPUklFU1wiLFxyXG4gIEFERF9TVE9SWTogXCJBRERfU1RPUllcIixcclxuICBFRElUX1NUT1JZOiBcIkVESVRfU1RPUllcIixcclxuICBERUxFVEVfU1RPUlk6IFwiREVMRVRFX1NUT1JZXCIsXHJcbiAgSVNfU1RPUllfRkFWT1JJVEU6IFwiSVNfU1RPUllfRkFWT1JJVEVcIixcclxuICBJU19GT0xMT1dJTkc6IFwiSVNfRk9MTE9XSU5HXCIsXHJcbiAgR0VUX0NIQVBURVI6IFwiR0VUX0NIQVBURVJcIixcclxuICBBRERfQ0hBUFRFUjogXCJBRERfQ0hBUFRFUlwiLFxyXG4gIEVESVRfQ0hBUFRFUjogXCJFRElUX0NIQVBURVJcIixcclxuICBERUxFVEVfQ0hBUFRFUjogXCJERUxFVEVfQ0hBUFRFUlwiLFxyXG4gIEdFVF9DSEFQVEVSUzogXCJHRVRfQ0hBUFRFUlNcIixcclxuICBBRERfQ0hBUkFDVEVSOiBcIkFERF9DSEFSQUNURVJcIixcclxuICBHRVRfQ0hBUkFDVEVSOiBcIkdFVF9DSEFSQUNURVJcIixcclxuICBFRElUX0NIQVJBQ1RFUjogXCJFRElUX0NIQVJBQ1RFUlwiLFxyXG4gIERFTEVURV9DSEFSQUNURVI6IFwiREVMRVRFX0NIQVJBQ1RFUlwiLFxyXG4gIEdFVF9VU0VSX0NIQVJBQ1RFUlM6IFwiR0VUX1VTRVJfQ0hBUkFDVEVSU1wiLFxyXG4gIEdFVF9DSEFSQUNURVJfQ09NTUVOVFM6IFwiR0VUX0NIQVJBQ1RFUl9DT01NRU5UU1wiLFxyXG4gIEdFVF9VU0VSX0xPQ0FUSU9OUzogXCJHRVRfVVNFUl9MT0NBVElPTlNcIixcclxuICBHRVRfRkFWT1JJVEVfQ0hBUkFDVEVSUzogXCJHRVRfRkFWT1JJVEVfQ0hBUkFDVEVSU1wiLFxyXG4gIEdFVF9TVE9SWV9DSEFSQUNURVJTOiBcIkdFVF9TVE9SWV9DSEFSQUNURVJTXCIsXHJcbiAgQUREX0xPQ0FUSU9OOiBcIkFERF9MT0NBVElPTlwiLFxyXG4gIEdFVF9MT0NBVElPTjogXCJHRVRfTE9DQVRJT05cIixcclxuICBFRElUX0xPQ0FUSU9OOiBcIkVESVRfTE9DQVRJT05cIixcclxuICBERUxFVEVfTE9DQVRJT046IFwiREVMRVRFX0xPQ0FUSU9OXCIsXHJcbiAgR0VUX0NPTU1FTlRTOiBcIkdFVF9DT01NRU5UU1wiLFxyXG4gIEdFVF9GQVZPUklURV9BVVRIT1JTOiBcIkdFVF9GQVZPUklURV9BVVRIT1JTXCIsXHJcbiAgR0VUX1NUT1JZX0xPQ0FUSU9OUzogXCJHRVRfU1RPUllfTE9DQVRJT05TXCIsXHJcbiAgR0VUX0ZPTExPV0VSUzogXCJHRVRfRk9MTE9XRVJTXCIsXHJcbiAgRElTUEFUQ0hfRVJST1I6IFwiRElTUEFUQ0hfRVJST1JcIixcclxuICBTVUJNSVRfQ09NTUVOVDogXCJTVUJNSVRfQ09NTUVOVFwiLFxyXG4gIFJBVEVfQ09NTUVOVDogXCJSQVRFX0NPTU1FTlRcIixcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfUFJPRklMRSA9IFwiR0VUX1BST0ZJTEVcIjtcclxuZXhwb3J0IGNvbnN0IExPR0lOID0gXCJMT0dJTlwiO1xyXG5leHBvcnQgY29uc3QgUkVHSVNURVIgPSBcIlJFR0lTVEVSXCI7XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX1NUT1JZID0gXCJHRVRfU1RPUllcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9VU0VSX1NUT1JJRVMgPSBcIkdFVF9VU0VSX1NUT1JJRVNcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9GQVZPUklURV9TVE9SSUVTID0gXCJHRVRfRkFWT1JJVEVfU1RPUklFU1wiO1xyXG5leHBvcnQgY29uc3QgQUREX1NUT1JZID0gXCJBRERfU1RPUllcIjtcclxuZXhwb3J0IGNvbnN0IEVESVRfU1RPUlkgPSBcIkVESVRfU1RPUllcIjtcclxuZXhwb3J0IGNvbnN0IERFTEVURV9TVE9SWSA9IFwiREVMRVRFX1NUT1JZXCI7XHJcbmV4cG9ydCBjb25zdCBJU19TVE9SWV9GQVZPUklURSA9IFwiSVNfU1RPUllfRkFWT1JJVEVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfQ0hBUFRFUiA9IFwiR0VUX0NIQVBURVJcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9DSEFQVEVSID0gXCJBRERfQ0hBUFRFUlwiO1xyXG5leHBvcnQgY29uc3QgRURJVF9DSEFQVEVSID0gXCJFRElUX0NIQVBURVJcIjtcclxuZXhwb3J0IGNvbnN0IERFTEVURV9DSEFQVEVSID0gXCJERUxFVEVfQ0hBUFRFUlwiO1xyXG5leHBvcnQgY29uc3QgR0VUX0NIQVBURVJTID0gXCJHRVRfQ0hBUFRFUlNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfQ0hBUkFDVEVSID0gXCJBRERfQ0hBUkFDVEVSXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfQ0hBUkFDVEVSID0gXCJHRVRfQ0hBUkFDVEVSXCI7XHJcbmV4cG9ydCBjb25zdCBFRElUX0NIQVJBQ1RFUiA9IFwiRURJVF9DSEFSQUNURVJcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9VU0VSX0NIQVJBQ1RFUlMgPSBcIkdFVF9VU0VSX0NIQVJBQ1RFUlNcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9VU0VSX0xPQ0FUSU9OUyA9IFwiR0VUX1VTRVJfTE9DQVRJT05TXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfRkFWT1JJVEVfQ0hBUkFDVEVSUyA9IFwiR0VUX0ZBVk9SSVRFX0NIQVJBQ1RFUlNcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9TVE9SWV9DSEFSQUNURVJTID0gXCJHRVRfU1RPUllfQ0hBUkFDVEVSU1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9MT0NBVElPTiA9IFwiQUREX0xPQ0FUSU9OXCI7XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX0ZBVk9SSVRFX0FVVEhPUlMgPSBcIkdFVF9GQVZPUklURV9BVVRIT1JTXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfRk9MTE9XRVJTID0gXCJHRVRfRk9MTE9XRVJTXCI7XHJcblxyXG5leHBvcnQgY29uc3QgRElTUEFUQ0hfRVJST1IgPSBcIkRJU1BBVENIX0VSUk9SXCI7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvYXBwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2F1dGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvZmlyZXN0b3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL3N0b3JhZ2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtY2FyZC1mbGlwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=