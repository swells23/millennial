/** @jsxImportSource @emotion/react */
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2"; // Experimental Grid
import Typography from "@mui/material/Typography";
import Image from "next/image";
import React, { useRef } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./MediaCarousel.styles";

export default function MediaCarousel({ imageList }: { imageList: any }) {
  const videoRef: any = useRef(null);

  const VideoSlide = ({
    isSelected,
    children,
  }: {
    isSelected?: boolean;
    children?: React.ReactNode;
  }) => {
    if (isSelected === false) {
      videoRef.current?.pause();
    }

    return <>{children}</>;
  };
  const customRenderItem = (item: any, props: any) => (
    <item.type {...item.props} {...props} />
  );

  const imgList: any = imageList.files.map((item: any, idx: number) => {
    console.log(item.id)
    return (
      <Image
        key={`sale-${idx + 1}`}
        src={`https://drive.google.com/uc?export=view&id=${item.id}`}
        alt={`sale ${idx + 1}`}
        fill
      />
    );
  });

  return (
    <div id="sales" css={styles.root}>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid css={styles.headline} md={4} mdOffset={1}>
            <Typography variant="h5" component="p">
              We provide{" "}
              <Typography component="span" variant="h5" color="primary">
                world-class support
              </Typography>{" "}
              for each of our clients to ensure they find the{" "}
              <Typography component="span" variant="h5" color="primary">
                home of their dreams
              </Typography>
              .
            </Typography>
          </Grid>
          <Grid md={4} mdOffset={2}>
            <Carousel
              css={styles.carousel}
              renderItem={customRenderItem}
              showStatus={false}
              showThumbs={false}
            >
              <VideoSlide>
                <video
                  ref={videoRef}
                  css={styles.video}
                  controls={true}
                  preload="none"
                  poster="https://drive.google.com/uc?export=view&id=1dLTo2CKant5vePNIELbojBxiZTtYFPVP"
                >
                  <source
                    src="https://drive.google.com/uc?export=view&id=1eZgh5IUgr8c3Hubnzgky8kDOAqwANx00"
                    type="video/mp4"
                  />
                </video>
              </VideoSlide>
              {imgList}
            </Carousel>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

// Reminder: proptypes & defaultprops
