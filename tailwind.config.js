/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Use 'class' to manually toggle dark mode
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
  
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/common/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        mainBg: "#F7F8FC",
        red: "#ed0707",
        green: "#1ECB91",
        warning: "#FFBD59",
        //blue
        lightBlueDull: "#5D7AC5",
        lightBlueBright: "#3F5EB1",
        darkBlue: "#243665",
        skyBlue: "#E9ECF7", // majorly used in filter tags and search bars
        steelBlue: "#2e77ae",
        iceBlue: "#E0EAF5",
        // common
        white: "#ffffff",
        black: "#0B0B0B",
        //gray
        outlineGray: "#E0E0E0",
        outlineDarkGray: "#CCCCCC",
        grayText: "#A3A3A3",
        grayShapes: "#C4C4C4",
        lightGray: "#F0F0F0",
        darkGray: "#5A5A5A",
      },
      transformStyle: {
        'preserve-3d': 'preserve-3d',
      },
      perspective: {
        '1000': '1000px',
      },
      translate: {
        'z-20': '20px',
      },
      animation: {
        "pulse-1s-once": "pulse 1s ease-in-out 1",
        spin: "spin 1s linear infinite",
        fall: "fall 1.5s ease-out forwards",
      },
      keyframes: {
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
          fall: {
            "0%": { transform: "translateY(-100vh)", opacity: "0" },
            "80%": { transform: "translateY(20px)", opacity: "1" },
            "90%": { transform: "translateY(-10px)" },
            "100%": { transform: "translateY(0)" },
          },
        },
      },
    },
  },
  plugins: [],
};
