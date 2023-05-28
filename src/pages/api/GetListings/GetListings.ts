import { GOOGLE_DRIVE_API } from "../../../data/templateMeta";

interface ListingFolderProps {
  id: string;
  name: string;
  [key: string]: unknown;
}

interface ListingData {
  files: Array<ListingFolderProps>;
  [key: string]: unknown;
}

export default async function GetListings(): Promise<ListingData | undefined> {
  try {
    const res: Response = await fetch(
        new URL(
          `${GOOGLE_DRIVE_API}/files?q='${process.env.MILLENNIAL_LISTINGS_ID}'+in+parents&orderBy=name&key=${process.env.MILLENNIAL_API_KEY}`
        )
      ),
      listingData = await res.json();

    return listingData;
  } catch (err) {
    console.error(
      `Error: Unable to retreive data from GetListings API. ${err}`
    );

    return;
  }
}
