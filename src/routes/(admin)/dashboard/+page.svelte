<script lang="ts">
	import DashboardEventCard from '$lib/components/cards/DashboardEventCard.svelte';
</script>

<svelte:head>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="px-2 mt-2 max-w-7xl mx-auto">
	<!-- <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
		<div class="bg-primary-700 h-60 rounded-token den" />
		<div class="bg-secondary-700 h-60 rounded-token" />
		<div class="bg-warning-700 h-60 sm:col-span-2 lg:col-span-1 rounded-token" />
	</div> -->

	<hr class="border my-4 border-primary-900-50-token rounded-full" />

	<div class="grid grid-cols-1 xs:grid-cols-2 xl:grid-cols-3 gap-4 mb-20">
		<!-- {#if events}
			{#each events as event}
				<DashboardEventCard {event} />
			{/each}
		{/if} -->
	</div>
</section>
