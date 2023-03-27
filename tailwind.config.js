/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        sm: ['14px', '20px'],
        base: ['18px', '21px'],
        xl: ['42px', '49px'],
      },
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif'],
        'raleway-xl': ['Raleway', 'sans-serif']
      },
    },
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
