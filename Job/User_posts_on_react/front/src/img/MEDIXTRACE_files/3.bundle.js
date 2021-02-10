(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./src/components/core/DefaultSelectField.js":
/*!***************************************************!*\
  !*** ./src/components/core/DefaultSelectField.js ***!
  \***************************************************/
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
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/esm/Select/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _actions_indexOwner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../actions/indexOwner */ "./src/actions/indexOwner.ts");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _utils_string__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../utils/string */ "./src/utils/string.js");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/index.js");
/* harmony import */ var _material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/FormHelperText */ "./node_modules/@material-ui/core/esm/FormHelperText/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _utils_componentValueUtils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./utils/componentValueUtils */ "./src/components/core/utils/componentValueUtils.js");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }














/**
 * Default Select Field
 *
 * Properties
 *
 * owner - owner of this components
 * entities - entities for load
 * loadUrl - url for load, default value from entities
 * name - name of select on web-interface
 * paramName - key for saving in store
 * value - value of select field
 * entityKey - key for field with ID, default: id
 * entityValue - key for field with Name, default: name
 * projection - projection for http request , default: select
 * entityLink - save in formParams link, default: true
 * requestParams - params for request retrieving data
 * onChangeValue - fire on change value
 * onChangeFullValue - fire on change value
 *
 */

var DefaultSelectField = /*#__PURE__*/function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(DefaultSelectField, _React$Component);

  var _super = _createSuper(DefaultSelectField);

  function DefaultSelectField(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, DefaultSelectField);

    _this = _super.call(this, props);
    _this.state = {
      list: null,
      error: null,
      value: _this.props.value ? _this.props.value : _this.props.multiple ? [] : null,
      defaultValue: _this.props.defaultValue ? _this.props.defaultValue : _this.props.multiple ? [] : null
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(DefaultSelectField, [{
    key: "UNSAFE_componentWillMount",
    value: function UNSAFE_componentWillMount() {
      if (this.props.entity && Object(lodash__WEBPACK_IMPORTED_MODULE_16__["has"])(this.props.entity, this.props.paramName)) {
        var _this$props$listKey = this.props.listKey,
            listKey = _this$props$listKey === void 0 ? "id" : _this$props$listKey;
        var paramValue = Object(lodash__WEBPACK_IMPORTED_MODULE_16__["get"])(this.props.entity, this.props.paramName);
        this.setValue(Object(lodash__WEBPACK_IMPORTED_MODULE_16__["has"])(paramValue, listKey) ? paramValue[listKey] : paramValue);
      }

      this.setValue(Object(_utils_componentValueUtils__WEBPACK_IMPORTED_MODULE_17__["getFormParamValue"])(this.props, this.props.paramName, this.state.value));

      if (this.props.entities || this.props.loadUrl) {
        this.props.isAdminDashboard ? this.props.actions.getAllFacilities(this.props.owner, this.props.entities) : this.props.actions.getEntityListAll(!!this.props.loadUrl ? this.props.loadUrl : this.props.entities, this.state.projection, this.props.owner, this.props.entities, this.props.requestParams);
      }

      if (this.props.listValue && this.props.listValue !== this.props.list) {
        if (this.props.customParser) this.setState({
          list: this.props.customParser(this.props.listValue)
        });else this.setState({
          list: this.props.listValue
        });
      }
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      if (nextProps.entity && Object(lodash__WEBPACK_IMPORTED_MODULE_16__["has"])(nextProps.entity, this.props.paramName)) {
        var listKey = this.props.listKey;
        var paramValue = Object(lodash__WEBPACK_IMPORTED_MODULE_16__["get"])(nextProps.entity, this.props.paramName);
        this.setValue(Object(lodash__WEBPACK_IMPORTED_MODULE_16__["has"])(paramValue, listKey) ? paramValue[listKey] : paramValue);
      }

      if (Object(_utils_componentValueUtils__WEBPACK_IMPORTED_MODULE_17__["isValueNull"])(nextProps.formParams, this.props.paramName)) this.setValue(null);

      if (nextProps.list !== this.props.list && !!this.props.customParser) {
        this.setState({
          list: this.props.customParser(nextProps.list)
        });
      } else if (nextProps.list !== this.props.list) {
        this.setState({
          list: nextProps.list
        });
      }

      if (nextProps.value !== this.props.value) {
        this.setValue(nextProps.value);
      }

      if (!Object(lodash__WEBPACK_IMPORTED_MODULE_16__["get"])(nextProps.formParams, this.props.paramName, null) && !!this.state.defaultValue) {
        this.setValue(this.state.defaultValue);
      }
    }
  }, {
    key: "parseArray",
    value: function parseArray(array) {
      if (!Array.isArray(array)) return array;
      var _this$props = this.props,
          simple = _this$props.simple,
          listKey = _this$props.listKey,
          listLabel = _this$props.listLabel;
      var itemsArr = [];
      if (!this.props.multiple) itemsArr.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
        value: null,
        key: null
      }));
      array.map(function (el, index) {
        var elem = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
          id: "SelectItem_" + Object(_utils_string__WEBPACK_IMPORTED_MODULE_13__["cleanSpaces"])(simple ? el : el[listLabel]),
          key: index,
          value: simple ? el : el[listKey]
        }, simple ? el : el[listLabel]);
        itemsArr.push(elem);
      });
      return itemsArr;
    }
  }, {
    key: "handleChange",
    value: function handleChange(event) {
      this.setValue(event.target.value);
    }
  }, {
    key: "setValue",
    value: function setValue(value) {
      var _this2 = this;

      if (Object(lodash__WEBPACK_IMPORTED_MODULE_16__["isEqual"])(value, this.state.value)) return;
      this.setState({
        value: value
      });

      if (this.props.entityLink) {
        this.props.formParams[this.props.paramName] = !!value ? this.props.multiple ? value.map(function (el) {
          return _this2.props.entities + "/" + el;
        }) : this.props.entities + "/" + value : null;
      } else {
        this.props.formParams[this.props.paramName] = !!value ? value : null;
      }

      if (this.props.onChange) {
        this.props.onChange(value);
      }

      if (this.props.onChangeValue) {
        this.props.onChangeValue(value);
      }

      if (this.props.onChangeFullValue) {
        this.props.onChangeFullValue(this.props.formParams[this.props.paramName]);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          name = _this$props2.name,
          margin = _this$props2.margin,
          helperText = _this$props2.helperText,
          disabled = _this$props2.disabled,
          fullWidth = _this$props2.fullWidth,
          styles = _this$props2.styles,
          required = _this$props2.required,
          _this$props2$errorTex = _this$props2.errorText,
          errorText = _this$props2$errorTex === void 0 ? Object(_utils_validator__WEBPACK_IMPORTED_MODULE_7__["validate"])(this.props.paramName, this.props.error).message : _this$props2$errorTex;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_12__["default"], {
        id: "SelectField_" + Object(_utils_string__WEBPACK_IMPORTED_MODULE_13__["cleanSpaces"])(name),
        error: !!errorText,
        disabled: disabled,
        style: styles,
        margin: margin,
        fullWidth: fullWidth,
        required: required
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_14__["default"], {
        htmlFor: "select"
      }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_9__["default"], {
        id: "SelectField_" + Object(_utils_string__WEBPACK_IMPORTED_MODULE_13__["cleanSpaces"])(name) + "_Input",
        style: {
          minWidth: 176
        },
        value: this.state.value || this.state.value === 0 ? this.state.value : '',
        multiple: this.props.multiple,
        onChange: this.handleChange.bind(this),
        MenuProps: {
          disableScrollLock: true
        }
      }, this.parseArray(this.state.list)), !!errorText || !!helperText ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_15__["default"], null, errorText ? errorText : helperText) : null);
    }
  }]);

  return DefaultSelectField;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    error: state.owner[ownProps.owner].error,
    formParams: state.owner[ownProps.owner].formParams,
    entity: state.owner[ownProps.owner].entity,
    list: state.owner[ownProps.owner].stateElements[ownProps.entities]
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux__WEBPACK_IMPORTED_MODULE_8__["bindActionCreators"])(_actions_indexOwner__WEBPACK_IMPORTED_MODULE_11__, dispatch)
  };
};

DefaultSelectField.defaultProps = {
  listKey: "id",
  listLabel: "name",
  entityLink: true,
  margin: "normal",
  fullWidth: false,
  projection: "select"
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, mapDispatchToProps)(DefaultSelectField));

/***/ }),

/***/ "./src/components/select/ManufacturerSelectField.js":
/*!**********************************************************!*\
  !*** ./src/components/select/ManufacturerSelectField.js ***!
  \**********************************************************/
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






var ManufacturerSelectField = function ManufacturerSelectField(_ref) {
  var _ref$name = _ref.name,
      name = _ref$name === void 0 ? "Manufacturer" : _ref$name,
      _ref$paramName = _ref.paramName,
      paramName = _ref$paramName === void 0 ? "manufacturer" : _ref$paramName,
      _ref$entities = _ref.entities,
      entities = _ref$entities === void 0 ? "manufacturers" : _ref$entities,
      _ref$entityLink = _ref.entityLink,
      entityLink = _ref$entityLink === void 0 ? true : _ref$entityLink,
      _ref$multiple = _ref.multiple,
      multiple = _ref$multiple === void 0 ? false : _ref$multiple,
      other = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["name", "paramName", "entities", "entityLink", "multiple"]);

  return multiple ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_core_MultiSelectField__WEBPACK_IMPORTED_MODULE_4__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    name: name,
    paramName: paramName,
    searchable: true,
    entities: entities,
    entityValue: "shortName",
    entityLink: entityLink
  }, other)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_core_DefaultSelectField__WEBPACK_IMPORTED_MODULE_3__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    name: name,
    paramName: paramName,
    entities: entities,
    listLabel: "shortName",
    entityLink: entityLink
  }, other));
};

/* harmony default export */ __webpack_exports__["default"] = (ManufacturerSelectField);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb3JlL0RlZmF1bHRTZWxlY3RGaWVsZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zZWxlY3QvTWFudWZhY3R1cmVyU2VsZWN0RmllbGQuanMiXSwibmFtZXMiOlsiRGVmYXVsdFNlbGVjdEZpZWxkIiwicHJvcHMiLCJzdGF0ZSIsImxpc3QiLCJlcnJvciIsInZhbHVlIiwibXVsdGlwbGUiLCJkZWZhdWx0VmFsdWUiLCJlbnRpdHkiLCJoYXMiLCJwYXJhbU5hbWUiLCJsaXN0S2V5IiwicGFyYW1WYWx1ZSIsImdldCIsInNldFZhbHVlIiwiZ2V0Rm9ybVBhcmFtVmFsdWUiLCJlbnRpdGllcyIsImxvYWRVcmwiLCJpc0FkbWluRGFzaGJvYXJkIiwiYWN0aW9ucyIsImdldEFsbEZhY2lsaXRpZXMiLCJvd25lciIsImdldEVudGl0eUxpc3RBbGwiLCJwcm9qZWN0aW9uIiwicmVxdWVzdFBhcmFtcyIsImxpc3RWYWx1ZSIsImN1c3RvbVBhcnNlciIsInNldFN0YXRlIiwibmV4dFByb3BzIiwiaXNWYWx1ZU51bGwiLCJmb3JtUGFyYW1zIiwiYXJyYXkiLCJBcnJheSIsImlzQXJyYXkiLCJzaW1wbGUiLCJsaXN0TGFiZWwiLCJpdGVtc0FyciIsInB1c2giLCJtYXAiLCJlbCIsImluZGV4IiwiZWxlbSIsImNsZWFuU3BhY2VzIiwiZXZlbnQiLCJ0YXJnZXQiLCJpc0VxdWFsIiwiZW50aXR5TGluayIsIm9uQ2hhbmdlIiwib25DaGFuZ2VWYWx1ZSIsIm9uQ2hhbmdlRnVsbFZhbHVlIiwibmFtZSIsIm1hcmdpbiIsImhlbHBlclRleHQiLCJkaXNhYmxlZCIsImZ1bGxXaWR0aCIsInN0eWxlcyIsInJlcXVpcmVkIiwiZXJyb3JUZXh0IiwidmFsaWRhdGUiLCJtZXNzYWdlIiwibWluV2lkdGgiLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwiZGlzYWJsZVNjcm9sbExvY2siLCJwYXJzZUFycmF5IiwiUmVhY3QiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJvd25Qcm9wcyIsInN0YXRlRWxlbWVudHMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImJpbmRBY3Rpb25DcmVhdG9ycyIsImFjdGlvbkNyZWF0b3JzIiwiZGVmYXVsdFByb3BzIiwiY29ubmVjdCIsIk1hbnVmYWN0dXJlclNlbGVjdEZpZWxkIiwib3RoZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRU1BLGtCOzs7OztBQUVGLDhCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47QUFFQSxVQUFLQyxLQUFMLEdBQWE7QUFDVEMsVUFBSSxFQUFFLElBREc7QUFFVEMsV0FBSyxFQUFFLElBRkU7QUFHVEMsV0FBSyxFQUFFLE1BQUtKLEtBQUwsQ0FBV0ksS0FBWCxHQUFtQixNQUFLSixLQUFMLENBQVdJLEtBQTlCLEdBQXNDLE1BQUtKLEtBQUwsQ0FBV0ssUUFBWCxHQUFzQixFQUF0QixHQUEyQixJQUgvRDtBQUlUQyxrQkFBWSxFQUFFLE1BQUtOLEtBQUwsQ0FBV00sWUFBWCxHQUEwQixNQUFLTixLQUFMLENBQVdNLFlBQXJDLEdBQW9ELE1BQUtOLEtBQUwsQ0FBV0ssUUFBWCxHQUFzQixFQUF0QixHQUEyQjtBQUpwRixLQUFiO0FBSGU7QUFTbEI7Ozs7Z0RBRTJCO0FBQ3hCLFVBQUksS0FBS0wsS0FBTCxDQUFXTyxNQUFYLElBQXFCQyxtREFBRyxDQUFDLEtBQUtSLEtBQUwsQ0FBV08sTUFBWixFQUFvQixLQUFLUCxLQUFMLENBQVdT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QURpQnhDLFFBQ2pCO0FBQUEsTUFEaUJBLFFBQ2pCLDhCQUQ0QixLQUM1QjtBQUFBLE1BRHNDdUUsS0FDdEM7O0FBQ25DLFNBQ0l2RSxRQUFRLGdCQUNKLDJEQUFDLDhEQUFEO0FBQ0ksUUFBSSxFQUFFNEMsSUFEVjtBQUVJLGFBQVMsRUFBRXhDLFNBRmY7QUFHSSxjQUFVLE1BSGQ7QUFJSSxZQUFRLEVBQUVNLFFBSmQ7QUFLSSxlQUFXLEVBQUUsV0FMakI7QUFNSSxjQUFVLEVBQUU4QjtBQU5oQixLQU9RK0IsS0FQUixFQURJLGdCQVdKLDJEQUFDLGdFQUFEO0FBQ0ksUUFBSSxFQUFFM0IsSUFEVjtBQUVJLGFBQVMsRUFBRXhDLFNBRmY7QUFHSSxZQUFRLEVBQUVNLFFBSGQ7QUFJSSxhQUFTLEVBQUUsV0FKZjtBQUtJLGNBQVUsRUFBRThCO0FBTGhCLEtBTVErQixLQU5SLEVBWlI7QUFxQkgsQ0ExQkQ7O0FBNEJlRCxzRkFBZixFIiwiZmlsZSI6IjMuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7dmFsaWRhdGV9IGZyb20gXCIuLi8uLi91dGlscy92YWxpZGF0b3JcIjtcbmltcG9ydCB7YmluZEFjdGlvbkNyZWF0b3JzfSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCBTZWxlY3QgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1NlbGVjdFwiO1xuaW1wb3J0IE1lbnVJdGVtIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbVwiO1xuaW1wb3J0ICogYXMgYWN0aW9uQ3JlYXRvcnMgZnJvbSBcIi4uLy4uL2FjdGlvbnMvaW5kZXhPd25lclwiO1xuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbFwiO1xuaW1wb3J0IHtjbGVhblNwYWNlc30gZnJvbSBcIi4uLy4uL3V0aWxzL3N0cmluZ1wiO1xuaW1wb3J0IElucHV0TGFiZWwgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0lucHV0TGFiZWxcIjtcbmltcG9ydCBGb3JtSGVscGVyVGV4dCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUhlbHBlclRleHRcIjtcbmltcG9ydCB7Z2V0LCBoYXMsIGlzRXF1YWx9IGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCB7Z2V0Rm9ybVBhcmFtVmFsdWUsIGlzVmFsdWVOdWxsfSBmcm9tIFwiLi91dGlscy9jb21wb25lbnRWYWx1ZVV0aWxzXCI7XG5cbi8qKlxuICogRGVmYXVsdCBTZWxlY3QgRmllbGRcbiAqXG4gKiBQcm9wZXJ0aWVzXG4gKlxuICogb3duZXIgLSBvd25lciBvZiB0aGlzIGNvbXBvbmVudHNcbiAqIGVudGl0aWVzIC0gZW50aXRpZXMgZm9yIGxvYWRcbiAqIGxvYWRVcmwgLSB1cmwgZm9yIGxvYWQsIGRlZmF1bHQgdmFsdWUgZnJvbSBlbnRpdGllc1xuICogbmFtZSAtIG5hbWUgb2Ygc2VsZWN0IG9uIHdlYi1pbnRlcmZhY2VcbiAqIHBhcmFtTmFtZSAtIGtleSBmb3Igc2F2aW5nIGluIHN0b3JlXG4gKiB2YWx1ZSAtIHZhbHVlIG9mIHNlbGVjdCBmaWVsZFxuICogZW50aXR5S2V5IC0ga2V5IGZvciBmaWVsZCB3aXRoIElELCBkZWZhdWx0OiBpZFxuICogZW50aXR5VmFsdWUgLSBrZXkgZm9yIGZpZWxkIHdpdGggTmFtZSwgZGVmYXVsdDogbmFtZVxuICogcHJvamVjdGlvbiAtIHByb2plY3Rpb24gZm9yIGh0dHAgcmVxdWVzdCAsIGRlZmF1bHQ6IHNlbGVjdFxuICogZW50aXR5TGluayAtIHNhdmUgaW4gZm9ybVBhcmFtcyBsaW5rLCBkZWZhdWx0OiB0cnVlXG4gKiByZXF1ZXN0UGFyYW1zIC0gcGFyYW1zIGZvciByZXF1ZXN0IHJldHJpZXZpbmcgZGF0YVxuICogb25DaGFuZ2VWYWx1ZSAtIGZpcmUgb24gY2hhbmdlIHZhbHVlXG4gKiBvbkNoYW5nZUZ1bGxWYWx1ZSAtIGZpcmUgb24gY2hhbmdlIHZhbHVlXG4gKlxuICovXG5cbmNsYXNzIERlZmF1bHRTZWxlY3RGaWVsZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGxpc3Q6IG51bGwsXG4gICAgICAgICAgICBlcnJvcjogbnVsbCxcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLnByb3BzLnZhbHVlID8gdGhpcy5wcm9wcy52YWx1ZSA6IHRoaXMucHJvcHMubXVsdGlwbGUgPyBbXSA6IG51bGwsXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6IHRoaXMucHJvcHMuZGVmYXVsdFZhbHVlID8gdGhpcy5wcm9wcy5kZWZhdWx0VmFsdWUgOiB0aGlzLnByb3BzLm11bHRpcGxlID8gW10gOiBudWxsLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZW50aXR5ICYmIGhhcyh0aGlzLnByb3BzLmVudGl0eSwgdGhpcy5wcm9wcy5wYXJhbU5hbWUpKSB7XG4gICAgICAgICAgICBjb25zdCB7bGlzdEtleSA9IFwiaWRcIn0gPSB0aGlzLnByb3BzO1xuICAgICAgICAgICAgY29uc3QgcGFyYW1WYWx1ZSA9IGdldCh0aGlzLnByb3BzLmVudGl0eSwgdGhpcy5wcm9wcy5wYXJhbU5hbWUpO1xuICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZShoYXMocGFyYW1WYWx1ZSwgbGlzdEtleSkgPyBwYXJhbVZhbHVlW2xpc3RLZXldIDogcGFyYW1WYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRWYWx1ZShnZXRGb3JtUGFyYW1WYWx1ZSh0aGlzLnByb3BzLCB0aGlzLnByb3BzLnBhcmFtTmFtZSwgdGhpcy5zdGF0ZS52YWx1ZSkpXG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZW50aXRpZXMgfHwgdGhpcy5wcm9wcy5sb2FkVXJsKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmlzQWRtaW5EYXNoYm9hcmRcbiAgICAgICAgICAgICAgICA/IHRoaXMucHJvcHMuYWN0aW9ucy5nZXRBbGxGYWNpbGl0aWVzKHRoaXMucHJvcHMub3duZXIsIHRoaXMucHJvcHMuZW50aXRpZXMpXG4gICAgICAgICAgICAgICAgOiB0aGlzLnByb3BzLmFjdGlvbnMuZ2V0RW50aXR5TGlzdEFsbCghIXRoaXMucHJvcHMubG9hZFVybCA/IHRoaXMucHJvcHMubG9hZFVybCA6IHRoaXMucHJvcHMuZW50aXRpZXMsIHRoaXMuc3RhdGUucHJvamVjdGlvbiwgdGhpcy5wcm9wcy5vd25lciwgdGhpcy5wcm9wcy5lbnRpdGllcywgdGhpcy5wcm9wcy5yZXF1ZXN0UGFyYW1zKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMubGlzdFZhbHVlICYmIHRoaXMucHJvcHMubGlzdFZhbHVlICE9PSB0aGlzLnByb3BzLmxpc3QpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmN1c3RvbVBhcnNlcilcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtsaXN0OiB0aGlzLnByb3BzLmN1c3RvbVBhcnNlcih0aGlzLnByb3BzLmxpc3RWYWx1ZSl9KTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtsaXN0OiB0aGlzLnByb3BzLmxpc3RWYWx1ZX0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgaWYgKG5leHRQcm9wcy5lbnRpdHkgJiYgaGFzKG5leHRQcm9wcy5lbnRpdHksIHRoaXMucHJvcHMucGFyYW1OYW1lKSkge1xuICAgICAgICAgICAgY29uc3Qge2xpc3RLZXl9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgICAgIGNvbnN0IHBhcmFtVmFsdWUgPSBnZXQobmV4dFByb3BzLmVudGl0eSwgdGhpcy5wcm9wcy5wYXJhbU5hbWUpO1xuICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZShoYXMocGFyYW1WYWx1ZSwgbGlzdEtleSkgPyBwYXJhbVZhbHVlW2xpc3RLZXldIDogcGFyYW1WYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzVmFsdWVOdWxsKG5leHRQcm9wcy5mb3JtUGFyYW1zLCB0aGlzLnByb3BzLnBhcmFtTmFtZSkpXG4gICAgICAgICAgICB0aGlzLnNldFZhbHVlKG51bGwpO1xuXG4gICAgICAgIGlmIChuZXh0UHJvcHMubGlzdCAhPT0gdGhpcy5wcm9wcy5saXN0ICYmICEhdGhpcy5wcm9wcy5jdXN0b21QYXJzZXIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2xpc3Q6IHRoaXMucHJvcHMuY3VzdG9tUGFyc2VyKG5leHRQcm9wcy5saXN0KX0pO1xuICAgICAgICB9IGVsc2UgaWYgKG5leHRQcm9wcy5saXN0ICE9PSB0aGlzLnByb3BzLmxpc3QpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2xpc3Q6IG5leHRQcm9wcy5saXN0fSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuZXh0UHJvcHMudmFsdWUgIT09IHRoaXMucHJvcHMudmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0VmFsdWUobmV4dFByb3BzLnZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCFnZXQobmV4dFByb3BzLmZvcm1QYXJhbXMsIHRoaXMucHJvcHMucGFyYW1OYW1lLCBudWxsKSAmJiAhIXRoaXMuc3RhdGUuZGVmYXVsdFZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnNldFZhbHVlKHRoaXMuc3RhdGUuZGVmYXVsdFZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcGFyc2VBcnJheShhcnJheSkge1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXkpKVxuICAgICAgICAgICAgcmV0dXJuIGFycmF5O1xuICAgICAgICBjb25zdCB7c2ltcGxlLCBsaXN0S2V5LCBsaXN0TGFiZWx9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgdmFyIGl0ZW1zQXJyID0gW107XG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5tdWx0aXBsZSlcbiAgICAgICAgICAgIGl0ZW1zQXJyLnB1c2goPE1lbnVJdGVtIHZhbHVlPXtudWxsfSBrZXk9e251bGx9Lz4pO1xuXG4gICAgICAgIGFycmF5Lm1hcCgoZWwsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICB2YXIgZWxlbSA9XG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtIGlkPXtcIlNlbGVjdEl0ZW1fXCIgKyBjbGVhblNwYWNlcyhzaW1wbGUgPyBlbCA6IGVsW2xpc3RMYWJlbF0pfSBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2ltcGxlID8gZWwgOiBlbFtsaXN0S2V5XX0+XG4gICAgICAgICAgICAgICAgICAgIHtzaW1wbGUgPyBlbCA6IGVsW2xpc3RMYWJlbF19XG4gICAgICAgICAgICAgICAgPC9NZW51SXRlbT47XG5cbiAgICAgICAgICAgIGl0ZW1zQXJyLnB1c2goZWxlbSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gaXRlbXNBcnI7XG4gICAgfVxuXG4gICAgaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc2V0VmFsdWUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICB9XG5cbiAgICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgICAgICBpZiAoaXNFcXVhbCh2YWx1ZSwgdGhpcy5zdGF0ZS52YWx1ZSkpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZW50aXR5TGluaykge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5mb3JtUGFyYW1zW3RoaXMucHJvcHMucGFyYW1OYW1lXSA9ICEhdmFsdWUgP1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMubXVsdGlwbGUgPyB2YWx1ZS5tYXAoZWwgPT4gdGhpcy5wcm9wcy5lbnRpdGllcyArIFwiL1wiICsgZWwpIDogdGhpcy5wcm9wcy5lbnRpdGllcyArIFwiL1wiICsgdmFsdWVcbiAgICAgICAgICAgICAgICA6IG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmZvcm1QYXJhbXNbdGhpcy5wcm9wcy5wYXJhbU5hbWVdID0gISF2YWx1ZSA/IHZhbHVlIDogbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHZhbHVlKVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uQ2hhbmdlVmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2VWYWx1ZSh2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkNoYW5nZUZ1bGxWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZUZ1bGxWYWx1ZSh0aGlzLnByb3BzLmZvcm1QYXJhbXNbdGhpcy5wcm9wcy5wYXJhbU5hbWVdKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBuYW1lLCBtYXJnaW4sIGhlbHBlclRleHQsXG4gICAgICAgICAgICBkaXNhYmxlZCwgZnVsbFdpZHRoLCBzdHlsZXMsIHJlcXVpcmVkLFxuICAgICAgICAgICAgZXJyb3JUZXh0ID0gdmFsaWRhdGUodGhpcy5wcm9wcy5wYXJhbU5hbWUsIHRoaXMucHJvcHMuZXJyb3IpLm1lc3NhZ2VcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2xcbiAgICAgICAgICAgICAgICBpZD17XCJTZWxlY3RGaWVsZF9cIiArIGNsZWFuU3BhY2VzKG5hbWUpfVxuICAgICAgICAgICAgICAgIGVycm9yPXshIWVycm9yVGV4dH1cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlc31cbiAgICAgICAgICAgICAgICBtYXJnaW49e21hcmdpbn1cbiAgICAgICAgICAgICAgICBmdWxsV2lkdGg9e2Z1bGxXaWR0aH1cbiAgICAgICAgICAgICAgICByZXF1aXJlZD17cmVxdWlyZWR9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaHRtbEZvcj1cInNlbGVjdFwiPntuYW1lfTwvSW5wdXRMYWJlbD5cbiAgICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgICAgIGlkPXtcIlNlbGVjdEZpZWxkX1wiICsgY2xlYW5TcGFjZXMobmFtZSkgKyBcIl9JbnB1dFwifVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21pbldpZHRoOiAxNzZ9fVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZSB8fCB0aGlzLnN0YXRlLnZhbHVlID09PSAwID8gdGhpcy5zdGF0ZS52YWx1ZSA6ICcnfVxuICAgICAgICAgICAgICAgICAgICBtdWx0aXBsZT17dGhpcy5wcm9wcy5tdWx0aXBsZX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgIE1lbnVQcm9wcz17eyBkaXNhYmxlU2Nyb2xsTG9jazogdHJ1ZSB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucGFyc2VBcnJheSh0aGlzLnN0YXRlLmxpc3QpfVxuICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgKCEhZXJyb3JUZXh0IHx8ICEhaGVscGVyVGV4dCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1IZWxwZXJUZXh0PntlcnJvclRleHQgPyBlcnJvclRleHQgOiBoZWxwZXJUZXh0fTwvRm9ybUhlbHBlclRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgb3duUHJvcHMpID0+ICh7XG4gICAgZXJyb3I6IHN0YXRlLm93bmVyW293blByb3BzLm93bmVyXS5lcnJvcixcbiAgICBmb3JtUGFyYW1zOiBzdGF0ZS5vd25lcltvd25Qcm9wcy5vd25lcl0uZm9ybVBhcmFtcyxcbiAgICBlbnRpdHk6IHN0YXRlLm93bmVyW293blByb3BzLm93bmVyXS5lbnRpdHksXG4gICAgbGlzdDogc3RhdGUub3duZXJbb3duUHJvcHMub3duZXJdLnN0YXRlRWxlbWVudHNbb3duUHJvcHMuZW50aXRpZXNdXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xuICAgIGFjdGlvbnM6IGJpbmRBY3Rpb25DcmVhdG9ycyhhY3Rpb25DcmVhdG9ycywgZGlzcGF0Y2gpXG59KTtcblxuRGVmYXVsdFNlbGVjdEZpZWxkLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBsaXN0S2V5OiBcImlkXCIsXG4gICAgbGlzdExhYmVsOiBcIm5hbWVcIixcbiAgICBlbnRpdHlMaW5rOiB0cnVlLFxuICAgIG1hcmdpbjogXCJub3JtYWxcIixcbiAgICBmdWxsV2lkdGg6IGZhbHNlLFxuICAgIHByb2plY3Rpb246IFwic2VsZWN0XCJcblxufVxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoRGVmYXVsdFNlbGVjdEZpZWxkKVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgRGVmYXVsdFNlbGVjdEZpZWxkIGZyb20gXCIuLi9jb3JlL0RlZmF1bHRTZWxlY3RGaWVsZFwiO1xuaW1wb3J0IE11bHRpU2VsZWN0RmllbGQgZnJvbSBcIi4uL2NvcmUvTXVsdGlTZWxlY3RGaWVsZFwiO1xuXG5jb25zdCBNYW51ZmFjdHVyZXJTZWxlY3RGaWVsZCA9ICh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSA9IFwiTWFudWZhY3R1cmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1OYW1lID0gXCJtYW51ZmFjdHVyZXJcIiwgZW50aXRpZXMgPSBcIm1hbnVmYWN0dXJlcnNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHlMaW5rID0gdHJ1ZSwgbXVsdGlwbGUgPSBmYWxzZSwgLi4ub3RoZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICBtdWx0aXBsZSA/XG4gICAgICAgICAgICA8TXVsdGlTZWxlY3RGaWVsZFxuICAgICAgICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgICAgICAgcGFyYW1OYW1lPXtwYXJhbU5hbWV9XG4gICAgICAgICAgICAgICAgc2VhcmNoYWJsZVxuICAgICAgICAgICAgICAgIGVudGl0aWVzPXtlbnRpdGllc31cbiAgICAgICAgICAgICAgICBlbnRpdHlWYWx1ZT17XCJzaG9ydE5hbWVcIn1cbiAgICAgICAgICAgICAgICBlbnRpdHlMaW5rPXtlbnRpdHlMaW5rfVxuICAgICAgICAgICAgICAgIHsuLi5vdGhlcn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA6XG4gICAgICAgICAgICA8RGVmYXVsdFNlbGVjdEZpZWxkXG4gICAgICAgICAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgICAgICAgICBwYXJhbU5hbWU9e3BhcmFtTmFtZX1cbiAgICAgICAgICAgICAgICBlbnRpdGllcz17ZW50aXRpZXN9XG4gICAgICAgICAgICAgICAgbGlzdExhYmVsPXtcInNob3J0TmFtZVwifVxuICAgICAgICAgICAgICAgIGVudGl0eUxpbms9e2VudGl0eUxpbmt9XG4gICAgICAgICAgICAgICAgey4uLm90aGVyfVxuICAgICAgICAgICAgLz5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWFudWZhY3R1cmVyU2VsZWN0RmllbGQ7Il0sInNvdXJjZVJvb3QiOiIifQ==