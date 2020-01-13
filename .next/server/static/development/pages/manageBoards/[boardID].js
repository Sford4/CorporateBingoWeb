module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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
/* harmony import */ var _contexts_userContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/userContext */ "./contexts/userContext.js");
/* harmony import */ var _contexts_orgContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contexts/orgContext */ "./contexts/orgContext.js");
var _jsxFileName = "/Users/spencerford/Documents/DEVyall/PersonalProjects/CorporateBingoWeb/components/Layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

 // context imports




const Layout = props => {
  const {
    user,
    storeUser,
    logout
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_userContext__WEBPACK_IMPORTED_MODULE_3__["UserContext"]);
  const {
    org,
    getOrg
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_orgContext__WEBPACK_IMPORTED_MODULE_4__["OrgContext"]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (!user.id && localStorage.getItem('bingo_user') && localStorage.getItem('bingo_token')) {
      storeUser(JSON.parse(localStorage.getItem('bingo_user')));
    } else if (!localStorage.getItem('bingo_token') || !user) {
      logout();
    }

    if (user && user.org && !org) {
      getOrg(user.org);
    }
  }, [user]);

  if (!user || !user.id) {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: undefined
    }, "loading");
  }

  return __jsx("div", {
    id: "layout",
    className: "jsx-2546284142",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, __jsx(_SideNav__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-2546284142" + " " + 'child-component-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, props.children), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2546284142",
    __self: undefined
  }, "#layout.jsx-2546284142{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:100vh;width:100vw;font:roboto;}.child-component-container.jsx-2546284142{padding:20px;width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zcGVuY2VyZm9yZC9Eb2N1bWVudHMvREVWeWFsbC9QZXJzb25hbFByb2plY3RzL0NvcnBvcmF0ZUJpbmdvV2ViL2NvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtDaUIsQUFHc0MsQUFPQSxhQUNGLFdBQ2Ysa0RBUnVCLHFFQUNOLGFBQ0QsWUFDQSxZQUNoQiIsImZpbGUiOiIvVXNlcnMvc3BlbmNlcmZvcmQvRG9jdW1lbnRzL0RFVnlhbGwvUGVyc29uYWxQcm9qZWN0cy9Db3Jwb3JhdGVCaW5nb1dlYi9jb21wb25lbnRzL0xheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNpZGVOYXYgZnJvbSAnLi9TaWRlTmF2JztcblxuLy8gY29udGV4dCBpbXBvcnRzXG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHRzL3VzZXJDb250ZXh0JztcbmltcG9ydCB7IE9yZ0NvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0cy9vcmdDb250ZXh0JztcblxuY29uc3QgTGF5b3V0ID0gKHByb3BzID0+IHtcblxuICAgIGNvbnN0IHsgdXNlciwgc3RvcmVVc2VyLCBsb2dvdXQgfSA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xuICAgIGNvbnN0IHsgb3JnLCBnZXRPcmcgfSA9IHVzZUNvbnRleHQoT3JnQ29udGV4dCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZighdXNlci5pZCAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYmluZ29fdXNlcicpICYmIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdiaW5nb190b2tlbicpKXtcbiAgICAgICAgICAgIHN0b3JlVXNlcihKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdiaW5nb191c2VyJykpKTtcbiAgICAgICAgfSBlbHNlIGlmKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYmluZ29fdG9rZW4nKSB8fCAhdXNlcil7XG4gICAgICAgICAgICBsb2dvdXQoKTtcbiAgICAgICAgfVxuICAgICAgICBpZih1c2VyICYmIHVzZXIub3JnICYmICFvcmcpe1xuICAgICAgICAgICAgZ2V0T3JnKHVzZXIub3JnKTtcbiAgICAgICAgfVxuICAgIH0sW3VzZXJdKTtcblxuICAgIGlmKCF1c2VyIHx8ICF1c2VyLmlkKXtcbiAgICAgICAgcmV0dXJuIDxkaXY+bG9hZGluZzwvZGl2PlxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgaWQ9J2xheW91dCc+XG4gICAgICAgICAgICA8U2lkZU5hdiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NoaWxkLWNvbXBvbmVudC1jb250YWluZXInPlxuICAgICAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgICAgICAjbGF5b3V0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQ6IHJvYm90bztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuY2hpbGQtY29tcG9uZW50LWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDsiXX0= */\n/*@ sourceURL=/Users/spencerford/Documents/DEVyall/PersonalProjects/CorporateBingoWeb/components/Layout.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/ManageBoard/BoardBuilder/BoardBuilder.js":
/*!*************************************************************!*\
  !*** ./components/ManageBoard/BoardBuilder/BoardBuilder.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_manageBoardsContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../contexts/manageBoardsContext */ "./contexts/manageBoardsContext.js");
/* harmony import */ var _styles_masterStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles/masterStyles */ "./styles/masterStyles.js");
/* harmony import */ var _BoardBuilderBoard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BoardBuilderBoard */ "./components/ManageBoard/BoardBuilder/BoardBuilderBoard.js");
/* harmony import */ var _RewardBuilder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RewardBuilder */ "./components/ManageBoard/BoardBuilder/RewardBuilder.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Dialog */ "@material-ui/core/Dialog");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "@material-ui/core/DialogActions");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "@material-ui/core/DialogTitle");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Close */ "@material-ui/icons/Close");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_11__);
var _jsxFileName = "/Users/spencerford/Documents/DEVyall/PersonalProjects/CorporateBingoWeb/components/ManageBoard/BoardBuilder/BoardBuilder.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // context imports

 // Style imports

 // Component imports


 // Material ui








const DialogActions = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["withStyles"])(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}))(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_7___default.a);

const materialStyles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    fontSize: 32,
    color: _styles_masterStyles__WEBPACK_IMPORTED_MODULE_2__["COLORS"].primary
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
});

const DialogTitle = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["withStyles"])(materialStyles)(props => {
  const {
    children,
    classes,
    onClose
  } = props;
  return __jsx(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_8___default.a, {
    disableTypography: true,
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
    variant: "h6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, children), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10___default.a, {
    "aria-label": "close",
    className: classes.closeButton,
    onClick: onClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, __jsx(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_11___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  })));
});

const BoardBuilder = props => {
  const {
    contextBoard,
    updateBoard
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_manageBoardsContext__WEBPACK_IMPORTED_MODULE_1__["ManageBoardsContext"]);
  const {
    0: board,
    1: setBoard
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(contextBoard);
  const {
    0: rewardDialogOpen,
    1: setRewardDialogOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: reward,
    1: setReward
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});

  const openRewardBuilderPopup = reward => {
    setRewardDialogOpen(true);
    setReward(reward);
  };

  const updateBoardBuilder = board => {
    updateBoard(board);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setBoard(contextBoard);
  }, [contextBoard]);

  const generateWholeBoardRewardIcon = reward => {
    return __jsx("img", {
      alt: "Whole board completion reward",
      onClick: () => openRewardBuilderPopup(reward),
      style: {
        width: '10vw',
        height: '10vw',
        maxHeight: 200,
        maxWidth: 200,
        cursor: 'pointer'
      },
      src: !reward.title && !reward.description && !reward.img ? '../../static/gift_light_gray.png' : '../../static/gift_gray.png',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: undefined
    });
  };

  return __jsx("div", {
    style: styles.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  }, board.rewards.length && board.rewards[board.rewards.length - 1].position.includes('wholeBoard') ? generateWholeBoardRewardIcon(board.rewards[board.rewards.length - 1]) : null, __jsx(_BoardBuilderBoard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    board: board,
    navigation: props.navigation,
    size: `size${board.numSquares}`,
    updateBoard: updateBoardBuilder,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: undefined
  }), __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_6___default.a, {
    open: rewardDialogOpen,
    onBackdropClick: () => setRewardDialogOpen(false),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: undefined
  }, __jsx(DialogTitle, {
    onClose: () => setRewardDialogOpen(false),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: undefined
  }, "REWARD"), __jsx(_RewardBuilder__WEBPACK_IMPORTED_MODULE_4__["default"], {
    reward: reward,
    openPopup: setRewardDialogOpen,
    updateBoard: updateBoardBuilder,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: undefined
  })));
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    // maxHeight: 650,
    overflowY: 'scroll',
    overflowX: 'overlay',
    width: '60vw',
    maxWidth: 800,
    minWidth: 300,
    paddingHorizontal: 'auto',
    padding: '0 5%',
    marginTop: 12
  }
};
/* harmony default export */ __webpack_exports__["default"] = (BoardBuilder);

/***/ }),

/***/ "./components/ManageBoard/BoardBuilder/BoardBuilderBoard.js":
/*!******************************************************************!*\
  !*** ./components/ManageBoard/BoardBuilder/BoardBuilderBoard.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_masterStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles/masterStyles */ "./styles/masterStyles.js");
/* harmony import */ var _contexts_manageBoardsContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../contexts/manageBoardsContext */ "./contexts/manageBoardsContext.js");
/* harmony import */ var _constants_boardSizes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../constants/boardSizes */ "./constants/boardSizes.js");
/* harmony import */ var _funcs_boardLogic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../funcs/boardLogic */ "./funcs/boardLogic.js");
/* harmony import */ var _SquareBuilder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SquareBuilder */ "./components/ManageBoard/BoardBuilder/SquareBuilder.js");
/* harmony import */ var _RewardBuilder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./RewardBuilder */ "./components/ManageBoard/BoardBuilder/RewardBuilder.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Dialog */ "@material-ui/core/Dialog");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "@material-ui/core/DialogActions");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "@material-ui/core/DialogTitle");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/Close */ "@material-ui/icons/Close");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_14__);

var _jsxFileName = "/Users/spencerford/Documents/DEVyall/PersonalProjects/CorporateBingoWeb/components/ManageBoard/BoardBuilder/BoardBuilderBoard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
 // Style imports

 // Context imports

 // Data imports


 // Component imports


 // Material ui









const materialStyles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    fontSize: 32,
    color: _styles_masterStyles__WEBPACK_IMPORTED_MODULE_2__["COLORS"].primary
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
});

const DialogTitle = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["withStyles"])(materialStyles)(props => {
  const {
    children,
    classes,
    onClose
  } = props;
  return __jsx(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_11___default.a, {
    disableTypography: true,
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12___default.a, {
    variant: "h6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, children), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_13___default.a, {
    "aria-label": "close",
    className: classes.closeButton,
    onClick: onClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, __jsx(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_14___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  })));
});

const BoardBuilderBoard = props => {
  const SQUARE_WIDTH = 60 / (Math.sqrt(props.board.numSquares) + 1);
  let taskNum = 1;
  const {
    contextBoard,
    updateBoard
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_manageBoardsContext__WEBPACK_IMPORTED_MODULE_3__["ManageBoardsContext"]);
  const {
    0: board,
    1: setBoard
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(props.board);
  const {
    0: rewardDialogOpen,
    1: setRewardDialogOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: reward,
    1: setReward
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({});
  const {
    0: taskDialogOpen,
    1: setTaskDialogOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: task,
    1: setTask
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({});

  const openRewardBuilderPopup = reward => {
    setRewardDialogOpen(true);
    setReward(reward);
  };

  const openSquareBuilderPopup = task => {
    setTaskDialogOpen(true);
    setTask(task);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setBoard(contextBoard);
  }, [contextBoard]);

  const generateRow = row => {
    return row.map((square, index) => {
      switch (square.type) {
        case 'reward':
          const reward = board.rewards.length ? board.rewards.filter(reward => reward.position === square.id)[0] : null;

          if (!reward) {
            return __jsx("div", {
              key: `empty${index}`,
              style: {
                width: `${SQUARE_WIDTH}vw`,
                height: `${SQUARE_WIDTH}vw`,
                paddingTop: `${SQUARE_WIDTH * .72}%`,
                maxWidth: 110,
                maxHeight: 110
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 88
              },
              __self: undefined
            });
          }

          return __jsx("button", {
            key: `reward${index}`,
            style: {
              width: `${SQUARE_WIDTH}vw`,
              height: `${SQUARE_WIDTH}vw`,
              // paddingTop: `${SQUARE_WIDTH * .72}%`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'transparent',
              border: 'none',
              outline: 'none',
              cursor: 'pointer',
              maxWidth: 110,
              maxHeight: 110,
              position: 'relative'
            },
            onClick: () => openRewardBuilderPopup(reward),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 99
            },
            __self: undefined
          }, __jsx("img", {
            style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _styles_masterStyles__WEBPACK_IMPORTED_MODULE_2__["MASTER"].smallRewardIcon, {
              width: '70%',
              height: '70%'
            }),
            src: !reward.title && !reward.description && !reward.img ? '../../static/gift_light_gray.png' : '../../static/gift_gray.png',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 118
            },
            __self: undefined
          }));

        case 'task':
          if (!taskNum) {
            return;
          }

          const task = board.squares[taskNum - 1];

          if (taskNum === board.numSquares) {
            taskNum = 0;
          } else {
            taskNum++;
          }

          if (task.freeSquare) {
            return __jsx("button", {
              key: `free${index}`,
              style: {
                width: `${SQUARE_WIDTH}vw`,
                height: `${SQUARE_WIDTH}vw`,
                paddingTop: `${SQUARE_WIDTH * .72}%`,
                backgroundColor: `#${board.completeColor}`,
                borderWidth: 1,
                borderColor: 'black',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                outline: 'none',
                cursor: 'pointer',
                maxWidth: 110,
                maxHeight: 110,
                position: 'relative'
              },
              onClick: () => openSquareBuilderPopup(task),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 140
              },
              __self: undefined
            }, __jsx("img", {
              style: _styles_masterStyles__WEBPACK_IMPORTED_MODULE_2__["MASTER"].freeSquareIcon,
              src: '../../static/circle_check.png',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 160
              },
              __self: undefined
            }));
          }

          return __jsx("button", {
            key: `task${index}`,
            style: {
              width: `${SQUARE_WIDTH}vw`,
              height: `${SQUARE_WIDTH}vw`,
              paddingTop: `${SQUARE_WIDTH * .72}%`,
              backgroundColor: task.freeSquare ? `#${board.completeColor}` : `#${board.incompleteColor}`,
              borderWidth: 1,
              borderColor: 'black',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              outline: 'none',
              cursor: 'pointer',
              maxWidth: 110,
              maxHeight: 110,
              position: 'relative'
            },
            onClick: () => openSquareBuilderPopup(task),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 165
            },
            __self: undefined
          }, __jsx("div", {
            style: _styles_masterStyles__WEBPACK_IMPORTED_MODULE_2__["MASTER"].squareText,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 185
            },
            __self: undefined
          }, task.squareText));

        case 'empty':
          return __jsx("div", {
            key: `empty${index}`,
            style: {
              width: `${SQUARE_WIDTH}vw`,
              height: `${SQUARE_WIDTH}vw`,
              paddingTop: `${SQUARE_WIDTH * .72}%`,
              maxWidth: 110,
              maxHeight: 110,
              position: 'relative'
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 190
            },
            __self: undefined
          });

        default:
          return __jsx("div", {
            key: `empty${index}`,
            style: {
              width: `${SQUARE_WIDTH}vw`,
              height: `${SQUARE_WIDTH}vw`,
              paddingTop: `${SQUARE_WIDTH * .72}%`,
              maxWidth: 110,
              maxHeight: 110,
              position: 'relative'
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 203
            },
            __self: undefined
          });
      }
    });
  };

  const generateBoard = () => {
    const template = _constants_boardSizes__WEBPACK_IMPORTED_MODULE_4__["boardTemplates"][props.size];
    return template.spaces.map((row, index) => {
      return __jsx("div", {
        key: `row${index + 1}`,
        style: {
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'center'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        },
        __self: undefined
      }, generateRow(row));
    });
  };

  if (board) {
    return __jsx("div", {
      style: styles.container,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234
      },
      __self: undefined
    }, generateBoard(props.board), __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_9___default.a, {
      open: rewardDialogOpen,
      onBackdropClick: () => setRewardDialogOpen(false),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 236
      },
      __self: undefined
    }, __jsx(DialogTitle, {
      onClose: () => setRewardDialogOpen(false),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237
      },
      __self: undefined
    }, "EDIT REWARD"), __jsx(_RewardBuilder__WEBPACK_IMPORTED_MODULE_7__["default"], {
      reward: reward,
      openPopup: setRewardDialogOpen,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 240
      },
      __self: undefined
    })), __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_9___default.a, {
      open: taskDialogOpen,
      onBackdropClick: () => setTaskDialogOpen(false),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 242
      },
      __self: undefined
    }, __jsx(DialogTitle, {
      onClose: () => setTaskDialogOpen(false),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243
      },
      __self: undefined
    }, "EDIT TASK"), __jsx(_SquareBuilder__WEBPACK_IMPORTED_MODULE_6__["default"], {
      task: task,
      openPopup: setTaskDialogOpen,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246
      },
      __self: undefined
    })));
  } else {
    return null;
  }
};

const styles = {
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (BoardBuilderBoard);

/***/ }),

/***/ "./components/ManageBoard/BoardBuilder/BuildSquareComponents/BuildCodeTask.js":
/*!************************************************************************************!*\
  !*** ./components/ManageBoard/BoardBuilder/BuildSquareComponents/BuildCodeTask.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_csv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-csv */ "react-csv");
/* harmony import */ var react_csv__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_csv__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Chip */ "@material-ui/core/Chip");
/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_masterStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../styles/masterStyles */ "./styles/masterStyles.js");

var _jsxFileName = "/Users/spencerford/Documents/DEVyall/PersonalProjects/CorporateBingoWeb/components/ManageBoard/BoardBuilder/BuildSquareComponents/BuildCodeTask.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
 // Component imports

 // Material UI
// import Switch from '@material-ui/core/Switch';

 // Style imports



const BuildCodeTask = props => {
  const {
    0: codes,
    1: setCodes
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(props.task.codes.codeList);
  const {
    0: text,
    1: setText
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''); // const [useOnce, setUseOnce] = useState(props.task.codes.useOnce);

  const {
    0: downloadCSV,
    1: setDownloadCSV
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setCodes(codes);
  }, [props.task]);

  const massageCSVData = data => {
    return data.map(code => {
      return [code];
    });
  };

  const exportToCSV = () => {
    setDownloadCSV(true); // reset component to be called again

    setTimeout(() => {
      setDownloadCSV(false);
    }, 500);
  }; // const handleUseOnceChange = () => {
  //     setUseOnce(!useOnce)
  //     props.updateTask('codes', {
  //         codeList: codes,
  //         useOnce: !useOnce,
  //     });
  // }


  const handleCodeDelete = deadCode => {
    const codeList = codes.filter(code => code !== deadCode);
    setCodes(codeList);
    props.updateTask('codes', {
      codeList,
      useOnce: props.task.codes.useOnce
    });
  };

  const addCode = text => {
    if (text) {
      const codeList = codes;

      if (!codeList.includes(text)) {
        setText('');
        codeList.push(text), props.updateTask('codes', {
          codeList: codeList,
          useOnce: props.task.codes.useOnce
        });
      } else {
        alert("Cannot have two identical codes!");
      }
    } else {
      alert('Can\'t add a blank code!');
    }
  };

  const generateCodes = () => {
    return codes.map((code, index) => {
      return __jsx(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_3___default.a, {
        key: `code${index}`,
        label: code,
        onDelete: () => handleCodeDelete(code),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: undefined
      });
    });
  };

  return __jsx("div", {
    style: styles.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  }, __jsx("div", {
    style: styles.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: undefined
  }, codes.length ? __jsx("button", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _styles_masterStyles__WEBPACK_IMPORTED_MODULE_4__["MASTER"].wideRoundBtn, {
      width: 50
    }),
    onClick: () => exportToCSV(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: undefined
  }, __jsx("img", {
    src: '../../../../static/download_white.png',
    alt: "download",
    style: {
      height: 25
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  })) : null, __jsx("input", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _styles_masterStyles__WEBPACK_IMPORTED_MODULE_4__["MASTER"].wideRoundInput, {
      width: 200
    }),
    value: text,
    onChange: e => setText(e.target.value),
    placeholder: 'e.g. foundIt5',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: undefined
  }), __jsx("button", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _styles_masterStyles__WEBPACK_IMPORTED_MODULE_4__["MASTER"].wideRoundBtn, {
      width: 80
    }),
    onClick: () => addCode(text),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: undefined
  }, __jsx("span", {
    style: _styles_masterStyles__WEBPACK_IMPORTED_MODULE_4__["MASTER"].wideRoundBtnText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: undefined
  }, "+ Add"))), generateCodes(), downloadCSV ? __jsx(react_csv__WEBPACK_IMPORTED_MODULE_2__["CSVDownload"], {
    data: massageCSVData(codes),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: undefined
  }) : null);
};

const styles = {
  row: {
    display: 'flex',
    alignItems: 'center',
    maxWidth: '90%',
    justifyContent: 'center'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (BuildCodeTask);

/***/ }),

/***/ "./components/ManageBoard/BoardBuilder/BuildSquareComponents/BuildQRCodeTask.js":
/*!**************************************************************************************!*\
  !*** ./components/ManageBoard/BoardBuilder/BuildSquareComponents/BuildQRCodeTask.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! qrcode.react */ "qrcode.react");
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(qrcode_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_masterStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../styles/masterStyles */ "./styles/masterStyles.js");

var _jsxFileName = "/Users/spencerford/Documents/DEVyall/PersonalProjects/CorporateBingoWeb/components/ManageBoard/BoardBuilder/BuildSquareComponents/BuildQRCodeTask.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

 // Style imports



const BuildQRCodeTask = props => {
  const generateQRCode = () => {
    const canvas = document.getElementById("123456");
    const pngUrl = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = 'bingo_qr_code.png';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return __jsx("div", {
    style: styles.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      marginTop: -10,
      marginBottom: -5
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, __jsx(qrcode_react__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "123456",
    value: `{"tID": "${props.task.id}"}`,
    size: 200,
    level: "Q",
    includeMargin: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  })), __jsx("button", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _styles_masterStyles__WEBPACK_IMPORTED_MODULE_3__["MASTER"].wideRoundBtn, {
      marginTop: 20,
      height: 60,
      width: 200
    }),
    onClick: () => generateQRCode(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, __jsx("span", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _styles_masterStyles__WEBPACK_IMPORTED_MODULE_3__["MASTER"].wideRoundBtnText, {
      fontSize: 22
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, "Download QR Code")));
};

const styles = {};
/* harmony default export */ __webpack_exports__["default"] = (BuildQRCodeTask);

/***/ }),

/***/ "./components/ManageBoard/BoardBuilder/BuildSquareComponents/TaskHints.js":
/*!********************************************************************************!*\
  !*** ./components/ManageBoard/BoardBuilder/BuildSquareComponents/TaskHints.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_csv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-csv */ "react-csv");
/* harmony import */ var react_csv__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_csv__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Chip */ "@material-ui/core/Chip");
/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_masterStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../styles/masterStyles */ "./styles/masterStyles.js");

var _jsxFileName = "/Users/spencerford/Documents/DEVyall/PersonalProjects/CorporateBingoWeb/components/ManageBoard/BoardBuilder/BuildSquareComponents/TaskHints.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
 // Component imports

 // Material UI
// import Switch from '@material-ui/core/Switch';

 // Style imports



const BuildHintTask = props => {
  const {
    0: hints,
    1: setHints
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(props.hints);
  const {
    0: text,
    1: setText
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setHints(hints);
  }, [props.hints]);

  const handleHintDelete = deadHint => {
    const hintList = hints.filter(hint => hint !== deadHint);
    setHints(hintList);
    props.updateTask('hints', hintList);
  };

  const addHint = text => {
    if (text) {
      const hintList = hints;

      if (hintList && !hintList.includes(text)) {
        setText('');
        hintList.push(text), props.updateTask('hints', hintList);
      } else {
        alert("Cannot have two identical hints!");
      }
    } else {
      alert('Can\'t add a blank hint!');
    }
  };

  const generateHints = () => {
    if (hints && hints.length) {
      return hints.map((hint, index) => {
        return __jsx(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_3___default.a, {
          key: `hint${index}`,
          label: hint,
          onDelete: () => handleHintDelete(hint),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: undefined
        });
      });
    }
  };

  return __jsx("div", {
    style: styles.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, __jsx("div", {
    style: styles.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, __jsx("input", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _styles_masterStyles__WEBPACK_IMPORTED_MODULE_4__["MASTER"].wideRoundInput, {
      width: 300,
      marginTop: 0
    }),
    value: text,
    onChange: e => setText(e.target.value),
    placeholder: 'e.g. Behind the mirror',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }), __jsx("button", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _styles_masterStyles__WEBPACK_IMPORTED_MODULE_4__["MASTER"].wideRoundBtn, {
      width: 80,
      marginTop: 0
    }),
    onClick: () => addHint(text),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, __jsx("span", {
    style: _styles_masterStyles__WEBPACK_IMPORTED_MODULE_4__["MASTER"].wideRoundBtnText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, "+ Add"))), __jsx("div", {
    style: {
      width: '90%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, generateHints()));
};

const styles = {
  container: {
    marginTop: 5,
    marginBottom: 10,
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    maxWidth: '90%',
    justifyContent: 'center'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (BuildHintTask);

/***/ }),

/***/ "./components/ManageBoard/BoardBuilder/RewardBuilder.js":
/*!**************************************************************!*\
  !*** ./components/ManageBoard/BoardBuilder/RewardBuilder.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_masterStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../styles/masterStyles */ "./styles/masterStyles.js");
/* harmony import */ var _contexts_manageBoardsContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../contexts/manageBoardsContext */ "./contexts/manageBoardsContext.js");
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dropzone */ "react-dropzone");
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dropzone__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "/Users/spencerford/Documents/DEVyall/PersonalProjects/CorporateBingoWeb/components/ManageBoard/BoardBuilder/RewardBuilder.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;
 // Style imports

 // Context imports

 // Component imports



const RewardBuilder = props => {
  const {
    contextBoard,
    updateBoard,
    setStuffToSave
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_contexts_manageBoardsContext__WEBPACK_IMPORTED_MODULE_4__["ManageBoardsContext"]);
  const {
    0: reward,
    1: setReward
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({});

  const generateHowToEarn = position => {
    if (position === 'wholeBoard') {
      return 'Complete every task on the board!';
    } else if (position.substring(0, 3) === 'row') {
      return `Complete every task in row ${position.slice(-1)}.`;
    } else if (position.substring(0, 3) === 'col') {
      return `Complete every task in column ${position.slice(-1)}.`;
    } else if (position === 'diagonalUpRight') {
      return 'Complete every task in the diagonal from the bottom left square to the top right.';
    }

    return 'Complete every task in the diagonal from the top left square to the bottom right.';
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    if (!contextBoard.id) {
      setReward(props.reward);
    } else {
      setReward(contextBoard.rewards.filter(reward => reward.id === props.reward.id)[0]);
    }

    if (reward.id && !reward.howToEarn) {
      updateReward('howToEarn', generateHowToEarn(reward.position));
    }
  }, [contextBoard]);
  const onDrop = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(acceptedFiles => {
    const reader = new FileReader();

    reader.onabort = () => alert('file reading was aborted');

    reader.onerror = () => alert('file reading has failed');

    const file = acceptedFiles[0]; // if(!supportedFileTypes.includes(file.type)){
    //     this.openSnackBar(<FormattedMessage {...UserMessages.wrongFileType} />);
    // } else if (file.size > 10000000){
    //     this.openSnackBar(<FormattedMessage {...UserMessages.picTooBig} />);
    // } else {

    reader.addEventListener('load', () => setImg(reader.result));
    reader.readAsDataURL(file); // }
  }, []);
  const {
    getRootProps,
    getInputProps,
    isDragActive
  } = Object(react_dropzone__WEBPACK_IMPORTED_MODULE_5__["useDropzone"])({
    onDrop
  });

  const updateReward = (field, val) => {
    const board = contextBoard;
    updateBoard(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, board, {
      rewards: board.rewards.map(oldReward => {
        if (oldReward.id === reward.id) {
          return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, oldReward, {
            [field]: val
          });
        }

        return oldReward;
      })
    }));
    setStuffToSave(true);
  };

  const remove = id => {
    const board = contextBoard;
    updateBoard(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, board, {
      rewards: board.rewards.map(oldReward => {
        if (oldReward.id === id) {
          return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, oldReward, {
            img: '',
            title: '',
            howToEarn: '',
            description: ''
          });
        }

        return oldReward;
      })
    }));
  };

  const done = () => {
    props.openPopup(false);
  };

  if (!reward.id) {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: undefined
    }, "LOADING");
  }

  return __jsx("div", {
    style: styles.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      height: 200,
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: undefined
  }, __jsx("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getRootProps(), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: undefined
  }), __jsx("input", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getInputProps(), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: undefined
  })), console.log({
    reward
  }), !!reward.img ? __jsx("div", {
    style: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: undefined
  }, __jsx("img", {
    style: styles.pic,
    src: reward.img,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: undefined
  }), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: undefined
  }, "(Click image to change)")) : __jsx("div", {
    style: styles.dropzone,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: undefined
  }, __jsx("p", {
    style: {
      textAlign: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: undefined
  }, "Click or drag here to change image"), __jsx("p", {
    style: {
      textAlign: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: undefined
  }, "Put something that'll get the players excited!")))), __jsx("span", {
    style: styles.inputLabel,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: undefined
  }, "Title"), __jsx("input", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _styles_masterStyles__WEBPACK_IMPORTED_MODULE_3__["MASTER"].wideRoundInput, {
      marginTop: 2
    }),
    value: reward.title || '',
    onChange: e => {
      updateReward('title', e.target.value);
      setReward(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, reward, {
        title: e.target.value
      }));
    },
    placeholder: 'e.g. $10 gift card!',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: undefined
  }), __jsx("span", {
    style: styles.inputLabel,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: undefined
  }, "Description"), __jsx("textarea", {
    autoFocus: true,
    style: _styles_masterStyles__WEBPACK_IMPORTED_MODULE_3__["MASTER"].wideRoundTextArea,
    onChange: e => {
      updateReward('description', e.target.value);
      setReward(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, reward, {
        description: e.target.value
      }));
    },
    value: reward.description || '',
    placeholder: 'e.g. A t shirt!',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: undefined
  }), __jsx("span", {
    style: styles.inputLabel,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: undefined
  }, "Item they'll earn (for their player record)"), __jsx("input", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _styles_masterStyles__WEBPACK_IMPORTED_MODULE_3__["MASTER"].wideRoundInput, {
      marginTop: 2
    }),
    value: reward.item || '',
    onChange: e => {
      updateReward('item', e.target.value);
      setReward(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, reward, {
        item: e.target.value
      }));
    },
    placeholder: 'e.g. $10 gift card!',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: undefined
  }), __jsx("span", {
    style: styles.inputLabel,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: undefined
  }, "Points they'll earn (for their player record)"), __jsx("input", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _styles_masterStyles__WEBPACK_IMPORTED_MODULE_3__["MASTER"].wideRoundInput, {
      marginTop: 2
    }),
    value: reward.points || 0,
    onChange: e => {
      updateReward('points', e.target.value);
      setReward(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, reward, {
        points: e.target.value
      }));
    },
    type: "number",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: undefined
  }), __jsx("span", {
    style: styles.inputLabel,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: undefined
  }, "How to earn"), __jsx("textarea", {
    autoFocus: true,
    style: _styles_masterStyles__WEBPACK_IMPORTED_MODULE_3__["MASTER"].wideRoundTextArea,
    onChange: e => {
      updateReward('howToEarn', e.target.value);
      setReward(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, reward, {
        howToEarn: e.target.value
      }));
    },
    value: reward.howToEarn || '',
    placeholder: 'e.g. Complete all the speed goals',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: undefined
  }), __jsx("button", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _styles_masterStyles__WEBPACK_IMPORTED_MODULE_3__["MASTER"].wideRoundBtn, {
      backgroundColor: 'red',
      marginTop: 20
    }),
    onClick: () => remove(reward.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: undefined
  }, __jsx("span", {
    style: _styles_masterStyles__WEBPACK_IMPORTED_MODULE_3__["MASTER"].wideRoundBtnText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: undefined
  }, "Remove Reward")), __jsx("button", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _styles_masterStyles__WEBPACK_IMPORTED_MODULE_3__["MASTER"].wideRoundBtn, {
      marginTop: 20
    }),
    onClick: () => done(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: undefined
  }, __jsx("span", {
    style: _styles_masterStyles__WEBPACK_IMPORTED_MODULE_3__["MASTER"].wideRoundBtnText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: undefined
  }, "Done")));
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 30,
    minWidth: 250,
    width: '30vw'
  },
  pic: {
    width: 200,
    height: 200,
    cursor: 'pointer'
  },
  inputLabel: {
    marginTop: 15,
    color: _styles_masterStyles__WEBPACK_IMPORTED_MODULE_3__["COLORS"].primary,
    fontSize: 17
  },
  dropzone: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 200,
    border: '2px dotted black',
    marginRight: 10,
    cursor: 'pointer',
    outline: 'none'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (RewardBuilder);

/***/ }),

/***/ "./components/ManageBoard/BoardBuilder/SquareBuilder.js":
/*!**************************************************************!*\
  !*** ./components/ManageBoard/BoardBuilder/SquareBuilder.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_masterStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles/masterStyles */ "./styles/masterStyles.js");
/* harmony import */ var _contexts_manageBoardsContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../contexts/manageBoardsContext */ "./contexts/manageBoardsContext.js");
/* harmony import */ var _BuildSquareComponents_BuildQRCodeTask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BuildSquareComponents/BuildQRCodeTask */ "./components/ManageBoard/BoardBuilder/BuildSquareComponents/BuildQRCodeTask.js");
/* harmony import */ var _BuildSquareComponents_BuildCodeTask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BuildSquareComponents/BuildCodeTask */ "./components/ManageBoard/BoardBuilder/BuildSquareComponents/BuildCodeTask.js");
/* harmony import */ var _BuildSquareComponents_TaskHints__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./BuildSquareComponents/TaskHints */ "./components/ManageBoard/BoardBuilder/BuildSquareComponents/TaskHints.js");
/* harmony import */ var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Switch */ "@material-ui/core/Switch");
/* harmony import */ var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Select */ "@material-ui/core/Select");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_9__);

var _jsxFileName = "/Users/spencerford/Documents/DEVyall/PersonalProjects/CorporateBingoWeb/components/ManageBoard/BoardBuilder/SquareBuilder.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
 // Style imports

 // Context imports

 // Component Imports



 // Material UI





const SquareBuilder = props => {
  const generateTaskMethod = taskType => {
    switch (taskType) {
      case 'click':
        return null;

      case 'code':
        return __jsx(_BuildSquareComponents_BuildCodeTask__WEBPACK_IMPORTED_MODULE_5__["default"], {
          task: props.task,
          updateTask: updateTask,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: undefined
        });

      case 'text':
        return __jsx("div", {
          className: "text-builder",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: undefined
        });

      case 'picture':
        return __jsx("div", {
          className: "picture-builder",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: undefined
        }, __jsx("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          __self: undefined
        }));

      case 'qrCode':
        return __jsx(_BuildSquareComponents_BuildQRCodeTask__WEBPACK_IMPORTED_MODULE_4__["default"], {
          task: task,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: undefined
        });
      // case 'proximity':
      //   return <div>proximity</div>;

      default:
        return null;
    }
  };

  const {
    contextBoard,
    updateBoard,
    setStuffToSave
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_manageBoardsContext__WEBPACK_IMPORTED_MODULE_3__["ManageBoardsContext"]);
  const {
    0: task,
    1: setTask
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(props.task);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (!contextBoard.id) {
      setTask(props.task);
    } else {
      setTask(contextBoard.squares.filter(task => task.id === props.task.id)[0]);
    }
  }, [contextBoard]);

  const updateTask = (field, val) => {
    const board = contextBoard;
    updateBoard(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, board, {
      squares: board.squares.map(oldTask => {
        if (oldTask.id === props.task.id) {
          if (field === 'task') {
            return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, oldTask, {
              task: {
                taskType: val,
                answer: ''
              }
            });
          }

          if (field === 'codes') {
            return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, oldTask, {
              codes: {
                codeList: val.codeList,
                useOnce: val.useOnce
              }
            });
          }

          if (field === 'freeSquare') {
            // if a square is a free square, we set it to complete: true, if not, complete false
            return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, oldTask, {
              freeSquare: val,
              complete: val
            });
          }

          return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, oldTask, {
            [field]: val
          });
        }

        return oldTask;
      })
    }));
    setStuffToSave(true);
  };

  const done = () => {
    props.openPopup(false);
  };

  return __jsx("div", {
    style: styles.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: undefined
  }, __jsx(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_7___default.a, {
    onChange: () => updateTask('freeSquare', !task.freeSquare),
    value: task.freeSquare,
    checked: task.freeSquare,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: undefined
  }), __jsx("span", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styles.inputLabel, {
      marginLeft: 5
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: undefined
  }, "This is a free square")), !task.freeSquare && __jsx("div", {
    style: styles.taskSettingsContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: undefined
  }, __jsx("span", {
    style: styles.inputLabel,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: undefined
  }, "Title (will also appear on the square)"), __jsx("input", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _styles_masterStyles__WEBPACK_IMPORTED_MODULE_2__["MASTER"].wideRoundInput, {
      marginTop: 2
    }),
    value: task.squareText || '',
    onChange: e => {
      updateTask('squareText', e.target.value);
      setTask(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, task, {
        squareText: e.target.value
      }));
    },
    placeholder: 'e.g. Two sales in one hour',
    maxLength: "90",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: undefined
  }), __jsx("span", {
    style: styles.inputLabel,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: undefined
  }, "Description"), __jsx("textarea", {
    autoFocus: true,
    style: _styles_masterStyles__WEBPACK_IMPORTED_MODULE_2__["MASTER"].wideRoundTextArea,
    onChange: e => {
      updateTask('description', e.target.value);
      setTask(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, task, {
        description: e.target.value
      }));
    },
    value: task.description || '',
    placeholder: 'e.g. Make two sales in one hour and enter their ids below!',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: undefined
  }), __jsx("span", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styles.inputLabel, {
      marginRight: 10,
      marginLeft: 5
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: undefined
  }, "Hints:"), __jsx(_BuildSquareComponents_TaskHints__WEBPACK_IMPORTED_MODULE_6__["default"], {
    updateTask: updateTask,
    hints: task.hints,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: undefined
  }), __jsx("span", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styles.inputLabel, {
      marginRight: 10,
      marginLeft: 5
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: undefined
  }, "Task to complete:"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_8___default.a, {
    displayEmpty: false,
    value: task.task.taskType,
    onChange: e => updateTask('task', e.target.value),
    inputProps: {
      name: 'num squares',
      id: 'num-squares-select'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: undefined
  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_9___default.a, {
    value: "click",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: undefined
  }, "Flip a switch"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_9___default.a, {
    value: "code",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: undefined
  }, "Enter a code"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_9___default.a, {
    value: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: undefined
  }, "Enter some text"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_9___default.a, {
    value: "picture",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: undefined
  }, "Upload a picture"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_9___default.a, {
    value: "qrCode",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: undefined
  }, "Scan a QR Code")), __jsx("div", {
    style: {
      marginTop: 20
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: undefined
  }, generateTaskMethod(task.task.taskType)), __jsx("button", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _styles_masterStyles__WEBPACK_IMPORTED_MODULE_2__["MASTER"].wideRoundBtn, {
      marginTop: 20
    }),
    onClick: () => done(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: undefined
  }, __jsx("span", {
    style: _styles_masterStyles__WEBPACK_IMPORTED_MODULE_2__["MASTER"].wideRoundBtnText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: undefined
  }, "Done"))));
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 30,
    paddingTop: 0,
    width: '30vw',
    minWidth: 300
  },
  taskSettingsContainer: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '100%'
  },
  completedContainer: {
    position: 'absolute',
    left: '50%',
    top: '20%',
    zIndex: 115
  },
  completedText: {
    color: _styles_masterStyles__WEBPACK_IMPORTED_MODULE_2__["COLORS"].green,
    position: 'relative',
    left: '-50%',
    top: '-50%',
    fontSize: 45,
    transform: 'rotateZ(345deg)'
  },
  inputLabel: {
    marginTop: 15,
    color: _styles_masterStyles__WEBPACK_IMPORTED_MODULE_2__["COLORS"].primary,
    fontSize: 17
  }
};
/* harmony default export */ __webpack_exports__["default"] = (SquareBuilder);

/***/ }),

/***/ "./components/ManageBoard/BoardRewards.js":
/*!************************************************!*\
  !*** ./components/ManageBoard/BoardRewards.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_masterStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/masterStyles */ "./styles/masterStyles.js");
var _jsxFileName = "/Users/spencerford/Documents/DEVyall/PersonalProjects/CorporateBingoWeb/components/ManageBoard/BoardRewards.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // context imports
// Style imports



const BoardRewards = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const {
    0: userAlias,
    1: setUserName
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: password,
    1: setPassword
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  return __jsx("div", {
    style: styles.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx("div", {
    style: styles.subcontainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx("div", {
    style: _styles_masterStyles__WEBPACK_IMPORTED_MODULE_2__["MASTER"].pageTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, "REWARDS")));
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    paddingTop: 40
  }
};
/* harmony default export */ __webpack_exports__["default"] = (BoardRewards);

/***/ }),

/***/ "./components/ManageBoard/BoardSettings.js":
/*!*************************************************!*\
  !*** ./components/ManageBoard/BoardSettings.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants/constants */ "./constants/constants.js");
/* harmony import */ var _contexts_manageBoardsContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../contexts/manageBoardsContext */ "./contexts/manageBoardsContext.js");
/* harmony import */ var _styles_masterStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/masterStyles */ "./styles/masterStyles.js");
/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-color */ "react-color");
/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_color__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-dropzone */ "react-dropzone");
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_dropzone__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! qrcode.react */ "qrcode.react");
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(qrcode_react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Switch */ "@material-ui/core/Switch");
/* harmony import */ var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Select */ "@material-ui/core/Select");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_13__);


var _jsxFileName = "/Users/spencerford/Documents/DEVyall/PersonalProjects/CorporateBingoWeb/components/ManageBoard/BoardSettings.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

 // Constants

 // Context imports

 // Style imports

 // Component Imports



 // Material UI





const BoardSettings = props => {
  const {
    contextBoard,
    updateBoard,
    setStuffToSave
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_contexts_manageBoardsContext__WEBPACK_IMPORTED_MODULE_6__["ManageBoardsContext"]);
  const {
    0: board,
    1: setBoard
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(contextBoard);
  const {
    0: hasTimeLimit,
    1: setHasTimeLimit
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(!!props.board.timeLimit);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    if (!contextBoard.id) {
      setBoard(props.board);
    } else {
      setBoard(contextBoard);
    }
  }, [contextBoard]);

  const changeRegularValues = (name, val) => {
    updateBoard(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, board, {
      [name]: val
    }));
    setStuffToSave(true);
  };

  const changeUseGroups = bool => {
    updateBoard(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, board, {
      accessCode: '',
      teams: [...board.teams],
      useTeams: bool
    }));
    setStuffToSave(true);
  };

  const changeTeams = teams => {
    updateBoard(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, board, {
      teams: teams
    }));
    setStuffToSave(true);
  };

  const deleteTeam = id => {
    // show a popup confirming they want to remove a team, let them know it'll delete any games associate with that team
    changeTeams(board.teams.filter(team => team.id !== id));
  };

  const addTeam = () => {
    changeTeams([...board.teams, {
      id: `team${Math.random()}`,
      name: '',
      accessCode: ''
    }]);
  };

  const downloadQRCode = (id, title, type) => {
    const canvas = document.getElementById(id);
    const pngUrl = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = `${title}-${type}-code-${id}.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  const onDrop = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(acceptedFiles => {
    const reader = new FileReader();

    reader.onabort = () => alert('file reading was aborted');

    reader.onerror = () => alert('file reading has failed');

    const file = acceptedFiles[0]; // if(!supportedFileTypes.includes(file.type)){
    //     this.openSnackBar(<FormattedMessage {...UserMessages.wrongFileType} />);
    // } else if (file.size > 10000000){
    //     this.openSnackBar(<FormattedMessage {...UserMessages.picTooBig} />);
    // } else {

    reader.addEventListener('load', () => changeRegularValues('freeSquareIcon', reader.result));
    reader.readAsDataURL(file); // }
  }, []);
  const {
    getRootProps,
    getInputProps,
    isDragActive
  } = Object(react_dropzone__WEBPACK_IMPORTED_MODULE_9__["useDropzone"])({
    onDrop
  });

  const generateTeams = () => {
    return contextBoard.teams.map((team, index) => {
      return __jsx("div", {
        key: `team-id-${index}`,
        style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, styles.labelColumn, {
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 10
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: undefined
      }, __jsx("span", {
        style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, styles.inputLabel, {
          marginLeft: 5,
          marginRight: 5
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: undefined
      }, "Team Name: "), __jsx("input", {
        style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _styles_masterStyles__WEBPACK_IMPORTED_MODULE_7__["MASTER"].wideRoundInput, {
          marginTop: 5,
          width: 'auto',
          padding: '0 20px 0 20px',
          maxWidth: 700
        }),
        value: team.name || '',
        onChange: e => changeTeams(board.teams.map(group => {
          if (group.id === team.id) {
            return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, group, {
              name: e.target.value
            });
          }

          return group;
        })),
        placeholder: 'e.g. Team Alpha',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: undefined
      }), __jsx("span", {
        style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, styles.inputLabel, {
          marginLeft: 10,
          marginRight: 5
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: undefined
      }, "Access Code: "), __jsx("input", {
        style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _styles_masterStyles__WEBPACK_IMPORTED_MODULE_7__["MASTER"].wideRoundInput, {
          marginTop: 5,
          width: 'auto',
          padding: '0 20px 0 20px',
          maxWidth: 700
        }),
        value: team.accessCode || '',
        onChange: e => changeTeams(board.teams.map(group => {
          if (group.id === team.id) {
            return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, group, {
              accessCode: e.target.value
            });
          }

          return group;
        })),
        placeholder: 'e.g. teamAlphaRulez',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: undefined
      }), team.accessCode && team.name ? __jsx("button", {
        style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _styles_masterStyles__WEBPACK_IMPORTED_MODULE_7__["MASTER"].wideRoundBtn, {
          width: 60,
          marginTop: 4,
          marginLeft: 10,
          height: 35
        }),
        onClick: () => downloadQRCode(team.accessCode, board.title, 'team'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: undefined
      }, __jsx("img", {
        style: {
          height: 20
        },
        src: '../../static/qr_code_white.png',
        alt: "qr code",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: undefined
      })) : __jsx("button", {
        style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _styles_masterStyles__WEBPACK_IMPORTED_MODULE_7__["MASTER"].wideRoundBtn, {
          width: 60,
          marginTop: 4,
          marginLeft: 10,
          height: 35,
          backgroundColor: 'gray'
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: undefined
      }, __jsx("img", {
        style: {
          height: 20
        },
        src: '../../static/qr_code_white.png',
        alt: "qr code",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: undefined
      })), __jsx("div", {
        style: {
          cursor: 'pointer'
        },
        onClick: () => deleteTeam(team.id),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: undefined
      }, __jsx("img", {
        src: '../../static/GarbageCan.png',
        alt: "Delete",
        style: {
          height: 40,
          marginLeft: 10
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: undefined
      })), __jsx("div", {
        style: {
          display: 'none'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: undefined
      }, __jsx(qrcode_react__WEBPACK_IMPORTED_MODULE_10___default.a, {
        id: team.accessCode,
        value: `{"i": "${board.id}", "c": "${team.accessCode}"}`,
        size: 200,
        level: "Q",
        includeMargin: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: undefined
      })));
    });
  };

  if (!board.id) {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164
      },
      __self: undefined
    }, "LOADING");
  }

  return __jsx("div", {
    style: styles.container,
    className: "jsx-3167707233",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: undefined
  }, __jsx("div", {
    style: styles.subcontainer,
    className: "jsx-3167707233",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: undefined
  }, __jsx("div", {
    style: styles.row,
    className: "jsx-3167707233",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: undefined
  }, __jsx("div", {
    style: styles.labelColumn,
    className: "jsx-3167707233",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: undefined
  }, __jsx("span", {
    style: styles.inputLabel,
    className: "jsx-3167707233",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: undefined
  }, "Title"), __jsx("input", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _styles_masterStyles__WEBPACK_IMPORTED_MODULE_7__["MASTER"].wideRoundInput, {
      marginTop: 5,
      width: 'auto',
      padding: '0 20px 0 20px',
      maxWidth: 700
    }),
    value: contextBoard.title,
    onChange: e => changeRegularValues('title', e.target.value),
    placeholder: 'e.g. Sales',
    className: "jsx-3167707233",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: undefined
  }))), __jsx("div", {
    style: styles.row,
    className: "jsx-3167707233",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: undefined
  }, __jsx("div", {
    style: styles.labelColumn,
    className: "jsx-3167707233",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: undefined
  }, __jsx("span", {
    style: styles.inputLabel,
    className: "jsx-3167707233",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: undefined
  }, "Description/Instructions/Hint"), __jsx("textarea", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _styles_masterStyles__WEBPACK_IMPORTED_MODULE_7__["MASTER"].wideRoundTextArea, {
      marginTop: 5,
      width: 'auto',
      padding: '5px 20px',
      maxWidth: 700
    }),
    value: contextBoard.description || '',
    onChange: e => changeRegularValues('description', e.target.value),
    placeholder: 'e.g. To be done on the first day in a new office',
    className: "jsx-3167707233",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: undefined
  }))), __jsx("div", {
    style: styles.row,
    className: "jsx-3167707233" + " " + 'num-squares-randomize',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: undefined
  }, __jsx("div", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, styles.labelColumn, {
      flexDirection: 'row',
      alignItems: 'center'
    }),
    className: "jsx-3167707233",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: undefined
  }, __jsx("span", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, styles.inputLabel, {
      marginRight: 10,
      marginLeft: 5
    }),
    className: "jsx-3167707233",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: undefined
  }, "Number of squares:"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_12___default.a, {
    displayEmpty: false,
    value: board.numSquares,
    onChange: e => changeRegularValues('numSquares', e.target.value),
    inputProps: {
      name: 'num squares',
      id: 'num-squares-select'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: undefined
  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_13___default.a, {
    value: "4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: undefined
  }, "4"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_13___default.a, {
    value: "9",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: undefined
  }, "9"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_13___default.a, {
    value: "16",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: undefined
  }, "16"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_13___default.a, {
    value: "25",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: undefined
  }, "25"))), __jsx("div", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, styles.labelColumn, {
      flexDirection: 'row',
      alignItems: 'center'
    }),
    className: "jsx-3167707233",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: undefined
  }, __jsx(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_11___default.a, {
    onChange: () => changeRegularValues('randomize', !board.randomize),
    value: board.randomize,
    checked: board.randomize,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: undefined
  }), __jsx("span", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, styles.inputLabel, {
      marginLeft: 5
    }),
    className: "jsx-3167707233",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: undefined
  }, "Randomize square placement"))), __jsx("div", {
    style: styles.row,
    className: "jsx-3167707233",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: undefined
  }, __jsx("div", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, styles.labelColumn, {
      flexDirection: 'row',
      alignItems: 'center'
    }),
    className: "jsx-3167707233",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: undefined
  }, __jsx(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_11___default.a, {
    onChange: () => changeRegularValues('mustBeDoneInOrder', !board.mustBeDoneInOrder),
    value: board.mustBeDoneInOrder,
    checked: board.mustBeDoneInOrder,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: undefined
  }), __jsx("span", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, styles.inputLabel, {
      marginLeft: 5
    }),
    className: "jsx-3167707233",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: undefined
  }, "Squares must be done in order")), __jsx("div", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, styles.labelColumn, {
      flexDirection: 'row',
      alignItems: 'center'
    }),
    className: "jsx-3167707233",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    },
    __self: undefined
  }, __jsx(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_11___default.a, {
    onChange: () => {
      if (!!board.timeLimit) {
        setHasTimeLimit(false);
        changeRegularValues('timeLimit', null);
      } else {
        setHasTimeLimit(true);
        changeRegularValues('timeLimit', 'min15');
      }
    },
    value: !!board.timeLimit,
    checked: !!board.timeLimit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: undefined
  }), __jsx("span", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, styles.inputLabel, {
      marginRight: 5,
      marginLeft: 5
    }),
    className: "jsx-3167707233",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242
    },
    __self: undefined
  }, "Time limit:"), hasTimeLimit ? __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_12___default.a, {
    displayEmpty: false,
    value: board.timeLimit,
    onChange: e => changeRegularValues('timeLimit', e.target.value),
    inputProps: {
      name: 'age',
      id: 'demo-controlled-open-select'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244
    },
    __self: undefined
  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_13___default.a, {
    value: 10000,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253
    },
    __self: undefined
  }, "10 seconds"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_13___default.a, {
    value: 900000,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254
    },
    __self: undefined
  }, "15 minutes"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_13___default.a, {
    value: 1800000,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255
    },
    __self: undefined
  }, "30 minutes"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_13___default.a, {
    value: 3600000,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256
    },
    __self: undefined
  }, "1 hour"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_13___default.a, {
    value: 7200000,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257
    },
    __self: undefined
  }, "2 hours"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_13___default.a, {
    value: 14400000,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258
    },
    __self: undefined
  }, "4 hours"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_13___default.a, {
    value: 28800000,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259
    },
    __self: undefined
  }, "8 hours"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_13___default.a, {
    value: 43200000,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260
    },
    __self: undefined
  }, "12 hours"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_13___default.a, {
    value: 86400000,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261
    },
    __self: undefined
  }, "24 hours"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_13___default.a, {
    value: 604800000,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262
    },
    __self: undefined
  }, "1 week")) : __jsx("span", {
    className: "jsx-3167707233",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264
    },
    __self: undefined
  }, "None"))), __jsx("div", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, styles.labelColumn, {
      marginTop: 15,
      flexDirection: 'row',
      alignItems: 'center'
    }),
    className: "jsx-3167707233",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268
    },
    __self: undefined
  }, __jsx(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_11___default.a, {
    onChange: () => changeRegularValues('redeemRewards', !board.redeemRewards),
    value: board.redeemRewards,
    checked: board.redeemRewards,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269
    },
    __self: undefined
  }), __jsx("span", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, styles.inputLabel, {
      marginLeft: 5
    }),
    className: "jsx-3167707233",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274
    },
    __self: undefined
  }, "Rewards must be redeemed")), __jsx("div", {
    style: styles.row,
    className: "jsx-3167707233",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276
    },
    __self: undefined
  }, __jsx("div", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, styles.labelColumn, {
      flexDirection: 'row',
      alignItems: 'center'
    }),
    className: "jsx-3167707233",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277
    },
    __self: undefined
  }, __jsx(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_11___default.a, {
    onChange: () => changeUseGroups(!board.useTeams),
    value: board.useTeams,
    checked: board.useTeams,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278
    },
    __self: undefined
  }), __jsx("span", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, styles.inputLabel, {
      marginLeft: 5
    }),
    className: "jsx-3167707233",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283
    },
    __self: undefined
  }, "Teams"), board.useTeams && __jsx("button", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _styles_masterStyles__WEBPACK_IMPORTED_MODULE_7__["MASTER"].wideRoundBtn, {
      width: 80,
      marginTop: 0,
      marginLeft: 10,
      height: 25
    }),
    onClick: () => addTeam(),
    className: "jsx-3167707233",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285
    },
    __self: undefined
  }, __jsx("div", {
    style: _styles_masterStyles__WEBPACK_IMPORTED_MODULE_7__["MASTER"].wideRoundBtnText,
    className: "jsx-3167707233",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289
    },
    __self: undefined
  }, "+ NEW")))), board.useTeams && __jsx("div", {
    style: styles.row,
    className: "jsx-3167707233" + " " + "teams-section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295
    },
    __self: undefined
  }, __jsx("div", {
    style: styles.labelColumn,
    className: "jsx-3167707233",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296
    },
    __self: undefined
  }, generateTeams())), !board.useTeams && __jsx("div", {
    style: styles.row,
    className: "jsx-3167707233",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302
    },
    __self: undefined
  }, __jsx("div", {
    style: styles.labelColumn,
    className: "jsx-3167707233",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303
    },
    __self: undefined
  }, __jsx("span", {
    style: styles.inputLabel,
    className: "jsx-3167707233",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304
    },
    __self: undefined
  }, "Code to Access Board"), __jsx("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    },
    className: "jsx-3167707233",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305
    },
    __self: undefined
  }, __jsx("input", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _styles_masterStyles__WEBPACK_IMPORTED_MODULE_7__["MASTER"].wideRoundInput, {
      marginTop: 5,
      width: 300,
      padding: '0 20px 0 20px',
      maxWidth: 700
    }),
    value: contextBoard.accessCode,
    onChange: e => changeRegularValues('accessCode', e.target.value),
    placeholder: 'e.g. Sales',
    className: "jsx-3167707233",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306
    },
    __self: undefined
  }), board.accessCode ? __jsx("button", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _styles_masterStyles__WEBPACK_IMPORTED_MODULE_7__["MASTER"].wideRoundBtn, {
      width: 100,
      marginTop: 5,
      marginLeft: 5
    }),
    onClick: () => downloadQRCode(board.accessCode, board.title, 'board'),
    className: "jsx-3167707233",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313
    },
    __self: undefined
  }, __jsx("div", {
    style: _styles_masterStyles__WEBPACK_IMPORTED_MODULE_7__["MASTER"].wideRoundBtnText,
    className: "jsx-3167707233",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317
    },
    __self: undefined
  }, "QR Code")) : __jsx("button", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _styles_masterStyles__WEBPACK_IMPORTED_MODULE_7__["MASTER"].wideRoundBtn, {
      width: 100,
      backgroundColor: 'gray',
      marginTop: 5,
      marginLeft: 5,
      cursor: 'auto'
    }),
    className: "jsx-3167707233",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320
    },
    __self: undefined
  }, __jsx("div", {
    style: _styles_masterStyles__WEBPACK_IMPORTED_MODULE_7__["MASTER"].wideRoundBtnText,
    className: "jsx-3167707233",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323
    },
    __self: undefined
  }, "QR Code")), __jsx("div", {
    className: "jsx-3167707233" + " " + 'QR-maker',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326
    },
    __self: undefined
  }, __jsx(qrcode_react__WEBPACK_IMPORTED_MODULE_10___default.a, {
    id: board.accessCode,
    value: `{"i": "${board.id}", "c": ""}`,
    size: 200,
    level: "Q",
    includeMargin: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327
    },
    __self: undefined
  }))))), __jsx("div", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, styles.row, {
      justifyContent: 'flex-start'
    }),
    className: "jsx-3167707233",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339
    },
    __self: undefined
  }, __jsx("span", {
    style: styles.inputLabel,
    className: "jsx-3167707233",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340
    },
    __self: undefined
  }, "Set Square Colors")), __jsx("div", {
    style: styles.row,
    className: "jsx-3167707233",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342
    },
    __self: undefined
  }, __jsx("div", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, styles.labelColumn, {
      alignItems: 'center',
      flexDirection: 'row'
    }),
    className: "jsx-3167707233",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343
    },
    __self: undefined
  }, __jsx(react_color__WEBPACK_IMPORTED_MODULE_8__["ChromePicker"], {
    color: board.incompleteColor,
    onChange: (color, e) => changeRegularValues('incompleteColor', color.hex.substring(1, color.hex.length)),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344
    },
    __self: undefined
  }), __jsx("span", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, styles.exampleSquare, {
      backgroundColor: `#${board.incompleteColor}`
    }),
    className: "jsx-3167707233" + " " + 'incomplete-color',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345
    },
    __self: undefined
  }, "Incomplete Square Example")), __jsx("div", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, styles.labelColumn, {
      alignItems: 'center',
      flexDirection: 'row'
    }),
    className: "jsx-3167707233",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347
    },
    __self: undefined
  }, __jsx(react_color__WEBPACK_IMPORTED_MODULE_8__["ChromePicker"], {
    color: board.completeColor,
    onChange: (color, e) => changeRegularValues('completeColor', color.hex.substring(1, color.hex.length)),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 349
    },
    __self: undefined
  }), __jsx("span", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, styles.exampleSquare, {
      backgroundColor: `#${board.completeColor}`
    }),
    className: "jsx-3167707233" + " " + 'complete-color',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 350
    },
    __self: undefined
  }, "Complete Square Example"))), __jsx("div", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, styles.row, {
      justifyContent: 'flex-start'
    }),
    className: "jsx-3167707233",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353
    },
    __self: undefined
  }, __jsx("span", {
    style: styles.inputLabel,
    className: "jsx-3167707233",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 354
    },
    __self: undefined
  }, "Set \"Free Square\" Image")), __jsx("div", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, styles.row, {
      justifyContent: 'flex-start'
    }),
    className: "jsx-3167707233",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356
    },
    __self: undefined
  }, __jsx("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getRootProps(), {
    className: "jsx-3167707233",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357
    },
    __self: undefined
  }), __jsx("input", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getInputProps(), {
    className: "jsx-3167707233",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358
    },
    __self: undefined
  })), isDragActive ? __jsx("div", {
    style: styles.dropzone,
    className: "jsx-3167707233",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 361
    },
    __self: undefined
  }, __jsx("p", {
    style: {
      textAlign: 'center'
    },
    className: "jsx-3167707233",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362
    },
    __self: undefined
  }, "Click or drag to upload an image"), __jsx("p", {
    style: {
      textAlign: 'center'
    },
    className: "jsx-3167707233",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363
    },
    __self: undefined
  }, "Images must be square, and images with a transparent background work best.")) : __jsx("div", {
    style: styles.dropzone,
    className: "jsx-3167707233",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365
    },
    __self: undefined
  }, __jsx("p", {
    style: {
      textAlign: 'center'
    },
    className: "jsx-3167707233",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 366
    },
    __self: undefined
  }, "Click or drag here to change image"), __jsx("p", {
    style: {
      textAlign: 'center'
    },
    className: "jsx-3167707233",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 367
    },
    __self: undefined
  }, "Images must be square, and images with a transparent background work best."))), __jsx("div", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, styles.exampleSquare, {
      backgroundColor: `#${board.completeColor}`
    }),
    className: "jsx-3167707233",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 371
    },
    __self: undefined
  }, __jsx("img", {
    style: styles.image,
    src: !board.freeSquareIcon || board.freeSquareIcon === 'default' ? '../../static/circle_check.png' : board.freeSquareIcon,
    className: "jsx-3167707233",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372
    },
    __self: undefined
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "3167707233",
    __self: undefined
  }, ".jsx-3167707233::-webkit-scrollbar{width:10px;}.jsx-3167707233::-webkit-scrollbar-track{background:#f1f1f1;}.jsx-3167707233::-webkit-scrollbar-thumb{background:#888;}.jsx-3167707233::-webkit-scrollbar-thumb:hover{background:#555;}.QR-maker.jsx-3167707233{display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zcGVuY2VyZm9yZC9Eb2N1bWVudHMvREVWeWFsbC9QZXJzb25hbFByb2plY3RzL0NvcnBvcmF0ZUJpbmdvV2ViL2NvbXBvbmVudHMvTWFuYWdlQm9hcmQvQm9hcmRTZXR0aW5ncy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3WGlCLEFBSWtDLEFBS1EsQUFLSCxBQUtBLEFBR0QsV0FqQmpCLEVBa0JBLEdBUkEsQUFLQSxHQVZBIiwiZmlsZSI6Ii9Vc2Vycy9zcGVuY2VyZm9yZC9Eb2N1bWVudHMvREVWeWFsbC9QZXJzb25hbFByb2plY3RzL0NvcnBvcmF0ZUJpbmdvV2ViL2NvbXBvbmVudHMvTWFuYWdlQm9hcmQvQm9hcmRTZXR0aW5ncy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cbi8vIENvbnN0YW50c1xuaW1wb3J0IHsgdGVhbUNvZGVQcmVmaXggfSBmcm9tICcuLi8uLi9jb25zdGFudHMvY29uc3RhbnRzJztcblxuLy8gQ29udGV4dCBpbXBvcnRzXG5pbXBvcnQgeyBNYW5hZ2VCb2FyZHNDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dHMvbWFuYWdlQm9hcmRzQ29udGV4dCc7XG5cbi8vIFN0eWxlIGltcG9ydHNcbmltcG9ydCB7IE1BU1RFUiwgQ09MT1JTIH0gZnJvbSAnLi4vLi4vc3R5bGVzL21hc3RlclN0eWxlcyc7XG5cbi8vIENvbXBvbmVudCBJbXBvcnRzXG5pbXBvcnQgeyBDaHJvbWVQaWNrZXIgfSBmcm9tICdyZWFjdC1jb2xvcic7XG5pbXBvcnQge3VzZURyb3B6b25lfSBmcm9tICdyZWFjdC1kcm9wem9uZSc7XG5pbXBvcnQgUVJDb2RlIGZyb20gJ3FyY29kZS5yZWFjdCc7XG5cbi8vIE1hdGVyaWFsIFVJXG5pbXBvcnQgU3dpdGNoIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1N3aXRjaCc7XG5pbXBvcnQgU2VsZWN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NlbGVjdCc7XG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW0nO1xuXG5jb25zdCBCb2FyZFNldHRpbmdzID0gKHByb3BzKSA9PiB7XG5cbiAgICBjb25zdCB7IGNvbnRleHRCb2FyZCwgdXBkYXRlQm9hcmQsIHNldFN0dWZmVG9TYXZlIH0gPSB1c2VDb250ZXh0KE1hbmFnZUJvYXJkc0NvbnRleHQpO1xuXG4gICAgY29uc3QgW2JvYXJkLCBzZXRCb2FyZF0gPSB1c2VTdGF0ZShjb250ZXh0Qm9hcmQpO1xuICAgIGNvbnN0IFtoYXNUaW1lTGltaXQsIHNldEhhc1RpbWVMaW1pdF0gPSB1c2VTdGF0ZSghIXByb3BzLmJvYXJkLnRpbWVMaW1pdCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZighY29udGV4dEJvYXJkLmlkKXtcbiAgICAgICAgICAgIHNldEJvYXJkKHByb3BzLmJvYXJkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldEJvYXJkKGNvbnRleHRCb2FyZCk7XG4gICAgICAgIH1cbiAgICB9LCBbY29udGV4dEJvYXJkXSlcblxuICAgIGNvbnN0IGNoYW5nZVJlZ3VsYXJWYWx1ZXMgPSAobmFtZSwgdmFsKSA9PiB7XG4gICAgICAgIHVwZGF0ZUJvYXJkKHtcbiAgICAgICAgICAgIC4uLmJvYXJkLFxuICAgICAgICAgICAgW25hbWVdOiB2YWxcbiAgICAgICAgfSlcbiAgICAgICAgc2V0U3R1ZmZUb1NhdmUodHJ1ZSk7XG4gICAgfVxuXG4gICAgY29uc3QgY2hhbmdlVXNlR3JvdXBzID0gYm9vbCA9PiB7XG4gICAgICAgIHVwZGF0ZUJvYXJkKHtcbiAgICAgICAgICAgIC4uLmJvYXJkLFxuICAgICAgICAgICAgYWNjZXNzQ29kZTogJycsXG4gICAgICAgICAgICB0ZWFtczogW1xuICAgICAgICAgICAgICAgIC4uLmJvYXJkLnRlYW1zLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHVzZVRlYW1zOiBib29sXG4gICAgICAgIH0pO1xuICAgICAgICBzZXRTdHVmZlRvU2F2ZSh0cnVlKTtcbiAgICB9XG5cbiAgICBjb25zdCBjaGFuZ2VUZWFtcyA9IHRlYW1zID0+IHtcbiAgICAgICAgdXBkYXRlQm9hcmQoe1xuICAgICAgICAgICAgLi4uYm9hcmQsXG4gICAgICAgICAgICB0ZWFtczogdGVhbXMsXG4gICAgICAgIH0pO1xuICAgICAgICBzZXRTdHVmZlRvU2F2ZSh0cnVlKTtcbiAgICB9XG5cblxuICAgIGNvbnN0IGRlbGV0ZVRlYW0gPSBpZCA9PiB7XG4gICAgICAgIC8vIHNob3cgYSBwb3B1cCBjb25maXJtaW5nIHRoZXkgd2FudCB0byByZW1vdmUgYSB0ZWFtLCBsZXQgdGhlbSBrbm93IGl0J2xsIGRlbGV0ZSBhbnkgZ2FtZXMgYXNzb2NpYXRlIHdpdGggdGhhdCB0ZWFtXG4gICAgICAgIGNoYW5nZVRlYW1zKGJvYXJkLnRlYW1zLmZpbHRlcih0ZWFtID0+IHRlYW0uaWQgIT09IGlkKSk7XG4gICAgfVxuXG4gICAgY29uc3QgYWRkVGVhbSA9ICgpID0+IHtcbiAgICAgICAgY2hhbmdlVGVhbXMoWy4uLmJvYXJkLnRlYW1zLCB7aWQ6IGB0ZWFtJHtNYXRoLnJhbmRvbSgpfWAsIG5hbWU6ICcnLCBhY2Nlc3NDb2RlOiAnJ31dKTtcbiAgICB9XG5cbiAgICBjb25zdCBkb3dubG9hZFFSQ29kZSA9IChpZCwgdGl0bGUsIHR5cGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICAgICAgICAgIGNvbnN0IHBuZ1VybCA9IGNhbnZhc1xuICAgICAgICAgICAgICAgIC50b0RhdGFVUkwoXCJpbWFnZS9wbmdcIilcbiAgICAgICAgICAgICAgICAucmVwbGFjZShcImltYWdlL3BuZ1wiLCBcImltYWdlL29jdGV0LXN0cmVhbVwiKTtcbiAgICAgICAgICAgIGxldCBkb3dubG9hZExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgICAgICAgIGRvd25sb2FkTGluay5ocmVmID0gcG5nVXJsO1xuICAgICAgICAgICAgZG93bmxvYWRMaW5rLmRvd25sb2FkID0gYCR7dGl0bGV9LSR7dHlwZX0tY29kZS0ke2lkfS5wbmdgO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkb3dubG9hZExpbmspO1xuICAgICAgICAgICAgZG93bmxvYWRMaW5rLmNsaWNrKCk7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRvd25sb2FkTGluayk7XG4gICAgfVxuXG4gICAgY29uc3Qgb25Ecm9wID0gdXNlQ2FsbGJhY2soYWNjZXB0ZWRGaWxlcyA9PiB7XG4gICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgIHJlYWRlci5vbmFib3J0ID0gKCkgPT4gYWxlcnQoJ2ZpbGUgcmVhZGluZyB3YXMgYWJvcnRlZCcpXG4gICAgICAgIHJlYWRlci5vbmVycm9yID0gKCkgPT4gYWxlcnQoJ2ZpbGUgcmVhZGluZyBoYXMgZmFpbGVkJylcbiAgICAgICAgY29uc3QgZmlsZSA9IGFjY2VwdGVkRmlsZXNbMF07XG4gICAgICAgIC8vIGlmKCFzdXBwb3J0ZWRGaWxlVHlwZXMuaW5jbHVkZXMoZmlsZS50eXBlKSl7XG4gICAgICAgIC8vICAgICB0aGlzLm9wZW5TbmFja0Jhcig8Rm9ybWF0dGVkTWVzc2FnZSB7Li4uVXNlck1lc3NhZ2VzLndyb25nRmlsZVR5cGV9IC8+KTtcbiAgICAgICAgLy8gfSBlbHNlIGlmIChmaWxlLnNpemUgPiAxMDAwMDAwMCl7XG4gICAgICAgIC8vICAgICB0aGlzLm9wZW5TbmFja0Jhcig8Rm9ybWF0dGVkTWVzc2FnZSB7Li4uVXNlck1lc3NhZ2VzLnBpY1Rvb0JpZ30gLz4pO1xuICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAgICAgcmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PlxuICAgICAgICAgICAgICAgIGNoYW5nZVJlZ3VsYXJWYWx1ZXMoJ2ZyZWVTcXVhcmVJY29uJywgcmVhZGVyLnJlc3VsdClcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcbiAgICAgICAgLy8gfVxuICAgIH0sIFtdKTtcbiAgICBjb25zdCB7Z2V0Um9vdFByb3BzLCBnZXRJbnB1dFByb3BzLCBpc0RyYWdBY3RpdmV9ID0gdXNlRHJvcHpvbmUoe29uRHJvcH0pXG5cbiAgICBjb25zdCBnZW5lcmF0ZVRlYW1zID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gY29udGV4dEJvYXJkLnRlYW1zLm1hcCgodGVhbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2B0ZWFtLWlkLSR7aW5kZXh9YH0gc3R5bGU9e3sgLi4uc3R5bGVzLmxhYmVsQ29sdW1uLCBmbGV4RGlyZWN0aW9uOiAncm93JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIG1hcmdpblRvcDogMTB9fT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgLi4uc3R5bGVzLmlucHV0TGFiZWwsICBtYXJnaW5MZWZ0OiA1LCBtYXJnaW5SaWdodDogNX19PlRlYW0gTmFtZTogPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyAuLi5NQVNURVIud2lkZVJvdW5kSW5wdXQsIG1hcmdpblRvcDogNSwgd2lkdGg6ICdhdXRvJywgcGFkZGluZzogJzAgMjBweCAwIDIwcHgnLCBtYXhXaWR0aDogNzAwIH19IFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RlYW0ubmFtZSB8fCAnJ30gXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBjaGFuZ2VUZWFtcyhib2FyZC50ZWFtcy5tYXAoZ3JvdXAgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGdyb3VwLmlkID09PSB0ZWFtLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7Li4uZ3JvdXAsIG5hbWU6IGUudGFyZ2V0LnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ3JvdXA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSl9IFxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9eydlLmcuIFRlYW0gQWxwaGEnfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyAuLi5zdHlsZXMuaW5wdXRMYWJlbCwgIG1hcmdpbkxlZnQ6IDEwLCBtYXJnaW5SaWdodDogNX19PkFjY2VzcyBDb2RlOiA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IC4uLk1BU1RFUi53aWRlUm91bmRJbnB1dCwgbWFyZ2luVG9wOiA1LCB3aWR0aDogJ2F1dG8nLCBwYWRkaW5nOiAnMCAyMHB4IDAgMjBweCcsIG1heFdpZHRoOiA3MDAgfX0gXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGVhbS5hY2Nlc3NDb2RlIHx8ICcnfSBcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IGNoYW5nZVRlYW1zKGJvYXJkLnRlYW1zLm1hcChncm91cCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoZ3JvdXAuaWQgPT09IHRlYW0uaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsuLi5ncm91cCwgYWNjZXNzQ29kZTogZS50YXJnZXQudmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBncm91cDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXsnZS5nLiB0ZWFtQWxwaGFSdWxleid9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIHt0ZWFtLmFjY2Vzc0NvZGUgJiYgdGVhbS5uYW1lID9cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IC4uLk1BU1RFUi53aWRlUm91bmRCdG4sIHdpZHRoOiA2MCwgbWFyZ2luVG9wOiA0LCBtYXJnaW5MZWZ0OiAxMCwgaGVpZ2h0OiAzNSB9fSBcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRvd25sb2FkUVJDb2RlKHRlYW0uYWNjZXNzQ29kZSwgYm9hcmQudGl0bGUsICd0ZWFtJyl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgaGVpZ2h0OiAyMCB9fSBzcmM9eycuLi8uLi9zdGF0aWMvcXJfY29kZV93aGl0ZS5wbmcnfSBhbHQ9J3FyIGNvZGUnIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA6IDxidXR0b24gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgLi4uTUFTVEVSLndpZGVSb3VuZEJ0biwgd2lkdGg6IDYwLCBtYXJnaW5Ub3A6IDQsIG1hcmdpbkxlZnQ6IDEwLCBoZWlnaHQ6IDM1LCBiYWNrZ3JvdW5kQ29sb3I6ICdncmF5JyB9fSBcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IGhlaWdodDogMjAgfX0gc3JjPXsnLi4vLi4vc3RhdGljL3FyX2NvZGVfd2hpdGUucG5nJ30gYWx0PSdxciBjb2RlJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fSBvbkNsaWNrPXsoKSA9PiBkZWxldGVUZWFtKHRlYW0uaWQpfT48aW1nIHNyYz17Jy4uLy4uL3N0YXRpYy9HYXJiYWdlQ2FuLnBuZyd9IGFsdD0nRGVsZXRlJyBzdHlsZT17eyBoZWlnaHQ6IDQwLCBtYXJnaW5MZWZ0OiAxMCB9fSAvPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxRUkNvZGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17dGVhbS5hY2Nlc3NDb2RlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtge1wiaVwiOiBcIiR7Ym9hcmQuaWR9XCIsIFwiY1wiOiBcIiR7dGVhbS5hY2Nlc3NDb2RlfVwifWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17MjAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsPXtcIlFcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmNsdWRlTWFyZ2luPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGlmKCFib2FyZC5pZCl7XG4gICAgICAgIHJldHVybiA8ZGl2PkxPQURJTkc8L2Rpdj5cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5zdWJjb250YWluZXJ9PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5yb3d9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMubGFiZWxDb2x1bW59PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3N0eWxlcy5pbnB1dExhYmVsfT5UaXRsZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyAuLi5NQVNURVIud2lkZVJvdW5kSW5wdXQsIG1hcmdpblRvcDogNSwgd2lkdGg6ICdhdXRvJywgcGFkZGluZzogJzAgMjBweCAwIDIwcHgnLCBtYXhXaWR0aDogNzAwIH19IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjb250ZXh0Qm9hcmQudGl0bGV9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IGNoYW5nZVJlZ3VsYXJWYWx1ZXMoJ3RpdGxlJywgZS50YXJnZXQudmFsdWUpfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17J2UuZy4gU2FsZXMnfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLnJvd30+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5sYWJlbENvbHVtbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17c3R5bGVzLmlucHV0TGFiZWx9PkRlc2NyaXB0aW9uL0luc3RydWN0aW9ucy9IaW50PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IC4uLk1BU1RFUi53aWRlUm91bmRUZXh0QXJlYSwgbWFyZ2luVG9wOiA1LCB3aWR0aDogJ2F1dG8nLCBwYWRkaW5nOiAnNXB4IDIwcHgnLCBtYXhXaWR0aDogNzAwIH19IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjb250ZXh0Qm9hcmQuZGVzY3JpcHRpb24gfHwgJyd9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IGNoYW5nZVJlZ3VsYXJWYWx1ZXMoJ2Rlc2NyaXB0aW9uJywgZS50YXJnZXQudmFsdWUpfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17J2UuZy4gVG8gYmUgZG9uZSBvbiB0aGUgZmlyc3QgZGF5IGluIGEgbmV3IG9mZmljZSd9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMucm93fSBjbGFzc05hbWU9J251bS1zcXVhcmVzLXJhbmRvbWl6ZSc+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgLi4uc3R5bGVzLmxhYmVsQ29sdW1uLCBmbGV4RGlyZWN0aW9uOiAncm93JywgYWxpZ25JdGVtczogJ2NlbnRlcid9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IC4uLnN0eWxlcy5pbnB1dExhYmVsLCBtYXJnaW5SaWdodDogMTAsIG1hcmdpbkxlZnQ6IDV9fT5OdW1iZXIgb2Ygc3F1YXJlczo8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheUVtcHR5PXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Ym9hcmQubnVtU3F1YXJlc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGNoYW5nZVJlZ3VsYXJWYWx1ZXMoJ251bVNxdWFyZXMnLCBlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnbnVtIHNxdWFyZXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogJ251bS1zcXVhcmVzLXNlbGVjdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCI0XCI+NDwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiOVwiPjk8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIjE2XCI+MTY8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIjI1XCI+MjU8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IC4uLnN0eWxlcy5sYWJlbENvbHVtbiwgZmxleERpcmVjdGlvbjogJ3JvdycsIGFsaWduSXRlbXM6ICdjZW50ZXInfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U3dpdGNoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7KCkgPT4gY2hhbmdlUmVndWxhclZhbHVlcygncmFuZG9taXplJywgIWJvYXJkLnJhbmRvbWl6ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7Ym9hcmQucmFuZG9taXplfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2JvYXJkLnJhbmRvbWl6ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyAuLi5zdHlsZXMuaW5wdXRMYWJlbCwgIG1hcmdpbkxlZnQ6IDV9fT5SYW5kb21pemUgc3F1YXJlIHBsYWNlbWVudDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLnJvd30+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgLi4uc3R5bGVzLmxhYmVsQ29sdW1uLCBmbGV4RGlyZWN0aW9uOiAncm93JywgYWxpZ25JdGVtczogJ2NlbnRlcid9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTd2l0Y2hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZSA9IHsoKSA9PiBjaGFuZ2VSZWd1bGFyVmFsdWVzKCdtdXN0QmVEb25lSW5PcmRlcicsICFib2FyZC5tdXN0QmVEb25lSW5PcmRlcil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7Ym9hcmQubXVzdEJlRG9uZUluT3JkZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17Ym9hcmQubXVzdEJlRG9uZUluT3JkZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgLi4uc3R5bGVzLmlucHV0TGFiZWwsICBtYXJnaW5MZWZ0OiA1fX0+U3F1YXJlcyBtdXN0IGJlIGRvbmUgaW4gb3JkZXI8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IC4uLnN0eWxlcy5sYWJlbENvbHVtbiwgZmxleERpcmVjdGlvbjogJ3JvdycsIGFsaWduSXRlbXM6ICdjZW50ZXInfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U3dpdGNoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZighIWJvYXJkLnRpbWVMaW1pdCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRIYXNUaW1lTGltaXQoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlUmVndWxhclZhbHVlcygndGltZUxpbWl0JywgbnVsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRIYXNUaW1lTGltaXQodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VSZWd1bGFyVmFsdWVzKCd0aW1lTGltaXQnLCAnbWluMTUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7ISFib2FyZC50aW1lTGltaXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17ISFib2FyZC50aW1lTGltaXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgLi4uc3R5bGVzLmlucHV0TGFiZWwsIG1hcmdpblJpZ2h0OiA1LCBtYXJnaW5MZWZ0OiA1fX0+VGltZSBsaW1pdDo8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aGFzVGltZUxpbWl0ID8gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5RW1wdHk9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Ym9hcmQudGltZUxpbWl0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGNoYW5nZVJlZ3VsYXJWYWx1ZXMoJ3RpbWVMaW1pdCcsIGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2FnZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogJ2RlbW8tY29udHJvbGxlZC1vcGVuLXNlbGVjdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9ezEwMDAwfT4xMCBzZWNvbmRzPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXs5MDAwMDB9PjE1IG1pbnV0ZXM8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9ezE4MDAwMDB9PjMwIG1pbnV0ZXM8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9ezM2MDAwMDB9PjEgaG91cjwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17NzIwMDAwMH0+MiBob3VyczwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17MTQ0MDAwMDB9PjQgaG91cnM8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9ezI4ODAwMDAwfT44IGhvdXJzPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXs0MzIwMDAwMH0+MTIgaG91cnM8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9ezg2NDAwMDAwfT4yNCBob3VyczwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17NjA0ODAwMDAwfT4xIHdlZWs8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPHNwYW4+Tm9uZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgLi4uc3R5bGVzLmxhYmVsQ29sdW1uLCBtYXJnaW5Ub3A6IDE1LCBmbGV4RGlyZWN0aW9uOiAncm93JywgYWxpZ25JdGVtczogJ2NlbnRlcid9fT5cbiAgICAgICAgICAgICAgICAgICAgPFN3aXRjaFxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7KCkgPT4gY2hhbmdlUmVndWxhclZhbHVlcygncmVkZWVtUmV3YXJkcycsICFib2FyZC5yZWRlZW1SZXdhcmRzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0ge2JvYXJkLnJlZGVlbVJld2FyZHN9XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtib2FyZC5yZWRlZW1SZXdhcmRzfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyAuLi5zdHlsZXMuaW5wdXRMYWJlbCwgIG1hcmdpbkxlZnQ6IDV9fT5SZXdhcmRzIG11c3QgYmUgcmVkZWVtZWQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLnJvd30+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgLi4uc3R5bGVzLmxhYmVsQ29sdW1uLCBmbGV4RGlyZWN0aW9uOiAncm93JywgYWxpZ25JdGVtczogJ2NlbnRlcid9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTd2l0Y2hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZSA9IHsoKSA9PiBjaGFuZ2VVc2VHcm91cHMoIWJvYXJkLnVzZVRlYW1zKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHtib2FyZC51c2VUZWFtc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtib2FyZC51c2VUZWFtc31cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyAuLi5zdHlsZXMuaW5wdXRMYWJlbCwgIG1hcmdpbkxlZnQ6IDV9fT5UZWFtczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtib2FyZC51c2VUZWFtcyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IC4uLk1BU1RFUi53aWRlUm91bmRCdG4sIHdpZHRoOiA4MCwgbWFyZ2luVG9wOiAwLCBtYXJnaW5MZWZ0OiAxMCwgaGVpZ2h0OiAyNSB9fSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYWRkVGVhbSgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17TUFTVEVSLndpZGVSb3VuZEJ0blRleHR9PisgTkVXPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHtib2FyZC51c2VUZWFtcyAmJlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMucm93fSBjbGFzc05hbWU9XCJ0ZWFtcy1zZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMubGFiZWxDb2x1bW59PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtnZW5lcmF0ZVRlYW1zKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHshYm9hcmQudXNlVGVhbXMgJiZcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLnJvd30+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMubGFiZWxDb2x1bW59PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXtzdHlsZXMuaW5wdXRMYWJlbH0+Q29kZSB0byBBY2Nlc3MgQm9hcmQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcid9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgLi4uTUFTVEVSLndpZGVSb3VuZElucHV0LCBtYXJnaW5Ub3A6IDUsIHdpZHRoOiAzMDAsIHBhZGRpbmc6ICcwIDIwcHggMCAyMHB4JywgbWF4V2lkdGg6IDcwMCB9fSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjb250ZXh0Qm9hcmQuYWNjZXNzQ29kZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBjaGFuZ2VSZWd1bGFyVmFsdWVzKCdhY2Nlc3NDb2RlJywgZS50YXJnZXQudmFsdWUpfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXsnZS5nLiBTYWxlcyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtib2FyZC5hY2Nlc3NDb2RlID8gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IC4uLk1BU1RFUi53aWRlUm91bmRCdG4sIHdpZHRoOiAxMDAsIG1hcmdpblRvcDogNSwgbWFyZ2luTGVmdDogNSB9fSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkb3dubG9hZFFSQ29kZShib2FyZC5hY2Nlc3NDb2RlLCBib2FyZC50aXRsZSwgJ2JvYXJkJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17TUFTVEVSLndpZGVSb3VuZEJ0blRleHR9PlFSIENvZGU8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgLi4uTUFTVEVSLndpZGVSb3VuZEJ0biwgd2lkdGg6IDEwMCwgYmFja2dyb3VuZENvbG9yOiAnZ3JheScsIG1hcmdpblRvcDogNSwgbWFyZ2luTGVmdDogNSwgY3Vyc29yOiAnYXV0bycgfX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17TUFTVEVSLndpZGVSb3VuZEJ0blRleHR9PlFSIENvZGU8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdRUi1tYWtlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UVJDb2RlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2JvYXJkLmFjY2Vzc0NvZGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2B7XCJpXCI6IFwiJHtib2FyZC5pZH1cIiwgXCJjXCI6IFwiXCJ9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPXsyMDB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWw9e1wiUVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1ZGVNYXJnaW49e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgLi4uc3R5bGVzLnJvdywganVzdGlmeUNvbnRlbnQ6ICdmbGV4LXN0YXJ0JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3N0eWxlcy5pbnB1dExhYmVsfT5TZXQgU3F1YXJlIENvbG9yczwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMucm93fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyAuLi5zdHlsZXMubGFiZWxDb2x1bW4sIGFsaWduSXRlbXM6ICdjZW50ZXInLCBmbGV4RGlyZWN0aW9uOiAncm93JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaHJvbWVQaWNrZXIgY29sb3I9e2JvYXJkLmluY29tcGxldGVDb2xvcn0gb25DaGFuZ2U9eyhjb2xvciwgZSkgPT4gY2hhbmdlUmVndWxhclZhbHVlcygnaW5jb21wbGV0ZUNvbG9yJywgY29sb3IuaGV4LnN1YnN0cmluZygxLCBjb2xvci5oZXgubGVuZ3RoKSl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2luY29tcGxldGUtY29sb3InIHN0eWxlPXt7IC4uLnN0eWxlcy5leGFtcGxlU3F1YXJlLCBiYWNrZ3JvdW5kQ29sb3I6IGAjJHtib2FyZC5pbmNvbXBsZXRlQ29sb3J9YH19PkluY29tcGxldGUgU3F1YXJlIEV4YW1wbGU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IC4uLnN0eWxlcy5sYWJlbENvbHVtbiwgYWxpZ25JdGVtczogJ2NlbnRlcicsIGZsZXhEaXJlY3Rpb246ICdyb3cnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIHtjb25zb2xlLmxvZyh7Ym9hcmR9KX0gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2hyb21lUGlja2VyIGNvbG9yPXtib2FyZC5jb21wbGV0ZUNvbG9yfSBvbkNoYW5nZT17KGNvbG9yLCBlKSA9PiBjaGFuZ2VSZWd1bGFyVmFsdWVzKCdjb21wbGV0ZUNvbG9yJywgY29sb3IuaGV4LnN1YnN0cmluZygxLCBjb2xvci5oZXgubGVuZ3RoKSl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2NvbXBsZXRlLWNvbG9yJyBzdHlsZT17eyAuLi5zdHlsZXMuZXhhbXBsZVNxdWFyZSwgYmFja2dyb3VuZENvbG9yOiBgIyR7Ym9hcmQuY29tcGxldGVDb2xvcn1gfX0+Q29tcGxldGUgU3F1YXJlIEV4YW1wbGU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgLi4uc3R5bGVzLnJvdywganVzdGlmeUNvbnRlbnQ6ICdmbGV4LXN0YXJ0JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3N0eWxlcy5pbnB1dExhYmVsfT5TZXQgXCJGcmVlIFNxdWFyZVwiIEltYWdlPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgLi4uc3R5bGVzLnJvdywganVzdGlmeUNvbnRlbnQ6ICdmbGV4LXN0YXJ0JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiB7Li4uZ2V0Um9vdFByb3BzKCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHsuLi5nZXRJbnB1dFByb3BzKCl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc0RyYWdBY3RpdmUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5kcm9wem9uZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7dGV4dEFsaWduOiAnY2VudGVyJ319PkNsaWNrIG9yIGRyYWcgdG8gdXBsb2FkIGFuIGltYWdlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e3RleHRBbGlnbjogJ2NlbnRlcid9fT5JbWFnZXMgbXVzdCBiZSBzcXVhcmUsIGFuZCBpbWFnZXMgd2l0aCBhIHRyYW5zcGFyZW50IGJhY2tncm91bmQgd29yayBiZXN0LjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuZHJvcHpvbmV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e3RleHRBbGlnbjogJ2NlbnRlcid9fT5DbGljayBvciBkcmFnIGhlcmUgdG8gY2hhbmdlIGltYWdlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e3RleHRBbGlnbjogJ2NlbnRlcid9fT5JbWFnZXMgbXVzdCBiZSBzcXVhcmUsIGFuZCBpbWFnZXMgd2l0aCBhIHRyYW5zcGFyZW50IGJhY2tncm91bmQgd29yayBiZXN0LjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgLi4uc3R5bGVzLmV4YW1wbGVTcXVhcmUsIGJhY2tncm91bmRDb2xvcjogYCMke2JvYXJkLmNvbXBsZXRlQ29sb3J9YH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17c3R5bGVzLmltYWdlfSBzcmM9eyFib2FyZC5mcmVlU3F1YXJlSWNvbiB8fCBib2FyZC5mcmVlU3F1YXJlSWNvbiA9PT0gJ2RlZmF1bHQnID8gJy4uLy4uL3N0YXRpYy9jaXJjbGVfY2hlY2sucG5nJyAgOiBib2FyZC5mcmVlU3F1YXJlSWNvbn0gIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PiAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgICAgICAvKiB3aWR0aCAqL1xuICAgICAgICAgICAgICAgICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLyogVHJhY2sgKi9cbiAgICAgICAgICAgICAgICAgICAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2YxZjFmMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLyogSGFuZGxlICovXG4gICAgICAgICAgICAgICAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM4ODg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8qIEhhbmRsZSBvbiBob3ZlciAqL1xuICAgICAgICAgICAgICAgICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNTU1O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5RUi1tYWtlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbiAgfTtcblxuICBjb25zdCBzdHlsZXMgPSB7XG4gICAgICBjb250YWluZXI6IHtcbiAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICAgIG1heEhlaWdodDogNzAwLFxuICAgICAgICAgIG92ZXJmbG93WTogJ3Njcm9sbCcsXG4gICAgICAgICAgb3ZlcmZsb3dYOiAnb3ZlcmxheScsXG4gICAgICAgICAgcGFkZGluZ0JvdHRvbTogMTAsXG4gICAgICAgICAgcGFkZGluZzogJzMlIDUlJyxcbiAgICAgIH0sXG4gICAgICBzdWJjb250YWluZXI6IHtcbiAgICAgIH0sXG4gICAgICByb3c6IHtcbiAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIC8vICAgZmxleFdyYXA6ICd3cmFwJyxcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWFyb3VuZCcsXG4gICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICBtYXJnaW5Ub3A6IDE1XG4gICAgICB9LFxuICAgICAgbGFiZWxDb2x1bW46IHtcbiAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgIG1pbldpZHRoOiAzMDAsXG4gICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgfSxcbiAgICAgIGlucHV0TGFiZWw6IHtcbiAgICAgICAgICBtYXJnaW5MZWZ0OiAxNSxcbiAgICAgICAgICBjb2xvcjogQ09MT1JTLnByaW1hcnksXG4gICAgICAgICAgZm9udFNpemU6IDE3LFxuICAgICAgfSxcbiAgICAgIGV4YW1wbGVTcXVhcmU6IHtcbiAgICAgICAgICB3aWR0aDogMjAwLFxuICAgICAgICAgIGhlaWdodDogMjAwLFxuICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkIGJsYWNrJyxcbiAgICAgICAgICBtYXJnaW5SaWdodDogMTAsXG4gICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgIH0sXG4gICAgICBpbWFnZToge1xuICAgICAgICAgIHdpZHRoOiAnODAlJyxcbiAgICAgICAgICBoZWlnaHQ6ICc4MCUnLFxuICAgICAgfSxcbiAgICAgIGRyb3B6b25lOiB7XG4gICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLCBcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgd2lkdGg6IDIwMCxcbiAgICAgICAgaGVpZ2h0OiAyMDAsXG4gICAgICAgIGJvcmRlcjogJzJweCBkb3R0ZWQgYmxhY2snLFxuICAgICAgICBtYXJnaW5SaWdodDogMTAsXG4gICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgfVxuICB9XG4gIFxuICBleHBvcnQgZGVmYXVsdCBCb2FyZFNldHRpbmdzOyJdfQ== */\n/*@ sourceURL=/Users/spencerford/Documents/DEVyall/PersonalProjects/CorporateBingoWeb/components/ManageBoard/BoardSettings.js */"));
};

const styles = {
  container: {
    width: '100%',
    height: '100%',
    maxHeight: 700,
    overflowY: 'scroll',
    overflowX: 'overlay',
    paddingBottom: 10,
    padding: '3% 5%'
  },
  subcontainer: {},
  row: {
    display: 'flex',
    //   flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 15
  },
  labelColumn: {
    width: '100%',
    minWidth: 300,
    display: 'flex',
    flexDirection: 'column'
  },
  inputLabel: {
    marginLeft: 15,
    color: _styles_masterStyles__WEBPACK_IMPORTED_MODULE_7__["COLORS"].primary,
    fontSize: 17
  },
  exampleSquare: {
    width: 200,
    height: 200,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid black',
    marginRight: 10,
    textAlign: 'center',
    color: 'white'
  },
  image: {
    width: '80%',
    height: '80%'
  },
  dropzone: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 200,
    border: '2px dotted black',
    marginRight: 10,
    cursor: 'pointer',
    outline: 'none'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (BoardSettings);

/***/ }),

/***/ "./components/ManageBoard/ManageBoardContainer.js":
/*!********************************************************!*\
  !*** ./components/ManageBoard/ManageBoardContainer.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_masterStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/masterStyles */ "./styles/masterStyles.js");
/* harmony import */ var _BoardSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BoardSettings */ "./components/ManageBoard/BoardSettings.js");
/* harmony import */ var _TeamOrPlayers_BoardTeamsOrPlayers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TeamOrPlayers/BoardTeamsOrPlayers */ "./components/ManageBoard/TeamOrPlayers/BoardTeamsOrPlayers.js");
/* harmony import */ var _BoardBuilder_BoardBuilder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BoardBuilder/BoardBuilder */ "./components/ManageBoard/BoardBuilder/BoardBuilder.js");
/* harmony import */ var _BoardRewards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BoardRewards */ "./components/ManageBoard/BoardRewards.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Tabs */ "@material-ui/core/Tabs");
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Tab */ "@material-ui/core/Tab");
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "/Users/spencerford/Documents/DEVyall/PersonalProjects/CorporateBingoWeb/components/ManageBoard/ManageBoardContainer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // context imports
// Style imports

 // Component imports




 // Material UI





const ManageBoardContainer = props => {
  const {
    0: tab,
    1: setTab
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: component,
    1: setComponent
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(__jsx(_BoardSettings__WEBPACK_IMPORTED_MODULE_2__["default"], {
    changesMade: props.changesMade,
    board: props.board,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }));

  const selectTab = tab => {
    setTab(tab);

    switch (tab) {
      case 0:
        setComponent(__jsx(_BoardSettings__WEBPACK_IMPORTED_MODULE_2__["default"], {
          changesMade: props.changesMade,
          board: props.board,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: undefined
        }));
        return;

      case 1:
        setComponent(__jsx(_BoardBuilder_BoardBuilder__WEBPACK_IMPORTED_MODULE_4__["default"], {
          changesMade: props.changesMade,
          board: props.board,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: undefined
        }));
        return;

      case 2:
        setComponent(__jsx(_TeamOrPlayers_BoardTeamsOrPlayers__WEBPACK_IMPORTED_MODULE_3__["default"], {
          changesMade: props.changesMade,
          boardID: props.board.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          },
          __self: undefined
        }));
        return;

      case 3:
        setComponent(__jsx(_BoardRewards__WEBPACK_IMPORTED_MODULE_5__["default"], {
          changesMade: props.changesMade,
          board: props.board,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: undefined
        }));
        return;

      default:
        setComponent(__jsx(_BoardSettings__WEBPACK_IMPORTED_MODULE_2__["default"], {
          changesMade: props.changesMade,
          board: props.board,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          __self: undefined
        }));
        return;
    }
  };

  return __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, __jsx(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_7___default.a, {
    value: tab,
    indicatorColor: "primary",
    textColor: "primary",
    onChange: (e, val) => selectTab(val),
    "aria-label": "manage boards views tabs",
    variant: "fullWidth",
    centered: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_8___default.a, {
    label: "Settings",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }), __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_8___default.a, {
    label: "Board",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }), __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_8___default.a, {
    label: "Games",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }), __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_8___default.a, {
    label: "Rewards",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  })), __jsx("div", {
    style: {
      borderTop: `1px solid ${_styles_masterStyles__WEBPACK_IMPORTED_MODULE_1__["COLORS"].primary}`,
      maxHeight: 800,
      display: 'flex',
      justifyContent: 'center',
      overflowY: 'scroll'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, component));
};

/* harmony default export */ __webpack_exports__["default"] = (ManageBoardContainer);

/***/ }),

/***/ "./components/ManageBoard/ManageBoardsIndex.js":
/*!*****************************************************!*\
  !*** ./components/ManageBoard/ManageBoardsIndex.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _contexts_manageBoardsContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../contexts/manageBoardsContext */ "./contexts/manageBoardsContext.js");
/* harmony import */ var _styles_masterStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/masterStyles */ "./styles/masterStyles.js");
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Layout */ "./components/Layout.js");
/* harmony import */ var _ManageBoardContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ManageBoardContainer */ "./components/ManageBoard/ManageBoardContainer.js");

var _jsxFileName = "/Users/spencerford/Documents/DEVyall/PersonalProjects/CorporateBingoWeb/components/ManageBoard/ManageBoardsIndex.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

 // context imports

 // Style imports

 // component imports




const ManageBoardsIndex = props => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const {
    contextBoard,
    getBoard,
    setStuffToSave,
    stuffToSave,
    saveBoard
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_contexts_manageBoardsContext__WEBPACK_IMPORTED_MODULE_4__["ManageBoardsContext"]);
  const {
    0: board,
    1: setBoard
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({});
  const {
    0: changesToSave,
    1: setChangesToSave
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    if (!contextBoard.id) {
      getBoard(router.query.boardID);
    } else {
      setBoard(contextBoard);
    }

    if (changesToSave) {
      setStuffToSave(true);
    }
  }, [contextBoard, changesToSave]);

  if (board && board.id) {
    return __jsx(_Layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: undefined
    }, __jsx("div", {
      style: styles.container,
      className: "jsx-494546971",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: undefined
    }, __jsx("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20
      },
      className: "jsx-494546971",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: undefined
    }, __jsx("div", {
      style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _styles_masterStyles__WEBPACK_IMPORTED_MODULE_5__["MASTER"].pageTitle),
      className: "jsx-494546971",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: undefined
    }, "MANAGING BOARD: ", board.title), stuffToSave ? __jsx("button", {
      style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _styles_masterStyles__WEBPACK_IMPORTED_MODULE_5__["MASTER"].wideRoundBtn, {
        width: 150,
        margin: 0
      }),
      onClick: () => saveBoard(),
      className: "jsx-494546971" + " " + 'pulse-btn',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: undefined
    }, __jsx("div", {
      style: _styles_masterStyles__WEBPACK_IMPORTED_MODULE_5__["MASTER"].wideRoundBtnText,
      className: "jsx-494546971",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: undefined
    }, "SAVE")) : __jsx("button", {
      style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _styles_masterStyles__WEBPACK_IMPORTED_MODULE_5__["MASTER"].wideRoundBtn, {
        width: 150,
        margin: 0,
        backgroundColor: 'gray'
      }),
      className: "jsx-494546971",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: undefined
    }, __jsx("div", {
      style: _styles_masterStyles__WEBPACK_IMPORTED_MODULE_5__["MASTER"].wideRoundBtnText,
      className: "jsx-494546971",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: undefined
    }, "SAVE"))), __jsx(_ManageBoardContainer__WEBPACK_IMPORTED_MODULE_7__["default"], {
      board: board,
      changesMade: setChangesToSave,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: undefined
    })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "494546971",
      __self: undefined
    }, ".pulse-btn.jsx-494546971{-webkit-animation:shadow-pulse-jsx-494546971 1.5s infinite;animation:shadow-pulse-jsx-494546971 1.5s infinite;}@-webkit-keyframes shadow-pulse-jsx-494546971{0%{box-shadow:0 0 0 0px rgba(0,0,0,0.2);}100%{box-shadow:0 0 0 30px rgba(0,0,0,0);}}@keyframes shadow-pulse-jsx-494546971{0%{box-shadow:0 0 0 0px rgba(0,0,0,0.2);}100%{box-shadow:0 0 0 30px rgba(0,0,0,0);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zcGVuY2VyZm9yZC9Eb2N1bWVudHMvREVWeWFsbC9QZXJzb25hbFByb2plY3RzL0NvcnBvcmF0ZUJpbmdvV2ViL2NvbXBvbmVudHMvTWFuYWdlQm9hcmQvTWFuYWdlQm9hcmRzSW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeURpQixBQUc0RCxBQUlTLEFBR0Qsb0NBQzNDLENBSEEseUVBSkoiLCJmaWxlIjoiL1VzZXJzL3NwZW5jZXJmb3JkL0RvY3VtZW50cy9ERVZ5YWxsL1BlcnNvbmFsUHJvamVjdHMvQ29ycG9yYXRlQmluZ29XZWIvY29tcG9uZW50cy9NYW5hZ2VCb2FyZC9NYW5hZ2VCb2FyZHNJbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cbi8vIGNvbnRleHQgaW1wb3J0c1xuaW1wb3J0IHsgTWFuYWdlQm9hcmRzQ29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHRzL21hbmFnZUJvYXJkc0NvbnRleHQnO1xuXG4vLyBTdHlsZSBpbXBvcnRzXG5pbXBvcnQgeyBNQVNURVIsIENPTE9SUyB9IGZyb20gJy4uLy4uL3N0eWxlcy9tYXN0ZXJTdHlsZXMnO1xuXG4vLyBjb21wb25lbnQgaW1wb3J0c1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9MYXlvdXQnO1xuaW1wb3J0IE1hbmFnZUJvYXJkQ29udGFpbmVyIGZyb20gJy4vTWFuYWdlQm9hcmRDb250YWluZXInO1xuXG5cbmNvbnN0IE1hbmFnZUJvYXJkc0luZGV4ID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgICBcbiAgICBjb25zdCB7IGNvbnRleHRCb2FyZCwgZ2V0Qm9hcmQsIHNldFN0dWZmVG9TYXZlLCBzdHVmZlRvU2F2ZSwgc2F2ZUJvYXJkIH0gPSB1c2VDb250ZXh0KE1hbmFnZUJvYXJkc0NvbnRleHQpO1xuXG4gIGNvbnN0IFtib2FyZCwgc2V0Qm9hcmRdID0gdXNlU3RhdGUoe30pO1xuICBjb25zdCBbY2hhbmdlc1RvU2F2ZSwgc2V0Q2hhbmdlc1RvU2F2ZV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmKCFjb250ZXh0Qm9hcmQuaWQpe1xuICAgICAgICBnZXRCb2FyZChyb3V0ZXIucXVlcnkuYm9hcmRJRCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc2V0Qm9hcmQoY29udGV4dEJvYXJkKTtcbiAgICB9XG4gICAgaWYoY2hhbmdlc1RvU2F2ZSl7XG4gICAgICAgIHNldFN0dWZmVG9TYXZlKHRydWUpXG4gICAgfVxufSwgW2NvbnRleHRCb2FyZCwgY2hhbmdlc1RvU2F2ZV0pXG5cbiAgXG5pZihib2FyZCAmJiBib2FyZC5pZCl7XG4gICAgcmV0dXJuIChcbiAgICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBtYXJnaW5Cb3R0b206IDIwIH19PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IC4uLk1BU1RFUi5wYWdlVGl0bGUgfX0+TUFOQUdJTkcgQk9BUkQ6IHtib2FyZC50aXRsZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAge3N0dWZmVG9TYXZlID9cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IC4uLk1BU1RFUi53aWRlUm91bmRCdG4sIHdpZHRoOiAxNTAsIG1hcmdpbjogMCB9fSBcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNhdmVCb2FyZCgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdwdWxzZS1idG4nXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e01BU1RFUi53aWRlUm91bmRCdG5UZXh0fT5TQVZFPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPiA6XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyAuLi5NQVNURVIud2lkZVJvdW5kQnRuLCB3aWR0aDogMTUwLCBtYXJnaW46IDAsIGJhY2tncm91bmRDb2xvcjogJ2dyYXknIH19IFxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtNQVNURVIud2lkZVJvdW5kQnRuVGV4dH0+U0FWRTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj59XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPE1hbmFnZUJvYXJkQ29udGFpbmVyIGJvYXJkPXtib2FyZH0gY2hhbmdlc01hZGU9e3NldENoYW5nZXNUb1NhdmV9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAgICAgLnB1bHNlLWJ0biB7XG4gICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBzaGFkb3ctcHVsc2UgMS41cyBpbmZpbml0ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIHNoYWRvdy1wdWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMzBweCByZ2JhKDAsIDAsIDAsIDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvTGF5b3V0PlxuXG5cbiAgICAgIFxuICAgICk7XG59XG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgICAgPGRpdj5OTyBCT0FSRDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApXG59XG4gIFxuY29uc3Qgc3R5bGVzID0ge1xuICBjb250YWluZXI6IHtcbiAgICBmbGV4OiAxLFxuICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTWFuYWdlQm9hcmRzSW5kZXg7Il19 */\n/*@ sourceURL=/Users/spencerford/Documents/DEVyall/PersonalProjects/CorporateBingoWeb/components/ManageBoard/ManageBoardsIndex.js */"));
  }

  return __jsx(_Layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }, "NO BOARD"));
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (ManageBoardsIndex);

/***/ }),

/***/ "./components/ManageBoard/TeamOrPlayers/BoardTeamsOrPlayers.js":
/*!*********************************************************************!*\
  !*** ./components/ManageBoard/TeamOrPlayers/BoardTeamsOrPlayers.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _contexts_manageBoardsContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../contexts/manageBoardsContext */ "./contexts/manageBoardsContext.js");
/* harmony import */ var _styles_masterStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../styles/masterStyles */ "./styles/masterStyles.js");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Table */ "@material-ui/core/Table");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TableBody */ "@material-ui/core/TableBody");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TableCell */ "@material-ui/core/TableCell");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TableHead */ "@material-ui/core/TableHead");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/TableRow */ "@material-ui/core/TableRow");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Dialog */ "@material-ui/core/Dialog");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "@material-ui/core/DialogActions");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "@material-ui/core/DialogTitle");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/Close */ "@material-ui/icons/Close");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_16__);

var _jsxFileName = "/Users/spencerford/Documents/DEVyall/PersonalProjects/CorporateBingoWeb/components/ManageBoard/TeamOrPlayers/BoardTeamsOrPlayers.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

 // Context imports

 // Style imports

 // Material UI














const BoardTeamOrPlayers = props => {
  const materialStyles = theme => ({
    root: {
      margin: 0,
      padding: 20,
      fontSize: 32,
      color: _styles_masterStyles__WEBPACK_IMPORTED_MODULE_4__["COLORS"].primary
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500]
    }
  });

  const DialogTitle = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__["withStyles"])(materialStyles)(props => {
    const {
      children,
      classes,
      onClose
    } = props;
    return __jsx(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_13___default.a, {
      disableTypography: true,
      className: classes.root,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: undefined
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14___default.a, {
      variant: "h6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: undefined
    }, children), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_15___default.a, {
      "aria-label": "close",
      className: classes.closeButton,
      onClick: onClose,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: undefined
    }, __jsx(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_16___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: undefined
    })));
  });
  const {
    0: games,
    1: setGames
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: gameToView,
    1: setGameToView
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const {
    0: slideShow,
    1: setSlideShow
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  const {
    getAllGamesForBoard,
    gamesForBoard
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_manageBoardsContext__WEBPACK_IMPORTED_MODULE_3__["ManageBoardsContext"]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (!gamesForBoard.length) {
      setLoading(true);
      getAllGamesForBoard(props.boardID);
    } else {
      setLoading(false);
      setGames(gamesForBoard[0] === 'none' ? [] : gamesForBoard);
    }
  }, [gamesForBoard]);

  const getNumTasksComplete = tasks => {
    let completedTasks = [];
    tasks.map(task => {
      if (task.complete && !task.freeSquare) {
        completedTasks.push(task);
      }
    });
    return completedTasks.length;
  };

  const getNumRewardsEarned = rewards => {
    let earnedRewards = [];
    rewards.map(reward => {
      if (reward.earned) {
        earnedRewards.push(reward);
      }
    });
    return earnedRewards.length;
  };

  const generateGameRows = () => {
    if (games.length) {
      return games.map((game, index) => {
        return __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_9___default.a, {
          style: {
            cursor: 'pointer'
          },
          onClick: () => setGameToView(game),
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95
          },
          __self: undefined
        }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          },
          __self: undefined
        }, game.team && 'Team ', game.organizerName), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          },
          __self: undefined
        }, getNumTasksComplete(game.squares)), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          },
          __self: undefined
        }, getNumRewardsEarned(game.rewards)), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          },
          __self: undefined
        }, moment__WEBPACK_IMPORTED_MODULE_2___default()(game.modified).format("MMM Do, YYYY")));
      });
    }

    return __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_9___default.a, {
      style: {
        width: '100%'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: undefined
    }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: undefined
    }, "No games yet... go get people playing!"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: undefined
    }), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: undefined
    }), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: undefined
    }));
  };

  if (loading) {
    __jsx("div", {
      style: styles.container,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: undefined
    }, __jsx("div", {
      style: styles.subcontainer,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: undefined
    }, __jsx("div", {
      style: _styles_masterStyles__WEBPACK_IMPORTED_MODULE_4__["MASTER"].pageTitle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: undefined
    }, "LOADING...")));
  }

  return __jsx("div", {
    style: styles.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: undefined
  }, console.log({
    games
  }), __jsx("div", {
    style: {
      width: '100%',
      maxWidth: 700
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: undefined
  }, __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      width: "100%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: undefined
  }, __jsx(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: undefined
  }, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: undefined
  }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: undefined
  }, "ORGANIZER"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: undefined
  }, "TASKS COMPLETE"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: undefined
  }, "REWARDS EARNED"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: undefined
  }, "LAST PLAYED"))), __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: undefined
  }, generateGameRows()))), __jsx("button", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _styles_masterStyles__WEBPACK_IMPORTED_MODULE_4__["MASTER"].wideRoundBtn, {
      width: 150,
      position: 'absolute',
      bottom: 30,
      right: 20,
      height: 45
    }),
    onClick: () => setSlideShow(games),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: undefined
  }, __jsx("div", {
    style: _styles_masterStyles__WEBPACK_IMPORTED_MODULE_4__["MASTER"].wideRoundBtnText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: undefined
  }, "SLIDESHOW VIEW")), __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_11___default.a, {
    open: !!gameToView,
    onBackdropClick: () => setGameToView(null),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: undefined
  }, __jsx(DialogTitle, {
    onClose: () => setGameToView(null),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: undefined
  }, gameToView && `Organizer: ${gameToView.organizerName}`), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: undefined
  }, "VIEWING GAME")), __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_11___default.a, {
    open: !!slideShow,
    onBackdropClick: () => setSlideShow(null),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: undefined
  }, __jsx(DialogTitle, {
    onClose: () => setSlideShow(null),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: undefined
  }, `SLIDESHOW`), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: undefined
  }, "VIEWING SLIDESHOW")));
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    paddingTop: 40
  }
};
/* harmony default export */ __webpack_exports__["default"] = (BoardTeamOrPlayers);

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
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const {
    user,
    logout
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_userContext__WEBPACK_IMPORTED_MODULE_5__["UserContext"]);
  const {
    0: currRoute,
    1: setCurrRoute
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(router.pathname);

  const handleRouteChange = url => {
    setCurrRoute(url);
  };

  router.events.on('routeChangeStart', handleRouteChange);

  const handleRouteChangeComplete = url => {
    setCurrRoute(url);
  };

  router.events.on('routeChangeComplete', handleRouteChangeComplete);

  const addDefaultPic = ev => {
    ev.target.src = "https://i.ytimg.com/vi/bKcF7JUbCpo/maxresdefault.jpg";
  };

  const handleLogoutClick = () => {
    logout();
  };

  if (!user.id) {
    return __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: undefined
    }, "LOADING...");
  }

  return __jsx("div", {
    id: "sidenav",
    style: {
      borderRight: `2px solid ${_styles_masterStyles_js__WEBPACK_IMPORTED_MODULE_4__["COLORS"].primary}`
    },
    className: "jsx-1054960106",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
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
    __self: undefined
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/joinGame",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, __jsx("a", {
    style: currRoute && currRoute.includes('joinGame') ? styles.currLink : styles.link,
    className: "jsx-1054960106" + " " + 'sidenavLink',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, "JOIN GAME")), user && user.roleLevel < 3 && __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/manageBoards",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, __jsx("a", {
    style: currRoute && currRoute.includes('manageBoards') ? styles.currLink : styles.link,
    className: "jsx-1054960106" + " " + 'sidenavLink',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, "MANAGE BOARDS")), user && user.roleLevel < 3 && __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/usersAndOrg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, __jsx("a", {
    style: currRoute && currRoute.includes('usersAndOrg') ? styles.currLink : styles.link,
    className: "jsx-1054960106" + " " + 'sidenavLink',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, "USERS & ORG")), user && user.roleLevel !== 2 && __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/profile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, __jsx("a", {
    style: currRoute && currRoute.includes('profile') ? styles.currLink : styles.link,
    className: "jsx-1054960106" + " " + 'sidenavLink',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, "MY PROFILE")), __jsx("a", {
    style: {
      color: _styles_masterStyles_js__WEBPACK_IMPORTED_MODULE_4__["COLORS"].primary,
      cursor: 'pointer',
      padding: 10
    },
    onClick: () => handleLogoutClick(),
    className: "jsx-1054960106" + " " + 'sidenavLink',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, "LOGOUT"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1054960106",
    __self: undefined
  }, "#sidenav.jsx-1054960106{width:20%;max-width:300px;min-width:200px;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;box-shadow:2px 0 5px -2px #999;background-color:white;font:roboto;padding:0 .5%;}.sidenavLink.jsx-1054960106{width:90%;text-align:left;margin:20px 0 0 0;-webkit-text-decoration:none;text-decoration:none;font-size:20px;font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zcGVuY2VyZm9yZC9Eb2N1bWVudHMvREVWeWFsbC9QZXJzb25hbFByb2plY3RzL0NvcnBvcmF0ZUJpbmdvV2ViL2NvbXBvbmVudHMvU2lkZU5hdi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRGlCLEFBR21DLEFBYUEsVUFaTSxBQWFBLGdCQVpBLEFBYUUsZ0JBWk4sRUFhUyxVQVpSLHdDQWFFLGVBQ0UsaUJBQ3JCLEVBZDBCLDhFQUNILDZGQUNZLCtCQUNSLHVCQUNYLFlBQ0UsY0FDbEIiLCJmaWxlIjoiL1VzZXJzL3NwZW5jZXJmb3JkL0RvY3VtZW50cy9ERVZ5YWxsL1BlcnNvbmFsUHJvamVjdHMvQ29ycG9yYXRlQmluZ29XZWIvY29tcG9uZW50cy9TaWRlTmF2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmltcG9ydCB7IENPTE9SUyB9IGZyb20gJy4uL3N0eWxlcy9tYXN0ZXJTdHlsZXMuanMnO1xuXG4vLyBjb250ZXh0IGltcG9ydHNcbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dHMvdXNlckNvbnRleHQnO1xuXG5jb25zdCBTaWRlTmF2ID0gKHByb3BzKSA9PiB7XG5cbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gICAgY29uc3QgeyB1c2VyLCBsb2dvdXQgfSA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xuICAgIGNvbnN0IFsgY3VyclJvdXRlLCBzZXRDdXJyUm91dGUgXSA9IHVzZVN0YXRlKHJvdXRlci5wYXRobmFtZSk7XG5cbiAgICBjb25zdCBoYW5kbGVSb3V0ZUNoYW5nZSA9IHVybCA9PiB7XG4gICAgICAgIHNldEN1cnJSb3V0ZSh1cmwpO1xuICAgIH1cbiAgICByb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZVN0YXJ0JywgaGFuZGxlUm91dGVDaGFuZ2UpXG5cbiAgICBjb25zdCBoYW5kbGVSb3V0ZUNoYW5nZUNvbXBsZXRlID0gdXJsID0+IHtcbiAgICAgICAgc2V0Q3VyclJvdXRlKHVybCk7XG4gICAgfVxuICAgIHJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBoYW5kbGVSb3V0ZUNoYW5nZUNvbXBsZXRlKVxuXG4gICAgY29uc3QgYWRkRGVmYXVsdFBpYyA9IChldikgPT4ge1xuICAgICAgICBldi50YXJnZXQuc3JjID0gXCJodHRwczovL2kueXRpbWcuY29tL3ZpL2JLY0Y3SlViQ3BvL21heHJlc2RlZmF1bHQuanBnXCI7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZUxvZ291dENsaWNrID0gKCkgPT4ge1xuICAgICAgICBsb2dvdXQoKTtcbiAgICB9XG5cbiAgICBpZighdXNlci5pZCl7XG4gICAgICAgIHJldHVybiA8c3Bhbj5MT0FESU5HLi4uPC9zcGFuPlxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgaWQ9J3NpZGVuYXYnIHN0eWxlPXt7IGJvcmRlclJpZ2h0OiBgMnB4IHNvbGlkICR7Q09MT1JTLnByaW1hcnl9YCB9fT5cbiAgICAgICAgICAgIDxpbWcgXG4gICAgICAgICAgICAgICAgYWx0PSdCaW5nbyBCdWlsZGVyJyBcbiAgICAgICAgICAgICAgICBzcmM9eycvc3RhdGljL2JpbmdvQnVpbGRlckxvZ28ucG5nJ30gXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICc5MCUnLCBtYXJnaW46ICcxMHB4IDAgMTBweCAwJyB9fVxuICAgICAgICAgICAgICAgIG9uRXJyb3I9e2FkZERlZmF1bHRQaWN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPExpbmsgaHJlZj0nL2pvaW5HYW1lJz48YSBjbGFzc05hbWU9J3NpZGVuYXZMaW5rJyBzdHlsZT17Y3VyclJvdXRlICYmIGN1cnJSb3V0ZS5pbmNsdWRlcygnam9pbkdhbWUnKSA/IHN0eWxlcy5jdXJyTGluayA6IHN0eWxlcy5saW5rfT5KT0lOIEdBTUU8L2E+PC9MaW5rPlxuICAgICAgICAgICAge3VzZXIgJiYgdXNlci5yb2xlTGV2ZWwgPCAzICYmIDxMaW5rIGhyZWY9Jy9tYW5hZ2VCb2FyZHMnPjxhIGNsYXNzTmFtZT0nc2lkZW5hdkxpbmsnIHN0eWxlPXtjdXJyUm91dGUgJiYgY3VyclJvdXRlLmluY2x1ZGVzKCdtYW5hZ2VCb2FyZHMnKSA/IHN0eWxlcy5jdXJyTGluayA6IHN0eWxlcy5saW5rfT5NQU5BR0UgQk9BUkRTPC9hPjwvTGluaz59XG4gICAgICAgICAgICB7dXNlciAmJiB1c2VyLnJvbGVMZXZlbCA8IDMgJiYgPExpbmsgaHJlZj0nL3VzZXJzQW5kT3JnJz48YSBjbGFzc05hbWU9J3NpZGVuYXZMaW5rJyBzdHlsZT17Y3VyclJvdXRlICYmIGN1cnJSb3V0ZS5pbmNsdWRlcygndXNlcnNBbmRPcmcnKSA/IHN0eWxlcy5jdXJyTGluayA6IHN0eWxlcy5saW5rfT5VU0VSUyAmIE9SRzwvYT48L0xpbms+fVxuICAgICAgICAgICAge3VzZXIgJiYgdXNlci5yb2xlTGV2ZWwgIT09IDIgJiYgPExpbmsgaHJlZj0nL3Byb2ZpbGUnPjxhIGNsYXNzTmFtZT0nc2lkZW5hdkxpbmsnIHN0eWxlPXtjdXJyUm91dGUgJiYgY3VyclJvdXRlLmluY2x1ZGVzKCdwcm9maWxlJykgPyBzdHlsZXMuY3VyckxpbmsgOiBzdHlsZXMubGlua30+TVkgUFJPRklMRTwvYT48L0xpbms+fVxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdzaWRlbmF2TGluaycgc3R5bGU9e3tjb2xvcjogQ09MT1JTLnByaW1hcnksIGN1cnNvcjogJ3BvaW50ZXInLCBwYWRkaW5nOiAxMH19IG9uQ2xpY2s9eygpID0+IGhhbmRsZUxvZ291dENsaWNrKCl9PkxPR09VVDwvYT5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAgICAgI3NpZGVuYXYge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMzAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMnB4IDAgNXB4IC0ycHggIzk5OTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udDogcm9ib3RvO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAuNSU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnNpZGVuYXZMaW5rIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDAgMCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuY29uc3Qgc3R5bGVzID0ge1xuICAgIGxpbms6IHtcbiAgICAgICAgY29sb3I6IENPTE9SUy5wcmltYXJ5LFxuICAgICAgICBwYWRkaW5nOiAxMCxcbiAgICB9LFxuICAgIGN1cnJMaW5rOiB7XG4gICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IENPTE9SUy5wcmltYXJ5LFxuICAgICAgICBwYWRkaW5nOiAxMCxcbiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAyMCxcbiAgICB9XG4gIH07XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGVOYXY7Il19 */\n/*@ sourceURL=/Users/spencerford/Documents/DEVyall/PersonalProjects/CorporateBingoWeb/components/SideNav.js */"));
};

const styles = {
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

/***/ "./constants/boardSizes.js":
/*!*********************************!*\
  !*** ./constants/boardSizes.js ***!
  \*********************************/
/*! exports provided: boardTemplates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boardTemplates", function() { return boardTemplates; });
const boardTemplates = {
  size4: {
    spaces: [[{
      type: 'reward',
      id: 'column1'
    }, {
      type: 'reward',
      id: 'column2'
    }, {
      type: 'reward',
      id: 'diagonalUpRight'
    }], [{
      type: 'task',
      id: 1
    }, {
      type: 'task',
      id: 2
    }, {
      type: 'reward',
      id: 'row1'
    }], [{
      type: 'task',
      id: 3
    }, {
      type: 'task',
      id: 4
    }, {
      type: 'reward',
      id: 'row2'
    }], [{
      type: 'empty',
      id: null
    }, {
      type: 'empty',
      id: null
    }, {
      type: 'reward',
      id: 'diagonalDownRight'
    }]]
  },
  size9: {
    spaces: [[{
      type: 'reward',
      id: 'column1'
    }, {
      type: 'reward',
      id: 'column2'
    }, {
      type: 'reward',
      id: 'column3'
    }, {
      type: 'reward',
      id: 'diagonalUpRight'
    }], [{
      type: 'task',
      id: 1
    }, {
      type: 'task',
      id: 2
    }, {
      type: 'task',
      id: 3
    }, {
      type: 'reward',
      id: 'row1'
    }], [{
      type: 'task',
      id: 4
    }, {
      type: 'task',
      id: 5
    }, {
      type: 'task',
      id: 6
    }, {
      type: 'reward',
      id: 'row2'
    }], [{
      type: 'task',
      id: 7
    }, {
      type: 'task',
      id: 8
    }, {
      type: 'task',
      id: 9
    }, {
      type: 'reward',
      id: 'row3'
    }], [{
      type: 'empty',
      id: null
    }, {
      type: 'empty',
      id: null
    }, {
      type: 'empty',
      id: null
    }, {
      type: 'reward',
      id: 'diagonalDownRight'
    }]]
  },
  size16: {
    spaces: [[{
      type: 'reward',
      id: 'column1'
    }, {
      type: 'reward',
      id: 'column2'
    }, {
      type: 'reward',
      id: 'column3'
    }, {
      type: 'reward',
      id: 'column4'
    }, {
      type: 'reward',
      id: 'diagonalUpRight'
    }], [{
      type: 'task',
      id: 1
    }, {
      type: 'task',
      id: 2
    }, {
      type: 'task',
      id: 3
    }, {
      type: 'task',
      id: 4
    }, {
      type: 'reward',
      id: 'row1'
    }], [{
      type: 'task',
      id: 5
    }, {
      type: 'task',
      id: 6
    }, {
      type: 'task',
      id: 7
    }, {
      type: 'task',
      id: 8
    }, {
      type: 'reward',
      id: 'row2'
    }], [{
      type: 'task',
      id: 9
    }, {
      type: 'task',
      id: 10
    }, {
      type: 'task',
      id: 11
    }, {
      type: 'task',
      id: 12
    }, {
      type: 'reward',
      id: 'row3'
    }], [{
      type: 'task',
      id: 13
    }, {
      type: 'task',
      id: 14
    }, {
      type: 'task',
      id: 15
    }, {
      type: 'task',
      id: 16
    }, {
      type: 'reward',
      id: 'row4'
    }], [{
      type: 'empty',
      id: 17
    }, {
      type: 'empty',
      id: 18
    }, {
      type: 'empty',
      id: 19
    }, {
      type: 'empty',
      id: 20
    }, {
      type: 'reward',
      id: 'diagonalDownRight'
    }]]
  },
  size25: {
    spaces: [[{
      type: 'reward',
      id: 'column1'
    }, {
      type: 'reward',
      id: 'column2'
    }, {
      type: 'reward',
      id: 'column3'
    }, {
      type: 'reward',
      id: 'column4'
    }, {
      type: 'reward',
      id: 'column5'
    }, {
      type: 'reward',
      id: 'diagonalUpRight'
    }], [{
      type: 'task',
      id: 1
    }, {
      type: 'task',
      id: 2
    }, {
      type: 'task',
      id: 3
    }, {
      type: 'task',
      id: 4
    }, {
      type: 'task',
      id: 5
    }, {
      type: 'reward',
      id: 'row1'
    }], [{
      type: 'task',
      id: 6
    }, {
      type: 'task',
      id: 7
    }, {
      type: 'task',
      id: 8
    }, {
      type: 'task',
      id: 9
    }, {
      type: 'task',
      id: 10
    }, {
      type: 'reward',
      id: 'row2'
    }], [{
      type: 'task',
      id: 11
    }, {
      type: 'task',
      id: 12
    }, {
      type: 'task',
      id: 13
    }, {
      type: 'task',
      id: 14
    }, {
      type: 'task',
      id: 15
    }, {
      type: 'reward',
      id: 'row3'
    }], [{
      type: 'task',
      id: 16
    }, {
      type: 'task',
      id: 17
    }, {
      type: 'task',
      id: 18
    }, {
      type: 'task',
      id: 19
    }, {
      type: 'task',
      id: 20
    }, {
      type: 'reward',
      id: 'row4'
    }], [{
      type: 'task',
      id: 21
    }, {
      type: 'task',
      id: 22
    }, {
      type: 'task',
      id: 23
    }, {
      type: 'task',
      id: 24
    }, {
      type: 'task',
      id: 25
    }, {
      type: 'reward',
      id: 'row5'
    }], [{
      type: 'empty',
      id: null
    }, {
      type: 'empty',
      id: null
    }, {
      type: 'empty',
      id: null
    }, {
      type: 'empty',
      id: null
    }, {
      type: 'empty',
      id: null
    }, {
      type: 'reward',
      id: 'diagonalDownRight'
    }]]
  }
};

/***/ }),

/***/ "./constants/constants.js":
/*!********************************!*\
  !*** ./constants/constants.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const URL = "http://localhost";
const PORT = '8000'; // export default FULL_URL = `${URL}:${PORT}`;
// const FULL_URL = 'http://localhost:8000';
// const FULL_URL = 'https://api.gamifytech.com/v1';

const FULL_URL = 'https://8n5rviefak.execute-api.us-east-1.amazonaws.com/bingo'; // const FULL_URL = 'http://ec2-3-86-157-120.compute-1.amazonaws.com:8000';

/* harmony default export */ __webpack_exports__["default"] = (FULL_URL);

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
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants/constants */ "./constants/constants.js");


var _jsxFileName = "/Users/spencerford/Documents/DEVyall/PersonalProjects/CorporateBingoWeb/contexts/manageBoardsContext.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





const uuidv4 = __webpack_require__(/*! uuid/v4 */ "uuid/v4");

const ManageBoardsContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["createContext"])();

const ManageBoardsContextProvider = props => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const {
    0: contextBoard,
    1: setContextBoard
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({});
  const {
    0: gamesForBoard,
    1: setGamesForBoard
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]);
  const {
    0: stuffToSave,
    1: setStuffToSave
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);

  const newBoard = async orgID => {
    try {
      const request = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()(`${_constants_constants__WEBPACK_IMPORTED_MODULE_5__["default"]}/boards`, {
        method: 'POST',
        // headers: {
        //   'Accept': 'application/json',
        //   'Content-Type': 'application/json',
        //   'Authorization': `Bearer ${localStorage.getItem('bingo_token')}`
        // },
        body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()({
          orgID: orgID
        })
      });
      const boardID = await request.json();
      console.log({
        boardID
      });
      router.push(`/manageBoards/${boardID}`);
    } catch (err) {
      alert(err);
    }
  };

  const getBoard = async boardID => {
    if (boardID && contextBoard.id === boardID) {
      console.log('go with same board', contextBoard, boardID);
      return;
    }

    try {
      const request = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()(`${_constants_constants__WEBPACK_IMPORTED_MODULE_5__["default"]}/boards/${boardID}`, {
        method: 'POST' // headers: {
        //     'Accept': 'application/json',
        //     'Content-Type': 'application/json',
        //     'Authorization': `Bearer ${localStorage.getItem('bingo_token')}`
        // },

      });
      const board = await request.json();
      setContextBoard(board);
    } catch (err) {
      alert(err);
    }
  };

  const saveBoard = async () => {
    console.log('SAVING');

    if (contextBoard.useTeams) {
      const teamsNoFrontendIDs = contextBoard.teams.map(team => {
        if (!team.id || team.id.includes('team')) {
          return {
            name: team.name,
            accessCode: team.accessCode,
            id: uuidv4()
          };
        }

        return team;
      });
      contextBoard.teams = teamsNoFrontendIDs;
    }

    try {
      const request = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()(`${_constants_constants__WEBPACK_IMPORTED_MODULE_5__["default"]}/boards/update/${contextBoard.id}`, {
        method: 'POST',
        // headers: {
        //   'Accept': 'application/json',
        //   'Content-Type': 'application/json',
        //   'Authorization': `Bearer ${localStorage.getItem('bingo_token')}`
        // },
        body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, contextBoard, {
          modified: new Date()
        }))
      });
      const success = await request.json();
      console.log({
        success
      });

      if (success) {
        setStuffToSave(false);
        setContextBoard(success);
      } else {
        alert('There was a problem saving your board... please try again later!');
      }
    } catch (err) {
      alert(err);
    }
  };

  const getAllGamesForBoard = async boardID => {
    try {
      const request = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()(`${_constants_constants__WEBPACK_IMPORTED_MODULE_5__["default"]}/boards/gamesForBoard/${boardID}`, {
        method: 'GET' // headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',
        //         'Authorization': `Bearer ${localStorage.getItem('bingo_token')}`
        //     },

      });
      const games = await request.json();
      setGamesForBoard(!games.length ? ['none'] : games);
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
      saveBoard,
      getAllGamesForBoard,
      gamesForBoard
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
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
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/constants */ "./constants/constants.js");

var _jsxFileName = "/Users/spencerford/Documents/DEVyall/PersonalProjects/CorporateBingoWeb/contexts/orgContext.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const OrgContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])();

const OrgContextProvider = props => {
  const {
    0: org,
    1: setOrg
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({});
  const {
    0: users,
    1: setUsers
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: boards,
    1: setBoards
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: stuffToSave,
    1: setStuffToSave
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const getOrg = async orgID => {
    console.log('in get org', orgID);

    try {
      const request = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()(`${_constants_constants__WEBPACK_IMPORTED_MODULE_3__["default"]}/orgs/${orgID}`, {
        method: 'POST' // headers: {
        //   'Accept': 'application/json',
        //   'Content-Type': 'application/json',
        //   'Authorization': `Bearer ${localStorage.getItem('bingo_token')}`
        // },

      });
      const org = await request.json();
      console.log('GOT ORG', org);
      setUsers(org.userList);
      setBoards(org.boards);
      setOrg(org);
    } catch (err) {
      alert(err);
    }
  };

  const saveOrg = async orgToSave => {
    console.log('in save org', orgToSave);

    try {
      const request = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()(`${_constants_constants__WEBPACK_IMPORTED_MODULE_3__["default"]}/orgs/update/${orgToSave.id}`, {
        method: 'POST',
        // headers: {
        //   'Accept': 'application/json',
        //   'Content-Type': 'application/json',
        //   'Authorization': `Bearer ${localStorage.getItem('bingo_token')}`
        // },
        body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(orgToSave)
      });
      const org = await request.json();
      setOrg(org);
      setStuffToSave(false);
    } catch (err) {
      alert(err);
    }
  };

  return __jsx(OrgContext.Provider, {
    value: {
      contextOrg: org,
      contextOrgUsers: users,
      contextOrgBoards: boards,
      updateOrg: setOrg,
      getOrg: getOrg,
      saveOrg,
      setStuffToSave,
      stuffToSave,
      contextSetUsers: setUsers,
      setBoards
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
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
        userAlias: user.userAlias,
        email: user.email,
        roleLevel: user.roleLevel,
        org: user.org,
        orgName: user.orgName,
        id: user.id
      }));
      setUser({
        userAlias: user.userAlias,
        email: user.email,
        roleLevel: user.roleLevel,
        org: user.org,
        orgName: user.orgName,
        id: user.id
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
      lineNumber: 51
    },
    __self: undefined
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (UserContextProvider);

/***/ }),

/***/ "./funcs/boardLogic.js":
/*!*****************************!*\
  !*** ./funcs/boardLogic.js ***!
  \*****************************/
/*! exports provided: checkForRewards */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkForRewards", function() { return checkForRewards; });
const getSquaresForRow = (rowNum, numRows, squares) => {
  let result = [];
  const startingIndex = rowNum * numRows - 1;
  let count = 0;

  for (let i = startingIndex; i > -1; i--) {
    if (count === numRows) break;
    result.push(squares[i]);
    count++;
  }

  return result;
};

const getSquaresForCol = (colNum, numCols, squares) => {
  let result = [];
  let count = 0;
  let startingIndex = colNum - 1;

  for (let i = 0; i < numCols; i++) {
    result.push(squares[startingIndex + numCols * count]);
    count++;
  }

  return result;
}; // 0  1  2  3
// 4  5  6  7
// 8  9  10 11
// 12 13 14 15 


const getSquaresDiagonalDownRight = (numCols, squares) => {
  let result = [];
  let count = 0;
  let startingIndex = 0;

  for (let i = 0; i < numCols; i++) {
    let constant = count > 0 ? 1 : 0;
    result.push(squares[startingIndex + (numCols * count + constant * i)]);
    count++;
  }

  return result;
};

const getSquaresDiagonalUpRight = (numCols, squares) => {
  let result = [];
  let count = 0;
  let startingIndex = numCols - 1;

  for (let i = 0; i < numCols; i++) {
    result.push(squares[startingIndex + (numCols - 1) * count]);
    count++;
  }

  return result;
};

const checkForRewards = board => {
  const numRowCols = Math.sqrt(board.numSquares);
  let rewardOptions = [// 'wholeBoard' is account for later
  'row1', 'row2', 'row3', 'row4', 'row5', 'column1', 'column2', 'column3', 'column4', 'column5', 'diagonalUpRight', 'diagonalDownRight'];
  const squares = board.squares; // narrow down to reward options that are available, based on board size

  rewardOptions = rewardOptions.filter(reward => reward.slice(-1) <= numRowCols || reward.slice(-1).match(/[a-z]/i)); // organize all the rows, cols, diagonals

  let divisions = [{
    name: 'wholeBoard',
    squares: squares
  }];
  rewardOptions.map(reward => {
    if (reward.substring(0, 3) === 'row') {
      divisions.push({
        name: reward,
        squares: getSquaresForRow(reward.slice(-1), numRowCols, squares)
      });
    } else if (reward.substring(0, 3) === 'col') {
      divisions.push({
        name: reward,
        squares: getSquaresForCol(reward.slice(-1), numRowCols, squares)
      });
    } else if (reward === 'diagonalUpRight') {
      divisions.push({
        name: reward,
        squares: getSquaresDiagonalUpRight(numRowCols, squares)
      });
    } else {
      divisions.push({
        name: reward,
        squares: getSquaresDiagonalDownRight(numRowCols, squares)
      });
    }
  }); // get the divisions for which every task is complete

  let completed = [];
  divisions.map(division => {
    let complete = true;
    division.squares.map(square => {
      if (!square.complete) {
        complete = false;
      }
    });

    if (complete) {
      completed.push(division.name);
    }
  });
  return completed;
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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
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
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouteWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

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
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

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
      const {
        pathname
      } = url_1.parse(ctx.asPath || ctx.pathname);
      props = await fetch(`/_next/data${pathname}.json`).then(res => {
        if (!res.ok) {
          status = res.status;
          throw new Error('failed to load prerender data');
        }

        return res.json();
      }).catch(err => {
        console.error(`Failed to load data`, status, err);
        window.location.href = pathname;
        return new _Promise(() => {});
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
      console.warn(`${getDisplayName(Component)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
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

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./pages/manageBoards/[boardID]/index.js":
/*!***********************************************!*\
  !*** ./pages/manageBoards/[boardID]/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_manageBoardsContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../contexts/manageBoardsContext */ "./contexts/manageBoardsContext.js");
/* harmony import */ var _components_ManageBoard_ManageBoardsIndex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/ManageBoard/ManageBoardsIndex */ "./components/ManageBoard/ManageBoardsIndex.js");
var _jsxFileName = "/Users/spencerford/Documents/DEVyall/PersonalProjects/CorporateBingoWeb/pages/manageBoards/[boardID]/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const ManageBoard = props => {
  return __jsx(_contexts_manageBoardsContext__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx(_components_ManageBoard_ManageBoardsIndex__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ManageBoard);

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
  squareText: {
    color: 'white',
    height: 'calc(100% - 20px)',
    width: 'calc(100% - 20px)',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'safe center',
    margin: 'auto',
    alignItems: 'center',
    textAlign: 'center',
    overflowY: 'scroll',
    overflowPosition: 'safe'
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
  squareOrderNum: {
    position: 'absolute',
    top: 2,
    left: 2,
    width: 15,
    height: 15,
    borderRadius: 10,
    backgroundColor: 'white',
    fontWeight: 'bold'
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
    height: 'calc(100% - 20px)',
    width: 'calc(100% - 30px)',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    padding: '10px 15px'
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

/***/ 4:
/*!*****************************************************!*\
  !*** multi ./pages/manageBoards/[boardID]/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/spencerford/Documents/DEVyall/PersonalProjects/CorporateBingoWeb/pages/manageBoards/[boardID]/index.js */"./pages/manageBoards/[boardID]/index.js");


/***/ }),

/***/ "@material-ui/core/Chip":
/*!*****************************************!*\
  !*** external "@material-ui/core/Chip" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Chip");

/***/ }),

/***/ "@material-ui/core/Dialog":
/*!*******************************************!*\
  !*** external "@material-ui/core/Dialog" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Dialog");

/***/ }),

/***/ "@material-ui/core/DialogActions":
/*!**************************************************!*\
  !*** external "@material-ui/core/DialogActions" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogActions");

/***/ }),

/***/ "@material-ui/core/DialogTitle":
/*!************************************************!*\
  !*** external "@material-ui/core/DialogTitle" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogTitle");

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "@material-ui/core/MenuItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/MenuItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),

/***/ "@material-ui/core/Paper":
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "@material-ui/core/Select":
/*!*******************************************!*\
  !*** external "@material-ui/core/Select" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Select");

/***/ }),

/***/ "@material-ui/core/Switch":
/*!*******************************************!*\
  !*** external "@material-ui/core/Switch" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Switch");

/***/ }),

/***/ "@material-ui/core/Tab":
/*!****************************************!*\
  !*** external "@material-ui/core/Tab" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tab");

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

/***/ "@material-ui/core/Tabs":
/*!*****************************************!*\
  !*** external "@material-ui/core/Tabs" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tabs");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons/Close":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Close" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Close");

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

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

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

/***/ "qrcode.react":
/*!*******************************!*\
  !*** external "qrcode.react" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("qrcode.react");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-color":
/*!******************************!*\
  !*** external "react-color" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-color");

/***/ }),

/***/ "react-csv":
/*!****************************!*\
  !*** external "react-csv" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-csv");

/***/ }),

/***/ "react-dropzone":
/*!*********************************!*\
  !*** external "react-dropzone" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dropzone");

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

/***/ }),

/***/ "uuid/v4":
/*!**************************!*\
  !*** external "uuid/v4" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("uuid/v4");

/***/ })

/******/ });
//# sourceMappingURL=[boardID].js.map