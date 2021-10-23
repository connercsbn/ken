const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				display: ['Raleway'],
				body: ['Raleway']
			},
			minWidth: {
				lg: '25rem'
			}
		}
	},

	plugins: []
};

module.exports = config;
