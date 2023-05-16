import CssBaseline from "@mui/material/CssBaseline";
import Head from "next/head";
import React, { ReactNode } from "react";
import { GlobalFooter, GlobalNav, Seo } from "../../pattern";

export default function DefaultTemplate({
  children,
  title,
  metaDesc,
}: {
  children?: ReactNode;
  title?: string;
  metaDesc?: string;
}) {
  const titleTransform = title && `${title} - `,
    pageTitle = `${titleTransform}Millennial Realty & Investments LLC`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <Seo title={pageTitle} description={metaDesc} />
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
