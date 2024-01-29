/** @type {import('tailwindcss').Config} */
const typography = require('@tailwindcss/typography');

module.exports = {
	content: ['./hugo_stats.json'],
	plugins: [typography],
	theme: {
		extend: {
			colors: {
				'lemon-yellow': '#f1ff78',
     			'lilac-grey': '#e9e6ed',
        		'white': '#ffffff',
        		'black': '#000000',
        		'neon-green': '#00ff00',
			},
			boxShadow: {
				'lg': '0px 2px 3px 6px',
				'2xl': '10px 8px 8px 20px',
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
			  }
		}
	}
};


