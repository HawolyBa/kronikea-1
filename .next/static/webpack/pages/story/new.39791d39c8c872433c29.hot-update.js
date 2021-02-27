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

var UploadImage = function UploadImage() {
  _s();

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
      // Get this url from response in real world.
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

  return __jsx("div", {
    className: "upload-image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Upload"], {
    name: "image",
    listType: "picture-card",
    className: "cover-uploader",
    showUploadList: false,
    beforeUpload: beforeUpload,
    onChange: handleChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
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
      lineNumber: 58,
      columnNumber: 11
    }
  }) : uploadButton), __jsx("input", {
    type: "text",
    id: "imageCopyright",
    className: "form-input",
    placeholder: "image copyright",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb3Jtcy9VcGxvYWRJbWFnZS5qcyJdLCJuYW1lcyI6WyJnZXRCYXNlNjQiLCJpbWciLCJjYWxsYmFjayIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJhZGRFdmVudExpc3RlbmVyIiwicmVzdWx0IiwicmVhZEFzRGF0YVVSTCIsImJlZm9yZVVwbG9hZCIsImZpbGUiLCJpc0pwZ09yUG5nIiwidHlwZSIsIm1lc3NhZ2UiLCJlcnJvciIsImlzTHQyTSIsInNpemUiLCJVcGxvYWRJbWFnZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImltYWdlVXJsIiwic2V0SW1hZ2VVcmwiLCJoYW5kbGVDaGFuZ2UiLCJpbmZvIiwic3RhdHVzIiwib3JpZ2luRmlsZU9iaiIsInVwbG9hZEJ1dHRvbiIsIm1hcmdpblRvcCIsIndpZHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLFNBQVQsQ0FBbUJDLEdBQW5CLEVBQXdCQyxRQUF4QixFQUFrQztBQUNoQyxNQUFNQyxNQUFNLEdBQUcsSUFBSUMsVUFBSixFQUFmO0FBQ0FELFFBQU0sQ0FBQ0UsZ0JBQVAsQ0FBd0IsTUFBeEIsRUFBZ0M7QUFBQSxXQUFNSCxRQUFRLENBQUNDLE1BQU0sQ0FBQ0csTUFBUixDQUFkO0FBQUEsR0FBaEM7QUFDQUgsUUFBTSxDQUFDSSxhQUFQLENBQXFCTixHQUFyQjtBQUNEOztBQUVELFNBQVNPLFlBQVQsQ0FBc0JDLElBQXRCLEVBQTRCO0FBQzFCLE1BQU1DLFVBQVUsR0FBR0QsSUFBSSxDQUFDRSxJQUFMLEtBQWMsWUFBZCxJQUE4QkYsSUFBSSxDQUFDRSxJQUFMLEtBQWMsV0FBL0Q7O0FBQ0EsTUFBSSxDQUFDRCxVQUFMLEVBQWlCO0FBQ2ZFLGdEQUFPLENBQUNDLEtBQVIsQ0FBYyxtQ0FBZDtBQUNEOztBQUNELE1BQU1DLE1BQU0sR0FBR0wsSUFBSSxDQUFDTSxJQUFMLEdBQVksSUFBWixHQUFtQixJQUFuQixHQUEwQixDQUF6Qzs7QUFDQSxNQUFJLENBQUNELE1BQUwsRUFBYTtBQUNYRixnREFBTyxDQUFDQyxLQUFSLENBQWMsOEJBQWQ7QUFDRDs7QUFDRCxTQUFPSCxVQUFVLElBQUlJLE1BQXJCO0FBQ0Q7O0FBRUQsSUFBTUUsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBOztBQUFBLHdCQUNNQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsS0FBZixDQUROO0FBQUE7QUFBQSxNQUNqQkMsT0FEaUI7QUFBQSxNQUNSQyxVQURROztBQUFBLHlCQUVRSCw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsRUFBZixDQUZSO0FBQUE7QUFBQSxNQUVqQkcsUUFGaUI7QUFBQSxNQUVQQyxXQUZPOztBQUl4QixNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxJQUFELEVBQVU7QUFDN0IsUUFBSUEsSUFBSSxDQUFDZixJQUFMLENBQVVnQixNQUFWLEtBQXFCLFdBQXpCLEVBQXNDO0FBQ3BDTCxnQkFBVSxDQUFDLElBQUQsQ0FBVjtBQUNBO0FBQ0Q7O0FBQ0QsUUFBSUksSUFBSSxDQUFDZixJQUFMLENBQVVnQixNQUFWLEtBQXFCLE1BQXpCLEVBQWlDO0FBQy9CO0FBQ0F6QixlQUFTLENBQUN3QixJQUFJLENBQUNmLElBQUwsQ0FBVWlCLGFBQVgsRUFBMEIsVUFBQ0wsUUFBRCxFQUFjO0FBQy9DRCxrQkFBVSxDQUFDLEtBQUQsQ0FBVjtBQUNBRSxtQkFBVyxDQUFDRCxRQUFELENBQVg7QUFDRCxPQUhRLENBQVQ7QUFJRDtBQUNGLEdBWkQ7O0FBY0EsTUFBTU0sWUFBWSxHQUNoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dSLE9BQU8sR0FBRyxNQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBSCxHQUF5QixNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEbkMsRUFFRTtBQUFLLFNBQUssRUFBRTtBQUFFUyxlQUFTLEVBQUU7QUFBYixLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixDQURGOztBQU9BLFNBQ0U7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywyQ0FBRDtBQUNFLFFBQUksRUFBQyxPQURQO0FBRUUsWUFBUSxFQUFDLGNBRlg7QUFHRSxhQUFTLEVBQUMsZ0JBSFo7QUFJRSxrQkFBYyxFQUFFLEtBSmxCO0FBS0UsZ0JBQVksRUFBRXBCLFlBTGhCO0FBTUUsWUFBUSxFQUFFZSxZQU5aO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FRR0YsUUFBUSxHQUNQO0FBQUssT0FBRyxFQUFFQSxRQUFWO0FBQW9CLE9BQUcsRUFBQyxPQUF4QjtBQUFnQyxTQUFLLEVBQUU7QUFBRVEsV0FBSyxFQUFFO0FBQVQsS0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURPLEdBR1BGLFlBWEosQ0FERixFQWVFO0FBQ0UsUUFBSSxFQUFDLE1BRFA7QUFFRSxNQUFFLEVBQUMsZ0JBRkw7QUFHRSxhQUFTLEVBQUMsWUFIWjtBQUlFLGVBQVcsRUFBQyxpQkFKZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZkYsQ0FERjtBQXdCRCxDQWpERDs7R0FBTVgsVzs7S0FBQUEsVztBQW1EU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3RvcnkvbmV3LjM5NzkxZDM5YzhjODcyNDMzYzI5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVcGxvYWQsIG1lc3NhZ2UgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyBMb2FkaW5nT3V0bGluZWQsIFBsdXNPdXRsaW5lZCB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5cclxuZnVuY3Rpb24gZ2V0QmFzZTY0KGltZywgY2FsbGJhY2spIHtcclxuICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gIHJlYWRlci5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiBjYWxsYmFjayhyZWFkZXIucmVzdWx0KSk7XHJcbiAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoaW1nKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYmVmb3JlVXBsb2FkKGZpbGUpIHtcclxuICBjb25zdCBpc0pwZ09yUG5nID0gZmlsZS50eXBlID09PSBcImltYWdlL2pwZWdcIiB8fCBmaWxlLnR5cGUgPT09IFwiaW1hZ2UvcG5nXCI7XHJcbiAgaWYgKCFpc0pwZ09yUG5nKSB7XHJcbiAgICBtZXNzYWdlLmVycm9yKFwiWW91IGNhbiBvbmx5IHVwbG9hZCBKUEcvUE5HIGZpbGUhXCIpO1xyXG4gIH1cclxuICBjb25zdCBpc0x0Mk0gPSBmaWxlLnNpemUgLyAxMDI0IC8gMTAyNCA8IDI7XHJcbiAgaWYgKCFpc0x0Mk0pIHtcclxuICAgIG1lc3NhZ2UuZXJyb3IoXCJJbWFnZSBtdXN0IHNtYWxsZXIgdGhhbiAyTUIhXCIpO1xyXG4gIH1cclxuICByZXR1cm4gaXNKcGdPclBuZyAmJiBpc0x0Mk07XHJcbn1cclxuXHJcbmNvbnN0IFVwbG9hZEltYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaW1hZ2VVcmwsIHNldEltYWdlVXJsXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoaW5mbykgPT4ge1xyXG4gICAgaWYgKGluZm8uZmlsZS5zdGF0dXMgPT09IFwidXBsb2FkaW5nXCIpIHtcclxuICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKGluZm8uZmlsZS5zdGF0dXMgPT09IFwiZG9uZVwiKSB7XHJcbiAgICAgIC8vIEdldCB0aGlzIHVybCBmcm9tIHJlc3BvbnNlIGluIHJlYWwgd29ybGQuXHJcbiAgICAgIGdldEJhc2U2NChpbmZvLmZpbGUub3JpZ2luRmlsZU9iaiwgKGltYWdlVXJsKSA9PiB7XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgc2V0SW1hZ2VVcmwoaW1hZ2VVcmwpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCB1cGxvYWRCdXR0b24gPSAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7bG9hZGluZyA/IDxMb2FkaW5nT3V0bGluZWQgLz4gOiA8UGx1c091dGxpbmVkIC8+fVxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogOCB9fT5VcGxvYWQ8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInVwbG9hZC1pbWFnZVwiPlxyXG4gICAgICA8VXBsb2FkXHJcbiAgICAgICAgbmFtZT1cImltYWdlXCJcclxuICAgICAgICBsaXN0VHlwZT1cInBpY3R1cmUtY2FyZFwiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiY292ZXItdXBsb2FkZXJcIlxyXG4gICAgICAgIHNob3dVcGxvYWRMaXN0PXtmYWxzZX1cclxuICAgICAgICBiZWZvcmVVcGxvYWQ9e2JlZm9yZVVwbG9hZH1cclxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICA+XHJcbiAgICAgICAge2ltYWdlVXJsID8gKFxyXG4gICAgICAgICAgPGltZyBzcmM9e2ltYWdlVXJsfSBhbHQ9XCJpbWFnZVwiIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fSAvPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICB1cGxvYWRCdXR0b25cclxuICAgICAgICApfVxyXG4gICAgICA8L1VwbG9hZD5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgIGlkPVwiaW1hZ2VDb3B5cmlnaHRcIlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImZvcm0taW5wdXRcIlxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiaW1hZ2UgY29weXJpZ2h0XCJcclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVcGxvYWRJbWFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==