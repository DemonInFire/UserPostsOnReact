(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[30],{

/***/ "./src/view/GeneralStatistic/GeneralStatisticView.js":
/*!***********************************************************!*\
  !*** ./src/view/GeneralStatistic/GeneralStatisticView.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GeneralStatisticView; });
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
/* harmony import */ var _actions_indexOwner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../actions/indexOwner */ "./src/actions/indexOwner.ts");
/* harmony import */ var _components_core_Wrapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/core/Wrapper */ "./src/components/core/Wrapper.js");
/* harmony import */ var _widgets_StatisticList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./widgets/StatisticList */ "./src/view/GeneralStatistic/widgets/StatisticList.js");






var _dec, _class;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var entity = "items";

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    form: !!state.owner[ownProps.owner] ? state.owner[ownProps.owner].state.form : {}
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    ownerActions: Object(redux__WEBPACK_IMPORTED_MODULE_7__["bindActionCreators"])(_actions_indexOwner__WEBPACK_IMPORTED_MODULE_8__, dispatch)
  };
};

var GeneralStatisticView = (_dec = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, mapDispatchToProps), _dec(_class = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(GeneralStatisticView, _Component);

  var _super = _createSuper(GeneralStatisticView);

  function GeneralStatisticView() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, GeneralStatisticView);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(GeneralStatisticView, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.ownerActions.stateComponentToStore(this.state, this.props.owner);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.ownerActions.clearOwner(this.props.owner);
    }
  }, {
    key: "renderContext",
    value: function renderContext() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "flex-items-start"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_widgets_StatisticList__WEBPACK_IMPORTED_MODULE_10__["default"], {
        owner: this.props.owner,
        entity: entity,
        adminDashboard: this.props.adminDashboard
      }));
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.adminDashboard ? this.renderContext() : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_core_Wrapper__WEBPACK_IMPORTED_MODULE_9__["default"], {
        title: "General Statistic",
        context: this.renderContext()
      });
    }
  }]);

  return GeneralStatisticView;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"])) || _class);


/***/ }),

/***/ "./src/view/GeneralStatistic/widgets/StatisticList.js":
/*!************************************************************!*\
  !*** ./src/view/GeneralStatistic/widgets/StatisticList.js ***!
  \************************************************************/
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
/* harmony import */ var _components_core_DesignList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/core/DesignList */ "./src/components/core/DesignList.js");
/* harmony import */ var _components_core_Widget__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/core/Widget */ "./src/components/core/Widget.js");
/* harmony import */ var _src_components_core_watchButton_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../../../src/components/core/watchButton/index */ "./src/components/core/watchButton/index.tsx");
/* harmony import */ var _Dashboard_widgets_DashboardItemListFilter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../Dashboard/widgets/DashboardItemListFilter */ "./src/view/Dashboard/widgets/DashboardItemListFilter.js");
/* harmony import */ var _utils_dateUtil__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../utils/dateUtil */ "./src/utils/dateUtil.js");
/* harmony import */ var _components_core_listsHeader_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../../../components/core/listsHeader/index */ "./src/components/core/listsHeader/index.tsx");
/* harmony import */ var _Dashboard_widgets_TabPanel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../Dashboard/widgets/TabPanel */ "./src/view/Dashboard/widgets/TabPanel.js");
/* harmony import */ var _Dashboard_widgets_TopTabs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../Dashboard/widgets/TopTabs */ "./src/view/Dashboard/widgets/TopTabs.js");
/* harmony import */ var _Dashboard_widgets_DashboardItemBatchView__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../Dashboard/widgets/DashboardItemBatchView */ "./src/view/Dashboard/widgets/DashboardItemBatchView.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var _actions_indexOwner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../actions/indexOwner */ "./src/actions/indexOwner.ts");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
















var showDetails = function showDetails(_shit, id) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_src_components_core_watchButton_index__WEBPACK_IMPORTED_MODULE_9__["default"], {
    redirectTo: "/items/details/" + id
  });
};

var StatisticList = /*#__PURE__*/function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(StatisticList, _React$Component);

  var _super = _createSuper(StatisticList);

  function StatisticList() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, StatisticList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      tabIndex: 0
    };

    _this.switchTab = function (value) {
      _this.setState(function () {
        return {
          tabIndex: value
        };
      });
    };

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(StatisticList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.adminDashboard) {
        var batchOwner = 'dashboardManufacturerBatch';
        this.props.ownerActions.initOwner(batchOwner);
        this.props.ownerActions.initFormParams(batchOwner);
      }
    }
  }, {
    key: "renderFilter",
    value: function renderFilter() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Dashboard_widgets_DashboardItemListFilter__WEBPACK_IMPORTED_MODULE_10__["default"], {
        type: this.props.type,
        owner: this.props.owner,
        statuses: []
      }));
    }
  }, {
    key: "renderContent",
    value: function renderContent() {
      var columns = [{
        id: 0,
        header: "",
        value: "id",
        type: "function",
        func: showDetails,
        style: {
          width: 20,
          paddingLeft: '20px !important'
        }
      }, {
        id: 1,
        header: "MXT ID",
        value: "id",
        type: 'string',
        style: {
          width: 81
        }
      }, {
        id: 2,
        header: "Manufacturer",
        sort: "manufacturer.shortName",
        value: "manufacturer",
        type: 'string',
        style: {
          width: 110
        }
      }, {
        id: 3,
        header: "QR code",
        value: "qrCode",
        type: 'string',
        style: {
          width: 100
        }
      }, {
        id: 4,
        header: "Drug name",
        value: "drugName",
        type: 'string',
        style: {
          minWidth: 104,
          whiteSpace: "normal"
        }
      }, {
        id: 5,
        header: "Manufactured date",
        value: "manufacturedDate",
        type: 'date',
        style: {
          width: 100
        }
      }, {
        id: 6,
        header: "Expiration date",
        value: "expirationDate",
        type: 'date',
        style: {
          width: 100
        }
      }, {
        id: 7,
        header: "INN",
        value: "inn",
        type: 'string',
        style: {
          minWidth: 150,
          whiteSpace: "normal",
          wordBreak: "break-word"
        }
      }, {
        id: 8,
        header: "Status",
        sort: "lastTrack.itemStatus",
        value: "itemStatus",
        type: 'string',
        style: {
          width: 88
        }
      }, {
        id: 9,
        header: "Date sent",
        value: "sentDate",
        type: 'date',
        style: {
          width: 90
        }
      }, {
        id: 10,
        header: "Date received",
        sort: "lastTrack.date",
        value: "receivedDate",
        type: 'date',
        format: _utils_dateUtil__WEBPACK_IMPORTED_MODULE_11__["CLIENT_FORMAT_DATE_TIME"],
        style: {
          width: 122
        }
      }, {
        id: 11,
        header: "Date added",
        value: "dateAdded",
        type: 'date',
        format: _utils_dateUtil__WEBPACK_IMPORTED_MODULE_11__["CLIENT_FORMAT_DATE_TIME"],
        style: {
          width: 122,
          wordSpacing: "99px"
        }
      }, {
        id: 12,
        header: "Date of purchase",
        value: "purchaseDate",
        type: 'date',
        format: _utils_dateUtil__WEBPACK_IMPORTED_MODULE_11__["CLIENT_FORMAT_DATE_TIME"],
        style: {
          width: 122
        }
      }, {
        id: 13,
        header: "Facility Inventory",
        sortable: false,
        value: "facility",
        type: 'string',
        style: {
          width: 74
        }
      }];
      return this.props.adminDashboard ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_17__["default"], {
        pl: 3.75,
        width: 1000
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_core_listsHeader_index__WEBPACK_IMPORTED_MODULE_12__["default"], {
        listTitle: "Item lists",
        redirectPath: "/dashboard/manufacturer",
        rightSideComponents: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_17__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Dashboard_widgets_TopTabs__WEBPACK_IMPORTED_MODULE_14__["default"], {
          tabIndex: this.state.tabIndex,
          switchTab: this.switchTab,
          styled: true
        }))
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Dashboard_widgets_TabPanel__WEBPACK_IMPORTED_MODULE_13__["default"], {
        value: this.state.tabIndex,
        index: 0,
        style: {
          width: '100%'
        }
      }, this.state.tabIndex === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_core_DesignList__WEBPACK_IMPORTED_MODULE_7__["default"], {
        refreshButton: true,
        sortedHeaders: true,
        addButton: false,
        columns: columns,
        paramName: "items",
        entities: this.props.entity,
        projections: "list",
        owner: this.props.owner,
        defaultPropsList: {
          defaultPropertyList: {
            sort: "dateAdded,desc",
            size: 5
          }
        },
        isAdminDashboard: this.props.adminDashboard,
        isItemsList: true
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Dashboard_widgets_TabPanel__WEBPACK_IMPORTED_MODULE_13__["default"], {
        value: this.state.tabIndex,
        index: 1,
        style: {
          width: '100%'
        }
      }, this.state.tabIndex === 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Dashboard_widgets_DashboardItemBatchView__WEBPACK_IMPORTED_MODULE_15__["default"], {
        type: "MANUFACTURER",
        owner: "dashboardManufacturerBatch",
        adminDashboard: this.props.adminDashboard
      }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_core_DesignList__WEBPACK_IMPORTED_MODULE_7__["default"], {
        sortedHeaders: true,
        addButton: false,
        contentTop: this.renderFilter(),
        columns: columns,
        paramName: "items",
        entities: this.props.entity,
        projections: "list",
        owner: this.props.owner,
        defaultPropsList: {
          defaultPropertyList: {
            sort: "dateAdded,desc",
            size: 20
          }
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.adminDashboard ? this.renderContent() : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_core_Widget__WEBPACK_IMPORTED_MODULE_8__["default"], {
        header: 'Overall Statistics',
        style: {
          width: '100%'
        },
        error: this.props.error,
        content: this.renderContent()
      });
    }
  }]);

  return StatisticList;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    error: !!state.owner[ownProps.owner] ? state.owner[ownProps.owner].state.errorList : null
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    ownerActions: Object(redux__WEBPACK_IMPORTED_MODULE_16__["bindActionCreators"])(_actions_indexOwner__WEBPACK_IMPORTED_MODULE_18__, dispatch)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, mapDispatchToProps)(StatisticList));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9HZW5lcmFsU3RhdGlzdGljL0dlbmVyYWxTdGF0aXN0aWNWaWV3LmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3L0dlbmVyYWxTdGF0aXN0aWMvd2lkZ2V0cy9TdGF0aXN0aWNMaXN0LmpzIl0sIm5hbWVzIjpbImVudGl0eSIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwib3duUHJvcHMiLCJmb3JtIiwib3duZXIiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsIm93bmVyQWN0aW9ucyIsImJpbmRBY3Rpb25DcmVhdG9ycyIsImFjdGlvbkNyZWF0b3JzIiwiR2VuZXJhbFN0YXRpc3RpY1ZpZXciLCJjb25uZWN0IiwicHJvcHMiLCJzdGF0ZUNvbXBvbmVudFRvU3RvcmUiLCJjbGVhck93bmVyIiwiYWRtaW5EYXNoYm9hcmQiLCJyZW5kZXJDb250ZXh0IiwiQ29tcG9uZW50Iiwic2hvd0RldGFpbHMiLCJfc2hpdCIsImlkIiwiU3RhdGlzdGljTGlzdCIsInRhYkluZGV4Iiwic3dpdGNoVGFiIiwidmFsdWUiLCJzZXRTdGF0ZSIsImJhdGNoT3duZXIiLCJpbml0T3duZXIiLCJpbml0Rm9ybVBhcmFtcyIsInR5cGUiLCJjb2x1bW5zIiwiaGVhZGVyIiwiZnVuYyIsInN0eWxlIiwid2lkdGgiLCJwYWRkaW5nTGVmdCIsInNvcnQiLCJtaW5XaWR0aCIsIndoaXRlU3BhY2UiLCJ3b3JkQnJlYWsiLCJmb3JtYXQiLCJDTElFTlRfRk9STUFUX0RBVEVfVElNRSIsIndvcmRTcGFjaW5nIiwic29ydGFibGUiLCJkZWZhdWx0UHJvcGVydHlMaXN0Iiwic2l6ZSIsInJlbmRlckZpbHRlciIsInJlbmRlckNvbnRlbnQiLCJlcnJvciIsIlJlYWN0IiwiZXJyb3JMaXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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S0FSdEI7QUFTSSx3QkFBZ0IsRUFBRTtBQUFDd0MsNkJBQW1CLEVBQUU7QUFBQ1IsZ0JBQUksRUFBRSxnQkFBUDtBQUF5QlMsZ0JBQUksRUFBRTtBQUEvQjtBQUF0QjtBQVR0QixRQXJESjtBQWlFSDs7OzZCQUVRO0FBQ0wsYUFBTyxLQUFLakMsS0FBTCxDQUFXRyxjQUFYLEdBQ0QsS0FBS2dDLGFBQUwsRUFEQyxnQkFHQywyREFBQywrREFBRDtBQUNJLGNBQU0sRUFBRSxvQkFEWjtBQUVJLGFBQUssRUFBRTtBQUFDYixlQUFLLEVBQUU7QUFBUixTQUZYO0FBR0ksYUFBSyxFQUFFLEtBQUt0QixLQUFMLENBQVdvQyxLQUh0QjtBQUlJLGVBQU8sRUFBRSxLQUFLRCxhQUFMO0FBSmIsUUFIUjtBQVVIOzs7O0VBcE11QkUsNENBQUssQ0FBQ2hDLFM7O0FBd01sQyxJQUFNakIsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFELEVBQVFDLFFBQVI7QUFBQSxTQUFzQjtBQUMxQzhDLFNBQUssRUFBRSxDQUFDLENBQUMvQyxLQUFLLENBQUNHLEtBQU4sQ0FBWUYsUUFBUSxDQUFDRSxLQUFyQixDQUFGLEdBQWdDSCxLQUFLLENBQUNHLEtBQU4sQ0FBWUYsUUFBUSxDQUFDRSxLQUFyQixFQUE0QkgsS0FBNUIsQ0FBa0NpRCxTQUFsRSxHQUE4RTtBQUQzQyxHQUF0QjtBQUFBLENBQXhCOztBQUlBLElBQU03QyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUFDLFFBQVE7QUFBQSxTQUFLO0FBQ3BDQyxnQkFBWSxFQUFFQyxpRUFBa0IsQ0FBQ0MsaURBQUQsRUFBaUJILFFBQWpCO0FBREksR0FBTDtBQUFBLENBQW5DOztBQUllSywwSEFBTyxDQUFDWCxlQUFELEVBQWtCSyxrQkFBbEIsQ0FBUCxDQUE2Q2dCLGFBQTdDLENBQWYsRSIsImZpbGUiOiIzMC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQge2JpbmRBY3Rpb25DcmVhdG9yc30gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgKiBhcyBhY3Rpb25DcmVhdG9ycyBmcm9tIFwiLi4vLi4vYWN0aW9ucy9pbmRleE93bmVyXCI7XG5pbXBvcnQgV3JhcHBlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jb3JlL1dyYXBwZXJcIjtcbmltcG9ydCBTdGF0aXN0aWNMaXN0IGZyb20gXCIuL3dpZGdldHMvU3RhdGlzdGljTGlzdFwiO1xuXG5jb25zdCBlbnRpdHkgPSBcIml0ZW1zXCI7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgb3duUHJvcHMpID0+ICh7XG4gICAgZm9ybTogISFzdGF0ZS5vd25lcltvd25Qcm9wcy5vd25lcl0gPyBzdGF0ZS5vd25lcltvd25Qcm9wcy5vd25lcl0uc3RhdGUuZm9ybSA6IHt9LFxufSk7XG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xuICAgIG93bmVyQWN0aW9uczogYmluZEFjdGlvbkNyZWF0b3JzKGFjdGlvbkNyZWF0b3JzLCBkaXNwYXRjaClcbn0pO1xuXG5AY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdlbmVyYWxTdGF0aXN0aWNWaWV3IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnByb3BzLm93bmVyQWN0aW9ucy5zdGF0ZUNvbXBvbmVudFRvU3RvcmUodGhpcy5zdGF0ZSwgdGhpcy5wcm9wcy5vd25lcik7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHRoaXMucHJvcHMub3duZXJBY3Rpb25zLmNsZWFyT3duZXIodGhpcy5wcm9wcy5vd25lcik7XG4gICAgfVxuXG4gICAgcmVuZGVyQ29udGV4dCgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1pdGVtcy1zdGFydFwiPlxuICAgICAgICAgICAgICAgIDxTdGF0aXN0aWNMaXN0XG4gICAgICAgICAgICAgICAgICAgIG93bmVyPXt0aGlzLnByb3BzLm93bmVyfVxuICAgICAgICAgICAgICAgICAgICBlbnRpdHk9e2VudGl0eX1cbiAgICAgICAgICAgICAgICAgICAgYWRtaW5EYXNoYm9hcmQ9e3RoaXMucHJvcHMuYWRtaW5EYXNoYm9hcmR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5hZG1pbkRhc2hib2FyZCBcbiAgICAgICAgICAgID8gdGhpcy5yZW5kZXJDb250ZXh0KClcbiAgICAgICAgICAgIDogPFdyYXBwZXIgdGl0bGU9e1wiR2VuZXJhbCBTdGF0aXN0aWNcIn0gY29udGV4dD17dGhpcy5yZW5kZXJDb250ZXh0KCl9Lz5cbiAgICB9XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IERlc2lnbkxpc3QgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvY29yZS9EZXNpZ25MaXN0XCI7XG5pbXBvcnQgV2lkZ2V0IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2NvcmUvV2lkZ2V0XCI7XG5pbXBvcnQgV2F0Y2hCdXR0b24gZnJvbSBcIi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvY29yZS93YXRjaEJ1dHRvbi9pbmRleFwiO1xuaW1wb3J0IERhc2hib2FyZEl0ZW1MaXN0RmlsdGVyIGZyb20gXCIuLi8uLi9EYXNoYm9hcmQvd2lkZ2V0cy9EYXNoYm9hcmRJdGVtTGlzdEZpbHRlclwiO1xuaW1wb3J0IHtDTElFTlRfRk9STUFUX0RBVEVfVElNRX0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2RhdGVVdGlsXCI7XG5pbXBvcnQgTGlzdHNIZWFkZXIgZnJvbSAnLi8uLi8uLi8uLi9jb21wb25lbnRzL2NvcmUvbGlzdHNIZWFkZXIvaW5kZXgnO1xuaW1wb3J0IFRhYlBhbmVsIGZyb20gJy4uLy4uL0Rhc2hib2FyZC93aWRnZXRzL1RhYlBhbmVsJztcbmltcG9ydCBUb3BUYWJzIGZyb20gJy4uLy4uL0Rhc2hib2FyZC93aWRnZXRzL1RvcFRhYnMnO1xuaW1wb3J0IERhc2hib2FyZEl0ZW1CYXRjaFZpZXcgZnJvbSAnLi4vLi4vRGFzaGJvYXJkL3dpZGdldHMvRGFzaGJvYXJkSXRlbUJhdGNoVmlldyc7XG5pbXBvcnQge2JpbmRBY3Rpb25DcmVhdG9yc30gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgQm94IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0JveCdcbmltcG9ydCAqIGFzIGFjdGlvbkNyZWF0b3JzIGZyb20gXCIuLi8uLi8uLi9hY3Rpb25zL2luZGV4T3duZXJcIjtcblxuY29uc3Qgc2hvd0RldGFpbHMgPSAoX3NoaXQsIGlkKSA9PiA8V2F0Y2hCdXR0b24gcmVkaXJlY3RUbz17XCIvaXRlbXMvZGV0YWlscy9cIiArIGlkfS8+XG5cbmNsYXNzIFN0YXRpc3RpY0xpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgc3RhdGUgPSB7XG4gICAgICAgIHRhYkluZGV4OiAwLFxuICAgIH1cblxuICAgIHN3aXRjaFRhYiA9ICh2YWx1ZSkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKCgpID0+ICh7XG4gICAgICAgICAgICB0YWJJbmRleDogdmFsdWUsXG4gICAgICAgIH0pKVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5hZG1pbkRhc2hib2FyZCkge1xuICAgICAgICAgICAgY29uc3QgYmF0Y2hPd25lciA9ICdkYXNoYm9hcmRNYW51ZmFjdHVyZXJCYXRjaCdcbiAgICAgICAgICAgIHRoaXMucHJvcHMub3duZXJBY3Rpb25zLmluaXRPd25lcihiYXRjaE93bmVyKTtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub3duZXJBY3Rpb25zLmluaXRGb3JtUGFyYW1zKGJhdGNoT3duZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyRmlsdGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8RGFzaGJvYXJkSXRlbUxpc3RGaWx0ZXJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT17dGhpcy5wcm9wcy50eXBlfVxuICAgICAgICAgICAgICAgICAgICBvd25lcj17dGhpcy5wcm9wcy5vd25lcn1cbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzZXM9e1tdfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9O1xuICAgIFxuICAgIHJlbmRlckNvbnRlbnQoKSB7XG4gICAgICAgIGNvbnN0IGNvbHVtbnMgPSBbXG4gICAgICAgICAgICB7aWQ6IDAsIGhlYWRlcjogXCJcIiwgdmFsdWU6IFwiaWRcIiwgdHlwZTogXCJmdW5jdGlvblwiLCBmdW5jOiBzaG93RGV0YWlscywgc3R5bGU6IHt3aWR0aDogMjAsIHBhZGRpbmdMZWZ0OiAnMjBweCAhaW1wb3J0YW50J319LFxuICAgICAgICAgICAge2lkOiAxLCBoZWFkZXI6IFwiTVhUIElEXCIsIHZhbHVlOiBcImlkXCIsIHR5cGU6ICdzdHJpbmcnLCBzdHlsZToge3dpZHRoOiA4MX19LCBcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogMixcbiAgICAgICAgICAgICAgICBoZWFkZXI6IFwiTWFudWZhY3R1cmVyXCIsXG4gICAgICAgICAgICAgICAgc29ydDogXCJtYW51ZmFjdHVyZXIuc2hvcnROYW1lXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IFwibWFudWZhY3R1cmVyXCIsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgc3R5bGU6IHt3aWR0aDogMTEwfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtpZDogMywgaGVhZGVyOiBcIlFSIGNvZGVcIiwgdmFsdWU6IFwicXJDb2RlXCIsIHR5cGU6ICdzdHJpbmcnLCBzdHlsZToge3dpZHRoOiAxMDB9fSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogNCxcbiAgICAgICAgICAgICAgICBoZWFkZXI6IFwiRHJ1ZyBuYW1lXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IFwiZHJ1Z05hbWVcIixcbiAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICBzdHlsZToge21pbldpZHRoOiAxMDQsIHdoaXRlU3BhY2U6IFwibm9ybWFsXCJ9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiA1LFxuICAgICAgICAgICAgICAgIGhlYWRlcjogXCJNYW51ZmFjdHVyZWQgZGF0ZVwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBcIm1hbnVmYWN0dXJlZERhdGVcIixcbiAgICAgICAgICAgICAgICB0eXBlOiAnZGF0ZScsXG4gICAgICAgICAgICAgICAgc3R5bGU6IHt3aWR0aDogMTAwfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogNixcbiAgICAgICAgICAgICAgICBoZWFkZXI6IFwiRXhwaXJhdGlvbiBkYXRlXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IFwiZXhwaXJhdGlvbkRhdGVcIixcbiAgICAgICAgICAgICAgICB0eXBlOiAnZGF0ZScsXG4gICAgICAgICAgICAgICAgc3R5bGU6IHt3aWR0aDogMTAwfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogNyxcbiAgICAgICAgICAgICAgICBoZWFkZXI6IFwiSU5OXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IFwiaW5uXCIsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgc3R5bGU6IHttaW5XaWR0aDogMTUwLCB3aGl0ZVNwYWNlOiBcIm5vcm1hbFwiLCB3b3JkQnJlYWs6IFwiYnJlYWstd29yZFwifVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogOCxcbiAgICAgICAgICAgICAgICBoZWFkZXI6IFwiU3RhdHVzXCIsXG4gICAgICAgICAgICAgICAgc29ydDogXCJsYXN0VHJhY2suaXRlbVN0YXR1c1wiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBcIml0ZW1TdGF0dXNcIixcbiAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICBzdHlsZToge3dpZHRoOiA4OH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7aWQ6IDksIGhlYWRlcjogXCJEYXRlIHNlbnRcIiwgdmFsdWU6IFwic2VudERhdGVcIiwgdHlwZTogJ2RhdGUnLCBzdHlsZToge3dpZHRoOiA5MH19LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiAxMCxcbiAgICAgICAgICAgICAgICBoZWFkZXI6IFwiRGF0ZSByZWNlaXZlZFwiLFxuICAgICAgICAgICAgICAgIHNvcnQ6IFwibGFzdFRyYWNrLmRhdGVcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogXCJyZWNlaXZlZERhdGVcIixcbiAgICAgICAgICAgICAgICB0eXBlOiAnZGF0ZScsXG4gICAgICAgICAgICAgICAgZm9ybWF0OiBDTElFTlRfRk9STUFUX0RBVEVfVElNRSxcbiAgICAgICAgICAgICAgICBzdHlsZToge3dpZHRoOiAxMjJ9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiAxMSxcbiAgICAgICAgICAgICAgICBoZWFkZXI6IFwiRGF0ZSBhZGRlZFwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBcImRhdGVBZGRlZFwiLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdkYXRlJyxcbiAgICAgICAgICAgICAgICBmb3JtYXQ6IENMSUVOVF9GT1JNQVRfREFURV9USU1FLFxuICAgICAgICAgICAgICAgIHN0eWxlOiB7d2lkdGg6IDEyMiwgd29yZFNwYWNpbmc6IFwiOTlweFwifVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogMTIsXG4gICAgICAgICAgICAgICAgaGVhZGVyOiBcIkRhdGUgb2YgcHVyY2hhc2VcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogXCJwdXJjaGFzZURhdGVcIixcbiAgICAgICAgICAgICAgICB0eXBlOiAnZGF0ZScsXG4gICAgICAgICAgICAgICAgZm9ybWF0OiBDTElFTlRfRk9STUFUX0RBVEVfVElNRSxcbiAgICAgICAgICAgICAgICBzdHlsZToge3dpZHRoOiAxMjJ9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiAxMyxcbiAgICAgICAgICAgICAgICBoZWFkZXI6IFwiRmFjaWxpdHkgSW52ZW50b3J5XCIsXG4gICAgICAgICAgICAgICAgc29ydGFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBcImZhY2lsaXR5XCIsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgc3R5bGU6IHt3aWR0aDogNzR9XG4gICAgICAgICAgICB9LFxuICAgICAgICBdO1xuICAgICAgICBcblxuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5hZG1pbkRhc2hib2FyZCA/IChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICA8Qm94IHBsPXszLjc1fSB3aWR0aD17MTAwMH0+XG4gICAgICAgICAgICAgICAgPExpc3RzSGVhZGVyXG4gICAgICAgICAgICAgICAgICAgIGxpc3RUaXRsZT1cIkl0ZW0gbGlzdHNcIlxuICAgICAgICAgICAgICAgICAgICByZWRpcmVjdFBhdGg9XCIvZGFzaGJvYXJkL21hbnVmYWN0dXJlclwiXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0U2lkZUNvbXBvbmVudHM9e1xuICAgICAgICAgICAgICAgICAgICAgICAgPEJveD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9wVGFicyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9e3RoaXMuc3RhdGUudGFiSW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaFRhYj17dGhpcy5zd2l0Y2hUYWJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlZD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgPFRhYlBhbmVsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnRhYkluZGV4fVxuICAgICAgICAgICAgICAgICAgICBpbmRleD17MH1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUudGFiSW5kZXggPT09IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPERlc2lnbkxpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZyZXNoQnV0dG9uPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRlZEhlYWRlcnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRCdXR0b249e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1OYW1lPXtcIml0ZW1zXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50aXRpZXM9e3RoaXMucHJvcHMuZW50aXR5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3Rpb25zPVwibGlzdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3duZXI9e3RoaXMucHJvcHMub3duZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFByb3BzTGlzdD17e2RlZmF1bHRQcm9wZXJ0eUxpc3Q6IHtzb3J0OiBcImRhdGVBZGRlZCxkZXNjXCIsIHNpemU6IDV9fX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0FkbWluRGFzaGJvYXJkPXt0aGlzLnByb3BzLmFkbWluRGFzaGJvYXJkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSXRlbXNMaXN0PXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L1RhYlBhbmVsPlxuICAgICAgICAgICAgICAgIDxUYWJQYW5lbFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS50YWJJbmRleH1cbiAgICAgICAgICAgICAgICAgICAgaW5kZXg9ezF9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnRhYkluZGV4ID09PSAxICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEYXNoYm9hcmRJdGVtQmF0Y2hWaWV3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0nTUFOVUZBQ1RVUkVSJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyPVwiZGFzaGJvYXJkTWFudWZhY3R1cmVyQmF0Y2hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkbWluRGFzaGJvYXJkPXt0aGlzLnByb3BzLmFkbWluRGFzaGJvYXJkfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L1RhYlBhbmVsPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgICA8RGVzaWduTGlzdFxuICAgICAgICAgICAgICAgIHNvcnRlZEhlYWRlcnNcbiAgICAgICAgICAgICAgICBhZGRCdXR0b249e2ZhbHNlfVxuICAgICAgICAgICAgICAgIGNvbnRlbnRUb3A9e3RoaXMucmVuZGVyRmlsdGVyKCl9XG4gICAgICAgICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cbiAgICAgICAgICAgICAgICBwYXJhbU5hbWU9e1wiaXRlbXNcIn1cbiAgICAgICAgICAgICAgICBlbnRpdGllcz17dGhpcy5wcm9wcy5lbnRpdHl9XG4gICAgICAgICAgICAgICAgcHJvamVjdGlvbnM9XCJsaXN0XCJcbiAgICAgICAgICAgICAgICBvd25lcj17dGhpcy5wcm9wcy5vd25lcn1cbiAgICAgICAgICAgICAgICBkZWZhdWx0UHJvcHNMaXN0PXt7ZGVmYXVsdFByb3BlcnR5TGlzdDoge3NvcnQ6IFwiZGF0ZUFkZGVkLGRlc2NcIiwgc2l6ZTogMjB9fX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIClcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5hZG1pbkRhc2hib2FyZFxuICAgICAgICAgICAgPyB0aGlzLnJlbmRlckNvbnRlbnQoKVxuICAgICAgICAgICAgOiAoXG4gICAgICAgICAgICAgICAgPFdpZGdldFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXI9eydPdmVyYWxsIFN0YXRpc3RpY3MnfVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOiAnMTAwJSd9fVxuICAgICAgICAgICAgICAgICAgICBlcnJvcj17dGhpcy5wcm9wcy5lcnJvcn1cbiAgICAgICAgICAgICAgICAgICAgY29udGVudD17dGhpcy5yZW5kZXJDb250ZW50KCl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICk7XG4gICAgfTtcbiAgICBcbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCBvd25Qcm9wcykgPT4gKHtcbiAgICBlcnJvcjogISFzdGF0ZS5vd25lcltvd25Qcm9wcy5vd25lcl0gPyBzdGF0ZS5vd25lcltvd25Qcm9wcy5vd25lcl0uc3RhdGUuZXJyb3JMaXN0IDogbnVsbFxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XG4gICAgb3duZXJBY3Rpb25zOiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWN0aW9uQ3JlYXRvcnMsIGRpc3BhdGNoKVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFN0YXRpc3RpY0xpc3QpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==