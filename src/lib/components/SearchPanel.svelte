<script>
  import { showSearchView } from "$lib/stores/global-store";
  import { fade } from "svelte/transition";
  import BezierEasing from "bezier-easing";
  import { fly } from "../utils/transitions";
  import ArrowRightIcon from "../icons/ArrowRightIcon.svelte";
  import SearchBar from "./SearchBar.svelte";

  let searchTerm = "";
  export let topArticles;
</script>

<svelte:window
  on:keydown|once={(e) => {
    if (e.key === "Escape") {
      showSearchView.set(false);
    }
  }}
/>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  on:click={() => {
    showSearchView.set(false);
  }}
  transition:fade={{
    duration: 400,
    easing: BezierEasing(0.59, 0.01, 0.28, 1),
  }}
  class="fixed inset-x-0 top-16 bottom-0 bg-black/70 z-10"
/>

<div
  transition:fly={{
    duration: 400,
    y: "-100%",
    easing: BezierEasing(0.59, 0.01, 0.28, 1),
  }}
  class="fixed top-16 inset-x-0 z-10 bg-white px-6 py-12 flex flex-col gap-12"
>
  <SearchBar
    {searchTerm}
    placeholder="Search Samespace Support"
    showSubmitButton
    showSuggestions={false}
  />

  <div
    in:fade={{ duration: 0.4 }}
    out:fade={{ duration: 0.2 }}
    class="flex flex-col gap-4"
  >
    <p class="opacity-40">Quick Links</p>
    {#each topArticles as article}
      <a
        class="flex items-center gap-2 p-2 -m-2 rounded-md bg-white hover:bg-gray-100 transition-all duration-300"
        href={article.url}
      >
        <span><ArrowRightIcon /></span>
        <span>{article.title}</span>
      </a>
    {/each}
  </div>
</div>
