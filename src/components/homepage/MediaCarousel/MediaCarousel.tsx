/** @jsxImportSource @emotion/react */
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2"; // Experimental Grid
import Typography from "@mui/material/Typography";
import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { GOOGLE_DRIVE_EXPORT } from "../../../data/templateMeta";
import styles from "./MediaCarousel.styles";

export default function MediaCarousel({ imageList }: { imageList: any }) {
  const customRenderItem = (item: any, props: any) => (
    <item.type {...item.props} {...props} />
  );

  const imgLoader = ({ src }: { src: any }) => {
    return `${GOOGLE_DRIVE_EXPORT}&id=${src}`;
  };

  const imgList: any = imageList.files.map((item: any, idx: number) => {
    return (
      <Image
        css={styles.image}
        key={`sale-${idx + 1}`}
        loader={imgLoader}
        src={item.id}
        alt={`sale ${idx + 1}`}
        fill
      />
    );
  });
  // <video
  //   controls={true}
  //   preload="none"
  //   poster="https://drive.google.com/uc?export=view&id=1oaj28coPUZaCw2WgvoTKUYgf_zGfUZ_y"
  // >
  //   <source
  //     src="https://drive.google.com/uc?export=view&id=1eZgh5IUgr8c3Hubnzgky8kDOAqwANx00"
  //     type="video/mp4"
  //   />
  // </video>

  return (
    <div id="sales" css={styles.root}>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid css={styles.headline} md={4} mdOffset={1}>
            <Typography variant="h5" component="p">
              We provide{" "}
              <Typography component="span" variant="h5" color="primary.light">
                world-class support
              </Typography>{" "}
              for each of our clients to ensure they find the{" "}
              <Typography component="span" variant="h5" color="primary.light">
                home of their dreams
              </Typography>
              .
            </Typography>
          </Grid>
          <Grid md={4} mdOffset={2}>
            <Carousel
              css={styles.carousel}
              showStatus={false}
              showThumbs={false}
            >
              {imgList}
            </Carousel>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

// Reminder: proptypes & defaultprops
