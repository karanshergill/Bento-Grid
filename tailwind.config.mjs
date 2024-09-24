/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'
	],
	theme: {
		extend: {
			colors: {
				'purple-light': 'hsl(254, 88%, 90%)',
				'purple-dark': 'hsl(256, 67%, 59%)',
				'yellow-light': 'hsl(31, 66%, 93%)',
				'yellow-dark': 'hsl(39, 100%, 71%)',
				'white': 'hsl(0, 0%, 100%)',
				'black': 'hsl(0, 0%, 7%)'
			},
			fontFamily: {
				'dm-sans': ['DM Sans Variable', 'sans-serif']
			}
		},
	},
	plugins: [],
}
