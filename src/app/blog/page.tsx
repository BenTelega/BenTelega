export default function BlogPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Блог</h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          Заметки о разработке, AI-агентах и автоматизации.
        </p>
      </div>

      <div className="space-y-4">
        {[
          {
            title: "Как работает Kanban-оркестрация в Hermes Agent",
            date: "2026-05-28",
            excerpt:
              "Разбираем архитектуру мультиагентной координации через доску Kanban — от dispatch до handoff.",
          },
          {
            title: "Сборка Telegram-бота на Aiogram 3.x",
            date: "2026-05-15",
            excerpt:
              "Пошаговое руководство: webhook, middleware, FSM и Docker Compose.",
          },
        ].map((post) => (
          <article
            key={post.title}
            className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900"
          >
            <time className="text-sm text-zinc-500">{post.date}</time>
            <h2 className="mt-1 text-xl font-semibold">{post.title}</h2>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              {post.excerpt}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
