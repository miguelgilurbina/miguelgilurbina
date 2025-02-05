"use client";

import { useTheme } from "@/hooks/useTheme";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <Button
      onClick={() => setDarkMode(!darkMode)}
      variant="ghost"
      size="icon"
      className="ml-4"
      aria-label="Toggle theme"
    >
      {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </Button>
  );
}
