/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-walnut': '#17120E',
        'warm-oak': '#B98A57',
        'sanded-timber': '#E8DED0',
        'soft-stone': '#F5F1EA',
        'charcoal': '#23201D',
        'brass': '#D6B26E',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        drama: ['Playfair Display', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
