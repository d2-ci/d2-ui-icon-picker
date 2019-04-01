import _Object$assign from 'babel-runtime/core-js/object/assign';
import _extends from 'babel-runtime/helpers/extends';
import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Popover from 'material-ui/Popover/Popover';
import IconOption from './IconOption.component';
import CurrentIcon from './CurrentIcon.component';

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
    _inherits(IconPicker, _Component);

    function IconPicker() {
        var _ref;

        _classCallCheck(this, IconPicker);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = IconPicker.__proto__ || _Object$getPrototypeOf(IconPicker)).call.apply(_ref, [this].concat(args)));

        _this.state = {
            showOptions: false
        };

        _this.currentIconClicked = _this.currentIconClicked.bind(_this);
        _this.closeOptions = _this.closeOptions.bind(_this);
        _this.onIconSelected = _this.onIconSelected.bind(_this);
        return _this;
    }

    _createClass(IconPicker, [{
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

                return React.createElement(IconOption, _extends({ key: index }, optionProps, { onIconClicked: _this2.onIconSelected }));
            });

            return React.createElement(
                'div',
                null,
                React.createElement(
                    'div',
                    { className: 'icon-picker__label-text', style: styles.iconPickerLabel },
                    this.props.labelText
                ),
                React.createElement(CurrentIcon, { imgSrc: getImgSrc(this.props.imgPath, this.props.value), onIconClicked: this.currentIconClicked }),
                React.createElement(
                    Popover,
                    {
                        open: this.state.showOptions,
                        anchorEl: this.state.anchorEl,
                        onRequestClose: this.closeOptions,
                        style: _Object$assign(styles.iconPopover, this.props.iconPopoverStyle)
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
}(Component);

IconPicker.propTypes = {
    imgPath: PropTypes.string,
    options: PropTypes.array,
    labelText: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.any,
    iconPopoverStyle: PropTypes.object
};

IconPicker.defaultProps = {
    imgPath: '',
    options: [],
    labelText: 'Icon picker',
    onChange: function onChange() {}
};

export default IconPicker;