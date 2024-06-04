/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      grayscale: {
        50: '50%',
        60: '60%',
      },
      blur:{
        xs: '1px',
      }
    }
  },
  plugins: [],
}

