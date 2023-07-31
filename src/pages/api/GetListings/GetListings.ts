import { GOOGLE_DRIVE_API } from "../../../data/templateMeta";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const Geocodio = require("geocodio-library-node");
const geocoder = new Geocodio(process.env.MILLENNIAL_GEO_API_KEY);

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

export default async function GetListings(): Promise<ListingData | undefined> {
  try {
    const id = `${
      process.env.NEXT_VERCEL_ENV === "preview" ? "STAGING_" : ""
    }MILLENNIAL_LISTINGS_ID`;
    const res: Response = await fetch(
      new URL(
        `${GOOGLE_DRIVE_API}/files?q='${process.env[id]}'+in+parents&orderBy=name&key=${process.env.MILLENNIAL_API_KEY}`
      ),
      { cache: "no-store" }
    );

    let driveData = await res.json();
    driveData = driveData.files;

    let addressList = driveData.map((item: DriveFile) => {
      return item.name;
    });

    if (addressList.length) {
      await geocoder
        .geocode(addressList)
        .then((res: { results: Array<unknown> }) => {
          addressList = res.results;
        });
    }

    return { drive: driveData, addressList };
  } catch (err) {
    console.error(
      `Error: Unable to retreive data from GetListings API. ${err}`
    );

    return;
  }
}
