<script>
  import { marked } from "marked";
  import { page } from "$app/stores";
  export let data;

  $: ({ article } = data);

  const document = $page.url.pathname.split("/")[2];

  const index = data.links.findIndex((link) => {
    return link.url === document;
  });

  const prev = data.links[index - 1];
  const next = data.links[index + 1];
</script>

<svelte:head>
  <title>{`${article.title} - Samespace Guide`}</title>
  <meta name="description" content={`Learn about ${article.title} in Samespace`} />
  <meta name="twitter:title" content={`${article.title} - Samespace Guide`} />
  <meta name="twitter:description" content={`Learn about ${article.title} in Samespace`} />
  <meta property="og:image" content={"https://drop.samespace.com/meta.png"} />
</svelte:head>

<div class="w-full max-w-screen-md mx-auto mx min-[960px]:mx-0">
  <div class="flex flex-col gap-4">
    <h1
      class="text-3xl md:text-[36px] font-semibold flex items-center gap-2 group "
    >
      {article.title}
    </h1>
  </div>

  {#if article.video}
    <div class="w-full overflow-hidden my-8 rounded-lg aspect-video">
      {@html article.video}
    </div>
  {/if}

  {#if article.content}
    <div
      class="prose prose-xl my-8 w-full max-w-none prose-p:font-serif prose-p:text-black prose-p:leading-[1.5] prose-li:leading-[1.5] prose-li:font-serif prose-th:opacity-60 prose-th:text-[12px] prose-li:my-1 prose-th:uppercase prose-th:tracking-wider prose-td:font-serif prose-img:border-black/10 prose-img:border-2 prose-img:rounded-md prose-img:overflow-hidden"
    >
      {@html marked(article.content)}
    </div>
  {/if}

  <div
    class="flex items-center justify-between gap-8 pt-8 border-t border-gray-200"
  >
    <div class={`w-full ${prev ? "opacity-100" : "opacity-0"}`}>
      {#if prev}
        <a
          class="text-base flex justify-center w-full hover:bg-gray-100 border-gray-200 border rounded-lg text-black items-center gap-0.5  p-3 font-medium text-ellipsis whitespace-nowrap"
          href={`/docs/${prev.url}`}
        >
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13.25 8.75L9.75 12L13.25 15.25"
            />
          </svg>
          <span>{prev.title}</span>
        </a>
      {/if}
    </div>

    <div class={`w-full ${next ? "opacity-100" : "opacity-0"}`}>
      {#if next}
        <a
          class="text-base flex justify-center w-full hover:bg-gray-100 border-gray-200 border rounded-lg text-black items-center gap-0.5  p-3 font-medium text-ellipsis whitespace-nowrap"
          href={`/docs/${next.url}`}
        >
          <span>{next.title}</span>

          <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10.75 8.75L14.25 12L10.75 15.25"
            />
          </svg>
        </a>
      {/if}
    </div>
  </div>
</div>
