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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
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
  }, board.rewards.length && board.rewards[board.rewards.length - 1].position.includes('wholeBoard') ? generateWholeBoardRewardIcon(board.rewards[0]) : null, __jsx(_BoardBuilderBoard__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
    padding: '3% 5%'
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
  const SQUARE_WIDTH = 90 / (Math.sqrt(props.board.numSquares) + 1);
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
                width: `${SQUARE_WIDTH}%`,
                aspectRatio: 1,
                maxWidth: 100,
                maxHeight: 100
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
              width: `${SQUARE_WIDTH}%`,
              aspectRatio: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'transparent',
              border: 'none',
              outline: 'none',
              cursor: 'pointer',
              maxWidth: 150,
              maxHeight: 150
            },
            onClick: () => openRewardBuilderPopup(reward),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 98
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
              lineNumber: 115
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
                width: `${SQUARE_WIDTH}%`,
                aspectRatio: 1,
                backgroundColor: `#${board.completeColor}`,
                borderWidth: 1,
                borderColor: 'black',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                outline: 'none',
                cursor: 'pointer',
                maxWidth: 150,
                maxHeight: 150
              },
              onClick: () => openSquareBuilderPopup(task),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 137
              },
              __self: undefined
            }, __jsx("img", {
              style: _styles_masterStyles__WEBPACK_IMPORTED_MODULE_2__["MASTER"].freeSquareIcon,
              src: '../../static/circle_check.png',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 154
              },
              __self: undefined
            }));
          }

          return __jsx("button", {
            key: `task${index}`,
            style: {
              width: `${SQUARE_WIDTH}%`,
              aspectRatio: 1,
              backgroundColor: task.freeSquare ? `#${board.completeColor}` : `#${board.incompleteColor}`,
              borderWidth: 1,
              borderColor: 'black',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              outline: 'none',
              cursor: 'pointer',
              maxWidth: 150,
              maxHeight: 150
            },
            onClick: () => openSquareBuilderPopup(task),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 159
            },
            __self: undefined
          }, __jsx("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 177
            },
            __self: undefined
          }, task.squareText));

        case 'empty':
          return __jsx("div", {
            key: `empty${index}`,
            style: {
              width: `${SQUARE_WIDTH}%`,
              aspectRatio: 1,
              maxWidth: 150,
              maxHeight: 150
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 182
            },
            __self: undefined
          });

        default:
          return __jsx("div", {
            key: `empty${index}`,
            style: {
              width: `${SQUARE_WIDTH}%`,
              aspectRatio: 1,
              maxWidth: 150,
              maxHeight: 150
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 193
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
          lineNumber: 210
        },
        __self: undefined
      }, generateRow(row));
    });
  };

  if (props.board) {
    return __jsx("div", {
      style: styles.container,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222
      },
      __self: undefined
    }, generateBoard(props.board), __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_9___default.a, {
      open: rewardDialogOpen,
      onBackdropClick: () => setRewardDialogOpen(false),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224
      },
      __self: undefined
    }, __jsx(DialogTitle, {
      onClose: () => setRewardDialogOpen(false),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225
      },
      __self: undefined
    }, "EDIT REWARD"), __jsx(_RewardBuilder__WEBPACK_IMPORTED_MODULE_7__["default"], {
      reward: reward,
      openPopup: setRewardDialogOpen,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 228
      },
      __self: undefined
    })), __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_9___default.a, {
      open: taskDialogOpen,
      onBackdropClick: () => setTaskDialogOpen(false),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 230
      },
      __self: undefined
    }, __jsx(DialogTitle, {
      onClose: () => setTaskDialogOpen(false),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 231
      },
      __self: undefined
    }, "EDIT TASK"), __jsx(_SquareBuilder__WEBPACK_IMPORTED_MODULE_6__["default"], {
      task: task,
      openPopup: setTaskDialogOpen,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234
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
/* harmony import */ var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Switch */ "@material-ui/core/Switch");
/* harmony import */ var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Chip */ "@material-ui/core/Chip");
/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_masterStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../styles/masterStyles */ "./styles/masterStyles.js");

var _jsxFileName = "/Users/spencerford/Documents/DEVyall/PersonalProjects/CorporateBingoWeb/components/ManageBoard/BoardBuilder/BuildSquareComponents/BuildCodeTask.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
 // Material UI


 // Style imports



const BuildCodeTask = props => {
  const {
    0: codes,
    1: setCodes
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(props.task.codes.codeList);
  const {
    0: text,
    1: setText
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: useOnce,
    1: setUseOnce
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(props.task.codes.useOnce);

  const handleCodeDelete = deadCode => {
    setCodes(codes.filter(code => code !== deadCode));
  };

  const addCode = text => {
    const codeList = codes;

    if (!codeList.includes(text)) {
      codeList.push(text);
      console.log({
        codeList
      });
      setCodes(codeList);
      setText('');
    } else {
      alert("Cannot have two identical codes!");
    }
  };

  const generateCodes = () => {
    console.log('generating codes', codes);
    return codes.map((code, index) => {
      return __jsx(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_3___default.a, {
        key: `code${index}`,
        label: code,
        onDelete: () => handleCodeDelete(code),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: undefined
      });
    });
  };

  return __jsx("div", {
    style: styles.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, __jsx("div", {
    style: styles.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, __jsx(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_2___default.a, {
    onChange: () => setUseOnce(!useOnce),
    value: useOnce,
    checked: useOnce,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }), __jsx("span", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styles.inputLabel, {
      marginLeft: 5
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, "Each code used only once")), __jsx("div", {
    style: styles.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, __jsx("input", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _styles_masterStyles__WEBPACK_IMPORTED_MODULE_4__["MASTER"].wideRoundInput, {
      width: 200
    }),
    value: text,
    onChange: e => setText(e.target.value),
    placeholder: 'e.g. foundIt5',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }), __jsx("button", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _styles_masterStyles__WEBPACK_IMPORTED_MODULE_4__["MASTER"].wideRoundBtn),
    onClick: () => addCode(text),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, __jsx("span", {
    style: _styles_masterStyles__WEBPACK_IMPORTED_MODULE_4__["MASTER"].wideRoundBtnText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }, "+ Add"))), generateCodes());
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
 // var QRCode = require('qrcode.react');

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
      lineNumber: 25
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      marginTop: -10,
      marginBottom: -5
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, __jsx(qrcode_react__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "123456",
    value: props.task._id,
    size: 200,
    level: "Q",
    includeMargin: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
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
      lineNumber: 35
    },
    __self: undefined
  }, __jsx("span", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _styles_masterStyles__WEBPACK_IMPORTED_MODULE_3__["MASTER"].wideRoundBtnText, {
      fontSize: 22
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, "Download QR Code")));
};

const styles = {};
/* harmony default export */ __webpack_exports__["default"] = (BuildQRCodeTask);

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

 // Reducer imports

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
    if (!contextBoard._id) {
      setReward(props.reward);
    } else {
      setReward(contextBoard.rewards.filter(reward => reward._id === props.reward._id)[0]);
    }

    if (reward._id && !reward.howToEarn) {
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
        if (oldReward._id === reward._id) {
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
        if (oldReward._id === id) {
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
    // save everything to reducer
    props.openPopup(false);
  };

  if (!reward._id) {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: undefined
    }, "LOADING");
  }

  return __jsx("div", {
    style: styles.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
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
      lineNumber: 110
    },
    __self: undefined
  }, __jsx("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getRootProps(), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: undefined
  }), __jsx("input", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getInputProps(), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: undefined
  })), reward.img.length ? __jsx("div", {
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
    value: reward.title,
    onChange: e => updateReward('title', e.target.value),
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
      lineNumber: 136
    },
    __self: undefined
  }, "Description"), __jsx("textarea", {
    autoFocus: true,
    style: _styles_masterStyles__WEBPACK_IMPORTED_MODULE_3__["MASTER"].wideRoundTextArea,
    onChange: e => updateReward('description', e.target.value),
    value: reward.description,
    placeholder: 'e.g. A gift card to any store you want!',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: undefined
  }), __jsx("span", {
    style: styles.inputLabel,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: undefined
  }, "How to earn"), __jsx("textarea", {
    autoFocus: true,
    style: _styles_masterStyles__WEBPACK_IMPORTED_MODULE_3__["MASTER"].wideRoundTextArea,
    onChange: e => updateReward('howToEarn', e.target.value),
    value: reward.howToEarn,
    placeholder: 'e.g. Complete all the speed goals',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: undefined
  }), __jsx("button", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _styles_masterStyles__WEBPACK_IMPORTED_MODULE_3__["MASTER"].wideRoundBtn, {
      backgroundColor: 'red',
      marginTop: 20
    }),
    onClick: () => remove(reward._id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: undefined
  }, __jsx("span", {
    style: _styles_masterStyles__WEBPACK_IMPORTED_MODULE_3__["MASTER"].wideRoundBtnText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: undefined
  }, "Remove Reward")), __jsx("button", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _styles_masterStyles__WEBPACK_IMPORTED_MODULE_3__["MASTER"].wideRoundBtn, {
      marginTop: 20
    }),
    onClick: () => done(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: undefined
  }, __jsx("span", {
    style: _styles_masterStyles__WEBPACK_IMPORTED_MODULE_3__["MASTER"].wideRoundBtnText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
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
/* harmony import */ var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Switch */ "@material-ui/core/Switch");
/* harmony import */ var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Select */ "@material-ui/core/Select");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8__);

var _jsxFileName = "/Users/spencerford/Documents/DEVyall/PersonalProjects/CorporateBingoWeb/components/ManageBoard/BoardBuilder/SquareBuilder.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
 // Style imports

 // Context imports

 // Component Imports


 // Material UI





const SquareBuilder = props => {
  const generateTaskMethod = type => {
    switch (type) {
      case 'click':
        return null;

      case 'code':
        return __jsx(_BuildSquareComponents_BuildCodeTask__WEBPACK_IMPORTED_MODULE_5__["default"], {
          task: props.task,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: undefined
        });

      case 'text':
        return __jsx("div", {
          className: "text-builder",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: undefined
        });

      case 'picture':
        return __jsx("div", {
          className: "picture-builder",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          },
          __self: undefined
        }, __jsx("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: undefined
        }));

      case 'qrCode':
        return __jsx(_BuildSquareComponents_BuildQRCodeTask__WEBPACK_IMPORTED_MODULE_4__["default"], {
          task: task,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
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
  const {
    0: squareText,
    1: setSquareText
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(task.squareText);
  const {
    0: description,
    1: setDescription
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(task.description);
  const {
    0: taskType,
    1: setTaskType
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(task.task.type);
  const {
    0: isFree,
    1: setIsFree
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(task.freeSquare);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (!contextBoard._id) {
      setTask(props.task);
    } else {
      setTask(contextBoard.squares.filter(task => task._id === props.task._id)[0]);
    }
  }, [contextBoard]);

  const updateTask = (field, val) => {
    const board = contextBoard;
    updateBoard(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, board, {
      squares: board.squares.map(oldTask => {
        if (oldTask._id === task._id) {
          if (field === 'task') {
            return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, oldTask, {
              task: {
                type: val,
                answer: ''
              }
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
    // save everything to reduer
    props.openPopup(false);
  };

  return __jsx("div", {
    style: styles.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  }, __jsx(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_6___default.a, {
    onChange: () => updateTask('freeSquare', !task.freeSquare),
    value: task.freeSquare,
    checked: task.freeSquare,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: undefined
  }), __jsx("span", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styles.inputLabel, {
      marginLeft: 5
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: undefined
  }, "This is a free square")), !task.freeSquare && __jsx("div", {
    style: styles.taskSettingsContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: undefined
  }, __jsx("span", {
    style: styles.inputLabel,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: undefined
  }, "Title (will also appear on the square)"), __jsx("input", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _styles_masterStyles__WEBPACK_IMPORTED_MODULE_2__["MASTER"].wideRoundInput, {
      marginTop: 2
    }),
    value: task.squareText,
    onChange: e => updateTask('squareText', e.target.value),
    placeholder: 'e.g. Two sales in one hour',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: undefined
  }), __jsx("span", {
    style: styles.inputLabel,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: undefined
  }, "Description"), __jsx("textarea", {
    autoFocus: true,
    style: _styles_masterStyles__WEBPACK_IMPORTED_MODULE_2__["MASTER"].wideRoundTextArea,
    onChange: e => updateTask('description', e.target.value),
    value: task.description,
    placeholder: 'e.g. Make two sales in one hour and enter their ids below!',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: undefined
  }), __jsx("span", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styles.inputLabel, {
      marginRight: 10,
      marginLeft: 5
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: undefined
  }, "Task to complete:"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_7___default.a, {
    displayEmpty: false,
    value: task.task.type,
    onChange: e => updateTask('task', e.target.value),
    inputProps: {
      name: 'num squares',
      id: 'num-squares-select'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: undefined
  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8___default.a, {
    value: "click",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: undefined
  }, "Flip a switch"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8___default.a, {
    value: "code",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: undefined
  }, "Enter a code"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8___default.a, {
    value: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: undefined
  }, "Enter some text"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8___default.a, {
    value: "picture",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: undefined
  }, "Upload a picture"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8___default.a, {
    value: "qrCode",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: undefined
  }, "Scan a QR Code")), __jsx("div", {
    style: {
      marginTop: 20
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: undefined
  }, generateTaskMethod(taskType)), __jsx("button", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _styles_masterStyles__WEBPACK_IMPORTED_MODULE_2__["MASTER"].wideRoundBtn, {
      marginTop: 20
    }),
    onClick: () => done(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: undefined
  }, __jsx("span", {
    style: _styles_masterStyles__WEBPACK_IMPORTED_MODULE_2__["MASTER"].wideRoundBtnText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
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
/* harmony import */ var _reducers_userReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../reducers/userReducer */ "./reducers/userReducer.js");
/* harmony import */ var _styles_masterStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/masterStyles */ "./styles/masterStyles.js");
var _jsxFileName = "/Users/spencerford/Documents/DEVyall/PersonalProjects/CorporateBingoWeb/components/ManageBoard/BoardRewards.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // reducer imports

 // Style imports



const BoardRewards = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const {
    0: userState,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(_reducers_userReducer__WEBPACK_IMPORTED_MODULE_2__["userReducer"], _reducers_userReducer__WEBPACK_IMPORTED_MODULE_2__["userReducerState"]);
  const {
    0: userName,
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
      lineNumber: 21
    },
    __self: undefined
  }, __jsx("div", {
    style: styles.subcontainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx("div", {
    style: _styles_masterStyles__WEBPACK_IMPORTED_MODULE_3__["MASTER"].pageTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
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
/* harmony import */ var _reducers_userReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../reducers/userReducer */ "./reducers/userReducer.js");
/* harmony import */ var _reducers_manageBoardsReducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../reducers/manageBoardsReducer */ "./reducers/manageBoardsReducer.js");
/* harmony import */ var _contexts_manageBoardsContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../contexts/manageBoardsContext */ "./contexts/manageBoardsContext.js");
/* harmony import */ var _styles_masterStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../styles/masterStyles */ "./styles/masterStyles.js");
/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-color */ "react-color");
/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_color__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-dropzone */ "react-dropzone");
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_dropzone__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Switch */ "@material-ui/core/Switch");
/* harmony import */ var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Select */ "@material-ui/core/Select");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_13__);


var _jsxFileName = "/Users/spencerford/Documents/DEVyall/PersonalProjects/CorporateBingoWeb/components/ManageBoard/BoardSettings.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

 // reducer imports



 // Style imports

 // Component Imports


 // Material UI





const BoardSettings = props => {
  const {
    contextBoard,
    updateBoard,
    setStuffToSave
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_contexts_manageBoardsContext__WEBPACK_IMPORTED_MODULE_7__["ManageBoardsContext"]);
  const {
    0: board,
    1: setBoard
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(contextBoard);
  const {
    0: hasTimelimit,
    1: setHasTimelimit
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(!!props.board.timeLimit);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    if (!contextBoard._id) {
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
      groups: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, board.groups, {
        useTeams: bool
      })
    }));
    setStuffToSave(true);
  };

  const changeTeams = teams => {
    updateBoard(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, board, {
      groups: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, board.groups, {
        teams: teams
      })
    }));
    setStuffToSave(true);
  };

  const deleteTeam = id => {
    changeTeams(board.groups.teams.filter(team => team._id !== id));
  };

  const addTeam = () => {
    changeTeams([...board.groups.teams, {
      id: Math.random(),
      name: '',
      accessCode: ''
    }]);
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
  } = Object(react_dropzone__WEBPACK_IMPORTED_MODULE_10__["useDropzone"])({
    onDrop
  });

  const generateTeams = () => {
    return board.groups.teams.map((team, index) => {
      return __jsx("div", {
        key: `team-id-${team._id}`,
        style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, styles.labelColumn, {
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 10
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: undefined
      }, __jsx("span", {
        style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, styles.inputLabel, {
          marginLeft: 5,
          marginRight: 5
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: undefined
      }, "Team Name: "), __jsx("input", {
        style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _styles_masterStyles__WEBPACK_IMPORTED_MODULE_8__["MASTER"].wideRoundInput, {
          marginTop: 5,
          width: 'auto',
          padding: '0 20px 0 20px',
          maxWidth: 700
        }),
        value: team.name,
        onChange: e => changeTeams(board.groups.teams.map(group => {
          if (group._id === team._id) {
            return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, group, {
              name: e.target.value
            });
          }

          return group;
        })),
        placeholder: 'e.g. Team Alpha',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: undefined
      }), __jsx("span", {
        style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, styles.inputLabel, {
          marginLeft: 10,
          marginRight: 5
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: undefined
      }, "Access Code: "), __jsx("input", {
        style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _styles_masterStyles__WEBPACK_IMPORTED_MODULE_8__["MASTER"].wideRoundInput, {
          marginTop: 5,
          width: 'auto',
          padding: '0 20px 0 20px',
          maxWidth: 700
        }),
        value: team.accessCode,
        onChange: e => changeTeams(board.groups.teams.map(group => {
          if (group._id === team._id) {
            return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, group, {
              accessCode: e.target.value
            });
          }

          return group;
        })),
        placeholder: 'e.g. teamAlphaRulez',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: undefined
      }), __jsx("div", {
        onClick: () => deleteTeam(team._id),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: undefined
      }, "DELETE"));
    });
  };

  if (!board._id) {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: undefined
    }, "LOADING");
  }

  return __jsx("div", {
    style: styles.container,
    className: "jsx-2356791153",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: undefined
  }, __jsx("div", {
    style: styles.subcontainer,
    className: "jsx-2356791153",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: undefined
  }, __jsx("div", {
    style: styles.row,
    className: "jsx-2356791153",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: undefined
  }, __jsx("div", {
    style: styles.labelColumn,
    className: "jsx-2356791153",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: undefined
  }, __jsx("span", {
    style: styles.inputLabel,
    className: "jsx-2356791153",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: undefined
  }, "Title"), __jsx("input", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _styles_masterStyles__WEBPACK_IMPORTED_MODULE_8__["MASTER"].wideRoundInput, {
      marginTop: 5,
      width: 'auto',
      padding: '0 20px 0 20px',
      maxWidth: 700
    }),
    value: board.title,
    onChange: e => changeRegularValues('title', e.target.value),
    placeholder: 'e.g. Sales',
    className: "jsx-2356791153",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: undefined
  }))), __jsx("div", {
    style: styles.row,
    className: "jsx-2356791153",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: undefined
  }, __jsx("div", {
    style: styles.labelColumn,
    className: "jsx-2356791153",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: undefined
  }, __jsx("span", {
    style: styles.inputLabel,
    className: "jsx-2356791153",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: undefined
  }, "Description/Instructions/Hint"), __jsx("textarea", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _styles_masterStyles__WEBPACK_IMPORTED_MODULE_8__["MASTER"].wideRoundTextArea, {
      marginTop: 5,
      width: 'auto',
      padding: '5px 20px',
      maxWidth: 700
    }),
    value: board.description,
    onChange: e => changeRegularValues('description', e.target.value),
    placeholder: 'e.g. To be done on the first day in a new office',
    className: "jsx-2356791153",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: undefined
  }))), __jsx("div", {
    style: styles.row,
    className: "jsx-2356791153" + " " + 'num-squares-randomize',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: undefined
  }, __jsx("div", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, styles.labelColumn, {
      flexDirection: 'row',
      alignItems: 'center'
    }),
    className: "jsx-2356791153",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: undefined
  }, __jsx("span", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, styles.inputLabel, {
      marginRight: 10,
      marginLeft: 5
    }),
    className: "jsx-2356791153",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
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
      lineNumber: 159
    },
    __self: undefined
  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_13___default.a, {
    value: "4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: undefined
  }, "4"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_13___default.a, {
    value: "9",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: undefined
  }, "9"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_13___default.a, {
    value: "16",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: undefined
  }, "16"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_13___default.a, {
    value: "25",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: undefined
  }, "25"))), __jsx("div", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, styles.labelColumn, {
      flexDirection: 'row',
      alignItems: 'center'
    }),
    className: "jsx-2356791153",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: undefined
  }, __jsx(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_11___default.a, {
    onChange: () => changeRegularValues('randomize', !board.randomize),
    value: board.randomize,
    checked: board.randomize,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: undefined
  }), __jsx("span", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, styles.inputLabel, {
      marginLeft: 5
    }),
    className: "jsx-2356791153",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: undefined
  }, "Randomize square placement"))), __jsx("div", {
    style: styles.row,
    className: "jsx-2356791153",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: undefined
  }, __jsx("div", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, styles.labelColumn, {
      flexDirection: 'row',
      alignItems: 'center'
    }),
    className: "jsx-2356791153",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: undefined
  }, __jsx(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_11___default.a, {
    onChange: () => changeRegularValues('mustBeDoneInOrder', !board.mustBeDoneInOrder),
    value: board.mustBeDoneInOrder,
    checked: board.mustBeDoneInOrder,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: undefined
  }), __jsx("span", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, styles.inputLabel, {
      marginLeft: 5
    }),
    className: "jsx-2356791153",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: undefined
  }, "Squares must be done in order")), __jsx("div", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, styles.labelColumn, {
      flexDirection: 'row',
      alignItems: 'center'
    }),
    className: "jsx-2356791153",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: undefined
  }, __jsx(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_11___default.a, {
    onChange: () => {
      if (!!board.timelimit) {
        setHasTimelimit(false);
        changeRegularValues('timelimit', null);
      } else {
        setHasTimelimit(true);
        changeRegularValues('timelimit', 'min15');
      }
    },
    value: !!board.timelimit,
    checked: !!board.timelimit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: undefined
  }), __jsx("span", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, styles.inputLabel, {
      marginRight: 5,
      marginLeft: 5
    }),
    className: "jsx-2356791153",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: undefined
  }, "Time limit:"), hasTimelimit ? __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_12___default.a, {
    displayEmpty: false,
    value: board.timelimit,
    onChange: e => changeRegularValues('timelimit', e.target.value),
    inputProps: {
      name: 'age',
      id: 'demo-controlled-open-select'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: undefined
  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_13___default.a, {
    value: "min15",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: undefined
  }, "15 minutes"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_13___default.a, {
    value: "min30",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: undefined
  }, "30 minutes"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_13___default.a, {
    value: "hour1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: undefined
  }, "1 hour"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_13___default.a, {
    value: "hour2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: undefined
  }, "2 hours"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_13___default.a, {
    value: "hour4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: undefined
  }, "4 hours"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_13___default.a, {
    value: "hour8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: undefined
  }, "8 hours"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_13___default.a, {
    value: "hour12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: undefined
  }, "12 hours"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_13___default.a, {
    value: "day1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: undefined
  }, "24 hours"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_13___default.a, {
    value: "day7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: undefined
  }, "1 week")) : __jsx("span", {
    className: "jsx-2356791153",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: undefined
  }, "None"))), __jsx("div", {
    style: styles.row,
    className: "jsx-2356791153",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
    },
    __self: undefined
  }, __jsx("div", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, styles.labelColumn, {
      flexDirection: 'row',
      alignItems: 'center'
    }),
    className: "jsx-2356791153",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232
    },
    __self: undefined
  }, __jsx(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_11___default.a, {
    onChange: () => changeUseGroups(!board.groups.useTeams),
    value: board.groups.useTeams,
    checked: board.groups.useTeams,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233
    },
    __self: undefined
  }), __jsx("span", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, styles.inputLabel, {
      marginLeft: 5
    }),
    className: "jsx-2356791153",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238
    },
    __self: undefined
  }, "Teams"), board.groups.useTeams && __jsx("div", {
    onClick: () => addTeam(),
    className: "jsx-2356791153",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239
    },
    __self: undefined
  }, "ADD TEAM"))), board.groups.useTeams && __jsx("div", {
    style: styles.row,
    className: "jsx-2356791153" + " " + "teams-section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243
    },
    __self: undefined
  }, __jsx("div", {
    style: styles.labelColumn,
    className: "jsx-2356791153",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244
    },
    __self: undefined
  }, generateTeams())), !board.groups.useTeams && __jsx("div", {
    style: styles.row,
    className: "jsx-2356791153",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250
    },
    __self: undefined
  }, __jsx("div", {
    style: styles.labelColumn,
    className: "jsx-2356791153",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251
    },
    __self: undefined
  }, __jsx("span", {
    style: styles.inputLabel,
    className: "jsx-2356791153",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252
    },
    __self: undefined
  }, "Code to Access Board"), __jsx("input", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _styles_masterStyles__WEBPACK_IMPORTED_MODULE_8__["MASTER"].wideRoundInput, {
      marginTop: 5,
      width: 'auto',
      padding: '0 20px 0 20px',
      maxWidth: 700
    }),
    value: board.accessCode,
    onChange: e => changeRegularValues('accessCode', e.target.value),
    placeholder: 'e.g. Sales',
    className: "jsx-2356791153",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253
    },
    __self: undefined
  }))), __jsx("div", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, styles.row, {
      justifyContent: 'flex-start'
    }),
    className: "jsx-2356791153",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262
    },
    __self: undefined
  }, __jsx("span", {
    style: styles.inputLabel,
    className: "jsx-2356791153",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263
    },
    __self: undefined
  }, "Set Square Colors")), __jsx("div", {
    style: styles.row,
    className: "jsx-2356791153",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265
    },
    __self: undefined
  }, __jsx("div", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, styles.labelColumn, {
      alignItems: 'center',
      flexDirection: 'row'
    }),
    className: "jsx-2356791153",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266
    },
    __self: undefined
  }, __jsx("span", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, styles.exampleSquare, {
      backgroundColor: `#${board.incompleteColor}`
    }),
    className: "jsx-2356791153" + " " + 'incomplete-color',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267
    },
    __self: undefined
  }, "Incomplete Square Example"), __jsx(react_color__WEBPACK_IMPORTED_MODULE_9__["ChromePicker"], {
    color: board.incompleteColor,
    onChange: (color, e) => changeRegularValues('incompleteColor', color.hex.substring(1, color.hex.length)),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268
    },
    __self: undefined
  })), __jsx("div", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, styles.labelColumn, {
      alignItems: 'center',
      flexDirection: 'row'
    }),
    className: "jsx-2356791153",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270
    },
    __self: undefined
  }, __jsx("span", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, styles.exampleSquare, {
      backgroundColor: `#${board.completeColor}`
    }),
    className: "jsx-2356791153" + " " + 'complete-color',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271
    },
    __self: undefined
  }, "Complete Square Example"), __jsx(react_color__WEBPACK_IMPORTED_MODULE_9__["ChromePicker"], {
    color: board.completeColor,
    onChange: (color, e) => changeRegularValues('completeColor', color.hex.substring(1, color.hex.length)),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272
    },
    __self: undefined
  }))), __jsx("div", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, styles.row, {
      justifyContent: 'flex-start'
    }),
    className: "jsx-2356791153",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275
    },
    __self: undefined
  }, __jsx("span", {
    style: styles.inputLabel,
    className: "jsx-2356791153",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276
    },
    __self: undefined
  }, "Set \"Free Square\" Image")), __jsx("div", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, styles.row, {
      justifyContent: 'flex-start'
    }),
    className: "jsx-2356791153",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278
    },
    __self: undefined
  }, __jsx("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getRootProps(), {
    className: "jsx-2356791153",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279
    },
    __self: undefined
  }), __jsx("input", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getInputProps(), {
    className: "jsx-2356791153",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280
    },
    __self: undefined
  })), isDragActive ? __jsx("div", {
    style: styles.dropzone,
    className: "jsx-2356791153",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283
    },
    __self: undefined
  }, __jsx("p", {
    style: {
      textAlign: 'center'
    },
    className: "jsx-2356791153",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284
    },
    __self: undefined
  }, "Click or drag to upload an image"), __jsx("p", {
    style: {
      textAlign: 'center'
    },
    className: "jsx-2356791153",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285
    },
    __self: undefined
  }, "Images must be square, and images with a transparent background work best.")) : __jsx("div", {
    style: styles.dropzone,
    className: "jsx-2356791153",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287
    },
    __self: undefined
  }, __jsx("p", {
    style: {
      textAlign: 'center'
    },
    className: "jsx-2356791153",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288
    },
    __self: undefined
  }, "Click or drag here to change image"), __jsx("p", {
    style: {
      textAlign: 'center'
    },
    className: "jsx-2356791153",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289
    },
    __self: undefined
  }, "Images must be square, and images with a transparent background work best."))), __jsx("div", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, styles.exampleSquare, {
      backgroundColor: `#${board.completeColor}`
    }),
    className: "jsx-2356791153",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293
    },
    __self: undefined
  }, __jsx("img", {
    style: styles.image,
    src: !board.freeSquareIcon ? '../../static/circle_check.png' : board.freeSquareIcon,
    className: "jsx-2356791153",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294
    },
    __self: undefined
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "2356791153",
    __self: undefined
  }, ".jsx-2356791153::-webkit-scrollbar{width:10px;}.jsx-2356791153::-webkit-scrollbar-track{background:#f1f1f1;}.jsx-2356791153::-webkit-scrollbar-thumb{background:#888;}.jsx-2356791153::-webkit-scrollbar-thumb:hover{background:#555;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zcGVuY2VyZm9yZC9Eb2N1bWVudHMvREVWeWFsbC9QZXJzb25hbFByb2plY3RzL0NvcnBvcmF0ZUJpbmdvV2ViL2NvbXBvbmVudHMvTWFuYWdlQm9hcmQvQm9hcmRTZXR0aW5ncy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwU2lCLEFBSWtDLEFBS1EsQUFLSCxBQUtBLFdBZGxCLEtBVUEsQUFLQSxHQVZBIiwiZmlsZSI6Ii9Vc2Vycy9zcGVuY2VyZm9yZC9Eb2N1bWVudHMvREVWeWFsbC9QZXJzb25hbFByb2plY3RzL0NvcnBvcmF0ZUJpbmdvV2ViL2NvbXBvbmVudHMvTWFuYWdlQm9hcmQvQm9hcmRTZXR0aW5ncy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZHVjZXIsIHVzZUNhbGxiYWNrLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cbi8vIHJlZHVjZXIgaW1wb3J0c1xuaW1wb3J0IHsgdXNlclJlZHVjZXJTdGF0ZSwgdXNlclJlZHVjZXIgfSBmcm9tICAnLi4vLi4vcmVkdWNlcnMvdXNlclJlZHVjZXInO1xuaW1wb3J0IHsgbWFuYWdlQm9hcmRzUmVkdWNlclN0YXRlLCBtYW5hZ2VCb2FyZHNSZWR1Y2VyIH0gZnJvbSAgJy4uLy4uL3JlZHVjZXJzL21hbmFnZUJvYXJkc1JlZHVjZXInO1xuaW1wb3J0IHsgTWFuYWdlQm9hcmRzQ29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHRzL21hbmFnZUJvYXJkc0NvbnRleHQnO1xuXG4vLyBTdHlsZSBpbXBvcnRzXG5pbXBvcnQgeyBNQVNURVIsIENPTE9SUyB9IGZyb20gJy4uLy4uL3N0eWxlcy9tYXN0ZXJTdHlsZXMnO1xuXG4vLyBDb21wb25lbnQgSW1wb3J0c1xuaW1wb3J0IHsgQ2hyb21lUGlja2VyIH0gZnJvbSAncmVhY3QtY29sb3InO1xuaW1wb3J0IHt1c2VEcm9wem9uZX0gZnJvbSAncmVhY3QtZHJvcHpvbmUnXG5cbi8vIE1hdGVyaWFsIFVJXG5pbXBvcnQgU3dpdGNoIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1N3aXRjaCc7XG5pbXBvcnQgU2VsZWN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NlbGVjdCc7XG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW0nO1xuXG5jb25zdCBCb2FyZFNldHRpbmdzID0gKHByb3BzKSA9PiB7XG5cbiAgICBjb25zdCB7IGNvbnRleHRCb2FyZCwgdXBkYXRlQm9hcmQsIHNldFN0dWZmVG9TYXZlIH0gPSB1c2VDb250ZXh0KE1hbmFnZUJvYXJkc0NvbnRleHQpO1xuXG4gICAgY29uc3QgW2JvYXJkLCBzZXRCb2FyZF0gPSB1c2VTdGF0ZShjb250ZXh0Qm9hcmQpO1xuICAgIGNvbnN0IFtoYXNUaW1lbGltaXQsIHNldEhhc1RpbWVsaW1pdF0gPSB1c2VTdGF0ZSghIXByb3BzLmJvYXJkLnRpbWVMaW1pdCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZighY29udGV4dEJvYXJkLl9pZCl7XG4gICAgICAgICAgICBzZXRCb2FyZChwcm9wcy5ib2FyZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRCb2FyZChjb250ZXh0Qm9hcmQpO1xuICAgICAgICB9XG4gICAgfSwgW2NvbnRleHRCb2FyZF0pXG5cbiAgICBjb25zdCBjaGFuZ2VSZWd1bGFyVmFsdWVzID0gKG5hbWUsIHZhbCkgPT4ge1xuICAgICAgICB1cGRhdGVCb2FyZCh7XG4gICAgICAgICAgICAuLi5ib2FyZCxcbiAgICAgICAgICAgIFtuYW1lXTogdmFsXG4gICAgICAgIH0pXG4gICAgICAgIHNldFN0dWZmVG9TYXZlKHRydWUpO1xuICAgIH1cblxuICAgIGNvbnN0IGNoYW5nZVVzZUdyb3VwcyA9IGJvb2wgPT4ge1xuICAgICAgICB1cGRhdGVCb2FyZCh7XG4gICAgICAgICAgICAuLi5ib2FyZCxcbiAgICAgICAgICAgIGdyb3Vwczoge1xuICAgICAgICAgICAgICAgIC4uLmJvYXJkLmdyb3VwcyxcbiAgICAgICAgICAgICAgICB1c2VUZWFtczogYm9vbFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgc2V0U3R1ZmZUb1NhdmUodHJ1ZSk7XG4gICAgfVxuXG4gICAgY29uc3QgY2hhbmdlVGVhbXMgPSB0ZWFtcyA9PiB7XG4gICAgICAgIHVwZGF0ZUJvYXJkKHtcbiAgICAgICAgICAgIC4uLmJvYXJkLFxuICAgICAgICAgICAgZ3JvdXBzOiB7XG4gICAgICAgICAgICAgICAgLi4uYm9hcmQuZ3JvdXBzLFxuICAgICAgICAgICAgICAgIHRlYW1zOiB0ZWFtc1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgc2V0U3R1ZmZUb1NhdmUodHJ1ZSk7XG4gICAgfVxuXG5cbiAgICBjb25zdCBkZWxldGVUZWFtID0gaWQgPT4ge1xuICAgICAgICBjaGFuZ2VUZWFtcyhib2FyZC5ncm91cHMudGVhbXMuZmlsdGVyKHRlYW0gPT4gdGVhbS5faWQgIT09IGlkKSk7XG4gICAgfVxuXG4gICAgY29uc3QgYWRkVGVhbSA9ICgpID0+IHtcbiAgICAgICAgY2hhbmdlVGVhbXMoWy4uLmJvYXJkLmdyb3Vwcy50ZWFtcywge2lkOiBNYXRoLnJhbmRvbSgpLCBuYW1lOiAnJywgYWNjZXNzQ29kZTogJyd9XSk7XG4gICAgfVxuXG4gICAgY29uc3Qgb25Ecm9wID0gdXNlQ2FsbGJhY2soYWNjZXB0ZWRGaWxlcyA9PiB7XG4gICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgIHJlYWRlci5vbmFib3J0ID0gKCkgPT4gYWxlcnQoJ2ZpbGUgcmVhZGluZyB3YXMgYWJvcnRlZCcpXG4gICAgICAgIHJlYWRlci5vbmVycm9yID0gKCkgPT4gYWxlcnQoJ2ZpbGUgcmVhZGluZyBoYXMgZmFpbGVkJylcbiAgICAgICAgY29uc3QgZmlsZSA9IGFjY2VwdGVkRmlsZXNbMF07XG4gICAgICAgIC8vIGlmKCFzdXBwb3J0ZWRGaWxlVHlwZXMuaW5jbHVkZXMoZmlsZS50eXBlKSl7XG4gICAgICAgIC8vICAgICB0aGlzLm9wZW5TbmFja0Jhcig8Rm9ybWF0dGVkTWVzc2FnZSB7Li4uVXNlck1lc3NhZ2VzLndyb25nRmlsZVR5cGV9IC8+KTtcbiAgICAgICAgLy8gfSBlbHNlIGlmIChmaWxlLnNpemUgPiAxMDAwMDAwMCl7XG4gICAgICAgIC8vICAgICB0aGlzLm9wZW5TbmFja0Jhcig8Rm9ybWF0dGVkTWVzc2FnZSB7Li4uVXNlck1lc3NhZ2VzLnBpY1Rvb0JpZ30gLz4pO1xuICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAgICAgcmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PlxuICAgICAgICAgICAgICAgIGNoYW5nZVJlZ3VsYXJWYWx1ZXMoJ2ZyZWVTcXVhcmVJY29uJywgcmVhZGVyLnJlc3VsdClcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcbiAgICAgICAgLy8gfVxuICAgIH0sIFtdKTtcbiAgICBjb25zdCB7Z2V0Um9vdFByb3BzLCBnZXRJbnB1dFByb3BzLCBpc0RyYWdBY3RpdmV9ID0gdXNlRHJvcHpvbmUoe29uRHJvcH0pXG5cbiAgICBjb25zdCBnZW5lcmF0ZVRlYW1zID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gYm9hcmQuZ3JvdXBzLnRlYW1zLm1hcCgodGVhbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2B0ZWFtLWlkLSR7dGVhbS5faWR9YH0gc3R5bGU9e3sgLi4uc3R5bGVzLmxhYmVsQ29sdW1uLCBmbGV4RGlyZWN0aW9uOiAncm93JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIG1hcmdpblRvcDogMTB9fT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgLi4uc3R5bGVzLmlucHV0TGFiZWwsICBtYXJnaW5MZWZ0OiA1LCBtYXJnaW5SaWdodDogNX19PlRlYW0gTmFtZTogPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyAuLi5NQVNURVIud2lkZVJvdW5kSW5wdXQsIG1hcmdpblRvcDogNSwgd2lkdGg6ICdhdXRvJywgcGFkZGluZzogJzAgMjBweCAwIDIwcHgnLCBtYXhXaWR0aDogNzAwIH19IFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RlYW0ubmFtZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBjaGFuZ2VUZWFtcyhib2FyZC5ncm91cHMudGVhbXMubWFwKGdyb3VwID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihncm91cC5faWQgPT09IHRlYW0uX2lkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7Li4uZ3JvdXAsIG5hbWU6IGUudGFyZ2V0LnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ3JvdXA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSl9IFxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9eydlLmcuIFRlYW0gQWxwaGEnfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyAuLi5zdHlsZXMuaW5wdXRMYWJlbCwgIG1hcmdpbkxlZnQ6IDEwLCBtYXJnaW5SaWdodDogNX19PkFjY2VzcyBDb2RlOiA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IC4uLk1BU1RFUi53aWRlUm91bmRJbnB1dCwgbWFyZ2luVG9wOiA1LCB3aWR0aDogJ2F1dG8nLCBwYWRkaW5nOiAnMCAyMHB4IDAgMjBweCcsIG1heFdpZHRoOiA3MDAgfX0gXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGVhbS5hY2Nlc3NDb2RlfSBcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IGNoYW5nZVRlYW1zKGJvYXJkLmdyb3Vwcy50ZWFtcy5tYXAoZ3JvdXAgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGdyb3VwLl9pZCA9PT0gdGVhbS5faWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsuLi5ncm91cCwgYWNjZXNzQ29kZTogZS50YXJnZXQudmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBncm91cDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXsnZS5nLiB0ZWFtQWxwaGFSdWxleid9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gZGVsZXRlVGVhbSh0ZWFtLl9pZCl9PkRFTEVURTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGlmKCFib2FyZC5faWQpe1xuICAgICAgICByZXR1cm4gPGRpdj5MT0FESU5HPC9kaXY+XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuc3ViY29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMucm93fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmxhYmVsQ29sdW1ufT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXtzdHlsZXMuaW5wdXRMYWJlbH0+VGl0bGU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgLi4uTUFTVEVSLndpZGVSb3VuZElucHV0LCBtYXJnaW5Ub3A6IDUsIHdpZHRoOiAnYXV0bycsIHBhZGRpbmc6ICcwIDIwcHggMCAyMHB4JywgbWF4V2lkdGg6IDcwMCB9fSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Ym9hcmQudGl0bGV9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IGNoYW5nZVJlZ3VsYXJWYWx1ZXMoJ3RpdGxlJywgZS50YXJnZXQudmFsdWUpfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17J2UuZy4gU2FsZXMnfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLnJvd30+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5sYWJlbENvbHVtbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17c3R5bGVzLmlucHV0TGFiZWx9PkRlc2NyaXB0aW9uL0luc3RydWN0aW9ucy9IaW50PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IC4uLk1BU1RFUi53aWRlUm91bmRUZXh0QXJlYSwgbWFyZ2luVG9wOiA1LCB3aWR0aDogJ2F1dG8nLCBwYWRkaW5nOiAnNXB4IDIwcHgnLCBtYXhXaWR0aDogNzAwIH19IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtib2FyZC5kZXNjcmlwdGlvbn0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gY2hhbmdlUmVndWxhclZhbHVlcygnZGVzY3JpcHRpb24nLCBlLnRhcmdldC52YWx1ZSl9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXsnZS5nLiBUbyBiZSBkb25lIG9uIHRoZSBmaXJzdCBkYXkgaW4gYSBuZXcgb2ZmaWNlJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5yb3d9IGNsYXNzTmFtZT0nbnVtLXNxdWFyZXMtcmFuZG9taXplJz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyAuLi5zdHlsZXMubGFiZWxDb2x1bW4sIGZsZXhEaXJlY3Rpb246ICdyb3cnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJ319PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgLi4uc3R5bGVzLmlucHV0TGFiZWwsIG1hcmdpblJpZ2h0OiAxMCwgbWFyZ2luTGVmdDogNX19Pk51bWJlciBvZiBzcXVhcmVzOjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5RW1wdHk9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtib2FyZC5udW1TcXVhcmVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gY2hhbmdlUmVndWxhclZhbHVlcygnbnVtU3F1YXJlcycsIGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdudW0gc3F1YXJlcycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAnbnVtLXNxdWFyZXMtc2VsZWN0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIjRcIj40PC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCI5XCI+OTwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiMTZcIj4xNjwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiMjVcIj4yNTwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgLi4uc3R5bGVzLmxhYmVsQ29sdW1uLCBmbGV4RGlyZWN0aW9uOiAncm93JywgYWxpZ25JdGVtczogJ2NlbnRlcid9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTd2l0Y2hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZSA9IHsoKSA9PiBjaGFuZ2VSZWd1bGFyVmFsdWVzKCdyYW5kb21pemUnLCAhYm9hcmQucmFuZG9taXplKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHtib2FyZC5yYW5kb21pemV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17Ym9hcmQucmFuZG9taXplfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IC4uLnN0eWxlcy5pbnB1dExhYmVsLCAgbWFyZ2luTGVmdDogNX19PlJhbmRvbWl6ZSBzcXVhcmUgcGxhY2VtZW50PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMucm93fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyAuLi5zdHlsZXMubGFiZWxDb2x1bW4sIGZsZXhEaXJlY3Rpb246ICdyb3cnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJ319PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFN3aXRjaFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0geygpID0+IGNoYW5nZVJlZ3VsYXJWYWx1ZXMoJ211c3RCZURvbmVJbk9yZGVyJywgIWJvYXJkLm11c3RCZURvbmVJbk9yZGVyKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHtib2FyZC5tdXN0QmVEb25lSW5PcmRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtib2FyZC5tdXN0QmVEb25lSW5PcmRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyAuLi5zdHlsZXMuaW5wdXRMYWJlbCwgIG1hcmdpbkxlZnQ6IDV9fT5TcXVhcmVzIG11c3QgYmUgZG9uZSBpbiBvcmRlcjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgLi4uc3R5bGVzLmxhYmVsQ29sdW1uLCBmbGV4RGlyZWN0aW9uOiAncm93JywgYWxpZ25JdGVtczogJ2NlbnRlcid9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTd2l0Y2hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZSA9IHsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKCEhYm9hcmQudGltZWxpbWl0KXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEhhc1RpbWVsaW1pdChmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VSZWd1bGFyVmFsdWVzKCd0aW1lbGltaXQnLCBudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEhhc1RpbWVsaW1pdCh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZVJlZ3VsYXJWYWx1ZXMoJ3RpbWVsaW1pdCcsICdtaW4xNScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHshIWJvYXJkLnRpbWVsaW1pdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXshIWJvYXJkLnRpbWVsaW1pdH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyAuLi5zdHlsZXMuaW5wdXRMYWJlbCwgbWFyZ2luUmlnaHQ6IDUsIG1hcmdpbkxlZnQ6IDV9fT5UaW1lIGxpbWl0Ojwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtoYXNUaW1lbGltaXQgPyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlFbXB0eT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtib2FyZC50aW1lbGltaXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gY2hhbmdlUmVndWxhclZhbHVlcygndGltZWxpbWl0JywgZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAnZGVtby1jb250cm9sbGVkLW9wZW4tc2VsZWN0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIm1pbjE1XCI+MTUgbWludXRlczwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIm1pbjMwXCI+MzAgbWludXRlczwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cImhvdXIxXCI+MSBob3VyPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiaG91cjJcIj4yIGhvdXJzPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiaG91cjRcIj40IGhvdXJzPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiaG91cjhcIj44IGhvdXJzPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiaG91cjEyXCI+MTIgaG91cnM8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJkYXkxXCI+MjQgaG91cnM8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJkYXk3XCI+MSB3ZWVrPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxzcGFuPk5vbmU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMucm93fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyAuLi5zdHlsZXMubGFiZWxDb2x1bW4sIGZsZXhEaXJlY3Rpb246ICdyb3cnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJ319PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFN3aXRjaFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0geygpID0+IGNoYW5nZVVzZUdyb3VwcyghYm9hcmQuZ3JvdXBzLnVzZVRlYW1zKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHtib2FyZC5ncm91cHMudXNlVGVhbXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17Ym9hcmQuZ3JvdXBzLnVzZVRlYW1zfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IC4uLnN0eWxlcy5pbnB1dExhYmVsLCAgbWFyZ2luTGVmdDogNX19PlRlYW1zPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAge2JvYXJkLmdyb3Vwcy51c2VUZWFtcyAmJiA8ZGl2IG9uQ2xpY2s9eygpID0+IGFkZFRlYW0oKX0+QUREIFRFQU08L2Rpdj59XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHtib2FyZC5ncm91cHMudXNlVGVhbXMgJiZcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLnJvd30gY2xhc3NOYW1lPVwidGVhbXMtc2VjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmxhYmVsQ29sdW1ufT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Z2VuZXJhdGVUZWFtcygpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7IWJvYXJkLmdyb3Vwcy51c2VUZWFtcyAmJlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMucm93fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5sYWJlbENvbHVtbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3N0eWxlcy5pbnB1dExhYmVsfT5Db2RlIHRvIEFjY2VzcyBCb2FyZDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IC4uLk1BU1RFUi53aWRlUm91bmRJbnB1dCwgbWFyZ2luVG9wOiA1LCB3aWR0aDogJ2F1dG8nLCBwYWRkaW5nOiAnMCAyMHB4IDAgMjBweCcsIG1heFdpZHRoOiA3MDAgfX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtib2FyZC5hY2Nlc3NDb2RlfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gY2hhbmdlUmVndWxhclZhbHVlcygnYWNjZXNzQ29kZScsIGUudGFyZ2V0LnZhbHVlKX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXsnZS5nLiBTYWxlcyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyAuLi5zdHlsZXMucm93LCBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtc3RhcnQnIH19PlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17c3R5bGVzLmlucHV0TGFiZWx9PlNldCBTcXVhcmUgQ29sb3JzPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5yb3d9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IC4uLnN0eWxlcy5sYWJlbENvbHVtbiwgYWxpZ25JdGVtczogJ2NlbnRlcicsIGZsZXhEaXJlY3Rpb246ICdyb3cnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdpbmNvbXBsZXRlLWNvbG9yJyBzdHlsZT17eyAuLi5zdHlsZXMuZXhhbXBsZVNxdWFyZSwgYmFja2dyb3VuZENvbG9yOiBgIyR7Ym9hcmQuaW5jb21wbGV0ZUNvbG9yfWB9fT5JbmNvbXBsZXRlIFNxdWFyZSBFeGFtcGxlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPENocm9tZVBpY2tlciBjb2xvcj17Ym9hcmQuaW5jb21wbGV0ZUNvbG9yfSBvbkNoYW5nZT17KGNvbG9yLCBlKSA9PiBjaGFuZ2VSZWd1bGFyVmFsdWVzKCdpbmNvbXBsZXRlQ29sb3InLCBjb2xvci5oZXguc3Vic3RyaW5nKDEsIGNvbG9yLmhleC5sZW5ndGgpKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgLi4uc3R5bGVzLmxhYmVsQ29sdW1uLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgZmxleERpcmVjdGlvbjogJ3JvdycgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2NvbXBsZXRlLWNvbG9yJyBzdHlsZT17eyAuLi5zdHlsZXMuZXhhbXBsZVNxdWFyZSwgYmFja2dyb3VuZENvbG9yOiBgIyR7Ym9hcmQuY29tcGxldGVDb2xvcn1gfX0+Q29tcGxldGUgU3F1YXJlIEV4YW1wbGU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2hyb21lUGlja2VyIGNvbG9yPXtib2FyZC5jb21wbGV0ZUNvbG9yfSBvbkNoYW5nZT17KGNvbG9yLCBlKSA9PiBjaGFuZ2VSZWd1bGFyVmFsdWVzKCdjb21wbGV0ZUNvbG9yJywgY29sb3IuaGV4LnN1YnN0cmluZygxLCBjb2xvci5oZXgubGVuZ3RoKSl9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgLi4uc3R5bGVzLnJvdywganVzdGlmeUNvbnRlbnQ6ICdmbGV4LXN0YXJ0JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3N0eWxlcy5pbnB1dExhYmVsfT5TZXQgXCJGcmVlIFNxdWFyZVwiIEltYWdlPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgLi4uc3R5bGVzLnJvdywganVzdGlmeUNvbnRlbnQ6ICdmbGV4LXN0YXJ0JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiB7Li4uZ2V0Um9vdFByb3BzKCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHsuLi5nZXRJbnB1dFByb3BzKCl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc0RyYWdBY3RpdmUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5kcm9wem9uZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7dGV4dEFsaWduOiAnY2VudGVyJ319PkNsaWNrIG9yIGRyYWcgdG8gdXBsb2FkIGFuIGltYWdlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e3RleHRBbGlnbjogJ2NlbnRlcid9fT5JbWFnZXMgbXVzdCBiZSBzcXVhcmUsIGFuZCBpbWFnZXMgd2l0aCBhIHRyYW5zcGFyZW50IGJhY2tncm91bmQgd29yayBiZXN0LjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuZHJvcHpvbmV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e3RleHRBbGlnbjogJ2NlbnRlcid9fT5DbGljayBvciBkcmFnIGhlcmUgdG8gY2hhbmdlIGltYWdlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e3RleHRBbGlnbjogJ2NlbnRlcid9fT5JbWFnZXMgbXVzdCBiZSBzcXVhcmUsIGFuZCBpbWFnZXMgd2l0aCBhIHRyYW5zcGFyZW50IGJhY2tncm91bmQgd29yayBiZXN0LjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgLi4uc3R5bGVzLmV4YW1wbGVTcXVhcmUsIGJhY2tncm91bmRDb2xvcjogYCMke2JvYXJkLmNvbXBsZXRlQ29sb3J9YH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17c3R5bGVzLmltYWdlfSBzcmM9eyFib2FyZC5mcmVlU3F1YXJlSWNvbiA/ICcuLi8uLi9zdGF0aWMvY2lyY2xlX2NoZWNrLnBuZycgIDogYm9hcmQuZnJlZVNxdWFyZUljb259ICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj4gICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAgICAgLyogd2lkdGggKi9cbiAgICAgICAgICAgICAgICAgICAgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8qIFRyYWNrICovXG4gICAgICAgICAgICAgICAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8qIEhhbmRsZSAqL1xuICAgICAgICAgICAgICAgICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjODg4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvKiBIYW5kbGUgb24gaG92ZXIgKi9cbiAgICAgICAgICAgICAgICAgICAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzU1NTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG4gIH07XG5cbiAgY29uc3Qgc3R5bGVzID0ge1xuICAgICAgY29udGFpbmVyOiB7XG4gICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICBtYXhIZWlnaHQ6IDcwMCxcbiAgICAgICAgICBvdmVyZmxvd1k6ICdzY3JvbGwnLFxuICAgICAgICAgIG92ZXJmbG93WDogJ292ZXJsYXknLFxuICAgICAgICAgIHBhZGRpbmdCb3R0b206IDEwLFxuICAgICAgICAgIHBhZGRpbmc6ICczJSA1JScsXG4gICAgICB9LFxuICAgICAgc3ViY29udGFpbmVyOiB7XG4gICAgICB9LFxuICAgICAgcm93OiB7XG4gICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAvLyAgIGZsZXhXcmFwOiAnd3JhcCcsXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1hcm91bmQnLFxuICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgbWFyZ2luVG9wOiAxNVxuICAgICAgfSxcbiAgICAgIGxhYmVsQ29sdW1uOiB7XG4gICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICBtaW5XaWR0aDogMzAwLFxuICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgIH0sXG4gICAgICBpbnB1dExhYmVsOiB7XG4gICAgICAgICAgbWFyZ2luTGVmdDogMTUsXG4gICAgICAgICAgY29sb3I6IENPTE9SUy5wcmltYXJ5LFxuICAgICAgICAgIGZvbnRTaXplOiAxNyxcbiAgICAgIH0sXG4gICAgICBleGFtcGxlU3F1YXJlOiB7XG4gICAgICAgICAgd2lkdGg6IDIwMCxcbiAgICAgICAgICBoZWlnaHQ6IDIwMCxcbiAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCBibGFjaycsXG4gICAgICAgICAgbWFyZ2luUmlnaHQ6IDEwXG4gICAgICB9LFxuICAgICAgaW1hZ2U6IHtcbiAgICAgICAgICB3aWR0aDogJzgwJScsXG4gICAgICAgICAgaGVpZ2h0OiAnODAlJyxcbiAgICAgIH0sXG4gICAgICBkcm9wem9uZToge1xuICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JywgXG4gICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgIHdpZHRoOiAyMDAsXG4gICAgICAgIGhlaWdodDogMjAwLFxuICAgICAgICBib3JkZXI6ICcycHggZG90dGVkIGJsYWNrJyxcbiAgICAgICAgbWFyZ2luUmlnaHQ6IDEwLFxuICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgICAgb3V0bGluZTogJ25vbmUnLFxuICAgIH1cbiAgfVxuICBcbiAgZXhwb3J0IGRlZmF1bHQgQm9hcmRTZXR0aW5nczsiXX0= */\n/*@ sourceURL=/Users/spencerford/Documents/DEVyall/PersonalProjects/CorporateBingoWeb/components/ManageBoard/BoardSettings.js */"));
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
    color: _styles_masterStyles__WEBPACK_IMPORTED_MODULE_8__["COLORS"].primary,
    fontSize: 17
  },
  exampleSquare: {
    width: 200,
    height: 200,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid black',
    marginRight: 10
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

/***/ "./components/ManageBoard/BoardTeamsOrPlayers.js":
/*!*******************************************************!*\
  !*** ./components/ManageBoard/BoardTeamsOrPlayers.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_userReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../reducers/userReducer */ "./reducers/userReducer.js");
/* harmony import */ var _styles_masterStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/masterStyles */ "./styles/masterStyles.js");
var _jsxFileName = "/Users/spencerford/Documents/DEVyall/PersonalProjects/CorporateBingoWeb/components/ManageBoard/BoardTeamsOrPlayers.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // reducer imports

 // Style imports



const BoardTeamOrPlayers = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const {
    0: userState,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(_reducers_userReducer__WEBPACK_IMPORTED_MODULE_2__["userReducer"], _reducers_userReducer__WEBPACK_IMPORTED_MODULE_2__["userReducerState"]);
  const {
    0: userName,
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
      lineNumber: 21
    },
    __self: undefined
  }, __jsx("div", {
    style: styles.subcontainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx("div", {
    style: _styles_masterStyles__WEBPACK_IMPORTED_MODULE_3__["MASTER"].pageTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, "TEAM OR PLAYERS")));
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_masterStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/masterStyles */ "./styles/masterStyles.js");
/* harmony import */ var _BoardSettings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BoardSettings */ "./components/ManageBoard/BoardSettings.js");
/* harmony import */ var _BoardTeamsOrPlayers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BoardTeamsOrPlayers */ "./components/ManageBoard/BoardTeamsOrPlayers.js");
/* harmony import */ var _BoardBuilder_BoardBuilder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BoardBuilder/BoardBuilder */ "./components/ManageBoard/BoardBuilder/BoardBuilder.js");
/* harmony import */ var _BoardRewards__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./BoardRewards */ "./components/ManageBoard/BoardRewards.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Tabs */ "@material-ui/core/Tabs");
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Tab */ "@material-ui/core/Tab");
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "/Users/spencerford/Documents/DEVyall/PersonalProjects/CorporateBingoWeb/components/ManageBoard/ManageBoardContainer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // reducer imports
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
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(__jsx(_BoardSettings__WEBPACK_IMPORTED_MODULE_3__["default"], {
    changesMade: props.changesMade,
    board: props.board,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }));

  const selectTab = tab => {
    setTab(tab);

    switch (tab) {
      case 0:
        setComponent(__jsx(_BoardSettings__WEBPACK_IMPORTED_MODULE_3__["default"], {
          changesMade: props.changesMade,
          board: props.board,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: undefined
        }));
        return;

      case 1:
        setComponent(__jsx(_BoardBuilder_BoardBuilder__WEBPACK_IMPORTED_MODULE_5__["default"], {
          changesMade: props.changesMade,
          board: props.board,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: undefined
        }));
        return;

      case 2:
        setComponent(__jsx(_BoardTeamsOrPlayers__WEBPACK_IMPORTED_MODULE_4__["default"], {
          changesMade: props.changesMade,
          board: props.board,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          __self: undefined
        }));
        return;

      case 3:
        setComponent(__jsx(_BoardRewards__WEBPACK_IMPORTED_MODULE_6__["default"], {
          changesMade: props.changesMade,
          board: props.board,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          },
          __self: undefined
        }));
        return;

      default:
        setComponent(__jsx(_BoardSettings__WEBPACK_IMPORTED_MODULE_3__["default"], {
          changesMade: props.changesMade,
          board: props.board,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: undefined
        }));
        return;
    }
  };

  return __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, __jsx(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_8___default.a, {
    value: tab,
    indicatorColor: "primary",
    textColor: "primary",
    onChange: (e, val) => selectTab(val),
    "aria-label": "manage boards views tabs",
    variant: "fullWidth",
    centered: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_9___default.a, {
    label: "Settings",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }), __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_9___default.a, {
    label: "Board",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }), __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_9___default.a, {
    label: props.board.groups.useTeams ? 'Teams' : 'Players',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }), __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_9___default.a, {
    label: "Rewards",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  })), __jsx("div", {
    style: {
      borderTop: `1px solid ${_styles_masterStyles__WEBPACK_IMPORTED_MODULE_2__["COLORS"].primary}`,
      maxHeight: 800,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
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
/* harmony import */ var _reducers_manageBoardsReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../reducers/manageBoardsReducer */ "./reducers/manageBoardsReducer.js");
/* harmony import */ var _contexts_manageBoardsContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../contexts/manageBoardsContext */ "./contexts/manageBoardsContext.js");
/* harmony import */ var _styles_masterStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/masterStyles */ "./styles/masterStyles.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Layout */ "./components/Layout.js");
/* harmony import */ var _ManageBoardContainer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ManageBoardContainer */ "./components/ManageBoard/ManageBoardContainer.js");

var _jsxFileName = "/Users/spencerford/Documents/DEVyall/PersonalProjects/CorporateBingoWeb/components/ManageBoard/ManageBoardsIndex.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

 // reducer imports


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
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_contexts_manageBoardsContext__WEBPACK_IMPORTED_MODULE_5__["ManageBoardsContext"]);
  const {
    0: board,
    1: setBoard
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({});
  const {
    0: changesToSave,
    1: setChangesToSave
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    if (!contextBoard._id) {
      getBoard(router.query.boardID);
    } else {
      setBoard(contextBoard);
    }

    if (changesToSave) {
      setStuffToSave(true);
    }
  }, [contextBoard, changesToSave]);

  if (board && board._id) {
    return __jsx(_Layout__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: undefined
    }, __jsx("div", {
      style: styles.container,
      className: "jsx-494546971",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
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
        lineNumber: 42
      },
      __self: undefined
    }, __jsx("div", {
      style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _styles_masterStyles__WEBPACK_IMPORTED_MODULE_6__["MASTER"].pageTitle),
      className: "jsx-494546971",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: undefined
    }, "MANAGING BOARD: ", board.title), stuffToSave ? __jsx("button", {
      style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _styles_masterStyles__WEBPACK_IMPORTED_MODULE_6__["MASTER"].wideRoundBtn, {
        width: 150,
        margin: 0
      }),
      onClick: () => saveBoard(),
      className: "jsx-494546971" + " " + 'pulse-btn',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: undefined
    }, __jsx("div", {
      style: _styles_masterStyles__WEBPACK_IMPORTED_MODULE_6__["MASTER"].wideRoundBtnText,
      className: "jsx-494546971",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: undefined
    }, "SAVE")) : __jsx("button", {
      style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _styles_masterStyles__WEBPACK_IMPORTED_MODULE_6__["MASTER"].wideRoundBtn, {
        width: 150,
        margin: 0,
        backgroundColor: 'gray'
      }),
      className: "jsx-494546971",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: undefined
    }, __jsx("div", {
      style: _styles_masterStyles__WEBPACK_IMPORTED_MODULE_6__["MASTER"].wideRoundBtnText,
      className: "jsx-494546971",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: undefined
    }, "SAVE"))), __jsx(_ManageBoardContainer__WEBPACK_IMPORTED_MODULE_9__["default"], {
      board: board,
      changesMade: setChangesToSave,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: undefined
    })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "494546971",
      __self: undefined
    }, ".pulse-btn.jsx-494546971{-webkit-animation:shadow-pulse-jsx-494546971 1.5s infinite;animation:shadow-pulse-jsx-494546971 1.5s infinite;}@-webkit-keyframes shadow-pulse-jsx-494546971{0%{box-shadow:0 0 0 0px rgba(0,0,0,0.2);}100%{box-shadow:0 0 0 30px rgba(0,0,0,0);}}@keyframes shadow-pulse-jsx-494546971{0%{box-shadow:0 0 0 0px rgba(0,0,0,0.2);}100%{box-shadow:0 0 0 30px rgba(0,0,0,0);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zcGVuY2VyZm9yZC9Eb2N1bWVudHMvREVWeWFsbC9QZXJzb25hbFByb2plY3RzL0NvcnBvcmF0ZUJpbmdvV2ViL2NvbXBvbmVudHMvTWFuYWdlQm9hcmQvTWFuYWdlQm9hcmRzSW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNERpQixBQUc0RCxBQUlTLEFBR0Qsb0NBQzNDLENBSEEseUVBSkoiLCJmaWxlIjoiL1VzZXJzL3NwZW5jZXJmb3JkL0RvY3VtZW50cy9ERVZ5YWxsL1BlcnNvbmFsUHJvamVjdHMvQ29ycG9yYXRlQmluZ29XZWIvY29tcG9uZW50cy9NYW5hZ2VCb2FyZC9NYW5hZ2VCb2FyZHNJbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWR1Y2VyLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cbi8vIHJlZHVjZXIgaW1wb3J0c1xuaW1wb3J0IHsgbWFuYWdlQm9hcmRzUmVkdWNlclN0YXRlLCBtYW5hZ2VCb2FyZHNSZWR1Y2VyIH0gZnJvbSAgJy4uLy4uL3JlZHVjZXJzL21hbmFnZUJvYXJkc1JlZHVjZXInO1xuaW1wb3J0IHsgTWFuYWdlQm9hcmRzQ29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHRzL21hbmFnZUJvYXJkc0NvbnRleHQnO1xuXG4vLyBTdHlsZSBpbXBvcnRzXG5pbXBvcnQgeyBNQVNURVIsIENPTE9SUyB9IGZyb20gJy4uLy4uL3N0eWxlcy9tYXN0ZXJTdHlsZXMnO1xuXG4vLyBjb21wb25lbnQgaW1wb3J0c1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vTGF5b3V0JztcbmltcG9ydCBNYW5hZ2VCb2FyZENvbnRhaW5lciBmcm9tICcuL01hbmFnZUJvYXJkQ29udGFpbmVyJztcblxuXG5jb25zdCBNYW5hZ2VCb2FyZHNJbmRleCA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gICAgXG4gICAgY29uc3QgeyBjb250ZXh0Qm9hcmQsIGdldEJvYXJkLCBzZXRTdHVmZlRvU2F2ZSwgc3R1ZmZUb1NhdmUsIHNhdmVCb2FyZCB9ID0gdXNlQ29udGV4dChNYW5hZ2VCb2FyZHNDb250ZXh0KTtcblxuICBjb25zdCBbYm9hcmQsIHNldEJvYXJkXSA9IHVzZVN0YXRlKHt9KTtcbiAgY29uc3QgW2NoYW5nZXNUb1NhdmUsIHNldENoYW5nZXNUb1NhdmVdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZighY29udGV4dEJvYXJkLl9pZCl7XG4gICAgICAgIGdldEJvYXJkKHJvdXRlci5xdWVyeS5ib2FyZElEKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBzZXRCb2FyZChjb250ZXh0Qm9hcmQpO1xuICAgIH1cbiAgICBpZihjaGFuZ2VzVG9TYXZlKXtcbiAgICAgICAgc2V0U3R1ZmZUb1NhdmUodHJ1ZSlcbiAgICB9XG59LCBbY29udGV4dEJvYXJkLCBjaGFuZ2VzVG9TYXZlXSlcblxuICBcbmlmKGJvYXJkICYmIGJvYXJkLl9pZCl7XG4gICAgcmV0dXJuIChcblxuICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJywgYWxpZ25JdGVtczogJ2NlbnRlcicsIG1hcmdpbkJvdHRvbTogMjAgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgLi4uTUFTVEVSLnBhZ2VUaXRsZSB9fT5NQU5BR0lORyBCT0FSRDoge2JvYXJkLnRpdGxlfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7c3R1ZmZUb1NhdmUgP1xuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgLi4uTUFTVEVSLndpZGVSb3VuZEJ0biwgd2lkdGg6IDE1MCwgbWFyZ2luOiAwIH19IFxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2F2ZUJvYXJkKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3B1bHNlLWJ0bidcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17TUFTVEVSLndpZGVSb3VuZEJ0blRleHR9PlNBVkU8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+IDpcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IC4uLk1BU1RFUi53aWRlUm91bmRCdG4sIHdpZHRoOiAxNTAsIG1hcmdpbjogMCwgYmFja2dyb3VuZENvbG9yOiAnZ3JheScgfX0gXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e01BU1RFUi53aWRlUm91bmRCdG5UZXh0fT5TQVZFPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8TWFuYWdlQm9hcmRDb250YWluZXIgYm9hcmQ9e2JvYXJkfSBjaGFuZ2VzTWFkZT17c2V0Q2hhbmdlc1RvU2F2ZX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgICAgICAucHVsc2UtYnRuIHtcbiAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IHNoYWRvdy1wdWxzZSAxLjVzIGluZmluaXRlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgc2hhZG93LXB1bHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAzMHB4IHJnYmEoMCwgMCwgMCwgMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9MYXlvdXQ+XG5cblxuICAgICAgXG4gICAgKTtcbn1cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgICA8ZGl2Pk5PIEJPQVJEPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cbiAgXG5jb25zdCBzdHlsZXMgPSB7XG4gIGNvbnRhaW5lcjoge1xuICAgIGZsZXg6IDEsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYW5hZ2VCb2FyZHNJbmRleDsiXX0= */\n/*@ sourceURL=/Users/spencerford/Documents/DEVyall/PersonalProjects/CorporateBingoWeb/components/ManageBoard/ManageBoardsIndex.js */"));
  }

  return __jsx(_Layout__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
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

/***/ "./reducers/userReducer.js":
/*!*********************************!*\
  !*** ./reducers/userReducer.js ***!
  \*********************************/
/*! exports provided: userReducerState, userReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userReducerState", function() { return userReducerState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userReducer", function() { return userReducer; });
/* harmony import */ var _dummy_dummy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dummy/dummy */ "./dummy/dummy.js");

const userReducerState = {
  user: {
    id: 1,
    email: 'spenceraford@gmail.com',
    username: 'Spencer'
  }
};
function userReducer(state, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        user: action.payload
      };

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

/***/ 7:
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

/***/ "react-dropzone":
/*!*********************************!*\
  !*** external "react-dropzone" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dropzone");

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
//# sourceMappingURL=[boardID].js.map