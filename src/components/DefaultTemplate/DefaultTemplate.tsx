import Head from "next/head";
import React from "react";
import GlobalNav from "../GlobalNav";
import GlobalFooter from "../GlobalFooter";
import CssBaseline from "@mui/material/CssBaseline";

export default function DefaultTemplate({ children, title }: any) {
  // add interface.ts
  const pageTitle = title && `${title} | `;

  return (
    <>
      <Head>
        <title>{`${pageTitle}Millennial Realty & Investments LLC`}</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <CssBaseline />
      <GlobalNav />
      {children}
      <GlobalFooter />
    </>
  );
}

// Reminder: proptypes & defaultprops
