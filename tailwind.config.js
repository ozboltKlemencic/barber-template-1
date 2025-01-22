/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",  // Vse datoteke v mapi pages
    "./components/**/*.{js,ts,jsx,tsx}",  // Vse datoteke v mapi components
    "./app/**/*.{js,ts,jsx,tsx}",  // Vse datoteke v mapi app (če uporabljate Next.js 13+)
  ],
  theme: {
    extend: {
      keyframes: {
			shine: {
				'0%': { 'background-position': '100%' },
				'100%': { 'background-position': '-100%' },
			},
		},
		animation: {
			shine: 'shine 5s linear infinite',
		},
      fontFamily: {
        montserrat: ["var(--font-montserrat)", "sans-serif"],
        teko: ["var(--font-teko)", "sans-serif"],
		},
    },
  },
  plugins: [],
}

