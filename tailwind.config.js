/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    // colors: {
    //   transparent: 'transparent',
    //   current: 'currentColor',
    //   'white': '#ffffff',
    //   'black': '#0F0F0F',
    //   'dark-blue': '#232D3F',
    //   'call-to-action': '#005B41',
    //   'green': '#008170',
    //   'soft-100': '#f1f5f9',
    //   'soft-200': '#e2e8f0',
    //   'dark-gray': '#1f2937'
    // },
  },
  plugins: [require("tailwindcss-animate")],
}