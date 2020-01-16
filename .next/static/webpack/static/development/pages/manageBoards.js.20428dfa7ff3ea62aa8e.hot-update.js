webpackHotUpdate("static/development/pages/manageBoards.js",{

/***/ "./pages/manageBoards/index.js":
/*!*************************************!*\
  !*** ./pages/manageBoards/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_masterStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/masterStyles */ "./styles/masterStyles.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/esm/Table/index.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/esm/TableBody/index.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/@material-ui/core/esm/TableCell/index.js");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/TableHead */ "./node_modules/@material-ui/core/esm/TableHead/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/esm/TableRow/index.js");
/* harmony import */ var _material_ui_core_TablePagination__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/TablePagination */ "./node_modules/@material-ui/core/esm/TablePagination/index.js");
/* harmony import */ var _contexts_orgContext__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../contexts/orgContext */ "./contexts/orgContext.js");
/* harmony import */ var _contexts_manageBoardsContext__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../contexts/manageBoardsContext */ "./contexts/manageBoardsContext.js");
/* harmony import */ var _contexts_userContext__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../contexts/userContext */ "./contexts/userContext.js");
/* harmony import */ var _node_modules_next_dist_next_server_lib_utils__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../node_modules/next/dist/next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");
/* harmony import */ var _node_modules_next_dist_next_server_lib_utils__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_next_server_lib_utils__WEBPACK_IMPORTED_MODULE_19__);



var _jsxFileName = "/Users/spencerford/Documents/DEVyall/PersonalProjects/CorporateBingoWeb/pages/manageBoards/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;


 // context imports
// Style imports

 // component imports


 // Material UI







 // context imports






var ManageBoardsHome = function ManageBoardsHome(props) {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_contexts_orgContext__WEBPACK_IMPORTED_MODULE_16__["OrgContext"]),
      contextOrg = _useContext.contextOrg,
      getOrg = _useContext.getOrg;

  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_contexts_manageBoardsContext__WEBPACK_IMPORTED_MODULE_17__["ManageBoardsContext"]),
      newBoard = _useContext2.newBoard;

  var _useContext3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_contexts_userContext__WEBPACK_IMPORTED_MODULE_18__["UserContext"]),
      user = _useContext3.user,
      storeUser = _useContext3.storeUser,
      logout = _useContext3.logout; // table state
  // const [order, setOrder] = React.useState('asc');
  // const [orderBy, setOrderBy] = React.useState('calories');


  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(0),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState, 2),
      page = _React$useState2[0],
      setPage = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(5),
      _React$useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState3, 2),
      rowsPerPage = _React$useState4[0],
      setRowsPerPage = _React$useState4[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      searchText = _useState[0],
      setSearchText = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(contextOrg.boards || []),
      boards = _useState2[0],
      setBoards = _useState2[1];

  var searchForBoard = function searchForBoard() {
    setSearchText('');
    setBoards(dummyBoards);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (!user) {
      if (localStorage.getItem('bingo_user')) {
        storeUser(JSON.parse(localStorage.getItem('bingo_user')));
      } else {
        logout();
      }
    }

    if (!contextOrg.id && user && !user.org) {
      router.push('/joinGame');
    } else if (!contextOrg.id && user && user.org) {
      getOrg(user.org);
    }

    if (contextOrg && contextOrg.boards && contextOrg.boards.length !== boards.length) {
      setBoards(contextOrg.boards);
    }
  }, [contextOrg, user]);

  var handleChangePage = function handleChangePage(event, newPage) {
    setPage(newPage);
  };

  var handleChangeRowsPerPage = function handleChangeRowsPerPage(event) {
    setRowsPerPage(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(event.target.value, 10));
    setPage(0);
  };

  var generateBoardRows = function generateBoardRows() {
    if (boards.length) {
      return boards.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(function (board, index) {
        return __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
          key: board.id,
          href: "manageBoards/[boardID]",
          as: "manageBoards/".concat(board.id),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          },
          __self: this
        }, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_14__["default"], {
          style: {
            cursor: 'pointer'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          },
          __self: this
        }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_12__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          },
          __self: this
        }, board.title), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_12__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          },
          __self: this
        }, board.numSquares), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_12__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          },
          __self: this
        }, moment__WEBPACK_IMPORTED_MODULE_5___default()(board.created).format("MMM Do, YYYY")), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_12__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          },
          __self: this
        }, moment__WEBPACK_IMPORTED_MODULE_5___default()(board.modified).format("MMM Do, YYYY"))));
      });
    }

    return __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_14__["default"], {
      style: {
        width: '100%'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_12__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }, "No boards yet... click NEW BOARD to make one!"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_12__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_12__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_12__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }));
  };

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, __jsx("div", {
    style: styles.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, __jsx("div", {
    style: _styles_masterStyles__WEBPACK_IMPORTED_MODULE_6__["MASTER"].pageTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, "MANAGE BOARDS"), __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, __jsx("div", {
    style: {
      padding: '1% 3%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, __jsx("div", {
    style: {
      display: 'flex'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, __jsx("input", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _styles_masterStyles__WEBPACK_IMPORTED_MODULE_6__["MASTER"].wideRoundInput, {
      maxWidth: 300
    }),
    value: searchText,
    onChange: function onChange(e) {
      return setSearchText(e.target.value);
    },
    placeholder: 'Search by name or access code ',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }), __jsx("button", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _styles_masterStyles__WEBPACK_IMPORTED_MODULE_6__["MASTER"].wideRoundBtn, {
      width: 100
    }),
    onClick: function onClick() {
      return searchForBoard();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, __jsx("div", {
    style: _styles_masterStyles__WEBPACK_IMPORTED_MODULE_6__["MASTER"].wideRoundBtnText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, "SEARCH"))), __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_10__["default"], {
    style: {
      width: "100%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, __jsx(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, "NAME"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, "TASKS"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, "CREATED"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, "LAST MODIFIED"))), __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, generateBoardRows())), __jsx(_material_ui_core_TablePagination__WEBPACK_IMPORTED_MODULE_15__["default"], {
    rowsPerPageOptions: [5, 10, 25],
    component: "div",
    count: boards.length,
    rowsPerPage: rowsPerPage,
    page: page,
    onChangePage: handleChangePage,
    onChangeRowsPerPage: handleChangeRowsPerPage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }))), __jsx("button", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _styles_masterStyles__WEBPACK_IMPORTED_MODULE_6__["MASTER"].wideRoundBtn, {
      width: 150,
      position: 'absolute',
      bottom: 30,
      right: 20,
      height: 45
    }),
    onClick: function onClick() {
      return newBoard(contextOrg.id);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, __jsx("div", {
    style: _styles_masterStyles__WEBPACK_IMPORTED_MODULE_6__["MASTER"].wideRoundBtnText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, "NEW BOARD"))));
};

var styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (ManageBoardsHome);

/***/ })

})
//# sourceMappingURL=manageBoards.js.20428dfa7ff3ea62aa8e.hot-update.js.map