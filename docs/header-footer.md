# Role
あなたは、このリポジトリ内の既存実装を編集して、`CAFE REGINA` の HOME 画面の **ヘッダー** と **フッター** を Figma 準拠で実装するフロントエンド実装アシスタントです。

# Goal
HOME ページに以下を実装してください。

1. ヒーロー上に重なる **ヘッダー**
2. ページ下部の **3カラム + コピーライト帯のフッター**

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

# 実装対象のデザイン要件

## 1. HOME全体の基準
- 基準フレーム: **1440 × 1123**
- 背景上にヘッダーが重なる構成
- フッター全体: **1440 × 404**

---

## 2. ヘッダー要件
### 全体
- HOMEのヒーロー上部に重ねる
- ヘッダー内側の基準は **左右 100px の余白**
- 上からの基準は **約 30px**
- レイアウトは **左ブロック / 右ブロック**

### 左ブロック
- 上にブランドアイコン（ロゴマーク）
  - サイズ目安: **約 104.84 × 105**
- その下にブランド情報ブロック
  - `CAFE REGINA`
  - `GROTE MARKT 15, 9060 ZELZATE`
- ロゴ単体ではなく、**ロゴ + ブランド文字 + 住所** を1つのまとまりとして扱う
- 左ブロック全体はヒーロー左上に配置

### 右ブロック
- 上部ナビゲーション
- 文言:
  - HOME
  - DRINKS
  - SMALL HUNGER
  - SUGGESTIONS
  - PHOTOS
  - ABOUT US
  - CONTACT US
- 右寄せの横並び
- 各項目は大文字寄りの見た目で、細め・上品な印象
- gap はおおむね **40px 前後** を基準に調整
- 右端余白は **約 100px**
- ナビ全体は上から **約 50px 付近** の印象に合わせる

### ヘッダー実装方針
- `header` の中に `.header-inner` を作る
- `.header-inner` は `display:flex; justify-content:space-between; align-items:flex-start;`
- 左ブロックは `.site-brand`
- 右ブロックは `.site-nav`
- ナビは `ul` で組む
- hover / focus-visible は軽く入れる

---

## 3. フッター要件
### 全体
- フッター全体サイズ: **1440 × 404**
- 背景色はほぼ黒
- 内側コンテンツの基準:
  - 左右余白: **約 100px**
  - 上余白: **約 60px**
- フッターは **上段3カラム + 下段コピーライト帯** の2段構成

### 上段3カラム
#### 左カラム: Contact Us
- 見出し: `Contact Us`
- 内容:
  - Grote Markt 15 9060 Zelzate
  - (East Flanders) Belgium
  - +0468 06 80 91
  - info@caferegina.be
  - VAT BE 0768.703.620

#### 中央カラム: ブランド
- `CAFE REGINA`
- 説明文:
  - `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`
- 下に小さな装飾ライン
- その下に SNS アイコン
  - Facebook
  - Twitter
  - Instagram
- 中央カラムが一番主役に見えるようにする

#### 右カラム: Opening Hours
- 見出し: `Opening Hours`
- 内容:
  - Monday-Friday:
  - 08:00 am -12:00 am
  - Saturday-Sunday:
  - 07:00am -11:00 pm

### 下段コピーライト帯
- 上段と区切る **細い境界線** を入れる
- テキストは中央寄せ
- 文言:
  - `2024 Cafe Regina. All Rights reserved.`
- 帯の高さは大きく取りすぎず、上品に収める

### フッター実装方針
- `footer` の中に `.footer-inner`
- 上段は 3カラム構成
- `display:grid` か `display:flex` を使ってよい
- 左右カラムは細め、中央カラムは広め
- 例:
  - `grid-template-columns: 1fr 1.4fr 1fr;`
- 下段コピーライトは別要素 `.footer-bottom`
- `address` 要素を適切に使う
- アイコンは既存アセットか、なければ軽量な代替でOK

---

## 4. CSS設計ルール
以下のような責務で整理してください。

- `css/tokens.css`
  - 色
  - フォント
  - spacing の変数
- `css/base.css`
  - reset
  - body
  - a
  - img
  - ul など
- `css/components.css`
  - 共通部品
  - header / footer の共通的な見た目
- `css/pages/home.css`
  - HOME専用の位置調整
  - ヒーロー上に重なる header の page 専用調整など
- `css/style.css`
  - @import のみ

必要に応じて `css/components/header.css` `css/components/footer.css` へ分割してもよいですが、現在のリポジトリ構成に自然に合わせてください。

---

## 5. HTML構造の期待
無理に完全一致でなくてよいですが、概ね以下の意味構造にしてください。

- `header.site-header`
  - `.header-inner`
    - `.site-brand`
    - `nav.site-nav`

- `footer.site-footer`
  - `.footer-inner`
    - `.footer-main`
      - `.footer-contact`
      - `.footer-brand`
      - `.footer-hours`
    - `.footer-bottom`

---

## 6. 見た目の方向性
- 黒ベース
- ゴールド系アクセント
- 白〜薄グレー文字
- 高級感があり、余白が広く、詰め込みすぎない
- フォントは既存指定があればそれを優先
- brand title は大きく、nav は小さめで上品に

---

## 7. やってほしいこと
1. 現在のHOME実装を確認
2. header / footer の差し込み位置を把握
3. 既存のCSS構成を確認
4. 必要最小限のファイルだけ編集
5. header / footer を実装
6. `style.css` の import を整理
7. 最後に以下を報告
   - 変更ファイル一覧
   - 実装内容の要約
   - 未実装点 or 要確認点
   - 画像やアイコンで仮置きしたもの

# 禁止
- `style.css` に直接通常CSSを書くこと
- header / footer の内部を座標ベタ打ちで組むこと
- HOME以外まで広く触ること
- 不要なJSを増やすこと
- 勝手に大規模リファクタすること

# 出力
- 変更したファイルを実際に編集する
- 最後に変更点を簡潔にまとめる