/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			lightBlue: {
				50: '#f3f8f7',
				100: '#dfeeed',
				DEFAULT: '#b8d8d8',
				300: '#99c6c7',
				400: '#68a6a8',
				500: '#4d8b8d',
				600: '#437277',
				700: '#3b5f63',
				800: '#365054',
				900: '#314448',
				950: '#1d2c2f'
			},
			cadetGray: {
				50: '#f4f7f7',
				100: '#e2ebeb',
				200: '#c8d9d9',
				300: '#a2bebe',
				DEFAULT: '#7a9e9f',
				500: '#5a7f80',
				600: '#4d6a6d',
				700: '#43595b',
				800: '#3c4c4e',
				900: '#354244',
				950: '#20292c'
			},
			paynesGray: {
				50: '#f4f7f7',
				100: '#e3e9ea',
				200: '#cad5d7',
				300: '#a5b9bb',
				400: '#799497',
				500: '#5e797c',
				DEFAULT: '#4f6367',
				700: '#465458',
				800: '#3e494c',
				900: '#373f42',
				950: '#22282a'
			},
			beige: {
				50: '#f6faeb',
				DEFAULT: '#eef5db',
				200: '#d7e8ae',
				300: '#bcd87e',
				400: '#a1c655',
				500: '#84ab37',
				600: '#668828',
				700: '#4e6823',
				800: '#405321',
				900: '#374720',
				950: '#1c270c'
			},
			bittersweet: {
				50: '#fff2f1',
				100: '#ffe3e1',
				200: '#ffcbc8',
				300: '#ffa7a1',
				DEFAULT: '#fe5f55',
				500: '#f7473c',
				600: '#e42a1e',
				700: '#c01f15',
				800: '#9f1d15',
				900: '#831f19',
				950: '#480b07'
			},
			flame: {
				50: '#fdf5ef',
				100: '#fae8da',
				200: '#f4ceb4',
				300: '#ecad85',
				400: '#e38354',
				DEFAULT: '#dc602e',
				600: '#ce4d28',
				700: '#ab3923',
				800: '#893023',
				900: '#6f291f',
				950: '#3c120e'
			},
			Gray: {
				50: '#f8f8f8',
				DEFAULT: '#e9e9e9',
				200: '#dcdcdc',
				300: '#bdbdbd',
				400: '#989898',
				500: '#7c7c7c',
				600: '#656565',
				700: '#525252',
				800: '#464646',
				900: '#3d3d3d',
				950: '#292929'
			},
			logoBeige: {
				50: '#fdf9ef',
				100: '#f9f0db',
				200: '#f2ddb6',
				300: '#edce98',
				400: '#e1a656',
				500: '#da8e35',
				600: '#cb762b',
				700: '#a95c25',
				800: '#874925',
				900: '#6d3d21',
				950: '#3b1e0f'
			},
			white: '#ffffff'
		},
		fontFamily: {
			body: ['Afacad', 'sans-serif'],
			heading1: ['Kalnia'],
			heading2: ['Oswald']
		},
		extend: {}
	},
	plugins: [
		// eslint-disable-next-line @typescript-eslint/no-require-imports
		require('@tailwindcss/forms')
	]
};
