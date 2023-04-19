import { error, redirect } from '@sveltejs/kit';
import type { Actions } from '../$types';

export const actions: Actions = {
	default: async ({ locals: { supabase }, params: { event } }) => {
		const i = event.lastIndexOf('-');
		const url = event.slice(i + 1);

		const { error: err } = await supabase.from('registration').delete().eq('event_id', url);

		if (err) {
			throw error(404, {
				message: err.message,
				code: err.code
			});
		}

		throw redirect(302, '/' + event);
	}
};
