import React from "react";
import DefaultTemplate from "../components/layout/DefaultTemplate";
import Listings from "../components/listings/Listings";
import GetListings from "./api/GetListings";

interface ListingDataItem {
  id: string;
  name: string;
  [key: string]: unknown;
}

interface ListingData {
  files: Array<ListingDataItem>;
  [key: string]: unknown;
}

function ListingsPage({ listingData }: { listingData: ListingData }) {
  const metaDesc = ""; // REMINDER

  return (
    <DefaultTemplate metaDesc={metaDesc}>
      <Listings listingData={listingData} />
    </DefaultTemplate>
  );
}

export async function getServerSideProps() {
  const listingData = await GetListings();

  return { props: listingData };
}

export default ListingsPage;
