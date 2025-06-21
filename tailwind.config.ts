import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Inter"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
          "Playfair Display",
          "Great Vibes",
        ],
        anton: ['"Anton"'],
        robot: ['"Roboto"'],
        bueno: ['"Bueno"', "sans-serif"],
        specify: ['"SpecifyPERSONAL-NormBlack"', "sans-serif"],
        dumadi: ['"dumadi"'],
        great: ['"Great Vibes"'],
        monoton: ['"Monoton"'],
        ultra: ['"Ultra"'],
        notable: ['"Notable"'],
        public: ['"Public Sans"'],
      },
      boxShadow: {
        "3d": "2px 2px 0 #000, 4px 4px 0 #555, 6px 6px 0 #999",
      },
    },
  },
  plugins: [],
} satisfies Config;
