/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "slide-in": "slideIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both",
      },
      keyframes: {
        slideIn: {
          "0%": {
            opacity: "0",
            transform: "translateX(50px) scale(0.8)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};
