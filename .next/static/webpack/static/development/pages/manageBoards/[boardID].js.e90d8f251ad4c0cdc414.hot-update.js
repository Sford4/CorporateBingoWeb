webpackHotUpdate("static/development/pages/manageBoards/[boardID].js",{

/***/ "./components/ManageBoard/BoardBuilder/RewardBuilder.js":
/*!**************************************************************!*\
  !*** ./components/ManageBoard/BoardBuilder/RewardBuilder.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_masterStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../styles/masterStyles */ "./styles/masterStyles.js");
/* harmony import */ var _contexts_manageBoardsContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../contexts/manageBoardsContext */ "./contexts/manageBoardsContext.js");
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dropzone */ "./node_modules/react-dropzone/dist/es/index.js");



var _jsxFileName = "/Users/spencerford/Documents/DEVyall/PersonalProjects/CorporateBingoWeb/components/ManageBoard/BoardBuilder/RewardBuilder.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;
 // Style imports

 // Context imports

 // Component imports



var RewardBuilder = function RewardBuilder(props) {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_contexts_manageBoardsContext__WEBPACK_IMPORTED_MODULE_5__["ManageBoardsContext"]),
      contextBoard = _useContext.contextBoard,
      updateBoard = _useContext.updateBoard,
      setStuffToSave = _useContext.setStuffToSave;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({}),
      reward = _useState[0],
      setReward = _useState[1];

  var generateHowToEarn = function generateHowToEarn(position) {
    if (position === 'wholeBoard') {
      return 'Complete every task on the board!';
    } else if (position.substring(0, 3) === 'row') {
      return "Complete every task in row ".concat(position.slice(-1), ".");
    } else if (position.substring(0, 3) === 'col') {
      return "Complete every task in column ".concat(position.slice(-1), ".");
    } else if (position === 'diagonalUpRight') {
      return 'Complete every task in the diagonal from the bottom left square to the top right.';
    }

    return 'Complete every task in the diagonal from the top left square to the bottom right.';
  };

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (!contextBoard.id) {
      setReward(props.reward);
    } else {
      setReward(contextBoard.rewards.filter(function (reward) {
        return reward.id === props.reward.id;
      })[0]);
    }

    if (reward.id && !reward.howToEarn) {
      updateReward('howToEarn', generateHowToEarn(reward.position));
    }
  }, [contextBoard]);
  var onDrop = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (acceptedFiles) {
    var reader = new FileReader();

    reader.onabort = function () {
      return alert('file reading was aborted');
    };

    reader.onerror = function () {
      return alert('file reading has failed');
    };

    var file = acceptedFiles[0]; // if(!supportedFileTypes.includes(file.type)){
    //     this.openSnackBar(<FormattedMessage {...UserMessages.wrongFileType} />);
    // } else if (file.size > 10000000){
    //     this.openSnackBar(<FormattedMessage {...UserMessages.picTooBig} />);
    // } else {

    reader.addEventListener('load', function () {
      return setImg(reader.result);
    });
    reader.readAsDataURL(file); // }
  }, []);

  var _useDropzone = Object(react_dropzone__WEBPACK_IMPORTED_MODULE_6__["useDropzone"])({
    onDrop: onDrop
  }),
      getRootProps = _useDropzone.getRootProps,
      getInputProps = _useDropzone.getInputProps,
      isDragActive = _useDropzone.isDragActive;

  var updateReward = function updateReward(field, val) {
    var board = contextBoard;
    updateBoard(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, board, {
      rewards: board.rewards.map(function (oldReward) {
        if (oldReward.id === reward.id) {
          return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, oldReward, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, field, val));
        }

        return oldReward;
      })
    }));
    setStuffToSave(true);
  };

  var remove = function remove(id) {
    var board = contextBoard;
    updateBoard(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, board, {
      rewards: board.rewards.map(function (oldReward) {
        if (oldReward.id === id) {
          return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, oldReward, {
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

  var done = function done() {
    props.openPopup(false);
  };

  if (!reward.id) {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, "LOADING");
  }

  return __jsx("div", {
    style: styles.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
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
    __self: this
  }, __jsx("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getRootProps(), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }), __jsx("input", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getInputProps(), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  })), console.log({
    reward: reward
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
    __self: this
  }, __jsx("img", {
    style: styles.pic,
    src: reward.img,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, "(Click image to change)")) : __jsx("div", {
    style: styles.dropzone,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, __jsx("p", {
    style: {
      textAlign: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, "Click or drag here to change image"), __jsx("p", {
    style: {
      textAlign: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, "Put something that'll get the players excited!")))), __jsx("span", {
    style: styles.inputLabel,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, "Title"), __jsx("input", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, _styles_masterStyles__WEBPACK_IMPORTED_MODULE_4__["MASTER"].wideRoundInput, {
      marginTop: 2
    }),
    value: reward.title || '',
    onChange: function onChange(e) {
      updateReward('title', e.target.value);
      setReward(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, reward, {
        title: e.target.value
      }));
    },
    placeholder: 'e.g. $10 gift card!',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }), __jsx("span", {
    style: styles.inputLabel,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, "Description"), __jsx("textarea", {
    autoFocus: true,
    style: _styles_masterStyles__WEBPACK_IMPORTED_MODULE_4__["MASTER"].wideRoundTextArea,
    onChange: function onChange(e) {
      updateReward('description', e.target.value);
      setReward(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, reward, {
        description: e.target.value
      }));
    },
    value: reward.description || '',
    placeholder: 'e.g. A t shirt!',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }), __jsx("span", {
    style: styles.inputLabel,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, "Item they'll earn (for their player record)"), __jsx("input", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, _styles_masterStyles__WEBPACK_IMPORTED_MODULE_4__["MASTER"].wideRoundInput, {
      marginTop: 2
    }),
    value: reward.item || '',
    onChange: function onChange(e) {
      updateReward('item', e.target.value);
      setReward(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, reward, {
        item: e.target.value
      }));
    },
    placeholder: 'e.g. $10 gift card!',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }), __jsx("span", {
    style: styles.inputLabel,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, "Points they'll earn (for their player record)"), __jsx("input", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, _styles_masterStyles__WEBPACK_IMPORTED_MODULE_4__["MASTER"].wideRoundInput, {
      marginTop: 2
    }),
    value: reward.points || 0,
    onChange: function onChange(e) {
      updateReward('points', e.target.value);
      setReward(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, reward, {
        points: e.target.value
      }));
    },
    type: "number",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }), __jsx("span", {
    style: styles.inputLabel,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, "How to earn"), __jsx("textarea", {
    autoFocus: true,
    style: _styles_masterStyles__WEBPACK_IMPORTED_MODULE_4__["MASTER"].wideRoundTextArea,
    onChange: function onChange(e) {
      updateReward('howToEarn', e.target.value);
      setReward(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, reward, {
        howToEarn: e.target.value
      }));
    },
    value: reward.howToEarn,
    placeholder: 'e.g. Complete all the speed goals',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }), __jsx("button", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, _styles_masterStyles__WEBPACK_IMPORTED_MODULE_4__["MASTER"].wideRoundBtn, {
      backgroundColor: 'red',
      marginTop: 20
    }),
    onClick: function onClick() {
      return remove(reward.id);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }, __jsx("span", {
    style: _styles_masterStyles__WEBPACK_IMPORTED_MODULE_4__["MASTER"].wideRoundBtnText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }, "Remove Reward")), __jsx("button", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, _styles_masterStyles__WEBPACK_IMPORTED_MODULE_4__["MASTER"].wideRoundBtn, {
      marginTop: 20
    }),
    onClick: function onClick() {
      return done();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }, __jsx("span", {
    style: _styles_masterStyles__WEBPACK_IMPORTED_MODULE_4__["MASTER"].wideRoundBtnText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  }, "Done")));
};

var styles = {
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
    color: _styles_masterStyles__WEBPACK_IMPORTED_MODULE_4__["COLORS"].primary,
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

/***/ })

})
//# sourceMappingURL=[boardID].js.e90d8f251ad4c0cdc414.hot-update.js.map