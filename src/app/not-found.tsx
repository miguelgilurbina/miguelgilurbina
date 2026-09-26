"use client";

import Link from "next/link";
import { SiteHeader } from "@/components/megu/SiteHeader";
import { SiteFooter } from "@/components/megu/SiteFooter";
import { IconArrowRight } from "@/components/megu/icons";
import { buttonClass, textLinkClass } from "@/components/megu/ui";
import { useLanguage } from "@/context/LanguageContext";

export default function NotFound() {
  const { t } = useLanguage();
  const n = t.notFound;

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main id="contenido" className="wrap flex-1 py-20 md:py-28">
        <div className="max-w-xl">
          <span className="mono-label reveal">{n.label}</span>
          <div className="reveal mt-4 font-display text-[96px] leading-none text-ink md:text-[140px]" style={{ ["--i" as string]: 1 }}>
            404
          </div>
          <p className="reveal mt-6 text-[15px] leading-[1.6] text-ink/70" style={{ ["--i" as string]: 2 }}>
            {n.body}
          </p>
          <div className="reveal mt-10 flex flex-wrap items-center gap-6" style={{ ["--i" as string]: 3 }}>
            <Link href="/archivo" className={buttonClass("primary")}>
              {n.toArchive}
              <IconArrowRight size={16} />
            </Link>
            <Link href="/" className={textLinkClass("text-[13px]")}>
              {n.toHome}
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
