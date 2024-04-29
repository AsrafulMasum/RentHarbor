/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FD6C23",
        secondary: "#264F0B",
        tertiary: "#58813B",
        quaternary: "#AFDA8E",
        quinary: "#F7395A",
        senary: "#24355A",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
