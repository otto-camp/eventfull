<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import Testimonial from '$lib/components/homepage/Testimonial.svelte';
	import type { LayoutData } from './$types';
	export let data: LayoutData;
	let open = false;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<Header {data} />

<div class="relative w-full md:block hidden">
	<img src="/hero.webp" alt="hero" class="absolute inset-0 object-cover h-screen w-full" />
</div>

<section
	class="md:h-[calc(100vh-10rem)] relative py-16 md:py-20 backdrop-blur-[1px] md:bg-surface-900/10 px-2 max-w-7xl mx-auto grid gap-12 md:text-white"
>
	<h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-7xl md:text-center font-black">
		Your Free, Simple Event Organizer
	</h1>
	<p class="text-lg md:text-xl font-semibold md:px-24 md:text-center">
		Create unforgettable events effortlessly with [TITLE]. Invite guests, track RSVPs, and customize
		your page. Sign up now for the simple and free way to plan!
	</p>
	<div class="max-w-sm h-fit mx-auto flex justify-center items-center gap-2">
		{#if data.session}
			<a href="/dashboard" class="btn btn-lg variant-filled-primary font-medium">Go To Dashboard</a>
		{:else}
			<a href="/login" class="btn btn-lg variant-filled-primary flex-1 font-medium">Join Now</a>
			<a href="/events" class="btn btn-lg variant-outline-primary bg-black/30 font-medium">Events</a
			>
		{/if}
	</div>
</section>

<Testimonial />

<Footer />


