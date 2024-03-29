import { supabase } from './supabase';
import { error } from '@sveltejs/kit';

export async function deleteEvent(id: number) {
	try {
		const { data, error: err } = await supabase.rpc('delete_event', { e_id: id });
		console.log('dbData ' + data);
		console.error('dbErr ' + err?.message);

		if (err) {
			throw error(404, { message: err.message, code: err.code });
		}
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (err: any) {
		throw error(404, { message: err.body.message, code: err.body.code });
	}
}
