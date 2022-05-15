module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        'yekb': ['yekanbakh','Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
// npx tailwindcss -i ./src/input.css -o ./src/assets/css/style.css --watch