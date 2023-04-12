<script>
  export let title = "";
  export let icon = "";
  export let subtitle = "";
  export let link;
  export let iconColor = "#000";
  import TopicIcon from "$lib/components/TopicIcon.svelte";
</script>

<a
  class="flex flex-col -m-6 p-6 rounded-md bg-transparent hover:bg-black/5 transform hover:scale-[0.95] transition-all duration-300"
  href={link}
>
  <span style:color={iconColor}>
    <TopicIcon name={icon} />
  </span>
  <div class="text-lg font-semibold mt-2 mb-1">{title}</div>
  <div class="text-lg font-serif leading-snug opacity-70">
    {subtitle}
  </div>
</a>
