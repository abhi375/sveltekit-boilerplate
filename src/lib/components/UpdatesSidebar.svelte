<script>
  import { showUpdatesSidebar } from "$lib/stores/global-store";

  import { fade, slide } from "svelte/transition";
  import BezierEasing from "bezier-easing";
  import { fly } from "../utils/transitions";
  import ChevronRightIcon from "../icons/ChevronRightIcon.svelte";

  import { page } from "$app/stores";
  import ChangelogRow from "./ChangelogRow.svelte";

  $: updates = $page.data.changelogs;

  let scrollPosition = 0;
  let showShadow = false;

  const handle_keydown = (e) => {
    if (e.key === "Escape") {
      showUpdatesSidebar.set(false);
    }
  };

  function disableBodyScroll() {
  document.body.style.overflow = "hidden";
}

$: if ($showUpdatesSidebar) {
  disableBodyScroll();
} else {
  document.body.style.overflow = "auto";
}

  function handleScroll(event) {
    scrollPosition = event.target.scrollTop;
    if (scrollPosition >= 80) {
      showShadow = true;
    } else {
      showShadow = false;
    }
  }
</script>

<svelte:window on:keydown|once={handle_keydown} />

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  on:click={() => {
    showUpdatesSidebar.set(false);
  }}
  transition:fade={{
    duration: 400,
    easing: BezierEasing(0.5, 0.45, 0.42, 0.99),
  }}
  class={`fixed inset-0 bg-black/80 duration-300 z-30`}
/>

<aside
  transition:fly={{
    x: "100%",
    opacity: 1,
    duration: 400,
    easing: BezierEasing(0.5, 0.45, 0.42, 0.99),
  }}
  class="fixed top-0 right-0 bottom-0 z-30 bg-white max-w-[720px] w-full"
>
  <div
    class={`flex items-center relative  justify-between px-6 md:px-10 h-16 bg-white border-b border-gray-100 transition-all duration-200 ${
      showShadow ? "shadow-[0_4px_8px_0px_rgba(0,0,0,0.12)]" : "shadow-none"
    }`}
  >
    <p class="font-semibold">Updates</p>
    <button
      class="w-10 h-10 rounded-md bg-white hover:bg-gray-100 text-black/50 hover:text-black/100 grid place-items-center"
      on:click={() => {
        showUpdatesSidebar.set(false);
      }}
    >
      <ChevronRightIcon />
    </button>
  </div>

  {#if updates && updates.length > 0}
    <section
      on:scroll={handleScroll}
      class="px-6 md:px-10 py-16 bg-white dark:bg-black h-[calc(100vh_-_64px)] overflow-y-auto"
    >
      <div class="flex flex-col relative gap-20">
        {#each updates as update (update.id)}
          <ChangelogRow {update} />
        {/each}
      </div>
    </section>
  {:else}
    <section class="px-8 py-16 h-[calc(100vh_-_64px)] grid place-items-center">
      <div
        class="max-w-[40ch] mx-auto flex flex-col relative gap-4 items-center justify-center"
      >
        <div class="flex flex-col items-center text-center gap-2">
          <h2 class="font-semibold font-sans text-xl">No updates found</h2>
          <p class="text-xl font-serif opacity-70">
            As soon as we release a new feature or fix any issues, we'll let you
            know here.
          </p>
        </div>
      </div>
    </section>
  {/if}
</aside>
