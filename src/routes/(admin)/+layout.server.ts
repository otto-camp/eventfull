import type { Profile } from '../../Types';
import type { LayoutServerLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load = (async ({ locals: { supabase, getSession } }) => {
	const session = await getSession();

	const { data, error: err } = await supabase
		.from('profiles')
		.select('*')
		.eq('id', session?.user.id)
		.returns<Profile[]>();

	if (err) {
		throw error(404, {
			message: err.message,
			code: err.code
		});
	}
	return {
		user: data[0]
	};
}) satisfies LayoutServerLoad;
