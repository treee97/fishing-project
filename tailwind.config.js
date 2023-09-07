/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./utils/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				'light-text': '#073d47',
				'light-background': '#bbe0e2',
				'light-primary': '#12c7ed',
				'light-secondary': '#9eecff',
				'light-accent': '#ff44ef',

				'dark-text': '#bbe0e2',
				'dark-background': '#073d47',
				'dark-primary': '#12c7ed',
				'dark-secondary': '#000405',
				'dark-accent': '#d603c5',
			},
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
	plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.disable-scroll': {
          overflow: 'hidden',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },],
};
