<script>
	import Footer from '$lib/components/Footer.svelte';

	let offices = [
		{
			name: 'Palo Alto',
			address: '3101 Park Blvd, Palo Alto CA 94306,United States',
			number: '+1 646 810 7050'
		},
		{
			name: 'Mumbai',
			address: '302 El Tara, Orchard Ave, Hiranandani Gardens, Powai Mumbai 400076',
			number: '+91 96533 52227.'
		},
		{ name: 'Manila', address: '1 Raffles Drive Makati Avenue, Makati City Philippines, 1224' },
		{ name: 'Dublin', address: '13 Adelaide Road, Dublin 2, Ireland D02 P950' }
	];
</script>

<div>
	<section class="w-full px-6 py-24 space-y-12">
		<div class="max-w-screen-md mx-auto space-y-4">
			<h1 class="text-2xl sm:text-4xl font-semibold">Contact Us</h1>
			<p class="text-lg sm:text-xl text-gray-600 font-serif">
				Need help, have questions or want to suggest a feature? Send us a message here. For more
				resources, please visit our <a class="text-accent" href="/">support docs</a>.
			</p>
		</div>

		<form class="max-w-screen-md mx-auto w-full grid grid-cols-1 gap-10" method="POST">
			<div class="flex flex-col gap-2">
				<label class="text-sm opacity-70" for="email">Email</label>
				<!-- svelte-ignore a11y-autofocus -->
				<input
					autofocus
					class="p-2.5 rounded-sm border border-gray-200 hover:border-gray-300 focus:outline-accent"
					type="email"
					name="email"
					required
					placeholder="sarah@example.com"
				/>
			</div>

			<div class="flex flex-col gap-2">
				<label class="text-sm opacity-70" for="subject">Subject</label>
				<input
					class="p-2.5 rounded-sm border border-gray-200 hover:border-gray-300 focus:outline-accent"
					type="text"
					name="subject"
					required
					placeholder="Let us know how we can help"
				/>
			</div>

			<div class="flex flex-col gap-2">
				<label class="text-sm opacity-70" for="description">Description</label>
				<textarea
					class="p-2.5 rounded-sm border border-gray-200 hover:border-gray-300 focus:outline-accent resize-y"
					rows={5}
					name="description"
					required
					placeholder="Please include as much information as possible"
				/>
				<p class="text-sm opacity-70">
					To share documents, recordings, screenshots, or crash logs, upload them to a file-sharing
					service like Dropbox, Google Drive, or Microsoft OneDrive. Then, copy and paste the URL
					above, ensuring that sharing permissions are set correctly.
				</p>
			</div>

			<button
				class="w-full px-4 py-2.5 bg-accent text-white font-semibold rounded-sm focus:outline-none focus:ring-accent/4 focus:ring-4"
				>Send Your Feedback</button
			>
		</form>
	</section>

	<section class="bg-neutral-100 px-6 py-24">
		<div class="max-w-screen-md mx-auto space-y-16">
			<h2 class="text-2xl sm:text-4xl font-semibold">Offices</h2>

			<div class="grid grid-cols-1 sm:grid-cols-2 gap-12 w-full">
				{#each offices as office}
					<div>
						<p class="font-semibold">{office.name}</p>
						<p class="opacity-60 max-w-[32ch] my-1.5">{office.address}</p>
						{#if office.number}
							<a class="text-accent" href={`tel:${office.number}`}>{office.number}</a>
						{/if}
					</div>
				{/each}
			</div>
		</div>
	</section>

	<Footer />
</div>
