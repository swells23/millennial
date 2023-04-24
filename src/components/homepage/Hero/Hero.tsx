/** @jsxImportSource @emotion/react */
import Facebook from "@mui/icons-material/Facebook";
import Instagram from "@mui/icons-material/Instagram";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Twitter from "@mui/icons-material/Twitter";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material/SvgIcon/SvgIcon";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";
import heroImg from "../../../assets/hero.jpg";
import mobileHeroImg from "../../../assets/mobile-hero.jpg";
import styles from "./Hero.styles";

export default function Hero() {
  const renderSocials = (): Array<ReactNode> => {
    const components: Array<
      OverridableComponent<SvgIconTypeMap<object, "svg">> & {
        muiName: string;
        type?: { render: { displayName: string } };
      }
    > = [Facebook, Twitter, Instagram, LinkedIn];

    return components.map((Component, idx) => {
      const id: string | number = Component.type?.render.displayName || idx;

      return (
        <Component
          key={`social-${id}`}
          sx={styles.socialIconSx}
          fontSize="large"
        />
      );
    });
  };

  return (
    <Grid id="home" css={styles.root} sx={styles.rootSx}>
      <Grid css={styles.heroImg} sx={styles.heroImgSx}>
        <Image id="hero-img" src={heroImg} alt="" fill priority />
        <Image id="mobile-hero-img" src={mobileHeroImg} alt="" fill priority />
      </Grid>
      <Container css={styles.heroBand} maxWidth="md">
        <div css={styles.heroHeading}>
          <Typography variant="h5" fontWeight={600} color="secondary.dark">
            Let us help you make sound real estate investments.
          </Typography>
        </div>
        <Link href="/#services" css={styles.ctaButton}>
          <Button variant="contained" size="large">
            Get started
          </Button>
        </Link>
      </Container>
      <Container
        css={styles.socialsWrapper}
        sx={styles.socialsWrapperSx}
        maxWidth="xl"
      >
        <Grid css={styles.socials} sx={styles.socialsSx}>
          {renderSocials()}
        </Grid>
      </Container>
    </Grid>
  );
}
