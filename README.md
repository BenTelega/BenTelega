# BenTelega ⚡

**Личный сайт-портфолио разработчика ботов и AI-агентов.**

Собран на [Next.js](https://nextjs.org/) со статическим экспортом на GitHub Pages.

## Быстрый старт

```bash
npm install
npm run dev      # локальная разработка http://localhost:3000
npm run build    # сборка статики в out/
```

## Структура

```
src/
├── app/
│   ├── layout.tsx      # корневой layout с навигацией
│   ├── page.tsx        # главная (About)
│   ├── projects/       # страница проектов
│   ├── blog/           # страница блога
│   └── contact/        # контакты
```

## GitHub Pages

Деплой через GitHub Actions. Сборка статики (`npm run build`) → деплой на GitHub Pages.
