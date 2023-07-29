import { Metadata } from "next";
import React from "react";
import { DOMAIN } from "../data/templateMeta";
import GetCarouselImages from "../pages/api/GetCarouselImages";
import HomePageClient from "./page-client";

const META_TITLE = "Millennial Realty & Investments LLC";
const META_DESCRIPTION =
  "Buying a home can be challenging, so let us make it simple. Millennial Realty & Investments strives to provide you with world-class servicing for your next real estate venture.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: DOMAIN,
    siteName: META_TITLE,
    type: "website",
  },
};

export default async function HomePage() {
  const imageData = await getData();

  return <HomePageClient imageData={imageData} />;
}

async function getData() {
  const imageData = await GetCarouselImages(
    process.env.MILLENNIAL_CAROUSEL_IMAGES_ID
  );

  return imageData;
}
