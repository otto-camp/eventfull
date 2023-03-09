<script lang="ts">
	import type { User } from '@supabase/supabase-js';
	import type { PageData } from './$types';

	export let data: PageData;
	let user: User;
	data.session ? (user = data.session.user) : {};
</script>

<svelte:head>
	<title>{data.session?.user.user_metadata.name}</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="px-2 max-w-6xl mx-auto mt-2">
	<a href="/dashboard/create-event" class="btn btn-primary">Create Event</a>
	<div class="">

	</div>
</section>
