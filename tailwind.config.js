/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'light-gray' : '#959597',
        'dark-gray' : '#1C1C1E',
        'default-gray' : '#F2F2F2'
      }
    },
  },
  plugins: [],
};
