import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      {/* Hero */}
      <section className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          BenTelega <span className="text-zinc-400">⚡</span>
        </h1>
        <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          Разработчик Telegram-ботов и AI-агентов. Создаю автоматизацию,
          интеграции и интеллектуальные сервисы на Python &amp; TypeScript.
        </p>
        <div className="flex gap-3 pt-2">
          <Link
            href="/projects"
            className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
          >
            Проекты
          </Link>
          <Link
            href="/contact"
            className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-medium transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
          >
            Связаться
          </Link>
        </div>
      </section>

      {/* About */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold tracking-tight">Обо мне</h2>
        <div className="space-y-3 text-zinc-600 dark:text-zinc-400">
          <p>
            Разрабатываю чат-ботов, AI-агентов и инструменты автоматизации.
            Работаю с Aiogram, Next.js, Docker, а также с LLM API и платформами
            для развёртывания агентов.
          </p>
          <p>
            Веду opensource-проекты, пишу технические заметки и экспериментирую
            с новыми подходами в разработке. Активно использую Hermes Agent,
            OpenRouter и современный стек для AI-продуктов.
          </p>
        </div>
      </section>

      {/* Tech stack */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold tracking-tight">Стек</h2>
        <div className="flex flex-wrap gap-2">
          {["Python", "TypeScript", "Next.js", "Aiogram", "Docker", "PostgreSQL", "Redis", "GitHub Actions", "OpenRouter"].map(
            (tech) => (
              <span
                key={tech}
                className="rounded-full border border-zinc-300 px-3 py-1 text-sm dark:border-zinc-700"
              >
                {tech}
              </span>
            ),
          )}
        </div>
      </section>
    </div>
  );
}
