import Link from "next/link";
import { assetPath } from "./assetPath";
import { Button } from "./Button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-paper/86 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-6 lg:px-8">
        <Link
          className="text-base font-semibold tracking-normal text-ink transition hover:text-accent focus-visible:rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:text-lg"
          href="/"
        >
          Евгения Фиалковская
        </Link>
        <nav className="flex items-center gap-2 sm:gap-4" aria-label="Основная навигация">
          <Link
            className="rounded-full px-3 py-2 text-base font-medium text-muted transition hover:bg-accentSoft hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            href="/#cases"
          >
            Кейсы
          </Link>
          <Button href={assetPath("/resume.pdf")} variant="secondary" className="px-4 py-2">
            Резюме
          </Button>
        </nav>
      </div>
    </header>
  );
}
