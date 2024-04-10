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
          noto: 'Noto Sans, sans-serif',
          poppins: 'Poppins, sans-serif',
          cinzel: 'Cinzel, serif', 
          dmsans: 'DM Sans, sans-serif',
          quicksand: 'Quicksand, sans-serif'

      },
      dropShadow: {
        hoverlight: '0 10px 8px rgba(255, 255, 255, 0.5)'
      },
      backgroundImage: {
        'aurora': "url('/public/pexels-stein-egil-liland-5740842.jpg')",
        'lightsBlurredBig': "url('/public/pexels-rovenimagescom-949587.jpg')",
        'lightsBlurredSmall': "url('/public/pexels-rovenimagescom-949587 (1).jpg')",
        'blueTexture': "url('/public/pexels-suzy-hazelwood-1629236.jpg')",
        'gradientBig': "url('/public/pexels-todd-trapani-2276928.jpg')",
        'gradientMiddle': "url('/public/pexels-todd-trapani-2276928 middle.jpg')",
        'gradientSmall': "url('/public/pexels-todd-trapani-2276928 small.jpg')",
        'paprad': "url('/public/pexels-aedrian-12178646.jpg')",
        'cafe': "url('/public/pexels-tim-gouw-240225.jpg')",
        'birdsEye': "url('/public/pexels-tolga-ahmetler-11123025.jpg')",
        'papradMakka': "url('/public/pexels-samuel-jean-butler-16885359.jpg')",
        'redLights': "url('/public/pexels-yelena-odintsova-10559023.jpg')",
        'monstera': "url('/public/pexels-golden-jojo-2409038.jpg')",
        'blurredLights': "url('/public/pexels-freestocksorg-457713.jpg')",
        'code': "url('/public/pexels-neo-2653362.jpg')"
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