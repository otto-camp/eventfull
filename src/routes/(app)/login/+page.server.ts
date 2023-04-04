import { redirect, type Actions, error } from '@sveltejs/kit';

export const actions: Actions = {
	default: async ({ locals: { supabase } }) => {
		const { data, error: authError } = await supabase.auth.signInWithOAuth({
			provider: 'google'
		});

		console.log(authError);

		if (authError) {
			throw error(400, {
				message: authError.message,
				code: authError.name
			});
		}

		if (data.url) {
			throw redirect(303, data.url);
		}
	}
};
