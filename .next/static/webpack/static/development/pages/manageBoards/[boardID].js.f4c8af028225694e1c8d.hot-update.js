webpackHotUpdate("static/development/pages/manageBoards/[boardID].js",{

/***/ "./components/ManageBoard/BoardBuilder/BoardBuilder.js":
/*!*************************************************************!*\
  !*** ./components/ManageBoard/BoardBuilder/BoardBuilder.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_manageBoardsContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../contexts/manageBoardsContext */ "./contexts/manageBoardsContext.js");
/* harmony import */ var _styles_masterStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../styles/masterStyles */ "./styles/masterStyles.js");
/* harmony import */ var _BoardBuilderBoard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BoardBuilderBoard */ "./components/ManageBoard/BoardBuilder/BoardBuilderBoard.js");
/* harmony import */ var _RewardBuilder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RewardBuilder */ "./components/ManageBoard/BoardBuilder/RewardBuilder.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/index.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/esm/DialogTitle/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_12__);


var _jsxFileName = "/Users/spencerford/Documents/DEVyall/PersonalProjects/CorporateBingoWeb/components/ManageBoard/BoardBuilder/BoardBuilder.js",
    _container;

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
 // context imports

 // Style imports

 // Component imports


 // Material ui








var DialogActions = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["withStyles"])(function (theme) {
  return {
    root: {
      margin: 0,
      padding: theme.spacing(1),
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  };
})(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_8__["default"]);

var materialStyles = function materialStyles(theme) {
  return {
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
  };
};

var DialogTitle = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["withStyles"])(materialStyles)(function (props) {
  var children = props.children,
      classes = props.classes,
      onClose = props.onClose;
  return __jsx(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_9__["default"], {
    disableTypography: true,
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
    variant: "h6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, children), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11__["default"], {
    "aria-label": "close",
    className: classes.closeButton,
    onClick: onClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_12___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  })));
});

var BoardBuilder = function BoardBuilder(props) {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_manageBoardsContext__WEBPACK_IMPORTED_MODULE_2__["ManageBoardsContext"]),
      contextBoard = _useContext.contextBoard,
      updateBoard = _useContext.updateBoard;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(contextBoard),
      board = _useState[0],
      setBoard = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      rewardDialogOpen = _useState2[0],
      setRewardDialogOpen = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      reward = _useState3[0],
      setReward = _useState3[1];

  var openRewardBuilderPopup = function openRewardBuilderPopup(reward) {
    setRewardDialogOpen(true);
    setReward(reward);
  };

  var updateBoardBuilder = function updateBoardBuilder(board) {
    updateBoard(board);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setBoard(contextBoard);
  }, [contextBoard]);

  var generateWholeBoardRewardIcon = function generateWholeBoardRewardIcon(reward) {
    return __jsx("img", {
      alt: "Whole board completion reward",
      onClick: function onClick() {
        return openRewardBuilderPopup(reward);
      },
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
      __self: this
    });
  };

  return __jsx("div", {
    style: styles.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, console.log(board.rewards[0]), board.rewards.length && board.rewards[0].position.includes('wholeBoard') ? generateWholeBoardRewardIcon(board.rewards[0]) : null, __jsx(_BoardBuilderBoard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    board: board,
    navigation: props.navigation,
    size: "size".concat(board.numSquares),
    updateBoard: updateBoardBuilder,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }), __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_7__["default"], {
    open: rewardDialogOpen,
    onBackdropClick: function onBackdropClick() {
      return setRewardDialogOpen(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, __jsx(DialogTitle, {
    onClose: function onClose() {
      return setRewardDialogOpen(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, "REWARD"), __jsx(_RewardBuilder__WEBPACK_IMPORTED_MODULE_5__["default"], {
    reward: reward,
    openPopup: setRewardDialogOpen,
    updateBoard: updateBoardBuilder,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  })));
};

var styles = {
  container: (_container = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignItems: 'center'
  }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_container, "justifyContent", 'center'), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_container, "width", '100%'), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_container, "height", '100%'), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_container, "overflowY", 'scroll'), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_container, "overflowX", 'overlay'), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_container, "width", '60vw'), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_container, "maxWidth", 800), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_container, "minWidth", 300), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_container, "paddingHorizontal", 'auto'), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_container, "padding", '3% 5%'), _container)
};
/* harmony default export */ __webpack_exports__["default"] = (BoardBuilder);

/***/ })

})
//# sourceMappingURL=[boardID].js.f4c8af028225694e1c8d.hot-update.js.map