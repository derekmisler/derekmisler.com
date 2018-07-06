module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/about.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "About", function() { return About; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__("./pages/components/Layout.js");
var _jsxFileName = "/Users/derekmisler/Sites/derekmisler.com/pages/about.js";


var About = function About() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Layout__["a" /* default */], {
    heading: "About",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "placeholder"));
};
/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./pages/components/Footer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/derekmisler/Sites/derekmisler.com/pages/components/Footer.js";


var Footer = function Footer() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("footer", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    }
  }, "Footer"));
};

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ "./pages/components/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_styles_components_header_scss__ = __webpack_require__("./static/styles/components/header.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_styles_components_header_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__static_styles_components_header_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_helpers_stringFormat__ = __webpack_require__("./pages/utils/helpers/stringFormat.js");
var _jsxFileName = "/Users/derekmisler/Sites/derekmisler.com/pages/components/Header.js";





var Header = function Header(props) {
  var heading = props.heading,
      subheading = props.subheading;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_2__static_styles_components_header_scss___default.a.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
    className: __WEBPACK_IMPORTED_MODULE_2__static_styles_components_header_scss___default.a.heading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, heading, subheading && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("small", {
    className: __WEBPACK_IMPORTED_MODULE_2__static_styles_components_header_scss___default.a.subheading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, Object(__WEBPACK_IMPORTED_MODULE_3__utils_helpers_stringFormat__["a" /* fixWidow */])(subheading))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_2__static_styles_components_header_scss___default.a.overlay,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }));
};

Header.propTypes = {
  heading: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  subheading: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
};
Header.defaultProps = {
  subheading: null
};
/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "./pages/components/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__static_styles_style_scss__ = __webpack_require__("./static/styles/style.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__static_styles_style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__static_styles_style_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Header__ = __webpack_require__("./pages/components/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Nav__ = __webpack_require__("./pages/components/Nav.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Footer__ = __webpack_require__("./pages/components/Footer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_helpers_analytics__ = __webpack_require__("./pages/utils/helpers/analytics.js");
var _jsxFileName = "/Users/derekmisler/Sites/derekmisler.com/pages/components/Layout.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var Layout =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Layout, _React$Component);

  function Layout() {
    _classCallCheck(this, Layout);

    return _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).apply(this, arguments));
  }

  _createClass(Layout, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!window.GA_INITIALIZED) {
        Object(__WEBPACK_IMPORTED_MODULE_6__utils_helpers_analytics__["a" /* initGA */])();
        window.GA_INITIALIZED = true;
      }

      Object(__WEBPACK_IMPORTED_MODULE_6__utils_helpers_analytics__["b" /* logPageView */])();
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          children = _props.children,
          heading = _props.heading,
          subheading = _props.subheading;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Fragment, null, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Header__["a" /* default */], {
        heading: heading,
        subheading: subheading,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Nav__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }), children && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("main", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, children), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Footer__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }));
    }
  }]);

  return Layout;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

Layout.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.element), __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.element]),
  heading: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string.isRequired,
  subheading: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string
};
Layout.defaultProps = {
  children: null,
  subheading: null
};
/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "./pages/components/Nav.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_constants_routes__ = __webpack_require__("./pages/utils/constants/routes.js");
var _jsxFileName = "/Users/derekmisler/Sites/derekmisler.com/pages/components/Nav.js";




var Nav = function Nav() {
  var columns = __WEBPACK_IMPORTED_MODULE_2__utils_constants_routes__["b" /* routes */].length || 1;
  var navClass = "nav medium-block-grid-".concat(columns);
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("nav", {
    className: "navbar scroll-down hidden-xs hidden-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
    type: "button",
    className: "navbar-toggle",
    "data-toggle": "collapse",
    "data-target": ".navbar-collapse",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, "Menu"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "collapse navbar-collapse",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
    className: navClass,
    vocab: "http://schema.org/",
    "typeof": "BreadcrumbList",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, __WEBPACK_IMPORTED_MODULE_2__utils_constants_routes__["b" /* routes */].map(function (section, i) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
      key: section.label,
      property: "itemListElement",
      "typeof": "ListItem",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
      prefetch: true,
      href: "/".concat(section.location),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
      property: "item",
      "typeof": "WebPage",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
      property: "name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      }
    }, section.label))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
      property: "position",
      content: i + 1,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      }
    }));
  }))));
};

/* harmony default export */ __webpack_exports__["a"] = (Nav);

/***/ }),

/***/ "./pages/utils/constants/routes.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routes; });
var routes = [{
  label: 'About',
  location: '/about'
}, {
  label: 'Experience',
  location: '/experience'
}, {
  label: 'Qualifications',
  location: '/qualifications'
}, {
  label: 'Projects',
  location: '/projects'
}, {
  label: 'Contact',
  location: '/contact'
}];
/* harmony default export */ __webpack_exports__["a"] = (routes);

/***/ }),

/***/ "./pages/utils/helpers/analytics.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return initGA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return logPageView; });
/* unused harmony export logEvent */
/* unused harmony export logException */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_ga__ = __webpack_require__("react-ga");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_ga___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_ga__);

var initGA = function initGA() {
  __WEBPACK_IMPORTED_MODULE_0_react_ga___default.a.initialize('UA-17984733-3');
};
var logPageView = function logPageView() {
  __WEBPACK_IMPORTED_MODULE_0_react_ga___default.a.set({
    page: window.location.pathname
  });
  __WEBPACK_IMPORTED_MODULE_0_react_ga___default.a.pageview(window.location.pathname);
};
var logEvent = function logEvent() {
  var category = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (category && action) {
    __WEBPACK_IMPORTED_MODULE_0_react_ga___default.a.event({
      category: category,
      action: action
    });
  }
};
var logException = function logException() {
  var description = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var fatal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (description) {
    __WEBPACK_IMPORTED_MODULE_0_react_ga___default.a.exception({
      description: description,
      fatal: fatal
    });
  }
};
/* unused harmony default export */ var _unused_webpack_default_export = (initGA);

/***/ }),

/***/ "./pages/utils/helpers/stringFormat.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fixWidow; });
var fixWidow = function fixWidow() {
  var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return string.replace(/\s([^\s]+)\s*$/, "\xA0$1");
};

/***/ }),

/***/ "./static/styles/components/header.scss":
/***/ (function(module, exports) {

module.exports = {
	"container": "container___27y69",
	"heading": "heading___3X_KM",
	"subheading": "subheading___1Cjcy",
	"overlay": "overlay___36JM3",
	"downArrow": "downArrow___hWbrl"
};

/***/ }),

/***/ "./static/styles/style.scss":
/***/ (function(module, exports) {

module.exports = {
	"clearfix": "clearfix___3_ooA",
	"lead": "lead___3f-d2",
	"hug": "hug___2j4h-"
};

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/about.js");


/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "prop-types":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-ga":
/***/ (function(module, exports) {

module.exports = require("react-ga");

/***/ })

/******/ });
//# sourceMappingURL=about.js.map