<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	import { supabase } from '$lib/supabase';
	import { onMount } from 'svelte';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '@skeletonlabs/skeleton/themes/theme-gold-nouveau.css';
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
</script>

<slot />
