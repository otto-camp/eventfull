<script lang="ts">
	import { supabase } from '$lib/supabase';
	import type { PostgrestError, User } from '@supabase/supabase-js';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import type { Event } from '../../../Types';
	import DashboardEventCard from '$lib/components/cards/DashboardEventCard.svelte';

	export let data: PageData;
	let user: User;
	let events: Event[] | null;
	let error: PostgrestError | null;

	data.session ? (user = data.session.user) : {};

	onMount(async () => {
		const { data, error: err } = await supabase
			.from('event')
			.select('*')
			.eq('organizer_id', user.id);
		events = data;
		error = err;
	});
</script>

<svelte:head>
	<title>{user.user_metadata.name}</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="px-2 mt-2 max-w-7xl mx-auto overflow-hidden isolate">
	{#if error}
		<p>{error.message}</p>
	{/if}
	<h1 class="font-medium p-2 text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4">
		My Events
	</h1>

	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
		<div class="bg-base-content h-60 rounded-box" />
		<div class="bg-base-content h-60 rounded-box" />
		<div class="bg-base-content h-60 sm:col-span-2 lg:col-span-1 rounded-box" />
	</div>

	<hr class="border-t my-4 border-base-content rounded-full" />

	<div class="grid grid-cols-1 xs:grid-cols-2 xl:grid-cols-3 gap-4">
		{#if events}
			{#each events as event}
				<DashboardEventCard {event} />
			{/each}
		{/if}
	</div>
</section>
