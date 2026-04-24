import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        grotesk: ["var(--font-space-grotesk)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      colors: {
        brand: {
          bg: "#ffffff",
          bgAlt: "#f8fafc",
          text: "#0f172a",
          muted: "#64748b",
          primary: "#2563eb",
          primaryHover: "#1e40af",
          border: "#e2e8f0",
        },
      },
    },
  },
  plugins: [],
};

export default config;
