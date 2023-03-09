const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      orange1: "#FBF5F4",
      orange2: "#FED0B3",
      orange3: "#F28D4F",
      ...colors,
    },
    extend: {},
  },
  plugins: [],
};
