/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layout/**/*.liquid',
    './templates/**/*.{liquid,json}',
    './sections/**/*.liquid',
    './snippets/**/*.liquid',
    './blocks/**/*.liquid',
    './config/**/*.json',
    './assets/**/*.css',
  ],
  theme: {
    extend: {
      colors: {
        'v-rose': 'rgb(var(--color-rose-channels) / <alpha-value>)',
        'v-rose-light': 'rgb(var(--color-rose-light-channels) / <alpha-value>)',
        'v-rose-dark': 'rgb(var(--color-rose-dark-channels) / <alpha-value>)',
        'v-cream': 'rgb(var(--color-cream-channels) / <alpha-value>)',
      },
      fontFamily: {
        serif: ['var(--font-heading--family)'],
        sans: ['var(--font-body--family)'],
      },
    },
  },
  plugins: [],
};
