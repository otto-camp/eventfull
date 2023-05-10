<script lang="ts">
	import Editor from '$lib/editor/Editor.svelte';
	import { Icon, Photo } from 'svelte-hero-icons';

	let chosenEvent: string = '';
	const eventTypes = [{ name: 'conference', image: '/conference.webp' }];
</script>

<svelte:head>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="px-2 max-w-6xl mx-auto mt-2">
	<h1 class="text-center font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-7xl mb-6 md:mb-12">
		Create Event
	</h1>

	<div class="grid grid-cols-2 gap-4 mb-6">
		{#each eventTypes as e}
			<div
				on:keydown={() => {
					chosenEvent = e.name;
				}}
				on:click={() => {
					chosenEvent = e.name;
				}}
				class="cursor-pointer relative flex items-center justify-center"
			>
				<img
					src={e.image}
					alt={e.name}
					class={`opacity-30 hover:opacity-70 duration-200 transition-all ${
						e.name === chosenEvent && '!opacity-100 ring-2 ring-primary-500-400-token'
					}`}
				/>
				<span class="absolute pointer-events-none xs:text-2xl md:text-4xl font-semibold capitalize"
					>{e.name}</span
				>
			</div>
		{/each}
	</div>

	{#if chosenEvent === 'conference'}
		<form action="?/conference" method="post" class="grid gap-4">
			<label class="label w-full">
				Name
				<input type="text" name="name" class="input" />
			</label>
			<label class="label w-full">
				Location
				<input type="text" name="location" class="input" />
			</label>
			<label class="label w-full">
				Date
				<input type="datetime-local" name="date" class="input" />
			</label>
			<div
				class="rounded-token textarea border-2 border-dashed p-4 py-8 relative flex justify-center items-center min-h-[5rem]"
			>
				<input
					type="file"
					name="thumbnail"
					aria-label="thumbnail"
					class="w-full absolute inset-0 z-[1] opacity-0 cursor-pointer"
				/>
				<div class="grid justify-items-center text-center gap-1">
					<Icon src={Photo} size="42" />
					<strong>Upload a File</strong>
					<span>or drag and drop</span>
				</div>
			</div>
			<label class="label w-full">
				Speakers
				<input type="text" name="speakers" class="input" />
			</label>
			<label class="label w-full">
				Duration
				<input type="number" name="duration" class="input" />
			</label>
			<Editor content="Write something about your event" />
			<button type="submit" class="btn w-full ">Submit</button>
		</form>
	{/if}
</section>
