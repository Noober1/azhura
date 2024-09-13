import { nextui } from "@nextui-org/react";
import tailwindTypograpy from "@tailwindcss/typography";
import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        impact: ["var(--font-impact)"],
        inpin: ["var(--font-inpin)"],
      },
    },
  },
  plugins: [
    nextui({
      prefix: "ui",
      themes: {
        light: {
          layout: {}, // light theme layout tokens
          colors: {}, // light theme colors
        },
        dark: {
          layout: {}, // dark theme layout tokens
          colors: {}, // dark theme colors
        },
      },
    }),
    tailwindTypograpy,
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".text-gradient": {
          background:
            "linear-gradient(0deg, hsl(var(--ui-foreground) / 0.25) 0%, hsl(var(--ui-foreground)) 100%)",
          color: "transparent",
          backgroundClip: "text",
        },
      });
    }),
  ],
};
export default config;
