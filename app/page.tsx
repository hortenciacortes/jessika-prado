import type { Metadata } from "next";
import { About } from "@/components/site/About";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Method } from "@/components/site/Method";
import { Testimonials } from "@/components/site/Testimonials";
import { Treatments } from "@/components/site/Treatments";

export const metadata: Metadata = {
  title: "Jéssika Prado · Fisioterapeuta Pélvica",
  description:
    "Jéssika Prado, fisioterapeuta especializada em saúde pélvica feminina. Atendimento humanizado para gestação, pós-parto, dor pélvica, climatério e bem-estar íntimo.",
  openGraph: {
    title: "Jéssika Prado · Fisioterapia Pélvica",
    description: "Cuidado íntimo e humanizado para a mulher em todas as fases.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Physiotherapy",
  name: "Jéssika Prado — Fisioterapia Pélvica",
  description:
    "Fisioterapeuta especializada em saúde pélvica feminina, gestação, pós-parto, dor pélvica e climatério.",
  medicalSpecialty: "Pelvic Floor Physiotherapy",
  areaServed: "BR",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground antialiased">
      <Header />
      <Hero />
      <About />
      <Treatments />
      <Method />
      <Testimonials />
      <CTA />
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
    </main>
  );
}
