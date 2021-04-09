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
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\components\\auth\\Login.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Login = ({
  handleClick,
  auth
}) => {
  const [form] = antd__WEBPACK_IMPORTED_MODULE_1__["Form"].useForm();
  return __jsx("div", {
    className: "inner-auth",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, "Welcome back to Kronikea"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    onFinish: () => auth.signin(form.getFieldValue("email"), form.getFieldValue("password")),
    layout: "vertical",
    form: form,
    initialValues: {
      password: "",
      email: ""
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 24,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "email",
    label: "Email Address",
    rules: [{
      required: true,
      type: "email",
      message: "This is not valid E-mail!"
    }],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 15
    }
  })), auth.errors.email && __jsx("div", {
    className: "ant-form-item-explain ant-form-item-explain-error",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 15
    }
  }, __jsx("div", {
    role: "alert",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }, auth.errors.email))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 24,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "password",
    label: "Password",
    rules: [{
      required: true,
      message: "A password is required"
    }],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].Password, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 15
    }
  })), auth.errors.password && __jsx("div", {
    className: "ant-form-item-explain ant-form-item-explain-error",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 15
    }
  }, __jsx("div", {
    role: "alert",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }, auth.errors.password)))), __jsx("button", {
    type: "submit",
    className: "login-btn custom-btn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  }, "Login"))), __jsx("p", {
    onClick: handleClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
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
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\components\\auth\\Register.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Register = ({
  handleClick,
  auth
}) => {
  const [form] = antd__WEBPACK_IMPORTED_MODULE_1__["Form"].useForm();
  return __jsx("div", {
    className: "inner-auth",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, "Welcome to Kronikea"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    onFinish: ({
      password,
      email,
      username
    }) => auth.signup(email, password, username),
    layout: "vertical",
    form: form,
    initialValues: {
      password: "",
      email: ""
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 24,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "email",
    label: "Email Address",
    rules: [{
      required: true,
      type: "email",
      message: "This is not valid E-mail!"
    }],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 15
    }
  })), auth.errors.email && __jsx("div", {
    className: "ant-form-item-explain ant-form-item-explain-error",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 15
    }
  }, __jsx("div", {
    role: "alert",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }, auth.errors.email))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 24,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "username",
    label: "Username",
    rules: [{
      required: true,
      message: "A username is required"
    }, {
      max: 15,
      type: "string",
      message: "Your username cannot exceed 15 characters"
    }, {
      min: 4,
      type: "string",
      message: "Your username needs to be at least 4 characters long"
    }],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 15
    }
  })), auth.errors.username && __jsx("div", {
    className: "ant-form-item-explain ant-form-item-explain-error",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 15
    }
  }, __jsx("div", {
    role: "alert",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  }, auth.errors.username))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 24,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "password",
    label: "Password",
    rules: [{
      required: true,
      message: "A password is required"
    }, {
      min: 8,
      message: "Password must be at least 8 characters."
    }],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].Password, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 15
    }
  })), auth.errors.password && __jsx("div", {
    className: "ant-form-item-explain ant-form-item-explain-error",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 15
    }
  }, __jsx("div", {
    role: "alert",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 17
    }
  }, auth.errors.password))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 24,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "confirmpassword",
    label: "Confirm Password",
    rules: [{
      required: true,
      message: "Please confirm your password!"
    }, ({
      getFieldValue
    }) => ({
      validator(_, value) {
        if (!value || getFieldValue("password") === value) {
          return Promise.resolve();
        }

        return Promise.reject(new Error("The two passwords that you entered do not match!"));
      }

    })],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].Password, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 15
    }
  })), auth.errors.confirmPassword && __jsx("div", {
    className: "ant-form-item-explain ant-form-item-explain-error",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 15
    }
  }, __jsx("div", {
    role: "alert",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 17
    }
  }, auth.errors.confirmPassword)))), __jsx("button", {
    type: "submit",
    className: "login-btn custom-btn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 9
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 11
    }
  }, "Register"))), __jsx("p", {
    onClick: handleClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
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
    auth: auth,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }), __jsx(_components_auth_Register__WEBPACK_IMPORTED_MODULE_5__["default"], {
    auth: auth,
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
      lineNumber: 62,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "loader",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }, __jsx("div", {
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
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hdXRoL0xvZ2luLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYXV0aC9SZWdpc3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9ob29rcy91c2VySG9va3MuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXV0aC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25zL3VzZXJBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3JlZHV4L2ZiQ29uZmlnLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2UvYXBwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2UvYXV0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL2ZpcmVzdG9yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL3N0b3JhZ2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtY2FyZC1mbGlwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiJdLCJuYW1lcyI6WyJMb2dpbiIsImhhbmRsZUNsaWNrIiwiYXV0aCIsImZvcm0iLCJGb3JtIiwidXNlRm9ybSIsInNpZ25pbiIsImdldEZpZWxkVmFsdWUiLCJwYXNzd29yZCIsImVtYWlsIiwicmVxdWlyZWQiLCJ0eXBlIiwibWVzc2FnZSIsImVycm9ycyIsIlJlZ2lzdGVyIiwidXNlcm5hbWUiLCJzaWdudXAiLCJtYXgiLCJtaW4iLCJ2YWxpZGF0b3IiLCJfIiwidmFsdWUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIkVycm9yIiwiY29uZmlybVBhc3N3b3JkIiwiYXV0aENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiUHJvdmlkZUF1dGgiLCJjaGlsZHJlbiIsInVzZVByb3ZpZGVBdXRoIiwidXNlQXV0aCIsInVzZUNvbnRleHQiLCJ1c2VyIiwic2V0VXNlciIsInVzZVN0YXRlIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwic2V0RXJyb3JzIiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJ0aGVuIiwicmVzcG9uc2UiLCJjYXRjaCIsImVyciIsImNvZGUiLCJjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJkYiIsImNvbGxlY3Rpb24iLCJkb2MiLCJ1aWQiLCJzZXQiLCJsaWtlc0NvdW50IiwidHdpdHRlciIsImZhY2Vib29rIiwiaW5zdGFncmFtIiwiZGV2aWFudGFydCIsImJpb2dyYXBoeSIsImJhZGdlcyIsImNyZWF0ZWRBdCIsImZpcmViYXNlIiwiZmlyZXN0b3JlIiwiRmllbGRWYWx1ZSIsInNlcnZlclRpbWVzdGFtcCIsImltYWdlIiwic3VzcGVuZGVkIiwiY3VycmVudFVzZXIiLCJzZW5kRW1haWxWZXJpZmljYXRpb24iLCJzaWdub3V0Iiwic2lnbk91dCIsInNlbmRQYXNzd29yZFJlc2V0RW1haWwiLCJjb25maXJtUGFzc3dvcmRSZXNldCIsInZlcmlmeUVtYWlsIiwiaW5mbyIsImVycm9yIiwiZGVsZXRlQWNjb3VudCIsImRlbGV0ZSIsInVzZUVmZmVjdCIsInVuc3Vic2NyaWJlIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwib25TbmFwc2hvdCIsImV4aXN0cyIsImRhdGEiLCJsb2dfaW4iLCJpc0ZsaXBwZWQiLCJzZXRJc0ZsaXBwZWQiLCJzZXRVc2VybmFtZSIsInNldEVtYWlsIiwic2V0UGFzc3dvcmQiLCJzZXRDb25maXJtUGFzc3dvcmQiLCJSb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJiYWNrIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJjb25uZWN0IiwiZGlzcGF0Y2giLCJjb25zb2xlIiwibG9nIiwiZ2V0UHJvZmlsZSIsImlkIiwidHlwZXMiLCJHRVRfUFJPRklMRSIsInBheWxvYWQiLCJnZXRGYXZvcml0ZUF1dGhvcnMiLCJhZGRlZE9uIiwidXNlcklkIiwid2hlcmUiLCJnZXQiLCJkb2NzIiwiZmF2QXJyIiwiZm9yRWFjaCIsInJlY2lwaWVudCIsInVzZXJzIiwicmVzdWx0IiwibWFwIiwiYWxsIiwicmVzIiwiZmF2VXNlcnMiLCJHRVRfRkFWT1JJVEVfQVVUSE9SUyIsImdldEZvbGxvd2VycyIsInNlbmRlcklkIiwiR0VUX0ZPTExPV0VSUyIsImdldElzRm9sbG93aW5nIiwic25hcHNob3QiLCJhbnN3ZXIiLCJsZW5ndGgiLCJJU19GT0xMT1dJTkciLCJmb2xsb3dVc2VyIiwiaXNGYXZvcml0ZSIsIm5ld0ZvbGxvd2VyIiwid2FybmluZyIsImVtYWlsVmVyaWZpZWQiLCJhZGQiLCJzZW5kZXIiLCJyZWFkIiwic3VjY2VzcyIsInVuZm9sbG93VXNlciIsImNoYW5nZVByb2ZpbGUiLCJzZXRPcGVuIiwibmV3UGFzc3dvcmQiLCJhY3R1YWxQYXNzd29yZCIsIm5ld0luZm8iLCJpbWFnZU5hbWUiLCJyZWF1dGhlbnRpY2F0ZVdpdGhDcmVkZW50aWFsIiwiRW1haWxBdXRoUHJvdmlkZXIiLCJjcmVkZW50aWFsIiwidXBkYXRlUGFzc3dvcmQiLCJzdG9yYWdlIiwicmVmIiwicHV0IiwiZ2V0RG93bmxvYWRVUkwiLCJ1cmwiLCJ1cGRhdGUiLCJnZXRVc2Vyc0Zyb21TZWFyY2giLCJzZWFyY2giLCJ0b0xvd2VyQ2FzZSIsInNwbGl0Iiwic2VhcmNoVGVybSIsImlzSW5jbHVkZWQiLCJldmVyeSIsIndvcmQiLCJpbmNsdWRlcyIsIm9ySW5jbHVkZWQiLCJzb21lIiwiaW5kZXhPZiIsInB1c2giLCJHRVRfVVNFUlNfRlJPTV9TRUFSQ0giLCJsb2FkaW5nIiwicHJvZENvbmZpZyIsImFwaUtleSIsInByb2Nlc3MiLCJhdXRoRG9tYWluIiwiZGF0YWJhc2VVUkwiLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIkZJUkVCQVNFX0FQUF9JRCIsImRldkNvbmZpZyIsImNvbmZpZyIsImFwcHMiLCJpbml0aWFsaXplQXBwIiwiQ0FURUdPUklFUyIsIm5hbWUiLCJDT1BZUklHSFRTIiwiTEFOR1VBR0VTIiwiU1RBVFVTIiwiTE9HSU4iLCJSRUdJU1RFUiIsIkdFVF9TVE9SWSIsIkdFVF9VU0VSX1NUT1JJRVMiLCJHRVRfSE9NRV9TVE9SSUVTIiwiR0VUX0ZBVk9SSVRFX1NUT1JJRVMiLCJBRERfU1RPUlkiLCJFRElUX1NUT1JZIiwiREVMRVRFX1NUT1JZIiwiR0VUX1NUT1JJRVNfRlJPTV9TRUFSQ0giLCJJU19TVE9SWV9GQVZPUklURSIsIklTX0NIQVJBQ1RFUl9GQVZPUklURSIsIkdFVF9DSEFQVEVSIiwiQUREX0NIQVBURVIiLCJFRElUX0NIQVBURVIiLCJERUxFVEVfQ0hBUFRFUiIsIkdFVF9DSEFQVEVSUyIsIkFERF9DSEFSQUNURVIiLCJHRVRfQ0hBUkFDVEVSIiwiRURJVF9DSEFSQUNURVIiLCJERUxFVEVfQ0hBUkFDVEVSIiwiR0VUX1VTRVJfQ0hBUkFDVEVSUyIsIkdFVF9DSEFSQUNURVJfQ09NTUVOVFMiLCJHRVRfQ0hBUkFDVEVSU19GUk9NX1NFQVJDSCIsIkdFVF9VU0VSX0xPQ0FUSU9OUyIsIkdFVF9GQVZPUklURV9DSEFSQUNURVJTIiwiR0VUX1NUT1JZX0NIQVJBQ1RFUlMiLCJBRERfTE9DQVRJT04iLCJHRVRfTE9DQVRJT04iLCJFRElUX0xPQ0FUSU9OIiwiREVMRVRFX0xPQ0FUSU9OIiwiR0VUX0NPTU1FTlRTIiwiR0VUX1NUT1JZX0xPQ0FUSU9OUyIsIkRJU1BBVENIX0VSUk9SIiwiU1VCTUlUX0NPTU1FTlQiLCJSQVRFX0NPTU1FTlQiLCJHRVRfTk9USUZJQ0FUSU9OUyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7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LE1BQUksRUFBRSxRQUFSO0FBQWtCckssT0FBSyxFQUFFO0FBQXpCLENBekh1QixFQTBIdkI7QUFBRXFLLE1BQUksRUFBRSxVQUFSO0FBQW9CckssT0FBSyxFQUFFO0FBQTNCLENBMUh1QixFQTJIdkI7QUFBRXFLLE1BQUksRUFBRSxTQUFSO0FBQW1CckssT0FBSyxFQUFFO0FBQTFCLENBM0h1QixFQTRIdkI7QUFBRXFLLE1BQUksRUFBRSxRQUFSO0FBQWtCckssT0FBSyxFQUFFO0FBQXpCLENBNUh1QixFQTZIdkI7QUFBRXFLLE1BQUksRUFBRSxPQUFSO0FBQWlCckssT0FBSyxFQUFFO0FBQXhCLENBN0h1QixFQThIdkI7QUFBRXFLLE1BQUksRUFBRSxPQUFSO0FBQWlCckssT0FBSyxFQUFFO0FBQXhCLENBOUh1QixFQStIdkI7QUFBRXFLLE1BQUksRUFBRSxVQUFSO0FBQW9CckssT0FBSyxFQUFFO0FBQTNCLENBL0h1QixFQWdJdkI7QUFBRXFLLE1BQUksRUFBRSxTQUFSO0FBQW1CckssT0FBSyxFQUFFO0FBQTFCLENBaEl1QixFQWlJdkI7QUFBRXFLLE1BQUksRUFBRSxNQUFSO0FBQWdCckssT0FBSyxFQUFFO0FBQXZCLENBakl1QixFQWtJdkI7QUFBRXFLLE1BQUksRUFBRSxRQUFSO0FBQWtCckssT0FBSyxFQUFFO0FBQXpCLENBbEl1QixFQW1JdkI7QUFBRXFLLE1BQUksRUFBRSxRQUFSO0FBQWtCckssT0FBSyxFQUFFO0FBQXpCLENBbkl1QixFQW9JdkI7QUFBRXFLLE1BQUksRUFBRSxZQUFSO0FBQXNCckssT0FBSyxFQUFFO0FBQTdCLENBcEl1QixFQXFJdkI7QUFBRXFLLE1BQUksRUFBRSxTQUFSO0FBQW1CckssT0FBSyxFQUFFO0FBQTFCLENBckl1QixFQXNJdkI7QUFBRXFLLE1BQUksRUFBRSxZQUFSO0FBQXNCckssT0FBSyxFQUFFO0FBQTdCLENBdEl1QixFQXVJdkI7QUFBRXFLLE1BQUksRUFBRSxTQUFSO0FBQW1CckssT0FBSyxFQUFFO0FBQTFCLENBdkl1QixFQXdJdkI7QUFBRXFL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V0FBbEI7QUFDQSxNQUFNQyxnQkFBZ0IsR0FBRyxrQkFBekI7QUFDQSxNQUFNRSxvQkFBb0IsR0FBRyxzQkFBN0I7QUFDQSxNQUFNQyxTQUFTLEdBQUcsV0FBbEI7QUFDQSxNQUFNQyxVQUFVLEdBQUcsWUFBbkI7QUFDQSxNQUFNQyxZQUFZLEdBQUcsY0FBckI7QUFDQSxNQUFNRSxpQkFBaUIsR0FBRyxtQkFBMUI7QUFFQSxNQUFNRSxXQUFXLEdBQUcsYUFBcEI7QUFDQSxNQUFNQyxXQUFXLEdBQUcsYUFBcEI7QUFDQSxNQUFNQyxZQUFZLEdBQUcsY0FBckI7QUFDQSxNQUFNQyxjQUFjLEdBQUcsZ0JBQXZCO0FBQ0EsTUFBTUMsWUFBWSxHQUFHLGNBQXJCO0FBRUEsTUFBTUMsYUFBYSxHQUFHLGVBQXRCO0FBQ0EsTUFBTUMsYUFBYSxHQUFHLGVBQXRCO0FBQ0EsTUFBTUMsY0FBYyxHQUFHLGdCQUF2QjtBQUNBLE1BQU1FLG1CQUFtQixHQUFHLHFCQUE1QjtBQUNBLE1BQU1HLGtCQUFrQixHQUFHLG9CQUEzQjtBQUNBLE1BQU1DLHVCQUF1QixHQUFHLHlCQUFoQztBQUNBLE1BQU1DLG9CQUFvQixHQUFHLHNCQUE3QjtBQUVBLE1BQU1DLFlBQVksR0FBRyxjQUFyQjtBQUVBLE1BQU1oRyxvQkFBb0IsR0FBRyxzQkFBN0I7QUFDQSxNQUFNRyxhQUFhLEdBQUcsZUFBdEI7QUFFQSxNQUFNbUcsY0FBYyxHQUFHLGdCQUF2QixDOzs7Ozs7Ozs7OztBQzFTUCxpQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSx3QyIsImZpbGUiOiJwYWdlcy9hdXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9hdXRoLmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGb3JtLCBJbnB1dCwgQ29sLCBSb3cgfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuY29uc3QgTG9naW4gPSAoeyBoYW5kbGVDbGljaywgYXV0aCB9KSA9PiB7XHJcbiAgY29uc3QgW2Zvcm1dID0gRm9ybS51c2VGb3JtKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyLWF1dGhcIj5cclxuICAgICAgPGgyPldlbGNvbWUgYmFjayB0byBLcm9uaWtlYTwvaDI+XHJcblxyXG4gICAgICA8Rm9ybVxyXG4gICAgICAgIG9uRmluaXNoPXsoKSA9PlxyXG4gICAgICAgICAgYXV0aC5zaWduaW4oXHJcbiAgICAgICAgICAgIGZvcm0uZ2V0RmllbGRWYWx1ZShcImVtYWlsXCIpLFxyXG4gICAgICAgICAgICBmb3JtLmdldEZpZWxkVmFsdWUoXCJwYXNzd29yZFwiKVxyXG4gICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgICAgICBsYXlvdXQ9XCJ2ZXJ0aWNhbFwiXHJcbiAgICAgICAgZm9ybT17Zm9ybX1cclxuICAgICAgICBpbml0aWFsVmFsdWVzPXt7IHBhc3N3b3JkOiBcIlwiLCBlbWFpbDogXCJcIiB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPFJvdz5cclxuICAgICAgICAgIDxDb2wgc3Bhbj17MjR9PlxyXG4gICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIkVtYWlsIEFkZHJlc3NcIlxyXG4gICAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICB0eXBlOiBcImVtYWlsXCIsXHJcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiVGhpcyBpcyBub3QgdmFsaWQgRS1tYWlsIVwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICB7YXV0aC5lcnJvcnMuZW1haWwgJiYgKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW50LWZvcm0taXRlbS1leHBsYWluIGFudC1mb3JtLWl0ZW0tZXhwbGFpbi1lcnJvclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiByb2xlPVwiYWxlcnRcIj57YXV0aC5lcnJvcnMuZW1haWx9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDxDb2wgc3Bhbj17MjR9PlxyXG4gICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJBIHBhc3N3b3JkIGlzIHJlcXVpcmVkXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8SW5wdXQuUGFzc3dvcmQgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIHthdXRoLmVycm9ycy5wYXNzd29yZCAmJiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbnQtZm9ybS1pdGVtLWV4cGxhaW4gYW50LWZvcm0taXRlbS1leHBsYWluLWVycm9yXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHJvbGU9XCJhbGVydFwiPnthdXRoLmVycm9ycy5wYXNzd29yZH08L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImxvZ2luLWJ0biBjdXN0b20tYnRuXCI+XHJcbiAgICAgICAgICA8c3Bhbj5Mb2dpbjwvc3Bhbj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9Gb3JtPlxyXG4gICAgICA8cCBvbkNsaWNrPXtoYW5kbGVDbGlja30+RG9uJ3QgaGF2ZSBhbiBhY2NvdW50IHlldCA/IFJlZ2lzdGVyIGhlcmU8L3A+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW47XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgUm93LCBDb2wsIEZvcm0sIElucHV0IH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmNvbnN0IFJlZ2lzdGVyID0gKHsgaGFuZGxlQ2xpY2ssIGF1dGggfSkgPT4ge1xyXG4gIGNvbnN0IFtmb3JtXSA9IEZvcm0udXNlRm9ybSgpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lci1hdXRoXCI+XHJcbiAgICAgIDxoMj5XZWxjb21lIHRvIEtyb25pa2VhPC9oMj5cclxuICAgICAgPEZvcm1cclxuICAgICAgICBvbkZpbmlzaD17KHsgcGFzc3dvcmQsIGVtYWlsLCB1c2VybmFtZSB9KSA9PlxyXG4gICAgICAgICAgYXV0aC5zaWdudXAoZW1haWwsIHBhc3N3b3JkLCB1c2VybmFtZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgbGF5b3V0PVwidmVydGljYWxcIlxyXG4gICAgICAgIGZvcm09e2Zvcm19XHJcbiAgICAgICAgaW5pdGlhbFZhbHVlcz17eyBwYXNzd29yZDogXCJcIiwgZW1haWw6IFwiXCIgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxSb3c+XHJcbiAgICAgICAgICA8Q29sIHNwYW49ezI0fT5cclxuICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJFbWFpbCBBZGRyZXNzXCJcclxuICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgdHlwZTogXCJlbWFpbFwiLFxyXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIlRoaXMgaXMgbm90IHZhbGlkIEUtbWFpbCFcIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAge2F1dGguZXJyb3JzLmVtYWlsICYmIChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFudC1mb3JtLWl0ZW0tZXhwbGFpbiBhbnQtZm9ybS1pdGVtLWV4cGxhaW4tZXJyb3JcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgcm9sZT1cImFsZXJ0XCI+e2F1dGguZXJyb3JzLmVtYWlsfTwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8Q29sIHNwYW49ezI0fT5cclxuICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJVc2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiQSB1c2VybmFtZSBpcyByZXF1aXJlZFwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgbWF4OiAxNSxcclxuICAgICAgICAgICAgICAgICAgdHlwZTogXCJzdHJpbmdcIixcclxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJZb3VyIHVzZXJuYW1lIGNhbm5vdCBleGNlZWQgMTUgY2hhcmFjdGVyc1wiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgbWluOiA0LFxyXG4gICAgICAgICAgICAgICAgICB0eXBlOiBcInN0cmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOlxyXG4gICAgICAgICAgICAgICAgICAgIFwiWW91ciB1c2VybmFtZSBuZWVkcyB0byBiZSBhdCBsZWFzdCA0IGNoYXJhY3RlcnMgbG9uZ1wiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICB7YXV0aC5lcnJvcnMudXNlcm5hbWUgJiYgKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW50LWZvcm0taXRlbS1leHBsYWluIGFudC1mb3JtLWl0ZW0tZXhwbGFpbi1lcnJvclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiByb2xlPVwiYWxlcnRcIj57YXV0aC5lcnJvcnMudXNlcm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDxDb2wgc3Bhbj17MjR9PlxyXG4gICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJBIHBhc3N3b3JkIGlzIHJlcXVpcmVkXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgeyBtaW46IDgsIG1lc3NhZ2U6IFwiUGFzc3dvcmQgbXVzdCBiZSBhdCBsZWFzdCA4IGNoYXJhY3RlcnMuXCIgfSxcclxuICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPElucHV0LlBhc3N3b3JkIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICB7YXV0aC5lcnJvcnMucGFzc3dvcmQgJiYgKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW50LWZvcm0taXRlbS1leHBsYWluIGFudC1mb3JtLWl0ZW0tZXhwbGFpbi1lcnJvclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiByb2xlPVwiYWxlcnRcIj57YXV0aC5lcnJvcnMucGFzc3dvcmR9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDxDb2wgc3Bhbj17MjR9PlxyXG4gICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgbmFtZT1cImNvbmZpcm1wYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJDb25maXJtIFBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJQbGVhc2UgY29uZmlybSB5b3VyIHBhc3N3b3JkIVwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICh7IGdldEZpZWxkVmFsdWUgfSkgPT4gKHtcclxuICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yKF8sIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF2YWx1ZSB8fCBnZXRGaWVsZFZhbHVlKFwicGFzc3dvcmRcIikgPT09IHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcclxuICAgICAgICAgICAgICAgICAgICAgIG5ldyBFcnJvcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJUaGUgdHdvIHBhc3N3b3JkcyB0aGF0IHlvdSBlbnRlcmVkIGRvIG5vdCBtYXRjaCFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPElucHV0LlBhc3N3b3JkIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICB7YXV0aC5lcnJvcnMuY29uZmlybVBhc3N3b3JkICYmIChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFudC1mb3JtLWl0ZW0tZXhwbGFpbiBhbnQtZm9ybS1pdGVtLWV4cGxhaW4tZXJyb3JcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgcm9sZT1cImFsZXJ0XCI+e2F1dGguZXJyb3JzLmNvbmZpcm1QYXNzd29yZH08L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImxvZ2luLWJ0biBjdXN0b20tYnRuXCI+XHJcbiAgICAgICAgICA8c3Bhbj5SZWdpc3Rlcjwvc3Bhbj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9Gb3JtPlxyXG4gICAgICA8cCBvbkNsaWNrPXtoYW5kbGVDbGlja30+QWxyZWFkeSBoYXZlIGFuIGFjY291bnQgPyBMb2dpbiBoZXJlPC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVyO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCwgY3JlYXRlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlL2FwcFwiO1xyXG5pbXBvcnQgeyBhdXRoLCBkYiwgc3RvcmFnZSB9IGZyb20gXCIuLi9yZWR1eC9mYkNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBtZXNzYWdlIH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmNvbnN0IGF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFByb3ZpZGVBdXRoKHsgY2hpbGRyZW4gfSkge1xyXG4gIGNvbnN0IGF1dGggPSB1c2VQcm92aWRlQXV0aCgpO1xyXG4gIHJldHVybiA8YXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2F1dGh9PntjaGlsZHJlbn08L2F1dGhDb250ZXh0LlByb3ZpZGVyPjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUF1dGggPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHVzZUNvbnRleHQoYXV0aENvbnRleHQpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gdXNlUHJvdmlkZUF1dGgoKSB7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtlcnJvcnMsIHNldEVycm9yc10gPSB1c2VTdGF0ZSh7XHJcbiAgICBwYXNzd29yZDogXCJcIixcclxuICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgdXNlcm5hbWU6IFwiXCIsXHJcbiAgfSk7XHJcblxyXG4gIC8vIFdyYXAgYW55IEZpcmViYXNlIG1ldGhvZHMgd2Ugd2FudCB0byB1c2UgbWFraW5nIHN1cmUgLi4uXHJcbiAgLy8gLi4uIHRvIHNhdmUgdGhlIHVzZXIgdG8gc3RhdGUuXHJcbiAgY29uc3Qgc2lnbmluID0gKGVtYWlsLCBwYXNzd29yZCkgPT4ge1xyXG4gICAgcmV0dXJuIGF1dGhcclxuICAgICAgLnNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZClcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgc2V0RXJyb3JzKHsgcGFzc3dvcmQ6IFwiXCIsIGVtYWlsOiBcIlwiIH0pO1xyXG4gICAgICAgIHNldFVzZXIocmVzcG9uc2UudXNlcik7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnVzZXI7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgaWYgKGVyci5jb2RlID09PSBcImF1dGgvd3JvbmctcGFzc3dvcmRcIikge1xyXG4gICAgICAgICAgc2V0RXJyb3JzKHsgLi4uZXJyb3JzLCBwYXNzd29yZDogZXJyLm1lc3NhZ2UgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChlcnIuY29kZSA9PT0gXCJhdXRoL3VzZXItbm90LWZvdW5kXCIpIHtcclxuICAgICAgICAgIHNldEVycm9ycyh7IC4uLmVycm9ycywgZW1haWw6IGVyci5tZXNzYWdlIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2lnbnVwID0gKGVtYWlsLCBwYXNzd29yZCwgdXNlcm5hbWUpID0+IHtcclxuICAgIGF1dGhcclxuICAgICAgLmNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpXHJcbiAgICAgIC50aGVuKGFzeW5jIChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHNldEVycm9ycyh7XHJcbiAgICAgICAgICBwYXNzd29yZDogXCJcIixcclxuICAgICAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICAgICAgdXNlcm5hbWU6IFwiXCIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2V0VXNlcih7IC4uLnJlc3BvbnNlLnVzZXIsIHVzZXJuYW1lOiB1c2VybmFtZSB9KTtcclxuICAgICAgICByZXR1cm4gYXdhaXQgZGIuY29sbGVjdGlvbihcInVzZXJzXCIpLmRvYyhyZXNwb25zZS51c2VyLnVpZCkuc2V0KHtcclxuICAgICAgICAgIHVzZXJuYW1lLFxyXG4gICAgICAgICAgbGlrZXNDb3VudDogMCxcclxuICAgICAgICAgIHR3aXR0ZXI6IFwiXCIsXHJcbiAgICAgICAgICBmYWNlYm9vazogXCJcIixcclxuICAgICAgICAgIGluc3RhZ3JhbTogXCJcIixcclxuICAgICAgICAgIGRldmlhbnRhcnQ6IFwiXCIsXHJcbiAgICAgICAgICBiaW9ncmFwaHk6IFwiXCIsXHJcbiAgICAgICAgICBiYWRnZXM6IFtdLFxyXG4gICAgICAgICAgY3JlYXRlZEF0OiBmaXJlYmFzZS5maXJlc3RvcmUuRmllbGRWYWx1ZS5zZXJ2ZXJUaW1lc3RhbXAoKSxcclxuICAgICAgICAgIGltYWdlOiBcIlwiLFxyXG4gICAgICAgICAgc3VzcGVuZGVkOiBmYWxzZSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBhdXRoLmN1cnJlbnRVc2VyLnNlbmRFbWFpbFZlcmlmaWNhdGlvbigpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIGVyci5jb2RlID09PSBcImF1dGgvZW1haWwtYWxyZWFkeS1pbi11c2VcIiB8fFxyXG4gICAgICAgICAgZXJyLmNvZGUgPT09IFwiYXV0aC9pbnZhbGlkLWVtYWlsXCJcclxuICAgICAgICApIHtcclxuICAgICAgICAgIHNldEVycm9ycyh7IC4uLmVycm9ycywgZW1haWw6IGVyci5tZXNzYWdlIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZXJyLmNvZGUgPT09IFwiYXV0aC93ZWFrLXBhc3N3b3JkXCIpIHtcclxuICAgICAgICAgIHNldEVycm9ycyh7IC4uLmVycm9ycywgcGFzc3dvcmQ6IGVyci5tZXNzYWdlIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2lnbm91dCA9ICgpID0+IHtcclxuICAgIHJldHVybiBhdXRoLnNpZ25PdXQoKS50aGVuKCgpID0+IHtcclxuICAgICAgc2V0VXNlcihmYWxzZSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzZW5kUGFzc3dvcmRSZXNldEVtYWlsID0gKGVtYWlsKSA9PiB7XHJcbiAgICByZXR1cm4gYXV0aC5zZW5kUGFzc3dvcmRSZXNldEVtYWlsKGVtYWlsKS50aGVuKCgpID0+IHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjb25maXJtUGFzc3dvcmRSZXNldCA9IChjb2RlLCBwYXNzd29yZCkgPT4ge1xyXG4gICAgcmV0dXJuIGF1dGguY29uZmlybVBhc3N3b3JkUmVzZXQoY29kZSwgcGFzc3dvcmQpLnRoZW4oKCkgPT4ge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHZlcmlmeUVtYWlsID0gKCkgPT4ge1xyXG4gICAgYXV0aC5jdXJyZW50VXNlclxyXG4gICAgICAuc2VuZEVtYWlsVmVyaWZpY2F0aW9uKClcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIG1lc3NhZ2UuaW5mbyhcIlZlcmlmaWNhdGlvbiBFbWFpbCBzZW50LiBDaGVjayB5b3VyIGluYm94ICFcIik7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihlcnIubWVzc2FnZSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRlbGV0ZUFjY291bnQgPSAoKSA9PiB7XHJcbiAgICBhdXRoLmN1cnJlbnRVc2VyLmRlbGV0ZSgpO1xyXG5cclxuICAgIC8vIGNvbnN0IGJhdGNoID0gZGIuYmF0Y2goKTtcclxuICAgIC8vIGNvbnN0IHVzZXJJZCA9IGF1dGguY3VycmVudFVzZXIudWlkO1xyXG4gICAgLy8gY29uc3QgYWxsU3RvcmllcyA9IGRiXHJcbiAgICAvLyAgIC5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKVxyXG4gICAgLy8gICAud2hlcmUoXCJhdXRob3JJZFwiLCBcIj09XCIsIHVzZXJJZClcclxuICAgIC8vICAgLmdldCgpO1xyXG4gICAgLy8gY29uc3QgYWxsQ2hhcmFjdGVycyA9IGRiXHJcbiAgICAvLyAgIC5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc1wiKVxyXG4gICAgLy8gICAud2hlcmUoXCJhdXRob3JJZFwiLCBcIj09XCIsIHVzZXJJZClcclxuICAgIC8vICAgLmdldCgpO1xyXG4gICAgLy8gY29uc3QgYWxsQ2hhcHRlcnMgPSBkYlxyXG4gICAgLy8gICAuY29sbGVjdGlvbihcImNoYXB0ZXJzXCIpXHJcbiAgICAvLyAgIC53aGVyZShcImF1dGhvcklkXCIsIFwiPT1cIiwgdXNlcklkKVxyXG4gICAgLy8gICAuZ2V0KCk7XHJcbiAgICAvLyBjb25zdCBhbGxMb2NhdGlvbnMgPSBkYlxyXG4gICAgLy8gICAuY29sbGVjdGlvbihcImxvY2F0aW9uc1wiKVxyXG4gICAgLy8gICAud2hlcmUoXCJhdXRob3JJZFwiLCBcIj09XCIsIHVzZXJJZClcclxuICAgIC8vICAgLmdldCgpO1xyXG4gICAgLy8gY29uc3QgYWxsTm90aWZpY2F0aW9ucyA9IGRiXHJcbiAgICAvLyAgIC5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc1wiKVxyXG4gICAgLy8gICAud2hlcmUoXCJyZWNpcGllbnRcIiwgXCI9PVwiLCB1c2VySWQpXHJcbiAgICAvLyAgIC5nZXQoKTtcclxuICAgIC8vIGNvbnN0IGFsbFVzZXJMaWtlcyA9IGRiXHJcbiAgICAvLyAgIC5jb2xsZWN0aW9uKFwidXNlcnNMaWtlc1wiKVxyXG4gICAgLy8gICAud2hlcmUoXCJzZW5kZXJcIiwgXCI9PVwiLCB1c2VySWQpXHJcbiAgICAvLyAgIC5nZXQoKTtcclxuICAgIC8vIGNvbnN0IGFsbFN0b3J5TGlrZXMgPSBkYlxyXG4gICAgLy8gICAuY29sbGVjdGlvbihcInN0b3JpZXNMaWtlc1wiKVxyXG4gICAgLy8gICAud2hlcmUoXCJzZW5kZXJcIiwgXCI9PVwiLCB1c2VySWQpXHJcbiAgICAvLyAgIC5nZXQoKTtcclxuICAgIC8vIGNvbnN0IGFsbENoYXJhY3RlcnNMaWtlcyA9IGRiXHJcbiAgICAvLyAgIC5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc0xpa2VzXCIpXHJcbiAgICAvLyAgIC53aGVyZShcInNlbmRlclwiLCBcIj09XCIsIHVzZXJJZClcclxuICAgIC8vICAgLmdldCgpO1xyXG4gICAgLy8gY29uc3QgYWxsQ29tbWVudHMgPSBkYlxyXG4gICAgLy8gICAuY29sbGVjdGlvbihcImNvbW1lbnRzXCIpXHJcbiAgICAvLyAgIC53aGVyZShcInVzZXJJZFwiLCBcIj09XCIsIHVzZXJJZClcclxuICAgIC8vICAgLmdldCgpO1xyXG4gICAgLy8gY29uc3QgYWxsRm9sbG93ZXJzID0gZGJcclxuICAgIC8vICAgLmNvbGxlY3Rpb24oXCJ1c2Vyc0xpa2VzXCIpXHJcbiAgICAvLyAgIC53aGVyZShcInJlY2lwaWVudFwiLCBcIj09XCIsIHVzZXJJZClcclxuICAgIC8vICAgLmdldCgpO1xyXG4gICAgLy8gY29uc3QgYWxsU3RvcnlMaWtlZCA9IGRiXHJcbiAgICAvLyAgIC5jb2xsZWN0aW9uKFwic3Rvcmllc0xpa2VzXCIpXHJcbiAgICAvLyAgIC53aGVyZShcInJlY2lwaWVudFwiLCBcIj09XCIsIHVzZXJJZClcclxuICAgIC8vICAgLmdldCgpO1xyXG4gICAgLy8gY29uc3QgYWxsQ2hhcmFjdGVyc0xpa2VkID0gZGJcclxuICAgIC8vICAgLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzTGlrZXNcIilcclxuICAgIC8vICAgLndoZXJlKFwicmVjaXBpZW50XCIsIFwiPT1cIiwgdXNlcklkKVxyXG4gICAgLy8gICAuZ2V0KCk7XHJcblxyXG4gICAgLy8gUHJvbWlzZS5hbGwoW1xyXG4gICAgLy8gICBhbGxTdG9yaWVzLFxyXG4gICAgLy8gICBhbGxDaGFyYWN0ZXJzLFxyXG4gICAgLy8gICBhbGxOb3RpZmljYXRpb25zLFxyXG4gICAgLy8gICBhbGxVc2VyTGlrZXMsXHJcbiAgICAvLyAgIGFsbFN0b3J5TGlrZXMsXHJcbiAgICAvLyAgIGFsbENoYXJhY3RlcnNMaWtlcyxcclxuICAgIC8vICAgYWxsQ29tbWVudHMsXHJcbiAgICAvLyAgIGFsbENoYXB0ZXJzLFxyXG4gICAgLy8gICBhbGxMb2NhdGlvbnMsXHJcbiAgICAvLyAgIGFsbEZvbGxvd2VycyxcclxuICAgIC8vICAgYWxsU3RvcnlMaWtlZCxcclxuICAgIC8vICAgYWxsQ2hhcmFjdGVyc0xpa2VkLFxyXG4gICAgLy8gXSlcclxuICAgIC8vICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgLy8gICAgIHJlc1swXS5mb3JFYWNoKChzdG9yeSkgPT5cclxuICAgIC8vICAgICAgIGJhdGNoLmRlbGV0ZShkYi5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKS5kb2Moc3RvcnkuaWQpKVxyXG4gICAgLy8gICAgICk7XHJcbiAgICAvLyAgICAgcmVzWzFdLmZvckVhY2goKGNoYXJhKSA9PlxyXG4gICAgLy8gICAgICAgYmF0Y2guZGVsZXRlKGRiLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzXCIpLmRvYyhjaGFyYS5pZCkpXHJcbiAgICAvLyAgICAgKTtcclxuICAgIC8vICAgICByZXNbMl0uZm9yRWFjaCgobm90aWYpID0+XHJcbiAgICAvLyAgICAgICBiYXRjaC5kZWxldGUoZGIuY29sbGVjdGlvbihcIm5vdGlmaWNhdGlvbnNcIikuZG9jKG5vdGlmLmlkKSlcclxuICAgIC8vICAgICApO1xyXG4gICAgLy8gICAgIHJlc1szXS5mb3JFYWNoKChsaWtlKSA9PlxyXG4gICAgLy8gICAgICAgYmF0Y2guZGVsZXRlKGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc0xpa2VzXCIpLmRvYyhsaWtlLmlkKSlcclxuICAgIC8vICAgICApO1xyXG4gICAgLy8gICAgIHJlc1s0XS5mb3JFYWNoKChsaWtlKSA9PlxyXG4gICAgLy8gICAgICAgYmF0Y2guZGVsZXRlKGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzTGlrZXNcIikuZG9jKGxpa2UuaWQpKVxyXG4gICAgLy8gICAgICk7XHJcbiAgICAvLyAgICAgcmVzWzVdLmZvckVhY2goKGxpa2UpID0+XHJcbiAgICAvLyAgICAgICBiYXRjaC5kZWxldGUoZGIuY29sbGVjdGlvbihcImNoYXJhY3RlcnNMaWtlc1wiKS5kb2MobGlrZS5pZCkpXHJcbiAgICAvLyAgICAgKTtcclxuICAgIC8vICAgICByZXNbNl0uZm9yRWFjaCgoY29tbWVudCkgPT5cclxuICAgIC8vICAgICAgIGJhdGNoLnVwZGF0ZShkYi5jb2xsZWN0aW9uKFwiY29tbWVudHNcIikuZG9jKGNvbW1lbnQuaWQpLCB7XHJcbiAgICAvLyAgICAgICAgIHVzZXJEZWxldGVkOiB0cnVlLFxyXG4gICAgLy8gICAgICAgfSlcclxuICAgIC8vICAgICApO1xyXG4gICAgLy8gICAgIHJlc1s3XS5mb3JFYWNoKChjaGFwKSA9PlxyXG4gICAgLy8gICAgICAgYmF0Y2guZGVsZXRlKGRiLmNvbGxlY3Rpb24oXCJjaGFwdGVyc1wiKS5kb2MoY2hhcC5pZCkpXHJcbiAgICAvLyAgICAgKTtcclxuICAgIC8vICAgICByZXNbN10uZm9yRWFjaCgobG9jKSA9PlxyXG4gICAgLy8gICAgICAgYmF0Y2guZGVsZXRlKGRiLmNvbGxlY3Rpb24oXCJsb2NhdGlvbnNcIikuZG9jKGxvYy5pZCkpXHJcbiAgICAvLyAgICAgKTtcclxuICAgIC8vICAgICByZXNbN10uZm9yRWFjaCgobGlrZSkgPT5cclxuICAgIC8vICAgICAgIGJhdGNoLmRlbGV0ZShkYi5jb2xsZWN0aW9uKFwidXNlcnNMaWtlc1wiKS5kb2MobGlrZS5pZCkpXHJcbiAgICAvLyAgICAgKTtcclxuICAgIC8vICAgICByZXNbOF0uZm9yRWFjaCgobGlrZSkgPT5cclxuICAgIC8vICAgICAgIGJhdGNoLmRlbGV0ZShkYi5jb2xsZWN0aW9uKFwic3Rvcmllc0xpa2VzXCIpLmRvYyhsaWtlLmlkKSlcclxuICAgIC8vICAgICApO1xyXG4gICAgLy8gICAgIHJlc1s5XS5mb3JFYWNoKChsaWtlKSA9PlxyXG4gICAgLy8gICAgICAgYmF0Y2guZGVsZXRlKGRiLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzTGlrZXNcIikuZG9jKGxpa2UuaWQpKVxyXG4gICAgLy8gICAgICk7XHJcbiAgICAvLyAgICAgYmF0Y2guZGVsZXRlKGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKS5kb2ModXNlcklkKSk7XHJcbiAgICAvLyAgICAgYXV0aC5jdXJyZW50VXNlclxyXG4gICAgLy8gICAgICAgLmRlbGV0ZSgpXHJcbiAgICAvLyAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgIGJhdGNoLmNvbW1pdCgpO1xyXG4gICAgLy8gICAgICAgfSlcclxuICAgIC8vICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxuICAgIC8vICAgfSlcclxuICAgIC8vICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB1bnN1YnNjcmliZSA9IGF1dGgub25BdXRoU3RhdGVDaGFuZ2VkKCh1c2VyKSA9PiB7XHJcbiAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgc2V0VXNlcih1c2VyKTtcclxuICAgICAgICBpZiAodXNlci51aWQpIHtcclxuICAgICAgICAgIGxldCB1c2VybmFtZSA9IFwiXCI7XHJcbiAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgZGIuY29sbGVjdGlvbihcInVzZXJzXCIpXHJcbiAgICAgICAgICAgIC5kb2ModXNlci51aWQpXHJcbiAgICAgICAgICAgIC5vblNuYXBzaG90KChkb2MpID0+IHtcclxuICAgICAgICAgICAgICBpZiAoZG9jLmV4aXN0cykge1xyXG4gICAgICAgICAgICAgICAgdXNlcm5hbWUgPSBkb2MuZGF0YSgpLnVzZXJuYW1lO1xyXG4gICAgICAgICAgICAgICAgc2V0VXNlcih7IC4uLnVzZXIsIHVzZXJuYW1lLCBpbWFnZTogZG9jLmRhdGEoKS5pbWFnZSB9KTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRVc2VyKGZhbHNlKTtcclxuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBDbGVhbnVwIHN1YnNjcmlwdGlvbiBvbiB1bm1vdW50XHJcbiAgICByZXR1cm4gKCkgPT4gdW5zdWJzY3JpYmUoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8vIFJldHVybiB0aGUgdXNlciBvYmplY3QgYW5kIGF1dGggbWV0aG9kc1xyXG4gIHJldHVybiB7XHJcbiAgICBkZWxldGVBY2NvdW50LFxyXG4gICAgaXNMb2FkaW5nLFxyXG4gICAgZXJyb3JzLFxyXG4gICAgdXNlcixcclxuICAgIHNpZ25pbixcclxuICAgIHNpZ251cCxcclxuICAgIHNpZ25vdXQsXHJcbiAgICBzZW5kUGFzc3dvcmRSZXNldEVtYWlsLFxyXG4gICAgY29uZmlybVBhc3N3b3JkUmVzZXQsXHJcbiAgICB2ZXJpZnlFbWFpbCxcclxuICB9O1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSZWFjdENhcmRGbGlwIGZyb20gXCJyZWFjdC1jYXJkLWZsaXBcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCBMb2dpbiBmcm9tIFwiLi4vY29tcG9uZW50cy9hdXRoL0xvZ2luXCI7XHJcbmltcG9ydCBSZWdpc3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9hdXRoL1JlZ2lzdGVyXCI7XHJcbmltcG9ydCB7IGxvZ19pbiB9IGZyb20gXCIuLi9yZWR1eC9hY3Rpb25zL3VzZXJBY3Rpb25zXCI7XHJcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tIFwiLi4vaG9va3MvdXNlckhvb2tzXCI7XHJcblxyXG5jb25zdCBhdXRoID0gKHsgbG9nX2luIH0pID0+IHtcclxuICBjb25zdCBbaXNGbGlwcGVkLCBzZXRJc0ZsaXBwZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjb25maXJtUGFzc3dvcmQsIHNldENvbmZpcm1QYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBhdXRoID0gdXNlQXV0aCgpO1xyXG4gIGNvbnN0IFJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRJc0ZsaXBwZWQoIWlzRmxpcHBlZCk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChhdXRoLnVzZXIpIHtcclxuICAgICAgUm91dGVyLmJhY2soKTtcclxuICAgIH1cclxuICB9LCBbYXV0aC51c2VyXSk7XHJcblxyXG4gIGNvbnN0IHNpZ25pbiA9ICgpID0+IGF1dGguc2lnbmluKGVtYWlsLCBwYXNzd29yZCk7XHJcbiAgY29uc3Qgc2lnbnVwID0gKCkgPT4gYXV0aC5zaWdudXAoZW1haWwsIHBhc3N3b3JkLCB1c2VybmFtZSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImF1dGhlbnRpY2F0aW9uXCI+XHJcbiAgICAgIHshYXV0aC5pc0xvYWRpbmcgJiYgIWF1dGgudXNlciA/IChcclxuICAgICAgICA8UmVhY3RDYXJkRmxpcCBpc0ZsaXBwZWQ9e2lzRmxpcHBlZH0gZmxpcERpcmVjdGlvbj1cImhvcml6b250YWxcIj5cclxuICAgICAgICAgIDxMb2dpblxyXG4gICAgICAgICAgICBzaWduaW49e3NpZ25pbn1cclxuICAgICAgICAgICAgc2V0UGFzc3dvcmQ9e3NldFBhc3N3b3JkfVxyXG4gICAgICAgICAgICBzZXRFbWFpbD17c2V0RW1haWx9XHJcbiAgICAgICAgICAgIGVtYWlsPXtlbWFpbH1cclxuICAgICAgICAgICAgcGFzc3dvcmQ9e3Bhc3N3b3JkfVxyXG4gICAgICAgICAgICBoYW5kbGVDbGljaz17aGFuZGxlQ2xpY2t9XHJcbiAgICAgICAgICAgIGF1dGg9e2F1dGh9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPFJlZ2lzdGVyXHJcbiAgICAgICAgICAgIGF1dGg9e2F1dGh9XHJcbiAgICAgICAgICAgIHNldFBhc3N3b3JkPXtzZXRQYXNzd29yZH1cclxuICAgICAgICAgICAgc2V0RW1haWw9e3NldEVtYWlsfVxyXG4gICAgICAgICAgICBzaWdudXA9e3NpZ251cH1cclxuICAgICAgICAgICAgZW1haWw9e2VtYWlsfVxyXG4gICAgICAgICAgICBwYXNzd29yZD17cGFzc3dvcmR9XHJcbiAgICAgICAgICAgIHVzZXJuYW1lPXt1c2VybmFtZX1cclxuICAgICAgICAgICAgc2V0VXNlcm5hbWU9e3NldFVzZXJuYW1lfVxyXG4gICAgICAgICAgICBjb25maXJtUGFzc3dvcmQ9e2NvbmZpcm1QYXNzd29yZH1cclxuICAgICAgICAgICAgc2V0Q29uZmlybVBhc3N3b3JkPXtzZXRDb25maXJtUGFzc3dvcmR9XHJcbiAgICAgICAgICAgIGhhbmRsZUNsaWNrPXtoYW5kbGVDbGlja31cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9SZWFjdENhcmRGbGlwPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGVyLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkZXJcIj5cclxuICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHt9KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7IGxvZ19pbiB9KShhdXRoKTtcclxuIiwiaW1wb3J0IHsgZGIsIGF1dGgsIHN0b3JhZ2UgfSBmcm9tIFwiLi4vZmJDb25maWdcIjtcclxuaW1wb3J0IHsgdHlwZXMgfSBmcm9tIFwiLi4vLi4vdXRpbHMvY29uc3RhbnRzXCI7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcbmltcG9ydCB7IG1lc3NhZ2UgfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ19pbiA9IChlbWFpbCwgcGFzc3dvcmQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGVtYWlsLCBwYXNzd29yZCk7XHJcbiAgYXV0aC5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFByb2ZpbGUgPSAoaWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKVxyXG4gICAgLmRvYyhpZCA/IGlkIDogYXV0aC5jdXJyZW50VXNlci51aWQpXHJcbiAgICAub25TbmFwc2hvdCgoZG9jKSA9PiB7XHJcbiAgICAgIHJldHVybiBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogdHlwZXMuR0VUX1BST0ZJTEUsXHJcbiAgICAgICAgcGF5bG9hZDogeyBpZDogZG9jLmlkLCAuLi5kb2MuZGF0YSgpIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0RmF2b3JpdGVBdXRob3JzID0gKGlkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBsZXQgYWRkZWRPbjtcclxuICBjb25zdCB1c2VySWQgPSBpZCA/IGlkIDogYXV0aC5jdXJyZW50VXNlci51aWQ7XHJcbiAgZGIuY29sbGVjdGlvbihcInVzZXJzTGlrZXNcIilcclxuICAgIC53aGVyZShcInNlbmRlcklkXCIsIFwiPT1cIiwgdXNlcklkKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigoZG9jcykgPT4ge1xyXG4gICAgICBsZXQgZmF2QXJyID0gW107XHJcbiAgICAgIGRvY3MuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICAgICAgYWRkZWRPbiA9IGRvYy5kYXRhKCkuY3JlYXRlZEF0O1xyXG4gICAgICAgIGZhdkFyciA9IFsuLi5mYXZBcnIsIGRvYy5kYXRhKCkucmVjaXBpZW50XTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBmYXZBcnI7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKHVzZXJzKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHVzZXJzLm1hcCgodXNlcikgPT5cclxuICAgICAgICBkYi5jb2xsZWN0aW9uKFwidXNlcnNcIikuZG9jKHVzZXIpLmdldCgpXHJcbiAgICAgICk7XHJcbiAgICAgIFByb21pc2UuYWxsKHJlc3VsdCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgbGV0IGZhdlVzZXJzID0gW107XHJcbiAgICAgICAgcmVzLmZvckVhY2goXHJcbiAgICAgICAgICAoZG9jKSA9PlxyXG4gICAgICAgICAgICAoZmF2VXNlcnMgPSBbLi4uZmF2VXNlcnMsIHsgYWRkZWRPbiwgaWQ6IGRvYy5pZCwgLi4uZG9jLmRhdGEoKSB9XSlcclxuICAgICAgICApO1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IHR5cGVzLkdFVF9GQVZPUklURV9BVVRIT1JTLFxyXG4gICAgICAgICAgcGF5bG9hZDogZmF2VXNlcnMsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Rm9sbG93ZXJzID0gKGlkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBsZXQgYWRkZWRPbjtcclxuICBjb25zdCB1c2VySWQgPSBpZCA/IGlkIDogYXV0aC5jdXJyZW50VXNlci51aWQ7XHJcbiAgZGIuY29sbGVjdGlvbihcInVzZXJzTGlrZXNcIilcclxuICAgIC53aGVyZShcInJlY2lwaWVudFwiLCBcIj09XCIsIHVzZXJJZClcclxuICAgIC5nZXQoKVxyXG4gICAgLnRoZW4oKGRvY3MpID0+IHtcclxuICAgICAgbGV0IGZhdkFyciA9IFtdO1xyXG4gICAgICBkb2NzLmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgICAgIGFkZGVkT24gPSBkb2MuZGF0YSgpLmNyZWF0ZWRBdDtcclxuICAgICAgICBmYXZBcnIgPSBbLi4uZmF2QXJyLCBkb2MuZGF0YSgpLnNlbmRlcklkXTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBmYXZBcnI7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKHVzZXJzKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHVzZXJzLm1hcCgodXNlcikgPT5cclxuICAgICAgICBkYi5jb2xsZWN0aW9uKFwidXNlcnNcIikuZG9jKHVzZXIpLmdldCgpXHJcbiAgICAgICk7XHJcbiAgICAgIFByb21pc2UuYWxsKHJlc3VsdCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgbGV0IGZhdlVzZXJzID0gW107XHJcbiAgICAgICAgcmVzLmZvckVhY2goXHJcbiAgICAgICAgICAoZG9jKSA9PlxyXG4gICAgICAgICAgICAoZmF2VXNlcnMgPSBbLi4uZmF2VXNlcnMsIHsgYWRkZWRPbiwgaWQ6IGRvYy5pZCwgLi4uZG9jLmRhdGEoKSB9XSlcclxuICAgICAgICApO1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IHR5cGVzLkdFVF9GT0xMT1dFUlMsXHJcbiAgICAgICAgICBwYXlsb2FkOiBmYXZVc2VycyxcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRJc0ZvbGxvd2luZyA9ICh1c2VySWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGlmIChhdXRoLmN1cnJlbnRVc2VyKSB7XHJcbiAgICBkYi5jb2xsZWN0aW9uKFwidXNlcnNMaWtlc1wiKVxyXG4gICAgICAud2hlcmUoXCJyZWNpcGllbnRcIiwgXCI9PVwiLCB1c2VySWQpXHJcbiAgICAgIC53aGVyZShcInNlbmRlcklkXCIsIFwiPT1cIiwgYXV0aC5jdXJyZW50VXNlci51aWQpXHJcbiAgICAgIC5vblNuYXBzaG90KChzbmFwc2hvdCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFuc3dlciA9IHNuYXBzaG90LmRvY3MubGVuZ3RoID4gMCA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICByZXR1cm4gZGlzcGF0Y2goeyB0eXBlOiB0eXBlcy5JU19GT0xMT1dJTkcsIHBheWxvYWQ6IGFuc3dlciB9KTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZvbGxvd1VzZXIgPSAoaWQsIGlzRmF2b3JpdGUsIG5ld0ZvbGxvd2VyKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBpZiAoaXNGYXZvcml0ZSkgcmV0dXJuIG1lc3NhZ2Uud2FybmluZyhcIllvdSBhcmUgYWxyZWFkeSBmb2xsb3dpbmcgdGhpcyB1c2VyXCIpO1xyXG4gIGlmICghYXV0aC5jdXJyZW50VXNlcilcclxuICAgIHJldHVybiBtZXNzYWdlLmVycm9yKFwiWW91IG5lZWQgdG8gYmUgbG9nZ2VkIGluIHRvIGZvbGxvdyB1c2Vyc1wiKTtcclxuICBpZiAoIWF1dGguY3VycmVudFVzZXIuZW1haWxWZXJpZmllZClcclxuICAgIHJldHVybiBtZXNzYWdlLmVycm9yKFwiWW91IG5lZWQgdG8gdmVyaWZ5IHlvdXIgZW1haWwgZmlyc3RcIik7XHJcblxyXG4gIGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc0xpa2VzXCIpXHJcbiAgICAuYWRkKHtcclxuICAgICAgc2VuZGVyOiBuZXdGb2xsb3dlci51c2VybmFtZSxcclxuICAgICAgc2VuZGVySWQ6IG5ld0ZvbGxvd2VyLnVpZCxcclxuICAgICAgcmVjaXBpZW50OiBpZCxcclxuICAgICAgY3JlYXRlZEF0OiBmaXJlYmFzZS5maXJlc3RvcmUuRmllbGRWYWx1ZS5zZXJ2ZXJUaW1lc3RhbXAoKSxcclxuICAgIH0pXHJcbiAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgIHJldHVybiBkYlxyXG4gICAgICAgIC5jb2xsZWN0aW9uKFwibm90aWZpY2F0aW9uc1wiKVxyXG4gICAgICAgIC5kb2MoYCR7YXV0aC5jdXJyZW50VXNlci51aWR9JHtpZH1gKVxyXG4gICAgICAgIC5zZXQoe1xyXG4gICAgICAgICAgY3JlYXRlZEF0OiBmaXJlYmFzZS5maXJlc3RvcmUuRmllbGRWYWx1ZS5zZXJ2ZXJUaW1lc3RhbXAoKSxcclxuICAgICAgICAgIHJlY2lwaWVudDogaWQsXHJcbiAgICAgICAgICBzZW5kZXI6IG5ld0ZvbGxvd2VyLnVpZCxcclxuICAgICAgICAgIHJlYWQ6IGZhbHNlLFxyXG4gICAgICAgICAgdHlwZTogXCJmb2xsb3dcIixcclxuICAgICAgICAgIG1lc3NhZ2U6IGAke25ld0ZvbGxvd2VyLnVzZXJuYW1lfSBzdGFydGVkIGZvbGxvd2luZyB5b3VgLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSlcclxuICAgIC50aGVuKCgpID0+IG1lc3NhZ2Uuc3VjY2VzcyhcIllvdSBhcmUgbm93IGZvbGxvd2luZyB0aGlzIHVzZXJcIikpXHJcbiAgICAuY2F0Y2goKGVycikgPT4gbWVzc2FnZS5lcnJvcihcIlRoZXJlIGhhcyBiZWVuIGEgcHJvYmxlbVwiKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdW5mb2xsb3dVc2VyID0gKGlkLCBpc0Zhdm9yaXRlKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBpZiAoIWlzRmF2b3JpdGUpXHJcbiAgICByZXR1cm4gbWVzc2FnZS53YXJuaW5nKFwiWW91IGFyZSBub3QgZm9sbG93aW5nIHRoaXMgdXNlciB5ZXRcIik7XHJcblxyXG4gIGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc0xpa2VzXCIpXHJcbiAgICAud2hlcmUoXCJyZWNpcGllbnRcIiwgXCI9PVwiLCBpZClcclxuICAgIC53aGVyZShcInNlbmRlcklkXCIsIFwiPT1cIiwgYXV0aC5jdXJyZW50VXNlci51aWQpXHJcbiAgICAuZ2V0KClcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiBkYi5jb2xsZWN0aW9uKFwidXNlcnNMaWtlc1wiKS5kb2MoZGF0YS5kb2NzWzBdLmlkKS5kZWxldGUoKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoKSA9PiBtZXNzYWdlLnN1Y2Nlc3MoXCJVc2VyIHN1Y2Nlc3NmdWxseSB1bmZvbGxvd2VkXCIpKVxyXG4gICAgLmNhdGNoKChlcnIpID0+IG1lc3NhZ2UuZXJyb3IoXCJUaGVyZSBoYXMgYmVlbiBhIHByb2JsZW1cIikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNoYW5nZVByb2ZpbGUgPSAoZGF0YSwgc2V0T3BlbikgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgY29uc3QgeyBuZXdQYXNzd29yZCwgYWN0dWFsUGFzc3dvcmQsIC4uLm5ld0luZm8gfSA9IGRhdGE7XHJcbiAgY29uc3QgaW1hZ2VOYW1lID0gYCR7YXV0aC5jdXJyZW50VXNlci51aWR9XyR7bmV3SW5mby51c2VybmFtZX1gO1xyXG5cclxuICBpZiAobmV3UGFzc3dvcmQpIHtcclxuICAgIGF1dGguY3VycmVudFVzZXJcclxuICAgICAgLnJlYXV0aGVudGljYXRlV2l0aENyZWRlbnRpYWwoXHJcbiAgICAgICAgZmlyZWJhc2UuYXV0aC5FbWFpbEF1dGhQcm92aWRlci5jcmVkZW50aWFsKFxyXG4gICAgICAgICAgYXV0aC5jdXJyZW50VXNlci5lbWFpbCxcclxuICAgICAgICAgIGFjdHVhbFBhc3N3b3JkXHJcbiAgICAgICAgKVxyXG4gICAgICApXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICByZXR1cm4gYXV0aC5jdXJyZW50VXNlci51cGRhdGVQYXNzd29yZChuZXdQYXNzd29yZCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKGFzeW5jICgpID0+IHtcclxuICAgICAgICBpZiAodHlwZW9mIG5ld0luZm8uaW1hZ2UgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgIHN0b3JhZ2VcclxuICAgICAgICAgICAgLnJlZihgJHthdXRoLmN1cnJlbnRVc2VyLnVpZH0vJHtpbWFnZU5hbWV9YClcclxuICAgICAgICAgICAgLnB1dChuZXdJbmZvLmltYWdlKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHN0b3JhZ2VcclxuICAgICAgICAgICAgICAgIC5yZWYoYCR7YXV0aC5jdXJyZW50VXNlci51aWR9LyR7aW1hZ2VOYW1lfWApXHJcbiAgICAgICAgICAgICAgICAuZ2V0RG93bmxvYWRVUkwoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oYXN5bmMgKHVybCkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiBkYlxyXG4gICAgICAgICAgICAgICAgLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKVxyXG4gICAgICAgICAgICAgICAgLmRvYyhhdXRoLmN1cnJlbnRVc2VyLnVpZClcclxuICAgICAgICAgICAgICAgIC51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAuLi5uZXdJbmZvLFxyXG4gICAgICAgICAgICAgICAgICBpbWFnZTogdXJsLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhcIlByb2ZpbGUgdXBkYXRlZCBzdWNjZXNzZnVsbHlcIik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiBkYlxyXG4gICAgICAgICAgICAuY29sbGVjdGlvbihcInVzZXJzXCIpXHJcbiAgICAgICAgICAgIC5kb2MoYXV0aC5jdXJyZW50VXNlci51aWQpXHJcbiAgICAgICAgICAgIC51cGRhdGUoe1xyXG4gICAgICAgICAgICAgIC4uLm5ld0luZm8sXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICBzZXRPcGVuKGZhbHNlKTtcclxuICAgICAgICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoXCJQcm9maWxlIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5XCIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiBtZXNzYWdlLmVycm9yKGVyci5tZXNzYWdlKSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGlmICh0eXBlb2YgbmV3SW5mby5pbWFnZSA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICBzdG9yYWdlXHJcbiAgICAgICAgLnJlZihgJHthdXRoLmN1cnJlbnRVc2VyLnVpZH0vJHtpbWFnZU5hbWV9YClcclxuICAgICAgICAucHV0KG5ld0luZm8uaW1hZ2UpXHJcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHN0b3JhZ2VcclxuICAgICAgICAgICAgLnJlZihgJHthdXRoLmN1cnJlbnRVc2VyLnVpZH0vJHtpbWFnZU5hbWV9YClcclxuICAgICAgICAgICAgLmdldERvd25sb2FkVVJMKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihhc3luYyAodXJsKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gZGJcclxuICAgICAgICAgICAgLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKVxyXG4gICAgICAgICAgICAuZG9jKGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gICAgICAgICAgICAudXBkYXRlKHtcclxuICAgICAgICAgICAgICAuLi5uZXdJbmZvLFxyXG4gICAgICAgICAgICAgIGltYWdlOiB1cmwsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICBzZXRPcGVuKGZhbHNlKTtcclxuICAgICAgICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoXCJQcm9maWxlIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5XCIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKVxyXG4gICAgICAgIC5kb2MoYXV0aC5jdXJyZW50VXNlci51aWQpXHJcbiAgICAgICAgLnVwZGF0ZSh7XHJcbiAgICAgICAgICAuLi5uZXdJbmZvLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoXCJQcm9maWxlIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5XCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRVc2Vyc0Zyb21TZWFyY2ggPSAoc2VhcmNoKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBsZXQgcmVzdWx0ID0gW107XHJcbiAgZGIuY29sbGVjdGlvbihcInVzZXJzXCIpXHJcbiAgICAuZ2V0KClcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIGRhdGEuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdXNlcm5hbWUgPSBkb2MuZGF0YSgpLnVzZXJuYW1lLnRvTG93ZXJDYXNlKCkuc3BsaXQoXCIgXCIpO1xyXG4gICAgICAgIGNvbnN0IHNlYXJjaFRlcm0gPSBzZWFyY2guc3BsaXQoXCItXCIpO1xyXG4gICAgICAgIGNvbnN0IGlzSW5jbHVkZWQgPSBzZWFyY2hUZXJtLmV2ZXJ5KCh3b3JkKSA9PiB1c2VybmFtZS5pbmNsdWRlcyh3b3JkKSk7XHJcbiAgICAgICAgY29uc3Qgb3JJbmNsdWRlZCA9IHNlYXJjaFRlcm0uc29tZShcclxuICAgICAgICAgICh3b3JkKSA9PiBkb2MuZGF0YSgpLnVzZXJuYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih3b3JkKSAhPT0gLTFcclxuICAgICAgICApO1xyXG4gICAgICAgIGlmIChpc0luY2x1ZGVkIHx8IG9ySW5jbHVkZWQpIHtcclxuICAgICAgICAgIHJlc3VsdC5wdXNoKHsgLi4uZG9jLmRhdGEoKSwgaWQ6IGRvYy5pZCB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IHR5cGVzLkdFVF9VU0VSU19GUk9NX1NFQVJDSCxcclxuICAgICAgICBwYXlsb2FkOiByZXN1bHQsXHJcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcbiIsImltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcbmltcG9ydCBcImZpcmViYXNlL2F1dGhcIjtcclxuaW1wb3J0IFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XHJcbmltcG9ydCBcImZpcmViYXNlL3N0b3JhZ2VcIjtcclxuXHJcbmNvbnN0IHByb2RDb25maWcgPSB7XHJcbiAgYXBpS2V5OiBwcm9jZXNzLmVudi5GSVJFQkFTRV9BUElfS0VZLFxyXG4gIGF1dGhEb21haW46IHByb2Nlc3MuZW52LkZJUkVCQVNFX0FVVEhfRE9NQUlOLFxyXG4gIGRhdGFiYXNlVVJMOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9EQVRBQkFTRV9VUkwsXHJcbiAgcHJvamVjdElkOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9QUk9KRUNUX0lELFxyXG4gIHN0b3JhZ2VCdWNrZXQ6IHByb2Nlc3MuZW52LkZJUkVCQVNFX1NUT1JBR0VfQlVDS0VULFxyXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9NRVNTQUdJTkdfU0VOREVSX0lELFxyXG4gIGFwcElkOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9BUFBfSUQsXHJcbn07XHJcblxyXG5jb25zdCBkZXZDb25maWcgPSB7XHJcbiAgYXBpS2V5OiBwcm9jZXNzLmVudi5GSVJFQkFTRV9BUElfS0VZLFxyXG4gIGF1dGhEb21haW46IHByb2Nlc3MuZW52LkZJUkVCQVNFX0FVVEhfRE9NQUlOLFxyXG4gIGRhdGFiYXNlVVJMOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9EQVRBQkFTRV9VUkwsXHJcbiAgcHJvamVjdElkOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9QUk9KRUNUX0lELFxyXG4gIHN0b3JhZ2VCdWNrZXQ6IHByb2Nlc3MuZW52LkZJUkVCQVNFX1NUT1JBR0VfQlVDS0VULFxyXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9NRVNTQUdJTkdfU0VOREVSX0lELFxyXG4gIGFwcElkOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9BUFBfSUQsXHJcbn07XHJcblxyXG5jb25zdCBjb25maWcgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBwcm9kQ29uZmlnIDogZGV2Q29uZmlnO1xyXG5cclxuaWYgKCFmaXJlYmFzZS5hcHBzLmxlbmd0aCkge1xyXG4gIGZpcmViYXNlLmluaXRpYWxpemVBcHAoY29uZmlnKTtcclxufVxyXG5cclxuY29uc3QgZGIgPSBmaXJlYmFzZS5maXJlc3RvcmUoKTtcclxuY29uc3QgYXV0aCA9IGZpcmViYXNlLmF1dGgoKTtcclxuY29uc3Qgc3RvcmFnZSA9IGZpcmViYXNlLnN0b3JhZ2UoKTtcclxuXHJcbmV4cG9ydCB7IGRiLCBhdXRoLCBzdG9yYWdlIH07XHJcbmV4cG9ydCBkZWZhdWx0IGNvbmZpZztcclxuIiwiZXhwb3J0IGNvbnN0IENBVEVHT1JJRVMgPSBbXHJcbiAgeyBuYW1lOiBcIkRyYW1hXCIsIHZhbHVlOiBcImRyYW1hXCIgfSxcclxuICB7IG5hbWU6IFwiQ29tZWR5XCIsIHZhbHVlOiBcImNvbWVkeVwiIH0sXHJcbiAgeyBuYW1lOiBcIkhvcnJvclwiLCB2YWx1ZTogXCJob3Jyb3JcIiB9LFxyXG4gIHsgbmFtZTogXCJSb21hbmNlXCIsIHZhbHVlOiBcInJvbWFuY2VcIiB9LFxyXG4gIHsgbmFtZTogXCJTY2ktZmlcIiwgdmFsdWU6IFwic2NpLWZpXCIgfSxcclxuICB7IG5hbWU6IFwiRmFudGFzeVwiLCB2YWx1ZTogXCJmYW50YXN5XCIgfSxcclxuICB7IG5hbWU6IFwiSHVtb3JcIiwgdmFsdWU6IFwiaHVtb3JcIiB9LFxyXG4gIHsgbmFtZTogXCJBY3Rpb25cIiwgdmFsdWU6IFwiYWN0aW9uXCIgfSxcclxuICB7IG5hbWU6IFwiVGhyaWxsZXJcIiwgdmFsdWU6IFwidGhyaWxsZXJcIiB9LFxyXG4gIHsgbmFtZTogXCJTdXBlcm5hdHVyYWxcIiwgdmFsdWU6IFwic3VwZXJuYXR1cmFsXCIgfSxcclxuICB7IG5hbWU6IFwiQWR2ZW50dXJlXCIsIHZhbHVlOiBcImFkdmVudHVyZVwiIH0sXHJcbiAgeyBuYW1lOiBcIk15c3RlcnlcIiwgdmFsdWU6IFwibXlzdGVyeVwiIH0sXHJcbiAgeyBuYW1lOiBcIldlc3Rlcm5cIiwgdmFsdWU6IFwid2VzdGVyblwiIH0sXHJcbiAgeyBuYW1lOiBcIkhpc3RvcnlcIiwgdmFsdWU6IFwiaGlzdG9yeVwiIH0sXHJcbiAgeyBuYW1lOiBcIkNyaW1lXCIsIHZhbHVlOiBcImNyaW1lXCIgfSxcclxuICB7IG5hbWU6IFwiRmFuZmljdGlvblwiLCB2YWx1ZTogXCJmYW5maWN0aW9uXCIgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBDT1BZUklHSFRTID0gW1xyXG4gIHsgbmFtZTogXCJQdWJsaWMgRG9tYWluXCIsIHZhbHVlOiBcInB1YmxpYyBkb21haW5cIiB9LFxyXG4gIHsgbmFtZTogXCJBbGwgUmlnaHRzIFJlc2VydmVkXCIsIHZhbHVlOiBcImFsbCByaWdodHMgcmVzZXJ2ZWRcIiB9LFxyXG4gIHsgbmFtZTogXCJDcmVhdGl2ZSBDb21tb25zXCIsIHZhbHVlOiBcImNyZWF0aXZlIGNvbW1vbnNcIiB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IExBTkdVQUdFUyA9IFtcclxuICB7IG5hbWU6IFwiQWZhclwiLCB2YWx1ZTogXCJhYVwiIH0sXHJcbiAgeyBuYW1lOiBcIkFia2hhemlhblwiLCB2YWx1ZTogXCJhYlwiIH0sXHJcbiAgeyBuYW1lOiBcIkF2ZXN0YW5cIiwgdmFsdWU6IFwiYWVcIiB9LFxyXG4gIHsgbmFtZTogXCJBZnJpa2FhbnNcIiwgdmFsdWU6IFwiYWZcIiB9LFxyXG4gIHsgbmFtZTogXCJBa2FuXCIsIHZhbHVlOiBcImFrXCIgfSxcclxuICB7IG5hbWU6IFwiQW1oYXJpY1wiLCB2YWx1ZTogXCJhbVwiIH0sXHJcbiAgeyBuYW1lOiBcIkFyYWdvbmVzZVwiLCB2YWx1ZTogXCJhblwiIH0sXHJcbiAgeyBuYW1lOiBcIkFyYWJpY1wiLCB2YWx1ZTogXCJhclwiIH0sXHJcbiAgeyBuYW1lOiBcIkFzc2FtZXNlXCIsIHZhbHVlOiBcImFzXCIgfSxcclxuICB7IG5hbWU6IFwiQXZhcmljXCIsIHZhbHVlOiBcImF2XCIgfSxcclxuICB7IG5hbWU6IFwiQXltYXJhXCIsIHZhbHVlOiBcImF5XCIgfSxcclxuICB7IG5hbWU6IFwiQXplcmJhaWphbmlcIiwgdmFsdWU6IFwiYXpcIiB9LFxyXG4gIHsgbmFtZTogXCJCYXNoa2lyXCIsIHZhbHVlOiBcImJhXCIgfSxcclxuICB7IG5hbWU6IFwiQmVsYXJ1c2lhblwiLCB2YWx1ZTogXCJiZVwiIH0sXHJcbiAgeyBuYW1lOiBcIkJ1bGdhcmlhblwiLCB2YWx1ZTogXCJiZ1wiIH0sXHJcbiAgeyBuYW1lOiBcIkJpaGFyaVwiLCB2YWx1ZTogXCJiaFwiIH0sXHJcbiAgeyBuYW1lOiBcIkJpc2xhbWFcIiwgdmFsdWU6IFwiYmlcIiB9LFxyXG4gIHsgbmFtZTogXCJCYW1iYXJhXCIsIHZhbHVlOiBcImJtXCIgfSxcclxuICB7IG5hbWU6IFwiQmVuZ2FsaVwiLCB2YWx1ZTogXCJiblwiIH0sXHJcbiAgeyBuYW1lOiBcIlRpYmV0YW5cIiwgdmFsdWU6IFwiYm9cIiB9LFxyXG4gIHsgbmFtZTogXCJCcmV0b25cIiwgdmFsdWU6IFwiYnJcIiB9LFxyXG4gIHsgbmFtZTogXCJCb3NuaWFuXCIsIHZhbHVlOiBcImJzXCIgfSxcclxuICB7IG5hbWU6IFwiQ2F0YWxhblwiLCB2YWx1ZTogXCJjYVwiIH0sXHJcbiAgeyBuYW1lOiBcIkNoZWNoZW5cIiwgdmFsdWU6IFwiY2VcIiB9LFxyXG4gIHsgbmFtZTogXCJDaGFtb3Jyb1wiLCB2YWx1ZTogXCJjaFwiIH0sXHJcbiAgeyBuYW1lOiBcIkNvcnNpY2FuXCIsIHZhbHVlOiBcImNvXCIgfSxcclxuICB7IG5hbWU6IFwiQ3JlZVwiLCB2YWx1ZTogXCJjclwiIH0sXHJcbiAgeyBuYW1lOiBcIkN6ZWNoXCIsIHZhbHVlOiBcImNzXCIgfSxcclxuICB7IG5hbWU6IFwiT2xkIENodXJjaCBTbGF2b25pY1wiLCB2YWx1ZTogXCJjdVwiIH0sXHJcbiAgeyBuYW1lOiBcIkNodXZhc2hcIiwgdmFsdWU6IFwiY3ZcIiB9LFxyXG4gIHsgbmFtZTogXCJXZWxzaFwiLCB2YWx1ZTogXCJjeVwiIH0sXHJcbiAgeyBuYW1lOiBcIkRhbmlzaFwiLCB2YWx1ZTogXCJkYVwiIH0sXHJcbiAgeyBuYW1lOiBcIkdlcm1hblwiLCB2YWx1ZTogXCJkZVwiIH0sXHJcbiAgeyBuYW1lOiBcIkRpdmVoaVwiLCB2YWx1ZTogXCJkdlwiIH0sXHJcbiAgeyBuYW1lOiBcIkR6b25na2hhXHRcIiwgdmFsdWU6IFwiZHpcIiB9LFxyXG4gIHsgbmFtZTogXCJFd2VcIiwgdmFsdWU6IFwiZWVcIiB9LFxyXG4gIHsgbmFtZTogXCJHcmVla1wiLCB2YWx1ZTogXCJlbFwiIH0sXHJcbiAgeyBuYW1lOiBcIkVuZ2xpc2hcIiwgdmFsdWU6IFwiZW5cIiB9LFxyXG4gIHsgbmFtZTogXCJFc3BlcmFudG9cIiwgdmFsdWU6IFwiZW9cIiB9LFxyXG4gIHsgbmFtZTogXCJTcGFuaXNoXCIsIHZhbHVlOiBcImVzXCIgfSxcclxuICB7IG5hbWU6IFwiRXN0b25pYW5cIiwgdmFsdWU6IFwiZXRcIiB9LFxyXG4gIHsgbmFtZTogXCJCYXNxdWVcIiwgdmFsdWU6IFwiZXVcIiB9LFxyXG4gIHsgbmFtZTogXCJQZXJzaWFuXCIsIHZhbHVlOiBcImZhXCIgfSxcclxuICB7IG5hbWU6IFwiRnVsYWhcIiwgdmFsdWU6IFwiZmZcIiB9LFxyXG4gIHsgbmFtZTogXCJGaW5uaXNoXCIsIHZhbHVlOiBcImZpXCIgfSxcclxuICB7IG5hbWU6IFwiRmlqaWFuXCIsIHZhbHVlOiBcImZqXCIgfSxcclxuICB7IG5hbWU6IFwiRmFyb2VzZVwiLCB2YWx1ZTogXCJmb1wiIH0sXHJcbiAgeyBuYW1lOiBcIkZyZW5jaFwiLCB2YWx1ZTogXCJmclwiIH0sXHJcbiAgeyBuYW1lOiBcIldlc3Rlcm4gRnJpc2lhblwiLCB2YWx1ZTogXCJmeVwiIH0sXHJcbiAgeyBuYW1lOiBcIklyaXNoXCIsIHZhbHVlOiBcImdhXCIgfSxcclxuICB7IG5hbWU6IFwiU2NvdHRpc2ggR2FlbGljXCIsIHZhbHVlOiBcImdkXCIgfSxcclxuICB7IG5hbWU6IFwiR2FsaWNpYW5cIiwgdmFsdWU6IFwiZ2xcIiB9LFxyXG4gIHsgbmFtZTogXCJHdWFyYW5pXCIsIHZhbHVlOiBcImduXCIgfSxcclxuICB7IG5hbWU6IFwiR3VqYXJhdGlcIiwgdmFsdWU6IFwiZ3VcIiB9LFxyXG4gIHsgbmFtZTogXCJNYW54XCIsIHZhbHVlOiBcImd2XCIgfSxcclxuICB7IG5hbWU6IFwiSGF1c2FcIiwgdmFsdWU6IFwiaGFcIiB9LFxyXG4gIHsgbmFtZTogXCJIZWJyZXdcIiwgdmFsdWU6IFwiaGVcIiB9LFxyXG4gIHsgbmFtZTogXCJIaW5kaVwiLCB2YWx1ZTogXCJoaVwiIH0sXHJcbiAgeyBuYW1lOiBcIkhpcmkgTW90dVwiLCB2YWx1ZTogXCJob1wiIH0sXHJcbiAgeyBuYW1lOiBcIkNyb2F0aWFuXCIsIHZhbHVlOiBcImhyXCIgfSxcclxuICB7IG5hbWU6IFwiSGFpdGlhblwiLCB2YWx1ZTogXCJodFwiIH0sXHJcbiAgeyBuYW1lOiBcIkh1bmdhcmlhblwiLCB2YWx1ZTogXCJodVwiIH0sXHJcbiAgeyBuYW1lOiBcIkFybWVuaWFuXCIsIHZhbHVlOiBcImh5XCIgfSxcclxuICB7IG5hbWU6IFwiSGVyZXJvXCIsIHZhbHVlOiBcImh6XCIgfSxcclxuICB7IG5hbWU6IFwiSW50ZXJsaW5ndWFcIiwgdmFsdWU6IFwiaWFcIiB9LFxyXG4gIHsgbmFtZTogXCJJbmRvbmVzaWFuXCIsIHZhbHVlOiBcImlkXCIgfSxcclxuICB7IG5hbWU6IFwiSW50ZXJsaW5ndWVcIiwgdmFsdWU6IFwiaWVcIiB9LFxyXG4gIHsgbmFtZTogXCJJZ2JvXCIsIHZhbHVlOiBcImlnXCIgfSxcclxuICB7IG5hbWU6IFwiU2ljaHVhbiBZaVwiLCB2YWx1ZTogXCJpaVwiIH0sXHJcbiAgeyBuYW1lOiBcIkludXBpYXFcIiwgdmFsdWU6IFwiaWtcIiB9LFxyXG4gIHsgbmFtZTogXCJJZG9cIiwgdmFsdWU6IFwiaW9cIiB9LFxyXG4gIHsgbmFtZTogXCJJY2VsYW5kaWNcIiwgdmFsdWU6IFwiaXNcIiB9LFxyXG4gIHsgbmFtZTogXCJJdGFsaWFuXCIsIHZhbHVlOiBcIml0XCIgfSxcclxuICB7IG5hbWU6IFwiSW51a3RpdHV0XCIsIHZhbHVlOiBcIml1XCIgfSxcclxuICB7IG5hbWU6IFwiSmFwYW5lc2VcIiwgdmFsdWU6IFwiamFcIiB9LFxyXG4gIHsgbmFtZTogXCJKYXZhbmVzZVwiLCB2YWx1ZTogXCJqdlwiIH0sXHJcbiAgeyBuYW1lOiBcIkdlb3JnaWFuXCIsIHZhbHVlOiBcImthXCIgfSxcclxuICB7IG5hbWU6IFwiS29uZ29cIiwgdmFsdWU6IFwia2dcIiB9LFxyXG4gIHsgbmFtZTogXCJLaWt1eXVcIiwgdmFsdWU6IFwia2lcIiB9LFxyXG4gIHsgbmFtZTogXCJLd2FueWFtYVwiLCB2YWx1ZTogXCJralwiIH0sXHJcbiAgeyBuYW1lOiBcIkthemFraFwiLCB2YWx1ZTogXCJra1wiIH0sXHJcbiAgeyBuYW1lOiBcIkdyZWVubGFuZGljXCIsIHZhbHVlOiBcImtsXCIgfSxcclxuICB7IG5hbWU6IFwiS2htZXJcIiwgdmFsdWU6IFwia21cIiB9LFxyXG4gIHsgbmFtZTogXCJLYW5uYWRhXCIsIHZhbHVlOiBcImtuXCIgfSxcclxuICB7IG5hbWU6IFwiS29yZWFuXCIsIHZhbHVlOiBcImtvXCIgfSxcclxuICB7IG5hbWU6IFwiS2FudXJpXCIsIHZhbHVlOiBcImtyXCIgfSxcclxuICB7IG5hbWU6IFwiS2FzaG1pcmlcIiwgdmFsdWU6IFwia3NcIiB9LFxyXG4gIHsgbmFtZTogXCJLdXJkaXNoXCIsIHZhbHVlOiBcImt1XCIgfSxcclxuICB7IG5hbWU6IFwiS29taVwiLCB2YWx1ZTogXCJrdlwiIH0sXHJcbiAgeyBuYW1lOiBcIkNvcm5pc2hcIiwgdmFsdWU6IFwia3dcIiB9LFxyXG4gIHsgbmFtZTogXCJLaXJnaGl6XCIsIHZhbHVlOiBcImt5XCIgfSxcclxuICB7IG5hbWU6IFwiTGF0aW5cIiwgdmFsdWU6IFwibGFcIiB9LFxyXG4gIHsgbmFtZTogXCJMdXhlbWJvdXJnaXNoXCIsIHZhbHVlOiBcImxiXCIgfSxcclxuICB7IG5hbWU6IFwiR2FuZGFcIiwgdmFsdWU6IFwibGdcIiB9LFxyXG4gIHsgbmFtZTogXCJMaW1idXJnaXNoXCIsIHZhbHVlOiBcImxpXCIgfSxcclxuICB7IG5hbWU6IFwiTGluZ2FsYVwiLCB2YWx1ZTogXCJsblwiIH0sXHJcbiAgeyBuYW1lOiBcIkxhb1wiLCB2YWx1ZTogXCJsb1wiIH0sXHJcbiAgeyBuYW1lOiBcIkxpdGh1YW5pYW5cIiwgdmFsdWU6IFwibHRcIiB9LFxyXG4gIHsgbmFtZTogXCJMdWJhXCIsIHZhbHVlOiBcImx1XCIgfSxcclxuICB7IG5hbWU6IFwiTGF0dmlhblwiLCB2YWx1ZTogXCJsdlwiIH0sXHJcbiAgeyBuYW1lOiBcIk1hbGFnYXN5XCIsIHZhbHVlOiBcIm1nXCIgfSxcclxuICB7IG5hbWU6IFwiTWFyc2hhbGxlc2VcIiwgdmFsdWU6IFwibWhcIiB9LFxyXG4gIHsgbmFtZTogXCJNxIFvcmlcIiwgdmFsdWU6IFwibWlcIiB9LFxyXG4gIHsgbmFtZTogXCJNYWNlZG9uaWFuXCIsIHZhbHVlOiBcIm1rXCIgfSxcclxuICB7IG5hbWU6IFwiTWFsYXlhbGFtXCIsIHZhbHVlOiBcIm1sXCIgfSxcclxuICB7IG5hbWU6IFwiTW9uZ29saWFuXCIsIHZhbHVlOiBcIm1uXCIgfSxcclxuICB7IG5hbWU6IFwiTW9sZGF2aWFuXCIsIHZhbHVlOiBcIm1vXCIgfSxcclxuICB7IG5hbWU6IFwiTWFyYXRoaVwiLCB2YWx1ZTogXCJtclwiIH0sXHJcbiAgeyBuYW1lOiBcIk1hbGF5XCIsIHZhbHVlOiBcIm1zXCIgfSxcclxuICB7IG5hbWU6IFwiTWFsdGVzZVwiLCB2YWx1ZTogXCJtdFwiIH0sXHJcbiAgeyBuYW1lOiBcIkJ1cm1lc2VcIiwgdmFsdWU6IFwibXlcIiB9LFxyXG4gIHsgbmFtZTogXCJOYXVydVwiLCB2YWx1ZTogXCJuYVwiIH0sXHJcbiAgeyBuYW1lOiBcIk5vcndlZ2lhbiBCb2ttw6VsXCIsIHZhbHVlOiBcIm5iXCIgfSxcclxuICB7IG5hbWU6IFwiTm9ydGggTmRlYmVsZVwiLCB2YWx1ZTogXCJuZFwiIH0sXHJcbiAgeyBuYW1lOiBcIk5lcGFsaVwiLCB2YWx1ZTogXCJuZVwiIH0sXHJcbiAgeyBuYW1lOiBcIk5kb25nYVwiLCB2YWx1ZTogXCJuZ1wiIH0sXHJcbiAgeyBuYW1lOiBcIkR1dGNoXCIsIHZhbHVlOiBcIm5sXCIgfSxcclxuICB7IG5hbWU6IFwiTm9yd2VnaWFuIE55bm9yc2tcIiwgdmFsdWU6IFwibm5cIiB9LFxyXG4gIHsgbmFtZTogXCJOb3J3ZWdpYW5cIiwgdmFsdWU6IFwibm9cIiB9LFxyXG4gIHsgbmFtZTogXCJTb3V0aCBOZGViZWxlXCIsIHZhbHVlOiBcIm5yXCIgfSxcclxuICB7IG5hbWU6IFwiTmF2YWpvXCIsIHZhbHVlOiBcIm52XCIgfSxcclxuICB7IG5hbWU6IFwiQ2hpY2hld2FcIiwgdmFsdWU6IFwibnlcIiB9LFxyXG4gIHsgbmFtZTogXCJPY2NpdGFuXCIsIHZhbHVlOiBcIm9jXCIgfSxcclxuICB7IG5hbWU6IFwiT2ppYndhXCIsIHZhbHVlOiBcIm9qXCIgfSxcclxuICB7IG5hbWU6IFwiT3JvbW9cIiwgdmFsdWU6IFwib21cIiB9LFxyXG4gIHsgbmFtZTogXCJPcml5YVwiLCB2YWx1ZTogXCJvclwiIH0sXHJcbiAgeyBuYW1lOiBcIk9zc2V0aWFuXCIsIHZhbHVlOiBcIm9zXCIgfSxcclxuICB7IG5hbWU6IFwiUGFuamFiaVwiLCB2YWx1ZTogXCJwYVwiIH0sXHJcbiAgeyBuYW1lOiBcIlDEgWxpXCIsIHZhbHVlOiBcInBpXCIgfSxcclxuICB7IG5hbWU6IFwiUG9saXNoXCIsIHZhbHVlOiBcInBsXCIgfSxcclxuICB7IG5hbWU6IFwiUGFzaHRvXCIsIHZhbHVlOiBcInBzXCIgfSxcclxuICB7IG5hbWU6IFwiUG9ydHVndWVzZVwiLCB2YWx1ZTogXCJwdFwiIH0sXHJcbiAgeyBuYW1lOiBcIlF1ZWNodWFcIiwgdmFsdWU6IFwicXVcIiB9LFxyXG4gIHsgbmFtZTogXCJSZXVuaW9uZXNlXCIsIHZhbHVlOiBcInJjXCIgfSxcclxuICB7IG5hbWU6IFwiUm9tYW5zaFwiLCB2YWx1ZTogXCJybVwiIH0sXHJcbiAgeyBuYW1lOiBcIktpcnVuZGlcIiwgdmFsdWU6IFwicm5cIiB9LFxyXG4gIHsgbmFtZTogXCJSb21hbmlhblwiLCB2YWx1ZTogXCJyb1wiIH0sXHJcbiAgeyBuYW1lOiBcIlJ1c3NpYW5cIiwgdmFsdWU6IFwicnVcIiB9LFxyXG4gIHsgbmFtZTogXCJLaW55YXJ3YW5kYVwiLCB2YWx1ZTogXCJyd1wiIH0sXHJcbiAgeyBuYW1lOiBcIlNhbnNrcml0XCIsIHZhbHVlOiBcInNhXCIgfSxcclxuICB7IG5hbWU6IFwiU2FyZGluaWFuXCIsIHZhbHVlOiBcInNjXCIgfSxcclxuICB7IG5hbWU6IFwiU2luZGhpXCIsIHZhbHVlOiBcInNkXCIgfSxcclxuICB7IG5hbWU6IFwiTm9ydGhlcm4gU2FtaVwiLCB2YWx1ZTogXCJzZVwiIH0sXHJcbiAgeyBuYW1lOiBcIlNhbmdvXCIsIHZhbHVlOiBcInNnXCIgfSxcclxuICB7IG5hbWU6IFwiU2VyYm8tQ3JvYXRpYW5cIiwgdmFsdWU6IFwic2hcIiB9LFxyXG4gIHsgbmFtZTogXCJTaW5oYWxlc2VcIiwgdmFsdWU6IFwic2lcIiB9LFxyXG4gIHsgbmFtZTogXCJTbG92YWtcIiwgdmFsdWU6IFwic2tcIiB9LFxyXG4gIHsgbmFtZTogXCJTbG92ZW5pYW5cIiwgdmFsdWU6IFwic2xcIiB9LFxyXG4gIHsgbmFtZTogXCJTYW1vYW5cIiwgdmFsdWU6IFwic21cIiB9LFxyXG4gIHsgbmFtZTogXCJTaG9uYVwiLCB2YWx1ZTogXCJzblwiIH0sXHJcbiAgeyBuYW1lOiBcIlNvbWFsaVwiLCB2YWx1ZTogXCJzb1wiIH0sXHJcbiAgeyBuYW1lOiBcIkFsYmFuaWFuXCIsIHZhbHVlOiBcInNxXCIgfSxcclxuICB7IG5hbWU6IFwiU2VyYmlhblwiLCB2YWx1ZTogXCJzclwiIH0sXHJcbiAgeyBuYW1lOiBcIlN3YXRpXCIsIHZhbHVlOiBcInNzXCIgfSxcclxuICB7IG5hbWU6IFwiU290aG9cIiwgdmFsdWU6IFwic3RcIiB9LFxyXG4gIHsgbmFtZTogXCJTdW5kYW5lc2VcIiwgdmFsdWU6IFwic3VcIiB9LFxyXG4gIHsgbmFtZTogXCJTd2VkaXNoXCIsIHZhbHVlOiBcInN2XCIgfSxcclxuICB7IG5hbWU6IFwiU3dhaGlsaVwiLCB2YWx1ZTogXCJzd1wiIH0sXHJcbiAgeyBuYW1lOiBcIlRhbWlsXCIsIHZhbHVlOiBcInRhXCIgfSxcclxuICB7IG5hbWU6IFwiVGVsdWd1XCIsIHZhbHVlOiBcInRlXCIgfSxcclxuICB7IG5hbWU6IFwiVGFqaWtcIiwgdmFsdWU6IFwidGdcIiB9LFxyXG4gIHsgbmFtZTogXCJUaGFpXCIsIHZhbHVlOiBcInRoXCIgfSxcclxuICB7IG5hbWU6IFwiVGlncmlueWFcIiwgdmFsdWU6IFwidGlcIiB9LFxyXG4gIHsgbmFtZTogXCJUdXJrbWVuXCIsIHZhbHVlOiBcInRrXCIgfSxcclxuICB7IG5hbWU6IFwiVGFnYWxvZ1wiLCB2YWx1ZTogXCJ0bFwiIH0sXHJcbiAgeyBuYW1lOiBcIlRzd2FuYVwiLCB2YWx1ZTogXCJ0blwiIH0sXHJcbiAgeyBuYW1lOiBcIlRvbmdhXCIsIHZhbHVlOiBcInRvXCIgfSxcclxuICB7IG5hbWU6IFwiVHVya2lzaFwiLCB2YWx1ZTogXCJ0clwiIH0sXHJcbiAgeyBuYW1lOiBcIlRzb25nYVwiLCB2YWx1ZTogXCJ0c1wiIH0sXHJcbiAgeyBuYW1lOiBcIlRhdGFyXCIsIHZhbHVlOiBcInR0XCIgfSxcclxuICB7IG5hbWU6IFwiVHdpXCIsIHZhbHVlOiBcInR3XCIgfSxcclxuICB7IG5hbWU6IFwiVGFoaXRpYW5cIiwgdmFsdWU6IFwidHlcIiB9LFxyXG4gIHsgbmFtZTogXCJVaWdodXJcIiwgdmFsdWU6IFwidWdcIiB9LFxyXG4gIHsgbmFtZTogXCJVa3JhaW5pYW5cIiwgdmFsdWU6IFwidWtcIiB9LFxyXG4gIHsgbmFtZTogXCJVcmR1XCIsIHZhbHVlOiBcInVyXCIgfSxcclxuICB7IG5hbWU6IFwiVXpiZWtcIiwgdmFsdWU6IFwidXpcIiB9LFxyXG4gIHsgbmFtZTogXCJWZW5kYVwiLCB2YWx1ZTogXCJ2ZVwiIH0sXHJcbiAgeyBuYW1lOiBcIlZpw6p0IE5hbWVzZVwiLCB2YWx1ZTogXCJ2aVwiIH0sXHJcbiAgeyBuYW1lOiBcIlZvbGFww7xrXCIsIHZhbHVlOiBcInZvXCIgfSxcclxuICB7IG5hbWU6IFwiV2FsbG9vblwiLCB2YWx1ZTogXCJ3YVwiIH0sXHJcbiAgeyBuYW1lOiBcIldvbG9mXCIsIHZhbHVlOiBcIndvXCIgfSxcclxuICB7IG5hbWU6IFwiWGhvc2FcIiwgdmFsdWU6IFwieGhcIiB9LFxyXG4gIHsgbmFtZTogXCJZaWRkaXNoXCIsIHZhbHVlOiBcInlpXCIgfSxcclxuICB7IG5hbWU6IFwiWW9ydWJhXCIsIHZhbHVlOiBcInlvXCIgfSxcclxuICB7IG5hbWU6IFwiWmh1YW5nXCIsIHZhbHVlOiBcInphXCIgfSxcclxuICB7IG5hbWU6IFwiQ2hpbmVzZVwiLCB2YWx1ZTogXCJ6aFwiIH0sXHJcbiAgeyBuYW1lOiBcIlp1bHVcIiwgdmFsdWU6IFwienVcIiB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNUQVRVUyA9IFtcclxuICB7IG5hbWU6IFwiSW4gUHJvZ3Jlc3NcIiwgdmFsdWU6IFwiaW4gcHJvZ3Jlc3NcIiB9LFxyXG4gIHsgbmFtZTogXCJJbiBIaWF0dXNcIiwgdmFsdWU6IFwiaW4gaGlhdHVzXCIgfSxcclxuICB7IG5hbWU6IFwiQ29tcGxldGVkXCIsIHZhbHVlOiBcImNvbXBsZXRlZFwiIH0sXHJcbl07XHJcblxyXG4vLyBUWVBFU1xyXG5leHBvcnQgY29uc3QgdHlwZXMgPSB7XHJcbiAgR0VUX1BST0ZJTEU6IFwiR0VUX1BST0ZJTEVcIixcclxuICBMT0dJTjogXCJMT0dJTlwiLFxyXG4gIFJFR0lTVEVSOiBcIlJFR0lTVEVSXCIsXHJcbiAgR0VUX1NUT1JZOiBcIkdFVF9TVE9SWVwiLFxyXG4gIEdFVF9VU0VSX1NUT1JJRVM6IFwiR0VUX1VTRVJfU1RPUklFU1wiLFxyXG4gIEdFVF9IT01FX1NUT1JJRVM6IFwiR0VUX0hPTUVfU1RPUklFU1wiLFxyXG4gIEdFVF9VU0VSU19GUk9NX1NFQVJDSDogXCJHRVRfVVNFUlNfRlJPTV9TRUFSQ0hcIixcclxuICBHRVRfRkFWT1JJVEVfU1RPUklFUzogXCJHRVRfRkFWT1JJVEVfU1RPUklFU1wiLFxyXG4gIEFERF9TVE9SWTogXCJBRERfU1RPUllcIixcclxuICBFRElUX1NUT1JZOiBcIkVESVRfU1RPUllcIixcclxuICBERUxFVEVfU1RPUlk6IFwiREVMRVRFX1NUT1JZXCIsXHJcbiAgR0VUX1NUT1JJRVNfRlJPTV9TRUFSQ0g6IFwiR0VUX1NUT1JJRVNfRlJPTV9TRUFSQ0hcIixcclxuICBJU19TVE9SWV9GQVZPUklURTogXCJJU19TVE9SWV9GQVZPUklURVwiLFxyXG4gIElTX0NIQVJBQ1RFUl9GQVZPUklURTogXCJJU19DSEFSQUNURVJfRkFWT1JJVEVcIixcclxuICBJU19GT0xMT1dJTkc6IFwiSVNfRk9MTE9XSU5HXCIsXHJcbiAgR0VUX0NIQVBURVI6IFwiR0VUX0NIQVBURVJcIixcclxuICBBRERfQ0hBUFRFUjogXCJBRERfQ0hBUFRFUlwiLFxyXG4gIEVESVRfQ0hBUFRFUjogXCJFRElUX0NIQVBURVJcIixcclxuICBERUxFVEVfQ0hBUFRFUjogXCJERUxFVEVfQ0hBUFRFUlwiLFxyXG4gIEdFVF9DSEFQVEVSUzogXCJHRVRfQ0hBUFRFUlNcIixcclxuICBBRERfQ0hBUkFDVEVSOiBcIkFERF9DSEFSQUNURVJcIixcclxuICBHRVRfQ0hBUkFDVEVSOiBcIkdFVF9DSEFSQUNURVJcIixcclxuICBFRElUX0NIQVJBQ1RFUjogXCJFRElUX0NIQVJBQ1RFUlwiLFxyXG4gIERFTEVURV9DSEFSQUNURVI6IFwiREVMRVRFX0NIQVJBQ1RFUlwiLFxyXG4gIEdFVF9VU0VSX0NIQVJBQ1RFUlM6IFwiR0VUX1VTRVJfQ0hBUkFDVEVSU1wiLFxyXG4gIEdFVF9DSEFSQUNURVJfQ09NTUVOVFM6IFwiR0VUX0NIQVJBQ1RFUl9DT01NRU5UU1wiLFxyXG4gIEdFVF9DSEFSQUNURVJTX0ZST01fU0VBUkNIOiBcIkdFVF9DSEFSQUNURVJTX0ZST01fU0VBUkNIXCIsXHJcbiAgR0VUX1VTRVJfTE9DQVRJT05TOiBcIkdFVF9VU0VSX0xPQ0FUSU9OU1wiLFxyXG4gIEdFVF9GQVZPUklURV9DSEFSQUNURVJTOiBcIkdFVF9GQVZPUklURV9DSEFSQUNURVJTXCIsXHJcbiAgR0VUX1NUT1JZX0NIQVJBQ1RFUlM6IFwiR0VUX1NUT1JZX0NIQVJBQ1RFUlNcIixcclxuICBBRERfTE9DQVRJT046IFwiQUREX0xPQ0FUSU9OXCIsXHJcbiAgR0VUX0xPQ0FUSU9OOiBcIkdFVF9MT0NBVElPTlwiLFxyXG4gIEVESVRfTE9DQVRJT046IFwiRURJVF9MT0NBVElPTlwiLFxyXG4gIERFTEVURV9MT0NBVElPTjogXCJERUxFVEVfTE9DQVRJT05cIixcclxuICBHRVRfQ09NTUVOVFM6IFwiR0VUX0NPTU1FTlRTXCIsXHJcbiAgR0VUX0ZBVk9SSVRFX0FVVEhPUlM6IFwiR0VUX0ZBVk9SSVRFX0FVVEhPUlNcIixcclxuICBHRVRfU1RPUllfTE9DQVRJT05TOiBcIkdFVF9TVE9SWV9MT0NBVElPTlNcIixcclxuICBHRVRfRk9MTE9XRVJTOiBcIkdFVF9GT0xMT1dFUlNcIixcclxuICBESVNQQVRDSF9FUlJPUjogXCJESVNQQVRDSF9FUlJPUlwiLFxyXG4gIFNVQk1JVF9DT01NRU5UOiBcIlNVQk1JVF9DT01NRU5UXCIsXHJcbiAgUkFURV9DT01NRU5UOiBcIlJBVEVfQ09NTUVOVFwiLFxyXG4gIEdFVF9OT1RJRklDQVRJT05TOiBcIkdFVF9OT1RJRklDQVRJT05TXCIsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX1BST0ZJTEUgPSBcIkdFVF9QUk9GSUxFXCI7XHJcbmV4cG9ydCBjb25zdCBMT0dJTiA9IFwiTE9HSU5cIjtcclxuZXhwb3J0IGNvbnN0IFJFR0lTVEVSID0gXCJSRUdJU1RFUlwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9TVE9SWSA9IFwiR0VUX1NUT1JZXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfVVNFUl9TVE9SSUVTID0gXCJHRVRfVVNFUl9TVE9SSUVTXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfRkFWT1JJVEVfU1RPUklFUyA9IFwiR0VUX0ZBVk9SSVRFX1NUT1JJRVNcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9TVE9SWSA9IFwiQUREX1NUT1JZXCI7XHJcbmV4cG9ydCBjb25zdCBFRElUX1NUT1JZID0gXCJFRElUX1NUT1JZXCI7XHJcbmV4cG9ydCBjb25zdCBERUxFVEVfU1RPUlkgPSBcIkRFTEVURV9TVE9SWVwiO1xyXG5leHBvcnQgY29uc3QgSVNfU1RPUllfRkFWT1JJVEUgPSBcIklTX1NUT1JZX0ZBVk9SSVRFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX0NIQVBURVIgPSBcIkdFVF9DSEFQVEVSXCI7XHJcbmV4cG9ydCBjb25zdCBBRERfQ0hBUFRFUiA9IFwiQUREX0NIQVBURVJcIjtcclxuZXhwb3J0IGNvbnN0IEVESVRfQ0hBUFRFUiA9IFwiRURJVF9DSEFQVEVSXCI7XHJcbmV4cG9ydCBjb25zdCBERUxFVEVfQ0hBUFRFUiA9IFwiREVMRVRFX0NIQVBURVJcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9DSEFQVEVSUyA9IFwiR0VUX0NIQVBURVJTXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX0NIQVJBQ1RFUiA9IFwiQUREX0NIQVJBQ1RFUlwiO1xyXG5leHBvcnQgY29uc3QgR0VUX0NIQVJBQ1RFUiA9IFwiR0VUX0NIQVJBQ1RFUlwiO1xyXG5leHBvcnQgY29uc3QgRURJVF9DSEFSQUNURVIgPSBcIkVESVRfQ0hBUkFDVEVSXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfVVNFUl9DSEFSQUNURVJTID0gXCJHRVRfVVNFUl9DSEFSQUNURVJTXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfVVNFUl9MT0NBVElPTlMgPSBcIkdFVF9VU0VSX0xPQ0FUSU9OU1wiO1xyXG5leHBvcnQgY29uc3QgR0VUX0ZBVk9SSVRFX0NIQVJBQ1RFUlMgPSBcIkdFVF9GQVZPUklURV9DSEFSQUNURVJTXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfU1RPUllfQ0hBUkFDVEVSUyA9IFwiR0VUX1NUT1JZX0NIQVJBQ1RFUlNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfTE9DQVRJT04gPSBcIkFERF9MT0NBVElPTlwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9GQVZPUklURV9BVVRIT1JTID0gXCJHRVRfRkFWT1JJVEVfQVVUSE9SU1wiO1xyXG5leHBvcnQgY29uc3QgR0VUX0ZPTExPV0VSUyA9IFwiR0VUX0ZPTExPV0VSU1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IERJU1BBVENIX0VSUk9SID0gXCJESVNQQVRDSF9FUlJPUlwiO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2FwcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9hdXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2ZpcmVzdG9yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9zdG9yYWdlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWNhcmQtZmxpcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9