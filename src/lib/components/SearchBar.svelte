<script>
	import { showSearchView } from '$lib/stores/global-store';
	import SearchIcon from '$lib/icons/SearchIcon.svelte';
	import { goto } from '$app/navigation';
	import { clickOutside } from '$lib/utils/clickOutside';

	import Fuse from 'fuse.js';
	import { page } from '$app/stores';
	import { scale } from 'svelte/transition';
	import TopicIcon from './TopicIcon.svelte';

	export let searchTerm = '';
	export let placeholder = 'Search';
	export let showSubmitButton = false;
	export let autofocus = true;
	export let showSuggestions = true;

	let focusedSuggestionIndex = -1;
	let searchSuggestions = [];

	function search() {
		showSearchView.set(false);
		if (focusedSuggestionIndex >= 0 && searchSuggestions[focusedSuggestionIndex].item?.url) {
			goto(`/docs/${searchSuggestions[focusedSuggestionIndex].item.url}`);
		} else {
			goto(`/search`);
		}
	}

	function handleKeyDown(event) {
		if (event.key === 'Enter') {
			search();
		} else if (event.key === 'ArrowDown') {
			event.preventDefault();
			focusedSuggestionIndex = (focusedSuggestionIndex + 1) % searchSuggestions.length;
		} else if (event.key === 'ArrowUp') {
			event.preventDefault();
			focusedSuggestionIndex =
				(focusedSuggestionIndex - 1 + searchSuggestions.length) % searchSuggestions.length;
		} else if (event.key === 'Tab') {
			event.preventDefault();
			if (event.shiftKey) {
				focusedSuggestionIndex--;
				if (focusedSuggestionIndex < 0) {
					focusedSuggestionIndex = searchSuggestions.length - 1;
				}
			} else {
				focusedSuggestionIndex++;
				if (focusedSuggestionIndex >= searchSuggestions.length) {
					focusedSuggestionIndex = 0;
				}
			}
		}
	}

	const fuse = new Fuse($page.data.documents, {
		includeScore: true,
		minMatchCharLength: 3,
		threshold: 0.3,
		keys: ['title', 'subtitle', 'content', 'topic.title']
	});

	const searchDocuments = () => {
		searchSuggestions = fuse.search(searchTerm);
		focusedSuggestionIndex = -1;
		return searchSuggestions;
	};

	function clearSearchResult() {
		if (searchTerm !== '') {
			searchTerm = '';
			searchSuggestions = [];
			focusedSuggestionIndex = -1;
		}
	}

	function handleKeydown(event) {
		if (event.key === 'Escape') {
			clearSearchResult();
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />

<div
	class="w-full flex items-center justify-start gap-3 p-3 rounded-md border border-gray-300 focus-within:border-black relative"
>
	<span class={`${searchTerm.length > 0 ? 'text-black' : 'text-gray-400'}`}><SearchIcon /></span>
	<!-- svelte-ignore a11y-autofocus -->
	<input
		class="w-full h-full focus:outline-none placeholder:text-black/40 text-lg"
		type="text"
		{placeholder}
		{autofocus}
		bind:value={searchTerm}
		on:keydown={handleKeyDown}
		on:input={searchDocuments}
	/>

	{#if showSubmitButton}
		<button
			on:click={() => search()}
			class={`text-lg transition-all duration-300 ease-in-out ${
				searchTerm !== '' ? 'opacity-100' : 'opacity-0'
			}`}
		>
			Submit
		</button>
	{/if}

	{#if showSuggestions && searchSuggestions && searchSuggestions.length > 0}
		<div
			use:clickOutside
			on:click_outside={() => clearSearchResult()}
			transition:scale={{ start: 0.96 }}
			class="absolute inset-x-0 top-[120%] overflow-x-hidden max-h-[440px] overflow-y-auto rounded-lg bg-white text-black shadow-2xl text-left p-2 z-50 isolate flex flex-col gap-1 border border-divider"
		>
			{#each searchSuggestions as result, i}
				<a
					class="p-3 rounded-md bg-transparent hover:bg-neutral-100 w-full flex items-center gap-3 outline-none focus:bg-accent/10"
					href={`/docs/${result.item?.url}`}
					key={result.item?.id}
					tabindex={i === focusedSuggestionIndex ? 0 : -1}
					on:keydown={(event) => {
						if (event.key === 'Enter') {
							search();
						} else if (event.key === 'Tab') {
							event.preventDefault();
							const nextIndex = i === searchSuggestions.length - 1 ? 0 : i + 1;
							focusedSuggestionIndex = nextIndex;
						} else if (event.key === 'ArrowDown') {
							event.preventDefault();
							const nextIndex = i === searchSuggestions.length - 1 ? 0 : i + 1;
							focusedSuggestionIndex = nextIndex;
						} else if (event.key === 'ArrowUp') {
							event.preventDefault();
							const prevIndex = i === 0 ? searchSuggestions.length - 1 : i - 1;
							focusedSuggestionIndex = prevIndex;
						}
					}}
					style={`background-color: ${
						i === focusedSuggestionIndex ? 'rgba(0,0,0,0.05)' : 'transparent'
					};`}
				>
					<TopicIcon name={result.item?.topic?.title} />

					<span class="text-lg font-medium">
						{result.item?.title}
					</span>
				</a>
			{/each}
		</div>
	{/if}
</div>
