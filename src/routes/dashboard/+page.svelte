<script lang="ts">
	import { randomColor } from '$lib/RandomColor';
	import { supabase } from '$lib/supabase';
	import type { User } from '@supabase/supabase-js';
	import { onMount } from 'svelte';
	import type { PageData } from '../$types';
	import dayjs from 'dayjs';
	import format from 'dayjs/plugin/customParseFormat';
	dayjs.extend(format);

	export let data: PageData;
	let user: User;
	let events: Event | null;

	data.session ? (user = data.session.user) : {};

	type Event = {
		date: string | null;
		description: string | null;
		id: number;
		inserted_at: string;
		location: string | null;
		name: string | null;
		organizer_id: string | null;
		updated_at: string;
	}[];

	onMount(async () => {
		const { data, error } = await supabase.from('event').select('*');
		events = data;
		console.log(data);
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
				<article
					class="flex flex-col gap-2 border cursor-pointer border-black rounded-md hover:scale-105 hover:shadow-2xl hover:shadow-black/30 transition-all duration-200"
				>
					<img
						src="https://picsum.photos/500/200"
						alt="event"
						class="rounded-t-md border-b-4 rounded-b-lg"
						style={`border-color:${randomColor()}`}
					/>
					<div class="p-4">
						<h2 class="font-medium text-lg sm:text-xl md:text-2xl truncate">{event.name}</h2>
						<div class="flex justify-between my-2">
							<span>{dayjs(event.date).format('YYYY MMMM DD - HH:mm')}</span>
							<span class="flex gap-2 items-center justify-center">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 384 512"
									><path
										d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z"
									/></svg
								>
								{event.location}
							</span>
						</div>
						<p class="text-sm sm:text-base line-clamp-3">
							{event.description}
						</p>
					</div>
				</article>
			{/each}
		{:else}
			<h1>Nothing to see here</h1>
		{/if}
	</div>
</section>
