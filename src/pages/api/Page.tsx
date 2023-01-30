import { DOMAIN, WP_API } from '../../data/templateMeta';

export default async function Page(slug: string) {
    const res = await fetch(`${DOMAIN}/${WP_API}/pages?slug=${slug}`),
        pageData = await res.json();

    return {
        props: {
            pageData
        }
    }
}