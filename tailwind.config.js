/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{html,js,ts,jsx,tsx}", // Look for classes in these files
		"./index.html", // Include your main HTML file
	],
	theme: {
		extend: {
			backgroundImage: {
				hero: "url('./assets/bg.png')",
			},
		},
	},
	plugins: [],
};
