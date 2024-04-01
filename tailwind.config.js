/** @type {import('tailwindcss').Config} */
const typography = require('@tailwindcss/typography');
const flattenColors = require('tailwindcss/src/util/flattenColorPalette');

module.exports = {
	content: ['./hugo_stats.json'],
	plugins: 

			[
			typography,
			require('@pyncz/tailwind-mask-image'),
			require('tailwind-clip-path'),
			require("@designbycode/tailwindcss-text-stroke"),
		
			function ({ matchUtilities, theme }) {
		  matchUtilities(
			{
			  'text-shadow': (value) => ({
				'--text-shadow-color': value,
			  }),
			},
			{
			  values: flattenColors(theme('colors', {})),
			  type: 'color',
			}
		  )
	
		  matchUtilities(
			{
			  'text-shadow': (value) => {
				const shadows = [
				  `calc(var(--text-shadow-size) * 1) calc(var(--text-shadow-size) * 1) 0 var(--text-shadow-color, hotpink)`,
				  `calc(var(--text-shadow-size) * -1) calc(var(--text-shadow-size) * -1) 0 var(--text-shadow-color, hotpink)`,
				  `calc(var(--text-shadow-size) * 1) calc(var(--text-shadow-size) * -1) 0 var(--text-shadow-color, hotpink)`,
				  `calc(var(--text-shadow-size) * -1) calc(var(--text-shadow-size) * 1) 0 var(--text-shadow-color, hotpink)`,
				  `calc(var(--text-shadow-size) * 1) 0 0 var(--text-shadow-color, hotpink)`,
				  `calc(var(--text-shadow-size) * -1) 0 0 var(--text-shadow-color, hotpink)`,
				  `0 calc(var(--text-shadow-size) * -1) 0 var(--text-shadow-color, hotpink)`,
				  `0 calc(var(--text-shadow-size) * 1) 0 var(--text-shadow-color, hotpink)`,
				]
	
				return {
				  '--text-shadow-size': value,
				  'text-shadow': shadows.join(', '),
				}
			  },
			},
			{
			  values: theme('spacing', {}),
			  type: 'length',
			}
		  )
		},

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
				'brown': '#49352f',
				'lilac': '#CDCFDC',
				'olive': '#7A6F4E',
				'periwinkle': '#c0c8db',
				'red': '#b3452f',
			},
			boxShadow: {
				'lg': '0px 2px 3px 6px',
				'2xl': '10px 8px 8px 20px',
				'4xl': 'inset 0 0 90px 20px',
			},
			fontFamily: {
				'serif': ['Lora'],
				'sans-serif': ['Roboto Condensed'],
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
			borderWidth: {
				DEFAULT: '1px',
      			'0': '0',
      			'2': '2px',
			},

			backgroundImage: {
				'wool-texture': "url('/img/white-wool.png')",
				'white-wool': "url('/img/white_wool_3.jpeg')",
			},
		}
	}

}
