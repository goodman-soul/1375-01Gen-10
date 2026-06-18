/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        lg: "2rem",
        xl: "4rem",
      },
      screens: {
        "2xl": "1440px",
      },
    },
    extend: {
      colors: {
        charcoal: {
          DEFAULT: "#1a1a1a",
          light: "#2a2a2a",
          dark: "#0d0d0d",
        },
        iron: {
          DEFAULT: "#3d3d3d",
          light: "#5a5a5a",
          dark: "#2d2d2d",
        },
        rust: {
          DEFAULT: "#8b4513",
          light: "#a0522d",
          dark: "#6b3410",
        },
        caution: {
          DEFAULT: "#c9a227",
          light: "#d4b33a",
          dark: "#a8861e",
        },
        slate_blue: {
          DEFAULT: "#6b7280",
          light: "#9ca3af",
          dark: "#4b5563",
        },
        lamp_white: {
          DEFAULT: "#f5f5dc",
          light: "#faf8e8",
          dark: "#e8e3c0",
        },
        danger: {
          DEFAULT: "#991b1b",
          light: "#b91c1c",
          dark: "#7f1d1d",
        },
        safe: {
          DEFAULT: "#166534",
          light: "#15803d",
          dark: "#14532d",
        },
      },
      fontFamily: {
        display: ['"Bebas Neue"', '"Oswald"', "Impact", "sans-serif"],
        body: ['"Source Serif Pro"', '"Noto Serif SC"', "Georgia", "serif"],
        mono: ['"JetBrains Mono"', '"Courier New"', "monospace"],
      },
      animation: {
        "typewriter": "typewriter 3s steps(40) 1s forwards",
        "blink": "blink 1s step-end infinite",
        "fade-in-left": "fadeInLeft 0.8s ease-out forwards",
        "fade-in-right": "fadeInRight 0.8s ease-out forwards",
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        "highlight-pulse": "highlightPulse 0.5s ease-in-out 3",
        "grain": "grain 8s steps(10) infinite",
        "progress": "progress linear",
      },
      keyframes: {
        typewriter: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        blink: {
          "0%, 100%": { borderColor: "transparent" },
          "50%": { borderColor: "#c9a227" },
        },
        fadeInLeft: {
          "0%": { opacity: "0", transform: "translateX(-40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeInRight: {
          "0%": { opacity: "0", transform: "translateX(40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        highlightPulse: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(139, 69, 19, 0)", backgroundColor: "transparent" },
          "50%": { boxShadow: "0 0 0 8px rgba(139, 69, 19, 0.4)", backgroundColor: "rgba(139, 69, 19, 0.15)" },
        },
        grain: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-5%, -10%)" },
          "20%": { transform: "translate(-15%, 5%)" },
          "30%": { transform: "translate(7%, -25%)" },
          "40%": { transform: "translate(-5%, 25%)" },
          "50%": { transform: "translate(-15%, 10%)" },
          "60%": { transform: "translate(15%, 0%)" },
          "70%": { transform: "translate(0%, 15%)" },
          "80%": { transform: "translate(3%, 35%)" },
          "90%": { transform: "translate(-10%, 10%)" },
        },
      },
    },
  },
  plugins: [],
};
