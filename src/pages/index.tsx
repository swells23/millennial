import React from "react";
import {
  ContactBand,
  Hero,
  MediaCarousel,
  ServicesBand,
  StatisticsBand,
} from "../components/homepage";
import DefaultTemplate from "../components/layout/DefaultTemplate";
import GetCarouselImages from "./api/GetCarouselImages";

interface ImageProps {
  id: string;
  [key: string]: unknown;
}

interface ImageData {
  files: Array<ImageProps>;
  [key: string]: unknown;
}

interface ServerSideProps {
  props: {
    imageData: ImageData | undefined;
  };
}

function HomePage({ imageData }: { imageData: ImageData }) {
  const metaDesc =
    "Buying a home can be challenging, so let us make it simple. Millennial Realty & Investments strives to provide you with world-class servicing for your next real estate venture.";

  return (
    <DefaultTemplate metaDesc={metaDesc}>
      <Hero />
      <StatisticsBand />
      <MediaCarousel imageData={imageData} />
      <ServicesBand />
      <ContactBand />
    </DefaultTemplate>
  );
}

export async function getServerSideProps(): Promise<ServerSideProps> {
  const imageData = await GetCarouselImages(
    process.env.MILLENNIAL_CAROUSEL_IMAGES_ID
  );

  return { props: { imageData } };
}

export default HomePage;
