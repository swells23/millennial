/** @jsxImportSource @emotion/react */
import Facebook from "@mui/icons-material/Facebook";
import Instagram from "@mui/icons-material/Instagram";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Twitter from "@mui/icons-material/Twitter";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import heroImg from "../../images/hero.jpg";
import mobileHeroImg from "../../images/mobile-hero.jpg";
import customUseMediaQuery from "../../utils/customUseMediaQuery";
import styles from "./Hero.styles";

export default function Hero() {
  const renderSocials = (): Array<any> => {
    const components: Array<any> = [Facebook, Twitter, Instagram, LinkedIn];

    return components.map((Component) => {
      const id = Component.type.render.displayName;

      return (
        <Component key={`social-${id}`} color="primary" fontSize="large" />
      );
    });
  };

  const renderImg = () => {
    const isMobile = customUseMediaQuery(
      useTheme().breakpoints.down("sm").split(" ")[1]
    );
    const component = (imgSrc: any) => {
      return <Image src={imgSrc} alt="" quality={100} fill priority />;
    };

    if (isMobile === undefined) {
      return (
        <>
          {component(heroImg)}
          {component(mobileHeroImg)}
        </>
      );
    }

    return isMobile ? component(mobileHeroImg) : component(heroImg);
  };

  return (
    <div id="home" css={styles.root}>
      <Grid css={styles.heroImg} sx={styles.heroImgSx}>
        {renderImg()}
      </Grid>
      <Container css={styles.heroBand} maxWidth="md">
        <div css={styles.heroHeading}>
          <Typography variant="h5" fontWeight={600}>
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
    </div>
  );
}

// Reminder: proptypes & defaultprops
