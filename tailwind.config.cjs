/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'serif': ['Source Serif Pro', 'sans']
      },
      colors: {
        accent: '#5236DC'
      },
      screens: {
        'md': '720px'
      },
      fontSize: {
        'xs': '11px'
      },
      transitionTimingFunction: {
        'slide': 'cubic-bezier(0.5, 0.45, 0.42, 0.99)',
       
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
