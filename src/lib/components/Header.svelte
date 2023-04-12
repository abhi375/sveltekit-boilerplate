<script>
	import Logo from '$lib/icons/Logo.svelte';
	import RightCircleArrowIcon from '../icons/RightCircleArrowIcon.svelte';
	import UpdatesIcon from '../icons/UpdatesIcon.svelte';
	import { showUpdatesSidebar } from '$lib/stores/global-store';
	import { showSideNav } from '$lib/stores/global-store';
	import { page } from '$app/stores';

	import MenuIcon from '../icons/MenuIcon.svelte';
	import { onMount } from 'svelte';

	let isScrolled = false;

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	function handleScroll() {
		isScrolled = window.scrollY >= 160;
	}
</script>

<header
	class={`px-6 h-16 border-b border-black/5 bg-white fixed inset-x-0 transition-all duration-300 ease-in-out top-0 z-20 ${
		isScrolled ? 'shadow-md' : ''
	}`}
>
	<div class="flex items-center gap-8 h-full">
		<a class="flex items-center gap-2" href="/"
			><Logo />
			<span
				class="text-[12px] uppercase tracking-wider font-semibold gap-1 hidden min-[960px]:flex"
			>
				<span class="opacity-60">Samespace </span> Support
			</span>
		</a>

		<div class="flex items-center gap-12 ml-auto">
			{#if $page.data.changelogs && $page.data.changelogs.length > 0}
				<button
					on:click={() => {
						showUpdatesSidebar.set(true);
						document.get;
					}}
					class="hidden min-[960px]:flex items-center gap-2 hover:text-accent"
				>
					<span>
						<UpdatesIcon />
					</span>
					<span>Updates</span>
				</button>
			{/if}

			<a
				class="items-center gap-2 hover:text-accent hidden min-[960px]:flex"
				target="_blank"
				rel="noreferer"
				href="https://samespace.com/signin"
			>
				<span>
					<RightCircleArrowIcon />
				</span>
				<span>Sign In</span>
			</a>

			<button
				on:click={() => {
					showSideNav.set(true);
				}}
				class="flex min-[960px]:hidden items-center gap-2 hover:text-accent"
			>
				<span>
					<MenuIcon />
				</span>
				<span>Menu</span>
			</button>
		</div>
	</div>
</header>
