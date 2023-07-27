import { GOOGLE_DRIVE_API } from "../../../data/templateMeta";

interface DriveFile {
  id: string;
  name: string;
  [key: string]: unknown;
}

interface ListingImages {
  files: Array<DriveFile>;
  address: string;
  [key: string]: unknown;
}

export default async function GetBatchImages(
  folderList: Array<DriveFile>
): Promise<Array<ListingImages> | undefined> {
  try {
    const listingImages: Array<ListingImages> = await Promise.all(
      folderList.map(async (folder) => {
        const res: Response = await fetch(
          new URL(
            `${GOOGLE_DRIVE_API}/files?q='${folder.id}'+in+parents&orderBy=name&key=${process.env.MILLENNIAL_API_KEY}`
          )
        );
        const data = await res.json();

        data.address = folder.name;

        return data as ListingImages;
      })
    );

    return listingImages;
  } catch (err) {
    console.error(
      `Error: Unable to retreive data from GetBatchImages API. ${err}`
    );

    return;
  }
}
