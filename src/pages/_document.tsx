/** @jsxImportSource @emotion/react */
import Grid from "@mui/material/Grid";
import Document, {
  DocumentContext,
  DocumentInitialProps,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";
import React from "react";

interface StylesObj {
  [key: string]: any;
}

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    const styles: StylesObj = {
      global: {
        "&": {
          scrollBehavior: "smooth !important",
        },
        "& body > div": {
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        },
      },
      bodySx: {
        "#__next": {
          "& > div[id]": {
            scrollMarginTop: {
              xs: "3.5rem",
              sm: "4rem",
            },
          },
        },
      },
    };

    return (
      <Html css={styles.global} lang="en">
        <Head />
        <Grid component="body" sx={styles.bodySx}>
          <Main />
          <NextScript />
        </Grid>
      </Html>
    );
  }
}

export default MyDocument;
