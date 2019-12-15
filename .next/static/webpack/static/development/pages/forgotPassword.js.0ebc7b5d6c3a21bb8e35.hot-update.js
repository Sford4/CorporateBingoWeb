webpackHotUpdate("static/development/pages/forgotPassword.js",{

/***/ "./pages/forgotPassword.js":
/*!*********************************!*\
  !*** ./pages/forgotPassword.js ***!
  \*********************************/
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
/* harmony import */ var _styles_masterStyles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/masterStyles */ "./styles/masterStyles.js");




var _jsxFileName = "/Users/spencerford/Documents/DEVyall/PersonalProjects/CorporateBingoWeb/pages/forgotPassword.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;



 // context imports

 // Style imports



var ForgotPassword = function ForgotPassword() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(_contexts_userContext__WEBPACK_IMPORTED_MODULE_8__["UserContext"]),
      user = _useContext.user;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      email = _useState[0],
      setEmail = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      confirmationMessage = _useState2[0],
      setConfirmationMessage = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    if (user._id && localStorage.getItem('bingo_token')) {
      router.push('/joinGame');
    }
  }, [user]);

  var submitEmail =
  /*#__PURE__*/
  function () {
    var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var request, success;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (email) {
                _context.next = 3;
                break;
              }

              alert('Must have a valid email!');
              return _context.abrupt("return");

            case 3:
              _context.next = 5;
              return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()("".concat(_constants_constants__WEBPACK_IMPORTED_MODULE_7__["default"], "/users/forgotPassword"), {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()({
                  email: email
                })
              });

            case 5:
              request = _context.sent;
              _context.next = 8;
              return request.json();

            case 8:
              success = _context.sent;
              console.log({
                success: success
              });

              if (!success.error) {
                _context.next = 13;
                break;
              }

              alert("Yikes... ".concat(success.error));
              return _context.abrupt("return");

            case 13:
              if (success) {
                _context.next = 16;
                break;
              }

              alert('Something went wrong... please try again later');
              return _context.abrupt("return");

            case 16:
              setConfirmationMessage(true);

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function submitEmail() {
      return _ref.apply(this, arguments);
    };
  }();

  if (confirmationMessage) {
    return __jsx("div", {
      style: styles.container,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, __jsx("div", {
      style: _styles_masterStyles__WEBPACK_IMPORTED_MODULE_9__["MASTER"].pageTitle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, "PASSWORD RESET"), __jsx("div", {
      style: styles.message,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, "Your password reset email has been sent, check your inbox!"));
  }

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
    style: _styles_masterStyles__WEBPACK_IMPORTED_MODULE_9__["MASTER"].pageTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "PASSWORD RESET"), __jsx("div", {
    style: styles.message,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "Submit your email address and we'll send you a password reset email."), __jsx("input", {
    style: _styles_masterStyles__WEBPACK_IMPORTED_MODULE_9__["MASTER"].wideRoundInput,
    value: email,
    onChange: function onChange(e) {
      return setEmail(e.target.value);
    },
    placeholder: 'Email',
    type: "email",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }), __jsx("button", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _styles_masterStyles__WEBPACK_IMPORTED_MODULE_9__["MASTER"].wideRoundBtn, {
      marginTop: 20
    }),
    onClick: function onClick() {
      return submitEmail();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx("span", {
    style: _styles_masterStyles__WEBPACK_IMPORTED_MODULE_9__["MASTER"].wideRoundBtnText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, "Submit"))));
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
  },
  message: {
    textAlign: 'center',
    marginTop: 10
  }
};
/* harmony default export */ __webpack_exports__["default"] = (ForgotPassword);

/***/ })

})
//# sourceMappingURL=forgotPassword.js.0ebc7b5d6c3a21bb8e35.hot-update.js.map