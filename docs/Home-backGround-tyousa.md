# Role
あなたは、このリポジトリの既存実装を読み解いて、HOME画面の背景崩れの原因を特定するフロントエンド調査担当です。

# Goal
Hero,Stay informed + Newsletter下で発生している以下の問題の原因を、**推測ではなくコードベースで特定**してください。

## 発生している問題
1. 背景画像が縦方向に足りず、下側に白っぽい余白やはみ出しが見える
2. 特に Hero,Stay informed + Newsletter下 で、画面の拡縮や表示幅の変化に応じて **下側の余白量が増減する**
3. Hero,Stay informed + Newsletter下で「黒背景の世界観」がつながって見えず、セクション境界で破綻している

# 調査対象
- Hero,Stay informed + Newsletter下に関係する HTML
- `css/style.css`
- `css/tokens.css`
- `css/base.css`
- `css/components.css`
- `css/pages/home.css`
- 必要なら画像アセットの使われ方も確認

# 調査観点
以下を重点的に確認してください。

1. 背景画像がどの要素に指定されているか
   - body
   - main
   - home wrapper
   - hero
   - section
   - 擬似要素

2. 高さ指定の問題
   - fixed height
   - min-height
   - vh
   - aspect-ratio
   - transform / scale による見かけのズレ
   - absolute配置された子要素が親の高さ計算に入っていない問題

3. Hero,Stay informed + Newsletter下周辺の問題
   - Hero,Stay informed + Newsletter下の画像や背景のコンテナが content height に追従していないか
   - 見出しや装飾画像が absolute で置かれ、親の高さ不足を起こしていないか
   - overflow の扱いが不適切で白余白が見えていないか

4. ページ全体の背景設計
   - 背景を「ページ全体」で持つべきか
   - 「各セクション個別」で持っていて継ぎ目が出ていないか
   - Heroだけ背景画像で、それ以降のセクション背景色が別で途切れていないか

5. ブラウザ拡縮で余白が増減する理由
   - pxベース固定値
   - clamp未使用
   - object-fit/background-sizeの不足
   - section高さと中身のスケール不整合

# 絶対に守ること
- まだコードは編集しない
- まずは原因特定だけ行う
- 「たぶん」「おそらく」で終わらせず、**どのファイルのどの記述が原因か**を書く
- 可能なら複数原因を主因/副因で分ける

# 出力フォーマット
以下の形で返してください。

## 1. 原因まとめ
- 主因:
- 副因:

## 2. 根拠
- ファイル名
- セレクタ
- 該当記述
- なぜそれが余白発生につながるか

## 3. 修正方針案
- A案（最小差分）
- B案（構造を少し直す）
- C案（必要なら）

## 4. 推奨案
- 一番安全な案を1つ
- 理由
- 影響範囲

まだ修正はしないで、ここで止めてください。