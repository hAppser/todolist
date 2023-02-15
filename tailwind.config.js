/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mavi': '#2D70FD',
        'title': '#11175E',
        'checkbox' : '#EEEEEE',
        'focused_checkbox': '#00D8A7',
        'done': '#8F98A8',
        'hovered_checkbox': '#2D70FD',
      },
      width: {
        'input': '600px',
        'body': '1000px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
