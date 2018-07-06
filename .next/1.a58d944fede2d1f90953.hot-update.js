webpackHotUpdate(1,{

/***/ "./pages/utils/constants/navLinks.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return navLinks; });
var navLinks = [{
  label: 'About',
  location: 'about'
}, {
  label: 'Experience',
  location: 'experience'
}, {
  label: 'Qualifications',
  location: 'qualifications'
}, {
  label: 'Projects',
  location: 'projects'
}, {
  label: 'Contact',
  location: 'contact'
}];
/* unused harmony default export */ var _unused_webpack_default_export = (navLinks);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/utils/constants/navLinks")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=1.a58d944fede2d1f90953.hot-update.js.map