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
        xs: "475px"
      },
      boxShadow: {
        'test': "inset 0 10px 10px rgba(0,0,0,.075),0 0 5px rgba(59, 130, 246,1)",
        'effect': "0 0 10px rgba(30,64,175,1)"
      },
      aspectRatio: {
        'img': '1.64 / 1'
      }

    },

  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#14532d",
          "secondary": "#15803d",
          "accent": "#059669",
          "neutral": "#292524",
          "base-100": "#000001",
          "info": "#0091ad",
          "success": "#16a34a",
          "warning": "#eab308",
          "error": "#b91c1c"
        },
      },
    ],
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui"), addVariablesForColors]
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