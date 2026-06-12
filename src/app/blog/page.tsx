const posts = [
  {
    title: "Как работает Kanban-оркестрация в Hermes Agent",
    date: "2026-05-28",
    excerpt:
      "Разбираем архитектуру мультиагентной координации через доску Kanban — от dispatch до handoff. Как агенты делят задачи, передают контекст и синхронизируются через общую базу.",
  },
  {
    title: "Сборка Telegram-бота на Aiogram 3.x",
    date: "2026-05-15",
    excerpt:
      "Пошаговое руководство: настройка webhook, middleware, FSM (конечные автоматы), интеграция с Redis и Docker Compose для продакшена.",
  },
  {
    title: "Telegram Mini Apps: от идеи до запуска",
    date: "2026-04-20",
    excerpt:
      "Как создать Telegram Web App на React/TypeScript, подключить его к боту, работать с Telegram Payments API и опубликовать в магазине приложений.",
  },
  {
    title: "OpenRouter: универсальный шлюз для LLM",
    date: "2026-03-10",
    excerpt:
      "Обзор OpenRouter как единого API для десятков LLM-моделей. Сравнение провайдеров, fallback-стратегии, кэширование и мониторинг расходов.",
  },
  {
    title: "Docker Compose для Telegram-ботов: best practices",
    date: "2026-02-05",
    excerpt:
      "Почему Docker Compose — идеальный способ деплоя ботов. Многосервисная архитектура: бот + Redis + PostgreSQL + nginx. healthcheck, volumes, логи.",
  },
  {
    title: "Hermes Agent: настройка своего AI-агента в терминале",
    date: "2026-01-15",
    excerpt:
      "Установка и конфигурация Hermes Agent: провайдеры, навыки (skills), планировщик cron, webhook-и, кастомные плагины. Полный гайд для начинающих.",
  },
];

export default function BlogPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Блог</h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          Заметки о разработке, AI-агентах, Telegram-ботах и автоматизации.
        </p>
      </div>

      <div className="space-y-4">
        {posts.map((post) => (
          <article
            key={post.title}
            className="rounded-xl border border-zinc-200 bg-white p-5 transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"
          >
            <time className="text-sm text-zinc-500">{post.date}</time>
            <h2 className="mt-1 text-xl font-semibold tracking-tight">
              {post.title}
            </h2>
            <p className="mt-2 leading-relaxed text-zinc-600 dark:text-zinc-400">
              {post.excerpt}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
