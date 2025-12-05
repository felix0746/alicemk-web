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
        // 柔和的粉紅色/米色系 (符合 IG 風格)
        primary: {
          50: '#fef7f7', // 極淡粉紅
          100: '#fce8e8', // 淡粉紅
          200: '#f9d5d5', // 淺粉紅
          300: '#f4b8b8', // 中粉紅
          400: '#e89a9a', // 粉紅
          500: '#d97777', // 品牌主色 (深粉棕/紅棕)
          600: '#c55d5d', // 深粉紅
          700: '#a84a4a', // 更深粉紅
          800: '#8b3d3d', // 深紅棕
          900: '#6b2f2f', // 最深紅棕
        },
        secondary: '#F5F5F5', // 乾淨背景灰
        accent: {
          light: '#fef2f2', // 極淡粉米色
          DEFAULT: '#f9e8e8', // 淡粉米色
        },
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop')",
      },
    },
  },
  plugins: [],
};

export default config;

