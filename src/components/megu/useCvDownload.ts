"use client";

import { useCallback, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const CV_FILES = {
  es: { path: "/Miguel_Gil_CV_ES.pdf", filename: "CV_Miguel_Gil_ES.pdf" },
  en: { path: "/Miguel_Gil_CV_EN.pdf", filename: "CV_Miguel_Gil_EN.pdf" },
} as const;

/** Descarga el CV en el idioma activo. Si el fetch falla, abre el PDF directo. */
export function useCvDownload() {
  const { lang } = useLanguage();
  const [busy, setBusy] = useState(false);

  const download = useCallback(async () => {
    const { path, filename } = CV_FILES[lang];
    setBusy(true);
    try {
      const response = await fetch(path);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const url = URL.createObjectURL(await response.blob());
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch {
      window.open(path, "_blank", "noopener");
    } finally {
      setBusy(false);
    }
  }, [lang]);

  return { download, busy, href: CV_FILES[lang].path };
}
