---
title: 'Vimの設定方法'
excerpt: ''
coverImage: '/assets/blog/dynamic-routing/vim.png'
date: '2022/09/23'
ogImage:
  url: '/assets/blog/dynamic-routing/vim.png'
tags: 
  - '技術'
  - 'Vim'
  - 'ブログ'
---


## Vimの設定

ここではvimエディタの設定について書きます

## Vimエディタとは

Vimとはターミナルやコンソール，シェルで使えるエディタである．サーバーなどの設定を変更するときはGUIでの操作ができないことが多いためシェルにて設定を書き換えたりするときに多様する．Vimの他にもnanoやneovim, emacsと呼ばれるエディタが存在する．

## エディタ戦争とは

知らなくていい世界だがエディタに関して過激的になる人間も存在するので気をつけましょう

```txt
ハッカー文化においては、愛好するソフトウェアを宗教的狂信とも言える尊敬を持って扱う伝統があり、そのようなソフトウェアの中でもテキストエディタはもっとも一般的である。
自らの選択したエディタが最善であると信じるグループ間で数々の論争（フレーム）が発生してきた。
もっとも、そのような論争の参加者のほとんどは、からかい半分であると理解している．
似たような論争はオペレーティングシステムやウェブブラウザ戦争，プログラミング言語にもあるし、コードの字下げスタイルのような傍から見れば些細なことでも論争となってきた。
```

[エディタ戦争 - Wikipedia](https://ja.wikipedia.org/wiki/%E3%82%A8%E3%83%87%E3%82%A3%E3%82%BF%E6%88%A6%E4%BA%89)

# 基本操作

引用しました

[【備忘録】Vimの操作 - Qiita](https://qiita.com/one-a/items/a4e1d5a736d8408fd089)


## 基本カーソル移動

| コマンド    | 動作        |
|:-----------|:----------- |
| k          | 上移動       |
| l          | 右移動       |
| h          | 左移動       |
| j          | 下移動       |

## モード変更

| コマンド    | 動作            |
|:-----------|:--------------- |
| i          | 挿入モード       |
| Esc        | ノーマルモード    |
| :          | コマンドモード    |
| v          | ビジュアルモード  |
| Ctrl + v   | ビジュアルモード（矩形）  |

## 操作系

| コマンド    | 動作          |
|:-----------|:------------- |
| u          | 戻る           |
| Ctrl + r   | 進む           |
| x          | カーソル上の1文字削除 |
| dd         | 行の削除       |
| d0         | カーソルの前から行頭まで削除 |
| d^         | カーソルの前から行頭（空白の除く）まで削除 |
| D          | カーソル上から行末まで削除   |
| yy         | 1行コピー      |
| [数字] , yy | [数字]行コピー |
| p          | ペースト       |

コピペでクリップボードを使いたい場合

| コマンド        | 動作                    |
|:---------------|:----------------------- |
| Ctrl + Insert  | クリップボードにコピー     |
| Shift + Insert | クリップボードからペースト |


## 移動系

## カーソル

| コマンド    | 動作          |
|:-----------|:------------- |
| w          | 単語移動       |
| b          | 単語移動（逆順）|
| $          | 行末へ移動     |
| 0          | 行頭へ移動     |
| -          | 文字の先頭へ移動|
| Shift + [  | 空行移動（上）  |
| Shift + ]  | 空行移動（下）  |
| gg         | ファイルの先頭へ移動  |
| G          | ファイルの末尾へ移動  |


## ウィンドウ、タブ

| コマンド    | 動作          |
|:-----------|:------------- |
| Ctrl + w + k | 上のウィンドウへ移動 |
| Ctrl + w + l | 右のウィンドウへ移動 |
| Ctrl + w + h | 下のウィンドウへ移動 |
| Ctrl + w + j | 左のウィンドウへ移動 |
| gt           | 隣のタブへ移動 |

## 挿入モード
○○して、挿入モードに変える

| コマンド    | 動作                    |
|:-----------|:----------------------- |
| i          | カーソルの前で挿入モード   |
| a          | カーソルの後ろで挿入モード |
| I          | 先頭に移動して挿入モード   |
| A          | 末尾に移動して挿入モード   |
| O          | 前に改行して挿入モード     |
| o          | 後ろに改行して挿入モード   |

## 検索

| コマンド    | 動作        |
|:-----------|:---------- |
| /word      | wordを検索  |
| :noh       | 検索のハイライトを消す |

# 保存、終了

| コマンド    | 動作        |
|:-----------|:---------- |
| :w         | 保存        |
| :q         | 終了        |
| :wq        | 保存、終了   |
| :q!        | 強制終了     |

# 設定ファイルについて

Vimにもzshと同様に設定ファイルが存在する．「.vimrc」である．そしてグラフィックの部分を補助する「.gvimrc」も存在する．基本は.vimrcに記載して問題ないがグラフィック設定は分けたいという人間は.gvimrcに設定を書き込むと良い

## プラグインのインストール

プラグインのインストールには方法が複数あるが大きく分けて２つである．

### 1.リポジトリをそのままクローン

プラグインのリポジトリを然るべきプラグインフォルダにクローンすることでインストールする

### 2.プラグインを管理するプラグインを使う

ここではbundleというプラグインを使ったやり方を紹介します

[Vim におけるプラグイン管理についてまとめてみた - Qiita](https://qiita.com/tanabee/items/e2064c5ce59c85915940)

### ****1. .vim/bundle 以下に Vundle.vim を配置する****

```bash
git clone https://github.com/VundleVim/Vundle.vim.git ~/.vim/bundle/Vundle.vim
```

### ****2. .vimrc の先頭に以下を記載****

Plugin 'VundleVim/Vundle.vim' 以下の行に導入したいプラグインを追加していけば良い。

```bash
set nocompatible
filetype off
set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()

Plugin 'VundleVim/Vundle.vim'

" 導入したいプラグインを以下に列挙
" Plugin '[Github Author]/[Github repo]' の形式で記入
Plugin 'airblade/vim-gitgutter'

call vundle#end()
filetype plugin indent on

"　その他のカスタム設定を以下に書く
```

### ****3. プラグインのインストール****

vimのコマンドにて次を実行するとインストールされます

```bash
:PluginInstall
```

### 注意点

コマンドを叩いても赤色のビックリマークがでて，インストールできないことがあります．

権限設定がうまくできてなくて書き込みができないことが考えられます．

そんなときは`chmod`で設定をしてあげましょう

```bash
sudo chmod -R 777 ~/.vim
```

おそらく666でも問題ないと思われますが777しか試してないので今回は777を記載しておきます

`chmod` についての知識がない方は次のサイトで勉強しましょう

[Linuxの権限確認と変更(chmod)（超初心者向け） - Qiita](https://qiita.com/shisama/items/5f4c4fa768642aad9e06)

# 最後に私の.vimrcを公開します

```bash
set nocompatible
filetype off
set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()

Plugin 'VundleVim/Vundle.vim'

" 導入したいプラグインを以下に列挙
" Plugin '[Github Author]/[Github repo]' の形式で記入
Plugin 'airblade/vim-gitgutter'
Plugin 'morhetz/gruvbox'
Plugin 'joshdick/onedark.vim'

call vundle#end()
filetype plugin indent on

"　その他のカスタム設定を以下に書く

colorscheme onedark
let g:javascript_plugin_jsdoc = 1

"===== 表示設定 =====
set number "行番号の表示
set list "タブ、空白、改行を可視化
set title "編集中ファイル名の表示
set visualbell t_vb= "ビープ音を視覚表示
set laststatus=2 "ステータスを表示
set ruler "カーソル位置を表示
set ambiwidth=double "○や□などの文字が重ならないようにする
syntax on "コードに色をつける

"===== 文字、カーソル設定 =====
set fenc=utf-8 "文字コードを指定
set whichwrap=b,s,h,l,<,>,[,],~ "行頭、行末で行のカーソル移動を可能にする
set backspace=indent,eol,start "バックスペースでの行移動を可能にする
set listchars=tab:▸\ ,eol:↲,extends:❯,precedes:❮ "不可視文字の指定
set expandtab "タブをスペースに変換する
set autoindent "自動インデント
set smartindent "オートインデント
set virtualedit=onemore "カーソルを行末の一つ先まで移動可能にする
set tabstop=4 "インデントをスペース4つ分に設定

"===== モードによってカーソルを変更 =====
let &t_ti.="\e[1 q"
let &t_SI.="\e[5 q"
let &t_EI.="\e[1 q"
let &t_te.="\e[0 q"

"===== マウス設定 =====
set mouse=a
set ttymouse=xterm2

"===== 検索設定 =====
set ignorecase "大文字、小文字の区別をしない
set smartcase "大文字が含まれている場合は区別する
set wrapscan "検索時に最後まで行ったら最初に戻る
set hlsearch "検索した文字を強調
set incsearch "インクリメンタルサーチを有効にする

"===== キー入力 =====

"===== その他 =====
"履歴を100件保存
set history=100
set clipboard+=unnamed "コピーしたときはクリップボードを使用
set nobackup "バックアップファイルを作らない
set noswapfile "スワップファイルを作らない
set autoread "編集中のファイルが変更されたら、自動的に読み込み直す
```