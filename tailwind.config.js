/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        mainTextColor: "#FF2DF1",
        secondaryTextColor: "#EC5228",
      },
      screens: {
        mobile: "450px",
        tablet: "640px",
        laptop: "1024px",
      },
    },
  },
  plugins: [daisyui],
};
