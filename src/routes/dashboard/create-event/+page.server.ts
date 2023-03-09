import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';
export const actions: Actions = {
	default: async ({ request, locals: { supabase } }) => {
		const formData = Object.fromEntries(await request.formData());
		const { data, error: err } = await supabase.auth.getUser();

		if (err) {
			fail(400, {
				message: err.message
			});
		}

		const { error } = await supabase.from('event').insert({
			name: formData.name,
			date: formData.date,
			location: formData.location,
			organizer_id: data.user?.id
		});

		if (error) {
			fail(400, {
				message: error.message
			});
		}

		return {
			success: true,
			formData
		};
	}
};
