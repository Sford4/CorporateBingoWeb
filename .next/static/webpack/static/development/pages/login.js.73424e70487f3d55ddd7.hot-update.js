webpackHotUpdate("static/development/pages/login.js",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constants/constants */ "./constants/constants.js");
/* harmony import */ var _contexts_userContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../contexts/userContext */ "./contexts/userContext.js");
/* harmony import */ var _contexts_orgContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../contexts/orgContext */ "./contexts/orgContext.js");
/* harmony import */ var _styles_masterStyles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/masterStyles */ "./styles/masterStyles.js");




var _jsxFileName = "/Users/spencerford/Documents/DEVyall/PersonalProjects/CorporateBingoWeb/pages/login.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;



 // context imports


 // Style imports



var Login = function Login() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(_contexts_userContext__WEBPACK_IMPORTED_MODULE_8__["UserContext"]),
      user = _useContext.user,
      storeUser = _useContext.storeUser;

  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(_contexts_orgContext__WEBPACK_IMPORTED_MODULE_9__["OrgContext"]),
      contextOrg = _useContext2.contextOrg,
      getOrg = _useContext2.getOrg;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      email = _useState[0],
      setEmail = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      password = _useState2[0],
      setPassword = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    if (user._id && localStorage.getItem('bingo_token')) {
      router.push('/joinGame');
    }
  }, [user]);

  var login =
  /*#__PURE__*/
  function () {
    var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var request, _user;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(!email || !password)) {
                _context.next = 3;
                break;
              }

              alert('Must have both email and password!');
              return _context.abrupt("return");

            case 3:
              _context.prev = 3;
              _context.next = 6;
              return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()("".concat(_constants_constants__WEBPACK_IMPORTED_MODULE_7__["default"], "/users/login"), {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()({
                  email: email,
                  password: password
                })
              });

            case 6:
              request = _context.sent;
              _context.next = 9;
              return request.json();

            case 9:
              _user = _context.sent;

              if (_user.token) {
                _context.next = 13;
                break;
              }

              alert('Something went wrong... please try again later');
              return _context.abrupt("return");

            case 13:
              storeUser(_user);
              console.log({
                user: _user
              });

              if (_user.role.org && !contextOrg._id) {
                getOrg(_user.role.org);
              }

              router.push('/joinGame');
              _context.next = 22;
              break;

            case 19:
              _context.prev = 19;
              _context.t0 = _context["catch"](3);
              alert(_context.t0);

            case 22:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[3, 19]]);
    }));

    return function login() {
      return _ref.apply(this, arguments);
    };
  }();

  var goToSignup = function goToSignup() {
    router.push('/signup');
  };

  var goToForgotPassword = function goToForgotPassword() {
    router.push('/forgotPassword');
  };

  return __jsx("div", {
    style: styles.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx("div", {
    style: styles.subcontainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx("div", {
    style: _styles_masterStyles__WEBPACK_IMPORTED_MODULE_10__["MASTER"].pageTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "LOGIN"), __jsx("input", {
    style: _styles_masterStyles__WEBPACK_IMPORTED_MODULE_10__["MASTER"].wideRoundInput,
    value: email,
    onChange: function onChange(e) {
      return setEmail(e.target.value);
    },
    placeholder: 'Email',
    type: "email",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }), __jsx("input", {
    style: _styles_masterStyles__WEBPACK_IMPORTED_MODULE_10__["MASTER"].wideRoundInput,
    value: password,
    onChange: function onChange(e) {
      return setPassword(e.target.value);
    },
    placeholder: 'Password',
    type: "password",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }), __jsx("button", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _styles_masterStyles__WEBPACK_IMPORTED_MODULE_10__["MASTER"].wideRoundBtn, {
      marginTop: 20
    }),
    onClick: function onClick() {
      return login();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx("span", {
    style: _styles_masterStyles__WEBPACK_IMPORTED_MODULE_10__["MASTER"].wideRoundBtnText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "Login")), __jsx("button", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _styles_masterStyles__WEBPACK_IMPORTED_MODULE_10__["MASTER"].wideRoundBtn, {
      marginTop: 20
    }),
    onClick: function onClick() {
      return goToSignup();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, __jsx("span", {
    style: _styles_masterStyles__WEBPACK_IMPORTED_MODULE_10__["MASTER"].wideRoundBtnText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, "No account yet? Signup!")), __jsx("button", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _styles_masterStyles__WEBPACK_IMPORTED_MODULE_10__["MASTER"].wideRoundBtn, {
      marginTop: 20,
      backgroundColor: 'lightgray'
    }),
    onClick: function onClick() {
      return goToForgotPassword();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, __jsx("span", {
    style: _styles_masterStyles__WEBPACK_IMPORTED_MODULE_10__["MASTER"].wideRoundBtnText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, "Forgot my password"))));
};

var styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    paddingTop: 40
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
/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ })

})
//# sourceMappingURL=login.js.73424e70487f3d55ddd7.hot-update.js.map