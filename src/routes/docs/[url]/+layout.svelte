<script>
  import DocsSidebar from "$lib/components/DocsSidebar.svelte";
  import { fly } from "svelte/transition";
  import { beforeNavigate, afterNavigate } from "$app/navigation";
  import { showSideNav, showSearchView } from "$lib/stores/global-store";
  import { onMount } from "svelte";
  import { animate } from "motion";

  export let data;

  $: ({ sidebarLinks, links } = data);

  let currentPageIndex;
  let nextPageIndex;

  beforeNavigate((data) => {
    let currentPageURL = data.from?.url.pathname;
    let nextPageURL = data.to?.url.pathname;

    let currentPageLink =
      currentPageURL &&
      currentPageURL.split("/").length > 1 &&
      currentPageURL.split("/")[2];
    let nextPageLink =
      nextPageURL &&
      nextPageURL.split("/").length > 1 &&
      nextPageURL.split("/")[2];

    currentPageIndex = links.findIndex((item) => item.url === currentPageLink);
    nextPageIndex = links.findIndex((item) => item.url === nextPageLink);
  });

  afterNavigate(() => {
    showSideNav.set(false);
    showSearchView.set(false);
    document.getElementById("main").scrollTop = 0;
  });

  onMount(() => {
    animate(
      ".document",
      { opacity: [0, 1] },
      { duration: 0.4, easing: [0.5, 0.8, 0.42, 0.99] }
    );
  });
</script>

<div
  class="w-full flex items-stretch relative h-[calc(100vh_-_64px)] overflow-hidden"
>
  <DocsSidebar {sidebarLinks} />
  <div
    id="main"
    class="transition-container scroll-smooth min-[960px]:ml-[280px] w-full overflow-auto"
  >
    {#key data.url.pathname}
      <div
        class="px-6 sm:px-12 min-[960px]:px-20 py-12 document"
        in:fly|local={{
          y: nextPageIndex > currentPageIndex ? "4%" : "-4%",
          opacity: 0,
          duration: 400,
          delay: 400,
        }}
        out:fly|local={{
          y: nextPageIndex > currentPageIndex ? "-4%" : "4%",
          opacity: 0,
          duration: 400,
        }}
      >
        <slot />
      </div>
    {/key}
  </div>
</div>

<style>
  .transition-container {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
  }

  .transition-container > * {
    grid-row: 1;
    grid-column: 1;
  }
</style>
