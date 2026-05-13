import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { whatsappLink } from "@/components/site/whatsapp";

const WHATSAPP_BIO = whatsappLink(
  "Olá, Jéssika! Vi seu link da bio e gostaria de agendar um atendimento."
);
const INSTAGRAM_URL = "https://instagram.com/jessikaprado";
const MAPS_URL =
  "https://maps.google.com/?q=Av.+Mal.+Rondon,+2682+-+Princesa+Isabel,+Cacoal+-+RO";

export const metadata: Metadata = {
  title: "Bio · Jéssika Prado",
  description:
    "Links rápidos para WhatsApp, Instagram, site e localização da fisioterapeuta pélvica Jéssika Prado.",
};

type IconProps = {
  className?: string;
};

function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 22a9.8 9.8 0 0 0 4.9-1.3L22 22l-1.3-5.1A10 10 0 1 0 12 22Z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.2 9.4c.2-.6.6-1 .9-1.1.3-.2.6-.1.8 0l.8 2.2c.1.2 0 .5-.2.7l-.6.7a8.8 8.8 0 0 0 3.1 3.1l.7-.6c.2-.2.5-.3.7-.2l2.2.8c.2.2.2.5 0 .8-.1.3-.5.7-1.1.9-2.1.6-5.7-2.8-6.3-4.9-.2-.7-.2-1.4 0-2.4Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function SiteIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="9" />
      <path d="M3.8 9h16.4M3.8 15h16.4M12 3a14.5 14.5 0 0 1 0 18M12 3a14.5 14.5 0 0 0 0 18" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LocationIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 21c3.3-4 5-7.1 5-9.6A5 5 0 1 0 7 11.4C7 13.9 8.7 17 12 21Z" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="11" r="2" />
    </svg>
  );
}

function HomeCareIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 12.8 12 5l8 7.8V20a1 1 0 0 1-1 1h-5.2v-5.5H10.2V21H5a1 1 0 0 1-1-1z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.2 3.7h5.6" strokeLinecap="round" />
    </svg>
  );
}

type BioLinkProps = {
  href: string;
  label: string;
  icon: React.ReactNode;
  external?: boolean;
};

function BioLink({ href, label, icon, external = true }: BioLinkProps) {
  const baseClasses =
    "group flex w-full items-center justify-between rounded-2xl border border-foreground/12 bg-card/90 px-4 py-3 text-left transition-all hover:-translate-y-0.5 hover:border-foreground/25 hover:shadow-lg";

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={baseClasses}>
        <span className="flex items-center gap-3 text-sm font-medium text-foreground sm:text-base">
          {icon}
          {label}
        </span>
        <ArrowIcon className="h-4 w-4 text-foreground/50 transition-transform group-hover:translate-x-0.5" />
      </a>
    );
  }

  return (
    <Link href={href} className={baseClasses}>
      <span className="flex items-center gap-3 text-sm font-medium text-foreground sm:text-base">
        {icon}
        {label}
      </span>
      <ArrowIcon className="h-4 w-4 text-foreground/50 transition-transform group-hover:translate-x-0.5" />
    </Link>
  );
}

function ArrowIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M7 17 17 7M10 7h7v7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function BioPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background px-4 py-10 text-foreground sm:px-6">
      <div aria-hidden className="absolute inset-0">
        <Image
          src="/images/background-bio.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,oklch(0.84_0.05_125/.20),transparent_45%),radial-gradient(circle_at_85%_10%,oklch(0.82_0.06_78/.12),transparent_40%),linear-gradient(180deg,oklch(0.98_0.008_90/.58),oklch(0.94_0.018_86/.68))]"
      />

      <section className="grain relative mx-auto w-full max-w-md rounded-4xl border border-foreground/12 bg-card/85 p-6 shadow-[0_30px_80px_-35px_rgba(0,0,0,0.35)] backdrop-blur-sm sm:p-8" aria-labelledby="bio-title">
        <header className="reveal text-center">
          <div className="mx-auto mb-5 h-24 w-24 overflow-hidden rounded-full border-2 border-card bg-muted shadow-md sm:h-28 sm:w-28">
            <Image
              src="/images/bio.jpg"
              alt="Foto da fisioterapeuta Jéssika Prado"
              width={240}
              height={240}
              sizes="(max-width: 640px) 96px, 112px"
            className="h-full w-full object-cover object-top"
              priority
            />
          </div>
          <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">Link da bio</p>
          <h1 id="bio-title" className="mt-3 font-serif text-4xl leading-tight text-balance">
            Jéssika Prado
          </h1>
          <p className="mt-2 text-sm text-muted-foreground sm:text-base">
            Fisioterapia pélvica com escuta, técnica e acolhimento.
          </p>
        </header>

        <div className="mt-8 grid gap-3 reveal reveal-delay-1">
          <BioLink
            href={WHATSAPP_BIO}
            label="WhatsApp"
            icon={<WhatsAppIcon className="h-5 w-5 text-foreground" />}
          />
          <BioLink
            href={INSTAGRAM_URL}
            label="Instagram"
            icon={<InstagramIcon className="h-5 w-5 text-foreground" />}
          />
          <BioLink
            href="/"
            label="Site oficial"
            icon={<SiteIcon className="h-5 w-5 text-foreground" />}
            external={false}
          />
          <BioLink
            href={MAPS_URL}
            label="Localização do consultório"
            icon={<LocationIcon className="h-5 w-5 text-foreground" />}
          />
        </div>

        <aside className="mt-6 reveal reveal-delay-2 rounded-2xl border border-gold/40 bg-gold/15 p-4" aria-label="Destaque de atendimento">
          <div className="flex items-start gap-3">
            <HomeCareIcon className="mt-0.5 h-5 w-5 shrink-0 text-foreground" />
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-foreground/75">Destaque</p>
              <p className="mt-1 text-sm leading-relaxed text-foreground">
                Atendimento a domicílio disponível em Cacoal e região, com todo cuidado e conforto para você.
              </p>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
