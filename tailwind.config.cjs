/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: [require('daisyui'), require('@tailwindcss/line-clamp')],
	daisyui: {
		themes: ['halloween', 'cmyk']
	}
};
