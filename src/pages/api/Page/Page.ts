import { DOMAIN, WP_API } from "../../../data/templateMeta";
import { PageData } from "./Page.interfaces";

export default async function Page(
  slug: string
): Promise<PageData | undefined> {
  try {
    const fields = "title",
      res: Response = await fetch(
        new URL(`${DOMAIN}/${WP_API}/pages?slug=${slug}&_fields=${fields}`)
      ),
      pageData: JSON = await res.json();

    return {
      pageData,
    } as PageData;
  } catch (err) {
    console.error(`Error: Unable to retreive data from Page API. ${err}`);

    return;
  }
}
