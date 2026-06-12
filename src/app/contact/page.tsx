import Link from "next/link";

const links = [
  {
    label: "GitHub",
    href: "https://github.com/BenTelega",
    desc: "Исходники всех проектов",
  },
  {
    label: "Email",
    href: "mailto:reload.benjamin@gmail.com",
    desc: "reload.benjamin@gmail.com",
  },
  {
    label: "Telegram",
    href: "https://t.me/ben_telega",
    desc: "@ben_telega",
  },
];

export default function ContactPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Контакты</h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          Свяжитесь со мной — открыт для предложений, collaboration и новых
          проектов.
        </p>
      </div>

      {/* Social links */}
      <div className="space-y-3">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={
              link.href.startsWith("http")
                ? "noopener noreferrer"
                : undefined
            }
            className="flex items-center justify-between rounded-xl border border-zinc-200 bg-white p-4 transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800"
          >
            <div>
              <span className="text-lg font-medium">{link.label}</span>
              <p className="text-sm text-zinc-500">{link.desc}</p>
            </div>
            <span className="text-zinc-400">&rarr;</span>
          </Link>
        ))}
      </div>

      {/* Contact form */}
      <div className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
        <h2 className="text-xl font-semibold tracking-tight">
          Написать сообщение
        </h2>
        <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
          Отправьте сообщение прямо сейчас — я отвечу в ближайшее время.
        </p>
        <form
          action="mailto:reload.benjamin@gmail.com"
          method="GET"
          encType="text/plain"
          className="mt-5 space-y-4"
        >
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Тема
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              className="mt-1 w-full rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm transition-colors focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:focus:border-zinc-400 dark:focus:ring-zinc-400"
              placeholder="Чем могу помочь?"
            />
          </div>
          <div>
            <label
              htmlFor="body"
              className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Сообщение
            </label>
            <textarea
              id="body"
              name="body"
              rows={4}
              required
              className="mt-1 w-full rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm transition-colors focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:focus:border-zinc-400 dark:focus:ring-zinc-400"
              placeholder="Ваше сообщение..."
            />
          </div>
          <button
            type="submit"
            className="rounded-lg bg-zinc-900 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
          >
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
}
