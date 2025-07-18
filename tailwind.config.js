/** @type {import('tailwindcss').Config} */
export default {
  content: ["*"],
  theme: {
    extend: {
      screens: {
        'small':{'max':"1200px"} 
        // small: { max: "1200px" }
      }
    },
  },
  plugins: [],
}
