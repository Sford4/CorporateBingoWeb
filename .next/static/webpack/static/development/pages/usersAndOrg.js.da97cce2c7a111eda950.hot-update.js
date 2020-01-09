webpackHotUpdate("static/development/pages/usersAndOrg.js",{

/***/ "./components/orgAndUsers/editUser.js":
/*!********************************************!*\
  !*** ./components/orgAndUsers/editUser.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../constants/constants */ "./constants/constants.js");
/* harmony import */ var _styles_masterStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/masterStyles */ "./styles/masterStyles.js");




var _jsxFileName = "/Users/spencerford/Documents/DEVyall/PersonalProjects/CorporateBingoWeb/components/orgAndUsers/editUser.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;


 // context imports
// Style imports



var EditUser = function EditUser(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(props.user.userAlias),
      userAlias = _useState[0],
      setUserName = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(props.user.email),
      email = _useState2[0],
      setEmail = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      password = _useState3[0],
      setPassword = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      confirmPassword = _useState4[0],
      setConfirmPassword = _useState4[1];

  var openWarning = function openWarning(message) {
    alert("Woah there! ".concat(message));
  };

  var validEmail = function validEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  var signup =
  /*#__PURE__*/
  function () {
    var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var request, user;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (userAlias) {
                _context.next = 3;
                break;
              }

              openWarning('Must have a userAlias!');
              return _context.abrupt("return");

            case 3:
              if (!(!email || !validEmail(email))) {
                _context.next = 6;
                break;
              }

              openWarning('Must have a valid email!');
              return _context.abrupt("return");

            case 6:
              if (!(!password || password !== confirmPassword)) {
                _context.next = 9;
                break;
              }

              openWarning('Passwords must match!');
              return _context.abrupt("return");

            case 9:
              _context.prev = 9;
              _context.next = 12;
              return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()("".concat(_constants_constants__WEBPACK_IMPORTED_MODULE_6__["default"], "/users/signup"), {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()({
                  userAlias: userAlias,
                  email: email,
                  password: password,
                  roleLevel: 2,
                  org: props.orgID
                })
              });

            case 12:
              request = _context.sent;
              _context.next = 15;
              return request.json();

            case 15:
              user = _context.sent;

              if (user && user.id) {
                props.openPopup(false, false);
                props.updateUsers('new', user);
              } else {
                alert('There was a problem creating this user...');
              }

              _context.next = 22;
              break;

            case 19:
              _context.prev = 19;
              _context.t0 = _context["catch"](9);
              alert(_context.t0);

            case 22:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[9, 19]]);
    }));

    return function signup() {
      return _ref.apply(this, arguments);
    };
  }();

  var updateUser =
  /*#__PURE__*/
  function () {
    var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
      var request, user;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (userAlias) {
                _context2.next = 3;
                break;
              }

              openWarning('Must have a user name!');
              return _context2.abrupt("return");

            case 3:
              if (!(!email || !validEmail(email))) {
                _context2.next = 6;
                break;
              }

              openWarning('Must have a valid email!');
              return _context2.abrupt("return");

            case 6:
              if (!(password && password !== confirmPassword)) {
                _context2.next = 9;
                break;
              }

              openWarning('Passwords must match!');
              return _context2.abrupt("return");

            case 9:
              console.log('user updating', props.user);
              _context2.prev = 10;
              _context2.next = 13;
              return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()("".concat(_constants_constants__WEBPACK_IMPORTED_MODULE_6__["default"], "/users/update/").concat(props.user.id), {
                method: 'POST',
                // headers: {
                //   'Accept': 'application/json',
                //   'Content-Type': 'application/json',
                //   'Authorization': `Bearer ${localStorage.getItem('bingo_token')}`
                // },
                body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()({
                  id: props.user.id,
                  userAlias: userAlias,
                  email: email,
                  password: password,
                  org: props.org.id,
                  orgName: props.org.orgName,
                  roleLevel: 2
                })
              });

            case 13:
              request = _context2.sent;
              _context2.next = 16;
              return request.json();

            case 16:
              user = _context2.sent;
              console.log('from backend', {
                user: user
              });

              if (user && user.id) {
                props.openPopup(false, false);
                props.updateUsers('edit', user);
              } else {
                alert('There was a problem updating this user...');
              }

              _context2.next = 24;
              break;

            case 21:
              _context2.prev = 21;
              _context2.t0 = _context2["catch"](10);
              alert(_context2.t0);

            case 24:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[10, 21]]);
    }));

    return function updateUser() {
      return _ref2.apply(this, arguments);
    };
  }();

  var deleteUser =
  /*#__PURE__*/
  function () {
    var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(id) {
      var request, response;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!confirm("Are you sure? This will delete ".concat(userAlias, " forever!"))) {
                _context3.next = 14;
                break;
              }

              _context3.prev = 1;
              _context3.next = 4;
              return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()("".concat(_constants_constants__WEBPACK_IMPORTED_MODULE_6__["default"], "/users/delete").concat(props.user.id), {
                method: 'POST' // headers: {
                //   'Accept': 'application/json',
                //   'Content-Type': 'application/json',
                //   'Authorization': `Bearer ${localStorage.getItem('bingo_token')}`
                // },

              });

            case 4:
              request = _context3.sent;
              _context3.next = 7;
              return request.json();

            case 7:
              response = _context3.sent;

              if (response && response.id) {
                props.updateUsers('delete', id);
                props.openPopup(false, false);
              } else {
                alert('There was a problem deleting this user...');
              }

              _context3.next = 14;
              break;

            case 11:
              _context3.prev = 11;
              _context3.t0 = _context3["catch"](1);
              alert(_context3.t0);

            case 14:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[1, 11]]);
    }));

    return function deleteUser(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  return __jsx("div", {
    style: styles.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, __jsx("div", {
    style: styles.subcontainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, __jsx("input", {
    style: _styles_masterStyles__WEBPACK_IMPORTED_MODULE_7__["MASTER"].wideRoundInput,
    value: userAlias,
    onChange: function onChange(e) {
      return setUserName(e.target.value);
    },
    placeholder: 'User Name',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }), __jsx("input", {
    style: _styles_masterStyles__WEBPACK_IMPORTED_MODULE_7__["MASTER"].wideRoundInput,
    value: email,
    onChange: function onChange(e) {
      return setEmail(e.target.value);
    },
    placeholder: 'Email',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }), __jsx("input", {
    style: _styles_masterStyles__WEBPACK_IMPORTED_MODULE_7__["MASTER"].wideRoundInput,
    value: password,
    onChange: function onChange(e) {
      return setPassword(e.target.value);
    },
    type: "password",
    placeholder: 'New Password',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }), __jsx("input", {
    style: _styles_masterStyles__WEBPACK_IMPORTED_MODULE_7__["MASTER"].wideRoundInput,
    value: confirmPassword,
    onChange: function onChange(e) {
      return setConfirmPassword(e.target.value);
    },
    type: "password",
    placeholder: 'Confirm New Password',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }), props.newUser ? __jsx("button", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _styles_masterStyles__WEBPACK_IMPORTED_MODULE_7__["MASTER"].wideRoundBtn, {
      marginTop: 20
    }),
    onClick: function onClick() {
      return signup();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, __jsx("span", {
    style: _styles_masterStyles__WEBPACK_IMPORTED_MODULE_7__["MASTER"].wideRoundBtnText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, "Save")) : __jsx("div", {
    style: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, __jsx("button", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _styles_masterStyles__WEBPACK_IMPORTED_MODULE_7__["MASTER"].wideRoundBtn, {
      backgroundColor: 'red',
      marginTop: 20
    }),
    onClick: function onClick() {
      return deleteUser(props.user.id);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }, __jsx("span", {
    style: _styles_masterStyles__WEBPACK_IMPORTED_MODULE_7__["MASTER"].wideRoundBtnText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, "Delete User")), __jsx("button", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _styles_masterStyles__WEBPACK_IMPORTED_MODULE_7__["MASTER"].wideRoundBtn, {
      marginTop: 20
    }),
    onClick: function onClick() {
      return updateUser();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, __jsx("span", {
    style: _styles_masterStyles__WEBPACK_IMPORTED_MODULE_7__["MASTER"].wideRoundBtnText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }, "Save")))));
};

var styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    paddingBottom: 10,
    minWidth: 300
  },
  subcontainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    maxWidth: 400
  }
};
/* harmony default export */ __webpack_exports__["default"] = (EditUser);

/***/ })

})
//# sourceMappingURL=usersAndOrg.js.da97cce2c7a111eda950.hot-update.js.map