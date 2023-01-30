export default async function Page(slug: string) {
    const res = await fetch(`https://jonesmillennial.com/wp-json/wp/v2/pages?slug=${slug}`),
        pageData = await res.json();

    return {
        props: {
            pageData
        }
    }
}