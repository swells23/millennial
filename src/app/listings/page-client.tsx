"use client";
import React from "react";
import DefaultTemplate from "../../components/layout/DefaultTemplate";
import Listings from "../../components/listings/Listings";

interface ListingData {
  drive: Array<DriveFile>;
  addressList: Array<Address>;
  images?: Array<ListingImages>;
}

interface DriveFile {
  id: string;
  name: string;
  [key: string]: unknown;
}

interface Address {
  query: string;
  response: {
    input: any;
    results: Array<any>;
  };
}

interface ListingImages {
  files: Array<DriveFile>;
  address: string;
  [key: string]: unknown;
}

export default function ListingsPageClient({
  listingData,
}: {
  listingData: ListingData | undefined;
}) {
  return (
    <DefaultTemplate>
      <Listings listingData={listingData} />
    </DefaultTemplate>
  );
}
