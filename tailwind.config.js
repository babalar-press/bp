/** @type {import('tailwindcss').Config} */
const typography = require('@tailwindcss/typography');

module.exports = {
	content: ['./hugo_stats.json'],
	plugins: 
		[
			typography,
			require('@pyncz/tailwind-mask-image'),
			require('tailwind-clip-path'),
		],
	
	theme: {
		
		clipPath: {
			mypolygon: "polygon(0 0, 25% 0, 20% 0, 0 calc(60% - 1rem))",
		},
		
		extend: {
			colors: {
				'lemon-yellow': '#f1ff78',
     			'lilac-grey': '#e9e6ed',
        		'white': '#ffffff',
        		'black': '#000000',
        		'neon-green': '#00ff00',
				'brown': '#180E0D',
				'lilac': '#CDCFDC',
				'olive': '#7A6F4E',
				'periwinkle': '#C0C8D8',
			},
			boxShadow: {
				'lg': '0px 2px 3px 6px',
				'2xl': '10px 8px 8px 20px',
				'4xl': 'inset 0 0 90px 20px',
			},
			fontFamily: {
				'serif': ['Lora'],
			},
			fontSize: {
				sm: '0.8rem',
				base: '1rem',
				xl: '1.25rem',
				'2xl': '1.563rem',
				'3xl': '1.953rem',
				'4xl': '2.441rem',
				'5xl': '3.052rem',
			},
		}
	}
};


