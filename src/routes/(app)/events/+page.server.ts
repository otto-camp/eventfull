import { error } from '@sveltejs/kit';
import { supabase } from '$lib/supabase';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const { data, error: dataError } = await supabase.from('event').select();

	if (dataError) {
		throw error(404, {
			message: dataError.message,
			code: dataError.code
		});
	}

	return {
		event: data
	};
};
