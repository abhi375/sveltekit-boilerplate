import { getDirectusClient } from '../lib/utils/get-directus-client.js';

export async function load() {
	const directus = await getDirectusClient();

	const updatesResponse = await directus.items('release_notes').readByQuery({
		fields: ['*', 'topics.topics_id.title'],
		filter: {
			status: {
				_eq: 'published'
			}
		}
	});

	const topArticlesResponse = await directus.items('docs').readByQuery({
		fields: ['id', 'title', 'date_created', 'url', 'topic.title', 'topic.url'],
		limit: 3,
		filter: {
			favorite: {
				_eq: 'true'
			}
		}
	});

	const searchResponse = await directus.items('docs').readByQuery({
		fields: ['id', 'title', 'subtitle', 'url', 'content', 'topic.url', 'topic.color'],
		limit: -1,
		filter: {
			status: {
				_eq: 'published'
			}
		}
	});

	return {
		changelogs: updatesResponse.data,
		topArticles: topArticlesResponse.data,
		documents: searchResponse.data
	};
}
