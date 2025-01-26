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
		backgroundImage: {
			'gradient-text': 'linear-gradient(-45deg, #833AB4, #FD1D1D, #F56040)',
			'yellow-circle':'radial-gradient(circle at 0% 50%, rgba(156, 129, 65, 0.5) 0%, rgba(0, 0, 0, 0.7) 50%, #000000 55%)',
			'mob-yellow-circle':'radial-gradient(circle at 32% 42%, rgba(156, 129, 65, 0.5) 0%, rgba(0, 0, 0, 0.7) 50%, #000000 85%)'
		  },
  	}
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
