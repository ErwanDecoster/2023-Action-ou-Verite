module.exports = {
  mode: 'jit',
  content: [
    "./assets/**/*.css",
    "./components/*.{vue,js}",
    "./components/**/*.{vue,js}",
    "./pages/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.{vue,js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'chinese-black': '#121212',
        'fire-opal': '#F15555',
        'light-green': '#7FDF9A',
        'dark-charcoal': '#2E2E2E',
        'bright-gray': '#EEEEEE',
        'philippine-brown': '#591919',
        'deep-moss-green': '#315039',
        'granite-gray': '#666666',
      },
      dropShadow: {
        'fire-opal': '0 4px 8px rgba(241, 85, 85, 1)',
        'light-green': '0 4px 8px rgba(127, 223, 154, 1)',
        'bright-gray': '0 4px 8px rgba(238, 238, 238, 1)',
        'philippine-brown': '0 4px 8px rgba(89, 25, 25, 1)',
        'deep-moss-green': '0 4px 8px rgba(49, 80, 57, 1)',
        'granite-gray': '0 4px 8px rgba(102, 102, 102, 1)',
      },
      borderRadius: {
        '6xl' : '3.75rem',
      },
    },
  },
  plugins: [],
}
