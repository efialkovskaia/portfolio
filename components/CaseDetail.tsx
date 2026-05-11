import Link from "next/link";
import type { CaseStudy } from "@/data/cases";
import { assetPath } from "./assetPath";
import { Button } from "./Button";
import { keepShortWords } from "./typography";

type CaseDetailProps = {
  caseStudy: CaseStudy;
  nextCase: CaseStudy;
};

export function CaseDetail({ caseStudy, nextCase }: CaseDetailProps) {
  return (
    <main id="main">
      <section className="mx-auto max-w-7xl px-5 pb-12 pt-12 sm:px-6 sm:pb-16 sm:pt-16 lg:px-8">
        <Link
          href="/#cases"
          className="inline-flex rounded-full text-base font-semibold text-accent transition hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          {keepShortWords("Назад к кейсам")}
        </Link>
        <div className="mt-8 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <p className="text-base font-semibold text-accent">{caseStudy.company}</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-normal text-ink sm:text-5xl">
              {keepShortWords(caseStudy.title)}
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted">
              {keepShortWords(caseStudy.description)}
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {caseStudy.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-line bg-white px-3 py-1 text-sm font-medium text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-soft">
            <img
              className="aspect-[16/10] h-full w-full object-cover"
              src={assetPath(caseStudy.image)}
              alt={`Крупное превью кейса ${caseStudy.title}`}
            />
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-12 sm:px-6 lg:grid-cols-3 lg:px-8">
          <InfoCard title="Проблема" text={caseStudy.context.problem} />
          <InfoCard title="Пользователи" text={caseStudy.context.users} />
          <InfoCard title="Ограничения" text={caseStudy.context.constraints} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.36fr_0.64fr]">
          <div>
            <p className="text-base font-semibold text-accent">{caseStudy.type}</p>
            <h2 className="mt-3 text-3xl font-semibold text-ink">Моя роль</h2>
          </div>
          <p className="text-lg leading-8 text-graphite">{keepShortWords(caseStudy.role)}</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-10 sm:px-6 lg:grid-cols-2 lg:px-8">
        <TextList title="Процесс" items={caseStudy.process} />
        <TextList title="Решение" items={caseStudy.solution} />
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-3xl">
          <p className="text-base font-semibold text-accent">
            {keepShortWords(caseStudy.highlightsTitle)}
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-ink">Результат</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {caseStudy.results.map((result) => (
            <div key={`${result.value}-${result.label}`} className="rounded-2xl border border-line bg-white p-6 shadow-sm">
              <p className="text-3xl font-semibold text-accent">{result.value}</p>
              <p className="mt-3 text-base leading-6 text-muted">
                {keepShortWords(result.label)}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto flex max-w-7xl flex-col gap-3 px-5 pb-16 pt-6 sm:px-6 sm:pb-20 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <Button href="/#cases" variant="secondary">
          {keepShortWords("Назад к кейсам")}
        </Button>
        <Button href={`/cases/${nextCase.slug}`}>
          {keepShortWords(`Следующий кейс: ${nextCase.title}`)}
        </Button>
      </section>
    </main>
  );
}

function InfoCard({ title, text }: { title: string; text: string }) {
  return (
    <article className="rounded-2xl border border-line bg-paper p-6">
      <h2 className="text-xl font-semibold text-ink">{title}</h2>
      <p className="mt-4 text-base leading-7 text-muted">{keepShortWords(text)}</p>
    </article>
  );
}

function TextList({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="rounded-2xl border border-line bg-white p-6 shadow-sm sm:p-8">
      <h2 className="text-3xl font-semibold text-ink">{title}</h2>
      <ol className="mt-6 space-y-5">
        {items.map((item, index) => (
          <li key={item} className="grid grid-cols-[2.25rem_1fr] gap-4">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accentSoft text-base font-semibold text-accent">
              {index + 1}
            </span>
            <p className="text-base leading-7 text-graphite">{keepShortWords(item)}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
