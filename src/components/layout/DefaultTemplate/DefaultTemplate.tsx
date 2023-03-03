import Head from "next/head";
import React from "react";
import { GlobalFooter, GlobalNav } from "../../pattern";
import CssBaseline from "@mui/material/CssBaseline";

export default function DefaultTemplate({ children, title, metaDesc }: any) {
  // add interface.ts
  const pageTitle = title && `${title} | `;

  return (
    <>
      <Head>
        <title>{`${pageTitle}Millennial Realty & Investments LLC`}</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="description" content={metaDesc || ""} />
      </Head>
      <CssBaseline />
      <GlobalNav />
      {children}
      <GlobalFooter />
    </>
  );
}

// Reminder: proptypes & defaultprops
