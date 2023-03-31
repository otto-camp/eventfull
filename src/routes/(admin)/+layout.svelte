<script lang="ts">
	import ThemeSwitch from '$lib/components/ThemeSwitch.svelte';
	import { fly } from 'svelte/transition';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
	let innerWidth: number;
	let open = false;
	const user = data.session && data.session.user;

	$: mobile = innerWidth < 1024;
</script>

<svelte:window bind:innerWidth />

<header class="block lg:hidden bg-base-200 border-base-content">
	<nav class="navbar">
		<div class="navbar-start">
			<button on:click={() => (open = !open)} class="btn btn-ghost"
				><svg
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
				></button
			>
		</div>
		<a href="/" class="navbar-center btn btn-ghost normal-case text-2xl">Event</a>
		<span class="navbar-end" />
	</nav>
</header>

{#if mobile && open}
	<aside
		in:fly={{ opacity: 1, x: -400, duration: 500 }}
		out:fly={{ opacity: 1, x: -400, duration: 500 }}
		class="fixed top-0 bottom-0 left-0 p-2 w-64 overflow-y-auto bg-base-100"
	>
		<div class="grid gap-6">
			<div class="flex justify-end">
				<button class="btn btn-ghost" on:click={() => (open = false)}>Close</button>
			</div>
			<div class="flex items-center gap-4 flex-col">
				<div class="avatar">
					<div class="w-24 rounded-full ring ring-primary ring-offset-2 ring-offset-base-300">
						<img src={user?.user_metadata.avatar_url} alt={user?.email} />
					</div>
				</div>
				<span class="uppercase text-xl font-medium">{user?.user_metadata.full_name}</span>
			</div>
			<nav aria-label="sidebar navigation">
				<ul class="menu menu-vertical">
					<li class="hover-bordered"><a href="/" class="text-lg sm:text-xl md">Link</a></li>
					<li class="hover-bordered"><a href="/" class="text-lg sm:text-xl md">Link</a></li>
					<li class="hover-bordered"><a href="/" class="text-lg sm:text-xl md">Link</a></li>
					<li class="hover-bordered"><a href="/" class="text-lg sm:text-xl md">Link</a></li>
					<li class="hover-bordered"><a href="/" class="text-lg sm:text-xl md">Link</a></li>
				</ul>
			</nav>
		</div>
		<ThemeSwitch />
	</aside>
{:else}
	<aside
		class="lg:fixed lg:block hidden top-0 bottom-0 left-0 p-2 w-64 overflow-y-auto bg-base-100 border-r border-primary"
	>
		<div class="grid gap-8">
			<div class="flex justify-center">
				<a href="/" class="btn btn-ghost normal-case text-2xl">Event</a>
			</div>
			<div class="flex items-center gap-4 flex-col">
				<div class="avatar">
					<div class="w-24 rounded-full ring ring-primary ring-offset-2 ring-offset-base-300">
						<img src={user?.user_metadata.avatar_url} alt={user?.email} />
					</div>
				</div>
				<span class="uppercase text-xl font-medium">{user?.user_metadata.full_name}</span>
			</div>
			<nav aria-label="sidebar navigation">
				<ul class="menu menu-vertical">
					<li class="hover-bordered"><a href="/" class="text-xl">Link</a></li>
					<li class="hover-bordered"><a href="/" class="text-xl">Link</a></li>
					<li class="hover-bordered"><a href="/" class="text-xl">Link</a></li>
					<li class="hover-bordered"><a href="/" class="text-xl">Link</a></li>
					<li class="hover-bordered"><a href="/" class="text-xl">Link</a></li>
				</ul>
			</nav>
		</div>
		<ThemeSwitch />
	</aside>
{/if}

<main class="lg:ml-64 min-h-screen">
	<slot />
</main>
