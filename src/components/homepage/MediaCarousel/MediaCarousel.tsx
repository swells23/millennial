/** @jsxImportSource @emotion/react */
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2"; // Experimental Grid
import Typography from "@mui/material/Typography";
import Image from "next/image";
import React from "react";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { GOOGLE_DRIVE_EXPORT } from "../../../data/templateMeta";
import styles from "./MediaCarousel.styles";

interface ImageProps {
  id: string;
  [key: string]: unknown;
}

interface ImageData {
  files: Array<ImageProps>;
  [key: string]: unknown;
}

export default function MediaCarousel({
  imageData,
}: {
  imageData: ImageData | undefined;
}) {
  const imgLoader = ({ src }: { src: string }) => {
    return `${GOOGLE_DRIVE_EXPORT}&id=${src}`;
  };

  const renderImgList = (): Array<React.ReactElement> | undefined => {
    return imageData?.files.map((item: ImageProps, idx: number) => {
      return (
        <SwiperSlide key={`sale-${idx + 1}`}>
          <Image
            css={styles.image}
            loader={imgLoader}
            src={item.id}
            alt={`sale ${idx + 1}`}
            fill
          />
        </SwiperSlide>
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
          {imageData && (
            <Grid md={4} mdOffset={2}>
              <Swiper
                css={styles.carousel}
                navigation={true}
                modules={[Autoplay, Navigation]}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
              >
                {renderImgList()}
              </Swiper>
            </Grid>
          )}
        </Grid>
      </Container>
    </div>
  );
}
