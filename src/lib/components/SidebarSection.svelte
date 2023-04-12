<script>
  import { fade, slide } from "svelte/transition";
  import TopicIcon from "$lib/components/TopicIcon.svelte";
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import ChevronRightIcon from "../icons/ChevronRightIcon.svelte";

  export let section;

  $: isChildLinkOpen =
    section &&
    section.docs &&
    section.docs.length > 0 &&
    section.docs.some((doc) => {
      return `/docs/${doc.url}` === $page.url.pathname;
    });

  $: openSection = isChildLinkOpen ? $page.url.pathname : "";

  function toggleSection() {
    openSection = section.docs[0].url;
    goto(`/docs/${section.docs[0].url}`);
  }

  const iconColor = section.color;
</script>

<div class="relative flex flex-col">
  <button
    on:click={toggleSection}
    class={`flex items-center gap-2 font-semibold hover:bg-black/5 px-6 py-2.5 ${
      isChildLinkOpen ? "bg-black/5" : "bg-transparent"
    }`}
  >
    <span class="sidebar-icon" style:color={iconColor}>
      <TopicIcon name={section.title} />
    </span>
    <p class="flex-1 text-left">{section.title}</p>

    <span
      class={`opacity-40 transform transition-all duration-200 ${
        openSection ? "rotate-90" : "rotate-0"
      }`}
    >
      <ChevronRightIcon />
    </span>
  </button>

  {#if openSection}
    <div transition:slide|local class="ml-14 mt-2 mb-4">
      {#if section.docs && section.docs.length > 0}
        <div transition:fade|local class="flex flex-col space-y-3">
          {#each section.docs as doc (doc.url)}
            <a
              class={`hover:text-accent  ${
                $page.url.pathname === `/docs/${doc.url}`
                  ? "text-accent"
                  : "text-gray-700"
              }`}
              href={`/docs/${doc.url}`}>{doc.title}</a
            >
          {/each}
        </div>
      {/if}
    </div>
  {/if}
</div>
