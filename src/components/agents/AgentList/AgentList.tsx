/** @jsxImportSource @emotion/react */
import Email from "@mui/icons-material/Email";
import Phone from "@mui/icons-material/Phone";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";
import styles from "./AgentList.styles";

interface Agent {
  name: string;
  title: string;
  email?: string;
  phone?: string;
  picture: string;
  linkedin?: string;
}

export default function AgentList({
  data,
}: {
  data: Array<Agent> | undefined;
}) {
  const renderCardName = (name: string, title: string) => {
      return (
        <>
          <Typography variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {title}
          </Typography>
        </>
      );
    },
    renderAgentCards = () =>
      data?.map((item: Agent) => {
        return (
          <Grid item key={item.name} xs={12} lg={6}>
            <Card sx={styles.card}>
              <Grid container direction={{ xs: "row", sm: "row" }}>
                <Grid item sx={styles.cardImageWrapperSx} xs={5} sm={4}>
                  <CardMedia
                    css={styles.cardImage}
                    sx={styles.cardImageSx}
                    image={item.picture}
                    title={item.name}
                  />
                </Grid>
                <Grid
                  item
                  sx={[styles.cardNameSx, styles.cardNameMobileSx]}
                  xs={7}
                >
                  <CardContent>
                    {renderCardName(item.name, item.title)}
                  </CardContent>
                </Grid>
                <Grid item xs={4} sm={8}>
                  <CardContent color="secondary">
                    <Grid sx={[styles.cardNameSx, styles.cardNameDesktopSx]}>
                      {renderCardName(item.name, item.title)}
                    </Grid>
                    <Grid css={styles.contactInfo} sx={styles.contactInfoSx}>
                      {item.phone && (
                        <Typography css={styles.textIcon}>
                          <Phone color="primary" />
                          {item.phone}
                        </Typography>
                      )}
                      {item.email && (
                        <Typography css={styles.textIcon}>
                          <Email color="primary" />
                          {item.email}
                        </Typography>
                      )}
                    </Grid>
                  </CardContent>
                  {item.linkedin && (
                    <CardActions>
                      <Button href={item.linkedin} size="small" target="_blank">
                        LinkedIn
                      </Button>
                    </CardActions>
                  )}
                </Grid>
              </Grid>
            </Card>
          </Grid>
        );
      });

  return (
    <Container css={styles.root} maxWidth="xl">
      <Grid container spacing={4}>
        {renderAgentCards()}
      </Grid>
    </Container>
  );
}
