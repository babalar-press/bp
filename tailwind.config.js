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
				'2xl': '10px 8px 8px 20px',
			}
		}
	}
};


