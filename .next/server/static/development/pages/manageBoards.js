module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SideNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SideNav */ "./components/SideNav.js");
/* harmony import */ var _node_modules_next_dist_next_server_lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/next/dist/next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");
/* harmony import */ var _node_modules_next_dist_next_server_lib_utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_next_server_lib_utils__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _contexts_userContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contexts/userContext */ "./contexts/userContext.js");
/* harmony import */ var _contexts_orgContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contexts/orgContext */ "./contexts/orgContext.js");
var _jsxFileName = "/Users/spencerford/Documents/DEVyall/PersonalProjects/CorporateBingoWeb/components/Layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


 // context imports





const Layout = props => {
  const {
    user,
    storeUser,
    logout
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_userContext__WEBPACK_IMPORTED_MODULE_4__["UserContext"]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (!user._id && localStorage.getItem('bingo_user') && localStorage.getItem('bingo_token')) {
      storeUser(JSON.parse(localStorage.getItem('bingo_user')));
    } else if (!localStorage.getItem('bingo_token') || !user) {
      logout();
    }
  }, [user]);
  return __jsx("div", {
    id: "layout",
    className: "jsx-2546284142",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx(_SideNav__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-2546284142" + " " + 'child-component-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, props.children), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2546284142",
    __self: undefined
  }, "#layout.jsx-2546284142{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:100vh;width:100vw;font:roboto;}.child-component-container.jsx-2546284142{padding:20px;width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zcGVuY2VyZm9yZC9Eb2N1bWVudHMvREVWeWFsbC9QZXJzb25hbFByb2plY3RzL0NvcnBvcmF0ZUJpbmdvV2ViL2NvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRCaUIsQUFHc0MsQUFPQSxhQUNGLFdBQ2Ysa0RBUnVCLHFFQUNOLGFBQ0QsWUFDQSxZQUNoQiIsImZpbGUiOiIvVXNlcnMvc3BlbmNlcmZvcmQvRG9jdW1lbnRzL0RFVnlhbGwvUGVyc29uYWxQcm9qZWN0cy9Db3Jwb3JhdGVCaW5nb1dlYi9jb21wb25lbnRzL0xheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNpZGVOYXYgZnJvbSAnLi9TaWRlTmF2JztcbmltcG9ydCB7IGxvYWRHZXRJbml0aWFsUHJvcHMgfSBmcm9tICcuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscyc7XG5cbi8vIGNvbnRleHQgaW1wb3J0c1xuaW1wb3J0IFVzZXJDb250ZXh0UHJvdmlkZXIgZnJvbSAnLi4vY29udGV4dHMvdXNlckNvbnRleHQnO1xuaW1wb3J0IE9yZ0NvbnRleHRQcm92aWRlciBmcm9tICcuLi9jb250ZXh0cy9vcmdDb250ZXh0JztcbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dHMvdXNlckNvbnRleHQnO1xuXG5jb25zdCBMYXlvdXQgPSAocHJvcHMgPT4ge1xuXG4gICAgY29uc3QgeyB1c2VyLCBzdG9yZVVzZXIsIGxvZ291dCB9ID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZighdXNlci5faWQgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2JpbmdvX3VzZXInKSAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYmluZ29fdG9rZW4nKSl7XG4gICAgICAgICAgICBzdG9yZVVzZXIoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYmluZ29fdXNlcicpKSk7XG4gICAgICAgIH0gZWxzZSBpZighbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2JpbmdvX3Rva2VuJykgfHwgIXVzZXIpe1xuICAgICAgICAgICAgbG9nb3V0KCk7XG4gICAgICAgIH1cbiAgICB9LFt1c2VyXSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgaWQ9J2xheW91dCc+XG4gICAgICAgICAgICA8U2lkZU5hdiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NoaWxkLWNvbXBvbmVudC1jb250YWluZXInPlxuICAgICAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgICAgICAjbGF5b3V0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQ6IHJvYm90bztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuY2hpbGQtY29tcG9uZW50LWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDsiXX0= */\n/*@ sourceURL=/Users/spencerford/Documents/DEVyall/PersonalProjects/CorporateBingoWeb/components/Layout.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/SideNav.js":
/*!*******************************!*\
  !*** ./components/SideNav.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_masterStyles_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/masterStyles.js */ "./styles/masterStyles.js");
/* harmony import */ var _contexts_userContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contexts/userContext */ "./contexts/userContext.js");
var _jsxFileName = "/Users/spencerford/Documents/DEVyall/PersonalProjects/CorporateBingoWeb/components/SideNav.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



 // context imports



const SideNav = props => {
  const {
    user,
    storeUser,
    logout
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_userContext__WEBPACK_IMPORTED_MODULE_5__["UserContext"]);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

  const handleLogoutClick = () => {
    logout();
  };

  if (!user._id) {
    return __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: undefined
    }, "LOADING...");
  }

  return __jsx("div", {
    id: "sidenav",
    style: {
      borderRight: `2px solid ${_styles_masterStyles_js__WEBPACK_IMPORTED_MODULE_4__["COLORS"].primary}`
    },
    className: "jsx-2365988109",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, __jsx("img", {
    alt: "Bingo Builder",
    src: '../static/bingoBuilderLogo.png',
    style: {
      width: '90%',
      margin: '10px 0 10px 0'
    },
    className: "jsx-2365988109",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/joinGame",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, __jsx("a", {
    style: {
      color: _styles_masterStyles_js__WEBPACK_IMPORTED_MODULE_4__["COLORS"].primary
    },
    className: "jsx-2365988109" + " " + 'sidenavLink',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, "JOIN GAME")), user && user.role.level < 3 && __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/manageBoards",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, __jsx("a", {
    style: {
      color: _styles_masterStyles_js__WEBPACK_IMPORTED_MODULE_4__["COLORS"].primary
    },
    className: "jsx-2365988109" + " " + 'sidenavLink',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, "MANAGE BOARDS")), user && user.role.level < 3 && __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/usersAndOrg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, __jsx("a", {
    style: {
      color: _styles_masterStyles_js__WEBPACK_IMPORTED_MODULE_4__["COLORS"].primary
    },
    className: "jsx-2365988109" + " " + 'sidenavLink',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, "USERS & ORG")), __jsx("a", {
    style: {
      color: _styles_masterStyles_js__WEBPACK_IMPORTED_MODULE_4__["COLORS"].primary,
      cursor: 'pointer'
    },
    onClick: () => handleLogoutClick(),
    className: "jsx-2365988109" + " " + 'sidenavLink',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, "LOGOUT"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2365988109",
    __self: undefined
  }, "#sidenav.jsx-2365988109{width:20%;max-width:300px;min-width:200px;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;box-shadow:2px 0 5px -2px #999;background-color:white;font:roboto;}.sidenavLink.jsx-2365988109{width:90%;text-align:left;margin:20px 0 0 0;-webkit-text-decoration:none;text-decoration:none;font-size:20px;font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zcGVuY2VyZm9yZC9Eb2N1bWVudHMvREVWeWFsbC9QZXJzb25hbFByb2plY3RzL0NvcnBvcmF0ZUJpbmdvV2ViL2NvbXBvbmVudHMvU2lkZU5hdi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQ2lCLEFBR21DLEFBWUEsVUFYTSxBQVlBLGdCQVhBLEFBWUUsZ0JBWE4sRUFZUyxVQVhSLHdDQVlFLGVBQ0UsaUJBQ3JCLEVBYjBCLDhFQUNILDZGQUNZLCtCQUNSLHVCQUNYLFlBQ2hCIiwiZmlsZSI6Ii9Vc2Vycy9zcGVuY2VyZm9yZC9Eb2N1bWVudHMvREVWeWFsbC9QZXJzb25hbFByb2plY3RzL0NvcnBvcmF0ZUJpbmdvV2ViL2NvbXBvbmVudHMvU2lkZU5hdi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmltcG9ydCB7IENPTE9SUyB9IGZyb20gJy4uL3N0eWxlcy9tYXN0ZXJTdHlsZXMuanMnO1xuXG4vLyBjb250ZXh0IGltcG9ydHNcbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dHMvdXNlckNvbnRleHQnO1xuXG5jb25zdCBTaWRlTmF2ID0gKHByb3BzKSA9PiB7XG5cbiAgICBjb25zdCB7IHVzZXIsIHN0b3JlVXNlciwgbG9nb3V0IH0gPSB1c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcblxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cbiAgICBjb25zdCBoYW5kbGVMb2dvdXRDbGljayA9ICgpID0+IHtcbiAgICAgICAgbG9nb3V0KCk7XG4gICAgfVxuXG4gICAgaWYoIXVzZXIuX2lkKXtcbiAgICAgICAgcmV0dXJuIDxzcGFuPkxPQURJTkcuLi48L3NwYW4+XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBpZD0nc2lkZW5hdicgc3R5bGU9e3sgYm9yZGVyUmlnaHQ6IGAycHggc29saWQgJHtDT0xPUlMucHJpbWFyeX1gIH19PlxuICAgICAgICAgICAgPGltZyBcbiAgICAgICAgICAgICAgICBhbHQ9J0JpbmdvIEJ1aWxkZXInIFxuICAgICAgICAgICAgICAgIHNyYz17Jy4uL3N0YXRpYy9iaW5nb0J1aWxkZXJMb2dvLnBuZyd9IFxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnOTAlJywgbWFyZ2luOiAnMTBweCAwIDEwcHggMCcgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8TGluayBocmVmPScvam9pbkdhbWUnPjxhIGNsYXNzTmFtZT0nc2lkZW5hdkxpbmsnIHN0eWxlPXt7Y29sb3I6IENPTE9SUy5wcmltYXJ5fX0+Sk9JTiBHQU1FPC9hPjwvTGluaz5cbiAgICAgICAgICAgIHt1c2VyICYmIHVzZXIucm9sZS5sZXZlbCA8IDMgJiYgPExpbmsgaHJlZj0nL21hbmFnZUJvYXJkcyc+PGEgY2xhc3NOYW1lPSdzaWRlbmF2TGluaycgc3R5bGU9e3tjb2xvcjogQ09MT1JTLnByaW1hcnl9fT5NQU5BR0UgQk9BUkRTPC9hPjwvTGluaz59XG4gICAgICAgICAgICB7dXNlciAmJiB1c2VyLnJvbGUubGV2ZWwgPCAzICYmIDxMaW5rIGhyZWY9Jy91c2Vyc0FuZE9yZyc+PGEgY2xhc3NOYW1lPSdzaWRlbmF2TGluaycgc3R5bGU9e3tjb2xvcjogQ09MT1JTLnByaW1hcnl9fT5VU0VSUyAmIE9SRzwvYT48L0xpbms+fVxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdzaWRlbmF2TGluaycgc3R5bGU9e3tjb2xvcjogQ09MT1JTLnByaW1hcnksIGN1cnNvcjogJ3BvaW50ZXInfX0gb25DbGljaz17KCkgPT4gaGFuZGxlTG9nb3V0Q2xpY2soKX0+TE9HT1VUPC9hPlxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgICAgICAjc2lkZW5hdiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMjAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAycHggMCA1cHggLTJweCAjOTk5O1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250OiByb2JvdG87XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnNpZGVuYXZMaW5rIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDAgMCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuXG5cbmV4cG9ydCBkZWZhdWx0IFNpZGVOYXY7Il19 */\n/*@ sourceURL=/Users/spencerford/Documents/DEVyall/PersonalProjects/CorporateBingoWeb/components/SideNav.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (SideNav);

/***/ }),

/***/ "./contexts/manageBoardsContext.js":
/*!*****************************************!*\
  !*** ./contexts/manageBoardsContext.js ***!
  \*****************************************/
/*! exports provided: ManageBoardsContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageBoardsContext", function() { return ManageBoardsContext; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "/Users/spencerford/Documents/DEVyall/PersonalProjects/CorporateBingoWeb/contexts/manageBoardsContext.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


const ManageBoardsContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["createContext"])();

const ManageBoardsContextProvider = props => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const {
    0: contextBoard,
    1: setContextBoard
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({});
  const {
    0: stuffToSave,
    1: setStuffToSave
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    console.log('there\'s stuff to save!');
  }, [stuffToSave]);

  const getBoard = async boardID => {
    if (boardID && contextBoard._id === boardID) {
      console.log('go with same board', contextBoard, boardID);
      return;
    }

    try {
      const request = await fetch(`http://localhost:8000/boards/${boardID}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('bingo_token')}`
        }
      });
      const board = await request.json();
      setContextBoard(board);
    } catch (err) {
      alert(err);
    }
  };

  const newBoard = async orgID => {
    try {
      const request = await fetch(`http://localhost:8000/boards`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('bingo_token')}`
        },
        body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()({
          orgID: orgID
        })
      });
      const boardID = await request.json();
      router.push(`/manageBoards/${boardID}`);
    } catch (err) {
      alert(err);
    }
  };

  const saveBoard = async () => {
    console.log('SAVING');

    try {
      const request = await fetch(`http://localhost:8000/boards/${contextBoard._id}`, {
        method: 'PATCH',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('bingo_token')}`
        },
        body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, contextBoard))
      });
      const success = await request.json();
      console.log({
        success
      });

      if (success) {
        setStuffToSave(false);
      } else {
        alert('There was a problem saving your board... please try again later!');
      }
    } catch (err) {
      alert(err);
    }
  };

  return __jsx(ManageBoardsContext.Provider, {
    value: {
      contextBoard,
      updateBoard: setContextBoard,
      getBoard,
      newBoard,
      setStuffToSave,
      stuffToSave,
      saveBoard
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (ManageBoardsContextProvider);

/***/ }),

/***/ "./contexts/orgContext.js":
/*!********************************!*\
  !*** ./contexts/orgContext.js ***!
  \********************************/
/*! exports provided: OrgContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrgContext", function() { return OrgContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/spencerford/Documents/DEVyall/PersonalProjects/CorporateBingoWeb/contexts/orgContext.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const OrgContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();

const OrgContextProvider = props => {
  const {
    0: org,
    1: setOrg
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});

  const getOrg = async orgID => {
    console.log('in get org', orgID);

    try {
      const request = await fetch(`http://localhost:8000/orgs/${orgID}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('bingo_token')}`
        }
      });
      const org = await request.json();
      console.log({
        org
      });
      setOrg(org);
    } catch (err) {
      alert(err);
    }
  };

  return __jsx(OrgContext.Provider, {
    value: {
      org,
      updateOrg: setOrg,
      getOrg: getOrg
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (OrgContextProvider);

/***/ }),

/***/ "./contexts/userContext.js":
/*!*********************************!*\
  !*** ./contexts/userContext.js ***!
  \*********************************/
/*! exports provided: UserContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserContext", function() { return UserContext; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/Users/spencerford/Documents/DEVyall/PersonalProjects/CorporateBingoWeb/contexts/userContext.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const UserContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])();

const UserContextProvider = props => {
  const {
    0: user,
    1: setUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({});
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

  const storeUserAndToken = user => {
    if (!user.token && !localStorage.getItem('bingo_token')) {
      alert('Something went wrong logging you in, please try again!');
      return;
    }

    if (localStorage) {
      if (user.token) {
        localStorage.setItem('bingo_token', user.token);
      }

      localStorage.setItem('bingo_user', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()({
        userName: user.userName,
        email: user.email,
        role: user.role,
        _id: user._id
      }));
      setUser({
        userName: user.userName,
        email: user.email,
        role: user.role,
        _id: user._id
      });
    } else {
      alert('Something went wrong logging you in, please try again!');
      return;
    }
  };

  const logout = () => {
    localStorage.clear();
    setUser({});
    router.push('/login');
  };

  return __jsx(UserContext.Provider, {
    value: {
      user,
      updateBoard: setUser,
      storeUser: storeUserAndToken,
      logout: logout
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (UserContextProvider);

/***/ }),

/***/ "./dummy/dummy.js":
/*!************************!*\
  !*** ./dummy/dummy.js ***!
  \************************/
/*! exports provided: dummyBoard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dummyBoard", function() { return dummyBoard; });
const tasks = ['click', 'code', 'qrCode', //maybe....
'text', 'picture', 'video', 'location'];
const dummyBoard = {
  id: '10er8vhj20',
  title: 'Orientation',
  description: 'A mandatory (but fun!) orientation for everyone!',
  org: 'Spenco Systems',
  randomize: false,
  timeLimit: null,
  numSquares: 25,
  accessCode: 'asdfasdf',
  mustBeDoneInOrder: false,
  groups: {
    useTeams: true,
    teams: [{
      id: 'team1',
      name: 'Razor Sharks',
      accessCode: 'razorsRule'
    }, {
      id: 'team2',
      name: 'Farmsville Warriors',
      accessCode: 'warriors 4 ever'
    }]
  },
  freeSquareIcon: 'https://i.pinimg.com/originals/a2/e7/0a/a2e70acaae2c00e8d090961cf5d1f4d8.jpg',
  incompleteColor: 'ABCDEF',
  completeColor: 'FEDCBA',
  boardLocation: {
    lat: 1000000,
    long: 1000000
  },
  rewards: [{
    id: 1,
    //-blackout = do EVERY task, -bingo = upon first bingo
    position: 'wholeBoard-blackout',
    img: 'https://i.pinimg.com/originals/a2/e7/0a/a2e70acaae2c00e8d090961cf5d1f4d8.jpg',
    title: 'HYENA',
    howToEarn: "Complete every task on the board!",
    description: 'The freakin hyena whole board!',
    earned: false
  }, {
    id: 2,
    position: 'diagonalUpRight',
    img: 'https://i.pinimg.com/originals/a2/e7/0a/a2e70acaae2c00e8d090961cf5d1f4d8.jpg',
    title: 'HYENA',
    howToEarn: "Complete every task in the diagonal from the bottom left square to the top right.",
    description: 'The freakin hyena diagonal UpdRight!',
    earned: false
  }, {
    id: 3,
    position: 'diagonalDownRight',
    img: 'https://i.pinimg.com/originals/a2/e7/0a/a2e70acaae2c00e8d090961cf5d1f4d8.jpg',
    title: 'HYENA',
    howToEarn: "Complete every task in the diagonal from the top left square to the bottom right.",
    description: 'The freakin hyena diagonal Down Right!',
    earned: false
  }, {
    id: 4,
    position: 'column1',
    img: 'https://i.pinimg.com/originals/a2/e7/0a/a2e70acaae2c00e8d090961cf5d1f4d8.jpg',
    title: 'HYENA',
    howToEarn: "Complete every task in column 1",
    description: 'The freakin hyena column1!',
    earned: false
  }, {
    id: 5,
    position: 'column2',
    img: 'https://i.pinimg.com/originals/a2/e7/0a/a2e70acaae2c00e8d090961cf5d1f4d8.jpg',
    title: 'HYENA',
    howToEarn: "Complete every task in column 2",
    description: 'The freakin hyena column2!',
    earned: false
  }, {
    id: 6,
    position: 'column3',
    img: 'https://i.pinimg.com/originals/a2/e7/0a/a2e70acaae2c00e8d090961cf5d1f4d8.jpg',
    title: 'HYENA',
    howToEarn: "Complete every task in column 3",
    description: 'The freakin hyena column3!',
    earned: false
  }, {
    id: 7,
    position: 'column4',
    img: 'https://i.pinimg.com/originals/a2/e7/0a/a2e70acaae2c00e8d090961cf5d1f4d8.jpg',
    title: 'HYENA',
    howToEarn: "Complete every task in column 4",
    description: 'The freakin hyena column4!',
    earned: false
  }, {
    id: 8,
    position: 'column5',
    img: '',
    title: '',
    howToEarn: "Complete every task in column 5",
    description: '',
    earned: false
  }, {
    id: 9,
    position: 'row1',
    img: 'https://i.pinimg.com/originals/a2/e7/0a/a2e70acaae2c00e8d090961cf5d1f4d8.jpg',
    title: 'HYENA',
    howToEarn: "Complete every task in row 1",
    description: 'The freakin hyena row1!',
    earned: false
  }, {
    id: 10,
    position: 'row2',
    img: 'https://i.pinimg.com/originals/a2/e7/0a/a2e70acaae2c00e8d090961cf5d1f4d8.jpg',
    title: 'HYENA',
    howToEarn: "Complete every task in row 2",
    description: 'The freakin hyena row2!',
    earned: false
  }, {
    id: 11,
    position: 'row3',
    img: 'https://i.pinimg.com/originals/a2/e7/0a/a2e70acaae2c00e8d090961cf5d1f4d8.jpg',
    title: 'HYENA',
    howToEarn: "Complete every task in row 3",
    description: 'The freakin hyena row3!',
    earned: false
  }, {
    id: 12,
    position: 'row4',
    img: 'https://i.pinimg.com/originals/a2/e7/0a/a2e70acaae2c00e8d090961cf5d1f4d8.jpg',
    title: 'HYENA',
    howToEarn: "Complete every task in row 4",
    description: 'The freakin hyena row4!',
    earned: false
  }, {
    id: 13,
    position: 'row5',
    img: '',
    title: '',
    howToEarn: "Complete every task in row 5",
    description: '',
    earned: false
  }],
  squares: [{
    id: 1,
    freeSquare: false,
    squareText: 'Meet Jenny',
    description: 'Find Jenny in the library, ask her for a code!',
    task: {
      type: 'code',
      answer: ''
    },
    complete: false,
    location: null,
    hint: '',
    codes: {
      useOnce: false,
      codeList: []
    }
  }, {
    id: 2,
    freeSquare: false,
    squareText: 'Check this box',
    description: 'Flip this switch, that\'s it!!',
    task: {
      type: 'click',
      answer: false
    },
    complete: false,
    location: {
      to: {
        lat: 0,
        lng: 0
      },
      within: 100
    },
    hint: '',
    codes: {
      useOnce: false,
      codeList: []
    }
  }, {
    id: 3,
    freeSquare: true,
    squareText: '',
    description: '',
    task: {
      type: '',
      answer: ''
    },
    complete: true,
    location: null,
    hint: '',
    codes: {
      useOnce: false,
      codeList: []
    }
  }, {
    id: 4,
    freeSquare: false,
    squareText: 'Rock selfie',
    description: 'Get a selfie with a rock!',
    task: {
      type: 'picture',
      answer: ''
    },
    complete: false,
    location: null,
    hint: '',
    codes: {
      useOnce: false,
      codeList: []
    }
  }, {
    id: 5,
    freeSquare: false,
    squareText: 'Dirt video',
    description: 'Get a video of you with dirt!',
    task: {
      type: 'video',
      answer: ''
    },
    complete: false,
    location: null,
    hint: '',
    codes: {
      useOnce: false,
      codeList: []
    }
  }, {
    id: 6,
    freeSquare: false,
    squareText: 'Septic tank closeness',
    description: 'Get within 100 meters of the company septic tank!',
    task: {
      type: 'location',
      answer: false
    },
    complete: false,
    location: {
      to: {
        lat: 0,
        lng: 0
      },
      within: 100
    },
    hint: '',
    codes: {
      useOnce: false,
      codeList: []
    }
  }, {
    id: 7,
    freeSquare: false,
    squareText: 'Meet Heidi',
    description: 'Find Heidi in the library, ask her for a code!',
    task: {
      type: 'code',
      answer: ''
    },
    complete: false,
    location: null,
    hint: '',
    codes: {
      useOnce: false,
      codeList: []
    }
  }, {
    id: 8,
    freeSquare: false,
    squareText: 'Scan QR Code',
    description: 'Find the QR code by the manhole and scan it!',
    task: {
      type: 'qrCode',
      answer: ''
    },
    complete: false,
    location: null,
    hint: 'We put the code under Helga\'s chair'
  }, {
    id: 9,
    freeSquare: false,
    squareText: 'Meet Helga',
    description: 'Find Helga in the library, ask her for a code!',
    task: {
      type: 'code',
      answer: ''
    },
    complete: false,
    location: null,
    hint: '',
    codes: {
      useOnce: false,
      codeList: []
    }
  }, {
    id: 10,
    freeSquare: false,
    squareText: 'Meet Helga',
    description: 'Find Helga in the library, ask her for a code!',
    task: {
      type: 'code',
      answer: ''
    },
    complete: false,
    location: null,
    hint: '',
    codes: {
      useOnce: false,
      codeList: []
    }
  }, {
    id: 11,
    freeSquare: false,
    squareText: 'Meet Helga',
    description: 'Find Helga in the library, ask her for a code!',
    task: {
      type: 'code',
      answer: ''
    },
    complete: false,
    location: null,
    hint: '',
    codes: {
      useOnce: false,
      codeList: []
    }
  }, {
    id: 12,
    freeSquare: false,
    squareText: 'Meet Helga',
    description: 'Find Helga in the library, ask her for a code!',
    task: {
      type: 'code',
      answer: ''
    },
    complete: false,
    location: null,
    hint: '',
    codes: {
      useOnce: false,
      codeList: []
    }
  }, {
    id: 13,
    freeSquare: false,
    squareText: 'Meet Helga',
    description: 'Find Helga in the library, ask her for a code!',
    task: {
      type: 'code',
      answer: ''
    },
    complete: false,
    location: null,
    hint: '',
    codes: {
      useOnce: false,
      codeList: []
    }
  }, {
    id: 14,
    freeSquare: false,
    squareText: 'Meet Tiffany',
    description: 'Find Tiffany in the library, ask her for a code!',
    task: {
      type: 'code',
      answer: ''
    },
    complete: false,
    location: null,
    hint: '',
    codes: {
      useOnce: false,
      codeList: []
    }
  }, {
    id: 15,
    freeSquare: false,
    squareText: 'Meet Beth',
    description: 'Find Beth in the library, ask her for a code!',
    task: {
      type: 'code',
      answer: ''
    },
    complete: false,
    location: null,
    hint: '',
    codes: {
      useOnce: false,
      codeList: []
    }
  }, {
    id: 16,
    freeSquare: false,
    squareText: 'Enter some text',
    description: 'Enter some text so we know you did it!',
    task: {
      type: 'text',
      answer: ''
    },
    complete: false,
    location: null,
    hint: '',
    codes: {
      useOnce: false,
      codeList: []
    }
  }, {
    id: 17,
    freeSquare: true,
    squareText: '',
    description: '',
    task: {
      type: '',
      answer: ''
    },
    complete: true,
    location: null,
    hint: '',
    codes: {
      useOnce: false,
      codeList: []
    }
  }, {
    id: 18,
    freeSquare: true,
    squareText: '',
    description: '',
    task: {
      type: '',
      answer: ''
    },
    complete: true,
    location: null,
    hint: '',
    codes: {
      useOnce: false,
      codeList: []
    }
  }, {
    id: 19,
    freeSquare: true,
    squareText: '',
    description: '',
    task: {
      type: '',
      answer: ''
    },
    complete: true,
    location: null,
    hint: '',
    codes: {
      useOnce: false,
      codeList: []
    }
  }, {
    id: 20,
    freeSquare: true,
    squareText: '',
    description: '',
    task: {
      type: '',
      answer: ''
    },
    complete: true,
    location: null,
    hint: '',
    codes: {
      useOnce: false,
      codeList: []
    }
  }, {
    id: 21,
    freeSquare: true,
    squareText: '',
    description: '',
    task: {
      type: '',
      answer: ''
    },
    complete: true,
    location: null,
    hint: '',
    codes: {
      useOnce: false,
      codeList: []
    }
  }, {
    id: 22,
    freeSquare: true,
    squareText: '',
    description: '',
    task: {
      type: '',
      answer: ''
    },
    complete: true,
    location: null,
    hint: '',
    codes: {
      useOnce: false,
      codeList: []
    }
  }, {
    id: 23,
    freeSquare: true,
    squareText: '',
    description: '',
    task: {
      type: '',
      answer: ''
    },
    complete: true,
    location: null,
    hint: '',
    codes: {
      useOnce: false,
      codeList: []
    }
  }, {
    id: 24,
    freeSquare: true,
    squareText: '',
    description: '',
    task: {
      type: '',
      answer: ''
    },
    complete: true,
    location: null,
    hint: '',
    codes: {
      useOnce: false,
      codeList: []
    }
  }, {
    id: 25,
    freeSquare: true,
    squareText: '',
    description: '',
    task: {
      type: '',
      answer: ''
    },
    complete: true,
    location: null,
    hint: '',
    codes: {
      useOnce: false,
      codeList: []
    }
  }]
};

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! ../next-server/lib/router/rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");
/* global __NEXT_DATA__ */


function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new _map.default();
const IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const {
      pathname
    } = window.location;
    const {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    const href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

    };

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    const router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context.router
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');
  path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const rewrite_url_for_export_1 = __webpack_require__(/*! ./rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state.options && e.state.options.fromExternal) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.nextExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign({}, data, {
      Component
    });

    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new _Promise((resolve, reject) => {
      // marking route changes as a navigation start entry
      if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const rr = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(rr)(asPathname);

        if (!routeMatch) {
          console.error('The provided `as` value is incompatible with the `href` value. This is invalid. https://err.sh/zeit/next.js/incompatible-href-as');
          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign({}, routeInfo, {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return new _Promise((resolve, reject) => {
        // we provide AppTree later so this needs to be `any`
        this.getInitialProps(Component, {
          pathname,
          query,
          asPath: as
        }).then(props => {
          routeInfo.props = props;
          this.components[route] = routeInfo;
          resolve(routeInfo);
        }, reject);
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) return; // @ts-ignore pathname is always defined

      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  async getInitialProps(Component, ctx) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    const {
      Component: App
    } = this.components['/_app'];
    let props;

    if ( // @ts-ignore workaround for dead-code elimination
    (self.__HAS_SPR || "development" !== 'production') && Component.__NEXT_SPR) {
      let status;
      const url = ctx.asPath ? ctx.asPath : url_1.format({
        pathname: ctx.pathname,
        query: ctx.query
      });
      props = await fetch(url, {
        headers: {
          'content-type': 'application/json'
        }
      }).then(res => {
        if (!res.ok) {
          status = res.status;
          throw new Error('failed to load prerender data');
        }

        return res.json();
      }).then(pageProps => {
        return {
          pageProps
        };
      }).catch(err => {
        return {
          error: err.message,
          status
        };
      });
    } else {
      const AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      props = await utils_1.loadGetInitialProps(App, {
        AppTree,
        Component,
        router: this,
        ctx
      });
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    if (cancelled) {
      const err = new Error('Loading initial props cancelled');
      err.cancelled = true;
      throw err;
    }

    return props;
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

Router.events = mitt_1.default();
exports.default = Router;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^\/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const m = routeMatch[groups[slugName]];

      if (m !== undefined) {
        params[slugName] = decodeURIComponent(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^\/]+?)\\\](?=\/|$)/g, (_, $1) => (groups[$1 // Un-escape key
  .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1')] = groupIndex++, '/([^/]+?)'));
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  return (...args) => {
    if (!used) {
      used = true;
      fn.apply(this, args);
    }
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(Component, ctx) {
  if (true) {
    if (Component.prototype && Component.prototype.getInitialProps) {
      const message = `"${getDisplayName(Component)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!Component.getInitialProps) {
    return {};
  }

  const props = await Component.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(Component)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (_Object$keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(Component)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic prerendering. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      _Object$keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/manageBoards/index.js":
/*!*************************************!*\
  !*** ./pages/manageBoards/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_manageBoardsReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../reducers/manageBoardsReducer */ "./reducers/manageBoardsReducer.js");
/* harmony import */ var _styles_masterStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/masterStyles */ "./styles/masterStyles.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Table */ "@material-ui/core/Table");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TableBody */ "@material-ui/core/TableBody");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/TableCell */ "@material-ui/core/TableCell");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/TableHead */ "@material-ui/core/TableHead");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/TableRow */ "@material-ui/core/TableRow");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _contexts_orgContext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../contexts/orgContext */ "./contexts/orgContext.js");
/* harmony import */ var _contexts_manageBoardsContext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../contexts/manageBoardsContext */ "./contexts/manageBoardsContext.js");
/* harmony import */ var _contexts_userContext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../contexts/userContext */ "./contexts/userContext.js");
/* harmony import */ var _node_modules_next_dist_next_server_lib_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../node_modules/next/dist/next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");
/* harmony import */ var _node_modules_next_dist_next_server_lib_utils__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_next_server_lib_utils__WEBPACK_IMPORTED_MODULE_15__);

var _jsxFileName = "/Users/spencerford/Documents/DEVyall/PersonalProjects/CorporateBingoWeb/pages/manageBoards/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

 // reducer imports

 // Style imports

 // component imports


 // Material UI





 // context imports






const ManageBoardsHome = props => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const {
    org,
    getOrg
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_orgContext__WEBPACK_IMPORTED_MODULE_12__["OrgContext"]);
  const {
    newBoard
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_manageBoardsContext__WEBPACK_IMPORTED_MODULE_13__["ManageBoardsContext"]);
  const {
    user,
    storeUser,
    logout
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_userContext__WEBPACK_IMPORTED_MODULE_14__["UserContext"]);
  const {
    0: searchText,
    1: setSearchText
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: boards,
    1: setBoards
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(org.boards || []);

  const searchForBoard = () => {
    setSearchText('');
    setBoards(dummyBoards);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (!user) {
      if (localStorage.getItem('bingo_user')) {
        storeUser(JSON.parse(localStorage.getItem('bingo_user')));
      } else {
        logout();
      }
    }

    if (!org._id && user && user.role && !user.role.org) {
      router.push('/home');
    } else if (!org._id && user && user.role && user.role.org) {
      getOrg(user.role.org);
    }

    if (org && org.boards && org.boards.length !== boards.length) {
      setBoards(org.boards);
    }
  }, [org, user]);

  const generateBoardRows = () => {
    if (boards.length) {
      return boards.map((board, index) => {
        return __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
          key: board._id,
          href: `manageBoards/[boardID]`,
          as: `manageBoards/${board._id}`,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          },
          __self: undefined
        }, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_11___default.a, {
          style: {
            cursor: 'pointer'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          },
          __self: undefined
        }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          },
          __self: undefined
        }, board.title), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          },
          __self: undefined
        }, board.numPlayers || 0), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          },
          __self: undefined
        }, board.numTeams || 0), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          },
          __self: undefined
        }, board.numSquare)));
      });
    }

    return __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_11___default.a, {
      style: {
        width: '100%'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: undefined
    }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: undefined
    }, "No boards yet... click NEW BOARD to make one!"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: undefined
    }), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: undefined
    }), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: undefined
    }));
  };

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }, __jsx("div", {
    style: styles.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }, __jsx("div", {
    style: _styles_masterStyles__WEBPACK_IMPORTED_MODULE_4__["MASTER"].pageTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  }, "MANAGE BOARDS"), __jsx("div", {
    style: {
      display: 'flex'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }, __jsx("input", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _styles_masterStyles__WEBPACK_IMPORTED_MODULE_4__["MASTER"].wideRoundInput, {
      maxWidth: 300
    }),
    value: searchText,
    onChange: e => setSearchText(e.target.value),
    placeholder: 'Search by name or access code ',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }), __jsx("button", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _styles_masterStyles__WEBPACK_IMPORTED_MODULE_4__["MASTER"].wideRoundBtn, {
      width: 100
    }),
    onClick: () => searchForBoard(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }, __jsx("div", {
    style: _styles_masterStyles__WEBPACK_IMPORTED_MODULE_4__["MASTER"].wideRoundBtnText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: undefined
  }, "SEARCH"))), __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_7___default.a, {
    style: {
      width: "100%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: undefined
  }, __jsx(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: undefined
  }, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_11___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: undefined
  }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: undefined
  }, "NAME"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: undefined
  }, "PLAYERS"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  }, "TEAMS"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: undefined
  }, "TASKS COMPLETED"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: undefined
  }, "REWARDS EARNED"))), __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: undefined
  }, generateBoardRows())), __jsx("button", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _styles_masterStyles__WEBPACK_IMPORTED_MODULE_4__["MASTER"].wideRoundBtn, {
      width: 150,
      position: 'absolute',
      bottom: 30,
      right: 20,
      height: 45
    }),
    onClick: () => newBoard(org._id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: undefined
  }, __jsx("div", {
    style: _styles_masterStyles__WEBPACK_IMPORTED_MODULE_4__["MASTER"].wideRoundBtnText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: undefined
  }, "NEW BOARD"))));
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (ManageBoardsHome);

/***/ }),

/***/ "./reducers/manageBoardsReducer.js":
/*!*****************************************!*\
  !*** ./reducers/manageBoardsReducer.js ***!
  \*****************************************/
/*! exports provided: manageBoardsReducerState, manageBoardsReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "manageBoardsReducerState", function() { return manageBoardsReducerState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "manageBoardsReducer", function() { return manageBoardsReducer; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _dummy_dummy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dummy/dummy */ "./dummy/dummy.js");


const manageBoardsReducerState = {
  board: []
};
function manageBoardsReducer(state, action) {
  switch (action.type) {
    case 'GET_BOARD':
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        board: _dummy_dummy__WEBPACK_IMPORTED_MODULE_1__["dummyBoard"]
      });

    case 'UPDATE_BOARD_SETTINGS':
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        board: action.payload
      });

    default:
      throw new Error();
  }
}

/***/ }),

/***/ "./styles/masterStyles.js":
/*!********************************!*\
  !*** ./styles/masterStyles.js ***!
  \********************************/
/*! exports provided: COLORS, MASTER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLORS", function() { return COLORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MASTER", function() { return MASTER; });
const COLORS = {
  // primary: '#ABCDEF',
  primary: '#4A94DE',
  secondary: '#FEDCBA',
  green: '#5ac776'
};
const MASTER = {
  wideRoundBtn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    width: '90%',
    borderRadius: 50,
    height: 35,
    marginTop: 20,
    fontSize: 16,
    outline: 'none',
    cursor: 'pointer'
  },
  wideRoundBtnText: {
    color: 'white'
  },
  wideRoundInput: {
    marginVertical: 15,
    borderColor: COLORS.primary,
    fontSize: 15,
    borderWidth: 1,
    width: 'calc(90% - 20px)',
    borderRadius: 50,
    height: 35,
    padding: '0px 0px 0 20px',
    outline: 'none',
    marginTop: 20
  },
  wideRoundTextArea: {
    marginVertical: 15,
    borderColor: COLORS.primary,
    fontSize: 15,
    borderWidth: 1,
    width: '90%',
    borderRadius: 20,
    height: 100,
    paddingHorizontal: 20,
    outline: 'none',
    padding: 8
  },
  emptySquare: {
    width: 60,
    height: 60
  },
  completeSquare: {
    width: 60,
    height: 60,
    backgroundColor: 'green',
    borderWidth: 1,
    borderColor: 'black'
  },
  incompleteSquare: {
    width: 60,
    height: 60,
    backgroundColor: 'red',
    borderWidth: 1,
    borderColor: 'black'
  },
  rewardSquare: {
    width: 60,
    height: 60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  smallRewardIcon: {
    width: 40,
    height: 40
  },
  freeSquare: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: 'black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  freeSquareIcon: {
    height: 45,
    width: 45
  },
  card: {
    height: 100,
    width: '90%',
    borderRadius: 50,
    marginTop: 20,
    outline: 'none',
    cursor: 'pointer',
    borderColor: COLORS.secondary,
    borderWidth: 3,
    maxWidth: 300,
    boxShadow: '1px 3px #999999'
  },
  cardInteriorView: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    borderWidth: 3,
    borderColor: COLORS.secondary,
    height: '100%',
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 12
  },
  pageTitle: {
    fontSize: 32,
    color: COLORS.primary
  }
};

/***/ }),

/***/ 6:
/*!*******************************************!*\
  !*** multi ./pages/manageBoards/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/spencerford/Documents/DEVyall/PersonalProjects/CorporateBingoWeb/pages/manageBoards/index.js */"./pages/manageBoards/index.js");


/***/ }),

/***/ "@material-ui/core/Table":
/*!******************************************!*\
  !*** external "@material-ui/core/Table" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Table");

/***/ }),

/***/ "@material-ui/core/TableBody":
/*!**********************************************!*\
  !*** external "@material-ui/core/TableBody" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableBody");

/***/ }),

/***/ "@material-ui/core/TableCell":
/*!**********************************************!*\
  !*** external "@material-ui/core/TableCell" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableCell");

/***/ }),

/***/ "@material-ui/core/TableHead":
/*!**********************************************!*\
  !*** external "@material-ui/core/TableHead" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableHead");

/***/ }),

/***/ "@material-ui/core/TableRow":
/*!*********************************************!*\
  !*** external "@material-ui/core/TableRow" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableRow");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=manageBoards.js.map