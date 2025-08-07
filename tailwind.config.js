module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cement-green': '#8f9779',
        'light-cement': '#a8b197',
        'dark-cement': '#767d65',
        'gold': '#d4af37',
      },
      fontFamily: {
        'special': ['"Great Vibes"', 'cursive'],
        'sans': ['"Open Sans"', 'sans-serif'],
        'serif': ['"Playfair Display"', 'serif'],
        'script': ['"Dancing Script"', 'cursive'],
        'date': ['"Oswald"', 'sans-serif'],
        
      },
    },
  },
  plugins: [],
}