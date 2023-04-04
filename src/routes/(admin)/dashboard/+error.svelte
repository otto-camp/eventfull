<script lang="ts">
	import { page } from '$app/stores';
</script>

{#if $page.status === 404}
	<h1>{$page.error?.message}</h1>
{:else}
	<h1>Whoops. We weren't expecting this error</h1>
	<p>We're investigating that.</p>
{/if}
{#if $page.error?.code}
	<p>Error Id:{$page.error.code}</p>
{/if}
<a href="/">Go to home</a>
