import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "twikkl-primary": "var(--primary-color)",
        "twikkl-secondary": "var(--secondary-color)",
        "twikkl-main": "var(--main-color)",
        "twikkl-tertiary": "var(--tertiary-color)",
        "twikkl-active": "var(--active)",
        "twikkl-inactive": "var(--inactive)",
      },
      color: {
        "twikkl-primary": "var(--primary-color)",
        "twikkl-secondary": "var(--secondary-color)",
        "twikkl-main": "var(--main-color)",
        "twikkl-tertiary": "var(--tertiary-color)",
        "twikkl-active": "var(--active)",
        "twikkl-inactive": "var(--inactive)",
      },
    },
  },
  plugins: [],
};
export default config;
