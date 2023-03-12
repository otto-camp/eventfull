<script lang="ts">
	import { randomColor } from '$lib/RandomColor';
	import { supabase } from '$lib/supabase';
	import type { User } from '@supabase/supabase-js';
	import { onMount } from 'svelte';
	import type { PageData } from '../$types';

	export let data: PageData;
	let user: User;
	data.session ? (user = data.session.user) : {};

	type Event = {
		date: string | null;
		id: number;
		inserted_at: string;
		location: string | null;
		name: string | null;
		organizer_id: string | null;
		updated_at: string;
	}[];

	let events: Event | null;
	onMount(async () => {
		const { data, error } = await supabase.from('event').select('*');
		events = data;
	});
</script>

<svelte:head>
	<title>{user.user_metadata.name}</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="px-2 max-w-6xl mx-auto mt-2">
	<div class="flex mb-6">
		<a href="/dashboard/create-event" class="btn btn-primary">Create Event</a>
	</div>
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
		{#if events}
			{#each events as event}
				<article class="flex flex-col gap-2 border border-black rounded-md">
					<img
						src="https://picsum.photos/500/200"
						alt="event"
						class="rounded-t-md border-b-4 rounded-b-lg"
						style={`border-color:${randomColor()}`}
					/>
					<div class="p-4">
						<h2 class="font-medium text-lg sm:text-xl md:text-2xl">{event.name}</h2>
						<p class="text-sm sm:text-base">
							{event.location}
						</p>
					</div>
				</article>
			{/each}
		{:else}
			<h1>Nothing to see here</h1>
		{/if}
	</div>
</section>
