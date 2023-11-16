/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
          jost: 'Jost, sans-serif',
          orpheus: 'orpheuspro, serif',
          breakers: 'breakers, sans-serif',
          poppins: 'Poppins, sans-serif'
      },
      dropShadow: {
        hoverlight: '0 10px 8px rgba(255, 255, 255, 0.5)'
      }
    },
  },
  plugins: [],
}