<script lang="ts">
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import type { LayoutData } from '../../routes/$types';
	import { Bars3, Icon } from 'svelte-hero-icons';
	import { slide } from 'svelte/transition';

	export let data: LayoutData;
	let open = false;
</script>

<div class="bg-surface-100-800-token">
	<nav class="max-w-7xl mx-auto flex justify-between items-center px-4 py-2">
		<div class="lg:hidden">
			<button
				on:click={() => (open = !open)}
				aria-label="Open the Menu"
				class="btn variant-soft-surface"
			>
				<Icon src={Bars3} size="24" />
			</button>
		</div>
		<a href="/" class="btn btn-lg py-2 variant-glass-primary text-2xl">Event</a>
		<div class="hidden lg:flex items-center justify-center">
			<ul class="lg:flex pl-2 py-2">
				<li><a href="/events" class="variant-glass btn-lg btn py-2">Events</a></li>
				<li><a href="/features" class="variant-glass btn-lg btn py-2">Features</a></li>
				{#if data.session}
					<li>
						<a href="/dashboard" data-sveltekit-preload-data class="variant-glass btn-lg btn py-2"
							>Dashboard</a
						>
					</li>
					<li>
						<form action="/logout" method="post" class="m-0 p-0">
							<button type="submit" class="variant-glass btn-lg btn py-2">Sign Out</button>
						</form>
					</li>
				{:else}
					<li>
						<a href="/login" class="variant-filled-primary btn-lg btn py-2">Login</a>
					</li>
				{/if}
			</ul>
			<div class="lg:block rotate-90">
				<LightSwitch />
			</div>
		</div>
		<div class="lg:hidden">
			<LightSwitch />
		</div>
	</nav>
	{#if open}
		<nav class="space-y-1 px-2 pt-2 pb-3 lg:hidden" transition:slide>
			<a href="/events" class="btn variant-soft-surface w-full justify-start">Events</a>
			<a href="/features" class="btn variant-soft-surface w-full justify-start">Features</a>
			{#if data.session}
				<a
					href="/dashboard"
					data-sveltekit-preload-data
					class="btn flex-1 variant-soft-surface w-full justify-start">Dashboard</a
				>
				<form action="/logout" method="post" class="m-0 p-0">
					<button type="submit" class="btn variant-soft-surface w-full justify-start"
						>Sign Out</button
					>
				</form>
			{:else}
				<a href="/login" class="btn variant-soft-surface w-full justify-start">Login</a>
			{/if}
		</nav>
	{/if}
</div>
