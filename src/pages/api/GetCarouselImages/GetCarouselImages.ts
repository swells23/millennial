import { GOOGLE_DRIVE_API } from "../../../data/templateMeta";
import { ImageData } from "./GetCarouselImages.interfaces";

export default async function GetCarouselImages(): Promise<
  ImageData | undefined
> {
  try {
    const res: Response = await fetch(
        new URL(
          `${GOOGLE_DRIVE_API}/files?q='${process.env.MILLENNIAL_CAROUSEL_IMAGES_ID}'+in+parents&orderBy=name&key=${process.env.MILLENNIAL_API_KEY}`
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
