import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep Fjord Master Brand Palette
        fjord: {
          DEFAULT: "#102B3A", // Deep Fjord anchor
          hover: "#0D222E",
          surface: "#132630", // Elevated dark surface
          border: "#203A48",  // Dark surface border
          canvas: "#0A1820",  // Dark theme background
          deep: "#050C10",
        },
        teal: {
          DEFAULT: "#176B68", // Ocean Teal primary interactive
          hover: "#115250",
          light: "#208A86",
          dark: "#0E4341",
          luminous: "#38B2A3", // Dark theme primary accent
          mint: "#72C4B4",     // Dark theme secondary glow
        },
        porcelain: {
          DEFAULT: "#F7F5F0", // Warm Porcelain light canvas
          warm: "#F4F1EA",
        },
        seaglass: {
          DEFAULT: "#DCEFEA", // Sea Glass luminous badge / panel tint
          light: "#EBF6F3",
          border: "#BFDFD6",
          dark: "#1A3845",
        },
        coral: {
          DEFAULT: "#E26D50", // Warm Coral practice accent
          button: "#D15436",  // Calibrated high-contrast button
          hover: "#B84328",
          dark: "#F08C73",
          glow: "#F4A896",
        },
        sand: {
          DEFAULT: "#D4A338", // Golden Sand milestone accent (AA calibrated)
          light: "#FDF4DC",
          border: "#F3DD9C",
          dark: "#E9C46A",
        },
        ink: {
          DEFAULT: "#122129", // High-contrast primary body text
          soft: "#1D323E",
        },

        // Legacy Semantic Aliases (Mapped to Deep Fjord for 100% Backward Compatibility)
        ocean: {
          DEFAULT: "#176B68", // Maps to Ocean Teal
          hover: "#115250",   // Maps to Teal Hover
          light: "#208A86",
          dark: "#0E4341",
        },
        midnight: {
          DEFAULT: "#102B3A", // Maps to Deep Fjord
          surface: "#132630", // Maps to Fjord Surface
          deep: "#0A1820",    // Maps to Dark Canvas
        },
        mist: {
          DEFAULT: "#DCEFEA", // Maps to Sea Glass
          subtle: "#EBF6F3",
          dark: "#18303C",
        },
        softblue: {
          DEFAULT: "#38B2A3", // Maps to Luminous Teal
          hover: "#72C4B4",   // Maps to Mint Glow
          dark: "#203A48",    // Maps to Fjord Border
        },
        terracotta: {
          DEFAULT: "#E26D50", // Maps to Warm Coral
          glow: "#F4A896",
        },
        stone: {
          DEFAULT: "#4C5E67", // Maps to Deep Fjord Stone
          muted: "#667C87",
        },

        // Brand scale mapped to Deep Fjord
        brand: {
          50: "#EBF6F3",
          100: "#DCEFEA", // Sea Glass
          200: "#72C4B4", // Mint Glow
          300: "#38B2A3", // Luminous Teal (Dark accent)
          400: "#208A86",
          500: "#176B68", // Ocean Teal
          600: "#176B68", // Primary action
          700: "#115250", // Teal hover
          800: "#102B3A", // Deep Fjord
          900: "#132630", // Surface
          950: "#0A1820", // Deep Canvas
        },
        cerulean: {
          50: "#EBF6F3",
          100: "#DCEFEA",
          200: "#72C4B4",
          300: "#38B2A3",
          400: "#208A86",
          500: "#176B68",
          600: "#176B68",
          700: "#102B3A",
          800: "#132630",
          900: "#0A1820",
        },
        sage: {
          50: "#ECFDF5",
          100: "#D1FAE5",
          200: "#A7F3D0",
          500: "#10B981",
          600: "#059669",
          700: "#047857",
        },
      },
      fontFamily: {
        heading: ["var(--font-manrope)", "sans-serif"],
        sans: ["var(--font-dm-sans)", "sans-serif"],
      },
      borderRadius: {
        card: "16px",
        panel: "24px",
        container: "32px",
      },
      boxShadow: {
        subtle: "0 1px 3px 0 rgba(16, 43, 58, 0.04), 0 1px 2px 0 rgba(16, 43, 58, 0.02)",
        card: "0 4px 16px -2px rgba(16, 43, 58, 0.06), 0 2px 6px -1px rgba(16, 43, 58, 0.03)",
        elevated: "0 16px 36px -4px rgba(16, 43, 58, 0.10), 0 6px 12px -2px rgba(16, 43, 58, 0.04)",
      },
    },
  },
  plugins: [],
};

export default config;
