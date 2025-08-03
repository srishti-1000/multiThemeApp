// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   // theme: {
//   //  extend: {
//   //   transitionProperty: {
//   //     theme: 'background-color, color, border-color, font, transform',
//   //   },
//   //   fontFamily: {
//   //     sans: ['Inter', 'sans-serif'],
//   //     serif: ['Merriweather', 'serif'],
//   //     pacifico: ['Pacifico', 'cursive'],
//   //   },
//   // }
//   // },
//   theme: {
//   extend: {
//     fontFamily: {
//       sans: ['Inter', 'sans-serif'],
//       serif: ['Merriweather', 'serif'],
//       pacifico: ['Pacifico', 'cursive'],
//     },
//   },
// },

//   plugins: [],
// }
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg-color)",
        text: "var(--text-color)",
        primary: "var(--primary-color)",
      },
      fontFamily: {
        base: "var(--font-family)",
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        pacifico: ['Pacifico', 'cursive'],
      },
    },
  },
  plugins: [],
}

