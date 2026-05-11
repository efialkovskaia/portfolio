import { assetPath } from "./assetPath";
import { Button } from "./Button";
import { keepShortWords } from "./typography";

const bullets = [
  "4+ года в UX/UI и продуктовом дизайне",
  "Опыт в CDEK, ВТБ, The Watch и Skyeng",
  "Мобильные приложения, web-view решения, веб-интерфейсы и адаптивы",
  "Исследования, дизайн-ревью, паттерны, accessibility, дизайн-системы"
];

export function Hero() {
  return (
    <section className="mx-auto grid max-w-7xl gap-12 px-5 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:pb-24 lg:pt-24">
      <div className="flex flex-col justify-center">
        <p className="mb-5 text-xl font-normal text-ink sm:text-2xl">
          Евгения Фиалковская
        </p>
        <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-normal text-ink sm:text-5xl lg:text-6xl">
          {keepShortWords("UX/UI дизайнер сложных продуктовых сценариев")}
        </h1>
        <p className="mt-7 max-w-3xl text-lg leading-8 text-muted">
          {keepShortWords("Проектирую мобильные и веб-интерфейсы для логистики, финтеха, банковских сервисов и EdTech. Помогаю командам превращать сложные процессы в понятные пользовательские сценарии — через анализ, исследования, прототипирование и системный дизайн.")}
        </p>
        <ul className="mt-8 grid gap-3 text-base leading-7 text-graphite sm:grid-cols-2">
          {bullets.map((bullet) => (
            <li key={bullet} className="flex gap-3">
              <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
              <span>{keepShortWords(bullet)}</span>
            </li>
          ))}
        </ul>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button href={assetPath("/resume.pdf")}>Скачать резюме</Button>
          <Button
            href="https://t.me/EugeniaFi"
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
          >
            Связаться
          </Button>
        </div>
      </div>

      <div className="flex items-center justify-center lg:justify-end">
        <figure className="w-full max-w-md overflow-hidden rounded-2xl border border-line bg-white shadow-soft">
          <div className="aspect-[4/5] bg-accentSoft">
            <img
              className="h-full w-full object-cover"
              src={assetPath("/images/avatar-placeholder.jpg")}
              alt="Портрет Евгении Фиалковской"
            />
          </div>
          <figcaption className="flex flex-col gap-1 border-t border-line px-6 py-5">
            <span className="text-lg font-semibold text-ink">Евгения Фиалковская</span>
            <span className="text-base text-muted">UX/UI Designer · Moscow</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
