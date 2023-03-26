import { fail, redirect, type Actions } from '@sveltejs/kit';

export const actions: Actions = {
	default: async ({ locals: { supabase } }) => {
		const { data, error } = await supabase.auth.signInWithOAuth({
			provider: 'google'
		});

		console.log(error);

		if (error) {
			return fail(400, {
				message: error
			});
		}

		throw redirect(303, data.url);
	}
};
