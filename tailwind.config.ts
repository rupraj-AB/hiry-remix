import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          secondary: "#0E0CFF",
          surface: "#0500FF",
        },
        destructive: {
          100: "#FECDD3",
          500: "#E11D48",
          800:"#9F1339"
        },
        success: "#166434",
        neutral: {
          primary: "#E4E4E7",
          black: "#18181B",
          tertiary: "#71717A",
          secondary:"#52525B",
          defaultBlack: "#1E1E1E",
          soft:"#FAFAFA"
        },
        lime: {
          light: "#F1FFC7",
          primary: "#49670D",
          border: "#97D80B",
        },
        purple: {
          secondary: "#7730F7",
          soft: "#F4F2FF",
          crisp: "#C1B1FE",
          surface:"#976BFF"
        },
      },
      boxShadow: {
        "custom-sm": "0px 2px 4px -2px rgba(31, 41, 55, 0.06)",
        "custom-md": "0px 4px 8px -2px rgba(31, 41, 55, 0.1)",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
    },
  },
  plugins: [],
} satisfies Config;
