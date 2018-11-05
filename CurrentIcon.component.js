import React from 'react';
import FlatButton from 'material-ui/FlatButton/FlatButton';
import { isString } from 'lodash/fp';
import { isFunction } from 'lodash/fp';
import { addD2Context } from '@dhis2/d2-ui-core';
import log from 'loglevel';
import IconOption from './IconOption.component';

function Translate(props, context) {
    if (context.d2 && context.d2.i18n && isFunction(context.d2.i18n.getTranslation)) {
        return React.createElement(
            'span',
            null,
            context.d2.i18n.getTranslation(props.children)
        );
    }

    log.error('<Translate />: d2 is not available on the `context`');
    return React.createElement('span', null);
}

var TranslateSpan = addD2Context(Translate);

export default function CurrentIcon(props) {

    if (!props.imgSrc) {
        return React.createElement(
            FlatButton,
            { onClick: props.onIconClicked },
            React.createElement(
                TranslateSpan,
                null,
                'select'
            )
        );
    }

    return React.createElement(IconOption, props);
}