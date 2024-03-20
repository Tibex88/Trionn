/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    fontFamily:{
      'body': ['"DM Mono"'],
    },
    extend: {
      colors:{
        woodsmoke:"#121315",
        aqua_haze:"#e0eeee",
        tiara:"#cdd1d0",

        geyser:"#e1e9e9",
        gunsmoke:"#848a8a",
        fringy:"#b6dfce",
        energy_yellow:"#f3e554",

        woodsmoke_2:"#17181a",
        french_pass:"#c5fcfc",
        orange:"#de4818",
        french_pass2:"#39c202",
        limeade:"#39c202",
        summer_green:"#99bfaf",
        tiara:"#c8d0d1",
        grenadier:"#c93202",
        // wattle:"#decf3e",
        red:"#eb0000",
        mine_shaft:"#252525",
        porcelain:"#eef3f3",
        black:"#3f4144",
        oslo_gray:"#979a9c",
        geyser:"#e1e9e9",
        shark:"#212327",
      },
      animation:{
        scroll_infinite:'scroll 20s linear infinite',
        scroll_infinite_inverse:'scroll_b 20s linear infinite' 
      },
      keyframes:{
        scroll:{
          to:{
            translate:'-100%',
          }
        },
        scroll_b:{
          to:{
            translate:'100%',
          }
        },
      }
    },
  },
  plugins: [],
}

