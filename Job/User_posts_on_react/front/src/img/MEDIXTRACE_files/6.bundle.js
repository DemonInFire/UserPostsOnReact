(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./src/components/core/DefaultCheckBox.js":
/*!************************************************!*\
  !*** ./src/components/core/DefaultCheckBox.js ***!
  \************************************************/
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
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "./node_modules/@material-ui/core/esm/Checkbox/index.js");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/esm/FormControlLabel/index.js");
/* harmony import */ var _utils_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/string */ "./src/utils/string.js");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






/**
 *
 * name - The name of the parameter
 * paramName - JavaScript name of the parameter
 * defaultValue - Value of the checkbox by default (for example for new record)
 *
 */

var DefaultCheckBox = /*#__PURE__*/function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(DefaultCheckBox, _React$Component);

  var _super = _createSuper(DefaultCheckBox);

  function DefaultCheckBox(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, DefaultCheckBox);

    _this = _super.call(this, props);
    _this.state = {
      value: false
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(DefaultCheckBox, [{
    key: "UNSAFE_componentWillMount",
    value: function UNSAFE_componentWillMount() {
      if (this.props.defaultValue) this.setValue(this.props.defaultValue);
      if (this.props.entity) this.setValue(this.props.entity[this.props.paramName]);else if (this.props.formParams.hasOwnProperty(this.props.paramName)) this.setValue(this.props.formParams[this.props.paramName]);
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      if (nextProps.entity !== this.props.entity) {
        this.setValue(nextProps.entity[this.props.paramName]);
      } else if (nextProps.formParams !== this.props.formParams) {
        if (nextProps.formParams.hasOwnProperty(this.props.paramName) && nextProps.formParams[this.props.paramName] === null) this.setValue(nextProps.formParams[this.props.paramName] == null ? false : nextProps.formParams[this.props.paramName]);
      }
    }
  }, {
    key: "setValue",
    value: function setValue(value) {
      this.setState({
        value: value === true
      });

      if (this.props.falseIsNullable) {
        this.props.formParams[this.props.paramName] = value || null;
      } else {
        this.props.formParams[this.props.paramName] = this.props.negate ? value === false : value === true;
      }

      if (this.props.onChange) {
        this.props.onChange(value === true);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8__["default"], {
        style: this.props.styles,
        disabled: this.props.disabled,
        control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_7__["default"], {
          id: "CheckBox_" + Object(_utils_string__WEBPACK_IMPORTED_MODULE_9__["cleanSpaces"])(this.props.label),
          color: "primary",
          name: this.props.paramName,
          checked: this.state.value,
          onChange: this.checkboxHandler.bind(this)
        }),
        label: this.props.name,
        labelPlacement: "end"
      });
    }
  }, {
    key: "checkboxHandler",
    value: function checkboxHandler() {
      this.setValue(!this.state.value);
    }
  }]);

  return DefaultCheckBox;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    formParams: state.owner[ownProps.owner].formParams,
    entity: state.owner[ownProps.owner].entity
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps)(DefaultCheckBox));

/***/ }),

/***/ "./src/components/core/DefaultDateFromTo.js":
/*!**************************************************!*\
  !*** ./src/components/core/DefaultDateFromTo.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _DefaultDatePicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DefaultDatePicker */ "./src/components/core/DefaultDatePicker.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var DefaultDateFromTo = /*#__PURE__*/function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(DefaultDateFromTo, _React$Component);

  var _super = _createSuper(DefaultDateFromTo);

  function DefaultDateFromTo(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, DefaultDateFromTo);

    _this = _super.call(this, props);
    _this.state = {
      valueFrom: null,
      valueTo: null
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(DefaultDateFromTo, [{
    key: "handleChangeFrom",
    value: function handleChangeFrom(value) {
      this.setState({
        valueFrom: moment__WEBPACK_IMPORTED_MODULE_9___default.a.utc(value).local()
      });
    }
  }, {
    key: "handleChangeTo",
    value: function handleChangeTo(value) {
      this.setState({
        valueTo: moment__WEBPACK_IMPORTED_MODULE_9___default.a.utc(value).local()
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          valueFrom = _this$state.valueFrom,
          valueTo = _this$state.valueTo;
      var _this$props = this.props,
          name = _this$props.name,
          paramFrom = _this$props.paramFrom,
          paramTo = _this$props.paramTo,
          owner = _this$props.owner,
          format = _this$props.format,
          formatFrom = _this$props.formatFrom,
          formatTo = _this$props.formatTo,
          _this$props$disableFu = _this$props.disableFutureTo,
          disableFutureTo = _this$props$disableFu === void 0 ? true : _this$props$disableFu;
      var maxDateProps = {};
      var minDateProps = {};
      if (valueTo) maxDateProps.maxDate = valueTo;
      if (valueFrom) minDateProps.minDate = valueFrom;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "flex-items-no-wrap"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_DefaultDatePicker__WEBPACK_IMPORTED_MODULE_8__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
        style: {
          marginBottom: 0
        },
        name: name + " from",
        paramName: paramFrom,
        onChange: this.handleChangeFrom.bind(this),
        disableFuture: !valueTo,
        owner: owner,
        format: format || formatFrom
      }, maxDateProps)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_DefaultDatePicker__WEBPACK_IMPORTED_MODULE_8__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
        style: {
          marginBottom: 0
        },
        name: name + " to",
        paramName: paramTo,
        onChange: this.handleChangeTo.bind(this),
        owner: owner,
        disableFuture: disableFutureTo,
        format: format || formatTo
      }, minDateProps)));
    }
  }]);

  return DefaultDateFromTo;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    error: state.owner[ownProps.owner].error,
    formParams: state.owner[ownProps.owner].formParams,
    entity: state.owner[ownProps.owner].entity
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps)(DefaultDateFromTo));

/***/ }),

/***/ "./src/components/select/ItemStatusSelectField.js":
/*!********************************************************!*\
  !*** ./src/components/select/ItemStatusSelectField.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_DefaultSelectField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/DefaultSelectField */ "./src/components/core/DefaultSelectField.js");
/* harmony import */ var _core_MultiSelectField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/MultiSelectField */ "./src/components/core/MultiSelectField.js");






var ItemStatusSelectField = function ItemStatusSelectField(_ref) {
  var _ref$name = _ref.name,
      name = _ref$name === void 0 ? "Status" : _ref$name,
      _ref$paramName = _ref.paramName,
      paramName = _ref$paramName === void 0 ? "itemStatus" : _ref$paramName,
      _ref$entities = _ref.entities,
      entities = _ref$entities === void 0 ? "statuses" : _ref$entities,
      _ref$entityLink = _ref.entityLink,
      entityLink = _ref$entityLink === void 0 ? false : _ref$entityLink,
      _ref$multiple = _ref.multiple,
      multiple = _ref$multiple === void 0 ? false : _ref$multiple,
      other = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["name", "paramName", "entities", "entityLink", "multiple"]);

  return multiple ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_core_MultiSelectField__WEBPACK_IMPORTED_MODULE_4__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    name: name,
    paramName: paramName,
    searchable: true,
    entities: entities,
    entityValue: "itemStatus",
    entityKey: "itemStatus",
    entityLink: entityLink
  }, other)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_core_DefaultSelectField__WEBPACK_IMPORTED_MODULE_3__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    name: name,
    paramName: paramName,
    entities: entities,
    listLabel: "itemStatus",
    listKey: "itemStatus",
    entityLink: entityLink
  }, other));
};

/* harmony default export */ __webpack_exports__["default"] = (ItemStatusSelectField);

/***/ }),

/***/ "./src/components/select/RetailerSelectField.js":
/*!******************************************************!*\
  !*** ./src/components/select/RetailerSelectField.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_MultiSelectField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/MultiSelectField */ "./src/components/core/MultiSelectField.js");
/* harmony import */ var _core_DefaultSelectField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/DefaultSelectField */ "./src/components/core/DefaultSelectField.js");






var RetailerSelectField = function RetailerSelectField(_ref) {
  var _ref$name = _ref.name,
      name = _ref$name === void 0 ? "Retailer" : _ref$name,
      _ref$paramName = _ref.paramName,
      paramName = _ref$paramName === void 0 ? "retailer" : _ref$paramName,
      _ref$entities = _ref.entities,
      entities = _ref$entities === void 0 ? "retailers" : _ref$entities,
      _ref$entityLink = _ref.entityLink,
      entityLink = _ref$entityLink === void 0 ? true : _ref$entityLink,
      _ref$multiple = _ref.multiple,
      multiple = _ref$multiple === void 0 ? false : _ref$multiple,
      other = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["name", "paramName", "entities", "entityLink", "multiple"]);

  return multiple ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_core_MultiSelectField__WEBPACK_IMPORTED_MODULE_3__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    name: name,
    paramName: paramName,
    searchable: true,
    entities: entities,
    entityValue: "shortName",
    entityLink: entityLink
  }, other)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_core_DefaultSelectField__WEBPACK_IMPORTED_MODULE_4__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    name: name,
    paramName: paramName,
    entities: entities,
    listLabel: "shortName",
    entityLink: entityLink
  }, other));
};

/* harmony default export */ __webpack_exports__["default"] = (RetailerSelectField);

/***/ }),

/***/ "./src/components/select/WholesalerSelectField.js":
/*!********************************************************!*\
  !*** ./src/components/select/WholesalerSelectField.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_MultiSelectField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/MultiSelectField */ "./src/components/core/MultiSelectField.js");
/* harmony import */ var _core_DefaultSelectField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/DefaultSelectField */ "./src/components/core/DefaultSelectField.js");






var WholesalerSelectField = function WholesalerSelectField(_ref) {
  var _ref$name = _ref.name,
      name = _ref$name === void 0 ? "Wholesaler" : _ref$name,
      _ref$paramName = _ref.paramName,
      paramName = _ref$paramName === void 0 ? "wholesaler" : _ref$paramName,
      _ref$entities = _ref.entities,
      entities = _ref$entities === void 0 ? "wholesalers" : _ref$entities,
      _ref$entityLink = _ref.entityLink,
      entityLink = _ref$entityLink === void 0 ? true : _ref$entityLink,
      _ref$multiple = _ref.multiple,
      multiple = _ref$multiple === void 0 ? false : _ref$multiple,
      other = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["name", "paramName", "entities", "entityLink", "multiple"]);

  return multiple ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_core_MultiSelectField__WEBPACK_IMPORTED_MODULE_3__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    name: name,
    paramName: paramName,
    searchable: true,
    entities: entities,
    entityValue: "shortName",
    entityLink: entityLink
  }, other)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_core_DefaultSelectField__WEBPACK_IMPORTED_MODULE_4__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    name: name,
    entities: entities,
    paramName: paramName,
    listLabel: "shortName",
    entityLink: entityLink
  }, other));
};

/* harmony default export */ __webpack_exports__["default"] = (WholesalerSelectField);

/***/ }),

/***/ "./src/utils/consts.js":
/*!*****************************!*\
  !*** ./src/utils/consts.js ***!
  \*****************************/
/*! exports provided: moduleTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moduleTypes", function() { return moduleTypes; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_select_ManufacturerSelectField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/select/ManufacturerSelectField */ "./src/components/select/ManufacturerSelectField.js");
/* harmony import */ var _components_select_CentralWarehouseSelectField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/select/CentralWarehouseSelectField */ "./src/components/select/CentralWarehouseSelectField.js");
/* harmony import */ var _components_select_RetailerSelectField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/select/RetailerSelectField */ "./src/components/select/RetailerSelectField.js");
/* harmony import */ var _components_select_WholesalerSelectField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/select/WholesalerSelectField */ "./src/components/select/WholesalerSelectField.js");





var moduleTypes = {
  MANUFACTURER: {
    title: "Manufacturer",
    select: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_select_ManufacturerSelectField__WEBPACK_IMPORTED_MODULE_1__["default"], null)
  },
  CENTRAL_WAREHOUSE: {
    title: "Central Warehouse",
    select: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_select_CentralWarehouseSelectField__WEBPACK_IMPORTED_MODULE_2__["default"], null)
  },
  RETAILER: {
    title: "Retailer",
    select: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_select_RetailerSelectField__WEBPACK_IMPORTED_MODULE_3__["default"], null)
  },
  WHOLESALER: {
    title: "Wholesaler",
    select: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_select_WholesalerSelectField__WEBPACK_IMPORTED_MODULE_4__["default"], null)
  }
};

/***/ }),

/***/ "./src/view/Dashboard/widgets/DashboardItemListFilter.js":
/*!***************************************************************!*\
  !*** ./src/view/Dashboard/widgets/DashboardItemListFilter.js ***!
  \***************************************************************/
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
/* harmony import */ var _actions_indexOwner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../actions/indexOwner */ "./src/actions/indexOwner.ts");
/* harmony import */ var _components_core_DesignFilter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/core/DesignFilter */ "./src/components/core/DesignFilter.js");
/* harmony import */ var _components_core_DefaultTextField__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/core/DefaultTextField */ "./src/components/core/DefaultTextField.js");
/* harmony import */ var _components_select_ItemStatusSelectField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/select/ItemStatusSelectField */ "./src/components/select/ItemStatusSelectField.js");
/* harmony import */ var _components_core_DefaultDateFromTo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../components/core/DefaultDateFromTo */ "./src/components/core/DefaultDateFromTo.js");
/* harmony import */ var _utils_consts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../utils/consts */ "./src/utils/consts.js");
/* harmony import */ var _components_select_ManufacturerSelectField__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../components/select/ManufacturerSelectField */ "./src/components/select/ManufacturerSelectField.js");
/* harmony import */ var _components_core_DefaultAsyncSelect__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../components/core/DefaultAsyncSelect */ "./src/components/core/DefaultAsyncSelect.js");
/* harmony import */ var _components_core_DefaultSelectField__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../components/core/DefaultSelectField */ "./src/components/core/DefaultSelectField.js");
/* harmony import */ var _components_core_DefaultCheckBox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../components/core/DefaultCheckBox */ "./src/components/core/DefaultCheckBox.js");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }















var DashboardItemListFilter = /*#__PURE__*/function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(DashboardItemListFilter, _React$Component);

  var _super = _createSuper(DashboardItemListFilter);

  function DashboardItemListFilter() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, DashboardItemListFilter);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      type: null
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(DashboardItemListFilter, [{
    key: "renderElementFilter",
    value: function renderElementFilter() {
      var _this2 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "flex-items-start",
        style: {
          marginBottom: 8
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "flex-items-column",
        style: {
          marginRight: 16,
          width: 400
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_select_ManufacturerSelectField__WEBPACK_IMPORTED_MODULE_14__["default"], {
        style: {
          marginBottom: 0,
          marginTop: 0,
          width: 400
        },
        multiple: true,
        name: "Manufacturer",
        paramName: "manufacturer.id:in",
        owner: this.props.owner + "Filter",
        entityLink: false
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_select_ItemStatusSelectField__WEBPACK_IMPORTED_MODULE_11__["default"], {
        style: {
          marginBottom: 0,
          width: 400
        },
        multiple: true,
        defaultValue: [{
          itemStatus: "RECEIVED"
        }, {
          itemStatus: "ADDED"
        }, {
          itemStatus: "RETURNED"
        }],
        paramName: "lastTrack.itemStatus",
        owner: this.props.owner + "Filter"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_core_DefaultAsyncSelect__WEBPACK_IMPORTED_MODULE_15__["default"], {
        style: {
          marginBottom: 0,
          width: 400
        },
        margin: "none",
        url: "items/distinctDrugNames",
        entityLink: false,
        simple: true,
        multiple: true,
        name: "Drug Name",
        paramName: "drugName:in",
        owner: this.props.owner + "Filter"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_core_DefaultAsyncSelect__WEBPACK_IMPORTED_MODULE_15__["default"], {
        style: {
          marginBottom: 0,
          width: 400
        },
        margin: "none",
        url: "items/distinctInns",
        entityLink: false,
        simple: true,
        multiple: true,
        name: "INN",
        paramName: "inn:in",
        owner: this.props.owner + "Filter"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_core_DefaultAsyncSelect__WEBPACK_IMPORTED_MODULE_15__["default"], {
        style: {
          marginBottom: 0,
          width: 400
        },
        margin: "none",
        url: "items/distinctIds",
        entityLink: false,
        simple: true,
        multiple: true,
        name: "MXT ID",
        paramName: "id:in",
        owner: this.props.owner + "Filter"
      }), _utils_consts__WEBPACK_IMPORTED_MODULE_13__["moduleTypes"][this.props.type] !== _utils_consts__WEBPACK_IMPORTED_MODULE_13__["moduleTypes"].MANUFACTURER && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_core_DefaultTextField__WEBPACK_IMPORTED_MODULE_10__["default"], {
        style: {
          marginBottom: 8,
          width: 400
        },
        margin: "none",
        name: "QR code",
        paramName: "qrCode:startsWith",
        owner: this.props.owner + "Filter",
        onKeyPress: function onKeyPress(e) {
          if (e.key === 'Enter') {
            _this2.filter.filter.search();
          }
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "flex-items-column",
        style: {
          marginRight: 16
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_core_DefaultDateFromTo__WEBPACK_IMPORTED_MODULE_12__["default"], {
        name: "Manufactured date",
        paramFrom: "manufacturedDate:dgoe",
        paramTo: "manufacturedDate:dloe",
        owner: this.props.owner + "Filter"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_core_DefaultDateFromTo__WEBPACK_IMPORTED_MODULE_12__["default"], {
        name: "Expiration date",
        paramFrom: "expirationDate:dgoe",
        paramTo: "expirationDate:dloe",
        disableFutureTo: false,
        owner: this.props.owner + "Filter"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_core_DefaultDateFromTo__WEBPACK_IMPORTED_MODULE_12__["default"], {
        name: "Date added",
        formatFrom: "YYYY-MM-DDT00:00:00",
        formatTo: "YYYY-MM-DDT23:59:59",
        paramFrom: "dateAdded:dgoe",
        paramTo: "dateAdded:dloe",
        owner: this.props.owner + "Filter"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_core_DefaultDateFromTo__WEBPACK_IMPORTED_MODULE_12__["default"], {
        name: "Date received",
        formatFrom: "YYYY-MM-DDT00:00:00",
        formatTo: "YYYY-MM-DDT23:59:59",
        paramFrom: "lastTrack.date:dgoe",
        paramTo: "lastTrack.date:dloe",
        owner: this.props.owner + "Filter"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_core_DefaultDateFromTo__WEBPACK_IMPORTED_MODULE_12__["default"], {
        name: "Date sent",
        formatFrom: "YYYY-MM-DDT00:00:00",
        formatTo: "YYYY-MM-DDT23:59:59",
        paramFrom: "sentDate:dgoe",
        paramTo: "sentDate:dloe",
        owner: this.props.owner + "Filter"
      }), this.props.type && _utils_consts__WEBPACK_IMPORTED_MODULE_13__["moduleTypes"][this.props.type] !== _utils_consts__WEBPACK_IMPORTED_MODULE_13__["moduleTypes"].RETAILER ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_core_DefaultDateFromTo__WEBPACK_IMPORTED_MODULE_12__["default"], {
        name: "Date of purchase",
        formatFrom: "YYYY-MM-DDT00:00:00",
        formatTo: "YYYY-MM-DDT23:59:59",
        paramFrom: "purchaseDate:dgoe",
        paramTo: "purchaseDate:dloe",
        owner: this.props.owner + "Filter"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "flex-items-column",
        style: {
          marginRight: 16
        }
      }, this.props.type ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.cloneElement(_utils_consts__WEBPACK_IMPORTED_MODULE_13__["moduleTypes"][this.props.type].select, {
        style: {
          marginBottom: 8,
          marginTop: 0
        },
        multiple: true,
        margin: "none",
        name: "Facility",
        paramName: "lastTrack.location.id:in",
        entityLink: false,
        owner: this.props.owner + "Filter"
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "flex-items-no-wrap"
      }, this.state.type && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.cloneElement(_utils_consts__WEBPACK_IMPORTED_MODULE_13__["moduleTypes"][this.state.type].select, {
        style: {
          marginBottom: 8,
          marginTop: 0
        },
        multiple: true,
        margin: "none",
        paramName: "lastTrack.location.id:in",
        entityLink: false,
        owner: this.props.owner + "Filter"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_core_DefaultCheckBox__WEBPACK_IMPORTED_MODULE_17__["default"], {
        name: "Show deleted",
        paramName: "enabled",
        negate: true,
        owner: this.props.owner + "Filter"
      })));
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_core_DesignFilter__WEBPACK_IMPORTED_MODULE_9__["default"], {
        onRef: function onRef(ref) {
          return _this3.filter = ref;
        },
        elementFilter: this.renderElementFilter(),
        owner: this.props.owner + "Filter",
        listOwner: this.props.owner,
        entities: 'items',
        projections: "list",
        getProps: {
          "manufacturer.id:in": null,
          "qrCode:startsWith": "",
          "drugName:in": "",
          "inn:in": "",
          "lastTrack.itemStatus": this.props.statuses || ["ADDED", "RECEIVED"],
          "expirationDate:dgoe": null,
          "expirationDate:dloe": null,
          "manufacturedDate:dgoe": null,
          "manufacturedDate:dloe": null,
          "sentDate:dgoe": null,
          "sentDate:dloe": null,
          "dateAdded:dgoe": null,
          "dateAdded:dloe": null,
          "lastTrack.date:dgoe": null,
          "lastTrack.date:dloe": null,
          "purchaseDate:dgoe": null,
          "purchaseDate:dloe": null,
          "lastTrack.location.id:in": null,
          "lastTrack.location.warehouseType": this.props.type,
          "enabled": true
        }
      });
    }
  }]);

  return DashboardItemListFilter;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    error: !!state.owner[ownProps.owner] ? state.owner[ownProps.owner].state.errorList : null
  };
}; // noinspection JSUnresolvedFunction


var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    ownerActions: Object(redux__WEBPACK_IMPORTED_MODULE_7__["bindActionCreators"])(_actions_indexOwner__WEBPACK_IMPORTED_MODULE_8__, dispatch)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, mapDispatchToProps)(DashboardItemListFilter));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb3JlL0RlZmF1bHRDaGVja0JveC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb3JlL0RlZmF1bHREYXRlRnJvbVRvLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NlbGVjdC9JdGVtU3RhdHVzU2VsZWN0RmllbGQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2VsZWN0L1JldGFpbGVyU2VsZWN0RmllbGQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2VsZWN0L1dob2xlc2FsZXJTZWxlY3RGaWVsZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvY29uc3RzLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3L0Rhc2hib2FyZC93aWRnZXRzL0Rhc2hib2FyZEl0ZW1MaXN0RmlsdGVyLmpzIl0sIm5hbWVzIjpbIkRlZmF1bHRDaGVja0JveCIsInByb3BzIiwic3RhdGUiLCJ2YWx1ZSIsImRlZmF1bHRWYWx1ZSIsInNldFZhbHVlIiwiZW50aXR5IiwicGFyYW1OYW1lIiwiZm9ybVBhcmFtcyIsImhhc093blByb3BlcnR5IiwibmV4dFByb3BzIiwic2V0U3RhdGUiLCJmYWxzZUlzTnVsbGFibGUiLCJuZWdhdGUiLCJvbkNoYW5nZSIsInN0eWxlcyIsImRpc2FibGVkIiwiY2xlYW5TcGFjZXMiLCJsYWJlbCIsImNoZWNrYm94SGFuZGxlciIsImJpbmQiLCJuYW1lIiwiUmVhY3QiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJvd25Qcm9wcyIsIm93bmVyIiwiY29ubmVjdCIsIkRlZmF1bHREYXRlRnJvbVRvIiwidmFsdWVGcm9tIiwidmFsdWVUbyIsIm1vbWVudCIsInV0YyIsImxvY2FsIiwicGFyYW1Gcm9tIiwicGFyYW1UbyIsImZvcm1hdCIsImZvcm1hdEZyb20iLCJmb3JtYXRUbyIsImRpc2FibGVGdXR1cmVUbyIsIm1heERhdGVQcm9wcyIsIm1pbkRhdGVQcm9wcyIsIm1heERhdGUiLCJtaW5EYXRlIiwibWFyZ2luQm90dG9tIiwiaGFuZGxlQ2hhbmdlRnJvbSIsImhhbmRsZUNoYW5nZVRvIiwiZXJyb3IiLCJJdGVtU3RhdHVzU2VsZWN0RmllbGQiLCJlbnRpdGllcyIsImVudGl0eUxpbmsiLCJtdWx0aXBsZSIsIm90aGVyIiwiUmV0YWlsZXJTZWxlY3RGaWVsZCIsIldob2xlc2FsZXJTZWxlY3RGaWVsZCIsIm1vZHVsZVR5cGVzIiwiTUFOVUZBQ1RVUkVSIiwidGl0bGUiLCJzZWxlY3QiLCJDRU5UUkFMX1dBUkVIT1VTRSIsIlJFVEFJTEVSIiwiV0hPTEVTQUxFUiIsIkRhc2hib2FyZEl0ZW1MaXN0RmlsdGVyIiwidHlwZSIsIm1hcmdpblJpZ2h0Iiwid2lkdGgiLCJtYXJnaW5Ub3AiLCJpdGVtU3RhdHVzIiwiZSIsImtleSIsImZpbHRlciIsInNlYXJjaCIsImNsb25lRWxlbWVudCIsInN0eWxlIiwibWFyZ2luIiwicmVmIiwicmVuZGVyRWxlbWVudEZpbHRlciIsInN0YXR1c2VzIiwiZXJyb3JMaXN0IiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJvd25lckFjdGlvbnMiLCJiaW5kQWN0aW9uQ3JlYXRvcnMiLCJhY3Rpb25DcmVhdG9ycyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsZTs7Ozs7QUFDRiwyQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOO0FBRUEsVUFBS0MsS0FBTCxHQUFhO0FBQ1RDLFdBQUssRUFBRTtBQURFLEtBQWI7QUFIZTtBQU1sQjs7OztnREFFMkI7QUFDeEIsVUFBSSxLQUFLRixLQUFMLENBQVdHLFlBQWYsRUFDSSxLQUFLQyxRQUFMLENBQWMsS0FBS0osS0FBTCxDQUFXRyxZQUF6QjtB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QUFDLENBQUM3QyxLQUFLLENBQUN3QixLQUFOLENBQVlELFFBQVEsQ0FBQ0MsS0FBckIsQ0FBRixHQUFnQ3hCLEtBQUssQ0FBQ3dCLEtBQU4sQ0FBWUQsUUFBUSxDQUFDQyxLQUFyQixFQUE0QnhCLEtBQTVCLENBQWtDNEUsU0FBbEUsR0FBOEU7QUFEM0MsR0FBdEI7QUFBQSxDQUF4QixDLENBSUE7OztBQUNBLElBQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQUMsUUFBUTtBQUFBLFNBQUs7QUFDcENDLGdCQUFZLEVBQUVDLGdFQUFrQixDQUFDQyxnREFBRCxFQUFpQkgsUUFBakI7QUFESSxHQUFMO0FBQUEsQ0FBbkM7O0FBSWVyRCwwSEFBTyxDQUFDSCxlQUFELEVBQWtCdUQsa0JBQWxCLENBQVAsQ0FBNkNqQix1QkFBN0MsQ0FBZixFIiwiZmlsZSI6IjYuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBDaGVja2JveCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2hlY2tib3hcIjtcbmltcG9ydCBGb3JtQ29udHJvbExhYmVsIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbExhYmVsXCI7XG5pbXBvcnQge2NsZWFuU3BhY2VzfSBmcm9tIFwiLi4vLi4vdXRpbHMvc3RyaW5nXCI7XG5cbi8qKlxuICpcbiAqIG5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgcGFyYW1ldGVyXG4gKiBwYXJhbU5hbWUgLSBKYXZhU2NyaXB0IG5hbWUgb2YgdGhlIHBhcmFtZXRlclxuICogZGVmYXVsdFZhbHVlIC0gVmFsdWUgb2YgdGhlIGNoZWNrYm94IGJ5IGRlZmF1bHQgKGZvciBleGFtcGxlIGZvciBuZXcgcmVjb3JkKVxuICpcbiAqL1xuXG5jbGFzcyBEZWZhdWx0Q2hlY2tCb3ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBVTlNBRkVfY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5kZWZhdWx0VmFsdWUpXG4gICAgICAgICAgICB0aGlzLnNldFZhbHVlKHRoaXMucHJvcHMuZGVmYXVsdFZhbHVlKTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZW50aXR5KVxuICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLnByb3BzLmVudGl0eVt0aGlzLnByb3BzLnBhcmFtTmFtZV0pO1xuICAgICAgICBlbHNlIGlmICh0aGlzLnByb3BzLmZvcm1QYXJhbXMuaGFzT3duUHJvcGVydHkodGhpcy5wcm9wcy5wYXJhbU5hbWUpKVxuICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLnByb3BzLmZvcm1QYXJhbXNbdGhpcy5wcm9wcy5wYXJhbU5hbWVdKTtcbiAgICB9XG5cbiAgICBVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgaWYgKG5leHRQcm9wcy5lbnRpdHkgIT09IHRoaXMucHJvcHMuZW50aXR5KSB7XG4gICAgICAgICAgICB0aGlzLnNldFZhbHVlKG5leHRQcm9wcy5lbnRpdHlbdGhpcy5wcm9wcy5wYXJhbU5hbWVdKTtcbiAgICAgICAgfSBlbHNlIGlmIChuZXh0UHJvcHMuZm9ybVBhcmFtcyAhPT0gdGhpcy5wcm9wcy5mb3JtUGFyYW1zKSB7XG4gICAgICAgICAgICBpZiAobmV4dFByb3BzLmZvcm1QYXJhbXMuaGFzT3duUHJvcGVydHkodGhpcy5wcm9wcy5wYXJhbU5hbWUpICYmIG5leHRQcm9wcy5mb3JtUGFyYW1zW3RoaXMucHJvcHMucGFyYW1OYW1lXSA9PT0gbnVsbClcbiAgICAgICAgICAgICAgICB0aGlzLnNldFZhbHVlKG5leHRQcm9wcy5mb3JtUGFyYW1zW3RoaXMucHJvcHMucGFyYW1OYW1lXSA9PSBudWxsID8gZmFsc2UgOiBuZXh0UHJvcHMuZm9ybVBhcmFtc1t0aGlzLnByb3BzLnBhcmFtTmFtZV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsdWU6IHZhbHVlID09PSB0cnVlfSk7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmZhbHNlSXNOdWxsYWJsZSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5mb3JtUGFyYW1zW3RoaXMucHJvcHMucGFyYW1OYW1lXSA9IHZhbHVlIHx8IG51bGxcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZm9ybVBhcmFtc1t0aGlzLnByb3BzLnBhcmFtTmFtZV0gPSB0aGlzLnByb3BzLm5lZ2F0ZSA/IHZhbHVlID09PSBmYWxzZSA6IHZhbHVlID09PSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25DaGFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UodmFsdWUgPT09IHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcbiAgICAgICAgICAgICAgICBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZXN9XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWR9XG4gICAgICAgICAgICAgICAgY29udHJvbD17XG4gICAgICAgICAgICAgICAgICAgIDxDaGVja2JveFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e1wiQ2hlY2tCb3hfXCIgKyBjbGVhblNwYWNlcyh0aGlzLnByb3BzLmxhYmVsKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXt0aGlzLnByb3BzLnBhcmFtTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUudmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5jaGVja2JveEhhbmRsZXIuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGFiZWw9e3RoaXMucHJvcHMubmFtZX1cbiAgICAgICAgICAgICAgICBsYWJlbFBsYWNlbWVudD1cImVuZFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIGNoZWNrYm94SGFuZGxlcigpIHtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZSghdGhpcy5zdGF0ZS52YWx1ZSk7XG4gICAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIG93blByb3BzKSA9PiAoe1xuICAgIGZvcm1QYXJhbXM6IHN0YXRlLm93bmVyW293blByb3BzLm93bmVyXS5mb3JtUGFyYW1zLFxuICAgIGVudGl0eTogc3RhdGUub3duZXJbb3duUHJvcHMub3duZXJdLmVudGl0eVxufSk7XG5cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKERlZmF1bHRDaGVja0JveCkiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IERlZmF1bHREYXRlUGlja2VyIGZyb20gXCIuL0RlZmF1bHREYXRlUGlja2VyXCI7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcblxuXG5jbGFzcyBEZWZhdWx0RGF0ZUZyb21UbyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB2YWx1ZUZyb206IG51bGwsXG4gICAgICAgICAgICB2YWx1ZVRvOiBudWxsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVDaGFuZ2VGcm9tKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbHVlRnJvbTogbW9tZW50LnV0Yyh2YWx1ZSkubG9jYWwoKX0pO1xuICAgIH1cblxuICAgIGhhbmRsZUNoYW5nZVRvKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbHVlVG86IG1vbWVudC51dGModmFsdWUpLmxvY2FsKCl9KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge3ZhbHVlRnJvbSwgdmFsdWVUb30gPSB0aGlzLnN0YXRlO1xuICAgICAgICBjb25zdCB7bmFtZSwgcGFyYW1Gcm9tLCBwYXJhbVRvLCBvd25lciwgZm9ybWF0LCBmb3JtYXRGcm9tLCBmb3JtYXRUbywgZGlzYWJsZUZ1dHVyZVRvID0gdHJ1ZX0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCBtYXhEYXRlUHJvcHMgPSB7fTtcbiAgICAgICAgY29uc3QgbWluRGF0ZVByb3BzID0ge307XG4gICAgICAgIGlmICh2YWx1ZVRvKVxuICAgICAgICAgICAgbWF4RGF0ZVByb3BzLm1heERhdGUgPSB2YWx1ZVRvO1xuICAgICAgICBpZiAodmFsdWVGcm9tKVxuICAgICAgICAgICAgbWluRGF0ZVByb3BzLm1pbkRhdGUgPSB2YWx1ZUZyb207XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtaXRlbXMtbm8td3JhcFwiPlxuICAgICAgICAgICAgICAgIDxEZWZhdWx0RGF0ZVBpY2tlclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbkJvdHRvbTogMH19XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9e25hbWUgKyBcIiBmcm9tXCJ9XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtTmFtZT17cGFyYW1Gcm9tfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2VGcm9tLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVGdXR1cmU9eyF2YWx1ZVRvfVxuICAgICAgICAgICAgICAgICAgICBvd25lcj17b3duZXJ9XG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdD17Zm9ybWF0IHx8IGZvcm1hdEZyb219XG4gICAgICAgICAgICAgICAgICAgIHsuLi5tYXhEYXRlUHJvcHN9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8RGVmYXVsdERhdGVQaWNrZXJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5Cb3R0b206IDB9fVxuICAgICAgICAgICAgICAgICAgICBuYW1lPXtuYW1lICsgXCIgdG9cIn1cbiAgICAgICAgICAgICAgICAgICAgcGFyYW1OYW1lPXtwYXJhbVRvfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2VUby5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICBvd25lcj17b3duZXJ9XG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVGdXR1cmU9e2Rpc2FibGVGdXR1cmVUb31cbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0PXtmb3JtYXQgfHwgZm9ybWF0VG99XG4gICAgICAgICAgICAgICAgICAgIHsuLi5taW5EYXRlUHJvcHN9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICk7XG4gICAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIG93blByb3BzKSA9PiAoe1xuICAgIGVycm9yOiBzdGF0ZS5vd25lcltvd25Qcm9wcy5vd25lcl0uZXJyb3IsXG4gICAgZm9ybVBhcmFtczogc3RhdGUub3duZXJbb3duUHJvcHMub3duZXJdLmZvcm1QYXJhbXMsXG4gICAgZW50aXR5OiBzdGF0ZS5vd25lcltvd25Qcm9wcy5vd25lcl0uZW50aXR5XG59KTtcblxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoRGVmYXVsdERhdGVGcm9tVG8pIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgRGVmYXVsdFNlbGVjdEZpZWxkIGZyb20gXCIuLi9jb3JlL0RlZmF1bHRTZWxlY3RGaWVsZFwiO1xuaW1wb3J0IE11bHRpU2VsZWN0RmllbGQgZnJvbSBcIi4uL2NvcmUvTXVsdGlTZWxlY3RGaWVsZFwiO1xuXG5jb25zdCBJdGVtU3RhdHVzU2VsZWN0RmllbGQgPSAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lID0gXCJTdGF0dXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1OYW1lID0gXCJpdGVtU3RhdHVzXCIsIGVudGl0aWVzID0gXCJzdGF0dXNlc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHlMaW5rID0gZmFsc2UsIG11bHRpcGxlID0gZmFsc2UsIC4uLm90aGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIG11bHRpcGxlID9cbiAgICAgICAgICAgIDxNdWx0aVNlbGVjdEZpZWxkXG4gICAgICAgICAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgICAgICAgICBwYXJhbU5hbWU9e3BhcmFtTmFtZX1cbiAgICAgICAgICAgICAgICBzZWFyY2hhYmxlXG4gICAgICAgICAgICAgICAgZW50aXRpZXM9e2VudGl0aWVzfVxuICAgICAgICAgICAgICAgIGVudGl0eVZhbHVlPXtcIml0ZW1TdGF0dXNcIn1cbiAgICAgICAgICAgICAgICBlbnRpdHlLZXk9e1wiaXRlbVN0YXR1c1wifVxuICAgICAgICAgICAgICAgIGVudGl0eUxpbms9e2VudGl0eUxpbmt9XG4gICAgICAgICAgICAgICAgey4uLm90aGVyfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDpcbiAgICAgICAgICAgIDxEZWZhdWx0U2VsZWN0RmllbGRcbiAgICAgICAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgICAgICAgIHBhcmFtTmFtZT17cGFyYW1OYW1lfVxuICAgICAgICAgICAgICAgIGVudGl0aWVzPXtlbnRpdGllc31cbiAgICAgICAgICAgICAgICBsaXN0TGFiZWw9e1wiaXRlbVN0YXR1c1wifVxuICAgICAgICAgICAgICAgIGxpc3RLZXk9e1wiaXRlbVN0YXR1c1wifVxuICAgICAgICAgICAgICAgIGVudGl0eUxpbms9e2VudGl0eUxpbmt9XG4gICAgICAgICAgICAgICAgey4uLm90aGVyfVxuICAgICAgICAgICAgLz5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSXRlbVN0YXR1c1NlbGVjdEZpZWxkOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBNdWx0aVNlbGVjdEZpZWxkIGZyb20gXCIuLi9jb3JlL011bHRpU2VsZWN0RmllbGRcIjtcbmltcG9ydCBEZWZhdWx0U2VsZWN0RmllbGQgZnJvbSBcIi4uL2NvcmUvRGVmYXVsdFNlbGVjdEZpZWxkXCI7XG5cbmNvbnN0IFJldGFpbGVyU2VsZWN0RmllbGQgPSAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSA9IFwiUmV0YWlsZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtTmFtZSA9IFwicmV0YWlsZXJcIiwgZW50aXRpZXMgPSBcInJldGFpbGVyc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5TGluayA9IHRydWUsIG11bHRpcGxlID0gZmFsc2UsIC4uLm90aGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICBtdWx0aXBsZSA/XG4gICAgICAgICAgICA8TXVsdGlTZWxlY3RGaWVsZFxuICAgICAgICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgICAgICAgcGFyYW1OYW1lPXtwYXJhbU5hbWV9XG4gICAgICAgICAgICAgICAgc2VhcmNoYWJsZVxuICAgICAgICAgICAgICAgIGVudGl0aWVzPXtlbnRpdGllc31cbiAgICAgICAgICAgICAgICBlbnRpdHlWYWx1ZT17XCJzaG9ydE5hbWVcIn1cbiAgICAgICAgICAgICAgICBlbnRpdHlMaW5rPXtlbnRpdHlMaW5rfVxuICAgICAgICAgICAgICAgIHsuLi5vdGhlcn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA6XG4gICAgICAgICAgICA8RGVmYXVsdFNlbGVjdEZpZWxkXG4gICAgICAgICAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgICAgICAgICBwYXJhbU5hbWU9e3BhcmFtTmFtZX1cbiAgICAgICAgICAgICAgICBlbnRpdGllcz17ZW50aXRpZXN9XG4gICAgICAgICAgICAgICAgbGlzdExhYmVsPXtcInNob3J0TmFtZVwifVxuICAgICAgICAgICAgICAgIGVudGl0eUxpbms9e2VudGl0eUxpbmt9XG4gICAgICAgICAgICAgICAgey4uLm90aGVyfVxuICAgICAgICAgICAgLz5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmV0YWlsZXJTZWxlY3RGaWVsZDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBNdWx0aVNlbGVjdEZpZWxkIGZyb20gXCIuLi9jb3JlL011bHRpU2VsZWN0RmllbGRcIjtcbmltcG9ydCBEZWZhdWx0U2VsZWN0RmllbGQgZnJvbSBcIi4uL2NvcmUvRGVmYXVsdFNlbGVjdEZpZWxkXCI7XG5cbmNvbnN0IFdob2xlc2FsZXJTZWxlY3RGaWVsZCA9ICh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgPSBcIldob2xlc2FsZXJcIiwgcGFyYW1OYW1lID0gXCJ3aG9sZXNhbGVyXCIsIGVudGl0aWVzID0gXCJ3aG9sZXNhbGVyc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHlMaW5rID0gdHJ1ZSwgbXVsdGlwbGUgPSBmYWxzZSwgLi4ub3RoZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgbXVsdGlwbGUgP1xuICAgICAgICAgICAgPE11bHRpU2VsZWN0RmllbGRcbiAgICAgICAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgICAgICAgIHBhcmFtTmFtZT17cGFyYW1OYW1lfVxuICAgICAgICAgICAgICAgIHNlYXJjaGFibGVcbiAgICAgICAgICAgICAgICBlbnRpdGllcz17ZW50aXRpZXN9XG4gICAgICAgICAgICAgICAgZW50aXR5VmFsdWU9e1wic2hvcnROYW1lXCJ9XG4gICAgICAgICAgICAgICAgZW50aXR5TGluaz17ZW50aXR5TGlua31cbiAgICAgICAgICAgICAgICB7Li4ub3RoZXJ9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgOlxuICAgICAgICAgICAgPERlZmF1bHRTZWxlY3RGaWVsZFxuICAgICAgICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgICAgICAgZW50aXRpZXM9e2VudGl0aWVzfVxuICAgICAgICAgICAgICAgIHBhcmFtTmFtZT17cGFyYW1OYW1lfVxuICAgICAgICAgICAgICAgIGxpc3RMYWJlbD17XCJzaG9ydE5hbWVcIn1cbiAgICAgICAgICAgICAgICBlbnRpdHlMaW5rPXtlbnRpdHlMaW5rfVxuICAgICAgICAgICAgICAgIHsuLi5vdGhlcn1cbiAgICAgICAgICAgIC8+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFdob2xlc2FsZXJTZWxlY3RGaWVsZDsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTWFudWZhY3R1cmVyU2VsZWN0RmllbGQgZnJvbSBcIi4uL2NvbXBvbmVudHMvc2VsZWN0L01hbnVmYWN0dXJlclNlbGVjdEZpZWxkXCI7XG5pbXBvcnQgQ2VudHJhbFdhcmVob3VzZVNlbGVjdEZpZWxkIGZyb20gXCIuLi9jb21wb25lbnRzL3NlbGVjdC9DZW50cmFsV2FyZWhvdXNlU2VsZWN0RmllbGRcIjtcbmltcG9ydCBSZXRhaWxlclNlbGVjdEZpZWxkIGZyb20gXCIuLi9jb21wb25lbnRzL3NlbGVjdC9SZXRhaWxlclNlbGVjdEZpZWxkXCI7XG5pbXBvcnQgV2hvbGVzYWxlclNlbGVjdEZpZWxkIGZyb20gXCIuLi9jb21wb25lbnRzL3NlbGVjdC9XaG9sZXNhbGVyU2VsZWN0RmllbGRcIjtcblxuZXhwb3J0IGNvbnN0IG1vZHVsZVR5cGVzID0geyBcbiAgICBNQU5VRkFDVFVSRVI6IHt0aXRsZTogXCJNYW51ZmFjdHVyZXJcIiwgc2VsZWN0OiA8TWFudWZhY3R1cmVyU2VsZWN0RmllbGQvPn0sXG4gICAgQ0VOVFJBTF9XQVJFSE9VU0U6IHt0aXRsZTogXCJDZW50cmFsIFdhcmVob3VzZVwiLCBzZWxlY3Q6IDxDZW50cmFsV2FyZWhvdXNlU2VsZWN0RmllbGQvPn0sXG4gICAgUkVUQUlMRVI6IHt0aXRsZTogXCJSZXRhaWxlclwiLCBzZWxlY3Q6IDxSZXRhaWxlclNlbGVjdEZpZWxkLz59LFxuICAgIFdIT0xFU0FMRVI6IHt0aXRsZTogXCJXaG9sZXNhbGVyXCIsIHNlbGVjdDogPFdob2xlc2FsZXJTZWxlY3RGaWVsZC8+fVxufTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQge2JpbmRBY3Rpb25DcmVhdG9yc30gZnJvbSAncmVkdXgnO1xuaW1wb3J0ICogYXMgYWN0aW9uQ3JlYXRvcnMgZnJvbSBcIi4uLy4uLy4uL2FjdGlvbnMvaW5kZXhPd25lclwiO1xuaW1wb3J0IERlc2lnbkZpbHRlciBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9jb3JlL0Rlc2lnbkZpbHRlclwiO1xuaW1wb3J0IERlZmF1bHRUZXh0RmllbGQgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvY29yZS9EZWZhdWx0VGV4dEZpZWxkXCI7XG5pbXBvcnQgSXRlbVN0YXR1c1NlbGVjdEZpZWxkIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL3NlbGVjdC9JdGVtU3RhdHVzU2VsZWN0RmllbGRcIjtcbmltcG9ydCBEZWZhdWx0RGF0ZUZyb21UbyBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9jb3JlL0RlZmF1bHREYXRlRnJvbVRvXCI7XG5pbXBvcnQge21vZHVsZVR5cGVzfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvY29uc3RzXCI7XG5pbXBvcnQgTWFudWZhY3R1cmVyU2VsZWN0RmllbGQgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvc2VsZWN0L01hbnVmYWN0dXJlclNlbGVjdEZpZWxkXCI7XG5pbXBvcnQgRGVmYXVsdEFzeW5jU2VsZWN0IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2NvcmUvRGVmYXVsdEFzeW5jU2VsZWN0XCI7XG5pbXBvcnQgRGVmYXVsdFNlbGVjdEZpZWxkIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2NvcmUvRGVmYXVsdFNlbGVjdEZpZWxkXCI7XG5pbXBvcnQgRGVmYXVsdENoZWNrQm94IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2NvcmUvRGVmYXVsdENoZWNrQm94XCI7XG5cbmNsYXNzIERhc2hib2FyZEl0ZW1MaXN0RmlsdGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgdHlwZTogbnVsbFxuICAgIH1cblxuICAgIHJlbmRlckVsZW1lbnRGaWx0ZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtaXRlbXMtc3RhcnRcIiBzdHlsZT17e21hcmdpbkJvdHRvbTogOH19PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1pdGVtcy1jb2x1bW5cIiBzdHlsZT17e21hcmdpblJpZ2h0OiAxNiwgd2lkdGg6IDQwMH19PlxuICAgICAgICAgICAgICAgICAgICA8TWFudWZhY3R1cmVyU2VsZWN0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luQm90dG9tOiAwLCBtYXJnaW5Ub3A6IDAsIHdpZHRoOiA0MDB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGVcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJNYW51ZmFjdHVyZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1OYW1lPVwibWFudWZhY3R1cmVyLmlkOmluXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyPXt0aGlzLnByb3BzLm93bmVyICsgXCJGaWx0ZXJcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eUxpbms9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8SXRlbVN0YXR1c1NlbGVjdEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbkJvdHRvbTogMCwgd2lkdGg6IDQwMH19XG4gICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsZVxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtbe2l0ZW1TdGF0dXM6IFwiUkVDRUlWRURcIn0sIHtpdGVtU3RhdHVzOiBcIkFEREVEXCJ9LCB7aXRlbVN0YXR1czogXCJSRVRVUk5FRFwifV19XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbU5hbWU9XCJsYXN0VHJhY2suaXRlbVN0YXR1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lcj17dGhpcy5wcm9wcy5vd25lciArIFwiRmlsdGVyXCJ9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxEZWZhdWx0QXN5bmNTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luQm90dG9tOiAwLCB3aWR0aDogNDAwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbj17XCJub25lXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw9e1wiaXRlbXMvZGlzdGluY3REcnVnTmFtZXNcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eUxpbms9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgc2ltcGxlXG4gICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsZVxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIkRydWcgTmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbU5hbWU9XCJkcnVnTmFtZTppblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lcj17dGhpcy5wcm9wcy5vd25lciArIFwiRmlsdGVyXCJ9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxEZWZhdWx0QXN5bmNTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luQm90dG9tOiAwLCB3aWR0aDogNDAwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbj17XCJub25lXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw9e1wiaXRlbXMvZGlzdGluY3RJbm5zXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHlMaW5rPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNpbXBsZVxuICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGVcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJJTk5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1OYW1lPVwiaW5uOmluXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyPXt0aGlzLnByb3BzLm93bmVyICsgXCJGaWx0ZXJcIn1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPERlZmF1bHRBc3luY1NlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5Cb3R0b206IDAsIHdpZHRoOiA0MDB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luPXtcIm5vbmVcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHVybD17XCJpdGVtcy9kaXN0aW5jdElkc1wifVxuICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5TGluaz17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBzaW1wbGVcbiAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxlXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiTVhUIElEXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtTmFtZT1cImlkOmluXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyPXt0aGlzLnByb3BzLm93bmVyICsgXCJGaWx0ZXJcIn1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAge21vZHVsZVR5cGVzW3RoaXMucHJvcHMudHlwZV0gIT09IG1vZHVsZVR5cGVzLk1BTlVGQUNUVVJFUiAmJlxuICAgICAgICAgICAgICAgICAgICA8RGVmYXVsdFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5Cb3R0b206IDgsIHdpZHRoOiA0MDB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luPXtcIm5vbmVcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJRUiBjb2RlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtTmFtZT1cInFyQ29kZTpzdGFydHNXaXRoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyPXt0aGlzLnByb3BzLm93bmVyICsgXCJGaWx0ZXJcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uS2V5UHJlc3M9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyLmZpbHRlci5zZWFyY2goKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAvPn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtaXRlbXMtY29sdW1uXCIgc3R5bGU9e3ttYXJnaW5SaWdodDogMTZ9fT5cbiAgICAgICAgICAgICAgICAgICAgPERlZmF1bHREYXRlRnJvbVRvXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtcIk1hbnVmYWN0dXJlZCBkYXRlXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbUZyb209e1wibWFudWZhY3R1cmVkRGF0ZTpkZ29lXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbVRvPXtcIm1hbnVmYWN0dXJlZERhdGU6ZGxvZVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXI9e3RoaXMucHJvcHMub3duZXIgKyBcIkZpbHRlclwifVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8RGVmYXVsdERhdGVGcm9tVG9cbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e1wiRXhwaXJhdGlvbiBkYXRlXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbUZyb209e1wiZXhwaXJhdGlvbkRhdGU6ZGdvZVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1Ubz17XCJleHBpcmF0aW9uRGF0ZTpkbG9lXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlRnV0dXJlVG89e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXI9e3RoaXMucHJvcHMub3duZXIgKyBcIkZpbHRlclwifVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8RGVmYXVsdERhdGVGcm9tVG9cbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e1wiRGF0ZSBhZGRlZFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0RnJvbT17XCJZWVlZLU1NLUREVDAwOjAwOjAwXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXRUbz17XCJZWVlZLU1NLUREVDIzOjU5OjU5XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbUZyb209e1wiZGF0ZUFkZGVkOmRnb2VcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtVG89e1wiZGF0ZUFkZGVkOmRsb2VcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyPXt0aGlzLnByb3BzLm93bmVyICsgXCJGaWx0ZXJcIn1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPERlZmF1bHREYXRlRnJvbVRvXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtcIkRhdGUgcmVjZWl2ZWRcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdEZyb209e1wiWVlZWS1NTS1ERFQwMDowMDowMFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0VG89e1wiWVlZWS1NTS1ERFQyMzo1OTo1OVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1Gcm9tPXtcImxhc3RUcmFjay5kYXRlOmRnb2VcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtVG89e1wibGFzdFRyYWNrLmRhdGU6ZGxvZVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXI9e3RoaXMucHJvcHMub3duZXIgKyBcIkZpbHRlclwifVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8RGVmYXVsdERhdGVGcm9tVG9cbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e1wiRGF0ZSBzZW50XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXRGcm9tPXtcIllZWVktTU0tRERUMDA6MDA6MDBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdFRvPXtcIllZWVktTU0tRERUMjM6NTk6NTlcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtRnJvbT17XCJzZW50RGF0ZTpkZ29lXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbVRvPXtcInNlbnREYXRlOmRsb2VcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyPXt0aGlzLnByb3BzLm93bmVyICsgXCJGaWx0ZXJcIn1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMudHlwZSAmJiBtb2R1bGVUeXBlc1t0aGlzLnByb3BzLnR5cGVdICE9PSBtb2R1bGVUeXBlcy5SRVRBSUxFUlxuICAgICAgICAgICAgICAgICAgICAgICAgPyBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICA6IDxEZWZhdWx0RGF0ZUZyb21Ub1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e1wiRGF0ZSBvZiBwdXJjaGFzZVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdEZyb209e1wiWVlZWS1NTS1ERFQwMDowMDowMFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdFRvPXtcIllZWVktTU0tRERUMjM6NTk6NTlcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbUZyb209e1wicHVyY2hhc2VEYXRlOmRnb2VcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbVRvPXtcInB1cmNoYXNlRGF0ZTpkbG9lXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3duZXI9e3RoaXMucHJvcHMub3duZXIgKyBcIkZpbHRlclwifVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1pdGVtcy1jb2x1bW5cIiBzdHlsZT17e21hcmdpblJpZ2h0OiAxNn19PlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy50eXBlID9cbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNsb25lRWxlbWVudChtb2R1bGVUeXBlc1t0aGlzLnByb3BzLnR5cGVdLnNlbGVjdCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7bWFyZ2luQm90dG9tOiA4LCBtYXJnaW5Ub3A6IDB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJGYWNpbGl0eVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtTmFtZTogXCJsYXN0VHJhY2subG9jYXRpb24uaWQ6aW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHlMaW5rOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvd25lcjogdGhpcy5wcm9wcy5vd25lciArIFwiRmlsdGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtaXRlbXMtbm8td3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8RGVmYXVsdFNlbGVjdEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlcz17e21hcmdpbkJvdHRvbTogOH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RWYWx1ZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhtb2R1bGVUeXBlcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW49e1wibm9uZVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHlMaW5rPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2ltcGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e1wiRmFjaWxpdHkgVHlwZVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZVZhbHVlPXsodmFsKSA9PiB0aGlzLnNldFN0YXRlKHt0eXBlOiB2YWx9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1OYW1lPXtcImxhc3RUcmFjay5sb2NhdGlvbi53YXJlaG91c2VUeXBlXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyPXt0aGlzLnByb3BzLm93bmVyICsgXCJGaWx0ZXJcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS50eXBlICYmIFJlYWN0LmNsb25lRWxlbWVudChtb2R1bGVUeXBlc1t0aGlzLnN0YXRlLnR5cGVdLnNlbGVjdCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge21hcmdpbkJvdHRvbTogOCwgbWFyZ2luVG9wOiAwfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtTmFtZTogXCJsYXN0VHJhY2subG9jYXRpb24uaWQ6aW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5TGluazogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyOiB0aGlzLnByb3BzLm93bmVyICsgXCJGaWx0ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPERlZmF1bHRDaGVja0JveFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17XCJTaG93IGRlbGV0ZWRcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtTmFtZT1cImVuYWJsZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmVnYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lcj17dGhpcy5wcm9wcy5vd25lciArIFwiRmlsdGVyXCJ9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPERlc2lnbkZpbHRlclxuICAgICAgICAgICAgICAgIG9uUmVmPXtyZWYgPT4gKHRoaXMuZmlsdGVyID0gcmVmKX1cbiAgICAgICAgICAgICAgICBlbGVtZW50RmlsdGVyPXt0aGlzLnJlbmRlckVsZW1lbnRGaWx0ZXIoKX1cbiAgICAgICAgICAgICAgICBvd25lcj17dGhpcy5wcm9wcy5vd25lciArIFwiRmlsdGVyXCJ9XG4gICAgICAgICAgICAgICAgbGlzdE93bmVyPXt0aGlzLnByb3BzLm93bmVyfVxuICAgICAgICAgICAgICAgIGVudGl0aWVzPXsnaXRlbXMnfVxuICAgICAgICAgICAgICAgIHByb2plY3Rpb25zPVwibGlzdFwiXG4gICAgICAgICAgICAgICAgZ2V0UHJvcHM9e3tcbiAgICAgICAgICAgICAgICAgICAgXCJtYW51ZmFjdHVyZXIuaWQ6aW5cIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgXCJxckNvZGU6c3RhcnRzV2l0aFwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBcImRydWdOYW1lOmluXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiaW5uOmluXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibGFzdFRyYWNrLml0ZW1TdGF0dXNcIjogdGhpcy5wcm9wcy5zdGF0dXNlcyB8fCBbXCJBRERFRFwiLCBcIlJFQ0VJVkVEXCJdLFxuICAgICAgICAgICAgICAgICAgICBcImV4cGlyYXRpb25EYXRlOmRnb2VcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgXCJleHBpcmF0aW9uRGF0ZTpkbG9lXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFwibWFudWZhY3R1cmVkRGF0ZTpkZ29lXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFwibWFudWZhY3R1cmVkRGF0ZTpkbG9lXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFwic2VudERhdGU6ZGdvZVwiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBcInNlbnREYXRlOmRsb2VcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgXCJkYXRlQWRkZWQ6ZGdvZVwiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBcImRhdGVBZGRlZDpkbG9lXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFwibGFzdFRyYWNrLmRhdGU6ZGdvZVwiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBcImxhc3RUcmFjay5kYXRlOmRsb2VcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgXCJwdXJjaGFzZURhdGU6ZGdvZVwiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBcInB1cmNoYXNlRGF0ZTpkbG9lXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFwibGFzdFRyYWNrLmxvY2F0aW9uLmlkOmluXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFwibGFzdFRyYWNrLmxvY2F0aW9uLndhcmVob3VzZVR5cGVcIjogdGhpcy5wcm9wcy50eXBlLFxuICAgICAgICAgICAgICAgICAgICBcImVuYWJsZWRcIjogdHJ1ZVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgIH07XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgb3duUHJvcHMpID0+ICh7XG4gICAgZXJyb3I6ICEhc3RhdGUub3duZXJbb3duUHJvcHMub3duZXJdID8gc3RhdGUub3duZXJbb3duUHJvcHMub3duZXJdLnN0YXRlLmVycm9yTGlzdCA6IG51bGxcbn0pO1xuXG4vLyBub2luc3BlY3Rpb24gSlNVbnJlc29sdmVkRnVuY3Rpb25cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XG4gICAgb3duZXJBY3Rpb25zOiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWN0aW9uQ3JlYXRvcnMsIGRpc3BhdGNoKVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKERhc2hib2FyZEl0ZW1MaXN0RmlsdGVyKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=