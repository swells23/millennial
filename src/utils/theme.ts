import { createTheme, responsiveFontSizes, Theme } from "@mui/material/styles";

let theme: Theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#458F42",
    },
    secondary: {
      main: "#37474F",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: ({ theme }) => ({
          "&:hover": {
            backgroundColor: theme.palette.primary.dark,
          },
        }),
      },
    },
  },
});
//5868D0
//6066bf
//8A225E
//B74E64
//455A64

//458F42
//37474F
//87B785 light of light primary
//214620 dark of dark primary

theme = responsiveFontSizes(theme);

export default theme;
