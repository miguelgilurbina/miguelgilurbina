"use client";

// Archivo visual (handoff 3a) + Curiana Radio y el Simulador Caquetío, que
// antes vivían en /direccion-creativa.
import { Suspense, useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { SiteHeader } from "@/components/megu/SiteHeader";
import { SiteFooter } from "@/components/megu/SiteFooter";
import { IconArrowLeft, IconArrowRight, IconExternal, IconSearch, IconClose } from "@/components/megu/icons";
import { Button, Chip, Display, Stat, Tag, buttonClass } from "@/components/megu/ui";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

const CURIANA_URL = "https://curiana-radio.vercel.app";
const EXPERIMENT_URL = "https://curiana-radio.vercel.app/kaketiana/experimento";

type Piece = ReturnType<typeof useLanguage>["t"]["archive"]["pieces"][number];

const src = (id: string) => `/images/archivo/${id}.webp`;
const isSquare = (id: string) => id === "curiana";

function Tile({ piece, index, onOpen, generated }: { piece: Piece; index: number; onOpen: () => void; generated: string }) {
  const [loaded, setLoaded] = useState(false);
  const square = isSquare(piece.id);

  return (
    <li className={cn("reveal flex flex-col gap-2.5", square ? "md:col-span-1" : "md:col-span-2")} style={{ ["--i" as string]: index }}>
      <button
        type="button"
        onClick={onOpen}
        aria-label={`${piece.title} — ${piece.alt}`}
        className={cn(
          "group relative block w-full overflow-hidden border border-ink",
          square ? "aspect-square" : "aspect-[3/2]",
          !loaded && "skeleton"
        )}
      >
        <Image
          src={src(piece.id)}
          alt=""
          fill
          sizes={square ? "(min-width: 768px) 25vw, 100vw" : "(min-width: 768px) 50vw, 100vw"}
          onLoad={() => setLoaded(true)}
          className={cn(
            "object-cover transition-[transform,opacity] duration-500 ease-out group-hover:scale-[1.03]",
            loaded ? "opacity-100" : "opacity-0"
          )}
        />
      </button>
      <div className="flex items-baseline justify-between gap-4">
        <span className="font-display text-[19px] leading-[1.25] text-ink">{piece.title}</span>
        <span className="shrink-0 text-right font-mono text-[8.5px] font-medium uppercase leading-[1.4] tracking-[0.08em] text-muted">
          {piece.meta}
          <br />
          {generated}
        </span>
      </div>
    </li>
  );
}

function Lightbox({
  pieces,
  index,
  onClose,
  onMove,
}: {
  pieces: Piece[];
  index: number;
  onClose: () => void;
  onMove: (delta: number) => void;
}) {
  const { t } = useLanguage();
  const a = t.archive;
  const piece = pieces[index];
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onMove(1);
      if (e.key === "ArrowLeft") onMove(-1);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      previous?.focus();
    };
  }, [onClose, onMove]);

  const control =
    "inline-flex h-11 items-center gap-2 rounded-sys border border-[rgb(230_233_227/.3)] px-3.5 font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-[#E6E9E3]/80 transition-colors duration-[140ms] hover:border-[#E6E9E3] hover:text-[#E6E9E3]";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={piece.title}
      className="fixed inset-0 z-[90] flex flex-col bg-[rgb(11_15_12/.94)] p-4 md:p-10"
      onClick={onClose}
    >
      <div className="flex items-center justify-between gap-4" onClick={(e) => e.stopPropagation()}>
        <span className="font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-[#E6E9E3]/60">
          {String(index + 1).padStart(2, "0")} {a.of} {String(pieces.length).padStart(2, "0")}
        </span>
        <button ref={closeRef} type="button" onClick={onClose} className={control}>
          {a.close}
          <IconClose size={16} />
        </button>
      </div>

      <div className="relative my-4 flex-1">
        <Image src={src(piece.id)} alt={piece.alt} fill sizes="100vw" className="object-contain" />
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between" onClick={(e) => e.stopPropagation()}>
        <div className="flex flex-col gap-1.5">
          <span className="font-display text-[24px] leading-[1.2] text-[#E6E9E3]">{piece.title}</span>
          <span className="font-mono text-[10px] font-medium uppercase tracking-[0.08em] text-[#E6E9E3]/60">
            {piece.meta} · {a.generated}
          </span>
        </div>
        {pieces.length > 1 && (
          <div className="flex gap-2">
            <button type="button" onClick={() => onMove(-1)} className={control} aria-label={a.prev}>
              <IconArrowLeft size={16} />
            </button>
            <button type="button" onClick={() => onMove(1)} className={control} aria-label={a.next}>
              <IconArrowRight size={16} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function Gallery() {
  const { t } = useLanguage();
  const a = t.archive;
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();

  const validIds = a.series.map((s) => s.id);
  const raw = params.get("serie");
  const serie = raw && validIds.includes(raw) ? raw : "todas";

  const [open, setOpen] = useState<number | null>(null);

  const shown = useMemo(
    () => a.pieces.filter((p) => serie === "todas" || p.series === serie),
    [a.pieces, serie]
  );

  const pick = (id: string) => {
    setOpen(null);
    const query = id === "todas" ? "" : `?serie=${id}`;
    router.replace(`${pathname}${query}`, { scroll: false });
  };

  const close = useCallback(() => setOpen(null), []);
  const move = useCallback(
    (delta: number) => setOpen((i) => (i === null ? i : (i + delta + shown.length) % shown.length)),
    [shown.length]
  );

  return (
    <>
      <div className="wrap flex flex-wrap gap-2 pt-8" role="group" aria-label={a.label}>
        <Chip selected={serie === "todas"} onClick={() => pick("todas")}>{a.all}</Chip>
        {a.series.map((s) => (
          <Chip key={s.id} selected={serie === s.id} onClick={() => pick(s.id)}>
            {s.name}
          </Chip>
        ))}
      </div>

      <div className="wrap pb-11 pt-6">
        <p className="mono-label mb-4" aria-live="polite">
          {String(shown.length).padStart(2, "0")} {a.of} {String(a.pieces.length).padStart(2, "0")}
        </p>

        {shown.length > 0 ? (
          <ul key={serie} className="grid gap-5 md:grid-cols-4">
            {shown.map((piece, i) => (
              <Tile key={piece.id} piece={piece} index={i} generated={a.generated} onOpen={() => setOpen(i)} />
            ))}
          </ul>
        ) : (
          <div className="flex max-w-md flex-col gap-3.5 border border-rule p-8">
            <span className="flex h-11 w-11 items-center justify-center border border-rule text-muted">
              <IconSearch size={20} />
            </span>
            <p className="text-[13px] leading-[1.55] text-ink/65">
              {a.empty.replace("{total}", String(a.pieces.length))}
            </p>
            <Button variant="secondary" size="sm" className="self-start" onClick={() => pick("todas")}>
              {a.clear}
            </Button>
          </div>
        )}
      </div>

      {open !== null && shown[open] && <Lightbox pieces={shown} index={open} onClose={close} onMove={move} />}
    </>
  );
}

export default function ArchivoPage() {
  const { t } = useLanguage();
  const a = t.archive;
  const c = a.curiana;
  const s = a.sim;

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main id="contenido" className="flex-1">
        {/* ── Encabezado ─────────────────────────────────────────────── */}
        <section className="wrap grid gap-8 pt-12 md:pt-14 lg:grid-cols-[1fr_380px] lg:items-end lg:gap-12">
          <div>
            <span className="mono-label reveal mb-5 block">{a.label}</span>
            <Display as="h1" className="reveal mb-3.5 text-[48px] leading-[0.98] md:text-[64px]" style={{ ["--i" as string]: 1 }}>
              {a.titleA} <em className="!text-ink">{a.titleEm}</em>
            </Display>
            <p className="reveal max-w-[54ch] text-[15px] leading-[1.65] text-ink/80 md:text-[16px]" style={{ ["--i" as string]: 2 }}>
              {a.intro}
            </p>
          </div>
          <p className="reveal text-[12.5px] leading-[1.7] text-muted" style={{ ["--i" as string]: 3 }}>
            {a.aside}
          </p>
        </section>

        <Suspense fallback={<div className="wrap py-10"><div className="skeleton h-[300px]" /></div>}>
          <Gallery />
        </Suspense>

        {/* ── Series ─────────────────────────────────────────────────── */}
        <div className="border-t border-ink">
          <div className="wrap !px-0 md:!px-10">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4">
              {a.series.map((serie, i) => (
                <div
                  key={serie.id}
                  className={cn(
                    "border-rule p-6",
                    i < a.series.length - 1 && "border-b lg:border-b-0 lg:border-r",
                    i % 2 === 0 && "sm:border-r"
                  )}
                >
                  <div className="mb-2 text-[13px] font-semibold leading-[1.3] text-ink">{serie.name}</div>
                  <p className="text-[12.5px] leading-[1.6] text-muted">{serie.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Curiana Radio ──────────────────────────────────────────── */}
        <section id="curiana" className="scroll-mt-20 border-t border-ink">
          <div className="wrap grid gap-10 py-14 md:py-20 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <div>
              <span className="mono-label mb-5 block">{c.label}</span>
              <Display className="mb-4 text-[44px] leading-none md:text-[56px]">{c.title}</Display>
              <span className="inline-flex items-center gap-2 rounded-full border border-rule px-3.5 py-2 font-mono text-[10px] font-medium uppercase tracking-[0.1em] text-ink">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                {c.status}
              </span>
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-[17px] leading-[1.6] text-ink">{c.lead}</p>
              <p className="text-[15px] leading-[1.65] text-ink/75">{c.body}</p>
              <a href={CURIANA_URL} target="_blank" rel="noopener noreferrer" className={buttonClass("primary", "md", "mt-2 self-start")}>
                {c.cta}
                <IconExternal size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* ── Simulador Caquetío ─────────────────────────────────────── */}
        <section id="simulador" className="scroll-mt-20 border-t border-rule">
          <div className="wrap py-14 md:py-20">
            <div className="grid gap-10 lg:grid-cols-[220px_1fr] lg:gap-12">
              <div>
                <span className="mono-label block">{s.label}</span>
              </div>
              <div className="max-w-[70ch]">
                <Display className="mb-4 text-[36px] leading-[1.05] md:text-[44px]">{s.title}</Display>
                <p className="mb-8 text-[17px] leading-[1.6] text-ink">{s.lead}</p>
                <div className="flex flex-col gap-4 text-[16px] leading-[1.7] text-ink/80">
                  <p>{s.body1}</p>
                  <p>{s.body2}</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <span className="mono-label mb-4 block">{s.statsTitle}</span>
              <dl className="grid grid-cols-2 gap-px border border-rule bg-rule lg:grid-cols-4">
                {s.stats.map((st) => (
                  <Stat key={st.label} value={st.value} label={st.label} />
                ))}
              </dl>
            </div>

            <div className="mt-12 grid gap-10 lg:grid-cols-[220px_1fr] lg:gap-12">
              <Display as="h3" className="text-[26px] leading-[1.15]">{s.rigorTitle}</Display>
              <ol className="flex max-w-[70ch] flex-col gap-7">
                {s.rigor.map((item, i) => (
                  <li key={item.t} className="grid grid-cols-[28px_1fr] items-baseline gap-3.5">
                    <span className="font-mono text-[10px] font-medium leading-[1.6] text-accent">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <h4 className="mb-1.5 text-[15px] font-semibold text-ink">{item.t}</h4>
                      <p className="text-[15px] leading-[1.65] text-ink/75">{item.d}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-2.5 lg:pl-[268px]">
              {s.chips.map((chip) => (
                <Tag key={chip}>{chip}</Tag>
              ))}
            </div>
            <div className="mt-8 lg:pl-[268px]">
              <a href={EXPERIMENT_URL} target="_blank" rel="noopener noreferrer" className={buttonClass("secondary", "md")}>
                {s.cta}
                <IconExternal size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* ── Clientes bajo NDA + herramientas ───────────────────────── */}
        <section className="border-t border-ink">
          <div className="wrap grid gap-10 py-12 lg:grid-cols-2 lg:gap-14">
            <div>
              <span className="mono-label mb-4 block">{a.nda.label}</span>
              <Display className="mb-4 text-[30px] leading-[1.1]">{a.nda.title}</Display>
              <p className="max-w-[56ch] text-[15px] leading-[1.65] text-ink/75">{a.nda.body}</p>
            </div>
            <div>
              <span className="mono-label mb-4 block">{a.toolsLabel}</span>
              <div className="flex flex-wrap gap-2.5">
                {a.tools.map((tool) => (
                  <Tag key={tool}>{tool}</Tag>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
