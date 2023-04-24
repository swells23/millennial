/** @jsxImportSource @emotion/react */
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";
import styles from "./ServicesBand.styles";

export default function SerivesBand() {
  return (
    <Grid id="services" css={styles.root} sx={styles.rootSx}>
      <Container maxWidth="xl">
        <Grid css={styles.heading}>
          <Typography variant="h3">Our Services</Typography>
        </Grid>
        <Grid container spacing={8}>
          <Grid item md={6}>
            <video
              css={styles.video}
              controls={true}
              preload="none"
              poster="https://drive.google.com/uc?export=view&id=1oaj28coPUZaCw2WgvoTKUYgf_zGfUZ_y"
            >
              <source
                src="https://drive.google.com/uc?export=view&id=1eZgh5IUgr8c3Hubnzgky8kDOAqwANx00"
                type="video/mp4"
              />
            </video>
          </Grid>
          <Grid item md={6}>
            <Grid container spacing={3}>
              <Grid item md={12}>
                <Typography variant="h5" gutterBottom>
                  Property Management
                </Typography>
                <Typography>
                  We are licensed and experienced property managers, we have
                  experience with tenant screening, experience with the legal
                  eviction process and maximize the return on investment
                  process.
                </Typography>
              </Grid>
              <Grid item md={12}>
                <Typography variant="h5" gutterBottom>
                  Construction
                </Typography>
                <Typography>
                  Our licenses General Contractors are experienced in
                  residential and commercial properties. We will manage the
                  project from start to finish to meet your deadlines, take
                  responsibility for safety and whatever else is required for
                  your project.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}
