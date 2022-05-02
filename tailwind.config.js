module.exports = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './interfaces/**/*.ts',
    './data/**/*.ts',
  ],
  theme: {
    extend: {
      colors: {
        /* client theme colors custom */
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
