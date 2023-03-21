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
import Page from "./api/Page";

function HomePage({ pageData, carouselImageList }: any) {
  // add interface.ts
  const title: string = pageData?.[0]?.title.rendered || "", // error handle this
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
  const data = await Page("home");
  const carouselImageList = await GetCarouselImages();

  return { props: carouselImageList };
}

export default HomePage;
