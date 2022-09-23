---
title: 'example.comを使おう'
excerpt: ''
coverImage: '/assets/blog/hello-world/example.com.png'
date: '2022/09/17'
ogImage:
  url: '/assets/blog/hello-world/example.com.png'
tags: 
  - 'セキュリティ'
  - '技術'
  - 'Web'
---

# exmaple.com

exmaple.comを聞いたことがある人は少なくないと思いますが，脆弱性診断の報告書やなにかしらの文書でURLの例としてexmaple.comを用いる話を書きます．


### exmaple.comとは

日本語に例えると<b>山田太郎 山田花子</b>
英語なら<b>hoge huga</b>

と同じようなもので，簡潔にいうと「例.com」で，文章に例としてURLを書く場合にexmaple.comを使います．

脆弱性報告書で他人のメールアドレスを例として記載することがあったときなどには「hoge@exmaple.com」と書きましょう．

他にも仲間に「example.net」「example.org」などがあります．どちらも使い方は同じです．

### なぜ

1. 適当なURLだとそもそも利用者がいる可能性がある
2. 現在の利用がなくても今後登録される可能性がある
3. ご動作で検証環境にURLを打ち込んでしまい意図しない攻撃につながってしまう可能性がある

という理由があります．他にも理由はあると思いますが，基本はこれです．

### RFC規定

RFCの規定にも例示用ドメインとして使っていいという記載があります

[RFC 2606](https://datatracker.ietf.org/doc/html/rfc2606)

>  example.com
        example.net
        example.org
    
> IANA Considerations IANA has agreed to the four top level domain name reservations
specified in this document and will reserve them for the uses
   indicated.

### 参考リンク

wiki - https://ja.wikipedia.org/wiki/Example.com

RFC2606 - https://datatracker.ietf.org/doc/html/rfc2606