# CAFE REGINA テキストトークン整理メモ

## 統合版テキストトークン

```text
[Global]
display-font-main: Harmond
display-font-sub: Athina Regular
body-font: Inter
color-text-main: #FFFFFF
color-text-muted: #969493（要確認）
color-accent: #DCCA87
color-display-overlay: #6D6D6D
color-placeholder: #AAAAAA
color-button-text-dark: #000000

[Header / logo text]
example: CAFE REGINA
font-family: Athina Regular
font-weight: Regular
font-size: 55
line-height: 51
letter-spacing: 0%
text-align: left
text-transform: uppercase
color: #FFFFFF

[Header / address]
example: GROTE MARKT 15, 9060 ZELZATE
font-family: Athina Regular
font-weight: Regular
font-size: 24
line-height: auto（要確認）
letter-spacing: 5%
text-align: left
text-transform: none
color: #969493（要確認）

[Header Nav]
example: HOME
font-family: Inter
font-weight: Semi Bold
font-size: 15
line-height: 23
letter-spacing: 5%
text-align: left
text-transform: uppercase（要確認）
color: #FFFFFF

[Hero / main heading]
example: Geniet Van Een Gezellige Tijd Bij Café Regina
font-family: Harmond
font-weight: Semi Bold
font-size: 180
line-height: 165
letter-spacing: 0%
text-align: center
text-transform: none
color: #6D6D6D

[Hero / body]
example: Café Regina is not only the oldest...
font-family: Inter
font-weight: Regular
font-size: 16
line-height: 25
letter-spacing: 0%
text-align: left
text-transform: none
color: #969493

[Section heading / primary]
example: Extensive Drinks
font-family: Harmond
font-weight: Semi Bold
font-size: 50
line-height: auto（要確認）
letter-spacing: 0%（要確認）
text-align: left
text-transform: none
color: #FFFFFF

[Menu category / side list]
example: BEERS BOTTLE
font-family: Athina Regular
font-weight: Regular
font-size: 32
line-height: auto（要確認）
letter-spacing: 6%
text-align: left
text-transform: uppercase
color: #FFFFFF

[CTA / accent text]
example: ALL MENU
font-family: Inter
font-weight: Regular
font-size: 18
line-height: auto
letter-spacing: 25%
text-align: left
text-transform: uppercase
color: #DCCA87

[CTA / hero contact]
example: CONTACT
font-family: Inter
font-weight: Regular
font-size: 18
line-height: auto
letter-spacing: 25%
text-align: left
text-transform: uppercase
color: #DCCA87

[Hero / pagination current]
example: 01
font-family: Inter
font-weight: Semi Bold
font-size: 24
line-height: auto
letter-spacing: -1%
text-align: left
text-transform: none
color: #FFFFFF

[Hero / pagination inactive]
example: 02 / 03 / 04 / 05
font-family: Inter
font-weight: Extra Light
font-size: 24
line-height: auto
letter-spacing: 0%
text-align: left
text-transform: none
color: #969493

[Newsletter / eyebrow]
example: NEWSLETTER
font-family: Athina Regular
font-weight: Regular
font-size: 22
line-height: 130%
letter-spacing: 14%
text-align: center
text-transform: uppercase
color: #FFFFFF

[Newsletter / main heading]
example: Subscribe To Our Newsletter
font-family: Harmond
font-weight: Semi Bold
font-size: 64
line-height: 130%
letter-spacing: 3%
text-align: center
text-transform: none
color: #DCCA87

[Newsletter / sub text]
example: And never miss latest Updates!
font-family: Inter
font-weight: Regular
font-size: 16
line-height: 175%
letter-spacing: 4%
text-align: center
text-transform: none
color: #FFFFFF

[Form / placeholder]
example: Email Address
font-family: Inter
font-weight: Light
font-size: 16
line-height: auto
letter-spacing: 4%
text-align: left
text-transform: none
color: #AAAAAA

[Button / subscribe]
example: SUBSCRIBE
font-family: Inter
font-weight: Semi Bold
font-size: 16
line-height: auto
letter-spacing: 10%
text-align: center
text-transform: uppercase
color: #000000

[Footer / section heading]
example: Contact Us / Opening Hours
font-family: Harmond
font-weight: Semi Bold
font-size: 36
line-height: 130%
letter-spacing: 4%
text-align: left
text-transform: none
color: #FFFFFF

[Footer / center brand]
example: CAFE REGINA
font-family: Athina Regular
font-weight: Regular
font-size: 64
line-height: 130%
letter-spacing: 4%
text-align: center
text-transform: uppercase
color: #DCCA87

[Footer / center body]
example: Lorem Ipsum is simply dummy text of the printing and typesetting industry.
font-family: Inter
font-weight: Regular（要確認）
font-size: 16（要確認）
line-height: 175%
letter-spacing: 4%
text-align: center
text-transform: none
color: #FFFFFF
```

---

## CSSに落とすときの `letter-spacing` 変換メモ

```text
-1% -> -0.01em
0% -> 0em
3% -> 0.03em
4% -> 0.04em
5% -> 0.05em
6% -> 0.06em
10% -> 0.10em
14% -> 0.14em
25% -> 0.25em
```

---

## Codexに渡す時の補足メモ

```text
- Harmond はローカル未導入警告あり。Figma上の指定名としては使うが、実機確認は要注意。
- Contact Us と Opening Hours の見出しトークンは同一。
- 02〜05 は inactive pagination として 01 と別トークン扱い。
- auto 行間の箇所は、初回実装では見た目優先で近似値を置いてよい。
- color-text-muted は #969493 で仮固定してよいが、最終確認推奨。
```
