import { supabase } from '$lib/supabase';
import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params: { event } }) => {
	if (event !== undefined) {
		const i = event.lastIndexOf('-');
		const url = event.slice(i + 1);

		const { data, error: err } = await supabase.from('event').select('*').eq('id', url);

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
		
		if (data !== null || data !== undefined) {
			return {
				event: data
			};
		}
	}
};
