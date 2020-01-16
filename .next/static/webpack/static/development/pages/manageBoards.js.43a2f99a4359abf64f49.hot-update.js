webpackHotUpdate("static/development/pages/manageBoards.js",{

/***/ "./node_modules/@material-ui/core/esm/TableSortLabel/TableSortLabel.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/TableSortLabel/TableSortLabel.js ***!
  \*****************************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _internal_svg_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../internal/svg-icons/ArrowDownward */ "./node_modules/@material-ui/core/esm/internal/svg-icons/ArrowDownward.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _ButtonBase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ButtonBase */ "./node_modules/@material-ui/core/esm/ButtonBase/index.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@material-ui/core/esm/utils/capitalize.js");









var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      cursor: 'pointer',
      display: 'inline-flex',
      justifyContent: 'flex-start',
      flexDirection: 'inherit',
      alignItems: 'center',
      '&:focus': {
        color: theme.palette.text.secondary
      },
      '&:hover': {
        color: theme.palette.text.secondary,
        '& $icon': {
          opacity: 1
        }
      },
      '&$active': {
        color: theme.palette.text.primary,
        // && instead of & is a workaround for https://github.com/cssinjs/jss/issues/1045
        '&& $icon': {
          opacity: 1,
          color: theme.palette.text.secondary
        }
      }
    },

    /* Pseudo-class applied to the root element if `active={true}`. */
    active: {},

    /* Styles applied to the icon component. */
    icon: {
      marginRight: 4,
      marginLeft: 4,
      opacity: 0,
      transition: theme.transitions.create(['opacity', 'transform'], {
        duration: theme.transitions.duration.shorter
      }),
      userSelect: 'none'
    },

    /* Styles applied to the icon component if `direction="desc"`. */
    iconDirectionDesc: {
      transform: 'rotate(0deg)'
    },

    /* Styles applied to the icon component if `direction="asc"`. */
    iconDirectionAsc: {
      transform: 'rotate(180deg)'
    }
  };
};
/**
 * A button based label for placing inside `TableCell` for column sorting.
 */

var TableSortLabel = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function TableSortLabel(props, ref) {
  var _props$active = props.active,
      active = _props$active === void 0 ? false : _props$active,
      children = props.children,
      classes = props.classes,
      className = props.className,
      _props$direction = props.direction,
      direction = _props$direction === void 0 ? 'desc' : _props$direction,
      _props$hideSortIcon = props.hideSortIcon,
      hideSortIcon = _props$hideSortIcon === void 0 ? false : _props$hideSortIcon,
      _props$IconComponent = props.IconComponent,
      IconComponent = _props$IconComponent === void 0 ? _internal_svg_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_5__["default"] : _props$IconComponent,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["active", "children", "classes", "className", "direction", "hideSortIcon", "IconComponent"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ButtonBase__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className, active && classes.active),
    component: "span",
    disableRipple: true,
    ref: ref
  }, other), children, hideSortIcon && !active ? null : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(IconComponent, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.icon, classes["iconDirection".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_8__["default"])(direction))])
  }));
});
 true ? TableSortLabel.propTypes = {
  /**
   * If `true`, the label will have the active styling (should be true for the sorted column).
   */
  active: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Label contents, the arrow will be appended automatically.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The current sort direction.
   */
  direction: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['asc', 'desc']),

  /**
   * Hide sort icon when active is false.
   */
  hideSortIcon: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Sort icon to use.
   */
  IconComponent: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.elementType
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__["default"])(styles, {
  name: 'MuiTableSortLabel'
})(TableSortLabel));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/TableSortLabel/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/TableSortLabel/index.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TableSortLabel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TableSortLabel */ "./node_modules/@material-ui/core/esm/TableSortLabel/TableSortLabel.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _TableSortLabel__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/internal/svg-icons/ArrowDownward.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/internal/svg-icons/ArrowDownward.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _createSvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createSvgIcon */ "./node_modules/@material-ui/core/esm/internal/svg-icons/createSvgIcon.js");


/**
 * @ignore - internal component.
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__["default"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"
}), 'ArrowDownward'));

/***/ }),

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
/* harmony import */ var _material_ui_core_TableSortLabel__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/TableSortLabel */ "./node_modules/@material-ui/core/esm/TableSortLabel/index.js");
/* harmony import */ var _contexts_orgContext__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../contexts/orgContext */ "./contexts/orgContext.js");
/* harmony import */ var _contexts_manageBoardsContext__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../contexts/manageBoardsContext */ "./contexts/manageBoardsContext.js");
/* harmony import */ var _contexts_userContext__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../contexts/userContext */ "./contexts/userContext.js");
/* harmony import */ var _node_modules_next_dist_next_server_lib_utils__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../node_modules/next/dist/next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");
/* harmony import */ var _node_modules_next_dist_next_server_lib_utils__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_next_server_lib_utils__WEBPACK_IMPORTED_MODULE_20__);



var _jsxFileName = "/Users/spencerford/Documents/DEVyall/PersonalProjects/CorporateBingoWeb/pages/manageBoards/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;


 // context imports
// Style imports

 // component imports


 // Material UI








 // context imports






var ManageBoardsHome = function ManageBoardsHome(props) {
  var headCells = [{
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'NAME'
  }, {
    id: 'tasks',
    numeric: true,
    disablePadding: false,
    label: 'TASKS'
  }, {
    id: 'created',
    numeric: false,
    disablePadding: false,
    label: 'CREATED'
  }, {
    id: 'modified',
    numeric: true,
    disablePadding: false,
    label: 'LAST MODIFIED'
  }];
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_contexts_orgContext__WEBPACK_IMPORTED_MODULE_17__["OrgContext"]),
      contextOrg = _useContext.contextOrg,
      getOrg = _useContext.getOrg;

  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_contexts_manageBoardsContext__WEBPACK_IMPORTED_MODULE_18__["ManageBoardsContext"]),
      newBoard = _useContext2.newBoard;

  var _useContext3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_contexts_userContext__WEBPACK_IMPORTED_MODULE_19__["UserContext"]),
      user = _useContext3.user,
      storeUser = _useContext3.storeUser,
      logout = _useContext3.logout;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(contextOrg.boards || []),
      boards = _useState[0],
      setBoards = _useState[1]; // table state


  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState('asc'),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState, 2),
      order = _React$useState2[0],
      setOrder = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState('name'),
      _React$useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState3, 2),
      orderBy = _React$useState4[0],
      setOrderBy = _React$useState4[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(boards),
      rows = _useState2[0],
      setRows = _useState2[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(0),
      _React$useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState5, 2),
      page = _React$useState6[0],
      setPage = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(5),
      _React$useState8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState7, 2),
      rowsPerPage = _React$useState8[0],
      setRowsPerPage = _React$useState8[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      searchText = _useState3[0],
      setSearchText = _useState3[1];

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

  function desc(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }

    if (b[orderBy] > a[orderBy]) {
      return 1;
    }

    return 0;
  }

  function stableSort(array, cmp) {
    var stabilizedThis = array.map(function (el, index) {
      return [el, index];
    });
    stabilizedThis.sort(function (a, b) {
      var order = cmp(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map(function (el) {
      return el[0];
    });
  }

  function getSorting(order, orderBy) {
    return order === 'desc' ? function (a, b) {
      return desc(a, b, orderBy);
    } : function (a, b) {
      return -desc(a, b, orderBy);
    };
  }

  var handleRequestSort = function handleRequestSort(event, property) {
    var isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  var generateBoardRows = function generateBoardRows() {
    if (rows.length) {
      return rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(function (board, index) {
        return __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
          key: board.id,
          href: "manageBoards/[boardID]",
          as: "manageBoards/".concat(board.id),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 124
          },
          __self: this
        }, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_14__["default"], {
          style: {
            cursor: 'pointer'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 125
          },
          __self: this
        }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_12__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 126
          },
          __self: this
        }, board.title), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_12__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 127
          },
          __self: this
        }, board.numSquares), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_12__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 128
          },
          __self: this
        }, moment__WEBPACK_IMPORTED_MODULE_5___default()(board.created).format("MMM Do, YYYY")), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_12__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 129
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
        lineNumber: 135
      },
      __self: this
    }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_12__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
      },
      __self: this
    }, "No boards yet... click NEW BOARD to make one!"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_12__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
      },
      __self: this
    }), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_12__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
      },
      __self: this
    }), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_12__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
      },
      __self: this
    }));
  };

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, __jsx("div", {
    style: styles.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, __jsx("div", {
    style: _styles_masterStyles__WEBPACK_IMPORTED_MODULE_6__["MASTER"].pageTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, "MANAGE BOARDS"), __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, __jsx("div", {
    style: {
      padding: '1% 3%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, __jsx("div", {
    style: {
      display: 'flex'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
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
      lineNumber: 145
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
      lineNumber: 151
    },
    __self: this
  }, __jsx("div", {
    style: _styles_masterStyles__WEBPACK_IMPORTED_MODULE_6__["MASTER"].wideRoundBtnText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, "SEARCH"))), __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_10__["default"], {
    style: {
      width: "100%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, __jsx(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, headCells.map(function (headCell) {
    return __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_12__["default"], {
      key: headCell.id,
      align: headCell.numeric ? 'right' : 'left',
      padding: headCell.disablePadding ? 'none' : 'default',
      sortDirection: orderBy === headCell.id ? order : false,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162
      },
      __self: this
    }, __jsx(_material_ui_core_TableSortLabel__WEBPACK_IMPORTED_MODULE_16__["default"], {
      active: orderBy === headCell.id,
      direction: orderBy === headCell.id ? order : 'asc',
      onClick: function onClick(e) {
        return handleRequestSort(e, headCell.id);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168
      },
      __self: this
    }, headCell.label, orderBy === headCell.id ? __jsx("span", {
      className: classes.visuallyHidden,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175
      },
      __self: this
    }, order === 'desc' ? 'sorted descending' : 'sorted ascending') : null));
  }))), __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }, generateBoardRows())), __jsx(_material_ui_core_TablePagination__WEBPACK_IMPORTED_MODULE_15__["default"], {
    rowsPerPageOptions: [5, 10, 20, 40, 60],
    component: "div",
    count: rows.length,
    rowsPerPage: rowsPerPage,
    page: page,
    onChangePage: handleChangePage,
    onChangeRowsPerPage: handleChangeRowsPerPage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
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
      lineNumber: 199
    },
    __self: this
  }, __jsx("div", {
    style: _styles_masterStyles__WEBPACK_IMPORTED_MODULE_6__["MASTER"].wideRoundBtnText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
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
//# sourceMappingURL=manageBoards.js.43a2f99a4359abf64f49.hot-update.js.map