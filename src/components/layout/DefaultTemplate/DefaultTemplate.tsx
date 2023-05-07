import CssBaseline from "@mui/material/CssBaseline";
import Head from "next/head";
import React, { ReactNode } from "react";
import { GlobalFooter, GlobalNav } from "../../pattern";

export default function DefaultTemplate({
  children,
  title,
  metaDesc,
}: {
  children?: ReactNode;
  title?: string;
  metaDesc?: string;
}) {
  const pageTitle = title && `${title} - `;

  return (
    <>
      <Head>
        <title>{`${pageTitle}Millennial Realty & Investments LLC`}</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="description" content={metaDesc} />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={`${pageTitle}Millennial Realty & Investments LLC`}
        />
        <meta property="og:description" content={metaDesc} />
        <meta
          property="og:site_name"
          content={`${pageTitle}Millennial Realty & Investments LLC`}
        />
        <meta
          charSet="keywords"
          content="Real Estate,Millennial,Realty,Investments,Stanley Jones"
        />
      </Head>
      <CssBaseline />
      <GlobalNav />
      {children}
      <GlobalFooter />
    </>
  );
}

DefaultTemplate.defaultProps = {
  title: "",
  metaDesc: "",
};
