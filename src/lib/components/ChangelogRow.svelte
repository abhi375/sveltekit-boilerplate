<script>
  import DateView from "$lib/components/DateView.svelte";
  import AlertIcon from "$lib/icons/AlertIcon.svelte";
  import ImprovementIcon from "$lib/icons/ImprovementIcon.svelte";
  import NewIcon from "$lib/icons/NewIcon.svelte";
  import { marked } from "marked";
  import { PUBLIC_API_URL } from "$env/static/public";
  export let update;

  let contentClass =
    "prose prose-lg md:prose-xl font-serif prose-p:font-serif prose-p:leading-[1.4] prose-li:leading-[1.4] prose-li:list-outside prose-ul:text-black";

  let headingClass =
    "mb-6 flex items-center gap-2 text-lg md:text-xl font-bold";
</script>

<div class="grid gap-8 border-b border-dashed border-black/20  text-black">
  <div class="">
    {#if update.topics && update.topics.length > 0}
      <div class="flex flex-wrap gap-2">
        {#each update.topics as topic}
          <div
            class="inline-flex items-center justify-center rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold uppercase leading-snug tracking-widest dark:bg-neutral-800"
          >
            {topic.topics_id.title}
          </div>
        {/each}
      </div>
    {/if}
    <div
      class="flex flex-col md:flex-row md:items-center justify-between gap-1 md:gap-3  my-6"
    >
      <p
        class="dark:hover:text-lightAccent flex-1 text-ellipsis font-sans text-lg md:text-2xl font-bold no-underline hover:text-accent"
      >
        {update.title}
      </p>

      <DateView createdDate={update.date_created} />
    </div>

    {#if update.image}
      <img
        class="aspect-[2.75/1] w-full overflow-hidden rounded-lg bg-gray-100"
        src={`${PUBLIC_API_URL}/assets/${update.image}?format=webp&?width=640`}
        alt={update.title}
      />
    {/if}

    {#if update.overview}
      <p class="my-6 font-serif text-lg md:text-xl">{@html update.overview}</p>
    {/if}

    {#if update.new}
      <article class="my-12">
        <h2 class={headingClass}>
          <span class="text-orange-600"><NewIcon /></span>
          <span>New</span>
        </h2>

        <div class={contentClass}>
          {@html marked(update.new)}
        </div>
      </article>
    {/if}

    {#if update.improvements}
      <article class="my-12">
        <h2 class={headingClass}>
          <span class="text-green-600"><ImprovementIcon /></span>
          <span>Improvements</span>
        </h2>

        <div class={contentClass}>
          {@html marked(update.improvements)}
        </div>
      </article>
    {/if}

    {#if update.fixes}
      <article class="my-12">
        <h2 class={headingClass}>
          <span class="text-rose-600"><AlertIcon /></span>
          <span>Fixes</span>
        </h2>

        <div class={contentClass}>
          {@html marked(update.fixes)}
        </div>
      </article>
    {/if}
  </div>
</div>
