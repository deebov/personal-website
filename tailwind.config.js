// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: [
    './src/**/*.js',
  ],
  theme: {
    fontFamily: {
      display: ['Roboto Mono', 'sans-serif'],
      body: ['Roboto Mono', 'sans-serif'],
    },
  },
  variants: {},
  // https://github.com/tailwindcss/custom-forms
  plugins: [
    // require("@tailwindcss/custom-forms")
  ],
};
