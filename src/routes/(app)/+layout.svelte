<script lang="ts">
	import ThemeSwitch from '$lib/components/ThemeSelect.svelte';
	import type { LayoutData } from './$types';
	export let data: LayoutData;
	let open = false;
</script>

<header class="bg-base-200 border-base-content border-b">
	<div class="navbar max-w-7xl mx-auto">
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
				<li><a href="/events">Events</a></li>
				<li><a href="/features">Features</a></li>
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
			<a href="/events" class="btn btn-ghost w-full justify-start">Events</a>
			<a href="/features" class="btn btn-ghost w-full justify-start">Features</a>
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

<main class="min-h-screen">
	<slot />
</main>

<footer
	class="footer footer-center border-t border-t-base-content p-10 bg-base-200 text-base-content"
>
	<div class="grid grid-flow-col gap-4">
		<a href="/" class="link link-hover">Home</a>
		<a href="/about" class="link link-hover">About Us</a>
		<a href="/features" class="link link-hover">Features</a>
		<a href="/" class="link link-hover">Press kit</a>
	</div>
	<div>
		<div class="grid grid-flow-col gap-4">
			<a href="https://github.com/otto-camp"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					class="fill-current"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					><path
						d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
					/></svg
				></a
			>
			<a href="https://www.linkedin.com/in/ismail-yarar/"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					class="fill-current"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					><path
						d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
					/></svg
				></a
			>
		</div>
	</div>
	<div>
		<p>Copyright © 2023 - All right reserved by [TITLE]</p>
	</div>
</footer>
