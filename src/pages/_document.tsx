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

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    const styles: any = {
      global: {
        "&": {
          scrollBehavior: "smooth !important",
        },
        "&, body, #__next": {
          height: "100%",
        },
      },
    };

    return (
      <Html css={styles.global}>
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
