/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "text-shadow-pop-right": {
          "0%": {
            "text-shadow":
              "0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555",
            transform: "translateX(0)",
          },
          "100%": {
            "text-shadow":
              "1px 0 #555555, 2px 0 #555555, 3px 0 #555555, 4px 0 #555555, 5px 0 #555555, 6px 0 #555555, 7px 0 #555555, 8px 0 #555555",
            transform: "translateX(-8px)",
          },
        },
        "tracking-in-contract-bck": {
          "0%": {
            "letter-spacing": "1em",
            transform: "translateZ(400px)",
            opacity: 0,
          },
          "40%": {
            opacity: 0.6,
          },
          "100%": {
            transform: "translateZ(0)",
            opacity: 1,
          },
        },
      },
      animation: {
        "text-shadow-pop-right": "text-shadow-pop-right 4s both",
        "tracking-in-contract-bck":
          "tracking-in-contract-bck 5s cubic-bezier(0.215, 0.610, 0.355, 1.000) both",
      },
    },
    screens: {
      sff: { max: "570px" },

      ss: { max: "750px" },

      snine: { max: "900px" },

      szfs: { min: "0px", max: "570px" },

      sfsf: { min: "571px", max: "749px" },
      sftf: { min: "901px", max: "2800px" },

      sm: { min: "640px", max: "767px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: { min: "768px", max: "1023px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { min: "1024px", max: "1279px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      xl: { min: "1280px", max: "1535px" },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      "2xl": { min: "1536px" },
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
