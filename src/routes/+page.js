import { getDirectusClient } from '../lib/utils/get-directus-client.js';

export const prerender = true;

export async function load() {
	const directus = await getDirectusClient();

	const topicsResponse = await directus.items('topics').readByQuery({
		fields: ['*', 'docs.url'],
		filter: {
			title: {
				_nin: 'Get Started,Integrations,Billing'
			}
		}
	});

	// check

	const integrationsResponse = await directus.items('docs').readByQuery({
		fields: ['id', 'title', 'url', 'topic.title'],
		filter: {
			topic: {
				title: {
					_eq: 'Integrations'
				}
			},
			status: {
				_eq: 'published'
			}
		}
	});

	return {
		topics: topicsResponse.data,
		integrationArticles: integrationsResponse.data
	};
}
