<script>
  import { fade, slide } from "svelte/transition";
  import BezierEasing from "bezier-easing";
  import { fly } from "../utils/transitions";
  import { showSideNav } from "$lib/stores/global-store";
  import { page } from "$app/stores";
  import TopicIcon from "$lib/components/TopicIcon.svelte";
  import ChevronRightIcon from "../icons/ChevronRightIcon.svelte";

  let openSection = "";

  function toggleSection(section) {
    openSection = section.title;
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  transition:fade={{
    duration: 400,
    easing: BezierEasing(0.59, 0.01, 0.28, 1),
  }}
  on:click={() => {
    showSideNav.set(false);
  }}
  class="fixed inset-0 bg-black/70 z-40"
/>

<aside
  transition:fly={{
    x: "100%",
    opacity: 1,
    duration: 400,
    easing: BezierEasing(0.5, 0.45, 0.42, 0.99),
  }}
  class="fixed top-0 right-0 bottom-0 z-40 bg-white max-w-[375px] w-full"
>
  <div
    class="w-full h-16 px-6 flex items-center justify-end border-b border-gray-100"
  >
    <button
      class="hover:underline"
      on:click={() => {
        showSideNav.set(false);
      }}
    >
      Close
    </button>
  </div>

  <div class="space-y-0.5 py-6 h-[calc(100vh_-_64px)] overflow-auto">
    {#each $page.data.sidebarLinks as section (section.id)}
      <div class="relative flex flex-col">
        <button
          on:click={() => toggleSection(section)}
          class={`flex items-center gap-2 font-semibold hover:bg-black/5 px-6 py-2.5 ${
            openSection === section.title ? "bg-black/5" : "bg-transparent"
          }`}
        >
          <span class="sidebar-icon">
            <TopicIcon name={section.title} />
          </span>
          <p class="flex-1 text-left">{section.title}</p>

          <span
            class={`opacity-40 transform transition-all duration-200 ${
              openSection === section.title ? "rotate-90" : "rotate-0"
            }`}
          >
            <ChevronRightIcon />
          </span>
        </button>

        {#if openSection === section.title}
          <div transition:slide|local class="ml-14 mt-2 mb-4">
            {#if section.docs && section.docs.length > 0}
              <div transition:fade class="flex flex-col space-y-4">
                {#each section.docs as doc (doc.url)}
                  <a
                    href={`/docs/${doc.url}`}
                    class={`hover:text-accent text-left transition-all transform active:scale-[0.98] ${
                      $page.url.pathname === `/docs/${doc.url}`
                        ? "text-accent"
                        : "text-gray-700"
                    }`}>{doc.title}</a
                  >
                {/each}
              </div>
            {/if}
          </div>
        {/if}
      </div>
    {/each}
  </div>
</aside>
