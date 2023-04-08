<script lang="ts">
	import dayjs from 'dayjs';
	import type { Event } from '../../../Types';
	import { deleteEvent } from '$lib/db';
	import { EllipsisVertical, Icon } from 'svelte-hero-icons';

	export let event: Event;

	let showModal = false;

	const handleDeleteEvent = () => {
		deleteEvent(event.id).then(() => {
			location.reload();
		});
	};
</script>

<div class="flex flex-col">
	<div class="flex justify-between gap-2 my-2">
		<a href={`/${event.name?.toLowerCase().replace(/\s+/g, '-')}-${event.id}`}>
			<h2 class="font-medium text-lg md:text-xl">{event.name}</h2>
		</a>
		<div class="dropdown dropdown-end dropdown-hover">
			<button aria-label="event control" class=""
				><Icon src={EllipsisVertical} size="24" /></button
			>
			<ul class="dropdown-content menu p-2 shadow-lg shadow-base-100 bg-base-100 rounded-box">
				<li>
					<button on:click={() => (showModal = true)} class="hover:scale-110 transition-all p-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							class="fill-error"
							viewBox="0 0 448 512"
							><path
								d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
							/></svg
						>
					</button>
				</li>
				<li>
					<button class="hover:scale-110 transition-all p-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							class="fill-info"
							viewBox="0 0 512 512"
							><path
								d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"
							/></svg
						>
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
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					class="fill-current"
					viewBox="0 0 448 512"
					><path
						d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"
					/></svg
				>
				<time>{dayjs(event.date).format('YYYY MMMM DD - HH:mm')}</time>
			</span>
			<span class="flex gap-2 items-center">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					class="fill-current"
					viewBox="0 0 384 512"
					><path
						d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z"
					/></svg
				>
				{event.location}
			</span>
		</div>
		<!-- button group -->
		<!-- <div class="flex flex-col h-full justify-evenly">
	
	
		</div> -->
	</div>
</div>

<!-- Modal -->
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
<!-- //Modal -->
