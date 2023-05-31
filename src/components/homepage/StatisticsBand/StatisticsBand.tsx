/** @jsxImportSource @emotion/react */
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import React from "react";
import backgroundImg from "../../../assets/bg-1.jpg";
import livingRoomImg from "../../../assets/living-room.jpg";
import styles from "./StatisticsBand.styles";

export default function StatisticsBand() {
  return (
    <div id="about" css={styles.root}>
      <Container maxWidth="xl">
        <Image
          css={styles.backgroundImg}
          src={backgroundImg}
          alt="background"
          fill
        />
        <Grid container spacing={8}>
          <Grid item md={6}>
            <Image css={styles.image} src={livingRoomImg} alt="living room" />
          </Grid>
          <Grid item md={6}>
            <div css={styles.infoBlock}>
              <Typography>
                Millennial Realty & Investments is a North Carolina based
                company that has served clients for over 6 years. Our
                experienced brokers have a deep understanding of the real estate
                market and possess the skills necessary to help you secure your dream
                home.
              </Typography>
              <Typography>
                Above all, we are committed to providing exceptional customer
                service, ensuring that our clients have a positive and
                stress-free experience throughout the buying or selling process.
                A successful real estate agent is not just a salesperson, but a
                trusted advisor who helps clients make informed decisions that
                align with their unique goals and needs. Our agents are here for you.
              </Typography>
            </div>
            <Grid container>
              <Grid item xs={6}>
                <Typography
                  css={styles.statNum}
                  variant="h5"
                  component="p"
                  color="primary"
                >
                  300+
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  css={styles.statNum}
                  variant="h5"
                  component="p"
                  color="primary"
                >
                  200+
                </Typography>
              </Grid>
              <Grid item xs={6}>
                Projects Done
              </Grid>
              <Grid item xs={6}>
                Happy Clients
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
