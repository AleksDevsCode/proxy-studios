/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'green': '#57F287',
        'red': '#ED4245',
        'yellow': '#FEE75C',
        'blue': '#00b7ff',
        'warning': '#de8818',
        'bg': '#0c0c0c',
        'nr': '#050505',
      }
    },
  },
  plugins: [],
}
