/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      '7xl': '1366px',
      // => @media (min-width: 1366px) { ... }
      'tall': { 'raw': '(height: 768px)' },
      // => @media (min-height: 768px) { ... }

    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
