<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import { AppShell } from '@skeletonlabs/skeleton';
	import type { LayoutData } from './$types';
	export let data: LayoutData;
</script>

<AppShell>
	<svelte:fragment slot="header">
		<Header {data} />
	</svelte:fragment>

	<main class="min-h-screen">
		<slot />
	</main>
	<svelte:fragment slot="footer">
		<Footer />
	</svelte:fragment>
</AppShell>
