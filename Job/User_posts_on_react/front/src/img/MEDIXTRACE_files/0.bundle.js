(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./src/components/core/MultiSelectField.js":
/*!*************************************************!*\
  !*** ./src/components/core/MultiSelectField.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MultiSelectField; });
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
/* harmony import */ var react_select_creatable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-select/creatable */ "./node_modules/react-select/creatable/dist/react-select.browser.esm.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.browser.esm.js");
/* harmony import */ var _utils_valueUtils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/valueUtils */ "./src/components/core/utils/valueUtils.js");
/* harmony import */ var _actions_indexOwner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../actions/indexOwner */ "./src/actions/indexOwner.ts");
/* harmony import */ var _utils_componentValueUtils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utils/componentValueUtils */ "./src/components/core/utils/componentValueUtils.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_14__);






var _dec, _class;

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
 * entityValue - key for label of list, default: name
 * projection - projection for http request , default: select
 * entityLink - save in formParams link, default: true
 * requestParams - params for request retrieving data
 * onChangeValue - fire on change value
 * onChangeFullValue - fire on change value
 *
 */

var containerStyles = {
  marginBottom: 8,
  marginTop: 8,
  marginRight: 8,
  minWidth: 176
};

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    error: state.owner[ownProps.owner].error,
    formParams: state.owner[ownProps.owner].formParams,
    entity: state.owner[ownProps.owner].entity,
    list: state.owner[ownProps.owner].stateElements[ownProps.listName || ownProps.entities]
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getEntityListAll: Object(redux__WEBPACK_IMPORTED_MODULE_8__["bindActionCreators"])(_actions_indexOwner__WEBPACK_IMPORTED_MODULE_12__["getEntityListAll"], dispatch)
  };
};

var MultiSelectField = (_dec = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, mapDispatchToProps), _dec(_class = /*#__PURE__*/function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(MultiSelectField, _React$Component);

  var _super = _createSuper(MultiSelectField);

  function MultiSelectField(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, MultiSelectField);

    _this = _super.call(this, props);
    _this.state = {
      list: [],
      error: null,
      value: _this.props.value ? _this.props.value : [],
      defaultValue: _this.props.defaultValue ? _this.props.defaultValue : null,
      entityKey: !!_this.props.entityKey ? _this.props.entityKey : "id",
      entityValue: !!_this.props.entityValue ? _this.props.entityValue : "name",
      projection: !!_this.props.projection ? _this.props.projection : "select",
      entityLink: _this.props.entityLink !== false,
      listName: _this.props.listName ? _this.props.listName : _this.props.entities
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(MultiSelectField, [{
    key: "UNSAFE_componentWillMount",
    value: function UNSAFE_componentWillMount() {
      if (this.props.entities && !this.props.listValue) this.props.getEntityListAll(this.props.loadUrl || this.props.entities, this.state.projection, this.props.owner, this.state.listName, this.props.requestParams, this.props.repo === true);else {
        if (!!this.props.customParser) this.setState({
          list: this.props.customParser(this.props.listValue)
        });else this.handleResult(this.props.listValue);
      }
      var newValue = Object(_utils_componentValueUtils__WEBPACK_IMPORTED_MODULE_13__["getValueInProps"])(this.props, this.props.paramName, this.state.value);
      if (newValue !== undefined) this.setValue(this.parseEntityValue(newValue));
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      var newValue = Object(_utils_componentValueUtils__WEBPACK_IMPORTED_MODULE_13__["getEntityValue"])(nextProps, this.props.paramName, this.state.value);

      if (!Object(lodash__WEBPACK_IMPORTED_MODULE_14__["get"])(nextProps.formParams, this.props.paramName, null) && !!this.state.defaultValue) {
        newValue = this.state.defaultValue;
      }

      if (!Object(lodash__WEBPACK_IMPORTED_MODULE_14__["isEqual"])(this.state.value, newValue)) this.setValue(this.parseEntityValue(newValue));
      if (Object(_utils_componentValueUtils__WEBPACK_IMPORTED_MODULE_13__["isValueNull"])(nextProps.formParams, this.props.paramName)) this.setValue(null);

      if (nextProps.list !== this.props.list && !!this.props.customParser) {
        this.setState({
          list: this.props.customParser(nextProps.list)
        });
      } else if (nextProps.list !== this.props.list) {
        this.handleResult(nextProps.list);
      }

      if (nextProps.value !== this.props.value) {
        this.setValue(nextProps.value);
      }
    }
  }, {
    key: "parseEntityValue",
    value: function parseEntityValue(value) {
      var _this$props = this.props,
          simple = _this$props.simple,
          _this$props$multi = _this$props.multi,
          multi = _this$props$multi === void 0 ? true : _this$props$multi;
      var _this$state = this.state,
          entityKey = _this$state.entityKey,
          entityValue = _this$state.entityValue;
      return Object(_utils_valueUtils__WEBPACK_IMPORTED_MODULE_11__["parseEntityValueMultiSelect"])(value, multi, simple, entityKey, entityValue);
    }
  }, {
    key: "handleResult",
    value: function handleResult(list) {
      var _this2 = this;

      if (!list) return [];
      var result = list.map(function (el) {
        return {
          label: _this2.props.simple ? el : el[_this2.state.entityValue],
          value: _this2.props.simple ? el : el[_this2.state.entityKey]
        };
      });
      this.setState({
        list: result
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(value) {
      this.setValue(value);
    }
  }, {
    key: "setValue",
    value: function setValue(value) {
      if (Object(lodash__WEBPACK_IMPORTED_MODULE_14__["isEqual"])(this.state.value, value)) return;
      this.setState({
        value: value
      });
      this.setFormParams(value);

      if (this.props.onChange) {
        this.props.onChange(value);
      }

      if (this.props.onChangeFullValue) {
        this.props.onChangeFullValue(this.props.formParams[this.props.paramName]);
      }
    }
  }, {
    key: "setFormParams",
    value: function setFormParams(value) {
      var _this$props2 = this.props,
          entities = _this$props2.entities,
          simple = _this$props2.simple,
          paramName = _this$props2.paramName,
          _this$props2$multi = _this$props2.multi,
          multi = _this$props2$multi === void 0 ? true : _this$props2$multi;
      var entityLink = this.state.entityLink;

      if (entityLink) {
        this.props.formParams[paramName] = Object(_utils_valueUtils__WEBPACK_IMPORTED_MODULE_11__["entityLinkValueMultiselect"])(value, multi, simple, entities);
      } else {
        this.props.formParams[paramName] = Object(_utils_valueUtils__WEBPACK_IMPORTED_MODULE_11__["nonEntityLinkValueMultiselect"])(value, multi, simple);
      }
    }
  }, {
    key: "renderReactSelectBottom",
    value: function renderReactSelectBottom() {
      var _this$props$errorText = this.props.errorText,
          errorText = _this$props$errorText === void 0 ? Object(_utils_validator__WEBPACK_IMPORTED_MODULE_7__["validate"])(this.props.paramName, this.props.error).message : _this$props$errorText;
      return [errorText ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        key: "error",
        style: {
          bottom: 2,
          fontSize: 12,
          color: "#f44336"
        }
      }, errorText) : null];
    }
  }, {
    key: "render",
    value: function render() {
      var styles = Object.assign({}, containerStyles, this.props.style);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: styles
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        style: {
          color: "#767676"
        }
      }, this.props.name + (this.props.required ? '*' : '')), this.props.creatable ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_select_creatable__WEBPACK_IMPORTED_MODULE_9__["default"], {
        isClearable: true,
        options: this.state.list,
        value: this.state.value,
        isMulti: this.props.multi === false ? this.props.multi : true,
        isSearchable: this.props.searchable,
        onChange: this.handleChange.bind(this),
        isDisabled: this.props.disabled === true,
        closeMenuOnSelect: this.props.multi === false,
        placeholder: this.props.optionsText ? this.props.optionsText : "Type to add option",
        menuPortalTarget: document.body
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_10__["default"], {
        isClearable: true,
        options: this.state.list,
        value: this.state.value,
        isMulti: this.props.multi === false ? this.props.multi : true,
        isSearchable: this.props.searchable,
        onChange: this.handleChange.bind(this),
        isDisabled: this.props.disabled === true,
        closeMenuOnSelect: this.props.multi === false,
        placeholder: this.props.optionsText,
        menuPortalTarget: document.body
      }), this.renderReactSelectBottom());
    }
  }]);

  return MultiSelectField;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component)) || _class);


/***/ }),

/***/ "./src/components/core/utils/componentValueUtils.js":
/*!**********************************************************!*\
  !*** ./src/components/core/utils/componentValueUtils.js ***!
  \**********************************************************/
/*! exports provided: getValueInProps, getEntityValue, getFormParamValue, isValueNull, isParamChanged */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValueInProps", function() { return getValueInProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEntityValue", function() { return getEntityValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFormParamValue", function() { return getFormParamValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValueNull", function() { return isValueNull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isParamChanged", function() { return isParamChanged; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

var getValueInProps = function getValueInProps(props, paramName, defaultValue) {
  var newValue = getEntityValue(props, paramName, defaultValue);
  if (!newValue) newValue = getFormParamValue(props, paramName, defaultValue);else newValue = defaultValue;
  return newValue;
};
var getEntityValue = function getEntityValue(props, paramName, defaultValue) {
  if (props.entity && props.entity.id && Object(lodash__WEBPACK_IMPORTED_MODULE_0__["has"])(props.entity, paramName)) return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(props.entity, paramName, defaultValue);else return defaultValue;
};
var getFormParamValue = function getFormParamValue(props, paramName, defaultValue) {
  if (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["has"])(props.formParams, paramName)) {
    return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(props.formParams, paramName, defaultValue);
  } else return defaultValue;
};
var isValueNull = function isValueNull(formParams, paramName) {
  return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(formParams, paramName) === null;
};
var isParamChanged = function isParamChanged(obj, newObj, paramName) {
  return !Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isEqual"])(Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(obj, paramName), Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(newObj, paramName));
};

/***/ }),

/***/ "./src/components/core/utils/valueUtils.js":
/*!*************************************************!*\
  !*** ./src/components/core/utils/valueUtils.js ***!
  \*************************************************/
/*! exports provided: entityLinkValue, nonEntityLinkValue, entityLinkValueMultiselect, nonEntityLinkValueMultiselect, parseEntityValueMultiSelect, parseEntityValueAsyncSelect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "entityLinkValue", function() { return entityLinkValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nonEntityLinkValue", function() { return nonEntityLinkValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "entityLinkValueMultiselect", function() { return entityLinkValueMultiselect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nonEntityLinkValueMultiselect", function() { return nonEntityLinkValueMultiselect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseEntityValueMultiSelect", function() { return parseEntityValueMultiSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseEntityValueAsyncSelect", function() { return parseEntityValueAsyncSelect; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);

var entityLinkValue = function entityLinkValue(value, multiple, simple, key, entity) {
  if (!value) return null;
  if (multiple) return value.map(function (el) {
    return entity + "/" + (simple ? el : el[key]);
  });else return entity + "/" + (simple ? value : value[key]);
};
var nonEntityLinkValue = function nonEntityLinkValue(value, multiple, simple, key) {
  if (!value) return null;
  if (multiple) return value.map(function (el) {
    return simple ? el : el[key];
  });else return simple ? value : value[key];
};
var entityLinkValueMultiselect = function entityLinkValueMultiselect(value, multiple, simple, entity) {
  if (!value) return null;
  if (multiple) return value.map(function (el) {
    return entity + "/" + (simple ? el : el.value);
  });else return entity + "/" + (simple ? value : value.value);
};
var nonEntityLinkValueMultiselect = function nonEntityLinkValueMultiselect(value, multiple) {
  if (!value) return [];
  if (multiple) return value.map(function (el) {
    return el.value;
  });else return value.value;
};
var parseEntityValueMultiSelect = function parseEntityValueMultiSelect(value, multiple, simple, key, entityValue) {
  if (!value) return [];
  if (multiple) return value.map(function (el) {
    return {
      label: simple ? el : el[entityValue],
      value: simple ? el : el[key]
    };
  });else return simple ? value : {
    label: simple ? value : value[entityValue],
    value: simple ? value : value[key]
  };
};
var parseEntityValueAsyncSelect = function parseEntityValueAsyncSelect(value, multiple, simple, key, entityValue) {
  var _ref2;

  if (!value) return null;
  if (multiple) return value.map(function (el) {
    var _ref;

    return _ref = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, entityValue, simple ? el : el[entityValue]), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, key, simple ? el : el[key]), _ref;
  });else return simple ? value : (_ref2 = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref2, key, value[key]), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref2, entityValue, value[entityValue]), _ref2);
};

/***/ }),

/***/ "./src/utils/string.js":
/*!*****************************!*\
  !*** ./src/utils/string.js ***!
  \*****************************/
/*! exports provided: cleanSpaces */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanSpaces", function() { return cleanSpaces; });
function cleanSpaces(value) {
  if (value instanceof Array) value = value.find(function (it) {
    return typeof it === 'string' || it instanceof String;
  });
  return value && value.replace && value.replace(/\s/g, '_');
}

/***/ }),

/***/ "./src/utils/validator.js":
/*!********************************!*\
  !*** ./src/utils/validator.js ***!
  \********************************/
/*! exports provided: validate, hasGlobalError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validate", function() { return validate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasGlobalError", function() { return hasGlobalError; });
function validate(field, validationArr) {
  if (!validationArr) {
    return {
      message: null,
      state: null
    };
  }

  var errors = validationArr.errors;

  if (!errors) {
    return {
      message: null,
      state: null
    };
  }

  for (var i = 0; i < errors.length; i++) {
    var obj = errors[i];

    if (obj.property === field) {
      return {
        message: obj.message,
        state: "error"
      };
    }
  }

  return {
    message: null,
    state: null
  };
}
function hasGlobalError(errors) {
  if (!errors) {
    return false;
  }

  return errors.constructor === String;
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb3JlL011bHRpU2VsZWN0RmllbGQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29yZS91dGlscy9jb21wb25lbnRWYWx1ZVV0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvcmUvdXRpbHMvdmFsdWVVdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvc3RyaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy92YWxpZGF0b3IuanMiXSwibmFtZXMiOlsiY29udGFpbmVyU3R5bGVzIiwibWFyZ2luQm90dG9tIiwibWFyZ2luVG9wIiwibWFyZ2luUmlnaHQiLCJtaW5XaWR0aCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwib3duUHJvcHMiLCJlcnJvciIsIm93bmVyIiwiZm9ybVBhcmFtcyIsImVudGl0eSIsImxpc3QiLCJzdGF0ZUVsZW1lbnRzIiwibGlzdE5hbWUiLCJlbnRpdGllcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiZ2V0RW50aXR5TGlzdEFsbCIsImJpbmRBY3Rpb25DcmVhdG9ycyIsIk11bHRpU2VsZWN0RmllbGQiLCJjb25uZWN0IiwicHJvcHMiLCJ2YWx1ZSIsImRlZmF1bHRWYWx1ZSIsImVudGl0eUtleSIsImVudGl0eVZhbHVlIiwicHJvamVjdGlvbiIsImVudGl0eUxpbmsiLCJsaXN0VmFsdWUiLCJsb2FkVXJsIiwicmVxdWVzdFBhcmFtcyIsInJlcG8iLCJjdXN0b21QYXJzZXIiLCJzZXRTdGF0ZSIsImhhbmRsZVJlc3VsdCIsIm5ld1ZhbHVlIiwiZ2V0VmFsdWVJblByb3BzIiwicGFyYW1OYW1lIiwidW5kZWZpbmVkIiwic2V0VmFsdWUiLCJwYXJzZUVudGl0eVZhbHVlIiwibmV4dFByb3BzIiwiZ2V0RW50aXR5VmFsdWUiLCJnZXQiLCJpc0VxdWFsIiwiaXNWYWx1ZU51bGwiLCJzaW1wbGUiLCJtdWx0aSIsInBhcnNlRW50aXR5VmFsdWVNdWx0aVNlbGVjdCIsInJlc3VsdCIsIm1hcCIsImVsIiwibGFiZWwiLCJzZXRGb3JtUGFyYW1zIiwib25DaGFuZ2UiLCJvbkNoYW5nZUZ1bGxWYWx1ZSIsImVudGl0eUxpbmtWYWx1ZU11bHRpc2VsZWN0Iiwibm9uRW50aXR5TGlua1ZhbHVlTXVsdGlzZWxlY3QiLCJlcnJvclRleHQiLCJ2YWxpZGF0ZSIsIm1lc3NhZ2UiLCJib3R0b20iLCJmb250U2l6ZSIsImNvbG9yIiwic3R5bGVzIiwiT2JqZWN0IiwiYXNzaWduIiwic3R5bGUiLCJuYW1lIiwicmVxdWlyZWQiLCJjcmVhdGFibGUiLCJzZWFyY2hhYmxlIiwiaGFuZGxlQ2hhbmdlIiwiYmluZCIsImRpc2FibGVkIiwib3B0aW9uc1RleHQiLCJkb2N1bWVudCIsImJvZHkiLCJyZW5kZXJSZWFjdFNlbGVjdEJvdHRvbSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZ2V0Rm9ybVBhcmFtVmFsdWUiLCJpZCIsImhhcyIsImlzUGFyYW1DaGFuZ2VkIiwib2JqIiwibmV3T2JqIiwiZW50aXR5TGlua1ZhbHVlIiwibXVsdGlwbGUiLCJrZXkiLCJub25FbnRpdHlMaW5rVmFsdWUiLCJwYXJzZUVudGl0eVZhbHVlQXN5bmNTZWxlY3QiLCJjbGVhblNwYWNlcyIsIkFycmF5IiwiZmluZCIsIml0IiwiU3RyaW5nIiwicmVwbGFjZSIsImZpZWxkIiwidmFsaWRhdGlvbkFyciIsImVycm9ycyIsImkiLCJsZW5ndGgiLCJwcm9wZXJ0eSIsImhhc0dsb2JhbEVycm9yIiwiY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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RCxPQUFLLElBQUlnRyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRCxNQUFNLENBQUNFLE1BQTNCLEVBQW1DRCxDQUFDLEVBQXBDLEVBQXdDO0FBQ3BDLFFBQUloQixHQUFHLEdBQUdlLE1BQU0sQ0FBQ0MsQ0FBRCxDQUFoQjs7QUFDQSxRQUFJaEIsR0FBRyxDQUFDa0IsUUFBSixLQUFpQkwsS0FBckIsRUFBNEI7QUFDeEIsYUFBTztBQUFDdEMsZUFBTyxFQUFFeUIsR0FBRyxDQUFDekIsT0FBZDtBQUF1QnZELGFBQUssRUFBRTtBQUE5QixPQUFQO0FBQ0g7QUFDSjs7QUFDRCxTQUFPO0FBQUN1RCxXQUFPLEVBQUUsSUFBVjtBQUFnQnZELFNBQUssRUFBRTtBQUF2QixHQUFQO0FBQ0g7QUFFTSxTQUFTbUcsY0FBVCxDQUF3QkosTUFBeEIsRUFBZ0M7QUFDbkMsTUFBSSxDQUFDQSxNQUFMLEVBQWE7QUFDVCxXQUFPLEtBQVA7QUFDSDs7QUFDRCxTQUFPQSxNQUFNLENBQUNLLFdBQVAsS0FBdUJULE1BQTlCO0FBQ0gsQyIsImZpbGUiOiIwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQge3ZhbGlkYXRlfSBmcm9tIFwiLi4vLi4vdXRpbHMvdmFsaWRhdG9yXCI7XG5pbXBvcnQge2JpbmRBY3Rpb25DcmVhdG9yc30gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgQ3JlYXRhYmxlU2VsZWN0IGZyb20gJ3JlYWN0LXNlbGVjdC9jcmVhdGFibGUnO1xuaW1wb3J0IFNlbGVjdCBmcm9tICdyZWFjdC1zZWxlY3QnXG5pbXBvcnQge1xuICAgIGVudGl0eUxpbmtWYWx1ZU11bHRpc2VsZWN0LFxuICAgIG5vbkVudGl0eUxpbmtWYWx1ZU11bHRpc2VsZWN0LFxuICAgIHBhcnNlRW50aXR5VmFsdWVNdWx0aVNlbGVjdFxufSBmcm9tIFwiLi91dGlscy92YWx1ZVV0aWxzXCI7XG5pbXBvcnQge2dldEVudGl0eUxpc3RBbGx9IGZyb20gXCIuLi8uLi9hY3Rpb25zL2luZGV4T3duZXJcIjtcbmltcG9ydCB7Z2V0RW50aXR5VmFsdWUsIGdldFZhbHVlSW5Qcm9wcywgaXNWYWx1ZU51bGx9IGZyb20gXCIuL3V0aWxzL2NvbXBvbmVudFZhbHVlVXRpbHNcIjtcbmltcG9ydCB7Z2V0LCBpc0VxdWFsfSBmcm9tIFwibG9kYXNoXCI7XG5cblxuLyoqXG4gKiBEZWZhdWx0IFNlbGVjdCBGaWVsZFxuICpcbiAqIFByb3BlcnRpZXNcbiAqXG4gKiBvd25lciAtIG93bmVyIG9mIHRoaXMgY29tcG9uZW50c1xuICogZW50aXRpZXMgLSBlbnRpdGllcyBmb3IgbG9hZFxuICogbG9hZFVybCAtIHVybCBmb3IgbG9hZCwgZGVmYXVsdCB2YWx1ZSBmcm9tIGVudGl0aWVzXG4gKiBuYW1lIC0gbmFtZSBvZiBzZWxlY3Qgb24gd2ViLWludGVyZmFjZVxuICogcGFyYW1OYW1lIC0ga2V5IGZvciBzYXZpbmcgaW4gc3RvcmVcbiAqIHZhbHVlIC0gdmFsdWUgb2Ygc2VsZWN0IGZpZWxkXG4gKiBlbnRpdHlLZXkgLSBrZXkgZm9yIGZpZWxkIHdpdGggSUQsIGRlZmF1bHQ6IGlkXG4gKiBlbnRpdHlWYWx1ZSAtIGtleSBmb3IgbGFiZWwgb2YgbGlzdCwgZGVmYXVsdDogbmFtZVxuICogcHJvamVjdGlvbiAtIHByb2plY3Rpb24gZm9yIGh0dHAgcmVxdWVzdCAsIGRlZmF1bHQ6IHNlbGVjdFxuICogZW50aXR5TGluayAtIHNhdmUgaW4gZm9ybVBhcmFtcyBsaW5rLCBkZWZhdWx0OiB0cnVlXG4gKiByZXF1ZXN0UGFyYW1zIC0gcGFyYW1zIGZvciByZXF1ZXN0IHJldHJpZXZpbmcgZGF0YVxuICogb25DaGFuZ2VWYWx1ZSAtIGZpcmUgb24gY2hhbmdlIHZhbHVlXG4gKiBvbkNoYW5nZUZ1bGxWYWx1ZSAtIGZpcmUgb24gY2hhbmdlIHZhbHVlXG4gKlxuICovXG5cbmNvbnN0IGNvbnRhaW5lclN0eWxlcyA9IHttYXJnaW5Cb3R0b206IDgsIG1hcmdpblRvcDogOCwgbWFyZ2luUmlnaHQ6IDgsIG1pbldpZHRoOiAxNzZ9O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIG93blByb3BzKSA9PiAoe1xuICAgIGVycm9yOiBzdGF0ZS5vd25lcltvd25Qcm9wcy5vd25lcl0uZXJyb3IsXG4gICAgZm9ybVBhcmFtczogc3RhdGUub3duZXJbb3duUHJvcHMub3duZXJdLmZvcm1QYXJhbXMsXG4gICAgZW50aXR5OiBzdGF0ZS5vd25lcltvd25Qcm9wcy5vd25lcl0uZW50aXR5LFxuICAgIGxpc3Q6IHN0YXRlLm93bmVyW293blByb3BzLm93bmVyXS5zdGF0ZUVsZW1lbnRzW293blByb3BzLmxpc3ROYW1lIHx8IG93blByb3BzLmVudGl0aWVzXVxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcbiAgICBnZXRFbnRpdHlMaXN0QWxsOiBiaW5kQWN0aW9uQ3JlYXRvcnMoZ2V0RW50aXR5TGlzdEFsbCwgZGlzcGF0Y2gpXG59KTtcblxuQGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNdWx0aVNlbGVjdEZpZWxkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbGlzdDogW10sXG4gICAgICAgICAgICBlcnJvcjogbnVsbCxcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLnByb3BzLnZhbHVlID8gdGhpcy5wcm9wcy52YWx1ZSA6IFtdLFxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiB0aGlzLnByb3BzLmRlZmF1bHRWYWx1ZSA/IHRoaXMucHJvcHMuZGVmYXVsdFZhbHVlIDogbnVsbCxcbiAgICAgICAgICAgIGVudGl0eUtleTogISF0aGlzLnByb3BzLmVudGl0eUtleSA/IHRoaXMucHJvcHMuZW50aXR5S2V5IDogXCJpZFwiLFxuICAgICAgICAgICAgZW50aXR5VmFsdWU6ICEhdGhpcy5wcm9wcy5lbnRpdHlWYWx1ZSA/IHRoaXMucHJvcHMuZW50aXR5VmFsdWUgOiBcIm5hbWVcIixcbiAgICAgICAgICAgIHByb2plY3Rpb246ICEhdGhpcy5wcm9wcy5wcm9qZWN0aW9uID8gdGhpcy5wcm9wcy5wcm9qZWN0aW9uIDogXCJzZWxlY3RcIixcbiAgICAgICAgICAgIGVudGl0eUxpbms6IHRoaXMucHJvcHMuZW50aXR5TGluayAhPT0gZmFsc2UsXG4gICAgICAgICAgICBsaXN0TmFtZTogdGhpcy5wcm9wcy5saXN0TmFtZSA/IHRoaXMucHJvcHMubGlzdE5hbWUgOiB0aGlzLnByb3BzLmVudGl0aWVzXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBVTlNBRkVfY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5lbnRpdGllcyAmJiAhdGhpcy5wcm9wcy5saXN0VmFsdWUpXG4gICAgICAgICAgICB0aGlzLnByb3BzLmdldEVudGl0eUxpc3RBbGwodGhpcy5wcm9wcy5sb2FkVXJsIHx8IHRoaXMucHJvcHMuZW50aXRpZXMsIHRoaXMuc3RhdGUucHJvamVjdGlvbiwgdGhpcy5wcm9wcy5vd25lciwgdGhpcy5zdGF0ZS5saXN0TmFtZSwgdGhpcy5wcm9wcy5yZXF1ZXN0UGFyYW1zLCB0aGlzLnByb3BzLnJlcG8gPT09IHRydWUpXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKCEhdGhpcy5wcm9wcy5jdXN0b21QYXJzZXIpXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bGlzdDogdGhpcy5wcm9wcy5jdXN0b21QYXJzZXIodGhpcy5wcm9wcy5saXN0VmFsdWUpfSk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVSZXN1bHQodGhpcy5wcm9wcy5saXN0VmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSBnZXRWYWx1ZUluUHJvcHModGhpcy5wcm9wcywgdGhpcy5wcm9wcy5wYXJhbU5hbWUsIHRoaXMuc3RhdGUudmFsdWUpXG4gICAgICAgIGlmIChuZXdWYWx1ZSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLnBhcnNlRW50aXR5VmFsdWUobmV3VmFsdWUpKVxuICAgIH1cblxuICAgIFVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICBsZXQgbmV3VmFsdWUgPSBnZXRFbnRpdHlWYWx1ZShuZXh0UHJvcHMsIHRoaXMucHJvcHMucGFyYW1OYW1lLCB0aGlzLnN0YXRlLnZhbHVlKVxuXG4gICAgICAgIGlmKCFnZXQobmV4dFByb3BzLmZvcm1QYXJhbXMsIHRoaXMucHJvcHMucGFyYW1OYW1lLCBudWxsKSAmJiAhIXRoaXMuc3RhdGUuZGVmYXVsdFZhbHVlKSB7XG4gICAgICAgICAgICBuZXdWYWx1ZSA9IHRoaXMuc3RhdGUuZGVmYXVsdFZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFpc0VxdWFsKHRoaXMuc3RhdGUudmFsdWUsIG5ld1ZhbHVlKSlcbiAgICAgICAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy5wYXJzZUVudGl0eVZhbHVlKG5ld1ZhbHVlKSlcblxuICAgICAgICBpZiAoaXNWYWx1ZU51bGwobmV4dFByb3BzLmZvcm1QYXJhbXMsIHRoaXMucHJvcHMucGFyYW1OYW1lKSlcbiAgICAgICAgICAgIHRoaXMuc2V0VmFsdWUobnVsbCk7XG5cbiAgICAgICAgaWYgKG5leHRQcm9wcy5saXN0ICE9PSB0aGlzLnByb3BzLmxpc3QgJiYgISF0aGlzLnByb3BzLmN1c3RvbVBhcnNlcikge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bGlzdDogdGhpcy5wcm9wcy5jdXN0b21QYXJzZXIobmV4dFByb3BzLmxpc3QpfSk7XG4gICAgICAgIH0gZWxzZSBpZiAobmV4dFByb3BzLmxpc3QgIT09IHRoaXMucHJvcHMubGlzdCkge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVSZXN1bHQobmV4dFByb3BzLmxpc3QpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5leHRQcm9wcy52YWx1ZSAhPT0gdGhpcy5wcm9wcy52YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZShuZXh0UHJvcHMudmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcGFyc2VFbnRpdHlWYWx1ZSh2YWx1ZSkge1xuICAgICAgICBjb25zdCB7c2ltcGxlLCBtdWx0aSA9IHRydWV9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3Qge2VudGl0eUtleSwgZW50aXR5VmFsdWV9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgcmV0dXJuIHBhcnNlRW50aXR5VmFsdWVNdWx0aVNlbGVjdCh2YWx1ZSwgbXVsdGksIHNpbXBsZSwgZW50aXR5S2V5LCBlbnRpdHlWYWx1ZSk7XG4gICAgfVxuXG4gICAgaGFuZGxlUmVzdWx0KGxpc3QpIHtcbiAgICAgICAgaWYgKCFsaXN0KVxuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICBsZXQgcmVzdWx0ID0gbGlzdC5tYXAoZWwgPT4gKHtcbiAgICAgICAgICAgICAgICBsYWJlbDogdGhpcy5wcm9wcy5zaW1wbGUgPyBlbCA6IGVsW3RoaXMuc3RhdGUuZW50aXR5VmFsdWVdLFxuICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLnByb3BzLnNpbXBsZSA/IGVsIDogZWxbdGhpcy5zdGF0ZS5lbnRpdHlLZXldXG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbGlzdDogcmVzdWx0XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGhhbmRsZUNoYW5nZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgICB9XG5cbiAgICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgICAgICBpZiAoaXNFcXVhbCh0aGlzLnN0YXRlLnZhbHVlLCB2YWx1ZSkpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zZXRGb3JtUGFyYW1zKHZhbHVlKTtcblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkNoYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh2YWx1ZSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uQ2hhbmdlRnVsbFZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlRnVsbFZhbHVlKHRoaXMucHJvcHMuZm9ybVBhcmFtc1t0aGlzLnByb3BzLnBhcmFtTmFtZV0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRGb3JtUGFyYW1zKHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IHtlbnRpdGllcywgc2ltcGxlLCBwYXJhbU5hbWUsIG11bHRpID0gdHJ1ZX0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCB7ZW50aXR5TGlua30gPSB0aGlzLnN0YXRlO1xuICAgICAgICBpZiAoZW50aXR5TGluaykge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5mb3JtUGFyYW1zW3BhcmFtTmFtZV0gPSBlbnRpdHlMaW5rVmFsdWVNdWx0aXNlbGVjdCh2YWx1ZSwgbXVsdGksIHNpbXBsZSwgZW50aXRpZXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5mb3JtUGFyYW1zW3BhcmFtTmFtZV0gPSBub25FbnRpdHlMaW5rVmFsdWVNdWx0aXNlbGVjdCh2YWx1ZSwgbXVsdGksIHNpbXBsZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXJSZWFjdFNlbGVjdEJvdHRvbSgpIHtcbiAgICAgICAgY29uc3Qge2Vycm9yVGV4dCA9IHZhbGlkYXRlKHRoaXMucHJvcHMucGFyYW1OYW1lLCB0aGlzLnByb3BzLmVycm9yKS5tZXNzYWdlfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBlcnJvclRleHQgP1xuICAgICAgICAgICAgICAgIDxkaXYga2V5PVwiZXJyb3JcIiBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBib3R0b206IDIsXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxMixcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiI2Y0NDMzNlwiXG4gICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgIHtlcnJvclRleHR9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgIF1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHN0eWxlcyA9IE9iamVjdC5hc3NpZ24oe30sIGNvbnRhaW5lclN0eWxlcywgdGhpcy5wcm9wcy5zdHlsZSk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXN9PlxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7Y29sb3I6IFwiIzc2NzY3NlwifX0+e3RoaXMucHJvcHMubmFtZSArICh0aGlzLnByb3BzLnJlcXVpcmVkID8gJyonIDogJycpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jcmVhdGFibGUgP1xuICAgICAgICAgICAgICAgICAgICA8Q3JlYXRhYmxlU2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICBpc0NsZWFyYWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17dGhpcy5zdGF0ZS5saXN0fVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBpc011bHRpPXt0aGlzLnByb3BzLm11bHRpID09PSBmYWxzZSA/IHRoaXMucHJvcHMubXVsdGkgOiB0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgaXNTZWFyY2hhYmxlPXt0aGlzLnByb3BzLnNlYXJjaGFibGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWQgPT09IHRydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9zZU1lbnVPblNlbGVjdD17dGhpcy5wcm9wcy5tdWx0aSA9PT0gZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dGhpcy5wcm9wcy5vcHRpb25zVGV4dCA/IHRoaXMucHJvcHMub3B0aW9uc1RleHQgOiBcIlR5cGUgdG8gYWRkIG9wdGlvblwifVxuICAgICAgICAgICAgICAgICAgICAgICAgbWVudVBvcnRhbFRhcmdldD17ZG9jdW1lbnQuYm9keX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICBpc0NsZWFyYWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17dGhpcy5zdGF0ZS5saXN0fVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBpc011bHRpPXt0aGlzLnByb3BzLm11bHRpID09PSBmYWxzZSA/IHRoaXMucHJvcHMubXVsdGkgOiB0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgaXNTZWFyY2hhYmxlPXt0aGlzLnByb3BzLnNlYXJjaGFibGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWQgPT09IHRydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9zZU1lbnVPblNlbGVjdD17dGhpcy5wcm9wcy5tdWx0aSA9PT0gZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dGhpcy5wcm9wcy5vcHRpb25zVGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG1lbnVQb3J0YWxUYXJnZXQ9e2RvY3VtZW50LmJvZHl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclJlYWN0U2VsZWN0Qm90dG9tKCl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG4iLCJpbXBvcnQge2dldCwgaGFzLCBpc0VxdWFsfSBmcm9tIFwibG9kYXNoXCI7XG5cblxuZXhwb3J0IGNvbnN0IGdldFZhbHVlSW5Qcm9wcyA9IChwcm9wcywgcGFyYW1OYW1lLCBkZWZhdWx0VmFsdWUpID0+IHtcbiAgICBsZXQgbmV3VmFsdWUgPSBnZXRFbnRpdHlWYWx1ZShwcm9wcywgcGFyYW1OYW1lLCBkZWZhdWx0VmFsdWUpO1xuICAgIGlmICghbmV3VmFsdWUpXG4gICAgICAgIG5ld1ZhbHVlID0gZ2V0Rm9ybVBhcmFtVmFsdWUocHJvcHMsIHBhcmFtTmFtZSwgZGVmYXVsdFZhbHVlKTtcbiAgICBlbHNlXG4gICAgICAgIG5ld1ZhbHVlID0gZGVmYXVsdFZhbHVlXG4gICAgcmV0dXJuIG5ld1ZhbHVlXG59XG5cbmV4cG9ydCBjb25zdCBnZXRFbnRpdHlWYWx1ZSA9IChwcm9wcywgcGFyYW1OYW1lLCBkZWZhdWx0VmFsdWUpID0+IHtcbiAgICBpZiAocHJvcHMuZW50aXR5ICYmIHByb3BzLmVudGl0eS5pZCAmJiBoYXMocHJvcHMuZW50aXR5LCBwYXJhbU5hbWUpKVxuICAgICAgICByZXR1cm4gZ2V0KHByb3BzLmVudGl0eSwgcGFyYW1OYW1lLCBkZWZhdWx0VmFsdWUpXG4gICAgZWxzZVxuICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlXG59XG5cbmV4cG9ydCBjb25zdCBnZXRGb3JtUGFyYW1WYWx1ZSA9IChwcm9wcywgcGFyYW1OYW1lLCBkZWZhdWx0VmFsdWUpID0+IHtcbiAgICBpZiAoaGFzKHByb3BzLmZvcm1QYXJhbXMsIHBhcmFtTmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIGdldChwcm9wcy5mb3JtUGFyYW1zLCBwYXJhbU5hbWUsIGRlZmF1bHRWYWx1ZSlcbiAgICB9IGVsc2VcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZVxufVxuXG5leHBvcnQgY29uc3QgaXNWYWx1ZU51bGwgPSAoZm9ybVBhcmFtcywgcGFyYW1OYW1lKSA9PiB7XG4gICAgcmV0dXJuIGdldChmb3JtUGFyYW1zLCBwYXJhbU5hbWUpID09PSBudWxsXG59XG5cbmV4cG9ydCBjb25zdCBpc1BhcmFtQ2hhbmdlZCA9IChvYmosIG5ld09iaiwgcGFyYW1OYW1lKSA9PiB7XG4gICAgcmV0dXJuICFpc0VxdWFsKGdldChvYmosIHBhcmFtTmFtZSksIGdldChuZXdPYmosIHBhcmFtTmFtZSkpO1xufSIsImV4cG9ydCBjb25zdCBlbnRpdHlMaW5rVmFsdWUgPSAodmFsdWUsIG11bHRpcGxlLCBzaW1wbGUsIGtleSwgZW50aXR5KSA9PiB7XG4gICAgaWYgKCF2YWx1ZSlcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgaWYgKG11bHRpcGxlKVxuICAgICAgICByZXR1cm4gdmFsdWUubWFwKGVsID0+IGVudGl0eSArIFwiL1wiICsgKHNpbXBsZSA/IGVsIDogZWxba2V5XSkpXG4gICAgZWxzZVxuICAgICAgICByZXR1cm4gZW50aXR5ICsgXCIvXCIgKyAoc2ltcGxlID8gdmFsdWUgOiB2YWx1ZVtrZXldKTtcbn07XG5cbmV4cG9ydCBjb25zdCBub25FbnRpdHlMaW5rVmFsdWUgPSAodmFsdWUsIG11bHRpcGxlLCBzaW1wbGUsIGtleSkgPT4ge1xuICAgIGlmICghdmFsdWUpXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIGlmIChtdWx0aXBsZSlcbiAgICAgICAgcmV0dXJuIHZhbHVlLm1hcChlbCA9PiBzaW1wbGUgPyBlbCA6IGVsW2tleV0pXG4gICAgZWxzZVxuICAgICAgICByZXR1cm4gc2ltcGxlID8gdmFsdWUgOiB2YWx1ZVtrZXldO1xufTtcblxuZXhwb3J0IGNvbnN0IGVudGl0eUxpbmtWYWx1ZU11bHRpc2VsZWN0ID0gKHZhbHVlLCBtdWx0aXBsZSwgc2ltcGxlLCBlbnRpdHkpID0+IHtcbiAgICBpZiAoIXZhbHVlKVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICBpZiAobXVsdGlwbGUpXG4gICAgICAgIHJldHVybiB2YWx1ZS5tYXAoZWwgPT4gZW50aXR5ICsgXCIvXCIgKyAoc2ltcGxlID8gZWwgOiBlbC52YWx1ZSkpXG4gICAgZWxzZVxuICAgICAgICByZXR1cm4gZW50aXR5ICsgXCIvXCIgKyAoc2ltcGxlID8gdmFsdWUgOiB2YWx1ZS52YWx1ZSlcbn07XG5cbmV4cG9ydCBjb25zdCBub25FbnRpdHlMaW5rVmFsdWVNdWx0aXNlbGVjdCA9ICh2YWx1ZSwgbXVsdGlwbGUpID0+IHtcbiAgICBpZiAoIXZhbHVlKVxuICAgICAgICByZXR1cm4gW107XG4gICAgaWYgKG11bHRpcGxlKVxuICAgICAgICByZXR1cm4gdmFsdWUubWFwKGVsID0+IGVsLnZhbHVlKVxuICAgIGVsc2VcbiAgICAgICAgcmV0dXJuIHZhbHVlLnZhbHVlXG59O1xuXG5leHBvcnQgY29uc3QgcGFyc2VFbnRpdHlWYWx1ZU11bHRpU2VsZWN0ID0gKHZhbHVlLCBtdWx0aXBsZSwgc2ltcGxlLCBrZXksIGVudGl0eVZhbHVlKSA9PiB7XG4gICAgaWYgKCF2YWx1ZSlcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIGlmIChtdWx0aXBsZSlcbiAgICAgICAgcmV0dXJuIHZhbHVlLm1hcChlbCA9PiAoe1xuICAgICAgICAgICAgbGFiZWw6IHNpbXBsZSA/IGVsIDogZWxbZW50aXR5VmFsdWVdLFxuICAgICAgICAgICAgdmFsdWU6IHNpbXBsZSA/IGVsIDogZWxba2V5XSxcbiAgICAgICAgfSkpXG4gICAgZWxzZVxuICAgICAgICByZXR1cm4gc2ltcGxlID8gdmFsdWUgOiB7XG4gICAgICAgICAgICBsYWJlbDogc2ltcGxlID8gdmFsdWUgOiB2YWx1ZVtlbnRpdHlWYWx1ZV0sXG4gICAgICAgICAgICB2YWx1ZTogc2ltcGxlID8gdmFsdWUgOiB2YWx1ZVtrZXldLFxuICAgICAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBwYXJzZUVudGl0eVZhbHVlQXN5bmNTZWxlY3QgPSAodmFsdWUsIG11bHRpcGxlLCBzaW1wbGUsIGtleSwgZW50aXR5VmFsdWUpID0+IHtcbiAgICBpZiAoIXZhbHVlKVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICBpZiAobXVsdGlwbGUpXG4gICAgICAgIHJldHVybiB2YWx1ZS5tYXAoZWwgPT4gKHtcbiAgICAgICAgICAgIFtlbnRpdHlWYWx1ZV06IHNpbXBsZSA/IGVsIDogZWxbZW50aXR5VmFsdWVdLFxuICAgICAgICAgICAgW2tleV06IHNpbXBsZSA/IGVsIDogZWxba2V5XSxcbiAgICAgICAgfSkpXG4gICAgZWxzZVxuICAgICAgICByZXR1cm4gc2ltcGxlID8gdmFsdWUgOiB7W2tleV06IHZhbHVlW2tleV0sIFtlbnRpdHlWYWx1ZV06IHZhbHVlW2VudGl0eVZhbHVlXX1cbn0iLCJleHBvcnQgZnVuY3Rpb24gY2xlYW5TcGFjZXModmFsdWUpIHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBBcnJheSlcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5maW5kKGl0ID0+IHR5cGVvZiBpdCA9PT0gJ3N0cmluZycgfHwgaXQgaW5zdGFuY2VvZiBTdHJpbmcpO1xuICAgIHJldHVybiB2YWx1ZSAmJiB2YWx1ZS5yZXBsYWNlICYmIHZhbHVlLnJlcGxhY2UoL1xccy9nLCAnXycpXG59IiwiZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlKGZpZWxkLCB2YWxpZGF0aW9uQXJyKSB7XG4gICAgaWYgKCF2YWxpZGF0aW9uQXJyKSB7XG4gICAgICAgIHJldHVybiB7bWVzc2FnZTogbnVsbCwgc3RhdGU6IG51bGx9XG4gICAgfVxuICAgIHZhciBlcnJvcnMgPSB2YWxpZGF0aW9uQXJyLmVycm9ycztcbiAgICBpZiAoIWVycm9ycykge1xuICAgICAgICByZXR1cm4ge21lc3NhZ2U6IG51bGwsIHN0YXRlOiBudWxsfVxuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVycm9ycy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgb2JqID0gZXJyb3JzW2ldO1xuICAgICAgICBpZiAob2JqLnByb3BlcnR5ID09PSBmaWVsZCkge1xuICAgICAgICAgICAgcmV0dXJuIHttZXNzYWdlOiBvYmoubWVzc2FnZSwgc3RhdGU6IFwiZXJyb3JcIn07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHttZXNzYWdlOiBudWxsLCBzdGF0ZTogbnVsbH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0dsb2JhbEVycm9yKGVycm9ycykge1xuICAgIGlmICghZXJyb3JzKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIGVycm9ycy5jb25zdHJ1Y3RvciA9PT0gU3RyaW5nO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==