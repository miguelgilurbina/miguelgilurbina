import { Variants } from "framer-motion";

// ── Fade variants ──────────────────────────────────────────
export const fadeIn: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

// ── Slide + fade variants ──────────────────────────────────
export const slideUp: Variants = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export const slideDown: Variants = {
  hidden:  { opacity: 0, y: -24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export const slideInLeft: Variants = {
  hidden:  { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export const slideInRight: Variants = {
  hidden:  { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

// ── Scale variant ──────────────────────────────────────────
export const scaleIn: Variants = {
  hidden:  { opacity: 0, scale: 0.88 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

// ── Stagger containers ─────────────────────────────────────
export const staggerContainer: Variants = {
  hidden:  {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const staggerContainerFast: Variants = {
  hidden:  {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.05,
    },
  },
};

// ── Stagger item (use inside staggerContainer) ─────────────
export const staggerItem: Variants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

// ── Hover / tap micro-interactions ────────────────────────
export const hoverScale = {
  whileHover: { scale: 1.04, transition: { duration: 0.2 } },
  whileTap:   { scale: 0.97 },
};

export const hoverLift = {
  whileHover: { y: -3, transition: { duration: 0.2 } },
  whileTap:   { y: 0 },
};

export const hoverGlow = {
  whileHover: {
    boxShadow: "0 8px 30px hsl(245 58% 51% / 0.2)",
    transition: { duration: 0.2 },
  },
};

// ── Badge / chip entrance ──────────────────────────────────
export const badgeEntrance: Variants = {
  hidden:  { opacity: 0, scale: 0.75, y: 8 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
};

// ── Timeline item ──────────────────────────────────────────
export const timelineItem: Variants = {
  hidden:  { opacity: 0, x: -28 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

// ── Text reveal (heading) ──────────────────────────────────
export const textReveal: Variants = {
  hidden:  { opacity: 0, y: 16, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

// ── Utility: viewport options for useInView ────────────────
export const viewportOnce = { once: true, margin: "-80px" };
