#!/bin/bash

# Установить плагины tmux
cd ~/.tmux/plugins || return

# Клонировать tpm если его нет
git clone https://github.com/tmux-plugins/tpm tpm 2>/dev/null || echo "tpm уже существует"

# Установить остальные плагины
git clone https://github.com/tmux-plugins/tmux-sensible 2>/dev/null || echo "tmux-sensible уже существует"
git clone https://github.com/tmux-plugins/tmux-resurrect 2>/dev/null || echo "tmux-resurrect уже существует"
git clone https://github.com/tmux-plugins/tmux-continuum 2>/dev/null || echo "tmux-continuum уже существует"
git clone https://github.com/tmux-plugins/tmux-copycat 2>/dev/null || echo "tmux-copycat уже существует"
git clone https://github.com/tmux-plugins/tmux-prefix-highlight 2>/dev/null || echo "tmux-prefix-highlight уже существует"

echo "Плагины готовы к установке. Запустите tmux и нажмите Ctrl-a + I для установки."
