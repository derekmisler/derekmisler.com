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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/scss/components/header.scss":
/***/ (function(module, exports) {

module.exports = {
	"container": "container___W1G-R",
	"heading": "heading___2Fnqh",
	"subheading": "subheading___v52wY",
	"overlay": "overlay___39pTV",
	"downArrow": "downArrow___sogPN"
};

/***/ }),

/***/ "./assets/scss/style.scss":
/***/ (function(module, exports) {

module.exports = {
	"clearfix": "clearfix___20kS0",
	"lead": "lead___3W6sV",
	"hug": "hug___3_wZX"
};

/***/ }),

/***/ "./components/About.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/derekmisler/Sites/derekmisler.com/components/About.js";


var About = function About() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    }
  }, "About"));
};

/* harmony default export */ __webpack_exports__["a"] = (About);

/***/ }),

/***/ "./components/App.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Nav__ = __webpack_require__("./components/Nav.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Header__ = __webpack_require__("./components/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__About__ = __webpack_require__("./components/About.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Experience__ = __webpack_require__("./components/Experience.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Qualifications__ = __webpack_require__("./components/Qualifications.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Projects__ = __webpack_require__("./components/Projects.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Footer__ = __webpack_require__("./components/Footer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__constants_resume__ = __webpack_require__("./constants/resume.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__constants_resume___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__constants_resume__);
var _jsxFileName = "/Users/derekmisler/Sites/derekmisler.com/components/App.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var App =
/*#__PURE__*/
function (_Component) {
  _inherits(App, _Component);

  function App() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this.state = _objectSpread({}, __WEBPACK_IMPORTED_MODULE_8__constants_resume___default.a), _temp));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      var profile = this.state.profile;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Header__["a" /* default */], {
        profile: profile,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Nav__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__About__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Experience__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Qualifications__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Projects__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__Footer__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }));
    }
  }]);

  return App;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),

/***/ "./components/Experience.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/derekmisler/Sites/derekmisler.com/components/Experience.js";


var Experience = function Experience() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, "Experience"));
};

/* harmony default export */ __webpack_exports__["a"] = (Experience);

/***/ }),

/***/ "./components/Footer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/derekmisler/Sites/derekmisler.com/components/Footer.js";


var Footer = function Footer() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, "Footer"));
};

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ "./components/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("prop-types");
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

/***/ }),

/***/ "./components/Nav.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_sections__ = __webpack_require__("./constants/sections.js");
var _jsxFileName = "/Users/derekmisler/Sites/derekmisler.com/components/Nav.js";




var Nav = function Nav() {
  var columns = __WEBPACK_IMPORTED_MODULE_2__constants_sections__["a" /* sections */].length || 1;
  var navClass = "nav medium-block-grid-".concat(columns);
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("nav", {
    className: "navbar scroll-down hidden-xs hidden-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
    type: "button",
    className: "navbar-toggle",
    "data-toggle": "collapse",
    "data-target": ".navbar-collapse",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, "Menu"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "collapse navbar-collapse",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
    className: navClass,
    vocab: "http://schema.org/",
    "typeof": "BreadcrumbList",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, __WEBPACK_IMPORTED_MODULE_2__constants_sections__["a" /* sections */].map(function (section, i) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
      key: section.label,
      property: "itemListElement",
      "typeof": "ListItem",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
      property: "item",
      "typeof": "WebPage",
      to: section.location,
      activeClassName: "active",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
      property: "name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      }
    }, section.label)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
      property: "position",
      content: i + 1,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      }
    }));
  }))));
};

/* harmony default export */ __webpack_exports__["a"] = (Nav);

/***/ }),

/***/ "./components/Projects.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/derekmisler/Sites/derekmisler.com/components/Projects.js";


var Projects = function Projects() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, "Projects"));
};

/* harmony default export */ __webpack_exports__["a"] = (Projects);

/***/ }),

/***/ "./components/Qualifications.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/derekmisler/Sites/derekmisler.com/components/Qualifications.js";


var Qualifications = function Qualifications() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, "Qualifications"));
};

/* harmony default export */ __webpack_exports__["a"] = (Qualifications);

/***/ }),

/***/ "./constants/resume.js":
/***/ (function(module, exports) {

var firstName = 'Derek';
var middleName = 'Alan';
var lastName = 'Misler';
var description = 'Front-End Engineer & UI/UX Designer';
var email = 'derekmisler@gmail.com';
var socialId = 'derekmisler';
var metaDescription = "".concat(firstName, " is a front-end engineer with a design background and 10+ years of experience. He is also available for hire. Send an email to ").concat(email, " if you'd like to learn more.");
var biography = 'I am a front-end engineer and UI/UX designer living in New York with 10+ years experience. I have a diverse education, both traditional and self-driven, of many different web and app development languages for desktop and mobile. I am basically fluent with HTML5, CSS3 (including CSS preprocessors like LESS and Sass) along with JavaScript (ES6/7, including frameworks like React and Aurelia), including templating languages like Jade/Pug. I have experience with back-end languages, too, like Node, Python, Ruby, and a long history with PHP. I also have a design background a surprisingly large knowledge of typography (seriously, let\'s talk about it). I think all developers should study design, and I believe having this well-rounded education makes me a stronger engineer.';
var resume = {
  profile: {
    firstName: firstName,
    middleName: middleName,
    lastName: lastName,
    fullName: "".concat(firstName, " ").concat(lastName),
    description: description,
    title: "".concat(firstName, " ").concat(lastName, " | ").concat(description),
    metaDescription: metaDescription,
    biography: biography
  },
  location: {
    houseNumber: '700',
    street: 'W End Ave. 12A',
    zipcode: '10025',
    city: 'New York',
    state: 'NY',
    country: 'United States'
  },
  contact: {
    email: email,
    website: "http://www.".concat(socialId, ".com"),
    phone: '+18282736943',
    phoneDisplay: '(828) 273-6943',
    twitter: "http://twitter.com/".concat(socialId),
    twitterHandle: "@".concat(socialId),
    linkedin: "http://www.linkedin.com/in/".concat(socialId, "/"),
    github: "http://".concat(socialId, ".github.io"),
    flickr: "http://www.flickr.com/photos/".concat(socialId, "/"),
    fivehundred: "https://prime.500px.com/".concat(socialId),
    stackOverflow: "http://careers.stackoverflow.com/".concat(socialId),
    instagram: "https://www.instagram.com/".concat(socialId, "/"),
    pinterest: "https://www.pinterest.com/".concat(socialId, "/")
  },
  education: [{
    title: 'Appalachian State University',
    specification: 'BFA - Graphic Design',
    location: 'Boone, North Carolina',
    description: 'I chose to study graphic design in an arts department. I already had a grasp on front-end web development techniques and continued to study them during this time, but the curriculum path I chose focused on web design while also teaching color theory, typography, and layout design in a group setting. Outside of designing for the web, we also had the opportunity to learn Flash/Actionscript game development.',
    startDate: '2005',
    endDate: '2009',
    completed: true
  }],
  careers: [{
    title: 'Asheville Convention & Visitors Bureau',
    specification: 'Web Manager/Developer',
    location: 'Asheville, North Carolina',
    level: 'Full-time',
    description: 'As the only developer on staff, my job was to maintain our entire web presence. We started with a .NET-backed site, and one of my first tasks was to create a matching mobile site and responsive blog theme. While I was on board, I oversaw two redesigns, first with Coldfusion and more recently with a responsive site that was built with Node on the back-end and a custom JS templating language, Goatee, on the front-end. I\'ve been in charge of creating all print- and web-related assets for our various marketing campaigns, all of the data analysis of those campaigns, and two long-form, media-rich, highly interactive, award-winning web applications. I also oversaw the email marketing program, which included designing and creating the email templates, capturing and segmenting demographic data, and the analysis of the data we received after each campaign.',
    startDate: '2011',
    endDate: '2016',
    link: 'http://www.exploreasheville.com'
  }, {
    title: 'Houser Shoes, Inc.',
    specification: 'Front-End Developer/Designer/Photographer',
    location: 'Fletcher, North Carolina',
    level: 'Full-time',
    description: 'During my time at Houser Shoes, I was part of a 3 person team that redesigned their e-commerce website. We also created a custom CMS based on Magento, which utilized primarily PHP and MySQL and was tied to their inventory and accounting systems. Photography is a part of my design background, so I was also the product photographer. Many hours were spent taking and editing and uploading photos of shoes. Just so many shoes. I was also in charge of the email marketing program, including all of the design and implementation of each campaign, as well as the analysis of the results after each campaign.',
    startDate: '2010',
    endDate: '2011',
    link: 'http://www.housershoes.com'
  }, {
    title: 'Freelance',
    specification: 'Developer/Designer',
    location: 'Asheville, North Carolina',
    level: 'Freelance',
    description: 'A lot of branding, especially at first, but I eventually had enough clients needing new websites that I became a full-time web developer. A lot of HTML/CSS/JavaScript and PHP (usually Wordpress).',
    startDate: '2009',
    endDate: '2016',
    link: null
  }, {
    title: 'Precision Printing',
    specification: 'Designer/Printer',
    location: 'Boone, North Carolina',
    level: 'Part-time',
    description: 'Though this isn\'t web-related, I still think my experience working in a print shop can be seen in my work as a developer. When a job consists of tens of thousands of prints, the whole process requires an extremely detail-oriented approach, efficiency, and communication among all members of the team to ensure we weren\'t making mistakes that would cost us a lot of time/paper/ink/money to fix.',
    startDate: '2007',
    endDate: '2009',
    link: null
  }, {
    title: 'The Appalachian Newspaper',
    specification: 'Lead Designer/Developer',
    location: 'Boone, North Carolina',
    level: 'Part-time',
    description: 'I worked with an intern to establish an online presence for The Appalachian newspaper, while still maintaining my role as the lead graphic designer.',
    startDate: '2006',
    endDate: '2008',
    link: 'http://theappalachianonline.com'
  }],
  coursework: [{
    title: 'Harvard',
    specification: 'CS50x3: Computer Science'
  }, {
    title: 'Microsoft',
    specification: 'DEV204x: Programming with C#'
  }, {
    title: 'Codecademy',
    specification: 'Python'
  }, {
    title: 'Codecademy',
    specification: 'Ruby on Rails: Make a Rails App'
  }, {
    title: 'Codecademy',
    specification: 'AngularJS'
  }, {
    title: 'Codecademy',
    specification: 'JavaScript APIs'
  }, {
    title: 'Codecademy/Code School',
    specification: 'JavaScript'
  }, {
    title: 'Code School',
    specification: 'Ruby'
  }, {
    title: 'Code School',
    specification: 'Shaping Up with Angular.js'
  }, {
    title: 'Code School',
    specification: 'Git'
  }, {
    title: 'Code School',
    specification: 'jQuery'
  }, {
    title: 'Udemy',
    specification: 'Beginner Python & Django Programming'
  }, {
    title: 'Udemy',
    specification: 'Python, The Next Level'
  }, {
    title: 'Udemy',
    specification: 'Ruby Programming for Beginners'
  }, {
    title: 'Udemy',
    specification: 'Advanced Ruby: 10 Steps to Mastery'
  }],
  skills: [{
    title: 'HTML5',
    level: 5
  }, {
    title: 'CSS3',
    level: 5
  }, {
    title: 'ES6/7',
    level: 5
  }, {
    title: 'Aurelia/Web Components',
    level: 5
  }, {
    title: 'React/Redux',
    level: 5
  }, {
    title: 'PHP',
    level: 4
  }, {
    title: 'ColdFusion',
    level: 3
  }, {
    title: 'Python',
    level: 3
  }, {
    title: 'Ruby/Rails',
    level: 4
  }, {
    title: 'Node',
    level: 5
  }, {
    title: 'C/C++',
    level: 2
  }, {
    title: 'C#/.NET',
    level: 2
  }, {
    title: 'Java',
    level: 2
  }, {
    title: 'Git/Github',
    level: 5
  }, {
    title: 'Adobe CS',
    level: 5
  }, {
    title: 'LESS/Sass/Stylus',
    level: 5
  }],
  projects: [{
    title: 'ExploreAsheville.com',
    description: 'The second redesign of ExploreAsheville.com.',
    link: 'http://www.exploreasheville.com/',
    image: 'new-exploreasheville.jpg',
    tags: 'HTML5, CSS3, Goatee (Custom JavaScript templating language), Responsive Design'
  }, {
    title: 'Explorers of the Blue Ridge Parkway',
    description: 'An incredibly large project for just one developer/designer.',
    link: 'http://www.exploreasheville.com/blue-ridge-parkway/',
    image: 'explorers-of-the-blue-ridge-parkway.jpg',
    tags: 'HTML5, CSS3, jQuery, Responsive Design, Custom CSS Framework'
  }, {
    title: 'The Science Behind Fall Color',
    description: 'An award-winning project.',
    link: 'http://www.exploreasheville.com/science-behind-fall-color/',
    image: 'science-behind-fall-color.jpg',
    tags: 'HTML5, CSS3, jQuery, Responsive Design, Bootstrap'
  }, {
    title: 'HouserShoes.com',
    description: 'A custom content management system built upon Magento by a 3-person team.',
    link: 'http://www.housershoes.com',
    image: 'houser-shoes.jpg',
    tags: 'PHP, Magento, Custom CMS, Responsive Design'
  }, {
    title: 'Strunk Home Solutions',
    description: 'Branding project: Logo, business cards, letterhead.',
    link: 'http://www.derekmisler.com/view/images/strunk-home-solutions-letterhead.jpg',
    image: 'strunk-home-solutions-logo.jpg',
    tags: 'InDesign, Illustrator'
  }, {
    title: 'NC Saves Energy',
    description: 'Logo and posters for area non-profit.',
    link: 'http://www.derekmisler.com/view/images/nc-saves-energy.jpg',
    image: 'nc-saves-logo.jpg',
    tags: 'InDesign, Illustrator, Photoshop, Old Blueprints'
  }, {
    title: 'Periscope Magazine',
    description: 'This was a magazine a couple of friends and I put together a few years ago. My job was all of the branding and the layout of the first issue, as well as the web development for the others. The first issue is the only PDF and the code for the others can be viewed on Github.',
    link: 'http://www.derekmisler.com/view/images/The-First-Issue.pdf',
    image: 'periscope.jpg',
    tags: 'InDesign, Illustrator, Photography, PHP, HTML5, CSS3'
  }, {
    title: 'Houser Shoes Email Marketing',
    description: 'I was in charge of the email marketing at Houser Shoes. These are just a few examples of the fun ones.',
    link: 'http://www.derekmisler.com/view/images/houser-shoes-email-big.jpg',
    image: 'houser-shoes-email.jpg',
    tags: 'HTML, CSS, Photoshop, Illustrator'
  }]
};
module.exports = resume;

/***/ }),

/***/ "./constants/sections.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sections; });
var sections = [{
  label: 'About',
  location: '#about-derek-misler'
}, {
  label: 'Experience',
  location: '#experience'
}, {
  label: 'Qualifications',
  location: '#qualifications'
}, {
  label: 'Projects',
  location: '#projects'
}, {
  label: 'Contact',
  location: '#contact'
}];
/* unused harmony default export */ var _unused_webpack_default_export = (sections);

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_scss_style_scss__ = __webpack_require__("./assets/scss/style.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_scss_style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__assets_scss_style_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_App__ = __webpack_require__("./components/App.js");
var _jsxFileName = "/Users/derekmisler/Sites/derekmisler.com/pages/index.js";




var Root = function Root() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_App__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Root);

/***/ }),

/***/ "./utils/stringFormat.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fixWidow; });
var fixWidow = function fixWidow() {
  var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return string.replace(/\s([^\s]+)\s*$/, "\xA0$1");
};

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


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

/***/ })

/******/ });
//# sourceMappingURL=index.js.map