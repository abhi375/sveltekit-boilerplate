import { getDirectusClient } from "$lib/utils/get-directus-client";

export async function load({  url }) {

  const directus = await getDirectusClient();

  let query = url.searchParams.get("query");

  const response = await directus.items("docs").readByQuery({
    search: query,
    limit: 5,
    fields: ["id", "title", "url", "topic.title", "topic.color"],
    filter: {
       status: {
        _eq: "published",
      },
    }
  });

  return { query, searchResults: response.data };
}
