/** @jsxImportSource @emotion/react */
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
          "& > div[id]": {
            scrollMarginTop: "3.5rem",
          },
        },
      },
    };

    return (
      <Html css={styles.global} lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
