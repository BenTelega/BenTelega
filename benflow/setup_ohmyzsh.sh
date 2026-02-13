#!/bin/bash

# Скрипт для развертывания oh-my-zsh конфигурации на новой машине
# Использование: bash setup_ohmyzsh.sh

echo "🚀 Настройка oh-my-zsh конфигурации из проекта benflow..."
echo "---------------------------------------------------"

# Проверяем, установлен ли zsh
if ! command -v zsh &> /dev/null; then
    echo "❌ Zsh не установлен. Установите zsh сначала."
    echo "Для Ubuntu/Debian: sudo apt install zsh"
    echo "Для macOS: brew install zsh"
    exit 1
fi

# Проверяем, установлен ли oh-my-zsh
if [ ! -d "$HOME/.oh-my-zsh" ]; then
    echo "📥 Установка oh-my-zsh..."
    sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)" "" --unattended
else
    echo "✅ Oh-my-zsh уже установлен"
fi

# Создаем резервную копию текущих конфигов
if [ -f "$HOME/.zshrc" ]; then
    echo "🔄 Создание резервной копии текущего .zshrc..."
    mv "$HOME/.zshrc" "$HOME/.zshrc.backup.$(date +%Y%m%d%H%M%S)"
fi

if [ -f "$HOME/.p10k.zsh" ]; then
    echo "🔄 Создание резервной копии текущего .p10k.zsh..."
    mv "$HOME/.p10k.zsh" "$HOME/.p10k.zsh.backup.$(date +%Y%m%d%H%M%S)"
fi

if [ -d "$HOME/.oh-my-zsh" ]; then
    echo "🔄 Создание резервной копии текущего oh-my-zsh..."
    mv "$HOME/.oh-my-zsh" "$HOME/.oh-my-zsh.backup.$(date +%Y%m%d%H%M%S)"
fi

# Копируем конфигурацию из репозитория
echo "📋 Копирование конфигурации..."
ln -s "$HOME/dev/benflow/configs/oh-my-zsh/.zshrc" "$HOME/.zshrc"
ln -s "$HOME/dev/benflow/configs/oh-my-zsh/.p10k.zsh" "$HOME/.p10k.zsh"
ln -s "$HOME/dev/benflow/configs/oh-my-zsh/oh-my-zsh" "$HOME/.oh-my-zsh"

# Устанавливаем powerlevel10k, если он не установлен
if [ ! -d "${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k" ]; then
    echo "🎨 Установка powerlevel10k..."
    git clone --depth=1 https://github.com/romkatv/powerlevel10k.git "${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k"
fi

# Устанавливаем zsh-syntax-highlighting, если он не установлен
if [ ! -d "${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting" ]; then
    echo "🎨 Установка zsh-syntax-highlighting..."
    git clone https://github.com/zsh-users/zsh-syntax-highlighting.git "${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting"
fi

# Устанавливаем zsh-autosuggestions, если он не установлен
if [ ! -d "${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/plugins/zsh-autosuggestions" ]; then
    echo "💡 Установка zsh-autosuggestions..."
    git clone https://github.com/zsh-users/zsh-autosuggestions.git "${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/plugins/zsh-autosuggestions"
fi

# Настройка Vim
if [ -d "$HOME/dev/benflow/configs/vim" ]; then
    echo "📝 Настройка Vim..."
    
    # Создаем резервные копии текущих конфигов Vim
    if [ -f "$HOME/.vimrc" ]; then
        echo "🔄 Создание резервной копии текущего .vimrc..."
        mv "$HOME/.vimrc" "$HOME/.vimrc.backup.$(date +%Y%m%d%H%M%S)"
    fi
    
    if [ -d "$HOME/.vim" ]; then
        echo "🔄 Создание резервной копии текущего .vim..."
        mv "$HOME/.vim" "$HOME/.vim.backup.$(date +%Y%m%d%H%M%S)"
    fi
    
    # Копируем конфигурацию Vim
    mkdir -p "$HOME/.vim/autoload" "$HOME/.vim/bundle"
    cp "$HOME/dev/benflow/configs/vim/.vimrc" "$HOME/.vimrc"
    
    echo "✅ Vim настроен с конфигурацией из benflow"
    echo "💡 Для установки плагинов запустите Vim и выполните команду: :PlugInstall"
fi

echo "✅ Настройка завершена!"
echo "🔄 Запустите 'source ~/.zshrc' или откройте новый терминал, чтобы применить изменения."
echo "🎨 Для настройки powerlevel10k запустите: p10k configure"