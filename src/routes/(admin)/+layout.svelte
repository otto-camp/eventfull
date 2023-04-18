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
		class="fixed top-0 bottom-0 left-0 p-2 w-64 overflow-y-auto bg-base-100 z-[9999]"
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

<footer
	class="footer footer-center border-t border-t-base-content lg:pl-64 p-10 bg-base-200 text-base-content"
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
