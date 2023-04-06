<script lang="ts">
	import { page } from '$app/stores';
</script>

<form method="post">
	<div class="flex border rounded-box border-base-content/30">
		<button
			class="btn btn-ghost rounded-l-box w-1/2 rounded-r-none"
			formaction="/?/setTheme&theme=halloween&redirectTo={$page.url.pathname}"
		>
			Dark</button
		>
		<button
			class="btn btn-ghost rounded-r-box w-1/2 rounded-l-none"
			formaction="/?/setTheme&theme=cmyk&redirectTo={$page.url.pathname}">Light</button
		>
	</div>
</form>
