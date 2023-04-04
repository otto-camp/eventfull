import '$lib/supabase';

import * as SentrySvelte from '@sentry/svelte';
import type { HandleClientError } from '@sveltejs/kit';

SentrySvelte.init({
	dsn: 'https://7891ab5b7c30423cafece9ee6e3b70af@o4504956394602496.ingest.sentry.io/4504956397748224',
	environment: 'production'
});

export const handleError: HandleClientError = ({ error, event }) => {
	const errorId = crypto.randomUUID();
	SentrySvelte.captureException(error, {
		contexts: { sveltekit: { event, errorId } }
	});

	return {
		message: "An unexpected error occurred. We're working on it!",
		code: errorId
	};
};
