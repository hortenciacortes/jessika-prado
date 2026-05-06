const items = [
  {
    n: "01",
    t: "Saúde Pélvica Feminina",
    d: "Tratamento de incontinência urinária, prolapsos, dor pélvica crônica e disfunções do assoalho pélvico.",
  },
  {
    n: "02",
    t: "Gestação & Pós-Parto",
    d: "Preparo para o parto, recuperação pós-parto, diástase abdominal e fortalecimento global.",
  },
  {
    n: "03",
    t: "Sexualidade & Bem-Estar",
    d: "Cuidado terapêutico para dispareunia, vaginismo e disfunções relacionadas à intimidade.",
  },
  {
    n: "04",
    t: "Menopausa & Climatério",
    d: "Acompanhamento das mudanças hormonais, fortalecimento, postura e qualidade de vida.",
  },
  {
    n: "05",
    t: "Pré e Pós-Operatório",
    d: "Reabilitação para cirurgias ginecológicas, mamárias e oncológicas com olhar integral.",
  },
  {
    n: "06",
    t: "Pilates Terapêutico",
    d: "Sessões individuais com foco em consciência corporal, respiração e força de centro.",
  },
];

export function Treatments() {
  return (
    <section id="tratamentos" className="relative bg-foreground py-24 text-background lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-[11px] uppercase tracking-[0.28em] text-gold">Tratamentos</p>
            <h2 className="mt-5 font-serif text-4xl leading-[1.05] text-background md:text-5xl text-balance">
              Cada fase merece um <span className="font-serif-italic text-gold">cuidado dedicado.</span>
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-background/70">
              Atendimentos individuais e exclusivos, em ambiente reservado. Cada plano é construído a partir de uma
              avaliação criteriosa do seu momento.
            </p>
          </div>

          <div className="lg:col-span-7">
            <ul className="grid grid-cols-1 gap-px bg-background/10 sm:grid-cols-2">
              {items.map((it) => (
                <li
                  key={it.n}
                  className="group bg-foreground p-7 transition-colors duration-500 hover:bg-foreground/60"
                >
                  <div className="flex items-baseline justify-between">
                    <span className="font-serif-italic text-2xl text-gold">{it.n}</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="text-background/40 transition-all group-hover:text-gold group-hover:translate-x-1"
                    >
                      <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="mt-5 font-serif text-xl text-background">{it.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-background/60">{it.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
