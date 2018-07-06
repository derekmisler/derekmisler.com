webpackHotUpdate(5,{

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_styles_style_scss__ = __webpack_require__("./static/styles/style.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_styles_style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__static_styles_style_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_constants_resume__ = __webpack_require__("./pages/utils/constants/resume.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_constants_resume___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__utils_constants_resume__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Nav__ = __webpack_require__("./pages/components/Nav.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Header__ = __webpack_require__("./pages/components/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_About__ = __webpack_require__("./pages/components/About.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Experience__ = __webpack_require__("./pages/components/Experience.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Qualifications__ = __webpack_require__("./pages/components/Qualifications.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Projects__ = __webpack_require__("./pages/components/Projects.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_Footer__ = __webpack_require__("./pages/components/Footer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_Analytics__ = __webpack_require__("./pages/components/Analytics.js");
var _jsxFileName = "/Users/derekmisler/Sites/derekmisler.com/pages/index.js";











var App = function App() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_Analytics__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Header__["a" /* default */], {
    profile: __WEBPACK_IMPORTED_MODULE_2__utils_constants_resume___default.a.profile,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Nav__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_About__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_Experience__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_Qualifications__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_Projects__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_Footer__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (App);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/utils/constants/resume.js":
/***/ (function(module, exports, __webpack_require__) {

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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/utils/constants/resume")
  

/***/ })

})
//# sourceMappingURL=5.9aca95c32cf940e00f86.hot-update.js.map