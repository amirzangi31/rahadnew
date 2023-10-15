/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'tablet' : '900px',

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      primary: {
        light: "#2393B0",
        main: "#003666",
      },
      success: "#23B05B",
      error: "#FB2047",
      gray: {
        light: "#C2C7CC",
        main: "#A2AFB8",
        dark : "#828282"
      },
      text: {
        light: "#294046",
        main: "#49454F"
      },
      white: {
        light: "#FAFAFA",
        main: "#FFFFFF"
        
      }
    },
    extend: {
      boxShadow : {
          primary : " 0px 0px 8px 0px #0875924D"
      },
      
    },
    
    borderRadius : {
      sm : "10px",
      full : "50%"
    },
    container: {
      center: true,
      screens: {
        "2xl": "2000px"
      }
    },
    fontSize : {
      sm : "12px",
      lg : "14px",
      xl : "16px",
      "2xl" : "22px"
    }
  },
  plugins: [],
}
