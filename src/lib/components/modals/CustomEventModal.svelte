<script lang="ts">
	import { Tab, TabGroup, modalStore } from '@skeletonlabs/skeleton';
	import type { Event } from '../../../Types';
	import Editor from '$lib/editor/Editor.svelte';

	const types = [
		'Party',
		'Concert',
		'Performance',
		'Exhibition',
		'Sports',
		'Conference',
		'Workshop'
	];
	const categories = [
		'Business',
		'Social',
		'Sporting',
		'Cultural',
		'Educational',
		'Charitable',
		'Community'
	];

	export let parent: any;
	export let event: Event;
	const formData = event;

	let tabSet = 0;

	const onFormSubmit = () => {
		if ($modalStore[0].response) $modalStore[0].response(formData);
		modalStore.close();
	};
</script>

{#if $modalStore[0]}
	<div class="w-full h-full flex justify-center items-center">
		<div class="card p-4 w-modal space-y-4 overflow-y-auto">
			<header class="text-2xl font-bold">{$modalStore[0].title ?? '(title missing)'}</header>
			<form class="border border-surface-500 p-4 rounded-token grid grid-cols-1 gap-4 w-full">
				<TabGroup active="variant-filled-primary" hover="hover:variant-soft-primary">
					<Tab bind:group={tabSet} name="aa" value={0}>aa</Tab>
					<Tab bind:group={tabSet} name="bb" value={1}>bb</Tab>
					<Tab bind:group={tabSet} name="cc" value={2}>cc</Tab>
					<svelte:fragment slot="panel">
						{#if tabSet === 0}
							<label class="label">
								<span>Name</span>
								<input class="input" type="text" bind:value={formData.name} />
							</label>
							<label class="label">
								<span>Location</span>
								<input class="input" type="text" bind:value={formData.location} />
							</label>
							<label class="label">
								<span>Date</span>
								<input class="input" type="datetime-local" bind:value={formData.date} />
							</label>
						{:else if tabSet === 1}
							<label class="label">
								<span>Type</span>
								<select class="select" bind:value={formData.type}>
									<option selected value={formData.type}>{formData.type}</option>
									{#each types as type}
										<option value={type}>
											{type}
										</option>
									{/each}</select
								>
							</label>
							<label class="label">
								<span>Category</span>
								<select class="select" bind:value={formData.category}>
									<option selected value={formData.category}>{formData.category}</option>
									{#each categories as category}
										<option value={category}>
											{category}
										</option>
									{/each}</select
								>
							</label>
							<label class="label">
								<span>Description</span>
								<textarea
									rows="3"
									class="textarea overflow-y-hidden"
									bind:value={formData.description}
								/>
							</label>
						{:else}
							<Editor content={formData.long_description} />
						{/if}
					</svelte:fragment>
				</TabGroup>
			</form>
			<footer class="modal-footer {parent.regionFooter}">
				<button class="btn {parent.buttonNeutral}" on:click={parent.onClose}
					>{parent.buttonTextCancel}</button
				>
				<button class="btn {parent.buttonPositive}" on:click={onFormSubmit}>Submit Form</button>
			</footer>
		</div>
	</div>
{/if}
