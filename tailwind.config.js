module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: {
<<<<<<< HEAD
    content: [
      // Example content paths...
      "./public/**/*.html",
      "./src/**/*.{js,jsx,ts,tsx,vue}",
    ],
=======
    content: ["./src/**/*.js", "./src/**/**/*.js"],
>>>>>>> 7ae4ad4a182b28aa5d9d73ad9f3d040d6bc884b0
  },
  theme: {
    fill: (theme) => ({
      red: theme("colors.red.primary"),
    }),
    colors: {
      white: "#ffffff",
      blue: {
        medium: "#0095f6",
      },
      black: {
        light: "#262626",
        faded: "#00000059",
      },
      gray: {
        base: "#616161",
        background: "#fafafa",
        primary: "#dbdbdb",
      },
      red: {
        primary: "#ed4956",
      },
    },
  },
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
};
