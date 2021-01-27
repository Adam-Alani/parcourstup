module.exports = {
  darkMode: 'class', // This can be 'media' if preferred.
  purge: [
    './src/**/*.svelte',
    './src/**/*.html',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        pblue: '#3C546C',
        pred: '#E12728',
        pgray: '#E3E3E3'
      },
    },
  },
  variants: {},
  plugins: [],
}
