export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Проекты</h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          Мои opensource и коммерческие проекты.
        </p>
      </div>

      <div className="grid gap-6">
        {[
          {
            title: "Hermes Agent",
            description:
              "AI-агент для командной строки с поддержкой MCP, Kanban-оркестрации, кросс-сессионной памяти и расширяемой архитектурой плагинов.",
            tags: ["Python", "AI", "CLI"],
          },
          {
            title: "Telegram Bot Template",
            description:
              "Шаблон для Telegram-ботов на Aiogram 3.x с Docker Compose, webhook-ами и CI/CD.",
            tags: ["Python", "Aiogram", "Docker"],
          },
        ].map((project) => (
          <article
            key={project.title}
            className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900"
          >
            <h2 className="text-xl font-semibold">{project.title}</h2>
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
          </article>
        ))}
      </div>
    </div>
  );
}
