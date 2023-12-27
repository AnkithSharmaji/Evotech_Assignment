/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    extend: {
      backgroundColor: {
        'success': '#C9F7F5',
        'approved': '#EEE5FF',
        'rejected': '#FFE2E5',
        'progress': '#FFF4DE',
      },
      colors: {
        'success': '#1BC5BD',
        'approved': '#8950FC',
        'rejected': '#F64E60',
        'progress': '#FFA800',
      },
    },
  },
  plugins: [],
};