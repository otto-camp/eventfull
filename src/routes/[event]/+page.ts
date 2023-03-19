import { supabase } from '$lib/supabase';
import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
export const load: PageLoad = async ({ params: { event } }) => {
	if (event !== undefined) {
		const { data, error: err } = await supabase.from('event').select('*').eq('id', event);

		if (err) {
			throw error(404, {
				message: err.message
			});
		}

		if (data !== null) {
			return {
				event: data
			};
		}
	}
};
