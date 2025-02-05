"use client";

import Image from "next/image";
import { StaticImageData } from "next/image";
import { DownloadButton } from "../ui/DownloadButton";

interface HeroProps {
  image: StaticImageData;
}

export function Hero({ image }: HeroProps) {
  return (
    <section className="flex flex-col md:flex-row items-center md:items-start gap-8">
      <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden mx-auto md:mx-0">
        <Image
          src={image}
          alt="Miguel Gil"
          width={192}
          height={192}
          className="object-cover"
          priority
        />
      </div>
      <div className="flex-1">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          AI Solutions Architect & Full Stack Developer
        </h2>
        <p className="text-base md:text-lg mb-4">
          Desarrollador especializado en la integración de soluciones de IA y
          desarrollo web moderno. Con experiencia en Next.js, TypeScript y
          Tailwind CSS, combino expertise técnico con un enfoque en la
          implementación práctica de tecnologías de IA. Mi background en
          ingeniería ambiental y ventas aporta una perspectiva única al
          desarrollo de software, enfocándome en soluciones efectivas y
          comunicación clara.
        </p>
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <a
            href="#contacto"
            className="bg-accent text-accent-foreground font-bold py-2 px-4 rounded w-full md:w-auto text-center"
          >
            Contactar
          </a>
          <DownloadButton />
        </div>
      </div>
    </section>
  );
}
