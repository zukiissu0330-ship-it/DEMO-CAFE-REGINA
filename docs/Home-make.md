# CAFE REGINA / HOME 実装ブリーフ for Codex

## Goal
Figma由来の「CAFE REGINA」HOME画面を、まずは **PC版の静的ページ** として再現する。
最初の目的は **骨格と見た目の再現** であり、完全なピクセルパーフェクトや動的UI実装は後回しにする。

---

## Scope
- 対象: HOME画面のみ
- 対応: PC first
- 実装: HTML / CSS / JavaScript
- 初回は静的実装
- スライダー風UIは「見た目のみ」でよい
- 後で差し替えやすいように、色・フォント・余白は変数化しておく
- 不確定な文言や値は `TODO_VERIFY` を残す

---

## Inputs
Codexには以下を渡す前提:
- HOME全体画像
- 各セクション切り出し画像
- このブリーフ
- 画像アセット群（あとで追加）
- 仮文言

---

## Page Structure
1. Header
2. Hero
3. Drinks
4. Small Hunger
5. Weekend Suggestion
6. Events
7. Photo Gallery
8. Stay informed
9. Newsletter signup
10. Footer

---

## Global Design Notes
- 全体は黒系の質感背景
- 背景に薄い透かしロゴ装飾あり
- セクション区切り線あり
- 明朝系の大きな見出しと、可読性重視の細い本文が混在
- アクセントはゴールド系
- Hero / Events / Suggestion画像には上部アーチ型が多い
- 絶対配置・重なり表現が多い

---

## CSS / Architecture Rules
- セクションごとに明確に分割
- 画像重なりがある箇所は `position: relative` を基本にする
- 色は CSS variables 化:
  - `--color-bg`
  - `--color-surface`
  - `--color-text`
  - `--color-muted`
  - `--color-accent`
  - `--color-line`
- フォントも仮変数化:
  - `--font-display`
  - `--font-body`
- 不確定値は仮置きして `TODO_VERIFY` コメントを残す
- Hero / Events / Gallery の矢印UIは、まずは静的な見た目のみ
- SNSアイコンや矢印は、画像ではなく SVG/CSS 代替を優先してよい

---

## Sections

### 1) Header
**role**
- ブランド表示
- グローバルナビ

**layout**
- 左: 円形ロゴ + ブランド名
- 右: 横並びナビ
- 背景は透過風で、ページ背景の上に直接載る

**text**
- Brand: `CAFE REGINA`
- Nav:
  - `HOME`
  - `DRINKS`
  - `SMALL HUNGER`
  - `SUGGESTIONS`
  - `PHOTOS`
  - `ABOUT US`
  - `CONTACT US`
- Small address text:
  - `GROTE MARKT 15.`
  - `9060 ZELZATE`
  - `TODO_VERIFY` exact punctuation / spacing

**assets**
- `img-logo-main`

---

### 2) Hero
**role**
- 第一印象
- 導線の入口

**layout**
- 中央に大きいアーチ型メイン画像
- 左下に小さいアーチ型ドリンク画像
- 右上に小さいアーチ型注ぎ画像
- 巨大見出しが画像をまたいで重なる
- 右下に紹介文 + CONTACT CTA
- 下部に `01 02 03 04 05` のページネーション風UI

**text**
- Main heading:
  - `Geniet Van Een Gezellige Tijd Bij Café Regina`
  - `TODO_VERIFY` exact spelling / line breaks
- Body:
  - `Café Regina is not only the oldest, but also the nicest café in Zelzate and the surrounding area. So be sure to come by and enjoy a good time!`
- CTA:
  - `CONTACT`
- Supporting:
  - `01`
  - `02`
  - `03`
  - `04`
  - `05`
  - `Since 1927`

**assets**
- `img-hero-main`
- `img-hero-drink`
- `img-hero-pour`

---

### 3) Drinks
**role**
- ドリンクメニュー訴求

**layout**
- 左: 見出し + 本文
- 中央: ベリー入りドリンクのスプラッシュ画像
- 右: カテゴリ一覧 + CTA
- 背景に透かしロゴ装飾あり

**text**
- Heading:
  - `Extensive Drinks`
  - `TODO_VERIFY` simplified note has `Exclusive Drinks` conflict
- Body:
  - `At Café Regina you will always find something you would like to drink. They have a very extensive drinks menu, so there is something for everyone. So be sure to contact us via telephone number or email address or simply drop by the café for a pleasant time!`
- Categories:
  - `BEERS BOTTLE`
  - `APERITIFS/DEGESTIVES`
  - `DRAFT BEERS`
  - `SOFT DRINKS`
- CTA:
  - `ALL MENU`

**todo_verify**
- `BEERS BOTTLE` wording
- `DEGESTIVES` spelling

**assets**
- `img-drink-splash`
- `deco-logo-faded` (optional)

---

### 4) Small Hunger
**role**
- 軽食メニュー訴求

**layout**
- 左: 見出し + 本文
- 中央: 宙に舞うスナック画像
- 右: カテゴリ一覧 + CTA
- Drinksセクションと同系統

**text**
- Heading:
  - `Small Hunger`
- Body:
  - `Also if you want to eat, you should go to Café Regina! For example, you can eat something here if you are feeling a little hungry. There is the farmer's board. The board is filled with a selection of artisan cheeses, cold cuts and crispy freshly baked bread. At the weekend you will find many tasty Flemish classics here, such as home-made stew and pork cheeks with abbey beer.`
- Categories:
  - `REFRESHMENTS`
  - `PANCAKES / WAFFLES`
  - `SAVORY`
  - `LITTLE HUNGER`
- CTA:
  - `ALL MENU`

**todo_verify**
- `Small Hunger` と `LITTLE HUNGER` の使い分け

**assets**
- `img-snack-floating`
- `deco-logo-faded` (optional)

---

### 5) Weekend Suggestion
**role**
- 週末向けおすすめ訴求

**layout**
- 中央寄せ見出し + 本文 + CTA
- 下部に斜め配置のコラージュ画像群
- 上下に区切り線

**text**
- Heading:
  - `Weekend Suggestion`
- Body:
  - `During the weekend at Café Regina you can treat yourself to a delicious hot meal that is prepared with a lot of care and love. Our chef gets to work and conjures up traditional Flemish classics that will delight your taste buds. So be sure to drop by or contact this business!`
- CTA:
  - `READ MORE`

**assets**
- `img-suggest-01`
- `img-suggest-02`
- `img-suggest-03`
- `img-suggest-04`
- `img-suggest-05`
- `img-suggest-06`

**implementation_note**
- 初回は absolute 配置でPC再現
- SP対応は後で設計

---

### 6) Events
**role**
- イベント / ブログカード一覧

**layout**
- セクション見出し + ダミー本文
- 左右矢印ナビ風UI
- アーチ型カードが横並びで複数
- 各カードは同じ構造

**section_text**
- Heading:
  - `Events`
- Body:
  - `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.`

**card_text**
- Date:
  - `16 APR 2021`
- Title:
  - `Lorem Ipsum Dolor`
- Body:
  - `Lorem Ipsum is simply dummy text of the printing.`
- CTA:
  - `READ MORE`

**todo_verify**
- 右端見切れカードの全文
- スライダーか静的横並びか

**assets**
- `img-event-01`
- `img-event-02`
- `img-event-03`
- `img-event-04`
- `img-event-05`

---

### 7) Photo Gallery
**role**
- 写真一覧訴求

**layout**
- 左: 見出し + 本文 + 矢印UI
- 右: ギャラリー画像群
- 2カラム構成

**text**
- Heading:
  - `Photo Gallery`
- Body:
  - `If you are looking for an authentic café in Zelzate, Café Regina is the right place for you! You can be inspired by the atmospheric photos on this page. This gives you a taste of what you can expect when you visit the café. So be sure to check out these photos!`
- CTA:
  - none (arrow icons only)
- Supporting:
  - `Since 1927`

**todo_verify**
- ギャラリーが静的並びかカルーセルか

**assets**
- `img-gallery-01`
- `img-gallery-02`
- `img-gallery-03`
- `img-gallery-04`

---

### 8) Stay informed
**role**
- ニュースレター導入文

**layout**
- 中央寄せ見出し + 本文
- 下のニュースレターフォームへの導入
- 区切り用ロゴ装飾あり

**text**
- Heading:
  - `Stay informed`
- Body:
  - `Stay up to date with everything that happens at Café Regina! This business believes it is important to keep its valued guests informed of news, events and special offers. You can always find all the latest news in the newsletter, so be sure to take a look.`

**assets**
- `img-logo-main` or decorative logo reuse

---

### 9) Newsletter signup
**role**
- メール登録フォーム

**layout**
- 黒い枠ボックスの中に小見出し + 大見出し + 短文 + 入力欄 + ボタン

**text**
- Eyebrow:
  - `NEWSLETTER`
- Heading:
  - `Subscribe To Our Newsletter`
- Body:
  - `And never miss latest Updates!`
- Placeholder:
  - `Email Address`
- CTA:
  - `SUBSCRIBE`

**implementation_note**
- 初回は 1 input + 1 button のみ
- 後で label / validation を整備

---

### 10) Footer
**role**
- 連絡先 / ブランド / 営業時間 / SNS

**layout**
- 3カラム
- 左: 連絡先
- 中央: ブランド + 説明 + SNS
- 右: 営業時間
- 最下部にコピーライト
- 上部との間に区切り線

**text**
- Left heading:
  - `Contact Us`
- Left body:
  - `Grote Markt 15 9060 Zelzate`
  - `(East Flanders) Belgium`
  - `+0468 06 80 91`
  - `info@caferegina.be`
  - `VAT BE 0768.703.620`
- Center heading:
  - `CAFE REGINA`
- Center body:
  - `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`
- Right heading:
  - `Opening Hours`
- Right body:
  - `Monday-Friday:`
  - `08:00 am -12:00 am`
  - `Saturday-Sunday:`
  - `07:00am -11:00 pm`
- Copyright:
  - `2024 Cafe Regina. All Rights reserved.`

**todo_verify**
- Phone number
- VAT number
- Opening hours text / spacing
- `Cafe` vs `Café`

**assets**
- SNS icons: use inline SVG or placeholder icons

---

## Assets To Prepare
### required_images
- `img-logo-main`
- `img-bg-texture`
- `img-hero-main`
- `img-hero-drink`
- `img-hero-pour`
- `img-drink-splash`
- `img-snack-floating`
- `img-suggest-01`
- `img-suggest-02`
- `img-suggest-03`
- `img-suggest-04`
- `img-suggest-05`
- `img-suggest-06`
- `img-event-01` to `img-event-05`
- `img-gallery-01` to `img-gallery-04`

### optional_or_replaceable
- `icon-arrow-line` → can be CSS/SVG
- `icon-sns-*` → can be SVG
- `deco-logo-faded` → optional decorative asset

---

## Implementation Priorities
1. Page shell and background
2. Header
3. Hero
4. Drinks
5. Small Hunger
6. Weekend Suggestion
7. Events
8. Photo Gallery
9. Stay informed + Newsletter
10. Footer

---

## Non-Goals For First Pass
- No real slider behavior yet
- No mobile version yet
- No CMS
- No analytics
- No production form handling
- No animation unless trivial

---

## TODO_VERIFY Summary
- Header address punctuation / spacing
- Hero heading exact line breaks
- Drinks heading: `Extensive` vs `Exclusive`
- Drinks categories:
  - `BEERS BOTTLE`
  - `APERITIFS/DEGESTIVES`
- Small Hunger vs LITTLE HUNGER wording
- Events rightmost card full text
- Footer phone / VAT / time formatting
- `Cafe` vs `Café`
- Final font family, color tokens, spacing scale, image dimensions

---

## Output Request To Codex
Please generate:
1. semantic HTML structure
2. modular CSS with custom properties
3. minimal JS only if needed for presentational UI
4. placeholder asset paths matching the IDs above
5. clear TODO comments where values are uncertain
6. a structure that is easy to refine later with exact Figma measurements