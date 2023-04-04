<script lang="ts">
	import { randomColor } from '$lib/utils/RandomColor';
	import dayjs from 'dayjs';
	import type { Event } from '../../../Types';
	import { supabase } from '$lib/supabase';

	export let event: Event;

	const handleView = async () => {
		await supabase.rpc('update_event_statistic_viewed', {
			id: event.id
		});
	};
</script>

<a href={`/${event.name?.toLowerCase().replace(/\s+/g, '-')}-${event.id}`} on:click={handleView}>
	<article
		class="flex flex-col gap-2 border cursor-pointer border-black rounded-md lg:hover:scale-105 lg:hover:shadow-2xl lg:hover:shadow-black/30 transition-all duration-200"
	>
		<img
			src={event.image_url ? event.image_url : 'https://picsum.photos/2000/800'}
			alt={event.name}
			class="rounded-t-md border-b-4 rounded-b-lg h-[200px] object-cover"
			style={`border-color:${randomColor()}`}
		/>
		<div class="p-4">
			<h2 class="font-medium text-lg sm:text-xl md:text-2xl truncate">{event.name}</h2>
			<div class="flex justify-between my-2">
				<time>{dayjs(event.date).format('YYYY MMMM DD - HH:mm')}</time>
				<span class="flex gap-2 items-center justify-center">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 384 512"
						><path
							d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z"
						/></svg
					>
					{event.location}
				</span>
			</div>
			<p class="text-sm sm:text-base h-12 line-clamp-3">
				{event.description}
			</p>
		</div>
	</article>
</a>
