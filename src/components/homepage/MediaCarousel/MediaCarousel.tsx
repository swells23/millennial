/** @jsxImportSource @emotion/react */
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2"; // Experimental Grid
import Typography from "@mui/material/Typography";
import Image from "next/image";
import React, { ReactElement } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { GOOGLE_DRIVE_EXPORT } from "../../../data/templateMeta";
import styles from "./MediaCarousel.styles";

interface ImageListItem {
  id: string;
  [key: string]: unknown;
}

interface ImageList {
  files: Array<ImageListItem>;
  [key: string]: unknown;
}

export default function MediaCarousel({ imageList }: { imageList: ImageList }) {
  const imgLoader = ({ src }: { src: string }) => {
      return `${GOOGLE_DRIVE_EXPORT}&id=${src}`;
    },
    renderImgList = (): Array<ReactElement> => {
      return imageList?.files.map((item: ImageListItem, idx: number) => {
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
    };

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
              {renderImgList()}
            </Carousel>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
