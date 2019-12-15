module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../../ssr-module-cache.js');
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
    if (!user._id && localStorage.getItem('bingo_user') && localStorage.getItem('bingo_token')) {
      storeUser(JSON.parse(localStorage.getItem('bingo_user')));
    } else if (!localStorage.getItem('bingo_token') || !user) {
      logout();
    }

    if (user && user.role && user.role.org && !org) {
      getOrg(user.role.org);
    }
  }, [user]);

  if (!user || !user._id) {
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
  }, "#layout.jsx-2546284142{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:100vh;width:100vw;font:roboto;}.child-component-container.jsx-2546284142{padding:20px;width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zcGVuY2VyZm9yZC9Eb2N1bWVudHMvREVWeWFsbC9QZXJzb25hbFByb2plY3RzL0NvcnBvcmF0ZUJpbmdvV2ViL2NvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtDaUIsQUFHc0MsQUFPQSxhQUNGLFdBQ2Ysa0RBUnVCLHFFQUNOLGFBQ0QsWUFDQSxZQUNoQiIsImZpbGUiOiIvVXNlcnMvc3BlbmNlcmZvcmQvRG9jdW1lbnRzL0RFVnlhbGwvUGVyc29uYWxQcm9qZWN0cy9Db3Jwb3JhdGVCaW5nb1dlYi9jb21wb25lbnRzL0xheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNpZGVOYXYgZnJvbSAnLi9TaWRlTmF2JztcblxuLy8gY29udGV4dCBpbXBvcnRzXG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHRzL3VzZXJDb250ZXh0JztcbmltcG9ydCB7IE9yZ0NvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0cy9vcmdDb250ZXh0JztcblxuY29uc3QgTGF5b3V0ID0gKHByb3BzID0+IHtcblxuICAgIGNvbnN0IHsgdXNlciwgc3RvcmVVc2VyLCBsb2dvdXQgfSA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xuICAgIGNvbnN0IHsgb3JnLCBnZXRPcmcgfSA9IHVzZUNvbnRleHQoT3JnQ29udGV4dCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZighdXNlci5faWQgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2JpbmdvX3VzZXInKSAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYmluZ29fdG9rZW4nKSl7XG4gICAgICAgICAgICBzdG9yZVVzZXIoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYmluZ29fdXNlcicpKSk7XG4gICAgICAgIH0gZWxzZSBpZighbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2JpbmdvX3Rva2VuJykgfHwgIXVzZXIpe1xuICAgICAgICAgICAgbG9nb3V0KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYodXNlciAmJiB1c2VyLnJvbGUgJiYgdXNlci5yb2xlLm9yZyAmJiAhb3JnKXtcbiAgICAgICAgICAgIGdldE9yZyh1c2VyLnJvbGUub3JnKTtcbiAgICAgICAgfVxuICAgIH0sW3VzZXJdKTtcblxuICAgIGlmKCF1c2VyIHx8ICF1c2VyLl9pZCl7XG4gICAgICAgIHJldHVybiA8ZGl2PmxvYWRpbmc8L2Rpdj5cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGlkPSdsYXlvdXQnPlxuICAgICAgICAgICAgPFNpZGVOYXYgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjaGlsZC1jb21wb25lbnQtY29udGFpbmVyJz5cbiAgICAgICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAgICAgI2xheW91dCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250OiByb2JvdG87XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmNoaWxkLWNvbXBvbmVudC1jb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7Il19 */\n/*@ sourceURL=/Users/spencerford/Documents/DEVyall/PersonalProjects/CorporateBingoWeb/components/Layout.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Play/PlayBoard.js":
/*!**************************************!*\
  !*** ./components/Play/PlayBoard.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_masterStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/masterStyles */ "./styles/masterStyles.js");
/* harmony import */ var _constants_boardSizes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/boardSizes */ "./constants/boardSizes.js");
/* harmony import */ var _funcs_boardLogic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../funcs/boardLogic */ "./funcs/boardLogic.js");
/* harmony import */ var _contexts_playContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../contexts/playContext */ "./contexts/playContext.js");
/* harmony import */ var _SquareDetail__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SquareDetail */ "./components/Play/SquareDetail.js");
/* harmony import */ var _RewardDetail__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./RewardDetail */ "./components/Play/RewardDetail.js");
/* harmony import */ var _Tasks_PlayHints__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Tasks/PlayHints */ "./components/Play/Tasks/PlayHints.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Dialog */ "@material-ui/core/Dialog");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "@material-ui/core/DialogActions");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "@material-ui/core/DialogTitle");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/Close */ "@material-ui/icons/Close");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_15__);

var _jsxFileName = "/Users/spencerford/Documents/DEVyall/PersonalProjects/CorporateBingoWeb/components/Play/PlayBoard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
 // Style imports

 // Data imports


 // context imports

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

const DialogTitle = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__["withStyles"])(materialStyles)(props => {
  const {
    children,
    classes,
    onClose
  } = props;
  return __jsx(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_12___default.a, {
    disableTypography: true,
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13___default.a, {
    variant: "h6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, children), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_14___default.a, {
    "aria-label": "close",
    className: classes.closeButton,
    onClick: onClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, __jsx(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_15___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  })));
});

const PlayBoard = props => {
  const {
    contextGame,
    saveGame
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_playContext__WEBPACK_IMPORTED_MODULE_5__["PlayContext"]);
  const SQUARE_WIDTH = 60 / (Math.sqrt(props.board.numSquares) + 1);
  let taskNum = 1;
  let taskOrderNum = 0;

  const getNumCompleted = squares => {
    let numCompleted = 0;
    squares.map(square => {
      if (square.complete && !square.freeSquare) {
        numCompleted++;
      } else if (!square.completed && !square.freeSquare) {
        return;
      }
    });
    return numCompleted;
  };

  const {
    0: board,
    1: setBoard
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(props.board);
  const {
    0: previousSquareComplete,
    1: setPreviousSquareComplete
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  const {
    0: numCompleted,
    1: setNumCompleted
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(getNumCompleted(board.squares));
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

  const openRewardDetailPopup = reward => {
    setRewardDialogOpen(true);
    setReward(reward);
  };

  const openTaskDetailPopup = (task, previousSquareComplete) => {
    setTaskDialogOpen(true);
    setTask(task);
    setPreviousSquareComplete(previousSquareComplete);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setBoard(contextGame);
    setNumCompleted(getNumCompleted(contextGame.squares));
  }, [contextGame]);

  const updateTask = task => {
    const gameToSave = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, contextGame, {
      squares: contextGame.squares.map(square => {
        if (square._id === task._id) {
          return task;
        }

        return square;
      })
    }); // run saveGame with the result of checkForRewards


    let rewardsChanged = false;
    const earnedRewards = Object(_funcs_boardLogic__WEBPACK_IMPORTED_MODULE_4__["checkForRewards"])(gameToSave);
    console.log({
      earnedRewards
    });
    const rewards = contextGame.rewards.map(reward => {
      if (earnedRewards.includes(reward.position)) {
        if (!reward.earned) {
          console.log('setting reward earned', reward.position);
          rewardsChanged = true;
        }

        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, reward, {
          earned: true
        });
      }

      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, reward, {
        earned: false
      });
    });

    if (rewardsChanged) {
      console.log('saving reward change');

      const gameWithRewards = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, gameToSave, {
        rewards
      });

      saveGame(gameWithRewards);
    } else {
      saveGame(gameToSave);
    }
  };

  const generateRow = row => {
    const SOMETHING_RIGHT = contextGame.rewards.filter(reward => (reward.position.includes('row') || reward.position.includes('diagonalUpRight')) && reward.title)[0];
    return row.map((square, index) => {
      switch (square.type) {
        case 'reward':
          const reward = contextGame.rewards.length ? contextGame.rewards.filter(reward => reward.position === square.id && reward.title)[0] : null;

          if (!reward) {
            return __jsx("div", {
              key: `empty${index}`,
              style: {
                width: !SOMETHING_RIGHT && (square.id.includes('row') || square.id.includes('diagonalUpRight')) ? 1 : `${SQUARE_WIDTH}vw`,
                height: !SOMETHING_RIGHT && (square.id.includes('row') || square.id.includes('diagonalUpRight')) ? 1 : `${SQUARE_WIDTH}vw`,
                // paddingTop: `${SQUARE_WIDTH * .72}%`,
                // position: 'relative',
                maxWidth: 110,
                maxHeight: 110,
                minWidth: !SOMETHING_RIGHT && (square.id.includes('row') || square.id.includes('diagonalUpRight')) ? 1 : 100 // minHeight: 100,

              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 148
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
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'transparent',
              border: 'none',
              outline: 'none',
              cursor: 'pointer',
              maxWidth: 110,
              maxHeight: 110 // minWidth: 100,
              // minHeight: 100,

            },
            onClick: () => openRewardDetailPopup(reward),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 162
            },
            __self: undefined
          }, __jsx("img", {
            style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _styles_masterStyles__WEBPACK_IMPORTED_MODULE_2__["MASTER"].smallRewardIcon, {
              width: '70%',
              height: '70%'
            }),
            src: reward.earned ? '../../static/gift_green.png' : '../../static/gift_gray.png',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 183
            },
            __self: undefined
          }));

        case 'task':
          if (!taskNum) {
            return;
          }

          const task = contextGame.squares[taskNum - 1];

          if (taskNum === contextGame.numSquares) {
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
                // paddingTop: `${SQUARE_WIDTH * .72}%`,
                position: 'relative',
                backgroundColor: `#${contextGame.completeColor}`,
                borderWidth: 1,
                borderColor: 'black',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                outline: 'none',
                maxWidth: 110,
                maxHeight: 110
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 205
              },
              __self: undefined
            }, __jsx("img", {
              style: _styles_masterStyles__WEBPACK_IMPORTED_MODULE_2__["MASTER"].freeSquareIcon,
              src: '../../static/circle_check.png',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 222
              },
              __self: undefined
            }));
          } else {
            taskOrderNum++;
            task.taskOrderNum = taskOrderNum;
            return __jsx("button", {
              key: `task${index}`,
              style: {
                width: `${SQUARE_WIDTH}vw`,
                height: `${SQUARE_WIDTH}vw`,
                // paddingTop: `${SQUARE_WIDTH * .72}%`,
                position: 'relative',
                backgroundColor: task.complete ? `#${contextGame.completeColor}` : `#${contextGame.incompleteColor}`,
                borderWidth: 1,
                borderColor: 'black',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                outline: 'none',
                cursor: 'pointer',
                maxWidth: 110,
                maxHeight: 110
              },
              onClick: () => openTaskDetailPopup(task, task.taskOrderNum - 1 !== numCompleted),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 229
              },
              __self: undefined
            }, contextGame.mustBeDoneInOrder && __jsx("div", {
              style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _styles_masterStyles__WEBPACK_IMPORTED_MODULE_2__["MASTER"].squareOrderNum, {
                color: task.complete ? `#${contextGame.completeColor}` : `#${contextGame.incompleteColor}`
              }),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 252
              },
              __self: undefined
            }, taskOrderNum), __jsx("div", {
              style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _styles_masterStyles__WEBPACK_IMPORTED_MODULE_2__["MASTER"].squareText, {
                maxHeight: 100
              }),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 253
              },
              __self: undefined
            }, task.squareText));
          }

        case 'empty':
          return __jsx("div", {
            key: `empty${index}`,
            style: {
              width: `${SQUARE_WIDTH}vw`,
              height: `${SQUARE_WIDTH}vw`,
              // paddingTop: `${SQUARE_WIDTH * .72}%`,
              position: 'relative',
              maxWidth: 110,
              maxHeight: 110
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 259
            },
            __self: undefined
          });

        default:
          return __jsx("div", {
            key: `empty${index}`,
            style: {
              width: `${SQUARE_WIDTH}vw`,
              height: `${SQUARE_WIDTH}vw`,
              // paddingTop: `${SQUARE_WIDTH * .72}%`,
              position: 'relative',
              maxWidth: 110,
              maxHeight: 110
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 272
            },
            __self: undefined
          });
      }
    });
  };

  const generateBoard = () => {
    const template = _constants_boardSizes__WEBPACK_IMPORTED_MODULE_3__["boardTemplates"][props.size];
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
          lineNumber: 291
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
        lineNumber: 303
      },
      __self: undefined
    }, generateBoard(), __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_10___default.a, {
      open: rewardDialogOpen,
      onBackdropClick: () => setRewardDialogOpen(false),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 305
      },
      __self: undefined
    }, __jsx(DialogTitle, {
      onClose: () => setRewardDialogOpen(false),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 306
      },
      __self: undefined
    }, "REWARD"), __jsx(_RewardDetail__WEBPACK_IMPORTED_MODULE_7__["default"], {
      reward: reward,
      mustRedeem: contextGame.redeemRewards,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 309
      },
      __self: undefined
    })), __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_10___default.a, {
      open: taskDialogOpen,
      onBackdropClick: () => setTaskDialogOpen(false),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 311
      },
      __self: undefined
    }, __jsx(DialogTitle, {
      onClose: () => setTaskDialogOpen(false),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 312
      },
      __self: undefined
    }, __jsx("div", {
      style: {
        display: 'flex',
        alignItems: 'center'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 313
      },
      __self: undefined
    }, "TASK ", task.hints && task.hints.length ? __jsx(_Tasks_PlayHints__WEBPACK_IMPORTED_MODULE_8__["default"], {
      hints: task.hints,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 314
      },
      __self: undefined
    }) : null)), __jsx(_SquareDetail__WEBPACK_IMPORTED_MODULE_6__["default"], {
      task: task,
      updateTask: updateTask,
      previousSquareComplete: previousSquareComplete,
      mustBeDoneInOrder: props.board.mustBeDoneInOrder,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 317
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
/* harmony default export */ __webpack_exports__["default"] = (PlayBoard);

/***/ }),

/***/ "./components/Play/RewardDetail.js":
/*!*****************************************!*\
  !*** ./components/Play/RewardDetail.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_masterStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/masterStyles */ "./styles/masterStyles.js");
/* harmony import */ var _contexts_playContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../contexts/playContext */ "./contexts/playContext.js");

var _jsxFileName = "/Users/spencerford/Documents/DEVyall/PersonalProjects/CorporateBingoWeb/components/Play/RewardDetail.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
 // Style imports

 // Context imports

 // Component imports

const RewardDetail = props => {
  const propsReward = props.reward;
  const {
    contextGame,
    updateGame,
    saveGame
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_playContext__WEBPACK_IMPORTED_MODULE_3__["PlayContext"]);
  const {
    0: reward,
    1: setReward
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(propsReward);

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

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    contextGame.rewards.map(contextReward => {
      if (contextReward._id === reward._id) {
        setReward(contextReward);
      }
    });
  }, [contextGame]);

  const redeemReward = () => {
    saveGame(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, contextGame, {
      rewards: contextGame.rewards.map(contextReward => {
        if (contextReward._id === reward._id) {
          return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, reward, {
            redeemed: true
          });
        }

        return contextReward;
      })
    }));
  };

  return __jsx("div", {
    style: styles.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      height: reward.img ? 200 : 0,
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, reward.img && __jsx("img", {
    style: styles.pic,
    src: reward.img,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }), reward.earned && __jsx("div", {
    style: styles.earnedContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, __jsx("div", {
    style: styles.earnedText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, "EARNED")), props.mustRedeem && reward.earned && reward.redeemed && __jsx("div", {
    style: styles.earnedContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, __jsx("div", {
    style: styles.redeemText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }, "CLAIMED"))), __jsx("div", {
    style: {
      fontSize: 24,
      marginVertical: 10
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }, reward.title), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }, reward.description), __jsx("div", {
    style: styles.howTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }, "How to earn:"), __jsx("div", {
    style: styles.howText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  }, generateHowToEarn(reward.position)), props.mustRedeem && reward.earned && !reward.redeemed && __jsx("button", {
    style: _styles_masterStyles__WEBPACK_IMPORTED_MODULE_2__["MASTER"].wideRoundBtn,
    onClick: () => redeemReward(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }, __jsx("div", {
    style: _styles_masterStyles__WEBPACK_IMPORTED_MODULE_2__["MASTER"].wideRoundBtnText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  }, "REDEEM REWARD")));
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 30
  },
  pic: {
    width: 200,
    height: 200
  },
  earnedContainer: {
    position: 'absolute',
    left: '50%',
    top: '50%'
  },
  earnedText: {
    color: _styles_masterStyles__WEBPACK_IMPORTED_MODULE_2__["COLORS"].green,
    position: 'relative',
    left: '-50%',
    top: '-50%',
    fontSize: 45,
    transform: 'rotateZ(345deg)'
  },
  redeemText: {
    color: 'red',
    position: 'relative',
    left: '-50%',
    top: '-50%',
    fontSize: 45,
    transform: 'rotateZ(25deg)'
  },
  howTitle: {
    fontSize: 20,
    width: '90%',
    marginTop: 30,
    textAlign: 'center'
  },
  howText: {
    width: '90%',
    marginTop: 5,
    textAlign: 'center'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (RewardDetail);

/***/ }),

/***/ "./components/Play/SquareDetail.js":
/*!*****************************************!*\
  !*** ./components/Play/SquareDetail.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_masterStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/masterStyles */ "./styles/masterStyles.js");
/* harmony import */ var _Tasks_TaskClick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tasks/TaskClick */ "./components/Play/Tasks/TaskClick.js");
/* harmony import */ var _Tasks_TaskCode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Tasks/TaskCode */ "./components/Play/Tasks/TaskCode.js");
/* harmony import */ var _Tasks_TaskText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Tasks/TaskText */ "./components/Play/Tasks/TaskText.js");
/* harmony import */ var _Tasks_TaskPicture__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Tasks/TaskPicture */ "./components/Play/Tasks/TaskPicture.js");
/* harmony import */ var _Tasks_TaskQRCode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Tasks/TaskQRCode */ "./components/Play/Tasks/TaskQRCode.js");
var _jsxFileName = "/Users/spencerford/Documents/DEVyall/PersonalProjects/CorporateBingoWeb/components/Play/SquareDetail.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // Style imports

 // Component imports







const SquareDetail = props => {
  const task = props.task;
  const updateTask = props.updateTask;
  const {
    0: isComplete,
    1: setIsComplete
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(task.complete);

  const generateTaskMethod = task => {
    if (props.mustBeDoneInOrder && props.previousSquareComplete) {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: undefined
      }, "Must do previous square first!!!");
    }

    switch (task.task.taskType) {
      case 'click':
        return __jsx(_Tasks_TaskClick__WEBPACK_IMPORTED_MODULE_2__["default"], {
          task: task,
          updateTask: updateTask,
          completeSquare: setIsComplete,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: undefined
        });

      case 'code':
        return __jsx(_Tasks_TaskCode__WEBPACK_IMPORTED_MODULE_3__["default"], {
          task: task,
          updateTask: updateTask,
          completeSquare: setIsComplete,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: undefined
        });

      case 'text':
        return __jsx(_Tasks_TaskText__WEBPACK_IMPORTED_MODULE_4__["default"], {
          task: task,
          updateTask: updateTask,
          completeSquare: setIsComplete,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: undefined
        });

      case 'picture':
        return __jsx(_Tasks_TaskPicture__WEBPACK_IMPORTED_MODULE_5__["default"], {
          task: task,
          updateTask: updateTask,
          completeSquare: setIsComplete,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: undefined
        });

      case 'qrCode':
        return __jsx(_Tasks_TaskQRCode__WEBPACK_IMPORTED_MODULE_6__["default"], {
          task: task,
          updateTask: updateTask,
          completeSquare: setIsComplete,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          __self: undefined
        });
      // case 'proximity':
      //   return <div>proximity</div>;

      default:
        return __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: undefined
        }, "No task defined....");
    }
  };

  return __jsx("div", {
    style: styles.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      fontSize: 24,
      marginVertical: 5
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, task.squareText), __jsx("div", {
    style: {
      fontSize: 16,
      marginBottom: 15
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, task.description), isComplete && __jsx("div", {
    style: styles.completedContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, __jsx("div", {
    style: styles.completedText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, "COMPLETE")), generateTaskMethod(task));
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 30
  },
  completedContainer: {
    position: 'absolute',
    left: '50%',
    top: '20%',
    zIndex: 115
  },
  completedText: {
    color: _styles_masterStyles__WEBPACK_IMPORTED_MODULE_1__["COLORS"].green,
    position: 'relative',
    left: '-50%',
    top: '-50%',
    fontSize: 45,
    transform: 'rotateZ(345deg)'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (SquareDetail);

/***/ }),

/***/ "./components/Play/Tasks/PlayHints.js":
/*!********************************************!*\
  !*** ./components/Play/Tasks/PlayHints.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_masterStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../styles/masterStyles */ "./styles/masterStyles.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Dialog */ "@material-ui/core/Dialog");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "@material-ui/core/DialogActions");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "@material-ui/core/DialogTitle");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Close */ "@material-ui/icons/Close");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "/Users/spencerford/Documents/DEVyall/PersonalProjects/CorporateBingoWeb/components/Play/Tasks/PlayHints.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // Style imports

 // Component imports
// Material UI









const PlayHints = props => {
  const materialStyles = theme => ({
    root: {
      margin: 0,
      padding: theme.spacing(2),
      fontSize: 32,
      color: _styles_masterStyles__WEBPACK_IMPORTED_MODULE_1__["COLORS"].primary
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500]
    }
  });

  const DialogTitle = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(materialStyles)(props => {
    const {
      children,
      classes,
      onClose
    } = props;
    return __jsx(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_5___default.a, {
      disableTypography: true,
      className: classes.root,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: undefined
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
      variant: "h6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: undefined
    }, children), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7___default.a, {
      "aria-label": "close",
      className: classes.closeButton,
      onClick: onClose,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: undefined
    }, __jsx(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_8___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: undefined
    })));
  });
  const {
    0: hints
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.hints);
  const {
    0: popupOpen,
    1: setPopupOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: hintNum,
    1: setHintNum
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);

  const displayHint = () => {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: undefined
    }, hints[hintNum]);
  };

  return __jsx("div", {
    style: styles.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, __jsx("a", {
    onClick: () => setPopupOpen(true),
    style: {
      cursor: 'pointer'
    },
    title: 'Click to view hints about completing this task!',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, __jsx("img", {
    style: {
      width: 20,
      marginLeft: 10
    },
    src: '../../../static/hints.png',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  })), __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3___default.a, {
    open: popupOpen,
    onBackdropClick: () => setPopupOpen(false),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, __jsx(DialogTitle, {
    onClose: () => setPopupOpen(false),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, "HINTS"), __jsx("div", {
    style: {
      width: 200,
      padding: 30
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, displayHint())));
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (PlayHints);

/***/ }),

/***/ "./components/Play/Tasks/TaskClick.js":
/*!********************************************!*\
  !*** ./components/Play/Tasks/TaskClick.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Switch */ "@material-ui/core/Switch");
/* harmony import */ var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/Users/spencerford/Documents/DEVyall/PersonalProjects/CorporateBingoWeb/components/Play/Tasks/TaskClick.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
 // context imports
// Style imports
// import { MASTER } from '../../../styles/masterStyles';
// Component Imports



const TaskClick = props => {
  const {
    0: isClicked,
    1: setIsClicked
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(props.task.complete);

  const handleSwitchChange = val => {
    props.updateTask(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props.task, {
      complete: val,
      task: {
        taskType: 'click',
        answer: val ? 'done' : ''
      }
    }));
    props.completeSquare(val);
    setIsClicked(val);
  };

  return __jsx("div", {
    style: styles.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      marginRight: 5,
      fontWeight: 'bold'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, "Just flip this switch:"), __jsx(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_2___default.a, {
    onChange: () => handleSwitchChange(!isClicked),
    value: isClicked,
    checked: isClicked,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }));
};

const styles = {
  container: {
    height: 200,
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (TaskClick);

/***/ }),

/***/ "./components/Play/Tasks/TaskCode.js":
/*!*******************************************!*\
  !*** ./components/Play/Tasks/TaskCode.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_masterStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles/masterStyles */ "./styles/masterStyles.js");

var _jsxFileName = "/Users/spencerford/Documents/DEVyall/PersonalProjects/CorporateBingoWeb/components/Play/Tasks/TaskCode.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
 // context imports
// Style imports



const TaskClick = props => {
  const {
    0: code,
    1: setCode
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(props.task.task.answer);

  const submitCode = code => {
    if (props.task.codes.codeList.includes(code)) {
      setComplete(code, true);
    } else {
      alert('That wasn\'t what we\'re looking for... check your code and try again!');
    }

    setCode('');
  };

  const setComplete = (code, bool) => {
    props.updateTask(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props.task, {
      complete: bool,
      task: {
        taskType: 'code',
        answer: code
      }
    }));
    props.completeSquare(bool);
  };

  return __jsx("div", {
    style: styles.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, __jsx("input", {
    style: _styles_masterStyles__WEBPACK_IMPORTED_MODULE_2__["MASTER"].wideRoundInput,
    placeholder: 'Enter code here',
    value: code,
    onChange: e => setCode(e.target.value),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }), __jsx("button", {
    style: _styles_masterStyles__WEBPACK_IMPORTED_MODULE_2__["MASTER"].wideRoundBtn,
    onClick: () => submitCode(code),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, __jsx("div", {
    style: _styles_masterStyles__WEBPACK_IMPORTED_MODULE_2__["MASTER"].wideRoundBtnText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, "SUBMIT CODE")));
};

const styles = {
  container: {
    height: 400,
    width: '100%',
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center' // justifyContent: 'center',

  }
};
/* harmony default export */ __webpack_exports__["default"] = (TaskClick);

/***/ }),

/***/ "./components/Play/Tasks/TaskPicture.js":
/*!**********************************************!*\
  !*** ./components/Play/Tasks/TaskPicture.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dropzone */ "react-dropzone");
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dropzone__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_masterStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../styles/masterStyles */ "./styles/masterStyles.js");


var _jsxFileName = "/Users/spencerford/Documents/DEVyall/PersonalProjects/CorporateBingoWeb/components/Play/Tasks/TaskPicture.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

 // context imports
// Style imports

 // Component imports

const TaskPicture = props => {
  const {
    0: image,
    1: setImage
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(props.task.task.answer);
  const {
    0: cameraOpen,
    1: setCameraOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const {
    0: cameraPermission,
    1: setCameraPermission
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('');
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    if (!!image) {
      setComplete(image, !!image);
    }
  }, [image]);

  const setComplete = (picture, bool) => {
    props.updateTask(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props.task, {
      complete: bool,
      task: {
        taskType: 'picture',
        answer: picture
      }
    }));
    props.completeSquare(bool);
  };

  const onDrop = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(acceptedFiles => {
    const reader = new FileReader();

    reader.onabort = () => alert('file reading was aborted');

    reader.onerror = () => alert('file reading has failed');

    const file = acceptedFiles[0]; // if(!supportedFileTypes.includes(file.type)){
    //     this.openSnackBar(<FormattedMessage {...UserMessages.wrongFileType} />);
    // } else if (file.size > 10000000){
    //     this.openSnackBar(<FormattedMessage {...UserMessages.picTooBig} />);
    // } else {

    reader.addEventListener('load', () => setImage(reader.result));
    reader.readAsDataURL(file); // }
  }, []);
  const {
    getRootProps,
    getInputProps,
    isDragActive
  } = Object(react_dropzone__WEBPACK_IMPORTED_MODULE_3__["useDropzone"])({
    onDrop
  });
  return __jsx("div", {
    style: styles.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      width: '100%',
      display: 'flex',
      alignItems: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, !!image && __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, __jsx("img", {
    style: styles.image,
    src: image,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }), __jsx("button", {
    style: styles.removePhotoBtn,
    onClick: () => {
      setImage('');
      setComplete('', false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, __jsx("div", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _styles_masterStyles__WEBPACK_IMPORTED_MODULE_4__["MASTER"].wideRoundBtnText, {
      fontSize: 30,
      marginTop: -5
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, "x"))), !image && __jsx("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getRootProps(), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }), __jsx("input", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getInputProps(), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  })), isDragActive ? __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }, "Drop the files here ...") : __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }, "Drag 'n' drop some files here, or click to select files"))));
};

const styles = {
  container: {
    // height: '100%',
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  image: {
    height: 300,
    width: 300
  },
  cheeseBtn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: _styles_masterStyles__WEBPACK_IMPORTED_MODULE_4__["COLORS"].primary,
    width: 100,
    borderRadius: 50,
    height: 50,
    marginBottom: 20
  },
  removePhotoBtn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: _styles_masterStyles__WEBPACK_IMPORTED_MODULE_4__["COLORS"].primary,
    width: 30,
    borderRadius: 50,
    height: 30,
    position: 'absolute',
    bottom: 10,
    right: 10
  }
};
/* harmony default export */ __webpack_exports__["default"] = (TaskPicture);

/***/ }),

/***/ "./components/Play/Tasks/TaskQRCode.js":
/*!*********************************************!*\
  !*** ./components/Play/Tasks/TaskQRCode.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_masterStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles/masterStyles */ "./styles/masterStyles.js");

var _jsxFileName = "/Users/spencerford/Documents/DEVyall/PersonalProjects/CorporateBingoWeb/components/Play/Tasks/TaskQRCode.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
// Must have generated a QR like {"squareID": "8"}
// if the squareID prop in the object in the QR code matches the id of the task, task completed
 // import QrReader from 'react-qr-reader';
// context imports
// Style imports



const TaskQRCode = props => {
  const {
    0: hasQR,
    1: setHasQR
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: propComplete,
    1: setPropComplete
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(props.task.complete);

  const setComplete = bool => {
    props.updateTask(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props.task, {
      complete: bool,
      task: {
        taskType: 'qrCode',
        answer: bool
      }
    }));
    props.completeSquare(bool);
  };

  return __jsx("div", {
    style: styles.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      fontWeight: 'bold',
      color: 'red'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, "Note: This task requires scanning a QR code, which can only be done with our mobile app on a smart phone."));
};

const styles = {
  container: {
    height: 400,
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center' // justifyContent: 'center',

  }
};
/* harmony default export */ __webpack_exports__["default"] = (TaskQRCode);

/***/ }),

/***/ "./components/Play/Tasks/TaskText.js":
/*!*******************************************!*\
  !*** ./components/Play/Tasks/TaskText.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_masterStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles/masterStyles */ "./styles/masterStyles.js");

var _jsxFileName = "/Users/spencerford/Documents/DEVyall/PersonalProjects/CorporateBingoWeb/components/Play/Tasks/TaskText.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
 // context imports
// Style imports



const TaskClick = props => {
  const {
    0: text,
    1: setText
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(props.task.task.answer);

  const submitText = text => {
    setComplete(text, true);
  };

  const setComplete = (text, bool) => {
    props.updateTask(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props.task, {
      complete: bool,
      task: {
        taskType: 'text',
        answer: text
      }
    }));
    props.completeSquare(bool);
  };

  return __jsx("div", {
    style: styles.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, __jsx("textarea", {
    autoFocus: true,
    style: _styles_masterStyles__WEBPACK_IMPORTED_MODULE_2__["MASTER"].wideRoundTextArea,
    onChange: e => setText(e.target.value),
    value: text,
    placeholder: 'Enter text here',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }), __jsx("button", {
    style: _styles_masterStyles__WEBPACK_IMPORTED_MODULE_2__["MASTER"].wideRoundBtn,
    onClick: () => submitText(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, __jsx("div", {
    style: _styles_masterStyles__WEBPACK_IMPORTED_MODULE_2__["MASTER"].wideRoundBtnText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, "SUBMIT")));
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (TaskClick);

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

  if (!user._id) {
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
  }, "JOIN GAME")), user && user.role.level < 3 && __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
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
  }, "MANAGE BOARDS")), user && user.role.level < 3 && __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
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
  }, "USERS & ORG")), user && user.role.level !== 2 && __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
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
  }, "#sidenav.jsx-1054960106{width:20%;max-width:300px;min-width:200px;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;box-shadow:2px 0 5px -2px #999;background-color:white;font:roboto;padding:0 .5%;}.sidenavLink.jsx-1054960106{width:90%;text-align:left;margin:20px 0 0 0;-webkit-text-decoration:none;text-decoration:none;font-size:20px;font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zcGVuY2VyZm9yZC9Eb2N1bWVudHMvREVWeWFsbC9QZXJzb25hbFByb2plY3RzL0NvcnBvcmF0ZUJpbmdvV2ViL2NvbXBvbmVudHMvU2lkZU5hdi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRGlCLEFBR21DLEFBYUEsVUFaTSxBQWFBLGdCQVpBLEFBYUUsZ0JBWk4sRUFhUyxVQVpSLHdDQWFFLGVBQ0UsaUJBQ3JCLEVBZDBCLDhFQUNILDZGQUNZLCtCQUNSLHVCQUNYLFlBQ0UsY0FDbEIiLCJmaWxlIjoiL1VzZXJzL3NwZW5jZXJmb3JkL0RvY3VtZW50cy9ERVZ5YWxsL1BlcnNvbmFsUHJvamVjdHMvQ29ycG9yYXRlQmluZ29XZWIvY29tcG9uZW50cy9TaWRlTmF2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmltcG9ydCB7IENPTE9SUyB9IGZyb20gJy4uL3N0eWxlcy9tYXN0ZXJTdHlsZXMuanMnO1xuXG4vLyBjb250ZXh0IGltcG9ydHNcbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dHMvdXNlckNvbnRleHQnO1xuXG5jb25zdCBTaWRlTmF2ID0gKHByb3BzKSA9PiB7XG5cbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gICAgY29uc3QgeyB1c2VyLCBsb2dvdXQgfSA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xuICAgIGNvbnN0IFsgY3VyclJvdXRlLCBzZXRDdXJyUm91dGUgXSA9IHVzZVN0YXRlKHJvdXRlci5wYXRobmFtZSk7XG5cbiAgICBjb25zdCBoYW5kbGVSb3V0ZUNoYW5nZSA9IHVybCA9PiB7XG4gICAgICAgIHNldEN1cnJSb3V0ZSh1cmwpO1xuICAgIH1cbiAgICByb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZVN0YXJ0JywgaGFuZGxlUm91dGVDaGFuZ2UpXG5cbiAgICBjb25zdCBoYW5kbGVSb3V0ZUNoYW5nZUNvbXBsZXRlID0gdXJsID0+IHtcbiAgICAgICAgc2V0Q3VyclJvdXRlKHVybCk7XG4gICAgfVxuICAgIHJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBoYW5kbGVSb3V0ZUNoYW5nZUNvbXBsZXRlKVxuXG4gICAgY29uc3QgYWRkRGVmYXVsdFBpYyA9IChldikgPT4ge1xuICAgICAgICBldi50YXJnZXQuc3JjID0gXCJodHRwczovL2kueXRpbWcuY29tL3ZpL2JLY0Y3SlViQ3BvL21heHJlc2RlZmF1bHQuanBnXCI7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZUxvZ291dENsaWNrID0gKCkgPT4ge1xuICAgICAgICBsb2dvdXQoKTtcbiAgICB9XG5cbiAgICBpZighdXNlci5faWQpe1xuICAgICAgICByZXR1cm4gPHNwYW4+TE9BRElORy4uLjwvc3Bhbj5cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGlkPSdzaWRlbmF2JyBzdHlsZT17eyBib3JkZXJSaWdodDogYDJweCBzb2xpZCAke0NPTE9SUy5wcmltYXJ5fWAgfX0+XG4gICAgICAgICAgICA8aW1nIFxuICAgICAgICAgICAgICAgIGFsdD0nQmluZ28gQnVpbGRlcicgXG4gICAgICAgICAgICAgICAgc3JjPXsnL3N0YXRpYy9iaW5nb0J1aWxkZXJMb2dvLnBuZyd9IFxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnOTAlJywgbWFyZ2luOiAnMTBweCAwIDEwcHggMCcgfX1cbiAgICAgICAgICAgICAgICBvbkVycm9yPXthZGREZWZhdWx0UGljfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9qb2luR2FtZSc+PGEgY2xhc3NOYW1lPSdzaWRlbmF2TGluaycgc3R5bGU9e2N1cnJSb3V0ZSAmJiBjdXJyUm91dGUuaW5jbHVkZXMoJ2pvaW5HYW1lJykgPyBzdHlsZXMuY3VyckxpbmsgOiBzdHlsZXMubGlua30+Sk9JTiBHQU1FPC9hPjwvTGluaz5cbiAgICAgICAgICAgIHt1c2VyICYmIHVzZXIucm9sZS5sZXZlbCA8IDMgJiYgPExpbmsgaHJlZj0nL21hbmFnZUJvYXJkcyc+PGEgY2xhc3NOYW1lPSdzaWRlbmF2TGluaycgc3R5bGU9e2N1cnJSb3V0ZSAmJiBjdXJyUm91dGUuaW5jbHVkZXMoJ21hbmFnZUJvYXJkcycpID8gc3R5bGVzLmN1cnJMaW5rIDogc3R5bGVzLmxpbmt9Pk1BTkFHRSBCT0FSRFM8L2E+PC9MaW5rPn1cbiAgICAgICAgICAgIHt1c2VyICYmIHVzZXIucm9sZS5sZXZlbCA8IDMgJiYgPExpbmsgaHJlZj0nL3VzZXJzQW5kT3JnJz48YSBjbGFzc05hbWU9J3NpZGVuYXZMaW5rJyBzdHlsZT17Y3VyclJvdXRlICYmIGN1cnJSb3V0ZS5pbmNsdWRlcygndXNlcnNBbmRPcmcnKSA/IHN0eWxlcy5jdXJyTGluayA6IHN0eWxlcy5saW5rfT5VU0VSUyAmIE9SRzwvYT48L0xpbms+fVxuICAgICAgICAgICAge3VzZXIgJiYgdXNlci5yb2xlLmxldmVsICE9PSAyICYmIDxMaW5rIGhyZWY9Jy9wcm9maWxlJz48YSBjbGFzc05hbWU9J3NpZGVuYXZMaW5rJyBzdHlsZT17Y3VyclJvdXRlICYmIGN1cnJSb3V0ZS5pbmNsdWRlcygncHJvZmlsZScpID8gc3R5bGVzLmN1cnJMaW5rIDogc3R5bGVzLmxpbmt9Pk1ZIFBST0ZJTEU8L2E+PC9MaW5rPn1cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nc2lkZW5hdkxpbmsnIHN0eWxlPXt7Y29sb3I6IENPTE9SUy5wcmltYXJ5LCBjdXJzb3I6ICdwb2ludGVyJywgcGFkZGluZzogMTB9fSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVMb2dvdXRDbGljaygpfT5MT0dPVVQ8L2E+XG4gICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgICAgICNzaWRlbmF2IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDMwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDJweCAwIDVweCAtMnB4ICM5OTk7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQ6IHJvYm90bztcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgLjUlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5zaWRlbmF2TGluayB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMjBweCAwIDAgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgICBsaW5rOiB7XG4gICAgICAgIGNvbG9yOiBDT0xPUlMucHJpbWFyeSxcbiAgICAgICAgcGFkZGluZzogMTAsXG4gICAgfSxcbiAgICBjdXJyTGluazoge1xuICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBDT0xPUlMucHJpbWFyeSxcbiAgICAgICAgcGFkZGluZzogMTAsXG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgIGJvcmRlclJhZGl1czogMjAsXG4gICAgfVxuICB9O1xuXG5leHBvcnQgZGVmYXVsdCBTaWRlTmF2OyJdfQ== */\n/*@ sourceURL=/Users/spencerford/Documents/DEVyall/PersonalProjects/CorporateBingoWeb/components/SideNav.js */"));
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

const FULL_URL = 'http://localhost:8000'; // const FULL_URL = 'http://ec2-3-86-157-120.compute-1.amazonaws.com:8000';

/* harmony default export */ __webpack_exports__["default"] = (FULL_URL);

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
    0: stuffToSave,
    1: setStuffToSave
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const getOrg = async orgID => {
    console.log('in get org', orgID);

    try {
      const request = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()(`${_constants_constants__WEBPACK_IMPORTED_MODULE_3__["default"]}/orgs/${orgID}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('bingo_token')}`
        }
      });
      const org = await request.json();
      setOrg(org);
    } catch (err) {
      alert(err);
    }
  };

  const saveOrg = async orgToSave => {
    console.log('in save org', orgToSave);

    try {
      const request = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()(`${_constants_constants__WEBPACK_IMPORTED_MODULE_3__["default"]}/orgs/${orgToSave._id}`, {
        method: 'PATCH',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('bingo_token')}`
        },
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
      updateOrg: setOrg,
      getOrg: getOrg,
      saveOrg,
      setStuffToSave,
      stuffToSave
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (OrgContextProvider);

/***/ }),

/***/ "./contexts/playContext.js":
/*!*********************************!*\
  !*** ./contexts/playContext.js ***!
  \*********************************/
/*! exports provided: PlayContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayContext", function() { return PlayContext; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/constants */ "./constants/constants.js");


var _jsxFileName = "/Users/spencerford/Documents/DEVyall/PersonalProjects/CorporateBingoWeb/contexts/playContext.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



const PlayContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["createContext"])();

const PlayContextProvider = props => {
  const {
    0: contextGame,
    1: setContextGame
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({});

  const getGame = async (gameID, userID) => {
    if (gameID && contextGame._id === gameID) {
      console.log('go with same game', contextGame, gameID);
      return;
    }

    console.log({
      gameID
    });

    if (gameID && userID) {
      try {
        const request = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()(`${_constants_constants__WEBPACK_IMPORTED_MODULE_4__["default"]}/games/${gameID}/${userID}`, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('bingo_token')}`
          }
        });
        const game = await request.json();
        console.log({
          game
        });
        setContextGame(game);
      } catch (err) {
        alert(err);
      }
    }
  };

  const saveGame = async game => {
    setContextGame(game);
    console.log('SAVING GAME');

    try {
      const request = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()(`${_constants_constants__WEBPACK_IMPORTED_MODULE_4__["default"]}/games/${contextGame._id}`, {
        method: 'PATCH',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('bingo_token')}`
        },
        body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, game))
      });
      const success = await request.json();
      console.log({
        success
      });

      if (success) {
        setContextGame(success);
      } else {
        alert('There was a problem saving your board... please try again later!');
      }
    } catch (err) {
      alert(err);
    }
  };

  return __jsx(PlayContext.Provider, {
    value: {
      contextGame,
      updateGame: setContextGame,
      getGame,
      saveGame
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (PlayContextProvider);

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

/***/ "./pages/playGame/[findID]/[userID]/index.js":
/*!***************************************************!*\
  !*** ./pages/playGame/[findID]/[userID]/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_playContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../contexts/playContext */ "./contexts/playContext.js");
/* harmony import */ var _styles_masterStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../styles/masterStyles */ "./styles/masterStyles.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Play_PlayBoard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/Play/PlayBoard */ "./components/Play/PlayBoard.js");
/* harmony import */ var _components_Play_RewardDetail__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/Play/RewardDetail */ "./components/Play/RewardDetail.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Dialog */ "@material-ui/core/Dialog");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "@material-ui/core/DialogActions");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "@material-ui/core/DialogTitle");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Close */ "@material-ui/icons/Close");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_13__);
var _jsxFileName = "/Users/spencerford/Documents/DEVyall/PersonalProjects/CorporateBingoWeb/pages/playGame/[findID]/[userID]/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // context imports

 // Style imports

 // Component imports



 // Material ui








const DialogActions = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["withStyles"])(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}))(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_9___default.a);

const materialStyles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    fontSize: 32,
    color: _styles_masterStyles__WEBPACK_IMPORTED_MODULE_3__["COLORS"].primary
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
});

const DialogTitle = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["withStyles"])(materialStyles)(props => {
  const {
    children,
    classes,
    onClose
  } = props;
  return __jsx(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_10___default.a, {
    disableTypography: true,
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11___default.a, {
    variant: "h6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, children), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12___default.a, {
    "aria-label": "close",
    className: classes.closeButton,
    onClick: onClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, __jsx(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_13___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  })));
});

const PlayHome = props => {
  // const router = useRouter();
  // const findID = router.query;
  const {
    getGame,
    contextGame
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_playContext__WEBPACK_IMPORTED_MODULE_2__["PlayContext"]);
  const {
    0: game,
    1: setGame
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(contextGame);
  const {
    0: rewardDialogOpen,
    1: setRewardDialogOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: reward,
    1: setReward
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!contextGame._id) {
      console.log(props.findID);
      getGame(props.findID, props.userID);
    } else {
      setGame(contextGame);
    }
  }, [contextGame]);

  const updateGame = game => {};

  const openToRewardDetailPopup = reward => {
    setRewardDialogOpen(true);
    setReward(reward);
  };

  const generateWholeBoardRewardIcon = reward => {
    return __jsx("img", {
      alt: "Whole board completion reward",
      onClick: () => openToRewardDetailPopup(reward),
      style: {
        width: '10vw',
        height: '10vw',
        maxHeight: 200,
        maxWidth: 200,
        cursor: 'pointer'
      },
      src: reward.earned ? '../../../static/gift_green.png' : '../../../static/gift_gray.png',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: undefined
    });
  };

  if (game && game._id) {
    return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: undefined
    }, __jsx("div", {
      style: styles.container,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: undefined
    }, __jsx("div", {
      style: {
        width: '100%'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: undefined
    }, __jsx("div", {
      style: _styles_masterStyles__WEBPACK_IMPORTED_MODULE_3__["MASTER"].pageTitle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: undefined
    }, "Playing ", game.title), __jsx("div", {
      style: {},
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: undefined
    }, "Created by ", game.org.name), __jsx("div", {
      style: {
        marginBottom: 20
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: undefined
    }, "Organized by ", game.organizer.name)), game.rewards.length && game.rewards[game.rewards.length - 1].position.includes('wholeBoard') && game.rewards[game.rewards.length - 1].title ? generateWholeBoardRewardIcon(game.rewards[game.rewards.length - 1]) : null, __jsx(_components_Play_PlayBoard__WEBPACK_IMPORTED_MODULE_5__["default"], {
      board: game,
      navigation: props.navigation,
      size: `size${game.numSquares}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: undefined
    })), __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_8___default.a, {
      open: rewardDialogOpen,
      onBackdropClick: () => setRewardDialogOpen(false),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: undefined
    }, __jsx(DialogTitle, {
      onClose: () => setRewardDialogOpen(false),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: undefined
    }, "REWARD"), __jsx(_components_Play_RewardDetail__WEBPACK_IMPORTED_MODULE_6__["default"], {
      reward: reward,
      mustRedeem: game.redeemRewards,
      openPopup: setRewardDialogOpen,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: undefined
    })));
  }

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: undefined
  }, "NO GAME"));
};

PlayHome.getInitialProps = async ({
  query
}) => {
  return {
    findID: query.findID,
    userID: query.userID
  };
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (PlayHome);

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
/*!*********************************************************!*\
  !*** multi ./pages/playGame/[findID]/[userID]/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/spencerford/Documents/DEVyall/PersonalProjects/CorporateBingoWeb/pages/playGame/[findID]/[userID]/index.js */"./pages/playGame/[findID]/[userID]/index.js");


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

/***/ "@material-ui/core/Switch":
/*!*******************************************!*\
  !*** external "@material-ui/core/Switch" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Switch");

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

/***/ })

/******/ });
//# sourceMappingURL=[userID].js.map