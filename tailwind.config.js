
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 35px 70px -15px rgba(0, 0, 0, 0.3)',
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      zIndex: {
        '100': '100',
        '101':'101',
      },
      height: {
        '128': '32rem',
      },
      keyframes:{
        'animation-manu':{
          '0%,100%':{transform:'scale(100%)'},
          '25%':{transform:'scale(110%)'},
          '50%':{transform:'scale(120%)'},
          '75%':{transform:'scale(110%)'},
        },
        'animation-shake':{
            '0%,100%':{transform:'rotate(3deg)'},
          '25%':{transform:'rotate(-3deg)'},
          '50%':{transform:'rotate(3deg)'},
          '75%':{transform:'rotate(-3deg)'},
        },
        'animation-shakebtn':{
          '0%,100%':{transform:'rotate(3deg)'},
          '25%':{transform:'rotate(-3deg)'},
          '50%':{transform:'rotate(3deg)',},
          '75%':{transform:'rotate(-3deg)',},
        }

      },
      animation:{
        'animation-manu':'animation-manu 1s ease-in infinite' ,
        'animation-shake':'animation-shake .5s ease-in 1' ,
        'animation-shakebtn':'animation-shakebtn .5s ease-in infinite' ,
      },
    
    },
    fontFamily: {
      IBM: ["IBM Plex Sans Thai", "sans-serif"]
    }
  },
  plugins: [],
};
