<script lang="ts">
	import { randomColor } from '$lib/utils/RandomColor';
	import dayjs from 'dayjs';
	import type { Event } from '../../../Types';
	import { supabase } from '$lib/supabase';
	import { Icon, MapPin } from 'svelte-hero-icons';

	export let event: Event;

	const handleView = async () => {
		await supabase.rpc('update_event_statistic_viewed', {
			id: event.id
		});
	};
</script>

<a
	href={`/${event.name?.toLowerCase().replace(/\s+/g, '-')}-${event.id}`}
	on:click={handleView}
	class="!no-underline"
>
	<article class="card card-hover variant-ghost-tertiary text-token">
		<img
			src={event.image_url}
			alt={event.name}
			class="rounded-t-md border-b-4 rounded-b-lg h-[200px] w-full object-cover"
			style={`border-color:${randomColor()}`}
		/>
		<div class="px-4 py-2">
			<h2 class="font-medium text-lg md:text-xl unstyled truncate">{event.name}</h2>
			<div class="flex justify-between my-2 border-b pb-2">
				<time class="unstyled text-sm">{dayjs(event.date).format('YYYY MMMM DD - HH:mm')}</time>
				<span class="flex gap-2 items-center justify-center text-sm">
					<Icon src={MapPin} size="24" />
					{event.location}
				</span>
			</div>
			<p class="text-sm sm:text-base h-12 line-clamp-3">
				{event.description}
			</p>
		</div>
	</article>
</a>
