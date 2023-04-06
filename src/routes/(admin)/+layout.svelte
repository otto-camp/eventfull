<script lang="ts">
	import ThemeSwitch from '$lib/components/ThemeSwitch.svelte';
	import { fly } from 'svelte/transition';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
	let innerWidth: number;
	let open = false;
	const user = data.session && data.session.user;

	$: mobile = innerWidth < 1024;

	const links = [
		{ href: '/dashboard/', name: 'Home' },
		{ href: '/dashboard/create-event', name: 'Create Event' },
		{ href: '/dashboard/settings', name: 'Settings' }
	];
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
		<div class="grid h-full content-between">
			<div class="flex flex-col gap-8">
				<div class="flex justify-end">
					<button class="btn btn-ghost" on:click={() => (open = false)}
						><svg
							class="fill-current"
							width="24"
							height="24"
							viewBox="0 0 512 512"
							xmlns="http://www.w3.org/2000/svg"
							><path
								d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z"
							/></svg
						></button
					>
				</div>
				<div class="flex items-center gap-4 flex-col">
					<div class="avatar">
						<div class="w-24 rounded-full ring ring-primary ring-offset-4 ring-offset-base-300">
							<img src={user?.user_metadata.avatar_url} alt={user?.email} />
						</div>
					</div>
					<span class="uppercase text-xl font-medium">{user?.user_metadata.full_name}</span>
				</div>
				<nav aria-label="sidebar navigation">
					<ul class="menu menu-vertical">
						{#each links as link}
							<li class="hover-bordered">
								<a href={link.href} class="text-lg sm:text-xl">{link.name}</a>
							</li>
						{/each}
					</ul>
				</nav>
			</div>
			<ThemeSwitch />
		</div>
	</aside>
{:else}
	<aside
		class="lg:fixed lg:block hidden top-0 bottom-0 left-0 p-2 w-64 overflow-y-auto bg-base-100 border-r border-primary"
	>
		<div class="grid h-full content-between">
			<div class="flex flex-col gap-8">
				<div class="flex justify-center">
					<a href="/" class="btn btn-ghost normal-case text-2xl">Event</a>
				</div>
				<div class="flex items-center gap-4 flex-col">
					<div class="avatar">
						<div class="w-24 rounded-full ring ring-primary ring-offset-4 ring-offset-base-300">
							<img src={user?.user_metadata.avatar_url} alt={user?.email} />
						</div>
					</div>
					<span class="uppercase text-xl font-medium">{user?.user_metadata.full_name}</span>
				</div>
				<nav aria-label="sidebar navigation">
					<ul class="menu menu-vertical">
						{#each links as link}
							<li class="hover-bordered">
								<a href={link.href} class="text-xl">{link.name}</a>
							</li>
						{/each}
					</ul>
				</nav>
			</div>
			<ThemeSwitch />
		</div>
	</aside>
{/if}

<main class="lg:ml-64 min-h-screen">
	<slot />
</main>
