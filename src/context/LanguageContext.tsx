"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";
import { es, en, Translations, Lang } from "@/lib/i18n";

const TRANSLATIONS: Record<Lang, Translations> = { es, en };

interface LanguageContextValue {
  lang: Lang;
  t: Translations;
  toggleLang: () => void;
  setLang: (l: Lang) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es");

  const setLang = useCallback((l: Lang) => setLangState(l), []);
  const toggleLang = useCallback(
    () => setLangState((prev) => (prev === "es" ? "en" : "es")),
    []
  );

  return (
    <LanguageContext.Provider
      value={{ lang, t: TRANSLATIONS[lang], toggleLang, setLang }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}
