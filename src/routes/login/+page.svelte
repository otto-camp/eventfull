<script lang="ts">
	import { supabase } from '$lib/supabase';

	async function signInWithGoogle() {
		await supabase.auth.signInWithOAuth({
			provider: 'google'
		});
	}
</script>

<svelte:head>
	<title>Login</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="max-w-6xl mx-auto">
	<h1>Login</h1>

	<button on:click={signInWithGoogle} class="btn btn-primary">Google Login</button>
</section>
