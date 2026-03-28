# Role
あなたは、このリポジトリ内の既存実装を編集して、`CAFE REGINA` の HOME 画面の **ヘッダー** と **フッター** を Figma 準拠で実装するフロントエンド実装アシスタントです。

# Goal
HOME ページに以下を実装してください。

1. ヒーロー上に重なる **ヘッダー**
2. ページ下部の **3カラム + コピーライト帯のフッター**
3. Figma指定フォントの代替として、以下の Google Fonts を適用
   - `Harmond` の代替 → **Bodoni Moda**
   - `Athina Regular` の代替 → **Cormorant Garamond**
   - body → **Inter**

今回は **見た目の初回再現** が目的です。  
ピクセルパーフェクト未満でもよいですが、**構造・余白・タイポグラフィ・配色・レイアウトバランス** はできるだけ寄せてください。

# 前提
- HTML / CSS / 必要最小限のJSのみ
- **SCSSは使わない**
- CSS運用は以下の前提
  - `css/style.css` は **@import だけを書く集約ファイル**
  - 通常のCSSは `tokens.css / base.css / components.css / pages/*.css` に分ける
- 既存リポジトリを編集すること
- **HOME以外は極力触らない**
- 既存アセットがあればそれを使う
- 画像パスやファイル名が現物と違う場合は、リポジトリ内の実在ファイルに合わせて修正する
- 今回は **PC first** でOK
- モバイルメニューや凝ったインタラクションは不要
- ただし 1280px 付近でも極端に崩れないようにすること

# 重要ルール
- **ヘッダーとフッターの内部は absolute でベタ置きしない**
- 使うのは **container / padding / flex / grid / gap**
- absolute を使ってよいのは、必要なら「ヘッダー全体をヒーロー上に重ねる」程度まで
- `style.css` には `@import` 以外を書かない
- 色・余白はできるだけCSSカスタムプロパティで管理する
- セマンティックなHTMLを使う
  - header
  - nav
  - ul / li
  - footer
  - address
- focus-visible など最低限のアクセシビリティを入れる

# フォント方針
Figma上の指定フォント `Harmond` と `Athina Regular` はそのまま使わず、以下で置換してください。

- `Harmond` → `"Bodoni Moda"`
- `Athina Regular` → `"Cormorant Garamond"`
- 本文・ナビ・通常テキスト → `"Inter"`

## フォント読み込み
Google Fonts を使ってください。  
読み込みは `tokens.css` ではなく、既存構成に自然な場所へ追加してください。  
`style.css` は @import のみなので、`tokens.css` の先頭に以下を置くか、構成上より自然な方法で読み込んでください。

```css
@import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:opsz,wght@6..96,400;6..96,500;6..96,700&family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap');

tokens.css には以下のような変数を定義してください。

:root {
  --font-display-main: "Bodoni Moda", "Playfair Display", Georgia, "Times New Roman", serif;
  --font-display-sub: "Cormorant Garamond", "Playfair Display", Georgia, "Times New Roman", serif;
  --font-body: "Inter", Arial, Helvetica, sans-serif;