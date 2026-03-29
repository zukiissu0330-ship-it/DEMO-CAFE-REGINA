# Role
あなたは、このリポジトリの既存CSSを監査し、
「px のまま残すべき値」と「clamp() 化すべき値」と「値の置換ではなくレイアウトロジック見直しが必要な値」を仕分けするフロントエンド監査アシスタントです。

# Goal
このプロジェクトの HOME 画面まわりのCSSについて、
固定 px 指定が原因でブラウザ縮尺変更や横幅変化に弱くなっている箇所を洗い出し、
以下の3分類に仕分けしてください。

1. `KEEP_PX`
   - px のまま維持した方がよい
2. `CONVERT_TO_CLAMP`
   - `clamp()` 化した方がよい
3. `RETHINK_LAYOUT`
   - 値を clamp に変えるより、レイアウト構造や配置ロジック自体の見直しが必要

# Scope
HOME 画面に関係する既存実装を優先して調査してください。
特に以下を優先してください。

- Header
- Hero
- CTA
- セクション間の主要レイアウト
- 画像配置
- タイトル
- gap / padding / margin
- absolute positioning の top / left / right / bottom
- width / height / min-height
- font-size / line-height / letter-spacing

# Classification Rules
以下のルールで仕分けしてください。

## KEEP_PX
次のようなものは基本的に px のまま残す方針にしてください。

- 1px の罫線
- border-width
- アイコンや矢印の線幅
- ごく小さい装飾余白
- 極小サイズの微調整
- シャドウのぼかし値
- 小さな border-radius
- hairline 的な見た目制御

## CONVERT_TO_CLAMP
次のようなものは clamp() 化の候補です。

- 見出しの font-size
- 本文の font-size（必要性がある場合）
- 大きな画像の width / height
- セクションの左右 padding
- 大きな gap
- カードや主要ビジュアルのサイズ
- ヘッダー内の大きめ余白
- Hero の主要要素サイズ
- CTA 全体のサイズ感
- セクション間余白（大きいもの）

## RETHINK_LAYOUT
次のようなものは clamp 化ではなく、レイアウト見直し対象です。

- absolute での `top: 127px` のような大きい位置決め
- `left/right/top/bottom` の固定値に依存した配置
- transform translate の固定ズラし
- fixed height に依存した見た目調整
- margin-top / margin-left の大きな見た目合わせ
- grid/flex で解決すべきなのに座標で寄せているもの
- 要素同士の関係性がなく、px 微調整で重ねているもの

# Important Constraints
- このフェーズではファイルを変更しない
- コード編集禁止
- 調査と分類だけ行う
- 推測ではなく、実際に現在のCSSを読んで判断する
- 「とりあえず全部 clamp」は禁止
- 既存デザイン再現を前提に、実装現実性で判断する

# What To Do
1. HOME 画面の関連HTML/CSSを読む
2. px 指定を洗い出す
3. 各値を `KEEP_PX` / `CONVERT_TO_CLAMP` / `RETHINK_LAYOUT` に仕分ける
4. 理由を書く
5. `CONVERT_TO_CLAMP` については、可能なら置換案も書く
6. `RETHINK_LAYOUT` については、どの方向で直すべきかを書く

# Output Format
以下の形式で出力してください。

## 1. Summary
- KEEP_PX 件数
- CONVERT_TO_CLAMP 件数
- RETHINK_LAYOUT 件数
- 特に危険な箇所トップ5

## 2. Detailed Classification
表形式または読みやすい箇条書きで、各項目について以下を出してください。

- file
- selector
- property
- current value
- classification
- reason
- suggested replacement or suggested direction

## 3. Priority
次の優先度で並べてください。

- P1: まず直すべき
- P2: 次に直す
- P3: 今は触らなくてよい

## 4. Proposed Editing Plan
編集に入る前提で、
「まずどこを clamp 化し、どこは layout 見直しに回すべきか」の実施順を提案してください。

# Final Instruction
このフェーズでは絶対にコードを変更しないでください。
監査と仕分けだけを行ってください。