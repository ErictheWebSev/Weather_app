const config = {
  content: ['./index.html', './jsx/index.jsx', './js/index.js'],
  theme: {
    extend: {
      colors: {
        background: "#333C4B",
        card: "#202731",
        day: "#7f7f7f",
        grid: "#212832"
      },
      gradientColorStops: {
        'button-grad': {
          start: "#70EFF2",
          end: "#5461E6"
        }
      },
      screens: {
        sm: {max: '1023px'}
      }
    },
  },
  plugins: [],
}

try {
  tailwind.config = config;
} catch {
  module.exports = config;
}
