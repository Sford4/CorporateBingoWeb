webpackHotUpdate("static/development/pages/manageBoards.js",{

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/TablePagination/TablePagination.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/TablePagination/TablePagination.js ***!
  \*******************************************************************************/
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
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _InputBase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../InputBase */ "./node_modules/@material-ui/core/esm/InputBase/index.js");
/* harmony import */ var _MenuItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _Select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Select */ "./node_modules/@material-ui/core/esm/Select/index.js");
/* harmony import */ var _TableCell__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../TableCell */ "./node_modules/@material-ui/core/esm/TableCell/index.js");
/* harmony import */ var _Toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _TablePaginationActions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./TablePaginationActions */ "./node_modules/@material-ui/core/esm/TablePagination/TablePaginationActions.js");














var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      color: theme.palette.text.primary,
      fontSize: theme.typography.pxToRem(14),
      // Increase the specificity to override TableCell.
      '&:last-child': {
        padding: 0
      }
    },

    /* Styles applied to the Toolbar component. */
    toolbar: {
      minHeight: 52,
      paddingRight: 2
    },

    /* Styles applied to the spacer element. */
    spacer: {
      flex: '1 1 100%'
    },

    /* Styles applied to the caption Typography components if `variant="caption"`. */
    caption: {
      flexShrink: 0
    },

    /* Styles applied to the Select component root element. */
    selectRoot: {
      // `.selectRoot` should be merged with `.input` in v5.
      marginRight: 32,
      marginLeft: 8
    },

    /* Styles applied to the Select component `select` class. */
    select: {
      paddingLeft: 8,
      paddingRight: 24,
      textAlign: 'right',
      textAlignLast: 'right' // Align <select> on Chrome.

    },

    /* Styles applied to the Select component `icon` class. */
    selectIcon: {
      top: 1
    },

    /* Styles applied to the `InputBase` component. */
    input: {
      color: 'inherit',
      fontSize: 'inherit',
      flexShrink: 0
    },

    /* Styles applied to the MenuItem component. */
    menuItem: {},

    /* Styles applied to the internal `TablePaginationActions` component. */
    actions: {
      flexShrink: 0,
      marginLeft: 20
    }
  };
};

var defaultLabelDisplayedRows = function defaultLabelDisplayedRows(_ref) {
  var from = _ref.from,
      to = _ref.to,
      count = _ref.count;
  return "".concat(from, "-").concat(to === -1 ? count : to, " of ").concat(count);
};

var defaultRowsPerPageOptions = [10, 25, 50, 100];
/**
 * A `TableCell` based component for placing inside `TableFooter` for pagination.
 */

var TablePagination = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function TablePagination(props, ref) {
  var _props$ActionsCompone = props.ActionsComponent,
      ActionsComponent = _props$ActionsCompone === void 0 ? _TablePaginationActions__WEBPACK_IMPORTED_MODULE_13__["default"] : _props$ActionsCompone,
      backIconButtonProps = props.backIconButtonProps,
      classes = props.classes,
      className = props.className,
      colSpanProp = props.colSpan,
      _props$component = props.component,
      Component = _props$component === void 0 ? _TableCell__WEBPACK_IMPORTED_MODULE_10__["default"] : _props$component,
      count = props.count,
      _props$labelDisplayed = props.labelDisplayedRows,
      labelDisplayedRows = _props$labelDisplayed === void 0 ? defaultLabelDisplayedRows : _props$labelDisplayed,
      _props$labelRowsPerPa = props.labelRowsPerPage,
      labelRowsPerPage = _props$labelRowsPerPa === void 0 ? 'Rows per page:' : _props$labelRowsPerPa,
      nextIconButtonProps = props.nextIconButtonProps,
      onChangePage = props.onChangePage,
      onChangeRowsPerPage = props.onChangeRowsPerPage,
      page = props.page,
      rowsPerPage = props.rowsPerPage,
      _props$rowsPerPageOpt = props.rowsPerPageOptions,
      rowsPerPageOptions = _props$rowsPerPageOpt === void 0 ? defaultRowsPerPageOptions : _props$rowsPerPageOpt,
      _props$SelectProps = props.SelectProps,
      SelectProps = _props$SelectProps === void 0 ? {} : _props$SelectProps,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["ActionsComponent", "backIconButtonProps", "classes", "className", "colSpan", "component", "count", "labelDisplayedRows", "labelRowsPerPage", "nextIconButtonProps", "onChangePage", "onChangeRowsPerPage", "page", "rowsPerPage", "rowsPerPageOptions", "SelectProps"]);

  var colSpan;

  if (Component === _TableCell__WEBPACK_IMPORTED_MODULE_10__["default"] || Component === 'td') {
    colSpan = colSpanProp || 1000; // col-span over everything
  }

  var MenuItemComponent = SelectProps.native ? 'option' : _MenuItem__WEBPACK_IMPORTED_MODULE_8__["default"];
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.root, className),
    colSpan: colSpan,
    ref: ref
  }, other), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Toolbar__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: classes.toolbar
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.spacer
  }), rowsPerPageOptions.length > 1 && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Typography__WEBPACK_IMPORTED_MODULE_12__["default"], {
    color: "inherit",
    variant: "body2",
    className: classes.caption
  }, labelRowsPerPage), rowsPerPageOptions.length > 1 && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Select__WEBPACK_IMPORTED_MODULE_9__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    classes: {
      select: classes.select,
      icon: classes.selectIcon
    },
    input: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_InputBase__WEBPACK_IMPORTED_MODULE_7__["default"], {
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.input, classes.selectRoot)
    }),
    value: rowsPerPage,
    onChange: onChangeRowsPerPage
  }, SelectProps), rowsPerPageOptions.map(function (rowsPerPageOption) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(MenuItemComponent, {
      className: classes.menuItem,
      key: rowsPerPageOption,
      value: rowsPerPageOption.value ? rowsPerPageOption.value : rowsPerPageOption
    }, rowsPerPageOption.label ? rowsPerPageOption.label : rowsPerPageOption);
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Typography__WEBPACK_IMPORTED_MODULE_12__["default"], {
    color: "inherit",
    variant: "body2",
    className: classes.caption
  }, labelDisplayedRows({
    from: count === 0 ? 0 : page * rowsPerPage + 1,
    to: Math.min(count, (page + 1) * rowsPerPage),
    count: count,
    page: page
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ActionsComponent, {
    className: classes.actions,
    backIconButtonProps: backIconButtonProps,
    count: count,
    nextIconButtonProps: nextIconButtonProps,
    onChangePage: onChangePage,
    page: page,
    rowsPerPage: rowsPerPage
  })));
});
 true ? TablePagination.propTypes = {
  /**
   * The component used for displaying the actions.
   * Either a string to use a DOM element or a component.
   */
  ActionsComponent: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.elementType,

  /**
   * Props applied to the back arrow [`IconButton`](/api/icon-button/) component.
   */
  backIconButtonProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

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
   * @ignore
   */
  colSpan: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.elementType,

  /**
   * The total number of rows.
   */
  count: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number.isRequired,

  /**
   * Customize the displayed rows label.
   */
  labelDisplayedRows: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * Customize the rows per page label. Invoked with a `{ from, to, count, page }`
   * object.
   */
  labelRowsPerPage: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Props applied to the next arrow [`IconButton`](/api/icon-button/) element.
   */
  nextIconButtonProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * Callback fired when the page is changed.
   *
   * @param {object} event The event source of the callback.
   * @param {number} page The page selected.
   */
  onChangePage: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,

  /**
   * Callback fired when the number of rows per page is changed.
   *
   * @param {object} event The event source of the callback.
   */
  onChangeRowsPerPage: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * The zero-based index of the current page.
   */
  page: Object(_material_ui_utils__WEBPACK_IMPORTED_MODULE_4__["chainPropTypes"])(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number.isRequired, function (props) {
    var count = props.count,
        page = props.page,
        rowsPerPage = props.rowsPerPage;
    var newLastPage = Math.max(0, Math.ceil(count / rowsPerPage) - 1);

    if (page < 0 || page > newLastPage) {
      return new Error('Material-UI: the page prop of a TablePagination is out of range ' + "(0 to ".concat(newLastPage, ", but page is ").concat(page, ")."));
    }

    return null;
  }),

  /**
   * The number of rows per page.
   */
  rowsPerPage: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number.isRequired,

  /**
   * Customizes the options of the rows per page select field. If less than two options are
   * available, no select field will be displayed.
   */
  rowsPerPageOptions: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array,

  /**
   * Props applied to the rows per page [`Select`](/api/select/) element.
   */
  SelectProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__["default"])(styles, {
  name: 'MuiTablePagination'
})(TablePagination));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/TablePagination/TablePaginationActions.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/TablePagination/TablePaginationActions.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _internal_svg_icons_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../internal/svg-icons/KeyboardArrowLeft */ "./node_modules/@material-ui/core/esm/internal/svg-icons/KeyboardArrowLeft.js");
/* harmony import */ var _internal_svg_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../internal/svg-icons/KeyboardArrowRight */ "./node_modules/@material-ui/core/esm/internal/svg-icons/KeyboardArrowRight.js");
/* harmony import */ var _styles_useTheme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/useTheme */ "./node_modules/@material-ui/core/esm/styles/useTheme.js");
/* harmony import */ var _IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");








/**
 * @ignore - internal component.
 */

var _ref = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_internal_svg_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_5__["default"], null);

var _ref2 = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_internal_svg_icons_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_4__["default"], null);

var _ref3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_internal_svg_icons_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_4__["default"], null);

var _ref4 = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_internal_svg_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_5__["default"], null);

var TablePaginationActions = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function TablePaginationActions(props, ref) {
  var backIconButtonProps = props.backIconButtonProps,
      count = props.count,
      nextIconButtonProps = props.nextIconButtonProps,
      onChangePage = props.onChangePage,
      page = props.page,
      rowsPerPage = props.rowsPerPage,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["backIconButtonProps", "count", "nextIconButtonProps", "onChangePage", "page", "rowsPerPage"]);

  var theme = Object(_styles_useTheme__WEBPACK_IMPORTED_MODULE_6__["default"])();

  var handleBackButtonClick = function handleBackButtonClick(event) {
    onChangePage(event, page - 1);
  };

  var handleNextButtonClick = function handleNextButtonClick(event) {
    onChangePage(event, page + 1);
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: ref
  }, other), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_IconButton__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    onClick: handleBackButtonClick,
    disabled: page === 0,
    color: "inherit"
  }, backIconButtonProps), theme.direction === 'rtl' ? _ref : _ref2), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_IconButton__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    onClick: handleNextButtonClick,
    disabled: page >= Math.ceil(count / rowsPerPage) - 1,
    color: "inherit"
  }, nextIconButtonProps), theme.direction === 'rtl' ? _ref3 : _ref4));
});
 true ? TablePaginationActions.propTypes = {
  /**
   * Props applied to the back arrow [`IconButton`](/api/icon-button/) element.
   */
  backIconButtonProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * The total number of rows.
   */
  count: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number.isRequired,

  /**
   * Props applied to the next arrow [`IconButton`](/api/icon-button/) element.
   */
  nextIconButtonProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * Callback fired when the page is changed.
   *
   * @param {object} event The event source of the callback.
   * @param {number} page The page selected.
   */
  onChangePage: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,

  /**
   * The zero-based index of the current page.
   */
  page: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number.isRequired,

  /**
   * The number of rows per page.
   */
  rowsPerPage: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number.isRequired
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (TablePaginationActions);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/TablePagination/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/TablePagination/index.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TablePagination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TablePagination */ "./node_modules/@material-ui/core/esm/TablePagination/TablePagination.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _TablePagination__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Toolbar/Toolbar.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Toolbar/Toolbar.js ***!
  \***************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");







var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    },

    /* Styles applied to the root element if `disableGutters={false}`. */
    gutters: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    }, theme.breakpoints.up('sm'), {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3)
    }),

    /* Styles applied to the root element if `variant="regular"`. */
    regular: theme.mixins.toolbar,

    /* Styles applied to the root element if `variant="dense"`. */
    dense: {
      minHeight: 48
    }
  };
};
var Toolbar = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function Toolbar(props, ref) {
  var classes = props.classes,
      classNameProp = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      _props$disableGutters = props.disableGutters,
      disableGutters = _props$disableGutters === void 0 ? false : _props$disableGutters,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'regular' : _props$variant,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["classes", "className", "component", "disableGutters", "variant"]);

  var className = Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.root, classes[variant], classNameProp, !disableGutters && classes.gutters);
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: className,
    ref: ref
  }, other));
});
 true ? Toolbar.propTypes = {
  /**
   * Toolbar children, usually a mixture of `IconButton`, `Button` and `Typography`.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.elementType,

  /**
   * If `true`, disables gutter padding.
   */
  disableGutters: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * The variant to use.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(['regular', 'dense'])
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__["default"])(styles, {
  name: 'MuiToolbar'
})(Toolbar));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Toolbar/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Toolbar/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Toolbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/Toolbar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Toolbar__WEBPACK_IMPORTED_MODULE_0__["default"]; });



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
      return boards.map(function (board, index) {
        return __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
          key: board.id,
          href: "manageBoards/[boardID]",
          as: "manageBoards/".concat(board.id),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          },
          __self: this
        }, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_14__["default"], {
          style: {
            cursor: 'pointer'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          },
          __self: this
        }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_12__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          },
          __self: this
        }, board.title), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_12__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          },
          __self: this
        }, board.numSquares), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_12__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          },
          __self: this
        }, moment__WEBPACK_IMPORTED_MODULE_5___default()(board.created).format("MMM Do, YYYY")), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_12__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87
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
        lineNumber: 93
      },
      __self: this
    }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_12__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, "No boards yet... click NEW BOARD to make one!"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_12__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_12__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_12__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }));
  };

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, __jsx("div", {
    style: styles.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, __jsx("div", {
    style: _styles_masterStyles__WEBPACK_IMPORTED_MODULE_6__["MASTER"].pageTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, "MANAGE BOARDS"), __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, __jsx("div", {
    style: {
      padding: '1% 3%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx("div", {
    style: {
      display: 'flex'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
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
      lineNumber: 103
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
      lineNumber: 109
    },
    __self: this
  }, __jsx("div", {
    style: _styles_masterStyles__WEBPACK_IMPORTED_MODULE_6__["MASTER"].wideRoundBtnText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, "SEARCH"))), __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_10__["default"], {
    style: {
      width: "100%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, __jsx(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, "NAME"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, "TASKS"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, "CREATED"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, "LAST MODIFIED"))), __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, generateBoardRows())), __jsx(_material_ui_core_TablePagination__WEBPACK_IMPORTED_MODULE_15__["default"], {
    rowsPerPageOptions: [5, 10, 25],
    component: "div",
    count: rows.length,
    rowsPerPage: rowsPerPage,
    page: page,
    onChangePage: handleChangePage,
    onChangeRowsPerPage: handleChangeRowsPerPage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
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
      lineNumber: 140
    },
    __self: this
  }, __jsx("div", {
    style: _styles_masterStyles__WEBPACK_IMPORTED_MODULE_6__["MASTER"].wideRoundBtnText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
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
//# sourceMappingURL=manageBoards.js.f0345bdc5e144334e697.hot-update.js.map