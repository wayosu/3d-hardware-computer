/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {
        fontFamily: {
            title: ['Yeseva One', 'serif'],
            body: ['Josefin Sans', 'sans-serif'],
        }
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}
