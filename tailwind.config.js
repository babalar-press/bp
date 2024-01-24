const typography = require('@tailwindcss/typography');

module.exports = {
	content: ['./hugo_stats.json'],
	plugins: [typography],
	extend: {
		colors: {
			'lemon-yellow': '#f1ff78',
			'lilac-grey': '#e9e6ed',
			'white': '#ffffff',
			'black': '#000000',
			'neon-green': '#00ff00',
		},
	}
};
