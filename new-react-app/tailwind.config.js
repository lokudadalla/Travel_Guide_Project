// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }




// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
  keyframes: {
    fadeInUp: {
      "0%": { opacity: "0", transform: "translateY(40px) scale(0.98)" },
      "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
    },
    slowZoom: {
      "0%": { transform: "scale(1)" },
      "100%": { transform: "scale(1.1)" },
    },
  },
  animation: {
    fadeInUp: "fadeInUp 1s ease-out forwards",
    slowZoom: "slowZoom 20s ease-in-out infinite alternate",
  },
}

  },
  plugins: [],
};
