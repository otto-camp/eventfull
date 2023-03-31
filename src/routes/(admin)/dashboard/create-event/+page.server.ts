import { PUBLIC_SUPABASE_URL } from '$env/static/public';
import { error, fail } from '@sveltejs/kit';
import { randomUUID } from 'crypto';
import type { Actions } from './$types';
export const actions: Actions = {
	default: async ({ request, locals: { supabase } }) => {
		const rawData = await request.formData();
		const picture = rawData.get('picture');

		const {
			data: { user },
			error: authError
		} = await supabase.auth.getUser();

		if (user === null || user === undefined) {
			throw error(404, {
				message: 'User not found'
			});
		}

		if (authError) {
			fail(400, {
				message: authError.message
			});
		}

		if (user.email) {
			if (picture) {
				const { data, error: storageError } = await supabase.storage
					.from('event')
					.upload(user.email + '/' + randomUUID(), picture);
				if (storageError) {
					throw error(404, {
						message: storageError.message
					});
				}
				const { error: eventError } = await supabase.from('event').insert({
					name: rawData.get('name'),
					location: rawData.get('location'),
					date: rawData.get('date'),
					organizer_id: user.id,
					organizer_name: user.user_metadata.name,
					type: rawData.get('type'),
					category: rawData.get('category'),
					description: rawData.get('description'),
					long_description: rawData.get('longDescription'),
					image_url: PUBLIC_SUPABASE_URL + '/storage/v1/object/public/event/' + data.path
				});

				if (eventError) {
					throw error(404, {
						message: eventError.message
					});
				}
			}
		}

		return {
			success: true
		};
	}
};
