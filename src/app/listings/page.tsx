import { Metadata } from "next";
import React from "react";
import { DOMAIN } from "../../data/templateMeta";
import GetBatchImages from "../../pages/api/GetBatchImages";
import GetListings from "../../pages/api/GetListings";
import ListingsPageClient from "./page-client";

const META_TITLE = "Listings - Millennial Realty & Investments LLC";
const META_DESCRIPTION =
  "Browse through pictures of recently listed properties.";

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

export default async function ListingsPage() {
  const listingData = await getData();

  return <ListingsPageClient listingData={listingData} />;
}

async function getData() {
  const listingData = await GetListings();

  let listingImages;

  if (listingData) {
    listingImages = await GetBatchImages(listingData.drive);
    listingData.images = listingImages;
  }

  return listingData;
}
