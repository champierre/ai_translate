# AI翻訳 (AI Translate)

AI翻訳は、ChromeのTranslator APIとLanguage Detector APIを利用してテキストを翻訳するScratchの独自拡張機能です。

## 特徴

- ChromeのビルトインTranslator APIを使用
- 言語自動検出機能（Language Detector API）
- オフラインでも動作（言語モデルダウンロード後）
- 13言語に対応
- シンプルで使いやすいインターフェース

## 対応言語

- 日本語 (ja)
- 英語 (en)
- 中国語（簡体字）(zh)
- 中国語（繁体字）(zh-Hant)
- スペイン語 (es)
- ポルトガル語 (pt)
- フランス語 (fr)
- ドイツ語 (de)
- ロシア語 (ru)
- トルコ語 (tr)
- ヒンディー語 (hi)
- ベトナム語 (vi)
- ベンガル語 (bn)

## 必要な環境

- Chrome 130以降、またはEdge 130以降
- Translator APIとLanguage Detector APIが有効になっているブラウザ

### Translator APIの有効化

Chrome/Edgeで以下の設定を確認してください：

1. アドレスバーに `chrome://flags` を入力
2. "Translator API" と "Language Detector API" を検索
3. 両方を "Enabled" に設定
4. ブラウザを再起動

## 使い方

### TurboWarp (ターボワープ) からの利用

[TurboWarp](https://turbowarp.org/)で使用する場合：

1. TurboWarpで「拡張機能」→「カスタム拡張機能」を選択
2. ファイルから `ai_translate.js` を選択
3. 拡張機能を読み込み
4. 「[テキスト]を[言語]に翻訳する」ブロックを使用

### Xcratchからの利用

[Xcratch](https://xcratch.github.io/) をブラウザで開き、「エディターを開く」を選んだあと、「拡張機能を選ぶ」画面から「拡張機能を読み込む」を選びます。
URL入力欄に `ai_translate.mjs` のURLを入力すると、AI翻訳を開くことができます。

## ブロック

### [テキスト]を[言語]に翻訳する

指定したテキストを選択した言語に翻訳します。入力テキストの言語は自動的に検出されます。

**使用例:**
```
「Hello」を「日本語」に翻訳する → 「こんにちは」
「ありがとう」を「英語」に翻訳する → 「Thank you」
「Bonjour」を「日本語」に翻訳する → 「こんにちは」（フランス語が自動検出される）
```

## 注意事項

- 初回翻訳時に言語モデルのダウンロードが必要な場合があります
- ダウンロード中は少し時間がかかる場合があります
- オフラインでも使用できますが、初回は必ずオンライン環境が必要です
- Translator APIとLanguage Detector APIはChrome 130以降の機能であるため、古いブラウザでは動作しません
- 入力テキストの言語は自動的に検出されるため、ソース言語を指定する必要はありません

## ライセンス

AI翻訳には [MIT license](./LICENSE) が適用されます。オープンソースで、誰でも自由に利用できます。

## 開発者向け情報

### ビルド

```bash
npm run build
```

### 開発

拡張機能のソースコードは以下のファイルに含まれています：

- `ai_translate.js` - TurboWarp/Xcratch用の拡張機能
- `scratch-vm/src/extensions/scratch3_ai_translate/index.js` - Scratch VM用の拡張機能
