import { supabase } from '$lib/supabase';
import type { PageLoad } from './$types';
import { fail } from '@sveltejs/kit';
export const load: PageLoad = async ({ params: { event } }) => {
	if (event !== undefined) {
		const { data, error } = await supabase.from('event').select('*').eq('id', event);

		if (error) {
			fail(400, {
				error
			});
		}

		if (data !== null) {
			return {
				event: data
			};
		}
	}
};
