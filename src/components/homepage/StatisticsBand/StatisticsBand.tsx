/** @jsxImportSource @emotion/react */
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import React from "react";
import styles from "./StatisticsBand.styles";
import livingRoomImg from "../../../images/living-room.jpg";

export default function StatisticsBand() {
  return (
    <Container id="about" css={styles.root} maxWidth="xl">
      <Grid container spacing={8}>
        <Grid item md={6}>
          <Image css={styles.image} src={livingRoomImg} alt="" quality={100} />
        </Grid>
        <Grid item md={6}>
          <div css={styles.infoBlock}>
            <Typography gutterBottom>
              A descriptive paragraph that tells clients how good you are and
              proves the best choice that they&#39;ve made. This paragraph is
              also for those who are looking for a reliable agent.
            </Typography>
            <Typography>
              You can use a few enticing words and flaunt your capabilities that
              would relieve clients and encourage them to hire you right away.
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
                400+
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                css={styles.statNum}
                variant="h5"
                component="p"
                color="primary"
              >
                100+
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
  );
}

// Reminder: proptypes & defaultprops
