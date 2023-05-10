<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import Testimonial from '$lib/components/homepage/Testimonial.svelte';
	import type { LayoutData } from './$types';
	import Features from '$lib/components/homepage/Features.svelte';
	export let data: LayoutData;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<Header {data} />

<main class="max-w-7xl mx-auto grid grid-cols-1 gap-8 lg:grid-cols-2 px-4">
	<div class="flex flex-col justify-between gap-8 h-[90vh] w-full">
		<div
			class="bg-slate-200 dark:bg-slate-700 h-full w-full rounded-hero lg:rounded-tl-none px-6 flex flex-col justify-evenly"
		>
			<h1>Your Free, Simple Event Organizer</h1>
			<p>Create unforgettable events effortlessly with Eventfull.</p>
		</div>
		<div class="flex flex-col md:flex-row gap-8">
			<div
				class="w-full h-32 lg:h-60 bg-stone-700 dark:bg-stone-200 rounded-hero lg:rounded-b-none lg:mb-0 mb-4 flex items-center justify-center"
			>
				{#if data.session}
					<a href="/dashboard" class="btn btn-lg variant-filled-primary font-medium break-words"
						>Go To Dashboard</a
					>
				{:else}
					<a href="/login" class="btn btn-lg variant-filled-primary font-medium">Join Now</a>
				{/if}
			</div>
			<div
				class="w-full h-32 lg:h-60 bg-stone-400 dark:bg-stone-500 rounded-hero lg:rounded-b-none lg:mb-0 mb-4 flex items-center justify-center"
			>
				<a href="/events" class="btn btn-lg variant-outline-primary font-medium">Events</a>
			</div>
		</div>
	</div>
	<img
		src="/hero.webp"
		alt="Hero"
		class="object-cover h-[90vh] w-full rounded-tl-hero hidden lg:block"
	/>
</main>
<Features />

<Testimonial />

<Footer />
