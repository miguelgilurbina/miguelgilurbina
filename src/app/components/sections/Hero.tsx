"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Github, ExternalLink } from "lucide-react";
import { DownloadButton } from "../ui/DownloadButton";
import { useLanguage } from "@/context/LanguageContext";
import {
  staggerContainer,
  staggerItem,
  slideInLeft,
  badgeEntrance,
  hoverGlow,
} from "@/lib/animations";

interface HeroProps {
  image: StaticImageData;
}

export function Hero({ image }: HeroProps) {
  const { t } = useLanguage();

  return (
    <section className="flex flex-col md:flex-row items-center md:items-start gap-10 mb-20 pt-4">
      {/* Avatar */}
      <motion.div
        variants={slideInLeft}
        initial="hidden"
        animate="visible"
        className="flex-shrink-0"
      >
        <div className="relative w-36 h-36 md:w-52 md:h-52 mx-auto md:mx-0">
          {/* Glow ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-indigo-400/10 blur-xl scale-110" />
          <div className="relative w-full h-full rounded-full overflow-hidden ring-2 ring-primary/25 ring-offset-2 ring-offset-background">
            <Image
              src={image}
              alt="Miguel Gil"
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Available dot */}
          <span className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-background animate-pulse" />
        </div>
      </motion.div>

      {/* Text */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="flex-1 text-center md:text-left"
      >
        {/* Badge */}
        <motion.div variants={badgeEntrance} className="mb-5 inline-flex">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            {t.hero.badge}
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={staggerItem}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight tracking-tight"
        >
          <span className="text-gradient">{t.hero.title}</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={staggerItem}
          className="text-lg md:text-xl text-muted-foreground mb-5 font-medium"
        >
          {t.hero.subtitle}
        </motion.p>

        {/* Description */}
        <motion.p
          variants={staggerItem}
          className="text-base md:text-lg mb-8 leading-relaxed text-foreground/80 max-w-2xl mx-auto md:mx-0"
        >
          {t.hero.description}
        </motion.p>

        {/* Featured project card */}
        <motion.div
          variants={staggerItem}
          className="mb-8 rounded-xl border border-primary/20 bg-accent/60 p-4 card-hover-glow"
        >
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="text-left">
              <h3 className="font-semibold text-base mb-0.5">{t.hero.featuredLabel}</h3>
              <p className="text-sm text-muted-foreground">{t.hero.featuredDesc}</p>
            </div>
            <div className="flex gap-2 flex-shrink-0">
              <motion.a
                href="https://prompt-maker-steel.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
                {...hoverGlow}
                whileTap={{ scale: 0.97 }}
              >
                <ExternalLink className="w-3.5 h-3.5" />
                {t.hero.viewLive}
              </motion.a>
              <motion.a
                href="https://github.com/miguelgilurbina/prompt-maker"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-border rounded-md text-sm font-medium hover:bg-background/80 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                <Github className="w-3.5 h-3.5" />
                {t.hero.viewCode}
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          variants={staggerItem}
          className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start"
        >
          <motion.a
            href="#contacto"
            className="inline-flex items-center justify-center bg-primary text-primary-foreground font-semibold py-3 px-6 rounded-lg transition-colors group shadow-indigo-sm"
            whileHover={{ scale: 1.03, boxShadow: "0 4px 24px hsl(245 58% 51% / 0.35)" }}
            whileTap={{ scale: 0.98 }}
          >
            {t.hero.ctaContact}
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </motion.a>

          <DownloadButton />

          <motion.a
            href="#proyectos"
            className="inline-flex items-center justify-center border border-border font-semibold py-3 px-6 rounded-lg hover:bg-accent hover:border-primary/30 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {t.hero.ctaProjects}
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
