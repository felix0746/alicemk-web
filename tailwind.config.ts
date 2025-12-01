import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // 柔和的膚色/大地色系
        primary: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          500: '#b08980', // 品牌主色 (深粉棕)
          900: '#5e433e',
        },
        secondary: '#F5F5F5', // 乾淨背景灰
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop')",
      },
    },
  },
  plugins: [],
};

export default config;

