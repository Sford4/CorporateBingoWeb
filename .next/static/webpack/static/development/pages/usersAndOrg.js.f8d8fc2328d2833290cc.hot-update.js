webpackHotUpdate("static/development/pages/usersAndOrg.js",{

/***/ "./components/orgAndUsers/orgDetails.js":
/*!**********************************************!*\
  !*** ./components/orgAndUsers/orgDetails.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _contexts_orgContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../contexts/orgContext */ "./contexts/orgContext.js");
/* harmony import */ var _styles_masterStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/masterStyles */ "./styles/masterStyles.js");
/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-color */ "./node_modules/react-color/lib/index.js");
/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_color__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dropzone */ "./node_modules/react-dropzone/dist/es/index.js");



var _jsxFileName = "/Users/spencerford/Documents/DEVyall/PersonalProjects/CorporateBingoWeb/components/orgAndUsers/orgDetails.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;
 // Context imports

 // Style imports

 // Component Imports


 // Material UI

var OrgDetails = function OrgDetails(props) {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_contexts_orgContext__WEBPACK_IMPORTED_MODULE_4__["OrgContext"]),
      contextOrg = _useContext.contextOrg,
      updateOrg = _useContext.updateOrg,
      setStuffToSave = _useContext.setStuffToSave;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(contextOrg),
      org = _useState[0],
      setOrg = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (!contextOrg.id) {
      setOrg(props.org);
    } else {
      setOrg(contextOrg);
    }
  }, [contextOrg]);

  var changeRegularValues = function changeRegularValues(name, val) {
    updateOrg(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, org, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, name, val)));
    setStuffToSave(true);
  };

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
      return changeRegularValues('freeSquareIcon', reader.result);
    });
    reader.readAsDataURL(file); // }
  }, []);

  var _useDropzone = Object(react_dropzone__WEBPACK_IMPORTED_MODULE_7__["useDropzone"])({
    onDrop: onDrop
  }),
      getRootProps = _useDropzone.getRootProps,
      getInputProps = _useDropzone.getInputProps,
      isDragActive = _useDropzone.isDragActive;

  if (!org.id) {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, "LOADING");
  }

  return __jsx("div", {
    style: styles.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx("div", {
    style: styles.subcontainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx("div", {
    style: styles.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx("div", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, styles.labelColumn, {
      width: '100%'
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx("span", {
    style: styles.inputLabel,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "Org Name"), __jsx("input", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, _styles_masterStyles__WEBPACK_IMPORTED_MODULE_5__["MASTER"].wideRoundInput, {
      marginTop: 5,
      width: 'auto',
      padding: '0 20px 0 20px',
      maxWidth: 700
    }),
    value: org.name,
    onChange: function onChange(e) {
      changeRegularValues('name', e.target.value);
      setOrg(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, org, {
        name: e.target.value
      }));
    },
    placeholder: 'e.g. Example Co',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }))), __jsx("div", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, styles.row, {
      justifyContent: 'flex-start'
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx("span", {
    style: styles.inputLabel,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "Default Square Colors")), __jsx("div", {
    style: styles.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx("div", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, styles.labelColumn, {
      alignItems: 'center',
      flexDirection: 'row'
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx(react_color__WEBPACK_IMPORTED_MODULE_6__["ChromePicker"], {
    color: org.incompleteColor,
    onChange: function onChange(color, e) {
      return changeRegularValues('incompleteColor', color.hex.substring(1, color.hex.length));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }), __jsx("span", {
    className: "incomplete-color",
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, styles.exampleSquare, {
      color: 'white',
      backgroundColor: "#".concat(org.incompleteColor),
      textAlign: 'center'
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, "Incomplete Square Example")), __jsx("div", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, styles.labelColumn, {
      alignItems: 'center',
      flexDirection: 'row'
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx(react_color__WEBPACK_IMPORTED_MODULE_6__["ChromePicker"], {
    color: org.completeColor,
    onChange: function onChange(color, e) {
      return changeRegularValues('completeColor', color.hex.substring(1, color.hex.length));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }), __jsx("span", {
    className: "complete-color",
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, styles.exampleSquare, {
      color: 'white',
      backgroundColor: "#".concat(org.completeColor),
      textAlign: 'center'
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, "Complete Square Example"))), __jsx("div", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, styles.row, {
      justifyContent: 'flex-start'
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx("span", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, styles.inputLabel, {
      marginTop: 20
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "Default \"Free Square\" Image")), __jsx("div", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, styles.row, {
      alignItems: 'center',
      marginTop: 0
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, __jsx("div", {
    style: {
      display: 'flex',
      width: '50%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, __jsx("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getRootProps(), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }), __jsx("input", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getInputProps(), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  })), isDragActive ? __jsx("div", {
    style: styles.dropzone,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, __jsx("p", {
    style: {
      textAlign: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, "Click or drag to upload an image"), __jsx("p", {
    style: {
      textAlign: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, "Images must be square, and images with a transparent background work best.")) : __jsx("div", {
    style: styles.dropzone,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, __jsx("p", {
    style: {
      textAlign: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, "Click or drag here to change image"), __jsx("p", {
    style: {
      textAlign: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, "Images must be square, and images with a transparent background work best."))), __jsx("div", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, styles.exampleSquare, {
      backgroundColor: "#".concat(org.completeColor)
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, __jsx("img", {
    style: styles.image,
    src: org.freeSquareIcon === 'default' ? '../../static/circle_check.png' : org.freeSquareIcon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }))), __jsx("div", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, styles.labelColumn, {
      alignItems: 'center',
      flexDirection: 'row'
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, __jsx(react_color__WEBPACK_IMPORTED_MODULE_6__["ChromePicker"], {
    color: org.primaryColor,
    onChange: function onChange(color, e) {
      return changeRegularValues('primaryColor', color.hex.substring(1, color.hex.length));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }), __jsx("span", {
    className: "complete-color",
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, styles.exampleSquare, {
      color: 'white',
      backgroundColor: "#".concat(org.primaryColor)
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, "Branding Primary Color")))));
};

var styles = {
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
    width: '50%',
    minWidth: 300,
    display: 'flex',
    flexDirection: 'column'
  },
  inputLabel: {
    marginLeft: 15,
    color: _styles_masterStyles__WEBPACK_IMPORTED_MODULE_5__["COLORS"].primary,
    fontSize: 17
  },
  exampleSquare: {
    width: 200,
    height: 200,
    minWidth: 200,
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
/* harmony default export */ __webpack_exports__["default"] = (OrgDetails);

/***/ })

})
//# sourceMappingURL=usersAndOrg.js.f8d8fc2328d2833290cc.hot-update.js.map