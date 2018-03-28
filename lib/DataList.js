'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Grid = require('material-ui/Grid');

var _Grid2 = _interopRequireDefault(_Grid);

var _Renderer = require('./Renderer');

var _ExpandableListItem = require('./ExpandableListItem');

var _ExpandableListItem2 = _interopRequireDefault(_ExpandableListItem);

var _NoContent = require('./NoContent');

var _NoContent2 = _interopRequireDefault(_NoContent);

var _Pagination = require('./Pagination');

var _Pagination2 = _interopRequireDefault(_Pagination);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * List with expandable items - mobile table analogue
 */
var DataList = function (_Component) {
  _inherits(DataList, _Component);

  function DataList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, DataList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DataList.__proto__ || Object.getPrototypeOf(DataList)).call.apply(_ref, [this].concat(args))), _this), _this.handleChangePage = function (event, page) {
      return _this.props.onChangePage(event, page);
    }, _this.createListItemTitle = function (columns, row, data) {
      var primaryColumns = columns.filter(function (column) {
        return column.primary;
      });
      return primaryColumns.length === 0 ? _react2.default.createElement(_Renderer.CellRenderer, { column: columns[0], row: row, data: data }) : primaryColumns.map(function (column) {
        return _react2.default.createElement(_Renderer.CellRenderer, { key: column.key, column: column, row: row, data: data });
      }).reduce(function (prev, next) {
        return [prev, ' ', next];
      }); // divide item headers by space
    }, _this.createListItemDescription = function (columns, row, data, excludePrimary) {
      return _react2.default.createElement(
        'div',
        null,
        columns.filter(function (column) {
          return !excludePrimary || !column.primary;
        }).map(function (column, index) {
          return _react2.default.createElement(
            _Grid2.default,
            { key: column.label + '-' + index, container: true },
            _react2.default.createElement(
              _Grid2.default,
              { item: true, xs: true },
              _react2.default.createElement(_Renderer.LabelRenderer, { column: column, data: data })
            ),
            _react2.default.createElement(
              _Grid2.default,
              { item: true, xs: true },
              _react2.default.createElement(_Renderer.CellRenderer, { column: column, row: row, data: data })
            )
          );
        })
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DataList, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          columns = _props.columns,
          count = _props.count,
          data = _props.data,
          excludePrimaryFromDetails = _props.excludePrimaryFromDetails,
          noContentText = _props.noContentText,
          page = _props.page,
          rowsPerPage = _props.rowsPerPage,
          scrollToSelected = _props.scrollToSelected,
          scrollOptions = _props.scrollOptions,
          showPagination = _props.showPagination,
          ExpansionPanelDetailsProps = _props.ExpansionPanelDetailsProps,
          ExpansionPanelDetailsTypographyProps = _props.ExpansionPanelDetailsTypographyProps,
          ExpansionPanelMoreIconProps = _props.ExpansionPanelMoreIconProps,
          ExpansionPanelProps = _props.ExpansionPanelProps,
          ExpansionPanelSummaryProps = _props.ExpansionPanelSummaryProps,
          ExpansionPanelSummaryTypographyProps = _props.ExpansionPanelSummaryTypographyProps,
          SelectedExpansionPanelProps = _props.SelectedExpansionPanelProps,
          TablePaginationProps = _props.TablePaginationProps;


      if (!Array.isArray(data) || data.length === 0 || !Array.isArray(columns) || columns.length === 0) {
        return _react2.default.createElement(_NoContent2.default, { text: noContentText });
      }

      return _react2.default.createElement(
        'div',
        null,
        data.map(function (row, index) {
          return _react2.default.createElement(_ExpandableListItem2.default, {
            key: index,
            summary: _this2.createListItemTitle(columns, row, data),
            details: _this2.createListItemDescription(columns, row, data, excludePrimaryFromDetails),
            selected: row.selected,
            scrollToSelected: scrollToSelected,
            scrollOptions: scrollOptions,
            ExpansionPanelDetailsProps: ExpansionPanelDetailsProps,
            ExpansionPanelDetailsTypographyProps: ExpansionPanelDetailsTypographyProps,
            ExpansionPanelMoreIconProps: ExpansionPanelMoreIconProps,
            ExpansionPanelProps: ExpansionPanelProps,
            ExpansionPanelSummaryProps: ExpansionPanelSummaryProps,
            ExpansionPanelSummaryTypographyProps: ExpansionPanelSummaryTypographyProps,
            SelectedExpansionPanelProps: SelectedExpansionPanelProps
          });
        }),
        showPagination && _react2.default.createElement(_Pagination2.default, {
          component: 'div',
          count: count,
          rowsPerPage: rowsPerPage,
          page: page,
          TablePaginationProps: TablePaginationProps,
          onChangePage: this.handleChangePage
        })
      );
    }
  }]);

  return DataList;
}(_react.Component);

exports.default = DataList;