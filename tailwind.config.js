/** @type {import('tailwindcss').Config} */
const { colors: defaultColors } = require("tailwindcss/defaultTheme");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {},
    screens: {
      xsm: "446px",
      xxsm: "370px",
      // => @media (min-width: 640px) { ... }
      sm: "640px",
      md: "768px",
      mds: "888px",
      mdm: "976px",
      mdmp: "903px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      lgp: "1080px",
      // => @media (min-width: 1024px) { ... }
      xls: "1228px",
      xl: "1280px",
      xxl: "1337px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [require("flowbite/plugin")],
};
