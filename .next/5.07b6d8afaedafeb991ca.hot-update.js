webpackHotUpdate(5,{

/***/ "./pages/components/Nav.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_constants_routes__ = __webpack_require__("./pages/utils/constants/routes.js");
var _jsxFileName = "/Users/derekmisler/Sites/derekmisler.com/pages/components/Nav.js";




var Nav = function Nav() {
  var columns = __WEBPACK_IMPORTED_MODULE_2__utils_constants_routes__["a" /* routes */].length || 1;
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
  }, __WEBPACK_IMPORTED_MODULE_2__utils_constants_routes__["a" /* routes */].map(function (section, i) {
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
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/components/Nav")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/utils/constants/routes.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
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
/* unused harmony default export */ var _unused_webpack_default_export = (routes);
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/utils/constants/routes")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.07b6d8afaedafeb991ca.hot-update.js.map