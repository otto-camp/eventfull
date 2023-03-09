<svelte:head>
	<title>Create Event</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="px-2 max-w-6xl mx-auto mt-2">
	<h1 class="text-center font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-7xl">
		Create Event
	</h1>
	<form
		action="/dashboard/create-event"
		method="post"
		class="max-w-md mx-auto mt-8 sm:mt-12 md:mt-20 lg:mt-32"
	>
		<div class="flex flex-col gap-4">
			<div>
				<label for="event name" class="font-medium text-base-content block">Name</label>
				<input
					type="text"
					id="event name"
					name="name"
					placeholder="Name"
					class="input input-bordered w-full focus-visible:outline-base-content border-base-content"
				/>
			</div>
			<div>
				<label for="location" class="font-medium text-base-content block">Location</label>
				<input
					type="text"
					id="location"
					name="location"
					placeholder="Location"
					class="input input-bordered w-full focus-visible:outline-base-content border-base-content"
				/>
			</div>
			<div>
				<label for="date" class="font-medium text-base-content block">Date</label>
				<input
					type="datetime-local"
					id="date"
					name="date"
					class="input input-bordered w-full focus-visible:outline-base-content border-base-content"
				/>
			</div>
			<button type="submit" class="btn md:text-2xl btn-primary normal-case">Event</button>
		</div>
	</form>
</section>
