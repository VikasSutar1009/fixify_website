/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fixify: {
          blue: "#3B82F6",
          dark: "#0F172A",
          steel: "#455A69",
          accent: "#FACC15",
        },
      },
      animation: {
        flicker: "flicker 3s linear infinite",
        shine: "shine 2s infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        flicker: {
          "0%, 20%, 22%, 63%, 65%, 70%, 100%": { opacity: "1" },
          "21%, 64%, 69%": { opacity: "0.4" },
        },
        shine: {
          "0%": { left: "-100%" },
          "100%": { left: "100%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      backgroundImage: {
        "brush-stroke": "url('/assets/brush-reveal.png')",
      },
    },
  },
  plugins: [],
};