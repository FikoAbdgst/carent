/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '30%': '30%',
        '35%': '35%',
        '45%': '45%',
        '90%': '90%',
        '68': '17rem',
        '76': '19rem',
        '100': '25rem',
        '104': '26rem',
        '108': '27rem',
        '112': '28rem',
        '116': '29rem',
        '120': '30rem',
        '124': '31rem',
        '128': '32rem',
        '132': '33rem',
        '136': '34rem',
        '140': '35rem',
        '144': '36rem',
        '148': '37rem',
        '152': '38rem',
        '156': '39rem',
        '160': '40rem',

      },
      height: {
        '30%': '30%',
        '35%': '35%',
        '45%': '45%',
        '90%': '90%',
        '68': '17rem',
        '100': '25rem',
        '104': '26rem',
        '108': '27rem',
        '112': '28rem',
        '116': '29rem',
        '120': '30rem',
        '124': '31rem',
        '128': '32rem',
        '132': '33rem',
        '136': '34rem',
        '140': '35rem',
        '144': '36rem',
        '148': '37rem',
        '152': '38rem',
        '156': '39rem',
        '160': '40rem',
        '1/4screen': '25vh',
        '1/2screen': '50vh',
        '3/4screen': '75vh',
        '1.1/2screen': '150vh',
        '1.3/4screen': '175vh',
        '2screen': '200vh',
        '2.1/2screen': '250vh',
        '2.3/4screen': '275vh',
        '3screen': '300vh',
        '4screen': '400vh',
        '5screen': '500vh',
        '5.1/2screen': '550vh',

      },
      spacing: {
        '68': '17rem',
        '84': '21rem',
        '88': '22rem',
        '100': '25rem',
        '104': '26rem',
        '108': '27rem',
        '112': '28rem',
        '116': '29rem',
        '120': '30rem',
        '160': '40rem',
      },
      fontSize: {
        "2xs": "9px",
        "3xs": "7px",
        "4xs": "5px",
        "5xs": "3px",
      },
      boxShadow: {
        '3xl': '0px 10px 15px 10px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
}