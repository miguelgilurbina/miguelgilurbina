"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  ReactNode,
} from "react";
import { es, en, Translations, Lang } from "@/lib/i18n";

const TRANSLATIONS: Record<Lang, Translations> = { es, en };
const STORAGE_KEY = "mgu-lang";

interface LanguageContextValue {
  lang: Lang;
  t: Translations;
  toggleLang: () => void;
  setLang: (l: Lang) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es");

  // Restaura la preferencia guardada. Se hace en efecto y no en el estado
  // inicial para que el HTML del servidor y el del cliente coincidan.
  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "es" || stored === "en") {
      setLangState(stored);
      return;
    }
    if (navigator.language && !navigator.language.toLowerCase().startsWith("es")) {
      setLangState("en");
    }
  }, []);

  // El atributo lang del documento tiene que seguir al idioma visible:
  // de él dependen los buscadores, los lectores de pantalla y la traducción
  // automática del navegador.
  useEffect(() => {
    document.documentElement.lang = lang;
    window.localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

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
