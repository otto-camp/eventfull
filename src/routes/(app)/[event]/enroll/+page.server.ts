import { error, redirect } from '@sveltejs/kit';
import type { Actions } from '../$types';

export const actions: Actions = {
	default: async ({ locals: { supabase }, params: { event } }) => {
		const {
			data: { session },
			error: authError
		} = await supabase.auth.getSession();

		if (authError) {
			throw error(404, {
				message: authError.message,
				code: authError.name
			});
		}

		if (session === null || session === undefined) {
			throw redirect(302, '/login');
		}

		const i = event.lastIndexOf('-');
		const url = event.slice(i + 1);

		const { error: err } = await supabase.from('registration').insert({
			event_id: url,
			attendee_name: session.user.user_metadata.name,
			attendee_email: session.user.email
		});

		if (err) {
			throw error(404, {
				message: err.message,
				code: err.code
			});
		}

		throw redirect(302, '/' + event);
	}
};
