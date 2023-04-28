<script lang="ts">
	import dayjs from 'dayjs';
	import type { Event } from '../../../Types';
	import { deleteEvent } from '$lib/db';
	import { Calendar, EllipsisVertical, Icon, MapPin, PencilSquare, Trash } from 'svelte-hero-icons';
	import { slide } from 'svelte/transition';
	import {
		modalStore,
		type ModalSettings,
		Modal,
		type ModalComponent
	} from '@skeletonlabs/skeleton';
	import { browser } from '$app/environment';
	import CustomEventModal from '../modals/CustomEventModal.svelte';

	export let event: Event;

	let openDropdown = false;

	const handleDeleteEvent = async () => {
		deleteEvent(event.id);
		location.reload();
	};

	const deleteModal = () => {
		const del: ModalSettings = {
			type: 'confirm',
			title: event.name ? event.name : 'Delete Event',
			body: 'You are deleting this event for eternity. Do you want to delete it?',
			image: event.image_url ? event.image_url : '',
			response: (r: boolean) => (r ? handleDeleteEvent() : console.log(r))
		};
		if (browser) {
			modalStore.trigger(del);
		}
	};

	const editModal = () => {
		const comp: ModalComponent = { ref: CustomEventModal, props: { event: event } };
		const edit: ModalSettings = {
			type: 'component',
			component: comp,
			title: 'Custom Form',
			response(r) {
				console.log(r);
			}
		};
		modalStore.trigger(edit);
	};
	console.log('dashboard card');

</script>

<div class="card variant-ghost-tertiary">
	<div class="relative mb-4">
		<img
			src={event.image_url}
			alt={event.name}
			width="500"
			height="500"
			class="rounded-token object-cover aspect-square bg-surface-400-500-token"
		/>
		<div
			class="absolute bottom-0 left-0 right-0 bg-gradient-to-b from-transparent to-black/70 pt-12 rounded-b-box px-2 pb-2 flex justify-between"
		>
			<h2 class="font-medium text-lg md:text-xl unstyled">
				<a
					href={`/${event.name?.toLowerCase().replace(/\s+/g, '-')}-${event.id}`}
					class="unstyled text-white"
				>
					{event.name}
				</a>
			</h2>

			<button
				aria-label="event control"
				on:click={() => (openDropdown = !openDropdown)}
				class="z-50 text-white"><Icon src={EllipsisVertical} size="24" solid /></button
			>
			{#if openDropdown}
				<ul
					transition:slide={{ duration: 300 }}
					class="absolute right-0 z-[999] top-full p-4 variant-filled-surface rounded-token flex flex-col gap-2 mt-2"
				>
					<li>
						<button on:click={deleteModal} class="btn variant-ghost-error">
							<Icon src={Trash} size="24" /> <span>Delete</span>
						</button>
					</li>
					<li>
						<button on:click={editModal} class="btn variant-ghost-secondary w-full">
							<Icon src={PencilSquare} size="24" /> <span>Edit</span>
						</button>
					</li>
				</ul>
			{/if}
		</div>
	</div>
	<div class="flex flex-col gap-2 mb-2 px-2">
		<span class="flex gap-2 items-center">
			<Icon src={Calendar} size="24" />
			<time class="unstyled">{dayjs(event.date).format('YYYY MMMM DD - HH:mm')}</time>
		</span>
		<span class="flex gap-2 items-center">
			<Icon src={MapPin} size="24" />
			{event.location}
		</span>
	</div>
</div>

<Modal />
