const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			animation: {
				blob: "blob 7s infinite",
			},
			keyframes: {
				blob: {
					"0%": {
						transform: "translate(0%, 50%) scale(1)"
					},
					"33%": {
						transform: "translate(50%, 50%) scale(1.5)",
					},
					"66%": {
						transform: "translate(100%, 50%) scale(2)",
					},
					"100%": {
						transform: "translate(0%, 50%) scale(1)",
					},
				},
			},
		},
		screens: {
			'xs': '540px',
			...defaultTheme.screens
		}
	},
	plugins: [require('daisyui'), require('@tailwindcss/line-clamp')],
	daisyui: {
		themes: ['halloween', 'cmyk']
	}
};
