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

interface ImageData {
  carouselImageList: JSON;
}

interface StaticProps {
  props: ImageData | undefined;
}

interface ImageListItem {
  id: string;
  [key: string]: unknown;
}

interface ImageList {
  files: Array<ImageListItem>;
  [key: string]: unknown;
}

function HomePage({ carouselImageList }: { carouselImageList: ImageList }) {
  const title = "Home",
    metaDesc =
      "Buying a home can be challenging, so let us make it simple. Millennial Realty Investments strives to provide you with first-class servicing for your next real estate venture.";

  return (
    <DefaultTemplate title={title} metaDesc={metaDesc}>
      <Hero />
      <StatisticsBand />
      <MediaCarousel imageList={carouselImageList} />
      <ServicesBand />
      <ContactBand />
    </DefaultTemplate>
  );
}

export async function getStaticProps(): Promise<StaticProps> {
  const carouselImageList: ImageData | undefined = await GetCarouselImages();

  return { props: carouselImageList };
}

export default HomePage;
