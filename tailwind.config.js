/** @type {import('tailwindcss').Config} */
// Import the `fontFamily` from the Tailwind CSS configuration module
import { fontFamily } from "./tailwind.config.js";

module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				goldie: "gold",
			},
			// todas las opciones que tienen color, esta tambien es agregada

			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			fontFamily: {
				pixelfont: ["var(--press2play)",  "ui-sans-serif", "system-ui", "sans-serif"],
			},
		},
	},
	plugins: [],
};
