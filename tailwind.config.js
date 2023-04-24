/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        text: 'text 5s ease infinite',
      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
      colors: {
        dark: "#404040",
        dark1: "#0F0F0F",
        grad1: "#0D230E",
        grad2: "#2E0B0B",
  
        silver: "#707070",
        lightSilver: "#9a9a9a",
        veryLight: "#C5C5C5",
      },
    },
  },
  plugins: [],
}