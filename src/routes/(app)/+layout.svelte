<script lang="ts">
	import ThemeSwitch from '$lib/components/ThemeSelect.svelte';
	import type { LayoutData } from './$types';
	export let data: LayoutData;
	let open = false;
</script>

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
				<li><a href="/">Courses</a></li>
				<li><a href="/">Resources</a></li>
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
			<a href="/" class="btn btn-ghost w-full justify-start">Courses</a>
			<a href="/" class="btn btn-ghost w-full justify-start">Resources</a>
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
