<script lang="ts">
	import type { LayoutData } from './$types';
	import { page } from '$app/stores';

	export let data: LayoutData;

	let open = false;
	const toggle = () => {
		open = !open;
	};
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<header class="bg-base-200 border-base-content border-b">
	<div class="navbar max-w-6xl mx-auto">
		<div class="flex-1">
			<a href="/" class="btn btn-ghost normal-case text-2xl">Event</a>
		</div>
		<div class="flex-none hidden md:block">
			<ul class="menu menu-horizontal gap-2 px-1">
				<li><a href="/">Courses</a></li>
				<li><a href="/">Resources</a></li>
				{#if data.session}
					<li>
						<a
							href="/dashboard"
							data-sveltekit-preload-data
							class="btn btn-primary text-primary-content">Dashboard</a
						>
					</li>
					<li><a href="/logout" class="btn btn-outline">Sign Out</a></li>
				{:else}
					<li>
						<a href="/login" class="btn btn-primary text-primary-content">Login</a>
					</li>
				{/if}
			</ul>
		</div>
		<button on:click={toggle} aria-label="Open the Menu" class="btn btn-ghost md:hidden">
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
	{#if open}
		<div class="space-y-1 px-2 pt-2 pb-3 bg-base-200 md:hidden">
			<a href="/" class="btn btn-ghost w-full justify-start">Courses</a>
			<a href="/" class="btn btn-ghost w-full justify-start">Resources</a>
			{#if data.session}
				<div class="w-full flex gap-2">
					<a href="/dashboard" data-sveltekit-preload-data class="btn flex-1 btn-primary"
						>Dashboard</a
					>
					<a href="/logout" class="btn btn-outline">Sign Out</a>
				</div>
			{:else}
				<a href="/login" class="btn btn-primary w-full justify-start text-primary-content">Login</a>
			{/if}
			<!-- <form method="post" class="flex justify-center gap-2">
				<button
					class="btn btn-ghost btn-circle btn-wide"
					formaction="/?/setTheme&theme=night&redirectTo={$page.url.pathname}"
				>
					<svg
						class="swap-off fill-current w-10 h-10"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						><path
							d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
						/></svg
					></button
				>
				<button
					class="btn btn-ghost btn-circle btn-wide"
					formaction="/?/setTheme&theme=emerald&redirectTo={$page.url.pathname}"
					><svg
						class="swap-on fill-current w-10 h-10"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						><path
							d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
						/></svg
					></button
				>
			</form> -->
			<form method="post" class="flex justify-center gap-2">
				<button
					class="btn btn-ghost btn-circle btn-wide"
					formaction="/?/setTheme&theme=night&redirectTo={$page.url.pathname}"
				>
					<svg
						class="swap-off fill-current w-10 h-10"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						><path
							d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
						/></svg
					></button
				>
				<button
					class="btn btn-ghost btn-circle btn-wide"
					formaction="/?/setTheme&theme=emerald&redirectTo={$page.url.pathname}"
					><svg
						class="swap-on fill-current w-10 h-10"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						><path
							d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
						/></svg
					></button
				>
			</form>
		</div>
	{/if}
</header>

<section class="px-2 max-w-6xl mx-auto grid gap-12 sm:mt-12 md:py-20">
	<h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-7xl md:text-center font-black">
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem distinctio nulla ipsa.
	</h1>
	<p class="text-lg font-medium md:text-center">
		Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis nulla suscipit ut repudiandae
		quae soluta officia ipsam totam rem, expedita architecto, commodi eligendi quisquam aperiam
		libero obcaecati. Iusto, facere? Repellat!
	</p>
	<div class="max-w-sm mx-auto flex gap-2">
		<a href="/login" class="btn btn-primary flex-1 text-lg normal-case">Join Now</a>
		<button class="btn btn-outline text-lg normal-case">Learn More</button>
	</div>
</section>
<section class="px-2 max-w-6xl mx-auto md:py-20 mt-12">
	Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus dolore hic, similique facilis
	esse voluptatibus atque eaque dicta magni harum repudiandae iure ipsam, nobis aspernatur saepe
	molestiae alias ducimus corporis architecto autem sed perferendis nostrum praesentium. Facere
	corporis ullam placeat rerum, fugit incidunt, velit delectus repellendus numquam sint voluptates
	architecto.
</section>
