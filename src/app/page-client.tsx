"use client";
import React from "react";
import {
  ContactBand,
  Hero,
  MediaCarousel,
  ServicesBand,
  StatisticsBand,
} from "../components/homepage";
import DefaultTemplate from "../components/layout/DefaultTemplate";

interface ImageProps {
  id: string;
  [key: string]: unknown;
}

interface ImageData {
  files: Array<ImageProps>;
  [key: string]: unknown;
}

export default function HomePageClient({
  imageData,
}: {
  imageData: ImageData | undefined;
}) {
  return (
    <DefaultTemplate>
      <Hero />
      <StatisticsBand />
      <MediaCarousel imageData={imageData} />
      <ServicesBand />
      <ContactBand />
    </DefaultTemplate>
  );
}
