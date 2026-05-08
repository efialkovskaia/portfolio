export function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-base text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>© Евгения Фиалковская</p>
        <nav className="flex flex-wrap gap-4" aria-label="Контакты">
          <a
            className="rounded-md text-ink transition hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            href="https://t.me/EugeniaFi"
            target="_blank"
            rel="noopener noreferrer"
          >
            Telegram
          </a>
          <a
            className="rounded-md text-ink transition hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            href="mailto:djunne@yandex.ru"
          >
            Email
          </a>
        </nav>
      </div>
    </footer>
  );
}
