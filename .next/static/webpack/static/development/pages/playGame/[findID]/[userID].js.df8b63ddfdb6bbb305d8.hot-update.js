webpackHotUpdate("static/development/pages/playGame/[findID]/[userID].js",{

/***/ "./components/Play/PlayBoard.js":
/*!**************************************!*\
  !*** ./components/Play/PlayBoard.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_masterStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/masterStyles */ "./styles/masterStyles.js");
/* harmony import */ var _constants_boardSizes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/boardSizes */ "./constants/boardSizes.js");
/* harmony import */ var _funcs_boardLogic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../funcs/boardLogic */ "./funcs/boardLogic.js");
/* harmony import */ var _contexts_playContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../contexts/playContext */ "./contexts/playContext.js");
/* harmony import */ var _SquareDetail__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SquareDetail */ "./components/Play/SquareDetail.js");
/* harmony import */ var _RewardDetail__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./RewardDetail */ "./components/Play/RewardDetail.js");
/* harmony import */ var _Tasks_PlayHints__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Tasks/PlayHints */ "./components/Play/Tasks/PlayHints.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/index.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/esm/DialogTitle/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_15__);

var _jsxFileName = "/Users/spencerford/Documents/DEVyall/PersonalProjects/CorporateBingoWeb/components/Play/PlayBoard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
 // Style imports

 // Data imports


 // context imports

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

var DialogTitle = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__["withStyles"])(materialStyles)(function (props) {
  var children = props.children,
      classes = props.classes,
      onClose = props.onClose;
  return __jsx(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_12__["default"], {
    disableTypography: true,
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__["default"], {
    variant: "h6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, children), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_14__["default"], {
    "aria-label": "close",
    className: classes.closeButton,
    onClick: onClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_15___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  })));
});

var PlayBoard = function PlayBoard(props) {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_playContext__WEBPACK_IMPORTED_MODULE_5__["PlayContext"]),
      contextGame = _useContext.contextGame,
      saveGame = _useContext.saveGame;

  var SQUARE_WIDTH = 60 / (Math.sqrt(props.board.numSquares) + 1);
  var taskNum = 1;
  var taskOrderNum = 0;

  var getNumCompleted = function getNumCompleted(squares) {
    var numCompleted = 0;
    squares.map(function (square) {
      if (square.complete && !square.freeSquare) {
        numCompleted++;
      } else if (!square.completed && !square.freeSquare) {
        return;
      }
    });
    return numCompleted;
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(props.board),
      board = _useState[0],
      setBoard = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      previousSquareComplete = _useState2[0],
      setPreviousSquareComplete = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(getNumCompleted(board.squares)),
      numCompleted = _useState3[0],
      setNumCompleted = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      rewardDialogOpen = _useState4[0],
      setRewardDialogOpen = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      reward = _useState5[0],
      setReward = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      taskDialogOpen = _useState6[0],
      setTaskDialogOpen = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      task = _useState7[0],
      setTask = _useState7[1];

  var openRewardDetailPopup = function openRewardDetailPopup(reward) {
    setRewardDialogOpen(true);
    setReward(reward);
  };

  var openTaskDetailPopup = function openTaskDetailPopup(task, previousSquareComplete) {
    setTaskDialogOpen(true);
    setTask(task);
    setPreviousSquareComplete(previousSquareComplete);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setBoard(contextGame);
    setNumCompleted(getNumCompleted(contextGame.squares));
  }, [contextGame]);

  var updateTask = function updateTask(task) {
    var gameToSave = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, contextGame, {
      squares: contextGame.squares.map(function (square) {
        if (square._id === task._id) {
          return task;
        }

        return square;
      })
    }); // run saveGame with the result of checkForRewards


    var rewardsChanged = false;
    var earnedRewards = Object(_funcs_boardLogic__WEBPACK_IMPORTED_MODULE_4__["checkForRewards"])(gameToSave);
    console.log({
      earnedRewards: earnedRewards
    });
    var rewards = contextGame.rewards.map(function (reward) {
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

      var gameWithRewards = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, gameToSave, {
        rewards: rewards
      });

      saveGame(gameWithRewards);
    } else {
      saveGame(gameToSave);
    }
  };

  var generateRow = function generateRow(row) {
    var SOMETHING_RIGHT = contextGame.rewards.filter(function (reward) {
      return (reward.position.includes('row') || reward.position.includes('diagonalUpRight')) && reward.title;
    })[0];
    return row.map(function (square, index) {
      switch (square.type) {
        case 'reward':
          var _reward = contextGame.rewards.length ? contextGame.rewards.filter(function (reward) {
            return reward.position === square.id && reward.title;
          })[0] : null;

          if (!_reward) {
            return __jsx("div", {
              key: "empty".concat(index),
              style: {
                width: !SOMETHING_RIGHT && (square.id.includes('row') || square.id.includes('diagonalUpRight')) ? 1 : "".concat(SQUARE_WIDTH, "vw"),
                height: !SOMETHING_RIGHT && (square.id.includes('row') || square.id.includes('diagonalUpRight')) ? 1 : "".concat(SQUARE_WIDTH, "vw"),
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
              __self: this
            });
          }

          return __jsx("button", {
            key: "reward".concat(index),
            style: {
              width: "".concat(SQUARE_WIDTH, "vw"),
              height: "".concat(SQUARE_WIDTH, "vw"),
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
            onClick: function onClick() {
              return openRewardDetailPopup(_reward);
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 162
            },
            __self: this
          }, __jsx("img", {
            style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _styles_masterStyles__WEBPACK_IMPORTED_MODULE_2__["MASTER"].smallRewardIcon, {
              width: '70%',
              height: '70%'
            }),
            src: _reward.earned ? '../../static/gift_green.png' : '../../static/gift_gray.png',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 183
            },
            __self: this
          }));

        case 'task':
          if (!taskNum) {
            return;
          }

          var _task = contextGame.squares[taskNum - 1];

          if (taskNum === contextGame.numSquares) {
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
                // paddingTop: `${SQUARE_WIDTH * .72}%`,
                position: 'relative',
                backgroundColor: "#".concat(contextGame.completeColor),
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
              __self: this
            }, __jsx("img", {
              style: _styles_masterStyles__WEBPACK_IMPORTED_MODULE_2__["MASTER"].freeSquareIcon,
              src: '../../static/circle_check.png',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 222
              },
              __self: this
            }));
          } else {
            taskOrderNum++;
            _task.taskOrderNum = taskOrderNum;
            return __jsx("button", {
              key: "task".concat(index),
              style: {
                width: "".concat(SQUARE_WIDTH, "vw"),
                height: "".concat(SQUARE_WIDTH, "vw"),
                // paddingTop: `${SQUARE_WIDTH * .72}%`,
                position: 'relative',
                backgroundColor: _task.complete ? "#".concat(contextGame.completeColor) : "#".concat(contextGame.incompleteColor),
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
              onClick: function onClick() {
                return openTaskDetailPopup(_task, _task.taskOrderNum - 1 !== numCompleted);
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 229
              },
              __self: this
            }, contextGame.mustBeDoneInOrder && __jsx("div", {
              style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _styles_masterStyles__WEBPACK_IMPORTED_MODULE_2__["MASTER"].squareOrderNum, {
                color: _task.complete ? "#".concat(contextGame.completeColor) : "#".concat(contextGame.incompleteColor)
              }),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 252
              },
              __self: this
            }, taskOrderNum), __jsx("div", {
              style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _styles_masterStyles__WEBPACK_IMPORTED_MODULE_2__["MASTER"].squareText, {
                maxHeight: 100
              }),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 253
              },
              __self: this
            }, _task.squareText));
          }

        case 'empty':
          return __jsx("div", {
            key: "empty".concat(index),
            style: {
              width: "".concat(SQUARE_WIDTH, "vw"),
              height: "".concat(SQUARE_WIDTH, "vw"),
              // paddingTop: `${SQUARE_WIDTH * .72}%`,
              position: 'relative',
              maxWidth: 110,
              maxHeight: 110
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 259
            },
            __self: this
          });

        default:
          return __jsx("div", {
            key: "empty".concat(index),
            style: {
              width: "".concat(SQUARE_WIDTH, "vw"),
              height: "".concat(SQUARE_WIDTH, "vw"),
              // paddingTop: `${SQUARE_WIDTH * .72}%`,
              position: 'relative',
              maxWidth: 110,
              maxHeight: 110
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 272
            },
            __self: this
          });
      }
    });
  };

  var generateBoard = function generateBoard() {
    var template = _constants_boardSizes__WEBPACK_IMPORTED_MODULE_3__["boardTemplates"][props.size];
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
          lineNumber: 291
        },
        __self: this
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
      __self: this
    }, generateBoard(), __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_10__["default"], {
      open: rewardDialogOpen,
      onBackdropClick: function onBackdropClick() {
        return setRewardDialogOpen(false);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 305
      },
      __self: this
    }, __jsx(DialogTitle, {
      onClose: function onClose() {
        return setRewardDialogOpen(false);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 306
      },
      __self: this
    }, "REWARD"), __jsx(_RewardDetail__WEBPACK_IMPORTED_MODULE_7__["default"], {
      reward: reward,
      mustRedeem: contextGame.redeemRewards,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 309
      },
      __self: this
    })), __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_10__["default"], {
      open: taskDialogOpen,
      onBackdropClick: function onBackdropClick() {
        return setTaskDialogOpen(false);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 311
      },
      __self: this
    }, __jsx(DialogTitle, {
      onClose: function onClose() {
        return setTaskDialogOpen(false);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 312
      },
      __self: this
    }, __jsx("div", {
      style: {
        display: 'flex',
        alignItems: 'center'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 313
      },
      __self: this
    }, "TASK ", task.hints && task.hints.length ? __jsx(_Tasks_PlayHints__WEBPACK_IMPORTED_MODULE_8__["default"], {
      hints: task.hints,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 314
      },
      __self: this
    }) : null)), __jsx(_SquareDetail__WEBPACK_IMPORTED_MODULE_6__["default"], {
      task: task,
      updateTask: updateTask,
      previousSquareComplete: previousSquareComplete,
      mustBeDoneInOrder: props.board.mustBeDoneInOrder,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 317
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
/* harmony default export */ __webpack_exports__["default"] = (PlayBoard);

/***/ })

})
//# sourceMappingURL=[userID].js.df8b63ddfdb6bbb305d8.hot-update.js.map