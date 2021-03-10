webpackHotUpdate_N_E("pages/story/new",{

/***/ "./components/forms/UploadImage.js":
/*!*****************************************!*\
  !*** ./components/forms/UploadImage.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\components\\forms\\UploadImage.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function getBase64(img, callback) {
  var reader = new FileReader();
  reader.addEventListener("load", function () {
    return callback(reader.result);
  });
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  var isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";

  if (!isJpgOrPng) {
    antd__WEBPACK_IMPORTED_MODULE_2__["message"].error("You can only upload JPG/PNG file!");
  }

  var isLt2M = file.size / 1024 / 1024 < 2;

  if (!isLt2M) {
    antd__WEBPACK_IMPORTED_MODULE_2__["message"].error("Image must smaller than 2MB!");
  }

  return isJpgOrPng && isLt2M;
}

var UploadImage = function UploadImage(_ref) {
  _s();

  var setImage = _ref.setImage,
      image = _ref.image;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      loading = _React$useState2[0],
      setLoading = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(""),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      imageUrl = _React$useState4[0],
      setImageUrl = _React$useState4[1];

  var handleChange = function handleChange(info) {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }

    if (info.file.status === "done") {
      setImage(info.file.originFileObj);
      getBase64(info.file.originFileObj, function (imageUrl) {
        setLoading(false);
        setImageUrl(imageUrl);
      });
    }
  };

  var uploadButton = __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }, loading ? __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["LoadingOutlined"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 18
    }
  }) : __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["PlusOutlined"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 40
    }
  }), __jsx("div", {
    style: {
      marginTop: 8
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, "Upload"));

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
    name: "banner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "upload-image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Upload"], {
    name: "banner",
    listType: "picture-card",
    className: "cover-uploader",
    showUploadList: false,
    beforeUpload: beforeUpload,
    onChange: handleChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, imageUrl ? __jsx("img", {
    src: imageUrl,
    alt: "image",
    style: {
      width: "100%"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 15
    }
  }) : uploadButton))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
    label: "Image Copyright",
    name: "imageCopyright",
    rules: [{
      required: image ? true : false,
      message: "An image copyright is required"
    }],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }
  })));
};

_s(UploadImage, "7yQhdChm1Mdi1pob2qgJNn4VZG8=");

_c = UploadImage;
/* harmony default export */ __webpack_exports__["default"] = (UploadImage);

var _c;

$RefreshReg$(_c, "UploadImage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb3Jtcy9VcGxvYWRJbWFnZS5qcyJdLCJuYW1lcyI6WyJnZXRCYXNlNjQiLCJpbWciLCJjYWxsYmFjayIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJhZGRFdmVudExpc3RlbmVyIiwicmVzdWx0IiwicmVhZEFzRGF0YVVSTCIsImJlZm9yZVVwbG9hZCIsImZpbGUiLCJpc0pwZ09yUG5nIiwidHlwZSIsIm1lc3NhZ2UiLCJlcnJvciIsImlzTHQyTSIsInNpemUiLCJVcGxvYWRJbWFnZSIsInNldEltYWdlIiwiaW1hZ2UiLCJSZWFjdCIsInVzZVN0YXRlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJpbWFnZVVybCIsInNldEltYWdlVXJsIiwiaGFuZGxlQ2hhbmdlIiwiaW5mbyIsInN0YXR1cyIsIm9yaWdpbkZpbGVPYmoiLCJ1cGxvYWRCdXR0b24iLCJtYXJnaW5Ub3AiLCJ3aWR0aCIsInJlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLFNBQVQsQ0FBbUJDLEdBQW5CLEVBQXdCQyxRQUF4QixFQUFrQztBQUNoQyxNQUFNQyxNQUFNLEdBQUcsSUFBSUMsVUFBSixFQUFmO0FBQ0FELFFBQU0sQ0FBQ0UsZ0JBQVAsQ0FBd0IsTUFBeEIsRUFBZ0M7QUFBQSxXQUFNSCxRQUFRLENBQUNDLE1BQU0sQ0FBQ0csTUFBUixDQUFkO0FBQUEsR0FBaEM7QUFDQUgsUUFBTSxDQUFDSSxhQUFQLENBQXFCTixHQUFyQjtBQUNEOztBQUVELFNBQVNPLFlBQVQsQ0FBc0JDLElBQXRCLEVBQTRCO0FBQzFCLE1BQU1DLFVBQVUsR0FBR0QsSUFBSSxDQUFDRSxJQUFMLEtBQWMsWUFBZCxJQUE4QkYsSUFBSSxDQUFDRSxJQUFMLEtBQWMsV0FBL0Q7O0FBQ0EsTUFBSSxDQUFDRCxVQUFMLEVBQWlCO0FBQ2ZFLGdEQUFPLENBQUNDLEtBQVIsQ0FBYyxtQ0FBZDtB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Q0FIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBVUUsTUFBQywwQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVkYsQ0FuQkYsQ0FERjtBQWtDRCxDQTNERDs7R0FBTUksVzs7S0FBQUEsVztBQTZEU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3RvcnkvbmV3LjVmMzE3ZWNlNDkxOWQ5NTBiOWIyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVcGxvYWQsIG1lc3NhZ2UsIEZvcm0sIElucHV0IH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgTG9hZGluZ091dGxpbmVkLCBQbHVzT3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuXHJcbmZ1bmN0aW9uIGdldEJhc2U2NChpbWcsIGNhbGxiYWNrKSB7XHJcbiAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICByZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4gY2FsbGJhY2socmVhZGVyLnJlc3VsdCkpO1xyXG4gIHJlYWRlci5yZWFkQXNEYXRhVVJMKGltZyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJlZm9yZVVwbG9hZChmaWxlKSB7XHJcbiAgY29uc3QgaXNKcGdPclBuZyA9IGZpbGUudHlwZSA9PT0gXCJpbWFnZS9qcGVnXCIgfHwgZmlsZS50eXBlID09PSBcImltYWdlL3BuZ1wiO1xyXG4gIGlmICghaXNKcGdPclBuZykge1xyXG4gICAgbWVzc2FnZS5lcnJvcihcIllvdSBjYW4gb25seSB1cGxvYWQgSlBHL1BORyBmaWxlIVwiKTtcclxuICB9XHJcbiAgY29uc3QgaXNMdDJNID0gZmlsZS5zaXplIC8gMTAyNCAvIDEwMjQgPCAyO1xyXG4gIGlmICghaXNMdDJNKSB7XHJcbiAgICBtZXNzYWdlLmVycm9yKFwiSW1hZ2UgbXVzdCBzbWFsbGVyIHRoYW4gMk1CIVwiKTtcclxuICB9XHJcbiAgcmV0dXJuIGlzSnBnT3JQbmcgJiYgaXNMdDJNO1xyXG59XHJcblxyXG5jb25zdCBVcGxvYWRJbWFnZSA9ICh7IHNldEltYWdlLCBpbWFnZSB9KSA9PiB7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpbWFnZVVybCwgc2V0SW1hZ2VVcmxdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChpbmZvKSA9PiB7XHJcbiAgICBpZiAoaW5mby5maWxlLnN0YXR1cyA9PT0gXCJ1cGxvYWRpbmdcIikge1xyXG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoaW5mby5maWxlLnN0YXR1cyA9PT0gXCJkb25lXCIpIHtcclxuICAgICAgc2V0SW1hZ2UoaW5mby5maWxlLm9yaWdpbkZpbGVPYmopO1xyXG4gICAgICBnZXRCYXNlNjQoaW5mby5maWxlLm9yaWdpbkZpbGVPYmosIChpbWFnZVVybCkgPT4ge1xyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIHNldEltYWdlVXJsKGltYWdlVXJsKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdXBsb2FkQnV0dG9uID0gKFxyXG4gICAgPGRpdj5cclxuICAgICAge2xvYWRpbmcgPyA8TG9hZGluZ091dGxpbmVkIC8+IDogPFBsdXNPdXRsaW5lZCAvPn1cclxuICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IDggfX0+VXBsb2FkPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEZvcm0uSXRlbSBuYW1lPVwiYmFubmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1cGxvYWQtaW1hZ2VcIj5cclxuICAgICAgICAgIDxVcGxvYWRcclxuICAgICAgICAgICAgbmFtZT1cImJhbm5lclwiXHJcbiAgICAgICAgICAgIGxpc3RUeXBlPVwicGljdHVyZS1jYXJkXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY292ZXItdXBsb2FkZXJcIlxyXG4gICAgICAgICAgICBzaG93VXBsb2FkTGlzdD17ZmFsc2V9XHJcbiAgICAgICAgICAgIGJlZm9yZVVwbG9hZD17YmVmb3JlVXBsb2FkfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7aW1hZ2VVcmwgPyAoXHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlVXJsfSBhbHQ9XCJpbWFnZVwiIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fSAvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIHVwbG9hZEJ1dHRvblxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9VcGxvYWQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgbGFiZWw9XCJJbWFnZSBDb3B5cmlnaHRcIlxyXG4gICAgICAgIG5hbWU9XCJpbWFnZUNvcHlyaWdodFwiXHJcbiAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgcmVxdWlyZWQ6IGltYWdlID8gdHJ1ZSA6IGZhbHNlLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkFuIGltYWdlIGNvcHlyaWdodCBpcyByZXF1aXJlZFwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdfVxyXG4gICAgICA+XHJcbiAgICAgICAgPElucHV0IC8+XHJcbiAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVwbG9hZEltYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9