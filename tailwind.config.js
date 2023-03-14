/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#1E1E1E',
          secondary: '#282828',
          accent: '#404040',
          neutral: '#6F6F6F',
          'base-100': '#1E1E1E',
          info: '#175DDC',
          success: '#17DC72',
          warning: '#DCBC17',
          error: '#DC1717',
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
};
