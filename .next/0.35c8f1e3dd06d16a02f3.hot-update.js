webpackHotUpdate(0,{

/***/ "./assets/scss/components/header.scss":
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
module.exports = {"container":"container___W1G-R","heading":"heading___2Fnqh","subheading":"subheading___v52wY","overlay":"overlay___39pTV","downArrow":"downArrow___sogPN"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1530821399160");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=0.35c8f1e3dd06d16a02f3.hot-update.js.map