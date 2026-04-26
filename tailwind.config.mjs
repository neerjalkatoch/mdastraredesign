import forms from '@tailwindcss/forms';
import containerQueries from '@tailwindcss/container-queries';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "on-primary": "#ffffff",
        "primary-fixed-dim": "#ddb7ff",
        "on-primary-container": "#ba7ef4",
        "tertiary-fixed": "#e5e2e1",
        "primary-container": "#4b0082",
        "error-container": "#ffdad6",
        "on-tertiary-fixed": "#1b1c1c",
        "on-tertiary-fixed-variant": "#474746",
        "tertiary-container": "#313131",
        "on-secondary-fixed-variant": "#5520b3",
        "inverse-surface": "#2f3131",
        "on-primary-fixed-variant": "#622599",
        "secondary-fixed-dim": "#d1bcff",
        "tertiary": "#1c1c1c",
        "inverse-primary": "#ddb7ff",
        "surface-variant": "#e2e2e2",
        "inverse-on-surface": "#f1f1f1",
        "surface-dim": "#dadada",
        "surface-container": "#eeeeee",
        "on-background": "#1a1c1c",
        "surface-bright": "#f9f9f9",
        "surface-container-highest": "#e2e2e2",
        "on-surface": "#1a1c1c",
        "background": "#f9f9f9",
        "on-tertiary": "#ffffff",
        "on-error": "#ffffff",
        "surface-container-lowest": "#ffffff",
        "outline-variant": "#cec3d3",
        "secondary-container": "#8458e4",
        "secondary": "#6b3dca",
        "on-tertiary-container": "#9a9998",
        "primary-fixed": "#f0dbff",
        "on-surface-variant": "#4c4451",
        "error": "#ba1a1a",
        "surface-tint": "#7b41b3",
        "outline": "#7d7483",
        "on-secondary-fixed": "#23005b",
        "on-primary-fixed": "#2c0050",
        "surface-container-low": "#f3f3f3",
        "on-secondary": "#ffffff",
        "tertiary-fixed-dim": "#c8c6c5",
        "surface-container-high": "#e8e8e8",
        "surface": "#f9f9f9",
        "on-secondary-container": "#fffbff",
        "secondary-fixed": "#e9ddff",
        "primary": "#2e0052",
        "on-error-container": "#93000a"
      },
      borderRadius: {
        "DEFAULT": "0.5rem",
        "lg": "1rem",
        "xl": "1.5rem",
        "full": "9999px"
      },
      fontFamily: {
        "headline": ["var(--font-headline)", "serif"],
        "body": ["var(--font-body)", "sans-serif"],
        "label": ["var(--font-label)", "sans-serif"]
      }
    },
  },
  plugins: [
    forms,
    containerQueries
  ],
}
