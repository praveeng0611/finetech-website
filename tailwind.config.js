/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        /* Finetech brand navy */
        navy: {
          50:  '#e8edf8',
          100: '#c2d2ee',
          200: '#96b1e0',
          300: '#6a90d1',
          400: '#3d6fc2',
          500: '#2257a8',
          600: '#0d2259',  /* primary dark navy — logo "Fine" colour */
          700: '#0a1a47',
          800: '#071335',
          900: '#040d24',
        },
        /* Finetech brand blue */
        brand: {
          50:  '#e3f0fb',
          100: '#b9d8f5',
          200: '#8cbfee',
          300: '#5fa6e7',
          400: '#3d90df',
          500: '#2080cc',  /* bright blue — logo "tech" / arc colour */
          600: '#1a6db5',
          700: '#14579d',
          800: '#0e4186',
          900: '#072b6e',
        },
        steel: {
          300: '#C9D4E2',
          400: '#9AAAC0',
          500: '#6B7C93',
          600: '#5B6B7C',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Arial', 'Helvetica', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '90rem',
      },
    },
  },
  plugins: [],
};
