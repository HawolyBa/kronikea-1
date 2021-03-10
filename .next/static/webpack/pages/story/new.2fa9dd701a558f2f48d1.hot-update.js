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
  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "showUploadList", false), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "beforeUpload", beforeUpload), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "onChange", handleChange), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "maxCount", 1), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__self", _this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__source", {
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
      lineNumber: 68,
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
      lineNumber: 78,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb3Jtcy9VcGxvYWRJbWFnZS5qcyJdLCJuYW1lcyI6WyJnZXRCYXNlNjQiLCJpbWciLCJjYWxsYmFjayIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJhZGRFdmVudExpc3RlbmVyIiwicmVzdWx0IiwicmVhZEFzRGF0YVVSTCIsImJlZm9yZVVwbG9hZCIsImZpbGUiLCJpc0pwZ09yUG5nIiwidHlwZSIsIm1lc3NhZ2UiLCJlcnJvciIsImlzTHQyTSIsInNpemUiLCJVcGxvYWRJbWFnZSIsImZvcm0iLCJSZWFjdCIsInVzZVN0YXRlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJpbWFnZVVybCIsInNldEltYWdlVXJsIiwiaGFuZGxlQ2hhbmdlIiwiaW5mbyIsInN0YXR1cyIsInNldEZpZWxkc1ZhbHVlIiwiYmFubmVyIiwib3JpZ2luRmlsZU9iaiIsInVwbG9hZEJ1dHRvbiIsIm1hcmdpblRvcCIsInNob3dSZW1vdmVJY29uIiwicmVtb3ZlSWNvbiIsImUiLCJjb25zb2xlIiwibG9nIiwid2lkdGgiLCJoZWlnaHQiLCJvYmplY3RGaXQiLCJyZXF1aXJlZCIsImdldEZpZWxkVmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxTQUFULENBQW1CQyxHQUFuQixFQUF3QkMsUUFBeEIsRUFBa0M7QUFDaEMsTUFBTUMsTUFBTSxHQUFHLElBQUlDLFVBQUosRUFBZjtBQUNBRCxRQUFNLENBQUNFLGdCQUFQLENBQXdCLE1BQXhCLEVBQWdDO0FBQUEsV0FBTUgsUUFBUSxDQUFDQyxNQUFNLENBQUNHLE1BQVIsQ0FBZDtBQUFBLEdBQWhDO0FBQ0FILFFBQU0sQ0FBQ0ksYUFBUCxDQUFxQk4sR0FBckI7QUFDRDs7QUFFRCxTQUFTTyxZQUFULENBQXNCQyxJQUF0QixFQUE0QjtBQUMxQixNQUFNQyxVQUFVLEdBQUdELElBQUksQ0FBQ0UsSUFBTCxLQUFjLFlBQWQsSUFBOEJGLElBQUksQ0FBQ0UsSUFBTCxLQUFjLFdBQS9EOztBQUNBLE1BQUksQ0FBQ0QsVUFBTCxFQUFpQjtBQUNmRSxnREFBTyxDQUFDQyxLQUFSLENBQWMsbUNBQWQ7QUFDRDs7QUFDRCxNQUFNQyxNQUFNLEdBQUdMLElBQUksQ0FBQ00sSUFBTCxHQUFZLElBQVosR0FBbUIsSUFBbkIsR0FBMEIsQ0FBekM7O0FBQ0EsTUFBSSxDQUFDRCxNQUFMLEVBQWE7QUFDWEYsZ0RBQU8sQ0FBQ0MsS0FBUixDQUFjLDhCQUFkO0FBQ0Q7O0FBQ0QsU0FBT0gsVUFBVSxJQUFJSSxNQUFyQjtBQUNEOztBQUVELElBQU1FLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQWM7QUFBQTs7QUFBQTs7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7O0FBQUEsd0JBQ0ZDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBREU7QUFBQTtBQUFBLE1BQ3pCQyxPQUR5QjtBQUFBLE1BQ2hCQyxVQURnQjs7QUFBQSx5QkFFQUgsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEVBQWYsQ0FGQTtBQUFBO0FBQUEsTUFFekJHLFFBRnlCO0FBQUEsTUFFZkMsV0FGZTs7QUFJaEMsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsSUFBRCxFQUFVO0FBQzdCLFFBQUlBLElBQUksQ0FBQ2hCLElBQUwsQ0FBVWlCLE1BQVYsS0FBcUIsV0FBekIsRUFBc0M7QUFDcENMLGdCQUFVLENBQUMsSUFBRCxDQUFWO0FBQ0E7QUFDRDs7QUFDRCxRQUFJSSxJQUFJLENBQUNoQixJQUFMLENBQVVpQixNQUFWLEtBQXFCLE1BQXpCLEVBQWlDO0FBQy9CVCxVQUFJLENBQUNVLGNBQUwsQ0FBb0I7QUFBRUMsY0FBTSxFQUFFSCxJQUFJLENBQUNoQixJQUFMLENBQVVvQjtBQUFwQixPQUFwQixFQUQrQixDQUUvQjs7QUFDQTdCLGVBQVMsQ0FBQ3lCLElBQUksQ0FBQ2hCLElBQUwsQ0FBVW9CLGFBQVgsRUFBMEIsVUFBQ1AsUUFBRCxFQUFjO0FBQy9DRCxrQkFBVSxDQUFDLEtBQUQsQ0FBVjtBQUNBRSxtQkFBVyxDQUFDRCxRQUFELENBQVg7QUFDRCxPQUhRLENBQVQ7QUFJRDtBQUNGLEdBYkQ7O0FBZUEsTUFBTVEsWUFBWSxHQUNoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dWLE9BQU8sR0FBRyxNQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBSCxHQUF5QixNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEbkMsRUFFRTtBQUFLLFNBQUssRUFBRTtBQUFFVyxlQUFTLEVBQUU7QUFBYixLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixDQURGOztBQU1BLFNBQ0UsbUVBQ0UsTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBVyxRQUFJLEVBQUMsUUFBaEI7QUFBeUIsU0FBSyxFQUFDLGdCQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywyQ0FBRDtBQUNFLGtCQUFjLEVBQUU7QUFDZEMsb0JBQWMsRUFBRSxJQURGO0FBRWRDLGdCQUFVLEVBQ1IsTUFBQyw4REFBRDtBQUNFLGVBQU8sRUFBRSxpQkFBQ0MsQ0FBRDtBQUFBLGlCQUFPQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsQ0FBWixFQUFlLHlCQUFmLENBQVA7QUFBQSxTQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIWSxLQURsQjtBQVNFLFFBQUksRUFBQyxPQVRQO0FBVUUsWUFBUSxFQUFDLFNBVlg7QUFXRSxhQUFTLEVBQUM7QUFYWix1SEFZa0IsS0FabEIsbUhBYWdCMUIsWUFiaEIsK0dBY1lnQixZQWRaLCtHQWVZLENBZlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWlCR0YsUUFBUSxHQUNQO0FBQ0UsT0FBRyxFQUFFQSxRQURQO0FBRUUsT0FBRyxFQUFDLE9BRk47QUFHRSxTQUFLLEVBQUU7QUFBRWUsV0FBSyxFQUFFLE1BQVQ7QUFBaUJDLFlBQU0sRUFBRSxNQUF6QjtBQUFpQ0MsZUFBUyxFQUFFO0FBQTVDLEtBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURPLEdBT1BULFlBeEJKLENBREYsQ0FERixFQThCRSxNQUFDLHlDQUFELENBQU0sSUFBTjtBQUNFLFNBQUssRUFBQyxpQkFEUjtBQUVFLFFBQUksRUFBQyxnQkFGUDtBQUdFLFNBQUssRUFBRSxDQUNMO0FBQ0VVLGNBQVEsRUFBRXZCLElBQUksQ0FBQ3dCLGFBQUwsQ0FBbUIsUUFBbkIsSUFBK0IsSUFBL0IsR0FBc0MsS0FEbEQ7QUFFRTdCLGFBQU8sRUFBRTtBQUZYLEtBREssQ0FIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBVUUsTUFBQywwQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVkYsQ0E5QkYsQ0FERjtBQTZDRCxDQXRFRDs7R0FBTUksVzs7S0FBQUEsVztBQXdFU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3RvcnkvbmV3LjJmYTlkZDcwMWE1NThmMmY0OGQxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVcGxvYWQsIG1lc3NhZ2UsIEZvcm0sIElucHV0IH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgTG9hZGluZ091dGxpbmVkLCBQbHVzT3V0bGluZWQsIFN0YXJPdXRsaW5lZCB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5cclxuZnVuY3Rpb24gZ2V0QmFzZTY0KGltZywgY2FsbGJhY2spIHtcclxuICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gIHJlYWRlci5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiBjYWxsYmFjayhyZWFkZXIucmVzdWx0KSk7XHJcbiAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoaW1nKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYmVmb3JlVXBsb2FkKGZpbGUpIHtcclxuICBjb25zdCBpc0pwZ09yUG5nID0gZmlsZS50eXBlID09PSBcImltYWdlL2pwZWdcIiB8fCBmaWxlLnR5cGUgPT09IFwiaW1hZ2UvcG5nXCI7XHJcbiAgaWYgKCFpc0pwZ09yUG5nKSB7XHJcbiAgICBtZXNzYWdlLmVycm9yKFwiWW91IGNhbiBvbmx5IHVwbG9hZCBKUEcvUE5HIGZpbGUhXCIpO1xyXG4gIH1cclxuICBjb25zdCBpc0x0Mk0gPSBmaWxlLnNpemUgLyAxMDI0IC8gMTAyNCA8IDI7XHJcbiAgaWYgKCFpc0x0Mk0pIHtcclxuICAgIG1lc3NhZ2UuZXJyb3IoXCJJbWFnZSBtdXN0IHNtYWxsZXIgdGhhbiAyTUIhXCIpO1xyXG4gIH1cclxuICByZXR1cm4gaXNKcGdPclBuZyAmJiBpc0x0Mk07XHJcbn1cclxuXHJcbmNvbnN0IFVwbG9hZEltYWdlID0gKHsgZm9ybSB9KSA9PiB7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpbWFnZVVybCwgc2V0SW1hZ2VVcmxdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChpbmZvKSA9PiB7XHJcbiAgICBpZiAoaW5mby5maWxlLnN0YXR1cyA9PT0gXCJ1cGxvYWRpbmdcIikge1xyXG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoaW5mby5maWxlLnN0YXR1cyA9PT0gXCJkb25lXCIpIHtcclxuICAgICAgZm9ybS5zZXRGaWVsZHNWYWx1ZSh7IGJhbm5lcjogaW5mby5maWxlLm9yaWdpbkZpbGVPYmogfSk7XHJcbiAgICAgIC8vIHNldEltYWdlKGluZm8uZmlsZS5vcmlnaW5GaWxlT2JqKTtcclxuICAgICAgZ2V0QmFzZTY0KGluZm8uZmlsZS5vcmlnaW5GaWxlT2JqLCAoaW1hZ2VVcmwpID0+IHtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICBzZXRJbWFnZVVybChpbWFnZVVybCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHVwbG9hZEJ1dHRvbiA9IChcclxuICAgIDxkaXY+XHJcbiAgICAgIHtsb2FkaW5nID8gPExvYWRpbmdPdXRsaW5lZCAvPiA6IDxQbHVzT3V0bGluZWQgLz59XHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiA4IH19PlVwbG9hZDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEZvcm0uSXRlbSBuYW1lPVwiYmFubmVyXCIgbGFiZWw9XCJVcGxvYWQgYSBjb3ZlclwiPlxyXG4gICAgICAgIDxVcGxvYWRcclxuICAgICAgICAgIHNob3dVcGxvYWRMaXN0PXt7XHJcbiAgICAgICAgICAgIHNob3dSZW1vdmVJY29uOiB0cnVlLFxyXG4gICAgICAgICAgICByZW1vdmVJY29uOiAoXHJcbiAgICAgICAgICAgICAgPFN0YXJPdXRsaW5lZFxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGNvbnNvbGUubG9nKGUsIFwiY3VzdG9tIHJlbW92ZUljb24gZXZlbnRcIil9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBuYW1lPVwiY292ZXJcIlxyXG4gICAgICAgICAgbGlzdFR5cGU9XCJwaWN0dXJlXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImNvdmVyLXVwbG9hZGVyXCJcclxuICAgICAgICAgIHNob3dVcGxvYWRMaXN0PXtmYWxzZX1cclxuICAgICAgICAgIGJlZm9yZVVwbG9hZD17YmVmb3JlVXBsb2FkfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgIG1heENvdW50PXsxfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtpbWFnZVVybCA/IChcclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIHNyYz17aW1hZ2VVcmx9XHJcbiAgICAgICAgICAgICAgYWx0PVwiaW1hZ2VcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgb2JqZWN0Rml0OiBcImNvdmVyXCIgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIHVwbG9hZEJ1dHRvblxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L1VwbG9hZD5cclxuICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICBsYWJlbD1cIkltYWdlIENvcHlyaWdodFwiXHJcbiAgICAgICAgbmFtZT1cImltYWdlQ29weXJpZ2h0XCJcclxuICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICByZXF1aXJlZDogZm9ybS5nZXRGaWVsZFZhbHVlKFwiYmFubmVyXCIpID8gdHJ1ZSA6IGZhbHNlLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkFuIGltYWdlIGNvcHlyaWdodCBpcyByZXF1aXJlZFwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdfVxyXG4gICAgICA+XHJcbiAgICAgICAgPElucHV0IC8+XHJcbiAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVwbG9hZEltYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9