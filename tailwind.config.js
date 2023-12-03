/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{
        primary:{
          main: '#22a958',
          text: '#ffffff'
        },
        secondary: {
          main: 'tomato'
        },
        disabled:{
          main: '#252a3c1f',
          text:'#252a3c61'
        }
      }
    },
  },
  plugins: [],
}

