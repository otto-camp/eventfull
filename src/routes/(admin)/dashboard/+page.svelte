<script lang="ts">
	import { supabase } from '$lib/supabase';
	import type { User } from '@supabase/supabase-js';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import type { Event } from '../../../Types';
	import EventCard from '$lib/components/cards/EventCard.svelte';

	export let data: PageData;
	let user: User;
	let events: Event[] | null;

	data.session ? (user = data.session.user) : {};

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
	<div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
		{#if events}
			{#each events as event}
				<EventCard {event} />
			{/each}
		{/if}
	</div>
</section>
