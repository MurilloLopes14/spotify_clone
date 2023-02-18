/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/index.html"],
  theme: {
    extend: {
      spacing: {
        14: "3.5rem",
        "125px": "125px",
      },
      colors: {
        hoverspt: "#18d760",
        "purple-main": "#2d46d9",
        "green-main": "#1ed760",
      },
      backgroundImage: (theme) => ({
        "spotify-theme": "url(/src/assets/img/bursts.svg)",
        "spotify-theme-mobile": "url(/src/assets/img/bursts-mobile.svg)",
      }),
      backgroundSize: {
        "175%": "175%",
        "195%": "195%",
      },
      backgroundPosition: {
        banner: "46% 4%",
        "banner-mobile": "top 25% center",
      },
      fontSize: {
        "9xl": "9rem",
      },
    },
  },
  plugins: [],
};
