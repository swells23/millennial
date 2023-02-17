import { createTheme, responsiveFontSizes, Theme } from "@mui/material/styles";

let theme: Theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: "#008c75",
    },
  },
});
//3B6962 original
//008c75
//628f1b
//007c65
//a4394c
//6066bf
//b8482e
//7655b1
//c03335
//9570c9
//a32548
//a37f25
//2c89da
//8a674f
//a06c71
//1e79b3

theme = responsiveFontSizes(theme);

export default theme;
