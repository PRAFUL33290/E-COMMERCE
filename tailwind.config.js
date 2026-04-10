/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#9d4300",
        "on-secondary-container": "#006f66",
        "inverse-surface": "#2f312e",
        "surface-container-high": "#e8e8e3",
        "on-tertiary": "#ffffff",
        "on-surface-variant": "#584237",
        "on-secondary-fixed-variant": "#005049",
        "on-surface": "#1a1c19",
        "surface-tint": "#9d4300",
        "secondary-container": "#5ef6e6",
        "error-container": "#ffdad6",
        "tertiary-fixed-dim": "#e9c349",
        "surface-bright": "#fafaf5",
        "surface-container-highest": "#e3e3de",
        "on-secondary": "#ffffff",
        "on-primary-fixed": "#341100",
        "on-error-container": "#93000a",
        "error": "#ba1a1a",
        "surface-container-lowest": "#ffffff",
        "secondary": "#006a62",
        "on-primary-fixed-variant": "#783200",
        "tertiary": "#735c00",
        "on-background": "#1a1c19",
        "on-tertiary-container": "#4f3e00",
        "on-primary": "#ffffff",
        "surface-container-low": "#f4f4ef",
        "surface": "#fafaf5",
        "primary-container": "#f97316",
        "outline": "#8c7164",
        "surface-container": "#eeeee9",
        "on-error": "#ffffff",
        "inverse-primary": "#ffb690",
        "background": "#fafaf5",
        "surface-variant": "#e3e3de",
        "on-primary-container": "#582200",
        "on-secondary-fixed": "#00201d",
        "secondary-fixed": "#61f9e9",
        "inverse-on-surface": "#f1f1ec",
        "tertiary-fixed": "#ffe088",
        "outline-variant": "#e0c0b1",
        "primary-fixed-dim": "#ffb690",
        "surface-dim": "#dadad5",
        "tertiary-container": "#cca830",
        "secondary-fixed-dim": "#3adccc",
        "on-tertiary-fixed": "#241a00",
        "on-tertiary-fixed-variant": "#574500",
        "primary-fixed": "#ffdbca"
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
      fontFamily: {
        "headline": ["Noto Serif", "serif"],
        "body": ["Manrope", "sans-serif"],
        "label": ["Manrope", "sans-serif"],
        "serif": ["Noto Serif", "serif"],
        "sans": ["Manrope", "sans-serif"]
      }
    },
  },
  plugins: [
    import('@tailwindcss/forms'),
    import('@tailwindcss/container-queries')
  ],
}
