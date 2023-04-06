<script lang="ts">
	import { supabase } from '$lib/supabase';
	import type { PostgrestError, User } from '@supabase/supabase-js';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import type { Event } from '../../../Types';
	import EventCard from '$lib/components/cards/EventCard.svelte';
	import EventTableCard from '$lib/components/cards/EventTableCard.svelte';

	export let data: PageData;
	let user: User;
	let events: Event[] | null;
	let error: PostgrestError | null;

	data.session ? (user = data.session.user) : {};

	onMount(async () => {
		const { data, error: err } = await supabase.from('event').select('*');
		events = data;
		error = err;
	});
</script>

<svelte:head>
	<title>{user.user_metadata.name}</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="px-2 max-w-6xl mx-auto mt-2">
	{#if error}
		<p>{error.message}</p>
	{/if}

	<div class="grid grid-cols-1 xl:grid-cols-2 gap-4">
		{#if events}
			{#each events as event}
				<EventTableCard {event} />
			{/each}
		{/if}
	</div>

	<!-- <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
		{#if events}
			{#each events as event}
				<EventCard {event} />
			{/each}
		{/if}
	</div> -->
</section>
