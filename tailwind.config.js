module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {

    fontFamily: {
      'kaushan':['Kaushan Script']
     },

    extend: {

      colors: {
        greenCustom: {
        
          // DEFAULT: '#00f260',
          // DEFAULT: '#004526',
          DEFAULT: '#009150',
        
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
