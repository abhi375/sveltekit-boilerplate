<script>
  import { page } from "$app/stores";
  import SearchBar from "$lib/components/SearchBar.svelte";
  import NoSearchResult from "$lib/illustrations/NoSearchResult.svelte";
  import { fly } from "$lib/utils/transitions";
  import TopicIcon from "../../lib/components/TopicIcon.svelte";

  export let data;

  $: searchTerm = $page.data.query;

  
</script>

<svelte:head>
  <title>Samespace Support - Search Results</title>
  <meta name="description" content="Samespace Support - Search Results" />
  <meta name="twitter:title" content="Samespace Support - Search Results" />
  <meta
    name="twitter:description"
    content="Samespace Support - Search Results"
  />
</svelte:head>

<section
  in:fly|local={{ opacity: 0, y: 20, duration: 600, delay: 600 }}
  out:fly|local={{ opacity: 0, duration: 600 }}
  class="px-6 py-16"
>
  <div class="max-w-screen-md mx-auto">
    <SearchBar {searchTerm} autofocus={false} showSuggestions={false} />

    {#if data.searchResults.length > 0}
      <ul class="mt-16">
        {#each data.searchResults as doc}
          <li
            class=" group bg-white hover:bg-neutral-100 border-b border-gray-200 first:border-t"
          >
            <a class="flex py-8 gap-2 " href={`/${doc.url}`}>
              <span class="w-8 h-8 grid place-items-center text-accent">
                <TopicIcon name={doc.topic.title} />
              </span>
              <div class="flex-1 space-y-1">
                <div class="text-lg font-semibold group-hover:text-accent">
                  {doc.title}
                </div>
                <div
                  class="text-lg text-black/70 font-serif group-hover:text-black"
                >
                  Apple Developer Program provides resources for developing and
                  distributing iOS, Mac, and Apple Watch apps on the App Store
                </div>
              </div>
            </a>
          </li>
        {/each}
      </ul>
    {:else}
      <div
        class="w-full py-16 text-center flex items-center flex-col justify-center border-b border-gray-200 rounded"
      >
        <div class="w-48">
          <NoSearchResult />
        </div>
        <p class="text-xl font-semibold mt-4 mb-2">No Result</p>
        <p class="text-lg font-serif opacity-70">
          Sorry, no matches were found. Please try another search.
        </p>
      </div>
    {/if}
  </div>
</section>
