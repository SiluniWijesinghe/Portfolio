/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["app/**/*.{js,jsx}", "components/**/*.{js,jsx}"],
  theme: {
    container: {
      center: true,
      padding: "15px",
      screens: {
        "2xl": "1400px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },

    fontFamily: {
      primary: "var(--font-jetbrainsMono)",
    },

    extend: {
      colors: {
        primary: "#1c1c22",
        accent: {
          DEFAULT: "#e197a1",
          hover: "#FF6F91",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
       // Add custom text-outline utility here
       textShadow: {
        outline: '2px 2px 0 #000',  // Outline with 2px black shadow
      },

      // For stroke-based outline
      textStroke: {
        black: '2px black',  // 2px solid black stroke
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),

    // Alternatively, you can add the plugin here
    function ({ addUtilities }) {
      addUtilities({
        '.text-outline-white': {
          '-webkit-text-stroke': '2px white', // Apply a 2px black text outline
          'color': 'transparent',             // Make the inner text transparent
        },
      });
    },
  ],
};
