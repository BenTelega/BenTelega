import Link from "next/link";

const projects = [
  {
    title: "Aiogram Starter Template",
    description:
      "Готовый шаблон для Telegram-ботов на Aiogram 3.x с Docker Compose, webhook-ами, CI/CD через GitHub Actions и структурой для быстрого старта.",
    tags: ["Python", "Aiogram", "Docker", "CI/CD"],
    href: "https://github.com/BenTelega/aiogram-starter-template",
  },
  {
    title: "Telegram Multi AI Bot",
    description:
      "Telegram-бот с поддержкой нескольких AI-провайдеров: OpenAI, Anthropic, Google Gemini и OpenRouter. Переключение моделей, контекст диалога, система промптов.",
    tags: ["Python", "AI", "Telegram", "LLM"],
    href: "https://github.com/BenTelega/telegram-multi-ai-bot",
  },
  {
    title: "OpenRouter Dashboard",
    description:
      "Дашборд для мониторинга и управления запросами через OpenRouter — статистика использования, логи, баланс и настройки моделей.",
    tags: ["TypeScript", "Next.js", "OpenRouter", "Dashboard"],
    href: "https://github.com/BenTelega/openrouter-dashboard",
  },
  {
    title: "Telegram Web App Shop",
    description:
      "Магазин на Telegram Mini Apps с корзиной, оформлением заказов и интеграцией с Telegram Payments API.",
    tags: ["JavaScript", "Telegram", "Mini Apps", "Payments"],
    href: "https://github.com/BenTelega/telegram-web-app-shop",
  },
  {
    title: "Telegram Bot Broadcaster",
    description:
      "Веб-приложение для создания и рассылки сообщений подписчикам Telegram-бота. Поддерживает шаблоны, кнопки, медиавложения и отложенную отправку.",
    tags: ["TypeScript", "Telegram", "Broadcast", "Web App"],
    href: "https://github.com/BenTelega/telegram-bot-broadcaster",
  },
  {
    title: "Hermes Agent (contributor)",
    description:
      "AI-агент для командной строки с мультиагентной Kanban-оркестрацией, кросс-сессионной памятью, MCP-протоколом и системой плагинов.",
    tags: ["Python", "AI", "CLI", "MCP"],
    href: "https://github.com/nousresearch/hermes",
  },
];

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Проекты</h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          Мои opensource и коммерческие проекты. Ссылки ведут на GitHub.
        </p>
      </div>

      <div className="grid gap-5">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-xl border border-zinc-200 bg-white p-5 transition-all hover:border-zinc-300 hover:shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"
          >
            <div className="flex items-start justify-between">
              <h2 className="text-xl font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400">
                {project.title}
              </h2>
              <span className="mt-1 shrink-0 text-zinc-400 transition-transform group-hover:translate-x-0.5">
                &rarr;
              </span>
            </div>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              {project.description}
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
