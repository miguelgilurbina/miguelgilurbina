"use client"

import { useState } from "react"
import { Chip } from "@/components/megu/ui"
import { Figure } from "@/components/megu/case"
import { ShowcaseImage } from "@/components/historia/showcase-image"

type AdminCard = {
  tag: string
  title: string
  description: string
  image: { src: string; alt: string }
}

export function AdminTabs({ cards }: { cards: AdminCard[] }) {
  const [active, setActive] = useState(0)
  const card = cards[active]

  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-2" role="group" aria-label="Módulos de administración">
        {cards.map((c, i) => (
          <Chip key={c.tag} selected={i === active} onClick={() => setActive(i)}>
            {c.tag}
          </Chip>
        ))}
      </div>

      <div className="grid items-start gap-8 xl:grid-cols-[1.3fr_1fr]">
        <Figure caption={`${card.tag} — captura de producción`}>
          <ShowcaseImage src={card.image.src} alt={card.image.alt} aspectClassName="aspect-video" />
        </Figure>
        <div>
          <h3 className="mb-3 font-display text-[24px] leading-[1.15] text-ink">{card.title}</h3>
          <p className="text-[15px] leading-[1.7] text-ink/80">{card.description}</p>
        </div>
      </div>
    </div>
  )
}
