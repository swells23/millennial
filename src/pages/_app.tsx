import { ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import React from "react";
import theme from "../utils/theme";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
