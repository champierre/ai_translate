const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const Cast = require('../../util/cast');
const blockIconURI = 'data:image/png;base64,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';

/**
 * URL to get this extension as a module.
 * When it was loaded as a module, 'extensionURL' will be replaced a URL which is retrieved from.
 * @type {string}
 */
let extensionURL = 'https://champierre.github.io/ai_translate/ai_translate.mjs';

class Scratch3AiTranslate {

    /**
     * @return {string} - the name of this extension.
     */
    static get EXTENSION_NAME() {
        return 'AI翻訳';
    }

    /**
     * @return {string} - the ID of this extension.
     */
    static get EXTENSION_ID() {
        return 'ai_translate';
    }

    /**
     * URL to get this extension.
     * @type {string}
     */
    static get extensionURL() {
        return extensionURL;
    }

    /**
     * Set URL to get this extension.
     * extensionURL will be reset when the module is loaded from the web.
     * @param {string} url - URL
     */
    static set extensionURL(url) {
        extensionURL = url;
    }

    constructor (runtime) {
        this.runtime = runtime;
    }

    getInfo () {
        return {
            id: Scratch3AiTranslate.EXTENSION_ID,
            name: Scratch3AiTranslate.EXTENSION_NAME,
            extensionURL: Scratch3AiTranslate.extensionURL,
            blockIconURI: blockIconURI,
            blocks: [
                {
                    opcode: 'translateText',
                    blockType: BlockType.REPORTER,
                    text: '[TEXT]を[LANG]に翻訳する',
                    arguments: {
                        TEXT: {
                            type: ArgumentType.STRING,
                            defaultValue: 'Hello'
                        },
                        LANG: {
                            type: ArgumentType.STRING,
                            menu: 'languages'
                        }
                    }
                }
            ],
            menus: {
                languages: {
                    acceptReporters: true,
                    items: [
                        { text: '日本語', value: 'ja' },
                        { text: '英語', value: 'en' },
                        { text: '中国語（簡体字）', value: 'zh' },
                        { text: '中国語（繁体字）', value: 'zh-Hant' },
                        { text: 'スペイン語', value: 'es' },
                        { text: 'ポルトガル語', value: 'pt' },
                        { text: 'フランス語', value: 'fr' },
                        { text: 'ドイツ語', value: 'de' },
                        { text: 'ロシア語', value: 'ru' },
                        { text: 'トルコ語', value: 'tr' },
                        { text: 'ヒンディー語', value: 'hi' },
                        { text: 'ベトナム語', value: 'vi' },
                        { text: 'ベンガル語', value: 'bn' }
                    ]
                }
            }
        };
    }

    async translateText (args) {
        const text = Cast.toString(args.TEXT);
        const targetLang = Cast.toString(args.LANG);

        // APIの利用可能性をチェック
        if (typeof self === 'undefined' || !('Translator' in self) || !('LanguageDetector' in self)) {
            console.error('Translator API or LanguageDetector API is not supported in this browser');
            return 'エラー: ブラウザが対応していません';
        }

        try {
            // 言語検出器を作成
            const detector = await self.LanguageDetector.create();

            // 入力テキストの言語を自動検出
            const detectionResults = await detector.detect(text.trim());
            const sourceLanguage = detectionResults[0].detectedLanguage;

            // 言語ペアの対応状況を確認
            const availability = await self.Translator.availability({
                sourceLanguage: sourceLanguage,
                targetLanguage: targetLang
            });

            if (availability === 'unavailable') {
                return 'エラー: この言語への翻訳はサポートされていません';
            }

            // 翻訳器を作成
            const translator = await self.Translator.create({
                sourceLanguage: sourceLanguage,
                targetLanguage: targetLang
            });

            // 翻訳実行
            const result = await translator.translate(text);
            return result;

        } catch (error) {
            console.error('Translation error:', error);
            return 'エラー: 翻訳に失敗しました';
        }
    }
}

exports.blockClass = Scratch3AiTranslate; // loadable-extension needs this line.
module.exports = Scratch3AiTranslate;
