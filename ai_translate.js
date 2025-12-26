class AiTranslate {
  constructor() {
    this.translationAPI = window.translation || null;
  }

  getInfo() {
    return {
      id: 'ai_translate',
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
            { text: '韓国語', value: 'ko' },
            { text: 'スペイン語', value: 'es' },
            { text: 'フランス語', value: 'fr' },
            { text: 'ドイツ語', value: 'de' },
            { text: 'イタリア語', value: 'it' },
            { text: 'ポルトガル語', value: 'pt' },
            { text: 'ロシア語', value: 'ru' },
            { text: 'アラビア語', value: 'ar' },
            { text: 'ヒンディー語', value: 'hi' },
            { text: 'タイ語', value: 'th' },
            { text: 'ベトナム語', value: 'vi' }
          ]
        }
      }
    };
  }

  async translateText(args) {
    const text = args.TEXT;
    const targetLang = args.LANG;

    if (!this.translationAPI) {
      console.error('Translation API is not supported in this browser');
      return 'エラー: ブラウザが対応していません';
    }

    try {
      // 翻訳が可能かチェック
      const canTranslate = await this.translationAPI.canTranslate({
        sourceLanguage: 'en', // 自動検出の場合は省略可能
        targetLanguage: targetLang
      });

      if (canTranslate === 'no') {
        return 'エラー: この言語への翻訳はサポートされていません';
      }

      // 翻訳器を作成
      const translator = await this.translationAPI.createTranslator({
        sourceLanguage: 'en', // 自動検出
        targetLanguage: targetLang
      });

      // ダウンロード待ち
      if (canTranslate === 'after-download') {
        console.log('言語モデルをダウンロード中...');
      }

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
