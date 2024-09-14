/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        md: '2rem',
        lg: '4rem',
        xl: '5rem',
        'md': '6rem',
      }
    },
    extend: {
      fontFamily: {
        inter: "'Inter', sans-serif",
        raleway: "'Raleway', sans-serif"
      },
      colors: {
        "primary": "#4E47FF",
        "secondary": "#5B54FF",
        "bg-color": "#F5F8FF",
        "dark-1": "#252432",
        "dark-2": "#8987A1",
        "border-color": "#D6DDED",
      }
    },
  },
  plugins: [],
}

