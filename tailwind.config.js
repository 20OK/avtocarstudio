module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        header: '300px minmax(0, 1fr) 300px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1310px',
      '2xl': '1310px',
    },
    container: {
      center: true,
      padding: 15,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
