/** @jsxImportSource @emotion/react */
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import React from "react";
import styles from "./GlobalFooter.styles";

export default function GlobalFooter() {
  return (
    <Paper
      css={styles.root}
      sx={styles.rootSx}
      component="footer"
      square
      elevation={8}
    >
      <Container maxWidth="xl">
        <Typography variant="body2" component="h6">
          Copyright &#169; Millennial Realty & Investments LLC
        </Typography>
      </Container>
    </Paper>
  );
}
