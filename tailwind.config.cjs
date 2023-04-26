const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}',
		require('path').join(require.resolve(
			'@skeletonlabs/skeleton'),
			'../**/*.{html,js,svelte,ts}'
		)
	],
	theme: {
		extend: {
			animation: {
				blob: "blob 15s infinite",
			},
			keyframes: {
				blob: {
					"0%": {
						transform: "scale(1)"
					},
					"33%": {
						transform: "scale(1.5)",
					},
					"66%": {
						transform: "scale(2)",
					},
					"100%": {
						transform: "scale(1)",
					},
				},
			},
		},
		screens: {
			'xs': '540px',
			...defaultTheme.screens
		}
	},
	darkMode: 'class',
	plugins: [require('@tailwindcss/forms'),
	...require('@skeletonlabs/skeleton/tailwind/skeleton.cjs')(), require('@tailwindcss/line-clamp')],
};
