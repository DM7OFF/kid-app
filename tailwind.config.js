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
        "on-error": "#ffffff",
        "secondary-container": "#fdd029",
        "on-secondary": "#ffffff",
        "surface-dim": "#dbd9d9",
        "on-secondary-fixed": "#231b00",
        "secondary-fixed": "#ffe085",
        "outline": "#6e7881",
        "primary": "#00658d",
        "surface-tint": "#00658d",
        "surface-container-high": "#eae8e7",
        "on-secondary-fixed-variant": "#574500",
        "background": "#fbf9f8",
        "inverse-on-surface": "#f2f0f0",
        "surface-container": "#efeded",
        "on-tertiary": "#ffffff",
        "tertiary-fixed": "#ffdbce",
        "on-error-container": "#93000a",
        "surface": "#fbf9f8",
        "surface-bright": "#fbf9f8",
        "on-background": "#1b1c1c",
        "on-surface-variant": "#3e4850",
        "on-tertiary-fixed": "#380d00",
        "on-tertiary-fixed-variant": "#7f2b02",
        "secondary": "#735c00",
        "on-secondary-container": "#6f5900",
        "tertiary": "#9f4119",
        "on-primary-fixed": "#001e2d",
        "on-primary-fixed-variant": "#004c6b",
        "error": "#ba1a1a",
        "error-container": "#ffdad6",
        "on-tertiary-container": "#802b03",
        "primary-fixed-dim": "#81cfff",
        "surface-container-highest": "#e4e2e2",
        "surface-variant": "#e4e2e2",
        "on-surface": "#1b1c1c",
        "primary-fixed": "#c6e7ff",
        "secondary-fixed-dim": "#eec215",
        "on-primary-container": "#004d6c",
        "surface-container-lowest": "#ffffff",
        "inverse-primary": "#81cfff",
        "tertiary-container": "#ff9d78",
        "outline-variant": "#bdc8d1",
        "on-primary": "#ffffff",
        "tertiary-fixed-dim": "#ffb59a",
        "primary-container": "#47c1ff",
        "inverse-surface": "#303030",
        "surface-container-low": "#f5f3f3"
      },
      borderRadius: {
        "DEFAULT": "1rem",
        "md": "1.5rem",
        "lg": "2rem",
        "xl": "3rem",
        "full": "9999px"
      },
      spacing: {
        "unit": "8px",
        "margin-tablet": "48px",
        "touch-target-min": "64px",
        "stack-gap": "32px",
        "margin-desktop": "80px",
        "margin-mobile": "24px",
        "gutter": "24px"
      },
      fontFamily: {
        "body-xl": ["Quicksand", "sans-serif"],
        "body-lg": ["Quicksand", "sans-serif"],
        "headline-lg-mobile": ["Plus Jakarta Sans", "sans-serif"],
        "label-bold": ["Lexend", "sans-serif"],
        "headline-lg": ["Plus Jakarta Sans", "sans-serif"],
        "display-hero": ["Plus Jakarta Sans", "sans-serif"]
      },
      fontSize: {
        "body-xl": ["24px", { "lineHeight": "1.5", "fontWeight": "600" }],
        "body-lg": ["20px", { "lineHeight": "1.5", "fontWeight": "500" }],
        "headline-lg-mobile": ["28px", { "lineHeight": "1.3", "fontWeight": "700" }],
        "label-bold": ["18px", { "lineHeight": "1.2", "fontWeight": "700" }],
        "headline-lg": ["32px", { "lineHeight": "1.3", "fontWeight": "700" }],
        "display-hero": ["48px", { "lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "800" }]
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        starPop: {
          '0%': { transform: 'scale(0)', opacity: '1' },
          '50%': { transform: 'scale(1.5)', opacity: '1' },
          '100%': { transform: 'scale(2)', opacity: '0' },
        },
        bounceIn: {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        dash: {
          to: { strokeDashoffset: '-40' }
        }
      },
      animation: {
        wiggle: 'wiggle 1.5s ease-in-out infinite',
        float: 'float 4s ease-in-out infinite',
        bounceIn: 'bounceIn 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) both',
        dash: 'dash 5s linear infinite',
      }
    },
  },
  plugins: [],
}
