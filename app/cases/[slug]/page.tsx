import { notFound } from "next/navigation";
import { CaseDetail } from "@/components/CaseDetail";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { cases, getCaseBySlug, getNextCase } from "@/data/cases";

type CasePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return cases.map((caseStudy) => ({
    slug: caseStudy.slug
  }));
}

export async function generateMetadata({ params }: CasePageProps) {
  const { slug } = await params;
  const caseStudy = getCaseBySlug(slug);

  if (!caseStudy) {
    return {};
  }

  return {
    title: `${caseStudy.title} | Евгения Фиалковская`,
    description: caseStudy.description
  };
}

export default async function CasePage({ params }: CasePageProps) {
  const { slug } = await params;
  const caseStudy = getCaseBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <>
      <Header />
      <CaseDetail caseStudy={caseStudy} nextCase={getNextCase(slug)} />
      <Footer />
    </>
  );
}
