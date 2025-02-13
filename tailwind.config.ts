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
  				'0%': {
  					'background-position': '100%'
  				},
  				'100%': {
  					'background-position': '-100%'
  				}
  			},
  			marquee: {
				"0%": { transform: "translateX(0%)" },
				"100%": { transform: "translateX(-100%)" },
			},
			"marquee-vertical": {
			"0%": { transform: "translateY(0%)" },
			"100%": { transform: "translateY(-100%)" },
			},
  		},
		  
  		animation: {
  			shine: 'shine 4s linear infinite',
  			marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
  		},

  		colors: {
			primary: 'var(--primary)',
			'primary-light': 'var(--primary-light)',
			'primary-dark': 'var(--primary-dark)',
	
			'primary-transparent': 'var(--primary-transparent)',
			'primary-light-transparent': 'var(--primary-light-transparent)',
			'primary-dark-transparent': 'var(--primary-dark-transparent)',
	
			header: 'var(--header)',
			subheader: 'var(--subheader)',
			paragraph: 'var(--paragrap)',
			'dark-text':'var(--dark-text)',

			'light-bg': 'var(--light-bg)',
			'dark-bg': 'var(--dark-bg)',
		},

  		fontFamily: {
  			montserrat: [
  				'var(--font-montserrat)',
  				'sans-serif'
  			],
  			teko: [
  				'var(--font-teko)',
  				'sans-serif'
  			]
  		},
  		backgroundImage: {
  			'gradient-text': 'linear-gradient(-45deg, #833AB4, #FD1D1D, #F56040)',
  			'yellow-circle': 'radial-gradient(circle at 0% 50%, rgba(156, 129, 65, 0.5) 0%, rgba(0, 0, 0, 0.7) 50%, #000000 55%)',
  			'mob-yellow-circle': 'radial-gradient(circle at 32% 42%, rgba(156, 129, 65, 0.5) 0%, rgba(0, 0, 0, 0.7) 50%, #000000 85%)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
