"use client";

import { useState } from "react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DownloadButton() {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      const response = await fetch("/cv-miguel-gil.pdf");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.style.display = "none";
      a.href = url;
      a.download = "CV_Miguel_Gil.pdf";
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed:", error);
      alert(
        "Lo siento, hubo un problema al descargar el CV. Por favor, inténtalo de nuevo más tarde."
      );
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <Button
      onClick={handleDownload}
      disabled={isDownloading}
      variant="secondary"
      className="w-full md:w-auto font-bold bg-accent text-accent-foreground py-2 px-4 rounded w-full md:w-auto text-center"
    >
      {isDownloading ? (
        "Descargando..."
      ) : (
        <>
          <Download className="w-4 h-4 mr-2" />
          Descargar CV
        </>
      )}
    </Button>
  );
}
