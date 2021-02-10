(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./src/components/core/DefaultTextField.js":
/*!*************************************************!*\
  !*** ./src/components/core/DefaultTextField.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _utils_validator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/validator */ "./src/utils/validator.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var dateformat__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! dateformat */ "./node_modules/dateformat/lib/dateformat.js");
/* harmony import */ var dateformat__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(dateformat__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/string */ "./src/utils/string.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _utils_componentValueUtils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils/componentValueUtils */ "./src/components/core/utils/componentValueUtils.js");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }









/**
 * Default Text Field
 *
 * Properties
 *
 * owner - owner of this components
 * name - name of select on web-interface
 * paramName - key for saving in store
 * value - value of select field
 * dateFormat - pattern for date
 *
 */

var typeRegexp = {
  alphabet: /^[a-zA-Z]+$/,
  phone: /^\d{0,12}$/,
  numeric: /^\d+$/
};

var DefaultTextField = /*#__PURE__*/function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(DefaultTextField, _React$Component);

  var _super = _createSuper(DefaultTextField);

  function DefaultTextField(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, DefaultTextField);

    _this = _super.call(this, props);
    _this.state = {
      value: "",
      saveValue: _this.props.saveValue !== false
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(DefaultTextField, [{
    key: "UNSAFE_componentWillMount",
    value: function UNSAFE_componentWillMount() {
      this.setValue(Object(_utils_componentValueUtils__WEBPACK_IMPORTED_MODULE_12__["getValueInProps"])(this.props, this.props.paramName, ""));
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      if (nextProps.entity && Object(lodash__WEBPACK_IMPORTED_MODULE_11__["has"])(nextProps.entity, this.props.paramName)) {
        this.setValue(Object(lodash__WEBPACK_IMPORTED_MODULE_11__["get"])(nextProps.entity, this.props.paramName, ""));
      }

      if (Object(_utils_componentValueUtils__WEBPACK_IMPORTED_MODULE_12__["isValueNull"])(nextProps.formParams, this.props.paramName)) this.setValue(null);

      if (this.props.value !== nextProps.value) {
        this.setValue(nextProps.value);
      }
    }
  }, {
    key: "handleChange",
    value: function handleChange(event) {
      this.setValue(event.target.value);
    }
  }, {
    key: "setValue",
    value: function setValue() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      if (Object(lodash__WEBPACK_IMPORTED_MODULE_11__["isEqual"])(value, this.state.value)) return;
      var _this$props$type = this.props.type,
          type = _this$props$type === void 0 ? "text" : _this$props$type;
      if (type !== "text" && value && typeRegexp[type] && !typeRegexp[type].test(value)) return;
      this.setState({
        value: !!this.props.dateFormat && !!value ? dateformat__WEBPACK_IMPORTED_MODULE_9___default()(value, this.props.dateFormat) : value
      });

      if (!!this.props.onChange) {
        this.props.onChange(value);
      }

      if (!!this.state.saveValue) {
        Object(lodash__WEBPACK_IMPORTED_MODULE_11__["set"])(this.props.formParams, this.props.paramName, value);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          name = _this$props.name,
          _this$props$errorText = _this$props.errorText,
          errorText = _this$props$errorText === void 0 ? this.validateText() : _this$props$errorText,
          helperText = _this$props.helperText,
          _this$props$margin = _this$props.margin,
          margin = _this$props$margin === void 0 ? "normal" : _this$props$margin,
          type = _this$props.type,
          style = _this$props.style,
          inputProps = _this$props.inputProps,
          required = _this$props.required,
          paramName = _this$props.paramName,
          defaultValue = _this$props.defaultValue;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__["default"], {
        id: "TextField_" + Object(_utils_string__WEBPACK_IMPORTED_MODULE_10__["cleanSpaces"])(name),
        style: style,
        required: required,
        autoComplete: paramName === "password" ? "new-password" : 'off',
        error: !!errorText,
        margin: margin,
        helperText: errorText ? errorText : helperText,
        value: this.state.value === 0 ? 0 : this.state.value ? this.state.value : defaultValue || '',
        label: name,
        type: type,
        onChange: this.handleChange.bind(this),
        disabled: this.props.isDisable,
        inputProps: inputProps
      });
    }
  }, {
    key: "validateText",
    value: function validateText() {
      if (this.props.validationEnabled !== false) {
        return Object(_utils_validator__WEBPACK_IMPORTED_MODULE_7__["validate"])(this.props.paramName, this.props.error).message;
      } else {
        return null;
      }
    }
  }]);

  return DefaultTextField;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    error: state.owner[ownProps.owner].error,
    formParams: state.owner[ownProps.owner].formParams,
    entity: state.owner[ownProps.owner].entity
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps)(DefaultTextField));

/***/ }),

/***/ "./src/components/core/DesignForm.js":
/*!*******************************************!*\
  !*** ./src/components/core/DesignForm.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Form */ "./src/components/core/Form.js");
/* harmony import */ var _utils_validator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/validator */ "./src/utils/validator.js");
/* harmony import */ var _Overlay__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Overlay */ "./src/components/core/Overlay.js");
/* harmony import */ var react_validation_framework__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-validation-framework */ "./node_modules/react-validation-framework/index.js");
/* harmony import */ var react_validation_framework__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_validation_framework__WEBPACK_IMPORTED_MODULE_11__);






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }









var DesignForm = /*#__PURE__*/function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(DesignForm, _React$Component);

  var _super = _createSuper(DesignForm);

  function DesignForm(props) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, DesignForm);

    return _super.call(this, props);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(DesignForm, [{
    key: "UNSAFE_componentWillMount",
    value: function UNSAFE_componentWillMount() {
      if (this.props.onRef) {
        this.props.onRef(this);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.props.onRef) {
        this.props.onRef(undefined);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Form__WEBPACK_IMPORTED_MODULE_8__["default"], {
        header: this.props.name,
        owner: this.props.owner,
        entity: this.props.entity,
        elementForm: this.props.elementForm,
        save: this.props.save,
        cancel: this.props.cancel,
        paramName: this.props.paramName,
        listPojection: this.props.listProjection,
        onRef: function onRef(ref) {
          return _this.form = ref;
        },
        render: function render() {
          return _this.renderMethod();
        },
        saveSuccess: this.props.saveSuccess
      });
    }
  }, {
    key: "renderMethod",
    value: function renderMethod() {
      return !!this.form ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, this.props.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, Object(_utils_validator__WEBPACK_IMPORTED_MODULE_9__["hasGlobalError"])(this.props.error) ? this.showGlobalError() : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, this.props.withoutEntityCheck || this.props.getEntitySuccess ? this.props.elementForm : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Overlay__WEBPACK_IMPORTED_MODULE_10__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("hr", null), this.renderButton()) : null;
    }
  }, {
    key: "onSave",
    value: function onSave() {
      var isValidByGroup = react_validation_framework__WEBPACK_IMPORTED_MODULE_11__["fieldValidatorCore"].checkGroup(this.props.validationGroup || this.props.owner).isValid;

      if (!isValidByGroup) {
        return;
      }

      this.form.save();
    }
  }, {
    key: "renderButton",
    value: function renderButton() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "flex-items-right",
        style: {
          marginBottom: 4
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
        variant: "text",
        onClick: this.form.cancel.bind(this.form)
      }, "Cancel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        style: {
          marginLeft: 12
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
        disabled: !!this.props.saveDisabled || !!this.props.waitUpd,
        color: "primary",
        variant: "contained",
        onClick: this.onSave.bind(this)
      }, "Save"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        style: {
          marginLeft: 12
        }
      }), this.props.activateButton);
    }
  }]);

  return DesignForm;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    getEntitySuccess: !!state.owner[ownProps.owner] && !!state.owner[ownProps.owner].state ? state.owner[ownProps.owner].state.getEntitySuccess : false,
    wait: !!state.owner[ownProps.owner] ? state.owner[ownProps.owner].wait : false,
    waitUpd: !!state.owner[ownProps.owner] ? state.owner[ownProps.owner].waitUpd : false
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, null)(DesignForm));

/***/ }),

/***/ "./src/components/core/ErrorMessage.js":
/*!*********************************************!*\
  !*** ./src/components/core/ErrorMessage.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_icons_ErrorOutlined__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/ErrorOutlined */ "./node_modules/@material-ui/icons/ErrorOutlined.js");
/* harmony import */ var _material_ui_icons_ErrorOutlined__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ErrorOutlined__WEBPACK_IMPORTED_MODULE_2__);




var ErrorMessage = function ErrorMessage(_ref) {
  var error = _ref.error;
  return error ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1__["default"], {
    zDepth: 1,
    rounded: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "panel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "panel-heading text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ErrorOutlined__WEBPACK_IMPORTED_MODULE_2___default.a, {
    color: "#F44336"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    style: {
      verticalAlign: 4,
      marginLeft: 10
    }
  }, error))))) : null;
};

/* harmony default export */ __webpack_exports__["default"] = (ErrorMessage);

/***/ }),

/***/ "./src/components/core/Form.js":
/*!*************************************!*\
  !*** ./src/components/core/Form.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _utils_validator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/validator */ "./src/utils/validator.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ErrorMessage */ "./src/components/core/ErrorMessage.js");
/* harmony import */ var _Overlay__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Overlay */ "./src/components/core/Overlay.js");
/* harmony import */ var _actions_indexOwner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../actions/indexOwner */ "./src/actions/indexOwner.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_13__);






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }











var Form = /*#__PURE__*/function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(Form, _React$Component);

  var _super = _createSuper(Form);

  function Form(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Form);

    _this = _super.call(this, props);
    _this.state = {
      ready: false
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Form, [{
    key: "UNSAFE_componentWillMount",
    value: function UNSAFE_componentWillMount() {
      if (this.props.onRef) {
        this.props.onRef(this);
      }
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      if (!Object(lodash__WEBPACK_IMPORTED_MODULE_13__["isEqual"])(nextProps.entity, this.props.entity)) {
        this.setState({
          ready: true
        });
      }

      if (nextProps.saveSuccessId && !Object(lodash__WEBPACK_IMPORTED_MODULE_13__["isEqual"])(nextProps.saveSuccessId, this.props.saveSuccessId)) {
        //entity was saved success
        this.saveSuccess(nextProps.saveSuccessId);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.props.onRef) {
        this.props.onRef(undefined);
      }

      Object(_actions_indexOwner__WEBPACK_IMPORTED_MODULE_12__["clearFormParams"])(this.props.owner);
    }
  }, {
    key: "showGlobalError",
    value: function showGlobalError() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_10__["default"], {
        error: this.props.error
      });
    }
  }, {
    key: "render",
    value: function render() {
      return !!this.props.render ? this.props.render() : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, Object(_utils_validator__WEBPACK_IMPORTED_MODULE_9__["hasGlobalError"])(this.props.error) ? this.showGlobalError() : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, this.props.getEntitySuccess ? this.props.elementForm : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Overlay__WEBPACK_IMPORTED_MODULE_11__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, this.renderButton()));
    }
  }, {
    key: "renderButton",
    value: function renderButton() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "text-right",
        style: {
          marginBottom: 4
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
        label: "Save",
        primary: true,
        disabled: this.props.saveDisabled || this.props.waitUpd,
        onClick: this.save.bind(this)
      }), '  ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
        label: "Cancel",
        onClick: this.cancel.bind(this)
      }));
    }
  }, {
    key: "save",
    value: function save() {
      if (!!this.props.save) {
        this.props.save();
      } else {
        this.props.saveEntity(this.props.entity, this.props.formParams, this.props.owner);
      }
    }
  }, {
    key: "cancel",
    value: function cancel() {
      if (!!this.props.cancel) {
        this.props.cancel();
      } else {
        this.props.clearState(this.props.owner);
      }
    }
  }, {
    key: "saveSuccess",
    value: function saveSuccess(id) {
      if (!!this.props.saveSuccess) {
        this.props.saveSuccess(id);
      } else {
        var props = {};
        props['defaultPropertyList'] = this.props.defaultProperty;
        var paramName = !!this.props.paramName ? this.props.paramName : this.props.entity;
        this.props.getEntityListWithPage(this.props.entity, this.props.listPojection || 'list', this.props.owner, paramName, props, this.props.isController);
        this.cancel();
      }
    }
  }]);

  return Form;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    error: !!state.owner[ownProps.owner] ? state.owner[ownProps.owner].error : null,
    formParams: !!state.owner[ownProps.owner] ? state.owner[ownProps.owner].formParams : {},
    saveSuccessId: !!state.owner[ownProps.owner] ? state.owner[ownProps.owner].saveSuccessId : null,
    defaultProperty: state.owner[ownProps.owner].state.defaultPropertyList,
    getEntitySuccess: !!state.owner[ownProps.owner] && !!state.owner[ownProps.owner].state ? state.owner[ownProps.owner].state.getEntitySuccess : false,
    wait: !!state.owner[ownProps.owner] ? state.owner[ownProps.owner].wait : false,
    waitUpd: !!state.owner[ownProps.owner] ? state.owner[ownProps.owner].waitUpd : false
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getEntityListWithPage: Object(redux__WEBPACK_IMPORTED_MODULE_7__["bindActionCreators"])(_actions_indexOwner__WEBPACK_IMPORTED_MODULE_12__["getEntityListWithPage"], dispatch),
    clearFormParams: Object(redux__WEBPACK_IMPORTED_MODULE_7__["bindActionCreators"])(_actions_indexOwner__WEBPACK_IMPORTED_MODULE_12__["clearFormParams"], dispatch),
    clearState: Object(redux__WEBPACK_IMPORTED_MODULE_7__["bindActionCreators"])(_actions_indexOwner__WEBPACK_IMPORTED_MODULE_12__["clearState"], dispatch),
    saveEntity: Object(redux__WEBPACK_IMPORTED_MODULE_7__["bindActionCreators"])(_actions_indexOwner__WEBPACK_IMPORTED_MODULE_12__["saveEntity"], dispatch)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, mapDispatchToProps)(Form));

/***/ }),

/***/ "./src/components/core/Widget.js":
/*!***************************************!*\
  !*** ./src/components/core/Widget.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ErrorMessage */ "./src/components/core/ErrorMessage.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");




var Widget = function Widget(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? "widget" : _ref$className,
      style = _ref.style,
      header = _ref.header,
      content = _ref.content,
      error = _ref.error;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: className,
    style: style
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "h1-head"
  }, header), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "widget-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_1__["default"], {
    error: error
  }), content));
};

/* harmony default export */ __webpack_exports__["default"] = (Widget);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb3JlL0RlZmF1bHRUZXh0RmllbGQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29yZS9EZXNpZ25Gb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvcmUvRXJyb3JNZXNzYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvcmUvRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb3JlL1dpZGdldC5qcyJdLCJuYW1lcyI6WyJ0eXBlUmVnZXhwIiwiYWxwaGFiZXQiLCJwaG9uZSIsIm51bWVyaWMiLCJEZWZhdWx0VGV4dEZpZWxkIiwicHJvcHMiLCJzdGF0ZSIsInZhbHVlIiwic2F2ZVZhbHVlIiwic2V0VmFsdWUiLCJnZXRWYWx1ZUluUHJvcHMiLCJwYXJhbU5hbWUiLCJuZXh0UHJvcHMiLCJlbnRpdHkiLCJoYXMiLCJnZXQiLCJpc1ZhbHVlTnVsbCIsImZvcm1QYXJhbXMiLCJldmVudCIsInRhcmdldCIsImlzRXF1YWwiLCJ0eXBlIiwidGVzdCIsInNldFN0YXRlIiwiZGF0ZUZvcm1hdCIsIm9uQ2hhbmdlIiwic2V0IiwibmFtZSIsImVycm9yVGV4dCIsInZhbGlkYXRlVGV4dCIsImhlbHBlclRleHQiLCJtYXJnaW4iLCJzdHlsZSIsImlucHV0UHJvcHMiLCJyZXF1aXJlZCIsImRlZmF1bHRWYWx1ZSIsImNsZWFuU3BhY2VzIiwiaGFuZGxlQ2hhbmdlIiwiYmluZCIsImlzRGlzYWJsZSIsInZhbGlkYXRpb25FbmFibGVkIiwidmFsaWRhdGUiLCJlcnJvciIsIm1lc3NhZ2UiLCJSZWFjdCIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsIm93blByb3BzIiwib3duZXIiLCJjb25uZWN0IiwiRGVzaWduRm9ybSIsIm9uUmVmIiwidW5kZWZpbmVkIiwiZWxlbWVudEZvcm0iLCJzYXZlIiwiY2FuY2VsIiwibGlzdFByb2plY3Rpb24iLCJyZWYiLCJmb3JtIiwicmVuZGVyTWV0aG9kIiwic2F2ZVN1Y2Nlc3MiLCJoYXNHbG9iYWxFcnJvciIsInNob3dHbG9iYWxFcnJvciIsIndpdGhvdXRFbnRpdHlDaGVjayIsImdldEVudGl0eVN1Y2Nlc3MiLCJyZW5kZXJCdXR0b24iLCJpc1ZhbGlkQnlHcm91cCIsImZpZWxkVmFsaWRhdG9yQ29yZSIsImNoZWNrR3JvdXAiLCJ2YWxpZGF0aW9uR3JvdXAiLCJpc1ZhbGlkIiwibWFyZ2luQm90dG9tIiwibWFyZ2luTGVmdCIsInNhdmVEaXNhYmxlZCIsIndhaXRVcGQiLCJvblNhdmUiLCJhY3RpdmF0ZUJ1dHRvbiIsIndhaXQiLCJFcnJvck1lc3NhZ2UiLCJ2ZXJ0aWNhbEFsaWduIiwiRm9ybSIsInJlYWR5Iiwic2F2ZVN1Y2Nlc3NJZCIsImNsZWFyRm9ybVBhcmFtcyIsInJlbmRlciIsInNhdmVFbnRpdHkiLCJjbGVhclN0YXRlIiwiaWQiLCJkZWZhdWx0UHJvcGVydHkiLCJnZXRFbnRpdHlMaXN0V2l0aFBhZ2UiLCJsaXN0UG9qZWN0aW9uIiwiaXNDb250cm9sbGVyIiwiZGVmYXVsdFByb3BlcnR5TGlzdCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiYmluZEFjdGlvbkNyZWF0b3JzIiwiV2lkZ2V0IiwiY2xhc3NOYW1lIiwiaGVhZGVyIiwiY29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUc7QUFDZkMsVUFBUSxFQUFFLGFBREs7QUFFZkMsT0FBSyxFQUFFLFlBRlE7QUFHZkMsU0FBTyxFQUFFO0FBSE0sQ0FBbkI7O0lBTU1DLGdCOzs7OztBQUNGLDRCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FB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ZWFjdFwiO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7dmFsaWRhdGV9IGZyb20gXCIuLi8uLi91dGlscy92YWxpZGF0b3JcIjtcbmltcG9ydCBUZXh0RmllbGQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiO1xuaW1wb3J0IGRhdGVGb3JtYXQgZnJvbSBcImRhdGVmb3JtYXRcIjtcbmltcG9ydCB7Y2xlYW5TcGFjZXN9IGZyb20gXCIuLi8uLi91dGlscy9zdHJpbmdcIjtcbmltcG9ydCB7Z2V0LCBoYXMsIGlzRXF1YWwsIHNldH0gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IHtnZXRWYWx1ZUluUHJvcHMsIGlzVmFsdWVOdWxsfSBmcm9tIFwiLi91dGlscy9jb21wb25lbnRWYWx1ZVV0aWxzXCI7XG5cblxuLyoqXG4gKiBEZWZhdWx0IFRleHQgRmllbGRcbiAqXG4gKiBQcm9wZXJ0aWVzXG4gKlxuICogb3duZXIgLSBvd25lciBvZiB0aGlzIGNvbXBvbmVudHNcbiAqIG5hbWUgLSBuYW1lIG9mIHNlbGVjdCBvbiB3ZWItaW50ZXJmYWNlXG4gKiBwYXJhbU5hbWUgLSBrZXkgZm9yIHNhdmluZyBpbiBzdG9yZVxuICogdmFsdWUgLSB2YWx1ZSBvZiBzZWxlY3QgZmllbGRcbiAqIGRhdGVGb3JtYXQgLSBwYXR0ZXJuIGZvciBkYXRlXG4gKlxuICovXG5cbmNvbnN0IHR5cGVSZWdleHAgPSB7XG4gICAgYWxwaGFiZXQ6IC9eW2EtekEtWl0rJC8sXG4gICAgcGhvbmU6IC9eXFxkezAsMTJ9JC8sXG4gICAgbnVtZXJpYzogL15cXGQrJC9cbn07XG5cbmNsYXNzIERlZmF1bHRUZXh0RmllbGQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgdmFsdWU6IFwiXCIsXG4gICAgICAgICAgICBzYXZlVmFsdWU6IHRoaXMucHJvcHMuc2F2ZVZhbHVlICE9PSBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZShnZXRWYWx1ZUluUHJvcHModGhpcy5wcm9wcywgdGhpcy5wcm9wcy5wYXJhbU5hbWUsIFwiXCIpKVxuICAgIH1cblxuICAgIFVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICBpZiAobmV4dFByb3BzLmVudGl0eSAmJiBoYXMobmV4dFByb3BzLmVudGl0eSwgdGhpcy5wcm9wcy5wYXJhbU5hbWUpKSB7XG4gICAgICAgICAgICB0aGlzLnNldFZhbHVlKGdldChuZXh0UHJvcHMuZW50aXR5LCB0aGlzLnByb3BzLnBhcmFtTmFtZSwgXCJcIikpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc1ZhbHVlTnVsbChuZXh0UHJvcHMuZm9ybVBhcmFtcywgdGhpcy5wcm9wcy5wYXJhbU5hbWUpKVxuICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZShudWxsKTtcblxuICAgICAgICBpZiAodGhpcy5wcm9wcy52YWx1ZSAhPT0gbmV4dFByb3BzLnZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnNldFZhbHVlKG5leHRQcm9wcy52YWx1ZSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgICAgICB0aGlzLnNldFZhbHVlKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgfVxuXG4gICAgc2V0VmFsdWUodmFsdWUgPSBcIlwiKSB7XG4gICAgICAgIGlmIChpc0VxdWFsKHZhbHVlLCB0aGlzLnN0YXRlLnZhbHVlKSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY29uc3Qge3R5cGUgPSBcInRleHRcIn0gPSB0aGlzLnByb3BzO1xuICAgICAgICBpZiAodHlwZSAhPT0gXCJ0ZXh0XCIgJiYgdmFsdWUgJiYgdHlwZVJlZ2V4cFt0eXBlXSAmJiAhdHlwZVJlZ2V4cFt0eXBlXS50ZXN0KHZhbHVlKSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB2YWx1ZTogISF0aGlzLnByb3BzLmRhdGVGb3JtYXQgJiYgISF2YWx1ZSA/IGRhdGVGb3JtYXQodmFsdWUsIHRoaXMucHJvcHMuZGF0ZUZvcm1hdCkgOiB2YWx1ZVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoISF0aGlzLnByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoISF0aGlzLnN0YXRlLnNhdmVWYWx1ZSkge1xuICAgICAgICAgICAgc2V0KHRoaXMucHJvcHMuZm9ybVBhcmFtcywgdGhpcy5wcm9wcy5wYXJhbU5hbWUsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBuYW1lLCBcbiAgICAgICAgICAgIGVycm9yVGV4dCA9IHRoaXMudmFsaWRhdGVUZXh0KCksIFxuICAgICAgICAgICAgaGVscGVyVGV4dCxcbiAgICAgICAgICAgIG1hcmdpbiA9IFwibm9ybWFsXCIsIFxuICAgICAgICAgICAgdHlwZSwgXG4gICAgICAgICAgICBzdHlsZSwgXG4gICAgICAgICAgICBpbnB1dFByb3BzLFxuICAgICAgICAgICAgcmVxdWlyZWQsIFxuICAgICAgICAgICAgcGFyYW1OYW1lLFxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlLFxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgIGlkPXtcIlRleHRGaWVsZF9cIiArIGNsZWFuU3BhY2VzKG5hbWUpfVxuICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICAgICAgICByZXF1aXJlZD17cmVxdWlyZWR9XG4gICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPXtwYXJhbU5hbWUgPT09IFwicGFzc3dvcmRcIiA/IFwibmV3LXBhc3N3b3JkXCIgOiAnb2ZmJ31cbiAgICAgICAgICAgICAgICBlcnJvcj17ISFlcnJvclRleHR9XG4gICAgICAgICAgICAgICAgbWFyZ2luPXttYXJnaW59XG4gICAgICAgICAgICAgICAgaGVscGVyVGV4dD17ZXJyb3JUZXh0ID8gZXJyb3JUZXh0IDogaGVscGVyVGV4dH1cbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZSA9PT0gMCA/IDAgOiB0aGlzLnN0YXRlLnZhbHVlID8gdGhpcy5zdGF0ZS52YWx1ZSA6IGRlZmF1bHRWYWx1ZSB8fCAnJ31cbiAgICAgICAgICAgICAgICBsYWJlbD17bmFtZX1cbiAgICAgICAgICAgICAgICB0eXBlPXt0eXBlfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLmlzRGlzYWJsZX1cbiAgICAgICAgICAgICAgICBpbnB1dFByb3BzPXtpbnB1dFByb3BzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgKVxuICAgIH1cblxuICAgIHZhbGlkYXRlVGV4dCgpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMudmFsaWRhdGlvbkVuYWJsZWQgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsaWRhdGUodGhpcy5wcm9wcy5wYXJhbU5hbWUsIHRoaXMucHJvcHMuZXJyb3IpLm1lc3NhZ2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCBvd25Qcm9wcykgPT4gKHtcbiAgICBlcnJvcjogc3RhdGUub3duZXJbb3duUHJvcHMub3duZXJdLmVycm9yLFxuICAgIGZvcm1QYXJhbXM6IHN0YXRlLm93bmVyW293blByb3BzLm93bmVyXS5mb3JtUGFyYW1zLFxuICAgIGVudGl0eTogc3RhdGUub3duZXJbb3duUHJvcHMub3duZXJdLmVudGl0eVxufSk7XG5cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKERlZmF1bHRUZXh0RmllbGQpIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xuaW1wb3J0IEZvcm0gZnJvbSBcIi4vRm9ybVwiO1xuaW1wb3J0IHtoYXNHbG9iYWxFcnJvcn0gZnJvbSBcIi4uLy4uL3V0aWxzL3ZhbGlkYXRvclwiO1xuaW1wb3J0IE92ZXJsYXkgZnJvbSBcIi4vT3ZlcmxheVwiO1xuaW1wb3J0IHtmaWVsZFZhbGlkYXRvckNvcmV9IGZyb20gXCJyZWFjdC12YWxpZGF0aW9uLWZyYW1ld29ya1wiO1xuXG5jbGFzcyBEZXNpZ25Gb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuXG4gICAgVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25SZWYpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25SZWYodGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25SZWYpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25SZWYodW5kZWZpbmVkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxGb3JtIGhlYWRlcj17dGhpcy5wcm9wcy5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgb3duZXI9e3RoaXMucHJvcHMub3duZXJ9XG4gICAgICAgICAgICAgICAgICAgICBlbnRpdHk9e3RoaXMucHJvcHMuZW50aXR5fVxuICAgICAgICAgICAgICAgICAgICAgZWxlbWVudEZvcm09e3RoaXMucHJvcHMuZWxlbWVudEZvcm19XG4gICAgICAgICAgICAgICAgICAgICBzYXZlPXt0aGlzLnByb3BzLnNhdmV9XG4gICAgICAgICAgICAgICAgICAgICBjYW5jZWw9e3RoaXMucHJvcHMuY2FuY2VsfVxuICAgICAgICAgICAgICAgICAgICAgcGFyYW1OYW1lPXt0aGlzLnByb3BzLnBhcmFtTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgIGxpc3RQb2plY3Rpb249e3RoaXMucHJvcHMubGlzdFByb2plY3Rpb259XG4gICAgICAgICAgICAgICAgICAgICBvblJlZj17cmVmID0+ICh0aGlzLmZvcm0gPSByZWYpfVxuICAgICAgICAgICAgICAgICAgICAgcmVuZGVyPXsoKSA9PiB0aGlzLnJlbmRlck1ldGhvZCgpfVxuICAgICAgICAgICAgICAgICAgICAgc2F2ZVN1Y2Nlc3M9e3RoaXMucHJvcHMuc2F2ZVN1Y2Nlc3N9XG4gICAgICAgIC8+XG4gICAgfVxuXG4gICAgcmVuZGVyTWV0aG9kKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgISF0aGlzLmZvcm0gP1xuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5uYW1lfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtoYXNHbG9iYWxFcnJvcih0aGlzLnByb3BzLmVycm9yKSA/IHRoaXMuc2hvd0dsb2JhbEVycm9yKCkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLndpdGhvdXRFbnRpdHlDaGVjayB8fCB0aGlzLnByb3BzLmdldEVudGl0eVN1Y2Nlc3MgPyB0aGlzLnByb3BzLmVsZW1lbnRGb3JtIDogPE92ZXJsYXkvPn1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoci8+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckJ1dHRvbigpfVxuICAgICAgICAgICAgICAgIDwvZGl2PiA6IG51bGxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBvblNhdmUoKSB7XG4gICAgICAgIGNvbnN0IGlzVmFsaWRCeUdyb3VwID0gZmllbGRWYWxpZGF0b3JDb3JlLmNoZWNrR3JvdXAodGhpcy5wcm9wcy52YWxpZGF0aW9uR3JvdXAgfHwgdGhpcy5wcm9wcy5vd25lcikuaXNWYWxpZFxuICAgICAgICBpZiAoIWlzVmFsaWRCeUdyb3VwKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5mb3JtLnNhdmUoKTtcbiAgICB9XG5cbiAgICByZW5kZXJCdXR0b24oKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtaXRlbXMtcmlnaHRcIiBzdHlsZT17e21hcmdpbkJvdHRvbTogNH19PlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInRleHRcIiBvbkNsaWNrPXt0aGlzLmZvcm0uY2FuY2VsLmJpbmQodGhpcy5mb3JtKX0+XG4gICAgICAgICAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7bWFyZ2luTGVmdDogMTJ9fS8+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBkaXNhYmxlZD17ISF0aGlzLnByb3BzLnNhdmVEaXNhYmxlZCB8fCAhIXRoaXMucHJvcHMud2FpdFVwZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25TYXZlLmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICAgICAgICBTYXZlXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3ttYXJnaW5MZWZ0OiAxMn19Lz5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5hY3RpdmF0ZUJ1dHRvbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCBvd25Qcm9wcykgPT4gKHtcbiAgICBnZXRFbnRpdHlTdWNjZXNzOiAoISFzdGF0ZS5vd25lcltvd25Qcm9wcy5vd25lcl0gJiYgKCEhc3RhdGUub3duZXJbb3duUHJvcHMub3duZXJdLnN0YXRlKSlcbiAgICAgICAgPyBzdGF0ZS5vd25lcltvd25Qcm9wcy5vd25lcl0uc3RhdGUuZ2V0RW50aXR5U3VjY2Vzc1xuICAgICAgICA6IGZhbHNlLFxuICAgIHdhaXQ6ICEhc3RhdGUub3duZXJbb3duUHJvcHMub3duZXJdID8gc3RhdGUub3duZXJbb3duUHJvcHMub3duZXJdLndhaXQgOiBmYWxzZSxcbiAgICB3YWl0VXBkOiAhIXN0YXRlLm93bmVyW293blByb3BzLm93bmVyXSA/IHN0YXRlLm93bmVyW293blByb3BzLm93bmVyXS53YWl0VXBkIDogZmFsc2UsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG51bGwpKERlc2lnbkZvcm0pXG5cblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcbmltcG9ydCBBbGVydCBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRXJyb3JPdXRsaW5lZCc7XG5cbmNvbnN0IEVycm9yTWVzc2FnZSA9ICh7ZXJyb3J9KSA9PlxuICAgIGVycm9yID9cbiAgICAgICAgPFBhcGVyIHpEZXB0aD17MX0gcm91bmRlZD17ZmFsc2V9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwtaGVhZGluZyB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8aDQ+PEFsZXJ0IGNvbG9yPVwiI0Y0NDMzNlwiLz48c3BhbiBzdHlsZT17e3ZlcnRpY2FsQWxpZ246IDQsIG1hcmdpbkxlZnQ6IDEwfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlcnJvcn08L3NwYW4+PC9oND5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1BhcGVyPlxuICAgICAgICA6IG51bGxcblxuZXhwb3J0IGRlZmF1bHQgRXJyb3JNZXNzYWdlIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7YmluZEFjdGlvbkNyZWF0b3JzfSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xuaW1wb3J0IHtoYXNHbG9iYWxFcnJvcn0gZnJvbSBcIi4uLy4uL3V0aWxzL3ZhbGlkYXRvclwiO1xuaW1wb3J0IEVycm9yTWVzc2FnZSBmcm9tIFwiLi9FcnJvck1lc3NhZ2VcIjtcbmltcG9ydCBPdmVybGF5IGZyb20gJy4vT3ZlcmxheSc7XG5pbXBvcnQge2NsZWFyRm9ybVBhcmFtcywgY2xlYXJTdGF0ZSwgZ2V0RW50aXR5TGlzdFdpdGhQYWdlLCBzYXZlRW50aXR5fSBmcm9tIFwiLi4vLi4vYWN0aW9ucy9pbmRleE93bmVyXCI7XG5pbXBvcnQge2lzRXF1YWx9IGZyb20gXCJsb2Rhc2hcIjtcblxuY2xhc3MgRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICByZWFkeTogZmFsc2VcbiAgICAgICAgfVxuICAgIH1cblxuICAgIFVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uUmVmKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uUmVmKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgIGlmICghaXNFcXVhbChuZXh0UHJvcHMuZW50aXR5LCB0aGlzLnByb3BzLmVudGl0eSkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3JlYWR5OiB0cnVlfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobmV4dFByb3BzLnNhdmVTdWNjZXNzSWQgJiYgIWlzRXF1YWwobmV4dFByb3BzLnNhdmVTdWNjZXNzSWQsIHRoaXMucHJvcHMuc2F2ZVN1Y2Nlc3NJZCkpIHtcbiAgICAgICAgICAgIC8vZW50aXR5IHdhcyBzYXZlZCBzdWNjZXNzXG4gICAgICAgICAgICB0aGlzLnNhdmVTdWNjZXNzKG5leHRQcm9wcy5zYXZlU3VjY2Vzc0lkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5vblJlZikge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vblJlZih1bmRlZmluZWQpO1xuICAgICAgICB9XG4gICAgICAgIGNsZWFyRm9ybVBhcmFtcyh0aGlzLnByb3BzLm93bmVyKVxuICAgIH1cblxuICAgIHNob3dHbG9iYWxFcnJvcigpIHtcbiAgICAgICAgcmV0dXJuICg8RXJyb3JNZXNzYWdlIGVycm9yPXt0aGlzLnByb3BzLmVycm9yfS8+KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAhIXRoaXMucHJvcHMucmVuZGVyID9cbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnJlbmRlcigpIDpcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAge2hhc0dsb2JhbEVycm9yKHRoaXMucHJvcHMuZXJyb3IpID8gdGhpcy5zaG93R2xvYmFsRXJyb3IoKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuZ2V0RW50aXR5U3VjY2VzcyA/IHRoaXMucHJvcHMuZWxlbWVudEZvcm0gOiA8T3ZlcmxheS8+fVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckJ1dHRvbigpfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZW5kZXJCdXR0b24oKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIiBzdHlsZT17e21hcmdpbkJvdHRvbTogNH19PlxuICAgICAgICAgICAgICAgIDxoci8+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBsYWJlbD1cIlNhdmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpbWFyeT17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLnNhdmVEaXNhYmxlZCB8fCB0aGlzLnByb3BzLndhaXRVcGR9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnNhdmUuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgeycgICd9XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBsYWJlbD1cIkNhbmNlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmNhbmNlbC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHNhdmUoKSB7XG4gICAgICAgIGlmICghIXRoaXMucHJvcHMuc2F2ZSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5zYXZlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLnNhdmVFbnRpdHkodGhpcy5wcm9wcy5lbnRpdHksIHRoaXMucHJvcHMuZm9ybVBhcmFtcyxcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm93bmVyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNhbmNlbCgpIHtcbiAgICAgICAgaWYgKCEhdGhpcy5wcm9wcy5jYW5jZWwpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY2FuY2VsKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmNsZWFyU3RhdGUodGhpcy5wcm9wcy5vd25lcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzYXZlU3VjY2VzcyhpZCkge1xuICAgICAgICBpZiAoISF0aGlzLnByb3BzLnNhdmVTdWNjZXNzKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLnNhdmVTdWNjZXNzKGlkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHByb3BzID0ge307XG4gICAgICAgICAgICBwcm9wc1snZGVmYXVsdFByb3BlcnR5TGlzdCddID0gdGhpcy5wcm9wcy5kZWZhdWx0UHJvcGVydHk7XG4gICAgICAgICAgICBjb25zdCBwYXJhbU5hbWUgPSAhIXRoaXMucHJvcHMucGFyYW1OYW1lID8gdGhpcy5wcm9wcy5wYXJhbU5hbWUgOiB0aGlzLnByb3BzLmVudGl0eTtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZ2V0RW50aXR5TGlzdFdpdGhQYWdlKHRoaXMucHJvcHMuZW50aXR5LFxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMubGlzdFBvamVjdGlvbiB8fCAnbGlzdCcsIHRoaXMucHJvcHMub3duZXIsIHBhcmFtTmFtZSwgcHJvcHMsIHRoaXMucHJvcHMuaXNDb250cm9sbGVyKTtcbiAgICAgICAgICAgIHRoaXMuY2FuY2VsKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgb3duUHJvcHMpID0+ICh7XG4gICAgZXJyb3I6ICEhc3RhdGUub3duZXJbb3duUHJvcHMub3duZXJdID8gc3RhdGUub3duZXJbb3duUHJvcHMub3duZXJdLmVycm9yIDogbnVsbCxcbiAgICBmb3JtUGFyYW1zOiAhIXN0YXRlLm93bmVyW293blByb3BzLm93bmVyXSA/IHN0YXRlLm93bmVyW293blByb3BzLm93bmVyXS5mb3JtUGFyYW1zIDoge30sXG4gICAgc2F2ZVN1Y2Nlc3NJZDogISFzdGF0ZS5vd25lcltvd25Qcm9wcy5vd25lcl0gPyBzdGF0ZS5vd25lcltvd25Qcm9wcy5vd25lcl0uc2F2ZVN1Y2Nlc3NJZCA6IG51bGwsXG4gICAgZGVmYXVsdFByb3BlcnR5OiBzdGF0ZS5vd25lcltvd25Qcm9wcy5vd25lcl0uc3RhdGUuZGVmYXVsdFByb3BlcnR5TGlzdCxcbiAgICBnZXRFbnRpdHlTdWNjZXNzOiAoISFzdGF0ZS5vd25lcltvd25Qcm9wcy5vd25lcl0gJiYgKCEhc3RhdGUub3duZXJbb3duUHJvcHMub3duZXJdLnN0YXRlKSlcbiAgICAgICAgPyBzdGF0ZS5vd25lcltvd25Qcm9wcy5vd25lcl0uc3RhdGUuZ2V0RW50aXR5U3VjY2Vzc1xuICAgICAgICA6IGZhbHNlLFxuICAgIHdhaXQ6ICEhc3RhdGUub3duZXJbb3duUHJvcHMub3duZXJdID8gc3RhdGUub3duZXJbb3duUHJvcHMub3duZXJdLndhaXQgOiBmYWxzZSxcbiAgICB3YWl0VXBkOiAhIXN0YXRlLm93bmVyW293blByb3BzLm93bmVyXSA/IHN0YXRlLm93bmVyW293blByb3BzLm93bmVyXS53YWl0VXBkIDogZmFsc2UsXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xuICAgIGdldEVudGl0eUxpc3RXaXRoUGFnZTogYmluZEFjdGlvbkNyZWF0b3JzKGdldEVudGl0eUxpc3RXaXRoUGFnZSwgZGlzcGF0Y2gpLFxuICAgIGNsZWFyRm9ybVBhcmFtczogYmluZEFjdGlvbkNyZWF0b3JzKGNsZWFyRm9ybVBhcmFtcywgZGlzcGF0Y2gpLFxuICAgIGNsZWFyU3RhdGU6IGJpbmRBY3Rpb25DcmVhdG9ycyhjbGVhclN0YXRlLCBkaXNwYXRjaCksXG4gICAgc2F2ZUVudGl0eTogYmluZEFjdGlvbkNyZWF0b3JzKHNhdmVFbnRpdHksIGRpc3BhdGNoKSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShGb3JtKVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBFcnJvck1lc3NhZ2UgZnJvbSBcIi4vRXJyb3JNZXNzYWdlXCI7XG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xuXG5cbmNvbnN0IFdpZGdldCA9ICh7Y2xhc3NOYW1lID0gXCJ3aWRnZXRcIiwgc3R5bGUsIGhlYWRlciwgY29udGVudCwgZXJyb3J9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBzdHlsZT17c3R5bGV9PlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImgxLWhlYWRcIj57aGVhZGVyfTwvaDM+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxFcnJvck1lc3NhZ2UgZXJyb3I9e2Vycm9yfS8+XG4gICAgICAgICAgICAgICAgICAgIHtjb250ZW50fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1BhcGVyPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBXaWRnZXQiXSwic291cmNlUm9vdCI6IiJ9