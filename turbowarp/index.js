class AiTranslate {
  getInfo() {
    return {
      id: 'aitranslate',
      name: 'AI翻訳',
      blocks: [
        {
          opcode: 'translateText',
          blockType: Scratch.BlockType.REPORTER,
          text: '[TEXT]を[LANG]に翻訳する',
          arguments: {
            TEXT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Hello'
            },
            LANG: {
              type: Scratch.ArgumentType.STRING,
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

  async translateText(args) {
    const text = args.TEXT;
    const targetLang = args.LANG;

    // APIの利用可能性をチェック
    if (!('Translator' in self) || !('LanguageDetector' in self)) {
      console.error('Translator API or LanguageDetector API is not supported in this browser');
      return 'エラー: ブラウザが対応していません';
    }

    try {
      // 言語検出器を作成
      const detector = await LanguageDetector.create();

      // 入力テキストの言語を自動検出
      const detectionResults = await detector.detect(text.trim());
      const sourceLanguage = detectionResults[0].detectedLanguage;

      // 言語ペアの対応状況を確認
      const availability = await Translator.availability({
        sourceLanguage: sourceLanguage,
        targetLanguage: targetLang
      });

      if (availability === 'unavailable') {
        return 'エラー: この言語への翻訳はサポートされていません';
      }

      // 翻訳器を作成
      const translator = await Translator.create({
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

Scratch.extensions.register(new AiTranslate());
