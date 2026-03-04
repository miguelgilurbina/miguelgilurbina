/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        /* ── Named palette tokens ── */
        cream: {
          DEFAULT: "#F5F0E8",
          dark: "#EDE8DC",
        },
        "warm-black": "#2D2A24",
        "warm-gray": "#78716C",
        "warm-border": "#D4CFC6",
        indigo: {
          primary: "#4338CA",
          mid: "#6366F1",
          light: "#E0E7FF",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        "indigo-sm":  "0 2px 12px hsl(245 58% 51% / 0.15)",
        "indigo-md":  "0 4px 24px hsl(245 58% 51% / 0.2)",
        "indigo-lg":  "0 8px 40px hsl(245 58% 51% / 0.25)",
        "warm-sm":    "0 2px 12px hsl(41 11% 16% / 0.08)",
        "warm-md":    "0 4px 24px hsl(41 11% 16% / 0.12)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to:   { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to:   { height: "0" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%":       { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":       { transform: "translateY(-8px)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        "subtle-bounce": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%":       { transform: "translateY(-4px)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition:  "200% center" },
        },
      },
      animation: {
        "accordion-down":  "accordion-down 0.2s ease-out",
        "accordion-up":    "accordion-up 0.2s ease-out",
        "gradient-shift":  "gradient-shift 6s ease infinite",
        float:             "float 4s ease-in-out infinite",
        "fade-up":         "fade-up 0.5s ease-out",
        "subtle-bounce":   "subtle-bounce 2s ease-in-out infinite",
        shimmer:           "shimmer 2s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
