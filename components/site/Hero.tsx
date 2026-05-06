import Image from "next/image";

const WHATSAPP =
  "https://wa.me/5500000000000?text=Ol%C3%A1%20J%C3%A9ssika%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28 grain">
      <div aria-hidden className="absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full bg-sage/30 blur-3xl" />
      <div aria-hidden className="absolute top-40 -right-40 h-[480px] w-[480px] rounded-full bg-gold/25 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-12 lg:gap-16 lg:px-10">
        <div className="lg:col-span-7">
          <div className="reveal inline-flex items-center gap-3 rounded-full border border-border bg-background/60 px-4 py-1.5 text-[11px] uppercase tracking-[0.24em] text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-sage" />
            Atendimento humanizado · CREFITO
          </div>

          <h1 className="reveal reveal-delay-1 mt-7 font-serif text-[clamp(2.5rem,6vw,4.75rem)] leading-[1.02] text-foreground text-balance">
            Cuidado íntimo,
            <br />
            <span className="font-serif-italic text-secondary">para a mulher</span>
            <br />
            em todas as fases.
          </h1>

          <p className="reveal reveal-delay-2 mt-7 max-w-xl text-base leading-relaxed text-muted-foreground text-pretty md:text-lg">
            Sou <strong className="font-medium text-foreground">Jéssika Prado</strong>, fisioterapeuta especializada em
            saúde pélvica feminina. Um espaço seguro para tratar dores, disfunções e reconectar você com o seu corpo
            com escuta, ciência e acolhimento.
          </p>

          <div className="reveal reveal-delay-3 mt-9 flex flex-wrap items-center gap-4">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener"
              className="group inline-flex items-center gap-3 rounded-full bg-foreground px-7 py-4 text-xs uppercase tracking-[0.22em] text-background transition-all hover:shadow-2xl hover:-translate-y-0.5"
            >
              Agendar avaliação
              <span className="grid h-7 w-7 place-items-center rounded-full bg-gold text-foreground transition-transform group-hover:rotate-45">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
            <a href="#tratamentos" className="text-sm text-foreground/80 underline-offset-4 hover:underline">
              Conhecer tratamentos
            </a>
          </div>

          <dl className="reveal reveal-delay-3 mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-border/70 pt-8">
            {[
              ["+8", "anos de prática"],
              ["+1.2k", "mulheres atendidas"],
              ["98%", "satisfação"],
            ].map(([k, v]) => (
              <div key={v}>
                <dt className="font-serif text-3xl text-foreground">{k}</dt>
                <dd className="mt-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:col-span-5">
          <div className="reveal reveal-delay-2 relative mx-auto max-w-md">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-gold/40 via-transparent to-sage/40 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-border/60 shadow-2xl">
              <Image
                src="/images/hero-jessika.jpg"
                alt="Jéssika Prado, fisioterapeuta pélvica"
                width={1080}
                height={1600}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden md:block w-56 rounded-2xl border border-border bg-background/95 p-5 shadow-xl backdrop-blur">
              <p className="font-serif-italic text-base leading-snug text-foreground">
                &quot;Reencontrei meu corpo com leveza.&quot;
              </p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Mariana, 34 — paciente
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
