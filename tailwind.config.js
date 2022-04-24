module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/*.html"
  ],
  theme: {
    extend: {},
    colors: {
      "snap-white": "hsl(0, 0%, 98%)",
      "snap-gray": "hsl(0, 0%, 41%)",
      "snap-black": "hsl(0, 0%, 8%)",
    },
    fontFamily: {
      epilogue: ['Epilogue', 'sans-serif']
    }
  },
  plugins: [],
}
