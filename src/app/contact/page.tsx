import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Контакты</h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          Свяжитесь со мной — открыт для предложений и collaboration.
        </p>
      </div>

      <div className="space-y-4">
        {[
          { label: "GitHub", href: "https://github.com/BenTelega" },
          { label: "Email", href: "mailto:reload.benjamin@gmail.com" },
        ].map((link) => (
          <Link
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-white p-4 transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800"
          >
            <span className="text-lg font-medium">{link.label}</span>
            <span className="text-sm text-zinc-500">&rarr;</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
