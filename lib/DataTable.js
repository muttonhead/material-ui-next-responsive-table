'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Table = require('material-ui/Table');

var _Table2 = _interopRequireDefault(_Table);

var _Renderer = require('./Renderer');

var _NoContent = require('./NoContent');

var _NoContent2 = _interopRequireDefault(_NoContent);

var _Pagination = require('./Pagination');

var _Pagination2 = _interopRequireDefault(_Pagination);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Simple read only table with header and body
 */
var DataTable = function (_Component) {
  _inherits(DataTable, _Component);

  function DataTable() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, DataTable);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DataTable.__proto__ || Object.getPrototypeOf(DataTable)).call.apply(_ref, [this].concat(args))), _this), _this.handleChangePage = function (event, page) {
      return _this.props.onChangePage(event, page);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DataTable, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          columns = _props.columns,
          count = _props.count,
          data = _props.data,
          noContentText = _props.noContentText,
          page = _props.page,
          rowsPerPage = _props.rowsPerPage,
          showPagination = _props.showPagination,
          TableBodyCellProps = _props.TableBodyCellProps,
          TableBodyProps = _props.TableBodyProps,
          TableBodyRowProps = _props.TableBodyRowProps,
          TableHeadCellProps = _props.TableHeadCellProps,
          TableHeadProps = _props.TableHeadProps,
          TableHeadRowProps = _props.TableHeadRowProps,
          TablePaginationProps = _props.TablePaginationProps,
          TableProps = _props.TableProps;


      if (!Array.isArray(data) || data.length === 0 || !Array.isArray(columns) || columns.length === 0) {
        return _react2.default.createElement(_NoContent2.default, { text: noContentText });
      }

      return _react2.default.createElement(
        _Table2.default,
        TableProps,
        _react2.default.createElement(
          _Table.TableHead,
          TableHeadProps,
          _react2.default.createElement(
            _Table.TableRow,
            TableHeadRowProps,
            columns.map(function (column, index) {
              return _react2.default.createElement(
                _Table.TableCell,
                _extends({
                  key: column.label + '-' + index
                }, TableHeadCellProps),
                _react2.default.createElement(_Renderer.LabelRenderer, { column: column, data: data })
              );
            })
          )
        ),
        _react2.default.createElement(
          _Table.TableBody,
          TableBodyProps,
          data.map(function (row, rowIndex) {
            return _react2.default.createElement(
              _Table.TableRow,
              _extends({ key: rowIndex }, TableBodyRowProps),
              columns.map(function (column, columnIndex) {
                return _react2.default.createElement(
                  _Table.TableCell,
                  _extends({
                    key: rowIndex + '-' + columnIndex
                  }, TableBodyCellProps),
                  _react2.default.createElement(_Renderer.CellRenderer, { column: column, row: row, data: data })
                );
              })
            );
          })
        ),
        showPagination && _react2.default.createElement(
          _Table.TableFooter,
          null,
          _react2.default.createElement(
            _Table.TableRow,
            null,
            _react2.default.createElement(_Pagination2.default, {
              count: count,
              rowsPerPage: rowsPerPage,
              page: page,
              TablePaginationProps: TablePaginationProps,
              onChangePage: this.handleChangePage
            })
          )
        )
      );
    }
  }]);

  return DataTable;
}(_react.Component);

exports.default = DataTable;