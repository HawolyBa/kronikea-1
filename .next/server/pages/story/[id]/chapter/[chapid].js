module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/story/[id]/chapter/[chapid]/index.js");
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

/***/ "./components/chapter/Comments.js":
/*!****************************************!*\
  !*** ./components/chapter/Comments.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_Report__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/Report */ "./components/common/Report.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\components\\chapter\\Comments.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const Comments = ({
  comments,
  auth,
  deleteComment,
  submitComment,
  chapid,
  storyId,
  authorId,
  title
}) => {
  const [commentBody, setCommentBody] = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState("");
  const [toggleCommentForm, setToggleCommentForm] = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(false);
  const [toggleAnswerForm, setToggleAnswerForm] = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(false);
  const [clickedForm, setClickedForm] = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState("");
  const topComments = comments.filter(comm => !comm.answer);
  const responses = comments.filter(comm => comm.answer);
  const allComments = topComments.map(comm => {
    let res = [];
    responses.forEach(response => {
      if (response.commentAnsweredId === comm.id) {
        res.push(response);
      }
    });
    return _objectSpread(_objectSpread({}, comm), {}, {
      responses: res.sort((a, b) => a.createdAt && b.createdAt && typeof a.createdAt === "object" ? new Date(a.createdAt.seconds * 1000) - new Date(b.createdAt.seconds * 1000) : new Date(a.createdAt.seconds) - new Date(b.createdAt))
    });
  });

  const commentToggle = id => {
    setClickedForm(id);
    setToggleCommentForm(!toggleCommentForm);
  };

  const answerToggle = id => {
    setClickedForm(id);
    setToggleAnswerForm(!toggleAnswerForm);
  };

  const submit = () => {
    submitComment({
      content: commentBody,
      username: auth.user.username,
      userId: auth.user.uid,
      answer: false,
      chapterId: chapid,
      storyId: storyId,
      title
    });
    setCommentBody("");
  };

  const submitAnswer = (id, username, userId, e) => {
    e.preventDefault();
    submitComment({
      userId: auth.user.uid,
      username: auth.user.username,
      commentAnsweredId: id,
      answeredToId: userId,
      content: `@${username} ${commentBody}`,
      storyId: storyId,
      chapterId: chapid,
      authorId: authorId,
      title: title,
      answeredTo: username,
      answer: true
    });
    setCommentBody("");
    answerToggle();
  };

  return __jsx("section", {
    className: "comments",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 5
    }
  }, auth.user ? __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 11
    }
  }, "Add a comment"), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    md: 24,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Input"].TextArea, {
    value: commentBody,
    onChange: e => setCommentBody(e.target.value),
    autoSize: {
      minRows: 5
    },
    showCount: true,
    maxLength: 800,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 15
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    md: 24,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    onClick: submit,
    type: "primary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 15
    }
  }, "Comment"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Divider"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 11
    }
  })) : __jsx("p", {
    style: {
      marginBottom: "20px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 9
    }
  }, "You need to be logged in to post a comment.", " ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/auth",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 11
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 13
    }
  }, "Click here to login or create an account !"))), __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 7
    }
  }, comments.length, " Comments"), allComments.map(comment => __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, {
    key: comment.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Comment"], {
    actions: [auth && auth.user && __jsx("span", {
      key: "comment-basic-reply-to",
      onClick: commentToggle.bind(null, comment.id),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 17
      }
    }, "Reply", " "), comment.userId === auth.user.uid && __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Popconfirm"], {
      title: "Do you want to delete this comment ?",
      okText: "Yes",
      cancelText: "No",
      onConfirm: () => deleteComment(comment.id, chapid),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 17
      }
    }, __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 19
      }
    }, "Delete")), auth.user && auth.user.uid !== comment.userId && __jsx(_common_Report__WEBPACK_IMPORTED_MODULE_3__["default"], {
      type: "comment",
      data: comment,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 17
      }
    })],
    author: __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: `/profile/${comment.userId}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 15
      }
    }, __jsx("a", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 17
      }
    }, comment.username)),
    avatar: __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: `/profile/${comment.userId}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 15
      }
    }, __jsx("a", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 17
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Avatar"], {
      src: comment.userImage,
      alt: comment.username,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 19
      }
    }))),
    content: __jsx("p", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 22
      }
    }, comment.content),
    datetime: __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Tooltip"], {
      title: comment.createdAt && typeof comment.createdAt === "object" ? moment__WEBPACK_IMPORTED_MODULE_2___default.a.unix(comment.createdAt.seconds).format("YYYY-MM-DD HH:mm:ss") : moment__WEBPACK_IMPORTED_MODULE_2___default()(comment.createdAt).format("YYYY-MM-DD HH:mm:ss"),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 15
      }
    }, __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 17
      }
    }, comment.createdAt && typeof comment.createdAt === "object" ? moment__WEBPACK_IMPORTED_MODULE_2___default.a.unix(comment.createdAt.seconds).fromNow() : moment__WEBPACK_IMPORTED_MODULE_2___default()(comment.createdAt).fromNow())),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 11
    }
  }, comment.responses // .sort((a, b) => {
  //   if (a.createdAt) {
  //     if (typeof a.createdAt === "object") {
  //       return (
  //         new Date(a.createdAt.seconds * 1000) -
  //         new Date(b.createdAt.seconds * 1000)
  //       );
  //     } else
  //       return (
  //         new Date(a.createdAt.seconds) - new Date(b.createdAt)
  //       );
  //   }
  // })
  .map(c => __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, {
    key: c.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Comment"], {
    actions: [auth && auth.user && __jsx("span", {
      key: "comment-basic-reply-to",
      onClick: answerToggle.bind(null, c.id),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 25
      }
    }, "Reply", " "), comment.userId === auth.user.uid && __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Popconfirm"], {
      title: "Do you want to delete this comment ?",
      okText: "Yes",
      cancelText: "No",
      onConfirm: () => deleteComment(c.id, chapid),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 25
      }
    }, __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 27
      }
    }, "Delete")), auth.user && auth.user.uid !== c.userId && __jsx(_common_Report__WEBPACK_IMPORTED_MODULE_3__["default"], {
      type: "comment",
      data: comment,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221,
        columnNumber: 25
      }
    })],
    author: __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: `/profile/${c.userId}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 23
      }
    }, __jsx("a", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 226,
        columnNumber: 25
      }
    }, c.username)),
    avatar: __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: `/profile/${c.userId}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 230,
        columnNumber: 23
      }
    }, __jsx("a", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 231,
        columnNumber: 25
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Avatar"], {
      src: c.userImage,
      alt: c.username,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232,
        columnNumber: 27
      }
    }))),
    content: __jsx("p", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 236,
        columnNumber: 30
      }
    }, c.content),
    datetime: __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Tooltip"], {
      title: c.createdAt && typeof c.createdAt === "object" ? moment__WEBPACK_IMPORTED_MODULE_2___default.a.unix(c.createdAt.seconds).format("YYYY-MM-DD HH:mm:ss") : moment__WEBPACK_IMPORTED_MODULE_2___default()(c.createdAt).format("YYYY-MM-DD HH:mm:ss"),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238,
        columnNumber: 23
      }
    }, __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 247,
        columnNumber: 25
      }
    }, c.createdAt && typeof c.createdAt === "object" ? moment__WEBPACK_IMPORTED_MODULE_2___default.a.unix(c.createdAt.seconds).fromNow() : moment__WEBPACK_IMPORTED_MODULE_2___default()(c.createdAt).fromNow())),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 19
    }
  }), clickedForm === c.id && toggleAnswerForm && __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 23
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    md: 24,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 25
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Input"].TextArea, {
    value: commentBody,
    onChange: e => setCommentBody(e.target.value),
    autoSize: {
      minRows: 5
    },
    showCount: true,
    maxLength: 800,
    placeholder: `@${c.username}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 27
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    md: 24,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 25
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    onClick: submitAnswer.bind(null, comment.id, c.username, c.userId),
    type: "primary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 27
    }
  }, "Comment"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Divider"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 23
    }
  }))))), clickedForm === comment.id && toggleCommentForm ? __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    md: 24,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Input"].TextArea, {
    value: commentBody,
    onChange: e => setCommentBody(e.target.value),
    autoSize: {
      minRows: 5
    },
    showCount: true,
    maxLength: 800,
    placeholder: `@${comment.username}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 19
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    md: 24,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    onClick: submitAnswer.bind(null, comment.id, comment.username, comment.userId),
    type: "primary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 19
    }
  }, "Comment"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Divider"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 15
    }
  })) : null)));
};

/* harmony default export */ __webpack_exports__["default"] = (Comments);

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
var _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\components\\common\\Card.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Card = ({
  story
}) => {
  var _story$summary;

  return __jsx("figure", {
    className: "card story-card",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "img-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: story.banner,
    alt: "image",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  })), __jsx("figcaption", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: "tag",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, "Drama"), __jsx("span", {
    className: "author",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, "Author: ", story.authorName), __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, story === null || story === void 0 ? void 0 : story.title), __jsx("p", {
    className: "description",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, (story === null || story === void 0 ? void 0 : (_story$summary = story.summary) === null || _story$summary === void 0 ? void 0 : _story$summary.length) > 150 ? `${story.summary.slice(0, 150)}...` : story.summary), __jsx("div", {
    className: "count",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "number",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, "12 "), " ", __jsx("ion-icon", {
    name: "book",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 43
    }
  })), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "number",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, "12 "), " ", __jsx("ion-icon", {
    name: "people",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 43
    }
  })), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "number",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, "12 "), " ", __jsx("ion-icon", {
    name: "chatbubble",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
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
  }, `${character === null || character === void 0 ? void 0 : character.firstname} ${character === null || character === void 0 ? void 0 : character.lastname}`), type === "favorites" || type === "story" && __jsx("span", {
    className: "author",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, "Author: ", character === null || character === void 0 ? void 0 : character.authorName), (type === "add" || type === "show") && __jsx("span", {
    className: "author",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
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
/*! exports provided: StoryGrid, CharacterGrid, UserGrid, LocationGrid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoryGrid", function() { return StoryGrid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterGrid", function() { return CharacterGrid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserGrid", function() { return UserGrid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationGrid", function() { return LocationGrid; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/Card */ "./components/common/Card.js");
/* harmony import */ var _common_UserCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/UserCard */ "./components/common/UserCard.js");
/* harmony import */ var _common_CharacterCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/CharacterCard */ "./components/common/CharacterCard.js");
/* harmony import */ var _common_LocationCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/LocationCard */ "./components/common/LocationCard.js");
/* harmony import */ var _hoc_WithLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hoc/WithLink */ "./components/hoc/WithLink.js");
var _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\components\\common\\Grid.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const StoryGrid = () => {
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    gutter: [16, 16],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 24,
    sm: 12,
    lg: 8,
    xl: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx(_common_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 24,
    sm: 12,
    lg: 8,
    xl: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx(_common_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 24,
    sm: 12,
    lg: 8,
    xl: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx(_common_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 24,
    sm: 12,
    lg: 8,
    xl: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx(_common_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 24,
    sm: 12,
    lg: 8,
    xl: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx(_common_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  })));
};

const UserGrid = () => {
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    gutter: [20, 30],
    align: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: 4,
    md: 6,
    sm: 8,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, __jsx(_common_UserCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: 4,
    md: 6,
    sm: 8,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, __jsx(_common_UserCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: 4,
    md: 6,
    sm: 8,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, __jsx(_common_UserCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: 4,
    md: 6,
    sm: 8,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, __jsx(_common_UserCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: 4,
    md: 6,
    sm: 8,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, __jsx(_common_UserCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: 4,
    md: 6,
    sm: 8,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, __jsx(_common_UserCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: 4,
    md: 6,
    sm: 8,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, __jsx(_common_UserCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: 4,
    md: 6,
    sm: 8,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, __jsx(_common_UserCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  })));
};

const LocationGrid = ({
  locations,
  gutter,
  lg,
  md,
  sm,
  xs,
  type
}) => {
  return locations.length > 0 ? __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    gutter: gutter,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 5
    }
  }, locations.map(loc => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: xs,
    sm: sm,
    md: md,
    lg: lg,
    key: loc.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }, __jsx(_common_LocationCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
    type: type,
    location: loc,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 11
    }
  })))) : __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Empty"], {
    image: antd__WEBPACK_IMPORTED_MODULE_1__["Empty"].PRESENTED_IMAGE_SIMPLE,
    description: "No locations yet",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
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
  type
}) => {
  return characters.length > 0 ? __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    gutter: gutter,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 5
    }
  }, characters === null || characters === void 0 ? void 0 : characters.map(c => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    key: c.id,
    xxl: xxl,
    xl: xl,
    lg: lg,
    md: md,
    sm: sm,
    xs: xs,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }
  }, type === "show" ? __jsx(_hoc_WithLink__WEBPACK_IMPORTED_MODULE_6__["default"], {
    link: `/character/${c.id}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }
  }, __jsx(_common_CharacterCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    character: c,
    type: type,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 15
    }
  })) : __jsx(_common_CharacterCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    character: c,
    type: type,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }
  })))) : __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Empty"], {
    image: antd__WEBPACK_IMPORTED_MODULE_1__["Empty"].PRESENTED_IMAGE_SIMPLE,
    description: "No characters yet",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
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
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/Link */ "next/Link");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_2__);
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
  }, "Story:", " ", __jsx(next_Link__WEBPACK_IMPORTED_MODULE_2___default.a, {
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

/***/ "./components/common/Report.js":
/*!*************************************!*\
  !*** ./components/common/Report.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\components\\common\\Report.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Report = ({
  type,
  data
}) => {
  return __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 10
    }
  }, "Report");
};

/* harmony default export */ __webpack_exports__["default"] = (Report);

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

/***/ "./components/hoc/WithLink.js":
/*!************************************!*\
  !*** ./components/hoc/WithLink.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\components\\hoc\\WithLink.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const WithLink = ({
  link,
  className,
  children
}) => {
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: link,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("a", {
    className: className,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, children));
};

/* harmony default export */ __webpack_exports__["default"] = (WithLink);

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

/***/ "./pages/story/[id]/chapter/[chapid]/index.js":
/*!****************************************************!*\
  !*** ./pages/story/[id]/chapter/[chapid]/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_dummy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../utils/dummy */ "./utils/dummy.js");
/* harmony import */ var _hooks_userHooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../hooks/userHooks */ "./hooks/userHooks.js");
/* harmony import */ var _redux_actions_storiesActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../redux/actions/storiesActions */ "./redux/actions/storiesActions.js");
/* harmony import */ var _components_chapter_Comments__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../components/chapter/Comments */ "./components/chapter/Comments.js");
/* harmony import */ var _components_hoc_LoadingScreen__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../components/hoc/LoadingScreen */ "./components/hoc/LoadingScreen.js");
/* harmony import */ var _components_hoc_RedirectComp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../components/hoc/RedirectComp */ "./components/hoc/RedirectComp.js");
/* harmony import */ var _components_common_Grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../components/common/Grid */ "./components/common/Grid.js");
var _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\pages\\story\\[id]\\chapter\\[chapid]\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;













const Chapter = props => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const auth = Object(_hooks_userHooks__WEBPACK_IMPORTED_MODULE_6__["useAuth"])();
  const {
    loading,
    chapter,
    loadingComments,
    comments,
    chapterExists
  } = props;
  const [characters, setCharacters] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState([]);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    props.getChapter(router.query.id, router.query.chapid, "show");
    props.getComments(router.query.chapid);
  }, [router.query.id, router.query.chapid]);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    if (chapter.characters) {
      setCharacters(chapter.characters.filter(c => c.public || c.authorId === auth.user.uid));
    }
  }, [chapter]);
  return __jsx(_components_hoc_LoadingScreen__WEBPACK_IMPORTED_MODULE_9__["default"], {
    loading: loading,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }, __jsx(_components_hoc_RedirectComp__WEBPACK_IMPORTED_MODULE_10__["default"], {
    condition: chapterExists,
    type: "404",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, __jsx(_components_hoc_RedirectComp__WEBPACK_IMPORTED_MODULE_10__["default"], {
    condition: chapter.public || auth.user && auth.user.uid === chapter.authorId,
    type: "403",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "main-chapter",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "chapter-page",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], {
    title: "Next Chapter",
    placement: "bottom",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "icon custom-icon nav-btn next-btn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }, __jsx("ion-icon", {
    name: "chevron-forward-circle",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 19
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], {
    title: "Previous Chapter",
    placement: "bottom",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "icon custom-icon nav-btn prev-btn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  }, __jsx("ion-icon", {
    name: "chevron-back-circle",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 19
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["PageHeader"], {
    className: "site-page-header",
    onBack: () => router.push(`/story/${router.query.id}`),
    title: "Back to story",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 15
    }
  }), __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 15
    }
  }, chapter.number, ". ", chapter.title), __jsx("div", {
    className: "meta",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Divider"], {
    orientation: "left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/profile/1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 19
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 21
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Space"], {
    direction: "vertical",
    align: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 23
    }
  }, __jsx("div", {
    className: "avatar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: _utils_dummy__WEBPACK_IMPORTED_MODULE_5__["dummy"].person,
    alt: _utils_dummy__WEBPACK_IMPORTED_MODULE_5__["dummy"].name,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 27
    }
  })), __jsx("h5", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 25
    }
  }, chapter.authorName)))))), __jsx("section", {
    className: "chapter-content",
    dangerouslySetInnerHTML: {
      __html: chapter.body
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 15
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Divider"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 15
    }
  }), loadingComments ? __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Spin"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 17
    }
  }) : __jsx(_components_chapter_Comments__WEBPACK_IMPORTED_MODULE_8__["default"], {
    submitComment: props.submitComment,
    auth: auth,
    comments: comments,
    deleteComment: props.deleteComment,
    chapid: router.query.chapid,
    storyId: router.query.id,
    authorId: chapter.authorId,
    title: chapter.storyTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "main-chapter-details",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 13
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 15
    }
  }, "Characters in this chapter"), __jsx(_components_common_Grid__WEBPACK_IMPORTED_MODULE_11__["CharacterGrid"], {
    gutter: [12, 12],
    characters: characters,
    type: "show",
    lg: 12,
    md: 12,
    sm: 12,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 15
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Divider"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 15
    }
  }), __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 15
    }
  }, "Locations in this chapter"), __jsx(_components_common_Grid__WEBPACK_IMPORTED_MODULE_11__["LocationGrid"], {
    gutter: [12, 12],
    lg: 12,
    md: 12,
    sm: 12,
    xs: 12,
    type: "story",
    locations: chapter.locations,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 15
    }
  }))))));
};

const mapStateToProps = state => ({
  chapter: state.stories.chapter,
  loading: state.stories.loading,
  comments: state.stories.comments,
  loadingComments: state.stories.loadingComments,
  chapterExists: state.stories.chapterExists,
  message: state.stories.message
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, {
  getChapter: _redux_actions_storiesActions__WEBPACK_IMPORTED_MODULE_7__["getChapter"],
  getComments: _redux_actions_storiesActions__WEBPACK_IMPORTED_MODULE_7__["getComments"],
  submitComment: _redux_actions_storiesActions__WEBPACK_IMPORTED_MODULE_7__["submitComment"],
  deleteComment: _redux_actions_storiesActions__WEBPACK_IMPORTED_MODULE_7__["deleteComment"]
})(Chapter));

/***/ }),

/***/ "./redux/actions/storiesActions.js":
/*!*****************************************!*\
  !*** ./redux/actions/storiesActions.js ***!
  \*****************************************/
/*! exports provided: getStory, addStory, editStory, getUserStories, getFavoriteStories, isStoryFavorite, addStoryToFavorite, removeStoryFromFavorite, getStoryCharacters, addChapter, editChapter, deleteChapter, getChapter, getChapters, addLocation, editLocation, getLocation, getUserLocations, getStoryLocations, getComments, submitComment, deleteComment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStory", function() { return getStory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addStory", function() { return addStory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editStory", function() { return editStory; });
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
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
            mainArr: doc.data().mainCharacters,
            secondaryArr: doc.data().secondaryCharacters
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
  const imageName = data.title.toLowerCase().split(" ").join("_");

  if (typeof data.banner === "object") {
    _fbConfig__WEBPACK_IMPORTED_MODULE_1__["storage"].ref(`${_fbConfig__WEBPACK_IMPORTED_MODULE_1__["auth"].currentUser.uid}/${imageName}`).put(data.banner).then(() => {
      return _fbConfig__WEBPACK_IMPORTED_MODULE_1__["storage"].ref(_fbConfig__WEBPACK_IMPORTED_MODULE_1__["auth"].currentUser.uid).child(imageName).getDownloadURL();
    }).then(url => {
      return _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("stories").add(_objectSpread(_objectSpread({}, data), {}, {
        authorId: _fbConfig__WEBPACK_IMPORTED_MODULE_1__["auth"].currentUser.uid,
        authorName: data.authorName,
        oneShot: false,
        banner: url,
        createdAt: firebase_app__WEBPACK_IMPORTED_MODULE_2___default.a.firestore.FieldValue.serverTimestamp(),
        likesCount: 0,
        chaptersCount: 0,
        secondaryCharacters: [],
        featured: false,
        note: 0
      }));
    }).then(res => {
      antd__WEBPACK_IMPORTED_MODULE_3__["message"].success("Story added successfully");
      setTimeout(() => {
        next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push(`/story/${res.id}`);
        dispatch({
          type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].ADD_STORY,
          payload: {
            message: "Story added successfully",
            storyId: res.id,
            loading: false
          }
        });
      }, 1000);
    }).catch(err => {
      antd__WEBPACK_IMPORTED_MODULE_3__["message"].error(err.message);
    });
  } else {
    _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("stories").add(_objectSpread(_objectSpread({}, data), {}, {
      authorId: _fbConfig__WEBPACK_IMPORTED_MODULE_1__["auth"].currentUser.uid,
      authorName: data.authorName,
      oneShot: false,
      createdAt: firebase_app__WEBPACK_IMPORTED_MODULE_2___default.a.firestore.FieldValue.serverTimestamp(),
      likesCount: 0,
      chaptersCount: 0,
      featured: false,
      secondaryCharacters: [],
      note: 0
    })).then(res => {
      antd__WEBPACK_IMPORTED_MODULE_3__["message"].success("Story added successfully");
      setTimeout(() => {
        next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push(`/story/${res.id}`);
        dispatch({
          type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].ADD_STORY,
          payload: {
            message: "Story added successfully",
            storyId: res.id,
            loading: false
          }
        });
      }, 1000);
    }).catch(err => {
      antd__WEBPACK_IMPORTED_MODULE_3__["message"].error(err.message);
    });
  }
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
        banner: url
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
          antd__WEBPACK_IMPORTED_MODULE_3__["message"].success("Story added successfully");
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
    _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("stories").doc(storyId).update(_objectSpread({}, data)).then(() => {
      _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("locations").where("storyId", "==", storyId).get().then(docs => {
        let locationQuery = [];
        docs.forEach(doc => {
          locationQuery = [...locationQuery, _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("locations").doc(doc.id).update({
            storyTitle: data.title
          })];
        });
        Promise.all(locationQuery).then(() => {
          antd__WEBPACK_IMPORTED_MODULE_3__["message"].success("Story added successfully");
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
const getUserStories = () => dispatch => {
  _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("stories").where("authorId", "==", _fbConfig__WEBPACK_IMPORTED_MODULE_1__["auth"].currentUser.uid).get().then(docs => {
    let items = [];
    docs.forEach(doc => {
      items = [...items, _objectSpread({
        id: doc.id
      }, doc.data())];
    });
    return items;
  }).then(items => {
    dispatch({
      type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].GET_USER_STORIES,
      payload: items
    });
  });
};
const getFavoriteStories = () => dispatch => {
  _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("storiesLikes").where("senderId", "==", _fbConfig__WEBPACK_IMPORTED_MODULE_1__["auth"].currentUser.uid).get().then(docs => {
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
  dispatch({
    type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].ADD_CHAPTER,
    payload: {
      loading: true
    }
  });
  _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("chapters").add(_objectSpread(_objectSpread({}, data), {}, {
    authorId: _fbConfig__WEBPACK_IMPORTED_MODULE_1__["auth"].currentUser.uid,
    commentsCount: 0,
    note: 0,
    voters: [],
    votesCount: 0,
    createdAt: firebase_app__WEBPACK_IMPORTED_MODULE_2___default.a.firestore.FieldValue.serverTimestamp()
  })).then(res => {
    _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("stories").doc(data.storyId).get().then(doc => {
      _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("stories").doc(data.storyId).update({
        secondaryCharacters
      }).then(() => {
        dispatch({
          type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].ADD_CHAPTER,
          payload: {
            message: "Chapter added successfully",
            chapId: res.id,
            loading: false
          }
        });
      });
    });
  }); // .then((res) => {
  //   dispatch({
  //     type: types.ADD_CHAPTER,
  //     payload: {
  //       message: "Chapter added successfully",
  //       chapId: res.id,
  //     },
  //   });
  // })
  // .catch((err) =>
  //   dispatch({
  //     type: types.ADD_CHAPTER,
  //     payload: { message: err.message, chapId: "" },
  //   })
  // );
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
        secondaryCharacters
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
  _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("chapters").doc(id).get().then(doc => {
    const charactersFromChapter = doc.data().characters;
    _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("stories").doc(storyId).get().then(story => {
      const charactersFromStory = story.data().secondaryCharacters;
      let newArr = charactersFromStory.map(c => {
        if (charactersFromChapter.includes(c.id)) {
          return _objectSpread(_objectSpread({}, c), {}, {
            times: c.times - 1
          });
        } else {
          return c;
        }
      });
      newArr = newArr.filter(c => c.times > 0);
      _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("stories").doc(storyId).update({
        secondaryCharacters: newArr
      }).then(() => {
        _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("chapters").doc(id).delete().then(() => {
          dispatch({
            type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].DELETE_CHAPTER,
            payload: {
              message: "Chapter deleted successfully",
              loadingChapter: false
            }
          });
        });
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
  console.log("coucou");
  dispatch({
    type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].ADD_LOCATION,
    payload: {
      loadingLoc: true
    }
  });
  const imageName = data.name.toLowerCase().split(" ").join("_");

  if (typeof data.image === "object") {
    _fbConfig__WEBPACK_IMPORTED_MODULE_1__["storage"].ref(`${_fbConfig__WEBPACK_IMPORTED_MODULE_1__["auth"].currentUser.uid}/${imageName}`).put(data.image).then(() => {
      return _fbConfig__WEBPACK_IMPORTED_MODULE_1__["storage"].ref(_fbConfig__WEBPACK_IMPORTED_MODULE_1__["auth"].currentUser.uid).child(imageName).getDownloadURL();
    }).then(url => {
      return _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("locations").add(_objectSpread(_objectSpread({}, data), {}, {
        image: url,
        createdAt: firebase_app__WEBPACK_IMPORTED_MODULE_2___default.a.firestore.FieldValue.serverTimestamp()
      }));
    }).then(res => dispatch({
      type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].ADD_LOCATION,
      payload: {
        message: "Location added successfully",
        locId: res.id,
        loadingLoc: false
      }
    })).catch(err => {
      antd__WEBPACK_IMPORTED_MODULE_3__["message"].error(err.message);
    });
  } else {
    _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("locations").add(_objectSpread(_objectSpread({}, data), {}, {
      createdAt: firebase_app__WEBPACK_IMPORTED_MODULE_2___default.a.firestore.FieldValue.serverTimestamp()
    })).then(res => dispatch({
      type: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["types"].ADD_LOCATION,
      payload: {
        message: "Location added successfully",
        locId: res.id,
        loadingLoc: false
      }
    })).catch(err => {
      antd__WEBPACK_IMPORTED_MODULE_3__["message"].error(err.message);
    });
  }
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
const getUserLocations = () => dispatch => {
  _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("locations").where("authorId", "==", _fbConfig__WEBPACK_IMPORTED_MODULE_1__["auth"].currentUser.uid).get().then(docs => {
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
  _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("comments").add(_objectSpread(_objectSpread({}, info), {}, {
    createdAt: firebase_app__WEBPACK_IMPORTED_MODULE_2___default.a.firestore.FieldValue.serverTimestamp()
  })).then(() => {
    antd__WEBPACK_IMPORTED_MODULE_3__["message"].success("Comment posted successfully");
    _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("chapters").doc(info.chapterId).get().then(chap => {
      _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("chapters").doc(info.chapterId).update({
        commentsCount: chap.data().commentsCount + 1
      });
    });
  }).catch(err => antd__WEBPACK_IMPORTED_MODULE_3__["message"].error(err.message));
};
const deleteComment = (id, chapid) => dispatch => {
  _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("chapters").doc(chapid).get().then(chap => {
    _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("chapters").doc(chapid).update({
      commentsCount: chap.data().commentsCount - 1
    }).then(() => {
      _fbConfig__WEBPACK_IMPORTED_MODULE_1__["db"].collection("comments").doc(id).delete();
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

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next/Link":
/*!****************************!*\
  !*** external "next/Link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/Link");

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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY2hhcHRlci9Db21tZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbW1vbi9DYXJkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29tbW9uL0NoYXJhY3RlckNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb21tb24vR3JpZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbW1vbi9Mb2NhdGlvbkNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb21tb24vUmVwb3J0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29tbW9uL1VzZXJDYXJkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaG9jL0xvYWRpbmdTY3JlZW4uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9ob2MvUmVkaXJlY3RDb21wLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaG9jL1dpdGhMaW5rLmpzIiwid2VicGFjazovLy8uL2hvb2tzL3VzZXJIb29rcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3dpdGgtcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwL2luZGV4LmpzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbWl0dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZXNjYXBlLXBhdGgtZGVsaW1pdGVycy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhdGgtbWF0Y2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcHJlcGFyZS1kZXN0aW5hdGlvbi50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yZXNvbHZlLXJld3JpdGVzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9zdG9yeS8vY2hhcHRlci9bY2hhcGlkXS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25zL3N0b3JpZXNBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3JlZHV4L2ZiQ29uZmlnLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9kdW1teS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2UvYXBwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2UvYXV0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL2ZpcmVzdG9yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL3N0b3JhZ2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb21lbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L0xpbmtcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIl0sIm5hbWVzIjpbIkNvbW1lbnRzIiwiY29tbWVudHMiLCJhdXRoIiwiZGVsZXRlQ29tbWVudCIsInN1Ym1pdENvbW1lbnQiLCJjaGFwaWQiLCJzdG9yeUlkIiwiYXV0aG9ySWQiLCJ0aXRsZSIsImNvbW1lbnRCb2R5Iiwic2V0Q29tbWVudEJvZHkiLCJSZWFjdCIsInVzZVN0YXRlIiwidG9nZ2xlQ29tbWVudEZvcm0iLCJzZXRUb2dnbGVDb21tZW50Rm9ybSIsInRvZ2dsZUFuc3dlckZvcm0iLCJzZXRUb2dnbGVBbnN3ZXJGb3JtIiwiY2xpY2tlZEZvcm0iLCJzZXRDbGlja2VkRm9ybSIsInRvcENvbW1lbnRzIiwiZmlsdGVyIiwiY29tbSIsImFuc3dlciIsInJlc3BvbnNlcyIsImFsbENvbW1lbnRzIiwibWFwIiwicmVzIiwiZm9yRWFjaCIsInJlc3BvbnNlIiwiY29tbWVudEFuc3dlcmVkSWQiLCJpZCIsInB1c2giLCJzb3J0IiwiYSIsImIiLCJjcmVhdGVkQXQiLCJEYXRlIiwic2Vjb25kcyIsImNvbW1lbnRUb2dnbGUiLCJhbnN3ZXJUb2dnbGUiLCJzdWJtaXQiLCJjb250ZW50IiwidXNlcm5hbWUiLCJ1c2VyIiwidXNlcklkIiwidWlkIiwiY2hhcHRlcklkIiwic3VibWl0QW5zd2VyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiYW5zd2VyZWRUb0lkIiwiYW5zd2VyZWRUbyIsInRhcmdldCIsInZhbHVlIiwibWluUm93cyIsIm1hcmdpbkJvdHRvbSIsImxlbmd0aCIsImNvbW1lbnQiLCJiaW5kIiwidXNlckltYWdlIiwibW9tZW50IiwidW5peCIsImZvcm1hdCIsImZyb21Ob3ciLCJjIiwiQ2FyZCIsInN0b3J5IiwiYmFubmVyIiwiYXV0aG9yTmFtZSIsInN1bW1hcnkiLCJzbGljZSIsIkNoYXJhY3RlckNhcmQiLCJjaGFyYWN0ZXIiLCJ0eXBlIiwicmVtb3ZlQ2hhcmFjdGVyIiwiaW1hZ2UiLCJkdW1teSIsIm5vSW1hZ2UiLCJmaXJzdG5hbWUiLCJsYXN0bmFtZSIsInJlbGF0aW9uIiwiU3RvcnlHcmlkIiwiVXNlckdyaWQiLCJMb2NhdGlvbkdyaWQiLCJsb2NhdGlvbnMiLCJndXR0ZXIiLCJsZyIsIm1kIiwic20iLCJ4cyIsImxvYyIsIkVtcHR5IiwiUFJFU0VOVEVEX0lNQUdFX1NJTVBMRSIsIkNoYXJhY3RlckdyaWQiLCJ4eGwiLCJ4bCIsImNoYXJhY3RlcnMiLCJMb2NhdGlvbkNhcmQiLCJsb2NhdGlvbiIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwibmFtZSIsInN0b3J5VGl0bGUiLCJkZXNjcmlwdGlvbiIsIlJlcG9ydCIsImRhdGEiLCJVc2VyQ2FyZCIsIkxvYWRpbmdTY3JlZW4iLCJjaGlsZHJlbiIsImxvYWRpbmciLCJSZWRpcmVjdENvbXAiLCJjb25kaXRpb24iLCJ3aW5kb3ciLCJocmVmIiwiV2l0aExpbmsiLCJsaW5rIiwiY2xhc3NOYW1lIiwiYXV0aENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiUHJvdmlkZUF1dGgiLCJ1c2VQcm92aWRlQXV0aCIsInVzZUF1dGgiLCJ1c2VDb250ZXh0Iiwic2V0VXNlciIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsInNpZ25pbiIsImVtYWlsIiwicGFzc3dvcmQiLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsInRoZW4iLCJzaWdudXAiLCJjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJkYiIsImNvbGxlY3Rpb24iLCJhZGQiLCJiYWRnZXMiLCJiaW9ncmFwaHkiLCJmaXJlYmFzZSIsImZpcmVzdG9yZSIsIkZpZWxkVmFsdWUiLCJzZXJ2ZXJUaW1lc3RhbXAiLCJzdXNwZW5kZWQiLCJmYWNlYm9vayIsImluc3RhZ3JhbSIsInR3aXR0ZXIiLCJkZXZpYW50YXJ0IiwibGlrZXNDb3VudCIsInNpZ25vdXQiLCJzaWduT3V0Iiwic2VuZFBhc3N3b3JkUmVzZXRFbWFpbCIsImNvbmZpcm1QYXNzd29yZFJlc2V0IiwiY29kZSIsInVzZUVmZmVjdCIsInVuc3Vic2NyaWJlIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwiZG9jIiwib25TbmFwc2hvdCIsImxpc3RlbmVycyIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwicHJlZmV0Y2hlZCIsImNhY2hlZE9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiY2IiLCJyb290TWFyZ2luIiwibGlzdGVuVG9JbnRlcnNlY3Rpb25zIiwib2JzZXJ2ZXIiLCJnZXRPYnNlcnZlciIsImNvbnNvbGUiLCJyb3V0ZXIiLCJlcnIiLCJldmVudCIsIm5vZGVOYW1lIiwiaXNNb2RpZmllZEV2ZW50Iiwic2Nyb2xsIiwiYXMiLCJyZXBsYWNlIiwic3VjY2VzcyIsImRvY3VtZW50IiwiYXJncyIsImtleSIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsIk9iamVjdCIsInByb3BzIiwiY3JlYXRlUHJvcEVycm9yIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInNoYWxsb3ciLCJwYXNzSHJlZiIsInByZWZldGNoIiwib3B0aW9uYWxQcm9wcyIsImhhc1dhcm5lZCIsInAiLCJwYXRobmFtZSIsInJlc29sdmVkQXMiLCJjaGlsZEVsbSIsImlzUHJlZmV0Y2hlZCIsImNoaWxkIiwiQ2hpbGRyZW4iLCJjaGlsZFByb3BzIiwicmVmIiwiZWwiLCJzZXRDaGlsZEVsbSIsIm9uQ2xpY2siLCJsaW5rQ2xpY2tlZCIsInByaW9yaXR5IiwiTGluayIsInBhdGgiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInByb2Nlc3MiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZ2V0IiwiUm91dGVyIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJldmVudEZpZWxkIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJBcnJheSIsIkNvbXBvc2VkQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiV2l0aFJvdXRlcldyYXBwZXIiLCJhbGwiLCJvbiIsIm9mZiIsImVtaXQiLCJoYW5kbGVyIiwiYmFzZVBhdGgiLCJjYW5jZWxsZWQiLCJwcmVmaXgiLCJhZGRQYXRoUHJlZml4IiwidXJsIiwibG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsImhhc0Jhc2VQYXRoIiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJhc1BhdGhuYW1lIiwicGFyYW1zIiwicGFyYW0iLCJyZXBsYWNlZCIsInJlcGVhdCIsIm9wdGlvbmFsIiwiZXNjYXBlUGF0aERlbGltaXRlcnMiLCJyZXN1bHQiLCJmaWx0ZXJlZFF1ZXJ5IiwicXVlcnkiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmaW5hbFVybCIsImludGVycG9sYXRlZEFzIiwiaW50ZXJwb2xhdGVBcyIsImhhc2giLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJyZXNvbHZlZEhyZWYiLCJyZXNvbHZlQXMiLCJQQUdFX0xPQURfRVJST1IiLCJTeW1ib2wiLCJhZGRCYXNlUGF0aCIsInJlc29sdmVIcmVmIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJjcmVkZW50aWFscyIsImF0dGVtcHRzIiwiZmV0Y2hSZXRyeSIsImlzU2VydmVyUmVuZGVyIiwibWFya0xvYWRpbmdFcnJvciIsImNvbnN0cnVjdG9yIiwicm91dGUiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIl9pbkZsaWdodFJvdXRlIiwiX3NoYWxsb3ciLCJsb2NhbGUiLCJsb2NhbGVzIiwiZGVmYXVsdExvY2FsZSIsInN0YXRlIiwib3B0aW9ucyIsInN0eWxlU2hlZXRzIiwiX19OX1NTRyIsImluaXRpYWxQcm9wcyIsIl9fTl9TU1AiLCJDb21wb25lbnQiLCJfX05FWFRfREFUQV9fIiwicmVsb2FkIiwiYmFjayIsInByZXBhcmVVcmxBcyIsImlzTG9jYWxVUkwiLCJTVCIsInBlcmZvcm1hbmNlIiwiYWRkTG9jYWxlIiwiY2xlYW5lZEFzIiwiZGVsTG9jYWxlIiwiZGVsQmFzZVBhdGgiLCJwYWdlcyIsIl9fcmV3cml0ZXMiLCJwYXJzZWQiLCJtZXRob2QiLCJwb3RlbnRpYWxIcmVmIiwicGFyc2VkQXMiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsInJvdXRlSW5mbyIsImRlc3RpbmF0aW9uIiwicGFyc2VkSHJlZiIsImFwcENvbXAiLCJlcnJvciIsImNoYW5nZVN0YXRlIiwiX19OIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsInBhZ2UiLCJjYWNoZWRSb3V0ZUluZm8iLCJyZXF1aXJlIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZGF0YUhyZWYiLCJzZXQiLCJiZWZvcmVQb3BTdGF0ZSIsIm9ubHlBSGFzaENoYW5nZSIsIm5ld0hhc2giLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic2Nyb2xsVG9IYXNoIiwiaWRFbCIsIm5hbWVFbCIsInVybElzTmV3IiwiX3Jlc29sdmVIcmVmIiwiYXBwbHlCYXNlUGF0aCIsImNsZWFuUGF0aG5hbWUiLCJQcm9taXNlIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwiX2dldERhdGEiLCJmbiIsIl9nZXRTdGF0aWNEYXRhIiwiZmV0Y2hOZXh0RGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiQXBwVHJlZSIsImN0eCIsImFib3J0Q29tcG9uZW50TG9hZCIsIm5vdGlmeSIsInNlZ21lbnQiLCJjaGFyIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwic2xhc2hlZFByb3RvY29scyIsInByb3RvY29sIiwidXJsT2JqIiwiaG9zdCIsImhvc3RuYW1lIiwiU3RyaW5nIiwicXVlcnlzdHJpbmciLCJzZWFyY2giLCJURVNUX1JPVVRFIiwiRFVNTVlfQkFTRSIsInJlc29sdmVkQmFzZSIsIm9yaWdpbiIsIm1hdGNoZXJPcHRpb25zIiwic2Vuc2l0aXZlIiwiZGVsaW1pdGVyIiwiY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyIsInN0cmljdCIsImN1c3RvbVJvdXRlIiwia2V5cyIsIm1hdGNoZXJSZWdleCIsInBhdGhUb1JlZ2V4cCIsIm1hdGNoZXIiLCJwYXJzZWREZXN0aW5hdGlvbiIsImRlc3RRdWVyeSIsImRlc3RQYXRoIiwiZGVzdFBhdGhQYXJhbUtleXMiLCJkZXN0UGF0aFBhcmFtcyIsImRlc3RpbmF0aW9uQ29tcGlsZXIiLCJ2YWxpZGF0ZSIsInN0ck9yQXJyYXkiLCJxdWVyeUNvbXBpbGVyIiwicGFyYW1LZXlzIiwiYXBwZW5kUGFyYW1zVG9RdWVyeSIsInNob3VsZEFkZEJhc2VQYXRoIiwibmV3VXJsIiwic2VhcmNoUGFyYW1zIiwiaXNOYU4iLCJpdGVtIiwic3RyaW5naWZ5VXJsUXVlcnlQYXJhbSIsInNlYXJjaFBhcmFtc0xpc3QiLCJjdXN0b21Sb3V0ZU1hdGNoZXIiLCJyZXdyaXRlIiwiZGVzdFJlcyIsInJlIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwibSIsInN0ciIsInNlZ21lbnRzIiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInBhcnNlUGFyYW1ldGVyIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJpIiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsInBhcnNlSW50IiwibmFtZWRSZWdleCIsInVzZWQiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJDaGFwdGVyIiwidXNlUm91dGVyIiwiY2hhcHRlciIsImxvYWRpbmdDb21tZW50cyIsImNoYXB0ZXJFeGlzdHMiLCJzZXRDaGFyYWN0ZXJzIiwiZ2V0Q2hhcHRlciIsImdldENvbW1lbnRzIiwicHVibGljIiwibnVtYmVyIiwicGVyc29uIiwiX19odG1sIiwiYm9keSIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0b3JpZXMiLCJjb25uZWN0IiwiZ2V0U3RvcnkiLCJkaXNwYXRjaCIsImV4aXN0cyIsIm1haW4iLCJtYWluQ2hhcmFjdGVycyIsInNlY29uZGFyeSIsInNlY29uZGFyeUNoYXJhY3RlcnMiLCJtYWluQXJyIiwic2Vjb25kYXJ5QXJyIiwibWFpblF1ZXJ5Iiwic2Vjb25kYXJ5UXVlcnkiLCJtYWluUmVzIiwic2Vjb25kYXJ5UmVzIiwiZG9jdSIsInR5cGVzIiwiR0VUX1NUT1JZIiwic3RvcnlFeGlzdHMiLCJwYXlsb2FkIiwiRElTUEFUQ0hfRVJST1IiLCJjYXRjaCIsImxvZyIsImFkZFN0b3J5IiwiQUREX1NUT1JZIiwiaW1hZ2VOYW1lIiwidG9Mb3dlckNhc2UiLCJzcGxpdCIsImpvaW4iLCJzdG9yYWdlIiwiY3VycmVudFVzZXIiLCJwdXQiLCJnZXREb3dubG9hZFVSTCIsIm9uZVNob3QiLCJjaGFwdGVyc0NvdW50IiwiZmVhdHVyZWQiLCJub3RlIiwic2V0VGltZW91dCIsImVkaXRTdG9yeSIsIkVESVRfU1RPUlkiLCJsb2FkaW5nU3RvcnkiLCJ1cGRhdGUiLCJ3aGVyZSIsImRvY3MiLCJsb2NhdGlvblF1ZXJ5IiwiZ2V0VXNlclN0b3JpZXMiLCJpdGVtcyIsIkdFVF9VU0VSX1NUT1JJRVMiLCJnZXRGYXZvcml0ZVN0b3JpZXMiLCJmYXZBcnIiLCJ1c2VycyIsImZhdlVzZXJzIiwiR0VUX0ZBVk9SSVRFX1NUT1JJRVMiLCJpc1N0b3J5RmF2b3JpdGUiLCJzbmFwc2hvdCIsIklTX1NUT1JZX0ZBVk9SSVRFIiwibG9hZGluZ0ZhdiIsImFkZFN0b3J5VG9GYXZvcml0ZSIsImVtYWlsVmVyaWZpZWQiLCJzZW5kZXIiLCJzZW5kZXJJZCIsInJlbW92ZVN0b3J5RnJvbUZhdm9yaXRlIiwiZGVsZXRlIiwiZ2V0U3RvcnlDaGFyYWN0ZXJzIiwiYWRkQ2hhcHRlciIsIkFERF9DSEFQVEVSIiwiY29tbWVudHNDb3VudCIsInZvdGVycyIsInZvdGVzQ291bnQiLCJjaGFwSWQiLCJlZGl0Q2hhcHRlciIsIkVESVRfQ0hBUFRFUiIsImRlbGV0ZUNoYXB0ZXIiLCJERUxFVEVfQ0hBUFRFUiIsImxvYWRpbmdDaGFwdGVyIiwiY2hhcmFjdGVyc0Zyb21DaGFwdGVyIiwiY2hhcmFjdGVyc0Zyb21TdG9yeSIsIm5ld0FyciIsImluY2x1ZGVzIiwidGltZXMiLCJjaGFwIiwiY2hhcmFRdWVyeSIsImxvY1F1ZXJ5IiwiY2hhcmFjdGVyc0luQ2hhcGVyIiwibG9jYXRpb25zSW5DaGFwZXIiLCJsIiwiR0VUX0NIQVBURVIiLCJnZXRDaGFwdGVycyIsIm9yZGVyQnkiLCJhcnIiLCJHRVRfQ0hBUFRFUlMiLCJhZGRMb2NhdGlvbiIsIkFERF9MT0NBVElPTiIsImxvYWRpbmdMb2MiLCJsb2NJZCIsImVkaXRMb2NhdGlvbiIsImdldExvY2F0aW9uIiwiR0VUX0xPQ0FUSU9OIiwibG9jYXRpb25FeGlzdHMiLCJnZXRVc2VyTG9jYXRpb25zIiwiR0VUX1VTRVJfTE9DQVRJT05TIiwiZ2V0U3RvcnlMb2NhdGlvbnMiLCJHRVRfU1RPUllfTE9DQVRJT05TIiwic25hcCIsInF1ZXJpZXMiLCJmaW5kIiwiZCIsIkdFVF9DT01NRU5UUyIsImluZm8iLCJwcm9kQ29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsImRhdGFiYXNlVVJMIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJGSVJFQkFTRV9BUFBfSUQiLCJkZXZDb25maWciLCJjb25maWciLCJhcHBzIiwiaW5pdGlhbGl6ZUFwcCIsIkNBVEVHT1JJRVMiLCJDT1BZUklHSFRTIiwiTEFOR1VBR0VTIiwiU1RBVFVTIiwiR0VUX1BST0ZJTEUiLCJMT0dJTiIsIlJFR0lTVEVSIiwiREVMRVRFX1NUT1JZIiwiQUREX0NIQVJBQ1RFUiIsIkdFVF9DSEFSQUNURVIiLCJFRElUX0NIQVJBQ1RFUiIsIkdFVF9VU0VSX0NIQVJBQ1RFUlMiLCJHRVRfRkFWT1JJVEVfQ0hBUkFDVEVSUyIsIkdFVF9TVE9SWV9DSEFSQUNURVJTIiwiRURJVF9MT0NBVElPTiIsIkdFVF9GQVZPUklURV9BVVRIT1JTIiwiR0VUX0ZPTExPV0VSUyIsImNvdmVyIiwicG9zdGVyIiwiYXZhdGFyIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUN4RkEsd0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQVdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLFFBQVEs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Ozs7OztBQ0FQLGlDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLHdDIiwiZmlsZSI6InBhZ2VzL3N0b3J5L1tpZF0vY2hhcHRlci9bY2hhcGlkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvc3RvcnkvW2lkXS9jaGFwdGVyL1tjaGFwaWRdL2luZGV4LmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJpbXBvcnQge1xyXG4gIENvbW1lbnQsXHJcbiAgVG9vbHRpcCxcclxuICBBdmF0YXIsXHJcbiAgSW5wdXQsXHJcbiAgRGl2aWRlcixcclxuICBCdXR0b24sXHJcbiAgUm93LFxyXG4gIENvbCxcclxuICBQb3Bjb25maXJtLFxyXG59IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XHJcbmltcG9ydCBSZXBvcnQgZnJvbSBcIi4uL2NvbW1vbi9SZXBvcnRcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgQ29tbWVudHMgPSAoe1xyXG4gIGNvbW1lbnRzLFxyXG4gIGF1dGgsXHJcbiAgZGVsZXRlQ29tbWVudCxcclxuICBzdWJtaXRDb21tZW50LFxyXG4gIGNoYXBpZCxcclxuICBzdG9yeUlkLFxyXG4gIGF1dGhvcklkLFxyXG4gIHRpdGxlLFxyXG59KSA9PiB7XHJcbiAgY29uc3QgW2NvbW1lbnRCb2R5LCBzZXRDb21tZW50Qm9keV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbdG9nZ2xlQ29tbWVudEZvcm0sIHNldFRvZ2dsZUNvbW1lbnRGb3JtXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdG9nZ2xlQW5zd2VyRm9ybSwgc2V0VG9nZ2xlQW5zd2VyRm9ybV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2NsaWNrZWRGb3JtLCBzZXRDbGlja2VkRm9ybV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgdG9wQ29tbWVudHMgPSBjb21tZW50cy5maWx0ZXIoKGNvbW0pID0+ICFjb21tLmFuc3dlcik7XHJcbiAgY29uc3QgcmVzcG9uc2VzID0gY29tbWVudHMuZmlsdGVyKChjb21tKSA9PiBjb21tLmFuc3dlcik7XHJcbiAgY29uc3QgYWxsQ29tbWVudHMgPSB0b3BDb21tZW50cy5tYXAoKGNvbW0pID0+IHtcclxuICAgIGxldCByZXMgPSBbXTtcclxuICAgIHJlc3BvbnNlcy5mb3JFYWNoKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBpZiAocmVzcG9uc2UuY29tbWVudEFuc3dlcmVkSWQgPT09IGNvbW0uaWQpIHtcclxuICAgICAgICByZXMucHVzaChyZXNwb25zZSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4uY29tbSxcclxuICAgICAgcmVzcG9uc2VzOiByZXMuc29ydCgoYSwgYikgPT5cclxuICAgICAgICBhLmNyZWF0ZWRBdCAmJiBiLmNyZWF0ZWRBdCAmJiB0eXBlb2YgYS5jcmVhdGVkQXQgPT09IFwib2JqZWN0XCJcclxuICAgICAgICAgID8gbmV3IERhdGUoYS5jcmVhdGVkQXQuc2Vjb25kcyAqIDEwMDApIC1cclxuICAgICAgICAgICAgbmV3IERhdGUoYi5jcmVhdGVkQXQuc2Vjb25kcyAqIDEwMDApXHJcbiAgICAgICAgICA6IG5ldyBEYXRlKGEuY3JlYXRlZEF0LnNlY29uZHMpIC0gbmV3IERhdGUoYi5jcmVhdGVkQXQpXHJcbiAgICAgICksXHJcbiAgICB9O1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBjb21tZW50VG9nZ2xlID0gKGlkKSA9PiB7XHJcbiAgICBzZXRDbGlja2VkRm9ybShpZCk7XHJcbiAgICBzZXRUb2dnbGVDb21tZW50Rm9ybSghdG9nZ2xlQ29tbWVudEZvcm0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFuc3dlclRvZ2dsZSA9IChpZCkgPT4ge1xyXG4gICAgc2V0Q2xpY2tlZEZvcm0oaWQpO1xyXG4gICAgc2V0VG9nZ2xlQW5zd2VyRm9ybSghdG9nZ2xlQW5zd2VyRm9ybSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc3VibWl0ID0gKCkgPT4ge1xyXG4gICAgc3VibWl0Q29tbWVudCh7XHJcbiAgICAgIGNvbnRlbnQ6IGNvbW1lbnRCb2R5LFxyXG4gICAgICB1c2VybmFtZTogYXV0aC51c2VyLnVzZXJuYW1lLFxyXG4gICAgICB1c2VySWQ6IGF1dGgudXNlci51aWQsXHJcbiAgICAgIGFuc3dlcjogZmFsc2UsXHJcbiAgICAgIGNoYXB0ZXJJZDogY2hhcGlkLFxyXG4gICAgICBzdG9yeUlkOiBzdG9yeUlkLFxyXG4gICAgICB0aXRsZSxcclxuICAgIH0pO1xyXG4gICAgc2V0Q29tbWVudEJvZHkoXCJcIik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc3VibWl0QW5zd2VyID0gKGlkLCB1c2VybmFtZSwgdXNlcklkLCBlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzdWJtaXRDb21tZW50KHtcclxuICAgICAgdXNlcklkOiBhdXRoLnVzZXIudWlkLFxyXG4gICAgICB1c2VybmFtZTogYXV0aC51c2VyLnVzZXJuYW1lLFxyXG4gICAgICBjb21tZW50QW5zd2VyZWRJZDogaWQsXHJcbiAgICAgIGFuc3dlcmVkVG9JZDogdXNlcklkLFxyXG4gICAgICBjb250ZW50OiBgQCR7dXNlcm5hbWV9ICR7Y29tbWVudEJvZHl9YCxcclxuICAgICAgc3RvcnlJZDogc3RvcnlJZCxcclxuICAgICAgY2hhcHRlcklkOiBjaGFwaWQsXHJcbiAgICAgIGF1dGhvcklkOiBhdXRob3JJZCxcclxuICAgICAgdGl0bGU6IHRpdGxlLFxyXG4gICAgICBhbnN3ZXJlZFRvOiB1c2VybmFtZSxcclxuICAgICAgYW5zd2VyOiB0cnVlLFxyXG4gICAgfSk7XHJcblxyXG4gICAgc2V0Q29tbWVudEJvZHkoXCJcIik7XHJcbiAgICBhbnN3ZXJUb2dnbGUoKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29tbWVudHNcIj5cclxuICAgICAge2F1dGgudXNlciA/IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPGgzPkFkZCBhIGNvbW1lbnQ8L2gzPlxyXG4gICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgPENvbCBtZD17MjR9PlxyXG4gICAgICAgICAgICAgIDxJbnB1dC5UZXh0QXJlYVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2NvbW1lbnRCb2R5fVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDb21tZW50Qm9keShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICBhdXRvU2l6ZT17eyBtaW5Sb3dzOiA1IH19XHJcbiAgICAgICAgICAgICAgICBzaG93Q291bnQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBtYXhMZW5ndGg9ezgwMH1cclxuICAgICAgICAgICAgICA+PC9JbnB1dC5UZXh0QXJlYT5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgbWQ9ezI0fT5cclxuICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3N1Ym1pdH0gdHlwZT1cInByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgIENvbW1lbnRcclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPHAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjIwcHhcIiB9fT5cclxuICAgICAgICAgIFlvdSBuZWVkIHRvIGJlIGxvZ2dlZCBpbiB0byBwb3N0IGEgY29tbWVudC57XCIgXCJ9XHJcbiAgICAgICAgICA8TGluayBocmVmPXtcIi9hdXRoXCJ9PlxyXG4gICAgICAgICAgICA8YT5DbGljayBoZXJlIHRvIGxvZ2luIG9yIGNyZWF0ZSBhbiBhY2NvdW50ICE8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICApfVxyXG4gICAgICA8aDM+e2NvbW1lbnRzLmxlbmd0aH0gQ29tbWVudHM8L2gzPlxyXG4gICAgICB7YWxsQ29tbWVudHMubWFwKChjb21tZW50KSA9PiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17Y29tbWVudC5pZH0+XHJcbiAgICAgICAgICA8Q29tbWVudFxyXG4gICAgICAgICAgICBhY3Rpb25zPXtbXHJcbiAgICAgICAgICAgICAgYXV0aCAmJiBhdXRoLnVzZXIgJiYgKFxyXG4gICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAga2V5PVwiY29tbWVudC1iYXNpYy1yZXBseS10b1wiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2NvbW1lbnRUb2dnbGUuYmluZChudWxsLCBjb21tZW50LmlkKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgUmVwbHl7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICBjb21tZW50LnVzZXJJZCA9PT0gYXV0aC51c2VyLnVpZCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8UG9wY29uZmlybVxyXG4gICAgICAgICAgICAgICAgICB0aXRsZT1cIkRvIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIGNvbW1lbnQgP1wiXHJcbiAgICAgICAgICAgICAgICAgIG9rVGV4dD1cIlllc1wiXHJcbiAgICAgICAgICAgICAgICAgIGNhbmNlbFRleHQ9XCJOb1wiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ29uZmlybT17KCkgPT4gZGVsZXRlQ29tbWVudChjb21tZW50LmlkLCBjaGFwaWQpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj5EZWxldGU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L1BvcGNvbmZpcm0+XHJcbiAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICBhdXRoLnVzZXIgJiYgYXV0aC51c2VyLnVpZCAhPT0gY29tbWVudC51c2VySWQgJiYgKFxyXG4gICAgICAgICAgICAgICAgPFJlcG9ydCB0eXBlPVwiY29tbWVudFwiIGRhdGE9e2NvbW1lbnR9IC8+XHJcbiAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgYXV0aG9yPXtcclxuICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3Byb2ZpbGUvJHtjb21tZW50LnVzZXJJZH1gfT5cclxuICAgICAgICAgICAgICAgIDxhPntjb21tZW50LnVzZXJuYW1lfTwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYXZhdGFyPXtcclxuICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3Byb2ZpbGUvJHtjb21tZW50LnVzZXJJZH1gfT5cclxuICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICA8QXZhdGFyIHNyYz17Y29tbWVudC51c2VySW1hZ2V9IGFsdD17Y29tbWVudC51c2VybmFtZX0gLz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29udGVudD17PHA+e2NvbW1lbnQuY29udGVudH08L3A+fVxyXG4gICAgICAgICAgICBkYXRldGltZT17XHJcbiAgICAgICAgICAgICAgPFRvb2x0aXBcclxuICAgICAgICAgICAgICAgIHRpdGxlPXtcclxuICAgICAgICAgICAgICAgICAgY29tbWVudC5jcmVhdGVkQXQgJiYgdHlwZW9mIGNvbW1lbnQuY3JlYXRlZEF0ID09PSBcIm9iamVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPyBtb21lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnVuaXgoY29tbWVudC5jcmVhdGVkQXQuc2Vjb25kcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmZvcm1hdChcIllZWVktTU0tREQgSEg6bW06c3NcIilcclxuICAgICAgICAgICAgICAgICAgICA6IG1vbWVudChjb21tZW50LmNyZWF0ZWRBdCkuZm9ybWF0KFwiWVlZWS1NTS1ERCBISDptbTpzc1wiKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICB7Y29tbWVudC5jcmVhdGVkQXQgJiYgdHlwZW9mIGNvbW1lbnQuY3JlYXRlZEF0ID09PSBcIm9iamVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPyBtb21lbnQudW5peChjb21tZW50LmNyZWF0ZWRBdC5zZWNvbmRzKS5mcm9tTm93KClcclxuICAgICAgICAgICAgICAgICAgICA6IG1vbWVudChjb21tZW50LmNyZWF0ZWRBdCkuZnJvbU5vdygpfVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7Y29tbWVudC5yZXNwb25zZXNcclxuICAgICAgICAgICAgICAvLyAuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICAgIC8vICAgaWYgKGEuY3JlYXRlZEF0KSB7XHJcbiAgICAgICAgICAgICAgLy8gICAgIGlmICh0eXBlb2YgYS5jcmVhdGVkQXQgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgICAvLyAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIC8vICAgICAgICAgbmV3IERhdGUoYS5jcmVhdGVkQXQuc2Vjb25kcyAqIDEwMDApIC1cclxuICAgICAgICAgICAgICAvLyAgICAgICAgIG5ldyBEYXRlKGIuY3JlYXRlZEF0LnNlY29uZHMgKiAxMDAwKVxyXG4gICAgICAgICAgICAgIC8vICAgICAgICk7XHJcbiAgICAgICAgICAgICAgLy8gICAgIH0gZWxzZVxyXG4gICAgICAgICAgICAgIC8vICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgLy8gICAgICAgICBuZXcgRGF0ZShhLmNyZWF0ZWRBdC5zZWNvbmRzKSAtIG5ldyBEYXRlKGIuY3JlYXRlZEF0KVxyXG4gICAgICAgICAgICAgIC8vICAgICAgICk7XHJcbiAgICAgICAgICAgICAgLy8gICB9XHJcbiAgICAgICAgICAgICAgLy8gfSlcclxuICAgICAgICAgICAgICAubWFwKChjKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtjLmlkfT5cclxuICAgICAgICAgICAgICAgICAgPENvbW1lbnRcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICBhdXRoICYmIGF1dGgudXNlciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PVwiY29tbWVudC1iYXNpYy1yZXBseS10b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17YW5zd2VyVG9nZ2xlLmJpbmQobnVsbCwgYy5pZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBSZXBseXtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnQudXNlcklkID09PSBhdXRoLnVzZXIudWlkICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBvcGNvbmZpcm1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkRvIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIGNvbW1lbnQgP1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb2tUZXh0PVwiWWVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxUZXh0PVwiTm9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29uZmlybT17KCkgPT4gZGVsZXRlQ29tbWVudChjLmlkLCBjaGFwaWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+RGVsZXRlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1BvcGNvbmZpcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgYXV0aC51c2VyICYmIGF1dGgudXNlci51aWQgIT09IGMudXNlcklkICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlcG9ydCB0eXBlPVwiY29tbWVudFwiIGRhdGE9e2NvbW1lbnR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgYXV0aG9yPXtcclxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcHJvZmlsZS8ke2MudXNlcklkfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YT57Yy51c2VybmFtZX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGF2YXRhcj17XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3Byb2ZpbGUvJHtjLnVzZXJJZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEF2YXRhciBzcmM9e2MudXNlckltYWdlfSBhbHQ9e2MudXNlcm5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD17PHA+e2MuY29udGVudH08L3A+fVxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGV0aW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjLmNyZWF0ZWRBdCAmJiB0eXBlb2YgYy5jcmVhdGVkQXQgPT09IFwib2JqZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gbW9tZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnVuaXgoYy5jcmVhdGVkQXQuc2Vjb25kcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZm9ybWF0KFwiWVlZWS1NTS1ERCBISDptbTpzc1wiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBtb21lbnQoYy5jcmVhdGVkQXQpLmZvcm1hdChcIllZWVktTU0tREQgSEg6bW06c3NcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Yy5jcmVhdGVkQXQgJiYgdHlwZW9mIGMuY3JlYXRlZEF0ID09PSBcIm9iamVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IG1vbWVudC51bml4KGMuY3JlYXRlZEF0LnNlY29uZHMpLmZyb21Ob3coKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBtb21lbnQoYy5jcmVhdGVkQXQpLmZyb21Ob3coKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAge2NsaWNrZWRGb3JtID09PSBjLmlkICYmIHRvZ2dsZUFuc3dlckZvcm0gJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIG1kPXsyNH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0LlRleHRBcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y29tbWVudEJvZHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldENvbW1lbnRCb2R5KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9TaXplPXt7IG1pblJvd3M6IDUgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dDb3VudD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aD17ODAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2BAJHtjLnVzZXJuYW1lfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvSW5wdXQuVGV4dEFyZWE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIG1kPXsyNH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17c3VibWl0QW5zd2VyLmJpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnQuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMudXNlcm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMudXNlcklkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9Db21tZW50PlxyXG5cclxuICAgICAgICAgIHtjbGlja2VkRm9ybSA9PT0gY29tbWVudC5pZCAmJiB0b2dnbGVDb21tZW50Rm9ybSA/IChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCBtZD17MjR9PlxyXG4gICAgICAgICAgICAgICAgICA8SW5wdXQuVGV4dEFyZWFcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y29tbWVudEJvZHl9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDb21tZW50Qm9keShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b1NpemU9e3sgbWluUm93czogNSB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHNob3dDb3VudD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9ezgwMH1cclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17YEAke2NvbW1lbnQudXNlcm5hbWV9YH1cclxuICAgICAgICAgICAgICAgICAgPjwvSW5wdXQuVGV4dEFyZWE+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgbWQ9ezI0fT5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3N1Ym1pdEFuc3dlci5iaW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnQuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb21tZW50LnVzZXJuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgY29tbWVudC51c2VySWRcclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIENvbW1lbnRcclxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICkpfVxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21tZW50cztcclxuIiwiY29uc3QgQ2FyZCA9ICh7IHN0b3J5IH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJjYXJkIHN0b3J5LWNhcmRcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGltZyBzcmM9e3N0b3J5LmJhbm5lcn0gYWx0PVwiaW1hZ2VcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGZpZ2NhcHRpb24+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGFnXCI+RHJhbWE8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYXV0aG9yXCI+QXV0aG9yOiB7c3RvcnkuYXV0aG9yTmFtZX08L3NwYW4+XHJcbiAgICAgICAgPGgzPntzdG9yeT8udGl0bGV9PC9oMz5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAge3N0b3J5Py5zdW1tYXJ5Py5sZW5ndGggPiAxNTBcclxuICAgICAgICAgICAgPyBgJHtzdG9yeS5zdW1tYXJ5LnNsaWNlKDAsIDE1MCl9Li4uYFxyXG4gICAgICAgICAgICA6IHN0b3J5LnN1bW1hcnl9XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY291bnRcIj5cclxuICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJudW1iZXJcIj4xMiA8L3A+IDxpb24taWNvbiBuYW1lPVwiYm9va1wiPjwvaW9uLWljb24+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibnVtYmVyXCI+MTIgPC9wPiA8aW9uLWljb24gbmFtZT1cInBlb3BsZVwiPjwvaW9uLWljb24+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibnVtYmVyXCI+MTIgPC9wPntcIiBcIn1cclxuICAgICAgICAgICAgPGlvbi1pY29uIG5hbWU9XCJjaGF0YnViYmxlXCI+PC9pb24taWNvbj5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9maWdjYXB0aW9uPlxyXG4gICAgPC9maWd1cmU+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmQ7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCB7IGR1bW15IH0gZnJvbSBcIi4uLy4uL3V0aWxzL2R1bW15XCI7XHJcblxyXG5jb25zdCBDaGFyYWN0ZXJDYXJkID0gKHsgY2hhcmFjdGVyLCB0eXBlLCByZW1vdmVDaGFyYWN0ZXIgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZmlndXJlXHJcbiAgICAgIGNsYXNzTmFtZT17YGNhcmQgY2hhcmFjdGVyLWNhcmQgJHt0eXBlID8gdHlwZSA6IFwiXCJ9YH1cclxuICAgICAgZGF0YS1hb3M9XCJ6b29tLWluLXVwXCJcclxuICAgID5cclxuICAgICAge3R5cGUgPT09IFwiYWRkXCIgJiYgKFxyXG4gICAgICAgIDxzcGFuXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByZW1vdmVDaGFyYWN0ZXIoY2hhcmFjdGVyLmlkKX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInJlbW92ZS1idG5cIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIHhcclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICl9XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxpbWcgc3JjPXtjaGFyYWN0ZXI/LmltYWdlID8gY2hhcmFjdGVyLmltYWdlIDogZHVtbXkubm9JbWFnZX0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxmaWdjYXB0aW9uPlxyXG4gICAgICAgIDxoMz57YCR7Y2hhcmFjdGVyPy5maXJzdG5hbWV9ICR7Y2hhcmFjdGVyPy5sYXN0bmFtZX1gfTwvaDM+XHJcbiAgICAgICAge3R5cGUgPT09IFwiZmF2b3JpdGVzXCIgfHxcclxuICAgICAgICAgICh0eXBlID09PSBcInN0b3J5XCIgJiYgKFxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhdXRob3JcIj5BdXRob3I6IHtjaGFyYWN0ZXI/LmF1dGhvck5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgeyh0eXBlID09PSBcImFkZFwiIHx8IHR5cGUgPT09IFwic2hvd1wiKSAmJiAoXHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhdXRob3JcIj5SZWxhdGlvbjoge2NoYXJhY3Rlcj8ucmVsYXRpb259PC9zcGFuPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZmlnY2FwdGlvbj5cclxuICAgIDwvZmlndXJlPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGFyYWN0ZXJDYXJkO1xyXG4iLCJpbXBvcnQgeyBSb3csIENvbCwgRW1wdHkgfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuaW1wb3J0IENhcmQgZnJvbSBcIi4uL2NvbW1vbi9DYXJkXCI7XHJcbmltcG9ydCBVc2VyQ2FyZCBmcm9tIFwiLi4vY29tbW9uL1VzZXJDYXJkXCI7XHJcbmltcG9ydCBDaGFyYWN0ZXJDYXJkIGZyb20gXCIuLi9jb21tb24vQ2hhcmFjdGVyQ2FyZFwiO1xyXG5pbXBvcnQgTG9jYXRpb25DYXJkIGZyb20gXCIuLi9jb21tb24vTG9jYXRpb25DYXJkXCI7XHJcbmltcG9ydCBXaXRoTGluayBmcm9tIFwiLi4vaG9jL1dpdGhMaW5rXCI7XHJcblxyXG5jb25zdCBTdG9yeUdyaWQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxSb3cgZ3V0dGVyPXtbMTYsIDE2XX0+XHJcbiAgICAgIDxDb2wgeHM9ezI0fSBzbT17MTJ9IGxnPXs4fSB4bD17Nn0+XHJcbiAgICAgICAgPENhcmQgLz5cclxuICAgICAgPC9Db2w+XHJcbiAgICAgIDxDb2wgeHM9ezI0fSBzbT17MTJ9IGxnPXs4fSB4bD17Nn0+XHJcbiAgICAgICAgPENhcmQgLz5cclxuICAgICAgPC9Db2w+XHJcbiAgICAgIDxDb2wgeHM9ezI0fSBzbT17MTJ9IGxnPXs4fSB4bD17Nn0+XHJcbiAgICAgICAgPENhcmQgLz5cclxuICAgICAgPC9Db2w+XHJcbiAgICAgIDxDb2wgeHM9ezI0fSBzbT17MTJ9IGxnPXs4fSB4bD17Nn0+XHJcbiAgICAgICAgPENhcmQgLz5cclxuICAgICAgPC9Db2w+XHJcbiAgICAgIDxDb2wgeHM9ezI0fSBzbT17MTJ9IGxnPXs4fSB4bD17Nn0+XHJcbiAgICAgICAgPENhcmQgLz5cclxuICAgICAgPC9Db2w+XHJcbiAgICA8L1Jvdz5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgVXNlckdyaWQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxSb3cgZ3V0dGVyPXtbMjAsIDMwXX0gYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgPENvbCBsZz17NH0gbWQ9ezZ9IHNtPXs4fSB4cz17MTJ9PlxyXG4gICAgICAgIDxVc2VyQ2FyZCAvPlxyXG4gICAgICA8L0NvbD5cclxuICAgICAgPENvbCBsZz17NH0gbWQ9ezZ9IHNtPXs4fSB4cz17MTJ9PlxyXG4gICAgICAgIDxVc2VyQ2FyZCAvPlxyXG4gICAgICA8L0NvbD5cclxuICAgICAgPENvbCBsZz17NH0gbWQ9ezZ9IHNtPXs4fSB4cz17MTJ9PlxyXG4gICAgICAgIDxVc2VyQ2FyZCAvPlxyXG4gICAgICA8L0NvbD5cclxuICAgICAgPENvbCBsZz17NH0gbWQ9ezZ9IHNtPXs4fSB4cz17MTJ9PlxyXG4gICAgICAgIDxVc2VyQ2FyZCAvPlxyXG4gICAgICA8L0NvbD5cclxuICAgICAgPENvbCBsZz17NH0gbWQ9ezZ9IHNtPXs4fSB4cz17MTJ9PlxyXG4gICAgICAgIDxVc2VyQ2FyZCAvPlxyXG4gICAgICA8L0NvbD5cclxuICAgICAgPENvbCBsZz17NH0gbWQ9ezZ9IHNtPXs4fSB4cz17MTJ9PlxyXG4gICAgICAgIDxVc2VyQ2FyZCAvPlxyXG4gICAgICA8L0NvbD5cclxuICAgICAgPENvbCBsZz17NH0gbWQ9ezZ9IHNtPXs4fSB4cz17MTJ9PlxyXG4gICAgICAgIDxVc2VyQ2FyZCAvPlxyXG4gICAgICA8L0NvbD5cclxuICAgICAgPENvbCBsZz17NH0gbWQ9ezZ9IHNtPXs4fSB4cz17MTJ9PlxyXG4gICAgICAgIDxVc2VyQ2FyZCAvPlxyXG4gICAgICA8L0NvbD5cclxuICAgIDwvUm93PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBMb2NhdGlvbkdyaWQgPSAoeyBsb2NhdGlvbnMsIGd1dHRlciwgbGcsIG1kLCBzbSwgeHMsIHR5cGUgfSkgPT4ge1xyXG4gIHJldHVybiBsb2NhdGlvbnMubGVuZ3RoID4gMCA/IChcclxuICAgIDxSb3cgZ3V0dGVyPXtndXR0ZXJ9PlxyXG4gICAgICB7bG9jYXRpb25zLm1hcCgobG9jKSA9PiAoXHJcbiAgICAgICAgPENvbCB4cz17eHN9IHNtPXtzbX0gbWQ9e21kfSBsZz17bGd9IGtleT17bG9jLmlkfT5cclxuICAgICAgICAgIDxMb2NhdGlvbkNhcmQgdHlwZT17dHlwZX0gbG9jYXRpb249e2xvY30gLz5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgKSl9XHJcbiAgICA8L1Jvdz5cclxuICApIDogKFxyXG4gICAgPEVtcHR5XHJcbiAgICAgIGltYWdlPXtFbXB0eS5QUkVTRU5URURfSU1BR0VfU0lNUExFfVxyXG4gICAgICBkZXNjcmlwdGlvbj1cIk5vIGxvY2F0aW9ucyB5ZXRcIlxyXG4gICAgLz5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgQ2hhcmFjdGVyR3JpZCA9ICh7XHJcbiAgZ3V0dGVyLFxyXG4gIHh4bCxcclxuICB4bCxcclxuICBsZyxcclxuICBtZCxcclxuICBzbSxcclxuICB4cyxcclxuICBjaGFyYWN0ZXJzLFxyXG4gIHR5cGUsXHJcbn0pID0+IHtcclxuICByZXR1cm4gY2hhcmFjdGVycy5sZW5ndGggPiAwID8gKFxyXG4gICAgPFJvdyBndXR0ZXI9e2d1dHRlcn0+XHJcbiAgICAgIHtjaGFyYWN0ZXJzPy5tYXAoKGMpID0+IChcclxuICAgICAgICA8Q29sIGtleT17Yy5pZH0geHhsPXt4eGx9IHhsPXt4bH0gbGc9e2xnfSBtZD17bWR9IHNtPXtzbX0geHM9e3hzfT5cclxuICAgICAgICAgIHt0eXBlID09PSBcInNob3dcIiA/IChcclxuICAgICAgICAgICAgPFdpdGhMaW5rIGxpbms9e2AvY2hhcmFjdGVyLyR7Yy5pZH1gfT5cclxuICAgICAgICAgICAgICA8Q2hhcmFjdGVyQ2FyZCBjaGFyYWN0ZXI9e2N9IHR5cGU9e3R5cGV9IC8+XHJcbiAgICAgICAgICAgIDwvV2l0aExpbms+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8Q2hhcmFjdGVyQ2FyZCBjaGFyYWN0ZXI9e2N9IHR5cGU9e3R5cGV9IC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICApKX1cclxuICAgIDwvUm93PlxyXG4gICkgOiAoXHJcbiAgICA8RW1wdHlcclxuICAgICAgaW1hZ2U9e0VtcHR5LlBSRVNFTlRFRF9JTUFHRV9TSU1QTEV9XHJcbiAgICAgIGRlc2NyaXB0aW9uPVwiTm8gY2hhcmFjdGVycyB5ZXRcIlxyXG4gICAgLz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgU3RvcnlHcmlkLCBDaGFyYWN0ZXJHcmlkLCBVc2VyR3JpZCwgTG9jYXRpb25HcmlkIH07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTW9kYWwsIEJ1dHRvbiB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L0xpbmtcIjtcclxuXHJcbmltcG9ydCB7IGR1bW15IH0gZnJvbSBcIi4uLy4uL3V0aWxzL2R1bW15XCI7XHJcblxyXG5jb25zdCBMb2NhdGlvbkNhcmQgPSAoeyBsb2NhdGlvbiwgdHlwZSB9KSA9PiB7XHJcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZmlndXJlXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiY2FyZCBjaGFyYWN0ZXItY2FyZFwiXHJcbiAgICAgICAgZGF0YS1hb3M9XCJ6b29tLWluLXVwXCJcclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRWaXNpYmxlKHRydWUpfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz17bG9jYXRpb24uaW1hZ2UgPyBsb2NhdGlvbi5pbWFnZSA6IGR1bW15Lm5vSW1hZ2V9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGZpZ2NhcHRpb24+XHJcbiAgICAgICAgICA8aDM+e2xvY2F0aW9uLm5hbWV9PC9oMz5cclxuICAgICAgICAgIHt0eXBlICE9PSBcInN0b3J5XCIgJiYgKFxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhdXRob3JcIj5TdG9yeToge2xvY2F0aW9uLnN0b3J5VGl0bGV9PC9zcGFuPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2ZpZ2NhcHRpb24+XHJcbiAgICAgIDwvZmlndXJlPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICB0aXRsZT17bG9jYXRpb24ubmFtZX1cclxuICAgICAgICB2aXNpYmxlPXt2aXNpYmxlfVxyXG4gICAgICAgIG9uQ2FuY2VsPXsoKSA9PiBzZXRWaXNpYmxlKGZhbHNlKX1cclxuICAgICAgICBmb290ZXI9e1tcclxuICAgICAgICAgIDxCdXR0b24ga2V5PVwic3VibWl0XCIgdHlwZT1cInByaW1hcnlcIiBvbkNsaWNrPXsoKSA9PiBzZXRWaXNpYmxlKGZhbHNlKX0+XHJcbiAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICA8L0J1dHRvbj4sXHJcbiAgICAgICAgXX1cclxuICAgICAgPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm1vZGFsLWltZ1wiXHJcbiAgICAgICAgICBzcmM9e2xvY2F0aW9uLmltYWdlID8gbG9jYXRpb24uaW1hZ2UgOiBkdW1teS5ub0ltYWdlfVxyXG4gICAgICAgICAgYWx0PXtsb2NhdGlvbi5uYW1lfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHA+e2xvY2F0aW9uLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICB7dHlwZSAhPT0gXCJzdG9yeVwiICYmIChcclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1vZGFsLXN0b3J5LWxpbmtcIj5cclxuICAgICAgICAgICAgU3Rvcnk6e1wiIFwifVxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtgL3N0b3J5LyR7bG9jYXRpb24uc3RvcnlJZH1gfT5cclxuICAgICAgICAgICAgICA8YT57bG9jYXRpb24uc3RvcnlUaXRsZX08L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICApfVxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvY2F0aW9uQ2FyZDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgUmVwb3J0ID0gKHsgdHlwZSwgZGF0YSB9KSA9PiB7XHJcbiAgcmV0dXJuIDxzcGFuPlJlcG9ydDwvc3Bhbj47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXBvcnQ7XHJcbiIsImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgU3BhY2UgfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuY29uc3QgVXNlckNhcmQgPSAoeyB1c2VyIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPExpbmsgaHJlZj17YC9wcm9maWxlLyR7dXNlci5pZH1gfT5cclxuICAgICAgPGE+XHJcbiAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJ1c2VyLWNhcmRcIiBkYXRhLWFvcz1cImZsaXAtbGVmdFwiPlxyXG4gICAgICAgICAgPFNwYWNlIGRpcmVjdGlvbj1cInZlcnRpY2FsXCIgc2l6ZT17MTJ9IGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIHt1c2VyLmltYWdlID8gKFxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e3VzZXIuaW1hZ2V9IGFsdD17YHBob3RvICR7dXNlci51c2VybmFtZX1gfSAvPlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8aW9uLWljb24gbmFtZT1cInBlcnNvblwiPjwvaW9uLWljb24+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxmaWdjYXB0aW9uPnt1c2VyLnVzZXJuYW1lfTwvZmlnY2FwdGlvbj5cclxuICAgICAgICAgIDwvU3BhY2U+XHJcbiAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgIDwvYT5cclxuICAgIDwvTGluaz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlckNhcmQ7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IExvYWRpbmdTY3JlZW4gPSAoeyBjaGlsZHJlbiwgbG9hZGluZyB9KSA9PiB7XHJcbiAgcmV0dXJuICFsb2FkaW5nID8gKFxyXG4gICAgY2hpbGRyZW5cclxuICApIDogKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkZXItY29udGFpbmVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGVyXCI+XHJcbiAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvYWRpbmdTY3JlZW47XHJcbiIsImltcG9ydCB7IFJlc3VsdCwgQnV0dG9uIH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmNvbnN0IFJlZGlyZWN0Q29tcCA9ICh7IGNvbmRpdGlvbiwgdHlwZSwgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIHJldHVybiBjb25kaXRpb24gPyAoXHJcbiAgICBjaGlsZHJlblxyXG4gICkgOiB0eXBlID09PSBcIjQwNFwiID8gKFxyXG4gICAgPFJlc3VsdFxyXG4gICAgICBzdGF0dXM9XCI0MDRcIlxyXG4gICAgICB0aXRsZT1cIjQwNFwiXHJcbiAgICAgIHN1YlRpdGxlPVwiU29ycnksIHRoZSBwYWdlIHlvdSB2aXNpdGVkIGRvZXMgbm90IGV4aXN0LlwiXHJcbiAgICAgIGV4dHJhPXs8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCI+QmFjayBIb21lPC9CdXR0b24+fVxyXG4gICAgLz5cclxuICApIDogdHlwZSA9PT0gXCI0MDNcIiA/IChcclxuICAgIDxSZXN1bHRcclxuICAgICAgc3RhdHVzPVwiNDAzXCJcclxuICAgICAgdGl0bGU9XCI0MDNcIlxyXG4gICAgICBzdWJUaXRsZT1cIlNvcnJ5LCB5b3UgYXJlIG5vdCBhdXRob3JpemVkIHRvIGFjY2VzcyB0aGlzIHBhZ2UuXCJcclxuICAgICAgZXh0cmE9ezxCdXR0b24gdHlwZT1cInByaW1hcnlcIj5CYWNrIEhvbWU8L0J1dHRvbj59XHJcbiAgICAvPlxyXG4gICkgOiB0eXBlID09PSBcInJlZGlyZWN0XCIgPyAoXHJcbiAgICAod2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9hdXRoXCIpXHJcbiAgKSA6IChcclxuICAgIDxkaXY+PC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZGlyZWN0Q29tcDtcclxuIiwiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuY29uc3QgV2l0aExpbmsgPSAoeyBsaW5rLCBjbGFzc05hbWUsIGNoaWxkcmVuIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPExpbmsgaHJlZj17bGlua30+XHJcbiAgICAgIDxhIGNsYXNzTmFtZT17Y2xhc3NOYW1lfT57Y2hpbGRyZW59PC9hPlxyXG4gICAgPC9MaW5rPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXaXRoTGluaztcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQsIGNyZWF0ZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcclxuaW1wb3J0IHsgYXV0aCwgZGIgfSBmcm9tIFwiLi4vcmVkdXgvZmJDb25maWdcIjtcclxuXHJcbmNvbnN0IGF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFByb3ZpZGVBdXRoKHsgY2hpbGRyZW4gfSkge1xyXG4gIGNvbnN0IGF1dGggPSB1c2VQcm92aWRlQXV0aCgpO1xyXG4gIHJldHVybiA8YXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2F1dGh9PntjaGlsZHJlbn08L2F1dGhDb250ZXh0LlByb3ZpZGVyPjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUF1dGggPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHVzZUNvbnRleHQoYXV0aENvbnRleHQpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gdXNlUHJvdmlkZUF1dGgoKSB7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICAvLyBXcmFwIGFueSBGaXJlYmFzZSBtZXRob2RzIHdlIHdhbnQgdG8gdXNlIG1ha2luZyBzdXJlIC4uLlxyXG4gIC8vIC4uLiB0byBzYXZlIHRoZSB1c2VyIHRvIHN0YXRlLlxyXG4gIGNvbnN0IHNpZ25pbiA9IChlbWFpbCwgcGFzc3dvcmQpID0+IHtcclxuICAgIHJldHVybiBhdXRoLnNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgc2V0VXNlcihyZXNwb25zZS51c2VyKTtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLnVzZXI7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzaWdudXAgPSAoZW1haWwsIHBhc3N3b3JkLCB1c2VybmFtZSkgPT4ge1xyXG4gICAgcmV0dXJuIGF1dGhcclxuICAgICAgLmNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHNldFVzZXIocmVzcG9uc2UudXNlcik7XHJcbiAgICAgICAgZGIuY29sbGVjdGlvbihcInVzZXJzXCIpLmFkZCh7XHJcbiAgICAgICAgICBiYWRnZXM6IFtdLFxyXG4gICAgICAgICAgYmlvZ3JhcGh5OiBcIlwiLFxyXG4gICAgICAgICAgY3JlYXRlZEF0OiBmaXJlYmFzZS5maXJlc3RvcmUuRmllbGRWYWx1ZS5zZXJ2ZXJUaW1lc3RhbXAoKSxcclxuICAgICAgICAgIHN1c3BlbmRlZDogZmFsc2UsXHJcbiAgICAgICAgICBmYWNlYm9vazogXCJcIixcclxuICAgICAgICAgIGluc3RhZ3JhbTogXCJcIixcclxuICAgICAgICAgIHR3aXR0ZXI6IFwiXCIsXHJcbiAgICAgICAgICBkZXZpYW50YXJ0OiBcIlwiLFxyXG4gICAgICAgICAgbGlrZXNDb3VudDogXCJcIixcclxuICAgICAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSxcclxuICAgICAgICAgIGltYWdlOiBcIlwiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZS51c2VyO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzaWdub3V0ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGF1dGguc2lnbk91dCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICBzZXRVc2VyKGZhbHNlKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNlbmRQYXNzd29yZFJlc2V0RW1haWwgPSAoZW1haWwpID0+IHtcclxuICAgIHJldHVybiBhdXRoLnNlbmRQYXNzd29yZFJlc2V0RW1haWwoZW1haWwpLnRoZW4oKCkgPT4ge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNvbmZpcm1QYXNzd29yZFJlc2V0ID0gKGNvZGUsIHBhc3N3b3JkKSA9PiB7XHJcbiAgICByZXR1cm4gYXV0aC5jb25maXJtUGFzc3dvcmRSZXNldChjb2RlLCBwYXNzd29yZCkudGhlbigoKSA9PiB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHVuc3Vic2NyaWJlID0gYXV0aC5vbkF1dGhTdGF0ZUNoYW5nZWQoKHVzZXIpID0+IHtcclxuICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICBzZXRVc2VyKHVzZXIpO1xyXG4gICAgICAgIGlmICh1c2VyLnVpZCkge1xyXG4gICAgICAgICAgbGV0IHVzZXJuYW1lID0gXCJcIjtcclxuICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICBkYi5jb2xsZWN0aW9uKFwidXNlcnNcIilcclxuICAgICAgICAgICAgLmRvYyh1c2VyLnVpZClcclxuICAgICAgICAgICAgLm9uU25hcHNob3QoKGRvYykgPT4ge1xyXG4gICAgICAgICAgICAgIHVzZXJuYW1lID0gZG9jLmRhdGEoKS51c2VybmFtZTtcclxuICAgICAgICAgICAgICBzZXRVc2VyKHsgLi4udXNlciwgdXNlcm5hbWUsIGltYWdlOiBkb2MuZGF0YSgpLmltYWdlIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0VXNlcihmYWxzZSk7XHJcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQ2xlYW51cCBzdWJzY3JpcHRpb24gb24gdW5tb3VudFxyXG4gICAgcmV0dXJuICgpID0+IHVuc3Vic2NyaWJlKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICAvLyBSZXR1cm4gdGhlIHVzZXIgb2JqZWN0IGFuZCBhdXRoIG1ldGhvZHNcclxuICByZXR1cm4ge1xyXG4gICAgaXNMb2FkaW5nLFxyXG4gICAgdXNlcixcclxuICAgIHNpZ25pbixcclxuICAgIHNpZ251cCxcclxuICAgIHNpZ25vdXQsXHJcbiAgICBzZW5kUGFzc3dvcmRSZXNldEVtYWlsLFxyXG4gICAgY29uZmlybVBhc3N3b3JkUmVzZXQsXHJcbiAgfTtcclxufVxyXG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIGFkZEJhc2VQYXRoLFxuICBhZGRMb2NhbGUsXG4gIGlzTG9jYWxVUkwsXG4gIE5leHRSb3V0ZXIsXG4gIFByZWZldGNoT3B0aW9ucyxcbiAgcmVzb2x2ZUhyZWYsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIFJlcXVpcmVkS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gbmV2ZXIgOiBLXG59W2tleW9mIFRdXG50eXBlIE9wdGlvbmFsS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gSyA6IG5ldmVyXG59W2tleW9mIFRdXG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxufVxudHlwZSBMaW5rUHJvcHNSZXF1aXJlZCA9IFJlcXVpcmVkS2V5czxMaW5rUHJvcHM+XG50eXBlIExpbmtQcm9wc09wdGlvbmFsID0gT3B0aW9uYWxLZXlzPExpbmtQcm9wcz5cblxubGV0IGNhY2hlZE9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuY29uc3QgbGlzdGVuZXJzID0gbmV3IE1hcDxFbGVtZW50LCAoKSA9PiB2b2lkPigpXG5jb25zdCBJbnRlcnNlY3Rpb25PYnNlcnZlciA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyIDogbnVsbFxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIGdldE9ic2VydmVyKCk6IEludGVyc2VjdGlvbk9ic2VydmVyIHwgdW5kZWZpbmVkIHtcbiAgLy8gUmV0dXJuIHNoYXJlZCBpbnN0YW5jZSBvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBhbHJlYWR5IGNyZWF0ZWRcbiAgaWYgKGNhY2hlZE9ic2VydmVyKSB7XG4gICAgcmV0dXJuIGNhY2hlZE9ic2VydmVyXG4gIH1cblxuICAvLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbiAgaWYgKCFJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHJldHVybiAoY2FjaGVkT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgKGVudHJpZXMpID0+IHtcbiAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgaWYgKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNiID0gbGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpIVxuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwKSB7XG4gICAgICAgICAgY2FjaGVkT2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBjYigpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICB7IHJvb3RNYXJnaW46ICcyMDBweCcgfVxuICApKVxufVxuXG5jb25zdCBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMgPSAoZWw6IEVsZW1lbnQsIGNiOiAoKSA9PiB2b2lkKSA9PiB7XG4gIGNvbnN0IG9ic2VydmVyID0gZ2V0T2JzZXJ2ZXIoKVxuICBpZiAoIW9ic2VydmVyKSB7XG4gICAgcmV0dXJuICgpID0+IHt9XG4gIH1cblxuICBvYnNlcnZlci5vYnNlcnZlKGVsKVxuICBsaXN0ZW5lcnMuc2V0KGVsLCBjYilcbiAgcmV0dXJuICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgfVxuICAgIGxpc3RlbmVycy5kZWxldGUoZWwpXG4gIH1cbn1cblxuZnVuY3Rpb24gcHJlZmV0Y2goXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zXG4pOiB2b2lkIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm5cbiAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfSlcbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgcmV0dXJuIChcbiAgICAodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICBldmVudC5tZXRhS2V5IHx8XG4gICAgZXZlbnQuY3RybEtleSB8fFxuICAgIGV2ZW50LnNoaWZ0S2V5IHx8XG4gICAgZXZlbnQuYWx0S2V5IHx8IC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG4gICAgKGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKVxuICApXG59XG5cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKFxuICBlOiBSZWFjdC5Nb3VzZUV2ZW50LFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgcmVwbGFjZT86IGJvb2xlYW4sXG4gIHNoYWxsb3c/OiBib29sZWFuLFxuICBzY3JvbGw/OiBib29sZWFuXG4pOiB2b2lkIHtcbiAgY29uc3QgeyBub2RlTmFtZSB9ID0gZS5jdXJyZW50VGFyZ2V0XG5cbiAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICByZXR1cm5cbiAgfVxuXG4gIGUucHJldmVudERlZmF1bHQoKVxuXG4gIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gIH1cblxuICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7IHNoYWxsb3cgfSkudGhlbihcbiAgICAoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKCFzdWNjZXNzKSByZXR1cm5cbiAgICAgIGlmIChzY3JvbGwpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKVxuICAgICAgfVxuICAgIH1cbiAgKVxufVxuXG5mdW5jdGlvbiBMaW5rKHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxMaW5rUHJvcHM+KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3M6IHtcbiAgICAgIGtleTogc3RyaW5nXG4gICAgICBleHBlY3RlZDogc3RyaW5nXG4gICAgICBhY3R1YWw6IHN0cmluZ1xuICAgIH0pIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICtcbiAgICAgICAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiXG4gICAgICAgICAgICA6ICcnKVxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzUmVxdWlyZWQsIHRydWU+ID0ge1xuICAgICAgaHJlZjogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wczogTGlua1Byb3BzUmVxdWlyZWRbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgcmVxdWlyZWRQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNSZXF1aXJlZFtdXG4gICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc1JlcXVpcmVkKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gPT0gbnVsbCB8fFxuICAgICAgICAgICh0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzT3B0aW9uYWwsIHRydWU+ID0ge1xuICAgICAgYXM6IHRydWUsXG4gICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHM6IExpbmtQcm9wc09wdGlvbmFsW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIG9wdGlvbmFsUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzT3B0aW9uYWxbXVxuICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNPcHRpb25hbCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSAmJlxuICAgICAgICAgIHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJlxuICAgICAgICAgIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0J1xuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGtleSA9PT0gJ3JlcGxhY2UnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Njcm9sbCcgfHxcbiAgICAgICAga2V5ID09PSAnc2hhbGxvdycgfHxcbiAgICAgICAga2V5ID09PSAncGFzc0hyZWYnIHx8XG4gICAgICAgIGtleSA9PT0gJ3ByZWZldGNoJ1xuICAgICAgKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdib29sZWFuJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IFtjaGlsZEVsbSwgc2V0Q2hpbGRFbG1dID0gUmVhY3QudXNlU3RhdGU8RWxlbWVudD4oKVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIucGF0aG5hbWUpIHx8ICcvJ1xuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYsIHRydWUpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hc1xuICAgICAgICA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcylcbiAgICAgICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZixcbiAgICB9XG4gIH0sIFtwYXRobmFtZSwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKFxuICAgICAgcCAmJlxuICAgICAgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgJiZcbiAgICAgIGNoaWxkRWxtICYmXG4gICAgICBjaGlsZEVsbS50YWdOYW1lICYmXG4gICAgICBpc0xvY2FsVVJMKGhyZWYpXG4gICAgKSB7XG4gICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgY29uc3QgaXNQcmVmZXRjaGVkID0gcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdXG4gICAgICBpZiAoIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgICByZXR1cm4gbGlzdGVuVG9JbnRlcnNlY3Rpb25zKGNoaWxkRWxtLCAoKSA9PiB7XG4gICAgICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcylcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtwLCBjaGlsZEVsbSwgaHJlZiwgYXMsIHJvdXRlcl0pXG5cbiAgbGV0IHsgY2hpbGRyZW4sIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCB9ID0gcHJvcHNcbiAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICB9XG5cbiAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICBjb25zdCBjaGlsZFByb3BzOiB7XG4gICAgb25Nb3VzZUVudGVyPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIGhyZWY/OiBzdHJpbmdcbiAgICByZWY/OiBhbnlcbiAgfSA9IHtcbiAgICByZWY6IChlbDogYW55KSA9PiB7XG4gICAgICBpZiAoZWwpIHNldENoaWxkRWxtKGVsKVxuXG4gICAgICBpZiAoY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkLnJlZihlbClcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjaGlsZC5yZWYuY3VycmVudCA9IGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgfVxuICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsKVxuICAgICAgfVxuICAgIH0sXG4gIH1cblxuICBpZiAocCkge1xuICAgIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICAgIH1cbiAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgICB9XG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjaGlsZFByb3BzLmhyZWYgPSBhZGRCYXNlUGF0aChcbiAgICAgIGFkZExvY2FsZShhcywgcm91dGVyICYmIHJvdXRlci5sb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZSlcbiAgICApXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoXG59XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIXG4gID8gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpXG4gICAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLydcbiAgICAgIH1cbiAgICB9XG4gIDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2hcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuICAnbG9jYWxlJyxcbiAgJ2xvY2FsZXMnLFxuICAnZGVmYXVsdExvY2FsZScsXG5dXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICdoYXNoQ2hhbmdlQ29tcGxldGUnLFxuXVxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgJ3B1c2gnLFxuICAncmVwbGFjZScsXG4gICdyZWxvYWQnLFxuICAnYmFjaycsXG4gICdwcmVmZXRjaCcsXG4gICdiZWZvcmVQb3BTdGF0ZScsXG5dXG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUm91dGVyLmV2ZW50c1xuICB9LFxufSlcblxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoXG4gICAgICAgIDFcbiAgICAgICl9YFxuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnlcbiAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25Sb3V0ZXIgYXMgU2luZ2xldG9uUm91dGVyXG5cbi8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhSb3V0ZXIgfSBmcm9tICcuL3dpdGgtcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUm91dGVyKCk6IE5leHRSb3V0ZXIge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChSb3V0ZXJDb250ZXh0KVxufVxuXG4vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcblxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY29uc3QgY3JlYXRlUm91dGVyID0gKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgQXJyYXkuaXNBcnJheShfcm91dGVyW3Byb3BlcnR5XSkgPyBbXSA6IHt9LFxuICAgICAgICBfcm91dGVyW3Byb3BlcnR5XVxuICAgICAgKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpIHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogVG9rZW5pemUgaW5wdXQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBsZXhlcihzdHIpIHtcbiAgICB2YXIgdG9rZW5zID0gW107XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHN0cltpXTtcbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKlwiIHx8IGNoYXIgPT09IFwiK1wiIHx8IGNoYXIgPT09IFwiP1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTU9ESUZJRVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVTQ0FQRURfQ0hBUlwiLCBpbmRleDogaSsrLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ7XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJPUEVOXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ9XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDTE9TRVwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiOlwiKSB7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvZGUgPSBzdHIuY2hhckNvZGVBdChqKTtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgLy8gYDAtOWBcbiAgICAgICAgICAgICAgICAoY29kZSA+PSA0OCAmJiBjb2RlIDw9IDU3KSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgQS1aYFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA2NSAmJiBjb2RlIDw9IDkwKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgYS16YFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA5NyAmJiBjb2RlIDw9IDEyMikgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYF9gXG4gICAgICAgICAgICAgICAgICAgIGNvZGUgPT09IDk1KSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUgKz0gc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghbmFtZSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXJhbWV0ZXIgbmFtZSBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk5BTUVcIiwgaW5kZXg6IGksIHZhbHVlOiBuYW1lIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgIHZhciBjb3VudCA9IDE7XG4gICAgICAgICAgICB2YXIgcGF0dGVybiA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUGF0dGVybiBjYW5ub3Qgc3RhcnQgd2l0aCBcXFwiP1xcXCIgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK10gKyBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiKVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50LS07XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc3RyW2pdID09PSBcIihcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RyW2ogKyAxXSAhPT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYXB0dXJpbmcgZ3JvdXBzIGFyZSBub3QgYWxsb3dlZCBhdCBcIiArIGopO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY291bnQpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuYmFsYW5jZWQgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgaWYgKCFwYXR0ZXJuKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJQQVRURVJOXCIsIGluZGV4OiBpLCB2YWx1ZTogcGF0dGVybiB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNIQVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICB9XG4gICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVORFwiLCBpbmRleDogaSwgdmFsdWU6IFwiXCIgfSk7XG4gICAgcmV0dXJuIHRva2Vucztcbn1cbi8qKlxuICogUGFyc2UgYSBzdHJpbmcgZm9yIHRoZSByYXcgdG9rZW5zLlxuICovXG5mdW5jdGlvbiBwYXJzZShzdHIsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciB0b2tlbnMgPSBsZXhlcihzdHIpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMucHJlZml4ZXMsIHByZWZpeGVzID0gX2EgPT09IHZvaWQgMCA/IFwiLi9cIiA6IF9hO1xuICAgIHZhciBkZWZhdWx0UGF0dGVybiA9IFwiW15cIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXSs/XCI7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBrZXkgPSAwO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgdmFyIHRyeUNvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICBpZiAoaSA8IHRva2Vucy5sZW5ndGggJiYgdG9rZW5zW2ldLnR5cGUgPT09IHR5cGUpXG4gICAgICAgICAgICByZXR1cm4gdG9rZW5zW2krK10udmFsdWU7XG4gICAgfTtcbiAgICB2YXIgbXVzdENvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICB2YXIgdmFsdWUgPSB0cnlDb25zdW1lKHR5cGUpO1xuICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgdmFyIF9hID0gdG9rZW5zW2ldLCBuZXh0VHlwZSA9IF9hLnR5cGUsIGluZGV4ID0gX2EuaW5kZXg7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmV4cGVjdGVkIFwiICsgbmV4dFR5cGUgKyBcIiBhdCBcIiArIGluZGV4ICsgXCIsIGV4cGVjdGVkIFwiICsgdHlwZSk7XG4gICAgfTtcbiAgICB2YXIgY29uc3VtZVRleHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBcIlwiO1xuICAgICAgICB2YXIgdmFsdWU7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICB3aGlsZSAoKHZhbHVlID0gdHJ5Q29uc3VtZShcIkNIQVJcIikgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKSkpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgd2hpbGUgKGkgPCB0b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gdHJ5Q29uc3VtZShcIkNIQVJcIik7XG4gICAgICAgIHZhciBuYW1lID0gdHJ5Q29uc3VtZShcIk5BTUVcIik7XG4gICAgICAgIHZhciBwYXR0ZXJuID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIik7XG4gICAgICAgIGlmIChuYW1lIHx8IHBhdHRlcm4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjaGFyIHx8IFwiXCI7XG4gICAgICAgICAgICBpZiAocHJlZml4ZXMuaW5kZXhPZihwcmVmaXgpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gcHJlZml4O1xuICAgICAgICAgICAgICAgIHByZWZpeCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUgfHwga2V5KyssXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IHBhdHRlcm4gfHwgZGVmYXVsdFBhdHRlcm4sXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciB2YWx1ZSA9IGNoYXIgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKTtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBwYXRoICs9IHZhbHVlO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG9wZW4gPSB0cnlDb25zdW1lKFwiT1BFTlwiKTtcbiAgICAgICAgaWYgKG9wZW4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgdmFyIG5hbWVfMSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgcGF0dGVybl8xID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgbXVzdENvbnN1bWUoXCJDTE9TRVwiKTtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lXzEgfHwgKHBhdHRlcm5fMSA/IGtleSsrIDogXCJcIiksXG4gICAgICAgICAgICAgICAgcGF0dGVybjogbmFtZV8xICYmICFwYXR0ZXJuXzEgPyBkZWZhdWx0UGF0dGVybiA6IHBhdHRlcm5fMSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IHN1ZmZpeCxcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgbXVzdENvbnN1bWUoXCJFTkRcIik7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnRzLnBhcnNlID0gcGFyc2U7XG4vKipcbiAqIENvbXBpbGUgYSBzdHJpbmcgdG8gYSB0ZW1wbGF0ZSBmdW5jdGlvbiBmb3IgdGhlIHBhdGguXG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGUoc3RyLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvRnVuY3Rpb24ocGFyc2Uoc3RyLCBvcHRpb25zKSwgb3B0aW9ucyk7XG59XG5leHBvcnRzLmNvbXBpbGUgPSBjb21waWxlO1xuLyoqXG4gKiBFeHBvc2UgYSBtZXRob2QgZm9yIHRyYW5zZm9ybWluZyB0b2tlbnMgaW50byB0aGUgcGF0aCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9GdW5jdGlvbih0b2tlbnMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciByZUZsYWdzID0gZmxhZ3Mob3B0aW9ucyk7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hLCBfYiA9IG9wdGlvbnMudmFsaWRhdGUsIHZhbGlkYXRlID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYjtcbiAgICAvLyBDb21waWxlIGFsbCB0aGUgdG9rZW5zIGludG8gcmVnZXhwcy5cbiAgICB2YXIgbWF0Y2hlcyA9IHRva2Vucy5tYXAoZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKFwiXig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSRcIiwgcmVGbGFncyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgdmFyIHBhdGggPSBcIlwiO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zW2ldO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW47XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBkYXRhID8gZGF0YVt0b2tlbi5uYW1lXSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHZhciBvcHRpb25hbCA9IHRva2VuLm1vZGlmaWVyID09PSBcIj9cIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCI7XG4gICAgICAgICAgICB2YXIgcmVwZWF0ID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIitcIjtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGlmICghcmVwZWF0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCBiZSBlbXB0eVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB2YWx1ZS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZSh2YWx1ZVtqXSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIGFsbCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZShTdHJpbmcodmFsdWUpLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB2YXIgdHlwZU9mTWVzc2FnZSA9IHJlcGVhdCA/IFwiYW4gYXJyYXlcIiA6IFwiYSBzdHJpbmdcIjtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIGJlIFwiICsgdHlwZU9mTWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfTtcbn1cbmV4cG9ydHMudG9rZW5zVG9GdW5jdGlvbiA9IHRva2Vuc1RvRnVuY3Rpb247XG4vKipcbiAqIENyZWF0ZSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBzcGVjLlxuICovXG5mdW5jdGlvbiBtYXRjaChzdHIsIG9wdGlvbnMpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIHZhciByZSA9IHBhdGhUb1JlZ2V4cChzdHIsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMubWF0Y2ggPSBtYXRjaDtcbi8qKlxuICogQ3JlYXRlIGEgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgb3V0cHV0LlxuICovXG5mdW5jdGlvbiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLmRlY29kZSwgZGVjb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2E7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwYXRobmFtZSkge1xuICAgICAgICB2YXIgbSA9IHJlLmV4ZWMocGF0aG5hbWUpO1xuICAgICAgICBpZiAoIW0pXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHZhciBwYXRoID0gbVswXSwgaW5kZXggPSBtLmluZGV4O1xuICAgICAgICB2YXIgcGFyYW1zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICBpZiAobVtpXSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIHJldHVybiBcImNvbnRpbnVlXCI7XG4gICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tpIC0gMV07XG4gICAgICAgICAgICBpZiAoa2V5Lm1vZGlmaWVyID09PSBcIipcIiB8fCBrZXkubW9kaWZpZXIgPT09IFwiK1wiKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IG1baV0uc3BsaXQoa2V5LnByZWZpeCArIGtleS5zdWZmaXgpLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZSh2YWx1ZSwga2V5KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBkZWNvZGUobVtpXSwga2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBtLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBfbG9vcF8xKGkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHBhdGg6IHBhdGgsIGluZGV4OiBpbmRleCwgcGFyYW1zOiBwYXJhbXMgfTtcbiAgICB9O1xufVxuZXhwb3J0cy5yZWdleHBUb0Z1bmN0aW9uID0gcmVnZXhwVG9GdW5jdGlvbjtcbi8qKlxuICogRXNjYXBlIGEgcmVndWxhciBleHByZXNzaW9uIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gZXNjYXBlU3RyaW5nKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFsuKyo/PV4hOiR7fSgpW1xcXXwvXFxcXF0pL2csIFwiXFxcXCQxXCIpO1xufVxuLyoqXG4gKiBHZXQgdGhlIGZsYWdzIGZvciBhIHJlZ2V4cCBmcm9tIHRoZSBvcHRpb25zLlxuICovXG5mdW5jdGlvbiBmbGFncyhvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMgJiYgb3B0aW9ucy5zZW5zaXRpdmUgPyBcIlwiIDogXCJpXCI7XG59XG4vKipcbiAqIFB1bGwgb3V0IGtleXMgZnJvbSBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cykge1xuICAgIGlmICgha2V5cylcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgLy8gVXNlIGEgbmVnYXRpdmUgbG9va2FoZWFkIHRvIG1hdGNoIG9ubHkgY2FwdHVyaW5nIGdyb3Vwcy5cbiAgICB2YXIgZ3JvdXBzID0gcGF0aC5zb3VyY2UubWF0Y2goL1xcKCg/IVxcPykvZyk7XG4gICAgaWYgKGdyb3Vwcykge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdyb3Vwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAga2V5cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBpLFxuICAgICAgICAgICAgICAgIHByZWZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG4vKipcbiAqIFRyYW5zZm9ybSBhbiBhcnJheSBpbnRvIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiBhcnJheVRvUmVnZXhwKHBhdGhzLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgdmFyIHBhcnRzID0gcGF0aHMubWFwKGZ1bmN0aW9uIChwYXRoKSB7IHJldHVybiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykuc291cmNlOyB9KTtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChcIig/OlwiICsgcGFydHMuam9pbihcInxcIikgKyBcIilcIiwgZmxhZ3Mob3B0aW9ucykpO1xufVxuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIHJlZ2V4cCBmcm9tIHN0cmluZyBpbnB1dC5cbiAqL1xuZnVuY3Rpb24gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb1JlZ2V4cChwYXJzZShwYXRoLCBvcHRpb25zKSwga2V5cywgb3B0aW9ucyk7XG59XG4vKipcbiAqIEV4cG9zZSBhIGZ1bmN0aW9uIGZvciB0YWtpbmcgdG9rZW5zIGFuZCByZXR1cm5pbmcgYSBSZWdFeHAuXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvUmVnZXhwKHRva2Vucywga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5zdHJpY3QsIHN0cmljdCA9IF9hID09PSB2b2lkIDAgPyBmYWxzZSA6IF9hLCBfYiA9IG9wdGlvbnMuc3RhcnQsIHN0YXJ0ID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYiwgX2MgPSBvcHRpb25zLmVuZCwgZW5kID0gX2MgPT09IHZvaWQgMCA/IHRydWUgOiBfYywgX2QgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2QgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2Q7XG4gICAgdmFyIGVuZHNXaXRoID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5lbmRzV2l0aCB8fCBcIlwiKSArIFwiXXwkXCI7XG4gICAgdmFyIGRlbGltaXRlciA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdXCI7XG4gICAgdmFyIHJvdXRlID0gc3RhcnQgPyBcIl5cIiA6IFwiXCI7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIHRoZSB0b2tlbnMgYW5kIGNyZWF0ZSBvdXIgcmVnZXhwIHN0cmluZy5cbiAgICBmb3IgKHZhciBfaSA9IDAsIHRva2Vuc18xID0gdG9rZW5zOyBfaSA8IHRva2Vuc18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNfMVtfaV07XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4pKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnByZWZpeCkpO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4uc3VmZml4KSk7XG4gICAgICAgICAgICBpZiAodG9rZW4ucGF0dGVybikge1xuICAgICAgICAgICAgICAgIGlmIChrZXlzKVxuICAgICAgICAgICAgICAgICAgICBrZXlzLnB1c2godG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmIChwcmVmaXggfHwgc3VmZml4KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbi5tb2RpZmllciA9PT0gXCIrXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbW9kID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiID8gXCI/XCIgOiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKCg/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSg/OlwiICsgc3VmZml4ICsgcHJlZml4ICsgXCIoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikpKilcIiArIHN1ZmZpeCArIFwiKVwiICsgbW9kO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZW5kKSB7XG4gICAgICAgIGlmICghc3RyaWN0KVxuICAgICAgICAgICAgcm91dGUgKz0gZGVsaW1pdGVyICsgXCI/XCI7XG4gICAgICAgIHJvdXRlICs9ICFvcHRpb25zLmVuZHNXaXRoID8gXCIkXCIgOiBcIig/PVwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBlbmRUb2tlbiA9IHRva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMV07XG4gICAgICAgIHZhciBpc0VuZERlbGltaXRlZCA9IHR5cGVvZiBlbmRUb2tlbiA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgICAgPyBkZWxpbWl0ZXIuaW5kZXhPZihlbmRUb2tlbltlbmRUb2tlbi5sZW5ndGggLSAxXSkgPiAtMVxuICAgICAgICAgICAgOiAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgICAgICBlbmRUb2tlbiA9PT0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAoIXN0cmljdCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIGRlbGltaXRlciArIFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKSk/XCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc0VuZERlbGltaXRlZCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPz1cIiArIGRlbGltaXRlciArIFwifFwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3IFJlZ0V4cChyb3V0ZSwgZmxhZ3Mob3B0aW9ucykpO1xufVxuZXhwb3J0cy50b2tlbnNUb1JlZ2V4cCA9IHRva2Vuc1RvUmVnZXhwO1xuLyoqXG4gKiBOb3JtYWxpemUgdGhlIGdpdmVuIHBhdGggc3RyaW5nLCByZXR1cm5pbmcgYSByZWd1bGFyIGV4cHJlc3Npb24uXG4gKlxuICogQW4gZW1wdHkgYXJyYXkgY2FuIGJlIHBhc3NlZCBpbiBmb3IgdGhlIGtleXMsIHdoaWNoIHdpbGwgaG9sZCB0aGVcbiAqIHBsYWNlaG9sZGVyIGtleSBkZXNjcmlwdGlvbnMuIEZvciBleGFtcGxlLCB1c2luZyBgL3VzZXIvOmlkYCwgYGtleXNgIHdpbGxcbiAqIGNvbnRhaW4gYFt7IG5hbWU6ICdpZCcsIGRlbGltaXRlcjogJy8nLCBvcHRpb25hbDogZmFsc2UsIHJlcGVhdDogZmFsc2UgfV1gLlxuICovXG5mdW5jdGlvbiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChwYXRoIGluc3RhbmNlb2YgUmVnRXhwKVxuICAgICAgICByZXR1cm4gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cyk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocGF0aCkpXG4gICAgICAgIHJldHVybiBhcnJheVRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMucGF0aFRvUmVnZXhwID0gcGF0aFRvUmVnZXhwO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqL1xuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoLFxuICByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCxcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcbmltcG9ydCB7IEdvb2RQYWdlQ2FjaGUsIFN0eWxlU2hlZXRUdXBsZSB9IGZyb20gJy4uLy4uLy4uL2NsaWVudC9wYWdlLWxvYWRlcidcbmltcG9ydCB7IGRlbm9ybWFsaXplUGFnZVBhdGggfSBmcm9tICcuLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vdXRpbHMvcXVlcnlzdHJpbmcnXG5pbXBvcnQgcmVzb2x2ZVJld3JpdGVzIGZyb20gJy4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuaW1wb3J0IGVzY2FwZVBhdGhEZWxpbWl0ZXJzIGZyb20gJy4vdXRpbHMvZXNjYXBlLXBhdGgtZGVsaW1pdGVycydcblxuaW50ZXJmYWNlIFRyYW5zaXRpb25PcHRpb25zIHtcbiAgc2hhbGxvdz86IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIE5leHRIaXN0b3J5U3RhdGUge1xuICB1cmw6IHN0cmluZ1xuICBhczogc3RyaW5nXG4gIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG59XG5cbnR5cGUgSGlzdG9yeVN0YXRlID0gbnVsbCB8IHsgX19OOiBmYWxzZSB9IHwgKHsgX19OOiB0cnVlIH0gJiBOZXh0SGlzdG9yeVN0YXRlKVxuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgIGNhbmNlbGxlZDogdHJ1ZSxcbiAgfSlcbn1cblxuZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoOiBzdHJpbmcsIHByZWZpeD86IHN0cmluZykge1xuICByZXR1cm4gcHJlZml4ICYmIHBhdGguc3RhcnRzV2l0aCgnLycpXG4gICAgPyBwYXRoID09PSAnLydcbiAgICAgID8gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gocHJlZml4KVxuICAgICAgOiBgJHtwcmVmaXh9JHtwYXRofWBcbiAgICA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZExvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcsXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX2kxOG5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiYgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmICFwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlKVxuICAgICAgPyBhZGRQYXRoUHJlZml4KHBhdGgsICcvJyArIGxvY2FsZSlcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxMb2NhbGUocGF0aDogc3RyaW5nLCBsb2NhbGU/OiBzdHJpbmcpIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9pMThuX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmIHBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUpXG4gICAgICA/IHBhdGguc3Vic3RyKGxvY2FsZS5sZW5ndGggKyAxKSB8fCAnLydcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbn1cblxuLyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSkgcmV0dXJuIHRydWVcbiAgdHJ5IHtcbiAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSlcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKFxuICByb3V0ZTogc3RyaW5nLFxuICBhc1BhdGhuYW1lOiBzdHJpbmcsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKSB7XG4gIGxldCBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnXG5cbiAgY29uc3QgZHluYW1pY1JlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgY29uc3QgZHluYW1pY0dyb3VwcyA9IGR5bmFtaWNSZWdleC5ncm91cHNcbiAgY29uc3QgZHluYW1pY01hdGNoZXMgPVxuICAgIC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyBnZXRSb3V0ZU1hdGNoZXIoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKSA6ICcnKSB8fFxuICAgIC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuICAgIC8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbiAgICBxdWVyeVxuXG4gIGludGVycG9sYXRlZFJvdXRlID0gcm91dGVcbiAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3VwcylcblxuICBpZiAoXG4gICAgIXBhcmFtcy5ldmVyeSgocGFyYW0pID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IGR5bmFtaWNNYXRjaGVzW3BhcmFtXSB8fCAnJ1xuICAgICAgY29uc3QgeyByZXBlYXQsIG9wdGlvbmFsIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXVxuXG4gICAgICAvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbiAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgIGxldCByZXBsYWNlZCA9IGBbJHtyZXBlYXQgPyAnLi4uJyA6ICcnfSR7cGFyYW19XWBcbiAgICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gXG4gICAgICB9XG4gICAgICBpZiAocmVwZWF0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSBbdmFsdWVdXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIChvcHRpb25hbCB8fCBwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykgJiZcbiAgICAgICAgLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG4gICAgICAgIChpbnRlcnBvbGF0ZWRSb3V0ZSA9XG4gICAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUhLnJlcGxhY2UoXG4gICAgICAgICAgICByZXBsYWNlZCxcbiAgICAgICAgICAgIHJlcGVhdFxuICAgICAgICAgICAgICA/ICh2YWx1ZSBhcyBzdHJpbmdbXSkubWFwKGVzY2FwZVBhdGhEZWxpbWl0ZXJzKS5qb2luKCcvJylcbiAgICAgICAgICAgICAgOiBlc2NhcGVQYXRoRGVsaW1pdGVycyh2YWx1ZSBhcyBzdHJpbmcpXG4gICAgICAgICAgKSB8fCAnLycpXG4gICAgICApXG4gICAgfSlcbiAgKSB7XG4gICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuXG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICB9XG4gIHJldHVybiB7XG4gICAgcGFyYW1zLFxuICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGUsXG4gIH1cbn1cblxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSwgcGFyYW1zOiBzdHJpbmdbXSkge1xuICBjb25zdCBmaWx0ZXJlZFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG5cbiAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmICghcGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgIGZpbHRlcmVkUXVlcnlba2V5XSA9IHF1ZXJ5W2tleV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBmaWx0ZXJlZFF1ZXJ5XG59XG5cbi8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSHJlZihcbiAgY3VycmVudFBhdGg6IHN0cmluZyxcbiAgaHJlZjogVXJsLFxuICByZXNvbHZlQXM/OiBib29sZWFuXG4pOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBjb25zdCBiYXNlID0gbmV3IFVSTChjdXJyZW50UGF0aCwgJ2h0dHA6Ly9uJylcbiAgY29uc3QgdXJsQXNTdHJpbmcgPVxuICAgIHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnXG5cbiAgICBpZiAoXG4gICAgICBpc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiZcbiAgICAgIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJlxuICAgICAgcmVzb2x2ZUFzXG4gICAgKSB7XG4gICAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKVxuXG4gICAgICBjb25zdCB7IHJlc3VsdCwgcGFyYW1zIH0gPSBpbnRlcnBvbGF0ZUFzKFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5XG4gICAgICApXG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcyksXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPVxuICAgICAgZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICAgICAgOiBmaW5hbFVybC5ocmVmXG5cbiAgICByZXR1cm4gKHJlc29sdmVBc1xuICAgICAgPyBbcmVzb2x2ZWRIcmVmLCBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZdXG4gICAgICA6IHJlc29sdmVkSHJlZikgYXMgc3RyaW5nXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbn1cblxuY29uc3QgUEFHRV9MT0FEX0VSUk9SID0gU3ltYm9sKCdQQUdFX0xPQURfRVJST1InKVxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtMb2FkaW5nRXJyb3IoZXJyOiBFcnJvcik6IEVycm9yIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIFBBR0VfTE9BRF9FUlJPUiwge30pXG59XG5cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXI6IE5leHRSb3V0ZXIsIHVybDogVXJsLCBhczogVXJsKSB7XG4gIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICByZXR1cm4ge1xuICAgIHVybDogYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCB1cmwpKSxcbiAgICBhczogYXMgPyBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIGFzKSkgOiBhcyxcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzID0gUGljazxQcml2YXRlUm91dGVJbmZvLCAnQ29tcG9uZW50JyB8ICdlcnInPiAmIHtcbiAgcm91dGVyOiBSb3V0ZXJcbn0gJiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5leHBvcnQgdHlwZSBBcHBDb21wb25lbnQgPSBDb21wb25lbnRUeXBlPEFwcFByb3BzPlxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChkYXRhOiBQcml2YXRlUm91dGVJbmZvLCBBcHA6IEFwcENvbXBvbmVudCkgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IE5leHRIaXN0b3J5U3RhdGUpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5XG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzLmpzb24oKVxuICB9KVxufVxuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmOiBzdHJpbmcsIGlzU2VydmVyUmVuZGVyOiBib29sZWFuKSB7XG4gIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgLy8gbG9vcC5cbiAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICBtYXJrTG9hZGluZ0Vycm9yKGVycilcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFByaXZhdGVSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuICBfaW5GbGlnaHRSb3V0ZT86IHN0cmluZ1xuICBfc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgaW5pdGlhbFN0eWxlU2hlZXRzLFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICAgIGxvY2FsZSxcbiAgICAgIGxvY2FsZXMsXG4gICAgICBkZWZhdWx0TG9jYWxlLFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIGluaXRpYWxTdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgICAgIEFwcDogQXBwQ29tcG9uZW50XG4gICAgICB3cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICAgIGxvY2FsZT86IHN0cmluZ1xuICAgICAgbG9jYWxlcz86IHN0cmluZ1tdXG4gICAgICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzOiBpbml0aWFsU3R5bGVTaGVldHMsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgQ29tcG9uZW50OiBBcHAgYXMgQ29tcG9uZW50VHlwZSxcbiAgICAgIHN0eWxlU2hlZXRzOiBbXG4gICAgICAgIC8qIC9fYXBwIGRvZXMgbm90IG5lZWQgaXRzIHN0eWxlc2hlZXRzIG1hbmFnZWQgKi9cbiAgICAgIF0sXG4gICAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICB0aGlzLmFzUGF0aCA9XG4gICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0ID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9pMThuX1NVUFBPUlQpIHtcbiAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlXG4gICAgICB0aGlzLmxvY2FsZXMgPSBsb2NhbGVzXG4gICAgICB0aGlzLmRlZmF1bHRMb2NhbGUgPSBkZWZhdWx0TG9jYWxlXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgICBnZXRVUkwoKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcblxuICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuXG4gICAgICAgICAgbGV0IHNjcm9sbERlYm91bmNlVGltZW91dDogdW5kZWZpbmVkIHwgTm9kZUpTLlRpbWVvdXRcblxuICAgICAgICAgIGNvbnN0IGRlYm91bmNlZFNjcm9sbFNhdmUgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KSBjbGVhclRpbWVvdXQoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KVxuXG4gICAgICAgICAgICBzY3JvbGxEZWJvdW5jZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeyB1cmwsIGFzOiBjdXJBcywgb3B0aW9ucyB9ID0gaGlzdG9yeS5zdGF0ZVxuICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBjdXJBcyxcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgICBfTl9YOiB3aW5kb3cuc2Nyb2xsWCxcbiAgICAgICAgICAgICAgICAgIF9OX1k6IHdpbmRvdy5zY3JvbGxZLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0sIDEwKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBkZWJvdW5jZWRTY3JvbGxTYXZlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlIGFzIEhpc3RvcnlTdGF0ZVxuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMgfSA9IHN0YXRlXG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmICh0aGlzLmlzU3NyICYmIGFzID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UoXG4gICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgIHVybCxcbiAgICAgIGFzLFxuICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgIH0pXG4gICAgKVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBhc3luYyBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgIH1cbiAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgaWYgKFNUKSB7XG4gICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUpXG4gICAgfVxuXG4gICAgYXMgPSBhZGRMb2NhbGUoYXMsIHRoaXMubG9jYWxlLCB0aGlzLmRlZmF1bHRMb2NhbGUpXG4gICAgY29uc3QgY2xlYW5lZEFzID0gZGVsTG9jYWxlKFxuICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICB0aGlzLmxvY2FsZVxuICAgIClcbiAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXNcblxuICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSkge1xuICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXNcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpXG4gICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpXG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4gICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgLy8gd2hlbiByZXdyaXR0ZW4gdG9cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG4gICAgY29uc3QgeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLnByb21pc2VkQnVpbGRNYW5pZmVzdFxuXG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSBwYXJzZWRcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICA/IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSlcbiAgICAgIDogcGF0aG5hbWVcblxuICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpKSB7XG4gICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgIH1cblxuICAgIGxldCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG5cbiAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUykge1xuICAgICAgcmVzb2x2ZWRBcyA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgcGFyc2VSZWxhdGl2ZVVybChhcykucGF0aG5hbWUsXG4gICAgICAgIHBhZ2VzLFxuICAgICAgICBiYXNlUGF0aCxcbiAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICAocDogc3RyaW5nKSA9PiB0aGlzLl9yZXNvbHZlSHJlZih7IHBhdGhuYW1lOiBwIH0sIHBhZ2VzKS5wYXRobmFtZSFcbiAgICAgIClcblxuICAgICAgaWYgKHJlc29sdmVkQXMgIT09IGFzKSB7XG4gICAgICAgIGNvbnN0IHBvdGVudGlhbEhyZWYgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChcbiAgICAgICAgICB0aGlzLl9yZXNvbHZlSHJlZihcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZCwgeyBwYXRobmFtZTogcmVzb2x2ZWRBcyB9KSxcbiAgICAgICAgICAgIHBhZ2VzLFxuICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICApLnBhdGhuYW1lIVxuICAgICAgICApXG5cbiAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocG90ZW50aWFsSHJlZikpIHtcbiAgICAgICAgICByb3V0ZSA9IHBvdGVudGlhbEhyZWZcbiAgICAgICAgICBwYXRobmFtZSA9IHBvdGVudGlhbEhyZWZcbiAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLCB0aGlzLmxvY2FsZSlcblxuICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKVxuICAgICAgY29uc3QgYXNQYXRobmFtZSA9IHBhcnNlZEFzLnBhdGhuYW1lXG5cbiAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgY29uc3Qgc2hvdWxkSW50ZXJwb2xhdGUgPSByb3V0ZSA9PT0gYXNQYXRobmFtZVxuICAgICAgY29uc3QgaW50ZXJwb2xhdGVkQXMgPSBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICA/IGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5KVxuICAgICAgICA6ICh7fSBhcyB7IHJlc3VsdDogdW5kZWZpbmVkOyBwYXJhbXM6IHVuZGVmaW5lZCB9KVxuXG4gICAgICBpZiAoIXJvdXRlTWF0Y2ggfHwgKHNob3VsZEludGVycG9sYXRlICYmICFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/IGBJbnRlcnBvbGF0aW5nIGhyZWZgXG4gICAgICAgICAgICAgICAgICA6IGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGBcbiAgICAgICAgICAgICAgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAoc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgPyBgVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGBcbiAgICAgICAgICAgICAgOiBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKSArXG4gICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzLyR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gJ2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnXG4gICAgICAgICAgICAgICAgICA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcydcbiAgICAgICAgICAgICAgfWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc2hvdWxkSW50ZXJwb2xhdGUpIHtcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWRBcywge1xuICAgICAgICAgICAgcGF0aG5hbWU6IGludGVycG9sYXRlZEFzLnJlc3VsdCxcbiAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIGludGVycG9sYXRlZEFzLnBhcmFtcyEpLFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICB9XG4gICAgfVxuXG4gICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpXG5cbiAgICB0cnkge1xuICAgICAgY29uc3Qgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICBzaGFsbG93XG4gICAgICApXG4gICAgICBsZXQgeyBlcnJvciwgcHJvcHMsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbiAgICAgIGlmIChcbiAgICAgICAgKF9fTl9TU0cgfHwgX19OX1NTUCkgJiZcbiAgICAgICAgcHJvcHMgJiZcbiAgICAgICAgKHByb3BzIGFzIGFueSkucGFnZVByb3BzICYmXG4gICAgICAgIChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1RcbiAgICAgICkge1xuICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1RcblxuICAgICAgICAvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuICAgICAgICAvLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4gICAgICAgIC8vIGl0J3Mgbm90XG4gICAgICAgIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICBjb25zdCBwYXJzZWRIcmVmID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgICAgICAgICB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWRIcmVmLCBwYWdlcylcblxuICAgICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwYXJzZWRIcmVmLnBhdGhuYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKFxuICAgICAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICAgICAgZGVzdGluYXRpb24sXG4gICAgICAgICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgICBvcHRpb25zXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICB9XG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgbWV0aG9kLFxuICAgICAgICB1cmwsXG4gICAgICAgIGFkZExvY2FsZShhcywgdGhpcy5sb2NhbGUsIHRoaXMuZGVmYXVsdExvY2FsZSksXG4gICAgICAgIG9wdGlvbnNcbiAgICAgIClcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUhLCBxdWVyeSwgY2xlYW5lZEFzLCByb3V0ZUluZm8pLmNhdGNoKFxuICAgICAgICAoZSkgPT4ge1xuICAgICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlXG4gICAgICAgICAgZWxzZSB0aHJvdyBlXG4gICAgICAgIH1cbiAgICAgIClcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMpXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiAmJiAnX05fWCcgaW4gb3B0aW9ucykge1xuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygob3B0aW9ucyBhcyBhbnkpLl9OX1gsIChvcHRpb25zIGFzIGFueSkuX05fWSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3dcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgIH0gYXMgSGlzdG9yeVN0YXRlLFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuXG4gICAgaWYgKFBBR0VfTE9BRF9FUlJPUiBpbiBlcnIgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcylcblxuICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKClcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBwYWdlOiBDb21wb25lbnQsIHN0eWxlU2hlZXRzIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KFxuICAgICAgICAnL19lcnJvcidcbiAgICAgIClcbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgZXJyLFxuICAgICAgICBlcnJvcjogZXJyLFxuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICBlcnIsXG4gICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgIH0gYXMgYW55KVxuICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycilcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3Iocm91dGVJbmZvRXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCB0cnVlKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHNoYWxsb3c6IGJvb2xlYW4gPSBmYWxzZVxuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuXG4gICAgICBpZiAoc2hhbGxvdyAmJiBjYWNoZWRSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlZFJvdXRlSW5mb1xuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgPyBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpID0+ICh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSlcblxuICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YUhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIGRlbEJhc2VQYXRoKGFzKSxcbiAgICAgICAgICBfX05fU1NHLFxuICAgICAgICAgIHRoaXMubG9jYWxlLFxuICAgICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YTxQcml2YXRlUm91dGVJbmZvPigoKSA9PlxuICAgICAgICBfX05fU1NHXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICApXG4gICAgICApXG5cbiAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMpXG4gICAgfVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWY6IFVybE9iamVjdCwgcGFnZXM6IHN0cmluZ1tdLCBhcHBseUJhc2VQYXRoID0gdHJ1ZSkge1xuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZEhyZWZcbiAgICBjb25zdCBjbGVhblBhdGhuYW1lID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goXG4gICAgICBkZW5vcm1hbGl6ZVBhZ2VQYXRoKGFwcGx5QmFzZVBhdGggPyBkZWxCYXNlUGF0aChwYXRobmFtZSEpIDogcGF0aG5hbWUhKVxuICAgIClcblxuICAgIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgICByZXR1cm4gcGFyc2VkSHJlZlxuICAgIH1cblxuICAgIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUhKSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgcGFnZXMuc29tZSgocGFnZSkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgaXNEeW5hbWljUm91dGUocGFnZSkgJiZcbiAgICAgICAgICBnZXRSb3V0ZVJlZ2V4KHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSEpXG4gICAgICAgICkge1xuICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSBhcHBseUJhc2VQYXRoID8gYWRkQmFzZVBhdGgocGFnZSkgOiBwYWdlXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKFxuICAgICAgICB1cmwsXG4gICAgICAgIGFzUGF0aCxcbiAgICAgICAgdGhpcy5sb2NhbGUsXG4gICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgKSxcbiAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICBdKVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8R29vZFBhZ2VDYWNoZT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW2NhY2hlS2V5XSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAgYXMgQXBwQ29tcG9uZW50KVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSwgYXMpXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50IGFzIEFwcENvbXBvbmVudClcbiAgfVxufVxuIiwiLy8gZXNjYXBlIGRlbGltaXRlcnMgdXNlZCBieSBwYXRoLXRvLXJlZ2V4cFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXNjYXBlUGF0aERlbGltaXRlcnMoc2VnbWVudDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHNlZ21lbnQucmVwbGFjZSgvWy8jP10vZywgKGNoYXI6IHN0cmluZykgPT4gZW5jb2RlVVJJQ29tcG9uZW50KGNoYXIpKVxufVxuIiwiLy8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCAqIGFzIHF1ZXJ5c3RyaW5nIGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHMgPSAvaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS9cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmo6IFVybE9iamVjdCkge1xuICBsZXQgeyBhdXRoLCBob3N0bmFtZSB9ID0gdXJsT2JqXG4gIGxldCBwcm90b2NvbCA9IHVybE9iai5wcm90b2NvbCB8fCAnJ1xuICBsZXQgcGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUgfHwgJydcbiAgbGV0IGhhc2ggPSB1cmxPYmouaGFzaCB8fCAnJ1xuICBsZXQgcXVlcnkgPSB1cmxPYmoucXVlcnkgfHwgJydcbiAgbGV0IGhvc3Q6IHN0cmluZyB8IGZhbHNlID0gZmFsc2VcblxuICBhdXRoID0gYXV0aCA/IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwgJzonKSArICdAJyA6ICcnXG5cbiAgaWYgKHVybE9iai5ob3N0KSB7XG4gICAgaG9zdCA9IGF1dGggKyB1cmxPYmouaG9zdFxuICB9IGVsc2UgaWYgKGhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAofmhvc3RuYW1lLmluZGV4T2YoJzonKSA/IGBbJHtob3N0bmFtZX1dYCA6IGhvc3RuYW1lKVxuICAgIGlmICh1cmxPYmoucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB1cmxPYmoucG9ydFxuICAgIH1cbiAgfVxuXG4gIGlmIChxdWVyeSAmJiB0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgcXVlcnkgPSBTdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSBhcyBQYXJzZWRVcmxRdWVyeSkpXG4gIH1cblxuICBsZXQgc2VhcmNoID0gdXJsT2JqLnNlYXJjaCB8fCAocXVlcnkgJiYgYD8ke3F1ZXJ5fWApIHx8ICcnXG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonXG5cbiAgaWYgKFxuICAgIHVybE9iai5zbGFzaGVzIHx8XG4gICAgKCghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkgJiYgaG9zdCAhPT0gZmFsc2UpXG4gICkge1xuICAgIGhvc3QgPSAnLy8nICsgKGhvc3QgfHwgJycpXG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lWzBdICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWVcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSAnJ1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaFswXSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaFxuICBpZiAoc2VhcmNoICYmIHNlYXJjaFswXSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2hcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZW5jb2RlVVJJQ29tcG9uZW50KVxuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YFxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRMb2NhdGlvbk9yaWdpbiB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IERVTU1ZX0JBU0UgPSBuZXcgVVJMKFxuICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/ICdodHRwOi8vbicgOiBnZXRMb2NhdGlvbk9yaWdpbigpXG4pXG5cbi8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsOiBzdHJpbmcsIGJhc2U/OiBzdHJpbmcpIHtcbiAgY29uc3QgcmVzb2x2ZWRCYXNlID0gYmFzZSA/IG5ldyBVUkwoYmFzZSwgRFVNTVlfQkFTRSkgOiBEVU1NWV9CQVNFXG4gIGNvbnN0IHtcbiAgICBwYXRobmFtZSxcbiAgICBzZWFyY2hQYXJhbXMsXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZixcbiAgICBvcmlnaW4sXG4gICAgcHJvdG9jb2wsXG4gIH0gPSBuZXcgVVJMKHVybCwgcmVzb2x2ZWRCYXNlKVxuICBpZiAoXG4gICAgb3JpZ2luICE9PSBEVU1NWV9CQVNFLm9yaWdpbiB8fFxuICAgIChwcm90b2NvbCAhPT0gJ2h0dHA6JyAmJiBwcm90b2NvbCAhPT0gJ2h0dHBzOicpXG4gICkge1xuICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCcpXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWY6IGhyZWYuc2xpY2UoRFVNTVlfQkFTRS5vcmlnaW4ubGVuZ3RoKSxcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxuZXhwb3J0IHsgcGF0aFRvUmVnZXhwIH1cblxuZXhwb3J0IGNvbnN0IG1hdGNoZXJPcHRpb25zOiBwYXRoVG9SZWdleHAuVG9rZW5zVG9SZWdleHBPcHRpb25zICZcbiAgcGF0aFRvUmVnZXhwLlBhcnNlT3B0aW9ucyA9IHtcbiAgc2Vuc2l0aXZlOiBmYWxzZSxcbiAgZGVsaW1pdGVyOiAnLycsXG59XG5cbmV4cG9ydCBjb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zOiBwYXRoVG9SZWdleHAuVG9rZW5zVG9SZWdleHBPcHRpb25zICZcbiAgcGF0aFRvUmVnZXhwLlBhcnNlT3B0aW9ucyA9IHtcbiAgLi4ubWF0Y2hlck9wdGlvbnMsXG4gIHN0cmljdDogdHJ1ZSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgKGN1c3RvbVJvdXRlID0gZmFsc2UpID0+IHtcbiAgcmV0dXJuIChwYXRoOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBrZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICAgIGNvbnN0IG1hdGNoZXJSZWdleCA9IHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoXG4gICAgICBwYXRoLFxuICAgICAga2V5cyxcbiAgICAgIGN1c3RvbVJvdXRlID8gY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyA6IG1hdGNoZXJPcHRpb25zXG4gICAgKVxuICAgIGNvbnN0IG1hdGNoZXIgPSBwYXRoVG9SZWdleHAucmVnZXhwVG9GdW5jdGlvbihtYXRjaGVyUmVnZXgsIGtleXMpXG5cbiAgICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkLCBwYXJhbXM/OiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHJlcyA9IHBhdGhuYW1lID09IG51bGwgPyBmYWxzZSA6IG1hdGNoZXIocGF0aG5hbWUpXG4gICAgICBpZiAoIXJlcykge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cblxuICAgICAgaWYgKGN1c3RvbVJvdXRlKSB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgICAvLyB1bm5hbWVkIHBhcmFtcyBzaG91bGQgYmUgcmVtb3ZlZCBhcyB0aGV5XG4gICAgICAgICAgLy8gYXJlIG5vdCBhbGxvd2VkIHRvIGJlIHVzZWQgaW4gdGhlIGRlc3RpbmF0aW9uXG4gICAgICAgICAgaWYgKHR5cGVvZiBrZXkubmFtZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGRlbGV0ZSAocmVzLnBhcmFtcyBhcyBhbnkpW2tleS5uYW1lXVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4geyAuLi5wYXJhbXMsIC4uLnJlcy5wYXJhbXMgfVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxudHlwZSBQYXJhbXMgPSB7IFtwYXJhbTogc3RyaW5nXTogYW55IH1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJlcGFyZURlc3RpbmF0aW9uKFxuICBkZXN0aW5hdGlvbjogc3RyaW5nLFxuICBwYXJhbXM6IFBhcmFtcyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICBhcHBlbmRQYXJhbXNUb1F1ZXJ5OiBib29sZWFuLFxuICBiYXNlUGF0aDogc3RyaW5nXG4pIHtcbiAgbGV0IHBhcnNlZERlc3RpbmF0aW9uOiB7XG4gICAgcXVlcnk/OiBQYXJzZWRVcmxRdWVyeVxuICAgIHByb3RvY29sPzogc3RyaW5nXG4gICAgaG9zdG5hbWU/OiBzdHJpbmdcbiAgICBwb3J0Pzogc3RyaW5nXG4gIH0gJiBSZXR1cm5UeXBlPHR5cGVvZiBwYXJzZVJlbGF0aXZlVXJsPiA9IHt9IGFzIGFueVxuXG4gIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBzZWFyY2hQYXJhbXMsXG4gICAgICBoYXNoLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH0gPSBuZXcgVVJMKGRlc3RpbmF0aW9uKVxuXG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHF1ZXJ5OiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgICBoYXNoLFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGRlc3RRdWVyeSA9IHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5XG4gIGNvbnN0IGRlc3RQYXRoID0gYCR7cGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhfSR7XG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCB8fCAnJ1xuICB9YFxuICBjb25zdCBkZXN0UGF0aFBhcmFtS2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChkZXN0UGF0aCwgZGVzdFBhdGhQYXJhbUtleXMpXG5cbiAgY29uc3QgZGVzdFBhdGhQYXJhbXMgPSBkZXN0UGF0aFBhcmFtS2V5cy5tYXAoKGtleSkgPT4ga2V5Lm5hbWUpXG5cbiAgbGV0IGRlc3RpbmF0aW9uQ29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZShcbiAgICBkZXN0UGF0aCxcbiAgICAvLyB3ZSBkb24ndCB2YWxpZGF0ZSB3aGlsZSBjb21waWxpbmcgdGhlIGRlc3RpbmF0aW9uIHNpbmNlIHdlIHNob3VsZFxuICAgIC8vIGhhdmUgYWxyZWFkeSB2YWxpZGF0ZWQgYmVmb3JlIHdlIGdvdCB0byB0aGlzIHBvaW50IGFuZCB2YWxpZGF0aW5nXG4gICAgLy8gYnJlYWtzIGNvbXBpbGluZyBkZXN0aW5hdGlvbnMgd2l0aCBuYW1lZCBwYXR0ZXJuIHBhcmFtcyBmcm9tIHRoZSBzb3VyY2VcbiAgICAvLyBlLmcuIC9zb21ldGhpbmc6aGVsbG8oLiopIC0+IC9hbm90aGVyLzpoZWxsbyBpcyBicm9rZW4gd2l0aCB2YWxpZGF0aW9uXG4gICAgLy8gc2luY2UgY29tcGlsZSB2YWxpZGF0aW9uIGlzIG1lYW50IGZvciByZXZlcnNpbmcgYW5kIG5vdCBmb3IgaW5zZXJ0aW5nXG4gICAgLy8gcGFyYW1zIGZyb20gYSBzZXBhcmF0ZSBwYXRoLXJlZ2V4IGludG8gYW5vdGhlclxuICAgIHsgdmFsaWRhdGU6IGZhbHNlIH1cbiAgKVxuICBsZXQgbmV3VXJsXG5cbiAgLy8gdXBkYXRlIGFueSBwYXJhbXMgaW4gcXVlcnkgdmFsdWVzXG4gIGZvciAoY29uc3QgW2tleSwgc3RyT3JBcnJheV0gb2YgT2JqZWN0LmVudHJpZXMoZGVzdFF1ZXJ5KSkge1xuICAgIGxldCB2YWx1ZSA9IEFycmF5LmlzQXJyYXkoc3RyT3JBcnJheSkgPyBzdHJPckFycmF5WzBdIDogc3RyT3JBcnJheVxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgLy8gdGhlIHZhbHVlIG5lZWRzIHRvIHN0YXJ0IHdpdGggYSBmb3J3YXJkLXNsYXNoIHRvIGJlIGNvbXBpbGVkXG4gICAgICAvLyBjb3JyZWN0bHlcbiAgICAgIHZhbHVlID0gYC8ke3ZhbHVlfWBcbiAgICAgIGNvbnN0IHF1ZXJ5Q29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZSh2YWx1ZSwgeyB2YWxpZGF0ZTogZmFsc2UgfSlcbiAgICAgIHZhbHVlID0gcXVlcnlDb21waWxlcihwYXJhbXMpLnN1YnN0cigxKVxuICAgIH1cbiAgICBkZXN0UXVlcnlba2V5XSA9IHZhbHVlXG4gIH1cblxuICAvLyBhZGQgcGF0aCBwYXJhbXMgdG8gcXVlcnkgaWYgaXQncyBub3QgYSByZWRpcmVjdCBhbmQgbm90XG4gIC8vIGFscmVhZHkgZGVmaW5lZCBpbiBkZXN0aW5hdGlvbiBxdWVyeSBvciBwYXRoXG4gIGNvbnN0IHBhcmFtS2V5cyA9IE9iamVjdC5rZXlzKHBhcmFtcylcblxuICBpZiAoXG4gICAgYXBwZW5kUGFyYW1zVG9RdWVyeSAmJlxuICAgICFwYXJhbUtleXMuc29tZSgoa2V5KSA9PiBkZXN0UGF0aFBhcmFtcy5pbmNsdWRlcyhrZXkpKVxuICApIHtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBwYXJhbUtleXMpIHtcbiAgICAgIGlmICghKGtleSBpbiBkZXN0UXVlcnkpKSB7XG4gICAgICAgIGRlc3RRdWVyeVtrZXldID0gcGFyYW1zW2tleV1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBzaG91bGRBZGRCYXNlUGF0aCA9IGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSAmJiBiYXNlUGF0aFxuXG4gIHRyeSB7XG4gICAgbmV3VXJsID0gYCR7c2hvdWxkQWRkQmFzZVBhdGggPyBiYXNlUGF0aCA6ICcnfSR7ZGVzdGluYXRpb25Db21waWxlcihcbiAgICAgIHBhcmFtc1xuICAgICl9YFxuXG4gICAgY29uc3QgW3BhdGhuYW1lLCBoYXNoXSA9IG5ld1VybC5zcGxpdCgnIycpXG4gICAgcGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggPSBgJHtoYXNoID8gJyMnIDogJyd9JHtoYXNoIHx8ICcnfWBcbiAgICBkZWxldGUgcGFyc2VkRGVzdGluYXRpb24uc2VhcmNoXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGlmIChlcnIubWVzc2FnZS5tYXRjaCgvRXhwZWN0ZWQgLio/IHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXkvKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgVG8gdXNlIGEgbXVsdGktbWF0Y2ggaW4gdGhlIGRlc3RpbmF0aW9uIHlvdSBtdXN0IGFkZCBcXGAqXFxgIGF0IHRoZSBlbmQgb2YgdGhlIHBhcmFtIG5hbWUgdG8gc2lnbmlmeSBpdCBzaG91bGQgcmVwZWF0LiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLW11bHRpLW1hdGNoYFxuICAgICAgKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfVxuXG4gIC8vIFF1ZXJ5IG1lcmdlIG9yZGVyIGxvd2VzdCBwcmlvcml0eSB0byBoaWdoZXN0XG4gIC8vIDEuIGluaXRpYWwgVVJMIHF1ZXJ5IHZhbHVlc1xuICAvLyAyLiBwYXRoIHNlZ21lbnQgdmFsdWVzXG4gIC8vIDMuIGRlc3RpbmF0aW9uIHNwZWNpZmllZCBxdWVyeSB2YWx1ZXNcbiAgcGFyc2VkRGVzdGluYXRpb24ucXVlcnkgPSB7XG4gICAgLi4ucXVlcnksXG4gICAgLi4ucGFyc2VkRGVzdGluYXRpb24ucXVlcnksXG4gIH1cblxuICByZXR1cm4ge1xuICAgIG5ld1VybCxcbiAgICBwYXJzZWREZXN0aW5hdGlvbixcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW06IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnIHx8XG4gICAgKHR5cGVvZiBwYXJhbSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHBhcmFtKSkgfHxcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdib29sZWFuJ1xuICApIHtcbiAgICByZXR1cm4gU3RyaW5nKHBhcmFtKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKFxuICB1cmxRdWVyeTogUGFyc2VkVXJsUXVlcnlcbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxuICBPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiByZXN1bHQuYXBwZW5kKGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShpdGVtKSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihcbiAgdGFyZ2V0OiBVUkxTZWFyY2hQYXJhbXMsXG4gIC4uLnNlYXJjaFBhcmFtc0xpc3Q6IFVSTFNlYXJjaFBhcmFtc1tdXG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goKHNlYXJjaFBhcmFtcykgPT4ge1xuICAgIEFycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB0YXJnZXQuZGVsZXRlKGtleSkpXG4gICAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHRhcmdldC5hcHBlbmQoa2V5LCB2YWx1ZSkpXG4gIH0pXG4gIHJldHVybiB0YXJnZXRcbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgcGF0aE1hdGNoIGZyb20gJy4vcGF0aC1tYXRjaCdcbmltcG9ydCBwcmVwYXJlRGVzdGluYXRpb24gZnJvbSAnLi9wcmVwYXJlLWRlc3RpbmF0aW9uJ1xuaW1wb3J0IHsgUmV3cml0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9sb2FkLWN1c3RvbS1yb3V0ZXMnXG5pbXBvcnQgeyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCB9IGZyb20gJy4uLy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5cbmNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlciA9IHBhdGhNYXRjaCh0cnVlKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlUmV3cml0ZXMoXG4gIGFzUGF0aDogc3RyaW5nLFxuICBwYWdlczogc3RyaW5nW10sXG4gIGJhc2VQYXRoOiBzdHJpbmcsXG4gIHJld3JpdGVzOiBSZXdyaXRlW10sXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgcmVzb2x2ZUhyZWY6IChwYXRoOiBzdHJpbmcpID0+IHN0cmluZ1xuKSB7XG4gIGlmICghcGFnZXMuaW5jbHVkZXMoYXNQYXRoKSkge1xuICAgIGZvciAoY29uc3QgcmV3cml0ZSBvZiByZXdyaXRlcykge1xuICAgICAgY29uc3QgbWF0Y2hlciA9IGN1c3RvbVJvdXRlTWF0Y2hlcihyZXdyaXRlLnNvdXJjZSlcbiAgICAgIGNvbnN0IHBhcmFtcyA9IG1hdGNoZXIoYXNQYXRoKVxuXG4gICAgICBpZiAocGFyYW1zKSB7XG4gICAgICAgIGlmICghcmV3cml0ZS5kZXN0aW5hdGlvbikge1xuICAgICAgICAgIC8vIHRoaXMgaXMgYSBwcm94aWVkIHJld3JpdGUgd2hpY2ggaXNuJ3QgaGFuZGxlZCBvbiB0aGUgY2xpZW50XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZXN0UmVzID0gcHJlcGFyZURlc3RpbmF0aW9uKFxuICAgICAgICAgIHJld3JpdGUuZGVzdGluYXRpb24sXG4gICAgICAgICAgcGFyYW1zLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIHRydWUsXG4gICAgICAgICAgcmV3cml0ZS5iYXNlUGF0aCA9PT0gZmFsc2UgPyAnJyA6IGJhc2VQYXRoXG4gICAgICAgIClcbiAgICAgICAgYXNQYXRoID0gZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSFcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSlcblxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goYXNQYXRoKSkpIHtcbiAgICAgICAgICAvLyBjaGVjayBpZiB3ZSBub3cgbWF0Y2ggYSBwYWdlIGFzIHRoaXMgbWVhbnMgd2UgYXJlIGRvbmVcbiAgICAgICAgICAvLyByZXNvbHZpbmcgdGhlIHJld3JpdGVzXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNoZWNrIGlmIHdlIG1hdGNoIGEgZHluYW1pYy1yb3V0ZSwgaWYgc28gd2UgYnJlYWsgdGhlIHJld3JpdGVzIGNoYWluXG4gICAgICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IHJlc29sdmVIcmVmKGFzUGF0aClcblxuICAgICAgICBpZiAocmVzb2x2ZWRIcmVmICE9PSBhc1BhdGggJiYgcGFnZXMuaW5jbHVkZXMocmVzb2x2ZWRIcmVmKSkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFzUGF0aFxufVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJpbnRlcmZhY2UgR3JvdXAge1xuICBwb3M6IG51bWJlclxuICByZXBlYXQ6IGJvb2xlYW5cbiAgb3B0aW9uYWw6IGJvb2xlYW5cbn1cblxuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW06IHN0cmluZykge1xuICBjb25zdCBvcHRpb25hbCA9IHBhcmFtLnN0YXJ0c1dpdGgoJ1snKSAmJiBwYXJhbS5lbmRzV2l0aCgnXScpXG4gIGlmIChvcHRpb25hbCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMSwgLTEpXG4gIH1cbiAgY29uc3QgcmVwZWF0ID0gcGFyYW0uc3RhcnRzV2l0aCgnLi4uJylcbiAgaWYgKHJlcGVhdCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMylcbiAgfVxuICByZXR1cm4geyBrZXk6IHBhcmFtLCByZXBlYXQsIG9wdGlvbmFsIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICByb3V0ZUtleXM/OiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH1cbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH1cbn0ge1xuICBjb25zdCBzZWdtZW50cyA9IChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG4gICAgLnNsaWNlKDEpXG4gICAgLnNwbGl0KCcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICBncm91cHNba2V5XSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdCwgb3B0aW9uYWwgfVxuICAgICAgICByZXR1cm4gcmVwZWF0ID8gKG9wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKCcnKVxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgbGV0IHJvdXRlS2V5Q2hhckxlbmd0aCA9IDFcblxuICAgIC8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAgICBjb25zdCBnZXRTYWZlUm91dGVLZXkgPSAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVLZXkgPSAnJ1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlS2V5Q2hhckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdXRlS2V5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSlcbiAgICAgICAgcm91dGVLZXlDaGFyQ29kZSsrXG5cbiAgICAgICAgaWYgKHJvdXRlS2V5Q2hhckNvZGUgPiAxMjIpIHtcbiAgICAgICAgICByb3V0ZUtleUNoYXJMZW5ndGgrK1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91dGVLZXlcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUtleXM6IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5cbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICAgIC8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbiAgICAgICAgICAvLyB0aGUgbmFtZWQgcmVnZXhcbiAgICAgICAgICBsZXQgY2xlYW5lZEtleSA9IGtleS5yZXBsYWNlKC9cXFcvZywgJycpXG4gICAgICAgICAgbGV0IGludmFsaWRLZXkgPSBmYWxzZVxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4gICAgICAgICAgLy8gc2FmZSBrZXlcbiAgICAgICAgICBpZiAoY2xlYW5lZEtleS5sZW5ndGggPT09IDAgfHwgY2xlYW5lZEtleS5sZW5ndGggPiAzMCkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLCAxKSkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnZhbGlkS2V5KSB7XG4gICAgICAgICAgICBjbGVhbmVkS2V5ID0gZ2V0U2FmZVJvdXRlS2V5KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUtleXNbY2xlYW5lZEtleV0gPSBrZXlcbiAgICAgICAgICByZXR1cm4gcmVwZWF0XG4gICAgICAgICAgICA/IG9wdGlvbmFsXG4gICAgICAgICAgICAgID8gYCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2BcbiAgICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWBcbiAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJylcblxuICAgIHJldHVybiB7XG4gICAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgIGdyb3VwcyxcbiAgICAgIHJvdXRlS2V5cyxcbiAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgIGdyb3VwcyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZm9ybWF0VXJsIH0gZnJvbSAnLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybCdcbmltcG9ydCB7IE1hbmlmZXN0SXRlbSB9IGZyb20gJy4uL3NlcnZlci9sb2FkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnQG5leHQvZW52J1xuaW1wb3J0IHsgQnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL3NlcnZlci9nZXQtcGFnZS1maWxlcydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKiBodHRwczovL25leHRqcy5vcmcvYmxvZy9uZXh0LTktNCNpbnRlZ3JhdGVkLXdlYi12aXRhbHMtcmVwb3J0aW5nXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRXZWJWaXRhbHNNZXRyaWMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIEhlYWRFbnRyeSA9IFtzdHJpbmcsIHsgW2tleTogc3RyaW5nXTogYW55IH1dXG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxuICBoZWFkOiBIZWFkRW50cnlbXVxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZDoge1xuICAgIEh0bWw/OiBib29sZWFuXG4gICAgTWFpbj86IGJvb2xlYW5cbiAgICBIZWFkPzogYm9vbGVhblxuICAgIE5leHRTY3JpcHQ/OiBib29sZWFuXG4gIH1cbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG4gIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG5cbiAgcHJldmlldz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFByZXZpZXcgZGF0YSBzZXQgb24gdGhlIHJlcXVlc3QsIGlmIGFueVxuICAgKiAqL1xuICBwcmV2aWV3RGF0YT86IGFueVxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHN0YXR1czogbnVtYmVyLCB1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmw6IFVybE9iamVjdCk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXRVcmwodXJsKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVQYXRoU2VwPW5vcm1hbGl6ZVBhdGhTZXA7ZXhwb3J0cy5kZW5vcm1hbGl6ZVBhZ2VQYXRoPWRlbm9ybWFsaXplUGFnZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplUGF0aFNlcChwYXRoKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXFxcL2csJy8nKTt9ZnVuY3Rpb24gZGVub3JtYWxpemVQYWdlUGF0aChwYWdlKXtwYWdlPW5vcm1hbGl6ZVBhdGhTZXAocGFnZSk7aWYocGFnZS5zdGFydHNXaXRoKCcvaW5kZXgvJykpe3BhZ2U9cGFnZS5zbGljZSg2KTt9ZWxzZSBpZihwYWdlPT09Jy9pbmRleCcpe3BhZ2U9Jy8nO31yZXR1cm4gcGFnZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IERpdmlkZXIsIFNwYWNlLCBQYWdlSGVhZGVyLCBUb29sdGlwLCBTcGluIH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmltcG9ydCB7IGR1bW15IH0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL3V0aWxzL2R1bW15XCI7XHJcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vaG9va3MvdXNlckhvb2tzXCI7XHJcbmltcG9ydCB7XHJcbiAgZ2V0Q2hhcHRlcixcclxuICBnZXRDb21tZW50cyxcclxuICBzdWJtaXRDb21tZW50LFxyXG4gIGRlbGV0ZUNvbW1lbnQsXHJcbn0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL3JlZHV4L2FjdGlvbnMvc3Rvcmllc0FjdGlvbnNcIjtcclxuXHJcbmltcG9ydCBDb21tZW50cyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy9jaGFwdGVyL0NvbW1lbnRzXCI7XHJcbmltcG9ydCBMb2FkaW5nU2NyZWVuIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL2hvYy9Mb2FkaW5nU2NyZWVuXCI7XHJcbmltcG9ydCBSZWRpcmVjdENvbXAgZnJvbSBcIi4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvaG9jL1JlZGlyZWN0Q29tcFwiO1xyXG5pbXBvcnQge1xyXG4gIENoYXJhY3RlckdyaWQsXHJcbiAgTG9jYXRpb25HcmlkLFxyXG59IGZyb20gXCIuLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL2NvbW1vbi9HcmlkXCI7XHJcblxyXG5jb25zdCBDaGFwdGVyID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgYXV0aCA9IHVzZUF1dGgoKTtcclxuICBjb25zdCB7IGxvYWRpbmcsIGNoYXB0ZXIsIGxvYWRpbmdDb21tZW50cywgY29tbWVudHMsIGNoYXB0ZXJFeGlzdHMgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBbY2hhcmFjdGVycywgc2V0Q2hhcmFjdGVyc10gPSBSZWFjdC51c2VTdGF0ZShbXSk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBwcm9wcy5nZXRDaGFwdGVyKHJvdXRlci5xdWVyeS5pZCwgcm91dGVyLnF1ZXJ5LmNoYXBpZCwgXCJzaG93XCIpO1xyXG4gICAgcHJvcHMuZ2V0Q29tbWVudHMocm91dGVyLnF1ZXJ5LmNoYXBpZCk7XHJcbiAgfSwgW3JvdXRlci5xdWVyeS5pZCwgcm91dGVyLnF1ZXJ5LmNoYXBpZF0pO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGNoYXB0ZXIuY2hhcmFjdGVycykge1xyXG4gICAgICBzZXRDaGFyYWN0ZXJzKFxyXG4gICAgICAgIGNoYXB0ZXIuY2hhcmFjdGVycy5maWx0ZXIoXHJcbiAgICAgICAgICAoYykgPT4gYy5wdWJsaWMgfHwgYy5hdXRob3JJZCA9PT0gYXV0aC51c2VyLnVpZFxyXG4gICAgICAgIClcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9LCBbY2hhcHRlcl0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExvYWRpbmdTY3JlZW4gbG9hZGluZz17bG9hZGluZ30+XHJcbiAgICAgIDxSZWRpcmVjdENvbXAgY29uZGl0aW9uPXtjaGFwdGVyRXhpc3RzfSB0eXBlPVwiNDA0XCI+XHJcbiAgICAgICAgPFJlZGlyZWN0Q29tcFxyXG4gICAgICAgICAgY29uZGl0aW9uPXtcclxuICAgICAgICAgICAgY2hhcHRlci5wdWJsaWMgfHwgKGF1dGgudXNlciAmJiBhdXRoLnVzZXIudWlkID09PSBjaGFwdGVyLmF1dGhvcklkKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdHlwZT1cIjQwM1wiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWNoYXB0ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFwdGVyLXBhZ2VcIj5cclxuICAgICAgICAgICAgICA8VG9vbHRpcCB0aXRsZT1cIk5leHQgQ2hhcHRlclwiIHBsYWNlbWVudD1cImJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uIGN1c3RvbS1pY29uIG5hdi1idG4gbmV4dC1idG5cIj5cclxuICAgICAgICAgICAgICAgICAgPGlvbi1pY29uIG5hbWU9XCJjaGV2cm9uLWZvcndhcmQtY2lyY2xlXCI+PC9pb24taWNvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICA8VG9vbHRpcCB0aXRsZT1cIlByZXZpb3VzIENoYXB0ZXJcIiBwbGFjZW1lbnQ9XCJib3R0b21cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbiBjdXN0b20taWNvbiBuYXYtYnRuIHByZXYtYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpb24taWNvbiBuYW1lPVwiY2hldnJvbi1iYWNrLWNpcmNsZVwiPjwvaW9uLWljb24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgPFBhZ2VIZWFkZXJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNpdGUtcGFnZS1oZWFkZXJcIlxyXG4gICAgICAgICAgICAgICAgb25CYWNrPXsoKSA9PiByb3V0ZXIucHVzaChgL3N0b3J5LyR7cm91dGVyLnF1ZXJ5LmlkfWApfVxyXG4gICAgICAgICAgICAgICAgdGl0bGU9XCJCYWNrIHRvIHN0b3J5XCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxoMj5cclxuICAgICAgICAgICAgICAgIHtjaGFwdGVyLm51bWJlcn0uIHtjaGFwdGVyLnRpdGxlfVxyXG4gICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXRhXCI+XHJcbiAgICAgICAgICAgICAgICA8RGl2aWRlciBvcmllbnRhdGlvbj1cImxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9maWxlLzFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxTcGFjZSBkaXJlY3Rpb249XCJ2ZXJ0aWNhbFwiIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXZhdGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2R1bW15LnBlcnNvbn0gYWx0PXtkdW1teS5uYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1PntjaGFwdGVyLmF1dGhvck5hbWV9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvU3BhY2U+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L0RpdmlkZXI+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPHNlY3Rpb25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNoYXB0ZXItY29udGVudFwiXHJcbiAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGNoYXB0ZXIuYm9keSB9fVxyXG4gICAgICAgICAgICAgID48L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgICB7bG9hZGluZ0NvbW1lbnRzID8gKFxyXG4gICAgICAgICAgICAgICAgPFNwaW4gLz5cclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPENvbW1lbnRzXHJcbiAgICAgICAgICAgICAgICAgIHN1Ym1pdENvbW1lbnQ9e3Byb3BzLnN1Ym1pdENvbW1lbnR9XHJcbiAgICAgICAgICAgICAgICAgIGF1dGg9e2F1dGh9XHJcbiAgICAgICAgICAgICAgICAgIGNvbW1lbnRzPXtjb21tZW50c31cclxuICAgICAgICAgICAgICAgICAgZGVsZXRlQ29tbWVudD17cHJvcHMuZGVsZXRlQ29tbWVudH1cclxuICAgICAgICAgICAgICAgICAgY2hhcGlkPXtyb3V0ZXIucXVlcnkuY2hhcGlkfVxyXG4gICAgICAgICAgICAgICAgICBzdG9yeUlkPXtyb3V0ZXIucXVlcnkuaWR9XHJcbiAgICAgICAgICAgICAgICAgIGF1dGhvcklkPXtjaGFwdGVyLmF1dGhvcklkfVxyXG4gICAgICAgICAgICAgICAgICB0aXRsZT17Y2hhcHRlci5zdG9yeVRpdGxlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWNoYXB0ZXItZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgIDxoMz5DaGFyYWN0ZXJzIGluIHRoaXMgY2hhcHRlcjwvaDM+XHJcbiAgICAgICAgICAgICAgPENoYXJhY3RlckdyaWRcclxuICAgICAgICAgICAgICAgIGd1dHRlcj17WzEyLCAxMl19XHJcbiAgICAgICAgICAgICAgICBjaGFyYWN0ZXJzPXtjaGFyYWN0ZXJzfVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInNob3dcIlxyXG4gICAgICAgICAgICAgICAgbGc9ezEyfVxyXG4gICAgICAgICAgICAgICAgbWQ9ezEyfVxyXG4gICAgICAgICAgICAgICAgc209ezEyfVxyXG4gICAgICAgICAgICAgICAgeHM9ezEyfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgICA8aDM+TG9jYXRpb25zIGluIHRoaXMgY2hhcHRlcjwvaDM+XHJcbiAgICAgICAgICAgICAgPExvY2F0aW9uR3JpZFxyXG4gICAgICAgICAgICAgICAgZ3V0dGVyPXtbMTIsIDEyXX1cclxuICAgICAgICAgICAgICAgIGxnPXsxMn1cclxuICAgICAgICAgICAgICAgIG1kPXsxMn1cclxuICAgICAgICAgICAgICAgIHNtPXsxMn1cclxuICAgICAgICAgICAgICAgIHhzPXsxMn1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJzdG9yeVwiXHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbnM9e2NoYXB0ZXIubG9jYXRpb25zfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9SZWRpcmVjdENvbXA+XHJcbiAgICAgIDwvUmVkaXJlY3RDb21wPlxyXG4gICAgPC9Mb2FkaW5nU2NyZWVuPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XHJcbiAgY2hhcHRlcjogc3RhdGUuc3Rvcmllcy5jaGFwdGVyLFxyXG4gIGxvYWRpbmc6IHN0YXRlLnN0b3JpZXMubG9hZGluZyxcclxuICBjb21tZW50czogc3RhdGUuc3Rvcmllcy5jb21tZW50cyxcclxuICBsb2FkaW5nQ29tbWVudHM6IHN0YXRlLnN0b3JpZXMubG9hZGluZ0NvbW1lbnRzLFxyXG4gIGNoYXB0ZXJFeGlzdHM6IHN0YXRlLnN0b3JpZXMuY2hhcHRlckV4aXN0cyxcclxuICBtZXNzYWdlOiBzdGF0ZS5zdG9yaWVzLm1lc3NhZ2UsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHtcclxuICBnZXRDaGFwdGVyLFxyXG4gIGdldENvbW1lbnRzLFxyXG4gIHN1Ym1pdENvbW1lbnQsXHJcbiAgZGVsZXRlQ29tbWVudCxcclxufSkoQ2hhcHRlcik7XHJcbiIsImltcG9ydCB7IHR5cGVzIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBkYiwgYXV0aCwgc3RvcmFnZSB9IGZyb20gXCIuLi9mYkNvbmZpZ1wiO1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlL2FwcFwiO1xyXG5pbXBvcnQgeyBtZXNzYWdlIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbi8vIFNUT1JJRVNcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdG9yeSA9IChpZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGIuY29sbGVjdGlvbihcInN0b3JpZXNcIilcclxuICAgIC5kb2MoaWQpXHJcbiAgICAuZ2V0KClcclxuICAgIC50aGVuKChkb2MpID0+IHtcclxuICAgICAgaWYgKGRvYy5leGlzdHMpIHtcclxuICAgICAgICBjb25zdCBtYWluID0gZG9jLmRhdGEoKS5tYWluQ2hhcmFjdGVycztcclxuICAgICAgICBjb25zdCBzZWNvbmRhcnkgPSBkb2MuZGF0YSgpLnNlY29uZGFyeUNoYXJhY3RlcnM7XHJcbiAgICAgICAgbGV0IG1haW5BcnIgPSBbXTtcclxuICAgICAgICBsZXQgc2Vjb25kYXJ5QXJyID0gW107XHJcbiAgICAgICAgY29uc3QgbWFpblF1ZXJ5ID0gbWFpbi5tYXAoKGMpID0+XHJcbiAgICAgICAgICBkYi5jb2xsZWN0aW9uKFwiY2hhcmFjdGVyc1wiKS5kb2MoYykuZ2V0KClcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IHNlY29uZGFyeVF1ZXJ5ID0gc2Vjb25kYXJ5Lm1hcCgoYykgPT5cclxuICAgICAgICAgIGRiLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzXCIpLmRvYyhjLmlkKS5nZXQoKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgbWFpblJlcyA9IFByb21pc2UuYWxsKG1haW5RdWVyeSk7XHJcbiAgICAgICAgY29uc3Qgc2Vjb25kYXJ5UmVzID0gUHJvbWlzZS5hbGwoc2Vjb25kYXJ5UXVlcnkpO1xyXG4gICAgICAgIFByb21pc2UuYWxsKFttYWluUmVzLCBzZWNvbmRhcnlSZXNdKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgIHJlc3VsdFswXS5mb3JFYWNoKChkb2N1KSA9PiB7XHJcbiAgICAgICAgICAgIG1haW5BcnIgPSBbLi4ubWFpbkFyciwgeyAuLi5kb2N1LmRhdGEoKSwgaWQ6IGRvY3UuaWQgfV07XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHJlc3VsdFsxXS5mb3JFYWNoKChkb2N1KSA9PiB7XHJcbiAgICAgICAgICAgIHNlY29uZGFyeUFyciA9IFsuLi5zZWNvbmRhcnlBcnIsIHsgLi4uZG9jdS5kYXRhKCksIGlkOiBkb2N1LmlkIH1dO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IHR5cGVzLkdFVF9TVE9SWSxcclxuICAgICAgICAgICAgc3RvcnlFeGlzdHM6IHRydWUsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAuLi5kb2MuZGF0YSgpLFxyXG4gICAgICAgICAgICAgIGlkOiBkb2MuaWQsXHJcbiAgICAgICAgICAgICAgc2Vjb25kYXJ5Q2hhcmFjdGVyczogc2Vjb25kYXJ5QXJyLFxyXG4gICAgICAgICAgICAgIG1haW5DaGFyYWN0ZXJzOiBtYWluQXJyLFxyXG4gICAgICAgICAgICAgIG1haW5BcnI6IGRvYy5kYXRhKCkubWFpbkNoYXJhY3RlcnMsXHJcbiAgICAgICAgICAgICAgc2Vjb25kYXJ5QXJyOiBkb2MuZGF0YSgpLnNlY29uZGFyeUNoYXJhY3RlcnMsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiB0eXBlcy5ESVNQQVRDSF9FUlJPUixcclxuICAgICAgICAgIHN0b3J5RXhpc3RzOiBmYWxzZSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRTdG9yeSA9IChkYXRhKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkaXNwYXRjaCh7IHR5cGU6IHR5cGVzLkFERF9TVE9SWSwgcGF5bG9hZDogeyBsb2FkaW5nOiB0cnVlIH0gfSk7XHJcbiAgY29uc3QgaW1hZ2VOYW1lID0gZGF0YS50aXRsZS50b0xvd2VyQ2FzZSgpLnNwbGl0KFwiIFwiKS5qb2luKFwiX1wiKTtcclxuICBpZiAodHlwZW9mIGRhdGEuYmFubmVyID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICBzdG9yYWdlXHJcbiAgICAgIC5yZWYoYCR7YXV0aC5jdXJyZW50VXNlci51aWR9LyR7aW1hZ2VOYW1lfWApXHJcbiAgICAgIC5wdXQoZGF0YS5iYW5uZXIpXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICByZXR1cm4gc3RvcmFnZVxyXG4gICAgICAgICAgLnJlZihhdXRoLmN1cnJlbnRVc2VyLnVpZClcclxuICAgICAgICAgIC5jaGlsZChpbWFnZU5hbWUpXHJcbiAgICAgICAgICAuZ2V0RG93bmxvYWRVUkwoKTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKHVybCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKS5hZGQoe1xyXG4gICAgICAgICAgLi4uZGF0YSxcclxuICAgICAgICAgIGF1dGhvcklkOiBhdXRoLmN1cnJlbnRVc2VyLnVpZCxcclxuICAgICAgICAgIGF1dGhvck5hbWU6IGRhdGEuYXV0aG9yTmFtZSxcclxuICAgICAgICAgIG9uZVNob3Q6IGZhbHNlLFxyXG4gICAgICAgICAgYmFubmVyOiB1cmwsXHJcbiAgICAgICAgICBjcmVhdGVkQXQ6IGZpcmViYXNlLmZpcmVzdG9yZS5GaWVsZFZhbHVlLnNlcnZlclRpbWVzdGFtcCgpLFxyXG4gICAgICAgICAgbGlrZXNDb3VudDogMCxcclxuICAgICAgICAgIGNoYXB0ZXJzQ291bnQ6IDAsXHJcbiAgICAgICAgICBzZWNvbmRhcnlDaGFyYWN0ZXJzOiBbXSxcclxuICAgICAgICAgIGZlYXR1cmVkOiBmYWxzZSxcclxuICAgICAgICAgIG5vdGU6IDAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoXCJTdG9yeSBhZGRlZCBzdWNjZXNzZnVsbHlcIik7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBSb3V0ZXIucHVzaChgL3N0b3J5LyR7cmVzLmlkfWApO1xyXG4gICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiB0eXBlcy5BRERfU1RPUlksXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICBtZXNzYWdlOiBcIlN0b3J5IGFkZGVkIHN1Y2Nlc3NmdWxseVwiLFxyXG4gICAgICAgICAgICAgIHN0b3J5SWQ6IHJlcy5pZCxcclxuICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoZXJyLm1lc3NhZ2UpO1xyXG4gICAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgZGIuY29sbGVjdGlvbihcInN0b3JpZXNcIilcclxuICAgICAgLmFkZCh7XHJcbiAgICAgICAgLi4uZGF0YSxcclxuICAgICAgICBhdXRob3JJZDogYXV0aC5jdXJyZW50VXNlci51aWQsXHJcbiAgICAgICAgYXV0aG9yTmFtZTogZGF0YS5hdXRob3JOYW1lLFxyXG4gICAgICAgIG9uZVNob3Q6IGZhbHNlLFxyXG4gICAgICAgIGNyZWF0ZWRBdDogZmlyZWJhc2UuZmlyZXN0b3JlLkZpZWxkVmFsdWUuc2VydmVyVGltZXN0YW1wKCksXHJcbiAgICAgICAgbGlrZXNDb3VudDogMCxcclxuICAgICAgICBjaGFwdGVyc0NvdW50OiAwLFxyXG4gICAgICAgIGZlYXR1cmVkOiBmYWxzZSxcclxuICAgICAgICBzZWNvbmRhcnlDaGFyYWN0ZXJzOiBbXSxcclxuICAgICAgICBub3RlOiAwLFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgbWVzc2FnZS5zdWNjZXNzKFwiU3RvcnkgYWRkZWQgc3VjY2Vzc2Z1bGx5XCIpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgUm91dGVyLnB1c2goYC9zdG9yeS8ke3Jlcy5pZH1gKTtcclxuICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogdHlwZXMuQUREX1NUT1JZLFxyXG4gICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgbWVzc2FnZTogXCJTdG9yeSBhZGRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgICAgICBzdG9yeUlkOiByZXMuaWQsXHJcbiAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBtZXNzYWdlLmVycm9yKGVyci5tZXNzYWdlKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGVkaXRTdG9yeSA9IChkYXRhLCBzdG9yeUlkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkaXNwYXRjaCh7IHR5cGU6IHR5cGVzLkVESVRfU1RPUlksIHBheWxvYWQ6IHsgbG9hZGluZ1N0b3J5OiB0cnVlIH0gfSk7XHJcbiAgY29uc3QgaW1hZ2VOYW1lID0gZGF0YS50aXRsZS50b0xvd2VyQ2FzZSgpLnNwbGl0KFwiIFwiKS5qb2luKFwiX1wiKTtcclxuXHJcbiAgaWYgKHR5cGVvZiBkYXRhLmJhbm5lciA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgc3RvcmFnZVxyXG4gICAgICAucmVmKGAke2F1dGguY3VycmVudFVzZXIudWlkfS8ke2ltYWdlTmFtZX1gKVxyXG4gICAgICAucHV0KGRhdGEuYmFubmVyKVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHN0b3JhZ2VcclxuICAgICAgICAgIC5yZWYoYXV0aC5jdXJyZW50VXNlci51aWQpXHJcbiAgICAgICAgICAuY2hpbGQoaW1hZ2VOYW1lKVxyXG4gICAgICAgICAgLmdldERvd25sb2FkVVJMKCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKCh1cmwpID0+IHtcclxuICAgICAgICByZXR1cm4gZGJcclxuICAgICAgICAgIC5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKVxyXG4gICAgICAgICAgLmRvYyhzdG9yeUlkKVxyXG4gICAgICAgICAgLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgIC4uLmRhdGEsXHJcbiAgICAgICAgICAgIGJhbm5lcjogdXJsLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICBkYi5jb2xsZWN0aW9uKFwibG9jYXRpb25zXCIpXHJcbiAgICAgICAgICAud2hlcmUoXCJzdG9yeUlkXCIsIFwiPT1cIiwgc3RvcnlJZClcclxuICAgICAgICAgIC5nZXQoKVxyXG4gICAgICAgICAgLnRoZW4oKGRvY3MpID0+IHtcclxuICAgICAgICAgICAgbGV0IGxvY2F0aW9uUXVlcnkgPSBbXTtcclxuICAgICAgICAgICAgZG9jcy5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgICAgICAgICAgICBsb2NhdGlvblF1ZXJ5ID0gW1xyXG4gICAgICAgICAgICAgICAgLi4ubG9jYXRpb25RdWVyeSxcclxuICAgICAgICAgICAgICAgIGRiXHJcbiAgICAgICAgICAgICAgICAgIC5jb2xsZWN0aW9uKFwibG9jYXRpb25zXCIpXHJcbiAgICAgICAgICAgICAgICAgIC5kb2MoZG9jLmlkKVxyXG4gICAgICAgICAgICAgICAgICAudXBkYXRlKHsgc3RvcnlUaXRsZTogZGF0YS50aXRsZSB9KSxcclxuICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgUHJvbWlzZS5hbGwobG9jYXRpb25RdWVyeSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgbWVzc2FnZS5zdWNjZXNzKFwiU3RvcnkgYWRkZWQgc3VjY2Vzc2Z1bGx5XCIpO1xyXG4gICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IHR5cGVzLkVESVRfU1RPUlksXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiU3RvcnkgZWRpdGVkIHN1Y2Nlc3NmdWxseVwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBtZXNzYWdlLmVycm9yKGVyci5tZXNzYWdlKTtcclxuICAgICAgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpXHJcbiAgICAgIC5kb2Moc3RvcnlJZClcclxuICAgICAgLnVwZGF0ZSh7XHJcbiAgICAgICAgLi4uZGF0YSxcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIGRiLmNvbGxlY3Rpb24oXCJsb2NhdGlvbnNcIilcclxuICAgICAgICAgIC53aGVyZShcInN0b3J5SWRcIiwgXCI9PVwiLCBzdG9yeUlkKVxyXG4gICAgICAgICAgLmdldCgpXHJcbiAgICAgICAgICAudGhlbigoZG9jcykgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbG9jYXRpb25RdWVyeSA9IFtdO1xyXG4gICAgICAgICAgICBkb2NzLmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgICAgICAgICAgIGxvY2F0aW9uUXVlcnkgPSBbXHJcbiAgICAgICAgICAgICAgICAuLi5sb2NhdGlvblF1ZXJ5LFxyXG4gICAgICAgICAgICAgICAgZGJcclxuICAgICAgICAgICAgICAgICAgLmNvbGxlY3Rpb24oXCJsb2NhdGlvbnNcIilcclxuICAgICAgICAgICAgICAgICAgLmRvYyhkb2MuaWQpXHJcbiAgICAgICAgICAgICAgICAgIC51cGRhdGUoeyBzdG9yeVRpdGxlOiBkYXRhLnRpdGxlIH0pLFxyXG4gICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBQcm9taXNlLmFsbChsb2NhdGlvblF1ZXJ5KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoXCJTdG9yeSBhZGRlZCBzdWNjZXNzZnVsbHlcIik7XHJcbiAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogdHlwZXMuRURJVF9TVE9SWSxcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJTdG9yeSBlZGl0ZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoZXJyLm1lc3NhZ2UpO1xyXG4gICAgICB9KTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VXNlclN0b3JpZXMgPSAoKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKVxyXG4gICAgLndoZXJlKFwiYXV0aG9ySWRcIiwgXCI9PVwiLCBhdXRoLmN1cnJlbnRVc2VyLnVpZClcclxuICAgIC5nZXQoKVxyXG4gICAgLnRoZW4oKGRvY3MpID0+IHtcclxuICAgICAgbGV0IGl0ZW1zID0gW107XHJcbiAgICAgIGRvY3MuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICAgICAgaXRlbXMgPSBbLi4uaXRlbXMsIHsgaWQ6IGRvYy5pZCwgLi4uZG9jLmRhdGEoKSB9XTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBpdGVtcztcclxuICAgIH0pXHJcbiAgICAudGhlbigoaXRlbXMpID0+IHtcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiB0eXBlcy5HRVRfVVNFUl9TVE9SSUVTLCBwYXlsb2FkOiBpdGVtcyB9KTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEZhdm9yaXRlU3RvcmllcyA9ICgpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzTGlrZXNcIilcclxuICAgIC53aGVyZShcInNlbmRlcklkXCIsIFwiPT1cIiwgYXV0aC5jdXJyZW50VXNlci51aWQpXHJcbiAgICAuZ2V0KClcclxuICAgIC50aGVuKChkb2NzKSA9PiB7XHJcbiAgICAgIGxldCBmYXZBcnIgPSBbXTtcclxuICAgICAgZG9jcy5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgICAgICBmYXZBcnIgPSBbLi4uZmF2QXJyLCBkb2MuZGF0YSgpLnN0b3J5SWRdO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGZhdkFycjtcclxuICAgIH0pXHJcbiAgICAudGhlbigodXNlcnMpID0+IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gdXNlcnMubWFwKCh1c2VyKSA9PlxyXG4gICAgICAgIGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpLmRvYyh1c2VyKS5nZXQoKVxyXG4gICAgICApO1xyXG4gICAgICBQcm9taXNlLmFsbChyZXN1bHQpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGxldCBmYXZVc2VycyA9IFtdO1xyXG4gICAgICAgIHJlcy5mb3JFYWNoKFxyXG4gICAgICAgICAgKGRvYykgPT4gKGZhdlVzZXJzID0gWy4uLmZhdlVzZXJzLCB7IGlkOiBkb2MuaWQsIC4uLmRvYy5kYXRhKCkgfV0pXHJcbiAgICAgICAgKTtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiB0eXBlcy5HRVRfRkFWT1JJVEVfU1RPUklFUyxcclxuICAgICAgICAgIHBheWxvYWQ6IGZhdlVzZXJzLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGlzU3RvcnlGYXZvcml0ZSA9IChzdG9yeUlkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBpZiAoYXV0aC5jdXJyZW50VXNlcikge1xyXG4gICAgZGIuY29sbGVjdGlvbihcInN0b3JpZXNMaWtlc1wiKVxyXG4gICAgICAud2hlcmUoXCJzZW5kZXJJZFwiLCBcIj09XCIsIGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gICAgICAud2hlcmUoXCJzdG9yeUlkXCIsIFwiPT1cIiwgc3RvcnlJZClcclxuICAgICAgLm9uU25hcHNob3QoKHNuYXBzaG90KSA9PiB7XHJcbiAgICAgICAgY29uc3QgYW5zd2VyID0gc25hcHNob3QuZG9jc1swXSA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICByZXR1cm4gZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogdHlwZXMuSVNfU1RPUllfRkFWT1JJVEUsXHJcbiAgICAgICAgICBwYXlsb2FkOiBhbnN3ZXIsXHJcbiAgICAgICAgICBsb2FkaW5nRmF2OiBmYWxzZSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFN0b3J5VG9GYXZvcml0ZSA9IChpZCwgdXNlcm5hbWUsIHN0b3J5VGl0bGUpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIC8vIGlmIChpc0Zhdm9yaXRlKSByZXR1cm4gbWVzc2FnZS53YXJuaW5nKFwiWW91J3ZlIGFscmVhZHkgbGlrZWQgdGhpcyBzdG9yeVwiKTtcclxuICBpZiAoIWF1dGguY3VycmVudFVzZXIpXHJcbiAgICByZXR1cm4gbWVzc2FnZS5lcnJvcihcIllvdSBuZWVkIHRvIGJlIGxvZ2dlZCBpbiB0byBsaWtlIGEgc3RvcnlcIik7XHJcbiAgaWYgKCFhdXRoLmN1cnJlbnRVc2VyLmVtYWlsVmVyaWZpZWQpXHJcbiAgICByZXR1cm4gbWVzc2FnZS5lcnJvcihcIllvdSBuZWVkIHRvIHZlcmlmeSB5b3VyIGVtYWlsIGZpcnN0XCIpO1xyXG5cclxuICBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc0xpa2VzXCIpXHJcbiAgICAuYWRkKHtcclxuICAgICAgc2VuZGVyOiB1c2VybmFtZSxcclxuICAgICAgc2VuZGVySWQ6IGF1dGguY3VycmVudFVzZXIudWlkLFxyXG4gICAgICBzdG9yeUlkOiBpZCxcclxuICAgICAgY3JlYXRlZEF0OiBmaXJlYmFzZS5maXJlc3RvcmUuRmllbGRWYWx1ZS5zZXJ2ZXJUaW1lc3RhbXAoKSxcclxuICAgIH0pXHJcbiAgICAudGhlbigoKSA9PiBtZXNzYWdlLnN1Y2Nlc3MoYCR7c3RvcnlUaXRsZX0gYWRkZWQgdG8geW91ciBmYXZvcml0ZXNgKSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiBtZXNzYWdlLmVycm9yKFwiVGhlcmUgaGFzIGJlZW4gYSBwcm9ibGVtXCIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCByZW1vdmVTdG9yeUZyb21GYXZvcml0ZSA9IChpZCwgc3RvcnlUaXRsZSkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGIuY29sbGVjdGlvbihcInN0b3JpZXNMaWtlc1wiKVxyXG4gICAgLndoZXJlKFwic3RvcnlJZFwiLCBcIj09XCIsIGlkKVxyXG4gICAgLndoZXJlKFwic2VuZGVySWRcIiwgXCI9PVwiLCBhdXRoLmN1cnJlbnRVc2VyLnVpZClcclxuICAgIC5nZXQoKVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzTGlrZXNcIikuZG9jKGRhdGEuZG9jc1swXS5pZCkuZGVsZXRlKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKCkgPT4gbWVzc2FnZS5zdWNjZXNzKGAke3N0b3J5VGl0bGV9IHJlbW92ZWQgZnJvbSB5b3VyIGZhdm9yaXRlc2ApKVxyXG4gICAgLmNhdGNoKChlcnIpID0+IG1lc3NhZ2UuZXJyb3IoXCJUaGVyZSBoYXMgYmVlbiBhIHByb2JsZW1cIikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0b3J5Q2hhcmFjdGVycyA9ICgpID0+IChkaXNwYXRjaCkgPT4ge307XHJcblxyXG4vLyBDSEFQVEVSc1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZENoYXB0ZXIgPSAoZGF0YSwgc2Vjb25kYXJ5Q2hhcmFjdGVycykgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGlzcGF0Y2goeyB0eXBlOiB0eXBlcy5BRERfQ0hBUFRFUiwgcGF5bG9hZDogeyBsb2FkaW5nOiB0cnVlIH0gfSk7XHJcbiAgZGIuY29sbGVjdGlvbihcImNoYXB0ZXJzXCIpXHJcbiAgICAuYWRkKHtcclxuICAgICAgLi4uZGF0YSxcclxuICAgICAgYXV0aG9ySWQ6IGF1dGguY3VycmVudFVzZXIudWlkLFxyXG4gICAgICBjb21tZW50c0NvdW50OiAwLFxyXG4gICAgICBub3RlOiAwLFxyXG4gICAgICB2b3RlcnM6IFtdLFxyXG4gICAgICB2b3Rlc0NvdW50OiAwLFxyXG4gICAgICBjcmVhdGVkQXQ6IGZpcmViYXNlLmZpcmVzdG9yZS5GaWVsZFZhbHVlLnNlcnZlclRpbWVzdGFtcCgpLFxyXG4gICAgfSlcclxuICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgZGIuY29sbGVjdGlvbihcInN0b3JpZXNcIilcclxuICAgICAgICAuZG9jKGRhdGEuc3RvcnlJZClcclxuICAgICAgICAuZ2V0KClcclxuICAgICAgICAudGhlbigoZG9jKSA9PiB7XHJcbiAgICAgICAgICBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKVxyXG4gICAgICAgICAgICAuZG9jKGRhdGEuc3RvcnlJZClcclxuICAgICAgICAgICAgLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgc2Vjb25kYXJ5Q2hhcmFjdGVycyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IHR5cGVzLkFERF9DSEFQVEVSLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkNoYXB0ZXIgYWRkZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICAgICAgICAgIGNoYXBJZDogcmVzLmlkLFxyXG4gICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgLy8gLnRoZW4oKHJlcykgPT4ge1xyXG4gIC8vICAgZGlzcGF0Y2goe1xyXG4gIC8vICAgICB0eXBlOiB0eXBlcy5BRERfQ0hBUFRFUixcclxuICAvLyAgICAgcGF5bG9hZDoge1xyXG4gIC8vICAgICAgIG1lc3NhZ2U6IFwiQ2hhcHRlciBhZGRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAvLyAgICAgICBjaGFwSWQ6IHJlcy5pZCxcclxuICAvLyAgICAgfSxcclxuICAvLyAgIH0pO1xyXG4gIC8vIH0pXHJcbiAgLy8gLmNhdGNoKChlcnIpID0+XHJcbiAgLy8gICBkaXNwYXRjaCh7XHJcbiAgLy8gICAgIHR5cGU6IHR5cGVzLkFERF9DSEFQVEVSLFxyXG4gIC8vICAgICBwYXlsb2FkOiB7IG1lc3NhZ2U6IGVyci5tZXNzYWdlLCBjaGFwSWQ6IFwiXCIgfSxcclxuICAvLyAgIH0pXHJcbiAgLy8gKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBlZGl0Q2hhcHRlciA9IChkYXRhLCBzdG9yeUlkLCBjaGFwaWQsIHNlY29uZGFyeUNoYXJhY3RlcnMpID0+IChcclxuICBkaXNwYXRjaFxyXG4pID0+IHtcclxuICBkaXNwYXRjaCh7IHR5cGU6IHR5cGVzLkVESVRfQ0hBUFRFUiwgcGF5bG9hZDogeyBsb2FkaW5nOiB0cnVlIH0gfSk7XHJcbiAgZGIuY29sbGVjdGlvbihcImNoYXB0ZXJzXCIpXHJcbiAgICAuZG9jKGNoYXBpZClcclxuICAgIC51cGRhdGUoeyAuLi5kYXRhIH0pXHJcbiAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgIGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpXHJcbiAgICAgICAgLmRvYyhzdG9yeUlkKVxyXG4gICAgICAgIC5nZXQoKVxyXG4gICAgICAgIC50aGVuKChkb2MpID0+IHtcclxuICAgICAgICAgIGRiLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpXHJcbiAgICAgICAgICAgIC5kb2Moc3RvcnlJZClcclxuICAgICAgICAgICAgLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgc2Vjb25kYXJ5Q2hhcmFjdGVycyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IHR5cGVzLkVESVRfQ0hBUFRFUixcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJDaGFwdGVyIGVkaXRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlbGV0ZUNoYXB0ZXIgPSAoaWQsIHN0b3J5SWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRpc3BhdGNoKHsgdHlwZTogdHlwZXMuREVMRVRFX0NIQVBURVIsIHBheWxvYWQ6IHsgbG9hZGluZ0NoYXB0ZXI6IHRydWUgfSB9KTtcclxuICBkYi5jb2xsZWN0aW9uKFwiY2hhcHRlcnNcIilcclxuICAgIC5kb2MoaWQpXHJcbiAgICAuZ2V0KClcclxuICAgIC50aGVuKChkb2MpID0+IHtcclxuICAgICAgY29uc3QgY2hhcmFjdGVyc0Zyb21DaGFwdGVyID0gZG9jLmRhdGEoKS5jaGFyYWN0ZXJzO1xyXG4gICAgICBkYi5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKVxyXG4gICAgICAgIC5kb2Moc3RvcnlJZClcclxuICAgICAgICAuZ2V0KClcclxuICAgICAgICAudGhlbigoc3RvcnkpID0+IHtcclxuICAgICAgICAgIGNvbnN0IGNoYXJhY3RlcnNGcm9tU3RvcnkgPSBzdG9yeS5kYXRhKCkuc2Vjb25kYXJ5Q2hhcmFjdGVycztcclxuICAgICAgICAgIGxldCBuZXdBcnIgPSBjaGFyYWN0ZXJzRnJvbVN0b3J5Lm1hcCgoYykgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY2hhcmFjdGVyc0Zyb21DaGFwdGVyLmluY2x1ZGVzKGMuaWQpKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHsgLi4uYywgdGltZXM6IGMudGltZXMgLSAxIH07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgbmV3QXJyID0gbmV3QXJyLmZpbHRlcigoYykgPT4gYy50aW1lcyA+IDApO1xyXG4gICAgICAgICAgZGIuY29sbGVjdGlvbihcInN0b3JpZXNcIilcclxuICAgICAgICAgICAgLmRvYyhzdG9yeUlkKVxyXG4gICAgICAgICAgICAudXBkYXRlKHsgc2Vjb25kYXJ5Q2hhcmFjdGVyczogbmV3QXJyIH0pXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICBkYi5jb2xsZWN0aW9uKFwiY2hhcHRlcnNcIilcclxuICAgICAgICAgICAgICAgIC5kb2MoaWQpXHJcbiAgICAgICAgICAgICAgICAuZGVsZXRlKClcclxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IHR5cGVzLkRFTEVURV9DSEFQVEVSLFxyXG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiQ2hhcHRlciBkZWxldGVkIHN1Y2Nlc3NmdWxseVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgbG9hZGluZ0NoYXB0ZXI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q2hhcHRlciA9IChzdG9yeUlkLCBpZCwgdHlwZSkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGIuY29sbGVjdGlvbihcInN0b3JpZXNcIilcclxuICAgIC5kb2Moc3RvcnlJZClcclxuICAgIC5nZXQoKVxyXG4gICAgLnRoZW4oKGRvYykgPT4ge1xyXG4gICAgICBpZiAoZG9jLmV4aXN0cykge1xyXG4gICAgICAgIGRiLmNvbGxlY3Rpb24oXCJjaGFwdGVyc1wiKVxyXG4gICAgICAgICAgLmRvYyhpZClcclxuICAgICAgICAgIC5nZXQoKVxyXG4gICAgICAgICAgLnRoZW4oKGNoYXApID0+IHtcclxuICAgICAgICAgICAgaWYgKGNoYXAuZXhpc3RzKSB7XHJcbiAgICAgICAgICAgICAgaWYgKHR5cGUgPT09IFwic2hvd1wiKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2hhcmFjdGVycyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgbGV0IGxvY2F0aW9ucyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNoYXJhUXVlcnkgPSBbXTtcclxuICAgICAgICAgICAgICAgIGxldCBsb2NRdWVyeSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2hhcmFjdGVyc0luQ2hhcGVyID0gY2hhcC5kYXRhKCkuY2hhcmFjdGVycztcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2F0aW9uc0luQ2hhcGVyID0gY2hhcC5kYXRhKCkubG9jYXRpb25zO1xyXG4gICAgICAgICAgICAgICAgY2hhcmFjdGVyc0luQ2hhcGVyLmZvckVhY2goKGNoYXIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgY2hhcmFRdWVyeS5wdXNoKGRiLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzXCIpLmRvYyhjaGFyKS5nZXQoKSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uc0luQ2hhcGVyLmZvckVhY2goKGxvYykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBsb2NRdWVyeS5wdXNoKGRiLmNvbGxlY3Rpb24oXCJsb2NhdGlvbnNcIikuZG9jKGxvYykuZ2V0KCkpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBjaGFyYVF1ZXJ5ID0gUHJvbWlzZS5hbGwoY2hhcmFRdWVyeSk7XHJcbiAgICAgICAgICAgICAgICBsb2NRdWVyeSA9IFByb21pc2UuYWxsKGxvY1F1ZXJ5KTtcclxuICAgICAgICAgICAgICAgIFByb21pc2UuYWxsKFtjaGFyYVF1ZXJ5LCBsb2NRdWVyeV0pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICByZXNbMF0uZm9yRWFjaCgoYykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoYXJhY3RlcnMucHVzaCh7IC4uLmMuZGF0YSgpLCBpZDogYy5pZCB9KTtcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgIHJlc1sxXS5mb3JFYWNoKChsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25zLnB1c2goeyAuLi5sLmRhdGEoKSwgaWQ6IGwuaWQgfSk7XHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogdHlwZXMuR0VUX0NIQVBURVIsXHJcbiAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2hhcHRlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5jaGFwLmRhdGEoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGNoYXAuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9ucyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhcmFjdGVycyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHVibGljOiBkb2MuZGF0YSgpLnB1YmxpYyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcnlUaXRsZTogZG9jLmRhdGEoKS50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBjaGFwdGVyRXhpc3RzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgICAgdHlwZTogdHlwZXMuR0VUX0NIQVBURVIsXHJcbiAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBjaGFwdGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAuLi5jaGFwLmRhdGEoKSxcclxuICAgICAgICAgICAgICAgICAgICAgIGlkOiBjaGFwLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgcHVibGljOiBkb2MuZGF0YSgpLnB1YmxpYyxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGNoYXB0ZXJFeGlzdHM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogdHlwZXMuR0VUX0NIQVBURVIsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiB7IGNoYXB0ZXJFeGlzdHM6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IHR5cGVzLkdFVF9DSEFQVEVSLFxyXG4gICAgICAgICAgcGF5bG9hZDogeyBjaGFwdGVyRXhpc3RzOiBmYWxzZSB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDaGFwdGVycyA9IChpZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGIuY29sbGVjdGlvbihcImNoYXB0ZXJzXCIpXHJcbiAgICAud2hlcmUoXCJzdG9yeUlkXCIsIFwiPT1cIiwgaWQpXHJcbiAgICAub3JkZXJCeShcIm51bWJlclwiLCBcImFzY1wiKVxyXG4gICAgLm9uU25hcHNob3QoKGRvY3MpID0+IHtcclxuICAgICAgbGV0IGFyciA9IFtdO1xyXG4gICAgICBkb2NzLmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgICAgIGFyci5wdXNoKHtcclxuICAgICAgICAgIGF1dGhvcklkOiBkb2MuZGF0YSgpLmF1dGhvcklkLFxyXG4gICAgICAgICAgaWQ6IGRvYy5pZCxcclxuICAgICAgICAgIGNyZWF0ZWRBdDogZG9jLmRhdGEoKS5jcmVhdGVkQXQsXHJcbiAgICAgICAgICBudW1iZXI6IGRvYy5kYXRhKCkubnVtYmVyLFxyXG4gICAgICAgICAgdGl0bGU6IGRvYy5kYXRhKCkudGl0bGUsXHJcbiAgICAgICAgICBjb21tZW50c0NvdW50OiBkb2MuZGF0YSgpLmNvbW1lbnRzQ291bnQsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogdHlwZXMuR0VUX0NIQVBURVJTLFxyXG4gICAgICAgIHBheWxvYWQ6IGFycixcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbi8vIExPQ0FUSU9OU1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZExvY2F0aW9uID0gKGRhdGEpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKFwiY291Y291XCIpO1xyXG4gIGRpc3BhdGNoKHsgdHlwZTogdHlwZXMuQUREX0xPQ0FUSU9OLCBwYXlsb2FkOiB7IGxvYWRpbmdMb2M6IHRydWUgfSB9KTtcclxuXHJcbiAgY29uc3QgaW1hZ2VOYW1lID0gZGF0YS5uYW1lLnRvTG93ZXJDYXNlKCkuc3BsaXQoXCIgXCIpLmpvaW4oXCJfXCIpO1xyXG5cclxuICBpZiAodHlwZW9mIGRhdGEuaW1hZ2UgPT09IFwib2JqZWN0XCIpIHtcclxuICAgIHN0b3JhZ2VcclxuICAgICAgLnJlZihgJHthdXRoLmN1cnJlbnRVc2VyLnVpZH0vJHtpbWFnZU5hbWV9YClcclxuICAgICAgLnB1dChkYXRhLmltYWdlKVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHN0b3JhZ2VcclxuICAgICAgICAgIC5yZWYoYXV0aC5jdXJyZW50VXNlci51aWQpXHJcbiAgICAgICAgICAuY2hpbGQoaW1hZ2VOYW1lKVxyXG4gICAgICAgICAgLmdldERvd25sb2FkVVJMKCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKCh1cmwpID0+IHtcclxuICAgICAgICByZXR1cm4gZGIuY29sbGVjdGlvbihcImxvY2F0aW9uc1wiKS5hZGQoe1xyXG4gICAgICAgICAgLi4uZGF0YSxcclxuICAgICAgICAgIGltYWdlOiB1cmwsXHJcbiAgICAgICAgICBjcmVhdGVkQXQ6IGZpcmViYXNlLmZpcmVzdG9yZS5GaWVsZFZhbHVlLnNlcnZlclRpbWVzdGFtcCgpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigocmVzKSA9PlxyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IHR5cGVzLkFERF9MT0NBVElPTixcclxuICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJMb2NhdGlvbiBhZGRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgICAgbG9jSWQ6IHJlcy5pZCxcclxuICAgICAgICAgICAgbG9hZGluZ0xvYzogZmFsc2UsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pXHJcbiAgICAgIClcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBtZXNzYWdlLmVycm9yKGVyci5tZXNzYWdlKTtcclxuICAgICAgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGRiLmNvbGxlY3Rpb24oXCJsb2NhdGlvbnNcIilcclxuICAgICAgLmFkZCh7XHJcbiAgICAgICAgLi4uZGF0YSxcclxuICAgICAgICBjcmVhdGVkQXQ6IGZpcmViYXNlLmZpcmVzdG9yZS5GaWVsZFZhbHVlLnNlcnZlclRpbWVzdGFtcCgpLFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigocmVzKSA9PlxyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IHR5cGVzLkFERF9MT0NBVElPTixcclxuICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJMb2NhdGlvbiBhZGRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgICAgbG9jSWQ6IHJlcy5pZCxcclxuICAgICAgICAgICAgbG9hZGluZ0xvYzogZmFsc2UsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pXHJcbiAgICAgIClcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBtZXNzYWdlLmVycm9yKGVyci5tZXNzYWdlKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGVkaXRMb2NhdGlvbiA9IChkYXRhKSA9PiAoZGlzcGF0Y2gpID0+IHt9O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldExvY2F0aW9uID0gKGlkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkYi5jb2xsZWN0aW9uKFwibG9jYXRpb25zXCIpXHJcbiAgICAuZG9jKGlkKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigoZG9jKSA9PiB7XHJcbiAgICAgIGlmIChkb2MuZXhpc3RzKSB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogdHlwZXMuR0VUX0xPQ0FUSU9OLFxyXG4gICAgICAgICAgcGF5bG9hZDogeyAuLi5kb2MuZGF0YSgpLCBpZDogZG9jLmlkIH0sXHJcbiAgICAgICAgICBsb2NhdGlvbkV4aXN0czogdHJ1ZSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiB0eXBlcy5HRVRfTE9DQVRJT04sXHJcbiAgICAgICAgICBsb2NhdGlvbkV4aXN0czogZmFsc2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFVzZXJMb2NhdGlvbnMgPSAoKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkYi5jb2xsZWN0aW9uKFwibG9jYXRpb25zXCIpXHJcbiAgICAud2hlcmUoXCJhdXRob3JJZFwiLCBcIj09XCIsIGF1dGguY3VycmVudFVzZXIudWlkKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigoZG9jcykgPT4ge1xyXG4gICAgICBsZXQgbG9jYXRpb25zID0gW107XHJcbiAgICAgIGRvY3MuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICAgICAgbG9jYXRpb25zID0gWy4uLmxvY2F0aW9ucywgeyBpZDogZG9jLmlkLCAuLi5kb2MuZGF0YSgpIH1dO1xyXG4gICAgICB9KTtcclxuICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IHR5cGVzLkdFVF9VU0VSX0xPQ0FUSU9OUyxcclxuICAgICAgICBwYXlsb2FkOiBsb2NhdGlvbnMsXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RvcnlMb2NhdGlvbnMgPSAoc3RvcnlJZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGIuY29sbGVjdGlvbihcImxvY2F0aW9uc1wiKVxyXG4gICAgLndoZXJlKFwic3RvcnlJZFwiLCBcIj09XCIsIHN0b3J5SWQpXHJcbiAgICAuZ2V0KClcclxuICAgIC50aGVuKChkb2NzKSA9PiB7XHJcbiAgICAgIGNvbnN0IGxvY2F0aW9ucyA9IGRvY3MuZG9jcy5tYXAoKGRvYykgPT4gKHsgLi4uZG9jLmRhdGEoKSwgaWQ6IGRvYy5pZCB9KSk7XHJcbiAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiB0eXBlcy5HRVRfU1RPUllfTE9DQVRJT05TLFxyXG4gICAgICAgIHBheWxvYWQ6IGxvY2F0aW9ucyxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbi8vIENPTU1FTlRTXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q29tbWVudHMgPSAoaWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRiLmNvbGxlY3Rpb24oXCJjb21tZW50c1wiKVxyXG4gICAgLndoZXJlKFwiY2hhcHRlcklkXCIsIFwiPT1cIiwgaWQpXHJcbiAgICAub3JkZXJCeShcImNyZWF0ZWRBdFwiLCBcImRlc2NcIilcclxuICAgIC5vblNuYXBzaG90KChzbmFwKSA9PiB7XHJcbiAgICAgIGxldCBjb21tZW50cyA9IHNuYXAuZG9jcy5tYXAoKGNvbW1lbnQpID0+ICh7XHJcbiAgICAgICAgLi4uY29tbWVudC5kYXRhKCksXHJcbiAgICAgICAgaWQ6IGNvbW1lbnQuaWQsXHJcbiAgICAgIH0pKTtcclxuICAgICAgbGV0IHF1ZXJpZXMgPSBbXTtcclxuICAgICAgY29tbWVudHMuZm9yRWFjaCgoY29tbSkgPT4ge1xyXG4gICAgICAgIHF1ZXJpZXMucHVzaChkYi5jb2xsZWN0aW9uKFwidXNlcnNcIikuZG9jKGNvbW0udXNlcklkKS5nZXQoKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBQcm9taXNlLmFsbChxdWVyaWVzKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBjb21tZW50cyA9IGNvbW1lbnRzLm1hcCgoY29tbSkgPT4gKHtcclxuICAgICAgICAgIC4uLmNvbW0sXHJcbiAgICAgICAgICB1c2VySW1hZ2U6IHJlcy5maW5kKChkKSA9PiBkLmlkID09PSBjb21tLnVzZXJJZCkuZGF0YSgpLmltYWdlLFxyXG4gICAgICAgIH0pKTtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiB0eXBlcy5HRVRfQ09NTUVOVFMsXHJcbiAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgIGxvYWRpbmdDb21tZW50czogZmFsc2UsXHJcbiAgICAgICAgICAgIGNvbW1lbnRzLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzdWJtaXRDb21tZW50ID0gKGluZm8pID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGlmICghYXV0aC5jdXJyZW50VXNlci5lbWFpbFZlcmlmaWVkKVxyXG4gICAgcmV0dXJuIG1lc3NhZ2UuZXJyb3IoXCJZb3UgbmVlZCB0byB2ZXJpZnkgeW91ciBlbWFpbCBmaXJzdFwiKTtcclxuICBpZiAoIWluZm8uY29udGVudCkgcmV0dXJuIG1lc3NhZ2UuZXJyb3IoXCJDb250ZW50IG11c3Qgbm90IGJlIGVtcHR5XCIpO1xyXG5cclxuICBkYi5jb2xsZWN0aW9uKFwiY29tbWVudHNcIilcclxuICAgIC5hZGQoe1xyXG4gICAgICAuLi5pbmZvLFxyXG4gICAgICBjcmVhdGVkQXQ6IGZpcmViYXNlLmZpcmVzdG9yZS5GaWVsZFZhbHVlLnNlcnZlclRpbWVzdGFtcCgpLFxyXG4gICAgfSlcclxuICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgbWVzc2FnZS5zdWNjZXNzKFwiQ29tbWVudCBwb3N0ZWQgc3VjY2Vzc2Z1bGx5XCIpO1xyXG4gICAgICBkYi5jb2xsZWN0aW9uKFwiY2hhcHRlcnNcIilcclxuICAgICAgICAuZG9jKGluZm8uY2hhcHRlcklkKVxyXG4gICAgICAgIC5nZXQoKVxyXG4gICAgICAgIC50aGVuKChjaGFwKSA9PiB7XHJcbiAgICAgICAgICBkYi5jb2xsZWN0aW9uKFwiY2hhcHRlcnNcIilcclxuICAgICAgICAgICAgLmRvYyhpbmZvLmNoYXB0ZXJJZClcclxuICAgICAgICAgICAgLnVwZGF0ZSh7IGNvbW1lbnRzQ291bnQ6IGNoYXAuZGF0YSgpLmNvbW1lbnRzQ291bnQgKyAxIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiBtZXNzYWdlLmVycm9yKGVyci5tZXNzYWdlKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlQ29tbWVudCA9IChpZCwgY2hhcGlkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkYi5jb2xsZWN0aW9uKFwiY2hhcHRlcnNcIilcclxuICAgIC5kb2MoY2hhcGlkKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbigoY2hhcCkgPT4ge1xyXG4gICAgICBkYi5jb2xsZWN0aW9uKFwiY2hhcHRlcnNcIilcclxuICAgICAgICAuZG9jKGNoYXBpZClcclxuICAgICAgICAudXBkYXRlKHsgY29tbWVudHNDb3VudDogY2hhcC5kYXRhKCkuY29tbWVudHNDb3VudCAtIDEgfSlcclxuICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICBkYi5jb2xsZWN0aW9uKFwiY29tbWVudHNcIikuZG9jKGlkKS5kZWxldGUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG4iLCJpbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlL2FwcFwiO1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9hdXRoXCI7XHJcbmltcG9ydCBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9zdG9yYWdlXCI7XHJcblxyXG5jb25zdCBwcm9kQ29uZmlnID0ge1xyXG4gIGFwaUtleTogcHJvY2Vzcy5lbnYuRklSRUJBU0VfQVBJX0tFWSxcclxuICBhdXRoRG9tYWluOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9BVVRIX0RPTUFJTixcclxuICBkYXRhYmFzZVVSTDogcHJvY2Vzcy5lbnYuRklSRUJBU0VfREFUQUJBU0VfVVJMLFxyXG4gIHByb2plY3RJZDogcHJvY2Vzcy5lbnYuRklSRUJBU0VfUFJPSkVDVF9JRCxcclxuICBzdG9yYWdlQnVja2V0OiBwcm9jZXNzLmVudi5GSVJFQkFTRV9TVE9SQUdFX0JVQ0tFVCxcclxuICBtZXNzYWdpbmdTZW5kZXJJZDogcHJvY2Vzcy5lbnYuRklSRUJBU0VfTUVTU0FHSU5HX1NFTkRFUl9JRCxcclxuICBhcHBJZDogcHJvY2Vzcy5lbnYuRklSRUJBU0VfQVBQX0lELFxyXG59O1xyXG5cclxuY29uc3QgZGV2Q29uZmlnID0ge1xyXG4gIGFwaUtleTogcHJvY2Vzcy5lbnYuRklSRUJBU0VfQVBJX0tFWSxcclxuICBhdXRoRG9tYWluOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9BVVRIX0RPTUFJTixcclxuICBkYXRhYmFzZVVSTDogcHJvY2Vzcy5lbnYuRklSRUJBU0VfREFUQUJBU0VfVVJMLFxyXG4gIHByb2plY3RJZDogcHJvY2Vzcy5lbnYuRklSRUJBU0VfUFJPSkVDVF9JRCxcclxuICBzdG9yYWdlQnVja2V0OiBwcm9jZXNzLmVudi5GSVJFQkFTRV9TVE9SQUdFX0JVQ0tFVCxcclxuICBtZXNzYWdpbmdTZW5kZXJJZDogcHJvY2Vzcy5lbnYuRklSRUJBU0VfTUVTU0FHSU5HX1NFTkRFUl9JRCxcclxuICBhcHBJZDogcHJvY2Vzcy5lbnYuRklSRUJBU0VfQVBQX0lELFxyXG59O1xyXG5cclxuY29uc3QgY29uZmlnID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gcHJvZENvbmZpZyA6IGRldkNvbmZpZztcclxuXHJcbmlmICghZmlyZWJhc2UuYXBwcy5sZW5ndGgpIHtcclxuICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGNvbmZpZyk7XHJcbn1cclxuXHJcbmNvbnN0IGRiID0gZmlyZWJhc2UuZmlyZXN0b3JlKCk7XHJcbmNvbnN0IGF1dGggPSBmaXJlYmFzZS5hdXRoKCk7XHJcbmNvbnN0IHN0b3JhZ2UgPSBmaXJlYmFzZS5zdG9yYWdlKCk7XHJcblxyXG5leHBvcnQgeyBkYiwgYXV0aCwgc3RvcmFnZSB9O1xyXG5leHBvcnQgZGVmYXVsdCBjb25maWc7XHJcbiIsImV4cG9ydCBjb25zdCBDQVRFR09SSUVTID0gW1xyXG4gIHsgbmFtZTogXCJEcmFtYVwiLCB2YWx1ZTogXCJkcmFtYVwiIH0sXHJcbiAgeyBuYW1lOiBcIkNvbWVkeVwiLCB2YWx1ZTogXCJjb21lZHlcIiB9LFxyXG4gIHsgbmFtZTogXCJIb3Jyb3JcIiwgdmFsdWU6IFwiaG9ycm9yXCIgfSxcclxuICB7IG5hbWU6IFwiUm9tYW5jZVwiLCB2YWx1ZTogXCJyb21hbmNlXCIgfSxcclxuICB7IG5hbWU6IFwiU2NpLWZpXCIsIHZhbHVlOiBcInNjaS1maVwiIH0sXHJcbiAgeyBuYW1lOiBcIkZhbnRhc3lcIiwgdmFsdWU6IFwiZmFudGFzeVwiIH0sXHJcbiAgeyBuYW1lOiBcIkh1bW9yXCIsIHZhbHVlOiBcImh1bW9yXCIgfSxcclxuICB7IG5hbWU6IFwiQWN0aW9uXCIsIHZhbHVlOiBcImFjdGlvblwiIH0sXHJcbiAgeyBuYW1lOiBcIlRocmlsbGVyXCIsIHZhbHVlOiBcInRocmlsbGVyXCIgfSxcclxuICB7IG5hbWU6IFwiU3VwZXJuYXR1cmFsXCIsIHZhbHVlOiBcInN1cGVybmF0dXJhbFwiIH0sXHJcbiAgeyBuYW1lOiBcIkFkdmVudHVyZVwiLCB2YWx1ZTogXCJhZHZlbnR1cmVcIiB9LFxyXG4gIHsgbmFtZTogXCJNeXN0ZXJ5XCIsIHZhbHVlOiBcIm15c3RlcnlcIiB9LFxyXG4gIHsgbmFtZTogXCJXZXN0ZXJuXCIsIHZhbHVlOiBcIndlc3Rlcm5cIiB9LFxyXG4gIHsgbmFtZTogXCJIaXN0b3J5XCIsIHZhbHVlOiBcImhpc3RvcnlcIiB9LFxyXG4gIHsgbmFtZTogXCJDcmltZVwiLCB2YWx1ZTogXCJjcmltZVwiIH0sXHJcbiAgeyBuYW1lOiBcIkZhbmZpY3Rpb25cIiwgdmFsdWU6IFwiZmFuZmljdGlvblwiIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgQ09QWVJJR0hUUyA9IFtcclxuICB7IG5hbWU6IFwiUHVibGljIERvbWFpblwiLCB2YWx1ZTogXCJwdWJsaWMgZG9tYWluXCIgfSxcclxuICB7IG5hbWU6IFwiQWxsIFJpZ2h0cyBSZXNlcnZlZFwiLCB2YWx1ZTogXCJhbGwgcmlnaHRzIHJlc2VydmVkXCIgfSxcclxuICB7IG5hbWU6IFwiQ3JlYXRpdmUgQ29tbW9uc1wiLCB2YWx1ZTogXCJjcmVhdGl2ZSBjb21tb25zXCIgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBMQU5HVUFHRVMgPSBbXHJcbiAgeyBuYW1lOiBcIkFmYXJcIiwgdmFsdWU6IFwiYWFcIiB9LFxyXG4gIHsgbmFtZTogXCJBYmtoYXppYW5cIiwgdmFsdWU6IFwiYWJcIiB9LFxyXG4gIHsgbmFtZTogXCJBdmVzdGFuXCIsIHZhbHVlOiBcImFlXCIgfSxcclxuICB7IG5hbWU6IFwiQWZyaWthYW5zXCIsIHZhbHVlOiBcImFmXCIgfSxcclxuICB7IG5hbWU6IFwiQWthblwiLCB2YWx1ZTogXCJha1wiIH0sXHJcbiAgeyBuYW1lOiBcIkFtaGFyaWNcIiwgdmFsdWU6IFwiYW1cIiB9LFxyXG4gIHsgbmFtZTogXCJBcmFnb25lc2VcIiwgdmFsdWU6IFwiYW5cIiB9LFxyXG4gIHsgbmFtZTogXCJBcmFiaWNcIiwgdmFsdWU6IFwiYXJcIiB9LFxyXG4gIHsgbmFtZTogXCJBc3NhbWVzZVwiLCB2YWx1ZTogXCJhc1wiIH0sXHJcbiAgeyBuYW1lOiBcIkF2YXJpY1wiLCB2YWx1ZTogXCJhdlwiIH0sXHJcbiAgeyBuYW1lOiBcIkF5bWFyYVwiLCB2YWx1ZTogXCJheVwiIH0sXHJcbiAgeyBuYW1lOiBcIkF6ZXJiYWlqYW5pXCIsIHZhbHVlOiBcImF6XCIgfSxcclxuICB7IG5hbWU6IFwiQmFzaGtpclwiLCB2YWx1ZTogXCJiYVwiIH0sXHJcbiAgeyBuYW1lOiBcIkJlbGFydXNpYW5cIiwgdmFsdWU6IFwiYmVcIiB9LFxyXG4gIHsgbmFtZTogXCJCdWxnYXJpYW5cIiwgdmFsdWU6IFwiYmdcIiB9LFxyXG4gIHsgbmFtZTogXCJCaWhhcmlcIiwgdmFsdWU6IFwiYmhcIiB9LFxyXG4gIHsgbmFtZTogXCJCaXNsYW1hXCIsIHZhbHVlOiBcImJpXCIgfSxcclxuICB7IG5hbWU6IFwiQmFtYmFyYVwiLCB2YWx1ZTogXCJibVwiIH0sXHJcbiAgeyBuYW1lOiBcIkJlbmdhbGlcIiwgdmFsdWU6IFwiYm5cIiB9LFxyXG4gIHsgbmFtZTogXCJUaWJldGFuXCIsIHZhbHVlOiBcImJvXCIgfSxcclxuICB7IG5hbWU6IFwiQnJldG9uXCIsIHZhbHVlOiBcImJyXCIgfSxcclxuICB7IG5hbWU6IFwiQm9zbmlhblwiLCB2YWx1ZTogXCJic1wiIH0sXHJcbiAgeyBuYW1lOiBcIkNhdGFsYW5cIiwgdmFsdWU6IFwiY2FcIiB9LFxyXG4gIHsgbmFtZTogXCJDaGVjaGVuXCIsIHZhbHVlOiBcImNlXCIgfSxcclxuICB7IG5hbWU6IFwiQ2hhbW9ycm9cIiwgdmFsdWU6IFwiY2hcIiB9LFxyXG4gIHsgbmFtZTogXCJDb3JzaWNhblwiLCB2YWx1ZTogXCJjb1wiIH0sXHJcbiAgeyBuYW1lOiBcIkNyZWVcIiwgdmFsdWU6IFwiY3JcIiB9LFxyXG4gIHsgbmFtZTogXCJDemVjaFwiLCB2YWx1ZTogXCJjc1wiIH0sXHJcbiAgeyBuYW1lOiBcIk9sZCBDaHVyY2ggU2xhdm9uaWNcIiwgdmFsdWU6IFwiY3VcIiB9LFxyXG4gIHsgbmFtZTogXCJDaHV2YXNoXCIsIHZhbHVlOiBcImN2XCIgfSxcclxuICB7IG5hbWU6IFwiV2Vsc2hcIiwgdmFsdWU6IFwiY3lcIiB9LFxyXG4gIHsgbmFtZTogXCJEYW5pc2hcIiwgdmFsdWU6IFwiZGFcIiB9LFxyXG4gIHsgbmFtZTogXCJHZXJtYW5cIiwgdmFsdWU6IFwiZGVcIiB9LFxyXG4gIHsgbmFtZTogXCJEaXZlaGlcIiwgdmFsdWU6IFwiZHZcIiB9LFxyXG4gIHsgbmFtZTogXCJEem9uZ2toYVx0XCIsIHZhbHVlOiBcImR6XCIgfSxcclxuICB7IG5hbWU6IFwiRXdlXCIsIHZhbHVlOiBcImVlXCIgfSxcclxuICB7IG5hbWU6IFwiR3JlZWtcIiwgdmFsdWU6IFwiZWxcIiB9LFxyXG4gIHsgbmFtZTogXCJFbmdsaXNoXCIsIHZhbHVlOiBcImVuXCIgfSxcclxuICB7IG5hbWU6IFwiRXNwZXJhbnRvXCIsIHZhbHVlOiBcImVvXCIgfSxcclxuICB7IG5hbWU6IFwiU3BhbmlzaFwiLCB2YWx1ZTogXCJlc1wiIH0sXHJcbiAgeyBuYW1lOiBcIkVzdG9uaWFuXCIsIHZhbHVlOiBcImV0XCIgfSxcclxuICB7IG5hbWU6IFwiQmFzcXVlXCIsIHZhbHVlOiBcImV1XCIgfSxcclxuICB7IG5hbWU6IFwiUGVyc2lhblwiLCB2YWx1ZTogXCJmYVwiIH0sXHJcbiAgeyBuYW1lOiBcIkZ1bGFoXCIsIHZhbHVlOiBcImZmXCIgfSxcclxuICB7IG5hbWU6IFwiRmlubmlzaFwiLCB2YWx1ZTogXCJmaVwiIH0sXHJcbiAgeyBuYW1lOiBcIkZpamlhblwiLCB2YWx1ZTogXCJmalwiIH0sXHJcbiAgeyBuYW1lOiBcIkZhcm9lc2VcIiwgdmFsdWU6IFwiZm9cIiB9LFxyXG4gIHsgbmFtZTogXCJGcmVuY2hcIiwgdmFsdWU6IFwiZnJcIiB9LFxyXG4gIHsgbmFtZTogXCJXZXN0ZXJuIEZyaXNpYW5cIiwgdmFsdWU6IFwiZnlcIiB9LFxyXG4gIHsgbmFtZTogXCJJcmlzaFwiLCB2YWx1ZTogXCJnYVwiIH0sXHJcbiAgeyBuYW1lOiBcIlNjb3R0aXNoIEdhZWxpY1wiLCB2YWx1ZTogXCJnZFwiIH0sXHJcbiAgeyBuYW1lOiBcIkdhbGljaWFuXCIsIHZhbHVlOiBcImdsXCIgfSxcclxuICB7IG5hbWU6IFwiR3VhcmFuaVwiLCB2YWx1ZTogXCJnblwiIH0sXHJcbiAgeyBuYW1lOiBcIkd1amFyYXRpXCIsIHZhbHVlOiBcImd1XCIgfSxcclxuICB7IG5hbWU6IFwiTWFueFwiLCB2YWx1ZTogXCJndlwiIH0sXHJcbiAgeyBuYW1lOiBcIkhhdXNhXCIsIHZhbHVlOiBcImhhXCIgfSxcclxuICB7IG5hbWU6IFwiSGVicmV3XCIsIHZhbHVlOiBcImhlXCIgfSxcclxuICB7IG5hbWU6IFwiSGluZGlcIiwgdmFsdWU6IFwiaGlcIiB9LFxyXG4gIHsgbmFtZTogXCJIaXJpIE1vdHVcIiwgdmFsdWU6IFwiaG9cIiB9LFxyXG4gIHsgbmFtZTogXCJDcm9hdGlhblwiLCB2YWx1ZTogXCJoclwiIH0sXHJcbiAgeyBuYW1lOiBcIkhhaXRpYW5cIiwgdmFsdWU6IFwiaHRcIiB9LFxyXG4gIHsgbmFtZTogXCJIdW5nYXJpYW5cIiwgdmFsdWU6IFwiaHVcIiB9LFxyXG4gIHsgbmFtZTogXCJBcm1lbmlhblwiLCB2YWx1ZTogXCJoeVwiIH0sXHJcbiAgeyBuYW1lOiBcIkhlcmVyb1wiLCB2YWx1ZTogXCJoelwiIH0sXHJcbiAgeyBuYW1lOiBcIkludGVybGluZ3VhXCIsIHZhbHVlOiBcImlhXCIgfSxcclxuICB7IG5hbWU6IFwiSW5kb25lc2lhblwiLCB2YWx1ZTogXCJpZFwiIH0sXHJcbiAgeyBuYW1lOiBcIkludGVybGluZ3VlXCIsIHZhbHVlOiBcImllXCIgfSxcclxuICB7IG5hbWU6IFwiSWdib1wiLCB2YWx1ZTogXCJpZ1wiIH0sXHJcbiAgeyBuYW1lOiBcIlNpY2h1YW4gWWlcIiwgdmFsdWU6IFwiaWlcIiB9LFxyXG4gIHsgbmFtZTogXCJJbnVwaWFxXCIsIHZhbHVlOiBcImlrXCIgfSxcclxuICB7IG5hbWU6IFwiSWRvXCIsIHZhbHVlOiBcImlvXCIgfSxcclxuICB7IG5hbWU6IFwiSWNlbGFuZGljXCIsIHZhbHVlOiBcImlzXCIgfSxcclxuICB7IG5hbWU6IFwiSXRhbGlhblwiLCB2YWx1ZTogXCJpdFwiIH0sXHJcbiAgeyBuYW1lOiBcIkludWt0aXR1dFwiLCB2YWx1ZTogXCJpdVwiIH0sXHJcbiAgeyBuYW1lOiBcIkphcGFuZXNlXCIsIHZhbHVlOiBcImphXCIgfSxcclxuICB7IG5hbWU6IFwiSmF2YW5lc2VcIiwgdmFsdWU6IFwianZcIiB9LFxyXG4gIHsgbmFtZTogXCJHZW9yZ2lhblwiLCB2YWx1ZTogXCJrYVwiIH0sXHJcbiAgeyBuYW1lOiBcIktvbmdvXCIsIHZhbHVlOiBcImtnXCIgfSxcclxuICB7IG5hbWU6IFwiS2lrdXl1XCIsIHZhbHVlOiBcImtpXCIgfSxcclxuICB7IG5hbWU6IFwiS3dhbnlhbWFcIiwgdmFsdWU6IFwia2pcIiB9LFxyXG4gIHsgbmFtZTogXCJLYXpha2hcIiwgdmFsdWU6IFwia2tcIiB9LFxyXG4gIHsgbmFtZTogXCJHcmVlbmxhbmRpY1wiLCB2YWx1ZTogXCJrbFwiIH0sXHJcbiAgeyBuYW1lOiBcIktobWVyXCIsIHZhbHVlOiBcImttXCIgfSxcclxuICB7IG5hbWU6IFwiS2FubmFkYVwiLCB2YWx1ZTogXCJrblwiIH0sXHJcbiAgeyBuYW1lOiBcIktvcmVhblwiLCB2YWx1ZTogXCJrb1wiIH0sXHJcbiAgeyBuYW1lOiBcIkthbnVyaVwiLCB2YWx1ZTogXCJrclwiIH0sXHJcbiAgeyBuYW1lOiBcIkthc2htaXJpXCIsIHZhbHVlOiBcImtzXCIgfSxcclxuICB7IG5hbWU6IFwiS3VyZGlzaFwiLCB2YWx1ZTogXCJrdVwiIH0sXHJcbiAgeyBuYW1lOiBcIktvbWlcIiwgdmFsdWU6IFwia3ZcIiB9LFxyXG4gIHsgbmFtZTogXCJDb3JuaXNoXCIsIHZhbHVlOiBcImt3XCIgfSxcclxuICB7IG5hbWU6IFwiS2lyZ2hpelwiLCB2YWx1ZTogXCJreVwiIH0sXHJcbiAgeyBuYW1lOiBcIkxhdGluXCIsIHZhbHVlOiBcImxhXCIgfSxcclxuICB7IG5hbWU6IFwiTHV4ZW1ib3VyZ2lzaFwiLCB2YWx1ZTogXCJsYlwiIH0sXHJcbiAgeyBuYW1lOiBcIkdhbmRhXCIsIHZhbHVlOiBcImxnXCIgfSxcclxuICB7IG5hbWU6IFwiTGltYnVyZ2lzaFwiLCB2YWx1ZTogXCJsaVwiIH0sXHJcbiAgeyBuYW1lOiBcIkxpbmdhbGFcIiwgdmFsdWU6IFwibG5cIiB9LFxyXG4gIHsgbmFtZTogXCJMYW9cIiwgdmFsdWU6IFwibG9cIiB9LFxyXG4gIHsgbmFtZTogXCJMaXRodWFuaWFuXCIsIHZhbHVlOiBcImx0XCIgfSxcclxuICB7IG5hbWU6IFwiTHViYVwiLCB2YWx1ZTogXCJsdVwiIH0sXHJcbiAgeyBuYW1lOiBcIkxhdHZpYW5cIiwgdmFsdWU6IFwibHZcIiB9LFxyXG4gIHsgbmFtZTogXCJNYWxhZ2FzeVwiLCB2YWx1ZTogXCJtZ1wiIH0sXHJcbiAgeyBuYW1lOiBcIk1hcnNoYWxsZXNlXCIsIHZhbHVlOiBcIm1oXCIgfSxcclxuICB7IG5hbWU6IFwiTcSBb3JpXCIsIHZhbHVlOiBcIm1pXCIgfSxcclxuICB7IG5hbWU6IFwiTWFjZWRvbmlhblwiLCB2YWx1ZTogXCJta1wiIH0sXHJcbiAgeyBuYW1lOiBcIk1hbGF5YWxhbVwiLCB2YWx1ZTogXCJtbFwiIH0sXHJcbiAgeyBuYW1lOiBcIk1vbmdvbGlhblwiLCB2YWx1ZTogXCJtblwiIH0sXHJcbiAgeyBuYW1lOiBcIk1vbGRhdmlhblwiLCB2YWx1ZTogXCJtb1wiIH0sXHJcbiAgeyBuYW1lOiBcIk1hcmF0aGlcIiwgdmFsdWU6IFwibXJcIiB9LFxyXG4gIHsgbmFtZTogXCJNYWxheVwiLCB2YWx1ZTogXCJtc1wiIH0sXHJcbiAgeyBuYW1lOiBcIk1hbHRlc2VcIiwgdmFsdWU6IFwibXRcIiB9LFxyXG4gIHsgbmFtZTogXCJCdXJtZXNlXCIsIHZhbHVlOiBcIm15XCIgfSxcclxuICB7IG5hbWU6IFwiTmF1cnVcIiwgdmFsdWU6IFwibmFcIiB9LFxyXG4gIHsgbmFtZTogXCJOb3J3ZWdpYW4gQm9rbcOlbFwiLCB2YWx1ZTogXCJuYlwiIH0sXHJcbiAgeyBuYW1lOiBcIk5vcnRoIE5kZWJlbGVcIiwgdmFsdWU6IFwibmRcIiB9LFxyXG4gIHsgbmFtZTogXCJOZXBhbGlcIiwgdmFsdWU6IFwibmVcIiB9LFxyXG4gIHsgbmFtZTogXCJOZG9uZ2FcIiwgdmFsdWU6IFwibmdcIiB9LFxyXG4gIHsgbmFtZTogXCJEdXRjaFwiLCB2YWx1ZTogXCJubFwiIH0sXHJcbiAgeyBuYW1lOiBcIk5vcndlZ2lhbiBOeW5vcnNrXCIsIHZhbHVlOiBcIm5uXCIgfSxcclxuICB7IG5hbWU6IFwiTm9yd2VnaWFuXCIsIHZhbHVlOiBcIm5vXCIgfSxcclxuICB7IG5hbWU6IFwiU291dGggTmRlYmVsZVwiLCB2YWx1ZTogXCJuclwiIH0sXHJcbiAgeyBuYW1lOiBcIk5hdmFqb1wiLCB2YWx1ZTogXCJudlwiIH0sXHJcbiAgeyBuYW1lOiBcIkNoaWNoZXdhXCIsIHZhbHVlOiBcIm55XCIgfSxcclxuICB7IG5hbWU6IFwiT2NjaXRhblwiLCB2YWx1ZTogXCJvY1wiIH0sXHJcbiAgeyBuYW1lOiBcIk9qaWJ3YVwiLCB2YWx1ZTogXCJvalwiIH0sXHJcbiAgeyBuYW1lOiBcIk9yb21vXCIsIHZhbHVlOiBcIm9tXCIgfSxcclxuICB7IG5hbWU6IFwiT3JpeWFcIiwgdmFsdWU6IFwib3JcIiB9LFxyXG4gIHsgbmFtZTogXCJPc3NldGlhblwiLCB2YWx1ZTogXCJvc1wiIH0sXHJcbiAgeyBuYW1lOiBcIlBhbmphYmlcIiwgdmFsdWU6IFwicGFcIiB9LFxyXG4gIHsgbmFtZTogXCJQxIFsaVwiLCB2YWx1ZTogXCJwaVwiIH0sXHJcbiAgeyBuYW1lOiBcIlBvbGlzaFwiLCB2YWx1ZTogXCJwbFwiIH0sXHJcbiAgeyBuYW1lOiBcIlBhc2h0b1wiLCB2YWx1ZTogXCJwc1wiIH0sXHJcbiAgeyBuYW1lOiBcIlBvcnR1Z3Vlc2VcIiwgdmFsdWU6IFwicHRcIiB9LFxyXG4gIHsgbmFtZTogXCJRdWVjaHVhXCIsIHZhbHVlOiBcInF1XCIgfSxcclxuICB7IG5hbWU6IFwiUmV1bmlvbmVzZVwiLCB2YWx1ZTogXCJyY1wiIH0sXHJcbiAgeyBuYW1lOiBcIlJvbWFuc2hcIiwgdmFsdWU6IFwicm1cIiB9LFxyXG4gIHsgbmFtZTogXCJLaXJ1bmRpXCIsIHZhbHVlOiBcInJuXCIgfSxcclxuICB7IG5hbWU6IFwiUm9tYW5pYW5cIiwgdmFsdWU6IFwicm9cIiB9LFxyXG4gIHsgbmFtZTogXCJSdXNzaWFuXCIsIHZhbHVlOiBcInJ1XCIgfSxcclxuICB7IG5hbWU6IFwiS2lueWFyd2FuZGFcIiwgdmFsdWU6IFwicndcIiB9LFxyXG4gIHsgbmFtZTogXCJTYW5za3JpdFwiLCB2YWx1ZTogXCJzYVwiIH0sXHJcbiAgeyBuYW1lOiBcIlNhcmRpbmlhblwiLCB2YWx1ZTogXCJzY1wiIH0sXHJcbiAgeyBuYW1lOiBcIlNpbmRoaVwiLCB2YWx1ZTogXCJzZFwiIH0sXHJcbiAgeyBuYW1lOiBcIk5vcnRoZXJuIFNhbWlcIiwgdmFsdWU6IFwic2VcIiB9LFxyXG4gIHsgbmFtZTogXCJTYW5nb1wiLCB2YWx1ZTogXCJzZ1wiIH0sXHJcbiAgeyBuYW1lOiBcIlNlcmJvLUNyb2F0aWFuXCIsIHZhbHVlOiBcInNoXCIgfSxcclxuICB7IG5hbWU6IFwiU2luaGFsZXNlXCIsIHZhbHVlOiBcInNpXCIgfSxcclxuICB7IG5hbWU6IFwiU2xvdmFrXCIsIHZhbHVlOiBcInNrXCIgfSxcclxuICB7IG5hbWU6IFwiU2xvdmVuaWFuXCIsIHZhbHVlOiBcInNsXCIgfSxcclxuICB7IG5hbWU6IFwiU2Ftb2FuXCIsIHZhbHVlOiBcInNtXCIgfSxcclxuICB7IG5hbWU6IFwiU2hvbmFcIiwgdmFsdWU6IFwic25cIiB9LFxyXG4gIHsgbmFtZTogXCJTb21hbGlcIiwgdmFsdWU6IFwic29cIiB9LFxyXG4gIHsgbmFtZTogXCJBbGJhbmlhblwiLCB2YWx1ZTogXCJzcVwiIH0sXHJcbiAgeyBuYW1lOiBcIlNlcmJpYW5cIiwgdmFsdWU6IFwic3JcIiB9LFxyXG4gIHsgbmFtZTogXCJTd2F0aVwiLCB2YWx1ZTogXCJzc1wiIH0sXHJcbiAgeyBuYW1lOiBcIlNvdGhvXCIsIHZhbHVlOiBcInN0XCIgfSxcclxuICB7IG5hbWU6IFwiU3VuZGFuZXNlXCIsIHZhbHVlOiBcInN1XCIgfSxcclxuICB7IG5hbWU6IFwiU3dlZGlzaFwiLCB2YWx1ZTogXCJzdlwiIH0sXHJcbiAgeyBuYW1lOiBcIlN3YWhpbGlcIiwgdmFsdWU6IFwic3dcIiB9LFxyXG4gIHsgbmFtZTogXCJUYW1pbFwiLCB2YWx1ZTogXCJ0YVwiIH0sXHJcbiAgeyBuYW1lOiBcIlRlbHVndVwiLCB2YWx1ZTogXCJ0ZVwiIH0sXHJcbiAgeyBuYW1lOiBcIlRhamlrXCIsIHZhbHVlOiBcInRnXCIgfSxcclxuICB7IG5hbWU6IFwiVGhhaVwiLCB2YWx1ZTogXCJ0aFwiIH0sXHJcbiAgeyBuYW1lOiBcIlRpZ3JpbnlhXCIsIHZhbHVlOiBcInRpXCIgfSxcclxuICB7IG5hbWU6IFwiVHVya21lblwiLCB2YWx1ZTogXCJ0a1wiIH0sXHJcbiAgeyBuYW1lOiBcIlRhZ2Fsb2dcIiwgdmFsdWU6IFwidGxcIiB9LFxyXG4gIHsgbmFtZTogXCJUc3dhbmFcIiwgdmFsdWU6IFwidG5cIiB9LFxyXG4gIHsgbmFtZTogXCJUb25nYVwiLCB2YWx1ZTogXCJ0b1wiIH0sXHJcbiAgeyBuYW1lOiBcIlR1cmtpc2hcIiwgdmFsdWU6IFwidHJcIiB9LFxyXG4gIHsgbmFtZTogXCJUc29uZ2FcIiwgdmFsdWU6IFwidHNcIiB9LFxyXG4gIHsgbmFtZTogXCJUYXRhclwiLCB2YWx1ZTogXCJ0dFwiIH0sXHJcbiAgeyBuYW1lOiBcIlR3aVwiLCB2YWx1ZTogXCJ0d1wiIH0sXHJcbiAgeyBuYW1lOiBcIlRhaGl0aWFuXCIsIHZhbHVlOiBcInR5XCIgfSxcclxuICB7IG5hbWU6IFwiVWlnaHVyXCIsIHZhbHVlOiBcInVnXCIgfSxcclxuICB7IG5hbWU6IFwiVWtyYWluaWFuXCIsIHZhbHVlOiBcInVrXCIgfSxcclxuICB7IG5hbWU6IFwiVXJkdVwiLCB2YWx1ZTogXCJ1clwiIH0sXHJcbiAgeyBuYW1lOiBcIlV6YmVrXCIsIHZhbHVlOiBcInV6XCIgfSxcclxuICB7IG5hbWU6IFwiVmVuZGFcIiwgdmFsdWU6IFwidmVcIiB9LFxyXG4gIHsgbmFtZTogXCJWacOqdCBOYW1lc2VcIiwgdmFsdWU6IFwidmlcIiB9LFxyXG4gIHsgbmFtZTogXCJWb2xhcMO8a1wiLCB2YWx1ZTogXCJ2b1wiIH0sXHJcbiAgeyBuYW1lOiBcIldhbGxvb25cIiwgdmFsdWU6IFwid2FcIiB9LFxyXG4gIHsgbmFtZTogXCJXb2xvZlwiLCB2YWx1ZTogXCJ3b1wiIH0sXHJcbiAgeyBuYW1lOiBcIlhob3NhXCIsIHZhbHVlOiBcInhoXCIgfSxcclxuICB7IG5hbWU6IFwiWWlkZGlzaFwiLCB2YWx1ZTogXCJ5aVwiIH0sXHJcbiAgeyBuYW1lOiBcIllvcnViYVwiLCB2YWx1ZTogXCJ5b1wiIH0sXHJcbiAgeyBuYW1lOiBcIlpodWFuZ1wiLCB2YWx1ZTogXCJ6YVwiIH0sXHJcbiAgeyBuYW1lOiBcIkNoaW5lc2VcIiwgdmFsdWU6IFwiemhcIiB9LFxyXG4gIHsgbmFtZTogXCJadWx1XCIsIHZhbHVlOiBcInp1XCIgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBTVEFUVVMgPSBbXHJcbiAgeyBuYW1lOiBcIkluIFByb2dyZXNzXCIsIHZhbHVlOiBcImluIHByb2dyZXNzXCIgfSxcclxuICB7IG5hbWU6IFwiSW4gSGlhdHVzXCIsIHZhbHVlOiBcImluIGhpYXR1c1wiIH0sXHJcbiAgeyBuYW1lOiBcIkNvbXBsZXRlZFwiLCB2YWx1ZTogXCJjb21wbGV0ZWRcIiB9LFxyXG5dO1xyXG5cclxuLy8gVFlQRVNcclxuZXhwb3J0IGNvbnN0IHR5cGVzID0ge1xyXG4gIEdFVF9QUk9GSUxFOiBcIkdFVF9QUk9GSUxFXCIsXHJcbiAgTE9HSU46IFwiTE9HSU5cIixcclxuICBSRUdJU1RFUjogXCJSRUdJU1RFUlwiLFxyXG4gIEdFVF9TVE9SWTogXCJHRVRfU1RPUllcIixcclxuICBHRVRfVVNFUl9TVE9SSUVTOiBcIkdFVF9VU0VSX1NUT1JJRVNcIixcclxuICBHRVRfRkFWT1JJVEVfU1RPUklFUzogXCJHRVRfRkFWT1JJVEVfU1RPUklFU1wiLFxyXG4gIEFERF9TVE9SWTogXCJBRERfU1RPUllcIixcclxuICBFRElUX1NUT1JZOiBcIkVESVRfU1RPUllcIixcclxuICBERUxFVEVfU1RPUlk6IFwiREVMRVRFX1NUT1JZXCIsXHJcbiAgSVNfU1RPUllfRkFWT1JJVEU6IFwiSVNfU1RPUllfRkFWT1JJVEVcIixcclxuICBHRVRfQ0hBUFRFUjogXCJHRVRfQ0hBUFRFUlwiLFxyXG4gIEFERF9DSEFQVEVSOiBcIkFERF9DSEFQVEVSXCIsXHJcbiAgRURJVF9DSEFQVEVSOiBcIkVESVRfQ0hBUFRFUlwiLFxyXG4gIERFTEVURV9DSEFQVEVSOiBcIkRFTEVURV9DSEFQVEVSXCIsXHJcbiAgR0VUX0NIQVBURVJTOiBcIkdFVF9DSEFQVEVSU1wiLFxyXG4gIEFERF9DSEFSQUNURVI6IFwiQUREX0NIQVJBQ1RFUlwiLFxyXG4gIEdFVF9DSEFSQUNURVI6IFwiR0VUX0NIQVJBQ1RFUlwiLFxyXG4gIEVESVRfQ0hBUkFDVEVSOiBcIkVESVRfQ0hBUkFDVEVSXCIsXHJcbiAgR0VUX1VTRVJfQ0hBUkFDVEVSUzogXCJHRVRfVVNFUl9DSEFSQUNURVJTXCIsXHJcbiAgR0VUX1VTRVJfTE9DQVRJT05TOiBcIkdFVF9VU0VSX0xPQ0FUSU9OU1wiLFxyXG4gIEdFVF9GQVZPUklURV9DSEFSQUNURVJTOiBcIkdFVF9GQVZPUklURV9DSEFSQUNURVJTXCIsXHJcbiAgR0VUX1NUT1JZX0NIQVJBQ1RFUlM6IFwiR0VUX1NUT1JZX0NIQVJBQ1RFUlNcIixcclxuICBBRERfTE9DQVRJT046IFwiQUREX0xPQ0FUSU9OXCIsXHJcbiAgR0VUX0xPQ0FUSU9OOiBcIkdFVF9MT0NBVElPTlwiLFxyXG4gIEVESVRfTE9DQVRJT046IFwiRURJVF9MT0NBVElPTlwiLFxyXG4gIEdFVF9DT01NRU5UUzogXCJHRVRfQ09NTUVOVFNcIixcclxuICBHRVRfRkFWT1JJVEVfQVVUSE9SUzogXCJHRVRfRkFWT1JJVEVfQVVUSE9SU1wiLFxyXG4gIEdFVF9TVE9SWV9MT0NBVElPTlM6IFwiR0VUX1NUT1JZX0xPQ0FUSU9OU1wiLFxyXG4gIEdFVF9GT0xMT1dFUlM6IFwiR0VUX0ZPTExPV0VSU1wiLFxyXG4gIERJU1BBVENIX0VSUk9SOiBcIkRJU1BBVENIX0VSUk9SXCIsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX1BST0ZJTEUgPSBcIkdFVF9QUk9GSUxFXCI7XHJcbmV4cG9ydCBjb25zdCBMT0dJTiA9IFwiTE9HSU5cIjtcclxuZXhwb3J0IGNvbnN0IFJFR0lTVEVSID0gXCJSRUdJU1RFUlwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9TVE9SWSA9IFwiR0VUX1NUT1JZXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfVVNFUl9TVE9SSUVTID0gXCJHRVRfVVNFUl9TVE9SSUVTXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfRkFWT1JJVEVfU1RPUklFUyA9IFwiR0VUX0ZBVk9SSVRFX1NUT1JJRVNcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9TVE9SWSA9IFwiQUREX1NUT1JZXCI7XHJcbmV4cG9ydCBjb25zdCBFRElUX1NUT1JZID0gXCJFRElUX1NUT1JZXCI7XHJcbmV4cG9ydCBjb25zdCBERUxFVEVfU1RPUlkgPSBcIkRFTEVURV9TVE9SWVwiO1xyXG5leHBvcnQgY29uc3QgSVNfU1RPUllfRkFWT1JJVEUgPSBcIklTX1NUT1JZX0ZBVk9SSVRFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX0NIQVBURVIgPSBcIkdFVF9DSEFQVEVSXCI7XHJcbmV4cG9ydCBjb25zdCBBRERfQ0hBUFRFUiA9IFwiQUREX0NIQVBURVJcIjtcclxuZXhwb3J0IGNvbnN0IEVESVRfQ0hBUFRFUiA9IFwiRURJVF9DSEFQVEVSXCI7XHJcbmV4cG9ydCBjb25zdCBERUxFVEVfQ0hBUFRFUiA9IFwiREVMRVRFX0NIQVBURVJcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9DSEFQVEVSUyA9IFwiR0VUX0NIQVBURVJTXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX0NIQVJBQ1RFUiA9IFwiQUREX0NIQVJBQ1RFUlwiO1xyXG5leHBvcnQgY29uc3QgR0VUX0NIQVJBQ1RFUiA9IFwiR0VUX0NIQVJBQ1RFUlwiO1xyXG5leHBvcnQgY29uc3QgRURJVF9DSEFSQUNURVIgPSBcIkVESVRfQ0hBUkFDVEVSXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfVVNFUl9DSEFSQUNURVJTID0gXCJHRVRfVVNFUl9DSEFSQUNURVJTXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfVVNFUl9MT0NBVElPTlMgPSBcIkdFVF9VU0VSX0xPQ0FUSU9OU1wiO1xyXG5leHBvcnQgY29uc3QgR0VUX0ZBVk9SSVRFX0NIQVJBQ1RFUlMgPSBcIkdFVF9GQVZPUklURV9DSEFSQUNURVJTXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfU1RPUllfQ0hBUkFDVEVSUyA9IFwiR0VUX1NUT1JZX0NIQVJBQ1RFUlNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfTE9DQVRJT04gPSBcIkFERF9MT0NBVElPTlwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9GQVZPUklURV9BVVRIT1JTID0gXCJHRVRfRkFWT1JJVEVfQVVUSE9SU1wiO1xyXG5leHBvcnQgY29uc3QgR0VUX0ZPTExPV0VSUyA9IFwiR0VUX0ZPTExPV0VSU1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IERJU1BBVENIX0VSUk9SID0gXCJESVNQQVRDSF9FUlJPUlwiO1xyXG4iLCJleHBvcnQgY29uc3QgZHVtbXkgPSB7XHJcbiAgcGVyc29uOlxyXG4gICAgXCJodHRwczovL2kucGluaW1nLmNvbS81NjR4LzcwLzUwL2EzLzcwNTBhMzBjYzYxZThhN2YzZjg2NzdlYmY5NTA1ZGI3LmpwZ1wiLFxyXG4gIGNvdmVyOlxyXG4gICAgXCJodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy8zODgxMTA0L3BleGVscy1waG90by0zODgxMTA0LmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZkcHI9MiZoPTY1MCZ3PTk0MFwiLFxyXG4gIG5hbWU6IFwiQWlzaHdhcnlhIFJhaVwiLFxyXG4gIHBvc3RlcjogXCJodHRwczovL2ltYWdlcy1uYS5zc2wtaW1hZ2VzLWFtYXpvbi5jb20vaW1hZ2VzL0kvODFoMmdXUFRZSkwuanBnXCIsXHJcbiAgYXZhdGFyOiBcImh0dHBzOi8vYmlwLmNucnMuZnIvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMTEvdXNlci5qcGdcIixcclxuICBub0ltYWdlOiBcImh0dHBzOi8vaS5zdGFjay5pbWd1ci5jb20veTlEcFQuanBnXCIsXHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvYXBwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2F1dGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvZmlyZXN0b3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL3N0b3JhZ2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9tZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvTGlua1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9