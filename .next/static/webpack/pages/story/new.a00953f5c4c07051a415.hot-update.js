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

  var setImage = _ref.setImage,
      image = _ref.image,
      form = _ref.form;

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
  }, loading ? __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["LoadingOutlined"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 18
    }
  }) : __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["PlusOutlined"], {
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

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    name: "banner",
    label: "Upload a cover",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "upload-image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Upload"], (_jsx = {
    disabled: form.getFieldValue("image") ? true : false,
    showUploadList: {
      showRemoveIcon: true
    },
    name: "banner",
    listType: "picture-card",
    className: "cover-uploader"
  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "showUploadList", false), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "beforeUpload", beforeUpload), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "onChange", handleChange), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__self", _this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__source", {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 11
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
      lineNumber: 61,
      columnNumber: 15
    }
  }) : uploadButton))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    label: "Image Copyright",
    name: "imageCopyright",
    rules: [{
      required: image ? true : false,
      message: "An image copyright is required"
    }],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb3Jtcy9VcGxvYWRJbWFnZS5qcyJdLCJuYW1lcyI6WyJnZXRCYXNlNjQiLCJpbWciLCJjYWxsYmFjayIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJhZGRFdmVudExpc3RlbmVyIiwicmVzdWx0IiwicmVhZEFzRGF0YVVSTCIsImJlZm9yZVVwbG9hZCIsImZpbGUiLCJpc0pwZ09yUG5nIiwidHlwZSIsIm1lc3NhZ2UiLCJlcnJvciIsImlzTHQyTSIsInNpemUiLCJVcGxvYWRJbWFnZSIsInNldEltYWdlIiwiaW1hZ2UiLCJmb3JtIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiaW1hZ2VVcmwiLCJzZXRJbWFnZVVybCIsImhhbmRsZUNoYW5nZSIsImluZm8iLCJzdGF0dXMiLCJvcmlnaW5GaWxlT2JqIiwidXBsb2FkQnV0dG9uIiwibWFyZ2luVG9wIiwiZ2V0RmllbGRWYWx1ZSIsInNob3dSZW1vdmVJY29uIiwid2lkdGgiLCJoZWlnaHQiLCJvYmplY3RGaXQiLCJyZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLFNBQVQsQ0FBbUJDLEdBQW5CLEVBQXdCQyxRQUF4QixFQUFrQztBQUNoQyxNQUFNQyxNQUFNLEdBQUcsSUFBSUMsVUFBSixFQUFmO0FBQ0FELFFBQU0sQ0FBQ0UsZ0JBQVAsQ0FBd0IsTUFBeEIsRUFBZ0M7QUFBQSxXQUFNSCxRQUFRLENBQUNDLE1BQU0sQ0FBQ0csTUFBUixDQUFkO0FBQUEsR0FBaEM7QUFDQUgsUUFBTSxDQUFDSSxhQUFQLENBQXFCTixHQUFyQjtBQUNEOztBQUVELFNBQVNPLFlBQVQsQ0FBc0JDLElBQXRCLEVBQTRCO0FBQzFCLE1BQU1DLFVBQVUsR0FBR0QsSUFBSSxDQUFDRSxJQUFMLEtBQWMsWUFBZCxJQUE4QkYsSUFBSSxDQUFDRSxJQUFMLEtBQWMsV0FBL0Q7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QUFFO0FBQTVDLEtBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURPLEdBT1BOLFlBakJKLENBREYsQ0FERixDQURGLEVBeUJFLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQ0UsU0FBSyxFQUFDLGlCQURSO0FBRUUsUUFBSSxFQUFDLGdCQUZQO0FBR0UsU0FBSyxFQUFFLENBQ0w7QUFDRU8sY0FBUSxFQUFFbkIsS0FBSyxHQUFHLElBQUgsR0FBVSxLQUQzQjtBQUVFTixhQUFPLEVBQUU7QUFGWCxLQURLLENBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVVFLE1BQUMsMENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZGLENBekJGLENBREY7QUF3Q0QsQ0FoRUQ7O0dBQU1JLFc7O0tBQUFBLFc7QUFrRVNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3N0b3J5L25ldy5hMDA5NTNmNWM0YzA3MDUxYTQxNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVXBsb2FkLCBtZXNzYWdlLCBGb3JtLCBJbnB1dCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IExvYWRpbmdPdXRsaW5lZCwgUGx1c091dGxpbmVkIH0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XHJcblxyXG5mdW5jdGlvbiBnZXRCYXNlNjQoaW1nLCBjYWxsYmFjaykge1xyXG4gIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgcmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IGNhbGxiYWNrKHJlYWRlci5yZXN1bHQpKTtcclxuICByZWFkZXIucmVhZEFzRGF0YVVSTChpbWcpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBiZWZvcmVVcGxvYWQoZmlsZSkge1xyXG4gIGNvbnN0IGlzSnBnT3JQbmcgPSBmaWxlLnR5cGUgPT09IFwiaW1hZ2UvanBlZ1wiIHx8IGZpbGUudHlwZSA9PT0gXCJpbWFnZS9wbmdcIjtcclxuICBpZiAoIWlzSnBnT3JQbmcpIHtcclxuICAgIG1lc3NhZ2UuZXJyb3IoXCJZb3UgY2FuIG9ubHkgdXBsb2FkIEpQRy9QTkcgZmlsZSFcIik7XHJcbiAgfVxyXG4gIGNvbnN0IGlzTHQyTSA9IGZpbGUuc2l6ZSAvIDEwMjQgLyAxMDI0IDwgMjtcclxuICBpZiAoIWlzTHQyTSkge1xyXG4gICAgbWVzc2FnZS5lcnJvcihcIkltYWdlIG11c3Qgc21hbGxlciB0aGFuIDJNQiFcIik7XHJcbiAgfVxyXG4gIHJldHVybiBpc0pwZ09yUG5nICYmIGlzTHQyTTtcclxufVxyXG5cclxuY29uc3QgVXBsb2FkSW1hZ2UgPSAoeyBzZXRJbWFnZSwgaW1hZ2UsIGZvcm0gfSkgPT4ge1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaW1hZ2VVcmwsIHNldEltYWdlVXJsXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoaW5mbykgPT4ge1xyXG4gICAgaWYgKGluZm8uZmlsZS5zdGF0dXMgPT09IFwidXBsb2FkaW5nXCIpIHtcclxuICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKGluZm8uZmlsZS5zdGF0dXMgPT09IFwiZG9uZVwiKSB7XHJcbiAgICAgIHNldEltYWdlKGluZm8uZmlsZS5vcmlnaW5GaWxlT2JqKTtcclxuICAgICAgZ2V0QmFzZTY0KGluZm8uZmlsZS5vcmlnaW5GaWxlT2JqLCAoaW1hZ2VVcmwpID0+IHtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICBzZXRJbWFnZVVybChpbWFnZVVybCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHVwbG9hZEJ1dHRvbiA9IChcclxuICAgIDxkaXY+XHJcbiAgICAgIHtsb2FkaW5nID8gPExvYWRpbmdPdXRsaW5lZCAvPiA6IDxQbHVzT3V0bGluZWQgLz59XHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiA4IH19PlVwbG9hZDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEZvcm0uSXRlbSBuYW1lPVwiYmFubmVyXCIgbGFiZWw9XCJVcGxvYWQgYSBjb3ZlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXBsb2FkLWltYWdlXCI+XHJcbiAgICAgICAgICA8VXBsb2FkXHJcbiAgICAgICAgICAgIGRpc2FibGVkPXtmb3JtLmdldEZpZWxkVmFsdWUoXCJpbWFnZVwiKSA/IHRydWUgOiBmYWxzZX1cclxuICAgICAgICAgICAgc2hvd1VwbG9hZExpc3Q9e3sgc2hvd1JlbW92ZUljb246IHRydWUgfX1cclxuICAgICAgICAgICAgbmFtZT1cImJhbm5lclwiXHJcbiAgICAgICAgICAgIGxpc3RUeXBlPVwicGljdHVyZS1jYXJkXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY292ZXItdXBsb2FkZXJcIlxyXG4gICAgICAgICAgICBzaG93VXBsb2FkTGlzdD17ZmFsc2V9XHJcbiAgICAgICAgICAgIGJlZm9yZVVwbG9hZD17YmVmb3JlVXBsb2FkfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7aW1hZ2VVcmwgPyAoXHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPXtpbWFnZVVybH1cclxuICAgICAgICAgICAgICAgIGFsdD1cImltYWdlXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgb2JqZWN0Rml0OiBcImNvdmVyXCIgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIHVwbG9hZEJ1dHRvblxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9VcGxvYWQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgbGFiZWw9XCJJbWFnZSBDb3B5cmlnaHRcIlxyXG4gICAgICAgIG5hbWU9XCJpbWFnZUNvcHlyaWdodFwiXHJcbiAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgcmVxdWlyZWQ6IGltYWdlID8gdHJ1ZSA6IGZhbHNlLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkFuIGltYWdlIGNvcHlyaWdodCBpcyByZXF1aXJlZFwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdfVxyXG4gICAgICA+XHJcbiAgICAgICAgPElucHV0IC8+XHJcbiAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVwbG9hZEltYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9