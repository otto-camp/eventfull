<script lang="ts">
	import { slide } from 'svelte/transition';
	import dayjs from 'dayjs';
	import type { PageServerData } from './$types';
	import { Calendar, ChevronDown, Icon, MapPin } from 'svelte-hero-icons';

	export let data: PageServerData;
	const isEnrolled = data.enrolled ? data.enrolled : false;
	const event = data.event && data.event[0];

	let openDropdown = false;
</script>

<svelte:head>
	<title>{event ? event.name : 'Event Name'}</title>
</svelte:head>

<section class="max-w-7xl mx-auto px-2">
	{#if event}
		<div class="flex flex-col gap-4 items-center justify-center mt-6 md:mt-12 lg:mt-18">
			<h1 class="font-medium text-xl sm:text-2xl md:text-3xl lg:text-5xl">{event.name}</h1>
			<img
				src={event.image_url ? event.image_url : 'https://picsum.photos/2000/1000'}
				alt={event.name}
				width="100%"
				height="500"
				class="rounded-md object-cover h-[250px] md:h-[500px]"
			/>
			<div class="w-full flex flex-col md:flex-row items-center gap-4 justify-evenly">
				<div class="flex justify-between gap-4 md:gap-10 my-2">
					<span class="flex gap-1 items-center justify-center">
						<Icon src={Calendar} size="28" />
						<time class="text-lg md:text-xl unstyled"
							>{dayjs(event.date).format('YYYY MMMM DD - HH:mm')}</time
						>
					</span>
					<span class="flex gap-1 items-center justify-center text-lg md:text-xl">
						<Icon src={MapPin} size="28" />
						{event.location}
					</span>
				</div>
				{#if isEnrolled}
					<div class="flex gap-1 justify-center w-72 relative">
						<form
							action={`/${event.name?.toLowerCase().replace(/\s+/g, '-')}-${event.id}/cancel`}
							method="post"
							class="flex-1"
						>
							<button class="btn variant-filled-primary md:btn-lg w-full font-medium text-xl"
								>Cancel</button
							>
						</form>
						<button
							class="btn md:btn-lg text-xl font-medium !px-1 variant-filled-primary"
							on:click={() => (openDropdown = !openDropdown)}
							><Icon src={ChevronDown} size="24" /></button
						>
						{#if openDropdown}
							<ul
								transition:slide={{ duration: 300 }}
								class="absolute right-0 z-50 top-full p-4 variant-filled-primary rounded-token flex flex-col gap-2 mt-2"
							>
								<li>
									<button class="btn variant-filled-secondary w-full">Calendar</button>
								</li>
								<li>
									<button class="btn variant-filled-secondary w-full">Item 2</button>
								</li>
							</ul>
						{/if}
					</div>
				{:else}
					<form
						action={`/${event.name?.toLowerCase().replace(/\s+/g, '-')}-${event.id}/enroll`}
						method="post"
					>
						<button class="btn variant-filled-primary btn-lg w-72 font-medium text-xl"
							>Enroll</button
						>
					</form>
				{/if}
			</div>
			<p class="text-lg md:text-2xl">
				{event.long_description ? event.long_description : event.description}
			</p>
		</div>
	{/if}
</section>
