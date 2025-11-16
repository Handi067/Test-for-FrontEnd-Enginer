/** @type {import('tailwindcss').Config} */
export default {
  // Penting: Pastikan path ini mencakup semua file komponen Anda di src/
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}