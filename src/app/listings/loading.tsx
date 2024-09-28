import React from "react";
import DefaultTemplate from "../../components/layout/DefaultTemplate";
import Listings from "../../components/listings/Listings";

export default function Loading() {
  return (
    <DefaultTemplate>
      <Listings listingData={undefined} />
    </DefaultTemplate>
  );
}
