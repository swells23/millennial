import React from "react";
import ThemeProvider from "./theme-provider";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider options={{ key: "mui" }}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
