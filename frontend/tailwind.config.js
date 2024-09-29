// tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-horizontal': '10px 0px 5px rgba(0, 0, 0, 0.1)',  // Horizontal shadow (x-offset)
        'custom-vertical': '0px 10px 5px rgba(0, 0, 0, 0.1)',    // Vertical shadow (y-offset)
        'custom-both': '10px 10px 5px rgba(0, 0, 0, 0.2)',       // Horizontal and vertical shadow
      },
    },
  },
  plugins: [],
}
