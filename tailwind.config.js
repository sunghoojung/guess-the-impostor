/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'vt323': ['VT323', 'monospace'], // Add the VT323 font family
      },
    },
  },
  plugins: [
  ],
}

