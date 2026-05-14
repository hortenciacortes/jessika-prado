import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-border/70 px-6 py-12 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-center md:flex-row md:items-center md:text-left">
        <div className="flex items-center justify-center gap-3 md:justify-start">
          <span className="relative block h-14 w-14 overflow-hidden rounded-full border border-border/70 bg-background">
            <Image
              src="/images/logo.png"
              alt="Logo Jéssika Prado"
              fill
              sizes="56px"
              className="object-cover"
            />
          </span>
          <div className="leading-tight">
            <div className="font-serif text-base text-foreground">Jéssika Prado</div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              Fisioterapia Pélvica
            </div>
          </div>
        </div>
        <nav className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          <a href="#sobre" className="hover:text-foreground">
            Sobre
          </a>
          <a href="#tratamentos" className="hover:text-foreground">
            Tratamentos
          </a>
          <a href="#metodo" className="hover:text-foreground">
            Método
          </a>
          <a href="#contato" className="hover:text-foreground">
            Contato
          </a>
        </nav>
        <div className="text-xs text-muted-foreground md:text-right">
          <p>© {new Date().getFullYear()} Jéssika Prado. Todos os direitos reservados.</p>
          <p className="mt-1 text-muted-foreground/90 md:text-right">Desenvolvido por <a href="https://hortencia-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer">Hortência Côrtes</a></p>
        </div>
      </div>
    </footer>
  );
}
