import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue,svelte}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: "rgb(var(--color-bg) / <alpha-value>)",
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        ink: "rgb(var(--color-ink) / <alpha-value>)",
        muted: "rgb(var(--color-muted) / <alpha-value>)",
        border: "rgb(var(--color-border) / <alpha-value>)",
        accent: "rgb(var(--color-accent) / <alpha-value>)"
      },
      fontFamily: {
        sans: ["Source Sans 3", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["Source Serif 4", "Iowan Old Style", "Georgia", "serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"]
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            maxWidth: "none",
            color: theme("colors.ink"),
            fontSize: "1.07rem",
            lineHeight: "1.7",
            h1: {
              fontFamily: theme("fontFamily.sans").join(","),
              color: theme("colors.ink"),
              fontWeight: "800",
              letterSpacing: "-0.02em",
              lineHeight: "1.15",
              marginBottom: "1rem",
              borderBottom: `1px solid ${theme("colors.border")}`,
              paddingBottom: "0.45rem",
            },
            'h2, h3, h4': {
              fontFamily: theme("fontFamily.sans").join(","),
              color: theme("colors.ink"),
              letterSpacing: "-0.015em",
              scrollMarginTop: "6rem",
            },
            h2: {
              fontWeight: "800",
              marginTop: "2.4em",
              marginBottom: "0.8em",
              borderBottom: `1px solid ${theme("colors.border")}`,
              paddingBottom: "0.35rem",
            },
            h3: {
              fontWeight: "700",
              marginTop: "1.8em",
              marginBottom: "0.65em",
            },
            p: {
              marginTop: "1.05em",
              marginBottom: "1.05em",
            },
            lead: {
              color: theme("colors.muted"),
            },
            a: {
              color: theme("colors.accent"),
              textDecoration: "none",
              textUnderlineOffset: "0.2em",
              '&:hover': {
                textDecoration: "underline",
              },
            },
            strong: {
              color: theme("colors.ink"),
              fontWeight: "650",
            },
            blockquote: {
              borderLeftColor: theme("colors.border"),
              color: theme("colors.muted"),
              fontStyle: "normal",
              quotes: "none",
              paddingLeft: "1rem",
            },
            table: {
              width: "100%",
              fontSize: "1rem",
            },
            thead: {
              borderBottom: `1px solid ${theme("colors.border")}`,
            },
            'thead th': {
              color: theme("colors.ink"),
              fontWeight: "700",
              backgroundColor: "rgb(var(--color-surface))",
              border: `1px solid ${theme("colors.border")}`,
              padding: "0.55rem 0.75rem",
            },
            'tbody td': {
              border: `1px solid ${theme("colors.border")}`,
              padding: "0.55rem 0.75rem",
            },
            hr: {
              borderColor: theme("colors.border"),
              marginTop: "2.2em",
              marginBottom: "2.2em",
            },
            ul: {
              paddingLeft: "1.2rem",
            },
            ol: {
              paddingLeft: "1.35rem",
            },
            'ul > li::marker, ol > li::marker': {
              color: theme("colors.accent"),
            },
            code: {
              fontFamily: theme("fontFamily.mono").join(","),
              fontWeight: "500",
              fontSize: "0.88em",
              backgroundColor: "rgb(var(--color-border) / 0.25)",
              padding: "0.14rem 0.32rem",
              borderRadius: "0.35rem",
            },
            'code::before, code::after': {
              content: "\"\"",
            },
            pre: {
              backgroundColor: "rgb(var(--color-surface))",
              border: "1px solid rgb(var(--color-border) / 0.9)",
              borderRadius: "0.5rem",
            },
            'pre code': {
              fontFamily: theme("fontFamily.mono").join(","),
              fontSize: "0.875rem",
              backgroundColor: "transparent",
              padding: "0",
            },
          },
        },
      }),
    },
  },
  plugins: [typography],
};
