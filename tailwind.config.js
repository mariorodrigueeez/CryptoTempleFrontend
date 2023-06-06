/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'boton': 'all',
      },
      transitionDuration: {
        '300': '300ms',
      },
      transitionTimingFunction: {
        'in-out': 'ease-in-out',
      },
      scale: {
        '110': '1.1',
      },
      backgroundColor: {
        'blue-500': '#3B82F6',
        'blue-600': '#2563EB',
      },
      textColor: {
        'white': '#FFFFFF',
      },
      boxShadow: {
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      borderRadius: {
        'full': '9999px',
      },
    },
    plugins: [],
  }
}