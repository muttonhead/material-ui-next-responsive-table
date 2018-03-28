'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _ExpandMore = require('material-ui-icons/ExpandMore');

var _ExpandMore2 = _interopRequireDefault(_ExpandMore);

var _ExpansionPanel = require('material-ui/ExpansionPanel');

var _ExpansionPanel2 = _interopRequireDefault(_ExpansionPanel);

var _Typography = require('material-ui/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _styles = require('material-ui/styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  summaryText: {
    width: '100%'
  },
  detailsText: {
    opacity: 0.5,
    width: '100%'
  }

  /**
   * Expandable component with header text (summary) and expandable description text (details)
   */
};
var ExpandableListItem = function (_Component) {
  _inherits(ExpandableListItem, _Component);

  function ExpandableListItem() {
    _classCallCheck(this, ExpandableListItem);

    return _possibleConstructorReturn(this, (ExpandableListItem.__proto__ || Object.getPrototypeOf(ExpandableListItem)).apply(this, arguments));
  }

  _createClass(ExpandableListItem, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.selected && nextProps.scrollToSelected) {
        // material-ui-next encourages ReactDOM until React find better way
        // https://material-ui-next.com/getting-started/frequently-asked-questions/#how-can-i-access-the-dom-element-
        _reactDom2.default.findDOMNode(this).scrollIntoView(nextProps.scrollOptions || { behavior: 'smooth', block: 'center' });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          details = _props.details,
          selected = _props.selected,
          summary = _props.summary,
          ExpansionPanelDetailsProps = _props.ExpansionPanelDetailsProps,
          ExpansionPanelDetailsTypographyProps = _props.ExpansionPanelDetailsTypographyProps,
          ExpansionPanelMoreIconProps = _props.ExpansionPanelMoreIconProps,
          ExpansionPanelProps = _props.ExpansionPanelProps,
          ExpansionPanelSummaryProps = _props.ExpansionPanelSummaryProps,
          ExpansionPanelSummaryTypographyProps = _props.ExpansionPanelSummaryTypographyProps,
          SelectedExpansionPanelProps = _props.SelectedExpansionPanelProps;


      var rootProps = selected ? _extends({}, ExpansionPanelProps, SelectedExpansionPanelProps) : ExpansionPanelProps;

      return _react2.default.createElement(
        _ExpansionPanel2.default,
        rootProps,
        _react2.default.createElement(
          _ExpansionPanel.ExpansionPanelSummary,
          _extends({
            expandIcon: _react2.default.createElement(_ExpandMore2.default, ExpansionPanelMoreIconProps)
          }, ExpansionPanelSummaryProps),
          _react2.default.createElement(
            _Typography2.default,
            _extends({
              classes: {
                root: classes.summaryText
              },
              gutterBottom: true,
              variant: 'headline'
            }, ExpansionPanelSummaryTypographyProps),
            summary
          )
        ),
        _react2.default.createElement(
          _ExpansionPanel.ExpansionPanelDetails,
          ExpansionPanelDetailsProps,
          _react2.default.createElement(
            _Typography2.default,
            _extends({
              classes: {
                root: classes.detailsText
              },
              gutterBottom: true,
              variant: 'headline'
            }, ExpansionPanelDetailsTypographyProps),
            details
          )
        )
      );
    }
  }]);

  return ExpandableListItem;
}(_react.Component);

exports.default = (0, _styles.withStyles)(styles)(ExpandableListItem);