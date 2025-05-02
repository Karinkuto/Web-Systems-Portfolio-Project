/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#6070FF",
        secondary: "#2230D2",
        accent: "#EBEBFF",
        disabled: "#C1C7D0",
        disabledText: "#5E6C84",
        pressed: "#2230D2",
        border: "#DFE1E6",
        cardTitle: "#091E42",
        cardBorderHover: "#A7AEFF",
        cardSubtitleDot: "#C1C7D0",
        cardSubtitleMain: "#344563",
        cardSubtitleRest: "#6B778C",
        cardContentText: "#344563",
        appBg: "#f4f5f7",
        heroIcon: "#505F79",
      },
      boxShadow: {
        button: "0px 8px 16px 0px #4053FC3D",
        white: "0px 8px 16px 0px rgba(255, 255, 255, 0.5)",
        card: "0px 48px 48px 0px #252F8914",
      },
    },
  },
  plugins: [],
};
