import React from "react";
import DefaultTemplate from "../components/layout/DefaultTemplate";
import Listings from "../components/listings/Listings";
import GetListings from "./api/GetListings";
import GetBatchImages from "./api/GetBatchImages";

interface ListingFolderProps {
  id: string;
  name: string;
  [key: string]: unknown;
}

interface ListingData {
  address: string;
  files: Array<ListingFolderProps>;
  [key: string]: unknown;
}

function ListingsPage({ listingData }: { listingData: Array<ListingData> }) {
  const metaDesc = "Browse through pictures of recently listed properties.";

  return (
    <DefaultTemplate metaDesc={metaDesc}>
      <Listings listingData={listingData} />
    </DefaultTemplate>
  );
}

export async function getServerSideProps() {
  const listings = await GetListings();

  let listingData;

  if (listings?.files) {
    listingData = await GetBatchImages(listings);
  }

  return { props: { listingData } };
}

export default ListingsPage;
