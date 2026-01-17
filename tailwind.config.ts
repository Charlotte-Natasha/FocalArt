import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  // In v4, most theme settings are now handled in the CSS @theme block.
  // You can leave this object empty if you use the globals.css setup above.
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;