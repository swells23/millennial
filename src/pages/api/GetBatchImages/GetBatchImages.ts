import { GOOGLE_DRIVE_API } from "../../../data/templateMeta";

interface ListingFolderProps {
  id: string;
  name: string;
  [key: string]: unknown;
}

interface ListingData {
  files: Array<ListingFolderProps>;
  address?: string;
  [key: string]: unknown;
}

export default async function GetBatchImages(
  folderList: ListingData | undefined
): Promise<Array<ListingData> | undefined> {
  try {
    const finalData =
      folderList?.files &&
      (await Promise.all(
        folderList.files.map(async (folder) => {
          const res: Response = await fetch(
              new URL(
                `${GOOGLE_DRIVE_API}/files?q='${folder.id}'+in+parents&orderBy=name&key=${process.env.MILLENNIAL_API_KEY}`
              )
            ),
            data = await res.json();
          data.address = folder.name;
          return data;
        })
      ));

    return finalData;
  } catch (err) {
    console.error(
      `Error: Unable to retreive data from GetBatchImages API. ${err}`
    );

    return;
  }
}
