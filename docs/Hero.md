# Role
あなたは、このリポジトリ内の既存実装を調査し、Figmaデザインに近づけるフロントエンド実装アシスタントです。
推測で全面改修せず、まず現在効いているHTML/CSSを確認してから、最小差分で修正してください。

# Goal
Hero セクションで、中央の大きい画像と右上の小さい画像が全体的に少し下がって見えます。
この上側の余白原因を特定し、以下の状態になるように修正してください。

- 左上のロゴがある
- そのロゴの「下端（底辺）」を基準線とする
- 中央の大きい画像の「上端」が、その基準線に揃う
- 右上の小さい画像の「上端」も、その基準線に揃う

つまり、
**中央大画像と右上小画像の上端を、左上ロゴの下端ラインに揃えてください。**

# Known Context
DevTools上で確認できている対象要素:

- `.home-hero-stage`
- `.home-hero-main-arch`
- `.home-hero-float-left`
- `.home-hero-float-right`
- `.home-hero-brand-copy`

Hero 内の画像配置は、これらの要素またはその親要素の
- margin
- padding
- top / inset / translate
- align-self / place-self
- grid / flex の配置
- absolute positioning
などで決まっている可能性があります。

# What To Do
以下の順で進めてください。

1. Hero 関連の HTML/CSS を調査する
2. 中央大画像と右上小画像が下がっている根本原因を特定する
3. ロゴの下端を基準に、2つの画像の上端が揃うように最小差分で修正する
4. レイアウト全体を壊していないか確認する
5. 修正内容と確認方法をまとめる

# Investigation Requirements
必ず以下を確認してください。

- `.home-hero-stage` の layout 方式
  - display
  - grid-template / flex 関連
  - align-items / justify-items / place-items
  - padding / min-height / aspect-ratio
- `.home-hero-main-arch` の
  - margin
  - top / inset
  - transform
  - align-self / justify-self
  - position
- `.home-hero-float-right` の
  - margin
  - top / inset
  - transform
  - align-self / justify-self
  - position
- `.home-hero-brand-copy` の
  - position
  - top / inset
  - 高さと実際の見た目位置
- 実際に効いている CSS ファイルと該当箇所

# Fixing Policy
- 既存HTML構造はなるべく壊さない
- Hero 全体を作り直さない
- 関係ないセクションは触らない
- 画像サイズそのものは極力変えず、まず位置調整で解決する
- 応急処置として余計な `margin-top: -xxpx` を乱発しない
- 根本原因が grid / absolute / transform / padding にあるなら、そこを直す
- `!important` は切り分け用なら可、最終コードには原則残さない

# Alignment Definition
今回の揃え方は以下で解釈してください。

- 基準線: 左上ロゴの見た目の下端ライン
- 揃える対象:
  - 中央大画像の見た目の上端
  - 右上小画像の見た目の上端

必要なら、ロゴ自体の位置は触らず、
画像側の位置のみを上に詰めて調整してください。

# Acceptance Criteria
以下を満たしたら完了です。

- Hero 上側の不自然な余白が減っている
- 中央大画像の上端がロゴ下端ラインに揃っている
- 右上小画像の上端もロゴ下端ラインに揃っている
- Hero の他要素（見出し、左下画像、本文、ページネーション）が大きく崩れていない
- 原因となっていた CSS を説明できる
- 差分が最小限である

# Output Format
作業後は以下を出力してください。

1. 原因だったCSS
2. なぜそのCSSが上側の空きを作っていたか
3. 変更したファイル一覧
4. 修正内容
5. どうやって基準線を揃えたか
6. ローカル確認手順
7. 追加で微調整するならどこか

# Local Validation
可能ならローカルで表示確認してください。
プレビューは以下を前提とします。

```bash
cd "/home/user/.task/CAFE REGINA"
python3 -m http.server 8080

Final Instruction

まず原因を特定してください。
推測で top や margin-top を足すだけではなく、現在効いているレイアウトロジックを確認してから修正してください。
最小差分で、中央大画像と右上小画像の上端をロゴ下端ラインに揃えてください。