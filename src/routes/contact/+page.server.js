export const prerender = false;

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		const portalId = '8401088';
		const formId = 'aa6846ef-9d13-42c5-b94a-5d307417835f';

		try {
			const email = data.get('email');
			const subject = data.get('subject');
			const description = data.get('description');

			const url = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`;

			const body = JSON.stringify({
				portalId,
				formId,
				fields: [
					{
						name: 'email',
						value: email
					},
					{
						name: 'TICKET.subject',
						value: subject
					},
					{
						name: 'TICKET.content',
						value: description
					}
				]
			});

			const headers = {
				'Content-Type': 'application/json'
			};

			fetch(url, {
				method: 'POST',
				body,
				headers
			});
		} catch (error) {
			return fail(422, {
				description: 'something went wrong',
				error: error.message
			});
		}

		return {
			status: 200,
			message: 'Form Submitted Successfully'
		};
	}
};
