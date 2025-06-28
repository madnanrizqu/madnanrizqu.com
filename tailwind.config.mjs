/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: ["selector", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--primary)",
          100: "var(--primary-100)",
          300: "var(--primary-300)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          100: "var(--secondary-100)",
        },
        success: {
          DEFAULT: "var(--success)",
          200: "var(--success-200)",
          700: "var(--success-700)",
        },
        warning: {
          DEFAULT: "var(--warning)",
          100: "var(--warning-100)",
          200: "var(--warning-200)",
          500: "var(--warning-500)",
          900: "var(--warning-900)",
        },
        grey: {
          DEFAULT: "var(--grey)",
          2: "var(--grey-2)",
          3: "var(--grey-3)",
          4: "var(--grey-4)",
        },
      },
      fontWeight: {
        bold: "var(--font-bold)",
      },
      fontSize: {
        base: ["1.8rem", "2.4rem"],
        "headline-1": ["3.8rem", "7rem"],
        "headline-2": ["3.2rem", "1.2"],
        "headline-3": ["2.4rem", "1.2"],
      },
      spacing: {
        "section-py": "var(--page-section-pad-y)",
        "page-px": "var(--page-pad-x)",
        "btn-px": "var(--btn-pad-x)",
        "btn-py": "var(--btn-pad-y)",
      },
      borderRadius: {
        btn: "var(--btn-bor-rad)",
        input: "var(--input-bor-rad)",
      },
      textColor: {
        skin: {
          base: "var(--font-color)",
        },
      },
      backgroundColor: {
        skin: {
          base: "var(--bg-color)",
          hero: "var(--bg-color-hero)",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
