'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = CurrentIcon;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FlatButton = require('material-ui/FlatButton/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _fp = require('lodash/fp');

var _d2UiCore = require('@dhis2/d2-ui-core');

var _loglevel = require('loglevel');

var _loglevel2 = _interopRequireDefault(_loglevel);

var _IconOption = require('./IconOption.component');

var _IconOption2 = _interopRequireDefault(_IconOption);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Translate(props, context) {
    if (context.d2 && context.d2.i18n && (0, _fp.isFunction)(context.d2.i18n.getTranslation)) {
        return _react2.default.createElement(
            'span',
            null,
            context.d2.i18n.getTranslation(props.children)
        );
    }

    _loglevel2.default.error('<Translate />: d2 is not available on the `context`');
    return _react2.default.createElement('span', null);
}

var TranslateSpan = (0, _d2UiCore.addD2Context)(Translate);

function CurrentIcon(props) {

    if (!props.imgSrc) {
        return _react2.default.createElement(
            _FlatButton2.default,
            { onClick: props.onIconClicked },
            _react2.default.createElement(
                TranslateSpan,
                null,
                'select'
            )
        );
    }

    return _react2.default.createElement(_IconOption2.default, props);
}