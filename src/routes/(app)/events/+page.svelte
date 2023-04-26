<script lang="ts">
	import EventCard from '$lib/components/cards/EventCard.svelte';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
	const events = data.event ? data.event : [];
</script>

<svelte:head>
	<title>Events</title>
</svelte:head>

<section class="px-2 max-w-7xl mx-auto">
	<!-- <div class="h-64 w-full bg-slate-100 my-4 rounded-box" /> -->
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-hidden">
		{#each events as event}
			<EventCard {event} />
		{/each}
	</div>
</section>
