<script lang="ts">
	import {
		ArrowLeftOnRectangle,
		Bars3,
		Briefcase,
		Cog6Tooth,
		Home,
		Icon,
		XMark
	} from 'svelte-hero-icons';
	import { fly } from 'svelte/transition';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
	let innerWidth: number;
	let open = false;
	const user = data.session && data.session.user;

	$: mobile = innerWidth < 1024;

	const links = [
		{ href: '/dashboard/', name: 'Home', logo: Home },
		{ href: '/dashboard/create-event', name: 'Create Event', logo: Briefcase },
		{ href: '/dashboard/settings', name: 'Settings', logo: Cog6Tooth }
	];
</script>

<svelte:window bind:innerWidth />

<header class="block lg:hidden bg-base-200 border-base-content">
	<nav class="navbar">
		<div class="navbar-start">
			<button on:click={() => (open = !open)} class="btn btn-ghost p-2"
				><Icon src={Bars3} size="24" />
			</button>
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
					<button class="btn btn-ghost p-2" on:click={() => (open = false)}
						><Icon src={XMark} size="24" />
					</button>
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
								<a href={link.href} class="text-lg sm:text-xl"
									><Icon src={link.logo} size="24" /> {link.name}</a
								>
							</li>
						{/each}
					</ul>
				</nav>
			</div>
			<form action="/logout" method="post" class="m-0 p-0">
				<button type="submit" class="btn w-full justify-start gap-4"
					><Icon src={ArrowLeftOnRectangle} size="24" /> Sign Out</button
				>
			</form>
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
								<a href={link.href} class="text-xl"
									><Icon src={link.logo} size="24" /> {link.name}</a
								>
							</li>
						{/each}
					</ul>
				</nav>
			</div>
			<form action="/logout" method="post" class="m-0 p-0">
				<button type="submit" class="btn w-full justify-start gap-4"
					><Icon src={ArrowLeftOnRectangle} size="24" /> Sign Out</button
				>
			</form>
		</div>
	</aside>
{/if}

<main class="lg:ml-64 min-h-screen">
	<slot />
</main>
