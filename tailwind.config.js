/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        'xs': '375px',      // Small phones (iPhone SE, etc.)
        'sm': '640px',      // Large phones
        'md': '768px',      // Tablets/iPads
        'lg': '1024px',     // Small desktops
        'xl': '1280px',     // Large desktops
        '2xl': '1536px',    // Extra large/TV screens
        'tablet': '768px',  // Alias for tablets
        'desktop': '1024px', // Alias for desktops
      },
      colors: {
        "primary": "#256af4",
        "background-light": "#f5f6f8",
        "background-dark": "#101622",
        "text-light": "#121212",
        "text-dark": "#EAEAEA",
        "subtle-light": "#E0E0E0",
        "subtle-dark": "#282e39"
      },
      fontFamily: {
        "display": ["Space Grotesk", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0.5rem",
        "lg": "1rem",
        "xl": "1.5rem",
        "full": "9999px"
      },
    },
  },
  plugins: [],
}

