"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { IconPhoto, IconMaximize } from "@tabler/icons-react"

import { cn } from "@/lib/utils"

interface ShowcaseImageProps {
  src: string
  alt: string
  className?: string
  aspectClassName?: string
}

const VIDEO_EXTENSIONS = [".webm", ".mp4", ".mov"]

function isVideo(src: string) {
  const lower = src.toLowerCase()
  return VIDEO_EXTENSIONS.some((ext) => lower.endsWith(ext))
}

export function ShowcaseImage({
  src,
  alt,
  className,
  aspectClassName = "aspect-video",
}: ShowcaseImageProps) {
  const [failed, setFailed] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [visible, setVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (!isVideo(src)) return
    const el = containerRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { rootMargin: "200px" }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [src])

  function handleFullscreen() {
    const el = videoRef.current
    if (!el) return
    if (el.requestFullscreen) el.requestFullscreen()
  }

  if (failed) {
    return (
      <div
        className={cn(
          "flex flex-col items-center justify-center gap-2 bg-muted text-muted-foreground/40",
          aspectClassName,
          className
        )}
      >
        <IconPhoto className="size-10" stroke={1.5} />
        <span className="text-xs text-muted-foreground">{src.split("/").pop()}</span>
      </div>
    )
  }

  if (isVideo(src)) {
    return (
      <div
        ref={containerRef}
        className={cn("relative overflow-hidden bg-muted", aspectClassName, className)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {visible && (
          <video
            ref={videoRef}
            src={src}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover object-top"
            onError={() => setFailed(true)}
          />
        )}
        <button
          onClick={handleFullscreen}
          className={cn(
            "absolute bottom-3 right-3 z-10 flex items-center gap-1.5 rounded-lg bg-black/60 px-3 py-1.5 text-[12px] font-medium text-white backdrop-blur-sm transition-all duration-200",
            hovered && visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1 pointer-events-none"
          )}
        >
          <IconMaximize className="size-3.5" stroke={2} />
          Pantalla completa
        </button>
      </div>
    )
  }

  return (
    <div className={cn("relative overflow-hidden bg-muted", aspectClassName, className)}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover object-top"
        onError={() => setFailed(true)}
      />
    </div>
  )
}
