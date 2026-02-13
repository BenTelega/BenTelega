" Базовая конфигурация Vim с поддержкой плагинов

" Установить путь к плагинам
set nocompatible
filetype off

" Установить путь к плагинам
set runtimepath+=~/.vim/bundle/vim-plug
let plug_path = '~/.vim/autoload/plug.vim'

" Загрузить vim-plug
if empty(glob(plug_path))
  silent! execute '!curl -fLo ~/.vim/autoload/plug.vim --create-dirs https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim'
  autocmd VimEnter * PlugInstall | source $MYVIMRC
endif

" Настройки Vim
syntax on
set number
set expandtab
set shiftwidth=4
set tabstop=4
set ignorecase
set smartcase
set ruler
set showcmd
set wildmenu
set backspace=indent,eol,start
set history=1000
set autowrite
set mouse=a
set cursorline
set cursorcolumn

" Плагины
call plug#begin('~/.vim/bundle')

" Основные плагины
Plug 'junegunn/vim-plug'          " Менеджер плагинов
Plug 'scrooloose/nerdtree'        " Файловый менеджер
Plug 'vim-airline/vim-airline'    " Статус бар
Plug 'vim-airline/vim-airline-themes' " Темы для статус бара
Plug 'tpope/vim-fugitive'         " Git интеграция
Plug 'airblade/vim-gitgutter'     " Индикация изменений в Git
Plug 'neoclide/coc.nvim', {'branch': 'release'} " Автодополнение
Plug 'sheerun/vim-polyglot'       " Поддержка синтаксиса для разных языков
Plug 'terryma/vim-multiple-cursors' " Множественные курсоры
Plug 'easymotion/vim-easymotion'  " Быстрые перемещения
Plug 'majutsushi/tagbar'          " Просмотр структуры кода
Plug 'vim-syntastic/syntastic'    " Проверка синтаксиса

" Тема
Plug 'morhetz/gruvbox'            " Тема оформления

call plug#end()

" Конфигурация плагинов
let g:airline_theme='gruvbox'
let g:NERDTreeShowHidden=1
let g:NERDTreeIgnore=['\\.pyc$', '\\~$']
let g:gitgutter_max_signs=1000

" Клавишные сочетания
nmap <C-n> :NERDTreeToggle<CR>
nmap <C-t> :TagbarToggle<CR>
nmap <Leader>f :Telescope find_files<CR>
nmap <Leader>g :GitGutter<CR>

" Автокоманды
autocmd FileType python setlocal shiftwidth=4 tabstop=4
autocmd FileType javascript setlocal shiftwidth=2 tabstop=2
autocmd FileType html setlocal shiftwidth=2 tabstop=2