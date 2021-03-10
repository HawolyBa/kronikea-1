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
        image: info.file.originFileObj
      });
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
      required: image ? true : false,
      message: "An image copyright is required"
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
      lineNumber: 90,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb3Jtcy9VcGxvYWRJbWFnZS5qcyJdLCJuYW1lcyI6WyJnZXRCYXNlNjQiLCJpbWciLCJjYWxsYmFjayIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJhZGRFdmVudExpc3RlbmVyIiwicmVzdWx0IiwicmVhZEFzRGF0YVVSTCIsImJlZm9yZVVwbG9hZCIsImZpbGUiLCJpc0pwZ09yUG5nIiwidHlwZSIsIm1lc3NhZ2UiLCJlcnJvciIsImlzTHQyTSIsInNpemUiLCJVcGxvYWRJbWFnZSIsInNldEltYWdlIiwiaW1hZ2UiLCJmb3JtIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiaW1hZ2VVcmwiLCJzZXRJbWFnZVVybCIsImhhbmRsZUNoYW5nZSIsImluZm8iLCJzdGF0dXMiLCJzZXRGaWVsZHNWYWx1ZSIsIm9yaWdpbkZpbGVPYmoiLCJ1cGxvYWRCdXR0b24iLCJtYXJnaW5Ub3AiLCJnZXRGaWVsZFZhbHVlIiwic2hvd1JlbW92ZUljb24iLCJyZW1vdmVJY29uIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJ3aWR0aCIsImhlaWdodCIsIm9iamVjdEZpdCIsInJlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsU0FBVCxDQUFtQkMsR0FBbkIsRUFBd0JDLFFBQXhCLEVBQWtDO0FBQ2hDLE1BQU1DLE1BQU0sR0FBRyxJQUFJQyxVQUFKLEVBQWY7QUFDQUQsUUFBTSxDQUFDRSxnQkFBUCxDQUF3QixNQUF4QixFQUFnQztBQUFBLFdBQU1ILFFBQVEsQ0FBQ0MsTUFBTSxDQUFDRyxNQUFSLENBQWQ7QUFBQSxHQUFoQztBQUNBSCxRQUFNLENBQUNJLGFBQVAsQ0FBcUJOLEdBQXJCO0FBQ0Q7O0FBRUQsU0FBU08sWUFBVCxDQUFzQkMsSUFBdEIsRUFBNEI7QUFDMUIsTUFBTUMsVUFBVSxHQUFHRCxJQUFJLENBQUNF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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhZLEtBRmxCO0FBVUUsUUFBSSxFQUFDLFFBVlA7QUFXRSxZQUFRLEVBQUMsY0FYWDtBQVlFLGFBQVMsRUFBQztBQVpaLHVIQWFrQixLQWJsQixtSEFjZ0I1QixZQWRoQiwrR0FlWWtCLFlBZlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWlCR0YsUUFBUSxHQUNQO0FBQ0UsT0FBRyxFQUFFQSxRQURQO0FBRUUsT0FBRyxFQUFDLE9BRk47QUFHRSxTQUFLLEVBQUU7QUFBRWUsV0FBSyxFQUFFLE1BQVQ7QUFBaUJDLFlBQU0sRUFBRSxNQUF6QjtBQUFpQ0MsZUFBUyxFQUFFO0FBQTVDLEtBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURPLEdBT1BWLFlBeEJKLENBREYsQ0FERixDQURGLEVBZ0NFLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQ0UsU0FBSyxFQUFDLGlCQURSO0FBRUUsUUFBSSxFQUFDLGdCQUZQO0FBR0UsU0FBSyxFQUFFLENBQ0w7QUFDRVcsY0FBUSxFQUFFeEIsS0FBSyxHQUFHLElBQUgsR0FBVSxLQUQzQjtBQUVFTixhQUFPLEVBQUU7QUFGWCxLQURLLENBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVVFLE1BQUMsMENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZGLENBaENGLENBREY7QUErQ0QsQ0F4RUQ7O0dBQU1JLFc7O0tBQUFBLFc7QUEwRVNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3N0b3J5L25ldy4yYjk2ZTE1NzRiZjI5NzE5ZmFiMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVXBsb2FkLCBtZXNzYWdlLCBGb3JtLCBJbnB1dCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IExvYWRpbmdPdXRsaW5lZCwgUGx1c091dGxpbmVkLCBTdGFyT3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuXHJcbmZ1bmN0aW9uIGdldEJhc2U2NChpbWcsIGNhbGxiYWNrKSB7XHJcbiAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICByZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4gY2FsbGJhY2socmVhZGVyLnJlc3VsdCkpO1xyXG4gIHJlYWRlci5yZWFkQXNEYXRhVVJMKGltZyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJlZm9yZVVwbG9hZChmaWxlKSB7XHJcbiAgY29uc3QgaXNKcGdPclBuZyA9IGZpbGUudHlwZSA9PT0gXCJpbWFnZS9qcGVnXCIgfHwgZmlsZS50eXBlID09PSBcImltYWdlL3BuZ1wiO1xyXG4gIGlmICghaXNKcGdPclBuZykge1xyXG4gICAgbWVzc2FnZS5lcnJvcihcIllvdSBjYW4gb25seSB1cGxvYWQgSlBHL1BORyBmaWxlIVwiKTtcclxuICB9XHJcbiAgY29uc3QgaXNMdDJNID0gZmlsZS5zaXplIC8gMTAyNCAvIDEwMjQgPCAyO1xyXG4gIGlmICghaXNMdDJNKSB7XHJcbiAgICBtZXNzYWdlLmVycm9yKFwiSW1hZ2UgbXVzdCBzbWFsbGVyIHRoYW4gMk1CIVwiKTtcclxuICB9XHJcbiAgcmV0dXJuIGlzSnBnT3JQbmcgJiYgaXNMdDJNO1xyXG59XHJcblxyXG5jb25zdCBVcGxvYWRJbWFnZSA9ICh7IHNldEltYWdlLCBpbWFnZSwgZm9ybSB9KSA9PiB7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpbWFnZVVybCwgc2V0SW1hZ2VVcmxdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChpbmZvKSA9PiB7XHJcbiAgICBpZiAoaW5mby5maWxlLnN0YXR1cyA9PT0gXCJ1cGxvYWRpbmdcIikge1xyXG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoaW5mby5maWxlLnN0YXR1cyA9PT0gXCJkb25lXCIpIHtcclxuICAgICAgZm9ybS5zZXRGaWVsZHNWYWx1ZSh7IGltYWdlOiBpbmZvLmZpbGUub3JpZ2luRmlsZU9iaiB9KTtcclxuICAgICAgc2V0SW1hZ2UoaW5mby5maWxlLm9yaWdpbkZpbGVPYmopO1xyXG4gICAgICBnZXRCYXNlNjQoaW5mby5maWxlLm9yaWdpbkZpbGVPYmosIChpbWFnZVVybCkgPT4ge1xyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIHNldEltYWdlVXJsKGltYWdlVXJsKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdXBsb2FkQnV0dG9uID0gKFxyXG4gICAgPGRpdj5cclxuICAgICAge2xvYWRpbmcgPyA8TG9hZGluZ091dGxpbmVkIC8+IDogPFBsdXNPdXRsaW5lZCAvPn1cclxuICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IDggfX0+VXBsb2FkPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Rm9ybS5JdGVtIG5hbWU9XCJiYW5uZXJcIiBsYWJlbD1cIlVwbG9hZCBhIGNvdmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1cGxvYWQtaW1hZ2VcIj5cclxuICAgICAgICAgIDxVcGxvYWRcclxuICAgICAgICAgICAgZGlzYWJsZWQ9e2Zvcm0uZ2V0RmllbGRWYWx1ZShcImltYWdlXCIpID8gdHJ1ZSA6IGZhbHNlfVxyXG4gICAgICAgICAgICBzaG93VXBsb2FkTGlzdD17e1xyXG4gICAgICAgICAgICAgIHNob3dSZW1vdmVJY29uOiB0cnVlLFxyXG4gICAgICAgICAgICAgIHJlbW92ZUljb246IChcclxuICAgICAgICAgICAgICAgIDxTdGFyT3V0bGluZWRcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGNvbnNvbGUubG9nKGUsIFwiY3VzdG9tIHJlbW92ZUljb24gZXZlbnRcIil9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIG5hbWU9XCJiYW5uZXJcIlxyXG4gICAgICAgICAgICBsaXN0VHlwZT1cInBpY3R1cmUtY2FyZFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvdmVyLXVwbG9hZGVyXCJcclxuICAgICAgICAgICAgc2hvd1VwbG9hZExpc3Q9e2ZhbHNlfVxyXG4gICAgICAgICAgICBiZWZvcmVVcGxvYWQ9e2JlZm9yZVVwbG9hZH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2ltYWdlVXJsID8gKFxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz17aW1hZ2VVcmx9XHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJpbWFnZVwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIsIG9iamVjdEZpdDogXCJjb3ZlclwiIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICB1cGxvYWRCdXR0b25cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvVXBsb2FkPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgIGxhYmVsPVwiSW1hZ2UgQ29weXJpZ2h0XCJcclxuICAgICAgICBuYW1lPVwiaW1hZ2VDb3B5cmlnaHRcIlxyXG4gICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHJlcXVpcmVkOiBpbWFnZSA/IHRydWUgOiBmYWxzZSxcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJBbiBpbWFnZSBjb3B5cmlnaHQgaXMgcmVxdWlyZWRcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXX1cclxuICAgICAgPlxyXG4gICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICA8L0Zvcm0uSXRlbT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVcGxvYWRJbWFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==