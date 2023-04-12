

export async function load({ fetch, url }) {
    const fetchSidebarLinks = async () => {
        const response = await fetch(
            `${'https://cms.samespace.com'}/items/topics?fields[]=id,title,url,docs.title,docs.url,docs.topic.url,color`
        );
        const sidebarLinksData = await response.json();

        const links = sidebarLinksData.data.flatMap((section) => section.docs);

        return {
            sidebarLinks: sidebarLinksData.data,
            links
        };
    };

    return {
        sidebarLinks: (await fetchSidebarLinks()).sidebarLinks,
        links: (await fetchSidebarLinks()).links,
        url
    };
}
