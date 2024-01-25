/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
	theme: {
		extend: {
			container: {
				center: true,
				padding: '3rem',
			},
			height: {
				'screen-1/2': '50vh',
				'screen-1/3': '33vh',
				'screen-2/3': '66vh',
				'screen-1/4': '25vh',
				'screen-3/4': '75vh',
				'screen-10/12': '90vh',
				54: '13.5rem',
			},
			letterSpacing: {
				2.25: '2.25px',
				1: '1px',
			},
		},
	},
	plugins: [],
};
