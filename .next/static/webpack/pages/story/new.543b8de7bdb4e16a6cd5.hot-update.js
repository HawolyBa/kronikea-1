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
  }, __jsx("div", {
    className: "upload-image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Upload"], (_jsx = {
    disabled: form.getFieldValue("image") ? true : false,
    showUploadList: {
      showRemoveIcon: true,
      removeIcon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["StarOutlined"], {
        onClick: function onClick(e) {
          return console.log(e, "custom removeIcon event");
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 17
        }
      })
    },
    name: "banner",
    listType: "picture-card",
    className: "cover-uploader"
  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "showUploadList", false), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "beforeUpload", beforeUpload), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "onChange", handleChange), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__self", _this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__source", {
    fileName: _jsxFileName,
    lineNumber: 51,
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
      lineNumber: 69,
      columnNumber: 15
    }
  }) : uploadButton))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    label: "Image Copyright",
    name: "imageCopyright",
    rules: [{
      required: form.getFieldValue("banner") ? true : false,
      message: "An image copyright is required"
    }, {
      type: "url",
      message: "This field must be a valid url."
    }],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb3Jtcy9VcGxvYWRJbWFnZS5qcyJdLCJuYW1lcyI6WyJnZXRCYXNlNjQiLCJpbWciLCJjYWxsYmFjayIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJhZGRFdmVudExpc3RlbmVyIiwicmVzdWx0IiwicmVhZEFzRGF0YVVSTCIsImJlZm9yZVVwbG9hZCIsImZpbGUiLCJpc0pwZ09yUG5nIiwidHlwZSIsIm1lc3NhZ2UiLCJlcnJvciIsImlzTHQyTSIsInNpemUiLCJVcGxvYWRJbWFnZSIsInNldEltYWdlIiwiaW1hZ2UiLCJmb3JtIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiaW1hZ2VVcmwiLCJzZXRJbWFnZVVybCIsImhhbmRsZUNoYW5nZSIsImluZm8iLCJzdGF0dXMiLCJzZXRGaWVsZHNWYWx1ZSIsImJhbm5lciIsIm9yaWdpbkZpbGVPYmoiLCJ1cGxvYWRCdXR0b24iLCJtYXJnaW5Ub3AiLCJnZXRGaWVsZFZhbHVlIiwic2hvd1JlbW92ZUljb24iLCJyZW1vdmVJY29uIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJ3aWR0aCIsImhlaWdodCIsIm9iamVjdEZpdCIsInJlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsU0FBVCxDQUFtQkMsR0FBbkIsRUFBd0JDLFFBQXhCLEVBQWtDO0FBQ2hDLE1BQU1DLE1BQU0sR0FBRyxJQUFJQyxVQUFKLEVBQWY7QUFDQUQsUUFBTSxDQUFDRSxnQkFBUCxDQUF3QixNQUF4QixFQUFnQztBQUFBLFdBQU1ILFFBQVEsQ0FBQ0MsTUFBTSxDQUFDRyxNQUFSLENBQWQ7QUFBQSxHQUFoQztBQUNBSCxRQUFNLENBQUNJLGFBQVAsQ0FBcUJOLEdBQXJCO0FBQ0Q7O0FBRUQsU0FBU08sWUFBVCxDQUFzQkMsSUFBdEIsRUFBNEI7QUFDMUIsTUFBTUMsVUFBVSxHQUFHRCxJ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QUFIWSxLQUZsQjtBQVVFLFFBQUksRUFBQyxRQVZQO0FBV0UsWUFBUSxFQUFDLGNBWFg7QUFZRSxhQUFTLEVBQUM7QUFaWix1SEFha0IsS0FibEIsbUhBY2dCN0IsWUFkaEIsK0dBZVlrQixZQWZaO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFpQkdGLFFBQVEsR0FDUDtBQUNFLE9BQUcsRUFBRUEsUUFEUDtBQUVFLE9BQUcsRUFBQyxPQUZOO0FBR0UsU0FBSyxFQUFFO0FBQUVnQixXQUFLLEVBQUUsTUFBVDtBQUFpQkMsWUFBTSxFQUFFLE1BQXpCO0FBQWlDQyxlQUFTLEVBQUU7QUFBNUMsS0FIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRE8sR0FPUFYsWUF4QkosQ0FERixDQURGLENBREYsRUFnQ0UsTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFDRSxTQUFLLEVBQUMsaUJBRFI7QUFFRSxRQUFJLEVBQUMsZ0JBRlA7QUFHRSxTQUFLLEVBQUUsQ0FDTDtBQUNFVyxjQUFRLEVBQUV4QixJQUFJLENBQUNlLGFBQUwsQ0FBbUIsUUFBbkIsSUFBK0IsSUFBL0IsR0FBc0MsS0FEbEQ7QUFFRXRCLGFBQU8sRUFBRTtBQUZYLEtBREssRUFLTDtBQUNFRCxVQUFJLEVBQUUsS0FEUjtBQUVFQyxhQUFPLEVBQUU7QUFGWCxLQUxLLENBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWNFLE1BQUMsMENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWRGLENBaENGLENBREY7QUFtREQsQ0E1RUQ7O0dBQU1JLFc7O0tBQUFBLFc7QUE4RVNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3N0b3J5L25ldy41NDNiOGRlN2JkYjRlMTZhNmNkNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVXBsb2FkLCBtZXNzYWdlLCBGb3JtLCBJbnB1dCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IExvYWRpbmdPdXRsaW5lZCwgUGx1c091dGxpbmVkLCBTdGFyT3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuXHJcbmZ1bmN0aW9uIGdldEJhc2U2NChpbWcsIGNhbGxiYWNrKSB7XHJcbiAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICByZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4gY2FsbGJhY2socmVhZGVyLnJlc3VsdCkpO1xyXG4gIHJlYWRlci5yZWFkQXNEYXRhVVJMKGltZyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJlZm9yZVVwbG9hZChmaWxlKSB7XHJcbiAgY29uc3QgaXNKcGdPclBuZyA9IGZpbGUudHlwZSA9PT0gXCJpbWFnZS9qcGVnXCIgfHwgZmlsZS50eXBlID09PSBcImltYWdlL3BuZ1wiO1xyXG4gIGlmICghaXNKcGdPclBuZykge1xyXG4gICAgbWVzc2FnZS5lcnJvcihcIllvdSBjYW4gb25seSB1cGxvYWQgSlBHL1BORyBmaWxlIVwiKTtcclxuICB9XHJcbiAgY29uc3QgaXNMdDJNID0gZmlsZS5zaXplIC8gMTAyNCAvIDEwMjQgPCAyO1xyXG4gIGlmICghaXNMdDJNKSB7XHJcbiAgICBtZXNzYWdlLmVycm9yKFwiSW1hZ2UgbXVzdCBzbWFsbGVyIHRoYW4gMk1CIVwiKTtcclxuICB9XHJcbiAgcmV0dXJuIGlzSnBnT3JQbmcgJiYgaXNMdDJNO1xyXG59XHJcblxyXG5jb25zdCBVcGxvYWRJbWFnZSA9ICh7IHNldEltYWdlLCBpbWFnZSwgZm9ybSB9KSA9PiB7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpbWFnZVVybCwgc2V0SW1hZ2VVcmxdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChpbmZvKSA9PiB7XHJcbiAgICBpZiAoaW5mby5maWxlLnN0YXR1cyA9PT0gXCJ1cGxvYWRpbmdcIikge1xyXG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoaW5mby5maWxlLnN0YXR1cyA9PT0gXCJkb25lXCIpIHtcclxuICAgICAgZm9ybS5zZXRGaWVsZHNWYWx1ZSh7IGJhbm5lcjogaW5mby5maWxlLm9yaWdpbkZpbGVPYmogfSk7XHJcbiAgICAgIC8vIHNldEltYWdlKGluZm8uZmlsZS5vcmlnaW5GaWxlT2JqKTtcclxuICAgICAgZ2V0QmFzZTY0KGluZm8uZmlsZS5vcmlnaW5GaWxlT2JqLCAoaW1hZ2VVcmwpID0+IHtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICBzZXRJbWFnZVVybChpbWFnZVVybCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHVwbG9hZEJ1dHRvbiA9IChcclxuICAgIDxkaXY+XHJcbiAgICAgIHtsb2FkaW5nID8gPExvYWRpbmdPdXRsaW5lZCAvPiA6IDxQbHVzT3V0bGluZWQgLz59XHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiA4IH19PlVwbG9hZDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEZvcm0uSXRlbSBuYW1lPVwiYmFubmVyXCIgbGFiZWw9XCJVcGxvYWQgYSBjb3ZlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXBsb2FkLWltYWdlXCI+XHJcbiAgICAgICAgICA8VXBsb2FkXHJcbiAgICAgICAgICAgIGRpc2FibGVkPXtmb3JtLmdldEZpZWxkVmFsdWUoXCJpbWFnZVwiKSA/IHRydWUgOiBmYWxzZX1cclxuICAgICAgICAgICAgc2hvd1VwbG9hZExpc3Q9e3tcclxuICAgICAgICAgICAgICBzaG93UmVtb3ZlSWNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgICByZW1vdmVJY29uOiAoXHJcbiAgICAgICAgICAgICAgICA8U3Rhck91dGxpbmVkXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBjb25zb2xlLmxvZyhlLCBcImN1c3RvbSByZW1vdmVJY29uIGV2ZW50XCIpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBuYW1lPVwiYmFubmVyXCJcclxuICAgICAgICAgICAgbGlzdFR5cGU9XCJwaWN0dXJlLWNhcmRcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjb3Zlci11cGxvYWRlclwiXHJcbiAgICAgICAgICAgIHNob3dVcGxvYWRMaXN0PXtmYWxzZX1cclxuICAgICAgICAgICAgYmVmb3JlVXBsb2FkPXtiZWZvcmVVcGxvYWR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtpbWFnZVVybCA/IChcclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9e2ltYWdlVXJsfVxyXG4gICAgICAgICAgICAgICAgYWx0PVwiaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBvYmplY3RGaXQ6IFwiY292ZXJcIiB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgdXBsb2FkQnV0dG9uXHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L1VwbG9hZD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICBsYWJlbD1cIkltYWdlIENvcHlyaWdodFwiXHJcbiAgICAgICAgbmFtZT1cImltYWdlQ29weXJpZ2h0XCJcclxuICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICByZXF1aXJlZDogZm9ybS5nZXRGaWVsZFZhbHVlKFwiYmFubmVyXCIpID8gdHJ1ZSA6IGZhbHNlLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkFuIGltYWdlIGNvcHlyaWdodCBpcyByZXF1aXJlZFwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogXCJ1cmxcIixcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJUaGlzIGZpZWxkIG11c3QgYmUgYSB2YWxpZCB1cmwuXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF19XHJcbiAgICAgID5cclxuICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXBsb2FkSW1hZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=