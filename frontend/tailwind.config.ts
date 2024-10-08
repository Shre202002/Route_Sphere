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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(0deg, #0940A6 0%, #5A7CE8 31%, #5A7CE8 54%, #B2B8E5 77%, #3C5EA7 100%)",
      },
      
    },
  },
  plugins: [],
};
export default config;
