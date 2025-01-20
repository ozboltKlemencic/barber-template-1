/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",  // Vse datoteke v mapi pages
    "./components/**/*.{js,ts,jsx,tsx}",  // Vse datoteke v mapi components
    "./app/**/*.{js,ts,jsx,tsx}",  // Vse datoteke v mapi app (če uporabljate Next.js 13+)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

