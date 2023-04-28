<script lang="ts">
	import Editor from '$lib/editor/Editor.svelte';

	const types = [
		'Party',
		'Concert',
		'Performance',
		'Exhibition',
		'Sports',
		'Conference',
		'Workshop'
	];
	const categories = [
		'Business',
		'Social',
		'Sporting',
		'Cultural',
		'Educational',
		'Charitable',
		'Community'
	];
</script>

<svelte:head>
	<title>Create Event</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="px-2 max-w-6xl mx-auto mt-2">
	<h1 class="text-center font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-7xl">
		Create Event
	</h1>
	<form
		enctype="multipart/form-data"
		method="post"
		action="/dashboard/create-event"
		class="my-8 sm:my-12 md:my-20 flex flex-col gap-4 items-center"
	>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl w-full">
			<div>
				<label for="event name" class="font-medium text-token">Name</label>
				<input type="text" id="event name" name="name" placeholder="Name" class="input w-full" />
			</div>
			<div>
				<label for="location" class="font-medium text-token">Location</label>
				<input
					type="text"
					id="location"
					name="location"
					placeholder="Location"
					class="input w-full"
				/>
			</div>
			<div>
				<label for="date" class="font-medium text-token">Date</label>
				<input type="datetime-local" id="date" name="date" class="input  w-full" />
			</div>

			<div>
				<label for="picture" class="font-medium text-token">Picture</label>
				<input type="file" accept="image/*" id="picture" name="picture" class="input w-full" />
			</div>
			<div>
				<label for="type" class="font-medium text-token">Type</label>
				<select name="type" id="type" class="select w-full">
					<option disabled selected>Choose event type</option>
					{#each types as type}
						<option value={type}>{type}</option>
					{/each}
				</select>
			</div>
			<div>
				<label for="category" class="font-medium text-token">Category</label>
				<select name="category" id="category" class="select w-full">
					<option disabled selected>Choose event Category</option>
					{#each categories as category}
						<option value={category}>{category}</option>
					{/each}
				</select>
			</div>
		</div>
		<div class="w-full max-w-4xl">
			<label for="description" class="font-medium text-token">Short Description</label>
			<textarea rows="3" id="description" name="description" class="textarea w-full" />
		</div>
		<Editor
			content="Our text editor makes it easy for you to create content for your upcoming event. With our editor, you can format text, add images, and customize the layout to fit your needs."
		/>
		<button
			type="submit"
			class="btn md:text-2xl variant-filled-primary md:btn-lg w-full max-w-[19rem] mx-4"
			>Event</button
		>
	</form>
</section>
