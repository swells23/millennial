import { GOOGLE_DRIVE_API } from "../../../data/templateMeta";

interface ImageData {
  carouselImageList: JSON;
}

export default async function GetCarouselImages(
  folderId: string | undefined
): Promise<ImageData | undefined> {
  try {
    const res: Response = await fetch(
        new URL(
          `${GOOGLE_DRIVE_API}/files?q='${folderId}'+in+parents&orderBy=name&key=${"AIzaSyCB1cshJM_hiarWyfhWUB9OP8W2HKn4Gjs"}`
        )
      ),
      carouselImageList: JSON = await res.json();

    return {
      carouselImageList,
    };
  } catch (err) {
    console.error(
      `Error: Unable to retreive data from GetCarouselImages API. ${err}`
    );

    return;
  }
}
