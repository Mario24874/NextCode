/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4F46E5', // Indigo
        },
        secondary: {
          DEFAULT: '#1E293B', // Slate
        },
        accent: {
          DEFAULT: '#3B82F6', // Blue
        }
      }
    },
  },
  plugins: [],
};