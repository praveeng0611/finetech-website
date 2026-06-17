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
        navy: {
          50: '#eef2f7',
          100: '#d6dfeb',
          400: '#3a5a82',
          600: '#1B3A63',
          700: '#163358',
          800: '#10243F',
          900: '#0E2440',
        },
        steel: {
          300: '#C9D4E2',
          400: '#9AAAC0',
          500: '#6B7C93',
          600: '#5B6B7C',
        },
        accent: {
          500: '#E8541F',
          600: '#D8481A',
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
