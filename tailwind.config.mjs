/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
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
  plugins: [
    require("@tailwindcss/typography"),
    function ({ addBase, addComponents, addUtilities, theme }) {
      // Base styles to preserve your CSS resets and base styling
      addBase({
        html: {
          fontSize: "62.5%", // results in 10px base font size
          scrollBehavior: "smooth",
          scrollbarGutter: "stable",
          overflowY: "scroll",
          overflowX: "hidden",
        },
        body: {
          fontFamily: '"Inter", sans-serif',
          fontOpticalSizing: "auto",
          backgroundColor: "var(--bg-color)",
          color: "var(--font-color)",
          overflowX: "hidden",
          margin: "0",
        },
        "::backdrop": {
          background: "rgba(0, 0, 0, 0.3)",
        },
        "body::-webkit-scrollbar": {
          width: "8px",
        },
        "body::-webkit-scrollbar-track": {
          boxShadow: "inset 0 0 6px rgba(0, 0, 0, 0.3)",
        },
        "body::-webkit-scrollbar-thumb": {
          backgroundImage:
            "linear-gradient(180deg, rgba(31, 170, 200, 0.4), rgba(31, 170, 200, 0.4))",
          borderRadius: "10px",
        },
      });

      // Component classes mapped from common.css
      addComponents({
        ".cmn_container": {
          paddingLeft: "var(--page-pad-x)",
          paddingRight: "var(--page-pad-x)",
          margin: "0 auto",
          maxWidth: "900px",
        },
        ".cmn_button--outline": {
          display: "inline-block",
          border: "1px solid var(--font-color)",
          padding: "var(--btn-pad-y) var(--btn-pad-x)",
          borderRadius: "var(--btn-bor-rad)",
          fontSize: "var(--btn-font-size-mobile)",
          textAlign: "center",
          "&:hover": {
            color: "var(--secondary)",
          },
          "@media screen and (min-width: 700px)": {
            fontSize: "var(--btn-font-size)",
          },
        },
        ".cmn_button--outline_primary": {
          display: "inline-block",
          border: "1px solid var(--primary)",
          padding: "var(--btn-pad-y) var(--btn-pad-x)",
          borderRadius: "var(--btn-bor-rad)",
          fontSize: "var(--btn-font-size-mobile)",
          textAlign: "center",
          color: "var(--primary)",
          "@media screen and (min-width: 700px)": {
            fontSize: "var(--btn-font-size)",
          },
        },
        ".cmn_button--outline_secondary": {
          display: "inline-block",
          border: "1px solid var(--secondary)",
          padding: "var(--btn-pad-y) var(--btn-pad-x)",
          borderRadius: "var(--btn-bor-rad)",
          fontSize: "var(--btn-font-size-mobile)",
          textAlign: "center",
          color: "var(--secondary)",
          "&:hover": {
            color: "var(--secondary)",
          },
          "@media screen and (min-width: 700px)": {
            fontSize: "var(--btn-font-size)",
          },
        },
        ".cmn_button--solid_secondary": {
          display: "inline-block",
          border: "none",
          padding: "var(--btn-pad-y) var(--btn-pad-x)",
          borderRadius: "var(--btn-bor-rad)",
          fontSize: "var(--btn-font-size-mobile)",
          background: "var(--secondary)",
          color: "var(--white)",
          textAlign: "center",
          "&:hover": {
            color: "var(--white)",
          },
          "@media screen and (min-width: 700px)": {
            fontSize: "var(--btn-font-size)",
          },
        },
      });

      // Utility classes from common.css
      addUtilities({
        ".u_hide_xs": {
          visibility: "hidden",
          position: "absolute",
          "@media screen and (min-width: 650px)": {
            visibility: "visible",
            position: "initial",
          },
        },
        ".u_hide_sm": {
          "@media screen and (min-width: 650px)": {
            visibility: "hidden",
            position: "absolute",
          },
          "@media screen and (min-width: 900px)": {
            visibility: "visible",
            position: "initial",
          },
        },
        ".u_hide_md": {
          "@media screen and (min-width: 900px)": {
            visibility: "hidden",
            position: "absolute",
          },
          "@media screen and (min-width: 1200px)": {
            visibility: "visible",
            position: "initial",
          },
        },
        ".u_hide_lg": {
          "@media screen and (min-width: 1200px)": {
            visibility: "hidden",
            position: "absolute",
          },
        },
        ".u_hide_all": {
          visibility: "hidden",
          opacity: "0",
          position: "absolute",
        },
      });
    },
  ],
};
