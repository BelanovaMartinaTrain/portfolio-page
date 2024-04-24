const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
          dmsans: 'DM Sans, sans-serif',
      },
      dropShadow: {
        hoverlight: '0 10px 8px rgba(255, 255, 255, 0.5)'
      },
      screens: {
        xs: "475px",
        dunno: "1045px",
        xxs: "340px"
      },
      boxShadow: {
        'test': "inset 0 10px 10px rgba(0,0,0,.075),0 0 5px rgba(59, 130, 246,1)",
        'effect': "0 0 10px rgba(30,64,175,1)",
        'decor': "-200px 200px 1000px rgba(30,64,175,0.4)",
      },
      aspectRatio: {
        'img': '1.64 / 1'
      }

    },

  },
 
  // eslint-disable-next-line no-undef
  plugins: [ require('autoprefixer'),addVariablesForColors]
}

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}