import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	  ],
	  
  theme: {
  	extend: {
		borderRadius: {
			lg: 'var(--radius)',
			md: 'calc(var(--radius) - 2px)',
			sm: 'calc(var(--radius) - 4px)'
		},
		keyframes: {
			shine: {
				'0%': { 'background-position': '100%' },
				'100%': { 'background-position': '-100%' },
			},
		},
		animation: {
			shine: 'shine 7s linear infinite',
		},
  		colors: {},
		fontFamily: {
			montserrat: ["var(--font-montserrat)", "sans-serif"],
			teko: ["var(--font-teko)", "sans-serif"],
		},
  	}
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
