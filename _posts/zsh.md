---
title: 'zshのチューニング'
excerpt: ''
coverImage: '/assets/blog/dynamic-routing/20210708163942.png'
date: '2022/09/28'
ogImage:
  url: '/assets/blog/dynamic-routing/20210708163942.png'
tags: 
  - '技術'
  - 'zsh'
  - 'チューニング'
---

# まず

Macで標準のターミナルにてzshを使っているが…起動が半端なく遅い..!!!

次のコマンドで起動までの時間を計測できるので試してみると…

```bash
for i in $(seq 1 10); do time zsh -i -c exit; done
```

```bash
Saving session...
...saving history...truncating history files...
...completed.
zsh -i -c exit  0.57s user 0.6s system 94% cpu 1.158 total
```

合計で1.158秒と起動時間が長い… 

そのため今回zshrcをチューニングしてみました．

## 元の.zshrc

```bash
# Enable Powerlevel10k instant prompt. Should stay close to the top of ~/.zshrc.
# Initialization code that may require console input (password prompts, [y/n]
# confirmations, etc.) must go above this block; everything else may go below.
if [[ -r "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh" ]]; then
  source "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh"
fi
# コマンドのスペルを訂正
setopt correct

#グローバルIPアドレス
alias gip='curl globalip.me'
#ローカルIPアドレス
alias lip='ifconfig | grep 192 | awk '\''/inet/ { print $2 }'\'''

source ~/.zsh/powerlevel10k/powerlevel10k.zsh-theme
# To customize prompt, run `p10k configure` or edit ~/.p10k.zsh.
[[ ! -f ~/.p10k.zsh ]] || source ~/.p10k.zsh

export PATH="$PATH:$HOME/.composer/vendor/bin/"
export PATH=$HOME/.nodebrew/current/bin:$PATH
export PATH=$PATH:$HOME/.nodebrew/current/bin

# >>> conda initialize >>>
# !! Contents within this block are managed by 'conda init' !!
__conda_setup="$('/Users/yuki/opt/anaconda3/bin/conda' 'shell.zsh' 'hook' 2> /dev/null)"
if [ $? -eq 0 ]; then
    eval "$__conda_setup"
else
    if [ -f "/Users/yuki/opt/anaconda3/etc/profile.d/conda.sh" ]; then
        . "/Users/yuki/opt/anaconda3/etc/profile.d/conda.sh"
    else
        export PATH="/Users/yuki/opt/anaconda3/bin:$PATH"
    fi
fi
unset __conda_setup
# <<< conda initialize <<<

export ANYENV_ROOT="${HOME}/.local/opt/anyenv"
if [ -d $ANYENV_ROOT ]; then
  export PATH="${ANYENV_ROOT}/bin:${PATH}"
  eval "$(anyenv init -)"
  test -e "${PYENV_ROOT}/plugins/pyenv-virtualenv" && eval "$(pyenv virtualenv-init -)"
fi

eval "$(pyenv init -)"

export PKG_CONFIG_PATH="$(brew --prefix qt@5)/lib/pkgconfig:"

export PATH="${HOME}/.local/bin:${PATH}"
export PKG_CONFIG_PATH="${HOME}/.local/opt/protobuf/lib/pkgconfig:${PKG_CONFIG_PATH}"

source /opt/homebrew/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh

export CMAKE_PREFIX_PATH="${HOME}/.local/opt/protobuf;$(brew --prefix qt@5)"
```

もともとはこんな感じです．

p10kでカスタマイズを行って，各自パスを通していろいろ使えるようにしてるだけです．

# チューニング

## パスを簡略化

condaを入れているのでsetupが発生するのですが，パスを簡略化できます．

どこかわかりますか？

```bash
# >>> conda initialize >>>
# !! Contents within this block are managed by 'conda init' !!
__conda_setup="$('/Users/yuki/opt/anaconda3/bin/conda' 'shell.zsh' 'hook' 2> /dev/null)"
if [ $? -eq 0 ]; then
    eval "$__conda_setup"
else
    if [ -f "/Users/yuki/opt/anaconda3/etc/profile.d/conda.sh" ]; then
        . "/Users/yuki/opt/anaconda3/etc/profile.d/conda.sh"
    else
        export PATH="/Users/yuki/opt/anaconda3/bin:$PATH"
    fi
fi
unset __conda_setup
# <<< conda initialize <<<
```

`/Users/yuki/` ←ここですね．

これは`~/`(チルダスラ)で簡略化できるので全部これに変更します

```bash
# >>> conda initialize >>>
# !! Contents within this block are managed by 'conda init' !!
__conda_setup="$('~/opt/anaconda3/bin/conda' 'shell.zsh' 'hook' 2> /dev/null)"
if [ $? -eq 0 ]; then
    eval "$__conda_setup"
else
    if [ -f "~/opt/anaconda3/etc/profile.d/conda.sh" ]; then
        . "~/opt/anaconda3/etc/profile.d/conda.sh"
    else
        export PATH="~/opt/anaconda3/bin:$PATH"
    fi
fi
unset __conda_setup
# <<< conda initialize <<<
```

これだけで変わるか？と思えるかもですが，これで変わります．

```bash
Saving session...
...saving history...truncating history files...
...completed.
zsh -i -c exit  0.17s user 0.27s system 94% cpu 0.44 total
```

50%カットくらいできました😊

## Anyenvの削除

もっと大きい問題はここにありました．なんでかよくわからないですがanyenvを使うと起動時間が馬鹿遅くなります．設定方法に問題があるので後日調べていきたいと思います．

とりあえず今回はこれを消します．Anyenvは使ってないので消してもヨシ

```bash
export ANYENV_ROOT="${HOME}/.local/opt/anyenv"
if [ -d $ANYENV_ROOT ]; then
  export PATH="${ANYENV_ROOT}/bin:${PATH}"
  eval "$(anyenv init -)"
  test -e "${PYENV_ROOT}/plugins/pyenv-virtualenv" && eval "$(pyenv virtualenv-init -)"
fi
```

## 結果

超早くなりました．1/9レベルまで落とすことができたので満足です！！

```bash
Saving session...
...saving history...truncating history files...
...completed.
zsh -i -c exit  0.08s user 0.07s system 93% cpu 0.160 total
```