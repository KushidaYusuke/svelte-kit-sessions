import { json, type RequestEvent, type RequestHandler } from '@sveltejs/kit';

// eslint-disable-next-line import/prefer-default-export
export const POST: RequestHandler = async (event: RequestEvent) => {
	const { session } = event.locals;
	if (!session.id) throw new Error('session is undefined');

	await session.save();

	return json({});
};
