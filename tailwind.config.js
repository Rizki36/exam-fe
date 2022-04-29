const daisyui = require('daisyui');
const lineClamp = require('@tailwindcss/line-clamp');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  themes: ['synthwave'],
  plugins: [daisyui, lineClamp],
};
