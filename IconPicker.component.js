'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Popover = require('material-ui/Popover/Popover');

var _Popover2 = _interopRequireDefault(_Popover);

var _IconOption = require('./IconOption.component');

var _IconOption2 = _interopRequireDefault(_IconOption);

var _CurrentIcon = require('./CurrentIcon.component');

var _CurrentIcon2 = _interopRequireDefault(_CurrentIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO: Move to d2-utilizr?
function trimSlashesFromEnd(string) {
    return string.replace(/\/+?$/, '');
}

function getImgSrc(imgPath, imgFileName) {
    if (!imgFileName) {
        return '';
    }
    return [trimSlashesFromEnd(imgPath), imgFileName].filter(function (v) {
        return v;
    }).join('/');
}

var IconPicker = function (_Component) {
    (0, _inherits3.default)(IconPicker, _Component);

    function IconPicker() {
        var _ref;

        (0, _classCallCheck3.default)(this, IconPicker);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this = (0, _possibleConstructorReturn3.default)(this, (_ref = IconPicker.__proto__ || (0, _getPrototypeOf2.default)(IconPicker)).call.apply(_ref, [this].concat(args)));

        _this.state = {
            showOptions: false
        };

        _this.currentIconClicked = _this.currentIconClicked.bind(_this);
        _this.closeOptions = _this.closeOptions.bind(_this);
        _this.onIconSelected = _this.onIconSelected.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(IconPicker, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var styles = {
                iconPopover: {
                    paddingTop: '1rem',
                    width: '50%'
                },

                // TODO: Load partial style from material-ui
                iconPickerLabel: {
                    transformOrigin: 'left top 0px',
                    pointerEvents: 'none',
                    color: 'rgba(0, 0, 0, 0.498039)',
                    padding: '1rem 0 .5rem',
                    transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
                    transform: 'scale(.75)',
                    fontSize: '16px'
                }
            };

            var optionElements = this.props.options.map(function (option, index) {
                var optionProps = {
                    value: option,
                    imgSrc: [trimSlashesFromEnd(_this2.props.imgPath), option].join('/')
                };

                return _react2.default.createElement(_IconOption2.default, (0, _extends3.default)({ key: index }, optionProps, { onIconClicked: _this2.onIconSelected }));
            });

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'icon-picker__label-text', style: styles.iconPickerLabel },
                    this.props.labelText
                ),
                _react2.default.createElement(_CurrentIcon2.default, { imgSrc: getImgSrc(this.props.imgPath, this.props.value), onIconClicked: this.currentIconClicked }),
                _react2.default.createElement(
                    _Popover2.default,
                    {
                        open: this.state.showOptions,
                        anchorEl: this.state.anchorEl,
                        onRequestClose: this.closeOptions,
                        style: (0, _assign2.default)(styles.iconPopover, this.props.iconPopoverStyle)
                    },
                    optionElements
                )
            );
        }
    }, {
        key: 'currentIconClicked',
        value: function currentIconClicked(event) {
            this.setState({
                anchorEl: event.currentTarget,
                showOptions: !this.state.showOptions
            });
        }
    }, {
        key: 'closeOptions',
        value: function closeOptions() {
            this.setState({
                showOptions: false
            });
        }
    }, {
        key: 'onIconSelected',
        value: function onIconSelected(event, value) {
            var _this3 = this;

            this.setState({
                showOptions: false
            }, function () {
                _this3.props.onChange(value);
            });
        }
    }]);
    return IconPicker;
}(_react.Component);

IconPicker.propTypes = {
    imgPath: _propTypes2.default.string,
    options: _propTypes2.default.array,
    labelText: _propTypes2.default.string,
    onChange: _propTypes2.default.func,
    value: _propTypes2.default.any,
    iconPopoverStyle: _propTypes2.default.object
};

IconPicker.defaultProps = {
    imgPath: '',
    options: [],
    labelText: 'Icon picker',
    onChange: function onChange() {}
};

exports.default = IconPicker;