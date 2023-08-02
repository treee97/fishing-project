/** @type {import('tailwindcss').Config} */
// Import the `fontFamily` from the Tailwind CSS configuration module

module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				// Light theme colors
				'light-text': '#073d47',
				'light-background': '#bbe0e2',
				'light-primary': '#12c7ed',
				'light-secondary': '#9eecff',
				'light-accent': '#ff44ef',

				// Dark theme colors
				'dark-text': '#073d47',
				'dark-background': '#bbe0e2',
				'dark-primary': '#12c7ed',
				'dark-secondary': '#000405',
				'dark-accent': '#d603c5',
			},
			// todas las opciones que tienen color, esta tambien es agregada 
			darkMode: ["class"],
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			fontFamily: {
				pixelfont: [
					"var(--press2play)",
					"ui-sans-serif",
					"system-ui",
					"sans-serif",
				],
				kongtext: [
					"var(--kongtext)",
					"ui-sans-serif",
					"system-ui",
					"sans-serif",
				],
				silkscreen: [
					"var(--silkscreen)",
					"ui-sans-serif",
					"system-ui",
					"sans-serif",
				]

			},
		},
	},
	plugins: [],
};
