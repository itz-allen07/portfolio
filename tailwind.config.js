/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: '#D4AF37',
        darkGreen: '#0A1F1C',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: '#D4AF37',
            p: {
              color: '#D4AF37',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};