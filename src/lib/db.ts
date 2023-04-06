import { supabase } from './supabase';
import { error } from '@sveltejs/kit';

export async function deleteEvent(id: number) {
	try {
		const { data, error: err } = await supabase.from('event').delete().eq('id', id);
		console.log('dbData ' + data);
		console.error('dbErr ' + err);

		if (err) {
			throw error(404, { message: err.message, code: err.code });
		}
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (err: any) {
		throw error(404, { message: err, code: '' });
	}
}
