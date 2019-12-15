webpackHotUpdate("static/development/pages/playGame/[findID]/[userID].js",{

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
    // ev.target.src = "https://i.ytimg.com/vi/bKcF7JUbCpo/maxresdefault.jpg";
    ev.target.src = "../public/static/bingoBuilderLogo.png";
  };

  var handleLogoutClick = function handleLogoutClick() {
    logout();
  };

  if (!user._id) {
    return __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
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
      lineNumber: 41
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
      lineNumber: 42
    },
    __self: this
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/joinGame",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("a", {
    style: currRoute && currRoute.includes('joinGame') ? styles.currLink : styles.link,
    className: "jsx-1054960106" + " " + 'sidenavLink',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "JOIN GAME")), user && user.role.level < 3 && __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/manageBoards",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("a", {
    style: currRoute && currRoute.includes('manageBoards') ? styles.currLink : styles.link,
    className: "jsx-1054960106" + " " + 'sidenavLink',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "MANAGE BOARDS")), user && user.role.level < 3 && __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/usersAndOrg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("a", {
    style: currRoute && currRoute.includes('usersAndOrg') ? styles.currLink : styles.link,
    className: "jsx-1054960106" + " " + 'sidenavLink',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "USERS & ORG")), user && user.role.level !== 2 && __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/profile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("a", {
    style: currRoute && currRoute.includes('profile') ? styles.currLink : styles.link,
    className: "jsx-1054960106" + " " + 'sidenavLink',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
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
      lineNumber: 52
    },
    __self: this
  }, "LOGOUT"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1054960106",
    __self: this
  }, "#sidenav.jsx-1054960106{width:20%;max-width:300px;min-width:200px;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;box-shadow:2px 0 5px -2px #999;background-color:white;font:roboto;padding:0 .5%;}.sidenavLink.jsx-1054960106{width:90%;text-align:left;margin:20px 0 0 0;-webkit-text-decoration:none;text-decoration:none;font-size:20px;font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zcGVuY2VyZm9yZC9Eb2N1bWVudHMvREVWeWFsbC9QZXJzb25hbFByb2plY3RzL0NvcnBvcmF0ZUJpbmdvV2ViL2NvbXBvbmVudHMvU2lkZU5hdi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxRGlCLEFBR21DLEFBYUEsVUFaTSxBQWFBLGdCQVpBLEFBYUUsZ0JBWk4sRUFhUyxVQVpSLHdDQWFFLGVBQ0UsaUJBQ3JCLEVBZDBCLDhFQUNILDZGQUNZLCtCQUNSLHVCQUNYLFlBQ0UsY0FDbEIiLCJmaWxlIjoiL1VzZXJzL3NwZW5jZXJmb3JkL0RvY3VtZW50cy9ERVZ5YWxsL1BlcnNvbmFsUHJvamVjdHMvQ29ycG9yYXRlQmluZ29XZWIvY29tcG9uZW50cy9TaWRlTmF2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmltcG9ydCB7IENPTE9SUyB9IGZyb20gJy4uL3N0eWxlcy9tYXN0ZXJTdHlsZXMuanMnO1xuXG4vLyBjb250ZXh0IGltcG9ydHNcbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dHMvdXNlckNvbnRleHQnO1xuXG5jb25zdCBTaWRlTmF2ID0gKHByb3BzKSA9PiB7XG5cbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gICAgY29uc3QgeyB1c2VyLCBsb2dvdXQgfSA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xuICAgIGNvbnN0IFsgY3VyclJvdXRlLCBzZXRDdXJyUm91dGUgXSA9IHVzZVN0YXRlKHJvdXRlci5wYXRobmFtZSk7XG5cbiAgICBjb25zdCBoYW5kbGVSb3V0ZUNoYW5nZSA9IHVybCA9PiB7XG4gICAgICAgIHNldEN1cnJSb3V0ZSh1cmwpO1xuICAgIH1cbiAgICByb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZVN0YXJ0JywgaGFuZGxlUm91dGVDaGFuZ2UpXG5cbiAgICBjb25zdCBoYW5kbGVSb3V0ZUNoYW5nZUNvbXBsZXRlID0gdXJsID0+IHtcbiAgICAgICAgc2V0Q3VyclJvdXRlKHVybCk7XG4gICAgfVxuICAgIHJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBoYW5kbGVSb3V0ZUNoYW5nZUNvbXBsZXRlKVxuXG4gICAgY29uc3QgYWRkRGVmYXVsdFBpYyA9IChldikgPT4ge1xuICAgICAgICAvLyBldi50YXJnZXQuc3JjID0gXCJodHRwczovL2kueXRpbWcuY29tL3ZpL2JLY0Y3SlViQ3BvL21heHJlc2RlZmF1bHQuanBnXCI7XG4gICAgICAgIGV2LnRhcmdldC5zcmMgPSBcIi4uL3B1YmxpYy9zdGF0aWMvYmluZ29CdWlsZGVyTG9nby5wbmdcIjtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlTG9nb3V0Q2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIGxvZ291dCgpO1xuICAgIH1cblxuICAgIGlmKCF1c2VyLl9pZCl7XG4gICAgICAgIHJldHVybiA8c3Bhbj5MT0FESU5HLi4uPC9zcGFuPlxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgaWQ9J3NpZGVuYXYnIHN0eWxlPXt7IGJvcmRlclJpZ2h0OiBgMnB4IHNvbGlkICR7Q09MT1JTLnByaW1hcnl9YCB9fT5cbiAgICAgICAgICAgIDxpbWcgXG4gICAgICAgICAgICAgICAgYWx0PSdCaW5nbyBCdWlsZGVyJyBcbiAgICAgICAgICAgICAgICBzcmM9eycuLi9zdGF0aWMvYmluZ29CdWlsZGVyTG9nby5wbmcnfSBcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzkwJScsIG1hcmdpbjogJzEwcHggMCAxMHB4IDAnIH19XG4gICAgICAgICAgICAgICAgb25FcnJvcj17YWRkRGVmYXVsdFBpY31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8TGluayBocmVmPScvam9pbkdhbWUnPjxhIGNsYXNzTmFtZT0nc2lkZW5hdkxpbmsnIHN0eWxlPXtjdXJyUm91dGUgJiYgY3VyclJvdXRlLmluY2x1ZGVzKCdqb2luR2FtZScpID8gc3R5bGVzLmN1cnJMaW5rIDogc3R5bGVzLmxpbmt9PkpPSU4gR0FNRTwvYT48L0xpbms+XG4gICAgICAgICAgICB7dXNlciAmJiB1c2VyLnJvbGUubGV2ZWwgPCAzICYmIDxMaW5rIGhyZWY9Jy9tYW5hZ2VCb2FyZHMnPjxhIGNsYXNzTmFtZT0nc2lkZW5hdkxpbmsnIHN0eWxlPXtjdXJyUm91dGUgJiYgY3VyclJvdXRlLmluY2x1ZGVzKCdtYW5hZ2VCb2FyZHMnKSA/IHN0eWxlcy5jdXJyTGluayA6IHN0eWxlcy5saW5rfT5NQU5BR0UgQk9BUkRTPC9hPjwvTGluaz59XG4gICAgICAgICAgICB7dXNlciAmJiB1c2VyLnJvbGUubGV2ZWwgPCAzICYmIDxMaW5rIGhyZWY9Jy91c2Vyc0FuZE9yZyc+PGEgY2xhc3NOYW1lPSdzaWRlbmF2TGluaycgc3R5bGU9e2N1cnJSb3V0ZSAmJiBjdXJyUm91dGUuaW5jbHVkZXMoJ3VzZXJzQW5kT3JnJykgPyBzdHlsZXMuY3VyckxpbmsgOiBzdHlsZXMubGlua30+VVNFUlMgJiBPUkc8L2E+PC9MaW5rPn1cbiAgICAgICAgICAgIHt1c2VyICYmIHVzZXIucm9sZS5sZXZlbCAhPT0gMiAmJiA8TGluayBocmVmPScvcHJvZmlsZSc+PGEgY2xhc3NOYW1lPSdzaWRlbmF2TGluaycgc3R5bGU9e2N1cnJSb3V0ZSAmJiBjdXJyUm91dGUuaW5jbHVkZXMoJ3Byb2ZpbGUnKSA/IHN0eWxlcy5jdXJyTGluayA6IHN0eWxlcy5saW5rfT5NWSBQUk9GSUxFPC9hPjwvTGluaz59XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9J3NpZGVuYXZMaW5rJyBzdHlsZT17e2NvbG9yOiBDT0xPUlMucHJpbWFyeSwgY3Vyc29yOiAncG9pbnRlcicsIHBhZGRpbmc6IDEwfX0gb25DbGljaz17KCkgPT4gaGFuZGxlTG9nb3V0Q2xpY2soKX0+TE9HT1VUPC9hPlxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgICAgICAjc2lkZW5hdiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMjAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAycHggMCA1cHggLTJweCAjOTk5O1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250OiByb2JvdG87XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIC41JTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuc2lkZW5hdkxpbmsge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDIwcHggMCAwIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5jb25zdCBzdHlsZXMgPSB7XG4gICAgbGluazoge1xuICAgICAgICBjb2xvcjogQ09MT1JTLnByaW1hcnksXG4gICAgICAgIHBhZGRpbmc6IDEwLFxuICAgIH0sXG4gICAgY3Vyckxpbms6IHtcbiAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogQ09MT1JTLnByaW1hcnksXG4gICAgICAgIHBhZGRpbmc6IDEwLFxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICBib3JkZXJSYWRpdXM6IDIwLFxuICAgIH1cbiAgfTtcblxuZXhwb3J0IGRlZmF1bHQgU2lkZU5hdjsiXX0= */\n/*@ sourceURL=/Users/spencerford/Documents/DEVyall/PersonalProjects/CorporateBingoWeb/components/SideNav.js */"));
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

/***/ }),

/***/ 1:
false,

/***/ 2:
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2FplayGame%2F%5BfindID%5D%2F%5BuserID%5D&absolutePagePath=%2FUsers%2Fspencerford%2FDocuments%2FDEVyall%2FPersonalProjects%2FCorporateBingoWeb%2Fpages%2FplayGame%2F%5BfindID%5D%2F%5BuserID%5D%2Findex.js ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2FplayGame%2F%5BfindID%5D%2F%5BuserID%5D&absolutePagePath=%2FUsers%2Fspencerford%2FDocuments%2FDEVyall%2FPersonalProjects%2FCorporateBingoWeb%2Fpages%2FplayGame%2F%5BfindID%5D%2F%5BuserID%5D%2Findex.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2FplayGame%2F%5BfindID%5D%2F%5BuserID%5D&absolutePagePath=%2FUsers%2Fspencerford%2FDocuments%2FDEVyall%2FPersonalProjects%2FCorporateBingoWeb%2Fpages%2FplayGame%2F%5BfindID%5D%2F%5BuserID%5D%2Findex.js!./");


/***/ })

})
//# sourceMappingURL=[userID].js.c6dbe0e0ae4ea14d6f04.hot-update.js.map