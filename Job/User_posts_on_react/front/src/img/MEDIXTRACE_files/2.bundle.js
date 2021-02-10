(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./src/components/core/DesignFilter.js":
/*!*********************************************!*\
  !*** ./src/components/core/DesignFilter.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
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
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _Filter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Filter */ "./src/components/core/Filter.js");







function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var DesignFilter = /*#__PURE__*/function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(DesignFilter, _React$Component);

  var _super = _createSuper(DesignFilter);

  function DesignFilter(props) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, DesignFilter);

    return _super.call(this, props);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(DesignFilter, [{
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
    key: "renderMethod",
    value: function renderMethod() {
      var _this$props = this.props,
          isAdminDashboard = _this$props.isAdminDashboard,
          disableActions = _this$props.disableActions,
          wait = _this$props.wait;
      var isBtnsDisabled = disableActions || wait;
      var btnSize = isAdminDashboard ? 'large' : 'small';
      var btnStyle = {
        padding: isAdminDashboard ? '11px 55px' : '',
        boxShadow: isAdminDashboard ? 'none' : ''
      };
      var clearBtsStyle = {
        background: isAdminDashboard && !isBtnsDisabled ? '#0090D9' : '',
        color: isAdminDashboard && !isBtnsDisabled ? 'white' : ''
      };
      var searchBtsStyle = {
        background: isAdminDashboard && !isBtnsDisabled ? '#2CBBBB' : '',
        color: isAdminDashboard && !isBtnsDisabled ? 'white' : ''
      };
      var btnWrapper = {
        marginLeft: 10,
        marginBottom: isAdminDashboard ? 12 : '',
        marginTop: isAdminDashboard ? 34 : ''
      };
      return this.filter && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "flex-items"
      }, this.props.elementFilter, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: btnWrapper
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
        color: "primary",
        variant: "contained",
        size: btnSize,
        onClick: this.filter.clearFilter.bind(this.filter),
        disabled: isBtnsDisabled,
        style: _objectSpread(_objectSpread({}, btnStyle), clearBtsStyle)
      }, "Clear filter"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        style: {
          marginLeft: isAdminDashboard ? 17 : 10
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
        color: "primary",
        variant: "contained",
        size: btnSize,
        onClick: this.filter.search.bind(this.filter),
        disabled: isBtnsDisabled,
        style: _objectSpread(_objectSpread({}, btnStyle), searchBtsStyle)
      }, "Search")));
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Filter__WEBPACK_IMPORTED_MODULE_9__["default"], {
        elementFilter: this.props.elementFilter,
        search: this.props.search,
        clear: this.props.clear,
        getProps: this.props.getProps,
        owner: this.props.owner,
        listOwner: this.props.listOwner,
        entities: this.props.entities,
        projections: this.props.projections,
        defaultPropsList: this.props.defaultPropsList,
        filterCleared: this.props.filterCleared,
        paramName: this.props.paramName,
        disableActions: this.props.disableActions,
        onRef: function onRef(ref) {
          return _this.filter = ref;
        },
        init: this.props.init,
        render: function render() {
          return _this.renderMethod();
        }
      });
    }
  }]);

  return DesignFilter;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    wait: !!state.owner[ownProps.listOwner] ? state.owner[ownProps.listOwner][ownProps.paramName || ownProps.entities] ? state.owner[ownProps.listOwner][ownProps.paramName || ownProps.entities].wait : false : false
  };
};

var mapDispatchToProps = function mapDispatchToProps() {
  return {};
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps, mapDispatchToProps)(DesignFilter));

/***/ }),

/***/ "./src/components/core/Filter.js":
/*!***************************************!*\
  !*** ./src/components/core/Filter.js ***!
  \***************************************/
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
/* harmony import */ var _actions_indexOwner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../actions/indexOwner */ "./src/actions/indexOwner.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_10__);






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }








var Filter = /*#__PURE__*/function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(Filter, _React$Component);

  var _super = _createSuper(Filter);

  function Filter(props) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Filter);

    return _super.call(this, props);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Filter, [{
    key: "render",
    value: function render() {
      return !!this.props.render ? this.props.render() : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, this.props.elementFilter), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, this.renderButton()));
    }
  }, {
    key: "UNSAFE_componentWillMount",
    value: function UNSAFE_componentWillMount() {
      if (this.props.onRef) {
        this.props.onRef(this);
      }

      if (this.props.init !== false) {
        this.props.actions.initOwner(this.props.owner);
        this.props.actions.initFormParams(this.props.owner);
        this.props.actions.stateComponentToStore(this.props.defaultPropsList, this.props.owner);
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
    key: "renderButton",
    value: function renderButton() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "text-right"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
        variant: "text",
        onClick: this.clearFilter.bind(this),
        disabled: this.props.disableActions || this.props.wait
      }, "Clear filter"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        style: {
          marginLeft: 10
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
        color: "primary",
        onClick: this.search.bind(this),
        disabled: this.props.disableActions || this.props.wait
      }, !!this.props.labelSearch ? this.props.labelSearch : "Search"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("hr", null));
    }
  }, {
    key: "clearFilter",
    value: function clearFilter() {
      if (!!this.props.clear) {
        this.props.clear();
      } else {
        this.props.actions.clearFilter(this.props.owner);
        this.search();
      }
    }
  }, {
    key: "search",
    value: function search() {
      if (!!this.props.search) {
        this.props.search();
      } else {
        var data = this.parserProps();
        var pageable = {};
        pageable['defaultPropertyList'] = data;
        data["page"] = 0;
        this.props.actions.stateComponentToStore(pageable, this.props.listOwner);
        var paramName = !!this.props.paramName ? this.props.paramName : this.props.entities;
        this.props.actions.getEntityListWithPage(this.props.entities, this.props.projections, this.props.listOwner, paramName, pageable, this.props.isController);
      }

      if (!!this.props.additionSearch) {
        this.props.additionSearch();
      }
    }
  }, {
    key: "parserProps",
    value: function parserProps() {
      var defaultProps = this.props.defaultProperty;
      var filterProps = this.props.getProps;
      var data = {};
      jquery__WEBPACK_IMPORTED_MODULE_10___default.a.extend(data, defaultProps, filterProps);

      for (var key in this.props.formParams) {
        if (this.props.formParams.hasOwnProperty(key) && this.props.formParams[key] !== '' && this.props.formParams[key] !== null) {
          data[key] = this.props.formParams[key];
        }
      }

      data['page'] = 0;
      return data;
    }
  }]);

  return Filter;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    formParams: !!state.owner[ownProps.owner] ? state.owner[ownProps.owner].formParams : {},
    wait: !!state.owner[ownProps.listOwner] ? state.owner[ownProps.listOwner][ownProps.paramName || ownProps.entities] ? state.owner[ownProps.listOwner][ownProps.paramName || ownProps.entities].wait : false : false,
    defaultProperty: !!state.owner[ownProps.listOwner] ? state.owner[ownProps.listOwner].state.defaultPropertyList : []
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux__WEBPACK_IMPORTED_MODULE_7__["bindActionCreators"])(_actions_indexOwner__WEBPACK_IMPORTED_MODULE_9__, dispatch)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, mapDispatchToProps)(Filter));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb3JlL0Rlc2lnbkZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb3JlL0ZpbHRlci5qcyJdLCJuYW1lcyI6WyJEZXNpZ25GaWx0ZXIiLCJwcm9wcyIsIm9uUmVmIiwidW5kZWZpbmVkIiwiaXNBZG1pbkRhc2hib2FyZCIsImRpc2FibGVBY3Rpb25zIiwid2FpdCIsImlzQnRuc0Rpc2FibGVkIiwiYnRuU2l6ZSIsImJ0blN0eWxlIiwicGFkZGluZyIsImJveFNoYWRvdyIsImNsZWFyQnRzU3R5bGUiLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJzZWFyY2hCdHNTdHlsZSIsImJ0bldyYXBwZXIiLCJtYXJnaW5MZWZ0IiwibWFyZ2luQm90dG9tIiwibWFyZ2luVG9wIiwiZmlsdGVyIiwiZWxlbWVudEZpbHRlciIsImNsZWFyRmlsdGVyIiwiYmluZCIsInNlYXJjaCIsImNsZWFyIiwiZ2V0UHJvcHMiLCJvd25lciIsImxpc3RPd25lciIsImVudGl0aWVzIiwicHJvamVjdGlvbnMiLCJkZWZhdWx0UHJvcHNMaXN0IiwiZmlsdGVyQ2xlYXJlZCIsInBhcmFtTmFtZSIsInJlZiIsImluaXQiLCJyZW5kZXJNZXRob2QiLCJSZWFjdCIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwib3duUHJvcHMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJjb25uZWN0IiwiRmlsdGVyIiwicmVuZGVyIiwicmVuZGVyQnV0dG9uIiwiYWN0aW9ucyIsImluaXRPd25lciIsImluaXRGb3JtUGFyYW1zIiwic3RhdGVDb21wb25lbnRUb1N0b3JlIiwibGFiZWxTZWFyY2giLCJkYXRhIiwicGFyc2VyUHJvcHMiLCJwYWdlYWJsZSIsImdldEVudGl0eUxpc3RXaXRoUGFnZSIsImlzQ29udHJvbGxlciIsImFkZGl0aW9uU2VhcmNoIiwiZGVmYXVsdFByb3BzIiwiZGVmYXVsdFByb3BlcnR5IiwiZmlsdGVyUHJvcHMiLCIkIiwiZXh0ZW5kIiwia2V5IiwiZm9ybVBhcmFtcyIsImhhc093blByb3BlcnR5IiwiZGVmYXVsdFByb3BlcnR5TGlzdCIsImRpc3BhdGNoIiwiYmluZEFjdGlvbkNyZWF0b3JzIiwiYWN0aW9uQ3JlYXRvcnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7SUFHTUEsWTs7Ozs7QUFFRix3QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDZCQUNUQSxLQURTO0FBRWxCOzs7O2dEQUUyQjtBQUN4QixVQUFJLEtBQUtBLEtBQUwsQ0FBV0MsS0FBZixFQUFzQjtBQUNsQixhQUFLRCxLQUFMLENBQVdDLEtBQVgsQ0FBaUIsSUFBakI7QUFDSDtBQUNKOzs7MkNBRXNCO0FBQ25CLFVBQUksS0FBS0QsS0FBTCxDQUFXQyxLQUFmLEVBQXNCO0FBQ2xCLGFBQUtELEtBQUwsQ0FBV0MsS0FBWCxDQUFpQkMsU0FBakI7QUFDSDtBQUNKOzs7bUNBRWM7QUFBQSx3QkFDd0MsS0FBS0YsS0FEN0M7QUFBQSxVQUNIRyxnQkFERyxlQUNIQSxnQkFERztBQUFBLFVBQ2VDLGNBRGYsZUFDZUEsY0FEZjtBQUFBLFVBQytCQyxJQUQvQixlQUMrQkEsSUFEL0I7QUFFWCxVQUFNQyxjQUFjLEdBQUdGLGNBQWMsSUFBSUMsSUFBekM7QUFDQSxVQUFNRSxPQUFPLEdBQUdKLGdCQUFnQixHQUFHLE9BQUgsR0FBYSxPQUE3QztBQUVBLFVBQU1LLFFBQVEsR0FBRztBQUNiQyxlQUFPLEVBQUVOLGdCQUFnQixHQUFHLFdBQUgsR0FBaUIsRUFEN0I7QUFFYk8saUJBQVMsRUFBRVAsZ0JBQWdCLEdBQUcsTUFBSCxHQUFZO0FBRjFCLE9BQWpCO0FBS0EsVUFBTVEsYUFBYSxHQUFHO0FBQ2xCQyxrQkFBVSxFQUFFVCxnQkFBZ0IsSUFBSSxDQUFDRyxjQUFyQixHQUFzQyxTQUF0QyxHQUFrRCxFQUQ1QztBQUVsQk8sYUFBSyxFQUFF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QUUsQ0FBQyxDQUFDa0MsS0FBSyxDQUFDYixLQUFOLENBQVljLFFBQVEsQ0FBQ2IsU0FBckIsQ0FBRixHQUFvQ1ksS0FBSyxDQUFDYixLQUFOLENBQVljLFFBQVEsQ0FBQ2IsU0FBckIsRUFBZ0NhLFFBQVEsQ0FBQ1IsU0FBVCxJQUFzQlEsUUFBUSxDQUFDWixRQUEvRCxJQUEyRVcsS0FBSyxDQUFDYixLQUFOLENBQVljLFFBQVEsQ0FBQ2IsU0FBckIsRUFBZ0NhLFFBQVEsQ0FBQ1IsU0FBVCxJQUFzQlEsUUFBUSxDQUFDWixRQUEvRCxFQUF5RXZCLElBQXBKLEdBQTJKLEtBQS9MLEdBQXVNLEtBRm5LO0FBRzFDcUQsbUJBQWUsRUFBRSxDQUFDLENBQUNuQixLQUFLLENBQUNiLEtBQU4sQ0FBWWMsUUFBUSxDQUFDYixTQUFyQixDQUFGLEdBQW9DWSxLQUFLLENBQUNiLEtBQU4sQ0FBWWMsUUFBUSxDQUFDYixTQUFyQixFQUFnQ1ksS0FBaEMsQ0FBc0MwQixtQkFBMUUsR0FBZ0c7QUFIdkUsR0FBdEI7QUFBQSxDQUF4Qjs7QUFNQSxJQUFNeEIsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDeUIsUUFBRDtBQUFBLFNBQWU7QUFDdENwQixXQUFPLEVBQUVxQixnRUFBa0IsQ0FBQ0MsZ0RBQUQsRUFBaUJGLFFBQWpCO0FBRFcsR0FBZjtBQUFBLENBQTNCOztBQUlleEIsMEhBQU8sQ0FBQ0osZUFBRCxFQUFrQkcsa0JBQWxCLENBQVAsQ0FBNkNFLE1BQTdDLENBQWYsRSIsImZpbGUiOiIyLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcbmltcG9ydCBGaWx0ZXIgZnJvbSBcIi4vRmlsdGVyXCI7XG5cblxuY2xhc3MgRGVzaWduRmlsdGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG5cbiAgICBVTlNBRkVfY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5vblJlZikge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vblJlZih0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5vblJlZikge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vblJlZih1bmRlZmluZWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyTWV0aG9kKCkge1xuICAgICAgICBjb25zdCB7IGlzQWRtaW5EYXNoYm9hcmQsIGRpc2FibGVBY3Rpb25zLCB3YWl0IH0gPSB0aGlzLnByb3BzXG4gICAgICAgIGNvbnN0IGlzQnRuc0Rpc2FibGVkID0gZGlzYWJsZUFjdGlvbnMgfHwgd2FpdFxuICAgICAgICBjb25zdCBidG5TaXplID0gaXNBZG1pbkRhc2hib2FyZCA/ICdsYXJnZScgOiAnc21hbGwnXG5cbiAgICAgICAgY29uc3QgYnRuU3R5bGUgPSB7XG4gICAgICAgICAgICBwYWRkaW5nOiBpc0FkbWluRGFzaGJvYXJkID8gJzExcHggNTVweCcgOiAnJyxcbiAgICAgICAgICAgIGJveFNoYWRvdzogaXNBZG1pbkRhc2hib2FyZCA/ICdub25lJyA6ICcnLFxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2xlYXJCdHNTdHlsZSA9IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGlzQWRtaW5EYXNoYm9hcmQgJiYgIWlzQnRuc0Rpc2FibGVkID8gJyMwMDkwRDknIDogJycsXG4gICAgICAgICAgICBjb2xvcjogaXNBZG1pbkRhc2hib2FyZCAmJiAhaXNCdG5zRGlzYWJsZWQgPyAnd2hpdGUnIDogJycsXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzZWFyY2hCdHNTdHlsZSA9IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGlzQWRtaW5EYXNoYm9hcmQgJiYgIWlzQnRuc0Rpc2FibGVkID8gJyMyQ0JCQkInIDogJycsXG4gICAgICAgICAgICBjb2xvcjogaXNBZG1pbkRhc2hib2FyZCAmJiAhaXNCdG5zRGlzYWJsZWQgPyAnd2hpdGUnIDogJycsXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBidG5XcmFwcGVyID0ge1xuICAgICAgICAgICAgbWFyZ2luTGVmdDogMTAsIFxuICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBpc0FkbWluRGFzaGJvYXJkID8gMTIgOiAnJyxcbiAgICAgICAgICAgIG1hcmdpblRvcDogaXNBZG1pbkRhc2hib2FyZCA/IDM0IDogJycsXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgdGhpcy5maWx0ZXIgJiZcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1pdGVtc1wiPlxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmVsZW1lbnRGaWx0ZXJ9XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17YnRuV3JhcHBlcn0+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXtcInByaW1hcnlcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17YnRuU2l6ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuZmlsdGVyLmNsZWFyRmlsdGVyLmJpbmQodGhpcy5maWx0ZXIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzQnRuc0Rpc2FibGVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3suLi5idG5TdHlsZSwgLi4uY2xlYXJCdHNTdHlsZX19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcIkNsZWFyIGZpbHRlclwifVxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3ttYXJnaW5MZWZ0OiBpc0FkbWluRGFzaGJvYXJkID8gMTcgOiAxMH19Lz5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9e1wicHJpbWFyeVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPXtidG5TaXplfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5maWx0ZXIuc2VhcmNoLmJpbmQodGhpcy5maWx0ZXIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzQnRuc0Rpc2FibGVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3suLi5idG5TdHlsZSwgLi4uc2VhcmNoQnRzU3R5bGV9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XCJTZWFyY2hcIn1cbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8RmlsdGVyXG4gICAgICAgICAgICAgICAgZWxlbWVudEZpbHRlcj17dGhpcy5wcm9wcy5lbGVtZW50RmlsdGVyfVxuICAgICAgICAgICAgICAgIHNlYXJjaD17dGhpcy5wcm9wcy5zZWFyY2h9XG4gICAgICAgICAgICAgICAgY2xlYXI9e3RoaXMucHJvcHMuY2xlYXJ9XG4gICAgICAgICAgICAgICAgZ2V0UHJvcHM9e3RoaXMucHJvcHMuZ2V0UHJvcHN9XG4gICAgICAgICAgICAgICAgb3duZXI9e3RoaXMucHJvcHMub3duZXJ9XG4gICAgICAgICAgICAgICAgbGlzdE93bmVyPXt0aGlzLnByb3BzLmxpc3RPd25lcn1cbiAgICAgICAgICAgICAgICBlbnRpdGllcz17dGhpcy5wcm9wcy5lbnRpdGllc31cbiAgICAgICAgICAgICAgICBwcm9qZWN0aW9ucz17dGhpcy5wcm9wcy5wcm9qZWN0aW9uc31cbiAgICAgICAgICAgICAgICBkZWZhdWx0UHJvcHNMaXN0PXt0aGlzLnByb3BzLmRlZmF1bHRQcm9wc0xpc3R9XG4gICAgICAgICAgICAgICAgZmlsdGVyQ2xlYXJlZD17dGhpcy5wcm9wcy5maWx0ZXJDbGVhcmVkfVxuICAgICAgICAgICAgICAgIHBhcmFtTmFtZT17dGhpcy5wcm9wcy5wYXJhbU5hbWV9XG4gICAgICAgICAgICAgICAgZGlzYWJsZUFjdGlvbnM9e3RoaXMucHJvcHMuZGlzYWJsZUFjdGlvbnN9XG4gICAgICAgICAgICAgICAgb25SZWY9e3JlZiA9PiAodGhpcy5maWx0ZXIgPSByZWYpfVxuICAgICAgICAgICAgICAgIGluaXQ9e3RoaXMucHJvcHMuaW5pdH1cbiAgICAgICAgICAgICAgICByZW5kZXI9eygpID0+IHRoaXMucmVuZGVyTWV0aG9kKCl9XG4gICAgICAgICAgICAvPlxuICAgICAgICApXG4gICAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIG93blByb3BzKSA9PiAoe1xuICAgIHdhaXQ6ICEhc3RhdGUub3duZXJbb3duUHJvcHMubGlzdE93bmVyXSA/IHN0YXRlLm93bmVyW293blByb3BzLmxpc3RPd25lcl1bb3duUHJvcHMucGFyYW1OYW1lIHx8IG93blByb3BzLmVudGl0aWVzXSA/IHN0YXRlLm93bmVyW293blByb3BzLmxpc3RPd25lcl1bb3duUHJvcHMucGFyYW1OYW1lIHx8IG93blByb3BzLmVudGl0aWVzXS53YWl0IDogZmFsc2UgOiBmYWxzZSxcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoKSA9PiAoe30pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShEZXNpZ25GaWx0ZXIpXG5cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQge2JpbmRBY3Rpb25DcmVhdG9yc30gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcbmltcG9ydCAqIGFzIGFjdGlvbkNyZWF0b3JzIGZyb20gXCIuLi8uLi9hY3Rpb25zL2luZGV4T3duZXJcIjtcbmltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcblxuXG5jbGFzcyBGaWx0ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICEhdGhpcy5wcm9wcy5yZW5kZXIgP1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucmVuZGVyKCkgOlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5lbGVtZW50RmlsdGVyfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckJ1dHRvbigpfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBVTlNBRkVfY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5vblJlZikge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vblJlZih0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5pbml0ICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5hY3Rpb25zLmluaXRPd25lcih0aGlzLnByb3BzLm93bmVyKTtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuYWN0aW9ucy5pbml0Rm9ybVBhcmFtcyh0aGlzLnByb3BzLm93bmVyKTtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuYWN0aW9ucy5zdGF0ZUNvbXBvbmVudFRvU3RvcmUodGhpcy5wcm9wcy5kZWZhdWx0UHJvcHNMaXN0LCB0aGlzLnByb3BzLm93bmVyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5vblJlZikge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vblJlZih1bmRlZmluZWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyQnV0dG9uKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgPGhyLz5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuY2xlYXJGaWx0ZXIuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVBY3Rpb25zIHx8IHRoaXMucHJvcHMud2FpdH0+XG4gICAgICAgICAgICAgICAgICAgIHtcIkNsZWFyIGZpbHRlclwifVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3ttYXJnaW5MZWZ0OiAxMH19Lz5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnNlYXJjaC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZUFjdGlvbnMgfHwgdGhpcy5wcm9wcy53YWl0fT5cbiAgICAgICAgICAgICAgICAgICAgeyEhdGhpcy5wcm9wcy5sYWJlbFNlYXJjaCA/IHRoaXMucHJvcHMubGFiZWxTZWFyY2ggOiBcIlNlYXJjaFwifVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuXG5cbiAgICAgICAgICAgICAgICA8aHIvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgY2xlYXJGaWx0ZXIoKSB7XG4gICAgICAgIGlmICghIXRoaXMucHJvcHMuY2xlYXIpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY2xlYXIoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuYWN0aW9ucy5jbGVhckZpbHRlcih0aGlzLnByb3BzLm93bmVyKTtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZWFyY2goKSB7XG4gICAgICAgIGlmICghIXRoaXMucHJvcHMuc2VhcmNoKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLnNlYXJjaCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMucGFyc2VyUHJvcHMoKTtcbiAgICAgICAgICAgIGNvbnN0IHBhZ2VhYmxlID0ge307XG4gICAgICAgICAgICBwYWdlYWJsZVsnZGVmYXVsdFByb3BlcnR5TGlzdCddID0gZGF0YTtcbiAgICAgICAgICAgIGRhdGFbXCJwYWdlXCJdID0gMDtcblxuICAgICAgICAgICAgdGhpcy5wcm9wcy5hY3Rpb25zLnN0YXRlQ29tcG9uZW50VG9TdG9yZShwYWdlYWJsZSwgdGhpcy5wcm9wcy5saXN0T3duZXIpO1xuICAgICAgICAgICAgY29uc3QgcGFyYW1OYW1lID0gISF0aGlzLnByb3BzLnBhcmFtTmFtZSA/IHRoaXMucHJvcHMucGFyYW1OYW1lIDogdGhpcy5wcm9wcy5lbnRpdGllcztcbiAgICAgICAgICAgIHRoaXMucHJvcHMuYWN0aW9ucy5nZXRFbnRpdHlMaXN0V2l0aFBhZ2UodGhpcy5wcm9wcy5lbnRpdGllcyxcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnByb2plY3Rpb25zLCB0aGlzLnByb3BzLmxpc3RPd25lciwgcGFyYW1OYW1lLCBwYWdlYWJsZSwgdGhpcy5wcm9wcy5pc0NvbnRyb2xsZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCEhdGhpcy5wcm9wcy5hZGRpdGlvblNlYXJjaCkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5hZGRpdGlvblNlYXJjaCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcGFyc2VyUHJvcHMoKSB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRQcm9wcyA9IHRoaXMucHJvcHMuZGVmYXVsdFByb3BlcnR5O1xuICAgICAgICBjb25zdCBmaWx0ZXJQcm9wcyA9IHRoaXMucHJvcHMuZ2V0UHJvcHM7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB7fTtcbiAgICAgICAgJC5leHRlbmQoZGF0YSwgZGVmYXVsdFByb3BzLCBmaWx0ZXJQcm9wcyk7XG5cbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5wcm9wcy5mb3JtUGFyYW1zKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5mb3JtUGFyYW1zLmhhc093blByb3BlcnR5KGtleSkgJiYgdGhpcy5wcm9wcy5mb3JtUGFyYW1zW2tleV0gIT09ICcnICYmIHRoaXMucHJvcHMuZm9ybVBhcmFtc1trZXldICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZGF0YVtrZXldID0gdGhpcy5wcm9wcy5mb3JtUGFyYW1zW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBkYXRhWydwYWdlJ10gPSAwO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgb3duUHJvcHMpID0+ICh7XG4gICAgZm9ybVBhcmFtczogISFzdGF0ZS5vd25lcltvd25Qcm9wcy5vd25lcl0gPyBzdGF0ZS5vd25lcltvd25Qcm9wcy5vd25lcl0uZm9ybVBhcmFtcyA6IHt9LFxuICAgIHdhaXQ6ICEhc3RhdGUub3duZXJbb3duUHJvcHMubGlzdE93bmVyXSA/IHN0YXRlLm93bmVyW293blByb3BzLmxpc3RPd25lcl1bb3duUHJvcHMucGFyYW1OYW1lIHx8IG93blByb3BzLmVudGl0aWVzXSA/IHN0YXRlLm93bmVyW293blByb3BzLmxpc3RPd25lcl1bb3duUHJvcHMucGFyYW1OYW1lIHx8IG93blByb3BzLmVudGl0aWVzXS53YWl0IDogZmFsc2UgOiBmYWxzZSxcbiAgICBkZWZhdWx0UHJvcGVydHk6ICEhc3RhdGUub3duZXJbb3duUHJvcHMubGlzdE93bmVyXSA/IHN0YXRlLm93bmVyW293blByb3BzLmxpc3RPd25lcl0uc3RhdGUuZGVmYXVsdFByb3BlcnR5TGlzdCA6IFtdXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xuICAgIGFjdGlvbnM6IGJpbmRBY3Rpb25DcmVhdG9ycyhhY3Rpb25DcmVhdG9ycywgZGlzcGF0Y2gpXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoRmlsdGVyKVxuXG4iXSwic291cmNlUm9vdCI6IiJ9