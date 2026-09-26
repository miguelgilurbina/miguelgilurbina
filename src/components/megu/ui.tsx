import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

/* Primitivas del sistema MEGU (handoff 4a): radio 2px, filete de 1px,
   hover de 140ms que mueve tinta y nunca escala, foco único (--focus-ring),
   disabled al 38% y área táctil de al menos 44px. */

const base =
  "inline-flex items-center justify-center gap-2.5 rounded-sys border font-sans font-semibold transition-colors duration-[140ms] ease-out disabled:pointer-events-none disabled:opacity-[.38] active:translate-y-px";

const variants = {
  primary: "border-accent bg-accent text-on-accent hover:border-accent-press hover:bg-accent-press hover:text-on-accent",
  secondary: "border-ink bg-transparent text-ink hover:bg-ink hover:text-paper",
  inverse: "border-paper/50 bg-transparent text-paper hover:border-paper hover:bg-paper hover:text-ink",
} as const;

const sizes = {
  md: "h-11 px-[22px] text-[12.5px]",
  lg: "h-[50px] px-6 text-[13px]",
  sm: "h-9 px-[15px] text-[11.5px]",
} as const;

type Variant = keyof typeof variants;
type Size = keyof typeof sizes;

export function buttonClass(variant: Variant = "primary", size: Size = "md", className?: string) {
  return cn(base, variants[variant], sizes[size], className);
}

type ButtonLinkProps = ComponentProps<typeof Link> & { variant?: Variant; size?: Size };

export function ButtonLink({ variant, size, className, ...props }: ButtonLinkProps) {
  return <Link className={buttonClass(variant, size, className)} {...props} />;
}

type ButtonProps = ComponentProps<"button"> & { variant?: Variant; size?: Size };

export function Button({ variant, size, className, type = "button", ...props }: ButtonProps) {
  return <button type={type} className={buttonClass(variant, size, className)} {...props} />;
}

/** Enlace de texto: filete inferior al 28% que pasa a verde en hover. */
export function textLinkClass(className?: string) {
  return cn(
    "inline-flex items-center gap-2 border-b border-ink/30 pb-0.5 font-medium text-ink transition-colors duration-[140ms] ease-out hover:border-accent hover:text-accent",
    className
  );
}

type ChipProps = {
  selected?: boolean;
  disabled?: boolean;
  children: ReactNode;
  onClick?: () => void;
  className?: string;
};

/** Chip de filtro (4a): seleccionado en verde, apagado con filete, disabled al 38%. */
export function Chip({ selected, disabled, children, onClick, className }: ChipProps) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "inline-flex min-h-11 items-center rounded-sys border px-[15px] font-mono text-[10px] font-medium uppercase tracking-[0.1em] transition-colors duration-[140ms] ease-out disabled:opacity-[.38] md:min-h-0 md:py-[9px]",
        selected
          ? "border-accent bg-accent text-on-accent"
          : "border-rule text-ink hover:border-accent hover:text-accent",
        className
      )}
    >
      {children}
    </button>
  );
}

/** Etiqueta de tecnología: mono sobre papel, sin radio. */
export function Tag({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center border border-rule px-[11px] py-[7px] font-mono text-[10px] font-medium leading-none tracking-[0.06em] text-ink",
        className
      )}
    >
      {children}
    </span>
  );
}

/** Monograma MEGU pintado con currentColor: se invierte solo en el tema experimental. */
export function LogoMark({ size = 24, className }: { size?: number; className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn("block shrink-0 bg-current transition-[width,height] duration-200 ease-out", className)}
      style={{
        width: size,
        height: size,
        WebkitMask: "url(/logo-megu.png) center / contain no-repeat",
        mask: "url(/logo-megu.png) center / contain no-repeat",
      }}
    />
  );
}

/** Título display en serif; lo que va en <em> sale en itálica verde. */
export function Display({
  as: Tag = "h2",
  className,
  style,
  children,
}: {
  as?: "h1" | "h2" | "h3" | "div" | "p";
  className?: string;
  style?: React.CSSProperties;
  children: ReactNode;
}) {
  return (
    <Tag
      style={style}
      className={cn(
        "font-display font-normal tracking-[-0.025em] text-ink [&_em]:italic [&_em]:text-accent",
        className
      )}
    >
      {children}
    </Tag>
  );
}

/** Celda de cifra: serif grande + etiqueta mono. */
export function Stat({ value, label, muted }: { value: string; label: string; muted?: boolean }) {
  return (
    <div className="bg-paper px-5 py-5 md:px-6 md:py-[22px]">
      <div className={cn("font-display text-[32px] leading-none md:text-[44px]", muted ? "text-muted" : "text-ink")}>
        {value}
      </div>
      <div className="mono-label mt-2 !text-[9.5px] !leading-[1.5] !tracking-[0.08em]">{label}</div>
    </div>
  );
}
