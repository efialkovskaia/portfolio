import Link from "next/link";
import type { CaseStudy } from "@/data/cases";
import { assetPath } from "./assetPath";

type CaseCardProps = {
  caseStudy: CaseStudy;
};

export function CaseCard({ caseStudy }: CaseCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:border-accent/35 hover:shadow-soft">
      <Link
        href={`/cases/${caseStudy.slug}`}
        className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        aria-label={`Смотреть кейс: ${caseStudy.title}`}
      >
        <div className="aspect-[16/10] overflow-hidden bg-accentSoft">
          <img
            className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
            src={assetPath(caseStudy.image)}
            alt={`Превью кейса ${caseStudy.title}`}
          />
        </div>
      </Link>
      <div className="flex min-h-[360px] flex-1 flex-col p-6 sm:p-7">
        <div className="mb-4 flex flex-wrap gap-2">
          {caseStudy.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-line bg-paper px-3 py-1 text-sm font-medium text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-base font-semibold text-accent">{caseStudy.company}</p>
        <h3 className="mt-2 text-2xl font-semibold leading-tight text-ink">
          {caseStudy.title}
        </h3>
        <p className="mt-4 text-base leading-7 text-muted">{caseStudy.description}</p>
        <div className="mt-5 space-y-2">
          {caseStudy.highlights.slice(0, 4).map((highlight) => (
            <p key={highlight} className="text-base leading-6 text-graphite">
              {highlight}
            </p>
          ))}
        </div>
        <div className="mt-auto pt-6">
          <Link
            href={`/cases/${caseStudy.slug}`}
            className="inline-flex w-fit items-center rounded-full bg-ink px-5 py-3 text-base font-semibold text-white transition hover:bg-graphite focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
          >
            Смотреть кейс
          </Link>
        </div>
      </div>
    </article>
  );
}
