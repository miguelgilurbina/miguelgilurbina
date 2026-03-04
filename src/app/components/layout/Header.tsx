"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Navigation } from "./Navigation";
import { ThemeToggle } from "../ui/ThemeThoggle";
import { useLanguage } from "@/context/LanguageContext";

function LangToggle() {
  const { lang, toggleLang } = useLanguage();
  return (
    <button
      onClick={toggleLang}
      aria-label={lang === "es" ? "Switch to English" : "Cambiar a Español"}
      className="relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border bg-background hover:bg-accent hover:border-primary/30 transition-all duration-200 text-sm font-medium text-muted-foreground hover:text-primary"
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={lang}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.18 }}
          className="flex items-center gap-1.5"
        >
          <span className="text-base leading-none">
            {lang === "es" ? "🇨🇱" : "🇺🇸"}
          </span>
          <span>{lang === "es" ? "ES" : "EN"}</span>
        </motion.span>
      </AnimatePresence>
    </button>
  );
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-background/80 backdrop-blur-sm text-foreground py-3 border-b border-border sticky top-0 z-50 transition-colors duration-300">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-xl font-bold hover:text-primary transition-colors tracking-tight"
        >
          <span className="text-gradient">Miguel Gil</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-3">
          <Navigation />
          <div className="flex items-center gap-2 border-l border-border pl-3 ml-1">
            <LangToggle />
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center gap-2">
          <LangToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="p-0 w-9 h-9">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[240px] sm:w-[300px] bg-background"
            >
              <nav className="flex flex-col space-y-4 mt-8">
                <Navigation mobile onClose={() => setIsOpen(false)} />
                <div className="pt-2 border-t border-border flex items-center gap-3">
                  <ThemeToggle />
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
