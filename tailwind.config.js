/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#f3f4f6",
          secondary: "#d1d5db",
          accent: "#e9d5ff",
          neutral: "#141824",
          base100: "#3E3145",
          info: "#779DE4",
          success: "#27B469",
          warning: "#F8C463",
          error: "#E72754",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

