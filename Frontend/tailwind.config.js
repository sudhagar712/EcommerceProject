/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container:{
        center:'true',
      
       
      }
    },
    height: {
      'screen': '100vh',
       'smallscreen':'100vh'
    },
   
  },
  plugins: [
    require('daisyui'),

    

   

  ],
}