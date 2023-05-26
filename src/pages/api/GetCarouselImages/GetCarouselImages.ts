import { GOOGLE_DRIVE_API } from "../../../data/templateMeta";

interface ImageProps {
  id: string;
  [key: string]: unknown;
}

interface ImageData {
  files: Array<ImageProps>;
  [key: string]: unknown;
}

export default async function GetCarouselImages(
  folderId: string | undefined
): Promise<ImageData | undefined> {
  try {
    const res: Response = await fetch(
        new URL(
          `${GOOGLE_DRIVE_API}/files?q='${folderId}'+in+parents&orderBy=name&key=${process.env.MILLENNIAL_API_KEY}`
        )
      ),
      data = await res.json();

    return data;
  } catch (err) {
    console.error(
      `Error: Unable to retreive data from GetCarouselImages API. ${err}`
    );

    return;
  }
}
