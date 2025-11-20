const marsTheme = {
  palette: {
    primary: {
      main: "#E67E0F",
      light: "#ffbf5e",
      dark: "#ab5102",
    },
    secondary: {
      main: "#43AA8B",
      light: "#3bebb6",
      dark: "#1c7a5e",
    },
    background: {
      paper: "#32373B",
    },
  },
  components: {
    MuiAccordion: {
      styleOverrides: {
        root: {
          color: "white",
        },
      },
    },
  },
};

export default marsTheme;
