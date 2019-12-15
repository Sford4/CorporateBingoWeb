webpackHotUpdate("static/development/pages/joinGame.js",{

/***/ "./components/SideNav.js":
/*!*******************************!*\
  !*** ./components/SideNav.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_masterStyles_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/masterStyles.js */ "./styles/masterStyles.js");
/* harmony import */ var _contexts_userContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contexts/userContext */ "./contexts/userContext.js");
var _jsxFileName = "/Users/spencerford/Documents/DEVyall/PersonalProjects/CorporateBingoWeb/components/SideNav.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



 // context imports



var SideNav = function SideNav(props) {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_userContext__WEBPACK_IMPORTED_MODULE_5__["UserContext"]),
      user = _useContext.user,
      logout = _useContext.logout;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(router.pathname),
      currRoute = _useState[0],
      setCurrRoute = _useState[1];

  var handleRouteChange = function handleRouteChange(url) {
    setCurrRoute(url);
  };

  router.events.on('routeChangeStart', handleRouteChange);

  var handleRouteChangeComplete = function handleRouteChangeComplete(url) {
    setCurrRoute(url);
  };

  router.events.on('routeChangeComplete', handleRouteChangeComplete);

  var addDefaultPic = function addDefaultPic(ev) {
    ev.target.src = "https://i.ytimg.com/vi/bKcF7JUbCpo/maxresdefault.jpg";
  };

  var handleLogoutClick = function handleLogoutClick() {
    logout();
  };

  if (!user._id) {
    return __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, "LOADING...");
  }

  return __jsx("div", {
    id: "sidenav",
    style: {
      borderRight: "2px solid ".concat(_styles_masterStyles_js__WEBPACK_IMPORTED_MODULE_4__["COLORS"].primary)
    },
    className: "jsx-1054960106",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("img", {
    alt: "Bingo Builder",
    src: '../static/bingoBuilderLogo.png',
    style: {
      width: '90%',
      margin: '10px 0 10px 0'
    },
    onError: addDefaultPic,
    className: "jsx-1054960106",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/joinGame",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("a", {
    style: currRoute && currRoute.includes('joinGame') ? styles.currLink : styles.link,
    className: "jsx-1054960106" + " " + 'sidenavLink',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "JOIN GAME")), user && user.role.level < 3 && __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/manageBoards",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("a", {
    style: currRoute && currRoute.includes('manageBoards') ? styles.currLink : styles.link,
    className: "jsx-1054960106" + " " + 'sidenavLink',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "MANAGE BOARDS")), user && user.role.level < 3 && __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/usersAndOrg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("a", {
    style: currRoute && currRoute.includes('usersAndOrg') ? styles.currLink : styles.link,
    className: "jsx-1054960106" + " " + 'sidenavLink',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "USERS & ORG")), user && user.role.level !== 2 && __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/profile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("a", {
    style: currRoute && currRoute.includes('profile') ? styles.currLink : styles.link,
    className: "jsx-1054960106" + " " + 'sidenavLink',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "MY PROFILE")), __jsx("a", {
    style: {
      color: _styles_masterStyles_js__WEBPACK_IMPORTED_MODULE_4__["COLORS"].primary,
      cursor: 'pointer',
      padding: 10
    },
    onClick: function onClick() {
      return handleLogoutClick();
    },
    className: "jsx-1054960106" + " " + 'sidenavLink',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "LOGOUT"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1054960106",
    __self: this
  }, "#sidenav.jsx-1054960106{width:20%;max-width:300px;min-width:200px;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;box-shadow:2px 0 5px -2px #999;background-color:white;font:roboto;padding:0 .5%;}.sidenavLink.jsx-1054960106{width:90%;text-align:left;margin:20px 0 0 0;-webkit-text-decoration:none;text-decoration:none;font-size:20px;font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zcGVuY2VyZm9yZC9Eb2N1bWVudHMvREVWeWFsbC9QZXJzb25hbFByb2plY3RzL0NvcnBvcmF0ZUJpbmdvV2ViL2NvbXBvbmVudHMvU2lkZU5hdi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRGlCLEFBR21DLEFBYUEsVUFaTSxBQWFBLGdCQVpBLEFBYUUsZ0JBWk4sRUFhUyxVQVpSLHdDQWFFLGVBQ0UsaUJBQ3JCLEVBZDBCLDhFQUNILDZGQUNZLCtCQUNSLHVCQUNYLFlBQ0UsY0FDbEIiLCJmaWxlIjoiL1VzZXJzL3NwZW5jZXJmb3JkL0RvY3VtZW50cy9ERVZ5YWxsL1BlcnNvbmFsUHJvamVjdHMvQ29ycG9yYXRlQmluZ29XZWIvY29tcG9uZW50cy9TaWRlTmF2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmltcG9ydCB7IENPTE9SUyB9IGZyb20gJy4uL3N0eWxlcy9tYXN0ZXJTdHlsZXMuanMnO1xuXG4vLyBjb250ZXh0IGltcG9ydHNcbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dHMvdXNlckNvbnRleHQnO1xuXG5jb25zdCBTaWRlTmF2ID0gKHByb3BzKSA9PiB7XG5cbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gICAgY29uc3QgeyB1c2VyLCBsb2dvdXQgfSA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xuICAgIGNvbnN0IFsgY3VyclJvdXRlLCBzZXRDdXJyUm91dGUgXSA9IHVzZVN0YXRlKHJvdXRlci5wYXRobmFtZSk7XG5cbiAgICBjb25zdCBoYW5kbGVSb3V0ZUNoYW5nZSA9IHVybCA9PiB7XG4gICAgICAgIHNldEN1cnJSb3V0ZSh1cmwpO1xuICAgIH1cbiAgICByb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZVN0YXJ0JywgaGFuZGxlUm91dGVDaGFuZ2UpXG5cbiAgICBjb25zdCBoYW5kbGVSb3V0ZUNoYW5nZUNvbXBsZXRlID0gdXJsID0+IHtcbiAgICAgICAgc2V0Q3VyclJvdXRlKHVybCk7XG4gICAgfVxuICAgIHJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBoYW5kbGVSb3V0ZUNoYW5nZUNvbXBsZXRlKVxuXG4gICAgY29uc3QgYWRkRGVmYXVsdFBpYyA9IChldikgPT4ge1xuICAgICAgICBldi50YXJnZXQuc3JjID0gXCJodHRwczovL2kueXRpbWcuY29tL3ZpL2JLY0Y3SlViQ3BvL21heHJlc2RlZmF1bHQuanBnXCI7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZUxvZ291dENsaWNrID0gKCkgPT4ge1xuICAgICAgICBsb2dvdXQoKTtcbiAgICB9XG5cbiAgICBpZighdXNlci5faWQpe1xuICAgICAgICByZXR1cm4gPHNwYW4+TE9BRElORy4uLjwvc3Bhbj5cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGlkPSdzaWRlbmF2JyBzdHlsZT17eyBib3JkZXJSaWdodDogYDJweCBzb2xpZCAke0NPTE9SUy5wcmltYXJ5fWAgfX0+XG4gICAgICAgICAgICA8aW1nIFxuICAgICAgICAgICAgICAgIGFsdD0nQmluZ28gQnVpbGRlcicgXG4gICAgICAgICAgICAgICAgc3JjPXsnLi4vc3RhdGljL2JpbmdvQnVpbGRlckxvZ28ucG5nJ30gXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICc5MCUnLCBtYXJnaW46ICcxMHB4IDAgMTBweCAwJyB9fVxuICAgICAgICAgICAgICAgIG9uRXJyb3I9e2FkZERlZmF1bHRQaWN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPExpbmsgaHJlZj0nL2pvaW5HYW1lJz48YSBjbGFzc05hbWU9J3NpZGVuYXZMaW5rJyBzdHlsZT17Y3VyclJvdXRlICYmIGN1cnJSb3V0ZS5pbmNsdWRlcygnam9pbkdhbWUnKSA/IHN0eWxlcy5jdXJyTGluayA6IHN0eWxlcy5saW5rfT5KT0lOIEdBTUU8L2E+PC9MaW5rPlxuICAgICAgICAgICAge3VzZXIgJiYgdXNlci5yb2xlLmxldmVsIDwgMyAmJiA8TGluayBocmVmPScvbWFuYWdlQm9hcmRzJz48YSBjbGFzc05hbWU9J3NpZGVuYXZMaW5rJyBzdHlsZT17Y3VyclJvdXRlICYmIGN1cnJSb3V0ZS5pbmNsdWRlcygnbWFuYWdlQm9hcmRzJykgPyBzdHlsZXMuY3VyckxpbmsgOiBzdHlsZXMubGlua30+TUFOQUdFIEJPQVJEUzwvYT48L0xpbms+fVxuICAgICAgICAgICAge3VzZXIgJiYgdXNlci5yb2xlLmxldmVsIDwgMyAmJiA8TGluayBocmVmPScvdXNlcnNBbmRPcmcnPjxhIGNsYXNzTmFtZT0nc2lkZW5hdkxpbmsnIHN0eWxlPXtjdXJyUm91dGUgJiYgY3VyclJvdXRlLmluY2x1ZGVzKCd1c2Vyc0FuZE9yZycpID8gc3R5bGVzLmN1cnJMaW5rIDogc3R5bGVzLmxpbmt9PlVTRVJTICYgT1JHPC9hPjwvTGluaz59XG4gICAgICAgICAgICB7dXNlciAmJiB1c2VyLnJvbGUubGV2ZWwgIT09IDIgJiYgPExpbmsgaHJlZj0nL3Byb2ZpbGUnPjxhIGNsYXNzTmFtZT0nc2lkZW5hdkxpbmsnIHN0eWxlPXtjdXJyUm91dGUgJiYgY3VyclJvdXRlLmluY2x1ZGVzKCdwcm9maWxlJykgPyBzdHlsZXMuY3VyckxpbmsgOiBzdHlsZXMubGlua30+TVkgUFJPRklMRTwvYT48L0xpbms+fVxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdzaWRlbmF2TGluaycgc3R5bGU9e3tjb2xvcjogQ09MT1JTLnByaW1hcnksIGN1cnNvcjogJ3BvaW50ZXInLCBwYWRkaW5nOiAxMH19IG9uQ2xpY2s9eygpID0+IGhhbmRsZUxvZ291dENsaWNrKCl9PkxPR09VVDwvYT5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAgICAgI3NpZGVuYXYge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMzAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMnB4IDAgNXB4IC0ycHggIzk5OTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udDogcm9ib3RvO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAuNSU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnNpZGVuYXZMaW5rIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDAgMCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuY29uc3Qgc3R5bGVzID0ge1xuICAgIGxpbms6IHtcbiAgICAgICAgY29sb3I6IENPTE9SUy5wcmltYXJ5LFxuICAgICAgICBwYWRkaW5nOiAxMCxcbiAgICB9LFxuICAgIGN1cnJMaW5rOiB7XG4gICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IENPTE9SUy5wcmltYXJ5LFxuICAgICAgICBwYWRkaW5nOiAxMCxcbiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAyMCxcbiAgICB9XG4gIH07XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGVOYXY7Il19 */\n/*@ sourceURL=/Users/spencerford/Documents/DEVyall/PersonalProjects/CorporateBingoWeb/components/SideNav.js */"));
};

var styles = {
  link: {
    color: _styles_masterStyles_js__WEBPACK_IMPORTED_MODULE_4__["COLORS"].primary,
    padding: 10
  },
  currLink: {
    color: 'white',
    backgroundColor: _styles_masterStyles_js__WEBPACK_IMPORTED_MODULE_4__["COLORS"].primary,
    padding: 10,
    textAlign: 'center',
    borderRadius: 20
  }
};
/* harmony default export */ __webpack_exports__["default"] = (SideNav);

/***/ })

})
//# sourceMappingURL=joinGame.js.83c438550af548207f82.hot-update.js.map