const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{html,js,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      width: {
        '128': '32rem',
      },
      height: {
        '128': '40rem',
      },
      backgroundImage: theme => ({
        'background': "url('/src/asset/img/background.jpg')",
      }),
    },
  },
  plugins: [],
});

