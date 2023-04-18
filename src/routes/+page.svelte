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

<div class="relative w-full md:block hidden">
	<img src="/hero.webp" alt="hero" class="absolute inset-0 object-cover h-screen w-full" />
</div>

<section
	class="md:h-screen relative py-16 md:py-20 backdrop-blur-[1px] md:bg-base-100/5 px-2 max-w-7xl mx-auto grid gap-12 md:text-white"
>
	<h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-7xl md:text-center font-black">
		Your Free, Simple Event Organizer
	</h1>
	<p class="text-lg md:text-xl font-semibold md:px-24 md:text-center">
		Create unforgettable events effortlessly with [TITLE]. Invite guests, track RSVPs, and customize
		your page. Sign up now for the simple and free way to plan!
	</p>
	<div class="max-w-sm mx-auto flex gap-2">
		{#if data.session}
			<a href="/dashboard" class="btn btn-primary btn-wide text-lg normal-case">Go To Dashboard</a>
		{:else}
			<a href="/login" class="btn btn-primary flex-1 text-lg normal-case">Join Now</a>
			<a href="/events" class="btn btn-outline text-lg normal-case">Events</a>
		{/if}
	</div>
	<div class="hidden">
		<div
			class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
			aria-hidden="true"
		>
			<div
				class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
				style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
			/>
		</div>
		<div
			class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
			aria-hidden="true"
		>
			<div
				class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
				style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
			/>
		</div>
	</div>
</section>

<section class=" py-12">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="md:text-center">
			<h2
				class="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
			>
				What our customers are saying
			</h2>
			<p class="mt-4 max-w-2xl text-xl md:mx-auto">
				Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate
				veritatis in accusamus quisquam.
			</p>
		</div>

		<div class="mt-10">
			<div class="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
				<div class="flex flex-col rounded-box shadow-lg shadow-base-content/30 overflow-hidden">
					<div class="flex-shrink-0">
						<img class="h-48 w-full object-cover" src="/test1.jpg" alt="" loading="lazy" />
					</div>
					<div class="flex-1 bg-white p-6 flex flex-col justify-between">
						<div class="flex-1">
							<p class="text-xl font-semibold text-gray-900">John Doe</p>
							<p class="mt-3 text-base text-gray-500">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
								exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
							</p>
						</div>
						<div class="mt-6 flex items-center">
							<div class="flex-shrink-0">
								<img
									class="h-16 w-16 rounded-full"
									src="https://dummyimage.com/100x100/000/fff"
									alt=""
								/>
							</div>
							<div class="ml-3">
								<p class="text-sm font-medium text-gray-900">CEO, Acme Inc.</p>
								<a href="/" class="mt-1 text-sm text-gray-500 hover:text-gray-600 underline"
									>www.acme.com</a
								>
							</div>
						</div>
					</div>
				</div>
				<div class="flex flex-col rounded-box shadow-lg shadow-base-content/30 overflow-hidden">
					<div class="flex-shrink-0">
						<img class="h-48 w-full object-cover" src="/test2.jpg" alt="" loading="lazy" />
					</div>
					<div class="flex-1 bg-white p-6 flex flex-col justify-between">
						<div class="flex-1">
							<p class="text-xl font-semibold text-gray-900">Jane Smith</p>
							<p class="mt-3 text-base text-gray-500">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
								exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
							</p>
						</div>
						<div class="mt-6 flex items-center">
							<div class="flex-shrink-0">
								<img
									class="h-16 w-16 rounded-full"
									src="https://dummyimage.com/100x100/000/fff"
									alt=""
								/>
							</div>
							<div class="ml-3">
								<p class="text-sm font-medium text-gray-900">CTO, XYZ Corp</p>
								<a href="/" class="mt-1 text-sm text-gray-500 hover:text-gray-600 underline"
									>www.xyzcorp.com</a
								>
							</div>
						</div>
					</div>
				</div>
				<div class="flex flex-col rounded-box shadow-lg shadow-base-content/30 overflow-hidden">
					<div class="flex-shrink-0">
						<img class="h-48 w-full object-cover" src="/test3.jpg" alt="" loading="lazy" />
					</div>
					<div class="flex-1 bg-white p-6 flex flex-col justify-between">
						<div class="flex-1">
							<p class="text-xl font-semibold text-gray-900">Bob Johnson</p>
							<p class="mt-3 text-base text-gray-500">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
								exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
							</p>
						</div>
						<div class="mt-6 flex items-center">
							<div class="flex-shrink-0">
								<img
									class="h-16 w-16 rounded-full"
									src="https://dummyimage.com/100x100/000/fff"
									alt=""
								/>
							</div>
							<div class="ml-3">
								<p class="text-sm font-medium text-gray-900">COO, Example Corp</p>
								<a href="/" class="mt-1 text-sm text-gray-500 hover:text-gray-600 underline"
									>www.examplecorp.com</a
								>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

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
