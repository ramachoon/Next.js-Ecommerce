/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        smoke: '#f3f3f3',
      },
      colors: {
        primary: '#2266cc',
        primaryLight: '#3478dd',
        secondary: '#d26e4b',
        secondaryLight: '#d98568',
      },
      borderColor: {
        default: '#e8e8e8',
        darken: '#d1d1d1',
      },
    },
  },
  plugins: [],
}
