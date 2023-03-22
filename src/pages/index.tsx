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

function HomePage({ carouselImageList }: any) {
  // add interface.ts
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

export async function getStaticProps() {
  const carouselImageList = await GetCarouselImages();

  return { props: carouselImageList };
}

export default HomePage;
