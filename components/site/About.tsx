import Image from "next/image";

export function About() {
  return (
    <section id="sobre" className="relative py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 lg:grid-cols-12 lg:gap-20 lg:px-10">
        <div className="lg:col-span-5">
          <div className="relative">
            <Image
              src="/images/about-care.jpg"
              alt="Cuidado e acolhimento na fisioterapia pélvica"
              width={1024}
              height={1200}
              className="w-full rounded-[2rem] object-cover shadow-xl"
            />
            <div className="absolute -right-4 -bottom-4 hidden md:flex h-32 w-32 items-center justify-center rounded-full bg-gold text-center font-serif-italic text-foreground shadow-xl">
              <span>
                desde
                <br />
                2020
              </span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <p className="text-[11px] uppercase tracking-[0.28em] text-secondary">Sobre Jéssika</p>
          <h2 className="mt-5 font-serif text-4xl leading-[1.1] text-foreground md:text-5xl text-balance">
            Uma escuta atenta, <span className="font-serif-italic text-secondary">um cuidado integral.</span>
          </h2>
          <div className="mt-7 space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Acredito que cuidar da saúde íntima é um ato profundo de autoconhecimento. Há mais de seis anos
              acompanho homens e mulheres em diferentes fases da vida, incluindo gestação, pós-parto, menopausa
              e saúde masculina, sempre combinando técnica avançada e presença genuína em cada sessão.
            </p>
            <p>
              Meu trabalho parte da premissa de que cada corpo é único. Por isso, construo planos terapêuticos
              individualizados, baseados em ciência, com tempo e espaço para suas dúvidas, dores e descobertas.
            </p>
          </div>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {[
              "Especialista em Saúde Pélvica Feminina e Masculina",
              "Técnicas atualizadas e baseadas em evidências",
              "Atendimento humanizado e individual",
              "Ambiente seguro, discreto e acolhedor",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 rounded-xl border border-border/70 bg-card/60 p-4">
                <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-sage/40">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="text-sm text-foreground">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
