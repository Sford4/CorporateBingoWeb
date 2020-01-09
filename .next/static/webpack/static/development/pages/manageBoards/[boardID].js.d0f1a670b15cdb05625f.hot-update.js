webpackHotUpdate("static/development/pages/manageBoards/[boardID].js",{

/***/ "./components/ManageBoard/BoardBuilder/SquareBuilder.js":
/*!**************************************************************!*\
  !*** ./components/ManageBoard/BoardBuilder/SquareBuilder.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_masterStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../styles/masterStyles */ "./styles/masterStyles.js");
/* harmony import */ var _contexts_manageBoardsContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../contexts/manageBoardsContext */ "./contexts/manageBoardsContext.js");
/* harmony import */ var _BuildSquareComponents_BuildQRCodeTask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BuildSquareComponents/BuildQRCodeTask */ "./components/ManageBoard/BoardBuilder/BuildSquareComponents/BuildQRCodeTask.js");
/* harmony import */ var _BuildSquareComponents_BuildCodeTask__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./BuildSquareComponents/BuildCodeTask */ "./components/ManageBoard/BoardBuilder/BuildSquareComponents/BuildCodeTask.js");
/* harmony import */ var _BuildSquareComponents_TaskHints__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./BuildSquareComponents/TaskHints */ "./components/ManageBoard/BoardBuilder/BuildSquareComponents/TaskHints.js");
/* harmony import */ var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Switch */ "./node_modules/@material-ui/core/esm/Switch/index.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/esm/Select/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");


var _jsxFileName = "/Users/spencerford/Documents/DEVyall/PersonalProjects/CorporateBingoWeb/components/ManageBoard/BoardBuilder/SquareBuilder.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;
 // Style imports

 // Context imports

 // Component Imports



 // Material UI





var SquareBuilder = function SquareBuilder(props) {
  var generateTaskMethod = function generateTaskMethod(taskType) {
    switch (taskType) {
      case 'click':
        return null;

      case 'code':
        return __jsx(_BuildSquareComponents_BuildCodeTask__WEBPACK_IMPORTED_MODULE_6__["default"], {
          task: props.task,
          updateTask: updateTask,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        });

      case 'text':
        return __jsx("div", {
          className: "text-builder",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        });

      case 'picture':
        return __jsx("div", {
          className: "picture-builder",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        }, __jsx("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          __self: this
        }));

      case 'qrCode':
        return __jsx(_BuildSquareComponents_BuildQRCodeTask__WEBPACK_IMPORTED_MODULE_5__["default"], {
          task: task,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        });
      // case 'proximity':
      //   return <div>proximity</div>;

      default:
        return null;
    }
  };

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_contexts_manageBoardsContext__WEBPACK_IMPORTED_MODULE_4__["ManageBoardsContext"]),
      contextBoard = _useContext.contextBoard,
      updateBoard = _useContext.updateBoard,
      setStuffToSave = _useContext.setStuffToSave;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(props.task),
      task = _useState[0],
      setTask = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (!contextBoard.id) {
      setTask(props.task);
    } else {
      setTask(contextBoard.squares.filter(function (task) {
        return task.id === props.task.id;
      })[0]);
    }
  }, [contextBoard]);

  var updateTask = function updateTask(field, val) {
    var board = contextBoard;
    updateBoard(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, board, {
      squares: board.squares.map(function (oldTask) {
        if (oldTask.id === props.task.id) {
          if (field === 'task') {
            return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, oldTask, {
              task: {
                taskType: val,
                answer: ''
              }
            });
          }

          if (field === 'codes') {
            return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, oldTask, {
              codes: {
                codeList: val.codeList,
                useOnce: val.useOnce
              }
            });
          }

          if (field === 'freeSquare') {
            // if a square is a free square, we set it to complete: true, if not, complete false
            return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, oldTask, {
              freeSquare: val,
              complete: val
            });
          }

          return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, oldTask, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, field, val));
        }

        return oldTask;
      })
    }));
    setStuffToSave(true);
  };

  var done = function done() {
    props.openPopup(false);
  };

  return __jsx("div", {
    style: styles.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, __jsx(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onChange: function onChange() {
      return updateTask('freeSquare', !task.freeSquare);
    },
    value: task.freeSquare,
    checked: task.freeSquare,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }), __jsx("span", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, styles.inputLabel, {
      marginLeft: 5
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, "This is a free square")), !task.freeSquare && __jsx("div", {
    style: styles.taskSettingsContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, __jsx("span", {
    style: styles.inputLabel,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, "Title (will also appear on the square)"), __jsx("input", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _styles_masterStyles__WEBPACK_IMPORTED_MODULE_3__["MASTER"].wideRoundInput, {
      marginTop: 2
    }),
    value: task.squareText || '',
    onChange: function onChange(e) {
      updateTask('squareText', e.target.value);
      setTask(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, task, {
        squareText: e.target.value
      }));
    },
    placeholder: 'e.g. Two sales in one hour',
    maxLength: "90",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }), __jsx("span", {
    style: styles.inputLabel,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, "Description"), __jsx("textarea", {
    autoFocus: true,
    style: _styles_masterStyles__WEBPACK_IMPORTED_MODULE_3__["MASTER"].wideRoundTextArea,
    onChange: function onChange(e) {
      updateTask('description', e.target.value);
      setTask(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, task, {
        description: e.target.value
      }));
    },
    value: task.description || '',
    placeholder: 'e.g. Make two sales in one hour and enter their ids below!',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }), __jsx("span", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, styles.inputLabel, {
      marginRight: 10,
      marginLeft: 5
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, "Hints:"), __jsx(_BuildSquareComponents_TaskHints__WEBPACK_IMPORTED_MODULE_7__["default"], {
    updateTask: updateTask,
    hints: task.hints,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }), __jsx("span", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, styles.inputLabel, {
      marginRight: 10,
      marginLeft: 5
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, "Task to complete:"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_9__["default"], {
    displayEmpty: false,
    value: task.task.taskType,
    onChange: function onChange(e) {
      return updateTask('task', e.target.value);
    },
    inputProps: {
      name: 'num squares',
      id: 'num-squares-select'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
    value: "click",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, "Flip a switch"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
    value: "code",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, "Enter a code"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
    value: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, "Enter some text"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
    value: "picture",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, "Upload a picture"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
    value: "qrCode",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, "Scan a QR Code")), __jsx("div", {
    style: {
      marginTop: 20
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, generateTaskMethod(task.task.taskType)), __jsx("button", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _styles_masterStyles__WEBPACK_IMPORTED_MODULE_3__["MASTER"].wideRoundBtn, {
      marginTop: 20
    }),
    onClick: function onClick() {
      return done();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, __jsx("span", {
    style: _styles_masterStyles__WEBPACK_IMPORTED_MODULE_3__["MASTER"].wideRoundBtnText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, "Done"))));
};

var styles = {
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
    color: _styles_masterStyles__WEBPACK_IMPORTED_MODULE_3__["COLORS"].green,
    position: 'relative',
    left: '-50%',
    top: '-50%',
    fontSize: 45,
    transform: 'rotateZ(345deg)'
  },
  inputLabel: {
    marginTop: 15,
    color: _styles_masterStyles__WEBPACK_IMPORTED_MODULE_3__["COLORS"].primary,
    fontSize: 17
  }
};
/* harmony default export */ __webpack_exports__["default"] = (SquareBuilder);

/***/ })

})
//# sourceMappingURL=[boardID].js.d0f1a670b15cdb05625f.hot-update.js.map