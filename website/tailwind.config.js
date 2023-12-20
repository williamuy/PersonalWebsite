module.exports = {
  content: [
    "./src/components/*.{js,jsx,ts,tsx}", // adjust this path according to where your files are
  ],
  theme: {
    extend: {
      // Add your customizations here
      colors: {
        'brand-blue': '#1992d4',
        // other colors...
      },
      fontFamily: {
        'sans': ['Helvetica', 'Arial', 'sans-serif'],
        // other font families...
      },
      // other theme extensions...
    },
  },
  plugins: [
    // Add any Tailwind plugins you want to use here
  ],
};
