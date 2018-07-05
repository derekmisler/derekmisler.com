webpackHotUpdate(5,{

/***/ "./components/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_scss_components_header_scss__ = __webpack_require__("./assets/scss/components/header.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_scss_components_header_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__assets_scss_components_header_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_stringFormat__ = __webpack_require__("./utils/stringFormat.js");
var _jsxFileName = "/Users/derekmisler/Sites/derekmisler.com/components/Header.js";






var Header = function Header(props) {
  var profile = props.profile;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_3__assets_scss_components_header_scss___default.a.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
    className: __WEBPACK_IMPORTED_MODULE_3__assets_scss_components_header_scss___default.a.heading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, profile.firstName, ' ', profile.lastName, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("small", {
    className: __WEBPACK_IMPORTED_MODULE_3__assets_scss_components_header_scss___default.a.subheading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, Object(__WEBPACK_IMPORTED_MODULE_4__utils_stringFormat__["a" /* fixWidow */])(profile.description)))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_3__assets_scss_components_header_scss___default.a.overlay,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    className: __WEBPACK_IMPORTED_MODULE_3__assets_scss_components_header_scss___default.a.downArrow,
    to: "#about-derek-misler",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, "Down"));
};

Header.propTypes = {
  profile: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.shape({
    firstName: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string.isRequired,
    lastName: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string.isRequired,
    description: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string.isRequired
  }).isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ })

})
//# sourceMappingURL=5.e2f9e2bf644f90f75c85.hot-update.js.map