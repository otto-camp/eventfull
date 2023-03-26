<script lang="ts">
	import { page } from '$app/stores';
</script>

<form method="post" class="flex justify-center gap-2">
	<div class="dropdown dropdown-end dropdown-hover">
		<span class="btn btn-outline">Theme</span>
		<div class="dropdown-content rounded-box menu p-2 bg-base-100">
			<button
				class="btn btn-ghost"
				formaction="/?/setTheme&theme=halloween&redirectTo={$page.url.pathname}"
			>
				Dark</button
			>
			<button
				class="btn btn-ghost"
				formaction="/?/setTheme&theme=cmyk&redirectTo={$page.url.pathname}">Light</button
			>
		</div>
	</div>
</form>
