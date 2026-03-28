あなたは、このリポジトリ内の既存実装を「CAFE REGINA」のFigma準拠デザインへ寄せて修正するフロントエンド実装アシスタントです。

# 目的
既存の実装を編集して、CAFE REGINA の HOME 画面を PC first で再現してください。
今回は「初回の見た目再現」が目的です。ピクセルパーフェクト未満でもよいですが、構造・タイポグラフィ・配色・主要ビジュアル・主要CTAはできるだけ寄せてください。

# 参照ファイル
- `./cafe-regina-text-tokens.md`
- `./assets/` 配下のリネーム済み画像群
- 例:
  - `hero-main-arch.png`
  - `hero-drink-left-arch.png`
  - `hero-pour-right-arch.png`
  - `drinks-berry-splash.png`
  - `small-hunger-chips-floating.png`
  - `suggestion-*.png`
  - `events-card-*.png`
  - `gallery-*.png`

# 最優先ルール
1. 文字はできる限り HTML で実装すること
2. CTAの線・丸・矢印は、できる限り CSS または SVG で実装すること
3. 単発の装飾写真（例: hero左下ドリンク）は、トリミング済み画像をそのまま使ってよい
4. 繰り返しカードやギャラリー系は、できるだけ画像＋CSSレイアウトで構成すること
5. 不確定な値は勝手に断定せず、`TODO_VERIFY:` コメントを残すこと
6. 今回は HOME のみ編集対象
7. 今回は PC first の静的実装。スライダーやフォーム送信の本実装は不要
8. 既存ファイルを極力活かして編集し、不要な全面作り直しはしないこと
9. 変更後に、何を直したかが分かるように整理すること

# デザイン方針
- 黒ベースの質感背景
- 白文字 / グレイ本文 / ゴールドアクセント
- ディスプレイ見出しは Harmond 系
- ブランド文字や一部サブ見出しは Athina Regular 系
- 本文とナビは Inter 系
- ヒーローは大きなアーチ画像 + 左下ドリンク + 右上注ぎ画像 + 巨大見出し重ね
- セクションは:
  1. Header
  2. Hero
  3. Drinks
  4. Small Hunger
  5. Weekend Suggestion
  6. Events
  7. Photo Gallery
  8. Stay informed
  9. Newsletter
  10. Footer

# トークン反映ルール
`cafe-regina-text-tokens.md` を読み、少なくとも以下を CSS variables とベーススタイルに反映してください。

## color tokens
- `--color-text-main`
- `--color-text-muted`
- `--color-accent`
- `--color-display-overlay`
- `--color-placeholder`
- `--color-button-text-dark`

## font tokens
- `--font-display-main`
- `--font-display-sub`
- `--font-body`

## typography rules
- Header / logo text
- Header / address
- Header Nav
- Hero / main heading
- Hero / body
- Section heading / primary
- Menu category / side list
- CTA / accent text
- CTA / hero contact
- Hero / pagination current
- Hero / pagination inactive
- Newsletter / eyebrow
- Newsletter / main heading
- Newsletter / sub text
- Form / placeholder
- Button / subscribe
- Footer / section heading
- Footer / center brand
- Footer / center body

letter-spacing は markdown 内の変換メモに従って em に置き換えること。
auto line-height の箇所は近似値で仮置きし、`TODO_VERIFY:` を残すこと。

# 実装ルール
- セクションごとに component/comment を分ける
- 背景、見出し、本文、CTA、画像群の責務を分ける
- hero / suggestion / events の画像重なりは position と z-index を整理して実装する
- 再現不能な装飾は、雰囲気を壊さない範囲で簡略化してよい
- ただし、文字やCTAを画像化してごまかさないこと
- アクセシビリティを壊さないこと
  - alt
  - ボタン/リンクの意味
  - 入力欄のlabelまたはaria
- パフォーマンスを意識し、無駄なJSは入れないこと

# 編集してほしいファイル
リポジトリ構成を確認し、既存構成に合わせて必要箇所を編集してください。
ただし、最低でも以下の責務になるよう整理してください。

- `tokens.css` 相当: トークン定義
- `base.css` 相当: body / typography / utilities
- `components.css` 相当: CTA, card, hero, gallery, footer など
- HOME本体のHTML
- 必要最低限のJS（本当に必要なら）

既存構成にそのまま対応するファイルがない場合は、現構成に沿って近い責務に分けてください。

# 作業手順
以下の順で進めてください。

1. リポジトリ構成を確認
2. `cafe-regina-text-tokens.md` を読んでトークン化
3. 既存HOME実装を確認
4. 使用可能なリネーム済み画像を確認
5. まずレイアウトとタイポを修正
6. 次に画像差し替え
7. 次に CTA / line / arrow / circle を調整
8. 最後に Footer / Newsletter まで詰める
9. 変更点の要約を出す
10. 未確定箇所を TODO リストで出す

# 期待する最終出力
作業完了時には以下を出してください。

## 1. 変更したファイル一覧
- どのファイルを編集したか

## 2. 変更内容の要約
- セクションごとに何を直したか

## 3. TODO_VERIFY一覧
- フォント未導入
- 行間未確定
- 色要確認
- 画像トリミング最終確認
- レスポンシブ未調整
  など

## 4. ローカル確認手順
- 何を見ればよいか
- どこがFigmaとの差分として残っているか

# 禁止事項
- HOME以外まで勝手に直さない
- 文言を勝手に創作しない
- 文字要素を安易に画像化しない
- 大規模な依存追加をしない
- 既存実装を全部捨てて作り直さない

まずはリポジトリを確認し、編集方針を短くまとめてから着手してください。

補足: まずは「Header / Hero / Drinks / Footer」の4ブロックを重点修正し、他セクションは大崩れしない範囲で追従してください。
```
