<script lang="ts">
	import dayjs from 'dayjs';
	import type { Event } from '../../../Types';
	import { deleteEvent } from '$lib/db';
	import { Calendar, EllipsisVertical, Icon, MapPin, PencilSquare, Trash } from 'svelte-hero-icons';

	export let event: Event;

	let showModal = false;

	const handleDeleteEvent = () => {
		deleteEvent(event.id).then(() => {
			location.reload();
		});
	};
</script>

<div class="flex flex-col h-full">
	<div class="flex justify-between gap-2 my-2">
		<a href={`/${event.name?.toLowerCase().replace(/\s+/g, '-')}-${event.id}`}>
			<h2 class="font-medium text-lg md:text-xl">{event.name}</h2>
		</a>
		<div class="dropdown dropdown-end dropdown-hover">
			<button aria-label="event control" class=""><Icon src={EllipsisVertical} size="24" /></button>
			<ul class="dropdown-content menu p-2 shadow-lg shadow-base-100 bg-base-100 rounded-box">
				<li>
					<button on:click={() => (showModal = true)} class="hover:scale-110 transition-all p-2">
						<Icon src={Trash} size="22" class="stroke-error" />
					</button>
				</li>
				<li>
					<button class="hover:scale-110 transition-all p-2">
						<Icon src={PencilSquare} size="22" class="stroke-secondary" />
					</button>
				</li>
			</ul>
		</div>
	</div>
	<div class="gap-2 flex flex-col">
		<a href={`/${event.name?.toLowerCase().replace(/\s+/g, '-')}-${event.id}`}>
			<img
				src={event.image_url ? event.image_url : 'https://picsum.photos/1000/1000'}
				alt={event.name}
				class="rounded-box"
			/>
		</a>
		<!-- details -->
		<div class="flex flex-col gap-2">
			<span class="flex gap-2 items-center">
				<Icon src={Calendar} size="24" />
				<time>{dayjs(event.date).format('YYYY MMMM DD - HH:mm')}</time>
			</span>
			<span class="flex gap-2 items-center">
				<Icon src={MapPin} size="24" />
				{event.location}
			</span>
		</div>
		<!-- button group -->
		<!-- <div class="flex flex-col h-full justify-evenly">
	
	
		</div> -->
	</div>
</div>

<!--Delete Modal -->
{#if showModal}
	<div class="fixed flex items-center justify-center inset-0 bg-black/60 h-full w-full">
		<div class="modal-box relative">
			<h3 class="text-lg font-bold">Delete event!</h3>
			<p class="py-4">
				You've been selected for a chance to get one year of subscription to use Wikipedia for free!
			</p>
			<div class="btn-group w-full">
				<button on:click={() => (showModal = false)} class="btn flex-1 text-lg">Cancel</button>
				<button on:click={handleDeleteEvent} class="btn btn-error flex-1 text-lg">Delete</button>
			</div>
		</div>
	</div>
{/if}
<!-- //Delete Modal -->
