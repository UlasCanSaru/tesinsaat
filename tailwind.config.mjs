/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        copper: {
          DEFAULT: '#B87333',
          light: '#D4956A',
          dark: '#8B5A2B',
        },
        'burnt-orange': '#C65D1A',
        'earth-brown': '#5C3D2E',
        'deep-charcoal': '#2C2420',
        'warm-gray': '#A39588',
        cream: '#FAF6F1',
        sand: '#F0E8DE',
        whatsapp: '#25D366',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"Outfit"', 'sans-serif'],
        accent: ['"Cormorant Garamond"', 'serif'],
      },
    },
  },
  plugins: [],
};
