<script>
  import SidebarSection from "$lib/components/SidebarSection.svelte";
  import { animate } from "motion";
  import { onMount } from "svelte";
  export let sidebarLinks;

  onMount(() => {
    animate(
      ".sidebar",
      { x: [-280, 0], opacity: [0, 1] },
      { duration: 0.8, easing: [0.16, 1, 0.3, 1] }
    );
  });
</script>

<aside
  class="w-[280px] sidebar hidden min-[960px]:block fixed overflow-auto top-16 left-0 bottom-0 border-r border-gray-200 bg-neutral-50 py-8"
>
  <div class="space-y-0.5">
    {#each sidebarLinks as section (section.id)}
      <SidebarSection {section} />
    {/each}
  </div>
</aside>
