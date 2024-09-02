/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				'poke-yellow': '#FAE373',
				'poke-blue': '#0F5FFF',
				'poke-purple': '#B987A0',
				'poke-red': '#D66D7B',
				white: '#FFFFFF',
				black: '#000000',
			},
			fontFamily: {
				body: ['Overpass'],
				stats: ['Orbitron'],
			},
			letterSpacing: {
				evenWider: '.6em',
			},
			blur: {
				biggest: '152px',
			},
		},
	},
	plugins: [],
};
