import Image from "next/image";

const steps = [
  {
    n: "I",
    t: "Acolhimento",
    d: "Conversa para compreender sua história, queixas e expectativas, sem pressa.",
  },
  {
    n: "II",
    t: "Avaliação",
    d: "Exame físico criterioso, baseado em evidências, respeitando seus limites.",
  },
  {
    n: "III",
    t: "Plano Terapêutico",
    d: "Tratamento individualizado, com objetivos claros e linguagem acessível.",
  },
  {
    n: "IV",
    t: "Acompanhamento",
    d: "Reavaliações contínuas e suporte para uma evolução consciente e duradoura.",
  },
];

export function Method() {
  return (
    <section id="metodo" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-[11px] uppercase tracking-[0.28em] text-secondary">Método</p>
            <h2 className="mt-5 font-serif text-4xl leading-[1.05] text-foreground md:text-5xl text-balance">
              Um percurso <span className="font-serif-italic text-secondary">construído com você.</span>
            </h2>
            <p className="mt-6 max-w-md text-muted-foreground leading-relaxed">
              Cada encontro é pensado para que você se sinta segura, ouvida e protagonista do seu cuidado do primeiro
              contato à alta.
            </p>
            <div className="mt-10 overflow-hidden rounded-[2rem] border border-border shadow-xl">
              <Image
                src="/images/clinic-space.jpg"
                alt="Consultório acolhedor de fisioterapia pélvica"
                width={1400}
                height={1000}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <ol className="lg:col-span-7 space-y-3">
            {steps.map((s) => (
              <li
                key={s.n}
                className="group relative grid grid-cols-[auto_1fr] items-start gap-7 rounded-2xl border border-border/70 bg-card/60 p-7 transition-all hover:border-gold hover:shadow-lg"
              >
                <span className="font-serif-italic text-4xl text-gold md:text-5xl">{s.n}</span>
                <div>
                  <h3 className="font-serif text-2xl text-foreground">{s.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
