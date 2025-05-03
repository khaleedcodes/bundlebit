/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "first-blue": "#C4E6FF",
        "second-blue": "#024493",
        "third-blue": "#1E93FF",
        "first-primary": "#1b1b1f",
        "second-primary": "#ffff",
        "first-text-color": "#ffff",
        "second-text-color": "#3c3c43",
        "first-section-divider": "#0d0d0f",
        "second-section-divider": "#e5e5e6",
        "first-accent": "#646cff",
        "second-accent": "#bcc0ff",
        "first-card": "#202127",
        "second-card": "#f6f6f7",
        "first-icon": "#2b2f36",
        "second-icon": "#e7e8ec",
        grey: "#71767b",
        "close-button": "#ff5f57",
        "minimize-button": "#febc2e",
        "expand-button": "#5bc553",
      },
      fontFamily:{
        
      }
    },
  },
  plugins: [],
};
