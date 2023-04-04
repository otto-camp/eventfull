import { error, redirect, type Actions } from '@sveltejs/kit';

export const actions: Actions = {
	default: async ({ locals: { supabase } }) => {
		const { error: authError } = await supabase.auth.signOut();

		if (authError) {
			throw error(404, {
				message: authError.message,
				code: authError.name
			});
		}

		throw redirect(303, '/');
	}
};
