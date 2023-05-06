/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				dark: {
					900: "#181A1B",
					500: "#1F2223",
				},
				light: {
					900: "#E8E6E3",
					500: "#80807F",
				},
			},
		},
	},
	plugins: [],
};
