/** @jsxImportSource @emotion/react */
import Email from "@mui/icons-material/Email";
import Phone from "@mui/icons-material/Phone";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";
import styles, { propStyles } from "./ContactBand.styles";

export default function ContactBand() {
  return (
    <Container id="contact" css={styles.root} maxWidth="xl">
      <Grid container sx={styles.containerSx} spacing={propStyles.spacing}>
        <Grid item sm={6}>
          <Typography variant="h5" gutterBottom>
            Get in Touch
          </Typography>
          <Typography>
            Buying a home can be challenging, so let us make it simple. Call or
            email today!
          </Typography>
        </Grid>
        <Grid item sm={6}>
          <Typography variant="h5" gutterBottom>
            Contact Details
          </Typography>
          <Typography css={styles.textIcon} gutterBottom>
            <Phone color="primary" />
            Phone: +1 919-906-5754
          </Typography>
          <Typography css={styles.textIcon}>
            <Email color="primary" />
            Email: sjonessellshomes@gmail.com
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

// Reminder: proptypes & defaultprops
