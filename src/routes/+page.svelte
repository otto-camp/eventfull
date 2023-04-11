<script lang="ts">
	import ThemeSwitch from '$lib/components/ThemeSelect.svelte';
	import type { LayoutData } from './$types';
	export let data: LayoutData;
	let open = false;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<header class="bg-base-200 border-base-content border-b">
	<div class="navbar max-w-6xl mx-auto">
		<div class="navbar-start lg:hidden">
			<button on:click={() => (open = !open)} aria-label="Open the Menu" class="btn btn-ghost ">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h8m-8 6h16"
					/></svg
				>
			</button>
		</div>
		<div class="navbar-center lg:flex-shrink lg:navbar-start">
			<a href="/" class="btn btn-ghost normal-case text-2xl">Event</a>
		</div>
		<div class="hidden lg:inline-flex lg:navbar-center">
			<ul class="menu menu-horizontal gap-2 px-1">
				<li><a href="/about">About Us</a></li>
				<li><a href="/services">Services</a></li>
				<ThemeSwitch />
			</ul>
		</div>
		<div class="hidden lg:inline-flex lg:navbar-end">
			<ul class="menu menu-horizontal gap-2 px-1">
				{#if data.session}
					<li>
						<a
							href="/dashboard"
							data-sveltekit-preload-data
							class="btn btn-primary text-primary-content">Dashboard</a
						>
					</li>
					<li>
						<form action="/logout" method="post" class="m-0 p-0">
							<button type="submit" class="btn">Sign Out</button>
						</form>
					</li>
				{:else}
					<li>
						<a href="/login" class="btn btn-primary text-primary-content">Login</a>
					</li>
				{/if}
			</ul>
		</div>
		<div class="navbar-end lg:hidden">
			<ThemeSwitch />
		</div>
	</div>
	{#if open}
		<nav class="space-y-1 px-2 pt-2 pb-3 bg-base-200 lg:hidden">
			<a href="/about" class="btn btn-ghost w-full justify-start">About Us</a>
			<a href="/services" class="btn btn-ghost w-full justify-start">Services</a>
			{#if data.session}
				<div class="w-full flex gap-2">
					<a href="/dashboard" data-sveltekit-preload-data class="btn flex-1 btn-primary"
						>Dashboard</a
					>
					<form action="/logout" method="post" class="m-0 p-0">
						<button type="submit" class="btn">Sign Out</button>
					</form>
				</div>
			{:else}
				<a href="/login" class="btn btn-primary w-full justify-start text-primary-content">Login</a>
			{/if}
		</nav>
	{/if}
</header>

<div class="relative w-full md:block hidden">
	<img src="/hero.webp" alt="hero" class="absolute inset-0 object-cover h-screen w-full" />
</div>

<section
	class="sm:mt-12 md:py-20 backdrop-blur-[1px] bg-base-100/5 px-2 max-w-6xl mx-auto grid gap-12 md:text-white"
>
	<h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-7xl md:text-center font-black">
		Your Free, Simple Event Organizer
	</h1>
	<p class="text-lg font-medium md:px-24 md:text-center">
		Create unforgettable events effortlessly with [TITLE]. Invite guests, track RSVPs, and
		customize your page. Sign up now for the simple and free way to plan!
	</p>
	<div class="max-w-sm mx-auto flex gap-2">
		{#if data.session}
			<a href="/dashboard" class="btn btn-primary btn-wide text-lg normal-case">Go To Dashboard</a>
		{:else}
			<a href="/login" class="btn btn-primary flex-1 text-lg normal-case">Join Now</a>
			<button class="btn btn-outline text-lg normal-case">Learn More</button>
		{/if}
	</div>
	<!-- <div
		class="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply origin-center filter blur-xl opacity-70 animate-blob"
	/> -->
</section>
