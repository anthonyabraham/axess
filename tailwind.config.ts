import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    // Hero / section gradients
    'bg-[radial-gradient(circle_at_20%_30%,rgba(42,168,255,0.25),transparent_60%)]',
    'bg-[radial-gradient(circle_at_80%_70%,rgba(0,210,143,0.25),transparent_60%)]',
    'bg-[linear-gradient(120deg,rgba(42,168,255,0.15),transparent_40%)]',

    // Ensure our darker panels never get purged
    'bg-slate-900',
    'border-slate-800',
    'border-slate-700',
  ],
};

export default config;
