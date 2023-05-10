<script lang="ts">
	import { Icon, PresentationChartLine } from 'svelte-hero-icons';
</script>

<section class="max-w-7xl h-screen mx-auto px-4 grid grid-cols-1 gap-8 lg:grid-cols-2">
	<div class="flex flex-col justify-between gap-8">
		<div class="lg:flex gap-8 hidden">
			<div class="w-full h-60 pt-8 bg-stone-700 dark:bg-stone-200 rounded-b-hero">
				<Icon
					src={PresentationChartLine}
					size="64"
					class="stroke-white dark:stroke-black mx-auto mb-8"
				/>
				<p
					class="unstyled text-center mx-4 text-white dark:text-black text-lg xl:text-xl font-medium"
				>
					Track progress and view activities.
				</p>
			</div>

			<div class="w-full h-60 pt-8 bg-stone-400 dark:bg-stone-500 rounded-b-hero">
				<Icon
					src={PresentationChartLine}
					size="64"
					class="stroke-black dark:stroke-white mx-auto mb-8"
				/>
				<p
					class="unstyled text-center mx-4 text-black dark:text-white text-lg xl:text-xl font-medium"
				>
					Track progress and view activities.
				</p>
			</div>
		</div>
		<div>
			<img
				src="/hero2.jpg"
				alt="hero2"
				loading="lazy"
				class="aspect-[6/5] object-cover rounded-t-hero rounded-r-hero"
			/>
		</div>
	</div>
	<div
		class="h-full flex flex-col justify-evenly gap-8 py-8 px-4 bg-slate-200 dark:bg-slate-700 rounded-bl-hero"
	>
		<span class="text-3xl font-bold hover:underline hover:underline-offset-8"
			>Multi-event support</span
		>
		<span class="text-3xl font-bold hover:underline hover:underline-offset-8"
			>Mobile optimization</span
		>
		<span class="text-3xl font-bold hover:underline hover:underline-offset-8"
			>Social media integration</span
		>
		<span class="text-3xl font-bold hover:underline hover:underline-offset-8"
			>Email marketing tools</span
		>
		<span class="text-3xl font-bold hover:underline hover:underline-offset-8"
			>Automated reminder emails</span
		>
	</div>
</section>
