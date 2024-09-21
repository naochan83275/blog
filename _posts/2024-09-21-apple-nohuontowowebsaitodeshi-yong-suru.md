---
layout: post
title: Apple のフォントをWebサイトで使用する
subtitle: AppleのSF Proをwebサイトで使う時のメモ(未検証)
date: 2024-09-21
---
※この記事は、前Apple Blog by Naochanで書いていた記事を再掲載したものです。この記事の内容に関することは保証できかねませんので、ご注意ください。

皆さん、初めまして。

Naochan、と申します。

本記事では、**Appleのフォント(SF Pro)をWebフォントとして利用する方法**を解説していきたいと思います。

## 注意事項

*   SF Pro は、商用利用ができません。あくまでも開発目的だけで使いましょう。
    
    (え、このサイトに使っても良いのかって? いや、このサイトは開発目的で作っているから大丈夫大丈夫...)
    

## 使用するソフトウェア

*   7-zip
    

## 手順

①7-zipをダウンロード、インストールする

*   [公式サイト](https://7-zip.org/)からダウンロードします。
    
*   ダウンロードしたインストーラーを起動し、7-zipをインストールします。
    

②SF Pro をダウンロードする

*   [Apple Developer](https://developer.apple.com/fonts/)から SF Pro をダウンロードします。
    

③SF-Pro のttfファイルを抽出する

*   7-zipでダウンロードした SF-Pro.dmg を開き、その中の"SF Pro Fonts.pkg"を開きます。
    
*   さらにその中の"Payload~"を開きます。"."を開き、その中の"Libraly"を開きます。
    
*   "Fonts" 内の下の方にある SF-Pro.ttf が目当てのファイルです。このファイルをコピーしておきましょう。
    

④ttfファイルをアップデートする

*   Githubでも何でもいいです。ファイルをアップロードしましょう。
    

④ フォントを適用するためのcssファイルを作成する

このような内容のcssファイルを作成します。

```css
@font-face {
  font-family: 'SF-Pro';
  src: url('{置いたサーバーのURL}.../SF-Pro.ttf') format('truetype');
}
html {
  font-family: 'SF-Pro';
}
```

これで適用されたはずです。

説明が下手ですが、最後まで読んでくださりありがとうございました。