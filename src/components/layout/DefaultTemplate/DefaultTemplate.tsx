import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import { GlobalFooter, GlobalNav } from "../../pattern";

export default function DefaultTemplate({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <>
      <CssBaseline />
      <GlobalNav />
      {children}
      <GlobalFooter />
    </>
  );
}
