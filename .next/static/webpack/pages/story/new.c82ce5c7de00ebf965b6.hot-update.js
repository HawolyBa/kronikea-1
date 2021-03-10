webpackHotUpdate_N_E("pages/story/new",{

/***/ "./components/forms/UploadImage.js":
/*!*****************************************!*\
  !*** ./components/forms/UploadImage.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");



var _this = undefined,
    _jsxFileName = "C:\\Users\\Utilisateur\\Documents\\CODE\\kronikea-master\\components\\forms\\UploadImage.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



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
    antd__WEBPACK_IMPORTED_MODULE_3__["message"].error("You can only upload JPG/PNG file!");
  }

  var isLt2M = file.size / 1024 / 1024 < 2;

  if (!isLt2M) {
    antd__WEBPACK_IMPORTED_MODULE_3__["message"].error("Image must smaller than 2MB!");
  }

  return isJpgOrPng && isLt2M;
}

var UploadImage = function UploadImage(_ref) {
  _s();

  var _jsx;

  var form = _ref.form;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      loading = _React$useState2[0],
      setLoading = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(""),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState3, 2),
      imageUrl = _React$useState4[0],
      setImageUrl = _React$useState4[1];

  var handleChange = function handleChange(info) {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }

    if (info.file.status === "done") {
      form.setFieldsValue({
        banner: info.file.originFileObj
      }); // setImage(info.file.originFileObj);

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
      lineNumber: 42,
      columnNumber: 5
    }
  }, loading ? __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["LoadingOutlined"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 18
    }
  }) : __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["PlusOutlined"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 40
    }
  }), __jsx("div", {
    style: {
      marginTop: 8
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, "Upload"));

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    name: "banner",
    label: "Upload a cover",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Upload"], (_jsx = {
    showUploadList: {
      showRemoveIcon: true,
      removeIcon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["StarOutlined"], {
        onClick: function onClick(e) {
          return console.log(e, "custom removeIcon event");
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 15
        }
      })
    },
    name: "cover",
    listType: "picture",
    className: "cover-uploader"
  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "showUploadList", false), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "beforeUpload", beforeUpload), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "onChange", handleChange), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__self", _this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__source", {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 9
  }), _jsx), imageUrl ? __jsx("img", {
    src: imageUrl,
    alt: "image",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }) : uploadButton)), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    label: "Image Copyright",
    name: "imageCopyright",
    rules: [{
      required: form.getFieldValue("banner") ? true : false,
      message: "An image copyright is required"
    }],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb3Jtcy9VcGxvYWRJbWFnZS5qcyJdLCJuYW1lcyI6WyJnZXRCYXNlNjQiLCJpbWciLCJjYWxsYmFjayIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJhZGRFdmVudExpc3RlbmVyIiwicmVzdWx0IiwicmVhZEFzRGF0YVVSTCIsImJlZm9yZVVwbG9hZCIsImZpbGUiLCJpc0pwZ09yUG5nIiwidHlwZSIsIm1lc3NhZ2UiLCJlcnJvciIsImlzTHQyTSIsInNpemUiLCJVcGxvYWRJbWFnZSIsImZvcm0iLCJSZWFjdCIsInVzZVN0YXRlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJpbWFnZVVybCIsInNldEltYWdlVXJsIiwiaGFuZGxlQ2hhbmdlIiwiaW5mbyIsInN0YXR1cyIsInNldEZpZWxkc1ZhbHVlIiwiYmFubmVyIiwib3JpZ2luRmlsZU9iaiIsInVwbG9hZEJ1dHRvbiIsIm1hcmdpblRvcCIsInNob3dSZW1vdmVJY29uIiwicmVtb3ZlSWNvbiIsImUiLCJjb25zb2xlIiwibG9nIiwid2lkdGgiLCJoZWlnaHQiLCJvYmplY3RGaXQiLCJyZXF1aXJlZCIsImdldEZpZWxkVmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxTQUFULENBQW1CQyxHQUFuQixFQUF3QkMsUUFBeEIsRUFBa0M7QUFDaEMsTUFBTUMsTUFBTSxHQUFHLElBQUlDLFVBQUosRUFBZjtBQUNBRCxRQUFNLENBQUNFLGdCQUFQLENBQXdCLE1BQXhCLEVBQWdDO0FBQUEsV0FBTUgsUUFBUSxDQUFDQyxNQUFNLENBQUNHLE1BQVIsQ0FBZDtBQUFBLEdBQWhDO0FBQ0FILFFBQU0sQ0FBQ0ksYUFBUCxDQUFxQk4sR0FBckI7QUFDRDs7QUFFRCxTQUFTTyxZQUFULENBQXNCQyxJQUF0QixFQUE0QjtBQUMxQixNQUFNQyxVQUFVLEdBQUdELElBQUksQ0FBQ0UsSUFBTCxLQUFj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RUFBRSxNQUFUO0FBQWlCQyxZQUFNLEVBQUUsTUFBekI7QUFBaUNDLGVBQVMsRUFBRTtBQUE1QyxLQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFETyxHQU9QVCxZQXZCSixDQURGLENBREYsRUE2QkUsTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFDRSxTQUFLLEVBQUMsaUJBRFI7QUFFRSxRQUFJLEVBQUMsZ0JBRlA7QUFHRSxTQUFLLEVBQUUsQ0FDTDtBQUNFVSxjQUFRLEVBQUV2QixJQUFJLENBQUN3QixhQUFMLENBQW1CLFFBQW5CLElBQStCLElBQS9CLEdBQXNDLEtBRGxEO0FBRUU3QixhQUFPLEVBQUU7QUFGWCxLQURLLENBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVVFLE1BQUMsMENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZGLENBN0JGLENBREY7QUE0Q0QsQ0FyRUQ7O0dBQU1JLFc7O0tBQUFBLFc7QUF1RVNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3N0b3J5L25ldy5jODJjZTVjN2RlMDBlYmY5NjViNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVXBsb2FkLCBtZXNzYWdlLCBGb3JtLCBJbnB1dCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IExvYWRpbmdPdXRsaW5lZCwgUGx1c091dGxpbmVkLCBTdGFyT3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuXHJcbmZ1bmN0aW9uIGdldEJhc2U2NChpbWcsIGNhbGxiYWNrKSB7XHJcbiAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICByZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4gY2FsbGJhY2socmVhZGVyLnJlc3VsdCkpO1xyXG4gIHJlYWRlci5yZWFkQXNEYXRhVVJMKGltZyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJlZm9yZVVwbG9hZChmaWxlKSB7XHJcbiAgY29uc3QgaXNKcGdPclBuZyA9IGZpbGUudHlwZSA9PT0gXCJpbWFnZS9qcGVnXCIgfHwgZmlsZS50eXBlID09PSBcImltYWdlL3BuZ1wiO1xyXG4gIGlmICghaXNKcGdPclBuZykge1xyXG4gICAgbWVzc2FnZS5lcnJvcihcIllvdSBjYW4gb25seSB1cGxvYWQgSlBHL1BORyBmaWxlIVwiKTtcclxuICB9XHJcbiAgY29uc3QgaXNMdDJNID0gZmlsZS5zaXplIC8gMTAyNCAvIDEwMjQgPCAyO1xyXG4gIGlmICghaXNMdDJNKSB7XHJcbiAgICBtZXNzYWdlLmVycm9yKFwiSW1hZ2UgbXVzdCBzbWFsbGVyIHRoYW4gMk1CIVwiKTtcclxuICB9XHJcbiAgcmV0dXJuIGlzSnBnT3JQbmcgJiYgaXNMdDJNO1xyXG59XHJcblxyXG5jb25zdCBVcGxvYWRJbWFnZSA9ICh7IGZvcm0gfSkgPT4ge1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaW1hZ2VVcmwsIHNldEltYWdlVXJsXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoaW5mbykgPT4ge1xyXG4gICAgaWYgKGluZm8uZmlsZS5zdGF0dXMgPT09IFwidXBsb2FkaW5nXCIpIHtcclxuICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKGluZm8uZmlsZS5zdGF0dXMgPT09IFwiZG9uZVwiKSB7XHJcbiAgICAgIGZvcm0uc2V0RmllbGRzVmFsdWUoeyBiYW5uZXI6IGluZm8uZmlsZS5vcmlnaW5GaWxlT2JqIH0pO1xyXG4gICAgICAvLyBzZXRJbWFnZShpbmZvLmZpbGUub3JpZ2luRmlsZU9iaik7XHJcbiAgICAgIGdldEJhc2U2NChpbmZvLmZpbGUub3JpZ2luRmlsZU9iaiwgKGltYWdlVXJsKSA9PiB7XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgc2V0SW1hZ2VVcmwoaW1hZ2VVcmwpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCB1cGxvYWRCdXR0b24gPSAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7bG9hZGluZyA/IDxMb2FkaW5nT3V0bGluZWQgLz4gOiA8UGx1c091dGxpbmVkIC8+fVxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogOCB9fT5VcGxvYWQ8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxGb3JtLkl0ZW0gbmFtZT1cImJhbm5lclwiIGxhYmVsPVwiVXBsb2FkIGEgY292ZXJcIj5cclxuICAgICAgICA8VXBsb2FkXHJcbiAgICAgICAgICBzaG93VXBsb2FkTGlzdD17e1xyXG4gICAgICAgICAgICBzaG93UmVtb3ZlSWNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgcmVtb3ZlSWNvbjogKFxyXG4gICAgICAgICAgICAgIDxTdGFyT3V0bGluZWRcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBjb25zb2xlLmxvZyhlLCBcImN1c3RvbSByZW1vdmVJY29uIGV2ZW50XCIpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgbmFtZT1cImNvdmVyXCJcclxuICAgICAgICAgIGxpc3RUeXBlPVwicGljdHVyZVwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJjb3Zlci11cGxvYWRlclwiXHJcbiAgICAgICAgICBzaG93VXBsb2FkTGlzdD17ZmFsc2V9XHJcbiAgICAgICAgICBiZWZvcmVVcGxvYWQ9e2JlZm9yZVVwbG9hZH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2ltYWdlVXJsID8gKFxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPXtpbWFnZVVybH1cclxuICAgICAgICAgICAgICBhbHQ9XCJpbWFnZVwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBvYmplY3RGaXQ6IFwiY292ZXJcIiB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgdXBsb2FkQnV0dG9uXHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvVXBsb2FkPlxyXG4gICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgIGxhYmVsPVwiSW1hZ2UgQ29weXJpZ2h0XCJcclxuICAgICAgICBuYW1lPVwiaW1hZ2VDb3B5cmlnaHRcIlxyXG4gICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHJlcXVpcmVkOiBmb3JtLmdldEZpZWxkVmFsdWUoXCJiYW5uZXJcIikgPyB0cnVlIDogZmFsc2UsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiQW4gaW1hZ2UgY29weXJpZ2h0IGlzIHJlcXVpcmVkXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF19XHJcbiAgICAgID5cclxuICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXBsb2FkSW1hZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=