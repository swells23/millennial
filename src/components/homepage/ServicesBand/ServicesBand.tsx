/** @jsxImportSource @emotion/react */
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";
import styles, { propStyles } from "./ServicesBand.styles";

export default function SerivesBand() {
  return (
    <Grid id="services" css={styles.root} sx={styles.rootSx}>
      <Container maxWidth="xl">
        <Grid css={styles.heading}>
          <Typography variant="h3">Our Services</Typography>
        </Grid>
        <Grid container spacing={propStyles.spacing}>
          <Grid item md={4}>
            <Typography variant="h5" gutterBottom>
              Short Sales
            </Typography>
            <Typography>
              If you are under water on your mortgage, we can negotiate with the
              banks on your behalf to sell your home, keep home foreclosure off
              of your record and set you on track to own another home.
            </Typography>
          </Grid>
          <Grid item md={4}>
            <Typography variant="h5" gutterBottom>
              Property Management
            </Typography>
            <Typography>
              We are licensed and experienced property managers, we have
              experience with tenant screening, experience with the legal
              eviction process and maximize the return on investment process.
            </Typography>
          </Grid>
          <Grid item md={4}>
            <Typography variant="h5" gutterBottom>
              Construction
            </Typography>
            <Typography>
              Our licenses General Contractors are experienced in residential
              and commercial properties. We will manage the project from start
              to finish to meet your deadlines, take responsibility for safety
              and whatever else is required for your project.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}

// Reminder: proptypes & defaultprops
