webpackHotUpdate("static/development/pages/manageBoards.js",{

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
    src: '/static/bingoBuilderLogo.png',
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
  }, "#sidenav.jsx-1054960106{width:20%;max-width:300px;min-width:200px;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;box-shadow:2px 0 5px -2px #999;background-color:white;font:roboto;padding:0 .5%;}.sidenavLink.jsx-1054960106{width:90%;text-align:left;margin:20px 0 0 0;-webkit-text-decoration:none;text-decoration:none;font-size:20px;font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zcGVuY2VyZm9yZC9Eb2N1bWVudHMvREVWeWFsbC9QZXJzb25hbFByb2plY3RzL0NvcnBvcmF0ZUJpbmdvV2ViL2NvbXBvbmVudHMvU2lkZU5hdi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRGlCLEFBR21DLEFBYUEsVUFaTSxBQWFBLGdCQVpBLEFBYUUsZ0JBWk4sRUFhUyxVQVpSLHdDQWFFLGVBQ0UsaUJBQ3JCLEVBZDBCLDhFQUNILDZGQUNZLCtCQUNSLHVCQUNYLFlBQ0UsY0FDbEIiLCJmaWxlIjoiL1VzZXJzL3NwZW5jZXJmb3JkL0RvY3VtZW50cy9ERVZ5YWxsL1BlcnNvbmFsUHJvamVjdHMvQ29ycG9yYXRlQmluZ29XZWIvY29tcG9uZW50cy9TaWRlTmF2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmltcG9ydCB7IENPTE9SUyB9IGZyb20gJy4uL3N0eWxlcy9tYXN0ZXJTdHlsZXMuanMnO1xuXG4vLyBjb250ZXh0IGltcG9ydHNcbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dHMvdXNlckNvbnRleHQnO1xuXG5jb25zdCBTaWRlTmF2ID0gKHByb3BzKSA9PiB7XG5cbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gICAgY29uc3QgeyB1c2VyLCBsb2dvdXQgfSA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xuICAgIGNvbnN0IFsgY3VyclJvdXRlLCBzZXRDdXJyUm91dGUgXSA9IHVzZVN0YXRlKHJvdXRlci5wYXRobmFtZSk7XG5cbiAgICBjb25zdCBoYW5kbGVSb3V0ZUNoYW5nZSA9IHVybCA9PiB7XG4gICAgICAgIHNldEN1cnJSb3V0ZSh1cmwpO1xuICAgIH1cbiAgICByb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZVN0YXJ0JywgaGFuZGxlUm91dGVDaGFuZ2UpXG5cbiAgICBjb25zdCBoYW5kbGVSb3V0ZUNoYW5nZUNvbXBsZXRlID0gdXJsID0+IHtcbiAgICAgICAgc2V0Q3VyclJvdXRlKHVybCk7XG4gICAgfVxuICAgIHJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBoYW5kbGVSb3V0ZUNoYW5nZUNvbXBsZXRlKVxuXG4gICAgY29uc3QgYWRkRGVmYXVsdFBpYyA9IChldikgPT4ge1xuICAgICAgICBldi50YXJnZXQuc3JjID0gXCJodHRwczovL2kueXRpbWcuY29tL3ZpL2JLY0Y3SlViQ3BvL21heHJlc2RlZmF1bHQuanBnXCI7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZUxvZ291dENsaWNrID0gKCkgPT4ge1xuICAgICAgICBsb2dvdXQoKTtcbiAgICB9XG5cbiAgICBpZighdXNlci5faWQpe1xuICAgICAgICByZXR1cm4gPHNwYW4+TE9BRElORy4uLjwvc3Bhbj5cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGlkPSdzaWRlbmF2JyBzdHlsZT17eyBib3JkZXJSaWdodDogYDJweCBzb2xpZCAke0NPTE9SUy5wcmltYXJ5fWAgfX0+XG4gICAgICAgICAgICA8aW1nIFxuICAgICAgICAgICAgICAgIGFsdD0nQmluZ28gQnVpbGRlcicgXG4gICAgICAgICAgICAgICAgc3JjPXsnL3N0YXRpYy9iaW5nb0J1aWxkZXJMb2dvLnBuZyd9IFxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnOTAlJywgbWFyZ2luOiAnMTBweCAwIDEwcHggMCcgfX1cbiAgICAgICAgICAgICAgICBvbkVycm9yPXthZGREZWZhdWx0UGljfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9qb2luR2FtZSc+PGEgY2xhc3NOYW1lPSdzaWRlbmF2TGluaycgc3R5bGU9e2N1cnJSb3V0ZSAmJiBjdXJyUm91dGUuaW5jbHVkZXMoJ2pvaW5HYW1lJykgPyBzdHlsZXMuY3VyckxpbmsgOiBzdHlsZXMubGlua30+Sk9JTiBHQU1FPC9hPjwvTGluaz5cbiAgICAgICAgICAgIHt1c2VyICYmIHVzZXIucm9sZS5sZXZlbCA8IDMgJiYgPExpbmsgaHJlZj0nL21hbmFnZUJvYXJkcyc+PGEgY2xhc3NOYW1lPSdzaWRlbmF2TGluaycgc3R5bGU9e2N1cnJSb3V0ZSAmJiBjdXJyUm91dGUuaW5jbHVkZXMoJ21hbmFnZUJvYXJkcycpID8gc3R5bGVzLmN1cnJMaW5rIDogc3R5bGVzLmxpbmt9Pk1BTkFHRSBCT0FSRFM8L2E+PC9MaW5rPn1cbiAgICAgICAgICAgIHt1c2VyICYmIHVzZXIucm9sZS5sZXZlbCA8IDMgJiYgPExpbmsgaHJlZj0nL3VzZXJzQW5kT3JnJz48YSBjbGFzc05hbWU9J3NpZGVuYXZMaW5rJyBzdHlsZT17Y3VyclJvdXRlICYmIGN1cnJSb3V0ZS5pbmNsdWRlcygndXNlcnNBbmRPcmcnKSA/IHN0eWxlcy5jdXJyTGluayA6IHN0eWxlcy5saW5rfT5VU0VSUyAmIE9SRzwvYT48L0xpbms+fVxuICAgICAgICAgICAge3VzZXIgJiYgdXNlci5yb2xlLmxldmVsICE9PSAyICYmIDxMaW5rIGhyZWY9Jy9wcm9maWxlJz48YSBjbGFzc05hbWU9J3NpZGVuYXZMaW5rJyBzdHlsZT17Y3VyclJvdXRlICYmIGN1cnJSb3V0ZS5pbmNsdWRlcygncHJvZmlsZScpID8gc3R5bGVzLmN1cnJMaW5rIDogc3R5bGVzLmxpbmt9Pk1ZIFBST0ZJTEU8L2E+PC9MaW5rPn1cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nc2lkZW5hdkxpbmsnIHN0eWxlPXt7Y29sb3I6IENPTE9SUy5wcmltYXJ5LCBjdXJzb3I6ICdwb2ludGVyJywgcGFkZGluZzogMTB9fSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVMb2dvdXRDbGljaygpfT5MT0dPVVQ8L2E+XG4gICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgICAgICNzaWRlbmF2IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDMwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDJweCAwIDVweCAtMnB4ICM5OTk7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQ6IHJvYm90bztcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgLjUlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5zaWRlbmF2TGluayB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMjBweCAwIDAgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgICBsaW5rOiB7XG4gICAgICAgIGNvbG9yOiBDT0xPUlMucHJpbWFyeSxcbiAgICAgICAgcGFkZGluZzogMTAsXG4gICAgfSxcbiAgICBjdXJyTGluazoge1xuICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBDT0xPUlMucHJpbWFyeSxcbiAgICAgICAgcGFkZGluZzogMTAsXG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgIGJvcmRlclJhZGl1czogMjAsXG4gICAgfVxuICB9O1xuXG5leHBvcnQgZGVmYXVsdCBTaWRlTmF2OyJdfQ== */\n/*@ sourceURL=/Users/spencerford/Documents/DEVyall/PersonalProjects/CorporateBingoWeb/components/SideNav.js */"));
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
//# sourceMappingURL=manageBoards.js.ebc0a58b1651d4667097.hot-update.js.map