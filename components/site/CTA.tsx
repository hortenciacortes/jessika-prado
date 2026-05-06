const WHATSAPP =
  "https://wa.me/5569992790650?text=Ol%C3%A1%20J%C3%A9ssika%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.";

export function CTA() {
  return (
    <section id="contato" className="relative px-6 py-24 lg:px-10 lg:py-32">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-foreground p-10 text-background sm:p-16 lg:p-24 grain">
        <div aria-hidden className="absolute -top-32 -right-20 h-80 w-80 rounded-full bg-gold/30 blur-3xl" />
        <div aria-hidden className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-sage/20 blur-3xl" />

        <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-[11px] uppercase tracking-[0.28em] text-gold">Vamos conversar</p>
            <h2 className="mt-5 font-serif text-4xl leading-[1.05] md:text-6xl text-balance">
              Seu cuidado começa
              <br />
              <span className="font-serif-italic text-gold">com uma escuta.</span>
            </h2>
            <p className="mt-6 max-w-lg text-background/70 leading-relaxed">
              Agende sua avaliação inicial pelo WhatsApp. Responderei pessoalmente para entender seu momento e
              encontrar o melhor caminho para você.
            </p>
          </div>

          <div className="lg:col-span-5 lg:justify-self-end">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener"
              className="group inline-flex items-center gap-4 rounded-full bg-gold px-8 py-5 text-xs uppercase tracking-[0.22em] text-foreground transition-all hover:bg-background hover:shadow-2xl"
            >
              Agendar pelo WhatsApp
              <span className="grid h-9 w-9 place-items-center rounded-full bg-foreground text-gold transition-transform group-hover:rotate-45">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>

            <div className="mt-8 grid gap-4 text-sm text-background/70">
              <div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-gold">Horário</div>
                <div className="mt-1 text-background">Seg a Sex · 08h às 18h</div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-gold">Atendimento</div>
                <div className="mt-1 text-background">Consultório Humanus Clínica de Especialidades Cacoal</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
