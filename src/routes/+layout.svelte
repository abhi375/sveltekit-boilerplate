<script>
	import '../fonts.css';
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import UpdatesSidebar from '$lib/components/UpdatesSidebar.svelte';
	import { showSideNav, showUpdatesSidebar } from '$lib/stores/global-store';

	import SideNav from '$lib/components/SideNav.svelte';
</script>

{#if $showUpdatesSidebar}
	<UpdatesSidebar />
{/if}

{#if $showSideNav}
	<SideNav />
{/if}

<Header />

<main class={`pt-16 min-h-[calc(100vh_-_64px)] flex flex-col h-full transform`}>
	<div class="transition-container">
		<slot />
	</div>
</main>

<style>
	:root {
		--content-v-padding: 40px;
		--content-h-padding: 160px;
		--content-width: 720px;
	}

	.transition-container {
		display: grid;
		grid-template-rows: 1fr;
		grid-template-columns: 1fr;
		height: 100%;
	}

	.transition-container > * {
		grid-row: 1;
		grid-column: 1;
	}
</style>
