<script lang="ts">
	import { enhance, type SubmitFunction } from '$app/forms';
	import { invalidateAll } from '$app/navigation';
	import { supabase } from '$lib/supabase';
	import { onMount } from 'svelte';
	import type { LayoutData } from './$types';

	import './styles.css';

	onMount(() => {
		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange(() => {
			invalidateAll();
		});

		return () => {
			subscription.unsubscribe();
		};
	});

	export let data: LayoutData;

	const signOut: SubmitFunction = async ({ cancel }) => {
		const { error } = await supabase.auth.signOut();
		error && console.log(error);

		cancel();
	};

	let open = false;
	const toggle = () => {
		open = !open;
	};
</script>

<div class="app" data-theme="bumblebee">
	<header class="pt-4 px-2 max-w-6xl mx-auto">
		<div class="navbar bg-base-200 border-base-content border-b rounded-t-lg ">
			<div class="flex-1">
				<a href="/" class="btn btn-ghost normal-case text-2xl">Event</a>
			</div>
			<div class="flex-none hidden md:block">
				<ul class="menu menu-horizontal gap-2 px-1">
					<li><a href="/">Courses</a></li>
					<li><a href="/">Resources</a></li>
					{#if data.session}
						<li><a href="/dashboard" class="btn btn-primary">Dashboard</a></li>
					{:else}
						<li>
							<a href="/login" class="btn btn-primary">Login</a>
						</li>
					{/if}
				</ul>
			</div>
			<button on:click={toggle} class="btn btn-ghost md:hidden">
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
			<div class="space-y-1 px-2 pt-2 pb-3 bg-base-200 rounded-b-lg">
				<a href="/" class="btn btn-ghost w-full justify-start">Courses</a>
				<a href="/" class="btn btn-ghost w-full justify-start">Resources</a>
				{#if data.session}
					<div class="w-full flex gap-2">
						<a href="/dashboard" class="btn w-1/2 btn-primary">Dashboard</a>
						<form action="/signout" method="POST" use:enhance={signOut} class="w-1/2">
							<button type="submit" class="btn w-full btn-outline">Sign Out</button>
						</form>
					</div>
				{:else}
					<a href="/login" class="btn btn-primary w-full justify-start">Login</a>
				{/if}
			</div>
		{/if}
	</header>

	<main class="min-h-screen">
		<slot />
	</main>

	<footer>
		<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
	</footer>
</div>
