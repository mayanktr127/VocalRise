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
        // Atlantic Calm Master Brand Palette
        ocean: {
          DEFAULT: "#315F78",
          hover: "#264A5E",
          light: "#417A99",
          dark: "#1E3B4B",
        },
        midnight: {
          DEFAULT: "#243746",
          surface: "#1A2833",
          deep: "#111D25",
        },
        mist: {
          DEFAULT: "#E7EFF2",
          subtle: "#F0F5F7",
          dark: "#15232C",
        },
        porcelain: {
          DEFAULT: "#F7F9F8",
        },
        softblue: {
          DEFAULT: "#A9C4D1",
          hover: "#92B3C3",
          dark: "#304653",
        },
        terracotta: {
          DEFAULT: "#C9826D",
          glow: "#D69A84",
        },
        stone: {
          DEFAULT: "#4B555A",
          muted: "#6B7C85",
        },

        // Semantic brand tokens mapped to Atlantic Calm for backward compatibility
        brand: {
          50: "#F0F5F7",
          100: "#E7EFF2", // Mist
          200: "#A9C4D1", // Soft Blue
          300: "#83B5CC", // Dark mode brand accent
          400: "#417A99",
          500: "#386B86",
          600: "#315F78", // Ocean Blue (primary action)
          700: "#264A5E", // Ocean hover
          800: "#243746", // Midnight Slate
          900: "#1A2833",
          950: "#111D25", // Deep Atlantic Night canvas
        },
        cerulean: {
          50: "#F0F5F7",
          100: "#E7EFF2",
          200: "#A9C4D1",
          300: "#83B5CC",
          400: "#417A99",
          500: "#386B86",
          600: "#315F78",
          700: "#243746",
          800: "#1A2833",
          900: "#111D25",
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
        subtle: "0 1px 3px 0 rgba(36, 55, 70, 0.04), 0 1px 2px 0 rgba(36, 55, 70, 0.02)",
        card: "0 4px 16px -2px rgba(36, 55, 70, 0.06), 0 2px 6px -1px rgba(36, 55, 70, 0.03)",
        elevated: "0 16px 36px -4px rgba(36, 55, 70, 0.08), 0 6px 12px -2px rgba(36, 55, 70, 0.04)",
      },
    },
  },
  plugins: [],
};

export default config;
