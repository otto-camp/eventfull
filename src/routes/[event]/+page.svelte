<script lang="ts">
	import dayjs from 'dayjs';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.event !== undefined ? data.event[0].name : 'Event'}</title>
</svelte:head>

<section class="max-w-6xl mx-auto px-2">
	{#if data.event !== undefined}
		<div class="flex flex-col gap-4 items-center justify-center mt-6 md:mt-12 lg:mt-18">
			<h1 class="font-medium text-xl sm:text-2xl md:text-3xl lg:text-5xl">{data.event[0].name}</h1>
			<img
				src={data.event[0].image_url ? data.event[0].image_url : 'https://picsum.photos/500/200'}
				alt={data.event[0].name}
				width="auto"
				height="500"
				class="rounded-md object-cover h-[250px] md:h-[500px]"
			/>
			<div class="flex justify-between gap-4 my-2">
				<span class="flex gap-1 items-center justify-center">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 448 512"
						><path
							d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z"
						/></svg
					>
					<time class="text-lg md:text-xl"
						>{dayjs(data.event[0].date).format('YYYY MMMM DD - HH:mm')}</time
					>
				</span>
				<span class="flex gap-1 items-center justify-center text-lg md:text-xl">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 384 512"
						><path
							d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z"
						/></svg
					>
					{data.event[0].location}
				</span>
			</div>
			<p class="text-lg md:text-2xl">
				{data.event[0].long_description
					? data.event[0].long_description
					: data.event[0].description}
			</p>
		</div>
	{/if}
</section>
