<script>
	import GettingStarted from '$lib/illustrations/GettingStarted.svelte';
	import Tutorial from '$lib/illustrations/Tutorial.svelte';
	import LinkCard from '$lib/components/LinkCard.svelte';
	import SearchBar from '$lib/components/SearchBar.svelte';
	import Footer from '$lib/components/Footer.svelte';

	export let data;

	$: ({ topics, integrationArticles } = data);
</script>

<svelte:head>
	<title>Support Center - Samespace</title>
	<meta name="description" content="Advice and answers from the Samespace Team" />
	<meta name="twitter:title" content="Support Center - Samespace" />
	<meta name="twitter:description" content="Advice and answers from the Samespace Team" />

	<meta property="og:image" content={'https://drop.samespace.com/meta.png'} />
</svelte:head>

<div class="home">
	<section class="px-6 py-16 md:py-28">
		<div class="max-w-screen-md mx-auto">
			<SearchBar autofocus />
		</div>
	</section>

	<section class="px-6 py-16 pt-0 border-b border-dashed border-gray-200">
		<div class="max-w-screen-md mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
			<a
				href="/docs/start-using-samespace"
				class="flex flex-col gap-6 p-6 -m-6 bg-white hover:bg-[#f7f7f7] transform hover:scale-[0.95] transition-all duration-300"
			>
				<div class="w-full aspect-[2/1] bg-black/5 text-black grid place-items-center">
					<GettingStarted />
				</div>
				<div class="flex-1 space-y-1">
					<p class="text-lg font-semibold">Getting Started</p>
					<p class="text-lg font-serif opacity-70 leading-snug">
						Get going with our easy-to-follow guide of Samespace.
					</p>
				</div>
			</a>

			<a
				href="https://www.youtube.com/@samespace"
				target="_blank"
				rel="noreferer"
				class="flex flex-col gap-6 p-6 -m-6 bg-white hover:bg-[#f7f7f7] transform hover:scale-[0.95] transition-all duration-300"
			>
				<div class="w-full aspect-[2/1] bg-black/5 text-black grid place-items-center">
					<Tutorial />
				</div>
				<div class="flex-1 space-y-1">
					<p class="text-lg font-semibold">Tutorials</p>
					<p class="text-lg font-serif opacity-70 leading-snug">
						Not sure where to start? Have a look at our onboarding video guides!
					</p>
				</div>
			</a>
		</div>
	</section>

	<section class="px-6 py-16">
		<div class="max-w-screen-md mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-16">
			{#each topics as topic (topic.title)}
				<LinkCard
					icon={topic.title}
					title={topic.title}
					iconColor={topic.color}
					subtitle={topic.description}
					link={`/docs/${topic.docs[0]?.url}`}
				/>
			{/each}
		</div>
	</section>

	<section class="px-6 py-16 bg-neutral-50">
		<div class="max-w-screen-md mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-16">
			{#each integrationArticles as article (article.title)}
				<LinkCard
					icon={article.title}
					title={article.title}
					subtitle={`Learn how to integrate ${article.title} with Samespace.`}
					link={`/docs/${article.url}`}
				/>
			{/each}
		</div>
	</section>

	<Footer />
</div>
