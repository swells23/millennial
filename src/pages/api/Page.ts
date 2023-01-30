import { DOMAIN, WP_API } from '../../data/templateMeta';

interface PageData {
    props: {
        pageData: JSON
    }
}

export default async function Page(slug: string): Promise<PageData | undefined> {
    try {
        const res: Response = await fetch(`${DOMAIN}/${WP_API}/pages?slug=${slug}`),
            pageData: JSON = await res.json();

        return {
            props: {
                pageData
            }
        }
    } catch (err: any) {
        console.error(`Error: Unable to retreive page data. ${err.name}: ${err.message}`);

        return;
    }
}