"use client";

import { useState } from "react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";

const CV_FILES = {
  es: { path: "/Miguel_Gil_CV_ES.pdf", filename: "CV_Miguel_Gil_ES.pdf" },
  en: { path: "/Miguel_Gil_CV_EN.pdf", filename: "CV_Miguel_Gil_EN.pdf" },
} as const;

const LABELS = {
  es: { idle: "Descargar CV", loading: "Descargando..." },
  en: { idle: "Download CV",  loading: "Downloading..." },
} as const;

export function DownloadButton() {
  const { lang } = useLanguage();
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    const { path, filename } = CV_FILES[lang];
    try {
      const response = await fetch(path);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.style.display = "none";
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error("Download failed:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  const labels = LABELS[lang];

  return (
    <Button
      onClick={handleDownload}
      disabled={isDownloading}
      variant="secondary"
      className="w-full md:w-auto font-bold bg-accent text-accent-foreground py-2 px-4 rounded text-center"
    >
      {isDownloading ? (
        labels.loading
      ) : (
        <>
          <Download className="w-4 h-4 mr-2" />
          {labels.idle}
        </>
      )}
    </Button>
  );
}
