<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { Editor } from '@tiptap/core';
	import StarterKit from '@tiptap/starter-kit';
	import BubbleMenu from '@tiptap/extension-bubble-menu';

	let bubbleMenu: any;
	let element: any;
	let editor: any;

	export let content: string | null;

	const headings = [1, 2, 3, 4, 5, 6];

	onMount(() => {
		editor = new Editor({
			element: element,
			extensions: [
				StarterKit,
				BubbleMenu.configure({
					element: bubbleMenu
				})
			],
			content: content,

			onTransaction: () => {
				// force re-render so `editor.isActive` works as expected
				editor = editor;
			},
			editorProps: {
				attributes: {
					class: 'p-2'
				}
			}
		});
	});

	onDestroy(() => {
		if (editor) {
			editor.destroy();
		}
	});
</script>

<div
	class="relative bg-surface-200-700-token rounded-token border border-surface-500 px-4 pb-4 pt-2 w-full max-w-4xl"
>
	{#if editor}
		<div class="mb-4">
			{#each headings as h}
				<button
					type="button"
					on:click={() => editor.chain().focus().toggleHeading({ level: h }).run()}
					class="btn"
					class:active={editor.isActive('heading', { level: h })}
				>
					H{h}
				</button>
			{/each}
			<button
				type="button"
				on:click={() => editor.chain().focus().setParagraph().run()}
				class="btn"
				class:active={editor.isActive('paragraph')}
			>
				P
			</button>
		</div>
	{/if}

	<div
		class="flex p-1 rounded-token transition relative after:absolute after:inset-0 after:bg-black after:-z-10 after:rounded-token"
		bind:this={bubbleMenu}
	>
		{#if editor}
			<button
				type="button"
				on:click={() => editor.chain().focus().toggleBold().run()}
				class="btn p-2 bg-black hover:bg-white/40"
				class:active={editor.isActive('bold')}
			>
				Bold
			</button>
			<button
				type="button"
				on:click={() => editor.chain().focus().toggleItalic().run()}
				class="btn p-2 bg-black hover:bg-white/40"
				class:active={editor.isActive('italic')}
			>
				Italic
			</button>
			<button
				type="button"
				on:click={() => editor.chain().focus().toggleStrike().run()}
				class="btn p-2 bg-black hover:bg-white/40"
				class:active={editor.isActive('strike')}
			>
				Strike
			</button>
		{/if}
	</div>

	<div bind:this={element} />
</div>

<style>
	button.active {
		background: black;
		color: white;
	}
</style>
