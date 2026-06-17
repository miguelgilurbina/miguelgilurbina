"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
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
      {/* Tab bar */}
      <div className="mb-6 flex gap-2 overflow-x-auto pb-1">
        {cards.map((c, i) => (
          <button
            key={c.tag}
            onClick={() => setActive(i)}
            className={cn(
              "shrink-0 rounded-full border px-4 py-1.5 text-[13px] font-medium transition-colors",
              i === active
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-muted-foreground hover:text-foreground"
            )}
          >
            {c.tag}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="grid items-center gap-8 md:grid-cols-2">
        <div className="overflow-hidden rounded-xl border shadow-xl">
          <ShowcaseImage src={card.image.src} alt={card.image.alt} aspectClassName="aspect-video" />
        </div>
        <div>
          <span className="mb-3 inline-block rounded-md bg-primary/10 px-2.5 py-1 text-[11px] font-semibold tracking-[0.08em] text-primary uppercase">
            {card.tag}
          </span>
          <h3 className="mb-3 text-[1.25rem] font-bold tracking-tight">{card.title}</h3>
          <p className="text-[0.9375rem] leading-7 text-muted-foreground">{card.description}</p>
        </div>
      </div>
    </div>
  )
}
