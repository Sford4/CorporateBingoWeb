webpackHotUpdate("static/development/pages/manageBoards/[boardID].js",{

/***/ "./components/ManageBoard/BoardBuilder/BoardBuilderBoard.js":
/*!******************************************************************!*\
  !*** ./components/ManageBoard/BoardBuilder/BoardBuilderBoard.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_masterStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles/masterStyles */ "./styles/masterStyles.js");
/* harmony import */ var _contexts_manageBoardsContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../contexts/manageBoardsContext */ "./contexts/manageBoardsContext.js");
/* harmony import */ var _constants_boardSizes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../constants/boardSizes */ "./constants/boardSizes.js");
/* harmony import */ var _funcs_boardLogic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../funcs/boardLogic */ "./funcs/boardLogic.js");
/* harmony import */ var _SquareBuilder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SquareBuilder */ "./components/ManageBoard/BoardBuilder/SquareBuilder.js");
/* harmony import */ var _RewardBuilder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./RewardBuilder */ "./components/ManageBoard/BoardBuilder/RewardBuilder.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/index.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/esm/DialogTitle/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_14__);

var _jsxFileName = "/Users/spencerford/Documents/DEVyall/PersonalProjects/CorporateBingoWeb/components/ManageBoard/BoardBuilder/BoardBuilderBoard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
 // Style imports

 // Context imports

 // Data imports


 // Component imports


 // Material ui









var materialStyles = function materialStyles(theme) {
  return {
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
  };
};

var DialogTitle = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["withStyles"])(materialStyles)(function (props) {
  var children = props.children,
      classes = props.classes,
      onClose = props.onClose;
  return __jsx(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_11__["default"], {
    disableTypography: true,
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__["default"], {
    variant: "h6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, children), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_13__["default"], {
    "aria-label": "close",
    className: classes.closeButton,
    onClick: onClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_14___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  })));
});

var BoardBuilderBoard = function BoardBuilderBoard(props) {
  var SQUARE_WIDTH = 60 / (Math.sqrt(props.board.numSquares) + 1);
  var taskNum = 1;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_manageBoardsContext__WEBPACK_IMPORTED_MODULE_3__["ManageBoardsContext"]),
      contextBoard = _useContext.contextBoard,
      updateBoard = _useContext.updateBoard;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(props.board),
      board = _useState[0],
      setBoard = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      rewardDialogOpen = _useState2[0],
      setRewardDialogOpen = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      reward = _useState3[0],
      setReward = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      taskDialogOpen = _useState4[0],
      setTaskDialogOpen = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      task = _useState5[0],
      setTask = _useState5[1];

  var openRewardBuilderPopup = function openRewardBuilderPopup(reward) {
    setRewardDialogOpen(true);
    setReward(reward);
  };

  var openSquareBuilderPopup = function openSquareBuilderPopup(task) {
    setTaskDialogOpen(true);
    setTask(task);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setBoard(contextBoard);
  }, [contextBoard]);

  var generateRow = function generateRow(row) {
    return row.map(function (square, index) {
      switch (square.type) {
        case 'reward':
          var _reward = board.rewards.length ? board.rewards.filter(function (reward) {
            return reward.position === square.id;
          })[0] : null;

          if (!_reward) {
            return __jsx("div", {
              key: "empty".concat(index),
              style: {
                width: "".concat(SQUARE_WIDTH, "vw"),
                height: "".concat(SQUARE_WIDTH, "vw"),
                paddingTop: "".concat(SQUARE_WIDTH * .72, "%"),
                maxWidth: 110,
                maxHeight: 110
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 88
              },
              __self: this
            });
          }

          return __jsx("button", {
            key: "reward".concat(index),
            style: {
              width: "".concat(SQUARE_WIDTH, "vw"),
              height: "".concat(SQUARE_WIDTH, "vw"),
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
            onClick: function onClick() {
              return openRewardBuilderPopup(_reward);
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 99
            },
            __self: this
          }, __jsx("img", {
            style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _styles_masterStyles__WEBPACK_IMPORTED_MODULE_2__["MASTER"].smallRewardIcon, {
              width: '70%',
              height: '70%'
            }),
            src: !_reward.title && !_reward.description && !_reward.img ? '../../static/gift_light_gray.png' : '../../static/gift_gray.png',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 118
            },
            __self: this
          }));

        case 'task':
          if (!taskNum) {
            return;
          }

          var _task = board.squares[taskNum - 1];

          if (taskNum === board.numSquares) {
            taskNum = 0;
          } else {
            taskNum++;
          }

          if (_task.freeSquare) {
            return __jsx("button", {
              key: "free".concat(index),
              style: {
                width: "".concat(SQUARE_WIDTH, "vw"),
                height: "".concat(SQUARE_WIDTH, "vw"),
                paddingTop: "".concat(SQUARE_WIDTH * .72, "%"),
                backgroundColor: "#".concat(board.completeColor),
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
              onClick: function onClick() {
                return openSquareBuilderPopup(_task);
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 140
              },
              __self: this
            }, __jsx("img", {
              style: _styles_masterStyles__WEBPACK_IMPORTED_MODULE_2__["MASTER"].freeSquareIcon,
              src: '../../static/circle_check.png',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 160
              },
              __self: this
            }));
          }

          return __jsx("button", {
            key: "task".concat(index),
            style: {
              width: "".concat(SQUARE_WIDTH, "vw"),
              height: "".concat(SQUARE_WIDTH, "vw"),
              paddingTop: "".concat(SQUARE_WIDTH * .72, "%"),
              backgroundColor: _task.freeSquare ? "#".concat(board.completeColor) : "#".concat(board.incompleteColor),
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
            onClick: function onClick() {
              return openSquareBuilderPopup(_task);
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 165
            },
            __self: this
          }, __jsx("div", {
            style: _styles_masterStyles__WEBPACK_IMPORTED_MODULE_2__["MASTER"].squareText,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 185
            },
            __self: this
          }, _task.squareText));

        case 'empty':
          return __jsx("div", {
            key: "empty".concat(index),
            style: {
              width: "".concat(SQUARE_WIDTH, "vw"),
              height: "".concat(SQUARE_WIDTH, "vw"),
              paddingTop: "".concat(SQUARE_WIDTH * .72, "%"),
              maxWidth: 110,
              maxHeight: 110,
              position: 'relative'
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 190
            },
            __self: this
          });

        default:
          return __jsx("div", {
            key: "empty".concat(index),
            style: {
              width: "".concat(SQUARE_WIDTH, "vw"),
              height: "".concat(SQUARE_WIDTH, "vw"),
              paddingTop: "".concat(SQUARE_WIDTH * .72, "%"),
              maxWidth: 110,
              maxHeight: 110,
              position: 'relative'
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 203
            },
            __self: this
          });
      }
    });
  };

  var generateBoard = function generateBoard() {
    var template = _constants_boardSizes__WEBPACK_IMPORTED_MODULE_4__["boardTemplates"][props.size];
    return template.spaces.map(function (row, index) {
      return __jsx("div", {
        key: "row".concat(index + 1),
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
        __self: this
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
      __self: this
    }, generateBoard(props.board), __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_9__["default"], {
      open: rewardDialogOpen,
      onBackdropClick: function onBackdropClick() {
        return setRewardDialogOpen(false);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 236
      },
      __self: this
    }, __jsx(DialogTitle, {
      onClose: function onClose() {
        return setRewardDialogOpen(false);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237
      },
      __self: this
    }, "EDIT REWARD"), __jsx(_RewardBuilder__WEBPACK_IMPORTED_MODULE_7__["default"], {
      reward: reward,
      openPopup: setRewardDialogOpen,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 240
      },
      __self: this
    })), __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_9__["default"], {
      open: taskDialogOpen,
      onBackdropClick: function onBackdropClick() {
        return setTaskDialogOpen(false);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 242
      },
      __self: this
    }, __jsx(DialogTitle, {
      onClose: function onClose() {
        return setTaskDialogOpen(false);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243
      },
      __self: this
    }, "EDIT TASK"), __jsx(_SquareBuilder__WEBPACK_IMPORTED_MODULE_6__["default"], {
      task: task,
      openPopup: setTaskDialogOpen,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246
      },
      __self: this
    })));
  } else {
    return null;
  }
};

var styles = {
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (BoardBuilderBoard);

/***/ })

})
//# sourceMappingURL=[boardID].js.518fdbdafb0b97896002.hot-update.js.map