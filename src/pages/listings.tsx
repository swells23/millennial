import React from "react";
import DefaultTemplate from "../components/layout/DefaultTemplate";
import Listings from "../components/listings/Listings";
import GetListings from "./api/GetListings";
import GetBatchImages from "./api/GetBatchImages";

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

function ListingsPage({ listingData }: { listingData: ListingData }) {
  const metaDesc = "Browse through pictures of recently listed properties.";

  return (
    <DefaultTemplate metaDesc={metaDesc}>
      <Listings listingData={listingData} />
    </DefaultTemplate>
  );
}

export async function getServerSideProps() {
  const listingData = await GetListings();

  let listingImages;

  if (listingData) {
    listingImages = await GetBatchImages(listingData.drive);
    listingData.images = listingImages;
  }

  return { props: { listingData } };
}

export default ListingsPage;
