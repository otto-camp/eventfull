import '$lib/supabase';

import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public';
import { createSupabaseServerClient } from '@supabase/auth-helpers-sveltekit';
import type { Handle, HandleServerError } from '@sveltejs/kit';

import * as SentryNode from '@sentry/node';
import { dev } from '$app/environment';

SentryNode.init({
	dsn: 'https://7891ab5b7c30423cafece9ee6e3b70af@o4504956394602496.ingest.sentry.io/4504956397748224',
	environment: 'production'
});

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.supabase = createSupabaseServerClient({
		supabaseUrl: PUBLIC_SUPABASE_URL,
		supabaseKey: PUBLIC_SUPABASE_ANON_KEY,
		event
	});

	event.locals.getSession = async () => {
		const {
			data: { session }
		} = await event.locals.supabase.auth.getSession();
		return session;
	};

	return resolve(event, {
		filterSerializedResponseHeaders(name) {
			return name === 'content-range';
		}
	});
};

export const handleError: HandleServerError = ({ error, event }) => {
	const errorId = crypto.randomUUID();

	!dev
		? SentryNode.captureException(error, {
				contexts: { sveltekit: { event, errorId } }
		  })
		: '';

	return {
		message: "An unexpected error occurred. We're working on it.",
		code: errorId
	};
};
