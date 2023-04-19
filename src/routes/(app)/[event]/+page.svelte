<script lang="ts">
	import dayjs from 'dayjs';
	import type { PageServerData } from './$types';
	import { Calendar, Icon, MapPin } from 'svelte-hero-icons';

	export let data: PageServerData;
	const isEnrolled = data.enrolled ? data.enrolled : false;
	const event = data.event && data.event[0];
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
				<div class="flex justify-between gap-4 my-2">
					<span class="flex gap-1 items-center justify-center">
						<Icon src={Calendar} size="28" />
						<time class="text-lg md:text-xl"
							>{dayjs(event.date).format('YYYY MMMM DD - HH:mm')}</time
						>
					</span>
					<span class="flex gap-1 items-center justify-center text-lg md:text-xl">
						<Icon src={MapPin} size="28" />
						{event.location}
					</span>
				</div>
				{#if isEnrolled}
					<form
						action={`/${event.name?.toLowerCase().replace(/\s+/g, '-')}-${event.id}/cancel`}
						method="post"
					>
						<button class="btn btn-primary btn-lg btn-wide">Cancel</button>
						<div class="dropdown dropdown-end">
							<label tabindex="0" class="btn m-1">Click</label>
							<ul
								tabindex="0"
								class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
							>
								<li><button>Item 1</button></li>
								<li><button>Item 2</button></li>
							</ul>
						</div>
					</form>
				{:else}
					<form
						action={`/${event.name?.toLowerCase().replace(/\s+/g, '-')}-${event.id}/enroll`}
						method="post"
					>
						<button class="btn btn-primary btn-lg btn-wide">Enroll</button>
					</form>
				{/if}
			</div>
			<p class="text-lg md:text-2xl">
				{event.long_description ? event.long_description : event.description}
			</p>
		</div>
	{/if}
</section>
