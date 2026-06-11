import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          cyan: "#00fff0",
          purple: "#a855f7"
        }
      }
    }
  },
  plugins: []
} satisfies Config;
