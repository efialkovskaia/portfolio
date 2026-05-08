import { CaseCard } from "@/components/CaseCard";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { cases } from "@/data/cases";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <section id="cases" className="border-t border-line bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-base font-semibold text-accent">Selected work</p>
              <h2 className="mt-3 text-4xl font-semibold tracking-normal text-ink sm:text-5xl">
                Кейсы
              </h2>
              <p className="mt-5 text-lg leading-8 text-muted">
                Выбрала проекты, которые лучше всего показывают мой подход: разобраться в контексте, упростить сложный сценарий, учесть ограничения бизнеса и разработки, проверить решение с пользователями.
              </p>
            </div>
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {cases.map((caseStudy) => (
                <CaseCard key={caseStudy.slug} caseStudy={caseStudy} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
