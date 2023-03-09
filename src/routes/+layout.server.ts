import type { LayoutServerLoad } from './$types';

export const load = (async ({ locals: { getSession } }) => {
	return {
		session: getSession()
	};
}) satisfies LayoutServerLoad;

