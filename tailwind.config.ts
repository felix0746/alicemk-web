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
        // 柔和的粉紅色/米色系 (符合 IG 風格 - 更女性化精緻)
        primary: {
          50: '#fef2f2', // 極淡粉紅 (背景)
          100: '#fce7e7', // 淡粉紅
          200: '#fad5d5', // 淺粉紅
          300: '#f5b8b8', // 中粉紅
          400: '#ed9a9a', // 粉紅
          500: '#e08585', // 品牌主色 (柔和的粉紅)
          600: '#d16b6b', // 深粉紅
          700: '#b85454', // 更深粉紅
          800: '#9a4545', // 深紅棕
          900: '#7a3535', // 最深紅棕
        },
        rose: {
          50: '#fff1f2', // 玫瑰粉背景
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#f43f5e',
        },
        beige: {
          50: '#faf8f6', // 米色背景
          100: '#f5f1ed',
          200: '#ebe5de',
          300: '#d4c4b8',
        },
        secondary: '#faf8f6', // 米色背景
        accent: {
          light: '#fff1f2', // 極淡粉米色
          DEFAULT: '#fce7e7', // 淡粉米色
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

