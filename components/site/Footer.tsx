export function Footer() {
  return (
    <footer className="border-t border-border/70 px-6 py-12 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-foreground text-background font-serif text-sm">
            JP
          </span>
          <div className="leading-tight">
            <div className="font-serif text-base text-foreground">Jéssika Prado</div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              Fisioterapia Pélvica · CREFITO
            </div>
          </div>
        </div>
        <nav className="flex flex-wrap gap-6 text-sm text-muted-foreground">
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
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Jéssika Prado. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
