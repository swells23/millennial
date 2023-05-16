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
import { OverridableComponent } from "@mui/material/OverridableComponent";
import Skeleton from "@mui/material/Skeleton";
import { SvgIconTypeMap } from "@mui/material/SvgIcon/SvgIcon";
import Typography from "@mui/material/Typography";
import Image from "next/image";
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
          {name ? name : <Skeleton css={styles.nameSkeleton} />}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {title ? title : <Skeleton css={styles.titleSkeleton} />}
        </Typography>
      </>
    );
  },
    renderContact = (
      name: string,
      contactType: string | undefined,
      Icon: OverridableComponent<SvgIconTypeMap<object, "svg">>
    ) => {
      if (name) {
        if (contactType) {
          return (
            <Typography css={styles.textIcon}>
              <Icon color="primary" />
              {contactType}
            </Typography>
          );
        } else {
          return;
        }
      }

      return <Skeleton css={styles.contactSkeleton} />;
    },
    renderLinks = (name: string, linkedin: string | undefined) => {
      if (name) {
        if (linkedin) {
          return (
            <CardActions>
              <Button href={linkedin} size="small" target="_blank">
                LinkedIn
              </Button>
            </CardActions>
          );
        } else {
          return;
        }
      }

      return (
        <CardActions>
          <Skeleton css={styles.linksSkeleton} />
        </CardActions>
      );
    },
    renderAgentCards = () =>
      data?.map((item: Agent) => {
        console.log("TEST: ", item.picture)
        return (
          <Grid item key={item.name} xs={12} lg={6}>
                        <Image src="https://drive.google.com/uc?export=view&id=1yU-oNNV9B_SgP2dwjyQqsImgRKoNCzxW" alt="stringtest3" height={100} width={100} />

            <Image src={item.picture} alt="test1" height={100} width={100} />

            <Card css={styles.card}>
              <Image src={item.picture} alt="test2" height={200} width={200} />

              <Grid container>
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
                <Grid item xs={12} sm={8}>
                  <CardContent color="secondary">
                    <Grid sx={[styles.cardNameSx, styles.cardNameDesktopSx]}>
                      {renderCardName(item.name, item.title)}
                    </Grid>
                    <Grid css={styles.contactInfo} sx={styles.contactInfoSx}>
                      {renderContact(item.name, item.phone, Phone)}
                      {renderContact(item.name, item.email, Email)}
                    </Grid>
                  </CardContent>
                  {renderLinks(item.name, item.linkedin)}
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
