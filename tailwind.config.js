
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
     screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
     colors: {
        artisan: {
          midnight: '#000814',   // Deepest background, text
          ocean: '#001D3D',      // Section background, text
          steel: '#003566',      // Subheadings, borders, muted contrast
          gold: '#FFC300',       // CTA buttons, highlights
          sunbeam: '#FFD60A',    // Text highlights, hover, arrows
          pearl: '#f8fafc',   // Light text on dark background
          tmBlue: 'oklch(74.6% 0.16 232.661)'
        },
      },
  },
  plugins: [],
}