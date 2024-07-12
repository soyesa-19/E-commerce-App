/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        myColor: "#333333",
        brandPrimary: "var(--color-brand-primary)",
        brandPrimaryForeground: "var(--color-brand-primary-foreground)",
        brandSecondary: "var(--color-brand-secondary)",
        brandSecondaryForeground: "var(--color-brand-secondary-foreground)",
        brandTertiary: "var(--color-brand-tertiary)",
        brandTertiaryForeground: "var(--color-brand-tertiary-foreground)",
        brandDark: "var(--color-brand-dark)",
        brandDark5: "var(--color-brand-dark5)",
        brandTextPrimary: "var(--color-brand-text-primary)",
        brandTextSecondary: "var(--color-brand-text-secondary)",
        brandWhite: "var(--color-brand-white)",
        brandGray: "var(--color-brand-gray)",
        brandGray2: "var(--color-brand-gray2)",
        brandGray3: "var(--color-brand-gray3)",
        brandGray4: "var(--color-brand-gray4)",
        brandStroke: "var(--color-brand-stroke)",
        brandRed: "var(--color-brand-red)",
        brandYellowDark: "var(--color-brand-yellowDark)",
        brandSuccess: "var(--color-brand-success)",
        brandGreen: "var(--color-brand-green)",
        brandDisable: "var(--color-brand-notAvilable)",
        brandBooked: "var(--color-brand-booked)",
        brandproceedDisabled: "var(--color-brand-prceedDisabled)",
        brandLightBlue: "var(--color-brand-lightBlue)",
      },
      boxShadow: { brandShadow: "0px 1px 3px 0px rgba(166, 175, 195, 0.4)" },
      height: { "60vh": "60vh", "80vh": "80vh", "100vh": "100vh" },
      keyframes: {
        slideIn: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideOut: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        slideIn: "slideIn 0.5s ease-in-out forwards",
        slideOut: "slideOut 0.5s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
