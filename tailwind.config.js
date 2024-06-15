/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      PrimaryFont: ["font-light", "sans-serif"],
      BoldFont: ["font-bold", "sans-serif"],
    },
    width: {
      "50ch": "50ch",
      "30ch": "30ch",
      "70ch": "70ch",
    },

    extend: {
      colors: {
        navHover: "#29f4f4",
        GreyText: "#979797",
      },
      backgroundColor: {
        creamBg: "#f5f5f5",
        Round1: "#66596c",
        Round2: "#97999b",
        Round3: "#829995",
        Round4: "#c4bcb7",
        Round5: "#315470",
        Round6: "#161a29",
        Round7: "#bbc7d6",
        Round8: "#000000",
        Round9: "#ffffff",
      },
    },
  },
  plugins: [],
};
