import { supabase } from '$lib/supabase';
import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params: { event }, parent }) => {
	if (event !== undefined) {
		const i = event.lastIndexOf('-');
		const url = event.slice(i + 1);

		const { data, error: err } = await supabase.from('event').select('*').eq('id', url);

		const user = await (await parent()).session;

		const { data: registration, error: registrationErr } = await supabase
			.from('registration')
			.select('*')
			.eq('attendee_email', user?.user.email ? user?.user.email : '')
			.eq('event_id', data ? data[0].id.toString() : '1');

		if (registrationErr) {
			throw error(404, { message: registrationErr.message, code: registrationErr.code });
		}

		if (err) {
			throw error(404, {
				message: err.message,
				code: err.code
			});
		}

		if (data == null) {
			throw error(404, {
				message: 'This event is not available',
				code: ''
			});
		}

		if (data) {
			return {
				event: data,
				enrolled: registration.length ? true : false
			};
		}
	}
};
