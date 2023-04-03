/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html','./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': '#B1EF42',
        'secondary': '#2563eb',
        'body': '#1A191F',
        'react': '#61DAFB',
        'js': '#F7DF1E',
        'bootstrap': '#44097F',
        'react-router': '#252525',
        'redux': '#764ABC',
        'academlo': '#E84959',
        'tailwind': '#0B1120',
        'card': '#707070',
        'footer': '#0A090C99',
        'css': '#1572B6',
        'ligth': '#F8F4EA',
        'ligth-title': '#374151',
        'html': '#f06529',
        'git': '#F05032',
        'overlay': '#00000099',
        'nodejs': '#339933',
        'postgres': '#336791'
      },
    },
    fontFamily: {
      'plex': ['IBM Plex Mono', 'mono'],
      'title': ['Raleway'],
      'roboto': ['Roboto'],
    },
    letterSpacing:{
      logo: '.8rem',
      logoLg: '1.4rem'
    },
  },
  plugins: [],
}
