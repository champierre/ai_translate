import React from 'react';
import {FormattedMessage} from 'react-intl';

import aiTranslateIconURL from './ai_translate.png';
import aiTranslateInsetIconURL from './ai_translate-small.png';

const translationMap = {
    'ja': {
        'gui.extension.aiTranslate.description': 'AI翻訳を使ってテキストを翻訳する。'
    },
    'ja-Hira': {
        'gui.extension.aiTranslate.description': 'AIほんやくをつかってテキストをほんやくする。'
    }
};

const entry = {
    name: 'AI Translate',
    extensionId: 'aiTranslate',
    extensionURL: 'https://champierre.github.io/ai_translate/ai_translate.mjs',
    collaborator: 'champierre',
    iconURL: aiTranslateIconURL,
    insetIconURL: aiTranslateInsetIconURL,
    description: (
        <FormattedMessage
            defaultMessage="AI Translate Blocks."
            description="Description for AI Translate Blocks."
            id="gui.extension.aiTranslate.description"
        />
    ),
    featured: true,
    disabled: false,
    bluetoothRequired: false,
    internetConnectionRequired: true,
    helpLink: 'https://github.com/champierre/ai_translate/',
    translationMap: translationMap
};

export {entry}; // loadable-extension needs this line.
export default entry;
