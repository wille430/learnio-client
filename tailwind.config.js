module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        purple: {
          light: '#B09DF4',
          DEFAULT: '#7F5FF4',
          dark: '#663CAA'
        },
        blue: {
          light: '#4785EF',
          DEFAULT: '#82E7E7',
          dark: '#3A2A95'
        },
        orange: {
          DEFAULT: '#FFBA6F'
        },
        green: {
          DEFAULT: '#B4E8B8'
        },
        red: {
          DEFAULT: '#DA4142'
        },
        'bg': '#F8F8F8'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
