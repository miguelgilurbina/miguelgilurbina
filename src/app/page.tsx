"use client";

// src/app/page.tsx — home del sistema MEGU v1 (handoff 1b · 3b · 4b)
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/megu/SiteHeader";
import { SiteFooter, EMAIL, GITHUB_URL, LINKEDIN_URL, WHATSAPP_URL } from "@/components/megu/SiteFooter";
import { IconArrowNE, IconArrowRight, IconClock, IconCode, IconDownload, IconMail } from "@/components/megu/icons";
import { Display, Stat, Tag, buttonClass } from "@/components/megu/ui";
import { useCvDownload } from "@/components/megu/useCvDownload";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";
import fotoPerfil from "../../public/fotoPerfil.png";

const stagger = (i: number) => ({ ["--i" as string]: i });

function HeroProfessional() {
  const { t } = useLanguage();
  const h = t.hero;
  const cv = useCvDownload();

  return (
    <section className="dark:hidden">
      <div className="wrap grid gap-12 pb-12 pt-14 md:pt-16 lg:grid-cols-[1fr_320px] lg:items-start">
        <div>
          <div className="reveal mb-7 flex items-center gap-5">
            <span className="mono-label !text-ink">{h.role}</span>
            <span className="hidden h-px flex-1 bg-rule sm:block" aria-hidden="true" />
            <span className="mono-label hidden sm:inline">{h.location}</span>
          </div>
          <Display
            as="h1"
            className="reveal mb-7 text-[46px] leading-[0.98] md:text-[72px] md:leading-[0.94] xl:text-[88px]"
            style={stagger(1)}
          >
            {h.h1a} <em>{h.h1b}</em>
            <br />
            {h.h1c}
          </Display>
          <p className="reveal mb-9 max-w-[52ch] text-[15px] leading-[1.65] text-ink/80 md:text-[17px]" style={stagger(2)}>
            {h.lead}
          </p>
          <div className="reveal flex flex-col gap-3 sm:flex-row sm:items-center" style={stagger(3)}>
            <Link href="#trabajo" className={buttonClass("primary", "lg")}>
              {h.ctaWork}
              <IconArrowRight size={16} />
            </Link>
            <button type="button" onClick={cv.download} disabled={cv.busy} className={buttonClass("secondary", "lg")}>
              <IconDownload size={16} />
              {cv.busy ? h.ctaCvBusy : h.ctaCv}
            </button>
          </div>
        </div>

        <figure className="reveal mx-auto w-full max-w-[320px]" style={stagger(2)}>
          <div className="relative aspect-[4/5] overflow-hidden border border-rule bg-paper-3">
            <Image
              src={fotoPerfil}
              alt={h.portraitAlt}
              fill
              priority
              sizes="320px"
              className="object-cover"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-ink px-2.5 py-2 font-mono text-[9px] font-medium uppercase leading-[1.3] tracking-[0.08em] text-paper">
              {h.portraitCaption}
            </figcaption>
          </div>
        </figure>
      </div>
    </section>
  );
}

function HeroExperimental() {
  const { t } = useLanguage();
  const x = t.hero.exp;

  return (
    <section className="relative hidden overflow-hidden border-b border-rule bg-paper dark:block">
      <Image
        src="/images/archivo/palafitos-noche.webp"
        alt={x.imgAlt}
        fill
        sizes="100vw"
        className="object-cover"
      />
      {/* Tratamiento de legibilidad (3b): degradado 72% → 42% → 90% y líneas de barrido. */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(180deg, rgb(11 15 12 / .72) 0%, rgb(11 15 12 / .42) 42%, rgb(11 15 12 / .9) 100%)" }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0"
        style={{ background: "repeating-linear-gradient(0deg, rgb(127 209 160 / .05) 0 1px, transparent 1px 3px)" }}
        aria-hidden="true"
      />

      <div className="wrap relative z-10 grid min-h-[560px] items-end gap-12 pb-10 pt-24 md:pt-32 lg:grid-cols-[1fr_300px]">
        <div>
          <div className="reveal mb-6 flex items-center gap-3">
            <span className="font-mono text-[9.5px] font-medium uppercase tracking-[0.14em] text-accent">{x.eyebrow}</span>
          </div>
          <h1 className="font-display font-normal tracking-[-0.025em]">
            <span className="reveal block text-[46px] leading-[0.98] text-ink md:text-[82px] md:leading-[0.96]" style={stagger(1)}>
              {x.h1a} <em className="italic text-accent">{x.h1and}</em> {x.h1b}
            </span>
            <span
              className="reveal block text-[46px] leading-[0.98] text-transparent md:text-[82px]"
              style={{ ...stagger(2), WebkitTextStroke: "1px rgb(230 233 227 / .55)" }}
            >
              {x.h1c}
            </span>
          </h1>
          <p className="reveal mt-6 max-w-[48ch] text-[15px] leading-[1.65] text-ink/80 md:text-[16px]" style={stagger(3)}>
            {x.lead}
          </p>
          <div className="reveal mt-8 flex flex-col gap-3 sm:flex-row" style={stagger(4)}>
            <Link href="#trabajo" className={buttonClass("primary", "lg")}>
              {t.hero.ctaWork}
              <IconArrowRight size={16} />
            </Link>
            <Link href="/archivo" className={buttonClass("secondary", "lg", "border-ink/50")}>
              {x.ctaArchive}
            </Link>
          </div>
        </div>

        <div className="reveal hidden border border-rule bg-paper/50 lg:block" style={stagger(4)}>
          <div className="border-b border-rule px-3.5 py-2.5 font-mono text-[9px] font-medium uppercase tracking-[0.1em] text-ink/60">
            {x.figLabel}
          </div>
          <dl className="flex flex-col gap-2 p-3.5 font-mono text-[9.5px] font-medium leading-[1.4]">
            {x.figRows.map((row, i) => (
              <div key={row.k} className="flex justify-between gap-2.5">
                <dt className="text-ink/50">{row.k}</dt>
                <dd className={cn("text-right", i === x.figRows.length - 1 ? "text-accent" : "text-ink")}>{row.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const { t } = useLanguage();
  return (
    <div className="border-y border-ink">
      <div className="wrap !px-0 md:!px-10">
        <dl className="grid grid-cols-2 gap-px bg-rule lg:grid-cols-4">
          {t.stats.map((s) => (
            <Stat key={s.label} value={s.value} label={s.label} />
          ))}
        </dl>
      </div>
    </div>
  );
}

function WorkIndex() {
  const { t } = useLanguage();
  const w = t.work;

  return (
    <section id="trabajo" className="wrap scroll-mt-20 pb-14 pt-14">
      <div className="mb-6 flex items-baseline justify-between gap-4">
        <Display className="text-[28px] leading-none md:text-[40px]">{w.title}</Display>
        <span className="mono-label">{w.count}</span>
      </div>

      <ol className="border-t border-ink">
        {w.items.map((item, i) => {
          const external = item.href.startsWith("http");
          const Arrow = external ? IconArrowNE : IconArrowRight;
          return (
            <li key={item.id} className="border-b border-rule">
              <Link
                href={item.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                aria-label={external ? `${item.title} — ${w.external}` : undefined}
                className="group grid grid-cols-[1fr_auto] items-start gap-x-5 gap-y-2 py-5 transition-[background-color,padding] duration-[160ms] ease-out hover:bg-ink md:grid-cols-[52px_1fr_210px_78px_32px] md:items-center md:px-3 md:py-[26px] md:hover:pl-5"
              >
                <span className="font-mono text-[11px] font-medium text-muted group-hover:text-paper/60 max-md:order-first">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="col-span-2 flex flex-col gap-1.5 md:col-span-1">
                  <span className="font-display text-[26px] leading-[1.05] text-ink group-hover:text-paper md:text-[32px] md:leading-none">
                    {item.title}
                  </span>
                  <span className="text-[13px] leading-[1.4] text-muted group-hover:text-paper/70">{item.sub}</span>
                </span>
                <span className="col-span-2 font-mono text-[9.5px] font-medium uppercase leading-[1.5] tracking-[0.08em] text-muted group-hover:text-paper/60 md:col-span-1">
                  {item.stack}
                </span>
                <span className="font-mono text-[11px] font-medium text-muted group-hover:text-paper/60 max-md:col-start-2 max-md:row-start-1 max-md:text-right">
                  {item.year}
                </span>
                <span className="hidden justify-end text-ink group-hover:text-paper md:flex">
                  <Arrow size={20} />
                </span>
              </Link>
            </li>
          );
        })}
      </ol>
    </section>
  );
}

function About() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <section id="sobre" className="scroll-mt-20 border-t border-ink">
      <div className="wrap grid lg:grid-cols-2">
        <div className="py-10 lg:border-r lg:border-rule lg:py-10 lg:pr-10">
          <span className="mono-label mb-[18px] block">{a.label}</span>
          <ul className="flex flex-col gap-3.5">
            {a.items.map((item) => (
              <li key={item.role + item.org} className="grid grid-cols-[80px_1fr] items-baseline gap-4 md:grid-cols-[96px_1fr]">
                <span className="font-mono text-[10px] font-medium leading-[1.4] text-muted">{item.period}</span>
                <span className="text-[15px] leading-[1.5] text-ink">
                  {item.role} · <span className="text-muted">{item.org}</span>
                </span>
              </li>
            ))}
          </ul>

          <span className="mono-label mb-[18px] mt-9 block">{a.educationLabel}</span>
          <ul className="flex flex-col gap-3.5">
            {a.education.map((item) => (
              <li key={item.title} className="grid grid-cols-[80px_1fr] items-baseline gap-4 md:grid-cols-[96px_1fr]">
                <span className="font-mono text-[10px] font-medium leading-[1.4] text-muted">{item.period}</span>
                <span className="text-[15px] leading-[1.5] text-ink">
                  {item.title} · <span className="text-muted">{item.org}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col justify-between border-t border-rule py-10 lg:border-t-0 lg:pl-10">
          <blockquote className="max-w-[34ch] font-display text-[24px] leading-[1.35] text-ink md:text-[26px]">
            {a.pull}
          </blockquote>
          <div className="mt-7 flex flex-wrap gap-2.5">
            {a.stack.map((s) => (
              <Tag key={s}>{s}</Tag>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactBlock() {
  const { t } = useLanguage();
  const c = t.contact;
  const cv = useCvDownload();

  const row = "flex items-center gap-2.5 text-[13px] leading-none text-ink";
  const mono =
    "inline-flex min-h-11 items-center gap-[7px] font-mono text-[11px] font-medium tracking-[0.06em] text-ink transition-colors duration-[140ms] hover:text-accent";

  return (
    <section id="contacto" className="scroll-mt-20 border-t border-ink">
      <div className="wrap grid gap-12 py-12 md:py-16 lg:grid-cols-2 lg:gap-14">
        <div>
          <span className="mono-label mb-5 block">{c.label}</span>
          <Display className="mb-5 text-[40px] leading-[1.02] md:text-[52px]">
            {c.titleA} <em>{c.titleEm}</em>
          </Display>
          <p className="max-w-[46ch] text-[14px] leading-[1.62] text-ink/70 md:text-[15px]">{c.body}</p>
        </div>

        <div className="flex flex-col gap-7 lg:pt-10">
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href={`mailto:${EMAIL}?subject=Contacto%20desde%20el%20portafolio`} className={buttonClass("primary", "lg")}>
              {c.emailCta}
              <IconArrowRight size={16} />
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={buttonClass("secondary", "lg")}>
              {c.whatsappCta}
            </a>
          </div>

          <div className="flex flex-col gap-3.5 border-t border-rule pt-6">
            <span className={row}>
              <IconMail size={18} className="text-accent" />
              {EMAIL}
            </span>
            <span className={row}>
              <IconClock size={18} className="text-accent" />
              {c.location} · {c.response}
            </span>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-1 border border-rule bg-paper-2 px-4 py-2">
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className={mono}>
              <IconCode size={16} />
              github/miguelgilurbina
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className={mono}>
              <IconArrowNE size={16} />
              linkedin/in/miguelgilurbina
            </a>
            <button type="button" onClick={cv.download} className={mono}>
              <IconDownload size={16} />
              {c.cvFile}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main id="contenido" className="flex-1">
        <HeroProfessional />
        <HeroExperimental />
        <Stats />
        <WorkIndex />
        <About />
        <ContactBlock />
      </main>
      <SiteFooter />
    </div>
  );
}
