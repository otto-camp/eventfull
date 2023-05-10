import { PUBLIC_SUPABASE_URL } from '$env/static/public';
import { error, redirect } from '@sveltejs/kit';
import { randomUUID } from 'crypto';
import type { Event } from '../../../../Types';
import type { Actions } from './$types';

export const actions: Actions = {
	conference: async ({ request, locals: { supabase, getSession } }) => {
		const rawData = await request.formData();
		const thumbnail = rawData.get('thumbnail');
		console.log(thumbnail);

		const session = await getSession();

		if (!session) {
			throw redirect(302, '/login');
		}

		if (thumbnail) {
			const { data: thumb, error: storageError } = await supabase.storage
				.from('event')
				.upload(session.user.email + '/' + randomUUID(), thumbnail);

			if (storageError) {
				throw error(404, {
					message: storageError.message,
					code: storageError.name
				});
			}

			const { data: event, error: eventError } = await supabase
				.from('events')
				.insert({
					name: rawData.get('name'),
					location: rawData.get('location'),
					date: rawData.get('date'),
					invited_emails: [''],
					thumbnail_url: PUBLIC_SUPABASE_URL + '/storage/v1/object/public/event/' + thumb,
					organizer_id: session.user.id
				})
				.select()
				.returns<Event[]>();

			if (eventError) {
				throw error(403, {
					message: eventError.message,
					code: eventError.code
				});
			}

			if (event) {
				const { error: confError } = await supabase.from('conferences').insert({
					id: event[0].id,
					long_description: 'LONG DESCRIPTION',
					speakers: rawData.get('speakers'),
					duration: rawData.get('duration')
				});

				if (confError) {
					throw error(403, {
						message: confError.message,
						code: confError.code
					});
				}
			}
		}

		return {
			success: true
		};
	}
};
