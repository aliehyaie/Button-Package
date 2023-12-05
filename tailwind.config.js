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
        error: {
          main: '#DF1D17'
        },
        neutral: {
          main: '#686C79'
        },
        warning: {
          main: '#EBA825'
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

