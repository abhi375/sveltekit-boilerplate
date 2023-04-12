<script>
  export let createdDate;

  let date = new Date(createdDate);

  let humanReadableDate = date.toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
  });
</script>

<p class="text-neutral-500 font-medium text-sm">
  {humanReadableDate}
</p>
