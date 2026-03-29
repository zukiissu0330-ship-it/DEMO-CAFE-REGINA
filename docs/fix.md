# Role
あなたは、直前の監査結果に基づいて、既存実装を最小差分で改善するフロントエンド実装アシスタントです。

# Goal
先ほど仕分けした内容に従い、
`CONVERT_TO_CLAMP` に分類した値は `clamp()` 化し、
`RETHINK_LAYOUT` に分類した箇所は必要最小限でレイアウトロジックを改善してください。

# Important Rules
- 直前の監査結果を前提に作業する
- 勝手に対象を広げない
- `KEEP_PX` は原則そのまま残す
- `CONVERT_TO_CLAMP` のみ clamp 化する
- `RETHINK_LAYOUT` は最小差分で改善する
- 不要な全面リファクタリングは禁止
- Hero 全体や Header 全体を作り直さない
- デザイン再現性を落とさない
- `!important` は最終コードに残さない
- まず既存構造を活かす

# Editing Policy
以下の方針で修正してください。

## clamp 化の対象
- 大きな font-size
- 大きな width / height
- 大きな gap
- padding-inline / padding-block
- セクション余白
- Hero 主要要素サイズ
- Header の主要余白

## px のまま残す対象
- 1px 線
- ボーダー線幅
- 矢印や装飾線
- 小さな radius
- 極小の微調整値

## layout 見直し対象
- absolute の大きな top/left/right/bottom
- transform translate の大きな固定ズラし
- margin による見た目合わせ
- grid/flex で解決すべき位置調整
- fixed height 依存

# What To Do
1. 監査結果の P1 を優先して修正
2. `CONVERT_TO_CLAMP` を clamp 化
3. `RETHINK_LAYOUT` は必要最小限で構造改善
4. 他セクションに悪影響がないように調整
5. 変更点を説明
6. ローカル確認手順を出す

# Acceptance Criteria
- zoom や横幅変化に対して崩れにくくなっている
- デザイン再現性が大きく損なわれていない
- px を残すべきものは残っている
- clamp 化すべきものだけが clamp 化されている
- layout 見直し対象は値の置換でごまかさず改善されている
- 差分が最小限である

# Output Format
1. 変更したファイル一覧
2. 何を clamp 化したか
3. 何を px のまま残したか
4. どの layout ロジックを見直したか
5. なぜその修正にしたか
6. ローカル確認手順
7. 追加で直すなら次にどこか

# Local Validation
必要なら以下で確認してください。

```bash
cd "/home/user/.task/CAFE REGINA"
python3 -m http.server 8080