import { supabase } from '$lib/supabase';
import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
export const load: PageLoad = async ({ params: { event } }) => {
	if (event !== undefined) {
		const i = event.lastIndexOf('-');
		const url = event.slice(i + 1);

		const { data, error: err } = await supabase.from('event').select('*').eq('id', url);

		if (err) {
			throw error(404, {
				message: err.message
			});
		}

		if (data !== null || data!== undefined) {
			return {
				event: data
			};
		}
	}
};
