import { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        dm: ["DM Sans", "sans-serif"],
      },
      colors: {
        primary: "#004B3D",
        secondary: "#F6EFE8",
        tertiary: "#7D8F8D",
      },
    },
  },
  plugins: [],
} satisfies Config;
