# Role
あなたは、このリポジトリ内の既存実装を Figma デザインに近づけるフロントエンド実装アシスタントです。
既存コードを読み、必要最小限の差分で修正してください。

# Goal
「Extensive Drinks」セクションの中央ワインとポテト画像の見え方を、現在の“黒い長方形/黒い塊が見える状態”から、
Figma に近い “背景になじむ見え方” に改善してください。

# Current Issue
現状の実装では、ワインとポテト画像を通常の `<img>` として表示しているため、
画像自体に含まれる黒背景がそのまま見えてしまい、Figma の見え方とズレています。

Figma 側で確認できた事実は以下です。

- ワインとポテト画像は単体で書き出し可能
- ただし透過画像ではなく、黒背景付き画像
- 背景は別レイヤー
- ワインとポテト画像の Figma 上のブレンドモードは **「明るく」**
- 薄い CR ロゴは別レイヤー
- 中央暗部は別オブジェクトとは限らず、ブレンド結果としてそう見えている可能性が高い

つまり、今回の再現方針は
**「透過素材に差し替える」のではなく、「黒背景付き画像をCSSのブレンドで背景になじませる」**
です。

# What To Do
既存の「Extensive Drinks」セクションを調査し、以下を実施してください。

1. ワイン画像を表示している要素を特定する
2. 画像の黒背景が自然に消えて見えるように、CSSでブレンド表現を実装する
3. まず `mix-blend-mode: lighten;` を試す
4. もし不自然なら `mix-blend-mode: screen;` も比較し、Figma に近い方を採用する
5. ブレンドの副作用が文字や周囲要素に及ばないよう、適切なラッパーに `isolation: isolate;` を入れる
6. 画像の位置・サイズ・余白も必要に応じて微調整する
7. 既存HTML構造はなるべく壊さず、最小差分で修正する

# Important Constraints
- 既存のセクション構造を大きく作り直さない
- JS は不要なら触らない
- 画像差し替え前提にしない
- ワインとポテト画像ファイルはそのまま使う前提で調整する
- “黒背景を隠すための単純な黒い箱” は置かない
- Figma 完全一致ではなく、初見で違和感がないレベルまで寄せる
- CSS の追加先は既存ルールに合わせる
- 不要なリファクタリングはしない

# Expected Implementation Direction
実装方針の例：

- ワインとポテト画像の親要素に `position: relative;`
- 親要素に `isolation: isolate;`
- ワインとポテト画像に
  - `display: block;`
  - `width` / `height` / `object-fit`
  - `mix-blend-mode: lighten;` または `screen;`
- 必要なら画像コンテナのサイズ・配置を微調整
- 必要なら `z-index` を整理

例:
```css
.drink-visual {
  position: relative;
  isolation: isolate;
}

.drink-visual img {
  display: block;
  width: 100%;
  height: auto;
  mix-blend-mode: lighten;
}