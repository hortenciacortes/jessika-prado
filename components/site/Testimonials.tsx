const t = [
  {
    q: "A escuta da Jéssika transformou minha relação com o meu corpo. Saí de cada sessão mais inteira e segura.",
    a: "Carolina M., 38",
    r: "Pós-parto",
  },
  {
    q: "Encontrei um espaço onde minha dor foi levada a sério. O cuidado é técnico e ao mesmo tempo profundamente humano.",
    a: "Beatriz S., 45",
    r: "Dor pélvica crônica",
  },
  {
    q: "Pela primeira vez senti que estava sendo tratada como pessoa, não como um diagnóstico. Recomendo de olhos fechados.",
    a: "Renata A., 52",
    r: "Climatério",
  },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="relative py-24 lg:py-32">
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] uppercase tracking-[0.28em] text-secondary">Depoimentos</p>
          <h2 className="mt-5 font-serif text-4xl leading-[1.1] text-foreground md:text-5xl text-balance">
            Histórias que <span className="font-serif-italic text-secondary">se transformam.</span>
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {t.map((it, i) => (
            <figure
              key={i}
              className="group relative flex flex-col rounded-3xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <svg width="36" height="28" viewBox="0 0 36 28" className="text-gold" fill="currentColor" aria-hidden>
                <path d="M0 28V18C0 8 5 1.5 14 0l1 4c-5 1-8 5-8 10h7v14H0zm21 0V18C21 8 26 1.5 35 0l1 4c-5 1-8 5-8 10h7v14H21z" opacity=".5" />
              </svg>
              <blockquote className="mt-6 flex-1 font-serif-italic text-xl leading-snug text-foreground text-pretty">
                &quot;{it.q}&quot;
              </blockquote>
              <figcaption className="mt-8 border-t border-border pt-5">
                <div className="font-serif text-base text-foreground">{it.a}</div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{it.r}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
